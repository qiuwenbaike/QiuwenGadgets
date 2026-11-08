<script setup lang="ts">
import {CdxCheckbox, CdxField, CdxRadio, CdxSelect, CdxTextArea, type MenuItemData} from '@wikimedia/codex';
import {Morebits, type MorebitsWikiPage} from './morebits';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import type {TwStatusExposed} from './types';
import {uls} from '../utils/useUls';

declare const Twinkle: import('./twinkleGlobal').TwinkleGlobalBase & {
	changeTags: string[];
	getPref: {
		(key: 'notifyUserOnDeli' | 'deliWatchPage' | 'deliWatchUser' | 'logSpeedyNominations'): boolean;
		(key: 'noLogOnSpeedyNomination'): string[];
		(key: string): string | boolean;
	};
	speedy?: {
		callbacks: {
			user: {
				addToLog: (params: ImageParams, initialContrib: string | null) => void;
			};
		};
	};
};

interface TypeOption {
	value: string;
	label: string;
}

interface ImageParams {
	type: string;
	notify: boolean;
	f1_source: string;
	f4_type: string;
	templatename?: string;
	normalized?: string;
	lognomination?: boolean;
	fromDI?: boolean;
}

const props = defineProps<{
	title: string;
	initialNotify: boolean;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	close: [];
}>();

const open = ref(true);
const notify = ref(props.initialNotify);
const selectedType = ref('no source');
const f1Source = ref('');
const f4Type = ref('');
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);

const typeOptions: TypeOption[] = [
	{
		value: 'no permission',
		label: uls('明显侵权之文件（CSD F1）', '明顯侵權之檔案（CSD F1）'),
	},
	{
		value: 'no source',
		label: uls('来源不明（CSD F3）', '來源不明（CSD F3）'),
	},
	{
		value: 'no license',
		label: uls('未知著作权信息（CSD F3）', '未知著作權資訊（CSD F3）'),
	},
	{
		value: 'no license',
		label: uls('著作权无法被查证（CSD F3）', '著作權無法被查證（CSD F3）'),
	},
	{
		value: 'replaceable fair use',
		label: uls('可被替代的非自由著作权文件（CSD F4）', '可被替代的非自由著作權檔案（CSD F4）'),
	},
	{
		value: 'orphaned fair use',
		label: uls('没有被条目使用的非自由著作权文件（CSD F5）', '沒有被條目使用的非自由著作權檔案（CSD F5）'),
	},
	{
		value: 'no fair use rationale',
		label: uls(
			'没有填写任何合理使用依据的非自由著作权文件（CSD F5）',
			'沒有填寫任何合理使用依據的非自由著作權檔案（CSD F5）'
		),
	},
];

const f4TypeOptions = computed<MenuItemData[]>(() => [
	{value: '', label: uls('请选择', '請選擇')},
	{
		value: '1',
		label: uls('有其他自由著作权文件展示相同的事物', '有其他自由著作權檔案展示相同的事物'),
	},
	{
		value: '2',
		label: uls(
			'文件描述的是在世或假定在世人物、仍然存在的建筑、室外雕塑或仍然在售的商品，且预计自行拍摄的照片不受他人著作权保护',
			'檔案描述的是在世或假定在世人物、仍然存在的建築、室外雕塑或仍然在售的商品，且預計自行拍攝的相片不受他人著作權保護'
		),
	},
	{value: '3', label: uls('文件为可自行绘制的地图或图表', '檔案為可自行繪製的地圖或圖表')},
	{value: '4', label: uls('文件来自商业图片机构（如Getty）', '檔案來自商業圖片機構（如Getty）')},
]);

const showF1Source = computed(() => selectedType.value === 'no permission');
const showF4Type = computed(() => selectedType.value === 'replaceable fair use');

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value,
}));

const submit = () => {
	if (submitting.value) {
		return;
	}
	submitting.value = true;
	evaluate(
		{
			type: selectedType.value,
			notify: notify.value,
			f1_source: f1Source.value,
			f4_type: f4Type.value,
		},
		statusRef.value?.getStatusRoot() ?? null,
		() => {
			submitting.value = false;
		}
	);
};

watch(open, (value) => {
	if (!value) {
		emit('close');
	}
});

// Faithful port of Twinkle.image.callback.evaluate from here on

