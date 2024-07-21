import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Archive: localize({
			en: 'archive',
			'zh-hans': '存档',
			'zh-hant': '存檔',
		}),
		Archiving: localize({
			en: 'being archived',
			'zh-hans': '存档中',
			'zh-hant': '存檔中',
		}),
		Archived: localize({
			en: 'archived',
			'zh-hans': '已存档',
			'zh-hant': '已存檔',
		}),
		Delete: localize({
			en: 'delete',
			'zh-hans': '删除',
			'zh-hant': '刪除',
		}),
		Deleting: localize({
			en: 'being deleted',
			'zh-hans': '删除中',
			'zh-hant': '刪除中',
		}),
		Deleted: localize({
			en: 'deleted',
			'zh-hans': '已删除',
			'zh-hant': '已刪除',
		}),
		'Archive summary': localize({
			en: 'archive section',
			'zh-hans': '存档段落',
			'zh-hant': '存檔段落',
		}),
		'Create summary': localize({
			en: 'create archive',
			'zh-hans': '建立存档',
			'zh-hant': '建立存檔',
		}),
		'Delete summary': localize({
			en: 'delete section',
			'zh-hans': '删除段落',
			'zh-hant': '刪除段落',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
