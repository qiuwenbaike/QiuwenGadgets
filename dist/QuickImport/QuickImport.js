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
  var _ref3 = _asyncToGenerator(function* (pageName, isFileNS = false) {
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
      yield importPage(pageName, "commons", isFileNS);
      yield importPage(pageName, "zhwiki", isFileNS);
    }
    if (response["query"].redirects) {
      var _iterator = _createForOfIteratorHelper(response["query"].redirects), _step;
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
    } else if (isFileNS) {
      if (response["query"].pages[0].imagerepository && response["query"].pages[0].imagerepository !== "local") {
        yield uploadFile(pageName);
      }
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
    wgPageName,
    wgWikiID
  } = mw.config.get();
  const caViewForeignZhwiki = document.querySelectorAll("#ca-view-foreign a[href*='zh.wikipedia.org']");
  const redirectTextA = document.querySelectorAll(".redirectText a");
  const isFileNS = wgNamespaceNumber === 6;
  const hasMwNoarticletext = !!document.querySelector("#mw-noarticletext");
  const iwprefix = caViewForeignZhwiki.length > 0 ? "zhwiki" : "commons";
  const label = isFileNS && !hasMwNoarticletext ? iwprefix : "";
  const buttonLabel = isFileNS ? label ? "文件（".concat(label, "）") : "页面" : redirectTextA.length > 0 ? "重定向目标" : "页面";
  if (wgWikiID !== "zhqiuwenbaike" && isFileNS) {
    return;
  }
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", "导入".concat(buttonLabel), "t-import");
  if (!element) {
    return;
  }
  element.addEventListener("click", () => {
    void _asyncToGenerator(function* () {
      var _redirectTextA$;
      const pageName = ((_redirectTextA$ = redirectTextA[0]) === null || _redirectTextA$ === void 0 ? void 0 : _redirectTextA$.textContent) || wgPageName;
      yield detectIfFileRedirect(pageName, isFileNS);
    })().then(() => {
      refreshPage(wgPageName);
    });
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvcXVpY2tJbXBvcnQudHMiLCAic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWlja0ltcG9ydC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCByZWZyZXNoUGFnZSA9ICh3Z1BhZ2VOYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOWIt+aWsOmhtemdoicsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKHdnUGFnZU5hbWUpKTtcbn07XG5cbmNvbnN0IGltcG9ydFBhZ2UgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZywgaXdwcmVmaXg6IHN0cmluZywgaXNGaWxlTlM6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+WvvOWFpemhtemdouS4rScsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgc3VtbWFyeTogc3RyaW5nID0gJ+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+yJztcblx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0c3VtbWFyeSArPSAn77yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29Jztcblx0fVxuXG5cdGNvbnN0IHBhcmFtczogQXBpSW1wb3J0UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2ltcG9ydCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRpbnRlcndpa2lwYWdlOiBwYWdlTmFtZSxcblx0XHRpbnRlcndpa2lwcmVmaXg6IGl3cHJlZml4LFxuXHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXggYXMgTm9uTnVsbGFibGU8QXBpSW1wb3J0UGFyYW1zWydpbnRlcndpa2lzb3VyY2UnXT4sXG5cdFx0c3VtbWFyeTogYO+8uyR7c3VtbWFyeX3vvL1gLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+mhtemdouWvvOWFpeWujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgdXJsOiBzdHJpbmcgPSBgaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpSZWRpcmVjdC9maWxlLyR7bXcudXRpbC5yYXd1cmxlbmNvZGUodGFyZ2V0KX1gO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn6L+B56e75paH5Lu25LitJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGNvbnN0IHVwbG9hZFBhcmFtczogQXBpVXBsb2FkUGFyYW1zID0ge1xuXHRcdHVybCxcblx0XHRhY3Rpb246ICd1cGxvYWQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZpbGVuYW1lOiB0YXJnZXQsXG5cdFx0Y29tbWVudDogJ+iHquWFtuS7lue9keermei/geenu+aWh+S7ticsXG5cdFx0aWdub3Jld2FybmluZ3M6IHRydWUsXG5cdH07XG5cdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih1cGxvYWRQYXJhbXMpO1xufTtcblxuY29uc3QgZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZywgaXNGaWxlTlMgPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBxdWVyeVBhcmFtczogQXBpUXVlcnlQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiBbJ2ltYWdlaW5mbycsICdpbmZvJ10sXG5cdFx0dGl0bGVzOiBwYWdlTmFtZSxcblx0XHRyZWRpcmVjdHM6IHRydWUsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChxdWVyeVBhcmFtcyk7XG5cblx0aWYgKHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdLm1pc3NpbmcpIHtcblx0XHRhd2FpdCBpbXBvcnRQYWdlKHBhZ2VOYW1lLCAnY29tbW9ucycsIGlzRmlsZU5TKTtcblx0XHRhd2FpdCBpbXBvcnRQYWdlKHBhZ2VOYW1lLCAnemh3aWtpJywgaXNGaWxlTlMpO1xuXHR9XG5cblx0aWYgKHJlc3BvbnNlWydxdWVyeSddLnJlZGlyZWN0cykge1xuXHRcdGZvciAoY29uc3Qge3RvfSBvZiByZXNwb25zZVsncXVlcnknXS5yZWRpcmVjdHMgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QodG8pO1xuXHRcdH1cblx0fSBlbHNlIGlmIChpc0ZpbGVOUykge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLWxvbmVseS1pZlxuXHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5wYWdlc1swXS5pbWFnZXJlcG9zaXRvcnkgJiYgcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0uaW1hZ2VyZXBvc2l0b3J5ICE9PSAnbG9jYWwnKSB7XG5cdFx0XHRhd2FpdCB1cGxvYWRGaWxlKHBhZ2VOYW1lKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfTtcbiIsICJpbXBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCByZWZyZXNoUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3F1aWNrSW1wb3J0JztcblxuKGZ1bmN0aW9uIHF1aWNrSW1wb3J0KCk6IHZvaWQge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWUsIHdnV2lraUlEfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBjYVZpZXdGb3JlaWduWmh3aWtpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjYS12aWV3LWZvcmVpZ24gYVtocmVmKj0nemgud2lraXBlZGlhLm9yZyddXCIpO1xuXHRjb25zdCByZWRpcmVjdFRleHRBID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZGlyZWN0VGV4dCBhJyk7XG5cblx0Y29uc3QgaXNGaWxlTlM6IGJvb2xlYW4gPSB3Z05hbWVzcGFjZU51bWJlciA9PT0gNjtcblx0Y29uc3QgaGFzTXdOb2FydGljbGV0ZXh0OiBib29sZWFuID0gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctbm9hcnRpY2xldGV4dCcpO1xuXHRjb25zdCBpd3ByZWZpeDogc3RyaW5nID0gY2FWaWV3Rm9yZWlnblpod2lraS5sZW5ndGggPiAwID8gJ3pod2lraScgOiAnY29tbW9ucyc7XG5cblx0Y29uc3QgbGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TICYmICFoYXNNd05vYXJ0aWNsZXRleHQgPyBpd3ByZWZpeCA6ICcnO1xuXHRjb25zdCBidXR0b25MYWJlbDogc3RyaW5nID0gaXNGaWxlTlNcblx0XHQ/IGxhYmVsXG5cdFx0XHQ/IGDmlofku7bvvIgke2xhYmVsfe+8iWBcblx0XHRcdDogJ+mhtemdoidcblx0XHQ6IHJlZGlyZWN0VGV4dEEubGVuZ3RoID4gMFxuXHRcdFx0PyAn6YeN5a6a5ZCR55uu5qCHJ1xuXHRcdFx0OiAn6aG16Z2iJztcblxuXHRpZiAod2dXaWtpSUQgIT09ICd6aHFpdXdlbmJhaWtlJyAmJiBpc0ZpbGVOUykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBg5a+85YWlJHtidXR0b25MYWJlbH1gLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gcmVkaXJlY3RUZXh0QVswXT8udGV4dENvbnRlbnQgfHwgd2dQYWdlTmFtZTtcblx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHBhZ2VOYW1lLCBpc0ZpbGVOUyk7XG5cdFx0fSkoKS50aGVuKCgpID0+IHtcblx0XHRcdHJlZnJlc2hQYWdlKHdnUGFnZU5hbWUpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLGVBQUFDLE9BQWlDTCxPQUFPLENBQUU7O0FDRjlELElBQUFNLHFCQUF1QkosUUFBQSxxQkFBQTtBQUV2QixJQUFJSyxtQkFBcUM7RUFDeENDLFdBQVdBLE1BQU07RUFBQztBQUNuQjtBQUVBLElBQU1DLGNBQWVDLGdCQUE2QjtBQUNqREgsbUJBQWlCQyxVQUFVO0FBQzNCLEdBQUEsR0FBQUYsbUJBQUFLLFVBQ0M7SUFDQ0MsTUFBTTtJQUNOQyxVQUFVO0VBQ1gsR0FDQSxNQUNEO0FBRUFDLFdBQVNDLFFBQVFDLEdBQUdDLEtBQUtDLE9BQU9SLFVBQVUsQ0FBQztBQUM1QztBQUVBLElBQU1TLGFBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBYSxXQUFPQyxVQUFrQkMsVUFBa0JDLFdBQW9CLE9BQXlCO0FBQzFHakIscUJBQWlCQyxVQUFVO0FBQzNCRCx3QkFBQSxHQUFtQkQsbUJBQUFLLFVB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ImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInJlZnJlc2hQYWdlIiwgIndnUGFnZU5hbWUiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgImltcG9ydFBhZ2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlTmFtZSIsICJpd3ByZWZpeCIsICJpc0ZpbGVOUyIsICJzdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImFzc2lnbmtub3dudXNlcnMiLCAiaW50ZXJ3aWtpcGFnZSIsICJpbnRlcndpa2lwcmVmaXgiLCAiaW50ZXJ3aWtpc291cmNlIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAidXBsb2FkRmlsZSIsICJfcmVmMiIsICJ0YXJnZXQiLCAidXJsIiwgInJhd3VybGVuY29kZSIsICJ1cGxvYWRQYXJhbXMiLCAiZmlsZW5hbWUiLCAiY29tbWVudCIsICJpZ25vcmV3YXJuaW5ncyIsICJfeDMiLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAiX3JlZjMiLCAicXVlcnlQYXJhbXMiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlcyIsICJyZWRpcmVjdHMiLCAicmVzcG9uc2UiLCAiZ2V0IiwgInBhZ2VzIiwgIm1pc3NpbmciLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInRvIiwgInZhbHVlIiwgImVyciIsICJlIiwgImYiLCAiaW1hZ2VyZXBvc2l0b3J5IiwgIl94NCIsICJxdWlja0ltcG9ydCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1dpa2lJRCIsICJjb25maWciLCAiY2FWaWV3Rm9yZWlnblpod2lraSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInJlZGlyZWN0VGV4dEEiLCAiaGFzTXdOb2FydGljbGV0ZXh0IiwgInF1ZXJ5U2VsZWN0b3IiLCAibGVuZ3RoIiwgImxhYmVsIiwgImJ1dHRvbkxhYmVsIiwgInBvcnRsZXRJZCIsICJlbGVtZW50IiwgImFkZFBvcnRsZXRMaW5rIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiX3JlZGlyZWN0VGV4dEEkIiwgInRleHRDb250ZW50IiwgInRoZW4iXQp9Cg==
