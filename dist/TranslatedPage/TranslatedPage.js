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
var version = "2.0";
//! src/TranslatedPage/modules/utils/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("TranslatedPage/".concat(version));
//! src/TranslatedPage/modules/utils/util.ts
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
//! src/TranslatedPage/modules/utils/addTalkPageTemplate.ts
var addTalkPageTemplate = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* ({
    name,
    sourcePrompt,
    sourceRequiredMessage,
    sourceTitlePrompt,
    sourceTitleRequiredMessage,
    insertVersionPrompt,
    summary
  }) {
    const targetTitle = mw.config.get("wgPageName");
    const article = new mw.Title(targetTitle);
    const talk = new mw.Title(article.getMainText(), article.getNamespaceId() + 1);
    const talkTitle = talk.getPrefixedText();
    const source = prompt(sourcePrompt);
    if (!source) {
      alert(sourceRequiredMessage);
      return;
    }
    const sourceTitle = prompt(sourceTitlePrompt);
    if (!sourceTitle) {
      alert(sourceTitleRequiredMessage);
      return;
    }
    const version2 = prompt("请输入来源页面的特定版本号（例如：12345678）：");
    const insertVersion = prompt(insertVersionPrompt);
    const template = "{{".concat(name, "|").concat(source, "|").concat(sourceTitle, "|version=").concat(version2, "|insertversion=").concat(insertVersion, "}}\n");
    try {
      const queryResponse = yield queryPage({
        action: "query",
        prop: "revisions",
        titles: talkTitle,
        rvprop: ["timestamp", "content"],
        indexpageids: true,
        curtimestamp: true
      });
      if (!queryResponse["query"] || !queryResponse["query"].pages) {
        alert("无法获取讨论页信息，请稍后重试。");
        return;
      }
      const [pageId] = queryResponse["query"].pageids;
      const revision = (queryResponse["query"].pages[pageId].revisions || [])[0] || {};
      const text = revision["*"];
      const editParams = {
        action: "edit",
        title: talkTitle,
        summary,
        starttimestamp: queryResponse["curtimestamp"]
      };
      if (text === void 0) {
        editParams.createonly = true;
        editParams.text = template;
      } else {
        editParams.basetimestamp = revision.timestamp;
        const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        editParams.text = template + text.replace(new RegExp("\\{\\{\\s*".concat(escapedName, "\\s*\\|[^{}]+\\}\\}\\n?"), "g"), "");
      }
      try {
        const editResponse = yield editPage(editParams);
        const editResult = editResponse["edit"];
        if (editResult && editResult.result === "Success") {
          alert("成功为".concat(talkTitle, "添加了{{").concat(name, "}}模板！"));
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
  return function addTalkPageTemplate2(_x3) {
    return _ref3.apply(this, arguments);
  };
})();
//! src/TranslatedPage/modules/addMigratedPageTemplate.ts
var addMigratedPageTemplate = () => addTalkPageTemplate({
  name: "Migrated page",
  sourcePrompt: "请输入来源网站跨站前缀（例如licencewiki；必填）：",
  sourceRequiredMessage: "来源跨站前缀不能为空！",
  sourceTitlePrompt: "请输入来源页面（例如Project首页；必填）：",
  sourceTitleRequiredMessage: "来源页面不能为空！",
  insertVersionPrompt: "请输入本地搬运后的特定版本号（例如：12345678）：",
  summary: "为导入页面标记{{[[Template:Migrated page|Migrated page]]}}模板 ([[MediaWiki:Gadget-MigratedPage.js|tp.js]])"
});
//! src/TranslatedPage/modules/addTranslatedPageTemplate.ts
var addTranslatedPageTemplate = () => addTalkPageTemplate({
  name: "Translated page",
  sourcePrompt: "请输入来源语言（例如zh；必填）：",
  sourceRequiredMessage: "来源语言不能为空！",
  sourceTitlePrompt: "请输入来源页面（例如首页；必填）：",
  sourceTitleRequiredMessage: "来源页面不能为空！",
  insertVersionPrompt: "请输入本地翻译后的特定版本号（例如：12345678）：",
  summary: "为导入页面标记{{[[Template:Translated page|Translated page]]}}模板 ([[MediaWiki:Gadget-TranslatedPage.js|tp.js]])"
});
//! src/TranslatedPage/TranslatedPage.ts
var import_ext_gadget2 = require("ext.gadget.Util");
void (0, import_ext_gadget2.getBody)().then(function initTP() {
  if (mw.config.get("wgNamespaceNumber") % 2 !== 0 || mw.config.get("wgNamespaceNumber") === -1) {
    return;
  }
  const portletLinkTP = mw.util.addPortletLink(
    "p-cactions",
    // 工具栏位置
    "#",
    // 链接地址
    "添加导入模板（维基百科）",
    // 按钮名称
    "add-translated-page",
    // ID
    "为当前页面的讨论页添加{{Translated page}}模板（适用于维基百科等）"
    // 提示文字
  );
  const portletLinkMP = mw.util.addPortletLink(
    "p-cactions",
    // 工具栏位置
    "#",
    // 链接地址
    "添加导入模板（其他站点）",
    // 按钮名称
    "add-migrated-page",
    // ID
    "为当前页面的讨论页添加{{Migrated page}}模板（适用于其他站点）"
    // 提示文字
  );
  if (portletLinkTP) {
    $(portletLinkTP).on("click", (e) => {
      e.preventDefault();
      void addTranslatedPageTemplate();
    });
  }
  if (portletLinkMP) {
    $(portletLinkMP).on("click", (e) => {
      e.preventDefault();
      void addMigratedPageTemplate();
    });
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RyYW5zbGF0ZWRQYWdlL29wdGlvbnMuanNvbiIsICJzcmMvVHJhbnNsYXRlZFBhZ2UvbW9kdWxlcy91dGlscy9hcGkudHMiLCAic3JjL1RyYW5zbGF0ZWRQYWdlL21vZHVsZXMvdXRpbHMvdXRpbC50cyIsICJzcmMvVHJhbnNsYXRlZFBhZ2UvbW9kdWxlcy91dGlscy9hZGRUYWxrUGFnZVRlbXBsYXRlLnRzIiwgInNyYy9UcmFuc2xhdGVkUGFnZS9tb2R1bGVzL2FkZE1pZ3JhdGVkUGFnZVRlbXBsYXRlLnRzIiwgInNyYy9UcmFuc2xhdGVkUGFnZS9tb2R1bGVzL2FkZFRyYW5zbGF0ZWRQYWdlVGVtcGxhdGUudHMiLCAic3JjL1RyYW5zbGF0ZWRQYWdlL1RyYW5zbGF0ZWRQYWdlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBUcmFuc2xhdGVkUGFnZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHF1ZXJ5UGFnZSA9IGFzeW5jIChwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zKSA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBlZGl0UGFnZSA9IGFzeW5jIChwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zKSA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCB7cXVlcnlQYWdlLCBlZGl0UGFnZX07XG4iLCAiaW1wb3J0IHtlZGl0UGFnZSwgcXVlcnlQYWdlfSBmcm9tICcuL3V0aWwnO1xuXG5pbnRlcmZhY2UgVGVtcGxhdGVDb25maWcge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHNvdXJjZVByb21wdDogc3RyaW5nO1xuXHRzb3VyY2VSZXF1aXJlZE1lc3NhZ2U6IHN0cmluZztcblx0c291cmNlVGl0bGVQcm9tcHQ6IHN0cmluZztcblx0c291cmNlVGl0bGVSZXF1aXJlZE1lc3NhZ2U6IHN0cmluZztcblx0aW5zZXJ0VmVyc2lvblByb21wdDogc3RyaW5nO1xuXHRzdW1tYXJ5OiBzdHJpbmc7XG59XG5cbmNvbnN0IGFkZFRhbGtQYWdlVGVtcGxhdGUgPSBhc3luYyAoe1xuXHRuYW1lLFxuXHRzb3VyY2VQcm9tcHQsXG5cdHNvdXJjZVJlcXVpcmVkTWVzc2FnZSxcblx0c291cmNlVGl0bGVQcm9tcHQsXG5cdHNvdXJjZVRpdGxlUmVxdWlyZWRNZXNzYWdlLFxuXHRpbnNlcnRWZXJzaW9uUHJvbXB0LFxuXHRzdW1tYXJ5LFxufTogVGVtcGxhdGVDb25maWcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgdGFyZ2V0VGl0bGUgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5cdGNvbnN0IGFydGljbGUgPSBuZXcgbXcuVGl0bGUodGFyZ2V0VGl0bGUpO1xuXHRjb25zdCB0YWxrID0gbmV3IG13LlRpdGxlKGFydGljbGUuZ2V0TWFpblRleHQoKSwgYXJ0aWNsZS5nZXROYW1lc3BhY2VJZCgpICsgMSk7XG5cdGNvbnN0IHRhbGtUaXRsZSA9IHRhbGsuZ2V0UHJlZml4ZWRUZXh0KCk7XG5cblx0Y29uc3Qgc291cmNlID0gcHJvbXB0KHNvdXJjZVByb21wdCk7XG5cdGlmICghc291cmNlKSB7XG5cdFx0YWxlcnQoc291cmNlUmVxdWlyZWRNZXNzYWdlKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzb3VyY2VUaXRsZSA9IHByb21wdChzb3VyY2VUaXRsZVByb21wdCk7XG5cdGlmICghc291cmNlVGl0bGUpIHtcblx0XHRhbGVydChzb3VyY2VUaXRsZVJlcXVpcmVkTWVzc2FnZSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdmVyc2lvbiA9IHByb21wdCgn6K+36L6T5YWl5p2l5rqQ6aG16Z2i55qE54m55a6a54mI5pys5Y+377yI5L6L5aaC77yaMTIzNDU2NzjvvInvvJonKTtcblx0Y29uc3QgaW5zZXJ0VmVyc2lvbiA9IHByb21wdChpbnNlcnRWZXJzaW9uUHJvbXB0KTtcblx0Y29uc3QgdGVtcGxhdGUgPSBge3ske25hbWV9fCR7c291cmNlfXwke3NvdXJjZVRpdGxlfXx2ZXJzaW9uPSR7dmVyc2lvbn18aW5zZXJ0dmVyc2lvbj0ke2luc2VydFZlcnNpb259fX1cXG5gO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcXVlcnlSZXNwb25zZSA9IGF3YWl0IHF1ZXJ5UGFnZSh7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdHRpdGxlczogdGFsa1RpdGxlLFxuXHRcdFx0cnZwcm9wOiBbJ3RpbWVzdGFtcCcsICdjb250ZW50J10sXG5cdFx0XHRpbmRleHBhZ2VpZHM6IHRydWUsXG5cdFx0XHRjdXJ0aW1lc3RhbXA6IHRydWUsXG5cdFx0fSk7XG5cblx0XHRpZiAoIXF1ZXJ5UmVzcG9uc2VbJ3F1ZXJ5J10gfHwgIXF1ZXJ5UmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdGFsZXJ0KCfml6Dms5Xojrflj5borqjorrrpobXkv6Hmga/vvIzor7fnqI3lkI7ph43or5XjgIInKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBbcGFnZUlkXSA9IHF1ZXJ5UmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZWlkcztcblx0XHRjb25zdCByZXZpc2lvbiA9IChxdWVyeVJlc3BvbnNlWydxdWVyeSddLnBhZ2VzW3BhZ2VJZF0ucmV2aXNpb25zIHx8IFtdKVswXSB8fCB7fTtcblx0XHRjb25zdCB0ZXh0ID0gcmV2aXNpb25bJyonXSBhcyBzdHJpbmc7XG5cdFx0Y29uc3QgZWRpdFBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdHRpdGxlOiB0YWxrVGl0bGUsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdFx0c3RhcnR0aW1lc3RhbXA6IHF1ZXJ5UmVzcG9uc2VbJ2N1cnRpbWVzdGFtcCddLFxuXHRcdH07XG5cblx0XHRpZiAodGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRlZGl0UGFyYW1zLmNyZWF0ZW9ubHkgPSB0cnVlO1xuXHRcdFx0ZWRpdFBhcmFtcy50ZXh0ID0gdGVtcGxhdGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVkaXRQYXJhbXMuYmFzZXRpbWVzdGFtcCA9IHJldmlzaW9uLnRpbWVzdGFtcDtcblx0XHRcdGNvbnN0IGVzY2FwZWROYW1lID0gbmFtZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xuXHRcdFx0ZWRpdFBhcmFtcy50ZXh0ID1cblx0XHRcdFx0dGVtcGxhdGUgKyB0ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXHtcXFxce1xcXFxzKiR7ZXNjYXBlZE5hbWV9XFxcXHMqXFxcXHxbXnt9XStcXFxcfVxcXFx9XFxcXG4/YCwgJ2cnKSwgJycpO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBlZGl0UmVzcG9uc2UgPSBhd2FpdCBlZGl0UGFnZShlZGl0UGFyYW1zKTtcblx0XHRcdGNvbnN0IGVkaXRSZXN1bHQgPSBlZGl0UmVzcG9uc2VbJ2VkaXQnXTtcblxuXHRcdFx0aWYgKGVkaXRSZXN1bHQgJiYgZWRpdFJlc3VsdC5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHRhbGVydChg5oiQ5Yqf5Li6JHt0YWxrVGl0bGV95re75Yqg5LqGe3ske25hbWV9fX3mqKHmnb/vvIFgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFsZXJ0KCfmt7vliqDmqKHmnb/lpLHotKXvvIzor7fnqI3lkI7ph43or5XjgIInKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdGFsZXJ0KCfmt7vliqDmqKHmnb/lpLHotKXvvIzor7fmo4Dmn6XnvZHnu5zov57mjqXmiJbmnYPpmZDorr7nva7jgIInKTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdGFsZXJ0KCfml6Dms5Xojrflj5borqjorrrpobXkv6Hmga/vvIzor7fnqI3lkI7ph43or5XjgIInKTtcblx0fVxufTtcblxuZXhwb3J0IHthZGRUYWxrUGFnZVRlbXBsYXRlfTtcbiIsICJpbXBvcnQge2FkZFRhbGtQYWdlVGVtcGxhdGV9IGZyb20gJy4vdXRpbHMvYWRkVGFsa1BhZ2VUZW1wbGF0ZSc7XG5cbmNvbnN0IGFkZE1pZ3JhdGVkUGFnZVRlbXBsYXRlID0gKCk6IFByb21pc2U8dm9pZD4gPT5cblx0YWRkVGFsa1BhZ2VUZW1wbGF0ZSh7XG5cdFx0bmFtZTogJ01pZ3JhdGVkIHBhZ2UnLFxuXHRcdHNvdXJjZVByb21wdDogJ+ivt+i+k+WFpeadpea6kOe9keermei3qOermeWJjee8gO+8iOS+i+WmgmxpY2VuY2V3aWtp77yb5b+F5aGr77yJ77yaJyxcblx0XHRzb3VyY2VSZXF1aXJlZE1lc3NhZ2U6ICfmnaXmupDot6jnq5nliY3nvIDkuI3og73kuLrnqbrvvIEnLFxuXHRcdHNvdXJjZVRpdGxlUHJvbXB0OiAn6K+36L6T5YWl5p2l5rqQ6aG16Z2i77yI5L6L5aaCUHJvamVjdOmmlumhte+8m+W/heWhq++8ie+8micsXG5cdFx0c291cmNlVGl0bGVSZXF1aXJlZE1lc3NhZ2U6ICfmnaXmupDpobXpnaLkuI3og73kuLrnqbrvvIEnLFxuXHRcdGluc2VydFZlcnNpb25Qcm9tcHQ6ICfor7fovpPlhaXmnKzlnLDmkKzov5DlkI7nmoTnibnlrprniYjmnKzlj7fvvIjkvovlpoLvvJoxMjM0NTY3OO+8ie+8micsXG5cdFx0c3VtbWFyeTpcblx0XHRcdCfkuLrlr7zlhaXpobXpnaLmoIforrB7e1tbVGVtcGxhdGU6TWlncmF0ZWQgcGFnZXxNaWdyYXRlZCBwYWdlXV19feaooeadvyAoW1tNZWRpYVdpa2k6R2FkZ2V0LU1pZ3JhdGVkUGFnZS5qc3x0cC5qc11dKScsXG5cdH0pO1xuXG5leHBvcnQge2FkZE1pZ3JhdGVkUGFnZVRlbXBsYXRlfTtcbiIsICJpbXBvcnQge2FkZFRhbGtQYWdlVGVtcGxhdGV9IGZyb20gJy4vdXRpbHMvYWRkVGFsa1BhZ2VUZW1wbGF0ZSc7XG5cbmNvbnN0IGFkZFRyYW5zbGF0ZWRQYWdlVGVtcGxhdGUgPSAoKTogUHJvbWlzZTx2b2lkPiA9PlxuXHRhZGRUYWxrUGFnZVRlbXBsYXRlKHtcblx0XHRuYW1lOiAnVHJhbnNsYXRlZCBwYWdlJyxcblx0XHRzb3VyY2VQcm9tcHQ6ICfor7fovpPlhaXmnaXmupDor63oqIDvvIjkvovlpoJ6aO+8m+W/heWhq++8ie+8micsXG5cdFx0c291cmNlUmVxdWlyZWRNZXNzYWdlOiAn5p2l5rqQ6K+t6KiA5LiN6IO95Li656m677yBJyxcblx0XHRzb3VyY2VUaXRsZVByb21wdDogJ+ivt+i+k+WFpeadpea6kOmhtemdou+8iOS+i+Wmgummlumhte+8m+W/heWhq++8ie+8micsXG5cdFx0c291cmNlVGl0bGVSZXF1aXJlZE1lc3NhZ2U6ICfmnaXmupDpobXpnaLkuI3og73kuLrnqbrvvIEnLFxuXHRcdGluc2VydFZlcnNpb25Qcm9tcHQ6ICfor7fovpPlhaXmnKzlnLDnv7vor5HlkI7nmoTnibnlrprniYjmnKzlj7fvvIjkvovlpoLvvJoxMjM0NTY3OO+8ie+8micsXG5cdFx0c3VtbWFyeTpcblx0XHRcdCfkuLrlr7zlhaXpobXpnaLmoIforrB7e1tbVGVtcGxhdGU6VHJhbnNsYXRlZCBwYWdlfFRyYW5zbGF0ZWQgcGFnZV1dfX3mqKHmnb8gKFtbTWVkaWFXaWtpOkdhZGdldC1UcmFuc2xhdGVkUGFnZS5qc3x0cC5qc11dKScsXG5cdH0pO1xuXG5leHBvcnQge2FkZFRyYW5zbGF0ZWRQYWdlVGVtcGxhdGV9O1xuIiwgImltcG9ydCB7YWRkTWlncmF0ZWRQYWdlVGVtcGxhdGV9IGZyb20gJy4vbW9kdWxlcy9hZGRNaWdyYXRlZFBhZ2VUZW1wbGF0ZSc7XG5pbXBvcnQge2FkZFRyYW5zbGF0ZWRQYWdlVGVtcGxhdGV9IGZyb20gJy4vbW9kdWxlcy9hZGRUcmFuc2xhdGVkUGFnZVRlbXBsYXRlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuLy8g5re75Yqg5LiA5Liq5oyJ6ZKu5Yiw5bel5YW35qCP5Lul5L6/5omL5Yqo6Kem5Y+R6ISa5pysXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGluaXRUUCgpOiB2b2lkIHtcblx0Ly8g5Y+q5Zyo6Z2e6K6o6K666aG15pi+56S65oyJ6ZKuXG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpICUgMiAhPT0gMCB8fCBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSAtMSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRMaW5rVFAgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdCdwLWNhY3Rpb25zJywgLy8g5bel5YW35qCP5L2N572uXG5cdFx0JyMnLCAvLyDpk77mjqXlnLDlnYBcblx0XHQn5re75Yqg5a+85YWl5qih5p2/77yI57u05Z+655m+56eR77yJJywgLy8g5oyJ6ZKu5ZCN56ewXG5cdFx0J2FkZC10cmFuc2xhdGVkLXBhZ2UnLCAvLyBJRFxuXHRcdCfkuLrlvZPliY3pobXpnaLnmoTorqjorrrpobXmt7vliqB7e1RyYW5zbGF0ZWQgcGFnZX195qih5p2/77yI6YCC55So5LqO57u05Z+655m+56eR562J77yJJyAvLyDmj5DnpLrmloflrZdcblx0KTtcblxuXHRjb25zdCBwb3J0bGV0TGlua01QID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHQncC1jYWN0aW9ucycsIC8vIOW3peWFt+agj+S9jee9rlxuXHRcdCcjJywgLy8g6ZO+5o6l5Zyw5Z2AXG5cdFx0J+a3u+WKoOWvvOWFpeaooeadv++8iOWFtuS7luermeeCue+8iScsIC8vIOaMiemSruWQjeensFxuXHRcdCdhZGQtbWlncmF0ZWQtcGFnZScsIC8vIElEXG5cdFx0J+S4uuW9k+WJjemhtemdoueahOiuqOiuuumhtea3u+WKoHt7TWlncmF0ZWQgcGFnZX195qih5p2/77yI6YCC55So5LqO5YW25LuW56uZ54K577yJJyAvLyDmj5DnpLrmloflrZdcblx0KTtcblxuXHRpZiAocG9ydGxldExpbmtUUCkge1xuXHRcdCQocG9ydGxldExpbmtUUCkub24oJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHZvaWQgYWRkVHJhbnNsYXRlZFBhZ2VUZW1wbGF0ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKHBvcnRsZXRMaW5rTVApIHtcblx0XHQkKHBvcnRsZXRMaW5rTVApLm9uKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR2b2lkIGFkZE1pZ3JhdGVkUGFnZVRlbXBsYXRlKCk7XG5cdFx0fSk7XG5cdH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLGtCQUFBQyxPQUFvQ0wsT0FBTyxDQUFFOztBQ0RqRSxJQUFNTSxZQUFBLDRCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQVksV0FBT0MsUUFBb0M7QUFDNUQsVUFBTUMsV0FBQSxNQUFpQlAsSUFBSVEsSUFBSUYsTUFBTTtBQUNyQyxXQUFPQztFQUNSLENBQUE7QUFBQSxTQUFBLFNBSE1KLFdBQUFNLElBQUE7QUFBQSxXQUFBTCxLQUFBTSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7QUFL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LGVBQWU7QUFDakIsV0FBS2Isd0JBQXdCO0lBQzlCLENBQUM7RUFDRjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJxdWVyeVBhZ2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYXJhbXMiLCAicmVzcG9uc2UiLCAiZ2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJlZGl0UGFnZSIsICJfcmVmMiIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJfeDIiLCAiYWRkVGFsa1BhZ2VUZW1wbGF0ZSIsICJfcmVmMyIsICJuYW1lIiwgInNvdXJjZVByb21wdCIsICJzb3VyY2VSZXF1aXJlZE1lc3NhZ2UiLCAic291cmNlVGl0bGVQcm9tcHQiLCAic291cmNlVGl0bGVSZXF1aXJlZE1lc3NhZ2UiLCAiaW5zZXJ0VmVyc2lvblByb21wdCIsICJzdW1tYXJ5IiwgInRhcmdldFRpdGxlIiwgIm13IiwgImNvbmZpZyIsICJhcnRpY2xlIiwgIlRpdGxlIiwgInRhbGsiLCAiZ2V0TWFpblRleHQiLCAiZ2V0TmFtZXNwYWNlSWQiLCAidGFsa1RpdGxlIiwgImdldFByZWZpeGVkVGV4dCIsICJzb3VyY2UiLCAicHJvbXB0IiwgImFsZXJ0IiwgInNvdXJjZVRpdGxlIiwgInZlcnNpb24yIiwgImluc2VydFZlcnNpb24iLCAidGVtcGxhdGUiLCAicXVlcnlSZXNwb25zZSIsICJhY3Rpb24iLCAicHJvcCIsICJ0aXRsZXMiLCAicnZwcm9wIiwgImluZGV4cGFnZWlkcyIsICJjdXJ0aW1lc3RhbXAiLCAicGFnZXMiLCAicGFnZUlkIiwgInBhZ2VpZHMiLCAicmV2aXNpb24iLCAicmV2aXNpb25zIiwgInRleHQiLCAiZWRpdFBhcmFtcyIsICJ0aXRsZSIsICJzdGFydHRpbWVzdGFtcCIsICJjcmVhdGVvbmx5IiwgImJhc2V0aW1lc3RhbXAiLCAidGltZXN0YW1wIiwgImVzY2FwZWROYW1lIiwgInJlcGxhY2UiLCAiUmVnRXhwIiwgImVkaXRSZXNwb25zZSIsICJlZGl0UmVzdWx0IiwgInJlc3VsdCIsICJfeDMiLCAiYWRkTWlncmF0ZWRQYWdlVGVtcGxhdGUiLCAiYWRkVHJhbnNsYXRlZFBhZ2VUZW1wbGF0ZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImluaXRUUCIsICJwb3J0bGV0TGlua1RQIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAicG9ydGxldExpbmtNUCIsICIkIiwgIm9uIiwgImUiLCAicHJldmVudERlZmF1bHQiXQp9Cg==
