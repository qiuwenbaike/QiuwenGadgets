import * as OPTIONS from '../../options.json';
import React, {ReactElement} from 'ext.gadget.React';
import {footerNotice, sectionIdSpan} from './EasyArchive.module.less';
import {getMessage} from '../i18n';
import {sanitize} from '../util/sanitize';

interface FooterNoticeProps {
	id?: string;
	children?: ReactElement | ReactElement[];
}

const FooterNotice = ({id, children = <></>}: FooterNoticeProps) => {
	const {skin} = mw.config.get();

	return (
		<>
			{skin === 'citizen' ? (
				<section
					id={id ?? OPTIONS.elementId}
					className={[footerNotice, 'page-info__item', 'citizen-footer__pageinfo-item', 'noprint']}
				>
					{children}
				</section>
			) : ['vector', 'vector-2022', 'gongbi'].includes(skin) || document.querySelector('ul#footer-info') ? (
				<li id={id ?? OPTIONS.elementId} className={[footerNotice, 'noprint']}>
					{children}
				</li>
			) : (
				<div id={id ?? OPTIONS.elementId} className={[footerNotice, 'noprint']}>
					{children}
				</div>
			)}
		</>
	);
};

const InBlackList = () => (
	<FooterNotice id="easy_archive_not_supported_notice">
		<span>
			{getMessage('Easy Archive not supported')}
			<br />
			{getMessage('Easy Archive not supported details')}
		</span>
	</FooterNotice>
);

const NotAllowed = () => (
	<FooterNotice id="easy_archive_not_allowed_notice">
		<span>{getMessage('Easy Archive not allowed')}</span>
	</FooterNotice>
);

interface ArcLocNotAllowedProps {
	arcLoc: string;
}

const ArcLocNotAllowed = ({arcLoc}: ArcLocNotAllowedProps) => (
	<FooterNotice id="easy_archive_arc_loc_not_allowed_notice">
		<span>
			{getMessage('Archive Location not allowed').replace('$1', sanitize(arcLoc))}
			<br />
			{getMessage('Archive Location not allowed details')}
		</span>
	</FooterNotice>
);

const NoArcLoc = () => (
	<FooterNotice id="easy_archive_no_arc_loc_notice">
		<span>{getMessage('No Archive Location')}</span>
	</FooterNotice>
);

interface EnabledProps {
	arcLoc: string;
}

const Enabled = ({arcLoc}: EnabledProps) => (
	<FooterNotice id="easy_archive_arc_loc_not_allowed_notice">
		<span>
			{getMessage('Easy Archive enabled')}
			{getMessage('(')}
			{getMessage('Archive location')}
			<a title={sanitize(arcLoc)} href={`/wiki/${sanitize(arcLoc)}`}>
				{arcLoc}
			</a>
			{getMessage(')')}
			{getMessage('.')}
		</span>
	</FooterNotice>
);

interface OnClickProps {
	textContent: string;
	className: string;
	onClick?: (event: Event) => void;
}

const OnClick = ({textContent, className, onClick}: OnClickProps) => (
	<a
		className={['gadget-easy_archive__link', `gadget-easy_archive__link-${className}`]}
		onClick={onClick || (() => {})}
		textContent={textContent}
	/>
);

interface SectionIDProps {
	children?: ReactElement | ReactElement[];
}

const SectionID = ({children}: SectionIDProps) => <span className={sectionIdSpan}>{children}</span>;

const Pipe = () => <span className="mw-editsection-divider" textContent={'|'} />;

interface EditConflictNoticeProps {
	onClick: () => void;
}

const EditConflictNotice = ({onClick}: EditConflictNoticeProps) => (
	<span>
		{getMessage('Edit Confilict Notice')}
		<a onClick={onClick}>{getMessage('Refresh')}</a>
	</span>
);

export {
	FooterNotice,
	Enabled,
	InBlackList,
	NotAllowed,
	ArcLocNotAllowed,
	NoArcLoc,
	OnClick,
	Pipe,
	SectionID,
	EditConflictNotice,
};
