// 本文件由 Navigation_popups 原版 core.js 的 options.js 段落拆分而来，保留原有实现。
import {
	popupFilterCountCategories,
	popupFilterCountImages,
	popupFilterCountLinks,
	popupFilterDisambigDetect,
	popupFilterLastModified,
	popupFilterPageSize,
	popupFilterStubDetect,
} from './pageinfo';
import {pg} from './pg';
import {popupString} from './strings';

const defaultize = (x: string) => {
	const userValue = (window as unknown as Record<string, unknown>)[x];
	pg.option[x] ??= userValue === undefined ? pg.optionDefault[x] : userValue;
};
const newOption = (x: string, def: unknown) => {
	pg.optionDefault[x] = def;
};
const setDefault = (x: string, def: unknown) => {
	return newOption(x, def);
};
const getValueOf = (varName: string) => {
	defaultize(varName);
	return pg.option[varName];
};
const setOptions = () => {
	// user-settable parameters and defaults
	let userIsSysop = false;
	const userGroups = mw.config.get('wgUserGroups');
	if (userGroups) {
		for (let g = 0; g < userGroups.length; ++g) {
			if (userGroups[g] === 'sysop') {
				userIsSysop = true;
			}
			if (userGroups[g] === 'steward') {
				userIsSysop = true;
			}
		}
	}
	// Basic options
	newOption('popupDelay', 0.5);
	newOption('popupHideDelay', 0.5);
	newOption('simplePopups', false);
	newOption('popupStructure', 'shortmenus'); // see later - default for popupStructure is 'original' if simplePopups is true
	newOption('popupActionsMenu', true);
	newOption('popupSetupMenu', true);
	newOption('popupAdminLinks', userIsSysop);
	newOption('popupShortcutKeys', false);
	newOption('popupHistoricalLinks', true);
	newOption('popupOnlyArticleLinks', true);
	newOption('removeTitles', true);
	newOption('popupMaxWidth', 350);
	newOption('popupSimplifyMainLink', true);
	newOption('popupAppendRedirNavLinks', true);
	newOption('popupTocLinks', false);
	newOption('popupSubpopups', true);
	newOption('popupDragHandle', false /* 'popupTopLinks' */);
	newOption('popupLazyPreviews', true);
	newOption('popupLazyDownloads', true);
	newOption('popupAllDabsStubs', false);
	newOption('popupDebugging', false);
	newOption('popupActiveNavlinks', true);
	newOption('popupModifier', false); // ctrl, shift, alt or meta
	newOption('popupModifierAction', 'enable'); // or 'disable'
	newOption('popupDraggable', true);
	newOption('popupReview', false);
	newOption('popupLocale', false);
	newOption('popupDateTimeFormatterOptions', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour12: false,
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});
	newOption('popupDateFormatterOptions', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	newOption('popupTimeFormatterOptions', {
		hour12: false,
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});
	// images
	newOption('popupImages', true);
	newOption('imagePopupsForImages', true);
	newOption('popupNeverGetThumbs', false);
	// newOption('popupImagesToggleSize',       true);
	newOption('popupThumbAction', 'imagepage'); // 'sizetoggle');
	newOption('popupImageSize', 60);
	newOption('popupImageSizeLarge', 200);
	// redirs, dabs, reversion
	newOption('popupFixRedirs', false);
	newOption('popupRedirAutoClick', 'wpDiff');
	newOption('popupFixDabs', false);
	newOption('popupDabsAutoClick', 'wpDiff');
	newOption('popupRevertSummaryPrompt', false);
	newOption('popupMinorReverts', false);
	newOption('popupRedlinkRemoval', false);
	newOption('popupRedlinkAutoClick', 'wpDiff');
	newOption('popupWatchDisambiggedPages', null);
	newOption('popupWatchRedirredPages', null);
	newOption('popupDabWiktionary', 'last');
	// navlinks
	newOption('popupNavLinks', true);
	newOption('popupNavLinkSeparator', ' &sdot; ');
	newOption('popupLastEditLink', true);
	newOption('popupEditCounterTool', 'supercount');
	newOption('popupEditCounterUrl', '');
	// previews etc
	newOption('popupPreviews', true);
	newOption('popupSummaryData', true);
	newOption('popupMaxPreviewSentences', 5);
	newOption('popupMaxPreviewCharacters', 600);
	newOption('popupLastModified', true);
	newOption('popupPreviewKillTemplates', true);
	newOption('popupPreviewRawTemplates', true);
	newOption('popupPreviewFirstParOnly', true);
	newOption('popupPreviewCutHeadings', true);
	newOption('popupPreviewButton', false);
	newOption('popupPreviewButtonEvent', 'click');
	// diffs
	newOption('popupPreviewDiffs', true);
	newOption('popupDiffMaxLines', 100);
	newOption('popupDiffContextLines', 2);
	newOption('popupDiffContextCharacters', 40);
	newOption('popupDiffDates', true);
	newOption('popupDiffDatePrinter', 'toLocaleString'); // no longer in use

	// edit summaries. God, these are ugly.
	newOption('popupReviewedSummary', popupString('defaultpopupReviewedSummary'));
	newOption('popupFixDabsSummary', popupString('defaultpopupFixDabsSummary'));
	newOption('popupExtendedRevertSummary', popupString('defaultpopupExtendedRevertSummary'));
	newOption('popupRevertSummary', popupString('defaultpopupRevertSummary'));
	newOption('popupRevertToPreviousSummary', popupString('defaultpopupRevertToPreviousSummary'));
	newOption('popupQueriedRevertSummary', popupString('defaultpopupQueriedRevertSummary'));
	newOption('popupQueriedRevertToPreviousSummary', popupString('defaultpopupQueriedRevertToPreviousSummary'));
	newOption('popupFixRedirsSummary', popupString('defaultpopupFixRedirsSummary'));
	newOption('popupRedlinkSummary', popupString('defaultpopupRedlinkSummary'));
	newOption('popupRmDabLinkSummary', popupString('defaultpopupRmDabLinkSummary'));
	// misc
	newOption('popupHistoryLimit', 50);
	newOption('popupFilters', [
		popupFilterStubDetect,
		popupFilterDisambigDetect,
		popupFilterPageSize,
		popupFilterCountLinks,
		popupFilterCountImages,
		popupFilterCountCategories,
		popupFilterLastModified,
	]);
	newOption('extraPopupFilters', []);
	newOption('popupOnEditSelection', 'cursor');
	newOption('popupPreviewHistory', true);
	newOption('popupImageLinks', true);
	newOption('popupCategoryMembers', true);
	newOption('popupUserInfo', true);
	newOption('popupHistoryPreviewLimit', 25);
	newOption('popupContribsPreviewLimit', 25);
	newOption('popupRevDelUrl', '//en.wikipedia.org/wiki/Wikipedia:Revision_deletion');
	newOption('popupShowGender', true);
	// new windows
	newOption('popupNewWindows', false);
	newOption('popupLinksNewWindow', {lastContrib: true, sinceMe: true});
	// regexps
	newOption(
		'popupDabRegexp',
		String.raw`\{\{\s*(d(ab|isamb(ig(uation)?)?)|(((geo|hn|road?|school|number)dis)|[234][lc][acw]|(road|ship)index))\s*(\|[^}]*)?\}\}|is a .*disambiguation.*page`
	);
	newOption('popupAnchorRegexp', 'anchors?'); // how to identify an anchors template
	newOption('popupStubRegexp', '(sect)?stub[}][}]|This .*-related article is a .*stub');
	newOption('popupImageVarsRegexp', 'image|image_(?:file|skyline|name|flag|seal)|cover|badge|logo');
};

export {defaultize, getValueOf, newOption, setDefault, setOptions};
