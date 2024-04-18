/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-courtesy-and-art-names.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect/courtesy-and-art-names}
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
//! src/ToolsRedirect-courtesy-and-art-names/options.json
var version = "2.0";
//! src/ToolsRedirect-courtesy-and-art-names/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("ToolsRedirect-courtesy-and-art-names/".concat(version));
//! src/ToolsRedirect-courtesy-and-art-names/modules/checkDependencies.ts
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
//! src/ToolsRedirect-courtesy-and-art-names/modules/courtesy-and-art-names.ts
var import_ext_gadget2 = require("ext.gadget.ToolsRedirect");
var checkRedirect = () => {
  const REGEX_PREFIX = /[号字號]\s*$/;
  const compSurnames = ["欧阳", "歐陽", "令狐", "皇甫", "上官", "司徒", "诸葛", "諸葛", "司马", "司馬", "宇文", "呼延", "端木", "申屠", "尉迟", "尉遲", "轩辕", "軒轅", "夏侯", "南宫", "南宮", "司空", "鲜于", "鮮于", "西门", "西門", "独孤", "獨孤", "东方", "東方", "司寇", "羊舌", "第五", "梁丘", "锺离", "鍾離", "东郭", "東郭", "公孙", "公孫", "孟孙", "孟孫", "仲孙", "仲孫", "叔孙", "叔孫", "季孙", "季孫", "长孙", "長孫", "慕容", "闾丘", "閭丘", "东门", "東門", "公羊", "万俟", "百里", "公冶", "呼延", "浮屠", "即墨", "单于", "單于", "田丘"];
  const REGEX_COMP_SURNAME = new RegExp("^(".concat(compSurnames.join("|"), ")."));
  const findSurname = (pageName) => {
    if (REGEX_COMP_SURNAME.test(pageName)) {
      return REGEX_COMP_SURNAME.exec(pageName)[1];
    }
    return pageName[0];
  };
  (0, import_ext_gadget2.findRedirectCallback)((pageName, $content) => {
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
        if (!previousSibling) {
          continue;
        }
        if (REGEX_PREFIX.test(textContent !== null && textContent !== void 0 ? textContent : "")) {
          const name = textContent === null || textContent === void 0 ? void 0 : textContent.trim();
          if (!name) {
            continue;
          }
          if (!surname) {
            surname = findSurname(pageName);
          }
          titles[titles.length] = surname + name;
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
//! src/ToolsRedirect-courtesy-and-art-names/ToolsRedirect-courtesy-and-art-names.ts
(function toolsRedirectCourtesyAndArtNames() {
  void checkDependencies();
  checkRedirect();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy9vcHRpb25zLmpzb24iLCAic3JjL1Rvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy9tb2R1bGVzL2FwaS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC1jb3VydGVzeS1hbmQtYXJ0LW5hbWVzL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy9tb2R1bGVzL2NvdXJ0ZXN5LWFuZC1hcnQtbmFtZXMudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy9Ub29sc1JlZGlyZWN0LWNvdXJ0ZXN5LWFuZC1hcnQtbmFtZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFRvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGNoZWNrRGVwZW5kZW5jaWVzID0gYXN5bmMgKCkgPT4ge1xuXHRpZiAoIW13LnVzZXIub3B0aW9ucy5nZXQoJ2dhZGdldC1Ub29sc1JlZGlyZWN0JykpIHtcblx0XHR2b2lkIGFwaS5wb3N0V2l0aEVkaXRUb2tlbih7XG5cdFx0XHRhY3Rpb246ICdvcHRpb25zJyxcblx0XHRcdGNoYW5nZTogJ2dhZGdldC1Ub29sc1JlZGlyZWN0PTEnLFxuXHRcdH0gYXMgQXBpT3B0aW9uc1BhcmFtcyk7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuZ2FkZ2V0LlRvb2xzUmVkaXJlY3QnKTtcblx0fVxufTtcblxuZXhwb3J0IHtjaGVja0RlcGVuZGVuY2llc307XG4iLCAiaW1wb3J0IHtmaW5kUmVkaXJlY3RDYWxsYmFja30gZnJvbSAnZXh0LmdhZGdldC5Ub29sc1JlZGlyZWN0JztcblxuY29uc3QgY2hlY2tSZWRpcmVjdCA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3QgUkVHRVhfUFJFRklYOiBSZWdFeHAgPSAvW+WPt+Wtl+iZn11cXHMqJC87XG5cdGNvbnN0IGNvbXBTdXJuYW1lczogc3RyaW5nW10gPSBbXG5cdFx0J+asp+mYsycsXG5cdFx0J+atkOmZvScsXG5cdFx0J+S7pOeLkCcsXG5cdFx0J+eah+eUqycsXG5cdFx0J+S4iuWumCcsXG5cdFx0J+WPuOW+kicsXG5cdFx0J+ivuOiRmycsXG5cdFx0J+iruOiRmycsXG5cdFx0J+WPuOmprCcsXG5cdFx0J+WPuOmmrCcsXG5cdFx0J+Wuh+aWhycsXG5cdFx0J+WRvOW7ticsXG5cdFx0J+err+acqCcsXG5cdFx0J+eUs+WxoCcsXG5cdFx0J+Wwiei/nycsXG5cdFx0J+WwiemBsicsXG5cdFx0J+i9qei+lScsXG5cdFx0J+i7kui9hScsXG5cdFx0J+Wkj+S+rycsXG5cdFx0J+WNl+WuqycsXG5cdFx0J+WNl+WuricsXG5cdFx0J+WPuOepuicsXG5cdFx0J+mynOS6jicsXG5cdFx0J+muruS6jicsXG5cdFx0J+ilv+mXqCcsXG5cdFx0J+ilv+mWgCcsXG5cdFx0J+eLrOWtpCcsXG5cdFx0J+eNqOWtpCcsXG5cdFx0J+S4nOaWuScsXG5cdFx0J+adseaWuScsXG5cdFx0J+WPuOWvhycsXG5cdFx0J+e+iuiIjCcsXG5cdFx0J+esrOS6lCcsXG5cdFx0J+aigeS4mCcsXG5cdFx0J+mUuuemuycsXG5cdFx0J+mNvumboicsXG5cdFx0J+S4nOmDrScsXG5cdFx0J+adsemDrScsXG5cdFx0J+WFrOWtmScsXG5cdFx0J+WFrOWtqycsXG5cdFx0J+Wtn+WtmScsXG5cdFx0J+Wtn+WtqycsXG5cdFx0J+S7suWtmScsXG5cdFx0J+S7suWtqycsXG5cdFx0J+WPlOWtmScsXG5cdFx0J+WPlOWtqycsXG5cdFx0J+Wto+WtmScsXG5cdFx0J+Wto+WtqycsXG5cdFx0J+mVv+WtmScsXG5cdFx0J+mVt+WtqycsXG5cdFx0J+aFleWuuScsXG5cdFx0J+mXvuS4mCcsXG5cdFx0J+mWreS4mCcsXG5cdFx0J+S4nOmXqCcsXG5cdFx0J+adsemWgCcsXG5cdFx0J+WFrOe+iicsXG5cdFx0J+S4h+S/nycsXG5cdFx0J+eZvumHjCcsXG5cdFx0J+WFrOWGticsXG5cdFx0J+WRvOW7ticsXG5cdFx0J+a1ruWxoCcsXG5cdFx0J+WNs+WiqCcsXG5cdFx0J+WNleS6jicsXG5cdFx0J+WWruS6jicsXG5cdFx0J+eUsOS4mCcsXG5cdF0gYXMgY29uc3Q7XG5cdGNvbnN0IFJFR0VYX0NPTVBfU1VSTkFNRSA9IG5ldyBSZWdFeHAoYF4oJHtjb21wU3VybmFtZXMuam9pbignfCcpfSkuYCk7XG5cblx0Y29uc3QgZmluZFN1cm5hbWUgPSAocGFnZU5hbWU6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0aWYgKFJFR0VYX0NPTVBfU1VSTkFNRS50ZXN0KHBhZ2VOYW1lKSkge1xuXHRcdFx0cmV0dXJuIChSRUdFWF9DT01QX1NVUk5BTUUuZXhlYyhwYWdlTmFtZSkgYXMgUmVnRXhwRXhlY0FycmF5KVsxXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGFnZU5hbWVbMF07XG5cdH07XG5cblx0ZmluZFJlZGlyZWN0Q2FsbGJhY2soKHBhZ2VOYW1lOiBzdHJpbmcsICRjb250ZW50OiBKUXVlcnkpOiBzdHJpbmdbXSA9PiB7XG5cdFx0Y29uc3QgdGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0bGV0IHN1cm5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZCgnPiBwID4gYicpKSB7XG5cdFx0XHRjb25zdCB7cHJldmlvdXNTaWJsaW5nLCB0ZXh0Q29udGVudH0gPSBlbGVtZW50O1xuXHRcdFx0aWYgKCFwcmV2aW91c1NpYmxpbmcpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChSRUdFWF9QUkVGSVgudGVzdCh0ZXh0Q29udGVudCA/PyAnJykpIHtcblx0XHRcdFx0Y29uc3QgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGV4dENvbnRlbnQ/LnRyaW0oKTtcblx0XHRcdFx0aWYgKCFuYW1lKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIXN1cm5hbWUpIHtcblx0XHRcdFx0XHRzdXJuYW1lID0gZmluZFN1cm5hbWUocGFnZU5hbWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gc3VybmFtZSArIG5hbWU7IC8vIFJlcGxhY2UgYHRpdGxlcy5wdXNoKHN1cm5hbWUgKyBuYW1lKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBbLi4ubmV3IFNldCh0aXRsZXMpXTtcblx0fSk7XG59O1xuXG5leHBvcnQge2NoZWNrUmVkaXJlY3R9O1xuIiwgImltcG9ydCB7Y2hlY2tEZXBlbmRlbmNpZXN9IGZyb20gJy4vbW9kdWxlcy9jaGVja0RlcGVuZGVuY2llcyc7XG5pbXBvcnQge2NoZWNrUmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy9jb3VydGVzeS1hbmQtYXJ0LW5hbWVzJztcblxuKGZ1bmN0aW9uIHRvb2xzUmVkaXJlY3RDb3VydGVzeUFuZEFydE5hbWVzKCkge1xuXHR2b2lkIGNoZWNrRGVwZW5kZW5jaWVzKCk7XG5cdGNoZWNrUmVkaXJlY3QoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDdkJlLGdCQUFjO0FBQ2YsR0FBRzsiLAogICJuYW1lcyI6IFsidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImNoZWNrRGVwZW5kZW5jaWVzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAibXciLCAidXNlciIsICJvcHRpb25zIiwgImdldCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJhY3Rpb24iLCAiY2hhbmdlIiwgImxvYWRlciIsICJ1c2luZyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImNoZWNrUmVkaXJlY3QiLCAiUkVHRVhfUFJFRklYIiwgImNvbXBTdXJuYW1lcyIsICJSRUdFWF9DT01QX1NVUk5BTUUiLCAiUmVnRXhwIiwgImpvaW4iLCAiZmluZFN1cm5hbWUiLCAicGFnZU5hbWUiLCAidGVzdCIsICJleGVjIiwgImZpbmRSZWRpcmVjdENhbGxiYWNrIiwgIiRjb250ZW50IiwgInRpdGxlcyIsICJzdXJuYW1lIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJmaW5kIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAicHJldmlvdXNTaWJsaW5nIiwgInRleHRDb250ZW50IiwgIm5hbWUiLCAidHJpbSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJTZXQiLCAidG9vbHNSZWRpcmVjdENvdXJ0ZXN5QW5kQXJ0TmFtZXMiXQp9Cg==
