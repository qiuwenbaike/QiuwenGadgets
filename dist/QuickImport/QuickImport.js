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
    const response = yield api.post(queryParams);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvY29yZS50cyIsICJzcmMvUXVpY2tJbXBvcnQvUXVpY2tJbXBvcnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1aWNrSW1wb3J0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtBcGlRdWVyeUltYWdlSW5mb1BhcmFtc30gZnJvbSAndHlwZXMtbWVkaWF3aWtpLXJlbm92YXRlL2FwaV9wYXJhbXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IHJlZnJlc2hQYWdlID0gKHdnUGFnZU5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn5q2j5Zyo5Yi35paw6aG16Z2iJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGxvY2F0aW9uLnJlcGxhY2UobXcudXRpbC5nZXRVcmwod2dQYWdlTmFtZSkpO1xufTtcblxuY29uc3QgaW1wb3J0UGFnZSA9IGFzeW5jIChwYWdlTmFtZTogc3RyaW5nLCBpd3ByZWZpeDogc3RyaW5nLCBpc0ZpbGVOUzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg5a+85YWl6aG16Z2i5Lit77yaJHtwYWdlTmFtZX1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IHN1bW1hcnk6IHN0cmluZyA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdGlmIChpc0ZpbGVOUykge1xuXHRcdHN1bW1hcnkgKz0gJ++8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vSc7XG5cdH1cblxuXHRjb25zdCBwYXJhbXM6IEFwaUltcG9ydFBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdpbXBvcnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGFzc2lnbmtub3dudXNlcnM6IHRydWUsXG5cdFx0aW50ZXJ3aWtpcGFnZTogcGFnZU5hbWUsXG5cdFx0aW50ZXJ3aWtpcHJlZml4OiBpd3ByZWZpeCxcblx0XHRpbnRlcndpa2lzb3VyY2U6IGl3cHJlZml4IGFzIE5vbk51bGxhYmxlPEFwaUltcG9ydFBhcmFtc1snaW50ZXJ3aWtpc291cmNlJ10+LFxuXHRcdHN1bW1hcnk6IGDvvLske3N1bW1hcnl977y9YCxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlrozmiJDvvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOi/geenu+aWh+S7tuS4re+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB1cGxvYWRQYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmw6IHVybCA/PyBgaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpSZWRpcmVjdC9maWxlLyR7bXcudXRpbC5yYXd1cmxlbmNvZGUodGFyZ2V0KX1gLFxuXHRcdGFjdGlvbjogJ3VwbG9hZCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0ZmlsZW5hbWU6IHRhcmdldCxcblx0XHRjb21tZW50OiAn6Ieq5YW25LuW572R56uZ6L+B56e75paH5Lu2Jyxcblx0XHRpZ25vcmV3YXJuaW5nczogdHJ1ZSxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHVwbG9hZFBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDmlofku7bov4Hnp7vlrozmiJDvvJoke3RhcmdldH1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGFzeW5jIChwYWdlTmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBpc0ZpbGVOUyA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHF1ZXJ5UGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgJiBBcGlRdWVyeUltYWdlSW5mb1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6IFsnaW1hZ2VpbmZvJywgJ2luZm8nXSxcblx0XHRpaXByb3A6IFsndXJsJ10sXG5cdFx0dGl0bGVzOiBwYWdlTmFtZXMsXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHF1ZXJ5UGFyYW1zKTtcblxuXHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRjb25zdCB0aXRsZSA9IHBhZ2UudGl0bGUgYXMgc3RyaW5nO1xuXG5cdFx0aWYgKCFwYWdlLm1pc3NpbmcpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGF3YWl0IGltcG9ydFBhZ2UodGl0bGUsICdjb21tb25zJywgaXNGaWxlTlMpO1xuXHRcdGF3YWl0IGltcG9ydFBhZ2UodGl0bGUsICd6aHdpa2knLCBpc0ZpbGVOUyk7XG5cblx0XHRpZiAoaXNGaWxlTlMpIHtcblx0XHRcdGlmICghcGFnZS5rbm93bikge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0YXdhaXQgdXBsb2FkRmlsZSh0aXRsZSwgcGFnZS5pbWFnZWluZm9bMF0udXJsIGFzIHN0cmluZyk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHJlc3BvbnNlWydxdWVyeSddLnJlZGlyZWN0cykge1xuXHRcdGNvbnN0IHRvcyA9IFtdO1xuXG5cdFx0Zm9yIChjb25zdCB7dG99IG9mIHJlc3BvbnNlWydxdWVyeSddLnJlZGlyZWN0cyBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHR0b3NbdG9zLmxlbmd0aF0gPSB0bztcblx0XHR9XG5cblx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdCh0b3MpO1xuXHR9XG59O1xuXG5leHBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCByZWZyZXNoUGFnZX07XG4iLCAiaW1wb3J0IHtkZXRlY3RJZkZpbGVSZWRpcmVjdCwgcmVmcmVzaFBhZ2V9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuKGZ1bmN0aW9uIHF1aWNrSW1wb3J0KCk6IHZvaWQge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWUsIHdnV2lraUlEfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBjYVZpZXdGb3JlaWduWmh3aWtpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjYS12aWV3LWZvcmVpZ24gYVtocmVmKj0nemgud2lraXBlZGlhLm9yZyddXCIpO1xuXHRjb25zdCByZWRpcmVjdFRleHRBID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZGlyZWN0VGV4dCBhJyk7XG5cblx0Y29uc3QgaXNGaWxlTlM6IGJvb2xlYW4gPSB3Z05hbWVzcGFjZU51bWJlciA9PT0gNjtcblx0Y29uc3QgaGFzTXdOb2FydGljbGV0ZXh0OiBib29sZWFuID0gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctbm9hcnRpY2xldGV4dCcpO1xuXHRjb25zdCBpd3ByZWZpeDogc3RyaW5nID0gY2FWaWV3Rm9yZWlnblpod2lraS5sZW5ndGggPiAwID8gJ3pod2lraScgOiAnY29tbW9ucyc7XG5cblx0Y29uc3QgbGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TICYmICFoYXNNd05vYXJ0aWNsZXRleHQgPyBpd3ByZWZpeCA6ICcnO1xuXHRjb25zdCBidXR0b25MYWJlbDogc3RyaW5nID0gaXNGaWxlTlNcblx0XHQ/IGxhYmVsXG5cdFx0XHQ/IGDmlofku7bvvIgke2xhYmVsfe+8iWBcblx0XHRcdDogJ+mhtemdoidcblx0XHQ6IHJlZGlyZWN0VGV4dEEubGVuZ3RoID4gMFxuXHRcdFx0PyAn6YeN5a6a5ZCR55uu5qCHJ1xuXHRcdFx0OiAn6aG16Z2iJztcblxuXHRpZiAod2dXaWtpSUQgIT09ICd6aHFpdXdlbmJhaWtlJyAmJiBpc0ZpbGVOUykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBg5a+85YWlJHtidXR0b25MYWJlbH1gLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gcmVkaXJlY3RUZXh0QVswXT8udGV4dENvbnRlbnQgfHwgd2dQYWdlTmFtZTtcblx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHBhZ2VOYW1lLCBpc0ZpbGVOUyk7XG5cdFx0fSkoKS50aGVuKCgpID0+IHtcblx0XHRcdHJlZnJlc2hQYWdlKHdnUGFnZU5hbWUpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFB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cEUsR0FBR3FFLE9BQU9DLElBQUk7QUFFaEUsUUFBTUMsc0JBQXNCQyxTQUFTQyxpQkFBaUIsOENBQThDO0FBQ3BHLFFBQU1DLGdCQUFnQkYsU0FBU0MsaUJBQWlCLGlCQUFpQjtBQUVqRSxRQUFNakUsV0FBb0IyRCxzQkFBc0I7QUFDaEQsUUFBTVEscUJBQThCLENBQUMsQ0FBQ0gsU0FBU0ksY0FBYyxtQkFBbUI7QUFDaEYsUUFBTXJFLFdBQW1CZ0Usb0JBQW9CUCxTQUFTLElBQUksV0FBVztBQUVyRSxRQUFNYSxRQUFnQnJFLFlBQVksQ0FBQ21FLHFCQUFxQnBFLFdBQVc7QUFDbkUsUUFBTXVFLGNBQXNCdEUsV0FDekJxRSxRQUFBLE1BQUF4RixPQUNPd0YsT0FBSyxHQUFBLElBQ1gsT0FDREgsY0FBY1YsU0FBUyxJQUN0QixVQUNBO0FBRUosTUFBSUksYUFBYSxtQkFBbUI1RCxVQUFVO0FBQzdDO0VBQ0Q7QUFFQSxRQUFNdUUsWUFBbUNQLFNBQVNJLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEcsUUFBTUksVUFBZ0NoRixHQUFHQyxLQUFLZ0YsZUFBZUYsV0FBVyxLQUFBLEtBQUExRixPQUFVeUYsV0FBVyxHQUFJLFVBQVU7QUFDM0csTUFBSSxDQUFDRSxTQUFTO0FBQ2I7RUFDRDtBQUVBQSxVQUFRRSxpQkFBaUIsU0FBUyxNQUFZO0FBQzdDLFNBQUE3RSxrQkFBTSxhQUFZO0FBQUEsVUFBQThFO0FBQ2pCLFlBQU03RSxhQUFtQjZFLGtCQUFBVCxjQUFjLENBQUMsT0FBQSxRQUFBUyxvQkFBQSxTQUFBLFNBQWZBLGdCQUFrQkMsZ0JBQWUxRjtBQUMxRCxZQUFNdUMscUJBQXFCM0IsVUFBVUUsUUFBUTtJQUM5QyxDQUFBLEVBQUcsRUFBRTZFLEtBQUssTUFBTTtBQUNmNUYsa0JBQVlDLFVBQVU7SUFDdkIsQ0FBQztFQUNGLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInJlZnJlc2hQYWdlIiwgIndnUGFnZU5hbWUiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgImltcG9ydFBhZ2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlTmFtZSIsICJpd3ByZWZpeCIsICJpc0ZpbGVOUyIsICJzdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImFzc2lnbmtub3dudXNlcnMiLCAiaW50ZXJ3aWtpcGFnZSIsICJpbnRlcndpa2lwcmVmaXgiLCAiaW50ZXJ3aWtpc291cmNlIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAidXBsb2FkRmlsZSIsICJfcmVmMiIsICJ0YXJnZXQiLCAidXJsIiwgInVwbG9hZFBhcmFtcyIsICJyYXd1cmxlbmNvZGUiLCAiZmlsZW5hbWUiLCAiY29tbWVudCIsICJpZ25vcmV3YXJuaW5ncyIsICJfeDMiLCAiX3g0IiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgIl9yZWYzIiwgInBhZ2VOYW1lcyIsICJxdWVyeVBhcmFtcyIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiaWlwcm9wIiwgInRpdGxlcyIsICJyZWRpcmVjdHMiLCAicmVzcG9uc2UiLCAicG9zdCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAicGFnZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAicGFnZSIsICJ2YWx1ZSIsICJ0aXRsZSIsICJtaXNzaW5nIiwgImtub3duIiwgImltYWdlaW5mbyIsICJlcnIiLCAiZSIsICJmIiwgInRvcyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJ0byIsICJsZW5ndGgiLCAiX3g1IiwgInF1aWNrSW1wb3J0IiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnV2lraUlEIiwgImNvbmZpZyIsICJnZXQiLCAiY2FWaWV3Rm9yZWlnblpod2lraSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInJlZGlyZWN0VGV4dEEiLCAiaGFzTXdOb2FydGljbGV0ZXh0IiwgInF1ZXJ5U2VsZWN0b3IiLCAibGFiZWwiLCAiYnV0dG9uTGFiZWwiLCAicG9ydGxldElkIiwgImVsZW1lbnQiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJfcmVkaXJlY3RUZXh0QSQiLCAidGV4dENvbnRlbnQiLCAidGhlbiJdCn0K
