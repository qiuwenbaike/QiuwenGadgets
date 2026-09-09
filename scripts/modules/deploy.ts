import {DEPLOY_USER_AGENT, MAX_CONCURRENCY} from '../constant';
import {FakeApi, fakeConfig} from './utils/deploy-test';
import {__rootDir, prompt, readFileContent} from './utils/general-util';
import {
	checkConfig,
	deleteUnusedPages,
	generateDirectTargets,
	generateTargets,
	loadConfig,
	makeEditSummary,
	readDefinition,
	saveDefinition,
	saveDefinitionSectionPage,
	saveDescription,
	saveFiles,
	savePages,
} from './utils/deploy-util';
import type {Api} from './types';
import {Mwn} from 'mwn';
import PQueue from 'p-queue';
import chalk from 'chalk';
import {exit} from 'node:process';
import moment from 'moment';
import path from 'node:path';

/**
 * @private
 */
const concurrency = Math.min(MAX_CONCURRENCY, 256);

const apiQueue = new PQueue({
	concurrency,
});

/**
 * Deploy definitions, scripts and styles
 *
 * @param {boolean} [isSkipAsk=false] Run the deploy process directly or not
 * @param {boolean} [isTest=false] Run the deploy process in test mode or not
 * @param {string[]} [gadgetFilter=[]] Only deploy the given gadgets without affecting other gadgets,
 * including skipping global pages and the deletion of unused pages
 */
