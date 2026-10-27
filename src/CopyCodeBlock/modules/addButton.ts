import {button, codeBlock} from './CopyCodeBlock.module.less';
import App from '../App.vue';
import {createApp} from 'vue';
import {getMessage} from './i18n.ts';
import {tippy} from 'ext.gadget.Tippy';

const addButton = ($pres: JQuery<HTMLPreElement>): void => {
	for (const pre of $pres) {
		pre.classList.add(codeBlock as string);

		if (pre.querySelector(`.${button}`)) {
			continue;
		}

		const wrapper: HTMLSpanElement = document.createElement('span');
		wrapper.className = button as string;
		pre.append(wrapper);

		const app = createApp(App, {
			text: pre.textContent ?? '',
		});
		app.mount(wrapper);

		tippy(wrapper, {
			arrow: true,
			content: getMessage('Copy'),
			placement: 'bottom',
		});
	}
};

export {addButton};
