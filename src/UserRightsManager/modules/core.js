// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {PERM_NAME, PERM_TEMPLATE, SUMMARY} from './constant';
import {api} from './api';

let index = '';
let userName = '';
let permission = '';
let dialog;
let permaLink = '';

const WG_PAGE_NAME = mw.config.get('wgPageName');

const assignPermission = (summary, revId, expiry) => {
	permaLink = `[[Special:PermaLink/${revId}#User:${userName}|权限申请]]`;
	let fullSummary = `+${PERM_NAME[permission]}；${permaLink}`;
	if (summary !== '') {
		fullSummary += `；${summary}`;
	}
	fullSummary += SUMMARY;
	const params = {
		action: 'userrights',
		user: userName.replace(/ /g, '_'),
		add: permission,
		expiry: expiry === '' ? 'infinity' : expiry,
		reason: fullSummary,
	};
	return api.postWithToken('userrights', params);
};

const markAsDone = (closingRemarks) => {
	const sectionNode = document.querySelector(
		`#User\\:${userName.replace(/"/g, '.22').replace(/ /g, '_')}${index ?? ''}`
	);
	const [, sectionNumber] = $(sectionNode)
		.siblings('.mw-editsection')
		.find('a:not(.mw-editsection-visualeditor)')
		.prop('href')
		.match(/section=(\d+)/);
	let basetimestamp;
	let curtimestamp;
	let page;
	let revision;
	let content;
	const queryParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'revisions',
		titles: [WG_PAGE_NAME],
		curtimestamp: true,
		rvprop: ['content', 'timestamp'],
		rvsection: sectionNumber,
	};
	return api
		.get(queryParams)
		.then((data) => {
			if (!data.query || !data.query.pages) {
				return $.Deferred().reject('unknown');
			}
			[page] = data.query.pages;
			if (!page || page.invalid) {
				return $.Deferred().reject('invalidtitle');
			}
			if (page.missing) {
				return $.Deferred().reject('nocreate-missing');
			}
			[revision] = page.revisions;
			basetimestamp = revision.timestamp;
			({curtimestamp} = data);
			({content} = revision);
		})
		.then(() => {
			content = content.trim();
			content = content.replace(/:{{status(\|.*?)?}}/i, ':{{Status|+}}');
			content += closingRemarks;
			const editParams = {
				action: 'edit',
				format: 'json',
				formatversion: '2',
				title: WG_PAGE_NAME,
				assert: mw.config.get('wgUserName') ? 'user' : undefined,
				nocreate: true,
				section: sectionNumber,
				starttimestamp: curtimestamp,
				summary: `/* User:${userName} */ 完成${SUMMARY}`,
				text: content,
				basetimestamp,
			};
			return api.postWithEditToken(editParams);
		});
};

const issueTemplate = (watch) => {
	const talkPage = `User talk:${userName.replace(/ /g, '_')}`;
	const params = {
		action: 'edit',
		title: talkPage,
		appendtext: '\n\n{{'.concat('subst:', PERM_TEMPLATE[permission], '}}}'),
		summary: `根据${permaLink}授予${PERM_NAME[permission]}${SUMMARY}`,
		watchlist: watch ? 'watch' : 'unwatch',
	};
	return api.postWithEditToken(params);
};

