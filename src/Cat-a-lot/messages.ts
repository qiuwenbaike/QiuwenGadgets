export const catALotMessages = (): void => {
	/*! Cat-a-lot messages | CC-BY-SA-4.0 <qwbk.cc/H:CC-BY-SA-4.0> */
	if (mw.config.get('wgUserLanguage') !== 'en') {
		// DO NOT CHANGE THIS LINE
		if (['zh-hant', 'zh-hk', 'zh-mo', 'zh-tw'].includes(mw.config.get('wgUserLanguage'))) {
			mw.messages.set({
				// Preferences
				// new: added 2012-09-19. Please translate.
				// Use user language for i18n
				'cat-a-lot-watchlistpref': '使用Cat-A-Lot編輯文件時的監視列表選項',
				'cat-a-lot-watch_pref': '與系統參數設置相同',
				'cat-a-lot-watch_nochange': '不要更改監視狀態',
				'cat-a-lot-watch_watch': '監視使用Cat-A-Lot編輯的頁面',
				'cat-a-lot-watch_unwatch': '將使用Cat-A-Lot編輯的頁面從監視列表移除',
				'cat-a-lot-minorpref':
					'將編輯標記爲小修改（若您在系統參數設置中已設置將所有編輯標記爲小修改，此選項不會對現有行爲進行改動）',
				'cat-a-lot-editpagespref': '允許對不是文件的頁面和子分類進行分類操作',
				'cat-a-lot-docleanuppref': '移除{{Check categories}}並進行其他細節清理',
				'cat-a-lot-subcatcountpref': '最多顯示的子分類數量',
				// Progress
				'cat-a-lot-loading': '正在加載……',
				'cat-a-lot-editing': '正在編輯頁面',
				'cat-a-lot-of': '，共有',
				'cat-a-lot-skipped-already': '以下頁面已跳過，因爲頁面已經在分類中：',
				'cat-a-lot-skipped-not-found': '以下頁面已跳過，因爲找不到現有分類：',
				'cat-a-lot-skipped-server': '以下頁面無法編輯，因爲連接服務器出錯：',
				'cat-a-lot-all-done': '全部頁面已處理。',
				'cat-a-lot-done': '已完成！',
				'cat-a-lot-added-cat': '已加入分類',
				'cat-a-lot-copied-cat': '已複製到分類',
				'cat-a-lot-moved-cat': '已移動到分類',
				'cat-a-lot-removed-cat': '已從分類移除',
				'cat-a-lot-return-to-page': '返回到頁面',
				'cat-a-lot-cat-not-found': '找不到分類。',
				// as in 17 files selected
				'cat-a-lot-files-selected': '$1個文件已選擇。',
				// Actions
				'cat-a-lot-copy': '複製',
				'cat-a-lot-move': '移動',
				'cat-a-lot-add': '增加',
				'cat-a-lot-remove-from-cat': '從此分類移除',
				'cat-a-lot-enter-name': '輸入分類名稱',
				'cat-a-lot-select': '選擇',
				'cat-a-lot-all': '全部',
				'cat-a-lot-none': '無',
				'cat-a-lot-none-selected': '沒有選擇文件！',
			});
		} else {
			mw.messages.set({
				// Preferences
				// new: added 2012-09-19. Please translate.
				// Use user language for i18n
				'cat-a-lot-watchlistpref': '使用Cat-a-lot编辑文件时的监视列表选项',
				'cat-a-lot-watch_pref': '与系统参数设置相同',
				'cat-a-lot-watch_nochange': '不要更改监视状态',
				'cat-a-lot-watch_watch': '监视使用Cat-a-lot编辑的页面',
				'cat-a-lot-watch_unwatch': '将使用Cat-a-lot编辑的页面从监视列表移除',
				'cat-a-lot-minorpref':
					'将编辑标记为小修改（若您在系统参数设置中已设置将所有编辑标记为小修改，此选项不会对现有行为进行改动）',
				'cat-a-lot-editpagespref': '允许对不是文件的页面和子分类进行分类操作',
				'cat-a-lot-docleanuppref': '移除{{Check categories}}并进行其他细节清理',
				'cat-a-lot-subcatcountpref': '最多显示的子分类数量',
				// Progress
				'cat-a-lot-loading': '正在加载……',
				'cat-a-lot-editing': '正在编辑页面',
				'cat-a-lot-of': '，共有',
				'cat-a-lot-skipped-already': '以下页面已跳过，因为页面已经在分类中：',
				'cat-a-lot-skipped-not-found': '以下页面已跳过，因为找不到现有分类：',
				'cat-a-lot-skipped-server': '以下页面无法编辑，因为连接服务器出错：',
				'cat-a-lot-all-done': '全部页面已处理。',
				'cat-a-lot-done': '已完成！',
				'cat-a-lot-added-cat': '已加入分类',
				'cat-a-lot-copied-cat': '已复制到分类',
				'cat-a-lot-moved-cat': '已移动到分类',
				'cat-a-lot-removed-cat': '已从分类移除',
				'cat-a-lot-return-to-page': '返回到页面',
				'cat-a-lot-cat-not-found': '找不到分类。',
				// as in 17 files selected
				'cat-a-lot-files-selected': '已选择$1个页面或文件。',
				// Actions
				'cat-a-lot-copy': '复制',
				'cat-a-lot-move': '移动',
				'cat-a-lot-add': '增加',
				'cat-a-lot-remove-from-cat': '从此分类移除',
				'cat-a-lot-enter-name': '输入分类名称',
				'cat-a-lot-select': '选择',
				'cat-a-lot-all': '全部',
				'cat-a-lot-none': '无',
				'cat-a-lot-none-selected': '没有选择任何页面或文件！',
			});
		}
	}
	if (mw.config.get('wgContentLanguage') !== 'en') {
		// DO NOT CHANGE THIS LINE
		if (['zh-hant', 'zh-hk', 'zh-mo', 'zh-tw'].includes(mw.config.get('wgContentLanguage'))) {
			mw.messages.set({
				'cat-a-lot-summary-add': '[[Help:Cat-a-lot|Cat-a-lot]]：加入分類[[Category:$1]]',
				'cat-a-lot-summary-copy':
					'[[Help:Cat-a-lot|Cat-a-lot]]：分類間複製：從[[Category:$1]]到[[Category:$2]]',
				'cat-a-lot-summary-move':
					'[[Help:Cat-a-lot|Cat-a-lot]]：分類間移動：從[[Category:$1]]到[[Category:$2]]',
				'cat-a-lot-summary-remove': '[[Help:Cat-a-lot|Cat-a-lot]]：從分類移除：[[Category:$1]]',
			});
		} else {
			mw.messages.set({
				'cat-a-lot-summary-add': '[[Help:Cat-a-lot|Cat-a-lot]]：加入分类[[Category:$1]]',
				'cat-a-lot-summary-copy':
					'[[Help:Cat-a-lot|Cat-a-lot]]：分类间复制：从[[Category:$1]]到[[Category:$2]]',
				'cat-a-lot-summary-move':
					'[[Help:Cat-a-lot|Cat-a-lot]]：分类间移动：从[[Category:$1]]到[[Category:$2]]',
				'cat-a-lot-summary-remove': '[[Help:Cat-a-lot|Cat-a-lot]]：从分类移除：[[Category:$1]]',
			});
		}
	}
};
