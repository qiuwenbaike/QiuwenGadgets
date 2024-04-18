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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
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
          window.toolsRedirect.setRedirectTextSuffix(title, "{{学名重定向}}");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return [...new Set(titles)];
  });
};
//! src/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.ts
(function toolsRedirectBioLatinNames() {
  void checkDependencies();
  checkRedirect();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL29wdGlvbnMuanNvbiIsICJzcmMvVG9vbHNSZWRpcmVjdC1iaW8tbGF0aW4tbmFtZXMvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL21vZHVsZXMvYmlvLWxhdGluLW5hbWVzLnRzIiwgInNyYy9Ub29sc1JlZGlyZWN0LWJpby1sYXRpbi1uYW1lcy9Ub29sc1JlZGlyZWN0LWJpby1sYXRpbi1uYW1lcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgVG9vbHNSZWRpcmVjdC1iaW8tbGF0aW4tbmFtZXMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBjaGVja0RlcGVuZGVuY2llcyA9IGFzeW5jICgpID0+IHtcblx0aWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCdnYWRnZXQtVG9vbHNSZWRpcmVjdCcpKSB7XG5cdFx0dm9pZCBhcGkucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdFx0YWN0aW9uOiAnb3B0aW9ucycsXG5cdFx0XHRjaGFuZ2U6ICdnYWRnZXQtVG9vbHNSZWRpcmVjdD0xJyxcblx0XHR9IGFzIEFwaU9wdGlvbnNQYXJhbXMpO1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LmdhZGdldC5Ub29sc1JlZGlyZWN0Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y2hlY2tEZXBlbmRlbmNpZXN9O1xuIiwgImltcG9ydCB7ZmluZFJlZGlyZWN0Q2FsbGJhY2t9IGZyb20gJ2V4dC5nYWRnZXQuVG9vbHNSZWRpcmVjdCc7XG5cbmNvbnN0IGNoZWNrUmVkaXJlY3QgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IFJFR0VYX1BSRUZJWDogUmVnRXhwID0gL1vlrablrbhd5ZCNXFxzKls677yaXT9cXHMqJC87XG5cdGNvbnN0IFJFR0VYX0NPTE9OOiBSZWdFeHAgPSAvXlxccypbOu+8ml0/XFxzKiQvO1xuXG5cdGZpbmRSZWRpcmVjdENhbGxiYWNrKChfcGFnZU5hbWU6IHN0cmluZywgJGNvbnRlbnQ6IEpRdWVyeSk6IHN0cmluZ1tdID0+IHtcblx0XHRjb25zdCB0aXRsZXM6IHN0cmluZ1tdID0gW107XG5cblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZCgnPiBwID4gW2xhbmc9XCJsYVwiXSwgPiBwID4gaScpKSB7XG5cdFx0XHRjb25zdCB7dGV4dENvbnRlbnR9ID0gZWxlbWVudDtcblx0XHRcdGxldCB7cHJldmlvdXNTaWJsaW5nOiBwcmV2aW91c05vZGV9ID0gZWxlbWVudDtcblxuXHRcdFx0aWYgKHByZXZpb3VzTm9kZSAmJiBSRUdFWF9DT0xPTi50ZXN0KHByZXZpb3VzTm9kZS50ZXh0Q29udGVudCA/PyAnJykpIHtcblx0XHRcdFx0cHJldmlvdXNOb2RlID0gcHJldmlvdXNOb2RlLnByZXZpb3VzU2libGluZztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHByZXZpb3VzTm9kZSAmJiBSRUdFWF9QUkVGSVgudGVzdChwcmV2aW91c05vZGUudGV4dENvbnRlbnQgPz8gJycpKSB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0ZXh0Q29udGVudD8udHJpbSgpO1xuXHRcdFx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSB0aXRsZTsgLy8gUmVwbGFjZSBgdGl0bGVzLnB1c2godGl0bGUpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHRcdHdpbmRvdy50b29sc1JlZGlyZWN0LnNldFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgJ3t75a2m5ZCN6YeN5a6a5ZCRfX0nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gWy4uLm5ldyBTZXQodGl0bGVzKV07XG5cdH0pO1xufTtcblxuZXhwb3J0IHtjaGVja1JlZGlyZWN0fTtcbiIsICJpbXBvcnQge2NoZWNrRGVwZW5kZW5jaWVzfSBmcm9tICcuL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMnO1xuaW1wb3J0IHtjaGVja1JlZGlyZWN0fSBmcm9tICcuL21vZHVsZXMvYmlvLWxhdGluLW5hbWVzJztcblxuKGZ1bmN0aW9uIHRvb2xzUmVkaXJlY3RCaW9MYXRpbk5hbWVzKCkge1xuXHR2b2lkIGNoZWNrRGVwZW5kZW5jaWVzKCk7XG5cdGNoZWNrUmVkaXJlY3QoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsVUFBVzs7QUNBWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxpQ0FBQUMsT0FBbURMLE9BQU8sQ0FBRTs7QUNEaEYsSUFBTU0sb0JBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBb0IsYUFBWTtBQUNyQyxRQUFJLENBQUNDLEdBQUdDLEtBQUtDLFFBQVFDLElBQUksc0JBQXNCLEdBQUc7QUFDakQsV0FBS1QsSUFBSVUsa0JBQWtCO1FBQzFCQyxRQUFRO1FBQ1JDLFFBQVE7TUFDVCxDQUFxQjtBQUNyQixZQUFNTixHQUFHTyxPQUFPQyxNQUFNLDBCQUEwQjtJQUNqRDtFQUNELENBQUE7QUFBQSxTQUFBLFNBUk1YLHFCQUFBO0FBQUEsV0FBQUMsS0FBQVcsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBQ0ZOLElBQUFDLHFCQUFtQ2xCLFFBQUEsMEJBQUE7QUFFbkMsSUFBTW1CLGdCQUFnQkEsTUFBWTtBQUNqQyxRQUFNQyxlQUF1QjtBQUM3QixRQUFNQyxjQUFzQjtBQUU1QixHQUFBLEdBQUFILG1CQUFBSSxzQkFBcUIsQ0FBQ0MsV0FBbUJDLGFBQStCO0FBQ3ZFLFVBQU1DLFNBQW1CLENBQUE7QUFBQyxRQUFBQyxZQUFBQywyQkFFSkgsU0FBU0ksS0FBSyw0QkFBNEIsQ0FBQSxHQUFBQztBQUFBLFFBQUE7QUFBaEUsV0FBQUgsVUFBQUksRUFBQSxHQUFBLEVBQUFELFFBQUFILFVBQUFLLEVBQUEsR0FBQUMsUUFBbUU7QUFBQSxZQUFBQyx1QkFBQUM7QUFBQSxjQUF4REMsVUFBQU4sTUFBQU87QUFDVixjQUFNO1VBQUNDO1FBQVcsSUFBSUY7QUFDdEIsWUFBSTtVQUFDRyxpQkFBaUJDO1FBQVksSUFBSUo7QUFFdEMsWUFBSUksZ0JBQWdCbEIsWUFBWW1CLE1BQUFQLHdCQUFLTSxhQUFhRixpQkFBQSxRQUFBSiwwQkFBQSxTQUFBQSx3QkFBZSxFQUFFLEdBQUc7QUFDckVNLHlCQUFlQSxhQUFhRDtRQUM3QjtBQUVBLFlBQUlDLGdCQUFnQm5CLGFBQWFvQixNQUFBTix5QkFBS0ssYUFBYUYsaUJBQUEsUUFBQUgsMkJBQUEsU0FBQUEseUJBQWUsRUFBRSxHQUFHO0FBQ3RFLGdCQUFNTyxRQUE0QkosZ0JBQUEsUUFBQUEsZ0JBQUEsU0FBQSxTQUFBQSxZQUFhSyxLQUFLO0FBQ3BELGNBQUksQ0FBQ0QsT0FBTztBQUNYO1VBQ0Q7QUFFQWhCLGlCQUFPQSxPQUFPa0IsTUFBTSxJQUFJRjtBQUN4QkcsaUJBQU9DLGNBQWNDLHNCQUFzQkwsT0FBTyxXQUFXO1FBQzlEO01BQ0Q7SUFBQSxTQUFBTSxLQUFBO0FBQUFyQixnQkFBQXNCLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUFyQixnQkFBQXVCLEVBQUE7SUFBQTtBQUVBLFdBQU8sQ0FBQyxHQUFHLElBQUlDLElBQUl6QixNQUFNLENBQUM7RUFDM0IsQ0FBQztBQUNGOztDQzNCQyxTQUFTMEIsNkJBQTZCO0FBQ3RDLE9BQUsvQyxrQkFBa0I7QUFDdkJlLGdCQUFjO0FBQ2YsR0FBRzsiLAogICJuYW1lcyI6IFsidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImNoZWNrRGVwZW5kZW5jaWVzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAibXciLCAidXNlciIsICJvcHRpb25zIiwgImdldCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJhY3Rpb24iLCAiY2hhbmdlIiwgImxvYWRlciIsICJ1c2luZyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImNoZWNrUmVkaXJlY3QiLCAiUkVHRVhfUFJFRklYIiwgIlJFR0VYX0NPTE9OIiwgImZpbmRSZWRpcmVjdENhbGxiYWNrIiwgIl9wYWdlTmFtZSIsICIkY29udGVudCIsICJ0aXRsZXMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImZpbmQiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiX3ByZXZpb3VzTm9kZSR0ZXh0Q29uIiwgIl9wcmV2aW91c05vZGUkdGV4dENvbjIiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJ0ZXh0Q29udGVudCIsICJwcmV2aW91c1NpYmxpbmciLCAicHJldmlvdXNOb2RlIiwgInRlc3QiLCAidGl0bGUiLCAidHJpbSIsICJsZW5ndGgiLCAid2luZG93IiwgInRvb2xzUmVkaXJlY3QiLCAic2V0UmVkaXJlY3RUZXh0U3VmZml4IiwgImVyciIsICJlIiwgImYiLCAiU2V0IiwgInRvb2xzUmVkaXJlY3RCaW9MYXRpbk5hbWVzIl0KfQo=
