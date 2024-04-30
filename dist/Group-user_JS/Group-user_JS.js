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
  if (!(0, import_ext_gadget2.userHasRight)("rnrsverify-confirmed") || !(0, import_ext_gadget2.userHasRight)("rnrsverify-exempt")) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXVzZXJfSlMvb3B0aW9ucy5qc29uIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2FkZExvZy50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2FkZFN1YnBhZ2UudHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9maXhSZWFzb24udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9maXhTdW1tYXJ5LnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL0dyb3VwLXVzZXJfSlMudHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9saW5rU2VhcmNoRWRpdEJ1dHRvbi50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2xvYWRHYWRnZXRFZGl0Rm9ybS50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL3JlcGxhY2VSYW5kb20udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9zbWFydEVkaXRJbnRyby50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL3NtYXJ0TmV3U2VjdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1Hcm91cC11c2VyX0pTX19Jbml0aWFsaXplZFwiXG59XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEVkaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCcsXG5cdFx0XHRqYTogJ+e3qOmbhicsXG5cdFx0XHQnemgtaGFucyc6ICfnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn57eo6LyvJyxcblx0XHR9KSxcblx0XHRMb2c6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9nJyxcblx0XHRcdGphOiAn44Ot44KwJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aXpeW/lycsXG5cdFx0XHQnemgtaGFudCc6ICfml6XoqownLFxuXHRcdH0pLFxuXHRcdFN1YnBhZ2VzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N1YnBhZ2UnLFxuXHRcdFx0amE6ICflrZDjg5rjg7zjgrgnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Q6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtkOmggemdoicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYWRkTG9nID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChbLTEsIDIsIDNdLmluY2x1ZGVzKHdnTmFtZXNwYWNlTnVtYmVyKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0J3AtdGInLFxuXHRcdG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkxvZ3MnLCB7XG5cdFx0XHRwYWdlOiB3Z1BhZ2VOYW1lLFxuXHRcdH0pLFxuXHRcdGdldE1lc3NhZ2UoJ0xvZycpLFxuXHRcdCd0LWxvZydcblx0KTtcbn07XG5cbmV4cG9ydCB7YWRkTG9nfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbi8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuY29uc3QgYWRkU3VicGFnZSA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoWy0xLCAwLCAxNF0uaW5jbHVkZXMod2dOYW1lc3BhY2VOdW1iZXIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHQncC10YicsXG5cdFx0bXcudXRpbC5nZXRVcmwoYFNwZWNpYWw6UHJlZml4SW5kZXgvJHt3Z1BhZ2VOYW1lfWApLFxuXHRcdGdldE1lc3NhZ2UoJ1N1YnBhZ2VzJyksXG5cdFx0J3Qtc3VicGFnZSdcblx0KTtcbn07XG5cbmV4cG9ydCB7YWRkU3VicGFnZX07XG4iLCAiY29uc3QgZml4UmVhc29uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z0FjdGlvbiA9PT0gJ2RlbGV0ZScpIHtcblx0XHRjb25zdCAkd3BSZWFzb246IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BSZWFzb25dJyk7XG5cdFx0aWYgKCEkd3BSZWFzb24ubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYXV0b1JlYXNvblJlZ0V4cDogUmVnRXhwID0gLyjlhoXlrrl8cGFnZSB3YXMgZW1wdHl8Y29udGVudCBiZWZvcmUgYmxhbmtpbmcgd2FzKS9pO1xuXHRcdGlmIChhdXRvUmVhc29uUmVnRXhwLnRlc3QoU3RyaW5nKCR3cFJlYXNvbi52YWwoKSkpKSB7XG5cdFx0XHQkd3BSZWFzb24udmFsKCcnKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7Zml4UmVhc29ufTtcbiIsICJjb25zdCBmaXhTdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRzd2l0Y2ggKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lKSB7XG5cdFx0Y2FzZSAnTWFzc0VkaXRSZWdleCc6XG5cdFx0XHQkYm9keS5maW5kKCcjd3BTdW1tYXJ5TGFiZWwnKS5odG1sKFxuXHRcdFx0XHQkYm9keVxuXHRcdFx0XHRcdC5maW5kKCcjd3BTdW1tYXJ5TGFiZWwnKVxuXHRcdFx0XHRcdC50ZXh0KClcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbI1xcLlxcfCguKz8pXV0vZywgJyQxJylcblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdSZXBsYWNlVGV4dCc6XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPWRvQW5ub3VuY2VdJykucHJvcCh7XG5cdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdFx0YnJlYWs7XG5cdH1cbn07XG5cbmV4cG9ydCB7Zml4U3VtbWFyeX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FkZExvZ30gZnJvbSAnLi9tb2R1bGVzL2FkZExvZyc7XG5pbXBvcnQge2FkZFN1YnBhZ2V9IGZyb20gJy4vbW9kdWxlcy9hZGRTdWJwYWdlJztcbmltcG9ydCB7Zml4UmVhc29ufSBmcm9tICcuL21vZHVsZXMvZml4UmVhc29uJztcbmltcG9ydCB7Zml4U3VtbWFyeX0gZnJvbSAnLi9tb2R1bGVzL2ZpeFN1bW1hcnknO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtsaW5rU2VhcmNoRWRpdEJ1dHRvbn0gZnJvbSAnLi9tb2R1bGVzL2xpbmtTZWFyY2hFZGl0QnV0dG9uJztcbmltcG9ydCB7bG9hZEdhZGdldEVkaXRGb3JtfSBmcm9tICcuL21vZHVsZXMvbG9hZEdhZGdldEVkaXRGb3JtJztcbmltcG9ydCB7cmVwbGFjZVJhbmRvbX0gZnJvbSAnLi9tb2R1bGVzL3JlcGxhY2VSYW5kb20nO1xuaW1wb3J0IHtzbWFydEVkaXRJbnRyb30gZnJvbSAnLi9tb2R1bGVzL3NtYXJ0RWRpdEludHJvJztcbmltcG9ydCB7c21hcnROZXdTZWN0aW9ufSBmcm9tICcuL21vZHVsZXMvc21hcnROZXdTZWN0aW9uJztcblxuKGZ1bmN0aW9uIHVzZXJKUygpOiB2b2lkIHtcblx0Y29uc3Qge2NvbmZpZ0tleX0gPSBPUFRJT05TO1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChjb25maWdLZXksIHRydWUpO1xuXG5cdC8qIOWKoOi9vee8lui+keeVjOmdouiEmuacrCAqL1xuXHR2b2lkIGxvYWRHYWRnZXRFZGl0Rm9ybSgpO1xuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOaXpeW/l+KAneiPnOWNlSAqL1xuXHRcdGFkZExvZygpO1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuXHRcdGFkZFN1YnBhZ2UoKTtcblx0XHQvKiDkv67mlLnliKDpmaTmkZjopoEgKi9cblx0XHRmaXhSZWFzb24oJGJvZHkpO1xuXHRcdC8qIOS/ruaUuee8lui+keaRmOimgSAqL1xuXHRcdGZpeFN1bW1hcnkoJGJvZHkpO1xuXHRcdC8qIOWcqFtbU3BlY2lhbDpMaW5rU2VhcmNoXV3mmL7npLrigJznvJbovpHigJ3mjInpkq4gKi9cblx0XHRsaW5rU2VhcmNoRWRpdEJ1dHRvbigkYm9keSk7XG5cdFx0Lyog57yW6L6R5o+Q56S677yIRWRpdEludHJv77yJICovXG5cdFx0c21hcnRFZGl0SW50cm8oJGJvZHkpO1xuXHRcdC8qIOaZuuiDveiuqOiuuumhtee8lui+ke+8iOaWsOW7uu+8iSAqL1xuXHRcdHNtYXJ0TmV3U2VjdGlvbigkYm9keSk7XG5cdFx0Lyog5pu/5o2i6ZqP5py66aG16Z2i6ZO+5o6lICovXG5cdFx0cmVwbGFjZVJhbmRvbSgkYm9keSk7XG5cdH0pO1xufSkoKTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGxpbmtTZWFyY2hFZGl0QnV0dG9uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdMaW5rU2VhcmNoJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignLm13LXNwY29udGVudCBhW2hyZWZePVwiL3dpa2lcIl0nKSkge1xuXHRcdCQoJzxzcGFuPicpXG5cdFx0XHQuYXBwZW5kKCcg77yIJywgJCgnPGE+JykuYXR0cignaHJlZicsIGAke2VsZW1lbnQuaHJlZn0/YWN0aW9uPWVkaXRgKS50ZXh0KGdldE1lc3NhZ2UoJ0VkaXQnKSksICfvvIknKVxuXHRcdFx0Lmluc2VydEFmdGVyKGVsZW1lbnQpO1xuXHR9XG59O1xuXG5leHBvcnQge2xpbmtTZWFyY2hFZGl0QnV0dG9ufTtcbiIsICJjb25zdCBsb2FkR2FkZ2V0RWRpdEZvcm0gPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IEVESVRfR0FER0VUUyA9IFsnZXh0LmdhZGdldC5FZGl0Rm9ybScsICdleHQuZ2FkZ2V0LkVkaXRGb3JtX0pTJ107XG5cdGNvbnN0IHVzaW5nRWRpdEZvcm1KUyA9IChnYWRnZXRzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKGdhZGdldHMpO1xuXHR9O1xuXHRjb25zdCB7d2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKHdnQWN0aW9uKSkge1xuXHRcdHVzaW5nRWRpdEZvcm1KUyhFRElUX0dBREdFVFMpO1xuXHR9XG59O1xuXG5leHBvcnQge2xvYWRHYWRnZXRFZGl0Rm9ybX07XG4iLCAiaW1wb3J0IHt1c2VySGFzUmlnaHR9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHJlcGxhY2VSYW5kb20gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSA9PiB7XG5cdGlmICghdXNlckhhc1JpZ2h0KCdybnJzdmVyaWZ5LWNvbmZpcm1lZCcpIHx8ICF1c2VySGFzUmlnaHQoJ3JucnN2ZXJpZnktZXhlbXB0JykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkcmFuZG9tUGFnZUxpbmsgPSAkYm9keS5maW5kKCcjbi1yYW5kb21wYWdlIGEnKTtcblx0JHJhbmRvbVBhZ2VMaW5rLmF0dHIoJ2hyZWYnLCAnL3dpa2kvU3BlY2lhbDpSYW5kb21QYWdlJyk7XG59O1xuXG5leHBvcnQge3JlcGxhY2VSYW5kb219O1xuIiwgImNvbnN0IHNtYXJ0RWRpdEludHJvID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z0NhdGVnb3JpZXN9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoIXdnQ2F0ZWdvcmllcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkYm9keS5maW5kKCcubXctZWRpdHNlY3Rpb24sICNjYS1lZGl0LCAjY2EtYWRkc2VjdGlvbicpLmZpbmQoJ2EnKTtcblx0Y29uc3QgYWRkRWRpdEludHJvID0gKG5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkdGFyZ2V0KSB7XG5cdFx0XHRlbGVtZW50LmhyZWYgPSBgJHtlbGVtZW50LmhyZWZ9JmVkaXRpbnRybz0ke25hbWV9YDtcblx0XHR9XG5cdH07XG5cblx0c3dpdGNoICh3Z05hbWVzcGFjZU51bWJlcikge1xuXHRcdGNhc2UgMDpcblx0XHRcdGlmICh3Z0NhdGVnb3JpZXMuaW5jbHVkZXMoJ+WFqOmDqOa2iOatp+S5iemhtemdoicpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6RGlzYW1iaWdfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2dDYXRlZ29yaWVzLmluY2x1ZGVzKCflnKjkuJbkurrniaknKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkJMUF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0d2dDYXRlZ29yaWVzLnNvbWUoKGVsZW1lbnQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0XHRcdHJldHVybiAv5oqX5pelP1vmiJjmiLBdW+S6ieeIrV0/W+eJuueKp13nibJ854OI5aOrfFvmiJjmiLBdW+aWl+mspemspl3oi7Hpm4R86Iux6ZuEP+aooVvnr4TojINdP3zoi7Hpm4Q/54OI5aOrP3zkurrmsJEo5pWZ6IKy5a62fFvoibrol51dW+acr+ihk13lrrZ856eRW+WtpuWtuF3lrrZ86Iux6ZuEfOalt+aooSl85YWx5ZKMW+WbveWci11b5YuL5YuzXeeroHxb5LiD5YWrXeS4gFvli4vli7Nd56ugW+eNsuiOt13lvpfogIV8W+S4gOeJuV3nrYnlip/oh6MvLnRlc3QoXG5cdFx0XHRcdFx0XHRlbGVtZW50XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdCkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkJMUF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdGlmICh3Z0NhdGVnb3JpZXMuaW5jbHVkZXMoJ+axgumXu+eZvuenkeaWuemSiOWujOaVtOWIl+ihqCcpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6UG9saWN5X2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA4OlxuXHRcdGNhc2UgMTI6IHtcblx0XHRcdGlmICh3Z0NhdGVnb3JpZXMuaW5jbHVkZXMoJ0NDLUJZLU5DLVNBLTQuMCcpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6Tm9uQ29tbWVyY2lhbF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmICh3Z0NhdGVnb3JpZXMuaW5jbHVkZXMoJ0dQTC0zLjAnKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkdQTC0zLjBfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2dDYXRlZ29yaWVzLmluY2x1ZGVzKCdHUEwtMi4wLW9yLWxhdGVyJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpHUEwtMi4wLW9yLWxhdGVyX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdnQ2F0ZWdvcmllcy5pbmNsdWRlcygnTUlU6K645Y+v6K+BJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpNSVRfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkY29weXdhcm46IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNlZGl0cGFnZS1jb3B5d2FybicpO1xuXHRcdFx0Y29uc3QgJGVkaXRpbnRybzogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLm13LWVkaXRpbnRybycpO1xuXHRcdFx0aWYgKFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikgJiYgJGNvcHl3YXJuICYmICRlZGl0aW50cm8pIHtcblx0XHRcdFx0JGVkaXRpbnRyby5hcHBlbmRUbygkY29weXdhcm4pO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge3NtYXJ0RWRpdEludHJvfTtcbiIsICJjb25zdCBzbWFydE5ld1NlY3Rpb24gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmICghbXcudXNlci5vcHRpb25zLmdldCgnZGlzY3Vzc2lvbnRvb2xzLW5ld3RvcGljdG9vbCcpIHx8ICFtdy51c2VyLm9wdGlvbnMuZ2V0KCdkaXNjdXNzaW9udG9vbHMtYmV0YWVuYWJsZScpKSB7XG5cdFx0Y29uc3QgJGNhVGFsazogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI2NhLXRhbGsnKTtcblx0XHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRcdGlmICgkY2FUYWxrLmhhc0NsYXNzKCduZXcnKSAmJiB3Z05hbWVzcGFjZU51bWJlciAhPT0gMikge1xuXHRcdFx0Y29uc3QgJGE6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKCdhOmZpcnN0JywgJGNhVGFsayk7XG5cdFx0XHQkYS5hdHRyKCdocmVmJywgYCR7JGEuYXR0cignaHJlZicpfSZzZWN0aW9uPW5ld2ApO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtzbWFydE5ld1NlY3Rpb259O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCxpQkFBQTtFQUFBRSxXQUFBQSxNQUFBQTtFQUFBQyxTQUFBQSxNQUFBQztBQUFBLENBQUE7QUFDQyxJQUFBRixZQUFhO0FBRGQsSUFBQUUsa0JBQUE7RUFDQ0Y7QUFDRDs7QUNGQSxJQUFBRyxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFD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ICJfX2V4cG9ydCIsICJjb25maWdLZXkiLCAiZGVmYXVsdCIsICJvcHRpb25zX2RlZmF1bHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiRWRpdCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJMb2ciLCAiU3VicGFnZXMiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFkZExvZyIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW5jbHVkZXMiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJnZXRVcmwiLCAicGFnZSIsICJhZGRTdWJwYWdlIiwgImNvbmNhdCIsICJmaXhSZWFzb24iLCAiJGJvZHkiLCAid2dBY3Rpb24iLCAiJHdwUmVhc29uIiwgImZpbmQiLCAibGVuZ3RoIiwgImF1dG9SZWFzb25SZWdFeHAiLCAidGVzdCIsICJTdHJpbmciLCAidmFsIiwgImZpeFN1bW1hcnkiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAiaHRtbCIsICJ0ZXh0IiwgInJlcGxhY2UiLCAicHJvcCIsICJjaGVja2VkIiwgImRpc2FibGVkIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJsaW5rU2VhcmNoRWRpdEJ1dHRvbiIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkIiwgImFwcGVuZCIsICJhdHRyIiwgImhyZWYiLCAiaW5zZXJ0QWZ0ZXIiLCAiZXJyIiwgImUiLCAiZiIsICJsb2FkR2FkZ2V0RWRpdEZvcm0iLCAiRURJVF9HQURHRVRTIiwgInVzaW5nRWRpdEZvcm1KUyIsICJnYWRnZXRzIiwgImxvYWRlciIsICJ1c2luZyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVwbGFjZVJhbmRvbSIsICJ1c2VySGFzUmlnaHQiLCAiJHJhbmRvbVBhZ2VMaW5rIiwgInNtYXJ0RWRpdEludHJvIiwgIndnQ2F0ZWdvcmllcyIsICIkdGFyZ2V0IiwgImFkZEVkaXRJbnRybyIsICJuYW1lIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInNvbWUiLCAiJGNvcHl3YXJuIiwgIiRlZGl0aW50cm8iLCAiYXBwZW5kVG8iLCAic21hcnROZXdTZWN0aW9uIiwgInVzZXIiLCAib3B0aW9ucyIsICIkY2FUYWxrIiwgImhhc0NsYXNzIiwgIiRhIiwgInVzZXJKUyIsICJjb25maWdLZXkyIiwgInNldCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==
