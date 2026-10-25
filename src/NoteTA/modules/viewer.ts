import {type ApiParseResponse, type ApiResponse, parseWikitext} from './parseWikitext';
import {type App as VueApp, createApp, reactive} from 'vue';
import {ApiRetryFailError} from './util/ApiRetryFailError';
import NoteTADialog from './ViewerDialog.vue';
import {assert} from './util/assert';
import {convertCollapsibles} from './util/convertCollapsibles';
import {getMessage} from './i18n';
import {viewerMap} from './initViewMap';

interface ViewerState {
	open: boolean;
	loading: boolean;
	output: string;
	errorMessage: string;
	errors: string[];
	retryable: boolean;
}

const getViewer = ($body: JQuery<HTMLBodyElement>, hash: string): typeof viewer => {
	if (viewerMap.has(hash)) {
		const storedViewer = viewerMap.get(hash);
		assert(storedViewer, 'viewer');

		return storedViewer;
	}

	const $targetElement: JQuery = $body.find(`#noteTA-${hash}`);
	if (!$targetElement.length) {
		throw new Error(`Can't get Element "#noteTA-${hash}".`);
	}

	const {wgPageName, wgUserVariant} = mw.config.get();

	class NoteTAViewer {
		private readonly state: ViewerState;
		private readonly app: VueApp<Element>;
		private readonly root: HTMLElement;
		private dataIsLoaded: boolean;
		private executePromise?: JQuery.Promise<ApiResponse>;
		private static noteTAParseText: string;

		public constructor() {
			this.state = reactive<ViewerState>({
				open: false,
				loading: false,
				output: '',
				errorMessage: '',
				errors: [],
				retryable: false,
			});
			this.dataIsLoaded = false;
			this.root = document.createElement('div');
			$body.append(this.root);
			this.app = createApp(NoteTADialog, {
				state: this.state,
				'onUpdate:open': (open: boolean): void => {
					this.state.open = open;
				},
				onRetry: (): void => {
					this.doExecuteWrap();
				},
			});
			this.app.mount(this.root);
		}

		public open(): void {
			this.state.open = true;
			this.doExecuteWrap();
		}

		public destroy(): void {
			this.app.unmount();
			this.root.remove();
		}

		private static getNoteTAParseText(): JQuery.Deferred<ApiResponse> {
			if (NoteTAViewer.noteTAParseText) {
				return $.Deferred<string>().resolve(NoteTAViewer.noteTAParseText);
			}

			const $noteTAtitle: JQuery = $targetElement.find('.noteTA-title');
			const actualTitle: string = wgPageName.replace(/_/g, ' ');
			let wikitext: string = '';

			const titleDeferred = $.Deferred<ApiResponse>();

			if ($noteTAtitle.length) {
				const titleConv: string | undefined = $noteTAtitle.attr('data-noteta-code');
				assert(titleConv, 'titleConv');

				let titleDesc: string | undefined = $noteTAtitle.attr('data-noteta-desc');
				if (titleDesc) {
					titleDesc = `（${titleDesc}）`;
				} else {
					titleDesc = '';
				}

				wikitext += `<span style="float:right">{{edit|${actualTitle}|section=0}}</span>\n`;
				wikitext += '; 本文使用[[Help:字词转换处理|标题手工转换]]\n';
				wikitext += `* 转换标题为：-{D|${titleConv}}-${titleDesc}\n`;
				wikitext += `* 实际标题为：-{R|${actualTitle}}-；当前显示为：-{|${titleConv}}-\n`;

				void titleDeferred.resolve();
			} else {
				parseWikitext(`{{noteTA/multititle|${actualTitle}}}`, {
					title: actualTitle,
					variant: 'zh',
				})
					.then((resultHtml: ApiResponse): void => {
						const $multiTitle: JQuery = $($.parseHTML(resultHtml as ApiParseResponse)).find(
							'.noteTA-multititle'
						);
						if ($multiTitle.length) {
							wikitext += '; 本文[[Help:字词转换处理|标题可能经过转换]]\n* 转换标题为：';

							const textVariant: Record<string, string[]> = {};
							const variantText: Record<string, string | null> = {};

							for (const element of $multiTitle.children()) {
								const $element = $(element);

								const variant: string | undefined = $element.attr('data-noteta-multititle-variant');
								assert(variant, 'variant');

								const text: string = $element.text().trim();
								variantText[variant] = text;

								const textVariantArray: string[] | undefined = textVariant[text];
								if (textVariantArray) {
									textVariantArray[textVariantArray.length] = variant;
								} else {
									textVariant[text] = [variant];
								}
							}

							const titleConverted: string | null | undefined = variantText[wgUserVariant as string];

							const multiTitle: string[] = [];
							for (const text of Object.values(variantText)) {
								if (text === null || text === undefined) {
									continue;
								}

								const variants: string[] | undefined = textVariant[text];
								if (!variants) {
									continue;
								}

								for (const variant of variants) {
									variantText[variant] = null;
								}

								const variantsName: string = variants
									.map((variant: string): string => `-{R|{{MediaWiki:Variantname-${variant}}}}-`)
									.join('、');
								const variantTitleDesc: string = `${variantsName}：-{R|${text}}-`;
								if (!multiTitle.includes(variantTitleDesc)) {
									multiTitle[multiTitle.length] = variantTitleDesc;
								}
							}

							const subItemSeparator: string = '\n** ';
							wikitext += `${subItemSeparator}${multiTitle.join(subItemSeparator)}`;
							wikitext += `\n* 实际标题为：-{R|${actualTitle}}-；当前显示为：-{R|${titleConverted}}-\n`;
						}

						void titleDeferred.resolve();
					})
					.catch((error: ApiRetryFailError): void => {
						void titleDeferred.reject(error);
					});
			}

			const deferred = $.Deferred<ApiResponse>();

			titleDeferred
				.then((): void => {
					const $noteTAgroups: JQuery = $targetElement.find('.noteTA-group > *[data-noteta-group]');
					for (const element of $noteTAgroups) {
						const $element: JQuery = $(element);
						switch ($element.attr('data-noteta-group-source')) {
							case 'template':
								wikitext += `{{CGroup/${$element.attr('data-noteta-group')}}}\n`;
								break;
							case 'module':
								wikitext += `{{#invoke:CGroupViewer|dialog|${$element.attr('data-noteta-group')}}}\n`;
								break;
							case 'none':
								wikitext += `; 本文使用的公共转换组“${$element.attr('data-noteta-group')}”尚未创建\n`;
								wikitext += `* {{edit|Module:CGroup/${$element.attr('data-noteta-group')}|创建公共转换组“${$element.attr('data-noteta-group')}”}}\n`;
								break;
							default:
								wikitext += `; 未知公共转换组“${$element.attr('data-noteta-group')}”来源“${$element.attr('data-noteta-group-source')}”\n`;
						}
					}

					const $noteTAlocal: JQuery = $targetElement.find('.noteTA-local');
					if ($noteTAlocal.length) {
						wikitext += `<span style="float:right">{{edit|${actualTitle}|section=0}}</span>\n`;
						wikitext += '; 本文使用[[Help:字词转换处理|全文手工转换]]\n';

						const $noteTAlocals = $noteTAlocal.children('*[data-noteta-code]');
						for (const element of $noteTAlocals) {
							const $element: JQuery = $(element);

							let localDesc: string | undefined = $element.attr('data-noteta-desc');
							if (localDesc) {
								localDesc = `（${localDesc}）`;
							} else {
								localDesc = '';
							}

							const localConv: string | undefined = $element.attr('data-noteta-code');
							wikitext += `* -{D|${localConv}}-${localDesc}当前显示为：-{${localConv}}-\n`;
						}
					}

					wikitext += '{{noteTA/footer}}\n';

					NoteTAViewer.noteTAParseText = wikitext;

					void deferred.resolve(wikitext);
				})
				.catch((error: ApiRetryFailError): void => {
					void deferred.reject(error);
				});

			return deferred;
		}

		private doExecute(): JQuery.Promise<ApiResponse> {
			if (this.dataIsLoaded) {
				return $.Deferred<ApiResponse>().resolve();
			}

			const deferred = $.Deferred<ApiResponse>();
			this.state.loading = true;
			this.state.errorMessage = '';
			this.state.errors = [];
			this.state.retryable = false;

			NoteTAViewer.getNoteTAParseText()
				.then((wikitext: ApiResponse) =>
					parseWikitext(wikitext as ApiParseResponse, {
						title: 'Template:CGroup/-',
						variant: wgUserVariant as string,
					})
				)
				.then((parsedHtml: ApiResponse): void => {
					this.state.output = convertCollapsibles(parsedHtml as ApiParseResponse);
					this.dataIsLoaded = true;
					void deferred.resolve(parsedHtml);
				})
				.catch((error: ApiRetryFailError | Error | string): void => {
					if (error instanceof ApiRetryFailError) {
						this.state.errorMessage = getMessage('ApiRetryFailError').replace(
							/\$1/g,
							error.errors.length.toString()
						);
						this.state.errors = error.errors;
						this.state.retryable = true;
					} else {
						this.state.errorMessage = String(error);
					}
					void deferred.reject(error);
				})
				.always((): void => {
					this.state.loading = false;
				});

			return deferred;
		}

		private doExecuteWrap(): void {
			if (this.dataIsLoaded || this.executePromise) {
				return;
			}

			this.executePromise = this.doExecute();
			this.executePromise.always((): void => {
				delete this.executePromise;
			});
		}
	}

	const viewer: NoteTAViewer = new NoteTAViewer();
	viewerMap.set(hash, viewer);

	return viewer;
};

const resetAllViewer = (): void => {
	for (const viewer of viewerMap.values()) {
		viewer.destroy();
	}
	viewerMap.clear();
};

export {getViewer, resetAllViewer};
