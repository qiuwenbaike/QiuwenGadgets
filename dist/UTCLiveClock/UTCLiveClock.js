/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-UTCLiveClock.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/UTCLiveClock}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-UTCLiveClock.css}
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-UTCLiveClock-pagestyles.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/UTCLiveClock}
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
    const api = (0, import_ext_gadget2.initMwApi)("UTCLiveClock/1.1");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VUQ0xpdmVDbG9jay9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9VVENMaXZlQ2xvY2svbW9kdWxlcy9pMThuLnRzIiwgInNyYy9VVENMaXZlQ2xvY2svbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9VVENMaXZlQ2xvY2svVVRDTGl2ZUNsb2NrLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19BQ1RJT046IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJyk7XG5cbmNvbnN0IFdHX1dJS0lfSUQ6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyk7XG5cbmV4cG9ydCB7V0dfQUNUSU9OLCBXR19XSUtJX0lEfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0U3VjY2VzczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDYWNoZSBjbGVhcmVkIScsXG5cdFx0XHQnemgtaGFucyc6ICfnvJPlrZjmuIXpmaTmiJDlip8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5b+r5Y+W5riF6Zmk5oiQ5YqfJyxcblx0XHR9KSxcblx0XHRGYWlsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmFpbGVkIHRvIGNsZWFyIGNhY2hlLicsXG5cdFx0XHQnemgtaGFucyc6ICfnvJPlrZjmuIXpmaTlpLHotKUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5b+r5Y+W5riF6Zmk5aSx6LSlJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtXR19XSUtJX0lEfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBwYWRXaXRoWmVyb2VzID0gKG51bWJlcjogbnVtYmVyKSA9PiB7XG5cdC8vIFBhZCBhIG51bWJlciB3aXRoIHplcm9lcy4gVGhlIG51bWJlciBtdXN0IGJlIGFuIGludGVnZXIgd2hlcmVcblx0Ly8gMCA8PSBudW1iZXIgPCAxMDAuXG5cdHJldHVybiBudW1iZXIgPCAxMCA/IGAwJHtudW1iZXIudG9TdHJpbmcoKX1gIDogbnVtYmVyLnRvU3RyaW5nKCk7XG59O1xuXG5jb25zdCBzaG93VGltZSA9ICgkdGFyZ2V0OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3Qgbm93OiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3Qgd2luZG93VVRDTGl2ZUNsb2NrVGltZVpvbmU6IHR5cGVvZiB3aW5kb3cuVVRDTGl2ZUNsb2NrVGltZVpvbmUgPSB3aW5kb3cuVVRDTGl2ZUNsb2NrVGltZVpvbmU7XG5cdGxldCB0aW1lem9uZTogc3RyaW5nID0gKHdpbmRvd1VUQ0xpdmVDbG9ja1RpbWVab25lID8gU3RyaW5nKHdpbmRvd1VUQ0xpdmVDbG9ja1RpbWVab25lKSA6ICcnKSB8fCAnQXNpYS9TaGFuZ2hhaSc7XG5cdC8vIFNldCB0aGUgdGltZS5cblx0bGV0IGhoOiBudW1iZXI7XG5cdGxldCBtbTogbnVtYmVyO1xuXHRsZXQgc3M6IG51bWJlcjtcblx0aWYgKHRpbWV6b25lID09PSAnVVRDJykge1xuXHRcdGhoID0gbm93LmdldFVUQ0hvdXJzKCk7XG5cdFx0bW0gPSBub3cuZ2V0VVRDTWludXRlcygpO1xuXHRcdHNzID0gbm93LmdldFVUQ1NlY29uZHMoKTtcblx0fSBlbHNlIGlmICh0aW1lem9uZSA9PT0gJ2xvY2FsJykge1xuXHRcdGhoID0gbm93LmdldEhvdXJzKCk7XG5cdFx0bW0gPSBub3cuZ2V0TWludXRlcygpO1xuXHRcdHNzID0gbm93LmdldFNlY29uZHMoKTtcblx0fSBlbHNlIHtcblx0XHRsZXQgbmV3Tm93OiBEYXRlO1xuXHRcdHRyeSB7XG5cdFx0XHRuZXdOb3cgPSBuZXcgRGF0ZShcblx0XHRcdFx0bm93LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcblx0XHRcdFx0XHR0aW1lWm9uZTogdGltZXpvbmUsXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdFx0aGggPSBuZXdOb3cuZ2V0SG91cnMoKTtcblx0XHRcdG1tID0gbmV3Tm93LmdldE1pbnV0ZXMoKTtcblx0XHRcdHNzID0gbmV3Tm93LmdldFNlY29uZHMoKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdGNvbnNvbGUubG9nKGBbVVRDTGl2ZUNsb2NrXTogZXJyb3IgY3JlYXRpbmcgRGF0ZSBvYmplY3Qgd2l0aCB0aW1lem9uZSAnJHt0aW1lem9uZX0nYCk7XG5cdFx0XHR0aW1lem9uZSA9ICdVVEMnO1xuXHRcdFx0bmV3Tm93ID0gbm93O1xuXHRcdFx0aGggPSBub3cuZ2V0VVRDSG91cnMoKTtcblx0XHRcdG1tID0gbm93LmdldFVUQ01pbnV0ZXMoKTtcblx0XHRcdHNzID0gbm93LmdldFVUQ1NlY29uZHMoKTtcblx0XHR9XG5cdH1cblx0Y29uc3QgdGltZTogc3RyaW5nID0gYCR7cGFkV2l0aFplcm9lcyhoaCl9OiR7cGFkV2l0aFplcm9lcyhtbSl9OiR7cGFkV2l0aFplcm9lcyhzcyl9YDtcblx0JHRhcmdldC50ZXh0KHRpbWUpO1xuXHQvLyBTY2hlZHVsZSB0aGUgbmV4dCB0aW1lIGNoYW5nZS5cblx0Ly9cblx0Ly8gV2Ugc2NoZWR1bGUgdGhlIGNoYW5nZSBmb3IgMTAwIG1zIF9hZnRlcl8gdGhlIG5leHQgY2xvY2sgdGljay4gVGhlIGRlbGF5XG5cdC8vIGZyb20gc2V0VGltZW91dCBpcyBub3QgcHJlY2lzZSwgYW5kIGlmIHdlIGFpbSBleGFjdGx5IGZvciB0aGUgdGljaywgdGhlcmVcblx0Ly8gaXMgYSBjaGFuY2UgdGhhdCB0aGUgZnVuY3Rpb24gd2lsbCBydW4gc2xpZ2h0bHkgYmVmb3JlIGl0LiBJZiB0aGlzXG5cdC8vIGhhcHBlbnMsIHdlIHdpbGwgZGlzcGxheSB0aGUgc2FtZSB0aW1lIGZvciB0d28gc2Vjb25kcyBpbiBhIHJvdyAtIG5vdFxuXHQvLyBnb29kLiBCeSBzY2hlZHVsaW5nIDEwMCBtcyBhZnRlciB0aGUgdGljaywgd2Ugd2lsbCBhbHdheXMgYmUgYWJvdXQgMTAwIG1zXG5cdC8vIGxhdGUsIGJ1dCB3ZSBhcmUgYWxzbyB2ZXJ5IGxpa2VseSB0byBkaXNwbGF5IGEgbmV3IHRpbWUgZXZlcnkgc2Vjb25kLlxuXHRjb25zdCBtczogbnVtYmVyID0gbm93LmdldFVUQ01pbGxpc2Vjb25kcygpO1xuXHRzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcblx0XHRzaG93VGltZSgkdGFyZ2V0KTtcblx0fSwgMTEwMCAtIG1zKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaXZlQ2xvY2sgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0Ly8gUmVzZXQgd2hpdGVzcGFjZSB0aGF0IHdhcyBzZXQgaW4gdGhlIHBlZXIgQ1NTIGdhZGdldDsgdGhpcyBwcmV2ZW50cyB0aGVcblx0Ly8gZWZmZWN0IG9mIHRoZSBwLXBlcnNvbmFsIG1lbnUganVtcGluZyB0byB0aGUgbGVmdCB3aGVuIHRoZSBKYXZhU2NyaXB0XG5cdC8vIGxvYWRzLlxuXHQkYm9keS5maW5kKCcuY2xpZW50LWpzID4gYm9keS5za2luLXZlY3RvciAjcC1wZXJzb25hbCB1bCcpLmNzcygnbWFyZ2luLXJpZ2h0JywgJ2luaXRpYWwnKTtcblx0Ly8gQWRkIHRoZSBwb3J0bGV0IGxpbmsuXG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluaygncC1wZXJzb25hbCcsICcjJywgJycsICd1dGNkYXRlJyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxMSUVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblx0Ly8gUHVyZ2UgdGhlIHBhZ2Ugd2hlbiB0aGUgY2xvY2sgaXMgY2xpY2tlZC4gV2UgaGF2ZSB0byBkbyB0aGlzIHRocm91Z2ggdGhlXG5cdC8vIEFQSSwgYXMgcHVyZ2UgVVJMcyBub3cgbWFrZSBwZW9wbGUgY2xpY2sgdGhyb3VnaCBhIGNvbmZpcm1hdGlvbiBzY3JlZW4uXG5cdCRlbGVtZW50Lm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQ8SFRNTExJRWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdVVENMaXZlQ2xvY2svMS4xJyk7XG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYE1lZGlhV2lraU1vZHVsZVN0b3JlOiR7V0dfV0lLSV9JRH1gKTtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVB1cmdlUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncHVyZ2UnLFxuXHRcdFx0dGl0bGVzOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0fTtcblx0XHRhcGkucG9zdChwYXJhbXMpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ1N1Y2Nlc3MnKSwge3RhZzogJ1VUQ0xpdmVDbG9jaycsIHR5cGU6ICdzdWNjZXNzJ30pO1xuXHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdGYWlsZWQnKSwge3RhZzogJ1VUQ0xpdmVDbG9jaycsIHR5cGU6ICdlcnJvcid9KTtcblx0XHRcdH0pO1xuXHR9KTtcblx0Ly8gU2hvdyB0aGUgY2xvY2suXG5cdHNob3dUaW1lKCRlbGVtZW50LmZpbmQoJ2E6Zmlyc3QnKSk7XG59O1xuIiwgIi8qKlxuICogVGhpcyBnYWRnZXQgYWRkcyBhIGNsb2NrIGluIHRoZSBwZXJzb25hbCB0b29sYmFyIHRoYXQgc2hvd3MgdGhlIGN1cnJlbnQgdGltZVxuICogaW4gVVRDIChvciBhIGRpZmZlcmVudCB0aW1lem9uZSBvZiB5b3VyIGNob29zaW5nKSwgYW5kIGFsc28gcHJvdmlkZXMgYSBsaW5rXG4gKiB0byBwdXJnZSB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIFJldmlzaW9uOiBKdWx5IDIwMjBcbiAqIFNvdXJjZTogaHR0cHM6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL01lZGlhV2lraTpHYWRnZXQtVVRDTGl2ZUNsb2NrLmpzXG4gKlxuICogSW5zdGFsbGF0aW9uOlxuICpcbiAqIDEuIENvcHkgdGhlIEpTIHBhZ2UgYXQgaHR0cHM6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL01lZGlhV2lraTpHYWRnZXQtVVRDTGl2ZUNsb2NrLmpzXG4gKiB0byB0aGUgcGFnZSBbW01lZGlhV2lraTpHYWRnZXQtVVRDTGl2ZUNsb2NrLmpzXV0gb24geW91ciB3aWtpLlxuICpcbiAqIDIuIENvcHkgdGhlIENTUyBwYWdlIGF0IGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9NZWRpYVdpa2k6R2FkZ2V0LVVUQ0xpdmVDbG9jay5jc3NcbiAqIHRvIHRoZSBwYWdlIFtbTWVkaWFXaWtpOkdhZGdldC1VVENMaXZlQ2xvY2suY3NzXV0gb24geW91ciB3aWtpLlxuICpcbiAqIDMuIENvcHkgdGhlIENTUyBwYWdlIGF0IGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9NZWRpYVdpa2k6R2FkZ2V0LVVUQ0xpdmVDbG9jay1wYWdlc3R5bGVzLmNzc1xuICogdG8gdGhlIHBhZ2UgW1tNZWRpYVdpa2k6R2FkZ2V0LVVUQ0xpdmVDbG9jay1wYWdlc3R5bGVzLmNzc11dIG9uIHlvdXIgd2lraS5cbiAqXG4gKiA0LiBBZGQgYSBkZXNjcmlwdGlvbiBvZiB0aGUgZ2FkZ2V0IHRvIHRoZSBwYWdlIFtbTWVkaWFXaWtpOkdhZGdldC1VVENMaXZlQ2xvY2tdXVxuICogb24geW91ciB3aWtpLiBZb3UgY2FuIHVzZSBodHRwczovL3d3dy5tZWRpYXdpa2kub3JnL3dpa2kvTWVkaWFXaWtpOkdhZGdldC1VVENMaXZlQ2xvY2tcbiAqIGFzIGEgdGVtcGxhdGUuXG4gKlxuICogNS4gQWRkIHRoZSBmb2xsb3dpbmcgY29kZSB0byB5b3VyIHdpa2kncyBbW01lZGlhV2lraTpHYWRnZXRzLWRlZmluaXRpb25dXTpcbiAqXG4gKiBVVENMaXZlQ2xvY2tbUmVzb3VyY2VMb2FkZXJ8dHlwZT1nZW5lcmFsfGRlcGVuZGVuY2llcz1tZWRpYXdpa2kudXRpbCxtZWRpYXdpa2kuYXBpfHBlZXJzPVVUQ0xpdmVDbG9jay1wYWdlc3R5bGVzXXxVVENMaXZlQ2xvY2suanN8VVRDTGl2ZUNsb2NrLmNzc1xuICogVVRDTGl2ZUNsb2NrLXBhZ2VzdHlsZXNbaGlkZGVufHNraW5zPXZlY3Rvcl18VVRDTGl2ZUNsb2NrLXBhZ2VzdHlsZXMuY3NzXG4gKlxuICpcbiAqIFRvIHNldCB0aGUgdGltZXpvbmUgdXNlZCB0byBvbmUgb3RoZXIgdGhhbiBVVEMsIHNldCB3aW5kb3cuTGl2ZUNsb2NrVGltZVpvbmUgdG9cbiAqIHRoZSBkZXNpcmVkIHRpbWV6b25lLiBGb3IgZXhhbXBsZSwgYWRkaW5nIHRoZSBmb2xsb3dpbmcgdG8geW91ciBjb21tb24uanNcbiAqICAgICAgd2luZG93LkxpdmVDbG9ja1RpbWVab25lID0gJ0FtZXJpY2EvTG9zX0FuZ2VsZXMnO1xuICogd291bGQgcmVzdWx0IGluIHRoZSBsb2NhbCB0aW1lIGluIExvcyBBbmdlbGVzIGJlaW5nIHNob3duLiBTZWVcbiAqIFRaIGRhdGFiYXNlIGZvciB2YWxpZCBvcHRpb25zLlxuICovXG5pbXBvcnQge2xpdmVDbG9ja30gZnJvbSAnLi9tb2R1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aERDLGlCQUFhQyxXQUFBLHdCQUFBN0MsT0FBbUNkLFVBQVUsQ0FBRTtBQUM1RCxVQUFNNEQsU0FBeUI7TUFDOUJDLFFBQVE7TUFDUkMsUUFBUWpFLEdBQUdDLE9BQU9DLElBQUksWUFBWTtJQUNuQztBQUNBeUQsUUFBSU8sS0FBS0gsTUFBTSxFQUNiSSxLQUFLLE1BQU07QUFDWCxXQUFLbkUsR0FBR29FLE9BQU94RCxXQUFXLFNBQVMsR0FBRztRQUFDeUQsS0FBSztRQUFnQkMsTUFBTTtNQUFTLENBQUM7QUFDNUVDLGVBQVNDLE9BQU87SUFDakIsQ0FBQyxFQUNBQyxNQUFNLE1BQU07QUFDWixXQUFLekUsR0FBR29FLE9BQU94RCxXQUFXLFFBQVEsR0FBRztRQUFDeUQsS0FBSztRQUFnQkMsTUFBTTtNQUFPLENBQUM7SUFDMUUsQ0FBQztFQUNILENBQUM7QUFFRG5ELFdBQVNvQyxTQUFTTCxLQUFLLFNBQVMsQ0FBQztBQUNsQzs7QUMxREFELEVBQUVGLFNBQVM7IiwKICAibmFtZXMiOiBbIldHX0FDVElPTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1dJS0lfSUQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiU3VjY2VzcyIsICJsb2NhbGl6ZSIsICJlbiIsICJGYWlsZWQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJwYWRXaXRoWmVyb2VzIiwgIm51bWJlciIsICJjb25jYXQiLCAidG9TdHJpbmciLCAic2hvd1RpbWUiLCAiJHRhcmdldCIsICJub3ciLCAiRGF0ZSIsICJ3aW5kb3dVVENMaXZlQ2xvY2tUaW1lWm9uZSIsICJ3aW5kb3ciLCAiVVRDTGl2ZUNsb2NrVGltZVpvbmUiLCAidGltZXpvbmUiLCAiU3RyaW5nIiwgImhoIiwgIm1tIiwgInNzIiwgImdldFVUQ0hvdXJzIiwgImdldFVUQ01pbnV0ZXMiLCAiZ2V0VVRDU2Vjb25kcyIsICJnZXRIb3VycyIsICJnZXRNaW51dGVzIiwgImdldFNlY29uZHMiLCAibmV3Tm93IiwgInRvTG9jYWxlU3RyaW5nIiwgInRpbWVab25lIiwgImNvbnNvbGUiLCAibG9nIiwgInRpbWUiLCAidGV4dCIsICJtcyIsICJnZXRVVENNaWxsaXNlY29uZHMiLCAic2V0VGltZW91dCIsICJsaXZlQ2xvY2siLCAiJGJvZHkiLCAiJCIsICJmaW5kIiwgImNzcyIsICJlbGVtZW50IiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiJGVsZW1lbnQiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJsb2NhbFN0b3JhZ2UiLCAicmVtb3ZlSXRlbSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgInRpdGxlcyIsICJwb3N0IiwgInRoZW4iLCAibm90aWZ5IiwgInRhZyIsICJ0eXBlIiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICJjYXRjaCJdCn0K

})();

/* </nowiki> */
