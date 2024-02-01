import {PORTLET_ID, WG_SKIN} from './constant';
import React from 'ext.gadget.React';

let $noteTATab: JQuery | undefined;
const vectorInit = ($body: JQuery<HTMLBodyElement>): void => {
	if ($noteTATab) {
		return;
	}

	const noteTATab: HTMLElement | null = mw.util.addPortlet(PORTLET_ID);
	if (!noteTATab) {
		return;
	}

	$noteTATab = $(noteTATab);
	$noteTATab.removeClass('mw-portlet-p-noteTA').addClass(['mw-portlet-noteTA', 'vector-menu-tabs']);
	$noteTATab.find('ul').empty();

	if (WG_SKIN === 'vector-2022') {
		$body.find('#p-associated-pages').after($noteTATab);
	} else {
		$noteTATab.addClass('vector-menu-tabs-legacy');
		$body.find('#p-variants').after($noteTATab);
	}
};

const vectorAddItem = ($body: JQuery<HTMLBodyElement>, hash: string): JQuery | undefined => {
	vectorInit($body);

	const portletLink: HTMLLIElement | null = mw.util.addPortletLink(PORTLET_ID, '#', '汉/漢', `ca-noteTA-${hash}`);
	if (!portletLink) {
		return;
	}

	const style: React.CSSProperties = {
		height: '85%',
		padding: '1px 3px',
	};

	const $portletLink = $(portletLink).find('a');
	$portletLink.empty().append(
		<div>
			<span
				style={{
					...style,
					background: '#d3e3f4',
					color: '#000',
				}}
			>
				{'汉'}
			</span>
			<span
				style={{
					...style,
					background: '#e9e9e9',
					color: '#434343',
				}}
			>
				{'漢'}
			</span>
		</div>
	);

	return $portletLink;
};

export {vectorInit, vectorAddItem};
