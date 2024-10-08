import {memorial} from './MemorialDay.module.less';

const CLASS_LIST = [
	'.skin-citizen .mw-body',
	'.skin-gongbi #mw-content',
	'.skin-vector .mw-body',
	'.skin-vector-2022 .mw-body',
];

const addStyleTag = ($body: JQuery<HTMLBodyElement>) => {
	for (const className of CLASS_LIST) {
		// eslint-disable-next-line mediawiki/class-doc
		$body.find(className).addClass(memorial as string);
	}
};

export {addStyleTag};
