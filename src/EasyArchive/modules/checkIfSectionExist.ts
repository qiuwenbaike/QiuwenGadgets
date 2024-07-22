import {getSections} from './parse';

const checkIfSectionExist = async (index: string, anchor: string) => {
	const {wgPageName} = mw.config.get();
	const sections = await getSections(wgPageName);

	let ifSectionExist = false;
	for (const section of sections) {
		if (index === section.index && anchor === section.anchor) {
			ifSectionExist = true;
		}
	}
	return ifSectionExist;
};

export {checkIfSectionExist};
