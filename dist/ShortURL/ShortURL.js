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
//! src/ShortURL/modules/core.ts
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
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          new mw.widgets.CopyTextLayout({
            align: "top",
            copyText: "https://".concat(domain).concat(link)
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
          if (diffId === mw.config.get("wgDiffNewId") && (compare === null || compare === void 0 ? void 0 : compare.fromrevid) === mw.config.get("wgDiffOldId")) {
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
if (mw.config.get("wgNamespaceNumber") >= 0 || mw.config.get("wgArticleId") > 0 || mw.config.get("wgAction") === "view") {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvY29yZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9TaG9ydFVSTC9TaG9ydFVSTC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyogZXNsaW50LWRpc2FibGUgdW5pY29ybi9wcmVmZXItYWRkLWV2ZW50LWxpc3RlbmVyICovXG5pbXBvcnQge0NsaXBib2FyZH0gZnJvbSAnZXh0LmdhZGdldC5DbGlwYm9hcmQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxubGV0IGNsaXBib2FyZEluc3RhbmNlOiBDbGlwYm9hcmRKUyB8IHVuZGVmaW5lZDtcblxuY29uc3QgZG9JbnMgPSAobGluazogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblxuXHRsZXQgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC1zaG9ydGxpbmsnKTtcblxuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRlbGVtZW50ID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRcdHBvcnRsZXRJZCxcblx0XHRcdCcjJyxcblx0XHRcdGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpLFxuXHRcdFx0J3Qtc2hvcnRsaW5rJyxcblx0XHRcdGdldE1lc3NhZ2UoJ1Nob3cgc2hvcnQgVVJMJylcblx0XHQpO1xuXHR9XG5cblx0aWYgKGVsZW1lbnQpIHtcblx0XHQoKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgPz8gZWxlbWVudCkgYXMgSFRNTEVsZW1lbnQpLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJCgnPGRpdj4nKTtcblx0XHRcdGZvciAoY29uc3QgZG9tYWluIG9mIFsncXdiay5jYycsICdxd2JrLm9yZycsICdia3d6LmNuJ10pIHtcblx0XHRcdFx0JGVsZW1lbnQuYXBwZW5kKFxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGxcblx0XHRcdFx0XHRuZXcgbXcud2lkZ2V0cy5Db3B5VGV4dExheW91dCh7XG5cdFx0XHRcdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRcdFx0XHRjb3B5VGV4dDogYGh0dHBzOi8vJHtkb21haW59JHtsaW5rfWAsXG5cdFx0XHRcdFx0fSkuJGVsZW1lbnQgYXMgSlF1ZXJ5XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHR2b2lkIE9PLnVpLmFsZXJ0KCRlbGVtZW50LCB7dGl0bGU6IGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCBjb3BpZWQgdG8gY2xpcGJvYXJkJyksIHNpemU6ICdtZWRpdW0nfSk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGlzQ2l0aXplbjogYm9vbGVhbiA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKSA9PT0gJ2NpdGl6ZW4nO1xuXHRcdGlmIChpc0NpdGl6ZW4pIHtcblx0XHRcdCQoZWxlbWVudCkuZmluZCgnYScpLnByZXBlbmQoJzxzcGFuIGNsYXNzPVwiY2l0aXplbi11aS1pY29uIG13LXVpLWljb24td2lraW1lZGlhLXNob3J0bGlua1wiPjwvc3Bhbj4nKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgaGVhZGVyRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWluZGljYXRvci1zaG9ydFVSTCBhJyk7XG5cblx0aWYgKCFoZWFkZXJFbGVtZW50KSB7XG5cdFx0Y29uc3QgJGhlYWRlckVsZW1lbnQ6IEpRdWVyeSA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnbXctaW5kaWNhdG9yJylcblx0XHRcdC5hdHRyKCdpZCcsICdtdy1pbmRpY2F0b3Itc2hvcnRVUkwnKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRocmVmOiAnIycsXG5cdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6IGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZ2FkZ2V0LXNob3J0LWxpbmtfX2ljb24nKS50ZXh0KGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpKSlcblx0XHRcdCk7XG5cdFx0JGhlYWRlckVsZW1lbnQucHJlcGVuZFRvKCcubXctaW5kaWNhdG9ycycpO1xuXHRcdGhlYWRlckVsZW1lbnQgPSAkaGVhZGVyRWxlbWVudC5maW5kKCdhJykuZ2V0KDApIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXHRcdHRpcHB5KGhlYWRlckVsZW1lbnQsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJyksXG5cdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgc2hvcnR1cmw6IHN0cmluZyA9IGBodHRwczovL3F3YmsuY2Mke2xpbmt9YDtcblx0Y29uc3QgJG5vdGlmeUVsZW1lbnQgPSAkKCc8c3Bhbj4nKVxuXHRcdC50ZXh0KGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCBjb3BpZWQgdG8gY2xpcGJvYXJkJykpXG5cdFx0LmFwcGVuZChcblx0XHRcdCQoJzxicj4nKSxcblx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdC5hdHRyKCdocmVmJywgJyMnKVxuXHRcdFx0XHQudGV4dChzaG9ydHVybClcblx0XHRcdFx0Lm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR9KVxuXHRcdCk7XG5cdGhlYWRlckVsZW1lbnQub25jbGljayA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dm9pZCBtdy5ub3RpZnkoJG5vdGlmeUVsZW1lbnQsIHt0YWc6ICdzaG9ydFVSTCcsIHR5cGU6ICdpbmZvJ30pO1xuXHR9O1xuXHRjbGlwYm9hcmRJbnN0YW5jZT8uZGVzdHJveSgpO1xuXHRjbGlwYm9hcmRJbnN0YW5jZSA9IG5ldyBDbGlwYm9hcmQoaGVhZGVyRWxlbWVudCwge1xuXHRcdHRleHQ6ICgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIHNob3J0dXJsO1xuXHRcdH0sXG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXQgPSBhc3luYyAoe1xuXHRkaWZmSWQsXG5cdG9sZElkLFxuXHRhcnRpY2xlSWQsXG5cdHJldmlzaW9uSWQsXG59OiB7XG5cdGRpZmZJZDogbnVtYmVyIHwgbnVsbDtcblx0b2xkSWQ6IG51bWJlciB8IG51bGw7XG5cdGFydGljbGVJZDogbnVtYmVyO1xuXHRyZXZpc2lvbklkOiBudW1iZXI7XG59KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0aWYgKGRpZmZJZCkge1xuXHRcdGNvbnN0IGJ1aWxkTGluayA9IChfb2xkSWQ/OiBudW1iZXIgfCBudWxsLCBsaW5rID0gJy9kJyk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKF9vbGRJZCkge1xuXHRcdFx0XHRsaW5rICs9IGAvJHtfb2xkSWR9YDtcblx0XHRcdH1cblx0XHRcdGxpbmsgKz0gYC8ke2RpZmZJZH1gO1xuXHRcdFx0ZG9JbnMobGluayk7XG5cdFx0fTtcblxuXHRcdGJ1aWxkTGluayhvbGRJZCk7XG5cblx0XHRpZiAob2xkSWQpIHtcblx0XHRcdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdTaG9ydFVSTC8xLjEnKTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHBhcmFtczogQXBpQ29tcGFyZVBhZ2VzUGFyYW1zID0ge1xuXHRcdFx0XHRcdGFjdGlvbjogJ2NvbXBhcmUnLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRwcm9wOiAnaWRzJyxcblx0XHRcdFx0XHRmcm9tcmV2OiBkaWZmSWQsXG5cdFx0XHRcdFx0dG9yZWxhdGl2ZTogJ3ByZXYnLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRjb25zdCB7Y29tcGFyZX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0XHRcdGlmIChkaWZmSWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJykgJiYgY29tcGFyZT8uZnJvbXJldmlkID09PSBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpKSB7XG5cdFx0XHRcdFx0YnVpbGRMaW5rKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0gZWxzZSBpZiAoXG5cdFx0cmV2aXNpb25JZCAmJlxuXHRcdCgkYm9keS5maW5kKCcjY29udGVudFN1YicpLmZpbmQoJyNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGggfHxcblx0XHRcdCRib2R5LmZpbmQoJ21haW4jY29udGVudD4ucHJlLWNvbnRlbnQgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCkgPiAwXG5cdCkge1xuXHRcdGRvSW5zKGAvcC8ke3JldmlzaW9uSWR9YCk7XG5cdH0gZWxzZSBpZiAoYXJ0aWNsZUlkKSB7XG5cdFx0ZG9JbnMoYC9jLyR7YXJ0aWNsZUlkfWApO1xuXHR9XG59O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnU2hvcnQgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaG9ydCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn55+t6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+efree2suWdgCcsXG5cdFx0fSksXG5cdFx0J1Nob3J0IFVSTCBjb3BpZWQgdG8gY2xpcGJvYXJkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgc2hvcnQgVVJMIGhhcyBiZWVuIGNvcGllZCB0byBjbGlwYm9hcmQ6Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWkjeWItuacrOmhteefremTvuaOpe+8micsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llvqnoo73mnKzpoIHnn63ntrLlnYDvvJonLFxuXHRcdH0pLFxuXHRcdCdTaG93IHNob3J0IFVSTCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvdyBzaG9ydCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S66K+l6aG155+t6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+mhr+ekuuipsumggeefree2suWdgCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7aW5pdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5pZiAoXG5cdG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPj0gMCB8fFxuXHRtdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpID4gMCB8fFxuXHRtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpID09PSAndmlldydcbikge1xuXHQvLyBMb2FkIG1haW4gZnVuY3Rpb25cblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCgoJGNvbnRlbnQpOiB2b2lkID0+IHtcblx0XHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnU2hvcnRVUkxJbnN0YWxsZWQnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICgkY29udGVudC5hdHRyKCdpZCcpICE9PSAnbXctY29udGVudC10ZXh0Jykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZvaWQgaW5pdCh7XG5cdFx0XHRkaWZmSWQ6IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJyksXG5cdFx0XHRvbGRJZDogbXcuY29uZmlnLmdldCgnd2dEaWZmT2xkSWQnKSxcblx0XHRcdGFydGljbGVJZDogbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlSWQnKSxcblx0XHRcdHJldmlzaW9uSWQ6IG13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpLFxuXHRcdH0pO1xuXG5cdFx0Ly8gU2V0IGd1YXJkXG5cdFx0bXcuY29uZmlnLnNldCgnd2dTaG9ydFVSTEluc3RhbGxlZCcsIHRydWUpO1xuXHR9KTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBQUEscUJBQXdCQyxRQUFBLHNCQUFBOztBQ0R4QixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixjQUFBLEdBQWFELGtCQUFBRSxVQUFTO01BQ3JCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsa0NBQUEsR0FBaUNILGtCQUFB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MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJjbGlwYm9hcmRJbnN0YW5jZSIsICJkb0lucyIsICJsaW5rIiwgIl9jbGlwYm9hcmRJbnN0YW5jZSIsICJwb3J0bGV0SWQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJlbGVtZW50IiwgIm13IiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiX2VsZW1lbnQkZmlyc3RFbGVtZW50IiwgImZpcnN0RWxlbWVudENoaWxkIiwgIm9uY2xpY2siLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiJGVsZW1lbnQiLCAiJCIsICJfaSIsICJfYXJyIiwgImxlbmd0aCIsICJkb21haW4iLCAiYXBwZW5kIiwgIndpZGdldHMiLCAiQ29weVRleHRMYXlvdXQiLCAiYWxpZ24iLCAiY29weVRleHQiLCAiY29uY2F0IiwgIk9PIiwgInVpIiwgImFsZXJ0IiwgInRpdGxlIiwgInNpemUiLCAiaXNDaXRpemVuIiwgImNvbmZpZyIsICJnZXQiLCAiZmluZCIsICJwcmVwZW5kIiwgImhlYWRlckVsZW1lbnQiLCAiJGhlYWRlckVsZW1lbnQiLCAiYWRkQ2xhc3MiLCAiYXR0ciIsICJocmVmIiwgInRleHQiLCAicHJlcGVuZFRvIiwgInRpcHB5IiwgImFycm93IiwgImNvbnRlbnQiLCAicGxhY2VtZW50IiwgInNob3J0dXJsIiwgIiRub3RpZnlFbGVtZW50IiwgIm9uIiwgInN0b3BQcm9wYWdhdGlvbiIsICJub3RpZnkiLCAidGFnIiwgInR5cGUiLCAiZGVzdHJveSIsICJDbGlwYm9hcmQiLCAiaW5pdCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImRpZmZJZCIsICJvbGRJZCIsICJhcnRpY2xlSWQiLCAicmV2aXNpb25JZCIsICIkYm9keSIsICJidWlsZExpbmsiLCAiX29sZElkIiwgImFwaSIsICJpbml0TXdBcGkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgImZyb21yZXYiLCAidG9yZWxhdGl2ZSIsICJjb21wYXJlIiwgImZyb21yZXZpZCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaG9vayIsICJhZGQiLCAiJGNvbnRlbnQiLCAic2V0Il0KfQo=
