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
      wgArticlePath,
      wgNamespaceNumber,
      wgPageName,
      wgScript
    } = mw.config.get();
    const articleRegex = new RegExp("".concat(wgArticlePath.replace("$1", ""), "(File:[^#]+)"));
    const scriptRegex = new RegExp("^".concat(wgScript, "\\?title=(File:[^#&]+)"));
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
    const fileLinkElements = document.querySelectorAll("a[href^='/wiki/File:'], a[href*='title=File:']");
    var _iterator4 = _createForOfIteratorHelper(fileLinkElements), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const element = _step4.value;
        const {
          href
        } = element;
        if (!href) {
          continue;
        }
        let fileName;
        if (articleRegex.test(href)) {
          const match = articleRegex.exec(href);
          fileName = match[1];
        } else if (scriptRegex.test(href)) {
          const match = scriptRegex.exec(href);
          fileName = match[1];
        } else {
          continue;
        }
        fileName = fileName.replace(/File:(File:|Image:)?/i, "File:");
        fileNames[fileNames.length] = fileName;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvY29yZS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9vcHRpb25zLmpzb24iLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9RdWlja0ltcG9ydEFsbE1lZGlhL1F1aWNrSW1wb3J0QWxsTWVkaWEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1aWNrSW1wb3J0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IHJlZnJlc2hQYWdlID0gKHdnUGFnZU5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn5q2j5Zyo5Yi35paw6aG16Z2iJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGxvY2F0aW9uLnJlcGxhY2UobXcudXRpbC5nZXRVcmwod2dQYWdlTmFtZSkpO1xufTtcblxuY29uc3QgaW1wb3J0UGFnZSA9IGFzeW5jIChwYWdlTmFtZTogc3RyaW5nLCBpd3ByZWZpeDogc3RyaW5nLCBpc0ZpbGVOUzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg5a+85YWl6aG16Z2i5Lit77yaJHtwYWdlTmFtZX1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IHN1bW1hcnk6IHN0cmluZyA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdGlmIChpc0ZpbGVOUykge1xuXHRcdHN1bW1hcnkgKz0gJ++8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vSc7XG5cdH1cblxuXHRjb25zdCBwYXJhbXM6IEFwaUltcG9ydFBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdpbXBvcnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGFzc2lnbmtub3dudXNlcnM6IHRydWUsXG5cdFx0aW50ZXJ3aWtpcGFnZTogcGFnZU5hbWUsXG5cdFx0aW50ZXJ3aWtpcHJlZml4OiBpd3ByZWZpeCxcblx0XHRpbnRlcndpa2lzb3VyY2U6IGl3cHJlZml4IGFzIE5vbk51bGxhYmxlPEFwaUltcG9ydFBhcmFtc1snaW50ZXJ3aWtpc291cmNlJ10+LFxuXHRcdHN1bW1hcnk6IGDvvLske3N1bW1hcnl977y9YCxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlrozmiJDvvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOi/geenu+aWh+S7tuS4re+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB1cGxvYWRQYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmw6IHVybCA/PyBgaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpSZWRpcmVjdC9maWxlLyR7bXcudXRpbC5yYXd1cmxlbmNvZGUodGFyZ2V0KX1gLFxuXHRcdGFjdGlvbjogJ3VwbG9hZCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0ZmlsZW5hbWU6IHRhcmdldCxcblx0XHRjb21tZW50OiAn6Ieq5YW25LuW572R56uZ6L+B56e75paH5Lu2Jyxcblx0XHRpZ25vcmV3YXJuaW5nczogdHJ1ZSxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHVwbG9hZFBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDmlofku7bov4Hnp7vlrozmiJDvvJoke3RhcmdldH1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGFzeW5jIChwYWdlTmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBpc0ZpbGVOUyA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHBhZ2VOYW1lcyA9IGdlbmVyYXRlQXJyYXkocGFnZU5hbWVzKTtcblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IChwYWdlTmFtZXMubGVuZ3RoICsgNTApIC8gNTA7IGkrKykge1xuXHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRjb25zdCB0aXRsZXMgPSBwYWdlTmFtZXMuc2xpY2UoaSAqIDUwLCAoaSArIDEpICogNTApO1xuXHRcdFx0aWYgKHBhZ2VOYW1lcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBxdWVyeVBhcmFtczogQXBpUXVlcnlJbmZvUGFyYW1zICYgQXBpUXVlcnlJbWFnZUluZm9QYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogWydpbWFnZWluZm8nLCAnaW5mbyddLFxuXHRcdFx0XHRpaXByb3A6IFsndXJsJ10sXG5cdFx0XHRcdHRpdGxlcyxcblx0XHRcdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QocXVlcnlQYXJhbXMpO1xuXHRcdFx0aWYgKCFyZXNwb25zZVsncXVlcnknXSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiByZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRjb25zdCB0aXRsZSA9IHBhZ2UudGl0bGUgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdGlmICghcGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNGaWxlTlMpIHtcblx0XHRcdFx0XHRhd2FpdCBpbXBvcnRQYWdlKHRpdGxlLCAnY29tbW9ucycsIGlzRmlsZU5TKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBpbXBvcnRQYWdlKHRpdGxlLCAnemh3aWtpJywgaXNGaWxlTlMpO1xuXG5cdFx0XHRcdGlmIChpc0ZpbGVOUyAmJiAocGFnZS5rbm93biB8fCAocGFnZS5pbWFnZXJlcG9zaXRvcnkgJiYgcGFnZS5pbWFnZXJlcG9zaXRvcnkgIT09ICdsb2NhbCcpKSkge1xuXHRcdFx0XHRcdGF3YWl0IHVwbG9hZEZpbGUodGl0bGUsIHBhZ2UuaW1hZ2VpbmZvWzBdLnVybCBhcyBzdHJpbmcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0Y29uc3QgdG9zID0gW107XG5cblx0XHRcdFx0Zm9yIChjb25zdCB7dG99IG9mIHJlc3BvbnNlWydxdWVyeSddLnJlZGlyZWN0cyBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0dG9zW3Rvcy5sZW5ndGhdID0gdG87XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdCh0b3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjEuMVwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWlja0ltcG9ydEFsbE1lZGlhLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IGdldEFsbEltYWdlcyA9IGFzeW5jICgpID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOiOt+WPlui/geenu+ebruaghycsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBhcnRpY2xlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7d2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKX0oRmlsZTpbXiNdKylgKTtcblx0Y29uc3Qgc2NyaXB0UmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3dnU2NyaXB0fVxcXFw/dGl0bGU9KEZpbGU6W14jJl0rKWApO1xuXG5cdGlmICghKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkpIHtcblx0XHRjb25zdCBxdWVyeUltYWdlUGFyYW1zOiBBcGlRdWVyeUltYWdlc1BhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0cHJvcDogJ2ltYWdlcycsXG5cdFx0XHR0aXRsZXM6IHdnUGFnZU5hbWUsXG5cdFx0XHRpbWxpbWl0OiA1MDAwLFxuXHRcdH07XG5cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocXVlcnlJbWFnZVBhcmFtcyk7XG5cblx0XHRmb3IgKGNvbnN0IGltYWdlSW5mbyBvZiByZXNwb25zZVsncXVlcnknXT8ucGFnZXNbMF0uaW1hZ2VzIGFzIHtuczogbnVtYmVyOyB0aXRsZTogc3RyaW5nfVtdKSB7XG5cdFx0XHRpZiAoIWltYWdlSW5mbyB8fCAhaW1hZ2VJbmZvLnRpdGxlKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gaW1hZ2VJbmZvLnRpdGxlO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGZpbGVMaW5rRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXSwgYVtocmVmKj0ndGl0bGU9RmlsZTonXVwiKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZmlsZUxpbmtFbGVtZW50cyBhcyB1bmtub3duIGFzIEhUTUxBbmNob3JFbGVtZW50W10pIHtcblx0XHRjb25zdCB7aHJlZn0gPSBlbGVtZW50O1xuXG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgZmlsZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYXJ0aWNsZVJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBhcnRpY2xlUmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2UgaWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoL0ZpbGU6KEZpbGU6fEltYWdlOik/L2ksICdGaWxlOicpO1xuXHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHR9XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfojrflj5bov4Hnp7vnm67moIflrozmiJAnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0cmV0dXJuIFsuLi5uZXcgU2V0KGZpbGVOYW1lcyldO1xufTtcblxuZXhwb3J0IHtnZXRBbGxJbWFnZXN9O1xuIiwgImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICd+L1F1aWNrSW1wb3J0L21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2dldEFsbEltYWdlc30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG4oZnVuY3Rpb24gcXVpY2tJbXBvcnRBbGxNZWRpYSgpOiB2b2lkIHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z0N1clJldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoISh3Z0N1clJldmlzaW9uSWQgfHwgWydQcmVmaXhpbmRleCcsICdCcm9rZW5SZWRpcmVjdHMnXS5pbmNsdWRlcyh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSB8fCAnJykpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gYXdhaXQgZ2V0QWxsSW1hZ2VzKCk7XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChbLi4ubmV3IFNldChmaWxlTmFtZXMpXSwgdHJ1ZSk7XG5cdFx0fSkoKS50aGVuKCgpID0+IHtcblx0XHRcdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0XHRcdHJlZnJlc2hQYWdlKHdnUGFnZU5hbWUpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsVUFBVzs7QUNBWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxlQUFBQyxPQUFpQ0wsT0FBTyxDQUFF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aUIsU0FBUyxNQUFZO0FBQzdDLFNBQUEvRyxrQkFBTSxhQUFZO0FBQ2pCLFlBQU00RSxZQUFBLE1BQTRCRixhQUFhO0FBQy9DLFlBQU05QyxxQkFBcUIsQ0FBQyxHQUFHLElBQUkyRSxJQUFJM0IsU0FBUyxDQUFDLEdBQUcsSUFBSTtJQUN6RCxDQUFBLEVBQUcsRUFBRW9DLEtBQUssTUFBTTtBQUNmLFlBQU07UUFBQzNIO01BQVUsSUFBSU0sR0FBR3FGLE9BQU9DLElBQUk7QUFDbkM3RixrQkFBWUMsVUFBVTtJQUN2QixDQUFDO0VBQ0YsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInJlZnJlc2hQYWdlIiwgIndnUGFnZU5hbWUiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgImltcG9ydFBhZ2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlTmFtZSIsICJpd3ByZWZpeCIsICJpc0ZpbGVOUyIsICJzdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImFzc2lnbmtub3dudXNlcnMiLCAiaW50ZXJ3aWtpcGFnZSIsICJpbnRlcndpa2lwcmVmaXgiLCAiaW50ZXJ3aWtpc291cmNlIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAidXBsb2FkRmlsZSIsICJfcmVmMiIsICJ0YXJnZXQiLCAidXJsIiwgInVwbG9hZFBhcmFtcyIsICJyYXd1cmxlbmNvZGUiLCAiZmlsZW5hbWUiLCAiY29tbWVudCIsICJpZ25vcmV3YXJuaW5ncyIsICJfeDMiLCAiX3g0IiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgIl9yZWYzIiwgInBhZ2VOYW1lcyIsICJnZW5lcmF0ZUFycmF5IiwgInByb21pc2VzIiwgImkiLCAibGVuZ3RoIiwgInRpdGxlcyIsICJzbGljZSIsICJxdWVyeVBhcmFtcyIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiaWlwcm9wIiwgInJlZGlyZWN0cyIsICJyZXNwb25zZSIsICJwb3N0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJwYWdlcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJwYWdlIiwgInZhbHVlIiwgInRpdGxlIiwgIm1pc3NpbmciLCAia25vd24iLCAiaW1hZ2VyZXBvc2l0b3J5IiwgImltYWdlaW5mbyIsICJlcnIiLCAiZSIsICJmIiwgInRvcyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJ0byIsICJfaSIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJfeDUiLCAidmVyc2lvbjIiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFwaTIiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgInRvYXN0aWZ5SW5zdGFuY2UyIiwgImdldEFsbEltYWdlcyIsICJfcmVmNSIsICJmaWxlTmFtZXMiLCAid2dBcnRpY2xlUGF0aCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1NjcmlwdCIsICJjb25maWciLCAiZ2V0IiwgImFydGljbGVSZWdleCIsICJSZWdFeHAiLCAic2NyaXB0UmVnZXgiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgInF1ZXJ5SW1hZ2VQYXJhbXMiLCAiaW1saW1pdCIsICJfaXRlcmF0b3IzIiwgImltYWdlcyIsICJfc3RlcDMiLCAiaW1hZ2VJbmZvIiwgImZpbGVMaW5rRWxlbWVudHMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJlbGVtZW50IiwgImhyZWYiLCAiZmlsZU5hbWUiLCAidGVzdCIsICJtYXRjaCIsICJleGVjIiwgIlNldCIsICJxdWlja0ltcG9ydEFsbE1lZGlhIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnQ3VyUmV2aXNpb25JZCIsICJpbmNsdWRlcyIsICJwb3J0bGV0SWQiLCAicXVlcnlTZWxlY3RvciIsICJhZGRQb3J0bGV0TGluayIsICJhZGRFdmVudExpc3RlbmVyIiwgInRoZW4iXQp9Cg==
