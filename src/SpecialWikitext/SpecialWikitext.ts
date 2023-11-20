import {$body, initMwApi} from '../util';

/* 跟[[Module:Special wikitext]]保持一致的段落。 */
const wikiTextKey = '_addText';

// 合并多个wikitext字符串，并以换行分隔
const luaAddText = (inputStr: string, newStr: string, _escape?: boolean): string => {
	let inputString = inputStr;
	if (newStr) {
		if (inputString !== '') {
			inputString += '\n';
		}
		let text = newStr;
		if (_escape) {
			const [escapeStr] = JSON.parse(
				`[${JSON.stringify(
					// Lua不支持\u、\x的跳脱符号；排除相关转换
					newStr.toString().replace(/\\([ux])/gi, '$1')
				).replace(/\\\\/g, '\\')}]`
			);
			text = escapeStr;
		}
		inputString += text;
	}
	return inputString;
};

// 读取wikitext字符串，并忽略注释尾部
const luaGetString = (str: string) => {
	const testStrArray = /[^\n]*\*\//.exec(str);
	let testStr;
	if (testStrArray) {
		testStr = testStrArray[0] || '';
		testStr = testStr.slice(0, Math.max(0, testStr.length - 2));
	} else {
		testStr = str;
	}
	const trimCheck = testStr?.trim();
	const firstChar = trimCheck.charAt(0);
	if (firstChar === trimCheck[trimCheck.length - 1] && (firstChar === "'" || firstChar === '"')) {
		return trimCheck.slice(1, 1 + trimCheck.length - 2);
	}
	return testStrArray;
};

// 读取CSS之`＿addText  { content："XXX" }`模式的字符串
const luaGetContentText = (str: string): string => {
	let wikitext = '';
	try {
		str.replace(new RegExp(`${wikiTextKey}\\s*\\{[^c\\}]*content\\s*:\\s*[^\n]*`, 'g'), (text) => {
			const tempText = (/content\s*:\s*[^\n]*/.exec(text) || ['content:'])[0]
				.replace(/^[\s;}]+|[\s;}]+$/g, '')
				.replace(/\s*content\s*:\s*/, '');
			if (wikitext !== '') {
				wikitext += '\n';
			}
			wikitext += luaGetString(tempText);
			return text;
		});
	} catch {
		return '';
	}
	return wikitext;
};

// 读取对象定义模式为`＿addText＝XXX`或`＿addText：XXX`模式的字符串 (注释以全角字符代替，避免被抓取)
const luaGetObjText = (str: string): string => {
	let wikitext = '';
	try {
		str.replace(new RegExp(`${wikiTextKey}\\s*[\\=:]\\s*[^\n]*`, 'g'), (text) => {
			const tempText = text
				.replace(/^[\s;}]+|[\s;}]+$/g, '')
				.replace(new RegExp(`${wikiTextKey}\\s*[\\=:]\\s*`), '');
			if (wikitext !== '') {
				wikitext += '\n';
			}
			wikitext += luaGetString(tempText);
			return text;
		});
	} catch {
		return '';
	}
	return wikitext;
};

// 分析CSS中符合条件的wikitext
const luaGetCSSwikitext = (inputStr: string): string => {
	let wikitext = '';
	const cssText = inputStr || $body.find('#wpTextbox1').val() || '';
	if (cssText.toString().trim() === '') {
		return '';
	}
	// 匹配 ＿addText { content："XXX" } 模式
	wikitext = luaAddText(wikitext, luaGetContentText(cssText.toString()), true);
	// 同时亦匹配 /* ＿addText：XXX */ 模式
	wikitext = luaAddText(wikitext, luaGetObjText(cssText.toString()), true);
	return wikitext;
};

// 分析JavaScript中符合条件的wikitext
const luaGetJSwikitext = (inputStr: string): string => {
	let wikitext = '';
	const jsText = inputStr || $body.find('#wpTextbox1').val()?.toString() || '';
	if (jsText.trim() === '') {
		return '';
	}
	wikitext = luaAddText(wikitext, luaGetObjText(jsText), true);
	return wikitext;
};

