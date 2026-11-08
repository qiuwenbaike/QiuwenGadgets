<script setup lang="ts">
import {CdxButton, CdxCheckbox, CdxSelect, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import type {CustomConfigRow, TwStatusExposed} from './types';
import {Morebits, type MorebitsWikiPage} from './morebits';
import {reactive, ref} from 'vue';
import TwConfigListDialog from './TwConfigListDialog.vue';
import TwStatus from './TwStatus.vue';
import {uls} from '../utils/useUls';

interface PrefDef {
	name: string;
	label?: string;
	helptip?: string;
	adminOnly?: boolean;
	type: 'string' | 'boolean' | 'integer' | 'enum' | 'set' | 'customList';
	enumValues?: Record<string, string>;
	setValues?: Record<string, string>;
	setDisplayOrder?: string[];
	customListValueTitle?: string;
	customListLabelTitle?: string;
}

interface SectionDef {
	title: string;
	module?: string;
	adminOnly?: boolean;
	hidden?: boolean;
	preferences: PrefDef[];
}

/** Parameters stashed on the twinkleoptions.js save page. */
interface ConfigSaveParams {
	values: Record<string, unknown>;
	restore: () => void;
}

const props = defineProps<{
	sections: SectionDef[];
	/** The full section list (including hidden/admin-only sections) used when serializing preferences. */
	allSections: SectionDef[];
	defaults: Record<string, unknown>;
	initialValues: Record<string, unknown>;
}>();

const values = reactive<Record<string, unknown>>({});
for (const [key, value] of Object.entries(props.initialValues)) {
	values[key] = value;
}

const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);
const tocVisible = ref(true);

// Custom list editing state
const listDialogOpen = ref(false);
const listPref = ref<PrefDef | null>(null);

// Helpers for the loosely-typed preference values
const getString = (name: string) => {
	const value = values[name];
	return typeof value === 'string' || typeof value === 'number' ? String(value) : '';
};

const getBoolean = (name: string) => values[name] === true;

const getSet = (name: string): string[] => {
	const value = values[name];
	return Array.isArray(value) ? (value as string[]).filter((item) => typeof item === 'string') : [];
};

const getCustom = (name: string): CustomConfigRow[] => {
	const value = values[name];
	if (!Array.isArray(value)) {
		return [];
	}
	return (value as CustomConfigRow[]).filter(
		(row) =>
			typeof row === 'object' && row !== null && typeof row.value === 'string' && typeof row.label === 'string'
	);
};

const setString = (name: string, value: string | number | null) => {
	values[name] = value === null || value === undefined ? '' : String(value);
};

const setBoolean = (name: string, value: boolean | string[]) => {
	values[name] = value === true;
};

const setOrder = (pref: PrefDef): string[] => {
	if (pref.setDisplayOrder) {
		return [...pref.setDisplayOrder];
	}
	return Object.keys(pref.setValues ?? {});
};

const updateSet = (name: string, value: string, modelValue: boolean | string[]) => {
	if (Array.isArray(modelValue)) {
		values[name] = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		values[name] = [...getSet(name), value];
	} else {
		values[name] = getSet(name).filter((item) => item !== value);
	}
};

const enumItems = (pref: PrefDef): MenuItemData[] => {
	const items = Object.entries(pref.enumValues ?? {}).map(([value, label]) => ({value, label}));
	const current = getString(pref.name);
	// Append a user-defined value so it remains selectable (legacy behavior)
	if (current && !items.some((item) => item.value === current)) {
		items.push({value: current, label: current});
	}
	return items;
};

// Convert template mentions in helptips to clickable links (legacy behavior)
const helptipHtml = (tip: string) =>
	tip
		.replace(/{{(.+?)}}/g, `<a href="${mw.util.getUrl('Template:')}$1" rel="noopener" target="_blank">$1</a>`)
		.replace(/\[\[(.+?)]]/g, `<a href="${mw.util.getUrl('')}$1" rel="noopener" target="_blank">$1</a>`);

