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
//! src/EditForm_JS/modules/constant.ts
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
var WG_ACTION = mw.config.get("wgAction");
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
      const $originWpChangeTags = $body.find("#wpChangeTags");
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
    const $wpSummary = $body.find("#wpSummary");
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
//! src/EditForm_JS/modules/introACH.ts
var introACH = () => {
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
  if (mw.config.get("wgNamespaceNumber") === 6 && IS_WG_EDIT_OR_SUBMIT_ACTION) {
    location.href = "/wiki/Special:UploadWizard";
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
    if (document.querySelector("#wpTextbox1")) {
      document.querySelector("#wpTextbox1").value = content;
      $body.find("#wpDiff").trigger("click");
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
    introACH();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9haUFzc2lzdGVkLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2NsZWFyVW5kb1N1bW1hcnkudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvZGlzYWJsZVRpdGxlLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9FZGl0Rm9ybV9KUy50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9pbnRyb0FDSC50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9wcmVsb2FkUmV2aWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuY29uc3QgV0dfVVNFUl9HUk9VUFM6IHN0cmluZ1tdID0gbXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJykgPz8gW107XG5cbmNvbnN0IElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTjogYm9vbGVhbiA9IFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhXR19BQ1RJT04pO1xuXG5leHBvcnQge1dHX1BBR0VfTkFNRSwgV0dfTkFNRVNQQUNFX05VTUJFUiwgV0dfVVNFUl9HUk9VUFMsIElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFpQXNzaXN0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0ZWQgY29udGVudCB3YXMgYXNzaXN0ZWQgYnkgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UnLFxuXHRcdFx0amE6ICfjgZPjga7nt6jpm4blhoXlrrnjga/kurrlt6Xnn6Xog73jgavjgojjgovmlK/mj7TjgpLlj5fjgZHjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R55Sx5Lq65bel5pm66IO977yIQUnvvInovoXliqknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k57eo6Lyv55Sx5Lq65bel5pm66IO977yIQUnvvInovJTliqknLFxuXHRcdH0pLFxuXHRcdFByZXZpZXc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGxlYXNlIHByZXZpZXcgdGhlIGVkaXRlZCB0ZXh0Jyxcblx0XHRcdGphOiAn44OX44Os44OT44Ol44O844GX44Gm44GP44Gg44GV44GEJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+WFiOmihOiniCcsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vlhYjpoJDopr0nLFxuXHRcdH0pLFxuXHRcdFJldmlzaW9uUHJlbG9hZGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbnRlbnQgb2YgcmV2aXNpb24gJDEgcHJlbG9hZGVkLicsXG5cdFx0XHQnemgtaGFucyc6ICflt7LliqDovb3niYjmnKwkMeeahOWGheWuueOAgicsXG5cdFx0XHQnemgtaGFudCc6ICflt7LovInlhaXniYjmnKwkMeeahOWFp+WuueOAgicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnQsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzICovXG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmxldCBpc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuY29uc3QgYWlBc3Npc3RlZCA9ICh7JGJvZHksICRlZGl0Rm9ybX06IHskYm9keT86IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm0/OiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdGlmIChpc0luaXQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRjb25zdCBpc1ZlSW5pdDogYm9vbGVhbiA9ICEhdmUuaW5pdDtcblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSBpc1ZlSW5pdFxuXHRcdD8gKCRib2R5IGFzIEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KS5maW5kKCcudmUtdWktbXdTYXZlRGlhbG9nLWNoZWNrYm94ZXMnKVxuXHRcdDogKCRlZGl0Rm9ybSBhcyBKUXVlcnkpLmZpbmQoJy5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dCcpO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aXNJbml0ID0gdHJ1ZTtcblxuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdH0pO1xuXHRjaGVja2JveC5vbignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGNoYW5nZVRhZzogc3RyaW5nID0gJ0FJX2Fzc2lzdGVkJztcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cdFx0aWYgKGlzVmVJbml0KSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdFx0Y2hhbmdlVGFncyA9IGdlbmVyYXRlQ2hhbmdlVGFncyh2ZS5pbml0LnRhcmdldC5zYXZlRmllbGRzLndwQ2hhbmdlVGFncz8uKCkgPz8gJycpO1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHRcdHZlLmluaXQudGFyZ2V0LnNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzID0gKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdHJldHVybiBjaGFuZ2VUYWdzO1xuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgJHdwQ2hhbmdlVGFnczogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0XHRpZDogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0fSk7XG5cdFx0XHQkYm9keSA9ICgkZWRpdEZvcm0gYXMgSlF1ZXJ5KS5wYXJlbnRzKCdib2R5Jyk7XG5cdFx0XHRjb25zdCAkb3JpZ2luV3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjd3BDaGFuZ2VUYWdzJyk7XG5cdFx0XHRpZiAoISRvcmlnaW5XcENoYW5nZVRhZ3MubGVuZ3RoKSB7XG5cdFx0XHRcdCRib2R5LnByZXBlbmQoJHdwQ2hhbmdlVGFncyk7XG5cdFx0XHR9XG5cdFx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKCRvcmlnaW5XcENoYW5nZVRhZ3MudmFsKCk/LnRvU3RyaW5nKCkgPz8gJycpO1xuXHRcdFx0JG9yaWdpbldwQ2hhbmdlVGFncy52YWwoY2hhbmdlVGFncyk7XG5cdFx0fVxuXHR9KTtcblxuXHRjb25zdCBjaGVja2JveExheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FpQXNzaXN0ZWQnKSxcblx0fSk7XG5cdCR0YXJnZXQuYXBwZW5kKGNoZWNrYm94TGF5b3V0LiRlbGVtZW50KTtcbn07XG5cbmV4cG9ydCB7YWlBc3Npc3RlZH07XG4iLCAiY29uc3QgY2xlYXJVbmRvU3VtbWFyeSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgJHdwQXV0b1N1bW1hcnk6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9ICRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9XCJ3cEF1dG9TdW1tYXJ5XCJdJyk7XG5cdGlmICghJHdwQXV0b1N1bW1hcnkubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndW5kbycpKSB7XG5cdFx0JHdwQXV0b1N1bW1hcnkudmFsKCcnKTtcblx0fVxufTtcblxuZXhwb3J0IHtjbGVhclVuZG9TdW1tYXJ5fTtcbiIsICJpbXBvcnQge1dHX1BBR0VfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IGRpc2FibGVUaXRsZSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCRib2R5LmZpbmQoJyNuby1uZXctdGl0bGUnKS5sZW5ndGggJiYgJGJvZHkuZmluZCgnI2VkaXRmb3JtIGlucHV0W25hbWU9XCJ3cFNlY3Rpb25cIl0nKS52YWwoKSA9PT0gJ25ldycpIHtcblx0XHQvLyDkvKDnu5/mlofmnKznvJbovpHlmahcblx0XHRjb25zdCAkd3BTdW1tYXJ5OiBKUXVlcnkgPSAkYm9keS5maW5kKCcjd3BTdW1tYXJ5Jyk7XG5cdFx0JHdwU3VtbWFyeS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXHRcdCR3cFN1bW1hcnkudmFsKCcnKTtcblx0fVxuXG5cdGNvbnN0IG5vU2VjdGlvblRpdGxlUGFnZXM6IHN0cmluZ1tdID0gWydRaXV3ZW5fdGFsazrkvrXmnYPmj5DmiqUnLCAnUWl1d2VuX3RhbGs65a2Y5bqf6K6o6K66L+WFs+azqOW6puaPkOaKpSddO1xuXHRjb25zdCBub1NlY3Rpb25UaXRsZVBhZ2VzUmVnZXg6IFJlZ0V4cCA9IC9eUWl1d2VuX3RhbGs65a2Y5bqf6K6o6K66Lztcblx0aWYgKFxuXHRcdChub1NlY3Rpb25UaXRsZVBhZ2VzLmluY2x1ZGVzKFdHX1BBR0VfTkFNRSkgfHwgbm9TZWN0aW9uVGl0bGVQYWdlc1JlZ2V4LnRlc3QoV0dfUEFHRV9OQU1FKSkgJiZcblx0XHRtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3NlY3Rpb24nKSA9PT0gJ25ldydcblx0KSB7XG5cdFx0Ly8g5Y+v6KeG5YyW57yW6L6R5ZmoIC8g5pawd2lraXRleHTmqKHlvI9cblx0XHRtdy51dGlsLmFkZENTUygnaDIudmUtdWktaW5pdC1kZXNrdG9wQXJ0aWNsZVRhcmdldC1zZWN0aW9uVGl0bGV7ZGlzcGxheTpub25lfScpO1xuXHR9XG59O1xuXG5leHBvcnQge2Rpc2FibGVUaXRsZX07XG4iLCAiaW1wb3J0IHtJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sIFdHX05BTUVTUEFDRV9OVU1CRVJ9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2FpQXNzaXN0ZWR9IGZyb20gJy4vbW9kdWxlcy9haUFzc2lzdGVkJztcbmltcG9ydCB7Y2xlYXJVbmRvU3VtbWFyeX0gZnJvbSAnLi9tb2R1bGVzL2NsZWFyVW5kb1N1bW1hcnknO1xuaW1wb3J0IHtkaXNhYmxlVGl0bGV9IGZyb20gJy4vbW9kdWxlcy9kaXNhYmxlVGl0bGUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtpbnRyb0FDSH0gZnJvbSAnLi9tb2R1bGVzL2ludHJvQUNIJztcbmltcG9ydCB7cHJlbG9hZFJldmlkfSBmcm9tICcuL21vZHVsZXMvcHJlbG9hZFJldmlkJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Ly8g5Yig6Zmk5Zue6YCA5pe26Ieq5Yqo55Sf5oiQ55qE57yW6L6R5pGY6KaBXG5cdGNsZWFyVW5kb1N1bW1hcnkoJGJvZHkpO1xuXG5cdC8vIOWcqOaPkOS6pOaWsOauteiQveaXtu+8jOiuqeS4u+mimOagj+WcqOeJueWumuaDheWGteS4i+WkseaViFxuXHRkaXNhYmxlVGl0bGUoJGJvZHkpO1xuXG5cdC8vIOa6kOS7o+eggee8lui+keWZqOWKoOi9veKAnOe8lui+keivt+axguKAneihpeS4gVxuXHRjb25zdCByZXZpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncHJlbG9hZHJldmlkJyk7XG5cdGlmIChyZXZpZCAmJiBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04pIHtcblx0XHRwcmVsb2FkUmV2aWQoJGJvZHkpO1xuXHR9XG5cblx0Ly8g5paw55So5oi35byV5a+86Iez5p2h55uu5Yib5bu65ZCR5a+877yIW1tRVzpBRkRdXe+8iVxuXHRjb25zdCBjdXJpZCA9IG13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyk7XG5cdGlmICghY3VyaWQgJiYgIVsyLCAzLCAxMThdLmluY2x1ZGVzKFdHX05BTUVTUEFDRV9OVU1CRVIpKSB7XG5cdFx0aW50cm9BQ0goKTtcblx0fVxuXG5cdC8vIEFJ6L6F5Yqp57yW6L6R54m55q6K5aOw5piOXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHRhaUFzc2lzdGVkKHtcblx0XHRcdCRlZGl0Rm9ybSxcblx0XHR9KTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdGFpQXNzaXN0ZWQoe1xuXHRcdFx0JGJvZHksXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCAiaW1wb3J0IHtJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT059IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBpbnRyb0FDSCA9ICgpOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIFJlbW92ZSBcIkVkaXRcIiBidXR0b25zXG5cdCAqL1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NhLXZlLWVkaXQsICNjYS1lZGl0JykpIHtcblx0XHRlbGVtZW50LnJlbW92ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIElmIHRhbGsgcGFnZSBkb2VzIG5vdCBleGlzdCwgcmVtb3ZlIFwiVGFsayBwYWdlXCIgYnV0dG9uXG5cdCAqL1xuXHRpZiAoXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhLXRhbGsnKSAmJlxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYS10YWxrIGEnKVswXSAmJlxuXHRcdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2EtdGFsayBhJylbMF0gYXMgSFRNTEFuY2hvckVsZW1lbnQpLmhyZWYuaW5jbHVkZXMoJ3JlZGxpbms9MScpXG5cdCkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYS10YWxrJyk/LnJlbW92ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIElmIHBlcm1pc3Npb24gZXJyb3IgYHRpdGxlYmxhY2tsaXN0LXRlbXBvcmFyeWAgZXhpc3RzLFxuXHQgKiByZW1vdmUgdW5uZWNlc3NhcnkgZWxlbWVudHNcblx0ICovXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGVibGFja2xpc3QtdGVtcG9yYXJ5JykpIHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBlcm1pc3Npb25zZXJyb3JzdGV4dC13aXRoYWN0aW9uLCAjZmlyc3RIZWFkaW5nJykpIHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIElmIGVkaXRpbmcgcGFnZXMgdW5kZXIgYEZpbGU6YCBuYW1lc3BhY2UsXG5cdCAqIHJlZGlyZWN0IHRvIFNwZWNpYWw6VXBsb2FkV2l6YXJkXG5cdCAqL1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gNiAmJiBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04pIHtcblx0XHRsb2NhdGlvbi5ocmVmID0gJy93aWtpL1NwZWNpYWw6VXBsb2FkV2l6YXJkJztcblx0fVxufTtcblxuZXhwb3J0IHtpbnRyb0FDSH07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cbi8qKlxuICogUHJlbG9hZCBmdW5jdGlvbiBmb3IgZXhpc3RpbmcgcGFnZVxuICovXG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgcHJlbG9hZFJldmlkID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCByZXZpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncHJlbG9hZHJldmlkJyk7XG5cblx0aWYgKCFyZXZpZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGFwaSA9IGluaXRNd0FwaSgpO1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRyZXZpZHM6IE51bWJlci5wYXJzZUludChyZXZpZCwgMTApLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdH07XG5cblx0dm9pZCBhcGkuZ2V0KHBhcmFtcykudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdGNvbnN0IHtjb250ZW50fSA9IHF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluO1xuXHRcdGlmIChcblx0XHRcdCRib2R5LmZpbmQoJy5vby11aS1pY29uLWhpZ2hsaWdodCcpLmxlbmd0aCAmJlxuXHRcdFx0JGJvZHkuZmluZCgnLm9vLXVpLWljb24taGlnaGxpZ2h0JykuaGFzQ2xhc3MoJ29vLXVpLWltYWdlLXByb2dyZXNzaXZlJylcblx0XHQpIHtcblx0XHRcdCRib2R5LmZpbmQoJy5vby11aS1pY29uLWhpZ2hsaWdodCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0fVxuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BUZXh0Ym94MScpKSB7XG5cdFx0XHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwVGV4dGJveDEnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSA9IGNvbnRlbnQ7XG5cdFx0XHQkYm9keS5maW5kKCcjd3BEaWZmJykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ1JldmlzaW9uUHJlbG9hZGVkJykucmVwbGFjZSgnJDEnLCByZXZpZCksIHt0eXBlOiAnc3VjY2Vzcyd9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcmVsb2FkUmV2aWR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBd0NDLEdBQUdDLE9BQU9DLElBQUksVUFBVTtBQUN0RSxJQUFNQyxzQkFBOEJILEdBQUdDLE9BQU9DLElBQUksbUJBQW1CO0FBQ3JFLElBQU1FLGVBQXVCSixHQUFHQyxPQUFPQyxJQUFJLFlBQVk7QUFDdkQsSUFBTUcsa0JBQUFDLGlCQUEyQk4sR0FBR0MsT0FBT0MsSUFBSSxjQUFjLE9BQUEsUUFBQUksbUJBQUEsU0FBQUEsaUJBQUssQ0FBQTtBQUVsRSxJQUFNQyw4QkFBdUMsQ0FBQyxRQUFRLFFBQVEsRUFBRUMsU0FBU1QsU0FBUzs7QUNMbEYsSUFBQVUsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLGFBQUEsR0FBWUgsa0JBQUFJLFVBQVM7TUFDcEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxVQUFBLEdBQVNQLGtCQUFBSSxVQUFTO01BQ2pCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsb0JBQUEsR0FBbUJSLGtCQUFBSSxVQUFTO01BQzNCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1JLGVBQWVQLGdCQUFnQjtBQUVyQyxJQUFNUSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ3pCQSxJQUFJQyxTQUFrQjtBQUV0QixJQUFNQyxhQUFhQSxDQUFDO0VBQUNDO0VB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VyxTQUFTekcsT0FBc0M7QUFFM0VnRCxtQkFBaUJoRCxLQUFLO0FBR3RCb0QsZUFBYXBELEtBQUs7QUFHbEIsUUFBTWtGLFFBQVF6RyxHQUFHeUUsS0FBS0MsY0FBYyxjQUFjO0FBQ2xELE1BQUkrQixTQUFTbEcsNkJBQTZCO0FBQ3pDaUcsaUJBQWFqRixLQUFLO0VBQ25CO0FBR0EsUUFBTTBHLFFBQVFqSSxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7QUFDekMsTUFBSSxDQUFDK0gsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRXpILFNBQVNMLG1CQUFtQixHQUFHO0FBQ3pEZ0YsYUFBUztFQUNWO0FBR0FuRixLQUFHa0ksS0FBSyxtQkFBbUIsRUFBRUMsSUFBSzNHLGVBQW9CO0FBQ3JERixlQUFXO01BQ1ZFO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFRHhCLEtBQUdrSSxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckQ3RyxlQUFXO01BQ1ZDO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19OQU1FU1BBQ0VfTlVNQkVSIiwgIldHX1BBR0VfTkFNRSIsICJXR19VU0VSX0dST1VQUyIsICJfbXckY29uZmlnJGdldCIsICJJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04iLCAiaW5jbHVkZXMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiQWlBc3Npc3RlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJQcmV2aWV3IiwgIlJldmlzaW9uUHJlbG9hZGVkIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpc0luaXQiLCAiYWlBc3Npc3RlZCIsICIkYm9keSIsICIkZWRpdEZvcm0iLCAiaXNWZUluaXQiLCAidmUiLCAiaW5pdCIsICIkdGFyZ2V0IiwgImZpbmQiLCAibGVuZ3RoIiwgImNoZWNrYm94IiwgIk9PIiwgInVpIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAib24iLCAiY2hhbmdlVGFnIiwgImdlbmVyYXRlQ2hhbmdlVGFncyIsICJvcmlnaW5DaGFuZ2VUYWdzIiwgImlzU2VsZWN0ZWQiLCAiY29uY2F0IiwgInJlcGxhY2UiLCAiY2hhbmdlVGFncyIsICJfdmUkaW5pdCR0YXJnZXQkc2F2ZUYiLCAiX3ZlJGluaXQkdGFyZ2V0JHNhdmVGMiIsICJfdmUkaW5pdCR0YXJnZXQkc2F2ZUYzIiwgInRhcmdldCIsICJzYXZlRmllbGRzIiwgIndwQ2hhbmdlVGFncyIsICJjYWxsIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJCIsICJfJG9yaWdpbldwQ2hhbmdlVGFncyQyIiwgIiR3cENoYW5nZVRhZ3MiLCAiJCIsICJhdHRyIiwgImlkIiwgIm5hbWUiLCAidHlwZSIsICJ2YWx1ZSIsICJwYXJlbnRzIiwgIiRvcmlnaW5XcENoYW5nZVRhZ3MiLCAicHJlcGVuZCIsICJ2YWwiLCAidG9TdHJpbmciLCAiY2hlY2tib3hMYXlvdXQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAibGFiZWwiLCAiYXBwZW5kIiwgIiRlbGVtZW50IiwgImNsZWFyVW5kb1N1bW1hcnkiLCAiJHdwQXV0b1N1bW1hcnkiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImRpc2FibGVUaXRsZSIsICIkd3BTdW1tYXJ5IiwgInByb3AiLCAibm9TZWN0aW9uVGl0bGVQYWdlcyIsICJub1NlY3Rpb25UaXRsZVBhZ2VzUmVnZXgiLCAidGVzdCIsICJhZGRDU1MiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImludHJvQUNIIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAicmVtb3ZlIiwgImVyciIsICJlIiwgImYiLCAicXVlcnlTZWxlY3RvciIsICJocmVmIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJsb2NhdGlvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicHJlbG9hZFJldmlkIiwgInJldmlkIiwgImFwaSIsICJpbml0TXdBcGkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAicmV2aWRzIiwgIk51bWJlciIsICJwYXJzZUludCIsICJmb3JtYXR2ZXJzaW9uIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInRoZW4iLCAicXVlcnkiLCAiY29udGVudCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJoYXNDbGFzcyIsICJ0cmlnZ2VyIiwgIm5vdGlmeSIsICJnZXRCb2R5IiwgImVkaXRGb3JtIiwgImN1cmlkIiwgImhvb2siLCAiYWRkIl0KfQo=
