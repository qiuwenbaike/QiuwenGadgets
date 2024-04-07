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
  var _ref2 = _asyncToGenerator(function* (pageName) {
    const url = "https://zh.wikipedia.org/wiki/Special:Redirect/file/".concat(mw.util.rawurlencode(pageName));
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget2.toastify)({
      text: "迁移文件中",
      duration: -1
    }, "info");
    const uploadParams = {
      url,
      action: "upload",
      format: "json",
      filename: pageName,
      comment: "自其他网站迁移文件",
      ignorewarnings: true
    };
    yield api.postWithEditToken(uploadParams);
    refreshPage(pageName);
  });
  return function uploadFile2(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
var detectIfFileRedirect = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (target) {
    const params = {
      action: "query",
      format: "json",
      prop: "info",
      titles: target,
      redirects: true
    };
    const {
      query
    } = yield api.get(params);
    if (query.redirects) {
      var _iterator = _createForOfIteratorHelper(query.redirects), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const {
            to
          } = _step.value;
          yield importPage(to, "zhwiki");
          yield uploadFile(to);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      yield uploadFile(target);
    }
  });
  return function detectIfFileRedirect2(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/QuickImportAllMedia/QuickImportAllMedia.ts
(function() {
  var _quickImportAllMedia = _asyncToGenerator(function* () {
    var _data$query$pages$0$i, _data$query;
    const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
    const element = mw.util.addPortletLink(portletId, "#", "导入文件", "t-import");
    if (!element) {
      return;
    }
    const {
      wgPageName
    } = mw.config.get();
    const fileNames = [];
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "images",
      titles: wgPageName
    };
    const data = yield api.get(params);
    const queryImages = (_data$query$pages$0$i = (_data$query = data["query"]) === null || _data$query === void 0 ? void 0 : _data$query.pages[0].images) !== null && _data$query$pages$0$i !== void 0 ? _data$query$pages$0$i : [];
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
    element.addEventListener("click", () => {
      var _iterator3 = _createForOfIteratorHelper(new Set(fileNames)), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const fileName = _step3.value;
          void importPage(fileName, "zhwiki").then(() => {
            const queryParams = {
              action: "query",
              format: "json",
              prop: "info",
              titles: fileName
            };
            void api.get(queryParams).then(/* @__PURE__ */ function() {
              var _ref4 = _asyncToGenerator(function* (response) {
                for (var _i = 0, _Object$entries = Object.entries(response["query"].pages); _i < _Object$entries.length; _i++) {
                  const [, pageinfo] = _Object$entries[_i];
                  if (pageinfo["missing"]) {
                    yield detectIfFileRedirect(fileName);
                  } else {
                    yield importPage(fileName, "zhwiki");
                    yield detectIfFileRedirect(fileName);
                  }
                }
              });
              return function(_x5) {
                return _ref4.apply(this, arguments);
              };
            }());
          });
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    });
  });
  function quickImportAllMedia() {
    return _quickImportAllMedia.apply(this, arguments);
  }
  return quickImportAllMedia;
})()();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvb3B0aW9ucy5qc29uIiwgInNyYy9RdWlja0ltcG9ydEFsbE1lZGlhL21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWlja0ltcG9ydEFsbE1lZGlhL21vZHVsZXMvcXVpY2tJbXBvcnQudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUXVpY2tJbXBvcnQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxufTtcblxuY29uc3QgcmVmcmVzaFBhZ2UgPSAod2dQYWdlTmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfmraPlnKjliLfmlrDpobXpnaInLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybCh3Z1BhZ2VOYW1lKSk7XG59O1xuXG5jb25zdCBpbXBvcnRQYWdlID0gYXN5bmMgKHBhZ2VOYW1lOiBzdHJpbmcsIGl3cHJlZml4OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICflr7zlhaXpobXpnaLkuK0nLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0Y29uc3Qgc3VtbWFyeTogc3RyaW5nID1cblx0XHQn6aG16Z2i5paH5a2X5Y6f6K645Y+v77yaW1tjYy1ieS1zYTo0LjB8Q0MgQlktU0EgNC4wXV3vvJvkvZzogIXor7flj4Lop4HmnaXmupDpobXpnaLljoblj7LvvJvmlofku7bkvZzogIXor7flj4Lop4HmraTpobXpnaLlj4rmnaXmupDpobXpnaLorrDovb0nO1xuXG5cdGNvbnN0IHBhcmFtczogQXBpSW1wb3J0UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2ltcG9ydCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRpbnRlcndpa2lwYWdlOiBwYWdlTmFtZSxcblx0XHRpbnRlcndpa2lwcmVmaXg6IGl3cHJlZml4LFxuXHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXggYXMgTm9uTnVsbGFibGU8QXBpSW1wb3J0UGFyYW1zWydpbnRlcndpa2lzb3VyY2UnXT4sXG5cdFx0c3VtbWFyeTogYO+8uyR7c3VtbWFyeX3vvL1gLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+mhtemdouWvvOWFpeWujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB1cmw6IHN0cmluZyA9IGBodHRwczovL3poLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlJlZGlyZWN0L2ZpbGUvJHttdy51dGlsLnJhd3VybGVuY29kZShwYWdlTmFtZSl9YDtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+i/geenu+aWh+S7tuS4rScsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB1cGxvYWRQYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmwsXG5cdFx0YWN0aW9uOiAndXBsb2FkJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmaWxlbmFtZTogcGFnZU5hbWUsXG5cdFx0Y29tbWVudDogJ+iHquWFtuS7lue9keermei/geenu+aWh+S7ticsXG5cdFx0aWdub3Jld2FybmluZ3M6IHRydWUsXG5cdH07XG5cdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih1cGxvYWRQYXJhbXMpO1xuXG5cdHJlZnJlc2hQYWdlKHBhZ2VOYW1lKTtcbn07XG5cbmNvbnN0IGRldGVjdElmRmlsZVJlZGlyZWN0ID0gYXN5bmMgKHRhcmdldDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHByb3A6ICdpbmZvJyxcblx0XHR0aXRsZXM6IHRhcmdldCxcblx0XHRyZWRpcmVjdHM6IHRydWUsXG5cdH07XG5cdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0aWYgKHF1ZXJ5LnJlZGlyZWN0cykge1xuXHRcdGZvciAoY29uc3Qge3RvfSBvZiBxdWVyeS5yZWRpcmVjdHMgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0YXdhaXQgaW1wb3J0UGFnZSh0bywgJ3pod2lraScpO1xuXHRcdFx0YXdhaXQgdXBsb2FkRmlsZSh0byk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGF3YWl0IHVwbG9hZEZpbGUodGFyZ2V0KTtcblx0fVxufTtcblxuZXhwb3J0IHtkZXRlY3RJZkZpbGVSZWRpcmVjdCwgaW1wb3J0UGFnZSwgcmVmcmVzaFBhZ2V9O1xuIiwgImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIGltcG9ydFBhZ2V9IGZyb20gJy4vbW9kdWxlcy9xdWlja0ltcG9ydCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5cbihhc3luYyBmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgJ+WvvOWFpeaWh+S7ticsICd0LWltcG9ydCcpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbWFnZXMnLFxuXHRcdHRpdGxlczogd2dQYWdlTmFtZSxcblx0fTtcblxuXHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdGNvbnN0IHF1ZXJ5SW1hZ2VzOiB7bnM6IG51bWJlcjsgdGl0bGU6IHN0cmluZ31bXSA9IGRhdGFbJ3F1ZXJ5J10/LnBhZ2VzWzBdLmltYWdlcyA/PyBbXTtcblxuXHRmb3IgKGNvbnN0IGltYWdlSW5mbyBvZiBxdWVyeUltYWdlcykge1xuXHRcdGlmICghaW1hZ2VJbmZvIHx8ICFpbWFnZUluZm8udGl0bGUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBpbWFnZUluZm8udGl0bGU7XG5cdH1cblxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdGZvciAoY29uc3QgZmlsZU5hbWUgb2YgbmV3IFNldChmaWxlTmFtZXMpKSB7XG5cdFx0XHR2b2lkIGltcG9ydFBhZ2UoZmlsZU5hbWUsICd6aHdpa2knKS50aGVuKCgpID0+IHtcblx0XHRcdFx0Y29uc3QgcXVlcnlQYXJhbXM6IEFwaVF1ZXJ5UGFyYW1zID0ge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdFx0dGl0bGVzOiBmaWxlTmFtZSxcblx0XHRcdFx0fTtcblxuXHRcdFx0XHR2b2lkIGFwaS5nZXQocXVlcnlQYXJhbXMpLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnRcblx0XHRcdFx0XHRmb3IgKGNvbnN0IFssIHBhZ2VpbmZvXSBvZiBPYmplY3QuZW50cmllcyhyZXNwb25zZVsncXVlcnknXS5wYWdlcykpIHtcblx0XHRcdFx0XHRcdGlmICgocGFnZWluZm8gYXMgUmVjb3JkPHN0cmluZywgbmV2ZXI+KVsnbWlzc2luZyddKSB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KGZpbGVOYW1lKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IGltcG9ydFBhZ2UoZmlsZU5hbWUsICd6aHdpa2knKTtcblx0XHRcdFx0XHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QoZmlsZU5hbWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLGVBQUFDLE9BQWlDTCxPQUFPLENBQUU7O0FDRjlELElBQUFNLHFCQUF1QkosUUFBQSxxQkFBQTtBQUV2QixJQUFJSyxtQkFBcUM7RUFDeENDLFdBQVdBLE1BQU07RUFBQztBQUNuQjtBQUVBLElBQU1DLGNBQWVDLGdCQUE2QjtBQUNqREgsbUJBQWlCQyxVQUFVO0FBQzNCLEdBQUEsR0FBQUYsbUJBQUFLLFVBQ0M7SUFDQ0MsTUFBTTtJQUNOQyxVQUFVO0VBQ1gsR0FDQSxNQUNEO0FBRUFDLFdBQVNDLFFBQVFDLEdBQUdDLEtBQUtDLE9BQU9SLFVBQVUsQ0FBQztBQUM1QztBQUVBLElBQU1TLGFBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBYSxXQUFPQyxVQUFrQkMsVUFBb0M7QUFDL0VoQixxQkFBaUJDLFVBQVU7QUFDM0JE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O0FBRWxELHlCQUFBQyxLQUFBLEdBQUFDLGtCQUEyQkMsT0FBT0MsUUFBUUosU0FBUyxPQUFPLEVBQUVmLEtBQUssR0FBQWdCLEtBQUFDLGdCQUFBWCxRQUFBVSxNQUFHO0FBQXBFLHdCQUFXLENBQUEsRUFBR0ksUUFBUSxJQUFBSCxnQkFBQUQsRUFBQTtBQUNyQixzQkFBS0ksU0FBbUMsU0FBUyxHQUFHO0FBQ25ELDBCQUFNcEQscUJBQXFCMkMsUUFBUTtrQkFDcEMsT0FBTztBQUNOLDBCQUFNdEUsV0FBV3NFLFVBQVUsUUFBUTtBQUNuQywwQkFBTTNDLHFCQUFxQjJDLFFBQVE7a0JBQ3BDO2dCQUNEO2NBQ0QsQ0FBQztBQUFBLHFCQUFBLFNBQUFVLEtBQUE7QUFBQSx1QkFBQVAsTUFBQXpELE1BQUEsTUFBQUMsU0FBQTtjQUFBO1lBQUEsRUFBQSxDQUFBO1VBQ0YsQ0FBQztRQUNGO01BQUEsU0FBQTBCLEtBQUE7QUFBQXdCLG1CQUFBdkIsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQXdCLG1CQUFBdEIsRUFBQTtNQUFBO0lBQ0QsQ0FBQztFQUNGLENBQUE7QUFBQSxXQXBEZ0JvQyxzQkFBQTtBQUFBLFdBQUFDLHFCQUFBbEUsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxTQUFBZ0U7QUFBQSxHQUFBLEVBb0RiOyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInJlZnJlc2hQYWdlIiwgIndnUGFnZU5hbWUiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgImltcG9ydFBhZ2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlTmFtZSIsICJpd3ByZWZpeCIsICJzdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImFzc2lnbmtub3dudXNlcnMiLCAiaW50ZXJ3aWtpcGFnZSIsICJpbnRlcndpa2lwcmVmaXgiLCAiaW50ZXJ3aWtpc291cmNlIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAidXBsb2FkRmlsZSIsICJfcmVmMiIsICJ1cmwiLCAicmF3dXJsZW5jb2RlIiwgInVwbG9hZFBhcmFtcyIsICJmaWxlbmFtZSIsICJjb21tZW50IiwgImlnbm9yZXdhcm5pbmdzIiwgIl94MyIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJfcmVmMyIsICJ0YXJnZXQiLCAicHJvcCIsICJ0aXRsZXMiLCAicmVkaXJlY3RzIiwgInF1ZXJ5IiwgImdldCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidG8iLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJfeDQiLCAiX2RhdGEkcXVlcnkkcGFnZXMkMCRpIiwgIl9kYXRhJHF1ZXJ5IiwgInBvcnRsZXRJZCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVsZW1lbnQiLCAiYWRkUG9ydGxldExpbmsiLCAiY29uZmlnIiwgImZpbGVOYW1lcyIsICJmb3JtYXR2ZXJzaW9uIiwgImRhdGEiLCAicXVlcnlJbWFnZXMiLCAicGFnZXMiLCAiaW1hZ2VzIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImltYWdlSW5mbyIsICJ0aXRsZSIsICJsZW5ndGgiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJfaXRlcmF0b3IzIiwgIlNldCIsICJfc3RlcDMiLCAiZmlsZU5hbWUiLCAidGhlbiIsICJxdWVyeVBhcmFtcyIsICJfcmVmNCIsICJyZXNwb25zZSIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAicGFnZWluZm8iLCAiX3g1IiwgInF1aWNrSW1wb3J0QWxsTWVkaWEiLCAiX3F1aWNrSW1wb3J0QWxsTWVkaWEiXQp9Cg==