// 分析JSON中符合条件的wikitext
const luaGetJSONwikitext = (inputStr: string): string => {
	let wikitext = '';
	const JSONText = inputStr || $body.find('#wpTextbox1').val() || '';
	if (JSONText.toString().trim() === '') {
		return '';
	}
	try {
		const jsonData = JSON.parse(JSONText.toString());
		for (const key of Object.keys(jsonData)) {
			const k = key;
			const v = jsonData[key];
			if (new RegExp(wikiTextKey).test(k) && typeof v === typeof '') {
				wikitext = luaAddText(wikitext, v);
			}
			// 若是数组对象会多包一层
			if (typeof v !== typeof '') {
				for (const prop in v) {
					if (Object.hasOwn(v, prop)) {
						const testArrK = prop;
						const testArrV = v[prop];
						if (new RegExp(wikiTextKey).test(testArrK) && typeof testArrV === typeof '') {
							wikitext = luaAddText(wikitext, testArrV);
						}
					}
				}
			}
		}
	} catch {
		return '';
	}
	return wikitext;
};

// 判断是否为Lua
const luaCheck = (inputStr?: string, contentModel?: string): string => {
	// 使用页面内容模型来判断格式
	const contentModelToLowerCase = (contentModel || mw.config.get('wgPageContentModel')).toString().toLowerCase();
	const inputStr_ = inputStr || '';
	// 根据文档格式选用适当的解析模式
	switch (contentModelToLowerCase) {
		case 'json':
			return luaGetJSONwikitext(inputStr_);
		case 'js':
		case 'javascript':
		case 'text':
			return luaGetJSwikitext(inputStr_);
		case 'css':
		case 'sanitized-css':
			return luaGetCSSwikitext(inputStr_);
		default:
			return '';
		// 若不是json、js、css则返回空字符串
	}
};
// 本行以上的算法请跟[[Module:Special wikitext]]保持一致。

