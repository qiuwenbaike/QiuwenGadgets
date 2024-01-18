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
  const api = (0, import_ext_gadget2.initMwApi)("TranslateVariants/1.1");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvY29yZS50c3giLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge1RSQU5TTEFURV9WQVJJQU5UU19TVU1NQVJZfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5leHBvcnQgY29uc3QgdHJhbnNsYXRlVmFyaWFudHMgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IGxhbmdzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoW1xuXHRcdCd6aCcsXG5cdFx0J3poLWhhbnMnLFxuXHRcdCd6aC1jbicsXG5cdFx0J3poLW15Jyxcblx0XHQnemgtc2cnLFxuXHRcdCd6aC1oYW50Jyxcblx0XHQnemgtaGsnLFxuXHRcdCd6aC1tbycsXG5cdFx0J3poLXR3Jyxcblx0XSk7XG5cdGNvbnN0IGxhbmduYW1lOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuXHRcdHpoOiAn5Y6f5aeLJyxcblx0XHQnemgtaGFucyc6ICfnroDkvZMnLFxuXHRcdCd6aC1jbic6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdCd6aC1teSc6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdCd6aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdCd6aC1oYW50JzogJ+e5gemrlCcsXG5cdFx0J3poLWhrJzogJ+S4reWci+mmmea4r+e5gemrlCcsXG5cdFx0J3poLW1vJzogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdFx0J3poLXR3JzogJ+S4reWci+iHuueBo+e5gemrlCcsXG5cdH07XG5cdGNvbnN0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVHJhbnNsYXRlVmFyaWFudHMvMS4xJyk7XG5cdGxldCBiYXNlcGFnZXRleHQ6IHN0cmluZyA9ICcnO1xuXHRjb25zdCAkdGFibGU6IEpRdWVyeSA9ICQoKDxkaXYgaWQ9XCJUcmFuc2xhdGVWYXJpYW50c1wiIC8+KSBhcyBIVE1MRWxlbWVudCkucHJlcGVuZFRvKCcjYm9keUNvbnRlbnQnKTtcblx0Y29uc3QgJHN1Ym1pdEFsbDogSlF1ZXJ5ID0gJCgoPGJ1dHRvbj57d2luZG93LndnVUxTKCflj5HluIPmiYDmnInmm7TmlLknLCAn55m85L2I5omA5pyJ6K6K5pu0Jyl9PC9idXR0b24+KSBhcyBIVE1MRWxlbWVudCk7XG5cdCRzdWJtaXRBbGwub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0XHRjb25zdCAkYnV0dG9uczogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLlRyYW5zbGF0ZVZhcmlhbnRzLXB1Ymxpc2gtY2hhbmdlcycpO1xuXHRcdGlmICgkYnV0dG9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KHdpbmRvdy53Z1VMUygn5rKh5pyJ5Lu75L2V5Y+v5Lul5Y+R5biD55qE5pu05pS5JywgJ+aykuacieS7u+S9leiuiuabtOWPr+eZvOS9iCcpLCB7XG5cdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnRzJyxcblx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIWNvbmZpcm0oYCR7d2luZG93LndnVUxTKCfmm7TmlLknLCAn55m85L2IJyl9JHskYnV0dG9ucy5sZW5ndGh9JHt3aW5kb3cud2dVTFMoJ+S4quabtOaUuScsICflgIvorormm7QnKX3vvJ9gKSkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkod2luZG93LndnVUxTKCflt7Llj5bmtojmm7TmlLknLCAn5bey5Y+W5raI55m85L2IJyksIHt0YWc6ICdUcmFuc2xhdGVWYXJpYW50cycsIHR5cGU6ICd3YXJuJ30pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQkYnV0dG9ucy5lYWNoKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdCQoZWxlbWVudCkudHJpZ2dlcignY2xpY2snKTtcblx0XHR9KTtcblx0fSk7XG5cdCR0YWJsZS5hcHBlbmQoXG5cdFx0JChcblx0XHRcdDxkaXZcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHR0ZXh0QWxpZ246ICdyaWdodCcsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdCkuYXBwZW5kKCRzdWJtaXRBbGwpXG5cdCk7XG5cdCQoXG5cdFx0PGRpdlxuXHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0Y29sb3I6ICcjZjAwJyxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0e3dpbmRvdy53Z1VMUyhcblx0XHRcdFx0J+aPkOmGku+8mlRyYW5zbGF0ZVZhcmlhbnRz5bel5YW35L2/55SoSVTlj4pNZWRpYVdpa2novazmjaLnu4Tov5vooYzoh6rliqjovazmjaLvvIzor7fnoa7orqTovazmjaLnu5PmnpzmmK/lkKbmraPnoa7vvIEnLFxuXHRcdFx0XHQn5o+Q6YaS77yaVHJhbnNsYXRlVmFyaWFudHPlt6Xlhbfkvb/nlKhJVOWPik1lZGlhV2lraei9ieaPm+e1hOmAsuihjOiHquWLlei9ieaPm++8jOiri+eiuuiqjei9ieaPm+e1kOaenOaYr+WQpuato+eiuu+8gSdcblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCkuYXBwZW5kVG8oJHRhYmxlKTtcblx0Y29uc3QgZGVmYXVsdGxhbmdzOiBzdHJpbmcgPSAnemgsemgtaGFucyx6aC1jbix6aC1teSx6aC1zZyx6aC1oYW50LHpoLWhrLHpoLW1vLHpoLXR3Jztcblx0bGV0IHJ1bmxhbmdzOiBzdHJpbmcgfCBudWxsID0gcHJvbXB0KFxuXHRcdHdpbmRvdy53Z1VMUygn6L2s5o2i5Lul5LiL6K+t6KiA77yI5Lul6YCX5Y+36ZqU5byA77yJ77yaJywgJ+i9ieaPm+S7peS4i+iqnuiogO+8iOS7pemAl+iZn+malOmWi++8ie+8micpLFxuXHRcdGRlZmF1bHRsYW5nc1xuXHQpO1xuXHRpZiAocnVubGFuZ3MgPT09IG51bGwpIHtcblx0XHRydW5sYW5ncyA9IGRlZmF1bHRsYW5ncztcblx0fVxuXHRjb25zdCBsYW5ncXVldWU6IHN0cmluZ1tdID0gcnVubGFuZ3Ncblx0XHQuc3BsaXQoJywnKVxuXHRcdC5tYXAoKGxhbmc6IHN0cmluZyk6IHN0cmluZyA9PiBsYW5nLnRyaW0oKSlcblx0XHQuZmlsdGVyKChsYW5nOiBzdHJpbmcpOiBib29sZWFuID0+IGxhbmdzLmhhcyhsYW5nKSk7XG5cdGNvbnN0IHByb2Nlc3MgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKGxhbmdxdWV1ZS5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbGFuZzogc3RyaW5nIHwgdW5kZWZpbmVkID0gbGFuZ3F1ZXVlLnNoaWZ0KCk7XG5cdFx0Y29uc3QgJGRpZmZUYWJsZTogSlF1ZXJ5ID0gJCgoPGRpdiBpZD17YFRyYW5zbGF0ZVZhcmlhbnRzLWRpZmYtJHtsYW5nfWB9IC8+KSBhcyBIVE1MRWxlbWVudCkuYXBwZW5kVG8oJHRhYmxlKTtcblx0XHQkKDxociAvPikuYXBwZW5kVG8oJHRhYmxlKTtcblx0XHRjb25zdCBiYXNlbmFtZTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLnJlcGxhY2UoL1xcL3poJC8sICcnKTtcblx0XHRjb25zdCB0YXJnZXRUaXRsZTogc3RyaW5nID0gbGFuZyA9PT0gJ3poJyA/IGJhc2VuYW1lIDogYCR7YmFzZW5hbWV9LyR7bGFuZ31gO1xuXHRcdGxldCBuZXd0ZXh0OiBzdHJpbmc7XG5cdFx0aWYgKCFsYW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZvaWQgYXBpXG5cdFx0XHQucGFyc2UoYHt7Tm90ZVRBfEcxPUlUfEcyPU1lZGlhV2lraX19PGRpdiBpZD1cIlRWY29udGVudFwiPiR7YmFzZXBhZ2V0ZXh0fTwvZGl2PmAsIHtcblx0XHRcdFx0dXNlbGFuZzogbGFuZyxcblx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKFxuXHRcdFx0XHQoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdG5ld3RleHQgPSAkKCc8ZGl2PicpLmh0bWwoZGF0YSkuZmluZCgnI1RWY29udGVudCcpLnRleHQoKTtcblx0XHRcdFx0XHRjb25zdCBfcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRcdFx0dGl0bGVzOiBbdGFyZ2V0VGl0bGVdLFxuXHRcdFx0XHRcdFx0cnZkaWZmdG90ZXh0OiBuZXd0ZXh0LFxuXHRcdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmV0dXJuIGFwaS5wb3N0KF9wYXJhbXMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShg6Kej5p6QJHtsYW5nfSR7d2luZG93LndnVUxTKCfml7blj5HnlJ/plJnor6/vvJonLCAn5pmC55m855Sf6Yyv6Kqk77yaJyl9JHtlcnJvcn1gLCB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudCcsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdC50aGVuKFxuXHRcdFx0XHQoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdGlmIChkYXRhICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjb25zdCAkdG9vbDogSlF1ZXJ5ID0gJChcblx0XHRcdFx0XHRcdFx0YDxkaXY+PGEgaHJlZj1cIiR7bXcudXRpbC5nZXRVcmwodGFyZ2V0VGl0bGUpfVwiPiR7bGFuZ33vvIgke1xuXHRcdFx0XHRcdFx0XHRcdGxhbmduYW1lW2xhbmcgYXMgbmV2ZXJdXG5cdFx0XHRcdFx0XHRcdH3vvIk8L2E+77yIPGEgaHJlZj1cIiR7bXcudXRpbC5nZXRVcmwodGFyZ2V0VGl0bGUsIHtcblx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHRcdFx0fSl9XCI+JHt3aW5kb3cud2dVTFMoJ+e8licsICfnt6gnKX08L2E+77yJPC9kaXY+YFxuXHRcdFx0XHRcdFx0KS5hcHBlbmRUbygkZGlmZlRhYmxlKTtcblx0XHRcdFx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGFbJ3F1ZXJ5J10ucGFnZXM7XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRzdWJtaXQ6IEpRdWVyeSA9ICQoXG5cdFx0XHRcdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1snVHJhbnNsYXRlVmFyaWFudHMtcHVibGlzaC1jaGFuZ2VzJ119XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt3aW5kb3cud2dVTFMoJ+WPkeW4g+mhtemdoicsICfnmbzkvYjpoIHpnaInKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdCkgYXMgSFRNTEVsZW1lbnRcblx0XHRcdFx0XHRcdFx0KS5hcHBlbmRUbygkdG9vbCk7XG5cdFx0XHRcdFx0XHRcdCRzdWJtaXQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0YXBpLmNyZWF0ZShcblx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldFRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdW1tYXJ5OiBUUkFOU0xBVEVfVkFSSUFOVFNfU1VNTUFSWS5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC9cXCQxL2csXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0bmV3dGV4dFxuXHRcdFx0XHRcdFx0XHRcdCkudGhlbihcblx0XHRcdFx0XHRcdFx0XHRcdCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkod2luZG93LndnVUxTKCflt7LnvJbovpEgJywgJ+W3sue3qOi8ryAnKSArIHRhcmdldFRpdGxlLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHQoZXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvICcpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldFRpdGxlICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygnIOWPkeeUn+mUmeivr++8micsICcg55m855Sf6Yyv6Kqk77yaJykgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3IsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0JCgnPHByZT4nKVxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKG5ld3RleHQucmVwbGFjZSgvWyY8Pl0vZ2ltLCAoczogc3RyaW5nKTogc3RyaW5nID0+IGAmIyR7cy5jb2RlUG9pbnRBdCgwKX07YCkpXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZFRvKCRkaWZmVGFibGUpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zdCBkaWZmOiBzdHJpbmcgPSBwYWdlLnJldmlzaW9uc1swXS5kaWZmLmJvZHk7XG5cdFx0XHRcdFx0XHRpZiAoZGlmZiA9PT0gJycpIHtcblx0XHRcdFx0XHRcdFx0JChcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHt3aW5kb3cud2dVTFMoJ+aXoOabtOaUuScsICfnhKHorormm7QnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCkuYXBwZW5kVG8oJHRvb2wpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgJHN1Ym1pdDogSlF1ZXJ5ID0gJChcblx0XHRcdFx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIlRyYW5zbGF0ZVZhcmlhbnRzLXB1Ymxpc2gtY2hhbmdlc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt3aW5kb3cud2dVTFMoJ+WPkeW4g+abtOaUuScsICfnmbzkvYjorormm7QnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdCkgYXMgSFRNTEVsZW1lbnRcblx0XHRcdFx0XHRcdFx0KS5hcHBlbmRUbygkdG9vbCk7XG5cdFx0XHRcdFx0XHRcdCRzdWJtaXQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0YXBpLmVkaXQoXG5cdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXRUaXRsZSxcblx0XHRcdFx0XHRcdFx0XHRcdCgpOiBBcGlFZGl0UGFnZVBhcmFtcyA9PiAoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBuZXd0ZXh0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdW1tYXJ5OiBUUkFOU0xBVEVfVkFSSUFOVFNfU1VNTUFSWS5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC9cXCQxL2csXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vY3JlYXRlOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0KS50aGVuKFxuXHRcdFx0XHRcdFx0XHRcdFx0KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeSh3aW5kb3cud2dVTFMoJ+W3sue8lui+kScsICflt7Lnt6jovK8gJykgKyB0YXJnZXRUaXRsZSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0KGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn57yW6L6RJywgJ+e3qOi8ryAnKSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXRUaXRsZSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJyDlj5HnlJ/plJnor6/vvJonLCAnIOeZvOeUn+mMr+iqpO+8micpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdCQoJzx0YWJsZT4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnZGlmZicpXG5cdFx0XHRcdFx0XHRcdFx0Lmh0bWwoZGlmZilcblx0XHRcdFx0XHRcdFx0XHQucHJlcGVuZChcblx0XHRcdFx0XHRcdFx0XHRcdDxjb2xncm91cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGNvbCBjbGFzc05hbWU9XCJkaWZmLW1hcmtlclwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1jb250ZW50XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGNvbCBjbGFzc05hbWU9XCJkaWZmLW1hcmtlclwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1jb250ZW50XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvY29sZ3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmRUbygkZGlmZlRhYmxlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChlcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5YnLCAn5Y+W5b6XJykgK1xuXHRcdFx0XHRcdFx0XHRsYW5nICtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCflt67lvILml7blj5HnlJ/plJnor6/vvJonLCAn5beu55Ww5pmC55m855Sf6Yyv6Kqk77yaJykgK1xuXHRcdFx0XHRcdFx0XHRlcnJvcixcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudCcsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdFx0LmFsd2F5cygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHByb2Nlc3MoKTtcblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0dGl0bGVzOiBbbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpXSxcblx0XHRjdXJ0aW1lc3RhbXA6IHRydWUsXG5cdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJ10sXG5cdH07XG5cdHZvaWQgYXBpXG5cdFx0LmdldChwYXJhbXMpXG5cdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdGlmICghZGF0YVsncXVlcnknXSB8fCAhZGF0YVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgndW5rbm93bicpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgW3BhZ2VdID0gZGF0YVsncXVlcnknXS5wYWdlcztcblx0XHRcdGlmICghcGFnZSB8fCBwYWdlLmludmFsaWQpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ2ludmFsaWR0aXRsZScpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnbm9jcmVhdGUtbWlzc2luZycpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgW3JldmlzaW9uXSA9IHBhZ2UucmV2aXNpb25zO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y29udGVudDogcmV2aXNpb24uY29udGVudCxcblx0XHRcdH07XG5cdFx0fSlcblx0XHQudGhlbigoe2NvbnRlbnR9KTogdm9pZCA9PiB7XG5cdFx0XHRsZXQgdGV4dDogc3RyaW5nID0gY29udGVudDtcblx0XHRcdHJlc3VsdFsnemgnXSA9IHRleHQ7XG5cdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC9bXFxzIyYnKjo8PltcXF1fe3x9XS9naW0sIChzdHJpbmc6IHN0cmluZykgPT4gYCYjJHtzdHJpbmcuY29kZVBvaW50QXQoMCl9O2ApO1xuXHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShcblx0XHRcdFx0LygmIzkxOyYjOTE7KSgoPzooPyEmIzEyNDspKD8hJiM5MzspLikrPykoJiMxMjQ7KD86KD8hJiM5MzspLikrPyYjOTM7JiM5MzspL2csXG5cdFx0XHRcdCckMS17JDJ9LSQzJ1xuXHRcdFx0KTtcblx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoLy0mIzEyMzsoLis/KSYjMTI1Oy0vZywgKHN0cmluZzogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHN0cmluZyA9IHN0cmluZ1xuXHRcdFx0XHRcdC5yZXBsYWNlKCctJiMxMjM7JywgJy17Jylcblx0XHRcdFx0XHQucmVwbGFjZSgnLSYjMTIzOycsICcteycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJyYjMTI1Oy0nLCAnfS0nKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzEyNDsvZywgJ3wnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzMyOy9nLCAnICcpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjNjE7L2csICc9Jylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiM2MjsvZywgJz4nKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzU4Oy9nLCAnOicpO1xuXHRcdFx0XHRyZXR1cm4gc3RyaW5nO1xuXHRcdFx0fSk7XG5cdFx0XHRiYXNlcGFnZXRleHQgPSB0ZXh0O1xuXHRcdFx0cHJvY2VzcygpO1xuXHRcdH0pO1xufTtcbiIsICJjb25zdCBUUkFOU0xBVEVfVkFSSUFOVFNfU1VNTUFSWTogc3RyaW5nID1cblx0J+iHquWKqOi9rOaNouWPmOS9k+iHqltbJDFdXe+8iFtbTWVkaWFXaWtpOkdhZGdldC1UcmFuc2xhdGVWYXJpYW50cy5qc3xUcmFuc2xhdGVWYXJpYW50c11d77yJJztcblxuZXhwb3J0IHtUUkFOU0xBVEVfVkFSSUFOVFNfU1VNTUFSWX07XG4iLCAiaW1wb3J0IHt0cmFuc2xhdGVWYXJpYW50c30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5pZiAoL15NZWRpYVdpa2k6W14vXSsoXFwvemgpPyQvLnRlc3QobXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpKSkge1xuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGxpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgd2luZG93LndnVUxTKCfovazmjaLlj5jkvZMnLCAn6L2J5o+b6K6K6auUJykpO1xuXHRpZiAobGluaykge1xuXHRcdCQobGluaykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5yZW1vdmUoKTtcblx0XHRcdHRyYW5zbGF0ZVZhcmlhbnRzKCk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0FsQixJQUFNQyw2QkFDTDs7QURDRCxJQUFBQyxxQkFBd0JGLFFBQUEsaUJBQUE7QUFFakIsSUFBTUcsb0JBQW9CQSxNQUFZO0FBQzVDLFFBQU1DLFFBQXFCLG9CQUFJQyxJQUFJLENBQ2xDLE1BQ0EsV0FDQSxTQUNBLFNBQ0EsU0FDQSxXQUNBLFNBQ0EsU0FDQSxPQUFBLENBQ0E7QUFDRCxRQUFNQyxXQUFtQztJQUN4Q0MsSUFBSTtJQUNKLFdBQVc7SUFDWCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxXQUFXO0lBQ1gsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0VBQ1Y7QUFDQSxRQUFNQyxTQUFpQyxDQUFDO0FBQ3hDLFFBQU1DLE9BQUEsR0FBY1AsbUJBQUFRLFdBQVUsdUJBQXVCO0FBQ3JELE1BQUlDLGVBQXVCO0FBQzNCLFFBQU1DLFNBQWlCQyxFQUFHZixrQ0FBQWdCLFFBQUFDLGNBQUMsT0FBQTtJQUFJQyxJQUFHO0VBQUEsQ0FBb0IsQ0FBa0IsRUFBRUMsVUFBVSxjQUFjO0FBQ2xH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VyxJQUFJLEVBQ3ZCQSxRQUFRLFdBQVcsSUFBSSxFQUN2QkEsUUFBUSxXQUFXLEdBQUcsRUFDdEJBLFFBQVEsVUFBVSxHQUFHLEVBQ3JCQSxRQUFRLFVBQVUsR0FBRyxFQUNyQkEsUUFBUSxVQUFVLEdBQUcsRUFDckJBLFFBQVEsVUFBVSxHQUFHO0FBQ3ZCLGFBQU9nRDtJQUNSLENBQUM7QUFDRDlGLG1CQUFldUQ7QUFDZmYsWUFBUTtFQUNULENBQUM7QUFDSDs7QUUvVEEsSUFBSSwyQkFBMkJ1RCxLQUFLaEYsR0FBRzZCLE9BQU9DLElBQUksWUFBWSxDQUFDLEdBQUc7QUFDakUsUUFBTW1ELFlBQW1DQyxTQUFTQyxjQUFjLGFBQWEsSUFBSSxlQUFlO0FBQ2hHLFFBQU1DLE9BQTZCcEYsR0FBR2lELEtBQUtvQyxlQUFlSixXQUFXLEtBQUt4RixPQUFPQyxNQUFNLFFBQVEsTUFBTSxDQUFDO0FBQ3RHLE1BQUkwRixNQUFNO0FBQ1RqRyxNQUFFaUcsSUFBSSxFQUFFekYsR0FBRyxTQUFTLFdBQVk7QUFDL0IsV0FBSzhELE9BQU87QUFDWmhGLHdCQUFrQjtJQUNuQixDQUFDO0VBQ0Y7QUFDRDsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgIlRSQU5TTEFURV9WQVJJQU5UU19TVU1NQVJZIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJ0cmFuc2xhdGVWYXJpYW50cyIsICJsYW5ncyIsICJTZXQiLCAibGFuZ25hbWUiLCAiemgiLCAicmVzdWx0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiYmFzZXBhZ2V0ZXh0IiwgIiR0YWJsZSIsICIkIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJwcmVwZW5kVG8iLCAiJHN1Ym1pdEFsbCIsICJ3aW5kb3ciLCAid2dVTFMiLCAib24iLCAiJGJvZHkiLCAiJGJ1dHRvbnMiLCAiZmluZCIsICJsZW5ndGgiLCAibXciLCAibm90aWZ5IiwgInRhZyIsICJ0eXBlIiwgImNvbmZpcm0iLCAiY29uY2F0IiwgImVhY2giLCAiX2luZGV4IiwgImVsZW1lbnQiLCAidHJpZ2dlciIsICJhcHBlbmQiLCAic3R5bGUiLCAidGV4dEFsaWduIiwgImNvbG9yIiwgImFwcGVuZFRvIiwgImRlZmF1bHRsYW5ncyIsICJydW5sYW5ncyIsICJwcm9tcHQiLCAibGFuZ3F1ZXVlIiwgInNwbGl0IiwgIm1hcCIsICJsYW5nIiwgInRyaW0iLCAiZmlsdGVyIiwgImhhcyIsICJwcm9jZXNzIiwgInNoaWZ0IiwgIiRkaWZmVGFibGUiLCAiYmFzZW5hbWUiLCAiY29uZmlnIiwgImdldCIsICJyZXBsYWNlIiwgInRhcmdldFRpdGxlIiwgIm5ld3RleHQiLCAicGFyc2UiLCAidXNlbGFuZyIsICJwcm9wIiwgInRoZW4iLCAiZGF0YSIsICJodG1sIiwgInRleHQiLCAiX3BhcmFtcyIsICJhY3Rpb24iLCAidGl0bGVzIiwgInJ2ZGlmZnRvdGV4dCIsICJmb3JtYXR2ZXJzaW9uIiwgInBvc3QiLCAiZXJyb3IiLCAiJHRvb2wiLCAidXRpbCIsICJnZXRVcmwiLCAicGFnZSIsICJwYWdlcyIsICJtaXNzaW5nIiwgIiRzdWJtaXQiLCAiY2xhc3NOYW1lIiwgImZsb2F0IiwgInJlbW92ZSIsICJjcmVhdGUiLCAic3VtbWFyeSIsICJzIiwgImNvZGVQb2ludEF0IiwgImRpZmYiLCAicmV2aXNpb25zIiwgImJvZHkiLCAiZWRpdCIsICJub2NyZWF0ZSIsICJhZGRDbGFzcyIsICJwcmVwZW5kIiwgImFsd2F5cyIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImN1cnRpbWVzdGFtcCIsICJydnByb3AiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgImludmFsaWQiLCAicmV2aXNpb24iLCAiY29udGVudCIsICJzdHJpbmciLCAidGVzdCIsICJwb3J0bGV0SWQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJsaW5rIiwgImFkZFBvcnRsZXRMaW5rIl0KfQo=

})();

/* </nowiki> */
