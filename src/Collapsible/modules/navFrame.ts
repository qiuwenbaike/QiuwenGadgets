const navFrame = ($content: JQuery): void => {
	// 删除 NavFrame 元素自带的折叠。
	for (const element of $content.find<HTMLSpanElement>('.NavToggle, .toggleShow, .toggleHide, .NavEnd')) {
		element.remove();
	}

	// 为 NavFrame 元素添加 collapsible。
	for (const element of $content.find<HTMLDivElement>('.NavFrame, .Boxmerge')) {
		if (!element.classList.contains('collapsible')) {
			element.classList.add('collapsible');
		}

		if (!element.classList.contains('Boxmerge')) {
			element.classList.replace('Boxmerge', 'NavFrame');
		}
	}

	// NavFrame 元素的折叠按钮添加至其子元素 NavHead 中，且该 NavHead 会避免被折叠影响到。
	for (const element of $content.find<HTMLDivElement>('.NavHead')) {
		element.classList.add('collapsible');
	}

	// 如果 NavContent 或 NavPic 元素被隐藏，则给父元素 NavFrame 添加 collapsed。
	for (const element of $content.find<HTMLDivElement>('.NavContent, .NavPic')) {
		if (element.style.display !== 'none') {
			continue;
		}

		if (element.parentElement && element.parentElement.classList.contains('NavFrame')) {
			element.parentElement.classList.add('collapsed');
		}
	}
};

export {navFrame};
