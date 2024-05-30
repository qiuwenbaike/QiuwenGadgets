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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXQwL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdDAvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9FZGl0MC9FZGl0MC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEVkaXQwOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQgbGVhZCBzZWN0aW9uJyxcblx0XHRcdGphOiAn5pyA5Yid44Gu5q616JC944KS57eo6ZuGJyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8lui+kemmluautScsXG5cdFx0XHQnemgtaGFudCc6ICfnt6jovK/pppbmrrUnLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBlZGl0MCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgJGNvbnRlbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNjb250ZW50LCAjbXdfY29udGVudCcpLmZpcnN0KCk7XG5cdGNvbnN0ICRzcGFuMTogSlF1ZXJ5ID0gJGNvbnRlbnQuZmluZCgnc3Bhbi5tdy1lZGl0c2VjdGlvbjpub3QoLnBsYWlubGlua3MpJykuZmlyc3QoKTtcblx0aWYgKCEkc3BhbjEubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHNwYW4wOiBKUXVlcnkgPSAkc3BhbjEuY2xvbmUoKTtcblx0JHNwYW4wLnJlbW92ZUNsYXNzKCdtdy1lZGl0c2VjdGlvbicpLmFkZENsYXNzKCdtdy1lZGl0c2VjdGlvbi1zZWN0aW9uLTAnKTtcblxuXHRpZiAoJHNwYW4wLmZpbmQoJy5lYXN5LWFyY2hpdmUtbGluaycpLmxlbmd0aCkge1xuXHRcdCRzcGFuMC5maW5kKCcuZWFzeS1hcmNoaXZlLWxpbmsnKS5yZW1vdmUoKTtcblx0fVxuXG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRzd2l0Y2ggKHNraW4pIHtcblx0XHRjYXNlICdjaXRpemVuJzpcblx0XHRcdCRib2R5LmZpbmQoJy5tdy1pbmRpY2F0b3JzJykucHJlcGVuZCgkc3BhbjApO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdCRib2R5LmZpbmQoJyNjb250ZW50IGgxI2ZpcnN0SGVhZGluZycpLmFwcGVuZCgkc3BhbjApO1xuXHR9XG5cblx0JHNwYW4wLmFkZENsYXNzKCdtdy1lZGl0c2VjdGlvbicpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkc3BhbjAuZmluZCgnYScpKSB7XG5cdFx0ZWxlbWVudC50aXRsZSA9IGdldE1lc3NhZ2UoJ0VkaXQwJyk7XG5cblx0XHRjb25zdCB7aHJlZn0gPSBlbGVtZW50O1xuXHRcdGNvbnN0IHVybFNlYXJjaCA9IHtcblx0XHRcdHN1bW1hcnk6ICcvKiB0b3AgKi8gJyxcblx0XHRcdHNlY3Rpb246ICcwJyxcblx0XHR9IGFzIGNvbnN0IHNhdGlzZmllcyB7XG5cdFx0XHRzdW1tYXJ5OiBzdHJpbmc7XG5cdFx0XHRzZWN0aW9uOiBzdHJpbmc7XG5cdFx0fTtcblxuXHRcdGlmICghLyYoPzp2ZSk/c2VjdGlvbj1ULy50ZXN0KGhyZWYpKSB7XG5cdFx0XHQvLyBub3QgdHJhbnNjbHVkZWRcblx0XHRcdGVsZW1lbnQuaHJlZiA9IG5ldyBtdy5VcmkoaHJlZikuZXh0ZW5kKHVybFNlYXJjaCkudG9TdHJpbmcoKTtcblx0XHR9IGVsc2UgaWYgKC8mdmVzZWN0aW9uPS8udGVzdChocmVmKSkge1xuXHRcdFx0Ly8gdHJhbnNjbHVkZWQsIFZFXG5cdFx0XHRlbGVtZW50LmhyZWYgPSBuZXcgbXcuVXJpKGhyZWYpXG5cdFx0XHRcdC5leHRlbmQoe1xuXHRcdFx0XHRcdC4uLnVybFNlYXJjaCxcblx0XHRcdFx0XHR2ZWFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRcdHZlc2VjdGlvbjogJzAnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudG9TdHJpbmcoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdHJhbnNjbHVkZWQsIG5vdCBWRVxuXHRcdFx0ZWxlbWVudC5ocmVmID0gbmV3IG13LlVyaShocmVmKVxuXHRcdFx0XHQuZXh0ZW5kKHtcblx0XHRcdFx0XHQuLi51cmxTZWFyY2gsXG5cdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50b1N0cmluZygpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtlZGl0MH07XG4iLCAiaW1wb3J0ICcuL0VkaXQwLmxlc3MnO1xuaW1wb3J0IHtlZGl0MH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5pZiAod2dOYW1lc3BhY2VOdW1iZXIgPj0gMCkge1xuXHR2b2lkIGdldEJvZHkoKS50aGVuKGVkaXQwKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFFBQUEsR0FBT0gsa0JBQUFJLFVBQVM7TUFDZkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUNBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ2RBLElBQU1DLFFBQVNDLFdBQXlDO0FBQ3ZELFFBQU1DLFdBQW1CRCxNQUFNRSxLQUFLLHVCQUF1QixFQUFFQyxNQUFNO0FBQ25FLFFBQU1DLFNBQWlCSCxTQUFTQyxLQUFLLHNDQUFzQyxFQUFFQyxNQUFNO0FBQ25GLE1BQUksQ0FBQ0MsT0FBT0MsUUFBUTtBQUNuQjtFQUNEO0FBRUEsUUFBTUMsU0FBaUJGLE9BQU9HLE1BQU07QUFDcENELFNBQU9FLFlBQVksZ0JBQWdCLEVBQUVDLFNBQVMsMEJBQTBCO0FBRXhFLE1BQUlILE9BQU9KLEtBQUssb0JBQW9CLEVBQUVHLFFBQVE7QUFDN0NDLFdBQU9KLEtBQUssb0JBQW9CLEVBQUVRLE9BQU87RUFDMUM7QUFFQSxRQUFNO0lBQUNDO0VBQUksSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUU3QixVQUFRSCxNQUFBO0lBQ1AsS0FBSztBQUNKWCxZQUFNRSxLQUFLLGdCQUFnQixFQUFFYSxRQUFRVCxNQUFNO0FBQzNDO0lBQ0Q7QUFDQ04sWUFBTUUsS0FBSywwQkFBMEIsRUFBRWMsT0FBT1YsTUFBTTtFQUN0RDtBQUVBQSxTQUFPRyxTQUFTLGdCQUFnQjtBQUFBLE1BQUFRLFlBQUFDLDJCQUVWWixPQUFPSixLQUFLLEdBQUcsQ0FBQSxHQUFBaUI7QUFBQSxNQUFBO0FBQXJDLFNBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQXdDO0FBQUEsWUFBN0JDLFVBQUFKLE1BQUFLO0FBQ1ZELGNBQVFFLFFBQVE1QixXQUFXLE9BQU87QUFFbEMsWUFBTTtRQUFDNkI7TUFBSSxJQUFJSDtBQUNmLFlBQU1JLFlBQVk7UUFDakJDLFNBQVM7UUFDVEMsU0FBUztNQUNWO0FBS0EsVUFBSSxDQUFDLG9CQUFvQkMsS0FBS0osSUFBSSxHQUFHO0FBRXBDSCxnQkFBUUcsT0FBTyxJQUFJZCxHQUFHbUIsSUFBSUwsSUFBSSxFQUFFTSxPQUFPTCxTQUFTLEVBQUVNLFNBQVM7TUFDNUQsV0FBVyxjQUFjSCxLQUFLSixJQUFJLEdBQUc7QUFFcENILGdCQUFRRyxPQUFPLElBQUlkLEdBQUdtQixJQUFJTCxJQUFJLEVBQzVCTSxPQUFPO1VBQ1AsR0FBR0w7VUFDSE8sVUFBVTtVQUNWQyxXQUFXO1FBQ1osQ0FBQyxFQUNBRixTQUFTO01BQ1osT0FBTztBQUVOVixnQkFBUUcsT0FBTyxJQUFJZCxHQUFHbUIsSUFBSUwsSUFBSSxFQUM1Qk0sT0FBTztVQUNQLEdBQUdMO1VBQ0hTLFFBQVE7UUFDVCxDQUFDLEVBQ0FILFNBQVM7TUFDWjtJQUNEO0VBQUEsU0FBQUksS0FBQTtBQUFBcEIsY0FBQXFCLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFwQixjQUFBc0IsRUFBQTtFQUFBO0FBQ0Q7O0FDNURBLElBQUFDLHFCQUFzQmxELFFBQUEsaUJBQUE7QUFFdEIsSUFBTTtFQUFDbUQ7QUFBaUIsSUFBSTdCLEdBQUdDLE9BQU9DLElBQUk7QUFFMUMsSUFBSTJCLHFCQUFxQixHQUFHO0FBQzNCLFFBQUEsR0FBS0QsbUJBQUFFLFNBQVEsRUFBRUMsS0FBSzVDLEtBQUs7QUFDMUI7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkVkaXQwIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJlZGl0MCIsICIkYm9keSIsICIkY29udGVudCIsICJmaW5kIiwgImZpcnN0IiwgIiRzcGFuMSIsICJsZW5ndGgiLCAiJHNwYW4wIiwgImNsb25lIiwgInJlbW92ZUNsYXNzIiwgImFkZENsYXNzIiwgInJlbW92ZSIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAicHJlcGVuZCIsICJhcHBlbmQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAidGl0bGUiLCAiaHJlZiIsICJ1cmxTZWFyY2giLCAic3VtbWFyeSIsICJzZWN0aW9uIiwgInRlc3QiLCAiVXJpIiwgImV4dGVuZCIsICJ0b1N0cmluZyIsICJ2ZWFjdGlvbiIsICJ2ZXNlY3Rpb24iLCAiYWN0aW9uIiwgImVyciIsICJlIiwgImYiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImdldEJvZHkiLCAidGhlbiJdCn0K
