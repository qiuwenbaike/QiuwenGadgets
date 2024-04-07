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
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "imageinfo",
      titles: target,
      redirects: true
    };
    const {
      query
    } = yield api.get(params);
    if (query.pages[0].imagerepository !== "local") {
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
    }
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
      formatversion: "2",
      prop: ["imageinfo", "info"],
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
    } else if (query.pages[0].imagerepository !== "local") {
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
      void _asyncToGenerator(function* () {
        var _iterator3 = _createForOfIteratorHelper(new Set(fileNames)), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const fileName = _step3.value;
            yield importPage(fileName, "commons");
            yield importPage(fileName, "zhwiki");
            const queryParams = {
              action: "query",
              format: "json",
              prop: "info",
              titles: fileName
            };
            const response = yield api.get(queryParams);
            for (var _i = 0, _Object$entries = Object.entries(response["query"].pages); _i < _Object$entries.length; _i++) {
              const [, pageinfo] = _Object$entries[_i];
              if (pageinfo["missing"]) {
                yield detectIfFileRedirect(fileName);
              } else {
                yield importPage(fileName, "zhwiki");
                yield detectIfFileRedirect(fileName);
              }
            }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvb3B0aW9ucy5qc29uIiwgInNyYy9RdWlja0ltcG9ydEFsbE1lZGlhL21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWlja0ltcG9ydEFsbE1lZGlhL21vZHVsZXMvcXVpY2tJbXBvcnQudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUXVpY2tJbXBvcnQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxufTtcblxuY29uc3QgcmVmcmVzaFBhZ2UgPSAod2dQYWdlTmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfmraPlnKjliLfmlrDpobXpnaInLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybCh3Z1BhZ2VOYW1lKSk7XG59O1xuXG5jb25zdCBpbXBvcnRQYWdlID0gYXN5bmMgKHBhZ2VOYW1lOiBzdHJpbmcsIGl3cHJlZml4OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICflr7zlhaXpobXpnaLkuK0nLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0Y29uc3Qgc3VtbWFyeTogc3RyaW5nID1cblx0XHQn6aG16Z2i5paH5a2X5Y6f6K645Y+v77yaW1tjYy1ieS1zYTo0LjB8Q0MgQlktU0EgNC4wXV3vvJvkvZzogIXor7flj4Lop4HmnaXmupDpobXpnaLljoblj7LvvJvmlofku7bkvZzogIXor7flj4Lop4HmraTpobXpnaLlj4rmnaXmupDpobXpnaLorrDovb0nO1xuXG5cdGNvbnN0IHBhcmFtczogQXBpSW1wb3J0UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2ltcG9ydCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRpbnRlcndpa2lwYWdlOiBwYWdlTmFtZSxcblx0XHRpbnRlcndpa2lwcmVmaXg6IGl3cHJlZml4LFxuXHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXggYXMgTm9uTnVsbGFibGU8QXBpSW1wb3J0UGFyYW1zWydpbnRlcndpa2lzb3VyY2UnXT4sXG5cdFx0c3VtbWFyeTogYO+8uyR7c3VtbWFyeX3vvL1gLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+mhtemdouWvvOWFpeWujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbWFnZWluZm8nLFxuXHRcdHRpdGxlczogdGFyZ2V0LFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0fTtcblx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRpZiAocXVlcnkucGFnZXNbMF0uaW1hZ2VyZXBvc2l0b3J5ICE9PSAnbG9jYWwnKSB7XG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSBgaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpSZWRpcmVjdC9maWxlLyR7bXcudXRpbC5yYXd1cmxlbmNvZGUodGFyZ2V0KX1gO1xuXG5cdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6ICfov4Hnp7vmlofku7bkuK0nLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblxuXHRcdGNvbnN0IHVwbG9hZFBhcmFtczogQXBpVXBsb2FkUGFyYW1zID0ge1xuXHRcdFx0dXJsLFxuXHRcdFx0YWN0aW9uOiAndXBsb2FkJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0ZmlsZW5hbWU6IHRhcmdldCxcblx0XHRcdGNvbW1lbnQ6ICfoh6rlhbbku5bnvZHnq5nov4Hnp7vmlofku7YnLFxuXHRcdFx0aWdub3Jld2FybmluZ3M6IHRydWUsXG5cdFx0fTtcblx0XHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4odXBsb2FkUGFyYW1zKTtcblx0fVxufTtcblxuY29uc3QgZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6IFsnaW1hZ2VpbmZvJywgJ2luZm8nXSxcblx0XHR0aXRsZXM6IHRhcmdldCxcblx0XHRyZWRpcmVjdHM6IHRydWUsXG5cdH07XG5cdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0aWYgKHF1ZXJ5LnJlZGlyZWN0cykge1xuXHRcdGZvciAoY29uc3Qge3RvfSBvZiBxdWVyeS5yZWRpcmVjdHMgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0YXdhaXQgaW1wb3J0UGFnZSh0bywgJ3pod2lraScpO1xuXHRcdFx0YXdhaXQgdXBsb2FkRmlsZSh0byk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHF1ZXJ5LnBhZ2VzWzBdLmltYWdlcmVwb3NpdG9yeSAhPT0gJ2xvY2FsJykge1xuXHRcdGF3YWl0IHVwbG9hZEZpbGUodGFyZ2V0KTtcblx0fVxufTtcblxuZXhwb3J0IHtkZXRlY3RJZkZpbGVSZWRpcmVjdCwgaW1wb3J0UGFnZSwgcmVmcmVzaFBhZ2V9O1xuIiwgImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIGltcG9ydFBhZ2UsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvcXVpY2tJbXBvcnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vbW9kdWxlcy9hcGknO1xuXG4oYXN5bmMgZnVuY3Rpb24gcXVpY2tJbXBvcnRBbGxNZWRpYSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbWFnZXNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW1hZ2VzJyxcblx0XHR0aXRsZXM6IHdnUGFnZU5hbWUsXG5cdFx0aW1saW1pdDogNTAwMCxcblx0fTtcblxuXHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdGNvbnN0IHF1ZXJ5SW1hZ2VzOiB7bnM6IG51bWJlcjsgdGl0bGU6IHN0cmluZ31bXSA9IGRhdGFbJ3F1ZXJ5J10/LnBhZ2VzWzBdLmltYWdlcyA/PyBbXTtcblxuXHRmb3IgKGNvbnN0IGltYWdlSW5mbyBvZiBxdWVyeUltYWdlcykge1xuXHRcdGlmICghaW1hZ2VJbmZvIHx8ICFpbWFnZUluZm8udGl0bGUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBpbWFnZUluZm8udGl0bGU7XG5cdH1cblxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdGZvciAoY29uc3QgZmlsZU5hbWUgb2YgbmV3IFNldChmaWxlTmFtZXMpKSB7XG5cdFx0XHRcdGF3YWl0IGltcG9ydFBhZ2UoZmlsZU5hbWUsICdjb21tb25zJyk7XG5cdFx0XHRcdGF3YWl0IGltcG9ydFBhZ2UoZmlsZU5hbWUsICd6aHdpa2knKTtcblx0XHRcdFx0Y29uc3QgcXVlcnlQYXJhbXM6IEFwaVF1ZXJ5UGFyYW1zID0ge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdFx0dGl0bGVzOiBmaWxlTmFtZSxcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocXVlcnlQYXJhbXMpO1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxuXHRcdFx0XHRmb3IgKGNvbnN0IFssIHBhZ2VpbmZvXSBvZiBPYmplY3QuZW50cmllcyhyZXNwb25zZVsncXVlcnknXS5wYWdlcykpIHtcblx0XHRcdFx0XHRpZiAoKHBhZ2VpbmZvIGFzIFJlY29yZDxzdHJpbmcsIG5ldmVyPilbJ21pc3NpbmcnXSkge1xuXHRcdFx0XHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QoZmlsZU5hbWUpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhd2FpdCBpbXBvcnRQYWdlKGZpbGVOYW1lLCAnemh3aWtpJyk7XG5cdFx0XHRcdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSkoKS50aGVuKCgpID0+IHtcblx0XHRcdHJlZnJlc2hQYWdlKHdnUGFnZU5hbWUpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LFNBQVMsR0FBRztBQUNuRCxzQkFBTTNDLHFCQUFxQm9DLFFBQVE7Y0FDcEMsT0FBTztBQUNOLHNCQUFNeEUsV0FBV3dFLFVBQVUsUUFBUTtBQUNuQyxzQkFBTXBDLHFCQUFxQm9DLFFBQVE7Y0FDcEM7WUFDRDtVQUNEO1FBQUEsU0FBQTFCLEtBQUE7QUFBQXVCLHFCQUFBdEIsRUFBQUQsR0FBQTtRQUFBLFVBQUE7QUFBQXVCLHFCQUFBckIsRUFBQTtRQUFBO01BQ0QsQ0FBQSxFQUFHLEVBQUVnQyxLQUFLLE1BQU07QUFDZjFGLG9CQUFZQyxVQUFVO01BQ3ZCLENBQUM7SUFDRixDQUFDO0VBQ0YsQ0FBQTtBQUFBLFdBeERnQjBGLHNCQUFBO0FBQUEsV0FBQUMscUJBQUFsRSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUFnRTtBQUFBLEdBQUEsRUF3RGI7IiwKICAibmFtZXMiOiBbInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAicmVmcmVzaFBhZ2UiLCAid2dQYWdlTmFtZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAiaW1wb3J0UGFnZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2VOYW1lIiwgIml3cHJlZml4IiwgInN1bW1hcnkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiYXNzaWdua25vd251c2VycyIsICJpbnRlcndpa2lwYWdlIiwgImludGVyd2lraXByZWZpeCIsICJpbnRlcndpa2lzb3VyY2UiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJ1cGxvYWRGaWxlIiwgIl9yZWYyIiwgInRhcmdldCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgInJlZGlyZWN0cyIsICJxdWVyeSIsICJnZXQiLCAicGFnZXMiLCAiaW1hZ2VyZXBvc2l0b3J5IiwgInVybCIsICJyYXd1cmxlbmNvZGUiLCAidXBsb2FkUGFyYW1zIiwgImZpbGVuYW1lIiwgImNvbW1lbnQiLCAiaWdub3Jld2FybmluZ3MiLCAiX3gzIiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgIl9yZWYzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ0byIsICJ2YWx1ZSIsICJlcnIiLCAiZSIsICJmIiwgIl94NCIsICJfZGF0YSRxdWVyeSRwYWdlcyQwJGkiLCAiX2RhdGEkcXVlcnkiLCAicG9ydGxldElkIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZWxlbWVudCIsICJhZGRQb3J0bGV0TGluayIsICJjb25maWciLCAiZmlsZU5hbWVzIiwgImltbGltaXQiLCAiZGF0YSIsICJxdWVyeUltYWdlcyIsICJpbWFnZXMiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiaW1hZ2VJbmZvIiwgInRpdGxlIiwgImxlbmd0aCIsICJhZGRFdmVudExpc3RlbmVyIiwgIl9pdGVyYXRvcjMiLCAiU2V0IiwgIl9zdGVwMyIsICJmaWxlTmFtZSIsICJxdWVyeVBhcmFtcyIsICJyZXNwb25zZSIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAicGFnZWluZm8iLCAidGhlbiIsICJxdWlja0ltcG9ydEFsbE1lZGlhIiwgIl9xdWlja0ltcG9ydEFsbE1lZGlhIl0KfQo=
