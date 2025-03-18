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
        if (interwikiHistory !== null && interwikiHistory !== void 0 && interwikiHistory.checked) {
          const confirmed = yield OO.ui.confirm("您是否要导入此页面的所有版本？");
          if (!confirmed) {
            interwikiHistory.checked = false;
          }
        }
      })().then(/* @__PURE__ */ _asyncToGenerator(function* () {
        if (interwikiTemplates !== null && interwikiTemplates !== void 0 && interwikiTemplates.checked) {
          const confirmed = yield OO.ui.confirm("您是否要导入此页面所包含的所有模板和其他页面？");
          if (!confirmed) {
            interwikiTemplates.checked = false;
          }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL0dyb3VwLXRyYW5zd2lraV9KUy9vcHRpb25zLmpzb24iLCAiLi4vLi4vc3JjL0dyb3VwLXRyYW5zd2lraV9KUy9tb2R1bGVzL2ZpeENoZWNrYm94LnRzIiwgIi4uLy4uL3NyYy9Hcm91cC10cmFuc3dpa2lfSlMvbW9kdWxlcy9maXhTdW1tYXJ5LnRzIiwgIi4uLy4uL3NyYy9Hcm91cC10cmFuc3dpa2lfSlMvR3JvdXAtdHJhbnN3aWtpX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUdyb3VwLXRyYW5zd2lraV9KU19fSW5pdGlhbGl6ZWRcIlxufVxuIiwgImNvbnN0IGZpeENoZWNrYm94ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnV2lraUlEfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdJbXBvcnQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaW50ZXJ3aWtpSGlzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9aW50ZXJ3aWtpSGlzdG9yeV0nKTtcblx0Y29uc3QgaW50ZXJ3aWtpVGVtcGxhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1pbnRlcndpa2lUZW1wbGF0ZXNdJyk7XG5cblx0aWYgKGludGVyd2lraUhpc3RvcnkpIHtcblx0XHRpbnRlcndpa2lIaXN0b3J5LmNoZWNrZWQgPSBmYWxzZTtcblx0fVxuXG5cdGlmIChpbnRlcndpa2lUZW1wbGF0ZXMpIHtcblx0XHRpbnRlcndpa2lUZW1wbGF0ZXMuY2hlY2tlZCA9IGZhbHNlO1xuXHR9XG5cblx0aWYgKHdnV2lraUlEID09PSAnemhxaXV3ZW5iYWlrZScpIHtcblx0XHRpZiAoaW50ZXJ3aWtpSGlzdG9yeSkge1xuXHRcdFx0aW50ZXJ3aWtpSGlzdG9yeS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGludGVyd2lraVRlbXBsYXRlcykge1xuXHRcdFx0aW50ZXJ3aWtpVGVtcGxhdGVzLmRpc2FibGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRm9ybUVsZW1lbnQ+KCcjbXctaW1wb3J0LWludGVyd2lraS1mb3JtJyk7XG5cblx0aWYgKGZvcm0pIHtcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudDogU3VibWl0RXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGlmIChpbnRlcndpa2lIaXN0b3J5Py5jaGVja2VkKSB7XG5cdFx0XHRcdFx0Y29uc3QgY29uZmlybWVkID0gYXdhaXQgT08udWkuY29uZmlybSgn5oKo5piv5ZCm6KaB5a+85YWl5q2k6aG16Z2i55qE5omA5pyJ54mI5pys77yfJyk7XG5cdFx0XHRcdFx0aWYgKCFjb25maXJtZWQpIHtcblx0XHRcdFx0XHRcdGludGVyd2lraUhpc3RvcnkuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSkoKVxuXHRcdFx0XHQudGhlbihhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGludGVyd2lraVRlbXBsYXRlcz8uY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgY29uZmlybWVkID0gYXdhaXQgT08udWkuY29uZmlybSgn5oKo5piv5ZCm6KaB5a+85YWl5q2k6aG16Z2i5omA5YyF5ZCr55qE5omA5pyJ5qih5p2/5ZKM5YW25LuW6aG16Z2i77yfJyk7XG5cdFx0XHRcdFx0XHRpZiAoIWNvbmZpcm1lZCkge1xuXHRcdFx0XHRcdFx0XHRpbnRlcndpa2lUZW1wbGF0ZXMuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdGZvcm0uc3VibWl0KCk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2ZpeENoZWNrYm94fTtcbiIsICJjb25zdCBmaXhTdW1tYXJ5ID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdJbXBvcnQnKSB7XG5cdFx0Y29uc3QgZGVmYXVsdFN1bW1hcnkgPSAn6aG16Z2i5paH5a2X5Y6f6K645Y+v77yaW1tjYy1ieS1zYTo0LjB8Q0MgQlktU0EgNC4wXV3vvJvkvZzogIXor7flj4Lop4HmnaXmupDpobXpnaLljoblj7InO1xuXHRcdGNvbnN0IGRlZmF1bHRGaWxlSW1wb3J0U3VtbWFyeSA9IGAke2RlZmF1bHRTdW1tYXJ5fe+8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vWA7XG5cblx0XHQvLyAjbXctaW1wb3J0LXVwbG9hZC1mb3JtXG5cdFx0Y29uc3QgdXNlck5hbWVQcmVmaXhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXG5cdFx0XHQnI213LWltcG9ydC11cGxvYWQtZm9ybSBpbnB1dFtuYW1lPXVzZXJuYW1lUHJlZml4XSdcblx0XHQpO1xuXG5cdFx0aWYgKHVzZXJOYW1lUHJlZml4SW5wdXQpIHtcblx0XHRcdHVzZXJOYW1lUHJlZml4SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHVwbG9hZExvZ0NvbW1lbnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXG5cdFx0XHRcdFx0JyNtdy1pbXBvcnQtdXBsb2FkLWZvcm0gaW5wdXRbbmFtZT1sb2ctY29tbWVudF0nXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0aWYgKHVwbG9hZExvZ0NvbW1lbnRJbnB1dCkge1xuXHRcdFx0XHRcdGNvbnN0IGltcG9ydFVwbG9hZFByZWZpeCA9IHVzZXJOYW1lUHJlZml4SW5wdXQ/LnZhbHVlO1xuXHRcdFx0XHRcdHVwbG9hZExvZ0NvbW1lbnRJbnB1dC52YWx1ZSA9IGDlr7zlhaXoh6pbWyR7aW1wb3J0VXBsb2FkUHJlZml4fTp85q2k572R56uZXV3nmoTlkIzlkI3pobXpnaLvvLske2ltcG9ydFVwbG9hZFByZWZpeCA9PT0gJ2NvbW1vbnMnID8gZGVmYXVsdEZpbGVJbXBvcnRTdW1tYXJ5IDogZGVmYXVsdFN1bW1hcnl977y9YDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gI213LWltcG9ydC1pbnRlcndpa2ktZm9ybVxuXHRcdGNvbnN0IGludGVyd2lraUxvZ0NvbW1lbnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXG5cdFx0XHQnI213LWltcG9ydC1pbnRlcndpa2ktZm9ybSBpbnB1dFtuYW1lPWxvZy1jb21tZW50XSdcblx0XHQpO1xuXG5cdFx0aWYgKGludGVyd2lraUxvZ0NvbW1lbnRJbnB1dCkge1xuXHRcdFx0aW50ZXJ3aWtpTG9nQ29tbWVudElucHV0LnZhbHVlID0gZGVmYXVsdFN1bW1hcnk7XG5cblx0XHRcdGNvbnN0IGludGVyd2lraVByZWZpeFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KFxuXHRcdFx0XHQnI213LWltcG9ydC1pbnRlcndpa2ktZm9ybSBzZWxlY3RbbmFtZT1pbnRlcndpa2ldJ1xuXHRcdFx0KTtcblxuXHRcdFx0aWYgKGludGVyd2lraVByZWZpeFNlbGVjdCkge1xuXHRcdFx0XHRpbnRlcndpa2lQcmVmaXhTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdHN3aXRjaCAoaW50ZXJ3aWtpUHJlZml4U2VsZWN0LnZhbHVlKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdjb21tb25zJzpcblx0XHRcdFx0XHRcdFx0aW50ZXJ3aWtpTG9nQ29tbWVudElucHV0LnZhbHVlID0gYO+8uyR7ZGVmYXVsdEZpbGVJbXBvcnRTdW1tYXJ5fe+8vWA7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0aW50ZXJ3aWtpTG9nQ29tbWVudElucHV0LnZhbHVlID0gYO+8uyR7ZGVmYXVsdFN1bW1hcnl977y9YDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyAjYXNzaWduS25vd25Vc2Vyc1xuXHRcdGNvbnN0IGFzc2lnbktub3duVXNlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPWFzc2lnbktub3duVXNlcnNdJyk7XG5cdFx0aWYgKGFzc2lnbktub3duVXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGNoZWNrQm94IG9mIGFzc2lnbktub3duVXNlcnMpIHtcblx0XHRcdFx0Y2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2ZpeFN1bW1hcnl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtmaXhDaGVja2JveH0gZnJvbSAnLi9tb2R1bGVzL2ZpeENoZWNrYm94JztcbmltcG9ydCB7Zml4U3VtbWFyeX0gZnJvbSAnLi9tb2R1bGVzL2ZpeFN1bW1hcnknO1xuXG4oZnVuY3Rpb24gdXNlckpTKCk6IHZvaWQge1xuXHRjb25zdCB7Y29uZmlnS2V5fSA9IE9QVElPTlM7XG5cblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChjb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KGNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Lyog5Y+W5raI5aSN6YCJ5qGGICovXG5cdGZpeENoZWNrYm94KCk7XG5cdC8qIOS/ruaUuee8lui+keaRmOimgSAqL1xuXHRmaXhTdW1tYXJ5KCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCxpQkFBQTtFQUFBRSxXQUFBQSxNQUFBQTtFQUFBQyxTQUFBQSxNQUFBQztBQUFBLENBQUE7QUFDQyxJQUFBRixZQUFhO0FBRGQsSUFBQUUsa0JBQUE7RUFDQ0Y7QUFDRDs7QUNGQSxJQUFNRyxjQUFjQSxNQUFNO0FBQ3pCLFFBQU07SUFBQ0M7SUFBNEJDO0VBQVEsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUU3RCxNQUFJSiwrQkFBK0IsVUFBVTtBQUM1QztFQUNEO0FBRUEsUUFBTUssbUJBQW1CQyxTQUFTQyxjQUFnQyw4QkFBOEI7QUFDaEcsUUFBTUMscUJBQXFCRixTQUFTQyxjQUFnQyxnQ0FBZ0M7QUFFcEcsTUFBSUYsa0JBQWtCO0FBQ3JCQSxxQkFBaUJJLFVBQVU7RUFDNUI7QUFFQSxNQUFJRCxvQkFBb0I7QUFDdkJBLHVCQUFtQkMsVUFBVTtFQUM5QjtBQUVBLE1BQUlSLGFBQWEsaUJBQWlCO0FBQ2pDLFFBQUlJLGtCQUFrQjtBQUNyQkEsdUJBQWlCSyxXQUFXO0lBQzdCO0FBRUEsUUFBSUYsb0JBQW9CO0FBQ3ZCQSx5QkFBbUJFLFdBQVc7SUFDL0I7RUFDRDtBQUVBLFFBQU1DLE9B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QyxjQUFZO0FBRVp1QixhQUFXO0FBQ1osR0FBRzsiLAogICJuYW1lcyI6IFsib3B0aW9uc19leHBvcnRzIiwgIl9fZXhwb3J0IiwgImNvbmZpZ0tleSIsICJkZWZhdWx0IiwgIm9wdGlvbnNfZGVmYXVsdCIsICJmaXhDaGVja2JveCIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z1dpa2lJRCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImludGVyd2lraUhpc3RvcnkiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJpbnRlcndpa2lUZW1wbGF0ZXMiLCAiY2hlY2tlZCIsICJkaXNhYmxlZCIsICJmb3JtIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiY29uZmlybWVkIiwgIk9PIiwgInVpIiwgImNvbmZpcm0iLCAidGhlbiIsICJzdWJtaXQiLCAiZml4U3VtbWFyeSIsICJkZWZhdWx0U3VtbWFyeSIsICJkZWZhdWx0RmlsZUltcG9ydFN1bW1hcnkiLCAiY29uY2F0IiwgInVzZXJOYW1lUHJlZml4SW5wdXQiLCAidXBsb2FkTG9nQ29tbWVudElucHV0IiwgImltcG9ydFVwbG9hZFByZWZpeCIsICJ2YWx1ZSIsICJpbnRlcndpa2lMb2dDb21tZW50SW5wdXQiLCAiaW50ZXJ3aWtpUHJlZml4U2VsZWN0IiwgImFzc2lnbktub3duVXNlcnMiLCAicXVlcnlTZWxlY3RvckFsbCIsICJsZW5ndGgiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImNoZWNrQm94IiwgImVyciIsICJlIiwgImYiLCAidXNlckpTIiwgImNvbmZpZ0tleTIiLCAic2V0Il0KfQo=
