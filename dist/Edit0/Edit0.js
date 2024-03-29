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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXQwL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdDAvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9FZGl0MC9FZGl0MC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEVkaXQwOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQgbGVhZCBzZWN0aW9uJyxcblx0XHRcdGphOiAn5pyA5Yid44Gu5q616JC944KS57eo6ZuGJyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8lui+kemmluautScsXG5cdFx0XHQnemgtaGFudCc6ICfnt6jovK/pppbmrrUnLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBlZGl0MCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgJGNvbnRlbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNjb250ZW50LCAjbXdfY29udGVudCcpLmZpcnN0KCk7XG5cdGNvbnN0ICRzcGFuMTogSlF1ZXJ5ID0gJGNvbnRlbnQuZmluZCgnc3Bhbi5tdy1lZGl0c2VjdGlvbjpub3QoLnBsYWlubGlua3MpJykuZmlyc3QoKTtcblx0aWYgKCEkc3BhbjEubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHNwYW4wOiBKUXVlcnkgPSAkc3BhbjEuY2xvbmUoKTtcblx0JHNwYW4wLnJlbW92ZUNsYXNzKCdtdy1lZGl0c2VjdGlvbicpLmFkZENsYXNzKCdtdy1lZGl0c2VjdGlvbi1zZWN0aW9uLTAnKTtcblxuXHRpZiAoJHNwYW4wLmZpbmQoJy5lYXN5LWFyY2hpdmUtbGluaycpLmxlbmd0aCkge1xuXHRcdCRzcGFuMC5maW5kKCcuZWFzeS1hcmNoaXZlLWxpbmsnKS5yZW1vdmUoKTtcblx0fVxuXG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRzd2l0Y2ggKHNraW4pIHtcblx0XHRjYXNlICdjaXRpemVuJzpcblx0XHRcdCRib2R5LmZpbmQoJy5tdy1pbmRpY2F0b3JzJykucHJlcGVuZCgkc3BhbjApO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdCRib2R5LmZpbmQoJyNjb250ZW50IGgxI2ZpcnN0SGVhZGluZycpLmFwcGVuZCgkc3BhbjApO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRzcGFuMC5maW5kKCdhJykpIHtcblx0XHRlbGVtZW50LnRpdGxlID0gZ2V0TWVzc2FnZSgnRWRpdDAnKTtcblxuXHRcdGNvbnN0IHtocmVmfSA9IGVsZW1lbnQ7XG5cdFx0Y29uc3QgdXJsU2VhcmNoID0ge1xuXHRcdFx0c3VtbWFyeTogJy8qIHRvcCAqLyAnLFxuXHRcdFx0c2VjdGlvbjogJzAnLFxuXHRcdH0gYXMgY29uc3Qgc2F0aXNmaWVzIHtcblx0XHRcdHN1bW1hcnk6IHN0cmluZztcblx0XHRcdHNlY3Rpb246IHN0cmluZztcblx0XHR9O1xuXG5cdFx0aWYgKCEvJig/OnZlKT9zZWN0aW9uPVQvLnRlc3QoaHJlZikpIHtcblx0XHRcdC8vIG5vdCB0cmFuc2NsdWRlZFxuXHRcdFx0ZWxlbWVudC5ocmVmID0gbmV3IG13LlVyaShocmVmKS5leHRlbmQodXJsU2VhcmNoKS50b1N0cmluZygpO1xuXHRcdH0gZWxzZSBpZiAoLyZ2ZXNlY3Rpb249Ly50ZXN0KGhyZWYpKSB7XG5cdFx0XHQvLyB0cmFuc2NsdWRlZCwgVkVcblx0XHRcdGVsZW1lbnQuaHJlZiA9IG5ldyBtdy5VcmkoaHJlZilcblx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0Li4udXJsU2VhcmNoLFxuXHRcdFx0XHRcdHZlYWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0dmVzZWN0aW9uOiAnMCcsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50b1N0cmluZygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB0cmFuc2NsdWRlZCwgbm90IFZFXG5cdFx0XHRlbGVtZW50LmhyZWYgPSBuZXcgbXcuVXJpKGhyZWYpXG5cdFx0XHRcdC5leHRlbmQoe1xuXHRcdFx0XHRcdC4uLnVybFNlYXJjaCxcblx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRvU3RyaW5nKCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2VkaXQwfTtcbiIsICJpbXBvcnQgJy4vRWRpdDAubGVzcyc7XG5pbXBvcnQge2VkaXQwfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHt3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmlmICh3Z05hbWVzcGFjZU51bWJlciA+PSAwKSB7XG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oZWRpdDApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsUUFBQSxHQUFPSCxrQkFBQUksVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBQ0EsSUFBTUMsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDZEEsSUFBTUMsUUFBU0MsV0FBeUM7QUFDdkQsUUFBTUMsV0FBbUJELE1BQU1FLEtBQUssdUJBQXVCLEVBQUVDLE1BQU07QUFDbkUsUUFBTUMsU0FBaUJILFNBQVNDLEtBQUssc0NBQXNDLEVBQUVDLE1BQU07QUFDbkYsTUFBSSxDQUFDQyxPQUFPQyxRQUFRO0FBQ25CO0VBQ0Q7QUFFQSxRQUFNQyxTQUFpQkYsT0FBT0csTUFBTTtBQUNwQ0QsU0FBT0UsWUFBWSxnQkFBZ0IsRUFBRUMsU0FBUywwQkFBMEI7QUFFeEUsTUFBSUgsT0FBT0osS0FBSyxvQkFBb0IsRUFBRUcsUUFBUTtBQUM3Q0MsV0FBT0osS0FBSyxvQkFBb0IsRUFBRVEsT0FBTztFQUMxQztBQUVBLFFBQU07SUFBQ0M7RUFBSSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRTdCLFVBQVFILE1BQUE7SUFDUCxLQUFLO0FBQ0pYLFlBQU1FLEtBQUssZ0JBQWdCLEVBQUVhLFFBQVFULE1BQU07QUFDM0M7SUFDRDtBQUNDTixZQUFNRSxLQUFLLDBCQUEwQixFQUFFYyxPQUFPVixNQUFNO0VBQ3REO0FBQUEsTUFBQVcsWUFBQUMsMkJBRXNCWixPQUFPSixLQUFLLEdBQUcsQ0FBQSxHQUFBaUI7QUFBQSxNQUFBO0FBQXJDLFNBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQXdDO0FBQUEsWUFBN0JDLFVBQUFKLE1BQUFLO0FBQ1ZELGNBQVFFLFFBQVE1QixXQUFXLE9BQU87QUFFbEMsWUFBTTtRQUFDNkI7TUFBSSxJQUFJSDtBQUNmLFlBQU1JLFlBQVk7UUFDakJDLFNBQVM7UUFDVEMsU0FBUztNQUNWO0FBS0EsVUFBSSxDQUFDLG9CQUFvQkMsS0FBS0osSUFBSSxHQUFHO0FBRXBDSCxnQkFBUUcsT0FBTyxJQUFJZCxHQUFHbUIsSUFBSUwsSUFBSSxFQUFFTSxPQUFPTCxTQUFTLEVBQUVNLFNBQVM7TUFDNUQsV0FBVyxjQUFjSCxLQUFLSixJQUFJLEdBQUc7QUFFcENILGdCQUFRRyxPQUFPLElBQUlkLEdBQUdtQixJQUFJTCxJQUFJLEVBQzVCTSxPQUFPO1VBQ1AsR0FBR0w7VUFDSE8sVUFBVTtVQUNWQyxXQUFXO1FBQ1osQ0FBQyxFQUNBRixTQUFTO01BQ1osT0FBTztBQUVOVixnQkFBUUcsT0FBTyxJQUFJZCxHQUFHbUIsSUFBSUwsSUFBSSxFQUM1Qk0sT0FBTztVQUNQLEdBQUdMO1VBQ0hTLFFBQVE7UUFDVCxDQUFDLEVBQ0FILFNBQVM7TUFDWjtJQUNEO0VBQUEsU0FBQUksS0FBQTtBQUFBcEIsY0FBQXFCLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFwQixjQUFBc0IsRUFBQTtFQUFBO0FBQ0Q7O0FDMURBLElBQUFDLHFCQUFzQmxELFFBQUEsaUJBQUE7QUFFdEIsSUFBTTtFQUFDbUQ7QUFBaUIsSUFBSTdCLEdBQUdDLE9BQU9DLElBQUk7QUFFMUMsSUFBSTJCLHFCQUFxQixHQUFHO0FBQzNCLFFBQUEsR0FBS0QsbUJBQUFFLFNBQVEsRUFBRUMsS0FBSzVDLEtBQUs7QUFDMUI7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkVkaXQwIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJlZGl0MCIsICIkYm9keSIsICIkY29udGVudCIsICJmaW5kIiwgImZpcnN0IiwgIiRzcGFuMSIsICJsZW5ndGgiLCAiJHNwYW4wIiwgImNsb25lIiwgInJlbW92ZUNsYXNzIiwgImFkZENsYXNzIiwgInJlbW92ZSIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAicHJlcGVuZCIsICJhcHBlbmQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAidGl0bGUiLCAiaHJlZiIsICJ1cmxTZWFyY2giLCAic3VtbWFyeSIsICJzZWN0aW9uIiwgInRlc3QiLCAiVXJpIiwgImV4dGVuZCIsICJ0b1N0cmluZyIsICJ2ZWFjdGlvbiIsICJ2ZXNlY3Rpb24iLCAiYWN0aW9uIiwgImVyciIsICJlIiwgImYiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImdldEJvZHkiLCAidGhlbiJdCn0K
