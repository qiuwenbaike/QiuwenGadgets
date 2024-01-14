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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBxdWlja0ltcG9ydCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFFpdXdlbi8xLjEgKFF1aWNrSW1wb3J0LzEuMDsgJHttdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpfSlgKTtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gJGJvZHkuZmluZCgnLnJlZGlyZWN0VGV4dCBhJylbMF0/LnRleHRDb250ZW50IHx8IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcblxuXHRsZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0XHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxuXHR9O1xuXG5cdGNvbnN0IHJlZnJlc2hQYWdlID0gKCk6IHZvaWQgPT4ge1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6ICfmraPlnKjliLfmlrDpobXpnaInLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblx0XHRsb2NhdGlvbi5yZXBsYWNlKGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0Jyl9P3RpdGxlPSR7bXcudXRpbC5yYXd1cmxlbmNvZGUobXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpKX1gKTtcblx0fTtcblxuXHRjb25zdCBpbXBvcnRQYWdlID0gYXN5bmMgKGl3cHJlZml4ID0gJ3pod2lraScpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogJ+WvvOWFpemhtemdouS4rScsXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnaW5mbydcblx0XHQpO1xuXG5cdFx0bGV0IHN1bW1hcnk6IHN0cmluZyA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDYpIHtcblx0XHRcdHN1bW1hcnkgKz0gJ++8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vSc7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlJbXBvcnRQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdpbXBvcnQnLFxuXHRcdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRcdGludGVyd2lraXBhZ2U6IHBhZ2VOYW1lLFxuXHRcdFx0aW50ZXJ3aWtpcHJlZml4OiBpd3ByZWZpeCxcblx0XHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXgsXG5cdFx0XHRzdW1tYXJ5OiBg77y7JHtzdW1tYXJ5fe+8vWAsXG5cdFx0fTtcblx0XHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiAn6aG16Z2i5a+85YWl5a6M5oiQJyxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdzdWNjZXNzJ1xuXHRcdCk7XG5cdH07XG5cblx0Y29uc3QgZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBhc3luYyAoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0dGl0bGVzOiBwYWdlTmFtZSxcblx0XHR9O1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG5cdFx0Zm9yIChjb25zdCBbLCBpbmZvXSBvZiBPYmplY3QuZW50cmllcyhyZXN1bHRbJ3F1ZXJ5J10ucGFnZXMpKSB7XG5cdFx0XHRpZiAoKGluZm8gYXMgUmVjb3JkPHN0cmluZywgbmV2ZXI+KVsncmVkaXJlY3QnXSA9PT0gJycpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCB1cGxvYWRGaWxlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gYGh0dHBzOi8vemgud2lraXBlZGlhLm9yZy93aWtpL1NwZWNpYWw6UmVkaXJlY3QvZmlsZS8ke213LnV0aWwucmF3dXJsZW5jb2RlKHBhZ2VOYW1lKX1gO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiAn6L+B56e75paH5Lu25LitJyxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdpbmZvJ1xuXHRcdCk7XG5cdFx0Y29uc3QgdXBsb2FkUGFyYW1zOiBBcGlVcGxvYWRQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICd1cGxvYWQnLFxuXHRcdFx0ZmlsZW5hbWU6IHBhZ2VOYW1lLFxuXHRcdFx0Y29tbWVudDogJ+iHquWFtuS7lue9keermei/geenu+aWh+S7ticsXG5cdFx0XHRpZ25vcmV3YXJuaW5nczogdHJ1ZSxcblx0XHRcdHVybCxcblx0XHR9O1xuXHRcdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih1cGxvYWRQYXJhbXMpO1xuXHRcdHJlZnJlc2hQYWdlKCk7XG5cdH07XG5cblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDYgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1ub2FydGljbGV0ZXh0JykpIHtcblx0XHRsZXQgc291cmNlOiBzdHJpbmcgPSAnJztcblx0XHRzb3VyY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NhLXZpZXctZm9yZWlnbiBhW2hyZWYqPSd6aC53aWtpcGVkaWEub3JnJ11cIilbMF0gPyAnemh3aWtpJyA6ICdjb21tb25zJztcblx0XHRhd2FpdCBpbXBvcnRQYWdlKHNvdXJjZSk7XG5cdFx0Y29uc3QgcXVlcnlQYXJhbXM6IEFwaVF1ZXJ5UGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0dGl0bGVzOiBwYWdlTmFtZSxcblx0XHR9O1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHF1ZXJ5UGFyYW1zKTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG5cdFx0Zm9yIChjb25zdCBbLCBwYWdlaW5mb10gb2YgT2JqZWN0LmVudHJpZXMoZGF0YVsncXVlcnknXS5wYWdlcykpIHtcblx0XHRcdGlmICgocGFnZWluZm8gYXMgUmVjb3JkPHN0cmluZywgbmV2ZXI+KVsnbWlzc2luZyddID09PSAnJykge1xuXHRcdFx0XHRhd2FpdCBpbXBvcnRQYWdlKHBhZ2VOYW1lKTtcblx0XHRcdFx0dm9pZCBkZXRlY3RJZkZpbGVSZWRpcmVjdCgoKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCB1cGxvYWRGaWxlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dm9pZCBkZXRlY3RJZkZpbGVSZWRpcmVjdCgoKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCB1cGxvYWRGaWxlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRhd2FpdCBpbXBvcnRQYWdlKCk7XG5cdFx0cmVmcmVzaFBhZ2UoKTtcblx0fVxufTtcblxubGV0IGxhYmVsOiBzdHJpbmcgPSAnJztcbmlmIChtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSA2ICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctbm9hcnRpY2xldGV4dCcpKSB7XG5cdGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjYS12aWV3LWZvcmVpZ24gYVtocmVmKj0nemgud2lraXBlZGlhLm9yZyddXCIpWzBdID8gJ3pod2lraScgOiAnY29tbW9ucyc7XG59IGVsc2Uge1xuXHRsYWJlbCA9ICcnO1xufVxuXG5jb25zdCBidXR0b25MYWJlbDogc3RyaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZGlyZWN0VGV4dCBhJylbMF0gPyAn6YeN5a6a5ZCR55uu5qCHJyA6ICfpobXpnaInO1xuY29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuY29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRwb3J0bGV0SWQsXG5cdCcjJyxcblx0YOWvvOWFpSR7bXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gNiA/IChsYWJlbCA9PT0gJycgPyAn6aG16Z2iJyA6IGDmlofku7bvvIgke2xhYmVsfe+8iWApIDogYCR7YnV0dG9uTGFiZWx9YH1gLFxuXHQndC1pbXBvcnQnXG4pO1xuXG5pZiAoZWxlbWVudCkge1xuXHQkKGVsZW1lbnQpLm9uKCdjbGljaycsICgpID0+IHtcblx0XHR2b2lkIHF1aWNrSW1wb3J0KCk7XG5cdH0pO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXdCQyxRQUFBLGlCQUFBO0FBQ3hCLElBQUFDLHFCQUF1QkQsUUFBQSxxQkFBQTtBQUV2QixJQUFNRSxjQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWMsYUFBMkI7QUFBQSxRQUFBQztBQUM5QyxVQUFNQyxPQUFBLEdBQWNQLGtCQUFBUSxXQUFBLGdDQUFBQyxPQUEwQ0MsR0FBR0MsT0FBT0MsSUFBSSxVQUFVLEdBQUMsR0FBQSxDQUFHO0FBQzFGLFVBQU1DLFFBQWlDQyxFQUFFLE1BQU07QUFDL0MsVUFBTUMsYUFBbUJULGVBQUFPLE1BQU1HLEtBQUssaUJBQWlCLEVBQUUsQ0FBQyxPQUFBLFFBQUFWLGlCQUFBLFNBQUEsU0FBL0JBLGFBQWtDVyxnQkFBZVAsR0FBR0MsT0FBT0MsSUFBSSxZQUFZO0FBRXBHLFFBQUlNLG1CQUFxQztNQUN4Q0MsV0FBV0EsTUFBTTtNQUFDO0lBQ25CO0FBRUEsVUFBTUMsY0FBY0EsTUFBWTtBQUMvQkYsdUJBQWlCQyxVQUFVO0FBQzNCLE9BQUEsR0FBQWpCLG1CQUFBbUIsVUFDQztRQUNDQyxNQUFNO1FBQ05DLFVBQVU7TUFDWCxHQUNBLE1BQ0Q7QUFDQUMsZUFBU0MsUUFBQSxHQUFBaEIsT0FBV0MsR0FBR0MsT0FBT0MsSUFBSSxVQUFVLEdBQUMsU0FBQSxFQUFBSCxPQUFVQyxHQUFHZ0IsS0FBS0MsYUFBYWpCLEdBQUdDLE9BQU9DLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBRTtJQUMzRztBQUVBLFVBQU1nQixhQUFBLDJCQUFBO0FBQUEsVUFBQUMsUUFBQXhCLGtCQUFhLFdBQU95QixXQUFXLFVBQTRCO0FBQ2hFWix5QkFBaUJDLFVBQVU7QUFDM0JELDRCQUFBLEdBQW1CaEIsbUJBQUFtQixVQUNsQjtVQUNDQyxNQUFNO1VBQ05DLFVBQVU7UUFDWCxHQUNBLE1BQ0Q7QUFFQSxZQUFJUSxVQUFrQjtBQUN0QixZQUFJckIsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUIsTUFBTSxHQUFHO0FBQzdDbUIscUJBQVc7UUFDWjtBQUVBLGNBQU1DLFNBQTBCO1VBQy9CQyxRQUFRO1VBQ1JDLGtCQUFrQjtVQUNsQkMsZUFBZXBCO1VBQ2ZxQixpQkFBaUJOO1VBQ2pCTyxpQkFBaUJQO1VBQ2pCQyxTQUFBLElBQUF0QixPQUFhc0IsU0FBTyxHQUFBO1FBQ3JCO0FBQ0EsY0FBTXhCLElBQUkrQixrQkFBa0JOLE1BQU07QUFFbENkLHlCQUFpQkMsVUFBVTtBQUMzQkQsNEJBQUEsR0FBbUJoQixtQkFBQW1CLFVBQ2xCO1VBQ0NDLE1BQU07VUFDTkMsVUFBVTtRQUNYLEdBQ0EsU0FDRDtNQUNELENBQUE7QUFBQSxhQUFBLFNBakNNSyxjQUFBO0FBQUEsZUFBQUMsTUFBQVUsTUFBQSxNQUFBQyxTQUFBO01BQUE7SUFBQSxFQUFBO0FBbUNOLFVBQU1DLHVCQUFBLDJCQUFBO0FBQUEsVUFBQUMsUUFBQXJDLGtCQUF1QixXQUFPc0MsVUFBd0M7QUFDM0UsY0FBTVgsU0FBeUI7VUFDOUJDLFFBQVE7VUFDUlcsTUFBTTtVQUNOQyxRQUFROUI7UUFDVDtBQUNBLGNBQU0rQixTQUFBLE1BQWV2QyxJQUFJSyxJQUFJb0IsTUFBTTtBQUVuQyxpQkFBQWUsS0FBQSxHQUFBQyxrQkFBdUJDLE9BQU9DLFFBQVFKLE9BQU8sT0FBTyxFQUFFSyxLQUFLLEdBQUFKLEtBQUFDLGdCQUFBSSxRQUFBTCxNQUFHO0FBQTlELGdCQUFXLENBQUEsRUFBR00sSUFBSSxJQUFBTCxnQkFBQUQsRUFBQTtBQUNqQixjQUFLTSxLQUErQixVQUFVLE1BQU0sSUFBSTtBQUN2RDtVQUNEO0FBQ0FWLG1CQUFTO1FBQ1Y7TUFDRCxDQUFBO0FBQUEsYUFBQSxTQWRNRixzQkFBQWEsSUFBQTtBQUFBLGVBQUFaLE1BQUFILE1BQUEsTUFBQUMsU0FBQTtNQUFBO0lBQUEsRUFBQTtBQWdCTixVQUFNZSxhQUFBLDJCQUFBO0FBQUEsVUFBQUMsUUFBQW5ELGtCQUFhLGFBQTJCO0FBQzdDLGNBQU1vRCxNQUFBLHVEQUFBaEQsT0FBcUVDLEdBQUdnQixLQUFLQyxhQUFhWixRQUFRLENBQUM7QUFDekdHLHlCQUFpQkMsVUFBVTtBQUMzQkQsNEJBQUEsR0FBbUJoQixtQkFBQW1CLFVBQ2xCO1VBQ0NDLE1BQU07VUFDTkMsVUFBVTtRQUNYLEdBQ0EsTUFDRDtBQUNBLGNBQU1tQyxlQUFnQztVQUNyQ3pCLFFBQVE7VUFDUjBCLFVBQVU1QztVQUNWNkMsU0FBUztVQUNUQyxnQkFBZ0I7VUFDaEJKO1FBQ0Q7QUFDQSxjQUFNbEQsSUFBSStCLGtCQUFrQm9CLFlBQVk7QUFDeEN0QyxvQkFBWTtNQUNiLENBQUE7QUFBQSxhQUFBLFNBbkJNbUMsY0FBQTtBQUFBLGVBQUFDLE1BQUFqQixNQUFBLE1BQUFDLFNBQUE7TUFBQTtJQUFBLEVBQUE7QUFxQk4sUUFBSTlCLEdBQUdDLE9BQU9DLElBQUksbUJBQW1CLE1BQU0sS0FBSyxDQUFDa0QsU0FBU0MsY0FBYyxtQkFBbUIsR0FBRztBQUM3RixVQUFJQyxTQUFpQjtBQUNyQkEsZUFBU0YsU0FBU0csaUJBQWlCLDhDQUE4QyxFQUFFLENBQUMsSUFBSSxXQUFXO0FBQ25HLFlBQU1yQyxXQUFXb0MsTUFBTTtBQUN2QixZQUFNRSxjQUE4QjtRQUNuQ2pDLFFBQVE7UUFDUlcsTUFBTTtRQUNOQyxRQUFROUI7TUFDVDtBQUNBLFlBQU1vRCxPQUFBLE1BQWE1RCxJQUFJSyxJQUFJc0QsV0FBVztBQUV0QyxlQUFBRSxNQUFBLEdBQUFDLG1CQUEyQnBCLE9BQU9DLFFBQVFpQixLQUFLLE9BQU8sRUFBRWhCLEtBQUssR0FBQWlCLE1BQUFDLGlCQUFBakIsUUFBQWdCLE9BQUc7QUFBaEUsY0FBVyxDQUFBLEVBQUdFLFFBQVEsSUFBQUQsaUJBQUFELEdBQUE7QUFDckIsWUFBS0UsU0FBbUMsU0FBUyxNQUFNLElBQUk7QUFDMUQsZ0JBQU0xQyxXQUFXYixRQUFRO0FBQ3pCLGVBQUswQixxQkFBcUIsTUFBTTtBQUMvQixpQkFBS2MsV0FBVztVQUNqQixDQUFDO1FBQ0YsT0FBTztBQUNOLGVBQUtkLHFCQUFxQixNQUFNO0FBQy9CLGlCQUFLYyxXQUFXO1VBQ2pCLENBQUM7UUFDRjtNQUNEO0lBQ0QsT0FBTztBQUNOLFlBQU0zQixXQUFXO0FBQ2pCUixrQkFBWTtJQUNiO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0F4SE1qQixlQUFBO0FBQUEsV0FBQUMsS0FBQW1DLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQTBITixJQUFJK0IsUUFBZ0I7QUFDcEIsSUFBSTdELEdBQUdDLE9BQU9DLElBQUksbUJBQW1CLE1BQU0sS0FBSyxDQUFDa0QsU0FBU0MsY0FBYyxtQkFBbUIsR0FBRztBQUM3RlEsVUFBUVQsU0FBU0csaUJBQWlCLDhDQUE4QyxFQUFFLENBQUMsSUFBSSxXQUFXO0FBQ25HLE9BQU87QUFDTk0sVUFBUTtBQUNUO0FBRUEsSUFBTUMsY0FBc0JWLFNBQVNHLGlCQUFpQixpQkFBaUIsRUFBRSxDQUFDLElBQUksVUFBVTtBQUN4RixJQUFNUSxZQUFtQ1gsU0FBU0MsY0FBYyxhQUFhLElBQUksZUFBZTtBQUNoRyxJQUFNVyxVQUFnQ2hFLEdBQUdnQixLQUFLaUQsZUFDN0NGLFdBQ0EsS0FBQSxLQUFBaEUsT0FDS0MsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUIsTUFBTSxJQUFLMkQsVUFBVSxLQUFLLE9BQUEsTUFBQTlELE9BQWE4RCxPQUFLLEdBQUEsSUFBQSxHQUFBOUQsT0FBVStELFdBQVcsQ0FBRSxHQUN6RyxVQUNEO0FBRUEsSUFBSUUsU0FBUztBQUNaNUQsSUFBRTRELE9BQU8sRUFBRUUsR0FBRyxTQUFTLE1BQU07QUFDNUIsU0FBS3pFLFlBQVk7RUFDbEIsQ0FBQztBQUNGOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJxdWlja0ltcG9ydCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIl8kYm9keSRmaW5kJCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiRib2R5IiwgIiQiLCAicGFnZU5hbWUiLCAiZmluZCIsICJ0ZXh0Q29udGVudCIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJyZWZyZXNoUGFnZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAidXRpbCIsICJyYXd1cmxlbmNvZGUiLCAiaW1wb3J0UGFnZSIsICJfcmVmMiIsICJpd3ByZWZpeCIsICJzdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiYXNzaWdua25vd251c2VycyIsICJpbnRlcndpa2lwYWdlIiwgImludGVyd2lraXByZWZpeCIsICJpbnRlcndpa2lzb3VyY2UiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgIl9yZWYzIiwgImNhbGxiYWNrIiwgInByb3AiLCAidGl0bGVzIiwgInJlc3VsdCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAicGFnZXMiLCAibGVuZ3RoIiwgImluZm8iLCAiX3giLCAidXBsb2FkRmlsZSIsICJfcmVmNCIsICJ1cmwiLCAidXBsb2FkUGFyYW1zIiwgImZpbGVuYW1lIiwgImNvbW1lbnQiLCAiaWdub3Jld2FybmluZ3MiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJzb3VyY2UiLCAicXVlcnlTZWxlY3RvckFsbCIsICJxdWVyeVBhcmFtcyIsICJkYXRhIiwgIl9pMiIsICJfT2JqZWN0JGVudHJpZXMyIiwgInBhZ2VpbmZvIiwgImxhYmVsIiwgImJ1dHRvbkxhYmVsIiwgInBvcnRsZXRJZCIsICJlbGVtZW50IiwgImFkZFBvcnRsZXRMaW5rIiwgIm9uIl0KfQo=

})();

/* </nowiki> */
