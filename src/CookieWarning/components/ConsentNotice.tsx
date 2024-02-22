import React from 'ext.gadget.React';
import {getMessage} from '../modules/i18n';

const ConsentNotice = () => (
	<>
		<p>{getMessage('TOSNotice')}</p>
		<p>{getMessage('CookieNotice')}</p>
	</>
);

export default ConsentNotice;
