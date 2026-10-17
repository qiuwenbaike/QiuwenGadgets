import {api} from './api';
import {getMessage} from './i18n';

const onClick = async (button: HTMLAnchorElement) => {
	const {revid} = button.dataset;
	const params: ApiPatrolParams = {
		action: 'patrol',
		format: 'json',
		revid: Number(revid),
	};
	try {
		await api.postWithToken('patrol', params);
		button.style.pointerEvents = 'none';
		button.style.color = '#888';
		button.textContent = getMessage('Patrolled');
	} catch (error) {
		void mw.notify(getMessage('AJAX'), {
			tag: 'QuickPatrol',
			type: 'error',
		});
		button.style.color = '#f00';
		console.error('[QuickPatrol] Ajax error:', error);
	}
};

const element = (index: string, revId: string) => {
	const button = document.createElement('a');
	button.className = 'gadget-quick_patrol__patrolbtn';
	button.id = `gadget-quick_patrol__${index}`;
	button.dataset['revid'] = revId;
	button.textContent = `[${getMessage('Patrol')}]`;
	button.addEventListener('click', () => {
		onClick(button);
	});

	return button;
};

export {element as patrolSinglePage};
