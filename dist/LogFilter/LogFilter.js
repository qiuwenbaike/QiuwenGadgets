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
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};
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
//! src/LogFilter/modules/constant.ts
var REGEX_TARGET_PAGE = /^(?:activeusers|checkuser|contributions|ipblocklist|linksearch|log|search|(?:uncategoriz|unus|want)ed(?:categori|templat)es|wantedfiles|(?:short|long|ancient|uncategorized|unwatched|wanted|protected|deadend|lonely|new)pages|fewestrevisions|withoutinterwiki|(?:double|broken)redirects|protectedtitles|crossnamespacelinks|recentchanges|categories|disambiguations|listredirects|globalusers|globalblocklist|listusers|watchlist|most(?:linked|revisions|categories)|nuke|whatlinkshere)$/i;
var URL_LIFILTER = mw.util.getParamValue("lifilter");
var URL_LIFILTER_CASE = mw.util.getParamValue("lifiltercase");
var URL_LIFILTER_EXPR = mw.util.getParamValue("lifilterexpr");
var URL_LIFILTER_HILIGHT = mw.util.getParamValue("lifilterhilight");
var URL_LIFILTER_INV = mw.util.getParamValue("lifilterinv");
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
//! src/LogFilter/modules/core.ts
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
    const $pageTop = this.$body.find("#contentSub,#topbar");
    if (!$pageTop.length) {
      return;
    }
    let fieldsetHtml = "";
    let oldInput = "";
    const instructions = this.rightsLogOnly ? _LogFilter.msg("rights-list-instructions") : _LogFilter.msg("other-list-instructions");
    this.$body.find("#ca-rxfilter").hide();
    const casing = URL_LIFILTER_CASE === "1";
    const hilight = URL_LIFILTER_HILIGHT === "1";
    const inverted = URL_LIFILTER_INV === "1";
    const $fieldSet = $("<fieldset>").attr("id", "rightsFilter").text(instructions);
    const $legend = $("<legend>").text(_LogFilter.msg("legend"));
    $fieldSet.append($legend);
    if (this.rightsLogOnly) {
      fieldsetHtml += '<select id="rfSelect">';
      fieldsetHtml += "<option>".concat(mw.html.escape(_LogFilter.msg("option-added")), "</option>");
      fieldsetHtml += "<option>".concat(mw.html.escape(_LogFilter.msg("option-removed")), "</option>");
      fieldsetHtml += "<option>".concat(mw.html.escape(_LogFilter.msg("option-added-or-removed")), "</option>");
      fieldsetHtml += "<option>".concat(mw.html.escape(_LogFilter.msg("option-added-removed-static")), "</option>");
      fieldsetHtml += "</select>";
    }
    fieldsetHtml += '<label for="rfRegex">'.concat(mw.html.escape(_LogFilter.msg("regex-label")), '</label><input id="rfRegex">');
    fieldsetHtml += '<input id="rfInvert" type="checkbox"><label for="rfInvert">'.concat(mw.html.escape(_LogFilter.msg("invert-label")), "</label>");
    fieldsetHtml += '<input id="rfCase" type="checkbox"><label for="rfCase">'.concat(mw.html.escape(_LogFilter.msg("case-label")), "</label>");
    fieldsetHtml += '<button class="cdx-button cdx-button--action-progressive cdx-button--weight-primary" value="0">'.concat(mw.html.escape(_LogFilter.msg("filter-button")), "</button>");
    fieldsetHtml += '<button class="cdx-button cdx-button--action-progressive cdx-button--weight-primary" value="1">'.concat(mw.html.escape(_LogFilter.msg("highlight-button")), "</button>");
    $fieldSet.append(fieldsetHtml);
    $pageTop.after($fieldSet);
    this.$body.find("#rfRegex").val(URL_LIFILTER_EXPR !== null && URL_LIFILTER_EXPR !== void 0 ? URL_LIFILTER_EXPR : "");
    this.$body.find("#rfCase").prop("checked", !casing);
    this.$body.find("#rfInvert").prop("checked", inverted);
    this.$body.find("#rfRegex").trigger("focus");
    this.$body.find("#rightsFilter").find("input").on("keyup change", (event) => {
      const $element = $(event.currentTarget);
      if ($element.attr("id") !== "rfRegex") {
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
      type = this.$body.find("#rfSelect").attr("selectedIndex");
    }
    const invert = this.$body.find("#rfInvert").prop("checked");
    const search = (_this$$body$find$val$ = (_this$$body$find$val = this.$body.find("#rfRegex").val()) === null || _this$$body$find$val === void 0 ? void 0 : _this$$body$find$val.toString()) !== null && _this$$body$find$val$ !== void 0 ? _this$$body$find$val$ : "";
    const flags = this.$body.find("#rfCase").prop("checked") ? "ig" : "g";
    let regexRf;
    try {
      regexRf = new RegExp("".concat(search), "".concat(flags));
    } catch (error) {
      console.log(error);
    }
    const REGEX_RIGHT = /^.*?user:.*?\sfrom\s(.*?)\sto\s(.*?)\s\u200E.*?$/i;
    var _iterator = _createForOfIteratorHelper($listItems), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var _look, _look2;
        const element = _step.value;
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
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  static msg(key) {
    key = "filter-".concat(key);
    return mw.message(key).plain();
  }
};
//! src/LogFilter/LogFilter.ts
var import_ext_gadget = require("ext.gadget.Util");
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
  if (wgAction !== "history" && !URL_LIFILTER && !REGEX_TARGET_PAGE.test(wgCanonicalSpecialPageName || "")) {
    return;
  }
  void (0, import_ext_gadget.getBody)().then(($body) => {
    new LogFilter($body).addPortletLink();
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ0ZpbHRlci9vcHRpb25zLmpzb24iLCAic3JjL0xvZ0ZpbHRlci9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9Mb2dGaWx0ZXIvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvTG9nRmlsdGVyL21vZHVsZXMvY29yZS50cyIsICJzcmMvTG9nRmlsdGVyL0xvZ0ZpbHRlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1Mb2dGaWx0ZXJfX0luaXRpYWxpemVkXCJcbn1cbiIsICJjb25zdCBSRUdFWF9UQVJHRVRfUEFHRTogUmVnRXhwID1cblx0L14oPzphY3RpdmV1c2Vyc3xjaGVja3VzZXJ8Y29udHJpYnV0aW9uc3xpcGJsb2NrbGlzdHxsaW5rc2VhcmNofGxvZ3xzZWFyY2h8KD86dW5jYXRlZ29yaXp8dW51c3x3YW50KWVkKD86Y2F0ZWdvcml8dGVtcGxhdCllc3x3YW50ZWRmaWxlc3woPzpzaG9ydHxsb25nfGFuY2llbnR8dW5jYXRlZ29yaXplZHx1bndhdGNoZWR8d2FudGVkfHByb3RlY3RlZHxkZWFkZW5kfGxvbmVseXxuZXcpcGFnZXN8ZmV3ZXN0cmV2aXNpb25zfHdpdGhvdXRpbnRlcndpa2l8KD86ZG91YmxlfGJyb2tlbilyZWRpcmVjdHN8cHJvdGVjdGVkdGl0bGVzfGNyb3NzbmFtZXNwYWNlbGlua3N8cmVjZW50Y2hhbmdlc3xjYXRlZ29yaWVzfGRpc2FtYmlndWF0aW9uc3xsaXN0cmVkaXJlY3RzfGdsb2JhbHVzZXJzfGdsb2JhbGJsb2NrbGlzdHxsaXN0dXNlcnN8d2F0Y2hsaXN0fG1vc3QoPzpsaW5rZWR8cmV2aXNpb25zfGNhdGVnb3JpZXMpfG51a2V8d2hhdGxpbmtzaGVyZSkkL2k7XG5cbmNvbnN0IFVSTF9MSUZJTFRFUjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXInKTtcbmNvbnN0IFVSTF9MSUZJTFRFUl9DQVNFOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcmNhc2UnKTtcbmNvbnN0IFVSTF9MSUZJTFRFUl9FWFBSOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcmV4cHInKTtcbmNvbnN0IFVSTF9MSUZJTFRFUl9ISUxJR0hUOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcmhpbGlnaHQnKTtcbmNvbnN0IFVSTF9MSUZJTFRFUl9JTlY6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyaW52Jyk7XG5cbmV4cG9ydCB7UkVHRVhfVEFSR0VUX1BBR0UsIFVSTF9MSUZJTFRFUiwgVVJMX0xJRklMVEVSX0NBU0UsIFVSTF9MSUZJTFRFUl9FWFBSLCBVUkxfTElGSUxURVJfSElMSUdIVCwgVVJMX0xJRklMVEVSX0lOVn07XG4iLCAiY29uc3QgTUVTU0FHRVMgPSB7XG5cdCdmaWx0ZXItcG9ydGxldC10ZXh0JzogJ+i/h+a7pCcsXG5cdCdmaWx0ZXItcG9ydGxldC1kZXNjcmlwdGlvbic6ICfmiZPlvIDkuqTkupLlvI/ml6Xlv5fmraPliJnov4fmu6TlmagnLFxuXHQnZmlsdGVyLWdhZGdldC1wYWdlJzogJ01lZGlhV2lraTpHYWRnZXQtTG9nRmlsdGVyLmpzJyxcblx0J2ZpbHRlci1yaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnOiAn5q2j5YiZ6KGo6L6+5byP6L+H5ruk5Lul56m65qC85YiG6ZqU55qE5p2D6ZmQ5YiX6KGo44CCJyxcblx0J2ZpbHRlci1vdGhlci1saXN0LWluc3RydWN0aW9ucyc6ICfmraPliJnooajovr7lvI/ov4fmu6TmnKzliJfooajnmoTnuq/mlofmnKzmoLflvI/jgIInLFxuXHQnZmlsdGVyLWxlZ2VuZCc6ICfov4fmu6TliJfooagnLFxuXHQnZmlsdGVyLW9wdGlvbi1hZGRlZCc6ICfmt7vliqDmnYPpmZAnLFxuXHQnZmlsdGVyLW9wdGlvbi1yZW1vdmVkJzogJ+WIoOmZpOadg+mZkCcsXG5cdCdmaWx0ZXItb3B0aW9uLWFkZGVkLW9yLXJlbW92ZWQnOiAn5re75Yqg5oiW5Yig6Zmk5p2D6ZmQJyxcblx0J2ZpbHRlci1vcHRpb24tYWRkZWQtcmVtb3ZlZC1zdGF0aWMnOiAn5bey5re75YqgL+W3suenu+mZpC/kv53mjIHkuI3lj5gnLFxuXHQnZmlsdGVyLXJlZ2V4LWxhYmVsJzogJ+ato+WImeihqOi+vuW8j++8micsXG5cdCdmaWx0ZXItaW52ZXJ0LWxhYmVsJzogJ+WPjemAiScsXG5cdCdmaWx0ZXItY2FzZS1sYWJlbCc6ICflpKflsI/lhpnmlY/mhJ8nLFxuXHQnZmlsdGVyLWZpbHRlci1idXR0b24nOiAn6L+H5rukJyxcblx0J2ZpbHRlci1oaWdobGlnaHQtYnV0dG9uJzogJ+mrmOS6ricsXG59O1xuXG5leHBvcnQge01FU1NBR0VTfTtcbiIsICJpbXBvcnQge1VSTF9MSUZJTFRFUiwgVVJMX0xJRklMVEVSX0NBU0UsIFVSTF9MSUZJTFRFUl9FWFBSLCBVUkxfTElGSUxURVJfSElMSUdIVCwgVVJMX0xJRklMVEVSX0lOVn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge01FU1NBR0VTfSBmcm9tICcuL21lc3NhZ2VzJztcblxuY2xhc3MgTG9nRmlsdGVyIHtcblx0cHJpdmF0ZSByZWFkb25seSByaWdodHNMb2dPbmx5ID0gbG9jYXRpb24uaHJlZi5pbmNsdWRlcygndHlwZT1yaWdodHMnKSB8fCBsb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdMb2cvcmlnaHRzJyk7XG5cdHByaXZhdGUgbGFzdENsaWNrZWQgPSBmYWxzZTtcblx0cHJpdmF0ZSAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pikge1xuXHRcdHRoaXMuJGJvZHkgPSAkYm9keTtcblx0XHQvLyBEZWZpbmUgaW50ZXJmYWNlIG1lc3NhZ2VzXG5cdFx0bXcubWVzc2FnZXMuc2V0KE1FU1NBR0VTKTtcblx0fVxuXG5cdHB1YmxpYyBhZGRQb3J0bGV0TGluaygpOiB2b2lkIHtcblx0XHQvLyBDcmVhdGUgcG9ydGxldCBsaW5rXG5cdFx0Y29uc3QgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRcdHRoaXMuJGJvZHkuZmluZCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPyAncC1jYWN0aW9ucycgOiAncC10YicsXG5cdFx0XHQnIycsXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdwb3J0bGV0LXRleHQnKSxcblx0XHRcdCdjYS1yeGZpbHRlcicsXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdwb3J0bGV0LWRlc2NyaXB0aW9uJylcblx0XHQpO1xuXHRcdC8vIEJpbmQgY2xpY2sgbGlzdGVuZXJcblx0XHRpZiAocG9ydGxldExpbmspIHtcblx0XHRcdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5ID0gJChwb3J0bGV0TGluayk7XG5cdFx0XHQkcG9ydGxldExpbmsuZmluZCgnYScpLm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5idWlsZEZvcm0oKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQvLyBEaXNwbGF5IGZvcm0gZGlyZWNsdHk/XG5cdFx0aWYgKFVSTF9MSUZJTFRFUiB8fCBVUkxfTElGSUxURVJfRVhQUikge1xuXHRcdFx0dGhpcy5idWlsZEZvcm0oKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGJ1aWxkRm9ybSgpOiB2b2lkIHtcblx0XHRjb25zdCAkcGFnZVRvcDogSlF1ZXJ5ID0gdGhpcy4kYm9keS5maW5kKCcjY29udGVudFN1YiwjdG9wYmFyJyk7XG5cdFx0aWYgKCEkcGFnZVRvcC5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgZmllbGRzZXRIdG1sOiBzdHJpbmcgPSAnJztcblx0XHRsZXQgb2xkSW5wdXQ6IHN0cmluZyA9ICcnO1xuXHRcdGNvbnN0IGluc3RydWN0aW9uczogc3RyaW5nID0gdGhpcy5yaWdodHNMb2dPbmx5XG5cdFx0XHQ/IExvZ0ZpbHRlci5tc2coJ3JpZ2h0cy1saXN0LWluc3RydWN0aW9ucycpXG5cdFx0XHQ6IExvZ0ZpbHRlci5tc2coJ290aGVyLWxpc3QtaW5zdHJ1Y3Rpb25zJyk7XG5cblx0XHR0aGlzLiRib2R5LmZpbmQoJyNjYS1yeGZpbHRlcicpLmhpZGUoKTtcblxuXHRcdC8vIFNldCB1cCBjb25maWdcblx0XHRjb25zdCBjYXNpbmc6IGJvb2xlYW4gPSBVUkxfTElGSUxURVJfQ0FTRSA9PT0gJzEnO1xuXHRcdGNvbnN0IGhpbGlnaHQ6IGJvb2xlYW4gPSBVUkxfTElGSUxURVJfSElMSUdIVCA9PT0gJzEnO1xuXHRcdGNvbnN0IGludmVydGVkOiBib29sZWFuID0gVVJMX0xJRklMVEVSX0lOViA9PT0gJzEnO1xuXG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGZvcm1cblx0XHRjb25zdCAkZmllbGRTZXQ6IEpRdWVyeSA9ICQoJzxmaWVsZHNldD4nKS5hdHRyKCdpZCcsICdyaWdodHNGaWx0ZXInKS50ZXh0KGluc3RydWN0aW9ucyk7XG5cdFx0Y29uc3QgJGxlZ2VuZDogSlF1ZXJ5ID0gJCgnPGxlZ2VuZD4nKS50ZXh0KExvZ0ZpbHRlci5tc2coJ2xlZ2VuZCcpKTtcblx0XHQkZmllbGRTZXQuYXBwZW5kKCRsZWdlbmQpO1xuXG5cdFx0aWYgKHRoaXMucmlnaHRzTG9nT25seSkge1xuXHRcdFx0ZmllbGRzZXRIdG1sICs9ICc8c2VsZWN0IGlkPVwicmZTZWxlY3RcIj4nO1xuXHRcdFx0ZmllbGRzZXRIdG1sICs9IGA8b3B0aW9uPiR7bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnb3B0aW9uLWFkZGVkJykpfTwvb3B0aW9uPmA7XG5cdFx0XHRmaWVsZHNldEh0bWwgKz0gYDxvcHRpb24+JHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tcmVtb3ZlZCcpKX08L29wdGlvbj5gO1xuXHRcdFx0ZmllbGRzZXRIdG1sICs9IGA8b3B0aW9uPiR7bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnb3B0aW9uLWFkZGVkLW9yLXJlbW92ZWQnKSl9PC9vcHRpb24+YDtcblx0XHRcdGZpZWxkc2V0SHRtbCArPSBgPG9wdGlvbj4ke213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ29wdGlvbi1hZGRlZC1yZW1vdmVkLXN0YXRpYycpKX08L29wdGlvbj5gO1xuXHRcdFx0ZmllbGRzZXRIdG1sICs9ICc8L3NlbGVjdD4nO1xuXHRcdH1cblx0XHRmaWVsZHNldEh0bWwgKz0gYDxsYWJlbCBmb3I9XCJyZlJlZ2V4XCI+JHttdy5odG1sLmVzY2FwZShcblx0XHRcdExvZ0ZpbHRlci5tc2coJ3JlZ2V4LWxhYmVsJylcblx0XHQpfTwvbGFiZWw+PGlucHV0IGlkPVwicmZSZWdleFwiPmA7XG5cdFx0ZmllbGRzZXRIdG1sICs9IGA8aW5wdXQgaWQ9XCJyZkludmVydFwiIHR5cGU9XCJjaGVja2JveFwiPjxsYWJlbCBmb3I9XCJyZkludmVydFwiPiR7bXcuaHRtbC5lc2NhcGUoXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdpbnZlcnQtbGFiZWwnKVxuXHRcdCl9PC9sYWJlbD5gO1xuXHRcdGZpZWxkc2V0SHRtbCArPSBgPGlucHV0IGlkPVwicmZDYXNlXCIgdHlwZT1cImNoZWNrYm94XCI+PGxhYmVsIGZvcj1cInJmQ2FzZVwiPiR7bXcuaHRtbC5lc2NhcGUoXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdjYXNlLWxhYmVsJylcblx0XHQpfTwvbGFiZWw+YDtcblx0XHRmaWVsZHNldEh0bWwgKz0gYDxidXR0b24gY2xhc3M9XCJjZHgtYnV0dG9uIGNkeC1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZSBjZHgtYnV0dG9uLS13ZWlnaHQtcHJpbWFyeVwiIHZhbHVlPVwiMFwiPiR7bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnZmlsdGVyLWJ1dHRvbicpKX08L2J1dHRvbj5gO1xuXHRcdGZpZWxkc2V0SHRtbCArPSBgPGJ1dHRvbiBjbGFzcz1cImNkeC1idXR0b24gY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlIGNkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5XCIgdmFsdWU9XCIxXCI+JHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdoaWdobGlnaHQtYnV0dG9uJykpfTwvYnV0dG9uPmA7XG5cdFx0Ly8gSW5qZWN0IHRoZSBodG1sIGludG8gdGhlIGZpZWxkc2V0XG5cdFx0JGZpZWxkU2V0LmFwcGVuZChmaWVsZHNldEh0bWwpO1xuXHRcdCRwYWdlVG9wLmFmdGVyKCRmaWVsZFNldCk7XG5cblx0XHQvLyBTZXQgcGFzc2VkIHZhbHVlc1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI3JmUmVnZXgnKS52YWwoVVJMX0xJRklMVEVSX0VYUFIgPz8gJycpO1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI3JmQ2FzZScpLnByb3AoJ2NoZWNrZWQnLCAhY2FzaW5nKTtcblx0XHR0aGlzLiRib2R5LmZpbmQoJyNyZkludmVydCcpLnByb3AoJ2NoZWNrZWQnLCBpbnZlcnRlZCk7XG5cdFx0dGhpcy4kYm9keS5maW5kKCcjcmZSZWdleCcpLnRyaWdnZXIoJ2ZvY3VzJyk7XG5cblx0XHQvLyBCaW5kIGNsaWNrIGFuZCBjaGFuZ2UgbGlzdGVuZXJzXG5cdFx0dGhpcy4kYm9keVxuXHRcdFx0LmZpbmQoJyNyaWdodHNGaWx0ZXInKVxuXHRcdFx0LmZpbmQoJ2lucHV0Jylcblx0XHRcdC5vbigna2V5dXAgY2hhbmdlJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRpZiAoJGVsZW1lbnQuYXR0cignaWQnKSAhPT0gJ3JmUmVnZXgnKSB7XG5cdFx0XHRcdFx0dGhpcy5maWx0ZXJMaSgpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBjdXJJbnB1dDogc3RyaW5nID0gJGVsZW1lbnQudmFsKCkgYXMgc3RyaW5nO1xuXHRcdFx0XHRpZiAob2xkSW5wdXQgIT09IGN1cklucHV0KSB7XG5cdFx0XHRcdFx0b2xkSW5wdXQgPSBjdXJJbnB1dDtcblx0XHRcdFx0XHR0aGlzLmZpbHRlckxpKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdCRmaWVsZFNldC5maW5kKCdidXR0b24nKS5vbignY2xpY2snLCAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0dGhpcy5sYXN0Q2xpY2tlZCA9ICEhJGVsZW1lbnQudmFsKCk7XG5cdFx0XHR0aGlzLmZpbHRlckxpKCk7XG5cdFx0fSk7XG5cblx0XHRpZiAoVVJMX0xJRklMVEVSX0VYUFIpIHtcblx0XHRcdHRoaXMuZmlsdGVyTGkoaGlsaWdodCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBmaWx0ZXJMaShoaWxpZ2h0PzogYm9vbGVhbik6IHZvaWQge1xuXHRcdC8vIEdyYWIgdGhlIGxpc3Qgb2YgYWxsIDxsaT4gaW4gdGhlIGNvbnRlbnRcblx0XHRjb25zdCAkbGlzdEl0ZW1zOiBKUXVlcnkgPSB0aGlzLiRib2R5LmZpbmQoJyNib2R5Q29udGVudCcpLmZpbmQoJ2xpJyk7XG5cdFx0aWYgKCEkbGlzdEl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGhpbGlnaHQgPSAhIShoaWxpZ2h0IHx8IHRoaXMubGFzdENsaWNrZWQudG9TdHJpbmcoKSA9PT0gJzEnKTtcblxuXHRcdC8vIEdyYWIgb3B0aW9ucyBmcm9tIGZvcm1cblx0XHRsZXQgdHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmICh0aGlzLnJpZ2h0c0xvZ09ubHkpIHtcblx0XHRcdHR5cGUgPSB0aGlzLiRib2R5LmZpbmQoJyNyZlNlbGVjdCcpLmF0dHIoJ3NlbGVjdGVkSW5kZXgnKTtcblx0XHR9XG5cblx0XHRjb25zdCBpbnZlcnQgPSB0aGlzLiRib2R5LmZpbmQoJyNyZkludmVydCcpLnByb3AoJ2NoZWNrZWQnKSBhcyBib29sZWFuO1xuXHRcdGNvbnN0IHNlYXJjaDogc3RyaW5nID0gdGhpcy4kYm9keS5maW5kKCcjcmZSZWdleCcpLnZhbCgpPy50b1N0cmluZygpID8/ICcnO1xuXHRcdGNvbnN0IGZsYWdzOiBzdHJpbmcgPSB0aGlzLiRib2R5LmZpbmQoJyNyZkNhc2UnKS5wcm9wKCdjaGVja2VkJykgPyAnaWcnIDogJ2cnO1xuXHRcdGxldCByZWdleFJmOiBSZWdFeHAgfCB1bmRlZmluZWQ7XG5cdFx0dHJ5IHtcblx0XHRcdHJlZ2V4UmYgPSBuZXcgUmVnRXhwKGAke3NlYXJjaH1gLCBgJHtmbGFnc31gKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdH1cblxuXHRcdC8vIFRoZSByZWdleCB1c2VkIHRvIGdyYWIgdGhlIFNwZWNpYWw6TG9nL3JpZ2h0cyBjaGFuZ2VzXG5cdFx0Y29uc3QgUkVHRVhfUklHSFQ6IFJlZ0V4cCA9IC9eLio/dXNlcjouKj9cXHNmcm9tXFxzKC4qPylcXHN0b1xccyguKj8pXFxzXFx1MjAwRS4qPyQvaTtcblxuXHRcdC8vIEl0ZXJhdGVcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGxpc3RJdGVtcykge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHRsZXQgbG9vazogc3RyaW5nID0gJyc7XG5cblx0XHRcdGlmICh0aGlzLnJpZ2h0c0xvZ09ubHkpIHtcblx0XHRcdFx0Ly8gU3BlY2lhbDpMb2cvcmlnaHRzXG5cdFx0XHRcdGNvbnN0IG9sZHI6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS5yZXBsYWNlKFJFR0VYX1JJR0hULCAnJDEnKTtcblx0XHRcdFx0Y29uc3QgbmV3cjogc3RyaW5nID0gJGVsZW1lbnQudGV4dCgpLnJlcGxhY2UoUkVHRVhfUklHSFQsICckMicpO1xuXHRcdFx0XHRjb25zdCBvbGRybDogc3RyaW5nW10gPSBvbGRyLnNwbGl0KCcsICcpO1xuXHRcdFx0XHRjb25zdCBuZXdybDogc3RyaW5nW10gPSBuZXdyLnNwbGl0KCcsICcpO1xuXHRcdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgb2xkcmwubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbmV3cmwubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGlmIChvbGRybFtpXSA9PT0gbmV3cmxbal0pIHtcblx0XHRcdFx0XHRcdFx0b2xkcmxbaV0gPSAnJztcblx0XHRcdFx0XHRcdFx0bmV3cmxbal0gPSAnJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcmVtcjogc3RyaW5nID0gb2xkcmwuam9pbignLCcpO1xuXHRcdFx0XHRjb25zdCBhZGRyOiBzdHJpbmcgPSBuZXdybC5qb2luKCcsJyk7XG5cdFx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRcdGNhc2UgJzAnOlxuXHRcdFx0XHRcdFx0bG9vayA9IGFkZHI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICcxJzpcblx0XHRcdFx0XHRcdGxvb2sgPSByZW1yO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMic6XG5cdFx0XHRcdFx0XHRsb29rID0gYCR7cmVtcn0gJHthZGRyfWA7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICczJzpcblx0XHRcdFx0XHRcdGxvb2sgPSBgJHtvbGRyfSAke25ld3J9YDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBBbnkgb3RoZXIgbGlzdCBvZiA8bGk+IG9iamVjdHNcblx0XHRcdFx0bG9vayA9ICRlbGVtZW50LnRleHQoKTtcblx0XHRcdH1cblxuXHRcdFx0JGVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJycpO1xuXHRcdFx0JGVsZW1lbnQuc2hvdygpO1xuXG5cdFx0XHRpZiAocmVnZXhSZiAmJiAoKGxvb2s/LnNlYXJjaChyZWdleFJmKSA9PT0gLTEgJiYgaW52ZXJ0KSB8fCAobG9vaz8uc2VhcmNoKHJlZ2V4UmYpICE9PSAtMSAmJiAhaW52ZXJ0KSkpIHtcblx0XHRcdFx0aWYgKGhpbGlnaHQpIHtcblx0XHRcdFx0XHQkZWxlbWVudC5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2ZmZmY5OScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCFoaWxpZ2h0KSB7XG5cdFx0XHRcdCRlbGVtZW50LmhpZGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBtc2coa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGtleSA9IGBmaWx0ZXItJHtrZXl9YDtcblx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0cmV0dXJuIG13Lm1lc3NhZ2Uoa2V5KS5wbGFpbigpO1xuXHR9XG59XG5cbmV4cG9ydCB7TG9nRmlsdGVyfTtcbiIsICIvKipcbiAqIExvZyBmaWx0ZXIgc2NyaXB0XG4gKlxuICogQ3JlYXRlZCBieSBTcGxhcmthXG4gKiBBbWVuZGVkIGJ5IE1pa2UubGlmZWd1YXJkICYgTHVwb1xuICogUGFydGlhbGx5IHJld3JpdHRlbiBieSBEaWVCdWNoZVxuICpcbiAqIDxsaT4gZWxlbWVudCBGaWx0ZXIgU2NyaXB0LCB2ZXJzaW9uIFswLjJdXG4gKiBTaG91bGQgY3VycmVudGx5IHdvcmsgb24gYWxsIGtub3duIHNraW5zICh3aXRoIGEgI2NvbnRlbnRTdWIgb3IgI3RvcGJhcilcbiAqXG4gKiBtdy51dGlsLmdldFVybCggbXcuY29uZmlnLmdldCggJ3dnUGFnZU5hbWUnICkgKSArICc/JyArXG4gKiAnd2l0aEpTPU1lZGlhV2lraTpHYWRnZXQtTG9nRmlsdGVyLmpzJmxpZmlsdGVyPTEmbGlmaWx0ZXJleHByPVRFU1QmbGlmaWx0ZXJjYXNlJmxpZmlsdGVyaGlsaWdodCZsaWZpbHRlcmludidcbiAqL1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1JFR0VYX1RBUkdFVF9QQUdFLCBVUkxfTElGSUxURVJ9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge0xvZ0ZpbHRlcn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4oZnVuY3Rpb24gbG9nRmlsdGVyKCk6IHZvaWQge1xuXHRjb25zdCB7Y29uZmlnS2V5fSA9IE9QVElPTlM7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChjb25maWdLZXksIHRydWUpO1xuXG5cdC8vIFdoZW4gdG8gZW5hYmxlIGFsbCB0aGlzXG5cdGlmICh3Z0FjdGlvbiAhPT0gJ2hpc3RvcnknICYmICFVUkxfTElGSUxURVIgJiYgIVJFR0VYX1RBUkdFVF9QQUdFLnRlc3Qod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgfHwgJycpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0Ly8gTG9hZFxuXHRcdG5ldyBMb2dGaWx0ZXIo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RixHQUFHZ0csUUFBUUQsR0FBRyxFQUFFRSxNQUFNO0VBQzlCO0FBQ0Q7O0FDN0xBLElBQUFDLG9CQUFzQkMsUUFBQSxpQkFBQTtDQUVyQixTQUFTQyxZQUFrQjtBQUMzQixRQUFNO0lBQUN6RyxXQUFBMEc7RUFBUyxJQUFJNUc7QUFDcEIsUUFBTTtJQUFDNkc7SUFBVUM7RUFBMEIsSUFBSXZHLEdBQUd3RyxPQUFPQyxJQUFJO0FBRzdELE1BQUl6RyxHQUFHd0csT0FBT0MsSUFBSUosVUFBUyxHQUFHO0FBQzdCO0VBQ0Q7QUFFQXJHLEtBQUd3RyxPQUFPdEYsSUFBSW1GLFlBQVcsSUFBSTtBQUc3QixNQUFJQyxhQUFhLGFBQWEsQ0FBQ3ZHLGdCQUFnQixDQUFDRCxrQkFBa0I0RyxLQUFLSCw4QkFBOEIsRUFBRSxHQUFHO0FBQ3pHO0VBQ0Q7QUFFQSxRQUFBLEdBQUtMLGtCQUFBUyxTQUFRLEVBQUVDLEtBQU03RixXQUF5QztBQUU3RCxRQUFJUCxVQUFVTyxLQUFLLEVBQUVJLGVBQWU7RUFDckMsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbIm9wdGlvbnNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJjb25maWdLZXkiLCAiZGVmYXVsdCIsICJvcHRpb25zX2RlZmF1bHQiLCAiUkVHRVhfVEFSR0VUX1BBR0UiLCAiVVJMX0xJRklMVEVSIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJVUkxfTElGSUxURVJfQ0FTRSIsICJVUkxfTElGSUxURVJfRVhQUiIsICJVUkxfTElGSUxURVJfSElMSUdIVCIsICJVUkxfTElGSUxURVJfSU5WIiwgIk1FU1NBR0VTIiwgIkxvZ0ZpbHRlciIsICJfTG9nRmlsdGVyIiwgInJpZ2h0c0xvZ09ubHkiLCAibG9jYXRpb24iLCAiaHJlZiIsICJpbmNsdWRlcyIsICJsYXN0Q2xpY2tlZCIsICIkYm9keSIsICJjb25zdHJ1Y3RvciIsICJtZXNzYWdlcyIsICJzZXQiLCAiYWRkUG9ydGxldExpbmsiLCAicG9ydGxldExpbmsiLCAiZmluZCIsICJsZW5ndGgiLCAibXNnIiwgIiRwb3J0bGV0TGluayIsICIkIiwgIm9uIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImJ1aWxkRm9ybSIsICIkcGFnZVRvcCIsICJmaWVsZHNldEh0bWwiLCAib2xkSW5wdXQiLCAiaW5zdHJ1Y3Rpb25zIiwgImhpZGUiLCAiY2FzaW5nIiwgImhpbGlnaHQiLCAiaW52ZXJ0ZWQiLCAiJGZpZWxkU2V0IiwgImF0dHIiLCAidGV4dCIsICIkbGVnZW5kIiwgImFwcGVuZCIsICJjb25jYXQiLCAiaHRtbCIsICJlc2NhcGUiLCAiYWZ0ZXIiLCAidmFsIiwgInByb3AiLCAidHJpZ2dlciIsICIkZWxlbWVudCIsICJjdXJyZW50VGFyZ2V0IiwgImZpbHRlckxpIiwgImN1cklucHV0IiwgIl90aGlzJCRib2R5JGZpbmQkdmFsJCIsICJfdGhpcyQkYm9keSRmaW5kJHZhbCIsICIkbGlzdEl0ZW1zIiwgInRvU3RyaW5nIiwgInR5cGUiLCAiaW52ZXJ0IiwgInNlYXJjaCIsICJmbGFncyIsICJyZWdleFJmIiwgIlJlZ0V4cCIsICJlcnJvciIsICJjb25zb2xlIiwgImxvZyIsICJSRUdFWF9SSUdIVCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiX2xvb2siLCAiX2xvb2syIiwgImVsZW1lbnQiLCAidmFsdWUiLCAibG9vayIsICJvbGRyIiwgInJlcGxhY2UiLCAibmV3ciIsICJvbGRybCIsICJzcGxpdCIsICJuZXdybCIsICJpIiwgImoiLCAicmVtciIsICJqb2luIiwgImFkZHIiLCAiY3NzIiwgInNob3ciLCAiZXJyIiwgImUiLCAiZiIsICJrZXkiLCAibWVzc2FnZSIsICJwbGFpbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImxvZ0ZpbHRlciIsICJjb25maWdLZXkyIiwgIndnQWN0aW9uIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAidGVzdCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==
