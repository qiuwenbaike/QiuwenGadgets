import {getLicense, updateWpLicense} from './getLicense';
import {getSource, updateWpSource} from './getSource';
import AttributionForm from '../AttributionForm.vue';
import {appendTextToSummary} from './appendTextToSummary';
import {createApp} from 'vue';
import {getMessage} from '../i18n';
import {oouiConfirmWithStyle} from 'ext.gadget.Util';

const mountAttributionForm = ({
	root,
	$body,
	$wpSummary,
}: {
	root: HTMLElement;
	$body: JQuery<HTMLElement>;
	$wpSummary: JQuery;
}): void => {
	const updateHiddenFields = (source: string, license: string): void => {
		updateWpSource({$body, source});
		updateWpLicense({$body, license});
	};

	createApp(AttributionForm, {
		onChange: updateHiddenFields,
		onAdd: (source: string, license: string): boolean => {
			updateHiddenFields(source, license);

			const wpSource = getSource(source);
			const wpLicense = getLicense(license);

			if (wpSource.length && wpLicense.length) {
				const attribution = `${getMessage('Source')}: ${wpSource} (${getMessage('License')}: ${wpLicense}) `;

				if ([getMessage('Replace With License'), getMessage('Other License')].includes(wpLicense)) {
					void oouiConfirmWithStyle(getMessage('Please replace placeholder with actual license'));
				}

				appendTextToSummary({
					customSummary: `[${attribution}]`,
					$wpSummary,
				});
				return true;
			}

			if (!wpSource.length && wpLicense.length) {
				void oouiConfirmWithStyle(getMessage('Source is missing'));
			} else if (wpSource.length && !wpLicense.length) {
				void oouiConfirmWithStyle(getMessage('License is missing'));
			} else {
				void oouiConfirmWithStyle(getMessage('Both source and License are missing'));
			}

			return false;
		},
	}).mount(root);
};

export {mountAttributionForm};
