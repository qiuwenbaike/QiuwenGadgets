export const dingCore: typeof DingExposedInterface = (
	message: string,
	type = 'info',
	ttl: number | 'long' = 3600,
	persist = false
): void => {
	if (!document.querySelector('#ding')) {
		const dingDiv: HTMLElement = document.createElement('div');
		dingDiv.id = 'ding';
		dingDiv.className = 'noprint';
		(document.querySelector('body') as HTMLBodyElement).insertAdjacentElement('afterbegin', dingDiv);
	}
	const dingElement: HTMLElement = document.querySelector('#ding') as HTMLElement;
	const previousMessage: ChildNode | null = dingElement.lastChild;
	if (previousMessage) {
		const previousMessageStyle: CSSStyleDeclaration = (previousMessage as HTMLElement).style;
		previousMessageStyle.transform = 'translateY(125%)';
		setTimeout((): void => {
			previousMessage.remove();
		}, 500);
	}
	const dingInnerElement: HTMLElement = document.createElement('div');
	// The following classes are used here:
	// * ding_inner
	// * ding_info
	// * ding_success
	// * ding_warning
	// * ding_error
	dingInnerElement.className = `ding_inner ding_${type}`;
	dingInnerElement.innerHTML = message;
	dingElement.append(dingInnerElement);
	const noticeElement: ChildNode | null = dingElement.lastChild;
	const noticeElementStyle: CSSStyleDeclaration = (noticeElement as HTMLElement).style;
	if (!persist) {
		noticeElement?.addEventListener('click', (): void => {
			noticeElementStyle.transform = 'translateY(125%)';
			setTimeout((): void => {
				noticeElement.remove();
			}, 500);
		});
	}
	setTimeout((): void => {
		noticeElementStyle.transform = 'translateY(-125%)';
	}, 10);
	if (ttl !== 'long') {
		setTimeout((): void => {
			noticeElementStyle.transform = 'translateY(125%)';
		}, ttl + 10);
		setTimeout((): void => {
			noticeElement?.remove();
		}, ttl + 510);
	}
};
