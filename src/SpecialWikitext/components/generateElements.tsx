import {previewLoadingContent, previewLoadingInner} from './SpecialWikitext.module.less';
import React from 'ext.gadget.React';
import {getMessage} from '../modules/i18n';

const Failed = () => (
	<>
		<img
			src={
				'https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/8/8f/Alert_Mark_%28Orange%29.svg/48px-Alert_Mark_%28Orange%29.svg.png'
			}
			decoding="async"
			width="32"
			height="32"
		/>
		<span>&nbsp;{getMessage('Failed')}</span>
	</>
);

const Loading = () => (
	<div id={'specialwikitext-preview-loading'}>
		<div className={previewLoadingInner} id={'specialwikitext-preview-loading__inner'}>
			<div className={previewLoadingContent} id={'specialwikitext-preview-loading__content'}>
				<img
					src={'https://tu.zhongwen.wiki/images/qiuwenbaike/zh/d/de/Ajax-loader.gif'}
					decoding="async"
					width="32"
					height="32"
				/>
				<span>&nbsp;{getMessage('Loading')}</span>
			</div>
		</div>
	</div>
);

export {Failed, Loading};
