import type {UserRights} from '../types';
import {getMessage} from '../i18n';
import {uniqueArray} from 'ext.gadget.Util';

type UserLinks = Record<string, JQuery<HTMLAnchorElement>[]>;

/**
 * Cache of the `<span class="gadgets-markrights">` containers, keyed by their container element
 * (`li`, or the parent of the link for table rows) and then by the user name.
 *
 * A container can hold several user links (e.g. the `changedby` header of a grouped RecentChanges
 * row), so the marks of different users must never share one container: each user gets an own span.
 */
const supContainerCache = new WeakMap<Element, Map<string, JQuery>>();

const getSupContainer = ($element: JQuery<HTMLAnchorElement>, user: string): JQuery | null => {
	const element = $element[0];
	if (!element) {
		return null;
	}

	const container: Element | null = element.closest('li') ?? element.parentElement;
	if (!container) {
		return null;
	}

	const cached = supContainerCache.get(container)?.get(user);
	return cached?.[0]?.isConnected ? cached : null;
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
			let $sups = getSupContainer($element, user);

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
				const element = $element[0];
				$sups = $('<span>').addClass('gadgets-markrights').attr('data-user', user);
				$element.after($sups);

				const container: Element | null = element ? (element.closest('li') ?? element.parentElement) : null;
				if (container) {
					const containers: Map<string, JQuery> = supContainerCache.get(container) ?? new Map();
					containers.set(user, $sups);
					supContainerCache.set(container, containers);
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
							'aria-label': getMessage(group as UserRights),
							title: getMessage(group as UserRights),
						})
				);
			}
		}
	}
};

export {appendUserRightsMark};
