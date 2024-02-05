import {IS_LOG} from '../modules/constant';
import React from 'ext.gadget.React';
import {getMessage} from '../modules/i18n';

const DialogInner = () => (
	<div id="rrdConfig">
		{getMessage('hideItems')}
		<br />
		<div style="float: left; padding: 0 5px;">
			<input name="content" id="rrdHideContent" type="checkbox" value="content" checked />
			<label htmlFor="rrdHideContent" id="rrd-content">
				{IS_LOG ? getMessage('hideLog') : getMessage('hideContent')}
			</label>
		</div>
		<div style="float: left; padding: 0 5px;">
			<input name="username" id="rrdHideUsername" type="checkbox" value="username" />
			<label htmlFor="rrdHideUsername" id="rrd-username">
				{getMessage('hideUsername')}
			</label>
		</div>
		<div style="float: left; padding: 0 5px;">
			<input name="summary" id="rrdHideSummary" type="checkbox" value="summary" />
			<label htmlFor="rrdHideSummary" id="rrd-summary">
				{getMessage('hideSummary')}
			</label>
		</div>
		<br />
		<br />
		{getMessage('hideReason')}
		<br />
		<select name="rrdReason" id="rrdReason">
			<option value={getMessage('hideReasonRD1')}>{getMessage('hideReasonRD1')}</option>
			<option value={getMessage('hideReasonRD2')}>{getMessage('hideReasonRD2')}</option>
			<option value={getMessage('hideReasonRD3')}>{getMessage('hideReasonRD3')}</option>
			<option value={getMessage('hideReasonRD4')}>{getMessage('hideReasonRD4')}</option>
			<option value={getMessage('hideReasonRD5')}>{getMessage('hideReasonRD5')}</option>
			<option value="">{getMessage('hideReasonOther')}</option>
		</select>
		<br />
		<br />
		{getMessage('otherReasons')}
		<br />
		<textarea name="otherReasons" id="rrdOtherReasons" rows={4}></textarea>
	</div>
);

export default DialogInner;
