import {delay} from 'ext.gadget.Util';
import {getMessage} from './i18n';

const onClick = async (patrolButtons: HTMLAnchorElement[]) => {
	if (!confirm(getMessage('Patrol all pages?'))) {
		return;
	}
	for (const button of patrolButtons) {
		if (button.style.pointerEvents === 'none') {
			continue;
		}
		button.click();
		await delay(1 * 1000); // Delay 1 second to avoid requesting too fast
	}
};

const element = (patrolButtons: HTMLAnchorElement[]) => {
	const button = document.createElement('a');
	button.id = 'gadget-quick_patrol__all';
	button.textContent = `[${getMessage('Patrol all pages')}]`;
	button.addEventListener('click', async () => {
		await onClick(patrolButtons);
	});

	const root = document.createElement('div');
	root.append(button);
	return root;
};

export {element as patrolAllPages};
