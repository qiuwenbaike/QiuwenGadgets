import {initMwApi} from '../../util';

const api: mw.Api = initMwApi(`Qiuwen/1.1 (NoteTA/1.1; ${mw.config.get('wgWikiID')})`);

let messageDialog: OO.ui.MessageDialog;
let windowManager: OO.ui.WindowManager;

const openDialog = ($message: JQuery): void => {
	if (!windowManager) {
		messageDialog = new OO.ui.MessageDialog();
		messageDialog.getActionProcess = (): OO.ui.Process => {
			return new OO.ui.Process((): void => {
				windowManager.closeWindow(messageDialog);
			});
		};
		windowManager = new OO.ui.WindowManager();
		windowManager.$element.appendTo($('body'));
		windowManager.addWindows([messageDialog]);
	}
	windowManager.openWindow(messageDialog, {
		title: window.wgULS('字词转换', '字詞轉換'),
		message: $('<div>').addClass('noteTA-dialog-message').append($message),
		actions: [
			{
				action: 'accept',
				label: window.wgULS('关闭', '關閉'),
				flags: ['safe', 'close'],
			},
		],
		size: 'larger',
	});
};

const run = ($dialogMessage: JQuery, hash: string): void => {
	let wikitext = '';
	const $dom: JQuery = $(`#noteTA-${hash}`);
	const actualTitle: string = mw.config.get('wgPageName').replace(/_/g, ' ');
	const parse = (): void => {
		const params: ApiParseParams = {
			action: 'parse',
			prop: 'text',
			title: 'Template:CGroup/-',
			text: wikitext,
		};
		const wgUserVariant: string | null = mw.config.get('wgUserVariant');
		if (wgUserVariant) {
			params.variant = wgUserVariant;
		}
		api.post(params)
			.then((results): void => {
				$dialogMessage.html(results['parse'].text['*']);
			})
			.catch(parse);
	};
	let maybeTitle = parse;
	const $noteTAtitle: JQuery = $dom.find('.noteTA-title');
	if ($noteTAtitle.length) {
		const titleConv: string | undefined = $noteTAtitle.attr('data-noteta-code');
		let titleDesc: string | undefined = $noteTAtitle.attr('data-noteta-desc');
		titleDesc = titleDesc ? `（${titleDesc}）` : '';
		wikitext += `<span class="noteTA-dialog-actualTitle">{{edit|${actualTitle}|section=0}}</span>\n`;
		wikitext += '; 本文使用[[Help:字词转换处理|标题手工转换]]\n';
		if (titleConv) {
			wikitext += `* 转换标题为：-{D|${titleConv}}-${titleDesc}\n`;
		}
		wikitext += `* 实际标题为：-{R|${actualTitle}}-；当前显示为：-{|${titleConv}}-\n`;
	} else {
		maybeTitle = (): void => {
			const params: ApiParseParams = {
				action: 'parse',
				prop: 'text',
				title: actualTitle,
				text: `{{noteTA/multititle|${actualTitle}}}`,
				variant: 'zh',
			};
			api.post(params)
				.then((results): void => {
					const $multititle: JQuery = $(results['parse'].text['*']).find('.noteTA-multititle');
					if ($multititle.length) {
						const textVariant: Record<string, string> = {};
						const variantText: Record<string, string> = {};
						let multititleText = '';
						$multititle.children().each((_index: number, element: HTMLElement): void => {
							const $li: JQuery = $(element);
							const variant: string | undefined = $li.attr('data-noteta-multititle-variant');
							const text: string = $li.text();
							if (variant !== undefined) {
								Object.defineProperty(variantText, variant, {
									value: text,
									writable: true,
								});
								if (Object.getOwnPropertyDescriptor(textVariant, text)) {
									const textVariantText = Object.getOwnPropertyDescriptor(textVariant, text)?.value;
									textVariantText.push(variant);
									Object.defineProperty(textVariant, text, {
										value: textVariantText,
									});
								} else {
									Object.defineProperty(textVariant, text, {
										value: [variant],
										writable: true,
									});
								}
							}
						});
						multititleText += '; 本文[[Help:字词转换处理|标题可能经过转换]]\n';
						const multititle: string[] = [];
						const titleConverted: string | undefined = variantText[mw.config.get('wgUserVariant') ?? ''];
						for (const variant in variantText) {
							if (Object.hasOwn(variantText, variant)) {
								const text: string | null = Object.getOwnPropertyDescriptor(variantText, variant)
									?.value;
								if (text === null) {
									continue;
								}
								const variants: string[] = Object.getOwnPropertyDescriptor(textVariant, text)?.value;
								for (const variant_ of variants) {
									Object.defineProperty(variantText, variant_, {
										value: null,
									});
								}
								const variantsName: string = variants
									.map((variantName) => {
										return `-{R|{{MediaWiki:Variantname-${variantName}}}}-`;
									})
									.join('、');
								multititle.push(`${variantsName}：-{R|${text}}-`);
							}
						}
						if (multititle && multititle.length) {
							multititleText += '* 转换标题为：';
							multititleText += multititle.join('；');
						}
						multititleText += `\n* 实际标题为：-{R|${actualTitle}}-；当前显示为：-{R|${titleConverted}}-\n`;
						wikitext = multititleText + wikitext;
					}
					parse();
				})
				.catch(maybeTitle);
		};
	}
	const $noteTAgroups: JQuery = $dom.find('.noteTA-group > *[data-noteta-group]');
	$noteTAgroups.each((_index: number, element: HTMLElement): void => {
		const $this: JQuery = $(element);
		switch ($this.attr('data-noteta-group-source')) {
			case 'template':
				wikitext += `{{CGroup/${$this.attr('data-noteta-group')}}}\n`;
				break;
			case 'module':
				wikitext += `{{#invoke:CGroupViewer|dialog|${$this.attr('data-noteta-group')}}}\n`;
				break;
			case 'none':
				wikitext += `; 本文使用的公共转换组“${$this.attr('data-noteta-group')}”尚未创建\n`;
				wikitext += `* {{edit|Module:CGroup/${$this.attr('data-noteta-group')}|创建公共转换组“${$this.attr(
					'data-noteta-group'
				)}”}}\n`;
				break;
			default:
				wikitext += `; 未知公共转换组“${$this.attr('data-noteta-group')}”来源“${$this.attr(
					'data-noteta-group-source'
				)}”\n`;
		}
	});
	const $noteTAlocal: JQuery = $dom.find('.noteTA-local');
	if ($noteTAlocal.length) {
		wikitext += `<span class="noteTA-dialog-actualTitle">{{edit|${actualTitle}|section=0}}</span>\n`;
		wikitext += '; 本文使用[[Help:字词转换处理|全文手工转换]]\n';
		const $noteTAlocals: JQuery = $noteTAlocal.children('*[data-noteta-code]');
		$noteTAlocals.each((_index: number, element: HTMLElement): void => {
			const $this: JQuery = $(element);
			const localConv: string | undefined = $this.attr('data-noteta-code');
			let localDesc: string | undefined = $this.attr('data-noteta-desc');
			localDesc = localDesc ? `（${localDesc}）` : '';
			wikitext += `* -{D|${localConv}}-${localDesc}当前显示为：-{${localConv}}-\n`;
		});
	}
	wikitext += '{{noteTA/footer}}\n';
	maybeTitle();
};

const init = (hash: string): JQuery => {
	const $dialogMessage: JQuery = $('<div>').addClass('noteTA-dialog');
	$dialogMessage.append($('<div>').addClass('center').text(window.wgULS('加载中……', '加載中……')));
	run($dialogMessage, hash);
	return $dialogMessage;
};

export const noteTALoad = (): void => {
	mw.hook('wikipage.content').add((): void => {
		const $body = $('body');
		$body.find('.mw-indicator[id^=mw-indicator-noteTA-]').each((_index: number, element: HTMLElement): void => {
			const $element: JQuery = $(element);
			const $elementId: string | undefined = $element.attr('id');
			const hash: string = $elementId?.replace(/^mw-indicator-noteTA-/, '') ?? '';
			$element.on('click', (): void => {
				openDialog(init(hash));
			});
		});
	});
};
