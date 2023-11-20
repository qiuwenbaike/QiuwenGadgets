import {getMessage} from '../i18n';

const generateAccessKeysTableWithOpener = (
	$body: JQuery
): {
	$accessKeysTable: JQuery;
	$accessKeyCheatsheetOpener: JQuery;
} => {
	const $accessKeysTableItems: JQuery[] = $body
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
					).replace(/\s*?\[.+?]$/, '')
				)
			);
		})
		.get();
	const $accessKeysTable: JQuery = $('<table>')
		.addClass('wikitable')
		.css('width', '100%')
		.append($accessKeysTableItems);

	const $accessKeyCheatsheetOpener: JQuery = $('<a>')
		.attr('accesskey', '?')
		.text(getMessage('Text'))
		.hide()
		.appendTo(document.body);

	return {
		$accessKeysTable,
		$accessKeyCheatsheetOpener,
	};
};

export {generateAccessKeysTableWithOpener};
