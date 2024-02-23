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
//! src/UTCLiveClock/options.json
var defaultTimeZone = "Asia/Shanghai";
var version = "2.0";
//! src/UTCLiveClock/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("UTCLiveClock/".concat(version));
//! src/UTCLiveClock/UTCLiveClock.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/UTCLiveClock/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Success: (0, import_ext_gadget2.localize)({
      en: "Cache cleared!",
      "zh-hans": "缓存清除成功",
      "zh-hant": "快取清除成功"
    }),
    Failed: (0, import_ext_gadget2.localize)({
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
//! src/UTCLiveClock/modules/util/padWithZeroes.ts
var padWithZeroes = (number) => {
  return number < 10 ? "0".concat(number.toString()) : number.toString();
};
//! src/UTCLiveClock/modules/showTime.ts
var showTime = ($element) => {
  const {
    UTCLiveClockTimeZone: windowUTCLiveClockTimeZone
  } = window;
  let timezone = (windowUTCLiveClockTimeZone ? String(windowUTCLiveClockTimeZone) : "") || defaultTimeZone;
  let hh = 0;
  let mm = 0;
  let ss = 0;
  const now = /* @__PURE__ */ new Date();
  try {
    const date = new Date(now.toLocaleString("en-US", {
      timeZone: timezone
    }));
    hh = date.getHours();
    mm = date.getMinutes();
    ss = date.getSeconds();
  } catch {
    timezone = "UTC";
    console.log("[UTCLiveClock]: Error creating `Date` object with timezone '".concat(timezone, "'"));
  }
  if (timezone === "UTC") {
    hh = now.getUTCHours();
    mm = now.getUTCMinutes();
    ss = now.getUTCSeconds();
  } else if (timezone === "local") {
    hh = now.getHours();
    mm = now.getMinutes();
    ss = now.getSeconds();
  }
  $element.text("".concat(padWithZeroes(hh), ":").concat(padWithZeroes(mm), ":").concat(padWithZeroes(ss)));
  const ms = now.getUTCMilliseconds();
  setTimeout(() => {
    showTime($element);
  }, 1100 - ms);
};
//! src/UTCLiveClock/UTCLiveClock.ts
/*!
 * This gadget adds a clock in the personal toolbar that shows the current time
 * in UTC (or a different timezone of your choosing), and also provides a link
 * to purge the current page.
 *
 * Revision: July 2020
 * Source: https://www.mediawiki.org/wiki/MediaWiki:Gadget-UTCLiveClock.js
 *
 * To set the timezone used to one other than UTC, set window.LiveClockTimeZone to
 * the desired timezone. For example, adding the following to your common.js
 *      window.LiveClockTimeZone = 'America/Los_Angeles';
 * would result in the local time in Los Angeles being shown. See
 * TZ database for valid options.
 */
void (0, import_ext_gadget3.getBody)().then(($body) => {
  $body.find(".client-js > body.skin-vector #p-personal ul").css("margin-right", "initial");
  const element = mw.util.addPortletLink("p-personal", "#", "", "utcdate");
  if (!element) {
    return;
  }
  const $element = $(element);
  const {
    wgPageName,
    wgWikiID
  } = mw.config.get();
  $element.on("click", (event) => {
    event.preventDefault();
    mw.storage.remove("MediaWikiModuleStore:".concat(wgWikiID));
    const params = {
      action: "purge",
      titles: wgPageName
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
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VUQ0xpdmVDbG9jay9vcHRpb25zLmpzb24iLCAic3JjL1VUQ0xpdmVDbG9jay9tb2R1bGVzL2FwaS50cyIsICJzcmMvVVRDTGl2ZUNsb2NrL1VUQ0xpdmVDbG9jay50cyIsICJzcmMvVVRDTGl2ZUNsb2NrL21vZHVsZXMvaTE4bi50cyIsICJzcmMvVVRDTGl2ZUNsb2NrL21vZHVsZXMvdXRpbC9wYWRXaXRoWmVyb2VzLnRzIiwgInNyYy9VVENMaXZlQ2xvY2svbW9kdWxlcy9zaG93VGltZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImRlZmF1bHRUaW1lWm9uZVwiOiBcIkFzaWEvU2hhbmdoYWlcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFVUQ0xpdmVDbG9jay8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgIi8qIVxuICogVGhpcyBnYWRnZXQgYWRkcyBhIGNsb2NrIGluIHRoZSBwZXJzb25hbCB0b29sYmFyIHRoYXQgc2hvd3MgdGhlIGN1cnJlbnQgdGltZVxuICogaW4gVVRDIChvciBhIGRpZmZlcmVudCB0aW1lem9uZSBvZiB5b3VyIGNob29zaW5nKSwgYW5kIGFsc28gcHJvdmlkZXMgYSBsaW5rXG4gKiB0byBwdXJnZSB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIFJldmlzaW9uOiBKdWx5IDIwMjBcbiAqIFNvdXJjZTogaHR0cHM6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL01lZGlhV2lraTpHYWRnZXQtVVRDTGl2ZUNsb2NrLmpzXG4gKlxuICogVG8gc2V0IHRoZSB0aW1lem9uZSB1c2VkIHRvIG9uZSBvdGhlciB0aGFuIFVUQywgc2V0IHdpbmRvdy5MaXZlQ2xvY2tUaW1lWm9uZSB0b1xuICogdGhlIGRlc2lyZWQgdGltZXpvbmUuIEZvciBleGFtcGxlLCBhZGRpbmcgdGhlIGZvbGxvd2luZyB0byB5b3VyIGNvbW1vbi5qc1xuICogICAgICB3aW5kb3cuTGl2ZUNsb2NrVGltZVpvbmUgPSAnQW1lcmljYS9Mb3NfQW5nZWxlcyc7XG4gKiB3b3VsZCByZXN1bHQgaW4gdGhlIGxvY2FsIHRpbWUgaW4gTG9zIEFuZ2VsZXMgYmVpbmcgc2hvd24uIFNlZVxuICogVFogZGF0YWJhc2UgZm9yIHZhbGlkIG9wdGlvbnMuXG4gKi9cbmltcG9ydCAnLi9VVENMaXZlQ2xvY2subGVzcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7c2hvd1RpbWV9IGZyb20gJy4vbW9kdWxlcy9zaG93VGltZSc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvLyBSZXNldCB3aGl0ZXNwYWNlIHRoYXQgd2FzIHNldCBpbiB0aGUgcGVlciBDU1MgZ2FkZ2V0OyB0aGlzIHByZXZlbnRzIHRoZVxuXHQvLyBlZmZlY3Qgb2YgdGhlIHAtcGVyc29uYWwgbWVudSBqdW1waW5nIHRvIHRoZSBsZWZ0IHdoZW4gdGhlIEphdmFTY3JpcHRcblx0Ly8gbG9hZHMuXG5cdCRib2R5LmZpbmQoJy5jbGllbnQtanMgPiBib2R5LnNraW4tdmVjdG9yICNwLXBlcnNvbmFsIHVsJykuY3NzKCdtYXJnaW4tcmlnaHQnLCAnaW5pdGlhbCcpO1xuXG5cdC8vIEFkZCB0aGUgcG9ydGxldCBsaW5rLlxuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoJ3AtcGVyc29uYWwnLCAnIycsICcnLCAndXRjZGF0ZScpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cblx0Ly8gUHVyZ2UgdGhlIHBhZ2Ugd2hlbiB0aGUgY2xvY2sgaXMgY2xpY2tlZC4gV2UgaGF2ZSB0byBkbyB0aGlzIHRocm91Z2ggdGhlXG5cdC8vIEFQSSwgYXMgcHVyZ2UgVVJMcyBub3cgbWFrZSBwZW9wbGUgY2xpY2sgdGhyb3VnaCBhIGNvbmZpcm1hdGlvbiBzY3JlZW4uXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lLCB3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdCRlbGVtZW50Lm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0bXcuc3RvcmFnZS5yZW1vdmUoYE1lZGlhV2lraU1vZHVsZVN0b3JlOiR7d2dXaWtpSUR9YCk7XG5cblx0XHRjb25zdCBwYXJhbXM6IEFwaVB1cmdlUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncHVyZ2UnLFxuXHRcdFx0dGl0bGVzOiB3Z1BhZ2VOYW1lLFxuXHRcdH07XG5cdFx0YXBpLnBvc3QocGFyYW1zKVxuXHRcdFx0LnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdTdWNjZXNzJyksIHtcblx0XHRcdFx0XHR0YWc6ICdVVENMaXZlQ2xvY2snLFxuXHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCgoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ0ZhaWxlZCcpLCB7XG5cdFx0XHRcdFx0dGFnOiAnVVRDTGl2ZUNsb2NrJyxcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9KTtcblxuXHQvLyBTaG93IHRoZSBjbG9jay5cblx0c2hvd1RpbWUoJGVsZW1lbnQuZmluZCgnYTpmaXJzdCcpKTtcbn0pO1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRTdWNjZXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhY2hlIGNsZWFyZWQhJyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8k+WtmOa4hemZpOaIkOWKnycsXG5cdFx0XHQnemgtaGFudCc6ICflv6vlj5bmuIXpmaTmiJDlip8nLFxuXHRcdH0pLFxuXHRcdEZhaWxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGYWlsZWQgdG8gY2xlYXIgY2FjaGUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8k+WtmOa4hemZpOWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICflv6vlj5bmuIXpmaTlpLHotKUnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBwYWRXaXRoWmVyb2VzID0gKG51bWJlcjogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0Ly8gUGFkIGEgbnVtYmVyIHdpdGggemVyb2VzLiBUaGUgbnVtYmVyIG11c3QgYmUgYW4gaW50ZWdlciB3aGVyZVxuXHQvLyAwIDw9IG51bWJlciA8IDEwMC5cblx0cmV0dXJuIG51bWJlciA8IDEwID8gYDAke251bWJlci50b1N0cmluZygpfWAgOiBudW1iZXIudG9TdHJpbmcoKTtcbn07XG5cbmV4cG9ydCB7cGFkV2l0aFplcm9lc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtwYWRXaXRoWmVyb2VzfSBmcm9tICcuL3V0aWwvcGFkV2l0aFplcm9lcyc7XG5cbmNvbnN0IHNob3dUaW1lID0gKCRlbGVtZW50OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3Qge1VUQ0xpdmVDbG9ja1RpbWVab25lOiB3aW5kb3dVVENMaXZlQ2xvY2tUaW1lWm9uZX0gPSB3aW5kb3c7XG5cdGxldCB0aW1lem9uZTogc3RyaW5nID1cblx0XHQod2luZG93VVRDTGl2ZUNsb2NrVGltZVpvbmUgPyBTdHJpbmcod2luZG93VVRDTGl2ZUNsb2NrVGltZVpvbmUpIDogJycpIHx8IE9QVElPTlMuZGVmYXVsdFRpbWVab25lO1xuXG5cdC8vIFNldCB0aGUgdGltZS5cblx0bGV0IGhoOiBudW1iZXIgPSAwO1xuXHRsZXQgbW06IG51bWJlciA9IDA7XG5cdGxldCBzczogbnVtYmVyID0gMDtcblxuXHRjb25zdCBub3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXHR0cnkge1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShcblx0XHRcdG5vdy50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG5cdFx0XHRcdHRpbWVab25lOiB0aW1lem9uZSxcblx0XHRcdH0pXG5cdFx0KTtcblx0XHRoaCA9IGRhdGUuZ2V0SG91cnMoKTtcblx0XHRtbSA9IGRhdGUuZ2V0TWludXRlcygpO1xuXHRcdHNzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG5cdH0gY2F0Y2gge1xuXHRcdHRpbWV6b25lID0gJ1VUQyc7XG5cdFx0Y29uc29sZS5sb2coYFtVVENMaXZlQ2xvY2tdOiBFcnJvciBjcmVhdGluZyBcXGBEYXRlXFxgIG9iamVjdCB3aXRoIHRpbWV6b25lICcke3RpbWV6b25lfSdgKTtcblx0fVxuXG5cdGlmICh0aW1lem9uZSA9PT0gJ1VUQycpIHtcblx0XHRoaCA9IG5vdy5nZXRVVENIb3VycygpO1xuXHRcdG1tID0gbm93LmdldFVUQ01pbnV0ZXMoKTtcblx0XHRzcyA9IG5vdy5nZXRVVENTZWNvbmRzKCk7XG5cdH0gZWxzZSBpZiAodGltZXpvbmUgPT09ICdsb2NhbCcpIHtcblx0XHRoaCA9IG5vdy5nZXRIb3VycygpO1xuXHRcdG1tID0gbm93LmdldE1pbnV0ZXMoKTtcblx0XHRzcyA9IG5vdy5nZXRTZWNvbmRzKCk7XG5cdH1cblxuXHQkZWxlbWVudC50ZXh0KGAke3BhZFdpdGhaZXJvZXMoaGgpfToke3BhZFdpdGhaZXJvZXMobW0pfToke3BhZFdpdGhaZXJvZXMoc3MpfWApO1xuXG5cdC8vIFNjaGVkdWxlIHRoZSBuZXh0IHRpbWUgY2hhbmdlLlxuXHQvL1xuXHQvLyBXZSBzY2hlZHVsZSB0aGUgY2hhbmdlIGZvciAxMDAgbXMgX2FmdGVyXyB0aGUgbmV4dCBjbG9jayB0aWNrLiBUaGUgZGVsYXlcblx0Ly8gZnJvbSBzZXRUaW1lb3V0IGlzIG5vdCBwcmVjaXNlLCBhbmQgaWYgd2UgYWltIGV4YWN0bHkgZm9yIHRoZSB0aWNrLCB0aGVyZVxuXHQvLyBpcyBhIGNoYW5jZSB0aGF0IHRoZSBmdW5jdGlvbiB3aWxsIHJ1biBzbGlnaHRseSBiZWZvcmUgaXQuIElmIHRoaXNcblx0Ly8gaGFwcGVucywgd2Ugd2lsbCBkaXNwbGF5IHRoZSBzYW1lIHRpbWUgZm9yIHR3byBzZWNvbmRzIGluIGEgcm93IC0gbm90XG5cdC8vIGdvb2QuIEJ5IHNjaGVkdWxpbmcgMTAwIG1zIGFmdGVyIHRoZSB0aWNrLCB3ZSB3aWxsIGFsd2F5cyBiZSBhYm91dCAxMDAgbXNcblx0Ly8gbGF0ZSwgYnV0IHdlIGFyZSBhbHNvIHZlcnkgbGlrZWx5IHRvIGRpc3BsYXkgYSBuZXcgdGltZSBldmVyeSBzZWNvbmQuXG5cdGNvbnN0IG1zOiBudW1iZXIgPSBub3cuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG5cdHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuXHRcdHNob3dUaW1lKCRlbGVtZW50KTtcblx0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QUcsU0FBVUMsV0FBbUM7QUFDeERBLFVBQU1DLGVBQWU7QUFFckJWLE9BQUdXLFFBQVFDLE9BQUEsd0JBQUEzRCxPQUErQm9ELFFBQVEsQ0FBRTtBQUVwRCxVQUFNUSxTQUF5QjtNQUM5QkMsUUFBUTtNQUNSQyxRQUFRWDtJQUNUO0FBQ0FyRCxRQUFJaUUsS0FBS0gsTUFBTSxFQUNibEIsS0FBSyxNQUFZO0FBQ2pCLFdBQUtLLEdBQUdpQixPQUFPdkQsV0FBVyxTQUFTLEdBQUc7UUFDckN3RCxLQUFLO1FBQ0xDLE1BQU07TUFDUCxDQUFDO0FBQ0RDLGVBQVNDLE9BQU87SUFDakIsQ0FBQyxFQUNBQyxNQUFNLE1BQVk7QUFDbEIsV0FBS3RCLEdBQUdpQixPQUFPdkQsV0FBVyxRQUFRLEdBQUc7UUFDcEN3RCxLQUFLO1FBQ0xDLE1BQU07TUFDUCxDQUFDO0lBQ0YsQ0FBQztFQUNILENBQUM7QUFHRHBELFdBQVNDLFNBQVM2QixLQUFLLFNBQVMsQ0FBQztBQUNsQyxDQUFDOyIsCiAgIm5hbWVzIjogWyJkZWZhdWx0VGltZVpvbmUiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlN1Y2Nlc3MiLCAibG9jYWxpemUiLCAiZW4iLCAiRmFpbGVkIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJwYWRXaXRoWmVyb2VzIiwgIm51bWJlciIsICJ0b1N0cmluZyIsICJzaG93VGltZSIsICIkZWxlbWVudCIsICJVVENMaXZlQ2xvY2tUaW1lWm9uZSIsICJ3aW5kb3dVVENMaXZlQ2xvY2tUaW1lWm9uZSIsICJ3aW5kb3ciLCAidGltZXpvbmUiLCAiU3RyaW5nIiwgImhoIiwgIm1tIiwgInNzIiwgIm5vdyIsICJEYXRlIiwgImRhdGUiLCAidG9Mb2NhbGVTdHJpbmciLCAidGltZVpvbmUiLCAiZ2V0SG91cnMiLCAiZ2V0TWludXRlcyIsICJnZXRTZWNvbmRzIiwgImNvbnNvbGUiLCAibG9nIiwgImdldFVUQ0hvdXJzIiwgImdldFVUQ01pbnV0ZXMiLCAiZ2V0VVRDU2Vjb25kcyIsICJ0ZXh0IiwgIm1zIiwgImdldFVUQ01pbGxpc2Vjb25kcyIsICJzZXRUaW1lb3V0IiwgImdldEJvZHkiLCAidGhlbiIsICIkYm9keSIsICJmaW5kIiwgImNzcyIsICJlbGVtZW50IiwgIm13IiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiJCIsICJ3Z1BhZ2VOYW1lIiwgIndnV2lraUlEIiwgImNvbmZpZyIsICJnZXQiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAic3RvcmFnZSIsICJyZW1vdmUiLCAicGFyYW1zIiwgImFjdGlvbiIsICJ0aXRsZXMiLCAicG9zdCIsICJub3RpZnkiLCAidGFnIiwgInR5cGUiLCAibG9jYXRpb24iLCAicmVsb2FkIiwgImNhdGNoIl0KfQo=
