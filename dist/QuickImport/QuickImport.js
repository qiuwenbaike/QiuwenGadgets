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
var importRedirect = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (redirects) {
    var _iterator = _createForOfIteratorHelper(redirects), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const {
          to
        } = _step.value;
        yield importPage("".concat(to), "zhwiki", true);
        yield detectIfFileRedirect("".concat(to));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  return function importRedirect2(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var detectIfFileRedirect = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (pageName) {
    const params = {
      action: "query",
      prop: "info",
      titles: pageName,
      redirects: true
    };
    const response = yield api.get(params);
    for (var _i = 0, _Object$entries = Object.entries(response["query"].pages); _i < _Object$entries.length; _i++) {
      const [, info] = _Object$entries[_i];
      if (info["redirect"] === "") {
        yield importRedirect(response["query"].redirects);
      } else {
        yield uploadFile(pageName);
      }
    }
  });
  return function detectIfFileRedirect2(_x5) {
    return _ref4.apply(this, arguments);
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
      for (var _i2 = 0, _Object$entries2 = Object.entries(response["query"].pages); _i2 < _Object$entries2.length; _i2++) {
        const [, pageinfo] = _Object$entries2[_i2];
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvcXVpY2tJbXBvcnQudHMiLCAic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWlja0ltcG9ydC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCByZWZyZXNoUGFnZSA9ICh3Z1BhZ2VOYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOWIt+aWsOmhtemdoicsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKHdnUGFnZU5hbWUpKTtcbn07XG5cbmNvbnN0IGltcG9ydFBhZ2UgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZywgaXdwcmVmaXg6IHN0cmluZywgaXNGaWxlTlM6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+WvvOWFpemhtemdouS4rScsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgc3VtbWFyeTogc3RyaW5nID0gJ+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+yJztcblx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0c3VtbWFyeSArPSAn77yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29Jztcblx0fVxuXG5cdGNvbnN0IHBhcmFtczogQXBpSW1wb3J0UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2ltcG9ydCcsXG5cdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRpbnRlcndpa2lwYWdlOiBwYWdlTmFtZSxcblx0XHRpbnRlcndpa2lwcmVmaXg6IGl3cHJlZml4LFxuXHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXgsXG5cdFx0c3VtbWFyeTogYO+8uyR7c3VtbWFyeX3vvL1gLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+mhtemdouWvvOWFpeWujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB1cmw6IHN0cmluZyA9IGBodHRwczovL3poLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlJlZGlyZWN0L2ZpbGUvJHttdy51dGlsLnJhd3VybGVuY29kZShwYWdlTmFtZSl9YDtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+i/geenu+aWh+S7tuS4rScsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB1cGxvYWRQYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmwsXG5cdFx0YWN0aW9uOiAndXBsb2FkJyxcblx0XHRmaWxlbmFtZTogcGFnZU5hbWUsXG5cdFx0Y29tbWVudDogJ+iHquWFtuS7lue9keermei/geenu+aWh+S7ticsXG5cdFx0aWdub3Jld2FybmluZ3M6IHRydWUsXG5cdH07XG5cdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih1cGxvYWRQYXJhbXMpO1xuXG5cdHJlZnJlc2hQYWdlKHBhZ2VOYW1lKTtcbn07XG5cbmNvbnN0IGltcG9ydFJlZGlyZWN0ID0gYXN5bmMgKHJlZGlyZWN0czoge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkgPT4ge1xuXHRmb3IgKGNvbnN0IHt0b30gb2YgcmVkaXJlY3RzIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRhd2FpdCBpbXBvcnRQYWdlKGAke3RvfWAsICd6aHdpa2knLCB0cnVlKTtcblx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChgJHt0b31gKTtcblx0fVxufTtcblxuY29uc3QgZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRwcm9wOiAnaW5mbycsXG5cdFx0dGl0bGVzOiBwYWdlTmFtZSxcblx0XHRyZWRpcmVjdHM6IHRydWUsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50XG5cdGZvciAoY29uc3QgWywgaW5mb10gb2YgT2JqZWN0LmVudHJpZXMocmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpKSB7XG5cdFx0aWYgKChpbmZvIGFzIFJlY29yZDxzdHJpbmcsIG5ldmVyPilbJ3JlZGlyZWN0J10gPT09ICcnKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxuXHRcdFx0YXdhaXQgaW1wb3J0UmVkaXJlY3QocmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXdhaXQgdXBsb2FkRmlsZShwYWdlTmFtZSk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCBpbXBvcnRQYWdlLCByZWZyZXNoUGFnZX07XG4iLCAiaW1wb3J0IHtkZXRlY3RJZkZpbGVSZWRpcmVjdCwgaW1wb3J0UGFnZSwgcmVmcmVzaFBhZ2V9IGZyb20gJy4vbW9kdWxlcy9xdWlja0ltcG9ydCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydCgpOiB2b2lkIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBbY2FWaWV3Rm9yZWlnblpod2lraV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NhLXZpZXctZm9yZWlnbiBhW2hyZWYqPSd6aC53aWtpcGVkaWEub3JnJ11cIik7XG5cdGNvbnN0IFtyZWRpcmVjdFRleHRBXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWRpcmVjdFRleHQgYScpO1xuXG5cdGNvbnN0IGlzRmlsZU5TOiBib29sZWFuID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDY7XG5cdGNvbnN0IGhhc013Tm9hcnRpY2xldGV4dDogYm9vbGVhbiA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKTtcblx0Y29uc3QgaXdwcmVmaXg6IHN0cmluZyA9IGNhVmlld0ZvcmVpZ25aaHdpa2kgPyAnemh3aWtpJyA6ICdjb21tb25zJztcblxuXHRjb25zdCBsYWJlbDogc3RyaW5nID0gaXNGaWxlTlMgJiYgIWhhc013Tm9hcnRpY2xldGV4dCA/IGl3cHJlZml4IDogJyc7XG5cdGNvbnN0IGJ1dHRvbkxhYmVsOiBzdHJpbmcgPSByZWRpcmVjdFRleHRBID8gJ+mHjeWumuWQkeebruaghycgOiAn6aG16Z2iJztcblxuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRwb3J0bGV0SWQsXG5cdFx0JyMnLFxuXHRcdGDlr7zlhaUke2lzRmlsZU5TID8gKGxhYmVsID8gYOaWh+S7tu+8iCR7bGFiZWx977yJYCA6ICfpobXpnaInKSA6IGJ1dHRvbkxhYmVsfWAsXG5cdFx0J3QtaW1wb3J0J1xuXHQpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW1pc3VzZWQtcHJvbWlzZXNcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gcmVkaXJlY3RUZXh0QT8udGV4dENvbnRlbnQgfHwgd2dQYWdlTmFtZTtcblxuXHRcdGlmIChpc0ZpbGVOUyAmJiAhaGFzTXdOb2FydGljbGV0ZXh0KSB7XG5cdFx0XHRhd2FpdCBpbXBvcnRQYWdlKHBhZ2VOYW1lLCBpd3ByZWZpeCwgaXNGaWxlTlMpO1xuXG5cdFx0XHRjb25zdCBxdWVyeVBhcmFtczogQXBpUXVlcnlQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHR0aXRsZXM6IHBhZ2VOYW1lLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChxdWVyeVBhcmFtcyk7XG5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50XG5cdFx0XHRmb3IgKGNvbnN0IFssIHBhZ2VpbmZvXSBvZiBPYmplY3QuZW50cmllcyhyZXNwb25zZVsncXVlcnknXS5wYWdlcykpIHtcblx0XHRcdFx0aWYgKChwYWdlaW5mbyBhcyBSZWNvcmQ8c3RyaW5nLCBuZXZlcj4pWydtaXNzaW5nJ10pIHtcblx0XHRcdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChwYWdlTmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YXdhaXQgaW1wb3J0UGFnZShwYWdlTmFtZSwgJ3pod2lraScsIGlzRmlsZU5TKTtcblx0XHRcdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChwYWdlTmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YXdhaXQgaW1wb3J0UGFnZShwYWdlTmFtZSwgJ3pod2lraScpO1xuXHRcdFx0cmVmcmVzaFBhZ2Uod2dQYWdlTmFtZSk7XG5cdFx0fVxuXHR9KTtcbn0pKCk7XG4iXSwKICAibWFw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QUFVLFFBQVE7QUFDbkNiLGtCQUFZQyxVQUFVO0lBQ3ZCO0VBQ0QsQ0FBQyxDQUFBO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJyZWZyZXNoUGFnZSIsICJ3Z1BhZ2VOYW1lIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iLCAicmVwbGFjZSIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJpbXBvcnRQYWdlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFnZU5hbWUiLCAiaXdwcmVmaXgiLCAiaXNGaWxlTlMiLCAic3VtbWFyeSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImFzc2lnbmtub3dudXNlcnMiLCAiaW50ZXJ3aWtpcGFnZSIsICJpbnRlcndpa2lwcmVmaXgiLCAiaW50ZXJ3aWtpc291cmNlIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAidXBsb2FkRmlsZSIsICJfcmVmMiIsICJ1cmwiLCAicmF3dXJsZW5jb2RlIiwgInVwbG9hZFBhcmFtcyIsICJmaWxlbmFtZSIsICJjb21tZW50IiwgImlnbm9yZXdhcm5pbmdzIiwgIl94MyIsICJpbXBvcnRSZWRpcmVjdCIsICJfcmVmMyIsICJyZWRpcmVjdHMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInRvIiwgInZhbHVlIiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgImVyciIsICJlIiwgImYiLCAiX3g0IiwgIl9yZWY0IiwgInByb3AiLCAidGl0bGVzIiwgInJlc3BvbnNlIiwgImdldCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAicGFnZXMiLCAibGVuZ3RoIiwgImluZm8iLCAiX3g1IiwgInF1aWNrSW1wb3J0IiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImNvbmZpZyIsICJjYVZpZXdGb3JlaWduWmh3aWtpIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicmVkaXJlY3RUZXh0QSIsICJoYXNNd05vYXJ0aWNsZXRleHQiLCAicXVlcnlTZWxlY3RvciIsICJsYWJlbCIsICJidXR0b25MYWJlbCIsICJwb3J0bGV0SWQiLCAiZWxlbWVudCIsICJhZGRQb3J0bGV0TGluayIsICJhZGRFdmVudExpc3RlbmVyIiwgInRleHRDb250ZW50IiwgInF1ZXJ5UGFyYW1zIiwgIl9pMiIsICJfT2JqZWN0JGVudHJpZXMyIiwgInBhZ2VpbmZvIl0KfQo=
