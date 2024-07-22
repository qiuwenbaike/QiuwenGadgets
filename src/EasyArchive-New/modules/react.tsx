import React, {ReactElement} from 'ext.gadget.React';

const elementWrap = (id: string, innerElement: ReactElement) => {
	const {skin} = mw.config.get();

	if (skin === 'citizen') {
		return (
			<section className={['page-info__item', 'gadget-easy_archive__footer_notice']} id={id}>
				{innerElement}
			</section>
		);
	} else if (['vector', 'vector-2022', 'gongbi'].includes(skin) || document.querySelector('ul#footer-info')) {
		return (
			<li id={id} className={'gadget-easy_archive__footer_notice'}>
				{innerElement}
			</li>
		);
	}
	return (
		<div id={id} className={'gadget-easy_archive__footer_notice'}>
			{innerElement}
		</div>
	);
};

const onClickWrap = (textContent: string, className: string, onClick?: (event: Event) => void) => (
	<a
		class={['gadget-easy_archive__link', `easy-archive-link-${className}`]}
		onClick={onClick}
		textContent={textContent}
	/>
);

const pipeElement = () => <span class="mw-editsection-divider" textContent={'|'} />;

const sectionIdSpanElement = () => <span class={['gadget-easy_archive__section-id-span']} />;

const span = (innerHTML: string) => <span innerHTML={innerHTML} />;

export {elementWrap, onClickWrap, pipeElement, sectionIdSpanElement, span};
