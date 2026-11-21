import type {UserRights} from '../types';
import {getMessage} from '../i18n';
import {uniqueArray} from 'ext.gadget.Util';

type UserLinks = Record<string, JQuery<HTMLAnchorElement>[]>;

/**
 * Cache of the `<span class="gadgets-markrights">` container, keyed by its `li`.
 *
 * Without it every user link of every batch re-runs `parents('li').find('.gadgets-markrights')`,
 * which is what made this gadget O(batches × links) on list pages.
 */
const supContainerCache = new WeakMap<Element, JQuery>();

const getSupContainer = ($element: JQuery<HTMLAnchorElement>): JQuery | null => {
	const element = $element[0];
	if (!element) {
		return null;
	}

	const listItem = element.closest('li');
	if (listItem) {
		const cached = supContainerCache.get(listItem);
		if (cached?.[0]?.isConnected) {
			return cached;
		}
	}

	let $sups = $element.siblings('.gadgets-markrights').first();
	if (!$sups.length) {
		const $scope = listItem ? $(listItem) : $element.parent();
		$sups = $scope.find('.gadgets-markrights').first();
	}

	return $sups.length ? $sups : null;
};

const appendUserRightsMark = (userLinks: UserLinks, userGroups: Record<string, string[]>): void => {
	// Only walk the users of this batch: `userGroups` also contains the cached entries.
	for (const [user, groups] of Object.entries(userGroups)) {
		const groupsToMark = uniqueArray(groups);
		const $elements = userLinks[user];

		// No group (or no link on this content) means nothing to add — do not create an empty container.
		if (!groupsToMark.length || !$elements?.length) {
			continue;
		}

		for (const $element of $elements) {
			let $sups = getSupContainer($element);

			const groupsToAdd = groupsToMark.filter((group) => {
				const className = `gadgets-markrights__${group}`;
				const deprecatedClassName = `gadgets-markrights-${group}`;
				const $supsOfGroup = $sups?.children('sup');
				if (!$supsOfGroup) {
					return true;
				}
				return !$supsOfGroup.hasClass(className) && !$supsOfGroup.hasClass(deprecatedClassName);
			});

			if (!groupsToAdd.length) {
				continue;
			}

			if (!$sups) {
				$sups = $('<span>').addClass('gadgets-markrights');
				$element.after($sups);

				const listItem = $element[0]?.closest('li');
				if (listItem) {
					supContainerCache.set(listItem, $sups);
				}
			}

			for (const group of groupsToAdd) {
				$sups.append(
					// The following classes are used here:
					// * see ../types.d.ts
					// * for more information
					$('<sup>')
						.addClass(`gadgets-markrights__${group}`)
						.addClass(`gadgets-markrights-${group}`)
						.attr({
							alt: getMessage(group as UserRights),
							title: getMessage(group as UserRights),
						})
				);
			}
		}
	}
};

export {appendUserRightsMark};
