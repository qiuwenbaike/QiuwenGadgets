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
//! src/QuickImportAllMedia/modules/quickImport.ts
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
  var _ref = _asyncToGenerator(function* (pageName, iwprefix) {
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
  return function importPage2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var uploadFile = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (target) {
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
  return function uploadFile2(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
var detectIfFileRedirect = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (pageName) {
    const queryParams = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: ["imageinfo", "info"],
      titles: pageName,
      redirects: true
    };
    const response = yield api.get(queryParams);
    if (response["pages"][0].missing) {
      yield importPage(pageName, "commons");
      yield importPage(pageName, "zhwiki");
    }
    if (response["redirects"]) {
      var _iterator = _createForOfIteratorHelper(response["redirects"]), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const {
            to
          } = _step.value;
          yield detectIfFileRedirect(to);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else if (response["pages"][0].pageid && response["pages"][0].imagerepository !== "local") {
      yield uploadFile(pageName);
    }
  });
  return function detectIfFileRedirect2(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var getAllImages = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (wgPageName) {
    var _response$query$pages, _response$query;
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
    const queryImages = (_response$query$pages = (_response$query = response["query"]) === null || _response$query === void 0 ? void 0 : _response$query.pages[0].images) !== null && _response$query$pages !== void 0 ? _response$query$pages : [];
    var _iterator2 = _createForOfIteratorHelper(queryImages), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const imageInfo = _step2.value;
        if (!imageInfo || !imageInfo.title) {
          continue;
        }
        fileNames[fileNames.length] = imageInfo.title;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return [...new Set(fileNames)];
  });
  return function getAllImages2(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
//! src/QuickImportAllMedia/QuickImportAllMedia.ts
(function() {
  var _quickImportAllMedia = _asyncToGenerator(function* () {
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
    const fileNames = yield getAllImages(wgPageName);
    element.addEventListener("click", () => {
      void _asyncToGenerator(function* () {
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
  });
  function quickImportAllMedia() {
    return _quickImportAllMedia.apply(this, arguments);
  }
  return quickImportAllMedia;
})()();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvb3B0aW9ucy5qc29uIiwgInNyYy9RdWlja0ltcG9ydEFsbE1lZGlhL21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWlja0ltcG9ydEFsbE1lZGlhL21vZHVsZXMvcXVpY2tJbXBvcnQudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUXVpY2tJbXBvcnQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxufTtcblxuY29uc3QgcmVmcmVzaFBhZ2UgPSAod2dQYWdlTmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfmraPlnKjliLfmlrDpobXpnaInLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybCh3Z1BhZ2VOYW1lKSk7XG59O1xuXG5jb25zdCBpbXBvcnRQYWdlID0gYXN5bmMgKHBhZ2VOYW1lOiBzdHJpbmcsIGl3cHJlZml4OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICflr7zlhaXpobXpnaLkuK0nLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0Y29uc3Qgc3VtbWFyeTogc3RyaW5nID1cblx0XHQn6aG16Z2i5paH5a2X5Y6f6K645Y+v77yaW1tjYy1ieS1zYTo0LjB8Q0MgQlktU0EgNC4wXV3vvJvkvZzogIXor7flj4Lop4HmnaXmupDpobXpnaLljoblj7LvvJvmlofku7bkvZzogIXor7flj4Lop4HmraTpobXpnaLlj4rmnaXmupDpobXpnaLorrDovb0nO1xuXG5cdGNvbnN0IHBhcmFtczogQXBpSW1wb3J0UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2ltcG9ydCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRpbnRlcndpa2lwYWdlOiBwYWdlTmFtZSxcblx0XHRpbnRlcndpa2lwcmVmaXg6IGl3cHJlZml4LFxuXHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXggYXMgTm9uTnVsbGFibGU8QXBpSW1wb3J0UGFyYW1zWydpbnRlcndpa2lzb3VyY2UnXT4sXG5cdFx0c3VtbWFyeTogYO+8uyR7c3VtbWFyeX3vvL1gLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+mhtemdouWvvOWFpeWujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgdXJsOiBzdHJpbmcgPSBgaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpSZWRpcmVjdC9maWxlLyR7bXcudXRpbC5yYXd1cmxlbmNvZGUodGFyZ2V0KX1gO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn6L+B56e75paH5Lu25LitJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGNvbnN0IHVwbG9hZFBhcmFtczogQXBpVXBsb2FkUGFyYW1zID0ge1xuXHRcdHVybCxcblx0XHRhY3Rpb246ICd1cGxvYWQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZpbGVuYW1lOiB0YXJnZXQsXG5cdFx0Y29tbWVudDogJ+iHquWFtuS7lue9keermei/geenu+aWh+S7ticsXG5cdFx0aWdub3Jld2FybmluZ3M6IHRydWUsXG5cdH07XG5cdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih1cGxvYWRQYXJhbXMpO1xufTtcblxuY29uc3QgZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBxdWVyeVBhcmFtczogQXBpUXVlcnlQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiBbJ2ltYWdlaW5mbycsICdpbmZvJ10sXG5cdFx0dGl0bGVzOiBwYWdlTmFtZSxcblx0XHRyZWRpcmVjdHM6IHRydWUsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChxdWVyeVBhcmFtcyk7XG5cblx0aWYgKHJlc3BvbnNlWydwYWdlcyddWzBdLm1pc3NpbmcpIHtcblx0XHRhd2FpdCBpbXBvcnRQYWdlKHBhZ2VOYW1lLCAnY29tbW9ucycpO1xuXHRcdGF3YWl0IGltcG9ydFBhZ2UocGFnZU5hbWUsICd6aHdpa2knKTtcblx0fVxuXG5cdGlmIChyZXNwb25zZVsncmVkaXJlY3RzJ10pIHtcblx0XHRmb3IgKGNvbnN0IHt0b30gb2YgcmVzcG9uc2VbJ3JlZGlyZWN0cyddIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHRvKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAocmVzcG9uc2VbJ3BhZ2VzJ11bMF0ucGFnZWlkICYmIHJlc3BvbnNlWydwYWdlcyddWzBdLmltYWdlcmVwb3NpdG9yeSAhPT0gJ2xvY2FsJykge1xuXHRcdGF3YWl0IHVwbG9hZEZpbGUocGFnZU5hbWUpO1xuXHR9XG59O1xuXG5jb25zdCBnZXRBbGxJbWFnZXMgPSBhc3luYyAod2dQYWdlTmFtZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3QgcXVlcnlJbWFnZVBhcmFtczogQXBpUXVlcnlJbWFnZXNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW1hZ2VzJyxcblx0XHR0aXRsZXM6IHdnUGFnZU5hbWUsXG5cdFx0aW1saW1pdDogNTAwMCxcblx0fTtcblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocXVlcnlJbWFnZVBhcmFtcyk7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0Y29uc3QgcXVlcnlJbWFnZXM6IHtuczogbnVtYmVyOyB0aXRsZTogc3RyaW5nfVtdID0gcmVzcG9uc2VbJ3F1ZXJ5J10/LnBhZ2VzWzBdLmltYWdlcyA/PyBbXTtcblxuXHRmb3IgKGNvbnN0IGltYWdlSW5mbyBvZiBxdWVyeUltYWdlcykge1xuXHRcdGlmICghaW1hZ2VJbmZvIHx8ICFpbWFnZUluZm8udGl0bGUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBpbWFnZUluZm8udGl0bGU7XG5cdH1cblxuXHRyZXR1cm4gWy4uLm5ldyBTZXQoZmlsZU5hbWVzKV07XG59O1xuXG5leHBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCBnZXRBbGxJbWFnZXMsIHJlZnJlc2hQYWdlfTtcbiIsICJpbXBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCBnZXRBbGxJbWFnZXMsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvcXVpY2tJbXBvcnQnO1xuXG4oYXN5bmMgZnVuY3Rpb24gcXVpY2tJbXBvcnRBbGxNZWRpYSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3dnQXJ0aWNsZUlkfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKCF3Z0FydGljbGVJZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IGF3YWl0IGdldEFsbEltYWdlcyh3Z1BhZ2VOYW1lKTtcblxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZmlsZU5hbWUgb2YgbmV3IFNldChmaWxlTmFtZXMpKSB7XG5cdFx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KGZpbGVOYW1lKTtcblx0XHRcdH1cblx0XHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0cmVmcmVzaFBhZ2Uod2dQYWdlTmFtZSk7XG5cdFx0fSk7XG5cdH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLGVBQUFDLE9BQWlDTCxPQUFPLENBQUU7O0FDRjlELElBQUFNLHFCQUF1QkosUUFBQSxxQkFBQTtBQUV2QixJQUFJSyxtQkFBcUM7RUFDeENDLFdBQVdBLE1BQU07RUFBQztBQUNuQjtBQUVBLElBQU1DLGNBQWVDLGdCQUE2QjtBQUNqREgsbUJBQWlCQyxVQUFVO0FBQzNCLEdBQUEsR0FBQUYsbUJBQUFLLFVBQ0M7SUFDQ0MsTUFBTTtJQUNOQyxVQUFVO0VBQ1gsR0FDQSxNQUNEO0FBRUFDLFdBQVNDLFFBQVFDLEdBQUdDLEtBQUtDLE9BQU9SLFVBQVUsQ0FBQztBQUM1QztBQUVBLElBQU1TLGFBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBYSxXQUFPQyxVQUFrQkMsVUFBb0M7QUFDL0VoQixxQkFBaUJDLFVBQVU7QUFDM0JELHdCQUFBLEdBQW1CRCxtQkFBQUssVUFDbEI7TUFDQ0MsTUFBTTtNQUNOQyxVQUFVO0lBQ1gsR0FDQSxNQUNEO0FBRUEsVUFBTVcsVUFDTDtBQUVELFVB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RCxVQUFVO0FBRXpEaUYsWUFBUUksaUJBQWlCLFNBQVMsTUFBWTtBQUM3QyxXQUFBMUUsa0JBQU0sYUFBWTtBQUFBLFlBQUEyRSxhQUFBdEMsMkJBQ00sSUFBSTRCLElBQUlYLFNBQVMsQ0FBQSxHQUFBc0I7QUFBQSxZQUFBO0FBQXhDLGVBQUFELFdBQUFwQyxFQUFBLEdBQUEsRUFBQXFDLFNBQUFELFdBQUFuQyxFQUFBLEdBQUFDLFFBQTJDO0FBQUEsa0JBQWhDb0MsV0FBQUQsT0FBQWpDO0FBQ1Ysa0JBQU1qQixxQkFBcUJtRCxRQUFRO1VBQ3BDO1FBQUEsU0FBQWpDLEtBQUE7QUFBQStCLHFCQUFBOUIsRUFBQUQsR0FBQTtRQUFBLFVBQUE7QUFBQStCLHFCQUFBN0IsRUFBQTtRQUFBO01BQ0QsQ0FBQSxFQUFHLEVBQUVnQyxLQUFLLE1BQU07QUFDZjFGLG9CQUFZQyxVQUFVO01BQ3ZCLENBQUM7SUFDRixDQUFDO0VBQ0YsQ0FBQTtBQUFBLFdBeEJnQjBGLHNCQUFBO0FBQUEsV0FBQUMscUJBQUFsRSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUFnRTtBQUFBLEdBQUEsRUF3QmI7IiwKICAibmFtZXMiOiBbInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAicmVmcmVzaFBhZ2UiLCAid2dQYWdlTmFtZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAiaW1wb3J0UGFnZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2VOYW1lIiwgIml3cHJlZml4IiwgInN1bW1hcnkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiYXNzaWdua25vd251c2VycyIsICJpbnRlcndpa2lwYWdlIiwgImludGVyd2lraXByZWZpeCIsICJpbnRlcndpa2lzb3VyY2UiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJ1cGxvYWRGaWxlIiwgIl9yZWYyIiwgInRhcmdldCIsICJ1cmwiLCAicmF3dXJsZW5jb2RlIiwgInVwbG9hZFBhcmFtcyIsICJmaWxlbmFtZSIsICJjb21tZW50IiwgImlnbm9yZXdhcm5pbmdzIiwgIl94MyIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJfcmVmMyIsICJxdWVyeVBhcmFtcyIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgInJlZGlyZWN0cyIsICJyZXNwb25zZSIsICJnZXQiLCAibWlzc2luZyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidG8iLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJwYWdlaWQiLCAiaW1hZ2VyZXBvc2l0b3J5IiwgIl94NCIsICJnZXRBbGxJbWFnZXMiLCAiX3JlZjQiLCAiX3Jlc3BvbnNlJHF1ZXJ5JHBhZ2VzIiwgIl9yZXNwb25zZSRxdWVyeSIsICJmaWxlTmFtZXMiLCAicXVlcnlJbWFnZVBhcmFtcyIsICJpbWxpbWl0IiwgInF1ZXJ5SW1hZ2VzIiwgInBhZ2VzIiwgImltYWdlcyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJpbWFnZUluZm8iLCAidGl0bGUiLCAibGVuZ3RoIiwgIlNldCIsICJfeDUiLCAicG9ydGxldElkIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZWxlbWVudCIsICJhZGRQb3J0bGV0TGluayIsICJ3Z0FydGljbGVJZCIsICJjb25maWciLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJmaWxlTmFtZSIsICJ0aGVuIiwgInF1aWNrSW1wb3J0QWxsTWVkaWEiLCAiX3F1aWNrSW1wb3J0QWxsTWVkaWEiXQp9Cg==
