import {initMwApi} from 'ext.gadget.Util';

const api: mw.Api = initMwApi(`Qiuwen/1.1 (NoteTA/1.1; ${mw.config.get('wgWikiID')})`);

let messageDialog: OO.ui.MessageDialog;
let windowManager: OO.ui.WindowManager;

const openDialog = ($message: JQuery): void => {
	if (!windowManager) {
		messageDialog = new OO.ui.MessageDialog();
		messageDialog.getActionProcess = (): OO.ui.Process => {
			return new OO.ui.Process((): void => {
				void windowManager.closeWindow(messageDialog);
			});
		};
		windowManager = new OO.ui.WindowManager();
		windowManager.$element.appendTo($('body'));
		windowManager.addWindows([messageDialog]);
	}
	void windowManager.openWindow(messageDialog, {
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
	let wikitext: string = '';
	const $dom: JQuery = $(`#noteTA-${hash}`);
	const actualTitle: string = mw.config.get('wgPageName').replace(/_/g, ' ');
	const parse = async (): Promise<void> => {
		try {
			const params: ApiParseParams = {
				action: 'parse',
				format: 'json',
				formatversion: '2',
				prop: 'text',
				title: 'Template:CGroup/-',
				text: wikitext,
			};
			const wgUserVariant: string | null = mw.config.get('wgUserVariant');
			if (wgUserVariant) {
				params.variant = wgUserVariant;
			}
			const results = await api.post(params);
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
			const message = results['parse'].text;
			$dialogMessage.html(message as string);
		} catch {
			void parse();
		}
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
		maybeTitle = async (): Promise<void> => {
			try {
				const params: ApiParseParams = {
					action: 'parse',
					format: 'json',
					formatversion: '2',
					prop: 'text',
					title: actualTitle,
					text: `{{noteTA/multititle|${actualTitle}}}`,
					variant: 'zh',
				};
				const results = await api.post(params);
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
				const message = results['parse'].text;
				const $multititle: JQuery = $(message as string).find('.noteTA-multititle');
				if ($multititle.length) {
					const textVariant: Record<string, string | string[]> = {};
					const variantText: Record<string, string | null | undefined> = {};
					let multititleText: string = '';
					$multititle.children().each((_index: number, element: HTMLElement): void => {
						const $li: JQuery = $(element);
						const variant: string | undefined = $li.attr('data-noteta-multititle-variant');
						const text: string = $li.text();
						if (variant !== undefined) {
							variantText[variant] = text;
							if (Object.hasOwn(textVariant, text)) {
								const textVariantText: string[] = (textVariant[text] as string[] | undefined) ?? [];
								textVariantText.push(variant);
								textVariant[text] = textVariantText;
							} else {
								textVariant[text] = [variant];
							}
						}
					});
					multititleText += '; 本文[[Help:字词转换处理|标题可能经过转换]]\n';
					const multititle: string[] = [];
					const wgUserVariant: string = mw.config.get('wgUserVariant') ?? '';
					const titleConverted: string | null | undefined = variantText[wgUserVariant];
					for (const variant in variantText) {
						if (!Object.hasOwn(variantText, variant)) {
							continue;
						}
						const text: string | null | undefined = variantText[variant];
						if (text === undefined || text === null) {
							continue;
						}
						const variants = textVariant[text] as string[] | undefined;
						if (variants === undefined) {
							continue;
						}
						for (const variant_ of variants) {
							variantText[variant_] = null;
						}
						const variantsName: string = variants
							.map((variantName: string): string => {
								return `-{R|{{MediaWiki:Variantname-${variantName}}}}-`;
							})
							.join('、');
						multititle.push(`${variantsName}：-{R|${text}}-`);
					}
					if (multititle && multititle.length) {
						multititleText += '* 转换标题为：';
						multititleText += multititle.join('；');
					}
					multititleText += `\n* 实际标题为：-{R|${actualTitle}}-；当前显示为：-{R|${titleConverted}}-\n`;
					wikitext = multititleText + wikitext;
				}
				void parse();
			} catch {
				void maybeTitle();
			}
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
	void maybeTitle();
};

const init = (hash: string): JQuery => {
	const $dialogMessage: JQuery = $('<div>').addClass('noteTA-dialog');
	$dialogMessage.append($('<div>').addClass('center').text(window.wgULS('加载中……', '加載中……')));
	run($dialogMessage, hash);
	return $dialogMessage;
};

export const noteTALoad = (): void => {
	mw.hook<JQuery[]>('wikipage.content').add(($content): void => {
		const $body: JQuery<HTMLBodyElement> = $content.parents('body');
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
