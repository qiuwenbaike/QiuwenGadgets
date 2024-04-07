/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickImport}
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

// dist/QuickImport/QuickImport.js
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
//! src/QuickImport/modules/quickImport.ts
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
      text: "导入页面中",
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
          yield importPage(to, "zhwiki", true);
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
//! src/QuickImport/QuickImport.ts
(function quickImport() {
  const {
    wgNamespaceNumber,
    wgPageName
  } = mw.config.get();
  const [caViewForeignZhwiki] = document.querySelectorAll("#ca-view-foreign a[href*='zh.wikipedia.org']");
  const [redirectTextA] = document.querySelectorAll(".redirectText a");
  const isFileNS = wgNamespaceNumber === 6;
  const hasMwNoarticletext = !!document.querySelector("#mw-noarticletext");
  const iwprefix = caViewForeignZhwiki ? "zhwiki" : "commons";
  const label = isFileNS && !hasMwNoarticletext ? iwprefix : "";
  const buttonLabel = redirectTextA ? "重定向目标" : "页面";
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", "导入".concat(isFileNS ? label ? "文件（".concat(label, "）") : "页面" : buttonLabel), "t-import");
  if (!element) {
    return;
  }
  element.addEventListener("click", () => {
    void _asyncToGenerator(function* () {
      const pageName = (redirectTextA === null || redirectTextA === void 0 ? void 0 : redirectTextA.textContent) || wgPageName;
      if (isFileNS && !hasMwNoarticletext) {
        yield importPage(pageName, iwprefix, isFileNS);
        const queryParams = {
          action: "query",
          format: "json",
          prop: "info",
          titles: pageName
        };
        const response = yield api.get(queryParams);
        for (var _i = 0, _Object$entries = Object.entries(response["query"].pages); _i < _Object$entries.length; _i++) {
          const [, pageinfo] = _Object$entries[_i];
          if (pageinfo["missing"]) {
            yield detectIfFileRedirect(pageName);
          } else {
            yield importPage(pageName, "zhwiki", isFileNS);
            yield detectIfFileRedirect(pageName);
          }
        }
      } else {
        yield importPage(pageName, "zhwiki");
      }
    })().then(() => {
      refreshPage(wgPageName);
    });
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvcXVpY2tJbXBvcnQudHMiLCAic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWlja0ltcG9ydC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCByZWZyZXNoUGFnZSA9ICh3Z1BhZ2VOYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOWIt+aWsOmhtemdoicsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKHdnUGFnZU5hbWUpKTtcbn07XG5cbmNvbnN0IGltcG9ydFBhZ2UgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZywgaXdwcmVmaXg6IHN0cmluZywgaXNGaWxlTlM6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+WvvOWFpemhtemdouS4rScsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgc3VtbWFyeTogc3RyaW5nID0gJ+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+yJztcblx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0c3VtbWFyeSArPSAn77yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29Jztcblx0fVxuXG5cdGNvbnN0IHBhcmFtczogQXBpSW1wb3J0UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2ltcG9ydCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRpbnRlcndpa2lwYWdlOiBwYWdlTmFtZSxcblx0XHRpbnRlcndpa2lwcmVmaXg6IGl3cHJlZml4LFxuXHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXggYXMgTm9uTnVsbGFibGU8QXBpSW1wb3J0UGFyYW1zWydpbnRlcndpa2lzb3VyY2UnXT4sXG5cdFx0c3VtbWFyeTogYO+8uyR7c3VtbWFyeX3vvL1gLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+mhtemdouWvvOWFpeWujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbWFnZWluZm8nLFxuXHRcdHRpdGxlczogdGFyZ2V0LFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0fTtcblx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRpZiAocXVlcnkucGFnZXNbMF0uaW1hZ2VyZXBvc2l0b3J5ICE9PSAnbG9jYWwnKSB7XG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSBgaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpSZWRpcmVjdC9maWxlLyR7bXcudXRpbC5yYXd1cmxlbmNvZGUodGFyZ2V0KX1gO1xuXG5cdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6ICfov4Hnp7vmlofku7bkuK0nLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblxuXHRcdGNvbnN0IHVwbG9hZFBhcmFtczogQXBpVXBsb2FkUGFyYW1zID0ge1xuXHRcdFx0dXJsLFxuXHRcdFx0YWN0aW9uOiAndXBsb2FkJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0ZmlsZW5hbWU6IHRhcmdldCxcblx0XHRcdGNvbW1lbnQ6ICfoh6rlhbbku5bnvZHnq5nov4Hnp7vmlofku7YnLFxuXHRcdFx0aWdub3Jld2FybmluZ3M6IHRydWUsXG5cdFx0fTtcblx0XHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4odXBsb2FkUGFyYW1zKTtcblx0fVxufTtcblxuY29uc3QgZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6IFsnaW1hZ2VpbmZvJywgJ2luZm8nXSxcblx0XHR0aXRsZXM6IHRhcmdldCxcblx0XHRyZWRpcmVjdHM6IHRydWUsXG5cdH07XG5cdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0aWYgKHF1ZXJ5LnJlZGlyZWN0cykge1xuXHRcdGZvciAoY29uc3Qge3RvfSBvZiBxdWVyeS5yZWRpcmVjdHMgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0YXdhaXQgaW1wb3J0UGFnZSh0bywgJ3pod2lraScsIHRydWUpO1xuXHRcdFx0YXdhaXQgdXBsb2FkRmlsZSh0byk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHF1ZXJ5LnBhZ2VzWzBdLmltYWdlcmVwb3NpdG9yeSAhPT0gJ2xvY2FsJykge1xuXHRcdGF3YWl0IHVwbG9hZEZpbGUodGFyZ2V0KTtcblx0fVxufTtcblxuZXhwb3J0IHtkZXRlY3RJZkZpbGVSZWRpcmVjdCwgaW1wb3J0UGFnZSwgcmVmcmVzaFBhZ2V9O1xuIiwgImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIGltcG9ydFBhZ2UsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvcXVpY2tJbXBvcnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vbW9kdWxlcy9hcGknO1xuXG4oZnVuY3Rpb24gcXVpY2tJbXBvcnQoKTogdm9pZCB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgW2NhVmlld0ZvcmVpZ25aaHdpa2ldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjYS12aWV3LWZvcmVpZ24gYVtocmVmKj0nemgud2lraXBlZGlhLm9yZyddXCIpO1xuXHRjb25zdCBbcmVkaXJlY3RUZXh0QV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVkaXJlY3RUZXh0IGEnKTtcblxuXHRjb25zdCBpc0ZpbGVOUzogYm9vbGVhbiA9IHdnTmFtZXNwYWNlTnVtYmVyID09PSA2O1xuXHRjb25zdCBoYXNNd05vYXJ0aWNsZXRleHQ6IGJvb2xlYW4gPSAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1ub2FydGljbGV0ZXh0Jyk7XG5cdGNvbnN0IGl3cHJlZml4OiBzdHJpbmcgPSBjYVZpZXdGb3JlaWduWmh3aWtpID8gJ3pod2lraScgOiAnY29tbW9ucyc7XG5cblx0Y29uc3QgbGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TICYmICFoYXNNd05vYXJ0aWNsZXRleHQgPyBpd3ByZWZpeCA6ICcnO1xuXHRjb25zdCBidXR0b25MYWJlbDogc3RyaW5nID0gcmVkaXJlY3RUZXh0QSA/ICfph43lrprlkJHnm67moIcnIDogJ+mhtemdoic7XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0cG9ydGxldElkLFxuXHRcdCcjJyxcblx0XHRg5a+85YWlJHtpc0ZpbGVOUyA/IChsYWJlbCA/IGDmlofku7bvvIgke2xhYmVsfe+8iWAgOiAn6aG16Z2iJykgOiBidXR0b25MYWJlbH1gLFxuXHRcdCd0LWltcG9ydCdcblx0KTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gcmVkaXJlY3RUZXh0QT8udGV4dENvbnRlbnQgfHwgd2dQYWdlTmFtZTtcblxuXHRcdFx0aWYgKGlzRmlsZU5TICYmICFoYXNNd05vYXJ0aWNsZXRleHQpIHtcblx0XHRcdFx0YXdhaXQgaW1wb3J0UGFnZShwYWdlTmFtZSwgaXdwcmVmaXgsIGlzRmlsZU5TKTtcblxuXHRcdFx0XHRjb25zdCBxdWVyeVBhcmFtczogQXBpUXVlcnlQYXJhbXMgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0XHR0aXRsZXM6IHBhZ2VOYW1lLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocXVlcnlQYXJhbXMpO1xuXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50XG5cdFx0XHRcdGZvciAoY29uc3QgWywgcGFnZWluZm9dIG9mIE9iamVjdC5lbnRyaWVzKHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzKSkge1xuXHRcdFx0XHRcdGlmICgocGFnZWluZm8gYXMgUmVjb3JkPHN0cmluZywgbmV2ZXI+KVsnbWlzc2luZyddKSB7XG5cdFx0XHRcdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChwYWdlTmFtZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGF3YWl0IGltcG9ydFBhZ2UocGFnZU5hbWUsICd6aHdpa2knLCBpc0ZpbGVOUyk7XG5cdFx0XHRcdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChwYWdlTmFtZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhd2FpdCBpbXBvcnRQYWdlKHBhZ2VOYW1lLCAnemh3aWtpJyk7XG5cdFx0XHR9XG5cdFx0fSkoKS50aGVuKCgpID0+IHtcblx0XHRcdHJlZnJlc2hQYWdlKHdnUGFnZU5hbWUpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLGVBQUFDLE9BQWlDTCxPQUFPLENBQUU7O0FDRjlELElBQUFNLHFCQUF1QkosUUFBQSxxQkFBQTtBQUV2QixJQUFJSyxtQkFBcUM7RUFDeENDLFdBQVdBLE1BQU07RUFBQztBQUNuQjtBQUVBLElBQU1DLGNBQWVDLGdCQUE2QjtBQUNqREgsbUJBQWlCQyxVQUFVO0FBQzNCLEdBQUEsR0FBQUYsbUJBQUFLLFVBQ0M7SUFDQ0MsTUFBTTtJQUNOQyxVQUFVO0VBQ1gsR0FDQSxNQUNEO0FBRUFDLFdBQVNDLFFBQVFDLEdBQUdDLEtBQUtDLE9BQU9SLFVBQVUsQ0FBQztBQUM1QztBQUVBLElBQU1TLGFBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBYSxXQUFPQyxVQUFrQkMsVUFBa0JDLFdBQW9CLE9BQXlCO0FBQzFHakIscUJBQWlCQyxVQUFVO0FBQzNCRCx3QkFBQSxHQUFtQkQsbUJBQUFLLFVBQ2xCO01BQ0NDLE1BQU07TUFDTkMsVUFBVTtJQUNYLEdBQ0EsTUFDRDtBQUVBLFFBQUlZLFVBQWtCO0FBQ3RCLFFBQUlELFVBQVU7QUFDYkMsaUJBQVc7SUFDWjtBQUVBLFVBQU1DLFNBQTBCO01BQy9CQyxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsa0JBQWtCO01BQ2xCQyxlQUFlUjtNQUNmUyxpQkFBaUJSO01BQ2pCUyxpQkFBaUJUO01B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QXFCbEMsUUFBUTtVQUNwQztRQUNEO01BQ0QsT0FBTztBQUNOLGNBQU1ILFdBQVdHLFVBQVUsUUFBUTtNQUNwQztJQUNELENBQUEsRUFBRyxFQUFFd0UsS0FBSyxNQUFNO0FBQ2ZyRixrQkFBWUMsVUFBVTtJQUN2QixDQUFDO0VBQ0YsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAicmVmcmVzaFBhZ2UiLCAid2dQYWdlTmFtZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAiaW1wb3J0UGFnZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2VOYW1lIiwgIml3cHJlZml4IiwgImlzRmlsZU5TIiwgInN1bW1hcnkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiYXNzaWdua25vd251c2VycyIsICJpbnRlcndpa2lwYWdlIiwgImludGVyd2lraXByZWZpeCIsICJpbnRlcndpa2lzb3VyY2UiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJ1cGxvYWRGaWxlIiwgIl9yZWYyIiwgInRhcmdldCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgInJlZGlyZWN0cyIsICJxdWVyeSIsICJnZXQiLCAicGFnZXMiLCAiaW1hZ2VyZXBvc2l0b3J5IiwgInVybCIsICJyYXd1cmxlbmNvZGUiLCAidXBsb2FkUGFyYW1zIiwgImZpbGVuYW1lIiwgImNvbW1lbnQiLCAiaWdub3Jld2FybmluZ3MiLCAiX3gzIiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgIl9yZWYzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ0byIsICJ2YWx1ZSIsICJlcnIiLCAiZSIsICJmIiwgIl94NCIsICJxdWlja0ltcG9ydCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJjb25maWciLCAiY2FWaWV3Rm9yZWlnblpod2lraSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInJlZGlyZWN0VGV4dEEiLCAiaGFzTXdOb2FydGljbGV0ZXh0IiwgInF1ZXJ5U2VsZWN0b3IiLCAibGFiZWwiLCAiYnV0dG9uTGFiZWwiLCAicG9ydGxldElkIiwgImVsZW1lbnQiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJ0ZXh0Q29udGVudCIsICJxdWVyeVBhcmFtcyIsICJyZXNwb25zZSIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibGVuZ3RoIiwgInBhZ2VpbmZvIiwgInRoZW4iXQp9Cg==
