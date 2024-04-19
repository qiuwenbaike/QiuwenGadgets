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
var import_ext_gadget = require("ext.gadget.Util");
var getWpTextbox1Content = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    const $body = yield (0, import_ext_gadget.getBody)();
    return $body.find("textarea[name=wpTextbox1]").textSelection("getContents");
  });
  return function getWpTextbox1Content2() {
    return _ref.apply(this, arguments);
  };
}();
var setWpTextbox1Content = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (content) {
    const $body = yield (0, import_ext_gadget.getBody)();
    $body.find("textarea[name=wpTextbox1]").textSelection("setContents", content);
  });
  return function setWpTextbox1Content2(_x) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/Wikicache/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Change saved": (0, import_ext_gadget2.localize)({
      en: "Edit content saved to local storage successfully",
      "zh-hans": "编辑内容已成功保存至本地存储",
      "zh-hant": "編輯內容已成功儲存至本地儲存"
    }),
    "Restore changes?": (0, import_ext_gadget2.localize)({
      en: "Your unsaved chages have been saved to your local storage. Restore changes?",
      "zh-hans": "先前未保存的编辑内容已存储于本地存储。是否恢复先前未保存的编辑内容？",
      "zh-hant": "先前未保存的編輯內容已儲存于本地儲存。是否恢復先前未保存的編輯內容？"
    }),
    "Restore unsaved changes": (0, import_ext_gadget2.localize)({
      en: "Restore",
      "zh-hans": "恢复",
      "zh-hant": "恢復"
    }),
    "Not to restore": (0, import_ext_gadget2.localize)({
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
//! src/Wikicache/modules/getCache.ts
var getCache = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (cacheKey) {
    const saveObject = mw.storage.getObject(cacheKey);
    if (!saveObject) {
      return;
    }
    const wpSummary = document.querySelector("input[name=wpSummary]");
    if (saveObject["input[name=wpSummary]"] && wpSummary) {
      wpSummary.value = saveObject["input[name=wpSummary]"];
    }
    if (saveObject["textarea[name=wpTextbox1]"] && !((yield getWpTextbox1Content()) === saveObject["textarea[name=wpTextbox1]"])) {
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
        yield setWpTextbox1Content(saveObject["textarea[name=wpTextbox1]"]);
      }
    }
  });
  return function getCache2(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/Wikicache/modules/getCacheKey.ts
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
//! src/Wikicache/modules/setCache.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var import_ext_gadget4 = require("ext.gadget.Toastify");
var setCache = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (cacheKey) {
    while (true) {
      var _document$querySelect2;
      yield (0, import_ext_gadget3.delay)(30 * 1e3);
      const newSaveObject = {
        date: /* @__PURE__ */ new Date(),
        "input[name=wpSummary]": "".concat((_document$querySelect2 = document.querySelector("input[name=wpSummary]")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.value),
        "textarea[name=wpTextbox1]": yield getWpTextbox1Content()
      };
      try {
        mw.storage.setObject(cacheKey, newSaveObject, 60 * 60 * 24 * 30 * 1e3);
        (0, import_ext_gadget4.toastify)({
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
  return function setCache2(_x3) {
    return _ref4.apply(this, arguments);
  };
}();
//! src/Wikicache/Wikicache.ts
(function wikicache() {
  if (mw.config.get(configKey)) {
    return;
  }
  mw.config.set(configKey, true);
  const cacheKey = getCacheKey();
  void getCache(cacheKey);
  void _asyncToGenerator(function* () {
    yield setCache(cacheKey);
  })();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2ljYWNoZS9vcHRpb25zLmpzb24iLCAic3JjL1dpa2ljYWNoZS9tb2R1bGVzL3dwVGV4dGJveDFDb250ZW50LnRzIiwgInNyYy9XaWtpY2FjaGUvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9XaWtpY2FjaGUvbW9kdWxlcy9nZXRDYWNoZS50cyIsICJzcmMvV2lraWNhY2hlL21vZHVsZXMvZ2V0Q2FjaGVLZXkudHMiLCAic3JjL1dpa2ljYWNoZS9tb2R1bGVzL3NldENhY2hlLnRzIiwgInNyYy9XaWtpY2FjaGUvV2lraWNhY2hlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LVdpa2ljYWNoZV9fSW5pdGlhbGl6ZWRcIixcblx0XCJjYWNoZUtleVByZWZpeFwiOiBcIndpa2ljYWNoZS1hdXRvc2F2ZS1cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGdldFdwVGV4dGJveDFDb250ZW50ID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCAkYm9keSA9IGF3YWl0IGdldEJvZHkoKTtcblx0cmV0dXJuICRib2R5LmZpbmQoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKS50ZXh0U2VsZWN0aW9uKCdnZXRDb250ZW50cycpO1xufTtcblxuY29uc3Qgc2V0V3BUZXh0Ym94MUNvbnRlbnQgPSBhc3luYyAoY29udGVudDogc3RyaW5nKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gYXdhaXQgZ2V0Qm9keSgpO1xuXHQkYm9keS5maW5kKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykudGV4dFNlbGVjdGlvbignc2V0Q29udGVudHMnLCBjb250ZW50KTtcbn07XG5cbmV4cG9ydCB7Z2V0V3BUZXh0Ym94MUNvbnRlbnQsIHNldFdwVGV4dGJveDFDb250ZW50fTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J0NoYW5nZSBzYXZlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCBjb250ZW50IHNhdmVkIHRvIGxvY2FsIHN0b3JhZ2Ugc3VjY2Vzc2Z1bGx5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8lui+keWGheWuueW3suaIkOWKn+S/neWtmOiHs+acrOWcsOWtmOWCqCcsXG5cdFx0XHQnemgtaGFudCc6ICfnt6jovK/lhaflrrnlt7LmiJDlip/lhLLlrZjoh7PmnKzlnLDlhLLlrZgnLFxuXHRcdH0pLFxuXHRcdCdSZXN0b3JlIGNoYW5nZXM/JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3VyIHVuc2F2ZWQgY2hhZ2VzIGhhdmUgYmVlbiBzYXZlZCB0byB5b3VyIGxvY2FsIHN0b3JhZ2UuIFJlc3RvcmUgY2hhbmdlcz8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWI5YmN5pyq5L+d5a2Y55qE57yW6L6R5YaF5a655bey5a2Y5YKo5LqO5pys5Zyw5a2Y5YKo44CC5piv5ZCm5oGi5aSN5YWI5YmN5pyq5L+d5a2Y55qE57yW6L6R5YaF5a6577yfJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFiOWJjeacquS/neWtmOeahOe3qOi8r+WFp+WuueW3suWEsuWtmOS6juacrOWcsOWEsuWtmOOAguaYr+WQpuaBouW+qeWFiOWJjeacquS/neWtmOeahOe3qOi8r+WFp+Wuue+8nycsXG5cdFx0fSksXG5cdFx0J1Jlc3RvcmUgdW5zYXZlZCBjaGFuZ2VzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXN0b3JlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aBouWkjScsXG5cdFx0XHQnemgtaGFudCc6ICfmgaLlvqknLFxuXHRcdH0pLFxuXHRcdCdOb3QgdG8gcmVzdG9yZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90IHRvIHJlc3RvcmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiN5oGi5aSNJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4jeaBouW+qScsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldFdwVGV4dGJveDFDb250ZW50LCBzZXRXcFRleHRib3gxQ29udGVudH0gZnJvbSAnLi93cFRleHRib3gxQ29udGVudCc7XG5pbXBvcnQgdHlwZSB7QXV0b1NhdmVPYmplY3R9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBnZXRDYWNoZSA9IGFzeW5jIChjYWNoZUtleTogc3RyaW5nKSA9PiB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0Y29uc3Qgc2F2ZU9iamVjdDogUGFydGlhbDxBdXRvU2F2ZU9iamVjdD4gPSBtdy5zdG9yYWdlLmdldE9iamVjdChjYWNoZUtleSk7XG5cblx0aWYgKCFzYXZlT2JqZWN0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgd3BTdW1tYXJ5OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpO1xuXHRpZiAoc2F2ZU9iamVjdFsnaW5wdXRbbmFtZT13cFN1bW1hcnldJ10gJiYgd3BTdW1tYXJ5KSB7XG5cdFx0d3BTdW1tYXJ5LnZhbHVlID0gc2F2ZU9iamVjdFsnaW5wdXRbbmFtZT13cFN1bW1hcnldJ107XG5cdH1cblxuXHRpZiAoXG5cdFx0c2F2ZU9iamVjdFsndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXSddICYmXG5cdFx0ISgoYXdhaXQgZ2V0V3BUZXh0Ym94MUNvbnRlbnQoKSkgPT09IHNhdmVPYmplY3RbJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nXSlcblx0KSB7XG5cdFx0Y29uc3QgY29uZmlybSA9IGF3YWl0IE9PLnVpLmNvbmZpcm0oZ2V0TWVzc2FnZSgnUmVzdG9yZSBjaGFuZ2VzPycpLCB7XG5cdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnUmVzdG9yZSB1bnNhdmVkIGNoYW5nZXMnKSwgYWN0aW9uOiAnYWNjZXB0JywgZmxhZ3M6IFsncHJvZ3Jlc3NpdmUnXX0sXG5cdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnTm90IHRvIHJlc3RvcmUnKSwgYWN0aW9uOiAnY2FuY2VsJywgZmxhZ3M6IFsnZGVzdHJ1Y3RpdmUnXX0sXG5cdFx0XHRdLFxuXHRcdH0pO1xuXHRcdGlmIChjb25maXJtKSB7XG5cdFx0XHRhd2FpdCBzZXRXcFRleHRib3gxQ29udGVudChzYXZlT2JqZWN0Wyd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJ10pO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtnZXRDYWNoZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuXG5jb25zdCBnZXRDYWNoZUtleSA9ICgpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRsZXQgY2FjaGVLZXk6IHN0cmluZyA9IGAke09QVElPTlMuY2FjaGVLZXlQcmVmaXh9JHt3Z1BhZ2VOYW1lfWA7XG5cdGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwU2VjdGlvbl0nKT8udmFsdWU7XG5cdGlmIChzZWN0aW9uKSB7XG5cdFx0Y2FjaGVLZXkgKz0gYCMke3NlY3Rpb259YDtcblx0fVxuXG5cdHJldHVybiBjYWNoZUtleTtcbn07XG5cbmV4cG9ydCB7Z2V0Q2FjaGVLZXl9O1xuIiwgImltcG9ydCB7QXV0b1NhdmVPYmplY3R9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtkZWxheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7Z2V0V3BUZXh0Ym94MUNvbnRlbnR9IGZyb20gJy4vd3BUZXh0Ym94MUNvbnRlbnQnO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHNldENhY2hlID0gYXN5bmMgKGNhY2hlS2V5OiBzdHJpbmcpID0+IHtcblx0d2hpbGUgKHRydWUpIHtcblx0XHRhd2FpdCBkZWxheSgzMCAqIDEwMDApO1xuXHRcdGNvbnN0IG5ld1NhdmVPYmplY3Q6IEF1dG9TYXZlT2JqZWN0ID0ge1xuXHRcdFx0ZGF0ZTogbmV3IERhdGUoKSxcblx0XHRcdCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nOiBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKT8udmFsdWV9YCxcblx0XHRcdCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJzogYXdhaXQgZ2V0V3BUZXh0Ym94MUNvbnRlbnQoKSxcblx0XHR9O1xuXHRcdHRyeSB7XG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChjYWNoZUtleSwgbmV3U2F2ZU9iamVjdCwgNjAgKiA2MCAqIDI0ICogMzAgKiAxMDAwKTtcblx0XHRcdHRvYXN0aWZ5KHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnQ2hhbmdlIHNhdmVkJyksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogMTAgKiAxMDAwLFxuXHRcdFx0XHRncmF2aXR5OiAndG9wJyxcblx0XHRcdFx0cG9zaXRpb246ICdyaWdodCcsXG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge3NldENhY2hlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0Q2FjaGV9IGZyb20gJy4vbW9kdWxlcy9nZXRDYWNoZSc7XG5pbXBvcnQge2dldENhY2hlS2V5fSBmcm9tICcuL21vZHVsZXMvZ2V0Q2FjaGVLZXknO1xuaW1wb3J0IHtzZXRDYWNoZX0gZnJvbSAnLi9tb2R1bGVzL3NldENhY2hlJztcblxuKGZ1bmN0aW9uIHdpa2ljYWNoZSgpOiB2b2lkIHtcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0IGNhY2hlS2V5ID0gZ2V0Q2FjaGVLZXkoKTtcblxuXHR2b2lkIGdldENhY2hlKGNhY2hlS2V5KTtcblxuXHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0YXdhaXQgc2V0Q2FjaGUoY2FjaGVLZXkpO1xuXHR9KSgpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhO0FBQ2IsSUFBQUMsaUJBQWtCOztBQ0ZuQixJQUFBQyxvQkFBc0JDLFFBQUEsaUJBQUE7QUFFdEIsSUFBTUMsdUJBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBdUIsYUFBWTtBQUN4QyxVQUFNQyxRQUFBLE9BQVEsR0FBTUwsa0JBQUFNLFNBQVE7QUFDNUIsV0FBT0QsTUFBTUUsS0FBSywyQkFBMkIsRUFBRUMsY0FBYyxhQUFhO0VBQzNFLENBQUE7QUFBQSxTQUFBLFNBSE1OLHdCQUFBO0FBQUEsV0FBQUMsS0FBQU0sTUFBQSxNQUFBQyxTQUFBO0VBQUE7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cUI7QUFDNUMsV0FBTyxNQUFNO0FBQUEsVUFBQTRCO0FBQ1osYUFBQSxHQUFNSixtQkFBQUssT0FBTSxLQUFLLEdBQUk7QUFDckIsWUFBTUMsZ0JBQWdDO1FBQ3JDQyxNQUFNLG9CQUFJQyxLQUFLO1FBQ2YseUJBQUEsR0FBQVYsUUFBQU0seUJBQTRCdEIsU0FBU0MsY0FBZ0MsdUJBQXVCLE9BQUEsUUFBQXFCLDJCQUFBLFNBQUEsU0FBaEVBLHVCQUFtRXBCLEtBQUs7UUFDcEcsNkJBQUEsTUFBbUM5QixxQkFBcUI7TUFDekQ7QUFDQSxVQUFJO0FBQ0h3QixXQUFHQyxRQUFROEIsVUFBVWpDLFVBQVU4QixlQUFlLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBSTtBQUN0RSxTQUFBLEdBQUFMLG1CQUFBUyxVQUFTO1VBQ1JDLE1BQU12QyxXQUFXLGNBQWM7VUFDL0J3QyxPQUFPO1VBQ1BDLFVBQVUsS0FBSztVQUNmQyxTQUFTO1VBQ1RDLFVBQVU7UUFDWCxDQUFDO01BQ0YsU0FBU0MsT0FBTztBQUNmQyxnQkFBUUQsTUFBTUEsS0FBSztNQUNwQjtJQUNEO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FyQk1kLFVBQUFnQixLQUFBO0FBQUEsV0FBQWYsTUFBQTFDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7Q0NETCxTQUFTeUQsWUFBa0I7QUFDM0IsTUFBSXpDLEdBQUdrQixPQUFPQyxJQUFZL0MsU0FBUyxHQUFHO0FBQ3JDO0VBQ0Q7QUFDQTRCLEtBQUdrQixPQUFPd0IsSUFBWXRFLFdBQVcsSUFBSTtBQUVyQyxRQUFNMEIsV0FBV2lCLFlBQVk7QUFFN0IsT0FBS25CLFNBQVNFLFFBQVE7QUFFdEIsT0FBQXBCLGtCQUFNLGFBQVk7QUFDakIsVUFBTThDLFNBQVMxQixRQUFRO0VBQ3hCLENBQUEsRUFBRztBQUNKLEdBQUc7IiwKICAibmFtZXMiOiBbImNvbmZpZ0tleSIsICJjYWNoZUtleVByZWZpeCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldFdwVGV4dGJveDFDb250ZW50IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiJGJvZHkiLCAiZ2V0Qm9keSIsICJmaW5kIiwgInRleHRTZWxlY3Rpb24iLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInNldFdwVGV4dGJveDFDb250ZW50IiwgIl9yZWYyIiwgImNvbnRlbnQiLCAiX3giLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0Q2FjaGUiLCAiX3JlZjMiLCAiY2FjaGVLZXkiLCAic2F2ZU9iamVjdCIsICJtdyIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJ3cFN1bW1hcnkiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJ2YWx1ZSIsICJjb25maXJtIiwgIk9PIiwgInVpIiwgImFjdGlvbnMiLCAibGFiZWwiLCAiYWN0aW9uIiwgImZsYWdzIiwgIl94MiIsICJnZXRDYWNoZUtleSIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAid2dQYWdlTmFtZSIsICJjb25maWciLCAiZ2V0IiwgImNvbmNhdCIsICJzZWN0aW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAic2V0Q2FjaGUiLCAiX3JlZjQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJkZWxheSIsICJuZXdTYXZlT2JqZWN0IiwgImRhdGUiLCAiRGF0ZSIsICJzZXRPYmplY3QiLCAidG9hc3RpZnkiLCAidGV4dCIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJncmF2aXR5IiwgInBvc2l0aW9uIiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3gzIiwgIndpa2ljYWNoZSIsICJzZXQiXQp9Cg==
