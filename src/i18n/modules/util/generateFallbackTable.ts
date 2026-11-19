import * as OPTIONS from '../../options.json';

type FallbackTable = Record<string, string[]>;

// 港澳互为邻近变体，在繁体组内优先于台湾变体
const HANT_REGION_PEER: Record<string, string> = {
	'zh-hk': 'zh-mo',
	'zh-mo': 'zh-hk',
};

// zh 行沿用旧表的显式顺序；其交错顺序无法由简/繁两组单独推导
const ZH_ORDER = ['zh-hans', 'zh-hant', 'zh-cn', 'zh-tw', 'zh-hk', 'zh-sg', 'zh-mo', 'zh-my'];

/**
 * 由「简体组 + 繁体组」生成完整的中文回退表。
 *
 * 规则：自身 → 同组其余（港澳互为优先）→ zh → 另一组。
 */
const generateFallbackTable = (): FallbackTable => {
	const {hans, hant} = OPTIONS.fallbackGroups;
	const table: FallbackTable = {
		zh: ['zh', ...ZH_ORDER],
	};

	for (const [group, otherGroup] of [
		[hans, hant],
		[hant, hans],
	] as const) {
		const primary = group[0]!;
		for (const locale of group) {
			const peer = HANT_REGION_PEER[locale];
			const sameScript =
				peer && group.includes(peer)
					? [
							locale,
							primary,
							peer,
							...group.filter((name) => name !== locale && name !== peer && name !== primary),
						]
					: [locale, ...group.filter((name) => name !== locale)];
			table[locale] = [...sameScript, 'zh', ...otherGroup];
		}
	}

	return table;
};

const fallbackTable = generateFallbackTable();

export {fallbackTable, generateFallbackTable};
export type {FallbackTable};
