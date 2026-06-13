/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://www.qiuwenbaike.cn/wiki/User:PB2008/tp.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/TranslatedPage}
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

// dist/TranslatedPage/TranslatedPage.js
//! src/TranslatedPage/options.json
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var version = "1.0";
//! src/TranslatedPage/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("TranslatedPage/".concat(version));
//! src/TranslatedPage/modules/util.ts
var queryPage = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (params) {
    const response = yield api.get(params);
    return response;
  });
  return function queryPage2(_x) {
    return _ref.apply(this, arguments);
  };
})();
var editPage = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (params) {
    const response = yield api.postWithEditToken(params);
    return response;
  });
  return function editPage2(_x2) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/TranslatedPage/modules/addTranslatedPageTemplate.ts
var addTranslatedPageTemplate = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* () {
    const targetTitle = mw.config.get("wgPageName");
    const article = new mw.Title(targetTitle);
    const talk = new mw.Title(article.getMainText(), article.getNamespaceId() + 1);
    const sourceLanguage = prompt("请输入来源语言（例如zh；必填）：");
    if (!sourceLanguage) {
      alert("来源语言不能为空！");
      return;
    }
    const sourceTitle = prompt("请输入来源页面（例如首页；必填）：");
    if (!sourceTitle) {
      alert("来源页面不能为空！");
      return;
    }
    const version2 = prompt("请输入来源页面的特定版本号（例如：12345678）：");
    const insertversion = prompt("请输入本地翻译后的特定版本号（例如：12345678）：");
    const template = "{{Translated page|".concat(sourceLanguage, "|").concat(sourceTitle, "|version=").concat(version2, "|insertversion=").concat(insertversion, "}}\n");
    try {
      const queryParams = {
        action: "query",
        prop: "revisions",
        titles: talk.getPrefixedText(),
        rvprop: ["timestamp", "content"],
        indexpageids: true,
        curtimestamp: true
      };
      const queryResponse = yield queryPage(queryParams);
      if (!queryResponse["query"] || !queryResponse["query"].pages) {
        alert("无法获取讨论页信息，请稍后重试。");
        return;
      }
      const [pageId] = queryResponse["query"].pageids;
      const revision = (queryResponse["query"].pages[pageId].revisions || [])[0] || {};
      const text = revision["*"];
      const starttimestamp = queryResponse["curtimestamp"];
      const summary = "为导入页面标记{{[[Template:Translated page|Translated page]]}}模板 ([[MediaWiki:Gadget-TranslatedPage.js|tp.js]])";
      const editParams = {
        action: "edit",
        title: talk.getPrefixedText(),
        summary,
        starttimestamp
      };
      if (text === void 0) {
        editParams.createonly = true;
        editParams.text = template;
      } else {
        editParams.basetimestamp = revision.timestamp;
        editParams.text = template + text.replace(/\{\{\s*Translated page\s*\|[^{}]+\}\}\n?/g, "");
      }
      try {
        const editResponse = yield editPage(editParams);
        const editResult = editResponse["edit"];
        if (editResult && editResult.result === "Success") {
          alert("成功为".concat(talk.getPrefixedText(), "添加了{{Translated page}}模板！"));
          location.reload();
        } else {
          alert("添加模板失败，请稍后重试。");
        }
      } catch {
        alert("添加模板失败，请检查网络连接或权限设置。");
      }
    } catch {
      alert("无法获取讨论页信息，请稍后重试。");
    }
  });
  return function addTranslatedPageTemplate2() {
    return _ref3.apply(this, arguments);
  };
})();
//! src/TranslatedPage/TranslatedPage.ts
var import_ext_gadget2 = require("ext.gadget.Util");
void (0, import_ext_gadget2.getBody)().then(function initTP() {
  if (mw.config.get("wgNamespaceNumber") % 2 !== 0 || mw.config.get("wgNamespaceNumber") === -1) {
    return;
  }
  const portletLink = mw.util.addPortletLink(
    "p-cactions",
    // 工具栏位置
    "#",
    // 链接地址
    "添加导入模板",
    // 按钮名称
    "add-translated-page",
    // ID
    "为当前页面的讨论页添加{{Translated page}}模板"
    // 提示文字
  );
  if (portletLink) {
    $(portletLink).on("click", (e) => {
      e.preventDefault();
      void addTranslatedPageTemplate();
    });
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RyYW5zbGF0ZWRQYWdlL29wdGlvbnMuanNvbiIsICJzcmMvVHJhbnNsYXRlZFBhZ2UvbW9kdWxlcy9hcGkudHMiLCAic3JjL1RyYW5zbGF0ZWRQYWdlL21vZHVsZXMvdXRpbC50cyIsICJzcmMvVHJhbnNsYXRlZFBhZ2UvbW9kdWxlcy9hZGRUcmFuc2xhdGVkUGFnZVRlbXBsYXRlLnRzIiwgInNyYy9UcmFuc2xhdGVkUGFnZS9UcmFuc2xhdGVkUGFnZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgVHJhbnNsYXRlZFBhZ2UvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBxdWVyeVBhZ2UgPSBhc3luYyAocGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcykgPT4ge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZWRpdFBhZ2UgPSBhc3luYyAocGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcykgPT4ge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQge3F1ZXJ5UGFnZSwgZWRpdFBhZ2V9O1xuIiwgImltcG9ydCB7ZWRpdFBhZ2UsIHF1ZXJ5UGFnZX0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgYWRkVHJhbnNsYXRlZFBhZ2VUZW1wbGF0ZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgdGFyZ2V0VGl0bGUgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7IC8vIOW9k+WJjemhtemdouagh+mimFxuXHRjb25zdCBhcnRpY2xlID0gbmV3IG13LlRpdGxlKHRhcmdldFRpdGxlKTtcblx0Y29uc3QgdGFsayA9IG5ldyBtdy5UaXRsZShhcnRpY2xlLmdldE1haW5UZXh0KCksIGFydGljbGUuZ2V0TmFtZXNwYWNlSWQoKSArIDEpOyAvLyDojrflj5blr7nlupTnmoTorqjorrrpobVcblxuXHQvLyDlvLnlh7rlr7nor53moYbojrflj5bnlKjmiLfovpPlhaVcblx0Y29uc3Qgc291cmNlTGFuZ3VhZ2UgPSBwcm9tcHQoJ+ivt+i+k+WFpeadpea6kOivreiogO+8iOS+i+Wmgnpo77yb5b+F5aGr77yJ77yaJyk7XG5cdGlmICghc291cmNlTGFuZ3VhZ2UpIHtcblx0XHRhbGVydCgn5p2l5rqQ6K+t6KiA5LiN6IO95Li656m677yBJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc291cmNlVGl0bGUgPSBwcm9tcHQoJ+ivt+i+k+WFpeadpea6kOmhtemdou+8iOS+i+Wmgummlumhte+8m+W/heWhq++8ie+8micpO1xuXHRpZiAoIXNvdXJjZVRpdGxlKSB7XG5cdFx0YWxlcnQoJ+adpea6kOmhtemdouS4jeiDveS4uuepuu+8gScpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHZlcnNpb24gPSBwcm9tcHQoJ+ivt+i+k+WFpeadpea6kOmhtemdoueahOeJueWumueJiOacrOWPt++8iOS+i+Wmgu+8mjEyMzQ1Njc477yJ77yaJyk7XG5cblx0Y29uc3QgaW5zZXJ0dmVyc2lvbiA9IHByb21wdCgn6K+36L6T5YWl5pys5Zyw57+76K+R5ZCO55qE54m55a6a54mI5pys5Y+377yI5L6L5aaC77yaMTIzNDU2NzjvvInvvJonKTtcblxuXHRjb25zdCB0ZW1wbGF0ZSA9IGB7e1RyYW5zbGF0ZWQgcGFnZXwke3NvdXJjZUxhbmd1YWdlfXwke3NvdXJjZVRpdGxlfXx2ZXJzaW9uPSR7dmVyc2lvbn18aW5zZXJ0dmVyc2lvbj0ke2luc2VydHZlcnNpb259fX1cXG5gO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcXVlcnlQYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHR0aXRsZXM6IHRhbGsuZ2V0UHJlZml4ZWRUZXh0KCksXG5cdFx0XHRydnByb3A6IFsndGltZXN0YW1wJywgJ2NvbnRlbnQnXSxcblx0XHRcdGluZGV4cGFnZWlkczogdHJ1ZSxcblx0XHRcdGN1cnRpbWVzdGFtcDogdHJ1ZSxcblx0XHR9O1xuXG5cdFx0Y29uc3QgcXVlcnlSZXNwb25zZSA9IGF3YWl0IHF1ZXJ5UGFnZShxdWVyeVBhcmFtcyk7XG5cblx0XHRpZiAoIXF1ZXJ5UmVzcG9uc2VbJ3F1ZXJ5J10gfHwgIXF1ZXJ5UmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdGFsZXJ0KCfml6Dms5Xojrflj5borqjorrrpobXkv6Hmga/vvIzor7fnqI3lkI7ph43or5XjgIInKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBbcGFnZUlkXSA9IHF1ZXJ5UmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZWlkcztcblx0XHRjb25zdCByZXZpc2lvbiA9IChxdWVyeVJlc3BvbnNlWydxdWVyeSddLnBhZ2VzW3BhZ2VJZF0ucmV2aXNpb25zIHx8IFtdKVswXSB8fCB7fTtcblx0XHRjb25zdCB0ZXh0ID0gcmV2aXNpb25bJyonXSBhcyBzdHJpbmc7XG5cdFx0Y29uc3Qgc3RhcnR0aW1lc3RhbXAgPSBxdWVyeVJlc3BvbnNlWydjdXJ0aW1lc3RhbXAnXTtcblx0XHRjb25zdCBzdW1tYXJ5ID1cblx0XHRcdCfkuLrlr7zlhaXpobXpnaLmoIforrB7e1tbVGVtcGxhdGU6VHJhbnNsYXRlZCBwYWdlfFRyYW5zbGF0ZWQgcGFnZV1dfX3mqKHmnb8gKFtbTWVkaWFXaWtpOkdhZGdldC1UcmFuc2xhdGVkUGFnZS5qc3x0cC5qc11dKSc7XG5cdFx0Y29uc3QgZWRpdFBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdHRpdGxlOiB0YWxrLmdldFByZWZpeGVkVGV4dCgpLFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdHN0YXJ0dGltZXN0YW1wLFxuXHRcdH07XG5cblx0XHRpZiAodGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyDlpoLmnpzorqjorrrpobXkuI3lrZjlnKhcblx0XHRcdGVkaXRQYXJhbXMuY3JlYXRlb25seSA9IHRydWU7XG5cdFx0XHRlZGl0UGFyYW1zLnRleHQgPSB0ZW1wbGF0ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8g5aaC5p6c6K6o6K666aG15bey5a2Y5ZyoXG5cdFx0XHRlZGl0UGFyYW1zLmJhc2V0aW1lc3RhbXAgPSByZXZpc2lvbi50aW1lc3RhbXA7XG5cdFx0XHRlZGl0UGFyYW1zLnRleHQgPSB0ZW1wbGF0ZSArIHRleHQucmVwbGFjZSgvXFx7XFx7XFxzKlRyYW5zbGF0ZWQgcGFnZVxccypcXHxbXnt9XStcXH1cXH1cXG4/L2csICcnKTtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZWRpdFJlc3BvbnNlID0gYXdhaXQgZWRpdFBhZ2UoZWRpdFBhcmFtcyk7XG5cblx0XHRcdGNvbnN0IGVkaXRSZXN1bHQgPSBlZGl0UmVzcG9uc2VbJ2VkaXQnXTtcblx0XHRcdGlmIChlZGl0UmVzdWx0ICYmIGVkaXRSZXN1bHQucmVzdWx0ID09PSAnU3VjY2VzcycpIHtcblx0XHRcdFx0YWxlcnQoYOaIkOWKn+S4uiR7dGFsay5nZXRQcmVmaXhlZFRleHQoKX3mt7vliqDkuoZ7e1RyYW5zbGF0ZWQgcGFnZX195qih5p2/77yBYCk7XG5cdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpOyAvLyDliLfmlrDpobXpnaLku6XmmL7npLrmm7TmlrDlhoXlrrlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFsZXJ0KCfmt7vliqDmqKHmnb/lpLHotKXvvIzor7fnqI3lkI7ph43or5XjgIInKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdGFsZXJ0KCfmt7vliqDmqKHmnb/lpLHotKXvvIzor7fmo4Dmn6XnvZHnu5zov57mjqXmiJbmnYPpmZDorr7nva7jgIInKTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdGFsZXJ0KCfml6Dms5Xojrflj5borqjorrrpobXkv6Hmga/vvIzor7fnqI3lkI7ph43or5XjgIInKTtcblx0fVxufTtcblxuZXhwb3J0IHthZGRUcmFuc2xhdGVkUGFnZVRlbXBsYXRlfTtcbiIsICJpbXBvcnQge2FkZFRyYW5zbGF0ZWRQYWdlVGVtcGxhdGV9IGZyb20gJy4vbW9kdWxlcy9hZGRUcmFuc2xhdGVkUGFnZVRlbXBsYXRlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuLy8g5re75Yqg5LiA5Liq5oyJ6ZKu5Yiw5bel5YW35qCP5Lul5L6/5omL5Yqo6Kem5Y+R6ISa5pysXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGluaXRUUCgpOiB2b2lkIHtcblx0Ly8g5Y+q5Zyo6Z2e6K6o6K666aG15pi+56S65oyJ6ZKuXG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpICUgMiAhPT0gMCB8fCBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSAtMSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRMaW5rID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHQncC1jYWN0aW9ucycsIC8vIOW3peWFt+agj+S9jee9rlxuXHRcdCcjJywgLy8g6ZO+5o6l5Zyw5Z2AXG5cdFx0J+a3u+WKoOWvvOWFpeaooeadvycsIC8vIOaMiemSruWQjeensFxuXHRcdCdhZGQtdHJhbnNsYXRlZC1wYWdlJywgLy8gSURcblx0XHQn5Li65b2T5YmN6aG16Z2i55qE6K6o6K666aG15re75Yqge3tUcmFuc2xhdGVkIHBhZ2V9feaooeadvycgLy8g5o+Q56S65paH5a2XXG5cdCk7XG5cblx0aWYgKHBvcnRsZXRMaW5rKSB7XG5cdFx0JChwb3J0bGV0TGluaykub24oJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHZvaWQgYWRkVHJhbnNsYXRlZFBhZ2VUZW1wbGF0ZSgpO1xuXHRcdH0pO1xuXHR9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsVUFBVzs7QUNBWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxrQkFBQUMsT0FBb0NMLE9BQU8sQ0FBRTs7QUNEakUsSUFBTU0sWUFBQSw0QkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFZLFdBQU9DLFFBQW9DO0FBQzVELFVBQU1DLFdBQUEsTUFBaUJQLElBQUlRLElBQUlGLE1BQU07QUFDckMsV0FBT0M7RUFDUixDQUFBO0FBQUEsU0FBQSxTQUhNSixXQUFBTSxJQUFBO0FBQUEsV0FBQUwsS0FBQU0sTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBO0FBS04sSUFBTUMsV0FBQSw0QkFBQTtBQUFBLE1BQUFDLFFBQUFSLGtCQUFXLFdBQU9DLFFBQThCO0FBQ3JELFVBQU1DLFdBQUEsTUFBaUJQLElBQUljLGtCQUFrQlIsTUFBTTtBQUNuRCxXQUFPQztFQUNSLENBQUE7QUFBQSxTQUFBLFNBSE1LLFVBQUFHLEtBQUE7QUFBQSxXQUFBRixNQUFBSCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7O0FDTE4sSUFBTUssNEJBQUEsNEJBQUE7QUFBQSxNQUFBQyxRQUFBWixrQkFBNEIsYUFBMkI7QUFDNUQsVUFBTWEsY0FBY0MsR0FBR0MsT0FBT1osSUFBSSxZQUFZO0FBQzlDLFVB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QVVDLE9BQU07QUFDakNBLFFBQUVDLGVBQWU7QUFDakIsV0FBS3ZELDBCQUEwQjtJQUNoQyxDQUFDO0VBQ0Y7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAicXVlcnlQYWdlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFyYW1zIiwgInJlc3BvbnNlIiwgImdldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZWRpdFBhZ2UiLCAiX3JlZjIiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiX3gyIiwgImFkZFRyYW5zbGF0ZWRQYWdlVGVtcGxhdGUiLCAiX3JlZjMiLCAidGFyZ2V0VGl0bGUiLCAibXciLCAiY29uZmlnIiwgImFydGljbGUiLCAiVGl0bGUiLCAidGFsayIsICJnZXRNYWluVGV4dCIsICJnZXROYW1lc3BhY2VJZCIsICJzb3VyY2VMYW5ndWFnZSIsICJwcm9tcHQiLCAiYWxlcnQiLCAic291cmNlVGl0bGUiLCAidmVyc2lvbjIiLCAiaW5zZXJ0dmVyc2lvbiIsICJ0ZW1wbGF0ZSIsICJxdWVyeVBhcmFtcyIsICJhY3Rpb24iLCAicHJvcCIsICJ0aXRsZXMiLCAiZ2V0UHJlZml4ZWRUZXh0IiwgInJ2cHJvcCIsICJpbmRleHBhZ2VpZHMiLCAiY3VydGltZXN0YW1wIiwgInF1ZXJ5UmVzcG9uc2UiLCAicGFnZXMiLCAicGFnZUlkIiwgInBhZ2VpZHMiLCAicmV2aXNpb24iLCAicmV2aXNpb25zIiwgInRleHQiLCAic3RhcnR0aW1lc3RhbXAiLCAic3VtbWFyeSIsICJlZGl0UGFyYW1zIiwgInRpdGxlIiwgImNyZWF0ZW9ubHkiLCAiYmFzZXRpbWVzdGFtcCIsICJ0aW1lc3RhbXAiLCAicmVwbGFjZSIsICJlZGl0UmVzcG9uc2UiLCAiZWRpdFJlc3VsdCIsICJyZXN1bHQiLCAibG9jYXRpb24iLCAicmVsb2FkIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRCb2R5IiwgInRoZW4iLCAiaW5pdFRQIiwgInBvcnRsZXRMaW5rIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiJCIsICJvbiIsICJlIiwgInByZXZlbnREZWZhdWx0Il0KfQo=
