import {getObject} from '@bhsd/common';

const {wgPageName: page, wgNamespaceNumber: ns, wgPageContentModel: contentmodel} = mw.config.get();

const CONTENTMODELS: Record<string, string> = {
		wikitext: 'mediawiki',
	},
	EXTS: Record<string, string> = {
		css: 'css',
		js: 'javascript',
		json: 'json',
	},
	NAMESPACES: Record<number, string> = {
		828: 'lua',
		274: 'html',
	};

/**
 * 检查页面语言类型
 *
 * @param value 页面内容
 */
const getPageMode = async (value: string): Promise<[string, (number | undefined)?, (string | undefined)?]> => {
	let WikiplusPages;
	if (typeof _WikiplusPages === 'object') {
		WikiplusPages = _WikiplusPages;
	} else if (typeof Pages === 'object') {
		WikiplusPages = Pages;
	}
	if (WikiplusPages) {
		const pages = Object.values(WikiplusPages).filter(({sectionCache}) => {
			return Object.values(sectionCache).includes(value);
		});
		if (
			pages.some(({title}) => {
				return !title.endsWith('/doc');
			})
		) {
			await mw.loader.using('mediawiki.Title');
		}
		const modes = new Set(
			pages.map(({title}) => {
				if (title.endsWith('/doc')) {
					return 'template';
				}
				const t = new mw.Title(title),
					namespace = t.getNamespaceId();
				if (namespace % 2) {
					return 'mediawiki';
				}
				const mode = EXTS[t.getExtension()?.toLowerCase() ?? ''] ?? NAMESPACES[namespace];
				switch (mode) {
					case 'javascript':
						return namespace === 8 || namespace === 2300 ? 'gadget' : mode;
					case 'css':
						return namespace === 2 || namespace === 8 || namespace === 2300 ? mode : 'sanitized-css';
					case undefined:
						return namespace === 10 || namespace === 2 ? 'template' : 'mediawiki';
					default:
						return mode;
				}
			})
		);
		if (modes.size === 1) {
			const [mode] = modes,
				title = pages.length === 1 ? pages[0]!.title : undefined;
			if (mode === 'gadget') {
				return ['javascript', 8];
			}
			return mode === 'template' ? ['mediawiki', 10, title] : [mode!, undefined, title];
		} else if (modes.size === 2) {
			if (modes.has('javascript') && modes.has('gadget')) {
				return ['javascript'];
			} else if (modes.has('mediawiki') && modes.has('template')) {
				return ['mediawiki'];
			}
		}
	}
	if ((ns !== 274 && contentmodel !== 'Scribunto') || page.endsWith('/doc')) {
		return [CONTENTMODELS[contentmodel] ?? contentmodel, contentmodel === 'javascript' ? ns : undefined];
	}
	await mw.loader.using('oojs-ui-windows');
	if (
		await OO.ui.confirm(mw.msg('cm-mw-contentmodel'), {
			actions: [{label: ns === 274 ? 'Widget' : 'Lua'}, {label: 'Wikitext', action: 'accept'}],
		})
	) {
		return ['mediawiki'];
	}
	return [ns === 274 ? 'html' : 'lua'];
};

const submit = /** 提交编辑 */ (): true => {
		document.querySelector('#Wikiplus-Quickedit-Submit')!.dispatchEvent(new MouseEvent('click'));
		return true;
	},
	submitMinor = /** 提交小编辑 */ (): true => {
		document.querySelector<HTMLInputElement>('#Wikiplus-Quickedit-MinorEdit')!.checked = true;
		return submit();
	},
	escapeEdit = /** 按下Esc键退出编辑 */ (): boolean => {
		const settings: Record<string, unknown> | null = getObject('Wikiplus_Settings'),
			escToExitQuickEdit = settings && (settings['esc_to_exit_quickedit'] || settings['escToExitQuickEdit']);
		if (escToExitQuickEdit === true || escToExitQuickEdit === 'true') {
			document.querySelector('#Wikiplus-Quickedit-Back')!.dispatchEvent(new MouseEvent('click'));
			return true;
		}
		return false;
	};

/**
 * 渲染编辑器
 *
 * @param target 目标编辑框
 * @param setting 是否是Wikiplus设置（使用json语法）
 */
export const renderEditor = async (target: HTMLTextAreaElement, setting: boolean): Promise<void> => {
	const cm = await CodeMirror6.fromTextArea(
		target,
		...(setting ? (['json'] satisfies [string]) : await getPageMode(target.value))
	);
	(cm.view?.dom ?? cm.editor!.getDomNode()!).id = 'Wikiplus-CodeMirror';

	if (!setting) {
		// 普通Wikiplus编辑区
		if (cm.editor) {
			/* eslint-disable no-bitwise */
			cm.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, submit);
			cm.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyS, submitMinor);
			/* eslint-enable no-bitwise */
			cm.editor.addCommand(monaco.KeyCode.Escape, escapeEdit);
		} else {
			cm.extraKeys([
				{key: 'Mod-S', run: submit},
				{key: 'Shift-Mod-S', run: submitMinor},
				{key: 'Esc', run: escapeEdit},
			]);
		}
	}

	const jump = document.querySelector<HTMLAnchorElement>('#Wikiplus-Quickedit-Jump > a');
	if (jump) {
		jump.href = '#Wikiplus-CodeMirror';
	}
};