/* 程序主要部分 */
const previewTool = () => {
	// 各类提示文字
	const api = initMwApi(`Qiuwen/1.1 (SpecialWikitext/1.1; ${mw.config.get('wgWikiID')})`);
	const $noticeAddText = '{{Special_wikitext/notice}}';
	// {{Quote box |quote  = -{zh-hans:预览加载中;zh-hant:預覽載入中;}-... |width  = 50% |align  = center}}
	const $noticeLoading = `<div id="mw-_addText-preview-loading"><div class="quotebox" style="margin:auto;padding:6px;width:50%;border:1px solid #aaa;background:#f9f9f9;font-size:88%"><div id="mw-_addText-preview-loading-content" style="background:#f9f9f9;color:#000;text-align:center;font-size:larger"><img src="https://tu.zhongwen.wiki/images/qiuwen/d/de/Ajax-loader.gif" decoding="async" data-file-width="32" data-file-height="32" width="32" height="32"> ${window.wgULS(
		'预览加载中',
		'預覽載入中'
	)}...</div></div></div>`;
	// [[File:Gnome-dialog-warning2.svg|32px]]
	// -{zh-hans:预览加载失败;zh-hant:預覽載入失败;}-
	const $noticeFail = `<img src="https://tu.zhongwen.wiki/images/qiuwen/thumb/8/8f/Alert_Mark_%28Orange%29.svg/48px-Alert_Mark_%28Orange%29.svg.png" decoding="async" data-file-width="48" data-file-height="48" width="32" height="32">${window.wgULS(
		'预览加载失败',
		'預覽載入失败'
	)}`;

	// 检查对应selector的网页对象是否存在
	const $elementExist = (selectors: string | string[]) => {
		const selectorArray = Array.isArray(selectors) ? selectors : selectors ? [selectors] : [];
		let eleCount = 0;
		for (const index in selectorArray) {
			if (Object.hasOwn(selectorArray, index)) {
				eleCount += ($(selectorArray[index] as string) || []).length;
			}
		}
		return eleCount > 0;
	};

	// 检查MediaWiki的设置
	const checkMwConfig = (checkTarget: string, mwConfigs: string | string[]) => {
		let mwConfigData = mw.config.get(checkTarget);
		if (!mwConfigData || mwConfigData.toString().trim() === '') {
			return false;
		}
		mwConfigData = mwConfigData.toString().toLowerCase();
		const mwConfigArray = Array.isArray(mwConfigs) ? mwConfigs : mwConfigs ? [mwConfigs] : [];
		return mwConfigArray.includes(mwConfigData as string);
	};

	const getLanguage = (): string => {
		const lang = mw.config.get('wgUserLanguage');
		if (lang.includes('zh')) {
			return mw.config.get('wgUserVariant') as string;
		}
		return lang;
	};

	// 将解析后的wikitext加入页面中
	const $addParsedWikitext = (parsedWikitext: string) => {
		const $htmlObj = $(parsedWikitext);
		if ($elementExist('#mw-_addText-preview-loading')) {
			$body.find('#mw-_addText-preview-loading').html(parsedWikitext);
		} else if ($elementExist('.diff-currentversion-title')) {
			$htmlObj.insertAfter('.diff-currentversion-title');
		} else if ($elementExist('.previewnote')) {
			$htmlObj.insertAfter('.previewnote');
		} else if ($elementExist('.mw-undelete-revision')) {
			$htmlObj.insertAfter('.mw-undelete-revision');
		} else if ($elementExist('#mw-content-text')) {
			$htmlObj.insertBefore('#mw-content-text');
		}
	};

	// 若网页对象存在，则改动其html内容
	const $setHtml = (selector: string, $htmlContent: string) => {
		if ($elementExist(selector)) {
			$(selector).html($htmlContent);
		}
	};

	// 加入“[载入中]”的提示
	const $addLoadingNotice = () => {
		if ($noticeAddText && $noticeLoading) {
			$addParsedWikitext($noticeLoading);
		}
	};

	// 载入错误的提示
	const $loadingFailNotice = () => {
		$setHtml('#mw-_addText-preview-loading-content', $noticeFail);
	};

	// 移除“[载入中]”的提示
	const $removeLoadingNotice = () => {
		$setHtml('#mw-_addText-preview-loading', '');
	};

	// 检查是否有预览的必要性
	const $needPreview = () => {
		return document.documentElement.innerHTML.search('_addText') > -1;
	};

	// 加入预览内容
	const mwAddWikiText = (wikiText: string, pagename: string, isPreview: boolean) => {
		if (wikiText.toString().trim() === '') {
			$removeLoadingNotice();
		} else {
			const params: ApiParseParams = {
				action: 'parse',
				prop: 'text',
				// 避免内容重复
				title: pagename,
				contentmodel: 'wikitext',
				text: wikiText,
				uselang: getLanguage(),
				useskin: mw.config.get('skin'),
			};
			if (isPreview) {
				params.preview = 1;
				params.disableeditsection = 1;
			}
			api.post(params)
				.then((data) => {
					if (!data || !data['parse'] || !data['parse'].text || !data['parse'].text['*']) {
						return;
					}
					const parsedWiki = (data['parse'].text['*'] || '').toString().trim();
					if (parsedWiki === '') {
						$removeLoadingNotice();
					} else {
						$addParsedWikitext(parsedWiki);
					}
				})
				.catch(() => {
					$loadingFailNotice();
				});
		}
	};

	// 加入预览的Lua内容
	const mwAddLuaText = (
		wikiText: string,
		pagename: string,
		isPreview: boolean,
		callBack?: (arg0: string) => JQuery | HTMLElement | void
	) => {
		const tempModuleName = 'AddText/Temp/Module/Data.lua';
		const moduleCall = {
			wikitext: '#invoke:',
			// 分开来，避免被分到[[:Category:有脚本错误的页面]]
			pagename: 'Module:',
		};
		if (wikiText.toString().trim() === '') {
			$removeLoadingNotice();
		} else {
			const params: ApiParseParams = {
				action: 'parse',
				prop: 'text',
				title: pagename,
				contentmodel: 'wikitext',
				templatesandboxtitle: moduleCall.pagename + tempModuleName,
				// 产生临时Lua Module
				templatesandboxtext: `return{\n\tmain=function()\n\t\txpcall(function()\n\t\t\t${wikiText}\n\t\tend,function()end)\n\t\tlocal moduleWikitext=package.loaded["Module:Module wikitext"]\n\t\tif moduleWikitext then\n\t\t\tlocal wikitext=moduleWikitext.main()\n\t\t\tif mw.text.trim(wikitext)~=''then\n\t\t\t\treturn mw.getCurrentFrame():preprocess(moduleWikitext.main())\n\t\t\tend\n\t\tend\n\t\treturn''\n\tend\n}`,
				templatesandboxcontentmodel: 'Scribunto',
				templatesandboxcontentformat: 'text/plain',
				text: `{{${moduleCall.wikitext}${tempModuleName}|main}}`,
				uselang: getLanguage(),
				useskin: mw.config.get('skin'),
			};
			if (isPreview) {
				params.preview = 1;
				params.disableeditsection = 1;
			}
			api.post(params)
				.then((data) => {
					if (!data || !data['parse'] || !data['parse'].text || !data['parse'].text['*']) {
						return;
					}
					const parsedWiki = (data['parse'].text['*'] || '').toString().trim();
					if (parsedWiki === '') {
						$removeLoadingNotice();
						// 若出错在这个临时模块中则取消
					} else if ($(parsedWiki).find('.scribunto-error').text().search(tempModuleName) < 0) {
						if (callBack && typeof callBack === typeof (() => {})) {
							callBack(parsedWiki);
						} else {
							$addParsedWikitext(parsedWiki);
						}
					} else {
						$removeLoadingNotice();
					}
				})
				.catch(() => {
					$loadingFailNotice();
				});
		}
	};

	// 从页面当前历史版本取出 _addText
	const mwApplyRevision = (_revisionId: number, currentPageName: string) => {
		const params = {
			// 本请求URL不太可能有长度超长的风险
			action: 'parse',
			prop: 'wikitext',
			// get the original wikitext content of a page
			oldid: mw.config.get('wgRevisionId'),
		};
		api.get(params)
			.then((data) => {
				// 若取得 _addText 则显示预览
				if (!data || !data['parse'] || !data['parse'].wikitext || !data['parse'].wikitext['*']) {
					return;
				}
				let pageContent = luaCheck((data['parse'].wikitext['*'] || '').toString().trim()) || '';
				pageContent =
					($elementExist('#mw-clearyourcache')
						? '{{#invoke:Special wikitext/Template|int|clearyourcache}}'
						: '') + pageContent.toString();
				if (pageContent.toString().trim() === '') {
					$removeLoadingNotice();
				} else {
					mwAddWikiText(pageContent, currentPageName, true);
				}
			})
			.catch(() => {
				$removeLoadingNotice();
			});
	};

	// 加入编辑提示（若存在）
	const mwApplyNotice = (currentPageName: string, pageSubName: string) => {
		const params = {
			action: 'parse',
			prop: 'text',
			// get the original wikitext content of a page
			title: currentPageName + pageSubName,
			text: `{{#invoke:Special wikitext/Template|getNotices|${currentPageName}|${pageSubName}}}`,
			uselang: getLanguage(),
			useskin: mw.config.get('skin'),
		};
		api.post(params).then((data) => {
			if (!data || !data['parse'] || !data['parse'].text || !data['parse'].text['*']) {
				return;
			}
			const html = data['parse'].text['*'];
			if ($(html.toString()).text().trim() !== '') {
				$addParsedWikitext(html);
			}
		});
	};

	/* 测试样例 */
	// 本脚本的Testcase模式
	const wikitextPreviewTestcase = (isPreview: boolean) => {
		// 没有可预览元素，退出。
		if (!$needPreview()) {
			return;
		}

		const $testcaseList = $body.find('.special-wikitext-preview-testcase');
		// 若页面中没有Testcase，退出。
		if ($testcaseList.length < 0) {
			return;
		}
		// 收集位于页面中的Testcase预览元素
		const testcaseDataList: {
			element: HTMLElement | undefined;
			lang: string;
			code: string;
		}[] = [];
		let i;
		for (i = 0; i < $testcaseList.length; ++i) {
			const testcaseItem = $testcaseList[i];
			if (testcaseItem) {
				const codeIt = $(testcaseItem).find('.mw-highlight');
				if (codeIt.length > 0) {
					const [codeIt0] = codeIt;
					if (codeIt0) {
						const codeItClass = $(codeIt0).attr('class');
						if (codeItClass) {
							const [, codeId] = /mw-highlight-lang-(\S+)/.exec(codeItClass) || [];
							const loadIndex = testcaseDataList.length;
							$(testcaseItem).attr('preview-id', loadIndex);
							testcaseDataList.push({
								element: testcaseItem,
								lang: codeId || '',
								code: codeIt.text().toString(),
							});
						}
					}
				}
			}
		}

		// 整理页面中的Testcase预览元素，并放置“[载入中]”消息
		let packageWikitext = '';
		for (i in testcaseDataList) {
			if (Object.hasOwn(testcaseDataList, i)) {
				const testcaseItem = testcaseDataList[i];
				if (testcaseItem && testcaseItem.code.trim() !== '') {
					const itemElement: HTMLElement | undefined = testcaseItem.element;
					if (['javascript', 'js', 'css', 'json', 'text'].includes(testcaseItem.lang.toLowerCase())) {
						const addWiki = luaCheck(testcaseItem.code, testcaseItem.lang);
						if (addWiki.toString().trim() !== '' && itemElement) {
							// 若解析结果非空才放置预览
							$(itemElement).prepend($noticeLoading);
							packageWikitext += `<div class="special-wikitext-preview-testcase-${i}">\n${addWiki}\n</div>`;
						}
					} else if (['lua', 'scribunto'].includes(testcaseItem.lang.toLowerCase())) {
						mwAddLuaText(
							testcaseItem.code,
							mw.config.get('wgPageName'),
							isPreview,
							(() => {
								return (wikitext: string) => {
									if (itemElement) {
										$(itemElement).prepend(wikitext);
									}
								};
							})()
						);
					}
				}
			}
		}

		// 将整理完的Testcase预览元素统一发送API请求，并将返回结果分发到各Testcase
		if (packageWikitext.trim() !== '') {
			packageWikitext = `<div class="special-wikitext-preview-testcase-undefined">${packageWikitext}</div>`;

			const params: ApiParseParams = {
				action: 'parse',
				prop: 'text',
				contentmodel: 'wikitext',
				text: packageWikitext,
			};

			if (isPreview) {
				params.preview = 1;
				params.disableeditsection = 1;
			}

			api.post(params).then((data) => {
				if (!data || !data['parse'] || !data['parse'].text || !data['parse'].text['*']) {
					return;
				}

				const parsedWiki = (data['parse'].text['*'] || '').toString().trim();
				if (parsedWiki !== '') {
					const $parsedElement = $(parsedWiki);

					for (const _i in testcaseDataList) {
						if (Object.hasOwn(testcaseDataList, _i)) {
							const _testcaseItem = testcaseDataList[_i];
							if (
								_testcaseItem &&
								['javascript', 'js', 'text', 'css', 'json'].includes(_testcaseItem.lang.toLowerCase())
							) {
								const checkParseElement: JQuery<HTMLElement> = $parsedElement.find(
									`.special-wikitext-preview-testcase-undefined > .special-wikitext-preview-testcase-${_i}`
								);
								if (checkParseElement) {
									$(_testcaseItem.element as HTMLElement)
										.find('#mw-_addText-preview-loading')
										.html(checkParseElement.html());
								}
							}
						}
					}
				}
			});
		}
	};

	/* 程序进入点 */
	// 给页面添加预览
	const mwAddPreview = () => {
		const currentPageName = mw.config.get('wgPageName');

		// 预览模式只适用于以下页面内容模型
		if (checkMwConfig('wgPageContentModel', ['javascript', 'js', 'json', 'text', 'css', 'sanitized-css'])) {
			// 模式1：页面预览
			if ($elementExist('.previewnote')) {
				// 检查是否为预览模式
				// 预览有可能是在预览其他条目
				const $previewSelector = $body.find('.previewnote .warningbox > p > b a');
				if ($previewSelector.length > 0) {
					const pathPath = decodeURI($previewSelector.attr('href') || `/wiki/${currentPageName}`).replace(
						/^\/?wiki\//,
						''
					);

					// 若预览的页面并非本身，则不显示预览
					if (pathPath !== currentPageName) {
						return;
					}
				}

				const addWiki = luaCheck();
				if (addWiki.toString().trim() !== '') {
					// 若解析结果非空才放置预览
					$addLoadingNotice(); // 放置提示，提示使用者等待AJAX
					mwAddWikiText(addWiki, currentPageName, true); // 若取得 _addText 则显示预览
				}
			} else if (!$elementExist('.mw-_addText-content') && checkMwConfig('wgAction', 'view')) {
				// 模式2：不支持显示的特殊页面
				// 经查，不止是模板样式，所有未嵌入'#mw-clearyourcache'的页面皆无法正常显示
				if (!$needPreview()) {
					return; // 没有预览必要时，直接停止程序，不继续判断，以提高效率
				}
				if ($elementExist('#mw-clearyourcache')) {
					// 若已有#mw-clearyourcache则先清掉，否则会出现两个MediaWiki:Clearyourcache
					$body.find('#mw-clearyourcache').html('');
				}
				if (!$elementExist('#wpTextbox1')) {
					// 非编辑模式才执行 (预览使用上方的if区块)
					$addLoadingNotice(); // 放置提示，提示使用者等待AJAX
					mwApplyRevision(mw.config.get('wgRevisionId'), currentPageName); // 为了让历史版本正常显示，使用wgRevisionId取得内容
				}
			} else if ($elementExist('#mw-revision-info') && checkMwConfig('wgAction', 'view')) {
				// 模式3：页面历史版本检视：如需复查的项目为页面历史版本，本工具提供页面历史版本内容显示支持
				// 有嵌入'#mw-clearyourcache'的页面的历史版本会只能显示最新版的 _addText 因此执行修正
				if (!$elementExist('#wpTextbox1')) {
					// 非编辑模式才执行 (预览使用上方的if区块)
					$body.find('#mw-clearyourcache').html($noticeLoading); // 差异模式(含检阅修订版本删除)的插入点不同
					mwApplyRevision(mw.config.get('wgRevisionId'), currentPageName); // 为了让特定版本正常显示，使用wgRevisionId取得内容
				}
			} else {
				$removeLoadingNotice();
			}
		} else if (checkMwConfig('wgPageContentModel', ['scribunto', 'lua'])) {
			// 模块预览功能
			if (!$needPreview()) {
				return; // 没有预览必要时，直接停止程序，不继续判断，以提高效率
			}
			if (
				$elementExist('#wpTextbox1') &&
				$elementExist('table.diff') &&
				!$elementExist('.previewnote') &&
				!checkMwConfig('wgAction', 'view')
			) {
				$($noticeLoading).insertAfter('#wikiDiff');
				mwAddLuaText(($body.find('#wpTextbox1').val() || '').toString(), currentPageName, true);
			}
		} else if ($elementExist('.mw-undelete-revision')) {
			// 模式4：已删页面预览
			// 已删内容页面是特殊页面，无法用常规方式判断页面内容模型
			if (!$needPreview()) {
				return; // 没有预览必要时，直接停止程序，不继续判断，以提高效率
			}
			if ($elementExist(['.mw-highlight', 'pre', '.mw-json'])) {
				// 确认正在预览已删内容
				const $tryGetWiki = ($body.find('textarea').val() || '').toString(); // 尝试取得已删内容源代码
				let tryAddWiki = luaGetJSONwikitext($tryGetWiki);
				if (tryAddWiki.trim() === '') {
					tryAddWiki = luaGetCSSwikitext($tryGetWiki);
				}
				if (tryAddWiki.trim() !== '') {
					// 若取得 _addText 则显示预览
					$addLoadingNotice();
					mwAddWikiText(tryAddWiki, mw.config.get('wgRelevantPageName'), true);
				} else if (/module[ _]wikitext.*_addtext/i.test($body.find('.mw-parser-output').text())) {
					// 尝试Lua解析
					// 本功能目前测试正常运作
					// 若哪天预览又失效，请取消注释下方那行
					// mwAddLuaText($tryGetWiki, mw.config.get("wgRelevantPageName"), true);
				}
			}
		} else if (!$elementExist('.mw-editnotice') && checkMwConfig('wgCanonicalNamespace', 'special')) {
			// 若特殊页面缺乏编辑提示，则补上编辑提示 (若存在)
			const pagename = mw.config.get('wgCanonicalSpecialPageName');
			const pageSubName = mw.config.get('wgPageName').replace(/special:[^/]+/i, '');
			if (pagename !== false && pagename !== null && pagename.toString().trim() !== '') {
				const fullpagename = `${mw.config.get('wgCanonicalNamespace')}:${pagename}`;
				mwApplyNotice(fullpagename, pageSubName);
			}
		} else {
			$removeLoadingNotice(); // 都不是的情况则不显示预览
		}
	};

	if (mw.config.get('wgIsSpecialWikitextPreview') !== true) {
		// 一页只跑一次预览
		// 避免小工具重复安装冒出一大堆预览
		// 标记预览已跑过
		mw.config.set('wgIsSpecialWikitextPreview', true);
		// 执行预览
		mwAddPreview();
		// 检查测试样例
		wikitextPreviewTestcase(true);
	}
};

$(previewTool);
