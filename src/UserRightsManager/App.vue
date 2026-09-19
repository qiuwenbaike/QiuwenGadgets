<script setup lang="ts">
import {CdxCheckbox, CdxDialog, CdxField, CdxSelect, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import {onMounted, ref} from 'vue';
import {UserRights} from '~/MarkRights/modules/types';
import {api} from './modules/api';
import {assignPermission} from './modules/assignPermission';
import {getPermissionNames} from './modules/getPermissionNames';
import {getPermissionTemplate} from './modules/getTemplates';
import {issueTemplate} from './modules/issueTemplate';
import {markAsDone} from './modules/markAsDone';
defineOptions({inheritAttrs: false});

const props = defineProps<{
	userName: string;
	permission: UserRights;
	index: string;
	onClose: () => void;
}>();

const {wgULS} = window;
const open = ref(true);
const submitting = ref(false);
const rightsChangeSummary = ref('');
const expiry = ref('infinite');
const customExpiry = ref('');
const closingRemarks = ref('{{done}}——~~~~');
const watchTalkPage = ref(false);
const rightLog = ref(wgULS('获取中', '取得中'));

const permissionName = getPermissionNames(props.permission) ?? '';
const permissionTemplate = getPermissionTemplate(props.permission);
const logUrl = mw.util.getUrl('Special:Log/rights', {type: 'rights', page: `User:${props.userName}`});
const expiryItems: MenuItemData[] = [
	{value: '1 day', label: '1天'},
	{value: '1 week', label: wgULS('1周', '1週')},
	{value: '1 month', label: wgULS('1个月', '1個月')},
	{value: '3 months', label: wgULS('3个月', '3個月')},
	{value: '6 months', label: wgULS('6个月', '6個月')},
	{value: '1 year', label: '1年'},
	{value: 'infinite', label: wgULS('没有期限', '沒有期限')},
	{value: 'other', label: wgULS('其他时间', '其他時間')},
];

const loadRightLog = (): void => {
	const params: ApiQueryLogEventsParams = {
		action: 'query',
		format: 'json',
		list: 'logevents',
		leaction: 'rights/rights',
		letitle: `User:${props.userName}`,
		lelimit: 1,
	};

	void api.get(params).done((data) => {
		const {logevents: logs} = data['query'] as {
			logevents: {params: {newgroups: string[]}; user: string; timestamp: string}[];
		};
		const log = logs[0];
		if (!log) {
			rightLog.value = wgULS('没有任何日志', '沒有任何日誌');
			return;
		}

		// @ts-expect-error Morebits is provided by the gadget runtime.
		const timestamp = new Morebits.date(log.timestamp).calendar() as string;
		const rights = log.params.newgroups.join('、') || wgULS('（无）', '（無）');
		rightLog.value = `${timestamp} ${log.user}${wgULS('将用户组改为', '將使用者群組改為')}${rights}`;
	});
};

const close = (): void => {
	if (!submitting.value) {
		open.value = false;
		props.onClose();
	}
};

const submit = async (): Promise<void> => {
	if (submitting.value) {
		return;
	}

	submitting.value = true;
	try {
		const doneData = await markAsDone({
			userName: props.userName,
			index: props.index,
			closingRemarks: `\n:${closingRemarks.value}`,
		});
		await assignPermission({
			userName: props.userName,
			permission: props.permission,
			summary: rightsChangeSummary.value,
			revId: Number.parseInt(doneData['edit'].newrevid as string, 10),
			expiry: expiry.value === 'other' ? customExpiry.value : expiry.value,
		});
		if (permissionTemplate) {
			await issueTemplate({userName: props.userName, permission: props.permission, watch: watchTalkPage.value});
		}
		setTimeout(() => location.reload(), 1000);
	} catch (error) {
		submitting.value = false;
		void mw.notify(String(error), {tag: 'UserRightsManager', type: 'error'});
	}
};

onMounted(loadRightLog);
</script>

<template>
	<cdx-dialog
		v-model:open="open"
		:title="`授予${permissionName}${wgULS('给', '給')}${userName}`"
		:use-close-button="true"
		:primary-action="{label: wgULS('授权', '授權'), actionType: 'progressive', disabled: submitting}"
		:default-action="{label: '取消', disabled: submitting}"
		@primary="submit"
		@default="close"
		@update:open="$event === false && close()"
	>
		<div class="user-rights-manager__body">
			<p class="user-rights-manager__log">
				<a :href="logUrl" target="_blank" rel="noopener noreferrer">
					{{ wgULS('最近权限日志', '最近權限日誌') }}
				</a>
				：{{ rightLog }}
			</p>
			<cdx-field>
				<label for="user-rights-manager-summary">{{ wgULS('授权原因', '授權原因') }}</label>
				<cdx-text-input
					id="user-rights-manager-summary"
					v-model="rightsChangeSummary"
					placeholder="可留空"
					:disabled="submitting"
				/>
			</cdx-field>
			<cdx-field>
				<label for="user-rights-manager-summary">{{ wgULS('授权期限', '授權期限') }}</label>
				<cdx-select v-model:selected="expiry" :menu-items="expiryItems" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="expiry === 'other'">
				<label for="user-rights-manager-custom-expiry">{{ wgULS('自定义时间', '自訂時間') }}</label>
				<cdx-text-input id="user-rights-manager-custom-expiry" v-model="customExpiry" :disabled="submitting" />
			</cdx-field>
			<cdx-field>
				<label for="user-rights-manager-remarks">{{ wgULS('关闭请求留言', '關閉請求留言') }}</label>
				<cdx-text-input id="user-rights-manager-remarks" v-model="closingRemarks" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="permissionTemplate">
				<cdx-checkbox v-model="watchTalkPage" :disabled="submitting">
					{{ wgULS('监视用户讨论页', '監視使用者討論頁') }}
				</cdx-checkbox>
			</cdx-field>
			<p v-if="submitting" class="user-rights-manager__status">{{ wgULS('处理中……', '處理中……') }}</p>
		</div>
	</cdx-dialog>
</template>

<style lang="less">
.user-rights-manager__body {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	min-width: min(85vw, 25rem);
}

.user-rights-manager__log,
.user-rights-manager__status {
	margin: 0;
}
</style>
