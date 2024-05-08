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
var import_ext_gadget3 = require("ext.gadget.Util");
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
    return (0, import_ext_gadget3.uniqueArray)(titles);
  });
};
//! src/ToolsRedirect-courtesy-and-art-names/ToolsRedirect-courtesy-and-art-names.ts
(function toolsRedirectCourtesyAndArtNames() {
  void checkDependencies();
  checkRedirect();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy9vcHRpb25zLmpzb24iLCAic3JjL1Rvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy9tb2R1bGVzL2FwaS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC1jb3VydGVzeS1hbmQtYXJ0LW5hbWVzL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy9tb2R1bGVzL2NvdXJ0ZXN5LWFuZC1hcnQtbmFtZXMudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy9Ub29sc1JlZGlyZWN0LWNvdXJ0ZXN5LWFuZC1hcnQtbmFtZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFRvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGNoZWNrRGVwZW5kZW5jaWVzID0gYXN5bmMgKCkgPT4ge1xuXHRpZiAoIW13LnVzZXIub3B0aW9ucy5nZXQoJ2dhZGdldC1Ub29sc1JlZGlyZWN0JykpIHtcblx0XHR2b2lkIGFwaS5wb3N0V2l0aEVkaXRUb2tlbih7XG5cdFx0XHRhY3Rpb246ICdvcHRpb25zJyxcblx0XHRcdGNoYW5nZTogJ2dhZGdldC1Ub29sc1JlZGlyZWN0PTEnLFxuXHRcdH0gYXMgQXBpT3B0aW9uc1BhcmFtcyk7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuZ2FkZ2V0LlRvb2xzUmVkaXJlY3QnKTtcblx0fVxufTtcblxuZXhwb3J0IHtjaGVja0RlcGVuZGVuY2llc307XG4iLCAiaW1wb3J0IHtmaW5kUmVkaXJlY3RDYWxsYmFja30gZnJvbSAnZXh0LmdhZGdldC5Ub29sc1JlZGlyZWN0JztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGNoZWNrUmVkaXJlY3QgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IFJFR0VYX1BSRUZJWDogUmVnRXhwID0gL1vlj7flrZfomZ9dXFxzKiQvO1xuXHRjb25zdCBjb21wU3VybmFtZXM6IHN0cmluZ1tdID0gW1xuXHRcdCfmrKfpmLMnLFxuXHRcdCfmrZDpmb0nLFxuXHRcdCfku6Tni5AnLFxuXHRcdCfnmofnlKsnLFxuXHRcdCfkuIrlrpgnLFxuXHRcdCflj7jlvpInLFxuXHRcdCfor7jokZsnLFxuXHRcdCfoq7jokZsnLFxuXHRcdCflj7jpqawnLFxuXHRcdCflj7jppqwnLFxuXHRcdCflrofmlocnLFxuXHRcdCflkbzlu7YnLFxuXHRcdCfnq6/mnKgnLFxuXHRcdCfnlLPlsaAnLFxuXHRcdCflsInov58nLFxuXHRcdCflsInpgbInLFxuXHRcdCfovanovpUnLFxuXHRcdCfou5LovYUnLFxuXHRcdCflpI/kvq8nLFxuXHRcdCfljZflrqsnLFxuXHRcdCfljZflrq4nLFxuXHRcdCflj7jnqbonLFxuXHRcdCfpspzkuo4nLFxuXHRcdCfprq7kuo4nLFxuXHRcdCfopb/pl6gnLFxuXHRcdCfopb/ploAnLFxuXHRcdCfni6zlraQnLFxuXHRcdCfnjajlraQnLFxuXHRcdCfkuJzmlrknLFxuXHRcdCfmnbHmlrknLFxuXHRcdCflj7jlr4cnLFxuXHRcdCfnvoroiIwnLFxuXHRcdCfnrKzkupQnLFxuXHRcdCfmooHkuJgnLFxuXHRcdCfplLrnprsnLFxuXHRcdCfpjb7pm6InLFxuXHRcdCfkuJzpg60nLFxuXHRcdCfmnbHpg60nLFxuXHRcdCflhazlrZknLFxuXHRcdCflhazlrasnLFxuXHRcdCflrZ/lrZknLFxuXHRcdCflrZ/lrasnLFxuXHRcdCfku7LlrZknLFxuXHRcdCfku7LlrasnLFxuXHRcdCflj5TlrZknLFxuXHRcdCflj5TlrasnLFxuXHRcdCflraPlrZknLFxuXHRcdCflraPlrasnLFxuXHRcdCfplb/lrZknLFxuXHRcdCfplbflrasnLFxuXHRcdCfmhZXlrrknLFxuXHRcdCfpl77kuJgnLFxuXHRcdCfplq3kuJgnLFxuXHRcdCfkuJzpl6gnLFxuXHRcdCfmnbHploAnLFxuXHRcdCflhaznvoonLFxuXHRcdCfkuIfkv58nLFxuXHRcdCfnmb7ph4wnLFxuXHRcdCflhazlhrYnLFxuXHRcdCflkbzlu7YnLFxuXHRcdCfmta7lsaAnLFxuXHRcdCfljbPloqgnLFxuXHRcdCfljZXkuo4nLFxuXHRcdCfllq7kuo4nLFxuXHRcdCfnlLDkuJgnLFxuXHRdIGFzIGNvbnN0O1xuXHRjb25zdCBSRUdFWF9DT01QX1NVUk5BTUUgPSBuZXcgUmVnRXhwKGBeKCR7Y29tcFN1cm5hbWVzLmpvaW4oJ3wnKX0pLmApO1xuXG5cdGNvbnN0IGZpbmRTdXJuYW1lID0gKHBhZ2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdGlmIChSRUdFWF9DT01QX1NVUk5BTUUudGVzdChwYWdlTmFtZSkpIHtcblx0XHRcdHJldHVybiAoUkVHRVhfQ09NUF9TVVJOQU1FLmV4ZWMocGFnZU5hbWUpIGFzIFJlZ0V4cEV4ZWNBcnJheSlbMV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhZ2VOYW1lWzBdO1xuXHR9O1xuXG5cdGZpbmRSZWRpcmVjdENhbGxiYWNrKChwYWdlTmFtZTogc3RyaW5nLCAkY29udGVudDogSlF1ZXJ5KTogc3RyaW5nW10gPT4ge1xuXHRcdGNvbnN0IHRpdGxlczogc3RyaW5nW10gPSBbXTtcblxuXHRcdGxldCBzdXJuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQoJz4gcCA+IGInKSkge1xuXHRcdFx0Y29uc3Qge3ByZXZpb3VzU2libGluZywgdGV4dENvbnRlbnR9ID0gZWxlbWVudDtcblx0XHRcdGlmICghcHJldmlvdXNTaWJsaW5nKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoUkVHRVhfUFJFRklYLnRlc3QodGV4dENvbnRlbnQgPz8gJycpKSB7XG5cdFx0XHRcdGNvbnN0IG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRleHRDb250ZW50Py50cmltKCk7XG5cdFx0XHRcdGlmICghbmFtZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCFzdXJuYW1lKSB7XG5cdFx0XHRcdFx0c3VybmFtZSA9IGZpbmRTdXJuYW1lKHBhZ2VOYW1lKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IHN1cm5hbWUgKyBuYW1lOyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdW5pcXVlQXJyYXkodGl0bGVzKTsgLy8gUmVwbGFjZSBgbmV3IFNldCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH0pO1xufTtcblxuZXhwb3J0IHtjaGVja1JlZGlyZWN0fTtcbiIsICJpbXBvcnQge2NoZWNrRGVwZW5kZW5jaWVzfSBmcm9tICcuL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMnO1xuaW1wb3J0IHtjaGVja1JlZGlyZWN0fSBmcm9tICcuL21vZHVsZXMvY291cnRlc3ktYW5kLWFydC1uYW1lcyc7XG5cbihmdW5jdGlvbiB0b29sc1JlZGlyZWN0Q291cnRlc3lBbmRBcnROYW1lcygpIHtcblx0dm9pZCBjaGVja0RlcGVuZGVuY2llcygpO1xuXHRjaGVja1JlZGlyZWN0KCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdz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QixFQUFBO0lBQUE7QUFFQSxZQUFBLEdBQU8vQixtQkFBQWdDLGFBQVluQixNQUFNO0VBQzFCLENBQUM7QUFDRjs7Q0N6R0MsU0FBU29CLG1DQUFtQztBQUM1QyxPQUFLaEQsa0JBQWtCO0FBQ3ZCZ0IsZ0JBQWM7QUFDZixHQUFHOyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiY2hlY2tEZXBlbmRlbmNpZXMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJtdyIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiZ2V0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImFjdGlvbiIsICJjaGFuZ2UiLCAibG9hZGVyIiwgInVzaW5nIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImNoZWNrUmVkaXJlY3QiLCAiUkVHRVhfUFJFRklYIiwgImNvbXBTdXJuYW1lcyIsICJSRUdFWF9DT01QX1NVUk5BTUUiLCAiUmVnRXhwIiwgImpvaW4iLCAiZmluZFN1cm5hbWUiLCAicGFnZU5hbWUiLCAidGVzdCIsICJleGVjIiwgImZpbmRSZWRpcmVjdENhbGxiYWNrIiwgIiRjb250ZW50IiwgInRpdGxlcyIsICJzdXJuYW1lIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJmaW5kIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAicHJldmlvdXNTaWJsaW5nIiwgInRleHRDb250ZW50IiwgIm5hbWUiLCAidHJpbSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJ1bmlxdWVBcnJheSIsICJ0b29sc1JlZGlyZWN0Q291cnRlc3lBbmRBcnROYW1lcyJdCn0K
