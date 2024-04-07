/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickImport}
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

// dist/QuickImport/QuickImport.js
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
//! src/QuickImport/options.json
var version = "2.0";
//! src/QuickImport/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("QuickImport/".concat(version));
//! src/QuickImport/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Toastify");
var toastifyInstance = {
  hideToast: () => {
  }
};
var refreshPage = (wgPageName) => {
  toastifyInstance.hideToast();
  (0, import_ext_gadget2.toastify)({
    text: "正在刷新页面",
    duration: -1
  }, "info");
  location.replace(mw.util.getUrl(wgPageName));
};
var importPage = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (pageName, iwprefix, isFileNS = false) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget2.toastify)({
      text: "导入页面中：".concat(pageName),
      duration: -1
    }, "info");
    let summary = "页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史";
    if (isFileNS) {
      summary += "；文件作者请参见此页面及来源页面记载";
    }
    const params = {
      action: "import",
      format: "json",
      assignknownusers: true,
      interwikipage: pageName,
      interwikiprefix: iwprefix,
      interwikisource: iwprefix,
      summary: "［".concat(summary, "］")
    };
    yield api.postWithEditToken(params);
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget2.toastify)({
      text: "页面导入完成：".concat(pageName),
      duration: -1
    }, "success");
  });
  return function importPage2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var uploadFile = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (target, url) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget2.toastify)({
      text: "迁移文件中：".concat(target),
      duration: -1
    }, "info");
    const uploadParams = {
      url: url !== null && url !== void 0 ? url : "https://zh.wikipedia.org/wiki/Special:Redirect/file/".concat(mw.util.rawurlencode(target)),
      action: "upload",
      format: "json",
      filename: target,
      comment: "自其他网站迁移文件",
      ignorewarnings: true
    };
    yield api.postWithEditToken(uploadParams);
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget2.toastify)({
      text: "文件迁移完成：".concat(target),
      duration: -1
    }, "success");
  });
  return function uploadFile2(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var detectIfFileRedirect = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (pageNames, isFileNS = false) {
    const queryParams = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: ["imageinfo", "info"],
      iiprop: ["url"],
      titles: pageNames,
      redirects: true
    };
    const response = yield api.get(queryParams);
    var _iterator = _createForOfIteratorHelper(response["query"].pages), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const page = _step.value;
        const title = page.title;
        if (!page.missing) {
          continue;
        }
        yield importPage(title, "commons", isFileNS);
        yield importPage(title, "zhwiki", isFileNS);
        if (isFileNS) {
          if (!page.known) {
            continue;
          }
          yield uploadFile(title, page.imageinfo[0].url);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (response["query"].redirects) {
      const tos = [];
      var _iterator2 = _createForOfIteratorHelper(response["query"].redirects), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const {
            to
          } = _step2.value;
          tos[tos.length] = to;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      yield detectIfFileRedirect(tos);
    }
  });
  return function detectIfFileRedirect2(_x5) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/QuickImport/QuickImport.ts
