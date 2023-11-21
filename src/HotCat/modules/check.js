// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/**
 * CheckCategories HotCat Extension –
 * removes the template when categorizing (prompts before) with HotCat and
 * adds a link "Categories are OK" to the category-section
 *
 * @rev 2 (2014-03-20)
 * @author Rillke, 2012
 */
(function hotCatCheck() {
	if (
		mw.config.get('wgNamespaceNumber') !== 6 ||
		window.HotCatAutoRemoveCheckCatOptOut ||
		!document.querySelectorAll('.checkcategories')[0]
	) {
		return;
	}
	const checkCategoriesRegExp = /{{[Cc]heck[ _]categories[^{}]*}}/g;
	const selfName = '([[MediaWiki:Gadget-HotCat-check.js|Script]]): ';
	const storageItemName = 'checkCat';
	const storageItem = mw.storage.get(storageItemName);
	/**
	 * A few styling helper functions
	 *
	 * @param {string} iconClass
	 * @return {JQuery}
	 */
	const createjIcon = (iconClass) => {
		return $('<span>').attr('class', `ui-icon ${iconClass} catcheck-inline-icon`).text(' ');
	};
	const createNotifyArea = (textNode, icon, state) => {
		return $('<div>')
			.addClass('ui-widget')
			.append(
				$('<div>')
					.attr('class', `${state} ui-corner-all`)
					.css({
						'margin-top': '20px',
						padding: '0.7em',
					})
					.append($('<p>').append(createjIcon(icon).css('marginRight', '0.3em'), textNode))
			);
	};
	// Remove "check categories" when using HotCat
	// Only executed on first submit
	$('body').one('submit.checkCatListener', '#hotcatCommitForm', function (e) {
		if (storageItem === 'disabled') {
			return true;
		}
		const self = this;
		const newVal = self.wpTextbox1.value.replace(checkCategoriesRegExp, '');
		const dlgButtons = {};
		let $dialogCheckStorage;
		let $permaSaveHint;
		let $textHintNode;
		let $dialog;
		const doRemove = () => {
			self.wpSummary.value = `Removing [[Template:Check categories|{${`{Check categories}}]] ${self.wpSummary.value}`}`;
			self.wpTextbox1.value = newVal;
		};
		const writeStorage = (val) => {
			mw.storage.set(storageItemName, val, 6048e2); // 7 days
		};
		dlgButtons['Yes, Remove'] = function () {
			doRemove();
			if ($dialogCheckStorage[0].checked) {
				writeStorage('auto');
			}
			$(this).dialog('close');
		};
		dlgButtons['No, keep it'] = function () {
			if ($dialogCheckStorage[0].checked) {
				writeStorage('disabled');
			}
			$(this).dialog('close');
		};
		const _addToJS = function (_e) {
			_e.preventDefault();
			if ($permaSaveHint.hasClass('ui-state-disabled')) {
				return;
			}
			const $el = $(this);
			$el.off('click').text('Please wait.');
			$permaSaveHint.addClass('ui-state-disabled');
			const params = {
				action: 'edit',
				title: `User:${mw.config.get('wgUserName')}/common.js`,
				summary: `${selfName}Saving HotCat configuration.`,
				appendtext: $el.data('addText'),
				token: mw.user.tokens.get('csrfToken'),
			};
			const editDone = (editStat) => {
				if (!editStat) {
					return;
				}
				if (editStat.error) {
					mw.notify(
						`Unable to save to your common.js using the API\n${editStat.error.code}\n${editStat.error.info}`,
						{tag: 'hotCatCheck', type: 'error'}
					);
					$el.text('Edit-Error!');
				} else {
					$el.text('Done.');
					$permaSaveHint.fadeOut();
				}
			};
			$.post(mw.util.wikiScript('api'), params, editDone);
		};
		/**
		 * On Wikimedia Commons there were people who said:
		 * "Categorizing with HotCat does legit automated removal of the check-cat-message"
		 * So we invented a dialog that should be readable by users even with very few English skills.
		 */
		const prompt = () => {
			$dialogCheckStorage = $('<input>')
				.attr({
					type: 'checkbox',
					id: 'hotCatAutoRemoveCheckCatStorage',
				})
				.on('change', function () {
					if (this.checked) {
						$permaSaveHint.fadeIn();
					} else {
						$permaSaveHint.fadeOut();
					}
				});
			$textHintNode = $('<ul>');
			$('<li>')
				.append(
					$('<a>')
						.attr('href', '#')
						.text('Disable this feature.')
						.data('addText', '\nwindow.HotCatAutoRemoveCheckCatOptOut = true;')
						.on('click', _addToJS)
				)
				.appendTo($textHintNode);
			$('<li>')
				.append(
					$('<a>')
						.attr('href', '#')
						.text('Remove {{check categories}} when editing using HotCat without prompting.')
						.data('addText', '\nwindow.HotCatAutoRemoveCheckCat = true;')
						.on('click', _addToJS)
				)
				.appendTo($textHintNode);
			$permaSaveHint = createNotifyArea(
				$('<span>').text('Save these setting in your common.js: ').append($textHintNode),
				'ui-icon-info',
				'ui-state-highlight'
			);
			$dialog = $('<div>')
				.append(
					$('<span>')
						.css({
							'font-size': '2em',
							'line-height': '1.8em',
						})
						.append(
							$('<span>').text(' {{check categories}} ').css({
								'background-color': '#F8CCB0',
								'text-decoration': 'line-through !important',
								display: 'inline-block',
							}),
							$('<span>').text(' ?')
						)
				)
				.append(
					'<br>',
					$dialogCheckStorage,
					$('<label>').attr('for', 'hotCatAutoRemoveCheckCatStorage').text("Don't ask again"),
					'<br>'
				)
				.append(mw.user.isAnon() ? '' : $permaSaveHint.hide());
			$dialog.dialog({
				modal: true,
				closeOnEscape: true,
				title: '{{check categories}} (−)?',
				width: 450,
				buttons: dlgButtons,
				close: () => {
					const $body = $('body');
					$body.find('#hotcatCommitForm').trigger('submit');
				},
				open() {
					const $buttons = $(this).parent().find('.ui-dialog-buttonpane button');
					$buttons.eq(0).button({
						icons: {
							primary: 'ui-icon-circle-check',
						},
					});
					$buttons.eq(1).button({
						icons: {
							primary: 'ui-icon-cancel',
						},
					});
				},
			});
		};
		if (newVal !== self.wpTextbox1.value) {
			if (window.HotCatAutoRemoveCheckCat || storageItem === 'auto') {
				doRemove();
				return true;
			}
			e.preventDefault();
			prompt();
		}
		return true;
	});
	// Add OK-Link to the cats panel
	const $okLink = $('<a>')
		.attr({
			href: '#',
			title: 'Categories are OK! Immediately remove the template.',
		})
		.append('<s>')
		.text('{{Check categories}}');
	$okLink.on('click', function (e) {
		e.preventDefault();
		const $el = $(this);
		$el.off('click');
		const doEdit = (result) => {
			if (!result) {
				return;
			}
			$el.text('Doing.');
			const text = result.replace(checkCategoriesRegExp, '');
			if (text === result) {
				$el.text('Template not found!');
				return;
			}
			const params = {
				action: 'edit',
				title: mw.config.get('wgPageName'),
				summary: `${selfName}Categories are checked and OK. You can help [[Category:Media needing category review|reviewing]]!`,
				nocreate: true,
				token: mw.user.tokens.get('csrfToken'),
				text,
			};
			const editDone = (editStat) => {
				if (!editStat) {
					return;
				}
				if (editStat.error) {
					mw.notify(
						`Unable to remove "Check categories" with the API\n${editStat.error.code}\n${editStat.error.info}`,
						{tag: 'hotCatCheck', type: 'error'}
					);
					$el.text('Edit-Error!');
				} else {
					$el.text('Edit Done.');
				}
				const $body = $('body');
				$body.find('.checkcategories').fadeOut();
			};
			$el.text('Doing..');
			$.post(mw.util.wikiScript('api'), params, editDone);
		};
		$el.text('Doing');
		$.ajax({
			url: mw.config.get('wgScript'),
			data: {
				action: 'raw',
				title: mw.config.get('wgPageName').replace(/ /g, '_'),
			},
			dataType: 'text',
			error: () => {
				$el.text('Error!');
			},
			success: doEdit,
			type: 'GET',
			cache: false,
		});
	});
	$(() => {
		const $body = $('body');
		$body.find('#catlinks').find('ul:first').append($('<li>').append($okLink));
	});
})();
