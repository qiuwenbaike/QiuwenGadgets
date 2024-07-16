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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/TranslateVariants/TranslateVariants.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/TranslateVariants/options.json
var translateVariantsSummary = "自动转换变体自[[$1]]（[[MediaWiki:Gadget-TranslateVariants.js|TranslateVariants]]）";
var contentID = "TranslateVariants-content";
var version = "2.0";
//! src/TranslateVariants/TranslateVariants.module.less
var noChanges = "TranslateVariants-module__noChanges_Yvm-lW";
var publishChanges = "TranslateVariants-module__publishChanges_Yvm-lW";
var submitAll = "TranslateVariants-module__submitAll_Yvm-lW";
var warning = "TranslateVariants-module__warning_Yvm-lW";
//! src/TranslateVariants/modules/translateVariants.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/TranslateVariants/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("TranslateVariants/".concat(version));
//! src/TranslateVariants/modules/translateVariants.tsx
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
var translateVariants = (wgPageName) => {
  var _prompt;
  const summary = translateVariantsSummary.replace(/\$1/g, wgPageName);
  const $wrapper = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id: "TranslateVariants"
  })).prependTo("#bodyContent");
  const $submitAll = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("button", {
    className: ["cdx-button", "cdx-button--action-progressive", "cdx-button--weight-primary"]
  }, window.wgULS("发布所有更改", "發佈所有變更")));
  $submitAll.on("click", () => {
    const $buttons = $wrapper.find(".".concat(publishChanges));
    if (!$buttons.length) {
      void mw.notify(window.wgULS("没有任何可以发布的更改", "沒有任何變更可發佈"), {
        tag: "TranslateVariants",
        type: "error"
      });
      return;
    }
    if (!confirm(window.wgULS("发布$1个更改？", "發佈$1個變更？").replace("$1", "".concat($buttons.length)))) {
      void mw.notify(window.wgULS("已取消发布", "已取消發佈"), {
        tag: "TranslateVariants",
        type: "warn"
      });
      return;
    }
    var _iterator2 = _createForOfIteratorHelper($buttons), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const button = _step2.value;
        $(button).trigger("click");
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  $wrapper.append($(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    className: submitAll
  })).append($submitAll), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    className: warning
  }, window.wgULS("提醒：TranslateVariants工具使用IT及MediaWiki转换组进行自动转换，请确认转换结果是否正确！", "提醒：TranslateVariants工具使用IT及MediaWiki轉換組進行自動轉換，請確認轉換結果是否正確！")));
  const defaultLangs = [...langs];
  let runLangs = (_prompt = prompt(window.wgULS("转换以下语言（以逗号隔开）：", "轉換以下語言（以逗號隔開）："), defaultLangs.join(","))) === null || _prompt === void 0 ? void 0 : _prompt.split(",");
  if (runLangs === null) {
    runLangs = defaultLangs;
  }
  const langQueue = runLangs.map((lang) => lang.trim()).filter((lang) => langs.includes(lang));
  const process = (pageContent) => {
    if (!langQueue.length) {
      return;
    }
    const lang = langQueue.shift();
    const $diffTable = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
      id: "TranslateVariants-diff-".concat(lang)
    }));
    $wrapper.append($diffTable, /* @__PURE__ */ import_ext_gadget2.default.createElement("hr", null));
    const basePageName = wgPageName.replace(/\/zh$/, "");
    const targetTitle = lang === "zh" ? basePageName : "".concat(basePageName, "/").concat(lang);
    let newPageContent = "";
    void api.parse('{{NoteTA|G1=IT|G2=MediaWiki}}<div id="'.concat(contentID, '">').concat(pageContent, "</div>"), {
      action: "parse",
      uselang: lang
    }).then((content) => {
      newPageContent = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        innerHTML: content
      })).find("#".concat(contentID)).text();
      const queryDiffParams = {
        action: "query",
        format: "json",
        formatversion: "2",
        titles: targetTitle,
        prop: "revisions",
        rvdifftotext: newPageContent
      };
      return api.get(queryDiffParams);
    }, (error) => {
      void mw.notify(window.wgULS("解析$1时发生错误：", "解析$1時發生錯誤：").replace("$1", lang) + error, {
        tag: "TranslateVariants",
        type: "error"
      });
      return null;
    }).then((data) => {
      if (data === null) {
        return;
      }
      const $tool = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
        href: mw.util.getUrl(targetTitle)
      }, lang, "（", nameOfLangs[lang], "）"), "（", /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
        href: mw.util.getUrl(targetTitle, {
          action: "edit"
        })
      }, window.wgULS("编", "編")), "）"));
      $diffTable.append($tool);
      const [page] = data["query"].pages;
      if (page.missing) {
        const $submit = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("button", {
          className: [publishChanges, "cdx-button"]
        }, window.wgULS("发布页面", "發佈頁面")));
        $submit.on("click", () => {
          $submit.remove();
          api.create(targetTitle, {
            summary
          }, newPageContent).then(() => {
            void mw.notify(window.wgULS("已编辑 ", "已編輯 ") + targetTitle, {
              tag: "TranslateVariants",
              type: "success"
            });
          }, (error) => {
            void mw.notify(window.wgULS("编辑", "編輯 ") + targetTitle + window.wgULS(" 发生错误：", " 發生錯誤：") + error, {
              tag: "TranslateVariants",
              type: "error"
            });
          });
        });
        $tool.append($submit);
        $diffTable.append(/* @__PURE__ */ import_ext_gadget2.default.createElement("pre", {
          innerHTML: newPageContent.replace(/[&<>]/gim, (string) => "&#".concat(string.codePointAt(0), ";"))
        }));
        return;
      }
      const diff = page.revisions[0].diff.body;
      if (diff === "") {
        $tool.append(/* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
          className: noChanges
        }, window.wgULS("无更改", "無變更")));
      } else {
        const $submit = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("button", {
          className: [publishChanges, "cdx-button"]
        }, window.wgULS("发布更改", "發佈變更")));
        $submit.on("click", () => {
          $submit.remove();
          api.edit(targetTitle, () => ({
            summary,
            text: newPageContent,
            nocreate: false
          })).then(() => {
            void mw.notify(window.wgULS("已编辑", "已編輯 ") + targetTitle, {
              tag: "TranslateVariants",
              type: "success"
            });
          }, (error) => {
            void mw.notify(window.wgULS("编辑$1发生错误：", "編輯$1發生錯誤：").replace("$1", targetTitle) + error, {
              tag: "TranslateVariants",
              type: "error"
            });
          });
        });
        $tool.append($submit);
        $diffTable.append($(/* @__PURE__ */ import_ext_gadget2.default.createElement("table", {
          className: "diff",
          innerHTML: diff
        })).prepend(/* @__PURE__ */ import_ext_gadget2.default.createElement("colgroup", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("col", {
          className: "diff-marker"
        }), /* @__PURE__ */ import_ext_gadget2.default.createElement("col", {
          className: "diff-content"
        }), /* @__PURE__ */ import_ext_gadget2.default.createElement("col", {
          className: "diff-marker"
        }), /* @__PURE__ */ import_ext_gadget2.default.createElement("col", {
          className: "diff-content"
        }))));
      }
    }, (error) => {
      void mw.notify(window.wgULS("获取$1差异时发生错误：", "取得$1差異時發生錯誤：").replace("$1", lang) + error, {
        tag: "TranslateVariants",
        type: "error"
      });
    }).always(() => {
      process(pageContent);
    });
  };
  const queryContentParams = {
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "revisions",
    titles: wgPageName,
    curtimestamp: true,
    rvprop: ["content", "timestamp"]
  };
  void api.get(queryContentParams).then((data) => {
    var _data$query;
    if (!((_data$query = data["query"]) !== null && _data$query !== void 0 && _data$query.pages)) {
      return $.Deferred().reject("unknown");
    }
    const [page] = data["query"].pages;
    if (page.invalid) {
      return $.Deferred().reject("invalidtitle");
    }
    if (page.missing) {
      return $.Deferred().reject("nocreate-missing");
    }
    const [{
      content
    }] = page.revisions;
    return content;
  }).then((content) => {
    let pageContent = content;
    pageContent = pageContent.replace(/[\s#&'*:<>[\]_{|}]/gim, (string) => "&#".concat(string.codePointAt(0), ";"));
    pageContent = pageContent.replace(/(&#91;&#91;)((?:(?!&#124;)(?!&#93;).)+?)(&#124;(?:(?!&#93;).)+?&#93;&#93;)/g, "$1-{$2}-$3");
    pageContent = pageContent.replace(/-&#123;(.+?)&#125;-/g, (string) => string.replace("-&#123;", "-{").replace("-&#123;", "-{").replace("&#125;-", "}-").replace(/&#124;/g, "|").replace(/&#32;/g, " ").replace(/&#61;/g, "=").replace(/&#62;/g, ">").replace(/&#58;/g, ":"));
    return pageContent;
  }).then((pageContent) => {
    process(pageContent);
  });
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
  const element = mw.util.addPortletLink(portletId, "#", window.wgULS("转换变体", "轉換變體"));
  element === null || element === void 0 || element.addEventListener("click", () => {
    element.remove();
    translateVariants(wgPageName);
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLnRzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9vcHRpb25zLmpzb24iLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLm1vZHVsZS5sZXNzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9tb2R1bGVzL3RyYW5zbGF0ZVZhcmlhbnRzLnRzeCIsICJzcmMvVHJhbnNsYXRlVmFyaWFudHMvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dHJhbnNsYXRlVmFyaWFudHN9IGZyb20gJy4vbW9kdWxlcy90cmFuc2xhdGVWYXJpYW50cyc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICghL15NZWRpYVdpa2k6W14vXSsoXFwvemgpPyQvLnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9ICRib2R5LmZpbmQoJyNwLWNhY3Rpb25zJykubGVuZ3RoID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIHdpbmRvdy53Z1VMUygn6L2s5o2i5Y+Y5L2TJywgJ+i9ieaPm+iuiumrlCcpKTtcblxuXHRlbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRlbGVtZW50LnJlbW92ZSgpO1xuXHRcdHRyYW5zbGF0ZVZhcmlhbnRzKHdnUGFnZU5hbWUpO1xuXHR9KTtcbn0pO1xuIiwgIntcblx0XCJ0cmFuc2xhdGVWYXJpYW50c1N1bW1hcnlcIjogXCLoh6rliqjovazmjaLlj5jkvZPoh6pbWyQxXV3vvIhbW01lZGlhV2lraTpHYWRnZXQtVHJhbnNsYXRlVmFyaWFudHMuanN8VHJhbnNsYXRlVmFyaWFudHNdXe+8iVwiLFxuXHRcImNvbnRlbnRJRFwiOiBcIlRyYW5zbGF0ZVZhcmlhbnRzLWNvbnRlbnRcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3Qgbm9DaGFuZ2VzID0gXCJUcmFuc2xhdGVWYXJpYW50cy1tb2R1bGVfX25vQ2hhbmdlc19Zdm0tbFdcIjtcbmV4cG9ydCBjb25zdCBwdWJsaXNoQ2hhbmdlcyA9IFwiVHJhbnNsYXRlVmFyaWFudHMtbW9kdWxlX19wdWJsaXNoQ2hhbmdlc19Zdm0tbFdcIjtcbmV4cG9ydCBjb25zdCBzdWJtaXRBbGwgPSBcIlRyYW5zbGF0ZVZhcmlhbnRzLW1vZHVsZV9fc3VibWl0QWxsX1l2bS1sV1wiO1xuZXhwb3J0IGNvbnN0IHdhcm5pbmcgPSBcIlRyYW5zbGF0ZVZhcmlhbnRzLW1vZHVsZV9fd2FybmluZ19Zdm0tbFdcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIm5vQ2hhbmdlc1wiOiBub0NoYW5nZXMsXG4gIFwicHVibGlzaENoYW5nZXNcIjogcHVibGlzaENoYW5nZXMsXG4gIFwic3VibWl0QWxsXCI6IHN1Ym1pdEFsbCxcbiAgXCJ3YXJuaW5nXCI6IHdhcm5pbmdcbn07XG4gICAgICAiLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtub0NoYW5nZXMsIHB1Ymxpc2hDaGFuZ2VzLCBzdWJtaXRBbGwsIHdhcm5pbmd9IGZyb20gJy4uL1RyYW5zbGF0ZVZhcmlhbnRzLm1vZHVsZS5sZXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbnR5cGUgTGFuZ3MgPSAnemgnIHwgJ3poLWhhbnMnIHwgJ3poLWNuJyB8ICd6aC1teScgfCAnemgtc2cnIHwgJ3poLWhhbnQnIHwgJ3poLWhrJyB8ICd6aC1tbycgfCAnemgtdHcnO1xuY29uc3QgbGFuZ3M6IExhbmdzW10gPSBbJ3poJywgJ3poLWhhbnMnLCAnemgtY24nLCAnemgtbXknLCAnemgtc2cnLCAnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddO1xuY29uc3QgbmFtZU9mTGFuZ3MgPSB7XG5cdHpoOiAn5Y6f5aeLJyxcblx0J3poLWhhbnMnOiAn566A5L2TJyxcblx0J3poLWNuJzogJ+S4reWbveWkp+mZhueugOS9kycsXG5cdCd6aC1teSc6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHQnemgtc2cnOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0J3poLWhhbnQnOiAn57mB6auUJyxcblx0J3poLWhrJzogJ+S4reWci+mmmea4r+e5gemrlCcsXG5cdCd6aC1tbyc6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHQnemgtdHcnOiAn5Lit5ZyL6Ie654Gj57mB6auUJyxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxMYW5ncywgc3RyaW5nPjtcblxuY29uc3QgdHJhbnNsYXRlVmFyaWFudHMgPSAod2dQYWdlTmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGNvbnN0IHN1bW1hcnk6IHN0cmluZyA9IE9QVElPTlMudHJhbnNsYXRlVmFyaWFudHNTdW1tYXJ5LnJlcGxhY2UoL1xcJDEvZywgd2dQYWdlTmFtZSk7XG5cblx0Y29uc3QgJHdyYXBwZXI6IEpRdWVyeSA9ICgkKDxkaXYgaWQ9XCJUcmFuc2xhdGVWYXJpYW50c1wiIC8+KSBhcyBKUXVlcnkpLnByZXBlbmRUbygnI2JvZHlDb250ZW50Jyk7XG5cblx0Y29uc3QgJHN1Ym1pdEFsbDogSlF1ZXJ5ID0gJChcblx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17WydjZHgtYnV0dG9uJywgJ2NkeC1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZScsICdjZHgtYnV0dG9uLS13ZWlnaHQtcHJpbWFyeSddfT5cblx0XHRcdHt3aW5kb3cud2dVTFMoJ+WPkeW4g+aJgOacieabtOaUuScsICfnmbzkvYjmiYDmnInorormm7QnKX1cblx0XHQ8L2J1dHRvbj5cblx0KSBhcyBKUXVlcnk7XG5cdCRzdWJtaXRBbGwub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRidXR0b25zOiBKUXVlcnkgPSAkd3JhcHBlci5maW5kKGAuJHtwdWJsaXNoQ2hhbmdlc31gKTtcblx0XHRpZiAoISRidXR0b25zLmxlbmd0aCkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkod2luZG93LndnVUxTKCfmsqHmnInku7vkvZXlj6/ku6Xlj5HluIPnmoTmm7TmlLknLCAn5rKS5pyJ5Lu75L2V6K6K5pu05Y+v55m85L2IJyksIHtcblx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLFxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFjb25maXJtKHdpbmRvdy53Z1VMUygn5Y+R5biDJDHkuKrmm7TmlLnvvJ8nLCAn55m85L2IJDHlgIvorormm7TvvJ8nKS5yZXBsYWNlKCckMScsIGAkeyRidXR0b25zLmxlbmd0aH1gKSkpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KHdpbmRvdy53Z1VMUygn5bey5Y+W5raI5Y+R5biDJywgJ+W3suWPlua2iOeZvOS9iCcpLCB7dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGJ1dHRvbiBvZiAkYnV0dG9ucykge1xuXHRcdFx0JChidXR0b24pLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0fVxuXHR9KTtcblxuXHQkd3JhcHBlci5hcHBlbmQoXG5cdFx0JCg8ZGl2IGNsYXNzTmFtZT17c3VibWl0QWxsfSAvPikuYXBwZW5kKCRzdWJtaXRBbGwpLFxuXHRcdDxkaXYgY2xhc3NOYW1lPXt3YXJuaW5nfT5cblx0XHRcdHt3aW5kb3cud2dVTFMoXG5cdFx0XHRcdCfmj5DphpLvvJpUcmFuc2xhdGVWYXJpYW50c+W3peWFt+S9v+eUqElU5Y+KTWVkaWFXaWtp6L2s5o2i57uE6L+b6KGM6Ieq5Yqo6L2s5o2i77yM6K+356Gu6K6k6L2s5o2i57uT5p6c5piv5ZCm5q2j56Gu77yBJyxcblx0XHRcdFx0J+aPkOmGku+8mlRyYW5zbGF0ZVZhcmlhbnRz5bel5YW35L2/55SoSVTlj4pNZWRpYVdpa2novYnmj5vntYTpgLLooYzoh6rli5XovYnmj5vvvIzoq4vnorroqo3ovYnmj5vntZDmnpzmmK/lkKbmraPnorrvvIEnXG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xuXG5cdGNvbnN0IGRlZmF1bHRMYW5nczogTGFuZ3NbXSA9IFsuLi5sYW5nc107XG5cblx0bGV0IHJ1bkxhbmdzID0gcHJvbXB0KFxuXHRcdHdpbmRvdy53Z1VMUygn6L2s5o2i5Lul5LiL6K+t6KiA77yI5Lul6YCX5Y+36ZqU5byA77yJ77yaJywgJ+i9ieaPm+S7peS4i+iqnuiogO+8iOS7pemAl+iZn+malOmWi++8ie+8micpLFxuXHRcdGRlZmF1bHRMYW5ncy5qb2luKCcsJylcblx0KT8uc3BsaXQoJywnKSBhcyBMYW5nc1tdIHwgbnVsbDtcblx0aWYgKHJ1bkxhbmdzID09PSBudWxsKSB7XG5cdFx0cnVuTGFuZ3MgPSBkZWZhdWx0TGFuZ3M7XG5cdH1cblxuXHRjb25zdCBsYW5nUXVldWU6IExhbmdzW10gPSBydW5MYW5nc1xuXHRcdC5tYXAoKGxhbmc6IExhbmdzKTogTGFuZ3MgPT4gbGFuZy50cmltKCkgYXMgTGFuZ3MpXG5cdFx0LmZpbHRlcigobGFuZzogTGFuZ3MpOiBib29sZWFuID0+IGxhbmdzLmluY2x1ZGVzKGxhbmcpKTtcblxuXHRjb25zdCBwcm9jZXNzID0gKHBhZ2VDb250ZW50OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRpZiAoIWxhbmdRdWV1ZS5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBsYW5nID0gbGFuZ1F1ZXVlLnNoaWZ0KCkgYXMgTGFuZ3M7XG5cblx0XHRjb25zdCAkZGlmZlRhYmxlOiBKUXVlcnkgPSAkKDxkaXYgaWQ9e2BUcmFuc2xhdGVWYXJpYW50cy1kaWZmLSR7bGFuZ31gfSAvPikgYXMgSlF1ZXJ5O1xuXHRcdCR3cmFwcGVyLmFwcGVuZCgkZGlmZlRhYmxlLCA8aHIgLz4pO1xuXG5cdFx0Y29uc3QgYmFzZVBhZ2VOYW1lOiBzdHJpbmcgPSB3Z1BhZ2VOYW1lLnJlcGxhY2UoL1xcL3poJC8sICcnKTtcblx0XHRjb25zdCB0YXJnZXRUaXRsZTogc3RyaW5nID0gbGFuZyA9PT0gJ3poJyA/IGJhc2VQYWdlTmFtZSA6IGAke2Jhc2VQYWdlTmFtZX0vJHtsYW5nfWA7XG5cblx0XHRsZXQgbmV3UGFnZUNvbnRlbnQ6IHN0cmluZyA9ICcnO1xuXHRcdHZvaWQgYXBpXG5cdFx0XHQucGFyc2UoYHt7Tm90ZVRBfEcxPUlUfEcyPU1lZGlhV2lraX19PGRpdiBpZD1cIiR7T1BUSU9OUy5jb250ZW50SUR9XCI+JHtwYWdlQ29udGVudH08L2Rpdj5gLCB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0dXNlbGFuZzogbGFuZyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbihcblx0XHRcdFx0KGNvbnRlbnQ6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdG5ld1BhZ2VDb250ZW50ID0gJCg8ZGl2IGlubmVySFRNTD17Y29udGVudH0gLz4pXG5cdFx0XHRcdFx0XHQuZmluZChgIyR7T1BUSU9OUy5jb250ZW50SUR9YClcblx0XHRcdFx0XHRcdC50ZXh0KCk7XG5cblx0XHRcdFx0XHRjb25zdCBxdWVyeURpZmZQYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0XHR0aXRsZXM6IHRhcmdldFRpdGxlLFxuXHRcdFx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdFx0XHRydmRpZmZ0b3RleHQ6IG5ld1BhZ2VDb250ZW50LFxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRyZXR1cm4gYXBpLmdldChxdWVyeURpZmZQYXJhbXMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQoZXJyb3IpOiBudWxsID0+IHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6Kej5p6QJDHml7blj5HnlJ/plJnor6/vvJonLCAn6Kej5p6QJDHmmYLnmbznlJ/pjK/oqqTvvJonKS5yZXBsYWNlKCckMScsIGxhbmcpICsgZXJyb3IsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnRzJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdC50aGVuKFxuXHRcdFx0XHQoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdGlmIChkYXRhID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgJHRvb2wgPSAkKFxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj17bXcudXRpbC5nZXRVcmwodGFyZ2V0VGl0bGUpfT5cblx0XHRcdFx0XHRcdFx0XHR7bGFuZ33vvIh7bmFtZU9mTGFuZ3NbbGFuZ11977yJXG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx077yIPGEgaHJlZj17bXcudXRpbC5nZXRVcmwodGFyZ2V0VGl0bGUsIHthY3Rpb246ICdlZGl0J30pfT57d2luZG93LndnVUxTKCfnvJYnLCAn57eoJyl9PC9hPu+8iVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSBhcyBKUXVlcnk7XG5cblx0XHRcdFx0XHQkZGlmZlRhYmxlLmFwcGVuZCgkdG9vbCk7XG5cblx0XHRcdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhWydxdWVyeSddLnBhZ2VzO1xuXHRcdFx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0XHRcdGNvbnN0ICRzdWJtaXQgPSAkKFxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17W3B1Ymxpc2hDaGFuZ2VzLCAnY2R4LWJ1dHRvbiddfT5cblx0XHRcdFx0XHRcdFx0XHR7d2luZG93LndnVUxTKCflj5HluIPpobXpnaInLCAn55m85L2I6aCB6Z2iJyl9XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0KSBhcyBKUXVlcnk7XG5cdFx0XHRcdFx0XHQkc3VibWl0Lm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0JHN1Ym1pdC5yZW1vdmUoKTtcblxuXHRcdFx0XHRcdFx0XHRhcGkuY3JlYXRlKFxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldFRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRuZXdQYWdlQ29udGVudFxuXHRcdFx0XHRcdFx0XHQpLnRoZW4oXG5cdFx0XHRcdFx0XHRcdFx0KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkod2luZG93LndnVUxTKCflt7LnvJbovpEgJywgJ+W3sue3qOi8ryAnKSArIHRhcmdldFRpdGxlLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnRzJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHQoZXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+e8lui+kScsICfnt6jovK8gJykgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldFRpdGxlICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJyDlj5HnlJ/plJnor6/vvJonLCAnIOeZvOeUn+mMr+iqpO+8micpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnRzJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHQkdG9vbC5hcHBlbmQoJHN1Ym1pdCk7XG5cdFx0XHRcdFx0XHQkZGlmZlRhYmxlLmFwcGVuZChcblx0XHRcdFx0XHRcdFx0PHByZVxuXHRcdFx0XHRcdFx0XHRcdGlubmVySFRNTD17bmV3UGFnZUNvbnRlbnQucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHRcdC9bJjw+XS9naW0sXG5cdFx0XHRcdFx0XHRcdFx0XHQoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4gYCYjJHtzdHJpbmcuY29kZVBvaW50QXQoMCl9O2Bcblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IGRpZmY6IHN0cmluZyA9IHBhZ2UucmV2aXNpb25zWzBdLmRpZmYuYm9keTtcblx0XHRcdFx0XHRpZiAoZGlmZiA9PT0gJycpIHtcblx0XHRcdFx0XHRcdCR0b29sLmFwcGVuZCg8c3BhbiBjbGFzc05hbWU9e25vQ2hhbmdlc30+e3dpbmRvdy53Z1VMUygn5peg5pu05pS5JywgJ+eEoeiuiuabtCcpfTwvc3Bhbj4pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zdCAkc3VibWl0ID0gJChcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e1twdWJsaXNoQ2hhbmdlcywgJ2NkeC1idXR0b24nXX0+XG5cdFx0XHRcdFx0XHRcdFx0e3dpbmRvdy53Z1VMUygn5Y+R5biD5pu05pS5JywgJ+eZvOS9iOiuiuabtCcpfVxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdCkgYXMgSlF1ZXJ5O1xuXHRcdFx0XHRcdFx0JHN1Ym1pdC5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdCRzdWJtaXQucmVtb3ZlKCk7XG5cblx0XHRcdFx0XHRcdFx0YXBpLmVkaXQodGFyZ2V0VGl0bGUsICgpID0+ICh7XG5cdFx0XHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBuZXdQYWdlQ29udGVudCxcblx0XHRcdFx0XHRcdFx0XHRub2NyZWF0ZTogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdH0pKS50aGVuKFxuXHRcdFx0XHRcdFx0XHRcdCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KHdpbmRvdy53Z1VMUygn5bey57yW6L6RJywgJ+W3sue3qOi8ryAnKSArIHRhcmdldFRpdGxlLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnRzJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3dcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQud2dVTFMoJ+e8lui+kSQx5Y+R55Sf6ZSZ6K+v77yaJywgJ+e3qOi8ryQx55m855Sf6Yyv6Kqk77yaJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgnJDEnLCB0YXJnZXRUaXRsZSkgKyBlcnJvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnRzJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHQkdG9vbC5hcHBlbmQoJHN1Ym1pdCk7XG5cdFx0XHRcdFx0XHQkZGlmZlRhYmxlLmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCg8dGFibGUgY2xhc3NOYW1lPVwiZGlmZlwiIGlubmVySFRNTD17ZGlmZn0gLz4pLnByZXBlbmQoXG5cdFx0XHRcdFx0XHRcdFx0PGNvbGdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGNvbCBjbGFzc05hbWU9XCJkaWZmLW1hcmtlclwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y29sIGNsYXNzTmFtZT1cImRpZmYtY29udGVudFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y29sIGNsYXNzTmFtZT1cImRpZmYtbWFya2VyXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1jb250ZW50XCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2NvbGdyb3VwPlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0KGVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPliQx5beu5byC5pe25Y+R55Sf6ZSZ6K+v77yaJywgJ+WPluW+lyQx5beu55Ww5pmC55m855Sf6Yyv6Kqk77yaJykucmVwbGFjZSgnJDEnLCBsYW5nKSArIGVycm9yLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50cycsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdFx0LmFsd2F5cygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHByb2Nlc3MocGFnZUNvbnRlbnQpO1xuXHRcdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgcXVlcnlDb250ZW50UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0dGl0bGVzOiB3Z1BhZ2VOYW1lLFxuXHRcdGN1cnRpbWVzdGFtcDogdHJ1ZSxcblx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnXSxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXM7XG5cblx0dm9pZCBhcGlcblx0XHQuZ2V0KHF1ZXJ5Q29udGVudFBhcmFtcylcblx0XHQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0aWYgKCFkYXRhWydxdWVyeSddPy5wYWdlcykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgndW5rbm93bicpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhWydxdWVyeSddLnBhZ2VzO1xuXG5cdFx0XHRpZiAocGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdpbnZhbGlkdGl0bGUnKTtcblx0XHRcdH1cblx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ25vY3JlYXRlLW1pc3NpbmcnKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgW3tjb250ZW50fV0gPSBwYWdlLnJldmlzaW9ucztcblxuXHRcdFx0cmV0dXJuIGNvbnRlbnQgYXMgc3RyaW5nO1xuXHRcdH0pXG5cdFx0LnRoZW4oKGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRsZXQgcGFnZUNvbnRlbnQ6IHN0cmluZyA9IGNvbnRlbnQ7XG5cblx0XHRcdHBhZ2VDb250ZW50ID0gcGFnZUNvbnRlbnQucmVwbGFjZShcblx0XHRcdFx0L1tcXHMjJicqOjw+W1xcXV97fH1dL2dpbSxcblx0XHRcdFx0KHN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IGAmIyR7c3RyaW5nLmNvZGVQb2ludEF0KDApfTtgXG5cdFx0XHQpO1xuXHRcdFx0cGFnZUNvbnRlbnQgPSBwYWdlQ29udGVudC5yZXBsYWNlKFxuXHRcdFx0XHQvKCYjOTE7JiM5MTspKCg/Oig/ISYjMTI0OykoPyEmIzkzOykuKSs/KSgmIzEyNDsoPzooPyEmIzkzOykuKSs/JiM5MzsmIzkzOykvZyxcblx0XHRcdFx0JyQxLXskMn0tJDMnXG5cdFx0XHQpO1xuXHRcdFx0cGFnZUNvbnRlbnQgPSBwYWdlQ29udGVudC5yZXBsYWNlKC8tJiMxMjM7KC4rPykmIzEyNTstL2csIChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PlxuXHRcdFx0XHRzdHJpbmdcblx0XHRcdFx0XHQucmVwbGFjZSgnLSYjMTIzOycsICcteycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJy0mIzEyMzsnLCAnLXsnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCcmIzEyNTstJywgJ30tJylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiMxMjQ7L2csICd8Jylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiMzMjsvZywgJyAnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzYxOy9nLCAnPScpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjNjI7L2csICc+Jylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiM1ODsvZywgJzonKVxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHBhZ2VDb250ZW50O1xuXHRcdH0pXG5cdFx0LnRoZW4oKHBhZ2VDb250ZW50OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdHByb2Nlc3MocGFnZUNvbnRlbnQpO1xuXHRcdH0pO1xufTtcblxuZXhwb3J0IHt0cmFuc2xhdGVWYXJpYW50c307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBUcmFuc2xhdGVWYXJpYW50cy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNDckIsSUFBQUMsMkJBQTRCO0FBQzVCLElBQUFDLFlBQWE7QUFDYixJQUFBQyxVQUFXOztBQ0ZMLElBQU1DLFlBQVk7QUFDbEIsSUFBTUMsaUJBQWlCO0FBQ3ZCLElBQU1DLFlBQVk7QUFDbEIsSUFBTUMsVUFBVTs7QUNGdkIsSUFBQUMscUJBQWtCQyxRQUFBVCxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNE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QUdzRCxLQUFLOEIsZUFBZUYsV0FBVyxLQUFLeEYsT0FBT0MsTUFBTSxRQUFRLE1BQU0sQ0FBQztBQUV6R3dGLGNBQUEsUUFBQUEsWUFBQSxVQUFBQSxRQUFTRSxpQkFBaUIsU0FBUyxNQUFZO0FBQzlDRixZQUFRdkIsT0FBTztBQUNmL0Usc0JBQWtCQyxVQUFVO0VBQzdCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJ0cmFuc2xhdGVWYXJpYW50c1N1bW1hcnkiLCAiY29udGVudElEIiwgInZlcnNpb24iLCAibm9DaGFuZ2VzIiwgInB1Ymxpc2hDaGFuZ2VzIiwgInN1Ym1pdEFsbCIsICJ3YXJuaW5nIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImxhbmdzIiwgIm5hbWVPZkxhbmdzIiwgInpoIiwgInRyYW5zbGF0ZVZhcmlhbnRzIiwgIndnUGFnZU5hbWUiLCAiX3Byb21wdCIsICJzdW1tYXJ5IiwgInJlcGxhY2UiLCAiJHdyYXBwZXIiLCAiJCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaWQiLCAicHJlcGVuZFRvIiwgIiRzdWJtaXRBbGwiLCAiY2xhc3NOYW1lIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJvbiIsICIkYnV0dG9ucyIsICJmaW5kIiwgImxlbmd0aCIsICJtdyIsICJub3RpZnkiLCAidGFnIiwgInR5cGUiLCAiY29uZmlybSIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJidXR0b24iLCAidmFsdWUiLCAidHJpZ2dlciIsICJlcnIiLCAiZSIsICJmIiwgImFwcGVuZCIsICJkZWZhdWx0TGFuZ3MiLCAicnVuTGFuZ3MiLCAicHJvbXB0IiwgImpvaW4iLCAic3BsaXQiLCAibGFuZ1F1ZXVlIiwgIm1hcCIsICJsYW5nIiwgInRyaW0iLCAiZmlsdGVyIiwgImluY2x1ZGVzIiwgInByb2Nlc3MiLCAicGFnZUNvbnRlbnQiLCAic2hpZnQiLCAiJGRpZmZUYWJsZSIsICJiYXNlUGFnZU5hbWUiLCAidGFyZ2V0VGl0bGUiLCAibmV3UGFnZUNvbnRlbnQiLCAicGFyc2UiLCAiYWN0aW9uIiwgInVzZWxhbmciLCAidGhlbiIsICJjb250ZW50IiwgImlubmVySFRNTCIsICJ0ZXh0IiwgInF1ZXJ5RGlmZlBhcmFtcyIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aXRsZXMiLCAicHJvcCIsICJydmRpZmZ0b3RleHQiLCAiZ2V0IiwgImVycm9yIiwgImRhdGEiLCAiJHRvb2wiLCAiaHJlZiIsICJ1dGlsIiwgImdldFVybCIsICJwYWdlIiwgInBhZ2VzIiwgIm1pc3NpbmciLCAiJHN1Ym1pdCIsICJyZW1vdmUiLCAiY3JlYXRlIiwgInN0cmluZyIsICJjb2RlUG9pbnRBdCIsICJkaWZmIiwgInJldmlzaW9ucyIsICJib2R5IiwgImVkaXQiLCAibm9jcmVhdGUiLCAicHJlcGVuZCIsICJhbHdheXMiLCAicXVlcnlDb250ZW50UGFyYW1zIiwgImN1cnRpbWVzdGFtcCIsICJydnByb3AiLCAiX2RhdGEkcXVlcnkiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgImludmFsaWQiLCAiZ2V0Qm9keSIsICIkYm9keSIsICJjb25maWciLCAidGVzdCIsICJwb3J0bGV0SWQiLCAiZWxlbWVudCIsICJhZGRQb3J0bGV0TGluayIsICJhZGRFdmVudExpc3RlbmVyIl0KfQo=
