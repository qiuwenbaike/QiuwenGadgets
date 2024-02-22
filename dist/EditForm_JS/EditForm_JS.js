/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js/edit.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EditForm_JS}
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

// dist/EditForm_JS/EditForm_JS.js
var _mw$config$get;
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
//! src/EditForm_JS/modules/constant.ts
var WG_ACTION = mw.config.get("wgAction");
var WG_WIKI_ID = mw.config.get("wgWikiID");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_USER_GROUPS = (_mw$config$get = mw.config.get("wgUserGroups")) !== null && _mw$config$get !== void 0 ? _mw$config$get : [];
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
//! src/EditForm_JS/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    AiAssisted: (0, import_ext_gadget.localize)({
      en: "This edited content was assisted by artificial intelligence",
      ja: "この編集内容は人工知能による支援を受けています",
      "zh-hans": "此编辑由人工智能（AI）辅助",
      "zh-hant": "此編輯由人工智能（AI）輔助"
    }),
    Preview: (0, import_ext_gadget.localize)({
      en: "Please preview the edited text",
      ja: "プレビューしてください",
      "zh-hans": "请先预览",
      "zh-hant": "請先預覽"
    }),
    RevisionPreloaded: (0, import_ext_gadget.localize)({
      en: "Content of revision $1 preloaded.",
      "zh-hans": "已加载版本$1的内容。",
      "zh-hant": "已載入版本$1的內容。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EditForm_JS/modules/aiAssisted.ts
var isInit = false;
var aiAssisted = ({
  $body,
  $editForm
}) => {
  if (isInit) {
    return;
  }
  const isVeInit = !!ve.init;
  const $target = isVeInit ? $body.find(".ve-ui-mwSaveDialog-checkboxes") : $editForm.find(".editCheckboxes .oo-ui-horizontalLayout");
  if (!$target.length) {
    return;
  }
  isInit = true;
  const checkbox = new OO.ui.CheckboxInputWidget({
    selected: false
  });
  checkbox.on("change", () => {
    const changeTag = "AI_assisted";
    const generateChangeTags = (originChangeTags) => {
      return checkbox.isSelected() ? "".concat(originChangeTags, ",").concat(changeTag) : originChangeTags.replace(",".concat(changeTag), "");
    };
    let changeTags = "";
    if (isVeInit) {
      var _ve$init$target$saveF, _ve$init$target$saveF2, _ve$init$target$saveF3;
      changeTags = generateChangeTags((_ve$init$target$saveF = (_ve$init$target$saveF2 = (_ve$init$target$saveF3 = ve.init.target.saveFields).wpChangeTags) === null || _ve$init$target$saveF2 === void 0 ? void 0 : _ve$init$target$saveF2.call(_ve$init$target$saveF3)) !== null && _ve$init$target$saveF !== void 0 ? _ve$init$target$saveF : "");
      ve.init.target.saveFields.wpChangeTags = () => {
        return changeTags;
      };
    } else {
      var _$originWpChangeTags$, _$originWpChangeTags$2;
      const $wpChangeTags = $("<input>").attr({
        id: "wpChangeTags",
        name: "wpChangeTags",
        type: "hidden",
        value: ""
      });
      $body = $editForm.parents("body");
      const $originWpChangeTags = $body.find("input[name=wpChangeTags]");
      if (!$originWpChangeTags.length) {
        $body.prepend($wpChangeTags);
      }
      changeTags = generateChangeTags((_$originWpChangeTags$ = (_$originWpChangeTags$2 = $originWpChangeTags.val()) === null || _$originWpChangeTags$2 === void 0 ? void 0 : _$originWpChangeTags$2.toString()) !== null && _$originWpChangeTags$ !== void 0 ? _$originWpChangeTags$ : "");
      $originWpChangeTags.val(changeTags);
    }
  });
  const checkboxLayout = new OO.ui.FieldLayout(checkbox, {
    align: "inline",
    label: getMessage("AiAssisted")
  });
  $target.append(checkboxLayout.$element);
};
//! src/EditForm_JS/modules/clearUndoSummary.ts
var clearUndoSummary = ($body) => {
  const $wpAutoSummary = $body.find('input[name="wpAutoSummary"]');
  if (!$wpAutoSummary.length) {
    return;
  }
  if (mw.util.getParamValue("undo")) {
    $wpAutoSummary.val("");
  }
};
//! src/EditForm_JS/modules/disableTitle.ts
var disableTitle = ($body) => {
  if ($body.find("#no-new-title").length && $body.find('#editform input[name="wpSection"]').val() === "new") {
    const $wpSummary = $body.find("input[name=wpSummary]");
    $wpSummary.prop("disabled", true);
    $wpSummary.val("");
  }
  const noSectionTitlePages = ["Qiuwen_talk:侵权提报", "Qiuwen_talk:存废讨论/关注度提报"];
  const noSectionTitlePagesRegex = /^Qiuwen_talk:存废讨论/;
  if ((noSectionTitlePages.includes(WG_PAGE_NAME) || noSectionTitlePagesRegex.test(WG_PAGE_NAME)) && mw.util.getParamValue("section") === "new") {
    mw.util.addCSS("h2.ve-ui-init-desktopArticleTarget-sectionTitle{display:none}");
  }
};
//! src/EditForm_JS/EditForm_JS.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/EditForm_JS/modules/introAFC.ts
var introAFC = () => {
  if (WG_WIKI_ID !== "zhqiuwenbaike") {
    return;
  }
  if (WG_USER_GROUPS.includes("confirmed") || WG_USER_GROUPS.includes("autoconfirmed")) {
    return;
  }
  var _iterator = _createForOfIteratorHelper(document.querySelectorAll("#ca-ve-edit, #ca-edit")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      element.remove();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (document.querySelector("#ca-talk") && document.querySelectorAll("#ca-talk a")[0] && document.querySelectorAll("#ca-talk a")[0].href.includes("redlink=1")) {
    var _document$querySelect;
    (_document$querySelect = document.querySelector("#ca-talk")) === null || _document$querySelect === void 0 || _document$querySelect.remove();
  }
  if (document.querySelector("#titleblacklist-temporary")) {
    var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll(".permissionserrorstext-withaction, #firstHeading")), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const element = _step2.value;
        element.remove();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
    if (mw.config.get("wgNamespaceNumber") === 6) {
      location.href = "/wiki/Special:UploadWizard";
    } else {
      location.href = "/wiki/QW:ACH";
    }
  }
};
//! src/EditForm_JS/modules/preloadRevid.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var preloadRevid = ($body) => {
  const revid = mw.util.getParamValue("preloadrevid");
  if (!revid) {
    return;
  }
  const api = (0, import_ext_gadget2.initMwApi)();
  const params = {
    action: "query",
    format: "json",
    prop: "revisions",
    revids: Number.parseInt(revid, 10),
    formatversion: "2",
    rvprop: "content",
    rvslots: "main"
  };
  void api.get(params).then(({
    query
  }) => {
    const {
      content
    } = query.pages[0].revisions[0].slots.main;
    if ($body.find(".oo-ui-icon-highlight").length && $body.find(".oo-ui-icon-highlight").hasClass("oo-ui-image-progressive")) {
      $body.find(".oo-ui-icon-highlight").trigger("click");
    }
    if (document.querySelector("textarea[name=wpTextbox1]")) {
      document.querySelector("textarea[name=wpTextbox1]").value = content;
      $body.find("input[name=wpDiff]").trigger("click");
      void mw.notify(getMessage("RevisionPreloaded").replace("$1", revid), {
        type: "success"
      });
    }
  });
};
//! src/EditForm_JS/EditForm_JS.ts
void (0, import_ext_gadget3.getBody)().then(function editForm($body) {
  clearUndoSummary($body);
  disableTitle($body);
  const revid = mw.util.getParamValue("preloadrevid");
  if (revid && IS_WG_EDIT_OR_SUBMIT_ACTION) {
    preloadRevid($body);
  }
  const curid = mw.config.get("wgArticleId");
  if (!curid && ![2, 3, 118].includes(WG_NAMESPACE_NUMBER)) {
    introAFC();
  }
  mw.hook("wikipage.editform").add(($editForm) => {
    aiAssisted({
      $editForm
    });
  });
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    aiAssisted({
      $body
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9haUFzc2lzdGVkLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2NsZWFyVW5kb1N1bW1hcnkudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvZGlzYWJsZVRpdGxlLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9FZGl0Rm9ybV9KUy50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9pbnRyb0FGQy50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9wcmVsb2FkUmV2aWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuY29uc3QgV0dfV0lLSV9JRCA9IG13LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyk7XG5jb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5jb25zdCBXR19VU0VSX0dST1VQUzogc3RyaW5nW10gPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKSA/PyBbXTtcblxuY29uc3QgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OOiBib29sZWFuID0gWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKFdHX0FDVElPTik7XG5cbmV4cG9ydCB7V0dfUEFHRV9OQU1FLCBXR19OQU1FU1BBQ0VfTlVNQkVSLCBXR19VU0VSX0dST1VQUywgV0dfV0lLSV9JRCwgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QWlBc3Npc3RlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIGVkaXRlZCBjb250ZW50IHdhcyBhc3Npc3RlZCBieSBhcnRpZmljaWFsIGludGVsbGlnZW5jZScsXG5cdFx0XHRqYTogJ+OBk+OBrue3qOmbhuWGheWuueOBr+S6uuW3peefpeiDveOBq+OCiOOCi+aUr+aPtOOCkuWPl+OBkeOBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtaGFucyc6ICfmraTnvJbovpHnlLHkurrlt6Xmmbrog73vvIhBSe+8iei+heWKqScsXG5cdFx0XHQnemgtaGFudCc6ICfmraTnt6jovK/nlLHkurrlt6Xmmbrog73vvIhBSe+8iei8lOWKqScsXG5cdFx0fSksXG5cdFx0UHJldmlldzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQbGVhc2UgcHJldmlldyB0aGUgZWRpdGVkIHRleHQnLFxuXHRcdFx0amE6ICfjg5fjg6zjg5Pjg6Xjg7zjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+35YWI6aKE6KeIJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+WFiOmgkOimvScsXG5cdFx0fSksXG5cdFx0UmV2aXNpb25QcmVsb2FkZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29udGVudCBvZiByZXZpc2lvbiAkMSBwcmVsb2FkZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWKoOi9veeJiOacrCQx55qE5YaF5a6544CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3sui8ieWFpeeJiOacrCQx55qE5YWn5a6544CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsICovXG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmxldCBpc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuY29uc3QgYWlBc3Npc3RlZCA9ICh7JGJvZHksICRlZGl0Rm9ybX06IHskYm9keT86IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm0/OiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdGlmIChpc0luaXQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRjb25zdCBpc1ZlSW5pdDogYm9vbGVhbiA9ICEhdmUuaW5pdDtcblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSBpc1ZlSW5pdFxuXHRcdD8gKCRib2R5IGFzIEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KS5maW5kKCcudmUtdWktbXdTYXZlRGlhbG9nLWNoZWNrYm94ZXMnKVxuXHRcdDogKCRlZGl0Rm9ybSBhcyBKUXVlcnkpLmZpbmQoJy5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dCcpO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aXNJbml0ID0gdHJ1ZTtcblxuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdH0pO1xuXHRjaGVja2JveC5vbignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGNoYW5nZVRhZzogc3RyaW5nID0gJ0FJX2Fzc2lzdGVkJztcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cdFx0aWYgKGlzVmVJbml0KSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdFx0Y2hhbmdlVGFncyA9IGdlbmVyYXRlQ2hhbmdlVGFncyh2ZS5pbml0LnRhcmdldC5zYXZlRmllbGRzLndwQ2hhbmdlVGFncz8uKCkgPz8gJycpO1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHRcdHZlLmluaXQudGFyZ2V0LnNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzID0gKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdHJldHVybiBjaGFuZ2VUYWdzO1xuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgJHdwQ2hhbmdlVGFnczogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0XHRpZDogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0fSk7XG5cdFx0XHQkYm9keSA9ICgkZWRpdEZvcm0gYXMgSlF1ZXJ5KS5wYXJlbnRzKCdib2R5Jyk7XG5cdFx0XHRjb25zdCAkb3JpZ2luV3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQ2hhbmdlVGFnc10nKTtcblx0XHRcdGlmICghJG9yaWdpbldwQ2hhbmdlVGFncy5sZW5ndGgpIHtcblx0XHRcdFx0JGJvZHkucHJlcGVuZCgkd3BDaGFuZ2VUYWdzKTtcblx0XHRcdH1cblx0XHRcdGNoYW5nZVRhZ3MgPSBnZW5lcmF0ZUNoYW5nZVRhZ3MoJG9yaWdpbldwQ2hhbmdlVGFncy52YWwoKT8udG9TdHJpbmcoKSA/PyAnJyk7XG5cdFx0XHQkb3JpZ2luV3BDaGFuZ2VUYWdzLnZhbChjaGFuZ2VUYWdzKTtcblx0XHR9XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWlBc3Npc3RlZCcpLFxuXHR9KTtcblx0JHRhcmdldC5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQpO1xufTtcblxuZXhwb3J0IHthaUFzc2lzdGVkfTtcbiIsICJjb25zdCBjbGVhclVuZG9TdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkd3BBdXRvU3VtbWFyeTogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1cIndwQXV0b1N1bW1hcnlcIl0nKTtcblx0aWYgKCEkd3BBdXRvU3VtbWFyeS5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCd1bmRvJykpIHtcblx0XHQkd3BBdXRvU3VtbWFyeS52YWwoJycpO1xuXHR9XG59O1xuXG5leHBvcnQge2NsZWFyVW5kb1N1bW1hcnl9O1xuIiwgImltcG9ydCB7V0dfUEFHRV9OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgZGlzYWJsZVRpdGxlID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAoJGJvZHkuZmluZCgnI25vLW5ldy10aXRsZScpLmxlbmd0aCAmJiAkYm9keS5maW5kKCcjZWRpdGZvcm0gaW5wdXRbbmFtZT1cIndwU2VjdGlvblwiXScpLnZhbCgpID09PSAnbmV3Jykge1xuXHRcdC8vIOS8oOe7n+aWh+acrOe8lui+keWZqFxuXHRcdGNvbnN0ICR3cFN1bW1hcnk6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpO1xuXHRcdCR3cFN1bW1hcnkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHQkd3BTdW1tYXJ5LnZhbCgnJyk7XG5cdH1cblxuXHRjb25zdCBub1NlY3Rpb25UaXRsZVBhZ2VzOiBzdHJpbmdbXSA9IFsnUWl1d2VuX3RhbGs65L615p2D5o+Q5oqlJywgJ1FpdXdlbl90YWxrOuWtmOW6n+iuqOiuui/lhbPms6jluqbmj5DmiqUnXTtcblx0Y29uc3Qgbm9TZWN0aW9uVGl0bGVQYWdlc1JlZ2V4OiBSZWdFeHAgPSAvXlFpdXdlbl90YWxrOuWtmOW6n+iuqOiuui87XG5cdGlmIChcblx0XHQobm9TZWN0aW9uVGl0bGVQYWdlcy5pbmNsdWRlcyhXR19QQUdFX05BTUUpIHx8IG5vU2VjdGlvblRpdGxlUGFnZXNSZWdleC50ZXN0KFdHX1BBR0VfTkFNRSkpICYmXG5cdFx0bXcudXRpbC5nZXRQYXJhbVZhbHVlKCdzZWN0aW9uJykgPT09ICduZXcnXG5cdCkge1xuXHRcdC8vIOWPr+inhuWMlue8lui+keWZqCAvIOaWsHdpa2l0ZXh05qih5byPXG5cdFx0bXcudXRpbC5hZGRDU1MoJ2gyLnZlLXVpLWluaXQtZGVza3RvcEFydGljbGVUYXJnZXQtc2VjdGlvblRpdGxle2Rpc3BsYXk6bm9uZX0nKTtcblx0fVxufTtcblxuZXhwb3J0IHtkaXNhYmxlVGl0bGV9O1xuIiwgImltcG9ydCB7SVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OLCBXR19OQU1FU1BBQ0VfTlVNQkVSfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHthaUFzc2lzdGVkfSBmcm9tICcuL21vZHVsZXMvYWlBc3Npc3RlZCc7XG5pbXBvcnQge2NsZWFyVW5kb1N1bW1hcnl9IGZyb20gJy4vbW9kdWxlcy9jbGVhclVuZG9TdW1tYXJ5JztcbmltcG9ydCB7ZGlzYWJsZVRpdGxlfSBmcm9tICcuL21vZHVsZXMvZGlzYWJsZVRpdGxlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7aW50cm9BRkN9IGZyb20gJy4vbW9kdWxlcy9pbnRyb0FGQyc7XG5pbXBvcnQge3ByZWxvYWRSZXZpZH0gZnJvbSAnLi9tb2R1bGVzL3ByZWxvYWRSZXZpZCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdC8vIOWIoOmZpOWbnumAgOaXtuiHquWKqOeUn+aIkOeahOe8lui+keaRmOimgVxuXHRjbGVhclVuZG9TdW1tYXJ5KCRib2R5KTtcblxuXHQvLyDlnKjmj5DkuqTmlrDmrrXokL3ml7bvvIzorqnkuLvpopjmoI/lnKjnibnlrprmg4XlhrXkuIvlpLHmlYhcblx0ZGlzYWJsZVRpdGxlKCRib2R5KTtcblxuXHQvLyDmupDku6PnoIHnvJbovpHlmajliqDovb3igJznvJbovpHor7fmsYLigJ3ooaXkuIFcblx0Y29uc3QgcmV2aWQgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3ByZWxvYWRyZXZpZCcpO1xuXHRpZiAocmV2aWQgJiYgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OKSB7XG5cdFx0cHJlbG9hZFJldmlkKCRib2R5KTtcblx0fVxuXG5cdC8vIOaWsOeUqOaIt+W8leWvvOiHs+adoeebruWIm+W7uuWQkeWvvO+8iFtbUVc6QUZDXV3vvIlcblx0Y29uc3QgY3VyaWQgPSBtdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpO1xuXHRpZiAoIWN1cmlkICYmICFbMiwgMywgMTE4XS5pbmNsdWRlcyhXR19OQU1FU1BBQ0VfTlVNQkVSKSkge1xuXHRcdGludHJvQUZDKCk7XG5cdH1cblxuXHQvLyBBSei+heWKqee8lui+keeJueauiuWjsOaYjlxuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0YWlBc3Npc3RlZCh7XG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0fSk7XG5cdH0pO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRhaUFzc2lzdGVkKHtcblx0XHRcdCRib2R5LFxuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIiwgImltcG9ydCB7SVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OLCBXR19VU0VSX0dST1VQUywgV0dfV0lLSV9JRH0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IGludHJvQUZDID0gKCk6IHZvaWQgPT4ge1xuXHQvLyBEaXNhYmxlZCBmb3Igd2lraXMgb3RoZXIgdGhhbiB6aHFpdXdlbmJhaWtlXG5cdGlmIChXR19XSUtJX0lEICE9PSAnemhxaXV3ZW5iYWlrZScpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBEaXNhYmxlZCBmb3IgY29uZmlybWVkIHVzZXJzXG5cdGlmIChXR19VU0VSX0dST1VQUy5pbmNsdWRlcygnY29uZmlybWVkJykgfHwgV0dfVVNFUl9HUk9VUFMuaW5jbHVkZXMoJ2F1dG9jb25maXJtZWQnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgXCJFZGl0XCIgYnV0dG9uc1xuXHQgKi9cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYS12ZS1lZGl0LCAjY2EtZWRpdCcpKSB7XG5cdFx0ZWxlbWVudC5yZW1vdmUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJZiB0YWxrIHBhZ2UgZG9lcyBub3QgZXhpc3QsIHJlbW92ZSBcIlRhbGsgcGFnZVwiIGJ1dHRvblxuXHQgKi9cblx0aWYgKFxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYS10YWxrJykgJiZcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2EtdGFsayBhJylbMF0gJiZcblx0XHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NhLXRhbGsgYScpWzBdIGFzIEhUTUxBbmNob3JFbGVtZW50KS5ocmVmLmluY2x1ZGVzKCdyZWRsaW5rPTEnKVxuXHQpIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2EtdGFsaycpPy5yZW1vdmUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJZiBwZXJtaXNzaW9uIGVycm9yIGB0aXRsZWJsYWNrbGlzdC10ZW1wb3JhcnlgIGV4aXN0cyxcblx0ICogcmVtb3ZlIHVubmVjZXNzYXJ5IGVsZW1lbnRzXG5cdCAqL1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlYmxhY2tsaXN0LXRlbXBvcmFyeScpKSB7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wZXJtaXNzaW9uc2Vycm9yc3RleHQtd2l0aGFjdGlvbiwgI2ZpcnN0SGVhZGluZycpKSB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZSgpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04pIHtcblx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gNikge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBJZiBlZGl0aW5nIHBhZ2VzIHVuZGVyIGBGaWxlOmAgbmFtZXNwYWNlLFxuXHRcdFx0ICogcmVkaXJlY3QgdG8gU3BlY2lhbDpVcGxvYWRXaXphcmRcblx0XHRcdCAqL1xuXHRcdFx0bG9jYXRpb24uaHJlZiA9ICcvd2lraS9TcGVjaWFsOlVwbG9hZFdpemFyZCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogSWYgZWRpdGluZyBwYWdlcyB1bmRlciBvdGhlciBuYW1lc3BhY2VzLFxuXHRcdFx0ICogcmVkaXJlY3QgdG8gW1tRVzpBQ0hdXVxuXHRcdFx0ICovXG5cdFx0XHRsb2NhdGlvbi5ocmVmID0gJy93aWtpL1FXOkFDSCc7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2ludHJvQUZDfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gUHJlbG9hZCBjb250ZW50cyBmcm9tIFJldmlzaW9uIElEIChvbGRpZClcbiAqL1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHByZWxvYWRSZXZpZCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgcmV2aWQgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3ByZWxvYWRyZXZpZCcpO1xuXG5cdGlmICghcmV2aWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBhcGkgPSBpbml0TXdBcGkoKTtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0cmV2aWRzOiBOdW1iZXIucGFyc2VJbnQocmV2aWQsIDEwKSxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHR9O1xuXG5cdHZvaWQgYXBpLmdldChwYXJhbXMpLnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRjb25zdCB7Y29udGVudH0gPSBxdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbjtcblx0XHRpZiAoXG5cdFx0XHQkYm9keS5maW5kKCcub28tdWktaWNvbi1oaWdobGlnaHQnKS5sZW5ndGggJiZcblx0XHRcdCRib2R5LmZpbmQoJy5vby11aS1pY29uLWhpZ2hsaWdodCcpLmhhc0NsYXNzKCdvby11aS1pbWFnZS1wcm9ncmVzc2l2ZScpXG5cdFx0KSB7XG5cdFx0XHQkYm9keS5maW5kKCcub28tdWktaWNvbi1oaWdobGlnaHQnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdH1cblx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpKSB7XG5cdFx0XHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlID0gY29udGVudDtcblx0XHRcdCRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BEaWZmXScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdSZXZpc2lvblByZWxvYWRlZCcpLnJlcGxhY2UoJyQxJywgcmV2aWQpLCB7dHlwZTogJ3N1Y2Nlc3MnfSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJlbG9hZFJldmlkfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQXdDQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7QUFDdEUsSUFBTUMsYUFBYUgsR0FBR0MsT0FBT0MsSUFBSSxVQUFVO0FBQzNDLElBQU1FLHNCQUE4QkosR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUI7QUFDckUsSUFBTUcsZUFBdUJMLEdBQUdDLE9BQU9DLElBQUksWUFBWTtBQUN2RCxJQUFNSSxrQkFBQUMsaUJBQTJCUCxHQUFH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QWE7QUFDekMsTUFBSSxDQUFDZ0ksU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRXpILFNBQVNMLG1CQUFtQixHQUFHO0FBQ3pEZ0YsYUFBUztFQUNWO0FBR0FwRixLQUFHbUksS0FBSyxtQkFBbUIsRUFBRUMsSUFBSzNHLGVBQW9CO0FBQ3JERixlQUFXO01BQ1ZFO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFRHpCLEtBQUdtSSxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckQ3RyxlQUFXO01BQ1ZDO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19XSUtJX0lEIiwgIldHX05BTUVTUEFDRV9OVU1CRVIiLCAiV0dfUEFHRV9OQU1FIiwgIldHX1VTRVJfR1JPVVBTIiwgIl9tdyRjb25maWckZ2V0IiwgIklTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiIsICJpbmNsdWRlcyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJBaUFzc2lzdGVkIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIlByZXZpZXciLCAiUmV2aXNpb25QcmVsb2FkZWQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImlzSW5pdCIsICJhaUFzc2lzdGVkIiwgIiRib2R5IiwgIiRlZGl0Rm9ybSIsICJpc1ZlSW5pdCIsICJ2ZSIsICJpbml0IiwgIiR0YXJnZXQiLCAiZmluZCIsICJsZW5ndGgiLCAiY2hlY2tib3giLCAiT08iLCAidWkiLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJzZWxlY3RlZCIsICJvbiIsICJjaGFuZ2VUYWciLCAiZ2VuZXJhdGVDaGFuZ2VUYWdzIiwgIm9yaWdpbkNoYW5nZVRhZ3MiLCAiaXNTZWxlY3RlZCIsICJjb25jYXQiLCAicmVwbGFjZSIsICJjaGFuZ2VUYWdzIiwgIl92ZSRpbml0JHRhcmdldCRzYXZlRiIsICJfdmUkaW5pdCR0YXJnZXQkc2F2ZUYyIiwgIl92ZSRpbml0JHRhcmdldCRzYXZlRjMiLCAidGFyZ2V0IiwgInNhdmVGaWVsZHMiLCAid3BDaGFuZ2VUYWdzIiwgImNhbGwiLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJDIiLCAiJHdwQ2hhbmdlVGFncyIsICIkIiwgImF0dHIiLCAiaWQiLCAibmFtZSIsICJ0eXBlIiwgInZhbHVlIiwgInBhcmVudHMiLCAiJG9yaWdpbldwQ2hhbmdlVGFncyIsICJwcmVwZW5kIiwgInZhbCIsICJ0b1N0cmluZyIsICJjaGVja2JveExheW91dCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJsYWJlbCIsICJhcHBlbmQiLCAiJGVsZW1lbnQiLCAiY2xlYXJVbmRvU3VtbWFyeSIsICIkd3BBdXRvU3VtbWFyeSIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiZGlzYWJsZVRpdGxlIiwgIiR3cFN1bW1hcnkiLCAicHJvcCIsICJub1NlY3Rpb25UaXRsZVBhZ2VzIiwgIm5vU2VjdGlvblRpdGxlUGFnZXNSZWdleCIsICJ0ZXN0IiwgImFkZENTUyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiaW50cm9BRkMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJyZW1vdmUiLCAiZXJyIiwgImUiLCAiZiIsICJxdWVyeVNlbGVjdG9yIiwgImhyZWYiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImxvY2F0aW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJwcmVsb2FkUmV2aWQiLCAicmV2aWQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJyZXZpZHMiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgImZvcm1hdHZlcnNpb24iLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAidGhlbiIsICJxdWVyeSIsICJjb250ZW50IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImhhc0NsYXNzIiwgInRyaWdnZXIiLCAibm90aWZ5IiwgImdldEJvZHkiLCAiZWRpdEZvcm0iLCAiY3VyaWQiLCAiaG9vayIsICJhZGQiXQp9Cg==
