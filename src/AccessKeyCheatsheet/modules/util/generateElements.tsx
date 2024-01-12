import React from 'ext.gadget.React';
import {getMessage} from '../i18n';

const generateElements = (
	$body: JQuery<HTMLBodyElement>
): {
	$table: JQuery;
	$opener: JQuery;
} => {
	const $tableItems: JQuery[] = $body
		.find('[accesskey]')
		.map(
			(_index: number, element: HTMLElement): JQuery =>
				$(
					(
						<tr>
							<th>{element.accessKey.toUpperCase()}</th>
							<td>
								{(
									element.getAttribute('aria-label') ||
									element.title ||
									element.textContent ||
									(element as HTMLInputElement).value ||
									$body.find(`label[for="${element.id}"]`).text()
								)
									.replace(/\s*?\[.+?]$/, '')
									.trim()}
							</td>
						</tr>
					) as HTMLElement
				)
		)
		.get();

	const $table: JQuery = $('<table>').addClass('wikitable').css('width', '100%').append($tableItems);

	const $opener = $((<a accessKey="?">{getMessage('Text')}</a>) as HTMLElement);

	return {
		$table,
		$opener,
	};
};

export {generateElements};
