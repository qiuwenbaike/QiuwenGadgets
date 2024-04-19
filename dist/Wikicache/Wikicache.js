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
//! src/Wikicache/modules/wpTextbox1Content.ts
var getWpTextbox1Content = ({
  $editForm
}) => {
  return $editForm.find("textarea[name=wpTextbox1]").textSelection("getContents");
};
var setWpTextbox1Content = ({
  $editForm,
  content
}) => {
  $editForm.find("textarea[name=wpTextbox1]").textSelection("setContents", content);
};
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
var getCache = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* ({
    $editForm
  }) {
    const saveObject = mw.storage.getObject(getCacheKey());
    if (!saveObject) {
      return;
    }
    const wpSummary = document.querySelector("input[name=wpSummary]");
    if (saveObject["input[name=wpSummary]"] && wpSummary) {
      wpSummary.value = saveObject["input[name=wpSummary]"];
    }
    if (saveObject["textarea[name=wpTextbox1]"] && !(getWpTextbox1Content({
      $editForm
    }) === saveObject["textarea[name=wpTextbox1]"])) {
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
        setWpTextbox1Content({
          $editForm,
          content: saveObject["textarea[name=wpTextbox1]"]
        });
      }
    }
  });
  return function getCache2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var setCache = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* ({
    $editForm
  }) {
    while (true) {
      var _document$querySelect2;
      yield (0, import_ext_gadget2.delay)(30 * 1e3);
      const newSaveObject = {
        date: /* @__PURE__ */ new Date(),
        "input[name=wpSummary]": "".concat((_document$querySelect2 = document.querySelector("input[name=wpSummary]")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.value),
        "textarea[name=wpTextbox1]": getWpTextbox1Content({
          $editForm
        })
      };
      try {
        mw.storage.setObject(getCacheKey(), newSaveObject, 60 * 60 * 24 * 30 * 1e3);
        (0, import_ext_gadget3.toastify)({
          text: getMessage("Change saved"),
          close: true,
          duration: 10 * 1e3,
          gravity: "top",
          position: "right"
        });
      } catch (error) {
        console.error(error);
      }
    }
  });
  return function setCache2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/Wikicache/Wikicache.ts
