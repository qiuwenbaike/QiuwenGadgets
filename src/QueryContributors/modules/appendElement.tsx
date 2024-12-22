import * as OPTIONS from '../options.json';
import React, {ReactElement} from 'ext.gadget.React';
import {getMessage} from './i18n';

const sanitize = (string: string) =>
	string
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/'/g, '&apos;')
		.replace(/"/g, '&quot;');

const elementWrap = (innerElement: ReactElement) => {
	const {skin} = mw.config.get();
	const className = 'gadget-query_contributors';

	if (skin === 'citizen') {
		return (
			<section id={className} className={[className, 'page-info__item', 'citizen-footer__pageinfo-item']}>
				{innerElement}
			</section>
		);
	} else if (['vector', 'vector-2022', 'gongbi'].includes(skin) || document.querySelector('ul#footer-info')) {
		return (
			<li id={className} className={className}>
				{innerElement}
			</li>
		);
	}
	return (
		<div id={className} className={className}>
			{innerElement}
		</div>
	);
};

const UserList = (userNames: string[]) => (
	<>
		<>{getMessage('Based on contributions of')}</>
		{userNames.map((userName, index) => (
			<>
				<a
					href={
						userName.includes('>')
							? mw.util.getUrl(`Special:GoToInterWiki/${sanitize(userName.replace('>', ':User:'))}`)
							: mw.util.getUrl(`User:${sanitize(userName)}`)
					}
					key={userName}
				>
					{userName}
				</a>
				<>{index < userNames.length - 1 ? getMessage('Seperator') : getMessage('Period')}</>
			</>
		))}
	</>
);

const appendElement = (userNames: string[]): void => {
	if (!userNames || !userNames.length) {
		return;
	}

	const tag = elementWrap(UserList(userNames));
	document.querySelectorAll<HTMLElement>(OPTIONS.mountPointSelector)[0]?.prepend(tag);
};

export {appendElement};