const callbacks = {
	taggingImage: (pageobj: MorebitsWikiPage): void => {
		const params = pageobj.getCallbackParameters() as ImageParams;
		let text = pageobj.getPageText() ?? '';
		// remove tag - deletion-tagged files cannot be moved
		text = text.replace(
			/\{\{(mtc|(copy |move )?to ?(share|commons)|move to (qiuwen share|wikimedia commons)|copy to (qiuwen share|wikimedia commons))[^}]*\}\}/gi,
			''
		);
		// Adding discussion
		if (params.type !== 'orphaned fair use') {
			const qiuwen_page = new Morebits.wiki.page(
				'Qiuwen_talk:存废讨论/文件快速删除提报',
				uls('加入快速删除记录项', '加入快速刪除記錄項')
			);
			qiuwen_page.setFollowRedirect(true);
			qiuwen_page.setCallbackParameters(params);
			qiuwen_page.load(callbacks.imageList);
		}
		let tag: string;
		switch (params.type) {
			case 'orphaned fair use':
				tag = '{{'.concat('subst:', 'orphaned fair use}}\n');
				break;
			case 'no permission':
				tag = '{{'.concat(
					'subst:',
					`${params.templatename}/auto|1=${params.f1_source
						.replace(/http/g, '&#104;ttp')
						.replace(/\n+/g, '\n')
						.replace(/^\s*([^*])/gm, '* $1')
						.replace(/^\* $/m, '')}}}\n`
				);
				break;
			case 'replaceable fair use':
				tag = '{{'.concat('subst:', `${params.templatename}/auto|1=${params.f4_type}}}\n`);
				break;
			default:
				tag = '{{'.concat('subst:', `${params.templatename}/auto}}\n`);
				break;
		}
		const textNoSd = text.replace(
			/\{\{\s*(db(-\w*)?|d|delete|(?:hang|hold)[- ]?on)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi,
			''
		);
		if (
			text !== textNoSd &&
			confirm(uls('在页面上找到快速删除模板，要移除吗？', '在頁面上找到快速刪除模板，要移除嗎？'))
		) {
			text = textNoSd;
		}
		pageobj.setPageText(tag + text);
		let editSummary = uls('请求快速删除（', '請求快速刪除（');
		editSummary += `[[QW:CSD#${(params.normalized ?? '').toUpperCase()}|CSD ${(params.normalized ?? '').toUpperCase()}]]`;
		editSummary += '）';
		pageobj.setEditSummary(editSummary);
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setWatchlist(Twinkle.getPref('deliWatchPage') === true);
		pageobj.setCreateOption('nocreate');
		pageobj.save();
	},
	userNotification: (pageobj: MorebitsWikiPage): void => {
		const params = pageobj.getCallbackParameters() as ImageParams;
		const initialContrib = pageobj.getCreator() ?? '';
		// disallow warning yourself
		if (initialContrib === mw.config.get('wgUserName')) {
			pageobj
				.getStatusElement()
				.warn(`您（${initialContrib}）${uls('创建了该页，跳过通知', '建立了該頁，跳過通知')}`);
		} else {
			const talkPageName = `User talk:${initialContrib}`;
			const usertalkpage = new Morebits.wiki.page(
				talkPageName,
				`${uls('通知上传者', '通知上傳者')}（${initialContrib}）`
			);
			const notifytext = '\n{{'.concat(
				'subst:',
				`Di-${params.templatename}-notice|1=${Morebits.pageNameNorm}}}——~~`,
				'~~'
			);
			usertalkpage.setAppendText(notifytext);
			usertalkpage.setEditSummary(
				uls('通知：文件[[', '通知：檔案[[') + Morebits.pageNameNorm + uls(']]快速删除提名', ']]快速刪除提名')
			);
			usertalkpage.setChangeTags(Twinkle.changeTags);
			usertalkpage.setCreateOption('recreate');
			usertalkpage.setWatchlist(Twinkle.getPref('deliWatchUser') === true);
			usertalkpage.setFollowRedirect(true, false);
			usertalkpage.append();
		}
		// add this nomination to the user's userspace log, if the user has enabled it
		if (params.lognomination) {
			params.fromDI = true;
			Twinkle.speedy?.callbacks.user.addToLog(params, initialContrib);
		}
	},
	imageList: (pageobj: MorebitsWikiPage): void => {
		const text = pageobj.getPageText() ?? '';
		// const params = pageobj.getCallbackParameters();
		pageobj.setPageText(`${text}\n* [[:${Morebits.pageNameNorm}]]——~~`.concat('~~'));
		pageobj.setEditSummary(`加入[[${Morebits.pageNameNorm}]]`);
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setCreateOption('recreate');
		pageobj.save();
	},
};

const evaluate = (params: ImageParams, statusContainer: HTMLElement | null, restore?: () => void): void => {
	let {notify} = params;
	const {type} = params;
	let csdcrit: string;
	switch (type) {
		case 'no source':
			csdcrit = 'f3';
			break;
		case 'no license':
			csdcrit = 'f3';
			break;
		case 'orphaned fair use':
			csdcrit = 'f5';
			notify = false;
			break;
		case 'no permission':
			csdcrit = 'f1';
			break;
		case 'no fair use rationale':
			csdcrit = 'f5';
			break;
		case 'replaceable fair use':
			csdcrit = 'f4';
			break;
		default:
			throw new Error('Twinkle.image.callback.evaluate：未知条款');
	}
	const lognomination =
		Twinkle.getPref('logSpeedyNominations') === true &&
		!Twinkle.getPref('noLogOnSpeedyNomination').includes(csdcrit.toLowerCase());
	const templatename = type;
	params.templatename = templatename;
	params.normalized = csdcrit;
	params.lognomination = lognomination;
	if (csdcrit === 'f4' && !params.f4_type) {
		void mw.notify(uls('CSD F4：请选择适用类型。', 'CSD F4：請選擇適用類別。'), {
			type: 'warn',
			tag: 'twinkleimage',
		});
		if (restore) {
			restore();
		}
		return;
	}
	Morebits.status.init(statusContainer);
	Morebits.wiki.actionCompleted.redirect = mw.config.get('wgPageName');
	Morebits.wiki.actionCompleted.notice = uls('标记完成', '標記完成');
	// Tagging image
	const qiuwen_page = new Morebits.wiki.page(mw.config.get('wgPageName'), uls('加入删除标记', '加入刪除標記'));
	qiuwen_page.setCallbackParameters(params);
	qiuwen_page.load(callbacks.taggingImage);
	// Notifying uploader
	if (notify) {
		qiuwen_page.lookupCreation(callbacks.userNotification);
	} else {
		// add to CSD log if desired
		if (lognomination) {
			params.fromDI = true;
			Twinkle.speedy?.callbacks.user.addToLog(params, null);
		}
		// No auto-notification, display what was going to be added.
		if (type !== 'orphaned fair use') {
			const noteData = document.createElement('pre');
			noteData.appendChild(
				document.createTextNode('{{'.concat('subst:', `Uploadvionotice|${Morebits.pageNameNorm}}}——~~`, '~~'))
			);
			Morebits.status.info('提示', [
				uls('这些内容应贴进上传者对话页：', '這些內容應貼進上傳者討論頁：'),
				noteData,
			] as unknown as string);
		}
	}
};
</script>

<template>
	<tw-dialog
		:open="open"
		:title="title"
		script-name="Twinkle"
		:footer-links="footerLinks"
		:primary-action="primaryAction"
		@update:open="open = $event"
		@primary="submit"
	>
		<cdx-checkbox v-model="notify" :disabled="submitting">
			{{ uls('通知上传者', '通知上傳者') }}
		</cdx-checkbox>
		<cdx-field is-fieldset>
			<template #label>{{ uls('需要的动作', '需要的動作') }}</template>
			<cdx-radio
				v-for="option in typeOptions"
				:key="`${option.value}-${option.label}`"
				v-model="selectedType"
				name="twinkle-image-type"
				:input-value="option.value"
				:disabled="submitting"
			>
				{{ option.label }}
			</cdx-radio>
		</cdx-field>
		<cdx-field v-if="showF1Source">
			<template #label>{{ uls('侵权来源：', '侵權來源：') }}</template>
			<cdx-text-area v-model="f1Source" :disabled="submitting" />
		</cdx-field>
		<cdx-field v-if="showF4Type">
			<template #label>{{ uls('适用类型：', '適用類別：') }}</template>
			<cdx-select v-model:selected="f4Type" :menu-items="f4TypeOptions" :disabled="submitting" />
		</cdx-field>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>
