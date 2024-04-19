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
//! src/Wikicache/modules/wpTextbox1Content.ts
var getWpTextbox1Content = ({
  $body
}) => {
  return $body.find("textarea[name=wpTextbox1]").textSelection("getContents");
};
var setWpTextbox1Content = ({
  $body,
  content
}) => {
  $body.find("textarea[name=wpTextbox1]").textSelection("setContents", content);
};
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
  var _ref = _asyncToGenerator(function* () {
    const saveObject = mw.storage.getObject(getCacheKey());
    const $body = yield (0, import_ext_gadget2.getBody)();
    if (!saveObject) {
      return;
    }
    const wpSummary = document.querySelector("input[name=wpSummary]");
    if (saveObject["input[name=wpSummary]"] && wpSummary) {
      wpSummary.value = saveObject["input[name=wpSummary]"];
    }
    if (saveObject["textarea[name=wpTextbox1]"] && !(getWpTextbox1Content({
      $body
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
          $body,
          content: saveObject["textarea[name=wpTextbox1]"]
        });
      }
    }
  });
  return function getCache2() {
    return _ref.apply(this, arguments);
  };
}();
var setCache = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* () {
    const $body = yield (0, import_ext_gadget2.getBody)();
    while (true) {
      var _document$querySelect2;
      yield (0, import_ext_gadget2.delay)(30 * 1e3);
      const newSaveObject = {
        date: /* @__PURE__ */ new Date(),
        "input[name=wpSummary]": "".concat((_document$querySelect2 = document.querySelector("input[name=wpSummary]")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.value),
        "textarea[name=wpTextbox1]": getWpTextbox1Content({
          $body
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
  return function setCache2() {
    return _ref2.apply(this, arguments);
  };
}();
//! src/Wikicache/Wikicache.ts
(function() {
  var _wikicache = _asyncToGenerator(function* () {
    if (mw.config.get(configKey)) {
      return;
    }
    mw.config.set(configKey, true);
    yield getCache();
    yield setCache();
  });
  function wikicache() {
    return _wikicache.apply(this, arguments);
  }
  return wikicache;
})()();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2ljYWNoZS9vcHRpb25zLmpzb24iLCAic3JjL1dpa2ljYWNoZS9tb2R1bGVzL2NhY2hlLnRzIiwgInNyYy9XaWtpY2FjaGUvbW9kdWxlcy93cFRleHRib3gxQ29udGVudC50cyIsICJzcmMvV2lraWNhY2hlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvV2lraWNhY2hlL1dpa2ljYWNoZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1XaWtpY2FjaGVfX0luaXRpYWxpemVkXCIsXG5cdFwiY2FjaGVLZXlQcmVmaXhcIjogXCJ3aWtpY2FjaGUtYXV0b3NhdmUtXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtkZWxheSwgZ2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0V3BUZXh0Ym94MUNvbnRlbnQsIHNldFdwVGV4dGJveDFDb250ZW50fSBmcm9tICcuL3dwVGV4dGJveDFDb250ZW50JztcbmltcG9ydCB7QXV0b1NhdmVPYmplY3R9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IGdldENhY2hlS2V5ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxldCBjYWNoZUtleTogc3RyaW5nID0gYCR7T1BUSU9OUy5jYWNoZUtleVByZWZpeH0ke3dnUGFnZU5hbWV9YDtcblx0Y29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BTZWN0aW9uXScpPy52YWx1ZTtcblx0aWYgKHNlY3Rpb24pIHtcblx0XHRjYWNoZUtleSArPSBgIyR7c2VjdGlvbn1gO1xuXHR9XG5cblx0cmV0dXJuIGNhY2hlS2V5O1xufTtcblxuY29uc3QgZ2V0Q2FjaGUgPSBhc3luYyAoKSA9PiB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0Y29uc3Qgc2F2ZU9iamVjdDogUGFydGlhbDxBdXRvU2F2ZU9iamVjdD4gPSBtdy5zdG9yYWdlLmdldE9iamVjdChnZXRDYWNoZUtleSgpKTtcblx0Y29uc3QgJGJvZHkgPSBhd2FpdCBnZXRCb2R5KCk7XG5cblx0aWYgKCFzYXZlT2JqZWN0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgd3BTdW1tYXJ5OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpO1xuXHRpZiAoc2F2ZU9iamVjdFsnaW5wdXRbbmFtZT13cFN1bW1hcnldJ10gJiYgd3BTdW1tYXJ5KSB7XG5cdFx0d3BTdW1tYXJ5LnZhbHVlID0gc2F2ZU9iamVjdFsnaW5wdXRbbmFtZT13cFN1bW1hcnldJ107XG5cdH1cblxuXHRpZiAoXG5cdFx0c2F2ZU9iamVjdFsndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXSddICYmXG5cdFx0IShnZXRXcFRleHRib3gxQ29udGVudCh7JGJvZHl9KSA9PT0gc2F2ZU9iamVjdFsndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXSddKVxuXHQpIHtcblx0XHRjb25zdCBjb25maXJtID0gYXdhaXQgT08udWkuY29uZmlybShnZXRNZXNzYWdlKCdSZXN0b3JlIGNoYW5nZXM/JyksIHtcblx0XHRcdGFjdGlvbnM6IFtcblx0XHRcdFx0e2xhYmVsOiBnZXRNZXNzYWdlKCdSZXN0b3JlIHVuc2F2ZWQgY2hhbmdlcycpLCBhY3Rpb246ICdhY2NlcHQnLCBmbGFnczogWydwcm9ncmVzc2l2ZSddfSxcblx0XHRcdFx0e2xhYmVsOiBnZXRNZXNzYWdlKCdOb3QgdG8gcmVzdG9yZScpLCBhY3Rpb246ICdjYW5jZWwnLCBmbGFnczogWydkZXN0cnVjdGl2ZSddfSxcblx0XHRcdF0sXG5cdFx0fSk7XG5cdFx0aWYgKGNvbmZpcm0pIHtcblx0XHRcdHNldFdwVGV4dGJveDFDb250ZW50KHskYm9keSwgY29udGVudDogc2F2ZU9iamVjdFsndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXSddfSk7XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBzZXRDYWNoZSA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgJGJvZHkgPSBhd2FpdCBnZXRCb2R5KCk7XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0YXdhaXQgZGVsYXkoMzAgKiAxMDAwKTtcblx0XHRjb25zdCBuZXdTYXZlT2JqZWN0OiBBdXRvU2F2ZU9iamVjdCA9IHtcblx0XHRcdGRhdGU6IG5ldyBEYXRlKCksXG5cdFx0XHQnaW5wdXRbbmFtZT13cFN1bW1hcnldJzogYCR7ZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT13cFN1bW1hcnldJyk/LnZhbHVlfWAsXG5cdFx0XHQndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXSc6IGdldFdwVGV4dGJveDFDb250ZW50KHskYm9keX0pLFxuXHRcdH07XG5cdFx0dHJ5IHtcblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KGdldENhY2hlS2V5KCksIG5ld1NhdmVPYmplY3QsIDYwICogNjAgKiAyNCAqIDMwICogMTAwMCk7XG5cdFx0XHR0b2FzdGlmeSh7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0NoYW5nZSBzYXZlZCcpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IDEwICogMTAwMCxcblx0XHRcdFx0Z3Jhdml0eTogJ3RvcCcsXG5cdFx0XHRcdHBvc2l0aW9uOiAncmlnaHQnLFxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtnZXRDYWNoZSwgc2V0Q2FjaGV9O1xuIiwgImNvbnN0IGdldFdwVGV4dGJveDFDb250ZW50ID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD59KSA9PiB7XG5cdHJldHVybiAkYm9keS5maW5kKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykudGV4dFNlbGVjdGlvbignZ2V0Q29udGVudHMnKTtcbn07XG5cbmNvbnN0IHNldFdwVGV4dGJveDFDb250ZW50ID0gKHskYm9keSwgY29udGVudH06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47IGNvbnRlbnQ6IHN0cmluZ30pID0+IHtcblx0JGJvZHkuZmluZCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpLnRleHRTZWxlY3Rpb24oJ3NldENvbnRlbnRzJywgY29udGVudCk7XG59O1xuXG5leHBvcnQge2dldFdwVGV4dGJveDFDb250ZW50LCBzZXRXcFRleHRib3gxQ29udGVudH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdDaGFuZ2Ugc2F2ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQgY29udGVudCBzYXZlZCB0byBsb2NhbCBzdG9yYWdlIHN1Y2Nlc3NmdWxseScsXG5cdFx0XHQnemgtaGFucyc6ICfnvJbovpHlhoXlrrnlt7LmiJDlip/kv53lrZjoh7PmnKzlnLDlrZjlgqgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57eo6Lyv5YWn5a655bey5oiQ5Yqf5YSy5a2Y6Iez5pys5Zyw5YSy5a2YJyxcblx0XHR9KSxcblx0XHQnUmVzdG9yZSBjaGFuZ2VzPyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91ciB1bnNhdmVkIGNoYWdlcyBoYXZlIGJlZW4gc2F2ZWQgdG8geW91ciBsb2NhbCBzdG9yYWdlLiBSZXN0b3JlIGNoYW5nZXM/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFiOWJjeacquS/neWtmOeahOe8lui+keWGheWuueW3suWtmOWCqOS6juacrOWcsOWtmOWCqOOAguaYr+WQpuaBouWkjeWFiOWJjeacquS/neWtmOeahOe8lui+keWGheWuue+8nycsXG5cdFx0XHQnemgtaGFudCc6ICflhYjliY3mnKrkv53lrZjnmoTnt6jovK/lhaflrrnlt7LlhLLlrZjkuo7mnKzlnLDlhLLlrZjjgILmmK/lkKbmgaLlvqnlhYjliY3mnKrkv53lrZjnmoTnt6jovK/lhaflrrnvvJ8nLFxuXHRcdH0pLFxuXHRcdCdSZXN0b3JlIHVuc2F2ZWQgY2hhbmdlcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVzdG9yZScsXG5cdFx0XHQnemgtaGFucyc6ICfmgaLlpI0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5oGi5b6pJyxcblx0XHR9KSxcblx0XHQnTm90IHRvIHJlc3RvcmUnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05vdCB0byByZXN0b3JlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4jeaBouWkjScsXG5cdFx0XHQnemgtaGFudCc6ICfkuI3mgaLlvqknLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldENhY2hlLCBzZXRDYWNoZX0gZnJvbSAnLi9tb2R1bGVzL2NhY2hlJztcblxuKGFzeW5jIGZ1bmN0aW9uIHdpa2ljYWNoZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGF3YWl0IGdldENhY2hlKCk7XG5cdGF3YWl0IHNldENhY2hlKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7QUFDYixJQUFBQyxpQkFBa0I7O0FDRG5CLElBQUFDLHFCQUE2QkMsUUFBQSxpQkFBQTs7QUNEN0IsSUFBTUMsdUJBQXVCQSxDQUFDO0VBQUNDO0FBQUssTUFBd0M7QUFDM0UsU0FBT0EsTUFBTUMsS0FBSywyQkFBMkIsRUFBRUMsY0FBYyxhQUFhO0FBQzNFO0FBRUEsSUFBTUMsdUJBQXVCQSxDQUFDO0VBQUNIO0VBQU9JO0FBQU8sTUFBeUQ7QUFDckdKLFFBQU1DLEtBQUssMkJBQTJCLEVBQUVDLGNBQWMsZUFBZUUsT0FBTztBQUM3RTs7QUNOQSxJQUFBQyxvQkFBdUJQLFFBQUEsaUJBQUE7QUFFdkIsSUFBTVEsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixpQkFBQSxHQUFnQkQsa0JBQUFFLFVBQVM7TUFDeEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxxQkFBQSxHQUFvQkgsa0JBQUFFLFVBQVM7TUFDNUJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCw0QkFBQSxHQUEyQkgsa0JBQUFFLFVBQVM7TUFDbkNDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxtQkFBQSxHQUFrQkgsa0JBQUFFLFVBQVM7TUFDMUJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBQ0EsSUFBTUMsZUFBZUgsZ0JBQWdCO0FBRXJDLElBQU1JLGFBQWdEQyxT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SXpCLEdBQUdDLE9BQU9DLElBQVl2QixTQUFTLEdBQUc7QUFDckM7SUFDRDtBQUNBcUIsT0FBR0MsT0FBT3lDLElBQVkvRCxXQUFXLElBQUk7QUFFckMsVUFBTThCLFNBQVM7QUFDZixVQUFNaUIsU0FBUztFQUNoQixDQUFBO0FBQUEsV0FSZ0JpQixZQUFBO0FBQUEsV0FBQUMsV0FBQXBCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQWtCO0FBQUEsR0FBQSxFQVFiOyIsCiAgIm5hbWVzIjogWyJjb25maWdLZXkiLCAiY2FjaGVLZXlQcmVmaXgiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiZ2V0V3BUZXh0Ym94MUNvbnRlbnQiLCAiJGJvZHkiLCAiZmluZCIsICJ0ZXh0U2VsZWN0aW9uIiwgInNldFdwVGV4dGJveDFDb250ZW50IiwgImNvbnRlbnQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0Q2FjaGVLZXkiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjYWNoZUtleSIsICJjb25jYXQiLCAic2VjdGlvbiIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInZhbHVlIiwgImdldENhY2hlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAic2F2ZU9iamVjdCIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJnZXRCb2R5IiwgIndwU3VtbWFyeSIsICJjb25maXJtIiwgIk9PIiwgInVpIiwgImFjdGlvbnMiLCAibGFiZWwiLCAiYWN0aW9uIiwgImZsYWdzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJzZXRDYWNoZSIsICJfcmVmMiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QyIiwgImRlbGF5IiwgIm5ld1NhdmVPYmplY3QiLCAiZGF0ZSIsICJEYXRlIiwgInNldE9iamVjdCIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImNsb3NlIiwgImR1cmF0aW9uIiwgImdyYXZpdHkiLCAicG9zaXRpb24iLCAiZXJyb3IiLCAiY29uc29sZSIsICJzZXQiLCAid2lraWNhY2hlIiwgIl93aWtpY2FjaGUiXQp9Cg==
