import * as OPTIONS from '../../options.json';
import React, {ReactElement} from 'ext.gadget.JSX';
import {getMessage} from '../i18n';

interface FooterNoticeProps {
	id?: string;
	children?: ReactElement;
}

const FooterNotice = ({id = OPTIONS.elementId, children = <></>}: FooterNoticeProps) => {
	const {skin} = mw.config.get();

	return (
		<>
			{skin === 'citizen' ? (
				<section id={id} className={[id, 'page-info__item', 'citizen-footer__pageinfo-item', 'noprint']}>
					{children}
				</section>
			) : ['vector', 'vector-2022', 'gongbi'].includes(skin) || document.querySelector('ul#footer-info') ? (
				<li id={id} className={[id, 'noprint']}>
					{children}
				</li>
			) : (
				<div id={id} className={[id, 'noprint']}>
					{children}
				</div>
			)}
		</>
	);
};

const NotPatrolledYet = () => (
	<FooterNotice>
		<span id="page_patroller__not-patrolled" textContent={getMessage('This page has not been patrolled yet')} />
	</FooterNotice>
);

const Loading = () => (
	<FooterNotice>
		<span id="page_patroller__loading" textContent={getMessage('Loading...')} />
	</FooterNotice>
);

interface PatrolledProps {
	timestamp: string;
	user: string;
}

const Patrolled = ({timestamp, user}: PatrolledProps) => {
	if (timestamp && user) {
		return (
			<FooterNotice>
				<span id="page_patroller__patrolled-by">
					{getMessage('This page was patrolled at by').replace('$1', timestamp)}
					<a href={mw.util.getUrl(`User:${user}`)}>{user}</a>
					{getMessage('period')}
				</span>
			</FooterNotice>
		);
	}

	return (
		<FooterNotice>
			<span
				id="page_patroller__patrolled"
				textContent={getMessage('This page has been patrolled, or has been marked as auto-patrolled')}
			/>
		</FooterNotice>
	);
};

const ErrorMessage = () => (
	<FooterNotice>
		<span id="page_patroller__error" textContent={getMessage('Error occurs when finding patroller')} />
	</FooterNotice>
);

export {FooterNotice, NotPatrolledYet, Loading, Patrolled, ErrorMessage};
