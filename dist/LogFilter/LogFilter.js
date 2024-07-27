/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-rightsfilter.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/LogFilter}
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

// dist/LogFilter/LogFilter.js
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
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
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
//! src/LogFilter/options.json
var options_exports = {};
__export(options_exports, {
  configKey: () => configKey,
  default: () => options_default
});
var configKey = "gadget-LogFilter__Initialized";
var options_default = {
  configKey
};
//! src/LogFilter/modules/messages.ts
var MESSAGES = {
  "filter-portlet-text": "过滤",
  "filter-portlet-description": "打开交互式日志正则过滤器",
  "filter-gadget-page": "MediaWiki:Gadget-LogFilter.js",
  "filter-rights-list-instructions": "正则表达式过滤以空格分隔的权限列表。",
  "filter-other-list-instructions": "正则表达式过滤本列表的纯文本样式。",
  "filter-legend": "过滤列表",
  "filter-option-added": "添加权限",
  "filter-option-removed": "删除权限",
  "filter-option-added-or-removed": "添加或删除权限",
  "filter-option-added-removed-static": "已添加/已移除/保持不变",
  "filter-regex-label": "正则表达式：",
  "filter-invert-label": "反选",
  "filter-case-label": "大小写敏感",
  "filter-filter-button": "过滤",
  "filter-highlight-button": "高亮"
};
//! src/LogFilter/modules/core.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
var URL_LIFILTER = mw.util.getParamValue("lifilter");
var URL_LIFILTER_CASE = mw.util.getParamValue("lifiltercase");
var URL_LIFILTER_EXPR = mw.util.getParamValue("lifilterexpr");
var URL_LIFILTER_HILIGHT = mw.util.getParamValue("lifilterhilight");
var URL_LIFILTER_INV = mw.util.getParamValue("lifilterinv");
var LogFilter = class _LogFilter {
  rightsLogOnly = (() => location.href.includes("type=rights") || location.href.includes("Log/rights"))();
  lastClicked = false;
  $body;
  constructor($body) {
    this.$body = $body;
    mw.messages.set(MESSAGES);
  }
  addPortletLink() {
    const portletLink = mw.util.addPortletLink(this.$body.find("#p-cactions").length ? "p-cactions" : "p-tb", "#", _LogFilter.msg("portlet-text"), "ca-rxfilter", _LogFilter.msg("portlet-description"));
    if (portletLink) {
      const $portletLink = $(portletLink);
      $portletLink.find("a").on("click", (event) => {
        event.preventDefault();
        this.buildForm();
      });
    }
    if (URL_LIFILTER || URL_LIFILTER_EXPR) {
      this.buildForm();
    }
  }
  buildForm() {
    const $pageTop = this.$body.find("#contentSub, #topbar");
    if (!$pageTop.length) {
      return;
    }
    let oldInput = "";
    const instructions = this.rightsLogOnly ? _LogFilter.msg("rights-list-instructions") : _LogFilter.msg("other-list-instructions");
    this.$body.find("#ca-rxfilter").hide();
    const casing = URL_LIFILTER_CASE === "1";
    const hilight = URL_LIFILTER_HILIGHT === "1";
    const inverted = URL_LIFILTER_INV === "1";
    const $fieldSet = $("<fieldset>").attr("id", "rightsFilter").text(instructions);
    const $legend = $("<legend>").text(_LogFilter.msg("legend"));
    $fieldSet.append($legend);
    let rfSelect = /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null);
    if (this.rightsLogOnly) {
      rfSelect = /* @__PURE__ */ import_ext_gadget.default.createElement("select", {
        id: "gadget-log_filter__select"
      }, /* @__PURE__ */ import_ext_gadget.default.createElement("option", null, mw.html.escape(_LogFilter.msg("option-added"))), /* @__PURE__ */ import_ext_gadget.default.createElement("option", null, mw.html.escape(_LogFilter.msg("option-removed"))), /* @__PURE__ */ import_ext_gadget.default.createElement("option", null, mw.html.escape(_LogFilter.msg("option-added-or-removed"))), /* @__PURE__ */ import_ext_gadget.default.createElement("option", null, mw.html.escape(_LogFilter.msg("option-added-removed-static"))));
    }
    const fieldSetInner = /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null, /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      class: "gadget-log_filter__regex"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
      htmlFor: "gadget-log_filter__regex"
    }, mw.html.escape(_LogFilter.msg("regex-label"))), /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
      id: "gadget-log_filter__regex"
    })), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      class: "gadget-log_filter__checkboxes"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      class: "gadget-log_filter__invert"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
      id: "gadget-log_filter__invert",
      type: "checkbox"
    }), /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
      htmlFor: "gadget-log_filter__invert"
    }, mw.html.escape(_LogFilter.msg("invert-label")))), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      class: "gadget-log_filter__case"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
      id: "gadget-log_filter__case",
      type: "checkbox"
    }), /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
      htmlFor: "gadget-log_filter__case"
    }, mw.html.escape(_LogFilter.msg("case-label"))))), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      class: "gadget-log_filter__buttons"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("button", {
      class: ["cdx-button cdx-button--action-progressive", "cdx-button--weight-primary"],
      value: "0"
    }, mw.html.escape(_LogFilter.msg("filter-button"))), /* @__PURE__ */ import_ext_gadget.default.createElement("button", {
      class: ["cdx-button cdx-button--action-progressive", "cdx-button--weight-primary"],
      value: "1"
    }, mw.html.escape(_LogFilter.msg("highlight-button")))));
    $fieldSet.append(rfSelect, fieldSetInner);
    $pageTop.after($fieldSet);
    this.$body.find("#gadget-log_filter__regex").val(URL_LIFILTER_EXPR !== null && URL_LIFILTER_EXPR !== void 0 ? URL_LIFILTER_EXPR : "");
    this.$body.find("#gadget-log_filter__case").prop("checked", !casing);
    this.$body.find("#gadget-log_filter__invert").prop("checked", inverted);
    this.$body.find("#gadget-log_filter__regex").trigger("focus");
    this.$body.find("#rightsFilter").find("input").on("keyup change", (event) => {
      const $element = $(event.currentTarget);
      if ($element.attr("id") !== "gadget-log_filter__regex") {
        this.filterLi();
        return;
      }
      const curInput = $element.val();
      if (oldInput !== curInput) {
        oldInput = curInput;
        this.filterLi();
      }
    });
    $fieldSet.find("button").on("click", (event) => {
      const $element = $(event.currentTarget);
      this.lastClicked = !!$element.val();
      this.filterLi();
    });
    if (URL_LIFILTER_EXPR) {
      this.filterLi(hilight);
    }
  }
  filterLi(hilight) {
    var _this$$body$find$val$, _this$$body$find$val;
    const $listItems = this.$body.find("#bodyContent").find("li");
    if (!$listItems.length) {
      return;
    }
    hilight = !!(hilight || this.lastClicked.toString() === "1");
    let type;
    if (this.rightsLogOnly) {
      type = this.$body.find("#gadget-log_filter__select").attr("selectedIndex");
    }
    const invert = this.$body.find("#gadget-log_filter__invert").prop("checked");
    const search = (_this$$body$find$val$ = (_this$$body$find$val = this.$body.find("#gadget-log_filter__regex").val()) === null || _this$$body$find$val === void 0 ? void 0 : _this$$body$find$val.toString()) !== null && _this$$body$find$val$ !== void 0 ? _this$$body$find$val$ : "";
    const flags = this.$body.find("#gadget-log_filter__case").prop("checked") ? "ig" : "g";
    let regexRf;
    try {
      regexRf = new RegExp("".concat(search), "".concat(flags));
    } catch (error) {
      console.log(error);
    }
    const REGEX_RIGHT = /^.*?user:.*?\sfrom\s(.*?)\sto\s(.*?)\s\u200E.*?$/i;
    var _iterator2 = _createForOfIteratorHelper($listItems), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _look, _look2;
        const element = _step2.value;
        const $element = $(element);
        let look = "";
        if (this.rightsLogOnly) {
          const oldr = $element.text().replace(REGEX_RIGHT, "$1");
          const newr = $element.text().replace(REGEX_RIGHT, "$2");
          const oldrl = oldr.split(", ");
          const newrl = newr.split(", ");
          for (let i = 0; i < oldrl.length; i++) {
            for (let j = 0; j < newrl.length; j++) {
              if (oldrl[i] === newrl[j]) {
                oldrl[i] = "";
                newrl[j] = "";
              }
            }
          }
          const remr = oldrl.join(",");
          const addr = newrl.join(",");
          switch (type) {
            case "0":
              look = addr;
              break;
            case "1":
              look = remr;
              break;
            case "2":
              look = "".concat(remr, " ").concat(addr);
              break;
            case "3":
              look = "".concat(oldr, " ").concat(newr);
              break;
          }
        } else {
          look = $element.text();
        }
        $element.css("background-color", "");
        $element.show();
        if (regexRf && (((_look = look) === null || _look === void 0 ? void 0 : _look.search(regexRf)) === -1 && invert || ((_look2 = look) === null || _look2 === void 0 ? void 0 : _look2.search(regexRf)) !== -1 && !invert)) {
          if (hilight) {
            $element.css("background-color", "#ffff99");
          }
        } else if (!hilight) {
          $element.hide();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  static msg(key) {
    key = "filter-".concat(key);
    return mw.message(key).plain();
  }
};
//! src/LogFilter/modules/constant.ts
var REGEX_TARGET_PAGE = /^(?:activeusers|checkuser|contributions|ipblocklist|linksearch|log|search|(?:uncategoriz|unus|want)ed(?:categori|templat)es|wantedfiles|(?:short|long|ancient|uncategorized|unwatched|wanted|protected|deadend|lonely|new)pages|fewestrevisions|withoutinterwiki|(?:double|broken)redirects|protectedtitles|crossnamespacelinks|recentchanges|categories|disambiguations|listredirects|globalusers|globalblocklist|listusers|watchlist|most(?:linked|revisions|categories)|nuke|whatlinkshere)$/i;
//! src/LogFilter/LogFilter.ts
var import_ext_gadget2 = require("ext.gadget.Util");
(function logFilter() {
  const {
    configKey: configKey2
  } = options_exports;
  const {
    wgAction,
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (mw.config.get(configKey2)) {
    return;
  }
  mw.config.set(configKey2, true);
  if (wgAction !== "history" && !mw.util.getParamValue("lifilter") && !REGEX_TARGET_PAGE.test(wgCanonicalSpecialPageName || "")) {
    return;
  }
  void (0, import_ext_gadget2.getBody)().then(($body) => {
    new LogFilter($body).addPortletLink();
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ0ZpbHRlci9vcHRpb25zLmpzb24iLCAic3JjL0xvZ0ZpbHRlci9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Mb2dGaWx0ZXIvbW9kdWxlcy9jb3JlLnRzeCIsICJzcmMvTG9nRmlsdGVyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0xvZ0ZpbHRlci9Mb2dGaWx0ZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtTG9nRmlsdGVyX19Jbml0aWFsaXplZFwiXG59XG4iLCAiY29uc3QgTUVTU0FHRVMgPSB7XG5cdCdmaWx0ZXItcG9ydGxldC10ZXh0JzogJ+i/h+a7pCcsXG5cdCdmaWx0ZXItcG9ydGxldC1kZXNjcmlwdGlvbic6ICfmiZPlvIDkuqTkupLlvI/ml6Xlv5fmraPliJnov4fmu6TlmagnLFxuXHQnZmlsdGVyLWdhZGdldC1wYWdlJzogJ01lZGlhV2lraTpHYWRnZXQtTG9nRmlsdGVyLmpzJyxcblx0J2ZpbHRlci1yaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnOiAn5q2j5YiZ6KGo6L6+5byP6L+H5ruk5Lul56m65qC85YiG6ZqU55qE5p2D6ZmQ5YiX6KGo44CCJyxcblx0J2ZpbHRlci1vdGhlci1saXN0LWluc3RydWN0aW9ucyc6ICfmraPliJnooajovr7lvI/ov4fmu6TmnKzliJfooajnmoTnuq/mlofmnKzmoLflvI/jgIInLFxuXHQnZmlsdGVyLWxlZ2VuZCc6ICfov4fmu6TliJfooagnLFxuXHQnZmlsdGVyLW9wdGlvbi1hZGRlZCc6ICfmt7vliqDmnYPpmZAnLFxuXHQnZmlsdGVyLW9wdGlvbi1yZW1vdmVkJzogJ+WIoOmZpOadg+mZkCcsXG5cdCdmaWx0ZXItb3B0aW9uLWFkZGVkLW9yLXJlbW92ZWQnOiAn5re75Yqg5oiW5Yig6Zmk5p2D6ZmQJyxcblx0J2ZpbHRlci1vcHRpb24tYWRkZWQtcmVtb3ZlZC1zdGF0aWMnOiAn5bey5re75YqgL+W3suenu+mZpC/kv53mjIHkuI3lj5gnLFxuXHQnZmlsdGVyLXJlZ2V4LWxhYmVsJzogJ+ato+WImeihqOi+vuW8j++8micsXG5cdCdmaWx0ZXItaW52ZXJ0LWxhYmVsJzogJ+WPjemAiScsXG5cdCdmaWx0ZXItY2FzZS1sYWJlbCc6ICflpKflsI/lhpnmlY/mhJ8nLFxuXHQnZmlsdGVyLWZpbHRlci1idXR0b24nOiAn6L+H5rukJyxcblx0J2ZpbHRlci1oaWdobGlnaHQtYnV0dG9uJzogJ+mrmOS6ricsXG59O1xuXG5leHBvcnQge01FU1NBR0VTfTtcbiIsICJpbXBvcnQge01FU1NBR0VTfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuY29uc3QgVVJMX0xJRklMVEVSOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcicpO1xuY29uc3QgVVJMX0xJRklMVEVSX0NBU0U6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyY2FzZScpO1xuY29uc3QgVVJMX0xJRklMVEVSX0VYUFI6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyZXhwcicpO1xuY29uc3QgVVJMX0xJRklMVEVSX0hJTElHSFQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyaGlsaWdodCcpO1xuY29uc3QgVVJMX0xJRklMVEVSX0lOVjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJpbnYnKTtcblxuY2xhc3MgTG9nRmlsdGVyIHtcblx0cHJpdmF0ZSByZWFkb25seSByaWdodHNMb2dPbmx5ID0gbG9jYXRpb24uaHJlZi5pbmNsdWRlcygndHlwZT1yaWdodHMnKSB8fCBsb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdMb2cvcmlnaHRzJyk7XG5cdHByaXZhdGUgbGFzdENsaWNrZWQgPSBmYWxzZTtcblx0cHJpdmF0ZSAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pikge1xuXHRcdHRoaXMuJGJvZHkgPSAkYm9keTtcblx0XHQvLyBEZWZpbmUgaW50ZXJmYWNlIG1lc3NhZ2VzXG5cdFx0bXcubWVzc2FnZXMuc2V0KE1FU1NBR0VTKTtcblx0fVxuXG5cdHB1YmxpYyBhZGRQb3J0bGV0TGluaygpOiB2b2lkIHtcblx0XHQvLyBDcmVhdGUgcG9ydGxldCBsaW5rXG5cdFx0Y29uc3QgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRcdHRoaXMuJGJvZHkuZmluZCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPyAncC1jYWN0aW9ucycgOiAncC10YicsXG5cdFx0XHQnIycsXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdwb3J0bGV0LXRleHQnKSxcblx0XHRcdCdjYS1yeGZpbHRlcicsXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdwb3J0bGV0LWRlc2NyaXB0aW9uJylcblx0XHQpO1xuXHRcdC8vIEJpbmQgY2xpY2sgbGlzdGVuZXJcblx0XHRpZiAocG9ydGxldExpbmspIHtcblx0XHRcdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5ID0gJChwb3J0bGV0TGluayk7XG5cdFx0XHQkcG9ydGxldExpbmsuZmluZCgnYScpLm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5idWlsZEZvcm0oKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQvLyBEaXNwbGF5IGZvcm0gZGlyZWNsdHk/XG5cdFx0aWYgKFVSTF9MSUZJTFRFUiB8fCBVUkxfTElGSUxURVJfRVhQUikge1xuXHRcdFx0dGhpcy5idWlsZEZvcm0oKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGJ1aWxkRm9ybSgpOiB2b2lkIHtcblx0XHRjb25zdCAkcGFnZVRvcDogSlF1ZXJ5ID0gdGhpcy4kYm9keS5maW5kKCcjY29udGVudFN1YiwgI3RvcGJhcicpO1xuXHRcdGlmICghJHBhZ2VUb3AubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IG9sZElucHV0OiBzdHJpbmcgPSAnJztcblx0XHRjb25zdCBpbnN0cnVjdGlvbnM6IHN0cmluZyA9IHRoaXMucmlnaHRzTG9nT25seVxuXHRcdFx0PyBMb2dGaWx0ZXIubXNnKCdyaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnKVxuXHRcdFx0OiBMb2dGaWx0ZXIubXNnKCdvdGhlci1saXN0LWluc3RydWN0aW9ucycpO1xuXG5cdFx0dGhpcy4kYm9keS5maW5kKCcjY2EtcnhmaWx0ZXInKS5oaWRlKCk7XG5cblx0XHQvLyBTZXQgdXAgY29uZmlnXG5cdFx0Y29uc3QgY2FzaW5nOiBib29sZWFuID0gVVJMX0xJRklMVEVSX0NBU0UgPT09ICcxJztcblx0XHRjb25zdCBoaWxpZ2h0OiBib29sZWFuID0gVVJMX0xJRklMVEVSX0hJTElHSFQgPT09ICcxJztcblx0XHRjb25zdCBpbnZlcnRlZDogYm9vbGVhbiA9IFVSTF9MSUZJTFRFUl9JTlYgPT09ICcxJztcblxuXHRcdC8vIEdlbmVyYXRlIHRoZSBmb3JtXG5cdFx0Y29uc3QgJGZpZWxkU2V0OiBKUXVlcnkgPSAkKCc8ZmllbGRzZXQ+JykuYXR0cignaWQnLCAncmlnaHRzRmlsdGVyJykudGV4dChpbnN0cnVjdGlvbnMpO1xuXHRcdGNvbnN0ICRsZWdlbmQ6IEpRdWVyeSA9ICQoJzxsZWdlbmQ+JykudGV4dChMb2dGaWx0ZXIubXNnKCdsZWdlbmQnKSk7XG5cdFx0JGZpZWxkU2V0LmFwcGVuZCgkbGVnZW5kKTtcblxuXHRcdGxldCByZlNlbGVjdCA9IDw+PC8+O1xuXHRcdGlmICh0aGlzLnJpZ2h0c0xvZ09ubHkpIHtcblx0XHRcdHJmU2VsZWN0ID0gKFxuXHRcdFx0XHQ8c2VsZWN0IGlkPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX3NlbGVjdFwiPlxuXHRcdFx0XHRcdDxvcHRpb24+e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ29wdGlvbi1hZGRlZCcpKX08L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tcmVtb3ZlZCcpKX08L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tYWRkZWQtb3ItcmVtb3ZlZCcpKX08L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tYWRkZWQtcmVtb3ZlZC1zdGF0aWMnKSl9PC9vcHRpb24+XG5cdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0Y29uc3QgZmllbGRTZXRJbm5lciA9IChcblx0XHRcdDw+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXhcIj5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdhZGdldC1sb2dfZmlsdGVyX19yZWdleFwiPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdyZWdleC1sYWJlbCcpKX08L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dCBpZD1cImdhZGdldC1sb2dfZmlsdGVyX19yZWdleFwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2NoZWNrYm94ZXNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydFwiPlxuXHRcdFx0XHRcdFx0PGlucHV0IGlkPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydFwiIHR5cGU9XCJjaGVja2JveFwiIC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdhZGdldC1sb2dfZmlsdGVyX19pbnZlcnRcIj5cblx0XHRcdFx0XHRcdFx0e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ2ludmVydC1sYWJlbCcpKX1cblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdhZGdldC1sb2dfZmlsdGVyX19jYXNlXCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fY2FzZVwiIHR5cGU9XCJjaGVja2JveFwiIC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdhZGdldC1sb2dfZmlsdGVyX19jYXNlXCI+e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ2Nhc2UtbGFiZWwnKSl9PC9sYWJlbD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fYnV0dG9uc1wiPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzPXtbJ2NkeC1idXR0b24gY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5J119XG5cdFx0XHRcdFx0XHR2YWx1ZT1cIjBcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdmaWx0ZXItYnV0dG9uJykpfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzPXtbJ2NkeC1idXR0b24gY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5J119XG5cdFx0XHRcdFx0XHR2YWx1ZT1cIjFcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdoaWdobGlnaHQtYnV0dG9uJykpfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvPlxuXHRcdCk7XG5cdFx0Ly8gSW5qZWN0IHRoZXNlIEhUTUwgZWxlbWVudHMgaW50byB0aGUgZmllbGRzZXRcblx0XHQkZmllbGRTZXQuYXBwZW5kKHJmU2VsZWN0LCBmaWVsZFNldElubmVyKTtcblx0XHQkcGFnZVRvcC5hZnRlcigkZmllbGRTZXQpO1xuXG5cdFx0Ly8gU2V0IHBhc3NlZCB2YWx1ZXNcblx0XHR0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXgnKS52YWwoVVJMX0xJRklMVEVSX0VYUFIgPz8gJycpO1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19jYXNlJykucHJvcCgnY2hlY2tlZCcsICFjYXNpbmcpO1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19pbnZlcnQnKS5wcm9wKCdjaGVja2VkJywgaW52ZXJ0ZWQpO1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19yZWdleCcpLnRyaWdnZXIoJ2ZvY3VzJyk7XG5cblx0XHQvLyBCaW5kIGNsaWNrIGFuZCBjaGFuZ2UgbGlzdGVuZXJzXG5cdFx0dGhpcy4kYm9keVxuXHRcdFx0LmZpbmQoJyNyaWdodHNGaWx0ZXInKVxuXHRcdFx0LmZpbmQoJ2lucHV0Jylcblx0XHRcdC5vbigna2V5dXAgY2hhbmdlJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRpZiAoJGVsZW1lbnQuYXR0cignaWQnKSAhPT0gJ2dhZGdldC1sb2dfZmlsdGVyX19yZWdleCcpIHtcblx0XHRcdFx0XHR0aGlzLmZpbHRlckxpKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGN1cklucHV0OiBzdHJpbmcgPSAkZWxlbWVudC52YWwoKSBhcyBzdHJpbmc7XG5cdFx0XHRcdGlmIChvbGRJbnB1dCAhPT0gY3VySW5wdXQpIHtcblx0XHRcdFx0XHRvbGRJbnB1dCA9IGN1cklucHV0O1xuXHRcdFx0XHRcdHRoaXMuZmlsdGVyTGkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0JGZpZWxkU2V0LmZpbmQoJ2J1dHRvbicpLm9uKCdjbGljaycsIChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHR0aGlzLmxhc3RDbGlja2VkID0gISEkZWxlbWVudC52YWwoKTtcblx0XHRcdHRoaXMuZmlsdGVyTGkoKTtcblx0XHR9KTtcblxuXHRcdGlmIChVUkxfTElGSUxURVJfRVhQUikge1xuXHRcdFx0dGhpcy5maWx0ZXJMaShoaWxpZ2h0KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGZpbHRlckxpKGhpbGlnaHQ/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0Ly8gR3JhYiB0aGUgbGlzdCBvZiBhbGwgPGxpPiBpbiB0aGUgY29udGVudFxuXHRcdGNvbnN0ICRsaXN0SXRlbXM6IEpRdWVyeSA9IHRoaXMuJGJvZHkuZmluZCgnI2JvZHlDb250ZW50JykuZmluZCgnbGknKTtcblx0XHRpZiAoISRsaXN0SXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aGlsaWdodCA9ICEhKGhpbGlnaHQgfHwgdGhpcy5sYXN0Q2xpY2tlZC50b1N0cmluZygpID09PSAnMScpO1xuXG5cdFx0Ly8gR3JhYiBvcHRpb25zIGZyb20gZm9ybVxuXHRcdGxldCB0eXBlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKHRoaXMucmlnaHRzTG9nT25seSkge1xuXHRcdFx0dHlwZSA9IHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19zZWxlY3QnKS5hdHRyKCdzZWxlY3RlZEluZGV4Jyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW52ZXJ0ID0gdGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydCcpLnByb3AoJ2NoZWNrZWQnKSBhcyBib29sZWFuO1xuXHRcdGNvbnN0IHNlYXJjaDogc3RyaW5nID0gdGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX3JlZ2V4JykudmFsKCk/LnRvU3RyaW5nKCkgPz8gJyc7XG5cdFx0Y29uc3QgZmxhZ3M6IHN0cmluZyA9IHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19jYXNlJykucHJvcCgnY2hlY2tlZCcpID8gJ2lnJyA6ICdnJztcblx0XHRsZXQgcmVnZXhSZjogUmVnRXhwIHwgdW5kZWZpbmVkO1xuXHRcdHRyeSB7XG5cdFx0XHRyZWdleFJmID0gbmV3IFJlZ0V4cChgJHtzZWFyY2h9YCwgYCR7ZmxhZ3N9YCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHR9XG5cblx0XHQvLyBUaGUgcmVnZXggdXNlZCB0byBncmFiIHRoZSBTcGVjaWFsOkxvZy9yaWdodHMgY2hhbmdlc1xuXHRcdGNvbnN0IFJFR0VYX1JJR0hUOiBSZWdFeHAgPSAvXi4qP3VzZXI6Lio/XFxzZnJvbVxccyguKj8pXFxzdG9cXHMoLio/KVxcc1xcdTIwMEUuKj8kL2k7XG5cblx0XHQvLyBJdGVyYXRlXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRsaXN0SXRlbXMpIHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0bGV0IGxvb2s6IHN0cmluZyA9ICcnO1xuXG5cdFx0XHRpZiAodGhpcy5yaWdodHNMb2dPbmx5KSB7XG5cdFx0XHRcdC8vIFNwZWNpYWw6TG9nL3JpZ2h0c1xuXHRcdFx0XHRjb25zdCBvbGRyOiBzdHJpbmcgPSAkZWxlbWVudC50ZXh0KCkucmVwbGFjZShSRUdFWF9SSUdIVCwgJyQxJyk7XG5cdFx0XHRcdGNvbnN0IG5ld3I6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS5yZXBsYWNlKFJFR0VYX1JJR0hULCAnJDInKTtcblx0XHRcdFx0Y29uc3Qgb2xkcmw6IHN0cmluZ1tdID0gb2xkci5zcGxpdCgnLCAnKTtcblx0XHRcdFx0Y29uc3QgbmV3cmw6IHN0cmluZ1tdID0gbmV3ci5zcGxpdCgnLCAnKTtcblx0XHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG9sZHJsLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG5ld3JsLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpZiAob2xkcmxbaV0gPT09IG5ld3JsW2pdKSB7XG5cdFx0XHRcdFx0XHRcdG9sZHJsW2ldID0gJyc7XG5cdFx0XHRcdFx0XHRcdG5ld3JsW2pdID0gJyc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHJlbXI6IHN0cmluZyA9IG9sZHJsLmpvaW4oJywnKTtcblx0XHRcdFx0Y29uc3QgYWRkcjogc3RyaW5nID0gbmV3cmwuam9pbignLCcpO1xuXHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0XHRjYXNlICcwJzpcblx0XHRcdFx0XHRcdGxvb2sgPSBhZGRyO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMSc6XG5cdFx0XHRcdFx0XHRsb29rID0gcmVtcjtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJzInOlxuXHRcdFx0XHRcdFx0bG9vayA9IGAke3JlbXJ9ICR7YWRkcn1gO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMyc6XG5cdFx0XHRcdFx0XHRsb29rID0gYCR7b2xkcn0gJHtuZXdyfWA7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gQW55IG90aGVyIGxpc3Qgb2YgPGxpPiBvYmplY3RzXG5cdFx0XHRcdGxvb2sgPSAkZWxlbWVudC50ZXh0KCk7XG5cdFx0XHR9XG5cblx0XHRcdCRlbGVtZW50LmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcnKTtcblx0XHRcdCRlbGVtZW50LnNob3coKTtcblxuXHRcdFx0aWYgKHJlZ2V4UmYgJiYgKChsb29rPy5zZWFyY2gocmVnZXhSZikgPT09IC0xICYmIGludmVydCkgfHwgKGxvb2s/LnNlYXJjaChyZWdleFJmKSAhPT0gLTEgJiYgIWludmVydCkpKSB7XG5cdFx0XHRcdGlmIChoaWxpZ2h0KSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmZmZmOTknKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICghaGlsaWdodCkge1xuXHRcdFx0XHQkZWxlbWVudC5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgbXNnKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRrZXkgPSBgZmlsdGVyLSR7a2V5fWA7XG5cdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdHJldHVybiBtdy5tZXNzYWdlKGtleSkucGxhaW4oKTtcblx0fVxufVxuXG5leHBvcnQge0xvZ0ZpbHRlcn07XG4iLCAiY29uc3QgUkVHRVhfVEFSR0VUX1BBR0U6IFJlZ0V4cCA9XG5cdC9eKD86YWN0aXZldXNlcnN8Y2hlY2t1c2VyfGNvbnRyaWJ1dGlvbnN8aXBibG9ja2xpc3R8bGlua3NlYXJjaHxsb2d8c2VhcmNofCg/OnVuY2F0ZWdvcml6fHVudXN8d2FudCllZCg/OmNhdGVnb3JpfHRlbXBsYXQpZXN8d2FudGVkZmlsZXN8KD86c2hvcnR8bG9uZ3xhbmNpZW50fHVuY2F0ZWdvcml6ZWR8dW53YXRjaGVkfHdhbnRlZHxwcm90ZWN0ZWR8ZGVhZGVuZHxsb25lbHl8bmV3KXBhZ2VzfGZld2VzdHJldmlzaW9uc3x3aXRob3V0aW50ZXJ3aWtpfCg/OmRvdWJsZXxicm9rZW4pcmVkaXJlY3RzfHByb3RlY3RlZHRpdGxlc3xjcm9zc25hbWVzcGFjZWxpbmtzfHJlY2VudGNoYW5nZXN8Y2F0ZWdvcmllc3xkaXNhbWJpZ3VhdGlvbnN8bGlzdHJlZGlyZWN0c3xnbG9iYWx1c2Vyc3xnbG9iYWxibG9ja2xpc3R8bGlzdHVzZXJzfHdhdGNobGlzdHxtb3N0KD86bGlua2VkfHJldmlzaW9uc3xjYXRlZ29yaWVzKXxudWtlfHdoYXRsaW5rc2hlcmUpJC9pO1xuXG5leHBvcnQge1JFR0VYX1RBUkdFVF9QQUdFfTtcbiIsICIvKipcbiAqIExvZyBmaWx0ZXIgc2NyaXB0XG4gKlxuICogQ3JlYXRlZCBieSBTcGxhcmthXG4gKiBBbWVuZGVkIGJ5IE1pa2UubGlmZWd1YXJkICYgTHVwb1xuICogUGFydGlhbGx5IHJld3JpdHRlbiBieSBEaWVCdWNoZVxuICpcbiAqIDxsaT4gZWxlbWVudCBGaWx0ZXIgU2NyaXB0LCB2ZXJzaW9uIFswLjJdXG4gKiBTaG91bGQgY3VycmVudGx5IHdvcmsgb24gYWxsIGtub3duIHNraW5zICh3aXRoIGEgI2NvbnRlbnRTdWIgb3IgI3RvcGJhcilcbiAqXG4gKiBtdy51dGlsLmdldFVybCggbXcuY29uZmlnLmdldCggJ3dnUGFnZU5hbWUnICkgKSArICc/JyArXG4gKiAnd2l0aEpTPU1lZGlhV2lraTpHYWRnZXQtTG9nRmlsdGVyLmpzJmxpZmlsdGVyPTEmbGlmaWx0ZXJleHByPVRFU1QmbGlmaWx0ZXJjYXNlJmxpZmlsdGVyaGlsaWdodCZsaWZpbHRlcmludidcbiAqL1xuaW1wb3J0ICcuL0xvZ0ZpbHRlci5sZXNzJztcbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtMb2dGaWx0ZXJ9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7UkVHRVhfVEFSR0VUX1BBR0V9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbihmdW5jdGlvbiBsb2dGaWx0ZXIoKTogdm9pZCB7XG5cdGNvbnN0IHtjb25maWdLZXl9ID0gT1BUSU9OUztcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChjb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KGNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Ly8gV2hlbiB0byBlbmFibGUgYWxsIHRoaXNcblx0aWYgKFxuXHRcdHdnQWN0aW9uICE9PSAnaGlzdG9yeScgJiZcblx0XHQhbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcicpICYmXG5cdFx0IVJFR0VYX1RBUkdFVF9QQUdFLnRlc3Qod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgfHwgJycpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdG5ldyBMb2dGaWx0ZXIoJGJvZHkpLmFkZFBvcnRsZXRMaW5rKCk7IC8vIExvYWRcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBLENBQUE7QUFBQUMsU0FBQUQsaUJBQUE7RUFBQUUsV0FBQUEsTUFBQUE7RUFBQUMsU0FBQUEsTUFBQUM7QUFBQSxDQUFBO0FBQ0MsSUFBQUYsWUFBYTtBQURkLElB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QWEsYUFDYixDQUFDM0csR0FBR0MsS0FBS0MsY0FBYyxVQUFVLEtBQ2pDLENBQUNxRyxrQkFBa0JRLEtBQUtILDhCQUE4QixFQUFFLEdBQ3ZEO0FBQ0Q7RUFDRDtBQUVBLFFBQUEsR0FBS0osbUJBQUFRLFNBQVEsRUFBRUMsS0FBTW5HLFdBQXlDO0FBQzdELFFBQUlQLFVBQVVPLEtBQUssRUFBRUksZUFBZTtFQUNyQyxDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsib3B0aW9uc19leHBvcnRzIiwgIl9fZXhwb3J0IiwgImNvbmZpZ0tleSIsICJkZWZhdWx0IiwgIm9wdGlvbnNfZGVmYXVsdCIsICJNRVNTQUdFUyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiVVJMX0xJRklMVEVSIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJVUkxfTElGSUxURVJfQ0FTRSIsICJVUkxfTElGSUxURVJfRVhQUiIsICJVUkxfTElGSUxURVJfSElMSUdIVCIsICJVUkxfTElGSUxURVJfSU5WIiwgIkxvZ0ZpbHRlciIsICJfTG9nRmlsdGVyIiwgInJpZ2h0c0xvZ09ubHkiLCAibG9jYXRpb24iLCAiaHJlZiIsICJpbmNsdWRlcyIsICJsYXN0Q2xpY2tlZCIsICIkYm9keSIsICJjb25zdHJ1Y3RvciIsICJtZXNzYWdlcyIsICJzZXQiLCAiYWRkUG9ydGxldExpbmsiLCAicG9ydGxldExpbmsiLCAiZmluZCIsICJsZW5ndGgiLCAibXNnIiwgIiRwb3J0bGV0TGluayIsICIkIiwgIm9uIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImJ1aWxkRm9ybSIsICIkcGFnZVRvcCIsICJvbGRJbnB1dCIsICJpbnN0cnVjdGlvbnMiLCAiaGlkZSIsICJjYXNpbmciLCAiaGlsaWdodCIsICJpbnZlcnRlZCIsICIkZmllbGRTZXQiLCAiYXR0ciIsICJ0ZXh0IiwgIiRsZWdlbmQiLCAiYXBwZW5kIiwgInJmU2VsZWN0IiwgImNyZWF0ZUVsZW1lbnQiLCAiRnJhZ21lbnQiLCAiaWQiLCAiaHRtbCIsICJlc2NhcGUiLCAiZmllbGRTZXRJbm5lciIsICJjbGFzcyIsICJodG1sRm9yIiwgInR5cGUiLCAidmFsdWUiLCAiYWZ0ZXIiLCAidmFsIiwgInByb3AiLCAidHJpZ2dlciIsICIkZWxlbWVudCIsICJjdXJyZW50VGFyZ2V0IiwgImZpbHRlckxpIiwgImN1cklucHV0IiwgIl90aGlzJCRib2R5JGZpbmQkdmFsJCIsICJfdGhpcyQkYm9keSRmaW5kJHZhbCIsICIkbGlzdEl0ZW1zIiwgInRvU3RyaW5nIiwgImludmVydCIsICJzZWFyY2giLCAiZmxhZ3MiLCAicmVnZXhSZiIsICJSZWdFeHAiLCAiY29uY2F0IiwgImVycm9yIiwgImNvbnNvbGUiLCAibG9nIiwgIlJFR0VYX1JJR0hUIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIl9sb29rIiwgIl9sb29rMiIsICJlbGVtZW50IiwgImxvb2siLCAib2xkciIsICJyZXBsYWNlIiwgIm5ld3IiLCAib2xkcmwiLCAic3BsaXQiLCAibmV3cmwiLCAiaSIsICJqIiwgInJlbXIiLCAiam9pbiIsICJhZGRyIiwgImNzcyIsICJzaG93IiwgImVyciIsICJlIiwgImYiLCAia2V5IiwgIm1lc3NhZ2UiLCAicGxhaW4iLCAiUkVHRVhfVEFSR0VUX1BBR0UiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImxvZ0ZpbHRlciIsICJjb25maWdLZXkyIiwgIndnQWN0aW9uIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAidGVzdCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==
