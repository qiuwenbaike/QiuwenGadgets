import {getMessage} from '../i18n';

const generateElements = (
	$body: JQuery<HTMLBodyElement>
): {
	$table: JQuery;
	$opener: JQuery;
} => {
	const $tableItems: JQuery[] = $body
		.find('[accesskey]')
		.map((_index: number, element: HTMLElement): JQuery => {
			return $('<tr>').append(
				$('<th>').text(element.accessKey.toUpperCase()),
				$('<td>').text(
					(
						element.getAttribute('aria-label') ||
						element.title ||
						element.textContent ||
						(element as HTMLInputElement).value ||
						$body.find(`label[for="${element.id}"]`).text()
					)
						.replace(/\s*?\[.+?]$/, '')
						.trim()
				)
			);
		})
		.get();
	const $table: JQuery = $('<table>').addClass('wikitable').css('width', '100%').append($tableItems);

	const $opener: JQuery = $('<a>').attr('accesskey', '?').text(getMessage('Text'));

	return {
		$table,
		$opener,
	};
};

export {generateElements};
