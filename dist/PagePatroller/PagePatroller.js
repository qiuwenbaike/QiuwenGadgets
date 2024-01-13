/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:WhitePhosphorus/js/PagePatroller.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PagePatroller}
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
    const api = (0, import_ext_gadget.initMwApi)("Qiuwen/1.1 (PagePatroller/2.0; ".concat(mw.config.get("wgWikiID"), ")"));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9QYWdlUGF0cm9sbGVyL1BhZ2VQYXRyb2xsZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5leHBvcnQgY29uc3QgcGFnZVBhdHJvbGxlciA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgYXBpID0gaW5pdE13QXBpKGBRaXV3ZW4vMS4xIChQYWdlUGF0cm9sbGVyLzIuMDsgJHttdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpfSlgKTtcblx0Y29uc3Qgd2Vla2RheXM6IHN0cmluZ1tdID0gWyfml6UnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nXTtcblx0Y29uc3QgbG9hZGluZzogc3RyaW5nID0gd2luZG93LndnVUxTKCfmraPlnKjliqDovb3mraTpobXpnaLnmoTlt6Hmn6XogIXigKbigKYnLCAn5q2j5Zyo5Yqg6LyJ5q2k6aCB6Z2i55qE5beh5p+l6ICF4oCm4oCmJyk7XG5cdGxldCAkcGF0cm9sbGVyOiBKUXVlcnk7XG5cdGlmIChtdy5jb25maWcuZ2V0KCdza2luJykgPT09ICdjaXRpemVuJykge1xuXHRcdCRwYXRyb2xsZXIgPSAkKCc8c2VjdGlvbj4nKS5hdHRyKCdpZCcsICdmb290ZXItaW5mby1wYXRyb2xsZXInKS5hZGRDbGFzcygncGFnZS1pbmZvX19pdGVtJykudGV4dChsb2FkaW5nKTtcblx0fSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vdGVyLWluZm8nKSkge1xuXHRcdCRwYXRyb2xsZXIgPSAkKCc8bGk+JykuYXR0cignaWQnLCAnZm9vdGVyLWluZm8tcGF0cm9sbGVyJykudGV4dChsb2FkaW5nKTtcblx0fSBlbHNlIHtcblx0XHQkcGF0cm9sbGVyID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdmb290ZXItaW5mby1wYXRyb2xsZXInKS50ZXh0KGxvYWRpbmcpO1xuXHR9XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0JGJvZHkuZmluZCgnI2Zvb3Rlci1pbmZvLCAucGFnZS1pbmZvJykucHJlcGVuZCgkcGF0cm9sbGVyKTtcblx0Ly8g6ZKI5a+55pyJ5beh5p+l5p2D6ZmQ55qE55So5oi35LyY5YyW44CC6Iul6aG16Z2i5LiK6IO955yL5Yiw5beh5p+l5oyJ6ZKu77yM6YKj5LiA5a6a5rKh6KKr5beh5p+l6L+H44CCXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGF0cm9sbGluaycpLmxlbmd0aCkge1xuXHRcdCRwYXRyb2xsZXIudGV4dCh3aW5kb3cud2dVTFMoJ+atpOmhtemdouWwmuacquiiq+W3oeafpeOAgicsICfmraTpoIHpnaLlsJrmnKrooqvlt6Hmn6XjgIInKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyAmIEFwaVF1ZXJ5TG9nRXZlbnRzUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRwcm9wOiBbJ3JldmlzaW9ucyddLFxuXHRcdFx0dGl0bGVzOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHRcdGxldHlwZTogJ3BhdHJvbCcsXG5cdFx0XHRsZXRpdGxlOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHRydnByb3A6ICd0aW1lc3RhbXAnLFxuXHRcdFx0cnZsaW1pdDogMSxcblx0XHRcdHJ2ZGlyOiAnbmV3ZXInLFxuXHRcdH07XG5cdFx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRsZXQgY3RzOiBzdHJpbmcgPSAnJztcblx0XHRsZXQgaHRtbDogc3RyaW5nID0gJyc7XG5cdFx0aWYgKHF1ZXJ5ICYmIHF1ZXJ5LmxvZ2V2ZW50cyAmJiBxdWVyeS5sb2dldmVudHMubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBbbG9nXTogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHRcdGFjdGlvbjogc3RyaW5nO1xuXHRcdFx0XHR9LFxuXHRcdFx0XSA9IHF1ZXJ5LmxvZ2V2ZW50cztcblx0XHRcdGNvbnN0IHthY3Rpb259ID0gbG9nO1xuXHRcdFx0bGV0IHt1c2VyLCB0aW1lc3RhbXA6IHRzfSA9IGxvZztcblx0XHRcdGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZSh0cyk7XG5cdFx0XHRpZiAocXVlcnkucGFnZXMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBpZCBpbiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bihxdWVyeS5wYWdlcywgaWQpKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgcGFnZSA9IHF1ZXJ5LnBhZ2VzW2lkXTtcblx0XHRcdFx0XHRpZiAocGFnZSAmJiBwYWdlLnJldmlzaW9ucyAmJiBwYWdlLnJldmlzaW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGN0cyA9IHBhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGN0cyAmJiBuZXcgRGF0ZShjdHMpID4gZGF0ZSkge1xuXHRcdFx0XHRodG1sID0gJyc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0cyA9IGAke2RhdGUuZ2V0VVRDRnVsbFllYXIoKX3lubQke2RhdGUuZ2V0VVRDTW9udGgoKSArIDF95pyIJHtkYXRlLmdldFVUQ0RhdGUoKX3ml6UgKOaYn+acnyR7XG5cdFx0XHRcdFx0d2Vla2RheXNbZGF0ZS5nZXRVVENEYXkoKV1cblx0XHRcdFx0fSkgJHtgMCR7ZGF0ZS5nZXRVVENIb3VycygpfWAuc2xpY2UoLTIpfToke2AwJHtkYXRlLmdldFVUQ01pbnV0ZXMoKX1gLnNsaWNlKC0yKX0gKFVUQylgO1xuXHRcdFx0XHRjb25zdCBwOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z0FydGljbGVQYXRoJyk7XG5cdFx0XHRcdHVzZXIgPSBgPGEgaHJlZj1cIiR7cC5yZXBsYWNlKCckMScsIGBVc2VyOiR7dXNlcn1gKX1cIj4ke3VzZXJ9PC9hPmA7XG5cdFx0XHRcdGlmIChhY3Rpb24gPT09ICdwYXRyb2wnKSB7XG5cdFx0XHRcdFx0aHRtbCA9IGAke3dpbmRvdy53Z1VMUygn5q2k6aG16Z2i5LqOJywgJ+atpOmggemdouaWvCcpICsgdHN955SxJHt1c2VyfeW3oeafpeOAgmA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGh0bWwgPT09ICcnKSB7XG5cdFx0XHQkcGF0cm9sbGVyLnRleHQoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5q2k6aG16Z2i5bCa5pyq6KKr5beh5p+l77yM5oiW5bey6Ieq5Yqo5qCH5Li65bey5beh5p+l44CCJywgJ+atpOmggemdouWwmuacquiiq+W3oeafpe+8jOaIluW3suiHquWLleaomeeIsuW3suW3oeafpeOAgicpXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkcGF0cm9sbGVyLmh0bWwoaHRtbCk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tQYWdlUGF0cm9sbGVyXTonLCBlcnJvcik7XG5cdFx0JHBhdHJvbGxlci50ZXh0KHdpbmRvdy53Z1VMUygn5p+l5om+5beh5p+l6ICF5pe25Ye6546w6ZSZ6K+v44CCJywgJ+afpeaJvuW3oeafpeiAheaZguWHuuePvumMr+iqpOOAgicpKTtcblx0fVxufTtcbiIsICJpbXBvcnQge3BhZ2VQYXRyb2xsZXJ9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuaWYgKFxuXHRtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID49IDAgJiZcblx0bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpICE9PSAnUWl1d2VuOummlumhtScgJiZcblx0IWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub2FydGljbGV0ZXh0JykubGVuZ3RoXG4pIHtcblx0JCgoKSA9PiB7XG5cdFx0dm9pZCBwYWdlUGF0cm9sbGVyKCk7XG5cdH0pO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRWpCLElBQU1DLGdCQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWdCLGFBQTJCO0FBQ3ZELFVBQU1DLE9BQUEsR0FBTUwsa0JBQUFNLFdBQUEsa0NBQUFDLE9BQTRDQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVUsR0FBQyxHQUFBLENBQUc7QUFDcEYsVUFBTUMsV0FBcUIsQ0FBQyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0FBQzdELFVBQU1DLFVBQWtCQyxPQUFPQyxNQUFNLGlCQUFpQixlQUFlO0FBQ3JFLFFBQUlDO0FBQ0osUUFBSVAsR0FBR0MsT0FBT0MsSUFBSSxNQUFNLE1BQU0sV0FBVztBQUN4Q0ssbUJBQWFDLEVBQUUsV0FBVyxFQUFFQyxLQUFLLE1BQU0sdUJBQXVCLEVBQUVDLFNBQVMsaUJBQWlCLEVBQUVDLEtBQUtQLE9BQU87SUFDekcsV0FBV1EsU0FBU0MsY0FBYyxjQUFjLEdBQUc7QUFDbEROLG1CQUFhQyxFQUFFLE1BQU0sRUFBRUMsS0FBSyxNQUFNLHVCQUF1QixFQUFFRSxLQUFLUCxPQUFPO0lBQ3hFLE9BQU87QUFDTkcsbUJBQWFDLEVBQUUsT0FBTyxFQUFFQyxLQUFLLE1BQU0sdUJBQXVCLEVBQUVFLEtBQUtQLE9BQU87SUFD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QkFBQTtBQUFBLFdBQUFDLEtBQUErRCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDQWIsSUFDQzNELEdBQUdDLE9BQU9DLElBQUksbUJBQW1CLEtBQUssS0FDdENGLEdBQUdDLE9BQU9DLElBQUksWUFBWSxNQUFNLGVBQ2hDLENBQUNVLFNBQVNLLGlCQUFpQixnQkFBZ0IsRUFBRUMsUUFDNUM7QUFDRFYsSUFBRSxNQUFNO0FBQ1AsU0FBS2QsY0FBYztFQUNwQixDQUFDO0FBQ0Y7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAicGFnZVBhdHJvbGxlciIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAid2Vla2RheXMiLCAibG9hZGluZyIsICJ3aW5kb3ciLCAid2dVTFMiLCAiJHBhdHJvbGxlciIsICIkIiwgImF0dHIiLCAiYWRkQ2xhc3MiLCAidGV4dCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIiRib2R5IiwgImZpbmQiLCAicHJlcGVuZCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImxlbmd0aCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgImxpc3QiLCAibGV0eXBlIiwgImxldGl0bGUiLCAicnZwcm9wIiwgInJ2bGltaXQiLCAicnZkaXIiLCAicXVlcnkiLCAiY3RzIiwgImh0bWwiLCAibG9nZXZlbnRzIiwgImxvZyIsICJ1c2VyIiwgInRpbWVzdGFtcCIsICJ0cyIsICJkYXRlIiwgIkRhdGUiLCAicGFnZXMiLCAiaWQiLCAiT2JqZWN0IiwgImhhc093biIsICJwYWdlIiwgInJldmlzaW9ucyIsICJnZXRVVENGdWxsWWVhciIsICJnZXRVVENNb250aCIsICJnZXRVVENEYXRlIiwgImdldFVUQ0RheSIsICJnZXRVVENIb3VycyIsICJzbGljZSIsICJnZXRVVENNaW51dGVzIiwgInAiLCAicmVwbGFjZSIsICJlcnJvciIsICJjb25zb2xlIiwgImFwcGx5IiwgImFyZ3VtZW50cyJdCn0K

})();

/* </nowiki> */
