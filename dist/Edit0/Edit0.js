/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edit0|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-edit0.css}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-edit0.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edit0}
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
  const {
    skin
  } = mw.config.get();
  switch (skin) {
    case "citizen":
      $body.find(".mw-indicators").prepend($span0);
      break;
    default:
      $body.find("#content h1#firstHeading").append($span0);
  }
  $span0.addClass("mw-editsection");
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
var {
  wgNamespaceNumber
} = mw.config.get();
if (wgNamespaceNumber >= 0) {
  void (0, import_ext_gadget2.getBody)().then(edit0);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXQwL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdDAvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9FZGl0MC9FZGl0MC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEVkaXQwOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQgbGVhZCBzZWN0aW9uJyxcblx0XHRcdGphOiAn5pyA5Yid44Gu5q616JC944KS57eo6ZuGJyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8lui+kemmluautScsXG5cdFx0XHQnemgtaGFudCc6ICfnt6jovK/pppbmrrUnLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBlZGl0MCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgJGNvbnRlbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNjb250ZW50LCAjbXdfY29udGVudCcpLmZpcnN0KCk7XG5cdGNvbnN0ICRzcGFuMTogSlF1ZXJ5ID0gJGNvbnRlbnQuZmluZCgnc3Bhbi5tdy1lZGl0c2VjdGlvbjpub3QoLnBsYWlubGlua3MpJykuZmlyc3QoKTtcblx0aWYgKCEkc3BhbjEubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHNwYW4wOiBKUXVlcnkgPSAkc3BhbjEuY2xvbmUoKTtcblx0JHNwYW4wLnJlbW92ZUNsYXNzKCdtdy1lZGl0c2VjdGlvbicpLmFkZENsYXNzKCdtdy1lZGl0c2VjdGlvbi1zZWN0aW9uLTAnKTtcblxuXHRpZiAoJHNwYW4wLmZpbmQoJy5lYXN5LWFyY2hpdmUtbGluaycpLmxlbmd0aCkge1xuXHRcdCRzcGFuMC5maW5kKCcuZWFzeS1hcmNoaXZlLWxpbmsnKS5yZW1vdmUoKTtcblx0fVxuXG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRzd2l0Y2ggKHNraW4pIHtcblx0XHRjYXNlICdjaXRpemVuJzpcblx0XHRcdCRib2R5LmZpbmQoJy5tdy1pbmRpY2F0b3JzJykucHJlcGVuZCgkc3BhbjApO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdCRib2R5LmZpbmQoJyNjb250ZW50IGgxI2ZpcnN0SGVhZGluZycpLmFwcGVuZCgkc3BhbjApO1xuXHR9XG5cblx0JHNwYW4wLmFkZENsYXNzKCdtdy1lZGl0c2VjdGlvbicpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkc3BhbjAuZmluZCgnYScpKSB7XG5cdFx0ZWxlbWVudC50aXRsZSA9IGdldE1lc3NhZ2UoJ0VkaXQwJyk7XG5cblx0XHRjb25zdCB7aHJlZn0gPSBlbGVtZW50O1xuXHRcdGNvbnN0IHVybFNlYXJjaCA9IHtcblx0XHRcdHN1bW1hcnk6ICcvKiB0b3AgKi8gJyxcblx0XHRcdHNlY3Rpb246ICcwJyxcblx0XHR9IGFzIGNvbnN0IHNhdGlzZmllcyB7XG5cdFx0XHRzdW1tYXJ5OiBzdHJpbmc7XG5cdFx0XHRzZWN0aW9uOiBzdHJpbmc7XG5cdFx0fTtcblxuXHRcdGlmICghLyYoPzp2ZSk/c2VjdGlvbj1ULy50ZXN0KGhyZWYpKSB7XG5cdFx0XHQvLyBub3QgdHJhbnNjbHVkZWRcblx0XHRcdGVsZW1lbnQuaHJlZiA9IG5ldyBtdy5VcmkoaHJlZikuZXh0ZW5kKHVybFNlYXJjaCkudG9TdHJpbmcoKTtcblx0XHR9IGVsc2UgaWYgKC8mdmVzZWN0aW9uPS8udGVzdChocmVmKSkge1xuXHRcdFx0Ly8gdHJhbnNjbHVkZWQsIFZFXG5cdFx0XHRlbGVtZW50LmhyZWYgPSBuZXcgbXcuVXJpKGhyZWYpXG5cdFx0XHRcdC5leHRlbmQoe1xuXHRcdFx0XHRcdC4uLnVybFNlYXJjaCxcblx0XHRcdFx0XHR2ZWFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRcdHZlc2VjdGlvbjogJzAnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudG9TdHJpbmcoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdHJhbnNjbHVkZWQsIG5vdCBWRVxuXHRcdFx0ZWxlbWVudC5ocmVmID0gbmV3IG13LlVyaShocmVmKVxuXHRcdFx0XHQuZXh0ZW5kKHtcblx0XHRcdFx0XHQuLi51cmxTZWFyY2gsXG5cdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50b1N0cmluZygpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtlZGl0MH07XG4iLCAiaW1wb3J0ICcuL0VkaXQwLmxlc3MnO1xuaW1wb3J0IHtlZGl0MH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5pZiAod2dOYW1lc3BhY2VOdW1iZXIgPj0gMCkge1xuXHR2b2lkIGdldEJvZHkoKS50aGVuKGVkaXQwKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUF1QkMsUUFBQSxpQkFBQTtBQUV2QixJQUFNQyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxRQUFBLEdBQU9ILGtCQUFBSSxVQUFTO01BQ2ZDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFDQSxJQUFNQyxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUNkQSxJQUFNQyxRQUFTQyxXQUF5QztBQUN2RCxRQUFNQyxXQUFtQkQsTUFBTUUsS0FBSyx1QkFBdUIsRUFBRUMsTUFBTTtBQUNuRSxRQUFNQyxTQUFpQkgsU0FBU0MsS0FBSyxzQ0FBc0MsRUFBRUMsTUFBTTtBQUNuRixNQUFJLENBQUNDLE9BQU9DLFFBQVE7QUFDbkI7RUFDRDtBQUVBLFFBQU1DLFNBQWlCRixPQUFPRyxNQUFNO0FBQ3BDRCxTQUFPRSxZQUFZLGdCQUFnQixFQUFFQyxTQUFTLDBCQUEwQjtBQUV4RSxNQUFJSCxPQUFPSixLQUFLLG9CQUFvQixFQUFFRyxRQUFRO0FBQzdDQyxXQUFPSixLQUFLLG9CQUFvQixFQUFFUSxPQUFPO0VBQzFDO0FBRUEsUUFBTTtJQUFDQztFQUFJLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFN0IsVUFBUUgsTUFBQTtJQUNQLEtBQUs7QUFDSlgsWUFBTUUsS0FBSyxnQkFBZ0IsRUFBRWEsUUFBUVQsTUFBTTtBQUMzQztJQUNEO0FBQ0NOLFlBQU1FLEtBQUssMEJBQTBCLEVBQUVjLE9BQU9WLE1BQU07RUFDdEQ7QUFFQUEsU0FBT0csU0FBUyxnQkFBZ0I7QUFBQSxNQUFBUSxZQUFBQywyQkFFVlosT0FBT0osS0FBSyxHQUFHLENBQUEsR0FBQWlCO0FBQUEsTUFBQTtBQUFyQyxTQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUF3QztBQUFBLFlBQTdCQyxVQUFBSixNQUFBSztBQUNWRCxjQUFRRSxRQUFRNUIsV0FBVyxPQUFPO0FBRWxDLFlBQU07UUFBQzZCO01BQUksSUFBSUg7QUFDZixZQUFNSSxZQUFZO1FBQ2pCQyxTQUFTO1FBQ1RDLFNBQVM7TUFDVjtBQUtBLFVBQUksQ0FBQyxvQkFBb0JDLEtBQUtKLElBQUksR0FBRztBQUVwQ0gsZ0JBQVFHLE9BQU8sSUFBSWQsR0FBR21CLElBQUlMLElBQUksRUFBRU0sT0FBT0wsU0FBUyxFQUFFTSxTQUFTO01BQzVELFdBQVcsY0FBY0gsS0FBS0osSUFBSSxHQUFHO0FBRXBDSCxnQkFBUUcsT0FBTyxJQUFJZCxHQUFHbUIsSUFBSUwsSUFBSSxFQUM1Qk0sT0FBTztVQUNQLEdBQUdMO1VBQ0hPLFVBQVU7VUFDVkMsV0FBVztRQUNaLENBQUMsRUFDQUYsU0FBUztNQUNaLE9BQU87QUFFTlYsZ0JBQVFHLE9BQU8sSUFBSWQsR0FBR21CLElBQUlMLElBQUksRUFDNUJNLE9BQU87VUFDUCxHQUFHTDtVQUNIUyxRQUFRO1FBQ1QsQ0FBQyxFQUNBSCxTQUFTO01BQ1o7SUFDRDtFQUFBLFNBQUFJLEtBQUE7QUFBQXBCLGNBQUFxQixFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBcEIsY0FBQXNCLEVBQUE7RUFBQTtBQUNEOztBQzVEQSxJQUFBQyxxQkFBc0JsRCxRQUFBLGlCQUFBO0FBRXRCLElBQU07RUFBQ21EO0FBQWlCLElBQUk3QixHQUFHQyxPQUFPQyxJQUFJO0FBRTFDLElBQUkyQixxQkFBcUIsR0FBRztBQUMzQixRQUFBLEdBQUtELG1CQUFBRSxTQUFRLEVBQUVDLEtBQUs1QyxLQUFLO0FBQzFCOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJFZGl0MCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZWRpdDAiLCAiJGJvZHkiLCAiJGNvbnRlbnQiLCAiZmluZCIsICJmaXJzdCIsICIkc3BhbjEiLCAibGVuZ3RoIiwgIiRzcGFuMCIsICJjbG9uZSIsICJyZW1vdmVDbGFzcyIsICJhZGRDbGFzcyIsICJyZW1vdmUiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInByZXBlbmQiLCAiYXBwZW5kIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgInRpdGxlIiwgImhyZWYiLCAidXJsU2VhcmNoIiwgInN1bW1hcnkiLCAic2VjdGlvbiIsICJ0ZXN0IiwgIlVyaSIsICJleHRlbmQiLCAidG9TdHJpbmciLCAidmVhY3Rpb24iLCAidmVzZWN0aW9uIiwgImFjdGlvbiIsICJlcnIiLCAiZSIsICJmIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==