const resetPref = (pref: PrefDef) => {
	const defaultValue = props.defaults[pref.name];
	switch (pref.type) {
		case 'boolean':
			values[pref.name] = defaultValue === true;
			break;
		case 'string':
		case 'integer':
		case 'enum':
			values[pref.name] = defaultValue === undefined || defaultValue === null ? '' : String(defaultValue);
			break;
		case 'set':
			values[pref.name] = Array.isArray(defaultValue)
				? (defaultValue as unknown[]).filter((item): item is string => typeof item === 'string')
				: [];
			break;
		case 'customList':
			values[pref.name] = Array.isArray(defaultValue)
				? (defaultValue as CustomConfigRow[]).map((row) => ({...row}))
				: [];
			break;
		default:
			break;
	}
};

const resetAll = () => {
	for (const section of props.sections) {
		for (const pref of section.preferences) {
			resetPref(pref);
		}
	}
};

const openListDialog = (pref: PrefDef) => {
	listPref.value = pref;
	listDialogOpen.value = true;
};

const onListSave = (rows: CustomConfigRow[]) => {
	if (listPref.value) {
		values[listPref.value.name] = rows;
	}
};

const submit = () => {
	if (submitting.value) {
		return;
	}
	submitting.value = true;
	saveConfig(values, statusRef.value?.getStatusRoot() ?? null, () => {
		submitting.value = false;
	});
};

const resetLabel = uls('复位', '復位');
const restoreDefaultsLabel = uls('恢复默认', '恢復預設');
const saveLabel = uls('保存修改', '儲存修改');
const editItemsLabel = uls('编辑项目', '編輯項目');

const saveConfig = (
	values: Record<string, unknown>,
	statusContainer: HTMLElement | null,
	restore: () => void
): void => {
	Morebits.status.init(statusContainer);
	const userjs = `${mw.config.get('wgFormattedNamespaces')[mw.config.get('wgNamespaceIds')['user'] as number]}:${mw.config.get(
		'wgUserName'
	)}/twinkleoptions.js`;
	const qiuwen_page = new Morebits.wiki.page(userjs, uls('保存参数设置到 ', '儲存偏好設定到 ') + userjs);
	qiuwen_page.setCallbackParameters({values, restore} satisfies ConfigSaveParams);
	qiuwen_page.load(writePrefs);
};

