import {ApiResponse} from 'types-mediawiki-renovate/mw/Api';
import {UserRights} from '~/MarkRights/modules/types';
import {api} from './api';
import {assignPermission} from './assignPermission';
import {getPermissionNames} from './getPermissionNames';
import {getPermissionTemplate} from './getTemplates';
import {issueTemplate} from './issueTemplate';
import {markAsDone} from './markAsDone';

const showDialog = function showDialog({
	$body,
	userName,
	permission,
	index,
}: {
	$body: JQuery<HTMLBodyElement>;
	userName: string;
	permission: UserRights;
	index: string;
}) {
	const {wgULS} = window;
	const permissionTemplate = getPermissionTemplate(permission);
	const permissionName = getPermissionNames(permission);

	class Dialog extends OO.ui.ProcessDialog {
		private static editPanel: OO.ui.PanelLayout;
		private static rightLog: OO.ui.LabelWidget;
		private static editFieldset: OO.ui.FieldsetLayout;
		private static rightsChangeSummaryInput: OO.ui.TextInputWidget;
		private static expiryInput: OO.ui.Widget;
		private static closingRemarksInput: OO.ui.TextInputWidget;
		private static watchTalkPageCheckbox: OO.ui.CheckboxInputWidget;
		private static submitPanel: OO.ui.PanelLayout;
		private static submitFieldset: OO.ui.FieldsetLayout;
		private static $body: JQuery = $('body');
		private static stackLayout: OO.ui.StackLayout;
		private static markAsDoneProgressField: OO.ui.FieldLayout;
		private static changeRightsProgressField: OO.ui.FieldLayout;
		private static issueTemplateProgressField: OO.ui.FieldLayout;
		private static changeRightsProgressLabel: OO.ui.LabelWidget;
		private static markAsDoneProgressLabel: OO.ui.LabelWidget;
		private static issueTemplateProgressLabel: OO.ui.LabelWidget;
		static actions: unknown;

		public constructor() {
			super({
				size: 'medium',
			});
		}
		// eslint-disable-next-line class-methods-use-this
		public override getBodyHeight() {
			return 255;
		}
		public override initialize() {
			super.initialize();
			Dialog.editPanel = new OO.ui.PanelLayout({
				expanded: false,
			});
			const rightLogWapper = $('<span>');
			const url = mw.util.getUrl('Special:Log/rights', {type: 'rights', page: `User:${userName}`});
			$('<a>')
				.text(wgULS('最近权限日志', '最近權限日誌'))
				.attr({href: url, target: '_blank'})
				.appendTo(rightLogWapper);
			rightLogWapper.append('：');
			const rightLogText = $('<span>').text(wgULS('获取中', '取得中')).appendTo(rightLogWapper);
			Dialog.rightLog = new OO.ui.LabelWidget({
				label: rightLogWapper,
			});
			Dialog.editPanel.$element.append(Dialog.rightLog.$element);

			const queryLogEventsParams: ApiQueryLogEventsParams = {
				action: 'query',
				format: 'json',
				list: 'logevents',
				leaction: 'rights/rights',
				letitle: `User:${userName}`,
				lelimit: 1,
			};

			void api.get(queryLogEventsParams).done((data) => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				const logs = data['query'].logevents;
				if (logs.length === 0) {
					rightLogText.text(wgULS('没有任何日志', '沒有任何日誌'));
				} else {
					// @ts-expect-error TS2304
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, new-cap
					const timestamp = new Morebits.date(logs[0].timestamp).calendar();
					const rights = (logs[0].params.newgroups as string[]).join('、') || wgULS('（无）', '（無）');
					rightLogText.text(
						`${timestamp} ${logs[0].user}${wgULS('将用户组改为', '將使用者群組改為')}${rights}`
					);
				}
			});

			Dialog.editFieldset = new OO.ui.FieldsetLayout({
				classes: ['container'],
			});
			Dialog.editPanel.$element.append(Dialog.editFieldset.$element);

			Dialog.rightsChangeSummaryInput = new OO.ui.TextInputWidget({
				value: '',
				placeholder: '可留空',
			});
			// @ts-expect-error TS2339
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			Dialog.expiryInput = new mw.widgets.ExpiryWidget({
				$overlay: $body.find('.oo-ui-window'),
				// @ts-expect-error TS2339
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				RelativeInputClass: mw.widgets.SelectWithInputWidget,
				relativeInput: {
					or: true,
					dropdowninput: {
						options: [
							{data: '1 day', label: '1天'},
							{data: '1 week', label: wgULS('1周', '1週')},
							{data: '1 month', label: wgULS('1个月', '1個月')},
							{data: '3 months', label: wgULS('3个月', '3個月')},
							{data: '6 months', label: wgULS('6个月', '6個月')},
							{data: '1 year', label: '1年'},
							{data: 'infinite', label: wgULS('没有期限', '沒有期限')},
							{data: 'other', label: wgULS('其他时间', '其他時間')},
						],
						value: 'infinite',
					},
					textinput: {
						required: true,
					},
				},
			}) as OO.ui.Widget;
			Dialog.closingRemarksInput = new OO.ui.TextInputWidget({
				value: '{{done}}--~~~~',
			});
			Dialog.watchTalkPageCheckbox = new OO.ui.CheckboxInputWidget({
				selected: false,
			});
			const formElements = [
				new OO.ui.FieldLayout(Dialog.rightsChangeSummaryInput, {
					label: wgULS('授权原因', '授權原因'),
				}),
				new OO.ui.FieldLayout(Dialog.expiryInput, {
					label: wgULS('结束时间', '結束時間'),
				}),
				new OO.ui.FieldLayout(Dialog.closingRemarksInput, {
					label: wgULS('关闭请求留言', '關閉請求留言'),
				}),
			];
			if (permissionTemplate) {
				formElements.push(
					new OO.ui.FieldLayout(Dialog.watchTalkPageCheckbox, {
						label: wgULS('监视用户讨论页', '監視使用者討論頁'),
					})
				);
			}
			Dialog.editFieldset.addItems(formElements);
			Dialog.submitPanel = new OO.ui.PanelLayout({
				expanded: false,
			});
			Dialog.submitFieldset = new OO.ui.FieldsetLayout({
				classes: ['container'],
			});
			Dialog.submitPanel.$element.append(Dialog.submitFieldset.$element);
			Dialog.submitPanel.$element.append(Dialog.submitFieldset.$element);
			Dialog.changeRightsProgressLabel = new OO.ui.LabelWidget();
			Dialog.changeRightsProgressField = new OO.ui.FieldLayout(Dialog.changeRightsProgressLabel);
			Dialog.markAsDoneProgressLabel = new OO.ui.LabelWidget();
			Dialog.markAsDoneProgressField = new OO.ui.FieldLayout(Dialog.markAsDoneProgressLabel);
			Dialog.issueTemplateProgressLabel = new OO.ui.LabelWidget();
			Dialog.issueTemplateProgressField = new OO.ui.FieldLayout(Dialog.issueTemplateProgressLabel);
			Dialog.stackLayout = new OO.ui.StackLayout({
				items: [Dialog.editPanel, Dialog.submitPanel],
				padded: true,
			});
			Dialog.$body.append(Dialog.stackLayout.$element);

			return this;
		}
		public static onSubmit() {
			let promiseCount = permissionTemplate ? 3 : 2;

			// @ts-expect-error TS18046
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			Dialog.actions.setAbilities({submit: false});

			const addPromise = function (field: OO.ui.FieldLayout, promise: JQuery.Promise<ApiResponse>) {
				Dialog.pushPending();
				void promise
					.done(() => {
						field.$field.append(
							$('<span>')
								.text('完成！')
								.prop('style', 'position:relative; top:0.5em; color: #009000; font-weight: bold')
						);
					})
					.fail((obj) => {
						if (obj && obj.error && obj.error.info) {
							field.$field.append(
								$('<span>')
									.text(wgULS('错误：', '錯誤：') + obj.error.info)
									.prop('style', 'position:relative; top:0.5em; color: #cc0000; font-weight: bold')
							);
						} else {
							field.$field.append(
								$('<span>')
									.text(wgULS('发生未知错误。', '發生未知錯誤。'))
									.prop('style', 'position:relative; top:0.5em; color: #cc0000; font-weight: bold')
							);
						}
					})
					.always(() => {
						promiseCount--; // FIXME: maybe we could use a Dialog.isPending() or something
						Dialog.popPending();

						if (promiseCount === 0) {
							setTimeout(() => {
								location.reload();
							}, 1000);
						}
					});

				return promise;
			};

			Dialog.markAsDoneProgressField.setLabel(wgULS('标记请求为已完成...', '標記請求為已完成...'));
			Dialog.submitFieldset.addItems([Dialog.markAsDoneProgressField]);
			Dialog.changeRightsProgressField.setLabel(wgULS('授予权限...', '授予權限...'));
			Dialog.submitFieldset.addItems([Dialog.changeRightsProgressField]);

			if (permissionTemplate) {
				Dialog.issueTemplateProgressField.setLabel(wgULS('发送通知...', '發送通知...'));
				Dialog.submitFieldset.addItems([Dialog.issueTemplateProgressField]);
			}

			void addPromise(
				Dialog.markAsDoneProgressField,
				markAsDone(
					userName,
					index,
					`\n:${Dialog.closingRemarksInput.getValue()}`
				) as unknown as JQuery.Promise<ApiResponse>
			).then((data) => {
				void addPromise(
					Dialog.changeRightsProgressField,
					assignPermission(
						userName,
						permission,
						Dialog.rightsChangeSummaryInput.getValue(),
						Number.parseInt(data['edit'].newrevid as string, 10),
						(Dialog.expiryInput as OO.ui.TextInputWidget).getValue()
					)
				).then(() => {
					if (permissionTemplate) {
						void addPromise(
							Dialog.issueTemplateProgressField,
							issueTemplate(
								userName,
								permission,
								Dialog.watchTalkPageCheckbox.isSelected()
							) as JQuery.Promise<ApiResponse>
						);
					}
				});
			});

			Dialog.stackLayout.setItem(Dialog.submitPanel);
		}
		static pushPending() {
			throw new Error('Method not implemented.');
		}
		static popPending() {
			throw new Error('Method not implemented.');
		}

		public override getActionProcess(action?: string): OO.ui.Process {
			return (
				super
					.getActionProcess(action)
					// @ts-expect-error TS7030
					.next(function () {
						if (action === 'submit') {
							return Dialog.onSubmit();
						}
						return Dialog.super.prototype.getActionProcess.call(this, action);
					}, this)
			);
		}
	}
	Dialog.static = {
		...OO.ui.ProcessDialog.static,
	};
	Dialog.static.name = 'user-rights-manager';
	Dialog.static.title = `授予${permissionName}${wgULS('给', '給')}${userName}`;
	Dialog.static.actions = [
		{action: 'submit', label: wgULS('授权', '授權'), flags: ['primary', 'progressive']},
		{label: '取消', flags: 'safe'},
	];

	const dialog = new Dialog();

	const windowManager = new OO.ui.WindowManager();
	$('body').append(windowManager.$element);
	windowManager.addWindows([dialog]);
	void windowManager.openWindow(dialog);
};

export {showDialog};
