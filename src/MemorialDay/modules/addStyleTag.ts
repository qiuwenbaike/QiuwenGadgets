import {memorial} from './MemorialDay.module.less';

const addStyleTag = () => {
	const {wgIsMainPage} = mw.config.get();

	if (wgIsMainPage) {
		void mw.loader.using('ext.gadget.Mainpage-Mourning');
		return;
	}

	const CLASS_LIST = [
		'.skin-citizen .mw-body',
		'.skin-gongbi #mw-content',
		'.skin-vector .mw-body',
		'.skin-vector-2022 .mw-body',
	];

	for (const className of CLASS_LIST) {
		// eslint-disable-next-line mediawiki/class-doc
		document.querySelector(className)?.classList.add(memorial as string);
	}
};

export {addStyleTag};
