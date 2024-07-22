import {api} from './api';
import {checkIfSectionExist} from './checkIfSectionExist';
import {getMessage} from './i18n';
import {getSectionContent} from './getSectionContent';

const removeSection = async (index: string, anchor: string, summary?: string) => {
	const {wgPageName} = mw.config.get();
	const ifSectionExist = await checkIfSectionExist(index, anchor);

	if (ifSectionExist !== true) {
		return;
	}

	const content = await getSectionContent(wgPageName, index);

	if (content === null) {
		return;
	}

	await api.edit(wgPageName, () => {
		return {
			section: index,
			text: '',
			summary: summary ?? getMessage('Delete summary'),
			minor: true,
		};
	});
};

export {removeSection};