const writePrefs = (pageobj: MorebitsWikiPage): void => {
	const {values: savedValues, restore} = pageobj.getCallbackParameters() as ConfigSaveParams;
	// this is the object which gets serialized into JSON; only
	// preferences that this script knows about are kept
	const newConfig: Record<string, unknown> = {
		optionsVersion: 2.1,
	};
	// a comparison function is needed later on
	// it is just enough for our purposes (i.e. comparing strings, numbers, booleans,
	// arrays of strings, and arrays of { value, label })
	// and it is not very robust: e.g. compare([2], ["2"]) === true, and
	// compare({}, {}) === false, but it's good enough for our purposes here
	const compare = (a: unknown, b: unknown): boolean => {
		if (Array.isArray(a)) {
			const arrB = Array.isArray(b) ? b : [];
			if (a.length !== arrB.length) {
				return false;
			}
			a.sort();
			arrB.sort();
			for (const [i, element] of a.entries()) {
				const other = arrB[i];
				if (other === undefined) {
					return false;
				}
				// comparison of the two properties of custom lists
				if (element !== null && typeof element === 'object') {
					if (
						(element as CustomConfigRow).label !== (other as CustomConfigRow).label ||
						(element as CustomConfigRow).value !== (other as CustomConfigRow).value
					) {
						return false;
					}
				} else if (String(element) !== String(other)) {
					return false;
				}
			}
			return true;
		}
		return a === b;
	};
	for (const section of props.allSections) {
		if (section.adminOnly && !Morebits.userIsSysop) {
			continue; // i.e. "continue" in this context
		}
		// reach each of the preferences from the form
		for (const pref of section.preferences) {
			let userValue: unknown; // = undefined
			// only read form values for those prefs that have them
			if (!pref.adminOnly || Morebits.userIsSysop) {
				if (!section.hidden) {
					switch (pref.type) {
						case 'boolean':
							userValue = savedValues[pref.name] === true;
							break;
						case 'string': // read from the input box or combo box
						case 'enum':
							userValue = String(savedValues[pref.name] ?? '');
							break;
						case 'integer': {
							// read from the input box
							const parsed = Number.parseInt(String(savedValues[pref.name] ?? ''), 10);
							if (Number.isNaN(parsed)) {
								Morebits.status.warn(
									uls('保存', '儲存'),
									`${uls('您为 ', '您為 ') + pref.name} 指定的值（${String(
										savedValues[pref.name] ?? ''
									)}${uls(
										'）不合法，会继续保存操作，但此值将会跳过。',
										'）不合法，會繼續儲存操作，但此值將會跳過。'
									)}`
								);
								userValue = null;
							} else {
								userValue = parsed;
							}
							break;
						}
						case 'set':
							// read from the set of check boxes
							userValue = Array.isArray(savedValues[pref.name])
								? [...(savedValues[pref.name] as unknown[])]
								: [];
							break;
						case 'customList':
							userValue = savedValues[pref.name];
							break;
						default:
							void mw.notify(`twinkleconfig: 未知数据类型，属性 ${pref.name}`, {
								type: 'warn',
								tag: 'twinkleconfig',
							});
							break;
					}
				} else if (Twinkle.prefs) {
					// Retain the hidden preferences that may have customised by the user from twinkleoptions.js
					// undefined if not set
					userValue = Twinkle.prefs[pref.name];
				}
			}
			// only save those preferences that are *different* from the default
			if (userValue !== undefined && !compare(userValue, Twinkle.defaultConfig[pref.name])) {
				newConfig[pref.name] = userValue;
			}
		}
	}
	const nowiki = 'nowiki';
	let text = `// <${nowiki}>\n${uls(
		`// twinkleoptions.js：用户Twinkle参数设置文件\n//\n// 注：修改您的参数设置最简单的办法是使用\n// Twinkle参数设置面板，在[[${Morebits.pageNameNorm}]]。\n//\n// 这个文件是自动生成的，您所做的任何修改（除了\n// 以一种合法的JavaScript的方式来修改这些属性值）会\n// 在下一次您点击“保存”时被覆盖。\n// 修改此文件时，请记得使用合法的JavaScript。\n`,
		`// twinkleoptions.js：使用者Twinkle參數設定檔案\n//\n// 註：修改您的參數設定最簡單的辦法是使用\n// Twinkle參數設定面板，在[[${Morebits.pageNameNorm}]]。\n//\n// 這個檔案是自動產生的，您所做的任何修改（除了\n// 以一種合法的JavaScript的方式來修改這些屬性值）會\n// 在下一次您點擊「儲存」時被覆蓋。\n// 修改此檔案時，請記得使用合法的JavaScript。\n`
	)}`;
	text +=
		'\nwindow.Twinkle = window.Twinkle || {};\nwindow.Twinkle.prefs = window.Twinkle.prefs || {};\nwindow.Twinkle.prefs = ';
	text += JSON.stringify(newConfig, null, 2);
	text += `;\n\n${uls('// twinkleoptions.js到此为止\n', '// twinkleoptions.js到此為止\n')}// </${nowiki}>`;
	pageobj.setPageText(text);
	pageobj.setEditSummary(
		uls('保存Twinkle参数设置：来自[[', '儲存Twinkle偏好設定：來自[[') +
			Morebits.pageNameNorm +
			uls(']]的自动编辑', ']]的自動編輯')
	);
	pageobj.setChangeTags(Twinkle.changeTags);
	pageobj.setCreateOption('recreate');
	pageobj.save(
		() => {
			saveSuccess(pageobj);
			restore();
		},
		() => {
			restore();
		}
	);
};

