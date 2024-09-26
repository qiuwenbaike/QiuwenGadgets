/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/DiffLink}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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

// dist/DiffLink/DiffLink.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
//! src/DiffLink/modules/util/checkDiffPage.ts
var checkDiffPage = ($content) => {
  const {
    wgCurRevisionId
  } = mw.config.get();
  return $content.find("table").hasClass("diff") && !!wgCurRevisionId;
};
//! src/DiffLink/modules/util/checkRevisionPage.ts
var checkRevisionPage = ($content) => {
  return ($content.find("#contentSub #mw-revision-nav").length || $content.find("main#content>.pre-content #mw-revision-nav").length) > 0;
};
//! src/DiffLink/modules/addPortletLink.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/DiffLink/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Network error": (0, import_ext_gadget.localize)({
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    CopyDiff: (0, import_ext_gadget.localize)({
      en: "Copy the link to the diff version (wiki syntax)",
      ja: "現在の版間の差分リンクをコピーします（ウィキ記法）",
      "zh-hans": "复制链接到当前差异版本的维基语法",
      "zh-hant": "複製連結到當前差異版本的維基語法"
    }),
    CopyPermanent: (0, import_ext_gadget.localize)({
      en: "Copy the permanent link to the current version (wiki syntax)",
      ja: "このページのこの版への固定リンクをコピーします（ウィキ記法）",
      "zh-hans": "复制链接到当前修订版本的维基语法",
      "zh-hant": "複製連結到當前修訂版本的維基語法"
    }),
    Diff: (0, import_ext_gadget.localize)({
      en: "Diff link",
      ja: "現在の版間の差分リンク",
      "zh-hans": "当前差异链接",
      "zh-hant": "當前差異連結"
    }),
    DiffVersion: (0, import_ext_gadget.localize)({
      en: "diff version",
      ja: "版間の差分",
      "zh-hans": "差异版本",
      "zh-hant": "差異版本"
    }),
    Permanent: (0, import_ext_gadget.localize)({
      en: "Permanent link",
      ja: "この版への固定リンク",
      "zh-hans": "当前修订链接",
      "zh-hant": "當前修訂連結"
    }),
    PermanentVersion: (0, import_ext_gadget.localize)({
      en: "permanent version",
      ja: "版への固定リンク",
      "zh-hans": "固定版本链接",
      "zh-hant": "固定版本連結"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/DiffLink/modules/addPortletLink.ts
/*!
 * 若想自定义复制结果中的文本可通过向自己的common.js中加入以下内容：
 *   window.DiffLink = ['版本差异', '固定版本'];
 * 若想使用默认值1，但自定值2，请将值1留空，如下例：
 *   window.DiffLink = ['', '固定版本'];
 */
var defaultTextArray = [getMessage("DiffVersion"), getMessage("PermanentVersion")];
if (window.DiffLink && Object.prototype.toString.call(window.DiffLink) === "[object Array]") {
  const textArray = window.DiffLink;
  if (textArray[0] && Object.prototype.toString.call(textArray[0]) === "[object String]") {
    [defaultTextArray[0]] = textArray;
  }
  if (textArray[1] && Object.prototype.toString.call(textArray[1]) === "[object String]") {
    [defaultTextArray[1]] = textArray;
  }
}
var eventListener = {
  remove: () => {
  }
};
var addPortletLink = ({
  text,
  tooltip,
  link,
  defaultTextArrayIndex,
  isPermaLink
}) => {
  var _element$firstElement;
  let element = document.querySelector("#t-difflink");
  if (!element) {
    const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
    element = mw.util.addPortletLink(portletId, "#", text, "t-difflink", tooltip);
  }
  if (!element) {
    return;
  }
  const clickListener = (event) => {
    event.preventDefault();
    const $element = $("<div>");
    const hash = isPermaLink ? decodeURIComponent(location.hash) : "";
    for (var _i = 0, _arr = [link, "[[".concat(link).concat(hash, "]]"), "[[".concat(link).concat(hash, "|").concat(defaultTextArray[defaultTextArrayIndex], "]]")]; _i < _arr.length; _i++) {
      const value = _arr[_i];
      $element.append(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
        new mw.widgets.CopyTextLayout({
          align: "top",
          copyText: value
        }).$element
      );
    }
    void OO.ui.alert($element, {
      size: "medium"
    });
  };
  eventListener.remove();
  eventListener = (0, import_ext_gadget2.addEventListenerWithRemover)({
    target: (_element$firstElement = element.firstElementChild) !== null && _element$firstElement !== void 0 ? _element$firstElement : element,
    type: "click",
    listener: clickListener
  });
};
//! src/DiffLink/modules/buildLink.ts
var buildLink = (oldId, diffId) => {
  let link = "Special:Diff/";
  if (oldId) {
    link += "".concat(oldId, "/");
  }
  link += diffId;
  addPortletLink({
    link,
    text: getMessage("Diff"),
    tooltip: getMessage("CopyDiff"),
    defaultTextArrayIndex: 0
  });
};
//! src/DiffLink/options.json
var version = "2.0";
//! src/DiffLink/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("DiffLink/".concat(version));
//! src/DiffLink/modules/util/queryApi.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var parameters = {
  action: "compare",
  format: "json",
  formatversion: "2",
  prop: "ids",
  torelative: "prev",
  smaxage: 3600,
  maxage: 3600
};
var queryApi = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (diffId) {
    try {
      return yield api.get({
        ...parameters,
        fromrev: diffId
      });
    } catch (error) {
      console.error("[DiffLink] Ajax error:", error);
      (0, import_ext_gadget4.toastify)({
        text: getMessage("Network error"),
        close: true,
        duration: -1
      }, "error");
      return {};
    }
  });
  return function queryApi2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/DiffLink/modules/compareWithRemoteDiffId.ts
