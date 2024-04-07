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
//! src/QuickImportAllMedia/modules/quickImportAllMedia.ts
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
      text: "导入页面中",
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
      text: "页面导入完成",
      duration: -1
    }, "success");
  });
  return function importPage2(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var uploadFile = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (target) {
    const url = "https://zh.wikipedia.org/wiki/Special:Redirect/file/".concat(mw.util.rawurlencode(target));
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget2.toastify)({
      text: "迁移文件中",
      duration: -1
    }, "info");
    const uploadParams = {
      url,
      action: "upload",
      format: "json",
      filename: target,
      comment: "自其他网站迁移文件",
      ignorewarnings: true
    };
    yield api.postWithEditToken(uploadParams);
  });
  return function uploadFile2(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var detectIfFileRedirect = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (pageName) {
    const queryParams = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: ["imageinfo", "info"],
      titles: pageName,
      redirects: true
    };
    const response = yield api.get(queryParams);
    if (response["query"].pages[0].missing) {
      yield importPage(pageName, "commons");
      yield importPage(pageName, "zhwiki");
    }
    if (response["query"].redirects) {
      var _iterator2 = _createForOfIteratorHelper(response["query"].redirects), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const {
            to
          } = _step2.value;
          yield detectIfFileRedirect(to);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } else if (response["query"].pages[0].imagerepository && response["query"].pages[0].imagerepository !== "local") {
      yield uploadFile(pageName);
    }
  });
  return function detectIfFileRedirect2(_x5) {
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
      var _iterator3 = _createForOfIteratorHelper(new Set(fileNames)), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const fileName = _step3.value;
          yield detectIfFileRedirect(fileName);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    })().then(() => {
      refreshPage(wgPageName);
    });
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvb3B0aW9ucy5qc29uIiwgInNyYy9RdWlja0ltcG9ydEFsbE1lZGlhL21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWlja0ltcG9ydEFsbE1lZGlhL21vZHVsZXMvcXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9RdWlja0ltcG9ydEFsbE1lZGlhLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWlja0ltcG9ydC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgZ2V0QWxsSW1hZ2VzID0gYXN5bmMgKHdnUGFnZU5hbWU6IHN0cmluZykgPT4ge1xuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHF1ZXJ5SW1hZ2VQYXJhbXM6IEFwaVF1ZXJ5SW1hZ2VzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2ltYWdlcycsXG5cdFx0dGl0bGVzOiB3Z1BhZ2VOYW1lLFxuXHRcdGltbGltaXQ6IDUwMDAsXG5cdH07XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHF1ZXJ5SW1hZ2VQYXJhbXMpO1xuXG5cdGZvciAoY29uc3QgaW1hZ2VJbmZvIG9mIHJlc3BvbnNlWydxdWVyeSddPy5wYWdlc1swXS5pbWFnZXMgYXMge25zOiBudW1iZXI7IHRpdGxlOiBzdHJpbmd9W10pIHtcblx0XHRpZiAoIWltYWdlSW5mbyB8fCAhaW1hZ2VJbmZvLnRpdGxlKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gaW1hZ2VJbmZvLnRpdGxlO1xuXHR9XG5cblx0cmV0dXJuIFsuLi5uZXcgU2V0KGZpbGVOYW1lcyldO1xufTtcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCByZWZyZXNoUGFnZSA9ICh3Z1BhZ2VOYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOWIt+aWsOmhtemdoicsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKHdnUGFnZU5hbWUpKTtcbn07XG5cbmNvbnN0IGltcG9ydFBhZ2UgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZywgaXdwcmVmaXg6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+WvvOWFpemhtemdouS4rScsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCBzdW1tYXJ5OiBzdHJpbmcgPVxuXHRcdCfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsu+8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vSc7XG5cblx0Y29uc3QgcGFyYW1zOiBBcGlJbXBvcnRQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAnaW1wb3J0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRhc3NpZ25rbm93bnVzZXJzOiB0cnVlLFxuXHRcdGludGVyd2lraXBhZ2U6IHBhZ2VOYW1lLFxuXHRcdGludGVyd2lraXByZWZpeDogaXdwcmVmaXgsXG5cdFx0aW50ZXJ3aWtpc291cmNlOiBpd3ByZWZpeCBhcyBOb25OdWxsYWJsZTxBcGlJbXBvcnRQYXJhbXNbJ2ludGVyd2lraXNvdXJjZSddPixcblx0XHRzdW1tYXJ5OiBg77y7JHtzdW1tYXJ5fe+8vWAsXG5cdH07XG5cdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn6aG16Z2i5a+85YWl5a6M5oiQJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xufTtcblxuY29uc3QgdXBsb2FkRmlsZSA9IGFzeW5jICh0YXJnZXQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB1cmw6IHN0cmluZyA9IGBodHRwczovL3poLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlJlZGlyZWN0L2ZpbGUvJHttdy51dGlsLnJhd3VybGVuY29kZSh0YXJnZXQpfWA7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfov4Hnp7vmlofku7bkuK0nLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0Y29uc3QgdXBsb2FkUGFyYW1zOiBBcGlVcGxvYWRQYXJhbXMgPSB7XG5cdFx0dXJsLFxuXHRcdGFjdGlvbjogJ3VwbG9hZCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0ZmlsZW5hbWU6IHRhcmdldCxcblx0XHRjb21tZW50OiAn6Ieq5YW25LuW572R56uZ6L+B56e75paH5Lu2Jyxcblx0XHRpZ25vcmV3YXJuaW5nczogdHJ1ZSxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHVwbG9hZFBhcmFtcyk7XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGFzeW5jIChwYWdlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHF1ZXJ5UGFyYW1zOiBBcGlRdWVyeVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6IFsnaW1hZ2VpbmZvJywgJ2luZm8nXSxcblx0XHR0aXRsZXM6IHBhZ2VOYW1lLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHF1ZXJ5UGFyYW1zKTtcblxuXHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0ubWlzc2luZykge1xuXHRcdGF3YWl0IGltcG9ydFBhZ2UocGFnZU5hbWUsICdjb21tb25zJyk7XG5cdFx0YXdhaXQgaW1wb3J0UGFnZShwYWdlTmFtZSwgJ3pod2lraScpO1xuXHR9XG5cblx0aWYgKHJlc3BvbnNlWydxdWVyeSddLnJlZGlyZWN0cykge1xuXHRcdGZvciAoY29uc3Qge3RvfSBvZiByZXNwb25zZVsncXVlcnknXS5yZWRpcmVjdHMgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QodG8pO1xuXHRcdH1cblx0fSBlbHNlIGlmIChyZXNwb25zZVsncXVlcnknXS5wYWdlc1swXS5pbWFnZXJlcG9zaXRvcnkgJiYgcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0uaW1hZ2VyZXBvc2l0b3J5ICE9PSAnbG9jYWwnKSB7XG5cdFx0YXdhaXQgdXBsb2FkRmlsZShwYWdlTmFtZSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIGdldEFsbEltYWdlcywgcmVmcmVzaFBhZ2V9O1xuIiwgImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIGdldEFsbEltYWdlcywgcmVmcmVzaFBhZ2V9IGZyb20gJy4vbW9kdWxlcy9xdWlja0ltcG9ydEFsbE1lZGlhJztcblxuKGZ1bmN0aW9uIHF1aWNrSW1wb3J0QWxsTWVkaWEoKTogdm9pZCB7XG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCAn5a+85YWl5q2k6aG16Z2i5omA5pyJ5paH5Lu2JywgJ3QtaW1wb3J0Jyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt3Z0FydGljbGVJZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICghd2dBcnRpY2xlSWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gYXdhaXQgZ2V0QWxsSW1hZ2VzKHdnUGFnZU5hbWUpO1xuXHRcdFx0Zm9yIChjb25zdCBmaWxlTmFtZSBvZiBuZXcgU2V0KGZpbGVOYW1lcykpIHtcblx0XHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QoZmlsZU5hbWUpO1xuXHRcdFx0fVxuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSh3Z1BhZ2VOYW1lKTtcblx0XHR9KTtcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsZUFBQUMsT0FBaUNMLE9BQU8sQ0FBRTs7QUNGOUQsSUFBQU0scUJBQXVCSixRQUFBLHFCQUFBO0FBRXZCLElBQU1LLGVBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBZSxXQUFPQyxZQUF1QjtBQUFBLFFBQUFDO0FBQ2xELFVBQU1DLFlBQXNCLENBQUE7QUFDNUIsVUFBTUMsbUJBQXlDO01BQzlDQyxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsZUFBZTtNQUNmQyxNQUFNO01BQ05DLFFBQVFSO01BQ1JTLFNBQVM7SUFDVjtBQUVBLFVBQU1DLFdBQUEsTUFBaUJqQixJQUFJa0IsSUFBSVIsZ0JBQWdCO0FBQUEsUUFBQVMsWUFBQUMsNEJBQUFaLGtCQUV2QlMsU0FBUyxPQUFPLE9BQUEsUUFBQVQsb0JBQUEsU0FBQSxTQUFoQkEsZ0JBQW1CYSxNQUFNLENBQUMsRUFBRUMsTUFBQSxHQUFBQztBQUFBLFFBQUE7QUFBcEQsV0FBQUosVUFBQUssRUFBQSxHQUFBLEVBQUFELFFBQUFKLFVBQUFNLEVBQUEsR0FBQUMsUUFBNkY7QUFBQSxjQUFsRkMsWUFBQUosTUFBQUs7QUFDVixZQUFJLENBQUNELGFBQWEsQ0FB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dkUsMkJBQ2xDLElBQUljLElBQUl6QixTQUFTLENBQUEsR0FBQW1GO0FBQUEsVUFBQTtBQUF4QyxhQUFBRCxXQUFBbkUsRUFBQSxHQUFBLEVBQUFvRSxTQUFBRCxXQUFBbEUsRUFBQSxHQUFBQyxRQUEyQztBQUFBLGdCQUFoQ21FLFdBQUFELE9BQUFoRTtBQUNWLGdCQUFNNEMscUJBQXFCcUIsUUFBUTtRQUNwQztNQUFBLFNBQUE5RCxLQUFBO0FBQUE0RCxtQkFBQTNELEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUE0RCxtQkFBQTFELEVBQUE7TUFBQTtJQUNELENBQUEsRUFBRyxFQUFFNkQsS0FBSyxNQUFNO0FBQ2Z0RCxrQkFBWWpDLFVBQVU7SUFDdkIsQ0FBQztFQUNGLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEFsbEltYWdlcyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIndnUGFnZU5hbWUiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgImZpbGVOYW1lcyIsICJxdWVyeUltYWdlUGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlcyIsICJpbWxpbWl0IiwgInJlc3BvbnNlIiwgImdldCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAicGFnZXMiLCAiaW1hZ2VzIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImltYWdlSW5mbyIsICJ2YWx1ZSIsICJ0aXRsZSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJTZXQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInJlZnJlc2hQYWdlIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iLCAicmVwbGFjZSIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJpbXBvcnRQYWdlIiwgIl9yZWYyIiwgInBhZ2VOYW1lIiwgIml3cHJlZml4IiwgInN1bW1hcnkiLCAicGFyYW1zIiwgImFzc2lnbmtub3dudXNlcnMiLCAiaW50ZXJ3aWtpcGFnZSIsICJpbnRlcndpa2lwcmVmaXgiLCAiaW50ZXJ3aWtpc291cmNlIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgIl94MiIsICJfeDMiLCAidXBsb2FkRmlsZSIsICJfcmVmMyIsICJ0YXJnZXQiLCAidXJsIiwgInJhd3VybGVuY29kZSIsICJ1cGxvYWRQYXJhbXMiLCAiZmlsZW5hbWUiLCAiY29tbWVudCIsICJpZ25vcmV3YXJuaW5ncyIsICJfeDQiLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAiX3JlZjQiLCAicXVlcnlQYXJhbXMiLCAicmVkaXJlY3RzIiwgIm1pc3NpbmciLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAidG8iLCAiaW1hZ2VyZXBvc2l0b3J5IiwgIl94NSIsICJxdWlja0ltcG9ydEFsbE1lZGlhIiwgInBvcnRsZXRJZCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVsZW1lbnQiLCAiYWRkUG9ydGxldExpbmsiLCAid2dBcnRpY2xlSWQiLCAiY29uZmlnIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiZmlsZU5hbWUiLCAidGhlbiJdCn0K
