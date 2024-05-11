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
    if (saveObject["wpTextbox1"] && !((0, import_ext_gadget2.getWpTextbox1Content)({
      $editForm
    }) === saveObject["wpTextbox1"])) {
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
  $editForm.on("submit", () => {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2ljYWNoZS9vcHRpb25zLmpzb24iLCAic3JjL1dpa2ljYWNoZS9tb2R1bGVzL2NhY2hlLnRzIiwgInNyYy9XaWtpY2FjaGUvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9XaWtpY2FjaGUvV2lraWNhY2hlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LVdpa2ljYWNoZV9fSW5pdGlhbGl6ZWRcIixcblx0XCJjYWNoZUtleVByZWZpeFwiOiBcIndpa2ljYWNoZS1hdXRvc2F2ZS1cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1xuXHRkZWxheSxcblx0Z2V0V3BTdW1tYXJ5Q29udGVudCxcblx0Z2V0V3BUZXh0Ym94MUNvbnRlbnQsXG5cdHNldFdwU3VtbWFyeUNvbnRlbnQsXG5cdHNldFdwVGV4dGJveDFDb250ZW50LFxufSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtBdXRvU2F2ZU9iamVjdH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgZ2V0Q2FjaGVLZXkgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bGV0IGNhY2hlS2V5OiBzdHJpbmcgPSBgJHtPUFRJT05TLmNhY2hlS2V5UHJlZml4fSR7d2dQYWdlTmFtZX1gO1xuXHRjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT13cFNlY3Rpb25dJyk/LnZhbHVlO1xuXHRpZiAoc2VjdGlvbikge1xuXHRcdGNhY2hlS2V5ICs9IGAjJHtzZWN0aW9ufWA7XG5cdH1cblxuXHRyZXR1cm4gY2FjaGVLZXk7XG59O1xuXG5jb25zdCBuZXdTYXZlT2JqZWN0ID0gKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSk6IEF1dG9TYXZlT2JqZWN0ID0+IHtcblx0Y29uc3Qgc2F2ZU9iamVjdDogQXV0b1NhdmVPYmplY3QgPSB7XG5cdFx0ZGF0ZTogbmV3IERhdGUoKSxcblx0XHR3cFN1bW1hcnk6IGdldFdwU3VtbWFyeUNvbnRlbnQoeyRlZGl0Rm9ybX0pLFxuXHRcdHdwVGV4dGJveDE6IGdldFdwVGV4dGJveDFDb250ZW50KHskZWRpdEZvcm19KSxcblx0fTtcblxuXHRyZXR1cm4gc2F2ZU9iamVjdDtcbn07XG5cbmNvbnN0IHNldENhY2hlID0gKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSkgPT4ge1xuXHR0cnkge1xuXHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KGdldENhY2hlS2V5KCksIG5ld1NhdmVPYmplY3QoeyRlZGl0Rm9ybX0pLCA2MCAqIDYwICogMjQgKiAzMCAqIDEwMDApO1xuXHRcdHRvYXN0aWZ5KHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0NoYW5nZSBzYXZlZCcpLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0XHRncmF2aXR5OiAndG9wJyxcblx0XHRcdHBvc2l0aW9uOiAncmlnaHQnLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59O1xuXG5jb25zdCBnZXRDYWNoZSA9IGFzeW5jICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pID0+IHtcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0Y29uc3Qgc2F2ZU9iamVjdDogUGFydGlhbDxBdXRvU2F2ZU9iamVjdD4gPSBtdy5zdG9yYWdlLmdldE9iamVjdChnZXRDYWNoZUtleSgpKTtcblxuXHRpZiAoIXNhdmVPYmplY3QpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoc2F2ZU9iamVjdFsnd3BTdW1tYXJ5J10pIHtcblx0XHRzZXRXcFN1bW1hcnlDb250ZW50KHskZWRpdEZvcm0sIGNvbnRlbnQ6IHNhdmVPYmplY3RbJ3dwU3VtbWFyeSddfSk7XG5cdH1cblxuXHRpZiAoc2F2ZU9iamVjdFsnd3BUZXh0Ym94MSddICYmICEoZ2V0V3BUZXh0Ym94MUNvbnRlbnQoeyRlZGl0Rm9ybX0pID09PSBzYXZlT2JqZWN0Wyd3cFRleHRib3gxJ10pKSB7XG5cdFx0Y29uc3QgY29uZmlybSA9IGF3YWl0IE9PLnVpLmNvbmZpcm0oZ2V0TWVzc2FnZSgnUmVzdG9yZSBjaGFuZ2VzPycpLCB7XG5cdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnUmVzdG9yZSB1bnNhdmVkIGNoYW5nZXMnKSwgYWN0aW9uOiAnYWNjZXB0JywgZmxhZ3M6IFsncHJvZ3Jlc3NpdmUnXX0sXG5cdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnTm90IHRvIHJlc3RvcmUnKSwgYWN0aW9uOiAnY2FuY2VsJywgZmxhZ3M6IFsnZGVzdHJ1Y3RpdmUnXX0sXG5cdFx0XHRdLFxuXHRcdH0pO1xuXHRcdGlmIChjb25maXJtKSB7XG5cdFx0XHRzZXRXcFRleHRib3gxQ29udGVudCh7JGVkaXRGb3JtLCBjb250ZW50OiBzYXZlT2JqZWN0Wyd3cFRleHRib3gxJ119KTtcblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IGF1dG9TZXRDYWNoZSA9IGFzeW5jICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pID0+IHtcblx0d2hpbGUgKHRydWUpIHtcblx0XHRhd2FpdCBkZWxheSg2MCAqIDEwMDApO1xuXHRcdHNldENhY2hlKHskZWRpdEZvcm19KTtcblx0fVxufTtcblxuY29uc3Qgc2V0Q2FjaGVCZWZvcmVTdWJtaXQgPSAoeyRlZGl0Rm9ybX06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KSA9PiB7XG5cdCRlZGl0Rm9ybS5vbignc3VibWl0JywgKCkgPT4ge1xuXHRcdHNldENhY2hlKHskZWRpdEZvcm19KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2dldENhY2hlLCBhdXRvU2V0Q2FjaGUsIHNldENhY2hlQmVmb3JlU3VibWl0fTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J0NoYW5nZSBzYXZlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCBjb250ZW50IHNhdmVkIHRvIGxvY2FsIHN0b3JhZ2Ugc3VjY2Vzc2Z1bGx5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8lui+keWGheWuueW3suaIkOWKn+S/neWtmOiHs+acrOWcsOWtmOWCqCcsXG5cdFx0XHQnemgtaGFudCc6ICfnt6jovK/lhaflrrnlt7LmiJDlip/lhLLlrZjoh7PmnKzlnLDlhLLlrZgnLFxuXHRcdH0pLFxuXHRcdCdSZXN0b3JlIGNoYW5nZXM/JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3VyIHVuc2F2ZWQgY2hhZ2VzIGhhdmUgYmVlbiBzYXZlZCB0byB5b3VyIGxvY2FsIHN0b3JhZ2UuIFJlc3RvcmUgY2hhbmdlcz8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWI5YmN5pyq5L+d5a2Y55qE57yW6L6R5YaF5a655bey5a2Y5YKo5LqO5pys5Zyw5a2Y5YKo44CC5piv5ZCm5oGi5aSN5YWI5YmN5pyq5L+d5a2Y55qE57yW6L6R5YaF5a6577yfJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFiOWJjeacquS/neWtmOeahOe3qOi8r+WFp+WuueW3suWEsuWtmOS6juacrOWcsOWEsuWtmOOAguaYr+WQpuaBouW+qeWFiOWJjeacquS/neWtmOeahOe3qOi8r+WFp+Wuue+8nycsXG5cdFx0fSksXG5cdFx0J1Jlc3RvcmUgdW5zYXZlZCBjaGFuZ2VzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXN0b3JlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aBouWkjScsXG5cdFx0XHQnemgtaGFudCc6ICfmgaLlvqknLFxuXHRcdH0pLFxuXHRcdCdOb3QgdG8gcmVzdG9yZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90IHRvIHJlc3RvcmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiN5oGi5aSNJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4jeaBouW+qScsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2F1dG9TZXRDYWNoZSwgZ2V0Q2FjaGUsIHNldENhY2hlQmVmb3JlU3VibWl0fSBmcm9tICcuL21vZHVsZXMvY2FjaGUnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZChhc3luYyAoJGVkaXRGb3JtKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHNldENhY2hlQmVmb3JlU3VibWl0KHskZWRpdEZvcm19KTsgLy8gQWRkIGhvb2sgdG8gI2VkaXRmb3JtXG5cdGF3YWl0IGdldENhY2hlKHskZWRpdEZvcm19KTtcblx0YXdhaXQgYXV0b1NldENhY2hlKHskZWRpdEZvcm19KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjog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O01BQUN6QztJQUFTLENBQUM7QUFDaEMsVUFBTW1CLFNBQVM7TUFBQ25CO0lBQVMsQ0FBQztBQUMxQixVQUFNcUMsYUFBYTtNQUFDckM7SUFBUyxDQUFDO0VBQy9CLENBQUM7QUFBQSxTQUFBLFNBQUE4QyxLQUFBO0FBQUEsV0FBQUQsTUFBQVYsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBLENBQUE7IiwKICAibmFtZXMiOiBbImNvbmZpZ0tleSIsICJjYWNoZUtleVByZWZpeCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRDYWNoZUtleSIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImNhY2hlS2V5IiwgImNvbmNhdCIsICJzZWN0aW9uIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAidmFsdWUiLCAibmV3U2F2ZU9iamVjdCIsICIkZWRpdEZvcm0iLCAic2F2ZU9iamVjdCIsICJkYXRlIiwgIkRhdGUiLCAid3BTdW1tYXJ5IiwgImdldFdwU3VtbWFyeUNvbnRlbnQiLCAid3BUZXh0Ym94MSIsICJnZXRXcFRleHRib3gxQ29udGVudCIsICJzZXRDYWNoZSIsICJzdG9yYWdlIiwgInNldE9iamVjdCIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImNsb3NlIiwgImR1cmF0aW9uIiwgImdyYXZpdHkiLCAicG9zaXRpb24iLCAiZXJyb3IiLCAiY29uc29sZSIsICJnZXRDYWNoZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInNldCIsICJnZXRPYmplY3QiLCAic2V0V3BTdW1tYXJ5Q29udGVudCIsICJjb250ZW50IiwgImNvbmZpcm0iLCAiT08iLCAidWkiLCAiYWN0aW9ucyIsICJsYWJlbCIsICJhY3Rpb24iLCAiZmxhZ3MiLCAic2V0V3BUZXh0Ym94MUNvbnRlbnQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImF1dG9TZXRDYWNoZSIsICJfcmVmMiIsICJkZWxheSIsICJfeDIiLCAic2V0Q2FjaGVCZWZvcmVTdWJtaXQiLCAib24iLCAiaG9vayIsICJhZGQiLCAiX3JlZjMiLCAiX3gzIl0KfQo=
