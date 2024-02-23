// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import './PreviewWithVariant2017.less';

(function PreviewWithVariant2017() {
	const DATA = [
		{var: 'zh', htmlLang: 'zh', msg: 'pwv-2017-zh'},
		{var: 'zh-hans', htmlLang: 'zh-Hans', msg: 'pwv-2017-zh-hans'},
		{var: 'zh-hant', htmlLang: 'zh-Hant', msg: 'pwv-2017-zh-hant'},
		{var: 'zh-cn', htmlLang: 'zh-Hans-CN', msg: 'pwv-2017-zh-cn'},
		{var: 'zh-hk', htmlLang: 'zh-Hant-HK', msg: 'pwv-2017-zh-hk'},
		{var: 'zh-mo', htmlLang: 'zh-Hant-MO', msg: 'pwv-2017-zh-mo'},
		{var: 'zh-my', htmlLang: 'zh-Hans-MY', msg: 'pwv-2017-zh-my'},
		{var: 'zh-sg', htmlLang: 'zh-Hans-SG', msg: 'pwv-2017-zh-sg'},
		{var: 'zh-tw', htmlLang: 'zh-Hant-TW', msg: 'pwv-2017-zh-tw'},
	];
	mw.config.set('wgPreviewWithVariantInitialized', false);

	mw.messages.set({
		'pwv-2017-caption': window.wgULS('选择语言变体', '選擇語言變體'),
		'pwv-2017-zh': window.wgULS('不转换', '不轉換'),
		'pwv-2017-zh-hans': '简体',
		'pwv-2017-zh-hant': '繁體',
		'pwv-2017-zh-cn': '大陆简体',
		'pwv-2017-zh-hk': '香港繁體',
		'pwv-2017-zh-mo': '澳門繁體',
		'pwv-2017-zh-my': '大马简体',
		'pwv-2017-zh-sg': '新加坡简体',
		'pwv-2017-zh-tw': '臺灣正體',
	});

	const PendingStackLayout = function PendingStackLayout(config) {
		PendingStackLayout.super.call(this, config);
		OO.ui.mixin.PendingElement.call(this);
		this.$element.addClass('pwv-2017-pendingStackLayout');
	};

	OO.inheritClass(PendingStackLayout, OO.ui.StackLayout);
	OO.mixinClass(PendingStackLayout, OO.ui.mixin.PendingElement);

	const entryPoint = () => {
		let variant, target, dialog, dropdown, stackLayout, panelLayouts, windowManager, errorDialog;

		const constructDocument = (title, wikitext, categories) => {
			const $result = $('<div>').addClass('mw-body mw-body-content');

			if (mw.config.get('skin') === 'vector') {
				// Additional classes required in vector to get correct appearance
				$result.addClass('vector-body');
			}

			$result.append(
				$('<h1>').addClass('firstHeading').html(title),
				// Classes used here:
				// * mw-content-ltr
				// * mw-content-rtl
				$('<div>')
					.addClass(`mw-content-${mw.config.get('wgVisualEditor').pageLanguageDir}`)
					.attr(
						'lang',
						DATA.find((item) => {
							return item.var === variant;
						}).htmlLang
					)
					.html(wikitext),
				$.parseHTML(categories)
			);

			// Make other things like Reference Tooltip function
			mw.hook('wikipage.content').fire($result);
			// eslint-disable-next-line no-undef
			ve.targetLinksToNewWindow($result[0]);
			return $result;
		};

		const fetchPreview = () => {
			const deferred = $.Deferred();
			// Currently (Aug 2021), Parsoid API does not have full LC functionality,
			// hence use parse API instead.
			target
				.getContentApi()
				.post({
					action: 'parse',
					disableeditsection: true,
					errorformat: 'html',
					errorlang: mw.config.get('wgUserLanguage'),
					errorsuselocal: true,
					formatversion: 2,
					prop: 'text|indicators|displaytitle|categorieshtml|parsewarningshtml',
					pst: true,
					preview: true,
					title: target.getPageName(),
					text: target.getDocToSave(),
					uselang: mw.config.get('wgUserLanguage'),
					variant,
				})
				.then(
					(response) => {
						deferred.resolve(
							constructDocument(
								response.parse.displaytitle,
								response.parse.text,
								response.parse.categorieshtml
							)
						);
					},
					(error, detail) => {
						deferred.reject(detail);
					}
				);
			return deferred;
		};

		const changeVariant = function changeVariant(val) {
			dialog.previewPanel.$element[0].focus();
			variant = val;

			const targetPanel = stackLayout.findItemFromData(variant);
			if (targetPanel.$element.children().length) {
				stackLayout.setItem(targetPanel);
			} else {
				stackLayout.pushPending();
				dropdown.setDisabled(true);

				fetchPreview()
					.then(
						($previewContainer) => {
							targetPanel.$element.append($previewContainer);
							stackLayout.setItem(targetPanel);
						},
						(error) => {
							windowManager
								.openWindow(errorDialog, {
									title: OO.ui.msg('ooui-dialog-process-error'),
									// eslint-disable-next-line no-undef
									message: ve.init.target.getContentApi().getErrorMessage(error),
									actions: [
										{
											action: 'reject',
											label: OO.ui.deferMsg('ooui-dialog-message-reject'),
											flags: 'safe',
										},
										{
											action: 'retry',
											label: OO.ui.deferMsg('ooui-dialog-process-retry'),
											flags: ['primary', 'progressive'],
										},
									],
								})
								.closed.then((data) => {
									if (data && data.action === 'retry') {
										// Do not use setValue() since it will not trigger event
										changeVariant(variant);
									} else {
										// "variant" will be set by event handler
										dropdown.setValue(stackLayout.getCurrentItem().getData());
									}
								});
						}
					)
					.always(() => {
						stackLayout.popPending();
						dropdown.setDisabled(false);
					});
			}
		};

		const previewWithVariant = () => {
			const currentPanel = stackLayout.getCurrentItem();

			if (currentPanel.$element.children().length) {
				dialog.swapPanel('preview');
				dialog.previewPanel.$element.prepend(dropdown.$element);
			} else {
				target.emit('savePreview');
				dialog.pushPending();

				fetchPreview()
					.then(
						($previewContent) => {
							target
								.getSurface()
								.getModel()
								.getDocument()
								.once('transact', () => {
									for (const item of panelLayouts) {
										item.$element.empty();
									}
								});
							dialog.swapPanel('preview');
							currentPanel.$element.append($previewContent);
							stackLayout.setItem(stackLayout.findItemFromData(variant));
							dialog.previewPanel.$element.prepend(dropdown.$element);
						},
						(error) => {
							dialog.showErrors(
								// eslint-disable-next-line no-undef
								new OO.ui.Error(ve.init.target.getContentApi().getErrorMessage(error), {
									recoverable: true,
								})
							);
						}
					)
					.always(() => {
						dialog.popPending();
					});
			}
		};

		const init = () => {
			variant = mw.config.get('wgUserVariant');
			// eslint-disable-next-line no-undef
			({target} = ve.init);
			dialog = target.saveDialog;
			dropdown = new OO.ui.DropdownInputWidget({
				$overlay: dialog.$overlay,
				classes: ['pwv-2017-variant'],
				options: [
					{
						optgroup: mw.msg('pwv-2017-caption'),
					},
					...DATA.map((item) => {
						return {
							data: item.var,
							label: mw.msg(item.msg) /* eslint-disable-line mediawiki/msg-doc */,
						};
					}),
				],
				value: variant,
			});
			dropdown.on('change', changeVariant);
			panelLayouts = DATA.map((item) => {
				return new OO.ui.PanelLayout({
					expanded: false,
					data: item.var,
				});
			});
			stackLayout = new PendingStackLayout({
				expanded: false,
				items: panelLayouts,
			});
			stackLayout.setItem(stackLayout.findItemFromData(variant));
			dialog.previewPanel.$element.append(stackLayout.$element);
			errorDialog = new OO.ui.MessageDialog();
			windowManager = new OO.ui.WindowManager();
			windowManager.addWindows([errorDialog]);
			$(document.body).append(windowManager.$element);

			const handlerToRemove = 'onSaveDialogPreview';
			dialog.off('preview', handlerToRemove, target).on('preview', previewWithVariant);
		};

		if (!mw.config.get('wgPreviewWithVariantInitialized')) {
			init();
			mw.config.set('wgPreviewWithVariantInitialized', true);
		}
	};

	mw.hook('ve.saveDialog.stateChanged').add(entryPoint);

	mw.hook('ve.activationComplete').add(() => {
		if (mw.config.get('wgPreviewWithVariantInitialized')) {
			// Switching between VE and NWE, requires to be reinitialized
			mw.config.set('wgPreviewWithVariantInitialized', true);
		}
	});
})();
