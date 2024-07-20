import {api} from './api';

const deleteSection = async (title: string, section: string, summary?: string) => {
	await api.edit(title, () => {
		return {
			section,
			text: '',
			summary: summary ?? '删除内容',
			minor: true,
		};
	});
};

export {deleteSection};
