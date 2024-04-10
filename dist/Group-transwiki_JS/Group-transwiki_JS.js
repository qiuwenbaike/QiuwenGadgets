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
var fixSummary = ($body) => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  switch (wgCanonicalSpecialPageName) {
    case "FileImporter-SpecialPage":
      $body.find("input[name=intendedRevisionSummary]").val("导入自[[commons:File:".concat($body.find("h2.mw-importfile-header-title").html(), "|此处]]［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；文件许可请参见页面描述］"));
      break;
    case "Import": {
      const userNamePrefixInput = document.querySelectorAll("#mw-import-upload-form input[name=usernamePrefix]")[0];
      userNamePrefixInput.addEventListener("input", () => {
        const logCommentInput = document.querySelectorAll("#mw-import-upload-form input[name=log-comment]")[0];
        const importUploadPrefix = userNamePrefixInput === null || userNamePrefixInput === void 0 ? void 0 : userNamePrefixInput.value;
        const newValue = "导入自[[".concat(importUploadPrefix, ":|此网站]]的同名页面［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]］");
        logCommentInput.value = newValue;
      });
      $body.find("#mw-import-interwiki-form input[name=log-comment]").val("［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史］");
      $body.find("input[name=assignKnownUsers]").prop("checked", true);
      break;
    }
  }
};
//! src/Group-transwiki_JS/Group-transwiki_JS.ts
var import_ext_gadget = require("ext.gadget.Util");
(function userJS() {
  const {
    configKey: configKey2
  } = options_exports;
  if (mw.config.get(configKey2)) {
    return;
  }
  mw.config.set(configKey2, true);
  void (0, import_ext_gadget.getBody)().then(($body) => {
    fixCheckbox();
    fixSummary($body);
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXRyYW5zd2lraV9KUy9vcHRpb25zLmpzb24iLCAic3JjL0dyb3VwLXRyYW5zd2lraV9KUy9tb2R1bGVzL2ZpeENoZWNrYm94LnRzIiwgInNyYy9Hcm91cC10cmFuc3dpa2lfSlMvbW9kdWxlcy9maXhTdW1tYXJ5LnRzIiwgInNyYy9Hcm91cC10cmFuc3dpa2lfSlMvR3JvdXAtdHJhbnN3aWtpX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUdyb3VwLXRyYW5zd2lraV9KU19fSW5pdGlhbGl6ZWRcIlxufVxuIiwgImNvbnN0IGZpeENoZWNrYm94ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnV2lraUlkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdJbXBvcnQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaW50ZXJ3aWtpSGlzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9aW50ZXJ3aWtpSGlzdG9yeV0nKTtcblx0Y29uc3QgaW50ZXJ3aWtpVGVtcGxhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1pbnRlcndpa2lUZW1wbGF0ZXNdJyk7XG5cblx0aWYgKGludGVyd2lraUhpc3RvcnkpIHtcblx0XHRpbnRlcndpa2lIaXN0b3J5LmNoZWNrZWQgPSBmYWxzZTtcblx0fVxuXG5cdGlmIChpbnRlcndpa2lUZW1wbGF0ZXMpIHtcblx0XHRpbnRlcndpa2lUZW1wbGF0ZXMuY2hlY2tlZCA9IGZhbHNlO1xuXHR9XG5cblx0aWYgKHdnV2lraUlkID09PSAnemhxaXV3ZW5iYWlrZScpIHtcblx0XHRpZiAoaW50ZXJ3aWtpSGlzdG9yeSkge1xuXHRcdFx0aW50ZXJ3aWtpSGlzdG9yeS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGludGVyd2lraVRlbXBsYXRlcykge1xuXHRcdFx0aW50ZXJ3aWtpVGVtcGxhdGVzLmRpc2FibGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRm9ybUVsZW1lbnQ+KCcjbXctaW1wb3J0LWludGVyd2lraS1mb3JtJyk7XG5cblx0aWYgKGZvcm0pIHtcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudDogU3VibWl0RXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGlmICghaW50ZXJ3aWtpSGlzdG9yeSB8fCAhaW50ZXJ3aWtpSGlzdG9yeS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IE9PLnVpLmNvbmZpcm0oJ+aCqOaYr+WQpuimgeWvvOWFpeatpOmhtemdoueahOaJgOacieeJiOacrO+8nycpO1xuXHRcdFx0XHRpZiAoIWNvbmZpcm1lZCkge1xuXHRcdFx0XHRcdGludGVyd2lraUhpc3RvcnkuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpXG5cdFx0XHRcdC50aGVuKGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRpZiAoIWludGVyd2lraVRlbXBsYXRlcyB8fCAhaW50ZXJ3aWtpVGVtcGxhdGVzLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgY29uZmlybWVkID0gYXdhaXQgT08udWkuY29uZmlybSgn5oKo5piv5ZCm6KaB5a+85YWl5q2k6aG16Z2i5omA5YyF5ZCr55qE5omA5pyJ5qih5p2/5ZKM5YW25LuW6aG16Z2i77yfJyk7XG5cdFx0XHRcdFx0aWYgKCFjb25maXJtZWQpIHtcblx0XHRcdFx0XHRcdGludGVyd2lraVRlbXBsYXRlcy5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0Zm9ybS5zdWJtaXQoKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Zml4Q2hlY2tib3h9O1xuIiwgImNvbnN0IGZpeFN1bW1hcnkgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHN3aXRjaCAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUpIHtcblx0XHRjYXNlICdGaWxlSW1wb3J0ZXItU3BlY2lhbFBhZ2UnOlxuXHRcdFx0JGJvZHlcblx0XHRcdFx0LmZpbmQoJ2lucHV0W25hbWU9aW50ZW5kZWRSZXZpc2lvblN1bW1hcnldJylcblx0XHRcdFx0LnZhbChcblx0XHRcdFx0XHRg5a+85YWl6IeqW1tjb21tb25zOkZpbGU6JHskYm9keVxuXHRcdFx0XHRcdFx0LmZpbmQoJ2gyLm13LWltcG9ydGZpbGUtaGVhZGVyLXRpdGxlJylcblx0XHRcdFx0XHRcdC5odG1sKCl9fOatpOWkhF1d77y76aG16Z2i5paH5a2X5Y6f6K645Y+v77yaW1tjYy1ieS1zYTo0LjB8Q0MgQlktU0EgNC4wXV3vvJvmlofku7borrjlj6/or7flj4Lop4HpobXpnaLmj4/ov7DvvL1gXG5cdFx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdJbXBvcnQnOiB7XG5cdFx0XHQvLyAjbXctaW1wb3J0LXVwbG9hZC1mb3JtXG5cdFx0XHRjb25zdCB1c2VyTmFtZVByZWZpeElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdFx0JyNtdy1pbXBvcnQtdXBsb2FkLWZvcm0gaW5wdXRbbmFtZT11c2VybmFtZVByZWZpeF0nXG5cdFx0XHQpWzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0XHR1c2VyTmFtZVByZWZpeElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBsb2dDb21tZW50SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0XHRcdCcjbXctaW1wb3J0LXVwbG9hZC1mb3JtIGlucHV0W25hbWU9bG9nLWNvbW1lbnRdJ1xuXHRcdFx0XHQpWzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0XHRcdGNvbnN0IGltcG9ydFVwbG9hZFByZWZpeCA9IHVzZXJOYW1lUHJlZml4SW5wdXQ/LnZhbHVlO1xuXHRcdFx0XHRjb25zdCBuZXdWYWx1ZSA9IGDlr7zlhaXoh6pbWyR7aW1wb3J0VXBsb2FkUHJlZml4fTp85q2k572R56uZXV3nmoTlkIzlkI3pobXpnaLvvLvpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8vWA7XG5cdFx0XHRcdGxvZ0NvbW1lbnRJbnB1dC52YWx1ZSA9IG5ld1ZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0XHQvLyAjbXctaW1wb3J0LWludGVyd2lraS1mb3JtXG5cdFx0XHQkYm9keVxuXHRcdFx0XHQuZmluZCgnI213LWltcG9ydC1pbnRlcndpa2ktZm9ybSBpbnB1dFtuYW1lPWxvZy1jb21tZW50XScpXG5cdFx0XHRcdC52YWwoJ++8u+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+y77y9Jyk7XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPWFzc2lnbktub3duVXNlcnNdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2ZpeFN1bW1hcnl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtmaXhDaGVja2JveH0gZnJvbSAnLi9tb2R1bGVzL2ZpeENoZWNrYm94JztcbmltcG9ydCB7Zml4U3VtbWFyeX0gZnJvbSAnLi9tb2R1bGVzL2ZpeFN1bW1hcnknO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4oZnVuY3Rpb24gdXNlckpTKCk6IHZvaWQge1xuXHRjb25zdCB7Y29uZmlnS2V5fSA9IE9QVElPTlM7XG5cblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChjb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KGNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0dm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0Lyog5Y+W5raI5aSN6YCJ5qGGICovXG5cdFx0Zml4Q2hlY2tib3goKTtcblx0XHQvKiDkv67mlLnnvJbovpHmkZjopoEgKi9cblx0XHRmaXhTdW1tYXJ5KCRib2R5KTtcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCxpQkFBQTtFQUFBRSxXQUFBQSxNQUFBQTtFQUFBQyxTQUFBQSxNQUFBQztBQUFBLENBQUE7QUFDQyxJQUFBRixZQUFhO0FBRGQsSUFBQUUsa0JBQUE7RUFDQ0Y7QUFDRDs7QUNGQSxJQUFNRyxjQUFjQSxNQUFNO0FBQ3pCLFFBQU07SUFBQ0M7SUFBNEJDO0VBQVEsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUU3RCxNQUFJSiwrQkFBK0IsVUFBVTtBQUM1QztFQUNEO0FBRUEsUUFBTUssbUJBQW1CQyxTQUFTQyxjQUFnQyw4QkFBOEI7QUFDaEcsUUFBTUMscUJBQXFCRixTQUFTQyxjQUFnQyxnQ0FBZ0M7QUFFcEcsTUFBSUYsa0JBQWtCO0FBQ3JCQSxxQkFBaUJJLFVBQVU7RUFDNUI7QUFFQSxNQUFJRCxvQkFBb0I7QUFDdkJBLHVCQUFtQkMsVUFBVTtFQUM5QjtBQUVBLE1BQUlSLGFBQWEsaUJBQWlCO0FBQ2pDLFFBQUlJLGtCQUFrQjtBQUNyQkEsdUJBQWlCSyxXQUFXO0lBQzdCO0FBRUEsUUFBSUYsb0JBQW9CO0FBQ3ZCQSx5QkFBbUJFLFdBQVc7SUFDL0I7RUFDRDtBQUVBLFFBQU1DLE9BQU9MLFNBQVNDLGNBQStCLDJCQUEyQjtBQUVoRixNQUFJSSxNQUFNO0FBQ1RBLFNBQUtDLGlCQUFpQixVQUFXQyxXQUE2QjtBQUM3REEsWUFBTUMsZUFBZTtBQUNyQixXQUFBQyxrQkFBTSxhQUFZO0FBQ2pCLFlBQUksQ0FBQ1Ysb0JBQW9CLENBQUNBLGlCQUFpQkksU0FBUztBQUNuRDtRQUNEO0FBQ0EsY0FBTU8sWUFBQSxNQUFrQkMsR0FBR0MsR0FBR0MsUUFBUSxpQkFBaUI7QUFDdkQsWUFBSSxDQUFDSCxXQUFXO0FBQ2ZYLDJCQUFpQkksVUFBVTtRQUM1QjtNQUNELENBQUEsRUFBRyxFQUNEVyxLQUFBTCxrQ0FBSyxhQUFZO0FBQ2pCLFlBQUksQ0FBQ1Asc0JBQXNCLENBQUNBLG1CQUFtQkMsU0FBUztBQUN2RDtRQUNEO0FBQ0EsY0FBTU8sWUFBQSxNQUFrQkMsR0FBR0MsR0FBR0MsUUFBUSx5QkFBeUI7QUFDL0QsWUFBSSxDQUFDSCxXQUFXO0FBQ2ZSLDZCQUFtQkMsVUFBVTtRQUM5QjtNQUNELENBQUMsQ0FBQSxFQUNBVyxLQUFLLE1BQU07QUFDWFQsYUFBS1UsT0FBTztNQUNiLENBQUM7SUFDSCxDQUFDO0VBQ0Y7QUFDRDs7QUN4REEsSUFBTUMsYUFBY0MsV0FBeUM7QUFDNUQsUUFBTTtJQUFDdkI7RUFBMEIsSUFBSUUsR0FBR0MsT0FBT0MsSUFBSTtBQUNuRCxVQUFRSiw0QkFBQTtJQUNQLEtBQUs7QUFDSnVCLFlBQ0VDLEtBQUsscUNBQXFDLEVBQzFDQyxJQUFBLHFCQUFBQyxPQUNxQkgsTUFDbkJDLEtBQUssK0JBQStCLEVBQ3BDRyxLQUFLLEdBQUMsMERBQUEsQ0FDVDtBQUNEO0lBQ0QsS0FBSyxVQUFVO0FBRWQsWUFBTUMsc0JBQXNCdEIsU0FBU3VCLGlCQUNwQyxtREFDRCxFQUFFLENBQUM7QUFDSEQsMEJBQW9CaEIsaUJBQWlCLFNBQVMsTUFBTTtBQUNuRCxjQUFNa0Isa0JBQWtCeEIsU0FBU3VCLGlCQUNoQyxnREFDRCxFQUFFLENBQUM7QUFDSCxjQUFNRSxxQkFBcUJILHdCQUFBLFFBQUFBLHdCQUFBLFNBQUEsU0FBQUEsb0JBQXFCSTtBQUNoRCxjQUFNQyxXQUFBLFFBQUFQLE9BQW1CSyxvQkFBa0IscURBQUE7QUFDM0NELHdCQUFnQkUsUUFBUUM7TUFDekIsQ0FBQztBQUVEVixZQUNFQyxLQUFLLG1EQUFtRCxFQUN4REMsSUFBSSxxREFBcUQ7QUFDM0RGLFlBQU1DLEtBQUssOEJBQThCLEVBQUVVLEtBQUssV0FBVyxJQUFJO0FBQy9EO0lBQ0Q7RUFDRDtBQUNEOztBQzlCQSxJQUFBQyxvQkFBc0JDLFFBQUEsaUJBQUE7Q0FFckIsU0FBU0MsU0FBZTtBQUN4QixRQUFNO0lBQUN6QyxXQUFBMEM7RUFBUyxJQUFJNUM7QUFHcEIsTUFBSVEsR0FBR0MsT0FBT0MsSUFBSWtDLFVBQVMsR0FBRztBQUM3QjtFQUNEO0FBRUFwQyxLQUFHQyxPQUFPb0MsSUFBSUQsWUFBVyxJQUFJO0FBRTdCLFFBQUEsR0FBS0gsa0JBQUFLLFNBQVEsRUFBRXBCLEtBQU1HLFdBQXlDO0FBRTdEeEIsZ0JBQVk7QUFFWnVCLGVBQVdDLEtBQUs7RUFDakIsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbIm9wdGlvbnNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJjb25maWdLZXkiLCAiZGVmYXVsdCIsICJvcHRpb25zX2RlZmF1bHQiLCAiZml4Q2hlY2tib3giLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dXaWtpSWQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbnRlcndpa2lIaXN0b3J5IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiaW50ZXJ3aWtpVGVtcGxhdGVzIiwgImNoZWNrZWQiLCAiZGlzYWJsZWQiLCAiZm9ybSIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImNvbmZpcm1lZCIsICJPTyIsICJ1aSIsICJjb25maXJtIiwgInRoZW4iLCAic3VibWl0IiwgImZpeFN1bW1hcnkiLCAiJGJvZHkiLCAiZmluZCIsICJ2YWwiLCAiY29uY2F0IiwgImh0bWwiLCAidXNlck5hbWVQcmVmaXhJbnB1dCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImxvZ0NvbW1lbnRJbnB1dCIsICJpbXBvcnRVcGxvYWRQcmVmaXgiLCAidmFsdWUiLCAibmV3VmFsdWUiLCAicHJvcCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgInVzZXJKUyIsICJjb25maWdLZXkyIiwgInNldCIsICJnZXRCb2R5Il0KfQo=
