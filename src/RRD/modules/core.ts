import {RRD_PAGE} from './constant';
import {initMwApi} from '~/util';
import {message} from './messages';

export const isLog: boolean = mw.config.get('wgCanonicalSpecialPageName') === 'Log';
const config = {checkboxes: {}, others: {}};
let ids: string[] = [];
let $dialog: JQuery;

const loadIDs = (): void => {
	const boxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
	for (const box of boxes) {
		if (box.type === 'checkbox' && box.checked) {
			const idRegex: RegExp = /ids\[(\d+)]/;
			const idArray: RegExpExecArray | null = idRegex.exec(box.name);
			if (idArray && idArray[1] !== undefined) {
				ids.push(idArray[1]);
			}
		}
	}
};

const submit = async (toHide: string, reason: string, otherReasons: string): Promise<void> => {
	ids = [...new Set(ids)];
	const rrdArr: string[] = [
		'{{Revdel',
		'|status = ',
		`|article = ${mw.config.get('wgPageName')}`,
		`|set = ${toHide}`,
		`|reason = ${reason}${otherReasons}`,
	];
	for (const [index, id] of ids.entries()) {
		rrdArr.push(`|id${index + 1} = ${id}`);
	}
	rrdArr.push('}}\n--~~'.concat('~~'));
	const api: mw.Api = initMwApi(`Qiuwen/1.1 (RRD/2.0; ${mw.config.get('wgWikiID')})`);
	try {
		const params: ApiQueryRevisionsParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			prop: 'revisions',
			titles: 'Qiuwen_talk:版本删除提报',
			rvprop: 'content',
		};
		const {query} = await api.get(params);
		let content: string | undefined;
		if (query.pages) {
			[{content}] = query.pages[0].revisions;
		}
		if (content === undefined) {
			mw.notify(`Error when loading page ${RRD_PAGE}: missing`, {tag: 'RRD', type: 'error'});
			return;
		}
		try {
			const _params: ApiEditPageParams = {
				action: 'edit',
				format: 'json',
				formatversion: '2',
				title: RRD_PAGE,
				text: `${content}\n\n${rrdArr.join('\n')}`,
				summary: message.edit_summary,
			};
			const result = await api.postWithEditToken(_params);
			if (result['edit']?.result === 'Success') {
				location.replace(mw.util.getUrl(RRD_PAGE));
			} else if (result['error']?.code) {
				mw.notify(`Some errors occured while saving page: ${result['error'].code}`, {
					tag: 'RRD',
					type: 'error',
				});
			} else {
				mw.notify('Some errors occured while saving page: unknown', {
					tag: 'RRD',
					type: 'error',
				});
			}
		} catch {
			mw.notify(`Error when editing page ${RRD_PAGE}`, {tag: 'RRD', type: 'error'});
		}
	} catch {
		mw.notify(`Error when loading page ${RRD_PAGE}`, {tag: 'RRD', type: 'error'});
	}
};

const updateConfig = (): void => {
	const $body: JQuery<HTMLBodyElement> = $('body');
	const checkBoxes = {};
	if ($body.find('#rrdHideContent').prop('checked')) {
		Object.defineProperty(checkBoxes, 'rrdHideContent', {value: 1});
	}
	if ($body.find('#rrdHideUsername').prop('checked')) {
		Object.defineProperty(checkBoxes, 'rrdHideUsername', {value: 1});
	}
	if ($body.find('#rrdHideSummary').prop('checked')) {
		Object.defineProperty(checkBoxes, 'rrdHideSummary', {value: 1});
	}
	Object.defineProperty(config, 'checkboxes', {value: checkBoxes});
	const others = {};
	Object.defineProperties(others, {
		rrdReason: {value: $body.find('#rrdReason').val()},
		rrdOtherReasons: {value: $body.find('#rrdOtherReasons').val()},
	});
	Object.defineProperty(config, 'others', {value: others});
};

const loadConfig = (): void => {
	for (const key in config.others) {
		if (Object.hasOwn(config.others, key)) {
			$(`#${key}`).val(Object.getOwnPropertyDescriptor(config.others, key)?.value);
		}
	}
	for (const key in config.checkboxes) {
		if (Object.hasOwn(config.others, key)) {
			$(`#${key}`).prop('checked', Object.hasOwn(config.checkboxes, key));
		}
	}
};

