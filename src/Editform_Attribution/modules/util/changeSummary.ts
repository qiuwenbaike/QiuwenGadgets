const appendTextToSummary = ({customSummary, $wpSummary}: {customSummary: string; $wpSummary: JQuery}): void => {
	const originSummary: string = ($wpSummary.val() as string | undefined) ?? '';

	$wpSummary.val(originSummary.trim() ? `${originSummary} ${customSummary}` : customSummary).trigger('change');
};

export {appendTextToSummary};
