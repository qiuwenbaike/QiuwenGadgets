/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:WhitePhosphorus/js/PagePatroller.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PagePatroller}
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

// dist/PagePatroller/PagePatroller.js
//! src/PagePatroller/modules/core.ts
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
var import_ext_gadget = require("ext.gadget.Util");
var pagePatroller = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    const api = (0, import_ext_gadget.initMwApi)("PagePatroller/2.0");
    const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
    const loading = window.wgULS("正在加载此页面的巡查者……", "正在加載此頁面的巡查者……");
    let $patroller;
    if (mw.config.get("skin") === "citizen") {
      $patroller = $("<section>").attr("id", "footer-info-patroller").addClass("page-info__item").text(loading);
    } else if (document.querySelector("#footer-info")) {
      $patroller = $("<li>").attr("id", "footer-info-patroller").text(loading);
    } else {
      $patroller = $("<div>").attr("id", "footer-info-patroller").text(loading);
    }
    const $body = $("body");
    $body.find("#footer-info, .page-info").prepend($patroller);
    if (document.querySelectorAll(".patrollink").length) {
      $patroller.text(window.wgULS("此页面尚未被巡查。", "此頁面尚未被巡查。"));
      return;
    }
    try {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        prop: ["revisions"],
        titles: mw.config.get("wgPageName"),
        list: "logevents",
        letype: "patrol",
        letitle: mw.config.get("wgPageName"),
        rvprop: "timestamp",
        rvlimit: 1,
        rvdir: "newer"
      };
      const {
        query
      } = yield api.get(params);
      let cts = "";
      let html = "";
      if (query && query.logevents && query.logevents.length) {
        const [log] = query.logevents;
        const {
          action
        } = log;
        let {
          user,
          timestamp: ts
        } = log;
        const date = new Date(ts);
        if (query.pages) {
          for (const id in query.pages) {
            if (!Object.hasOwn(query.pages, id)) {
              continue;
            }
            const page = query.pages[id];
            if (page && page.revisions && page.revisions.length) {
              cts = page.revisions[0].timestamp;
              break;
            }
          }
        }
        if (cts && new Date(cts) > date) {
          html = "";
        } else {
          ts = "".concat(date.getUTCFullYear(), "年").concat(date.getUTCMonth() + 1, "月").concat(date.getUTCDate(), "日 (星期").concat(weekdays[date.getUTCDay()], ") ").concat("0".concat(date.getUTCHours()).slice(-2), ":").concat("0".concat(date.getUTCMinutes()).slice(-2), " (UTC)");
          const p = mw.config.get("wgArticlePath");
          user = '<a href="'.concat(p.replace("$1", "User:".concat(user)), '">').concat(user, "</a>");
          if (action === "patrol") {
            html = "".concat(window.wgULS("此页面于", "此頁面於") + ts, "由").concat(user, "巡查。");
          }
        }
      }
      if (html === "") {
        $patroller.text(window.wgULS("此页面尚未被巡查，或已自动标为已巡查。", "此頁面尚未被巡查，或已自動標爲已巡查。"));
      } else {
        $patroller.html(html);
      }
    } catch (error) {
      console.error("[PagePatroller]:", error);
      $patroller.text(window.wgULS("查找巡查者时出现错误。", "查找巡查者時出現錯誤。"));
    }
  });
  return function pagePatroller2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/PagePatroller/PagePatroller.ts
