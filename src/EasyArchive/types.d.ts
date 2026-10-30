interface SectionLink {
	target: HTMLElement;
	indexNo: string;
	anchor: string;
	archiveTo: string;
	canArchive: boolean;
	canDelete: boolean;
}

type FooterNoticeType = 'blacklist' | 'notAllowed' | 'noArcLoc' | 'arcLocNotAllowed' | 'enabled';

type SectionAction = 'archive' | 'delete';