var compareWithRemoteDiffId = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (diffId) {
    var _response$compare;
    const response = yield queryApi(diffId);
    const {
      wgDiffNewId,
      wgDiffOldId
    } = mw.config.get();
    if (diffId === wgDiffNewId && ((_response$compare = response["compare"]) === null || _response$compare === void 0 ? void 0 : _response$compare.fromrevid) === wgDiffOldId) {
      buildLink(0, diffId);
    }
  });
  return function compareWithRemoteDiffId2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/DiffLink/modules/processId.ts
var processId = (isRevisionPage, {
  diffId,
  oldId,
  revisionId
}) => {
  if (diffId) {
    buildLink(oldId, diffId);
    if (oldId) {
      void compareWithRemoteDiffId(diffId);
    }
  } else if (revisionId && isRevisionPage) {
    addPortletLink({
      text: getMessage("Permanent"),
      tooltip: getMessage("CopyPermanent"),
      link: "Special:PermaLink/".concat(revisionId),
      defaultTextArrayIndex: 1,
      isPermaLink: true
    });
  }
};
//! src/DiffLink/DiffLink.ts
mw.hook("wikipage.content").add(function diffLink($content) {
  if ($content.attr("id") !== "mw-content-text") {
    return;
  }
  const isDiffPage = checkDiffPage($content);
  const isRevisionPage = checkRevisionPage($content);
  if (!isDiffPage && !isRevisionPage) {
    return;
  }
  const {
    wgDiffNewId,
    wgDiffOldId,
    wgRevisionId
  } = mw.config.get();
  processId(isRevisionPage, {
    diffId: wgDiffNewId !== null && wgDiffNewId !== void 0 ? wgDiffNewId : null,
    oldId: wgDiffOldId !== null && wgDiffOldId !== void 0 ? wgDiffOldId : null,
    revisionId: wgRevisionId !== null && wgRevisionId !== void 0 ? wgRevisionId : null
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9idWlsZExpbmsudHMiLCAic3JjL0RpZmZMaW5rL29wdGlvbnMuanNvbiIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9hcGkudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9xdWVyeUFwaS50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9jb21wYXJlV2l0aFJlbW90ZURpZmZJZC50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9wcm9jZXNzSWQudHMiLCAic3JjL0RpZmZMaW5rL0RpZmZMaW5rLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjaGVja0RpZmZQYWdlID0gKCRjb250ZW50OiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0Y29uc3Qge3dnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiAkY29udGVudC5maW5kKCd0YWJsZScpLmhhc0NsYXNzKCdkaWZmJykgJiYgISF3Z0N1clJldmlzaW9uSWQ7XG59O1xuXG5leHBvcnQge2NoZWNrRGlmZlBhZ2V9O1xuIiwgImNvbnN0IGNoZWNrUmV2aXNpb25QYWdlID0gKCRjb250ZW50OiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIChcblx0XHQoJGNvbnRlbnQuZmluZCgnI2NvbnRlbnRTdWIgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCB8fFxuXHRcdFx0JGNvbnRlbnQuZmluZCgnbWFpbiNjb250ZW50Pi5wcmUtY29udGVudCAjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoKSA+IDBcblx0KTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tSZXZpc2lvblBhZ2V9O1xuIiwgImltcG9ydCB7YWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG4vKiFcbiAqIOiLpeaDs+iHquWumuS5ieWkjeWItue7k+aenOS4reeahOaWh+acrOWPr+mAmui/h+WQkeiHquW3seeahGNvbW1vbi5qc+S4reWKoOWFpeS7peS4i+WGheWuue+8mlxuICogICB3aW5kb3cuRGlmZkxpbmsgPSBbJ+eJiOacrOW3ruW8gicsICflm7rlrprniYjmnKwnXTtcbiAqIOiLpeaDs+S9v+eUqOm7mOiupOWAvDHvvIzkvYboh6rlrprlgLwy77yM6K+35bCG5YC8MeeVmeepuu+8jOWmguS4i+S+i++8mlxuICogICB3aW5kb3cuRGlmZkxpbmsgPSBbJycsICflm7rlrprniYjmnKwnXTtcbiAqL1xuY29uc3QgZGVmYXVsdFRleHRBcnJheTogW3N0cmluZywgc3RyaW5nXSA9IFtnZXRNZXNzYWdlKCdEaWZmVmVyc2lvbicpLCBnZXRNZXNzYWdlKCdQZXJtYW5lbnRWZXJzaW9uJyldO1xuaWYgKHdpbmRvdy5EaWZmTGluayAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2luZG93LkRpZmZMaW5rKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuXHRjb25zdCB0ZXh0QXJyYXkgPSB3aW5kb3cuRGlmZkxpbmsgYXMgdW5rbm93bltdO1xuXHRpZiAodGV4dEFycmF5WzBdICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0ZXh0QXJyYXlbMF0pID09PSAnW29iamVjdCBTdHJpbmddJykge1xuXHRcdFtkZWZhdWx0VGV4dEFycmF5WzBdXSA9IHRleHRBcnJheSBhcyBbc3RyaW5nXTtcblx0fVxuXHRpZiAodGV4dEFycmF5WzFdICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0ZXh0QXJyYXlbMV0pID09PSAnW29iamVjdCBTdHJpbmddJykge1xuXHRcdFtkZWZhdWx0VGV4dEFycmF5WzFdXSA9IHRleHRBcnJheSBhcyBbc3RyaW5nLCBzdHJpbmddO1xuXHR9XG59XG5cbmxldCBldmVudExpc3RlbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI+ID0ge1xuXHRyZW1vdmU6ICgpOiB2b2lkID0+IHt9LFxufTtcblxuY29uc3QgYWRkUG9ydGxldExpbmsgPSAoe1xuXHR0ZXh0LFxuXHR0b29sdGlwLFxuXHRsaW5rLFxuXHRkZWZhdWx0VGV4dEFycmF5SW5kZXgsXG5cdGlzUGVybWFMaW5rLFxufToge1xuXHR0ZXh0OiBzdHJpbmc7XG5cdHRvb2x0aXA6IHN0cmluZztcblx0bGluazogc3RyaW5nO1xuXHRkZWZhdWx0VGV4dEFycmF5SW5kZXg6IG51bWJlcjtcblx0aXNQZXJtYUxpbms/OiBib29sZWFuO1xufSk6IHZvaWQgPT4ge1xuXHRsZXQgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC1kaWZmbGluaycpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdFx0ZWxlbWVudCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIHRleHQsICd0LWRpZmZsaW5rJywgdG9vbHRpcCk7XG5cdH1cblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY2xpY2tMaXN0ZW5lciA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoJzxkaXY+Jyk7XG5cdFx0Y29uc3QgaGFzaDogc3RyaW5nID0gaXNQZXJtYUxpbmsgPyBkZWNvZGVVUklDb21wb25lbnQobG9jYXRpb24uaGFzaCkgOiAnJztcblx0XHRmb3IgKGNvbnN0IHZhbHVlIG9mIFtcblx0XHRcdGxpbmssXG5cdFx0XHRgW1ske2xpbmt9JHtoYXNofV1dYCxcblx0XHRcdGBbWyR7bGlua30ke2hhc2h9fCR7ZGVmYXVsdFRleHRBcnJheVtkZWZhdWx0VGV4dEFycmF5SW5kZXhdfV1dYCxcblx0XHRdKSB7XG5cdFx0XHQkZWxlbWVudC5hcHBlbmQoXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdFx0bmV3IChtdyBhcyBhbnkpLndpZGdldHMuQ29weVRleHRMYXlvdXQoe1xuXHRcdFx0XHRcdGFsaWduOiAndG9wJyxcblx0XHRcdFx0XHRjb3B5VGV4dDogdmFsdWUsXG5cdFx0XHRcdH0pLiRlbGVtZW50IGFzIEpRdWVyeVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0dm9pZCBPTy51aS5hbGVydCgkZWxlbWVudCwge1xuXHRcdFx0c2l6ZTogJ21lZGl1bScsXG5cdFx0fSk7XG5cdH07XG5cblx0ZXZlbnRMaXN0ZW5lci5yZW1vdmUoKTtcblx0ZXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcih7XG5cdFx0dGFyZ2V0OiAoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCA/PyBlbGVtZW50KSBhcyBIVE1MRWxlbWVudCxcblx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdGxpc3RlbmVyOiBjbGlja0xpc3RlbmVyLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uCcsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLgnLFxuXHRcdH0pLFxuXHRcdENvcHlEaWZmOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgdGhlIGxpbmsgdG8gdGhlIGRpZmYgdmVyc2lvbiAod2lraSBzeW50YXgpJyxcblx0XHRcdGphOiAn54++5Zyo44Gu54mI6ZaT44Gu5beu5YiG44Oq44Oz44Kv44KS44Kz44OU44O844GX44G+44GZ77yI44Km44Kj44Kt6KiY5rOV77yJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItumTvuaOpeWIsOW9k+WJjeW3ruW8gueJiOacrOeahOe7tOWfuuivreazlScsXG5cdFx0XHQnemgtaGFudCc6ICfopIfoo73pgKPntZDliLDnlbbliY3lt67nlbDniYjmnKznmoTntq3ln7roqp7ms5UnLFxuXHRcdH0pLFxuXHRcdENvcHlQZXJtYW5lbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weSB0aGUgcGVybWFuZW50IGxpbmsgdG8gdGhlIGN1cnJlbnQgdmVyc2lvbiAod2lraSBzeW50YXgpJyxcblx0XHRcdGphOiAn44GT44Gu44Oa44O844K444Gu44GT44Gu54mI44G444Gu5Zu65a6a44Oq44Oz44Kv44KS44Kz44OU44O844GX44G+44GZ77yI44Km44Kj44Kt6KiY5rOV77yJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItumTvuaOpeWIsOW9k+WJjeS/ruiuoueJiOacrOeahOe7tOWfuuivreazlScsXG5cdFx0XHQnemgtaGFudCc6ICfopIfoo73pgKPntZDliLDnlbbliY3kv67oqILniYjmnKznmoTntq3ln7roqp7ms5UnLFxuXHRcdH0pLFxuXHRcdERpZmY6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGlmZiBsaW5rJyxcblx0XHRcdGphOiAn54++5Zyo44Gu54mI6ZaT44Gu5beu5YiG44Oq44Oz44KvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W9k+WJjeW3ruW8gumTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfnlbbliY3lt67nlbDpgKPntZAnLFxuXHRcdH0pLFxuXHRcdERpZmZWZXJzaW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RpZmYgdmVyc2lvbicsXG5cdFx0XHRqYTogJ+eJiOmWk+OBruW3ruWIhicsXG5cdFx0XHQnemgtaGFucyc6ICflt67lvILniYjmnKwnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beu55Ww54mI5pysJyxcblx0XHR9KSxcblx0XHRQZXJtYW5lbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGVybWFuZW50IGxpbmsnLFxuXHRcdFx0amE6ICfjgZPjga7niYjjgbjjga7lm7rlrprjg6rjg7Pjgq8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5b2T5YmN5L+u6K6i6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+eVtuWJjeS/ruiogumAo+e1kCcsXG5cdFx0fSksXG5cdFx0UGVybWFuZW50VmVyc2lvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdwZXJtYW5lbnQgdmVyc2lvbicsXG5cdFx0XHRqYTogJ+eJiOOBuOOBruWbuuWumuODquODs+OCrycsXG5cdFx0XHQnemgtaGFucyc6ICflm7rlrprniYjmnKzpk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Zu65a6a54mI5pys6YCj57WQJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGJ1aWxkTGluayA9IChvbGRJZDogbnVtYmVyIHwgbnVsbCwgZGlmZklkOiBudW1iZXIpOiB2b2lkID0+IHtcblx0bGV0IGxpbms6IHN0cmluZyA9ICdTcGVjaWFsOkRpZmYvJztcblx0aWYgKG9sZElkKSB7XG5cdFx0bGluayArPSBgJHtvbGRJZH0vYDtcblx0fVxuXHRsaW5rICs9IGRpZmZJZDtcblxuXHRhZGRQb3J0bGV0TGluayh7XG5cdFx0bGluayxcblx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdEaWZmJyksXG5cdFx0dG9vbHRpcDogZ2V0TWVzc2FnZSgnQ29weURpZmYnKSxcblx0XHRkZWZhdWx0VGV4dEFycmF5SW5kZXg6IDAsXG5cdH0pO1xufTtcblxuZXhwb3J0IHtidWlsZExpbmt9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYERpZmZMaW5rLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbnR5cGUgQ29tcGFyZVJlc3BvbnNlID0ge1xuXHRjb21wYXJlPzoge1xuXHRcdGZyb21yZXZpZDogbnVtYmVyO1xuXHR9O1xufTtcblxuY29uc3QgcGFyYW1ldGVyczogQXBpQ29tcGFyZVBhZ2VzUGFyYW1zID0ge1xuXHRhY3Rpb246ICdjb21wYXJlJyxcblx0Zm9ybWF0OiAnanNvbicsXG5cdGZvcm1hdHZlcnNpb246ICcyJyxcblx0cHJvcDogJ2lkcycsXG5cdHRvcmVsYXRpdmU6ICdwcmV2Jyxcblx0c21heGFnZTogMzYwMCxcblx0bWF4YWdlOiAzNjAwLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPENvbXBhcmVSZXNwb25zZT4gPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBhcGkuZ2V0KHtcblx0XHRcdC4uLnBhcmFtZXRlcnMsXG5cdFx0XHRmcm9tcmV2OiBkaWZmSWQsXG5cdFx0fSBhcyB0eXBlb2YgcGFyYW1ldGVycyk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0RpZmZMaW5rXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHR0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdlcnJvcidcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHt9O1xuXHR9XG59O1xuXG5leHBvcnQge3F1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtxdWVyeUFwaX0gZnJvbSAnLi91dGlsL3F1ZXJ5QXBpJztcblxuY29uc3QgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcmVzcG9uc2U6IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgcXVlcnlBcGk+PiA9IGF3YWl0IHF1ZXJ5QXBpKGRpZmZJZCk7XG5cdGNvbnN0IHt3Z0RpZmZOZXdJZCwgd2dEaWZmT2xkSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoZGlmZklkID09PSB3Z0RpZmZOZXdJZCAmJiByZXNwb25zZVsnY29tcGFyZSddPy5mcm9tcmV2aWQgPT09IHdnRGlmZk9sZElkKSB7XG5cdFx0YnVpbGRMaW5rKDAsIGRpZmZJZCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9O1xuIiwgImltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtidWlsZExpbmt9IGZyb20gJy4vYnVpbGRMaW5rJztcbmltcG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9IGZyb20gJy4vY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzSWQgPSAoXG5cdGlzUmV2aXNpb25QYWdlOiBib29sZWFuLFxuXHR7ZGlmZklkLCBvbGRJZCwgcmV2aXNpb25JZH06IHtkaWZmSWQ6IG51bWJlciB8IG51bGw7IG9sZElkOiBudW1iZXIgfCBudWxsOyByZXZpc2lvbklkOiBudW1iZXIgfCBudWxsfVxuKTogdm9pZCA9PiB7XG5cdGlmIChkaWZmSWQpIHtcblx0XHRidWlsZExpbmsob2xkSWQsIGRpZmZJZCk7XG5cdFx0aWYgKG9sZElkKSB7XG5cdFx0XHR2b2lkIGNvbXBhcmVXaXRoUmVtb3RlRGlmZklkKGRpZmZJZCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHJldmlzaW9uSWQgJiYgaXNSZXZpc2lvblBhZ2UpIHtcblx0XHRhZGRQb3J0bGV0TGluayh7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdQZXJtYW5lbnQnKSxcblx0XHRcdHRvb2x0aXA6IGdldE1lc3NhZ2UoJ0NvcHlQZXJtYW5lbnQnKSxcblx0XHRcdGxpbms6IGBTcGVjaWFsOlBlcm1hTGluay8ke3JldmlzaW9uSWR9YCxcblx0XHRcdGRlZmF1bHRUZXh0QXJyYXlJbmRleDogMSxcblx0XHRcdGlzUGVybWFMaW5rOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NJZH07XG4iLCAiaW1wb3J0IHtjaGVja0RpZmZQYWdlfSBmcm9tICcuL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlJztcbmltcG9ydCB7Y2hlY2tSZXZpc2lvblBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NoZWNrUmV2aXNpb25QYWdlJztcbmltcG9ydCB7cHJvY2Vzc0lkfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0lkJztcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBkaWZmTGluaygkY29udGVudCk6IHZvaWQge1xuXHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSAhPT0gJ213LWNvbnRlbnQtdGV4dCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpc0RpZmZQYWdlOiBib29sZWFuID0gY2hlY2tEaWZmUGFnZSgkY29udGVudCk7XG5cdGNvbnN0IGlzUmV2aXNpb25QYWdlOiBib29sZWFuID0gY2hlY2tSZXZpc2lvblBhZ2UoJGNvbnRlbnQpO1xuXHRpZiAoIWlzRGlmZlBhZ2UgJiYgIWlzUmV2aXNpb25QYWdlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3dnRGlmZk5ld0lkLCB3Z0RpZmZPbGRJZCwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRwcm9jZXNzSWQoaXNSZXZpc2lvblBhZ2UsIHtcblx0XHRkaWZmSWQ6IHdnRGlmZk5ld0lkID8/IG51bGwsXG5cdFx0b2xkSWQ6IHdnRGlmZk9sZElkID8/IG51bGwsXG5cdFx0cmV2aXNpb25JZDogd2dSZXZpc2lvbklkID8/IG51bGwsXG5cdH0pO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZ0JBQWlCQyxjQUE4QjtBQUNwRCxRQUFNO0lBQUNDO0VBQWUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUN4QyxTQUFPSixTQUFT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QUFJcEMsUUFBUTtBQUNYRixjQUFVQyxPQUFPQyxNQUFNO0FBQ3ZCLFFBQUlELE9BQU87QUFDVixXQUFLMkIsd0JBQXdCMUIsTUFBTTtJQUNwQztFQUNELFdBQVdvQyxjQUFjRCxnQkFBZ0I7QUFDeEMzRSxtQkFBZTtNQUNkQyxNQUFNYixXQUFXLFdBQVc7TUFDNUJjLFNBQVNkLFdBQVcsZUFBZTtNQUNuQ2UsTUFBQSxxQkFBQW1CLE9BQTJCc0QsVUFBVTtNQUNyQ3hFLHVCQUF1QjtNQUN2QkMsYUFBYTtJQUNkLENBQUM7RUFDRjtBQUNEOztBQ25CQXRDLEdBQUc4RyxLQUFLLGtCQUFrQixFQUFFQyxJQUFJLFNBQVNDLFNBQVNsSCxVQUFnQjtBQUNqRSxNQUFJQSxTQUFTbUgsS0FBSyxJQUFJLE1BQU0sbUJBQW1CO0FBQzlDO0VBQ0Q7QUFFQSxRQUFNQyxhQUFzQnJILGNBQWNDLFFBQVE7QUFDbEQsUUFBTThHLGlCQUEwQnZHLGtCQUFrQlAsUUFBUTtBQUMxRCxNQUFJLENBQUNvSCxjQUFjLENBQUNOLGdCQUFnQjtBQUNuQztFQUNEO0FBRUEsUUFBTTtJQUFDTDtJQUFhQztJQUFhVztFQUFZLElBQUluSCxHQUFHQyxPQUFPQyxJQUFJO0FBRS9EeUcsWUFBVUMsZ0JBQWdCO0lBQ3pCbkMsUUFBUThCLGdCQUFBLFFBQUFBLGdCQUFBLFNBQUFBLGNBQWU7SUFDdkIvQixPQUFPZ0MsZ0JBQUEsUUFBQUEsZ0JBQUEsU0FBQUEsY0FBZTtJQUN0QkssWUFBWU0saUJBQUEsUUFBQUEsaUJBQUEsU0FBQUEsZUFBZ0I7RUFDN0IsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImNoZWNrRGlmZlBhZ2UiLCAiJGNvbnRlbnQiLCAid2dDdXJSZXZpc2lvbklkIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZmluZCIsICJoYXNDbGFzcyIsICJjaGVja1JldmlzaW9uUGFnZSIsICJsZW5ndGgiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImphIiwgIkNvcHlEaWZmIiwgImVuIiwgIkNvcHlQZXJtYW5lbnQiLCAiRGlmZiIsICJEaWZmVmVyc2lvbiIsICJQZXJtYW5lbnQiLCAiUGVybWFuZW50VmVyc2lvbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZGVmYXVsdFRleHRBcnJheSIsICJ3aW5kb3ciLCAiRGlmZkxpbmsiLCAiT2JqZWN0IiwgInByb3RvdHlwZSIsICJ0b1N0cmluZyIsICJjYWxsIiwgInRleHRBcnJheSIsICJldmVudExpc3RlbmVyIiwgInJlbW92ZSIsICJhZGRQb3J0bGV0TGluayIsICJ0ZXh0IiwgInRvb2x0aXAiLCAibGluayIsICJkZWZhdWx0VGV4dEFycmF5SW5kZXgiLCAiaXNQZXJtYUxpbmsiLCAiX2VsZW1lbnQkZmlyc3RFbGVtZW50IiwgImVsZW1lbnQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJwb3J0bGV0SWQiLCAidXRpbCIsICJjbGlja0xpc3RlbmVyIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgIiRlbGVtZW50IiwgIiQiLCAiaGFzaCIsICJkZWNvZGVVUklDb21wb25lbnQiLCAibG9jYXRpb24iLCAiX2kiLCAiX2FyciIsICJjb25jYXQiLCAidmFsdWUiLCAiYXBwZW5kIiwgIndpZGdldHMiLCAiQ29weVRleHRMYXlvdXQiLCAiYWxpZ24iLCAiY29weVRleHQiLCAiT08iLCAidWkiLCAiYWxlcnQiLCAic2l6ZSIsICJhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIiLCAidGFyZ2V0IiwgImZpcnN0RWxlbWVudENoaWxkIiwgInR5cGUiLCAibGlzdGVuZXIiLCAiYnVpbGRMaW5rIiwgIm9sZElkIiwgImRpZmZJZCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJwYXJhbWV0ZXJzIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRvcmVsYXRpdmUiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnlBcGkiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJmcm9tcmV2IiwgImVycm9yIiwgImNvbnNvbGUiLCAidG9hc3RpZnkiLCAiY2xvc2UiLCAiZHVyYXRpb24iLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImNvbXBhcmVXaXRoUmVtb3RlRGlmZklkIiwgIl9yZWYyIiwgIl9yZXNwb25zZSRjb21wYXJlIiwgInJlc3BvbnNlIiwgIndnRGlmZk5ld0lkIiwgIndnRGlmZk9sZElkIiwgImZyb21yZXZpZCIsICJfeDIiLCAicHJvY2Vzc0lkIiwgImlzUmV2aXNpb25QYWdlIiwgInJldmlzaW9uSWQiLCAiaG9vayIsICJhZGQiLCAiZGlmZkxpbmsiLCAiYXR0ciIsICJpc0RpZmZQYWdlIiwgIndnUmV2aXNpb25JZCJdCn0K
