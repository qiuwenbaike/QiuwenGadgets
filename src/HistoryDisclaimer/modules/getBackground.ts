import {disclaimer} from '../HistoryDisclaimer.module.less';

const background = () => {
	const element = document.createElement('div');
	element.className = disclaimer;
	return element;
};

export {background};
