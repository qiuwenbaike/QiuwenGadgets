/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-whoisactive.js}
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-whoisactive.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/WhoIsActive}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: MIT
 *
 * - The "userContributions" icon from @wikimedia/codex-icons
 *
 * @license MIT
 */

/**
 * Copyright 2011-2022 Codex Team and other contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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

// dist/WhoIsActive/WhoIsActive.js
//! src/WhoIsActive/options.json
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
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
var elementId = "gadget-whoisactive";
var mountPointSelector = "#footer-info,.page-info";
var storageKey = "ext.gadget.WhoIsActive_whoIsActive-";
var userNameSpaceNumber = 2;
var version = "3.0";
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
//! src/WhoIsActive/modules/constant.ts
var CLASS_NAME = "gadget-whoisactive";
var TONE_MAP = {
  OverAYear: "error",
  ThisMonth: "info",
  ThisSeason: "purple",
  ThisSemiyear: "orange",
  ThisWeek: "success",
  ThisYear: "warning"
};
//! src/WhoIsActive/modules/icons.ts
var USER_CONTRIBUTIONS_ICON = '<path d="M1 3h18v2H1zm0 6h10v2H1zm0 6h8v2H1zm10 2v-1a3 3 0 013-3h2a3 3 0 013 3v1z"/><circle cx="15" cy="10" r="2"/>';
var import_vue2 = require("vue");
//! src/WhoIsActive/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    OverAYear: (0, import_ext_gadget.localize)({
      en: "Edited over a year ago",
      "zh-hans": "一年未有编辑",
      "zh-hant": "一年未有編輯"
    }),
    ThisWeek: (0, import_ext_gadget.localize)({
      en: "Edited this week",
      "zh-hans": "一周内有编辑",
      "zh-hant": "一周內有編輯"
    }),
    ThisMonth: (0, import_ext_gadget.localize)({
      en: "Edited this month",
      "zh-hans": "一月内有编辑",
      "zh-hant": "一月內有編輯"
    }),
    ThisSeason: (0, import_ext_gadget.localize)({
      en: "Edited in 3 months",
      "zh-hans": "三月内有编辑",
      "zh-hant": "三月內有編輯"
    }),
    ThisSemiyear: (0, import_ext_gadget.localize)({
      en: "Edited in half a year",
      "zh-hans": "半年内有编辑",
      "zh-hant": "半年內有編輯"
    }),
    ThisYear: (0, import_ext_gadget.localize)({
      en: "Edited this year",
      "zh-hans": "一年内有编辑",
      "zh-hant": "一年內有編輯"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var CLASS_NAME2 = "gadget-whoisactive";
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "App",
  props: {
    timeSpan: {
      type: String,
      required: true
    },
    indicator: {
      type: Boolean,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const toneClassName = (0, import_vue2.computed)(() => {
      return "".concat(CLASS_NAME2, "__badge--").concat(TONE_MAP[props.timeSpan]);
    });
    const text = (0, import_vue2.computed)(() => {
      return getMessage(props.timeSpan);
    });
    const __returned__ = {
      CLASS_NAME: CLASS_NAME2,
      props,
      toneClassName,
      text,
      get CdxIcon() {
        return import_codex.CdxIcon;
      },
      get USER_CONTRIBUTIONS_ICON() {
        return USER_CONTRIBUTIONS_ICON;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue3 = require("vue");
var _hoisted_1 = ["title"];
var _hoisted_2 = {
  class: "gadget-whoisactive__text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("span", {
    class: (0, import_vue3.normalizeClass)(["gadget-whoisactive__badge", [$setup.toneClassName, {
      "gadget-whoisactive__badge--compact": $props.indicator
    }]]),
    title: $setup.text
  }, [(0, import_vue3.createVNode)($setup["CdxIcon"], {
    class: "gadget-whoisactive__icon",
    icon: $setup.USER_CONTRIBUTIONS_ICON,
    size: "small"
  }, null, 8, ["icon"]), (0, import_vue3.createElementVNode)(
    "span",
    _hoisted_2,
    (0, import_vue3.toDisplayString)($setup.text),
    1
    /* TEXT */
  )], 10, _hoisted_1);
}
//! src/WhoIsActive/modules/App.vue
App_default.render = render;
App_default.__file = "src\\WhoIsActive\\modules\\App.vue";
App_default.__scopeId = "data-v-9d775533";
var App_default2 = App_default;
//! src/WhoIsActive/modules/util/appendMarkerToUserLinks.ts
var import_vue4 = require("vue");
//! src/WhoIsActive/modules/util/createLinkRoot.ts
var createLinkRoot = (userLink) => {
  const root = document.createElement("span");
  root.classList.add(CLASS_NAME, "noprint");
  userLink.after(root);
  return root;
};
//! src/WhoIsActive/modules/util/getTimeSpan.ts
var MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1e3;
var getTimeSpan = (timestamp) => {
  const date = Date.parse(timestamp);
  const diff = Math.floor((Date.now() - date) / MILLISECONDS_PER_DAY);
  if (diff > 365) {
    return "OverAYear";
  } else if (diff > 183) {
    return "ThisYear";
  } else if (diff > 92) {
    return "ThisSemiyear";
  } else if (diff > 31) {
    return "ThisSeason";
  } else if (diff > 7) {
    return "ThisMonth";
  }
  return "ThisWeek";
};
//! src/WhoIsActive/modules/util/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("WhoIsActive/".concat(version));
//! src/WhoIsActive/modules/util/getTimestamp.ts
var getUserContribsTimestamp = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (ucuser) {
    let timestamp;
    try {
      const params = {
        action: "query",
        format: "json",
        list: "usercontribs",
        uclimit: 1,
        smaxage: 600,
        maxage: 600,
        ucuser
      };
      const result = yield api.get(params);
      const {
        usercontribs
      } = result["query"];
      if (usercontribs.length) {
        ({
          timestamp
        } = usercontribs[0]);
      }
    } catch (error) {
      console.error("[WhoIsActive] Ajax error:", error);
    }
    return timestamp;
  });
  return function getUserContribsTimestamp2(_x) {
    return _ref.apply(this, arguments);
  };
})();
var getLogEventsTimestamp = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (leuser) {
    let timestamp;
    try {
      const params = {
        leuser,
        action: "query",
        format: "json",
        formatversion: "2",
        list: "logevents",
        lelimit: 1,
        leprop: "timestamp",
        smaxage: 600,
        maxage: 600
      };
      const result = yield api.get(params);
      const {
        logevents
      } = result["query"];
      if (logevents.length) {
        ({
          timestamp
        } = logevents[0]);
      }
    } catch (error) {
      console.error("[WhoIsActive] Ajax error:", error);
    }
    return timestamp;
  });
  return function getLogEventsTimestamp2(_x2) {
    return _ref2.apply(this, arguments);
  };
})();
var getTimestamp = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (username) {
    let timestamp;
    if (mw.storage.getObject(storageKey + username)) {
      timestamp = mw.storage.getObject(storageKey + username);
    } else {
      const ucTimestamp = yield getUserContribsTimestamp(username);
      let ucDate;
      if (ucTimestamp) {
        ucDate = new Date(ucTimestamp);
        timestamp = ucTimestamp;
      }
      const leTimestamp = yield getLogEventsTimestamp(username);
      let leDate;
      if (leTimestamp) {
        leDate = new Date(leTimestamp);
        if (!ucDate || leDate > ucDate) {
          timestamp = leTimestamp;
        }
      }
    }
    if (timestamp) {
      mw.storage.setObject(storageKey + username, timestamp, 30 * 60);
    }
    return timestamp;
  });
  return function getTimestamp2(_x3) {
    return _ref3.apply(this, arguments);
  };
})();
//! src/WhoIsActive/modules/util/appendMarkerToUserLinks.ts
var appendMarkerToUserLinks = /* @__PURE__ */ (function() {
  var _ref4 = _asyncToGenerator(function* ({
    userName,
    elements
  }) {
    if (SYSTEM_SCRIPT_LIST.includes(userName)) {
      return;
    }
    const timestamp = yield getTimestamp(userName);
    if (!timestamp) {
      return;
    }
    const timeSpan = getTimeSpan(timestamp);
    var _iterator = _createForOfIteratorHelper(elements), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const element = _step.value;
        (0, import_vue4.createApp)(App_default2, {
          timeSpan,
          indicator: true
        }).mount(createLinkRoot(element));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  return function appendMarkerToUserLinks2(_x4) {
    return _ref4.apply(this, arguments);
  };
})();
//! src/WhoIsActive/modules/util/appendMarkerToUserPage.ts
var import_vue5 = require("vue");
//! src/WhoIsActive/modules/util/createFooterRoot.ts
var createFooterRoot = (mountPoint) => {
  const {
    skin
  } = mw.config.get();
  const isCitizen = skin === "citizen";
  const isListItem = ["gongbi", "vector", "vector-2022"].includes(skin) || Boolean(document.querySelector("ul#footer-info"));
  const root = document.createElement(isCitizen ? "section" : isListItem ? "li" : "div");
  root.id = elementId;
  root.classList.add(CLASS_NAME, "noprint");
  if (isCitizen) {
    root.classList.add("page-info__item", "citizen-footer__pageinfo-item");
  }
  mountPoint.prepend(root);
  return root;
};
//! src/WhoIsActive/modules/util/appendMarkerToUserPage.ts
var appendMarkerToUserPage = /* @__PURE__ */ (function() {
  var _ref5 = _asyncToGenerator(function* (userName) {
    if (SYSTEM_SCRIPT_LIST.includes(userName)) {
      return;
    }
    const timestamp = yield getTimestamp(userName);
    if (!timestamp) {
      return;
    }
    const mountPoint = document.querySelector(mountPointSelector);
    if (!mountPoint) {
      return;
    }
    const timeSpan = getTimeSpan(timestamp);
    (0, import_vue5.createApp)(App_default2, {
      timeSpan,
      indicator: false
    }).mount(createFooterRoot(mountPoint));
  });
  return function appendMarkerToUserPage2(_x5) {
    return _ref5.apply(this, arguments);
  };
})();
//! src/WhoIsActive/modules/util/getUserLinks.ts
var getUserLinks = (content) => {
  const userLinks = {};
  const {
    wgFormattedNamespaces
  } = mw.config.get();
  const {
    2: localizedUserNamespace,
    3: localizedUserTalkNamespace
  } = wgFormattedNamespaces;
  const selector = ['a[title^="User:"]:not(.mw-changeslist-date):not([href*="undo"])', 'a[title^="'.concat(localizedUserNamespace, ':"]:not(.mw-changeslist-date):not([href*="undo"])')].join(",");
  const userRegex = new RegExp("((User|User[_ ]talk)|(".concat(localizedUserNamespace, "|").concat(localizedUserTalkNamespace, ")):(.*?)(?=&|$)"));
  const namespaceRegex = new RegExp("^((User|User[_ ]talk)|(".concat(localizedUserNamespace, "|").concat(localizedUserTalkNamespace, ")):"), "i");
  var _iterator2 = _createForOfIteratorHelper(content.querySelectorAll(selector)), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var _element$getAttribute, _userLinks$userName;
      const element = _step2.value;
      const href = decodeURI((_element$getAttribute = element.getAttribute("href")) !== null && _element$getAttribute !== void 0 ? _element$getAttribute : "");
      const userNameMatchArray = href.match(userRegex);
      if (!userNameMatchArray) {
        continue;
      }
      let [userName] = userNameMatchArray;
      userName = userName.replace(namespaceRegex, "").replace(/#.*$/i, "");
      if (userName.includes("/")) {
        continue;
      }
      const elements = (_userLinks$userName = userLinks[userName]) !== null && _userLinks$userName !== void 0 ? _userLinks$userName : [];
      elements[elements.length] = element;
      userLinks[userName] = elements;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return userLinks;
};
//! src/WhoIsActive/modules/core.ts
var whoIsActiveUserLinks = ($content) => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName === "Recentchanges") {
    return;
  }
  const content = $content[0];
  if (!content) {
    return;
  }
  const userLinks = getUserLinks(content);
  for (var _i = 0, _Object$entries = Object.entries(userLinks); _i < _Object$entries.length; _i++) {
    const [userName, elements] = _Object$entries[_i];
    void appendMarkerToUserLinks({
      userName,
      elements
    });
  }
};
var whoIsActiveUserPage = () => {
  const {
    wgAction,
    wgNamespaceNumber,
    wgPageName,
    wgRelevantUserName
  } = mw.config.get();
  if (!wgRelevantUserName || wgNamespaceNumber !== userNameSpaceNumber || wgAction !== "view") {
    return;
  }
  const relevantUserPageName = new mw.Title(wgRelevantUserName, userNameSpaceNumber).toText();
  const pageName = new mw.Title(wgPageName).toText();
  if (relevantUserPageName !== pageName) {
    return;
  }
  void appendMarkerToUserPage(wgRelevantUserName);
};
//! src/WhoIsActive/WhoIsActive.ts
(function whoIsActiveLoad() {
  mw.hook("wikipage.content").add(whoIsActiveUserLinks);
  void whoIsActiveUserPage();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dob0lzQWN0aXZlL29wdGlvbnMuanNvbiIsICJkaXN0L1dob0lzQWN0aXZlL3NyYy9XaG9Jc0FjdGl2ZS9tb2R1bGVzL0FwcC52dWUiLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvaWNvbnMudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvaTE4bi50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcV2hvSXNBY3RpdmVcXG1vZHVsZXNcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvV2hvSXNBY3RpdmUvbW9kdWxlcy9BcHAudnVlIiwgInNyYy9XaG9Jc0FjdGl2ZS9tb2R1bGVzL3V0aWwvYXBwZW5kTWFya2VyVG9Vc2VyTGlua3MudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9jcmVhdGVMaW5rUm9vdC50cyIsICJzcmMvV2hvSXNBY3RpdmUvbW9kdWxlcy91dGlsL2dldFRpbWVTcGFuLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9tb2R1bGVzL3V0aWwvZ2V0VGltZXN0YW1wLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9tb2R1bGVzL3V0aWwvYXBwZW5kTWFya2VyVG9Vc2VyUGFnZS50cyIsICJzcmMvV2hvSXNBY3RpdmUvbW9kdWxlcy91dGlsL2NyZWF0ZUZvb3RlclJvb3QudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9nZXRVc2VyTGlua3MudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvY29yZS50cyIsICJzcmMvV2hvSXNBY3RpdmUvV2hvSXNBY3RpdmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJlbGVtZW50SWRcIjogXCJnYWRnZXQtd2hvaXNhY3RpdmVcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInN0b3JhZ2VLZXlcIjogXCJleHQuZ2FkZ2V0Lldob0lzQWN0aXZlX3dob0lzQWN0aXZlLVwiLFxuXHRcInVzZXJOYW1lU3BhY2VOdW1iZXJcIjogMixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhJY29ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7VE9ORV9NQVB9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHR5cGUge1RpbWVTcGFufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7VVNFUl9DT05UUklCVVRJT05TX0lDT059IGZyb20gJy4vaWNvbnMnO1xuaW1wb3J0IHtjb21wdXRlZH0gZnJvbSAndnVlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuaW50ZXJmYWNlIEFwcFByb3BzIHtcblx0LyoqIFRoZSBwZXJpb2Qgc2luY2UgdGhlIHVzZXIncyBsYXN0IGFjdGl2aXR5LiAqL1xuXHR0aW1lU3BhbjogVGltZVNwYW47XG5cdC8qKiBXaGV0aGVyIG9ubHkgdGhlIGljb24gaXMgdmlzaWJsZSwgd2l0aCB0aGUgdGV4dCBoaWRkZW4gZnJvbSB2aWV3LiAqL1xuXHRpbmRpY2F0b3I6IGJvb2xlYW47XG59XG5cbmNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtd2hvaXNhY3RpdmUnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPEFwcFByb3BzPigpO1xuXG5jb25zdCB0b25lQ2xhc3NOYW1lID0gY29tcHV0ZWQoKCk6IHN0cmluZyA9PiB7XG5cdHJldHVybiBgJHtDTEFTU19OQU1FfV9fYmFkZ2UtLSR7VE9ORV9NQVBbcHJvcHMudGltZVNwYW5dfWA7XG59KTtcblxuY29uc3QgdGV4dCA9IGNvbXB1dGVkKCgpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gZ2V0TWVzc2FnZShwcm9wcy50aW1lU3Bhbik7XG59KTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxzcGFuXG5cdFx0Y2xhc3M9XCJnYWRnZXQtd2hvaXNhY3RpdmVfX2JhZGdlXCJcblx0XHQ6Y2xhc3M9XCJbdG9uZUNsYXNzTmFtZSwgeydnYWRnZXQtd2hvaXNhY3RpdmVfX2JhZGdlLS1jb21wYWN0JzogaW5kaWNhdG9yfV1cIlxuXHRcdDp0aXRsZT1cInRleHRcIlxuXHQ+XG5cdFx0PGNkeC1pY29uIGNsYXNzPVwiZ2FkZ2V0LXdob2lzYWN0aXZlX19pY29uXCIgOmljb249XCJVU0VSX0NPTlRSSUJVVElPTlNfSUNPTlwiIHNpemU9XCJzbWFsbFwiIC8+XG5cdFx0PHNwYW4gY2xhc3M9XCJnYWRnZXQtd2hvaXNhY3RpdmVfX3RleHRcIj57eyB0ZXh0IH19PC9zcGFuPlxuXHQ8L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cbi5nYWRnZXQtd2hvaXNhY3RpdmVfX2JhZGdlIHtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMC4yNWVtO1xuXHRtYXJnaW46IDAgMC4yNWVtICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmc6IDAgMC41ZW0gIWltcG9ydGFudDtcblx0Ym9yZGVyOiAxcHggc29saWQgQGNvbnN0LWNvbG9yLWdyYXk7XG5cdGZvbnQtc2l6ZTogMC45ZW07XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLS1zbWFsbDtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cblx0Lm13LWZvb3RlciAmIHtcblx0XHRtYXJnaW4tYm90dG9tOiAwLjI1ZW07XG5cdH1cblxuXHQvKiBFZGl0ZWQgdGhpcyB3ZWVrOiBncmVlbiAqL1xuXHQmLS1zdWNjZXNzIHtcblx0XHRib3JkZXItY29sb3I6IEBjb2xvci0tc3VjY2Vzcztcblx0XHRjb2xvcjogQGNvbG9yLS1zdWNjZXNzO1xuXHR9XG5cblx0LyogRWRpdGVkIHRoaXMgbW9udGg6IGJsdWUgKi9cblx0Ji0taW5mbyB7XG5cdFx0Ym9yZGVyLWNvbG9yOiBAY29sb3ItLWluZm87XG5cdFx0Y29sb3I6IEBjb2xvci0taW5mbztcblx0fVxuXG5cdC8qIEVkaXRlZCBpbiAzIG1vbnRoczogcHVycGxlICovXG5cdCYtLXB1cnBsZSB7XG5cdFx0Ym9yZGVyLWNvbG9yOiBAY29sb3ItLXB1cnBsZTtcblx0XHRjb2xvcjogQGNvbG9yLS1wdXJwbGU7XG5cdH1cblxuXHQvKiBFZGl0ZWQgaW4gaGFsZiBhIHllYXI6IG9yYW5nZSAqL1xuXHQmLS1vcmFuZ2Uge1xuXHRcdGJvcmRlci1jb2xvcjogQGNvbG9yLS1vcmFuZ2U7XG5cdFx0Y29sb3I6IEBjb2xvci0tb3JhbmdlO1xuXHR9XG5cblx0LyogRWRpdGVkIHRoaXMgeWVhcjogYnJvd24gKi9cblx0Ji0td2FybmluZyB7XG5cdFx0Ym9yZGVyLWNvbG9yOiBAY29sb3ItLXdhcm5pbmc7XG5cdFx0Y29sb3I6IEBjb2xvci0td2FybmluZztcblx0fVxuXG5cdC8qIEVkaXRlZCBvdmVyIGEgeWVhciBhZ286IHJlZCAqL1xuXHQmLS1lcnJvciB7XG5cdFx0Ym9yZGVyLWNvbG9yOiBAY29sb3ItLWVycm9yO1xuXHRcdGNvbG9yOiBAY29sb3ItLWVycm9yO1xuXHR9XG5cblx0LyogT25seSB0aGUgaWNvbiBpcyB2aXNpYmxlLCB0aGUgdGV4dCBpcyBrZXB0IGZvciBzY3JlZW4gcmVhZGVycyAqL1xuXHQmLS1jb21wYWN0IHtcblx0XHQuZ2FkZ2V0LXdob2lzYWN0aXZlX190ZXh0IHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHdpZHRoOiAxcHg7XG5cdFx0XHRoZWlnaHQ6IDFweDtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRjbGlwLXBhdGg6IGluc2V0KDUwJSk7XG5cdFx0fVxuXHR9XG59XG5cbi5nYWRnZXQtd2hvaXNhY3RpdmVfX2ljb24ge1xuXHR3aWR0aDogMWVtO1xuXHRoZWlnaHQ6IDFlbTtcblx0Y29sb3I6IGluaGVyaXQ7XG5cblx0OmRlZXAoc3ZnKSB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdGZpbGw6IGN1cnJlbnRDb2xvcjtcblx0fVxufVxuPC9zdHlsZT5cbiIsICJjb25zdCBTWVNURU1fU0NSSVBUX0xJU1Q6IHN0cmluZ1tdID0gW1xuXHQn5rul55So6L+H5ruk5ZmoJyxcblx0J+axgumXu+e8luiAhScsXG5cdCfmsYLpl7vnmb7np5HnpL7ljLonLFxuXHQnRXhhbXBsZScsXG5cdCdFeHRlcm5hbCBjb250cmlidXRvcnMnLFxuXHQnTWFpbnRlbmFuY2Ugc2NyaXB0Jyxcblx0J01lZGlhV2lraSBkZWZhdWx0Jyxcblx0J01lZGlhV2lraSBtZXNzYWdlIGRlbGl2ZXJ5Jyxcblx0J05ldyB1c2VyIHBhZ2UnLFxuXTtcbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnUWl1V2VuJywgJ1FpdVdlbiBmb3IgQWNjb3VudHMnLCAnUWl1d2VuU29jaWFsTWVkaWEnXTtcblxuZXhwb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfTtcbiIsICJpbXBvcnQgdHlwZSB7VGltZVNwYW4sIFRpbWVTcGFuVG9uZX0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtd2hvaXNhY3RpdmUnO1xuXG4vKipcbiAqIE1hcHMgdGhlIHBlcmlvZCBzaW5jZSB0aGUgbGFzdCBhY3Rpdml0eSB0byB0aGUgY29sb3Igb2YgaXRzIGluZGljYXRvci5cbiAqXG4gKiBNZW1iZXJzIGFyZSBvcmRlcmVkIGZyb20gdGhlIG1vc3QgcmVjZW50IHRvIHRoZSBsZWFzdCByZWNlbnQsIGFuZCBldmVyeSBtZW1iZXJcbiAqIGlzIGNvbG9yZWQgZnJvbSBncmVlbiB0byByZWQgZm9sbG93aW5nIGhvdyBpbmFjdGl2ZSB0aGUgdXNlciBoYXMgYmVjb21lLlxuICovXG5jb25zdCBUT05FX01BUDogUmVjb3JkPFRpbWVTcGFuLCBUaW1lU3BhblRvbmU+ID0ge1xuXHRPdmVyQVllYXI6ICdlcnJvcicsXG5cdFRoaXNNb250aDogJ2luZm8nLFxuXHRUaGlzU2Vhc29uOiAncHVycGxlJyxcblx0VGhpc1NlbWl5ZWFyOiAnb3JhbmdlJyxcblx0VGhpc1dlZWs6ICdzdWNjZXNzJyxcblx0VGhpc1llYXI6ICd3YXJuaW5nJyxcbn07XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNUfSBmcm9tICd+L0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQnO1xuZXhwb3J0IHtDTEFTU19OQU1FLCBUT05FX01BUH07XG4iLCAiaW1wb3J0IHR5cGUge0FjdGl2ZUljb259IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIFNWRyBtYXJrdXAgaW5saW5lZCBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYCB2Mi43LjAuXG4gKlxuICogTWVkaWFXaWtpIGRvZXMgbm90IHNoaXAgYSBSZXNvdXJjZUxvYWRlciBtb2R1bGUgdGhhdCBidW5kbGVzXG4gKiBgQHdpa2ltZWRpYS9jb2RleC1pY29uc2AgKHNlZSBodHRwczovL3d3dy5tZWRpYXdpa2kub3JnL3dpa2kvQ29kZXgpLFxuICogc28gdGhlIGljb25zIGFyZSBjb3BpZWQgaGVyZSB2ZXJiYXRpbSBhbmQgcmVuZGVyZWQgYXMgaW5saW5lIFNWR1xuICogdG8ga2VlcCB0aGUgZ2FkZ2V0IHNlbGYtY29udGFpbmVkIHdoaWxlIHN0aWxsIHNvdXJjaW5nIHRoZSBpY29uc1xuICogZnJvbSBgQHdpa2ltZWRpYS9jb2RleC1pY29uc2AuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kb2Mud2lraW1lZGlhLm9yZy9jb2RleC9sYXRlc3QvaWNvbnMvfVxuICovXG5cbi8qKlxuICogU1ZHIGZvciBgY2R4SWNvblVzZXJDb250cmlidXRpb25zYC5cbiAqXG4gKiBUaGlzIGljb24gaXMgY29tcG9zZWQgb2YgbW9yZSB0aGFuIG9uZSB0YWcsIGhlbmNlIGl0IGlzIHN0b3JlZCBhcyByYXcgU1ZHXG4gKiBtYXJrdXAgaW5zdGVhZCBvZiBhIGJhcmUgcGF0aC5cbiAqL1xuY29uc3QgVVNFUl9DT05UUklCVVRJT05TX0lDT046IEFjdGl2ZUljb24gPVxuXHQnPHBhdGggZD1cIk0xIDNoMTh2Mkgxem0wIDZoMTB2Mkgxem0wIDZoOHYySDF6bTEwIDJ2LTFhMyAzIDAgMDEzLTNoMmEzIDMgMCAwMTMgM3YxelwiLz48Y2lyY2xlIGN4PVwiMTVcIiBjeT1cIjEwXCIgcj1cIjJcIi8+JztcblxuZXhwb3J0IHtVU0VSX0NPTlRSSUJVVElPTlNfSUNPTn07XG4iLCAiaW1wb3J0IHR5cGUge1RpbWVTcGFufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRPdmVyQVllYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIG92ZXIgYSB5ZWFyIGFnbycsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDlubTmnKrmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA5bm05pyq5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzV2VlazogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgdGhpcyB3ZWVrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOWRqOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDlkajlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNNb250aDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgdGhpcyBtb250aCcsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDmnIjlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA5pyI5YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzU2Vhc29uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCBpbiAzIG1vbnRocycsXG5cdFx0XHQnemgtaGFucyc6ICfkuInmnIjlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiJ5pyI5YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzU2VtaXllYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIGluIGhhbGYgYSB5ZWFyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WNiuW5tOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfljYrlubTlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNZZWFyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCB0aGlzIHllYXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA5bm05YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOW5tOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdH0gc2F0aXNmaWVzIFJlY29yZDxUaW1lU3Bhbiwgc3RyaW5nPiAmIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7IGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0gW1widGl0bGVcIl1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImdhZGdldC13aG9pc2FjdGl2ZV9fdGV4dFwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIHtcbiAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcImdhZGdldC13aG9pc2FjdGl2ZV9fYmFkZ2VcIiwgWyRzZXR1cC50b25lQ2xhc3NOYW1lLCB7J2dhZGdldC13aG9pc2FjdGl2ZV9fYmFkZ2UtLWNvbXBhY3QnOiAkcHJvcHMuaW5kaWNhdG9yfV1dKSxcbiAgICB0aXRsZTogJHNldHVwLnRleHRcbiAgfSwgW1xuICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhJY29uXCJdLCB7XG4gICAgICBjbGFzczogXCJnYWRnZXQtd2hvaXNhY3RpdmVfX2ljb25cIixcbiAgICAgIGljb246ICRzZXR1cC5VU0VSX0NPTlRSSUJVVElPTlNfSUNPTixcbiAgICAgIHNpemU6IFwic21hbGxcIlxuICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImljb25cIl0pLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJzcGFuXCIsIF9ob2lzdGVkXzIsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnRleHQpLCAxIC8qIFRFWFQgKi8pXG4gIF0sIDEwIC8qIENMQVNTLCBQUk9QUyAqLywgX2hvaXN0ZWRfMSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcV2hvSXNBY3RpdmVcXFxcbW9kdWxlc1xcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxXaG9Jc0FjdGl2ZVxcXFxtb2R1bGVzXFxcXEFwcC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcV2hvSXNBY3RpdmVcXFxcbW9kdWxlc1xcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcV2hvSXNBY3RpdmVcXFxcbW9kdWxlc1xcXFxBcHAudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LTlkNzc1NTMzXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgQXBwIGZyb20gJy4uL0FwcC52dWUnO1xuaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1R9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtjcmVhdGVMaW5rUm9vdH0gZnJvbSAnLi9jcmVhdGVMaW5rUm9vdCc7XG5pbXBvcnQge2dldFRpbWVTcGFufSBmcm9tICcuL2dldFRpbWVTcGFuJztcbmltcG9ydCB7Z2V0VGltZXN0YW1wfSBmcm9tICcuL2dldFRpbWVzdGFtcCc7XG5cbi8qKlxuICogQXBwZW5kIHRoZSBsYXN0IGFjdGl2ZSBpbmRpY2F0b3IgdG8gZXZlcnkgbGluayBwb2ludGluZyB0byB0aGUgZ2l2ZW4gdXNlci5cbiAqXG4gKiBAcGFyYW0gdXNlck5hbWUgVGhlIG5hbWUgb2YgdGhlIHVzZXIsIHdpdGhvdXQgdGhlIG5hbWVzcGFjZSBwcmVmaXguXG4gKiBAcGFyYW0gZWxlbWVudHMgRXZlcnkgdXNlciBsaW5rIHBvaW50aW5nIHRvIHRoaXMgdXNlci5cbiAqL1xuY29uc3QgYXBwZW5kTWFya2VyVG9Vc2VyTGlua3MgPSBhc3luYyAoe1xuXHR1c2VyTmFtZSxcblx0ZWxlbWVudHMsXG59OiB7XG5cdHVzZXJOYW1lOiBzdHJpbmc7XG5cdGVsZW1lbnRzOiBIVE1MQW5jaG9yRWxlbWVudFtdO1xufSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHQvLyBSZXBsYWNlIFNldCB3aXRoIGluY2x1ZGVzLCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdGlmIChTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXModXNlck5hbWUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdGltZXN0YW1wID0gYXdhaXQgZ2V0VGltZXN0YW1wKHVzZXJOYW1lKTtcblx0aWYgKCF0aW1lc3RhbXApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0aW1lU3BhbiA9IGdldFRpbWVTcGFuKHRpbWVzdGFtcCk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG5cdFx0Y3JlYXRlQXBwKEFwcCwge3RpbWVTcGFuLCBpbmRpY2F0b3I6IHRydWV9KS5tb3VudChjcmVhdGVMaW5rUm9vdChlbGVtZW50KSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7YXBwZW5kTWFya2VyVG9Vc2VyTGlua3N9O1xuIiwgImltcG9ydCB7Q0xBU1NfTkFNRX0gZnJvbSAnLi4vY29uc3RhbnQnO1xuXG4vKipcbiAqIENyZWF0ZSBhbmQgaW5zZXJ0IHRoZSByb290IGVsZW1lbnQgd2hpY2ggaG9zdHMgdGhlIFZ1ZSBhcHBsaWNhdGlvbi5cbiAqXG4gKiBAcGFyYW0gdXNlckxpbmsgVGhlIHVzZXIgbGluayB0byBhcHBlbmQgdGhlIGluZGljYXRvciB0by5cbiAqIEByZXR1cm5zIFRoZSBjcmVhdGVkIHJvb3QgZWxlbWVudC5cbiAqL1xuY29uc3QgY3JlYXRlTGlua1Jvb3QgPSAodXNlckxpbms6IEhUTUxBbmNob3JFbGVtZW50KTogSFRNTEVsZW1lbnQgPT4ge1xuXHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG5cdHJvb3QuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FLCAnbm9wcmludCcpO1xuXHR1c2VyTGluay5hZnRlcihyb290KTtcblxuXHRyZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCB7Y3JlYXRlTGlua1Jvb3R9O1xuIiwgImltcG9ydCB0eXBlIHtUaW1lU3Bhbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKiogVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSBkYXkuICovXG5jb25zdCBNSUxMSVNFQ09ORFNfUEVSX0RBWTogbnVtYmVyID0gMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgb2YgdGhlIGxhc3QgYWN0aXZpdHkgaW50byBhIGNvYXJzZSB0aW1lIHNwYW4uXG4gKlxuICogQHBhcmFtIHRpbWVzdGFtcCBUaGUgSVNPIDg2MDEgdGltZXN0YW1wIG9mIHRoZSBsYXN0IGFjdGl2aXR5LlxuICogQHJldHVybnMgVGhlIHBlcmlvZCBzaW5jZSB0aGUgbGFzdCBhY3Rpdml0eS5cbiAqL1xuY29uc3QgZ2V0VGltZVNwYW4gPSAodGltZXN0YW1wOiBzdHJpbmcpOiBUaW1lU3BhbiA9PiB7XG5cdGNvbnN0IGRhdGU6IG51bWJlciA9IERhdGUucGFyc2UodGltZXN0YW1wKTtcblx0Y29uc3QgZGlmZjogbnVtYmVyID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIGRhdGUpIC8gTUlMTElTRUNPTkRTX1BFUl9EQVkpO1xuXG5cdGlmIChkaWZmID4gMzY1KSB7XG5cdFx0cmV0dXJuICdPdmVyQVllYXInO1xuXHR9IGVsc2UgaWYgKGRpZmYgPiAxODMpIHtcblx0XHRyZXR1cm4gJ1RoaXNZZWFyJztcblx0fSBlbHNlIGlmIChkaWZmID4gOTIpIHtcblx0XHRyZXR1cm4gJ1RoaXNTZW1peWVhcic7XG5cdH0gZWxzZSBpZiAoZGlmZiA+IDMxKSB7XG5cdFx0cmV0dXJuICdUaGlzU2Vhc29uJztcblx0fSBlbHNlIGlmIChkaWZmID4gNykge1xuXHRcdHJldHVybiAnVGhpc01vbnRoJztcblx0fVxuXG5cdHJldHVybiAnVGhpc1dlZWsnO1xufTtcblxuZXhwb3J0IHtnZXRUaW1lU3Bhbn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBXaG9Jc0FjdGl2ZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7TG9nZXZlbnRzLCBVc2VyY29udHJpYnN9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGdldFVzZXJDb250cmlic1RpbWVzdGFtcCA9IGFzeW5jICh1Y3VzZXI6IHN0cmluZykgPT4ge1xuXHRsZXQgdGltZXN0YW1wOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlckNvbnRyaWJzUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRsaXN0OiAndXNlcmNvbnRyaWJzJyxcblx0XHRcdHVjbGltaXQ6IDEsXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHRcdHVjdXNlcixcblx0XHR9O1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdFx0Y29uc3Qge3VzZXJjb250cmlic30gPSByZXN1bHRbJ3F1ZXJ5J10gYXMgVXNlcmNvbnRyaWJzO1xuXHRcdGlmICh1c2VyY29udHJpYnMubGVuZ3RoKSB7XG5cdFx0XHQoe3RpbWVzdGFtcH0gPSB1c2VyY29udHJpYnNbMF0hKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW1dob0lzQWN0aXZlXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0fVxuXG5cdHJldHVybiB0aW1lc3RhbXA7XG59O1xuXG5jb25zdCBnZXRMb2dFdmVudHNUaW1lc3RhbXAgPSBhc3luYyAobGV1c2VyOiBzdHJpbmcpID0+IHtcblx0bGV0IHRpbWVzdGFtcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRcdGxldXNlcixcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0XHRsZWxpbWl0OiAxLFxuXHRcdFx0bGVwcm9wOiAndGltZXN0YW1wJyxcblx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdG1heGFnZTogNjAwLFxuXHRcdH07XG5cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRjb25zdCB7bG9nZXZlbnRzfSA9IHJlc3VsdFsncXVlcnknXSBhcyBMb2dldmVudHM7XG5cdFx0aWYgKGxvZ2V2ZW50cy5sZW5ndGgpIHtcblx0XHRcdCh7dGltZXN0YW1wfSA9IGxvZ2V2ZW50c1swXSEpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbV2hvSXNBY3RpdmVdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR9XG5cblx0cmV0dXJuIHRpbWVzdGFtcDtcbn07XG5cbmNvbnN0IGdldFRpbWVzdGFtcCA9IGFzeW5jICh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+ID0+IHtcblx0bGV0IHRpbWVzdGFtcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyB1c2VybmFtZSkpIHtcblx0XHR0aW1lc3RhbXAgPSBtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyB1c2VybmFtZSkgYXMgc3RyaW5nO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IHVjVGltZXN0YW1wID0gYXdhaXQgZ2V0VXNlckNvbnRyaWJzVGltZXN0YW1wKHVzZXJuYW1lKTtcblx0XHRsZXQgdWNEYXRlOiBEYXRlIHwgdW5kZWZpbmVkO1xuXG5cdFx0aWYgKHVjVGltZXN0YW1wKSB7XG5cdFx0XHR1Y0RhdGUgPSBuZXcgRGF0ZSh1Y1RpbWVzdGFtcCk7XG5cdFx0XHR0aW1lc3RhbXAgPSB1Y1RpbWVzdGFtcDtcblx0XHR9XG5cblx0XHRjb25zdCBsZVRpbWVzdGFtcCA9IGF3YWl0IGdldExvZ0V2ZW50c1RpbWVzdGFtcCh1c2VybmFtZSk7XG5cdFx0bGV0IGxlRGF0ZTogRGF0ZSB8IHVuZGVmaW5lZDtcblxuXHRcdGlmIChsZVRpbWVzdGFtcCkge1xuXHRcdFx0bGVEYXRlID0gbmV3IERhdGUobGVUaW1lc3RhbXApO1xuXG5cdFx0XHRpZiAoIXVjRGF0ZSB8fCBsZURhdGUgPiB1Y0RhdGUpIHtcblx0XHRcdFx0dGltZXN0YW1wID0gbGVUaW1lc3RhbXA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKHRpbWVzdGFtcCkge1xuXHRcdC8vIENhY2hlIGZvciAzMCBtaW51dGVzXG5cdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgdXNlcm5hbWUsIHRpbWVzdGFtcCwgMzAgKiA2MCk7XG5cdH1cblxuXHRyZXR1cm4gdGltZXN0YW1wO1xufTtcblxuZXhwb3J0IHtnZXRUaW1lc3RhbXB9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVH0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2NyZWF0ZUZvb3RlclJvb3R9IGZyb20gJy4vY3JlYXRlRm9vdGVyUm9vdCc7XG5pbXBvcnQge2dldFRpbWVTcGFufSBmcm9tICcuL2dldFRpbWVTcGFuJztcbmltcG9ydCB7Z2V0VGltZXN0YW1wfSBmcm9tICcuL2dldFRpbWVzdGFtcCc7XG5cbi8qKlxuICogQXBwZW5kIHRoZSBsYXN0IGFjdGl2ZSBpbmRpY2F0b3IgdG8gdGhlIGZvb3RlciBvZiB0aGUgdXNlciBwYWdlLlxuICpcbiAqIEBwYXJhbSB1c2VyTmFtZSBUaGUgbmFtZSBvZiB0aGUgdXNlciBvd25pbmcgdGhlIGN1cnJlbnQgdXNlciBwYWdlLlxuICovXG5jb25zdCBhcHBlbmRNYXJrZXJUb1VzZXJQYWdlID0gYXN5bmMgKHVzZXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0aWYgKFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh1c2VyTmFtZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0aW1lc3RhbXAgPSBhd2FpdCBnZXRUaW1lc3RhbXAodXNlck5hbWUpO1xuXHRpZiAoIXRpbWVzdGFtcCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG1vdW50UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3Rvcik7XG5cdGlmICghbW91bnRQb2ludCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRpbWVTcGFuID0gZ2V0VGltZVNwYW4odGltZXN0YW1wKTtcblx0Y3JlYXRlQXBwKEFwcCwge3RpbWVTcGFuLCBpbmRpY2F0b3I6IGZhbHNlfSkubW91bnQoY3JlYXRlRm9vdGVyUm9vdChtb3VudFBvaW50KSk7XG59O1xuXG5leHBvcnQge2FwcGVuZE1hcmtlclRvVXNlclBhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Q0xBU1NfTkFNRX0gZnJvbSAnLi4vY29uc3RhbnQnO1xuXG4vKipcbiAqIENyZWF0ZSBhbmQgaW5zZXJ0IHRoZSByb290IGVsZW1lbnQgd2hpY2ggaG9zdHMgdGhlIFZ1ZSBhcHBsaWNhdGlvbi5cbiAqXG4gKiBAcGFyYW0gbW91bnRQb2ludCBUaGUgY29udGFpbmVyIG9mIHRoZSBwYWdlIGZvb3RlciBpbmRpY2F0b3JzLlxuICogQHJldHVybnMgVGhlIGNyZWF0ZWQgcm9vdCBlbGVtZW50LlxuICovXG5jb25zdCBjcmVhdGVGb290ZXJSb290ID0gKG1vdW50UG9pbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlzQ2l0aXplbiA9IHNraW4gPT09ICdjaXRpemVuJztcblx0Y29uc3QgaXNMaXN0SXRlbSA9XG5cdFx0Wydnb25nYmknLCAndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJ10uaW5jbHVkZXMoc2tpbikgfHwgQm9vbGVhbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKTtcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXNDaXRpemVuID8gJ3NlY3Rpb24nIDogaXNMaXN0SXRlbSA/ICdsaScgOiAnZGl2Jyk7XG5cblx0cm9vdC5pZCA9IE9QVElPTlMuZWxlbWVudElkO1xuXHRyb290LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRSwgJ25vcHJpbnQnKTtcblx0aWYgKGlzQ2l0aXplbikge1xuXHRcdHJvb3QuY2xhc3NMaXN0LmFkZCgncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJyk7XG5cdH1cblx0bW91bnRQb2ludC5wcmVwZW5kKHJvb3QpO1xuXG5cdHJldHVybiByb290O1xufTtcblxuZXhwb3J0IHtjcmVhdGVGb290ZXJSb290fTtcbiIsICIvKipcbiAqIENvbGxlY3QgZXZlcnkgdXNlciBsaW5rIHdpdGhpbiB0aGUgZ2l2ZW4gY29udGVudC5cbiAqXG4gKiBAcGFyYW0gY29udGVudCBUaGUgcGFnZSBjb250ZW50IHRvIHNlYXJjaCBpbi5cbiAqIEByZXR1cm5zIEEgbWFwIG9mIHRoZSB1c2VyIG5hbWVzIHRvIHRoZSB1c2VyIGxpbmtzIHBvaW50aW5nIHRvIHRoZW0uXG4gKi9cbmNvbnN0IGdldFVzZXJMaW5rcyA9IChjb250ZW50OiBIVE1MRWxlbWVudCk6IFJlY29yZDxzdHJpbmcsIEhUTUxBbmNob3JFbGVtZW50W10+ID0+IHtcblx0Y29uc3QgdXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBIVE1MQW5jaG9yRWxlbWVudFtdPiA9IHt9O1xuXG5cdGNvbnN0IHt3Z0Zvcm1hdHRlZE5hbWVzcGFjZXN9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCB7MjogbG9jYWxpemVkVXNlck5hbWVzcGFjZSwgMzogbG9jYWxpemVkVXNlclRhbGtOYW1lc3BhY2V9ID0gd2dGb3JtYXR0ZWROYW1lc3BhY2VzO1xuXG5cdGNvbnN0IHNlbGVjdG9yOiBzdHJpbmcgPSBbXG5cdFx0J2FbdGl0bGVePVwiVXNlcjpcIl06bm90KC5tdy1jaGFuZ2VzbGlzdC1kYXRlKTpub3QoW2hyZWYqPVwidW5kb1wiXSknLFxuXHRcdGBhW3RpdGxlXj1cIiR7bG9jYWxpemVkVXNlck5hbWVzcGFjZX06XCJdOm5vdCgubXctY2hhbmdlc2xpc3QtZGF0ZSk6bm90KFtocmVmKj1cInVuZG9cIl0pYCxcblx0XS5qb2luKCcsJyk7XG5cblx0Y29uc3QgdXNlclJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKFxuXHRcdGAoKFVzZXJ8VXNlcltfIF10YWxrKXwoJHtsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlfXwke2xvY2FsaXplZFVzZXJUYWxrTmFtZXNwYWNlfSkpOiguKj8pKD89JnwkKWBcblx0KTtcblx0Y29uc3QgbmFtZXNwYWNlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdFx0YF4oKFVzZXJ8VXNlcltfIF10YWxrKXwoJHtsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlfXwke2xvY2FsaXplZFVzZXJUYWxrTmFtZXNwYWNlfSkpOmAsXG5cdFx0J2knXG5cdCk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oc2VsZWN0b3IpKSB7XG5cdFx0Y29uc3QgaHJlZjogc3RyaW5nID0gZGVjb2RlVVJJKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgPz8gJycpO1xuXHRcdGNvbnN0IHVzZXJOYW1lTWF0Y2hBcnJheTogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSBocmVmLm1hdGNoKHVzZXJSZWdleCk7XG5cdFx0aWYgKCF1c2VyTmFtZU1hdGNoQXJyYXkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBbdXNlck5hbWVdID0gdXNlck5hbWVNYXRjaEFycmF5O1xuXHRcdHVzZXJOYW1lID0gdXNlck5hbWUucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpLnJlcGxhY2UoLyMuKiQvaSwgJycpO1xuXHRcdGlmICh1c2VyTmFtZS5pbmNsdWRlcygnLycpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtZW50cyA9IHVzZXJMaW5rc1t1c2VyTmFtZV0gPz8gW107XG5cdFx0ZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoXSA9IGVsZW1lbnQ7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0dXNlckxpbmtzW3VzZXJOYW1lXSA9IGVsZW1lbnRzO1xuXHR9XG5cblx0cmV0dXJuIHVzZXJMaW5rcztcbn07XG5cbmV4cG9ydCB7Z2V0VXNlckxpbmtzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwcGVuZE1hcmtlclRvVXNlckxpbmtzfSBmcm9tICcuL3V0aWwvYXBwZW5kTWFya2VyVG9Vc2VyTGlua3MnO1xuaW1wb3J0IHthcHBlbmRNYXJrZXJUb1VzZXJQYWdlfSBmcm9tICcuL3V0aWwvYXBwZW5kTWFya2VyVG9Vc2VyUGFnZSc7XG5pbXBvcnQge2dldFVzZXJMaW5rc30gZnJvbSAnLi91dGlsL2dldFVzZXJMaW5rcyc7XG5cbmNvbnN0IHdob0lzQWN0aXZlVXNlckxpbmtzID0gKCRjb250ZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ1JlY2VudGNoYW5nZXMnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQgPSAkY29udGVudFswXTtcblx0aWYgKCFjb250ZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdXNlckxpbmtzID0gZ2V0VXNlckxpbmtzKGNvbnRlbnQpO1xuXG5cdGZvciAoY29uc3QgW3VzZXJOYW1lLCBlbGVtZW50c10gb2YgT2JqZWN0LmVudHJpZXModXNlckxpbmtzKSkge1xuXHRcdHZvaWQgYXBwZW5kTWFya2VyVG9Vc2VyTGlua3Moe3VzZXJOYW1lLCBlbGVtZW50c30pO1xuXHR9XG59O1xuXG5jb25zdCB3aG9Jc0FjdGl2ZVVzZXJQYWdlID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1JlbGV2YW50VXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghd2dSZWxldmFudFVzZXJOYW1lIHx8IHdnTmFtZXNwYWNlTnVtYmVyICE9PSBPUFRJT05TLnVzZXJOYW1lU3BhY2VOdW1iZXIgfHwgd2dBY3Rpb24gIT09ICd2aWV3Jykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dSZWxldmFudFVzZXJOYW1lLCBPUFRJT05TLnVzZXJOYW1lU3BhY2VOdW1iZXIpLnRvVGV4dCgpO1xuXHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpLnRvVGV4dCgpO1xuXHRpZiAocmVsZXZhbnRVc2VyUGFnZU5hbWUgIT09IHBhZ2VOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBhcHBlbmRNYXJrZXJUb1VzZXJQYWdlKHdnUmVsZXZhbnRVc2VyTmFtZSk7XG59O1xuXG5leHBvcnQge3dob0lzQWN0aXZlVXNlckxpbmtzLCB3aG9Jc0FjdGl2ZVVzZXJQYWdlfTtcbiIsICJpbXBvcnQgJy4vV2hvSXNBY3RpdmUubGVzcyc7XG5pbXBvcnQge3dob0lzQWN0aXZlVXNlckxpbmtzLCB3aG9Jc0FjdGl2ZVVzZXJQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiB3aG9Jc0FjdGl2ZUxvYWQoKSB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQod2hvSXNBY3RpdmVVc2VyTGlua3MpO1xuXHR2b2lkIHdob0lzQWN0aXZlVXNlclBhZ2UoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7QUFDYixJQUFBQyxxQkFBc0I7QUFDdEIsSUFBQUMsYUFBYztBQUNkLElBQUFDLHNC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RUEsUUFBTUksdUJBQStCLElBQUk1RSxHQUFHNkUsTUFBTUYsb0JBQTRCdkwsbUJBQW1CLEVBQUUwTCxPQUFPO0FBQzFHLFFBQU1DLFdBQW1CLElBQUkvRSxHQUFHNkUsTUFBTUgsVUFBVSxFQUFFSSxPQUFPO0FBQ3pELE1BQUlGLHlCQUF5QkcsVUFBVTtBQUN0QztFQUNEO0FBRUEsT0FBS3hDLHVCQUF1Qm9DLGtCQUFrQjtBQUMvQzs7Q0NsQ0MsU0FBU0ssa0JBQWtCO0FBQzNCaEYsS0FBR2lGLEtBQUssa0JBQWtCLEVBQUUvSCxJQUFJOEcsb0JBQW9CO0FBQ3BELE9BQUtPLG9CQUFvQjtBQUMxQixHQUFHOyIsCiAgIm5hbWVzIjogWyJlbGVtZW50SWQiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInN0b3JhZ2VLZXkiLCAidXNlck5hbWVTcGFjZU51bWJlciIsICJ2ZXJzaW9uIiwgImltcG9ydF9jb2RleCIsICJyZXF1aXJlIiwgIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJDTEFTU19OQU1FIiwgIlRPTkVfTUFQIiwgIk92ZXJBWWVhciIsICJUaGlzTW9udGgiLCAiVGhpc1NlYXNvbiIsICJUaGlzU2VtaXllYXIiLCAiVGhpc1dlZWsiLCAiVGhpc1llYXIiLCAiVVNFUl9DT05UUklCVVRJT05TX0lDT04iLCAiaW1wb3J0X3Z1ZTIiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJDTEFTU19OQU1FMiIsICJwcm9wcyIsICJfX3Byb3BzIiwgInRvbmVDbGFzc05hbWUiLCAiY29tcHV0ZWQiLCAiY29uY2F0IiwgInRpbWVTcGFuIiwgInRleHQiLCAiaW1wb3J0X3Z1ZTMiLCAiX2hvaXN0ZWRfMSIsICJfaG9pc3RlZF8yIiwgImNsYXNzIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAibm9ybWFsaXplQ2xhc3MiLCAiaW5kaWNhdG9yIiwgInRpdGxlIiwgImNyZWF0ZVZOb2RlIiwgImljb24iLCAic2l6ZSIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgIkFwcF9kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiQXBwX2RlZmF1bHQyIiwgImltcG9ydF92dWU0IiwgImNyZWF0ZUxpbmtSb290IiwgInVzZXJMaW5rIiwgInJvb3QiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc0xpc3QiLCAiYWRkIiwgImFmdGVyIiwgIk1JTExJU0VDT05EU19QRVJfREFZIiwgImdldFRpbWVTcGFuIiwgInRpbWVzdGFtcCIsICJkYXRlIiwgIkRhdGUiLCAicGFyc2UiLCAiZGlmZiIsICJNYXRoIiwgImZsb29yIiwgIm5vdyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRVc2VyQ29udHJpYnNUaW1lc3RhbXAiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ1Y3VzZXIiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAibGlzdCIsICJ1Y2xpbWl0IiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInJlc3VsdCIsICJnZXQiLCAidXNlcmNvbnRyaWJzIiwgImxlbmd0aCIsICJlcnJvciIsICJjb25zb2xlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRMb2dFdmVudHNUaW1lc3RhbXAiLCAiX3JlZjIiLCAibGV1c2VyIiwgImZvcm1hdHZlcnNpb24iLCAibGVsaW1pdCIsICJsZXByb3AiLCAibG9nZXZlbnRzIiwgIl94MiIsICJnZXRUaW1lc3RhbXAiLCAiX3JlZjMiLCAidXNlcm5hbWUiLCAibXciLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAidWNUaW1lc3RhbXAiLCAidWNEYXRlIiwgImxlVGltZXN0YW1wIiwgImxlRGF0ZSIsICJzZXRPYmplY3QiLCAiX3gzIiwgImFwcGVuZE1hcmtlclRvVXNlckxpbmtzIiwgIl9yZWY0IiwgInVzZXJOYW1lIiwgImVsZW1lbnRzIiwgImluY2x1ZGVzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgImNyZWF0ZUFwcCIsICJtb3VudCIsICJlcnIiLCAiZSIsICJmIiwgIl94NCIsICJpbXBvcnRfdnVlNSIsICJjcmVhdGVGb290ZXJSb290IiwgIm1vdW50UG9pbnQiLCAic2tpbiIsICJjb25maWciLCAiaXNDaXRpemVuIiwgImlzTGlzdEl0ZW0iLCAiQm9vbGVhbiIsICJxdWVyeVNlbGVjdG9yIiwgImlkIiwgInByZXBlbmQiLCAiYXBwZW5kTWFya2VyVG9Vc2VyUGFnZSIsICJfcmVmNSIsICJfeDUiLCAiZ2V0VXNlckxpbmtzIiwgImNvbnRlbnQiLCAidXNlckxpbmtzIiwgIndnRm9ybWF0dGVkTmFtZXNwYWNlcyIsICJsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlIiwgImxvY2FsaXplZFVzZXJUYWxrTmFtZXNwYWNlIiwgInNlbGVjdG9yIiwgImpvaW4iLCAidXNlclJlZ2V4IiwgIlJlZ0V4cCIsICJuYW1lc3BhY2VSZWdleCIsICJfaXRlcmF0b3IyIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiX3N0ZXAyIiwgIl9lbGVtZW50JGdldEF0dHJpYnV0ZSIsICJfdXNlckxpbmtzJHVzZXJOYW1lIiwgImhyZWYiLCAiZGVjb2RlVVJJIiwgImdldEF0dHJpYnV0ZSIsICJ1c2VyTmFtZU1hdGNoQXJyYXkiLCAibWF0Y2giLCAicmVwbGFjZSIsICJ3aG9Jc0FjdGl2ZVVzZXJMaW5rcyIsICIkY29udGVudCIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAid2hvSXNBY3RpdmVVc2VyUGFnZSIsICJ3Z0FjdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJyZWxldmFudFVzZXJQYWdlTmFtZSIsICJUaXRsZSIsICJ0b1RleHQiLCAicGFnZU5hbWUiLCAid2hvSXNBY3RpdmVMb2FkIiwgImhvb2siXQp9Cg==
