import {archiveSection} from './archiveSection';
import {checkIfSectionExist} from './checkIfSectionExist';
import {deleteSection} from './deleteSection';
import {getSectionContent} from './getSectionContent';

const archive = async (index: string, anchor: string, archiveTo: string) => {
	const {wgPageName} = mw.config.get();
	const ifSectionExist = await checkIfSectionExist(index, anchor);

	if (ifSectionExist !== true) {
		return;
	}

	const content = await getSectionContent(wgPageName, index);

	if (content === null) {
		return;
	}

	await archiveSection(archiveTo, content);
	await deleteSection(wgPageName, index, '存档内容');
};

export {archive};
