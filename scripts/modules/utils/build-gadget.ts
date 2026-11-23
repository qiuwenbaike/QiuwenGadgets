import {__rootDir} from './general-util';
import chalk from 'chalk';
import {compileGadget} from './compile-gadget';
import {existsSync} from 'node:fs';
import {exit} from 'node:process';
import {findSourceFile} from './build-util';
import path from 'node:path';
import {rimraf} from 'rimraf';
import {updateDefinitionItem} from './definition-items';

const definitionPath = path.join(__rootDir, 'dist/definition.txt');

export const buildGadget = async (gadgetNames: string[] = []) => {
	const sourceFiles = findSourceFile();

	const targets = [...new Set(gadgetNames)];
	const unknown = targets.filter((gadgetName) => {
		return !sourceFiles[gadgetName];
	});
	if (unknown.length) {
		console.log(chalk.red(`✘ Unknown gadget(s): ${unknown.join(', ')}`));
		exit(1);
	}
	if (!existsSync(definitionPath)) {
		console.log(chalk.red('✘ dist/definition.txt not found, please run a full build (`pnpm build:only`) first.'));
		exit(1);
	}

	console.log(chalk.yellow(`--- starting build... (${targets.join(', ')})`));

	for (const gadgetName of targets) {
		// Only clean this gadget's output: stale files of the built gadget are removed, while
		// every other gadget's dist directory stays untouched.
		const distDirectory = path.join(__rootDir, 'dist', gadgetName);
		if (existsSync(distDirectory)) {
			await rimraf(distDirectory);
		}

		const definitionItem = await compileGadget(gadgetName, sourceFiles[gadgetName]!);
		if (!definitionItem) {
			console.log(chalk.red(`The ${chalk.bold(gadgetName)} produced no files, skipping its definition item.`));
			continue;
		}
		updateDefinitionItem(gadgetName, definitionItem);
	}

	console.log(chalk.green('    build completed.'));
};
