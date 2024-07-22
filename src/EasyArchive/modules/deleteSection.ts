import {api} from './api';
import {getMessage} from './i18n';

const deleteSection = async (title: string, section: string, summary?: string) => {
	await api.edit(title, () => {
		return {
			section,
			text: '',
			summary: summary ?? getMessage('Delete summary'),
			minor: true,
		};
	});
};

export {deleteSection};
