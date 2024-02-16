/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ShortURL}
 * @author 安忆 <i@anyi.in>; WaitSpring <me@waitspring.com>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
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

// dist/ShortURL/ShortURL.js
//! src/ShortURL/modules/core.ts
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
var import_ext_gadget2 = require("ext.gadget.Clipboard");
//! src/ShortURL/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Short URL": (0, import_ext_gadget.localize)({
      en: "Short URL",
      "zh-hans": "短链接",
      "zh-hant": "短網址"
    }),
    "Short URL copied to clipboard": (0, import_ext_gadget.localize)({
      en: "The short URL has been copied to clipboard:",
      "zh-hans": "已复制本页短链接：",
      "zh-hant": "已復製本頁短網址："
    }),
    "Show short URL": (0, import_ext_gadget.localize)({
      en: "Show short URL",
      "zh-hans": "显示该页短链接",
      "zh-hant": "顯示該頁短網址"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ShortURL/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var import_ext_gadget4 = require("ext.gadget.Tippy");
var clipboardInstance;
var doIns = (link) => {
  var _clipboardInstance;
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  let element = document.querySelector("#t-shortlink");
  if (!element) {
    element = mw.util.addPortletLink(portletId, "#", getMessage("Short URL"), "t-shortlink", getMessage("Show short URL"));
  }
  if (element) {
    var _element$firstElement;
    ((_element$firstElement = element.firstElementChild) !== null && _element$firstElement !== void 0 ? _element$firstElement : element).onclick = (event) => {
      event.preventDefault();
      const $element = $("<div>");
      for (var _i = 0, _arr = ["qwbk.cc", "qwbk.org", "bkwz.cn"]; _i < _arr.length; _i++) {
        const domain = _arr[_i];
        $element.append(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
          new mw.widgets.CopyTextLayout({
            align: "top",
            copyText: "https://".concat(domain).concat(link)
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          }).$element
        );
      }
      void OO.ui.alert($element, {
        title: getMessage("Short URL copied to clipboard"),
        size: "medium"
      });
    };
    const isCitizen = mw.config.get("skin") === "citizen";
    if (isCitizen) {
      $(element).find("a").prepend('<span class="citizen-ui-icon mw-ui-icon-wikimedia-shortlink"></span>');
    }
  }
  let headerElement = document.querySelector("#mw-indicator-shortURL a");
  if (!headerElement) {
    const $headerElement = $("<div>").addClass("mw-indicator").attr("id", "mw-indicator-shortURL").append($("<a>").attr({
      href: "#",
      "aria-label": getMessage("Short URL")
    }).append($("<span>").addClass("gadget-short-link__icon").text(getMessage("Short URL"))));
    $headerElement.prependTo(".mw-indicators");
    headerElement = $headerElement.find("a").get(0);
    (0, import_ext_gadget4.tippy)(headerElement, {
      arrow: true,
      content: getMessage("Short URL"),
      placement: "bottom"
    });
  }
  const shorturl = "https://qwbk.cc".concat(link);
  const $notifyElement = $("<span>").text(getMessage("Short URL copied to clipboard")).append($("<br>"), $("<a>").attr("href", "#").text(shorturl).on("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  }));
  headerElement.onclick = (event) => {
    event.preventDefault();
    void mw.notify($notifyElement, {
      tag: "shortURL",
      type: "info"
    });
  };
  (_clipboardInstance = clipboardInstance) === null || _clipboardInstance === void 0 || _clipboardInstance.destroy();
  clipboardInstance = new import_ext_gadget2.Clipboard(headerElement, {
    text: () => {
      return shorturl;
    }
  });
};
var init = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* ({
    diffId,
    oldId,
    articleId,
    revisionId
  }) {
    const $body = $("body");
    if (diffId) {
      const buildLink = (_oldId, link = "/d") => {
        if (_oldId) {
          link += "/".concat(_oldId);
        }
        link += "/".concat(diffId);
        doIns(link);
      };
      buildLink(oldId);
      if (oldId) {
        const api = (0, import_ext_gadget3.initMwApi)("ShortURL/1.1");
        try {
          const params = {
            action: "compare",
            format: "json",
            formatversion: "2",
            prop: "ids",
            fromrev: diffId,
            torelative: "prev"
          };
          const {
            compare
          } = yield api.get(params);
          if (diffId === mw.config.get("wgDiffNewId") && // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          (compare === null || compare === void 0 ? void 0 : compare.fromrevid) === mw.config.get("wgDiffOldId")) {
            buildLink();
          }
        } catch {
        }
      }
    } else if (revisionId && ($body.find("#contentSub").find("#mw-revision-nav").length || $body.find("main#content>.pre-content #mw-revision-nav").length) > 0) {
      doIns("/p/".concat(revisionId));
    } else if (articleId) {
      doIns("/c/".concat(articleId));
    }
  });
  return function init2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/ShortURL/ShortURL.ts
if (mw.config.get("wgNamespaceNumber") >= 0 || !document.querySelectorAll(".noarticletext").length || mw.config.get("wgAction") === "view") {
  mw.hook("wikipage.content").add(($content) => {
    if (mw.config.get("wgShortURLInstalled")) {
      return;
    }
    if ($content.attr("id") !== "mw-content-text") {
      return;
    }
    void init({
      diffId: mw.config.get("wgDiffNewId"),
      oldId: mw.config.get("wgDiffOldId"),
      articleId: mw.config.get("wgArticleId"),
      revisionId: mw.config.get("wgRevisionId")
    });
    mw.config.set("wgShortURLInstalled", true);
  });
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvY29yZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9TaG9ydFVSTC9TaG9ydFVSTC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyogZXNsaW50LWRpc2FibGUgdW5pY29ybi9wcmVmZXItYWRkLWV2ZW50LWxpc3RlbmVyICovXG5pbXBvcnQge0NsaXBib2FyZH0gZnJvbSAnZXh0LmdhZGdldC5DbGlwYm9hcmQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxubGV0IGNsaXBib2FyZEluc3RhbmNlOiBDbGlwYm9hcmRKUyB8IHVuZGVmaW5lZDtcblxuY29uc3QgZG9JbnMgPSAobGluazogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblxuXHRsZXQgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC1zaG9ydGxpbmsnKTtcblxuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRlbGVtZW50ID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRcdHBvcnRsZXRJZCxcblx0XHRcdCcjJyxcblx0XHRcdGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpLFxuXHRcdFx0J3Qtc2hvcnRsaW5rJyxcblx0XHRcdGdldE1lc3NhZ2UoJ1Nob3cgc2hvcnQgVVJMJylcblx0XHQpO1xuXHR9XG5cblx0aWYgKGVsZW1lbnQpIHtcblx0XHQoKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgPz8gZWxlbWVudCkgYXMgSFRNTEVsZW1lbnQpLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJCgnPGRpdj4nKTtcblx0XHRcdGZvciAoY29uc3QgZG9tYWluIG9mIFsncXdiay5jYycsICdxd2JrLm9yZycsICdia3d6LmNuJ10pIHtcblx0XHRcdFx0JGVsZW1lbnQuYXBwZW5kKFxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuXHRcdFx0XHRcdG5ldyBtdy53aWRnZXRzLkNvcHlUZXh0TGF5b3V0KHtcblx0XHRcdFx0XHRcdGFsaWduOiAndG9wJyxcblx0XHRcdFx0XHRcdGNvcHlUZXh0OiBgaHR0cHM6Ly8ke2RvbWFpbn0ke2xpbmt9YCxcblx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdFx0XHR9KS4kZWxlbWVudCBhcyBKUXVlcnlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHZvaWQgT08udWkuYWxlcnQoJGVsZW1lbnQsIHt0aXRsZTogZ2V0TWVzc2FnZSgnU2hvcnQgVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnKSwgc2l6ZTogJ21lZGl1bSd9KTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgaXNDaXRpemVuOiBib29sZWFuID0gbXcuY29uZmlnLmdldCgnc2tpbicpID09PSAnY2l0aXplbic7XG5cdFx0aWYgKGlzQ2l0aXplbikge1xuXHRcdFx0JChlbGVtZW50KS5maW5kKCdhJykucHJlcGVuZCgnPHNwYW4gY2xhc3M9XCJjaXRpemVuLXVpLWljb24gbXctdWktaWNvbi13aWtpbWVkaWEtc2hvcnRsaW5rXCI+PC9zcGFuPicpO1xuXHRcdH1cblx0fVxuXG5cdGxldCBoZWFkZXJFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaW5kaWNhdG9yLXNob3J0VVJMIGEnKTtcblxuXHRpZiAoIWhlYWRlckVsZW1lbnQpIHtcblx0XHRjb25zdCAkaGVhZGVyRWxlbWVudDogSlF1ZXJ5ID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdtdy1pbmRpY2F0b3InKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ213LWluZGljYXRvci1zaG9ydFVSTCcpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdGhyZWY6ICcjJyxcblx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJyksXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLmFkZENsYXNzKCdnYWRnZXQtc2hvcnQtbGlua19faWNvbicpLnRleHQoZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJykpKVxuXHRcdFx0KTtcblx0XHQkaGVhZGVyRWxlbWVudC5wcmVwZW5kVG8oJy5tdy1pbmRpY2F0b3JzJyk7XG5cdFx0aGVhZGVyRWxlbWVudCA9ICRoZWFkZXJFbGVtZW50LmZpbmQoJ2EnKS5nZXQoMCkgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG5cdFx0dGlwcHkoaGVhZGVyRWxlbWVudCwge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRjb250ZW50OiBnZXRNZXNzYWdlKCdTaG9ydCBVUkwnKSxcblx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBzaG9ydHVybDogc3RyaW5nID0gYGh0dHBzOi8vcXdiay5jYyR7bGlua31gO1xuXHRjb25zdCAkbm90aWZ5RWxlbWVudCA9ICQoJzxzcGFuPicpXG5cdFx0LnRleHQoZ2V0TWVzc2FnZSgnU2hvcnQgVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnKSlcblx0XHQuYXBwZW5kKFxuXHRcdFx0JCgnPGJyPicpLFxuXHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdC50ZXh0KHNob3J0dXJsKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdH0pXG5cdFx0KTtcblx0aGVhZGVyRWxlbWVudC5vbmNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR2b2lkIG13Lm5vdGlmeSgkbm90aWZ5RWxlbWVudCwge3RhZzogJ3Nob3J0VVJMJywgdHlwZTogJ2luZm8nfSk7XG5cdH07XG5cdGNsaXBib2FyZEluc3RhbmNlPy5kZXN0cm95KCk7XG5cdGNsaXBib2FyZEluc3RhbmNlID0gbmV3IENsaXBib2FyZChoZWFkZXJFbGVtZW50LCB7XG5cdFx0dGV4dDogKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gc2hvcnR1cmw7XG5cdFx0fSxcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdCA9IGFzeW5jICh7XG5cdGRpZmZJZCxcblx0b2xkSWQsXG5cdGFydGljbGVJZCxcblx0cmV2aXNpb25JZCxcbn06IHtcblx0ZGlmZklkOiBudW1iZXIgfCBudWxsO1xuXHRvbGRJZDogbnVtYmVyIHwgbnVsbDtcblx0YXJ0aWNsZUlkOiBudW1iZXI7XG5cdHJldmlzaW9uSWQ6IG51bWJlcjtcbn0pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRpZiAoZGlmZklkKSB7XG5cdFx0Y29uc3QgYnVpbGRMaW5rID0gKF9vbGRJZD86IG51bWJlciB8IG51bGwsIGxpbmsgPSAnL2QnKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoX29sZElkKSB7XG5cdFx0XHRcdGxpbmsgKz0gYC8ke19vbGRJZH1gO1xuXHRcdFx0fVxuXHRcdFx0bGluayArPSBgLyR7ZGlmZklkfWA7XG5cdFx0XHRkb0lucyhsaW5rKTtcblx0XHR9O1xuXG5cdFx0YnVpbGRMaW5rKG9sZElkKTtcblxuXHRcdGlmIChvbGRJZCkge1xuXHRcdFx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1Nob3J0VVJMLzEuMScpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlDb21wYXJlUGFnZXNQYXJhbXMgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAnY29tcGFyZScsXG5cdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdHByb3A6ICdpZHMnLFxuXHRcdFx0XHRcdGZyb21yZXY6IGRpZmZJZCxcblx0XHRcdFx0XHR0b3JlbGF0aXZlOiAncHJldicsXG5cdFx0XHRcdH07XG5cdFx0XHRcdGNvbnN0IHtjb21wYXJlfSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGRpZmZJZCA9PT0gbXcuY29uZmlnLmdldCgnd2dEaWZmTmV3SWQnKSAmJlxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdFx0XHRjb21wYXJlPy5mcm9tcmV2aWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk9sZElkJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0YnVpbGRMaW5rKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0gZWxzZSBpZiAoXG5cdFx0cmV2aXNpb25JZCAmJlxuXHRcdCgkYm9keS5maW5kKCcjY29udGVudFN1YicpLmZpbmQoJyNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGggfHxcblx0XHRcdCRib2R5LmZpbmQoJ21haW4jY29udGVudD4ucHJlLWNvbnRlbnQgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCkgPiAwXG5cdCkge1xuXHRcdGRvSW5zKGAvcC8ke3JldmlzaW9uSWR9YCk7XG5cdH0gZWxzZSBpZiAoYXJ0aWNsZUlkKSB7XG5cdFx0ZG9JbnMoYC9jLyR7YXJ0aWNsZUlkfWApO1xuXHR9XG59O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnU2hvcnQgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaG9ydCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn55+t6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+efree2suWdgCcsXG5cdFx0fSksXG5cdFx0J1Nob3J0IFVSTCBjb3BpZWQgdG8gY2xpcGJvYXJkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgc2hvcnQgVVJMIGhhcyBiZWVuIGNvcGllZCB0byBjbGlwYm9hcmQ6Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWkjeWItuacrOmhteefremTvuaOpe+8micsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llvqnoo73mnKzpoIHnn63ntrLlnYDvvJonLFxuXHRcdH0pLFxuXHRcdCdTaG93IHNob3J0IFVSTCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvdyBzaG9ydCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S66K+l6aG155+t6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+mhr+ekuuipsumggeefree2suWdgCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7aW5pdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5pZiAoXG5cdG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPj0gMCB8fFxuXHQhZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggfHxcblx0bXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSA9PT0gJ3ZpZXcnXG4pIHtcblx0Ly8gTG9hZCBtYWluIGZ1bmN0aW9uXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KTogdm9pZCA9PiB7XG5cdFx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1Nob3J0VVJMSW5zdGFsbGVkJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSAhPT0gJ213LWNvbnRlbnQtdGV4dCcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2b2lkIGluaXQoe1xuXHRcdFx0ZGlmZklkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZOZXdJZCcpLFxuXHRcdFx0b2xkSWQ6IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk9sZElkJyksXG5cdFx0XHRhcnRpY2xlSWQ6IG13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyksXG5cdFx0XHRyZXZpc2lvbklkOiBtdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKSxcblx0XHR9KTtcblxuXHRcdC8vIFNldCBndWFyZFxuXHRcdG13LmNvbmZpZy5zZXQoJ3dnU2hvcnRVUkxJbnN0YWxsZWQnLCB0cnVlKTtcblx0fSk7XG59XG4iXSwKICAi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Q0Q7QUFFQSxTQUFLaUIsS0FBSztNQUNURyxRQUFRckQsR0FBRzBCLE9BQU9DLElBQUksYUFBYTtNQUNuQzJCLE9BQU90RCxHQUFHMEIsT0FBT0MsSUFBSSxhQUFhO01BQ2xDNEIsV0FBV3ZELEdBQUcwQixPQUFPQyxJQUFJLGFBQWE7TUFDdEM2QixZQUFZeEQsR0FBRzBCLE9BQU9DLElBQUksY0FBYztJQUN6QyxDQUFDO0FBR0QzQixPQUFHMEIsT0FBT29ELElBQUksdUJBQXVCLElBQUk7RUFDMUMsQ0FBQztBQUNGOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiY2xpcGJvYXJkSW5zdGFuY2UiLCAiZG9JbnMiLCAibGluayIsICJfY2xpcGJvYXJkSW5zdGFuY2UiLCAicG9ydGxldElkIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZWxlbWVudCIsICJtdyIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgIl9lbGVtZW50JGZpcnN0RWxlbWVudCIsICJmaXJzdEVsZW1lbnRDaGlsZCIsICJvbmNsaWNrIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgIiRlbGVtZW50IiwgIiQiLCAiX2kiLCAiX2FyciIsICJsZW5ndGgiLCAiZG9tYWluIiwgImFwcGVuZCIsICJ3aWRnZXRzIiwgIkNvcHlUZXh0TGF5b3V0IiwgImFsaWduIiwgImNvcHlUZXh0IiwgImNvbmNhdCIsICJPTyIsICJ1aSIsICJhbGVydCIsICJ0aXRsZSIsICJzaXplIiwgImlzQ2l0aXplbiIsICJjb25maWciLCAiZ2V0IiwgImZpbmQiLCAicHJlcGVuZCIsICJoZWFkZXJFbGVtZW50IiwgIiRoZWFkZXJFbGVtZW50IiwgImFkZENsYXNzIiwgImF0dHIiLCAiaHJlZiIsICJ0ZXh0IiwgInByZXBlbmRUbyIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgInBsYWNlbWVudCIsICJzaG9ydHVybCIsICIkbm90aWZ5RWxlbWVudCIsICJvbiIsICJzdG9wUHJvcGFnYXRpb24iLCAibm90aWZ5IiwgInRhZyIsICJ0eXBlIiwgImRlc3Ryb3kiLCAiQ2xpcGJvYXJkIiwgImluaXQiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJkaWZmSWQiLCAib2xkSWQiLCAiYXJ0aWNsZUlkIiwgInJldmlzaW9uSWQiLCAiJGJvZHkiLCAiYnVpbGRMaW5rIiwgIl9vbGRJZCIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJmcm9tcmV2IiwgInRvcmVsYXRpdmUiLCAiY29tcGFyZSIsICJmcm9tcmV2aWQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiaG9vayIsICJhZGQiLCAiJGNvbnRlbnQiLCAic2V0Il0KfQo=
