import {customizeToolbar} from 'ext.gadget.Edittools-customizeToolbar';
import {localize} from 'ext.gadget.i18n';

const uls = (hans: string, hant: string = hans): string => localize({'zh-hans': hans, 'zh-hant': hant, en: hans});

const edittoolsVplus = (): void => {
	customizeToolbar(function (this: JQuery): void {
		const self = this as JQuery & {wikiEditor: (method: string, options: Record<string, unknown>) => void};

		self.wikiEditor('addToToolbar', {
			sections: {
				pageedits: {
					type: 'toolbar',
					// Can also be 'booklet'
					label: uls('条目编辑', '條目編輯'),
				},
			},
		});
		self.wikiEditor('addToToolbar', {
			section: 'pageedits',
			groups: {
				pageedits: {},
			},
		});
		self.wikiEditor('addToToolbar', {
			section: 'pageedits',
			group: 'pageedits',
			tools: {
				articleEdit: {
					label: uls('条目编辑', '條目編輯'),
					type: 'select',
					list: {
						elink: {
							label: uls('外部链接章节', '外部連結章節'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '\n== 外部链接 ==\n* [',
									periMsg: '网页地址 网页说明',
									post: ']\n',
								},
							},
						},
						seealso: {
							label: uls('参见章节', '參見章節'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '\n== 参见 ==\n* [[',
									periMsg: '参见地址',
									post: ']]\n',
								},
							},
						},
						Disambig: {
							label: uls('消歧义', '消歧義'),
							action: {
								type: 'encapsulate',
								options: {
									pre: "\n'''{{subst:".concat("PAGENAME}}'''可以指：\n"),
									periMsg: uls(
										'* [[歧义1]]：描述1\n* [[歧义2]]：描述2',
										'* [[歧義1]]：描述1\n* [[歧義2]]：描述2'
									),
									post: '\n{{disambig}}',
								},
							},
						},
						otheruses: {
							label: uls('条目消歧义', '條目消歧義'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{Otheruses|',
									periMsg: uls(
										'条目名称|subject=本页主题描述|other=同名或类似名的其它条目描述',
										'條目名稱|subject=本頁主題描述|other=同名或類似名的其它條目描述'
									),
									post: '}}',
								},
							},
						},
						Current: {
							label: uls('正在发生', '正在發生'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{Current|time={{subst:'.concat('#time:Y年Fj日|{{#time:c}}}}'),
								},
							},
						},
					},
				},
				articleMaintenance: {
					label: uls('页面维护', '頁面維護'),
					type: 'select',
					list: {
						stub: {
							label: '小作品',
							action: {
								type: 'encapsulate',
								options: {
									pre: '\n{{',
									post: '小作品}}',
								},
							},
						},
						inuse: {
							label: uls('正在编辑', '正在編輯'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{Inuse}}',
								},
							},
						},
						Substub: {
							label: uls('小小条目', '小小條目'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{subst:Substub'.concat('/auto', '}}'),
								},
							},
						},
						mergeto: {
							label: uls('合并本条目到', '合併本條目到'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{mergeto|',
									periMsg: uls('合并本条目到的条目名称', '合並本條目到的條目名稱'),
									post: '}}',
								},
							},
						},
						mergefrom: {
							label: uls('合并到本条目', '合併到本條目'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{mergefrom|',
									periMsg: uls('需要合并到本条目的条目名称', '需要合並到本條目的條目名稱'),
									post: '}}',
								},
							},
						},
						split: {
							label: uls('分拆条目', '分拆條目'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{Split}}',
								},
							},
						},
					},
				},
				zhhanshant: {
					label: '繁简转换',
					type: 'select',
					list: {
						noconv: {
							label: uls('取消繁简转换', '取消繁簡轉換'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '-{',
									periMsg: uls('不转换内容', '不轉換內容'),
									post: '}-',
								},
							},
						},
						title: {
							label: uls('标题错误', '標題錯誤'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '-{T|',
									periMsg: uls('正确标题名称', '正確標題名稱'),
									post: '}-',
								},
							},
						},
						noteTA: {
							label: uls('标题全文转换', '標題全文轉換'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{noteTA\n',
									periMsg: `|G1=${uls(
										'公共组名',
										'公共組名'
									)}\n|1=zh-cn:大陆;zh-tw:台灣;zh-hk:香港;zh-sg:新马;\n|2=zh-cn:大陆;zh-tw:台灣;zh-hk:香港;zh-sg:新马;\n`,
									post: '}}',
								},
							},
						},
						image: {
							label: uls('地区语言图像', '地區語言圖像'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{Image\n',
									periMsg: `\t|zh=${uls(
										'无转换图像名',
										'無轉換圖像名'
									)}\n\t|zh-hans=简体图像名\n\t|zh-hant= 繁体圖像名\n\t|zh-cn=大陆图像名\n\t|zh-tw=臺灣圖像名\n\t|zh-hk=香港圖像名\n\t|zh=马新图像名\n\t|${uls(
										'图像属性',
										'圖像屬性'
									)}\n`,
									post: '}}',
								},
							},
						},
					},
				},
				langTags: {
					label: uls('非中文标明', '非中文標明'),
					type: 'select',
					list: {
						en: {
							label: uls('英语', '英語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|en|',
									periMsg: uls('英语', '英語'),
									post: '}}',
								},
							},
						},
						de: {
							label: uls('德语', '德語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|de|',
									periMsg: uls('德语', '德語'),
									post: '}}',
								},
							},
						},
						fr: {
							label: uls('法语', '法語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|fr|',
									periMsg: uls('法语', '法語'),
									post: '}}',
								},
							},
						},
						ja: {
							label: uls('日语', '日語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|ja|',
									periMsg: uls('日语', '日語'),
									post: '}}',
								},
							},
						},
						es: {
							label: uls('西班牙语', '西班牙語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|es|',
									periMsg: uls('西班牙语', '西班牙語'),
									post: '}}',
								},
							},
						},
						ar: {
							label: uls('阿拉伯语', '阿拉伯語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|ar|',
									periMsg: uls('阿拉伯语', '阿拉伯語'),
									post: '}}',
								},
							},
						},
						ru: {
							label: uls('俄语', '俄語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|ru|',
									periMsg: uls('俄语', '俄語'),
									post: '}}',
								},
							},
						},
						he: {
							label: uls('希伯来语', '希伯來語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|he|',
									periMsg: uls('希伯来语', '希伯來語'),
									post: '}}',
								},
							},
						},
						el: {
							label: uls('希腊语', '希臘語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|el|',
									periMsg: uls('希腊语', '希臘語'),
									post: '}}',
								},
							},
						},
						pt: {
							label: uls('葡萄牙语', '葡萄牙語'),
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|pt|',
									periMsg: uls('葡萄牙语', '葡萄牙語'),
									post: '}}',
								},
							},
						},
						la: {
							label: '拉丁语',
							action: {
								type: 'encapsulate',
								options: {
									pre: '{{lang|la|',
									periMsg: '拉丁语',
									post: '}}',
								},
							},
						},
						langcode: {
							label: uls('其他语言', '其他語言'),
							action: {
								type: 'encapsulate',
								options: {
									pre: `{{lang|${uls('在此填上语言代码|', '在此填上語言代碼|')}`,
									periMsg: uls('其他语言', '其他語言'),
									post: '}}',
								},
							},
						},
					},
				},
			},
		});
	});
};

export {edittoolsVplus};
