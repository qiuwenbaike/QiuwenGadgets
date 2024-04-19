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
//! src/Wikicache/Wikicache.ts
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
      en: "Restore unsaved changes",
      "zh-hans": "恢复先前未保存编辑内容",
      "zh-hant": "恢復先前未保存編輯內容"
    }),
    "Delete unsaved changes": (0, import_ext_gadget.localize)({
      en: "Delete unsaved changes from local storage",
      "zh-hans": "不恢复且删除本地储存的编辑内容",
      "zh-hant": "不恢復且刪除本地儲存的編輯內容"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Wikicache/Wikicache.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
(function() {
  var _wikicache = _asyncToGenerator(function* () {
    var _document$querySelect;
    const wpSummary = document.querySelector("input[name=wpSummary]");
    const wpTextbox1 = document.querySelector("textarea[name=wpTextbox1]");
    if (mw.config.get(configKey) || !wpSummary || !wpTextbox1) {
      return;
    }
    mw.config.set(configKey, true);
    const {
      wgPageName
    } = mw.config.get();
    let cacheKey = "".concat(cacheKeyPrefix).concat(wgPageName);
    const section = (_document$querySelect = document.querySelector("input[name=wpSection]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value;
    if (section) {
      cacheKey += "#".concat(section);
    }
    const saveObject = mw.storage.getObject(cacheKey);
    if (saveObject) {
      if (saveObject["input[name=wpSummary]"]) {
        wpSummary.value = saveObject["input[name=wpSummary]"];
      }
      if (saveObject["textarea[name=wpTextbox1]"]) {
        if (wpTextbox1.value === saveObject["textarea[name=wpTextbox1]"]) {
          mw.storage.remove(cacheKey);
        } else {
          const confirm = yield OO.ui.confirm(getMessage("Restore changes?"), {
            actions: [{
              label: getMessage("Restore unsaved changes"),
              action: "accept",
              flags: ["progressive"]
            }, {
              label: getMessage("Delete unsaved changes"),
              action: "cancel",
              flags: ["destructive"]
            }]
          });
          if (confirm) {
            wpTextbox1.value = saveObject["textarea[name=wpTextbox1]"];
          } else {
            mw.storage.remove(cacheKey);
          }
        }
      }
    }
    while (true) {
      yield (0, import_ext_gadget2.delay)(30 * 1e3);
      const newSaveObject = {
        date: /* @__PURE__ */ new Date(),
        "input[name=wpSummary]": wpSummary.value,
        "textarea[name=wpTextbox1]": wpTextbox1.value
      };
      try {
        mw.storage.setObject(cacheKey, newSaveObject, 60 * 60 * 24 * 30 * 1e3);
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
  function wikicache() {
    return _wikicache.apply(this, arguments);
  }
  return wikicache;
})()();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2ljYWNoZS9vcHRpb25zLmpzb24iLCAic3JjL1dpa2ljYWNoZS9XaWtpY2FjaGUudHMiLCAic3JjL1dpa2ljYWNoZS9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtV2lraWNhY2hlX19Jbml0aWFsaXplZFwiLFxuXHRcImNhY2hlS2V5UHJlZml4XCI6IFwid2lraWNhY2hlLWF1dG9zYXZlLVwiLFxuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHR5cGUge0F1dG9TYXZlT2JqZWN0fSBmcm9tICcuL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHtkZWxheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbihhc3luYyBmdW5jdGlvbiB3aWtpY2FjaGUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHdwU3VtbWFyeTogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKTtcblx0Y29uc3Qgd3BUZXh0Ym94MTogSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJyk7XG5cblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpIHx8ICF3cFN1bW1hcnkgfHwgIXdwVGV4dGJveDEpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGxldCBjYWNoZUtleTogc3RyaW5nID0gYCR7T1BUSU9OUy5jYWNoZUtleVByZWZpeH0ke3dnUGFnZU5hbWV9YDtcblx0Y29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BTZWN0aW9uXScpPy52YWx1ZTtcblx0aWYgKHNlY3Rpb24pIHtcblx0XHRjYWNoZUtleSArPSBgIyR7c2VjdGlvbn1gO1xuXHR9XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuXHRjb25zdCBzYXZlT2JqZWN0OiBQYXJ0aWFsPEF1dG9TYXZlT2JqZWN0PiA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KGNhY2hlS2V5KTtcblx0aWYgKHNhdmVPYmplY3QpIHtcblx0XHRpZiAoc2F2ZU9iamVjdFsnaW5wdXRbbmFtZT13cFN1bW1hcnldJ10pIHtcblx0XHRcdHdwU3VtbWFyeS52YWx1ZSA9IHNhdmVPYmplY3RbJ2lucHV0W25hbWU9d3BTdW1tYXJ5XSddO1xuXHRcdH1cblxuXHRcdGlmIChzYXZlT2JqZWN0Wyd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJ10pIHtcblx0XHRcdGlmICh3cFRleHRib3gxLnZhbHVlID09PSBzYXZlT2JqZWN0Wyd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJ10pIHtcblx0XHRcdFx0bXcuc3RvcmFnZS5yZW1vdmUoY2FjaGVLZXkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgY29uZmlybSA9IGF3YWl0IE9PLnVpLmNvbmZpcm0oZ2V0TWVzc2FnZSgnUmVzdG9yZSBjaGFuZ2VzPycpLCB7XG5cdFx0XHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHRcdFx0e2xhYmVsOiBnZXRNZXNzYWdlKCdSZXN0b3JlIHVuc2F2ZWQgY2hhbmdlcycpLCBhY3Rpb246ICdhY2NlcHQnLCBmbGFnczogWydwcm9ncmVzc2l2ZSddfSxcblx0XHRcdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnRGVsZXRlIHVuc2F2ZWQgY2hhbmdlcycpLCBhY3Rpb246ICdjYW5jZWwnLCBmbGFnczogWydkZXN0cnVjdGl2ZSddfSxcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKGNvbmZpcm0pIHtcblx0XHRcdFx0XHR3cFRleHRib3gxLnZhbHVlID0gc2F2ZU9iamVjdFsndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXSddO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG13LnN0b3JhZ2UucmVtb3ZlKGNhY2hlS2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0YXdhaXQgZGVsYXkoMzAgKiAxMDAwKTtcblx0XHRjb25zdCBuZXdTYXZlT2JqZWN0OiBBdXRvU2F2ZU9iamVjdCA9IHtcblx0XHRcdGRhdGU6IG5ldyBEYXRlKCksXG5cdFx0XHQnaW5wdXRbbmFtZT13cFN1bW1hcnldJzogd3BTdW1tYXJ5LnZhbHVlLFxuXHRcdFx0J3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nOiB3cFRleHRib3gxLnZhbHVlLFxuXHRcdH07XG5cdFx0dHJ5IHtcblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KGNhY2hlS2V5LCBuZXdTYXZlT2JqZWN0LCA2MCAqIDYwICogMjQgKiAzMCAqIDEwMDApO1xuXHRcdFx0dG9hc3RpZnkoe1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdDaGFuZ2Ugc2F2ZWQnKSxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAxMCAqIDEwMDAsXG5cdFx0XHRcdGdyYXZpdHk6ICd0b3AnLFxuXHRcdFx0XHRwb3NpdGlvbjogJ3JpZ2h0Jyxcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHR9XG5cdH1cbn0pKCk7XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdDaGFuZ2Ugc2F2ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQgY29udGVudCBzYXZlZCB0byBsb2NhbCBzdG9yYWdlIHN1Y2Nlc3NmdWxseScsXG5cdFx0XHQnemgtaGFucyc6ICfnvJbovpHlhoXlrrnlt7LmiJDlip/kv53lrZjoh7PmnKzlnLDlrZjlgqgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57eo6Lyv5YWn5a655bey5oiQ5Yqf5YSy5a2Y6Iez5pys5Zyw5YSy5a2YJyxcblx0XHR9KSxcblx0XHQnUmVzdG9yZSBjaGFuZ2VzPyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91ciB1bnNhdmVkIGNoYWdlcyBoYXZlIGJlZW4gc2F2ZWQgdG8geW91ciBsb2NhbCBzdG9yYWdlLiBSZXN0b3JlIGNoYW5nZXM/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFiOWJjeacquS/neWtmOeahOe8lui+keWGheWuueW3suWtmOWCqOS6juacrOWcsOWtmOWCqOOAguaYr+WQpuaBouWkjeWFiOWJjeacquS/neWtmOeahOe8lui+keWGheWuue+8nycsXG5cdFx0XHQnemgtaGFudCc6ICflhYjliY3mnKrkv53lrZjnmoTnt6jovK/lhaflrrnlt7LlhLLlrZjkuo7mnKzlnLDlhLLlrZjjgILmmK/lkKbmgaLlvqnlhYjliY3mnKrkv53lrZjnmoTnt6jovK/lhaflrrnvvJ8nLFxuXHRcdH0pLFxuXHRcdCdSZXN0b3JlIHVuc2F2ZWQgY2hhbmdlcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVzdG9yZSB1bnNhdmVkIGNoYW5nZXMnLFxuXHRcdFx0J3poLWhhbnMnOiAn5oGi5aSN5YWI5YmN5pyq5L+d5a2Y57yW6L6R5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+aBouW+qeWFiOWJjeacquS/neWtmOe3qOi8r+WFp+WuuScsXG5cdFx0fSksXG5cdFx0J0RlbGV0ZSB1bnNhdmVkIGNoYW5nZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RlbGV0ZSB1bnNhdmVkIGNoYW5nZXMgZnJvbSBsb2NhbCBzdG9yYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4jeaBouWkjeS4lOWIoOmZpOacrOWcsOWCqOWtmOeahOe8lui+keWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfkuI3mgaLlvqnkuJTliKrpmaTmnKzlnLDlhLLlrZjnmoTnt6jovK/lhaflrrknLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTtBQUNiLElBQUFDLGlCQUFrQjs7QUNBbkIsSUFBQUMscUJBQW9CQyxRQUFBLGlCQUFBOztBQ0ZwQixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixpQkFBQSxHQUFnQkQsa0JBQUFFLFVBQVM7TUFDeEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxxQkFBQSxHQUFvQkgsa0JBQUFFLFVBQVM7TUFDNUJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCw0QkFBQSxHQUEyQkgsa0JBQUFFLFVBQVM7TUFDbkNDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCwyQkFBQSxHQUEwQkgsa0JBQUFFLFVBQVM7TUFDbENDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBQ0EsSUFBTUMsZUFBZUgsZ0JBQWdCO0FBRXJDLElBQU1JLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEMUJBLElBQUFDLHFCQUF1QlIsUUFBQSxxQkFBQTtDQUFBLFdBQUE7QUFBQSxNQUFBUyxhQUFBQyxrQkFFdEIsYUFBMEM7QUFBQSxRQUFBQztBQUMxQyxVQUFNQyxZQUFxQ0MsU0FBU0MsY0FBYyx1QkFBdUI7QUFDekYsVUFBTUMsYUFBeUNGLFNBQVNDLGNBQWMsMkJBQTJCO0FBRWpHLFFBQUlFLEdBQUdDLE9BQU9DLElBQVlyQixTQUFTLEtBQUssQ0FBQ2UsYUFBYSxDQUFDRyxZQUFZO0FBQ2xFO0lBQ0Q7QUFDQUMsT0FBR0MsT0FBT0UsSUFBWXRCLFdBQVcsSUFBSTtBQUVyQyxVQUFNO01BQUN1QjtJQUFVLElBQUlKLEdBQUdDLE9BQU9DLElBQUk7QUFFbkMsUUFBSUcsV0FBQSxHQUFBQyxPQUE4QnhCLGNBQWMsRUFBQXdCLE9BQUdGLFVBQVU7QUFDN0QsVUFBTUcsV0FBQVosd0JBQVVFLFNBQVNDLGNBQWdDLHVCQUF1QixPQUFBLFFBQUFILDBCQUFBLFNBQUEsU0FBaEVBLHNCQUFtRWE7QUFDbkYsUUFBSUQsU0FBUztBQUNaRixrQkFBQSxJQUFBQyxPQUFnQkMsT0FBTztJQUN4QjtBQUdBLFVBQU1FLGFBQXNDVCxHQUFHVSxRQUFRQyxVQUFVTixRQUFRO0FBQ3pFLFFBQUlJLFlBQVk7QUFDZixVQUFJQSxXQUFXLHVCQUF1QixHQUFHO0FBQ3hDYixrQkFBVVksUUFBUUMsV0FBVyx1QkFBdUI7TUFDckQ7QUFFQSxVQUFJQSxXQUFXLDJCQUEyQixHQUFHO0FBQzVDLFlBQUlWLFdBQVdTLFVBQVVDLFdBQVcsMkJBQTJCLEdBQUc7QUFDakVULGFBQUdVLFFBQVFFLE9BQU9QLFFBQVE7UUFDM0IsT0FBTztBQUNOLGdCQUFNUSxVQUFBLE1BQWdCQyxHQUFHQyxHQUFHRixRQUFRdkIsV0FBVyxrQkFBa0IsR0FBRztZQUNuRTBCLFNBQVMsQ0FDUjtjQUFDQyxPQUFPM0IsV0FBVyx5QkFBeUI7Y0FBRzRCLFFBQVE7Y0FBVUMsT0FBTyxDQUFDLGFBQWE7WUFBQyxHQUN2RjtjQUFDRixPQUFPM0IsV0FBVyx3QkFBd0I7Y0FBRzRCLFFBQVE7Y0FBVUMsT0FBTyxDQUFDLGFBQWE7WUFBQyxDQUFBO1VBRXhGLENBQUM7QUFDRCxjQUFJTixTQUFTO0FBQ1pkLHVCQUFXUyxRQUFRQyxXQUFXLDJCQUEyQjtVQUMxRCxPQUFPO0FBQ05ULGVBQUdVLFFBQVFFLE9BQU9QLFFBQVE7VUFDM0I7UUFDRDtNQUNEO0lBQ0Q7QUFFQSxXQUFPLE1BQU07QUFDWixhQUFBLEdBQU10QixtQkFBQXFDLE9BQU0sS0FBSyxHQUFJO0FBQ3JCLFlBQU1DLGdCQUFnQztRQUNyQ0MsTUFBTSxvQkFBSUMsS0FBSztRQUNmLHlCQUF5QjNCLFVBQVVZO1FBQ25DLDZCQUE2QlQsV0FBV1M7TUFDekM7QUFDQSxVQUFJO0FBQ0hSLFdBQUdVLFFBQVFjLFVBQVVuQixVQUFVZ0IsZUFBZSxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUk7QUFDdEUsU0FBQSxHQUFBN0IsbUJBQUFpQyxVQUFTO1VBQ1JDLE1BQU1wQyxXQUFXLGNBQWM7VUFDL0JxQyxPQUFPO1VBQ1BDLFVBQVUsS0FBSztVQUNmQyxTQUFTO1VBQ1RDLFVBQVU7UUFDWCxDQUFDO01BQ0YsU0FBU0MsT0FBTztBQUNmQyxnQkFBUUQsTUFBTUEsS0FBSztNQUNwQjtJQUNEO0VBQ0QsQ0FBQTtBQUFBLFdBL0RnQkUsWUFBQTtBQUFBLFdBQUF4QyxXQUFBeUMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxTQUFBRjtBQUFBLEdBQUEsRUErRGI7IiwKICAibmFtZXMiOiBbImNvbmZpZ0tleSIsICJjYWNoZUtleVByZWZpeCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJfd2lraWNhY2hlIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJ3cFN1bW1hcnkiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJ3cFRleHRib3gxIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAic2V0IiwgIndnUGFnZU5hbWUiLCAiY2FjaGVLZXkiLCAiY29uY2F0IiwgInNlY3Rpb24iLCAidmFsdWUiLCAic2F2ZU9iamVjdCIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJyZW1vdmUiLCAiY29uZmlybSIsICJPTyIsICJ1aSIsICJhY3Rpb25zIiwgImxhYmVsIiwgImFjdGlvbiIsICJmbGFncyIsICJkZWxheSIsICJuZXdTYXZlT2JqZWN0IiwgImRhdGUiLCAiRGF0ZSIsICJzZXRPYmplY3QiLCAidG9hc3RpZnkiLCAidGV4dCIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJncmF2aXR5IiwgInBvc2l0aW9uIiwgImVycm9yIiwgImNvbnNvbGUiLCAid2lraWNhY2hlIiwgImFwcGx5IiwgImFyZ3VtZW50cyJdCn0K
