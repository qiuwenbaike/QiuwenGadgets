import './convertCollapsible.less';
import {getMessage} from '../i18n';

const convertCollapsibles = (html: string): string => {
	const template = document.createElement('template');
	template.innerHTML = html;

	for (const collapsible of template.content.querySelectorAll<HTMLElement>('.mw-collapsible')) {
		const details = document.createElement('details');
		details.open = !collapsible.classList.contains('mw-collapsed');

		for (const className of collapsible.classList) {
			if (!['mw-collapsible', 'mw-collapsed'].includes(className)) {
				details.classList.add(className);
			}
		}
		for (const attribute of collapsible.attributes) {
			if (attribute.name !== 'class') {
				details.setAttribute(attribute.name, attribute.value);
			}
		}

		const summary = document.createElement('summary');
		const heading = collapsible.querySelector(
			':scope > .mw-collapsible-heading, :scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > h5, :scope > h6, :scope > dl, :scope > dt'
		);
		if (heading) {
			while (heading.firstChild) {
				summary.append(heading.firstChild);
			}
			heading.remove();
		} else {
			summary.textContent = getMessage('ExpandCollapse');
		}
		details.append(summary, ...collapsible.childNodes);
		collapsible.replaceWith(details);
	}

	return template.innerHTML;
};

export {convertCollapsibles};
