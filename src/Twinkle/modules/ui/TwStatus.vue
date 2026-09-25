<script setup lang="ts">
import {nextTick, onBeforeUnmount, onMounted, ref, watch} from 'vue';
import {CdxMessage} from '@wikimedia/codex';

type MessageType = 'notice' | 'success' | 'warning' | 'error';

interface StatusMessage {
	type: MessageType;
	html: string;
}

/**
 * Bridge between Morebits.status and Codex:
 * Morebits.status writes plain `<div class="morebits_status_*">` lines into the
 * hidden raw container; this component mirrors them into CdxMessage banners,
 * preserving any embedded links.
 */
const raw = ref<HTMLElement | null>(null);
const messagesRoot = ref<HTMLElement | null>(null);
const messages = ref<StatusMessage[]>([]);
let observer: MutationObserver | null = null;

const sync = () => {
	if (!raw.value) {
		return;
	}
	const items: StatusMessage[] = [];
	for (const node of raw.value.children) {
		const element = node as HTMLElement;
		const type: MessageType = element.className.includes('morebits_status_warn')
			? 'warning'
			: element.className.includes('morebits_status_error')
				? 'error'
				: element.className.includes('morebits_status_info')
					? 'success'
					: 'notice';
		items.push({
			type,
			html: element.innerHTML,
		});
	}
	messages.value = items;
};

type JQueryLike = {
	_data?: (element: Element, key: string) => {click?: unknown[]} | undefined;
};

// Whether the original node carries a click handler (native onclick or jQuery)
const hasClickHandler = (element: Element): boolean => {
	if (typeof (element as HTMLAnchorElement).onclick === 'function') {
		return true;
	}
	// jQuery keeps handlers in its internal event cache
	const $ = (window as unknown as {$?: JQueryLike}).$;
	const events = $?._data?.(element, 'events');
	return Array.isArray(events?.click) && events.click.length > 0;
};

// innerHTML copies carry no event listeners, so action links injected by
// Morebits modules (e.g. the "unlink this page" link shown after a deletion)
// would be inert inside the mirror. Forward clicks to the original nodes,
// which stay alive in the hidden container.
const forwardActionLinks = () => {
	if (!raw.value || !messagesRoot.value) {
		return;
	}
	const originals = raw.value.children;
	const rendered = messagesRoot.value.children;
	for (const [index, messageElement] of Array.from(rendered).entries()) {
		const originalLinks = originals[index]?.querySelectorAll('a') ?? [];
		const renderedLinks = messageElement.querySelectorAll('a');
		for (const [linkIndex, link] of Array.from(renderedLinks).entries()) {
			const original = originalLinks[linkIndex];
			if (!original || link.dataset['twForwarded'] === '1') {
				continue;
			}
			if (!hasClickHandler(original)) {
				continue;
			}
			link.dataset['twForwarded'] = '1';
			// Only forward action links (href="#"); real hyperlinks keep working
			if (link.getAttribute('href') === '#') {
				link.addEventListener('click', (event) => {
					event.preventDefault();
					original.click();
				});
			}
		}
	}
};

// Messages are rendered at the bottom of the dialog body; after a submission
// the viewport would otherwise stay put on the (long) form. Anchor the
// scrolled position to the status area whenever messages appear or update.
watch(messages, async () => {
	await nextTick();
	forwardActionLinks();
	if (messages.value.length > 0) {
		messagesRoot.value?.scrollIntoView({block: 'start'});
	}
});

onMounted(() => {
	if (raw.value) {
		observer = new MutationObserver(sync);
		observer.observe(raw.value, {childList: true, subtree: true});
	}
});

onBeforeUnmount(() => {
	observer?.disconnect();
});

const exposed = {
	getStatusRoot: () => raw.value,
};
defineExpose(exposed);
</script>

<template>
	<div ref="raw" hidden></div>
	<div ref="messagesRoot" class="tw-status-messages">
		<cdx-message v-for="(message, index) in messages" :key="index" :type="message.type">
			<!-- eslint-disable-next-line vue/no-v-html -- content comes from Morebits.status (already sanitized by Morebits.createHtml or explicitly appended elements) -->
			<span v-html="message.html"></span>
		</cdx-message>
	</div>
</template>

<style scoped lang="less">
.tw-status-messages {
	display: flex;
	flex-direction: column;
	gap: 4px;
	margin-top: 8px;
}
</style>
