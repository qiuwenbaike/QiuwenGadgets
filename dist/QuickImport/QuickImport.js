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
  var _ref3 = _asyncToGenerator(function* (titles, isFileNS = false) {
    const promises = [];
    for (let i = 0; i < (titles.length + 50) / 50; i++) {
      promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
        const queryParams = {
          action: "query",
          format: "json",
          formatversion: "2",
          prop: ["imageinfo", "info"],
          iiprop: ["url"],
          titles: titles.slice(i * 50, (i + 1) * 50),
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
    }
    for (var _i = 0, _promises = promises; _i < _promises.length; _i++) {
      const promise = _promises[_i];
      yield promise();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvY29yZS50cyIsICJzcmMvUXVpY2tJbXBvcnQvUXVpY2tJbXBvcnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1aWNrSW1wb3J0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtBcGlRdWVyeUltYWdlSW5mb1BhcmFtc30gZnJvbSAndHlwZXMtbWVkaWF3aWtpLXJlbm92YXRlL2FwaV9wYXJhbXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IHJlZnJlc2hQYWdlID0gKHdnUGFnZU5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn5q2j5Zyo5Yi35paw6aG16Z2iJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGxvY2F0aW9uLnJlcGxhY2UobXcudXRpbC5nZXRVcmwod2dQYWdlTmFtZSkpO1xufTtcblxuY29uc3QgaW1wb3J0UGFnZSA9IGFzeW5jIChwYWdlTmFtZTogc3RyaW5nLCBpd3ByZWZpeDogc3RyaW5nLCBpc0ZpbGVOUzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg5a+85YWl6aG16Z2i5Lit77yaJHtwYWdlTmFtZX1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IHN1bW1hcnk6IHN0cmluZyA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdGlmIChpc0ZpbGVOUykge1xuXHRcdHN1bW1hcnkgKz0gJ++8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vSc7XG5cdH1cblxuXHRjb25zdCBwYXJhbXM6IEFwaUltcG9ydFBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdpbXBvcnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGFzc2lnbmtub3dudXNlcnM6IHRydWUsXG5cdFx0aW50ZXJ3aWtpcGFnZTogcGFnZU5hbWUsXG5cdFx0aW50ZXJ3aWtpcHJlZml4OiBpd3ByZWZpeCxcblx0XHRpbnRlcndpa2lzb3VyY2U6IGl3cHJlZml4IGFzIE5vbk51bGxhYmxlPEFwaUltcG9ydFBhcmFtc1snaW50ZXJ3aWtpc291cmNlJ10+LFxuXHRcdHN1bW1hcnk6IGDvvLske3N1bW1hcnl977y9YCxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlrozmiJDvvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOi/geenu+aWh+S7tuS4re+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB1cGxvYWRQYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmw6IHVybCA/PyBgaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpSZWRpcmVjdC9maWxlLyR7bXcudXRpbC5yYXd1cmxlbmNvZGUodGFyZ2V0KX1gLFxuXHRcdGFjdGlvbjogJ3VwbG9hZCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0ZmlsZW5hbWU6IHRhcmdldCxcblx0XHRjb21tZW50OiAn6Ieq5YW25LuW572R56uZ6L+B56e75paH5Lu2Jyxcblx0XHRpZ25vcmV3YXJuaW5nczogdHJ1ZSxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHVwbG9hZFBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDmlofku7bov4Hnp7vlrozmiJDvvJoke3RhcmdldH1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBpc0ZpbGVOUyA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCAodGl0bGVzLmxlbmd0aCArIDUwKSAvIDUwOyBpKyspIHtcblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0Y29uc3QgcXVlcnlQYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyAmIEFwaVF1ZXJ5SW1hZ2VJbmZvUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6IFsnaW1hZ2VpbmZvJywgJ2luZm8nXSxcblx0XHRcdFx0aWlwcm9wOiBbJ3VybCddLFxuXHRcdFx0XHR0aXRsZXM6IHRpdGxlcy5zbGljZShpICogNTAsIChpICsgMSkgKiA1MCksXG5cdFx0XHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0XHRcdH07XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHF1ZXJ5UGFyYW1zKTtcblxuXHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlID0gcGFnZS50aXRsZSBhcyBzdHJpbmc7XG5cblx0XHRcdFx0aWYgKCFwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGF3YWl0IGltcG9ydFBhZ2UodGl0bGUsICdjb21tb25zJywgaXNGaWxlTlMpO1xuXHRcdFx0XHRhd2FpdCBpbXBvcnRQYWdlKHRpdGxlLCAnemh3aWtpJywgaXNGaWxlTlMpO1xuXG5cdFx0XHRcdGlmIChpc0ZpbGVOUykge1xuXHRcdFx0XHRcdGlmICghcGFnZS5rbm93bikge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YXdhaXQgdXBsb2FkRmlsZSh0aXRsZSwgcGFnZS5pbWFnZWluZm9bMF0udXJsIGFzIHN0cmluZyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddLnJlZGlyZWN0cykge1xuXHRcdFx0XHRjb25zdCB0b3MgPSBbXTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHt0b30gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHR0b3NbdG9zLmxlbmd0aF0gPSB0bztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHRvcyk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdGF3YWl0IHByb21pc2UoKTtcblx0fVxufTtcblxuZXhwb3J0IHtkZXRlY3RJZkZpbGVSZWRpcmVjdCwgcmVmcmVzaFBhZ2V9O1xuIiwgImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydCgpOiB2b2lkIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgY2FWaWV3Rm9yZWlnblpod2lraSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY2Etdmlldy1mb3JlaWduIGFbaHJlZio9J3poLndpa2lwZWRpYS5vcmcnXVwiKTtcblx0Y29uc3QgcmVkaXJlY3RUZXh0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWRpcmVjdFRleHQgYScpO1xuXG5cdGNvbnN0IGlzRmlsZU5TOiBib29sZWFuID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDY7XG5cdGNvbnN0IGhhc013Tm9hcnRpY2xldGV4dDogYm9vbGVhbiA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKTtcblx0Y29uc3QgaXdwcmVmaXg6IHN0cmluZyA9IGNhVmlld0ZvcmVpZ25aaHdpa2kubGVuZ3RoID4gMCA/ICd6aHdpa2knIDogJ2NvbW1vbnMnO1xuXG5cdGNvbnN0IGxhYmVsOiBzdHJpbmcgPSBpc0ZpbGVOUyAmJiAhaGFzTXdOb2FydGljbGV0ZXh0ID8gaXdwcmVmaXggOiAnJztcblx0Y29uc3QgYnV0dG9uTGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TXG5cdFx0PyBsYWJlbFxuXHRcdFx0PyBg5paH5Lu277yIJHtsYWJlbH3vvIlgXG5cdFx0XHQ6ICfpobXpnaInXG5cdFx0OiByZWRpcmVjdFRleHRBLmxlbmd0aCA+IDBcblx0XHRcdD8gJ+mHjeWumuWQkeebruaghydcblx0XHRcdDogJ+mhtemdoic7XG5cblx0aWYgKHdnV2lraUlEICE9PSAnemhxaXV3ZW5iYWlrZScgJiYgaXNGaWxlTlMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgYOWvvOWFpSR7YnV0dG9uTGFiZWx9YCwgJ3QtaW1wb3J0Jyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IHJlZGlyZWN0VGV4dEFbMF0/LnRleHRDb250ZW50IHx8IHdnUGFnZU5hbWU7XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChwYWdlTmFtZSwgaXNGaWxlTlMpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSh3Z1BhZ2VOYW1lKTtcblx0XHR9KTtcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsVUFBVzs7QUNBWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxlQUFBQyxPQUFpQ0wsT0FBTyxDQUFFOztBQ0Q5RCxJQUFBTSxxQkFBdUJKLFFBQUEscUJBQUE7QUFFdkIsSUFBSUssbUJBQXFDO0VBQ3hDQyxXQUFXQSxNQUFNO0VBQUM7QUFDbkI7QUFFQSxJQUFNQyxjQUFlQyxnQkFBNkI7QUFDakRILG1CQUFpQkMsVUFBVTtBQUMzQixHQUFBLEdBQUFGLG1CQUFBSyxVQUNDO0lBQ0NDLE1BQU07SUFDTkMsVUFBVTtFQUNYLEdBQ0EsTUFDRDtBQUVBQyxXQUFTQyxRQUFRQyxHQUFHQyxLQUFLQyxPQUFPUixVQUFVLENBQUM7QUFDNUM7QUFFQSxJQUFNUyxhQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWEsV0FBT0MsVUFBa0JDLFVBQWtCQyxXQUFvQixPQUF5QjtBQUMxR2pCLHFCQUFpQkMsVUFBVTtBQUMzQkQsd0JBQUEsR0FBbUJELG1CQUFBSyxVQUNsQjtNQUNDQyxNQUFBLFNBQUFQLE9BQWVpQixRQUFRO01BQ3ZCVCxVQUFVO0lBQ1gsR0FDQSxNQUNEO0FBRUEsUUFBSVksVUFBa0I7QUFDdEIsUUFBSUQsVUFBVTtBQUNi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QnFFLG9CQUFvQnRDLFNBQVMsSUFBSSxXQUFXO0FBRXJFLFFBQU00QyxRQUFnQjFFLFlBQVksQ0FBQ3dFLHFCQUFxQnpFLFdBQVc7QUFDbkUsUUFBTTRFLGNBQXNCM0UsV0FDekIwRSxRQUFBLE1BQUE3RixPQUNPNkYsT0FBSyxHQUFBLElBQ1gsT0FDREgsY0FBY3pDLFNBQVMsSUFDdEIsVUFDQTtBQUVKLE1BQUltQyxhQUFhLG1CQUFtQmpFLFVBQVU7QUFDN0M7RUFDRDtBQUVBLFFBQU00RSxZQUFtQ1AsU0FBU0ksY0FBYyxhQUFhLElBQUksZUFBZTtBQUNoRyxRQUFNSSxVQUFnQ3JGLEdBQUdDLEtBQUtxRixlQUFlRixXQUFXLEtBQUEsS0FBQS9GLE9BQVU4RixXQUFXLEdBQUksVUFBVTtBQUMzRyxNQUFJLENBQUNFLFNBQVM7QUFDYjtFQUNEO0FBRUFBLFVBQVFFLGlCQUFpQixTQUFTLE1BQVk7QUFDN0MsU0FBQWxGLGtCQUFNLGFBQVk7QUFBQSxVQUFBbUY7QUFDakIsWUFBTWxGLGFBQW1Ca0Ysa0JBQUFULGNBQWMsQ0FBQyxPQUFBLFFBQUFTLG9CQUFBLFNBQUEsU0FBZkEsZ0JBQWtCQyxnQkFBZS9GO0FBQzFELFlBQU11QyxxQkFBcUIzQixVQUFVRSxRQUFRO0lBQzlDLENBQUEsRUFBRyxFQUFFa0YsS0FBSyxNQUFNO0FBQ2ZqRyxrQkFBWUMsVUFBVTtJQUN2QixDQUFDO0VBQ0YsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAicmVmcmVzaFBhZ2UiLCAid2dQYWdlTmFtZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAiaW1wb3J0UGFnZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2VOYW1lIiwgIml3cHJlZml4IiwgImlzRmlsZU5TIiwgInN1bW1hcnkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiYXNzaWdua25vd251c2VycyIsICJpbnRlcndpa2lwYWdlIiwgImludGVyd2lraXByZWZpeCIsICJpbnRlcndpa2lzb3VyY2UiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJ1cGxvYWRGaWxlIiwgIl9yZWYyIiwgInRhcmdldCIsICJ1cmwiLCAidXBsb2FkUGFyYW1zIiwgInJhd3VybGVuY29kZSIsICJmaWxlbmFtZSIsICJjb21tZW50IiwgImlnbm9yZXdhcm5pbmdzIiwgIl94MyIsICJfeDQiLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAiX3JlZjMiLCAidGl0bGVzIiwgInByb21pc2VzIiwgImkiLCAibGVuZ3RoIiwgInF1ZXJ5UGFyYW1zIiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJpaXByb3AiLCAic2xpY2UiLCAicmVkaXJlY3RzIiwgInJlc3BvbnNlIiwgInBvc3QiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInBhZ2VzIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInBhZ2UiLCAidmFsdWUiLCAidGl0bGUiLCAibWlzc2luZyIsICJrbm93biIsICJpbWFnZWluZm8iLCAiZXJyIiwgImUiLCAiZiIsICJ0b3MiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAidG8iLCAiX2kiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAiX3g1IiwgInF1aWNrSW1wb3J0IiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnV2lraUlEIiwgImNvbmZpZyIsICJnZXQiLCAiY2FWaWV3Rm9yZWlnblpod2lraSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInJlZGlyZWN0VGV4dEEiLCAiaGFzTXdOb2FydGljbGV0ZXh0IiwgInF1ZXJ5U2VsZWN0b3IiLCAibGFiZWwiLCAiYnV0dG9uTGFiZWwiLCAicG9ydGxldElkIiwgImVsZW1lbnQiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJfcmVkaXJlY3RUZXh0QSQiLCAidGV4dENvbnRlbnQiLCAidGhlbiJdCn0K
