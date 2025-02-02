import React, {ReactElement} from 'ext.gadget.React';
import type {UserRights} from '~/MarkRights/modules/types';

interface FooterNoticeProps {
	spanClass: string;
	children?: ReactElement | ReactElement[];
}

const FooterNotice = ({spanClass, children = <></>}: FooterNoticeProps) => {
	const {skin} = mw.config.get();
	const classNames = ['gadget-markrights_userpage', `gadget-markrights_userpage__${spanClass}`];

	return (
		<>
			{skin === 'citizen' ? (
				<section className={[...classNames, 'page-info__item', 'citizen-footer__pageinfo-item', 'noprint']}>
					{children ?? <></>}
				</section>
			) : ['vector', 'vector-2022', 'gongbi'].includes(skin) || document.querySelector('ul#footer-info') ? (
				<li className={[classNames, 'noprint']}>{children ?? <></>}</li>
			) : (
				<div className={[classNames, 'noprint']}>{children ?? <></>}</div>
			)}
		</>
	);
};

interface IndicatorProps {
	indicatorText: string | undefined;
	spanClass: UserRights | 'unknown';
}

const Indicator = ({indicatorText, spanClass}: IndicatorProps) => {
	if (!indicatorText) {
		return <></>;
	}

	return (
		<>
			<span
				className={['gadget-markrights_userpage__icon', `gadget-markrights_userpage__icon__${spanClass}`]}
				title={indicatorText}
			/>
			<span className="gadget-markrights_userpage__text">{indicatorText}</span>
		</>
	);
};

const FooterIcon = ({spanClass, indicatorText}: IndicatorProps) => (
	<FooterNotice spanClass={spanClass}>
		<Indicator indicatorText={indicatorText} spanClass={spanClass} />
	</FooterNotice>
);

export {FooterIcon, type IndicatorProps};
