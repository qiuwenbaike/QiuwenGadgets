import {notify} from '../util/notify';
import {publishChanges} from '../../TranslateVariants.module.less';

const addPublishButton = (
	tool: HTMLDivElement,
	label: string,
	save: () => Promise<void>,
	successMessage: string,
	errorMessage: (error: unknown) => string
): void => {
	const button: HTMLButtonElement = document.createElement('button');
	button.classList.add(publishChanges, 'cdx-button');
	button.textContent = label;
	button.addEventListener('click', async (): Promise<void> => {
		button.remove();
		try {
			await save();
			notify(successMessage, 'success');
		} catch (error) {
			notify(errorMessage(error));
		}
	});
	tool.append(button);
};

export {addPublishButton};
