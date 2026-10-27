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
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var import_vue = require("vue");
var import_vue2 = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/TranslateVariants/options.json
var version = "3.0";
//! src/TranslateVariants/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("TranslateVariants/".concat(version));
//! src/TranslateVariants/modules/util/notify.ts
var notify = (message, type = "error") => {
  void mw.notify(message, {
    tag: "TranslateVariants",
    type
  });
};
//! src/TranslateVariants/modules/preparePageContent.ts
var preparePageContent = (content) => content.replace(/[\s#&'*:<>[\]_{|}]/gim, (character) => "&#".concat(character.codePointAt(0), ";")).replace(/(&#91;&#91;)((?:(?!&#124;)(?!&#93;).)+?)(&#124;(?:(?!&#93;).)+?&#93;&#93;)/g, "$1-{$2}-$3").replace(/-&#123;(.+?)&#125;-/g, (match) => match.replace("-&#123;", "-{").replace("-&#123;", "-{").replace("&#125;-", "}-").replace(/&#124;/g, "|").replace(/&#32;/g, " ").replace(/&#61;/g, "=").replace(/&#62;/g, ">").replace(/&#58;/g, ":"));
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
  en: en !== null && en !== void 0 ? en : simplified,
  "zh-hans": simplified !== null && simplified !== void 0 ? simplified : traditional,
  "zh-hant": traditional !== null && traditional !== void 0 ? traditional : simplified
});
//! src/TranslateVariants/modules/processTranslate.ts
var processTranslate = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* ({
    pageContent,
    langQueue,
    basePageName,
    results,
    summary
  }) {
    var _iterator = _createForOfIteratorHelper(langQueue), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const lang = _step.value;
        const targetTitle = lang === "zh" ? basePageName : "".concat(basePageName, "/").concat(lang);
        const result = {
          lang,
          targetTitle,
          pageName: "".concat(lang, "（").concat(nameOfLangs[lang], "）"),
          editLabel: translate("编", "編"),
          completed: false,
          missing: false,
          noChanges: false
        };
        results.push(result);
        try {
          var _parsedContent$queryS, _parsedContent$queryS2;
          const contentID = "TranslateVariants-content";
          let content;
          try {
            content = yield api.parse('{{NoteTA|G1=IT|G2=MediaWiki}}<div id="'.concat(contentID, '">').concat(pageContent, "</div>"), {
              action: "parse",
              uselang: lang
            });
          } catch (error) {
            notify(translate("解析$1时发生错误：", "解析$1時發生錯誤：").replace("$1", lang) + error);
            continue;
          }
          const parsedContent = document.createElement("div");
          parsedContent.innerHTML = content;
          const newPageContent = (_parsedContent$queryS = (_parsedContent$queryS2 = parsedContent.querySelector("#".concat(contentID))) === null || _parsedContent$queryS2 === void 0 ? void 0 : _parsedContent$queryS2.textContent) !== null && _parsedContent$queryS !== void 0 ? _parsedContent$queryS : "";
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
            data = yield api.get(queryDiffParams);
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
            result.save = /* @__PURE__ */ _asyncToGenerator(function* () {
              yield api.create(targetTitle, {
                summary
              }, newPageContent);
            });
            result.successMessage = translate("已编辑 ", "已編輯 ") + targetTitle;
            result.errorMessage = (error) => translate("编辑", "編輯 ") + targetTitle + translate(" 发生错误：", " 發生錯誤：") + error;
            continue;
          }
          const diff = page.revisions[0].diff.body;
          if (diff === "") {
            result.noChanges = true;
          } else {
            result.publishLabel = translate("发布更改", "發佈變更");
            result.save = /* @__PURE__ */ _asyncToGenerator(function* () {
              yield api.edit(targetTitle, () => ({
                summary,
                text: newPageContent,
                nocreate: false
              }));
            });
            result.successMessage = translate("已编辑", "已編輯 ") + targetTitle;
            result.errorMessage = (error) => translate("编辑$1发生错误：", "編輯$1發生錯誤：").replace("$1", targetTitle) + error;
            result.diff = diff;
          }
        } catch (error) {
          notify(translate("处理$1时发生错误：", "處理$1時發生錯誤：").replace("$1", lang) + error);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  return function processTranslate2(_x) {
    return _ref.apply(this, arguments);
  };
})();
//! src/TranslateVariants/modules/loadPageContent.ts
var loadPageContent = /* @__PURE__ */ (function() {
  var _ref4 = _asyncToGenerator(function* ({
    wgPageName,
    langQueue,
    results
  }) {
    const summary = "".concat(translate("自动转换变体自", "自動轉換變體自")).concat("[[$1]]".replace(/\$1/g, wgPageName), " ([[MediaWiki:Gadget-TranslateVariants.js|TranslateVariants]])");
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
      const data = yield api.get(queryContentParams);
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
      yield processTranslate({
        pageContent: preparePageContent(content),
        langQueue,
        basePageName,
        results,
        summary
      });
    } catch (error) {
      notify(translate("获取页面内容时发生错误：", "取得頁面內容時發生錯誤：") + error);
    }
  });
  return function loadPageContent2(_x2) {
    return _ref4.apply(this, arguments);
  };
})();
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
    const publish = /* @__PURE__ */ (function() {
      var _ref5 = _asyncToGenerator(function* (result) {
        const save = result.save;
        if (!save) {
          return;
        }
        delete result.save;
        try {
          var _result$successMessag;
          yield save();
          notify((_result$successMessag = result.successMessage) !== null && _result$successMessag !== void 0 ? _result$successMessag : "", "success");
        } catch (error) {
          var _result$errorMessage, _result$errorMessage2;
          notify((_result$errorMessage = (_result$errorMessage2 = result.errorMessage) === null || _result$errorMessage2 === void 0 ? void 0 : _result$errorMessage2.call(result, error)) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : String(error));
        }
      });
      return function publish2(_x3) {
        return _ref5.apply(this, arguments);
      };
    })();
    const publishAll = () => {
      const publishableResults = results.value.filter(({
        save
      }) => save);
      if (!publishableResults.length) {
        notify(translate("没有任何可以发布的更改", "沒有任何變更可發佈"));
        return;
      }
      if (!confirm(translate("发布$1个更改？", "發佈$1個變更？").replace("$1", "".concat(publishableResults.length)))) {
        notify(translate("已取消发布", "已取消發佈"), "warn");
        return;
      }
      var _iterator2 = _createForOfIteratorHelper(publishableResults), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const result = _step2.value;
          void publish(result);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
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
  const langQueue = [...new Set((runLangs !== null && runLangs !== void 0 ? runLangs : langs.join(",")).split(",").map((lang) => lang.trim()).filter((lang) => supportedLangs.has(lang)))];
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZGlzdC9UcmFuc2xhdGVWYXJpYW50cy9zcmMvVHJhbnNsYXRlVmFyaWFudHMvY29tcG9uZW50cy9UcmFuc2xhdGVWYXJpYW50c1ZpZXcudnVlIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9vcHRpb25zLmpzb24iLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvdXRpbC9hcGkudHMiLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvdXRpbC9ub3RpZnkudHMiLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvcHJlcGFyZVBhZ2VDb250ZW50LnRzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9tb2R1bGVzL3V0aWwvdHJhbnNsYXRlLnRzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9tb2R1bGVzL3Byb2Nlc3NUcmFuc2xhdGUudHMiLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvbG9hZFBhZ2VDb250ZW50LnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxUcmFuc2xhdGVWYXJpYW50c1xcY29tcG9uZW50c1xcVHJhbnNsYXRlVmFyaWFudHNWaWV3LnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9jb21wb25lbnRzL1RyYW5zbGF0ZVZhcmlhbnRzVmlldy52dWUiLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLnRzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9tb2R1bGVzL2dldExhbmdRdWV1ZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7b25Nb3VudGVkLCByZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge0NkeEJ1dHRvbn0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge0xhbmdzfSBmcm9tICcuLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7VHJhbnNsYXRpb25SZXN1bHR9IGZyb20gJy4uL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHtsb2FkUGFnZUNvbnRlbnR9IGZyb20gJy4uL21vZHVsZXMvbG9hZFBhZ2VDb250ZW50JztcbmltcG9ydCB7bm90aWZ5fSBmcm9tICcuLi9tb2R1bGVzL3V0aWwvbm90aWZ5JztcbmltcG9ydCB7dHJhbnNsYXRlfSBmcm9tICcuLi9tb2R1bGVzL3V0aWwvdHJhbnNsYXRlJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdHdnUGFnZU5hbWU6IHN0cmluZztcblx0bGFuZ1F1ZXVlOiBMYW5nc1tdO1xufT4oKTtcblxuY29uc3QgcmVzdWx0cyA9IHJlZjxUcmFuc2xhdGlvblJlc3VsdFtdPihbXSk7XG5jb25zdCBnZXRQYWdlVXJsID0gKHRhcmdldFRpdGxlOiBzdHJpbmcsIGFjdGlvbj86IHN0cmluZyk6IHN0cmluZyA9PlxuXHRhY3Rpb24gPyBtdy51dGlsLmdldFVybCh0YXJnZXRUaXRsZSwge2FjdGlvbn0pIDogbXcudXRpbC5nZXRVcmwodGFyZ2V0VGl0bGUpO1xuXG5vbk1vdW50ZWQoKCk6IHZvaWQgPT4ge1xuXHR2b2lkIGxvYWRQYWdlQ29udGVudCh7XG5cdFx0d2dQYWdlTmFtZTogcHJvcHMud2dQYWdlTmFtZSxcblx0XHRsYW5nUXVldWU6IHByb3BzLmxhbmdRdWV1ZSxcblx0XHRyZXN1bHRzOiByZXN1bHRzLnZhbHVlLFxuXHR9KTtcbn0pO1xuXG5jb25zdCBwdWJsaXNoID0gYXN5bmMgKHJlc3VsdDogVHJhbnNsYXRpb25SZXN1bHQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qgc2F2ZSA9IHJlc3VsdC5zYXZlO1xuXHRpZiAoIXNhdmUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRkZWxldGUgcmVzdWx0LnNhdmU7XG5cdHRyeSB7XG5cdFx0YXdhaXQgc2F2ZSgpO1xuXHRcdG5vdGlmeShyZXN1bHQuc3VjY2Vzc01lc3NhZ2UgPz8gJycsICdzdWNjZXNzJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bm90aWZ5KHJlc3VsdC5lcnJvck1lc3NhZ2U/LihlcnJvcikgPz8gU3RyaW5nKGVycm9yKSk7XG5cdH1cbn07XG5cbmNvbnN0IHB1Ymxpc2hBbGwgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHB1Ymxpc2hhYmxlUmVzdWx0cyA9IHJlc3VsdHMudmFsdWUuZmlsdGVyKCh7c2F2ZX0pID0+IHNhdmUpO1xuXHRpZiAoIXB1Ymxpc2hhYmxlUmVzdWx0cy5sZW5ndGgpIHtcblx0XHRub3RpZnkodHJhbnNsYXRlKCfmsqHmnInku7vkvZXlj6/ku6Xlj5HluIPnmoTmm7TmlLknLCAn5rKS5pyJ5Lu75L2V6K6K5pu05Y+v55m85L2IJykpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghY29uZmlybSh0cmFuc2xhdGUoJ+WPkeW4gyQx5Liq5pu05pS577yfJywgJ+eZvOS9iCQx5YCL6K6K5pu077yfJykucmVwbGFjZSgnJDEnLCBgJHtwdWJsaXNoYWJsZVJlc3VsdHMubGVuZ3RofWApKSkge1xuXHRcdG5vdGlmeSh0cmFuc2xhdGUoJ+W3suWPlua2iOWPkeW4gycsICflt7Llj5bmtojnmbzkvYgnKSwgJ3dhcm4nKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IHJlc3VsdCBvZiBwdWJsaXNoYWJsZVJlc3VsdHMpIHtcblx0XHR2b2lkIHB1Ymxpc2gocmVzdWx0KTtcblx0fVxufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxkaXYgaWQ9XCJUcmFuc2xhdGVWYXJpYW50c1wiPlxuXHRcdDxkaXYgY2xhc3M9XCJzdWJtaXQtYWxsXCI+XG5cdFx0XHQ8Y2R4LWJ1dHRvbiBhY3Rpb249XCJwcm9ncmVzc2l2ZVwiIHdlaWdodD1cInByaW1hcnlcIiBAY2xpY2s9XCJwdWJsaXNoQWxsXCI+XG5cdFx0XHRcdHt7IHRyYW5zbGF0ZSgn5Y+R5biD5omA5pyJ5pu05pS5JywgJ+eZvOS9iOaJgOacieiuiuabtCcpIH19XG5cdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cIndhcm5pbmdcIj5cblx0XHRcdHt7XG5cdFx0XHRcdHRyYW5zbGF0ZShcblx0XHRcdFx0XHQn5o+Q6YaS77yaVHJhbnNsYXRlVmFyaWFudHPlt6Xlhbfkvb/nlKhJVOWPik1lZGlhV2lraei9rOaNoue7hOi/m+ihjOiHquWKqOi9rOaNou+8jOivt+ehruiupOi9rOaNoue7k+aenOaYr+WQpuato+ehru+8gScsXG5cdFx0XHRcdFx0J+aPkOmGku+8mlRyYW5zbGF0ZVZhcmlhbnRz5bel5YW35L2/55SoSVTlj4pNZWRpYVdpa2novYnmj5vntYTpgLLooYzoh6rli5XovYnmj5vvvIzoq4vnorroqo3ovYnmj5vntZDmnpzmmK/lkKbmraPnorrvvIEnXG5cdFx0XHRcdClcblx0XHRcdH19XG5cdFx0PC9kaXY+XG5cdFx0PHRlbXBsYXRlIHYtZm9yPVwicmVzdWx0IGluIHJlc3VsdHNcIiA6a2V5PVwicmVzdWx0LmxhbmdcIj5cblx0XHRcdDxociAvPlxuXHRcdFx0PGRpdiB2LWlmPVwicmVzdWx0LmNvbXBsZXRlZFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxhIDpocmVmPVwiZ2V0UGFnZVVybChyZXN1bHQudGFyZ2V0VGl0bGUpXCI+e3sgcmVzdWx0LnBhZ2VOYW1lIH19PC9hPlxuXHRcdFx0XHRcdO+8iDxhIDpocmVmPVwiZ2V0UGFnZVVybChyZXN1bHQudGFyZ2V0VGl0bGUsICdlZGl0JylcIj57eyByZXN1bHQuZWRpdExhYmVsIH19PC9hXG5cdFx0XHRcdFx0Pu+8iVxuXHRcdFx0XHRcdDxjZHgtYnV0dG9uIHYtaWY9XCJyZXN1bHQuc2F2ZVwiIGNsYXNzPVwicHVibGlzaC1jaGFuZ2VzXCIgQGNsaWNrPVwicHVibGlzaChyZXN1bHQpXCI+XG5cdFx0XHRcdFx0XHR7eyByZXN1bHQucHVibGlzaExhYmVsIH19XG5cdFx0XHRcdFx0PC9jZHgtYnV0dG9uPlxuXHRcdFx0XHRcdDxzcGFuIHYtZWxzZS1pZj1cInJlc3VsdC5ub0NoYW5nZXNcIiBjbGFzcz1cIm5vLWNoYW5nZXNcIj5cblx0XHRcdFx0XHRcdHt7IHRyYW5zbGF0ZSgn5peg5pu05pS5JywgJ+eEoeiuiuabtCcpIH19XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHByZSB2LWlmPVwicmVzdWx0Lm1pc3NpbmdcIj57eyByZXN1bHQuY29udGVudCB9fTwvcHJlPlxuXHRcdFx0XHQ8dGFibGUgdi1lbHNlLWlmPVwicmVzdWx0LmRpZmZcIiBjbGFzcz1cImRpZmZcIj5cblx0XHRcdFx0XHQ8Y29sZ3JvdXA+XG5cdFx0XHRcdFx0XHQ8Y29sIGNsYXNzPVwiZGlmZi1tYXJrZXJcIiAvPlxuXHRcdFx0XHRcdFx0PGNvbCBjbGFzcz1cImRpZmYtY29udGVudFwiIC8+XG5cdFx0XHRcdFx0XHQ8Y29sIGNsYXNzPVwiZGlmZi1tYXJrZXJcIiAvPlxuXHRcdFx0XHRcdFx0PGNvbCBjbGFzcz1cImRpZmYtY29udGVudFwiIC8+XG5cdFx0XHRcdFx0PC9jb2xncm91cD5cblx0XHRcdFx0XHQ8IS0tIFRoZSByZXZpc2lvbiBkaWZmIGlzIEhUTUwgcmV0dXJuZWQgYnkgTWVkaWFXaWtpJ3MgcGFyc2UgQVBJLiAtLT5cblx0XHRcdFx0XHQ8IS0tIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2dWUvbm8tdi1odG1sIC0tPlxuXHRcdFx0XHRcdDx0Ym9keSB2LWh0bWw9XCJyZXN1bHQuZGlmZlwiPjwvdGJvZHk+XG5cdFx0XHRcdDwvdGFibGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3RlbXBsYXRlPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbi5zdWJtaXQtYWxsIHtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wdWJsaXNoLWNoYW5nZXMsXG4ubm8tY2hhbmdlcyB7XG5cdGZsb2F0OiByaWdodDtcbn1cblxuLndhcm5pbmcge1xuXHRjb2xvcjogI2YwMDtcbn1cbjwvc3R5bGU+XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgVHJhbnNsYXRlVmFyaWFudHMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJjb25zdCBub3RpZnkgPSAobWVzc2FnZTogc3RyaW5nLCB0eXBlOiAnZXJyb3InIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm4nID0gJ2Vycm9yJyk6IHZvaWQgPT4ge1xuXHR2b2lkIG13Lm5vdGlmeShtZXNzYWdlLCB7dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLCB0eXBlfSk7XG59O1xuXG5leHBvcnQge25vdGlmeX07XG4iLCAiY29uc3QgcHJlcGFyZVBhZ2VDb250ZW50ID0gKGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyA9PlxuXHRjb250ZW50XG5cdFx0LnJlcGxhY2UoL1tcXHMjJicqOjw+W1xcXV97fH1dL2dpbSwgKGNoYXJhY3Rlcjogc3RyaW5nKTogc3RyaW5nID0+IGAmIyR7Y2hhcmFjdGVyLmNvZGVQb2ludEF0KDApfTtgKVxuXHRcdC5yZXBsYWNlKC8oJiM5MTsmIzkxOykoKD86KD8hJiMxMjQ7KSg/ISYjOTM7KS4pKz8pKCYjMTI0Oyg/Oig/ISYjOTM7KS4pKz8mIzkzOyYjOTM7KS9nLCAnJDEteyQyfS0kMycpXG5cdFx0LnJlcGxhY2UoLy0mIzEyMzsoLis/KSYjMTI1Oy0vZywgKG1hdGNoOiBzdHJpbmcpOiBzdHJpbmcgPT5cblx0XHRcdG1hdGNoXG5cdFx0XHRcdC5yZXBsYWNlKCctJiMxMjM7JywgJy17Jylcblx0XHRcdFx0LnJlcGxhY2UoJy0mIzEyMzsnLCAnLXsnKVxuXHRcdFx0XHQucmVwbGFjZSgnJiMxMjU7LScsICd9LScpXG5cdFx0XHRcdC5yZXBsYWNlKC8mIzEyNDsvZywgJ3wnKVxuXHRcdFx0XHQucmVwbGFjZSgvJiMzMjsvZywgJyAnKVxuXHRcdFx0XHQucmVwbGFjZSgvJiM2MTsvZywgJz0nKVxuXHRcdFx0XHQucmVwbGFjZSgvJiM2MjsvZywgJz4nKVxuXHRcdFx0XHQucmVwbGFjZSgvJiM1ODsvZywgJzonKVxuXHRcdCk7XG5cbmV4cG9ydCB7cHJlcGFyZVBhZ2VDb250ZW50fTtcbiIsICJ0eXBlIExhbmdzID0gJ3poJyB8ICd6aC1oYW5zJyB8ICd6aC1jbicgfCAnemgtbXknIHwgJ3poLXNnJyB8ICd6aC1oYW50JyB8ICd6aC1oaycgfCAnemgtbW8nIHwgJ3poLXR3JztcbmNvbnN0IGxhbmdzOiBMYW5nc1tdID0gWyd6aCcsICd6aC1oYW5zJywgJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXTtcbmNvbnN0IG5hbWVPZkxhbmdzID0ge1xuXHR6aDogJ+WOn+WniycsXG5cdCd6aC1oYW5zJzogJ+eugOS9kycsXG5cdCd6aC1jbic6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHQnemgtbXknOiAn6ams5p2l6KW/5Lqa566A5L2TJyxcblx0J3poLXNnJzogJ+aWsOWKoOWdoeeugOS9kycsXG5cdCd6aC1oYW50JzogJ+e5gemrlCcsXG5cdCd6aC1oayc6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHQnemgtbW8nOiAn5Lit5ZyL5r6z6ZaA57mB6auUJyxcblx0J3poLXR3JzogJ+S4reWci+iHuueBo+e5gemrlCcsXG59IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8TGFuZ3MsIHN0cmluZz47XG5cbmV4cG9ydCB7dHlwZSBMYW5ncywgbGFuZ3MsIG5hbWVPZkxhbmdzfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCB0cmFuc2xhdGUgPSAoc2ltcGxpZmllZDogc3RyaW5nLCB0cmFkaXRpb25hbDogc3RyaW5nLCBlbj86IHN0cmluZyk6IHN0cmluZyA9PlxuXHRsb2NhbGl6ZSh7ZW46IGVuID8/IHNpbXBsaWZpZWQsICd6aC1oYW5zJzogc2ltcGxpZmllZCA/PyB0cmFkaXRpb25hbCwgJ3poLWhhbnQnOiB0cmFkaXRpb25hbCA/PyBzaW1wbGlmaWVkfSk7XG5cbmV4cG9ydCB7dHJhbnNsYXRlfTtcbiIsICJpbXBvcnQge0xhbmdzLCBuYW1lT2ZMYW5nc30gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge1RyYW5zbGF0aW9uUmVzdWx0fSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL3V0aWwvYXBpJztcbmltcG9ydCB7bm90aWZ5fSBmcm9tICcuL3V0aWwvbm90aWZ5JztcbmltcG9ydCB7dHJhbnNsYXRlfSBmcm9tICcuL3V0aWwvdHJhbnNsYXRlJztcblxuY29uc3QgcHJvY2Vzc1RyYW5zbGF0ZSA9IGFzeW5jICh7XG5cdHBhZ2VDb250ZW50LFxuXHRsYW5nUXVldWUsXG5cdGJhc2VQYWdlTmFtZSxcblx0cmVzdWx0cyxcblx0c3VtbWFyeSxcbn06IHtcblx0cGFnZUNvbnRlbnQ6IHN0cmluZztcblx0bGFuZ1F1ZXVlOiBMYW5nc1tdO1xuXHRiYXNlUGFnZU5hbWU6IHN0cmluZztcblx0cmVzdWx0czogVHJhbnNsYXRpb25SZXN1bHRbXTtcblx0c3VtbWFyeTogc3RyaW5nO1xufSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRmb3IgKGNvbnN0IGxhbmcgb2YgbGFuZ1F1ZXVlKSB7XG5cdFx0Y29uc3QgdGFyZ2V0VGl0bGU6IHN0cmluZyA9IGxhbmcgPT09ICd6aCcgPyBiYXNlUGFnZU5hbWUgOiBgJHtiYXNlUGFnZU5hbWV9LyR7bGFuZ31gO1xuXHRcdGNvbnN0IHJlc3VsdDogVHJhbnNsYXRpb25SZXN1bHQgPSB7XG5cdFx0XHRsYW5nLFxuXHRcdFx0dGFyZ2V0VGl0bGUsXG5cdFx0XHRwYWdlTmFtZTogYCR7bGFuZ33vvIgke25hbWVPZkxhbmdzW2xhbmddfe+8iWAsXG5cdFx0XHRlZGl0TGFiZWw6IHRyYW5zbGF0ZSgn57yWJywgJ+e3qCcpLFxuXHRcdFx0Y29tcGxldGVkOiBmYWxzZSxcblx0XHRcdG1pc3Npbmc6IGZhbHNlLFxuXHRcdFx0bm9DaGFuZ2VzOiBmYWxzZSxcblx0XHR9O1xuXHRcdHJlc3VsdHMucHVzaChyZXN1bHQpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGNvbnRlbnRJRCA9ICdUcmFuc2xhdGVWYXJpYW50cy1jb250ZW50Jztcblx0XHRcdGxldCBjb250ZW50OiBzdHJpbmc7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb250ZW50ID0gYXdhaXQgYXBpLnBhcnNlKGB7e05vdGVUQXxHMT1JVHxHMj1NZWRpYVdpa2l9fTxkaXYgaWQ9XCIke2NvbnRlbnRJRH1cIj4ke3BhZ2VDb250ZW50fTwvZGl2PmAsIHtcblx0XHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdFx0dXNlbGFuZzogbGFuZyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRub3RpZnkodHJhbnNsYXRlKCfop6PmnpAkMeaXtuWPkeeUn+mUmeivr++8micsICfop6PmnpAkMeaZgueZvOeUn+mMr+iqpO+8micpLnJlcGxhY2UoJyQxJywgbGFuZykgKyBlcnJvcik7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJzZWRDb250ZW50OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0cGFyc2VkQ29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuXHRcdFx0Y29uc3QgbmV3UGFnZUNvbnRlbnQ6IHN0cmluZyA9IHBhcnNlZENvbnRlbnQucXVlcnlTZWxlY3RvcihgIyR7Y29udGVudElEfWApPy50ZXh0Q29udGVudCA/PyAnJztcblxuXHRcdFx0Y29uc3QgcXVlcnlEaWZmUGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0aXRsZXM6IHRhcmdldFRpdGxlLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0cnZkaWZmdG90ZXh0OiBuZXdQYWdlQ29udGVudCxcblx0XHRcdH07XG5cblx0XHRcdGxldCBkYXRhOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIGFwaS5nZXQ+Pjtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHF1ZXJ5RGlmZlBhcmFtcyk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRub3RpZnkodHJhbnNsYXRlKCfojrflj5YkMeW3ruW8guaXtuWPkeeUn+mUmeivr++8micsICflj5blvpckMeW3rueVsOaZgueZvOeUn+mMr+iqpO+8micpLnJlcGxhY2UoJyQxJywgbGFuZykgKyBlcnJvcik7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhWydxdWVyeSddLnBhZ2VzO1xuXHRcdFx0cmVzdWx0LmNvbXBsZXRlZCA9IHRydWU7XG5cdFx0XHRpZiAocGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdHJlc3VsdC5taXNzaW5nID0gdHJ1ZTtcblx0XHRcdFx0cmVzdWx0LmNvbnRlbnQgPSBuZXdQYWdlQ29udGVudDtcblx0XHRcdFx0cmVzdWx0LnB1Ymxpc2hMYWJlbCA9IHRyYW5zbGF0ZSgn5Y+R5biD6aG16Z2iJywgJ+eZvOS9iOmggemdoicpO1xuXHRcdFx0XHRyZXN1bHQuc2F2ZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0XHRhd2FpdCBhcGkuY3JlYXRlKFxuXHRcdFx0XHRcdFx0dGFyZ2V0VGl0bGUsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0bmV3UGFnZUNvbnRlbnRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZXN1bHQuc3VjY2Vzc01lc3NhZ2UgPSB0cmFuc2xhdGUoJ+W3sue8lui+kSAnLCAn5bey57eo6LyvICcpICsgdGFyZ2V0VGl0bGU7XG5cdFx0XHRcdHJlc3VsdC5lcnJvck1lc3NhZ2UgPSAoZXJyb3I6IHVua25vd24pOiBzdHJpbmcgPT5cblx0XHRcdFx0XHR0cmFuc2xhdGUoJ+e8lui+kScsICfnt6jovK8gJykgKyB0YXJnZXRUaXRsZSArIHRyYW5zbGF0ZSgnIOWPkeeUn+mUmeivr++8micsICcg55m855Sf6Yyv6Kqk77yaJykgKyBlcnJvcjtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRpZmY6IHN0cmluZyA9IHBhZ2UucmV2aXNpb25zWzBdLmRpZmYuYm9keTtcblx0XHRcdGlmIChkaWZmID09PSAnJykge1xuXHRcdFx0XHRyZXN1bHQubm9DaGFuZ2VzID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wdWJsaXNoTGFiZWwgPSB0cmFuc2xhdGUoJ+WPkeW4g+abtOaUuScsICfnmbzkvYjorormm7QnKTtcblx0XHRcdFx0cmVzdWx0LnNhdmUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRcdFx0YXdhaXQgYXBpLmVkaXQodGFyZ2V0VGl0bGUsICgpID0+ICh7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0dGV4dDogbmV3UGFnZUNvbnRlbnQsXG5cdFx0XHRcdFx0XHRub2NyZWF0ZTogZmFsc2UsXG5cdFx0XHRcdFx0fSkpO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZXN1bHQuc3VjY2Vzc01lc3NhZ2UgPSB0cmFuc2xhdGUoJ+W3sue8lui+kScsICflt7Lnt6jovK8gJykgKyB0YXJnZXRUaXRsZTtcblx0XHRcdFx0cmVzdWx0LmVycm9yTWVzc2FnZSA9IChlcnJvcjogdW5rbm93bik6IHN0cmluZyA9PlxuXHRcdFx0XHRcdHRyYW5zbGF0ZSgn57yW6L6RJDHlj5HnlJ/plJnor6/vvJonLCAn57eo6LyvJDHnmbznlJ/pjK/oqqTvvJonKS5yZXBsYWNlKCckMScsIHRhcmdldFRpdGxlKSArIGVycm9yO1xuXHRcdFx0XHRyZXN1bHQuZGlmZiA9IGRpZmY7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdG5vdGlmeSh0cmFuc2xhdGUoJ+WkhOeQhiQx5pe25Y+R55Sf6ZSZ6K+v77yaJywgJ+iZleeQhiQx5pmC55m855Sf6Yyv6Kqk77yaJykucmVwbGFjZSgnJDEnLCBsYW5nKSArIGVycm9yKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1RyYW5zbGF0ZX07XG4iLCAiaW1wb3J0IHtMYW5nc30gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge1RyYW5zbGF0aW9uUmVzdWx0fSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL3V0aWwvYXBpJztcbmltcG9ydCB7bm90aWZ5fSBmcm9tICcuL3V0aWwvbm90aWZ5JztcbmltcG9ydCB7cHJlcGFyZVBhZ2VDb250ZW50fSBmcm9tICcuL3ByZXBhcmVQYWdlQ29udGVudCc7XG5pbXBvcnQge3Byb2Nlc3NUcmFuc2xhdGV9IGZyb20gJy4vcHJvY2Vzc1RyYW5zbGF0ZSc7XG5pbXBvcnQge3RyYW5zbGF0ZX0gZnJvbSAnLi91dGlsL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IGxvYWRQYWdlQ29udGVudCA9IGFzeW5jICh7XG5cdHdnUGFnZU5hbWUsXG5cdGxhbmdRdWV1ZSxcblx0cmVzdWx0cyxcbn06IHtcblx0d2dQYWdlTmFtZTogc3RyaW5nO1xuXHRsYW5nUXVldWU6IExhbmdzW107XG5cdHJlc3VsdHM6IFRyYW5zbGF0aW9uUmVzdWx0W107XG59KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHN1bW1hcnk6IHN0cmluZyA9IGAke3RyYW5zbGF0ZSgn6Ieq5Yqo6L2s5o2i5Y+Y5L2T6IeqJywgJ+iHquWLlei9ieaPm+iuiumrlOiHqicpfSR7J1tbJDFdXScucmVwbGFjZSgvXFwkMS9nLCB3Z1BhZ2VOYW1lKX0gKFtbTWVkaWFXaWtpOkdhZGdldC1UcmFuc2xhdGVWYXJpYW50cy5qc3xUcmFuc2xhdGVWYXJpYW50c11dKWA7XG5cdGNvbnN0IGJhc2VQYWdlTmFtZTogc3RyaW5nID0gd2dQYWdlTmFtZS5yZXBsYWNlKC9cXC96aCQvLCAnJyk7XG5cdGNvbnN0IHF1ZXJ5Q29udGVudFBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHRpdGxlczogd2dQYWdlTmFtZSxcblx0XHRjdXJ0aW1lc3RhbXA6IHRydWUsXG5cdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJ10sXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocXVlcnlDb250ZW50UGFyYW1zKTtcblx0XHRjb25zdCBwYWdlcyA9IGRhdGFbJ3F1ZXJ5J10/LnBhZ2VzO1xuXHRcdGlmICghcGFnZXMpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcigndW5rbm93bicpO1xuXHRcdH1cblxuXHRcdGNvbnN0IFtwYWdlXSA9IHBhZ2VzO1xuXHRcdGlmIChwYWdlLmludmFsaWQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZHRpdGxlJyk7XG5cdFx0fVxuXHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbm9jcmVhdGUtbWlzc2luZycpO1xuXHRcdH1cblxuXHRcdGNvbnN0IFt7Y29udGVudH1dID0gcGFnZS5yZXZpc2lvbnM7XG5cdFx0YXdhaXQgcHJvY2Vzc1RyYW5zbGF0ZSh7XG5cdFx0XHRwYWdlQ29udGVudDogcHJlcGFyZVBhZ2VDb250ZW50KGNvbnRlbnQgYXMgc3RyaW5nKSxcblx0XHRcdGxhbmdRdWV1ZSxcblx0XHRcdGJhc2VQYWdlTmFtZSxcblx0XHRcdHJlc3VsdHMsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdG5vdGlmeSh0cmFuc2xhdGUoJ+iOt+WPlumhtemdouWGheWuueaXtuWPkeeUn+mUmeivr++8micsICflj5blvpfpoIHpnaLlhaflrrnmmYLnmbznlJ/pjK/oqqTvvJonKSArIGVycm9yKTtcblx0fVxufTtcblxuZXhwb3J0IHtsb2FkUGFnZUNvbnRlbnR9O1xuIiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgaWQ6IFwiVHJhbnNsYXRlVmFyaWFudHNcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJzdWJtaXQtYWxsXCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IHsgY2xhc3M6IFwid2FybmluZ1wiIH1cbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGtleTogMCB9XG5jb25zdCBfaG9pc3RlZF81ID0gW1wiaHJlZlwiXVxuY29uc3QgX2hvaXN0ZWRfNiA9IFtcImhyZWZcIl1cbmNvbnN0IF9ob2lzdGVkXzcgPSB7XG4gIGtleTogMSxcbiAgY2xhc3M6IFwibm8tY2hhbmdlc1wiXG59XG5jb25zdCBfaG9pc3RlZF84ID0geyBrZXk6IDAgfVxuY29uc3QgX2hvaXN0ZWRfOSA9IHtcbiAga2V5OiAxLFxuICBjbGFzczogXCJkaWZmXCJcbn1cbmNvbnN0IF9ob2lzdGVkXzEwID0gW1wiaW5uZXJIVE1MXCJdXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICAgICAgYWN0aW9uOiBcInByb2dyZXNzaXZlXCIsXG4gICAgICAgIHdlaWdodDogXCJwcmltYXJ5XCIsXG4gICAgICAgIG9uQ2xpY2s6ICRzZXR1cC5wdWJsaXNoQWxsXG4gICAgICB9LCB7XG4gICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnRyYW5zbGF0ZSgn5Y+R5biD5omA5pyJ5pu05pS5JywgJ+eZvOS9iOaJgOacieiuiuabtCcpKSwgMSAvKiBURVhUICovKVxuICAgICAgICBdKSxcbiAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgIH0pXG4gICAgXSksXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC50cmFuc2xhdGUoXG5cdFx0XHRcdFx0J+aPkOmGku+8mlRyYW5zbGF0ZVZhcmlhbnRz5bel5YW35L2/55SoSVTlj4pNZWRpYVdpa2novazmjaLnu4Tov5vooYzoh6rliqjovazmjaLvvIzor7fnoa7orqTovazmjaLnu5PmnpzmmK/lkKbmraPnoa7vvIEnLFxuXHRcdFx0XHRcdCfmj5DphpLvvJpUcmFuc2xhdGVWYXJpYW50c+W3peWFt+S9v+eUqElU5Y+KTWVkaWFXaWtp6L2J5o+b57WE6YCy6KGM6Ieq5YuV6L2J5o+b77yM6KuL56K66KqN6L2J5o+b57WQ5p6c5piv5ZCm5q2j56K677yBJ1xuXHRcdFx0XHQpKSwgMSAvKiBURVhUICovKSxcbiAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRzZXR1cC5yZXN1bHRzLCAocmVzdWx0KSA9PiB7XG4gICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIHtcbiAgICAgICAga2V5OiByZXN1bHQubGFuZ1xuICAgICAgfSwgW1xuICAgICAgICBfY2FjaGVbM10gfHwgKF9jYWNoZVszXSA9IF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJoclwiLCBudWxsLCBudWxsLCAtMSAvKiBDQUNIRUQgKi8pKSxcbiAgICAgICAgKHJlc3VsdC5jb21wbGV0ZWQpXG4gICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzQsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBudWxsLCBbXG4gICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImFcIiwge1xuICAgICAgICAgICAgICAgICAgaHJlZjogJHNldHVwLmdldFBhZ2VVcmwocmVzdWx0LnRhcmdldFRpdGxlKVxuICAgICAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcocmVzdWx0LnBhZ2VOYW1lKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfNSksXG4gICAgICAgICAgICAgICAgX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSBfY3JlYXRlVGV4dFZOb2RlKFwiIO+8iFwiLCAtMSAvKiBDQUNIRUQgKi8pKSxcbiAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICBocmVmOiAkc2V0dXAuZ2V0UGFnZVVybChyZXN1bHQudGFyZ2V0VGl0bGUsICdlZGl0JylcbiAgICAgICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKHJlc3VsdC5lZGl0TGFiZWwpLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF82KSxcbiAgICAgICAgICAgICAgICBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9IF9jcmVhdGVUZXh0Vk5vZGUoXCLvvIkgXCIsIC0xIC8qIENBQ0hFRCAqLykpLFxuICAgICAgICAgICAgICAgIChyZXN1bHQuc2F2ZSlcbiAgICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwdWJsaXNoLWNoYW5nZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAkZXZlbnQgPT4gKCRzZXR1cC5wdWJsaXNoKHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcocmVzdWx0LnB1Ymxpc2hMYWJlbCksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfOiAyIC8qIERZTkFNSUMgKi9cbiAgICAgICAgICAgICAgICAgICAgfSwgMTAzMiAvKiBQUk9QUywgRFlOQU1JQ19TTE9UUyAqLywgW1wib25DbGlja1wiXSkpXG4gICAgICAgICAgICAgICAgICA6IChyZXN1bHQubm9DaGFuZ2VzKVxuICAgICAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIF9ob2lzdGVkXzcsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnRyYW5zbGF0ZSgn5peg5pu05pS5JywgJ+eEoeiuiuabtCcpKSwgMSAvKiBURVhUICovKSlcbiAgICAgICAgICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgKHJlc3VsdC5taXNzaW5nKVxuICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInByZVwiLCBfaG9pc3RlZF84LCBfdG9EaXNwbGF5U3RyaW5nKHJlc3VsdC5jb250ZW50KSwgMSAvKiBURVhUICovKSlcbiAgICAgICAgICAgICAgICA6IChyZXN1bHQuZGlmZilcbiAgICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInRhYmxlXCIsIF9ob2lzdGVkXzksIFtcbiAgICAgICAgICAgICAgICAgICAgICBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9IF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJjb2xncm91cFwiLCBudWxsLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiY29sXCIsIHsgY2xhc3M6IFwiZGlmZi1tYXJrZXJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJjb2xcIiwgeyBjbGFzczogXCJkaWZmLWNvbnRlbnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJjb2xcIiwgeyBjbGFzczogXCJkaWZmLW1hcmtlclwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImNvbFwiLCB7IGNsYXNzOiBcImRpZmYtY29udGVudFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSwgLTEgLyogQ0FDSEVEICovKSksXG4gICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBUaGUgcmV2aXNpb24gZGlmZiBpcyBIVE1MIHJldHVybmVkIGJ5IE1lZGlhV2lraSdzIHBhcnNlIEFQSS4gXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9uby12LWh0bWwgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ0Ym9keVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHJlc3VsdC5kaWZmXG4gICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMTApXG4gICAgICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgICAgICAgXSkpXG4gICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgXSwgNjQgLyogU1RBQkxFX0ZSQUdNRU5UICovKSlcbiAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVHJhbnNsYXRlVmFyaWFudHNcXFxcY29tcG9uZW50c1xcXFxUcmFuc2xhdGVWYXJpYW50c1ZpZXcudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxUcmFuc2xhdGVWYXJpYW50c1xcXFxjb21wb25lbnRzXFxcXFRyYW5zbGF0ZVZhcmlhbnRzVmlldy52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVHJhbnNsYXRlVmFyaWFudHNcXFxcY29tcG9uZW50c1xcXFxUcmFuc2xhdGVWYXJpYW50c1ZpZXcudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVHJhbnNsYXRlVmFyaWFudHNcXFxcY29tcG9uZW50c1xcXFxUcmFuc2xhdGVWYXJpYW50c1ZpZXcudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWQ4ZGY2OGI5XCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9UcmFuc2xhdGVWYXJpYW50c1ZpZXcudnVlJztcbmltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRMYW5nUXVldWV9IGZyb20gJy4vbW9kdWxlcy9nZXRMYW5nUXVldWUnO1xuaW1wb3J0IHt0cmFuc2xhdGV9IGZyb20gJy4vbW9kdWxlcy91dGlsL3RyYW5zbGF0ZSc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICghL15NZWRpYVdpa2k6W14vXSsoXFwvemgpPyQvLnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9ICRib2R5LmZpbmQoJyNwLWNhY3Rpb25zJykubGVuZ3RoID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIHRyYW5zbGF0ZSgn6L2s5o2i5Y+Y5L2TJywgJ+i9ieaPm+iuiumrlCcpKTtcblxuXHRpZiAoZWxlbWVudCkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZSgpO1xuXG5cdFx0XHRjb25zdCBsYW5nUXVldWUgPSBnZXRMYW5nUXVldWUoKTtcblx0XHRcdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2R5Q29udGVudCcpPy5wcmVwZW5kKHJvb3QpO1xuXG5cdFx0XHRjcmVhdGVBcHAoQXBwLCB7d2dQYWdlTmFtZSwgbGFuZ1F1ZXVlfSkubW91bnQocm9vdCk7XG5cdFx0fSk7XG5cdH1cbn0pO1xuIiwgImltcG9ydCB7TGFuZ3MsIGxhbmdzfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7dHJhbnNsYXRlfSBmcm9tICcuL3V0aWwvdHJhbnNsYXRlJztcblxuY29uc3QgZ2V0TGFuZ1F1ZXVlID0gKCk6IExhbmdzW10gPT4ge1xuXHRjb25zdCBydW5MYW5ncyA9IHByb21wdCh0cmFuc2xhdGUoJ+i9rOaNouS7peS4i+ivreiogO+8iOS7pemAl+WPt+malOW8gO+8ie+8micsICfovYnmj5vku6XkuIvoqp7oqIDvvIjku6XpgJfomZ/pmpTplovvvInvvJonKSwgbGFuZ3Muam9pbignLCcpKTtcblxuXHRjb25zdCBzdXBwb3J0ZWRMYW5ncyA9IG5ldyBTZXQ8c3RyaW5nPihsYW5ncyk7XG5cdGNvbnN0IGxhbmdRdWV1ZTogTGFuZ3NbXSA9IFtcblx0XHQuLi5uZXcgU2V0KFxuXHRcdFx0KHJ1bkxhbmdzID8/IGxhbmdzLmpvaW4oJywnKSlcblx0XHRcdFx0LnNwbGl0KCcsJylcblx0XHRcdFx0Lm1hcCgobGFuZzogc3RyaW5nKTogc3RyaW5nID0+IGxhbmcudHJpbSgpKVxuXHRcdFx0XHQuZmlsdGVyKChsYW5nOiBzdHJpbmcpOiBsYW5nIGlzIExhbmdzID0+IHN1cHBvcnRlZExhbmdzLmhhcyhsYW5nKSlcblx0XHQpLFxuXHRdO1xuXG5cdHJldHVybiBsYW5nUXVldWU7XG59O1xuXG5leHBvcnQge2dldExhbmdRdWV1ZX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFBQSxjQUE2QkMsUUFBQSxLQUFBO0FBQzdCLElBQUFDLGVBQXdCRCxRQUFBLGtCQUFBOztBQ0R2QixJQUFBRSxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkgsUUFBQSxpQkFBQTtBQUV4QixJQUFNSSxPQUFBLEdBQWNELGtCQUFBRSxXQUFBLHFCQUFBQyxPQUF1Q0osT0FBTyxDQUFFOztBQ0hwRSxJQUFNSyxTQUFTQSxDQUFDQyxTQUFpQkMsT0FBcUMsWUFBa0I7QUFDdkYsT0FBS0MsR0FBR0gsT0FBT0MsU0FBUztJQUFDRyxLQUFLO0lBQXFCRjtFQUFJLENBQUM7QUFDekQ7O0FDRkEsSUFBTUcscUJBQXNCQyxhQUMzQkEsUUFDRUMsUUFBUSx5QkFBMEJDLGVBQUEsS0FBQVQsT0FBbUNTLFVBQVVDLFlBQVksQ0FBQyxHQUFDLEdBQUEsQ0FBRyxFQUNoR0YsUUFBUSwrRUFBK0UsWUFBWSxFQUNuR0EsUUFBUSx3QkFBeUJHLFdBQ2pDQSxNQUNFSCxRQUFRLFdBQVcsSUFBSSxFQUN2QkEsUUFBUSxXQUFXLElBQUksRUFDdkJBLFFBQVEsV0FBVyxJQUFJLEVBQ3ZCQSxR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TUFBSW1LLFNBQVM7QUFDWkEsWUFBUUUsaUJBQWlCLFNBQVMsTUFBWTtBQUFBLFVBQUFDO0FBQzdDSCxjQUFRSSxPQUFPO0FBRWYsWUFBTTlKLFlBQVl5SSxhQUFhO0FBQy9CLFlBQU1zQixPQUFPbkksU0FBU0MsY0FBYyxLQUFLO0FBQ3pDLE9BQUFnSSx3QkFBQWpJLFNBQVNJLGNBQWMsY0FBYyxPQUFBLFFBQUE2SCwwQkFBQSxVQUFyQ0Esc0JBQXdDRyxRQUFRRCxJQUFJO0FBRXBELE9BQUEsR0FBQXhCLFlBQUEwQixXQUFVM0IsZ0NBQUs7UUFBQ3ZFO1FBQVkvRDtNQUFTLENBQUMsRUFBRWtLLE1BQU1ILElBQUk7SUFDbkQsQ0FBQztFQUNGO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X3Z1ZTIiLCAicmVxdWlyZSIsICJpbXBvcnRfY29kZXgiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJub3RpZnkiLCAibWVzc2FnZSIsICJ0eXBlIiwgIm13IiwgInRhZyIsICJwcmVwYXJlUGFnZUNvbnRlbnQiLCAiY29udGVudCIsICJyZXBsYWNlIiwgImNoYXJhY3RlciIsICJjb2RlUG9pbnRBdCIsICJtYXRjaCIsICJsYW5ncyIsICJuYW1lT2ZMYW5ncyIsICJ6aCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAidHJhbnNsYXRlIiwgInNpbXBsaWZpZWQiLCAidHJhZGl0aW9uYWwiLCAiZW4iLCAibG9jYWxpemUiLCAicHJvY2Vzc1RyYW5zbGF0ZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2VDb250ZW50IiwgImxhbmdRdWV1ZSIsICJiYXNlUGFnZU5hbWUiLCAicmVzdWx0cyIsICJzdW1tYXJ5IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJsYW5nIiwgInZhbHVlIiwgInRhcmdldFRpdGxlIiwgInJlc3VsdCIsICJwYWdlTmFtZSIsICJlZGl0TGFiZWwiLCAiY29tcGxldGVkIiwgIm1pc3NpbmciLCAibm9DaGFuZ2VzIiwgInB1c2giLCAiX3BhcnNlZENvbnRlbnQkcXVlcnlTIiwgIl9wYXJzZWRDb250ZW50JHF1ZXJ5UzIiLCAiY29udGVudElEIiwgInBhcnNlIiwgImFjdGlvbiIsICJ1c2VsYW5nIiwgImVycm9yIiwgInBhcnNlZENvbnRlbnQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJpbm5lckhUTUwiLCAibmV3UGFnZUNvbnRlbnQiLCAicXVlcnlTZWxlY3RvciIsICJ0ZXh0Q29udGVudCIsICJxdWVyeURpZmZQYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgInByb3AiLCAicnZkaWZmdG90ZXh0IiwgImRhdGEiLCAiZ2V0IiwgInBhZ2UiLCAicGFnZXMiLCAicHVibGlzaExhYmVsIiwgInNhdmUiLCAiY3JlYXRlIiwgInN1Y2Nlc3NNZXNzYWdlIiwgImVycm9yTWVzc2FnZSIsICJkaWZmIiwgInJldmlzaW9ucyIsICJib2R5IiwgImVkaXQiLCAidGV4dCIsICJub2NyZWF0ZSIsICJlcnIiLCAiZSIsICJmIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJsb2FkUGFnZUNvbnRlbnQiLCAiX3JlZjQiLCAid2dQYWdlTmFtZSIsICJxdWVyeUNvbnRlbnRQYXJhbXMiLCAiY3VydGltZXN0YW1wIiwgInJ2cHJvcCIsICJfZGF0YSRxdWVyeSIsICJFcnJvciIsICJpbnZhbGlkIiwgIl94MiIsICJwcm9wcyIsICJfX3Byb3BzIiwgInJlZiIsICJnZXRQYWdlVXJsIiwgInV0aWwiLCAiZ2V0VXJsIiwgIm9uTW91bnRlZCIsICJwdWJsaXNoIiwgIl9yZWY1IiwgIl9yZXN1bHQkc3VjY2Vzc01lc3NhZyIsICJfcmVzdWx0JGVycm9yTWVzc2FnZSIsICJfcmVzdWx0JGVycm9yTWVzc2FnZTIiLCAiY2FsbCIsICJTdHJpbmciLCAiX3gzIiwgInB1Ymxpc2hBbGwiLCAicHVibGlzaGFibGVSZXN1bHRzIiwgImZpbHRlciIsICJsZW5ndGgiLCAiY29uZmlybSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJpbXBvcnRfdnVlMyIsICJfaG9pc3RlZF8xIiwgImlkIiwgIl9ob2lzdGVkXzIiLCAiY2xhc3MiLCAiX2hvaXN0ZWRfMyIsICJfaG9pc3RlZF80IiwgImtleSIsICJfaG9pc3RlZF81IiwgIl9ob2lzdGVkXzYiLCAiX2hvaXN0ZWRfNyIsICJfaG9pc3RlZF84IiwgIl9ob2lzdGVkXzkiLCAiX2hvaXN0ZWRfMTAiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiY3JlYXRlVk5vZGUiLCAid2VpZ2h0IiwgIm9uQ2xpY2siLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgImNyZWF0ZVRleHRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiXyIsICJGcmFnbWVudCIsICJyZW5kZXJMaXN0IiwgImhyZWYiLCAiY3JlYXRlQmxvY2siLCAiJGV2ZW50IiwgImNyZWF0ZUNvbW1lbnRWTm9kZSIsICJUcmFuc2xhdGVWYXJpYW50c1ZpZXdfZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIlRyYW5zbGF0ZVZhcmlhbnRzVmlld19kZWZhdWx0MiIsICJpbXBvcnRfdnVlNCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0TGFuZ1F1ZXVlIiwgInJ1bkxhbmdzIiwgInByb21wdCIsICJqb2luIiwgInN1cHBvcnRlZExhbmdzIiwgIlNldCIsICJzcGxpdCIsICJtYXAiLCAidHJpbSIsICJoYXMiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgIiRib2R5IiwgImNvbmZpZyIsICJ0ZXN0IiwgInBvcnRsZXRJZCIsICJmaW5kIiwgImVsZW1lbnQiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAicmVtb3ZlIiwgInJvb3QiLCAicHJlcGVuZCIsICJjcmVhdGVBcHAiLCAibW91bnQiXQp9Cg==