(function wikicache() {
  if (mw.config.get(configKey)) {
    return;
  }
  mw.config.set(configKey, true);
  mw.hook("wikipage.editform").add(($editForm) => {
    void _asyncToGenerator(function* () {
      yield getCache({
        $editForm
      });
      yield setCache({
        $editForm
      });
    })();
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2ljYWNoZS9vcHRpb25zLmpzb24iLCAic3JjL1dpa2ljYWNoZS9tb2R1bGVzL3dwVGV4dGJveDFDb250ZW50LnRzIiwgInNyYy9XaWtpY2FjaGUvbW9kdWxlcy9jYWNoZS50cyIsICJzcmMvV2lraWNhY2hlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvV2lraWNhY2hlL1dpa2ljYWNoZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1XaWtpY2FjaGVfX0luaXRpYWxpemVkXCIsXG5cdFwiY2FjaGVLZXlQcmVmaXhcIjogXCJ3aWtpY2FjaGUtYXV0b3NhdmUtXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiY29uc3QgZ2V0V3BUZXh0Ym94MUNvbnRlbnQgPSAoeyRlZGl0Rm9ybX06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KSA9PiB7XG5cdHJldHVybiAkZWRpdEZvcm0uZmluZCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpLnRleHRTZWxlY3Rpb24oJ2dldENvbnRlbnRzJyk7XG59O1xuXG5jb25zdCBzZXRXcFRleHRib3gxQ29udGVudCA9ICh7JGVkaXRGb3JtLCBjb250ZW50fTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50PjsgY29udGVudDogc3RyaW5nfSkgPT4ge1xuXHQkZWRpdEZvcm0uZmluZCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpLnRleHRTZWxlY3Rpb24oJ3NldENvbnRlbnRzJywgY29udGVudCk7XG59O1xuXG5leHBvcnQge2dldFdwVGV4dGJveDFDb250ZW50LCBzZXRXcFRleHRib3gxQ29udGVudH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRXcFRleHRib3gxQ29udGVudCwgc2V0V3BUZXh0Ym94MUNvbnRlbnR9IGZyb20gJy4vd3BUZXh0Ym94MUNvbnRlbnQnO1xuaW1wb3J0IHtBdXRvU2F2ZU9iamVjdH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2RlbGF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IGdldENhY2hlS2V5ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxldCBjYWNoZUtleTogc3RyaW5nID0gYCR7T1BUSU9OUy5jYWNoZUtleVByZWZpeH0ke3dnUGFnZU5hbWV9YDtcblx0Y29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BTZWN0aW9uXScpPy52YWx1ZTtcblx0aWYgKHNlY3Rpb24pIHtcblx0XHRjYWNoZUtleSArPSBgIyR7c2VjdGlvbn1gO1xuXHR9XG5cblx0cmV0dXJuIGNhY2hlS2V5O1xufTtcblxuY29uc3QgZ2V0Q2FjaGUgPSBhc3luYyAoeyRlZGl0Rm9ybX06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KSA9PiB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0Y29uc3Qgc2F2ZU9iamVjdDogUGFydGlhbDxBdXRvU2F2ZU9iamVjdD4gPSBtdy5zdG9yYWdlLmdldE9iamVjdChnZXRDYWNoZUtleSgpKTtcblxuXHRpZiAoIXNhdmVPYmplY3QpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB3cFN1bW1hcnk6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cFN1bW1hcnldJyk7XG5cdGlmIChzYXZlT2JqZWN0WydpbnB1dFtuYW1lPXdwU3VtbWFyeV0nXSAmJiB3cFN1bW1hcnkpIHtcblx0XHR3cFN1bW1hcnkudmFsdWUgPSBzYXZlT2JqZWN0WydpbnB1dFtuYW1lPXdwU3VtbWFyeV0nXTtcblx0fVxuXG5cdGlmIChcblx0XHRzYXZlT2JqZWN0Wyd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJ10gJiZcblx0XHQhKGdldFdwVGV4dGJveDFDb250ZW50KHskZWRpdEZvcm19KSA9PT0gc2F2ZU9iamVjdFsndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXSddKVxuXHQpIHtcblx0XHRjb25zdCBjb25maXJtID0gYXdhaXQgT08udWkuY29uZmlybShnZXRNZXNzYWdlKCdSZXN0b3JlIGNoYW5nZXM/JyksIHtcblx0XHRcdGFjdGlvbnM6IFtcblx0XHRcdFx0e2xhYmVsOiBnZXRNZXNzYWdlKCdSZXN0b3JlIHVuc2F2ZWQgY2hhbmdlcycpLCBhY3Rpb246ICdhY2NlcHQnLCBmbGFnczogWydwcm9ncmVzc2l2ZSddfSxcblx0XHRcdFx0e2xhYmVsOiBnZXRNZXNzYWdlKCdOb3QgdG8gcmVzdG9yZScpLCBhY3Rpb246ICdjYW5jZWwnLCBmbGFnczogWydkZXN0cnVjdGl2ZSddfSxcblx0XHRcdF0sXG5cdFx0fSk7XG5cdFx0aWYgKGNvbmZpcm0pIHtcblx0XHRcdHNldFdwVGV4dGJveDFDb250ZW50KHskZWRpdEZvcm0sIGNvbnRlbnQ6IHNhdmVPYmplY3RbJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nXX0pO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3Qgc2V0Q2FjaGUgPSBhc3luYyAoeyRlZGl0Rm9ybX06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KSA9PiB7XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0YXdhaXQgZGVsYXkoMzAgKiAxMDAwKTtcblx0XHRjb25zdCBuZXdTYXZlT2JqZWN0OiBBdXRvU2F2ZU9iamVjdCA9IHtcblx0XHRcdGRhdGU6IG5ldyBEYXRlKCksXG5cdFx0XHQnaW5wdXRbbmFtZT13cFN1bW1hcnldJzogYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT13cFN1bW1hcnldJyk/LnZhbHVlfWAsXG5cdFx0XHQndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXSc6IGdldFdwVGV4dGJveDFDb250ZW50KHskZWRpdEZvcm19KSxcblx0XHR9O1xuXHRcdHRyeSB7XG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChnZXRDYWNoZUtleSgpLCBuZXdTYXZlT2JqZWN0LCA2MCAqIDYwICogMjQgKiAzMCAqIDEwMDApO1xuXHRcdFx0dG9hc3RpZnkoe1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdDaGFuZ2Ugc2F2ZWQnKSxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAxMCAqIDEwMDAsXG5cdFx0XHRcdGdyYXZpdHk6ICd0b3AnLFxuXHRcdFx0XHRwb3NpdGlvbjogJ3JpZ2h0Jyxcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7Z2V0Q2FjaGUsIHNldENhY2hlfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J0NoYW5nZSBzYXZlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCBjb250ZW50IHNhdmVkIHRvIGxvY2FsIHN0b3JhZ2Ugc3VjY2Vzc2Z1bGx5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8lui+keWGheWuueW3suaIkOWKn+S/neWtmOiHs+acrOWcsOWtmOWCqCcsXG5cdFx0XHQnemgtaGFudCc6ICfnt6jovK/lhaflrrnlt7LmiJDlip/lhLLlrZjoh7PmnKzlnLDlhLLlrZgnLFxuXHRcdH0pLFxuXHRcdCdSZXN0b3JlIGNoYW5nZXM/JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3VyIHVuc2F2ZWQgY2hhZ2VzIGhhdmUgYmVlbiBzYXZlZCB0byB5b3VyIGxvY2FsIHN0b3JhZ2UuIFJlc3RvcmUgY2hhbmdlcz8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWI5YmN5pyq5L+d5a2Y55qE57yW6L6R5YaF5a655bey5a2Y5YKo5LqO5pys5Zyw5a2Y5YKo44CC5piv5ZCm5oGi5aSN5YWI5YmN5pyq5L+d5a2Y55qE57yW6L6R5YaF5a6577yfJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFiOWJjeacquS/neWtmOeahOe3qOi8r+WFp+WuueW3suWEsuWtmOS6juacrOWcsOWEsuWtmOOAguaYr+WQpuaBouW+qeWFiOWJjeacquS/neWtmOeahOe3qOi8r+WFp+Wuue+8nycsXG5cdFx0fSksXG5cdFx0J1Jlc3RvcmUgdW5zYXZlZCBjaGFuZ2VzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXN0b3JlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aBouWkjScsXG5cdFx0XHQnemgtaGFudCc6ICfmgaLlvqknLFxuXHRcdH0pLFxuXHRcdCdOb3QgdG8gcmVzdG9yZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90IHRvIHJlc3RvcmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiN5oGi5aSNJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4jeaBouW+qScsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0Q2FjaGUsIHNldENhY2hlfSBmcm9tICcuL21vZHVsZXMvY2FjaGUnO1xuXG4oZnVuY3Rpb24gd2lraWNhY2hlKCk6IHZvaWQge1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IGdldENhY2hlKHskZWRpdEZvcm19KTtcblx0XHRcdGF3YWl0IHNldENhY2hlKHskZWRpdEZvcm19KTtcblx0XHR9KSgpO1xuXHR9KTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTtBQUNiLElBQUFDLGlCQUFrQjs7QUNGbkIsSUFBTUMsdUJBQXVCQSxDQUFDO0VBQUNDO0FBQVMsTUFBd0M7QUFDL0UsU0FBT0EsVUFBVUMsS0FBSywyQkFBMkIsRUFBRUMsY0FBYyxhQUFhO0FBQy9FO0FBRUEsSUFBTUMsdUJBQXVCQSxDQUFDO0VBQUNIO0VBQVdJO0FBQU8sTUFBeUQ7QUFDekdKLFlBQVVDLEtBQUssMkJBQTJCLEVBQUVDLGNBQWMsZUFBZUUsT0FBTztBQUNqRjs7QUNIQSxJQUFBQyxxQkFBb0JDLFFBQUEsaUJBQUE7O0FDSHBCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLGlCQUFBLEdBQWdCRCxrQkFBQUUsVUFBUztNQUN4QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHFCQUFBLEdBQW9CSCxrQkFBQUUsVUFBUztNQUM1QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELDRCQUFBLEdBQTJCSCxrQkFBQUUsVUFBUztNQUNuQ0MsSUFB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QUFLO01BQ3BCO0lBQ0Q7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQXJCTWQsVUFBQWdCLEtBQUE7QUFBQSxXQUFBZixNQUFBSCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0NFNUNMLFNBQVNrQixZQUFrQjtBQUMzQixNQUFJM0MsR0FBR0MsT0FBT0MsSUFBWXZCLFNBQVMsR0FBRztBQUNyQztFQUNEO0FBQ0FxQixLQUFHQyxPQUFPMkMsSUFBWWpFLFdBQVcsSUFBSTtBQUVyQ3FCLEtBQUc2QyxLQUFLLG1CQUFtQixFQUFFQyxJQUFLaEUsZUFBb0I7QUFDckQsU0FBQTZCLGtCQUFNLGFBQVk7QUFDakIsWUFBTUYsU0FBUztRQUFDM0I7TUFBUyxDQUFDO0FBQzFCLFlBQU00QyxTQUFTO1FBQUM1QztNQUFTLENBQUM7SUFDM0IsQ0FBQSxFQUFHO0VBQ0osQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbImNvbmZpZ0tleSIsICJjYWNoZUtleVByZWZpeCIsICJnZXRXcFRleHRib3gxQ29udGVudCIsICIkZWRpdEZvcm0iLCAiZmluZCIsICJ0ZXh0U2VsZWN0aW9uIiwgInNldFdwVGV4dGJveDFDb250ZW50IiwgImNvbnRlbnQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0Q2FjaGVLZXkiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjYWNoZUtleSIsICJjb25jYXQiLCAic2VjdGlvbiIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInZhbHVlIiwgImdldENhY2hlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAic2F2ZU9iamVjdCIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJ3cFN1bW1hcnkiLCAiY29uZmlybSIsICJPTyIsICJ1aSIsICJhY3Rpb25zIiwgImxhYmVsIiwgImFjdGlvbiIsICJmbGFncyIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAic2V0Q2FjaGUiLCAiX3JlZjIiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJkZWxheSIsICJuZXdTYXZlT2JqZWN0IiwgImRhdGUiLCAiRGF0ZSIsICJzZXRPYmplY3QiLCAidG9hc3RpZnkiLCAidGV4dCIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJncmF2aXR5IiwgInBvc2l0aW9uIiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3gyIiwgIndpa2ljYWNoZSIsICJzZXQiLCAiaG9vayIsICJhZGQiXQp9Cg==
