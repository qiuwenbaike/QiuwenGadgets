import {initializeRefTools} from './RefToolbar';

if (['edit', 'submit'].includes(mw.config.get('wgAction'))) {
	// Double check if user.options is loaded, to prevent errors when copy pasted accross installations
	mw.loader.using(['user.options']).done(initializeRefTools);
}
