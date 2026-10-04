import './processWikiEditor.less';
import * as OPTIONS from '../options.json';
import {MwUri} from 'ext.gadget.Util';
import {VARIANTS} from './constant';
import VariantControls from './VariantControls.vue';
import {createApp} from 'vue';
import {getMessage} from './i18n.ts';

interface VariantControlsInstance {
	getSelectedVariant: () => string | undefined;
}

/**
 * @description Add a "Preview with variant" option to the edit form.
 *
 * @param {JQuery} $editForm
 */
const processWikiEditor = ($editForm: JQuery<HTMLElement>): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}

	const {wgPageContentModel, wgUserVariant} = mw.config.get();
	const $templateSandboxPreview: JQuery = $editForm.find('input[name="wpTemplateSandboxPreview"]');

	// It is possible that a user want to preview a page with a non-wikitext module
	// Do not return in this case
	if (wgPageContentModel !== 'wikitext' && !$templateSandboxPreview.length) {
		return;
	}

	const $layout: JQuery = $editForm.find('.editCheckboxes .oo-ui-horizontalLayout');
	if (!$layout.length) {
		return;
	}

	mw.config.set(OPTIONS.configKey, true);

	const uriVariant: string | null = mw.util.getParamValue('variant');
	const initialVariant = (wgUserVariant || uriVariant || mw.user.options.get('variant')) as string;
	const root = document.createElement('div');
	root.id = 'pwv-area';
	$layout.append(root);
	const app = createApp(VariantControls, {
		initialEnabled: Boolean(uriVariant),
		initialVariant,
		variants: VARIANTS.map(({data, label}) => ({value: data, label})),
		checkboxLabel: getMessage('Preview Chinese variant conversion'),
		selectLabel: getMessage('Preview using this variant: '),
		onVariantChange: (selectedVariant: string): void => {
			mw.config.set('wgUserVariant', selectedVariant);
			// if (mw.user.options.get('uselivepreview')) {
			// 	manipulateVariantConfig();
			// } else {
			// 	manipulateActionUrl();
			// }
		},
	});
	const controls = app.mount(root) as unknown as VariantControlsInstance;

	const manipulateActionUrl = (): void => {
		const selectedVariant: string | undefined = controls.getSelectedVariant();
		const originalAction: string | undefined = $editForm.attr('action');
		if (selectedVariant && originalAction) {
			$editForm.attr(
				'action',
				new MwUri(originalAction)
					.extend({
						variant: selectedVariant,
					})
					.getRelativePath()
			);
		}
	};

	const manipulateVariantConfig = (): void => {
		mw.config.set('wgUserVariant', controls.getSelectedVariant() || (mw.user.options.get('variant') as string));
	};

	$editForm
		.find('input[name=wpPreview]')
		.on('click', mw.user.options.get('uselivepreview') ? manipulateVariantConfig : manipulateActionUrl);

	$templateSandboxPreview.on('click', manipulateActionUrl);
};

export {processWikiEditor};
