import './check.less';
import {mwApi} from './api';

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
		!document.querySelector('.checkcategories')
	) {
		return;
	}
	const api = mwApi('hotCatCheck/2.0');
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
	const createjIcon = (iconClass: string): JQuery => {
		return $('<span>').attr('class', `hotcat-check-icon ${iconClass}`).text(' ');
	};
	const createNotifyArea = (textNode: JQuery<JQuery.Node>, icon: string, state: string): JQuery<HTMLElement> => {
		return $('<div>')
			.addClass('hotcat-check-notice')
			.append(
				$('<div>')
					.attr('class', `hotcat-check-notice-content ${state}`)
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

		const newVal = (self.wpTextbox1 as HTMLTextAreaElement).value?.replace(checkCategoriesRegExp, '');
		let $dialogCheckStorage: JQuery<HTMLElement>;
		let $permaSaveHint: JQuery<HTMLElement>;
		let $textHintNode;
		let $dialog;
		let $overlay: JQuery<HTMLElement>;
		const doRemove = () => {
			(self.wpSummary as HTMLInputElement).value =
				`Removing [[Template:Check categories|{{Check categories}}]] ${(self.wpSummary as HTMLInputElement).value}`;

			(self.wpTextbox1 as HTMLTextAreaElement).value = newVal;
		};
		const writeStorage = (val: string) => {
			mw.storage.set(storageItemName, val, 60 * 60 * 24 * 7); // 7 days
		};
		const closeDialog = () => {
			$(document).off('keydown.hotcatCheck');
			$overlay?.remove();
			$('body').find('#hotcatCommitForm').trigger('submit');
		};
		const finishDialog = (storageValue?: string) => {
			if (storageValue && ($dialogCheckStorage[0] as HTMLInputElement)?.checked) {
				writeStorage(storageValue);
			}
			closeDialog();
		};
		const _addToJS = function (this: HTMLElement, _e: JQuery.Event) {
			_e.preventDefault();
			if ($permaSaveHint.hasClass('hotcat-check-disabled')) {
				return;
			}
			const $el: JQuery<HTMLElement> = $(this);
			$el.off('click').text('Please wait.');
			$permaSaveHint.addClass('hotcat-check-disabled');
			const params: ApiEditPageParams = {
				action: 'edit',
				format: 'json',
				title: `User:${mw.config.get('wgUserName')}/common.js`,
				summary: `${selfName}Saving HotCat configuration.`,
				appendtext: $el.data('addText') as string,
			};
			const editDone = (editStat?: {error?: {code?: string; info?: string}}) => {
				if (!editStat) {
					return;
				}
				if (editStat.error) {
					void mw.notify(
						`Unable to save to your common.js using the API\n${editStat.error.code}\n${editStat.error.info}`,
						{tag: 'hotCatCheck', type: 'error'}
					);
					$el.text('Edit-Error!');
				} else {
					$el.text('Done.');
					$permaSaveHint.hide();
				}
			};
			void api.postWithToken('csrf', params).then(editDone);
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
					if ((this as HTMLInputElement).checked) {
						$permaSaveHint.show();
					} else {
						$permaSaveHint.hide();
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
				'hotcat-check-icon-info',
				'hotcat-check-highlight'
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
			$overlay = $('<div>').addClass('hotcat-check-overlay').attr('role', 'presentation');
			$dialog = $('<div>')
				.addClass('hotcat-check-dialog')
				.attr({role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'hotcat-check-dialog-title'})
				.prepend($('<h2>').attr('id', 'hotcat-check-dialog-title').text('{{check categories}} (−)?'))
				.append($dialog)
				.append(
					$('<div>')
						.addClass('hotcat-check-dialog-buttons')
						.append(
							$('<button>')
								.attr('type', 'button')
								.text('Yes, Remove')
								.on('click', () => {
									doRemove();
									finishDialog('auto');
								}),
							$('<button>')
								.attr('type', 'button')
								.text('No, keep it')
								.on('click', () => {
									finishDialog('disabled');
								})
						)
				);
			$overlay.append($dialog).appendTo('body');
			$dialog.find('button').first().trigger('focus');
			$overlay.on('click', (event) => {
				if (event.target === $overlay[0]) {
					closeDialog();
				}
			});
			$(document).on('keydown.hotcatCheck', (event) => {
				if (event.key === 'Escape') {
					$(document).off('keydown.hotcatCheck');
					closeDialog();
				}
			});
		};

		if (newVal !== (self.wpTextbox1 as HTMLTextAreaElement).value) {
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
		const doEdit = (result: string) => {
			if (!result) {
				return;
			}
			$el.text('Doing.');
			const text = result.replace(checkCategoriesRegExp, '');
			if (text === result) {
				$el.text('Template not found!');
				return;
			}
			const params: ApiEditPageParams = {
				text,
				action: 'edit',
				format: 'json',
				title: mw.config.get('wgPageName'),
				summary: `${selfName}Categories are checked and OK. You can help [[Category:Media needing category review|reviewing]]!`,
				nocreate: true,
			};
			const editDone = (editStat?: {error?: {code?: string; info?: string}}) => {
				if (!editStat) {
					return;
				}
				if (editStat.error) {
					void mw.notify(
						`Unable to remove "Check categories" with the API\n${editStat.error.code}\n${editStat.error.info}`,
						{
							tag: 'hotCatCheck',
							type: 'error',
						}
					);
					$el.text('Edit-Error!');
				} else {
					$el.text('Edit Done.');
				}
				const $body = $('body');
				$body.find('.checkcategories').hide();
			};
			$el.text('Doing..');
			void api.postWithToken('csrf', params).then(editDone);
		};
		$el.text('Doing');
		void $.ajax({
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
	$(function loadHotCatCheck() {
		const $body = $('body');
		$body.find('#catlinks').find('ul:first').append($('<li>').append($okLink));
	});
})();
