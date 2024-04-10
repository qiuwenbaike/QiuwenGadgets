const navFrame = ($content: JQuery): void => {
	for (const element of $content.find<HTMLDivElement>('.NavFrame')) {
		if (!element.classList.contains('collapsible')) {
			element.classList.add('collapsible');
		}
	}

	for (const element of $content.find<HTMLDivElement>('.NavHead')) {
		if (!element.querySelectorAll<HTMLElement>('.collapsible-toggle-append-here')) {
			const toggle = document.createElement('span');
			toggle.classList.add('collapsible-toggle-append-here');
			element.append(toggle);
		}
	}
};

export {navFrame};
