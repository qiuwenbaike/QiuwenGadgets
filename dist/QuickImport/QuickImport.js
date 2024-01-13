/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickImport}
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
//! src/QuickImport/QuickImport.ts
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
    const api = (0, import_ext_gadget.initMwApi)("Qiuwen/1.1 (QuickImport/1.0; ".concat(mw.config.get("wgWikiID"), ")"));
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
var label = "";
if (mw.config.get("wgNamespaceNumber") === 6 && !document.querySelector("#mw-noarticletext")) {
  label = document.querySelectorAll("#ca-view-foreign a[href*='zh.wikipedia.org']")[0] ? "zhwiki" : "commons";
} else {
  label = "";
}
var buttonLabel = document.querySelectorAll(".redirectText a")[0] ? "重定向目标" : "页面";
var portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
var element = mw.util.addPortletLink(portletId, "#", "导入".concat(mw.config.get("wgNamespaceNumber") === 6 ? label === "" ? "页面" : "文件（".concat(label, "）") : "".concat(buttonLabel)), "t-import");
if (element) {
  $(element).on("click", () => {
    void quickImport();
  });
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBxdWlja0ltcG9ydCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFFpdXdlbi8xLjEgKFF1aWNrSW1wb3J0LzEuMDsgJHttdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpfSlgKTtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gJGJvZHkuZmluZCgnLnJlZGlyZWN0VGV4dCBhJylbMF0/LnRleHRDb250ZW50IHx8IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcblxuXHRsZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0XHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxuXHR9O1xuXG5cdGNvbnN0IHJlZnJlc2hQYWdlID0gKCk6IHZvaWQgPT4ge1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6ICfmraPlnKjliLfmlrDpobXpnaInLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblx0XHRsb2NhdGlvbi5yZXBsYWNlKGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0Jyl9P3RpdGxlPSR7bXcudXRpbC5yYXd1cmxlbmNvZGUobXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpKX1gKTtcblx0fTtcblxuXHRjb25zdCBpbXBvcnRQYWdlID0gYXN5bmMgKGl3cHJlZml4ID0gJ3pod2lraScpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogJ+WvvOWFpemhtemdouS4rScsXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnaW5mbydcblx0XHQpO1xuXG5cdFx0bGV0IHN1bW1hcnk6IHN0cmluZyA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDYpIHtcblx0XHRcdHN1bW1hcnkgKz0gJ++8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vSc7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlJbXBvcnRQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdpbXBvcnQnLFxuXHRcdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRcdGludGVyd2lraXBhZ2U6IHBhZ2VOYW1lLFxuXHRcdFx0aW50ZXJ3aWtpcHJlZml4OiBpd3ByZWZpeCxcblx0XHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXgsXG5cdFx0XHRzdW1tYXJ5OiBg77y7JHtzdW1tYXJ5fe+8vWAsXG5cdFx0fTtcblx0XHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiAn6aG16Z2i5a+85YWl5a6M5oiQJyxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdzdWNjZXNzJ1xuXHRcdCk7XG5cdH07XG5cblx0Y29uc3QgZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBhc3luYyAoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0dGl0bGVzOiBwYWdlTmFtZSxcblx0XHR9O1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRmb3IgKGNvbnN0IFssIGluZm9dIG9mIE9iamVjdC5lbnRyaWVzKHJlc3VsdFsncXVlcnknXS5wYWdlcykpIHtcblx0XHRcdGlmICgoaW5mbyBhcyBSZWNvcmQ8c3RyaW5nLCBuZXZlcj4pWydyZWRpcmVjdCddID09PSAnJykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSBgaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpSZWRpcmVjdC9maWxlLyR7bXcudXRpbC5yYXd1cmxlbmNvZGUocGFnZU5hbWUpfWA7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6ICfov4Hnp7vmlofku7bkuK0nLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblx0XHRjb25zdCB1cGxvYWRQYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3VwbG9hZCcsXG5cdFx0XHRmaWxlbmFtZTogcGFnZU5hbWUsXG5cdFx0XHRjb21tZW50OiAn6Ieq5YW25LuW572R56uZ6L+B56e75paH5Lu2Jyxcblx0XHRcdGlnbm9yZXdhcm5pbmdzOiB0cnVlLFxuXHRcdFx0dXJsLFxuXHRcdH07XG5cdFx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHVwbG9hZFBhcmFtcyk7XG5cdFx0cmVmcmVzaFBhZ2UoKTtcblx0fTtcblxuXHRpZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gNiAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKSkge1xuXHRcdGxldCBzb3VyY2U6IHN0cmluZyA9ICcnO1xuXHRcdHNvdXJjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY2Etdmlldy1mb3JlaWduIGFbaHJlZio9J3poLndpa2lwZWRpYS5vcmcnXVwiKVswXSA/ICd6aHdpa2knIDogJ2NvbW1vbnMnO1xuXHRcdGF3YWl0IGltcG9ydFBhZ2Uoc291cmNlKTtcblx0XHRjb25zdCBxdWVyeVBhcmFtczogQXBpUXVlcnlQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHR0aXRsZXM6IHBhZ2VOYW1lLFxuXHRcdH07XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocXVlcnlQYXJhbXMpO1xuXHRcdGZvciAoY29uc3QgWywgcGFnZWluZm9dIG9mIE9iamVjdC5lbnRyaWVzKGRhdGFbJ3F1ZXJ5J10ucGFnZXMpKSB7XG5cdFx0XHRpZiAoKHBhZ2VpbmZvIGFzIFJlY29yZDxzdHJpbmcsIG5ldmVyPilbJ21pc3NpbmcnXSA9PT0gJycpIHtcblx0XHRcdFx0YXdhaXQgaW1wb3J0UGFnZShwYWdlTmFtZSk7XG5cdFx0XHRcdHZvaWQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QoKCkgPT4ge1xuXHRcdFx0XHRcdHZvaWQgdXBsb2FkRmlsZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZvaWQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QoKCkgPT4ge1xuXHRcdFx0XHRcdHZvaWQgdXBsb2FkRmlsZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0YXdhaXQgaW1wb3J0UGFnZSgpO1xuXHRcdHJlZnJlc2hQYWdlKCk7XG5cdH1cbn07XG5cbmxldCBsYWJlbDogc3RyaW5nID0gJyc7XG5pZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gNiAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKSkge1xuXHRsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY2Etdmlldy1mb3JlaWduIGFbaHJlZio9J3poLndpa2lwZWRpYS5vcmcnXVwiKVswXSA/ICd6aHdpa2knIDogJ2NvbW1vbnMnO1xufSBlbHNlIHtcblx0bGFiZWwgPSAnJztcbn1cblxuY29uc3QgYnV0dG9uTGFiZWw6IHN0cmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWRpcmVjdFRleHQgYScpWzBdID8gJ+mHjeWumuWQkeebruaghycgOiAn6aG16Z2iJztcbmNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcbmNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0cG9ydGxldElkLFxuXHQnIycsXG5cdGDlr7zlhaUke213LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDYgPyAobGFiZWwgPT09ICcnID8gJ+mhtemdoicgOiBg5paH5Lu277yIJHtsYWJlbH3vvIlgKSA6IGAke2J1dHRvbkxhYmVsfWB9YCxcblx0J3QtaW1wb3J0J1xuKTtcblxuaWYgKGVsZW1lbnQpIHtcblx0JChlbGVtZW50KS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0dm9pZCBxdWlja0ltcG9ydCgpO1xuXHR9KTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUN4QixJQUFBQyxxQkFBdUJELFFBQUEscUJBQUE7QUFFdkIsSUFBTUUsY0FBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFjLGFBQTJCO0FBQUEsUUFBQUM7QUFDOUMsVUFBTUMsT0FBQSxHQUFjUCxrQkFBQVEsV0FBQSxnQ0FBQUMsT0FBMENDLEdBQUdDLE9BQU9DLElBQUksVUFBVSxHQUFDLEdBQUEsQ0FBRztBQUMxRixVQUFNQyxRQUFpQ0MsRUFBRSxNQUFNO0FBQy9DLFVBQU1DLGFBQW1CVCxlQUFBTyxNQUFNRyxLQUFLLGlCQUFpQixFQUFFLENBQUMsT0FBQSxRQUFBVixpQkFBQSxTQUFBLFNBQS9CQSxhQUFrQ1csZ0JBQWVQLEdBQUdDLE9BQU9DLElBQUksWUFBWTtBQUVwRyxRQUFJTSxtQkFBcUM7TUFDeENDLFdBQVdBLE1BQU07TUFBQztJQUNuQjtBQUVBLFVBQU1DLGNBQWNBLE1BQVk7QUFDL0JGLHVCQUFpQkMsVUFBVTtBQUMzQixPQUFBLEdBQUFqQixtQkFBQW1CLFVBQ0M7UUFDQ0MsTUFBTTtRQUNOQyxVQUFVO01BQ1gsR0FDQSxNQUNEO0FBQ0FDLGVBQVNDLFFBQUEsR0FBQWhCLE9BQVdDLEdBQUdDLE9BQU9DLElBQUksVUFBVSxHQUFDLFNBQUEsRUFBQUgsT0FBVUMsR0FBR2dCLEtBQUtDLGFBQWFqQixHQUFHQyxPQUFPQyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUU7SUFDM0c7QUFFQSxVQUFNZ0IsYUFBQSwyQkFBQTtBQUFBLFVBQUFDLFFBQUF4QixrQkFBYSxXQUFPeUIsV0FBVyxVQUE0QjtBQUNoRVoseUJBQWlCQyxVQUFVO0FBQzNCRCw0QkFBQSxHQUFtQmhCLG1CQUFBbUIsVUFDbEI7VUFDQ0MsTUFB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QixxQkFBcUIsTUFBTTtBQUMvQixpQkFBS2MsV0FBVztVQUNqQixDQUFDO1FBQ0YsT0FBTztBQUNOLGVBQUtkLHFCQUFxQixNQUFNO0FBQy9CLGlCQUFLYyxXQUFXO1VBQ2pCLENBQUM7UUFDRjtNQUNEO0lBQ0QsT0FBTztBQUNOLFlBQU0zQixXQUFXO0FBQ2pCUixrQkFBWTtJQUNiO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0F0SE1qQixlQUFBO0FBQUEsV0FBQUMsS0FBQW1DLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQXdITixJQUFJK0IsUUFBZ0I7QUFDcEIsSUFBSTdELEdBQUdDLE9BQU9DLElBQUksbUJBQW1CLE1BQU0sS0FBSyxDQUFDa0QsU0FBU0MsY0FBYyxtQkFBbUIsR0FBRztBQUM3RlEsVUFBUVQsU0FBU0csaUJBQWlCLDhDQUE4QyxFQUFFLENBQUMsSUFBSSxXQUFXO0FBQ25HLE9BQU87QUFDTk0sVUFBUTtBQUNUO0FBRUEsSUFBTUMsY0FBc0JWLFNBQVNHLGlCQUFpQixpQkFBaUIsRUFBRSxDQUFDLElBQUksVUFBVTtBQUN4RixJQUFNUSxZQUFtQ1gsU0FBU0MsY0FBYyxhQUFhLElBQUksZUFBZTtBQUNoRyxJQUFNVyxVQUFnQ2hFLEdBQUdnQixLQUFLaUQsZUFDN0NGLFdBQ0EsS0FBQSxLQUFBaEUsT0FDS0MsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUIsTUFBTSxJQUFLMkQsVUFBVSxLQUFLLE9BQUEsTUFBQTlELE9BQWE4RCxPQUFLLEdBQUEsSUFBQSxHQUFBOUQsT0FBVStELFdBQVcsQ0FBRSxHQUN6RyxVQUNEO0FBRUEsSUFBSUUsU0FBUztBQUNaNUQsSUFBRTRELE9BQU8sRUFBRUUsR0FBRyxTQUFTLE1BQU07QUFDNUIsU0FBS3pFLFlBQVk7RUFDbEIsQ0FBQztBQUNGOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJxdWlja0ltcG9ydCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIl8kYm9keSRmaW5kJCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiRib2R5IiwgIiQiLCAicGFnZU5hbWUiLCAiZmluZCIsICJ0ZXh0Q29udGVudCIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJyZWZyZXNoUGFnZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAidXRpbCIsICJyYXd1cmxlbmNvZGUiLCAiaW1wb3J0UGFnZSIsICJfcmVmMiIsICJpd3ByZWZpeCIsICJzdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiYXNzaWdua25vd251c2VycyIsICJpbnRlcndpa2lwYWdlIiwgImludGVyd2lraXByZWZpeCIsICJpbnRlcndpa2lzb3VyY2UiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgIl9yZWYzIiwgImNhbGxiYWNrIiwgInByb3AiLCAidGl0bGVzIiwgInJlc3VsdCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAicGFnZXMiLCAibGVuZ3RoIiwgImluZm8iLCAiX3giLCAidXBsb2FkRmlsZSIsICJfcmVmNCIsICJ1cmwiLCAidXBsb2FkUGFyYW1zIiwgImZpbGVuYW1lIiwgImNvbW1lbnQiLCAiaWdub3Jld2FybmluZ3MiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJzb3VyY2UiLCAicXVlcnlTZWxlY3RvckFsbCIsICJxdWVyeVBhcmFtcyIsICJkYXRhIiwgIl9pMiIsICJfT2JqZWN0JGVudHJpZXMyIiwgInBhZ2VpbmZvIiwgImxhYmVsIiwgImJ1dHRvbkxhYmVsIiwgInBvcnRsZXRJZCIsICJlbGVtZW50IiwgImFkZFBvcnRsZXRMaW5rIiwgIm9uIl0KfQo=

})();

/* </nowiki> */
