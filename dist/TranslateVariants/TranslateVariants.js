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
  }, $submitAll)), $(/* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    style: {
      color: "#f00"
    }
  }, window.wgULS("提醒：TranslateVariants工具使用IT及MediaWiki转换组进行自动转换，请确认转换结果是否正确！", "提醒：TranslateVariants工具使用IT及MediaWiki轉換組進行自動轉換，請確認轉換結果是否正確！"))));
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
    }));
    $table.append($diffTable, $(/* @__PURE__ */ import_ext_gadget.default.createElement("hr", null)));
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
      newtext = $(/* @__PURE__ */ import_ext_gadget.default.createElement("div", null, data)).find("#TVcontent").text();
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
          $(/* @__PURE__ */ import_ext_gadget.default.createElement("pre", null, newtext.replace(/[&<>]/gim, (s) => "&#".concat(s.codePointAt(0), ";")))).appendTo($diffTable);
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
          $(/* @__PURE__ */ import_ext_gadget.default.createElement("table", {
            className: "diff"
          }, /* @__PURE__ */ import_ext_gadget.default.createElement("colgroup", null, /* @__PURE__ */ import_ext_gadget.default.createElement("col", {
            className: "diff-marker"
          }), /* @__PURE__ */ import_ext_gadget.default.createElement("col", {
            className: "diff-content"
          }), /* @__PURE__ */ import_ext_gadget.default.createElement("col", {
            className: "diff-marker"
          }), /* @__PURE__ */ import_ext_gadget.default.createElement("col", {
            className: "diff-content"
          })), diff)).appendTo($diffTable);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvY29yZS50c3giLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge1RSQU5TTEFURV9WQVJJQU5UU19TVU1NQVJZfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5leHBvcnQgY29uc3QgdHJhbnNsYXRlVmFyaWFudHMgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IGxhbmdzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoW1xuXHRcdCd6aCcsXG5cdFx0J3poLWhhbnMnLFxuXHRcdCd6aC1jbicsXG5cdFx0J3poLW15Jyxcblx0XHQnemgtc2cnLFxuXHRcdCd6aC1oYW50Jyxcblx0XHQnemgtaGsnLFxuXHRcdCd6aC1tbycsXG5cdFx0J3poLXR3Jyxcblx0XSk7XG5cdGNvbnN0IGxhbmduYW1lOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuXHRcdHpoOiAn5Y6f5aeLJyxcblx0XHQnemgtaGFucyc6ICfnroDkvZMnLFxuXHRcdCd6aC1jbic6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdCd6aC1teSc6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdCd6aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdCd6aC1oYW50JzogJ+e5gemrlCcsXG5cdFx0J3poLWhrJzogJ+S4reWci+mmmea4r+e5gemrlCcsXG5cdFx0J3poLW1vJzogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdFx0J3poLXR3JzogJ+S4reWci+iHuueBo+e5gemrlCcsXG5cdH07XG5cdGNvbnN0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUWl1d2VuLzEuMSAoVHJhbnNsYXRlVmFyaWFudHMvMS4xOyAke213LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyl9KWApO1xuXHRsZXQgYmFzZXBhZ2V0ZXh0OiBzdHJpbmcgPSAnJztcblx0Y29uc3QgJHRhYmxlOiBKUXVlcnkgPSAkKCg8ZGl2IGlkPVwiVHJhbnNsYXRlVmFyaWFudHNcIiAvPikgYXMgSFRNTEVsZW1lbnQpLnByZXBlbmRUbygnI2JvZHlDb250ZW50Jyk7XG5cdGNvbnN0ICRzdWJtaXRBbGw6IEpRdWVyeSA9ICQoKDxidXR0b24+e3dpbmRvdy53Z1VMUygn5Y+R5biD5omA5pyJ5pu05pS5JywgJ+eZvOS9iOaJgOacieiuiuabtCcpfTwvYnV0dG9uPikgYXMgSFRNTEVsZW1lbnQpO1xuXHQkc3VibWl0QWxsLm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cdFx0Y29uc3QgJGJ1dHRvbnM6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5UcmFuc2xhdGVWYXJpYW50cy1wdWJsaXNoLWNoYW5nZXMnKTtcblx0XHRpZiAoJGJ1dHRvbnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSh3aW5kb3cud2dVTFMoJ+ayoeacieS7u+S9leWPr+S7peWPkeW4g+eahOabtOaUuScsICfmspLmnInku7vkvZXorormm7Tlj6/nmbzkvYgnKSwge1xuXHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50cycsXG5cdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFjb25maXJtKGAke3dpbmRvdy53Z1VMUygn5pu05pS5JywgJ+eZvOS9iCcpfSR7JGJ1dHRvbnMubGVuZ3RofSR7d2luZG93LndnVUxTKCfkuKrmm7TmlLknLCAn5YCL6K6K5pu0Jyl977yfYCkpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KHdpbmRvdy53Z1VMUygn5bey5Y+W5raI5pu05pS5JywgJ+W3suWPlua2iOeZvOS9iCcpLCB7dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0JGJ1dHRvbnMuZWFjaCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0XHQkKGVsZW1lbnQpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0fSk7XG5cdH0pO1xuXHQkdGFibGUuYXBwZW5kKFxuXHRcdCQoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0dGV4dEFsaWduOiAncmlnaHQnLFxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHR7JHN1Ym1pdEFsbH1cblx0XHRcdDwvZGl2PlxuXHRcdCksXG5cdFx0JChcblx0XHRcdDxkaXZcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRjb2xvcjogJyNmMDAnLFxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHR7d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdCfmj5DphpLvvJpUcmFuc2xhdGVWYXJpYW50c+W3peWFt+S9v+eUqElU5Y+KTWVkaWFXaWtp6L2s5o2i57uE6L+b6KGM6Ieq5Yqo6L2s5o2i77yM6K+356Gu6K6k6L2s5o2i57uT5p6c5piv5ZCm5q2j56Gu77yBJyxcblx0XHRcdFx0XHQn5o+Q6YaS77yaVHJhbnNsYXRlVmFyaWFudHPlt6Xlhbfkvb/nlKhJVOWPik1lZGlhV2lraei9ieaPm+e1hOmAsuihjOiHquWLlei9ieaPm++8jOiri+eiuuiqjei9ieaPm+e1kOaenOaYr+WQpuato+eiuu+8gSdcblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0KTtcblx0Y29uc3QgZGVmYXVsdGxhbmdzOiBzdHJpbmcgPSAnemgsemgtaGFucyx6aC1jbix6aC1teSx6aC1zZyx6aC1oYW50LHpoLWhrLHpoLW1vLHpoLXR3Jztcblx0bGV0IHJ1bmxhbmdzOiBzdHJpbmcgfCBudWxsID0gcHJvbXB0KFxuXHRcdHdpbmRvdy53Z1VMUygn6L2s5o2i5Lul5LiL6K+t6KiA77yI5Lul6YCX5Y+36ZqU5byA77yJ77yaJywgJ+i9ieaPm+S7peS4i+iqnuiogO+8iOS7pemAl+iZn+malOmWi++8ie+8micpLFxuXHRcdGRlZmF1bHRsYW5nc1xuXHQpO1xuXHRpZiAocnVubGFuZ3MgPT09IG51bGwpIHtcblx0XHRydW5sYW5ncyA9IGRlZmF1bHRsYW5ncztcblx0fVxuXHRjb25zdCBsYW5ncXVldWU6IHN0cmluZ1tdID0gcnVubGFuZ3Ncblx0XHQuc3BsaXQoJywnKVxuXHRcdC5tYXAoKGxhbmc6IHN0cmluZyk6IHN0cmluZyA9PiBsYW5nLnRyaW0oKSlcblx0XHQuZmlsdGVyKChsYW5nOiBzdHJpbmcpOiBib29sZWFuID0+IGxhbmdzLmhhcyhsYW5nKSk7XG5cdGNvbnN0IHByb2Nlc3MgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKGxhbmdxdWV1ZS5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbGFuZzogc3RyaW5nIHwgdW5kZWZpbmVkID0gbGFuZ3F1ZXVlLnNoaWZ0KCk7XG5cdFx0Y29uc3QgJGRpZmZUYWJsZTogSlF1ZXJ5ID0gJCgoPGRpdiBpZD17YFRyYW5zbGF0ZVZhcmlhbnRzLWRpZmYtJHtsYW5nfWB9PjwvZGl2PikgYXMgSFRNTEVsZW1lbnQpO1xuXHRcdCR0YWJsZS5hcHBlbmQoJGRpZmZUYWJsZSwgJCg8aHIgLz4pKTtcblx0XHRjb25zdCBiYXNlbmFtZTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLnJlcGxhY2UoL1xcL3poJC8sICcnKTtcblx0XHRjb25zdCB0YXJnZXRUaXRsZTogc3RyaW5nID0gbGFuZyA9PT0gJ3poJyA/IGJhc2VuYW1lIDogYCR7YmFzZW5hbWV9LyR7bGFuZ31gO1xuXHRcdGxldCBuZXd0ZXh0OiBzdHJpbmc7XG5cdFx0aWYgKCFsYW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZvaWQgYXBpXG5cdFx0XHQucGFyc2UoYHt7Tm90ZVRBfEcxPUlUfEcyPU1lZGlhV2lraX19PGRpdiBpZD1cIlRWY29udGVudFwiPiR7YmFzZXBhZ2V0ZXh0fTwvZGl2PmAsIHtcblx0XHRcdFx0dXNlbGFuZzogbGFuZyxcblx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKFxuXHRcdFx0XHQoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdG5ld3RleHQgPSAkKDxkaXY+e2RhdGF9PC9kaXY+KVxuXHRcdFx0XHRcdFx0LmZpbmQoJyNUVmNvbnRlbnQnKVxuXHRcdFx0XHRcdFx0LnRleHQoKTtcblx0XHRcdFx0XHRjb25zdCBfcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRcdFx0dGl0bGVzOiBbdGFyZ2V0VGl0bGVdLFxuXHRcdFx0XHRcdFx0cnZkaWZmdG90ZXh0OiBuZXd0ZXh0LFxuXHRcdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmV0dXJuIGFwaS5wb3N0KF9wYXJhbXMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShg6Kej5p6QJHtsYW5nfSR7d2luZG93LndnVUxTKCfml7blj5HnlJ/plJnor6/vvJonLCAn5pmC55m855Sf6Yyv6Kqk77yaJyl9JHtlcnJvcn1gLCB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudCcsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdC50aGVuKFxuXHRcdFx0XHQoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdGlmIChkYXRhICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjb25zdCAkdG9vbDogSlF1ZXJ5ID0gJChcblx0XHRcdFx0XHRcdFx0YDxkaXY+PGEgaHJlZj1cIiR7bXcudXRpbC5nZXRVcmwodGFyZ2V0VGl0bGUpfVwiPiR7bGFuZ33vvIgke1xuXHRcdFx0XHRcdFx0XHRcdGxhbmduYW1lW2xhbmcgYXMgbmV2ZXJdXG5cdFx0XHRcdFx0XHRcdH3vvIk8L2E+77yIPGEgaHJlZj1cIiR7bXcudXRpbC5nZXRVcmwodGFyZ2V0VGl0bGUsIHtcblx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHRcdFx0fSl9XCI+JHt3aW5kb3cud2dVTFMoJ+e8licsICfnt6gnKX08L2E+77yJPC9kaXY+YFxuXHRcdFx0XHRcdFx0KS5hcHBlbmRUbygkZGlmZlRhYmxlKTtcblx0XHRcdFx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGFbJ3F1ZXJ5J10ucGFnZXM7XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRzdWJtaXQ6IEpRdWVyeSA9ICQoXG5cdFx0XHRcdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1snVHJhbnNsYXRlVmFyaWFudHMtcHVibGlzaC1jaGFuZ2VzJ119XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt3aW5kb3cud2dVTFMoJ+WPkeW4g+mhtemdoicsICfnmbzkvYjpoIHpnaInKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdCkgYXMgSFRNTEVsZW1lbnRcblx0XHRcdFx0XHRcdFx0KS5hcHBlbmRUbygkdG9vbCk7XG5cdFx0XHRcdFx0XHRcdCRzdWJtaXQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0YXBpLmNyZWF0ZShcblx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldFRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdW1tYXJ5OiBUUkFOU0xBVEVfVkFSSUFOVFNfU1VNTUFSWS5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC9cXCQxL2csXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0bmV3dGV4dFxuXHRcdFx0XHRcdFx0XHRcdCkudGhlbihcblx0XHRcdFx0XHRcdFx0XHRcdCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkod2luZG93LndnVUxTKCflt7LnvJbovpEgJywgJ+W3sue3qOi8ryAnKSArIHRhcmdldFRpdGxlLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHQoZXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvICcpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldFRpdGxlICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygnIOWPkeeUn+mUmeivr++8micsICcg55m855Sf6Yyv6Kqk77yaJykgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3IsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0JChcblx0XHRcdFx0XHRcdFx0XHQ8cHJlPlxuXHRcdFx0XHRcdFx0XHRcdFx0e25ld3RleHQucmVwbGFjZSgvWyY8Pl0vZ2ltLCAoczogc3RyaW5nKTogc3RyaW5nID0+IGAmIyR7cy5jb2RlUG9pbnRBdCgwKX07YCl9XG5cdFx0XHRcdFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0XHRcdCkuYXBwZW5kVG8oJGRpZmZUYWJsZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnN0IGRpZmY6IHN0cmluZyA9IHBhZ2UucmV2aXNpb25zWzBdLmRpZmYuYm9keTtcblx0XHRcdFx0XHRcdGlmIChkaWZmID09PSAnJykge1xuXHRcdFx0XHRcdFx0XHQkKFxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e3dpbmRvdy53Z1VMUygn5peg5pu05pS5JywgJ+eEoeiuiuabtCcpfVxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KS5hcHBlbmRUbygkdG9vbCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb25zdCAkc3VibWl0ID0gJChcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJUcmFuc2xhdGVWYXJpYW50cy1wdWJsaXNoLWNoYW5nZXNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHt3aW5kb3cud2dVTFMoJ+WPkeW4g+abtOaUuScsICfnmbzkvYjorormm7QnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0KS5hcHBlbmRUbygkdG9vbCk7XG5cdFx0XHRcdFx0XHRcdCRzdWJtaXQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0YXBpLmVkaXQoXG5cdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXRUaXRsZSxcblx0XHRcdFx0XHRcdFx0XHRcdCgpOiBBcGlFZGl0UGFnZVBhcmFtcyA9PiAoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBuZXd0ZXh0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdW1tYXJ5OiBUUkFOU0xBVEVfVkFSSUFOVFNfU1VNTUFSWS5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC9cXCQxL2csXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vY3JlYXRlOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0KS50aGVuKFxuXHRcdFx0XHRcdFx0XHRcdFx0KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeSh3aW5kb3cud2dVTFMoJ+W3sue8lui+kScsICflt7Lnt6jovK8gJykgKyB0YXJnZXRUaXRsZSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0KGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn57yW6L6RJywgJ+e3qOi8ryAnKSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXRUaXRsZSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJyDlj5HnlJ/plJnor6/vvJonLCAnIOeZvOeUn+mMr+iqpO+8micpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdCQoXG5cdFx0XHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT1cImRpZmZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxjb2xncm91cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGNvbCBjbGFzc05hbWU9XCJkaWZmLW1hcmtlclwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1jb250ZW50XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGNvbCBjbGFzc05hbWU9XCJkaWZmLW1hcmtlclwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1jb250ZW50XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvY29sZ3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHR7ZGlmZn1cblx0XHRcdFx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHRcdFx0XHQpLmFwcGVuZFRvKCRkaWZmVGFibGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0KGVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPlicsICflj5blvpcnKSArXG5cdFx0XHRcdFx0XHRcdGxhbmcgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+W3ruW8guaXtuWPkeeUn+mUmeivr++8micsICflt67nlbDmmYLnmbznlJ/pjK/oqqTvvJonKSArXG5cdFx0XHRcdFx0XHRcdGVycm9yLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50Jyxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0cHJvY2VzcygpO1xuXHRcdFx0fSk7XG5cdH07XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHR0aXRsZXM6IFttdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyldLFxuXHRcdGN1cnRpbWVzdGFtcDogdHJ1ZSxcblx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnXSxcblx0fTtcblx0dm9pZCBhcGlcblx0XHQuZ2V0KHBhcmFtcylcblx0XHQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0aWYgKCFkYXRhWydxdWVyeSddIHx8ICFkYXRhWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCd1bmtub3duJyk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhWydxdWVyeSddLnBhZ2VzO1xuXHRcdFx0aWYgKCFwYWdlIHx8IHBhZ2UuaW52YWxpZCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnaW52YWxpZHRpdGxlJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdub2NyZWF0ZS1taXNzaW5nJyk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbcmV2aXNpb25dID0gcGFnZS5yZXZpc2lvbnM7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjb250ZW50OiByZXZpc2lvbi5jb250ZW50LFxuXHRcdFx0fTtcblx0XHR9KVxuXHRcdC50aGVuKCh7Y29udGVudH0pOiB2b2lkID0+IHtcblx0XHRcdGxldCB0ZXh0OiBzdHJpbmcgPSBjb250ZW50O1xuXHRcdFx0cmVzdWx0Wyd6aCddID0gdGV4dDtcblx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoL1tcXHMjJicqOjw+W1xcXV97fH1dL2dpbSwgKHN0cmluZzogc3RyaW5nKSA9PiBgJiMke3N0cmluZy5jb2RlUG9pbnRBdCgwKX07YCk7XG5cdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKFxuXHRcdFx0XHQvKCYjOTE7JiM5MTspKCg/Oig/ISYjMTI0OykoPyEmIzkzOykuKSs/KSgmIzEyNDsoPzooPyEmIzkzOykuKSs/JiM5MzsmIzkzOykvZyxcblx0XHRcdFx0JyQxLXskMn0tJDMnXG5cdFx0XHQpO1xuXHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvLSYjMTIzOyguKz8pJiMxMjU7LS9nLCAoc3RyaW5nOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0c3RyaW5nID0gc3RyaW5nXG5cdFx0XHRcdFx0LnJlcGxhY2UoJy0mIzEyMzsnLCAnLXsnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCctJiMxMjM7JywgJy17Jylcblx0XHRcdFx0XHQucmVwbGFjZSgnJiMxMjU7LScsICd9LScpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjMTI0Oy9nLCAnfCcpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjMzI7L2csICcgJylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiM2MTsvZywgJz0nKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzYyOy9nLCAnPicpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjNTg7L2csICc6Jyk7XG5cdFx0XHRcdHJldHVybiBzdHJpbmc7XG5cdFx0XHR9KTtcblx0XHRcdGJhc2VwYWdldGV4dCA9IHRleHQ7XG5cdFx0XHRwcm9jZXNzKCk7XG5cdFx0fSk7XG59O1xuIiwgImV4cG9ydCBjb25zdCBUUkFOU0xBVEVfVkFSSUFOVFNfU1VNTUFSWTogc3RyaW5nID1cblx0J+iHquWKqOi9rOaNouWPmOS9k+iHqltbJDFdXe+8iFtbTWVkaWFXaWtpOkdhZGdldC1UcmFuc2xhdGVWYXJpYW50cy5qc3xUcmFuc2xhdGVWYXJpYW50c11d77yJJztcbiIsICJpbXBvcnQge3RyYW5zbGF0ZVZhcmlhbnRzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmICgvXk1lZGlhV2lraTpbXi9dKyhcXC96aCk/JC8udGVzdChtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykpKSB7XG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgbGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCB3aW5kb3cud2dVTFMoJ+i9rOaNouWPmOS9kycsICfovYnmj5vororpq5QnKSk7XG5cdGlmIChsaW5rKSB7XG5cdFx0JChsaW5rKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLnJlbW92ZSgpO1xuXHRcdFx0dHJhbnNsYXRlVmFyaWFudHMoKTtcblx0XHR9KTtcblx0fVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQVgsSUFBTUMsNkJBQ1o7O0FEQ0QsSUFBQUMscUJBQXdCRixRQUFBLGlCQUFBO0FBRWpCLElBQU1HLG9CQUFvQkEsTUFBWTtBQUM1QyxRQUFNQyxRQUFxQixvQkFBSUMsSUFBSSxDQUNsQyxNQUNBLFdBQ0EsU0FDQSxTQUNBLFNBQ0EsV0FDQSxTQUNBLFNBQ0EsT0FBQSxDQUNBO0FBQ0QsUUFBTUMsV0FBbUM7SUFDeENDLElBQUk7SUFDSixXQUFXO0lBQ1gsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsV0FBVztJQUNYLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztFQUNWO0FBQ0EsUUFBTUMsU0FBaUMsQ0FBQztBQUN4QyxRQUFNQyxPQUFBLEdBQWNQLG1CQUFBUSxXQUFBLHNDQUFBQyxPQUFnREMsR0FBR0MsT0FBT0MsSUFBSSxVQUFVLEdBQUMsR0FBQSxDQUFHO0FBQ2hHLE1BQUlDLGVBQXVCO0FBQzNCLFFBQU1DLFNBQWlCQyxFQUFHbkIsa0NBQUFvQixRQUFBQyxjQUFDLE9BQUE7SUFBSUMsSUFBRztFQUFB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QjtBQUMvREEsZUFBU0EsT0FDUDlDLFFBQVEsV0FBVyxJQUFJLEVBQ3ZCQSxRQUFRLFdBQVcsSUFBSSxFQUN2QkEsUUFBUSxXQUFXLElBQUksRUFDdkJBLFFBQVEsV0FBVyxHQUFHLEVBQ3RCQSxRQUFRLFVBQVUsR0FBRyxFQUNyQkEsUUFBUSxVQUFVLEdBQUcsRUFDckJBLFFBQVEsVUFBVSxHQUFHLEVBQ3JCQSxRQUFRLFVBQVUsR0FBRztBQUN2QixhQUFPOEM7SUFDUixDQUFDO0FBQ0R2RixtQkFBZWlEO0FBQ2ZaLFlBQVE7RUFDVCxDQUFDO0FBQ0g7O0FFbFVBLElBQUksMkJBQTJCbUQsS0FBSzNGLEdBQUdDLE9BQU9DLElBQUksWUFBWSxDQUFDLEdBQUc7QUFDakUsUUFBTTBGLFlBQW1DQyxTQUFTQyxjQUFjLGFBQWEsSUFBSSxlQUFlO0FBQ2hHLFFBQU1DLE9BQTZCL0YsR0FBRzZELEtBQUttQyxlQUFlSixXQUFXLEtBQUtqRixPQUFPQyxNQUFNLFFBQVEsTUFBTSxDQUFDO0FBQ3RHLE1BQUltRixNQUFNO0FBQ1QxRixNQUFFMEYsSUFBSSxFQUFFbEYsR0FBRyxTQUFTLFdBQVk7QUFDL0IsV0FBS3lELE9BQU87QUFDWi9FLHdCQUFrQjtJQUNuQixDQUFDO0VBQ0Y7QUFDRDsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgIlRSQU5TTEFURV9WQVJJQU5UU19TVU1NQVJZIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJ0cmFuc2xhdGVWYXJpYW50cyIsICJsYW5ncyIsICJTZXQiLCAibGFuZ25hbWUiLCAiemgiLCAicmVzdWx0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiYmFzZXBhZ2V0ZXh0IiwgIiR0YWJsZSIsICIkIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJwcmVwZW5kVG8iLCAiJHN1Ym1pdEFsbCIsICJ3aW5kb3ciLCAid2dVTFMiLCAib24iLCAiJGJvZHkiLCAiJGJ1dHRvbnMiLCAiZmluZCIsICJsZW5ndGgiLCAibm90aWZ5IiwgInRhZyIsICJ0eXBlIiwgImNvbmZpcm0iLCAiZWFjaCIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJ0cmlnZ2VyIiwgImFwcGVuZCIsICJzdHlsZSIsICJ0ZXh0QWxpZ24iLCAiY29sb3IiLCAiZGVmYXVsdGxhbmdzIiwgInJ1bmxhbmdzIiwgInByb21wdCIsICJsYW5ncXVldWUiLCAic3BsaXQiLCAibWFwIiwgImxhbmciLCAidHJpbSIsICJmaWx0ZXIiLCAiaGFzIiwgInByb2Nlc3MiLCAic2hpZnQiLCAiJGRpZmZUYWJsZSIsICJiYXNlbmFtZSIsICJyZXBsYWNlIiwgInRhcmdldFRpdGxlIiwgIm5ld3RleHQiLCAicGFyc2UiLCAidXNlbGFuZyIsICJwcm9wIiwgInRoZW4iLCAiZGF0YSIsICJ0ZXh0IiwgIl9wYXJhbXMiLCAiYWN0aW9uIiwgInRpdGxlcyIsICJydmRpZmZ0b3RleHQiLCAiZm9ybWF0dmVyc2lvbiIsICJwb3N0IiwgImVycm9yIiwgIiR0b29sIiwgInV0aWwiLCAiZ2V0VXJsIiwgImFwcGVuZFRvIiwgInBhZ2UiLCAicGFnZXMiLCAibWlzc2luZyIsICIkc3VibWl0IiwgImNsYXNzTmFtZSIsICJmbG9hdCIsICJyZW1vdmUiLCAiY3JlYXRlIiwgInN1bW1hcnkiLCAicyIsICJjb2RlUG9pbnRBdCIsICJkaWZmIiwgInJldmlzaW9ucyIsICJib2R5IiwgImVkaXQiLCAibm9jcmVhdGUiLCAiYWx3YXlzIiwgInBhcmFtcyIsICJmb3JtYXQiLCAiY3VydGltZXN0YW1wIiwgInJ2cHJvcCIsICJEZWZlcnJlZCIsICJyZWplY3QiLCAiaW52YWxpZCIsICJyZXZpc2lvbiIsICJjb250ZW50IiwgInN0cmluZyIsICJ0ZXN0IiwgInBvcnRsZXRJZCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImxpbmsiLCAiYWRkUG9ydGxldExpbmsiXQp9Cg==

})();

/* </nowiki> */