(function quickImport() {
  const {
    wgNamespaceNumber,
    wgPageName,
    wgWikiID
  } = mw.config.get();
  const caViewForeignZhwiki = document.querySelectorAll("#ca-view-foreign a[href*='zh.wikipedia.org']");
  const redirectTextA = document.querySelectorAll(".redirectText a");
  const isFileNS = wgNamespaceNumber === 6;
  const hasMwNoarticletext = !!document.querySelector("#mw-noarticletext");
  const iwprefix = caViewForeignZhwiki.length > 0 ? "zhwiki" : "commons";
  const label = isFileNS && !hasMwNoarticletext ? iwprefix : "";
  const buttonLabel = isFileNS ? label ? "文件（".concat(label, "）") : "页面" : redirectTextA.length > 0 ? "重定向目标" : "页面";
  if (wgWikiID !== "zhqiuwenbaike" && isFileNS) {
    return;
  }
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", "导入".concat(buttonLabel), "t-import");
  if (!element) {
    return;
  }
  element.addEventListener("click", () => {
    void _asyncToGenerator(function* () {
      var _redirectTextA$;
      const pageName = ((_redirectTextA$ = redirectTextA[0]) === null || _redirectTextA$ === void 0 ? void 0 : _redirectTextA$.textContent) || wgPageName;
      yield detectIfFileRedirect(pageName, isFileNS);
    })().then(() => {
      refreshPage(wgPageName);
    });
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvY29yZS50cyIsICJzcmMvUXVpY2tJbXBvcnQvUXVpY2tJbXBvcnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1aWNrSW1wb3J0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtBcGlRdWVyeUltYWdlSW5mb1BhcmFtc30gZnJvbSAndHlwZXMtbWVkaWF3aWtpLXJlbm92YXRlL2FwaV9wYXJhbXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IHJlZnJlc2hQYWdlID0gKHdnUGFnZU5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn5q2j5Zyo5Yi35paw6aG16Z2iJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGxvY2F0aW9uLnJlcGxhY2UobXcudXRpbC5nZXRVcmwod2dQYWdlTmFtZSkpO1xufTtcblxuY29uc3QgaW1wb3J0UGFnZSA9IGFzeW5jIChwYWdlTmFtZTogc3RyaW5nLCBpd3ByZWZpeDogc3RyaW5nLCBpc0ZpbGVOUzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg5a+85YWl6aG16Z2i5Lit77yaJHtwYWdlTmFtZX1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IHN1bW1hcnk6IHN0cmluZyA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdGlmIChpc0ZpbGVOUykge1xuXHRcdHN1bW1hcnkgKz0gJ++8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vSc7XG5cdH1cblxuXHRjb25zdCBwYXJhbXM6IEFwaUltcG9ydFBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdpbXBvcnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGFzc2lnbmtub3dudXNlcnM6IHRydWUsXG5cdFx0aW50ZXJ3aWtpcGFnZTogcGFnZU5hbWUsXG5cdFx0aW50ZXJ3aWtpcHJlZml4OiBpd3ByZWZpeCxcblx0XHRpbnRlcndpa2lzb3VyY2U6IGl3cHJlZml4IGFzIE5vbk51bGxhYmxlPEFwaUltcG9ydFBhcmFtc1snaW50ZXJ3aWtpc291cmNlJ10+LFxuXHRcdHN1bW1hcnk6IGDvvLske3N1bW1hcnl977y9YCxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlrozmiJDvvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOi/geenu+aWh+S7tuS4re+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB1cGxvYWRQYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmw6IHVybCA/PyBgaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpSZWRpcmVjdC9maWxlLyR7bXcudXRpbC5yYXd1cmxlbmNvZGUodGFyZ2V0KX1gLFxuXHRcdGFjdGlvbjogJ3VwbG9hZCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0ZmlsZW5hbWU6IHRhcmdldCxcblx0XHRjb21tZW50OiAn6Ieq5YW25LuW572R56uZ6L+B56e75paH5Lu2Jyxcblx0XHRpZ25vcmV3YXJuaW5nczogdHJ1ZSxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHVwbG9hZFBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDmlofku7bov4Hnp7vlrozmiJDvvJoke3RhcmdldH1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGFzeW5jIChwYWdlTmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBpc0ZpbGVOUyA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHF1ZXJ5UGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgJiBBcGlRdWVyeUltYWdlSW5mb1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6IFsnaW1hZ2VpbmZvJywgJ2luZm8nXSxcblx0XHRpaXByb3A6IFsndXJsJ10sXG5cdFx0dGl0bGVzOiBwYWdlTmFtZXMsXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocXVlcnlQYXJhbXMpO1xuXG5cdGZvciAoY29uc3QgcGFnZSBvZiByZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdGNvbnN0IHRpdGxlID0gcGFnZS50aXRsZSBhcyBzdHJpbmc7XG5cblx0XHRpZiAoIXBhZ2UubWlzc2luZykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0YXdhaXQgaW1wb3J0UGFnZSh0aXRsZSwgJ2NvbW1vbnMnLCBpc0ZpbGVOUyk7XG5cdFx0YXdhaXQgaW1wb3J0UGFnZSh0aXRsZSwgJ3pod2lraScsIGlzRmlsZU5TKTtcblxuXHRcdGlmIChpc0ZpbGVOUykge1xuXHRcdFx0aWYgKCFwYWdlLmtub3duKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRhd2FpdCB1cGxvYWRGaWxlKHRpdGxlLCBwYWdlLmltYWdlaW5mb1swXS51cmwgYXMgc3RyaW5nKTtcblx0XHR9XG5cdH1cblxuXHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzKSB7XG5cdFx0Y29uc3QgdG9zID0gW107XG5cblx0XHRmb3IgKGNvbnN0IHt0b30gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdHRvc1t0b3MubGVuZ3RoXSA9IHRvO1xuXHRcdH1cblxuXHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHRvcyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfTtcbiIsICJpbXBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCByZWZyZXNoUGFnZX0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG4oZnVuY3Rpb24gcXVpY2tJbXBvcnQoKTogdm9pZCB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dXaWtpSUR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGNhVmlld0ZvcmVpZ25aaHdpa2kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NhLXZpZXctZm9yZWlnbiBhW2hyZWYqPSd6aC53aWtpcGVkaWEub3JnJ11cIik7XG5cdGNvbnN0IHJlZGlyZWN0VGV4dEEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVkaXJlY3RUZXh0IGEnKTtcblxuXHRjb25zdCBpc0ZpbGVOUzogYm9vbGVhbiA9IHdnTmFtZXNwYWNlTnVtYmVyID09PSA2O1xuXHRjb25zdCBoYXNNd05vYXJ0aWNsZXRleHQ6IGJvb2xlYW4gPSAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1ub2FydGljbGV0ZXh0Jyk7XG5cdGNvbnN0IGl3cHJlZml4OiBzdHJpbmcgPSBjYVZpZXdGb3JlaWduWmh3aWtpLmxlbmd0aCA+IDAgPyAnemh3aWtpJyA6ICdjb21tb25zJztcblxuXHRjb25zdCBsYWJlbDogc3RyaW5nID0gaXNGaWxlTlMgJiYgIWhhc013Tm9hcnRpY2xldGV4dCA/IGl3cHJlZml4IDogJyc7XG5cdGNvbnN0IGJ1dHRvbkxhYmVsOiBzdHJpbmcgPSBpc0ZpbGVOU1xuXHRcdD8gbGFiZWxcblx0XHRcdD8gYOaWh+S7tu+8iCR7bGFiZWx977yJYFxuXHRcdFx0OiAn6aG16Z2iJ1xuXHRcdDogcmVkaXJlY3RUZXh0QS5sZW5ndGggPiAwXG5cdFx0XHQ/ICfph43lrprlkJHnm67moIcnXG5cdFx0XHQ6ICfpobXpnaInO1xuXG5cdGlmICh3Z1dpa2lJRCAhPT0gJ3pocWl1d2VuYmFpa2UnICYmIGlzRmlsZU5TKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIGDlr7zlhaUke2J1dHRvbkxhYmVsfWAsICd0LWltcG9ydCcpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSByZWRpcmVjdFRleHRBWzBdPy50ZXh0Q29udGVudCB8fCB3Z1BhZ2VOYW1lO1xuXHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QocGFnZU5hbWUsIGlzRmlsZU5TKTtcblx0XHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0cmVmcmVzaFBhZ2Uod2dQYWdlTmFtZSk7XG5cdFx0fSk7XG5cdH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFH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RSxHQUFHcUUsT0FBTzFCLElBQUk7QUFFaEUsUUFBTTJCLHNCQUFzQkMsU0FBU0MsaUJBQWlCLDhDQUE4QztBQUNwRyxRQUFNQyxnQkFBZ0JGLFNBQVNDLGlCQUFpQixpQkFBaUI7QUFFakUsUUFBTWhFLFdBQW9CMkQsc0JBQXNCO0FBQ2hELFFBQU1PLHFCQUE4QixDQUFDLENBQUNILFNBQVNJLGNBQWMsbUJBQW1CO0FBQ2hGLFFBQU1wRSxXQUFtQitELG9CQUFvQk4sU0FBUyxJQUFJLFdBQVc7QUFFckUsUUFBTVksUUFBZ0JwRSxZQUFZLENBQUNrRSxxQkFBcUJuRSxXQUFXO0FBQ25FLFFBQU1zRSxjQUFzQnJFLFdBQ3pCb0UsUUFBQSxNQUFBdkYsT0FDT3VGLE9BQUssR0FBQSxJQUNYLE9BQ0RILGNBQWNULFNBQVMsSUFDdEIsVUFDQTtBQUVKLE1BQUlJLGFBQWEsbUJBQW1CNUQsVUFBVTtBQUM3QztFQUNEO0FBRUEsUUFBTXNFLFlBQW1DUCxTQUFTSSxjQUFjLGFBQWEsSUFBSSxlQUFlO0FBQ2hHLFFBQU1JLFVBQWdDL0UsR0FBR0MsS0FBSytFLGVBQWVGLFdBQVcsS0FBQSxLQUFBekYsT0FBVXdGLFdBQVcsR0FBSSxVQUFVO0FBQzNHLE1BQUksQ0FBQ0UsU0FBUztBQUNiO0VBQ0Q7QUFFQUEsVUFBUUUsaUJBQWlCLFNBQVMsTUFBWTtBQUM3QyxTQUFBNUUsa0JBQU0sYUFBWTtBQUFBLFVBQUE2RTtBQUNqQixZQUFNNUUsYUFBbUI0RSxrQkFBQVQsY0FBYyxDQUFDLE9BQUEsUUFBQVMsb0JBQUEsU0FBQSxTQUFmQSxnQkFBa0JDLGdCQUFlekY7QUFDMUQsWUFBTXVDLHFCQUFxQjNCLFVBQVVFLFFBQVE7SUFDOUMsQ0FBQSxFQUFHLEVBQUU0RSxLQUFLLE1BQU07QUFDZjNGLGtCQUFZQyxVQUFVO0lBQ3ZCLENBQUM7RUFDRixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJyZWZyZXNoUGFnZSIsICJ3Z1BhZ2VOYW1lIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iLCAicmVwbGFjZSIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJpbXBvcnRQYWdlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFnZU5hbWUiLCAiaXdwcmVmaXgiLCAiaXNGaWxlTlMiLCAic3VtbWFyeSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJhc3NpZ25rbm93bnVzZXJzIiwgImludGVyd2lraXBhZ2UiLCAiaW50ZXJ3aWtpcHJlZml4IiwgImludGVyd2lraXNvdXJjZSIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInVwbG9hZEZpbGUiLCAiX3JlZjIiLCAidGFyZ2V0IiwgInVybCIsICJ1cGxvYWRQYXJhbXMiLCAicmF3dXJsZW5jb2RlIiwgImZpbGVuYW1lIiwgImNvbW1lbnQiLCAiaWdub3Jld2FybmluZ3MiLCAiX3gzIiwgIl94NCIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJfcmVmMyIsICJwYWdlTmFtZXMiLCAicXVlcnlQYXJhbXMiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgImlpcHJvcCIsICJ0aXRsZXMiLCAicmVkaXJlY3RzIiwgInJlc3BvbnNlIiwgImdldCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAicGFnZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAicGFnZSIsICJ2YWx1ZSIsICJ0aXRsZSIsICJtaXNzaW5nIiwgImtub3duIiwgImltYWdlaW5mbyIsICJlcnIiLCAiZSIsICJmIiwgInRvcyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJ0byIsICJsZW5ndGgiLCAiX3g1IiwgInF1aWNrSW1wb3J0IiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnV2lraUlEIiwgImNvbmZpZyIsICJjYVZpZXdGb3JlaWduWmh3aWtpIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicmVkaXJlY3RUZXh0QSIsICJoYXNNd05vYXJ0aWNsZXRleHQiLCAicXVlcnlTZWxlY3RvciIsICJsYWJlbCIsICJidXR0b25MYWJlbCIsICJwb3J0bGV0SWQiLCAiZWxlbWVudCIsICJhZGRQb3J0bGV0TGluayIsICJhZGRFdmVudExpc3RlbmVyIiwgIl9yZWRpcmVjdFRleHRBJCIsICJ0ZXh0Q29udGVudCIsICJ0aGVuIl0KfQo=
