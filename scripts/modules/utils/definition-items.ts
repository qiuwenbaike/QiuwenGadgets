import {__rootDir, readFileContent} from './general-util';
import path from 'node:path';
import {saveDefinition} from './build-util';

const definitionPath = path.join(__rootDir, 'dist/definition.txt');

/**
 * Read the existing `dist/definition.txt` back into definition items (with their `☀section` suffix).
 *
 * Used by single-gadget builds so that only the built gadget's line is touched, while the other
 * gadgets' lines are kept byte for byte.
 */
const readDefinitionItems = (): string[] => {
	const items: string[] = [];
	let section: string | null = null;

	for (const line of readFileContent(definitionPath).split('\n')) {
		const sectionHeader = line.match(/^==\s*(.+?)\s*==$/);
		if (sectionHeader) {
			section = sectionHeader[1]!;
			continue;
		}

		// Skip the banner (it precedes the first `== section ==` header)
		if (!section) {
			continue;
		}

		const definition = line.trim();
		if (definition.startsWith('* ')) {
			items.push(`${definition}☀${section}`);
		}
	}

	return items;
};

/**
 * Replace (or insert) one gadget's definition item, keeping all other items untouched.
 */
export const updateDefinitionItem = (gadgetName: string, item: string): void => {
	const items = readDefinitionItems();
	const prefix = `* ${gadgetName}[`;
	const index = items.findIndex((definition) => {
		return definition.startsWith(prefix);
	});

	if (index >= 0) {
		items[index] = item;
	} else {
		// New gadget: insert it after the last item of its section
		const section = item.match(/☀(\S+)$/)?.[1];
		let insertAt = items.length;
		if (section) {
			for (let i = items.length - 1; i >= 0; i--) {
				if (items[i]!.endsWith(`☀${section}`)) {
					insertAt = i + 1;
					break;
				}
			}
		}
		items.splice(insertAt, 0, item);
	}

	saveDefinition(items);
};
