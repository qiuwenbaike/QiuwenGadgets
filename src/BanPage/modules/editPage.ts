import {type EditParams, generateEditParams} from './util/generateEditParams';
import {create} from './util/create';
import {edit} from './util/edit';
import {showError} from './util/showError';

const editPage = async (): Promise<void> => {
	const editParams: EditParams = generateEditParams();

	try {
		await edit(editParams);
	} catch {
		try {
			await create(editParams);
		} catch (error) {
			showError(error);
		}
	}
};

export {editPage};
