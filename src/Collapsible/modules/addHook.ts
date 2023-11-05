import {collapsible} from './core';

const addHook = (): void => {
	mw.hook('wikipage.content').add(collapsible);
};

export {addHook};
