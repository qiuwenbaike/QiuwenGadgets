/**
 * 用法说明：
 *
 * 带有 collapsible 类的元素默认可折叠。
 * - 对于 navbox，折叠时会保留标题栏，并将折叠按钮添加在标题栏中。
 * - 对于 table，折叠时会保留 caption 或第一行，并将折叠按钮添加在 caption 末尾
 *   或者第一行最后一格末尾。
 * - 对于其他元素，
 *   - 若其子元素有带有 collapsible-always-show 类，那么除了该子元素之外的各个
 *   子元素都会随折叠隐藏，且折叠按钮添加在该子元素末尾。
 *   - 若没有子元素带有 collapsible-always-show 类，那么所有子元素都会被折叠，
 *   折叠按钮添加在整个 collapsible 元素的开头，且该按钮不会随折叠隐藏。
 *   - 若子元素带有 collapsible-cascade 类，那么当折叠时，该元素自身不是隐藏，
 *   而是隐藏其所有的子元素，这些子元素同样可以受 collapsible-always-show 和
 *   collapsible-cascade 类的影响。
 *   - 注意必须是子元素，直接的文本节点不会随折叠隐藏，例如：
 *     <div class="collapsible">123<span>456</span></div>
 *   折叠时，“456”会随折叠隐藏，但“123”不会。
 * - 若带有 collapsible-using-slide 类，那么折叠时，使用滑动动画而非淡入淡出的
 *   动画。建议当只有一个元素会被隐藏时，才加此类。
 *   - 带有 collapsible-using-slide 类的元素会自动带有 collapsible 类。
 * - 若带有 collapsible-next 类，那么其折叠的不是其自身的子元素，而是折叠紧随
 *   其后的一个元素。
 *   - 这种情况下，折叠按钮默认附在该 collapsible-next 元素的末尾。
 *   - 带有 collapsible-next 类的元素会自动带有 collapsible 类。
 * - data-collapse-duration 属性可以设置折叠动画的时长，默认为 200 毫秒。
 * - 带有 collapsed 类的元素初始就是已折叠的。
 * - data-expandtext 和 data-collapsetext 可用于控制折叠按钮的显示文字。不支持
 *   繁简转换，但是其默认值是可以正常根据界面语言繁简转换的。
 */
/**
 * @description 为元素添加“隐藏”和“显示”的按钮。
 */
import {getMessage} from './i18n';

const appendToggle = ($collapsible: JQuery, $toggle: JQuery): void => {
	const $appendHere: JQuery = $collapsible
		.find('.collapsible-toggle-append-here')
		.not('.collapsible-toggle-appended');
	if ($collapsible.hasClass('collapsible-next')) {
		// 若有 collapsible-next 类，那么被折叠的元素不在该元素内，此时直接将折叠按钮添加在末尾。
		$collapsible.append($toggle);
	} else if ($appendHere.length) {
		// 带有 collapsible-toggle-append-here 类的元素，若存在，则无论可折叠元素是什么，则强制将折叠按钮添加至该元素中。
		$appendHere.append($toggle);
		$appendHere.addClass('collapsible-toggle-appended');
		$appendHere.parentsUntil($collapsible).addClass('collapsible-always-show');
	} else if ($collapsible.hasClass('navbox')) {
		// navbox 元素的折叠按钮添加至 navbox-title 中，且该 navbox-title 会避免被折叠影响到。
		$collapsible.children('.navbox-title').first().addClass('collapsible-always-show').append($toggle);
	} else if ($collapsible.is('table')) {
		// 对于 table 对象，尝试添加到 caption 中，若 caption 不存在，则添加到第一行的最后一列，并将第一行设为始终显示。
		const $caption: JQuery = $collapsible.children('caption');
		if ($caption.length) {
			// 有caption的情况
			$caption.first().append($toggle);
		} else {
			const $trows: JQuery<HTMLTableRowElement> = $collapsible.children().children('tr');
			$trows.first().addClass('collapsible-always-show').children().last().append($toggle);
		}
	} else {
		// 尝试查找带有 collapsible-always-show 类的子元素，若存在则将折叠按钮添加至其中。
		// 否则，添加至整个可折叠元素的最前面。
		const $toToggle: JQuery = $collapsible.children('.collapsible-always-show');
		if ($toToggle.length) {
			$toToggle.first().append($toggle);
		} else {
			$collapsible.prepend($toggle);
			$toggle.addClass('collapsible-always-show');
		}
	}
};

