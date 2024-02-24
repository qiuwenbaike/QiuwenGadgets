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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
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
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
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
var version = "2.0";
//! src/TranslateVariants/modules/translateVariants.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/TranslateVariants/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("TranslateVariants/".concat(version));
//! src/TranslateVariants/modules/translateVariants.tsx
var langs = /* @__PURE__ */ new Set(["zh", "zh-hans", "zh-cn", "zh-my", "zh-sg", "zh-hant", "zh-hk", "zh-mo", "zh-tw"]);
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
    className: ["mw-ui-button", "mw-ui-progressive", "cdx-button", "cdx-button--action-progressive"]
  }, window.wgULS("发布所有更改", "發佈所有變更")));
  $submitAll.on("click", () => {
    const $buttons = $wrapper.find(".TranslateVariants-publish-changes");
    if (!$buttons.length) {
      void mw.notify(window.wgULS("没有任何可以发布的更改", "沒有任何變更可發佈"), {
        tag: "TranslateVariants",
        type: "error"
      });
      return;
    }
    if (!confirm("".concat(window.wgULS("更改", "發佈")).concat($buttons.length).concat(window.wgULS("个更改", "個變更"), "？"))) {
      void mw.notify(window.wgULS("已取消更改", "已取消發佈"), {
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
    style: {
      textAlign: "right"
    }
  })).append($submitAll), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    style: {
      color: "#f00"
    }
  }, window.wgULS("提醒：TranslateVariants工具使用IT及MediaWiki转换组进行自动转换，请确认转换结果是否正确！", "提醒：TranslateVariants工具使用IT及MediaWiki轉換組進行自動轉換，請確認轉換結果是否正確！")));
  const defaultLangs = [...langs];
  let runLangs = (_prompt = prompt(window.wgULS("转换以下语言（以逗号隔开）：", "轉換以下語言（以逗號隔開）："), defaultLangs.join(","))) === null || _prompt === void 0 ? void 0 : _prompt.split(",");
  if (runLangs === null) {
    runLangs = defaultLangs;
  }
  const langQueue = runLangs.map((lang) => lang.trim()).filter((lang) => langs.has(lang));
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
    void api.parse('{{NoteTA|G1=IT|G2=MediaWiki}}<div id="TranslateVariants-content">'.concat(pageContent, "</div>"), {
      prop: "text",
      uselang: lang
    }).then((content) => {
      newPageContent = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        innerHTML: content
      })).find("#TranslateVariants-content").text();
      const _params = {
        action: "query",
        format: "json",
        formatversion: "2",
        titles: targetTitle,
        prop: "revisions",
        rvdifftotext: newPageContent
      };
      return api.post(_params);
    }, (error) => {
      void mw.notify("解析".concat(lang).concat(window.wgULS("时发生错误：", "時發生錯誤：")).concat(error), {
        tag: "TranslateVariant",
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
          className: ["TranslateVariants-publish-changes", "mw-ui-button", "cdx-button"],
          style: {
            float: "right"
          }
        }, window.wgULS("发布页面", "發佈頁面")));
        $submit.on("click", () => {
          $submit.remove();
          api.create(targetTitle, {
            summary
          }, newPageContent).then(() => {
            void mw.notify(window.wgULS("已编辑 ", "已編輯 ") + targetTitle, {
              tag: "TranslateVariant",
              type: "success"
            });
          }, (error) => {
            void mw.notify(window.wgULS("编辑", "編輯 ") + targetTitle + window.wgULS(" 发生错误：", " 發生錯誤：") + error, {
              tag: "TranslateVariant",
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
          style: {
            float: "right"
          }
        }, window.wgULS("无更改", "無變更")));
      } else {
        const $submit = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("button", {
          className: ["TranslateVariants-publish-changes", "mw-ui-button", "cdx-button"],
          style: {
            float: "right"
          }
        }, window.wgULS("发布更改", "發佈變更")));
        $submit.on("click", () => {
          $submit.remove();
          api.edit(targetTitle, () => ({
            summary,
            text: newPageContent,
            nocreate: false
          })).then(() => {
            void mw.notify(window.wgULS("已编辑", "已編輯 ") + targetTitle, {
              tag: "TranslateVariant",
              type: "success"
            });
          }, (error) => {
            void mw.notify(window.wgULS("编辑", "編輯 ") + targetTitle + window.wgULS(" 发生错误：", " 發生錯誤：") + error, {
              tag: "TranslateVariant",
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
      void mw.notify(window.wgULS("获取", "取得") + lang + window.wgULS("差异时发生错误：", "差異時發生錯誤：") + error, {
        tag: "TranslateVariant",
        type: "error"
      });
    }).always(() => {
      process(pageContent);
    });
  };
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "revisions",
    titles: wgPageName,
    curtimestamp: true,
    rvprop: ["content", "timestamp"]
  };
  void api.get(params).then((data) => {
    var _data$query;
    if (!((_data$query = data["query"]) !== null && _data$query !== void 0 && _data$query.pages)) {
      return $.Deferred().reject("unknown");
    }
    const [page] = data["query"].pages;
    if (!(page !== null && page !== void 0 && page.invalid)) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLnRzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9vcHRpb25zLmpzb24iLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvdHJhbnNsYXRlVmFyaWFudHMudHN4IiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9tb2R1bGVzL2FwaS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt0cmFuc2xhdGVWYXJpYW50c30gZnJvbSAnLi9tb2R1bGVzL3RyYW5zbGF0ZVZhcmlhbnRzJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKCEvXk1lZGlhV2lraTpbXi9dKyhcXC96aCk/JC8udGVzdCh3Z1BhZ2VOYW1lKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gJGJvZHkuZmluZCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgd2luZG93LndnVUxTKCfovazmjaLlj5jkvZMnLCAn6L2J5o+b6K6K6auUJykpO1xuXG5cdGVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0dHJhbnNsYXRlVmFyaWFudHMod2dQYWdlTmFtZSk7XG5cdH0pO1xufSk7XG4iLCAie1xuXHRcInRyYW5zbGF0ZVZhcmlhbnRzU3VtbWFyeVwiOiBcIuiHquWKqOi9rOaNouWPmOS9k+iHqltbJDFdXe+8iFtbTWVkaWFXaWtpOkdhZGdldC1UcmFuc2xhdGVWYXJpYW50cy5qc3xUcmFuc2xhdGVWYXJpYW50c11d77yJXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxudHlwZSBMYW5ncyA9ICd6aCcgfCAnemgtaGFucycgfCAnemgtY24nIHwgJ3poLW15JyB8ICd6aC1zZycgfCAnemgtaGFudCcgfCAnemgtaGsnIHwgJ3poLW1vJyB8ICd6aC10dyc7XG5jb25zdCBsYW5nczogU2V0PExhbmdzPiA9IG5ldyBTZXQoWyd6aCcsICd6aC1oYW5zJywgJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXSk7XG5jb25zdCBuYW1lT2ZMYW5ncyA9IHtcblx0emg6ICfljp/lp4snLFxuXHQnemgtaGFucyc6ICfnroDkvZMnLFxuXHQnemgtY24nOiAn5Lit5Zu95aSn6ZmG566A5L2TJyxcblx0J3poLW15JzogJ+mprOadpeilv+S6mueugOS9kycsXG5cdCd6aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHQnemgtaGFudCc6ICfnuYHpq5QnLFxuXHQnemgtaGsnOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0J3poLW1vJzogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdCd6aC10dyc6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPExhbmdzLCBzdHJpbmc+O1xuXG5jb25zdCB0cmFuc2xhdGVWYXJpYW50cyA9ICh3Z1BhZ2VOYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3Qgc3VtbWFyeTogc3RyaW5nID0gT1BUSU9OUy50cmFuc2xhdGVWYXJpYW50c1N1bW1hcnkucmVwbGFjZSgvXFwkMS9nLCB3Z1BhZ2VOYW1lKTtcblxuXHRjb25zdCAkd3JhcHBlcjogSlF1ZXJ5ID0gKCQoPGRpdiBpZD1cIlRyYW5zbGF0ZVZhcmlhbnRzXCIgLz4pIGFzIEpRdWVyeSkucHJlcGVuZFRvKCcjYm9keUNvbnRlbnQnKTtcblxuXHRjb25zdCAkc3VibWl0QWxsOiBKUXVlcnkgPSAkKFxuXHRcdDxidXR0b24gY2xhc3NOYW1lPXtbJ213LXVpLWJ1dHRvbicsICdtdy11aS1wcm9ncmVzc2l2ZScsICdjZHgtYnV0dG9uJywgJ2NkeC1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZSddfT5cblx0XHRcdHt3aW5kb3cud2dVTFMoJ+WPkeW4g+aJgOacieabtOaUuScsICfnmbzkvYjmiYDmnInorormm7QnKX1cblx0XHQ8L2J1dHRvbj5cblx0KSBhcyBKUXVlcnk7XG5cdCRzdWJtaXRBbGwub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRidXR0b25zOiBKUXVlcnkgPSAkd3JhcHBlci5maW5kKCcuVHJhbnNsYXRlVmFyaWFudHMtcHVibGlzaC1jaGFuZ2VzJyk7XG5cdFx0aWYgKCEkYnV0dG9ucy5sZW5ndGgpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KHdpbmRvdy53Z1VMUygn5rKh5pyJ5Lu75L2V5Y+v5Lul5Y+R5biD55qE5pu05pS5JywgJ+aykuacieS7u+S9leiuiuabtOWPr+eZvOS9iCcpLCB7XG5cdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnRzJyxcblx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghY29uZmlybShgJHt3aW5kb3cud2dVTFMoJ+abtOaUuScsICfnmbzkvYgnKX0keyRidXR0b25zLmxlbmd0aH0ke3dpbmRvdy53Z1VMUygn5Liq5pu05pS5JywgJ+WAi+iuiuabtCcpfe+8n2ApKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSh3aW5kb3cud2dVTFMoJ+W3suWPlua2iOabtOaUuScsICflt7Llj5bmtojnmbzkvYgnKSwge3RhZzogJ1RyYW5zbGF0ZVZhcmlhbnRzJywgdHlwZTogJ3dhcm4nfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBidXR0b24gb2YgJGJ1dHRvbnMpIHtcblx0XHRcdCQoYnV0dG9uKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdH1cblx0fSk7XG5cblx0JHdyYXBwZXIuYXBwZW5kKFxuXHRcdCQoPGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ3JpZ2h0J319IC8+KS5hcHBlbmQoJHN1Ym1pdEFsbCksXG5cdFx0PGRpdiBzdHlsZT17e2NvbG9yOiAnI2YwMCd9fT5cblx0XHRcdHt3aW5kb3cud2dVTFMoXG5cdFx0XHRcdCfmj5DphpLvvJpUcmFuc2xhdGVWYXJpYW50c+W3peWFt+S9v+eUqElU5Y+KTWVkaWFXaWtp6L2s5o2i57uE6L+b6KGM6Ieq5Yqo6L2s5o2i77yM6K+356Gu6K6k6L2s5o2i57uT5p6c5piv5ZCm5q2j56Gu77yBJyxcblx0XHRcdFx0J+aPkOmGku+8mlRyYW5zbGF0ZVZhcmlhbnRz5bel5YW35L2/55SoSVTlj4pNZWRpYVdpa2novYnmj5vntYTpgLLooYzoh6rli5XovYnmj5vvvIzoq4vnorroqo3ovYnmj5vntZDmnpzmmK/lkKbmraPnorrvvIEnXG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xuXG5cdGNvbnN0IGRlZmF1bHRMYW5nczogTGFuZ3NbXSA9IFsuLi5sYW5nc107XG5cblx0bGV0IHJ1bkxhbmdzID0gcHJvbXB0KFxuXHRcdHdpbmRvdy53Z1VMUygn6L2s5o2i5Lul5LiL6K+t6KiA77yI5Lul6YCX5Y+36ZqU5byA77yJ77yaJywgJ+i9ieaPm+S7peS4i+iqnuiogO+8iOS7pemAl+iZn+malOmWi++8ie+8micpLFxuXHRcdGRlZmF1bHRMYW5ncy5qb2luKCcsJylcblx0KT8uc3BsaXQoJywnKSBhcyBMYW5nc1tdIHwgbnVsbDtcblx0aWYgKHJ1bkxhbmdzID09PSBudWxsKSB7XG5cdFx0cnVuTGFuZ3MgPSBkZWZhdWx0TGFuZ3M7XG5cdH1cblxuXHRjb25zdCBsYW5nUXVldWU6IExhbmdzW10gPSBydW5MYW5nc1xuXHRcdC5tYXAoKGxhbmc6IExhbmdzKTogTGFuZ3MgPT4gbGFuZy50cmltKCkgYXMgTGFuZ3MpXG5cdFx0LmZpbHRlcigobGFuZzogTGFuZ3MpOiBib29sZWFuID0+IGxhbmdzLmhhcyhsYW5nKSk7XG5cblx0Y29uc3QgcHJvY2VzcyA9IChwYWdlQ29udGVudDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0aWYgKCFsYW5nUXVldWUubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbGFuZyA9IGxhbmdRdWV1ZS5zaGlmdCgpIGFzIExhbmdzO1xuXG5cdFx0Y29uc3QgJGRpZmZUYWJsZTogSlF1ZXJ5ID0gJCg8ZGl2IGlkPXtgVHJhbnNsYXRlVmFyaWFudHMtZGlmZi0ke2xhbmd9YH0gLz4pIGFzIEpRdWVyeTtcblx0XHQkd3JhcHBlci5hcHBlbmQoJGRpZmZUYWJsZSwgPGhyIC8+KTtcblxuXHRcdGNvbnN0IGJhc2VQYWdlTmFtZTogc3RyaW5nID0gd2dQYWdlTmFtZS5yZXBsYWNlKC9cXC96aCQvLCAnJyk7XG5cdFx0Y29uc3QgdGFyZ2V0VGl0bGU6IHN0cmluZyA9IGxhbmcgPT09ICd6aCcgPyBiYXNlUGFnZU5hbWUgOiBgJHtiYXNlUGFnZU5hbWV9LyR7bGFuZ31gO1xuXG5cdFx0bGV0IG5ld1BhZ2VDb250ZW50OiBzdHJpbmcgPSAnJztcblx0XHR2b2lkIGFwaVxuXHRcdFx0LnBhcnNlKGB7e05vdGVUQXxHMT1JVHxHMj1NZWRpYVdpa2l9fTxkaXYgaWQ9XCJUcmFuc2xhdGVWYXJpYW50cy1jb250ZW50XCI+JHtwYWdlQ29udGVudH08L2Rpdj5gLCB7XG5cdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdFx0dXNlbGFuZzogbGFuZyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbihcblx0XHRcdFx0KGNvbnRlbnQ6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdG5ld1BhZ2VDb250ZW50ID0gJCg8ZGl2IGlubmVySFRNTD17Y29udGVudH0gLz4pXG5cdFx0XHRcdFx0XHQuZmluZCgnI1RyYW5zbGF0ZVZhcmlhbnRzLWNvbnRlbnQnKVxuXHRcdFx0XHRcdFx0LnRleHQoKTtcblxuXHRcdFx0XHRcdGNvbnN0IF9wYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0XHR0aXRsZXM6IHRhcmdldFRpdGxlLFxuXHRcdFx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdFx0XHRydmRpZmZ0b3RleHQ6IG5ld1BhZ2VDb250ZW50LFxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRyZXR1cm4gYXBpLnBvc3QoX3BhcmFtcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChlcnJvcik6IG51bGwgPT4ge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KGDop6PmnpAke2xhbmd9JHt3aW5kb3cud2dVTFMoJ+aXtuWPkeeUn+mUmeivr++8micsICfmmYLnmbznlJ/pjK/oqqTvvJonKX0ke2Vycm9yfWAsIHtcblx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XHQudGhlbihcblx0XHRcdFx0KGRhdGEpID0+IHtcblx0XHRcdFx0XHRpZiAoZGF0YSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0ICR0b29sID0gJChcblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKHRhcmdldFRpdGxlKX0+XG5cdFx0XHRcdFx0XHRcdFx0e2xhbmd977yIe25hbWVPZkxhbmdzW2xhbmddfe+8iVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdO+8iDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKHRhcmdldFRpdGxlLCB7YWN0aW9uOiAnZWRpdCd9KX0+e3dpbmRvdy53Z1VMUygn57yWJywgJ+e3qCcpfTwvYT7vvIlcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkgYXMgSlF1ZXJ5O1xuXG5cdFx0XHRcdFx0JGRpZmZUYWJsZS5hcHBlbmQoJHRvb2wpO1xuXG5cdFx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gZGF0YVsncXVlcnknXS5wYWdlcztcblx0XHRcdFx0XHRpZiAocGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdFx0XHRjb25zdCAkc3VibWl0ID0gJChcblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17WydUcmFuc2xhdGVWYXJpYW50cy1wdWJsaXNoLWNoYW5nZXMnLCAnbXctdWktYnV0dG9uJywgJ2NkeC1idXR0b24nXX1cblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e2Zsb2F0OiAncmlnaHQnfX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHt3aW5kb3cud2dVTFMoJ+WPkeW4g+mhtemdoicsICfnmbzkvYjpoIHpnaInKX1cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQpIGFzIEpRdWVyeTtcblx0XHRcdFx0XHRcdCRzdWJtaXQub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHQkc3VibWl0LnJlbW92ZSgpO1xuXG5cdFx0XHRcdFx0XHRcdGFwaS5jcmVhdGUoXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0VGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdG5ld1BhZ2VDb250ZW50XG5cdFx0XHRcdFx0XHRcdCkudGhlbihcblx0XHRcdFx0XHRcdFx0XHQoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeSh3aW5kb3cud2dVTFMoJ+W3sue8lui+kSAnLCAn5bey57eo6LyvICcpICsgdGFyZ2V0VGl0bGUsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0KGVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvICcpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXRUaXRsZSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCcg5Y+R55Sf6ZSZ6K+v77yaJywgJyDnmbznlJ/pjK/oqqTvvJonKSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3IsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHQkdG9vbC5hcHBlbmQoJHN1Ym1pdCk7XG5cdFx0XHRcdFx0XHQkZGlmZlRhYmxlLmFwcGVuZChcblx0XHRcdFx0XHRcdFx0PHByZVxuXHRcdFx0XHRcdFx0XHRcdGlubmVySFRNTD17bmV3UGFnZUNvbnRlbnQucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHRcdC9bJjw+XS9naW0sXG5cdFx0XHRcdFx0XHRcdFx0XHQoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4gYCYjJHtzdHJpbmcuY29kZVBvaW50QXQoMCl9O2Bcblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IGRpZmY6IHN0cmluZyA9IHBhZ2UucmV2aXNpb25zWzBdLmRpZmYuYm9keTtcblx0XHRcdFx0XHRpZiAoZGlmZiA9PT0gJycpIHtcblx0XHRcdFx0XHRcdCR0b29sLmFwcGVuZCg8c3BhbiBzdHlsZT17e2Zsb2F0OiAncmlnaHQnfX0+e3dpbmRvdy53Z1VMUygn5peg5pu05pS5JywgJ+eEoeiuiuabtCcpfTwvc3Bhbj4pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zdCAkc3VibWl0ID0gJChcblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17WydUcmFuc2xhdGVWYXJpYW50cy1wdWJsaXNoLWNoYW5nZXMnLCAnbXctdWktYnV0dG9uJywgJ2NkeC1idXR0b24nXX1cblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e2Zsb2F0OiAncmlnaHQnfX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHt3aW5kb3cud2dVTFMoJ+WPkeW4g+abtOaUuScsICfnmbzkvYjorormm7QnKX1cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQpIGFzIEpRdWVyeTtcblx0XHRcdFx0XHRcdCRzdWJtaXQub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHQkc3VibWl0LnJlbW92ZSgpO1xuXG5cdFx0XHRcdFx0XHRcdGFwaS5lZGl0KFxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldFRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdCgpOiBBcGlFZGl0UGFnZVBhcmFtcyA9PiAoe1xuXHRcdFx0XHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IG5ld1BhZ2VDb250ZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0bm9jcmVhdGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdCkudGhlbihcblx0XHRcdFx0XHRcdFx0XHQoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeSh3aW5kb3cud2dVTFMoJ+W3sue8lui+kScsICflt7Lnt6jovK8gJykgKyB0YXJnZXRUaXRsZSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+e8lui+kScsICfnt6jovK8gJykgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldFRpdGxlICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJyDlj5HnlJ/plJnor6/vvJonLCAnIOeZvOeUn+mMr+iqpO+8micpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdCR0b29sLmFwcGVuZCgkc3VibWl0KTtcblx0XHRcdFx0XHRcdCRkaWZmVGFibGUuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKDx0YWJsZSBjbGFzc05hbWU9XCJkaWZmXCIgaW5uZXJIVE1MPXtkaWZmfSAvPikucHJlcGVuZChcblx0XHRcdFx0XHRcdFx0XHQ8Y29sZ3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y29sIGNsYXNzTmFtZT1cImRpZmYtbWFya2VyXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1jb250ZW50XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1tYXJrZXJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGNvbCBjbGFzc05hbWU9XCJkaWZmLWNvbnRlbnRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvY29sZ3JvdXA+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQoZXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+WJywgJ+WPluW+lycpICtcblx0XHRcdFx0XHRcdFx0bGFuZyArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5beu5byC5pe25Y+R55Sf6ZSZ6K+v77yaJywgJ+W3rueVsOaZgueZvOeUn+mMr+iqpO+8micpICtcblx0XHRcdFx0XHRcdFx0ZXJyb3IsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdC5hbHdheXMoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRwcm9jZXNzKHBhZ2VDb250ZW50KTtcblx0XHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHR0aXRsZXM6IHdnUGFnZU5hbWUsXG5cdFx0Y3VydGltZXN0YW1wOiB0cnVlLFxuXHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCddLFxuXHR9O1xuXG5cdHZvaWQgYXBpXG5cdFx0LmdldChwYXJhbXMpXG5cdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdGlmICghZGF0YVsncXVlcnknXT8ucGFnZXMpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ3Vua25vd24nKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgW3BhZ2VdID0gZGF0YVsncXVlcnknXS5wYWdlcztcblx0XHRcdGlmICghcGFnZT8uaW52YWxpZCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnaW52YWxpZHRpdGxlJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ25vY3JlYXRlLW1pc3NpbmcnKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgW3tjb250ZW50fV0gPSBwYWdlLnJldmlzaW9ucztcblxuXHRcdFx0cmV0dXJuIGNvbnRlbnQgYXMgc3RyaW5nO1xuXHRcdH0pXG5cdFx0LnRoZW4oKGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRsZXQgcGFnZUNvbnRlbnQ6IHN0cmluZyA9IGNvbnRlbnQ7XG5cblx0XHRcdHBhZ2VDb250ZW50ID0gcGFnZUNvbnRlbnQucmVwbGFjZShcblx0XHRcdFx0L1tcXHMjJicqOjw+W1xcXV97fH1dL2dpbSxcblx0XHRcdFx0KHN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IGAmIyR7c3RyaW5nLmNvZGVQb2ludEF0KDApfTtgXG5cdFx0XHQpO1xuXHRcdFx0cGFnZUNvbnRlbnQgPSBwYWdlQ29udGVudC5yZXBsYWNlKFxuXHRcdFx0XHQvKCYjOTE7JiM5MTspKCg/Oig/ISYjMTI0OykoPyEmIzkzOykuKSs/KSgmIzEyNDsoPzooPyEmIzkzOykuKSs/JiM5MzsmIzkzOykvZyxcblx0XHRcdFx0JyQxLXskMn0tJDMnXG5cdFx0XHQpO1xuXHRcdFx0cGFnZUNvbnRlbnQgPSBwYWdlQ29udGVudC5yZXBsYWNlKC8tJiMxMjM7KC4rPykmIzEyNTstL2csIChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PlxuXHRcdFx0XHRzdHJpbmdcblx0XHRcdFx0XHQucmVwbGFjZSgnLSYjMTIzOycsICcteycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJy0mIzEyMzsnLCAnLXsnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCcmIzEyNTstJywgJ30tJylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiMxMjQ7L2csICd8Jylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiMzMjsvZywgJyAnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzYxOy9nLCAnPScpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjNjI7L2csICc+Jylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiM1ODsvZywgJzonKVxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHBhZ2VDb250ZW50O1xuXHRcdH0pXG5cdFx0LnRoZW4oKHBhZ2VDb250ZW50OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdHByb2Nlc3MocGFnZUNvbnRlbnQpO1xuXHRcdH0pO1xufTtcblxuZXhwb3J0IHt0cmFuc2xhdGVWYXJpYW50c307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBUcmFuc2xhdGVWYXJpYW50cy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0NyQixJQUFBQywyQkFBNEI7QUFDNUIsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxxQkFBa0JDLFFBQUFKLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0FsQixJQUFBSyxvQkFBd0JMLFFBQUEsaUJBQUE7QUFFeEIsSUFBTU0sT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSxxQkFBQUMsT0FBdUNOLE9BQU8sQ0FBRTs7QURFcEUsSUFBTU8sUUFBb0Isb0JBQUlDLElBQUksQ0FBQyxNQUFNLFdBQVcsU0FBUyxTQUFTLFNBQVMsV0FBVyxTQUFTLFNBQVMsT0FBTyxDQUFDO0FBQ3BILElBQU1DLGNBQWM7RUFDbkJDLElBQUk7RUFDSixXQUFXO0VBQ1gsU0FBUztFQUNULFNBQVM7RUFDVCxTQUFTO0VBQ1QsV0FBVztFQUNYLFNBQVM7RUFDVCxTQUFTO0VBQ1QsU0FBUztBQUNWO0FBRUEsSUFBTUMsb0JBQXFCQyxnQkFBNkI7QUFBQSxNQUFBQztBQUN2RCxRQUFNQyxVQUEwQmYseUJBQXlCZ0IsUUFBUSxRQUFRSCxVQUFVO0FBRW5GLFFBQU1JLFdBQW9CQyxFQUFFaEIsbUNBQUFpQixRQUFBQyxjQUFDLE9BQUE7SUFBSUMsSUFBRztFQUFBLENBQW9CLENBQUUsRUFBYUMsVUFBVSxjQUFjO0FBRS9GLFFBQU1DLGFBQXFCTCxFQUMxQmhCLG1DQUFBaUIsUUFBQUMsY0FBQyxVQUFBO0lB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QU9DLFlBQVksQ0FBQyxHQUFDLEdBQUEsQ0FDdkQ7QUFDQWxDLGtCQUFjQSxZQUFZaEQsUUFDekIsK0VBQ0EsWUFDRDtBQUNBZ0Qsa0JBQWNBLFlBQVloRCxRQUFRLHdCQUF5QmlGLFlBQzFEQSxPQUNFakYsUUFBUSxXQUFXLElBQUksRUFDdkJBLFFBQVEsV0FBVyxJQUFJLEVBQ3ZCQSxRQUFRLFdBQVcsSUFBSSxFQUN2QkEsUUFBUSxXQUFXLEdBQUcsRUFDdEJBLFFBQVEsVUFBVSxHQUFHLEVBQ3JCQSxRQUFRLFVBQVUsR0FBRyxFQUNyQkEsUUFBUSxVQUFVLEdBQUcsRUFDckJBLFFBQVEsVUFBVSxHQUFHLENBQ3hCO0FBRUEsV0FBT2dEO0VBQ1IsQ0FBQyxFQUNBUyxLQUFNVCxpQkFBOEI7QUFDcENELFlBQVFDLFdBQVc7RUFDcEIsQ0FBQztBQUNIOztBRjlUQSxNQUFBLEdBQUtsRSxtQkFBQW9ILFNBQVEsRUFBRXpDLEtBQU0wQyxXQUF5QztBQUM3RCxRQUFNO0lBQUN0RztFQUFVLElBQUlrQixHQUFHcUYsT0FBT1AsSUFBSTtBQUNuQyxNQUFJLENBQUMsMkJBQTJCUSxLQUFLeEcsVUFBVSxHQUFHO0FBQ2pEO0VBQ0Q7QUFFQSxRQUFNeUcsWUFBbUNILE1BQU10RixLQUFLLGFBQWEsRUFBRUMsU0FBUyxlQUFlO0FBQzNGLFFBQU15RixVQUFnQ3hGLEdBQUd5RCxLQUFLZ0MsZUFBZUYsV0FBVyxLQUFLN0YsT0FBT0MsTUFBTSxRQUFRLE1BQU0sQ0FBQztBQUV6RzZGLGNBQUEsUUFBQUEsWUFBQSxVQUFBQSxRQUFTRSxpQkFBaUIsU0FBUyxNQUFZO0FBQzlDRixZQUFReEIsT0FBTztBQUNmbkYsc0JBQWtCQyxVQUFVO0VBQzdCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJ0cmFuc2xhdGVWYXJpYW50c1N1bW1hcnkiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJsYW5ncyIsICJTZXQiLCAibmFtZU9mTGFuZ3MiLCAiemgiLCAidHJhbnNsYXRlVmFyaWFudHMiLCAid2dQYWdlTmFtZSIsICJfcHJvbXB0IiwgInN1bW1hcnkiLCAicmVwbGFjZSIsICIkd3JhcHBlciIsICIkIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJwcmVwZW5kVG8iLCAiJHN1Ym1pdEFsbCIsICJjbGFzc05hbWUiLCAid2luZG93IiwgIndnVUxTIiwgIm9uIiwgIiRidXR0b25zIiwgImZpbmQiLCAibGVuZ3RoIiwgIm13IiwgIm5vdGlmeSIsICJ0YWciLCAidHlwZSIsICJjb25maXJtIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImJ1dHRvbiIsICJ2YWx1ZSIsICJ0cmlnZ2VyIiwgImVyciIsICJlIiwgImYiLCAiYXBwZW5kIiwgInN0eWxlIiwgInRleHRBbGlnbiIsICJjb2xvciIsICJkZWZhdWx0TGFuZ3MiLCAicnVuTGFuZ3MiLCAicHJvbXB0IiwgImpvaW4iLCAic3BsaXQiLCAibGFuZ1F1ZXVlIiwgIm1hcCIsICJsYW5nIiwgInRyaW0iLCAiZmlsdGVyIiwgImhhcyIsICJwcm9jZXNzIiwgInBhZ2VDb250ZW50IiwgInNoaWZ0IiwgIiRkaWZmVGFibGUiLCAiYmFzZVBhZ2VOYW1lIiwgInRhcmdldFRpdGxlIiwgIm5ld1BhZ2VDb250ZW50IiwgInBhcnNlIiwgInByb3AiLCAidXNlbGFuZyIsICJ0aGVuIiwgImNvbnRlbnQiLCAiaW5uZXJIVE1MIiwgInRleHQiLCAiX3BhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgInJ2ZGlmZnRvdGV4dCIsICJwb3N0IiwgImVycm9yIiwgImRhdGEiLCAiJHRvb2wiLCAiaHJlZiIsICJ1dGlsIiwgImdldFVybCIsICJwYWdlIiwgInBhZ2VzIiwgIm1pc3NpbmciLCAiJHN1Ym1pdCIsICJmbG9hdCIsICJyZW1vdmUiLCAiY3JlYXRlIiwgInN0cmluZyIsICJjb2RlUG9pbnRBdCIsICJkaWZmIiwgInJldmlzaW9ucyIsICJib2R5IiwgImVkaXQiLCAibm9jcmVhdGUiLCAicHJlcGVuZCIsICJhbHdheXMiLCAicGFyYW1zIiwgImN1cnRpbWVzdGFtcCIsICJydnByb3AiLCAiZ2V0IiwgIl9kYXRhJHF1ZXJ5IiwgIkRlZmVycmVkIiwgInJlamVjdCIsICJpbnZhbGlkIiwgImdldEJvZHkiLCAiJGJvZHkiLCAiY29uZmlnIiwgInRlc3QiLCAicG9ydGxldElkIiwgImVsZW1lbnQiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciJdCn0K
