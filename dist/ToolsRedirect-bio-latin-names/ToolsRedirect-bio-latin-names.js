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
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
//! src/ToolsRedirect-bio-latin-names/options.json
var version = "2.0";
//! src/ToolsRedirect-bio-latin-names/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("ToolsRedirect-bio-latin-names/".concat(version));
//! src/ToolsRedirect-bio-latin-names/modules/checkDependencies.ts
var checkDependencies = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    if (!mw.user.options.get("gadget-ToolsRedirect")) {
      void api.postWithEditToken({
        action: "options",
        change: "gadget-ToolsRedirect=1"
      });
      yield mw.loader.using("ext.gadget.ToolsRedirect");
    }
  });
  return function checkDependencies2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/ToolsRedirect-bio-latin-names/modules/bio-latin-names.ts
var import_ext_gadget2 = require("ext.gadget.ToolsRedirect");
var import_ext_gadget3 = require("ext.gadget.Util");
var checkRedirect = () => {
  const REGEX_PREFIX = /[学學]名\s*[:：]?\s*$/;
  const REGEX_COLON = /^\s*[:：]?\s*$/;
  (0, import_ext_gadget2.findRedirectCallback)((_pageName, $content) => {
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
          (0, import_ext_gadget2.setRedirectTextSuffix)(title, "{{学名重定向}}");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return (0, import_ext_gadget3.uniqueArray)(titles);
  });
};
//! src/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.ts
(function toolsRedirectBioLatinNames() {
  void checkDependencies();
  checkRedirect();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL29wdGlvbnMuanNvbiIsICJzcmMvVG9vbHNSZWRpcmVjdC1iaW8tbGF0aW4tbmFtZXMvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL21vZHVsZXMvYmlvLWxhdGluLW5hbWVzLnRzIiwgInNyYy9Ub29sc1JlZGlyZWN0LWJpby1sYXRpbi1uYW1lcy9Ub29sc1JlZGlyZWN0LWJpby1sYXRpbi1uYW1lcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgVG9vbHNSZWRpcmVjdC1iaW8tbGF0aW4tbmFtZXMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBjaGVja0RlcGVuZGVuY2llcyA9IGFzeW5jICgpID0+IHtcblx0aWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCdnYWRnZXQtVG9vbHNSZWRpcmVjdCcpKSB7XG5cdFx0dm9pZCBhcGkucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdFx0YWN0aW9uOiAnb3B0aW9ucycsXG5cdFx0XHRjaGFuZ2U6ICdnYWRnZXQtVG9vbHNSZWRpcmVjdD0xJyxcblx0XHR9IGFzIEFwaU9wdGlvbnNQYXJhbXMpO1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LmdhZGdldC5Ub29sc1JlZGlyZWN0Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y2hlY2tEZXBlbmRlbmNpZXN9O1xuIiwgImltcG9ydCB7ZmluZFJlZGlyZWN0Q2FsbGJhY2ssIHNldFJlZGlyZWN0VGV4dFN1ZmZpeH0gZnJvbSAnZXh0LmdhZGdldC5Ub29sc1JlZGlyZWN0JztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGNoZWNrUmVkaXJlY3QgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IFJFR0VYX1BSRUZJWDogUmVnRXhwID0gL1vlrablrbhd5ZCNXFxzKls677yaXT9cXHMqJC87XG5cdGNvbnN0IFJFR0VYX0NPTE9OOiBSZWdFeHAgPSAvXlxccypbOu+8ml0/XFxzKiQvO1xuXG5cdGZpbmRSZWRpcmVjdENhbGxiYWNrKChfcGFnZU5hbWU6IHN0cmluZywgJGNvbnRlbnQ6IEpRdWVyeSk6IHN0cmluZ1tdID0+IHtcblx0XHRjb25zdCB0aXRsZXM6IHN0cmluZ1tdID0gW107XG5cblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZCgnPiBwID4gW2xhbmc9XCJsYVwiXSwgPiBwID4gaScpKSB7XG5cdFx0XHRjb25zdCB7dGV4dENvbnRlbnR9ID0gZWxlbWVudDtcblx0XHRcdGxldCB7cHJldmlvdXNTaWJsaW5nOiBwcmV2aW91c05vZGV9ID0gZWxlbWVudDtcblxuXHRcdFx0aWYgKHByZXZpb3VzTm9kZSAmJiBSRUdFWF9DT0xPTi50ZXN0KHByZXZpb3VzTm9kZS50ZXh0Q29udGVudCA/PyAnJykpIHtcblx0XHRcdFx0cHJldmlvdXNOb2RlID0gcHJldmlvdXNOb2RlLnByZXZpb3VzU2libGluZztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHByZXZpb3VzTm9kZSAmJiBSRUdFWF9QUkVGSVgudGVzdChwcmV2aW91c05vZGUudGV4dENvbnRlbnQgPz8gJycpKSB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0ZXh0Q29udGVudD8udHJpbSgpO1xuXHRcdFx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSB0aXRsZTsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHRcdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgJ3t75a2m5ZCN6YeN5a6a5ZCRfX0nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdW5pcXVlQXJyYXkodGl0bGVzKTsgLy8gUmVwbGFjZSBgWy4uLm5ldyBTZXQoKV1gIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0fSk7XG59O1xuXG5leHBvcnQge2NoZWNrUmVkaXJlY3R9O1xuIiwgImltcG9ydCB7Y2hlY2tEZXBlbmRlbmNpZXN9IGZyb20gJy4vbW9kdWxlcy9jaGVja0RlcGVuZGVuY2llcyc7XG5pbXBvcnQge2NoZWNrUmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy9iaW8tbGF0aW4tbmFtZXMnO1xuXG4oZnVuY3Rpb24gdG9vbHNSZWRpcmVjdEJpb0xhdGluTmFtZXMoKSB7XG5cdHZvaWQgY2hlY2tEZXBlbmRlbmNpZXMoKTtcblx0Y2hlY2tSZWRpcmVjdCgpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsaUNBQUFDLE9BQW1ETCxPQUFPLENBQUU7O0FDRGhGLElBQU1NLG9CQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQW9CLGFBQVk7QUFDckMsUUFBSSxDQUFDQyxHQUFHQyxLQUFLQyxRQUFRQyxJQUFJLHNCQUFzQixHQUFHO0FBQ2pELFdBQUtULElBQUlVLGtCQUFrQjtRQUMxQkMsUUFBUTtRQUNSQyxRQUFRO01BQ1QsQ0FBcUI7QUFDckIsWUFBTU4sR0FBR08sT0FBT0MsTUFBTSwwQkFBMEI7SUFDakQ7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQVJNWCxxQkFBQTtBQUFBLFdBQUFDLEtBQUFXLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNGTixJQUFBQyxxQkFBMERsQixRQUFBLDBCQUFBO0FBQzFELElBQUFtQixxQkFBMEJuQixRQUFBLGlCQUFBO0FBRTFCLElBQU1vQixnQkFBZ0JBLE1BQVk7QUFDakMsUUFBTUMsZUFBdUI7QUFDN0IsUUFBTUMsY0FBc0I7QUFFNUIsR0FBQSxHQUFBSixtQkFBQUssc0JBQXFCLENBQUNDLFdBQW1CQyxhQUErQjtBQUN2RSxVQUFNQyxTQUFtQixDQUFBO0FBQUMsUUFBQUMsWUFBQUMsMkJBRUpILFNBQVNJLEtBQUssNEJBQTRCLENBQUEsR0FBQUM7QUFBQSxRQUFBO0FBQWhFLFdBQUFILFVBQUFJLEVBQUEsR0FBQSxFQUFBRCxRQUFBSCxVQUFBSyxFQUFBLEdBQUFDLFFBQW1FO0FBQUEsWUFBQUMsdUJBQUFDO0FBQUEsY0FBeERDLFVBQUFOLE1BQUFPO0FBQ1YsY0FBTTtVQUFDQztRQUFXLElBQUlGO0FBQ3RCLFlBQUk7VUFBQ0csaUJBQWlCQztRQUFZLElBQUlKO0FBRXRDLFlBQUlJLGdCQUFnQmxCLFlBQVltQixNQUFBUCx3QkFBS00sYUFBYUYsaUJBQUEsUUFBQUosMEJBQUEsU0FBQUEsd0JBQWUsRUFBRSxHQUFHO0FBQ3JFTSx5QkFBZUEsYUFBYUQ7UUFDN0I7QUFFQSxZQUFJQyxnQkFBZ0JuQixhQUFhb0IsTUFBQU4seUJBQUtLLGFBQWFGLGlCQUFBLFFBQUFILDJCQUFBLFNBQUFBLHlCQUFlLEVBQUUsR0FBRztBQUN0RSxnQkFBTU8sUUFBNEJKLGdCQUFBLFFBQUFBLGdCQUFBLFNBQUEsU0FBQUEsWUFBYUssS0FBSztBQUNwRCxjQUFJLENBQUNELE9BQU87QUFDWDtVQUNEO0FBRUFoQixpQkFBT0EsT0FBT2tCLE1BQU0sSUFBSUY7QUFDeEIsV0FBQSxHQUFBeEIsbUJBQUEyQix1QkFBc0JILE9BQU8sV0FBVztRQUN6QztNQUNEO0lBQUEsU0FBQUksS0FBQTtBQUFBbkIsZ0JBQUFvQixFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBbkIsZ0JBQUFxQixFQUFBO0lBQUE7QUFFQSxZQUFBLEdBQU83QixtQkFBQThCLGFBQVl2QixNQUFNO0VBQzFCLENBQUM7QUFDRjs7Q0M1QkMsU0FBU3dCLDZCQUE2QjtBQUN0QyxPQUFLOUMsa0JBQWtCO0FBQ3ZCZ0IsZ0JBQWM7QUFDZixHQUFHOyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiY2hlY2tEZXBlbmRlbmNpZXMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJtdyIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiZ2V0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImFjdGlvbiIsICJjaGFuZ2UiLCAibG9hZGVyIiwgInVzaW5nIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImNoZWNrUmVkaXJlY3QiLCAiUkVHRVhfUFJFRklYIiwgIlJFR0VYX0NPTE9OIiwgImZpbmRSZWRpcmVjdENhbGxiYWNrIiwgIl9wYWdlTmFtZSIsICIkY29udGVudCIsICJ0aXRsZXMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImZpbmQiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiX3ByZXZpb3VzTm9kZSR0ZXh0Q29uIiwgIl9wcmV2aW91c05vZGUkdGV4dENvbjIiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJ0ZXh0Q29udGVudCIsICJwcmV2aW91c1NpYmxpbmciLCAicHJldmlvdXNOb2RlIiwgInRlc3QiLCAidGl0bGUiLCAidHJpbSIsICJsZW5ndGgiLCAic2V0UmVkaXJlY3RUZXh0U3VmZml4IiwgImVyciIsICJlIiwgImYiLCAidW5pcXVlQXJyYXkiLCAidG9vbHNSZWRpcmVjdEJpb0xhdGluTmFtZXMiXQp9Cg==
