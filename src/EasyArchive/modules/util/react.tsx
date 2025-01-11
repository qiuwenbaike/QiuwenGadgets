import React, {ReactElement} from 'ext.gadget.React';
import {footerNotice, sectionIdSpan} from './EasyArchive.module.less';
import {getMessage} from '../i18n';

const elementWrap = (id: string, innerElement: ReactElement) => {
	const {skin} = mw.config.get();

	if (skin === 'citizen') {
		return (
			<section id={id} className={[footerNotice, 'page-info__item', 'citizen-footer__pageinfo-item', 'noprint']}>
				{innerElement}
			</section>
		);
	} else if (['vector', 'vector-2022', 'gongbi'].includes(skin) || document.querySelector('ul#footer-info')) {
		return (
			<li id={id} className={[footerNotice, 'noprint']}>
				{innerElement}
			</li>
		);
	}
	return (
		<div id={id} className={[footerNotice, 'noprint']}>
			{innerElement}
		</div>
	);
};

const onClickWrap = (textContent: string, className: string, onClick?: (event: Event) => void) => (
	<a
		className={['gadget-easy_archive__link', `gadget-easy_archive__link-${className}`]}
		onClick={onClick}
		textContent={textContent}
	/>
);

const pipeElement = () => <span className="mw-editsection-divider" textContent={'|'} />;

const sectionIdSpanElement = () => <span className={sectionIdSpan} />;

const spanWrap = (innerHTML: string) => <span innerHTML={innerHTML} />;

interface Props {
	onClick: () => void;
}

const noticeMessage = ({onClick}: Props) => (
	<span>
		{getMessage('Edit Confilict Notice')}
		<a onClick={onClick}>{getMessage('Refresh')}</a>
	</span>
);

export {elementWrap, onClickWrap, pipeElement, sectionIdSpanElement, spanWrap, noticeMessage};
