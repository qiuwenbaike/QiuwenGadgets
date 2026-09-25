/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Group-transwiki_JS}
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

// dist/Group-transwiki_JS/Group-transwiki_JS.js
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
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
//! src/Group-transwiki_JS/options.json
var options_exports = {};
__export(options_exports, {
  configKey: () => configKey,
  default: () => options_default
});
var configKey = "gadget-Group-transwiki_JS__Initialized";
var options_default = {
  configKey
};
//! src/Group-transwiki_JS/modules/fixCheckbox.ts
var import_ext_gadget = require("ext.gadget.Util");
var fixCheckbox = () => {
  const {
    wgCanonicalSpecialPageName,
    wgWikiID
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "Import") {
    return;
  }
  const interwikiHistory = document.querySelector("input[name=interwikiHistory]");
  const interwikiTemplates = document.querySelector("input[name=interwikiTemplates]");
  if (interwikiHistory) {
    interwikiHistory.checked = false;
  }
  if (interwikiTemplates) {
    interwikiTemplates.checked = false;
  }
  if (wgWikiID === "zhqiuwenbaike") {
    if (interwikiHistory) {
      interwikiHistory.disabled = true;
    }
    if (interwikiTemplates) {
      interwikiTemplates.disabled = true;
    }
  }
  const form = document.querySelector("#mw-import-interwiki-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      void _asyncToGenerator(function* () {
        if (interwikiHistory !== null && interwikiHistory !== void 0 && interwikiHistory.checked) {
          const confirmed = yield (0, import_ext_gadget.oouiConfirmWithStyle)("您是否要导入此页面的所有版本？");
          if (!confirmed) {
            interwikiHistory.checked = false;
          }
        }
        if (interwikiTemplates !== null && interwikiTemplates !== void 0 && interwikiTemplates.checked) {
          const confirmed = yield (0, import_ext_gadget.oouiConfirmWithStyle)("您是否要导入此页面所包含的所有模板和其他页面？");
          if (!confirmed) {
            interwikiTemplates.checked = false;
          }
        }
        form.submit();
      })();
    });
  }
};
//! src/Group-transwiki_JS/modules/fixSummary.ts
var fixSummary = () => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName === "Import") {
    const defaultSummary = "页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史";
    const defaultFileImportSummary = "".concat(defaultSummary, "；文件作者请参见此页面及来源页面记载");
    const userNamePrefixInput = document.querySelector("#mw-import-upload-form input[name=usernamePrefix]");
    if (userNamePrefixInput) {
      userNamePrefixInput.addEventListener("input", () => {
        const uploadLogCommentInput = document.querySelector("#mw-import-upload-form input[name=log-comment]");
        if (uploadLogCommentInput) {
          const importUploadPrefix = userNamePrefixInput === null || userNamePrefixInput === void 0 ? void 0 : userNamePrefixInput.value;
          uploadLogCommentInput.value = "导入自[[".concat(importUploadPrefix, ":|此网站]]的同名页面［").concat(importUploadPrefix === "commons" ? defaultFileImportSummary : defaultSummary, "］");
        }
      });
    }
    const interwikiLogCommentInput = document.querySelector("#mw-import-interwiki-form input[name=log-comment]");
    if (interwikiLogCommentInput) {
      interwikiLogCommentInput.value = defaultSummary;
      const interwikiPrefixSelect = document.querySelector("#mw-import-interwiki-form select[name=interwiki]");
      if (interwikiPrefixSelect) {
        interwikiPrefixSelect.addEventListener("change", () => {
          switch (interwikiPrefixSelect.value) {
            case "commons":
              interwikiLogCommentInput.value = "［".concat(defaultFileImportSummary, "］");
              break;
            default:
              interwikiLogCommentInput.value = "［".concat(defaultSummary, "］");
              break;
          }
        });
      }
    }
    const assignKnownUsers = document.querySelectorAll("input[name=assignKnownUsers]");
    if (assignKnownUsers.length) {
      var _iterator = _createForOfIteratorHelper(assignKnownUsers), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const checkBox = _step.value;
          checkBox.checked = true;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }
};
//! src/Group-transwiki_JS/Group-transwiki_JS.ts
(function userJS() {
  const {
    configKey: configKey2
  } = options_exports;
  if (mw.config.get(configKey2)) {
    return;
  }
  mw.config.set(configKey2, true);
  fixCheckbox();
  fixSummary();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXRyYW5zd2lraV9KUy9vcHRpb25zLmpzb24iLCAic3JjL0dyb3VwLXRyYW5zd2lraV9KUy9tb2R1bGVzL2ZpeENoZWNrYm94LnRzIiwgInNyYy9Hcm91cC10cmFuc3dpa2lfSlMvbW9kdWxlcy9maXhTdW1tYXJ5LnRzIiwgInNyYy9Hcm91cC10cmFuc3dpa2lfSlMvR3JvdXAtdHJhbnN3aWtpX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUdyb3VwLXRyYW5zd2lraV9KU19fSW5pdGlhbGl6ZWRcIlxufVxuIiwgImltcG9ydCB7b291aUNvbmZpcm1XaXRoU3R5bGV9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGZpeENoZWNrYm94ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnV2lraUlEfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdJbXBvcnQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaW50ZXJ3aWtpSGlzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9aW50ZXJ3aWtpSGlzdG9yeV0nKTtcblx0Y29uc3QgaW50ZXJ3aWtpVGVtcGxhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1pbnRlcndpa2lUZW1wbGF0ZXNdJyk7XG5cblx0aWYgKGludGVyd2lraUhpc3RvcnkpIHtcblx0XHRpbnRlcndpa2lIaXN0b3J5LmNoZWNrZWQgPSBmYWxzZTtcblx0fVxuXG5cdGlmIChpbnRlcndpa2lUZW1wbGF0ZXMpIHtcblx0XHRpbnRlcndpa2lUZW1wbGF0ZXMuY2hlY2tlZCA9IGZhbHNlO1xuXHR9XG5cblx0aWYgKHdnV2lraUlEID09PSAnemhxaXV3ZW5iYWlrZScpIHtcblx0XHRpZiAoaW50ZXJ3aWtpSGlzdG9yeSkge1xuXHRcdFx0aW50ZXJ3aWtpSGlzdG9yeS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGludGVyd2lraVRlbXBsYXRlcykge1xuXHRcdFx0aW50ZXJ3aWtpVGVtcGxhdGVzLmRpc2FibGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRm9ybUVsZW1lbnQ+KCcjbXctaW1wb3J0LWludGVyd2lraS1mb3JtJyk7XG5cblx0aWYgKGZvcm0pIHtcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudDogU3VibWl0RXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdFx0aWYgKGludGVyd2lraUhpc3Rvcnk/LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRjb25zdCBjb25maXJtZWQgPSBhd2FpdCBvb3VpQ29uZmlybVdpdGhTdHlsZSgn5oKo5piv5ZCm6KaB5a+85YWl5q2k6aG16Z2i55qE5omA5pyJ54mI5pys77yfJyk7XG5cdFx0XHRcdFx0aWYgKCFjb25maXJtZWQpIHtcblx0XHRcdFx0XHRcdGludGVyd2lraUhpc3RvcnkuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpbnRlcndpa2lUZW1wbGF0ZXM/LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRjb25zdCBjb25maXJtZWQgPSBhd2FpdCBvb3VpQ29uZmlybVdpdGhTdHlsZSgn5oKo5piv5ZCm6KaB5a+85YWl5q2k6aG16Z2i5omA5YyF5ZCr55qE5omA5pyJ5qih5p2/5ZKM5YW25LuW6aG16Z2i77yfJyk7XG5cdFx0XHRcdFx0aWYgKCFjb25maXJtZWQpIHtcblx0XHRcdFx0XHRcdGludGVyd2lraVRlbXBsYXRlcy5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9ybS5zdWJtaXQoKTtcblx0XHRcdH0pKCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Zml4Q2hlY2tib3h9O1xuIiwgImNvbnN0IGZpeFN1bW1hcnkgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ0ltcG9ydCcpIHtcblx0XHRjb25zdCBkZWZhdWx0U3VtbWFyeSA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdFx0Y29uc3QgZGVmYXVsdEZpbGVJbXBvcnRTdW1tYXJ5ID0gYCR7ZGVmYXVsdFN1bW1hcnl977yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29YDtcblxuXHRcdC8vICNtdy1pbXBvcnQtdXBsb2FkLWZvcm1cblx0XHRjb25zdCB1c2VyTmFtZVByZWZpeElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50Pihcblx0XHRcdCcjbXctaW1wb3J0LXVwbG9hZC1mb3JtIGlucHV0W25hbWU9dXNlcm5hbWVQcmVmaXhdJ1xuXHRcdCk7XG5cblx0XHRpZiAodXNlck5hbWVQcmVmaXhJbnB1dCkge1xuXHRcdFx0dXNlck5hbWVQcmVmaXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcblx0XHRcdFx0Y29uc3QgdXBsb2FkTG9nQ29tbWVudElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50Pihcblx0XHRcdFx0XHQnI213LWltcG9ydC11cGxvYWQtZm9ybSBpbnB1dFtuYW1lPWxvZy1jb21tZW50XSdcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRpZiAodXBsb2FkTG9nQ29tbWVudElucHV0KSB7XG5cdFx0XHRcdFx0Y29uc3QgaW1wb3J0VXBsb2FkUHJlZml4ID0gdXNlck5hbWVQcmVmaXhJbnB1dD8udmFsdWU7XG5cdFx0XHRcdFx0dXBsb2FkTG9nQ29tbWVudElucHV0LnZhbHVlID0gYOWvvOWFpeiHqltbJHtpbXBvcnRVcGxvYWRQcmVmaXh9OnzmraTnvZHnq5ldXeeahOWQjOWQjemhtemdou+8uyR7aW1wb3J0VXBsb2FkUHJlZml4ID09PSAnY29tbW9ucycgPyBkZWZhdWx0RmlsZUltcG9ydFN1bW1hcnkgOiBkZWZhdWx0U3VtbWFyeX3vvL1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyAjbXctaW1wb3J0LWludGVyd2lraS1mb3JtXG5cdFx0Y29uc3QgaW50ZXJ3aWtpTG9nQ29tbWVudElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50Pihcblx0XHRcdCcjbXctaW1wb3J0LWludGVyd2lraS1mb3JtIGlucHV0W25hbWU9bG9nLWNvbW1lbnRdJ1xuXHRcdCk7XG5cblx0XHRpZiAoaW50ZXJ3aWtpTG9nQ29tbWVudElucHV0KSB7XG5cdFx0XHRpbnRlcndpa2lMb2dDb21tZW50SW5wdXQudmFsdWUgPSBkZWZhdWx0U3VtbWFyeTtcblxuXHRcdFx0Y29uc3QgaW50ZXJ3aWtpUHJlZml4U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oXG5cdFx0XHRcdCcjbXctaW1wb3J0LWludGVyd2lraS1mb3JtIHNlbGVjdFtuYW1lPWludGVyd2lraV0nXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoaW50ZXJ3aWtpUHJlZml4U2VsZWN0KSB7XG5cdFx0XHRcdGludGVyd2lraVByZWZpeFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0c3dpdGNoIChpbnRlcndpa2lQcmVmaXhTZWxlY3QudmFsdWUpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ2NvbW1vbnMnOlxuXHRcdFx0XHRcdFx0XHRpbnRlcndpa2lMb2dDb21tZW50SW5wdXQudmFsdWUgPSBg77y7JHtkZWZhdWx0RmlsZUltcG9ydFN1bW1hcnl977y9YDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRpbnRlcndpa2lMb2dDb21tZW50SW5wdXQudmFsdWUgPSBg77y7JHtkZWZhdWx0U3VtbWFyeX3vvL1gO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vICNhc3NpZ25Lbm93blVzZXJzXG5cdFx0Y29uc3QgYXNzaWduS25vd25Vc2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9YXNzaWduS25vd25Vc2Vyc10nKTtcblx0XHRpZiAoYXNzaWduS25vd25Vc2Vycy5sZW5ndGgpIHtcblx0XHRcdGZvciAoY29uc3QgY2hlY2tCb3ggb2YgYXNzaWduS25vd25Vc2Vycykge1xuXHRcdFx0XHRjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7Zml4U3VtbWFyeX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2ZpeENoZWNrYm94fSBmcm9tICcuL21vZHVsZXMvZml4Q2hlY2tib3gnO1xuaW1wb3J0IHtmaXhTdW1tYXJ5fSBmcm9tICcuL21vZHVsZXMvZml4U3VtbWFyeSc7XG5cbihmdW5jdGlvbiB1c2VySlMoKTogdm9pZCB7XG5cdGNvbnN0IHtjb25maWdLZXl9ID0gT1BUSU9OUztcblxuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KGNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoY29uZmlnS2V5LCB0cnVlKTtcblxuXHQvKiDlj5bmtojlpI3pgInmoYYgKi9cblx0Zml4Q2hlY2tib3goKTtcblx0Lyog5L+u5pS557yW6L6R5pGY6KaBICovXG5cdGZpeFN1bW1hcnkoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQSxDQUFBO0FBQUFDLFNBQUFELGlCQUFBO0VBQUFFLFdBQUFBLE1BQUFBO0VBQUFDLFNBQUFBLE1BQUFDO0FBQUEsQ0FBQTtBQUNDLElBQUFGLFlBQWE7QUFEZCxJQUFBRSxrQkFBQTtFQUNDRjtBQUNEOztBQ0ZBLElBQUFHLG9CQUFtQ0MsUUFBQSxpQkFBQTtBQUVuQyxJQUFNQyxjQUFjQSxNQUFNO0FBQ3pCLFFBQU07SUFBQ0M7SUFBNEJDO0VBQVEsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUU3RCxNQUFJSiwrQkFBK0IsVUFBVTtBQUM1QztFQUNEO0FBRUEsUUFBTUssbUJBQW1CQyxTQUFTQyxjQUFnQyw4QkFBOEI7QUFDaEcsUUFBTUMscUJBQXFCRixTQUFTQyxjQUFnQyxnQ0FBZ0M7QUFFcEcsTUFBSUYsa0JBQWtCO0FBQ3JCQSxxQkFBaUJJLFVBQVU7RUFDNUI7QUFFQSxNQUFJRCxvQkFBb0I7QUFDdkJBLHVCQUFtQkMsVUFBVTtFQUM5QjtBQUVBLE1BQUlSLGFBQWEsaUJBQWlCO0FBQ2pDLFFBQUlJLGtCQUFrQjtBQUNyQkEsdUJBQWlCSyxXQUFXO0lBQzdCO0FBRUEsUUFBSUYsb0JBQW9CO0FBQ3ZCQSx5QkFBbUJFLFdBQVc7SUFDL0I7RUFDRDtBQUVBLFFBQU1DLE9BQU9MLFNB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X2V4cG9ydCIsICJjb25maWdLZXkiLCAiZGVmYXVsdCIsICJvcHRpb25zX2RlZmF1bHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJmaXhDaGVja2JveCIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z1dpa2lJRCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImludGVyd2lraUhpc3RvcnkiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJpbnRlcndpa2lUZW1wbGF0ZXMiLCAiY2hlY2tlZCIsICJkaXNhYmxlZCIsICJmb3JtIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiY29uZmlybWVkIiwgIm9vdWlDb25maXJtV2l0aFN0eWxlIiwgInN1Ym1pdCIsICJmaXhTdW1tYXJ5IiwgImRlZmF1bHRTdW1tYXJ5IiwgImRlZmF1bHRGaWxlSW1wb3J0U3VtbWFyeSIsICJjb25jYXQiLCAidXNlck5hbWVQcmVmaXhJbnB1dCIsICJ1cGxvYWRMb2dDb21tZW50SW5wdXQiLCAiaW1wb3J0VXBsb2FkUHJlZml4IiwgInZhbHVlIiwgImludGVyd2lraUxvZ0NvbW1lbnRJbnB1dCIsICJpbnRlcndpa2lQcmVmaXhTZWxlY3QiLCAiYXNzaWduS25vd25Vc2VycyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImxlbmd0aCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiY2hlY2tCb3giLCAiZXJyIiwgImUiLCAiZiIsICJ1c2VySlMiLCAiY29uZmlnS2V5MiIsICJzZXQiXQp9Cg==
