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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzIiwgInNyYy9Db3B5Q29kZUJsb2NrL21vZHVsZXMvYWRkQ29weUxpc3RlbmVyLnRzIiwgInNyYy9Db3B5Q29kZUJsb2NrL21vZHVsZXMvaTE4bi50cyIsICJzcmMvQ29weUNvZGVCbG9jay9tb2R1bGVzL2FkZEJ1dHRvbi50cyIsICJzcmMvQ29weUNvZGVCbG9jay9Db3B5Q29kZUJsb2NrLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgYnV0dG9uID0gXCJDb3B5Q29kZUJsb2NrLW1vZHVsZV9fYnV0dG9uXzc0aTFEYVwiO1xuZXhwb3J0IGNvbnN0IGNvZGVCbG9jayA9IFwiQ29weUNvZGVCbG9jay1tb2R1bGVfX2NvZGVCbG9ja183NGkxRGFcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImJ1dHRvblwiOiBidXR0b24sXG4gIFwiY29kZUJsb2NrXCI6IGNvZGVCbG9ja1xufTtcbiAgICAgICIsICJpbXBvcnQge0NsaXBib2FyZH0gZnJvbSAnZXh0LmdhZGdldC5DbGlwYm9hcmQnO1xuaW1wb3J0IHtidXR0b259IGZyb20gJy4vQ29weUNvZGVCbG9jay5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgYWRkQ29weUxpc3RlbmVyID0gKCRwcmVzOiBKUXVlcnk8SFRNTFByZUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3QgcHJlIG9mICRwcmVzKSB7XG5cdFx0Y29uc3QgY2xpcGJvYXJkID0gbmV3IENsaXBib2FyZChwcmUucXVlcnlTZWxlY3RvcihgLiR7YnV0dG9ufWApIGFzIEhUTUxTcGFuRWxlbWVudCwge1xuXHRcdFx0dGV4dCgpOiBzdHJpbmcge1xuXHRcdFx0XHRyZXR1cm4gcHJlLnRleHRDb250ZW50ID8/ICcnO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRjbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCAoKTogdm9pZCA9PiB7XG5cdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0NvcGllZCcpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnc3VjY2Vzcydcblx0XHRcdCk7XG5cdFx0fSk7XG5cdFx0Y2xpcGJvYXJkLm9uKCdlcnJvcicsICgpOiB2b2lkID0+IHtcblx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRmFpbGVkJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdlcnJvcidcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkQ29weUxpc3RlbmVyfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q29weTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5IHRvIGNsaXBib2FyZCcsXG5cdFx0XHRqYTogJ+OCr+ODquODg+ODl+ODnOODvOODieOBq+OCs+ODlOODvCcsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLboh7PliarotLTmnb8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5ou36LKd6Iez5Ymq6LK857C/Jyxcblx0XHR9KSxcblx0XHRDb3BpZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29waWVkJyxcblx0XHRcdGphOiAn44Kz44OU44O844GM5oiQ5Yqf44GX44G+44GX44GfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWkjeWIticsXG5cdFx0XHQnemgtaGFudCc6ICflt7Lmi7fosp0nLFxuXHRcdH0pLFxuXHRcdEZhaWxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5IGZhaWxlZCcsXG5cdFx0XHRqYTogJ+OCs+ODlOODvOOBq+WkseaVl+OBl+OBvuOBl+OBnycsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLblpLHotKUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5ou36LKd5aSx5pWXJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtidXR0b24sIGNvZGVCbG9ja30gZnJvbSAnLi9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7YWRkQ29weUxpc3RlbmVyfSBmcm9tICcuL2FkZENvcHlMaXN0ZW5lcic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3QgYWRkQnV0dG9uID0gKCRwcmVzOiBKUXVlcnk8SFRNTFByZUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0IGNvcHlCdXR0b246IE9PLnVpLkJ1dHRvbldpZGdldCA9IG5ldyBPTy51aS5CdXR0b25XaWRnZXQoe1xuXHRcdGNsYXNzZXM6IFtidXR0b25dLFxuXHRcdGZyYW1lZDogZmFsc2UsXG5cdFx0aWNvbjogJ2NvcHknLFxuXHR9KTtcblx0Y29uc3QgJGNvcHlCdXR0b246IEpRdWVyeSA9IGNvcHlCdXR0b24uJGVsZW1lbnQ7XG5cblx0JGNvcHlCdXR0b24uYXR0cignYXJpYS1sYWJlbCcsIGdldE1lc3NhZ2UoJ0NvcHknKSk7XG5cblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0JHByZXMuYWRkQ2xhc3MoY29kZUJsb2NrKS5hcHBlbmQoJGNvcHlCdXR0b24pO1xuXG5cdHRpcHB5KCRjb3B5QnV0dG9uLmdldCgwKSBhcyBIVE1MU3BhbkVsZW1lbnQsIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiAkY29weUJ1dHRvbi5hdHRyKCdhcmlhLWxhYmVsJykgYXMgc3RyaW5nLFxuXHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdH0pO1xuXG5cdGFkZENvcHlMaXN0ZW5lcigkcHJlcyk7XG59O1xuXG5leHBvcnQge2FkZEJ1dHRvbn07XG4iLCAiaW1wb3J0IHthZGRCdXR0b259IGZyb20gJy4vbW9kdWxlcy9hZGRCdXR0b24nO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIGNvcHlDb2RlQmxvY2soJGNvbnRlbnQpOiB2b2lkIHtcblx0Y29uc3QgJHByZXM6IEpRdWVyeTxIVE1MUHJlRWxlbWVudD4gPSAkY29udGVudC5maW5kKCdwcmUnKTtcblx0aWYgKCEkcHJlcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhZGRCdXR0b24oJHByZXMpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsU0FBUztBQUNmLElBQU1DLFlBQVk7O0FDRnpCLElBQUFDLHFCQUF3QkMsUUFBQSxzQkFBQTs7QUNBeEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLE9BQUEsR0FBTUYsa0JBQUFHLFVBQVM7TUFDZEMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFNBQUEsR0FBUU4sa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxTQUFBLEdBQVFQLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUcsZUFBZVAsZ0JBQWdCO0FBRXJDLElBQU1RLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEMUJBLElBQUFDLHFCQUF1QlosUUFBQSxxQkFBQTtBQUV2QixJQUFNYSxrQkFBbUJDLFdBQXdDO0FBQUEsTUFBQUMsWUFBQUMsMkJBQzlDRixLQUFBLEdBQUFHO0FBQUEsTUFBQTtBQUFsQixTQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUF5QjtBQUFBLFlBQWRDLE1BQUFKLE1BQUFLO0FBQ1YsWUFBTUMsWUFBWSxJQUFJeEIsbUJBQUF5QixVQUFVSCxJQUFJSSxjQUFBLElBQUFDLE9BQWtCN0IsTUFBTSxDQUFFLEdBQXNCO1FBQ25GOEIsT0FBZTtBQUFBLGNBQUFDO0FBQ2Qsa0JBQUFBLG1CQUFPUCxJQUFJUSxpQkFBQSxRQUFBRCxxQkFBQSxTQUFBQSxtQkFBZTtRQUMzQjtNQUNELENBQUM7QUFDREwsZ0JBQVVPLEdBQUcsV0FBVyxNQUFZO0FBQ25DLFNBQUEsR0FBQWxCLG1CQUFBbUIsVUFDQztVQUNDSixNQUFNakIsV0FBVyxRQUFRO1FBQzFCLEdBQ0EsU0FDRDtNQUNELENBQUM7QUFDRGEsZ0JBQVVPLEdBQUcsU0FBUyxNQUFZO0FBQ2pDLFNBQUEsR0FBQWxCLG1CQUFBbUIsVUFDQztVQUNDSixNQUFNakIsV0FBVyxRQUFRO1FBQzFCLEdBQ0EsT0FDRDtNQUNELENBQUM7SUFDRjtFQUFBLFNBQUFzQixLQUFBO0FBQUFqQixjQUFBa0IsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQWpCLGNBQUFtQixFQUFBO0VBQUE7QUFDRDs7QUUxQkEsSUFBQUMscUJBQW9CbkMsUUFBQSxrQkFBQTtBQUVwQixJQUFNb0MsWUFBYXRCLFdBQXdDO0FBSTFELFFBQU11QixhQUFpQyxJQUFJQyxHQUFHQyxHQUFHQyxhQUFhO0lBQzdEQyxTQUFTLENBQUM1QyxNQUFNO0lBQ2hCNkMsUUFBUTtJQUNSQyxNQUFNO0VBQ1AsQ0FBQztBQUNELFFBQU1DLGNBQXNCUCxXQUFXUTtBQUV2Q0QsY0FBWUUsS0FBSyxjQUFjcEMsV0FBVyxNQUFNLENBQUM7QUFLakRJLFFBQU1pQyxTQUFTakQsU0FBUyxFQUFFa0QsT0FBT0osV0FBVztBQUU1QyxHQUFBLEdBQUFULG1CQUFBYyxPQUFNTCxZQUFZTSxJQUFJLENBQUMsR0FBc0I7SUFDNUNDLE9BQU87SUFDUEMsU0FBU1IsWUFBWUUsS0FBSyxZQUFZO0lBQ3RDTyxXQUFXO0VBQ1osQ0FBQztBQUVEeEMsa0JBQWdCQyxLQUFLO0FBQ3RCOztBQzVCQXdDLEdBQUdDLEtBQUssa0JBQWtCLEVBQUVDLElBQUksU0FBU0MsY0FBY0MsVUFBZ0I7QUFDdEUsUUFBTTVDLFFBQWdDNEMsU0FBU0MsS0FBSyxLQUFLO0FBQ3pELE1BQUksQ0FBQzdDLE1BQU04QyxRQUFRO0FBQ2xCO0VBQ0Q7QUFFQXhCLFlBQVV0QixLQUFLO0FBQ2hCLENBQUM7IiwKICAibmFtZXMiOiBbImJ1dHRvbiIsICJjb2RlQmxvY2siLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNvcHkiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ29waWVkIiwgIkZhaWxlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFkZENvcHlMaXN0ZW5lciIsICIkcHJlcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAicHJlIiwgInZhbHVlIiwgImNsaXBib2FyZCIsICJDbGlwYm9hcmQiLCAicXVlcnlTZWxlY3RvciIsICJjb25jYXQiLCAidGV4dCIsICJfcHJlJHRleHRDb250ZW50IiwgInRleHRDb250ZW50IiwgIm9uIiwgInRvYXN0aWZ5IiwgImVyciIsICJlIiwgImYiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFkZEJ1dHRvbiIsICJjb3B5QnV0dG9uIiwgIk9PIiwgInVpIiwgIkJ1dHRvbldpZGdldCIsICJjbGFzc2VzIiwgImZyYW1lZCIsICJpY29uIiwgIiRjb3B5QnV0dG9uIiwgIiRlbGVtZW50IiwgImF0dHIiLCAiYWRkQ2xhc3MiLCAiYXBwZW5kIiwgInRpcHB5IiwgImdldCIsICJhcnJvdyIsICJjb250ZW50IiwgInBsYWNlbWVudCIsICJtdyIsICJob29rIiwgImFkZCIsICJjb3B5Q29kZUJsb2NrIiwgIiRjb250ZW50IiwgImZpbmQiLCAibGVuZ3RoIl0KfQo=
