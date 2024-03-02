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
  var _ref3 = _asyncToGenerator(function* (pageName) {
    const params = {
      action: "query",
      prop: "info",
      titles: pageName
    };
    const response = yield api.get(params);
    for (var _i = 0, _Object$entries = Object.entries(response["query"].pages); _i < _Object$entries.length; _i++) {
      const [, info] = _Object$entries[_i];
      if (info["redirect"] === "") {
        continue;
      }
      yield uploadFile(pageName);
    }
  });
  return function detectIfFileRedirect2(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/QuickImport/QuickImport.ts
var import_ext_gadget3 = require("ext.gadget.Util");
void (0, import_ext_gadget3.getBody)().then(($body) => {
  const {
    wgNamespaceNumber,
    wgPageName
  } = mw.config.get();
  const caViewForeignZhwiki = $body.find("#ca-view-foreign a[href*='zh.wikipedia.org']").get(0);
  const redirectTextA = $body.find(".redirectText a").get(0);
  const isFileNS = wgNamespaceNumber === 6;
  const hasMwNoarticletext = !!$body.find("#mw-noarticletext").length;
  const iwprefix = caViewForeignZhwiki ? "zhwiki" : "commons";
  const label = isFileNS && !hasMwNoarticletext ? iwprefix : "";
  const buttonLabel = redirectTextA ? "重定向目标" : "页面";
  const portletId = $body.find("#p-cactions").length ? "p-cactions" : "p-tb";
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
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvcXVpY2tJbXBvcnQudHMiLCAic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWlja0ltcG9ydC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCByZWZyZXNoUGFnZSA9ICh3Z1BhZ2VOYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOWIt+aWsOmhtemdoicsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKHdnUGFnZU5hbWUpKTtcbn07XG5cbmNvbnN0IGltcG9ydFBhZ2UgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZywgaXdwcmVmaXg6IHN0cmluZywgaXNGaWxlTlM6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+WvvOWFpemhtemdouS4rScsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgc3VtbWFyeTogc3RyaW5nID0gJ+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+yJztcblx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0c3VtbWFyeSArPSAn77yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29Jztcblx0fVxuXG5cdGNvbnN0IHBhcmFtczogQXBpSW1wb3J0UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2ltcG9ydCcsXG5cdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRpbnRlcndpa2lwYWdlOiBwYWdlTmFtZSxcblx0XHRpbnRlcndpa2lwcmVmaXg6IGl3cHJlZml4LFxuXHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXgsXG5cdFx0c3VtbWFyeTogYO+8uyR7c3VtbWFyeX3vvL1gLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+mhtemdouWvvOWFpeWujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB1cmw6IHN0cmluZyA9IGBodHRwczovL3poLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlJlZGlyZWN0L2ZpbGUvJHttdy51dGlsLnJhd3VybGVuY29kZShwYWdlTmFtZSl9YDtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+i/geenu+aWh+S7tuS4rScsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB1cGxvYWRQYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmwsXG5cdFx0YWN0aW9uOiAndXBsb2FkJyxcblx0XHRmaWxlbmFtZTogcGFnZU5hbWUsXG5cdFx0Y29tbWVudDogJ+iHquWFtuS7lue9keermei/geenu+aWh+S7ticsXG5cdFx0aWdub3Jld2FybmluZ3M6IHRydWUsXG5cdH07XG5cdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih1cGxvYWRQYXJhbXMpO1xuXG5cdHJlZnJlc2hQYWdlKHBhZ2VOYW1lKTtcbn07XG5cbmNvbnN0IGRldGVjdElmRmlsZVJlZGlyZWN0ID0gYXN5bmMgKHBhZ2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0cHJvcDogJ2luZm8nLFxuXHRcdHRpdGxlczogcGFnZU5hbWUsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50XG5cdGZvciAoY29uc3QgWywgaW5mb10gb2YgT2JqZWN0LmVudHJpZXMocmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpKSB7XG5cdFx0aWYgKChpbmZvIGFzIFJlY29yZDxzdHJpbmcsIG5ldmVyPilbJ3JlZGlyZWN0J10gPT09ICcnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRhd2FpdCB1cGxvYWRGaWxlKHBhZ2VOYW1lKTtcblx0fVxufTtcblxuZXhwb3J0IHtkZXRlY3RJZkZpbGVSZWRpcmVjdCwgaW1wb3J0UGFnZSwgcmVmcmVzaFBhZ2V9O1xuIiwgImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIGltcG9ydFBhZ2UsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvcXVpY2tJbXBvcnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vbW9kdWxlcy9hcGknO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBjYVZpZXdGb3JlaWduWmh3aWtpOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9ICRib2R5XG5cdFx0LmZpbmQoXCIjY2Etdmlldy1mb3JlaWduIGFbaHJlZio9J3poLndpa2lwZWRpYS5vcmcnXVwiKVxuXHRcdC5nZXQoMCk7XG5cdGNvbnN0IHJlZGlyZWN0VGV4dEE6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkID0gJGJvZHkuZmluZCgnLnJlZGlyZWN0VGV4dCBhJykuZ2V0KDApO1xuXG5cdGNvbnN0IGlzRmlsZU5TOiBib29sZWFuID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDY7XG5cdGNvbnN0IGhhc013Tm9hcnRpY2xldGV4dDogYm9vbGVhbiA9ICEhJGJvZHkuZmluZCgnI213LW5vYXJ0aWNsZXRleHQnKS5sZW5ndGg7XG5cdGNvbnN0IGl3cHJlZml4OiBzdHJpbmcgPSBjYVZpZXdGb3JlaWduWmh3aWtpID8gJ3pod2lraScgOiAnY29tbW9ucyc7XG5cblx0Y29uc3QgbGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TICYmICFoYXNNd05vYXJ0aWNsZXRleHQgPyBpd3ByZWZpeCA6ICcnO1xuXHRjb25zdCBidXR0b25MYWJlbDogc3RyaW5nID0gcmVkaXJlY3RUZXh0QSA/ICfph43lrprlkJHnm67moIcnIDogJ+mhtemdoic7XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSAkYm9keS5maW5kKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdHBvcnRsZXRJZCxcblx0XHQnIycsXG5cdFx0YOWvvOWFpSR7aXNGaWxlTlMgPyAobGFiZWwgPyBg5paH5Lu277yIJHtsYWJlbH3vvIlgIDogJ+mhtemdoicpIDogYnV0dG9uTGFiZWx9YCxcblx0XHQndC1pbXBvcnQnXG5cdCk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbWlzdXNlZC1wcm9taXNlc1xuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSByZWRpcmVjdFRleHRBPy50ZXh0Q29udGVudCB8fCB3Z1BhZ2VOYW1lO1xuXG5cdFx0aWYgKGlzRmlsZU5TICYmICFoYXNNd05vYXJ0aWNsZXRleHQpIHtcblx0XHRcdGF3YWl0IGltcG9ydFBhZ2UocGFnZU5hbWUsIGl3cHJlZml4LCBpc0ZpbGVOUyk7XG5cblx0XHRcdGNvbnN0IHF1ZXJ5UGFyYW1zOiBBcGlRdWVyeVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdHRpdGxlczogcGFnZU5hbWUsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHF1ZXJ5UGFyYW1zKTtcblxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnRcblx0XHRcdGZvciAoY29uc3QgWywgcGFnZWluZm9dIG9mIE9iamVjdC5lbnRyaWVzKHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzKSkge1xuXHRcdFx0XHRpZiAoKHBhZ2VpbmZvIGFzIFJlY29yZDxzdHJpbmcsIG5ldmVyPilbJ21pc3NpbmcnXSkge1xuXHRcdFx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHBhZ2VOYW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhd2FpdCBpbXBvcnRQYWdlKHBhZ2VOYW1lLCAnemh3aWtpJywgaXNGaWxlTlMpO1xuXHRcdFx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHBhZ2VOYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRhd2FpdCBpbXBvcnRQYWdlKHBhZ2VOYW1lLCAnemh3aWtpJyk7XG5cdFx0XHRyZWZyZXNoUGFnZSh3Z1BhZ2VOYW1lKTtcblx0XHR9XG5cdH0pO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsVUFBVzs7QUNBWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxlQUFBQyxPQUFpQ0wsT0FBTyxDQUFFOztBQ0Y5RCxJQUFBTSxxQkFBdUJKLFFBQUEscUJBQUE7QUFFdkIsSUFBSUssbUJBQXFDO0VBQ3hDQyxXQUFXQSxNQUFNO0VBQUM7QUFDbkI7QUFFQSxJQUFNQyxjQUFlQyxnQkFBNkI7QUFDakRILG1CQUFpQkMs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QUFRO1FBQ3BDLE9BQU87QUFDTixnQkFBTUgsV0FBV0csVUFBVSxVQUFVRSxRQUFRO0FBQzdDLGdCQUFNc0IscUJBQXFCeEIsUUFBUTtRQUNwQztNQUNEO0lBQ0QsT0FBTztBQUNOLFlBQU1ILFdBQVdHLFVBQVUsUUFBUTtBQUNuQ2Isa0JBQVlDLFVBQVU7SUFDdkI7RUFDRCxDQUFDLENBQUE7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInJlZnJlc2hQYWdlIiwgIndnUGFnZU5hbWUiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgImltcG9ydFBhZ2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlTmFtZSIsICJpd3ByZWZpeCIsICJpc0ZpbGVOUyIsICJzdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiYXNzaWdua25vd251c2VycyIsICJpbnRlcndpa2lwYWdlIiwgImludGVyd2lraXByZWZpeCIsICJpbnRlcndpa2lzb3VyY2UiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJ1cGxvYWRGaWxlIiwgIl9yZWYyIiwgInVybCIsICJyYXd1cmxlbmNvZGUiLCAidXBsb2FkUGFyYW1zIiwgImZpbGVuYW1lIiwgImNvbW1lbnQiLCAiaWdub3Jld2FybmluZ3MiLCAiX3gzIiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgIl9yZWYzIiwgInByb3AiLCAidGl0bGVzIiwgInJlc3BvbnNlIiwgImdldCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAicGFnZXMiLCAibGVuZ3RoIiwgImluZm8iLCAiX3g0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRCb2R5IiwgInRoZW4iLCAiJGJvZHkiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiY29uZmlnIiwgImNhVmlld0ZvcmVpZ25aaHdpa2kiLCAiZmluZCIsICJyZWRpcmVjdFRleHRBIiwgImhhc013Tm9hcnRpY2xldGV4dCIsICJsYWJlbCIsICJidXR0b25MYWJlbCIsICJwb3J0bGV0SWQiLCAiZWxlbWVudCIsICJhZGRQb3J0bGV0TGluayIsICJhZGRFdmVudExpc3RlbmVyIiwgInRleHRDb250ZW50IiwgInF1ZXJ5UGFyYW1zIiwgIl9pMiIsICJfT2JqZWN0JGVudHJpZXMyIiwgInBhZ2VpbmZvIl0KfQo=
