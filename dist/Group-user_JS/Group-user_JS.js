/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js}
 * @base {@link https://meta.wikimedia.org/wiki/MediaWiki:Gadget-SousPages.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-CleanDeleteReasons.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Group-user_JS}
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

// dist/Group-user_JS/Group-user_JS.js
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
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};
//! src/Group-user_JS/options.json
var options_exports = {};
__export(options_exports, {
  configKey: () => configKey,
  default: () => options_default
});
var configKey = "gadget-Group-user_JS__Initialized";
var options_default = {
  configKey
};
//! src/Group-user_JS/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Edit: (0, import_ext_gadget.localize)({
      en: "Edit",
      ja: "編集",
      "zh-hans": "编辑",
      "zh-hant": "編輯"
    }),
    Log: (0, import_ext_gadget.localize)({
      en: "Log",
      ja: "ログ",
      "zh-hans": "日志",
      "zh-hant": "日誌"
    }),
    Subpages: (0, import_ext_gadget.localize)({
      en: "Subpage",
      ja: "子ページ",
      "zh-hans": "子页面",
      "zh-hant": "子頁面"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Group-user_JS/modules/addLog.ts
var addLog = () => {
  const {
    wgNamespaceNumber,
    wgPageName
  } = mw.config.get();
  if ([-1, 2, 3].includes(wgNamespaceNumber)) {
    return;
  }
  mw.util.addPortletLink("p-tb", mw.util.getUrl("Special:Logs", {
    page: wgPageName
  }), getMessage("Log"), "t-log");
};
//! src/Group-user_JS/modules/addSubpage.ts
var addSubpage = () => {
  const {
    wgNamespaceNumber,
    wgPageName
  } = mw.config.get();
  if ([-1, 0, 14].includes(wgNamespaceNumber)) {
    return;
  }
  mw.util.addPortletLink("p-tb", mw.util.getUrl("Special:PrefixIndex/".concat(wgPageName)), getMessage("Subpages"), "t-subpage");
};
//! src/Group-user_JS/modules/fixReason.ts
var fixReason = ($body) => {
  const {
    wgAction
  } = mw.config.get();
  if (wgAction === "delete") {
    const $wpReason = $body.find("input[name=wpReason]");
    if (!$wpReason.length) {
      return;
    }
    const autoReasonRegExp = /(内容|page was empty|content before blanking was)/i;
    if (autoReasonRegExp.test(String($wpReason.val()))) {
      $wpReason.val("");
    }
  }
};
//! src/Group-user_JS/modules/fixSummary.ts
var fixSummary = ($body) => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  switch (wgCanonicalSpecialPageName) {
    case "MassEditRegex":
      $body.find("#wpSummaryLabel").html($body.find("#wpSummaryLabel").text().replace(/\[\[#\.\|(.+?)]]/g, "$1"));
      break;
    case "ReplaceText":
      $body.find("input[name=doAnnounce]").prop({
        checked: false,
        disabled: true
      });
      break;
  }
};
//! src/Group-user_JS/Group-user_JS.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/Group-user_JS/modules/linkSearchEditButton.ts
var linkSearchEditButton = ($body) => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "LinkSearch") {
    return;
  }
  var _iterator = _createForOfIteratorHelper($body.find('.mw-spcontent a[href^="/wiki"]')), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      $("<span>").append(" （", $("<a>").attr("href", "".concat(element.href, "?action=edit")).text(getMessage("Edit")), "）").insertAfter(element);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
//! src/Group-user_JS/modules/loadGadgetEditForm.ts
var loadGadgetEditForm = () => {
  const EDIT_GADGETS = ["ext.gadget.EditForm", "ext.gadget.EditForm_JS"];
  const usingEditFormJS = (gadgets) => {
    void mw.loader.using(gadgets);
  };
  const {
    wgAction
  } = mw.config.get();
  if (["edit", "submit"].includes(wgAction)) {
    usingEditFormJS(EDIT_GADGETS);
  }
};
//! src/Group-user_JS/modules/replaceRandom.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var replaceRandom = ($body) => {
  const {
    wgWikiID
  } = mw.config.get();
  if (wgWikiID !== "zhqiuwenbaike") {
    return;
  }
  if (!(0, import_ext_gadget2.userHasRight)("rnrsverify-confirmed") && !(0, import_ext_gadget2.userHasRight)("rnrsverify-exempt")) {
    return;
  }
  const $randomPageLink = $body.find("#n-randompage a");
  $randomPageLink.attr("href", "/wiki/Special:RandomPage");
};
//! src/Group-user_JS/modules/smartEditIntro.ts
var smartEditIntro = ($body) => {
  const {
    wgAction,
    wgNamespaceNumber,
    wgCategories
  } = mw.config.get();
  if (!wgCategories) {
    return;
  }
  const $target = $body.find(".mw-editsection, #ca-edit, #ca-addsection").find("a");
  const addEditIntro = (name) => {
    var _iterator2 = _createForOfIteratorHelper($target), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const element = _step2.value;
        element.href = "".concat(element.href, "&editintro=").concat(name);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
  switch (wgNamespaceNumber) {
    case 0:
      if (wgCategories.includes("全部消歧义页面")) {
        addEditIntro("Template:Disambig_editintro");
      }
      if (wgCategories.includes("在世人物")) {
        addEditIntro("Template:BLP_editintro");
      }
      if (wgCategories.some((element) => {
        return /抗日?[战戰][争爭]?[牺犧]牲|烈士|[战戰][斗鬥鬦]英雄|英雄?模[範范]?|英雄?烈士?|人民(教育家|[艺藝][术術]家|科[学學]家|英雄|楷模)|共和[国國][勋勳]章|[七八]一[勋勳]章[獲获]得者|[一特]等功臣/.test(element);
      })) {
        addEditIntro("Template:BLP_editintro");
      }
      break;
    case 4:
      if (wgCategories.includes("求闻百科方针完整列表")) {
        addEditIntro("Template:Policy_editintro");
      }
      break;
    case 8:
    case 12: {
      if (wgCategories.includes("CC-BY-NC-SA-4.0")) {
        addEditIntro("Template:NonCommercial_editintro");
      }
      if (wgCategories.includes("GPL-3.0")) {
        addEditIntro("Template:GPL-3.0_editintro");
      }
      if (wgCategories.includes("GPL-2.0-or-later")) {
        addEditIntro("Template:GPL-2.0-or-later_editintro");
      }
      if (wgCategories.includes("MIT许可证")) {
        addEditIntro("Template:MIT_editintro");
      }
      const $copywarn = $body.find("#editpage-copywarn");
      const $editintro = $body.find(".mw-editintro");
      if (["edit", "submit"].includes(wgAction) && $copywarn && $editintro) {
        $editintro.appendTo($copywarn);
      }
      break;
    }
  }
};
//! src/Group-user_JS/modules/smartNewSection.ts
var smartNewSection = ($body) => {
  if (!mw.user.options.get("discussiontools-newtopictool") || !mw.user.options.get("discussiontools-betaenable")) {
    const $caTalk = $body.find("#ca-talk");
    const {
      wgNamespaceNumber
    } = mw.config.get();
    if ($caTalk.hasClass("new") && wgNamespaceNumber !== 2) {
      const $a = $("a:first", $caTalk);
      $a.attr("href", "".concat($a.attr("href"), "&section=new"));
    }
  }
};
//! src/Group-user_JS/Group-user_JS.ts
(function userJS() {
  const {
    configKey: configKey2
  } = options_exports;
  if (mw.config.get(configKey2)) {
    return;
  }
  mw.config.set(configKey2, true);
  void loadGadgetEditForm();
  void (0, import_ext_gadget3.getBody)().then(($body) => {
    addLog();
    addSubpage();
    fixReason($body);
    fixSummary($body);
    linkSearchEditButton($body);
    smartEditIntro($body);
    smartNewSection($body);
    replaceRandom($body);
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXVzZXJfSlMvb3B0aW9ucy5qc29uIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2FkZExvZy50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2FkZFN1YnBhZ2UudHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9maXhSZWFzb24udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9maXhTdW1tYXJ5LnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL0dyb3VwLXVzZXJfSlMudHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9saW5rU2VhcmNoRWRpdEJ1dHRvbi50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2xvYWRHYWRnZXRFZGl0Rm9ybS50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL3JlcGxhY2VSYW5kb20udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9zbWFydEVkaXRJbnRyby50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL3NtYXJ0TmV3U2VjdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1Hcm91cC11c2VyX0pTX19Jbml0aWFsaXplZFwiXG59XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEVkaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCcsXG5cdFx0XHRqYTogJ+e3qOmbhicsXG5cdFx0XHQnemgtaGFucyc6ICfnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn57eo6LyvJyxcblx0XHR9KSxcblx0XHRMb2c6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9nJyxcblx0XHRcdGphOiAn44Ot44KwJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aXpeW/lycsXG5cdFx0XHQnemgtaGFudCc6ICfml6XoqownLFxuXHRcdH0pLFxuXHRcdFN1YnBhZ2VzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N1YnBhZ2UnLFxuXHRcdFx0amE6ICflrZDjg5rjg7zjgrgnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Q6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtkOmggemdoicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYWRkTG9nID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChbLTEsIDIsIDNdLmluY2x1ZGVzKHdnTmFtZXNwYWNlTnVtYmVyKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0J3AtdGInLFxuXHRcdG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkxvZ3MnLCB7XG5cdFx0XHRwYWdlOiB3Z1BhZ2VOYW1lLFxuXHRcdH0pLFxuXHRcdGdldE1lc3NhZ2UoJ0xvZycpLFxuXHRcdCd0LWxvZydcblx0KTtcbn07XG5cbmV4cG9ydCB7YWRkTG9nfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbi8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuY29uc3QgYWRkU3VicGFnZSA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoWy0xLCAwLCAxNF0uaW5jbHVkZXMod2dOYW1lc3BhY2VOdW1iZXIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHQncC10YicsXG5cdFx0bXcudXRpbC5nZXRVcmwoYFNwZWNpYWw6UHJlZml4SW5kZXgvJHt3Z1BhZ2VOYW1lfWApLFxuXHRcdGdldE1lc3NhZ2UoJ1N1YnBhZ2VzJyksXG5cdFx0J3Qtc3VicGFnZSdcblx0KTtcbn07XG5cbmV4cG9ydCB7YWRkU3VicGFnZX07XG4iLCAiY29uc3QgZml4UmVhc29uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z0FjdGlvbiA9PT0gJ2RlbGV0ZScpIHtcblx0XHRjb25zdCAkd3BSZWFzb246IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BSZWFzb25dJyk7XG5cdFx0aWYgKCEkd3BSZWFzb24ubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYXV0b1JlYXNvblJlZ0V4cDogUmVnRXhwID0gLyjlhoXlrrl8cGFnZSB3YXMgZW1wdHl8Y29udGVudCBiZWZvcmUgYmxhbmtpbmcgd2FzKS9pO1xuXHRcdGlmIChhdXRvUmVhc29uUmVnRXhwLnRlc3QoU3RyaW5nKCR3cFJlYXNvbi52YWwoKSkpKSB7XG5cdFx0XHQkd3BSZWFzb24udmFsKCcnKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7Zml4UmVhc29ufTtcbiIsICJjb25zdCBmaXhTdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRzd2l0Y2ggKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lKSB7XG5cdFx0Y2FzZSAnTWFzc0VkaXRSZWdleCc6XG5cdFx0XHQkYm9keS5maW5kKCcjd3BTdW1tYXJ5TGFiZWwnKS5odG1sKFxuXHRcdFx0XHQkYm9keVxuXHRcdFx0XHRcdC5maW5kKCcjd3BTdW1tYXJ5TGFiZWwnKVxuXHRcdFx0XHRcdC50ZXh0KClcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbI1xcLlxcfCguKz8pXV0vZywgJyQxJylcblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdSZXBsYWNlVGV4dCc6XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPWRvQW5ub3VuY2VdJykucHJvcCh7XG5cdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdFx0YnJlYWs7XG5cdH1cbn07XG5cbmV4cG9ydCB7Zml4U3VtbWFyeX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FkZExvZ30gZnJvbSAnLi9tb2R1bGVzL2FkZExvZyc7XG5pbXBvcnQge2FkZFN1YnBhZ2V9IGZyb20gJy4vbW9kdWxlcy9hZGRTdWJwYWdlJztcbmltcG9ydCB7Zml4UmVhc29ufSBmcm9tICcuL21vZHVsZXMvZml4UmVhc29uJztcbmltcG9ydCB7Zml4U3VtbWFyeX0gZnJvbSAnLi9tb2R1bGVzL2ZpeFN1bW1hcnknO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtsaW5rU2VhcmNoRWRpdEJ1dHRvbn0gZnJvbSAnLi9tb2R1bGVzL2xpbmtTZWFyY2hFZGl0QnV0dG9uJztcbmltcG9ydCB7bG9hZEdhZGdldEVkaXRGb3JtfSBmcm9tICcuL21vZHVsZXMvbG9hZEdhZGdldEVkaXRGb3JtJztcbmltcG9ydCB7cmVwbGFjZVJhbmRvbX0gZnJvbSAnLi9tb2R1bGVzL3JlcGxhY2VSYW5kb20nO1xuaW1wb3J0IHtzbWFydEVkaXRJbnRyb30gZnJvbSAnLi9tb2R1bGVzL3NtYXJ0RWRpdEludHJvJztcbmltcG9ydCB7c21hcnROZXdTZWN0aW9ufSBmcm9tICcuL21vZHVsZXMvc21hcnROZXdTZWN0aW9uJztcblxuKGZ1bmN0aW9uIHVzZXJKUygpOiB2b2lkIHtcblx0Y29uc3Qge2NvbmZpZ0tleX0gPSBPUFRJT05TO1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChjb25maWdLZXksIHRydWUpO1xuXG5cdC8qIOWKoOi9vee8lui+keeVjOmdouiEmuacrCAqL1xuXHR2b2lkIGxvYWRHYWRnZXRFZGl0Rm9ybSgpO1xuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOaXpeW/l+KAneiPnOWNlSAqL1xuXHRcdGFkZExvZygpO1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuXHRcdGFkZFN1YnBhZ2UoKTtcblx0XHQvKiDkv67mlLnliKDpmaTmkZjopoEgKi9cblx0XHRmaXhSZWFzb24oJGJvZHkpO1xuXHRcdC8qIOS/ruaUuee8lui+keaRmOimgSAqL1xuXHRcdGZpeFN1bW1hcnkoJGJvZHkpO1xuXHRcdC8qIOWcqFtbU3BlY2lhbDpMaW5rU2VhcmNoXV3mmL7npLrigJznvJbovpHigJ3mjInpkq4gKi9cblx0XHRsaW5rU2VhcmNoRWRpdEJ1dHRvbigkYm9keSk7XG5cdFx0Lyog57yW6L6R5o+Q56S677yIRWRpdEludHJv77yJICovXG5cdFx0c21hcnRFZGl0SW50cm8oJGJvZHkpO1xuXHRcdC8qIOaZuuiDveiuqOiuuumhtee8lui+ke+8iOaWsOW7uu+8iSAqL1xuXHRcdHNtYXJ0TmV3U2VjdGlvbigkYm9keSk7XG5cdFx0Lyog5pu/5o2i6ZqP5py66aG16Z2i6ZO+5o6lICovXG5cdFx0cmVwbGFjZVJhbmRvbSgkYm9keSk7XG5cdH0pO1xufSkoKTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGxpbmtTZWFyY2hFZGl0QnV0dG9uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdMaW5rU2VhcmNoJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignLm13LXNwY29udGVudCBhW2hyZWZePVwiL3dpa2lcIl0nKSkge1xuXHRcdCQoJzxzcGFuPicpXG5cdFx0XHQuYXBwZW5kKCcg77yIJywgJCgnPGE+JykuYXR0cignaHJlZicsIGAke2VsZW1lbnQuaHJlZn0/YWN0aW9uPWVkaXRgKS50ZXh0KGdldE1lc3NhZ2UoJ0VkaXQnKSksICfvvIknKVxuXHRcdFx0Lmluc2VydEFmdGVyKGVsZW1lbnQpO1xuXHR9XG59O1xuXG5leHBvcnQge2xpbmtTZWFyY2hFZGl0QnV0dG9ufTtcbiIsICJjb25zdCBsb2FkR2FkZ2V0RWRpdEZvcm0gPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IEVESVRfR0FER0VUUyA9IFsnZXh0LmdhZGdldC5FZGl0Rm9ybScsICdleHQuZ2FkZ2V0LkVkaXRGb3JtX0pTJ107XG5cdGNvbnN0IHVzaW5nRWRpdEZvcm1KUyA9IChnYWRnZXRzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKGdhZGdldHMpO1xuXHR9O1xuXHRjb25zdCB7d2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKHdnQWN0aW9uKSkge1xuXHRcdHVzaW5nRWRpdEZvcm1KUyhFRElUX0dBREdFVFMpO1xuXHR9XG59O1xuXG5leHBvcnQge2xvYWRHYWRnZXRFZGl0Rm9ybX07XG4iLCAiaW1wb3J0IHt1c2VySGFzUmlnaHR9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHJlcGxhY2VSYW5kb20gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSA9PiB7XG5cdGNvbnN0IHt3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdC8vIERpc2FibGVkIGZvciB3aWtpcyBvdGhlciB0aGFuIHpocWl1d2VuYmFpa2Vcblx0aWYgKHdnV2lraUlEICE9PSAnemhxaXV3ZW5iYWlrZScpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIXVzZXJIYXNSaWdodCgncm5yc3ZlcmlmeS1jb25maXJtZWQnKSAmJiAhdXNlckhhc1JpZ2h0KCdybnJzdmVyaWZ5LWV4ZW1wdCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHJhbmRvbVBhZ2VMaW5rID0gJGJvZHkuZmluZCgnI24tcmFuZG9tcGFnZSBhJyk7XG5cdCRyYW5kb21QYWdlTGluay5hdHRyKCdocmVmJywgJy93aWtpL1NwZWNpYWw6UmFuZG9tUGFnZScpO1xufTtcblxuZXhwb3J0IHtyZXBsYWNlUmFuZG9tfTtcbiIsICJjb25zdCBzbWFydEVkaXRJbnRybyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z05hbWVzcGFjZU51bWJlciwgd2dDYXRlZ29yaWVzfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKCF3Z0NhdGVnb3JpZXMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJGJvZHkuZmluZCgnLm13LWVkaXRzZWN0aW9uLCAjY2EtZWRpdCwgI2NhLWFkZHNlY3Rpb24nKS5maW5kKCdhJyk7XG5cdGNvbnN0IGFkZEVkaXRJbnRybyA9IChuYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJHRhcmdldCkge1xuXHRcdFx0ZWxlbWVudC5ocmVmID0gYCR7ZWxlbWVudC5ocmVmfSZlZGl0aW50cm89JHtuYW1lfWA7XG5cdFx0fVxuXHR9O1xuXG5cdHN3aXRjaCAod2dOYW1lc3BhY2VOdW1iZXIpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRpZiAod2dDYXRlZ29yaWVzLmluY2x1ZGVzKCflhajpg6jmtojmrafkuYnpobXpnaInKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkRpc2FtYmlnX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdnQ2F0ZWdvcmllcy5pbmNsdWRlcygn5Zyo5LiW5Lq654mpJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpCTFBfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHdnQ2F0ZWdvcmllcy5zb21lKChlbGVtZW50OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gL+aKl+aXpT9b5oiY5oiwXVvkuonniK1dP1vnibrniqdd54myfOeDiOWjq3xb5oiY5oiwXVvmlpfprKXprKZd6Iux6ZuEfOiLsembhD/mqKFb56+E6IyDXT986Iux6ZuEP+eDiOWjqz985Lq65rCRKOaVmeiCsuWutnxb6Im66JedXVvmnK/ooZNd5a62fOenkVvlrablrbhd5a62fOiLsembhHzmpbfmqKEpfOWFseWSjFvlm73lnItdW+WLi+WLs13nq6B8W+S4g+WFq13kuIBb5YuL5YuzXeeroFvnjbLojrdd5b6X6ICFfFvkuIDnibld562J5Yqf6IejLy50ZXN0KFxuXHRcdFx0XHRcdFx0ZWxlbWVudFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpCTFBfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRpZiAod2dDYXRlZ29yaWVzLmluY2x1ZGVzKCfmsYLpl7vnmb7np5HmlrnpkojlrozmlbTliJfooagnKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOlBvbGljeV9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgODpcblx0XHRjYXNlIDEyOiB7XG5cdFx0XHRpZiAod2dDYXRlZ29yaWVzLmluY2x1ZGVzKCdDQy1CWS1OQy1TQS00LjAnKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOk5vbkNvbW1lcmNpYWxfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2dDYXRlZ29yaWVzLmluY2x1ZGVzKCdHUEwtMy4wJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpHUEwtMy4wX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdnQ2F0ZWdvcmllcy5pbmNsdWRlcygnR1BMLTIuMC1vci1sYXRlcicpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6R1BMLTIuMC1vci1sYXRlcl9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmICh3Z0NhdGVnb3JpZXMuaW5jbHVkZXMoJ01JVOiuuOWPr+ivgScpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6TUlUX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgJGNvcHl3YXJuOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjZWRpdHBhZ2UtY29weXdhcm4nKTtcblx0XHRcdGNvbnN0ICRlZGl0aW50cm86IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5tdy1lZGl0aW50cm8nKTtcblx0XHRcdGlmIChbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMod2dBY3Rpb24pICYmICRjb3B5d2FybiAmJiAkZWRpdGludHJvKSB7XG5cdFx0XHRcdCRlZGl0aW50cm8uYXBwZW5kVG8oJGNvcHl3YXJuKTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtzbWFydEVkaXRJbnRyb307XG4iLCAiY29uc3Qgc21hcnROZXdTZWN0aW9uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAoIW13LnVzZXIub3B0aW9ucy5nZXQoJ2Rpc2N1c3Npb250b29scy1uZXd0b3BpY3Rvb2wnKSB8fCAhbXcudXNlci5vcHRpb25zLmdldCgnZGlzY3Vzc2lvbnRvb2xzLWJldGFlbmFibGUnKSkge1xuXHRcdGNvbnN0ICRjYVRhbGs6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNjYS10YWxrJyk7XG5cdFx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0XHRpZiAoJGNhVGFsay5oYXNDbGFzcygnbmV3JykgJiYgd2dOYW1lc3BhY2VOdW1iZXIgIT09IDIpIHtcblx0XHRcdGNvbnN0ICRhOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJCgnYTpmaXJzdCcsICRjYVRhbGspO1xuXHRcdFx0JGEuYXR0cignaHJlZicsIGAkeyRhLmF0dHIoJ2hyZWYnKX0mc2VjdGlvbj1uZXdgKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7c21hcnROZXdTZWN0aW9ufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBLENBQUE7QUFBQUMsU0FBQUQsaUJBQUE7RUFBQUUsV0FBQUEs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LG1CQUFBaUQsU0FBUSxFQUFFQyxLQUFNbkUsV0FBeUM7QUFFN0RkLFdBQU87QUFFUFcsZUFBVztBQUVYRSxjQUFVQyxLQUFLO0FBRWZTLGVBQVdULEtBQUs7QUFFaEJrQix5QkFBcUJsQixLQUFLO0FBRTFCOEMsbUJBQWU5QyxLQUFLO0FBRXBCeUQsb0JBQWdCekQsS0FBSztBQUVyQjBDLGtCQUFjMUMsS0FBSztFQUNwQixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsib3B0aW9uc19leHBvcnRzIiwgIl9fZXhwb3J0IiwgImNvbmZpZ0tleSIsICJkZWZhdWx0IiwgIm9wdGlvbnNfZGVmYXVsdCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJFZGl0IiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkxvZyIsICJTdWJwYWdlcyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYWRkTG9nIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbmNsdWRlcyIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgImdldFVybCIsICJwYWdlIiwgImFkZFN1YnBhZ2UiLCAiY29uY2F0IiwgImZpeFJlYXNvbiIsICIkYm9keSIsICJ3Z0FjdGlvbiIsICIkd3BSZWFzb24iLCAiZmluZCIsICJsZW5ndGgiLCAiYXV0b1JlYXNvblJlZ0V4cCIsICJ0ZXN0IiwgIlN0cmluZyIsICJ2YWwiLCAiZml4U3VtbWFyeSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJodG1sIiwgInRleHQiLCAicmVwbGFjZSIsICJwcm9wIiwgImNoZWNrZWQiLCAiZGlzYWJsZWQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImxpbmtTZWFyY2hFZGl0QnV0dG9uIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgIiQiLCAiYXBwZW5kIiwgImF0dHIiLCAiaHJlZiIsICJpbnNlcnRBZnRlciIsICJlcnIiLCAiZSIsICJmIiwgImxvYWRHYWRnZXRFZGl0Rm9ybSIsICJFRElUX0dBREdFVFMiLCAidXNpbmdFZGl0Rm9ybUpTIiwgImdhZGdldHMiLCAibG9hZGVyIiwgInVzaW5nIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXBsYWNlUmFuZG9tIiwgIndnV2lraUlEIiwgInVzZXJIYXNSaWdodCIsICIkcmFuZG9tUGFnZUxpbmsiLCAic21hcnRFZGl0SW50cm8iLCAid2dDYXRlZ29yaWVzIiwgIiR0YXJnZXQiLCAiYWRkRWRpdEludHJvIiwgIm5hbWUiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAic29tZSIsICIkY29weXdhcm4iLCAiJGVkaXRpbnRybyIsICJhcHBlbmRUbyIsICJzbWFydE5ld1NlY3Rpb24iLCAidXNlciIsICJvcHRpb25zIiwgIiRjYVRhbGsiLCAiaGFzQ2xhc3MiLCAiJGEiLCAidXNlckpTIiwgImNvbmZpZ0tleTIiLCAic2V0IiwgImdldEJvZHkiLCAidGhlbiJdCn0K
