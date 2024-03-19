import * as OPTIONS from '../options.json';
import {IS_WG_LOG_NS} from '../modules/constant';
import React from 'ext.gadget.React';
import {getMessage} from '../modules/i18n';

interface Props {
	onClick(): void;
}

const ReportButton = ({onClick}: Props) => (
	<button
		type={'button'}
		className={['reportrrd', 'cdx-button', 'cdx-button--weight-primary']}
		title={getMessage('reportButtonTitle') + OPTIONS.rrdPage}
		onClick={onClick}
	>
		{IS_WG_LOG_NS ? getMessage('reportButtonLogText') : getMessage('reportButtonText')}
	</button>
);

export default ReportButton;
