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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RyYW5zbGF0ZWRQYWdlL29wdGlvbnMuanNvbiIsICJzcmMvVHJhbnNsYXRlZFBhZ2UvbW9kdWxlcy9hcGkudHMiLCAic3JjL1RyYW5zbGF0ZWRQYWdlL21vZHVsZXMvdXRpbC50cyIsICJzcmMvVHJhbnNsYXRlZFBhZ2UvbW9kdWxlcy9hZGRUcmFuc2xhdGVkUGFnZVRlbXBsYXRlLnRzIiwgInNyYy9UcmFuc2xhdGVkUGFnZS9UcmFuc2xhdGVkUGFnZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgVHJhbnNsYXRlZFBhZ2UvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBxdWVyeVBhZ2UgPSBhc3luYyAocGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcykgPT4ge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZWRpdFBhZ2UgPSBhc3luYyAocGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcykgPT4ge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQge3F1ZXJ5UGFnZSwgZWRpdFBhZ2V9O1xuIiwgImltcG9ydCB7ZWRpdFBhZ2UsIHF1ZXJ5UGFnZX0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgYWRkVHJhbnNsYXRlZFBhZ2VUZW1wbGF0ZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgdGFyZ2V0VGl0bGUgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7IC8vIOW9k+WJjemhtemdouagh+mimFxuXHRjb25zdCBhcnRpY2xlID0gbmV3IG13LlRpdGxlKHRhcmdldFRpdGxlKTtcblx0Y29uc3QgdGFsayA9IG5ldyBtdy5UaXRsZShhcnRpY2xlLmdldE1haW5UZXh0KCksIGFydGljbGUuZ2V0TmFtZXNwYWNlSWQoKSArIDEpOyAvLyDojrflj5blr7nlupTnmoTorqjorrrpobVcblxuXHQvLyDlvLnlh7rlr7nor53moYbojrflj5bnlKjmiLfovpPlhaVcblx0Y29uc3Qgc291cmNlTGFuZ3VhZ2UgPSBwcm9tcHQoJ+ivt+i+k+WFpeadpea6kOivreiogO+8iOS+i+Wmgnpo77yb5b+F5aGr77yJ77yaJyk7XG5cdGlmICghc291cmNlTGFuZ3VhZ2UpIHtcblx0XHRhbGVydCgn5p2l5rqQ6K+t6KiA5LiN6IO95Li656m677yBJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc291cmNlVGl0bGUgPSBwcm9tcHQoJ+ivt+i+k+WFpeadpea6kOmhtemdou+8iOS+i+Wmgummlumhte+8m+W/heWhq++8ie+8micpO1xuXHRpZiAoIXNvdXJjZVRpdGxlKSB7XG5cdFx0YWxlcnQoJ+adpea6kOmhtemdouS4jeiDveS4uuepuu+8gScpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHZlcnNpb24gPSBwcm9tcHQoJ+ivt+i+k+WFpeadpea6kOmhtemdoueahOeJueWumueJiOacrOWPt++8iOS+i+Wmgu+8mjEyMzQ1Njc477yJ77yaJyk7XG5cblx0Y29uc3QgaW5zZXJ0dmVyc2lvbiA9IHByb21wdCgn6K+36L6T5YWl5pys5Zyw57+76K+R5ZCO55qE54m55a6a54mI5pys5Y+377yI5L6L5aaC77yaMTIzNDU2NzjvvInvvJonKTtcblxuXHRjb25zdCB0ZW1wbGF0ZSA9IGB7e1RyYW5zbGF0ZWQgcGFnZXwke3NvdXJjZUxhbmd1YWdlfXwke3NvdXJjZVRpdGxlfXx2ZXJzaW9uPSR7dmVyc2lvbn18aW5zZXJ0dmVyc2lvbj0ke2luc2VydHZlcnNpb259fX1cXG5gO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcXVlcnlQYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHR0aXRsZXM6IHRhbGsuZ2V0UHJlZml4ZWRUZXh0KCksXG5cdFx0XHRydnByb3A6IFsndGltZXN0YW1wJywgJ2NvbnRlbnQnXSxcblx0XHRcdGluZGV4cGFnZWlkczogdHJ1ZSxcblx0XHRcdGN1cnRpbWVzdGFtcDogdHJ1ZSxcblx0XHR9O1xuXG5cdFx0Y29uc3QgcXVlcnlSZXNwb25zZSA9IGF3YWl0IHF1ZXJ5UGFnZShxdWVyeVBhcmFtcyk7XG5cblx0XHRpZiAoIXF1ZXJ5UmVzcG9uc2VbJ3F1ZXJ5J10gfHwgIXF1ZXJ5UmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdGFsZXJ0KCfml6Dms5Xojrflj5borqjorrrpobXkv6Hmga/vvIzor7fnqI3lkI7ph43or5XjgIInKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBbcGFnZUlkXSA9IHF1ZXJ5UmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZWlkcztcblx0XHRjb25zdCByZXZpc2lvbiA9IChxdWVyeVJlc3BvbnNlWydxdWVyeSddLnBhZ2VzW3BhZ2VJZF0ucmV2aXNpb25zIHx8IFtdKVswXSB8fCB7fTtcblx0XHRjb25zdCB0ZXh0ID0gcmV2aXNpb25bJyonXSBhcyBzdHJpbmc7XG5cdFx0Y29uc3Qgc3RhcnR0aW1lc3RhbXAgPSBxdWVyeVJlc3BvbnNlWydjdXJ0aW1lc3RhbXAnXTtcblx0XHRjb25zdCBzdW1tYXJ5ID1cblx0XHRcdCfkuLrlr7zlhaXpobXpnaLmoIforrB7e1tbVGVtcGxhdGU6VHJhbnNsYXRlZCBwYWdlfFRyYW5zbGF0ZWQgcGFnZV1dfX3mqKHmnb8gKFtbTWVkaWFXaWtpOkdhZGdldC1UcmFuc2xhdGVkUGFnZS5qc3x0cC5qc11dKSc7XG5cdFx0Y29uc3QgZWRpdFBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdHRpdGxlOiB0YWxrLmdldFByZWZpeGVkVGV4dCgpLFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdHN0YXJ0dGltZXN0YW1wLFxuXHRcdH07XG5cblx0XHRpZiAodGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyDlpoLmnpzorqjorrrpobXkuI3lrZjlnKhcblx0XHRcdGVkaXRQYXJhbXMuY3JlYXRlb25seSA9IHRydWU7XG5cdFx0XHRlZGl0UGFyYW1zLnRleHQgPSB0ZW1wbGF0ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8g5aaC5p6c6K6o6K666aG15bey5a2Y5ZyoXG5cdFx0XHRlZGl0UGFyYW1zLmJhc2V0aW1lc3RhbXAgPSByZXZpc2lvbi50aW1lc3RhbXA7XG5cdFx0XHRlZGl0UGFyYW1zLnRleHQgPSB0ZW1wbGF0ZSArIHRleHQucmVwbGFjZSgvXFx7XFx7XFxzKlRyYW5zbGF0ZWQgcGFnZVxccypcXHxbXnt9XStcXH1cXH1cXG4/L2csICcnKTtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZWRpdFJlc3BvbnNlID0gYXdhaXQgZWRpdFBhZ2UoZWRpdFBhcmFtcyk7XG5cblx0XHRcdGNvbnN0IGVkaXRSZXN1bHQgPSBlZGl0UmVzcG9uc2VbJ2VkaXQnXTtcblx0XHRcdGlmIChlZGl0UmVzdWx0ICYmIGVkaXRSZXN1bHQucmVzdWx0ID09PSAnU3VjY2VzcycpIHtcblx0XHRcdFx0YWxlcnQoYOaIkOWKn+S4uiR7dGFsay5nZXRQcmVmaXhlZFRleHQoKX3mt7vliqDkuoZ7e1RyYW5zbGF0ZWQgcGFnZX195qih5p2/77yBYCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhbGVydCgn5re75Yqg5qih5p2/5aSx6LSl77yM6K+356iN5ZCO6YeN6K+V44CCJyk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRhbGVydCgn5re75Yqg5qih5p2/5aSx6LSl77yM6K+35qOA5p+l572R57uc6L+e5o6l5oiW5p2D6ZmQ6K6+572u44CCJyk7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHRhbGVydCgn5peg5rOV6I635Y+W6K6o6K666aG15L+h5oGv77yM6K+356iN5ZCO6YeN6K+V44CCJyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkVHJhbnNsYXRlZFBhZ2VUZW1wbGF0ZX07XG4iLCAiaW1wb3J0IHthZGRUcmFuc2xhdGVkUGFnZVRlbXBsYXRlfSBmcm9tICcuL21vZHVsZXMvYWRkVHJhbnNsYXRlZFBhZ2VUZW1wbGF0ZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbi8vIOa3u+WKoOS4gOS4quaMiemSruWIsOW3peWFt+agj+S7peS+v+aJi+WKqOinpuWPkeiEmuacrFxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBpbml0VFAoKTogdm9pZCB7XG5cdC8vIOWPquWcqOmdnuiuqOiuuumhteaYvuekuuaMiemSrlxuXHRpZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSAlIDIgIT09IDAgfHwgbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gLTEpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0TGluayA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0J3AtY2FjdGlvbnMnLCAvLyDlt6XlhbfmoI/kvY3nva5cblx0XHQnIycsIC8vIOmTvuaOpeWcsOWdgFxuXHRcdCfmt7vliqDlr7zlhaXmqKHmnb8nLCAvLyDmjInpkq7lkI3np7Bcblx0XHQnYWRkLXRyYW5zbGF0ZWQtcGFnZScsIC8vIElEXG5cdFx0J+S4uuW9k+WJjemhtemdoueahOiuqOiuuumhtea3u+WKoHt7VHJhbnNsYXRlZCBwYWdlfX3mqKHmnb8nIC8vIOaPkOekuuaWh+Wtl1xuXHQpO1xuXG5cdGlmIChwb3J0bGV0TGluaykge1xuXHRcdCQocG9ydGxldExpbmspLm9uKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR2b2lkIGFkZFRyYW5zbGF0ZWRQYWdlVGVtcGxhdGUoKTtcblx0XHR9KTtcblx0fVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsa0JBQUFDLE9BQW9DTCxPQUFPLENBQUU7O0FDRGpFLElBQU1NLFlBQUEsNEJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBWSxXQUFPQyxRQUFvQztBQUM1RCxVQUFNQyxXQUFBLE1BQWlCUCxJQUFJUSxJQUFJRixNQUFNO0FBQ3JDLFdBQU9DO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FITUosV0FBQU0sSUFBQTtBQUFBLFdBQUFMLEtBQUFNLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsR0FBQTtBQUtOLElBQU1DLFdBQUEsNEJBQUE7QUFBQSxNQUFBQyxRQUFBUixrQkFBVyxXQUFPQyxRQUE4QjtBQUNyRCxVQUFNQyxXQUFBLE1BQWlCUCxJQUFJYyxrQkFBa0JSLE1BQU07QUFDbkQsV0FBT0M7RUFDUixDQUFBO0FBQUEsU0FBQSxTQUhNSyxVQUFBRyxLQUFBO0FBQUEsV0FBQUYsTUFBQUgsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBOztBQ0xOLElBQU1LLDRCQUFBLDRCQUFBO0FBQUEsTUFBQUMsUUFBQVosa0JBQTRCLGFBQTJCO0FBQzVELFVBQU1hLGNBQWNDLEdBQUdDLE9BQU9aLElBQUksWUFBWTtBQUM5QyxVQUFNYSxVQUFVLElBQUlGLEdBQUdHLE1BQU1KLFdBQVc7QUFDeEMsVUFBTUssT0FBTyxJQUFJSixHQUFHRyxNQUFN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IFsidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgInF1ZXJ5UGFnZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhcmFtcyIsICJyZXNwb25zZSIsICJnZXQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImVkaXRQYWdlIiwgIl9yZWYyIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgIl94MiIsICJhZGRUcmFuc2xhdGVkUGFnZVRlbXBsYXRlIiwgIl9yZWYzIiwgInRhcmdldFRpdGxlIiwgIm13IiwgImNvbmZpZyIsICJhcnRpY2xlIiwgIlRpdGxlIiwgInRhbGsiLCAiZ2V0TWFpblRleHQiLCAiZ2V0TmFtZXNwYWNlSWQiLCAic291cmNlTGFuZ3VhZ2UiLCAicHJvbXB0IiwgImFsZXJ0IiwgInNvdXJjZVRpdGxlIiwgInZlcnNpb24yIiwgImluc2VydHZlcnNpb24iLCAidGVtcGxhdGUiLCAicXVlcnlQYXJhbXMiLCAiYWN0aW9uIiwgInByb3AiLCAidGl0bGVzIiwgImdldFByZWZpeGVkVGV4dCIsICJydnByb3AiLCAiaW5kZXhwYWdlaWRzIiwgImN1cnRpbWVzdGFtcCIsICJxdWVyeVJlc3BvbnNlIiwgInBhZ2VzIiwgInBhZ2VJZCIsICJwYWdlaWRzIiwgInJldmlzaW9uIiwgInJldmlzaW9ucyIsICJ0ZXh0IiwgInN0YXJ0dGltZXN0YW1wIiwgInN1bW1hcnkiLCAiZWRpdFBhcmFtcyIsICJ0aXRsZSIsICJjcmVhdGVvbmx5IiwgImJhc2V0aW1lc3RhbXAiLCAidGltZXN0YW1wIiwgInJlcGxhY2UiLCAiZWRpdFJlc3BvbnNlIiwgImVkaXRSZXN1bHQiLCAicmVzdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRCb2R5IiwgInRoZW4iLCAiaW5pdFRQIiwgInBvcnRsZXRMaW5rIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiJCIsICJvbiIsICJlIiwgInByZXZlbnREZWZhdWx0Il0KfQo=
