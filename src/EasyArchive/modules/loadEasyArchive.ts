import * as OPTIONS from '../options.json';
import {createApp, reactive} from 'vue';
import {getSettings, ifArcLocNotAllowed, isInBlacklist, isNotAllowed, isNotSupported} from './util/getSettings';
import App from './App.vue';
import {getMessage} from './i18n';
import {getSections} from './util/getSection';
import {toastify} from 'ext.gadget.Toastify';

interface SectionLink {
	target: HTMLElement;
	indexNo: string;
	anchor: string;
	archiveTo: string;
	canArchive: boolean;
	canDelete: boolean;
}

type FooterNoticeType = 'blacklist' | 'notAllowed' | 'noArcLoc' | 'arcLocNotAllowed' | 'enabled';

const createFooterRoot = (mountPoint: HTMLElement): HTMLElement => {
	const {skin} = mw.config.get();
	const isCitizen = skin === 'citizen';
	const isListItem = ['gongbi', 'vector', 'vector-2022'].includes(skin) || document.querySelector('ul#footer-info');
	const root = document.createElement(isCitizen ? 'section' : isListItem ? 'li' : 'div');

	root.id = OPTIONS.elementId;
	root.classList.add('easy-archive-footer-notice', 'noprint');
	if (isCitizen) {
		root.classList.add('page-info__item', 'citizen-footer__pageinfo-item');
	}
	mountPoint.prepend(root);
	return root;
};

const loadEasyArchive = (): void => {
	if (isNotSupported()) {
		return;
	}

	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);
	if (!mountPoint) {
		return;
	}

	let noticeType: FooterNoticeType;
	let arcLoc = '';
	let settings: ReturnType<typeof getSettings> = null;

	if (isInBlacklist()) {
		noticeType = 'blacklist';
	} else if (isNotAllowed()) {
		noticeType = 'notAllowed';
	} else {
		settings = getSettings();
		if (!settings?.arcLoc) {
			noticeType = 'noArcLoc';
		} else if (ifArcLocNotAllowed(settings.arcLoc)) {
			noticeType = 'arcLocNotAllowed';
			arcLoc = settings.arcLoc;
		} else {
			noticeType = 'enabled';
			arcLoc = settings.arcLoc;
		}
	}

	const sectionLinks = reactive<SectionLink[]>([]);
	const app = createApp(App, {
		noticeType,
		arcLoc,
		sectionLinks,
	});
	app.mount(createFooterRoot(mountPoint));

	if (noticeType !== 'enabled' || !settings) {
		return;
	}

	const {wgPageName} = mw.config.get();
	const {arcLevel, secArc, secDel} = settings;
	void getSections(wgPageName)
		.then((sections) => {
			const headings = document.querySelectorAll(`h${arcLevel}`);
			const headlineIds = new Set(
				[...headings]
					.map((heading) => heading.querySelector<HTMLElement>('.mw-headline')?.id)
					.filter((id): id is string => Boolean(id))
			);

			for (const section of sections) {
				if (section.level !== arcLevel || !headlineIds.has(section.anchor)) {
					continue;
				}

				const headline = document.getElementById(section.anchor);
				const editSection = headline?.parentElement?.querySelector<HTMLElement>('.mw-editsection');
				if (!editSection) {
					continue;
				}

				sectionLinks.push({
					target: editSection,
					indexNo: section.index,
					anchor: section.anchor,
					archiveTo: arcLoc,
					canArchive: secArc === '1',
					canDelete: secDel === '1',
				});
			}
		})
		.catch((error: unknown) => {
			console.error('EasyArchive failed to load sections', error);
			toastify({text: getMessage('Easy Archive operation failed'), close: true}, 'error');
		});
};

export {loadEasyArchive};
