/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-UTCLiveClock.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/UTCLiveClock}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-UTCLiveClock.css}
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-UTCLiveClock-pagestyles.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/UTCLiveClock}
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

// dist/UTCLiveClock/UTCLiveClock.js
//! src/UTCLiveClock/modules/constant.ts
var WG_ACTION = mw.config.get("wgAction");
var WG_WIKI_ID = mw.config.get("wgWikiID");
//! src/UTCLiveClock/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Success: (0, import_ext_gadget.localize)({
      en: "Cache cleared!",
      "zh-hans": "缓存清除成功",
      "zh-hant": "快取清除成功"
    }),
    Failed: (0, import_ext_gadget.localize)({
      en: "Failed to clear cache.",
      "zh-hans": "缓存清除失败",
      "zh-hant": "快取清除失败"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/UTCLiveClock/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var padWithZeroes = (number) => {
  return number < 10 ? "0".concat(number.toString()) : number.toString();
};
var showTime = ($target) => {
  const now = /* @__PURE__ */ new Date();
  const windowUTCLiveClockTimeZone = window.UTCLiveClockTimeZone;
  let timezone = (windowUTCLiveClockTimeZone ? String(windowUTCLiveClockTimeZone) : "") || "Asia/Shanghai";
  let hh;
  let mm;
  let ss;
  if (timezone === "UTC") {
    hh = now.getUTCHours();
    mm = now.getUTCMinutes();
    ss = now.getUTCSeconds();
  } else if (timezone === "local") {
    hh = now.getHours();
    mm = now.getMinutes();
    ss = now.getSeconds();
  } else {
    let newNow;
    try {
      newNow = new Date(now.toLocaleString("en-US", {
        timeZone: timezone
      }));
      hh = newNow.getHours();
      mm = newNow.getMinutes();
      ss = newNow.getSeconds();
    } catch {
      console.log("[UTCLiveClock]: error creating Date object with timezone '".concat(timezone, "'"));
      timezone = "UTC";
      newNow = now;
      hh = now.getUTCHours();
      mm = now.getUTCMinutes();
      ss = now.getUTCSeconds();
    }
  }
  const time = "".concat(padWithZeroes(hh), ":").concat(padWithZeroes(mm), ":").concat(padWithZeroes(ss));
  $target.text(time);
  const ms = now.getUTCMilliseconds();
  setTimeout(() => {
    showTime($target);
  }, 1100 - ms);
};
var liveClock = () => {
  const $body = $("body");
  $body.find(".client-js > body.skin-vector #p-personal ul").css("margin-right", "initial");
  const element = mw.util.addPortletLink("p-personal", "#", "", "utcdate");
  if (!element) {
    return;
  }
  const $element = $(element);
  $element.on("click", (event) => {
    event.preventDefault();
    const api = (0, import_ext_gadget2.initMwApi)("Qiuwen/1.1 (UTCLiveClock/1.1; ".concat(WG_WIKI_ID, ")"));
    localStorage.removeItem("MediaWikiModuleStore:".concat(WG_WIKI_ID));
    const params = {
      action: "purge",
      titles: mw.config.get("wgPageName")
    };
    api.post(params).then(() => {
      void mw.notify(getMessage("Success"), {
        tag: "UTCLiveClock",
        type: "success"
      });
      location.reload();
    }).catch(() => {
      void mw.notify(getMessage("Failed"), {
        tag: "UTCLiveClock",
        type: "error"
      });
    });
  });
  showTime($element.find("a:first"));
};
//! src/UTCLiveClock/UTCLiveClock.ts
$(liveClock);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VUQ0xpdmVDbG9jay9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9VVENMaXZlQ2xvY2svbW9kdWxlcy9pMThuLnRzIiwgInNyYy9VVENMaXZlQ2xvY2svbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9VVENMaXZlQ2xvY2svVVRDTGl2ZUNsb2NrLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19BQ1RJT046IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJyk7XG5cbmNvbnN0IFdHX1dJS0lfSUQ6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyk7XG5cbmV4cG9ydCB7V0dfQUNUSU9OLCBXR19XSUtJX0lEfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0U3VjY2VzczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDYWNoZSBjbGVhcmVkIScsXG5cdFx0XHQnemgtaGFucyc6ICfnvJPlrZjmuIXpmaTmiJDlip8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5b+r5Y+W5riF6Zmk5oiQ5YqfJyxcblx0XHR9KSxcblx0XHRGYWlsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmFpbGVkIHRvIGNsZWFyIGNhY2hlLicsXG5cdFx0XHQnemgtaGFucyc6ICfnvJPlrZjmuIXpmaTlpLHotKUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5b+r5Y+W5riF6Zmk5aSx6LSlJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtXR19XSUtJX0lEfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBwYWRXaXRoWmVyb2VzID0gKG51bWJlcjogbnVtYmVyKSA9PiB7XG5cdC8vIFBhZCBhIG51bWJlciB3aXRoIHplcm9lcy4gVGhlIG51bWJlciBtdXN0IGJlIGFuIGludGVnZXIgd2hlcmVcblx0Ly8gMCA8PSBudW1iZXIgPCAxMDAuXG5cdHJldHVybiBudW1iZXIgPCAxMCA/IGAwJHtudW1iZXIudG9TdHJpbmcoKX1gIDogbnVtYmVyLnRvU3RyaW5nKCk7XG59O1xuXG5jb25zdCBzaG93VGltZSA9ICgkdGFyZ2V0OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3Qgbm93OiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3Qgd2luZG93VVRDTGl2ZUNsb2NrVGltZVpvbmU6IHR5cGVvZiB3aW5kb3cuVVRDTGl2ZUNsb2NrVGltZVpvbmUgPSB3aW5kb3cuVVRDTGl2ZUNsb2NrVGltZVpvbmU7XG5cdGxldCB0aW1lem9uZTogc3RyaW5nID0gKHdpbmRvd1VUQ0xpdmVDbG9ja1RpbWVab25lID8gU3RyaW5nKHdpbmRvd1VUQ0xpdmVDbG9ja1RpbWVab25lKSA6ICcnKSB8fCAnQXNpYS9TaGFuZ2hhaSc7XG5cdC8vIFNldCB0aGUgdGltZS5cblx0bGV0IGhoOiBudW1iZXI7XG5cdGxldCBtbTogbnVtYmVyO1xuXHRsZXQgc3M6IG51bWJlcjtcblx0aWYgKHRpbWV6b25lID09PSAnVVRDJykge1xuXHRcdGhoID0gbm93LmdldFVUQ0hvdXJzKCk7XG5cdFx0bW0gPSBub3cuZ2V0VVRDTWludXRlcygpO1xuXHRcdHNzID0gbm93LmdldFVUQ1NlY29uZHMoKTtcblx0fSBlbHNlIGlmICh0aW1lem9uZSA9PT0gJ2xvY2FsJykge1xuXHRcdGhoID0gbm93LmdldEhvdXJzKCk7XG5cdFx0bW0gPSBub3cuZ2V0TWludXRlcygpO1xuXHRcdHNzID0gbm93LmdldFNlY29uZHMoKTtcblx0fSBlbHNlIHtcblx0XHRsZXQgbmV3Tm93OiBEYXRlO1xuXHRcdHRyeSB7XG5cdFx0XHRuZXdOb3cgPSBuZXcgRGF0ZShcblx0XHRcdFx0bm93LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcblx0XHRcdFx0XHR0aW1lWm9uZTogdGltZXpvbmUsXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdFx0aGggPSBuZXdOb3cuZ2V0SG91cnMoKTtcblx0XHRcdG1tID0gbmV3Tm93LmdldE1pbnV0ZXMoKTtcblx0XHRcdHNzID0gbmV3Tm93LmdldFNlY29uZHMoKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdGNvbnNvbGUubG9nKGBbVVRDTGl2ZUNsb2NrXTogZXJyb3IgY3JlYXRpbmcgRGF0ZSBvYmplY3Qgd2l0aCB0aW1lem9uZSAnJHt0aW1lem9uZX0nYCk7XG5cdFx0XHR0aW1lem9uZSA9ICdVVEMnO1xuXHRcdFx0bmV3Tm93ID0gbm93O1xuXHRcdFx0aGggPSBub3cuZ2V0VVRDSG91cnMoKTtcblx0XHRcdG1tID0gbm93LmdldFVUQ01pbnV0ZXMoKTtcblx0XHRcdHNzID0gbm93LmdldFVUQ1NlY29uZHMoKTtcblx0XHR9XG5cdH1cblx0Y29uc3QgdGltZTogc3RyaW5nID0gYCR7cGFkV2l0aFplcm9lcyhoaCl9OiR7cGFkV2l0aFplcm9lcyhtbSl9OiR7cGFkV2l0aFplcm9lcyhzcyl9YDtcblx0JHRhcmdldC50ZXh0KHRpbWUpO1xuXHQvLyBTY2hlZHVsZSB0aGUgbmV4dCB0aW1lIGNoYW5nZS5cblx0Ly9cblx0Ly8gV2Ugc2NoZWR1bGUgdGhlIGNoYW5nZSBmb3IgMTAwIG1zIF9hZnRlcl8gdGhlIG5leHQgY2xvY2sgdGljay4gVGhlIGRlbGF5XG5cdC8vIGZyb20gc2V0VGltZW91dCBpcyBub3QgcHJlY2lzZSwgYW5kIGlmIHdlIGFpbSBleGFjdGx5IGZvciB0aGUgdGljaywgdGhlcmVcblx0Ly8gaXMgYSBjaGFuY2UgdGhhdCB0aGUgZnVuY3Rpb24gd2lsbCBydW4gc2xpZ2h0bHkgYmVmb3JlIGl0LiBJZiB0aGlzXG5cdC8vIGhhcHBlbnMsIHdlIHdpbGwgZGlzcGxheSB0aGUgc2FtZSB0aW1lIGZvciB0d28gc2Vjb25kcyBpbiBhIHJvdyAtIG5vdFxuXHQvLyBnb29kLiBCeSBzY2hlZHVsaW5nIDEwMCBtcyBhZnRlciB0aGUgdGljaywgd2Ugd2lsbCBhbHdheXMgYmUgYWJvdXQgMTAwIG1zXG5cdC8vIGxhdGUsIGJ1dCB3ZSBhcmUgYWxzbyB2ZXJ5IGxpa2VseSB0byBkaXNwbGF5IGEgbmV3IHRpbWUgZXZlcnkgc2Vjb25kLlxuXHRjb25zdCBtczogbnVtYmVyID0gbm93LmdldFVUQ01pbGxpc2Vjb25kcygpO1xuXHRzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcblx0XHRzaG93VGltZSgkdGFyZ2V0KTtcblx0fSwgMTEwMCAtIG1zKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaXZlQ2xvY2sgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0Ly8gUmVzZXQgd2hpdGVzcGFjZSB0aGF0IHdhcyBzZXQgaW4gdGhlIHBlZXIgQ1NTIGdhZGdldDsgdGhpcyBwcmV2ZW50cyB0aGVcblx0Ly8gZWZmZWN0IG9mIHRoZSBwLXBlcnNvbmFsIG1lbnUganVtcGluZyB0byB0aGUgbGVmdCB3aGVuIHRoZSBKYXZhU2NyaXB0XG5cdC8vIGxvYWRzLlxuXHQkYm9keS5maW5kKCcuY2xpZW50LWpzID4gYm9keS5za2luLXZlY3RvciAjcC1wZXJzb25hbCB1bCcpLmNzcygnbWFyZ2luLXJpZ2h0JywgJ2luaXRpYWwnKTtcblx0Ly8gQWRkIHRoZSBwb3J0bGV0IGxpbmsuXG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluaygncC1wZXJzb25hbCcsICcjJywgJycsICd1dGNkYXRlJyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxMSUVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblx0Ly8gUHVyZ2UgdGhlIHBhZ2Ugd2hlbiB0aGUgY2xvY2sgaXMgY2xpY2tlZC4gV2UgaGF2ZSB0byBkbyB0aGlzIHRocm91Z2ggdGhlXG5cdC8vIEFQSSwgYXMgcHVyZ2UgVVJMcyBub3cgbWFrZSBwZW9wbGUgY2xpY2sgdGhyb3VnaCBhIGNvbmZpcm1hdGlvbiBzY3JlZW4uXG5cdCRlbGVtZW50Lm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQ8SFRNTExJRWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRaXV3ZW4vMS4xIChVVENMaXZlQ2xvY2svMS4xOyAke1dHX1dJS0lfSUR9KWApO1xuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBNZWRpYVdpa2lNb2R1bGVTdG9yZToke1dHX1dJS0lfSUR9YCk7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlQdXJnZVBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3B1cmdlJyxcblx0XHRcdHRpdGxlczogbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRcdH07XG5cdFx0YXBpLnBvc3QocGFyYW1zKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdTdWNjZXNzJyksIHt0YWc6ICdVVENMaXZlQ2xvY2snLCB0eXBlOiAnc3VjY2Vzcyd9KTtcblx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKCgpID0+IHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnRmFpbGVkJyksIHt0YWc6ICdVVENMaXZlQ2xvY2snLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0XHR9KTtcblx0fSk7XG5cdC8vIFNob3cgdGhlIGNsb2NrLlxuXHRzaG93VGltZSgkZWxlbWVudC5maW5kKCdhOmZpcnN0JykpO1xufTtcbiIsICIvKipcbiAqIFRoaXMgZ2FkZ2V0IGFkZHMgYSBjbG9jayBpbiB0aGUgcGVyc29uYWwgdG9vbGJhciB0aGF0IHNob3dzIHRoZSBjdXJyZW50IHRpbWVcbiAqIGluIFVUQyAob3IgYSBkaWZmZXJlbnQgdGltZXpvbmUgb2YgeW91ciBjaG9vc2luZyksIGFuZCBhbHNvIHByb3ZpZGVzIGEgbGlua1xuICogdG8gcHVyZ2UgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBSZXZpc2lvbjogSnVseSAyMDIwXG4gKiBTb3VyY2U6IGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9NZWRpYVdpa2k6R2FkZ2V0LVVUQ0xpdmVDbG9jay5qc1xuICpcbiAqIEluc3RhbGxhdGlvbjpcbiAqXG4gKiAxLiBDb3B5IHRoZSBKUyBwYWdlIGF0IGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9NZWRpYVdpa2k6R2FkZ2V0LVVUQ0xpdmVDbG9jay5qc1xuICogdG8gdGhlIHBhZ2UgW1tNZWRpYVdpa2k6R2FkZ2V0LVVUQ0xpdmVDbG9jay5qc11dIG9uIHlvdXIgd2lraS5cbiAqXG4gKiAyLiBDb3B5IHRoZSBDU1MgcGFnZSBhdCBodHRwczovL3d3dy5tZWRpYXdpa2kub3JnL3dpa2kvTWVkaWFXaWtpOkdhZGdldC1VVENMaXZlQ2xvY2suY3NzXG4gKiB0byB0aGUgcGFnZSBbW01lZGlhV2lraTpHYWRnZXQtVVRDTGl2ZUNsb2NrLmNzc11dIG9uIHlvdXIgd2lraS5cbiAqXG4gKiAzLiBDb3B5IHRoZSBDU1MgcGFnZSBhdCBodHRwczovL3d3dy5tZWRpYXdpa2kub3JnL3dpa2kvTWVkaWFXaWtpOkdhZGdldC1VVENMaXZlQ2xvY2stcGFnZXN0eWxlcy5jc3NcbiAqIHRvIHRoZSBwYWdlIFtbTWVkaWFXaWtpOkdhZGdldC1VVENMaXZlQ2xvY2stcGFnZXN0eWxlcy5jc3NdXSBvbiB5b3VyIHdpa2kuXG4gKlxuICogNC4gQWRkIGEgZGVzY3JpcHRpb24gb2YgdGhlIGdhZGdldCB0byB0aGUgcGFnZSBbW01lZGlhV2lraTpHYWRnZXQtVVRDTGl2ZUNsb2NrXV1cbiAqIG9uIHlvdXIgd2lraS4gWW91IGNhbiB1c2UgaHR0cHM6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL01lZGlhV2lraTpHYWRnZXQtVVRDTGl2ZUNsb2NrXG4gKiBhcyBhIHRlbXBsYXRlLlxuICpcbiAqIDUuIEFkZCB0aGUgZm9sbG93aW5nIGNvZGUgdG8geW91ciB3aWtpJ3MgW1tNZWRpYVdpa2k6R2FkZ2V0cy1kZWZpbml0aW9uXV06XG4gKlxuICogVVRDTGl2ZUNsb2NrW1Jlc291cmNlTG9hZGVyfHR5cGU9Z2VuZXJhbHxkZXBlbmRlbmNpZXM9bWVkaWF3aWtpLnV0aWwsbWVkaWF3aWtpLmFwaXxwZWVycz1VVENMaXZlQ2xvY2stcGFnZXN0eWxlc118VVRDTGl2ZUNsb2NrLmpzfFVUQ0xpdmVDbG9jay5jc3NcbiAqIFVUQ0xpdmVDbG9jay1wYWdlc3R5bGVzW2hpZGRlbnxza2lucz12ZWN0b3JdfFVUQ0xpdmVDbG9jay1wYWdlc3R5bGVzLmNzc1xuICpcbiAqXG4gKiBUbyBzZXQgdGhlIHRpbWV6b25lIHVzZWQgdG8gb25lIG90aGVyIHRoYW4gVVRDLCBzZXQgd2luZG93LkxpdmVDbG9ja1RpbWVab25lIHRvXG4gKiB0aGUgZGVzaXJlZCB0aW1lem9uZS4gRm9yIGV4YW1wbGUsIGFkZGluZyB0aGUgZm9sbG93aW5nIHRvIHlvdXIgY29tbW9uLmpzXG4gKiAgICAgIHdpbmRvdy5MaXZlQ2xvY2tUaW1lWm9uZSA9ICdBbWVyaWNhL0xvc19BbmdlbGVzJztcbiAqIHdvdWxkIHJlc3VsdCBpbiB0aGUgbG9jYWwgdGltZSBpbiBMb3MgQW5nZWxlcyBiZWluZyBzaG93bi4gU2VlXG4gKiBUWiBkYXRhYmFzZSBmb3IgdmFsaWQgb3B0aW9ucy5cbiAqL1xuaW1wb3J0IHtsaXZlQ2xvY2t9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuJChsaXZlQ2xvY2spO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7OztBQUFBLElBQU1BLFlBQW9CQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7QUFFbEQsSUFBTUMsYUFBcUJILEdBQUdDLE9BQU9DLElBQUksVUFBVTs7QUNGbkQsSUFBQUUsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFVBQUEsR0FBU0gsa0JBQUFJLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsU0FBQSxHQUFRTixrQkFBQUksVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRSxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUNuQkEsSUFBQUMscUJBQXdCVCxRQUFBLGlCQUFBO0FBRXhCLElBQU1VLGdCQUFpQkMsWUFBbUI7QUFHekMsU0FBT0EsU0FBUyxLQUFBLElBQUFDLE9BQVNELE9BQU9FLFNBQVMsQ0FBQyxJQUFLRixPQUFPRSxTQUFTO0FBQ2hFO0FBRUEsSUFBTUMsV0FBWUMsYUFBMEI7QUFDM0MsUUFBTUMsTUFBWSxvQkFBSUMsS0FBSztBQUMzQixRQUFNQyw2QkFBaUVDLE9BQU9DO0FBQzlFLE1BQUlDLFlBQW9CSCw2QkFBNkJJLE9BQU9KLDBCQUEwQixJQUFJLE9BQU87QUFFakcsTUFBSUs7QUFDSixNQUFJQztBQUNKLE1BQUlDO0FBQ0osTUFBSUosYUFBYSxPQUFPO0FBQ3ZCRSxTQUFLUCxJQUFJVSxZQUFZO0FBQ3JCRixTQUFLUixJQUFJVyxjQUFjO0FBQ3ZCRixTQUFLVCxJQUFJWSxjQUFjO0VBQ3hCLFdBQVdQLGFBQWEsU0FBUztBQUNoQ0UsU0FBS1AsSUFBSWEsU0FBUztBQUNsQkwsU0FBS1IsSUFBSWMsV0FBVztBQUNwQkwsU0FBS1QsSUFBSWUsV0FBVztFQUNyQixPQUFPO0FBQ04sUUFBSUM7QUFDSixRQUFJO0FBQ0hBLGVBQVMsSUFBSWYsS0FDWkQsSUFBSWlCLGVBQWUsU0FBUztRQUMzQkMsVUFBVWI7TUFDWCxDQUFDLENBQ0Y7QUFDQUUsV0FBS1MsT0FBT0gsU0FBUztBQUNyQkwsV0FBS1EsT0FBT0YsV0FBVztBQUN2QkwsV0FBS08sT0FBT0QsV0FBVztJQUN4QixRQUFRO0FBQ1BJLGNBQVFDLElBQUEsNkRBQUF4QixPQUFpRVMsVUFBUSxHQUFBLENBQUc7QUFDcEZBLGlCQUFXO0FBQ1hXLGVBQVNoQjtBQUNUTyxXQUFLUCxJQUFJVSxZQUFZO0FBQ3JCRixXQUFLUixJQUFJVyxjQUFjO0FBQ3ZCRixXQUFLVCxJQUFJWSxjQUFjO0lBQ3hCO0VBQ0Q7QUFDQSxRQUFNUyxPQUFBLEdBQUF6QixPQUFrQkYsY0FBY2EsRUFBRSxHQUFDLEdBQUEsRUFBQVgsT0FBSUYsY0FBY2MsRUFBRSxHQUFDLEdBQUEsRUFBQVosT0FBSUYsY0FBY2UsRUFBRSxDQUFDO0FBQ25GVixVQUFRdUIsS0FBS0QsSUFBSTtBQVNqQixRQUFNRSxLQUFhdkIsSUFBSXdCLG1CQUFtQjtBQUMxQ0MsYUFBVyxNQUFZO0FBQ3RCM0IsYUFBU0MsT0FBTztFQUNqQixHQUFHLE9BQU93QixFQUFFO0FBQ2I7QUFFTyxJQUFNRyxZQUFZQSxNQUFZO0FBQ3BDLFFBQU1DLFFBQWlDQyxFQUFFLE1BQU07QUFJL0NELFFBQU1FLEtBQUssOENBQThDLEVBQUVDLElBQUksZ0JBQWdCLFNBQVM7QUFFeEYsUUFBTUMsVUFBZ0NwRCxHQUFHcUQsS0FBS0MsZUFBZSxjQUFjLEtBQUssSUFBSSxTQUFTO0FBQzdGLE1BQUksQ0FBQ0YsU0FBUztBQUNiO0VBQ0Q7QUFDQSxRQUFNRyxXQUFrQ04sRUFBRUcsT0FBTztBQUdqREcsV0FBU0MsR0FBRyxTQUFVQyxXQUFrRDtBQUN2RUEsVUFBTUMsZUFBZTtBQUNyQixVQUFNQyxPQUFBLEdBQWM3QyxtQkFBQThDLFdBQUEsaUNBQUEzQyxPQUEyQ2QsWUFBVSxHQUFBLENBQUc7QUFDNUUwRCxpQkFBYUMsV0FBQSx3QkFBQTdDLE9BQW1DZCxVQUFVLENBQUU7QUFDNUQsVUFBTTRELFNBQXlCO01BQzlCQyxRQUFRO01BQ1JDLFFBQVFqRSxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7SUFDbkM7QUFDQXlELFFBQUlPLEtBQUtILE1BQU0sRUFDYkksS0FBSyxNQUFNO0FBQ1gsV0FBS25FLEdBQUdvRSxPQUFPeEQsV0FBVyxTQUFTLEdBQUc7UUFBQ3lELEtBQUs7UUFBZ0JDLE1BQU07TUFBUyxDQUFDO0FBQzVFQyxlQUFTQyxPQUFPO0lBQ2pCLENBQUMsRUFDQUMsTUFBTSxNQUFNO0FBQ1osV0FBS3pFLEdBQUdvRSxPQUFPeEQsV0FBVyxRQUFRLEdBQUc7UUFBQ3lELEtBQUs7UUFBZ0JDLE1BQU07TUFBTyxDQUFDO0lBQzFFLENBQUM7RUFDSCxDQUFDO0FBRURuRCxXQUFTb0MsU0FBU0wsS0FBSyxTQUFTLENBQUM7QUFDbEM7O0FDMURBRCxFQUFFRixTQUFTOyIsCiAgIm5hbWVzIjogWyJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19XSUtJX0lEIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlN1Y2Nlc3MiLCAibG9jYWxpemUiLCAiZW4iLCAiRmFpbGVkIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicGFkV2l0aFplcm9lcyIsICJudW1iZXIiLCAiY29uY2F0IiwgInRvU3RyaW5nIiwgInNob3dUaW1lIiwgIiR0YXJnZXQiLCAibm93IiwgIkRhdGUiLCAid2luZG93VVRDTGl2ZUNsb2NrVGltZVpvbmUiLCAid2luZG93IiwgIlVUQ0xpdmVDbG9ja1RpbWVab25lIiwgInRpbWV6b25lIiwgIlN0cmluZyIsICJoaCIsICJtbSIsICJzcyIsICJnZXRVVENIb3VycyIsICJnZXRVVENNaW51dGVzIiwgImdldFVUQ1NlY29uZHMiLCAiZ2V0SG91cnMiLCAiZ2V0TWludXRlcyIsICJnZXRTZWNvbmRzIiwgIm5ld05vdyIsICJ0b0xvY2FsZVN0cmluZyIsICJ0aW1lWm9uZSIsICJjb25zb2xlIiwgImxvZyIsICJ0aW1lIiwgInRleHQiLCAibXMiLCAiZ2V0VVRDTWlsbGlzZWNvbmRzIiwgInNldFRpbWVvdXQiLCAibGl2ZUNsb2NrIiwgIiRib2R5IiwgIiQiLCAiZmluZCIsICJjc3MiLCAiZWxlbWVudCIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgIiRlbGVtZW50IiwgIm9uIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImFwaSIsICJpbml0TXdBcGkiLCAibG9jYWxTdG9yYWdlIiwgInJlbW92ZUl0ZW0iLCAicGFyYW1zIiwgImFjdGlvbiIsICJ0aXRsZXMiLCAicG9zdCIsICJ0aGVuIiwgIm5vdGlmeSIsICJ0YWciLCAidHlwZSIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAiY2F0Y2giXQp9Cg==

})();

/* </nowiki> */