const saveSuccess = (pageobj: MorebitsWikiPage): void => {
	pageobj.getStatusElement().info('成功');
	const noticebox = document.createElement('div');
	noticebox.className = 'mw-message-box mw-message-box-success';
	noticebox.style.fontSize = '100%';
	noticebox.style.marginTop = '2em';
	noticebox.innerHTML = `<p><b>${uls(
		'您的Twinkle参数设置已被保存。',
		'您的Twinkle偏好設定已被儲存。'
	)}</b></p><p>${uls('要看到这些更改，您可能需要', '要看到這些更改，您可能需要')}<a href="${mw.util.getUrl(
		'QW:BYPASS'
	)}" title="QW:BYPASS"><b>${uls('绕过浏览器缓存', '繞過瀏覽器快取')}</b></a>。</p>`;
	if (Morebits.status.root) {
		Morebits.status.root.appendChild(noticebox);
		const noticeclear = document.createElement('br');
		noticeclear.style.clear = 'both';
		Morebits.status.root.appendChild(noticeclear);
	}
};
</script>

<template>
	<div class="tw-config-toc toc">
		<div class="toctitle">
			<h2>{{ uls('目录 ', '目錄 ') }}</h2>
			<span class="toctoggle">
				[<a class="internal" href="#tw-tocshowhide" @click.prevent="tocVisible = !tocVisible">{{
					tocVisible ? uls('隐藏', '隱藏') : uls('显示', '顯示')
				}}</a
				>]
			</span>
		</div>
		<ul v-if="tocVisible">
			<li v-for="section in sections" :key="section.module" class="toclevel-1">
				<a :href="`#${section.module}`">{{ section.title }}</a>
			</li>
		</ul>
	</div>
	<div class="tw-config-panel">
		<div v-for="section in sections" :key="section.module" class="tw-config-section">
			<h4 :id="section.module">{{ section.title }}</h4>
			<div v-for="pref in section.preferences" :key="pref.name" class="tw-config-pref">
				<cdx-checkbox
					v-if="pref.type === 'boolean'"
					class="tw-config-control tw-config-boolean"
					:model-value="getBoolean(pref.name)"
					@update:model-value="setBoolean(pref.name, $event)"
				>
					{{ pref.label }}
				</cdx-checkbox>
				<template v-else-if="pref.type === 'string' || pref.type === 'integer'">
					<label class="tw-config-label" :for="`tw-config-${pref.name}`">{{ pref.label }}：</label>
					<cdx-text-input
						:id="`tw-config-${pref.name}`"
						class="tw-config-control"
						:model-value="getString(pref.name)"
						:input-type="pref.type === 'integer' ? 'number' : 'text'"
						@update:model-value="setString(pref.name, $event)"
					/>
				</template>
				<template v-else-if="pref.type === 'enum'">
					<label class="tw-config-label" :for="`tw-config-${pref.name}`">{{ pref.label }}：</label>
					<cdx-select
						:id="`tw-config-${pref.name}`"
						class="tw-config-control"
						:selected="getString(pref.name)"
						:menu-items="enumItems(pref)"
						@update:selected="setString(pref.name, $event)"
					/>
				</template>
				<template v-else-if="pref.type === 'set'">
					<span class="tw-config-label">{{ pref.label }}：</span>
					<span class="tw-config-control tw-config-set">
						<cdx-checkbox
							v-for="item in setOrder(pref)"
							:key="item"
							:model-value="getSet(pref.name)"
							:input-value="item"
							:name="`twinkle-config-${pref.name}`"
							@update:model-value="updateSet(pref.name, item, $event)"
						>
							{{ pref.setValues?.[item] ?? item }}
						</cdx-checkbox>
					</span>
				</template>
				<template v-else-if="pref.type === 'customList'">
					<label class="tw-config-label" :for="`tw-config-${pref.name}`">{{ pref.label }}：</label>
					<cdx-button :id="`tw-config-${pref.name}`" class="tw-config-control" @click="openListDialog(pref)">
						{{ editItemsLabel }}
					</cdx-button>
				</template>
				<div class="tw-config-side">
					<!-- eslint-disable-next-line vue/no-v-html -- content comes from helptipHtml (already sanitized by helptipHtml or explicitly appended elements) -->
					<div v-if="pref.helptip" class="tw-config-helptip" v-html="helptipHtml(pref.helptip)"></div>
					<span class="tw-config-reset">
						<a href="#tw-reset" @click.prevent="resetPref(pref)">{{ resetLabel }}</a>
					</span>
				</div>
			</div>
		</div>
	</div>
	<div class="tw-config-buttonpane">
		<cdx-button action="progressive" weight="primary" :disabled="submitting" @click="submit">
			{{ saveLabel }}
		</cdx-button>
		<span class="plainlinks">
			<a href="#tw-reset-all" @click.prevent="resetAll">{{ restoreDefaultsLabel }}</a>
		</span>
	</div>
	<tw-status ref="statusRef" />
	<tw-config-list-dialog
		v-if="listPref"
		v-model:open="listDialogOpen"
		:title="listPref.label ?? ''"
		:value-title="listPref.customListValueTitle ?? uls('数值', '數值')"
		:label-title="listPref.customListLabelTitle ?? uls('标签', '標籤')"
		:initial-rows="getCustom(listPref.name)"
		:default-rows="Array.isArray(defaults[listPref.name]) ? (defaults[listPref.name] as CustomConfigRow[]) : []"
		@save="onListSave"
	/>
