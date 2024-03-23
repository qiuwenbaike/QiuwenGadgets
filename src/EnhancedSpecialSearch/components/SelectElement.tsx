import React from 'ext.gadget.React';
import {getOptionData} from '../modules/getOptionData';

const SelectElement = () => (
	<select
		className="oo-ui-dropdownWidget-handle"
		id="enhancedSpecialSearch"
		style={{
			width: 'auto',
		}}
	>
		{getOptionData().map<HTMLOptionElement>(({site, url, origin}) => {
			const optionElement: HTMLOptionElement = new Option(site, url, origin);

			if (origin) {
				optionElement.dataset['origin'] = '1';
			}

			return optionElement;
		})}
	</select>
);

export {SelectElement};
