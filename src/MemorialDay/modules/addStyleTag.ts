import {memorial} from './MemorialDay.module.less';

const CLASS_LIST = ['.skin-citizen .mw-body', '.skin-vector .mw-body', '.skin-gongbi #mw-content'];

const addStyleTag = ($body: JQuery<HTMLBodyElement>) => {
	// eslint-disable-next-line mediawiki/class-doc
	$body.find(CLASS_LIST.join(',')).addClass(memorial as string);
};

export {addStyleTag};