// 隐藏某个可折叠的元素。
const hide = ($collapsible: JQuery, time: number): void => {
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
					hide($element, time);
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

// 显示某个可折叠的元素。
const show = ($collapsible: JQuery, time: number): void => {
	const useSlide: boolean = $collapsible.hasClass('collapsible-using-slide');
	if ($collapsible.hasClass('collapsible-next')) {
		const $element: JQuery = $collapsible.next();
		if (useSlide) {
			$element.slideDown(time);
		} else {
			$element.fadeIn(time);
		}
	} else {
		($collapsible.is('table') ? $collapsible.children().children('tr') : $collapsible.contents()).each(
			(_index, element): void => {
				const $element: JQuery = $(element as HTMLElement);
				if ($element.hasClass('collapsible-cascade')) {
					show($element, time);
				} else if (!$element.hasClass('collapsible-always-show')) {
					if (useSlide) {
						$element.slideDown(time);
					} else {
						$element.fadeIn(time);
					}
				}
			}
		);
	}
};

const toggle = ($collapsible: JQuery): void => {
	const collapsed: boolean = $collapsible.hasClass('collapsed');
	const duration: number = Number.parseInt($collapsible.data('collapse-duration'), 10) ?? 200;
	if (collapsed) {
		show($collapsible, duration);
		$collapsible.removeClass('collapsed');
	} else {
		hide($collapsible, duration);
		$collapsible.addClass('collapsed');
	}
};

const collapsibleMain = ($content: JQuery): void => {
	$content
		.find('.parent-collapsible, .parent-collapsible-using-slide, .parent-collapsible-next')
		.each((_index: number, element: HTMLElement): void => {
			const $element: JQuery = $(element);
			const $parent: JQuery = $element.parent();
			for (const value of element.classList) {
				if (value.slice(0, 18) === 'parent-collapsible') {
					// The following classes are used here:
					// * collapsible
					// * collapsible-using-slide
					// * collapsible-next
					$parent.addClass(value.replace(/^parent-/, ''));
				}
			}
		});
	$content.find('.collapsible-using-slide, .collapsible-next').addClass('collapsible');
	const $collapsibles: JQuery = $content.find('.collapsible');
	if (!$collapsibles.length) {
		return;
	}
	$collapsibles.each((_index: number, element: HTMLElement): void => {
		const $collapsible: JQuery = $(element);
		if ($collapsible.data('made-collapsible')) {
			return;
		}
		const showText: string = $collapsible.data('expandtext') ?? getMessage('Expand');
		const hideText: string = $collapsible.data('collapsetext') ?? getMessage('Collapse');
		const $toggleLink: JQuery = $('<a>').addClass('jsLink').attr('role', 'button').attr('tabindex', '0');
		const $toggle: JQuery = $('<span>').addClass('collapsetoggle').append('[', $toggleLink, ']');
		// Set the text back to hide if it's not collapsed to begin with
		if ($collapsible.hasClass('collapsed')) {
			$toggleLink.text(showText);
		} else {
			$toggleLink.text(hideText);
		}
		appendToggle($collapsible, $toggle);
		// 初始化隐藏所有元素，该过程没有动画。
		if ($collapsible.hasClass('collapsed')) {
			hide($collapsible, 0);
		}
		const eventListener = (event: JQuery.Event): void => {
			if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') {
				return;
			}
			event.preventDefault();
			toggle($collapsible);
			if ($collapsible.hasClass('collapsed')) {
				$toggleLink.text(showText);
			} else {
				$toggleLink.text(hideText);
			}
		};
		$toggle.on('click', eventListener);
		$toggle.on('keydown', eventListener);
		$collapsible.data('made-collapsible', true);
	});
};

export const collapsibleLoad = (): void => {
	mw.hook('wikipage.content').add(collapsibleMain);
};
