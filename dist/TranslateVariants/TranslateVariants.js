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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLnRzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9vcHRpb25zLmpzb24iLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvdHJhbnNsYXRlVmFyaWFudHMudHN4IiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9tb2R1bGVzL2FwaS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt0cmFuc2xhdGVWYXJpYW50c30gZnJvbSAnLi9tb2R1bGVzL3RyYW5zbGF0ZVZhcmlhbnRzJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKCEvXk1lZGlhV2lraTpbXi9dKyhcXC96aCk/JC8udGVzdCh3Z1BhZ2VOYW1lKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gJGJvZHkuZmluZCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgd2luZG93LndnVUxTKCfovazmjaLlj5jkvZMnLCAn6L2J5o+b6K6K6auUJykpO1xuXG5cdGVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0dHJhbnNsYXRlVmFyaWFudHMod2dQYWdlTmFtZSk7XG5cdH0pO1xufSk7XG4iLCAie1xuXHRcInRyYW5zbGF0ZVZhcmlhbnRzU3VtbWFyeVwiOiBcIuiHquWKqOi9rOaNouWPmOS9k+iHqltbJDFdXe+8iFtbTWVkaWFXaWtpOkdhZGdldC1UcmFuc2xhdGVWYXJpYW50cy5qc3xUcmFuc2xhdGVWYXJpYW50c11d77yJXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxudHlwZSBMYW5ncyA9ICd6aCcgfCAnemgtaGFucycgfCAnemgtY24nIHwgJ3poLW15JyB8ICd6aC1zZycgfCAnemgtaGFudCcgfCAnemgtaGsnIHwgJ3poLW1vJyB8ICd6aC10dyc7XG5jb25zdCBsYW5nczogU2V0PExhbmdzPiA9IG5ldyBTZXQoWyd6aCcsICd6aC1oYW5zJywgJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXSk7XG5jb25zdCBuYW1lT2ZMYW5ncyA9IHtcblx0emg6ICfljp/lp4snLFxuXHQnemgtaGFucyc6ICfnroDkvZMnLFxuXHQnemgtY24nOiAn5Lit5Zu95aSn6ZmG566A5L2TJyxcblx0J3poLW15JzogJ+mprOadpeilv+S6mueugOS9kycsXG5cdCd6aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHQnemgtaGFudCc6ICfnuYHpq5QnLFxuXHQnemgtaGsnOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0J3poLW1vJzogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdCd6aC10dyc6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPExhbmdzLCBzdHJpbmc+O1xuXG5jb25zdCB0cmFuc2xhdGVWYXJpYW50cyA9ICh3Z1BhZ2VOYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3Qgc3VtbWFyeTogc3RyaW5nID0gT1BUSU9OUy50cmFuc2xhdGVWYXJpYW50c1N1bW1hcnkucmVwbGFjZSgvXFwkMS9nLCB3Z1BhZ2VOYW1lKTtcblxuXHRjb25zdCAkd3JhcHBlcjogSlF1ZXJ5ID0gKCQoPGRpdiBpZD1cIlRyYW5zbGF0ZVZhcmlhbnRzXCIgLz4pIGFzIEpRdWVyeSkucHJlcGVuZFRvKCcjYm9keUNvbnRlbnQnKTtcblxuXHRjb25zdCAkc3VibWl0QWxsOiBKUXVlcnkgPSAkKFxuXHRcdDxidXR0b24gY2xhc3NOYW1lPXtbJ2NkeC1idXR0b24nLCAnY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5J119PlxuXHRcdFx0e3dpbmRvdy53Z1VMUygn5Y+R5biD5omA5pyJ5pu05pS5JywgJ+eZvOS9iOaJgOacieiuiuabtCcpfVxuXHRcdDwvYnV0dG9uPlxuXHQpIGFzIEpRdWVyeTtcblx0JHN1Ym1pdEFsbC5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGJ1dHRvbnM6IEpRdWVyeSA9ICR3cmFwcGVyLmZpbmQoJy5UcmFuc2xhdGVWYXJpYW50cy1wdWJsaXNoLWNoYW5nZXMnKTtcblx0XHRpZiAoISRidXR0b25zLmxlbmd0aCkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkod2luZG93LndnVUxTKCfmsqHmnInku7vkvZXlj6/ku6Xlj5HluIPnmoTmm7TmlLknLCAn5rKS5pyJ5Lu75L2V6K6K5pu05Y+v55m85L2IJyksIHtcblx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLFxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFjb25maXJtKGAke3dpbmRvdy53Z1VMUygn5pu05pS5JywgJ+eZvOS9iCcpfSR7JGJ1dHRvbnMubGVuZ3RofSR7d2luZG93LndnVUxTKCfkuKrmm7TmlLknLCAn5YCL6K6K5pu0Jyl977yfYCkpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KHdpbmRvdy53Z1VMUygn5bey5Y+W5raI5pu05pS5JywgJ+W3suWPlua2iOeZvOS9iCcpLCB7dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGJ1dHRvbiBvZiAkYnV0dG9ucykge1xuXHRcdFx0JChidXR0b24pLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0fVxuXHR9KTtcblxuXHQkd3JhcHBlci5hcHBlbmQoXG5cdFx0JCg8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiAncmlnaHQnfX0gLz4pLmFwcGVuZCgkc3VibWl0QWxsKSxcblx0XHQ8ZGl2IHN0eWxlPXt7Y29sb3I6ICcjZjAwJ319PlxuXHRcdFx0e3dpbmRvdy53Z1VMUyhcblx0XHRcdFx0J+aPkOmGku+8mlRyYW5zbGF0ZVZhcmlhbnRz5bel5YW35L2/55SoSVTlj4pNZWRpYVdpa2novazmjaLnu4Tov5vooYzoh6rliqjovazmjaLvvIzor7fnoa7orqTovazmjaLnu5PmnpzmmK/lkKbmraPnoa7vvIEnLFxuXHRcdFx0XHQn5o+Q6YaS77yaVHJhbnNsYXRlVmFyaWFudHPlt6Xlhbfkvb/nlKhJVOWPik1lZGlhV2lraei9ieaPm+e1hOmAsuihjOiHquWLlei9ieaPm++8jOiri+eiuuiqjei9ieaPm+e1kOaenOaYr+WQpuato+eiuu+8gSdcblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCk7XG5cblx0Y29uc3QgZGVmYXVsdExhbmdzOiBMYW5nc1tdID0gWy4uLmxhbmdzXTtcblxuXHRsZXQgcnVuTGFuZ3MgPSBwcm9tcHQoXG5cdFx0d2luZG93LndnVUxTKCfovazmjaLku6XkuIvor63oqIDvvIjku6XpgJflj7fpmpTlvIDvvInvvJonLCAn6L2J5o+b5Lul5LiL6Kqe6KiA77yI5Lul6YCX6Jmf6ZqU6ZaL77yJ77yaJyksXG5cdFx0ZGVmYXVsdExhbmdzLmpvaW4oJywnKVxuXHQpPy5zcGxpdCgnLCcpIGFzIExhbmdzW10gfCBudWxsO1xuXHRpZiAocnVuTGFuZ3MgPT09IG51bGwpIHtcblx0XHRydW5MYW5ncyA9IGRlZmF1bHRMYW5ncztcblx0fVxuXG5cdGNvbnN0IGxhbmdRdWV1ZTogTGFuZ3NbXSA9IHJ1bkxhbmdzXG5cdFx0Lm1hcCgobGFuZzogTGFuZ3MpOiBMYW5ncyA9PiBsYW5nLnRyaW0oKSBhcyBMYW5ncylcblx0XHQuZmlsdGVyKChsYW5nOiBMYW5ncyk6IGJvb2xlYW4gPT4gbGFuZ3MuaGFzKGxhbmcpKTtcblxuXHRjb25zdCBwcm9jZXNzID0gKHBhZ2VDb250ZW50OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRpZiAoIWxhbmdRdWV1ZS5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBsYW5nID0gbGFuZ1F1ZXVlLnNoaWZ0KCkgYXMgTGFuZ3M7XG5cblx0XHRjb25zdCAkZGlmZlRhYmxlOiBKUXVlcnkgPSAkKDxkaXYgaWQ9e2BUcmFuc2xhdGVWYXJpYW50cy1kaWZmLSR7bGFuZ31gfSAvPikgYXMgSlF1ZXJ5O1xuXHRcdCR3cmFwcGVyLmFwcGVuZCgkZGlmZlRhYmxlLCA8aHIgLz4pO1xuXG5cdFx0Y29uc3QgYmFzZVBhZ2VOYW1lOiBzdHJpbmcgPSB3Z1BhZ2VOYW1lLnJlcGxhY2UoL1xcL3poJC8sICcnKTtcblx0XHRjb25zdCB0YXJnZXRUaXRsZTogc3RyaW5nID0gbGFuZyA9PT0gJ3poJyA/IGJhc2VQYWdlTmFtZSA6IGAke2Jhc2VQYWdlTmFtZX0vJHtsYW5nfWA7XG5cblx0XHRsZXQgbmV3UGFnZUNvbnRlbnQ6IHN0cmluZyA9ICcnO1xuXHRcdHZvaWQgYXBpXG5cdFx0XHQucGFyc2UoYHt7Tm90ZVRBfEcxPUlUfEcyPU1lZGlhV2lraX19PGRpdiBpZD1cIlRyYW5zbGF0ZVZhcmlhbnRzLWNvbnRlbnRcIj4ke3BhZ2VDb250ZW50fTwvZGl2PmAsIHtcblx0XHRcdFx0dXNlbGFuZzogbGFuZyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbihcblx0XHRcdFx0KGNvbnRlbnQ6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdG5ld1BhZ2VDb250ZW50ID0gJCg8ZGl2IGlubmVySFRNTD17Y29udGVudH0gLz4pXG5cdFx0XHRcdFx0XHQuZmluZCgnI1RyYW5zbGF0ZVZhcmlhbnRzLWNvbnRlbnQnKVxuXHRcdFx0XHRcdFx0LnRleHQoKTtcblxuXHRcdFx0XHRcdGNvbnN0IF9wYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0XHR0aXRsZXM6IHRhcmdldFRpdGxlLFxuXHRcdFx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdFx0XHRydmRpZmZ0b3RleHQ6IG5ld1BhZ2VDb250ZW50LFxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRyZXR1cm4gYXBpLnBvc3QoX3BhcmFtcyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChlcnJvcik6IG51bGwgPT4ge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KGDop6PmnpAke2xhbmd9JHt3aW5kb3cud2dVTFMoJ+aXtuWPkeeUn+mUmeivr++8micsICfmmYLnmbznlJ/pjK/oqqTvvJonKX0ke2Vycm9yfWAsIHtcblx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XHQudGhlbihcblx0XHRcdFx0KGRhdGEpID0+IHtcblx0XHRcdFx0XHRpZiAoZGF0YSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0ICR0b29sID0gJChcblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKHRhcmdldFRpdGxlKX0+XG5cdFx0XHRcdFx0XHRcdFx0e2xhbmd977yIe25hbWVPZkxhbmdzW2xhbmddfe+8iVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdO+8iDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKHRhcmdldFRpdGxlLCB7YWN0aW9uOiAnZWRpdCd9KX0+e3dpbmRvdy53Z1VMUygn57yWJywgJ+e3qCcpfTwvYT7vvIlcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkgYXMgSlF1ZXJ5O1xuXG5cdFx0XHRcdFx0JGRpZmZUYWJsZS5hcHBlbmQoJHRvb2wpO1xuXG5cdFx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gZGF0YVsncXVlcnknXS5wYWdlcztcblx0XHRcdFx0XHRpZiAocGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdFx0XHRjb25zdCAkc3VibWl0ID0gJChcblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17WydUcmFuc2xhdGVWYXJpYW50cy1wdWJsaXNoLWNoYW5nZXMnLCAnY2R4LWJ1dHRvbiddfVxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7ZmxvYXQ6ICdyaWdodCd9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e3dpbmRvdy53Z1VMUygn5Y+R5biD6aG16Z2iJywgJ+eZvOS9iOmggemdoicpfVxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdCkgYXMgSlF1ZXJ5O1xuXHRcdFx0XHRcdFx0JHN1Ym1pdC5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdCRzdWJtaXQucmVtb3ZlKCk7XG5cblx0XHRcdFx0XHRcdFx0YXBpLmNyZWF0ZShcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRUaXRsZSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0bmV3UGFnZUNvbnRlbnRcblx0XHRcdFx0XHRcdFx0KS50aGVuKFxuXHRcdFx0XHRcdFx0XHRcdCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KHdpbmRvdy53Z1VMUygn5bey57yW6L6RICcsICflt7Lnt6jovK8gJykgKyB0YXJnZXRUaXRsZSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHQoZXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+e8lui+kScsICfnt6jovK8gJykgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldFRpdGxlICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJyDlj5HnlJ/plJnor6/vvJonLCAnIOeZvOeUn+mMr+iqpO+8micpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdCR0b29sLmFwcGVuZCgkc3VibWl0KTtcblx0XHRcdFx0XHRcdCRkaWZmVGFibGUuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQ8cHJlXG5cdFx0XHRcdFx0XHRcdFx0aW5uZXJIVE1MPXtuZXdQYWdlQ29udGVudC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHRcdFx0L1smPD5dL2dpbSxcblx0XHRcdFx0XHRcdFx0XHRcdChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiBgJiMke3N0cmluZy5jb2RlUG9pbnRBdCgwKX07YFxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgZGlmZjogc3RyaW5nID0gcGFnZS5yZXZpc2lvbnNbMF0uZGlmZi5ib2R5O1xuXHRcdFx0XHRcdGlmIChkaWZmID09PSAnJykge1xuXHRcdFx0XHRcdFx0JHRvb2wuYXBwZW5kKDxzcGFuIHN0eWxlPXt7ZmxvYXQ6ICdyaWdodCd9fT57d2luZG93LndnVUxTKCfml6Dmm7TmlLknLCAn54Sh6K6K5pu0Jyl9PC9zcGFuPik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnN0ICRzdWJtaXQgPSAkKFxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtbJ1RyYW5zbGF0ZVZhcmlhbnRzLXB1Ymxpc2gtY2hhbmdlcycsICdjZHgtYnV0dG9uJ119XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tmbG9hdDogJ3JpZ2h0J319XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7d2luZG93LndnVUxTKCflj5HluIPmm7TmlLknLCAn55m85L2I6K6K5pu0Jyl9XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0KSBhcyBKUXVlcnk7XG5cdFx0XHRcdFx0XHQkc3VibWl0Lm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0JHN1Ym1pdC5yZW1vdmUoKTtcblxuXHRcdFx0XHRcdFx0XHRhcGkuZWRpdCh0YXJnZXRUaXRsZSwgKCkgPT4gKHtcblx0XHRcdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IG5ld1BhZ2VDb250ZW50LFxuXHRcdFx0XHRcdFx0XHRcdG5vY3JlYXRlOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0fSkpLnRoZW4oXG5cdFx0XHRcdFx0XHRcdFx0KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkod2luZG93LndnVUxTKCflt7LnvJbovpEnLCAn5bey57eo6LyvICcpICsgdGFyZ2V0VGl0bGUsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0KGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvICcpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXRUaXRsZSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCcg5Y+R55Sf6ZSZ6K+v77yaJywgJyDnmbznlJ/pjK/oqqTvvJonKSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3IsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHQkdG9vbC5hcHBlbmQoJHN1Ym1pdCk7XG5cdFx0XHRcdFx0XHQkZGlmZlRhYmxlLmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCg8dGFibGUgY2xhc3NOYW1lPVwiZGlmZlwiIGlubmVySFRNTD17ZGlmZn0gLz4pLnByZXBlbmQoXG5cdFx0XHRcdFx0XHRcdFx0PGNvbGdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGNvbCBjbGFzc05hbWU9XCJkaWZmLW1hcmtlclwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y29sIGNsYXNzTmFtZT1cImRpZmYtY29udGVudFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y29sIGNsYXNzTmFtZT1cImRpZmYtbWFya2VyXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1jb250ZW50XCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2NvbGdyb3VwPlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0KGVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPlicsICflj5blvpcnKSArXG5cdFx0XHRcdFx0XHRcdGxhbmcgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+W3ruW8guaXtuWPkeeUn+mUmeivr++8micsICflt67nlbDmmYLnmbznlJ/pjK/oqqTvvJonKSArXG5cdFx0XHRcdFx0XHRcdGVycm9yLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50Jyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0cHJvY2VzcyhwYWdlQ29udGVudCk7XG5cdFx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0dGl0bGVzOiB3Z1BhZ2VOYW1lLFxuXHRcdGN1cnRpbWVzdGFtcDogdHJ1ZSxcblx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnXSxcblx0fTtcblxuXHR2b2lkIGFwaVxuXHRcdC5nZXQocGFyYW1zKVxuXHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRpZiAoIWRhdGFbJ3F1ZXJ5J10/LnBhZ2VzKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCd1bmtub3duJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGFbJ3F1ZXJ5J10ucGFnZXM7XG5cblx0XHRcdGlmIChwYWdlLmludmFsaWQpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ2ludmFsaWR0aXRsZScpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnbm9jcmVhdGUtbWlzc2luZycpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBbe2NvbnRlbnR9XSA9IHBhZ2UucmV2aXNpb25zO1xuXG5cdFx0XHRyZXR1cm4gY29udGVudCBhcyBzdHJpbmc7XG5cdFx0fSlcblx0XHQudGhlbigoY29udGVudDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdGxldCBwYWdlQ29udGVudDogc3RyaW5nID0gY29udGVudDtcblxuXHRcdFx0cGFnZUNvbnRlbnQgPSBwYWdlQ29udGVudC5yZXBsYWNlKFxuXHRcdFx0XHQvW1xccyMmJyo6PD5bXFxdX3t8fV0vZ2ltLFxuXHRcdFx0XHQoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4gYCYjJHtzdHJpbmcuY29kZVBvaW50QXQoMCl9O2Bcblx0XHRcdCk7XG5cdFx0XHRwYWdlQ29udGVudCA9IHBhZ2VDb250ZW50LnJlcGxhY2UoXG5cdFx0XHRcdC8oJiM5MTsmIzkxOykoKD86KD8hJiMxMjQ7KSg/ISYjOTM7KS4pKz8pKCYjMTI0Oyg/Oig/ISYjOTM7KS4pKz8mIzkzOyYjOTM7KS9nLFxuXHRcdFx0XHQnJDEteyQyfS0kMydcblx0XHRcdCk7XG5cdFx0XHRwYWdlQ29udGVudCA9IHBhZ2VDb250ZW50LnJlcGxhY2UoLy0mIzEyMzsoLis/KSYjMTI1Oy0vZywgKHN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+XG5cdFx0XHRcdHN0cmluZ1xuXHRcdFx0XHRcdC5yZXBsYWNlKCctJiMxMjM7JywgJy17Jylcblx0XHRcdFx0XHQucmVwbGFjZSgnLSYjMTIzOycsICcteycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJyYjMTI1Oy0nLCAnfS0nKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzEyNDsvZywgJ3wnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzMyOy9nLCAnICcpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjNjE7L2csICc9Jylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiM2MjsvZywgJz4nKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzU4Oy9nLCAnOicpXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gcGFnZUNvbnRlbnQ7XG5cdFx0fSlcblx0XHQudGhlbigocGFnZUNvbnRlbnQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0cHJvY2VzcyhwYWdlQ29udGVudCk7XG5cdFx0fSk7XG59O1xuXG5leHBvcnQge3RyYW5zbGF0ZVZhcmlhbnRzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFRyYW5zbGF0ZVZhcmlhbnRzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iXSwKICAibWFwcGluZ3MiOiAi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QkEsUUFBUSxVQUFVLEdBQUcsRUFDckJBLFFBQVEsVUFBVSxHQUFHLEVBQ3JCQSxRQUFRLFVBQVUsR0FBRyxFQUNyQkEsUUFBUSxVQUFVLEdBQUcsQ0FDeEI7QUFFQSxXQUFPZ0Q7RUFDUixDQUFDLEVBQ0FRLEtBQU1SLGlCQUE4QjtBQUNwQ0QsWUFBUUMsV0FBVztFQUNwQixDQUFDO0FBQ0g7O0FGMVRBLE1BQUEsR0FBS2xFLG1CQUFBb0gsU0FBUSxFQUFFMUMsS0FBTTJDLFdBQXlDO0FBQzdELFFBQU07SUFBQ3RHO0VBQVUsSUFBSWtCLEdBQUdxRixPQUFPUCxJQUFJO0FBQ25DLE1BQUksQ0FBQywyQkFBMkJRLEtBQUt4RyxVQUFVLEdBQUc7QUFDakQ7RUFDRDtBQUVBLFFBQU15RyxZQUFtQ0gsTUFBTXRGLEtBQUssYUFBYSxFQUFFQyxTQUFTLGVBQWU7QUFDM0YsUUFBTXlGLFVBQWdDeEYsR0FBR3lELEtBQUtnQyxlQUFlRixXQUFXLEtBQUs3RixPQUFPQyxNQUFNLFFBQVEsTUFBTSxDQUFDO0FBRXpHNkYsY0FBQSxRQUFBQSxZQUFBLFVBQUFBLFFBQVNFLGlCQUFpQixTQUFTLE1BQVk7QUFDOUNGLFlBQVF4QixPQUFPO0FBQ2ZuRixzQkFBa0JDLFVBQVU7RUFDN0IsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgInRyYW5zbGF0ZVZhcmlhbnRzU3VtbWFyeSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImxhbmdzIiwgIlNldCIsICJuYW1lT2ZMYW5ncyIsICJ6aCIsICJ0cmFuc2xhdGVWYXJpYW50cyIsICJ3Z1BhZ2VOYW1lIiwgIl9wcm9tcHQiLCAic3VtbWFyeSIsICJyZXBsYWNlIiwgIiR3cmFwcGVyIiwgIiQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImlkIiwgInByZXBlbmRUbyIsICIkc3VibWl0QWxsIiwgImNsYXNzTmFtZSIsICJ3aW5kb3ciLCAid2dVTFMiLCAib24iLCAiJGJ1dHRvbnMiLCAiZmluZCIsICJsZW5ndGgiLCAibXciLCAibm90aWZ5IiwgInRhZyIsICJ0eXBlIiwgImNvbmZpcm0iLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiYnV0dG9uIiwgInZhbHVlIiwgInRyaWdnZXIiLCAiZXJyIiwgImUiLCAiZiIsICJhcHBlbmQiLCAic3R5bGUiLCAidGV4dEFsaWduIiwgImNvbG9yIiwgImRlZmF1bHRMYW5ncyIsICJydW5MYW5ncyIsICJwcm9tcHQiLCAiam9pbiIsICJzcGxpdCIsICJsYW5nUXVldWUiLCAibWFwIiwgImxhbmciLCAidHJpbSIsICJmaWx0ZXIiLCAiaGFzIiwgInByb2Nlc3MiLCAicGFnZUNvbnRlbnQiLCAic2hpZnQiLCAiJGRpZmZUYWJsZSIsICJiYXNlUGFnZU5hbWUiLCAidGFyZ2V0VGl0bGUiLCAibmV3UGFnZUNvbnRlbnQiLCAicGFyc2UiLCAidXNlbGFuZyIsICJ0aGVuIiwgImNvbnRlbnQiLCAiaW5uZXJIVE1MIiwgInRleHQiLCAiX3BhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgInByb3AiLCAicnZkaWZmdG90ZXh0IiwgInBvc3QiLCAiZXJyb3IiLCAiZGF0YSIsICIkdG9vbCIsICJocmVmIiwgInV0aWwiLCAiZ2V0VXJsIiwgInBhZ2UiLCAicGFnZXMiLCAibWlzc2luZyIsICIkc3VibWl0IiwgImZsb2F0IiwgInJlbW92ZSIsICJjcmVhdGUiLCAic3RyaW5nIiwgImNvZGVQb2ludEF0IiwgImRpZmYiLCAicmV2aXNpb25zIiwgImJvZHkiLCAiZWRpdCIsICJub2NyZWF0ZSIsICJwcmVwZW5kIiwgImFsd2F5cyIsICJwYXJhbXMiLCAiY3VydGltZXN0YW1wIiwgInJ2cHJvcCIsICJnZXQiLCAiX2RhdGEkcXVlcnkiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgImludmFsaWQiLCAiZ2V0Qm9keSIsICIkYm9keSIsICJjb25maWciLCAidGVzdCIsICJwb3J0bGV0SWQiLCAiZWxlbWVudCIsICJhZGRQb3J0bGV0TGluayIsICJhZGRFdmVudExpc3RlbmVyIl0KfQo=
