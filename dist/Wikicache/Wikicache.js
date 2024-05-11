/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Wikicache}
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

// dist/Wikicache/Wikicache.js
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
//! src/Wikicache/options.json
var configKey = "gadget-Wikicache__Initialized";
var cacheKeyPrefix = "wikicache-autosave-";
//! src/Wikicache/modules/cache.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Wikicache/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Change saved": (0, import_ext_gadget.localize)({
      en: "Edit content saved to local storage successfully",
      "zh-hans": "编辑内容已成功保存至本地存储",
      "zh-hant": "編輯內容已成功儲存至本地儲存"
    }),
    "Restore changes?": (0, import_ext_gadget.localize)({
      en: "Your unsaved chages have been saved to your local storage. Restore changes?",
      "zh-hans": "先前未保存的编辑内容已存储于本地存储。是否恢复先前未保存的编辑内容？",
      "zh-hant": "先前未保存的編輯內容已儲存于本地儲存。是否恢復先前未保存的編輯內容？"
    }),
    "Restore unsaved changes": (0, import_ext_gadget.localize)({
      en: "Restore",
      "zh-hans": "恢复",
      "zh-hant": "恢復"
    }),
    "Not to restore": (0, import_ext_gadget.localize)({
      en: "Not to restore",
      "zh-hans": "不恢复",
      "zh-hant": "不恢復"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Wikicache/modules/cache.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var getCacheKey = () => {
  var _document$querySelect;
  const {
    wgPageName
  } = mw.config.get();
  let cacheKey = "".concat(cacheKeyPrefix).concat(wgPageName);
  const section = (_document$querySelect = document.querySelector("input[name=wpSection]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value;
  if (section) {
    cacheKey += "#".concat(section);
  }
  return cacheKey;
};
var newSaveObject = ({
  $editForm
}) => {
  const saveObject = {
    date: /* @__PURE__ */ new Date(),
    wpSummary: (0, import_ext_gadget2.getWpSummaryContent)({
      $editForm
    }),
    wpTextbox1: (0, import_ext_gadget2.getWpTextbox1Content)({
      $editForm
    })
  };
  return saveObject;
};
var setCache = ({
  $editForm
}) => {
  try {
    mw.storage.setObject(getCacheKey(), newSaveObject({
      $editForm
    }), 60 * 60 * 24 * 30 * 1e3);
    (0, import_ext_gadget3.toastify)({
      text: getMessage("Change saved"),
      close: true,
      duration: 3 * 1e3,
      gravity: "top",
      position: "right"
    });
  } catch (error) {
    console.error(error);
  }
};
var getCache = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* ({
    $editForm
  }) {
    if (mw.config.get(configKey)) {
      return;
    }
    mw.config.set(configKey, true);
    const saveObject = mw.storage.getObject(getCacheKey());
    if (!saveObject) {
      return;
    }
    if (saveObject["wpSummary"]) {
      (0, import_ext_gadget2.setWpSummaryContent)({
        $editForm,
        content: saveObject["wpSummary"]
      });
    }
    if (!saveObject["wpTextbox1"]) {
      return;
    }
    if (![saveObject["wpTextbox1"], "".concat(saveObject["wpTextbox1"], "\n")].includes((0, import_ext_gadget2.getWpTextbox1Content)({
      $editForm
    }))) {
      const confirm = yield OO.ui.confirm(getMessage("Restore changes?"), {
        actions: [{
          label: getMessage("Restore unsaved changes"),
          action: "accept",
          flags: ["progressive"]
        }, {
          label: getMessage("Not to restore"),
          action: "cancel",
          flags: ["destructive"]
        }]
      });
      if (confirm) {
        (0, import_ext_gadget2.setWpTextbox1Content)({
          $editForm,
          content: saveObject["wpTextbox1"]
        });
      }
    }
  });
  return function getCache2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var autoSetCache = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* ({
    $editForm
  }) {
    while (true) {
      yield (0, import_ext_gadget2.delay)(60 * 1e3);
      setCache({
        $editForm
      });
    }
  });
  return function autoSetCache2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var setCacheBeforeSubmit = ({
  $editForm
}) => {
  const editForm = document.querySelector("#editform");
  editForm === null || editForm === void 0 || editForm.addEventListener("submit", (event) => {
    if ([document.querySelector("#wpPreview"), document.querySelector("#wpDiff")].includes(event.submitter)) {
      mw.storage.setObject("".concat(getCacheKey(), "##PreviewDiff"), "1", 60 * 60 * 24 * 1);
    }
    setCache({
      $editForm
    });
  });
};
//! src/Wikicache/Wikicache.ts
mw.hook("wikipage.editform").add(/* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* ($editForm) {
    setCacheBeforeSubmit({
      $editForm
    });
    yield getCache({
      $editForm
    });
    yield autoSetCache({
      $editForm
    });
  });
  return function(_x3) {
    return _ref3.apply(this, arguments);
  };
}());

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2ljYWNoZS9vcHRpb25zLmpzb24iLCAic3JjL1dpa2ljYWNoZS9tb2R1bGVzL2NhY2hlLnRzIiwgInNyYy9XaWtpY2FjaGUvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9XaWtpY2FjaGUvV2lraWNhY2hlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LVdpa2ljYWNoZV9fSW5pdGlhbGl6ZWRcIixcblx0XCJjYWNoZUtleVByZWZpeFwiOiBcIndpa2ljYWNoZS1hdXRvc2F2ZS1cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1xuXHRkZWxheSxcblx0Z2V0V3BTdW1tYXJ5Q29udGVudCxcblx0Z2V0V3BUZXh0Ym94MUNvbnRlbnQsXG5cdHNldFdwU3VtbWFyeUNvbnRlbnQsXG5cdHNldFdwVGV4dGJveDFDb250ZW50LFxufSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtBdXRvU2F2ZU9iamVjdH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgZ2V0Q2FjaGVLZXkgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bGV0IGNhY2hlS2V5OiBzdHJpbmcgPSBgJHtPUFRJT05TLmNhY2hlS2V5UHJlZml4fSR7d2dQYWdlTmFtZX1gO1xuXHRjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT13cFNlY3Rpb25dJyk/LnZhbHVlO1xuXHRpZiAoc2VjdGlvbikge1xuXHRcdGNhY2hlS2V5ICs9IGAjJHtzZWN0aW9ufWA7XG5cdH1cblxuXHRyZXR1cm4gY2FjaGVLZXk7XG59O1xuXG5jb25zdCBuZXdTYXZlT2JqZWN0ID0gKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSk6IEF1dG9TYXZlT2JqZWN0ID0+IHtcblx0Y29uc3Qgc2F2ZU9iamVjdDogQXV0b1NhdmVPYmplY3QgPSB7XG5cdFx0ZGF0ZTogbmV3IERhdGUoKSxcblx0XHR3cFN1bW1hcnk6IGdldFdwU3VtbWFyeUNvbnRlbnQoeyRlZGl0Rm9ybX0pLFxuXHRcdHdwVGV4dGJveDE6IGdldFdwVGV4dGJveDFDb250ZW50KHskZWRpdEZvcm19KSxcblx0fTtcblxuXHRyZXR1cm4gc2F2ZU9iamVjdDtcbn07XG5cbmNvbnN0IHNldENhY2hlID0gKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSkgPT4ge1xuXHR0cnkge1xuXHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KGdldENhY2hlS2V5KCksIG5ld1NhdmVPYmplY3QoeyRlZGl0Rm9ybX0pLCA2MCAqIDYwICogMjQgKiAzMCAqIDEwMDApO1xuXHRcdHRvYXN0aWZ5KHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0NoYW5nZSBzYXZlZCcpLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0XHRncmF2aXR5OiAndG9wJyxcblx0XHRcdHBvc2l0aW9uOiAncmlnaHQnLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59O1xuXG5jb25zdCBnZXRDYWNoZSA9IGFzeW5jICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pID0+IHtcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0Y29uc3Qgc2F2ZU9iamVjdDogUGFydGlhbDxBdXRvU2F2ZU9iamVjdD4gPSBtdy5zdG9yYWdlLmdldE9iamVjdChnZXRDYWNoZUtleSgpKTtcblxuXHRpZiAoIXNhdmVPYmplY3QpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoc2F2ZU9iamVjdFsnd3BTdW1tYXJ5J10pIHtcblx0XHRzZXRXcFN1bW1hcnlDb250ZW50KHskZWRpdEZvcm0sIGNvbnRlbnQ6IHNhdmVPYmplY3RbJ3dwU3VtbWFyeSddfSk7XG5cdH1cblxuXHRpZiAoIXNhdmVPYmplY3RbJ3dwVGV4dGJveDEnXSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghW3NhdmVPYmplY3RbJ3dwVGV4dGJveDEnXSwgYCR7c2F2ZU9iamVjdFsnd3BUZXh0Ym94MSddfVxcbmBdLmluY2x1ZGVzKGdldFdwVGV4dGJveDFDb250ZW50KHskZWRpdEZvcm19KSkpIHtcblx0XHRjb25zdCBjb25maXJtID0gYXdhaXQgT08udWkuY29uZmlybShnZXRNZXNzYWdlKCdSZXN0b3JlIGNoYW5nZXM/JyksIHtcblx0XHRcdGFjdGlvbnM6IFtcblx0XHRcdFx0e2xhYmVsOiBnZXRNZXNzYWdlKCdSZXN0b3JlIHVuc2F2ZWQgY2hhbmdlcycpLCBhY3Rpb246ICdhY2NlcHQnLCBmbGFnczogWydwcm9ncmVzc2l2ZSddfSxcblx0XHRcdFx0e2xhYmVsOiBnZXRNZXNzYWdlKCdOb3QgdG8gcmVzdG9yZScpLCBhY3Rpb246ICdjYW5jZWwnLCBmbGFnczogWydkZXN0cnVjdGl2ZSddfSxcblx0XHRcdF0sXG5cdFx0fSk7XG5cdFx0aWYgKGNvbmZpcm0pIHtcblx0XHRcdHNldFdwVGV4dGJveDFDb250ZW50KHskZWRpdEZvcm0sIGNvbnRlbnQ6IHNhdmVPYmplY3RbJ3dwVGV4dGJveDEnXX0pO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgYXV0b1NldENhY2hlID0gYXN5bmMgKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSkgPT4ge1xuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGF3YWl0IGRlbGF5KDYwICogMTAwMCk7XG5cdFx0c2V0Q2FjaGUoeyRlZGl0Rm9ybX0pO1xuXHR9XG59O1xuXG5jb25zdCBzZXRDYWNoZUJlZm9yZVN1Ym1pdCA9ICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pID0+IHtcblx0Y29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxGb3JtRWxlbWVudD4oJyNlZGl0Zm9ybScpO1xuXHRlZGl0Rm9ybT8uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG5cdFx0aWYgKFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BQcmV2aWV3JyksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cERpZmYnKV0uaW5jbHVkZXMoZXZlbnQuc3VibWl0dGVyKSkge1xuXHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoYCR7Z2V0Q2FjaGVLZXkoKX0jI1ByZXZpZXdEaWZmYCwgJzEnLCA2MCAqIDYwICogMjQgKiAxKTtcblx0XHR9XG5cdFx0c2V0Q2FjaGUoeyRlZGl0Rm9ybX0pO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7Z2V0Q2FjaGUsIGF1dG9TZXRDYWNoZSwgc2V0Q2FjaGVCZWZvcmVTdWJtaXR9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnQ2hhbmdlIHNhdmVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0IGNvbnRlbnQgc2F2ZWQgdG8gbG9jYWwgc3RvcmFnZSBzdWNjZXNzZnVsbHknLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6R5YaF5a655bey5oiQ5Yqf5L+d5a2Y6Iez5pys5Zyw5a2Y5YKoJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8r+WFp+WuueW3suaIkOWKn+WEsuWtmOiHs+acrOWcsOWEsuWtmCcsXG5cdFx0fSksXG5cdFx0J1Jlc3RvcmUgY2hhbmdlcz8nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdXIgdW5zYXZlZCBjaGFnZXMgaGF2ZSBiZWVuIHNhdmVkIHRvIHlvdXIgbG9jYWwgc3RvcmFnZS4gUmVzdG9yZSBjaGFuZ2VzPycsXG5cdFx0XHQnemgtaGFucyc6ICflhYjliY3mnKrkv53lrZjnmoTnvJbovpHlhoXlrrnlt7LlrZjlgqjkuo7mnKzlnLDlrZjlgqjjgILmmK/lkKbmgaLlpI3lhYjliY3mnKrkv53lrZjnmoTnvJbovpHlhoXlrrnvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5YWI5YmN5pyq5L+d5a2Y55qE57eo6Lyv5YWn5a655bey5YSy5a2Y5LqO5pys5Zyw5YSy5a2Y44CC5piv5ZCm5oGi5b6p5YWI5YmN5pyq5L+d5a2Y55qE57eo6Lyv5YWn5a6577yfJyxcblx0XHR9KSxcblx0XHQnUmVzdG9yZSB1bnNhdmVkIGNoYW5nZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Jlc3RvcmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5oGi5aSNJyxcblx0XHRcdCd6aC1oYW50JzogJ+aBouW+qScsXG5cdFx0fSksXG5cdFx0J05vdCB0byByZXN0b3JlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOb3QgdG8gcmVzdG9yZScsXG5cdFx0XHQnemgtaGFucyc6ICfkuI3mgaLlpI0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiN5oGi5b6pJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7YXV0b1NldENhY2hlLCBnZXRDYWNoZSwgc2V0Q2FjaGVCZWZvcmVTdWJtaXR9IGZyb20gJy4vbW9kdWxlcy9jYWNoZSc7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKGFzeW5jICgkZWRpdEZvcm0pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0c2V0Q2FjaGVCZWZvcmVTdWJtaXQoeyRlZGl0Rm9ybX0pOyAvLyBBZGQgaG9vayB0byAjZWRpdGZvcm1cblx0YXdhaXQgZ2V0Q2FjaGUoeyRlZGl0Rm9ybX0pO1xuXHRhd2FpdCBhdXRvU2V0Q2FjaGUoeyRlZGl0Rm9ybX0pO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTtBQUNiLElBQUFDLGlCQUFrQjs7QUNEbkIsSUFBQUMscUJBTU9DLFFBQUEsaUJBQUE7O0FDUFAsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04saUJBQUEsR0FBZ0JELGtCQUFBRSxVQUFTO01BQ3hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QscUJBQUEsR0FBb0JILGtCQUFBRSxVQUFTO01BQzVCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsNEJBQUEsR0FBMkJILGtCQUFBRSxVQUFTO01BQ25DQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsbUJBQUEsR0FBa0JILGtCQUFBRSxVQUFTO01BQzFCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUNBLElBQU1DLGVBQWVILGdCQUFnQjtBQUVyQyxJQUFNSSxhQUFnREMsU0FB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Y2hlS2V5UHJlZml4IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldENhY2hlS2V5IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2FjaGVLZXkiLCAiY29uY2F0IiwgInNlY3Rpb24iLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJ2YWx1ZSIsICJuZXdTYXZlT2JqZWN0IiwgIiRlZGl0Rm9ybSIsICJzYXZlT2JqZWN0IiwgImRhdGUiLCAiRGF0ZSIsICJ3cFN1bW1hcnkiLCAiZ2V0V3BTdW1tYXJ5Q29udGVudCIsICJ3cFRleHRib3gxIiwgImdldFdwVGV4dGJveDFDb250ZW50IiwgInNldENhY2hlIiwgInN0b3JhZ2UiLCAic2V0T2JqZWN0IiwgInRvYXN0aWZ5IiwgInRleHQiLCAiY2xvc2UiLCAiZHVyYXRpb24iLCAiZ3Jhdml0eSIsICJwb3NpdGlvbiIsICJlcnJvciIsICJjb25zb2xlIiwgImdldENhY2hlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAic2V0IiwgImdldE9iamVjdCIsICJzZXRXcFN1bW1hcnlDb250ZW50IiwgImNvbnRlbnQiLCAiaW5jbHVkZXMiLCAiY29uZmlybSIsICJPTyIsICJ1aSIsICJhY3Rpb25zIiwgImxhYmVsIiwgImFjdGlvbiIsICJmbGFncyIsICJzZXRXcFRleHRib3gxQ29udGVudCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiYXV0b1NldENhY2hlIiwgIl9yZWYyIiwgImRlbGF5IiwgIl94MiIsICJzZXRDYWNoZUJlZm9yZVN1Ym1pdCIsICJlZGl0Rm9ybSIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2ZW50IiwgInN1Ym1pdHRlciIsICJob29rIiwgImFkZCIsICJfcmVmMyIsICJfeDMiXQp9Cg==
