import {appendGeoIcon} from './appendGeoIcon';
import {getBody} from 'ext.gadget.Util';

const addElement = async (): Promise<void> => {
	try {
		const $body: JQuery<HTMLBodyElement> = await getBody();
		void appendGeoIcon($body);
	} catch (error: unknown) {
		console.error('[GeoLocationReader] Ajax error in `addElement` method:', error);
	}
};

export {addElement};
