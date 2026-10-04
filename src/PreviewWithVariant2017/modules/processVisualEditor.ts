import './processVisualEditor.less';
import * as OPTIONS from '../options.json';
import {DATA} from './constant';
import {PWV2017messages} from './messages';
import Preview from './Preview.vue';
import {createApp} from 'vue';

interface PreviewInstance {
	invalidate: () => void;
	preview: () => Promise<void>;
}

PWV2017messages();

const processVisualEditor = (): void => {
	const {skin, wgUserLanguage, wgUserVariant} = mw.config.get();
	let variant = wgUserVariant ?? 'zh';
	const visualEditor = window.ve;

	const constructDocument = (title: string, wikitext: string, categories: string): string => {
		const $result = $('<div>').addClass('mw-body mw-body-content');

		if (skin === 'vector') {
			$result.addClass('vector-body');
		}

		$result.append(
			$('<h1>').addClass('firstHeading').html(title),
			$('<div>')
				.addClass(
					`mw-content-${(mw.config.get('wgVisualEditor') as {pageLanguageDir: string}).pageLanguageDir}`
				)
				.attr('lang', DATA.find((item) => item.var === variant)?.htmlLang ?? variant)
				.html(wikitext),
			$.parseHTML(categories)
		);

		const $preview = $result;
		mw.hook('wikipage.content').fire($preview);
		const previewElement = $preview[0];
		if (previewElement) {
			visualEditor.targetLinksToNewWindow(previewElement);
		}
		return $preview.prop('outerHTML') ?? '';
	};

	const process = (): void => {
		const {target} = visualEditor.init;
		const {saveDialog} = target;
		const root = document.createElement('div');
		root.className = 'pwv-2017-variant';
		saveDialog.previewPanel.$element.append(root);

		const fetchPreview = async (requestedVariant: string): Promise<string> => {
			variant = requestedVariant;
			const response = await target.getContentApi().post({
				action: 'parse',
				disableeditsection: true,
				errorformat: 'html',
				errorlang: wgUserLanguage,
				errorsuselocal: true,
				formatversion: '2',
				prop: ['text', 'indicators', 'displaytitle', 'categorieshtml', 'parsewarningshtml'],
				pst: true,
				preview: true,
				title: target.getPageName(),
				text: target.getDocToSave(),
				uselang: wgUserLanguage,
				variant: requestedVariant,
			});

			return constructDocument(response.parse.displaytitle, response.parse.text, response.parse.categorieshtml);
		};

		const app = createApp(Preview, {
			initialVariant: variant,
			caption: mw.msg('pwv-2017-caption'),
			variants: DATA.map((item) => ({value: item.var, label: mw.msg(item.msg)})),
			fetchPreview,
			getErrorMessage: (error: unknown) => target.getContentApi().getErrorMessage(error),
			onPreviewStart: () => {
				target.emit('savePreview');
				saveDialog.pushPending();
			},
			onPreviewEnd: () => saveDialog.popPending(),
			onShowPreview: () => saveDialog.swapPanel('preview'),
		});
		const instance = app.mount(root) as unknown as PreviewInstance;

		target.saveDialog.off('preview', 'onSaveDialogPreview', target);
		target.saveDialog.on('preview', () => {
			target.getSurface().getModel().getDocument().once('transact', instance.invalidate);
			void instance.preview();
		});

		mw.hook('ve.activationComplete').add(() => {
			if (mw.config.get(OPTIONS.configKey)) {
				mw.config.set(OPTIONS.configKey, false);
			}
		});
	};

	if (!mw.config.get(OPTIONS.configKey)) {
		process();
		mw.config.set(OPTIONS.configKey, true);
	}
};

export {processVisualEditor};
