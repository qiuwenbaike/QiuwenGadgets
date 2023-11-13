export const cancelAutoSummary = (): void => {
	// 取消修订编辑摘要修正
	const autoSummary: HTMLInputElement | null = document.querySelector('[name=wpAutoSummary]');
	if (mw.util.getParamValue('undo') && autoSummary) {
		autoSummary.value = '';
	}
};
