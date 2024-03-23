import React, {ReactElement} from 'ext.gadget.React';

const elementWrap = (id: string, innerElement: ReactElement) => {
	const {skin} = mw.config.get();

	if (skin === 'citizen') {
		return (
			<section className={['page-info__item']} id={id}>
				{innerElement}
			</section>
		);
	} else if (['vector', 'vector-2022', 'gongbi'].includes(skin) || document.querySelector('ul#footer-info')) {
		return <li id={id}>{innerElement}</li>;
	}
	return <div id={id}>{innerElement}</div>;
};

const emptyElement = (...innerElement: ReactElement[]) => <>{[...innerElement]}</>;

const linkWrap = (textContent: string, href: string) => <a href={href} textContent={textContent} />;

const onClickWrap = (textContent: string, onClick: () => void, dataActual?: string, dataNominal?: string) => (
	<a
		class={['easy-archive-link', `easy-archive-link-${dataActual}-${dataNominal}`]}
		onClick={onClick}
		textContent={textContent}
		data-actual={dataActual}
		data-nominal={dataNominal}
	/>
);

const pipeElement = () => <span class="mw-editsection-divider" textContent={'|'} />;

const sectionIdSpanElement = (id: string) => (
	<span
		class={['easy-archive-section-id-span', `easy-archive-section-id-span-order-${id}`]}
		style={{display: 'none'}}
	/>
);

const span = (innerHTML: string) => <span innerHTML={innerHTML} />;

export {elementWrap, emptyElement, linkWrap, onClickWrap, pipeElement, sectionIdSpanElement, span};
