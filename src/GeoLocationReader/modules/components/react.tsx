import {CLASS_NAME, CLASS_NAME_ICON, CLASS_NAME_TEXT} from '../constant';
import React, {ReactElement} from 'ext.gadget.JSX';
import {getMessage} from '../i18n';

interface FooterNoticeProps {
	spanClass: string;
	children?: ReactElement | ReactElement[];
}

const FooterNotice = ({spanClass, children = <></>}: FooterNoticeProps) => {
	const {skin} = mw.config.get();
	children ??= <></>;

	return (
		<>
			{skin === 'citizen' ? (
				<section
					id={CLASS_NAME}
					className={[
						CLASS_NAME,
						`${CLASS_NAME}-${spanClass}`,
						'page-info__item',
						'citizen-footer__pageinfo-item',
						'noprint',
					]}
				>
					{children}
				</section>
			) : ['vector', 'vector-2022', 'gongbi'].includes(skin) || document.querySelector('ul#footer-info') ? (
				<li id={CLASS_NAME} className={[CLASS_NAME, `${CLASS_NAME}-${spanClass}`, 'noprint']}>
					{children}
				</li>
			) : (
				<div id={CLASS_NAME} className={[CLASS_NAME, `${CLASS_NAME}-${spanClass}`, 'noprint']}>
					{children}
				</div>
			)}
		</>
	);
};

interface IndicatorProps {
	icon: 'globe' | 'helpNotice';
	indicatorText: string;
}

const Indicator = ({icon, indicatorText}: IndicatorProps) => {
	const text: string =
		icon === 'globe' ? getMessage('Location') + getMessage(':') + indicatorText : (indicatorText ?? '');

	return (
		<>
			<span className={[CLASS_NAME_ICON, `${CLASS_NAME_ICON}-${icon}`]} aria-label={text}></span>
			<span className={CLASS_NAME_TEXT}>{text}</span>
		</>
	);
};

interface FooterIconProps {
	spanClass: string;
	icon: 'globe' | 'helpNotice';
	indicatorText: string;
}

const FooterIcon = ({icon, spanClass, indicatorText}: FooterIconProps) => (
	<FooterNotice spanClass={spanClass}>
		<Indicator icon={icon} indicatorText={indicatorText} />
	</FooterNotice>
);

export {FooterIcon, type FooterIconProps};
