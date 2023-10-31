import {$searchInput, searchShortcutsMain} from './modules/core';

$(() => {
	$searchInput.on('keydown', searchShortcutsMain);
});
