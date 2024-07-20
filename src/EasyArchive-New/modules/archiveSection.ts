import {api} from './api';
import {checkIfPageExist} from './checkIfPageExist';

const archiveSection = async (archiveTo: string, text: string) => {
	const pageExist = await checkIfPageExist(archiveTo);
	if (!pageExist) {
		await api.create(
			archiveTo,
			{
				summary: '新建存档页面',
				minor: true,
			},
			'{{talkarchive}}'
		);
	}
	await api.edit(archiveTo, () => {
		return {
			appendtext: text,
			summary: '存档内容',
			minor: true,
		};
	});
};

export {archiveSection};
