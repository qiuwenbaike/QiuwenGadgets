/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ShortURL}
 * @author 安忆 <i@anyi.in>; WaitSpring <me@waitspring.com>
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
var shortURL = () => {
  let isInit = false;
  let clipboardInstance;
  const doIns = (link) => {
    var _clipboardInstance;
    const isCitizen = mw.config.get("skin") === "citizen";
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
      if (isCitizen && !isInit) {
        isInit = true;
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
    headerElement.onclick = (event) => {
      event.preventDefault();
      void mw.notify($("<span>").text(getMessage("Short URL copied to clipboard")).append($("<br>"), $("<a>").attr("href", "#").text(shorturl).on("click", (_event) => {
        _event.preventDefault();
        _event.stopPropagation();
      })), {
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
  const init = /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator(function* ({
      articleId,
      diffId,
      oldId,
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
              buildLink(false);
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
  mw.hook("wikipage.content").add(($content) => {
    if ($content.attr("id") !== "mw-content-text") {
      return;
    }
    void init({
      articleId: mw.config.get("wgArticleId"),
      diffId: mw.config.get("wgDiffNewId"),
      oldId: mw.config.get("wgDiffOldId"),
      revisionId: mw.config.get("wgRevisionId")
    });
  });
};
//! src/ShortURL/ShortURL.ts
if (mw.config.get("wgNamespaceNumber") >= 0 || !document.querySelectorAll(".noarticletext").length || mw.config.get("wgAction") === "view") {
  $(shortURL);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvY29yZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9TaG9ydFVSTC9TaG9ydFVSTC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyogZXNsaW50LWRpc2FibGUgdW5pY29ybi9wcmVmZXItYWRkLWV2ZW50LWxpc3RlbmVyICovXG5pbXBvcnQge0NsaXBib2FyZH0gZnJvbSAnZXh0LmdhZGdldC5DbGlwYm9hcmQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuZXhwb3J0IGNvbnN0IHNob3J0VVJMID0gKCk6IHZvaWQgPT4ge1xuXHRsZXQgaXNJbml0OiBib29sZWFuID0gZmFsc2U7XG5cdGxldCBjbGlwYm9hcmRJbnN0YW5jZTogQ2xpcGJvYXJkSlMgfCB1bmRlZmluZWQ7XG5cdGNvbnN0IGRvSW5zID0gKGxpbms6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGlzQ2l0aXplbjogYm9vbGVhbiA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKSA9PT0gJ2NpdGl6ZW4nO1xuXHRcdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0XHRsZXQgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC1zaG9ydGxpbmsnKTtcblx0XHRpZiAoIWVsZW1lbnQpIHtcblx0XHRcdGVsZW1lbnQgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdFx0XHRwb3J0bGV0SWQsXG5cdFx0XHRcdCcjJyxcblx0XHRcdFx0Z2V0TWVzc2FnZSgnU2hvcnQgVVJMJyksXG5cdFx0XHRcdCd0LXNob3J0bGluaycsXG5cdFx0XHRcdGdldE1lc3NhZ2UoJ1Nob3cgc2hvcnQgVVJMJylcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHQoKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgPz8gZWxlbWVudCkgYXMgSFRNTEVsZW1lbnQpLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoJzxkaXY+Jyk7XG5cdFx0XHRcdGZvciAoY29uc3QgZG9tYWluIG9mIFsncXdiay5jYycsICdxd2JrLm9yZycsICdia3d6LmNuJ10pIHtcblx0XHRcdFx0XHQkZWxlbWVudC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdFx0XHRcdG5ldyBtdy53aWRnZXRzLkNvcHlUZXh0TGF5b3V0KHtcblx0XHRcdFx0XHRcdFx0YWxpZ246ICd0b3AnLFxuXHRcdFx0XHRcdFx0XHRjb3B5VGV4dDogYGh0dHBzOi8vJHtkb21haW59JHtsaW5rfWAsXG5cdFx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdFx0XHRcdH0pLiRlbGVtZW50IGFzIEpRdWVyeVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dm9pZCBPTy51aS5hbGVydCgkZWxlbWVudCwge3RpdGxlOiBnZXRNZXNzYWdlKCdTaG9ydCBVUkwgY29waWVkIHRvIGNsaXBib2FyZCcpLCBzaXplOiAnbWVkaXVtJ30pO1xuXHRcdFx0fTtcblx0XHRcdGlmIChpc0NpdGl6ZW4gJiYgIWlzSW5pdCkge1xuXHRcdFx0XHRpc0luaXQgPSB0cnVlO1xuXHRcdFx0XHQkKGVsZW1lbnQpLmZpbmQoJ2EnKS5wcmVwZW5kKCc8c3BhbiBjbGFzcz1cImNpdGl6ZW4tdWktaWNvbiBtdy11aS1pY29uLXdpa2ltZWRpYS1zaG9ydGxpbmtcIj48L3NwYW4+Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCBoZWFkZXJFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaW5kaWNhdG9yLXNob3J0VVJMIGEnKTtcblx0XHRpZiAoIWhlYWRlckVsZW1lbnQpIHtcblx0XHRcdGNvbnN0ICRoZWFkZXJFbGVtZW50OiBKUXVlcnkgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnbXctaW5kaWNhdG9yJylcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ213LWluZGljYXRvci1zaG9ydFVSTCcpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyMnLFxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6IGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2dhZGdldC1zaG9ydC1saW5rX19pY29uJykudGV4dChnZXRNZXNzYWdlKCdTaG9ydCBVUkwnKSkpXG5cdFx0XHRcdCk7XG5cdFx0XHQkaGVhZGVyRWxlbWVudC5wcmVwZW5kVG8oJy5tdy1pbmRpY2F0b3JzJyk7XG5cdFx0XHRoZWFkZXJFbGVtZW50ID0gJGhlYWRlckVsZW1lbnQuZmluZCgnYScpLmdldCgwKSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblx0XHRcdHRpcHB5KGhlYWRlckVsZW1lbnQsIHtcblx0XHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRcdGNvbnRlbnQ6IGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpLFxuXHRcdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGNvbnN0IHNob3J0dXJsOiBzdHJpbmcgPSBgaHR0cHM6Ly9xd2JrLmNjJHtsaW5rfWA7XG5cdFx0aGVhZGVyRWxlbWVudC5vbmNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0LnRleHQoZ2V0TWVzc2FnZSgnU2hvcnQgVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnKSlcblx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JCgnPGJyPicpLFxuXHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdFx0XHRcdC50ZXh0KHNob3J0dXJsKVxuXHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgKF9ldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRfZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRfZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ3Nob3J0VVJMJywgdHlwZTogJ2luZm8nfVxuXHRcdFx0KTtcblx0XHR9O1xuXHRcdGNsaXBib2FyZEluc3RhbmNlPy5kZXN0cm95KCk7XG5cdFx0Y2xpcGJvYXJkSW5zdGFuY2UgPSBuZXcgQ2xpcGJvYXJkKGhlYWRlckVsZW1lbnQsIHtcblx0XHRcdHRleHQ6ICgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRyZXR1cm4gc2hvcnR1cmw7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBpbml0ID0gYXN5bmMgKHtcblx0XHRhcnRpY2xlSWQsXG5cdFx0ZGlmZklkLFxuXHRcdG9sZElkLFxuXHRcdHJldmlzaW9uSWQsXG5cdH06IHtcblx0XHRhcnRpY2xlSWQ6IG51bWJlcjtcblx0XHRkaWZmSWQ6IG51bWJlcjtcblx0XHRvbGRJZDogbnVtYmVyIHwgZmFsc2U7XG5cdFx0cmV2aXNpb25JZDogbnVtYmVyO1xuXHR9KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRcdGlmIChkaWZmSWQpIHtcblx0XHRcdGNvbnN0IGJ1aWxkTGluayA9IChfb2xkSWQ6IG51bWJlciB8IGZhbHNlLCBsaW5rID0gJy9kJyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRpZiAoX29sZElkKSB7XG5cdFx0XHRcdFx0bGluayArPSBgLyR7X29sZElkfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGluayArPSBgLyR7ZGlmZklkfWA7XG5cdFx0XHRcdGRvSW5zKGxpbmspO1xuXHRcdFx0fTtcblx0XHRcdGJ1aWxkTGluayhvbGRJZCk7XG5cdFx0XHRpZiAob2xkSWQpIHtcblx0XHRcdFx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1Nob3J0VVJMLzEuMScpO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHBhcmFtczogQXBpQ29tcGFyZVBhZ2VzUGFyYW1zID0ge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAnY29tcGFyZScsXG5cdFx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRcdHByb3A6ICdpZHMnLFxuXHRcdFx0XHRcdFx0ZnJvbXJldjogZGlmZklkLFxuXHRcdFx0XHRcdFx0dG9yZWxhdGl2ZTogJ3ByZXYnLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0Y29uc3Qge2NvbXBhcmV9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdGRpZmZJZCA9PT0gbXcuY29uZmlnLmdldCgnd2dEaWZmTmV3SWQnKSAmJlxuXHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuXHRcdFx0XHRcdFx0Y29tcGFyZT8uZnJvbXJldmlkID09PSBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRidWlsZExpbmsoZmFsc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRyZXZpc2lvbklkICYmXG5cdFx0XHQoJGJvZHkuZmluZCgnI2NvbnRlbnRTdWInKS5maW5kKCcjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoIHx8XG5cdFx0XHRcdCRib2R5LmZpbmQoJ21haW4jY29udGVudD4ucHJlLWNvbnRlbnQgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCkgPiAwXG5cdFx0KSB7XG5cdFx0XHRkb0lucyhgL3AvJHtyZXZpc2lvbklkfWApO1xuXHRcdH0gZWxzZSBpZiAoYXJ0aWNsZUlkKSB7XG5cdFx0XHRkb0lucyhgL2MvJHthcnRpY2xlSWR9YCk7XG5cdFx0fVxuXHR9O1xuXHRtdy5ob29rPEpRdWVyeVtdPignd2lraXBhZ2UuY29udGVudCcpLmFkZCgoJGNvbnRlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSAhPT0gJ213LWNvbnRlbnQtdGV4dCcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dm9pZCBpbml0KHtcblx0XHRcdGFydGljbGVJZDogbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlSWQnKSxcblx0XHRcdGRpZmZJZDogbXcuY29uZmlnLmdldCgnd2dEaWZmTmV3SWQnKSxcblx0XHRcdG9sZElkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpLFxuXHRcdFx0cmV2aXNpb25JZDogbXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyksXG5cdFx0fSk7XG5cdH0pO1xufTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J1Nob3J0IFVSTCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvcnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+efremTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfnn63ntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaG9ydCBVUkwgY29waWVkIHRvIGNsaXBib2FyZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIHNob3J0IFVSTCBoYXMgYmVlbiBjb3BpZWQgdG8gY2xpcGJvYXJkOicsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlpI3liLbmnKzpobXnn63pk77mjqXvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5b6p6KO95pys6aCB55+t57ay5Z2A77yaJyxcblx0XHR9KSxcblx0XHQnU2hvdyBzaG9ydCBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3cgc2hvcnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aYvuekuuivpemhteefremTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfpoa/npLroqbLpoIHnn63ntrLlnYAnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge3Nob3J0VVJMfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmIChcblx0bXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA+PSAwIHx8XG5cdCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm9hcnRpY2xldGV4dCcpLmxlbmd0aCB8fFxuXHRtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpID09PSAndmlldydcbikge1xuXHQkKHNob3J0VVJMKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUFBLHFCQUF3QkMsUUFBQSxzQkFBQTs7QUNEeEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sY0FBQSxHQUFhRCxrQkFBQUUsVUFBUztNQUNyQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELGtDQUFBLEdBQWlDSCxrQkFBQUUsVUFBUztNQUN6Q0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELG1CQUFBLEdBQWtCSCxrQkFBQUUsVUFBUztNQUMxQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlSCxnQkFBZ0I7QUFFckMsSUFBTUksYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUR2QkEsSUFBQUMscUJBQXdCUixRQUFBLGlCQUFBO0FBQ3hCLElBQUFTLHFCQUFvQlQsUUFBQSxrQkFBQTtBQUViLElBQU1VLFdBQVdBLE1BQVk7QUFDbkMsTUFBSUMsU0FBa0I7QUFDdEIsTUFBSUM7QUFDSixRQUFNQyxRQUFTQyxVQUF1QjtBQUFBLFFBQUFDO0FBQ3JDLFVBQU1DLFlBQXFCQyxHQUFHQyxPQUFPQyxJQUFJLE1BQU0sTUFBTTtBQUNyRCxVQUFNQyxZQUFtQ0MsU0FBU0MsY0FBYyxhQUFhLElBQUksZUFBZTtBQUNoRyxRQUFJQyxVQUFnQ0Ys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QSxTQUFTM0MsS0FBSyxJQUFJLE1BQU0sbUJBQW1CO0FBQzlDO0lBQ0Q7QUFDQSxTQUFLaUIsS0FBSztNQUNURyxXQUFXeEQsR0FBR0MsT0FBT0MsSUFBSSxhQUFhO01BQ3RDdUQsUUFBUXpELEdBQUdDLE9BQU9DLElBQUksYUFBYTtNQUNuQ3dELE9BQU8xRCxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7TUFDbEN5RCxZQUFZM0QsR0FBR0MsT0FBT0MsSUFBSSxjQUFjO0lBQ3pDLENBQUM7RUFDRixDQUFDO0FBQ0Y7O0FFdkpBLElBQ0NGLEdBQUdDLE9BQU9DLElBQUksbUJBQW1CLEtBQUssS0FDdEMsQ0FBQ0UsU0FBUzRFLGlCQUFpQixnQkFBZ0IsRUFBRTlELFVBQzdDbEIsR0FBR0MsT0FBT0MsSUFBSSxVQUFVLE1BQU0sUUFDN0I7QUFDRGEsSUFBRXRCLFFBQVE7QUFDWDsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInNob3J0VVJMIiwgImlzSW5pdCIsICJjbGlwYm9hcmRJbnN0YW5jZSIsICJkb0lucyIsICJsaW5rIiwgIl9jbGlwYm9hcmRJbnN0YW5jZSIsICJpc0NpdGl6ZW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJwb3J0bGV0SWQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJlbGVtZW50IiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiX2VsZW1lbnQkZmlyc3RFbGVtZW50IiwgImZpcnN0RWxlbWVudENoaWxkIiwgIm9uY2xpY2siLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiJGVsZW1lbnQiLCAiJCIsICJfaSIsICJfYXJyIiwgImxlbmd0aCIsICJkb21haW4iLCAiYXBwZW5kIiwgIndpZGdldHMiLCAiQ29weVRleHRMYXlvdXQiLCAiYWxpZ24iLCAiY29weVRleHQiLCAiY29uY2F0IiwgIk9PIiwgInVpIiwgImFsZXJ0IiwgInRpdGxlIiwgInNpemUiLCAiZmluZCIsICJwcmVwZW5kIiwgImhlYWRlckVsZW1lbnQiLCAiJGhlYWRlckVsZW1lbnQiLCAiYWRkQ2xhc3MiLCAiYXR0ciIsICJocmVmIiwgInRleHQiLCAicHJlcGVuZFRvIiwgInRpcHB5IiwgImFycm93IiwgImNvbnRlbnQiLCAicGxhY2VtZW50IiwgInNob3J0dXJsIiwgIm5vdGlmeSIsICJvbiIsICJfZXZlbnQiLCAic3RvcFByb3BhZ2F0aW9uIiwgInRhZyIsICJ0eXBlIiwgImRlc3Ryb3kiLCAiQ2xpcGJvYXJkIiwgImluaXQiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJhcnRpY2xlSWQiLCAiZGlmZklkIiwgIm9sZElkIiwgInJldmlzaW9uSWQiLCAiJGJvZHkiLCAiYnVpbGRMaW5rIiwgIl9vbGRJZCIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJmcm9tcmV2IiwgInRvcmVsYXRpdmUiLCAiY29tcGFyZSIsICJmcm9tcmV2aWQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImhvb2siLCAiYWRkIiwgIiRjb250ZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiXQp9Cg==

})();

/* </nowiki> */
