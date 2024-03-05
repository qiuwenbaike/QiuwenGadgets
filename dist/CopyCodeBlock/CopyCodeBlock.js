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
//! src/CopyCodeBlock/modules/CopyCodeBlock.module.less
var button = "CopyCodeBlock-module__button_74i1Da";
var codeBlock = "CopyCodeBlock-module__codeBlock_74i1Da";
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
      const clipboard = new import_ext_gadget2.Clipboard(pre.querySelector(".".concat(button)), {
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
    classes: [button],
    framed: false,
    icon: "copy"
  });
  const $copyButton = copyButton.$element;
  $copyButton.attr("aria-label", getMessage("Copy"));
  $pres.addClass(codeBlock).append($copyButton);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzIiwgInNyYy9Db3B5Q29kZUJsb2NrL21vZHVsZXMvYWRkQ29weUxpc3RlbmVyLnRzIiwgInNyYy9Db3B5Q29kZUJsb2NrL21vZHVsZXMvaTE4bi50cyIsICJzcmMvQ29weUNvZGVCbG9jay9tb2R1bGVzL2FkZEJ1dHRvbi50cyIsICJzcmMvQ29weUNvZGVCbG9jay9Db3B5Q29kZUJsb2NrLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgYnV0dG9uID0gXCJDb3B5Q29kZUJsb2NrLW1vZHVsZV9fYnV0dG9uXzc0aTFEYVwiO1xuZXhwb3J0IGNvbnN0IGNvZGVCbG9jayA9IFwiQ29weUNvZGVCbG9jay1tb2R1bGVfX2NvZGVCbG9ja183NGkxRGFcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImJ1dHRvblwiOiBidXR0b24sXG4gIFwiY29kZUJsb2NrXCI6IGNvZGVCbG9ja1xufTtcbiAgICAgICIsICJpbXBvcnQge0NsaXBib2FyZH0gZnJvbSAnZXh0LmdhZGdldC5DbGlwYm9hcmQnO1xuaW1wb3J0IHtidXR0b259IGZyb20gJy4vQ29weUNvZGVCbG9jay5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgYWRkQ29weUxpc3RlbmVyID0gKCRwcmVzOiBKUXVlcnk8SFRNTFByZUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3QgcHJlIG9mICRwcmVzKSB7XG5cdFx0Y29uc3QgY2xpcGJvYXJkID0gbmV3IENsaXBib2FyZChwcmUucXVlcnlTZWxlY3RvcihgLiR7YnV0dG9ufWApIGFzIEhUTUxTcGFuRWxlbWVudCwge1xuXHRcdFx0dGV4dDogKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdHJldHVybiBwcmUudGV4dENvbnRlbnQgPz8gJyc7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdGNsaXBib2FyZC5vbignc3VjY2VzcycsICgpOiB2b2lkID0+IHtcblx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnQ29waWVkJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdzdWNjZXNzJ1xuXHRcdFx0KTtcblx0XHR9KTtcblx0XHRjbGlwYm9hcmQub24oJ2Vycm9yJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdGYWlsZWQnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2Vycm9yJ1xuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHthZGRDb3B5TGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDb3B5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgdG8gY2xpcGJvYXJkJyxcblx0XHRcdGphOiAn44Kv44Oq44OD44OX44Oc44O844OJ44Gr44Kz44OU44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItuiHs+WJqui0tOadvycsXG5cdFx0XHQnemgtaGFudCc6ICfmi7fosp3oh7PliarosrznsL8nLFxuXHRcdH0pLFxuXHRcdENvcGllZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3BpZWQnLFxuXHRcdFx0amE6ICfjgrPjg5Tjg7zjgYzmiJDlip/jgZfjgb7jgZfjgZ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5aSN5Yi2Jyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suaLt+iynScsXG5cdFx0fSksXG5cdFx0RmFpbGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgZmFpbGVkJyxcblx0XHRcdGphOiAn44Kz44OU44O844Gr5aSx5pWX44GX44G+44GX44GfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItuWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICfmi7fosp3lpLHmlZcnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2J1dHRvbiwgY29kZUJsb2NrfSBmcm9tICcuL0NvcHlDb2RlQmxvY2subW9kdWxlLmxlc3MnO1xuaW1wb3J0IHthZGRDb3B5TGlzdGVuZXJ9IGZyb20gJy4vYWRkQ29weUxpc3RlbmVyJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBhZGRCdXR0b24gPSAoJHByZXM6IEpRdWVyeTxIVE1MUHJlRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0Y29uc3QgY29weUJ1dHRvbjogT08udWkuQnV0dG9uV2lkZ2V0ID0gbmV3IE9PLnVpLkJ1dHRvbldpZGdldCh7XG5cdFx0Y2xhc3NlczogW2J1dHRvbiBhcyBzdHJpbmddLFxuXHRcdGZyYW1lZDogZmFsc2UsXG5cdFx0aWNvbjogJ2NvcHknLFxuXHR9KTtcblx0Y29uc3QgJGNvcHlCdXR0b246IEpRdWVyeSA9IGNvcHlCdXR0b24uJGVsZW1lbnQ7XG5cblx0JGNvcHlCdXR0b24uYXR0cignYXJpYS1sYWJlbCcsIGdldE1lc3NhZ2UoJ0NvcHknKSk7XG5cblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0JHByZXMuYWRkQ2xhc3MoY29kZUJsb2NrIGFzIHN0cmluZykuYXBwZW5kKCRjb3B5QnV0dG9uKTtcblxuXHR0aXBweSgkY29weUJ1dHRvbi5nZXQoMCkgYXMgSFRNTFNwYW5FbGVtZW50LCB7XG5cdFx0YXJyb3c6IHRydWUsXG5cdFx0Y29udGVudDogJGNvcHlCdXR0b24uYXR0cignYXJpYS1sYWJlbCcpIGFzIHN0cmluZyxcblx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHR9KTtcblxuXHRhZGRDb3B5TGlzdGVuZXIoJHByZXMpO1xufTtcblxuZXhwb3J0IHthZGRCdXR0b259O1xuIiwgImltcG9ydCB7YWRkQnV0dG9ufSBmcm9tICcuL21vZHVsZXMvYWRkQnV0dG9uJztcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBjb3B5Q29kZUJsb2NrKCRjb250ZW50KTogdm9pZCB7XG5cdGNvbnN0ICRwcmVzOiBKUXVlcnk8SFRNTFByZUVsZW1lbnQ+ID0gJGNvbnRlbnQuZmluZCgncHJlJyk7XG5cdGlmICghJHByZXMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YWRkQnV0dG9uKCRwcmVzKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxTQUFTO0FBQ2YsSUFBTUMsWUFBWTs7QUNGekIsSUFBQUMscUJBQXdCQyxRQUFBLHNCQUFBOztBQ0F4QixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsT0FBQSxHQUFNRixrQkFBQUcsVUFBUztNQUNkQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsU0FBQSxHQUFRTixrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFNBQUEsR0FBUVAsa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRyxlQUFlUCxnQkFBZ0I7QUFFckMsSUFBTVEsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUQxQkEsSUFBQUMscUJBQXVCWixRQUFBLHFCQUFBO0FBRXZCLElBQU1hLGtCQUFtQkMsV0FBd0M7QUFBQSxNQUFBQyxZQUFBQywyQkFDOUNGLEtBQUEsR0FBQUc7QUFBQSxNQUFBO0FBQWxCLFNBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQXlCO0FBQUEsWUFBZEMsTUFBQUosTUFBQUs7QUFDVixZQUFNQyxZQUFZLElBQUl4QixtQkFBQXlCLFVBQVVILElBQUlJLGNBQUEsSUFBQUMsT0FBa0I3QixNQUFNLENBQUUsR0FBc0I7UUFDbkY4QixNQUFNQSxNQUFjO0FBQUEsY0FBQUM7QUFDbkIsa0JBQUFBLG1CQUFPUCxJQUFJUSxpQkFBQSxRQUFBRCxxQkFBQSxTQUFBQSxtQkFBZTtRQUMzQjtNQUNELENBQUM7QUFDREwsZ0JBQVVPLEdBQUcsV0FBVyxNQUFZO0FBQ25DLFNBQUEsR0FBQWxCLG1CQUFBbUIsVUFDQztVQUNDSixNQUFNakIsV0FBVyxRQUFRO1FBQzFCLEdBQ0EsU0FDRDtNQUNELENBQUM7QUFDRGEsZ0JBQVVPLEdBQUcsU0FBUyxNQUFZO0FBQ2pDLFNBQUEsR0FBQWxCLG1CQUFBbUIsVUFDQztVQUNDSixNQUFNakIsV0FBVyxRQUFRO1FBQzFCLEdBQ0EsT0FDRDtNQUNELENBQUM7SUFDRjtFQUFBLFNBQUFzQixLQUFBO0FBQUFqQixjQUFBa0IsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQWpCLGNBQUFtQixFQUFBO0VBQUE7QUFDRDs7QUUxQkEsSUFBQUMscUJBQW9CbkMsUUFBQSxrQkFBQTtBQUVwQixJQUFNb0MsWUFBYXRCLFdBQXdDO0FBSTFELFFBQU11QixhQUFpQyxJQUFJQyxHQUFHQyxHQUFHQyxhQUFhO0lBQzdEQyxTQUFTLENBQUM1QyxNQUFnQjtJQUMxQjZDLFFBQVE7SUFDUkMsTUFBTTtFQUNQLENBQUM7QUFDRCxRQUFNQyxjQUFzQlAsV0FBV1E7QUFFdkNELGNBQVlFLEtBQUssY0FBY3BDLFdBQVcsTUFBTSxDQUFDO0FBS2pESSxRQUFNaUMsU0FBU2pELFNBQW1CLEVBQUVrRCxPQUFPSixXQUFXO0FBRXRELEdBQUEsR0FBQVQsbUJBQUFjLE9BQU1MLFlBQVlNLElBQUksQ0FBQyxHQUFzQjtJQUM1Q0MsT0FBTztJQUNQQyxTQUFTUixZQUFZRSxLQUFLLFlBQVk7SUFDdENPLFdBQVc7RUFDWixDQUFDO0FBRUR4QyxrQkFBZ0JDLEtBQUs7QUFDdEI7O0FDNUJBd0MsR0FBR0MsS0FBSyxrQkFBa0IsRUFBRUMsSUFBSSxTQUFTQyxjQUFjQyxVQUFnQjtBQUN0RSxRQUFNNUMsUUFBZ0M0QyxTQUFTQyxLQUFLLEtBQUs7QUFDekQsTUFBSSxDQUFDN0MsTUFBTThDLFFBQVE7QUFDbEI7RUFDRDtBQUVBeEIsWUFBVXRCLEtBQUs7QUFDaEIsQ0FBQzsiLAogICJuYW1lcyI6IFsiYnV0dG9uIiwgImNvZGVCbG9jayIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ29weSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDb3BpZWQiLCAiRmFpbGVkIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYWRkQ29weUxpc3RlbmVyIiwgIiRwcmVzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJwcmUiLCAidmFsdWUiLCAiY2xpcGJvYXJkIiwgIkNsaXBib2FyZCIsICJxdWVyeVNlbGVjdG9yIiwgImNvbmNhdCIsICJ0ZXh0IiwgIl9wcmUkdGV4dENvbnRlbnQiLCAidGV4dENvbnRlbnQiLCAib24iLCAidG9hc3RpZnkiLCAiZXJyIiwgImUiLCAiZiIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYWRkQnV0dG9uIiwgImNvcHlCdXR0b24iLCAiT08iLCAidWkiLCAiQnV0dG9uV2lkZ2V0IiwgImNsYXNzZXMiLCAiZnJhbWVkIiwgImljb24iLCAiJGNvcHlCdXR0b24iLCAiJGVsZW1lbnQiLCAiYXR0ciIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAidGlwcHkiLCAiZ2V0IiwgImFycm93IiwgImNvbnRlbnQiLCAicGxhY2VtZW50IiwgIm13IiwgImhvb2siLCAiYWRkIiwgImNvcHlDb2RlQmxvY2siLCAiJGNvbnRlbnQiLCAiZmluZCIsICJsZW5ndGgiXQp9Cg==
