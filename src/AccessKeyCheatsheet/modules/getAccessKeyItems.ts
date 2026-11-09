interface AccessKeyItem {
	key: string;
	label: string;
}

export const getAccessKeyItems = (): AccessKeyItem[] =>
	[...document.querySelectorAll<HTMLElement>('[accesskey]')].map((element) => ({
		key: element.accessKey.toUpperCase(),
		label: (
			element.getAttribute('aria-label') ||
			element.title ||
			element.textContent ||
			(element as HTMLInputElement).value ||
			(document.querySelector(`label[for="${element.id}"]`)?.textContent ?? '')
		)
			.replace(/\s*?\[.+?]$/, '')
			.trim(),
	}));
