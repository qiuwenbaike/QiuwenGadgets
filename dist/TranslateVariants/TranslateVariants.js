/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Xiplus/js/TranslateVariants}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/TranslateVariants}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */
/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */
/* <nowiki> */

(() => {

"use strict";

// dist/TranslateVariants/TranslateVariants.js
var import_vue = require("vue");
var import_vue2 = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/TranslateVariants/options.json
var version = "3.0";
//! src/TranslateVariants/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)(`TranslateVariants/${version}`);
//! src/TranslateVariants/modules/util/notify.ts
var notify = (message, type = "error") => {
  void mw.notify(message, {
    tag: "TranslateVariants",
    type
  });
};
//! src/TranslateVariants/modules/preparePageContent.ts
var preparePageContent = (content) => content.replace(/[\s#&'*:<>[\]_{|}]/gim, (character) => `&#${character.codePointAt(0)};`).replace(/(&#91;&#91;)((?:(?!&#124;)(?!&#93;).)+?)(&#124;(?:(?!&#93;).)+?&#93;&#93;)/g, "$1-{$2}-$3").replace(/-&#123;(.+?)&#125;-/g, (match) => match.replace("-&#123;", "-{").replace("-&#123;", "-{").replace("&#125;-", "}-").replace(/&#124;/g, "|").replace(/&#32;/g, " ").replace(/&#61;/g, "=").replace(/&#62;/g, ">").replace(/&#58;/g, ":"));
//! src/TranslateVariants/modules/constant.ts
var langs = ["zh", "zh-hans", "zh-cn", "zh-my", "zh-sg", "zh-hant", "zh-hk", "zh-mo", "zh-tw"];
var nameOfLangs = {
  zh: "原始",
  "zh-hans": "简体",
  "zh-cn": "中国大陆简体",
  "zh-my": "马来西亚简体",
  "zh-sg": "新加坡简体",
  "zh-hant": "繁體",
  "zh-hk": "中國香港繁體",
  "zh-mo": "中國澳門繁體",
  "zh-tw": "中國臺灣繁體"
};
//! src/TranslateVariants/modules/util/translate.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var translate = (simplified, traditional, en) => (0, import_ext_gadget2.localize)({
  en: en ?? simplified,
  "zh-hans": simplified ?? traditional,
  "zh-hant": traditional ?? simplified
});
//! src/TranslateVariants/modules/processTranslate.ts
var processTranslate = async ({
  pageContent,
  langQueue,
  basePageName,
  results,
  summary
}) => {
  for (const lang of langQueue) {
    const targetTitle = lang === "zh" ? basePageName : `${basePageName}/${lang}`;
    const result = {
      lang,
      targetTitle,
      pageName: `${lang}（${nameOfLangs[lang]}）`,
      editLabel: translate("编", "編"),
      completed: false,
      missing: false,
      noChanges: false
    };
    results.push(result);
    try {
      var _parsedContent$queryS;
      const contentID = "TranslateVariants-content";
      let content;
      try {
        content = await api.parse(`{{NoteTA|G1=IT|G2=MediaWiki}}<div id="${contentID}">${pageContent}</div>`, {
          action: "parse",
          uselang: lang
        });
      } catch (error) {
        notify(translate("解析$1时发生错误：", "解析$1時發生錯誤：").replace("$1", lang) + error);
        continue;
      }
      const parsedContent = document.createElement("div");
      parsedContent.innerHTML = content;
      const newPageContent = ((_parsedContent$queryS = parsedContent.querySelector(`#${contentID}`)) === null || _parsedContent$queryS === void 0 ? void 0 : _parsedContent$queryS.textContent) ?? "";
      const queryDiffParams = {
        action: "query",
        format: "json",
        formatversion: "2",
        titles: targetTitle,
        prop: "revisions",
        rvdifftotext: newPageContent
      };
      let data;
      try {
        data = await api.get(queryDiffParams);
      } catch (error) {
        notify(translate("获取$1差异时发生错误：", "取得$1差異時發生錯誤：").replace("$1", lang) + error);
        continue;
      }
      const [page] = data["query"].pages;
      result.completed = true;
      if (page.missing) {
        result.missing = true;
        result.content = newPageContent;
        result.publishLabel = translate("发布页面", "發佈頁面");
        result.save = async () => {
          await api.create(targetTitle, {
            summary
          }, newPageContent);
        };
        result.successMessage = translate("已编辑 ", "已編輯 ") + targetTitle;
        result.errorMessage = (error) => translate("编辑", "編輯 ") + targetTitle + translate(" 发生错误：", " 發生錯誤：") + error;
        continue;
      }
      const diff = page.revisions[0].diff.body;
      if (diff === "") {
        result.noChanges = true;
      } else {
        result.publishLabel = translate("发布更改", "發佈變更");
        result.save = async () => {
          await api.edit(targetTitle, () => ({
            summary,
            text: newPageContent,
            nocreate: false
          }));
        };
        result.successMessage = translate("已编辑", "已編輯 ") + targetTitle;
        result.errorMessage = (error) => translate("编辑$1发生错误：", "編輯$1發生錯誤：").replace("$1", targetTitle) + error;
        result.diff = diff;
      }
    } catch (error) {
      notify(translate("处理$1时发生错误：", "處理$1時發生錯誤：").replace("$1", lang) + error);
    }
  }
};
//! src/TranslateVariants/modules/loadPageContent.ts
var loadPageContent = async ({
  wgPageName,
  langQueue,
  results
}) => {
  const summary = `${translate("自动转换变体自", "自動轉換變體自")}${"[[$1]]".replace(/\$1/g, wgPageName)} ([[MediaWiki:Gadget-TranslateVariants.js|TranslateVariants]])`;
  const basePageName = wgPageName.replace(/\/zh$/, "");
  const queryContentParams = {
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "revisions",
    titles: wgPageName,
    curtimestamp: true,
    rvprop: ["content", "timestamp"]
  };
  try {
    var _data$query;
    const data = await api.get(queryContentParams);
    const pages = (_data$query = data["query"]) === null || _data$query === void 0 ? void 0 : _data$query.pages;
    if (!pages) {
      throw new Error("unknown");
    }
    const [page] = pages;
    if (page.invalid) {
      throw new Error("invalidtitle");
    }
    if (page.missing) {
      throw new Error("nocreate-missing");
    }
    const [{
      content
    }] = page.revisions;
    await processTranslate({
      pageContent: preparePageContent(content),
      langQueue,
      basePageName,
      results,
      summary
    });
  } catch (error) {
    notify(translate("获取页面内容时发生错误：", "取得頁面內容時發生錯誤：") + error);
  }
};
var TranslateVariantsView_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "TranslateVariantsView",
  props: {
    wgPageName: {
      type: String,
      required: true
    },
    langQueue: {
      type: Array,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const results = (0, import_vue2.ref)([]);
    const getPageUrl = (targetTitle, action) => action ? mw.util.getUrl(targetTitle, {
      action
    }) : mw.util.getUrl(targetTitle);
    (0, import_vue2.onMounted)(() => {
      void loadPageContent({
        wgPageName: props.wgPageName,
        langQueue: props.langQueue,
        results: results.value
      });
    });
    const publish = async (result) => {
      const save = result.save;
      if (!save) {
        return;
      }
      delete result.save;
      try {
        await save();
        notify(result.successMessage ?? "", "success");
      } catch (error) {
        var _result$errorMessage;
        notify(((_result$errorMessage = result.errorMessage) === null || _result$errorMessage === void 0 ? void 0 : _result$errorMessage.call(result, error)) ?? String(error));
      }
    };
    const publishAll = () => {
      const publishableResults = results.value.filter(({
        save
      }) => save);
      if (!publishableResults.length) {
        notify(translate("没有任何可以发布的更改", "沒有任何變更可發佈"));
        return;
      }
      if (!confirm(translate("发布$1个更改？", "發佈$1個變更？").replace("$1", `${publishableResults.length}`))) {
        notify(translate("已取消发布", "已取消發佈"), "warn");
        return;
      }
      for (const result of publishableResults) {
        void publish(result);
      }
    };
    const __returned__ = {
      props,
      results,
      getPageUrl,
      publish,
      publishAll,
      get CdxButton() {
        return import_codex.CdxButton;
      },
      get translate() {
        return translate;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue3 = require("vue");
var _hoisted_1 = {
  id: "TranslateVariants"
};
var _hoisted_2 = {
  class: "submit-all"
};
var _hoisted_3 = {
  class: "warning"
};
var _hoisted_4 = {
  key: 0
};
var _hoisted_5 = ["href"];
var _hoisted_6 = ["href"];
var _hoisted_7 = {
  key: 1,
  class: "no-changes"
};
var _hoisted_8 = {
  key: 0
};
var _hoisted_9 = {
  key: 1,
  class: "diff"
};
var _hoisted_10 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("div", _hoisted_1, [(0, import_vue3.createElementVNode)("div", _hoisted_2, [(0, import_vue3.createVNode)($setup["CdxButton"], {
    action: "progressive",
    weight: "primary",
    onClick: $setup.publishAll
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($setup.translate("发布所有更改", "發佈所有變更")),
      1
      /* TEXT */
    )]),
    _: 1
    /* STABLE */
  })]), (0, import_vue3.createElementVNode)(
    "div",
    _hoisted_3,
    (0, import_vue3.toDisplayString)($setup.translate("提醒：TranslateVariants工具使用IT及MediaWiki转换组进行自动转换，请确认转换结果是否正确！", "提醒：TranslateVariants工具使用IT及MediaWiki轉換組進行自動轉換，請確認轉換結果是否正確！")),
    1
    /* TEXT */
  ), ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
    import_vue3.Fragment,
    null,
    (0, import_vue3.renderList)($setup.results, (result) => {
      return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
        import_vue3.Fragment,
        {
          key: result.lang
        },
        [_cache[3] || (_cache[3] = (0, import_vue3.createElementVNode)(
          "hr",
          null,
          null,
          -1
          /* CACHED */
        )), result.completed ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("div", _hoisted_4, [(0, import_vue3.createElementVNode)("div", null, [(0, import_vue3.createElementVNode)("a", {
          href: $setup.getPageUrl(result.targetTitle)
        }, (0, import_vue3.toDisplayString)(result.pageName), 9, _hoisted_5), _cache[0] || (_cache[0] = (0, import_vue3.createTextVNode)(
          " （",
          -1
          /* CACHED */
        )), (0, import_vue3.createElementVNode)("a", {
          href: $setup.getPageUrl(result.targetTitle, "edit")
        }, (0, import_vue3.toDisplayString)(result.editLabel), 9, _hoisted_6), _cache[1] || (_cache[1] = (0, import_vue3.createTextVNode)(
          "） ",
          -1
          /* CACHED */
        )), result.save ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxButton"], {
          key: 0,
          class: "publish-changes",
          onClick: ($event) => $setup.publish(result)
        }, {
          default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
            (0, import_vue3.toDisplayString)(result.publishLabel),
            1
            /* TEXT */
          )]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["onClick"])) : result.noChanges ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
          "span",
          _hoisted_7,
          (0, import_vue3.toDisplayString)($setup.translate("无更改", "無變更")),
          1
          /* TEXT */
        )) : (0, import_vue3.createCommentVNode)("v-if", true)]), result.missing ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
          "pre",
          _hoisted_8,
          (0, import_vue3.toDisplayString)(result.content),
          1
          /* TEXT */
        )) : result.diff ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("table", _hoisted_9, [_cache[2] || (_cache[2] = (0, import_vue3.createElementVNode)(
          "colgroup",
          null,
          [(0, import_vue3.createElementVNode)("col", {
            class: "diff-marker"
          }), (0, import_vue3.createElementVNode)("col", {
            class: "diff-content"
          }), (0, import_vue3.createElementVNode)("col", {
            class: "diff-marker"
          }), (0, import_vue3.createElementVNode)("col", {
            class: "diff-content"
          })],
          -1
          /* CACHED */
        )), (0, import_vue3.createCommentVNode)(" The revision diff is HTML returned by MediaWiki's parse API. "), (0, import_vue3.createCommentVNode)(" eslint-disable-next-line vue/no-v-html "), (0, import_vue3.createElementVNode)("tbody", {
          innerHTML: result.diff
        }, null, 8, _hoisted_10)])) : (0, import_vue3.createCommentVNode)("v-if", true)])) : (0, import_vue3.createCommentVNode)("v-if", true)],
        64
        /* STABLE_FRAGMENT */
      );
    }),
    128
    /* KEYED_FRAGMENT */
  ))]);
}
//! src/TranslateVariants/components/TranslateVariantsView.vue
TranslateVariantsView_default.render = render;
TranslateVariantsView_default.__file = "src\\TranslateVariants\\components\\TranslateVariantsView.vue";
TranslateVariantsView_default.__scopeId = "data-v-d8df68b9";
var TranslateVariantsView_default2 = TranslateVariantsView_default;
//! src/TranslateVariants/TranslateVariants.ts
var import_vue4 = require("vue");
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/TranslateVariants/modules/getLangQueue.ts
var getLangQueue = () => {
  const runLangs = prompt(translate("转换以下语言（以逗号隔开）：", "轉換以下語言（以逗號隔開）："), langs.join(","));
  const supportedLangs = new Set(langs);
  const langQueue = [...new Set((runLangs ?? langs.join(",")).split(",").map((lang) => lang.trim()).filter((lang) => supportedLangs.has(lang)))];
  return langQueue;
};
//! src/TranslateVariants/TranslateVariants.ts
void (0, import_ext_gadget3.getBody)().then(($body) => {
  const {
    wgPageName
  } = mw.config.get();
  if (!/^MediaWiki:[^/]+(\/zh)?$/.test(wgPageName)) {
    return;
  }
  const portletId = $body.find("#p-cactions").length ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", translate("转换变体", "轉換變體"));
  if (element) {
    element.addEventListener("click", () => {
      var _document$querySelect;
      element.remove();
      const langQueue = getLangQueue();
      const root = document.createElement("div");
      (_document$querySelect = document.querySelector("#bodyContent")) === null || _document$querySelect === void 0 || _document$querySelect.prepend(root);
      (0, import_vue4.createApp)(TranslateVariantsView_default2, {
        wgPageName,
        langQueue
      }).mount(root);
    });
  }
});

})();

/* </nowiki> */

