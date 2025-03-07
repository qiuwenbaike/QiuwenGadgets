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
        if (!interwikiHistory || !interwikiHistory.checked) {
          return;
        }
        const confirmed = yield OO.ui.confirm("您是否要导入此页面的所有版本？");
        if (!confirmed) {
          interwikiHistory.checked = false;
        }
      })().then(/* @__PURE__ */ _asyncToGenerator(function* () {
        if (!interwikiTemplates || !interwikiTemplates.checked) {
          return;
        }
        const confirmed = yield OO.ui.confirm("您是否要导入此页面所包含的所有模板和其他页面？");
        if (!confirmed) {
          interwikiTemplates.checked = false;
        }
      })).then(() => {
        form.submit();
      });
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
        if (!uploadLogCommentInput) {
          return;
        }
        const importUploadPrefix = userNamePrefixInput === null || userNamePrefixInput === void 0 ? void 0 : userNamePrefixInput.value;
        uploadLogCommentInput.value = "导入自[[".concat(importUploadPrefix, ":|此网站]]的同名页面［").concat(importUploadPrefix === "commons" ? defaultFileImportSummary : defaultSummary, "］");
      });
    }
    const interwikiLogCommentInput = document.querySelector("#mw-import-interwiki-form input[name=log-comment]");
    const interwikiPrefixSelect = document.querySelector("#mw-import-interwiki-form select[name=interwiki]");
    if (interwikiLogCommentInput) {
      interwikiLogCommentInput.value = defaultSummary;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL0dyb3VwLXRyYW5zd2lraV9KUy9vcHRpb25zLmpzb24iLCAiLi4vLi4vc3JjL0dyb3VwLXRyYW5zd2lraV9KUy9tb2R1bGVzL2ZpeENoZWNrYm94LnRzIiwgIi4uLy4uL3NyYy9Hcm91cC10cmFuc3dpa2lfSlMvbW9kdWxlcy9maXhTdW1tYXJ5LnRzIiwgIi4uLy4uL3NyYy9Hcm91cC10cmFuc3dpa2lfSlMvR3JvdXAtdHJhbnN3aWtpX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUdyb3VwLXRyYW5zd2lraV9KU19fSW5pdGlhbGl6ZWRcIlxufVxuIiwgImNvbnN0IGZpeENoZWNrYm94ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnV2lraUlEfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdJbXBvcnQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaW50ZXJ3aWtpSGlzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9aW50ZXJ3aWtpSGlzdG9yeV0nKTtcblx0Y29uc3QgaW50ZXJ3aWtpVGVtcGxhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1pbnRlcndpa2lUZW1wbGF0ZXNdJyk7XG5cblx0aWYgKGludGVyd2lraUhpc3RvcnkpIHtcblx0XHRpbnRlcndpa2lIaXN0b3J5LmNoZWNrZWQgPSBmYWxzZTtcblx0fVxuXG5cdGlmIChpbnRlcndpa2lUZW1wbGF0ZXMpIHtcblx0XHRpbnRlcndpa2lUZW1wbGF0ZXMuY2hlY2tlZCA9IGZhbHNlO1xuXHR9XG5cblx0aWYgKHdnV2lraUlEID09PSAnemhxaXV3ZW5iYWlrZScpIHtcblx0XHRpZiAoaW50ZXJ3aWtpSGlzdG9yeSkge1xuXHRcdFx0aW50ZXJ3aWtpSGlzdG9yeS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGludGVyd2lraVRlbXBsYXRlcykge1xuXHRcdFx0aW50ZXJ3aWtpVGVtcGxhdGVzLmRpc2FibGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRm9ybUVsZW1lbnQ+KCcjbXctaW1wb3J0LWludGVyd2lraS1mb3JtJyk7XG5cblx0aWYgKGZvcm0pIHtcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudDogU3VibWl0RXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGlmICghaW50ZXJ3aWtpSGlzdG9yeSB8fCAhaW50ZXJ3aWtpSGlzdG9yeS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IE9PLnVpLmNvbmZpcm0oJ+aCqOaYr+WQpuimgeWvvOWFpeatpOmhtemdoueahOaJgOacieeJiOacrO+8nycpO1xuXHRcdFx0XHRpZiAoIWNvbmZpcm1lZCkge1xuXHRcdFx0XHRcdGludGVyd2lraUhpc3RvcnkuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpXG5cdFx0XHRcdC50aGVuKGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRpZiAoIWludGVyd2lraVRlbXBsYXRlcyB8fCAhaW50ZXJ3aWtpVGVtcGxhdGVzLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgY29uZmlybWVkID0gYXdhaXQgT08udWkuY29uZmlybSgn5oKo5piv5ZCm6KaB5a+85YWl5q2k6aG16Z2i5omA5YyF5ZCr55qE5omA5pyJ5qih5p2/5ZKM5YW25LuW6aG16Z2i77yfJyk7XG5cdFx0XHRcdFx0aWYgKCFjb25maXJtZWQpIHtcblx0XHRcdFx0XHRcdGludGVyd2lraVRlbXBsYXRlcy5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0Zm9ybS5zdWJtaXQoKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Zml4Q2hlY2tib3h9O1xuIiwgImNvbnN0IGZpeFN1bW1hcnkgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ0ltcG9ydCcpIHtcblx0XHRjb25zdCBkZWZhdWx0U3VtbWFyeSA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdFx0Y29uc3QgZGVmYXVsdEZpbGVJbXBvcnRTdW1tYXJ5ID0gYCR7ZGVmYXVsdFN1bW1hcnl977yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29YDtcblxuXHRcdC8vICNtdy1pbXBvcnQtdXBsb2FkLWZvcm1cblx0XHRjb25zdCB1c2VyTmFtZVByZWZpeElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50Pihcblx0XHRcdCcjbXctaW1wb3J0LXVwbG9hZC1mb3JtIGlucHV0W25hbWU9dXNlcm5hbWVQcmVmaXhdJ1xuXHRcdCk7XG5cdFx0aWYgKHVzZXJOYW1lUHJlZml4SW5wdXQpIHtcblx0XHRcdHVzZXJOYW1lUHJlZml4SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHVwbG9hZExvZ0NvbW1lbnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXG5cdFx0XHRcdFx0JyNtdy1pbXBvcnQtdXBsb2FkLWZvcm0gaW5wdXRbbmFtZT1sb2ctY29tbWVudF0nXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmICghdXBsb2FkTG9nQ29tbWVudElucHV0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaW1wb3J0VXBsb2FkUHJlZml4ID0gdXNlck5hbWVQcmVmaXhJbnB1dD8udmFsdWU7XG5cdFx0XHRcdHVwbG9hZExvZ0NvbW1lbnRJbnB1dC52YWx1ZSA9IGDlr7zlhaXoh6pbWyR7aW1wb3J0VXBsb2FkUHJlZml4fTp85q2k572R56uZXV3nmoTlkIzlkI3pobXpnaLvvLske2ltcG9ydFVwbG9hZFByZWZpeCA9PT0gJ2NvbW1vbnMnID8gZGVmYXVsdEZpbGVJbXBvcnRTdW1tYXJ5IDogZGVmYXVsdFN1bW1hcnl977y9YDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vICNtdy1pbXBvcnQtaW50ZXJ3aWtpLWZvcm1cblx0XHRjb25zdCBpbnRlcndpa2lMb2dDb21tZW50SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFxuXHRcdFx0JyNtdy1pbXBvcnQtaW50ZXJ3aWtpLWZvcm0gaW5wdXRbbmFtZT1sb2ctY29tbWVudF0nXG5cdFx0KTtcblx0XHRjb25zdCBpbnRlcndpa2lQcmVmaXhTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50Pihcblx0XHRcdCcjbXctaW1wb3J0LWludGVyd2lraS1mb3JtIHNlbGVjdFtuYW1lPWludGVyd2lraV0nXG5cdFx0KTtcblxuXHRcdGlmIChpbnRlcndpa2lMb2dDb21tZW50SW5wdXQpIHtcblx0XHRcdGludGVyd2lraUxvZ0NvbW1lbnRJbnB1dC52YWx1ZSA9IGRlZmF1bHRTdW1tYXJ5O1xuXG5cdFx0XHRpZiAoaW50ZXJ3aWtpUHJlZml4U2VsZWN0KSB7XG5cdFx0XHRcdGludGVyd2lraVByZWZpeFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0c3dpdGNoIChpbnRlcndpa2lQcmVmaXhTZWxlY3QudmFsdWUpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ2NvbW1vbnMnOlxuXHRcdFx0XHRcdFx0XHRpbnRlcndpa2lMb2dDb21tZW50SW5wdXQudmFsdWUgPSBg77y7JHtkZWZhdWx0RmlsZUltcG9ydFN1bW1hcnl977y9YDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRpbnRlcndpa2lMb2dDb21tZW50SW5wdXQudmFsdWUgPSBg77y7JHtkZWZhdWx0U3VtbWFyeX3vvL1gO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vICNhc3NpZ25Lbm93blVzZXJzXG5cdFx0Y29uc3QgYXNzaWduS25vd25Vc2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9YXNzaWduS25vd25Vc2Vyc10nKTtcblx0XHRpZiAoYXNzaWduS25vd25Vc2Vycy5sZW5ndGgpIHtcblx0XHRcdGZvciAoY29uc3QgY2hlY2tCb3ggb2YgYXNzaWduS25vd25Vc2Vycykge1xuXHRcdFx0XHRjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7Zml4U3VtbWFyeX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2ZpeENoZWNrYm94fSBmcm9tICcuL21vZHVsZXMvZml4Q2hlY2tib3gnO1xuaW1wb3J0IHtmaXhTdW1tYXJ5fSBmcm9tICcuL21vZHVsZXMvZml4U3VtbWFyeSc7XG5cbihmdW5jdGlvbiB1c2VySlMoKTogdm9pZCB7XG5cdGNvbnN0IHtjb25maWdLZXl9ID0gT1BUSU9OUztcblxuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KGNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoY29uZmlnS2V5LCB0cnVlKTtcblxuXHQvKiDlj5bmtojlpI3pgInmoYYgKi9cblx0Zml4Q2hlY2tib3goKTtcblx0Lyog5L+u5pS557yW6L6R5pGY6KaBICovXG5cdGZpeFN1bW1hcnkoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQSxDQUFBO0FBQUFDLFNBQUFELGlCQUFBO0VBQUFFLFdBQUFBLE1BQUFBO0VBQUFDLFNBQUFBLE1BQUFDO0FBQUEsQ0FBQTtBQUNDLElBQUFGLFlBQWE7QUFEZCxJQUFBRSxrQkFBQTtFQUNDRjtBQUNEOztBQ0ZBLElBQU1HLGNBQWNBLE1BQU07QUFDekIsUUFBTTtJQUFDQztJQUE0QkM7RUFBUSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRTdELE1BQUlKLCtCQUErQixVQUFVO0FBQzVDO0VBQ0Q7QUFFQSxRQUFNSyxtQkFBbUJDLFNBQVNDLGNBQWdDLDhCQUE4QjtBQUNoRyxRQUFNQyxxQkFBcUJGLFNBQVNDLGNBQWdDLGdDQUFnQztBQUVwRyxNQUFJRixrQkFBa0I7QUFDckJBLHFCQUFpQkksVUFBVTtFQUM1QjtBQUVBLE1BQUlELG9CQUFvQjtBQUN2QkEsdUJBQW1CQyxVQUFVO0VBQzlCO0FBRUEsTUFBSVIsYUFBYSxpQkFBaUI7QUFDakMsUUFBSUksa0JBQWtCO0FBQ3JCQSx1QkFBaUJL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R0MsT0FBT0MsSUFBSTBDLFVBQVMsR0FBRztBQUM3QjtFQUNEO0FBRUE1QyxLQUFHQyxPQUFPNEMsSUFBSUQsWUFBVyxJQUFJO0FBRzdCL0MsY0FBWTtBQUVadUIsYUFBVztBQUNaLEdBQUc7IiwKICAibmFtZXMiOiBbIm9wdGlvbnNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJjb25maWdLZXkiLCAiZGVmYXVsdCIsICJvcHRpb25zX2RlZmF1bHQiLCAiZml4Q2hlY2tib3giLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dXaWtpSUQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbnRlcndpa2lIaXN0b3J5IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiaW50ZXJ3aWtpVGVtcGxhdGVzIiwgImNoZWNrZWQiLCAiZGlzYWJsZWQiLCAiZm9ybSIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImNvbmZpcm1lZCIsICJPTyIsICJ1aSIsICJjb25maXJtIiwgInRoZW4iLCAic3VibWl0IiwgImZpeFN1bW1hcnkiLCAiZGVmYXVsdFN1bW1hcnkiLCAiZGVmYXVsdEZpbGVJbXBvcnRTdW1tYXJ5IiwgImNvbmNhdCIsICJ1c2VyTmFtZVByZWZpeElucHV0IiwgInVwbG9hZExvZ0NvbW1lbnRJbnB1dCIsICJpbXBvcnRVcGxvYWRQcmVmaXgiLCAidmFsdWUiLCAiaW50ZXJ3aWtpTG9nQ29tbWVudElucHV0IiwgImludGVyd2lraVByZWZpeFNlbGVjdCIsICJhc3NpZ25Lbm93blVzZXJzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAibGVuZ3RoIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJjaGVja0JveCIsICJlcnIiLCAiZSIsICJmIiwgInVzZXJKUyIsICJjb25maWdLZXkyIiwgInNldCJdCn0K
