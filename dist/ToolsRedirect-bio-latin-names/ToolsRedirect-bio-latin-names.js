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
        change: "gadget-ToolsRedirect=1",
        format: "json"
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
          window.toolsRedirect.setRedirectTextSuffix(title, "{{学名重定向}}");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return [...(0, import_ext_gadget3.uniqueArray)(titles)];
  });
};
//! src/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.ts
(function toolsRedirectBioLatinNames() {
  void checkDependencies();
  checkRedirect();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL29wdGlvbnMuanNvbiIsICJzcmMvVG9vbHNSZWRpcmVjdC1iaW8tbGF0aW4tbmFtZXMvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL21vZHVsZXMvYmlvLWxhdGluLW5hbWVzLnRzIiwgInNyYy9Ub29sc1JlZGlyZWN0LWJpby1sYXRpbi1uYW1lcy9Ub29sc1JlZGlyZWN0LWJpby1sYXRpbi1uYW1lcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgVG9vbHNSZWRpcmVjdC1iaW8tbGF0aW4tbmFtZXMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBjaGVja0RlcGVuZGVuY2llcyA9IGFzeW5jICgpID0+IHtcblx0aWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCdnYWRnZXQtVG9vbHNSZWRpcmVjdCcpKSB7XG5cdFx0dm9pZCBhcGkucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdFx0YWN0aW9uOiAnb3B0aW9ucycsXG5cdFx0XHRjaGFuZ2U6ICdnYWRnZXQtVG9vbHNSZWRpcmVjdD0xJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdH0gYXMgY29uc3Qgc2F0aXNmaWVzIEFwaU9wdGlvbnNQYXJhbXMpO1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LmdhZGdldC5Ub29sc1JlZGlyZWN0Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y2hlY2tEZXBlbmRlbmNpZXN9O1xuIiwgImltcG9ydCB7ZmluZFJlZGlyZWN0Q2FsbGJhY2t9IGZyb20gJ2V4dC5nYWRnZXQuVG9vbHNSZWRpcmVjdCc7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBjaGVja1JlZGlyZWN0ID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBSRUdFWF9QUkVGSVg6IFJlZ0V4cCA9IC9b5a2m5a24XeWQjVxccypbOu+8ml0/XFxzKiQvO1xuXHRjb25zdCBSRUdFWF9DT0xPTjogUmVnRXhwID0gL15cXHMqWzrvvJpdP1xccyokLztcblxuXHRmaW5kUmVkaXJlY3RDYWxsYmFjaygoX3BhZ2VOYW1lOiBzdHJpbmcsICRjb250ZW50OiBKUXVlcnkpOiBzdHJpbmdbXSA9PiB7XG5cdFx0Y29uc3QgdGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQoJz4gcCA+IFtsYW5nPVwibGFcIl0sID4gcCA+IGknKSkge1xuXHRcdFx0Y29uc3Qge3RleHRDb250ZW50fSA9IGVsZW1lbnQ7XG5cdFx0XHRsZXQge3ByZXZpb3VzU2libGluZzogcHJldmlvdXNOb2RlfSA9IGVsZW1lbnQ7XG5cblx0XHRcdGlmIChwcmV2aW91c05vZGUgJiYgUkVHRVhfQ09MT04udGVzdChwcmV2aW91c05vZGUudGV4dENvbnRlbnQgPz8gJycpKSB7XG5cdFx0XHRcdHByZXZpb3VzTm9kZSA9IHByZXZpb3VzTm9kZS5wcmV2aW91c1NpYmxpbmc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwcmV2aW91c05vZGUgJiYgUkVHRVhfUFJFRklYLnRlc3QocHJldmlvdXNOb2RlLnRleHRDb250ZW50ID8/ICcnKSkge1xuXHRcdFx0XHRjb25zdCB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGV4dENvbnRlbnQ/LnRyaW0oKTtcblx0XHRcdFx0aWYgKCF0aXRsZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gdGl0bGU7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdFx0XHR3aW5kb3cudG9vbHNSZWRpcmVjdC5zZXRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsICd7e+WtpuWQjemHjeWumuWQkX19Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFsuLi51bmlxdWVBcnJheSh0aXRsZXMpXTsgLy8gUmVwbGFjZSBgbmV3IFNldCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH0pO1xufTtcblxuZXhwb3J0IHtjaGVja1JlZGlyZWN0fTtcbiIsICJpbXBvcnQge2NoZWNrRGVwZW5kZW5jaWVzfSBmcm9tICcuL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMnO1xuaW1wb3J0IHtjaGVja1JlZGlyZWN0fSBmcm9tICcuL21vZHVsZXMvYmlvLWxhdGluLW5hbWVzJztcblxuKGZ1bmN0aW9uIHRvb2xzUmVkaXJlY3RCaW9MYXRpbk5hbWVzKCkge1xuXHR2b2lkIGNoZWNrRGVwZW5kZW5jaWVzKCk7XG5cdGNoZWNrUmVkaXJlY3QoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsVUFBVzs7QUNBWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxpQ0FBQUMsT0FBbURMLE9BQU8sQ0FBRTs7QUNEaEYsSUFBTU0sb0JBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBb0IsYUFBWTtBQUNyQyxRQUFJLENBQUNDLEdBQUdDLEtBQUtDLFFBQVFDLElBQUksc0JBQXNCLEdBQUc7QUFDakQsV0FBS1QsSUFBSVUsa0JBQWtCO1FBQzFCQyxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsUUFBUTtNQUNULENBQXFDO0FBQ3JDLFlBQU1QLEdBQUdRLE9BQU9DLE1BQU0sMEJBQTBCO0lBQ2pEO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FUTVoscUJBQUE7QUFBQSxXQUFBQyxLQUFBWSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDRk4sSUFBQUMscUJBQW1DbkIsUUFBQSwwQkFBQTtBQUNuQyxJQUFBb0IscUJBQTBCcEIsUUFBQSxpQkFBQTtBQUUxQixJQUFNcUIsZ0JBQWdCQSxNQUFZO0FBQ2pDLFFBQU1DLGVBQXVCO0FBQzdCLFFBQU1DLGNBQXNCO0FBRTVCLEdBQUEsR0FBQUosbUJBQUFLLHNCQUFxQixDQUFDQyxXQUFtQkMsYUFBK0I7QUFDdkUsVUFBTUMsU0FBbUIsQ0FBQTtBQUFDLFFBQUFDLFlBQUFDLDJCQUVKSCxTQUFTSSxLQUFLLDRCQUE0QixDQUFBLEdBQUFDO0FBQUEsUUFBQTtBQUFoRSxXQUFBSCxVQUFBSSxFQUFBLEdBQUEsRUFBQUQsUUFBQUgsVUFBQUssRUFBQSxHQUFBQyxRQUFtRTtBQUFBLFlBQUFDLHVCQUFBQztBQUFBLGNBQXhEQyxVQUFBTixNQUFBTztBQUNWLGNBQU07VUFBQ0M7UUFBVyxJQUFJRjtBQUN0QixZQUFJO1VBQUNHLGlCQUFpQkM7UUFBWSxJQUFJSjtBQUV0QyxZQUFJSSxnQkFBZ0JsQixZQUFZbUIsTUFBQVAsd0JBQUtNLGFBQWFGLGlCQUFBLFFBQUFKLDBCQUFBLFNBQUFBLHdCQUFlLEVBQUUsR0FBRztBQUNyRU0seUJBQWVBLGFBQWFEO1FBQzdCO0FBRUEsWUFBSUMsZ0JBQWdCbkIsYUFBYW9CLE1BQUFOLHlCQUFLSyxhQUFhRixpQkFBQSxRQUFBSCwyQkFBQSxTQUFBQSx5QkFBZSxFQUFFLEdBQUc7QUFDdEUsZ0JBQU1PLFFBQTRCSixnQkFBQSxRQUFBQSxnQkFBQSxTQUFBLFNBQUFBLFlBQWFLLEtBQUs7QUFDcEQsY0FBSSxDQUFDRCxPQUFPO0FBQ1g7VUFDRDtBQUVBaEIsaUJBQU9BLE9BQU9rQixNQUFNLElBQUlGO0FBQ3hCRyxpQkFBT0MsY0FBY0Msc0JBQXNCTCxPQUFPLFdBQVc7UUFDOUQ7TUFDRDtJQUFBLFNBQUFNLEtBQUE7QUFBQXJCLGdCQUFBc0IsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQXJCLGdCQUFBdUIsRUFBQTtJQUFBO0FBRUEsV0FBTyxDQUFDLElBQUEsR0FBRy9CLG1CQUFBZ0MsYUFBWXpCLE1BQU0sQ0FBQztFQUMvQixDQUFDO0FBQ0Y7O0NDNUJDLFNBQVMwQiw2QkFBNkI7QUFDdEMsT0FBS2pELGtCQUFrQjtBQUN2QmlCLGdCQUFjO0FBQ2YsR0FBRzsiLAogICJuYW1lcyI6IFsidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImNoZWNrRGVwZW5kZW5jaWVzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAibXciLCAidXNlciIsICJvcHRpb25zIiwgImdldCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJhY3Rpb24iLCAiY2hhbmdlIiwgImZvcm1hdCIsICJsb2FkZXIiLCAidXNpbmciLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiY2hlY2tSZWRpcmVjdCIsICJSRUdFWF9QUkVGSVgiLCAiUkVHRVhfQ09MT04iLCAiZmluZFJlZGlyZWN0Q2FsbGJhY2siLCAiX3BhZ2VOYW1lIiwgIiRjb250ZW50IiwgInRpdGxlcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZmluZCIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJfcHJldmlvdXNOb2RlJHRleHRDb24iLCAiX3ByZXZpb3VzTm9kZSR0ZXh0Q29uMiIsICJlbGVtZW50IiwgInZhbHVlIiwgInRleHRDb250ZW50IiwgInByZXZpb3VzU2libGluZyIsICJwcmV2aW91c05vZGUiLCAidGVzdCIsICJ0aXRsZSIsICJ0cmltIiwgImxlbmd0aCIsICJ3aW5kb3ciLCAidG9vbHNSZWRpcmVjdCIsICJzZXRSZWRpcmVjdFRleHRTdWZmaXgiLCAiZXJyIiwgImUiLCAiZiIsICJ1bmlxdWVBcnJheSIsICJ0b29sc1JlZGlyZWN0QmlvTGF0aW5OYW1lcyJdCn0K
