/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edit0|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-edit0.css}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-edit0.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edit0}
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

// dist/Edit0/Edit0.js
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
//! src/Edit0/modules/constant.ts
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_SKIN = mw.config.get("skin");
//! src/Edit0/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Edit0: (0, import_ext_gadget.localize)({
      en: "Edit lead section",
      ja: "最初の段落を編集",
      "zh-hans": "编辑首段",
      "zh-hant": "編輯首段"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Edit0/modules/core.ts
var edit0 = ($body) => {
  const $content = $body.find("#content, #mw_content").first();
  const $span1 = $content.find("span.mw-editsection:not(.plainlinks)").first();
  if (!$span1.length) {
    return;
  }
  const $span0 = $span1.clone();
  $span0.removeClass("mw-editsection").addClass("mw-editsection-section-0");
  if ($span0.find(".easy-archive-link").length) {
    $span0.find(".easy-archive-link").remove();
  }
  switch (WG_SKIN) {
    case "citizen":
      $body.find(".mw-indicators").prepend($span0);
      break;
    default:
      $body.find("#content h1#firstHeading").append($span0);
  }
  var _iterator = _createForOfIteratorHelper($span0.find("a")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      element.title = getMessage("Edit0");
      const {
        href
      } = element;
      const urlSearch = {
        summary: "/* top */ ",
        section: "0"
      };
      if (!/&(?:ve)?section=T/.test(href)) {
        element.href = new mw.Uri(href).extend(urlSearch).toString();
      } else if (/&vesection=/.test(href)) {
        element.href = new mw.Uri(href).extend({
          ...urlSearch,
          veaction: "edit",
          vesection: "0"
        }).toString();
      } else {
        element.href = new mw.Uri(href).extend({
          ...urlSearch,
          action: "edit"
        }).toString();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
//! src/Edit0/Edit0.ts
var import_ext_gadget2 = require("ext.gadget.Util");
if (WG_NAMESPACE_NUMBER >= 0) {
  void (0, import_ext_gadget2.getBody)().then(edit0);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXQwL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXQwL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdDAvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9FZGl0MC9FZGl0MC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcbmNvbnN0IFdHX1NLSU46IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKTtcblxuZXhwb3J0IHtXR19OQU1FU1BBQ0VfTlVNQkVSLCBXR19TS0lOfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RWRpdDA6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCBsZWFkIHNlY3Rpb24nLFxuXHRcdFx0amE6ICfmnIDliJ3jga7mrrXokL3jgpLnt6jpm4YnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6R6aaW5q61Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8r+mmluautScsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge1dHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBlZGl0MCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgJGNvbnRlbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNjb250ZW50LCAjbXdfY29udGVudCcpLmZpcnN0KCk7XG5cdGNvbnN0ICRzcGFuMTogSlF1ZXJ5ID0gJGNvbnRlbnQuZmluZCgnc3Bhbi5tdy1lZGl0c2VjdGlvbjpub3QoLnBsYWlubGlua3MpJykuZmlyc3QoKTtcblx0aWYgKCEkc3BhbjEubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHNwYW4wOiBKUXVlcnkgPSAkc3BhbjEuY2xvbmUoKTtcblx0JHNwYW4wLnJlbW92ZUNsYXNzKCdtdy1lZGl0c2VjdGlvbicpLmFkZENsYXNzKCdtdy1lZGl0c2VjdGlvbi1zZWN0aW9uLTAnKTtcblxuXHRpZiAoJHNwYW4wLmZpbmQoJy5lYXN5LWFyY2hpdmUtbGluaycpLmxlbmd0aCkge1xuXHRcdCRzcGFuMC5maW5kKCcuZWFzeS1hcmNoaXZlLWxpbmsnKS5yZW1vdmUoKTtcblx0fVxuXG5cdHN3aXRjaCAoV0dfU0tJTikge1xuXHRcdGNhc2UgJ2NpdGl6ZW4nOlxuXHRcdFx0JGJvZHkuZmluZCgnLm13LWluZGljYXRvcnMnKS5wcmVwZW5kKCRzcGFuMCk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0JGJvZHkuZmluZCgnI2NvbnRlbnQgaDEjZmlyc3RIZWFkaW5nJykuYXBwZW5kKCRzcGFuMCk7XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJHNwYW4wLmZpbmQoJ2EnKSkge1xuXHRcdGVsZW1lbnQudGl0bGUgPSBnZXRNZXNzYWdlKCdFZGl0MCcpO1xuXG5cdFx0Y29uc3Qge2hyZWZ9ID0gZWxlbWVudDtcblx0XHRjb25zdCB1cmxTZWFyY2ggPSB7XG5cdFx0XHRzdW1tYXJ5OiAnLyogdG9wICovICcsXG5cdFx0XHRzZWN0aW9uOiAnMCcsXG5cdFx0fSBhcyBjb25zdCBzYXRpc2ZpZXMge1xuXHRcdFx0c3VtbWFyeTogc3RyaW5nO1xuXHRcdFx0c2VjdGlvbjogc3RyaW5nO1xuXHRcdH07XG5cblx0XHRpZiAoIS8mKD86dmUpP3NlY3Rpb249VC8udGVzdChocmVmKSkge1xuXHRcdFx0Ly8gbm90IHRyYW5zY2x1ZGVkXG5cdFx0XHRlbGVtZW50LmhyZWYgPSBuZXcgbXcuVXJpKGhyZWYpLmV4dGVuZCh1cmxTZWFyY2gpLnRvU3RyaW5nKCk7XG5cdFx0fSBlbHNlIGlmICgvJnZlc2VjdGlvbj0vLnRlc3QoaHJlZikpIHtcblx0XHRcdC8vIHRyYW5zY2x1ZGVkLCBWRVxuXHRcdFx0ZWxlbWVudC5ocmVmID0gbmV3IG13LlVyaShocmVmKVxuXHRcdFx0XHQuZXh0ZW5kKHtcblx0XHRcdFx0XHQuLi51cmxTZWFyY2gsXG5cdFx0XHRcdFx0dmVhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHR2ZXNlY3Rpb246ICcwJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRvU3RyaW5nKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRyYW5zY2x1ZGVkLCBub3QgVkVcblx0XHRcdGVsZW1lbnQuaHJlZiA9IG5ldyBtdy5VcmkoaHJlZilcblx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0Li4udXJsU2VhcmNoLFxuXHRcdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudG9TdHJpbmcoKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7ZWRpdDB9O1xuIiwgImltcG9ydCAnLi9FZGl0MC5sZXNzJztcbmltcG9ydCB7V0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7ZWRpdDB9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuaWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPj0gMCkge1xuXHR2b2lkIGdldEJvZHkoKS50aGVuKGVkaXQwKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsc0JBQThCQyxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQjtBQUNyRSxJQUFNQyxVQUFrQkgsR0FBR0MsT0FBT0MsSUFBSSxNQUFNOztBQ0Q1QyxJQUFBRSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsUUFBQSxHQUFPSCxrQkFBQUksVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBQ0EsSUFBTUMsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDYkEsSUFBTUMsUUFBU0MsV0FBeUM7QUFDdkQsUUFBTUMsV0FBbUJELE1BQU1FLEtBQUssdUJBQXVCLEVBQUVDLE1BQU07QUFDbkUsUUFBTUMsU0FBaUJILFNBQVNDLEtBQUssc0NBQXNDLEVBQUVDLE1BQU07QUFDbkYsTUFBSSxDQUFDQyxPQUFPQyxRQUFRO0FBQ25CO0VBQ0Q7QUFFQSxRQUFNQyxTQUFpQkYsT0FBT0csTUFBTTtBQUNwQ0QsU0FBT0UsWUFBWSxnQkFBZ0IsRUFBRUMsU0FBUywwQkFBMEI7QUFFeEUsTUFBSUgsT0FBT0osS0FBSyxvQkFBb0IsRUFBRUcsUUFBUTtBQUM3Q0MsV0FBT0osS0FBSyxvQkFBb0IsRUFBRVEsT0FBTztFQUMxQztBQUVBLFVBQVF0QixTQUFBO0lBQ1AsS0FBSztBQUNKWSxZQUFNRSxLQUFLLGdCQUFnQixFQUFFUyxRQUFRTCxNQUFNO0FBQzNDO0lBQ0Q7QUFDQ04sWUFBTUUsS0FBSywwQkFBMEIsRUFBRVUsT0FBT04sTUFBTTtFQUN0RDtBQUFBLE1BQUFPLFlBQUFDLDJCQUVzQlIsT0FBT0osS0FBSyxHQUFHLENBQUEsR0FBQWE7QUFBQSxNQUFBO0FBQXJDLFNBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQXdDO0FBQUEsWUFBN0JDLFVBQUFKLE1BQUFLO0FBQ1ZELGNBQVFFLFFBQVF4QixXQUFXLE9BQU87QUFFbEMsWUFBTTtRQUFDeUI7TUFBSSxJQUFJSDtBQUNmLFlBQU1JLFlBQVk7UUFDakJDLFNBQVM7UUFDVEMsU0FBUztNQUNWO0FBS0EsVUFBSSxDQUFDLG9CQUFvQkMsS0FBS0osSUFBSSxHQUFHO0FBRXBDSCxnQkFBUUcsT0FBTyxJQUFJckMsR0FBRzBDLElBQUlMLElBQUksRUFBRU0sT0FBT0wsU0FBUyxFQUFFTSxTQUFTO01BQzVELFdBQVcsY0FBY0gsS0FBS0osSUFBSSxHQUFHO0FBRXBDSCxnQkFBUUcsT0FBTyxJQUFJckMsR0FBRzBDLElBQUlMLElBQUksRUFDNUJNLE9BQU87VUFDUCxHQUFHTDtVQUNITyxVQUFVO1VBQ1ZDLFdBQVc7UUFDWixDQUFDLEVBQ0FGLFNBQVM7TUFDWixPQUFPO0FBRU5WLGdCQUFRRyxPQUFPLElBQUlyQyxHQUFHMEMsSUFBSUwsSUFBSSxFQUM1Qk0sT0FBTztVQUNQLEdBQUdMO1VBQ0hTLFFBQVE7UUFDVCxDQUFDLEVBQ0FILFNBQVM7TUFDWjtJQUNEO0VBQUEsU0FBQUksS0FBQTtBQUFBcEIsY0FBQXFCLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFwQixjQUFBc0IsRUFBQTtFQUFBO0FBQ0Q7O0FDeERBLElBQUFDLHFCQUFzQjlDLFFBQUEsaUJBQUE7QUFFdEIsSUFBSU4sdUJBQXVCLEdBQUc7QUFDN0IsUUFBQSxHQUFLb0QsbUJBQUFDLFNBQVEsRUFBRUMsS0FBS3ZDLEtBQUs7QUFDMUI7IiwKICAibmFtZXMiOiBbIldHX05BTUVTUEFDRV9OVU1CRVIiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19TS0lOIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkVkaXQwIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJlZGl0MCIsICIkYm9keSIsICIkY29udGVudCIsICJmaW5kIiwgImZpcnN0IiwgIiRzcGFuMSIsICJsZW5ndGgiLCAiJHNwYW4wIiwgImNsb25lIiwgInJlbW92ZUNsYXNzIiwgImFkZENsYXNzIiwgInJlbW92ZSIsICJwcmVwZW5kIiwgImFwcGVuZCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJ0aXRsZSIsICJocmVmIiwgInVybFNlYXJjaCIsICJzdW1tYXJ5IiwgInNlY3Rpb24iLCAidGVzdCIsICJVcmkiLCAiZXh0ZW5kIiwgInRvU3RyaW5nIiwgInZlYWN0aW9uIiwgInZlc2VjdGlvbiIsICJhY3Rpb24iLCAiZXJyIiwgImUiLCAiZiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=
