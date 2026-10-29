/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|license2=Qiuwen Public Licence}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EasyArchive}
 * @author WaitSpring <me@waitspring.com>
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 * @license Qiuwen Public License {@link https://www.qiuwenbaike.cn/wiki/QW:QWL}
 */

/**
 * Copyright 2024 WaitSpring <me@waitspring.com>
 * Licensed under the "Qiuwen Public Licence"
 * (the "License", formerly the "Qiuwen Licence"),
 * either version 1.0 of the Licence, or any
 * later version.
 * You may obtain a copy of the License at
 *
 *  http://www.qiuwenbaike.cn/wiki/QW:QWL
 *
 * See the License for details.
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};

// node_modules/.pnpm/broadcastchannel-polyfill@1.0.1/node_modules/broadcastchannel-polyfill/index.js
var require_broadcastchannel_polyfill = __commonJS({
  "node_modules/.pnpm/broadcastchannel-polyfill@1.0.1/node_modules/broadcastchannel-polyfill/index.js"() {
    (function(global) {
      var channels = [];
      function BroadcastChannel2(channel) {
        var $this = this;
        channel = String(channel);
        var id = "$BroadcastChannel$" + channel + "$";
        channels[id] = channels[id] || [];
        channels[id].push(this);
        this._name = channel;
        this._id = id;
        this._closed = false;
        this._mc = new MessageChannel();
        this._mc.port1.start();
        this._mc.port2.start();
        global.addEventListener("storage", function(e) {
          if (e.storageArea !== global.localStorage) return;
          if (e.newValue == null || e.newValue === "") return;
          if (e.key.substring(0, id.length) !== id) return;
          var data = JSON.parse(e.newValue);
          $this._mc.port2.postMessage(data);
        });
      }
      BroadcastChannel2.prototype = {
        // BroadcastChannel API
        get name() {
          return this._name;
        },
        postMessage: function(message) {
          var $this = this;
          if (this._closed) {
            var e = new Error();
            e.name = "InvalidStateError";
            throw e;
          }
          var value = JSON.stringify(message);
          var key = this._id + String(Date.now()) + "$" + String(Math.random());
          global.localStorage.setItem(key, value);
          setTimeout(function() {
            global.localStorage.removeItem(key);
          }, 500);
          channels[this._id].forEach(function(bc) {
            if (bc === $this) return;
            bc._mc.port2.postMessage(JSON.parse(value));
          });
        },
        close: function() {
          if (this._closed) return;
          this._closed = true;
          this._mc.port1.close();
          this._mc.port2.close();
          var index = channels[this._id].indexOf(this);
          channels[this._id].splice(index, 1);
        },
        // EventTarget API
        get onmessage() {
          return this._mc.port1.onmessage;
        },
        set onmessage(value) {
          this._mc.port1.onmessage = value;
        },
        addEventListener: function() {
          return this._mc.port1.addEventListener.apply(this._mc.port1, arguments);
        },
        removeEventListener: function() {
          return this._mc.port1.removeEventListener.apply(this._mc.port1, arguments);
        },
        dispatchEvent: function() {
          return this._mc.port1.dispatchEvent.apply(this._mc.port1, arguments);
        }
      };
      global.BroadcastChannel = global.BroadcastChannel || BroadcastChannel2;
    })(self);
  }
});

// dist/EasyArchive/EasyArchive.js
//! src/EasyArchive/options.json
require_broadcastchannel_polyfill();
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
var elementId = "gadget-easy_archive";
var mountPointSelector = "#footer-info,.page-info";
var version = "1.0";
//! src/EasyArchive/modules/loadEasyArchive.ts
var import_vue6 = require("vue");
//! src/EasyArchive/modules/util/getSettings.ts
var ifArcLocNotAllowed = (arcLoc) => {
  const {
    wgPageName
  } = mw.config.get();
  const sourceTitle = new mw.Title(wgPageName);
  const arcLocTitle = new mw.Title(arcLoc);
  const arcLocNamespaceId = arcLocTitle.getNamespaceId();
  const arcLocPageName = arcLocTitle.getMain();
  const sourceNamespaceId = sourceTitle.getNamespaceId();
  const sourcePageName = sourceTitle.getMain();
  if (arcLocNamespaceId === 0) {
    return true;
  }
  if (arcLocNamespaceId === sourceNamespaceId && arcLocPageName === sourcePageName) {
    return true;
  }
  return false;
};
var isInBlacklist = () => {
  const {
    wgPageName
  } = mw.config.get();
  const blackListRegexArr = [/^File:.*$/, /^MediaWiki:.*$/, /^Module:.*$/, /^Category:.*$/, /^Template:.*$/, /^Special:.*$/, /^User:.*\/?.*\.js$/, /^User:.*\/?.*\.css$/, /^User:.*\/?.*\.json$/];
  for (var _i = 0, _blackListRegexArr = blackListRegexArr; _i < _blackListRegexArr.length; _i++) {
    const element = _blackListRegexArr[_i];
    if (element.test(wgPageName)) {
      return true;
    }
  }
  return false;
};
var isNotAllowed = () => {
  const {
    wgNamespaceNumber,
    wgRelevantUserName,
    wgUserName
  } = mw.config.get();
  if ((wgNamespaceNumber === 2 || wgNamespaceNumber === 3) && !(wgRelevantUserName === wgUserName)) {
    return true;
  }
  return false;
};
var isNotSupported = () => {
  const {
    wgIsMainPage,
    wgNamespaceNumber,
    wgCurRevisionId,
    wgRevisionId
  } = mw.config.get();
  if (wgNamespaceNumber < 0 || wgCurRevisionId - wgRevisionId !== 0) {
    return true;
  }
  if (wgNamespaceNumber === 0 || wgIsMainPage) {
    return true;
  }
  return false;
};
var getSettings = () => {
  const settings = document.querySelector(".easy_archive_data_point_collection");
  if (!settings) {
    return null;
  }
  const {
    dataset
  } = settings;
  const {
    arcLevel,
    arcLoc,
    secArc,
    secDel
  } = dataset;
  return {
    arcLevel: arcLevel !== null && arcLevel !== void 0 ? arcLevel : "2",
    arcLoc: arcLoc !== null && arcLoc !== void 0 ? arcLoc : "",
    secArc: secArc !== null && secArc !== void 0 ? secArc : "1",
    secDel: secDel !== null && secDel !== void 0 ? secDel : "1"
  };
};
var import_vue3 = require("vue");
//! src/EasyArchive/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("EasyArchive/".concat(version));
//! src/EasyArchive/modules/util/getSection.ts
var getSections = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (title) {
    const params = {
      action: "parse",
      format: "json",
      formatversion: "2",
      page: title,
      prop: "sections"
    };
    const {
      parse
    } = yield api.get(params);
    const {
      sections
    } = parse;
    const sectionsToArchive = [];
    var _iterator = _createForOfIteratorHelper(sections), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const section = _step.value;
        const {
          level,
          index,
          anchor
        } = section;
        if (index.startsWith("T-")) {
          continue;
        }
        sectionsToArchive[sectionsToArchive.length] = {
          level,
          index,
          anchor
        };
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return sectionsToArchive;
  });
  return function getSections2(_x) {
    return _ref.apply(this, arguments);
  };
})();
var getSectionContent = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* ({
    title,
    section
  }) {
    var _response$query$pages, _response$query$pages2;
    const params = {
      action: "query",
      prop: "revisions",
      rvprop: "content",
      format: "json",
      formatversion: "2",
      titles: title,
      rvsection: section,
      rvslots: "main"
    };
    const response = yield api.get(params);
    return (_response$query$pages = (_response$query$pages2 = response["query"].pages[0]) === null || _response$query$pages2 === void 0 || (_response$query$pages2 = _response$query$pages2.revisions) === null || _response$query$pages2 === void 0 ? void 0 : _response$query$pages2[0].slots.main.content) !== null && _response$query$pages !== void 0 ? _response$query$pages : null;
  });
  return function getSectionContent2(_x2) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/EasyArchive/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Archive: (0, import_ext_gadget2.localize)({
      en: "archive",
      "zh-hans": "存档",
      "zh-hant": "存檔"
    }),
    "Archive location": (0, import_ext_gadget2.localize)({
      en: "Archive location: ",
      "zh-hans": "存档地址：",
      "zh-hant": "存檔至："
    }),
    "Archive Location not allowed": (0, import_ext_gadget2.localize)({
      en: 'Currently the archive location of this page, "$1", but Easy archive cannot operate like this.',
      "zh-hans": "此页面目前的存档地址是“$1”。Easy Archive 无法按此地址存档。",
      "zh-hant": "此頁面當前的存檔地址是「$1」。Easy Archive 無法按此地址存檔。"
    }),
    "Archive Location not allowed details": (0, import_ext_gadget2.localize)({
      en: "Archives should not be normally directed to pages under article namespace. Please check if you have the correct archive location.",
      "zh-hans": "一般而言，不应向条目名称空间进行存档。此外，存档地址不得和此页面名称相同。请检查存档地址。",
      "zh-hant": "一般而言，不應向條目名稱空間進行存檔。此外，存檔地址不得和此頁面名稱相同。請檢查存檔地址。"
    }),
    Archiving: (0, import_ext_gadget2.localize)({
      en: "Archiving",
      "zh-hans": "存档中",
      "zh-hant": "存檔中"
    }),
    Archived: (0, import_ext_gadget2.localize)({
      en: "archived",
      "zh-hans": "已存档",
      "zh-hant": "已存檔"
    }),
    "Edit Confilict Notice": (0, import_ext_gadget2.localize)({
      en: "You have already archived and/or deleted a section on this page. Please refresh the page and continue archiving or deleting other sections to avoid editing conflicts.",
      "zh-hans": "您已经在本页面执行了存档、删除章节的操作。请刷新页面，然后继续存档、删除本页面的其他章节，以避免编辑冲突。",
      "zh-hant": "您已經在本頁面執行了存檔、刪除章節的操作。請刷新頁面，然後繼續存檔、刪除本頁面的其他章節，以避免編輯衝突。"
    }),
    Delete: (0, import_ext_gadget2.localize)({
      en: "delete",
      "zh-hans": "删除",
      "zh-hant": "刪除"
    }),
    Deleting: (0, import_ext_gadget2.localize)({
      en: "Deleting",
      "zh-hans": "删除中",
      "zh-hant": "刪除中"
    }),
    Deleted: (0, import_ext_gadget2.localize)({
      en: "deleted",
      "zh-hans": "已删除",
      "zh-hant": "已刪除"
    }),
    "Archive summary": (0, import_ext_gadget2.localize)({
      en: "archive section",
      "zh-hans": "存档段落",
      "zh-hant": "存檔段落"
    }),
    "Create summary": (0, import_ext_gadget2.localize)({
      en: "create archive",
      "zh-hans": "建立存档",
      "zh-hant": "建立存檔"
    }),
    "Delete summary": (0, import_ext_gadget2.localize)({
      en: "delete section",
      "zh-hans": "删除段落",
      "zh-hant": "刪除段落"
    }),
    "Easy Archive enabled": (0, import_ext_gadget2.localize)({
      en: "Easy Archive is enabled on this talk page",
      "zh-hans": "本讨论页面使用 Easy Archive 快速存档",
      "zh-hant": "此頁面使用 Easy Archive 快速存檔"
    }),
    "Easy Archive not allowed": (0, import_ext_gadget2.localize)({
      en: "You cannot use Easy Archive to archive threads on this page.",
      "zh-hans": "您不可以在此页面使用 Easy Archive 快速存档。",
      "zh-hant": "您不可以在此頁面使用 Easy Archive 快速存檔。"
    }),
    "Easy Archive not supported": (0, import_ext_gadget2.localize)({
      en: "This page is not supported by Easy Archive.",
      "zh-hans": "此页面不支持 Easy Archive。",
      "zh-hant": "此頁面不支持 Easy Archive。"
    }),
    "Easy Archive not supported details": (0, import_ext_gadget2.localize)({
      en: "These pages are not supported by Easy Archive: Article, File, Template, Module, MediaWiki, Category, Special, JavaScript, CSS, JSON.",
      "zh-hans": "这些页面不受 Easy Archive 支持：条目、File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。",
      "zh-hant": "這些頁面不受 Easy Archive 支持：條目，File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。"
    }),
    "Easy Archive operation failed": (0, import_ext_gadget2.localize)({
      en: "Easy Archive could not complete the operation. Please check the browser console and refresh before trying again.",
      "zh-hans": "Easy Archive 无法完成操作。请检查浏览器控制台，并在重试前刷新页面。",
      "zh-hant": "Easy Archive 無法完成操作。請檢查瀏覽器主控台，並在重試前重新整理頁面。"
    }),
    "No Archive Location": (0, import_ext_gadget2.localize)({
      en: "Easy Archive can be used on this page if needed. To enable it, add {{Easy Archive|to=[Archive location]}} template to this page.",
      "zh-hans": "若需要，此页面可以启用 Easy Archive。若要在此页面使用 Easy Archive，请在页面上添加模板 {{Easy Archive|to=存档位置}}。",
      "zh-hant": "若需要，此頁面可以啟用 Easy Archive。若要在此頁面使用 Easy Archive，請在頁面上添加模板 {{Easy Archive|to=存檔位置}}。"
    }),
    "Section $1": (0, import_ext_gadget2.localize)({
      en: "Section $1",
      zh: "第 $1 章节"
    }),
    "(": (0, import_ext_gadget2.localize)({
      en: " (",
      zh: "（"
    }),
    ")": (0, import_ext_gadget2.localize)({
      en: ")",
      zh: "）"
    }),
    ".": (0, import_ext_gadget2.localize)({
      en: ".",
      zh: "。"
    }),
    ":": (0, import_ext_gadget2.localize)({
      en: ": ",
      zh: "："
    }),
    Refresh: (0, import_ext_gadget2.localize)({
      en: "Refresh the page",
      "zh-hans": "刷新当前页面",
      "zh-hant": "重新載入當前頁"
    }),
    Refreshing: (0, import_ext_gadget2.localize)({
      en: "Refreshing...",
      ja: "再読み込みします...",
      "zh-hans": "即将刷新当前页面……",
      "zh-hant": "即將重新載入當前頁……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EasyArchive/modules/util/editSection.ts
var isPageExist = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (archiveTo) {
    var _query$pages$;
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "info",
      titles: archiveTo
    };
    const {
      query
    } = yield api.get(params);
    if ((_query$pages$ = query.pages[0]) !== null && _query$pages$ !== void 0 && _query$pages$.missing) {
      return false;
    }
    return true;
  });
  return function isPageExist2(_x3) {
    return _ref3.apply(this, arguments);
  };
})();
var isSectionExist = /* @__PURE__ */ (function() {
  var _ref4 = _asyncToGenerator(function* ({
    index,
    anchor
  }) {
    const {
      wgPageName
    } = mw.config.get();
    const sections = yield getSections(wgPageName);
    let isExist = false;
    var _iterator2 = _createForOfIteratorHelper(sections), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const section = _step2.value;
        if (index === section.index && anchor === section.anchor) {
          isExist = true;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return isExist;
  });
  return function isSectionExist2(_x4) {
    return _ref4.apply(this, arguments);
  };
})();
var removeSection = /* @__PURE__ */ (function() {
  var _ref5 = _asyncToGenerator(function* ({
    index,
    anchor,
    summary
  }) {
    const {
      wgPageName
    } = mw.config.get();
    const isExist = yield isSectionExist({
      index,
      anchor
    });
    if (isExist !== true) {
      return;
    }
    const content = yield getSectionContent({
      title: wgPageName,
      section: index
    });
    if (content === null) {
      return;
    }
    yield api.edit(wgPageName, () => {
      return {
        section: index,
        text: "",
        summary: summary !== null && summary !== void 0 ? summary : getMessage("Delete summary"),
        minor: true
      };
    });
  });
  return function removeSection2(_x5) {
    return _ref5.apply(this, arguments);
  };
})();
var archiveSection = /* @__PURE__ */ (function() {
  var _ref6 = _asyncToGenerator(function* ({
    index,
    anchor,
    archiveTo
  }) {
    const {
      wgPageName
    } = mw.config.get();
    const isExist = yield isSectionExist({
      index,
      anchor
    });
    if (isExist !== true) {
      return;
    }
    const content = yield getSectionContent({
      title: wgPageName,
      section: index
    });
    if (content === null) {
      return;
    }
    const pageExist = yield isPageExist(archiveTo);
    if (!pageExist) {
      yield api.create(archiveTo, {
        summary: getMessage("Create summary"),
        minor: true
      }, "{{talkarchive}}");
    }
    yield api.edit(archiveTo, () => {
      return {
        appendtext: "\n\n".concat(content),
        summary: getMessage("Archive summary"),
        minor: true
      };
    });
    yield removeSection({
      index,
      anchor,
      summary: getMessage("Archive summary")
    });
  });
  return function archiveSection2(_x6) {
    return _ref6.apply(this, arguments);
  };
})();
var import_vue4 = require("vue");
//! src/EasyArchive/modules/util/getMessage.ts
var getArchivingMessage = (indexNo) => {
  return getMessage("Archiving") + getMessage(":") + getMessage("Section $1").replace("$1", indexNo);
};
var getArchivedMessage = (indexNo) => {
  return getMessage("Archived") + getMessage(":") + getMessage("Section $1").replace("$1", indexNo);
};
var getDeletingMessage = (indexNo) => {
  return getMessage("Deleting") + getMessage(":") + getMessage("Section $1").replace("$1", indexNo);
};
var getDeletedMessage = (indexNo) => {
  return getMessage("Deleted") + getMessage(":") + getMessage("Section $1").replace("$1", indexNo);
};
var import_codex2 = require("@wikimedia/codex");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var ConflictNotice_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "ConflictNotice",
  props: {
    onClick: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const __returned__ = {
      props,
      get CdxButton() {
        return import_codex.CdxButton;
      },
      get getMessage() {
        return getMessage;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue2 = require("vue");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("span", null, [(0, import_vue2.createTextVNode)(
    (0, import_vue2.toDisplayString)($setup.getMessage("Edit Confilict Notice")) + " ",
    1
    /* TEXT */
  ), (0, import_vue2.createVNode)($setup["CdxButton"], {
    weight: "quiet",
    type: "button",
    size: "small",
    onClick: $setup.props.onClick
  }, {
    default: (0, import_vue2.withCtx)(() => [(0, import_vue2.createTextVNode)(
      (0, import_vue2.toDisplayString)($setup.getMessage("Refresh")),
      1
      /* TEXT */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["onClick"])]);
}
//! src/EasyArchive/modules/components/ConflictNotice.vue
ConflictNotice_default.render = render;
ConflictNotice_default.__file = "src\\EasyArchive\\modules\\components\\ConflictNotice.vue";
var ConflictNotice_default2 = ConflictNotice_default;
//! src/EasyArchive/modules/util/refreshPage.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var refresh = ({
  targetPage,
  toastifyInstance
} = {}) => {
  toastifyInstance || (toastifyInstance = {
    hideToast: () => {
    }
  });
  toastifyInstance.hideToast();
  toastifyInstance = (0, import_ext_gadget3.toastify)({
    text: getMessage("Refreshing"),
    duration: -1
  }, "success");
  if (targetPage) {
    location.replace(mw.util.getUrl(targetPage));
  } else {
    location.reload();
  }
};
var import_ext_gadget4 = require("ext.gadget.Toastify");
var App_default = /* @__PURE__ */ (0, import_vue3.defineComponent)({
  __name: "App",
  props: {
    noticeType: {
      type: String,
      required: true
    },
    arcLoc: {
      type: String,
      required: true
    },
    sectionLinks: {
      type: Array,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const archiveUrl = (0, import_vue4.computed)(() => mw.util.getUrl(props.arcLoc));
    const showSectionLinks = (0, import_vue4.ref)(true);
    const workingSection = (0, import_vue4.ref)();
    const workingAction = (0, import_vue4.ref)();
    const actionFailed = (0, import_vue4.ref)(false);
    let toastifyInstance = {
      hideToast: () => {
      }
    };
    let conflictApp;
    let conflictRoot;
    const hideToast = () => {
      var _conflictApp, _conflictRoot;
      toastifyInstance.hideToast();
      (_conflictApp = conflictApp) === null || _conflictApp === void 0 || _conflictApp.unmount();
      conflictApp = void 0;
      (_conflictRoot = conflictRoot) === null || _conflictRoot === void 0 || _conflictRoot.remove();
      conflictRoot = void 0;
    };
    const showToast = (text, type = "info", duration = -1) => {
      hideToast();
      toastifyInstance = (0, import_ext_gadget4.toastify)({
        text,
        close: true,
        duration
      }, type);
    };
    const messageChannel = new BroadcastChannel("".concat(mw.config.get().wgPageName, "_message"));
    const refreshChannel = new BroadcastChannel("".concat(mw.config.get().wgPageName, "_refresh"));
    const onMessage = (event) => {
      showSectionLinks.value = false;
      if (typeof event.data === "string") {
        showToast(event.data, "info", 3 * 1e3);
      }
    };
    const onRefreshMessage = () => {
      hideToast();
      conflictRoot = document.createElement("span");
      conflictApp = (0, import_vue4.createApp)(ConflictNotice_default2, {
        onClick: () => {
          hideToast();
          refresh();
        }
      });
      conflictApp.mount(conflictRoot);
      toastifyInstance = (0, import_ext_gadget4.toastify)({
        node: conflictRoot,
        close: true,
        duration: -1
      }, "info");
    };
    (0, import_vue4.onMounted)(() => {
      messageChannel.addEventListener("message", onMessage);
      refreshChannel.addEventListener("message", onRefreshMessage);
    });
    (0, import_vue4.onBeforeUnmount)(() => {
      messageChannel.removeEventListener("message", onMessage);
      refreshChannel.removeEventListener("message", onRefreshMessage);
      messageChannel.close();
      refreshChannel.close();
      hideToast();
    });
    const runSectionAction = /* @__PURE__ */ (function() {
      var _ref7 = _asyncToGenerator(function* (section, action) {
        if (workingSection.value) {
          return;
        }
        workingSection.value = section;
        workingAction.value = action;
        actionFailed.value = false;
        const pendingMessage = action === "archive" ? getArchivingMessage(section.indexNo) : getDeletingMessage(section.indexNo);
        messageChannel.postMessage(pendingMessage);
        showToast(pendingMessage);
        try {
          if (action === "archive") {
            yield archiveSection({
              index: section.indexNo,
              anchor: section.anchor,
              archiveTo: section.archiveTo
            });
          } else {
            yield removeSection({
              index: section.indexNo,
              anchor: section.anchor
            });
          }
        } catch (error) {
          console.error("EasyArchive failed to ".concat(action, " section ").concat(section.indexNo), error);
          const failureMessage = getMessage("Easy Archive operation failed");
          actionFailed.value = true;
          messageChannel.postMessage(failureMessage);
          showToast(failureMessage, "error");
          return;
        }
        const completeMessage = action === "archive" ? getArchivedMessage(section.indexNo) : getDeletedMessage(section.indexNo);
        showToast(completeMessage);
        messageChannel.postMessage(completeMessage);
        refreshChannel.postMessage("Refresh");
        refresh({
          toastifyInstance
        });
      });
      return function runSectionAction2(_x7, _x8) {
        return _ref7.apply(this, arguments);
      };
    })();
    const archiveLink = (section) => {
      void runSectionAction(section, "archive");
    };
    const deleteLink = (section) => {
      void runSectionAction(section, "delete");
    };
    const __returned__ = {
      props,
      archiveUrl,
      showSectionLinks,
      workingSection,
      workingAction,
      actionFailed,
      get toastifyInstance() {
        return toastifyInstance;
      },
      set toastifyInstance(v) {
        toastifyInstance = v;
      },
      get conflictApp() {
        return conflictApp;
      },
      set conflictApp(v) {
        conflictApp = v;
      },
      get conflictRoot() {
        return conflictRoot;
      },
      set conflictRoot(v) {
        conflictRoot = v;
      },
      hideToast,
      showToast,
      messageChannel,
      refreshChannel,
      onMessage,
      onRefreshMessage,
      runSectionAction,
      archiveLink,
      deleteLink,
      get CdxButton() {
        return import_codex2.CdxButton;
      },
      get getMessage() {
        return getMessage;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue5 = require("vue");
var _hoisted_1 = ["title", "href"];
var _hoisted_2 = {
  key: 0,
  class: "gadget-easy_archive__section-id"
};
var _hoisted_3 = {
  key: 1,
  class: "mw-editsection-divider"
};
var _hoisted_4 = {
  key: 3
};
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
    import_vue5.Fragment,
    null,
    [$setup.props.noticeType === "blacklist" ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      import_vue5.Fragment,
      {
        key: 0
      },
      [(0, import_vue5.createTextVNode)(
        (0, import_vue5.toDisplayString)($setup.getMessage("Easy Archive not supported")),
        1
        /* TEXT */
      ), _cache[0] || (_cache[0] = (0, import_vue5.createElementVNode)(
        "br",
        null,
        null,
        -1
        /* CACHED */
      )), (0, import_vue5.createTextVNode)(
        (0, import_vue5.toDisplayString)($setup.getMessage("Easy Archive not supported details")),
        1
        /* TEXT */
      )],
      64
      /* STABLE_FRAGMENT */
    )) : $setup.props.noticeType === "notAllowed" ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      import_vue5.Fragment,
      {
        key: 1
      },
      [(0, import_vue5.createTextVNode)(
        (0, import_vue5.toDisplayString)($setup.getMessage("Easy Archive not allowed")),
        1
        /* TEXT */
      )],
      64
      /* STABLE_FRAGMENT */
    )) : $setup.props.noticeType === "noArcLoc" ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      import_vue5.Fragment,
      {
        key: 2
      },
      [(0, import_vue5.createTextVNode)(
        (0, import_vue5.toDisplayString)($setup.getMessage("No Archive Location")),
        1
        /* TEXT */
      )],
      64
      /* STABLE_FRAGMENT */
    )) : $setup.props.noticeType === "arcLocNotAllowed" ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      import_vue5.Fragment,
      {
        key: 3
      },
      [(0, import_vue5.createTextVNode)(
        (0, import_vue5.toDisplayString)($setup.getMessage("Archive Location not allowed").replace("$1", $setup.props.arcLoc)),
        1
        /* TEXT */
      ), _cache[1] || (_cache[1] = (0, import_vue5.createElementVNode)(
        "br",
        null,
        null,
        -1
        /* CACHED */
      )), (0, import_vue5.createTextVNode)(
        " " + (0, import_vue5.toDisplayString)($setup.getMessage("Archive Location not allowed details")),
        1
        /* TEXT */
      )],
      64
      /* STABLE_FRAGMENT */
    )) : ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      import_vue5.Fragment,
      {
        key: 4
      },
      [(0, import_vue5.createTextVNode)(
        (0, import_vue5.toDisplayString)($setup.getMessage("Easy Archive enabled")) + (0, import_vue5.toDisplayString)($setup.getMessage("(")) + (0, import_vue5.toDisplayString)($setup.getMessage("Archive location")) + " ",
        1
        /* TEXT */
      ), (0, import_vue5.createElementVNode)("a", {
        title: $setup.props.arcLoc,
        href: $setup.archiveUrl
      }, (0, import_vue5.toDisplayString)($setup.props.arcLoc), 9, _hoisted_1), (0, import_vue5.createTextVNode)(
        " " + (0, import_vue5.toDisplayString)($setup.getMessage(")")) + (0, import_vue5.toDisplayString)($setup.getMessage(".")),
        1
        /* TEXT */
      )],
      64
      /* STABLE_FRAGMENT */
    )), ((0, import_vue5.openBlock)(true), (0, import_vue5.createElementBlock)(
      import_vue5.Fragment,
      null,
      (0, import_vue5.renderList)($setup.props.sectionLinks, (section) => {
        var _$setup$workingSectio;
        return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(import_vue5.Teleport, {
          key: section.indexNo,
          to: section.target
        }, [$setup.showSectionLinks ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("span", _hoisted_2, [section.canArchive ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)($setup["CdxButton"], {
          key: 0,
          class: "gadget-easy_archive__button",
          weight: "quiet",
          type: "button",
          size: "small",
          disabled: Boolean($setup.workingSection),
          onClick: ($event) => $setup.archiveLink(section)
        }, {
          default: (0, import_vue5.withCtx)(() => [(0, import_vue5.createTextVNode)(
            (0, import_vue5.toDisplayString)($setup.getMessage("Archive")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["disabled", "onClick"])) : (0, import_vue5.createCommentVNode)("v-if", true), section.canArchive && section.canDelete ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("span", _hoisted_3, "|")) : (0, import_vue5.createCommentVNode)("v-if", true), section.canDelete ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)($setup["CdxButton"], {
          key: 2,
          class: "gadget-easy_archive__button",
          weight: "quiet",
          type: "button",
          size: "small",
          action: "destructive",
          disabled: Boolean($setup.workingSection),
          onClick: ($event) => $setup.deleteLink(section)
        }, {
          default: (0, import_vue5.withCtx)(() => [(0, import_vue5.createTextVNode)(
            (0, import_vue5.toDisplayString)($setup.getMessage("Delete")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["disabled", "onClick"])) : (0, import_vue5.createCommentVNode)("v-if", true), ((_$setup$workingSectio = $setup.workingSection) === null || _$setup$workingSectio === void 0 ? void 0 : _$setup$workingSectio.indexNo) === section.indexNo ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
          "span",
          _hoisted_4,
          (0, import_vue5.toDisplayString)($setup.actionFailed ? $setup.getMessage("Easy Archive operation failed") : $setup.workingAction === "archive" ? $setup.getMessage("Archiving") : $setup.getMessage("Deleting")),
          1
          /* TEXT */
        )) : (0, import_vue5.createCommentVNode)("v-if", true)])) : (0, import_vue5.createCommentVNode)("v-if", true)], 8, ["to"]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))],
    64
    /* STABLE_FRAGMENT */
  );
}
//! src/EasyArchive/modules/App.vue
App_default.render = render2;
App_default.__file = "src\\EasyArchive\\modules\\App.vue";
App_default.__scopeId = "data-v-4ac3d3d2";
var App_default2 = App_default;
//! src/EasyArchive/modules/loadEasyArchive.ts
var import_ext_gadget5 = require("ext.gadget.Toastify");
var createFooterRoot = (mountPoint) => {
  const {
    skin
  } = mw.config.get();
  const isCitizen = skin === "citizen";
  const isListItem = ["gongbi", "vector", "vector-2022"].includes(skin) || document.querySelector("ul#footer-info");
  const root = document.createElement(isCitizen ? "section" : isListItem ? "li" : "div");
  root.id = elementId;
  root.classList.add("easy-archive-footer-notice", "noprint");
  if (isCitizen) {
    root.classList.add("page-info__item", "citizen-footer__pageinfo-item");
  }
  mountPoint.prepend(root);
  return root;
};
var loadEasyArchive = () => {
  if (isNotSupported()) {
    return;
  }
  const mountPoint = document.querySelector(mountPointSelector);
  if (!mountPoint) {
    return;
  }
  let noticeType;
  let arcLoc = "";
  let settings = null;
  if (isInBlacklist()) {
    noticeType = "blacklist";
  } else if (isNotAllowed()) {
    noticeType = "notAllowed";
  } else {
    var _settings;
    settings = getSettings();
    if (!((_settings = settings) !== null && _settings !== void 0 && _settings.arcLoc)) {
      noticeType = "noArcLoc";
    } else if (ifArcLocNotAllowed(settings.arcLoc)) {
      noticeType = "arcLocNotAllowed";
      arcLoc = settings.arcLoc;
    } else {
      noticeType = "enabled";
      arcLoc = settings.arcLoc;
    }
  }
  const sectionLinks = (0, import_vue6.reactive)([]);
  const app = (0, import_vue6.createApp)(App_default2, {
    noticeType,
    arcLoc,
    sectionLinks
  });
  app.mount(createFooterRoot(mountPoint));
  if (noticeType !== "enabled" || !settings) {
    return;
  }
  const {
    wgPageName
  } = mw.config.get();
  const {
    arcLevel,
    secArc,
    secDel
  } = settings;
  void getSections(wgPageName).then((sections) => {
    const headings = document.querySelectorAll("h".concat(arcLevel));
    const headlineIds = new Set([...headings].map((heading) => {
      var _heading$querySelecto;
      return (_heading$querySelecto = heading.querySelector(".mw-headline")) === null || _heading$querySelecto === void 0 ? void 0 : _heading$querySelecto.id;
    }).filter((id) => Boolean(id)));
    var _iterator3 = _createForOfIteratorHelper(sections), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        var _headline$parentEleme;
        const section = _step3.value;
        if (section.level !== arcLevel || !headlineIds.has(section.anchor)) {
          continue;
        }
        const headline = document.getElementById(section.anchor);
        const editSection = headline === null || headline === void 0 || (_headline$parentEleme = headline.parentElement) === null || _headline$parentEleme === void 0 ? void 0 : _headline$parentEleme.querySelector(".mw-editsection");
        if (!editSection) {
          continue;
        }
        sectionLinks.push({
          target: editSection,
          indexNo: section.index,
          anchor: section.anchor,
          archiveTo: arcLoc,
          canArchive: secArc === "1",
          canDelete: secDel === "1"
        });
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }).catch((error) => {
    console.error("EasyArchive failed to load sections", error);
    (0, import_ext_gadget5.toastify)({
      text: getMessage("Easy Archive operation failed"),
      close: true
    }, "error");
  });
};
//! src/EasyArchive/EasyArchive.ts
(function easyArchive() {
  loadEasyArchive();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9sb2FkRWFzeUFyY2hpdmUudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9nZXRTZXR0aW5ncy50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2dldFNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2VkaXRTZWN0aW9uLnRzIiwgImRpc3QvRWFzeUFyY2hpdmUvc3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvQXBwLnZ1ZSIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2dldE1lc3NhZ2UudHMiLCAiZGlzdC9FYXN5QXJjaGl2ZS9zcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL0NvbmZsaWN0Tm90aWNlLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcRWFzeUFyY2hpdmVcXG1vZHVsZXNcXGNvbXBvbmVudHNcXENvbmZsaWN0Tm90aWNlLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2NvbXBvbmVudHMvQ29uZmxpY3ROb3RpY2UudnVlIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvcmVmcmVzaFBhZ2UudHMiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXEVhc3lBcmNoaXZlXFxtb2R1bGVzXFxBcHAudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvQXBwLnZ1ZSIsICJzcmMvRWFzeUFyY2hpdmUvRWFzeUFyY2hpdmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgICB2YXIgY2hhbm5lbHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIEJyb2FkY2FzdENoYW5uZWwoY2hhbm5lbCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICBjaGFubmVsID0gU3RyaW5nKGNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBpZCA9ICckQnJvYWRjYXN0Q2hhbm5lbCQnICsgY2hhbm5lbCArICckJztcblxuICAgICAgICBjaGFubmVsc1tpZF0gPSBjaGFubmVsc1tpZF0gfHwgW107XG4gICAgICAgIGNoYW5uZWxzW2lkXS5wdXNoKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX25hbWUgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWMgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDEuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDIuc3RhcnQoKTtcblxuICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnN0b3JhZ2VBcmVhICE9PSBnbG9iYWwubG9jYWxTdG9yYWdlKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5uZXdWYWx1ZSA9PSBudWxsIHx8IGUubmV3VmFsdWUgPT09ICcnKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5rZXkuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCkgIT09IGlkKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAkdGhpcy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEJyb2FkY2FzdENoYW5uZWwucHJvdG90eXBlID0ge1xuICAgICAgICAvLyBCcm9hZGNhc3RDaGFubmVsIEFQSVxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0TWVzc2FnZTogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gb3RoZXIgY29udGV4dHMgdmlhIHN0b3JhZ2UgZXZlbnRzLi4uXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5faWQgKyBTdHJpbmcoRGF0ZS5ub3coKSkgKyAnJCcgKyBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIGN1cnJlbnQgY29udGV4dCB2aWEgcG9ydHNcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5mb3JFYWNoKGZ1bmN0aW9uKGJjKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJjID09PSAkdGhpcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGJjLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShKU09OLnBhcnNlKHZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0Mi5jbG9zZSgpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjaGFubmVsc1t0aGlzLl9pZF0uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEV2ZW50VGFyZ2V0IEFQSVxuICAgICAgICBnZXQgb25tZXNzYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9ubWVzc2FnZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEub25tZXNzYWdlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oLypldmVudCovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuZGlzcGF0Y2hFdmVudC5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgPSBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCB8fCBCcm9hZGNhc3RDaGFubmVsO1xufSkoc2VsZik7XG4iLCAie1xuXHRcImVsZW1lbnRJZFwiOiBcImdhZGdldC1lYXN5X2FyY2hpdmVcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Y3JlYXRlQXBwLCByZWFjdGl2ZX0gZnJvbSAndnVlJztcbmltcG9ydCB7Z2V0U2V0dGluZ3MsIGlmQXJjTG9jTm90QWxsb3dlZCwgaXNJbkJsYWNrbGlzdCwgaXNOb3RBbGxvd2VkLCBpc05vdFN1cHBvcnRlZH0gZnJvbSAnLi91dGlsL2dldFNldHRpbmdzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7Z2V0U2VjdGlvbnN9IGZyb20gJy4vdXRpbC9nZXRTZWN0aW9uJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5pbnRlcmZhY2UgU2VjdGlvbkxpbmsge1xuXHR0YXJnZXQ6IEhUTUxFbGVtZW50O1xuXHRpbmRleE5vOiBzdHJpbmc7XG5cdGFuY2hvcjogc3RyaW5nO1xuXHRhcmNoaXZlVG86IHN0cmluZztcblx0Y2FuQXJjaGl2ZTogYm9vbGVhbjtcblx0Y2FuRGVsZXRlOiBib29sZWFuO1xufVxuXG50eXBlIEZvb3Rlck5vdGljZVR5cGUgPSAnYmxhY2tsaXN0JyB8ICdub3RBbGxvd2VkJyB8ICdub0FyY0xvYycgfCAnYXJjTG9jTm90QWxsb3dlZCcgfCAnZW5hYmxlZCc7XG5cbmNvbnN0IGNyZWF0ZUZvb3RlclJvb3QgPSAobW91bnRQb2ludDogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaXNDaXRpemVuID0gc2tpbiA9PT0gJ2NpdGl6ZW4nO1xuXHRjb25zdCBpc0xpc3RJdGVtID0gWydnb25nYmknLCAndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKTtcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXNDaXRpemVuID8gJ3NlY3Rpb24nIDogaXNMaXN0SXRlbSA/ICdsaScgOiAnZGl2Jyk7XG5cblx0cm9vdC5pZCA9IE9QVElPTlMuZWxlbWVudElkO1xuXHRyb290LmNsYXNzTGlzdC5hZGQoJ2Vhc3ktYXJjaGl2ZS1mb290ZXItbm90aWNlJywgJ25vcHJpbnQnKTtcblx0aWYgKGlzQ2l0aXplbikge1xuXHRcdHJvb3QuY2xhc3NMaXN0LmFkZCgncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJyk7XG5cdH1cblx0bW91bnRQb2ludC5wcmVwZW5kKHJvb3QpO1xuXHRyZXR1cm4gcm9vdDtcbn07XG5cbmNvbnN0IGxvYWRFYXN5QXJjaGl2ZSA9ICgpOiB2b2lkID0+IHtcblx0aWYgKGlzTm90U3VwcG9ydGVkKCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBtb3VudFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoIW1vdW50UG9pbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgbm90aWNlVHlwZTogRm9vdGVyTm90aWNlVHlwZTtcblx0bGV0IGFyY0xvYyA9ICcnO1xuXHRsZXQgc2V0dGluZ3M6IFJldHVyblR5cGU8dHlwZW9mIGdldFNldHRpbmdzPiA9IG51bGw7XG5cblx0aWYgKGlzSW5CbGFja2xpc3QoKSkge1xuXHRcdG5vdGljZVR5cGUgPSAnYmxhY2tsaXN0Jztcblx0fSBlbHNlIGlmIChpc05vdEFsbG93ZWQoKSkge1xuXHRcdG5vdGljZVR5cGUgPSAnbm90QWxsb3dlZCc7XG5cdH0gZWxzZSB7XG5cdFx0c2V0dGluZ3MgPSBnZXRTZXR0aW5ncygpO1xuXHRcdGlmICghc2V0dGluZ3M/LmFyY0xvYykge1xuXHRcdFx0bm90aWNlVHlwZSA9ICdub0FyY0xvYyc7XG5cdFx0fSBlbHNlIGlmIChpZkFyY0xvY05vdEFsbG93ZWQoc2V0dGluZ3MuYXJjTG9jKSkge1xuXHRcdFx0bm90aWNlVHlwZSA9ICdhcmNMb2NOb3RBbGxvd2VkJztcblx0XHRcdGFyY0xvYyA9IHNldHRpbmdzLmFyY0xvYztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm90aWNlVHlwZSA9ICdlbmFibGVkJztcblx0XHRcdGFyY0xvYyA9IHNldHRpbmdzLmFyY0xvYztcblx0XHR9XG5cdH1cblxuXHRjb25zdCBzZWN0aW9uTGlua3MgPSByZWFjdGl2ZTxTZWN0aW9uTGlua1tdPihbXSk7XG5cdGNvbnN0IGFwcCA9IGNyZWF0ZUFwcChBcHAsIHtcblx0XHRub3RpY2VUeXBlLFxuXHRcdGFyY0xvYyxcblx0XHRzZWN0aW9uTGlua3MsXG5cdH0pO1xuXHRhcHAubW91bnQoY3JlYXRlRm9vdGVyUm9vdChtb3VudFBvaW50KSk7XG5cblx0aWYgKG5vdGljZVR5cGUgIT09ICdlbmFibGVkJyB8fCAhc2V0dGluZ3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHthcmNMZXZlbCwgc2VjQXJjLCBzZWNEZWx9ID0gc2V0dGluZ3M7XG5cdHZvaWQgZ2V0U2VjdGlvbnMod2dQYWdlTmFtZSlcblx0XHQudGhlbigoc2VjdGlvbnMpID0+IHtcblx0XHRcdGNvbnN0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaCR7YXJjTGV2ZWx9YCk7XG5cdFx0XHRjb25zdCBoZWFkbGluZUlkcyA9IG5ldyBTZXQoXG5cdFx0XHRcdFsuLi5oZWFkaW5nc11cblx0XHRcdFx0XHQubWFwKChoZWFkaW5nKSA9PiBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcubXctaGVhZGxpbmUnKT8uaWQpXG5cdFx0XHRcdFx0LmZpbHRlcigoaWQpOiBpZCBpcyBzdHJpbmcgPT4gQm9vbGVhbihpZCkpXG5cdFx0XHQpO1xuXG5cdFx0XHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRcdFx0aWYgKHNlY3Rpb24ubGV2ZWwgIT09IGFyY0xldmVsIHx8ICFoZWFkbGluZUlkcy5oYXMoc2VjdGlvbi5hbmNob3IpKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb24uYW5jaG9yKTtcblx0XHRcdFx0Y29uc3QgZWRpdFNlY3Rpb24gPSBoZWFkbGluZT8ucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdFx0XHRpZiAoIWVkaXRTZWN0aW9uKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzZWN0aW9uTGlua3MucHVzaCh7XG5cdFx0XHRcdFx0dGFyZ2V0OiBlZGl0U2VjdGlvbixcblx0XHRcdFx0XHRpbmRleE5vOiBzZWN0aW9uLmluZGV4LFxuXHRcdFx0XHRcdGFuY2hvcjogc2VjdGlvbi5hbmNob3IsXG5cdFx0XHRcdFx0YXJjaGl2ZVRvOiBhcmNMb2MsXG5cdFx0XHRcdFx0Y2FuQXJjaGl2ZTogc2VjQXJjID09PSAnMScsXG5cdFx0XHRcdFx0Y2FuRGVsZXRlOiBzZWNEZWwgPT09ICcxJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdFYXN5QXJjaGl2ZSBmYWlsZWQgdG8gbG9hZCBzZWN0aW9ucycsIGVycm9yKTtcblx0XHRcdHRvYXN0aWZ5KHt0ZXh0OiBnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgb3BlcmF0aW9uIGZhaWxlZCcpLCBjbG9zZTogdHJ1ZX0sICdlcnJvcicpO1xuXHRcdH0pO1xufTtcblxuZXhwb3J0IHtsb2FkRWFzeUFyY2hpdmV9O1xuIiwgImNvbnN0IGlmQXJjTG9jTm90QWxsb3dlZCA9IChhcmNMb2M6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNvdXJjZVRpdGxlID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpO1xuXHRjb25zdCBhcmNMb2NUaXRsZSA9IG5ldyBtdy5UaXRsZShhcmNMb2MpO1xuXG5cdGNvbnN0IGFyY0xvY05hbWVzcGFjZUlkID0gYXJjTG9jVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3QgYXJjTG9jUGFnZU5hbWUgPSBhcmNMb2NUaXRsZS5nZXRNYWluKCk7XG5cdGNvbnN0IHNvdXJjZU5hbWVzcGFjZUlkID0gc291cmNlVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3Qgc291cmNlUGFnZU5hbWUgPSBzb3VyY2VUaXRsZS5nZXRNYWluKCk7XG5cblx0aWYgKGFyY0xvY05hbWVzcGFjZUlkID09PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoYXJjTG9jTmFtZXNwYWNlSWQgPT09IHNvdXJjZU5hbWVzcGFjZUlkICYmIGFyY0xvY1BhZ2VOYW1lID09PSBzb3VyY2VQYWdlTmFtZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNJbkJsYWNrbGlzdCA9ICgpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGJsYWNrTGlzdFJlZ2V4QXJyID0gW1xuXHRcdC9eRmlsZTouKiQvLFxuXHRcdC9eTWVkaWFXaWtpOi4qJC8sXG5cdFx0L15Nb2R1bGU6LiokLyxcblx0XHQvXkNhdGVnb3J5Oi4qJC8sXG5cdFx0L15UZW1wbGF0ZTouKiQvLFxuXHRcdC9eU3BlY2lhbDouKiQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuY3NzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja0xpc3RSZWdleEFycikge1xuXHRcdGlmIChlbGVtZW50LnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzTm90QWxsb3dlZCA9ICgpID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1JlbGV2YW50VXNlck5hbWUsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICgod2dOYW1lc3BhY2VOdW1iZXIgPT09IDIgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDMpICYmICEod2dSZWxldmFudFVzZXJOYW1lID09PSB3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNOb3RTdXBwb3J0ZWQgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0lzTWFpblBhZ2UsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z0N1clJldmlzaW9uSWQsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCB8fCB3Z0N1clJldmlzaW9uSWQgLSB3Z1JldmlzaW9uSWQgIT09IDApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCB8fCB3Z0lzTWFpblBhZ2UpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGdldFNldHRpbmdzID0gKCkgPT4ge1xuXHRjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cdGlmICghc2V0dGluZ3MpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHtkYXRhc2V0fSA9IHNldHRpbmdzO1xuXHRjb25zdCB7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9ID0gZGF0YXNldDtcblx0cmV0dXJuIHtcblx0XHRhcmNMZXZlbDogYXJjTGV2ZWwgPz8gJzInLFxuXHRcdGFyY0xvYzogYXJjTG9jID8/ICcnLFxuXHRcdHNlY0FyYzogc2VjQXJjID8/ICcxJyxcblx0XHRzZWNEZWw6IHNlY0RlbCA/PyAnMScsXG5cdH07XG59O1xuXG5leHBvcnQge2dldFNldHRpbmdzLCBpZkFyY0xvY05vdEFsbG93ZWQsIGlzSW5CbGFja2xpc3QsIGlzTm90QWxsb3dlZCwgaXNOb3RTdXBwb3J0ZWR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgRWFzeUFyY2hpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZXRTZWN0aW9ucyA9IGFzeW5jICh0aXRsZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwYWdlOiB0aXRsZSxcblx0XHRwcm9wOiAnc2VjdGlvbnMnLFxuXHR9O1xuXG5cdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdGNvbnN0IHtzZWN0aW9uc30gPSBwYXJzZSBhcyB7XG5cdFx0c2VjdGlvbnM6IHtcblx0XHRcdGxldmVsOiBzdHJpbmc7XG5cdFx0XHRpbmRleDogc3RyaW5nO1xuXHRcdFx0YW5jaG9yOiBzdHJpbmc7XG5cdFx0fVtdO1xuXHR9O1xuXG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gW107XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0Y29uc3Qge2xldmVsLCBpbmRleCwgYW5jaG9yfSA9IHNlY3Rpb247XG5cblx0XHRpZiAoaW5kZXguc3RhcnRzV2l0aCgnVC0nKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0c2VjdGlvbnNUb0FyY2hpdmVbc2VjdGlvbnNUb0FyY2hpdmUubGVuZ3RoXSA9IHtcblx0XHRcdGxldmVsLFxuXHRcdFx0aW5kZXgsXG5cdFx0XHRhbmNob3IsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBzZWN0aW9uc1RvQXJjaGl2ZTtcbn07XG5cbmNvbnN0IGdldFNlY3Rpb25Db250ZW50ID0gYXN5bmMgKHt0aXRsZSwgc2VjdGlvbn06IHt0aXRsZTogc3RyaW5nOyBzZWN0aW9uOiBzdHJpbmd9KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdHJ2c2VjdGlvbjogc2VjdGlvbixcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdH07XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIChyZXNwb25zZVsncXVlcnknXS5wYWdlc1swXT8ucmV2aXNpb25zPy5bMF0uc2xvdHMubWFpbi5jb250ZW50IGFzIHN0cmluZykgPz8gbnVsbDtcbn07XG5cbmV4cG9ydCB7Z2V0U2VjdGlvbnMsIGdldFNlY3Rpb25Db250ZW50fTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QXJjaGl2ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIGxvY2F0aW9uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlIGxvY2F0aW9uOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5Zyw5Z2A77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOiHs++8micsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBvZiB0aGlzIHBhZ2UsIFwiJDFcIiwgYnV0IEVhc3kgYXJjaGl2ZSBjYW5ub3Qgb3BlcmF0ZSBsaWtlIHRoaXMuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouebruWJjeeahOWtmOaho+WcsOWdgOaYr+KAnCQx4oCd44CCRWFzeSBBcmNoaXZlIOaXoOazleaMieatpOWcsOWdgOWtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLnlbbliY3nmoTlrZjmqpTlnLDlnYDmmK/jgIwkMeOAjeOAgkVhc3kgQXJjaGl2ZSDnhKHms5XmjInmraTlnLDlnYDlrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkIGRldGFpbHMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmVzIHNob3VsZCBub3QgYmUgbm9ybWFsbHkgZGlyZWN0ZWQgdG8gcGFnZXMgdW5kZXIgYXJ0aWNsZSBuYW1lc3BhY2UuIFBsZWFzZSBjaGVjayBpZiB5b3UgaGF2ZSB0aGUgY29ycmVjdCBhcmNoaXZlIGxvY2F0aW9uLicsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDoiKzogIzoqIDvvIzkuI3lupTlkJHmnaHnm67lkI3np7Dnqbrpl7Tov5vooYzlrZjmoaPjgILmraTlpJbvvIzlrZjmoaPlnLDlnYDkuI3lvpflkozmraTpobXpnaLlkI3np7Dnm7jlkIzjgILor7fmo4Dmn6XlrZjmoaPlnLDlnYDjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA6Iis6ICM6KiA77yM5LiN5oeJ5ZCR5qKd55uu5ZCN56ix56m66ZaT6YCy6KGM5a2Y5qqU44CC5q2k5aSW77yM5a2Y5qqU5Zyw5Z2A5LiN5b6X5ZKM5q2k6aCB6Z2i5ZCN56ix55u45ZCM44CC6KuL5qqi5p+l5a2Y5qqU5Zyw5Z2A44CCJyxcblx0XHR9KSxcblx0XHRBcmNoaXZpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2aW5nJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+S4rScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTkuK0nLFxuXHRcdH0pLFxuXHRcdEFyY2hpdmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflt7LlrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdFZGl0IENvbmZpbGljdCBOb3RpY2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBoYXZlIGFscmVhZHkgYXJjaGl2ZWQgYW5kL29yIGRlbGV0ZWQgYSBzZWN0aW9uIG9uIHRoaXMgcGFnZS4gUGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2UgYW5kIGNvbnRpbnVlIGFyY2hpdmluZyBvciBkZWxldGluZyBvdGhlciBzZWN0aW9ucyB0byBhdm9pZCBlZGl0aW5nIGNvbmZsaWN0cy4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo5bey57uP5Zyo5pys6aG16Z2i5omn6KGM5LqG5a2Y5qGj44CB5Yig6Zmk56ug6IqC55qE5pON5L2c44CC6K+35Yi35paw6aG16Z2i77yM54S25ZCO57un57ut5a2Y5qGj44CB5Yig6Zmk5pys6aG16Z2i55qE5YW25LuW56ug6IqC77yM5Lul6YG/5YWN57yW6L6R5Yay56qB44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOW3sue2k+WcqOacrOmggemdouWft+ihjOS6huWtmOaqlOOAgeWIqumZpOeroOevgOeahOaTjeS9nOOAguiri+WIt+aWsOmggemdou+8jOeEtuW+jOe5vOe6jOWtmOaqlOOAgeWIqumZpOacrOmggemdoueahOWFtuS7lueroOevgO+8jOS7pemBv+WFjee3qOi8r+ihneeqgeOAgicsXG5cdFx0fSksXG5cdFx0RGVsZXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZScsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHREZWxldGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdEZWxldGluZycsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5LitJyxcblx0XHR9KSxcblx0XHREZWxldGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWIqumZpCcsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+auteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdCdDcmVhdGUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnY3JlYXRlIGFyY2hpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bu656uL5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W7uueri+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0RlbGV0ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5q616JC9Jyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIGVuYWJsZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBlbmFibGVkIG9uIHRoaXMgdGFsayBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acrOiuqOiuuumhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBhbGxvd2VkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgY2Fubm90IHVzZSBFYXN5IEFyY2hpdmUgdG8gYXJjaGl2ZSB0aHJlYWRzIG9uIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oKo5LiN5Y+v5Lul5Zyo5q2k6aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo5LiN5Y+v5Lul5Zyo5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCBkZXRhaWxzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGVzZSBwYWdlcyBhcmUgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmU6IEFydGljbGUsIEZpbGUsIFRlbXBsYXRlLCBNb2R1bGUsIE1lZGlhV2lraSwgQ2F0ZWdvcnksIFNwZWNpYWwsIEphdmFTY3JpcHQsIENTUywgSlNPTi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6L+Z5Lqb6aG16Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJrmnaHnm67jgIFGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfpgJnkupvpoIHpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8muaineebru+8jEZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG9wZXJhdGlvbiBmYWlsZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBjb3VsZCBub3QgY29tcGxldGUgdGhlIG9wZXJhdGlvbi4gUGxlYXNlIGNoZWNrIHRoZSBicm93c2VyIGNvbnNvbGUgYW5kIHJlZnJlc2ggYmVmb3JlIHRyeWluZyBhZ2Fpbi4nLFxuXHRcdFx0J3poLWhhbnMnOiAnRWFzeSBBcmNoaXZlIOaXoOazleWujOaIkOaTjeS9nOOAguivt+ajgOafpea1j+iniOWZqOaOp+WItuWPsO+8jOW5tuWcqOmHjeivleWJjeWIt+aWsOmhtemdouOAgicsXG5cdFx0XHQnemgtaGFudCc6ICdFYXN5IEFyY2hpdmUg54Sh5rOV5a6M5oiQ5pON5L2c44CC6KuL5qqi5p+l54CP6Ka95Zmo5Li75o6n5Y+w77yM5Lim5Zyo6YeN6Kmm5YmN6YeN5paw5pW055CG6aCB6Z2i44CCJyxcblx0XHR9KSxcblx0XHQnTm8gQXJjaGl2ZSBMb2NhdGlvbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGNhbiBiZSB1c2VkIG9uIHRoaXMgcGFnZSBpZiBuZWVkZWQuIFRvIGVuYWJsZSBpdCwgYWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRlbXBsYXRlIHRvIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6Iul6ZyA6KaB77yM5q2k6aG16Z2i5Y+v5Lul5ZCv55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzor7flnKjpobXpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5L2N572ufX3jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn6Iul6ZyA6KaB77yM5q2k6aCB6Z2i5Y+v5Lul5ZWf55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzoq4vlnKjpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdCdTZWN0aW9uICQxJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZWN0aW9uICQxJyxcblx0XHRcdHpoOiAn56ysICQxIOeroOiKgicsXG5cdFx0fSksXG5cdFx0JygnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHQnKSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKScsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0Jy4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHRcdCc6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc6ICcsXG5cdFx0XHR6aDogJ++8micsXG5cdFx0fSksXG5cdFx0UmVmcmVzaDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWZyZXNoIHRoZSBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIt+aWsOW9k+WJjemhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfph43mlrDovInlhaXnlbbliY3poIEnLFxuXHRcdH0pLFxuXHRcdFJlZnJlc2hpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVmcmVzaGluZy4uLicsXG5cdFx0XHRqYTogJ+WGjeiqreOBv+i+vOOBv+OBl+OBvuOBmS4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfljbPlsIbliLfmlrDlvZPliY3pobXpnaLigKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Y2z5bCH6YeN5paw6LyJ5YWl55W25YmN6aCB4oCm4oCmJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRTZWN0aW9uQ29udGVudCwgZ2V0U2VjdGlvbnN9IGZyb20gJy4vZ2V0U2VjdGlvbic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgaXNQYWdlRXhpc3QgPSBhc3luYyAoYXJjaGl2ZVRvOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW5mbycsXG5cdFx0dGl0bGVzOiBhcmNoaXZlVG8sXG5cdH07XG5cblx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRpZiAocXVlcnkucGFnZXNbMF0/Lm1pc3NpbmcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IGlzU2VjdGlvbkV4aXN0ID0gYXN5bmMgKHtpbmRleCwgYW5jaG9yfToge2luZGV4OiBzdHJpbmc7IGFuY2hvcjogc3RyaW5nfSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25zID0gYXdhaXQgZ2V0U2VjdGlvbnMod2dQYWdlTmFtZSk7XG5cblx0bGV0IGlzRXhpc3QgPSBmYWxzZTtcblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0aWYgKGluZGV4ID09PSBzZWN0aW9uLmluZGV4ICYmIGFuY2hvciA9PT0gc2VjdGlvbi5hbmNob3IpIHtcblx0XHRcdGlzRXhpc3QgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gaXNFeGlzdDtcbn07XG5cbmNvbnN0IHJlbW92ZVNlY3Rpb24gPSBhc3luYyAoe2luZGV4LCBhbmNob3IsIHN1bW1hcnl9OiB7aW5kZXg6IHN0cmluZzsgYW5jaG9yOiBzdHJpbmc7IHN1bW1hcnk/OiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaXNFeGlzdCA9IGF3YWl0IGlzU2VjdGlvbkV4aXN0KHtpbmRleCwgYW5jaG9yfSk7XG5cblx0aWYgKGlzRXhpc3QgIT09IHRydWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0U2VjdGlvbkNvbnRlbnQoe3RpdGxlOiB3Z1BhZ2VOYW1lLCBzZWN0aW9uOiBpbmRleH0pO1xuXG5cdGlmIChjb250ZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXdhaXQgYXBpLmVkaXQod2dQYWdlTmFtZSwgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZWN0aW9uOiBpbmRleCxcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0c3VtbWFyeTogc3VtbWFyeSA/PyBnZXRNZXNzYWdlKCdEZWxldGUgc3VtbWFyeScpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG59O1xuXG5jb25zdCBhcmNoaXZlU2VjdGlvbiA9IGFzeW5jICh7aW5kZXgsIGFuY2hvciwgYXJjaGl2ZVRvfToge2luZGV4OiBzdHJpbmc7IGFuY2hvcjogc3RyaW5nOyBhcmNoaXZlVG86IHN0cmluZ30pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpc0V4aXN0ID0gYXdhaXQgaXNTZWN0aW9uRXhpc3Qoe2luZGV4LCBhbmNob3J9KTtcblxuXHRpZiAoaXNFeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh7dGl0bGU6IHdnUGFnZU5hbWUsIHNlY3Rpb246IGluZGV4fSk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwYWdlRXhpc3QgPSBhd2FpdCBpc1BhZ2VFeGlzdChhcmNoaXZlVG8pO1xuXHRpZiAoIXBhZ2VFeGlzdCkge1xuXHRcdGF3YWl0IGFwaS5jcmVhdGUoXG5cdFx0XHRhcmNoaXZlVG8sXG5cdFx0XHR7XG5cdFx0XHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0NyZWF0ZSBzdW1tYXJ5JyksXG5cdFx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdCd7e3RhbGthcmNoaXZlfX0nXG5cdFx0KTtcblx0fVxuXG5cdGF3YWl0IGFwaS5lZGl0KGFyY2hpdmVUbywgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhcHBlbmR0ZXh0OiBgXFxuXFxuJHtjb250ZW50fWAsXG5cdFx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdBcmNoaXZlIHN1bW1hcnknKSxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xuXG5cdGF3YWl0IHJlbW92ZVNlY3Rpb24oe2luZGV4LCBhbmNob3IsIHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0FyY2hpdmUgc3VtbWFyeScpfSk7XG59O1xuXG5leHBvcnQge2lzU2VjdGlvbkV4aXN0LCBhcmNoaXZlU2VjdGlvbiwgcmVtb3ZlU2VjdGlvbn07XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7YXJjaGl2ZVNlY3Rpb24sIHJlbW92ZVNlY3Rpb259IGZyb20gJy4vdXRpbC9lZGl0U2VjdGlvbic7XG5pbXBvcnQge2NvbXB1dGVkLCBjcmVhdGVBcHAsIG9uQmVmb3JlVW5tb3VudCwgb25Nb3VudGVkLCByZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldEFyY2hpdmVkTWVzc2FnZSwgZ2V0QXJjaGl2aW5nTWVzc2FnZSwgZ2V0RGVsZXRlZE1lc3NhZ2UsIGdldERlbGV0aW5nTWVzc2FnZX0gZnJvbSAnLi91dGlsL2dldE1lc3NhZ2UnO1xuaW1wb3J0IHtDZHhCdXR0b259IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IENvbmZsaWN0Tm90aWNlIGZyb20gJy4vY29tcG9uZW50cy9Db25mbGljdE5vdGljZS52dWUnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtyZWZyZXNofSBmcm9tICcuL3V0aWwvcmVmcmVzaFBhZ2UnO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmludGVyZmFjZSBTZWN0aW9uTGluayB7XG5cdHRhcmdldDogSFRNTEVsZW1lbnQ7XG5cdGluZGV4Tm86IHN0cmluZztcblx0YW5jaG9yOiBzdHJpbmc7XG5cdGFyY2hpdmVUbzogc3RyaW5nO1xuXHRjYW5BcmNoaXZlOiBib29sZWFuO1xuXHRjYW5EZWxldGU6IGJvb2xlYW47XG59XG5cbnR5cGUgRm9vdGVyTm90aWNlVHlwZSA9ICdibGFja2xpc3QnIHwgJ25vdEFsbG93ZWQnIHwgJ25vQXJjTG9jJyB8ICdhcmNMb2NOb3RBbGxvd2VkJyB8ICdlbmFibGVkJztcbnR5cGUgU2VjdGlvbkFjdGlvbiA9ICdhcmNoaXZlJyB8ICdkZWxldGUnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0bm90aWNlVHlwZTogRm9vdGVyTm90aWNlVHlwZTtcblx0YXJjTG9jOiBzdHJpbmc7XG5cdHNlY3Rpb25MaW5rczogU2VjdGlvbkxpbmtbXTtcbn0+KCk7XG5cbmNvbnN0IGFyY2hpdmVVcmwgPSBjb21wdXRlZCgoKSA9PiBtdy51dGlsLmdldFVybChwcm9wcy5hcmNMb2MpKTtcbmNvbnN0IHNob3dTZWN0aW9uTGlua3MgPSByZWYodHJ1ZSk7XG5jb25zdCB3b3JraW5nU2VjdGlvbiA9IHJlZjxTZWN0aW9uTGluaz4oKTtcbmNvbnN0IHdvcmtpbmdBY3Rpb24gPSByZWY8U2VjdGlvbkFjdGlvbj4oKTtcbmNvbnN0IGFjdGlvbkZhaWxlZCA9IHJlZihmYWxzZSk7XG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtoaWRlVG9hc3Q6ICgpID0+IHt9fTtcbmxldCBjb25mbGljdEFwcDogUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlQXBwPiB8IHVuZGVmaW5lZDtcbmxldCBjb25mbGljdFJvb3Q6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkO1xuXG5jb25zdCBoaWRlVG9hc3QgPSAoKTogdm9pZCA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdGNvbmZsaWN0QXBwPy51bm1vdW50KCk7XG5cdGNvbmZsaWN0QXBwID0gdW5kZWZpbmVkO1xuXHRjb25mbGljdFJvb3Q/LnJlbW92ZSgpO1xuXHRjb25mbGljdFJvb3QgPSB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCBzaG93VG9hc3QgPSAodGV4dDogc3RyaW5nLCB0eXBlOiAnaW5mbycgfCAnZXJyb3InID0gJ2luZm8nLCBkdXJhdGlvbiA9IC0xKTogdm9pZCA9PiB7XG5cdGhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoe3RleHQsIGNsb3NlOiB0cnVlLCBkdXJhdGlvbn0sIHR5cGUpO1xufTtcblxuY29uc3QgbWVzc2FnZUNoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChgJHttdy5jb25maWcuZ2V0KCkud2dQYWdlTmFtZX1fbWVzc2FnZWApO1xuY29uc3QgcmVmcmVzaENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChgJHttdy5jb25maWcuZ2V0KCkud2dQYWdlTmFtZX1fcmVmcmVzaGApO1xuXG5jb25zdCBvbk1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudDx1bmtub3duPik6IHZvaWQgPT4ge1xuXHRzaG93U2VjdGlvbkxpbmtzLnZhbHVlID0gZmFsc2U7XG5cdGlmICh0eXBlb2YgZXZlbnQuZGF0YSA9PT0gJ3N0cmluZycpIHtcblx0XHRzaG93VG9hc3QoZXZlbnQuZGF0YSwgJ2luZm8nLCAzICogMTAwMCk7XG5cdH1cbn07XG5cbmNvbnN0IG9uUmVmcmVzaE1lc3NhZ2UgPSAoKTogdm9pZCA9PiB7XG5cdGhpZGVUb2FzdCgpO1xuXHRjb25mbGljdFJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdGNvbmZsaWN0QXBwID0gY3JlYXRlQXBwKENvbmZsaWN0Tm90aWNlLCB7XG5cdFx0b25DbGljazogKCkgPT4ge1xuXHRcdFx0aGlkZVRvYXN0KCk7XG5cdFx0XHRyZWZyZXNoKCk7XG5cdFx0fSxcblx0fSk7XG5cdGNvbmZsaWN0QXBwLm1vdW50KGNvbmZsaWN0Um9vdCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeSh7bm9kZTogY29uZmxpY3RSb290LCBjbG9zZTogdHJ1ZSwgZHVyYXRpb246IC0xfSwgJ2luZm8nKTtcbn07XG5cbm9uTW91bnRlZCgoKSA9PiB7XG5cdG1lc3NhZ2VDaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuXHRyZWZyZXNoQ2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25SZWZyZXNoTWVzc2FnZSk7XG59KTtcblxub25CZWZvcmVVbm1vdW50KCgpID0+IHtcblx0bWVzc2FnZUNoYW5uZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSk7XG5cdHJlZnJlc2hDaGFubmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvblJlZnJlc2hNZXNzYWdlKTtcblx0bWVzc2FnZUNoYW5uZWwuY2xvc2UoKTtcblx0cmVmcmVzaENoYW5uZWwuY2xvc2UoKTtcblx0aGlkZVRvYXN0KCk7XG59KTtcblxuY29uc3QgcnVuU2VjdGlvbkFjdGlvbiA9IGFzeW5jIChzZWN0aW9uOiBTZWN0aW9uTGluaywgYWN0aW9uOiBTZWN0aW9uQWN0aW9uKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGlmICh3b3JraW5nU2VjdGlvbi52YWx1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHdvcmtpbmdTZWN0aW9uLnZhbHVlID0gc2VjdGlvbjtcblx0d29ya2luZ0FjdGlvbi52YWx1ZSA9IGFjdGlvbjtcblx0YWN0aW9uRmFpbGVkLnZhbHVlID0gZmFsc2U7XG5cdGNvbnN0IHBlbmRpbmdNZXNzYWdlID1cblx0XHRhY3Rpb24gPT09ICdhcmNoaXZlJyA/IGdldEFyY2hpdmluZ01lc3NhZ2Uoc2VjdGlvbi5pbmRleE5vKSA6IGdldERlbGV0aW5nTWVzc2FnZShzZWN0aW9uLmluZGV4Tm8pO1xuXHRtZXNzYWdlQ2hhbm5lbC5wb3N0TWVzc2FnZShwZW5kaW5nTWVzc2FnZSk7XG5cdHNob3dUb2FzdChwZW5kaW5nTWVzc2FnZSk7XG5cblx0dHJ5IHtcblx0XHRpZiAoYWN0aW9uID09PSAnYXJjaGl2ZScpIHtcblx0XHRcdGF3YWl0IGFyY2hpdmVTZWN0aW9uKHtcblx0XHRcdFx0aW5kZXg6IHNlY3Rpb24uaW5kZXhObyxcblx0XHRcdFx0YW5jaG9yOiBzZWN0aW9uLmFuY2hvcixcblx0XHRcdFx0YXJjaGl2ZVRvOiBzZWN0aW9uLmFyY2hpdmVUbyxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhd2FpdCByZW1vdmVTZWN0aW9uKHtpbmRleDogc2VjdGlvbi5pbmRleE5vLCBhbmNob3I6IHNlY3Rpb24uYW5jaG9yfSk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoYEVhc3lBcmNoaXZlIGZhaWxlZCB0byAke2FjdGlvbn0gc2VjdGlvbiAke3NlY3Rpb24uaW5kZXhOb31gLCBlcnJvcik7XG5cdFx0Y29uc3QgZmFpbHVyZU1lc3NhZ2UgPSBnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgb3BlcmF0aW9uIGZhaWxlZCcpO1xuXHRcdGFjdGlvbkZhaWxlZC52YWx1ZSA9IHRydWU7XG5cdFx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UoZmFpbHVyZU1lc3NhZ2UpO1xuXHRcdHNob3dUb2FzdChmYWlsdXJlTWVzc2FnZSwgJ2Vycm9yJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29tcGxldGVNZXNzYWdlID1cblx0XHRhY3Rpb24gPT09ICdhcmNoaXZlJyA/IGdldEFyY2hpdmVkTWVzc2FnZShzZWN0aW9uLmluZGV4Tm8pIDogZ2V0RGVsZXRlZE1lc3NhZ2Uoc2VjdGlvbi5pbmRleE5vKTtcblx0c2hvd1RvYXN0KGNvbXBsZXRlTWVzc2FnZSk7XG5cdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKGNvbXBsZXRlTWVzc2FnZSk7XG5cdHJlZnJlc2hDaGFubmVsLnBvc3RNZXNzYWdlKCdSZWZyZXNoJyk7XG5cdHJlZnJlc2goe3RvYXN0aWZ5SW5zdGFuY2V9KTtcbn07XG5cbmNvbnN0IGFyY2hpdmVMaW5rID0gKHNlY3Rpb246IFNlY3Rpb25MaW5rKTogdm9pZCA9PiB7XG5cdHZvaWQgcnVuU2VjdGlvbkFjdGlvbihzZWN0aW9uLCAnYXJjaGl2ZScpO1xufTtcblxuY29uc3QgZGVsZXRlTGluayA9IChzZWN0aW9uOiBTZWN0aW9uTGluayk6IHZvaWQgPT4ge1xuXHR2b2lkIHJ1blNlY3Rpb25BY3Rpb24oc2VjdGlvbiwgJ2RlbGV0ZScpO1xufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDx0ZW1wbGF0ZSB2LWlmPVwicHJvcHMubm90aWNlVHlwZSA9PT0gJ2JsYWNrbGlzdCdcIj5cblx0XHR7eyBnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCcpIH19PGJyIC8+e3sgZ2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQgZGV0YWlscycpIH19XG5cdDwvdGVtcGxhdGU+XG5cdDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJwcm9wcy5ub3RpY2VUeXBlID09PSAnbm90QWxsb3dlZCdcIj5cblx0XHR7eyBnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IGFsbG93ZWQnKSB9fVxuXHQ8L3RlbXBsYXRlPlxuXHQ8dGVtcGxhdGUgdi1lbHNlLWlmPVwicHJvcHMubm90aWNlVHlwZSA9PT0gJ25vQXJjTG9jJ1wiPlxuXHRcdHt7IGdldE1lc3NhZ2UoJ05vIEFyY2hpdmUgTG9jYXRpb24nKSB9fVxuXHQ8L3RlbXBsYXRlPlxuXHQ8dGVtcGxhdGUgdi1lbHNlLWlmPVwicHJvcHMubm90aWNlVHlwZSA9PT0gJ2FyY0xvY05vdEFsbG93ZWQnXCI+XG5cdFx0e3sgZ2V0TWVzc2FnZSgnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCcpLnJlcGxhY2UoJyQxJywgcHJvcHMuYXJjTG9jKSB9fTxiciAvPlxuXHRcdHt7IGdldE1lc3NhZ2UoJ0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQgZGV0YWlscycpIH19XG5cdDwvdGVtcGxhdGU+XG5cdDx0ZW1wbGF0ZSB2LWVsc2U+XG5cdFx0e3sgZ2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIGVuYWJsZWQnKSB9fXt7IGdldE1lc3NhZ2UoJygnKSB9fXt7IGdldE1lc3NhZ2UoJ0FyY2hpdmUgbG9jYXRpb24nKSB9fVxuXHRcdDxhIDp0aXRsZT1cInByb3BzLmFyY0xvY1wiIDpocmVmPVwiYXJjaGl2ZVVybFwiPnt7IHByb3BzLmFyY0xvYyB9fTwvYT5cblx0XHR7eyBnZXRNZXNzYWdlKCcpJykgfX17eyBnZXRNZXNzYWdlKCcuJykgfX1cblx0PC90ZW1wbGF0ZT5cblxuXHQ8VGVsZXBvcnQgdi1mb3I9XCJzZWN0aW9uIGluIHByb3BzLnNlY3Rpb25MaW5rc1wiIDprZXk9XCJzZWN0aW9uLmluZGV4Tm9cIiA6dG89XCJzZWN0aW9uLnRhcmdldFwiPlxuXHRcdDxzcGFuIHYtaWY9XCJzaG93U2VjdGlvbkxpbmtzXCIgY2xhc3M9XCJnYWRnZXQtZWFzeV9hcmNoaXZlX19zZWN0aW9uLWlkXCI+XG5cdFx0XHQ8Y2R4LWJ1dHRvblxuXHRcdFx0XHR2LWlmPVwic2VjdGlvbi5jYW5BcmNoaXZlXCJcblx0XHRcdFx0Y2xhc3M9XCJnYWRnZXQtZWFzeV9hcmNoaXZlX19idXR0b25cIlxuXHRcdFx0XHR3ZWlnaHQ9XCJxdWlldFwiXG5cdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRzaXplPVwic21hbGxcIlxuXHRcdFx0XHQ6ZGlzYWJsZWQ9XCJCb29sZWFuKHdvcmtpbmdTZWN0aW9uKVwiXG5cdFx0XHRcdEBjbGljaz1cImFyY2hpdmVMaW5rKHNlY3Rpb24pXCJcblx0XHRcdD5cblx0XHRcdFx0e3sgZ2V0TWVzc2FnZSgnQXJjaGl2ZScpIH19XG5cdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0XHQ8c3BhbiB2LWlmPVwic2VjdGlvbi5jYW5BcmNoaXZlICYmIHNlY3Rpb24uY2FuRGVsZXRlXCIgY2xhc3M9XCJtdy1lZGl0c2VjdGlvbi1kaXZpZGVyXCI+fDwvc3Bhbj5cblx0XHRcdDxjZHgtYnV0dG9uXG5cdFx0XHRcdHYtaWY9XCJzZWN0aW9uLmNhbkRlbGV0ZVwiXG5cdFx0XHRcdGNsYXNzPVwiZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fYnV0dG9uXCJcblx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0YWN0aW9uPVwiZGVzdHJ1Y3RpdmVcIlxuXHRcdFx0XHQ6ZGlzYWJsZWQ9XCJCb29sZWFuKHdvcmtpbmdTZWN0aW9uKVwiXG5cdFx0XHRcdEBjbGljaz1cImRlbGV0ZUxpbmsoc2VjdGlvbilcIlxuXHRcdFx0PlxuXHRcdFx0XHR7eyBnZXRNZXNzYWdlKCdEZWxldGUnKSB9fVxuXHRcdFx0PC9jZHgtYnV0dG9uPlxuXHRcdFx0PHNwYW4gdi1pZj1cIndvcmtpbmdTZWN0aW9uPy5pbmRleE5vID09PSBzZWN0aW9uLmluZGV4Tm9cIj5cblx0XHRcdFx0e3tcblx0XHRcdFx0XHRhY3Rpb25GYWlsZWRcblx0XHRcdFx0XHRcdD8gZ2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG9wZXJhdGlvbiBmYWlsZWQnKVxuXHRcdFx0XHRcdFx0OiB3b3JraW5nQWN0aW9uID09PSAnYXJjaGl2ZSdcblx0XHRcdFx0XHRcdFx0PyBnZXRNZXNzYWdlKCdBcmNoaXZpbmcnKVxuXHRcdFx0XHRcdFx0XHQ6IGdldE1lc3NhZ2UoJ0RlbGV0aW5nJylcblx0XHRcdFx0fX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L3NwYW4+XG5cdDwvVGVsZXBvcnQ+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG46Z2xvYmFsKC52ZS1hY3RpdmF0ZWQgLmVhc3ktYXJjaGl2ZS1mb290ZXItbm90aWNlKSB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi5nYWRnZXQtZWFzeV9hcmNoaXZlX19zZWN0aW9uLWlkIHtcblx0Omdsb2JhbCguc2tpbi1jaXRpemVuKSAmIHtcblx0XHRmb250LXNpemU6IDAuODc1cmVtO1xuXHRcdG1hcmdpbjogMCAwLjVyZW07XG5cdH1cblxuXHQ6ZGVlcCguZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fYnV0dG9uKSB7XG5cdFx0Zm9udC1zaXplOiBpbmhlcml0O1xuXHRcdG1hcmdpbjogMCAwLjI1ZW07XG5cdFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuXHR9XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdldEFyY2hpdmluZ01lc3NhZ2UgPSAoaW5kZXhObzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBnZXRNZXNzYWdlKCdBcmNoaXZpbmcnKSArIGdldE1lc3NhZ2UoJzonKSArIGdldE1lc3NhZ2UoJ1NlY3Rpb24gJDEnKS5yZXBsYWNlKCckMScsIGluZGV4Tm8pO1xufTtcblxuY29uc3QgZ2V0QXJjaGl2ZWRNZXNzYWdlID0gKGluZGV4Tm86IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gZ2V0TWVzc2FnZSgnQXJjaGl2ZWQnKSArIGdldE1lc3NhZ2UoJzonKSArIGdldE1lc3NhZ2UoJ1NlY3Rpb24gJDEnKS5yZXBsYWNlKCckMScsIGluZGV4Tm8pO1xufTtcblxuY29uc3QgZ2V0RGVsZXRpbmdNZXNzYWdlID0gKGluZGV4Tm86IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gZ2V0TWVzc2FnZSgnRGVsZXRpbmcnKSArIGdldE1lc3NhZ2UoJzonKSArIGdldE1lc3NhZ2UoJ1NlY3Rpb24gJDEnKS5yZXBsYWNlKCckMScsIGluZGV4Tm8pO1xufTtcblxuY29uc3QgZ2V0RGVsZXRlZE1lc3NhZ2UgPSAoaW5kZXhObzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBnZXRNZXNzYWdlKCdEZWxldGVkJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcbn07XG5cbmV4cG9ydCB7Z2V0QXJjaGl2aW5nTWVzc2FnZSwgZ2V0QXJjaGl2ZWRNZXNzYWdlLCBnZXREZWxldGluZ01lc3NhZ2UsIGdldERlbGV0ZWRNZXNzYWdlfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhCdXR0b259IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59PigpO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PHNwYW4+XG5cdFx0e3sgZ2V0TWVzc2FnZSgnRWRpdCBDb25maWxpY3QgTm90aWNlJykgfX1cblx0XHQ8Y2R4LWJ1dHRvbiB3ZWlnaHQ9XCJxdWlldFwiIHR5cGU9XCJidXR0b25cIiBzaXplPVwic21hbGxcIiBAY2xpY2s9XCJwcm9wcy5vbkNsaWNrXCI+XG5cdFx0XHR7eyBnZXRNZXNzYWdlKCdSZWZyZXNoJykgfX1cblx0XHQ8L2NkeC1idXR0b24+XG5cdDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInNwYW5cIiwgbnVsbCwgW1xuICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnRWRpdCBDb25maWxpY3QgTm90aWNlJykpICsgXCIgXCIsIDEgLyogVEVYVCAqLyksXG4gICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgICAgb25DbGljazogJHNldHVwLnByb3BzLm9uQ2xpY2tcbiAgICB9LCB7XG4gICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnUmVmcmVzaCcpKSwgMSAvKiBURVhUICovKVxuICAgICAgXSksXG4gICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIm9uQ2xpY2tcIl0pXG4gIF0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEVhc3lBcmNoaXZlXFxcXG1vZHVsZXNcXFxcY29tcG9uZW50c1xcXFxDb25mbGljdE5vdGljZS52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxFYXN5QXJjaGl2ZVxcXFxtb2R1bGVzXFxcXGNvbXBvbmVudHNcXFxcQ29uZmxpY3ROb3RpY2UudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcRWFzeUFyY2hpdmVcXFxcbW9kdWxlc1xcXFxjb21wb25lbnRzXFxcXENvbmZsaWN0Tm90aWNlLnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCByZWZyZXNoID0gKHtcblx0dGFyZ2V0UGFnZSxcblx0dG9hc3RpZnlJbnN0YW5jZSxcbn06IHt0YXJnZXRQYWdlPzogc3RyaW5nOyB0b2FzdGlmeUluc3RhbmNlPzogVG9hc3RpZnlJbnN0YW5jZX0gPSB7fSk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlIHx8PSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1JlZnJlc2hpbmcnKSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdGlmICh0YXJnZXRQYWdlKSB7XG5cdFx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybCh0YXJnZXRQYWdlKSk7XG5cdH0gZWxzZSB7XG5cdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cmVmcmVzaH07XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIFRlbGVwb3J0IGFzIF9UZWxlcG9ydCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0gW1widGl0bGVcIiwgXCJocmVmXCJdXG5jb25zdCBfaG9pc3RlZF8yID0ge1xuICBrZXk6IDAsXG4gIGNsYXNzOiBcImdhZGdldC1lYXN5X2FyY2hpdmVfX3NlY3Rpb24taWRcIlxufVxuY29uc3QgX2hvaXN0ZWRfMyA9IHtcbiAga2V5OiAxLFxuICBjbGFzczogXCJtdy1lZGl0c2VjdGlvbi1kaXZpZGVyXCJcbn1cbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGtleTogMyB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgW1xuICAgICgkc2V0dXAucHJvcHMubm90aWNlVHlwZSA9PT0gJ2JsYWNrbGlzdCcpXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCB7IGtleTogMCB9LCBbXG4gICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCcpKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9IF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJiclwiLCBudWxsLCBudWxsLCAtMSAvKiBDQUNIRUQgKi8pKSxcbiAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkIGRldGFpbHMnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgXSwgNjQgLyogU1RBQkxFX0ZSQUdNRU5UICovKSlcbiAgICAgIDogKCRzZXR1cC5wcm9wcy5ub3RpY2VUeXBlID09PSAnbm90QWxsb3dlZCcpXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIHsga2V5OiAxIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBhbGxvd2VkJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgXSwgNjQgLyogU1RBQkxFX0ZSQUdNRU5UICovKSlcbiAgICAgICAgOiAoJHNldHVwLnByb3BzLm5vdGljZVR5cGUgPT09ICdub0FyY0xvYycpXG4gICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgeyBrZXk6IDIgfSwgW1xuICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ05vIEFyY2hpdmUgTG9jYXRpb24nKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgIF0sIDY0IC8qIFNUQUJMRV9GUkFHTUVOVCAqLykpXG4gICAgICAgICAgOiAoJHNldHVwLnByb3BzLm5vdGljZVR5cGUgPT09ICdhcmNMb2NOb3RBbGxvd2VkJylcbiAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIHsga2V5OiAzIH0sIFtcbiAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQnKS5yZXBsYWNlKCckMScsICRzZXR1cC5wcm9wcy5hcmNMb2MpKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgICAgICBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9IF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJiclwiLCBudWxsLCBudWxsLCAtMSAvKiBDQUNIRUQgKi8pKSxcbiAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKFwiIFwiICsgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCBkZXRhaWxzJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgIF0sIDY0IC8qIFNUQUJMRV9GUkFHTUVOVCAqLykpXG4gICAgICAgICAgICA6IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCB7IGtleTogNCB9LCBbXG4gICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgZW5hYmxlZCcpKSArIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJygnKSkgKyBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdBcmNoaXZlIGxvY2F0aW9uJykpICsgXCIgXCIsIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImFcIiwge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICRzZXR1cC5wcm9wcy5hcmNMb2MsXG4gICAgICAgICAgICAgICAgICBocmVmOiAkc2V0dXAuYXJjaGl2ZVVybFxuICAgICAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnByb3BzLmFyY0xvYyksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzEpLFxuICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoXCIgXCIgKyBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCcpJykpICsgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnLicpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICBdLCA2NCAvKiBTVEFCTEVfRlJBR01FTlQgKi8pKSxcbiAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRzZXR1cC5wcm9wcy5zZWN0aW9uTGlua3MsIChzZWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UZWxlcG9ydCwge1xuICAgICAgICBrZXk6IHNlY3Rpb24uaW5kZXhObyxcbiAgICAgICAgdG86IHNlY3Rpb24udGFyZ2V0XG4gICAgICB9LCBbXG4gICAgICAgICgkc2V0dXAuc2hvd1NlY3Rpb25MaW5rcylcbiAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgICAgICAgKHNlY3Rpb24uY2FuQXJjaGl2ZSlcbiAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJnYWRnZXQtZWFzeV9hcmNoaXZlX19idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4oJHNldHVwLndvcmtpbmdTZWN0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogJGV2ZW50ID0+ICgkc2V0dXAuYXJjaGl2ZUxpbmsoc2VjdGlvbikpXG4gICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0FyY2hpdmUnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJkaXNhYmxlZFwiLCBcIm9uQ2xpY2tcIl0pKVxuICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgICAgICAgIChzZWN0aW9uLmNhbkFyY2hpdmUgJiYgc2VjdGlvbi5jYW5EZWxldGUpXG4gICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCBfaG9pc3RlZF8zLCBcInxcIikpXG4gICAgICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAgICAgICAgICAgKHNlY3Rpb24uY2FuRGVsZXRlKVxuICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IDIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImdhZGdldC1lYXN5X2FyY2hpdmVfX2J1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiZGVzdHJ1Y3RpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4oJHNldHVwLndvcmtpbmdTZWN0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogJGV2ZW50ID0+ICgkc2V0dXAuZGVsZXRlTGluayhzZWN0aW9uKSlcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnRGVsZXRlJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wiZGlzYWJsZWRcIiwgXCJvbkNsaWNrXCJdKSlcbiAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICAgICAgICAgICAoJHNldHVwLndvcmtpbmdTZWN0aW9uPy5pbmRleE5vID09PSBzZWN0aW9uLmluZGV4Tm8pXG4gICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCBfaG9pc3RlZF80LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5hY3Rpb25GYWlsZWRcblx0XHRcdFx0XHRcdD8gJHNldHVwLmdldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBvcGVyYXRpb24gZmFpbGVkJylcblx0XHRcdFx0XHRcdDogJHNldHVwLndvcmtpbmdBY3Rpb24gPT09ICdhcmNoaXZlJ1xuXHRcdFx0XHRcdFx0XHQ/ICRzZXR1cC5nZXRNZXNzYWdlKCdBcmNoaXZpbmcnKVxuXHRcdFx0XHRcdFx0XHQ6ICRzZXR1cC5nZXRNZXNzYWdlKCdEZWxldGluZycpKSwgMSAvKiBURVhUICovKSlcbiAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgICAgICAgICBdKSlcbiAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgICBdLCA4IC8qIFBST1BTICovLCBbXCJ0b1wiXSkpXG4gICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gIF0sIDY0IC8qIFNUQUJMRV9GUkFHTUVOVCAqLykpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcRWFzeUFyY2hpdmVcXFxcbW9kdWxlc1xcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxFYXN5QXJjaGl2ZVxcXFxtb2R1bGVzXFxcXEFwcC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcRWFzeUFyY2hpdmVcXFxcbW9kdWxlc1xcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcRWFzeUFyY2hpdmVcXFxcbW9kdWxlc1xcXFxBcHAudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LTRhYzNkM2QyXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQge2xvYWRFYXN5QXJjaGl2ZX0gZnJvbSAnLi9tb2R1bGVzL2xvYWRFYXN5QXJjaGl2ZSc7XG5cbihmdW5jdGlvbiBlYXN5QXJjaGl2ZSgpIHtcblx0bG9hZEVhc3lBcmNoaXZlKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxRQUFRO0FBQ2QsVUFBSSxXQUFXLENBQUM7QUFFaEIsZUFBU0Esa0JBQWlCLFNBQVM7QUFDL0IsWUFBSSxRQUFRO0FBQ1osa0JBQVUsT0FBTyxPQUFPO0FBRXhCLFlBQUksS0FBSyx1QkFBdUIsVUFBVTtBQUUxQyxpQkFBUyxFQUFFLElBQUksU0FBUyxFQUFFLEtBQUssQ0FBQztBQUNoQyxpQkFBUyxFQUFFLEVBQUUsS0FBSyxJQUFJO0FBRXRCLGFBQUssUUFBUTtBQUNiLGFBQUssTUFBTTtBQUNYLGFBQUssVUFBVTtBQUNmLGFBQUssTUFBTSxJQUFJLGVBQWU7QUFDOUIsYUFBSyxJQUFJLE1BQU0sTUFBTTtBQUNyQixhQUFLLElBQUksTUFBTSxNQUFNO0FBRXJCLGVBQU8saUJBQWlCLFdBQVcsU0FBUyxHQUFHO0FBQzNDLGNBQUksRUFBRSxnQkFBZ0IsT0FBTyxhQUFjO0FBQzNDLGNBQUksRUFBRSxZQUFZLFFBQVEsRUFBRSxhQUFhLEdBQUk7QUFDN0MsY0FBSSxFQUFFLElBQUksVUFBVSxHQUFHLEdBQUcsTUFBTSxNQUFNLEdBQUk7QUFDMUMsY0FBSSxPQUFPLEtBQUssTUFBTSxFQUFFLFFBQVE7QUFDaEMsZ0JBQU0sSUFBSSxNQUFN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QUFDaEQsTUFBTW5CLFdBQVcsK0JBQStCO01BQUd3RixPQUFPO0lBQUksR0FBRyxPQUFPO0VBQ25GLENBQUM7QUFDSDs7Q2MvR0MsU0FBUzBGLGNBQWM7QUFDdkJ2QixrQkFBZ0I7QUFDakIsR0FBRzsiLAogICJuYW1lcyI6IFsiQnJvYWRjYXN0Q2hhbm5lbCIsICJlbGVtZW50SWQiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X3Z1ZTYiLCAicmVxdWlyZSIsICJpZkFyY0xvY05vdEFsbG93ZWQiLCAiYXJjTG9jIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJzb3VyY2VUaXRsZSIsICJUaXRsZSIsICJhcmNMb2NUaXRsZSIsICJhcmNMb2NOYW1lc3BhY2VJZCIsICJnZXROYW1lc3BhY2VJZCIsICJhcmNMb2NQYWdlTmFtZSIsICJnZXRNYWluIiwgInNvdXJjZU5hbWVzcGFjZUlkIiwgInNvdXJjZVBhZ2VOYW1lIiwgImlzSW5CbGFja2xpc3QiLCAiYmxhY2tMaXN0UmVnZXhBcnIiLCAiX2kiLCAiX2JsYWNrTGlzdFJlZ2V4QXJyIiwgImxlbmd0aCIsICJlbGVtZW50IiwgInRlc3QiLCAiaXNOb3RBbGxvd2VkIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJ3Z1VzZXJOYW1lIiwgImlzTm90U3VwcG9ydGVkIiwgIndnSXNNYWluUGFnZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dSZXZpc2lvbklkIiwgImdldFNldHRpbmdzIiwgInNldHRpbmdzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZGF0YXNldCIsICJhcmNMZXZlbCIsICJzZWNBcmMiLCAic2VjRGVsIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImdldFNlY3Rpb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGUiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwYWdlIiwgInByb3AiLCAicGFyc2UiLCAic2VjdGlvbnMiLCAic2VjdGlvbnNUb0FyY2hpdmUiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInNlY3Rpb24iLCAidmFsdWUiLCAibGV2ZWwiLCAiaW5kZXgiLCAiYW5jaG9yIiwgInN0YXJ0c1dpdGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0U2VjdGlvbkNvbnRlbnQiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJHF1ZXJ5JHBhZ2VzIiwgIl9yZXNwb25zZSRxdWVyeSRwYWdlczIiLCAicnZwcm9wIiwgInRpdGxlcyIsICJydnNlY3Rpb24iLCAicnZzbG90cyIsICJyZXNwb25zZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgIl94MiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFyY2hpdmUiLCAibG9jYWxpemUiLCAiZW4iLCAiQXJjaGl2aW5nIiwgIkFyY2hpdmVkIiwgIkRlbGV0ZSIsICJEZWxldGluZyIsICJEZWxldGVkIiwgInpoIiwgIlJlZnJlc2giLCAiUmVmcmVzaGluZyIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaXNQYWdlRXhpc3QiLCAiX3JlZjMiLCAiYXJjaGl2ZVRvIiwgIl9xdWVyeSRwYWdlcyQiLCAicXVlcnkiLCAibWlzc2luZyIsICJfeDMiLCAiaXNTZWN0aW9uRXhpc3QiLCAiX3JlZjQiLCAiaXNFeGlzdCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJfeDQiLCAicmVtb3ZlU2VjdGlvbiIsICJfcmVmNSIsICJzdW1tYXJ5IiwgImVkaXQiLCAidGV4dCIsICJtaW5vciIsICJfeDUiLCAiYXJjaGl2ZVNlY3Rpb24iLCAiX3JlZjYiLCAicGFnZUV4aXN0IiwgImNyZWF0ZSIsICJhcHBlbmR0ZXh0IiwgIl94NiIsICJpbXBvcnRfdnVlNCIsICJnZXRBcmNoaXZpbmdNZXNzYWdlIiwgImluZGV4Tm8iLCAicmVwbGFjZSIsICJnZXRBcmNoaXZlZE1lc3NhZ2UiLCAiZ2V0RGVsZXRpbmdNZXNzYWdlIiwgImdldERlbGV0ZWRNZXNzYWdlIiwgImltcG9ydF9jb2RleDIiLCAiaW1wb3J0X2NvZGV4IiwgInByb3BzIiwgIl9fcHJvcHMiLCAiaW1wb3J0X3Z1ZTIiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJjcmVhdGVUZXh0Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgImNyZWF0ZVZOb2RlIiwgIndlaWdodCIsICJ0eXBlIiwgInNpemUiLCAib25DbGljayIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiXyIsICJDb25mbGljdE5vdGljZV9kZWZhdWx0IiwgIl9fZmlsZSIsICJDb25mbGljdE5vdGljZV9kZWZhdWx0MiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVmcmVzaCIsICJ0YXJnZXRQYWdlIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInV0aWwiLCAiZ2V0VXJsIiwgInJlbG9hZCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYXJjaGl2ZVVybCIsICJjb21wdXRlZCIsICJzaG93U2VjdGlvbkxpbmtzIiwgInJlZiIsICJ3b3JraW5nU2VjdGlvbiIsICJ3b3JraW5nQWN0aW9uIiwgImFjdGlvbkZhaWxlZCIsICJjb25mbGljdEFwcCIsICJjb25mbGljdFJvb3QiLCAiX2NvbmZsaWN0QXBwIiwgIl9jb25mbGljdFJvb3QiLCAidW5tb3VudCIsICJyZW1vdmUiLCAic2hvd1RvYXN0IiwgImNsb3NlIiwgIm1lc3NhZ2VDaGFubmVsIiwgIkJyb2FkY2FzdENoYW5uZWwiLCAicmVmcmVzaENoYW5uZWwiLCAib25NZXNzYWdlIiwgImV2ZW50IiwgImRhdGEiLCAib25SZWZyZXNoTWVzc2FnZSIsICJjcmVhdGVFbGVtZW50IiwgImNyZWF0ZUFwcCIsICJtb3VudCIsICJub2RlIiwgIm9uTW91bnRlZCIsICJhZGRFdmVudExpc3RlbmVyIiwgIm9uQmVmb3JlVW5tb3VudCIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgInJ1blNlY3Rpb25BY3Rpb24iLCAiX3JlZjciLCAicGVuZGluZ01lc3NhZ2UiLCAicG9zdE1lc3NhZ2UiLCAiZXJyb3IiLCAiY29uc29sZSIsICJmYWlsdXJlTWVzc2FnZSIsICJjb21wbGV0ZU1lc3NhZ2UiLCAiX3g3IiwgIl94OCIsICJhcmNoaXZlTGluayIsICJkZWxldGVMaW5rIiwgImltcG9ydF92dWU1IiwgIl9ob2lzdGVkXzEiLCAiX2hvaXN0ZWRfMiIsICJjbGFzcyIsICJfaG9pc3RlZF8zIiwgIl9ob2lzdGVkXzQiLCAicmVuZGVyMiIsICJGcmFnbWVudCIsICJub3RpY2VUeXBlIiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJocmVmIiwgInJlbmRlckxpc3QiLCAic2VjdGlvbkxpbmtzIiwgIl8kc2V0dXAkd29ya2luZ1NlY3RpbyIsICJjcmVhdGVCbG9jayIsICJUZWxlcG9ydCIsICJ0byIsICJ0YXJnZXQiLCAiY2FuQXJjaGl2ZSIsICJkaXNhYmxlZCIsICJCb29sZWFuIiwgIiRldmVudCIsICJjcmVhdGVDb21tZW50Vk5vZGUiLCAiY2FuRGVsZXRlIiwgIkFwcF9kZWZhdWx0IiwgIl9fc2NvcGVJZCIsICJBcHBfZGVmYXVsdDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImNyZWF0ZUZvb3RlclJvb3QiLCAibW91bnRQb2ludCIsICJza2luIiwgImlzQ2l0aXplbiIsICJpc0xpc3RJdGVtIiwgImluY2x1ZGVzIiwgInJvb3QiLCAiaWQiLCAiY2xhc3NMaXN0IiwgImFkZCIsICJwcmVwZW5kIiwgImxvYWRFYXN5QXJjaGl2ZSIsICJfc2V0dGluZ3MiLCAicmVhY3RpdmUiLCAiYXBwIiwgInRoZW4iLCAiaGVhZGluZ3MiLCAicXVlcnlTZWxlY3RvckFsbCIsICJoZWFkbGluZUlkcyIsICJTZXQiLCAibWFwIiwgImhlYWRpbmciLCAiX2hlYWRpbmckcXVlcnlTZWxlY3RvIiwgImZpbHRlciIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJfaGVhZGxpbmUkcGFyZW50RWxlbWUiLCAiaGFzIiwgImhlYWRsaW5lIiwgImdldEVsZW1lbnRCeUlkIiwgImVkaXRTZWN0aW9uIiwgInBhcmVudEVsZW1lbnQiLCAicHVzaCIsICJjYXRjaCIsICJlYXN5QXJjaGl2ZSJdCn0K
