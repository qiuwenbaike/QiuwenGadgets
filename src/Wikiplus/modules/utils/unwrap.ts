/**
 * 移除Parsoid赋予的 <section> 包裹
 * Remove <section> wraps added by Parsoid.
 *
 * @param {ParentNode} root
 */
export function unwrapSections(root: ParentNode): void {
	for (const section of root.querySelectorAll('section')) {
		section.replaceWith(...section.childNodes);
	}
}
