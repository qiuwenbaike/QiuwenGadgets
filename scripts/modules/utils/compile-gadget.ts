import {buildFiles, generateDefinitionItem, generateFileArray, generateFileNames, getLicense} from './build-util';
import type {SourceFiles} from '../types';
import chalk from 'chalk';

type SourceFile = SourceFiles[keyof SourceFiles];

/**
 * Compile one gadget (script and/or style) and return its `MediaWiki:Gadgets-definition` item.
 *
 * @return the definition item, or `null` when the gadget produced no files
 */
export const compileGadget = async (gadgetName: string, source: SourceFile): Promise<string | null> => {
	let gadgetFiles = '|';
	const licenseText = getLicense(gadgetName, source.license);
	const {definition, script, scripts, style, styles} = source;

	if (script || scripts?.length) {
		const hasVue = scripts?.some((fileName) => {
			return fileName.endsWith('.vue');
		});
		if (hasVue && !script) {
			console.log(
				chalk.red(`The ${chalk.bold(gadgetName)} uses Vue components but missing entry file, skipping it.`)
			);
			return null;
		}

		const builtScriptFileNames = await buildFiles(gadgetName, 'script', {
			dependencies: definition.dependencies,
			externalPackages: definition.externalPackages,
			licenseText,
			files: generateFileArray(script, scripts),
		});
		const scriptFileNames = generateFileNames(gadgetName, builtScriptFileNames);
		gadgetFiles += scriptFileNames ? `${scriptFileNames}|` : '';
	} else if (style || styles?.length) {
		const builtStyleFileNames = await buildFiles(gadgetName, 'style', {
			licenseText,
			files: generateFileArray(style, styles),
		});
		const styleFileNames = generateFileNames(gadgetName, builtStyleFileNames);
		gadgetFiles += styleFileNames ? `${styleFileNames}|` : '';
	}

	gadgetFiles = gadgetFiles.replace(/\|$/, '');
	if (!gadgetFiles) {
		return null;
	}

	return generateDefinitionItem(gadgetName, definition, gadgetFiles);
};
