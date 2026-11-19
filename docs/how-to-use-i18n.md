# 使用 i18n 小工具

`ext.gadget.i18n` 为小工具提供多语言/中文变体消息选择。推荐使用 `localize`：它接收候选表，并按当前 MediaWiki 用户语言环境选择。

## 在仓库内使用

```ts
import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	// localize 会匹配当前语言和接收对象中的键。假设已定义 zh、en 和 ja：
	// - 当页面语言（wgUserLanguage ?? wgContentLanguage）为中文/英语/日语时，返回页面语言对应的值；
	// - 当页面语言为法语、浏览器语言为中文/英语/日语时，返回浏览器语言对应的值；
	// - 当页面语言为法语且不存在浏览器语言对应的键时，返回默认语言（en）对应的值；
	// - 若默认语言也未定义，则返回空字符串。
	return {
		Cancel: localize({
			en: 'Cancel',
			ja: 'キャンセル',
			zh: '取消',
		}),
		QiuWen: localize({
			en: 'QiuWen',
			ja: 'ちゅううん',
			'zh-cn': '求闻',
			'zh-hk': '求聞',
		}),
		LongText: localize({
			en: 'This is a very long text',
			ja: 'これは非常に長いテキストです',
			'zh-hans': '这是一段非常长的文本',
			'zh-hant': '這是一段非常長的文字',
		}),
	};
};

const i18nMessages = getI18nMessages();
const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

getMessage('Cancel');
// en: Cancel, ja: キャンセル, zh: 取消, zh-hans: 取消, zh-hant: 取消,
// zh-cn: 取消, zh-hk: 取消, zh-tw: 取消
getMessage('QiuWen');
// en: QiuWen, ja: ちゅううん, zh: 求闻, zh-hans: 求闻, zh-hant: 求聞,
// zh-cn: 求闻, zh-hk: 求聞, zh-tw: 求聞
getMessage('LongText');
// en: This is a very long text
// ja: これは非常に長いテキストです
// zh: 这是一段非常长的文本
// zh-hans: 这是一段非常长的文本
// zh-hant: 這是一段非常長的文字
// zh-cn: 这是一段非常长的文本
// zh-hk: 這是一段非常長的文字
// zh-tw: 這是一段非常長的文字
```

候选表的键定义见 [`src/i18n/modules/types.d.ts`](../src/i18n/modules/types.d.ts)，也可以直接添加其他符合 RFC 5646 的语言代码。

## 已废弃接口

以下接口仅为兼容旧脚本保留，新代码请使用 `localize`：

- `content`：按 `wgContentLanguage` 选择；
- `vary`：按 `wgUserVariant ?? wgContentLanguage` 选择；
- `wgUCS`、`wgULS`、`wgUVS`：`content` / `localize` / `vary` 的位置参数版本。

`wgULS('求闻', '求聞')` 应迁移为：

```ts
localize({
	'zh-hans': '求闻',
	'zh-hant': '求聞',
	en: '求闻',
});
```

`wgUCS` 和 `wgUVS` 在仓库内已无调用；`wgULS` 也已完成调用点迁移。三者仍会挂载到 `window`，并从模块导出以兼容站外旧脚本，但不应在新代码中使用。

## 在非 MediaWiki 命名空间中使用

非 MediaWiki 命名空间的脚本可以先加载模块：

```ts
mw.loader.using('ext.gadget.i18n').then((require) => {
	const {localize} = require('ext.gadget.i18n');
});
```
