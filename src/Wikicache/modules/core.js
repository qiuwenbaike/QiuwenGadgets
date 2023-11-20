import {messages} from './messages';

let autoSaveId = null;

const settings = {
	'autosave-interval': 60,
};

const autoSaveArea = {
	'#wpTextbox1': (el, val) => {
		if (val) {
			el.val(val);
		} else {
			return el.val();
		}
	},
	'#wpSummary': (el, val) => {
		if (val) {
			el.val(val);
		} else {
			return el.val();
		}
	},
};

const initView = () => {
	loadSettings();
};

const initEdit = () => {
	$('#editform').on('wikiCacheSettingsUpdate', autoSave).on('submit', onSubmit);
	loadSettings();
	defaultNotice();
	if (location.hash.includes('wikicache=autoload')) {
		load();
	} else {
		initLoad();
	}
};

const loadSettings = () => {
	const _settings = mw.storage.getObject('wikicache-settings');
	if (_settings instanceof Object) {
		$.extend(settings, _settings);
	}
	$('#editform').trigger('wikiCacheSettingsUpdate');
};

const saveSettings = () => {
	mw.storage.setObject('wikicache-settings', settings);
	$('#editform').trigger('wikiCacheSettingsUpdate');
};

const defaultNotice = () => {
	const more = {};
	more[messages['notice-more']] = settingsDialog;
	more[messages['notice-load']] = () => {
		load();
	};
	notice(messages['notice-init'], more);
};

const notice = (msg, more) => {
	let _notice = $('#gadget-wikicache__notice');
	if (_notice.length === 0) {
		_notice = $('<div>')
			.addClass('ui-widget-content gadget-wikicache__notice')
			.attr('id', 'gadget-wikicache__notice');
	}
	_notice.empty().off('mouseenter').off('mouseleave').append(msg).appendTo($('body')).fadeIn();
	if (more instanceof Object) {
		_notice
			.on('mouseenter', () => {
				const element = $('<span>')
					.addClass('gadget-wikicache__more')
					.appendTo(_notice)
					.append(messages['bracket-left']);
				let first = true;
				element.appendTo(_notice);
				for (const message in more) {
					if (Object.hasOwn(more, message)) {
						if (first) {
							first = false;
						} else {
							element.append('&nbsp;|&nbsp;');
						}
						element.append($('<a>').attr('href', '#').html(message).on('click', more[message]));
					}
				}
				element.append(messages['bracket-right']);
			})
			.on('mouseleave', function () {
				$('.gadget-wikicache__more', this).remove();
			});
	}
};

const settingsDialog = () => {
	const buttons = {};
	buttons[messages['ok']] = function () {
		$(this).dialog('close');
	};
	const dialog = $('<div>')
		.addClass('gadget-wikicache__dialog')
		.attr('title', messages['settings-title'])
		.append(
			$('<p>')
				.append($('<label>').attr('for', 'autosave-interval').html(messages['settings-autosave-interval']))
				.append(
					$('<input>')
						.attr({
							id: 'autosave-interval',
							type: 'text',
							size: 5,
						})
						.val(settings['autosave-interval'])
				)
				.append(`&nbsp;${messages['settings-autosave-interval-suffix']}`)
		);
	dialog.appendTo($('body')).dialog({
		draggable: false,
		modal: true,
		width: 400,
		beforeClose() {
			let interval = $('#autosave-interval', dialog).val();
			if (Number.isNaN(interval)) {
				mw.notify(messages['settings-autosave-interval-invalid'], {tag: 'wikiCache', type: 'error'});
				return false;
			}
			interval = Number.parseInt(interval, 10);
			if (interval < 10) {
				mw.notify(messages['settings-autosave-interval-too-small'], {tag: 'wikiCache', type: 'error'});
				return false;
			}
			settings['autosave-interval'] = interval;
			saveSettings();
		},
		buttons,
	});
	return false;
};

const autoSave = () => {
	clearTimeout(autoSaveId);
	autoSaveId = setTimeout(() => {
		save();
		autoSave();
	}, settings['autosave-interval'] * 1000);
};

const save = () => {
	const asarea = autoSaveArea;
	const autosave = {
		_path: location.pathname + location.search,
		_date: new Date(),
	};
	for (const sele in asarea) {
		if (!Object.hasOwn(asarea, sele)) {
			continue;
		}
		autosave[sele] = asarea[sele]($(sele));
	}
	let thekey = `wikicache-autosave-${mw.config.get('wgPageName')}`;
	const section = $('input[name="wpSection"]:first').val();
	if (section) {
		thekey += `_${section}`;
	}
	mw.storage.setObject(thekey, autosave, 2592e3); // 30 days
	setTimeout(defaultNotice, 1000);
};

const initLoad = () => {
	let thekey = `wikicache-autosave-${mw.config.get('wgPageName')}`;
	const section = $('input[name="wpSection"]:first').val();
	if (section) {
		thekey += `_${section}`;
	}
	const autosave = mw.storage.getObject(thekey);
	if (autosave instanceof Object) {
		const more = {};
		more[messages['notice-load-available-confirm']] = () => {
			load(autosave);
			return false;
		};
		more[messages['notice-load-available-ignore']] = () => {
			defaultNotice();
			autoSave();
			return false;
		};
		notice(messages['notice-load-available'], more);
		clearTimeout(autoSaveId);
	}
};

const load = (autosave) => {
	let _autosave;
	if (autosave instanceof Object) {
		_autosave = autosave;
	} else {
		let thekey = `wikicache-autosave-${mw.config.get('wgPageName')}`;
		const section = $('input[name="wpSection"]:first').val();
		if (section) {
			thekey += `_${section}`;
		}
		_autosave = mw.storage.getObject(thekey);
	}
	const asarea = autoSaveArea;
	for (const sele in asarea) {
		if (!Object.hasOwn(asarea, sele)) {
			continue;
		}
		asarea[sele]($(sele), _autosave[sele]);
	}
	defaultNotice();
	autoSave();
};

const onSubmit = () => {
	save();
	let thekey = `wikicache-autosave-${mw.config.get('wgPageName')}`;
	const section = $('input[name="wpSection"]:first').val();
	if (section) {
		thekey += `_${section}`;
	}
	mw.storage.remove(thekey);
};

export const init = () => {
	const action = mw.config.get('wgAction');
	if (['edit', 'submit'].includes(action)) {
		initEdit();
	} else if (action === 'view') {
		initView();
	}
};
