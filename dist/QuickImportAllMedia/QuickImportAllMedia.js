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
      titles: wgPageName,
      imlimit: 5e3
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvb3B0aW9ucy5qc29uIiwgInNyYy9RdWlja0ltcG9ydEFsbE1lZGlhL21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWlja0ltcG9ydEFsbE1lZGlhL21vZHVsZXMvcXVpY2tJbXBvcnQudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUXVpY2tJbXBvcnQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxufTtcblxuY29uc3QgcmVmcmVzaFBhZ2UgPSAod2dQYWdlTmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfmraPlnKjliLfmlrDpobXpnaInLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybCh3Z1BhZ2VOYW1lKSk7XG59O1xuXG5jb25zdCBpbXBvcnRQYWdlID0gYXN5bmMgKHBhZ2VOYW1lOiBzdHJpbmcsIGl3cHJlZml4OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICflr7zlhaXpobXpnaLkuK0nLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0Y29uc3Qgc3VtbWFyeTogc3RyaW5nID1cblx0XHQn6aG16Z2i5paH5a2X5Y6f6K645Y+v77yaW1tjYy1ieS1zYTo0LjB8Q0MgQlktU0EgNC4wXV3vvJvkvZzogIXor7flj4Lop4HmnaXmupDpobXpnaLljoblj7LvvJvmlofku7bkvZzogIXor7flj4Lop4HmraTpobXpnaLlj4rmnaXmupDpobXpnaLorrDovb0nO1xuXG5cdGNvbnN0IHBhcmFtczogQXBpSW1wb3J0UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2ltcG9ydCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRpbnRlcndpa2lwYWdlOiBwYWdlTmFtZSxcblx0XHRpbnRlcndpa2lwcmVmaXg6IGl3cHJlZml4LFxuXHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXggYXMgTm9uTnVsbGFibGU8QXBpSW1wb3J0UGFyYW1zWydpbnRlcndpa2lzb3VyY2UnXT4sXG5cdFx0c3VtbWFyeTogYO+8uyR7c3VtbWFyeX3vvL1gLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+mhtemdouWvvOWFpeWujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB1cmw6IHN0cmluZyA9IGBodHRwczovL3poLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlJlZGlyZWN0L2ZpbGUvJHttdy51dGlsLnJhd3VybGVuY29kZShwYWdlTmFtZSl9YDtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+i/geenu+aWh+S7tuS4rScsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB1cGxvYWRQYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmwsXG5cdFx0YWN0aW9uOiAndXBsb2FkJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmaWxlbmFtZTogcGFnZU5hbWUsXG5cdFx0Y29tbWVudDogJ+iHquWFtuS7lue9keermei/geenu+aWh+S7ticsXG5cdFx0aWdub3Jld2FybmluZ3M6IHRydWUsXG5cdH07XG5cdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih1cGxvYWRQYXJhbXMpO1xuXG5cdHJlZnJlc2hQYWdlKHBhZ2VOYW1lKTtcbn07XG5cbmNvbnN0IGRldGVjdElmRmlsZVJlZGlyZWN0ID0gYXN5bmMgKHRhcmdldDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHByb3A6ICdpbmZvJyxcblx0XHR0aXRsZXM6IHRhcmdldCxcblx0XHRyZWRpcmVjdHM6IHRydWUsXG5cdH07XG5cdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0aWYgKHF1ZXJ5LnJlZGlyZWN0cykge1xuXHRcdGZvciAoY29uc3Qge3RvfSBvZiBxdWVyeS5yZWRpcmVjdHMgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0YXdhaXQgaW1wb3J0UGFnZSh0bywgJ3pod2lraScpO1xuXHRcdFx0YXdhaXQgdXBsb2FkRmlsZSh0byk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGF3YWl0IHVwbG9hZEZpbGUodGFyZ2V0KTtcblx0fVxufTtcblxuZXhwb3J0IHtkZXRlY3RJZkZpbGVSZWRpcmVjdCwgaW1wb3J0UGFnZSwgcmVmcmVzaFBhZ2V9O1xuIiwgImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIGltcG9ydFBhZ2V9IGZyb20gJy4vbW9kdWxlcy9xdWlja0ltcG9ydCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5cbihhc3luYyBmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgJ+WvvOWFpeaWh+S7ticsICd0LWltcG9ydCcpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUltYWdlc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbWFnZXMnLFxuXHRcdHRpdGxlczogd2dQYWdlTmFtZSxcblx0XHRpbWxpbWl0OiA1MDAwLFxuXHR9O1xuXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0Y29uc3QgcXVlcnlJbWFnZXM6IHtuczogbnVtYmVyOyB0aXRsZTogc3RyaW5nfVtdID0gZGF0YVsncXVlcnknXT8ucGFnZXNbMF0uaW1hZ2VzID8/IFtdO1xuXG5cdGZvciAoY29uc3QgaW1hZ2VJbmZvIG9mIHF1ZXJ5SW1hZ2VzKSB7XG5cdFx0aWYgKCFpbWFnZUluZm8gfHwgIWltYWdlSW5mby50aXRsZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGltYWdlSW5mby50aXRsZTtcblx0fVxuXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0Zm9yIChjb25zdCBmaWxlTmFtZSBvZiBuZXcgU2V0KGZpbGVOYW1lcykpIHtcblx0XHRcdHZvaWQgaW1wb3J0UGFnZShmaWxlTmFtZSwgJ3pod2lraScpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBxdWVyeVBhcmFtczogQXBpUXVlcnlQYXJhbXMgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0XHR0aXRsZXM6IGZpbGVOYW1lLFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHZvaWQgYXBpLmdldChxdWVyeVBhcmFtcykudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxuXHRcdFx0XHRcdGZvciAoY29uc3QgWywgcGFnZWluZm9dIG9mIE9iamVjdC5lbnRyaWVzKHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzKSkge1xuXHRcdFx0XHRcdFx0aWYgKChwYWdlaW5mbyBhcyBSZWNvcmQ8c3RyaW5nLCBuZXZlcj4pWydtaXNzaW5nJ10pIHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QoZmlsZU5hbWUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgaW1wb3J0UGFnZShmaWxlTmFtZSwgJ3pod2lraScpO1xuXHRcdFx0XHRcdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsZUFBQUMsT0FBaUNMLE9BQU8sQ0FBRTs7QUNGOUQsSUFBQU0scUJBQXVCSixRQUFBLHFCQUFBO0FBRXZCLElBQUlLLG1CQUFxQztFQUN4Q0MsV0FBV0EsTUFBTTtFQUFDO0FBQ25CO0FBRUEsSUFBTUMsY0FBZUMsZ0JBQTZCO0FBQ2pESCxtQkFBaUJDLFVBQVU7QUFDM0IsR0FBQSxHQUFBRixtQkFBQUssVUFDQztJQUNDQyxNQUFNO0lBQ05DLFVBQVU7RUFDWCxHQUNBLE1BQ0Q7QUFFQUMsV0FBU0MsUUFBUUMsR0FBR0MsS0FBS0MsT0FBT1IsVUFBVSxDQUFDO0FBQzVDO0FBRUEsSUFBTVMsYUFBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFhLFdBQU9DLFVBQWtCQyxVQUFvQztB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O0FBQUEsa0JBQUFFLFFBQUF4RSxrQkFBSyxXQUFPeUUsVUFBYTtBQUVsRCx5QkFBQUMsS0FBQSxHQUFBQyxrQkFBMkJDLE9BQU9DLFFBQVFKLFNBQVMsT0FBTyxFQUFFZixLQUFLLEdBQUFnQixLQUFBQyxnQkFBQVgsUUFBQVUsTUFBRztBQUFwRSx3QkFBVyxDQUFBLEVBQUdJLFFBQVEsSUFBQUgsZ0JBQUFELEVBQUE7QUFDckIsc0JBQUtJLFNBQW1DLFNBQVMsR0FBRztBQUNuRCwwQkFBTXJELHFCQUFxQjRDLFFBQVE7a0JBQ3BDLE9BQU87QUFDTiwwQkFBTXZFLFdBQVd1RSxVQUFVLFFBQVE7QUFDbkMsMEJBQU01QyxxQkFBcUI0QyxRQUFRO2tCQUNwQztnQkFDRDtjQUNELENBQUM7QUFBQSxxQkFBQSxTQUFBVSxLQUFBO0FBQUEsdUJBQUFQLE1BQUExRCxNQUFBLE1BQUFDLFNBQUE7Y0FBQTtZQUFBLEVBQUEsQ0FBQTtVQUNGLENBQUM7UUFDRjtNQUFBLFNBQUEwQixLQUFBO0FBQUF5QixtQkFBQXhCLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUF5QixtQkFBQXZCLEVBQUE7TUFBQTtJQUNELENBQUM7RUFDRixDQUFBO0FBQUEsV0FyRGdCcUMsc0JBQUE7QUFBQSxXQUFBQyxxQkFBQW5FLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQWlFO0FBQUEsR0FBQSxFQXFEYjsiLAogICJuYW1lcyI6IFsidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJyZWZyZXNoUGFnZSIsICJ3Z1BhZ2VOYW1lIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iLCAicmVwbGFjZSIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJpbXBvcnRQYWdlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFnZU5hbWUiLCAiaXdwcmVmaXgiLCAic3VtbWFyeSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJhc3NpZ25rbm93bnVzZXJzIiwgImludGVyd2lraXBhZ2UiLCAiaW50ZXJ3aWtpcHJlZml4IiwgImludGVyd2lraXNvdXJjZSIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInVwbG9hZEZpbGUiLCAiX3JlZjIiLCAidXJsIiwgInJhd3VybGVuY29kZSIsICJ1cGxvYWRQYXJhbXMiLCAiZmlsZW5hbWUiLCAiY29tbWVudCIsICJpZ25vcmV3YXJuaW5ncyIsICJfeDMiLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAiX3JlZjMiLCAidGFyZ2V0IiwgInByb3AiLCAidGl0bGVzIiwgInJlZGlyZWN0cyIsICJxdWVyeSIsICJnZXQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInRvIiwgInZhbHVlIiwgImVyciIsICJlIiwgImYiLCAiX3g0IiwgIl9kYXRhJHF1ZXJ5JHBhZ2VzJDAkaSIsICJfZGF0YSRxdWVyeSIsICJwb3J0bGV0SWQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJlbGVtZW50IiwgImFkZFBvcnRsZXRMaW5rIiwgImNvbmZpZyIsICJmaWxlTmFtZXMiLCAiZm9ybWF0dmVyc2lvbiIsICJpbWxpbWl0IiwgImRhdGEiLCAicXVlcnlJbWFnZXMiLCAicGFnZXMiLCAiaW1hZ2VzIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImltYWdlSW5mbyIsICJ0aXRsZSIsICJsZW5ndGgiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJfaXRlcmF0b3IzIiwgIlNldCIsICJfc3RlcDMiLCAiZmlsZU5hbWUiLCAidGhlbiIsICJxdWVyeVBhcmFtcyIsICJfcmVmNCIsICJyZXNwb25zZSIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAicGFnZWluZm8iLCAiX3g1IiwgInF1aWNrSW1wb3J0QWxsTWVkaWEiLCAiX3F1aWNrSW1wb3J0QWxsTWVkaWEiXQp9Cg==
