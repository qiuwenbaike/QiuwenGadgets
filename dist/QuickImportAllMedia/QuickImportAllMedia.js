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
//! src/QuickImportAllMedia/options.json
var version = "2.0";
//! src/QuickImportAllMedia/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("QuickImport/".concat(version));
//! src/QuickImportAllMedia/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Toastify");
var getAllImages = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (wgPageName) {
    var _response$query;
    const fileNames = [];
    const queryImageParams = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "images",
      titles: wgPageName,
      imlimit: 5e3
    };
    const response = yield api.get(queryImageParams);
    var _iterator = _createForOfIteratorHelper((_response$query = response["query"]) === null || _response$query === void 0 ? void 0 : _response$query.pages[0].images), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const imageInfo = _step.value;
        if (!imageInfo || !imageInfo.title) {
          continue;
        }
        fileNames[fileNames.length] = imageInfo.title;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return [...new Set(fileNames)];
  });
  return function getAllImages2(_x) {
    return _ref.apply(this, arguments);
  };
}();
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
  var _ref2 = _asyncToGenerator(function* (pageName, iwprefix) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget2.toastify)({
      text: "导入页面中：".concat(pageName),
      duration: -1
    }, "info");
    const summary = "页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史；文件作者请参见此页面及来源页面记载";
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
  return function importPage2(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var uploadFile = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (target, url) {
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
  return function uploadFile2(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
var detectIfFileRedirect = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (pageNames) {
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
    var _iterator2 = _createForOfIteratorHelper(response["query"].pages), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const page = _step2.value;
        const title = page.title;
        if (page.missing) {
          yield importPage(title, "commons");
          yield importPage(title, "zhwiki");
        }
        if (page.pageid && !page.redirect && page.imagerepository !== "local") {
          yield uploadFile(title, page.imageinfo[0].url);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (response["query"].redirects) {
      const tos = [];
      var _iterator3 = _createForOfIteratorHelper(response["query"].redirects), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const {
            to
          } = _step3.value;
          tos[tos.length] = to;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      yield detectIfFileRedirect(tos);
    }
  });
  return function detectIfFileRedirect2(_x6) {
    return _ref4.apply(this, arguments);
  };
}();
//! src/QuickImportAllMedia/QuickImportAllMedia.ts
(function quickImportAllMedia() {
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", "导入此页面所有文件", "t-import");
  if (!element) {
    return;
  }
  const {
    wgArticleId
  } = mw.config.get();
  if (!wgArticleId) {
    return;
  }
  const {
    wgPageName
  } = mw.config.get();
  element.addEventListener("click", () => {
    void _asyncToGenerator(function* () {
      const fileNames = yield getAllImages(wgPageName);
      var _iterator4 = _createForOfIteratorHelper(new Set(fileNames)), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          const fileName = _step4.value;
          yield detectIfFileRedirect(fileName);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    })().then(() => {
      refreshPage(wgPageName);
    });
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvb3B0aW9ucy5qc29uIiwgInNyYy9RdWlja0ltcG9ydEFsbE1lZGlhL21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWlja0ltcG9ydEFsbE1lZGlhL21vZHVsZXMvY29yZS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9RdWlja0ltcG9ydEFsbE1lZGlhLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWlja0ltcG9ydC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgZ2V0QWxsSW1hZ2VzID0gYXN5bmMgKHdnUGFnZU5hbWU6IHN0cmluZykgPT4ge1xuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHF1ZXJ5SW1hZ2VQYXJhbXM6IEFwaVF1ZXJ5SW1hZ2VzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2ltYWdlcycsXG5cdFx0dGl0bGVzOiB3Z1BhZ2VOYW1lLFxuXHRcdGltbGltaXQ6IDUwMDAsXG5cdH07XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHF1ZXJ5SW1hZ2VQYXJhbXMpO1xuXG5cdGZvciAoY29uc3QgaW1hZ2VJbmZvIG9mIHJlc3BvbnNlWydxdWVyeSddPy5wYWdlc1swXS5pbWFnZXMgYXMge25zOiBudW1iZXI7IHRpdGxlOiBzdHJpbmd9W10pIHtcblx0XHRpZiAoIWltYWdlSW5mbyB8fCAhaW1hZ2VJbmZvLnRpdGxlKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gaW1hZ2VJbmZvLnRpdGxlO1xuXHR9XG5cblx0cmV0dXJuIFsuLi5uZXcgU2V0KGZpbGVOYW1lcyldO1xufTtcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCByZWZyZXNoUGFnZSA9ICh3Z1BhZ2VOYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOWIt+aWsOmhtemdoicsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKHdnUGFnZU5hbWUpKTtcbn07XG5cbmNvbnN0IGltcG9ydFBhZ2UgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZywgaXdwcmVmaXg6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOWvvOWFpemhtemdouS4re+8miR7cGFnZU5hbWV9YCxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGNvbnN0IHN1bW1hcnk6IHN0cmluZyA9XG5cdFx0J+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+y77yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29JztcblxuXHRjb25zdCBwYXJhbXM6IEFwaUltcG9ydFBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdpbXBvcnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGFzc2lnbmtub3dudXNlcnM6IHRydWUsXG5cdFx0aW50ZXJ3aWtpcGFnZTogcGFnZU5hbWUsXG5cdFx0aW50ZXJ3aWtpcHJlZml4OiBpd3ByZWZpeCxcblx0XHRpbnRlcndpa2lzb3VyY2U6IGl3cHJlZml4IGFzIE5vbk51bGxhYmxlPEFwaUltcG9ydFBhcmFtc1snaW50ZXJ3aWtpc291cmNlJ10+LFxuXHRcdHN1bW1hcnk6IGDvvLske3N1bW1hcnl977y9YCxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlrozmiJDvvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOi/geenu+aWh+S7tuS4re+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB1cGxvYWRQYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmw6IHVybCA/PyBgaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpSZWRpcmVjdC9maWxlLyR7bXcudXRpbC5yYXd1cmxlbmNvZGUodGFyZ2V0KX1gLFxuXHRcdGFjdGlvbjogJ3VwbG9hZCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0ZmlsZW5hbWU6IHRhcmdldCxcblx0XHRjb21tZW50OiAn6Ieq5YW25LuW572R56uZ6L+B56e75paH5Lu2Jyxcblx0XHRpZ25vcmV3YXJuaW5nczogdHJ1ZSxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHVwbG9hZFBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDmlofku7bov4Hnp7vlrozmiJDvvJoke3RhcmdldH1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGFzeW5jIChwYWdlTmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHF1ZXJ5UGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgJiBBcGlRdWVyeUltYWdlSW5mb1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6IFsnaW1hZ2VpbmZvJywgJ2luZm8nXSxcblx0XHRpaXByb3A6IFsndXJsJ10sXG5cdFx0dGl0bGVzOiBwYWdlTmFtZXMsXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocXVlcnlQYXJhbXMpO1xuXG5cdGZvciAoY29uc3QgcGFnZSBvZiByZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdGNvbnN0IHRpdGxlID0gcGFnZS50aXRsZSBhcyBzdHJpbmc7XG5cblx0XHRpZiAocGFnZS5taXNzaW5nKSB7XG5cdFx0XHRhd2FpdCBpbXBvcnRQYWdlKHRpdGxlLCAnY29tbW9ucycpO1xuXHRcdFx0YXdhaXQgaW1wb3J0UGFnZSh0aXRsZSwgJ3pod2lraScpO1xuXHRcdH1cblxuXHRcdGlmIChwYWdlLnBhZ2VpZCAmJiAhcGFnZS5yZWRpcmVjdCAmJiBwYWdlLmltYWdlcmVwb3NpdG9yeSAhPT0gJ2xvY2FsJykge1xuXHRcdFx0YXdhaXQgdXBsb2FkRmlsZSh0aXRsZSwgcGFnZS5pbWFnZWluZm9bMF0udXJsIGFzIHN0cmluZyk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHJlc3BvbnNlWydxdWVyeSddLnJlZGlyZWN0cykge1xuXHRcdGNvbnN0IHRvcyA9IFtdO1xuXG5cdFx0Zm9yIChjb25zdCB7dG99IG9mIHJlc3BvbnNlWydxdWVyeSddLnJlZGlyZWN0cyBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHR0b3NbdG9zLmxlbmd0aF0gPSB0bztcblx0XHR9XG5cblx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdCh0b3MpO1xuXHR9XG59O1xuXG5leHBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCBnZXRBbGxJbWFnZXMsIHJlZnJlc2hQYWdlfTtcbiIsICJpbXBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCBnZXRBbGxJbWFnZXMsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgJ+WvvOWFpeatpOmhtemdouaJgOacieaWh+S7ticsICd0LWltcG9ydCcpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dBcnRpY2xlSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoIXdnQXJ0aWNsZUlkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IGF3YWl0IGdldEFsbEltYWdlcyh3Z1BhZ2VOYW1lKTtcblx0XHRcdGZvciAoY29uc3QgZmlsZU5hbWUgb2YgbmV3IFNldChmaWxlTmFtZXMpKSB7XG5cdFx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KGZpbGVOYW1lKTtcblx0XHRcdH1cblx0XHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0cmVmcmVzaFBhZ2Uod2dQYWdlTmFtZSk7XG5cdFx0fSk7XG5cdH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLGVBQUFDLE9BQWlDTCxPQUFPLENBQUU7O0FDRjlELElBQUFNLHFCQUF1QkosUUFBQSxxQkFBQTtBQUV2QixJQUFNSyxlQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWUsV0FBT0MsWUFBdUI7QUFBQSxRQUFBQztBQUNsRCxVQUFNQyxZ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QUNsQyxJQUFJYyxJQUFJekIsU0FBUyxDQUFBLEdBQUE2RjtBQUFBLFVBQUE7QUFBeEMsYUFBQUQsV0FBQTdFLEVBQUEsR0FBQSxFQUFBOEUsU0FBQUQsV0FBQTVFLEVBQUEsR0FBQUMsUUFBMkM7QUFBQSxnQkFBaEM2RSxXQUFBRCxPQUFBMUU7QUFDVixnQkFBTTZDLHFCQUFxQjhCLFFBQVE7UUFDcEM7TUFBQSxTQUFBeEUsS0FBQTtBQUFBc0UsbUJBQUFyRSxFQUFBRCxHQUFBO01BQUEsVUFBQTtBQUFBc0UsbUJBQUFwRSxFQUFBO01BQUE7SUFDRCxDQUFBLEVBQUcsRUFBRXVFLEtBQUssTUFBTTtBQUNmaEUsa0JBQVlqQyxVQUFVO0lBQ3ZCLENBQUM7RUFDRixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRBbGxJbWFnZXMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ3Z1BhZ2VOYW1lIiwgIl9yZXNwb25zZSRxdWVyeSIsICJmaWxlTmFtZXMiLCAicXVlcnlJbWFnZVBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0aXRsZXMiLCAiaW1saW1pdCIsICJyZXNwb25zZSIsICJnZXQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInBhZ2VzIiwgImltYWdlcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJpbWFnZUluZm8iLCAidmFsdWUiLCAidGl0bGUiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiU2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJyZWZyZXNoUGFnZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAiaW1wb3J0UGFnZSIsICJfcmVmMiIsICJwYWdlTmFtZSIsICJpd3ByZWZpeCIsICJzdW1tYXJ5IiwgInBhcmFtcyIsICJhc3NpZ25rbm93bnVzZXJzIiwgImludGVyd2lraXBhZ2UiLCAiaW50ZXJ3aWtpcHJlZml4IiwgImludGVyd2lraXNvdXJjZSIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJfeDIiLCAiX3gzIiwgInVwbG9hZEZpbGUiLCAiX3JlZjMiLCAidGFyZ2V0IiwgInVybCIsICJ1cGxvYWRQYXJhbXMiLCAicmF3dXJsZW5jb2RlIiwgImZpbGVuYW1lIiwgImNvbW1lbnQiLCAiaWdub3Jld2FybmluZ3MiLCAiX3g0IiwgIl94NSIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJfcmVmNCIsICJwYWdlTmFtZXMiLCAicXVlcnlQYXJhbXMiLCAiaWlwcm9wIiwgInJlZGlyZWN0cyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJwYWdlIiwgIm1pc3NpbmciLCAicGFnZWlkIiwgInJlZGlyZWN0IiwgImltYWdlcmVwb3NpdG9yeSIsICJpbWFnZWluZm8iLCAidG9zIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInRvIiwgIl94NiIsICJxdWlja0ltcG9ydEFsbE1lZGlhIiwgInBvcnRsZXRJZCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVsZW1lbnQiLCAiYWRkUG9ydGxldExpbmsiLCAid2dBcnRpY2xlSWQiLCAiY29uZmlnIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiZmlsZU5hbWUiLCAidGhlbiJdCn0K
