import React from 'ext.gadget.React';
import {getMessage} from './i18n';

const LOADER_IMAGE: string = 'https://tu.zhongwen.wiki/images/qiuwenbaike/zh/d/de/Ajax-loader.gif';
const FAIL_IMAGE: string =
	'https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/8/8f/Alert_Mark_%28Orange%29.svg/48px-Alert_Mark_%28Orange%29.svg.png';

const noticeLoadingElement = () => (
	<div className={'specialwikitext__preview-loading'} id={'specialwikitext__preview-loading'}>
		<div className={'specialwikitext__preview-loading-inner'} id={'specialwikitext__preview-loading-inner'}>
			<div className={'specialwikitext__preview-loading-content'} id={'specialwikitext__preview-loading-content'}>
				<img src={LOADER_IMAGE} decoding="async" width="32" height="32" />
				<span>&nbsp;{getMessage('Loading preview')}</span>
			</div>
		</div>
	</div>
);

const noticeFailElement = () => (
	<>
		<img src={FAIL_IMAGE} decoding="async" width="32" height="32" />
		<span>&nbsp;{getMessage('Failed to load preview')}</span>
	</>
);

export {noticeLoadingElement, noticeFailElement};
