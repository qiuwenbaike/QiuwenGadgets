<script setup lang="ts">
import {CdxButton, CdxField, CdxSelect, CdxTextInput} from '@wikimedia/codex';
import {computed, ref, watch} from 'vue';
import {LICENSES} from './constant';
import {getMessage} from './i18n';

const props = defineProps<{
	onChange: (source: string, license: string) => void;
	onAdd: (source: string, license: string) => boolean;
}>();

const source = ref('');
const license = ref<string | null>(null);
const licenseItems = computed(() => LICENSES.map(({data, label}) => ({value: data, label})));

watch([source, license], ([newSource, newLicense]) => {
	props.onChange(newSource, newLicense ?? '');
});

const addToSummary = (): void => {
	if (props.onAdd(source.value, license.value ?? '')) {
		source.value = '';
		license.value = null;
	}
};
</script>

<template>
	<fieldset class="editform-attribution">
		<legend>{{ getMessage('Please Claim Sources and Licenses') }}</legend>
		<cdx-field>
			<template #label>{{ getMessage('Source') }}</template>
			<cdx-text-input v-model="source" :placeholder="getMessage('Source')" />
		</cdx-field>
		<cdx-field>
			<template #label>{{ getMessage('License') }}</template>
			<cdx-select v-model:selected="license" :menu-items="licenseItems" :default-label="getMessage('License')" />
		</cdx-field>
		<cdx-button type="button" weight="primary" @click="addToSummary">
			{{ getMessage('Add to Edit Summary') }}
		</cdx-button>
	</fieldset>
</template>

<style scoped lang="less">
.editform-attribution {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 0.7857em;
}

.editform-attribution > legend {
	float: left;
	width: 100%;
}
</style>
