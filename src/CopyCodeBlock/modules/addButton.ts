import {button, codeBlock} from './CopyCodeBlock.module.less';
import App from '../App.vue';
import {addCopyListener} from './addCopyListener';
import {createApp} from 'vue';
import {getMessage} from './i18n';
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

		const app = createApp(App);
		app.mount(wrapper);

		const copyButton: HTMLButtonElement | null = wrapper.querySelector('button');
		if (!copyButton) {
			app.unmount();
			wrapper.remove();
			continue;
		}

		tippy(copyButton, {
			arrow: true,
			content: getMessage('Copy'),
			placement: 'bottom',
		});

		addCopyListener(pre, copyButton);
	}
};

export {addButton};
