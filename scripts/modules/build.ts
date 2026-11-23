import {cleanUpDist, findSourceFile, saveDefinition} from './utils/build-util';
import {__rootDir} from './utils/general-util';
import {buildGadget} from './utils/build-gadget';
import chalk from 'chalk';
import {compileGadget} from './utils/compile-gadget';

/**
 * Compile scripts and styles and generate corresponding definitions
 *
 * @param gadgetNames When passed, only these gadgets are compiled; their `dist/<gadgetName>`
 * directories are refreshed and only their `dist/definition.txt` items are updated. Other
 * gadgets' output is left untouched.
 */
const build = async (gadgetNames: string[] = []) => {
	const sourceFiles = findSourceFile();

	if (gadgetNames.length) {
		buildGadget(gadgetNames);
		return;
	}

	console.log(chalk.yellow('--- starting build...'));

	await cleanUpDist();

	const definitions = await Promise.all(
		Object.entries(sourceFiles).map(([gadgetName, source]) => {
			return compileGadget(gadgetName, source);
		})
	);

	saveDefinition(definitions.filter(Boolean) as string[]);

	console.log(chalk.green('    build completed.'));
};

export {build};
