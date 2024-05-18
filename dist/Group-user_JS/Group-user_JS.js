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
  if (!(0, import_ext_gadget2.userIsInGroup)(["rnrsverify-confirmed", "rnrsverify-exempt", "steward", "qiuwen", "confirmed", "autoconfirmed"])) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXVzZXJfSlMvb3B0aW9ucy5qc29uIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2FkZExvZy50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2FkZFN1YnBhZ2UudHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9maXhSZWFzb24udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9maXhTdW1tYXJ5LnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL0dyb3VwLXVzZXJfSlMudHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9saW5rU2VhcmNoRWRpdEJ1dHRvbi50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2xvYWRHYWRnZXRFZGl0Rm9ybS50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL3JlcGxhY2VSYW5kb20udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9zbWFydEVkaXRJbnRyby50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL3NtYXJ0TmV3U2VjdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1Hcm91cC11c2VyX0pTX19Jbml0aWFsaXplZFwiXG59XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEVkaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCcsXG5cdFx0XHRqYTogJ+e3qOmbhicsXG5cdFx0XHQnemgtaGFucyc6ICfnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn57eo6LyvJyxcblx0XHR9KSxcblx0XHRMb2c6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9nJyxcblx0XHRcdGphOiAn44Ot44KwJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aXpeW/lycsXG5cdFx0XHQnemgtaGFudCc6ICfml6XoqownLFxuXHRcdH0pLFxuXHRcdFN1YnBhZ2VzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N1YnBhZ2UnLFxuXHRcdFx0amE6ICflrZDjg5rjg7zjgrgnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Q6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtkOmggemdoicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYWRkTG9nID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChbLTEsIDIsIDNdLmluY2x1ZGVzKHdnTmFtZXNwYWNlTnVtYmVyKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0J3AtdGInLFxuXHRcdG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkxvZ3MnLCB7XG5cdFx0XHRwYWdlOiB3Z1BhZ2VOYW1lLFxuXHRcdH0pLFxuXHRcdGdldE1lc3NhZ2UoJ0xvZycpLFxuXHRcdCd0LWxvZydcblx0KTtcbn07XG5cbmV4cG9ydCB7YWRkTG9nfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbi8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuY29uc3QgYWRkU3VicGFnZSA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoWy0xLCAwLCAxNF0uaW5jbHVkZXMod2dOYW1lc3BhY2VOdW1iZXIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHQncC10YicsXG5cdFx0bXcudXRpbC5nZXRVcmwoYFNwZWNpYWw6UHJlZml4SW5kZXgvJHt3Z1BhZ2VOYW1lfWApLFxuXHRcdGdldE1lc3NhZ2UoJ1N1YnBhZ2VzJyksXG5cdFx0J3Qtc3VicGFnZSdcblx0KTtcbn07XG5cbmV4cG9ydCB7YWRkU3VicGFnZX07XG4iLCAiY29uc3QgZml4UmVhc29uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z0FjdGlvbiA9PT0gJ2RlbGV0ZScpIHtcblx0XHRjb25zdCAkd3BSZWFzb246IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BSZWFzb25dJyk7XG5cdFx0aWYgKCEkd3BSZWFzb24ubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYXV0b1JlYXNvblJlZ0V4cDogUmVnRXhwID0gLyjlhoXlrrl8cGFnZSB3YXMgZW1wdHl8Y29udGVudCBiZWZvcmUgYmxhbmtpbmcgd2FzKS9pO1xuXHRcdGlmIChhdXRvUmVhc29uUmVnRXhwLnRlc3QoU3RyaW5nKCR3cFJlYXNvbi52YWwoKSkpKSB7XG5cdFx0XHQkd3BSZWFzb24udmFsKCcnKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7Zml4UmVhc29ufTtcbiIsICJjb25zdCBmaXhTdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRzd2l0Y2ggKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lKSB7XG5cdFx0Y2FzZSAnTWFzc0VkaXRSZWdleCc6XG5cdFx0XHQkYm9keS5maW5kKCcjd3BTdW1tYXJ5TGFiZWwnKS5odG1sKFxuXHRcdFx0XHQkYm9keVxuXHRcdFx0XHRcdC5maW5kKCcjd3BTdW1tYXJ5TGFiZWwnKVxuXHRcdFx0XHRcdC50ZXh0KClcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbI1xcLlxcfCguKz8pXV0vZywgJyQxJylcblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdSZXBsYWNlVGV4dCc6XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPWRvQW5ub3VuY2VdJykucHJvcCh7XG5cdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdFx0YnJlYWs7XG5cdH1cbn07XG5cbmV4cG9ydCB7Zml4U3VtbWFyeX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FkZExvZ30gZnJvbSAnLi9tb2R1bGVzL2FkZExvZyc7XG5pbXBvcnQge2FkZFN1YnBhZ2V9IGZyb20gJy4vbW9kdWxlcy9hZGRTdWJwYWdlJztcbmltcG9ydCB7Zml4UmVhc29ufSBmcm9tICcuL21vZHVsZXMvZml4UmVhc29uJztcbmltcG9ydCB7Zml4U3VtbWFyeX0gZnJvbSAnLi9tb2R1bGVzL2ZpeFN1bW1hcnknO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtsaW5rU2VhcmNoRWRpdEJ1dHRvbn0gZnJvbSAnLi9tb2R1bGVzL2xpbmtTZWFyY2hFZGl0QnV0dG9uJztcbmltcG9ydCB7bG9hZEdhZGdldEVkaXRGb3JtfSBmcm9tICcuL21vZHVsZXMvbG9hZEdhZGdldEVkaXRGb3JtJztcbmltcG9ydCB7cmVwbGFjZVJhbmRvbX0gZnJvbSAnLi9tb2R1bGVzL3JlcGxhY2VSYW5kb20nO1xuaW1wb3J0IHtzbWFydEVkaXRJbnRyb30gZnJvbSAnLi9tb2R1bGVzL3NtYXJ0RWRpdEludHJvJztcbmltcG9ydCB7c21hcnROZXdTZWN0aW9ufSBmcm9tICcuL21vZHVsZXMvc21hcnROZXdTZWN0aW9uJztcblxuKGZ1bmN0aW9uIHVzZXJKUygpOiB2b2lkIHtcblx0Y29uc3Qge2NvbmZpZ0tleX0gPSBPUFRJT05TO1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChjb25maWdLZXksIHRydWUpO1xuXG5cdC8qIOWKoOi9vee8lui+keeVjOmdouiEmuacrCAqL1xuXHR2b2lkIGxvYWRHYWRnZXRFZGl0Rm9ybSgpO1xuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOaXpeW/l+KAneiPnOWNlSAqL1xuXHRcdGFkZExvZygpO1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuXHRcdGFkZFN1YnBhZ2UoKTtcblx0XHQvKiDkv67mlLnliKDpmaTmkZjopoEgKi9cblx0XHRmaXhSZWFzb24oJGJvZHkpO1xuXHRcdC8qIOS/ruaUuee8lui+keaRmOimgSAqL1xuXHRcdGZpeFN1bW1hcnkoJGJvZHkpO1xuXHRcdC8qIOWcqFtbU3BlY2lhbDpMaW5rU2VhcmNoXV3mmL7npLrigJznvJbovpHigJ3mjInpkq4gKi9cblx0XHRsaW5rU2VhcmNoRWRpdEJ1dHRvbigkYm9keSk7XG5cdFx0Lyog57yW6L6R5o+Q56S677yIRWRpdEludHJv77yJICovXG5cdFx0c21hcnRFZGl0SW50cm8oJGJvZHkpO1xuXHRcdC8qIOaZuuiDveiuqOiuuumhtee8lui+ke+8iOaWsOW7uu+8iSAqL1xuXHRcdHNtYXJ0TmV3U2VjdGlvbigkYm9keSk7XG5cdFx0Lyog5pu/5o2i6ZqP5py66aG16Z2i6ZO+5o6lICovXG5cdFx0cmVwbGFjZVJhbmRvbSgkYm9keSk7XG5cdH0pO1xufSkoKTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGxpbmtTZWFyY2hFZGl0QnV0dG9uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdMaW5rU2VhcmNoJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignLm13LXNwY29udGVudCBhW2hyZWZePVwiL3dpa2lcIl0nKSkge1xuXHRcdCQoJzxzcGFuPicpXG5cdFx0XHQuYXBwZW5kKCcg77yIJywgJCgnPGE+JykuYXR0cignaHJlZicsIGAke2VsZW1lbnQuaHJlZn0/YWN0aW9uPWVkaXRgKS50ZXh0KGdldE1lc3NhZ2UoJ0VkaXQnKSksICfvvIknKVxuXHRcdFx0Lmluc2VydEFmdGVyKGVsZW1lbnQpO1xuXHR9XG59O1xuXG5leHBvcnQge2xpbmtTZWFyY2hFZGl0QnV0dG9ufTtcbiIsICJjb25zdCBsb2FkR2FkZ2V0RWRpdEZvcm0gPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IEVESVRfR0FER0VUUyA9IFsnZXh0LmdhZGdldC5FZGl0Rm9ybScsICdleHQuZ2FkZ2V0LkVkaXRGb3JtX0pTJ107XG5cdGNvbnN0IHVzaW5nRWRpdEZvcm1KUyA9IChnYWRnZXRzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKGdhZGdldHMpO1xuXHR9O1xuXHRjb25zdCB7d2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKHdnQWN0aW9uKSkge1xuXHRcdHVzaW5nRWRpdEZvcm1KUyhFRElUX0dBREdFVFMpO1xuXHR9XG59O1xuXG5leHBvcnQge2xvYWRHYWRnZXRFZGl0Rm9ybX07XG4iLCAiaW1wb3J0IHt1c2VySXNJbkdyb3VwfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCByZXBsYWNlUmFuZG9tID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PikgPT4ge1xuXHRjb25zdCB7d2dXaWtpSUR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dXaWtpSUQgIT09ICd6aHFpdXdlbmJhaWtlJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChcblx0XHQhdXNlcklzSW5Hcm91cChbJ3JucnN2ZXJpZnktY29uZmlybWVkJywgJ3JucnN2ZXJpZnktZXhlbXB0JywgJ3N0ZXdhcmQnLCAncWl1d2VuJywgJ2NvbmZpcm1lZCcsICdhdXRvY29uZmlybWVkJ10pXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRyYW5kb21QYWdlTGluayA9ICRib2R5LmZpbmQoJyNuLXJhbmRvbXBhZ2UgYScpO1xuXHQkcmFuZG9tUGFnZUxpbmsuYXR0cignaHJlZicsICcvd2lraS9TcGVjaWFsOlJhbmRvbVBhZ2UnKTtcbn07XG5cbmV4cG9ydCB7cmVwbGFjZVJhbmRvbX07XG4iLCAiY29uc3Qgc21hcnRFZGl0SW50cm8gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dOYW1lc3BhY2VOdW1iZXIsIHdnQ2F0ZWdvcmllc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICghd2dDYXRlZ29yaWVzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRib2R5LmZpbmQoJy5tdy1lZGl0c2VjdGlvbiwgI2NhLWVkaXQsICNjYS1hZGRzZWN0aW9uJykuZmluZCgnYScpO1xuXHRjb25zdCBhZGRFZGl0SW50cm8gPSAobmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICR0YXJnZXQpIHtcblx0XHRcdGVsZW1lbnQuaHJlZiA9IGAke2VsZW1lbnQuaHJlZn0mZWRpdGludHJvPSR7bmFtZX1gO1xuXHRcdH1cblx0fTtcblxuXHRzd2l0Y2ggKHdnTmFtZXNwYWNlTnVtYmVyKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0aWYgKHdnQ2F0ZWdvcmllcy5pbmNsdWRlcygn5YWo6YOo5raI5q2n5LmJ6aG16Z2iJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpEaXNhbWJpZ19lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmICh3Z0NhdGVnb3JpZXMuaW5jbHVkZXMoJ+WcqOS4luS6uueJqScpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6QkxQX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHR3Z0NhdGVnb3JpZXMuc29tZSgoZWxlbWVudDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIC/mipfml6U/W+aImOaIsF1b5LqJ54itXT9b54m654qnXeeJsnzng4jlo6t8W+aImOaIsF1b5paX6ayl6aymXeiLsembhHzoi7Hpm4Q/5qihW+evhOiMg10/fOiLsembhD/ng4jlo6s/fOS6uuawkSjmlZnogrLlrrZ8W+iJuuiXnV1b5pyv6KGTXeWutnznp5Fb5a2m5a24XeWutnzoi7Hpm4R85qW35qihKXzlhbHlkoxb5Zu95ZyLXVvli4vli7Nd56ugfFvkuIPlhatd5LiAW+WLi+WLs13nq6Bb542y6I63XeW+l+iAhXxb5LiA54m5XeetieWKn+iHoy8udGVzdChcblx0XHRcdFx0XHRcdGVsZW1lbnRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6QkxQX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0aWYgKHdnQ2F0ZWdvcmllcy5pbmNsdWRlcygn5rGC6Ze755m+56eR5pa56ZKI5a6M5pW05YiX6KGoJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpQb2xpY3lfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDg6XG5cdFx0Y2FzZSAxMjoge1xuXHRcdFx0aWYgKHdnQ2F0ZWdvcmllcy5pbmNsdWRlcygnQ0MtQlktTkMtU0EtNC4wJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpOb25Db21tZXJjaWFsX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdnQ2F0ZWdvcmllcy5pbmNsdWRlcygnR1BMLTMuMCcpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6R1BMLTMuMF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmICh3Z0NhdGVnb3JpZXMuaW5jbHVkZXMoJ0dQTC0yLjAtb3ItbGF0ZXInKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkdQTC0yLjAtb3ItbGF0ZXJfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2dDYXRlZ29yaWVzLmluY2x1ZGVzKCdNSVTorrjlj6/or4EnKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOk1JVF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0ICRjb3B5d2FybjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI2VkaXRwYWdlLWNvcHl3YXJuJyk7XG5cdFx0XHRjb25zdCAkZWRpdGludHJvOiBKUXVlcnkgPSAkYm9keS5maW5kKCcubXctZWRpdGludHJvJyk7XG5cdFx0XHRpZiAoWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKHdnQWN0aW9uKSAmJiAkY29weXdhcm4gJiYgJGVkaXRpbnRybykge1xuXHRcdFx0XHQkZWRpdGludHJvLmFwcGVuZFRvKCRjb3B5d2Fybik7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7c21hcnRFZGl0SW50cm99O1xuIiwgImNvbnN0IHNtYXJ0TmV3U2VjdGlvbiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCdkaXNjdXNzaW9udG9vbHMtbmV3dG9waWN0b29sJykgfHwgIW13LnVzZXIub3B0aW9ucy5nZXQoJ2Rpc2N1c3Npb250b29scy1iZXRhZW5hYmxlJykpIHtcblx0XHRjb25zdCAkY2FUYWxrOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjY2EtdGFsaycpO1xuXHRcdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdFx0aWYgKCRjYVRhbGsuaGFzQ2xhc3MoJ25ldycpICYmIHdnTmFtZXNwYWNlTnVtYmVyICE9PSAyKSB7XG5cdFx0XHRjb25zdCAkYTogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoJ2E6Zmlyc3QnLCAkY2FUYWxrKTtcblx0XHRcdCRhLmF0dHIoJ2hyZWYnLCBgJHskYS5hdHRyKCdocmVmJyl9JnNlY3Rpb249bmV3YCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge3NtYXJ0TmV3U2VjdGlvbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQSxDQUFBO0FBQUFDLFNBQUFELGlCQUFBO0VBQUFFLFdBQUFBLE1B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QixtQkFBQWlELFNBQVEsRUFBRUMsS0FBTW5FLFdBQXlDO0FBRTdEZCxXQUFPO0FBRVBXLGVBQVc7QUFFWEUsY0FBVUMsS0FBSztBQUVmUyxlQUFXVCxLQUFLO0FBRWhCa0IseUJBQXFCbEIsS0FBSztBQUUxQjhDLG1CQUFlOUMsS0FBSztBQUVwQnlELG9CQUFnQnpELEtBQUs7QUFFckIwQyxrQkFBYzFDLEtBQUs7RUFDcEIsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbIm9wdGlvbnNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJjb25maWdLZXkiLCAiZGVmYXVsdCIsICJvcHRpb25zX2RlZmF1bHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiRWRpdCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJMb2ciLCAiU3VicGFnZXMiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFkZExvZyIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW5jbHVkZXMiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJnZXRVcmwiLCAicGFnZSIsICJhZGRTdWJwYWdlIiwgImNvbmNhdCIsICJmaXhSZWFzb24iLCAiJGJvZHkiLCAid2dBY3Rpb24iLCAiJHdwUmVhc29uIiwgImZpbmQiLCAibGVuZ3RoIiwgImF1dG9SZWFzb25SZWdFeHAiLCAidGVzdCIsICJTdHJpbmciLCAidmFsIiwgImZpeFN1bW1hcnkiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAiaHRtbCIsICJ0ZXh0IiwgInJlcGxhY2UiLCAicHJvcCIsICJjaGVja2VkIiwgImRpc2FibGVkIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJsaW5rU2VhcmNoRWRpdEJ1dHRvbiIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkIiwgImFwcGVuZCIsICJhdHRyIiwgImhyZWYiLCAiaW5zZXJ0QWZ0ZXIiLCAiZXJyIiwgImUiLCAiZiIsICJsb2FkR2FkZ2V0RWRpdEZvcm0iLCAiRURJVF9HQURHRVRTIiwgInVzaW5nRWRpdEZvcm1KUyIsICJnYWRnZXRzIiwgImxvYWRlciIsICJ1c2luZyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVwbGFjZVJhbmRvbSIsICJ3Z1dpa2lJRCIsICJ1c2VySXNJbkdyb3VwIiwgIiRyYW5kb21QYWdlTGluayIsICJzbWFydEVkaXRJbnRybyIsICJ3Z0NhdGVnb3JpZXMiLCAiJHRhcmdldCIsICJhZGRFZGl0SW50cm8iLCAibmFtZSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJzb21lIiwgIiRjb3B5d2FybiIsICIkZWRpdGludHJvIiwgImFwcGVuZFRvIiwgInNtYXJ0TmV3U2VjdGlvbiIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiJGNhVGFsayIsICJoYXNDbGFzcyIsICIkYSIsICJ1c2VySlMiLCAiY29uZmlnS2V5MiIsICJzZXQiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=
