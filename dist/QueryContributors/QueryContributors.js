/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|license2=Qiuwen Public Licence}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QueryContributors}
 * @author WaitSpring <me@waitspring.com>
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 * @license Qiuwen Public License {@link https://www.qiuwenbaike.cn/wiki/QW:QWL}
 */

/**
 * Copyright 2024 WaitSpring <me@waitspring.com>
 * Licensed under the "Qiuwen Public Licence"
 * (the "License", formerly the "Qiuwen Licence"),
 * either version 1.0 of the Licence, or any
 * later version.
 * You may obtain a copy of the License at
 *
 *  http://www.qiuwenbaike.cn/wiki/QW:QWL
 *
 * See the License for details.
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

// dist/QueryContributors/QueryContributors.js
//! src/QueryContributors/options.json
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
var elementId = "gadget-query_contributors";
var mountPointSelector = "#footer-info,.page-info";
var version = "1.0";
//! src/QueryContributors/modules/util/createFooterRoot.ts
var createFooterRoot = (mountPoint) => {
  const {
    skin
  } = mw.config.get();
  const isCitizen = skin === "citizen";
  const isListItem = ["gongbi", "vector", "vector-2022"].includes(skin) || document.querySelector("ul#footer-info");
  const root = document.createElement(isCitizen ? "section" : isListItem ? "li" : "div");
  root.id = elementId;
  root.classList.add(elementId, "noprint");
  if (isCitizen) {
    root.classList.add("page-info__item", "citizen-footer__pageinfo-item");
  }
  mountPoint.prepend(root);
  return root;
};
//! src/QueryContributors/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Based on contributions of": (0, import_ext_gadget.localize)({
      en: "Based on contributions of ",
      "zh-hans": "基于下列用户的贡献：",
      "zh-hant": "基于下列使用者的貢獻："
    }),
    Seperator: (0, import_ext_gadget.localize)({
      en: ", ",
      "zh-hans": "、",
      "zh-hant": "、"
    }),
    Period: (0, import_ext_gadget.localize)({
      en: ".",
      zh: "。"
    }),
    "Other $1 anonymous contributors": (0, import_ext_gadget.localize)({
      en: "other $1 anonymous contributor(s)",
      "zh-hans": "其他$1位匿名贡献者",
      "zh-hant": "其他$1位匿名貢獻者"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/QueryContributors/modules/util/sanitize.ts
var sanitize = (string) => {
  return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
};
//! src/QueryContributors/modules/util/getfooterUserList.ts
var anonyContrib = (number) => {
  const span = document.createElement("span");
  span.textContent = getMessage("Other $1 anonymous contributors").replace("$1", "".concat(number));
  return span;
};
var userLink = (userName) => {
  const link = document.createElement("a");
  link.textContent = userName;
  link.href = /(>|&gt;)/.test(userName) ? mw.util.getUrl("Special:GoToInterWiki/".concat(sanitize(userName.replace(/(>|&gt;)/, ":User:").replace(/(>|&gt;)/g, "&gt;")))) : mw.util.getUrl("User:".concat(sanitize(userName)));
  link.target = "_blank";
  link.rel = ["noopener", "noreferrer"].join(" ");
  return link;
};
var footerUserList = ({
  userNames
}) => {
  const span = document.createElement("span");
  span.append(getMessage("Based on contributions of"));
  userNames.forEach((userName, index) => {
    span.append(typeof userName === "number" ? anonyContrib(userName) : userLink(userName), index < userNames.length - 1 ? getMessage("Seperator") : getMessage("Period"));
  });
  return span;
};
//! src/QueryContributors/modules/appendElement.ts
var appendElement = (userNames) => {
  if (!userNames || !userNames.length) {
    return;
  }
  const mountPoint = document.querySelector(mountPointSelector);
  if (!mountPoint) {
    return;
  }
  const footer = createFooterRoot(mountPoint);
  footer.append(footerUserList({
    userNames
  }));
};
//! src/QueryContributors/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("QueryContributors/".concat(version));
//! src/QueryContributors/modules/queryContributors.ts
var queryContributors = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (titles, pccontinue) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "contributors",
      pcexcludegroup: ["bot"],
      pclimit: 5e3,
      titles,
      smaxage: 600,
      maxage: 600
    };
    if (pccontinue) {
      params.pccontinue = pccontinue;
    }
    const response = yield api.get(params);
    return response;
  });
  return function queryContributors2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();
//! src/QueryContributors/modules/util/getContributors.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var getContributors = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (title) {
    let pclist = [];
    let pccontinue;
    const CACHE_KEY_PREFIX = "ext.gadget.QueryContributors_getContributors-";
    if (mw.storage.getObject(CACHE_KEY_PREFIX + title)) {
      pclist = mw.storage.getObject(CACHE_KEY_PREFIX + title);
      return (0, import_ext_gadget3.uniqueArray)(pclist);
    }
    while (true) {
      const data = yield queryContributors(title, pccontinue);
      try {
        var _data$query, _data$continue;
        if ((_data$query = data["query"]) !== null && _data$query !== void 0 && _data$query.pages) {
          var _iterator = _createForOfIteratorHelper(data["query"].pages), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              const page = _step.value;
              if (page !== null && page !== void 0 && page.contributors) {
                var _iterator2 = _createForOfIteratorHelper(page.contributors), _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                    const contributor = _step2.value;
                    if (contributor !== null && contributor !== void 0 && contributor.name) {
                      pclist[pclist.length] = contributor.name;
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
              if (page !== null && page !== void 0 && page.anoncontributors) {
                pclist[pclist.length] = page.anoncontributors;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          break;
        }
        if ((_data$continue = data["continue"]) !== null && _data$continue !== void 0 && _data$continue.pccontinue) {
          ({
            pccontinue
          } = data["continue"]);
        } else {
          break;
        }
      } catch {
        break;
      }
    }
    mw.storage.setObject(CACHE_KEY_PREFIX + title, pclist, 10 * 60);
    return (0, import_ext_gadget3.uniqueArray)(pclist);
  });
  return function getContributors2(_x3) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/QueryContributors/QueryContributors.ts
(function() {
  var _queryContributos = _asyncToGenerator(function* () {
    const {
      wgAction,
      wgArticleId,
      wgCurRevisionId,
      wgPageName,
      wgRevisionId
    } = mw.config.get();
    if (wgAction !== "view" || !wgArticleId || !wgPageName) {
      return;
    }
    if (wgCurRevisionId > wgRevisionId) {
      return;
    }
    const contributors = yield getContributors(wgPageName);
    appendElement(contributors);
  });
  function queryContributos() {
    return _queryContributos.apply(this, arguments);
  }
  return queryContributos;
})()();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL29wdGlvbnMuanNvbiIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy91dGlsL2NyZWF0ZUZvb3RlclJvb3QudHMiLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvaTE4bi50cyIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy91dGlsL3Nhbml0aXplLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3V0aWwvZ2V0Zm9vdGVyVXNlckxpc3QudHMiLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvYXBwZW5kRWxlbWVudC50cyIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvcXVlcnlDb250cmlidXRvcnMudHMiLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvdXRpbC9nZXRDb250cmlidXRvcnMudHMiLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL1F1ZXJ5Q29udHJpYnV0b3JzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiZWxlbWVudElkXCI6IFwiZ2FkZ2V0LXF1ZXJ5X2NvbnRyaWJ1dG9yc1wiLFxuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwidmVyc2lvblwiOiBcIjEuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuXG5jb25zdCBjcmVhdGVGb290ZXJSb290ID0gKG1vdW50UG9pbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlzQ2l0aXplbiA9IHNraW4gPT09ICdjaXRpemVuJztcblx0Y29uc3QgaXNMaXN0SXRlbSA9IFsnZ29uZ2JpJywgJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMiddLmluY2x1ZGVzKHNraW4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJyk7XG5cdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGlzQ2l0aXplbiA/ICdzZWN0aW9uJyA6IGlzTGlzdEl0ZW0gPyAnbGknIDogJ2RpdicpO1xuXG5cdHJvb3QuaWQgPSBPUFRJT05TLmVsZW1lbnRJZDtcblx0cm9vdC5jbGFzc0xpc3QuYWRkKE9QVElPTlMuZWxlbWVudElkLCAnbm9wcmludCcpO1xuXHRpZiAoaXNDaXRpemVuKSB7XG5cdFx0cm9vdC5jbGFzc0xpc3QuYWRkKCdwYWdlLWluZm9fX2l0ZW0nLCAnY2l0aXplbi1mb290ZXJfX3BhZ2VpbmZvLWl0ZW0nKTtcblx0fVxuXHRtb3VudFBvaW50LnByZXBlbmQocm9vdCk7XG5cdHJldHVybiByb290O1xufTtcblxuZXhwb3J0IHtjcmVhdGVGb290ZXJSb290fTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J0Jhc2VkIG9uIGNvbnRyaWJ1dGlvbnMgb2YnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Jhc2VkIG9uIGNvbnRyaWJ1dGlvbnMgb2YgJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WfuuS6juS4i+WIl+eUqOaIt+eahOi0oeeMru+8micsXG5cdFx0XHQnemgtaGFudCc6ICfln7rkuo7kuIvliJfkvb/nlKjogIXnmoTosqLnjbvvvJonLFxuXHRcdH0pLFxuXHRcdFNlcGVyYXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcsICcsXG5cdFx0XHQnemgtaGFucyc6ICfjgIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn44CBJyxcblx0XHR9KSxcblx0XHRQZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdFx0J090aGVyICQxIGFub255bW91cyBjb250cmlidXRvcnMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ290aGVyICQxIGFub255bW91cyBjb250cmlidXRvcihzKScsXG5cdFx0XHQnemgtaGFucyc6ICflhbbku5YkMeS9jeWMv+WQjei0oeeMruiAhScsXG5cdFx0XHQnemgtaGFudCc6ICflhbbku5YkMeS9jeWMv+WQjeiyoueNu+iAhScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IHNhbml0aXplID0gKHN0cmluZzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBzdHJpbmdcblx0XHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuXHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0LnJlcGxhY2UoLycvZywgJyZhcG9zOycpXG5cdFx0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn07XG5cbmV4cG9ydCB7c2FuaXRpemV9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3Nhbml0aXplfSBmcm9tICcuL3Nhbml0aXplJztcblxuaW50ZXJmYWNlIFVzZXJMaXN0UHJvcHMge1xuXHR1c2VyTmFtZXM6IChzdHJpbmcgfCBudW1iZXIpW107XG59XG5cbmNvbnN0IGFub255Q29udHJpYiA9IChudW1iZXI6IG51bWJlcik6IEhUTUxFbGVtZW50ID0+IHtcblx0Y29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0c3Bhbi50ZXh0Q29udGVudCA9IGdldE1lc3NhZ2UoJ090aGVyICQxIGFub255bW91cyBjb250cmlidXRvcnMnKS5yZXBsYWNlKCckMScsIGAke251bWJlcn1gKTtcblx0cmV0dXJuIHNwYW47XG59O1xuXG5jb25zdCB1c2VyTGluayA9ICh1c2VyTmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQgPT4ge1xuXHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRsaW5rLnRleHRDb250ZW50ID0gdXNlck5hbWU7XG5cdGxpbmsuaHJlZiA9IC8oPnwmZ3Q7KS8udGVzdCh1c2VyTmFtZSlcblx0XHQ/IG13LnV0aWwuZ2V0VXJsKFxuXHRcdFx0XHRgU3BlY2lhbDpHb1RvSW50ZXJXaWtpLyR7c2FuaXRpemUodXNlck5hbWUucmVwbGFjZSgvKD58Jmd0OykvLCAnOlVzZXI6JykucmVwbGFjZSgvKD58Jmd0OykvZywgJyZndDsnKSl9YFxuXHRcdFx0KVxuXHRcdDogbXcudXRpbC5nZXRVcmwoYFVzZXI6JHtzYW5pdGl6ZSh1c2VyTmFtZSl9YCk7XG5cdGxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG5cdGxpbmsucmVsID0gWydub29wZW5lcicsICdub3JlZmVycmVyJ10uam9pbignICcpO1xuXHRyZXR1cm4gbGluaztcbn07XG5cbmNvbnN0IGZvb3RlclVzZXJMaXN0ID0gKHt1c2VyTmFtZXN9OiBVc2VyTGlzdFByb3BzKSA9PiB7XG5cdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cblx0c3Bhbi5hcHBlbmQoZ2V0TWVzc2FnZSgnQmFzZWQgb24gY29udHJpYnV0aW9ucyBvZicpKTtcblx0dXNlck5hbWVzLmZvckVhY2goKHVzZXJOYW1lLCBpbmRleCkgPT4ge1xuXHRcdHNwYW4uYXBwZW5kKFxuXHRcdFx0dHlwZW9mIHVzZXJOYW1lID09PSAnbnVtYmVyJyA/IGFub255Q29udHJpYih1c2VyTmFtZSkgOiB1c2VyTGluayh1c2VyTmFtZSksXG5cdFx0XHRpbmRleCA8IHVzZXJOYW1lcy5sZW5ndGggLSAxID8gZ2V0TWVzc2FnZSgnU2VwZXJhdG9yJykgOiBnZXRNZXNzYWdlKCdQZXJpb2QnKVxuXHRcdCk7XG5cdH0pO1xuXHRyZXR1cm4gc3Bhbjtcbn07XG5cbmV4cG9ydCB7Zm9vdGVyVXNlckxpc3R9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Y3JlYXRlRm9vdGVyUm9vdH0gZnJvbSAnLi91dGlsL2NyZWF0ZUZvb3RlclJvb3QnO1xuaW1wb3J0IHtmb290ZXJVc2VyTGlzdH0gZnJvbSAnLi91dGlsL2dldGZvb3RlclVzZXJMaXN0JztcblxuY29uc3QgYXBwZW5kRWxlbWVudCA9ICh1c2VyTmFtZXM6IChzdHJpbmcgfCBudW1iZXIpW10pOiB2b2lkID0+IHtcblx0aWYgKCF1c2VyTmFtZXMgfHwgIXVzZXJOYW1lcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBtb3VudFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoIW1vdW50UG9pbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXJSb290KG1vdW50UG9pbnQpO1xuXHRmb290ZXIuYXBwZW5kKGZvb3RlclVzZXJMaXN0KHt1c2VyTmFtZXN9KSk7XG59O1xuXG5leHBvcnQge2FwcGVuZEVsZW1lbnR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUXVlcnlDb250cmlidXRvcnMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBxdWVyeUNvbnRyaWJ1dG9ycyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZywgcGNjb250aW51ZT86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5Q29udHJpYnV0b3JzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2NvbnRyaWJ1dG9ycycsXG5cdFx0cGNleGNsdWRlZ3JvdXA6IFsnYm90J10sXG5cdFx0cGNsaW1pdDogNTAwMCxcblx0XHR0aXRsZXMsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXG5cdGlmIChwY2NvbnRpbnVlKSB7XG5cdFx0cGFyYW1zLnBjY29udGludWUgPSBwY2NvbnRpbnVlO1xuXHR9XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHtxdWVyeUNvbnRyaWJ1dG9yc307XG4iLCAiaW1wb3J0IHtxdWVyeUNvbnRyaWJ1dG9yc30gZnJvbSAnLi4vcXVlcnlDb250cmlidXRvcnMnO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgZ2V0Q29udHJpYnV0b3JzID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcblx0bGV0IHBjbGlzdDogKHN0cmluZyB8IG51bWJlcilbXSA9IFtdO1xuXHRsZXQgcGNjb250aW51ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGNvbnN0IENBQ0hFX0tFWV9QUkVGSVggPSAnZXh0LmdhZGdldC5RdWVyeUNvbnRyaWJ1dG9yc19nZXRDb250cmlidXRvcnMtJztcblxuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHRpdGxlKSkge1xuXHRcdHBjbGlzdCA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB0aXRsZSkgYXMgc3RyaW5nW107XG5cblx0XHRyZXR1cm4gdW5pcXVlQXJyYXkocGNsaXN0KTtcblx0fVxuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHF1ZXJ5Q29udHJpYnV0b3JzKHRpdGxlLCBwY2NvbnRpbnVlKTtcblxuXHRcdHRyeSB7XG5cdFx0XHRpZiAoZGF0YVsncXVlcnknXT8ucGFnZXMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIGRhdGFbJ3F1ZXJ5J10ucGFnZXMgYXMge1xuXHRcdFx0XHRcdGFub25jb250cmlidXRvcnM6IG51bWJlcjtcblx0XHRcdFx0XHRjb250cmlidXRvcnM6IHt1c2VyaWQ6IG51bWJlcjsgbmFtZTogc3RyaW5nfVtdO1xuXHRcdFx0XHR9W10pIHtcblx0XHRcdFx0XHRpZiAocGFnZT8uY29udHJpYnV0b3JzKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGNvbnRyaWJ1dG9yIG9mIHBhZ2UuY29udHJpYnV0b3JzKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChjb250cmlidXRvcj8ubmFtZSkge1xuXHRcdFx0XHRcdFx0XHRcdHBjbGlzdFtwY2xpc3QubGVuZ3RoXSA9IGNvbnRyaWJ1dG9yLm5hbWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocGFnZT8uYW5vbmNvbnRyaWJ1dG9ycykge1xuXHRcdFx0XHRcdFx0cGNsaXN0W3BjbGlzdC5sZW5ndGhdID0gcGFnZS5hbm9uY29udHJpYnV0b3JzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChkYXRhWydjb250aW51ZSddPy5wY2NvbnRpbnVlKSB7XG5cdFx0XHRcdCh7cGNjb250aW51ZX0gPSBkYXRhWydjb250aW51ZSddIGFzIHtwY2NvbnRpbnVlOiBzdHJpbmd9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2FjaGUgZm9yIDEwIG1pbnV0ZXNcblx0bXcuc3RvcmFnZS5zZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHRpdGxlLCBwY2xpc3QsIDEwICogNjApO1xuXG5cdHJldHVybiB1bmlxdWVBcnJheShwY2xpc3QpO1xufTtcblxuZXhwb3J0IHtnZXRDb250cmlidXRvcnN9O1xuIiwgImltcG9ydCB7YXBwZW5kRWxlbWVudH0gZnJvbSAnLi9tb2R1bGVzL2FwcGVuZEVsZW1lbnQnO1xuaW1wb3J0IHtnZXRDb250cmlidXRvcnN9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dldENvbnRyaWJ1dG9ycyc7XG5cbihhc3luYyBmdW5jdGlvbiBxdWVyeUNvbnRyaWJ1dG9zKCkge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnQXJ0aWNsZUlkLCB3Z0N1clJldmlzaW9uSWQsIHdnUGFnZU5hbWUsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnQXJ0aWNsZUlkIHx8ICF3Z1BhZ2VOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHdnQ3VyUmV2aXNpb25JZCA+IHdnUmV2aXNpb25JZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRyaWJ1dG9yczogKHN0cmluZyB8IG51bWJlcilbXSA9IGF3YWl0IGdldENvbnRyaWJ1dG9ycyh3Z1BhZ2VOYW1lKTtcblxuXHRhcHBlbmRFbGVtZW50KGNvbnRyaWJ1dG9ycyk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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NEMsS0FBS1U7Y0FDOUI7WUFDRDtVQUFBLFNBQUFILEtBQUE7QUFBQWIsc0JBQUFjLEVBQUFELEdBQUE7VUFBQSxVQUFBO0FBQUFiLHNCQUFBZSxFQUFBO1VBQUE7UUFDRCxPQUFPO0FBQ047UUFDRDtBQUVBLGFBQUFqQixpQkFBSUYsS0FBSyxVQUFVLE9BQUEsUUFBQUUsbUJBQUEsVUFBZkEsZUFBa0IxQixZQUFZO0FBQ2pDLFdBQUM7WUFBQ0E7VUFBVSxJQUFJd0IsS0FBSyxVQUFVO1FBQ2hDLE9BQU87QUFDTjtRQUNEO01BQ0QsUUFBUTtBQUNQO01BQ0Q7SUFDRDtBQUdBbEYsT0FBRytFLFFBQVF3QixVQUFVekIsbUJBQW1CRixPQUFPQyxRQUFRLEtBQUssRUFBRTtBQUU5RCxZQUFBLEdBQU9KLG1CQUFBUSxhQUFZSixNQUFNO0VBQzFCLENBQUE7QUFBQSxTQUFBLFNBbkRNSCxpQkFBQThCLEtBQUE7QUFBQSxXQUFBN0IsTUFBQUosTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBOzs7NENDQUwsYUFBa0M7QUFDbEMsVUFBTTtNQUFDaUM7TUFBVUM7TUFBYUM7TUFBaUJDO01BQVlDO0lBQVksSUFBSTdHLEdBQUdDLE9BQU9DLElBQUk7QUFFekYsUUFBSXVHLGFBQWEsVUFBVSxDQUFDQyxlQUFlLENBQUNFLFlBQVk7QUFDdkQ7SUFDRDtBQUVBLFFBQUlELGtCQUFrQkUsY0FBYztBQUNuQztJQUNEO0FBRUEsVUFBTWYsZUFBQSxNQUEwQ3BCLGdCQUFnQmtDLFVBQVU7QUFFMUUzRCxrQkFBYzZDLFlBQVk7RUFDM0IsQ0FBQTtBQUFBLFdBZGdCZ0IsbUJBQUE7QUFBQSxXQUFBQyxrQkFBQXhDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQXNDO0FBQUEsR0FBQSxFQWNiOyIsCiAgIm5hbWVzIjogWyJlbGVtZW50SWQiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiY3JlYXRlRm9vdGVyUm9vdCIsICJtb3VudFBvaW50IiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpc0NpdGl6ZW4iLCAiaXNMaXN0SXRlbSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInJvb3QiLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJjbGFzc0xpc3QiLCAiYWRkIiwgInByZXBlbmQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiU2VwZXJhdG9yIiwgIlBlcmlvZCIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic2FuaXRpemUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiYW5vbnlDb250cmliIiwgIm51bWJlciIsICJzcGFuIiwgInRleHRDb250ZW50IiwgImNvbmNhdCIsICJ1c2VyTGluayIsICJ1c2VyTmFtZSIsICJsaW5rIiwgImhyZWYiLCAidGVzdCIsICJ1dGlsIiwgImdldFVybCIsICJ0YXJnZXQiLCAicmVsIiwgImpvaW4iLCAiZm9vdGVyVXNlckxpc3QiLCAidXNlck5hbWVzIiwgImFwcGVuZCIsICJmb3JFYWNoIiwgImluZGV4IiwgImxlbmd0aCIsICJhcHBlbmRFbGVtZW50IiwgImZvb3RlciIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJxdWVyeUNvbnRyaWJ1dG9ycyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlcyIsICJwY2NvbnRpbnVlIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJwY2V4Y2x1ZGVncm91cCIsICJwY2xpbWl0IiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInJlc3BvbnNlIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldENvbnRyaWJ1dG9ycyIsICJfcmVmMiIsICJ0aXRsZSIsICJwY2xpc3QiLCAiQ0FDSEVfS0VZX1BSRUZJWCIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJ1bmlxdWVBcnJheSIsICJkYXRhIiwgIl9kYXRhJHF1ZXJ5IiwgIl9kYXRhJGNvbnRpbnVlIiwgInBhZ2VzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJwYWdlIiwgInZhbHVlIiwgImNvbnRyaWJ1dG9ycyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJjb250cmlidXRvciIsICJuYW1lIiwgImVyciIsICJlIiwgImYiLCAiYW5vbmNvbnRyaWJ1dG9ycyIsICJzZXRPYmplY3QiLCAiX3gzIiwgIndnQWN0aW9uIiwgIndnQXJ0aWNsZUlkIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1BhZ2VOYW1lIiwgIndnUmV2aXNpb25JZCIsICJxdWVyeUNvbnRyaWJ1dG9zIiwgIl9xdWVyeUNvbnRyaWJ1dG9zIl0KfQo=
