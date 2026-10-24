import ExpandButton from '../ExpandButton.vue';
import {createApp} from 'vue';
import {refarea} from '../FoldRef.module.less';

// create a div, place {{Reflist}}s inside
const processElement = (element: Element): void => {
	const refFolder = document.createElement('div');
	refFolder.className = refarea as string;
	element.before(refFolder);
	refFolder.append(element);

	const expandRoot = document.createElement('div');
	refFolder.after(expandRoot);

	const app = createApp(ExpandButton, {
		onExpand: (): void => {
			refFolder.classList.remove(refarea as string);
			app.unmount();
			expandRoot.remove();
		},
	});
	app.mount(expandRoot);
};

export {processElement};
