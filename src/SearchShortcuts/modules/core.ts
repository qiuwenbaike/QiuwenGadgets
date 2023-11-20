const $body = $('body');

export const $searchInput: JQuery = $body.find('#searchInput'),
	searchShortcutsMain = (): void => {
		const $searchInputVal = String($searchInput.val());
		if (!$searchInputVal) {
			return;
		}
		const $searchInputValPure = $searchInputVal.trim();
		if (!/^\{\{[^{}]+}}$/.test($searchInputValPure)) {
			return;
		}
		if ($searchInputValPure.startsWith('{{#')) {
			if ($searchInputValPure.startsWith('{{#invoke:')) {
				$searchInput.val(
					$searchInputVal
						.replace('{{#invoke:', 'Module:')
						.replace(/\s*\|.*/, '')
						.replace('}}', '')
				);
			} else {
				$searchInput.val(
					$searchInputVal
						.replace('{{#', 'H:MW#')
						.replace(/\s*\|.*/, '')
						.replace('}}', '')
				);
			}
		} else {
			$searchInput.val(
				$searchInputVal
					.replace('{{', 'Template:')
					.replace(/\s*\|.*/, '')
					.replace('}}', '')
			);
		}
	};
