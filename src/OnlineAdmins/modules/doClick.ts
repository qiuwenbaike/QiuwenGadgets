import {groupListElement, listTitle} from './components/groupList';
import {getAdmins} from './util/getAdmins';
import {getMessage} from './i18n';

const doClick = async (event: JQuery.ClickEvent<HTMLAnchorElement>): Promise<void> => {
	event.preventDefault();

	const notify = (element: string | JQuery<HTMLElement>, type: 'error' | 'info' | 'success' | 'warn' = 'info') => {
		return mw.notify(element, {
			tag: 'onlineAdmins',
			type,
		});
	};

	try {
		const {stewards, sysops, patrollers} = await getAdmins();

		if (stewards.length + sysops.length + patrollers.length) {
			const elements: Element[] = [listTitle()];

			if (stewards.length) {
				elements[elements.length] = groupListElement(getMessage('Stewards'), stewards);
			}

			if (sysops.length) {
				elements[elements.length] = groupListElement(getMessage('SysOps'), sysops);
			}

			if (patrollers.length) {
				elements[elements.length] = groupListElement(getMessage('Patrollers'), patrollers);
			}

			void notify($('<div>').append(elements));
		} else {
			void notify(getMessage('NoOnline'), 'warn');
		}
	} catch {
		void notify(getMessage('Network error'), 'error');
	}
};

export {doClick};