const showDialog = (): void => {
	loadIDs();
	if (!ids.length) {
		mw.notify(message.err_no_revision_provided, {tag: 'RRD', type: 'error'});
		return;
	}
	const html: string = `<div id="rrdConfig">${
		message.hide_items
	}<br><div style="float: left; padding: 0 5px;"><input name="content" id="rrdHideContent" type="checkbox" value="content" checked>${`<label for="rrdHideContent" id="rrd-content">${
		isLog ? message.hide_log : message.hide_content
	}</label>`}</div><div style="float: left; padding: 0 5px;"><input name="username" id="rrdHideUsername" type="checkbox" value="username">${`<label for="rrdHideUsername" id="rrd-username">${message.hide_username}</label>`}</div><div style="float: left; padding: 0 5px;"><input name="summary" id="rrdHideSummary" type="checkbox" value="summary">${`<label for="rrdHideSummary" id="rrd-summary">${message.hide_summary}</label>`}${`</div><br><br>${message.hide_reason}<br>`}<select name="rrdReason" id="rrdReason">${`<option value="${message.hide_reason_rd1}">`}${`RD1：${message.hide_reason_rd1}</option>`}${`<option value="${message.hide_reason_rd2}">`}${`RD2：${message.hide_reason_rd2}</option>`}${`<option value="${message.hide_reason_rd3}">`}${`RD3：${message.hide_reason_rd3}</option>`}${`<option value="${message.hide_reason_rd4}">`}${`RD4：${message.hide_reason_rd4}</option>`}${`<option value="${message.hide_reason_rd5}">`}${`RD5：${message.hide_reason_rd5}</option>`}${`<option value="">${message.hide_reason_other}</option>`}</select>${`<br><br>${message.other_reasons}<br>`}<textarea name="otherReasons" id="rrdOtherReasons" rows="4"></textarea></div>`;
	if ($dialog) {
		$dialog.html(html).dialog('open');
		loadConfig();
		return;
	}
	$dialog = $(html).dialog({
		title: message.dialog_title,
		minWidth: 515,
		minHeight: 150,
		close: updateConfig,
		buttons: [
			{
				text: message.dialog_button_submit,
				click(): void {
					$(this).dialog('close');
					const reason: string = Object.getOwnPropertyDescriptor(config.others, 'rrdReason')?.value ?? '';
					let otherReasons: string =
						Object.getOwnPropertyDescriptor(config.others, 'rrdOtherReasons')?.value ?? '';
					if (otherReasons && reason) {
						otherReasons = `，${otherReasons}`;
					}
					const toHide: string[] = [];
					if (Object.hasOwn(config.checkboxes, 'rrdHideContent')) {
						toHide.push(isLog ? message.hide_log : message.hide_content);
					}
					if (Object.hasOwn(config.checkboxes, 'rrdHideUsername')) {
						toHide.push(message.hide_username);
					}
					if (Object.hasOwn(config.checkboxes, 'rrdHideSummary')) {
						toHide.push(message.hide_summary);
					}
					let cont: boolean = true;
					if (!toHide.length) {
						mw.notify(message.err_no_item_provided, {tag: 'RRD', type: 'error'});
						return;
					}
					if (!reason && !otherReasons) {
						cont = confirm(message.warn_no_reason_provided);
					}
					if (cont) {
						submit(toHide.join('、'), reason, otherReasons);
					}
				},
			},
			{
				text: message.dialog_button_cancel,
				click(): void {
					$(this).dialog('close');
				},
			},
		],
	});
};

export const main = (): void => {
	const $report: JQuery = $('<button>')
		.addClass('historysubmit mw-history-rrd mw-ui-button')
		.attr({
			name: 'reportRRD',
			type: 'button',
			title: message.report_button_title + RRD_PAGE,
		})
		.text(isLog ? message.report_button_log_text : message.report_button_text);
	$report.on('click', showDialog);
	const $body: JQuery<HTMLBodyElement> = $('body');
	// For action=history and Special:Log
	$body
		.find(
			'.historysubmit.mw-history-compareselectedversions-button, .editchangetags-log-submit.mw-log-editchangetags-button'
		)
		.after($report);
};