const showDialog = ({_index, _userName, _permission, $body}) => {
	permission = _permission;
	index = _index;
	userName = _userName;

	const Dialog = function (config) {
		Dialog.super.call(this, config);
	};
	OO.inheritClass(Dialog, OO.ui.ProcessDialog);
	Dialog.static.name = 'user-rights-manager';
	Dialog.static.title = `授予${PERM_NAME[permission]}${window.wgULS('给', '給')}${userName}`;
	Dialog.static.actions = [
		{
			action: 'submit',
			label: window.wgULS('授权', '授權'),
			flags: ['primary', 'progressive'],
		},
		{
			label: '取消',
			flags: ['safe', 'close'],
		},
	];
	Dialog.prototype.getApiManager = function () {
		return this.apiManager;
	};
	Dialog.prototype.getBodyHeight = () => {
		return 255;
	};
	Dialog.prototype.initialize = async function () {
		Dialog.super.prototype.initialize.call(this);
		this.editFieldset = new OO.ui.FieldsetLayout({
			classes: ['container'],
		});
		this.editPanel = new OO.ui.PanelLayout({
			expanded: false,
		});
		this.editPanel.$element.append(this.editFieldset.$element);
		const rightLogWapper = $('<span>');
		const url = mw.util.getUrl('Special:Log/rights', {
			type: 'rights',
			page: `User:${userName}`,
		});
		$('<a>')
			.text('最近权限日志')
			.attr({
				href: url,
				target: '_blank',
			})
			.appendTo(rightLogWapper);
		rightLogWapper.append('：');
		const rightLogText = $('<span>').text('获取中').appendTo(rightLogWapper);
		this.rightLog = new OO.ui.LabelWidget({
			label: rightLogWapper,
		});
		const params = {
			action: 'query',
			leaction: 'rights/rights',
			lelimit: 1,
			letitle: `User:${userName}`,
			list: 'logevents',
		};
		const {query} = await api.get(params);
		const logs = query.logevents;
		if (logs.length === 0) {
			rightLogText.text('没有任何日志');
		} else {
			// eslint-disable-next-line new-cap
			const timestamp = new Morebits.date(logs[0].timestamp).calendar();
			const rights = logs[0].params.newgroups.join('、') || '（无）';
			rightLogText.text(`${timestamp} ${logs[0].user}将用户组改为${rights}`);
		}
		this.rightsChangeSummaryInput = new OO.ui.TextInputWidget({
			value: '',
			placeholder: '可留空',
		});
		this.expiryInput = new mw.widgets.ExpiryWidget({
			$overlay: $body.find('.oo-ui-window'),
			RelativeInputClass: mw.widgets.SelectWithInputWidget,
			relativeInput: {
				or: true,
				dropdowninput: {
					options: [
						{
							data: '1 day',
							label: '1天',
						},
						{
							data: '1 week',
							label: '1周',
						},
						{
							data: '1 month',
							label: '1个月',
						},
						{
							data: '3 months',
							label: '3个月',
						},
						{
							data: '6 months',
							label: '6个月',
						},
						{
							data: '1 year',
							label: '1年',
						},
						{
							data: 'infinite',
							label: '无限期',
						},
						{
							data: 'other',
							label: '其他时间',
						},
					],
					value: 'infinite',
				},
				textinput: {
					required: true,
				},
			},
		});
		this.closingRemarksInput = new OO.ui.TextInputWidget({
			value: '{{done}}。--~~'.concat('~~'),
		});
		this.watchTalkPageCheckbox = new OO.ui.CheckboxInputWidget({
			selected: false,
		});
		this.editFieldset.addItems(this.rightLog);
		const formElements = [
			new OO.ui.FieldLayout(this.rightsChangeSummaryInput, {
				label: window.wgULS('授权原因', '授权原因'),
			}),
			new OO.ui.FieldLayout(this.expiryInput, {
				label: window.wgULS('结束时间', '結束時間'),
			}),
			new OO.ui.FieldLayout(this.closingRemarksInput, {
				label: window.wgULS('关闭请求留言', '關閉請求留言'),
			}),
		];
		if (PERM_TEMPLATE[permission]) {
			formElements[formElements.length] = new OO.ui.FieldLayout(this.watchTalkPageCheckbox, {
				label: window.wgULS('监视用户讨论页', '監視用戶討論頁'),
			});
		}
		this.editFieldset.addItems(formElements);
		this.submitPanel = new OO.ui.PanelLayout({
			$: this.$,
			expanded: false,
		});
		this.submitFieldset = new OO.ui.FieldsetLayout({
			classes: ['container'],
		});
		this.submitPanel.$element.append(this.submitFieldset.$element);
		this.changeRightsProgressLabel = new OO.ui.LabelWidget();
		this.changeRightsProgressField = new OO.ui.FieldLayout(this.changeRightsProgressLabel);
		this.markAsDoneProgressLabel = new OO.ui.LabelWidget();
		this.markAsDoneProgressField = new OO.ui.FieldLayout(this.markAsDoneProgressLabel);
		this.issueTemplateProgressLabel = new OO.ui.LabelWidget();
		this.issueTemplateProgressField = new OO.ui.FieldLayout(this.issueTemplateProgressLabel);
		this.stackLayout = new OO.ui.StackLayout({
			items: [this.editPanel, this.submitPanel],
			padded: true,
		});
		this.$body.append(this.stackLayout.$element);
	};
	Dialog.prototype.onSubmit = function () {
		const self = this;
		let promiseCount = PERM_TEMPLATE[permission] ? 3 : 2;
		self.actions.setAbilities({
			submit: false,
		});
		const addPromise = ({$field}, promise) => {
			self.pushPending();
			promise
				.done(() => {
					$field.append(
						$('<span>')
							.text('完成！')
							.prop('style', 'position: relative; top: .5em; color: #009000; font-weight: bold;')
					);
				})
				.fail((obj) => {
					if (obj && obj.error && obj.error.info) {
						$field.append(
							$('<span>')
								.text(`错误：${obj.error.info}`)
								.prop('style', 'position: relative; top: .5em; color: #c00; font-weight: bold;')
						);
					} else {
						$field.append(
							$('<span>')
								.text('发生未知错误。')
								.prop('style', 'position: relative; top: .5em; color: #c00; font-weight: bold;')
						);
					}
				})
				.always(() => {
					promiseCount--; // FIXME: maybe we could use a self.isPending() or something
					self.popPending();
					if (promiseCount === 0) {
						setTimeout(() => {
							location.reload(true);
						}, 1000);
					}
				});
			return promise;
		};
		self.markAsDoneProgressField.setLabel('标记请求为已完成...');
		self.submitFieldset.addItems([self.markAsDoneProgressField]);
		self.changeRightsProgressField.setLabel('授予权限...');
		self.submitFieldset.addItems([self.changeRightsProgressField]);
		if (PERM_TEMPLATE[permission]) {
			self.issueTemplateProgressField.setLabel('发送通知...');
			self.submitFieldset.addItems([self.issueTemplateProgressField]);
		}
		addPromise(self.markAsDoneProgressField, markAsDone(`\n:${this.closingRemarksInput.getValue()}`)).then(
			({edit}) => {
				addPromise(
					self.changeRightsProgressField,
					assignPermission(
						this.rightsChangeSummaryInput.getValue(),
						edit.newrevid,
						this.expiryInput.getValue()
					)
				).then(() => {
					if (PERM_TEMPLATE[permission]) {
						addPromise(
							self.issueTemplateProgressField,
							issueTemplate(this.watchTalkPageCheckbox.isSelected())
						);
					}
				});
			}
		);
		self.stackLayout.setItem(self.submitPanel);
	};
	Dialog.prototype.getActionProcess = function (action) {
		return Dialog.super.prototype.getActionProcess.call(this, action).next(function () {
			if (action === 'submit') {
				return this.onSubmit();
			}
			return Dialog.super.prototype.getActionProcess.call(this, action);
		}, this);
	};
	dialog = new Dialog({
		size: 'medium',
	});
	const windowManager = new OO.ui.WindowManager();
	$body.append(windowManager.$element);
	windowManager.addWindows([dialog]);
	windowManager.openWindow(dialog);
};

export {showDialog};
