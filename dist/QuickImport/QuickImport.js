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
          yield importPage(to, "zhwiki", true);
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
  element.addEventListener("click", /* @__PURE__ */ _asyncToGenerator(function* () {
    const pageName = (redirectTextA === null || redirectTextA === void 0 ? void 0 : redirectTextA.textContent) || wgPageName;
    if (isFileNS && !hasMwNoarticletext) {
      yield importPage(pageName, iwprefix, isFileNS);
      const queryParams = {
        action: "query",
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
      refreshPage(wgPageName);
    }
  }));
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvcXVpY2tJbXBvcnQudHMiLCAic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWlja0ltcG9ydC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCByZWZyZXNoUGFnZSA9ICh3Z1BhZ2VOYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOWIt+aWsOmhtemdoicsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKHdnUGFnZU5hbWUpKTtcbn07XG5cbmNvbnN0IGltcG9ydFBhZ2UgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZywgaXdwcmVmaXg6IHN0cmluZywgaXNGaWxlTlM6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+WvvOWFpemhtemdouS4rScsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgc3VtbWFyeTogc3RyaW5nID0gJ+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+yJztcblx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0c3VtbWFyeSArPSAn77yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29Jztcblx0fVxuXG5cdGNvbnN0IHBhcmFtczogQXBpSW1wb3J0UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2ltcG9ydCcsXG5cdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRpbnRlcndpa2lwYWdlOiBwYWdlTmFtZSxcblx0XHRpbnRlcndpa2lwcmVmaXg6IGl3cHJlZml4LFxuXHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXgsXG5cdFx0c3VtbWFyeTogYO+8uyR7c3VtbWFyeX3vvL1gLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+mhtemdouWvvOWFpeWujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB1cmw6IHN0cmluZyA9IGBodHRwczovL3poLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlJlZGlyZWN0L2ZpbGUvJHttdy51dGlsLnJhd3VybGVuY29kZShwYWdlTmFtZSl9YDtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+i/geenu+aWh+S7tuS4rScsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB1cGxvYWRQYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmwsXG5cdFx0YWN0aW9uOiAndXBsb2FkJyxcblx0XHRmaWxlbmFtZTogcGFnZU5hbWUsXG5cdFx0Y29tbWVudDogJ+iHquWFtuS7lue9keermei/geenu+aWh+S7ticsXG5cdFx0aWdub3Jld2FybmluZ3M6IHRydWUsXG5cdH07XG5cdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih1cGxvYWRQYXJhbXMpO1xuXG5cdHJlZnJlc2hQYWdlKHBhZ2VOYW1lKTtcbn07XG5cbmNvbnN0IGRldGVjdElmRmlsZVJlZGlyZWN0ID0gYXN5bmMgKHRhcmdldDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6ICdpbmZvJyxcblx0XHR0aXRsZXM6IHRhcmdldCxcblx0XHRyZWRpcmVjdHM6IHRydWUsXG5cdH07XG5cdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0aWYgKHF1ZXJ5LnJlZGlyZWN0cykge1xuXHRcdGZvciAoY29uc3Qge3RvfSBvZiBxdWVyeS5yZWRpcmVjdHMgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0YXdhaXQgaW1wb3J0UGFnZSh0bywgJ3pod2lraScsIHRydWUpO1xuXHRcdFx0YXdhaXQgdXBsb2FkRmlsZSh0byk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGF3YWl0IHVwbG9hZEZpbGUodGFyZ2V0KTtcblx0fVxufTtcblxuZXhwb3J0IHtkZXRlY3RJZkZpbGVSZWRpcmVjdCwgaW1wb3J0UGFnZSwgcmVmcmVzaFBhZ2V9O1xuIiwgImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIGltcG9ydFBhZ2UsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvcXVpY2tJbXBvcnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vbW9kdWxlcy9hcGknO1xuXG4oZnVuY3Rpb24gcXVpY2tJbXBvcnQoKTogdm9pZCB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgW2NhVmlld0ZvcmVpZ25aaHdpa2ldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjYS12aWV3LWZvcmVpZ24gYVtocmVmKj0nemgud2lraXBlZGlhLm9yZyddXCIpO1xuXHRjb25zdCBbcmVkaXJlY3RUZXh0QV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVkaXJlY3RUZXh0IGEnKTtcblxuXHRjb25zdCBpc0ZpbGVOUzogYm9vbGVhbiA9IHdnTmFtZXNwYWNlTnVtYmVyID09PSA2O1xuXHRjb25zdCBoYXNNd05vYXJ0aWNsZXRleHQ6IGJvb2xlYW4gPSAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1ub2FydGljbGV0ZXh0Jyk7XG5cdGNvbnN0IGl3cHJlZml4OiBzdHJpbmcgPSBjYVZpZXdGb3JlaWduWmh3aWtpID8gJ3pod2lraScgOiAnY29tbW9ucyc7XG5cblx0Y29uc3QgbGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TICYmICFoYXNNd05vYXJ0aWNsZXRleHQgPyBpd3ByZWZpeCA6ICcnO1xuXHRjb25zdCBidXR0b25MYWJlbDogc3RyaW5nID0gcmVkaXJlY3RUZXh0QSA/ICfph43lrprlkJHnm67moIcnIDogJ+mhtemdoic7XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0cG9ydGxldElkLFxuXHRcdCcjJyxcblx0XHRg5a+85YWlJHtpc0ZpbGVOUyA/IChsYWJlbCA/IGDmlofku7bvvIgke2xhYmVsfe+8iWAgOiAn6aG16Z2iJykgOiBidXR0b25MYWJlbH1gLFxuXHRcdCd0LWltcG9ydCdcblx0KTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1taXN1c2VkLXByb21pc2VzXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IHJlZGlyZWN0VGV4dEE/LnRleHRDb250ZW50IHx8IHdnUGFnZU5hbWU7XG5cblx0XHRpZiAoaXNGaWxlTlMgJiYgIWhhc013Tm9hcnRpY2xldGV4dCkge1xuXHRcdFx0YXdhaXQgaW1wb3J0UGFnZShwYWdlTmFtZSwgaXdwcmVmaXgsIGlzRmlsZU5TKTtcblxuXHRcdFx0Y29uc3QgcXVlcnlQYXJhbXM6IEFwaVF1ZXJ5UGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0dGl0bGVzOiBwYWdlTmFtZSxcblx0XHRcdH07XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocXVlcnlQYXJhbXMpO1xuXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxuXHRcdFx0Zm9yIChjb25zdCBbLCBwYWdlaW5mb10gb2YgT2JqZWN0LmVudHJpZXMocmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpKSB7XG5cdFx0XHRcdGlmICgocGFnZWluZm8gYXMgUmVjb3JkPHN0cmluZywgbmV2ZXI+KVsnbWlzc2luZyddKSB7XG5cdFx0XHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QocGFnZU5hbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGF3YWl0IGltcG9ydFBhZ2UocGFnZU5hbWUsICd6aHdpa2knLCBpc0ZpbGVOUyk7XG5cdFx0XHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QocGFnZU5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF3YWl0IGltcG9ydFBhZ2UocGFnZU5hbWUsICd6aHdpa2knKTtcblx0XHRcdHJlZnJlc2hQYWdlKHdnUGFnZU5hbWUpO1xuXHRcdH1cblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsVUFBVzs7QUNBWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxlQUFBQyxPQUFpQ0wsT0FBTyxDQUFFOztBQ0Y5RCxJQUFBTSxxQkFBdUJKLFFBQUEscUJBQUE7QUFFdkIsSUFBSUssbUJBQXFDO0VBQ3hDQyxXQUFXQSxNQUFNO0VBQUM7QUFDbkI7QUFFQSxJQUFNQyxjQUFlQyxnQkFBNkI7QUFDakRILG1CQUFpQkMsVUFBVTtBQUMzQixHQUFBLEdBQUFGLG1CQUFBSyxVQUNDO0lBQ0NDLE1BQU07SUFDTkMsVUFBVTtFQUNYLEdB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QnhCLFFBQVE7UUFDcEMsT0FBTztBQUNOLGdCQUFNSCxXQUFXRyxVQUFVLFVBQVVFLFFBQVE7QUFDN0MsZ0JBQU1zQixxQkFBcUJ4QixRQUFRO1FBQ3BDO01BQ0Q7SUFDRCxPQUFPO0FBQ04sWUFBTUgsV0FBV0csVUFBVSxRQUFRO0FBQ25DYixrQkFBWUMsVUFBVTtJQUN2QjtFQUNELENBQUMsQ0FBQTtBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAicmVmcmVzaFBhZ2UiLCAid2dQYWdlTmFtZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAiaW1wb3J0UGFnZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2VOYW1lIiwgIml3cHJlZml4IiwgImlzRmlsZU5TIiwgInN1bW1hcnkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJhc3NpZ25rbm93bnVzZXJzIiwgImludGVyd2lraXBhZ2UiLCAiaW50ZXJ3aWtpcHJlZml4IiwgImludGVyd2lraXNvdXJjZSIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInVwbG9hZEZpbGUiLCAiX3JlZjIiLCAidXJsIiwgInJhd3VybGVuY29kZSIsICJ1cGxvYWRQYXJhbXMiLCAiZmlsZW5hbWUiLCAiY29tbWVudCIsICJpZ25vcmV3YXJuaW5ncyIsICJfeDMiLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAiX3JlZjMiLCAidGFyZ2V0IiwgInByb3AiLCAidGl0bGVzIiwgInJlZGlyZWN0cyIsICJxdWVyeSIsICJnZXQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInRvIiwgInZhbHVlIiwgImVyciIsICJlIiwgImYiLCAiX3g0IiwgInF1aWNrSW1wb3J0IiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImNvbmZpZyIsICJjYVZpZXdGb3JlaWduWmh3aWtpIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicmVkaXJlY3RUZXh0QSIsICJoYXNNd05vYXJ0aWNsZXRleHQiLCAicXVlcnlTZWxlY3RvciIsICJsYWJlbCIsICJidXR0b25MYWJlbCIsICJwb3J0bGV0SWQiLCAiZWxlbWVudCIsICJhZGRQb3J0bGV0TGluayIsICJhZGRFdmVudExpc3RlbmVyIiwgInRleHRDb250ZW50IiwgInF1ZXJ5UGFyYW1zIiwgInJlc3BvbnNlIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJwYWdlcyIsICJsZW5ndGgiLCAicGFnZWluZm8iXQp9Cg==
