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
//! src/QuickImport/modules/core.ts
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
var import_ext_gadget = require("ext.gadget.Util");
var import_ext_gadget2 = require("ext.gadget.Toastify");
var quickImport = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    var _$body$find$;
    const api = (0, import_ext_gadget.initMwApi)("QuickImport/1.0");
    const $body = $("body");
    const pageName = ((_$body$find$ = $body.find(".redirectText a")[0]) === null || _$body$find$ === void 0 ? void 0 : _$body$find$.textContent) || mw.config.get("wgPageName");
    let toastifyInstance = {
      hideToast: () => {
      }
    };
    const refreshPage = () => {
      toastifyInstance.hideToast();
      (0, import_ext_gadget2.toastify)({
        text: "正在刷新页面",
        duration: -1
      }, "info");
      location.replace("".concat(mw.config.get("wgScript"), "?title=").concat(mw.util.rawurlencode(mw.config.get("wgPageName"))));
    };
    const importPage = /* @__PURE__ */ function() {
      var _ref2 = _asyncToGenerator(function* (iwprefix = "zhwiki") {
        toastifyInstance.hideToast();
        toastifyInstance = (0, import_ext_gadget2.toastify)({
          text: "导入页面中",
          duration: -1
        }, "info");
        let summary = "页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史";
        if (mw.config.get("wgNamespaceNumber") === 6) {
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
      return function importPage2() {
        return _ref2.apply(this, arguments);
      };
    }();
    const detectIfFileRedirect = /* @__PURE__ */ function() {
      var _ref3 = _asyncToGenerator(function* (callback) {
        const params = {
          action: "query",
          prop: "info",
          titles: pageName
        };
        const result = yield api.get(params);
        for (var _i = 0, _Object$entries = Object.entries(result["query"].pages); _i < _Object$entries.length; _i++) {
          const [, info] = _Object$entries[_i];
          if (info["redirect"] === "") {
            continue;
          }
          callback();
        }
      });
      return function detectIfFileRedirect2(_x) {
        return _ref3.apply(this, arguments);
      };
    }();
    const uploadFile = /* @__PURE__ */ function() {
      var _ref4 = _asyncToGenerator(function* () {
        const url = "https://zh.wikipedia.org/wiki/Special:Redirect/file/".concat(mw.util.rawurlencode(pageName));
        toastifyInstance.hideToast();
        toastifyInstance = (0, import_ext_gadget2.toastify)({
          text: "迁移文件中",
          duration: -1
        }, "info");
        const uploadParams = {
          action: "upload",
          filename: pageName,
          comment: "自其他网站迁移文件",
          ignorewarnings: true,
          url
        };
        yield api.postWithEditToken(uploadParams);
        refreshPage();
      });
      return function uploadFile2() {
        return _ref4.apply(this, arguments);
      };
    }();
    if (mw.config.get("wgNamespaceNumber") === 6 && !document.querySelector("#mw-noarticletext")) {
      let source = "";
      source = document.querySelectorAll("#ca-view-foreign a[href*='zh.wikipedia.org']")[0] ? "zhwiki" : "commons";
      yield importPage(source);
      const queryParams = {
        action: "query",
        prop: "info",
        titles: pageName
      };
      const data = yield api.get(queryParams);
      for (var _i2 = 0, _Object$entries2 = Object.entries(data["query"].pages); _i2 < _Object$entries2.length; _i2++) {
        const [, pageinfo] = _Object$entries2[_i2];
        if (pageinfo["missing"] === "") {
          yield importPage(pageName);
          void detectIfFileRedirect(() => {
            void uploadFile();
          });
        } else {
          void detectIfFileRedirect(() => {
            void uploadFile();
          });
        }
      }
    } else {
      yield importPage();
      refreshPage();
    }
  });
  return function quickImport2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/QuickImport/QuickImport.ts
$(function quickImportLoad() {
  const label = mw.config.get("wgNamespaceNumber") === 6 && !document.querySelector("#mw-noarticletext") ? document.querySelectorAll("#ca-view-foreign a[href*='zh.wikipedia.org']")[0] ? "zhwiki" : "commons" : "";
  const buttonLabel = document.querySelectorAll(".redirectText a")[0] ? "重定向目标" : "页面";
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", "导入".concat(mw.config.get("wgNamespaceNumber") === 6 ? label === "" ? "页面" : "文件（".concat(label, "）") : "".concat(buttonLabel)), "t-import");
  if (element) {
    $(element).on("click", () => {
      void quickImport();
    });
  }
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvY29yZS50cyIsICJzcmMvUXVpY2tJbXBvcnQvUXVpY2tJbXBvcnQudHMiXSwKICAic291cmNlUm9vdCI6ICIuLi9HYWRnZXRzIiwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHF1aWNrSW1wb3J0ID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnUXVpY2tJbXBvcnQvMS4wJyk7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9ICRib2R5LmZpbmQoJy5yZWRpcmVjdFRleHQgYScpWzBdPy50ZXh0Q29udGVudCB8fCBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5cblx0bGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblxuXHRjb25zdCByZWZyZXNoUGFnZSA9ICgpOiB2b2lkID0+IHtcblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiAn5q2j5Zyo5Yi35paw6aG16Z2iJyxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdpbmZvJ1xuXHRcdCk7XG5cdFx0bG9jYXRpb24ucmVwbGFjZShgJHttdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpfT90aXRsZT0ke213LnV0aWwucmF3dXJsZW5jb2RlKG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSl9YCk7XG5cdH07XG5cblx0Y29uc3QgaW1wb3J0UGFnZSA9IGFzeW5jIChpd3ByZWZpeCA9ICd6aHdpa2knKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6ICflr7zlhaXpobXpnaLkuK0nLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblxuXHRcdGxldCBzdW1tYXJ5OiBzdHJpbmcgPSAn6aG16Z2i5paH5a2X5Y6f6K645Y+v77yaW1tjYy1ieS1zYTo0LjB8Q0MgQlktU0EgNC4wXV3vvJvkvZzogIXor7flj4Lop4HmnaXmupDpobXpnaLljoblj7InO1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSA2KSB7XG5cdFx0XHRzdW1tYXJ5ICs9ICfvvJvmlofku7bkvZzogIXor7flj4Lop4HmraTpobXpnaLlj4rmnaXmupDpobXpnaLorrDovb0nO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhcmFtczogQXBpSW1wb3J0UGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAnaW1wb3J0Jyxcblx0XHRcdGFzc2lnbmtub3dudXNlcnM6IHRydWUsXG5cdFx0XHRpbnRlcndpa2lwYWdlOiBwYWdlTmFtZSxcblx0XHRcdGludGVyd2lraXByZWZpeDogaXdwcmVmaXgsXG5cdFx0XHRpbnRlcndpa2lzb3VyY2U6IGl3cHJlZml4LFxuXHRcdFx0c3VtbWFyeTogYO+8uyR7c3VtbWFyeX3vvL1gLFxuXHRcdH07XG5cdFx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogJ+mhtemdouWvvOWFpeWujOaIkCcsXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnc3VjY2Vzcydcblx0XHQpO1xuXHR9O1xuXG5cdGNvbnN0IGRldGVjdElmRmlsZVJlZGlyZWN0ID0gYXN5bmMgKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdHRpdGxlczogcGFnZU5hbWUsXG5cdFx0fTtcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnQsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuXHRcdGZvciAoY29uc3QgWywgaW5mb10gb2YgT2JqZWN0LmVudHJpZXMocmVzdWx0WydxdWVyeSddLnBhZ2VzKSkge1xuXHRcdFx0aWYgKChpbmZvIGFzIFJlY29yZDxzdHJpbmcsIG5ldmVyPilbJ3JlZGlyZWN0J10gPT09ICcnKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y2FsbGJhY2soKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgdXBsb2FkRmlsZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IGBodHRwczovL3poLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlJlZGlyZWN0L2ZpbGUvJHttdy51dGlsLnJhd3VybGVuY29kZShwYWdlTmFtZSl9YDtcblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogJ+i/geenu+aWh+S7tuS4rScsXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnaW5mbydcblx0XHQpO1xuXHRcdGNvbnN0IHVwbG9hZFBhcmFtczogQXBpVXBsb2FkUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAndXBsb2FkJyxcblx0XHRcdGZpbGVuYW1lOiBwYWdlTmFtZSxcblx0XHRcdGNvbW1lbnQ6ICfoh6rlhbbku5bnvZHnq5nov4Hnp7vmlofku7YnLFxuXHRcdFx0aWdub3Jld2FybmluZ3M6IHRydWUsXG5cdFx0XHR1cmwsXG5cdFx0fTtcblx0XHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4odXBsb2FkUGFyYW1zKTtcblx0XHRyZWZyZXNoUGFnZSgpO1xuXHR9O1xuXG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSA2ICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctbm9hcnRpY2xldGV4dCcpKSB7XG5cdFx0bGV0IHNvdXJjZTogc3RyaW5nID0gJyc7XG5cdFx0c291cmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjYS12aWV3LWZvcmVpZ24gYVtocmVmKj0nemgud2lraXBlZGlhLm9yZyddXCIpWzBdID8gJ3pod2lraScgOiAnY29tbW9ucyc7XG5cdFx0YXdhaXQgaW1wb3J0UGFnZShzb3VyY2UpO1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zOiBBcGlRdWVyeVBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdHRpdGxlczogcGFnZU5hbWUsXG5cdFx0fTtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChxdWVyeVBhcmFtcyk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnQsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuXHRcdGZvciAoY29uc3QgWywgcGFnZWluZm9dIG9mIE9iamVjdC5lbnRyaWVzKGRhdGFbJ3F1ZXJ5J10ucGFnZXMpKSB7XG5cdFx0XHRpZiAoKHBhZ2VpbmZvIGFzIFJlY29yZDxzdHJpbmcsIG5ldmVyPilbJ21pc3NpbmcnXSA9PT0gJycpIHtcblx0XHRcdFx0YXdhaXQgaW1wb3J0UGFnZShwYWdlTmFtZSk7XG5cdFx0XHRcdHZvaWQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QoKCkgPT4ge1xuXHRcdFx0XHRcdHZvaWQgdXBsb2FkRmlsZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZvaWQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QoKCkgPT4ge1xuXHRcdFx0XHRcdHZvaWQgdXBsb2FkRmlsZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0YXdhaXQgaW1wb3J0UGFnZSgpO1xuXHRcdHJlZnJlc2hQYWdlKCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cXVpY2tJbXBvcnR9O1xuIiwgImltcG9ydCB7cXVpY2tJbXBvcnR9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuJChmdW5jdGlvbiBxdWlja0ltcG9ydExvYWQoKSB7XG5cdGNvbnN0IGxhYmVsOiBzdHJpbmcgPVxuXHRcdG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDYgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1ub2FydGljbGV0ZXh0Jylcblx0XHRcdD8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjYS12aWV3LWZvcmVpZ24gYVtocmVmKj0nemgud2lraXBlZGlhLm9yZyddXCIpWzBdXG5cdFx0XHRcdD8gJ3pod2lraSdcblx0XHRcdFx0OiAnY29tbW9ucydcblx0XHRcdDogJyc7XG5cdGNvbnN0IGJ1dHRvbkxhYmVsOiBzdHJpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVkaXJlY3RUZXh0IGEnKVswXSA/ICfph43lrprlkJHnm67moIcnIDogJ+mhtemdoic7XG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdHBvcnRsZXRJZCxcblx0XHQnIycsXG5cdFx0YOWvvOWFpSR7bXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gNiA/IChsYWJlbCA9PT0gJycgPyAn6aG16Z2iJyA6IGDmlofku7bvvIgke2xhYmVsfe+8iWApIDogYCR7YnV0dG9uTGFiZWx9YH1gLFxuXHRcdCd0LWltcG9ydCdcblx0KTtcblxuXHRpZiAoZWxlbWVudCkge1xuXHRcdCQoZWxlbWVudCkub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dm9pZCBxdWlja0ltcG9ydCgpO1xuXHRcdH0pO1xuXHR9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUN4QixJQUFBQyxxQkFBdUJELFFBQUEscUJBQUE7QUFFdkIsSUFBTUUsY0FBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFjLGFBQTJCO0FBQUEsUUFBQUM7QUFDOUMsVUFBTUMsT0FBQSxHQUFjUCxrQkFBQVEsV0FBVSxpQkFBaUI7QUFDL0MsVUFBTUMsUUFBaUNDLEVBQUUsTUFBTTtBQUMvQyxVQUFNQyxhQUFtQkwsZUFBQUcsTUFBTUcsS0FBSyxpQkFBaUIsRUFBRSxDQUFDLE9BQUEsUUFBQU4saUJBQUEsU0FBQSxTQUEvQkEsYUFBa0NPLGdCQUFlQyxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7QUFFcEcsUUFBSUMsbUJBQXFDO01BQ3hDQyxXQUFXQSxNQUFNO01BQUM7SUFDbkI7QUFFQSxVQUFNQyxjQUFjQSxNQUFZO0FBQy9CRix1QkFBaUJD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QUdDLE9BQU9DLElBQUksbUJBQW1CLE1BQU0sSUFBS3dELFVBQVUsS0FBSyxPQUFBLE1BQUEvQyxPQUFhK0MsT0FBSyxHQUFBLElBQUEsR0FBQS9DLE9BQVVnRCxXQUFXLENBQUUsR0FDekcsVUFDRDtBQUVBLE1BQUlFLFNBQVM7QUFDWmpFLE1BQUVpRSxPQUFPLEVBQUVFLEdBQUcsU0FBUyxNQUFNO0FBQzVCLFdBQUsxRSxZQUFZO0lBQ2xCLENBQUM7RUFDRjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInF1aWNrSW1wb3J0IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiXyRib2R5JGZpbmQkIiwgImFwaSIsICJpbml0TXdBcGkiLCAiJGJvZHkiLCAiJCIsICJwYWdlTmFtZSIsICJmaW5kIiwgInRleHRDb250ZW50IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAicmVmcmVzaFBhZ2UiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgImNvbmNhdCIsICJ1dGlsIiwgInJhd3VybGVuY29kZSIsICJpbXBvcnRQYWdlIiwgIl9yZWYyIiwgIml3cHJlZml4IiwgInN1bW1hcnkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJhc3NpZ25rbm93bnVzZXJzIiwgImludGVyd2lraXBhZ2UiLCAiaW50ZXJ3aWtpcHJlZml4IiwgImludGVyd2lraXNvdXJjZSIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAiX3JlZjMiLCAiY2FsbGJhY2siLCAicHJvcCIsICJ0aXRsZXMiLCAicmVzdWx0IiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJwYWdlcyIsICJsZW5ndGgiLCAiaW5mbyIsICJfeCIsICJ1cGxvYWRGaWxlIiwgIl9yZWY0IiwgInVybCIsICJ1cGxvYWRQYXJhbXMiLCAiZmlsZW5hbWUiLCAiY29tbWVudCIsICJpZ25vcmV3YXJuaW5ncyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInNvdXJjZSIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInF1ZXJ5UGFyYW1zIiwgImRhdGEiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllczIiLCAicGFnZWluZm8iLCAicXVpY2tJbXBvcnRMb2FkIiwgImxhYmVsIiwgImJ1dHRvbkxhYmVsIiwgInBvcnRsZXRJZCIsICJlbGVtZW50IiwgImFkZFBvcnRsZXRMaW5rIiwgIm9uIl0KfQo=

})();

/* </nowiki> */
