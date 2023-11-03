export const easy_archive_lang = () => {
	const {localize} = window.i18n;
	window.easy_archive.lang ??= {};
	window.easy_archive.lang.delete = localize({
		en: 'delete',
		'zh-hans': '删除',
		'zh-hant': '刪除',
	});
	window.easy_archive.lang.archive = localize({
		en: 'archive',
		'zh-hans': '存档',
		'zh-hant': '存檔',
	});
	window.easy_archive.lang.supports = localize({
		en: 'Easy Archive is enabled on this talk page',
		'zh-hans': '本讨论页面使用 Easy Archive 快速存档',
		'zh-hant': '此頁面使用 Easy Archive',
	});
	window.easy_archive.lang.others_page = localize({
		en: 'Easy Archive is not enabled.',
		'zh-hans': '此页面是他人的用户讨论页面，因此不支持 Easy Archive 快速存档。',
		'zh-hant': '此頁面為他人用戶討論頁面，故不支援 Easy Archive 快速存檔。',
	});
	window.easy_archive.lang.to_enable = localize({
		en: 'This page is not using Easy Archive.',
		'zh-hans': '此页面没有启用 Easy Archive。',
		'zh-hant': '本頁没有啟用 Easy Archive。',
	});
	window.easy_archive.lang.enable_on_generic_page = localize({
		en: '<div>This page is not your user talk page. However Easy Archive still can be used if needed.</div><div>To enable it, add {{Easy Archive|to=[Archive location]}} template to this page.</div>',
		'zh-hans':
			'<div>此页面不是您的用户讨论页面。不过，若需要，此页面可以启用 Easy Archive。</div><div>若要在此页面使用 Easy Archive，请在页面上添加模板 {{Easy Archive|to=存档位置}}。</div>',
		'zh-hant':
			'<div>此頁面不是您的用戶討論頁面。不過，若需要，此頁面可以啟用 Easy Archive。</div><div>若要在此頁面使用 Easy Archive，請在頁面上添加模板 {{Easy Archive|to=存檔位置}}。</div>',
	});
	window.easy_archive.lang.please_enable = localize({
		en: '<div>Add {{Easy Archive|to=[Archive location]}} to this page to start using Easy Archive.</div>',
		'zh-hans': '<div>请在此页面加入 {{Easy Archive|to=存档地址}} 来启用 Easy Archive。</div>',
		'zh-hant': '<div>請在此頁面加入 {{Easy Archive|to=存檔位置}} 來啟用 Easy Archive。</div>',
	});
	window.easy_archive.lang.please_enable_elaborate = localize({
		en: "<div>You have the Easy Archive functionality enabled but your talk page hasn't been configured yet. </div><div>To take advantage of Easy Archive, add {{Easy Archive|to=[Archive location]}} template to this page.</div>",
		'zh-hans':
			'<div>您的账号已经支持 Easy Archive，但是，为了开始使用该功能，您还需要在自己的用户讨论页面上添加模板 {{Easy Archive|to=存档位置}}。</div>',
		'zh-hant':
			'<div>您的賬號已經支持 Easy Archive，但是，為了開始使用該功能，您還需要在自己的用戶討論頁面上添加模板 {{Easy Archive|to=存檔位置}}。</div>',
	});
	window.easy_archive.lang.stop_using = localize({
		en: 'Turn off',
		'zh-hans': '停用',
		'zh-hant': '停用',
	});
	window.easy_archive.lang.left_par_split = localize({
		en: ' (',
		zh: '（',
	});
	window.easy_archive.lang.right_par = localize({
		en: ')',
		zh: '）',
	});
	window.easy_archive.lang.archive_path_colon_split = localize({
		en: 'Archive location: ',
		'zh-hans': '存档地址：',
		'zh-hant': '存檔至：',
	});
	window.easy_archive.lang.warning_stop_using = localize({
		en: '<div>Once Easy Archive is turned off, and you want it back on, you\'ll have to turn it on manually.</div><div>Do you want to turn it off? <div style="height:.5em"></div><button onclick="window.easy_archive.turn_off(1)">Yes</button><button onclick="window.easy_archive.elaborate_notice(3163);">No</button></div>',
		'zh-hans':
			'<div>停用 Easy Archive 后，如要再次启用，只能手工操作。</div><div>要现在停用 Easy Archive 吗？<div style="height:.5em"></div><button onclick=onclick="window.easy_archive.turn_off(1)">是</button><button onclick="window.easy_archive.elaborate_notice(3163);">否</button></div>',
		'zh-hant':
			'<div>停用 Easy Archive 後，如要再次啟用，則必須手動重啟。</div><div>要現在停用 Easy Archive 嗎？<div style="height:.5em"></div><button onclick=onclick="window.easy_archive.turn_off(1)">是</button><button onclick="window.easy_archive.elaborate_notice(3163);">否</button></div>',
	});
	window.easy_archive.lang.stop_manually = localize({
		en: '<div>Cannot turn off Easy Archive automatically. </div><div>To manually discontinue use, delete the template {{Easy Archive|to=[Archive location]}} from this page.</div>',
		'zh-hans':
			'<div>经过尝试，无法自动停用 Easy Archive。请手动停用。</div><div>请从此页面删除如下模版：{{Easy Archive|to=存档位置}}。</div>',
		'zh-hant':
			'<div>經過嘗試，無法自動停用 Easy Archive。請手動停用。</div><div>請從本頁刪除以下模板︰{{Easy Archive|to=存檔位置}}。</div>',
	});
	window.easy_archive.lang.loading_section_i = localize({
		en: '<div>Loading section $1</div>',
		'zh-hans': '<div>正在读取第 $1 节的内容</div>',
		'zh-hant': '<div>正在讀取第 $1 節的內容</div>',
	});
	window.easy_archive.lang.deleting_section_i = localize({
		en: '<div>Deleting section $1</div>',
		'zh-hans': '<div>正在删除第 $1 节的内容</div>',
		'zh-hant': '<div>正在刪除第 $1 節的內容</div>',
	});
	window.easy_archive.lang.done_section_i = localize({
		en: '<div>Section $1 has been archived to $2</div>',
		'zh-hans': '<div>已经将第 $1 节存档到 $2</div>',
		'zh-hant': '<div>已經將第 $1 節存檔到 $2</div>',
	});
	window.easy_archive.lang.done_deleting_section_i = localize({
		en: '<div>Section $1 has been deleted</div>',
		'zh-hans': '<div>已经将第 $1 节删除</div>',
		'zh-hant': '<div>已經將第 $1 節刪除</div>',
	});
	window.easy_archive.lang.being_archived = localize({
		en: 'being archived',
		'zh-hans': '存档中',
		'zh-hant': '存檔中',
	});
	window.easy_archive.lang.being_deleted = localize({
		en: 'being deleted',
		'zh-hans': '删除中',
		'zh-hant': '刪除中',
	});
	window.easy_archive.lang.already_archived = localize({
		en: 'archived',
		'zh-hans': '已存档',
		'zh-hant': '已存檔',
	});
	window.easy_archive.lang.already_deleted = localize({
		en: 'deleted',
		'zh-hans': '已删除',
		'zh-hant': '已刪除',
	});
	window.easy_archive.lang.others_talk_elaborate = localize({
		en: "This page is another user's talk page. You cannot archive the topics on this page for him/her",
		'zh-hans': '这是另一名用户的讨论页面，您不能代替另一名用户存档。',
		'zh-hant': '這是另一名用戶的討論頁面，您不能代替另一名用戶存檔。',
	});
	window.easy_archive.lang.page_not_supported = localize({
		en: 'This page is not supported by Easy Archive.',
		'zh-hans': '此页面不支持 Easy Archive。',
		'zh-hant': '此頁面不支持 Easy Archive。',
	});
	window.easy_archive.lang.page_not_supported_elaborate = localize({
		en: '<div>These pages are not supported by Easy Archive: </div><div>File, Template, Module, MediaWiki, Category, Special, JavaScript, CSS, JSON.</div>',
		'zh-hans':
			'<div>这些页面不受 Easy Archive 支持：</div><div>File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。</div>',
		'zh-hant':
			'<div>這些頁面不受 Easy Archive 支持：</div><div>File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。</div>',
	});
	window.easy_archive.lang.cancelled = localize({
		en: '<div>Cancelled</div>',
		'zh-hans': '<div>已取消</div>',
		'zh-hant': '<div>已取消</div>',
	});
	window.easy_archive.lang.easy_archive_has_been_stopped = localize({
		en: '<div>Easy Archive has been stopped.</div>',
		'zh-hans': '<div>已在此页面停用 Easy Archive。</div>',
		'zh-hant': '<div>已在此頁面停用 Easy Archive。</div>',
	});
	window.easy_archive.lang.problem_with_archive_location_main_space = localize({
		en: '<div>Currently the archive location of this page, "$1", is under the article namespace, where archives should not be normally directed to. </div><div>Please check if you have the correct archive location.</div>',
		'zh-hans':
			'<div>此页面目前的存档地址是“$1”，在条目名称空间之下。</div><div>一般而言不应向条目名称空间进行存档，请检查存档地址。</div>',
		'zh-hant':
			'<div>此頁面當前的存檔地址是「$1」，在條目名稱空間之下。</div><div>一般而言不應向條目名稱空間進行存檔，請檢查存檔地址。</div>',
	});
	window.easy_archive.lang.problem_with_archive_location_same_page = localize({
		en: '<div>Currently the archive location of this page, "$1", is this page itself, Easy archive cannot operate like this. </div>',
		'zh-hans': '<div>此页面目前的存档地址是“$1”，和此页面名称相同。Easy Archive 无法按此地址存档。</div>',
		'zh-hant': '<div>此頁面當前的存檔地址是「$1」，和此頁面名稱相同。Easy Archive 無法按此地址存檔。</div>',
	});
	window.easy_archive.lang.archive_summary = localize({
		en: 'archive section',
		'zh-hans': '存档段落',
		'zh-hant': '存檔段落',
	});
	window.easy_archive.lang.delete_summary = localize({
		en: 'delete section',
		'zh-hans': '删除段落',
		'zh-hant': '刪除段落',
	});
	window.easy_archive.lang.turn_off_summary = localize({
		en: 'Disable Easy Archive on this page.',
		'zh-hans': '在此页面停用 Easy Archive。',
		'zh-hant': '在本頁停用 Easy Archive。',
	});
};
