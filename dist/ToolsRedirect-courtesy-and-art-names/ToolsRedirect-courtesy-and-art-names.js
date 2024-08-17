/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-courtesy-and-art-names.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect-courtesy-and-art-names}
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

// dist/ToolsRedirect-courtesy-and-art-names/ToolsRedirect-courtesy-and-art-names.js
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
//! src/ToolsRedirect-courtesy-and-art-names/ToolsRedirect-courtesy-and-art-names.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/ToolsRedirect-courtesy-and-art-names/modules/courtesy-and-art-names.ts
var import_ext_gadget = require("ext.gadget.ToolsRedirect");
var import_ext_gadget2 = require("ext.gadget.Util");
var checkRedirect = () => {
  const REGEX_PREFIX = /([；，]?[一又]?[字号號]\s)*$/;
  const compSurnames = ["欧阳", "歐陽", "令狐", "皇甫", "上官", "司徒", "诸葛", "諸葛", "司马", "司馬", "宇文", "呼延", "端木", "申屠", "尉迟", "尉遲", "轩辕", "軒轅", "夏侯", "南宫", "南宮", "司空", "鲜于", "鮮于", "西门", "西門", "独孤", "獨孤", "东方", "東方", "司寇", "羊舌", "第五", "梁丘", "锺离", "鍾離", "东郭", "東郭", "公孙", "公孫", "孟孙", "孟孫", "仲孙", "仲孫", "叔孙", "叔孫", "季孙", "季孫", "长孙", "長孫", "慕容", "闾丘", "閭丘", "东门", "東門", "公羊", "万俟", "百里", "公冶", "呼延", "浮屠", "即墨", "单于", "單于", "田丘"];
  const REGEX_COMP_SURNAME = new RegExp("^(".concat(compSurnames.join("|"), ")."));
  const findSurname = (pageName) => {
    var _pageName$;
    if (REGEX_COMP_SURNAME.test(pageName)) {
      var _REGEX_COMP_SURNAME$e;
      return (_REGEX_COMP_SURNAME$e = REGEX_COMP_SURNAME.exec(pageName)[1]) !== null && _REGEX_COMP_SURNAME$e !== void 0 ? _REGEX_COMP_SURNAME$e : "";
    }
    return (_pageName$ = pageName[0]) !== null && _pageName$ !== void 0 ? _pageName$ : "";
  };
  (0, import_ext_gadget.findRedirectCallback)((pageName, $content) => {
    const titles = [];
    let surname;
    var _iterator = _createForOfIteratorHelper($content.find("> p > b")), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const element = _step.value;
        const {
          previousSibling,
          textContent
        } = element;
        if (!previousSibling || !textContent) {
          continue;
        }
        const {
          textContent: textContent2
        } = previousSibling;
        if (!textContent2) {
          continue;
        }
        if (REGEX_PREFIX.test(textContent2)) {
          const name = textContent.trim();
          if (!name || textContent === pageName) {
            continue;
          }
          surname || (surname = findSurname(pageName));
          titles[titles.length] = surname + name;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return (0, import_ext_gadget2.uniqueArray)(titles);
  });
};
//! src/ToolsRedirect-courtesy-and-art-names/ToolsRedirect-courtesy-and-art-names.ts
(function toolsRedirectCourtesyAndArtNames() {
  void (0, import_ext_gadget3.checkDependencies)("ToolsRedirect").then(checkRedirect);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy9Ub29sc1JlZGlyZWN0LWNvdXJ0ZXN5LWFuZC1hcnQtbmFtZXMudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy9tb2R1bGVzL2NvdXJ0ZXN5LWFuZC1hcnQtbmFtZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Y2hlY2tEZXBlbmRlbmNpZXN9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2NoZWNrUmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy9jb3VydGVzeS1hbmQtYXJ0LW5hbWVzJztcblxuKGZ1bmN0aW9uIHRvb2xzUmVkaXJlY3RDb3VydGVzeUFuZEFydE5hbWVzKCkge1xuXHR2b2lkIGNoZWNrRGVwZW5kZW5jaWVzKCdUb29sc1JlZGlyZWN0JykudGhlbihjaGVja1JlZGlyZWN0KTtcbn0pKCk7XG4iLCAiaW1wb3J0IHtmaW5kUmVkaXJlY3RDYWxsYmFja30gZnJvbSAnZXh0LmdhZGdldC5Ub29sc1JlZGlyZWN0JztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGNoZWNrUmVkaXJlY3QgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IFJFR0VYX1BSRUZJWCA9IC8oW++8m++8jF0/W+S4gOWPiF0/W+Wtl+WPt+iZn11cXHMpKiQvO1xuXHRjb25zdCBjb21wU3VybmFtZXMgPSBbXG5cdFx0J+asp+mYsycsXG5cdFx0J+atkOmZvScsXG5cdFx0J+S7pOeLkCcsXG5cdFx0J+eah+eUqycsXG5cdFx0J+S4iuWumCcsXG5cdFx0J+WPuOW+kicsXG5cdFx0J+ivuOiRmycsXG5cdFx0J+iruOiRmycsXG5cdFx0J+WPuOmprCcsXG5cdFx0J+WPuOmmrCcsXG5cdFx0J+Wuh+aWhycsXG5cdFx0J+WRvOW7ticsXG5cdFx0J+err+acqCcsXG5cdFx0J+eUs+WxoCcsXG5cdFx0J+Wwiei/nycsXG5cdFx0J+WwiemBsicsXG5cdFx0J+i9qei+lScsXG5cdFx0J+i7kui9hScsXG5cdFx0J+Wkj+S+rycsXG5cdFx0J+WNl+WuqycsXG5cdFx0J+WNl+WuricsXG5cdFx0J+WPuOepuicsXG5cdFx0J+mynOS6jicsXG5cdFx0J+muruS6jicsXG5cdFx0J+ilv+mXqCcsXG5cdFx0J+ilv+mWgCcsXG5cdFx0J+eLrOWtpCcsXG5cdFx0J+eNqOWtpCcsXG5cdFx0J+S4nOaWuScsXG5cdFx0J+adseaWuScsXG5cdFx0J+WPuOWvhycsXG5cdFx0J+e+iuiIjCcsXG5cdFx0J+esrOS6lCcsXG5cdFx0J+aigeS4mCcsXG5cdFx0J+mUuuemuycsXG5cdFx0J+mNvumboicsXG5cdFx0J+S4nOmDrScsXG5cdFx0J+adsemDrScsXG5cdFx0J+WFrOWtmScsXG5cdFx0J+WFrOWtqycsXG5cdFx0J+Wtn+WtmScsXG5cdFx0J+Wtn+WtqycsXG5cdFx0J+S7suWtmScsXG5cdFx0J+S7suWtqycsXG5cdFx0J+WPlOWtmScsXG5cdFx0J+WPlOWtqycsXG5cdFx0J+Wto+WtmScsXG5cdFx0J+Wto+WtqycsXG5cdFx0J+mVv+WtmScsXG5cdFx0J+mVt+WtqycsXG5cdFx0J+aFleWuuScsXG5cdFx0J+mXvuS4mCcsXG5cdFx0J+mWreS4mCcsXG5cdFx0J+S4nOmXqCcsXG5cdFx0J+adsemWgCcsXG5cdFx0J+WFrOe+iicsXG5cdFx0J+S4h+S/nycsXG5cdFx0J+eZvumHjCcsXG5cdFx0J+WFrOWGticsXG5cdFx0J+WRvOW7ticsXG5cdFx0J+a1ruWxoCcsXG5cdFx0J+WNs+WiqCcsXG5cdFx0J+WNleS6jicsXG5cdFx0J+WWruS6jicsXG5cdFx0J+eUsOS4mCcsXG5cdF0gYXMgY29uc3Q7XG5cdGNvbnN0IFJFR0VYX0NPTVBfU1VSTkFNRSA9IG5ldyBSZWdFeHAoYF4oJHtjb21wU3VybmFtZXMuam9pbignfCcpfSkuYCk7XG5cblx0Y29uc3QgZmluZFN1cm5hbWUgPSAocGFnZU5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0aWYgKFJFR0VYX0NPTVBfU1VSTkFNRS50ZXN0KHBhZ2VOYW1lKSkge1xuXHRcdFx0cmV0dXJuIChSRUdFWF9DT01QX1NVUk5BTUUuZXhlYyhwYWdlTmFtZSkgYXMgUmVnRXhwRXhlY0FycmF5KVsxXSA/PyAnJztcblx0XHR9XG5cblx0XHRyZXR1cm4gcGFnZU5hbWVbMF0gPz8gJyc7XG5cdH07XG5cblx0ZmluZFJlZGlyZWN0Q2FsbGJhY2soKHBhZ2VOYW1lOiBzdHJpbmcsICRjb250ZW50OiBKUXVlcnkpOiBzdHJpbmdbXSA9PiB7XG5cdFx0Y29uc3QgdGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0bGV0IHN1cm5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZCgnPiBwID4gYicpKSB7XG5cdFx0XHRjb25zdCB7cHJldmlvdXNTaWJsaW5nLCB0ZXh0Q29udGVudH0gPSBlbGVtZW50O1xuXHRcdFx0aWYgKCFwcmV2aW91c1NpYmxpbmcgfHwgIXRleHRDb250ZW50KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB7dGV4dENvbnRlbnQ6IHRleHRDb250ZW50Mn0gPSBwcmV2aW91c1NpYmxpbmc7XG5cdFx0XHRpZiAoIXRleHRDb250ZW50Mikge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFJFR0VYX1BSRUZJWC50ZXN0KHRleHRDb250ZW50MikpIHtcblx0XHRcdFx0Y29uc3QgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGV4dENvbnRlbnQudHJpbSgpO1xuXHRcdFx0XHRpZiAoIW5hbWUgfHwgdGV4dENvbnRlbnQgPT09IHBhZ2VOYW1lKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdXJuYW1lIHx8PSBmaW5kU3VybmFtZShwYWdlTmFtZSk7XG5cblx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gc3VybmFtZSArIG5hbWU7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB1bmlxdWVBcnJheSh0aXRsZXMpOyAvLyBSZXBsYWNlIGBbLi4ubmV3IFNldCgpXWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tSZWRpcmVjdH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWdDQyxRQUFBLGlCQUFBOztBQ0FoQyxJQUFBQyxvQkFBbUNELFFBQUEsMEJBQUE7QUFDbkMsSUFBQUUscUJBQTBCRixRQUFBLGlCQUFBO0FBRTFCLElBQU1HLGdCQUFnQkEsTUFBWTtBQUNqQyxRQUFNQyxlQUFlO0FBQ3JCLFFBQU1DLGVBQWUsQ0FDcEIsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxJQUFBO0FBRUQsUUFBTUMscUJBQXFCLElBQUlDLE9BQUEsS0FBQUMsT0FBWUgsYUFBYUksS0FBSyxHQUFHLEdBQUMsSUFBQSxDQUFJO0FBRXJFLFFBQU1DLGNBQWVDLGNBQTZCO0FBQUEsUUFBQUM7QUFDakQsUUFBSU4sbUJBQW1CTyxLQUFLRixRQUFRLEdBQUc7QUFBQSxVQUFBRztBQUN0QyxjQUFBQSx3QkFBUVIsbUJBQW1CUyxLQUFLSixRQUFRLEVBQXNCLENBQUMsT0FBQSxRQUFBRywwQkFBQSxTQUFBQSx3QkFBSztJQUNyRTtBQUVBLFlBQUFGLGFBQU9ELFNBQVMsQ0FBQyxPQUFBLFFBQUFDLGVBQUEsU0FBQUEsYUFBSztFQUN2QjtBQUVBLEdBQUEsR0FBQVgsa0JBQUFlLHNCQUFxQixDQUFDTCxVQUFrQk0sYUFBK0I7QUFDdEUsVUFBTUMsU0FBbUIsQ0FBQTtBQUV6QixRQUFJQztBQUFBLFFBQUFDLFlBQUFDLDJCQUNrQkosU0FBU0ssS0FBSyxTQUFTLENBQUEsR0FBQUM7QUFBQSxRQUFBO0FBQTdDLFdBQUFILFVBQUFJLEVBQUEsR0FBQSxFQUFBRCxRQUFBSCxVQUFBSyxFQUFBLEdBQUFDLFFBQWdEO0FBQUEsY0FBckNDLFVBQUFKLE1BQUFLO0FBQ1YsY0FBTTtVQUFDQztVQUFpQkM7UUFBVyxJQUFJSDtBQUN2QyxZQUFJLENBQUNFLG1CQUFtQixDQUFDQyxhQUFhO0FBQ3JDO1FBQ0Q7QUFFQSxjQUFNO1VBQUNBLGFBQWFDO1FBQVksSUFBSUY7QUFDcEMsWUFBSSxDQUFDRSxjQUFjO0FBQ2xCO1FBQ0Q7QUFFQSxZQUFJM0IsYUFBYVMsS0FBS2tCLFlBQVksR0FBRztBQUNwQyxnQkFBTUMsT0FBMkJGLFlBQVlHLEtBQUs7QUFDbEQsY0FBSSxDQUFDRCxRQUFRRixnQkFBZ0JuQixVQUFVO0FBQ3RDO1VBQ0Q7QUFFQVEsc0JBQUFBLFVBQVlULFlBQVlDLFFBQVE7QUFFaENPLGlCQUFPQSxPQUFPZ0IsTUFBTSxJQUFJZixVQUFVYTtRQUNuQztNQUNEO0lBQUEsU0FBQUcsS0FBQTtBQUFBZixnQkFBQWdCLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUFmLGdCQUFBaUIsRUFBQTtJQUFBO0FBRUEsWUFBQSxHQUFPbkMsbUJBQUFvQyxhQUFZcEIsTUFBTTtFQUMxQixDQUFDO0FBQ0Y7O0NENUdDLFNBQVNxQixtQ0FBbUM7QUFDNUMsUUFBQSxHQUFLeEMsbUJBQUF5QyxtQkFBa0IsZUFBZSxFQUFFQyxLQUFLdEMsYUFBYTtBQUMzRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiY2hlY2tSZWRpcmVjdCIsICJSRUdFWF9QUkVGSVgiLCAiY29tcFN1cm5hbWVzIiwgIlJFR0VYX0NPTVBfU1VSTkFNRSIsICJSZWdFeHAiLCAiY29uY2F0IiwgImpvaW4iLCAiZmluZFN1cm5hbWUiLCAicGFnZU5hbWUiLCAiX3BhZ2VOYW1lJCIsICJ0ZXN0IiwgIl9SRUdFWF9DT01QX1NVUk5BTUUkZSIsICJleGVjIiwgImZpbmRSZWRpcmVjdENhbGxiYWNrIiwgIiRjb250ZW50IiwgInRpdGxlcyIsICJzdXJuYW1lIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJmaW5kIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAicHJldmlvdXNTaWJsaW5nIiwgInRleHRDb250ZW50IiwgInRleHRDb250ZW50MiIsICJuYW1lIiwgInRyaW0iLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAidW5pcXVlQXJyYXkiLCAidG9vbHNSZWRpcmVjdENvdXJ0ZXN5QW5kQXJ0TmFtZXMiLCAiY2hlY2tEZXBlbmRlbmNpZXMiLCAidGhlbiJdCn0K
