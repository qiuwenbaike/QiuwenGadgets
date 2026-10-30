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
      type: null,
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
//! src/EasyArchive/modules/util/createFooterRoot.ts
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
//! src/EasyArchive/modules/loadEasyArchive.ts
var import_ext_gadget5 = require("ext.gadget.Toastify");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9sb2FkRWFzeUFyY2hpdmUudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9nZXRTZXR0aW5ncy50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2dldFNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2VkaXRTZWN0aW9uLnRzIiwgImRpc3QvRWFzeUFyY2hpdmUvc3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvQXBwLnZ1ZSIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2dldE1lc3NhZ2UudHMiLCAiZGlzdC9FYXN5QXJjaGl2ZS9zcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL0NvbmZsaWN0Tm90aWNlLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcRWFzeUFyY2hpdmVcXG1vZHVsZXNcXGNvbXBvbmVudHNcXENvbmZsaWN0Tm90aWNlLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2NvbXBvbmVudHMvQ29uZmxpY3ROb3RpY2UudnVlIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvcmVmcmVzaFBhZ2UudHMiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXEVhc3lBcmNoaXZlXFxtb2R1bGVzXFxBcHAudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvQXBwLnZ1ZSIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2NyZWF0ZUZvb3RlclJvb3QudHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgdmFyIGNoYW5uZWxzID0gW107XG5cbiAgICBmdW5jdGlvbiBCcm9hZGNhc3RDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgY2hhbm5lbCA9IFN0cmluZyhjaGFubmVsKTtcblxuICAgICAgICB2YXIgaWQgPSAnJEJyb2FkY2FzdENoYW5uZWwkJyArIGNoYW5uZWwgKyAnJCc7XG5cbiAgICAgICAgY2hhbm5lbHNbaWRdID0gY2hhbm5lbHNbaWRdIHx8IFtdO1xuICAgICAgICBjaGFubmVsc1tpZF0ucHVzaCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9uYW1lID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX21jID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQxLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQyLnN0YXJ0KCk7XG5cbiAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5zdG9yYWdlQXJlYSAhPT0gZ2xvYmFsLmxvY2FsU3RvcmFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUubmV3VmFsdWUgPT0gbnVsbCB8fCBlLm5ld1ZhbHVlID09PSAnJykgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUua2V5LnN1YnN0cmluZygwLCBpZC5sZW5ndGgpICE9PSBpZCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGUubmV3VmFsdWUpO1xuICAgICAgICAgICAgJHRoaXMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBCcm9hZGNhc3RDaGFubmVsLnByb3RvdHlwZSA9IHtcbiAgICAgICAgLy8gQnJvYWRjYXN0Q2hhbm5lbCBBUElcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdE1lc3NhZ2U6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBlLm5hbWUgPSAnSW52YWxpZFN0YXRlRXJyb3InO1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIG90aGVyIGNvbnRleHRzIHZpYSBzdG9yYWdlIGV2ZW50cy4uLlxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2lkICsgU3RyaW5nKERhdGUubm93KCkpICsgJyQnICsgU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBjdXJyZW50IGNvbnRleHQgdmlhIHBvcnRzXG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uZm9yRWFjaChmdW5jdGlvbihiYykge1xuICAgICAgICAgICAgICAgIGlmIChiYyA9PT0gJHRoaXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICBiYy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoSlNPTi5wYXJzZSh2YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDIuY2xvc2UoKTtcblxuICAgICAgICAgICAgdmFyIGluZGV4ID0gY2hhbm5lbHNbdGhpcy5faWRdLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBFdmVudFRhcmdldCBBUElcbiAgICAgICAgZ2V0IG9ubWVzc2FnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvbm1lc3NhZ2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uKC8qZXZlbnQqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmRpc3BhdGNoRXZlbnQuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsID0gZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgfHwgQnJvYWRjYXN0Q2hhbm5lbDtcbn0pKHNlbGYpO1xuIiwgIntcblx0XCJlbGVtZW50SWRcIjogXCJnYWRnZXQtZWFzeV9hcmNoaXZlXCIsXG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCJcbn1cbiIsICJpbXBvcnQgJy4vbG9hZEVhc3lBcmNoaXZlLmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtjcmVhdGVBcHAsIHJlYWN0aXZlfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtnZXRTZXR0aW5ncywgaWZBcmNMb2NOb3RBbGxvd2VkLCBpc0luQmxhY2tsaXN0LCBpc05vdEFsbG93ZWQsIGlzTm90U3VwcG9ydGVkfSBmcm9tICcuL3V0aWwvZ2V0U2V0dGluZ3MnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xuaW1wb3J0IHtjcmVhdGVGb290ZXJSb290fSBmcm9tICcuL3V0aWwvY3JlYXRlRm9vdGVyUm9vdC50cyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNlY3Rpb25zfSBmcm9tICcuL3V0aWwvZ2V0U2VjdGlvbic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgbG9hZEVhc3lBcmNoaXZlID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoaXNOb3RTdXBwb3J0ZWQoKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG1vdW50UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3Rvcik7XG5cdGlmICghbW91bnRQb2ludCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBub3RpY2VUeXBlOiBGb290ZXJOb3RpY2VUeXBlO1xuXHRsZXQgYXJjTG9jID0gJyc7XG5cdGxldCBzZXR0aW5nczogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0U2V0dGluZ3M+ID0gbnVsbDtcblxuXHRpZiAoaXNJbkJsYWNrbGlzdCgpKSB7XG5cdFx0bm90aWNlVHlwZSA9ICdibGFja2xpc3QnO1xuXHR9IGVsc2UgaWYgKGlzTm90QWxsb3dlZCgpKSB7XG5cdFx0bm90aWNlVHlwZSA9ICdub3RBbGxvd2VkJztcblx0fSBlbHNlIHtcblx0XHRzZXR0aW5ncyA9IGdldFNldHRpbmdzKCk7XG5cdFx0aWYgKCFzZXR0aW5ncz8uYXJjTG9jKSB7XG5cdFx0XHRub3RpY2VUeXBlID0gJ25vQXJjTG9jJztcblx0XHR9IGVsc2UgaWYgKGlmQXJjTG9jTm90QWxsb3dlZChzZXR0aW5ncy5hcmNMb2MpKSB7XG5cdFx0XHRub3RpY2VUeXBlID0gJ2FyY0xvY05vdEFsbG93ZWQnO1xuXHRcdFx0YXJjTG9jID0gc2V0dGluZ3MuYXJjTG9jO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub3RpY2VUeXBlID0gJ2VuYWJsZWQnO1xuXHRcdFx0YXJjTG9jID0gc2V0dGluZ3MuYXJjTG9jO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHNlY3Rpb25MaW5rcyA9IHJlYWN0aXZlPFNlY3Rpb25MaW5rW10+KFtdKTtcblx0Y29uc3QgYXBwID0gY3JlYXRlQXBwKEFwcCwge1xuXHRcdG5vdGljZVR5cGUsXG5cdFx0YXJjTG9jLFxuXHRcdHNlY3Rpb25MaW5rcyxcblx0fSk7XG5cdGFwcC5tb3VudChjcmVhdGVGb290ZXJSb290KG1vdW50UG9pbnQpKTtcblxuXHRpZiAobm90aWNlVHlwZSAhPT0gJ2VuYWJsZWQnIHx8ICFzZXR0aW5ncykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qge2FyY0xldmVsLCBzZWNBcmMsIHNlY0RlbH0gPSBzZXR0aW5ncztcblx0dm9pZCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKVxuXHRcdC50aGVuKChzZWN0aW9ucykgPT4ge1xuXHRcdFx0Y29uc3QgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBoJHthcmNMZXZlbH1gKTtcblx0XHRcdGNvbnN0IGhlYWRsaW5lSWRzID0gbmV3IFNldChcblx0XHRcdFx0Wy4uLmhlYWRpbmdzXVxuXHRcdFx0XHRcdC5tYXAoKGhlYWRpbmcpID0+IGhlYWRpbmcucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5tdy1oZWFkbGluZScpPy5pZClcblx0XHRcdFx0XHQuZmlsdGVyKChpZCk6IGlkIGlzIHN0cmluZyA9PiBCb29sZWFuKGlkKSlcblx0XHRcdCk7XG5cblx0XHRcdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuXHRcdFx0XHRpZiAoc2VjdGlvbi5sZXZlbCAhPT0gYXJjTGV2ZWwgfHwgIWhlYWRsaW5lSWRzLmhhcyhzZWN0aW9uLmFuY2hvcikpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbi5hbmNob3IpO1xuXHRcdFx0XHRjb25zdCBlZGl0U2VjdGlvbiA9IGhlYWRsaW5lPy5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLm13LWVkaXRzZWN0aW9uJyk7XG5cdFx0XHRcdGlmICghZWRpdFNlY3Rpb24pIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNlY3Rpb25MaW5rcy5wdXNoKHtcblx0XHRcdFx0XHR0YXJnZXQ6IGVkaXRTZWN0aW9uLFxuXHRcdFx0XHRcdGluZGV4Tm86IHNlY3Rpb24uaW5kZXgsXG5cdFx0XHRcdFx0YW5jaG9yOiBzZWN0aW9uLmFuY2hvcixcblx0XHRcdFx0XHRhcmNoaXZlVG86IGFyY0xvYyxcblx0XHRcdFx0XHRjYW5BcmNoaXZlOiBzZWNBcmMgPT09ICcxJyxcblx0XHRcdFx0XHRjYW5EZWxldGU6IHNlY0RlbCA9PT0gJzEnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vhc3lBcmNoaXZlIGZhaWxlZCB0byBsb2FkIHNlY3Rpb25zJywgZXJyb3IpO1xuXHRcdFx0dG9hc3RpZnkoe3RleHQ6IGdldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBvcGVyYXRpb24gZmFpbGVkJyksIGNsb3NlOiB0cnVlfSwgJ2Vycm9yJyk7XG5cdFx0fSk7XG59O1xuXG5leHBvcnQge2xvYWRFYXN5QXJjaGl2ZX07XG4iLCAiY29uc3QgaWZBcmNMb2NOb3RBbGxvd2VkID0gKGFyY0xvYzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc291cmNlVGl0bGUgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSk7XG5cdGNvbnN0IGFyY0xvY1RpdGxlID0gbmV3IG13LlRpdGxlKGFyY0xvYyk7XG5cblx0Y29uc3QgYXJjTG9jTmFtZXNwYWNlSWQgPSBhcmNMb2NUaXRsZS5nZXROYW1lc3BhY2VJZCgpO1xuXHRjb25zdCBhcmNMb2NQYWdlTmFtZSA9IGFyY0xvY1RpdGxlLmdldE1haW4oKTtcblx0Y29uc3Qgc291cmNlTmFtZXNwYWNlSWQgPSBzb3VyY2VUaXRsZS5nZXROYW1lc3BhY2VJZCgpO1xuXHRjb25zdCBzb3VyY2VQYWdlTmFtZSA9IHNvdXJjZVRpdGxlLmdldE1haW4oKTtcblxuXHRpZiAoYXJjTG9jTmFtZXNwYWNlSWQgPT09IDApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmIChhcmNMb2NOYW1lc3BhY2VJZCA9PT0gc291cmNlTmFtZXNwYWNlSWQgJiYgYXJjTG9jUGFnZU5hbWUgPT09IHNvdXJjZVBhZ2VOYW1lKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc0luQmxhY2tsaXN0ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgYmxhY2tMaXN0UmVnZXhBcnIgPSBbXG5cdFx0L15GaWxlOi4qJC8sXG5cdFx0L15NZWRpYVdpa2k6LiokLyxcblx0XHQvXk1vZHVsZTouKiQvLFxuXHRcdC9eQ2F0ZWdvcnk6LiokLyxcblx0XHQvXlRlbXBsYXRlOi4qJC8sXG5cdFx0L15TcGVjaWFsOi4qJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanMkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5jc3MkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qc29uJC8sXG5cdF07XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGJsYWNrTGlzdFJlZ2V4QXJyKSB7XG5cdFx0aWYgKGVsZW1lbnQudGVzdCh3Z1BhZ2VOYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNOb3RBbGxvd2VkID0gKCkgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUmVsZXZhbnRVc2VyTmFtZSwgd2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCh3Z05hbWVzcGFjZU51bWJlciA9PT0gMiB8fCB3Z05hbWVzcGFjZU51bWJlciA9PT0gMykgJiYgISh3Z1JlbGV2YW50VXNlck5hbWUgPT09IHdnVXNlck5hbWUpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc05vdFN1cHBvcnRlZCA9ICgpID0+IHtcblx0Y29uc3Qge3dnSXNNYWluUGFnZSwgd2dOYW1lc3BhY2VOdW1iZXIsIHdnQ3VyUmV2aXNpb25JZCwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPCAwIHx8IHdnQ3VyUmV2aXNpb25JZCAtIHdnUmV2aXNpb25JZCAhPT0gMCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwIHx8IHdnSXNNYWluUGFnZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgZ2V0U2V0dGluZ3MgPSAoKSA9PiB7XG5cdGNvbnN0IHNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVhc3lfYXJjaGl2ZV9kYXRhX3BvaW50X2NvbGxlY3Rpb24nKSBhcyBIVE1MRWxlbWVudDtcblx0aWYgKCFzZXR0aW5ncykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3Qge2RhdGFzZXR9ID0gc2V0dGluZ3M7XG5cdGNvbnN0IHthcmNMZXZlbCwgYXJjTG9jLCBzZWNBcmMsIHNlY0RlbH0gPSBkYXRhc2V0O1xuXHRyZXR1cm4ge1xuXHRcdGFyY0xldmVsOiBhcmNMZXZlbCA/PyAnMicsXG5cdFx0YXJjTG9jOiBhcmNMb2MgPz8gJycsXG5cdFx0c2VjQXJjOiBzZWNBcmMgPz8gJzEnLFxuXHRcdHNlY0RlbDogc2VjRGVsID8/ICcxJyxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2V0U2V0dGluZ3MsIGlmQXJjTG9jTm90QWxsb3dlZCwgaXNJbkJsYWNrbGlzdCwgaXNOb3RBbGxvd2VkLCBpc05vdFN1cHBvcnRlZH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBFYXN5QXJjaGl2ZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGdldFNlY3Rpb25zID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHBhZ2U6IHRpdGxlLFxuXHRcdHByb3A6ICdzZWN0aW9ucycsXG5cdH07XG5cblx0Y29uc3Qge3BhcnNlfSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0Y29uc3Qge3NlY3Rpb25zfSA9IHBhcnNlIGFzIHtcblx0XHRzZWN0aW9uczoge1xuXHRcdFx0bGV2ZWw6IHN0cmluZztcblx0XHRcdGluZGV4OiBzdHJpbmc7XG5cdFx0XHRhbmNob3I6IHN0cmluZztcblx0XHR9W107XG5cdH07XG5cblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBbXTtcblxuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRjb25zdCB7bGV2ZWwsIGluZGV4LCBhbmNob3J9ID0gc2VjdGlvbjtcblxuXHRcdGlmIChpbmRleC5zdGFydHNXaXRoKCdULScpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRzZWN0aW9uc1RvQXJjaGl2ZVtzZWN0aW9uc1RvQXJjaGl2ZS5sZW5ndGhdID0ge1xuXHRcdFx0bGV2ZWwsXG5cdFx0XHRpbmRleCxcblx0XHRcdGFuY2hvcixcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHNlY3Rpb25zVG9BcmNoaXZlO1xufTtcblxuY29uc3QgZ2V0U2VjdGlvbkNvbnRlbnQgPSBhc3luYyAoe3RpdGxlLCBzZWN0aW9ufToge3RpdGxlOiBzdHJpbmc7IHNlY3Rpb246IHN0cmluZ30pOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHRpdGxlczogdGl0bGUsXG5cdFx0cnZzZWN0aW9uOiBzZWN0aW9uLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0fTtcblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gKHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdPy5yZXZpc2lvbnM/LlswXS5zbG90cy5tYWluLmNvbnRlbnQgYXMgc3RyaW5nKSA/PyBudWxsO1xufTtcblxuZXhwb3J0IHtnZXRTZWN0aW9ucywgZ2V0U2VjdGlvbkNvbnRlbnR9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBcmNoaXZlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgbG9jYXRpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmUgbG9jYXRpb246ICcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPlnLDlnYDvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU6Iez77yaJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZSBhcmNoaXZlIGxvY2F0aW9uIG9mIHRoaXMgcGFnZSwgXCIkMVwiLCBidXQgRWFzeSBhcmNoaXZlIGNhbm5vdCBvcGVyYXRlIGxpa2UgdGhpcy4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3jgIJFYXN5IEFyY2hpdmUg5peg5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdoueVtuWJjeeahOWtmOaqlOWcsOWdgOaYr+OAjCQx44CN44CCRWFzeSBBcmNoaXZlIOeEoeazleaMieatpOWcsOWdgOWtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQgZGV0YWlscyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2ZXMgc2hvdWxkIG5vdCBiZSBub3JtYWxseSBkaXJlY3RlZCB0byBwYWdlcyB1bmRlciBhcnRpY2xlIG5hbWVzcGFjZS4gUGxlYXNlIGNoZWNrIGlmIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGFyY2hpdmUgbG9jYXRpb24uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOiIrOiAjOiogO+8jOS4jeW6lOWQkeadoeebruWQjeensOepuumXtOi/m+ihjOWtmOaho+OAguatpOWklu+8jOWtmOaho+WcsOWdgOS4jeW+l+WSjOatpOmhtemdouWQjeensOebuOWQjOOAguivt+ajgOafpeWtmOaho+WcsOWdgOOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDoiKzogIzoqIDvvIzkuI3mh4nlkJHmop3nm67lkI3nqLHnqbrplpPpgLLooYzlrZjmqpTjgILmraTlpJbvvIzlrZjmqpTlnLDlnYDkuI3lvpflkozmraTpoIHpnaLlkI3nqLHnm7jlkIzjgILoq4vmqqLmn6XlrZjmqpTlnLDlnYDjgIInLFxuXHRcdH0pLFxuXHRcdEFyY2hpdmluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZpbmcnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOS4rScsXG5cdFx0fSksXG5cdFx0QXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0VkaXQgQ29uZmlsaWN0IE5vdGljZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgYWxyZWFkeSBhcmNoaXZlZCBhbmQvb3IgZGVsZXRlZCBhIHNlY3Rpb24gb24gdGhpcyBwYWdlLiBQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZSBhbmQgY29udGludWUgYXJjaGl2aW5nIG9yIGRlbGV0aW5nIG90aGVyIHNlY3Rpb25zIHRvIGF2b2lkIGVkaXRpbmcgY29uZmxpY3RzLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjlt7Lnu4/lnKjmnKzpobXpnaLmiafooYzkuoblrZjmoaPjgIHliKDpmaTnq6DoioLnmoTmk43kvZzjgILor7fliLfmlrDpobXpnaLvvIznhLblkI7nu6fnu63lrZjmoaPjgIHliKDpmaTmnKzpobXpnaLnmoTlhbbku5bnq6DoioLvvIzku6Xpgb/lhY3nvJbovpHlhrLnqoHjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo5bey57aT5Zyo5pys6aCB6Z2i5Z+36KGM5LqG5a2Y5qqU44CB5Yiq6Zmk56ug56+A55qE5pON5L2c44CC6KuL5Yi35paw6aCB6Z2i77yM54S25b6M57m857qM5a2Y5qqU44CB5Yiq6Zmk5pys6aCB6Z2i55qE5YW25LuW56ug56+A77yM5Lul6YG/5YWN57eo6Lyv6KGd56qB44CCJyxcblx0XHR9KSxcblx0XHREZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaQnLFxuXHRcdH0pLFxuXHRcdERlbGV0aW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RlbGV0aW5nJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOS4rScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTkuK0nLFxuXHRcdH0pLFxuXHRcdERlbGV0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOauteiQvScsXG5cdFx0fSksXG5cdFx0J0NyZWF0ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdjcmVhdGUgYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflu7rnq4vlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bu656uL5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnRGVsZXRlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOauteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgZW5hYmxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGlzIGVuYWJsZWQgb24gdGhpcyB0YWxrIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pys6K6o6K666aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgbm90IGFsbG93ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBjYW5ub3QgdXNlIEVhc3kgQXJjaGl2ZSB0byBhcmNoaXZlIHRocmVhZHMgb24gdGhpcyBwYWdlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjkuI3lj6/ku6XlnKjmraTpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjkuI3lj6/ku6XlnKjmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkIGRldGFpbHMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZXNlIHBhZ2VzIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZTogQXJ0aWNsZSwgRmlsZSwgVGVtcGxhdGUsIE1vZHVsZSwgTWVkaWFXaWtpLCBDYXRlZ29yeSwgU3BlY2lhbCwgSmF2YVNjcmlwdCwgQ1NTLCBKU09OLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfov5nkupvpobXpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8muadoeebruOAgUZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+mAmeS6m+mggemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77ya5qKd55uu77yMRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgb3BlcmF0aW9uIGZhaWxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGNvdWxkIG5vdCBjb21wbGV0ZSB0aGUgb3BlcmF0aW9uLiBQbGVhc2UgY2hlY2sgdGhlIGJyb3dzZXIgY29uc29sZSBhbmQgcmVmcmVzaCBiZWZvcmUgdHJ5aW5nIGFnYWluLicsXG5cdFx0XHQnemgtaGFucyc6ICdFYXN5IEFyY2hpdmUg5peg5rOV5a6M5oiQ5pON5L2c44CC6K+35qOA5p+l5rWP6KeI5Zmo5o6n5Yi25Y+w77yM5bm25Zyo6YeN6K+V5YmN5Yi35paw6aG16Z2i44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ0Vhc3kgQXJjaGl2ZSDnhKHms5XlrozmiJDmk43kvZzjgILoq4vmqqLmn6XngI/opr3lmajkuLvmjqflj7DvvIzkuKblnKjph43oqabliY3ph43mlrDmlbTnkIbpoIHpnaLjgIInLFxuXHRcdH0pLFxuXHRcdCdObyBBcmNoaXZlIExvY2F0aW9uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgY2FuIGJlIHVzZWQgb24gdGhpcyBwYWdlIGlmIG5lZWRlZC4gVG8gZW5hYmxlIGl0LCBhZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdGVtcGxhdGUgdG8gdGhpcyBwYWdlLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfoi6XpnIDopoHvvIzmraTpobXpnaLlj6/ku6XlkK/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOivt+WcqOmhtemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPkvY3nva59feOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfoi6XpnIDopoHvvIzmraTpoIHpnaLlj6/ku6XllZ/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOiri+WcqOmggemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59feOAgicsXG5cdFx0fSksXG5cdFx0J1NlY3Rpb24gJDEnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlY3Rpb24gJDEnLFxuXHRcdFx0emg6ICfnrKwgJDEg56ug6IqCJyxcblx0XHR9KSxcblx0XHQnKCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnICgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdCcpJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHQnLic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdFx0JzonOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzogJyxcblx0XHRcdHpoOiAn77yaJyxcblx0XHR9KSxcblx0XHRSZWZyZXNoOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlZnJlc2ggdGhlIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yi35paw5b2T5YmN6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+mHjeaWsOi8ieWFpeeVtuWJjemggScsXG5cdFx0fSksXG5cdFx0UmVmcmVzaGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WNs+WwhuWIt+aWsOW9k+WJjemhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfljbPlsIfph43mlrDovInlhaXnlbbliY3poIHigKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldFNlY3Rpb25Db250ZW50LCBnZXRTZWN0aW9uc30gZnJvbSAnLi9nZXRTZWN0aW9uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBpc1BhZ2VFeGlzdCA9IGFzeW5jIChhcmNoaXZlVG86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbmZvJyxcblx0XHR0aXRsZXM6IGFyY2hpdmVUbyxcblx0fTtcblxuXHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdGlmIChxdWVyeS5wYWdlc1swXT8ubWlzc2luZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgaXNTZWN0aW9uRXhpc3QgPSBhc3luYyAoe2luZGV4LCBhbmNob3J9OiB7aW5kZXg6IHN0cmluZzsgYW5jaG9yOiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnMgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRsZXQgaXNFeGlzdCA9IGZhbHNlO1xuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRpZiAoaW5kZXggPT09IHNlY3Rpb24uaW5kZXggJiYgYW5jaG9yID09PSBzZWN0aW9uLmFuY2hvcikge1xuXHRcdFx0aXNFeGlzdCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBpc0V4aXN0O1xufTtcblxuY29uc3QgcmVtb3ZlU2VjdGlvbiA9IGFzeW5jICh7aW5kZXgsIGFuY2hvciwgc3VtbWFyeX06IHtpbmRleDogc3RyaW5nOyBhbmNob3I6IHN0cmluZzsgc3VtbWFyeT86IHN0cmluZ30pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpc0V4aXN0ID0gYXdhaXQgaXNTZWN0aW9uRXhpc3Qoe2luZGV4LCBhbmNob3J9KTtcblxuXHRpZiAoaXNFeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh7dGl0bGU6IHdnUGFnZU5hbWUsIHNlY3Rpb246IGluZGV4fSk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCBhcGkuZWRpdCh3Z1BhZ2VOYW1lLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlY3Rpb246IGluZGV4LFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRzdW1tYXJ5OiBzdW1tYXJ5ID8/IGdldE1lc3NhZ2UoJ0RlbGV0ZSBzdW1tYXJ5JyksXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcbn07XG5cbmNvbnN0IGFyY2hpdmVTZWN0aW9uID0gYXN5bmMgKHtpbmRleCwgYW5jaG9yLCBhcmNoaXZlVG99OiB7aW5kZXg6IHN0cmluZzsgYW5jaG9yOiBzdHJpbmc7IGFyY2hpdmVUbzogc3RyaW5nfSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlzRXhpc3QgPSBhd2FpdCBpc1NlY3Rpb25FeGlzdCh7aW5kZXgsIGFuY2hvcn0pO1xuXG5cdGlmIChpc0V4aXN0ICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGdldFNlY3Rpb25Db250ZW50KHt0aXRsZTogd2dQYWdlTmFtZSwgc2VjdGlvbjogaW5kZXh9KTtcblxuXHRpZiAoY29udGVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBhZ2VFeGlzdCA9IGF3YWl0IGlzUGFnZUV4aXN0KGFyY2hpdmVUbyk7XG5cdGlmICghcGFnZUV4aXN0KSB7XG5cdFx0YXdhaXQgYXBpLmNyZWF0ZShcblx0XHRcdGFyY2hpdmVUbyxcblx0XHRcdHtcblx0XHRcdFx0c3VtbWFyeTogZ2V0TWVzc2FnZSgnQ3JlYXRlIHN1bW1hcnknKSxcblx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0J3t7dGFsa2FyY2hpdmV9fSdcblx0XHQpO1xuXHR9XG5cblx0YXdhaXQgYXBpLmVkaXQoYXJjaGl2ZVRvLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFwcGVuZHRleHQ6IGBcXG5cXG4ke2NvbnRlbnR9YCxcblx0XHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0FyY2hpdmUgc3VtbWFyeScpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG5cblx0YXdhaXQgcmVtb3ZlU2VjdGlvbih7aW5kZXgsIGFuY2hvciwgc3VtbWFyeTogZ2V0TWVzc2FnZSgnQXJjaGl2ZSBzdW1tYXJ5Jyl9KTtcbn07XG5cbmV4cG9ydCB7aXNTZWN0aW9uRXhpc3QsIGFyY2hpdmVTZWN0aW9uLCByZW1vdmVTZWN0aW9ufTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHthcmNoaXZlU2VjdGlvbiwgcmVtb3ZlU2VjdGlvbn0gZnJvbSAnLi91dGlsL2VkaXRTZWN0aW9uJztcbmltcG9ydCB7Y29tcHV0ZWQsIGNyZWF0ZUFwcCwgb25CZWZvcmVVbm1vdW50LCBvbk1vdW50ZWQsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7Z2V0QXJjaGl2ZWRNZXNzYWdlLCBnZXRBcmNoaXZpbmdNZXNzYWdlLCBnZXREZWxldGVkTWVzc2FnZSwgZ2V0RGVsZXRpbmdNZXNzYWdlfSBmcm9tICcuL3V0aWwvZ2V0TWVzc2FnZSc7XG5pbXBvcnQge0NkeEJ1dHRvbn0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQgQ29uZmxpY3ROb3RpY2UgZnJvbSAnLi9jb21wb25lbnRzL0NvbmZsaWN0Tm90aWNlLnZ1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gJy4vdXRpbC9yZWZyZXNoUGFnZSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdG5vdGljZVR5cGU6IEZvb3Rlck5vdGljZVR5cGU7XG5cdGFyY0xvYzogc3RyaW5nO1xuXHRzZWN0aW9uTGlua3M6IFNlY3Rpb25MaW5rW107XG59PigpO1xuXG5jb25zdCBhcmNoaXZlVXJsID0gY29tcHV0ZWQoKCkgPT4gbXcudXRpbC5nZXRVcmwocHJvcHMuYXJjTG9jKSk7XG5jb25zdCBzaG93U2VjdGlvbkxpbmtzID0gcmVmKHRydWUpO1xuY29uc3Qgd29ya2luZ1NlY3Rpb24gPSByZWY8U2VjdGlvbkxpbms+KCk7XG5jb25zdCB3b3JraW5nQWN0aW9uID0gcmVmPFNlY3Rpb25BY3Rpb24+KCk7XG5jb25zdCBhY3Rpb25GYWlsZWQgPSByZWYoZmFsc2UpO1xubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7aGlkZVRvYXN0OiAoKSA9PiB7fX07XG5sZXQgY29uZmxpY3RBcHA6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZUFwcD4gfCB1bmRlZmluZWQ7XG5sZXQgY29uZmxpY3RSb290OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZDtcblxuY29uc3QgaGlkZVRvYXN0ID0gKCk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRjb25mbGljdEFwcD8udW5tb3VudCgpO1xuXHRjb25mbGljdEFwcCA9IHVuZGVmaW5lZDtcblx0Y29uZmxpY3RSb290Py5yZW1vdmUoKTtcblx0Y29uZmxpY3RSb290ID0gdW5kZWZpbmVkO1xufTtcblxuY29uc3Qgc2hvd1RvYXN0ID0gKHRleHQ6IHN0cmluZywgdHlwZTogJ2luZm8nIHwgJ2Vycm9yJyA9ICdpbmZvJywgZHVyYXRpb24gPSAtMSk6IHZvaWQgPT4ge1xuXHRoaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KHt0ZXh0LCBjbG9zZTogdHJ1ZSwgZHVyYXRpb259LCB0eXBlKTtcbn07XG5cbmNvbnN0IG1lc3NhZ2VDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoYCR7bXcuY29uZmlnLmdldCgpLndnUGFnZU5hbWV9X21lc3NhZ2VgKTtcbmNvbnN0IHJlZnJlc2hDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoYCR7bXcuY29uZmlnLmdldCgpLndnUGFnZU5hbWV9X3JlZnJlc2hgKTtcblxuY29uc3Qgb25NZXNzYWdlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQ8dW5rbm93bj4pOiB2b2lkID0+IHtcblx0c2hvd1NlY3Rpb25MaW5rcy52YWx1ZSA9IGZhbHNlO1xuXHRpZiAodHlwZW9mIGV2ZW50LmRhdGEgPT09ICdzdHJpbmcnKSB7XG5cdFx0c2hvd1RvYXN0KGV2ZW50LmRhdGEsICdpbmZvJywgMyAqIDEwMDApO1xuXHR9XG59O1xuXG5jb25zdCBvblJlZnJlc2hNZXNzYWdlID0gKCk6IHZvaWQgPT4ge1xuXHRoaWRlVG9hc3QoKTtcblx0Y29uZmxpY3RSb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRjb25mbGljdEFwcCA9IGNyZWF0ZUFwcChDb25mbGljdE5vdGljZSwge1xuXHRcdG9uQ2xpY2s6ICgpID0+IHtcblx0XHRcdGhpZGVUb2FzdCgpO1xuXHRcdFx0cmVmcmVzaCgpO1xuXHRcdH0sXG5cdH0pO1xuXHRjb25mbGljdEFwcC5tb3VudChjb25mbGljdFJvb3QpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoe25vZGU6IGNvbmZsaWN0Um9vdCwgY2xvc2U6IHRydWUsIGR1cmF0aW9uOiAtMX0sICdpbmZvJyk7XG59O1xuXG5vbk1vdW50ZWQoKCkgPT4ge1xuXHRtZXNzYWdlQ2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKTtcblx0cmVmcmVzaENoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uUmVmcmVzaE1lc3NhZ2UpO1xufSk7XG5cbm9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG5cdG1lc3NhZ2VDaGFubmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuXHRyZWZyZXNoQ2hhbm5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25SZWZyZXNoTWVzc2FnZSk7XG5cdG1lc3NhZ2VDaGFubmVsLmNsb3NlKCk7XG5cdHJlZnJlc2hDaGFubmVsLmNsb3NlKCk7XG5cdGhpZGVUb2FzdCgpO1xufSk7XG5cbmNvbnN0IHJ1blNlY3Rpb25BY3Rpb24gPSBhc3luYyAoc2VjdGlvbjogU2VjdGlvbkxpbmssIGFjdGlvbjogU2VjdGlvbkFjdGlvbik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRpZiAod29ya2luZ1NlY3Rpb24udmFsdWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR3b3JraW5nU2VjdGlvbi52YWx1ZSA9IHNlY3Rpb247XG5cdHdvcmtpbmdBY3Rpb24udmFsdWUgPSBhY3Rpb247XG5cdGFjdGlvbkZhaWxlZC52YWx1ZSA9IGZhbHNlO1xuXHRjb25zdCBwZW5kaW5nTWVzc2FnZSA9XG5cdFx0YWN0aW9uID09PSAnYXJjaGl2ZScgPyBnZXRBcmNoaXZpbmdNZXNzYWdlKHNlY3Rpb24uaW5kZXhObykgOiBnZXREZWxldGluZ01lc3NhZ2Uoc2VjdGlvbi5pbmRleE5vKTtcblx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UocGVuZGluZ01lc3NhZ2UpO1xuXHRzaG93VG9hc3QocGVuZGluZ01lc3NhZ2UpO1xuXG5cdHRyeSB7XG5cdFx0aWYgKGFjdGlvbiA9PT0gJ2FyY2hpdmUnKSB7XG5cdFx0XHRhd2FpdCBhcmNoaXZlU2VjdGlvbih7XG5cdFx0XHRcdGluZGV4OiBzZWN0aW9uLmluZGV4Tm8sXG5cdFx0XHRcdGFuY2hvcjogc2VjdGlvbi5hbmNob3IsXG5cdFx0XHRcdGFyY2hpdmVUbzogc2VjdGlvbi5hcmNoaXZlVG8sXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXdhaXQgcmVtb3ZlU2VjdGlvbih7aW5kZXg6IHNlY3Rpb24uaW5kZXhObywgYW5jaG9yOiBzZWN0aW9uLmFuY2hvcn0pO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGBFYXN5QXJjaGl2ZSBmYWlsZWQgdG8gJHthY3Rpb259IHNlY3Rpb24gJHtzZWN0aW9uLmluZGV4Tm99YCwgZXJyb3IpO1xuXHRcdGNvbnN0IGZhaWx1cmVNZXNzYWdlID0gZ2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG9wZXJhdGlvbiBmYWlsZWQnKTtcblx0XHRhY3Rpb25GYWlsZWQudmFsdWUgPSB0cnVlO1xuXHRcdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKGZhaWx1cmVNZXNzYWdlKTtcblx0XHRzaG93VG9hc3QoZmFpbHVyZU1lc3NhZ2UsICdlcnJvcicpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbXBsZXRlTWVzc2FnZSA9XG5cdFx0YWN0aW9uID09PSAnYXJjaGl2ZScgPyBnZXRBcmNoaXZlZE1lc3NhZ2Uoc2VjdGlvbi5pbmRleE5vKSA6IGdldERlbGV0ZWRNZXNzYWdlKHNlY3Rpb24uaW5kZXhObyk7XG5cdHNob3dUb2FzdChjb21wbGV0ZU1lc3NhZ2UpO1xuXHRtZXNzYWdlQ2hhbm5lbC5wb3N0TWVzc2FnZShjb21wbGV0ZU1lc3NhZ2UpO1xuXHRyZWZyZXNoQ2hhbm5lbC5wb3N0TWVzc2FnZSgnUmVmcmVzaCcpO1xuXHRyZWZyZXNoKHt0b2FzdGlmeUluc3RhbmNlfSk7XG59O1xuXG5jb25zdCBhcmNoaXZlTGluayA9IChzZWN0aW9uOiBTZWN0aW9uTGluayk6IHZvaWQgPT4ge1xuXHR2b2lkIHJ1blNlY3Rpb25BY3Rpb24oc2VjdGlvbiwgJ2FyY2hpdmUnKTtcbn07XG5cbmNvbnN0IGRlbGV0ZUxpbmsgPSAoc2VjdGlvbjogU2VjdGlvbkxpbmspOiB2b2lkID0+IHtcblx0dm9pZCBydW5TZWN0aW9uQWN0aW9uKHNlY3Rpb24sICdkZWxldGUnKTtcbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8dGVtcGxhdGUgdi1pZj1cInByb3BzLm5vdGljZVR5cGUgPT09ICdibGFja2xpc3QnXCI+XG5cdFx0e3sgZ2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQnKSB9fTxiciAvPnt7IGdldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkIGRldGFpbHMnKSB9fVxuXHQ8L3RlbXBsYXRlPlxuXHQ8dGVtcGxhdGUgdi1lbHNlLWlmPVwicHJvcHMubm90aWNlVHlwZSA9PT0gJ25vdEFsbG93ZWQnXCI+XG5cdFx0e3sgZ2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBhbGxvd2VkJykgfX1cblx0PC90ZW1wbGF0ZT5cblx0PHRlbXBsYXRlIHYtZWxzZS1pZj1cInByb3BzLm5vdGljZVR5cGUgPT09ICdub0FyY0xvYydcIj5cblx0XHR7eyBnZXRNZXNzYWdlKCdObyBBcmNoaXZlIExvY2F0aW9uJykgfX1cblx0PC90ZW1wbGF0ZT5cblx0PHRlbXBsYXRlIHYtZWxzZS1pZj1cInByb3BzLm5vdGljZVR5cGUgPT09ICdhcmNMb2NOb3RBbGxvd2VkJ1wiPlxuXHRcdHt7IGdldE1lc3NhZ2UoJ0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQnKS5yZXBsYWNlKCckMScsIHByb3BzLmFyY0xvYykgfX08YnIgLz5cblx0XHR7eyBnZXRNZXNzYWdlKCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkIGRldGFpbHMnKSB9fVxuXHQ8L3RlbXBsYXRlPlxuXHQ8dGVtcGxhdGUgdi1lbHNlPlxuXHRcdHt7IGdldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBlbmFibGVkJykgfX17eyBnZXRNZXNzYWdlKCcoJykgfX17eyBnZXRNZXNzYWdlKCdBcmNoaXZlIGxvY2F0aW9uJykgfX1cblx0XHQ8YSA6dGl0bGU9XCJwcm9wcy5hcmNMb2NcIiA6aHJlZj1cImFyY2hpdmVVcmxcIj57eyBwcm9wcy5hcmNMb2MgfX08L2E+XG5cdFx0e3sgZ2V0TWVzc2FnZSgnKScpIH19e3sgZ2V0TWVzc2FnZSgnLicpIH19XG5cdDwvdGVtcGxhdGU+XG5cblx0PFRlbGVwb3J0IHYtZm9yPVwic2VjdGlvbiBpbiBwcm9wcy5zZWN0aW9uTGlua3NcIiA6a2V5PVwic2VjdGlvbi5pbmRleE5vXCIgOnRvPVwic2VjdGlvbi50YXJnZXRcIj5cblx0XHQ8c3BhbiB2LWlmPVwic2hvd1NlY3Rpb25MaW5rc1wiIGNsYXNzPVwiZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fc2VjdGlvbi1pZFwiPlxuXHRcdFx0PGNkeC1idXR0b25cblx0XHRcdFx0di1pZj1cInNlY3Rpb24uY2FuQXJjaGl2ZVwiXG5cdFx0XHRcdGNsYXNzPVwiZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fYnV0dG9uXCJcblx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0OmRpc2FibGVkPVwiQm9vbGVhbih3b3JraW5nU2VjdGlvbilcIlxuXHRcdFx0XHRAY2xpY2s9XCJhcmNoaXZlTGluayhzZWN0aW9uKVwiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7IGdldE1lc3NhZ2UoJ0FyY2hpdmUnKSB9fVxuXHRcdFx0PC9jZHgtYnV0dG9uPlxuXHRcdFx0PHNwYW4gdi1pZj1cInNlY3Rpb24uY2FuQXJjaGl2ZSAmJiBzZWN0aW9uLmNhbkRlbGV0ZVwiIGNsYXNzPVwibXctZWRpdHNlY3Rpb24tZGl2aWRlclwiPnw8L3NwYW4+XG5cdFx0XHQ8Y2R4LWJ1dHRvblxuXHRcdFx0XHR2LWlmPVwic2VjdGlvbi5jYW5EZWxldGVcIlxuXHRcdFx0XHRjbGFzcz1cImdhZGdldC1lYXN5X2FyY2hpdmVfX2J1dHRvblwiXG5cdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdHNpemU9XCJzbWFsbFwiXG5cdFx0XHRcdGFjdGlvbj1cImRlc3RydWN0aXZlXCJcblx0XHRcdFx0OmRpc2FibGVkPVwiQm9vbGVhbih3b3JraW5nU2VjdGlvbilcIlxuXHRcdFx0XHRAY2xpY2s9XCJkZWxldGVMaW5rKHNlY3Rpb24pXCJcblx0XHRcdD5cblx0XHRcdFx0e3sgZ2V0TWVzc2FnZSgnRGVsZXRlJykgfX1cblx0XHRcdDwvY2R4LWJ1dHRvbj5cblx0XHRcdDxzcGFuIHYtaWY9XCJ3b3JraW5nU2VjdGlvbj8uaW5kZXhObyA9PT0gc2VjdGlvbi5pbmRleE5vXCI+XG5cdFx0XHRcdHt7XG5cdFx0XHRcdFx0YWN0aW9uRmFpbGVkXG5cdFx0XHRcdFx0XHQ/IGdldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBvcGVyYXRpb24gZmFpbGVkJylcblx0XHRcdFx0XHRcdDogd29ya2luZ0FjdGlvbiA9PT0gJ2FyY2hpdmUnXG5cdFx0XHRcdFx0XHRcdD8gZ2V0TWVzc2FnZSgnQXJjaGl2aW5nJylcblx0XHRcdFx0XHRcdFx0OiBnZXRNZXNzYWdlKCdEZWxldGluZycpXG5cdFx0XHRcdH19XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9zcGFuPlxuXHQ8L1RlbGVwb3J0PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuLmdhZGdldC1lYXN5X2FyY2hpdmVfX3NlY3Rpb24taWQge1xuXHQ6Z2xvYmFsKC5za2luLWNpdGl6ZW4pICYge1xuXHRcdGZvbnQtc2l6ZTogMC44NzVyZW07XG5cdFx0bWFyZ2luOiAwIDAuNXJlbTtcblx0fVxuXG5cdDpkZWVwKC5nYWRnZXQtZWFzeV9hcmNoaXZlX19idXR0b24pIHtcblx0XHRmb250LXNpemU6IGluaGVyaXQ7XG5cdFx0bWFyZ2luOiAwIDAuMjVlbTtcblx0XHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG5cdH1cbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2V0QXJjaGl2aW5nTWVzc2FnZSA9IChpbmRleE5vOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIGdldE1lc3NhZ2UoJ0FyY2hpdmluZycpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG59O1xuXG5jb25zdCBnZXRBcmNoaXZlZE1lc3NhZ2UgPSAoaW5kZXhObzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBnZXRNZXNzYWdlKCdBcmNoaXZlZCcpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG59O1xuXG5jb25zdCBnZXREZWxldGluZ01lc3NhZ2UgPSAoaW5kZXhObzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBnZXRNZXNzYWdlKCdEZWxldGluZycpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG59O1xuXG5jb25zdCBnZXREZWxldGVkTWVzc2FnZSA9IChpbmRleE5vOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIGdldE1lc3NhZ2UoJ0RlbGV0ZWQnKSArIGdldE1lc3NhZ2UoJzonKSArIGdldE1lc3NhZ2UoJ1NlY3Rpb24gJDEnKS5yZXBsYWNlKCckMScsIGluZGV4Tm8pO1xufTtcblxuZXhwb3J0IHtnZXRBcmNoaXZpbmdNZXNzYWdlLCBnZXRBcmNoaXZlZE1lc3NhZ2UsIGdldERlbGV0aW5nTWVzc2FnZSwgZ2V0RGVsZXRlZE1lc3NhZ2V9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeEJ1dHRvbn0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b25DbGljazogKCkgPT4gdm9pZDtcbn0+KCk7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8c3Bhbj5cblx0XHR7eyBnZXRNZXNzYWdlKCdFZGl0IENvbmZpbGljdCBOb3RpY2UnKSB9fVxuXHRcdDxjZHgtYnV0dG9uIHdlaWdodD1cInF1aWV0XCIgdHlwZT1cImJ1dHRvblwiIHNpemU9XCJzbWFsbFwiIEBjbGljaz1cInByb3BzLm9uQ2xpY2tcIj5cblx0XHRcdHt7IGdldE1lc3NhZ2UoJ1JlZnJlc2gnKSB9fVxuXHRcdDwvY2R4LWJ1dHRvbj5cblx0PC9zcGFuPlxuPC90ZW1wbGF0ZT5cbiIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCBudWxsLCBbXG4gICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdFZGl0IENvbmZpbGljdCBOb3RpY2UnKSkgKyBcIiBcIiwgMSAvKiBURVhUICovKSxcbiAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgICBvbkNsaWNrOiAkc2V0dXAucHJvcHMub25DbGlja1xuICAgIH0sIHtcbiAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdSZWZyZXNoJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICBdKSxcbiAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgfSwgOCAvKiBQUk9QUyAqLywgW1wib25DbGlja1wiXSlcbiAgXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcRWFzeUFyY2hpdmVcXFxcbW9kdWxlc1xcXFxjb21wb25lbnRzXFxcXENvbmZsaWN0Tm90aWNlLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEVhc3lBcmNoaXZlXFxcXG1vZHVsZXNcXFxcY29tcG9uZW50c1xcXFxDb25mbGljdE5vdGljZS52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxFYXN5QXJjaGl2ZVxcXFxtb2R1bGVzXFxcXGNvbXBvbmVudHNcXFxcQ29uZmxpY3ROb3RpY2UudnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHJlZnJlc2ggPSAoe1xuXHR0YXJnZXRQYWdlLFxuXHR0b2FzdGlmeUluc3RhbmNlLFxufToge3RhcmdldFBhZ2U/OiBzdHJpbmc7IHRvYXN0aWZ5SW5zdGFuY2U/OiBUb2FzdGlmeUluc3RhbmNlfSA9IHt9KTogdm9pZCA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgfHw9IHtcblx0XHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxuXHR9O1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUmVmcmVzaGluZycpLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0aWYgKHRhcmdldFBhZ2UpIHtcblx0XHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKHRhcmdldFBhZ2UpKTtcblx0fSBlbHNlIHtcblx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0fVxufTtcblxuZXhwb3J0IHtyZWZyZXNofTtcbiIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgVGVsZXBvcnQgYXMgX1RlbGVwb3J0IH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJ0aXRsZVwiLCBcImhyZWZcIl1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7XG4gIGtleTogMCxcbiAgY2xhc3M6IFwiZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fc2VjdGlvbi1pZFwiXG59XG5jb25zdCBfaG9pc3RlZF8zID0ge1xuICBrZXk6IDEsXG4gIGNsYXNzOiBcIm13LWVkaXRzZWN0aW9uLWRpdmlkZXJcIlxufVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsga2V5OiAzIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBbXG4gICAgKCRzZXR1cC5wcm9wcy5ub3RpY2VUeXBlID09PSAnYmxhY2tsaXN0JylcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIHsga2V5OiAwIH0sIFtcbiAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkJykpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgIF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJyXCIsIG51bGwsIG51bGwsIC0xIC8qIENBQ0hFRCAqLykpLFxuICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQgZGV0YWlscycpKSwgMSAvKiBURVhUICovKVxuICAgICAgICBdLCA2NCAvKiBTVEFCTEVfRlJBR01FTlQgKi8pKVxuICAgICAgOiAoJHNldHVwLnByb3BzLm5vdGljZVR5cGUgPT09ICdub3RBbGxvd2VkJylcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgeyBrZXk6IDEgfSwgW1xuICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IGFsbG93ZWQnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICBdLCA2NCAvKiBTVEFCTEVfRlJBR01FTlQgKi8pKVxuICAgICAgICA6ICgkc2V0dXAucHJvcHMubm90aWNlVHlwZSA9PT0gJ25vQXJjTG9jJylcbiAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCB7IGtleTogMiB9LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnTm8gQXJjaGl2ZSBMb2NhdGlvbicpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgXSwgNjQgLyogU1RBQkxFX0ZSQUdNRU5UICovKSlcbiAgICAgICAgICA6ICgkc2V0dXAucHJvcHMubm90aWNlVHlwZSA9PT0gJ2FyY0xvY05vdEFsbG93ZWQnKVxuICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgeyBrZXk6IDMgfSwgW1xuICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCcpLnJlcGxhY2UoJyQxJywgJHNldHVwLnByb3BzLmFyY0xvYykpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgICAgIF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJyXCIsIG51bGwsIG51bGwsIC0xIC8qIENBQ0hFRCAqLykpLFxuICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoXCIgXCIgKyBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkIGRldGFpbHMnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgXSwgNjQgLyogU1RBQkxFX0ZSQUdNRU5UICovKSlcbiAgICAgICAgICAgIDogKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIHsga2V5OiA0IH0sIFtcbiAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBlbmFibGVkJykpICsgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnKCcpKSArIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0FyY2hpdmUgbG9jYXRpb24nKSkgKyBcIiBcIiwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJHNldHVwLnByb3BzLmFyY0xvYyxcbiAgICAgICAgICAgICAgICAgIGhyZWY6ICRzZXR1cC5hcmNoaXZlVXJsXG4gICAgICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAucHJvcHMuYXJjTG9jKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfMSksXG4gICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShcIiBcIiArIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJyknKSkgKyBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCcuJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgIF0sIDY0IC8qIFNUQUJMRV9GUkFHTUVOVCAqLykpLFxuICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHNldHVwLnByb3BzLnNlY3Rpb25MaW5rcywgKHNlY3Rpb24pID0+IHtcbiAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RlbGVwb3J0LCB7XG4gICAgICAgIGtleTogc2VjdGlvbi5pbmRleE5vLFxuICAgICAgICB0bzogc2VjdGlvbi50YXJnZXRcbiAgICAgIH0sIFtcbiAgICAgICAgKCRzZXR1cC5zaG93U2VjdGlvbkxpbmtzKVxuICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInNwYW5cIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgICAgICAoc2VjdGlvbi5jYW5BcmNoaXZlKVxuICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImdhZGdldC1lYXN5X2FyY2hpdmVfX2J1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogQm9vbGVhbigkc2V0dXAud29ya2luZ1NlY3Rpb24pLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAkZXZlbnQgPT4gKCRzZXR1cC5hcmNoaXZlTGluayhzZWN0aW9uKSlcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnQXJjaGl2ZScpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImRpc2FibGVkXCIsIFwib25DbGlja1wiXSkpXG4gICAgICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAgICAgICAgICAgKHNlY3Rpb24uY2FuQXJjaGl2ZSAmJiBzZWN0aW9uLmNhbkRlbGV0ZSlcbiAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIF9ob2lzdGVkXzMsIFwifFwiKSlcbiAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICAgICAgICAgICAoc2VjdGlvbi5jYW5EZWxldGUpXG4gICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogMixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJkZXN0cnVjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogQm9vbGVhbigkc2V0dXAud29ya2luZ1NlY3Rpb24pLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAkZXZlbnQgPT4gKCRzZXR1cC5kZWxldGVMaW5rKHNlY3Rpb24pKVxuICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdEZWxldGUnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJkaXNhYmxlZFwiLCBcIm9uQ2xpY2tcIl0pKVxuICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgICAgICAgICgkc2V0dXAud29ya2luZ1NlY3Rpb24/LmluZGV4Tm8gPT09IHNlY3Rpb24uaW5kZXhObylcbiAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIF9ob2lzdGVkXzQsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmFjdGlvbkZhaWxlZFxuXHRcdFx0XHRcdFx0PyAkc2V0dXAuZ2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG9wZXJhdGlvbiBmYWlsZWQnKVxuXHRcdFx0XHRcdFx0OiAkc2V0dXAud29ya2luZ0FjdGlvbiA9PT0gJ2FyY2hpdmUnXG5cdFx0XHRcdFx0XHRcdD8gJHNldHVwLmdldE1lc3NhZ2UoJ0FyY2hpdmluZycpXG5cdFx0XHRcdFx0XHRcdDogJHNldHVwLmdldE1lc3NhZ2UoJ0RlbGV0aW5nJykpLCAxIC8qIFRFWFQgKi8pKVxuICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICAgICAgICAgIF0pKVxuICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICAgIF0sIDggLyogUFJPUFMgKi8sIFtcInRvXCJdKSlcbiAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgXSwgNjQgLyogU1RBQkxFX0ZSQUdNRU5UICovKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxFYXN5QXJjaGl2ZVxcXFxtb2R1bGVzXFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEVhc3lBcmNoaXZlXFxcXG1vZHVsZXNcXFxcQXBwLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxFYXN5QXJjaGl2ZVxcXFxtb2R1bGVzXFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxFYXN5QXJjaGl2ZVxcXFxtb2R1bGVzXFxcXEFwcC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNGFjM2QzZDJcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcblxuY29uc3QgY3JlYXRlRm9vdGVyUm9vdCA9IChtb3VudFBvaW50OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50ID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpc0NpdGl6ZW4gPSBza2luID09PSAnY2l0aXplbic7XG5cdGNvbnN0IGlzTGlzdEl0ZW0gPSBbJ2dvbmdiaScsICd2ZWN0b3InLCAndmVjdG9yLTIwMjInXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpO1xuXHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpc0NpdGl6ZW4gPyAnc2VjdGlvbicgOiBpc0xpc3RJdGVtID8gJ2xpJyA6ICdkaXYnKTtcblxuXHRyb290LmlkID0gT1BUSU9OUy5lbGVtZW50SWQ7XG5cdHJvb3QuY2xhc3NMaXN0LmFkZCgnZWFzeS1hcmNoaXZlLWZvb3Rlci1ub3RpY2UnLCAnbm9wcmludCcpO1xuXHRpZiAoaXNDaXRpemVuKSB7XG5cdFx0cm9vdC5jbGFzc0xpc3QuYWRkKCdwYWdlLWluZm9fX2l0ZW0nLCAnY2l0aXplbi1mb290ZXJfX3BhZ2VpbmZvLWl0ZW0nKTtcblx0fVxuXHRtb3VudFBvaW50LnByZXBlbmQocm9vdCk7XG5cdHJldHVybiByb290O1xufTtcblxuZXhwb3J0IHtjcmVhdGVGb290ZXJSb290fTtcbiIsICJpbXBvcnQge2xvYWRFYXN5QXJjaGl2ZX0gZnJvbSAnLi9tb2R1bGVzL2xvYWRFYXN5QXJjaGl2ZSc7XG5cbihmdW5jdGlvbiBlYXN5QXJjaGl2ZSgpIHtcblx0bG9hZEVhc3lBcmNoaXZlKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxRQUFRO0FBQ2QsVUFBSSxXQUFXLENBQUM7QUFFaEIsZUFBU0Esa0JBQWlC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QUFXblAsU0FBU29QLGVBQWV2TixRQUFRSSxNQUFNO0FBQ3ZELGNBQU1vTixjQUFjRixhQUFBLFFBQUFBLGFBQUEsV0FBQUYsd0JBQUFFLFNBQVVHLG1CQUFBLFFBQUFMLDBCQUFBLFNBQUEsU0FBVkEsc0JBQXlCaFAsY0FBMkIsaUJBQWlCO0FBQ3pGLFlBQUksQ0FBQ29QLGFBQWE7QUFDakI7UUFDRDtBQUVBOUMscUJBQWFnRCxLQUFLO1VBQ2pCM0MsUUFBUXlDO1VBQ1JoSixTQUFTeEUsUUFBUUc7VUFDakJDLFFBQVFKLFFBQVFJO1VBQ2hCMEMsV0FBVzFHO1VBQ1g0TyxZQUFZek0sV0FBVztVQUN2QjhNLFdBQVc3TSxXQUFXO1FBQ3ZCLENBQUM7TUFDRjtJQUFBLFNBQUE4QixLQUFBO0FBQUE0TSxpQkFBQTNNLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUE0TSxpQkFBQTFNLEVBQUE7SUFBQTtFQUNELENBQUMsRUFDQW1OLE1BQU9yRSxXQUFtQjtBQUMxQkMsWUFBUUQsTUFBTSx1Q0FBdUNBLEtBQUs7QUFDMUQsS0FBQSxHQUFBOEMsbUJBQUF2RixVQUFTO01BQUNoRCxNQUFNbkIsV0FBVywrQkFBK0I7TUFBR3dGLE9BQU87SUFBSSxHQUFHLE9BQU87RUFDbkYsQ0FBQztBQUNIOztDZXZGQyxTQUFTMEYsY0FBYztBQUN2QnZCLGtCQUFnQjtBQUNqQixHQUFHOyIsCiAgIm5hbWVzIjogWyJCcm9hZGNhc3RDaGFubmVsIiwgImVsZW1lbnRJZCIsICJtb3VudFBvaW50U2VsZWN0b3IiLCAidmVyc2lvbiIsICJpbXBvcnRfdnVlNiIsICJyZXF1aXJlIiwgImlmQXJjTG9jTm90QWxsb3dlZCIsICJhcmNMb2MiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInNvdXJjZVRpdGxlIiwgIlRpdGxlIiwgImFyY0xvY1RpdGxlIiwgImFyY0xvY05hbWVzcGFjZUlkIiwgImdldE5hbWVzcGFjZUlkIiwgImFyY0xvY1BhZ2VOYW1lIiwgImdldE1haW4iLCAic291cmNlTmFtZXNwYWNlSWQiLCAic291cmNlUGFnZU5hbWUiLCAiaXNJbkJsYWNrbGlzdCIsICJibGFja0xpc3RSZWdleEFyciIsICJfaSIsICJfYmxhY2tMaXN0UmVnZXhBcnIiLCAibGVuZ3RoIiwgImVsZW1lbnQiLCAidGVzdCIsICJpc05vdEFsbG93ZWQiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dSZWxldmFudFVzZXJOYW1lIiwgIndnVXNlck5hbWUiLCAiaXNOb3RTdXBwb3J0ZWQiLCAid2dJc01haW5QYWdlIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1JldmlzaW9uSWQiLCAiZ2V0U2V0dGluZ3MiLCAic2V0dGluZ3MiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJkYXRhc2V0IiwgImFyY0xldmVsIiwgInNlY0FyYyIsICJzZWNEZWwiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiZ2V0U2VjdGlvbnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInBhZ2UiLCAicHJvcCIsICJwYXJzZSIsICJzZWN0aW9ucyIsICJzZWN0aW9uc1RvQXJjaGl2ZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAic2VjdGlvbiIsICJ2YWx1ZSIsICJsZXZlbCIsICJpbmRleCIsICJhbmNob3IiLCAic3RhcnRzV2l0aCIsICJlcnIiLCAiZSIsICJmIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRTZWN0aW9uQ29udGVudCIsICJfcmVmMiIsICJfcmVzcG9uc2UkcXVlcnkkcGFnZXMiLCAiX3Jlc3BvbnNlJHF1ZXJ5JHBhZ2VzMiIsICJydnByb3AiLCAidGl0bGVzIiwgInJ2c2VjdGlvbiIsICJydnNsb3RzIiwgInJlc3BvbnNlIiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImNvbnRlbnQiLCAiX3gyIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiQXJjaGl2ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJBcmNoaXZpbmciLCAiQXJjaGl2ZWQiLCAiRGVsZXRlIiwgIkRlbGV0aW5nIiwgIkRlbGV0ZWQiLCAiemgiLCAiUmVmcmVzaCIsICJSZWZyZXNoaW5nIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpc1BhZ2VFeGlzdCIsICJfcmVmMyIsICJhcmNoaXZlVG8iLCAiX3F1ZXJ5JHBhZ2VzJCIsICJxdWVyeSIsICJtaXNzaW5nIiwgIl94MyIsICJpc1NlY3Rpb25FeGlzdCIsICJfcmVmNCIsICJpc0V4aXN0IiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgIl94NCIsICJyZW1vdmVTZWN0aW9uIiwgIl9yZWY1IiwgInN1bW1hcnkiLCAiZWRpdCIsICJ0ZXh0IiwgIm1pbm9yIiwgIl94NSIsICJhcmNoaXZlU2VjdGlvbiIsICJfcmVmNiIsICJwYWdlRXhpc3QiLCAiY3JlYXRlIiwgImFwcGVuZHRleHQiLCAiX3g2IiwgImltcG9ydF92dWU0IiwgImdldEFyY2hpdmluZ01lc3NhZ2UiLCAiaW5kZXhObyIsICJyZXBsYWNlIiwgImdldEFyY2hpdmVkTWVzc2FnZSIsICJnZXREZWxldGluZ01lc3NhZ2UiLCAiZ2V0RGVsZXRlZE1lc3NhZ2UiLCAiaW1wb3J0X2NvZGV4MiIsICJpbXBvcnRfY29kZXgiLCAicHJvcHMiLCAiX19wcm9wcyIsICJpbXBvcnRfdnVlMiIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgImNyZWF0ZVRleHRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiY3JlYXRlVk5vZGUiLCAid2VpZ2h0IiwgInR5cGUiLCAic2l6ZSIsICJvbkNsaWNrIiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJfIiwgIkNvbmZsaWN0Tm90aWNlX2RlZmF1bHQiLCAiX19maWxlIiwgIkNvbmZsaWN0Tm90aWNlX2RlZmF1bHQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZWZyZXNoIiwgInRhcmdldFBhZ2UiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAidG9hc3RpZnkiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iLCAidXRpbCIsICJnZXRVcmwiLCAicmVsb2FkIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhcmNoaXZlVXJsIiwgImNvbXB1dGVkIiwgInNob3dTZWN0aW9uTGlua3MiLCAicmVmIiwgIndvcmtpbmdTZWN0aW9uIiwgIndvcmtpbmdBY3Rpb24iLCAiYWN0aW9uRmFpbGVkIiwgImNvbmZsaWN0QXBwIiwgImNvbmZsaWN0Um9vdCIsICJfY29uZmxpY3RBcHAiLCAiX2NvbmZsaWN0Um9vdCIsICJ1bm1vdW50IiwgInJlbW92ZSIsICJzaG93VG9hc3QiLCAiY2xvc2UiLCAibWVzc2FnZUNoYW5uZWwiLCAiQnJvYWRjYXN0Q2hhbm5lbCIsICJyZWZyZXNoQ2hhbm5lbCIsICJvbk1lc3NhZ2UiLCAiZXZlbnQiLCAiZGF0YSIsICJvblJlZnJlc2hNZXNzYWdlIiwgImNyZWF0ZUVsZW1lbnQiLCAiY3JlYXRlQXBwIiwgIm1vdW50IiwgIm5vZGUiLCAib25Nb3VudGVkIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAib25CZWZvcmVVbm1vdW50IiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAicnVuU2VjdGlvbkFjdGlvbiIsICJfcmVmNyIsICJwZW5kaW5nTWVzc2FnZSIsICJwb3N0TWVzc2FnZSIsICJlcnJvciIsICJjb25zb2xlIiwgImZhaWx1cmVNZXNzYWdlIiwgImNvbXBsZXRlTWVzc2FnZSIsICJfeDciLCAiX3g4IiwgImFyY2hpdmVMaW5rIiwgImRlbGV0ZUxpbmsiLCAiaW1wb3J0X3Z1ZTUiLCAiX2hvaXN0ZWRfMSIsICJfaG9pc3RlZF8yIiwgImNsYXNzIiwgIl9ob2lzdGVkXzMiLCAiX2hvaXN0ZWRfNCIsICJyZW5kZXIyIiwgIkZyYWdtZW50IiwgIm5vdGljZVR5cGUiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgImhyZWYiLCAicmVuZGVyTGlzdCIsICJzZWN0aW9uTGlua3MiLCAiXyRzZXR1cCR3b3JraW5nU2VjdGlvIiwgImNyZWF0ZUJsb2NrIiwgIlRlbGVwb3J0IiwgInRvIiwgInRhcmdldCIsICJjYW5BcmNoaXZlIiwgImRpc2FibGVkIiwgIkJvb2xlYW4iLCAiJGV2ZW50IiwgImNyZWF0ZUNvbW1lbnRWTm9kZSIsICJjYW5EZWxldGUiLCAiQXBwX2RlZmF1bHQiLCAiX19zY29wZUlkIiwgIkFwcF9kZWZhdWx0MiIsICJjcmVhdGVGb290ZXJSb290IiwgIm1vdW50UG9pbnQiLCAic2tpbiIsICJpc0NpdGl6ZW4iLCAiaXNMaXN0SXRlbSIsICJpbmNsdWRlcyIsICJyb290IiwgImlkIiwgImNsYXNzTGlzdCIsICJhZGQiLCAicHJlcGVuZCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAibG9hZEVhc3lBcmNoaXZlIiwgIl9zZXR0aW5ncyIsICJyZWFjdGl2ZSIsICJhcHAiLCAidGhlbiIsICJoZWFkaW5ncyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImhlYWRsaW5lSWRzIiwgIlNldCIsICJtYXAiLCAiaGVhZGluZyIsICJfaGVhZGluZyRxdWVyeVNlbGVjdG8iLCAiZmlsdGVyIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIl9oZWFkbGluZSRwYXJlbnRFbGVtZSIsICJoYXMiLCAiaGVhZGxpbmUiLCAiZ2V0RWxlbWVudEJ5SWQiLCAiZWRpdFNlY3Rpb24iLCAicGFyZW50RWxlbWVudCIsICJwdXNoIiwgImNhdGNoIiwgImVhc3lBcmNoaXZlIl0KfQo=
