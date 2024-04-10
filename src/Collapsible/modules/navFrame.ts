const navFrame = ($content: JQuery): void => {
	for (const element of $content.find<HTMLSpanElement>('.NavToggle, .toggleShow, .toggleHide, .NavEnd')) {
		element.remove();
	}

	for (const element of $content.find<HTMLDivElement>('.NavFrame')) {
		if (element.classList.contains('collapsible')) {
			continue;
		}

		element.classList.add('collapsible');
	}
};

export {navFrame};
