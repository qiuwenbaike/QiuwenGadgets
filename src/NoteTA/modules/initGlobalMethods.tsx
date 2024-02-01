import {PORTLET_CLASS, WG_SKIN} from './constant';
import React from 'ext.gadget.React';

let portletId: string | undefined;

const initGlobalMethods = ($body: JQuery<HTMLBodyElement>): typeof globalMethods => {
	const globalMethods: {
		init(): void;
		deInit(): void;
	} = {
		init() {
			/* fake */
		},
		deInit() {
			/* fake */
		},
	};

	if (WG_SKIN === 'vector') {
		portletId = 'p-noteTA';

		let $noteTATab: JQuery | undefined;
		globalMethods.init = (): void => {
			if ($noteTATab) {
				return;
			}
			///////////////////
			/**
			 * @todo replace with `mw.util.addPortlet` after upgrade to MediaWiki 1.41+
			 * @example
			 * const noteTATab: HTMLElement | null = mw.util.addPortlet(PORTLET_ID);
			 * if (!noteTATab) {
			 *     return;
			 * }
			 * $noteTATab = $(noteTATab);
			 * $noteTATab.removeClass(`mw-portlet-${PORTLET_ID}`).addClass([`mw-portlet-${PORTLET_ID.replace('p-', '')}`, 'vector-menu-tabs']);
			 */
			const noteTATab = (
				<div className={['vector-menu', 'vector-menu-tabs', 'vector-menu-tabs-legacy']} id={portletId}>
					<div>
						<ul />
					</div>
				</div>
			);
			///////////////////
			$noteTATab = $(noteTATab) as JQuery;
			$body.find('#p-variants').after($noteTATab);
		};
		globalMethods.deInit = (): void => {
			if (!$noteTATab) {
				return;
			}
			$noteTATab.find('ul').empty();
			if (portletId) {
				mw.util.hidePortlet(portletId);
			}
		};
	} else if (WG_SKIN === 'vector-2022') {
		portletId = 'p-associated-pages';

		globalMethods.deInit = (): void => {
			$body.find(PORTLET_CLASS).remove();
		};
	}

	return globalMethods;
};

export {portletId, initGlobalMethods};
