/**
 * 为元素添加“隐藏”和“显示”的按钮。
 *
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
import {CLASS_NAME_TOGGLER} from './constant';
import {addToggler} from './addToggler';
import {getMessage} from './i18n';
import {hideElement} from './util/hideElement';
import {toggleElement} from './util/toggleElement';

const collapsible = ($content: JQuery): void => {
	for (const element of $content.find(
		'.parent-collapsible, .parent-collapsible-using-slide, .parent-collapsible-next'
	)) {
		const $element: JQuery = $(element);
		const $parent: JQuery = $element.parent();
		for (const className of element.classList) {
			if (className.slice(0, 18) === 'parent-collapsible') {
				// The following classes are used here:
				// * collapsible
				// * collapsible-using-slide
				// * collapsible-next
				$parent.addClass(className.replace(/^parent-/, ''));
			}
		}
	}

	$content.find('.collapsible-using-slide, .collapsible-next').addClass('collapsible');

	const $collapsibles: JQuery = $content.find('.collapsible');
	if (!$collapsibles.length) {
		return;
	}

	for (const element of $collapsibles) {
		const $collapsible: JQuery = $(element);
		if ($collapsible.data('made-collapsible')) {
			continue;
		}

		const showText: string = $collapsible.data('expandtext') ?? getMessage('Expand');
		const hideText: string = $collapsible.data('collapsetext') ?? getMessage('Collapse');

		const $toggleLink: JQuery = $('<a>').attr('role', 'button').attr('tabindex', '0');
		// Set the text back to hide if it's not collapsed to begin with
		if ($collapsible.hasClass('collapsed')) {
			$toggleLink.text(showText);
		} else {
			$toggleLink.text(hideText);
		}

		// The following classes are used here:
		// * see ./constant.ts
		// * for more information
		const $toggle: JQuery = $('<span>').addClass(`${CLASS_NAME_TOGGLER} noprint`).append('[', $toggleLink, ']');
		addToggler($collapsible, $toggle);

		// 初始化隐藏所有元素，该过程没有动画。
		if ($collapsible.hasClass('collapsed')) {
			hideElement($collapsible, 0);
		}

		const eventListener = (event: JQuery.ClickEvent | JQuery.KeyDownEvent): void => {
			if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') {
				return;
			}
			event.preventDefault();
			toggleElement($collapsible);
			if ($collapsible.hasClass('collapsed')) {
				$toggleLink.text(showText);
			} else {
				$toggleLink.text(hideText);
			}
		};
		$toggle.on('click', eventListener);
		$toggle.on('keydown', eventListener);

		$collapsible.data('made-collapsible', true);
	}
};

export {collapsible};
