import React from 'ext.gadget.JSX';
import {getMessage} from '../modules/i18n';

const ConsentNotice = () => (
	<>
		<p innerHTML={getMessage('TOSNotice')} />
		<p innerHTML={getMessage('CookieNotice')} />
	</>
);

export default ConsentNotice;