const deploy = async (isSkipAsk = false, isTest = false, gadgetFilter: string[] = []) => {
	// Note: The program may terminate due to an expected exception
	const definitionText = readDefinition();

	const config: ReturnType<typeof loadConfig> = isTest ? fakeConfig : loadConfig();
	await checkConfig(config, {
		isSkipAsk,
		isCheckApiUrlOnly: true,
	});

	const uncheckedApis = Object.entries(config).map<Api>(([site, credentials]) => {
		return {
			site,
			apiInstance: isTest
				? (new FakeApi(credentials) as Mwn)
				: new Mwn({
						...credentials,
						maxRetries: 10,
						userAgent: DEPLOY_USER_AGENT,
					}),
		};
	});

	const sites: Api['site'][] =
		uncheckedApis.length > 1
			? isSkipAsk
				? uncheckedApis.map<Api['site']>(({site}) => {
						return site;
					})
				: await prompt({
						type: 'multiselect',
						message: 'Select sites to deploy',
						choices: uncheckedApis.map<{
							title: string;
							value: string;
							selected: boolean;
						}>(({site}) => {
							return {
								title: site,
								value: site,
								selected: true,
							};
						}),
						max: Number.POSITIVE_INFINITY,
						min: 0,
					})
			: [uncheckedApis[0]!.site];

	const apis: Api[] = [];
	for (const {apiInstance, site} of uncheckedApis) {
		if (!sites.includes(site)) {
			continue;
		}

		let isUseOAuth = false;
		try {
			apiInstance.initOAuth();
			isUseOAuth = true;
		} catch {
			await checkConfig(config, {
				isSkipAsk,
			});
			apiInstance.setOptions(config);
		}

		console.log(chalk.yellow(`--- [${chalk.bold(site)}] logging in...`));

		try {
			if (isUseOAuth) {
				await apiInstance.getTokensAndSiteInfo();
			} else {
				await apiInstance.login();
			}

			console.log(chalk.green(`${' '.repeat(site.length + 7)}login successful.`));

			apis.push({
				apiInstance,
				site,
			});
		} catch (error) {
			console.log(chalk.red(`${' '.repeat(site.length + 7)}login failed.`));
			console.log(chalk.red(`${' '.repeat(site.length + 7)}skipped deployment of site ${chalk.bold(site)}`));
			console.error(error);
			continue;
		}
	}

	if (!apis.length) {
		console.log(chalk.red('No site configuration detected, program terminated.'));
		exit(1);
	}

	if (!isSkipAsk) {
		await prompt('> Confirm deployment?', 'confirm', true);
	}

	const targets = generateTargets(gadgetFilter);
	const fallbackEditSummary = await makeEditSummary(isSkipAsk);

	for (const api of apis) {
		const {site} = api;
		const enabledGadgets: string[] = [];

		// Gadgets in the filter that will be added or updated on the current site
		const siteUpdateGadgets = gadgetFilter.filter((gadgetName) => {
			const target = targets[gadgetName];
			if (!target) {
				return false;
			}
			if (target.excludeSites.includes(site)) {
				return false;
			}
			if (target.includeSites.length && !target.includeSites.includes(site)) {
				return false;
			}
			return true;
		});
		// Gadgets in the filter that are not enabled on the current site,
		// the definition lines of which will be removed from the definition page
		const siteRemoveGadgets = gadgetFilter.filter((gadgetName) => {
			return !siteUpdateGadgets.includes(gadgetName);
		});

		const timeFormat = 'YYYY-MM-DD HH:mm:ss';

		const startTime = moment();
		const startTimeFormatted = startTime.format(timeFormat);
		console.log(chalk.blue(`--- [${chalk.bold(site)}] all starting at ${startTimeFormatted}`));

		console.log(chalk.yellow(`    [${chalk.bold(site)}] deploying...`));

		await Promise.all(
			Object.entries(targets).map(async ([gadgetName, {description, includeSites, excludeSites, files}]) => {
				if (excludeSites.includes(site)) {
					return;
				}

				if (includeSites.length && !includeSites.includes(site)) {
					return;
				}

				enabledGadgets.push(gadgetName);

				const originDefinitionFilePath = path.join(__rootDir, `src/${gadgetName}/definition.json`);
				const originDefinitionEditSummary = await makeEditSummary(isSkipAsk, {
					fallbackEditSummary,
					filePath: originDefinitionFilePath,
				});
				saveDescription(gadgetName, description, api, originDefinitionEditSummary);

				await Promise.all(
					files.map(async ([originFileName, fileName]) => {
						const filePath = path.join(__rootDir, `dist/${gadgetName}/${originFileName}`);
						const fileContent = readFileContent(filePath);
						const fileEditSummary = await makeEditSummary(isSkipAsk, {
							fallbackEditSummary,
							filePath,
						});
						saveFiles(gadgetName, fileName, fileContent, api, fileEditSummary);
					})
				);
			})
		);

		const definitionFilePath = path.join(__rootDir, 'dist/definition.txt');
		const definitionEditSummary = await makeEditSummary(isSkipAsk, {
			fallbackEditSummary,
			filePath: definitionFilePath,
		});
		const currentSiteDefinitionText = await saveDefinition(
			definitionText,
			enabledGadgets,
			api,
			definitionEditSummary,
			{
				updateGadgets: siteUpdateGadgets,
				removeGadgets: siteRemoveGadgets,
				isTest,
			}
		);
		if (
			currentSiteDefinitionText !== undefined &&
			// In a partial deployment, skip the section pages if no gadget needs to be updated on the current site
			(!gadgetFilter.length || siteUpdateGadgets.length)
		) {
			saveDefinitionSectionPage(currentSiteDefinitionText, api, definitionEditSummary, siteUpdateGadgets);
		}

		if (gadgetFilter.length) {
			console.log(chalk.yellow(`    [${chalk.bold(site)}] partial deployment, skipping global pages.`));
		} else {
			const globalTargets = await generateDirectTargets(site);
			const globalTargetsFilePath = path.join(__rootDir, 'src/global.json');
			const globalTargetsEditSummary = await makeEditSummary(isSkipAsk, {
				fallbackEditSummary,
				filePath: globalTargetsFilePath,
			});
			for (const [pageTitle, pageContent] of globalTargets) {
				savePages(pageTitle, pageContent, api, globalTargetsEditSummary);
			}
		}

		await apiQueue.onIdle();

		console.log(chalk.green(`    [${chalk.bold(site)}] deployment successful.`));

		if (gadgetFilter.length) {
			console.log(
				chalk.yellow(`    [${chalk.bold(site)}] partial deployment, skipping deletion of unused pages.`)
			);
		} else {
			console.log(chalk.yellow(`    [${chalk.bold(site)}] deleting unused pages...`));

			await deleteUnusedPages(api, fallbackEditSummary, isSkipAsk);

			await apiQueue.onIdle();

			console.log(chalk.green(`    [${chalk.bold(site)}] unused pages deleted successful.`));
		}

		const endTime = moment();
		const endTimeFormatted = endTime.format(timeFormat);
		const totalSeconds = endTime.diff(startTime, 'seconds');
		const calcMinutes = Math.floor(totalSeconds / 60);
		const calcSeconds = totalSeconds % 60;
		console.log(chalk.blue(`--- [${chalk.bold(site)}] all succeeded at ${endTimeFormatted}`));

		const timeTaken =
			calcMinutes > 0
				? `${calcMinutes} minutes and ${Math.floor(calcSeconds)} seconds`
				: `${Math.floor(calcSeconds)} seconds`;
		console.log(chalk.green(`${' '.repeat(site.length + 7)}all tasks took ${timeTaken}.`));
	}
};

export {apiQueue, deploy};
