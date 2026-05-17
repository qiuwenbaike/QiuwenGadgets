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
var import_ext_gadget = __toESM(require("ext.gadget.JSX"), 1);
//! src/LogFilter/LogFilter.module.less
var rightsFilter = "LogFilter-module__rightsFilter_kXTJ9W__4100";
//! src/LogFilter/modules/core.tsx
var URL_LIFILTER = mw.util.getParamValue("lifilter");
var URL_LIFILTER_CASE = mw.util.getParamValue("lifiltercase");
var URL_LIFILTER_EXPR = mw.util.getParamValue("lifilterexpr");
var URL_LIFILTER_HILIGHT = mw.util.getParamValue("lifilterhilight");
var URL_LIFILTER_INV = mw.util.getParamValue("lifilterinv");
var LogFilter = class _LogFilter {
  rightsLogOnly = location.href.includes("type=rights") || location.href.includes("Log/rights");
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
    const $fieldSet = $("<fieldset>").attr("id", "rightsFilter").addClass(rightsFilter).text(instructions);
    const $legend = $("<legend>").text(_LogFilter.msg("legend"));
    $fieldSet.append($legend);
    let rfSelect = /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null);
    if (this.rightsLogOnly) {
      rfSelect = /* @__PURE__ */ import_ext_gadget.default.createElement("select", {
        id: "gadget-log_filter__select"
      }, /* @__PURE__ */ import_ext_gadget.default.createElement("option", null, mw.html.escape(_LogFilter.msg("option-added"))), /* @__PURE__ */ import_ext_gadget.default.createElement("option", null, mw.html.escape(_LogFilter.msg("option-removed"))), /* @__PURE__ */ import_ext_gadget.default.createElement("option", null, mw.html.escape(_LogFilter.msg("option-added-or-removed"))), /* @__PURE__ */ import_ext_gadget.default.createElement("option", null, mw.html.escape(_LogFilter.msg("option-added-removed-static"))));
    }
    const fieldSetInner = /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null, /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      className: "gadget-log_filter__regex"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
      htmlFor: "gadget-log_filter__regex"
    }, mw.html.escape(_LogFilter.msg("regex-label"))), /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
      id: "gadget-log_filter__regex"
    })), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      className: "gadget-log_filter__checkboxes"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      className: "gadget-log_filter__invert"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
      id: "gadget-log_filter__invert",
      type: "checkbox"
    }), /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
      htmlFor: "gadget-log_filter__invert"
    }, mw.html.escape(_LogFilter.msg("invert-label")))), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      className: "gadget-log_filter__case"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
      id: "gadget-log_filter__case",
      type: "checkbox"
    }), /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
      htmlFor: "gadget-log_filter__case"
    }, mw.html.escape(_LogFilter.msg("case-label"))))), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
      className: "gadget-log_filter__buttons"
    }, /* @__PURE__ */ import_ext_gadget.default.createElement("button", {
      className: ["cdx-button cdx-button--action-progressive", "cdx-button--weight-primary"],
      value: "0"
    }, mw.html.escape(_LogFilter.msg("filter-button"))), /* @__PURE__ */ import_ext_gadget.default.createElement("button", {
      className: ["cdx-button cdx-button--action-progressive", "cdx-button--weight-primary"],
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
      regexRf = new RegExp(search, flags);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ0ZpbHRlci9vcHRpb25zLmpzb24iLCAic3JjL0xvZ0ZpbHRlci9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Mb2dGaWx0ZXIvbW9kdWxlcy9jb3JlLnRzeCIsICJzcmMvTG9nRmlsdGVyL0xvZ0ZpbHRlci5tb2R1bGUubGVzcyIsICJzcmMvTG9nRmlsdGVyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0xvZ0ZpbHRlci9Mb2dGaWx0ZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtTG9nRmlsdGVyX19Jbml0aWFsaXplZFwiXG59XG4iLCAiY29uc3QgTUVTU0FHRVMgPSB7XG5cdCdmaWx0ZXItcG9ydGxldC10ZXh0JzogJ+i/h+a7pCcsXG5cdCdmaWx0ZXItcG9ydGxldC1kZXNjcmlwdGlvbic6ICfmiZPlvIDkuqTkupLlvI/ml6Xlv5fmraPliJnov4fmu6TlmagnLFxuXHQnZmlsdGVyLWdhZGdldC1wYWdlJzogJ01lZGlhV2lraTpHYWRnZXQtTG9nRmlsdGVyLmpzJyxcblx0J2ZpbHRlci1yaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnOiAn5q2j5YiZ6KGo6L6+5byP6L+H5ruk5Lul56m65qC85YiG6ZqU55qE5p2D6ZmQ5YiX6KGo44CCJyxcblx0J2ZpbHRlci1vdGhlci1saXN0LWluc3RydWN0aW9ucyc6ICfmraPliJnooajovr7lvI/ov4fmu6TmnKzliJfooajnmoTnuq/mlofmnKzmoLflvI/jgIInLFxuXHQnZmlsdGVyLWxlZ2VuZCc6ICfov4fmu6TliJfooagnLFxuXHQnZmlsdGVyLW9wdGlvbi1hZGRlZCc6ICfmt7vliqDmnYPpmZAnLFxuXHQnZmlsdGVyLW9wdGlvbi1yZW1vdmVkJzogJ+WIoOmZpOadg+mZkCcsXG5cdCdmaWx0ZXItb3B0aW9uLWFkZGVkLW9yLXJlbW92ZWQnOiAn5re75Yqg5oiW5Yig6Zmk5p2D6ZmQJyxcblx0J2ZpbHRlci1vcHRpb24tYWRkZWQtcmVtb3ZlZC1zdGF0aWMnOiAn5bey5re75YqgL+W3suenu+mZpC/kv53mjIHkuI3lj5gnLFxuXHQnZmlsdGVyLXJlZ2V4LWxhYmVsJzogJ+ato+WImeihqOi+vuW8j++8micsXG5cdCdmaWx0ZXItaW52ZXJ0LWxhYmVsJzogJ+WPjemAiScsXG5cdCdmaWx0ZXItY2FzZS1sYWJlbCc6ICflpKflsI/lhpnmlY/mhJ8nLFxuXHQnZmlsdGVyLWZpbHRlci1idXR0b24nOiAn6L+H5rukJyxcblx0J2ZpbHRlci1oaWdobGlnaHQtYnV0dG9uJzogJ+mrmOS6ricsXG59O1xuXG5leHBvcnQge01FU1NBR0VTfTtcbiIsICJpbXBvcnQge01FU1NBR0VTfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge3JpZ2h0c0ZpbHRlcn0gZnJvbSAnLi4vTG9nRmlsdGVyLm1vZHVsZS5sZXNzJztcblxuY29uc3QgVVJMX0xJRklMVEVSOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcicpO1xuY29uc3QgVVJMX0xJRklMVEVSX0NBU0U6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyY2FzZScpO1xuY29uc3QgVVJMX0xJRklMVEVSX0VYUFI6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyZXhwcicpO1xuY29uc3QgVVJMX0xJRklMVEVSX0hJTElHSFQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyaGlsaWdodCcpO1xuY29uc3QgVVJMX0xJRklMVEVSX0lOVjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJpbnYnKTtcblxuY2xhc3MgTG9nRmlsdGVyIHtcblx0cHJpdmF0ZSByZWFkb25seSByaWdodHNMb2dPbmx5ID0gbG9jYXRpb24uaHJlZi5pbmNsdWRlcygndHlwZT1yaWdodHMnKSB8fCBsb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdMb2cvcmlnaHRzJyk7XG5cdHByaXZhdGUgbGFzdENsaWNrZWQgPSBmYWxzZTtcblx0cHJpdmF0ZSAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pikge1xuXHRcdHRoaXMuJGJvZHkgPSAkYm9keTtcblx0XHQvLyBEZWZpbmUgaW50ZXJmYWNlIG1lc3NhZ2VzXG5cdFx0bXcubWVzc2FnZXMuc2V0KE1FU1NBR0VTKTtcblx0fVxuXG5cdHB1YmxpYyBhZGRQb3J0bGV0TGluaygpOiB2b2lkIHtcblx0XHQvLyBDcmVhdGUgcG9ydGxldCBsaW5rXG5cdFx0Y29uc3QgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRcdHRoaXMuJGJvZHkuZmluZCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPyAncC1jYWN0aW9ucycgOiAncC10YicsXG5cdFx0XHQnIycsXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdwb3J0bGV0LXRleHQnKSxcblx0XHRcdCdjYS1yeGZpbHRlcicsXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdwb3J0bGV0LWRlc2NyaXB0aW9uJylcblx0XHQpO1xuXHRcdC8vIEJpbmQgY2xpY2sgbGlzdGVuZXJcblx0XHRpZiAocG9ydGxldExpbmspIHtcblx0XHRcdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5ID0gJChwb3J0bGV0TGluayk7XG5cdFx0XHQkcG9ydGxldExpbmsuZmluZCgnYScpLm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5idWlsZEZvcm0oKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQvLyBEaXNwbGF5IGZvcm0gZGlyZWNsdHk/XG5cdFx0aWYgKFVSTF9MSUZJTFRFUiB8fCBVUkxfTElGSUxURVJfRVhQUikge1xuXHRcdFx0dGhpcy5idWlsZEZvcm0oKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGJ1aWxkRm9ybSgpOiB2b2lkIHtcblx0XHRjb25zdCAkcGFnZVRvcDogSlF1ZXJ5ID0gdGhpcy4kYm9keS5maW5kKCcjY29udGVudFN1YiwgI3RvcGJhcicpO1xuXHRcdGlmICghJHBhZ2VUb3AubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IG9sZElucHV0OiBzdHJpbmcgPSAnJztcblx0XHRjb25zdCBpbnN0cnVjdGlvbnM6IHN0cmluZyA9IHRoaXMucmlnaHRzTG9nT25seVxuXHRcdFx0PyBMb2dGaWx0ZXIubXNnKCdyaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnKVxuXHRcdFx0OiBMb2dGaWx0ZXIubXNnKCdvdGhlci1saXN0LWluc3RydWN0aW9ucycpO1xuXG5cdFx0dGhpcy4kYm9keS5maW5kKCcjY2EtcnhmaWx0ZXInKS5oaWRlKCk7XG5cblx0XHQvLyBTZXQgdXAgY29uZmlnXG5cdFx0Y29uc3QgY2FzaW5nOiBib29sZWFuID0gVVJMX0xJRklMVEVSX0NBU0UgPT09ICcxJztcblx0XHRjb25zdCBoaWxpZ2h0OiBib29sZWFuID0gVVJMX0xJRklMVEVSX0hJTElHSFQgPT09ICcxJztcblx0XHRjb25zdCBpbnZlcnRlZDogYm9vbGVhbiA9IFVSTF9MSUZJTFRFUl9JTlYgPT09ICcxJztcblxuXHRcdC8vIEdlbmVyYXRlIHRoZSBmb3JtXG5cdFx0Y29uc3QgJGZpZWxkU2V0OiBKUXVlcnkgPSAkKCc8ZmllbGRzZXQ+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdyaWdodHNGaWx0ZXInKVxuXHRcdFx0LmFkZENsYXNzKHJpZ2h0c0ZpbHRlciBhcyBzdHJpbmcpXG5cdFx0XHQudGV4dChpbnN0cnVjdGlvbnMpO1xuXHRcdGNvbnN0ICRsZWdlbmQ6IEpRdWVyeSA9ICQoJzxsZWdlbmQ+JykudGV4dChMb2dGaWx0ZXIubXNnKCdsZWdlbmQnKSk7XG5cdFx0JGZpZWxkU2V0LmFwcGVuZCgkbGVnZW5kKTtcblxuXHRcdGxldCByZlNlbGVjdCA9IDw+PC8+O1xuXHRcdGlmICh0aGlzLnJpZ2h0c0xvZ09ubHkpIHtcblx0XHRcdHJmU2VsZWN0ID0gKFxuXHRcdFx0XHQ8c2VsZWN0IGlkPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX3NlbGVjdFwiPlxuXHRcdFx0XHRcdDxvcHRpb24+e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ29wdGlvbi1hZGRlZCcpKX08L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tcmVtb3ZlZCcpKX08L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tYWRkZWQtb3ItcmVtb3ZlZCcpKX08L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tYWRkZWQtcmVtb3ZlZC1zdGF0aWMnKSl9PC9vcHRpb24+XG5cdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0Y29uc3QgZmllbGRTZXRJbm5lciA9IChcblx0XHRcdDw+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX3JlZ2V4XCI+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXhcIj57bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygncmVnZXgtbGFiZWwnKSl9PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXhcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fY2hlY2tib3hlc1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydFwiPlxuXHRcdFx0XHRcdFx0PGlucHV0IGlkPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2ludmVydFwiIHR5cGU9XCJjaGVja2JveFwiIC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImdhZGdldC1sb2dfZmlsdGVyX19pbnZlcnRcIj5cblx0XHRcdFx0XHRcdFx0e213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ2ludmVydC1sYWJlbCcpKX1cblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fY2FzZVwiPlxuXHRcdFx0XHRcdFx0PGlucHV0IGlkPVwiZ2FkZ2V0LWxvZ19maWx0ZXJfX2Nhc2VcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJnYWRnZXQtbG9nX2ZpbHRlcl9fY2FzZVwiPnttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdjYXNlLWxhYmVsJykpfTwvbGFiZWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhZGdldC1sb2dfZmlsdGVyX19idXR0b25zXCI+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtbJ2NkeC1idXR0b24gY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5J119XG5cdFx0XHRcdFx0XHR2YWx1ZT1cIjBcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdmaWx0ZXItYnV0dG9uJykpfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17WydjZHgtYnV0dG9uIGNkeC1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZScsICdjZHgtYnV0dG9uLS13ZWlnaHQtcHJpbWFyeSddfVxuXHRcdFx0XHRcdFx0dmFsdWU9XCIxXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnaGlnaGxpZ2h0LWJ1dHRvbicpKX1cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHRcdC8vIEluamVjdCB0aGVzZSBIVE1MIGVsZW1lbnRzIGludG8gdGhlIGZpZWxkc2V0XG5cdFx0JGZpZWxkU2V0LmFwcGVuZChyZlNlbGVjdCwgZmllbGRTZXRJbm5lcik7XG5cdFx0JHBhZ2VUb3AuYWZ0ZXIoJGZpZWxkU2V0KTtcblxuXHRcdC8vIFNldCBwYXNzZWQgdmFsdWVzXG5cdFx0dGhpcy4kYm9keS5maW5kKCcjZ2FkZ2V0LWxvZ19maWx0ZXJfX3JlZ2V4JykudmFsKFVSTF9MSUZJTFRFUl9FWFBSID8/ICcnKTtcblx0XHR0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9fY2FzZScpLnByb3AoJ2NoZWNrZWQnLCAhY2FzaW5nKTtcblx0XHR0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9faW52ZXJ0JykucHJvcCgnY2hlY2tlZCcsIGludmVydGVkKTtcblx0XHR0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXgnKS50cmlnZ2VyKCdmb2N1cycpO1xuXG5cdFx0Ly8gQmluZCBjbGljayBhbmQgY2hhbmdlIGxpc3RlbmVyc1xuXHRcdHRoaXMuJGJvZHlcblx0XHRcdC5maW5kKCcjcmlnaHRzRmlsdGVyJylcblx0XHRcdC5maW5kKCdpbnB1dCcpXG5cdFx0XHQub24oJ2tleXVwIGNoYW5nZScsIChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0aWYgKCRlbGVtZW50LmF0dHIoJ2lkJykgIT09ICdnYWRnZXQtbG9nX2ZpbHRlcl9fcmVnZXgnKSB7XG5cdFx0XHRcdFx0dGhpcy5maWx0ZXJMaSgpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBjdXJJbnB1dDogc3RyaW5nID0gJGVsZW1lbnQudmFsKCkgYXMgc3RyaW5nO1xuXHRcdFx0XHRpZiAob2xkSW5wdXQgIT09IGN1cklucHV0KSB7XG5cdFx0XHRcdFx0b2xkSW5wdXQgPSBjdXJJbnB1dDtcblx0XHRcdFx0XHR0aGlzLmZpbHRlckxpKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdCRmaWVsZFNldC5maW5kKCdidXR0b24nKS5vbignY2xpY2snLCAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0dGhpcy5sYXN0Q2xpY2tlZCA9ICEhJGVsZW1lbnQudmFsKCk7XG5cdFx0XHR0aGlzLmZpbHRlckxpKCk7XG5cdFx0fSk7XG5cblx0XHRpZiAoVVJMX0xJRklMVEVSX0VYUFIpIHtcblx0XHRcdHRoaXMuZmlsdGVyTGkoaGlsaWdodCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBmaWx0ZXJMaShoaWxpZ2h0PzogYm9vbGVhbik6IHZvaWQge1xuXHRcdC8vIEdyYWIgdGhlIGxpc3Qgb2YgYWxsIDxsaT4gaW4gdGhlIGNvbnRlbnRcblx0XHRjb25zdCAkbGlzdEl0ZW1zOiBKUXVlcnkgPSB0aGlzLiRib2R5LmZpbmQoJyNib2R5Q29udGVudCcpLmZpbmQoJ2xpJyk7XG5cdFx0aWYgKCEkbGlzdEl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGhpbGlnaHQgPSAhIShoaWxpZ2h0IHx8IHRoaXMubGFzdENsaWNrZWQudG9TdHJpbmcoKSA9PT0gJzEnKTtcblxuXHRcdC8vIEdyYWIgb3B0aW9ucyBmcm9tIGZvcm1cblx0XHRsZXQgdHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmICh0aGlzLnJpZ2h0c0xvZ09ubHkpIHtcblx0XHRcdHR5cGUgPSB0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9fc2VsZWN0JykuYXR0cignc2VsZWN0ZWRJbmRleCcpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGludmVydCA9IHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19pbnZlcnQnKS5wcm9wKCdjaGVja2VkJykgYXMgYm9vbGVhbjtcblx0XHRjb25zdCBzZWFyY2g6IHN0cmluZyA9IHRoaXMuJGJvZHkuZmluZCgnI2dhZGdldC1sb2dfZmlsdGVyX19yZWdleCcpLnZhbCgpPy50b1N0cmluZygpID8/ICcnO1xuXHRcdGNvbnN0IGZsYWdzOiBzdHJpbmcgPSB0aGlzLiRib2R5LmZpbmQoJyNnYWRnZXQtbG9nX2ZpbHRlcl9fY2FzZScpLnByb3AoJ2NoZWNrZWQnKSA/ICdpZycgOiAnZyc7XG5cdFx0bGV0IHJlZ2V4UmY6IFJlZ0V4cCB8IHVuZGVmaW5lZDtcblx0XHR0cnkge1xuXHRcdFx0cmVnZXhSZiA9IG5ldyBSZWdFeHAoc2VhcmNoLCBmbGFncyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHR9XG5cblx0XHQvLyBUaGUgcmVnZXggdXNlZCB0byBncmFiIHRoZSBTcGVjaWFsOkxvZy9yaWdodHMgY2hhbmdlc1xuXHRcdGNvbnN0IFJFR0VYX1JJR0hUOiBSZWdFeHAgPSAvXi4qP3VzZXI6Lio/XFxzZnJvbVxccyguKj8pXFxzdG9cXHMoLio/KVxcc1xcdTIwMEUuKj8kL2k7XG5cblx0XHQvLyBJdGVyYXRlXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRsaXN0SXRlbXMpIHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0bGV0IGxvb2s6IHN0cmluZyA9ICcnO1xuXG5cdFx0XHRpZiAodGhpcy5yaWdodHNMb2dPbmx5KSB7XG5cdFx0XHRcdC8vIFNwZWNpYWw6TG9nL3JpZ2h0c1xuXHRcdFx0XHRjb25zdCBvbGRyOiBzdHJpbmcgPSAkZWxlbWVudC50ZXh0KCkucmVwbGFjZShSRUdFWF9SSUdIVCwgJyQxJyk7XG5cdFx0XHRcdGNvbnN0IG5ld3I6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS5yZXBsYWNlKFJFR0VYX1JJR0hULCAnJDInKTtcblx0XHRcdFx0Y29uc3Qgb2xkcmw6IHN0cmluZ1tdID0gb2xkci5zcGxpdCgnLCAnKTtcblx0XHRcdFx0Y29uc3QgbmV3cmw6IHN0cmluZ1tdID0gbmV3ci5zcGxpdCgnLCAnKTtcblx0XHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG9sZHJsLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG5ld3JsLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRpZiAob2xkcmxbaV0gPT09IG5ld3JsW2pdKSB7XG5cdFx0XHRcdFx0XHRcdG9sZHJsW2ldID0gJyc7XG5cdFx0XHRcdFx0XHRcdG5ld3JsW2pdID0gJyc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHJlbXI6IHN0cmluZyA9IG9sZHJsLmpvaW4oJywnKTtcblx0XHRcdFx0Y29uc3QgYWRkcjogc3RyaW5nID0gbmV3cmwuam9pbignLCcpO1xuXHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0XHRjYXNlICcwJzpcblx0XHRcdFx0XHRcdGxvb2sgPSBhZGRyO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMSc6XG5cdFx0XHRcdFx0XHRsb29rID0gcmVtcjtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJzInOlxuXHRcdFx0XHRcdFx0bG9vayA9IGAke3JlbXJ9ICR7YWRkcn1gO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMyc6XG5cdFx0XHRcdFx0XHRsb29rID0gYCR7b2xkcn0gJHtuZXdyfWA7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gQW55IG90aGVyIGxpc3Qgb2YgPGxpPiBvYmplY3RzXG5cdFx0XHRcdGxvb2sgPSAkZWxlbWVudC50ZXh0KCk7XG5cdFx0XHR9XG5cblx0XHRcdCRlbGVtZW50LmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcnKTtcblx0XHRcdCRlbGVtZW50LnNob3coKTtcblxuXHRcdFx0aWYgKHJlZ2V4UmYgJiYgKChsb29rPy5zZWFyY2gocmVnZXhSZikgPT09IC0xICYmIGludmVydCkgfHwgKGxvb2s/LnNlYXJjaChyZWdleFJmKSAhPT0gLTEgJiYgIWludmVydCkpKSB7XG5cdFx0XHRcdGlmIChoaWxpZ2h0KSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmZmZmOTknKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICghaGlsaWdodCkge1xuXHRcdFx0XHQkZWxlbWVudC5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgbXNnKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRrZXkgPSBgZmlsdGVyLSR7a2V5fWA7XG5cdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdHJldHVybiBtdy5tZXNzYWdlKGtleSkucGxhaW4oKTtcblx0fVxufVxuXG5leHBvcnQge0xvZ0ZpbHRlcn07XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9Mb2dGaWx0ZXIvTG9nRmlsdGVyLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgcmlnaHRzRmlsdGVyID0gXCJMb2dGaWx0ZXItbW9kdWxlX19yaWdodHNGaWx0ZXJfa1hUSjlXX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJyaWdodHNGaWx0ZXJcIjogcmlnaHRzRmlsdGVyXG59O1xuICAgICAgIiwgImNvbnN0IFJFR0VYX1RBUkdFVF9QQUdFOiBSZWdFeHAgPVxuXHQvXig/OmFjdGl2ZXVzZXJzfGNoZWNrdXNlcnxjb250cmlidXRpb25zfGlwYmxvY2tsaXN0fGxpbmtzZWFyY2h8bG9nfHNlYXJjaHwoPzp1bmNhdGVnb3Jpenx1bnVzfHdhbnQpZWQoPzpjYXRlZ29yaXx0ZW1wbGF0KWVzfHdhbnRlZGZpbGVzfCg/OnNob3J0fGxvbmd8YW5jaWVudHx1bmNhdGVnb3JpemVkfHVud2F0Y2hlZHx3YW50ZWR8cHJvdGVjdGVkfGRlYWRlbmR8bG9uZWx5fG5ldylwYWdlc3xmZXdlc3RyZXZpc2lvbnN8d2l0aG91dGludGVyd2lraXwoPzpkb3VibGV8YnJva2VuKXJlZGlyZWN0c3xwcm90ZWN0ZWR0aXRsZXN8Y3Jvc3NuYW1lc3BhY2VsaW5rc3xyZWNlbnRjaGFuZ2VzfGNhdGVnb3JpZXN8ZGlzYW1iaWd1YXRpb25zfGxpc3RyZWRpcmVjdHN8Z2xvYmFsdXNlcnN8Z2xvYmFsYmxvY2tsaXN0fGxpc3R1c2Vyc3x3YXRjaGxpc3R8bW9zdCg/OmxpbmtlZHxyZXZpc2lvbnN8Y2F0ZWdvcmllcyl8bnVrZXx3aGF0bGlua3NoZXJlKSQvaTtcblxuZXhwb3J0IHtSRUdFWF9UQVJHRVRfUEFHRX07XG4iLCAiLyoqXG4gKiBMb2cgZmlsdGVyIHNjcmlwdFxuICpcbiAqIENyZWF0ZWQgYnkgU3BsYXJrYVxuICogQW1lbmRlZCBieSBNaWtlLmxpZmVndWFyZCAmIEx1cG9cbiAqIFBhcnRpYWxseSByZXdyaXR0ZW4gYnkgRGllQnVjaGVcbiAqXG4gKiA8bGk+IGVsZW1lbnQgRmlsdGVyIFNjcmlwdCwgdmVyc2lvbiBbMC4yXVxuICogU2hvdWxkIGN1cnJlbnRseSB3b3JrIG9uIGFsbCBrbm93biBza2lucyAod2l0aCBhICNjb250ZW50U3ViIG9yICN0b3BiYXIpXG4gKlxuICogbXcudXRpbC5nZXRVcmwoIG13LmNvbmZpZy5nZXQoICd3Z1BhZ2VOYW1lJyApICkgKyAnPycgK1xuICogJ3dpdGhKUz1NZWRpYVdpa2k6R2FkZ2V0LUxvZ0ZpbHRlci5qcyZsaWZpbHRlcj0xJmxpZmlsdGVyZXhwcj1URVNUJmxpZmlsdGVyY2FzZSZsaWZpbHRlcmhpbGlnaHQmbGlmaWx0ZXJpbnYnXG4gKi9cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtMb2dGaWx0ZXJ9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7UkVHRVhfVEFSR0VUX1BBR0V9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbihmdW5jdGlvbiBsb2dGaWx0ZXIoKTogdm9pZCB7XG5cdGNvbnN0IHtjb25maWdLZXl9ID0gT1BUSU9OUztcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChjb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KGNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Ly8gV2hlbiB0byBlbmFibGUgYWxsIHRoaXNcblx0aWYgKFxuXHRcdHdnQWN0aW9uICE9PSAnaGlzdG9yeScgJiZcblx0XHQhbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcicpICYmXG5cdFx0IVJFR0VYX1RBUkdFVF9QQUdFLnRlc3Qod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgfHwgJycpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdG5ldyBMb2dGaWx0ZXIoJGJvZHkpLmFkZFBvcnRsZXRMaW5rKCk7IC8vIExvYWRcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBLENBQUE7QUFBQUMsU0FBQUQsaUJBQUE7RUFBQUUsV0FBQUEsTUFBQUE7RUFBQUMsU0FBQUEsTUFBQUM7QUFBQSxDQUFBO0FBQ0MsSUFBQUYsWUFBYTtBQURkLElBQUFFLGtCQUFBO0VBQ0NGO0FBQ0Q7O0FDRkEsSUFBTUcsV0FBVztFQUNoQix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyxzQ0FBc0M7RUFDdEMsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM1Qjs7QUNmQSxJQUFBQyxvQkFBa0JDLFFBQUFDLFFBQUEsZ0JBQUEsR0FBQSxDQUFBOztBQ0FYLElBQU1DLGVBQWU7O0FERzVCLElBQU1DLGVBQThCQyxHQUFHQyxLQUFLQyxjQUFjLFVBQVU7QUFDcEUsSUFBTUMsb0JBQW1DSCxHQUFHQyxLQUFLQyxjQUFjLGNBQWM7QUFDN0UsSUFBTUUsb0JBQW1DSixHQUFHQyxLQUFLQyxjQUFjLGNBQWM7QUFDN0UsSUFBTUcsdUJBQXNDTCxHQUFHQyxLQUFLQyxjQUFjLGlCQUFpQjtBQUNuRixJQUFNSSxtQkFBa0NOLEdBQUdDLEtBQUtDLGNBQWMsYUFBYTtBQUUzRSxJQUFNSyxZQUFOLE1BQU1DLFdBQVU7RUFDRUMsZ0JBQWdCQyxTQUFTQyxLQUFLQyxTQUFTLGFBQWEsS0FBS0YsU0FBU0MsS0FBS0MsU0FBUyxZQUFZO0VBQ3JHQyxjQUFjO0VBQ2RDO0VBRURDLFlBQVlELE9BQWdDO0FBQ2xELFNBQUtBLFFBQVFBO0FBRWJkLE9BQUdnQixTQUFTQyxJQUFJdkIsUUFBUTtFQUN6QjtFQUVPd0IsaUJBQXVCO0FBRTdCLFVBQU1DLGNBQW9DbkIsR0FBR0MsS0FBS2lCLGVBQ2pELEtBQUtKLE1BQU1NLEtBQUssYUFBYSxFQUFFQyxTQUFTLGVBQWUsUUFDdkQsS0FDQWIsV0FBVWMsSUFBSSxjQUFjLEdBQzVCLGVBQ0FkLFdBQVVjLElBQUkscUJBQXFCLENBQ3BDO0FBRUEsUUFBSUgsYUFBYTtBQUNoQixZQUFNSSxlQUF1QkMsRUFBRUwsV0FBVztBQUMxQ0ksbUJBQWFILEtBQUssR0FBRyxFQUFFSyxHQUFHLFNBQVVDLFdBQW1DO0FBQ3RFQSxjQUFNQyxlQUFlO0FBQ3JCLGFBQUtDLFVBQVU7TUFDaEIsQ0FBQztJQUNGO0FBRUEsUUFBSTdCLGdCQUFnQkssbUJBQW1CO0FBQ3RDLFdBQUt3QixVQUFVO0lBQ2hCO0VBQ0Q7RUFFUUEsWUFBa0I7QUFDekIsVUFBTUMsV0FBbUIsS0FBS2YsTUFBTU0sS0FBSyxzQkFBc0I7QUFDL0QsUUFBSSxDQUFDUyxTQUFTUixRQUFRO0FBQ3JCO0lBQ0Q7QUFFQSxRQUFJUyxXQUFtQjtBQUN2QixVQUFNQyxlQUF1QixLQUFLdEIsZ0JBQy9CRCxXQUFVYyxJQUFJLDBCQUEwQixJQUN4Q2QsV0FBVWMsSUFBSSx5QkFBeUI7QUFFMUMsU0FBS1IsTUFBTU0sS0FBSyxjQUFjLEVBQUVZLEtBQUs7QUFHckMsVUFBTUMsU0FBa0I5QixzQkFBc0I7QUFDOUMsVUFBTStCLFVBQW1CN0IseUJBQXlCO0FBQ2xELFVBQU04QixXQUFvQjdCLHFCQUFxQjtBQUcvQyxVQUFNOEIsWUFBb0JaLEVBQUUsWUFBWSxFQUN0Q2EsS0FBSyxNQUFNLGNBQWMsRUFDekJDLFNBQVN4QyxZQUFzQixFQUMvQnlDLEtBQUtSLFlBQVk7QUFDbkIsVUFBTVMsVUFBa0JoQixFQUFFLFVBQVUsRUFBRWUsS0FBSy9CLFdBQVVjLElBQUksUUFBUSxDQUFDO0FBQ2xFYyxjQUFVSyxPQUFPRCxPQUFPO0FBRXhCLFFBQUlFLFdBQVcvQyxrQ0FBQUgsUUFBQW1ELGNBQUFoRCxrQkFBQUgsUUFBQW9ELFVBQUEsSUFBRTtBQUNqQixRQUFJLEtBQUtuQyxlQUFlO0FBQ3ZCaUMsaUJBQ0MvQyxrQ0FBQUgsUUFBQW1ELGNBQUMsVUFBQTtRQUFPRSxJQUFHO01BQUEsR0FDVmxELGtDQUFBSCxRQUFBbUQsY0FBQyxVQUFBLE1BQVEzQyxHQUFHOEMsS0FBS0MsT0FBT3ZDLFdBQVVjLElBQUksY0FBYyxDQUFDLENBQUUsR0FDdkQzQixrQ0FBQUgsUUFBQW1ELGNBQUMsVUFBQSxNQUFRM0MsR0FBRzhDLEtBQUtDLE9BQU92QyxXQUFVYyxJQUFJLGdCQUFnQixDQUFDLENBQUUsR0FDekQzQixrQ0FBQUgsUUFBQW1ELGNBQUMsVUFBQSxNQUFRM0MsR0FBRzhDLEtBQUtDLE9BQU92QyxXQUFVYyxJQUFJLHlCQUF5QixDQUFDLENBQUUsR0FDbEUzQixrQ0FBQUgsUUFBQW1ELGNBQUMsVUFBQSxNQUFRM0MsR0FBRzhDLEtBQUtDLE9BQU92QyxXQUFVYyxJQUFJLDZCQUE2QixDQUFDLENBQUUsQ0FDdkU7SUFFRjtBQUNBLFVBQU0wQixnQkFDTHJELGtDQUFBSCxRQUFBbUQsY0FBQWhELGtCQUFBSCxRQUFBb0QsVUFBQSxNQUNDakQsa0NBQUFILFFBQUFtRCxjQUFDLE9BQUE7TUFBSU0sV0FBVTtJQUFBLEdBQ2R0RCxrQ0FBQUgsUUFBQW1ELGNBQUMsU0FBQTtNQUFNTyxTQUFRO0lBQUEsR0FBNEJsRCxHQUFHOEMsS0FBS0MsT0FBT3ZDLFdBQVVjLElBQUksYUFBYSxDQUFDLENBQUUsR0FDeEYzQixrQ0FBQUgsUUFBQW1ELGNBQUMsU0FBQTtNQUFNRSxJQUFHO0lBQUEsQ0FBMkIsQ0FDdEMsR0FDQWxELGtDQUFBSCxRQUFBbUQsY0FBQyxPQUFBO01BQUlNLFdBQVU7SUFBQSxHQUNkdEQsa0NBQUFILFFBQUFtRCxjQUFDLE9BQUE7TUFBSU0sV0FBVTtJQUFBLEdBQ2R0RCxrQ0FBQUgsUUFBQW1ELGNBQUMsU0FBQTtNQUFNRSxJQUFHO01BQTRCTSxNQUFLO0lBQUEsQ0FBVyxHQUN0RHhELGtDQUFBSCxRQUFBbUQsY0FBQyxTQUFBO01BQU1PLFNBQVE7SUFBQSxHQUNibEQsR0FBRzhDLEtBQUtDLE9BQU92QyxXQUFVYyxJQUFJLGNBQWMsQ0FBQyxDQUM5QyxDQUNELEdBQ0EzQixrQ0FBQUgsUUFBQW1ELGNBQUMsT0FBQTtNQUFJTSxXQUFVO0lBQUEsR0FDZHRELGtDQUFBSCxRQUFBbUQsY0FBQyxTQUFBO01BQU1FLElBQUc7TUFBMEJNLE1BQUs7SUFBQSxDQUFXLEdBQ3BEeEQsa0NBQUFILFFBQUFtRCxjQUFDLFNBQUE7TUFBTU8sU0FBUTtJQUFBLEdBQTJCbEQsR0FBRzhDLEtBQUtDLE9BQU92QyxXQUFVYyxJQUFJLFlBQVksQ0FBQyxDQUFFLENBQ3ZGLENBQ0QsR0FDQTNCLGtDQUFBSCxRQUFBbUQsY0FBQyxPQUFBO01BQUlNLFdBQVU7SUFBQSxHQUNkdEQsa0NBQUFILFFBQUFtRCxjQUFDLFVBQUE7TUFDQU0sV0FBVyxDQUFDLDZDQUE2Qyw0QkFBNEI7TUFDckZHLE9BQU07SUFBQSxHQUVMcEQsR0FBRzhDLEtBQUtDLE9BQU92QyxXQUFVYyxJQUFJLGVBQWUsQ0FBQyxDQUMvQyxHQUNBM0Isa0NBQUFILFFBQUFtRCxjQUFDLFVBQUE7TUFDQU0sV0FBVyxDQUFDLDZDQUE2Qyw0QkFBNEI7TUFDckZHLE9BQU07SUFBQSxHQUVMcEQsR0FBRzhDLEtBQUtDLE9BQU92QyxXQUFVYyxJQUFJLGtCQUFrQixDQUFDLENBQ2xELENBQ0QsQ0FDRDtBQUdEYyxjQUFVSyxPQUFPQyxVQUFVTSxhQUFhO0FBQ3hDbkIsYUFBU3dCLE1BQU1qQixTQUFTO0FBR3hCLFNBQUt0QixNQUFNTSxLQUFLLDJCQUEyQixFQUFFa0MsSUFBSWxELHNCQUFBLFFBQUFBLHNCQUFBLFNBQUFBLG9CQUFxQixFQUFFO0FBQ3hFLFNBQUtVLE1BQU1NLEtBQUssMEJBQTBCLEVBQUVtQyxLQUFLLFdBQVcsQ0FBQ3RCLE1BQU07QUFDbkUsU0FBS25CLE1BQU1NLEtBQUssNEJBQTRCLEVBQUVtQyxLQUFLLFdBQVdwQixRQUFRO0FBQ3RFLFNBQUtyQixNQUFNTSxLQUFLLDJCQUEyQixFQUFFb0MsUUFBUSxPQUFPO0FBRzVELFNBQUsxQyxNQUNITSxLQUFLLGVBQWUsRUFDcEJBLEtBQUssT0FBTyxFQUNaSyxHQUFHLGdCQUFpQkMsV0FBZ0I7QUFDcEMsWUFBTStCLFdBQW1CakMsRUFBRUUsTUFBTWdDLGFBQWE7QUFDOUMsVUFBSUQsU0FBU3BCLEtBQUssSUFBSSxNQUFNLDRCQUE0QjtBQUN2RCxhQUFLc0IsU0FBUztBQUNkO01BQ0Q7QUFDQSxZQUFNQyxXQUFtQkgsU0FBU0gsSUFBSTtBQUN0QyxVQUFJeEIsYUFBYThCLFVBQVU7QUFDMUI5QixtQkFBVzhCO0FBQ1gsYUFBS0QsU0FBUztNQUNmO0lBQ0QsQ0FBQztBQUNGdkIsY0FBVWhCLEtBQUssUUFBUSxFQUFFSyxHQUFHLFNBQVVDLFdBQWdCO0FBQ3JELFlBQU0rQixXQUFtQmpDLEVBQUVFLE1BQU1nQyxhQUFhO0FBQzlDLFdBQUs3QyxjQUFjLENBQUMsQ0FBQzRDLFNBQVNILElBQUk7QUFDbEMsV0FBS0ssU0FBUztJQUNmLENBQUM7QUFFRCxRQUFJdkQsbUJBQW1CO0FBQ3RCLFdBQUt1RCxTQUFTekIsT0FBTztJQUN0QjtFQUNEO0VBRVF5QixTQUFTekIsU0FBeUI7QUFBQSxRQUFBMkIsdUJBQUFDO0FBRXpDLFVBQU1DLGFBQXFCLEtBQUtqRCxNQUFNTSxLQUFLLGNBQWMsRUFBRUEsS0FBSyxJQUFJO0FBQ3BFLFFBQUksQ0FBQzJDLFdBQVcxQyxRQUFRO0FBQ3ZCO0lBQ0Q7QUFFQWEsY0FBVSxDQUFDLEVBQUVBLFdBQVcsS0FBS3JCLFlBQVltRCxTQUFTLE1BQU07QUFHeEQsUUFBSWI7QUFDSixRQUFJLEtBQUsxQyxlQUFlO0FBQ3ZCMEMsYUFBTyxLQUFLckMsTUFBTU0sS0FBSyw0QkFBNEIsRUFBRWlCLEtBQUssZUFBZTtJQUMxRTtBQUVBLFVBQU00QixTQUFTLEtBQUtuRCxNQUFNTSxLQUFLLDRCQUE0QixFQUFFbUMsS0FBSyxTQUFTO0FBQzNFLFVBQU1XLFVBQUFMLHlCQUFBQyx1QkFBaUIsS0FBS2hELE1BQU1NLEtBQUssMkJBQTJCLEVBQUVrQyxJQUFJLE9BQUEsUUFBQVEseUJBQUEsU0FBQSxTQUFqREEscUJBQW9ERSxTQUFTLE9BQUEsUUFBQUgsMEJBQUEsU0FBQUEsd0JBQUs7QUFDekYsVUFBTU0sUUFBZ0IsS0FBS3JELE1BQU1NLEtBQUssMEJBQTBCLEVBQUVtQyxLQUFLLFNBQVMsSUFBSSxPQUFPO0FBQzNGLFFBQUlhO0FBQ0osUUFBSTtBQUNIQSxnQkFBVSxJQUFJQyxPQUFPSCxRQUFRQyxLQUFLO0lBQ25DLFNBQVNHLE9BQU87QUFDZkMsY0FBUUMsSUFBSUYsS0FBSztJQUNsQjtBQUdBLFVBQU1HLGNBQXNCO0FBQUEsUUFBQUMsYUFBQUMsMkJBR05aLFVBQUEsR0FBQWE7QUFBQSxRQUFBO0FBQXRCLFdBQUFGLFdBQUFHLEVBQUEsR0FBQSxFQUFBRCxTQUFBRixXQUFBSSxFQUFBLEdBQUFDLFFBQWtDO0FBQUEsWUFBQUMsT0FBQUM7QUFBQSxjQUF2QkMsVUFBQU4sT0FBQXhCO0FBQ1YsY0FBTUssV0FBbUJqQyxFQUFFMEQsT0FBTztBQUNsQyxZQUFJQyxPQUFlO0FBRW5CLFlBQUksS0FBSzFFLGVBQWU7QUFFdkIsZ0JBQU0yRSxPQUFlM0IsU0FBU2xCLEtBQUssRUFBRThDLFFBQVFaLGFBQWEsSUFBSTtBQUM5RCxnQkFBTWEsT0FBZTdCLFNBQVNsQixLQUFLLEVBQUU4QyxRQUFRWixhQUFhLElBQUk7QUFDOUQsZ0JBQU1jLFFBQWtCSCxLQUFLSSxNQUFNLElBQUk7QUFDdkMsZ0JBQU1DLFFBQWtCSCxLQUFLRSxNQUFNLElBQUk7QUFDdkMsbUJBQVNFLElBQVksR0FBR0EsSUFBSUgsTUFBTWxFLFFBQVFxRSxLQUFLO0FBQzlDLHFCQUFTQyxJQUFZLEdBQUdBLElBQUlGLE1BQU1wRSxRQUFRc0UsS0FBSztBQUM5QyxrQkFBSUosTUFBTUcsQ0FBQyxNQUFNRCxNQUFNRSxDQUFDLEdBQUc7QUFDMUJKLHNCQUFNRyxDQUFDLElBQUk7QUFDWEQsc0JBQU1FLENBQUMsSUFBSTtjQUNaO1lBQ0Q7VUFDRDtBQUNBLGdCQUFNQyxPQUFlTCxNQUFNTSxLQUFLLEdBQUc7QUFDbkMsZ0JBQU1DLE9BQWVMLE1BQU1JLEtBQUssR0FBRztBQUNuQyxrQkFBUTFDLE1BQUE7WUFDUCxLQUFLO0FBQ0pnQyxxQkFBT1c7QUFDUDtZQUNELEtBQUs7QUFDSlgscUJBQU9TO0FBQ1A7WUFDRCxLQUFLO0FBQ0pULHFCQUFBLEdBQUFZLE9BQVVILE1BQUksR0FBQSxFQUFBRyxPQUFJRCxJQUFJO0FBQ3RCO1lBQ0QsS0FBSztBQUNKWCxxQkFBQSxHQUFBWSxPQUFVWCxNQUFJLEdBQUEsRUFBQVcsT0FBSVQsSUFBSTtBQUN0QjtVQUNGO1FBQ0QsT0FBTztBQUVOSCxpQkFBTzFCLFNBQVNsQixLQUFLO1FBQ3RCO0FBRUFrQixpQkFBU3VDLElBQUksb0JBQW9CLEVBQUU7QUFDbkN2QyxpQkFBU3dDLEtBQUs7QUFFZCxZQUFJN0IsY0FBYVksUUFBQUcsVUFBQSxRQUFBSCxVQUFBLFNBQUEsU0FBQUEsTUFBTWQsT0FBT0UsT0FBTyxPQUFNLE1BQU1ILFlBQVlnQixTQUFBRSxVQUFBLFFBQUFGLFdBQUEsU0FBQSxTQUFBQSxPQUFNZixPQUFPRSxPQUFPLE9BQU0sTUFBTSxDQUFDSCxTQUFVO0FBQ3ZHLGNBQUkvQixTQUFTO0FBQ1p1QixxQkFBU3VDLElBQUksb0JBQW9CLFNBQVM7VUFDM0M7UUFDRCxXQUFXLENBQUM5RCxTQUFTO0FBQ3BCdUIsbUJBQVN6QixLQUFLO1FBQ2Y7TUFDRDtJQUFBLFNBQUFrRSxLQUFBO0FBQUF4QixpQkFBQXlCLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUF4QixpQkFBQTBCLEVBQUE7SUFBQTtFQUNEO0VBRUEsT0FBZTlFLElBQUkrRSxLQUFxQjtBQUN2Q0EsVUFBQSxVQUFBTixPQUFnQk0sR0FBRztBQUluQixXQUFPckcsR0FBR3NHLFFBQVFELEdBQUcsRUFBRUUsTUFBTTtFQUM5QjtBQUNEOztBRWhQQSxJQUFNQyxvQkFDTDs7QUNlRCxJQUFBQyxxQkFBc0I1RyxRQUFBLGlCQUFBO0NBRXJCLFNBQVM2RyxZQUFrQjtBQUMzQixRQUFNO0lBQUNuSCxXQUFBb0g7RUFBUyxJQUFJdEg7QUFDcEIsUUFBTTtJQUFDdUg7SUFBVUM7RUFBMEIsSUFBSTdHLEdBQUc4RyxPQUFPQyxJQUFJO0FBRzdELE1BQUkvRyxHQUFHOEcsT0FBT0MsSUFBSUosVUFBUyxHQUFHO0FBQzdCO0VBQ0Q7QUFFQTNHLEtBQUc4RyxPQUFPN0YsSUFBSTBGLFlBQVcsSUFBSTtBQUc3QixNQUNDQyxhQUFhLGFBQ2IsQ0FBQzVHLEdBQUdDLEtBQUtDLGNBQWMsVUFBVSxLQUNqQyxDQUFDc0csa0JBQWtCUSxLQUFLSCw4QkFBOEIsRUFBRSxHQUN2RDtBQUNEO0VBQ0Q7QUFFQSxRQUFBLEdBQUtKLG1CQUFBUSxTQUFRLEVBQUVDLEtBQU1wRyxXQUF5QztBQUM3RCxRQUFJUCxVQUFVTyxLQUFLLEVBQUVJLGVBQWU7RUFDckMsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbIm9wdGlvbnNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJjb25maWdLZXkiLCAiZGVmYXVsdCIsICJvcHRpb25zX2RlZmF1bHQiLCAiTUVTU0FHRVMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgInJpZ2h0c0ZpbHRlciIsICJVUkxfTElGSUxURVIiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIlVSTF9MSUZJTFRFUl9DQVNFIiwgIlVSTF9MSUZJTFRFUl9FWFBSIiwgIlVSTF9MSUZJTFRFUl9ISUxJR0hUIiwgIlVSTF9MSUZJTFRFUl9JTlYiLCAiTG9nRmlsdGVyIiwgIl9Mb2dGaWx0ZXIiLCAicmlnaHRzTG9nT25seSIsICJsb2NhdGlvbiIsICJocmVmIiwgImluY2x1ZGVzIiwgImxhc3RDbGlja2VkIiwgIiRib2R5IiwgImNvbnN0cnVjdG9yIiwgIm1lc3NhZ2VzIiwgInNldCIsICJhZGRQb3J0bGV0TGluayIsICJwb3J0bGV0TGluayIsICJmaW5kIiwgImxlbmd0aCIsICJtc2ciLCAiJHBvcnRsZXRMaW5rIiwgIiQiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiYnVpbGRGb3JtIiwgIiRwYWdlVG9wIiwgIm9sZElucHV0IiwgImluc3RydWN0aW9ucyIsICJoaWRlIiwgImNhc2luZyIsICJoaWxpZ2h0IiwgImludmVydGVkIiwgIiRmaWVsZFNldCIsICJhdHRyIiwgImFkZENsYXNzIiwgInRleHQiLCAiJGxlZ2VuZCIsICJhcHBlbmQiLCAicmZTZWxlY3QiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJpZCIsICJodG1sIiwgImVzY2FwZSIsICJmaWVsZFNldElubmVyIiwgImNsYXNzTmFtZSIsICJodG1sRm9yIiwgInR5cGUiLCAidmFsdWUiLCAiYWZ0ZXIiLCAidmFsIiwgInByb3AiLCAidHJpZ2dlciIsICIkZWxlbWVudCIsICJjdXJyZW50VGFyZ2V0IiwgImZpbHRlckxpIiwgImN1cklucHV0IiwgIl90aGlzJCRib2R5JGZpbmQkdmFsJCIsICJfdGhpcyQkYm9keSRmaW5kJHZhbCIsICIkbGlzdEl0ZW1zIiwgInRvU3RyaW5nIiwgImludmVydCIsICJzZWFyY2giLCAiZmxhZ3MiLCAicmVnZXhSZiIsICJSZWdFeHAiLCAiZXJyb3IiLCAiY29uc29sZSIsICJsb2ciLCAiUkVHRVhfUklHSFQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiX2xvb2siLCAiX2xvb2syIiwgImVsZW1lbnQiLCAibG9vayIsICJvbGRyIiwgInJlcGxhY2UiLCAibmV3ciIsICJvbGRybCIsICJzcGxpdCIsICJuZXdybCIsICJpIiwgImoiLCAicmVtciIsICJqb2luIiwgImFkZHIiLCAiY29uY2F0IiwgImNzcyIsICJzaG93IiwgImVyciIsICJlIiwgImYiLCAia2V5IiwgIm1lc3NhZ2UiLCAicGxhaW4iLCAiUkVHRVhfVEFSR0VUX1BBR0UiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImxvZ0ZpbHRlciIsICJjb25maWdLZXkyIiwgIndnQWN0aW9uIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAidGVzdCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==
