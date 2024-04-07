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
  var _ref3 = _asyncToGenerator(function* (titles, isFileNS = false) {
    if (!Array.isArray(titles)) {
      titles = (0, import_ext_gadget2.generateArray)(titles);
    }
    const promises = [];
    while (titles.length > 0) {
      promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
        const queryParams = {
          action: "query",
          format: "json",
          formatversion: "2",
          prop: ["imageinfo", "info"],
          iiprop: ["url"],
          titles: titles.splice(0, 50),
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
  var _ref5 = _asyncToGenerator(function* (wgPageName) {
    var _response$query;
    toastifyInstance2.hideToast();
    (0, import_ext_gadget5.toastify)({
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
  return function getAllImages2(_x6) {
    return _ref5.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvY29yZS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9vcHRpb25zLmpzb24iLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9RdWlja0ltcG9ydEFsbE1lZGlhL1F1aWNrSW1wb3J0QWxsTWVkaWEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1aWNrSW1wb3J0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtBcGlRdWVyeUltYWdlSW5mb1BhcmFtc30gZnJvbSAndHlwZXMtbWVkaWF3aWtpLXJlbm92YXRlL2FwaV9wYXJhbXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IHJlZnJlc2hQYWdlID0gKHdnUGFnZU5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn5q2j5Zyo5Yi35paw6aG16Z2iJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGxvY2F0aW9uLnJlcGxhY2UobXcudXRpbC5nZXRVcmwod2dQYWdlTmFtZSkpO1xufTtcblxuY29uc3QgaW1wb3J0UGFnZSA9IGFzeW5jIChwYWdlTmFtZTogc3RyaW5nLCBpd3ByZWZpeDogc3RyaW5nLCBpc0ZpbGVOUzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg5a+85YWl6aG16Z2i5Lit77yaJHtwYWdlTmFtZX1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IHN1bW1hcnk6IHN0cmluZyA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdGlmIChpc0ZpbGVOUykge1xuXHRcdHN1bW1hcnkgKz0gJ++8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vSc7XG5cdH1cblxuXHRjb25zdCBwYXJhbXM6IEFwaUltcG9ydFBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdpbXBvcnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGFzc2lnbmtub3dudXNlcnM6IHRydWUsXG5cdFx0aW50ZXJ3aWtpcGFnZTogcGFnZU5hbWUsXG5cdFx0aW50ZXJ3aWtpcHJlZml4OiBpd3ByZWZpeCxcblx0XHRpbnRlcndpa2lzb3VyY2U6IGl3cHJlZml4IGFzIE5vbk51bGxhYmxlPEFwaUltcG9ydFBhcmFtc1snaW50ZXJ3aWtpc291cmNlJ10+LFxuXHRcdHN1bW1hcnk6IGDvvLske3N1bW1hcnl977y9YCxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlrozmiJDvvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOi/geenu+aWh+S7tuS4re+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB1cGxvYWRQYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmw6IHVybCA/PyBgaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpSZWRpcmVjdC9maWxlLyR7bXcudXRpbC5yYXd1cmxlbmNvZGUodGFyZ2V0KX1gLFxuXHRcdGFjdGlvbjogJ3VwbG9hZCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0ZmlsZW5hbWU6IHRhcmdldCxcblx0XHRjb21tZW50OiAn6Ieq5YW25LuW572R56uZ6L+B56e75paH5Lu2Jyxcblx0XHRpZ25vcmV3YXJuaW5nczogdHJ1ZSxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHVwbG9hZFBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDmlofku7bov4Hnp7vlrozmiJDvvJoke3RhcmdldH1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBpc0ZpbGVOUyA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGlmICghQXJyYXkuaXNBcnJheSh0aXRsZXMpKSB7XG5cdFx0dGl0bGVzID0gZ2VuZXJhdGVBcnJheSh0aXRsZXMpO1xuXHR9XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0d2hpbGUgKHRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdGNvbnN0IHF1ZXJ5UGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgJiBBcGlRdWVyeUltYWdlSW5mb1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiBbJ2ltYWdlaW5mbycsICdpbmZvJ10sXG5cdFx0XHRcdGlpcHJvcDogWyd1cmwnXSxcblx0XHRcdFx0dGl0bGVzOiB0aXRsZXMuc3BsaWNlKDAsIDUwKSxcblx0XHRcdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QocXVlcnlQYXJhbXMpO1xuXG5cdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0Y29uc3QgdGl0bGUgPSBwYWdlLnRpdGxlIGFzIHN0cmluZztcblxuXHRcdFx0XHRpZiAoIXBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YXdhaXQgaW1wb3J0UGFnZSh0aXRsZSwgJ2NvbW1vbnMnLCBpc0ZpbGVOUyk7XG5cdFx0XHRcdGF3YWl0IGltcG9ydFBhZ2UodGl0bGUsICd6aHdpa2knLCBpc0ZpbGVOUyk7XG5cblx0XHRcdFx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0XHRcdFx0aWYgKCFwYWdlLmtub3duKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRhd2FpdCB1cGxvYWRGaWxlKHRpdGxlLCBwYWdlLmltYWdlaW5mb1swXS51cmwgYXMgc3RyaW5nKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzKSB7XG5cdFx0XHRcdGNvbnN0IHRvcyA9IFtdO1xuXG5cdFx0XHRcdGZvciAoY29uc3Qge3RvfSBvZiByZXNwb25zZVsncXVlcnknXS5yZWRpcmVjdHMgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdHRvc1t0b3MubGVuZ3RoXSA9IHRvO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QodG9zKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHR9XG59O1xuXG5leHBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCByZWZyZXNoUGFnZX07XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIxLjFcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUXVpY2tJbXBvcnRBbGxNZWRpYS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCBnZXRBbGxJbWFnZXMgPSBhc3luYyAod2dQYWdlTmFtZTogc3RyaW5nKSA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfmraPlnKjojrflj5bov4Hnp7vnm67moIcnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCBxdWVyeUltYWdlUGFyYW1zOiBBcGlRdWVyeUltYWdlc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbWFnZXMnLFxuXHRcdHRpdGxlczogd2dQYWdlTmFtZSxcblx0XHRpbWxpbWl0OiA1MDAwLFxuXHR9O1xuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChxdWVyeUltYWdlUGFyYW1zKTtcblxuXHRmb3IgKGNvbnN0IGltYWdlSW5mbyBvZiByZXNwb25zZVsncXVlcnknXT8ucGFnZXNbMF0uaW1hZ2VzIGFzIHtuczogbnVtYmVyOyB0aXRsZTogc3RyaW5nfVtdKSB7XG5cdFx0aWYgKCFpbWFnZUluZm8gfHwgIWltYWdlSW5mby50aXRsZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGltYWdlSW5mby50aXRsZTtcblx0fVxuXG5cdGNvbnN0IGZpbGVMaW5rRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZmlsZUxpbmtFbGVtZW50cyBhcyB1bmtub3duIGFzIEhUTUxBbmNob3JFbGVtZW50W10pIHtcblx0XHRjb25zdCB7aHJlZn0gPSBlbGVtZW50O1xuXG5cdFx0aWYgKGhyZWYpIHtcblx0XHRcdGNvbnN0IGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KFxuXHRcdFx0XHRocmVmLnJlcGxhY2UoYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9L3dpa2kvYCwgJycpLnJlcGxhY2UoJ0ZpbGU6RmlsZTonLCAnJylcblx0XHRcdCk7XG5cdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0XHR9XG5cdH1cblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+iOt+WPlui/geenu+ebruagh+WujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRyZXR1cm4gWy4uLm5ldyBTZXQoZmlsZU5hbWVzKV07XG59O1xuXG5leHBvcnQge2dldEFsbEltYWdlc307XG4iLCAiaW1wb3J0IHtkZXRlY3RJZkZpbGVSZWRpcmVjdCwgcmVmcmVzaFBhZ2V9IGZyb20gJ34vUXVpY2tJbXBvcnQvbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dBcnRpY2xlSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoIXdnQXJ0aWNsZUlkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IGF3YWl0IGdldEFsbEltYWdlcyh3Z1BhZ2VOYW1lKTtcblx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KFsuLi5uZXcgU2V0KGZpbGVOYW1lcyldLCB0cnVlKTtcblx0XHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0cmVmcmVzaFBhZ2Uod2dQYWdlTmFtZSk7XG5cdFx0fSk7XG5cdH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLGVBQUFDLE9BQWlDTCxPQUFPLENBQUU7O0FDRDlELElBQUFNLHFC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QTtBQUFBLFNBQUEsU0FwRE1ILGNBQUF1QixLQUFBO0FBQUEsV0FBQXRCLE1BQUEzRCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0NDSkwsU0FBU2lGLHNCQUE0QjtBQUNyQyxRQUFNO0lBQUNDO0VBQVcsSUFBSXZHLEdBQUd3RyxPQUFPcEIsSUFBSTtBQUNwQyxNQUFJLENBQUNtQixhQUFhO0FBQ2pCO0VBQ0Q7QUFFQSxRQUFNRSxZQUFtQ2YsU0FBU2dCLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEcsUUFBTVosVUFBZ0M5RixHQUFHQyxLQUFLMEcsZUFBZUYsV0FBVyxLQUFLLGFBQWEsVUFBVTtBQUNwRyxNQUFJLENBQUNYLFNBQVM7QUFDYjtFQUNEO0FBRUEsUUFBTTtJQUFDcEc7RUFBVSxJQUFJTSxHQUFHd0csT0FBT3BCLElBQUk7QUFFbkNVLFVBQVFjLGlCQUFpQixTQUFTLE1BQVk7QUFDN0MsU0FBQXZHLGtCQUFNLGFBQVk7QUFDakIsWUFBTTRFLFlBQUEsTUFBNEJILGFBQWFwRixVQUFVO0FBQ3pELFlBQU11QyxxQkFBcUIsQ0FBQyxHQUFHLElBQUltRSxJQUFJbkIsU0FBUyxDQUFDLEdBQUcsSUFBSTtJQUN6RCxDQUFBLEVBQUcsRUFBRTRCLEtBQUssTUFBTTtBQUNmcEgsa0JBQVlDLFVBQVU7SUFDdkIsQ0FBQztFQUNGLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJyZWZyZXNoUGFnZSIsICJ3Z1BhZ2VOYW1lIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iLCAicmVwbGFjZSIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJpbXBvcnRQYWdlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFnZU5hbWUiLCAiaXdwcmVmaXgiLCAiaXNGaWxlTlMiLCAic3VtbWFyeSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJhc3NpZ25rbm93bnVzZXJzIiwgImludGVyd2lraXBhZ2UiLCAiaW50ZXJ3aWtpcHJlZml4IiwgImludGVyd2lraXNvdXJjZSIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInVwbG9hZEZpbGUiLCAiX3JlZjIiLCAidGFyZ2V0IiwgInVybCIsICJ1cGxvYWRQYXJhbXMiLCAicmF3dXJsZW5jb2RlIiwgImZpbGVuYW1lIiwgImNvbW1lbnQiLCAiaWdub3Jld2FybmluZ3MiLCAiX3gzIiwgIl94NCIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJfcmVmMyIsICJ0aXRsZXMiLCAiQXJyYXkiLCAiaXNBcnJheSIsICJnZW5lcmF0ZUFycmF5IiwgInByb21pc2VzIiwgImxlbmd0aCIsICJxdWVyeVBhcmFtcyIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiaWlwcm9wIiwgInNwbGljZSIsICJyZWRpcmVjdHMiLCAicmVzcG9uc2UiLCAicG9zdCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAicGFnZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAicGFnZSIsICJ2YWx1ZSIsICJ0aXRsZSIsICJtaXNzaW5nIiwgImtub3duIiwgImltYWdlaW5mbyIsICJlcnIiLCAiZSIsICJmIiwgInRvcyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJ0byIsICJfaSIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJfeDUiLCAidmVyc2lvbjIiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFwaTIiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgInRvYXN0aWZ5SW5zdGFuY2UyIiwgImdldEFsbEltYWdlcyIsICJfcmVmNSIsICJfcmVzcG9uc2UkcXVlcnkiLCAiZmlsZU5hbWVzIiwgInF1ZXJ5SW1hZ2VQYXJhbXMiLCAiaW1saW1pdCIsICJnZXQiLCAiX2l0ZXJhdG9yMyIsICJpbWFnZXMiLCAiX3N0ZXAzIiwgImltYWdlSW5mbyIsICJmaWxlTGlua0VsZW1lbnRzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiZWxlbWVudCIsICJocmVmIiwgImZpbGVOYW1lIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJwcm90b2NvbCIsICJob3N0IiwgIlNldCIsICJfeDYiLCAicXVpY2tJbXBvcnRBbGxNZWRpYSIsICJ3Z0FydGljbGVJZCIsICJjb25maWciLCAicG9ydGxldElkIiwgInF1ZXJ5U2VsZWN0b3IiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJ0aGVuIl0KfQo=
