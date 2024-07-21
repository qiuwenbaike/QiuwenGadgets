import {api} from './api';
import {checkIfPageExist} from './checkIfPageExist';
import {getMessage} from './i18n';

const archiveSection = async (archiveTo: string, text: string) => {
	const pageExist = await checkIfPageExist(archiveTo);
	if (!pageExist) {
		await api.create(
			archiveTo,
			{
				summary: getMessage('Create summary'),
				minor: true,
			},
			'{{talkarchive}}'
		);
	}
	await api.edit(archiveTo, () => {
		return {
			appendtext: `\n\n${text}`,
			summary: getMessage('Archive summary'),
			minor: true,
		};
	});
};

export {archiveSection};
