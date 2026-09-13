<script setup lang="ts">
import {CdxCheckbox, CdxDialog, CdxField, CdxSelect, CdxTextArea} from '@wikimedia/codex';
import {applyConfig, config} from './modules/rrdConfig';
import {computed, ref, watch} from 'vue';
import {getMessage} from './modules/i18n';
import {isSpecialLog} from './modules/isSpecialLog';
import {submit} from './modules/submit';

const props = defineProps<{
	ids: string[];
	onClose: () => void;
}>();

const open = ref(true);
const hideContent = ref(Boolean(config.checkboxes.rrdHideContent));
const hideUsername = ref(Boolean(config.checkboxes.rrdHideUsername));
const hideSummary = ref(Boolean(config.checkboxes.rrdHideSummary));
const reason = ref(config.others.rrdReason ?? '');
const otherReasons = ref(config.others.rrdOtherReasons ?? '');

const reasonItems = computed(() => [
	{value: getMessage('hideReasonRD1'), label: getMessage('hideReasonRD1')},
	{value: getMessage('hideReasonRD2'), label: getMessage('hideReasonRD2')},
	{value: getMessage('hideReasonRD3'), label: getMessage('hideReasonRD3')},
	{value: getMessage('hideReasonRD4'), label: getMessage('hideReasonRD4')},
	{value: getMessage('hideReasonRD5'), label: getMessage('hideReasonRD5')},
	{value: getMessage('hideReasonOS1'), label: getMessage('hideReasonOS1')},
	{value: getMessage('hideReasonOS2'), label: getMessage('hideReasonOS2')},
	{value: getMessage('hideReasonOS3'), label: getMessage('hideReasonOS3')},
	{value: getMessage('hideReasonOS4'), label: getMessage('hideReasonOS4')},
	{value: '', label: getMessage('hideReasonOther')},
]);

const primaryAction = computed(() => ({
	label: getMessage('dialogButtonSubmit'),
	actionType: 'progressive' as const,
}));

const defaultAction = computed(() => ({
	label: getMessage('dialogButtonCancel'),
}));

watch(
	() => [hideContent.value, hideUsername.value, hideSummary.value, reason.value, otherReasons.value],
	() => {
		applyConfig(
			{
				rrdHideContent: hideContent.value ?? false,
				rrdHideUsername: hideUsername.value ?? false,
				rrdHideSummary: hideSummary.value ?? false,
			},
			{
				rrdReason: reason.value ?? '',
				rrdOtherReasons: otherReasons.value ?? '',
			}
		);
	},
	{deep: true}
);

const submitDialog = (): void => {
	const shouldHideContent = hideContent.value;
	const shouldHideUsername = hideUsername.value;
	const shouldHideSummary = hideSummary.value;
	const rrdReason = reason.value || undefined;
	let rrdOtherReasons = otherReasons.value || undefined;

	if (rrdOtherReasons && rrdReason) {
		rrdOtherReasons = `，${rrdOtherReasons}`;
	}

	const toHide: string[] = [];
	if (shouldHideContent) {
		toHide.push(isSpecialLog() ? getMessage('hideLog') : getMessage('hideContent'));
	}
	if (shouldHideUsername) {
		toHide.push(getMessage('hideUsername'));
	}
	if (shouldHideSummary) {
		toHide.push(getMessage('hideSummary'));
	}

	if (!toHide.length) {
		void mw.notify(getMessage('errNoItemProvided'), {
			tag: 'RRD',
			type: 'error',
		});
		return;
	}

	let cont = true;
	if (!rrdReason && !rrdOtherReasons) {
		cont = confirm(getMessage('warnNoReasonProvided'));
	}

	if (cont) {
		open.value = false;
		void submit(props.ids, toHide.join('、'), rrdReason ?? '', rrdOtherReasons ?? '');
		props.onClose();
	}
};

const closeDialog = (): void => {
	open.value = false;
	applyConfig(
		{
			rrdHideContent: hideContent.value ?? false,
			rrdHideUsername: hideUsername.value ?? false,
			rrdHideSummary: hideSummary.value ?? false,
		},
		{
			rrdReason: reason.value || '',
			rrdOtherReasons: otherReasons.value || '',
		}
	);
	props.onClose();
};
</script>

<template>
	<cdx-dialog
		v-model:open="open"
		:title="getMessage('dialogTitle')"
		:use-close-button="true"
		:primary-action="primaryAction"
		:default-action="defaultAction"
		@update:open="$event === false && closeDialog()"
		@primary="submitDialog"
		@default="closeDialog"
	>
		<div class="rrd-dialog__body">
			<div class="rrd-dialog__section">
				<p>{{ getMessage('hideItems') }}</p>
				<cdx-field>
					<cdx-checkbox v-model="hideContent">
						{{ isSpecialLog() ? getMessage('hideLog') : getMessage('hideContent') }}
					</cdx-checkbox>
				</cdx-field>
				<cdx-field>
					<cdx-checkbox v-model="hideUsername">{{ getMessage('hideUsername') }}</cdx-checkbox>
				</cdx-field>
				<cdx-field>
					<cdx-checkbox v-model="hideSummary">{{ getMessage('hideSummary') }}</cdx-checkbox>
				</cdx-field>
			</div>
			<div class="rrd-dialog__section">
				<p>{{ getMessage('hideReason') }}</p>
				<cdx-field>
					<cdx-select v-model:selected="reason" :menu-items="reasonItems" />
				</cdx-field>
			</div>
			<div class="rrd-dialog__section">
				<p>{{ getMessage('otherReasons') }}</p>
				<cdx-text-area v-model="otherReasons" rows="4" />
			</div>
		</div>
	</cdx-dialog>
</template>

<style lang="less">
.rrd-dialog__body {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	min-width: min(90vw, 32rem);
}

.rrd-dialog__section {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.rrd-dialog__section p {
	margin: 0;
}
</style>
