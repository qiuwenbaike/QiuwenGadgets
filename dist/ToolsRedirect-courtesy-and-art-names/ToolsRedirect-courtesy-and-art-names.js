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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy9vcHRpb25zLmpzb24iLCAic3JjL1Rvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy9tb2R1bGVzL2FwaS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC1jb3VydGVzeS1hbmQtYXJ0LW5hbWVzL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy9tb2R1bGVzL2NvdXJ0ZXN5LWFuZC1hcnQtbmFtZXMudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy9Ub29sc1JlZGlyZWN0LWNvdXJ0ZXN5LWFuZC1hcnQtbmFtZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFRvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGNoZWNrRGVwZW5kZW5jaWVzID0gYXN5bmMgKCkgPT4ge1xuXHRpZiAoIW13LnVzZXIub3B0aW9ucy5nZXQoJ2dhZGdldC1Ub29sc1JlZGlyZWN0JykpIHtcblx0XHR2b2lkIGFwaS5wb3N0V2l0aEVkaXRUb2tlbih7XG5cdFx0XHRhY3Rpb246ICdvcHRpb25zJyxcblx0XHRcdGNoYW5nZTogJ2dhZGdldC1Ub29sc1JlZGlyZWN0PTEnLFxuXHRcdH0gYXMgQXBpT3B0aW9uc1BhcmFtcyk7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuZ2FkZ2V0LlRvb2xzUmVkaXJlY3QnKTtcblx0fVxufTtcblxuZXhwb3J0IHtjaGVja0RlcGVuZGVuY2llc307XG4iLCAiaW1wb3J0IHtmaW5kUmVkaXJlY3RDYWxsYmFja30gZnJvbSAnZXh0LmdhZGdldC5Ub29sc1JlZGlyZWN0JztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGNoZWNrUmVkaXJlY3QgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IFJFR0VYX1BSRUZJWDogUmVnRXhwID0gL1vlj7flrZfomZ9dXFxzKiQvO1xuXHRjb25zdCBjb21wU3VybmFtZXM6IHN0cmluZ1tdID0gW1xuXHRcdCfmrKfpmLMnLFxuXHRcdCfmrZDpmb0nLFxuXHRcdCfku6Tni5AnLFxuXHRcdCfnmofnlKsnLFxuXHRcdCfkuIrlrpgnLFxuXHRcdCflj7jlvpInLFxuXHRcdCfor7jokZsnLFxuXHRcdCfoq7jokZsnLFxuXHRcdCflj7jpqawnLFxuXHRcdCflj7jppqwnLFxuXHRcdCflrofmlocnLFxuXHRcdCflkbzlu7YnLFxuXHRcdCfnq6/mnKgnLFxuXHRcdCfnlLPlsaAnLFxuXHRcdCflsInov58nLFxuXHRcdCflsInpgbInLFxuXHRcdCfovanovpUnLFxuXHRcdCfou5LovYUnLFxuXHRcdCflpI/kvq8nLFxuXHRcdCfljZflrqsnLFxuXHRcdCfljZflrq4nLFxuXHRcdCflj7jnqbonLFxuXHRcdCfpspzkuo4nLFxuXHRcdCfprq7kuo4nLFxuXHRcdCfopb/pl6gnLFxuXHRcdCfopb/ploAnLFxuXHRcdCfni6zlraQnLFxuXHRcdCfnjajlraQnLFxuXHRcdCfkuJzmlrknLFxuXHRcdCfmnbHmlrknLFxuXHRcdCflj7jlr4cnLFxuXHRcdCfnvoroiIwnLFxuXHRcdCfnrKzkupQnLFxuXHRcdCfmooHkuJgnLFxuXHRcdCfplLrnprsnLFxuXHRcdCfpjb7pm6InLFxuXHRcdCfkuJzpg60nLFxuXHRcdCfmnbHpg60nLFxuXHRcdCflhazlrZknLFxuXHRcdCflhazlrasnLFxuXHRcdCflrZ/lrZknLFxuXHRcdCflrZ/lrasnLFxuXHRcdCfku7LlrZknLFxuXHRcdCfku7LlrasnLFxuXHRcdCflj5TlrZknLFxuXHRcdCflj5TlrasnLFxuXHRcdCflraPlrZknLFxuXHRcdCflraPlrasnLFxuXHRcdCfplb/lrZknLFxuXHRcdCfplbflrasnLFxuXHRcdCfmhZXlrrknLFxuXHRcdCfpl77kuJgnLFxuXHRcdCfplq3kuJgnLFxuXHRcdCfkuJzpl6gnLFxuXHRcdCfmnbHploAnLFxuXHRcdCflhaznvoonLFxuXHRcdCfkuIfkv58nLFxuXHRcdCfnmb7ph4wnLFxuXHRcdCflhazlhrYnLFxuXHRcdCflkbzlu7YnLFxuXHRcdCfmta7lsaAnLFxuXHRcdCfljbPloqgnLFxuXHRcdCfljZXkuo4nLFxuXHRcdCfllq7kuo4nLFxuXHRcdCfnlLDkuJgnLFxuXHRdIGFzIGNvbnN0O1xuXHRjb25zdCBSRUdFWF9DT01QX1NVUk5BTUUgPSBuZXcgUmVnRXhwKGBeKCR7Y29tcFN1cm5hbWVzLmpvaW4oJ3wnKX0pLmApO1xuXG5cdGNvbnN0IGZpbmRTdXJuYW1lID0gKHBhZ2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdGlmIChSRUdFWF9DT01QX1NVUk5BTUUudGVzdChwYWdlTmFtZSkpIHtcblx0XHRcdHJldHVybiAoUkVHRVhfQ09NUF9TVVJOQU1FLmV4ZWMocGFnZU5hbWUpIGFzIFJlZ0V4cEV4ZWNBcnJheSlbMV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhZ2VOYW1lWzBdO1xuXHR9O1xuXG5cdGZpbmRSZWRpcmVjdENhbGxiYWNrKChwYWdlTmFtZTogc3RyaW5nLCAkY29udGVudDogSlF1ZXJ5KTogc3RyaW5nW10gPT4ge1xuXHRcdGNvbnN0IHRpdGxlczogc3RyaW5nW10gPSBbXTtcblxuXHRcdGxldCBzdXJuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQoJz4gcCA+IGInKSkge1xuXHRcdFx0Y29uc3Qge3ByZXZpb3VzU2libGluZywgdGV4dENvbnRlbnR9ID0gZWxlbWVudDtcblx0XHRcdGlmICghcHJldmlvdXNTaWJsaW5nKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoUkVHRVhfUFJFRklYLnRlc3QodGV4dENvbnRlbnQgPz8gJycpKSB7XG5cdFx0XHRcdGNvbnN0IG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRleHRDb250ZW50Py50cmltKCk7XG5cdFx0XHRcdGlmICghbmFtZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCFzdXJuYW1lKSB7XG5cdFx0XHRcdFx0c3VybmFtZSA9IGZpbmRTdXJuYW1lKHBhZ2VOYW1lKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IHN1cm5hbWUgKyBuYW1lOyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdW5pcXVlQXJyYXkodGl0bGVzKTsgLy8gUmVwbGFjZSBgWy4uLm5ldyBTZXQoKV1gIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0fSk7XG59O1xuXG5leHBvcnQge2NoZWNrUmVkaXJlY3R9O1xuIiwgImltcG9ydCB7Y2hlY2tEZXBlbmRlbmNpZXN9IGZyb20gJy4vbW9kdWxlcy9jaGVja0RlcGVuZGVuY2llcyc7XG5pbXBvcnQge2NoZWNrUmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy9jb3VydGVzeS1hbmQtYXJ0LW5hbWVzJztcblxuKGZ1bmN0aW9uIHRvb2xzUmVkaXJlY3RDb3VydGVzeUFuZEFydE5hbWVzKCkge1xuXHR2b2lkIGNoZWNrRGVwZW5kZW5jaWVzKCk7XG5cdGNoZWNrUmVkaXJlY3QoKTtcbn0pKCk7XG4iXSwKICAibWFw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WUFBQSxHQUFPL0IsbUJBQUFnQyxhQUFZbkIsTUFBTTtFQUMxQixDQUFDO0FBQ0Y7O0NDekdDLFNBQVNvQixtQ0FBbUM7QUFDNUMsT0FBS2hELGtCQUFrQjtBQUN2QmdCLGdCQUFjO0FBQ2YsR0FBRzsiLAogICJuYW1lcyI6IFsidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImNoZWNrRGVwZW5kZW5jaWVzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAibXciLCAidXNlciIsICJvcHRpb25zIiwgImdldCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJhY3Rpb24iLCAiY2hhbmdlIiwgImxvYWRlciIsICJ1c2luZyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJjaGVja1JlZGlyZWN0IiwgIlJFR0VYX1BSRUZJWCIsICJjb21wU3VybmFtZXMiLCAiUkVHRVhfQ09NUF9TVVJOQU1FIiwgIlJlZ0V4cCIsICJqb2luIiwgImZpbmRTdXJuYW1lIiwgInBhZ2VOYW1lIiwgInRlc3QiLCAiZXhlYyIsICJmaW5kUmVkaXJlY3RDYWxsYmFjayIsICIkY29udGVudCIsICJ0aXRsZXMiLCAic3VybmFtZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZmluZCIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgInByZXZpb3VzU2libGluZyIsICJ0ZXh0Q29udGVudCIsICJuYW1lIiwgInRyaW0iLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAidW5pcXVlQXJyYXkiLCAidG9vbHNSZWRpcmVjdENvdXJ0ZXN5QW5kQXJ0TmFtZXMiXQp9Cg==
