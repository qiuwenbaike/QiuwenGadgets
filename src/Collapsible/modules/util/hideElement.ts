// 隐藏某个可折叠的元素。
const hideElement = ($collapsible: JQuery, time: number): void => {
	const useSlide: boolean = $collapsible.hasClass('collapsible-using-slide');
	if ($collapsible.hasClass('collapsible-next')) {
		const $element: JQuery = $collapsible.next();
		if (useSlide) {
			$element.slideUp(time);
		} else {
			$element.fadeOut(time);
		}
	} else {
		($collapsible.is('table') ? $collapsible.children().children('tr') : $collapsible.contents()).each(
			(_index, element): void => {
				const $element: JQuery = $(element as HTMLElement);
				if ($element.hasClass('collapsible-cascade')) {
					hideElement($element, time);
				} else if (!$element.hasClass('collapsible-always-show')) {
					if (useSlide) {
						$element.slideUp(time);
					} else {
						$element.fadeOut(time);
					}
				}
			}
		);
	}
};

export {hideElement};
