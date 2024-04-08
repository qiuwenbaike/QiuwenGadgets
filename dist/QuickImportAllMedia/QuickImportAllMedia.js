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
var import_ext_gadget2 = require("ext.gadget.Util");
var import_ext_gadget3 = require("ext.gadget.Toastify");
var toastifyInstance = {
  hideToast: () => {
  }
};
var refreshPage = (wgPageName) => {
  toastifyInstance.hideToast();
  (0, import_ext_gadget3.toastify)({
    text: "正在刷新页面",
    duration: -1
  }, "info");
  location.replace(mw.util.getUrl(wgPageName));
};
var importPage = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (pageName, iwprefix, isFileNS = false) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
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
    toastifyInstance = (0, import_ext_gadget3.toastify)({
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
    toastifyInstance = (0, import_ext_gadget3.toastify)({
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
    toastifyInstance = (0, import_ext_gadget3.toastify)({
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
    pageNames = (0, import_ext_gadget2.generateArray)(pageNames);
    const promises = [];
    for (let i = 0; i < (pageNames.length + 50) / 50; i++) {
      promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
        const titles = pageNames.slice(i * 50, (i + 1) * 50);
        if (pageNames.length === 0) {
          return;
        }
        const queryParams = {
          action: "query",
          format: "json",
          formatversion: "2",
          prop: ["imageinfo", "info"],
          iiprop: ["url"],
          titles,
          redirects: true
        };
        const response = yield api.post(queryParams);
        if (!response["query"]) {
          return;
        }
        var _iterator = _createForOfIteratorHelper(response["query"].pages), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            const page = _step.value;
            const title = page.title;
            if (!page.missing) {
              continue;
            }
            if (isFileNS) {
              yield importPage(title, "commons", isFileNS);
            }
            yield importPage(title, "zhwiki", isFileNS);
            if (isFileNS && (page.known || page.imagerepository && page.imagerepository !== "local")) {
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
//! src/QuickImportAllMedia/options.json
var version2 = "1.1";
//! src/QuickImportAllMedia/modules/api.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var api2 = (0, import_ext_gadget4.initMwApi)("QuickImportAllMedia/".concat(version2));
//! src/QuickImportAllMedia/modules/core.ts
var import_ext_gadget5 = require("ext.gadget.Toastify");
var toastifyInstance2 = {
  hideToast: () => {
  }
};
var getAllImages = /* @__PURE__ */ function() {
  var _ref5 = _asyncToGenerator(function* () {
    toastifyInstance2.hideToast();
    (0, import_ext_gadget5.toastify)({
      text: "正在获取迁移目标",
      duration: -1
    }, "info");
    const fileNames = [];
    const {
      wgPageName,
      wgNamespaceNumber
    } = mw.config.get();
    if (!(wgNamespaceNumber < 0)) {
      var _response$query;
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
          const fileName = decodeURIComponent(href.replace("".concat(location.protocol, "//").concat(location.host, "/wiki/"), "").replace("File:File:", ""));
          fileNames[fileNames.length] = fileName;
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    toastifyInstance2.hideToast();
    toastifyInstance2 = (0, import_ext_gadget5.toastify)({
      text: "获取迁移目标完成",
      duration: -1
    }, "success");
    return [...new Set(fileNames)];
  });
  return function getAllImages2() {
    return _ref5.apply(this, arguments);
  };
}();
//! src/QuickImportAllMedia/QuickImportAllMedia.ts
(function quickImportAllMedia() {
  const {
    wgCanonicalSpecialPageName,
    wgCurRevisionId
  } = mw.config.get();
  if (!(wgCurRevisionId || ["Prefixindex", "BrokenRedirects"].includes(wgCanonicalSpecialPageName || ""))) {
    return;
  }
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", "导入此页面所有文件", "t-import");
  if (!element) {
    return;
  }
  element.addEventListener("click", () => {
    void _asyncToGenerator(function* () {
      const fileNames = yield getAllImages();
      yield detectIfFileRedirect([...new Set(fileNames)], true);
    })().then(() => {
      const {
        wgPageName
      } = mw.config.get();
      refreshPage(wgPageName);
    });
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvY29yZS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9vcHRpb25zLmpzb24iLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9RdWlja0ltcG9ydEFsbE1lZGlhL1F1aWNrSW1wb3J0QWxsTWVkaWEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1aWNrSW1wb3J0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtBcGlRdWVyeUltYWdlSW5mb1BhcmFtc30gZnJvbSAndHlwZXMtbWVkaWF3aWtpLXJlbm92YXRlL2FwaV9wYXJhbXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IHJlZnJlc2hQYWdlID0gKHdnUGFnZU5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn5q2j5Zyo5Yi35paw6aG16Z2iJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGxvY2F0aW9uLnJlcGxhY2UobXcudXRpbC5nZXRVcmwod2dQYWdlTmFtZSkpO1xufTtcblxuY29uc3QgaW1wb3J0UGFnZSA9IGFzeW5jIChwYWdlTmFtZTogc3RyaW5nLCBpd3ByZWZpeDogc3RyaW5nLCBpc0ZpbGVOUzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg5a+85YWl6aG16Z2i5Lit77yaJHtwYWdlTmFtZX1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IHN1bW1hcnk6IHN0cmluZyA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdGlmIChpc0ZpbGVOUykge1xuXHRcdHN1bW1hcnkgKz0gJ++8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vSc7XG5cdH1cblxuXHRjb25zdCBwYXJhbXM6IEFwaUltcG9ydFBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdpbXBvcnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGFzc2lnbmtub3dudXNlcnM6IHRydWUsXG5cdFx0aW50ZXJ3aWtpcGFnZTogcGFnZU5hbWUsXG5cdFx0aW50ZXJ3aWtpcHJlZml4OiBpd3ByZWZpeCxcblx0XHRpbnRlcndpa2lzb3VyY2U6IGl3cHJlZml4IGFzIE5vbk51bGxhYmxlPEFwaUltcG9ydFBhcmFtc1snaW50ZXJ3aWtpc291cmNlJ10+LFxuXHRcdHN1bW1hcnk6IGDvvLske3N1bW1hcnl977y9YCxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlrozmiJDvvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOi/geenu+aWh+S7tuS4re+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB1cGxvYWRQYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmw6IHVybCA/PyBgaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpSZWRpcmVjdC9maWxlLyR7bXcudXRpbC5yYXd1cmxlbmNvZGUodGFyZ2V0KX1gLFxuXHRcdGFjdGlvbjogJ3VwbG9hZCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0ZmlsZW5hbWU6IHRhcmdldCxcblx0XHRjb21tZW50OiAn6Ieq5YW25LuW572R56uZ6L+B56e75paH5Lu2Jyxcblx0XHRpZ25vcmV3YXJuaW5nczogdHJ1ZSxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHVwbG9hZFBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDmlofku7bov4Hnp7vlrozmiJDvvJoke3RhcmdldH1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGFzeW5jIChwYWdlTmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBpc0ZpbGVOUyA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHBhZ2VOYW1lcyA9IGdlbmVyYXRlQXJyYXkocGFnZU5hbWVzKTtcblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IChwYWdlTmFtZXMubGVuZ3RoICsgNTApIC8gNTA7IGkrKykge1xuXHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRjb25zdCB0aXRsZXMgPSBwYWdlTmFtZXMuc2xpY2UoaSAqIDUwLCAoaSArIDEpICogNTApO1xuXHRcdFx0aWYgKHBhZ2VOYW1lcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBxdWVyeVBhcmFtczogQXBpUXVlcnlJbmZvUGFyYW1zICYgQXBpUXVlcnlJbWFnZUluZm9QYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogWydpbWFnZWluZm8nLCAnaW5mbyddLFxuXHRcdFx0XHRpaXByb3A6IFsndXJsJ10sXG5cdFx0XHRcdHRpdGxlcyxcblx0XHRcdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QocXVlcnlQYXJhbXMpO1xuXHRcdFx0aWYgKCFyZXNwb25zZVsncXVlcnknXSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiByZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRjb25zdCB0aXRsZSA9IHBhZ2UudGl0bGUgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdGlmICghcGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNGaWxlTlMpIHtcblx0XHRcdFx0XHRhd2FpdCBpbXBvcnRQYWdlKHRpdGxlLCAnY29tbW9ucycsIGlzRmlsZU5TKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBpbXBvcnRQYWdlKHRpdGxlLCAnemh3aWtpJywgaXNGaWxlTlMpO1xuXG5cdFx0XHRcdGlmIChpc0ZpbGVOUyAmJiAocGFnZS5rbm93biB8fCAocGFnZS5pbWFnZXJlcG9zaXRvcnkgJiYgcGFnZS5pbWFnZXJlcG9zaXRvcnkgIT09ICdsb2NhbCcpKSkge1xuXHRcdFx0XHRcdGF3YWl0IHVwbG9hZEZpbGUodGl0bGUsIHBhZ2UuaW1hZ2VpbmZvWzBdLnVybCBhcyBzdHJpbmcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0Y29uc3QgdG9zID0gW107XG5cblx0XHRcdFx0Zm9yIChjb25zdCB7dG99IG9mIHJlc3BvbnNlWydxdWVyeSddLnJlZGlyZWN0cyBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0dG9zW3Rvcy5sZW5ndGhdID0gdG87XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdCh0b3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjEuMVwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWlja0ltcG9ydEFsbE1lZGlhLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IGdldEFsbEltYWdlcyA9IGFzeW5jICgpID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOiOt+WPlui/geenu+ebruaghycsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lLCB3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCEod2dOYW1lc3BhY2VOdW1iZXIgPCAwKSkge1xuXHRcdGNvbnN0IHF1ZXJ5SW1hZ2VQYXJhbXM6IEFwaVF1ZXJ5SW1hZ2VzUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRwcm9wOiAnaW1hZ2VzJyxcblx0XHRcdHRpdGxlczogd2dQYWdlTmFtZSxcblx0XHRcdGltbGltaXQ6IDUwMDAsXG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChxdWVyeUltYWdlUGFyYW1zKTtcblxuXHRcdGZvciAoY29uc3QgaW1hZ2VJbmZvIG9mIHJlc3BvbnNlWydxdWVyeSddPy5wYWdlc1swXS5pbWFnZXMgYXMge25zOiBudW1iZXI7IHRpdGxlOiBzdHJpbmd9W10pIHtcblx0XHRcdGlmICghaW1hZ2VJbmZvIHx8ICFpbWFnZUluZm8udGl0bGUpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBpbWFnZUluZm8udGl0bGU7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgZmlsZUxpbmtFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhW2hyZWZePScvd2lraS9GaWxlOiddXCIpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBmaWxlTGlua0VsZW1lbnRzIGFzIHVua25vd24gYXMgSFRNTEFuY2hvckVsZW1lbnRbXSkge1xuXHRcdGNvbnN0IHtocmVmfSA9IGVsZW1lbnQ7XG5cblx0XHRpZiAoaHJlZikge1xuXHRcdFx0Y29uc3QgZmlsZU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoXG5cdFx0XHRcdGhyZWYucmVwbGFjZShgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH0vd2lraS9gLCAnJykucmVwbGFjZSgnRmlsZTpGaWxlOicsICcnKVxuXHRcdFx0KTtcblx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHRcdH1cblx0fVxuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn6I635Y+W6L+B56e755uu5qCH5a6M5oiQJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdHJldHVybiBbLi4ubmV3IFNldChmaWxlTmFtZXMpXTtcbn07XG5cbmV4cG9ydCB7Z2V0QWxsSW1hZ2VzfTtcbiIsICJpbXBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCByZWZyZXNoUGFnZX0gZnJvbSAnfi9RdWlja0ltcG9ydC9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRBbGxJbWFnZXN9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuKGZ1bmN0aW9uIHF1aWNrSW1wb3J0QWxsTWVkaWEoKTogdm9pZCB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSwgd2dDdXJSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKCEod2dDdXJSZXZpc2lvbklkIHx8IFsnUHJlZml4aW5kZXgnLCAnQnJva2VuUmVkaXJlY3RzJ10uaW5jbHVkZXMod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgfHwgJycpKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCAn5a+85YWl5q2k6aG16Z2i5omA5pyJ5paH5Lu2JywgJ3QtaW1wb3J0Jyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IGF3YWl0IGdldEFsbEltYWdlcygpO1xuXHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QoWy4uLm5ldyBTZXQoZmlsZU5hbWVzKV0sIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdFx0XHRyZWZyZXNoUGFnZSh3Z1BhZ2VOYW1lKTtcblx0XHR9KTtcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsZUFBQUMsT0FBaUNMLE9BQU8sQ0FBRTs7QUNEOUQsSUFBQU0scUJBQTRCSixRQUFBLGlCQUFBO0FBQzVCLElBQUFLLHFCQUF1QkwsUUFBQSxxQkFBQTtBQUV2QixJQUFJTSxtQkFBcUM7RUFDeENDLFdBQVdBLE1BQU07RUFBQztBQUNuQjtBQUVBLElBQU1DLGNBQWVDLGdCQUE2QjtBQUNqREgsbUJBQWlCQyxVQUFVO0FBQzNCLEdBQUEsR0FBQUYsbUJBQUFLLFVBQ0M7SUFDQ0MsTUFBTTtJQUNOQyxVQUFVO0VBQ1gsR0FDQSxNQUNEO0FBRUFDLFdBQVNDLFFBQVFDLEdBQUdDLEtBQUtDLE9BQU9SLFVBQVUsQ0FBQztBQUM1QztBQUVBLElBQU1TLGFBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBYSxXQUFPQyxVQUFrQkMsVUFBa0JDLFdBQW9CLE9BQXlCO0FBQzFHakIscUJBQWlCQyxVQUFVO0FBQzNCRCx3QkFBQSxHQUFtQkQsbUJBQUFLLFVBQ2xCO01BQ0NDLE1BQUEsU0FBQVIsT0FBZWtCLFFBQVE7TUFDdkJULFVBQVU7SUFDWCxHQUNBLE1BQ0Q7QUFFQSxRQUFJWSxVQUFr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QixjQUFjLGFBQWEsSUFBSSxlQUFlO0FBQ2hHLFFBQU1aLFVBQWdDakcsR0FBR0MsS0FBSzZHLGVBQWVGLFdBQVcsS0FBSyxhQUFhLFVBQVU7QUFDcEcsTUFBSSxDQUFDWCxTQUFTO0FBQ2I7RUFDRDtBQUVBQSxVQUFRYyxpQkFBaUIsU0FBUyxNQUFZO0FBQzdDLFNBQUExRyxrQkFBTSxhQUFZO0FBQ2pCLFlBQU00RSxZQUFBLE1BQTRCRixhQUFhO0FBQy9DLFlBQU05QyxxQkFBcUIsQ0FBQyxHQUFHLElBQUlzRSxJQUFJdEIsU0FBUyxDQUFDLEdBQUcsSUFBSTtJQUN6RCxDQUFBLEVBQUcsRUFBRStCLEtBQUssTUFBTTtBQUNmLFlBQU07UUFBQ3RIO01BQVUsSUFBSU0sR0FBR21GLE9BQU9DLElBQUk7QUFDbkMzRixrQkFBWUMsVUFBVTtJQUN2QixDQUFDO0VBQ0YsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInJlZnJlc2hQYWdlIiwgIndnUGFnZU5hbWUiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgImltcG9ydFBhZ2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlTmFtZSIsICJpd3ByZWZpeCIsICJpc0ZpbGVOUyIsICJzdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImFzc2lnbmtub3dudXNlcnMiLCAiaW50ZXJ3aWtpcGFnZSIsICJpbnRlcndpa2lwcmVmaXgiLCAiaW50ZXJ3aWtpc291cmNlIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAidXBsb2FkRmlsZSIsICJfcmVmMiIsICJ0YXJnZXQiLCAidXJsIiwgInVwbG9hZFBhcmFtcyIsICJyYXd1cmxlbmNvZGUiLCAiZmlsZW5hbWUiLCAiY29tbWVudCIsICJpZ25vcmV3YXJuaW5ncyIsICJfeDMiLCAiX3g0IiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgIl9yZWYzIiwgInBhZ2VOYW1lcyIsICJnZW5lcmF0ZUFycmF5IiwgInByb21pc2VzIiwgImkiLCAibGVuZ3RoIiwgInRpdGxlcyIsICJzbGljZSIsICJxdWVyeVBhcmFtcyIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiaWlwcm9wIiwgInJlZGlyZWN0cyIsICJyZXNwb25zZSIsICJwb3N0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJwYWdlcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJwYWdlIiwgInZhbHVlIiwgInRpdGxlIiwgIm1pc3NpbmciLCAia25vd24iLCAiaW1hZ2VyZXBvc2l0b3J5IiwgImltYWdlaW5mbyIsICJlcnIiLCAiZSIsICJmIiwgInRvcyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJ0byIsICJfaSIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJfeDUiLCAidmVyc2lvbjIiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFwaTIiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgInRvYXN0aWZ5SW5zdGFuY2UyIiwgImdldEFsbEltYWdlcyIsICJfcmVmNSIsICJmaWxlTmFtZXMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiY29uZmlnIiwgImdldCIsICJfcmVzcG9uc2UkcXVlcnkiLCAicXVlcnlJbWFnZVBhcmFtcyIsICJpbWxpbWl0IiwgIl9pdGVyYXRvcjMiLCAiaW1hZ2VzIiwgIl9zdGVwMyIsICJpbWFnZUluZm8iLCAiZmlsZUxpbmtFbGVtZW50cyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImVsZW1lbnQiLCAiaHJlZiIsICJmaWxlTmFtZSIsICJkZWNvZGVVUklDb21wb25lbnQiLCAicHJvdG9jb2wiLCAiaG9zdCIsICJTZXQiLCAicXVpY2tJbXBvcnRBbGxNZWRpYSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAiaW5jbHVkZXMiLCAicG9ydGxldElkIiwgInF1ZXJ5U2VsZWN0b3IiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJ0aGVuIl0KfQo=
