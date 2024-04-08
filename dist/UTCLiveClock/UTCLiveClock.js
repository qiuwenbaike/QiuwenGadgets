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
//! src/UTCLiveClock/UTCLiveClock.ts
var import_ext_gadget = require("ext.gadget.Util");
var import_ext_gadget2 = require("ext.gadget.PurgePageCache");
//! src/UTCLiveClock/options.json
var defaultTimeZone = "Asia/Shanghai";
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
void (0, import_ext_gadget.getBody)().then(($body) => {
  $body.find(".client-js > body.skin-vector #p-personal ul").css("margin-right", "initial");
  const element = mw.util.addPortletLink("p-personal", "#", "", "utcdate");
  if (!element) {
    return;
  }
  const $element = $(element);
  const {
    wgPageName
  } = mw.config.get();
  $element.on("click", (event) => {
    event.preventDefault();
    void (0, import_ext_gadget2.purge)(wgPageName);
  });
  showTime($element.find("a:first"));
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VUQ0xpdmVDbG9jay9VVENMaXZlQ2xvY2sudHMiLCAic3JjL1VUQ0xpdmVDbG9jay9vcHRpb25zLmpzb24iLCAic3JjL1VUQ0xpdmVDbG9jay9tb2R1bGVzL3V0aWwvcGFkV2l0aFplcm9lcy50cyIsICJzcmMvVVRDTGl2ZUNsb2NrL21vZHVsZXMvc2hvd1RpbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuICogVGhpcyBnYWRnZXQgYWRkcyBhIGNsb2NrIGluIHRoZSBwZXJzb25hbCB0b29sYmFyIHRoYXQgc2hvd3MgdGhlIGN1cnJlbnQgdGltZVxuICogaW4gVVRDIChvciBhIGRpZmZlcmVudCB0aW1lem9uZSBvZiB5b3VyIGNob29zaW5nKSwgYW5kIGFsc28gcHJvdmlkZXMgYSBsaW5rXG4gKiB0byBwdXJnZSB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIFJldmlzaW9uOiBKdWx5IDIwMjBcbiAqIFNvdXJjZTogaHR0cHM6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL01lZGlhV2lraTpHYWRnZXQtVVRDTGl2ZUNsb2NrLmpzXG4gKlxuICogVG8gc2V0IHRoZSB0aW1lem9uZSB1c2VkIHRvIG9uZSBvdGhlciB0aGFuIFVUQywgc2V0IHdpbmRvdy5MaXZlQ2xvY2tUaW1lWm9uZSB0b1xuICogdGhlIGRlc2lyZWQgdGltZXpvbmUuIEZvciBleGFtcGxlLCBhZGRpbmcgdGhlIGZvbGxvd2luZyB0byB5b3VyIGNvbW1vbi5qc1xuICogICAgICB3aW5kb3cuTGl2ZUNsb2NrVGltZVpvbmUgPSAnQW1lcmljYS9Mb3NfQW5nZWxlcyc7XG4gKiB3b3VsZCByZXN1bHQgaW4gdGhlIGxvY2FsIHRpbWUgaW4gTG9zIEFuZ2VsZXMgYmVpbmcgc2hvd24uIFNlZVxuICogVFogZGF0YWJhc2UgZm9yIHZhbGlkIG9wdGlvbnMuXG4gKi9cbmltcG9ydCAnLi9VVENMaXZlQ2xvY2subGVzcyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3B1cmdlfSBmcm9tICdleHQuZ2FkZ2V0LlB1cmdlUGFnZUNhY2hlJztcbmltcG9ydCB7c2hvd1RpbWV9IGZyb20gJy4vbW9kdWxlcy9zaG93VGltZSc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvLyBSZXNldCB3aGl0ZXNwYWNlIHRoYXQgd2FzIHNldCBpbiB0aGUgcGVlciBDU1MgZ2FkZ2V0OyB0aGlzIHByZXZlbnRzIHRoZVxuXHQvLyBlZmZlY3Qgb2YgdGhlIHAtcGVyc29uYWwgbWVudSBqdW1waW5nIHRvIHRoZSBsZWZ0IHdoZW4gdGhlIEphdmFTY3JpcHRcblx0Ly8gbG9hZHMuXG5cdCRib2R5LmZpbmQoJy5jbGllbnQtanMgPiBib2R5LnNraW4tdmVjdG9yICNwLXBlcnNvbmFsIHVsJykuY3NzKCdtYXJnaW4tcmlnaHQnLCAnaW5pdGlhbCcpO1xuXG5cdC8vIEFkZCB0aGUgcG9ydGxldCBsaW5rLlxuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoJ3AtcGVyc29uYWwnLCAnIycsICcnLCAndXRjZGF0ZScpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cblx0Ly8gUHVyZ2UgdGhlIHBhZ2Ugd2hlbiB0aGUgY2xvY2sgaXMgY2xpY2tlZC4gV2UgaGF2ZSB0byBkbyB0aGlzIHRocm91Z2ggdGhlXG5cdC8vIEFQSSwgYXMgcHVyZ2UgVVJMcyBub3cgbWFrZSBwZW9wbGUgY2xpY2sgdGhyb3VnaCBhIGNvbmZpcm1hdGlvbiBzY3JlZW4uXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0JGVsZW1lbnQub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dm9pZCBwdXJnZSh3Z1BhZ2VOYW1lKTtcblx0fSk7XG5cblx0Ly8gU2hvdyB0aGUgY2xvY2suXG5cdHNob3dUaW1lKCRlbGVtZW50LmZpbmQoJ2E6Zmlyc3QnKSk7XG59KTtcbiIsICJ7XG5cdFwiZGVmYXVsdFRpbWVab25lXCI6IFwiQXNpYS9TaGFuZ2hhaVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImNvbnN0IHBhZFdpdGhaZXJvZXMgPSAobnVtYmVyOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuXHQvLyBQYWQgYSBudW1iZXIgd2l0aCB6ZXJvZXMuIFRoZSBudW1iZXIgbXVzdCBiZSBhbiBpbnRlZ2VyIHdoZXJlXG5cdC8vIDAgPD0gbnVtYmVyIDwgMTAwLlxuXHRyZXR1cm4gbnVtYmVyIDwgMTAgPyBgMCR7bnVtYmVyLnRvU3RyaW5nKCl9YCA6IG51bWJlci50b1N0cmluZygpO1xufTtcblxuZXhwb3J0IHtwYWRXaXRoWmVyb2VzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge3BhZFdpdGhaZXJvZXN9IGZyb20gJy4vdXRpbC9wYWRXaXRoWmVyb2VzJztcblxuY29uc3Qgc2hvd1RpbWUgPSAoJGVsZW1lbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCB7VVRDTGl2ZUNsb2NrVGltZVpvbmU6IHdpbmRvd1VUQ0xpdmVDbG9ja1RpbWVab25lfSA9IHdpbmRvdztcblx0bGV0IHRpbWV6b25lOiBzdHJpbmcgPVxuXHRcdCh3aW5kb3dVVENMaXZlQ2xvY2tUaW1lWm9uZSA/IFN0cmluZyh3aW5kb3dVVENMaXZlQ2xvY2tUaW1lWm9uZSkgOiAnJykgfHwgT1BUSU9OUy5kZWZhdWx0VGltZVpvbmU7XG5cblx0Ly8gU2V0IHRoZSB0aW1lLlxuXHRsZXQgaGg6IG51bWJlciA9IDA7XG5cdGxldCBtbTogbnVtYmVyID0gMDtcblx0bGV0IHNzOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0IG5vdzogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cdHRyeSB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKFxuXHRcdFx0bm93LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcblx0XHRcdFx0dGltZVpvbmU6IHRpbWV6b25lLFxuXHRcdFx0fSlcblx0XHQpO1xuXHRcdGhoID0gZGF0ZS5nZXRIb3VycygpO1xuXHRcdG1tID0gZGF0ZS5nZXRNaW51dGVzKCk7XG5cdFx0c3MgPSBkYXRlLmdldFNlY29uZHMoKTtcblx0fSBjYXRjaCB7XG5cdFx0dGltZXpvbmUgPSAnVVRDJztcblx0XHRjb25zb2xlLmxvZyhgW1VUQ0xpdmVDbG9ja106IEVycm9yIGNyZWF0aW5nIFxcYERhdGVcXGAgb2JqZWN0IHdpdGggdGltZXpvbmUgJyR7dGltZXpvbmV9J2ApO1xuXHR9XG5cblx0aWYgKHRpbWV6b25lID09PSAnVVRDJykge1xuXHRcdGhoID0gbm93LmdldFVUQ0hvdXJzKCk7XG5cdFx0bW0gPSBub3cuZ2V0VVRDTWludXRlcygpO1xuXHRcdHNzID0gbm93LmdldFVUQ1NlY29uZHMoKTtcblx0fSBlbHNlIGlmICh0aW1lem9uZSA9PT0gJ2xvY2FsJykge1xuXHRcdGhoID0gbm93LmdldEhvdXJzKCk7XG5cdFx0bW0gPSBub3cuZ2V0TWludXRlcygpO1xuXHRcdHNzID0gbm93LmdldFNlY29uZHMoKTtcblx0fVxuXG5cdCRlbGVtZW50LnRleHQoYCR7cGFkV2l0aFplcm9lcyhoaCl9OiR7cGFkV2l0aFplcm9lcyhtbSl9OiR7cGFkV2l0aFplcm9lcyhzcyl9YCk7XG5cblx0Ly8gU2NoZWR1bGUgdGhlIG5leHQgdGltZSBjaGFuZ2UuXG5cdC8vXG5cdC8vIFdlIHNjaGVkdWxlIHRoZSBjaGFuZ2UgZm9yIDEwMCBtcyBfYWZ0ZXJfIHRoZSBuZXh0IGNsb2NrIHRpY2suIFRoZSBkZWxheVxuXHQvLyBmcm9tIHNldFRpbWVvdXQgaXMgbm90IHByZWNpc2UsIGFuZCBpZiB3ZSBhaW0gZXhhY3RseSBmb3IgdGhlIHRpY2ssIHRoZXJlXG5cdC8vIGlzIGEgY2hhbmNlIHRoYXQgdGhlIGZ1bmN0aW9uIHdpbGwgcnVuIHNsaWdodGx5IGJlZm9yZSBpdC4gSWYgdGhpc1xuXHQvLyBoYXBwZW5zLCB3ZSB3aWxsIGRpc3BsYXkgdGhlIHNhbWUgdGltZSBmb3IgdHdvIHNlY29uZHMgaW4gYSByb3cgLSBub3Rcblx0Ly8gZ29vZC4gQnkgc2NoZWR1bGluZyAxMDAgbXMgYWZ0ZXIgdGhlIHRpY2ssIHdlIHdpbGwgYWx3YXlzIGJlIGFib3V0IDEwMCBtc1xuXHQvLyBsYXRlLCBidXQgd2UgYXJlIGFsc28gdmVyeSBsaWtlbHkgdG8gZGlzcGxheSBhIG5ldyB0aW1lIGV2ZXJ5IHNlY29uZC5cblx0Y29uc3QgbXM6IG51bWJlciA9IG5vdy5nZXRVVENNaWxsaXNlY29uZHMoKTtcblx0c2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG5cdFx0c2hvd1RpbWUoJGVsZW1lbnQpO1xuXHR9LCAxMTAwIC0gbXMpO1xufTtcblxuZXhwb3J0IHtzaG93VGltZX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsSUFBQUEsb0JBQXNCQyxRQUFBLGlCQUFBO0FBQ3RCLElBQUFDLHFCQUFvQkQsUUFBQSwyQkFBQTs7QUNmbkIsSUFBQUUsa0JBQW1COztBQ0RwQixJQUFNQyxnQkFBaUJDLFlBQTJCO0FBR2pELFNBQU9BLFNBQVMsS0FBQSxJQUFBQyxPQUFTRCxPQUFPRSxTQUFTLENBQUMsSUFBS0YsT0FBT0UsU0FBUztBQUNoRTs7QUNEQSxJQUFNQyxXQUFZQyxjQUEyQjtBQUM1QyxRQUFNO0lBQUNDLHNCQUFzQkM7RUFBMEIsSUFBSUM7QUFDM0QsTUFBSUMsWUFDRkYsNkJBQTZCRyxPQUFPSCwwQkFBMEIsSUFBSSxPQUFlUjtBQUduRixNQUFJWSxLQUFhO0FBQ2pCLE1BQUlDLEtBQWE7QUFDakIsTUFBSUMsS0FBYTtBQUVqQixRQUFNQyxNQUFZLG9CQUFJQyxLQUFLO0FBQzNCLE1BQUk7QUFDSCxVQUFNQyxPQUFPLElBQUlELEtBQ2hCRCxJQUFJRyxlQUFlLFNBQVM7TUFDM0JDLFVBQVVUO0lBQ1gsQ0FBQyxDQUNGO0FBQ0FFLFNBQUtLLEtBQUtHLFNBQVM7QUFDbkJQLFNBQUtJLEtBQUtJLFdBQVc7QUFDckJQLFNBQUtHLEtBQUtLLFdBQVc7RUFDdEIsUUFBUTtBQUNQWixlQUFXO0FBQ1hhLFlBQVFDLElBQUEsK0RBQUFyQixPQUFxRU8sVUFBUSxHQUFBLENBQUc7RUFDekY7QUFFQSxNQUFJQSxhQUFhLE9BQU87QUFDdkJFLFNBQUtHLElBQUlVLFlBQVk7QUFDckJaLFNBQUtFLElBQUlXLGNBQWM7QUFDdkJaLFNBQUtDLElBQUlZLGNBQWM7RUFDeEIsV0FBV2pCLGFBQWEsU0FBUztBQUNoQ0UsU0FBS0csSUFBSUssU0FBUztBQUNsQlAsU0FBS0UsSUFBSU0sV0FBVztBQUNwQlAsU0FBS0MsSUFBSU8sV0FBVztFQUNyQjtBQUVBaEIsV0FBU3NCLEtBQUEsR0FBQXpCLE9BQVFGLGNBQWNXLEVBQUUsR0FBQyxHQUFBLEVBQUFULE9BQUlGLGNBQWNZLEVBQUUsR0FBQyxHQUFBLEVBQUFWLE9BQUlGLGNBQWNhLEVBQUUsQ0FBQyxDQUFFO0FBVTlFLFFBQU1lLEtBQWFkLElBQUllLG1CQUFtQjtBQUMxQ0MsYUFBVyxNQUFZO0FBQ3RCMUIsYUFBU0MsUUFBUTtFQUNsQixHQUFHLE9BQU91QixFQUFFO0FBQ2I7O0FIcERBOzs7Ozs7Ozs7Ozs7OztBQW1CQSxNQUFBLEdBQUtoQyxrQkFBQW1DLFNBQVEsRUFBRUMsS0FBTUMsV0FBeUM7QUFJN0RBLFFBQU1DLEtBQUssOENBQThDLEVBQUVDLElBQUksZ0JBQWdCLFNBQVM7QUFHeEYsUUFBTUMsVUFBZ0NDLEdBQUdDLEtBQUtDLGVBQWUsY0FBYyxLQUFLLElBQUksU0FBUztBQUM3RixNQUFJLENBQUNILFNBQVM7QUFDYjtFQUNEO0FBQ0EsUUFBTS9CLFdBQW1CbUMsRUFBRUosT0FBTztBQUlsQyxRQUFNO0lBQUNLO0VBQVUsSUFBSUosR0FBR0ssT0FBT0MsSUFBSTtBQUNuQ3RDLFdBQVN1QyxHQUFHLFNBQVVDLFdBQW1DO0FBQ3hEQSxVQUFNQyxlQUFlO0FBQ3JCLFVBQUEsR0FBS2hELG1CQUFBaUQsT0FBTU4sVUFBVTtFQUN0QixDQUFDO0FBR0RyQyxXQUFTQyxTQUFTNkIsS0FBSyxTQUFTLENBQUM7QUFDbEMsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZGVmYXVsdFRpbWVab25lIiwgInBhZFdpdGhaZXJvZXMiLCAibnVtYmVyIiwgImNvbmNhdCIsICJ0b1N0cmluZyIsICJzaG93VGltZSIsICIkZWxlbWVudCIsICJVVENMaXZlQ2xvY2tUaW1lWm9uZSIsICJ3aW5kb3dVVENMaXZlQ2xvY2tUaW1lWm9uZSIsICJ3aW5kb3ciLCAidGltZXpvbmUiLCAiU3RyaW5nIiwgImhoIiwgIm1tIiwgInNzIiwgIm5vdyIsICJEYXRlIiwgImRhdGUiLCAidG9Mb2NhbGVTdHJpbmciLCAidGltZVpvbmUiLCAiZ2V0SG91cnMiLCAiZ2V0TWludXRlcyIsICJnZXRTZWNvbmRzIiwgImNvbnNvbGUiLCAibG9nIiwgImdldFVUQ0hvdXJzIiwgImdldFVUQ01pbnV0ZXMiLCAiZ2V0VVRDU2Vjb25kcyIsICJ0ZXh0IiwgIm1zIiwgImdldFVUQ01pbGxpc2Vjb25kcyIsICJzZXRUaW1lb3V0IiwgImdldEJvZHkiLCAidGhlbiIsICIkYm9keSIsICJmaW5kIiwgImNzcyIsICJlbGVtZW50IiwgIm13IiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiJCIsICJ3Z1BhZ2VOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAicHVyZ2UiXQp9Cg==