if (mw.config.get("wgNamespaceNumber") >= 0 && mw.config.get("wgPageName") !== "Qiuwen:首页" && !document.querySelectorAll(".noarticletext").length) {
  $(() => {
    void pagePatroller();
  });
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9QYWdlUGF0cm9sbGVyL1BhZ2VQYXRyb2xsZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5leHBvcnQgY29uc3QgcGFnZVBhdHJvbGxlciA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgYXBpID0gaW5pdE13QXBpKCdQYWdlUGF0cm9sbGVyLzIuMCcpO1xuXHRjb25zdCB3ZWVrZGF5czogc3RyaW5nW10gPSBbJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrSddO1xuXHRjb25zdCBsb2FkaW5nOiBzdHJpbmcgPSB3aW5kb3cud2dVTFMoJ+ato+WcqOWKoOi9veatpOmhtemdoueahOW3oeafpeiAheKApuKApicsICfmraPlnKjliqDovInmraTpoIHpnaLnmoTlt6Hmn6XogIXigKbigKYnKTtcblx0bGV0ICRwYXRyb2xsZXI6IEpRdWVyeTtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3NraW4nKSA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0JHBhdHJvbGxlciA9ICQoJzxzZWN0aW9uPicpLmF0dHIoJ2lkJywgJ2Zvb3Rlci1pbmZvLXBhdHJvbGxlcicpLmFkZENsYXNzKCdwYWdlLWluZm9fX2l0ZW0nKS50ZXh0KGxvYWRpbmcpO1xuXHR9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb290ZXItaW5mbycpKSB7XG5cdFx0JHBhdHJvbGxlciA9ICQoJzxsaT4nKS5hdHRyKCdpZCcsICdmb290ZXItaW5mby1wYXRyb2xsZXInKS50ZXh0KGxvYWRpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdCRwYXRyb2xsZXIgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ2Zvb3Rlci1pbmZvLXBhdHJvbGxlcicpLnRleHQobG9hZGluZyk7XG5cdH1cblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHQkYm9keS5maW5kKCcjZm9vdGVyLWluZm8sIC5wYWdlLWluZm8nKS5wcmVwZW5kKCRwYXRyb2xsZXIpO1xuXHQvLyDpkojlr7nmnInlt6Hmn6XmnYPpmZDnmoTnlKjmiLfkvJjljJbjgILoi6XpobXpnaLkuIrog73nnIvliLDlt6Hmn6XmjInpkq7vvIzpgqPkuIDlrprmsqHooqvlt6Hmn6Xov4fjgIJcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXRyb2xsaW5rJykubGVuZ3RoKSB7XG5cdFx0JHBhdHJvbGxlci50ZXh0KHdpbmRvdy53Z1VMUygn5q2k6aG16Z2i5bCa5pyq6KKr5beh5p+l44CCJywgJ+atpOmggemdouWwmuacquiiq+W3oeafpeOAgicpKTtcblx0XHRyZXR1cm47XG5cdH1cblx0dHJ5IHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zICYgQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHR0aXRsZXM6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdFx0bGV0eXBlOiAncGF0cm9sJyxcblx0XHRcdGxldGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdHJ2cHJvcDogJ3RpbWVzdGFtcCcsXG5cdFx0XHRydmxpbWl0OiAxLFxuXHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0fTtcblx0XHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdGxldCBjdHM6IHN0cmluZyA9ICcnO1xuXHRcdGxldCBodG1sOiBzdHJpbmcgPSAnJztcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG5cdFx0aWYgKHF1ZXJ5ICYmIHF1ZXJ5LmxvZ2V2ZW50cyAmJiBxdWVyeS5sb2dldmVudHMubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBbbG9nXTogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHRcdGFjdGlvbjogc3RyaW5nO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG5cdFx0XHRdID0gcXVlcnkubG9nZXZlbnRzIGFzIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdFx0XHRhY3Rpb246IHN0cmluZztcblx0XHRcdFx0fSxcblx0XHRcdF07XG5cdFx0XHRjb25zdCB7YWN0aW9ufSA9IGxvZztcblx0XHRcdGxldCB7dXNlciwgdGltZXN0YW1wOiB0c30gPSBsb2c7XG5cdFx0XHRjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUodHMpO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuXHRcdFx0aWYgKHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdFx0Zm9yIChjb25zdCBpZCBpbiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocXVlcnkucGFnZXMsIGlkKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuXHRcdFx0XHRcdGNvbnN0IHBhZ2UgPSBxdWVyeS5wYWdlc1tpZF07XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuXHRcdFx0XHRcdGlmIChwYWdlICYmIHBhZ2UucmV2aXNpb25zICYmIHBhZ2UucmV2aXNpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG5cdFx0XHRcdFx0XHRjdHMgPSBwYWdlLnJldmlzaW9uc1swXS50aW1lc3RhbXA7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjdHMgJiYgbmV3IERhdGUoY3RzKSA+IGRhdGUpIHtcblx0XHRcdFx0aHRtbCA9ICcnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHMgPSBgJHtkYXRlLmdldFVUQ0Z1bGxZZWFyKCl95bm0JHtkYXRlLmdldFVUQ01vbnRoKCkgKyAxfeaciCR7ZGF0ZS5nZXRVVENEYXRlKCl95pelICjmmJ/mnJ8ke1xuXHRcdFx0XHRcdHdlZWtkYXlzW2RhdGUuZ2V0VVRDRGF5KCldXG5cdFx0XHRcdH0pICR7YDAke2RhdGUuZ2V0VVRDSG91cnMoKX1gLnNsaWNlKC0yKX06JHtgMCR7ZGF0ZS5nZXRVVENNaW51dGVzKCl9YC5zbGljZSgtMil9IChVVEMpYDtcblx0XHRcdFx0Y29uc3QgcDogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlUGF0aCcpO1xuXHRcdFx0XHR1c2VyID0gYDxhIGhyZWY9XCIke3AucmVwbGFjZSgnJDEnLCBgVXNlcjoke3VzZXJ9YCl9XCI+JHt1c2VyfTwvYT5gO1xuXHRcdFx0XHRpZiAoYWN0aW9uID09PSAncGF0cm9sJykge1xuXHRcdFx0XHRcdGh0bWwgPSBgJHt3aW5kb3cud2dVTFMoJ+atpOmhtemdouS6jicsICfmraTpoIHpnaLmlrwnKSArIHRzfeeUsSR7dXNlcn3lt6Hmn6XjgIJgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChodG1sID09PSAnJykge1xuXHRcdFx0JHBhdHJvbGxlci50ZXh0KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+atpOmhtemdouWwmuacquiiq+W3oeafpe+8jOaIluW3suiHquWKqOagh+S4uuW3suW3oeafpeOAgicsICfmraTpoIHpnaLlsJrmnKrooqvlt6Hmn6XvvIzmiJblt7Loh6rli5XmqJnniLLlt7Llt6Hmn6XjgIInKVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHBhdHJvbGxlci5odG1sKGh0bWwpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbUGFnZVBhdHJvbGxlcl06JywgZXJyb3IpO1xuXHRcdCRwYXRyb2xsZXIudGV4dCh3aW5kb3cud2dVTFMoJ+afpeaJvuW3oeafpeiAheaXtuWHuueOsOmUmeivr+OAgicsICfmn6Xmib7lt6Hmn6XogIXmmYLlh7rnj77pjK/oqqTjgIInKSk7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHtwYWdlUGF0cm9sbGVyfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmIChcblx0bXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA+PSAwICYmXG5cdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSAhPT0gJ1FpdXdlbjrpppbpobUnICYmXG5cdCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm9hcnRpY2xldGV4dCcpLmxlbmd0aFxuKSB7XG5cdCQoKCkgPT4ge1xuXHRcdHZvaWQgcGFnZVBhdHJvbGxlcigpO1xuXHR9KTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUVqQixJQUFNQyxnQkFBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFnQixhQUEyQjtBQUN2RCxVQUFNQyxPQUFBLEdBQU1MLGtCQUFBTSxXQUFVLG1CQUFtQjtBQUN6QyxVQUFNQyxXQUFxQixDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUc7QUFDN0QsVUFBTUMsVUFBa0JDLE9BQU9DLE1BQU0saUJBQWlCLGVBQWU7QUFDckUsUUFBSUM7QUFDSixRQUFJQyxHQUFHQyxPQUFPQyxJQUFJLE1BQU0sTUFBTSxXQUFXO0FBQ3hDSCxtQkFBYUksRUFBRSxXQUFXLEVBQUVDLEtBQUssTUFBTSx1QkFBdUIsRUFBRUMsU0FBUyxpQkFBaUIsRUFBRUMsS0FBS1YsT0FBTztJQUN6RyxXQUFXVyxTQUFTQyxjQUFjLGNBQWMsR0FBRztBQUNsRFQsbUJBQWFJLEVBQUUsTUFBTSxFQUFFQyxLQUFLLE1BQU0sdUJBQXVCLEVBQUVFLEtBQUtWLE9BQU87SUFDeEUsT0FBTztBQUNORyxtQkFBYUksRUFBRSxPQUFPLEVBQUVDLEtBQUssTUFBTSx1QkFBdUIsRUFBRUUsS0FBS1YsT0FBTztJQUN6RTtBQUNBLFVBQU1hLFFBQWlDTixFQUFFLE1BQU07QUFDL0NNLFVBQU1DLEtBQUssMEJBQTBCLEVBQUVDLFFBQVFaLFVBQVU7QUFFekQsUUFBSVEsU0FBU0ssaUJBQWlCLGFBQWEs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QUFZLE1BQU0sZUFDaEMsQ0FBQ0ssU0FBU0ssaUJBQWlCLGdCQUFnQixFQUFFQyxRQUM1QztBQUNEVixJQUFFLE1BQU07QUFDUCxTQUFLYixjQUFjO0VBQ3BCLENBQUM7QUFDRjsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJwYWdlUGF0cm9sbGVyIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiYXBpIiwgImluaXRNd0FwaSIsICJ3ZWVrZGF5cyIsICJsb2FkaW5nIiwgIndpbmRvdyIsICJ3Z1VMUyIsICIkcGF0cm9sbGVyIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiJCIsICJhdHRyIiwgImFkZENsYXNzIiwgInRleHQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICIkYm9keSIsICJmaW5kIiwgInByZXBlbmQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJsZW5ndGgiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlcyIsICJsaXN0IiwgImxldHlwZSIsICJsZXRpdGxlIiwgInJ2cHJvcCIsICJydmxpbWl0IiwgInJ2ZGlyIiwgInF1ZXJ5IiwgImN0cyIsICJodG1sIiwgImxvZ2V2ZW50cyIsICJsb2ciLCAidXNlciIsICJ0aW1lc3RhbXAiLCAidHMiLCAiZGF0ZSIsICJEYXRlIiwgInBhZ2VzIiwgImlkIiwgIk9iamVjdCIsICJoYXNPd24iLCAicGFnZSIsICJyZXZpc2lvbnMiLCAiY29uY2F0IiwgImdldFVUQ0Z1bGxZZWFyIiwgImdldFVUQ01vbnRoIiwgImdldFVUQ0RhdGUiLCAiZ2V0VVRDRGF5IiwgImdldFVUQ0hvdXJzIiwgInNsaWNlIiwgImdldFVUQ01pbnV0ZXMiLCAicCIsICJyZXBsYWNlIiwgImVycm9yIiwgImNvbnNvbGUiLCAiYXBwbHkiLCAiYXJndW1lbnRzIl0KfQo=

})();

/* </nowiki> */
