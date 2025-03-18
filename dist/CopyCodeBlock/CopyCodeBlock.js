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
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
//! src/CopyCodeBlock/modules/CopyCodeBlock.module.less
var button = "CopyCodeBlock-module__button_74i1Da__492";
var codeBlock = "CopyCodeBlock-module__codeBlock_74i1Da__492";
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
        text() {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzIiwgInNyYy9Db3B5Q29kZUJsb2NrL21vZHVsZXMvYWRkQ29weUxpc3RlbmVyLnRzIiwgInNyYy9Db3B5Q29kZUJsb2NrL21vZHVsZXMvaTE4bi50cyIsICJzcmMvQ29weUNvZGVCbG9jay9tb2R1bGVzL2FkZEJ1dHRvbi50cyIsICJzcmMvQ29weUNvZGVCbG9jay9Db3B5Q29kZUJsb2NrLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgYnV0dG9uID0gXCJDb3B5Q29kZUJsb2NrLW1vZHVsZV9fYnV0dG9uXzc0aTFEYV9fNDkyXCI7XG5leHBvcnQgY29uc3QgY29kZUJsb2NrID0gXCJDb3B5Q29kZUJsb2NrLW1vZHVsZV9fY29kZUJsb2NrXzc0aTFEYV9fNDkyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJidXR0b25cIjogYnV0dG9uLFxuICBcImNvZGVCbG9ja1wiOiBjb2RlQmxvY2tcbn07XG4gICAgICAiLCAiaW1wb3J0IHtDbGlwYm9hcmR9IGZyb20gJ2V4dC5nYWRnZXQuQ2xpcGJvYXJkJztcbmltcG9ydCB7YnV0dG9ufSBmcm9tICcuL0NvcHlDb2RlQmxvY2subW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IGFkZENvcHlMaXN0ZW5lciA9ICgkcHJlczogSlF1ZXJ5PEhUTUxQcmVFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IHByZSBvZiAkcHJlcykge1xuXHRcdGNvbnN0IGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmQocHJlLnF1ZXJ5U2VsZWN0b3IoYC4ke2J1dHRvbn1gKSBhcyBIVE1MU3BhbkVsZW1lbnQsIHtcblx0XHRcdHRleHQoKTogc3RyaW5nIHtcblx0XHRcdFx0cmV0dXJuIHByZS50ZXh0Q29udGVudCA/PyAnJztcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0Y2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdDb3BpZWQnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J3N1Y2Nlc3MnXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHRcdGNsaXBib2FyZC5vbignZXJyb3InLCAoKTogdm9pZCA9PiB7XG5cdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0ZhaWxlZCcpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnZXJyb3InXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2FkZENvcHlMaXN0ZW5lcn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdENvcHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weSB0byBjbGlwYm9hcmQnLFxuXHRcdFx0amE6ICfjgq/jg6rjg4Pjg5fjg5zjg7zjg4njgavjgrPjg5Tjg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi26Iez5Ymq6LS05p2/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+aLt+iyneiHs+WJquiyvOewvycsXG5cdFx0fSksXG5cdFx0Q29waWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcGllZCcsXG5cdFx0XHRqYTogJ+OCs+ODlOODvOOBjOaIkOWKn+OBl+OBvuOBl+OBnycsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlpI3liLYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5ou36LKdJyxcblx0XHR9KSxcblx0XHRGYWlsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weSBmYWlsZWQnLFxuXHRcdFx0amE6ICfjgrPjg5Tjg7zjgavlpLHmlZfjgZfjgb7jgZfjgZ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi25aSx6LSlJyxcblx0XHRcdCd6aC1oYW50JzogJ+aLt+iyneWkseaVlycsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7YnV0dG9uLCBjb2RlQmxvY2t9IGZyb20gJy4vQ29weUNvZGVCbG9jay5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2FkZENvcHlMaXN0ZW5lcn0gZnJvbSAnLi9hZGRDb3B5TGlzdGVuZXInO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0aXBweX0gZnJvbSAnZXh0LmdhZGdldC5UaXBweSc7XG5cbmNvbnN0IGFkZEJ1dHRvbiA9ICgkcHJlczogSlF1ZXJ5PEhUTUxQcmVFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRjb25zdCBjb3B5QnV0dG9uOiBPTy51aS5CdXR0b25XaWRnZXQgPSBuZXcgT08udWkuQnV0dG9uV2lkZ2V0KHtcblx0XHRjbGFzc2VzOiBbYnV0dG9uIGFzIHN0cmluZ10sXG5cdFx0ZnJhbWVkOiBmYWxzZSxcblx0XHRpY29uOiAnY29weScsXG5cdH0pO1xuXHRjb25zdCAkY29weUJ1dHRvbjogSlF1ZXJ5ID0gY29weUJ1dHRvbi4kZWxlbWVudDtcblxuXHQkY29weUJ1dHRvbi5hdHRyKCdhcmlhLWxhYmVsJywgZ2V0TWVzc2FnZSgnQ29weScpKTtcblxuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHQkcHJlcy5hZGRDbGFzcyhjb2RlQmxvY2sgYXMgc3RyaW5nKS5hcHBlbmQoJGNvcHlCdXR0b24pO1xuXG5cdHRpcHB5KCRjb3B5QnV0dG9uLmdldCgwKSBhcyBIVE1MU3BhbkVsZW1lbnQsIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiAkY29weUJ1dHRvbi5hdHRyKCdhcmlhLWxhYmVsJykgYXMgc3RyaW5nLFxuXHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdH0pO1xuXG5cdGFkZENvcHlMaXN0ZW5lcigkcHJlcyk7XG59O1xuXG5leHBvcnQge2FkZEJ1dHRvbn07XG4iLCAiaW1wb3J0IHthZGRCdXR0b259IGZyb20gJy4vbW9kdWxlcy9hZGRCdXR0b24nO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIGNvcHlDb2RlQmxvY2soJGNvbnRlbnQpOiB2b2lkIHtcblx0Y29uc3QgJHByZXM6IEpRdWVyeTxIVE1MUHJlRWxlbWVudD4gPSAkY29udGVudC5maW5kKCdwcmUnKTtcblx0aWYgKCEkcHJlcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhZGRCdXR0b24oJHByZXMpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsU0FBUztBQUNmLElBQU1DLFlBQVk7O0FDRnpCLElBQUFDLHFCQUF3QkMsUUFBQSxzQkFBQTs7QUNBeEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLE9BQUEsR0FBTUYsa0JBQUFHLFVBQVM7TUFDZEMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFNBQUEsR0FBUU4sa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxTQUFBLEdBQVFQLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUcsZUFBZVAsZ0JBQWdCO0FBRXJDLElBQU1RLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEMUJBLElBQUFDLHFCQUF1QlosUUFBQSxxQkFBQTtBQUV2QixJQUFNYSxrQkFBbUJDLFdBQXdDO0FBQUEsTUFBQUMsWUFBQUMsMkJBQzlDRixLQUFBLEdBQUFHO0FBQUEsTUFBQTtBQUFsQixTQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUF5QjtBQUFBLFlBQWRDLE1BQUFKLE1BQUFLO0FBQ1YsWUFBTUMsWUFBWSxJQUFJeEIsbUJBQUF5QixVQUFVSCxJQUFJSSxjQUFBLElBQUFDLE9BQWtCN0IsTUFBTSxDQUFFLEdBQXNCO1FBQ25GOEIsT0FBZTtBQUFBLGNBQUFDO0FBQ2Qsa0JBQUFBLG1CQUFPUCxJQUFJUSxpQkFBQSxRQUFBRCxxQkFBQSxTQUFBQSxtQkFBZTtRQUMzQjtNQUNELENBQUM7QUFDREwsZ0JBQVVPLEdBQUcsV0FBVyxNQUFZO0FBQ25DLFNBQUEsR0FBQWxCLG1CQUFBbUIsVUFDQztVQUNDSixNQUFNakIsV0FBVyxRQUFRO1FBQzFCLEdBQ0EsU0FDRDtNQUNELENBQUM7QUFDRGEsZ0JBQVVPLEdBQUcsU0FBUyxNQUFZO0FBQ2pDLFNBQUEsR0FBQWxCLG1CQUFBbUIsVUFDQztVQUNDSixNQUFNakIsV0FBVyxRQUFRO1FBQzFCLEdBQ0EsT0FDRDtNQUNELENBQUM7SUFDRjtFQUFBLFNBQUFzQixLQUFBO0FBQUFqQixjQUFBa0IsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQWpCLGNBQUFtQixFQUFBO0VBQUE7QUFDRDs7QUUxQkEsSUFBQUMscUJBQW9CbkMsUUFBQSxrQkFBQTtBQUVwQixJQUFNb0MsWUFBYXRCLFdBQXdDO0FBSTFELFFBQU11QixhQUFpQyxJQUFJQyxHQUFHQyxHQUFHQyxhQUFhO0lBQzdEQyxTQUFTLENBQUM1QyxNQUFnQjtJQUMxQjZDLFFBQVE7SUFDUkMsTUFBTTtFQUNQLENBQUM7QUFDRCxRQUFNQyxjQUFzQlAsV0FBV1E7QUFFdkNELGNBQVlFLEtBQUssY0FBY3BDLFdBQVcsTUFBTSxDQUFDO0FBS2pESSxRQUFNaUMsU0FBU2pELFNBQW1CLEVBQUVrRCxPQUFPSixXQUFXO0FBRXRELEdBQUEsR0FBQVQsbUJBQUFjLE9BQU1MLFlBQVlNLElBQUksQ0FBQyxHQUFzQjtJQUM1Q0MsT0FBTztJQUNQQyxTQUFTUixZQUFZRSxLQUFLLFlBQVk7SUFDdENPLFdBQVc7RUFDWixDQUFDO0FBRUR4QyxrQkFBZ0JDLEtBQUs7QUFDdEI7O0FDNUJBd0MsR0FBR0MsS0FBSyxrQkFBa0IsRUFBRUMsSUFBSSxTQUFTQyxjQUFjQyxVQUFnQjtBQUN0RSxRQUFNNUMsUUFBZ0M0QyxTQUFTQyxLQUFLLEtBQUs7QUFDekQsTUFBSSxDQUFDN0MsTUFBTThDLFFBQVE7QUFDbEI7RUFDRDtBQUVBeEIsWUFBVXRCLEtBQUs7QUFDaEIsQ0FBQzsiLAogICJuYW1lcyI6IFsiYnV0dG9uIiwgImNvZGVCbG9jayIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ29weSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDb3BpZWQiLCAiRmFpbGVkIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYWRkQ29weUxpc3RlbmVyIiwgIiRwcmVzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJwcmUiLCAidmFsdWUiLCAiY2xpcGJvYXJkIiwgIkNsaXBib2FyZCIsICJxdWVyeVNlbGVjdG9yIiwgImNvbmNhdCIsICJ0ZXh0IiwgIl9wcmUkdGV4dENvbnRlbnQiLCAidGV4dENvbnRlbnQiLCAib24iLCAidG9hc3RpZnkiLCAiZXJyIiwgImUiLCAiZiIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYWRkQnV0dG9uIiwgImNvcHlCdXR0b24iLCAiT08iLCAidWkiLCAiQnV0dG9uV2lkZ2V0IiwgImNsYXNzZXMiLCAiZnJhbWVkIiwgImljb24iLCAiJGNvcHlCdXR0b24iLCAiJGVsZW1lbnQiLCAiYXR0ciIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAidGlwcHkiLCAiZ2V0IiwgImFycm93IiwgImNvbnRlbnQiLCAicGxhY2VtZW50IiwgIm13IiwgImhvb2siLCAiYWRkIiwgImNvcHlDb2RlQmxvY2siLCAiJGNvbnRlbnQiLCAiZmluZCIsICJsZW5ndGgiXQp9Cg==
