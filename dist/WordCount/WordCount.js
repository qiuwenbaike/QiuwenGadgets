/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Wordcount.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/WordCount}
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

// dist/WordCount/WordCount.js
//! src/WordCount/modules/util/countLength.ts
var countLength = (text) => {
  return text.length;
};
//! src/WordCount/modules/util/countByte.ts
var countByte = (text) => {
  return countLength(text.replace(/[\u0000-\u007F]/g, ".").replace(/[\u0080-\u07FF\uD800-\uDFFF]/g, "..").replace(/[\u0800-\uD7FF\uE000-\uFFFF]/g, "..."));
};
//! src/WordCount/modules/util/countCJK.ts
var countCJK = (text) => {
  return countLength(text.replace(/\./g, "").replace(/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FCC\uF900-\uFA6D\uFA70-\uFAD9]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/g, ".").replace(/[^.]/g, ""));
};
//! src/WordCount/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "character(s)": (0, import_ext_gadget.localize)({
      en: " character(s)",
      "zh-hans": "字符",
      "zh-hant": "字元"
    }),
    "(": (0, import_ext_gadget.localize)({
      en: " (",
      zh: "（"
    }),
    ")": (0, import_ext_gadget.localize)({
      en: ") ",
      zh: "）"
    }),
    CJK: (0, import_ext_gadget.localize)({
      en: " CJK",
      "zh-hans": "个CJK字符",
      "zh-hant": "个CJK字元"
    }),
    "byte(s) in UTF-8 encoding": (0, import_ext_gadget.localize)({
      en: "byte(s) in UTF-8 encoding",
      "zh-hans": "字节（UTF-8编码）",
      "zh-hant": "位元組（UTF-8編碼）"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/WordCount/modules/getCount.ts
var getCountByTextLength = (text) => {
  return "".concat(countLength(text)).concat(getMessage("character(s)"));
};
var getCJKCountByTextLength = (text) => {
  return "".concat(getMessage("(")).concat(countCJK(text)).concat(getMessage("CJK")).concat(getMessage(")"));
};
var getUTF8CountByTextLength = (text) => {
  return "".concat(countByte(text)).concat(getMessage("byte(s) in UTF-8 encoding"));
};
//! src/WordCount/components/WordCount.module.less
var tip = "WordCount-module__tip_HBDn5a__4100";
//! src/WordCount/components/WordCount.ts
var $wordCount = (text) => {
  return $("<div>").addClass([tip, "noprint"]).attr("id", "gadget-word_count-tip").append(getCountByTextLength(text), getCJKCountByTextLength(text), $("<br>"), getUTF8CountByTextLength(text));
};
//! src/WordCount/modules/wordCount.ts
var wordCount = ($body) => {
  var _window$getSelection;
  $body.find(".".concat(tip)).remove();
  const text = (_window$getSelection = window.getSelection()) === null || _window$getSelection === void 0 ? void 0 : _window$getSelection.toString();
  if (!text) {
    return;
  }
  const $element = $wordCount(text);
  $element.appendTo($body);
  setTimeout(() => {
    $element.fadeOut("slow", () => {
      $element.remove();
    });
  }, 5 * 1e3);
};
//! src/WordCount/modules/addListener.ts
var addListener = ($body) => {
  if ("ontouchstart" in document) {
    $body.on("touchstart touchend", {
      passive: true
    }, () => {
      wordCount($body);
    });
  } else {
    $body.on("mouseup keyup", () => {
      wordCount($body);
    });
  }
};
//! src/WordCount/WordCount.ts
var import_ext_gadget2 = require("ext.gadget.Util");
void (0, import_ext_gadget2.getBody)().then(addListener);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dvcmRDb3VudC9tb2R1bGVzL3V0aWwvY291bnRMZW5ndGgudHMiLCAic3JjL1dvcmRDb3VudC9tb2R1bGVzL3V0aWwvY291bnRCeXRlLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy91dGlsL2NvdW50Q0pLLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy9nZXRDb3VudC50cyIsICJzcmMvV29yZENvdW50L2NvbXBvbmVudHMvV29yZENvdW50Lm1vZHVsZS5sZXNzIiwgInNyYy9Xb3JkQ291bnQvY29tcG9uZW50cy9Xb3JkQ291bnQudHMiLCAic3JjL1dvcmRDb3VudC9tb2R1bGVzL3dvcmRDb3VudC50cyIsICJzcmMvV29yZENvdW50L21vZHVsZXMvYWRkTGlzdGVuZXIudHMiLCAic3JjL1dvcmRDb3VudC9Xb3JkQ291bnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IGNvdW50TGVuZ3RoID0gKHRleHQ6IHN0cmluZyk6IG51bWJlciA9PiB7XG5cdHJldHVybiB0ZXh0Lmxlbmd0aDtcbn07XG5cbmV4cG9ydCB7Y291bnRMZW5ndGh9O1xuIiwgImltcG9ydCB7Y291bnRMZW5ndGh9IGZyb20gJy4vY291bnRMZW5ndGgnO1xuXG5jb25zdCBjb3VudEJ5dGUgPSAodGV4dDogc3RyaW5nKTogbnVtYmVyID0+IHtcblx0cmV0dXJuIGNvdW50TGVuZ3RoKFxuXHRcdHRleHRcblx0XHRcdC5yZXBsYWNlKC9bXFx1MDAwMC1cXHUwMDdGXS9nLCAnLicpXG5cdFx0XHQucmVwbGFjZSgvW1xcdTAwODAtXFx1MDdGRlxcdUQ4MDAtXFx1REZGRl0vZywgJy4uJylcblx0XHRcdC5yZXBsYWNlKC9bXFx1MDgwMC1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXS9nLCAnLi4uJylcblx0KTtcbn07XG5cbmV4cG9ydCB7Y291bnRCeXRlfTtcbiIsICJpbXBvcnQge2NvdW50TGVuZ3RofSBmcm9tICcuL2NvdW50TGVuZ3RoJztcblxuY29uc3QgY291bnRDSksgPSAodGV4dDogc3RyaW5nKTogbnVtYmVyID0+IHtcblx0cmV0dXJuIGNvdW50TGVuZ3RoKFxuXHRcdHRleHRcblx0XHRcdC5yZXBsYWNlKC9cXC4vZywgJycpXG5cdFx0XHQucmVwbGFjZShcblx0XHRcdFx0L1tcXHUyRTgwLVxcdTJFOTlcXHUyRTlCLVxcdTJFRjNcXHUyRjAwLVxcdTJGRDVcXHUzMDA1XFx1MzAwN1xcdTMwMjEtXFx1MzAyOVxcdTMwMzgtXFx1MzAzQlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZDQ1xcdUY5MDAtXFx1RkE2RFxcdUZBNzAtXFx1RkFEOV18W1xcdUQ4NDAtXFx1RDg2OF1bXFx1REMwMC1cXHVERkZGXXxcXHVEODY5W1xcdURDMDAtXFx1REVENlxcdURGMDAtXFx1REZGRl18W1xcdUQ4NkEtXFx1RDg2Q11bXFx1REMwMC1cXHVERkZGXXxcXHVEODZEW1xcdURDMDAtXFx1REYzNFxcdURGNDAtXFx1REZGRl18XFx1RDg2RVtcXHVEQzAwLVxcdURDMURdfFxcdUQ4N0VbXFx1REMwMC1cXHVERTFEXS9nLFxuXHRcdFx0XHQnLidcblx0XHRcdClcblx0XHRcdC5yZXBsYWNlKC9bXi5dL2csICcnKVxuXHQpO1xufTtcblxuZXhwb3J0IHtjb3VudENKS307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdjaGFyYWN0ZXIocyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyBjaGFyYWN0ZXIocyknLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2X56ymJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wtl+WFgycsXG5cdFx0fSksXG5cdFx0JygnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHQnKSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKSAnLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdENKSzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgQ0pLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4qkNKS+Wtl+espicsXG5cdFx0XHQnemgtaGFudCc6ICfkuKpDSkvlrZflhYMnLFxuXHRcdH0pLFxuXHRcdCdieXRlKHMpIGluIFVURi04IGVuY29kaW5nJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdieXRlKHMpIGluIFVURi04IGVuY29kaW5nJyxcblx0XHRcdCd6aC1oYW5zJzogJ+Wtl+iKgu+8iFVURi0457yW56CB77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ+S9jeWFg+e1hO+8iFVURi0457eo56K877yJJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Y291bnRCeXRlfSBmcm9tICcuL3V0aWwvY291bnRCeXRlJztcbmltcG9ydCB7Y291bnRDSkt9IGZyb20gJy4vdXRpbC9jb3VudENKSyc7XG5pbXBvcnQge2NvdW50TGVuZ3RofSBmcm9tICcuL3V0aWwvY291bnRMZW5ndGgnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBnZXRDb3VudEJ5VGV4dExlbmd0aCA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gYCR7Y291bnRMZW5ndGgodGV4dCl9JHtnZXRNZXNzYWdlKCdjaGFyYWN0ZXIocyknKX1gO1xufTtcblxuY29uc3QgZ2V0Q0pLQ291bnRCeVRleHRMZW5ndGggPSAodGV4dDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIGAke2dldE1lc3NhZ2UoJygnKX0ke2NvdW50Q0pLKHRleHQpfSR7Z2V0TWVzc2FnZSgnQ0pLJyl9JHtnZXRNZXNzYWdlKCcpJyl9YDtcbn07XG5cbmNvbnN0IGdldFVURjhDb3VudEJ5VGV4dExlbmd0aCA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gYCR7Y291bnRCeXRlKHRleHQpfSR7Z2V0TWVzc2FnZSgnYnl0ZShzKSBpbiBVVEYtOCBlbmNvZGluZycpfWA7XG59O1xuXG5leHBvcnQge2dldENvdW50QnlUZXh0TGVuZ3RoLCBnZXRDSktDb3VudEJ5VGV4dExlbmd0aCwgZ2V0VVRGOENvdW50QnlUZXh0TGVuZ3RofTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL1dvcmRDb3VudC9jb21wb25lbnRzL1dvcmRDb3VudC5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IHRpcCA9IFwiV29yZENvdW50LW1vZHVsZV9fdGlwX0hCRG41YV9fNDEwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwidGlwXCI6IHRpcFxufTtcbiAgICAgICIsICJpbXBvcnQge2dldENKS0NvdW50QnlUZXh0TGVuZ3RoLCBnZXRDb3VudEJ5VGV4dExlbmd0aCwgZ2V0VVRGOENvdW50QnlUZXh0TGVuZ3RofSBmcm9tICcuLi9tb2R1bGVzL2dldENvdW50JztcbmltcG9ydCB7dGlwfSBmcm9tICcuL1dvcmRDb3VudC5tb2R1bGUubGVzcyc7XG5cbmNvbnN0ICR3b3JkQ291bnQgPSAodGV4dDogc3RyaW5nKSA9PiB7XG5cdHJldHVybiAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKFt0aXAsICdub3ByaW50J10pXG5cdFx0LmF0dHIoJ2lkJywgJ2dhZGdldC13b3JkX2NvdW50LXRpcCcpXG5cdFx0LmFwcGVuZChnZXRDb3VudEJ5VGV4dExlbmd0aCh0ZXh0KSwgZ2V0Q0pLQ291bnRCeVRleHRMZW5ndGgodGV4dCksICQoJzxicj4nKSwgZ2V0VVRGOENvdW50QnlUZXh0TGVuZ3RoKHRleHQpKTtcbn07XG5cbmV4cG9ydCB7JHdvcmRDb3VudH07XG4iLCAiaW1wb3J0IHskd29yZENvdW50fSBmcm9tICcuLi9jb21wb25lbnRzL1dvcmRDb3VudCc7XG5pbXBvcnQge3RpcH0gZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JkQ291bnQubW9kdWxlLmxlc3MnO1xuXG5jb25zdCB3b3JkQ291bnQgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdCRib2R5LmZpbmQoYC4ke3RpcH1gKS5yZW1vdmUoKTtcblxuXHRjb25zdCB0ZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk/LnRvU3RyaW5nKCk7XG5cdGlmICghdGV4dCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRlbGVtZW50ID0gJHdvcmRDb3VudCh0ZXh0KTtcblxuXHQkZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cblx0c2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG5cdFx0JGVsZW1lbnQuZmFkZU91dCgnc2xvdycsICgpOiB2b2lkID0+IHtcblx0XHRcdCRlbGVtZW50LnJlbW92ZSgpO1xuXHRcdH0pO1xuXHR9LCA1ICogMTAwMCk7XG59O1xuXG5leHBvcnQge3dvcmRDb3VudH07XG4iLCAiaW1wb3J0IHt3b3JkQ291bnR9IGZyb20gJy4vd29yZENvdW50JztcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudCkge1xuXHRcdCRib2R5Lm9uKCd0b3VjaHN0YXJ0IHRvdWNoZW5kJywge3Bhc3NpdmU6IHRydWV9LCAoKTogdm9pZCA9PiB7XG5cdFx0XHR3b3JkQ291bnQoJGJvZHkpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdCRib2R5Lm9uKCdtb3VzZXVwIGtleXVwJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0d29yZENvdW50KCRib2R5KTtcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHthZGRMaXN0ZW5lcn07XG4iLCAiaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2FkZExpc3RlbmVyJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihhZGRMaXN0ZW5lcik7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxjQUFlQyxVQUF5QjtBQUM3QyxTQUFPQSxLQUFLQztBQUNiOztBQ0FBLElBQU1DLFlBQWFGLFVBQXlCO0FBQzNDLFNBQU9ELFlBQ05DLEtBQ0VHLFFBQVEsb0JBQW9CLEdBQUcsRUFDL0JBLFFBQVEsaUNBQWlDLElBQUksRUFDN0NBLFFBQVEsaUNBQWlDLEtBQUssQ0FDakQ7QUFDRDs7QUNQQSxJQUFNQyxXQUFZSixVQUF5QjtBQUMxQyxTQUFPRCxZQUNOQyxLQUNFRyxRQUFRLE9BQU8sRUFBRSxFQUNqQkEsUUFDQSx3VEFDQSxHQUNELEVBQ0NBLFFBQVEsU0FBUyxFQUFFLENBQ3RCO0FBQ0Q7O0FDWkEsSUFBQUUsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04saUJBQUEsR0FBZ0JGLGtCQUFBRyxVQUFTO01BQ3hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsTUFBQSxHQUFLSixrQkFBQUcsVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0QsTUFBQSxHQUFLTCxrQkFBQUcsVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0RDLE1BQUEsR0FBS04sa0JBQUFHLFVBQVM7TUFDYkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELDhCQUFBLEdBQTZCSixrQkFBQUcsVUFBUztNQUNyQ0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFDQSxJQUFNRyxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUM1QkEsSUFBTUMsdUJBQXdCZixVQUF5QjtBQUN0RCxTQUFBLEdBQUFnQixPQUFVakIsWUFBWUMsSUFBSSxDQUFDLEVBQUFnQixPQUFHSCxXQUFXLGNBQWMsQ0FBQztBQUN6RDtBQUVBLElBQU1JLDBCQUEyQmpCLFVBQXlCO0FBQ3pELFNBQUEsR0FBQWdCLE9BQVVILFdBQVcsR0FBRyxDQUFDLEVBQUFHLE9BQUdaLFNBQVNKLElBQUksQ0FBQyxFQUFBZ0IsT0FBR0gsV0FBVyxLQUFLLENBQUMsRUFBQUcsT0FBR0gsV0FBVyxHQUFHLENBQUM7QUFDakY7QUFFQSxJQUFNSywyQkFBNEJsQixVQUF5QjtBQUMxRCxTQUFBLEdBQUFnQixPQUFVZCxVQUFVRixJQUFJLENBQUMsRUFBQWdCLE9BQUdILFdBQVcsMkJBQTJCLENBQUM7QUFDcEU7O0FDZE8sSUFBTU0sTUFBTTs7QUNFbkIsSUFBTUMsYUFBY3BCLFVBQWlCO0FBQ3BDLFNBQU9xQixFQUFFLE9BQU8sRUFDZEMsU0FBUyxDQUFDSCxLQUFLLFNBQVMsQ0FBQyxFQUN6QkksS0FBSyxNQUFNLHVCQUF1QixFQUNsQ0MsT0FBT1QscUJBQXFCZixJQUFJLEdBQUdpQix3QkFBd0JqQixJQUFJLEdBQUdxQixFQUFFLE1BQU0sR0FBR0gseUJBQXlCbEIsSUFBSSxDQUFDO0FBQzlHOztBQ0xBLElBQU15QixZQUFhQyxXQUF5QztBQUFBLE1BQUFDO0FBQzNERCxRQUFNRSxLQUFBLElBQUFaLE9BQVNHLEdBQUcsQ0FBRSxFQUFFVSxPQUFPO0FBRTdCLFFBQU03QixRQUFBMkIsdUJBQTJCRyxPQUFPQyxhQUFhLE9BQUEsUUFBQUoseUJBQUEsU0FBQSxTQUFwQkEscUJBQXVCSyxTQUFTO0FBQ2pFLE1BQUksQ0FBQ2hDLE1BQU07QUFDVjtFQUNEO0FBRUEsUUFBTWlDLFdBQVdiLFdBQVdwQixJQUFJO0FBRWhDaUMsV0FBU0MsU0FBU1IsS0FBSztBQUV2QlMsYUFBVyxNQUFZO0FBQ3RCRixhQUFTRyxRQUFRLFFBQVEsTUFBWTtBQUNwQ0gsZUFBU0osT0FBTztJQUNqQixDQUFDO0VBQ0YsR0FBRyxJQUFJLEdBQUk7QUFDWjs7QUNsQkEsSUFBTVEsY0FBZVgsV0FBeUM7QUFDN0QsTUFBSSxrQkFBa0JZLFVBQVU7QUFDL0JaLFVBQU1hLEdBQUcsdUJBQXVCO01BQUNDLFNBQVM7SUFBSSxHQUFHLE1BQVk7QUFDNURmLGdCQUFVQyxLQUFLO0lBQ2hCLENBQUM7RUFDRixPQUFPO0FBQ05BLFVBQU1hLEdBQUcsaUJBQWlCLE1BQVk7QUFDckNkLGdCQUFVQyxLQUFLO0lBQ2hCLENBQUM7RUFDRjtBQUNEOztBQ1hBLElBQUFlLHFCQUFzQm5DLFFBQUEsaUJBQUE7QUFFdEIsTUFBQSxHQUFLbUMsbUJBQUFDLFNBQVEsRUFBRUMsS0FBS04sV0FBVzsiLAogICJuYW1lcyI6IFsiY291bnRMZW5ndGgiLCAidGV4dCIsICJsZW5ndGgiLCAiY291bnRCeXRlIiwgInJlcGxhY2UiLCAiY291bnRDSksiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiemgiLCAiQ0pLIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZXRDb3VudEJ5VGV4dExlbmd0aCIsICJjb25jYXQiLCAiZ2V0Q0pLQ291bnRCeVRleHRMZW5ndGgiLCAiZ2V0VVRGOENvdW50QnlUZXh0TGVuZ3RoIiwgInRpcCIsICIkd29yZENvdW50IiwgIiQiLCAiYWRkQ2xhc3MiLCAiYXR0ciIsICJhcHBlbmQiLCAid29yZENvdW50IiwgIiRib2R5IiwgIl93aW5kb3ckZ2V0U2VsZWN0aW9uIiwgImZpbmQiLCAicmVtb3ZlIiwgIndpbmRvdyIsICJnZXRTZWxlY3Rpb24iLCAidG9TdHJpbmciLCAiJGVsZW1lbnQiLCAiYXBwZW5kVG8iLCAic2V0VGltZW91dCIsICJmYWRlT3V0IiwgImFkZExpc3RlbmVyIiwgImRvY3VtZW50IiwgIm9uIiwgInBhc3NpdmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEJvZHkiLCAidGhlbiJdCn0K
