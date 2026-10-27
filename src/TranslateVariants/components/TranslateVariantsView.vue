<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {CdxButton} from '@wikimedia/codex';
import {Langs} from '../modules/constant';
import {TranslationResult} from '../modules/types';
import {loadPageContent} from '../modules/loadPageContent';
import {notify} from '../modules/util/notify';
import {translate} from '../modules/util/translate';

const props = defineProps<{
	wgPageName: string;
	langQueue: Langs[];
}>();

const results = ref<TranslationResult[]>([]);
const getPageUrl = (targetTitle: string, action?: string): string =>
	action ? mw.util.getUrl(targetTitle, {action}) : mw.util.getUrl(targetTitle);

onMounted((): void => {
	void loadPageContent({
		wgPageName: props.wgPageName,
		langQueue: props.langQueue,
		results: results.value,
	});
});

const publish = async (result: TranslationResult): Promise<void> => {
	const save = result.save;
	if (!save) {
		return;
	}

	delete result.save;
	try {
		await save();
		notify(result.successMessage ?? '', 'success');
	} catch (error) {
		notify(result.errorMessage?.(error) ?? String(error));
	}
};

const publishAll = (): void => {
	const publishableResults = results.value.filter(({save}) => save);
	if (!publishableResults.length) {
		notify(translate('没有任何可以发布的更改', '沒有任何變更可發佈'));
		return;
	}

	if (!confirm(translate('发布$1个更改？', '發佈$1個變更？').replace('$1', `${publishableResults.length}`))) {
		notify(translate('已取消发布', '已取消發佈'), 'warn');
		return;
	}

	for (const result of publishableResults) {
		void publish(result);
	}
};
</script>

<template>
	<div id="TranslateVariants">
		<div class="submit-all">
			<cdx-button action="progressive" weight="primary" @click="publishAll">
				{{ translate('发布所有更改', '發佈所有變更') }}
			</cdx-button>
		</div>
		<div class="warning">
			{{
				translate(
					'提醒：TranslateVariants工具使用IT及MediaWiki转换组进行自动转换，请确认转换结果是否正确！',
					'提醒：TranslateVariants工具使用IT及MediaWiki轉換組進行自動轉換，請確認轉換結果是否正確！'
				)
			}}
		</div>
		<template v-for="result in results" :key="result.lang">
			<hr />
			<div v-if="result.completed">
				<div>
					<a :href="getPageUrl(result.targetTitle)">{{ result.pageName }}</a>
					（<a :href="getPageUrl(result.targetTitle, 'edit')">{{ result.editLabel }}</a
					>）
					<cdx-button v-if="result.save" class="publish-changes" @click="publish(result)">
						{{ result.publishLabel }}
					</cdx-button>
					<span v-else-if="result.noChanges" class="no-changes">
						{{ translate('无更改', '無變更') }}
					</span>
				</div>
				<pre v-if="result.missing">{{ result.content }}</pre>
				<table v-else-if="result.diff" class="diff">
					<colgroup>
						<col class="diff-marker" />
						<col class="diff-content" />
						<col class="diff-marker" />
						<col class="diff-content" />
					</colgroup>
					<!-- The revision diff is HTML returned by MediaWiki's parse API. -->
					<!-- eslint-disable-next-line vue/no-v-html -->
					<tbody v-html="result.diff"></tbody>
				</table>
			</div>
		</template>
	</div>
</template>

<style scoped lang="less">
.submit-all {
	text-align: right;
}

.publish-changes,
.no-changes {
	float: right;
}

.warning {
	color: #f00;
}
</style>
