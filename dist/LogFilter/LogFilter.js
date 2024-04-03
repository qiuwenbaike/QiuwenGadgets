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
//! src/LogFilter/modules/constant.ts
var REGEX_TARGET_PAGE = /^(?:activeusers|checkuser|contributions|ipblocklist|linksearch|log|search|(?:uncategoriz|unus|want)ed(?:categori|templat)es|wantedfiles|(?:short|long|ancient|uncategorized|unwatched|wanted|protected|deadend|lonely|new)pages|fewestrevisions|withoutinterwiki|(?:double|broken)redirects|protectedtitles|crossnamespacelinks|recentchanges|categories|disambiguations|listredirects|globalusers|globalblocklist|listusers|watchlist|most(?:linked|revisions|categories)|nuke|whatlinkshere)$/i;
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
  if (wgAction !== "history" && !mw.util.getParamValue("lifilter") && !REGEX_TARGET_PAGE.test(wgCanonicalSpecialPageName || "")) {
    return;
  }
  void (0, import_ext_gadget.getBody)().then(($body) => {
    new LogFilter($body).addPortletLink();
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ0ZpbHRlci9vcHRpb25zLmpzb24iLCAic3JjL0xvZ0ZpbHRlci9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Mb2dGaWx0ZXIvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9Mb2dGaWx0ZXIvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTG9nRmlsdGVyL0xvZ0ZpbHRlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1Mb2dGaWx0ZXJfX0luaXRpYWxpemVkXCJcbn1cbiIsICJjb25zdCBNRVNTQUdFUyA9IHtcblx0J2ZpbHRlci1wb3J0bGV0LXRleHQnOiAn6L+H5rukJyxcblx0J2ZpbHRlci1wb3J0bGV0LWRlc2NyaXB0aW9uJzogJ+aJk+W8gOS6pOS6kuW8j+aXpeW/l+ato+WImei/h+a7pOWZqCcsXG5cdCdmaWx0ZXItZ2FkZ2V0LXBhZ2UnOiAnTWVkaWFXaWtpOkdhZGdldC1Mb2dGaWx0ZXIuanMnLFxuXHQnZmlsdGVyLXJpZ2h0cy1saXN0LWluc3RydWN0aW9ucyc6ICfmraPliJnooajovr7lvI/ov4fmu6Tku6XnqbrmoLzliIbpmpTnmoTmnYPpmZDliJfooajjgIInLFxuXHQnZmlsdGVyLW90aGVyLWxpc3QtaW5zdHJ1Y3Rpb25zJzogJ+ato+WImeihqOi+vuW8j+i/h+a7pOacrOWIl+ihqOeahOe6r+aWh+acrOagt+W8j+OAgicsXG5cdCdmaWx0ZXItbGVnZW5kJzogJ+i/h+a7pOWIl+ihqCcsXG5cdCdmaWx0ZXItb3B0aW9uLWFkZGVkJzogJ+a3u+WKoOadg+mZkCcsXG5cdCdmaWx0ZXItb3B0aW9uLXJlbW92ZWQnOiAn5Yig6Zmk5p2D6ZmQJyxcblx0J2ZpbHRlci1vcHRpb24tYWRkZWQtb3ItcmVtb3ZlZCc6ICfmt7vliqDmiJbliKDpmaTmnYPpmZAnLFxuXHQnZmlsdGVyLW9wdGlvbi1hZGRlZC1yZW1vdmVkLXN0YXRpYyc6ICflt7Lmt7vliqAv5bey56e76ZmkL+S/neaMgeS4jeWPmCcsXG5cdCdmaWx0ZXItcmVnZXgtbGFiZWwnOiAn5q2j5YiZ6KGo6L6+5byP77yaJyxcblx0J2ZpbHRlci1pbnZlcnQtbGFiZWwnOiAn5Y+N6YCJJyxcblx0J2ZpbHRlci1jYXNlLWxhYmVsJzogJ+Wkp+Wwj+WGmeaVj+aEnycsXG5cdCdmaWx0ZXItZmlsdGVyLWJ1dHRvbic6ICfov4fmu6QnLFxuXHQnZmlsdGVyLWhpZ2hsaWdodC1idXR0b24nOiAn6auY5LquJyxcbn07XG5cbmV4cG9ydCB7TUVTU0FHRVN9O1xuIiwgImltcG9ydCB7TUVTU0FHRVN9IGZyb20gJy4vbWVzc2FnZXMnO1xuXG5jb25zdCBVUkxfTElGSUxURVI6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyJyk7XG5jb25zdCBVUkxfTElGSUxURVJfQ0FTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJjYXNlJyk7XG5jb25zdCBVUkxfTElGSUxURVJfRVhQUjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJleHByJyk7XG5jb25zdCBVUkxfTElGSUxURVJfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXJoaWxpZ2h0Jyk7XG5jb25zdCBVUkxfTElGSUxURVJfSU5WOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcmludicpO1xuXG5jbGFzcyBMb2dGaWx0ZXIge1xuXHRwcml2YXRlIHJlYWRvbmx5IHJpZ2h0c0xvZ09ubHkgPSBsb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCd0eXBlPXJpZ2h0cycpIHx8IGxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ0xvZy9yaWdodHMnKTtcblx0cHJpdmF0ZSBsYXN0Q2xpY2tlZCA9IGZhbHNlO1xuXHRwcml2YXRlICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSB7XG5cdFx0dGhpcy4kYm9keSA9ICRib2R5O1xuXHRcdC8vIERlZmluZSBpbnRlcmZhY2UgbWVzc2FnZXNcblx0XHRtdy5tZXNzYWdlcy5zZXQoTUVTU0FHRVMpO1xuXHR9XG5cblx0cHVibGljIGFkZFBvcnRsZXRMaW5rKCk6IHZvaWQge1xuXHRcdC8vIENyZWF0ZSBwb3J0bGV0IGxpbmtcblx0XHRjb25zdCBwb3J0bGV0TGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdFx0dGhpcy4kYm9keS5maW5kKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJyxcblx0XHRcdCcjJyxcblx0XHRcdExvZ0ZpbHRlci5tc2coJ3BvcnRsZXQtdGV4dCcpLFxuXHRcdFx0J2NhLXJ4ZmlsdGVyJyxcblx0XHRcdExvZ0ZpbHRlci5tc2coJ3BvcnRsZXQtZGVzY3JpcHRpb24nKVxuXHRcdCk7XG5cdFx0Ly8gQmluZCBjbGljayBsaXN0ZW5lclxuXHRcdGlmIChwb3J0bGV0TGluaykge1xuXHRcdFx0Y29uc3QgJHBvcnRsZXRMaW5rOiBKUXVlcnkgPSAkKHBvcnRsZXRMaW5rKTtcblx0XHRcdCRwb3J0bGV0TGluay5maW5kKCdhJykub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmJ1aWxkRm9ybSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdC8vIERpc3BsYXkgZm9ybSBkaXJlY2x0eT9cblx0XHRpZiAoVVJMX0xJRklMVEVSIHx8IFVSTF9MSUZJTFRFUl9FWFBSKSB7XG5cdFx0XHR0aGlzLmJ1aWxkRm9ybSgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYnVpbGRGb3JtKCk6IHZvaWQge1xuXHRcdGNvbnN0ICRwYWdlVG9wOiBKUXVlcnkgPSB0aGlzLiRib2R5LmZpbmQoJyNjb250ZW50U3ViLCN0b3BiYXInKTtcblx0XHRpZiAoISRwYWdlVG9wLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBmaWVsZHNldEh0bWw6IHN0cmluZyA9ICcnO1xuXHRcdGxldCBvbGRJbnB1dDogc3RyaW5nID0gJyc7XG5cdFx0Y29uc3QgaW5zdHJ1Y3Rpb25zOiBzdHJpbmcgPSB0aGlzLnJpZ2h0c0xvZ09ubHlcblx0XHRcdD8gTG9nRmlsdGVyLm1zZygncmlnaHRzLWxpc3QtaW5zdHJ1Y3Rpb25zJylcblx0XHRcdDogTG9nRmlsdGVyLm1zZygnb3RoZXItbGlzdC1pbnN0cnVjdGlvbnMnKTtcblxuXHRcdHRoaXMuJGJvZHkuZmluZCgnI2NhLXJ4ZmlsdGVyJykuaGlkZSgpO1xuXG5cdFx0Ly8gU2V0IHVwIGNvbmZpZ1xuXHRcdGNvbnN0IGNhc2luZzogYm9vbGVhbiA9IFVSTF9MSUZJTFRFUl9DQVNFID09PSAnMSc7XG5cdFx0Y29uc3QgaGlsaWdodDogYm9vbGVhbiA9IFVSTF9MSUZJTFRFUl9ISUxJR0hUID09PSAnMSc7XG5cdFx0Y29uc3QgaW52ZXJ0ZWQ6IGJvb2xlYW4gPSBVUkxfTElGSUxURVJfSU5WID09PSAnMSc7XG5cblx0XHQvLyBHZW5lcmF0ZSB0aGUgZm9ybVxuXHRcdGNvbnN0ICRmaWVsZFNldDogSlF1ZXJ5ID0gJCgnPGZpZWxkc2V0PicpLmF0dHIoJ2lkJywgJ3JpZ2h0c0ZpbHRlcicpLnRleHQoaW5zdHJ1Y3Rpb25zKTtcblx0XHRjb25zdCAkbGVnZW5kOiBKUXVlcnkgPSAkKCc8bGVnZW5kPicpLnRleHQoTG9nRmlsdGVyLm1zZygnbGVnZW5kJykpO1xuXHRcdCRmaWVsZFNldC5hcHBlbmQoJGxlZ2VuZCk7XG5cblx0XHRpZiAodGhpcy5yaWdodHNMb2dPbmx5KSB7XG5cdFx0XHRmaWVsZHNldEh0bWwgKz0gJzxzZWxlY3QgaWQ9XCJyZlNlbGVjdFwiPic7XG5cdFx0XHRmaWVsZHNldEh0bWwgKz0gYDxvcHRpb24+JHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tYWRkZWQnKSl9PC9vcHRpb24+YDtcblx0XHRcdGZpZWxkc2V0SHRtbCArPSBgPG9wdGlvbj4ke213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ29wdGlvbi1yZW1vdmVkJykpfTwvb3B0aW9uPmA7XG5cdFx0XHRmaWVsZHNldEh0bWwgKz0gYDxvcHRpb24+JHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdvcHRpb24tYWRkZWQtb3ItcmVtb3ZlZCcpKX08L29wdGlvbj5gO1xuXHRcdFx0ZmllbGRzZXRIdG1sICs9IGA8b3B0aW9uPiR7bXcuaHRtbC5lc2NhcGUoTG9nRmlsdGVyLm1zZygnb3B0aW9uLWFkZGVkLXJlbW92ZWQtc3RhdGljJykpfTwvb3B0aW9uPmA7XG5cdFx0XHRmaWVsZHNldEh0bWwgKz0gJzwvc2VsZWN0Pic7XG5cdFx0fVxuXHRcdGZpZWxkc2V0SHRtbCArPSBgPGxhYmVsIGZvcj1cInJmUmVnZXhcIj4ke213Lmh0bWwuZXNjYXBlKFxuXHRcdFx0TG9nRmlsdGVyLm1zZygncmVnZXgtbGFiZWwnKVxuXHRcdCl9PC9sYWJlbD48aW5wdXQgaWQ9XCJyZlJlZ2V4XCI+YDtcblx0XHRmaWVsZHNldEh0bWwgKz0gYDxpbnB1dCBpZD1cInJmSW52ZXJ0XCIgdHlwZT1cImNoZWNrYm94XCI+PGxhYmVsIGZvcj1cInJmSW52ZXJ0XCI+JHttdy5odG1sLmVzY2FwZShcblx0XHRcdExvZ0ZpbHRlci5tc2coJ2ludmVydC1sYWJlbCcpXG5cdFx0KX08L2xhYmVsPmA7XG5cdFx0ZmllbGRzZXRIdG1sICs9IGA8aW5wdXQgaWQ9XCJyZkNhc2VcIiB0eXBlPVwiY2hlY2tib3hcIj48bGFiZWwgZm9yPVwicmZDYXNlXCI+JHttdy5odG1sLmVzY2FwZShcblx0XHRcdExvZ0ZpbHRlci5tc2coJ2Nhc2UtbGFiZWwnKVxuXHRcdCl9PC9sYWJlbD5gO1xuXHRcdGZpZWxkc2V0SHRtbCArPSBgPGJ1dHRvbiBjbGFzcz1cImNkeC1idXR0b24gY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlIGNkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5XCIgdmFsdWU9XCIwXCI+JHttdy5odG1sLmVzY2FwZShMb2dGaWx0ZXIubXNnKCdmaWx0ZXItYnV0dG9uJykpfTwvYnV0dG9uPmA7XG5cdFx0ZmllbGRzZXRIdG1sICs9IGA8YnV0dG9uIGNsYXNzPVwiY2R4LWJ1dHRvbiBjZHgtYnV0dG9uLS1hY3Rpb24tcHJvZ3Jlc3NpdmUgY2R4LWJ1dHRvbi0td2VpZ2h0LXByaW1hcnlcIiB2YWx1ZT1cIjFcIj4ke213Lmh0bWwuZXNjYXBlKExvZ0ZpbHRlci5tc2coJ2hpZ2hsaWdodC1idXR0b24nKSl9PC9idXR0b24+YDtcblx0XHQvLyBJbmplY3QgdGhlIGh0bWwgaW50byB0aGUgZmllbGRzZXRcblx0XHQkZmllbGRTZXQuYXBwZW5kKGZpZWxkc2V0SHRtbCk7XG5cdFx0JHBhZ2VUb3AuYWZ0ZXIoJGZpZWxkU2V0KTtcblxuXHRcdC8vIFNldCBwYXNzZWQgdmFsdWVzXG5cdFx0dGhpcy4kYm9keS5maW5kKCcjcmZSZWdleCcpLnZhbChVUkxfTElGSUxURVJfRVhQUiA/PyAnJyk7XG5cdFx0dGhpcy4kYm9keS5maW5kKCcjcmZDYXNlJykucHJvcCgnY2hlY2tlZCcsICFjYXNpbmcpO1xuXHRcdHRoaXMuJGJvZHkuZmluZCgnI3JmSW52ZXJ0JykucHJvcCgnY2hlY2tlZCcsIGludmVydGVkKTtcblx0XHR0aGlzLiRib2R5LmZpbmQoJyNyZlJlZ2V4JykudHJpZ2dlcignZm9jdXMnKTtcblxuXHRcdC8vIEJpbmQgY2xpY2sgYW5kIGNoYW5nZSBsaXN0ZW5lcnNcblx0XHR0aGlzLiRib2R5XG5cdFx0XHQuZmluZCgnI3JpZ2h0c0ZpbHRlcicpXG5cdFx0XHQuZmluZCgnaW5wdXQnKVxuXHRcdFx0Lm9uKCdrZXl1cCBjaGFuZ2UnLCAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdGlmICgkZWxlbWVudC5hdHRyKCdpZCcpICE9PSAncmZSZWdleCcpIHtcblx0XHRcdFx0XHR0aGlzLmZpbHRlckxpKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGN1cklucHV0OiBzdHJpbmcgPSAkZWxlbWVudC52YWwoKSBhcyBzdHJpbmc7XG5cdFx0XHRcdGlmIChvbGRJbnB1dCAhPT0gY3VySW5wdXQpIHtcblx0XHRcdFx0XHRvbGRJbnB1dCA9IGN1cklucHV0O1xuXHRcdFx0XHRcdHRoaXMuZmlsdGVyTGkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0JGZpZWxkU2V0LmZpbmQoJ2J1dHRvbicpLm9uKCdjbGljaycsIChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHR0aGlzLmxhc3RDbGlja2VkID0gISEkZWxlbWVudC52YWwoKTtcblx0XHRcdHRoaXMuZmlsdGVyTGkoKTtcblx0XHR9KTtcblxuXHRcdGlmIChVUkxfTElGSUxURVJfRVhQUikge1xuXHRcdFx0dGhpcy5maWx0ZXJMaShoaWxpZ2h0KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGZpbHRlckxpKGhpbGlnaHQ/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0Ly8gR3JhYiB0aGUgbGlzdCBvZiBhbGwgPGxpPiBpbiB0aGUgY29udGVudFxuXHRcdGNvbnN0ICRsaXN0SXRlbXM6IEpRdWVyeSA9IHRoaXMuJGJvZHkuZmluZCgnI2JvZHlDb250ZW50JykuZmluZCgnbGknKTtcblx0XHRpZiAoISRsaXN0SXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aGlsaWdodCA9ICEhKGhpbGlnaHQgfHwgdGhpcy5sYXN0Q2xpY2tlZC50b1N0cmluZygpID09PSAnMScpO1xuXG5cdFx0Ly8gR3JhYiBvcHRpb25zIGZyb20gZm9ybVxuXHRcdGxldCB0eXBlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKHRoaXMucmlnaHRzTG9nT25seSkge1xuXHRcdFx0dHlwZSA9IHRoaXMuJGJvZHkuZmluZCgnI3JmU2VsZWN0JykuYXR0cignc2VsZWN0ZWRJbmRleCcpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGludmVydCA9IHRoaXMuJGJvZHkuZmluZCgnI3JmSW52ZXJ0JykucHJvcCgnY2hlY2tlZCcpIGFzIGJvb2xlYW47XG5cdFx0Y29uc3Qgc2VhcmNoOiBzdHJpbmcgPSB0aGlzLiRib2R5LmZpbmQoJyNyZlJlZ2V4JykudmFsKCk/LnRvU3RyaW5nKCkgPz8gJyc7XG5cdFx0Y29uc3QgZmxhZ3M6IHN0cmluZyA9IHRoaXMuJGJvZHkuZmluZCgnI3JmQ2FzZScpLnByb3AoJ2NoZWNrZWQnKSA/ICdpZycgOiAnZyc7XG5cdFx0bGV0IHJlZ2V4UmY6IFJlZ0V4cCB8IHVuZGVmaW5lZDtcblx0XHR0cnkge1xuXHRcdFx0cmVnZXhSZiA9IG5ldyBSZWdFeHAoYCR7c2VhcmNofWAsIGAke2ZsYWdzfWApO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIHJlZ2V4IHVzZWQgdG8gZ3JhYiB0aGUgU3BlY2lhbDpMb2cvcmlnaHRzIGNoYW5nZXNcblx0XHRjb25zdCBSRUdFWF9SSUdIVDogUmVnRXhwID0gL14uKj91c2VyOi4qP1xcc2Zyb21cXHMoLio/KVxcc3RvXFxzKC4qPylcXHNcXHUyMDBFLio/JC9pO1xuXG5cdFx0Ly8gSXRlcmF0ZVxuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbGlzdEl0ZW1zKSB7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRcdGxldCBsb29rOiBzdHJpbmcgPSAnJztcblxuXHRcdFx0aWYgKHRoaXMucmlnaHRzTG9nT25seSkge1xuXHRcdFx0XHQvLyBTcGVjaWFsOkxvZy9yaWdodHNcblx0XHRcdFx0Y29uc3Qgb2xkcjogc3RyaW5nID0gJGVsZW1lbnQudGV4dCgpLnJlcGxhY2UoUkVHRVhfUklHSFQsICckMScpO1xuXHRcdFx0XHRjb25zdCBuZXdyOiBzdHJpbmcgPSAkZWxlbWVudC50ZXh0KCkucmVwbGFjZShSRUdFWF9SSUdIVCwgJyQyJyk7XG5cdFx0XHRcdGNvbnN0IG9sZHJsOiBzdHJpbmdbXSA9IG9sZHIuc3BsaXQoJywgJyk7XG5cdFx0XHRcdGNvbnN0IG5ld3JsOiBzdHJpbmdbXSA9IG5ld3Iuc3BsaXQoJywgJyk7XG5cdFx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBvbGRybC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBuZXdybC5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0aWYgKG9sZHJsW2ldID09PSBuZXdybFtqXSkge1xuXHRcdFx0XHRcdFx0XHRvbGRybFtpXSA9ICcnO1xuXHRcdFx0XHRcdFx0XHRuZXdybFtqXSA9ICcnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCByZW1yOiBzdHJpbmcgPSBvbGRybC5qb2luKCcsJyk7XG5cdFx0XHRcdGNvbnN0IGFkZHI6IHN0cmluZyA9IG5ld3JsLmpvaW4oJywnKTtcblx0XHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdFx0Y2FzZSAnMCc6XG5cdFx0XHRcdFx0XHRsb29rID0gYWRkcjtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJzEnOlxuXHRcdFx0XHRcdFx0bG9vayA9IHJlbXI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICcyJzpcblx0XHRcdFx0XHRcdGxvb2sgPSBgJHtyZW1yfSAke2FkZHJ9YDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJzMnOlxuXHRcdFx0XHRcdFx0bG9vayA9IGAke29sZHJ9ICR7bmV3cn1gO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEFueSBvdGhlciBsaXN0IG9mIDxsaT4gb2JqZWN0c1xuXHRcdFx0XHRsb29rID0gJGVsZW1lbnQudGV4dCgpO1xuXHRcdFx0fVxuXG5cdFx0XHQkZWxlbWVudC5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnJyk7XG5cdFx0XHQkZWxlbWVudC5zaG93KCk7XG5cblx0XHRcdGlmIChyZWdleFJmICYmICgobG9vaz8uc2VhcmNoKHJlZ2V4UmYpID09PSAtMSAmJiBpbnZlcnQpIHx8IChsb29rPy5zZWFyY2gocmVnZXhSZikgIT09IC0xICYmICFpbnZlcnQpKSkge1xuXHRcdFx0XHRpZiAoaGlsaWdodCkge1xuXHRcdFx0XHRcdCRlbGVtZW50LmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcjZmZmZjk5Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoIWhpbGlnaHQpIHtcblx0XHRcdFx0JGVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIG1zZyhrZXk6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0a2V5ID0gYGZpbHRlci0ke2tleX1gO1xuXHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRyZXR1cm4gbXcubWVzc2FnZShrZXkpLnBsYWluKCk7XG5cdH1cbn1cblxuZXhwb3J0IHtMb2dGaWx0ZXJ9O1xuIiwgImNvbnN0IFJFR0VYX1RBUkdFVF9QQUdFOiBSZWdFeHAgPVxuXHQvXig/OmFjdGl2ZXVzZXJzfGNoZWNrdXNlcnxjb250cmlidXRpb25zfGlwYmxvY2tsaXN0fGxpbmtzZWFyY2h8bG9nfHNlYXJjaHwoPzp1bmNhdGVnb3Jpenx1bnVzfHdhbnQpZWQoPzpjYXRlZ29yaXx0ZW1wbGF0KWVzfHdhbnRlZGZpbGVzfCg/OnNob3J0fGxvbmd8YW5jaWVudHx1bmNhdGVnb3JpemVkfHVud2F0Y2hlZHx3YW50ZWR8cHJvdGVjdGVkfGRlYWRlbmR8bG9uZWx5fG5ldylwYWdlc3xmZXdlc3RyZXZpc2lvbnN8d2l0aG91dGludGVyd2lraXwoPzpkb3VibGV8YnJva2VuKXJlZGlyZWN0c3xwcm90ZWN0ZWR0aXRsZXN8Y3Jvc3NuYW1lc3BhY2VsaW5rc3xyZWNlbnRjaGFuZ2VzfGNhdGVnb3JpZXN8ZGlzYW1iaWd1YXRpb25zfGxpc3RyZWRpcmVjdHN8Z2xvYmFsdXNlcnN8Z2xvYmFsYmxvY2tsaXN0fGxpc3R1c2Vyc3x3YXRjaGxpc3R8bW9zdCg/OmxpbmtlZHxyZXZpc2lvbnN8Y2F0ZWdvcmllcyl8bnVrZXx3aGF0bGlua3NoZXJlKSQvaTtcblxuZXhwb3J0IHtSRUdFWF9UQVJHRVRfUEFHRX07XG4iLCAiLyoqXG4gKiBMb2cgZmlsdGVyIHNjcmlwdFxuICpcbiAqIENyZWF0ZWQgYnkgU3BsYXJrYVxuICogQW1lbmRlZCBieSBNaWtlLmxpZmVndWFyZCAmIEx1cG9cbiAqIFBhcnRpYWxseSByZXdyaXR0ZW4gYnkgRGllQnVjaGVcbiAqXG4gKiA8bGk+IGVsZW1lbnQgRmlsdGVyIFNjcmlwdCwgdmVyc2lvbiBbMC4yXVxuICogU2hvdWxkIGN1cnJlbnRseSB3b3JrIG9uIGFsbCBrbm93biBza2lucyAod2l0aCBhICNjb250ZW50U3ViIG9yICN0b3BiYXIpXG4gKlxuICogbXcudXRpbC5nZXRVcmwoIG13LmNvbmZpZy5nZXQoICd3Z1BhZ2VOYW1lJyApICkgKyAnPycgK1xuICogJ3dpdGhKUz1NZWRpYVdpa2k6R2FkZ2V0LUxvZ0ZpbHRlci5qcyZsaWZpbHRlcj0xJmxpZmlsdGVyZXhwcj1URVNUJmxpZmlsdGVyY2FzZSZsaWZpbHRlcmhpbGlnaHQmbGlmaWx0ZXJpbnYnXG4gKi9cbmltcG9ydCAnLi9Mb2dGaWx0ZXIubGVzcyc7XG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7TG9nRmlsdGVyfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge1JFR0VYX1RBUkdFVF9QQUdFfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4oZnVuY3Rpb24gbG9nRmlsdGVyKCk6IHZvaWQge1xuXHRjb25zdCB7Y29uZmlnS2V5fSA9IE9QVElPTlM7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChjb25maWdLZXksIHRydWUpO1xuXG5cdC8vIFdoZW4gdG8gZW5hYmxlIGFsbCB0aGlzXG5cdGlmIChcblx0XHR3Z0FjdGlvbiAhPT0gJ2hpc3RvcnknICYmXG5cdFx0IW13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXInKSAmJlxuXHRcdCFSRUdFWF9UQVJHRVRfUEFHRS50ZXN0KHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHRuZXcgTG9nRmlsdGVyKCRib2R5KS5hZGRQb3J0bGV0TGluaygpOyAvLyBMb2FkXG5cdH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJ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SUFBSXZHLEdBQUd3RyxPQUFPQyxJQUFJO0FBRzdELE1BQUl6RyxHQUFHd0csT0FBT0MsSUFBSUosVUFBUyxHQUFHO0FBQzdCO0VBQ0Q7QUFFQXJHLEtBQUd3RyxPQUFPdkYsSUFBSW9GLFlBQVcsSUFBSTtBQUc3QixNQUNDQyxhQUFhLGFBQ2IsQ0FBQ3RHLEdBQUdDLEtBQUtDLGNBQWMsVUFBVSxLQUNqQyxDQUFDK0Ysa0JBQWtCUyxLQUFLSCw4QkFBOEIsRUFBRSxHQUN2RDtBQUNEO0VBQ0Q7QUFFQSxRQUFBLEdBQUtMLGtCQUFBUyxTQUFRLEVBQUVDLEtBQU05RixXQUF5QztBQUM3RCxRQUFJUCxVQUFVTyxLQUFLLEVBQUVJLGVBQWU7RUFDckMsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbIm9wdGlvbnNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJjb25maWdLZXkiLCAiZGVmYXVsdCIsICJvcHRpb25zX2RlZmF1bHQiLCAiTUVTU0FHRVMiLCAiVVJMX0xJRklMVEVSIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJVUkxfTElGSUxURVJfQ0FTRSIsICJVUkxfTElGSUxURVJfRVhQUiIsICJVUkxfTElGSUxURVJfSElMSUdIVCIsICJVUkxfTElGSUxURVJfSU5WIiwgIkxvZ0ZpbHRlciIsICJfTG9nRmlsdGVyIiwgInJpZ2h0c0xvZ09ubHkiLCAibG9jYXRpb24iLCAiaHJlZiIsICJpbmNsdWRlcyIsICJsYXN0Q2xpY2tlZCIsICIkYm9keSIsICJjb25zdHJ1Y3RvciIsICJtZXNzYWdlcyIsICJzZXQiLCAiYWRkUG9ydGxldExpbmsiLCAicG9ydGxldExpbmsiLCAiZmluZCIsICJsZW5ndGgiLCAibXNnIiwgIiRwb3J0bGV0TGluayIsICIkIiwgIm9uIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImJ1aWxkRm9ybSIsICIkcGFnZVRvcCIsICJmaWVsZHNldEh0bWwiLCAib2xkSW5wdXQiLCAiaW5zdHJ1Y3Rpb25zIiwgImhpZGUiLCAiY2FzaW5nIiwgImhpbGlnaHQiLCAiaW52ZXJ0ZWQiLCAiJGZpZWxkU2V0IiwgImF0dHIiLCAidGV4dCIsICIkbGVnZW5kIiwgImFwcGVuZCIsICJjb25jYXQiLCAiaHRtbCIsICJlc2NhcGUiLCAiYWZ0ZXIiLCAidmFsIiwgInByb3AiLCAidHJpZ2dlciIsICIkZWxlbWVudCIsICJjdXJyZW50VGFyZ2V0IiwgImZpbHRlckxpIiwgImN1cklucHV0IiwgIl90aGlzJCRib2R5JGZpbmQkdmFsJCIsICJfdGhpcyQkYm9keSRmaW5kJHZhbCIsICIkbGlzdEl0ZW1zIiwgInRvU3RyaW5nIiwgInR5cGUiLCAiaW52ZXJ0IiwgInNlYXJjaCIsICJmbGFncyIsICJyZWdleFJmIiwgIlJlZ0V4cCIsICJlcnJvciIsICJjb25zb2xlIiwgImxvZyIsICJSRUdFWF9SSUdIVCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiX2xvb2siLCAiX2xvb2syIiwgImVsZW1lbnQiLCAidmFsdWUiLCAibG9vayIsICJvbGRyIiwgInJlcGxhY2UiLCAibmV3ciIsICJvbGRybCIsICJzcGxpdCIsICJuZXdybCIsICJpIiwgImoiLCAicmVtciIsICJqb2luIiwgImFkZHIiLCAiY3NzIiwgInNob3ciLCAiZXJyIiwgImUiLCAiZiIsICJrZXkiLCAibWVzc2FnZSIsICJwbGFpbiIsICJSRUdFWF9UQVJHRVRfUEFHRSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImxvZ0ZpbHRlciIsICJjb25maWdLZXkyIiwgIndnQWN0aW9uIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAidGVzdCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==