</template>

<style scoped lang="less">
.tw-config-toc {
	margin-left: 0.4em;
}

.tw-config-pref {
	display: grid;
	grid-template-columns: minmax(10em, 22em) minmax(12em, 1fr) minmax(8em, auto);
	align-items: center;
	gap: 0.5em 0.8em;
	padding: 0.4em 0;
	border-bottom: 1px solid var(--border-color-subtle, #c8ccd1);

	&:nth-child(odd) {
		background-color: rgb(128 128 128 / 0.1);
	}
}

.tw-config-label {
	text-align: right;
}

.tw-config-boolean {
	grid-column: 1 / 3;
}

.tw-config-side {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 0.25em;
}

.tw-config-helptip {
	font-size: 90%;
	color: var(--color-subtle, #54595d);
}

.tw-config-reset {
	text-align: right;
	font-size: 90%;
}

.tw-config-set {
	display: flex;
	flex-wrap: wrap;
	gap: 0 0.7em;

	:deep(.cdx-checkbox) {
		margin-right: 0.4em;
	}
}

.tw-config-section h4 {
	border-bottom: 1px solid #808080;
	margin: 0.8em 0 0.2em;
}

.tw-config-buttonpane {
	display: flex;
	align-items: baseline;
	gap: 2em;
	margin-top: 1em;
	padding: 0.5em;
	background-color: #bccadf;
}

@media (max-width: 767px) {
	.tw-config-pref {
		grid-template-columns: 1fr auto;
	}

	.tw-config-label {
		text-align: left;
		grid-column: 1 / -1;
	}

	.tw-config-control,
	.tw-config-boolean {
		grid-column: 1;
	}

	.tw-config-side {
		grid-column: 1 / -1;
		align-items: flex-start;
	}
}
</style>

<style lang="less">
/**
 * The additional box on user skin.js and twinkleoptions.js pages
 * see [[H:TW/PREF]]
 *
 * Global (not scoped): the notice boxes are created by twinkleconfig.ts
 * outside this component's tree, and this component is mounted inside
 * #twinkle-config-content on the twinkleoptions.js page.
 */
#twinkle-config {
	&-headerbox {
		padding: 0.6em;
		border: 1px #f60 solid;
		margin: 0.5em auto;
		background: #fed;
		text-align: center;

		&.config-twopt-box {
			width: 80%;
			border-width: 2px;
			font-weight: bold;
		}

		&.config-userskin-box {
			/* Skin-specific JS */
			width: 60%;
		}
	}

	&-content input[type='checkbox'] {
		margin-right: 2px;
	}
}
</style>
