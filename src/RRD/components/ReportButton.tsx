import * as OPTIONS from '../options.json';
import {IS_WG_LOG_NS} from '../modules/constant';
import React from 'ext.gadget.React';
import {getMessage} from '../modules/i18n';

interface Props {
	onClick(): void;
}

const ReportButton = ({onClick}: Props) => (
	<button
		className={['historysubmit', 'cdx-button', 'cdx-button--action-progressive', 'cdx-button--weight-primary']}
		name={'reportRRD'}
		title={getMessage('reportButtonTitle') + OPTIONS.rrdPage}
		onClick={onClick}
	>
		{IS_WG_LOG_NS ? getMessage('reportButtonLogText') : getMessage('reportButtonText')}
	</button>
);

export default ReportButton;
