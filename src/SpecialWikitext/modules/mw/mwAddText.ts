import {loadingFailNotice, removeLoadingNotice} from '../notice';
import {addParsedWikitext} from '../util/addParsedWikitext';
import {api} from '../api';
import {getLanguage} from '../util/getLanguage';

const {skin} = mw.config.get();

// 加入预览内容
const mwAddWikiText = async (wikiText: string, pageName: string, isPreview: boolean): Promise<void> => {
	if (wikiText.trim()) {
		const params: ApiParseParams = {
			action: 'parse',
			format: 'json',
			formatversion: '2',
			// 避免内容重复
			title: pageName,
			contentmodel: 'wikitext',
			text: wikiText,
			prop: 'text',
			uselang: getLanguage(),
			useskin: skin,
		};
		if (isPreview) {
			params.disableeditsection = true;
			params.preview = true;
		}

		try {
			const data = await api.post(params);
			if (!data?.['parse']?.text) {
				return;
			}

			const parsedWikitext: string = (data['parse'].text as string).trim();

			if (parsedWikitext) {
				addParsedWikitext(parsedWikitext);
			} else {
				removeLoadingNotice();
			}
		} catch {
			loadingFailNotice();
		}
	} else {
		removeLoadingNotice();
	}
};

// 加入预览的Lua内容
const mwAddLuaText = async (
	wikiText: string,
	pagename: string,
	isPreview: boolean,
	callBack?: (arg: string) => JQuery | HTMLElement | void
) => {
	const tempModuleName: string = 'AddText/Temp/Module/Data.lua';
	const moduleCall: {
		wikitext: string;
		pagename: string;
	} = {
		wikitext: '#invoke:',
		// 分开来，避免被分到[[:Category:有脚本错误的页面]]
		pagename: 'Module:',
	};

	if (wikiText.trim()) {
		try {
			const params: ApiParseParams = {
				action: 'parse',
				format: 'json',
				formatversion: '2',
				title: pagename,
				contentmodel: 'wikitext',
				templatesandboxtitle: moduleCall.pagename + tempModuleName,
				// 产生临时Lua Module
				templatesandboxtext: `return{\n\tmain=function()\n\t\txpcall(function()\n\t\t\t${wikiText}\n\t\tend,function()end)\n\t\tlocal moduleWikitext=package.loaded["Module:Module wikitext"]\n\t\tif moduleWikitext then\n\t\t\tlocal wikitext=moduleWikitext.main()\n\t\t\tif mw.text.trim(wikitext)~=''then\n\t\t\t\treturn mw.getCurrentFrame():preprocess(moduleWikitext.main())\n\t\t\tend\n\t\tend\n\t\treturn''\n\tend\n}`,
				templatesandboxcontentmodel: 'Scribunto',
				templatesandboxcontentformat: 'text/plain',
				text: `{{${moduleCall.wikitext}${tempModuleName}|main}}`,
				prop: 'text',
				uselang: getLanguage(),
				useskin: skin,
			};
			if (isPreview) {
				params.preview = true;
				params.disableeditsection = true;
			}

			const data = await api.post(params);
			if (!data?.['parse']?.text) {
				return;
			}

			const parsedWikitext: string = (data['parse'].text as string).trim();

			if (!parsedWikitext) {
				removeLoadingNotice();
				// 若出错在这个临时模块中则取消
			} else if ($(parsedWikitext).find('.scribunto-error').text().search(tempModuleName)) {
				removeLoadingNotice();
			} else if (typeof callBack === 'function') {
				callBack(parsedWikitext);
			} else {
				addParsedWikitext(parsedWikitext);
			}
		} catch {
			loadingFailNotice();
		}
	} else {
		removeLoadingNotice();
	}
};

export {mwAddLuaText, mwAddWikiText};
