/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/Special:Permalink/61193369}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect-bio-latin-names}
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

// dist/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.js
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
//! src/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/ToolsRedirect-bio-latin-names/modules/bio-latin-names.ts
var import_ext_gadget = require("ext.gadget.ToolsRedirect");
var import_ext_gadget2 = require("ext.gadget.Util");
var checkRedirect = () => {
  const REGEX_PREFIX = /[学學]名\s*[:：]?\s*$/;
  const REGEX_COLON = /^\s*[:：]?\s*$/;
  (0, import_ext_gadget.findRedirectCallback)((_pageName, $content) => {
    const titles = [];
    var _iterator = _createForOfIteratorHelper($content.find('> p > [lang="la"], > p > i')), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var _previousNode$textCon, _previousNode$textCon2;
        const element = _step.value;
        const {
          textContent
        } = element;
        let {
          previousSibling: previousNode
        } = element;
        if (previousNode && REGEX_COLON.test((_previousNode$textCon = previousNode.textContent) !== null && _previousNode$textCon !== void 0 ? _previousNode$textCon : "")) {
          previousNode = previousNode.previousSibling;
        }
        if (previousNode && REGEX_PREFIX.test((_previousNode$textCon2 = previousNode.textContent) !== null && _previousNode$textCon2 !== void 0 ? _previousNode$textCon2 : "")) {
          const title = textContent === null || textContent === void 0 ? void 0 : textContent.trim();
          if (!title) {
            continue;
          }
          titles[titles.length] = title;
          (0, import_ext_gadget.setRedirectTextSuffix)(title, "{{学名重定向}}");
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
//! src/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.ts
(function toolsRedirectBioLatinNames() {
  void (0, import_ext_gadget3.checkDependencies)("ToolsRedirect").then(checkRedirect);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzLnRzIiwgInNyYy9Ub29sc1JlZGlyZWN0LWJpby1sYXRpbi1uYW1lcy9tb2R1bGVzL2Jpby1sYXRpbi1uYW1lcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjaGVja0RlcGVuZGVuY2llc30gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Y2hlY2tSZWRpcmVjdH0gZnJvbSAnLi9tb2R1bGVzL2Jpby1sYXRpbi1uYW1lcyc7XG5cbihmdW5jdGlvbiB0b29sc1JlZGlyZWN0QmlvTGF0aW5OYW1lcygpIHtcblx0dm9pZCBjaGVja0RlcGVuZGVuY2llcygnVG9vbHNSZWRpcmVjdCcpLnRoZW4oY2hlY2tSZWRpcmVjdCk7XG59KSgpO1xuIiwgImltcG9ydCB7ZmluZFJlZGlyZWN0Q2FsbGJhY2ssIHNldFJlZGlyZWN0VGV4dFN1ZmZpeH0gZnJvbSAnZXh0LmdhZGdldC5Ub29sc1JlZGlyZWN0JztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGNoZWNrUmVkaXJlY3QgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IFJFR0VYX1BSRUZJWDogUmVnRXhwID0gL1vlrablrbhd5ZCNXFxzKls677yaXT9cXHMqJC87XG5cdGNvbnN0IFJFR0VYX0NPTE9OOiBSZWdFeHAgPSAvXlxccypbOu+8ml0/XFxzKiQvO1xuXG5cdGZpbmRSZWRpcmVjdENhbGxiYWNrKChfcGFnZU5hbWU6IHN0cmluZywgJGNvbnRlbnQ6IEpRdWVyeSk6IHN0cmluZ1tdID0+IHtcblx0XHRjb25zdCB0aXRsZXM6IHN0cmluZ1tdID0gW107XG5cblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZCgnPiBwID4gW2xhbmc9XCJsYVwiXSwgPiBwID4gaScpKSB7XG5cdFx0XHRjb25zdCB7dGV4dENvbnRlbnR9ID0gZWxlbWVudDtcblx0XHRcdGxldCB7cHJldmlvdXNTaWJsaW5nOiBwcmV2aW91c05vZGV9ID0gZWxlbWVudDtcblxuXHRcdFx0aWYgKHByZXZpb3VzTm9kZSAmJiBSRUdFWF9DT0xPTi50ZXN0KHByZXZpb3VzTm9kZS50ZXh0Q29udGVudCA/PyAnJykpIHtcblx0XHRcdFx0cHJldmlvdXNOb2RlID0gcHJldmlvdXNOb2RlLnByZXZpb3VzU2libGluZztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHByZXZpb3VzTm9kZSAmJiBSRUdFWF9QUkVGSVgudGVzdChwcmV2aW91c05vZGUudGV4dENvbnRlbnQgPz8gJycpKSB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0ZXh0Q29udGVudD8udHJpbSgpO1xuXHRcdFx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSB0aXRsZTsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHRcdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgJ3t75a2m5ZCN6YeN5a6a5ZCRfX0nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdW5pcXVlQXJyYXkodGl0bGVzKTsgLy8gUmVwbGFjZSBgWy4uLm5ldyBTZXQoKV1gIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0fSk7XG59O1xuXG5leHBvcnQge2NoZWNrUmVkaXJlY3R9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFnQ0MsUUFBQSxpQkFBQTs7QUNBaEMsSUFBQUMsb0JBQTBERCxRQUFBLDBCQUFBO0FBQzFELElBQUFFLHFCQUEwQkYsUUFBQSxpQkFBQTtBQUUxQixJQUFNRyxnQkFBZ0JBLE1BQVk7QUFDakMsUUFBTUMsZUFBdUI7QUFDN0IsUUFBTUMsY0FBc0I7QUFFNUIsR0FBQSxHQUFBSixrQkFBQUssc0JBQXFCLENBQUNDLFdBQW1CQyxhQUErQjtBQUN2RSxVQUFNQyxTQUFtQixDQUFBO0FBQUMsUUFBQUMsWUFBQUMsMkJBRUpILFNBQVNJLEtBQUssNEJBQTRCLENBQUEsR0FBQUM7QUFBQSxRQUFBO0FBQWhFLFdBQUFILFVBQUFJLEVBQUEsR0FBQSxFQUFBRCxRQUFBSCxVQUFBSyxFQUFBLEdBQUFDLFFBQW1FO0FBQUEsWUFBQUMsdUJBQUFDO0FBQUEsY0FBeERDLFVBQUFOLE1BQUFPO0FBQ1YsY0FBTTtVQUFDQztRQUFXLElBQUlGO0FBQ3RCLFlBQUk7VUFBQ0csaUJBQWlCQztRQUFZLElBQUlKO0FBRXRDLFlBQUlJLGdCQUFnQmxCLFlBQVltQixNQUFBUCx3QkFBS00sYUFBYUYsaUJBQUEsUUFBQUosMEJBQUEsU0FBQUEsd0JBQWUsRUFBRSxHQUFHO0FBQ3JFTSx5QkFBZUEsYUFBYUQ7UUFDN0I7QUFFQSxZQUFJQyxnQkFBZ0JuQixhQUFhb0IsTUFBQU4seUJBQUtLLGFBQWFGLGlCQUFBLFFBQUFILDJCQUFBLFNBQUFBLHlCQUFlLEVBQUUsR0FBRztBQUN0RSxnQkFBTU8sUUFBNEJKLGdCQUFBLFFBQUFBLGdCQUFBLFNBQUEsU0FBQUEsWUFBYUssS0FBSztBQUNwRCxjQUFJLENBQUNELE9BQU87QUFDWDtVQUNEO0FBRUFoQixpQkFBT0EsT0FBT2tCLE1BQU0sSUFBSUY7QUFDeEIsV0FBQSxHQUFBeEIsa0JBQUEyQix1QkFBc0JILE9BQU8sV0FBVztRQUN6QztNQUNEO0lBQUEsU0FBQUksS0FBQTtBQUFBbkIsZ0JBQUFvQixFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBbkIsZ0JBQUFxQixFQUFBO0lBQUE7QUFFQSxZQUFBLEdBQU83QixtQkFBQThCLGFBQVl2QixNQUFNO0VBQzFCLENBQUM7QUFDRjs7Q0Q1QkMsU0FBU3dCLDZCQUE2QjtBQUN0QyxRQUFBLEdBQUtsQyxtQkFBQW1DLG1CQUFrQixlQUFlLEVBQUVDLEtBQUtoQyxhQUFhO0FBQzNELEdBQUc7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJjaGVja1JlZGlyZWN0IiwgIlJFR0VYX1BSRUZJWCIsICJSRUdFWF9DT0xPTiIsICJmaW5kUmVkaXJlY3RDYWxsYmFjayIsICJfcGFnZU5hbWUiLCAiJGNvbnRlbnQiLCAidGl0bGVzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJmaW5kIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgIl9wcmV2aW91c05vZGUkdGV4dENvbiIsICJfcHJldmlvdXNOb2RlJHRleHRDb24yIiwgImVsZW1lbnQiLCAidmFsdWUiLCAidGV4dENvbnRlbnQiLCAicHJldmlvdXNTaWJsaW5nIiwgInByZXZpb3VzTm9kZSIsICJ0ZXN0IiwgInRpdGxlIiwgInRyaW0iLCAibGVuZ3RoIiwgInNldFJlZGlyZWN0VGV4dFN1ZmZpeCIsICJlcnIiLCAiZSIsICJmIiwgInVuaXF1ZUFycmF5IiwgInRvb2xzUmVkaXJlY3RCaW9MYXRpbk5hbWVzIiwgImNoZWNrRGVwZW5kZW5jaWVzIiwgInRoZW4iXQp9Cg==
