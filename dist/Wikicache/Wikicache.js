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
    while (true) {
      yield (0, import_ext_gadget2.delay)(60 * 1e3);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2ljYWNoZS9vcHRpb25zLmpzb24iLCAic3JjL1dpa2ljYWNoZS9XaWtpY2FjaGUudHMiLCAic3JjL1dpa2ljYWNoZS9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtV2lraWNhY2hlX19Jbml0aWFsaXplZFwiLFxuXHRcImNhY2hlS2V5UHJlZml4XCI6IFwid2lraWNhY2hlLWF1dG9zYXZlLVwiLFxuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHR5cGUge0F1dG9TYXZlT2JqZWN0fSBmcm9tICcuL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHtkZWxheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbihhc3luYyBmdW5jdGlvbiB3aWtpY2FjaGUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHdwU3VtbWFyeTogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKTtcblx0Y29uc3Qgd3BUZXh0Ym94MTogSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGwgPVxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFRleHRBcmVhRWxlbWVudD4oJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKTtcblxuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkgfHwgIXdwU3VtbWFyeSB8fCAhd3BUZXh0Ym94MSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0bGV0IGNhY2hlS2V5OiBzdHJpbmcgPSBgJHtPUFRJT05TLmNhY2hlS2V5UHJlZml4fSR7d2dQYWdlTmFtZX1gO1xuXHRjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT13cFNlY3Rpb25dJyk/LnZhbHVlO1xuXHRpZiAoc2VjdGlvbikge1xuXHRcdGNhY2hlS2V5ICs9IGAjJHtzZWN0aW9ufWA7XG5cdH1cblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdGNvbnN0IHNhdmVPYmplY3Q6IFBhcnRpYWw8QXV0b1NhdmVPYmplY3Q+ID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoY2FjaGVLZXkpO1xuXHRpZiAoc2F2ZU9iamVjdFsnaW5wdXRbbmFtZT13cFN1bW1hcnldJ10pIHtcblx0XHR3cFN1bW1hcnkudmFsdWUgPSBzYXZlT2JqZWN0WydpbnB1dFtuYW1lPXdwU3VtbWFyeV0nXTtcblx0fVxuXG5cdGlmIChzYXZlT2JqZWN0Wyd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJ10pIHtcblx0XHRpZiAod3BUZXh0Ym94MS52YWx1ZSA9PT0gc2F2ZU9iamVjdFsndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXSddKSB7XG5cdFx0XHRtdy5zdG9yYWdlLnJlbW92ZShjYWNoZUtleSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGNvbmZpcm0gPSBhd2FpdCBPTy51aS5jb25maXJtKGdldE1lc3NhZ2UoJ1Jlc3RvcmUgY2hhbmdlcz8nKSwge1xuXHRcdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdFx0e2xhYmVsOiBnZXRNZXNzYWdlKCdSZXN0b3JlIHVuc2F2ZWQgY2hhbmdlcycpLCBhY3Rpb246ICdhY2NlcHQnLCBmbGFnczogWydwcm9ncmVzc2l2ZSddfSxcblx0XHRcdFx0XHR7bGFiZWw6IGdldE1lc3NhZ2UoJ0RlbGV0ZSB1bnNhdmVkIGNoYW5nZXMnKSwgYWN0aW9uOiAnY2FuY2VsJywgZmxhZ3M6IFsnZGVzdHJ1Y3RpdmUnXX0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9KTtcblx0XHRcdGlmIChjb25maXJtKSB7XG5cdFx0XHRcdHdwVGV4dGJveDEudmFsdWUgPSBzYXZlT2JqZWN0Wyd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJ107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtdy5zdG9yYWdlLnJlbW92ZShjYWNoZUtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRhd2FpdCBkZWxheSg2MCAqIDEwMDApO1xuXHRcdGNvbnN0IG5ld1NhdmVPYmplY3Q6IEF1dG9TYXZlT2JqZWN0ID0ge1xuXHRcdFx0ZGF0ZTogbmV3IERhdGUoKSxcblx0XHRcdCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nOiB3cFN1bW1hcnkudmFsdWUsXG5cdFx0XHQndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXSc6IHdwVGV4dGJveDEudmFsdWUsXG5cdFx0fTtcblx0XHR0cnkge1xuXHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoY2FjaGVLZXksIG5ld1NhdmVPYmplY3QsIDYwICogNjAgKiAyNCAqIDMwICogMTAwMCk7XG5cdFx0XHR0b2FzdGlmeSh7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0NoYW5nZSBzYXZlZCcpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IDEwICogMTAwMCxcblx0XHRcdFx0Z3Jhdml0eTogJ3RvcCcsXG5cdFx0XHRcdHBvc2l0aW9uOiAncmlnaHQnLFxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdH1cblx0fVxufSkoKTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J0NoYW5nZSBzYXZlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCBjb250ZW50IHNhdmVkIHRvIGxvY2FsIHN0b3JhZ2Ugc3VjY2Vzc2Z1bGx5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8lui+keWGheWuueW3suaIkOWKn+S/neWtmOiHs+acrOWcsOWtmOWCqCcsXG5cdFx0XHQnemgtaGFudCc6ICfnt6jovK/lhaflrrnlt7LmiJDlip/lhLLlrZjoh7PmnKzlnLDlhLLlrZgnLFxuXHRcdH0pLFxuXHRcdCdSZXN0b3JlIGNoYW5nZXM/JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3VyIHVuc2F2ZWQgY2hhZ2VzIGhhdmUgYmVlbiBzYXZlZCB0byB5b3VyIGxvY2FsIHN0b3JhZ2UuIFJlc3RvcmUgY2hhbmdlcz8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWI5YmN5pyq5L+d5a2Y55qE57yW6L6R5YaF5a655bey5a2Y5YKo5LqO5pys5Zyw5a2Y5YKo44CC5piv5ZCm5oGi5aSN5YWI5YmN5pyq5L+d5a2Y55qE57yW6L6R5YaF5a6577yfJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFiOWJjeacquS/neWtmOeahOe3qOi8r+WFp+WuueW3suWEsuWtmOS6juacrOWcsOWEsuWtmOOAguaYr+WQpuaBouW+qeWFiOWJjeacquS/neWtmOeahOe3qOi8r+WFp+Wuue+8nycsXG5cdFx0fSksXG5cdFx0J1Jlc3RvcmUgdW5zYXZlZCBjaGFuZ2VzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXN0b3JlIHVuc2F2ZWQgY2hhbmdlcycsXG5cdFx0XHQnemgtaGFucyc6ICfmgaLlpI3lhYjliY3mnKrkv53lrZjnvJbovpHlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5oGi5b6p5YWI5YmN5pyq5L+d5a2Y57eo6Lyv5YWn5a65Jyxcblx0XHR9KSxcblx0XHQnRGVsZXRlIHVuc2F2ZWQgY2hhbmdlcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGVsZXRlIHVuc2F2ZWQgY2hhbmdlcyBmcm9tIGxvY2FsIHN0b3JhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiN5oGi5aSN5LiU5Yig6Zmk5pys5Zyw5YKo5a2Y55qE57yW6L6R5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+S4jeaBouW+qeS4lOWIqumZpOacrOWcsOWEsuWtmOeahOe3qOi8r+WFp+WuuScsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhO0FBQ2IsSUFBQUMsaUJBQWtCOztBQ0FuQixJQUFBQyxxQkFBb0JDLFFBQUEsaUJBQUE7O0FDRnBCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLGlCQUFBLEdBQWdCRCxrQkFBQUUsVUFBUztNQUN4QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHFCQUFBLEdBQW9CSCxrQkFBQUUsVUFBUztNQUM1QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELDRCQUFBLEdBQTJCSCxrQkFBQUUsVUFBUztNQUNuQ0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELDJCQUFBLEdBQTBCSCxrQkFBQUUsVUFBUztNQUNsQ0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFDQSxJQUFNQyxlQUFlSCxnQkFBZ0I7QUFFckMsSUFBTUksYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUQxQkEsSUFBQUMscUJBQXVCUixRQUFBLHFCQUFBO0NBQUEsV0FBQTtBQUFBLE1BQUFTLGFBQUFDLGtCQUV0QixhQUEwQztBQUFBLFFBQUFDO0FBQzFDLFVBQU1DLFlBQXFDQyxTQUFTQyxjQUFnQyx1QkFBdUI7QUFDM0csVUFBTUMsYUFDTEYsU0FBU0MsY0FBbUMsMkJBQTJCO0FBRXhFLFFBQUlFLEdBQUdDLE9BQU9DLElBQVlyQixTQUFTLEtBQUssQ0FBQ2UsYUFBYSxDQUFDRyxZQUFZO0FBQ2xFO0lBQ0Q7QUFDQUMsT0FBR0MsT0FBT0UsSUFBWXRCLFdBQVcsSUFBSTtBQUVyQyxVQUFNO01BQUN1QjtJQUFVLElBQUlKLEdBQUdDLE9BQU9DLElBQUk7QUFFbkMsUUFBSUcsV0FBQSxHQUFBQyxPQUE4QnhCLGNBQWMsRUFBQXdCLE9BQUdGLFVBQVU7QUFDN0QsVUFBTUcsV0FBQVosd0JBQVVFLFNBQVNDLGNBQWdDLHVCQUF1QixPQUFBLFFBQUFILDBCQUFBLFNBQUEsU0FBaEVBLHNCQUFtRWE7QUFDbkYsUUFBSUQsU0FBUztBQUNaRixrQkFBQSxJQUFBQyxPQUFnQkMsT0FBTztJQUN4QjtBQUdBLFVBQU1FLGFBQXNDVCxHQUFHVSxRQUFRQyxVQUFVTixRQUFRO0FBQ3pFLFFBQUlJLFdBQVcsdUJBQXVCLEdBQUc7QUFDeENiLGdCQUFVWSxRQUFRQyxXQUFXLHVCQUF1QjtJQUNyRDtBQUVBLFFBQUlBLFdBQVcsMkJBQTJCLEdBQUc7QUFDNUMsVUFBSVYsV0FBV1MsVUFBVUMsV0FBVywyQkFBMkIsR0FBRztBQUNqRVQsV0FBR1UsUUFBUUUsT0FBT1AsUUFBUTtNQUMzQixPQUFPO0FBQ04sY0FBTVEsVUFBQSxNQUFnQkMsR0FBR0MsR0FBR0YsUUFBUXZCLFdBQVcsa0JBQWtCLEdBQUc7VUFDbkUwQixTQUFTLENBQ1I7WUFBQ0MsT0FBTzNCLFdBQVcseUJBQXlCO1lBQUc0QixRQUFRO1lBQVVDLE9BQU8sQ0FBQyxhQUFhO1VBQUMsR0FDdkY7WUFBQ0YsT0FBTzNCLFdBQVcsd0JBQXdCO1lBQUc0QixRQUFRO1lBQVVDLE9BQU8sQ0FBQyxhQUFhO1VBQUMsQ0FBQTtRQUV4RixDQUFDO0FBQ0QsWUFBSU4sU0FBUztBQUNaZCxxQkFBV1MsUUFBUUMsV0FBVywyQkFBMkI7UUFDMUQsT0FBTztBQUNOVCxhQUFHVSxRQUFRRSxPQUFPUCxRQUFRO1FBQzNCO01BQ0Q7SUFDRDtBQUVBLFdBQU8sTUFBTTtBQUNaLGFBQUEsR0FBTXRCLG1CQUFBcUMsT0FBTSxLQUFLLEdBQUk7QUFDckIsWUFBTUMsZ0JBQWdDO1FBQ3JDQyxNQUFNLG9CQUFJQyxLQUFLO1FBQ2YseUJBQXlCM0IsVUFBVVk7UUFDbkMsNkJBQTZCVCxXQUFXUztNQUN6QztBQUNBLFVBQUk7QUFDSFIsV0FBR1UsUUFBUWMsVUFBVW5CLFVBQVVnQixlQUFlLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBSTtBQUN0RSxTQUFBLEdBQUE3QixtQkFBQWlDLFVBQVM7VUFDUkMsTUFBTXBDLFdBQVcsY0FBYztVQUMvQnFDLE9BQU87VUFDUEMsVUFBVSxLQUFLO1VBQ2ZDLFNBQVM7VUFDVEMsVUFBVTtRQUNYLENBQUM7TUFDRixTQUFTQyxPQUFPO0FBQ2ZDLGdCQUFRRCxNQUFNQSxLQUFLO01BQ3BCO0lBQ0Q7RUFDRCxDQUFBO0FBQUEsV0E5RGdCRSxZQUFBO0FBQUEsV0FBQXhDLFdBQUF5QyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUFGO0FBQUEsR0FBQSxFQThEYjsiLAogICJuYW1lcyI6IFsiY29uZmlnS2V5IiwgImNhY2hlS2V5UHJlZml4IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl93aWtpY2FjaGUiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgIndwU3VtbWFyeSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIndwVGV4dGJveDEiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJzZXQiLCAid2dQYWdlTmFtZSIsICJjYWNoZUtleSIsICJjb25jYXQiLCAic2VjdGlvbiIsICJ2YWx1ZSIsICJzYXZlT2JqZWN0IiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgInJlbW92ZSIsICJjb25maXJtIiwgIk9PIiwgInVpIiwgImFjdGlvbnMiLCAibGFiZWwiLCAiYWN0aW9uIiwgImZsYWdzIiwgImRlbGF5IiwgIm5ld1NhdmVPYmplY3QiLCAiZGF0ZSIsICJEYXRlIiwgInNldE9iamVjdCIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImNsb3NlIiwgImR1cmF0aW9uIiwgImdyYXZpdHkiLCAicG9zaXRpb24iLCAiZXJyb3IiLCAiY29uc29sZSIsICJ3aWtpY2FjaGUiLCAiYXBwbHkiLCAiYXJndW1lbnRzIl0KfQo=
