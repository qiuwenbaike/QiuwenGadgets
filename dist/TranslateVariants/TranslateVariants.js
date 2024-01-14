/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Xiplus/js/TranslateVariants}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/TranslateVariants}
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
//! src/TranslateVariants/modules/core.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
//! src/TranslateVariants/modules/constant.ts
var TRANSLATE_VARIANTS_SUMMARY = "自动转换变体自[[$1]]（[[MediaWiki:Gadget-TranslateVariants.js|TranslateVariants]]）";
//! src/TranslateVariants/modules/core.tsx
var import_ext_gadget2 = require("ext.gadget.Util");
var translateVariants = () => {
  const langs = /* @__PURE__ */ new Set(["zh", "zh-hans", "zh-cn", "zh-my", "zh-sg", "zh-hant", "zh-hk", "zh-mo", "zh-tw"]);
  const langname = {
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
  const result = {};
  const api = (0, import_ext_gadget2.initMwApi)("Qiuwen/1.1 (TranslateVariants/1.1; ".concat(mw.config.get("wgWikiID"), ")"));
  let basepagetext = "";
  const $table = $(/* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    id: "TranslateVariants"
  })).prependTo("#bodyContent");
  const $submitAll = $(/* @__PURE__ */ import_ext_gadget.default.createElement("button", null, window.wgULS("发布所有更改", "發佈所有變更")));
  $submitAll.on("click", () => {
    const $body = $("body");
    const $buttons = $body.find(".TranslateVariants-publish-changes");
    if ($buttons.length === 0) {
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
    $buttons.each((_index, element) => {
      $(element).trigger("click");
    });
  });
  $table.append($(/* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    style: {
      textAlign: "right"
    }
  })).append($submitAll));
  $(/* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    style: {
      color: "#f00"
    }
  }, window.wgULS("提醒：TranslateVariants工具使用IT及MediaWiki转换组进行自动转换，请确认转换结果是否正确！", "提醒：TranslateVariants工具使用IT及MediaWiki轉換組進行自動轉換，請確認轉換結果是否正確！"))).appendTo($table);
  const defaultlangs = "zh,zh-hans,zh-cn,zh-my,zh-sg,zh-hant,zh-hk,zh-mo,zh-tw";
  let runlangs = prompt(window.wgULS("转换以下语言（以逗号隔开）：", "轉換以下語言（以逗號隔開）："), defaultlangs);
  if (runlangs === null) {
    runlangs = defaultlangs;
  }
  const langqueue = runlangs.split(",").map((lang) => lang.trim()).filter((lang) => langs.has(lang));
  const process = () => {
    if (langqueue.length === 0) {
      return;
    }
    const lang = langqueue.shift();
    const $diffTable = $(/* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      id: "TranslateVariants-diff-".concat(lang)
    })).appendTo($table);
    $(/* @__PURE__ */ import_ext_gadget.default.createElement("hr", null)).appendTo($table);
    const basename = mw.config.get("wgPageName").replace(/\/zh$/, "");
    const targetTitle = lang === "zh" ? basename : "".concat(basename, "/").concat(lang);
    let newtext;
    if (!lang) {
      return;
    }
    void api.parse('{{NoteTA|G1=IT|G2=MediaWiki}}<div id="TVcontent">'.concat(basepagetext, "</div>"), {
      uselang: lang,
      prop: "text"
    }).then((data) => {
      newtext = $("<div>").html(data).find("#TVcontent").text();
      const _params = {
        action: "query",
        prop: "revisions",
        titles: [targetTitle],
        rvdifftotext: newtext,
        formatversion: "2"
      };
      return api.post(_params);
    }, (error) => {
      void mw.notify("解析".concat(lang).concat(window.wgULS("时发生错误：", "時發生錯誤：")).concat(error), {
        type: "error",
        tag: "TranslateVariant"
      });
      return null;
    }).then((data) => {
      if (data !== null) {
        const $tool = $('<div><a href="'.concat(mw.util.getUrl(targetTitle), '">').concat(lang, "（").concat(langname[lang], '）</a>（<a href="').concat(mw.util.getUrl(targetTitle, {
          action: "edit"
        }), '">').concat(window.wgULS("编", "編"), "</a>）</div>")).appendTo($diffTable);
        const [page] = data["query"].pages;
        if (page.missing) {
          const $submit = $(/* @__PURE__ */ import_ext_gadget.default.createElement("button", {
            className: ["TranslateVariants-publish-changes"],
            style: {
              float: "right"
            }
          }, window.wgULS("发布页面", "發佈頁面"))).appendTo($tool);
          $submit.on("click", function() {
            this.remove();
            api.create(targetTitle, {
              summary: TRANSLATE_VARIANTS_SUMMARY.replace(/\$1/g, mw.config.get("wgPageName"))
            }, newtext).then(() => {
              void mw.notify(window.wgULS("已编辑 ", "已編輯 ") + targetTitle, {
                type: "success",
                tag: "TranslateVariant"
              });
            }, (error) => {
              void mw.notify(window.wgULS("编辑", "編輯 ") + targetTitle + window.wgULS(" 发生错误：", " 發生錯誤：") + error, {
                type: "error",
                tag: "TranslateVariant"
              });
            });
          });
          $("<pre>").html(newtext.replace(/[&<>]/gim, (s) => "&#".concat(s.codePointAt(0), ";"))).appendTo($diffTable);
          return;
        }
        const diff = page.revisions[0].diff.body;
        if (diff === "") {
          $(/* @__PURE__ */ import_ext_gadget.default.createElement("span", {
            style: {
              float: "right"
            }
          }, window.wgULS("无更改", "無變更"))).appendTo($tool);
        } else {
          const $submit = $(/* @__PURE__ */ import_ext_gadget.default.createElement("button", {
            className: "TranslateVariants-publish-changes",
            style: {
              float: "right"
            }
          }, window.wgULS("发布更改", "發佈變更"))).appendTo($tool);
          $submit.on("click", function() {
            this.remove();
            api.edit(targetTitle, () => ({
              text: newtext,
              summary: TRANSLATE_VARIANTS_SUMMARY.replace(/\$1/g, mw.config.get("wgPageName")),
              nocreate: false
            })).then(() => {
              void mw.notify(window.wgULS("已编辑", "已編輯 ") + targetTitle, {
                type: "success",
                tag: "TranslateVariant"
              });
            }, (error) => {
              void mw.notify(window.wgULS("编辑", "編輯 ") + targetTitle + window.wgULS(" 发生错误：", " 發生錯誤：") + error, {
                type: "error",
                tag: "TranslateVariant"
              });
            });
          });
          $("<table>").addClass("diff").html(diff).prepend(/* @__PURE__ */ import_ext_gadget.default.createElement("colgroup", null, /* @__PURE__ */ import_ext_gadget.default.createElement("col", {
            className: "diff-marker"
          }), /* @__PURE__ */ import_ext_gadget.default.createElement("col", {
            className: "diff-content"
          }), /* @__PURE__ */ import_ext_gadget.default.createElement("col", {
            className: "diff-marker"
          }), /* @__PURE__ */ import_ext_gadget.default.createElement("col", {
            className: "diff-content"
          }))).appendTo($diffTable);
        }
      }
    }, (error) => {
      void mw.notify(window.wgULS("获取", "取得") + lang + window.wgULS("差异时发生错误：", "差異時發生錯誤：") + error, {
        type: "error",
        tag: "TranslateVariant"
      });
    }).always(() => {
      process();
    });
  };
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "revisions",
    titles: [mw.config.get("wgPageName")],
    curtimestamp: true,
    rvprop: ["content", "timestamp"]
  };
  void api.get(params).then((data) => {
    if (!data["query"] || !data["query"].pages) {
      return $.Deferred().reject("unknown");
    }
    const [page] = data["query"].pages;
    if (!page || page.invalid) {
      return $.Deferred().reject("invalidtitle");
    }
    if (page.missing) {
      return $.Deferred().reject("nocreate-missing");
    }
    const [revision] = page.revisions;
    return {
      content: revision.content
    };
  }).then(({
    content
  }) => {
    let text = content;
    result["zh"] = text;
    text = text.replace(/[\s#&'*:<>[\]_{|}]/gim, (string) => "&#".concat(string.codePointAt(0), ";"));
    text = text.replace(/(&#91;&#91;)((?:(?!&#124;)(?!&#93;).)+?)(&#124;(?:(?!&#93;).)+?&#93;&#93;)/g, "$1-{$2}-$3");
    text = text.replace(/-&#123;(.+?)&#125;-/g, (string) => {
      string = string.replace("-&#123;", "-{").replace("-&#123;", "-{").replace("&#125;-", "}-").replace(/&#124;/g, "|").replace(/&#32;/g, " ").replace(/&#61;/g, "=").replace(/&#62;/g, ">").replace(/&#58;/g, ":");
      return string;
    });
    basepagetext = text;
    process();
  });
};
//! src/TranslateVariants/TranslateVariants.ts
if (/^MediaWiki:[^/]+(\/zh)?$/.test(mw.config.get("wgPageName"))) {
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const link = mw.util.addPortletLink(portletId, "#", window.wgULS("转换变体", "轉換變體"));
  if (link) {
    $(link).on("click", function() {
      this.remove();
      translateVariants();
    });
  }
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvY29yZS50c3giLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge1RSQU5TTEFURV9WQVJJQU5UU19TVU1NQVJZfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5leHBvcnQgY29uc3QgdHJhbnNsYXRlVmFyaWFudHMgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IGxhbmdzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoW1xuXHRcdCd6aCcsXG5cdFx0J3poLWhhbnMnLFxuXHRcdCd6aC1jbicsXG5cdFx0J3poLW15Jyxcblx0XHQnemgtc2cnLFxuXHRcdCd6aC1oYW50Jyxcblx0XHQnemgtaGsnLFxuXHRcdCd6aC1tbycsXG5cdFx0J3poLXR3Jyxcblx0XSk7XG5cdGNvbnN0IGxhbmduYW1lOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuXHRcdHpoOiAn5Y6f5aeLJyxcblx0XHQnemgtaGFucyc6ICfnroDkvZMnLFxuXHRcdCd6aC1jbic6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdCd6aC1teSc6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdCd6aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdCd6aC1oYW50JzogJ+e5gemrlCcsXG5cdFx0J3poLWhrJzogJ+S4reWci+mmmea4r+e5gemrlCcsXG5cdFx0J3poLW1vJzogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdFx0J3poLXR3JzogJ+S4reWci+iHuueBo+e5gemrlCcsXG5cdH07XG5cdGNvbnN0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUWl1d2VuLzEuMSAoVHJhbnNsYXRlVmFyaWFudHMvMS4xOyAke213LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyl9KWApO1xuXHRsZXQgYmFzZXBhZ2V0ZXh0OiBzdHJpbmcgPSAnJztcblx0Y29uc3QgJHRhYmxlOiBKUXVlcnkgPSAkKCg8ZGl2IGlkPVwiVHJhbnNsYXRlVmFyaWFudHNcIiAvPikgYXMgSFRNTEVsZW1lbnQpLnByZXBlbmRUbygnI2JvZHlDb250ZW50Jyk7XG5cdGNvbnN0ICRzdWJtaXRBbGw6IEpRdWVyeSA9ICQoKDxidXR0b24+e3dpbmRvdy53Z1VMUygn5Y+R5biD5omA5pyJ5pu05pS5JywgJ+eZvOS9iOaJgOacieiuiuabtCcpfTwvYnV0dG9uPikgYXMgSFRNTEVsZW1lbnQpO1xuXHQkc3VibWl0QWxsLm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cdFx0Y29uc3QgJGJ1dHRvbnM6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5UcmFuc2xhdGVWYXJpYW50cy1wdWJsaXNoLWNoYW5nZXMnKTtcblx0XHRpZiAoJGJ1dHRvbnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSh3aW5kb3cud2dVTFMoJ+ayoeacieS7u+S9leWPr+S7peWPkeW4g+eahOabtOaUuScsICfmspLmnInku7vkvZXorormm7Tlj6/nmbzkvYgnKSwge1xuXHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50cycsXG5cdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFjb25maXJtKGAke3dpbmRvdy53Z1VMUygn5pu05pS5JywgJ+eZvOS9iCcpfSR7JGJ1dHRvbnMubGVuZ3RofSR7d2luZG93LndnVUxTKCfkuKrmm7TmlLknLCAn5YCL6K6K5pu0Jyl977yfYCkpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KHdpbmRvdy53Z1VMUygn5bey5Y+W5raI5pu05pS5JywgJ+W3suWPlua2iOeZvOS9iCcpLCB7dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0JGJ1dHRvbnMuZWFjaCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0XHQkKGVsZW1lbnQpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0fSk7XG5cdH0pO1xuXHQkdGFibGUuYXBwZW5kKFxuXHRcdCQoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0dGV4dEFsaWduOiAncmlnaHQnLFxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHQpLmFwcGVuZCgkc3VibWl0QWxsKVxuXHQpO1xuXHQkKFxuXHRcdDxkaXZcblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdGNvbG9yOiAnI2YwMCcsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdHt3aW5kb3cud2dVTFMoXG5cdFx0XHRcdCfmj5DphpLvvJpUcmFuc2xhdGVWYXJpYW50c+W3peWFt+S9v+eUqElU5Y+KTWVkaWFXaWtp6L2s5o2i57uE6L+b6KGM6Ieq5Yqo6L2s5o2i77yM6K+356Gu6K6k6L2s5o2i57uT5p6c5piv5ZCm5q2j56Gu77yBJyxcblx0XHRcdFx0J+aPkOmGku+8mlRyYW5zbGF0ZVZhcmlhbnRz5bel5YW35L2/55SoSVTlj4pNZWRpYVdpa2novYnmj5vntYTpgLLooYzoh6rli5XovYnmj5vvvIzoq4vnorroqo3ovYnmj5vntZDmnpzmmK/lkKbmraPnorrvvIEnXG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpLmFwcGVuZFRvKCR0YWJsZSk7XG5cdGNvbnN0IGRlZmF1bHRsYW5nczogc3RyaW5nID0gJ3poLHpoLWhhbnMsemgtY24semgtbXksemgtc2csemgtaGFudCx6aC1oayx6aC1tbyx6aC10dyc7XG5cdGxldCBydW5sYW5nczogc3RyaW5nIHwgbnVsbCA9IHByb21wdChcblx0XHR3aW5kb3cud2dVTFMoJ+i9rOaNouS7peS4i+ivreiogO+8iOS7pemAl+WPt+malOW8gO+8ie+8micsICfovYnmj5vku6XkuIvoqp7oqIDvvIjku6XpgJfomZ/pmpTplovvvInvvJonKSxcblx0XHRkZWZhdWx0bGFuZ3Ncblx0KTtcblx0aWYgKHJ1bmxhbmdzID09PSBudWxsKSB7XG5cdFx0cnVubGFuZ3MgPSBkZWZhdWx0bGFuZ3M7XG5cdH1cblx0Y29uc3QgbGFuZ3F1ZXVlOiBzdHJpbmdbXSA9IHJ1bmxhbmdzXG5cdFx0LnNwbGl0KCcsJylcblx0XHQubWFwKChsYW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4gbGFuZy50cmltKCkpXG5cdFx0LmZpbHRlcigobGFuZzogc3RyaW5nKTogYm9vbGVhbiA9PiBsYW5ncy5oYXMobGFuZykpO1xuXHRjb25zdCBwcm9jZXNzID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmIChsYW5ncXVldWUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGxhbmc6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGxhbmdxdWV1ZS5zaGlmdCgpO1xuXHRcdGNvbnN0ICRkaWZmVGFibGU6IEpRdWVyeSA9ICQoKDxkaXYgaWQ9e2BUcmFuc2xhdGVWYXJpYW50cy1kaWZmLSR7bGFuZ31gfSAvPikgYXMgSFRNTEVsZW1lbnQpLmFwcGVuZFRvKCR0YWJsZSk7XG5cdFx0JCg8aHIgLz4pLmFwcGVuZFRvKCR0YWJsZSk7XG5cdFx0Y29uc3QgYmFzZW5hbWU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC9cXC96aCQvLCAnJyk7XG5cdFx0Y29uc3QgdGFyZ2V0VGl0bGU6IHN0cmluZyA9IGxhbmcgPT09ICd6aCcgPyBiYXNlbmFtZSA6IGAke2Jhc2VuYW1lfS8ke2xhbmd9YDtcblx0XHRsZXQgbmV3dGV4dDogc3RyaW5nO1xuXHRcdGlmICghbGFuZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2b2lkIGFwaVxuXHRcdFx0LnBhcnNlKGB7e05vdGVUQXxHMT1JVHxHMj1NZWRpYVdpa2l9fTxkaXYgaWQ9XCJUVmNvbnRlbnRcIj4ke2Jhc2VwYWdldGV4dH08L2Rpdj5gLCB7XG5cdFx0XHRcdHVzZWxhbmc6IGxhbmcsXG5cdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbihcblx0XHRcdFx0KGRhdGEpID0+IHtcblx0XHRcdFx0XHRuZXd0ZXh0ID0gJCgnPGRpdj4nKS5odG1sKGRhdGEpLmZpbmQoJyNUVmNvbnRlbnQnKS50ZXh0KCk7XG5cdFx0XHRcdFx0Y29uc3QgX3BhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0XHRcdHRpdGxlczogW3RhcmdldFRpdGxlXSxcblx0XHRcdFx0XHRcdHJ2ZGlmZnRvdGV4dDogbmV3dGV4dCxcblx0XHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJldHVybiBhcGkucG9zdChfcGFyYW1zKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0KGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoYOino+aekCR7bGFuZ30ke3dpbmRvdy53Z1VMUygn5pe25Y+R55Sf6ZSZ6K+v77yaJywgJ+aZgueZvOeUn+mMr+iqpO+8micpfSR7ZXJyb3J9YCwge1xuXHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XHQudGhlbihcblx0XHRcdFx0KGRhdGEpID0+IHtcblx0XHRcdFx0XHRpZiAoZGF0YSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgJHRvb2w6IEpRdWVyeSA9ICQoXG5cdFx0XHRcdFx0XHRcdGA8ZGl2PjxhIGhyZWY9XCIke213LnV0aWwuZ2V0VXJsKHRhcmdldFRpdGxlKX1cIj4ke2xhbmd977yIJHtcblx0XHRcdFx0XHRcdFx0XHRsYW5nbmFtZVtsYW5nIGFzIG5ldmVyXVxuXHRcdFx0XHRcdFx0XHR977yJPC9hPu+8iDxhIGhyZWY9XCIke213LnV0aWwuZ2V0VXJsKHRhcmdldFRpdGxlLCB7XG5cdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0XHRcdH0pfVwiPiR7d2luZG93LndnVUxTKCfnvJYnLCAn57eoJyl9PC9hPu+8iTwvZGl2PmBcblx0XHRcdFx0XHRcdCkuYXBwZW5kVG8oJGRpZmZUYWJsZSk7XG5cdFx0XHRcdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhWydxdWVyeSddLnBhZ2VzO1xuXHRcdFx0XHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCAkc3VibWl0OiBKUXVlcnkgPSAkKFxuXHRcdFx0XHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtbJ1RyYW5zbGF0ZVZhcmlhbnRzLXB1Ymxpc2gtY2hhbmdlcyddfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7d2luZG93LndnVUxTKCflj5HluIPpobXpnaInLCAn55m85L2I6aCB6Z2iJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQpIGFzIEhUTUxFbGVtZW50XG5cdFx0XHRcdFx0XHRcdCkuYXBwZW5kVG8oJHRvb2wpO1xuXHRcdFx0XHRcdFx0XHQkc3VibWl0Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGFwaS5jcmVhdGUoXG5cdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXRUaXRsZSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VtbWFyeTogVFJBTlNMQVRFX1ZBUklBTlRTX1NVTU1BUlkucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvXFwkMS9nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdG5ld3RleHRcblx0XHRcdFx0XHRcdFx0XHQpLnRoZW4oXG5cdFx0XHRcdFx0XHRcdFx0XHQoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KHdpbmRvdy53Z1VMUygn5bey57yW6L6RICcsICflt7Lnt6jovK8gJykgKyB0YXJnZXRUaXRsZSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0KGVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn57yW6L6RJywgJ+e3qOi8ryAnKSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXRUaXRsZSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJyDlj5HnlJ/plJnor6/vvJonLCAnIOeZvOeUn+mMr+iqpO+8micpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdCQoJzxwcmU+Jylcblx0XHRcdFx0XHRcdFx0XHQuaHRtbChuZXd0ZXh0LnJlcGxhY2UoL1smPD5dL2dpbSwgKHM6IHN0cmluZyk6IHN0cmluZyA9PiBgJiMke3MuY29kZVBvaW50QXQoMCl9O2ApKVxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmRUbygkZGlmZlRhYmxlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc3QgZGlmZjogc3RyaW5nID0gcGFnZS5yZXZpc2lvbnNbMF0uZGlmZi5ib2R5O1xuXHRcdFx0XHRcdFx0aWYgKGRpZmYgPT09ICcnKSB7XG5cdFx0XHRcdFx0XHRcdCQoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7d2luZG93LndnVUxTKCfml6Dmm7TmlLknLCAn54Sh6K6K5pu0Jyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQpLmFwcGVuZFRvKCR0b29sKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRzdWJtaXQ6IEpRdWVyeSA9ICQoXG5cdFx0XHRcdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJUcmFuc2xhdGVWYXJpYW50cy1wdWJsaXNoLWNoYW5nZXNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7d2luZG93LndnVUxTKCflj5HluIPmm7TmlLknLCAn55m85L2I6K6K5pu0Jyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQpIGFzIEhUTUxFbGVtZW50XG5cdFx0XHRcdFx0XHRcdCkuYXBwZW5kVG8oJHRvb2wpO1xuXHRcdFx0XHRcdFx0XHQkc3VibWl0Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGFwaS5lZGl0KFxuXHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0VGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHQoKTogQXBpRWRpdFBhZ2VQYXJhbXMgPT4gKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogbmV3dGV4dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VtbWFyeTogVFJBTlNMQVRFX1ZBUklBTlRTX1NVTU1BUlkucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvXFwkMS9nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2NyZWF0ZTogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdCkudGhlbihcblx0XHRcdFx0XHRcdFx0XHRcdCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkod2luZG93LndnVUxTKCflt7LnvJbovpEnLCAn5bey57eo6LyvICcpICsgdGFyZ2V0VGl0bGUsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+e8lui+kScsICfnt6jovK8gJykgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0VGl0bGUgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCcg5Y+R55Sf6ZSZ6K+v77yaJywgJyDnmbznlJ/pjK/oqqTvvJonKSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHQkKCc8dGFibGU+Jylcblx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2RpZmYnKVxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKGRpZmYpXG5cdFx0XHRcdFx0XHRcdFx0LnByZXBlbmQoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y29sZ3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1tYXJrZXJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Y29sIGNsYXNzTmFtZT1cImRpZmYtY29udGVudFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1tYXJrZXJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Y29sIGNsYXNzTmFtZT1cImRpZmYtY29udGVudFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2NvbGdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kVG8oJGRpZmZUYWJsZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQoZXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+WJywgJ+WPluW+lycpICtcblx0XHRcdFx0XHRcdFx0bGFuZyArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5beu5byC5pe25Y+R55Sf6ZSZ6K+v77yaJywgJ+W3rueVsOaZgueZvOeUn+mMr+iqpO+8micpICtcblx0XHRcdFx0XHRcdFx0ZXJyb3IsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdC5hbHdheXMoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRwcm9jZXNzKCk7XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHRpdGxlczogW213LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKV0sXG5cdFx0Y3VydGltZXN0YW1wOiB0cnVlLFxuXHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCddLFxuXHR9O1xuXHR2b2lkIGFwaVxuXHRcdC5nZXQocGFyYW1zKVxuXHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRpZiAoIWRhdGFbJ3F1ZXJ5J10gfHwgIWRhdGFbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ3Vua25vd24nKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGFbJ3F1ZXJ5J10ucGFnZXM7XG5cdFx0XHRpZiAoIXBhZ2UgfHwgcGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdpbnZhbGlkdGl0bGUnKTtcblx0XHRcdH1cblx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ25vY3JlYXRlLW1pc3NpbmcnKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFtyZXZpc2lvbl0gPSBwYWdlLnJldmlzaW9ucztcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNvbnRlbnQ6IHJldmlzaW9uLmNvbnRlbnQsXG5cdFx0XHR9O1xuXHRcdH0pXG5cdFx0LnRoZW4oKHtjb250ZW50fSk6IHZvaWQgPT4ge1xuXHRcdFx0bGV0IHRleHQ6IHN0cmluZyA9IGNvbnRlbnQ7XG5cdFx0XHRyZXN1bHRbJ3poJ10gPSB0ZXh0O1xuXHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvW1xccyMmJyo6PD5bXFxdX3t8fV0vZ2ltLCAoc3RyaW5nOiBzdHJpbmcpID0+IGAmIyR7c3RyaW5nLmNvZGVQb2ludEF0KDApfTtgKTtcblx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoXG5cdFx0XHRcdC8oJiM5MTsmIzkxOykoKD86KD8hJiMxMjQ7KSg/ISYjOTM7KS4pKz8pKCYjMTI0Oyg/Oig/ISYjOTM7KS4pKz8mIzkzOyYjOTM7KS9nLFxuXHRcdFx0XHQnJDEteyQyfS0kMydcblx0XHRcdCk7XG5cdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8tJiMxMjM7KC4rPykmIzEyNTstL2csIChzdHJpbmc6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRzdHJpbmcgPSBzdHJpbmdcblx0XHRcdFx0XHQucmVwbGFjZSgnLSYjMTIzOycsICcteycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJy0mIzEyMzsnLCAnLXsnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCcmIzEyNTstJywgJ30tJylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiMxMjQ7L2csICd8Jylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiMzMjsvZywgJyAnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzYxOy9nLCAnPScpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjNjI7L2csICc+Jylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiM1ODsvZywgJzonKTtcblx0XHRcdFx0cmV0dXJuIHN0cmluZztcblx0XHRcdH0pO1xuXHRcdFx0YmFzZXBhZ2V0ZXh0ID0gdGV4dDtcblx0XHRcdHByb2Nlc3MoKTtcblx0XHR9KTtcbn07XG4iLCAiZXhwb3J0IGNvbnN0IFRSQU5TTEFURV9WQVJJQU5UU19TVU1NQVJZOiBzdHJpbmcgPVxuXHQn6Ieq5Yqo6L2s5o2i5Y+Y5L2T6IeqW1skMV1d77yIW1tNZWRpYVdpa2k6R2FkZ2V0LVRyYW5zbGF0ZVZhcmlhbnRzLmpzfFRyYW5zbGF0ZVZhcmlhbnRzXV3vvIknO1xuIiwgImltcG9ydCB7dHJhbnNsYXRlVmFyaWFudHN9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuaWYgKC9eTWVkaWFXaWtpOlteL10rKFxcL3poKT8kLy50ZXN0KG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSkpIHtcblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBsaW5rOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIHdpbmRvdy53Z1VMUygn6L2s5o2i5Y+Y5L2TJywgJ+i9ieaPm+iuiumrlCcpKTtcblx0aWYgKGxpbmspIHtcblx0XHQkKGxpbmspLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMucmVtb3ZlKCk7XG5cdFx0XHR0cmFuc2xhdGVWYXJpYW50cygpO1xuXHRcdH0pO1xuXHR9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNBWCxJQUFNQyw2QkFDWjs7QURDRCxJQUFBQyxxQkFBd0JGLFFBQUEsaUJBQUE7QUFFakIsSUFBTUcsb0JBQW9CQSxNQUFZO0FBQzVDLFFBQU1DLFFBQXFCLG9CQUFJQyxJQUFJLENBQ2xDLE1BQ0EsV0FDQSxTQUNBLFNBQ0EsU0FDQSxXQUNBLFNBQ0EsU0FDQSxPQUFBLENBQ0E7QUFDRCxRQUFNQyxXQUFtQztJQUN4Q0MsSUFBSTtJQUNKLFdBQVc7SUFDWCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxXQUFXO0lBQ1gsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0VBQ1Y7QUFDQSxRQUFNQyxTQUFpQyxDQUFDO0FBQ3hDLFFBQU1DLE9BQUEsR0FBY1AsbUJBQUFRLFdBQUEsc0NBQUFDLE9BQWdEQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVUsR0FBQyxHQUFBLENBQUc7QUFDaEcsTUFBSUMsZUFBdUI7QUFDM0IsUUFBTUMsU0FBaUJDLEVBQUduQixrQ0FBQW9CLFFBQUFDLGNBQUMs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QUFRLHdCQUF5QmdELFlBQW1CO0FBQy9EQSxlQUFTQSxPQUNQaEQsUUFBUSxXQUFXLElBQUksRUFDdkJBLFFBQVEsV0FBVyxJQUFJLEVBQ3ZCQSxRQUFRLFdBQVcsSUFBSSxFQUN2QkEsUUFBUSxXQUFXLEdBQUcsRUFDdEJBLFFBQVEsVUFBVSxHQUFHLEVBQ3JCQSxRQUFRLFVBQVUsR0FBRyxFQUNyQkEsUUFBUSxVQUFVLEdBQUcsRUFDckJBLFFBQVEsVUFBVSxHQUFHO0FBQ3ZCLGFBQU9nRDtJQUNSLENBQUM7QUFDRDFGLG1CQUFlbUQ7QUFDZmIsWUFBUTtFQUNULENBQUM7QUFDSDs7QUUvVEEsSUFBSSwyQkFBMkJxRCxLQUFLOUYsR0FBR0MsT0FBT0MsSUFBSSxZQUFZLENBQUMsR0FBRztBQUNqRSxRQUFNNkYsWUFBbUNDLFNBQVNDLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEcsUUFBTUMsT0FBNkJsRyxHQUFHK0QsS0FBS29DLGVBQWVKLFdBQVcsS0FBS3BGLE9BQU9DLE1BQU0sUUFBUSxNQUFNLENBQUM7QUFDdEcsTUFBSXNGLE1BQU07QUFDVDdGLE1BQUU2RixJQUFJLEVBQUVyRixHQUFHLFNBQVMsV0FBWTtBQUMvQixXQUFLMEQsT0FBTztBQUNaaEYsd0JBQWtCO0lBQ25CLENBQUM7RUFDRjtBQUNEOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiVFJBTlNMQVRFX1ZBUklBTlRTX1NVTU1BUlkiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInRyYW5zbGF0ZVZhcmlhbnRzIiwgImxhbmdzIiwgIlNldCIsICJsYW5nbmFtZSIsICJ6aCIsICJyZXN1bHQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJiYXNlcGFnZXRleHQiLCAiJHRhYmxlIiwgIiQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImlkIiwgInByZXBlbmRUbyIsICIkc3VibWl0QWxsIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJvbiIsICIkYm9keSIsICIkYnV0dG9ucyIsICJmaW5kIiwgImxlbmd0aCIsICJub3RpZnkiLCAidGFnIiwgInR5cGUiLCAiY29uZmlybSIsICJlYWNoIiwgIl9pbmRleCIsICJlbGVtZW50IiwgInRyaWdnZXIiLCAiYXBwZW5kIiwgInN0eWxlIiwgInRleHRBbGlnbiIsICJjb2xvciIsICJhcHBlbmRUbyIsICJkZWZhdWx0bGFuZ3MiLCAicnVubGFuZ3MiLCAicHJvbXB0IiwgImxhbmdxdWV1ZSIsICJzcGxpdCIsICJtYXAiLCAibGFuZyIsICJ0cmltIiwgImZpbHRlciIsICJoYXMiLCAicHJvY2VzcyIsICJzaGlmdCIsICIkZGlmZlRhYmxlIiwgImJhc2VuYW1lIiwgInJlcGxhY2UiLCAidGFyZ2V0VGl0bGUiLCAibmV3dGV4dCIsICJwYXJzZSIsICJ1c2VsYW5nIiwgInByb3AiLCAidGhlbiIsICJkYXRhIiwgImh0bWwiLCAidGV4dCIsICJfcGFyYW1zIiwgImFjdGlvbiIsICJ0aXRsZXMiLCAicnZkaWZmdG90ZXh0IiwgImZvcm1hdHZlcnNpb24iLCAicG9zdCIsICJlcnJvciIsICIkdG9vbCIsICJ1dGlsIiwgImdldFVybCIsICJwYWdlIiwgInBhZ2VzIiwgIm1pc3NpbmciLCAiJHN1Ym1pdCIsICJjbGFzc05hbWUiLCAiZmxvYXQiLCAicmVtb3ZlIiwgImNyZWF0ZSIsICJzdW1tYXJ5IiwgInMiLCAiY29kZVBvaW50QXQiLCAiZGlmZiIsICJyZXZpc2lvbnMiLCAiYm9keSIsICJlZGl0IiwgIm5vY3JlYXRlIiwgImFkZENsYXNzIiwgInByZXBlbmQiLCAiYWx3YXlzIiwgInBhcmFtcyIsICJmb3JtYXQiLCAiY3VydGltZXN0YW1wIiwgInJ2cHJvcCIsICJEZWZlcnJlZCIsICJyZWplY3QiLCAiaW52YWxpZCIsICJyZXZpc2lvbiIsICJjb250ZW50IiwgInN0cmluZyIsICJ0ZXN0IiwgInBvcnRsZXRJZCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImxpbmsiLCAiYWRkUG9ydGxldExpbmsiXQp9Cg==

})();

/* </nowiki> */
