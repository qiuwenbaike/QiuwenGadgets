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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length) return { done: true };
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
      if (!normalCompletion && it.return != null) it.return();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXRyYW5zd2lraV9KUy9vcHRpb25zLmpzb24iLCAic3JjL0dyb3VwLXRyYW5zd2lraV9KUy9tb2R1bGVzL2ZpeENoZWNrYm94LnRzIiwgInNyYy9Hcm91cC10cmFuc3dpa2lfSlMvbW9kdWxlcy9maXhTdW1tYXJ5LnRzIiwgInNyYy9Hcm91cC10cmFuc3dpa2lfSlMvR3JvdXAtdHJhbnN3aWtpX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUdyb3VwLXRyYW5zd2lraV9KU19fSW5pdGlhbGl6ZWRcIlxufVxuIiwgImNvbnN0IGZpeENoZWNrYm94ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnV2lraUlEfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdJbXBvcnQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaW50ZXJ3aWtpSGlzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9aW50ZXJ3aWtpSGlzdG9yeV0nKTtcblx0Y29uc3QgaW50ZXJ3aWtpVGVtcGxhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1pbnRlcndpa2lUZW1wbGF0ZXNdJyk7XG5cblx0aWYgKGludGVyd2lraUhpc3RvcnkpIHtcblx0XHRpbnRlcndpa2lIaXN0b3J5LmNoZWNrZWQgPSBmYWxzZTtcblx0fVxuXG5cdGlmIChpbnRlcndpa2lUZW1wbGF0ZXMpIHtcblx0XHRpbnRlcndpa2lUZW1wbGF0ZXMuY2hlY2tlZCA9IGZhbHNlO1xuXHR9XG5cblx0aWYgKHdnV2lraUlEID09PSAnemhxaXV3ZW5iYWlrZScpIHtcblx0XHRpZiAoaW50ZXJ3aWtpSGlzdG9yeSkge1xuXHRcdFx0aW50ZXJ3aWtpSGlzdG9yeS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGludGVyd2lraVRlbXBsYXRlcykge1xuXHRcdFx0aW50ZXJ3aWtpVGVtcGxhdGVzLmRpc2FibGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRm9ybUVsZW1lbnQ+KCcjbXctaW1wb3J0LWludGVyd2lraS1mb3JtJyk7XG5cblx0aWYgKGZvcm0pIHtcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudDogU3VibWl0RXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGlmICghaW50ZXJ3aWtpSGlzdG9yeSB8fCAhaW50ZXJ3aWtpSGlzdG9yeS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IE9PLnVpLmNvbmZpcm0oJ+aCqOaYr+WQpuimgeWvvOWFpeatpOmhtemdoueahOaJgOacieeJiOacrO+8nycpO1xuXHRcdFx0XHRpZiAoIWNvbmZpcm1lZCkge1xuXHRcdFx0XHRcdGludGVyd2lraUhpc3RvcnkuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpXG5cdFx0XHRcdC50aGVuKGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRpZiAoIWludGVyd2lraVRlbXBsYXRlcyB8fCAhaW50ZXJ3aWtpVGVtcGxhdGVzLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgY29uZmlybWVkID0gYXdhaXQgT08udWkuY29uZmlybSgn5oKo5piv5ZCm6KaB5a+85YWl5q2k6aG16Z2i5omA5YyF5ZCr55qE5omA5pyJ5qih5p2/5ZKM5YW25LuW6aG16Z2i77yfJyk7XG5cdFx0XHRcdFx0aWYgKCFjb25maXJtZWQpIHtcblx0XHRcdFx0XHRcdGludGVyd2lraVRlbXBsYXRlcy5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0Zm9ybS5zdWJtaXQoKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Zml4Q2hlY2tib3h9O1xuIiwgImNvbnN0IGZpeFN1bW1hcnkgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ0ltcG9ydCcpIHtcblx0XHRjb25zdCBkZWZhdWx0U3VtbWFyeSA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdFx0Y29uc3QgZGVmYXVsdEZpbGVJbXBvcnRTdW1tYXJ5ID0gYCR7ZGVmYXVsdFN1bW1hcnl977yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29YDtcblxuXHRcdC8vICNtdy1pbXBvcnQtdXBsb2FkLWZvcm1cblx0XHRjb25zdCB1c2VyTmFtZVByZWZpeElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50Pihcblx0XHRcdCcjbXctaW1wb3J0LXVwbG9hZC1mb3JtIGlucHV0W25hbWU9dXNlcm5hbWVQcmVmaXhdJ1xuXHRcdCk7XG5cdFx0aWYgKHVzZXJOYW1lUHJlZml4SW5wdXQpIHtcblx0XHRcdHVzZXJOYW1lUHJlZml4SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHVwbG9hZExvZ0NvbW1lbnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXG5cdFx0XHRcdFx0JyNtdy1pbXBvcnQtdXBsb2FkLWZvcm0gaW5wdXRbbmFtZT1sb2ctY29tbWVudF0nXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmICghdXBsb2FkTG9nQ29tbWVudElucHV0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaW1wb3J0VXBsb2FkUHJlZml4ID0gdXNlck5hbWVQcmVmaXhJbnB1dD8udmFsdWU7XG5cdFx0XHRcdHVwbG9hZExvZ0NvbW1lbnRJbnB1dC52YWx1ZSA9IGDlr7zlhaXoh6pbWyR7aW1wb3J0VXBsb2FkUHJlZml4fTp85q2k572R56uZXV3nmoTlkIzlkI3pobXpnaLvvLske2ltcG9ydFVwbG9hZFByZWZpeCA9PT0gJ2NvbW1vbnMnID8gZGVmYXVsdEZpbGVJbXBvcnRTdW1tYXJ5IDogZGVmYXVsdFN1bW1hcnl977y9YDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vICNtdy1pbXBvcnQtaW50ZXJ3aWtpLWZvcm1cblx0XHRjb25zdCBpbnRlcndpa2lMb2dDb21tZW50SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFxuXHRcdFx0JyNtdy1pbXBvcnQtaW50ZXJ3aWtpLWZvcm0gaW5wdXRbbmFtZT1sb2ctY29tbWVudF0nXG5cdFx0KTtcblx0XHRjb25zdCBpbnRlcndpa2lQcmVmaXhTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50Pihcblx0XHRcdCcjbXctaW1wb3J0LWludGVyd2lraS1mb3JtIHNlbGVjdFtuYW1lPWludGVyd2lraV0nXG5cdFx0KTtcblxuXHRcdGlmIChpbnRlcndpa2lMb2dDb21tZW50SW5wdXQpIHtcblx0XHRcdGludGVyd2lraUxvZ0NvbW1lbnRJbnB1dC52YWx1ZSA9IGRlZmF1bHRTdW1tYXJ5O1xuXG5cdFx0XHRpZiAoaW50ZXJ3aWtpUHJlZml4U2VsZWN0KSB7XG5cdFx0XHRcdGludGVyd2lraVByZWZpeFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0c3dpdGNoIChpbnRlcndpa2lQcmVmaXhTZWxlY3QudmFsdWUpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ2NvbW1vbnMnOlxuXHRcdFx0XHRcdFx0XHRpbnRlcndpa2lMb2dDb21tZW50SW5wdXQudmFsdWUgPSBg77y7JHtkZWZhdWx0RmlsZUltcG9ydFN1bW1hcnl977y9YDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRpbnRlcndpa2lMb2dDb21tZW50SW5wdXQudmFsdWUgPSBg77y7JHtkZWZhdWx0U3VtbWFyeX3vvL1gO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vICNhc3NpZ25Lbm93blVzZXJzXG5cdFx0Y29uc3QgYXNzaWduS25vd25Vc2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9YXNzaWduS25vd25Vc2Vyc10nKTtcblx0XHRpZiAoYXNzaWduS25vd25Vc2Vycy5sZW5ndGgpIHtcblx0XHRcdGZvciAoY29uc3QgY2hlY2tCb3ggb2YgYXNzaWduS25vd25Vc2Vycykge1xuXHRcdFx0XHRjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7Zml4U3VtbWFyeX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2ZpeENoZWNrYm94fSBmcm9tICcuL21vZHVsZXMvZml4Q2hlY2tib3gnO1xuaW1wb3J0IHtmaXhTdW1tYXJ5fSBmcm9tICcuL21vZHVsZXMvZml4U3VtbWFyeSc7XG5cbihmdW5jdGlvbiB1c2VySlMoKTogdm9pZCB7XG5cdGNvbnN0IHtjb25maWdLZXl9ID0gT1BUSU9OUztcblxuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KGNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoY29uZmlnS2V5LCB0cnVlKTtcblxuXHQvKiDlj5bmtojlpI3pgInmoYYgKi9cblx0Zml4Q2hlY2tib3goKTtcblx0Lyog5L+u5pS557yW6L6R5pGY6KaBICovXG5cdGZpeFN1bW1hcnkoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBLENBQUE7QUFBQUMsU0FBQUQsaUJBQUE7RUFBQUUsV0FBQUEsTUFBQUE7RUFBQUMsU0FBQUEsTUFBQUM7QUFBQSxDQUFBO0FBQ0MsSUFBQUYsWUFBYTtBQURkLElBQUFFLGtCQUFBO0VBQ0NGO0FBQ0Q7O0FDRkEsSUFBTUcsY0FBY0EsTUFBTTtBQUN6QixRQUFNO0lBQUNDO0lBQTRCQztFQUFRLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFN0QsTUFBSUosK0JBQStCLFVBQVU7QUFDNUM7RUFDRDtBQUVBLFFBQU1LLG1CQUFtQkMsU0FBU0MsY0FBZ0MsOEJBQThCO0FBQ2hHLFFBQU1DLHFCQUFxQkYsU0FBU0MsY0FBZ0MsZ0NBQWdDO0FBRXBHLE1BQUlGLGtCQUFrQjtBQUNyQkEscUJBQWlCSSxVQUFVO0VBQzVCO0FBRUEsTUFBSUQsb0JBQW9CO0FBQ3ZCQSx1QkFBbUJDLFVBQVU7RUFDOUI7QUFFQSxNQUFJUixhQUFhLGlCQUFpQjtBQUNqQyxRQUFJSSxrQkFBa0I7QUFDckJBLHVCQUFpQkssV0FBVztJQUM3QjtBQUVBLFFBQUlGLG9CQUFvQjtBQUN2QkEseUJBQW1CRSxXQUFXO0lBQy9CO0VBQ0Q7QUFFQSxRQUFNQyxPQUFPTCxTQUFTQyxjQUErQiwyQkFBMkI7QUFFaEYsTUFBSUksTUFBTTtBQUNUQSxTQUFLQyxpQkFBaUIsVUFBV0MsV0FBNkI7QUFDN0RBLFlBQU1DLGVBQWU7QUFDckIsV0FBQUMsa0JBQU0sYUFBWTtBQUNqQixZQUFJLENBQUNWLG9CQUFvQixDQUFDQSxpQkFBaUJJLFNBQVM7QUFDbkQ7UUFDRDtBQUNBLGNBQU1PLFlBQUEsTUFBa0JDLEdBQUdDLEdBQUdDLFFBQVEsaUJBQWlCO0FBQ3ZELFlBQUksQ0FBQ0gsV0FBVztBQUNmWCwyQkFBaUJJLFVBQVU7UUFDNUI7TUFDRCxDQUFBLEVBQUcsRUFDRFcsS0FBQUwsa0NBQUssYUFBWTtBQUNqQixZQUFJLENBQUNQLHNCQUFzQixDQUFDQSxtQkFBbUJDLFNBQVM7QUFDdkQ7UUFDRDtBQUNBLGNBQU1PLFlBQUEsTUFBa0JDLEdBQUdDLEdBQUdDLFFBQVEseUJBQXlCO0FBQy9ELFlBQUksQ0FBQ0gsV0FBVztBQUNmUiw2QkFBbUJDLFVBQVU7UUFDOUI7TUFDRCxDQUFDLENBQUEsRUFDQVcsS0FBSyxNQUFNO0FBQ1hULGFBQUtVLE9BQU87TUFDYixDQUFDO0lBQ0gsQ0FBQztFQUNGO0FBQ0Q7O0FDeERBLElBQU1DLGFBQWFBLE1BQVk7QUFDOUIsUUFBTTtJQUFDdEI7RUFBMEIsSUFBSUUsR0FBR0MsT0FBT0MsSUFBSTtBQUNuRCxNQUFJSiwrQkFBK0IsVUFBVTtBQUM1QyxVQUFNdUIsaUJBQWlCO0FBQ3ZCLFVBQU1DLDJCQUFBLEdBQUFDLE9BQThCRixnQkFBYyxvQkFBQTtBQUdsRCxVQUFNRyxzQkFBc0JwQixTQUFTQyxjQUNwQyxtREFDRDtBQUNBLFFBQUltQixxQkFBcUI7QUFDeEJBLDBCQUFvQmQsaUJBQWlCLFNBQVMsTUFBTTtBQUNuRCxjQUFNZSx3QkFBd0JyQixTQUFTQyxjQUN0QyxnREFDRDtBQUNBLFlBQUksQ0FBQ29CLHVCQUF1QjtBQUMzQjtRQUNEO0FBRUEsY0FBTUMscUJBQXFCRix3QkFBQSxRQUFBQSx3QkFBQSxTQUFBLFNBQUFBLG9CQUFxQkc7QUFDaERGLDhCQUFzQkUsUUFBQSxRQUFBSixPQUFnQkcsb0JBQWtCLGVBQUEsRUFBQUgsT0FBZ0JHLHVCQUF1QixZQUFZSiwyQkFBMkJELGdCQUFjLEdBQUE7TUFDckosQ0FBQztJQUNGO0FBR0EsVUFBTU8sMkJBQTJCeEIsU0FBU0MsY0FDekMsbURBQ0Q7QUFDQSxVQUFNd0Isd0JBQXdCekIsU0FBU0MsY0FDdEMsa0RBQ0Q7QUFFQSxRQUFJdUIsMEJBQTBCO0FBQzdCQSwrQkFBeUJELFFBQVFOO0FBRWpDLFVBQUlRLHVCQUF1QjtBQUMxQkEsOEJBQXNCbkIsaUJBQWlCLFVBQVUsTUFBTTtBQUN0RCxrQkFBUW1CLHNCQUFzQkYsT0FBQTtZQUM3QixLQUFLO0FBQ0pDLHVDQUF5QkQsUUFBQSxJQUFBSixPQUFZRCwwQkFBd0IsR0FBQTtBQUM3RDtZQUNEO0FBQ0NNLHVDQUF5QkQsUUFBQSxJQUFBSixPQUFZRixnQkFBYyxHQUFBO0FBQ25EO1VBQ0Y7UUFDRCxDQUFDO01BQ0Y7SUFDRDtBQUdBLFVBQU1TLG1CQUFtQjFCLFNBQVMyQixpQkFBbUMsOEJBQThCO0FBQ25HLFFBQUlELGlCQUFpQkUsUUFBUTtBQUFBLFVBQUFDLFlBQUFDLDJCQUNMSixnQkFBQSxHQUFBSztBQUFBLFVBQUE7QUFBdkIsYUFBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBeUM7QUFBQSxnQkFBOUJDLFdBQUFKLE1BQUFSO0FBQ1ZZLG1CQUFTaEMsVUFBVTtRQUNwQjtNQUFBLFNBQUFpQyxLQUFBO0FBQUFQLGtCQUFBUSxFQUFBRCxHQUFBO01BQUEsVUFBQTtBQUFBUCxrQkFBQVMsRUFBQTtNQUFBO0lBQ0Q7RUFDRDtBQUNEOztDQ3JEQyxTQUFTQyxTQUFlO0FBQ3hCLFFBQU07SUFBQ2pELFdBQUFrRDtFQUFTLElBQUlwRDtBQUdwQixNQUFJUSxHQUFHQyxPQUFPQyxJQUFJMEMsVUFBUyxHQUFHO0FBQzdCO0VBQ0Q7QUFFQTVDLEtBQUdDLE9BQU80QyxJQUFJRCxZQUFXLElBQUk7QUFHN0IvQyxjQUFZO0FBRVp1QixhQUFXO0FBQ1osR0FBRzsiLAogICJuYW1lcyI6IFsib3B0aW9uc19leHBvcnRzIiwgIl9fZXhwb3J0IiwgImNvbmZpZ0tleSIsICJkZWZhdWx0IiwgIm9wdGlvbnNfZGVmYXVsdCIsICJmaXhDaGVja2JveCIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z1dpa2lJRCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImludGVyd2lraUhpc3RvcnkiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJpbnRlcndpa2lUZW1wbGF0ZXMiLCAiY2hlY2tlZCIsICJkaXNhYmxlZCIsICJmb3JtIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiY29uZmlybWVkIiwgIk9PIiwgInVpIiwgImNvbmZpcm0iLCAidGhlbiIsICJzdWJtaXQiLCAiZml4U3VtbWFyeSIsICJkZWZhdWx0U3VtbWFyeSIsICJkZWZhdWx0RmlsZUltcG9ydFN1bW1hcnkiLCAiY29uY2F0IiwgInVzZXJOYW1lUHJlZml4SW5wdXQiLCAidXBsb2FkTG9nQ29tbWVudElucHV0IiwgImltcG9ydFVwbG9hZFByZWZpeCIsICJ2YWx1ZSIsICJpbnRlcndpa2lMb2dDb21tZW50SW5wdXQiLCAiaW50ZXJ3aWtpUHJlZml4U2VsZWN0IiwgImFzc2lnbktub3duVXNlcnMiLCAicXVlcnlTZWxlY3RvckFsbCIsICJsZW5ndGgiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImNoZWNrQm94IiwgImVyciIsICJlIiwgImYiLCAidXNlckpTIiwgImNvbmZpZ0tleTIiLCAic2V0Il0KfQo=
