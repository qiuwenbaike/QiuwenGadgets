/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickImport}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickImportAllMedia}
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

// dist/QuickImportAllMedia/QuickImportAllMedia.js
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
//! src/QuickImportAllMedia/options.json
var version2 = "1.1";
//! src/QuickImportAllMedia/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api2 = (0, import_ext_gadget3.initMwApi)("QuickImportAllMedia/".concat(version2));
//! src/QuickImportAllMedia/modules/core.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var toastifyInstance2 = {
  hideToast: () => {
  }
};
var getAllImages = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (wgPageName) {
    var _response$query;
    toastifyInstance2.hideToast();
    (0, import_ext_gadget4.toastify)({
      text: "正在获取迁移目标",
      duration: -1
    }, "info");
    const fileNames = [];
    const queryImageParams = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "images",
      titles: wgPageName,
      imlimit: 5e3
    };
    const response = yield api2.get(queryImageParams);
    var _iterator3 = _createForOfIteratorHelper((_response$query = response["query"]) === null || _response$query === void 0 ? void 0 : _response$query.pages[0].images), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const imageInfo = _step3.value;
        if (!imageInfo || !imageInfo.title) {
          continue;
        }
        fileNames[fileNames.length] = imageInfo.title;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    const fileLinkElements = document.querySelectorAll("a[href^='/wiki/File:']");
    var _iterator4 = _createForOfIteratorHelper(fileLinkElements), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const element = _step4.value;
        const {
          href
        } = element;
        if (href) {
          const fileName = decodeURIComponent(href.replace("/wiki/", "").replace("File:File:", ""));
          fileNames[fileNames.length] = fileName;
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    toastifyInstance2.hideToast();
    toastifyInstance2 = (0, import_ext_gadget4.toastify)({
      text: "获取迁移目标完成",
      duration: -1
    }, "success");
    return [...new Set(fileNames)];
  });
  return function getAllImages2(_x6) {
    return _ref4.apply(this, arguments);
  };
}();
//! src/QuickImportAllMedia/QuickImportAllMedia.ts
(function quickImportAllMedia() {
  const {
    wgArticleId
  } = mw.config.get();
  if (!wgArticleId) {
    return;
  }
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", "导入此页面所有文件", "t-import");
  if (!element) {
    return;
  }
  const {
    wgPageName
  } = mw.config.get();
  element.addEventListener("click", () => {
    void _asyncToGenerator(function* () {
      const fileNames = yield getAllImages(wgPageName);
      yield detectIfFileRedirect([...new Set(fileNames)], true);
    })().then(() => {
      refreshPage(wgPageName);
    });
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvY29yZS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9vcHRpb25zLmpzb24iLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9RdWlja0ltcG9ydEFsbE1lZGlhL1F1aWNrSW1wb3J0QWxsTWVkaWEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1aWNrSW1wb3J0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtBcGlRdWVyeUltYWdlSW5mb1BhcmFtc30gZnJvbSAndHlwZXMtbWVkaWF3aWtpLXJlbm92YXRlL2FwaV9wYXJhbXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IHJlZnJlc2hQYWdlID0gKHdnUGFnZU5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn5q2j5Zyo5Yi35paw6aG16Z2iJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGxvY2F0aW9uLnJlcGxhY2UobXcudXRpbC5nZXRVcmwod2dQYWdlTmFtZSkpO1xufTtcblxuY29uc3QgaW1wb3J0UGFnZSA9IGFzeW5jIChwYWdlTmFtZTogc3RyaW5nLCBpd3ByZWZpeDogc3RyaW5nLCBpc0ZpbGVOUzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg5a+85YWl6aG16Z2i5Lit77yaJHtwYWdlTmFtZX1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IHN1bW1hcnk6IHN0cmluZyA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdGlmIChpc0ZpbGVOUykge1xuXHRcdHN1bW1hcnkgKz0gJ++8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vSc7XG5cdH1cblxuXHRjb25zdCBwYXJhbXM6IEFwaUltcG9ydFBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdpbXBvcnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGFzc2lnbmtub3dudXNlcnM6IHRydWUsXG5cdFx0aW50ZXJ3aWtpcGFnZTogcGFnZU5hbWUsXG5cdFx0aW50ZXJ3aWtpcHJlZml4OiBpd3ByZWZpeCxcblx0XHRpbnRlcndpa2lzb3VyY2U6IGl3cHJlZml4IGFzIE5vbk51bGxhYmxlPEFwaUltcG9ydFBhcmFtc1snaW50ZXJ3aWtpc291cmNlJ10+LFxuXHRcdHN1bW1hcnk6IGDvvLske3N1bW1hcnl977y9YCxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlrozmiJDvvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOi/geenu+aWh+S7tuS4re+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB1cGxvYWRQYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmw6IHVybCA/PyBgaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpSZWRpcmVjdC9maWxlLyR7bXcudXRpbC5yYXd1cmxlbmNvZGUodGFyZ2V0KX1gLFxuXHRcdGFjdGlvbjogJ3VwbG9hZCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0ZmlsZW5hbWU6IHRhcmdldCxcblx0XHRjb21tZW50OiAn6Ieq5YW25LuW572R56uZ6L+B56e75paH5Lu2Jyxcblx0XHRpZ25vcmV3YXJuaW5nczogdHJ1ZSxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHVwbG9hZFBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDmlofku7bov4Hnp7vlrozmiJDvvJoke3RhcmdldH1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGFzeW5jIChwYWdlTmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBpc0ZpbGVOUyA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHF1ZXJ5UGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgJiBBcGlRdWVyeUltYWdlSW5mb1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6IFsnaW1hZ2VpbmZvJywgJ2luZm8nXSxcblx0XHRpaXByb3A6IFsndXJsJ10sXG5cdFx0dGl0bGVzOiBwYWdlTmFtZXMsXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocXVlcnlQYXJhbXMpO1xuXG5cdGZvciAoY29uc3QgcGFnZSBvZiByZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdGNvbnN0IHRpdGxlID0gcGFnZS50aXRsZSBhcyBzdHJpbmc7XG5cblx0XHRpZiAoIXBhZ2UubWlzc2luZykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0YXdhaXQgaW1wb3J0UGFnZSh0aXRsZSwgJ2NvbW1vbnMnLCBpc0ZpbGVOUyk7XG5cdFx0YXdhaXQgaW1wb3J0UGFnZSh0aXRsZSwgJ3pod2lraScsIGlzRmlsZU5TKTtcblxuXHRcdGlmIChpc0ZpbGVOUykge1xuXHRcdFx0aWYgKCFwYWdlLmtub3duKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRhd2FpdCB1cGxvYWRGaWxlKHRpdGxlLCBwYWdlLmltYWdlaW5mb1swXS51cmwgYXMgc3RyaW5nKTtcblx0XHR9XG5cdH1cblxuXHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzKSB7XG5cdFx0Y29uc3QgdG9zID0gW107XG5cblx0XHRmb3IgKGNvbnN0IHt0b30gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdHRvc1t0b3MubGVuZ3RoXSA9IHRvO1xuXHRcdH1cblxuXHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHRvcyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjEuMVwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWlja0ltcG9ydEFsbE1lZGlhLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IGdldEFsbEltYWdlcyA9IGFzeW5jICh3Z1BhZ2VOYW1lOiBzdHJpbmcpID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOiOt+WPlui/geenu+ebruaghycsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHF1ZXJ5SW1hZ2VQYXJhbXM6IEFwaVF1ZXJ5SW1hZ2VzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2ltYWdlcycsXG5cdFx0dGl0bGVzOiB3Z1BhZ2VOYW1lLFxuXHRcdGltbGltaXQ6IDUwMDAsXG5cdH07XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHF1ZXJ5SW1hZ2VQYXJhbXMpO1xuXG5cdGZvciAoY29uc3QgaW1hZ2VJbmZvIG9mIHJlc3BvbnNlWydxdWVyeSddPy5wYWdlc1swXS5pbWFnZXMgYXMge25zOiBudW1iZXI7IHRpdGxlOiBzdHJpbmd9W10pIHtcblx0XHRpZiAoIWltYWdlSW5mbyB8fCAhaW1hZ2VJbmZvLnRpdGxlKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gaW1hZ2VJbmZvLnRpdGxlO1xuXHR9XG5cblx0Y29uc3QgZmlsZUxpbmtFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhW2hyZWZePScvd2lraS9GaWxlOiddXCIpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBmaWxlTGlua0VsZW1lbnRzIGFzIHVua25vd24gYXMgSFRNTEFuY2hvckVsZW1lbnRbXSkge1xuXHRcdGNvbnN0IHtocmVmfSA9IGVsZW1lbnQ7XG5cblx0XHRpZiAoaHJlZikge1xuXHRcdFx0Y29uc3QgZmlsZU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoaHJlZi5yZXBsYWNlKCcvd2lraS8nLCAnJykucmVwbGFjZSgnRmlsZTpGaWxlOicsICcnKSk7XG5cdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0XHR9XG5cdH1cblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+iOt+WPlui/geenu+ebruagh+WujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRyZXR1cm4gWy4uLm5ldyBTZXQoZmlsZU5hbWVzKV07XG59O1xuXG5leHBvcnQge2dldEFsbEltYWdlc307XG4iLCAiaW1wb3J0IHtkZXRlY3RJZkZpbGVSZWRpcmVjdCwgcmVmcmVzaFBhZ2V9IGZyb20gJ34vUXVpY2tJbXBvcnQvbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dBcnRpY2xlSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoIXdnQXJ0aWNsZUlkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IGF3YWl0IGdldEFsbEltYWdlcyh3Z1BhZ2VOYW1lKTtcblx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KFsuLi5uZXcgU2V0KGZpbGVOYW1lcyldLCB0cnVlKTtcblx0XHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0cmVmcmVzaFBhZ2Uod2dQYWdlTmFtZSk7XG5cdFx0fSk7XG5cdH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLGVBQUFDLE9BQWlDTCxPQUFPLENBQUU7O0FDRDlELElBQUFNLHFCQUF1QkosUUFBQSxxQkFBQTtBQUV2QixJQUFJSyxtQkFBcUM7RUFDeENDLFdBQVdBLE1BQU07RUFBQztBQUNuQjtBQUVBLElBQU1DLGNBQWVDLGdCQUE2QjtBQUNqREgsbUJBQWlCQyxVQUFVO0FBQzNCLEdBQUEsR0FBQUYsbUJBQUFLLFVBQ0M7SUFDQ0MsTUFBTTtJQUNOQyxVQUFVO0VBQ1gsR0FDQSxNQUNEO0FBRUFDLFdBQVNDLFFBQVFDLEdBQUdDLEtBQUtDLE9BQU9SLFVBQVUsQ0FBQztBQUM1QztBQUVBLElBQU1TLGFBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBYSxXQUFPQyxVQUFrQkMsVUFBa0JDLFdBQW9CLE9BQXlCO0FBQzFHakIscUJBQWlCQyxVQUFVO0FBQzNCRCx3QkFBQSxHQUFtQkQsbUJBQUFLLFVBQ2xCO01BQ0NDLE1BQUEsU0FBQVAsT0FBZWlCLFFBQVE7TUFDdkJULFVBQVU7SUFDWCxHQUNBLE1BQ0Q7QUFFQSxRQUFJWSxVQUFrQjtBQUN0QixRQUFJRCxVQUFVO0FBQ2JDLGlCQUFXO0lBQ1o7QUFFQSxVQUFNQyxTQUEwQjtNQUMvQkMsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGtCQUFrQjtNQUNsQkMsZUFBZVI7TUFDZlMs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QTtBQUFBLEVBQUE7O0NDSkwsU0FBU3VFLHNCQUE0QjtBQUNyQyxRQUFNO0lBQUNDO0VBQVcsSUFBSTdGLEdBQUc4RixPQUFPbkQsSUFBSTtBQUNwQyxNQUFJLENBQUNrRCxhQUFhO0FBQ2pCO0VBQ0Q7QUFFQSxRQUFNRSxZQUFtQ2IsU0FBU2MsY0FBYyxhQUFhLElBQUksZUFBZTtBQUNoRyxRQUFNVixVQUFnQ3RGLEdBQUdDLEtBQUtnRyxlQUFlRixXQUFXLEtBQUssYUFBYSxVQUFVO0FBQ3BHLE1BQUksQ0FBQ1QsU0FBUztBQUNiO0VBQ0Q7QUFFQSxRQUFNO0lBQUM1RjtFQUFVLElBQUlNLEdBQUc4RixPQUFPbkQsSUFBSTtBQUVuQzJDLFVBQVFZLGlCQUFpQixTQUFTLE1BQVk7QUFDN0MsU0FBQTdGLGtCQUFNLGFBQVk7QUFDakIsWUFBTXFFLFlBQUEsTUFBNEJILGFBQWE3RSxVQUFVO0FBQ3pELFlBQU11QyxxQkFBcUIsQ0FBQyxHQUFHLElBQUl5RCxJQUFJaEIsU0FBUyxDQUFDLEdBQUcsSUFBSTtJQUN6RCxDQUFBLEVBQUcsRUFBRXlCLEtBQUssTUFBTTtBQUNmMUcsa0JBQVlDLFVBQVU7SUFDdkIsQ0FBQztFQUNGLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInJlZnJlc2hQYWdlIiwgIndnUGFnZU5hbWUiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgImltcG9ydFBhZ2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlTmFtZSIsICJpd3ByZWZpeCIsICJpc0ZpbGVOUyIsICJzdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImFzc2lnbmtub3dudXNlcnMiLCAiaW50ZXJ3aWtpcGFnZSIsICJpbnRlcndpa2lwcmVmaXgiLCAiaW50ZXJ3aWtpc291cmNlIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAidXBsb2FkRmlsZSIsICJfcmVmMiIsICJ0YXJnZXQiLCAidXJsIiwgInVwbG9hZFBhcmFtcyIsICJyYXd1cmxlbmNvZGUiLCAiZmlsZW5hbWUiLCAiY29tbWVudCIsICJpZ25vcmV3YXJuaW5ncyIsICJfeDMiLCAiX3g0IiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgIl9yZWYzIiwgInBhZ2VOYW1lcyIsICJxdWVyeVBhcmFtcyIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiaWlwcm9wIiwgInRpdGxlcyIsICJyZWRpcmVjdHMiLCAicmVzcG9uc2UiLCAiZ2V0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJwYWdlcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJwYWdlIiwgInZhbHVlIiwgInRpdGxlIiwgIm1pc3NpbmciLCAia25vd24iLCAiaW1hZ2VpbmZvIiwgImVyciIsICJlIiwgImYiLCAidG9zIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInRvIiwgImxlbmd0aCIsICJfeDUiLCAidmVyc2lvbjIiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaTIiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInRvYXN0aWZ5SW5zdGFuY2UyIiwgImdldEFsbEltYWdlcyIsICJfcmVmNCIsICJfcmVzcG9uc2UkcXVlcnkiLCAiZmlsZU5hbWVzIiwgInF1ZXJ5SW1hZ2VQYXJhbXMiLCAiaW1saW1pdCIsICJfaXRlcmF0b3IzIiwgImltYWdlcyIsICJfc3RlcDMiLCAiaW1hZ2VJbmZvIiwgImZpbGVMaW5rRWxlbWVudHMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJlbGVtZW50IiwgImhyZWYiLCAiZmlsZU5hbWUiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgIlNldCIsICJfeDYiLCAicXVpY2tJbXBvcnRBbGxNZWRpYSIsICJ3Z0FydGljbGVJZCIsICJjb25maWciLCAicG9ydGxldElkIiwgInF1ZXJ5U2VsZWN0b3IiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJ0aGVuIl0KfQo=
