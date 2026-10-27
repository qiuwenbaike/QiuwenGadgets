import {publishChanges, submitAll, warning} from '../../TranslateVariants.module.less';
import {notify} from '../util/notify';

const getWrapper = () => {
	const wrapper: HTMLDivElement = document.createElement('div');
	wrapper.id = 'TranslateVariants';
	document.querySelector('#bodyContent')?.prepend(wrapper);

	const submitAllButton: HTMLButtonElement = document.createElement('button');
	submitAllButton.classList.add('cdx-button', 'cdx-button--action-progressive', 'cdx-button--weight-primary');
	submitAllButton.textContent = window.wgULS('发布所有更改', '發佈所有變更');
	submitAllButton.addEventListener('click', (): void => {
		const buttons: NodeListOf<HTMLButtonElement> = wrapper.querySelectorAll(`button.${publishChanges}`);
		if (!buttons.length) {
			notify(window.wgULS('没有任何可以发布的更改', '沒有任何變更可發佈'));
			return;
		}

		if (!confirm(window.wgULS('发布$1个更改？', '發佈$1個變更？').replace('$1', `${buttons.length}`))) {
			notify(window.wgULS('已取消发布', '已取消發佈'), 'warn');
			return;
		}

		for (const button of buttons) {
			button.click();
		}
	});

	const submitAllContainer: HTMLDivElement = document.createElement('div');
	submitAllContainer.classList.add(submitAll);
	submitAllContainer.append(submitAllButton);

	const warningContainer: HTMLDivElement = document.createElement('div');
	warningContainer.classList.add(warning);
	warningContainer.textContent = window.wgULS(
		'提醒：TranslateVariants工具使用IT及MediaWiki转换组进行自动转换，请确认转换结果是否正确！',
		'提醒：TranslateVariants工具使用IT及MediaWiki轉換組進行自動轉換，請確認轉換結果是否正確！'
	);
	wrapper.append(submitAllContainer, warningContainer);

	return wrapper;
};

export {getWrapper};
