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
      format: "json",
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VUQ0xpdmVDbG9jay9vcHRpb25zLmpzb24iLCAic3JjL1VUQ0xpdmVDbG9jay9tb2R1bGVzL2FwaS50cyIsICJzcmMvVVRDTGl2ZUNsb2NrL1VUQ0xpdmVDbG9jay50cyIsICJzcmMvVVRDTGl2ZUNsb2NrL21vZHVsZXMvaTE4bi50cyIsICJzcmMvVVRDTGl2ZUNsb2NrL21vZHVsZXMvdXRpbC9wYWRXaXRoWmVyb2VzLnRzIiwgInNyYy9VVENMaXZlQ2xvY2svbW9kdWxlcy9zaG93VGltZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImRlZmF1bHRUaW1lWm9uZVwiOiBcIkFzaWEvU2hhbmdoYWlcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFVUQ0xpdmVDbG9jay8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgIi8qIVxuICogVGhpcyBnYWRnZXQgYWRkcyBhIGNsb2NrIGluIHRoZSBwZXJzb25hbCB0b29sYmFyIHRoYXQgc2hvd3MgdGhlIGN1cnJlbnQgdGltZVxuICogaW4gVVRDIChvciBhIGRpZmZlcmVudCB0aW1lem9uZSBvZiB5b3VyIGNob29zaW5nKSwgYW5kIGFsc28gcHJvdmlkZXMgYSBsaW5rXG4gKiB0byBwdXJnZSB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIFJldmlzaW9uOiBKdWx5IDIwMjBcbiAqIFNvdXJjZTogaHR0cHM6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL01lZGlhV2lraTpHYWRnZXQtVVRDTGl2ZUNsb2NrLmpzXG4gKlxuICogVG8gc2V0IHRoZSB0aW1lem9uZSB1c2VkIHRvIG9uZSBvdGhlciB0aGFuIFVUQywgc2V0IHdpbmRvdy5MaXZlQ2xvY2tUaW1lWm9uZSB0b1xuICogdGhlIGRlc2lyZWQgdGltZXpvbmUuIEZvciBleGFtcGxlLCBhZGRpbmcgdGhlIGZvbGxvd2luZyB0byB5b3VyIGNvbW1vbi5qc1xuICogICAgICB3aW5kb3cuTGl2ZUNsb2NrVGltZVpvbmUgPSAnQW1lcmljYS9Mb3NfQW5nZWxlcyc7XG4gKiB3b3VsZCByZXN1bHQgaW4gdGhlIGxvY2FsIHRpbWUgaW4gTG9zIEFuZ2VsZXMgYmVpbmcgc2hvd24uIFNlZVxuICogVFogZGF0YWJhc2UgZm9yIHZhbGlkIG9wdGlvbnMuXG4gKi9cbmltcG9ydCAnLi9VVENMaXZlQ2xvY2subGVzcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7c2hvd1RpbWV9IGZyb20gJy4vbW9kdWxlcy9zaG93VGltZSc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvLyBSZXNldCB3aGl0ZXNwYWNlIHRoYXQgd2FzIHNldCBpbiB0aGUgcGVlciBDU1MgZ2FkZ2V0OyB0aGlzIHByZXZlbnRzIHRoZVxuXHQvLyBlZmZlY3Qgb2YgdGhlIHAtcGVyc29uYWwgbWVudSBqdW1waW5nIHRvIHRoZSBsZWZ0IHdoZW4gdGhlIEphdmFTY3JpcHRcblx0Ly8gbG9hZHMuXG5cdCRib2R5LmZpbmQoJy5jbGllbnQtanMgPiBib2R5LnNraW4tdmVjdG9yICNwLXBlcnNvbmFsIHVsJykuY3NzKCdtYXJnaW4tcmlnaHQnLCAnaW5pdGlhbCcpO1xuXG5cdC8vIEFkZCB0aGUgcG9ydGxldCBsaW5rLlxuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoJ3AtcGVyc29uYWwnLCAnIycsICcnLCAndXRjZGF0ZScpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cblx0Ly8gUHVyZ2UgdGhlIHBhZ2Ugd2hlbiB0aGUgY2xvY2sgaXMgY2xpY2tlZC4gV2UgaGF2ZSB0byBkbyB0aGlzIHRocm91Z2ggdGhlXG5cdC8vIEFQSSwgYXMgcHVyZ2UgVVJMcyBub3cgbWFrZSBwZW9wbGUgY2xpY2sgdGhyb3VnaCBhIGNvbmZpcm1hdGlvbiBzY3JlZW4uXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lLCB3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdCRlbGVtZW50Lm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0bXcuc3RvcmFnZS5yZW1vdmUoYE1lZGlhV2lraU1vZHVsZVN0b3JlOiR7d2dXaWtpSUR9YCk7XG5cblx0XHRjb25zdCBwYXJhbXM6IEFwaVB1cmdlUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncHVyZ2UnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR0aXRsZXM6IHdnUGFnZU5hbWUsXG5cdFx0fTtcblx0XHRhcGkucG9zdChwYXJhbXMpXG5cdFx0XHQudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ1N1Y2Nlc3MnKSwge1xuXHRcdFx0XHRcdHRhZzogJ1VUQ0xpdmVDbG9jaycsXG5cdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnRmFpbGVkJyksIHtcblx0XHRcdFx0XHR0YWc6ICdVVENMaXZlQ2xvY2snLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH0pO1xuXG5cdC8vIFNob3cgdGhlIGNsb2NrLlxuXHRzaG93VGltZSgkZWxlbWVudC5maW5kKCdhOmZpcnN0JykpO1xufSk7XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFN1Y2Nlc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2FjaGUgY2xlYXJlZCEnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yT5a2Y5riF6Zmk5oiQ5YqfJyxcblx0XHRcdCd6aC1oYW50JzogJ+W/q+WPlua4hemZpOaIkOWKnycsXG5cdFx0fSksXG5cdFx0RmFpbGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZhaWxlZCB0byBjbGVhciBjYWNoZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn57yT5a2Y5riF6Zmk5aSx6LSlJyxcblx0XHRcdCd6aC1oYW50JzogJ+W/q+WPlua4hemZpOWksei0pScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IHBhZFdpdGhaZXJvZXMgPSAobnVtYmVyOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuXHQvLyBQYWQgYSBudW1iZXIgd2l0aCB6ZXJvZXMuIFRoZSBudW1iZXIgbXVzdCBiZSBhbiBpbnRlZ2VyIHdoZXJlXG5cdC8vIDAgPD0gbnVtYmVyIDwgMTAwLlxuXHRyZXR1cm4gbnVtYmVyIDwgMTAgPyBgMCR7bnVtYmVyLnRvU3RyaW5nKCl9YCA6IG51bWJlci50b1N0cmluZygpO1xufTtcblxuZXhwb3J0IHtwYWRXaXRoWmVyb2VzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge3BhZFdpdGhaZXJvZXN9IGZyb20gJy4vdXRpbC9wYWRXaXRoWmVyb2VzJztcblxuY29uc3Qgc2hvd1RpbWUgPSAoJGVsZW1lbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCB7VVRDTGl2ZUNsb2NrVGltZVpvbmU6IHdpbmRvd1VUQ0xpdmVDbG9ja1RpbWVab25lfSA9IHdpbmRvdztcblx0bGV0IHRpbWV6b25lOiBzdHJpbmcgPVxuXHRcdCh3aW5kb3dVVENMaXZlQ2xvY2tUaW1lWm9uZSA/IFN0cmluZyh3aW5kb3dVVENMaXZlQ2xvY2tUaW1lWm9uZSkgOiAnJykgfHwgT1BUSU9OUy5kZWZhdWx0VGltZVpvbmU7XG5cblx0Ly8gU2V0IHRoZSB0aW1lLlxuXHRsZXQgaGg6IG51bWJlciA9IDA7XG5cdGxldCBtbTogbnVtYmVyID0gMDtcblx0bGV0IHNzOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0IG5vdzogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cdHRyeSB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKFxuXHRcdFx0bm93LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcblx0XHRcdFx0dGltZVpvbmU6IHRpbWV6b25lLFxuXHRcdFx0fSlcblx0XHQpO1xuXHRcdGhoID0gZGF0ZS5nZXRIb3VycygpO1xuXHRcdG1tID0gZGF0ZS5nZXRNaW51dGVzKCk7XG5cdFx0c3MgPSBkYXRlLmdldFNlY29uZHMoKTtcblx0fSBjYXRjaCB7XG5cdFx0dGltZXpvbmUgPSAnVVRDJztcblx0XHRjb25zb2xlLmxvZyhgW1VUQ0xpdmVDbG9ja106IEVycm9yIGNyZWF0aW5nIFxcYERhdGVcXGAgb2JqZWN0IHdpdGggdGltZXpvbmUgJyR7dGltZXpvbmV9J2ApO1xuXHR9XG5cblx0aWYgKHRpbWV6b25lID09PSAnVVRDJykge1xuXHRcdGhoID0gbm93LmdldFVUQ0hvdXJzKCk7XG5cdFx0bW0gPSBub3cuZ2V0VVRDTWludXRlcygpO1xuXHRcdHNzID0gbm93LmdldFVUQ1NlY29uZHMoKTtcblx0fSBlbHNlIGlmICh0aW1lem9uZSA9PT0gJ2xvY2FsJykge1xuXHRcdGhoID0gbm93LmdldEhvdXJzKCk7XG5cdFx0bW0gPSBub3cuZ2V0TWludXRlcygpO1xuXHRcdHNzID0gbm93LmdldFNlY29uZHMoKTtcblx0fVxuXG5cdCRlbGVtZW50LnRleHQoYCR7cGFkV2l0aFplcm9lcyhoaCl9OiR7cGFkV2l0aFplcm9lcyhtbSl9OiR7cGFkV2l0aFplcm9lcyhzcyl9YCk7XG5cblx0Ly8gU2NoZWR1bGUgdGhlIG5leHQgdGltZSBjaGFuZ2UuXG5cdC8vXG5cdC8vIFdlIHNjaGVkdWxlIHRoZSBjaGFuZ2UgZm9yIDEwMCBtcyBfYWZ0ZXJfIHRoZSBuZXh0IGNsb2NrIHRpY2suIFRoZSBkZWxheVxuXHQvLyBmcm9tIHNldFRpbWVvdXQgaXMgbm90IHByZWNpc2UsIGFuZCBpZiB3ZSBhaW0gZXhhY3RseSBmb3IgdGhlIHRpY2ssIHRoZXJlXG5cdC8vIGlzIGEgY2hhbmNlIHRoYXQgdGhlIGZ1bmN0aW9uIHdpbGwgcnVuIHNsaWdodGx5IGJlZm9yZSBpdC4gSWYgdGhpc1xuXHQvLyBoYXBwZW5zLCB3ZSB3aWxsIGRpc3BsYXkgdGhlIHNhbWUgdGltZSBmb3IgdHdvIHNlY29uZHMgaW4gYSByb3cgLSBub3Rcblx0Ly8gZ29vZC4gQnkgc2NoZWR1bGluZyAxMDAgbXMgYWZ0ZXIgdGhlIHRpY2ssIHdlIHdpbGwgYWx3YXlzIGJlIGFib3V0IDEwMCBtc1xuXHQvLyBsYXRlLCBidXQgd2UgYXJlIGFsc28gdmVyeSBsaWtlbHkgdG8gZGlzcGxheSBhIG5ldyB0aW1lIGV2ZXJ5IHNlY29uZC5cblx0Y29uc3QgbXM6IG51bWJlciA9IG5vdy5nZXRVVENNaWxsaXNlY29uZHMoKTtcblx0c2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG5cdFx0c2hvd1RpbWUoJGVsZW1lbnQpO1xuXHR9LCAxMTAwIC0gbXMpO1xufTtcblxuZXhwb3J0IHtzaG93VGltZX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsa0JBQW1CO0FBQ25CLElBQUFDLFVBQVc7O0FDRFosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsZ0JBQUFDLE9BQWtDTCxPQUFPLENBQUU7O0FDYS9ELElBQUFNLHFCQUFzQkosUUFBQSxpQkFBQTs7QUNoQnRCLElBQUFLLHFCQUF1QkwsUUFBQSxpQkFBQTtBQUV2QixJQUFNTSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxVQUFBLEdBQVNGLG1CQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFNBQUEsR0FBUUwsbUJBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUUsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDckJBLElBQU1DLGdCQUFpQkMsWUFBMkI7QUFHakQsU0FBT0EsU0FBUyxLQUFBLElBQUFaLE9BQVNZLE9BQU9DLFNBQVMsQ0FBQyxJQUFLRCxPQUFPQyxTQUFTO0FBQ2hFOztBQ0RBLElBQU1DLFdBQVlDLGNBQTJCO0FBQzVDLFFBQU07SUFBQ0Msc0JBQXNCQztFQUEwQixJQUFJQztBQUMzRCxNQUFJQyxZQUNGRiw2QkFBNkJHLE9BQU9ILDBCQUEwQixJQUFJLE9BQWV2QjtBQUduRixNQUFJMkIsS0FBYTtBQUNqQixNQUFJQyxLQUFhO0FBQ2pCLE1BQUlDLEtBQWE7QUFFakIsUUFBTUMsTUFBWSxvQkFBSUMsS0FBSztBQUMzQixNQUFJO0FBQ0gsVUFBTUMsT0FBTyxJQUFJRCxLQUNoQkQsSUFBSUcsZUFBZSxTQUFTO01BQzNCQyxVQUFVVDtJQUNYLENBQUMsQ0FDRjtBQUNBRSxTQUFLSyxLQUFLRyxTQUFTO0FBQ25CUCxTQUFLSSxLQUFLSSxXQUFXO0FBQ3JCUCxTQUFLRyxLQUFLSyxXQUFXO0VBQ3RCLFFBQVE7QUFDUFosZUFBVztBQUNYYSxZQUFRQyxJQUFBLCtEQUFBakMsT0FBcUVtQixVQUFRLEdBQUEsQ0FBRztFQUN6RjtBQUVBLE1BQUlBLGFBQWEsT0FBTztBQUN2QkUsU0FBS0csSUFBSVUsWUFBWTtBQUNyQlosU0FBS0UsSUFBSVcsY0FBYztBQUN2QlosU0FBS0MsSUFBSVksY0FBYztFQUN4QixXQUFXakIsYUFBYSxTQUFTO0FBQ2hDRSxTQUFLRyxJQUFJSyxTQUFTO0FBQ2xCUCxTQUFLRSxJQUFJTSxXQUFXO0FBQ3BCUCxTQUFLQyxJQUFJTyxXQUFXO0VBQ3JCO0FBRUFoQixXQUFTc0IsS0FBQSxHQUFBckMsT0FBUVcsY0FBY1UsRUFBRSxHQUFDLEdBQUEsRUFBQXJCLE9BQUlXLGNBQWNXLEVBQUUsR0FBQyxHQUFBLEVBQUF0QixPQUFJVyxjQUFjWSxFQUFFLENBQUMsQ0FBRTtBQVU5RSxRQUFNZSxLQUFhZCxJQUFJZSxtQkFBbUI7QUFDMUNDLGFBQVcsTUFBWTtBQUN0QjFCLGFBQVNDLFFBQVE7RUFDbEIsR0FBRyxPQUFPdUIsRUFBRTtBQUNiOztBSHBEQTs7Ozs7Ozs7Ozs7Ozs7QUFvQkEsTUFBQSxHQUFLckMsbUJBQUF3QyxTQUFRLEVBQUVDLEtBQU1DLFdBQXlDO0FBSTdEQSxRQUFNQyxLQUFLLDhDQUE4QyxFQUFFQyxJQUFJLGdCQUFnQixTQUFTO0FBR3hGLFFBQU1DLFVBQWdDQyxHQUFHQyxLQUFLQyxlQUFlLGNBQWMsS0FBSyxJQUFJLFNBQVM7QUFDN0YsTUFBSSxDQUFDSCxTQUFTO0FBQ2I7RUFDRDtBQUNBLFFBQU0vQixXQUFtQm1DLEVBQUVKLE9BQU87QUFJbEMsUUFBTTtJQUFDSztJQUFZQztFQUFRLElBQUlMLEdBQUdNLE9BQU9DLElBQUk7QUFDN0N2QyxXQUFTd0MsR0FBRyxTQUFVQyxXQUFtQztBQUN4REEsVUFBTUMsZUFBZTtBQUVyQlYsT0FBR1csUUFBUUMsT0FBQSx3QkFBQTNELE9BQStCb0QsUUFBUSxDQUFFO0FBRXBELFVBQU1RLFNBQXlCO01BQzlCQyxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsUUFBUVo7SUFDVDtBQUNBckQsUUFBSWtFLEtBQUtKLE1BQU0sRUFDYmxCLEtBQUssTUFBWTtBQUNqQixXQUFLSyxHQUFHa0IsT0FBT3hELFdBQVcsU0FBUyxHQUFHO1FBQ3JDeUQsS0FBSztRQUNMQyxNQUFNO01BQ1AsQ0FBQztBQUNEQyxlQUFTQyxPQUFPO0lBQ2pCLENBQUMsRUFDQUMsTUFBTSxNQUFZO0FBQ2xCLFdBQUt2QixHQUFHa0IsT0FBT3hELFdBQVcsUUFBUSxHQUFHO1FBQ3BDeUQsS0FBSztRQUNMQyxNQUFNO01BQ1AsQ0FBQztJQUNGLENBQUM7RUFDSCxDQUFDO0FBR0RyRCxXQUFTQyxTQUFTNkIsS0FBSyxTQUFTLENBQUM7QUFDbEMsQ0FBQzsiLAogICJuYW1lcyI6IFsiZGVmYXVsdFRpbWVab25lIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJTdWNjZXNzIiwgImxvY2FsaXplIiwgImVuIiwgIkZhaWxlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicGFkV2l0aFplcm9lcyIsICJudW1iZXIiLCAidG9TdHJpbmciLCAic2hvd1RpbWUiLCAiJGVsZW1lbnQiLCAiVVRDTGl2ZUNsb2NrVGltZVpvbmUiLCAid2luZG93VVRDTGl2ZUNsb2NrVGltZVpvbmUiLCAid2luZG93IiwgInRpbWV6b25lIiwgIlN0cmluZyIsICJoaCIsICJtbSIsICJzcyIsICJub3ciLCAiRGF0ZSIsICJkYXRlIiwgInRvTG9jYWxlU3RyaW5nIiwgInRpbWVab25lIiwgImdldEhvdXJzIiwgImdldE1pbnV0ZXMiLCAiZ2V0U2Vjb25kcyIsICJjb25zb2xlIiwgImxvZyIsICJnZXRVVENIb3VycyIsICJnZXRVVENNaW51dGVzIiwgImdldFVUQ1NlY29uZHMiLCAidGV4dCIsICJtcyIsICJnZXRVVENNaWxsaXNlY29uZHMiLCAic2V0VGltZW91dCIsICJnZXRCb2R5IiwgInRoZW4iLCAiJGJvZHkiLCAiZmluZCIsICJjc3MiLCAiZWxlbWVudCIsICJtdyIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgIiQiLCAid2dQYWdlTmFtZSIsICJ3Z1dpa2lJRCIsICJjb25maWciLCAiZ2V0IiwgIm9uIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgInN0b3JhZ2UiLCAicmVtb3ZlIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgInRpdGxlcyIsICJwb3N0IiwgIm5vdGlmeSIsICJ0YWciLCAidHlwZSIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAiY2F0Y2giXQp9Cg==
