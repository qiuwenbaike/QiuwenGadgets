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
    const api = (0, import_ext_gadget2.initMwApi)("Qiuwen/1.1 (UTCLiveClock/1.1; ".concat(mw.config.get("wgWikiID"), ")"));
    localStorage.removeItem("MediaWikiModuleStore:".concat(mw.config.get("wgWikiID")));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VUQ0xpdmVDbG9jay9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1VUQ0xpdmVDbG9jay9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1VUQ0xpdmVDbG9jay9VVENMaXZlQ2xvY2sudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRTdWNjZXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhY2hlIGNsZWFyZWQhJyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8k+WtmOa4hemZpOaIkOWKnycsXG5cdFx0XHQnemgtaGFudCc6ICflv6vlj5bmuIXpmaTmiJDlip8nLFxuXHRcdH0pLFxuXHRcdEZhaWxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGYWlsZWQgdG8gY2xlYXIgY2FjaGUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8k+WtmOa4hemZpOWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICflv6vlj5bmuIXpmaTlpLHotKUnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgcGFkV2l0aFplcm9lcyA9IChudW1iZXI6IG51bWJlcikgPT4ge1xuXHQvLyBQYWQgYSBudW1iZXIgd2l0aCB6ZXJvZXMuIFRoZSBudW1iZXIgbXVzdCBiZSBhbiBpbnRlZ2VyIHdoZXJlXG5cdC8vIDAgPD0gbnVtYmVyIDwgMTAwLlxuXHRyZXR1cm4gbnVtYmVyIDwgMTAgPyBgMCR7bnVtYmVyLnRvU3RyaW5nKCl9YCA6IG51bWJlci50b1N0cmluZygpO1xufTtcblxuY29uc3Qgc2hvd1RpbWUgPSAoJHRhcmdldDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGNvbnN0IG5vdzogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IHdpbmRvd1VUQ0xpdmVDbG9ja1RpbWVab25lOiB0eXBlb2Ygd2luZG93LlVUQ0xpdmVDbG9ja1RpbWVab25lID0gd2luZG93LlVUQ0xpdmVDbG9ja1RpbWVab25lO1xuXHRsZXQgdGltZXpvbmU6IHN0cmluZyA9ICh3aW5kb3dVVENMaXZlQ2xvY2tUaW1lWm9uZSA/IFN0cmluZyh3aW5kb3dVVENMaXZlQ2xvY2tUaW1lWm9uZSkgOiAnJykgfHwgJ0FzaWEvU2hhbmdoYWknO1xuXHQvLyBTZXQgdGhlIHRpbWUuXG5cdGxldCBoaDogbnVtYmVyO1xuXHRsZXQgbW06IG51bWJlcjtcblx0bGV0IHNzOiBudW1iZXI7XG5cdGlmICh0aW1lem9uZSA9PT0gJ1VUQycpIHtcblx0XHRoaCA9IG5vdy5nZXRVVENIb3VycygpO1xuXHRcdG1tID0gbm93LmdldFVUQ01pbnV0ZXMoKTtcblx0XHRzcyA9IG5vdy5nZXRVVENTZWNvbmRzKCk7XG5cdH0gZWxzZSBpZiAodGltZXpvbmUgPT09ICdsb2NhbCcpIHtcblx0XHRoaCA9IG5vdy5nZXRIb3VycygpO1xuXHRcdG1tID0gbm93LmdldE1pbnV0ZXMoKTtcblx0XHRzcyA9IG5vdy5nZXRTZWNvbmRzKCk7XG5cdH0gZWxzZSB7XG5cdFx0bGV0IG5ld05vdzogRGF0ZTtcblx0XHR0cnkge1xuXHRcdFx0bmV3Tm93ID0gbmV3IERhdGUoXG5cdFx0XHRcdG5vdy50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG5cdFx0XHRcdFx0dGltZVpvbmU6IHRpbWV6b25lLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRcdGhoID0gbmV3Tm93LmdldEhvdXJzKCk7XG5cdFx0XHRtbSA9IG5ld05vdy5nZXRNaW51dGVzKCk7XG5cdFx0XHRzcyA9IG5ld05vdy5nZXRTZWNvbmRzKCk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRjb25zb2xlLmxvZyhgW1VUQ0xpdmVDbG9ja106IGVycm9yIGNyZWF0aW5nIERhdGUgb2JqZWN0IHdpdGggdGltZXpvbmUgJyR7dGltZXpvbmV9J2ApO1xuXHRcdFx0dGltZXpvbmUgPSAnVVRDJztcblx0XHRcdG5ld05vdyA9IG5vdztcblx0XHRcdGhoID0gbm93LmdldFVUQ0hvdXJzKCk7XG5cdFx0XHRtbSA9IG5vdy5nZXRVVENNaW51dGVzKCk7XG5cdFx0XHRzcyA9IG5vdy5nZXRVVENTZWNvbmRzKCk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0IHRpbWU6IHN0cmluZyA9IGAke3BhZFdpdGhaZXJvZXMoaGgpfToke3BhZFdpdGhaZXJvZXMobW0pfToke3BhZFdpdGhaZXJvZXMoc3MpfWA7XG5cdCR0YXJnZXQudGV4dCh0aW1lKTtcblx0Ly8gU2NoZWR1bGUgdGhlIG5leHQgdGltZSBjaGFuZ2UuXG5cdC8vXG5cdC8vIFdlIHNjaGVkdWxlIHRoZSBjaGFuZ2UgZm9yIDEwMCBtcyBfYWZ0ZXJfIHRoZSBuZXh0IGNsb2NrIHRpY2suIFRoZSBkZWxheVxuXHQvLyBmcm9tIHNldFRpbWVvdXQgaXMgbm90IHByZWNpc2UsIGFuZCBpZiB3ZSBhaW0gZXhhY3RseSBmb3IgdGhlIHRpY2ssIHRoZXJlXG5cdC8vIGlzIGEgY2hhbmNlIHRoYXQgdGhlIGZ1bmN0aW9uIHdpbGwgcnVuIHNsaWdodGx5IGJlZm9yZSBpdC4gSWYgdGhpc1xuXHQvLyBoYXBwZW5zLCB3ZSB3aWxsIGRpc3BsYXkgdGhlIHNhbWUgdGltZSBmb3IgdHdvIHNlY29uZHMgaW4gYSByb3cgLSBub3Rcblx0Ly8gZ29vZC4gQnkgc2NoZWR1bGluZyAxMDAgbXMgYWZ0ZXIgdGhlIHRpY2ssIHdlIHdpbGwgYWx3YXlzIGJlIGFib3V0IDEwMCBtc1xuXHQvLyBsYXRlLCBidXQgd2UgYXJlIGFsc28gdmVyeSBsaWtlbHkgdG8gZGlzcGxheSBhIG5ldyB0aW1lIGV2ZXJ5IHNlY29uZC5cblx0Y29uc3QgbXM6IG51bWJlciA9IG5vdy5nZXRVVENNaWxsaXNlY29uZHMoKTtcblx0c2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG5cdFx0c2hvd1RpbWUoJHRhcmdldCk7XG5cdH0sIDExMDAgLSBtcyk7XG59O1xuXG5leHBvcnQgY29uc3QgbGl2ZUNsb2NrID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cdC8vIFJlc2V0IHdoaXRlc3BhY2UgdGhhdCB3YXMgc2V0IGluIHRoZSBwZWVyIENTUyBnYWRnZXQ7IHRoaXMgcHJldmVudHMgdGhlXG5cdC8vIGVmZmVjdCBvZiB0aGUgcC1wZXJzb25hbCBtZW51IGp1bXBpbmcgdG8gdGhlIGxlZnQgd2hlbiB0aGUgSmF2YVNjcmlwdFxuXHQvLyBsb2Fkcy5cblx0JGJvZHkuZmluZCgnLmNsaWVudC1qcyA+IGJvZHkuc2tpbi12ZWN0b3IgI3AtcGVyc29uYWwgdWwnKS5jc3MoJ21hcmdpbi1yaWdodCcsICdpbml0aWFsJyk7XG5cdC8vIEFkZCB0aGUgcG9ydGxldCBsaW5rLlxuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoJ3AtcGVyc29uYWwnLCAnIycsICcnLCAndXRjZGF0ZScpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MTElFbGVtZW50PiA9ICQoZWxlbWVudCk7XG5cdC8vIFB1cmdlIHRoZSBwYWdlIHdoZW4gdGhlIGNsb2NrIGlzIGNsaWNrZWQuIFdlIGhhdmUgdG8gZG8gdGhpcyB0aHJvdWdoIHRoZVxuXHQvLyBBUEksIGFzIHB1cmdlIFVSTHMgbm93IG1ha2UgcGVvcGxlIGNsaWNrIHRocm91Z2ggYSBjb25maXJtYXRpb24gc2NyZWVuLlxuXHQkZWxlbWVudC5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50PEhUTUxMSUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUWl1d2VuLzEuMSAoVVRDTGl2ZUNsb2NrLzEuMTsgJHttdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpfSlgKTtcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgTWVkaWFXaWtpTW9kdWxlU3RvcmU6JHttdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpfWApO1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUHVyZ2VQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdwdXJnZScsXG5cdFx0XHR0aXRsZXM6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHR9O1xuXHRcdGFwaS5wb3N0KHBhcmFtcylcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnU3VjY2VzcycpLCB7dGFnOiAnVVRDTGl2ZUNsb2NrJywgdHlwZTogJ3N1Y2Nlc3MnfSk7XG5cdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ0ZhaWxlZCcpLCB7dGFnOiAnVVRDTGl2ZUNsb2NrJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdFx0fSk7XG5cdH0pO1xuXHQvLyBTaG93IHRoZSBjbG9jay5cblx0c2hvd1RpbWUoJGVsZW1lbnQuZmluZCgnYTpmaXJzdCcpKTtcbn07XG4iLCAiLyoqXG4gKiBUaGlzIGdhZGdldCBhZGRzIGEgY2xvY2sgaW4gdGhlIHBlcnNvbmFsIHRvb2xiYXIgdGhhdCBzaG93cyB0aGUgY3VycmVudCB0aW1lXG4gKiBpbiBVVEMgKG9yIGEgZGlmZmVyZW50IHRpbWV6b25lIG9mIHlvdXIgY2hvb3NpbmcpLCBhbmQgYWxzbyBwcm92aWRlcyBhIGxpbmtcbiAqIHRvIHB1cmdlIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogUmV2aXNpb246IEp1bHkgMjAyMFxuICogU291cmNlOiBodHRwczovL3d3dy5tZWRpYXdpa2kub3JnL3dpa2kvTWVkaWFXaWtpOkdhZGdldC1VVENMaXZlQ2xvY2suanNcbiAqXG4gKiBJbnN0YWxsYXRpb246XG4gKlxuICogMS4gQ29weSB0aGUgSlMgcGFnZSBhdCBodHRwczovL3d3dy5tZWRpYXdpa2kub3JnL3dpa2kvTWVkaWFXaWtpOkdhZGdldC1VVENMaXZlQ2xvY2suanNcbiAqIHRvIHRoZSBwYWdlIFtbTWVkaWFXaWtpOkdhZGdldC1VVENMaXZlQ2xvY2suanNdXSBvbiB5b3VyIHdpa2kuXG4gKlxuICogMi4gQ29weSB0aGUgQ1NTIHBhZ2UgYXQgaHR0cHM6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL01lZGlhV2lraTpHYWRnZXQtVVRDTGl2ZUNsb2NrLmNzc1xuICogdG8gdGhlIHBhZ2UgW1tNZWRpYVdpa2k6R2FkZ2V0LVVUQ0xpdmVDbG9jay5jc3NdXSBvbiB5b3VyIHdpa2kuXG4gKlxuICogMy4gQ29weSB0aGUgQ1NTIHBhZ2UgYXQgaHR0cHM6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL01lZGlhV2lraTpHYWRnZXQtVVRDTGl2ZUNsb2NrLXBhZ2VzdHlsZXMuY3NzXG4gKiB0byB0aGUgcGFnZSBbW01lZGlhV2lraTpHYWRnZXQtVVRDTGl2ZUNsb2NrLXBhZ2VzdHlsZXMuY3NzXV0gb24geW91ciB3aWtpLlxuICpcbiAqIDQuIEFkZCBhIGRlc2NyaXB0aW9uIG9mIHRoZSBnYWRnZXQgdG8gdGhlIHBhZ2UgW1tNZWRpYVdpa2k6R2FkZ2V0LVVUQ0xpdmVDbG9ja11dXG4gKiBvbiB5b3VyIHdpa2kuIFlvdSBjYW4gdXNlIGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9NZWRpYVdpa2k6R2FkZ2V0LVVUQ0xpdmVDbG9ja1xuICogYXMgYSB0ZW1wbGF0ZS5cbiAqXG4gKiA1LiBBZGQgdGhlIGZvbGxvd2luZyBjb2RlIHRvIHlvdXIgd2lraSdzIFtbTWVkaWFXaWtpOkdhZGdldHMtZGVmaW5pdGlvbl1dOlxuICpcbiAqIFVUQ0xpdmVDbG9ja1tSZXNvdXJjZUxvYWRlcnx0eXBlPWdlbmVyYWx8ZGVwZW5kZW5jaWVzPW1lZGlhd2lraS51dGlsLG1lZGlhd2lraS5hcGl8cGVlcnM9VVRDTGl2ZUNsb2NrLXBhZ2VzdHlsZXNdfFVUQ0xpdmVDbG9jay5qc3xVVENMaXZlQ2xvY2suY3NzXG4gKiBVVENMaXZlQ2xvY2stcGFnZXN0eWxlc1toaWRkZW58c2tpbnM9dmVjdG9yXXxVVENMaXZlQ2xvY2stcGFnZXN0eWxlcy5jc3NcbiAqXG4gKlxuICogVG8gc2V0IHRoZSB0aW1lem9uZSB1c2VkIHRvIG9uZSBvdGhlciB0aGFuIFVUQywgc2V0IHdpbmRvdy5MaXZlQ2xvY2tUaW1lWm9uZSB0b1xuICogdGhlIGRlc2lyZWQgdGltZXpvbmUuIEZvciBleGFtcGxlLCBhZGRpbmcgdGhlIGZvbGxvd2luZyB0byB5b3VyIGNvbW1vbi5qc1xuICogICAgICB3aW5kb3cuTGl2ZUNsb2NrVGltZVpvbmUgPSAnQW1lcmljYS9Mb3NfQW5nZWxlcyc7XG4gKiB3b3VsZCByZXN1bHQgaW4gdGhlIGxvY2FsIHRpbWUgaW4gTG9zIEFuZ2VsZXMgYmVpbmcgc2hvd24uIFNlZVxuICogVFogZGF0YWJhc2UgZm9yIHZhbGlkIG9wdGlvbnMuXG4gKi9cbmltcG9ydCB7bGl2ZUNsb2NrfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbiQobGl2ZUNsb2NrKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7QUFBQSxJQUFBQSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsVUFBQSxHQUFTSCxrQkFBQUksVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFD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QUc7UUFBQzRELEtBQUs7UUFBZ0JDLE1BQU07TUFBUyxDQUFDO0FBQzVFQyxlQUFTQyxPQUFPO0lBQ2pCLENBQUMsRUFDQUMsTUFBTSxNQUFNO0FBQ1osV0FBS3ZCLEdBQUdrQixPQUFPM0QsV0FBVyxRQUFRLEdBQUc7UUFBQzRELEtBQUs7UUFBZ0JDLE1BQU07TUFBTyxDQUFDO0lBQzFFLENBQUM7RUFDSCxDQUFDO0FBRUR0RCxXQUFTcUMsU0FBU04sS0FBSyxTQUFTLENBQUM7QUFDbEM7O0FDekRBRCxFQUFFRixTQUFTOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJTdWNjZXNzIiwgImxvY2FsaXplIiwgImVuIiwgIkZhaWxlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInBhZFdpdGhaZXJvZXMiLCAibnVtYmVyIiwgImNvbmNhdCIsICJ0b1N0cmluZyIsICJzaG93VGltZSIsICIkdGFyZ2V0IiwgIm5vdyIsICJEYXRlIiwgIndpbmRvd1VUQ0xpdmVDbG9ja1RpbWVab25lIiwgIndpbmRvdyIsICJVVENMaXZlQ2xvY2tUaW1lWm9uZSIsICJ0aW1lem9uZSIsICJTdHJpbmciLCAiaGgiLCAibW0iLCAic3MiLCAiZ2V0VVRDSG91cnMiLCAiZ2V0VVRDTWludXRlcyIsICJnZXRVVENTZWNvbmRzIiwgImdldEhvdXJzIiwgImdldE1pbnV0ZXMiLCAiZ2V0U2Vjb25kcyIsICJuZXdOb3ciLCAidG9Mb2NhbGVTdHJpbmciLCAidGltZVpvbmUiLCAiY29uc29sZSIsICJsb2ciLCAidGltZSIsICJ0ZXh0IiwgIm1zIiwgImdldFVUQ01pbGxpc2Vjb25kcyIsICJzZXRUaW1lb3V0IiwgImxpdmVDbG9jayIsICIkYm9keSIsICIkIiwgImZpbmQiLCAiY3NzIiwgImVsZW1lbnQiLCAibXciLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICIkZWxlbWVudCIsICJvbiIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmZpZyIsICJnZXQiLCAibG9jYWxTdG9yYWdlIiwgInJlbW92ZUl0ZW0iLCAicGFyYW1zIiwgImFjdGlvbiIsICJ0aXRsZXMiLCAicG9zdCIsICJ0aGVuIiwgIm5vdGlmeSIsICJ0YWciLCAidHlwZSIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAiY2F0Y2giXQp9Cg==

})();

/* </nowiki> */
