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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/QueryContributors/options.json
var elementId = "gadget-query_contributors";
var mountPointSelector = "#footer-info,.page-info";
var version = "1.0";
//! src/QueryContributors/modules/components/react.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/QueryContributors/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Based on contributions of": (0, import_ext_gadget.localize)({
      en: "Based on contributions of",
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
    "Other anonymous contributors": (0, import_ext_gadget.localize)({
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
//! src/QueryContributors/modules/components/react.tsx
var FooterNotice = ({
  children = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)
}) => {
  const {
    skin
  } = mw.config.get();
  const id = elementId;
  const className = elementId;
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
      id,
      className: [className, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
    }, children);
  } else if (["gongbi", "vector", "vector-2022"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      id,
      className: [className, "noprint"]
    }, children);
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id,
    className: [className, "noprint"]
  }, children);
};
var UserList = ({
  userNames
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, getMessage("Based on contributions of")), userNames.map((userName, index) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  href: /(>|&gt;)/.test(userName) ? mw.util.getUrl("Special:GoToInterWiki/".concat(sanitize(userName.replace(/(>|&gt;)/, ":User:").replace(/(>|&gt;)/g, "&gt;")))) : mw.util.getUrl("User:".concat(sanitize(userName))),
  key: userName
}, userName), /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, index < userNames.length - 1 ? getMessage("Seperator") : getMessage("Period")))));
var FooterUserList = ({
  userNames
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, null, /* @__PURE__ */ import_ext_gadget2.default.createElement(UserList, {
  userNames
}));
//! src/QueryContributors/modules/appendElement.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.JSX"), 1);
var appendElement = (userNames) => {
  if (!userNames || !userNames.length) {
    return;
  }
  const mountPoint = document.querySelector(mountPointSelector);
  if (!mountPoint) {
    return;
  }
  mountPoint.prepend(/* @__PURE__ */ import_ext_gadget3.default.createElement(FooterUserList, {
    userNames
  }));
};
//! src/QueryContributors/modules/api.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var api = (0, import_ext_gadget4.initMwApi)("QueryContributors/".concat(version));
//! src/QueryContributors/modules/queryContributors.ts
var queryContributors = /* @__PURE__ */ function() {
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
}();
//! src/QueryContributors/modules/util/getContributors.ts
var import_ext_gadget5 = require("ext.gadget.Util");
var getContributors = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (title) {
    let pclist = [];
    let pccontinue;
    const CACHE_KEY_PREFIX = "ext.gadget.QueryContributors_getContributors-";
    if (mw.storage.getObject(CACHE_KEY_PREFIX + title)) {
      pclist = mw.storage.getObject(CACHE_KEY_PREFIX + title);
      return (0, import_ext_gadget5.uniqueArray)(pclist);
    }
    while (true) {
      const data = yield queryContributors(title, pccontinue);
      try {
        var _data$query, _data$continue;
        if ((_data$query = data["query"]) !== null && _data$query !== void 0 && _data$query.pages) {
          var _iterator2 = _createForOfIteratorHelper(data["query"].pages), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const page = _step2.value;
              if (page !== null && page !== void 0 && page.contributors) {
                var _iterator3 = _createForOfIteratorHelper(page.contributors), _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                    const contributor = _step3.value;
                    if (contributor !== null && contributor !== void 0 && contributor.name) {
                      pclist[pclist.length] = contributor.name;
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
              if (page !== null && page !== void 0 && page.anoncontributors) {
                pclist[pclist.length] = getMessage("Other anonymous contributors").replace("$1", "".concat(page.anoncontributors));
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
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
    return (0, import_ext_gadget5.uniqueArray)(pclist);
  });
  return function getContributors2(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL29wdGlvbnMuanNvbiIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9jb21wb25lbnRzL3JlYWN0LnRzeCIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3V0aWwvc2FuaXRpemUudHMiLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvYXBwZW5kRWxlbWVudC50c3giLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3F1ZXJ5Q29udHJpYnV0b3JzLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3V0aWwvZ2V0Q29udHJpYnV0b3JzLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9RdWVyeUNvbnRyaWJ1dG9ycy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImVsZW1lbnRJZFwiOiBcImdhZGdldC1xdWVyeV9jb250cmlidXRvcnNcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7c2FuaXRpemV9IGZyb20gJy4uL3V0aWwvc2FuaXRpemUnO1xuXG5pbnRlcmZhY2UgRm9vdGVyTm90aWNlUHJvcHMge1xuXHRjaGlsZHJlbj86IFJlYWN0RWxlbWVudDtcbn1cblxuY29uc3QgRm9vdGVyTm90aWNlID0gKHtjaGlsZHJlbiA9IDw+PC8+fTogRm9vdGVyTm90aWNlUHJvcHMpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpZCA9IE9QVElPTlMuZWxlbWVudElkO1xuXHRjb25zdCBjbGFzc05hbWUgPSBPUFRJT05TLmVsZW1lbnRJZDtcblxuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGlkPXtpZH0gY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJywgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9IGVsc2UgaWYgKFsnZ29uZ2JpJywgJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMiddLmluY2x1ZGVzKHNraW4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIGlkPXtpZH0gY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAnbm9wcmludCddfT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9saT5cblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAnbm9wcmludCddfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmludGVyZmFjZSBVc2VyTGlzdFByb3BzIHtcblx0dXNlck5hbWVzOiBzdHJpbmdbXTtcbn1cblxuY29uc3QgVXNlckxpc3QgPSAoe3VzZXJOYW1lc306IFVzZXJMaXN0UHJvcHMpID0+IChcblx0PD5cblx0XHQ8PntnZXRNZXNzYWdlKCdCYXNlZCBvbiBjb250cmlidXRpb25zIG9mJyl9PC8+XG5cdFx0e3VzZXJOYW1lcy5tYXAoKHVzZXJOYW1lLCBpbmRleCkgPT4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PGFcblx0XHRcdFx0XHRocmVmPXtcblx0XHRcdFx0XHRcdC8oPnwmZ3Q7KS8udGVzdCh1c2VyTmFtZSlcblx0XHRcdFx0XHRcdFx0PyBtdy51dGlsLmdldFVybChcblx0XHRcdFx0XHRcdFx0XHRcdGBTcGVjaWFsOkdvVG9JbnRlcldpa2kvJHtzYW5pdGl6ZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXNlck5hbWUucmVwbGFjZSgvKD58Jmd0OykvLCAnOlVzZXI6JykucmVwbGFjZSgvKD58Jmd0OykvZywgJyZndDsnKVxuXHRcdFx0XHRcdFx0XHRcdFx0KX1gXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHQ6IG13LnV0aWwuZ2V0VXJsKGBVc2VyOiR7c2FuaXRpemUodXNlck5hbWUpfWApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGtleT17dXNlck5hbWV9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7dXNlck5hbWV9XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PD57aW5kZXggPCB1c2VyTmFtZXMubGVuZ3RoIC0gMSA/IGdldE1lc3NhZ2UoJ1NlcGVyYXRvcicpIDogZ2V0TWVzc2FnZSgnUGVyaW9kJyl9PC8+XG5cdFx0XHQ8Lz5cblx0XHQpKX1cblx0PC8+XG4pO1xuXG5jb25zdCBGb290ZXJVc2VyTGlzdCA9ICh7dXNlck5hbWVzfTogVXNlckxpc3RQcm9wcykgPT4gKFxuXHQ8Rm9vdGVyTm90aWNlPlxuXHRcdDxVc2VyTGlzdCB1c2VyTmFtZXM9e3VzZXJOYW1lc30gLz5cblx0PC9Gb290ZXJOb3RpY2U+XG4pO1xuXG5leHBvcnQge0Zvb3RlclVzZXJMaXN0fTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J0Jhc2VkIG9uIGNvbnRyaWJ1dGlvbnMgb2YnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Jhc2VkIG9uIGNvbnRyaWJ1dGlvbnMgb2YnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Z+65LqO5LiL5YiX55So5oi355qE6LSh54yu77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WfuuS6juS4i+WIl+S9v+eUqOiAheeahOiyoueNu++8micsXG5cdFx0fSksXG5cdFx0U2VwZXJhdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJywgJyxcblx0XHRcdCd6aC1oYW5zJzogJ+OAgScsXG5cdFx0XHQnemgtaGFudCc6ICfjgIEnLFxuXHRcdH0pLFxuXHRcdFBlcmlvZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcuJyxcblx0XHRcdHpoOiAn44CCJyxcblx0XHR9KSxcblx0XHQnT3RoZXIgYW5vbnltb3VzIGNvbnRyaWJ1dG9ycyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnb3RoZXIgJDEgYW5vbnltb3VzIGNvbnRyaWJ1dG9yKHMpJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFtuS7liQx5L2N5Yy/5ZCN6LSh54yu6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFtuS7liQx5L2N5Yy/5ZCN6LKi54276ICFJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIHN0cmluZ1xuXHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHQucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jylcblx0XHQucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufTtcblxuZXhwb3J0IHtzYW5pdGl6ZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtGb290ZXJVc2VyTGlzdH0gZnJvbSAnLi9jb21wb25lbnRzL3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5cbmNvbnN0IGFwcGVuZEVsZW1lbnQgPSAodXNlck5hbWVzOiBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuXHRpZiAoIXVzZXJOYW1lcyB8fCAhdXNlck5hbWVzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG1vdW50UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3Rvcik7XG5cdGlmICghbW91bnRQb2ludCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG1vdW50UG9pbnQucHJlcGVuZCg8Rm9vdGVyVXNlckxpc3QgdXNlck5hbWVzPXt1c2VyTmFtZXN9IC8+KTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kRWxlbWVudH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWVyeUNvbnRyaWJ1dG9ycy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHF1ZXJ5Q29udHJpYnV0b3JzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nLCBwY2NvbnRpbnVlPzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlDb250cmlidXRvcnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnY29udHJpYnV0b3JzJyxcblx0XHRwY2V4Y2x1ZGVncm91cDogWydib3QnXSxcblx0XHRwY2xpbWl0OiA1MDAwLFxuXHRcdHRpdGxlcyxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cblx0aWYgKHBjY29udGludWUpIHtcblx0XHRwYXJhbXMucGNjb250aW51ZSA9IHBjY29udGludWU7XG5cdH1cblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQge3F1ZXJ5Q29udHJpYnV0b3JzfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtxdWVyeUNvbnRyaWJ1dG9yc30gZnJvbSAnLi4vcXVlcnlDb250cmlidXRvcnMnO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgZ2V0Q29udHJpYnV0b3JzID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcblx0bGV0IHBjbGlzdDogc3RyaW5nW10gPSBbXTtcblx0bGV0IHBjY29udGludWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRjb25zdCBDQUNIRV9LRVlfUFJFRklYID0gJ2V4dC5nYWRnZXQuUXVlcnlDb250cmlidXRvcnNfZ2V0Q29udHJpYnV0b3JzLSc7XG5cblx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB0aXRsZSkpIHtcblx0XHRwY2xpc3QgPSBtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgdGl0bGUpIGFzIHN0cmluZ1tdO1xuXG5cdFx0cmV0dXJuIHVuaXF1ZUFycmF5KHBjbGlzdCk7XG5cdH1cblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBxdWVyeUNvbnRyaWJ1dG9ycyh0aXRsZSwgcGNjb250aW51ZSk7XG5cblx0XHR0cnkge1xuXHRcdFx0aWYgKGRhdGFbJ3F1ZXJ5J10/LnBhZ2VzKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBkYXRhWydxdWVyeSddLnBhZ2VzIGFzIHtcblx0XHRcdFx0XHRhbm9uY29udHJpYnV0b3JzOiBudW1iZXI7XG5cdFx0XHRcdFx0Y29udHJpYnV0b3JzOiB7dXNlcmlkOiBudW1iZXI7IG5hbWU6IHN0cmluZ31bXTtcblx0XHRcdFx0fVtdKSB7XG5cdFx0XHRcdFx0aWYgKHBhZ2U/LmNvbnRyaWJ1dG9ycykge1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBjb250cmlidXRvciBvZiBwYWdlLmNvbnRyaWJ1dG9ycykge1xuXHRcdFx0XHRcdFx0XHRpZiAoY29udHJpYnV0b3I/Lm5hbWUpIHtcblx0XHRcdFx0XHRcdFx0XHRwY2xpc3RbcGNsaXN0Lmxlbmd0aF0gPSBjb250cmlidXRvci5uYW1lO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHBhZ2U/LmFub25jb250cmlidXRvcnMpIHtcblx0XHRcdFx0XHRcdHBjbGlzdFtwY2xpc3QubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ090aGVyIGFub255bW91cyBjb250cmlidXRvcnMnKS5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHQnJDEnLFxuXHRcdFx0XHRcdFx0XHRgJHtwYWdlLmFub25jb250cmlidXRvcnN9YFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZGF0YVsnY29udGludWUnXT8ucGNjb250aW51ZSkge1xuXHRcdFx0XHQoe3BjY29udGludWV9ID0gZGF0YVsnY29udGludWUnXSBhcyB7cGNjb250aW51ZTogc3RyaW5nfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdC8vIENhY2hlIGZvciAxMCBtaW51dGVzXG5cdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB0aXRsZSwgcGNsaXN0LCAxMCAqIDYwKTtcblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkocGNsaXN0KTtcbn07XG5cbmV4cG9ydCB7Z2V0Q29udHJpYnV0b3JzfTtcbiIsICJpbXBvcnQge2FwcGVuZEVsZW1lbnR9IGZyb20gJy4vbW9kdWxlcy9hcHBlbmRFbGVtZW50JztcbmltcG9ydCB7Z2V0Q29udHJpYnV0b3JzfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRDb250cmlidXRvcnMnO1xuXG4oYXN5bmMgZnVuY3Rpb24gcXVlcnlDb250cmlidXRvcygpIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0FydGljbGVJZCwgd2dDdXJSZXZpc2lvbklkLCB3Z1BhZ2VOYW1lLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8ICF3Z0FydGljbGVJZCB8fCAhd2dQYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICh3Z0N1clJldmlzaW9uSWQgPiB3Z1JldmlzaW9uSWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb250cmlidXRvcnM6IHN0cmluZ1tdID0gYXdhaXQgZ2V0Q29udHJpYnV0b3JzKHdnUGFnZU5hbWUpO1xuXG5cdGFwcGVuZEVsZW1lbnQoY29udHJpYnV0b3JzKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7QUFD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ZGdCZ0IsbUJBQUE7QUFBQSxXQUFBQyxrQkFBQXhDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQXNDO0FBQUEsR0FBQSxFQWNiOyIsCiAgIm5hbWVzIjogWyJlbGVtZW50SWQiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiU2VwZXJhdG9yIiwgIlBlcmlvZCIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic2FuaXRpemUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiRm9vdGVyTm90aWNlIiwgImNoaWxkcmVuIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaWQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiVXNlckxpc3QiLCAidXNlck5hbWVzIiwgIm1hcCIsICJ1c2VyTmFtZSIsICJpbmRleCIsICJocmVmIiwgInRlc3QiLCAidXRpbCIsICJnZXRVcmwiLCAiY29uY2F0IiwgImxlbmd0aCIsICJGb290ZXJVc2VyTGlzdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBwZW5kRWxlbWVudCIsICJtb3VudFBvaW50IiwgInByZXBlbmQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFwaSIsICJpbml0TXdBcGkiLCAicXVlcnlDb250cmlidXRvcnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZXMiLCAicGNjb250aW51ZSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicGNleGNsdWRlZ3JvdXAiLCAicGNsaW1pdCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJyZXNwb25zZSIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJnZXRDb250cmlidXRvcnMiLCAiX3JlZjIiLCAidGl0bGUiLCAicGNsaXN0IiwgIkNBQ0hFX0tFWV9QUkVGSVgiLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAidW5pcXVlQXJyYXkiLCAiZGF0YSIsICJfZGF0YSRxdWVyeSIsICJfZGF0YSRjb250aW51ZSIsICJwYWdlcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJwYWdlIiwgInZhbHVlIiwgImNvbnRyaWJ1dG9ycyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJjb250cmlidXRvciIsICJuYW1lIiwgImVyciIsICJlIiwgImYiLCAiYW5vbmNvbnRyaWJ1dG9ycyIsICJzZXRPYmplY3QiLCAiX3gzIiwgIndnQWN0aW9uIiwgIndnQXJ0aWNsZUlkIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1BhZ2VOYW1lIiwgIndnUmV2aXNpb25JZCIsICJxdWVyeUNvbnRyaWJ1dG9zIiwgIl9xdWVyeUNvbnRyaWJ1dG9zIl0KfQo=
