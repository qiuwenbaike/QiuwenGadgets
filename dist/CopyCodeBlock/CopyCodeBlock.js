/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/User:Nardog/CopyCodeBlock.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/CopyCodeBlock}
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

// dist/CopyCodeBlock/CopyCodeBlock.js
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
//! src/CopyCodeBlock/modules/constant.ts
var CLASS_NAME = "gadget-copy_code_block";
var CLASS_NAME_COPY_BUTTON = "".concat(CLASS_NAME, "__copy-button");
//! src/CopyCodeBlock/modules/addCopyListener.ts
var import_ext_gadget2 = require("ext.gadget.Clipboard");
//! src/CopyCodeBlock/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Copy: (0, import_ext_gadget.localize)({
      en: "Copy to clipboard",
      ja: "クリップボードにコピー",
      "zh-hans": "复制至剪贴板",
      "zh-hant": "拷貝至剪貼簿"
    }),
    Copied: (0, import_ext_gadget.localize)({
      en: "Copied",
      ja: "コピーが成功しました",
      "zh-hans": "已复制",
      "zh-hant": "已拷貝"
    }),
    Failed: (0, import_ext_gadget.localize)({
      en: "Copy failed",
      ja: "コピーに失敗しました",
      "zh-hans": "复制失败",
      "zh-hant": "拷貝失敗"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/CopyCodeBlock/modules/addCopyListener.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var addCopyListener = ($pres) => {
  var _iterator = _createForOfIteratorHelper($pres), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const pre = _step.value;
      const clipboard = new import_ext_gadget2.Clipboard(pre.querySelector(".".concat(CLASS_NAME_COPY_BUTTON)), {
        text: () => {
          var _pre$textContent;
          return (_pre$textContent = pre.textContent) !== null && _pre$textContent !== void 0 ? _pre$textContent : "";
        }
      });
      clipboard.on("success", () => {
        (0, import_ext_gadget3.toastify)({
          text: getMessage("Copied")
        }, "success");
      });
      clipboard.on("error", () => {
        (0, import_ext_gadget3.toastify)({
          text: getMessage("Failed")
        }, "error");
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
//! src/CopyCodeBlock/modules/addButton.ts
var import_ext_gadget4 = require("ext.gadget.Tippy");
var addButton = ($pres) => {
  const copyButton = new OO.ui.ButtonWidget({
    classes: [CLASS_NAME_COPY_BUTTON],
    framed: false,
    icon: "copy"
  });
  const $copyButton = copyButton.$element;
  $copyButton.attr("aria-label", getMessage("Copy"));
  $pres.addClass(CLASS_NAME).append($copyButton);
  (0, import_ext_gadget4.tippy)($copyButton.get(0), {
    arrow: true,
    content: $copyButton.attr("aria-label"),
    placement: "bottom"
  });
  addCopyListener($pres);
};
//! src/CopyCodeBlock/CopyCodeBlock.ts
mw.hook("wikipage.content").add(function copyCodeBlock($content) {
  const $pres = $content.find("pre");
  if (!$pres.length) {
    return;
  }
  addButton($pres);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQ29weUNvZGVCbG9jay9tb2R1bGVzL2FkZENvcHlMaXN0ZW5lci50cyIsICJzcmMvQ29weUNvZGVCbG9jay9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9hZGRCdXR0b24udHMiLCAic3JjL0NvcHlDb2RlQmxvY2svQ29weUNvZGVCbG9jay50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1jb3B5X2NvZGVfYmxvY2snO1xuY29uc3QgQ0xBU1NfTkFNRV9DT1BZX0JVVFRPTjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX2NvcHktYnV0dG9uYDtcblxuZXhwb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0NPUFlfQlVUVE9OfTtcbiIsICJpbXBvcnQge0NMQVNTX05BTUVfQ09QWV9CVVRUT059IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtDbGlwYm9hcmR9IGZyb20gJ2V4dC5nYWRnZXQuQ2xpcGJvYXJkJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBhZGRDb3B5TGlzdGVuZXIgPSAoJHByZXM6IEpRdWVyeTxIVE1MUHJlRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCBwcmUgb2YgJHByZXMpIHtcblx0XHRjb25zdCBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkKHByZS5xdWVyeVNlbGVjdG9yKGAuJHtDTEFTU19OQU1FX0NPUFlfQlVUVE9OfWApIGFzIEhUTUxTcGFuRWxlbWVudCwge1xuXHRcdFx0dGV4dDogKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdHJldHVybiBwcmUudGV4dENvbnRlbnQgPz8gJyc7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdGNsaXBib2FyZC5vbignc3VjY2VzcycsICgpOiB2b2lkID0+IHtcblx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnQ29waWVkJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdzdWNjZXNzJ1xuXHRcdFx0KTtcblx0XHR9KTtcblx0XHRjbGlwYm9hcmQub24oJ2Vycm9yJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdGYWlsZWQnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2Vycm9yJ1xuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHthZGRDb3B5TGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDb3B5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgdG8gY2xpcGJvYXJkJyxcblx0XHRcdGphOiAn44Kv44Oq44OD44OX44Oc44O844OJ44Gr44Kz44OU44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItuiHs+WJqui0tOadvycsXG5cdFx0XHQnemgtaGFudCc6ICfmi7fosp3oh7PliarosrznsL8nLFxuXHRcdH0pLFxuXHRcdENvcGllZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3BpZWQnLFxuXHRcdFx0amE6ICfjgrPjg5Tjg7zjgYzmiJDlip/jgZfjgb7jgZfjgZ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5aSN5Yi2Jyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suaLt+iynScsXG5cdFx0fSksXG5cdFx0RmFpbGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgZmFpbGVkJyxcblx0XHRcdGphOiAn44Kz44OU44O844Gr5aSx5pWX44GX44G+44GX44GfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItuWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICfmi7fosp3lpLHmlZcnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge0NMQVNTX05BTUUsIENMQVNTX05BTUVfQ09QWV9CVVRUT059IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthZGRDb3B5TGlzdGVuZXJ9IGZyb20gJy4vYWRkQ29weUxpc3RlbmVyJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBhZGRCdXR0b24gPSAoJHByZXM6IEpRdWVyeTxIVE1MUHJlRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0Y29uc3QgY29weUJ1dHRvbjogT08udWkuQnV0dG9uV2lkZ2V0ID0gbmV3IE9PLnVpLkJ1dHRvbldpZGdldCh7XG5cdFx0Y2xhc3NlczogW0NMQVNTX05BTUVfQ09QWV9CVVRUT05dLFxuXHRcdGZyYW1lZDogZmFsc2UsXG5cdFx0aWNvbjogJ2NvcHknLFxuXHR9KTtcblx0Y29uc3QgJGNvcHlCdXR0b246IEpRdWVyeSA9IGNvcHlCdXR0b24uJGVsZW1lbnQ7XG5cblx0JGNvcHlCdXR0b24uYXR0cignYXJpYS1sYWJlbCcsIGdldE1lc3NhZ2UoJ0NvcHknKSk7XG5cblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0JHByZXMuYWRkQ2xhc3MoQ0xBU1NfTkFNRSkuYXBwZW5kKCRjb3B5QnV0dG9uKTtcblxuXHR0aXBweSgkY29weUJ1dHRvbi5nZXQoMCkgYXMgSFRNTFNwYW5FbGVtZW50LCB7XG5cdFx0YXJyb3c6IHRydWUsXG5cdFx0Y29udGVudDogJGNvcHlCdXR0b24uYXR0cignYXJpYS1sYWJlbCcpIGFzIHN0cmluZyxcblx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHR9KTtcblxuXHRhZGRDb3B5TGlzdGVuZXIoJHByZXMpO1xufTtcblxuZXhwb3J0IHthZGRCdXR0b259O1xuIiwgImltcG9ydCB7YWRkQnV0dG9ufSBmcm9tICcuL21vZHVsZXMvYWRkQnV0dG9uJztcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBjb3B5Q29kZUJsb2NrKCRjb250ZW50KTogdm9pZCB7XG5cdGNvbnN0ICRwcmVzOiBKUXVlcnk8SFRNTFByZUVsZW1lbnQ+ID0gJGNvbnRlbnQuZmluZCgncHJlJyk7XG5cdGlmICghJHByZXMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YWRkQnV0dG9uKCRwcmVzKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxhQUFxQjtBQUMzQixJQUFNQyx5QkFBQSxHQUFBQyxPQUFvQ0YsWUFBVSxlQUFBOztBQ0FwRCxJQUFBRyxxQkFBd0JDLFFBQUEsc0JBQUE7O0FDRHhCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxPQUFBLEdBQU1GLGtCQUFBRyxVQUFTO01BQ2RDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxTQUFBLEdBQVFOLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsU0FBQSxHQUFRUCxrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1HLGVBQWVQLGdCQUFnQjtBQUVyQyxJQUFNUSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRDFCQSxJQUFBQyxxQkFBdUJaLFFBQUEscUJBQUE7QUFFdkIsSUFBTWEsa0JBQW1CQyxXQUF3QztBQUFBLE1BQUFDLFlBQUFDLDJCQUM5Q0YsS0FBQSxHQUFBRztBQUFBLE1BQUE7QUFBbEIsU0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBeUI7QUFBQSxZQUFkQyxNQUFBSixNQUFBSztBQUNWLFlBQU1DLFlBQVksSUFBSXhCLG1CQUFBeUIsVUFBVUgsSUFBSUksY0FBQSxJQUFBM0IsT0FBa0JELHNCQUFzQixDQUFFLEdBQXNCO1FBQ25HNkIsTUFBTUEsTUFBYztBQUFBLGNBQUFDO0FBQ25CLGtCQUFBQSxtQkFBT04sSUFBSU8saUJBQUEsUUFBQUQscUJBQUEsU0FBQUEsbUJBQWU7UUFDM0I7TUFDRCxDQUFDO0FBQ0RKLGdCQUFVTSxHQUFHLFdBQVcsTUFBWTtBQUNuQyxTQUFBLEdBQUFqQixtQkFBQWtCLFVBQ0M7VUFDQ0osTUFBTWhCLFdBQVcsUUFBUTtRQUMxQixHQUNBLFNBQ0Q7TUFDRCxDQUFDO0FBQ0RhLGdCQUFVTSxHQUFHLFNBQVMsTUFBWTtBQUNqQyxTQUFBLEdBQUFqQixtQkFBQWtCLFVBQ0M7VUFDQ0osTUFBTWhCLFdBQVcsUUFBUTtRQUMxQixHQUNBLE9BQ0Q7TUFDRCxDQUFDO0lBQ0Y7RUFBQSxTQUFBcUIsS0FBQTtBQUFBaEIsY0FBQWlCLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFoQixjQUFBa0IsRUFBQTtFQUFBO0FBQ0Q7O0FFMUJBLElBQUFDLHFCQUFvQmxDLFFBQUEsa0JBQUE7QUFFcEIsSUFBTW1DLFlBQWFyQixXQUF3QztBQUkxRCxRQUFNc0IsYUFBaUMsSUFBSUMsR0FBR0MsR0FBR0MsYUFBYTtJQUM3REMsU0FBUyxDQUFDM0Msc0JBQXNCO0lBQ2hDNEMsUUFBUTtJQUNSQyxNQUFNO0VBQ1AsQ0FBQztBQUNELFFBQU1DLGNBQXNCUCxXQUFXUTtBQUV2Q0QsY0FBWUUsS0FBSyxjQUFjbkMsV0FBVyxNQUFNLENBQUM7QUFLakRJLFFBQU1nQyxTQUFTbEQsVUFBVSxFQUFFbUQsT0FBT0osV0FBVztBQUU3QyxHQUFBLEdBQUFULG1CQUFBYyxPQUFNTCxZQUFZTSxJQUFJLENBQUMsR0FBc0I7SUFDNUNDLE9BQU87SUFDUEMsU0FBU1IsWUFBWUUsS0FBSyxZQUFZO0lBQ3RDTyxXQUFXO0VBQ1osQ0FBQztBQUVEdkMsa0JBQWdCQyxLQUFLO0FBQ3RCOztBQzVCQXVDLEdBQUdDLEtBQUssa0JBQWtCLEVBQUVDLElBQUksU0FBU0MsY0FBY0MsVUFBZ0I7QUFDdEUsUUFBTTNDLFFBQWdDMkMsU0FBU0MsS0FBSyxLQUFLO0FBQ3pELE1BQUksQ0FBQzVDLE1BQU02QyxRQUFRO0FBQ2xCO0VBQ0Q7QUFFQXhCLFlBQVVyQixLQUFLO0FBQ2hCLENBQUM7IiwKICAibmFtZXMiOiBbIkNMQVNTX05BTUUiLCAiQ0xBU1NfTkFNRV9DT1BZX0JVVFRPTiIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNvcHkiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ29waWVkIiwgIkZhaWxlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFkZENvcHlMaXN0ZW5lciIsICIkcHJlcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAicHJlIiwgInZhbHVlIiwgImNsaXBib2FyZCIsICJDbGlwYm9hcmQiLCAicXVlcnlTZWxlY3RvciIsICJ0ZXh0IiwgIl9wcmUkdGV4dENvbnRlbnQiLCAidGV4dENvbnRlbnQiLCAib24iLCAidG9hc3RpZnkiLCAiZXJyIiwgImUiLCAiZiIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYWRkQnV0dG9uIiwgImNvcHlCdXR0b24iLCAiT08iLCAidWkiLCAiQnV0dG9uV2lkZ2V0IiwgImNsYXNzZXMiLCAiZnJhbWVkIiwgImljb24iLCAiJGNvcHlCdXR0b24iLCAiJGVsZW1lbnQiLCAiYXR0ciIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAidGlwcHkiLCAiZ2V0IiwgImFycm93IiwgImNvbnRlbnQiLCAicGxhY2VtZW50IiwgIm13IiwgImhvb2siLCAiYWRkIiwgImNvcHlDb2RlQmxvY2siLCAiJGNvbnRlbnQiLCAiZmluZCIsICJsZW5ndGgiXQp9Cg==
