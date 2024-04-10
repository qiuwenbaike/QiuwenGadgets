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
  for (var name in all)
    __defProp(target, name, {
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
    wgWikiId
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
  if (wgWikiId === "zhqiuwenbaike") {
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
    const [userNamePrefixInput] = document.querySelectorAll("#mw-import-upload-form input[name=usernamePrefix]");
    if (userNamePrefixInput) {
      userNamePrefixInput.addEventListener("input", () => {
        const [uploadLogCommentInput] = document.querySelectorAll("#mw-import-upload-form input[name=log-comment]");
        if (!uploadLogCommentInput) {
          return;
        }
        const importUploadPrefix = userNamePrefixInput === null || userNamePrefixInput === void 0 ? void 0 : userNamePrefixInput.value;
        uploadLogCommentInput.value = "导入自[[".concat(importUploadPrefix, ":|此网站]]的同名页面［").concat(importUploadPrefix === "commons" ? defaultFileImportSummary : defaultSummary, "］");
      });
    }
    const [interwikiLogCommentInput] = document.querySelectorAll("#mw-import-interwiki-form input[name=log-comment]");
    const [interwikiPrefixSelect] = document.querySelectorAll("#mw-import-interwiki-form select[name=interwiki]");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXRyYW5zd2lraV9KUy9vcHRpb25zLmpzb24iLCAic3JjL0dyb3VwLXRyYW5zd2lraV9KUy9tb2R1bGVzL2ZpeENoZWNrYm94LnRzIiwgInNyYy9Hcm91cC10cmFuc3dpa2lfSlMvbW9kdWxlcy9maXhTdW1tYXJ5LnRzIiwgInNyYy9Hcm91cC10cmFuc3dpa2lfSlMvR3JvdXAtdHJhbnN3aWtpX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUdyb3VwLXRyYW5zd2lraV9KU19fSW5pdGlhbGl6ZWRcIlxufVxuIiwgImNvbnN0IGZpeENoZWNrYm94ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnV2lraUlkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdJbXBvcnQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaW50ZXJ3aWtpSGlzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9aW50ZXJ3aWtpSGlzdG9yeV0nKTtcblx0Y29uc3QgaW50ZXJ3aWtpVGVtcGxhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1pbnRlcndpa2lUZW1wbGF0ZXNdJyk7XG5cblx0aWYgKGludGVyd2lraUhpc3RvcnkpIHtcblx0XHRpbnRlcndpa2lIaXN0b3J5LmNoZWNrZWQgPSBmYWxzZTtcblx0fVxuXG5cdGlmIChpbnRlcndpa2lUZW1wbGF0ZXMpIHtcblx0XHRpbnRlcndpa2lUZW1wbGF0ZXMuY2hlY2tlZCA9IGZhbHNlO1xuXHR9XG5cblx0aWYgKHdnV2lraUlkID09PSAnemhxaXV3ZW5iYWlrZScpIHtcblx0XHRpZiAoaW50ZXJ3aWtpSGlzdG9yeSkge1xuXHRcdFx0aW50ZXJ3aWtpSGlzdG9yeS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGludGVyd2lraVRlbXBsYXRlcykge1xuXHRcdFx0aW50ZXJ3aWtpVGVtcGxhdGVzLmRpc2FibGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRm9ybUVsZW1lbnQ+KCcjbXctaW1wb3J0LWludGVyd2lraS1mb3JtJyk7XG5cblx0aWYgKGZvcm0pIHtcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudDogU3VibWl0RXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGlmICghaW50ZXJ3aWtpSGlzdG9yeSB8fCAhaW50ZXJ3aWtpSGlzdG9yeS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IE9PLnVpLmNvbmZpcm0oJ+aCqOaYr+WQpuimgeWvvOWFpeatpOmhtemdoueahOaJgOacieeJiOacrO+8nycpO1xuXHRcdFx0XHRpZiAoIWNvbmZpcm1lZCkge1xuXHRcdFx0XHRcdGludGVyd2lraUhpc3RvcnkuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpXG5cdFx0XHRcdC50aGVuKGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRpZiAoIWludGVyd2lraVRlbXBsYXRlcyB8fCAhaW50ZXJ3aWtpVGVtcGxhdGVzLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgY29uZmlybWVkID0gYXdhaXQgT08udWkuY29uZmlybSgn5oKo5piv5ZCm6KaB5a+85YWl5q2k6aG16Z2i5omA5YyF5ZCr55qE5omA5pyJ5qih5p2/5ZKM5YW25LuW6aG16Z2i77yfJyk7XG5cdFx0XHRcdFx0aWYgKCFjb25maXJtZWQpIHtcblx0XHRcdFx0XHRcdGludGVyd2lraVRlbXBsYXRlcy5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0Zm9ybS5zdWJtaXQoKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Zml4Q2hlY2tib3h9O1xuIiwgImNvbnN0IGZpeFN1bW1hcnkgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ0ltcG9ydCcpIHtcblx0XHRjb25zdCBkZWZhdWx0U3VtbWFyeSA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdFx0Y29uc3QgZGVmYXVsdEZpbGVJbXBvcnRTdW1tYXJ5ID0gYCR7ZGVmYXVsdFN1bW1hcnl977yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29YDtcblxuXHRcdC8vICNtdy1pbXBvcnQtdXBsb2FkLWZvcm1cblx0XHRjb25zdCBbdXNlck5hbWVQcmVmaXhJbnB1dF0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJbnB1dEVsZW1lbnQ+KFxuXHRcdFx0JyNtdy1pbXBvcnQtdXBsb2FkLWZvcm0gaW5wdXRbbmFtZT11c2VybmFtZVByZWZpeF0nXG5cdFx0KTtcblx0XHRpZiAodXNlck5hbWVQcmVmaXhJbnB1dCkge1xuXHRcdFx0dXNlck5hbWVQcmVmaXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcblx0XHRcdFx0Y29uc3QgW3VwbG9hZExvZ0NvbW1lbnRJbnB1dF0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJbnB1dEVsZW1lbnQ+KFxuXHRcdFx0XHRcdCcjbXctaW1wb3J0LXVwbG9hZC1mb3JtIGlucHV0W25hbWU9bG9nLWNvbW1lbnRdJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoIXVwbG9hZExvZ0NvbW1lbnRJbnB1dCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGltcG9ydFVwbG9hZFByZWZpeCA9IHVzZXJOYW1lUHJlZml4SW5wdXQ/LnZhbHVlO1xuXHRcdFx0XHR1cGxvYWRMb2dDb21tZW50SW5wdXQudmFsdWUgPSBg5a+85YWl6IeqW1ske2ltcG9ydFVwbG9hZFByZWZpeH06fOatpOe9keermV1d55qE5ZCM5ZCN6aG16Z2i77y7JHtpbXBvcnRVcGxvYWRQcmVmaXggPT09ICdjb21tb25zJyA/IGRlZmF1bHRGaWxlSW1wb3J0U3VtbWFyeSA6IGRlZmF1bHRTdW1tYXJ5fe+8vWA7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyAjbXctaW1wb3J0LWludGVyd2lraS1mb3JtXG5cdFx0Y29uc3QgW2ludGVyd2lraUxvZ0NvbW1lbnRJbnB1dF0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJbnB1dEVsZW1lbnQ+KFxuXHRcdFx0JyNtdy1pbXBvcnQtaW50ZXJ3aWtpLWZvcm0gaW5wdXRbbmFtZT1sb2ctY29tbWVudF0nXG5cdFx0KTtcblx0XHRjb25zdCBbaW50ZXJ3aWtpUHJlZml4U2VsZWN0XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTFNlbGVjdEVsZW1lbnQ+KFxuXHRcdFx0JyNtdy1pbXBvcnQtaW50ZXJ3aWtpLWZvcm0gc2VsZWN0W25hbWU9aW50ZXJ3aWtpXSdcblx0XHQpO1xuXG5cdFx0aWYgKGludGVyd2lraUxvZ0NvbW1lbnRJbnB1dCkge1xuXHRcdFx0aW50ZXJ3aWtpTG9nQ29tbWVudElucHV0LnZhbHVlID0gZGVmYXVsdFN1bW1hcnk7XG5cblx0XHRcdGlmIChpbnRlcndpa2lQcmVmaXhTZWxlY3QpIHtcblx0XHRcdFx0aW50ZXJ3aWtpUHJlZml4U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdFx0XHRzd2l0Y2ggKGludGVyd2lraVByZWZpeFNlbGVjdC52YWx1ZSkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnY29tbW9ucyc6XG5cdFx0XHRcdFx0XHRcdGludGVyd2lraUxvZ0NvbW1lbnRJbnB1dC52YWx1ZSA9IGDvvLske2RlZmF1bHRGaWxlSW1wb3J0U3VtbWFyeX3vvL1gO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdGludGVyd2lraUxvZ0NvbW1lbnRJbnB1dC52YWx1ZSA9IGDvvLske2RlZmF1bHRTdW1tYXJ5fe+8vWA7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gI2Fzc2lnbktub3duVXNlcnNcblx0XHRjb25zdCBhc3NpZ25Lbm93blVzZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1hc3NpZ25Lbm93blVzZXJzXScpO1xuXHRcdGlmIChhc3NpZ25Lbm93blVzZXJzLmxlbmd0aCkge1xuXHRcdFx0Zm9yIChjb25zdCBjaGVja0JveCBvZiBhc3NpZ25Lbm93blVzZXJzKSB7XG5cdFx0XHRcdGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtmaXhTdW1tYXJ5fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Zml4Q2hlY2tib3h9IGZyb20gJy4vbW9kdWxlcy9maXhDaGVja2JveCc7XG5pbXBvcnQge2ZpeFN1bW1hcnl9IGZyb20gJy4vbW9kdWxlcy9maXhTdW1tYXJ5JztcblxuKGZ1bmN0aW9uIHVzZXJKUygpOiB2b2lkIHtcblx0Y29uc3Qge2NvbmZpZ0tleX0gPSBPUFRJT05TO1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChjb25maWdLZXksIHRydWUpO1xuXG5cdC8qIOWPlua2iOWkjemAieahhiAqL1xuXHRmaXhDaGVja2JveCgpO1xuXHQvKiDkv67mlLnnvJbovpHmkZjopoEgKi9cblx0Zml4U3VtbWFyeSgpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCxpQkFBQTtFQUFBRSxXQUFBQSxNQUFBQTtFQUFBQyxTQUFBQSxNQUFBQztBQUFBLENBQUE7QUFDQyxJQUFBRixZQUFhO0FBRGQsSUFBQUUsa0JBQUE7RUFDQ0Y7QUFDRDs7QUNGQSxJQUFNRyxjQUFjQSxNQUFNO0FBQ3pCLFFBQU07SUFBQ0M7SUFBNEJDO0VBQVEsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUU3RCxNQUFJSiwrQkFBK0IsVUFBVTtBQUM1QztFQUNEO0FBRUEsUUFBTUssbUJBQW1CQyxTQUFTQyxjQUFnQyw4QkFBOEI7QUFDaEcsUUFBTUMscUJBQXFCRixTQUFTQyxjQUFnQyxnQ0FBZ0M7QUFFcEcsTUFBSUYsa0JBQWtCO0FBQ3JCQSxxQkFBaUJJLFVBQVU7RUFDNUI7QUFFQSxNQUFJRCxvQkFBb0I7QUFDdkJBLHVCQUFtQkMsVUFBVTtFQUM5QjtBQUVBLE1BQUlSLGFBQWEsaUJBQWlCO0FBQ2pDLFFBQUlJLGtC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LFNBQVNDLFNBQWU7QUFDeEIsUUFBTTtJQUFDakQsV0FBQWtEO0VBQVMsSUFBSXBEO0FBR3BCLE1BQUlRLEdBQUdDLE9BQU9DLElBQUkwQyxVQUFTLEdBQUc7QUFDN0I7RUFDRDtBQUVBNUMsS0FBR0MsT0FBTzRDLElBQUlELFlBQVcsSUFBSTtBQUc3Qi9DLGNBQVk7QUFFWnVCLGFBQVc7QUFDWixHQUFHOyIsCiAgIm5hbWVzIjogWyJvcHRpb25zX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiY29uZmlnS2V5IiwgImRlZmF1bHQiLCAib3B0aW9uc19kZWZhdWx0IiwgImZpeENoZWNrYm94IiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnV2lraUlkIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW50ZXJ3aWtpSGlzdG9yeSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImludGVyd2lraVRlbXBsYXRlcyIsICJjaGVja2VkIiwgImRpc2FibGVkIiwgImZvcm0iLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJjb25maXJtZWQiLCAiT08iLCAidWkiLCAiY29uZmlybSIsICJ0aGVuIiwgInN1Ym1pdCIsICJmaXhTdW1tYXJ5IiwgImRlZmF1bHRTdW1tYXJ5IiwgImRlZmF1bHRGaWxlSW1wb3J0U3VtbWFyeSIsICJjb25jYXQiLCAidXNlck5hbWVQcmVmaXhJbnB1dCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInVwbG9hZExvZ0NvbW1lbnRJbnB1dCIsICJpbXBvcnRVcGxvYWRQcmVmaXgiLCAidmFsdWUiLCAiaW50ZXJ3aWtpTG9nQ29tbWVudElucHV0IiwgImludGVyd2lraVByZWZpeFNlbGVjdCIsICJhc3NpZ25Lbm93blVzZXJzIiwgImxlbmd0aCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiY2hlY2tCb3giLCAiZXJyIiwgImUiLCAiZiIsICJ1c2VySlMiLCAiY29uZmlnS2V5MiIsICJzZXQiXQp9Cg==
