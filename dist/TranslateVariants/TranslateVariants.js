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
    className: ["cdx-button", "cdx-button--action-progressive", "cdx-button--weight-primary"]
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
          className: ["TranslateVariants-publish-changes", "cdx-button"],
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
          className: ["TranslateVariants-publish-changes", "cdx-button"],
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLnRzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9vcHRpb25zLmpzb24iLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvdHJhbnNsYXRlVmFyaWFudHMudHN4IiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9tb2R1bGVzL2FwaS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt0cmFuc2xhdGVWYXJpYW50c30gZnJvbSAnLi9tb2R1bGVzL3RyYW5zbGF0ZVZhcmlhbnRzJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKCEvXk1lZGlhV2lraTpbXi9dKyhcXC96aCk/JC8udGVzdCh3Z1BhZ2VOYW1lKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gJGJvZHkuZmluZCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgd2luZG93LndnVUxTKCfovazmjaLlj5jkvZMnLCAn6L2J5o+b6K6K6auUJykpO1xuXG5cdGVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0dHJhbnNsYXRlVmFyaWFudHMod2dQYWdlTmFtZSk7XG5cdH0pO1xufSk7XG4iLCAie1xuXHRcInRyYW5zbGF0ZVZhcmlhbnRzU3VtbWFyeVwiOiBcIuiHquWKqOi9rOaNouWPmOS9k+iHqltbJDFdXe+8iFtbTWVkaWFXaWtpOkdhZGdldC1UcmFuc2xhdGVWYXJpYW50cy5qc3xUcmFuc2xhdGVWYXJpYW50c11d77yJXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxudHlwZSBMYW5ncyA9ICd6aCcgfCAnemgtaGFucycgfCAnemgtY24nIHwgJ3poLW15JyB8ICd6aC1zZycgfCAnemgtaGFudCcgfCAnemgtaGsnIHwgJ3poLW1vJyB8ICd6aC10dyc7XG5jb25zdCBsYW5nczogU2V0PExhbmdzPiA9IG5ldyBTZXQoWyd6aCcsICd6aC1oYW5zJywgJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXSk7XG5jb25zdCBuYW1lT2ZMYW5ncyA9IHtcblx0emg6ICfljp/lp4snLFxuXHQnemgtaGFucyc6ICfnroDkvZMnLFxuXHQnemgtY24nOiAn5Lit5Zu95aSn6ZmG566A5L2TJyxcblx0J3poLW15JzogJ+mprOadpeilv+S6mueugOS9kycsXG5cdCd6aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHQnemgtaGFudCc6ICfnuYHpq5QnLFxuXHQnemgtaGsnOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0J3poLW1vJzogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdCd6aC10dyc6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPExhbmdzLCBzdHJpbmc+O1xuXG5jb25zdCB0cmFuc2xhdGVWYXJpYW50cyA9ICh3Z1BhZ2VOYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3Qgc3VtbWFyeTogc3RyaW5nID0gT1BUSU9OUy50cmFuc2xhdGVWYXJpYW50c1N1bW1hcnkucmVwbGFjZSgvXFwkMS9nLCB3Z1BhZ2VOYW1lKTtcblxuXHRjb25zdCAkd3JhcHBlcjogSlF1ZXJ5ID0gKCQoPGRpdiBpZD1cIlRyYW5zbGF0ZVZhcmlhbnRzXCIgLz4pIGFzIEpRdWVyeSkucHJlcGVuZFRvKCcjYm9keUNvbnRlbnQnKTtcblxuXHRjb25zdCAkc3VibWl0QWxsOiBKUXVlcnkgPSAkKFxuXHRcdDxidXR0b24gY2xhc3NOYW1lPXtbJ2NkeC1idXR0b24nLCAnY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5J119PlxuXHRcdFx0e3dpbmRvdy53Z1VMUygn5Y+R5biD5omA5pyJ5pu05pS5JywgJ+eZvOS9iOaJgOacieiuiuabtCcpfVxuXHRcdDwvYnV0dG9uPlxuXHQpIGFzIEpRdWVyeTtcblx0JHN1Ym1pdEFsbC5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGJ1dHRvbnM6IEpRdWVyeSA9ICR3cmFwcGVyLmZpbmQoJy5UcmFuc2xhdGVWYXJpYW50cy1wdWJsaXNoLWNoYW5nZXMnKTtcblx0XHRpZiAoISRidXR0b25zLmxlbmd0aCkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkod2luZG93LndnVUxTKCfmsqHmnInku7vkvZXlj6/ku6Xlj5HluIPnmoTmm7TmlLknLCAn5rKS5pyJ5Lu75L2V6K6K5pu05Y+v55m85L2IJyksIHtcblx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLFxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFjb25maXJtKGAke3dpbmRvdy53Z1VMUygn5pu05pS5JywgJ+eZvOS9iCcpfSR7JGJ1dHRvbnMubGVuZ3RofSR7d2luZG93LndnVUxTKCfkuKrmm7TmlLknLCAn5YCL6K6K5pu0Jyl977yfYCkpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KHdpbmRvdy53Z1VMUygn5bey5Y+W5raI5pu05pS5JywgJ+W3suWPlua2iOeZvOS9iCcpLCB7dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGJ1dHRvbiBvZiAkYnV0dG9ucykge1xuXHRcdFx0JChidXR0b24pLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0fVxuXHR9KTtcblxuXHQkd3JhcHBlci5hcHBlbmQoXG5cdFx0JCg8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiAncmlnaHQnfX0gLz4pLmFwcGVuZCgkc3VibWl0QWxsKSxcblx0XHQ8ZGl2IHN0eWxlPXt7Y29sb3I6ICcjZjAwJ319PlxuXHRcdFx0e3dpbmRvdy53Z1VMUyhcblx0XHRcdFx0J+aPkOmGku+8mlRyYW5zbGF0ZVZhcmlhbnRz5bel5YW35L2/55SoSVTlj4pNZWRpYVdpa2novazmjaLnu4Tov5vooYzoh6rliqjovazmjaLvvIzor7fnoa7orqTovazmjaLnu5PmnpzmmK/lkKbmraPnoa7vvIEnLFxuXHRcdFx0XHQn5o+Q6YaS77yaVHJhbnNsYXRlVmFyaWFudHPlt6Xlhbfkvb/nlKhJVOWPik1lZGlhV2lraei9ieaPm+e1hOmAsuihjOiHquWLlei9ieaPm++8jOiri+eiuuiqjei9ieaPm+e1kOaenOaYr+WQpuato+eiuu+8gSdcblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCk7XG5cblx0Y29uc3QgZGVmYXVsdExhbmdzOiBMYW5nc1tdID0gWy4uLmxhbmdzXTtcblxuXHRsZXQgcnVuTGFuZ3MgPSBwcm9tcHQoXG5cdFx0d2luZG93LndnVUxTKCfovazmjaLku6XkuIvor63oqIDvvIjku6XpgJflj7fpmpTlvIDvvInvvJonLCAn6L2J5o+b5Lul5LiL6Kqe6KiA77yI5Lul6YCX6Jmf6ZqU6ZaL77yJ77yaJyksXG5cdFx0ZGVmYXVsdExhbmdzLmpvaW4oJywnKVxuXHQpPy5zcGxpdCgnLCcpIGFzIExhbmdzW10gfCBudWxsO1xuXHRpZiAocnVuTGFuZ3MgPT09IG51bGwpIHtcblx0XHRydW5MYW5ncyA9IGRlZmF1bHRMYW5ncztcblx0fVxuXG5cdGNvbnN0IGxhbmdRdWV1ZTogTGFuZ3NbXSA9IHJ1bkxhbmdzXG5cdFx0Lm1hcCgobGFuZzogTGFuZ3MpOiBMYW5ncyA9PiBsYW5nLnRyaW0oKSBhcyBMYW5ncylcblx0XHQuZmlsdGVyKChsYW5nOiBMYW5ncyk6IGJvb2xlYW4gPT4gbGFuZ3MuaGFzKGxhbmcpKTtcblxuXHRjb25zdCBwcm9jZXNzID0gKHBhZ2VDb250ZW50OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRpZiAoIWxhbmdRdWV1ZS5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBsYW5nID0gbGFuZ1F1ZXVlLnNoaWZ0KCkgYXMgTGFuZ3M7XG5cblx0XHRjb25zdCAkZGlmZlRhYmxlOiBKUXVlcnkgPSAkKDxkaXYgaWQ9e2BUcmFuc2xhdGVWYXJpYW50cy1kaWZmLSR7bGFuZ31gfSAvPikgYXMgSlF1ZXJ5O1xuXHRcdCR3cmFwcGVyLmFwcGVuZCgkZGlmZlRhYmxlLCA8aHIgLz4pO1xuXG5cdFx0Y29uc3QgYmFzZVBhZ2VOYW1lOiBzdHJpbmcgPSB3Z1BhZ2VOYW1lLnJlcGxhY2UoL1xcL3poJC8sICcnKTtcblx0XHRjb25zdCB0YXJnZXRUaXRsZTogc3RyaW5nID0gbGFuZyA9PT0gJ3poJyA/IGJhc2VQYWdlTmFtZSA6IGAke2Jhc2VQYWdlTmFtZX0vJHtsYW5nfWA7XG5cblx0XHRsZXQgbmV3UGFnZUNvbnRlbnQ6IHN0cmluZyA9ICcnO1xuXHRcdHZvaWQgYXBpXG5cdFx0XHQucGFyc2UoYHt7Tm90ZVRBfEcxPUlUfEcyPU1lZGlhV2lraX19PGRpdiBpZD1cIlRyYW5zbGF0ZVZhcmlhbnRzLWNvbnRlbnRcIj4ke3BhZ2VDb250ZW50fTwvZGl2PmAsIHtcblx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0XHR1c2VsYW5nOiBsYW5nLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKFxuXHRcdFx0XHQoY29udGVudDogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0bmV3UGFnZUNvbnRlbnQgPSAkKDxkaXYgaW5uZXJIVE1MPXtjb250ZW50fSAvPilcblx0XHRcdFx0XHRcdC5maW5kKCcjVHJhbnNsYXRlVmFyaWFudHMtY29udGVudCcpXG5cdFx0XHRcdFx0XHQudGV4dCgpO1xuXG5cdFx0XHRcdFx0Y29uc3QgX3BhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRcdHRpdGxlczogdGFyZ2V0VGl0bGUsXG5cdFx0XHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0XHRcdHJ2ZGlmZnRvdGV4dDogbmV3UGFnZUNvbnRlbnQsXG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdHJldHVybiBhcGkucG9zdChfcGFyYW1zKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0KGVycm9yKTogbnVsbCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoYOino+aekCR7bGFuZ30ke3dpbmRvdy53Z1VMUygn5pe25Y+R55Sf6ZSZ6K+v77yaJywgJ+aZgueZvOeUn+mMr+iqpO+8micpfSR7ZXJyb3J9YCwge1xuXHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudCcsXG5cdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdC50aGVuKFxuXHRcdFx0XHQoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdGlmIChkYXRhID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgJHRvb2wgPSAkKFxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj17bXcudXRpbC5nZXRVcmwodGFyZ2V0VGl0bGUpfT5cblx0XHRcdFx0XHRcdFx0XHR7bGFuZ33vvIh7bmFtZU9mTGFuZ3NbbGFuZ11977yJXG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx077yIPGEgaHJlZj17bXcudXRpbC5nZXRVcmwodGFyZ2V0VGl0bGUsIHthY3Rpb246ICdlZGl0J30pfT57d2luZG93LndnVUxTKCfnvJYnLCAn57eoJyl9PC9hPu+8iVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSBhcyBKUXVlcnk7XG5cblx0XHRcdFx0XHQkZGlmZlRhYmxlLmFwcGVuZCgkdG9vbCk7XG5cblx0XHRcdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhWydxdWVyeSddLnBhZ2VzO1xuXHRcdFx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0XHRcdGNvbnN0ICRzdWJtaXQgPSAkKFxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtbJ1RyYW5zbGF0ZVZhcmlhbnRzLXB1Ymxpc2gtY2hhbmdlcycsICdjZHgtYnV0dG9uJ119XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tmbG9hdDogJ3JpZ2h0J319XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7d2luZG93LndnVUxTKCflj5HluIPpobXpnaInLCAn55m85L2I6aCB6Z2iJyl9XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0KSBhcyBKUXVlcnk7XG5cdFx0XHRcdFx0XHQkc3VibWl0Lm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0JHN1Ym1pdC5yZW1vdmUoKTtcblxuXHRcdFx0XHRcdFx0XHRhcGkuY3JlYXRlKFxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldFRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRuZXdQYWdlQ29udGVudFxuXHRcdFx0XHRcdFx0XHQpLnRoZW4oXG5cdFx0XHRcdFx0XHRcdFx0KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkod2luZG93LndnVUxTKCflt7LnvJbovpEgJywgJ+W3sue3qOi8ryAnKSArIHRhcmdldFRpdGxlLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdChlcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn57yW6L6RJywgJ+e3qOi8ryAnKSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0VGl0bGUgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygnIOWPkeeUn+mUmeivr++8micsICcg55m855Sf6Yyv6Kqk77yaJykgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0JHRvb2wuYXBwZW5kKCRzdWJtaXQpO1xuXHRcdFx0XHRcdFx0JGRpZmZUYWJsZS5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdDxwcmVcblx0XHRcdFx0XHRcdFx0XHRpbm5lckhUTUw9e25ld1BhZ2VDb250ZW50LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRcdFx0XHQvWyY8Pl0vZ2ltLFxuXHRcdFx0XHRcdFx0XHRcdFx0KHN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IGAmIyR7c3RyaW5nLmNvZGVQb2ludEF0KDApfTtgXG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCBkaWZmOiBzdHJpbmcgPSBwYWdlLnJldmlzaW9uc1swXS5kaWZmLmJvZHk7XG5cdFx0XHRcdFx0aWYgKGRpZmYgPT09ICcnKSB7XG5cdFx0XHRcdFx0XHQkdG9vbC5hcHBlbmQoPHNwYW4gc3R5bGU9e3tmbG9hdDogJ3JpZ2h0J319Pnt3aW5kb3cud2dVTFMoJ+aXoOabtOaUuScsICfnhKHorormm7QnKX08L3NwYW4+KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29uc3QgJHN1Ym1pdCA9ICQoXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1snVHJhbnNsYXRlVmFyaWFudHMtcHVibGlzaC1jaGFuZ2VzJywgJ2NkeC1idXR0b24nXX1cblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e2Zsb2F0OiAncmlnaHQnfX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHt3aW5kb3cud2dVTFMoJ+WPkeW4g+abtOaUuScsICfnmbzkvYjorormm7QnKX1cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQpIGFzIEpRdWVyeTtcblx0XHRcdFx0XHRcdCRzdWJtaXQub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHQkc3VibWl0LnJlbW92ZSgpO1xuXG5cdFx0XHRcdFx0XHRcdGFwaS5lZGl0KFxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldFRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdCgpOiBBcGlFZGl0UGFnZVBhcmFtcyA9PiAoe1xuXHRcdFx0XHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IG5ld1BhZ2VDb250ZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0bm9jcmVhdGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdCkudGhlbihcblx0XHRcdFx0XHRcdFx0XHQoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeSh3aW5kb3cud2dVTFMoJ+W3sue8lui+kScsICflt7Lnt6jovK8gJykgKyB0YXJnZXRUaXRsZSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+e8lui+kScsICfnt6jovK8gJykgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldFRpdGxlICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJyDlj5HnlJ/plJnor6/vvJonLCAnIOeZvOeUn+mMr+iqpO+8micpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdCR0b29sLmFwcGVuZCgkc3VibWl0KTtcblx0XHRcdFx0XHRcdCRkaWZmVGFibGUuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKDx0YWJsZSBjbGFzc05hbWU9XCJkaWZmXCIgaW5uZXJIVE1MPXtkaWZmfSAvPikucHJlcGVuZChcblx0XHRcdFx0XHRcdFx0XHQ8Y29sZ3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y29sIGNsYXNzTmFtZT1cImRpZmYtbWFya2VyXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1jb250ZW50XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1tYXJrZXJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGNvbCBjbGFzc05hbWU9XCJkaWZmLWNvbnRlbnRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvY29sZ3JvdXA+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQoZXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+WJywgJ+WPluW+lycpICtcblx0XHRcdFx0XHRcdFx0bGFuZyArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5beu5byC5pe25Y+R55Sf6ZSZ6K+v77yaJywgJ+W3rueVsOaZgueZvOeUn+mMr+iqpO+8micpICtcblx0XHRcdFx0XHRcdFx0ZXJyb3IsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdC5hbHdheXMoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRwcm9jZXNzKHBhZ2VDb250ZW50KTtcblx0XHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHR0aXRsZXM6IHdnUGFnZU5hbWUsXG5cdFx0Y3VydGltZXN0YW1wOiB0cnVlLFxuXHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCddLFxuXHR9O1xuXG5cdHZvaWQgYXBpXG5cdFx0LmdldChwYXJhbXMpXG5cdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdGlmICghZGF0YVsncXVlcnknXT8ucGFnZXMpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ3Vua25vd24nKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgW3BhZ2VdID0gZGF0YVsncXVlcnknXS5wYWdlcztcblxuXHRcdFx0aWYgKHBhZ2UuaW52YWxpZCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnaW52YWxpZHRpdGxlJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdub2NyZWF0ZS1taXNzaW5nJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IFt7Y29udGVudH1dID0gcGFnZS5yZXZpc2lvbnM7XG5cblx0XHRcdHJldHVybiBjb250ZW50IGFzIHN0cmluZztcblx0XHR9KVxuXHRcdC50aGVuKChjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0bGV0IHBhZ2VDb250ZW50OiBzdHJpbmcgPSBjb250ZW50O1xuXG5cdFx0XHRwYWdlQ29udGVudCA9IHBhZ2VDb250ZW50LnJlcGxhY2UoXG5cdFx0XHRcdC9bXFxzIyYnKjo8PltcXF1fe3x9XS9naW0sXG5cdFx0XHRcdChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiBgJiMke3N0cmluZy5jb2RlUG9pbnRBdCgwKX07YFxuXHRcdFx0KTtcblx0XHRcdHBhZ2VDb250ZW50ID0gcGFnZUNvbnRlbnQucmVwbGFjZShcblx0XHRcdFx0LygmIzkxOyYjOTE7KSgoPzooPyEmIzEyNDspKD8hJiM5MzspLikrPykoJiMxMjQ7KD86KD8hJiM5MzspLikrPyYjOTM7JiM5MzspL2csXG5cdFx0XHRcdCckMS17JDJ9LSQzJ1xuXHRcdFx0KTtcblx0XHRcdHBhZ2VDb250ZW50ID0gcGFnZUNvbnRlbnQucmVwbGFjZSgvLSYjMTIzOyguKz8pJiMxMjU7LS9nLCAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT5cblx0XHRcdFx0c3RyaW5nXG5cdFx0XHRcdFx0LnJlcGxhY2UoJy0mIzEyMzsnLCAnLXsnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCctJiMxMjM7JywgJy17Jylcblx0XHRcdFx0XHQucmVwbGFjZSgnJiMxMjU7LScsICd9LScpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjMTI0Oy9nLCAnfCcpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjMzI7L2csICcgJylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiM2MTsvZywgJz0nKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzYyOy9nLCAnPicpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjNTg7L2csICc6Jylcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiBwYWdlQ29udGVudDtcblx0XHR9KVxuXHRcdC50aGVuKChwYWdlQ29udGVudDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRwcm9jZXNzKHBhZ2VDb250ZW50KTtcblx0XHR9KTtcbn07XG5cbmV4cG9ydCB7dHJhbnNsYXRlVmFyaWFudHN9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgVHJhbnNsYXRlVmFyaWFudHMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNDckIsSUFBQUMsMkJBQTRCO0FBQzVCLElBQUFDLFVBQVc7O0FDRFosSUFBQUMscUJBQWtCQyxRQUFBSixRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNBbEIsSUFBQUssb0JBQXdCTCxRQUFBLGlCQUFBO0FBRXhCLElBQU1NLE9BQUEsR0FBY0Qsa0JBQUFFLFdBQUEscUJBQUFDLE9BQXVDTixPQUFPLENBQUU7O0FERXBFLElBQU1PLFFBQW9CLG9CQUFJQyxJQUFJLENBQUMsTUFBTSxXQUFXLFNBQVMsU0FBUyxTQUFTLFdBQVcsU0FBUyxTQUFTLE9BQU8sQ0FBQztBQUNwSCxJQUFNQyxjQUFjO0VBQ25CQyxJQUFJO0VBQ0osV0FBVztFQUNYLFNBQVM7RUFDVCxTQUFTO0VBQ1QsU0FBUztFQUNULFdBQVc7RUFDWCxTQUFTO0VBQ1QsU0FBUztFQUNULFNBQVM7QUFDVjtBQUVBLElBQU1DLG9CQUFxQkMsZ0JBQTZCO0FBQUEsTUFBQUM7QUFDdkQsUUFBTUMsVUFBMEJmLHlCQUF5QmdCLFFBQVEsUUFBUUgsVUFBVTtBQUVuRixRQUFNSSxXQUFvQkMsRUFBRWhCLG1DQUFBaUIsUUFBQUMsY0FBQyxPQUFBO0lBQUlDLElBQUc7RUFBQSxDQUFvQixDQUFFLEVBQWFDLFVBQVUsY0FBYztBQUUvRixRQUFNQyxhQUFxQkwsRUFDMUJoQixtQ0FBQWlCLFFBQUFDLGNBQUMsVUFBQTtJQUFPSSxXQUFXLENBQUMsY0FBYyxrQ0FBa0MsNEJBQTRCO0VBQUEsR0FD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UUFBUSx3QkFBeUJpRixZQUMxREEsT0FDRWpGLFFBQVEsV0FBVyxJQUFJLEVBQ3ZCQSxRQUFRLFdBQVcsSUFBSSxFQUN2QkEsUUFBUSxXQUFXLElBQUksRUFDdkJBLFFBQVEsV0FBVyxHQUFHLEVBQ3RCQSxRQUFRLFVBQVUsR0FBRyxFQUNyQkEsUUFBUSxVQUFVLEdBQUcsRUFDckJBLFFBQVEsVUFBVSxHQUFHLEVBQ3JCQSxRQUFRLFVBQVUsR0FBRyxDQUN4QjtBQUVBLFdBQU9nRDtFQUNSLENBQUMsRUFDQVMsS0FBTVQsaUJBQThCO0FBQ3BDRCxZQUFRQyxXQUFXO0VBQ3BCLENBQUM7QUFDSDs7QUY5VEEsTUFBQSxHQUFLbEUsbUJBQUFvSCxTQUFRLEVBQUV6QyxLQUFNMEMsV0FBeUM7QUFDN0QsUUFBTTtJQUFDdEc7RUFBVSxJQUFJa0IsR0FBR3FGLE9BQU9QLElBQUk7QUFDbkMsTUFBSSxDQUFDLDJCQUEyQlEsS0FBS3hHLFVBQVUsR0FBRztBQUNqRDtFQUNEO0FBRUEsUUFBTXlHLFlBQW1DSCxNQUFNdEYsS0FBSyxhQUFhLEVBQUVDLFNBQVMsZUFBZTtBQUMzRixRQUFNeUYsVUFBZ0N4RixHQUFHeUQsS0FBS2dDLGVBQWVGLFdBQVcsS0FBSzdGLE9BQU9DLE1BQU0sUUFBUSxNQUFNLENBQUM7QUFFekc2RixjQUFBLFFBQUFBLFlBQUEsVUFBQUEsUUFBU0UsaUJBQWlCLFNBQVMsTUFBWTtBQUM5Q0YsWUFBUXhCLE9BQU87QUFDZm5GLHNCQUFrQkMsVUFBVTtFQUM3QixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlcXVpcmUiLCAidHJhbnNsYXRlVmFyaWFudHNTdW1tYXJ5IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAibGFuZ3MiLCAiU2V0IiwgIm5hbWVPZkxhbmdzIiwgInpoIiwgInRyYW5zbGF0ZVZhcmlhbnRzIiwgIndnUGFnZU5hbWUiLCAiX3Byb21wdCIsICJzdW1tYXJ5IiwgInJlcGxhY2UiLCAiJHdyYXBwZXIiLCAiJCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaWQiLCAicHJlcGVuZFRvIiwgIiRzdWJtaXRBbGwiLCAiY2xhc3NOYW1lIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJvbiIsICIkYnV0dG9ucyIsICJmaW5kIiwgImxlbmd0aCIsICJtdyIsICJub3RpZnkiLCAidGFnIiwgInR5cGUiLCAiY29uZmlybSIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJidXR0b24iLCAidmFsdWUiLCAidHJpZ2dlciIsICJlcnIiLCAiZSIsICJmIiwgImFwcGVuZCIsICJzdHlsZSIsICJ0ZXh0QWxpZ24iLCAiY29sb3IiLCAiZGVmYXVsdExhbmdzIiwgInJ1bkxhbmdzIiwgInByb21wdCIsICJqb2luIiwgInNwbGl0IiwgImxhbmdRdWV1ZSIsICJtYXAiLCAibGFuZyIsICJ0cmltIiwgImZpbHRlciIsICJoYXMiLCAicHJvY2VzcyIsICJwYWdlQ29udGVudCIsICJzaGlmdCIsICIkZGlmZlRhYmxlIiwgImJhc2VQYWdlTmFtZSIsICJ0YXJnZXRUaXRsZSIsICJuZXdQYWdlQ29udGVudCIsICJwYXJzZSIsICJwcm9wIiwgInVzZWxhbmciLCAidGhlbiIsICJjb250ZW50IiwgImlubmVySFRNTCIsICJ0ZXh0IiwgIl9wYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRpdGxlcyIsICJydmRpZmZ0b3RleHQiLCAicG9zdCIsICJlcnJvciIsICJkYXRhIiwgIiR0b29sIiwgImhyZWYiLCAidXRpbCIsICJnZXRVcmwiLCAicGFnZSIsICJwYWdlcyIsICJtaXNzaW5nIiwgIiRzdWJtaXQiLCAiZmxvYXQiLCAicmVtb3ZlIiwgImNyZWF0ZSIsICJzdHJpbmciLCAiY29kZVBvaW50QXQiLCAiZGlmZiIsICJyZXZpc2lvbnMiLCAiYm9keSIsICJlZGl0IiwgIm5vY3JlYXRlIiwgInByZXBlbmQiLCAiYWx3YXlzIiwgInBhcmFtcyIsICJjdXJ0aW1lc3RhbXAiLCAicnZwcm9wIiwgImdldCIsICJfZGF0YSRxdWVyeSIsICJEZWZlcnJlZCIsICJyZWplY3QiLCAiaW52YWxpZCIsICJnZXRCb2R5IiwgIiRib2R5IiwgImNvbmZpZyIsICJ0ZXN0IiwgInBvcnRsZXRJZCIsICJlbGVtZW50IiwgImFkZFBvcnRsZXRMaW5rIiwgImFkZEV2ZW50TGlzdGVuZXIiXQp9Cg==
