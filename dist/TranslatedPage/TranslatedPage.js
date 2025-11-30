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
//! src/TranslatedPage/options.json
var version = "1.0";
//! src/TranslatedPage/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("TranslatedPage/".concat(version));
//! src/TranslatedPage/modules/util.ts
var queryPage = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (params) {
    const response = yield api.get(params);
    return response;
  });
  return function queryPage2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var editPage = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (params) {
    const response = yield api.postWithEditToken(params);
    return response;
  });
  return function editPage2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/TranslatedPage/modules/addTranslatedPageTemplate.ts
var addTranslatedPageTemplate = /* @__PURE__ */ function() {
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
}();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RyYW5zbGF0ZWRQYWdlL29wdGlvbnMuanNvbiIsICJzcmMvVHJhbnNsYXRlZFBhZ2UvbW9kdWxlcy9hcGkudHMiLCAic3JjL1RyYW5zbGF0ZWRQYWdlL21vZHVsZXMvdXRpbC50cyIsICJzcmMvVHJhbnNsYXRlZFBhZ2UvbW9kdWxlcy9hZGRUcmFuc2xhdGVkUGFnZVRlbXBsYXRlLnRzIiwgInNyYy9UcmFuc2xhdGVkUGFnZS9UcmFuc2xhdGVkUGFnZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgVHJhbnNsYXRlZFBhZ2UvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBxdWVyeVBhZ2UgPSBhc3luYyAocGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcykgPT4ge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZWRpdFBhZ2UgPSBhc3luYyAocGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcykgPT4ge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQge3F1ZXJ5UGFnZSwgZWRpdFBhZ2V9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudCAqL1xuaW1wb3J0IHtlZGl0UGFnZSwgcXVlcnlQYWdlfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBhZGRUcmFuc2xhdGVkUGFnZVRlbXBsYXRlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB0YXJnZXRUaXRsZSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTsgLy8g5b2T5YmN6aG16Z2i5qCH6aKYXG5cdGNvbnN0IGFydGljbGUgPSBuZXcgbXcuVGl0bGUodGFyZ2V0VGl0bGUpO1xuXHRjb25zdCB0YWxrID0gbmV3IG13LlRpdGxlKGFydGljbGUuZ2V0TWFpblRleHQoKSwgYXJ0aWNsZS5nZXROYW1lc3BhY2VJZCgpICsgMSk7IC8vIOiOt+WPluWvueW6lOeahOiuqOiuuumhtVxuXG5cdC8vIOW8ueWHuuWvueivneahhuiOt+WPlueUqOaIt+i+k+WFpVxuXHRjb25zdCBzb3VyY2VMYW5ndWFnZSA9IHByb21wdCgn6K+36L6T5YWl5p2l5rqQ6K+t6KiA77yI5L6L5aaCemjvvJvlv4XloavvvInvvJonKTtcblx0aWYgKCFzb3VyY2VMYW5ndWFnZSkge1xuXHRcdGFsZXJ0KCfmnaXmupDor63oqIDkuI3og73kuLrnqbrvvIEnKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzb3VyY2VUaXRsZSA9IHByb21wdCgn6K+36L6T5YWl5p2l5rqQ6aG16Z2i77yI5L6L5aaC6aaW6aG177yb5b+F5aGr77yJ77yaJyk7XG5cdGlmICghc291cmNlVGl0bGUpIHtcblx0XHRhbGVydCgn5p2l5rqQ6aG16Z2i5LiN6IO95Li656m677yBJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdmVyc2lvbiA9IHByb21wdCgn6K+36L6T5YWl5p2l5rqQ6aG16Z2i55qE54m55a6a54mI5pys5Y+377yI5L6L5aaC77yaMTIzNDU2NzjvvInvvJonKTtcblxuXHRjb25zdCBpbnNlcnR2ZXJzaW9uID0gcHJvbXB0KCfor7fovpPlhaXmnKzlnLDnv7vor5HlkI7nmoTnibnlrprniYjmnKzlj7fvvIjkvovlpoLvvJoxMjM0NTY3OO+8ie+8micpO1xuXG5cdGNvbnN0IHRlbXBsYXRlID0gYHt7VHJhbnNsYXRlZCBwYWdlfCR7c291cmNlTGFuZ3VhZ2V9fCR7c291cmNlVGl0bGV9fHZlcnNpb249JHt2ZXJzaW9ufXxpbnNlcnR2ZXJzaW9uPSR7aW5zZXJ0dmVyc2lvbn19fVxcbmA7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBxdWVyeVBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdHRpdGxlczogdGFsay5nZXRQcmVmaXhlZFRleHQoKSxcblx0XHRcdHJ2cHJvcDogWyd0aW1lc3RhbXAnLCAnY29udGVudCddLFxuXHRcdFx0aW5kZXhwYWdlaWRzOiB0cnVlLFxuXHRcdFx0Y3VydGltZXN0YW1wOiB0cnVlLFxuXHRcdH07XG5cblx0XHRjb25zdCBxdWVyeVJlc3BvbnNlID0gYXdhaXQgcXVlcnlQYWdlKHF1ZXJ5UGFyYW1zKTtcblxuXHRcdGlmICghcXVlcnlSZXNwb25zZVsncXVlcnknXSB8fCAhcXVlcnlSZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0YWxlcnQoJ+aXoOazleiOt+WPluiuqOiuuumhteS/oeaBr++8jOivt+eojeWQjumHjeivleOAgicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IFtwYWdlSWRdID0gcXVlcnlSZXNwb25zZVsncXVlcnknXS5wYWdlaWRzO1xuXHRcdGNvbnN0IHJldmlzaW9uID0gKHF1ZXJ5UmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbcGFnZUlkXS5yZXZpc2lvbnMgfHwgW10pWzBdIHx8IHt9O1xuXHRcdGNvbnN0IHRleHQgPSByZXZpc2lvblsnKiddIGFzIHN0cmluZztcblx0XHRjb25zdCBzdGFydHRpbWVzdGFtcCA9IHF1ZXJ5UmVzcG9uc2VbJ2N1cnRpbWVzdGFtcCddO1xuXHRcdGNvbnN0IHN1bW1hcnkgPVxuXHRcdFx0J+S4uuWvvOWFpemhtemdouagh+iusHt7W1tUZW1wbGF0ZTpUcmFuc2xhdGVkIHBhZ2V8VHJhbnNsYXRlZCBwYWdlXV19feaooeadvyAoW1tNZWRpYVdpa2k6R2FkZ2V0LVRyYW5zbGF0ZWRQYWdlLmpzfHRwLmpzXV0pJztcblx0XHRjb25zdCBlZGl0UGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0dGl0bGU6IHRhbGsuZ2V0UHJlZml4ZWRUZXh0KCksXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdFx0c3RhcnR0aW1lc3RhbXAsXG5cdFx0fTtcblxuXHRcdGlmICh0ZXh0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIOWmguaenOiuqOiuuumhteS4jeWtmOWcqFxuXHRcdFx0ZWRpdFBhcmFtcy5jcmVhdGVvbmx5ID0gdHJ1ZTtcblx0XHRcdGVkaXRQYXJhbXMudGV4dCA9IHRlbXBsYXRlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyDlpoLmnpzorqjorrrpobXlt7LlrZjlnKhcblx0XHRcdGVkaXRQYXJhbXMuYmFzZXRpbWVzdGFtcCA9IHJldmlzaW9uLnRpbWVzdGFtcDtcblx0XHRcdGVkaXRQYXJhbXMudGV4dCA9IHRlbXBsYXRlICsgdGV4dC5yZXBsYWNlKC9cXHtcXHtcXHMqVHJhbnNsYXRlZCBwYWdlXFxzKlxcfFtee31dK1xcfVxcfVxcbj8vZywgJycpO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBlZGl0UmVzcG9uc2UgPSBhd2FpdCBlZGl0UGFnZShlZGl0UGFyYW1zKTtcblxuXHRcdFx0Y29uc3QgZWRpdFJlc3VsdCA9IGVkaXRSZXNwb25zZVsnZWRpdCddO1xuXHRcdFx0aWYgKGVkaXRSZXN1bHQgJiYgZWRpdFJlc3VsdC5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHRhbGVydChg5oiQ5Yqf5Li6JHt0YWxrLmdldFByZWZpeGVkVGV4dCgpfea3u+WKoOS6hnt7VHJhbnNsYXRlZCBwYWdlfX3mqKHmnb/vvIFgKTtcblx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7IC8vIOWIt+aWsOmhtemdouS7peaYvuekuuabtOaWsOWGheWuuVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxlcnQoJ+a3u+WKoOaooeadv+Wksei0pe+8jOivt+eojeWQjumHjeivleOAgicpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0YWxlcnQoJ+a3u+WKoOaooeadv+Wksei0pe+8jOivt+ajgOafpee9kee7nOi/nuaOpeaIluadg+mZkOiuvue9ruOAgicpO1xuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0YWxlcnQoJ+aXoOazleiOt+WPluiuqOiuuumhteS/oeaBr++8jOivt+eojeWQjumHjeivleOAgicpO1xuXHR9XG59O1xuXG5leHBvcnQge2FkZFRyYW5zbGF0ZWRQYWdlVGVtcGxhdGV9O1xuIiwgImltcG9ydCB7YWRkVHJhbnNsYXRlZFBhZ2VUZW1wbGF0ZX0gZnJvbSAnLi9tb2R1bGVzL2FkZFRyYW5zbGF0ZWRQYWdlVGVtcGxhdGUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vLyDmt7vliqDkuIDkuKrmjInpkq7liLDlt6XlhbfmoI/ku6Xkvr/miYvliqjop6blj5HohJrmnKxcbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gaW5pdFRQKCk6IHZvaWQge1xuXHQvLyDlj6rlnKjpnZ7orqjorrrpobXmmL7npLrmjInpkq5cblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgJSAyICE9PSAwIHx8IG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IC0xKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldExpbmsgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdCdwLWNhY3Rpb25zJywgLy8g5bel5YW35qCP5L2N572uXG5cdFx0JyMnLCAvLyDpk77mjqXlnLDlnYBcblx0XHQn5re75Yqg5a+85YWl5qih5p2/JywgLy8g5oyJ6ZKu5ZCN56ewXG5cdFx0J2FkZC10cmFuc2xhdGVkLXBhZ2UnLCAvLyBJRFxuXHRcdCfkuLrlvZPliY3pobXpnaLnmoTorqjorrrpobXmt7vliqB7e1RyYW5zbGF0ZWQgcGFnZX195qih5p2/JyAvLyDmj5DnpLrmloflrZdcblx0KTtcblxuXHRpZiAocG9ydGxldExpbmspIHtcblx0XHQkKHBvcnRsZXRMaW5rKS5vbignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dm9pZCBhZGRUcmFuc2xhdGVkUGFnZVRlbXBsYXRlKCk7XG5cdFx0fSk7XG5cdH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLGtCQUFBQyxPQUFvQ0wsT0FBTyxDQUFFOztBQ0RqRSxJQUFNTSxZQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQVksV0FBT0MsUUFBb0M7QUFDNUQsVUFBTUMsV0FBQSxNQUFpQlAsSUFBSVEsSUFBSUYsTUFBTTtBQUNyQyxXQUFPQztFQUNSLENBQUE7QUFBQSxTQUFBLFNBSE1KLFdBQUFNLElBQUE7QUFBQSxXQUFBTCxLQUFBTSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFLTixJQUFNQyxXQUFBLDJCQUFBO0FBQUEsTUFBQUMsUUFBQVIsa0JBQVcsV0FBT0MsUUFBOEI7QUFDckQsVUFBTUMsV0FBQSxNQUFpQlAsSUFBSWMsa0JBQWtCUixNQUFNO0FBQ25ELFdBQU9DO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FITUssVUFBQUcsS0FBQTtBQUFBLFdBQUFGLE1BQUFILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNKTixJQUFNSyw0QkFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFaLGtCQUE0QixhQUEyQjtBQUM1RCxVQUFNYSxjQUFjQyxHQUFHQyxPQUFPWixJQUFJLFlBQVk7QUFDOUMsVUFBTWEsVUFBVSxJQUFJRixHQUFHRyxNQUFNSixXQUFXO0FBQ3hDLFVBQU1LLE9BQU8sSUFBSUosR0FBR0csTUFBTUQsUUFBUUcsWUFBWSxHQUFHSCxRQUFRSSxlQUFlLElBQUksQ0FBQztBQUc3RSxVQUFNQyxpQkFBaUJDLE9BQU8sbUJBQW1CO0FBQ2pELFFBQUksQ0FBQ0QsZ0JBQWdCO0FBQ3BCRSxZQUFNLFdBQVc7QUFDakI7SUFDRDtBQUVBLFVBQU1DLGNBQWNGLE9BQU8sbUJBQW1CO0FBQzlDLFFBQUksQ0FBQ0UsYUFBYTtBQUNqQkQsWUFBTSxXQUFXO0FBQ2pCO0lBQ0Q7QUFFQSxVQUFNRSxXQUFVSCxPQUFPLDZCQUE2QjtBQUVwRCxVQUFNSSxnQkFBZ0JKLE9BQU8sOEJBQThCO0FBRTNELFVBQU1LLFdBQUEscUJBQUE5QixPQUFnQ3dCLGdCQUFjLEdBQUEsRUFBQXhCLE9BQUkyQixhQUFXLFdBQUEsRUFBQTNCLE9BQVk0QixVQUFPLGlCQUFBLEVBQUE1QixPQUFrQjZCLGVBQWEsTUFBQTtBQUVySCxRQUFJO0FBQ0gsWUFBTUUsY0FBdUM7UUFDNUNDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxRQUFRYixLQUFLYyxnQkFBZ0I7UUFDN0JDLFFBQVEsQ0FBQyxhQUFhLFNBQVM7UUFDL0JDLGNBQWM7UUFDZEMsY0FBYztNQUNmO0FBRUEsWUFBTUMsZ0JBQUEsTUFBc0J0QyxVQUFVOEIsV0FBVztBQUVqRCxVQUFJLENBQUNRLGNBQWMsT0FBTyxLQUFLLENBQUNBLGNBQWMsT0FBTyxFQUFFQyxPQUFPO0FBQzdEZCxjQUFNLGtCQUFrQjtBQUN4QjtNQUNEO0FBRUEsWUFBTSxDQUFDZSxNQUFNLElBQUlGLGNBQWMsT0FBTyxFQUFFRztBQUN4QyxZQUFNQyxZQUFZSixjQUFjLE9BQU8sRUFBRUMsTUFBTUMsTUFBTSxFQUFFRyxhQUFhLENBQUEsR0FBSSxDQUFDLEtBQUssQ0FBQztBQUMvRSxZQUFNQyxPQUFPRixTQUFTLEdBQUc7QUFDekIsWUFBTUcsaUJBQWlCUCxjQUFjLGNBQWM7QUFDbkQsWUFBTVEsVUFDTDtBQUNELFlBQU1DLGFBQWdDO1FBQ3JDaEIsUUFBUTtRQUNSaUIsT0FBTzVCLEtBQUtjLGdCQUFnQjtRQUM1Qlk7UUFDQUQ7TUFDRDtBQUVBLFVBQUlELFNBQVMsUUFBVztBQUV2QkcsbUJBQVdFLGFBQWE7QUFDeEJGLG1CQUFXSCxPQUFPZjtNQUNuQixPQUFPO0FBRU5rQixtQkFBV0csZ0JBQWdCUixTQUFTUztBQUNwQ0osbUJBQVdILE9BQU9mLFdBQVdlLEtBQUtRLFFBQVEsNkNBQTZDLEVBQUU7TUFDMUY7QUFFQSxVQUFJO0FBQ0gsY0FBTUMsZUFBQSxNQUFxQjVDLFNBQVNzQyxVQUFVO0FBRTlDLGNBQU1PLGFBQWFELGFBQWEsTUFBTTtBQUN0QyxZQUFJQyxjQUFjQSxXQUFXQyxXQUFXLFdBQVc7QUFDbEQ5QixnQkFBQSxNQUFBMUIsT0FBWXFCLEtBQUtjLGdCQUFnQixHQUFDLDJCQUFBLENBQTJCO0FBQzdEc0IsbUJBQVNDLE9BQU87UUFDakIsT0FBTztBQUNOaEMsZ0JBQU0sZUFBZTtRQUN0QjtNQUNELFFBQVE7QUFDUEEsY0FBTSxzQkFBc0I7TUFDN0I7SUFDRCxRQUFRO0FBQ1BBLFlBQU0sa0JBQWtCO0lBQ3pCO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FoRk1aLDZCQUFBO0FBQUEsV0FBQUMsTUFBQVAsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBQ0ZOLElBQUFrRCxxQkFBc0I5RCxRQUFBLGlCQUFBO0FBR3RCLE1BQUEsR0FBSzhELG1CQUFBQyxTQUFRLEVBQUVDLEtBQUssU0FBU0MsU0FBZTtBQUUzQyxNQUFJN0MsR0FBR0MsT0FBT1osSUFBSSxtQkFBbUIsSUFBSSxNQUFNLEtBQUtXLEdBQUdDLE9BQU9aLElBQUksbUJBQW1CLE1BQU0sSUFBSTtBQUM5RjtFQUNEO0FBRUEsUUFBTXlELGNBQWM5QyxHQUFHK0MsS0FBS0M7SUFDM0I7O0lBQ0E7O0lBQ0E7O0lBQ0E7O0lBQ0E7O0VBQ0Q7QUFFQSxNQUFJRixhQUFhO0FBQ2hCRyxNQUFFSCxXQUFXLEVBQUVJLEdBQUcsU0FBVUMsT0FBTTtBQUNqQ0EsUUFBRUMsZUFBZTtBQUNqQixXQUFLdkQsMEJBQTBCO0lBQ2hDLENBQUM7RUFDRjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJxdWVyeVBhZ2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYXJhbXMiLCAicmVzcG9uc2UiLCAiZ2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJlZGl0UGFnZSIsICJfcmVmMiIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJfeDIiLCAiYWRkVHJhbnNsYXRlZFBhZ2VUZW1wbGF0ZSIsICJfcmVmMyIsICJ0YXJnZXRUaXRsZSIsICJtdyIsICJjb25maWciLCAiYXJ0aWNsZSIsICJUaXRsZSIsICJ0YWxrIiwgImdldE1haW5UZXh0IiwgImdldE5hbWVzcGFjZUlkIiwgInNvdXJjZUxhbmd1YWdlIiwgInByb21wdCIsICJhbGVydCIsICJzb3VyY2VUaXRsZSIsICJ2ZXJzaW9uMiIsICJpbnNlcnR2ZXJzaW9uIiwgInRlbXBsYXRlIiwgInF1ZXJ5UGFyYW1zIiwgImFjdGlvbiIsICJwcm9wIiwgInRpdGxlcyIsICJnZXRQcmVmaXhlZFRleHQiLCAicnZwcm9wIiwgImluZGV4cGFnZWlkcyIsICJjdXJ0aW1lc3RhbXAiLCAicXVlcnlSZXNwb25zZSIsICJwYWdlcyIsICJwYWdlSWQiLCAicGFnZWlkcyIsICJyZXZpc2lvbiIsICJyZXZpc2lvbnMiLCAidGV4dCIsICJzdGFydHRpbWVzdGFtcCIsICJzdW1tYXJ5IiwgImVkaXRQYXJhbXMiLCAidGl0bGUiLCAiY3JlYXRlb25seSIsICJiYXNldGltZXN0YW1wIiwgInRpbWVzdGFtcCIsICJyZXBsYWNlIiwgImVkaXRSZXNwb25zZSIsICJlZGl0UmVzdWx0IiwgInJlc3VsdCIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEJvZHkiLCAidGhlbiIsICJpbml0VFAiLCAicG9ydGxldExpbmsiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICIkIiwgIm9uIiwgImUiLCAicHJldmVudERlZmF1bHQiXQp9Cg==
