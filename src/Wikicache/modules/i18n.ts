import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		'Change saved': localize({
			en: 'Edit content saved to local storage successfully',
			'zh-hans': '编辑内容已成功保存至本地存储',
			'zh-hant': '編輯內容已成功儲存至本地儲存',
		}),
		'Restore changes?': localize({
			en: 'Your unsaved chages have been saved to your local storage. Restore changes?',
			'zh-hans': '先前未保存的编辑内容已存储于本地存储。是否恢复先前未保存的编辑内容？',
			'zh-hant': '先前未保存的編輯內容已儲存于本地儲存。是否恢復先前未保存的編輯內容？',
		}),
		'Restore unsaved changes': localize({
			en: 'Restore unsaved changes',
			'zh-hans': '恢复先前未保存编辑内容',
			'zh-hant': '恢復先前未保存編輯內容',
		}),
		'Delete unsaved changes': localize({
			en: 'Delete unsaved changes from local storage',
			'zh-hans': '不恢复且删除本地储存的编辑内容',
			'zh-hant': '不恢復且刪除本地儲存的編輯內容',
		}),
	};
};
const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
