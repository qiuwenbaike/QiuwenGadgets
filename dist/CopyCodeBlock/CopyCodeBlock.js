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
    classes: ["".concat(button)],
    framed: false,
    icon: "copy"
  });
  const $copyButton = copyButton.$element;
  $copyButton.attr("aria-label", getMessage("Copy"));
  $pres.addClass("".concat(codeBlock)).append($copyButton);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzIiwgInNyYy9Db3B5Q29kZUJsb2NrL21vZHVsZXMvYWRkQ29weUxpc3RlbmVyLnRzIiwgInNyYy9Db3B5Q29kZUJsb2NrL21vZHVsZXMvaTE4bi50cyIsICJzcmMvQ29weUNvZGVCbG9jay9tb2R1bGVzL2FkZEJ1dHRvbi50cyIsICJzcmMvQ29weUNvZGVCbG9jay9Db3B5Q29kZUJsb2NrLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgYnV0dG9uID0gXCJDb3B5Q29kZUJsb2NrLW1vZHVsZV9fYnV0dG9uXzc0aTFEYVwiO1xuZXhwb3J0IGNvbnN0IGNvZGVCbG9jayA9IFwiQ29weUNvZGVCbG9jay1tb2R1bGVfX2NvZGVCbG9ja183NGkxRGFcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImJ1dHRvblwiOiBidXR0b24sXG4gIFwiY29kZUJsb2NrXCI6IGNvZGVCbG9ja1xufTtcbiAgICAgICIsICJpbXBvcnQge0NsaXBib2FyZH0gZnJvbSAnZXh0LmdhZGdldC5DbGlwYm9hcmQnO1xuaW1wb3J0IHtidXR0b259IGZyb20gJy4vQ29weUNvZGVCbG9jay5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgYWRkQ29weUxpc3RlbmVyID0gKCRwcmVzOiBKUXVlcnk8SFRNTFByZUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3QgcHJlIG9mICRwcmVzKSB7XG5cdFx0Y29uc3QgY2xpcGJvYXJkID0gbmV3IENsaXBib2FyZChwcmUucXVlcnlTZWxlY3RvcihgLiR7YnV0dG9ufWApIGFzIEhUTUxTcGFuRWxlbWVudCwge1xuXHRcdFx0dGV4dCgpOiBzdHJpbmcge1xuXHRcdFx0XHRyZXR1cm4gcHJlLnRleHRDb250ZW50ID8/ICcnO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRjbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCAoKTogdm9pZCA9PiB7XG5cdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0NvcGllZCcpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnc3VjY2Vzcydcblx0XHRcdCk7XG5cdFx0fSk7XG5cdFx0Y2xpcGJvYXJkLm9uKCdlcnJvcicsICgpOiB2b2lkID0+IHtcblx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRmFpbGVkJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdlcnJvcidcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkQ29weUxpc3RlbmVyfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q29weTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5IHRvIGNsaXBib2FyZCcsXG5cdFx0XHRqYTogJ+OCr+ODquODg+ODl+ODnOODvOODieOBq+OCs+ODlOODvCcsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLboh7PliarotLTmnb8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5ou36LKd6Iez5Ymq6LK857C/Jyxcblx0XHR9KSxcblx0XHRDb3BpZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29waWVkJyxcblx0XHRcdGphOiAn44Kz44OU44O844GM5oiQ5Yqf44GX44G+44GX44GfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWkjeWIticsXG5cdFx0XHQnemgtaGFudCc6ICflt7Lmi7fosp0nLFxuXHRcdH0pLFxuXHRcdEZhaWxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5IGZhaWxlZCcsXG5cdFx0XHRqYTogJ+OCs+ODlOODvOOBq+WkseaVl+OBl+OBvuOBl+OBnycsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLblpLHotKUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5ou36LKd5aSx5pWXJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtidXR0b24sIGNvZGVCbG9ja30gZnJvbSAnLi9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7YWRkQ29weUxpc3RlbmVyfSBmcm9tICcuL2FkZENvcHlMaXN0ZW5lcic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3QgYWRkQnV0dG9uID0gKCRwcmVzOiBKUXVlcnk8SFRNTFByZUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0IGNvcHlCdXR0b246IE9PLnVpLkJ1dHRvbldpZGdldCA9IG5ldyBPTy51aS5CdXR0b25XaWRnZXQoe1xuXHRcdGNsYXNzZXM6IFtgJHtidXR0b259YF0sXG5cdFx0ZnJhbWVkOiBmYWxzZSxcblx0XHRpY29uOiAnY29weScsXG5cdH0pO1xuXHRjb25zdCAkY29weUJ1dHRvbjogSlF1ZXJ5ID0gY29weUJ1dHRvbi4kZWxlbWVudDtcblxuXHQkY29weUJ1dHRvbi5hdHRyKCdhcmlhLWxhYmVsJywgZ2V0TWVzc2FnZSgnQ29weScpKTtcblxuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHQkcHJlcy5hZGRDbGFzcyhgJHtjb2RlQmxvY2t9YCkuYXBwZW5kKCRjb3B5QnV0dG9uKTtcblxuXHR0aXBweSgkY29weUJ1dHRvbi5nZXQoMCkgYXMgSFRNTFNwYW5FbGVtZW50LCB7XG5cdFx0YXJyb3c6IHRydWUsXG5cdFx0Y29udGVudDogJGNvcHlCdXR0b24uYXR0cignYXJpYS1sYWJlbCcpIGFzIHN0cmluZyxcblx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHR9KTtcblxuXHRhZGRDb3B5TGlzdGVuZXIoJHByZXMpO1xufTtcblxuZXhwb3J0IHthZGRCdXR0b259O1xuIiwgImltcG9ydCB7YWRkQnV0dG9ufSBmcm9tICcuL21vZHVsZXMvYWRkQnV0dG9uJztcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBjb3B5Q29kZUJsb2NrKCRjb250ZW50KTogdm9pZCB7XG5cdGNvbnN0ICRwcmVzOiBKUXVlcnk8SFRNTFByZUVsZW1lbnQ+ID0gJGNvbnRlbnQuZmluZCgncHJlJyk7XG5cdGlmICghJHByZXMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YWRkQnV0dG9uKCRwcmVzKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNPLElBQU1BLFNBQVM7QUFDZixJQUFNQyxZQUFZOztBQ0Z6QixJQUFBQyxxQkFBd0JDLFFBQUEsc0JBQUE7O0FDQXhCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxPQUFBLEdBQU1GLGtCQUFBRyxVQUFTO01BQ2RDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxTQUFBLEdBQVFOLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsU0FBQSxHQUFRUCxrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1HLGVBQWVQLGdCQUFnQjtBQUVyQyxJQUFNUSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRDFCQSxJQUFBQyxxQkFBdUJaLFFBQUEscUJBQUE7QUFFdkIsSUFBTWEsa0JBQW1CQyxXQUF3QztBQUFBLE1BQUFDLFlBQUFDLDJCQUM5Q0YsS0FBQSxHQUFBRztBQUFBLE1BQUE7QUFBbEIsU0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBeUI7QUFBQSxZQUFkQyxNQUFBSixNQUFBSztBQUNWLFlBQU1DLFlBQVksSUFBSXhCLG1CQUFBeUIsVUFBVUgsSUFBSUksY0FBQSxJQUFBQyxPQUFrQjdCLE1BQU0sQ0FBRSxHQUFzQjtRQUNuRjhCLE9BQWU7QUFBQSxjQUFBQztBQUNkLGtCQUFBQSxtQkFBT1AsSUFBSVEsaUJBQUEsUUFBQUQscUJBQUEsU0FBQUEsbUJBQWU7UUFDM0I7TUFDRCxDQUFDO0FBQ0RMLGdCQUFVTyxHQUFHLFdBQVcsTUFBWTtBQUNuQyxTQUFBLEdBQUFsQixtQkFBQW1CLFVBQ0M7VUFDQ0osTUFBTWpCLFdBQVcsUUFBUTtRQUMxQixHQUNBLFNBQ0Q7TUFDRCxDQUFDO0FBQ0RhLGdCQUFVTyxHQUFHLFNBQVMsTUFBWTtBQUNqQyxTQUFBLEdBQUFsQixtQkFBQW1CLFVBQ0M7VUFDQ0osTUFBTWpCLFdBQVcsUUFBUTtRQUMxQixHQUNBLE9BQ0Q7TUFDRCxDQUFDO0lBQ0Y7RUFBQSxTQUFBc0IsS0FBQTtBQUFBakIsY0FBQWtCLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFqQixjQUFBbUIsRUFBQTtFQUFBO0FBQ0Q7O0FFMUJBLElBQUFDLHFCQUFvQm5DLFFBQUEsa0JBQUE7QUFFcEIsSUFBTW9DLFlBQWF0QixXQUF3QztBQUkxRCxRQUFNdUIsYUFBaUMsSUFBSUMsR0FBR0MsR0FBR0MsYUFBYTtJQUM3REMsU0FBUyxDQUFBLEdBQUFmLE9BQUk3QixNQUFNLENBQUE7SUFDbkI2QyxRQUFRO0lBQ1JDLE1BQU07RUFDUCxDQUFDO0FBQ0QsUUFBTUMsY0FBc0JQLFdBQVdRO0FBRXZDRCxjQUFZRSxLQUFLLGNBQWNwQyxXQUFXLE1BQU0sQ0FBQztBQUtqREksUUFBTWlDLFNBQUEsR0FBQXJCLE9BQVk1QixTQUFTLENBQUUsRUFBRWtELE9BQU9KLFdBQVc7QUFFakQsR0FBQSxHQUFBVCxtQkFBQWMsT0FBTUwsWUFBWU0sSUFBSSxDQUFDLEdBQXNCO0lBQzVDQyxPQUFPO0lBQ1BDLFNBQVNSLFlBQVlFLEtBQUssWUFBWTtJQUN0Q08sV0FBVztFQUNaLENBQUM7QUFFRHhDLGtCQUFnQkMsS0FBSztBQUN0Qjs7QUM1QkF3QyxHQUFHQyxLQUFLLGtCQUFrQixFQUFFQyxJQUFJLFNBQVNDLGNBQWNDLFVBQWdCO0FBQ3RFLFFBQU01QyxRQUFnQzRDLFNBQVNDLEtBQUssS0FBSztBQUN6RCxNQUFJLENBQUM3QyxNQUFNOEMsUUFBUTtBQUNsQjtFQUNEO0FBRUF4QixZQUFVdEIsS0FBSztBQUNoQixDQUFDOyIsCiAgIm5hbWVzIjogWyJidXR0b24iLCAiY29kZUJsb2NrIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJDb3B5IiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNvcGllZCIsICJGYWlsZWQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhZGRDb3B5TGlzdGVuZXIiLCAiJHByZXMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInByZSIsICJ2YWx1ZSIsICJjbGlwYm9hcmQiLCAiQ2xpcGJvYXJkIiwgInF1ZXJ5U2VsZWN0b3IiLCAiY29uY2F0IiwgInRleHQiLCAiX3ByZSR0ZXh0Q29udGVudCIsICJ0ZXh0Q29udGVudCIsICJvbiIsICJ0b2FzdGlmeSIsICJlcnIiLCAiZSIsICJmIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhZGRCdXR0b24iLCAiY29weUJ1dHRvbiIsICJPTyIsICJ1aSIsICJCdXR0b25XaWRnZXQiLCAiY2xhc3NlcyIsICJmcmFtZWQiLCAiaWNvbiIsICIkY29weUJ1dHRvbiIsICIkZWxlbWVudCIsICJhdHRyIiwgImFkZENsYXNzIiwgImFwcGVuZCIsICJ0aXBweSIsICJnZXQiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAibXciLCAiaG9vayIsICJhZGQiLCAiY29weUNvZGVCbG9jayIsICIkY29udGVudCIsICJmaW5kIiwgImxlbmd0aCJdCn0K
