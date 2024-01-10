import React from 'ext.gadget.React';
import {getMessage} from '../modules/i18n';

interface Props {
	onClick(): void;
}

const AgreeButton = ({onClick}: Props) => (
	<span className={['mw-ui-button', 'mw-ui-progressive']} role="button" onClick={onClick}>
		{getMessage('Agree')}
	</span>
);

export default AgreeButton;
