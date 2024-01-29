/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-rollback-summary.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/RollbackSummary}
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

// dist/RollbackSummary/RollbackSummary.js
//! src/RollbackSummary/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.FilterAlteredClicks");
//! src/RollbackSummary/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Prompt: (0, import_ext_gadget.localize)({
      en: "Please enter a custom rollback summary (leave blank to use the system default summary)",
      "zh-hans": "请输入自定义回退摘要（留空则使用系统默认摘要）",
      "zh-hant": "請輸入自定義回退摘要（留空則使用系統預設摘要）"
    }),
    "rollback-summary-custom": (0, import_ext_gadget.localize)({
      "zh-hans": "回退[[Special:Contribs/$1|$1]]（[[User talk:$1|对话]]）的编辑：",
      "zh-hant": "回退[[Special:Contribs/$1|$1]]（[[User talk:$1|對話]]）的編輯："
    }),
    "rollback-summary-nouser": (0, import_ext_gadget.localize)({
      "zh-hans": "回退已隐藏用户的编辑：：",
      "zh-hant": "回退已隱藏用戶的編輯：",
      "zh-tw": "回退已隱藏使用者的編輯：："
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/RollbackSummary/modules/core.ts
var updateLinks = ($content) => {
  const $body = $content.parents("body");
  const $mwRollbackLinkA = $body.find(".mw-rollback-link a");
  $mwRollbackLinkA.off("click");
  $mwRollbackLinkA.on("click", (0, import_ext_gadget2.filterAlteredClicks)(function(event) {
    event.preventDefault();
    let {
      href
    } = this;
    let summary = prompt(getMessage("Prompt"));
    if (summary === null) {
    } else if (summary === "") {
      location.assign(href);
    } else {
      const username = mw.util.getParamValue("from", href);
      if (username) {
        summary = getMessage("rollback-summary-custom").replace("$1", username) + summary;
      } else {
        summary = getMessage("rollback-summary-nouser") + summary;
      }
      href += "&summary=".concat(encodeURIComponent(summary));
      location.assign(href);
    }
  }));
  $mwRollbackLinkA.css("color", "#099");
};
var rollbackSummary = () => {
  mw.hook("wikipage.content").add(($content) => {
    updateLinks($content);
  });
};
//! src/RollbackSummary/RollbackSummary.ts
$(rollbackSummary);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JvbGxiYWNrU3VtbWFyeS9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1JvbGxiYWNrU3VtbWFyeS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JvbGxiYWNrU3VtbWFyeS9Sb2xsYmFja1N1bW1hcnkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZmlsdGVyQWx0ZXJlZENsaWNrc30gZnJvbSAnZXh0LmdhZGdldC5GaWx0ZXJBbHRlcmVkQ2xpY2tzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgdXBkYXRlTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkY29udGVudC5wYXJlbnRzKCdib2R5Jyk7XG5cdGNvbnN0ICRtd1JvbGxiYWNrTGlua0E6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignLm13LXJvbGxiYWNrLWxpbmsgYScpO1xuXHQkbXdSb2xsYmFja0xpbmtBLm9mZignY2xpY2snKTtcblx0JG13Um9sbGJhY2tMaW5rQS5vbihcblx0XHQnY2xpY2snLFxuXHRcdGZpbHRlckFsdGVyZWRDbGlja3MoZnVuY3Rpb24gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGxldCB7aHJlZn0gPSB0aGlzO1xuXHRcdFx0bGV0IHN1bW1hcnk6IHN0cmluZyB8IG51bGwgPSBwcm9tcHQoZ2V0TWVzc2FnZSgnUHJvbXB0JykpO1xuXHRcdFx0aWYgKHN1bW1hcnkgPT09IG51bGwpIHtcblx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdH0gZWxzZSBpZiAoc3VtbWFyeSA9PT0gJycpIHtcblx0XHRcdFx0bG9jYXRpb24uYXNzaWduKGhyZWYpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2Zyb20nLCBocmVmKTtcblx0XHRcdFx0aWYgKHVzZXJuYW1lKSB7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IGdldE1lc3NhZ2UoJ3JvbGxiYWNrLXN1bW1hcnktY3VzdG9tJykucmVwbGFjZSgnJDEnLCB1c2VybmFtZSkgKyBzdW1tYXJ5O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBnZXRNZXNzYWdlKCdyb2xsYmFjay1zdW1tYXJ5LW5vdXNlcicpICsgc3VtbWFyeTtcblx0XHRcdFx0fVxuXHRcdFx0XHRocmVmICs9IGAmc3VtbWFyeT0ke2VuY29kZVVSSUNvbXBvbmVudChzdW1tYXJ5KX1gO1xuXHRcdFx0XHRsb2NhdGlvbi5hc3NpZ24oaHJlZik7XG5cdFx0XHR9XG5cdFx0fSlcblx0KTtcblx0JG13Um9sbGJhY2tMaW5rQS5jc3MoJ2NvbG9yJywgJyMwOTknKTtcbn07XG5cbmV4cG9ydCBjb25zdCByb2xsYmFja1N1bW1hcnkgPSAoKTogdm9pZCA9PiB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KTogdm9pZCA9PiB7XG5cdFx0dXBkYXRlTGlua3MoJGNvbnRlbnQpO1xuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFByb21wdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQbGVhc2UgZW50ZXIgYSBjdXN0b20gcm9sbGJhY2sgc3VtbWFyeSAobGVhdmUgYmxhbmsgdG8gdXNlIHRoZSBzeXN0ZW0gZGVmYXVsdCBzdW1tYXJ5KScsXG5cdFx0XHQnemgtaGFucyc6ICfor7fovpPlhaXoh6rlrprkuYnlm57pgIDmkZjopoHvvIjnlZnnqbrliJnkvb/nlKjns7vnu5/pu5jorqTmkZjopoHvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6Ly45YWl6Ieq5a6a576p5Zue6YCA5pGY6KaB77yI55WZ56m65YmH5L2/55So57O757Wx6aCQ6Kit5pGY6KaB77yJJyxcblx0XHR9KSxcblx0XHQncm9sbGJhY2stc3VtbWFyeS1jdXN0b20nOiBsb2NhbGl6ZSh7XG5cdFx0XHQnemgtaGFucyc6ICflm57pgIBbW1NwZWNpYWw6Q29udHJpYnMvJDF8JDFdXe+8iFtbVXNlciB0YWxrOiQxfOWvueivnV1d77yJ55qE57yW6L6R77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WbnumAgFtbU3BlY2lhbDpDb250cmlicy8kMXwkMV1d77yIW1tVc2VyIHRhbGs6JDF85bCN6KmxXV3vvInnmoTnt6jovK/vvJonLFxuXHRcdH0pLFxuXHRcdCdyb2xsYmFjay1zdW1tYXJ5LW5vdXNlcic6IGxvY2FsaXplKHtcblx0XHRcdCd6aC1oYW5zJzogJ+WbnumAgOW3sumakOiXj+eUqOaIt+eahOe8lui+ke+8mu+8micsXG5cdFx0XHQnemgtaGFudCc6ICflm57pgIDlt7LpmrHol4/nlKjmiLbnmoTnt6jovK/vvJonLFxuXHRcdFx0J3poLXR3JzogJ+WbnumAgOW3sumaseiXj+S9v+eUqOiAheeahOe3qOi8r++8mu+8micsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7cm9sbGJhY2tTdW1tYXJ5fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbiQocm9sbGJhY2tTdW1tYXJ5KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFrQ0MsUUFBQSxnQ0FBQTs7QUNBbEMsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUYsa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCw0QkFBQSxHQUEyQkosa0JBQUFHLFVBQVM7TUFDbkMsV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsNEJBQUEsR0FBMkJILGtCQUFBRyxVQUFTO01BQ25DLFdBQVc7TUFDWCxXQUFXO01BQ1gsU0FBUztJQUNWLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUUsZUFBZUosZ0JBQWdCO0FBRXJDLElBQU1LLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEdEJBLElBQU1DLGNBQWVDLGNBQTJCO0FBQy9DLFFBQU1DLFFBQWlDRCxTQUFTRSxRQUFRLE1BQU07QUFDOUQsUUFBTUMsbUJBQThDRixNQUFNRyxLQUF3QixxQkFBcUI7QUFDdkdELG1CQUFpQkUsSUFBSSxPQUFPO0FBQzVCRixtQkFBaUJHLEdBQ2hCLFVBQUEsR0FDQWpCLG1CQUFBa0IscUJBQW9CLFNBQVVDLE9BQWdDO0FBQzdEQSxVQUFNQyxlQUFlO0FBQ3JCLFFBQUk7TUFBQ0M7SUFBSSxJQUFJO0FBQ2IsUUFBSUMsVUFBeUJDLE9BQU9mLFdBQVcsUUFBUSxDQUFDO0FBQ3hELFFBQUljLFlBQVksTUFBTTtJQUV0QixXQUFXQSxZQUFZLElBQUk7QUFDMUJFLGVBQVNDLE9BQU9KLElBQUk7SUFDckIsT0FBTztBQUNOLFlBQU1LLFdBQTBCQyxHQUFHQyxLQUFLQyxjQUFjLFFBQVFSLElBQUk7QUFDbEUsVUFBSUssVUFBVTtBQUNiSixrQkFBVWQsV0FBVyx5QkFBeUIsRUFBRXNCLFFBQVEsTUFBTUosUUFBUSxJQUFJSjtNQUMzRSxPQUFPO0FBQ05BLGtCQUFVZCxXQUFXLHlCQUF5QixJQUFJYztNQUNuRDtBQUNBRCxjQUFBLFlBQUFVLE9BQW9CQyxtQkFBbUJWLE9BQU8sQ0FBQztBQUMvQ0UsZUFBU0MsT0FBT0osSUFBSTtJQUNyQjtFQUNELENBQUMsQ0FDRjtBQUNBUCxtQkFBaUJtQixJQUFJLFNBQVMsTUFBTTtBQUNyQztBQUVPLElBQU1DLGtCQUFrQkEsTUFBWTtBQUMxQ1AsS0FBR1EsS0FBSyxrQkFBa0IsRUFBRUMsSUFBS3pCLGNBQW1CO0FBQ25ERCxnQkFBWUMsUUFBUTtFQUNyQixDQUFDO0FBQ0Y7O0FFbENBMEIsRUFBRUgsZUFBZTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlByb21wdCIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAidXBkYXRlTGlua3MiLCAiJGNvbnRlbnQiLCAiJGJvZHkiLCAicGFyZW50cyIsICIkbXdSb2xsYmFja0xpbmtBIiwgImZpbmQiLCAib2ZmIiwgIm9uIiwgImZpbHRlckFsdGVyZWRDbGlja3MiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiaHJlZiIsICJzdW1tYXJ5IiwgInByb21wdCIsICJsb2NhdGlvbiIsICJhc3NpZ24iLCAidXNlcm5hbWUiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgInJlcGxhY2UiLCAiY29uY2F0IiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJjc3MiLCAicm9sbGJhY2tTdW1tYXJ5IiwgImhvb2siLCAiYWRkIiwgIiQiXQp9Cg==
