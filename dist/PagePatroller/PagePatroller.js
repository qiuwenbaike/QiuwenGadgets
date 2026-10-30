/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:WhitePhosphorus/js/PagePatroller.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PagePatroller}
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

// dist/PagePatroller/PagePatroller.js
//! src/PagePatroller/options.json
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
var elementId = "footer-info-patroller";
var mountPointSelector = "#footer-info,.page-info";
var storageKey = "ext.gadget.PagePatroller_getPatroller-";
//! src/PagePatroller/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Loading...": (0, import_ext_gadget.localize)({
      en: "Loading...",
      "zh-hans": "正在加载此页面的巡查者……",
      "zh-hant": "正在加載此頁面的巡查者……"
    }),
    "This page has not been patrolled yet": (0, import_ext_gadget.localize)({
      en: "This page has not been patrolled yet.",
      "zh-hans": "此页面尚未被巡查。",
      "zh-hant": "此頁面尚未被巡查。"
    }),
    "This page was patrolled at by": (0, import_ext_gadget.localize)({
      en: "This page was patrolled at $1 by",
      "zh-hans": "此页面巡查于$1，巡查者是",
      "zh-hant": "此頁面巡查於$1，巡查者是"
    }),
    "This page has been patrolled, or has been marked as auto-patrolled": (0, import_ext_gadget.localize)({
      en: "This page has been patrolled, or has been marked as auto-patrolled.",
      "zh-hans": "此页面尚未被巡查，或已自动标为已巡查。",
      "zh-hant": "此頁面尚未被巡查，或已自動標爲已巡查。"
    }),
    "Error occurs when finding patroller": (0, import_ext_gadget.localize)({
      en: "Error occurs when finding patroller.",
      "zh-hans": "查找巡查者时出现错误。",
      "zh-hant": "查找巡查者時出現錯誤。"
    }),
    period: (0, import_ext_gadget.localize)({
      en: ".",
      zh: "。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/PagePatroller/modules/util/getFooterNotices.ts
var notPatrolledYet = () => {
  const span = document.createElement("span");
  span.id = "page_patroller__not-patrolled";
  span.textContent = getMessage("This page has not been patrolled yet");
  return span;
};
var patrolledBy = (props) => {
  if (props && props.user && props.timestamp) {
    const {
      timestamp,
      user
    } = props;
    const span2 = document.createElement("span");
    span2.id = "page_patroller__patrolled-by";
    const userLink = document.createElement("a");
    userLink.textContent = user;
    userLink.href = mw.util.getUrl("User:".concat(user));
    span2.append(getMessage("This page was patrolled at by").replace("$1", timestamp), userLink, getMessage("period"));
    return span2;
  }
  const span = document.createElement("span");
  span.id = "page_patroller__patrolled";
  span.textContent = getMessage("This page has been patrolled, or has been marked as auto-patrolled");
  return span;
};
var errorMessage = () => {
  const span = document.createElement("span");
  span.id = "page_patroller__error";
  span.textContent = getMessage("Error occurs when finding patroller");
  return span;
};
//! src/PagePatroller/modules/util/createFooterRoot.ts
var createFooterRoot = (mountPoint) => {
  const {
    skin
  } = mw.config.get();
  const isCitizen = skin === "citizen";
  const isListItem = ["gongbi", "vector", "vector-2022"].includes(skin) || document.querySelector("ul#footer-info");
  const root = document.createElement(isCitizen ? "section" : isListItem ? "li" : "div");
  root.id = elementId;
  root.classList.add("gadget-page_patroller", "noprint");
  if (isCitizen) {
    root.classList.add("page-info__item", "citizen-footer__pageinfo-item");
  }
  mountPoint.prepend(root);
  return root;
};
//! src/PagePatroller/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("PagePatroller/2.0");
//! src/PagePatroller/modules/util/getPatroller.ts
var getPatroller = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (wgPageName) {
    let action;
    let user;
    let timestamp;
    if (mw.storage.getObject(storageKey + wgPageName)) {
      ({
        action,
        user,
        timestamp
      } = mw.storage.getObject(storageKey + wgPageName));
    } else {
      try {
        const params = {
          action: "query",
          format: "json",
          formatversion: "2",
          prop: "revisions",
          titles: wgPageName,
          list: "logevents",
          letype: "patrol",
          letitle: wgPageName,
          rvprop: "timestamp",
          rvlimit: 1,
          rvdir: "newer",
          smaxage: 600,
          maxage: 600
        };
        const {
          query
        } = yield api.get(params);
        if (query !== null && query !== void 0 && query.logevents && query.logevents.length) {
          const [log] = query.logevents;
          ({
            action
          } = log);
          if (action === "patrol") {
            ({
              user,
              timestamp
            } = log);
            mw.storage.setObject(storageKey + wgPageName, {
              action,
              user,
              timestamp
            }, 60 * 60 * 24 * 30);
          }
        }
      } catch (error) {
        console.error("[PagePatroller] Ajax error in `getPatroller` method:", error);
      }
    }
    return {
      action,
      user,
      timestamp
    };
  });
  return function getPatroller2(_x) {
    return _ref.apply(this, arguments);
  };
})();
//! src/PagePatroller/modules/showPagePatroller.ts
var showPagePatroller = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* () {
    const mountPoint = document.querySelector(mountPointSelector);
    if (!mountPoint) {
      return;
    }
    const footer = createFooterRoot(mountPoint);
    if (document.querySelector(".patrollink")) {
      footer.append(notPatrolledYet());
      return;
    }
    const {
      wgPageName
    } = mw.config.get();
    try {
      const log = yield getPatroller(wgPageName);
      const {
        action,
        user
      } = log;
      let {
        timestamp
      } = log;
      if (action && action === "patrol" && user && timestamp) {
        timestamp = new Date(timestamp).toLocaleString();
        footer.append(patrolledBy({
          timestamp,
          user
        }));
      } else {
        footer.append(patrolledBy());
      }
    } catch (error) {
      console.error("[PagePatroller] Ajax error:", error);
      footer.append(errorMessage());
    }
  });
  return function showPagePatroller2() {
    return _ref2.apply(this, arguments);
  };
})();
//! src/PagePatroller/PagePatroller.ts
var {
  wgNamespaceNumber,
  wgArticleId,
  wgIsMainPage
} = mw.config.get();
(function() {
  if (wgNamespaceNumber < 0) {
    return;
  }
  if (wgIsMainPage) {
    return;
  }
  if (!(wgArticleId > 0)) {
    return;
  }
  void showPagePatroller();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvb3B0aW9ucy5qc29uIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvaTE4bi50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL3V0aWwvZ2V0Rm9vdGVyTm90aWNlcy50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL3V0aWwvY3JlYXRlRm9vdGVyUm9vdC50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL2FwaS50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL3V0aWwvZ2V0UGF0cm9sbGVyLnRzIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvc2hvd1BhZ2VQYXRyb2xsZXIudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvUGFnZVBhdHJvbGxlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImVsZW1lbnRJZFwiOiBcImZvb3Rlci1pbmZvLXBhdHJvbGxlclwiLFxuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwic3RvcmFnZUtleVwiOiBcImV4dC5nYWRnZXQuUGFnZVBhdHJvbGxlcl9nZXRQYXRyb2xsZXItXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdMb2FkaW5nLi4uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWKoOi9veatpOmhtemdoueahOW3oeafpeiAheKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjliqDovInmraTpoIHpnaLnmoTlt6Hmn6XogIXigKbigKYnLFxuXHRcdH0pLFxuXHRcdCdUaGlzIHBhZ2UgaGFzIG5vdCBiZWVuIHBhdHJvbGxlZCB5ZXQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5bCa5pyq6KKr5beh5p+l44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouWwmuacquiiq+W3oeafpeOAgicsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0IGJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2Ugd2FzIHBhdHJvbGxlZCBhdCAkMSBieScsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlt6Hmn6Xkuo4kMe+8jOW3oeafpeiAheaYrycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLlt6Hmn6XmlrwkMe+8jOW3oeafpeiAheaYrycsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlsJrmnKrooqvlt6Hmn6XvvIzmiJblt7Loh6rliqjmoIfkuLrlt7Llt6Hmn6XjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5bCa5pyq6KKr5beh5p+l77yM5oiW5bey6Ieq5YuV5qiZ54iy5bey5beh5p+l44CCJyxcblx0XHR9KSxcblx0XHQnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vycm9yIG9jY3VycyB3aGVuIGZpbmRpbmcgcGF0cm9sbGVyLicsXG5cdFx0XHQnemgtaGFucyc6ICfmn6Xmib7lt6Hmn6XogIXml7blh7rnjrDplJnor6/jgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5p+l5om+5beh5p+l6ICF5pmC5Ye654++6Yyv6Kqk44CCJyxcblx0XHR9KSxcblx0XHRwZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBub3RQYXRyb2xsZWRZZXQgPSAoKSA9PiB7XG5cdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdHNwYW4uaWQgPSAncGFnZV9wYXRyb2xsZXJfX25vdC1wYXRyb2xsZWQnO1xuXHRzcGFuLnRleHRDb250ZW50ID0gZ2V0TWVzc2FnZSgnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0Jyk7XG5cdHJldHVybiBzcGFuO1xufTtcblxuaW50ZXJmYWNlIFBhdHJvbGxlZFByb3BzIHtcblx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdHVzZXI6IHN0cmluZztcbn1cblxuY29uc3QgcGF0cm9sbGVkQnkgPSAocHJvcHM/OiBQYXRyb2xsZWRQcm9wcykgPT4ge1xuXHRpZiAocHJvcHMgJiYgcHJvcHMudXNlciAmJiBwcm9wcy50aW1lc3RhbXApIHtcblx0XHRjb25zdCB7dGltZXN0YW1wLCB1c2VyfSA9IHByb3BzO1xuXHRcdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0c3Bhbi5pZCA9ICdwYWdlX3BhdHJvbGxlcl9fcGF0cm9sbGVkLWJ5JztcblxuXHRcdGNvbnN0IHVzZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdHVzZXJMaW5rLnRleHRDb250ZW50ID0gdXNlcjtcblx0XHR1c2VyTGluay5ocmVmID0gbXcudXRpbC5nZXRVcmwoYFVzZXI6JHt1c2VyfWApO1xuXG5cdFx0c3Bhbi5hcHBlbmQoXG5cdFx0XHRnZXRNZXNzYWdlKCdUaGlzIHBhZ2Ugd2FzIHBhdHJvbGxlZCBhdCBieScpLnJlcGxhY2UoJyQxJywgdGltZXN0YW1wKSxcblx0XHRcdHVzZXJMaW5rLFxuXHRcdFx0Z2V0TWVzc2FnZSgncGVyaW9kJylcblx0XHQpO1xuXHRcdHJldHVybiBzcGFuO1xuXHR9XG5cblx0Y29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0c3Bhbi5pZCA9ICdwYWdlX3BhdHJvbGxlcl9fcGF0cm9sbGVkJztcblx0c3Bhbi50ZXh0Q29udGVudCA9IGdldE1lc3NhZ2UoJ1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZCcpO1xuXHRyZXR1cm4gc3Bhbjtcbn07XG5cbmNvbnN0IGVycm9yTWVzc2FnZSA9ICgpID0+IHtcblx0Y29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0c3Bhbi5pZCA9ICdwYWdlX3BhdHJvbGxlcl9fZXJyb3InO1xuXHRzcGFuLnRleHRDb250ZW50ID0gZ2V0TWVzc2FnZSgnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXInKTtcblx0cmV0dXJuIHNwYW47XG59O1xuXG5leHBvcnQge25vdFBhdHJvbGxlZFlldCwgcGF0cm9sbGVkQnksIGVycm9yTWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuXG5jb25zdCBjcmVhdGVGb290ZXJSb290ID0gKG1vdW50UG9pbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlzQ2l0aXplbiA9IHNraW4gPT09ICdjaXRpemVuJztcblx0Y29uc3QgaXNMaXN0SXRlbSA9IFsnZ29uZ2JpJywgJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMiddLmluY2x1ZGVzKHNraW4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJyk7XG5cdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGlzQ2l0aXplbiA/ICdzZWN0aW9uJyA6IGlzTGlzdEl0ZW0gPyAnbGknIDogJ2RpdicpO1xuXG5cdHJvb3QuaWQgPSBPUFRJT05TLmVsZW1lbnRJZDtcblx0cm9vdC5jbGFzc0xpc3QuYWRkKCdnYWRnZXQtcGFnZV9wYXRyb2xsZXInLCAnbm9wcmludCcpO1xuXHRpZiAoaXNDaXRpemVuKSB7XG5cdFx0cm9vdC5jbGFzc0xpc3QuYWRkKCdwYWdlLWluZm9fX2l0ZW0nLCAnY2l0aXplbi1mb290ZXJfX3BhZ2VpbmZvLWl0ZW0nKTtcblx0fVxuXHRtb3VudFBvaW50LnByZXBlbmQocm9vdCk7XG5cdHJldHVybiByb290O1xufTtcblxuZXhwb3J0IHtjcmVhdGVGb290ZXJSb290fTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1BhZ2VQYXRyb2xsZXIvMi4wJyk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcblxuY29uc3QgZ2V0UGF0cm9sbGVyID0gYXN5bmMgKHdnUGFnZU5hbWU6IHN0cmluZykgPT4ge1xuXHRsZXQgYWN0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGxldCB1c2VyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGxldCB0aW1lc3RhbXA6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgd2dQYWdlTmFtZSkpIHtcblx0XHQoe2FjdGlvbiwgdXNlciwgdGltZXN0YW1wfSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHdnUGFnZU5hbWUpIGFzIHtcblx0XHRcdGFjdGlvbjogc3RyaW5nO1xuXHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgJiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0dGl0bGVzOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHRcdFx0bGV0eXBlOiAncGF0cm9sJyxcblx0XHRcdFx0bGV0aXRsZTogd2dQYWdlTmFtZSxcblx0XHRcdFx0cnZwcm9wOiAndGltZXN0YW1wJyxcblx0XHRcdFx0cnZsaW1pdDogMSxcblx0XHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdFx0bWF4YWdlOiA2MDAsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRcdFx0aWYgKHF1ZXJ5Py5sb2dldmVudHMgJiYgcXVlcnkubG9nZXZlbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBbbG9nXTogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHRcdFx0YWN0aW9uOiBzdHJpbmc7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSA9IHF1ZXJ5LmxvZ2V2ZW50cyBhcyBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0XHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0XHRcdFx0XHRhY3Rpb246IHN0cmluZztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdO1xuXHRcdFx0XHQoe2FjdGlvbn0gPSBsb2cpO1xuXG5cdFx0XHRcdGlmIChhY3Rpb24gPT09ICdwYXRyb2wnKSB7XG5cdFx0XHRcdFx0KHt1c2VyLCB0aW1lc3RhbXB9ID0gbG9nKTtcblxuXHRcdFx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHdnUGFnZU5hbWUsIHthY3Rpb24sIHVzZXIsIHRpbWVzdGFtcH0sIDYwICogNjAgKiAyNCAqIDMwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdbUGFnZVBhdHJvbGxlcl0gQWpheCBlcnJvciBpbiBgZ2V0UGF0cm9sbGVyYCBtZXRob2Q6JywgZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7YWN0aW9uLCB1c2VyLCB0aW1lc3RhbXB9O1xufTtcblxuZXhwb3J0IHtnZXRQYXRyb2xsZXJ9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7ZXJyb3JNZXNzYWdlLCBub3RQYXRyb2xsZWRZZXQsIHBhdHJvbGxlZEJ5fSBmcm9tICcuL3V0aWwvZ2V0Rm9vdGVyTm90aWNlcy50cyc7XG5pbXBvcnQge2NyZWF0ZUZvb3RlclJvb3R9IGZyb20gJy4vdXRpbC9jcmVhdGVGb290ZXJSb290LnRzJztcbmltcG9ydCB7Z2V0UGF0cm9sbGVyfSBmcm9tICcuL3V0aWwvZ2V0UGF0cm9sbGVyLnRzJztcblxuY29uc3Qgc2hvd1BhZ2VQYXRyb2xsZXIgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IG1vdW50UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3Rvcik7XG5cdGlmICghbW91bnRQb2ludCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlclJvb3QobW91bnRQb2ludCk7XG5cblx0Ly8gaWYgdGhlcmUgaXMgYSBwYXRyb2wgbGluaywgdGhlIHBhZ2UgbXVzdCBiZSBub3QgcGF0cm9sbGVkXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF0cm9sbGluaycpKSB7XG5cdFx0Zm9vdGVyLmFwcGVuZChub3RQYXRyb2xsZWRZZXQoKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gTG9hZCBwYXRyb2xsZXIgaW5mb3JtYXRpb25cblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgbG9nID0gYXdhaXQgZ2V0UGF0cm9sbGVyKHdnUGFnZU5hbWUpO1xuXHRcdGNvbnN0IHthY3Rpb24sIHVzZXJ9ID0gbG9nO1xuXHRcdGxldCB7dGltZXN0YW1wfSA9IGxvZztcblxuXHRcdGlmIChhY3Rpb24gJiYgYWN0aW9uID09PSAncGF0cm9sJyAmJiB1c2VyICYmIHRpbWVzdGFtcCkge1xuXHRcdFx0dGltZXN0YW1wID0gbmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZygpO1xuXHRcdFx0Zm9vdGVyLmFwcGVuZChwYXRyb2xsZWRCeSh7dGltZXN0YW1wLCB1c2VyfSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb290ZXIuYXBwZW5kKHBhdHJvbGxlZEJ5KCkpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHQvLyByZXR1cm4gZXJyb3Iocylcblx0XHRjb25zb2xlLmVycm9yKCdbUGFnZVBhdHJvbGxlcl0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0Zm9vdGVyLmFwcGVuZChlcnJvck1lc3NhZ2UoKSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7c2hvd1BhZ2VQYXRyb2xsZXJ9O1xuIiwgImltcG9ydCB7c2hvd1BhZ2VQYXRyb2xsZXJ9IGZyb20gJy4vbW9kdWxlcy9zaG93UGFnZVBhdHJvbGxlcic7XG5cbmNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dBcnRpY2xlSWQsIHdnSXNNYWluUGFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbihmdW5jdGlvbiAoKSB7XG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAod2dJc01haW5QYWdlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCEod2dBcnRpY2xlSWQgPiAwKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgc2hvd1BhZ2VQYXRyb2xsZXIoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7QUFDYixJQUFBQyxxQkFBc0I7QUFDdEIsSUFBQUMsYUFBYzs7QUNIZixJQUFBQyxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixlQUFBLEdBQWNGLGtCQUFBRyxVQUFTO01BQ3RCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QseUNBQUEsR0FBd0NKLGtCQUFBRyxVQUFTO01BQ2hEQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsa0NBQUEsR0FBaUNKLGtCQUFBRyxVQUFTO01BQ3pDQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsdUVB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LFlBQU1tQyxNQUFBLE1BQVl2QixhQUFhRyxVQUFVO0FBQ3pDLFlBQU07UUFBQ0M7UUFBUWhDO01BQUksSUFBSW1EO0FBQ3ZCLFVBQUk7UUFBQ2xEO01BQVMsSUFBSWtEO0FBRWxCLFVBQUluQixVQUFVQSxXQUFXLFlBQVloQyxRQUFRQyxXQUFXO0FBQ3ZEQSxvQkFBWSxJQUFJNEQsS0FBSzVELFNBQVMsRUFBRTZELGVBQWU7QUFDL0NGLGVBQU9uRCxPQUFPWCxZQUFZO1VBQUNHO1VBQVdEO1FBQUksQ0FBQyxDQUFDO01BQzdDLE9BQU87QUFDTjRELGVBQU9uRCxPQUFPWCxZQUFZLENBQUM7TUFDNUI7SUFDRCxTQUFTdUQsT0FBZ0I7QUFFeEJDLGNBQVFELE1BQU0sK0JBQStCQSxLQUFLO0FBQ2xETyxhQUFPbkQsT0FBT0UsYUFBYSxDQUFDO0lBQzdCO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FqQ00rQyxxQkFBQTtBQUFBLFdBQUFDLE1BQUFILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsR0FBQTs7QUNITixJQUFNO0VBQUNNO0VBQW1CQztFQUFhQztBQUFZLElBQUk1RCxHQUFHVSxPQUFPQyxJQUFJO0NBRXBFLFdBQVk7QUFDWixNQUFJK0Msb0JBQW9CLEdBQUc7QUFDMUI7RUFDRDtBQUVBLE1BQUlFLGNBQWM7QUFDakI7RUFDRDtBQUVBLE1BQUksRUFBRUQsY0FBYyxJQUFJO0FBQ3ZCO0VBQ0Q7QUFFQSxPQUFLTixrQkFBa0I7QUFDeEIsR0FBRzsiLAogICJuYW1lcyI6IFsiZWxlbWVudElkIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJzdG9yYWdlS2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgInBlcmlvZCIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibm90UGF0cm9sbGVkWWV0IiwgInNwYW4iLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJ0ZXh0Q29udGVudCIsICJwYXRyb2xsZWRCeSIsICJwcm9wcyIsICJ1c2VyIiwgInRpbWVzdGFtcCIsICJzcGFuMiIsICJ1c2VyTGluayIsICJocmVmIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgImNvbmNhdCIsICJhcHBlbmQiLCAicmVwbGFjZSIsICJlcnJvck1lc3NhZ2UiLCAiY3JlYXRlRm9vdGVyUm9vdCIsICJtb3VudFBvaW50IiwgInNraW4iLCAiY29uZmlnIiwgImdldCIsICJpc0NpdGl6ZW4iLCAiaXNMaXN0SXRlbSIsICJpbmNsdWRlcyIsICJxdWVyeVNlbGVjdG9yIiwgInJvb3QiLCAiY2xhc3NMaXN0IiwgImFkZCIsICJwcmVwZW5kIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImdldFBhdHJvbGxlciIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIndnUGFnZU5hbWUiLCAiYWN0aW9uIiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgInBhcmFtcyIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlcyIsICJsaXN0IiwgImxldHlwZSIsICJsZXRpdGxlIiwgInJ2cHJvcCIsICJydmxpbWl0IiwgInJ2ZGlyIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInF1ZXJ5IiwgImxvZ2V2ZW50cyIsICJsZW5ndGgiLCAibG9nIiwgInNldE9iamVjdCIsICJlcnJvciIsICJjb25zb2xlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJzaG93UGFnZVBhdHJvbGxlciIsICJfcmVmMiIsICJmb290ZXIiLCAiRGF0ZSIsICJ0b0xvY2FsZVN0cmluZyIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z0FydGljbGVJZCIsICJ3Z0lzTWFpblBhZ2UiXQp9Cg==
