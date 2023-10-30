import {QuickPatrol} from './module/core';

if (mw.config.get('wgCanonicalSpecialPageName') === 'Newpages') {
	$(QuickPatrol);
}
