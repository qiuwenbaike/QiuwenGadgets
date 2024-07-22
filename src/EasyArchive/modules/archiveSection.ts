import {api} from './api';
import {checkIfPageExist} from './checkIfPageExist';
import {checkIfSectionExist} from './checkIfSectionExist';
import {getMessage} from './i18n';
import {getSectionContent} from './getSectionContent';
import {removeSection} from './removeSection';

const archiveSection = async (index: string, anchor: string, archiveTo: string) => {
	const {wgPageName} = mw.config.get();
	const ifSectionExist = await checkIfSectionExist(index, anchor);

	if (ifSectionExist !== true) {
		return;
	}

	const content = await getSectionContent(wgPageName, index);

	if (content === null) {
		return;
	}

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
			appendtext: `\n\n${content}`,
			summary: getMessage('Archive summary'),
			minor: true,
		};
	});

	await removeSection(wgPageName, index, getMessage('Archive summary'));
};

export {archiveSection};
