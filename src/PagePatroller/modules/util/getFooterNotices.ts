import {getMessage} from '../i18n';

const notPatrolledYet = () => {
	const span = document.createElement('span');
	span.id = 'page_patroller__not-patrolled';
	span.textContent = getMessage('This page has not been patrolled yet');
	return span;
};

interface PatrolledProps {
	timestamp: string;
	user: string;
}

const patrolledBy = (props?: PatrolledProps) => {
	if (props && props.user && props.timestamp) {
		const {timestamp, user} = props;
		const span = document.createElement('span');
		span.id = 'page_patroller__patrolled-by';

		const userLink = document.createElement('a');
		userLink.textContent = user;
		userLink.href = mw.util.getUrl(`User:${user}`);

		span.append(
			getMessage('This page was patrolled at by').replace('$1', timestamp),
			userLink,
			getMessage('period')
		);
		return span;
	}

	const span = document.createElement('span');
	span.id = 'page_patroller__patrolled';
	span.textContent = getMessage('This page has been patrolled, or has been marked as auto-patrolled');
	return span;
};

const errorMessage = () => {
	const span = document.createElement('span');
	span.id = 'page_patroller__error';
	span.textContent = getMessage('Error occurs when finding patroller');
	return span;
};

export {notPatrolledYet, patrolledBy, errorMessage};
