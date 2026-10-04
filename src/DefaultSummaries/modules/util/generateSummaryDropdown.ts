import * as OPTIONS from '../../options.json';
import {ARTICLE_SUMMARIES, COMMON_SUMMARIES, COMMON_SUMMARIES_LABEL, TALKPAGE_SUMMARIES} from '../messages';
import SummaryDropdown from './SummaryDropdown.vue';
import {createApp} from 'vue';

const generateSummaryDropdown = ($wpSummary: JQuery): JQuery => {
	const {wgNamespaceNumber} = mw.config.get();
	let summaries = COMMON_SUMMARIES;

	if (wgNamespaceNumber === 0 || wgNamespaceNumber === 118) {
		summaries = summaries.concat(ARTICLE_SUMMARIES);
	} else if (wgNamespaceNumber % 2 !== 0 && wgNamespaceNumber !== 3) {
		summaries = summaries.concat(TALKPAGE_SUMMARIES);
	}

	const root = document.createElement('div');
	root.id = OPTIONS.dropdownId;
	createApp(SummaryDropdown, {
		label: COMMON_SUMMARIES_LABEL,
		summaries,
		onSelect: (summary: string): void => {
			const originSummary = ($wpSummary.val() as string | undefined) ?? '';
			$wpSummary.val(originSummary.trim() ? `${originSummary} ${summary}` : summary).trigger('change');
		},
	}).mount(root);

	return $(root);
};

export {generateSummaryDropdown};
