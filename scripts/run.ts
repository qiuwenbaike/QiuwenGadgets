import {argv, exit} from 'node:process';
import {build} from './modules/build';
import chalk from 'chalk';
import {deploy} from './modules/deploy';
import {formatJSON} from './modules/formatJSON';
import minimist from 'minimist';

const {
	build: isBuild,
	deploy: isDeploy,
	'format-json': isFormatJSON,
	'skip-ask': isSkipAsk,
	test: isTest,
	gadget: gadgetNames,
	...rest
} = minimist<{
	build?: boolean;
	deploy?: boolean;
	'format-json'?: boolean;
	'skip-ask'?: boolean;
	test: boolean;
	gadget?: string | boolean;
}>(argv.slice(2), {
	string: ['gadget'],
});

const gadgetFilter =
	typeof gadgetNames === 'string'
		? gadgetNames
				.split(',')
				.map((gadgetName) => {
					return gadgetName.trim();
				})
				.filter(Boolean)
		: [];

if (gadgetNames !== undefined && !gadgetFilter.length) {
	console.log(chalk.red('✘ No gadget specified after --gadget, program terminated.'));
	exit(1);
}

if (isBuild) {
	await build();
}

if (isDeploy) {
	await deploy(isSkipAsk, isTest, gadgetFilter);
}

if (isFormatJSON) {
	await formatJSON(rest._);
}
