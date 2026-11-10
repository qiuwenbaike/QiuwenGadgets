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
  for (const element of blackListRegexArr) {
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
    arcLevel: arcLevel ?? "2",
    arcLoc: arcLoc ?? "",
    secArc: secArc ?? "1",
    secDel: secDel ?? "1"
  };
};
var import_vue3 = require("vue");
//! src/EasyArchive/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)(`EasyArchive/${version}`);
//! src/EasyArchive/modules/util/getSection.ts
var getSections = async (title) => {
  const params = {
    action: "parse",
    format: "json",
    formatversion: "2",
    page: title,
    prop: "sections"
  };
  const {
    parse
  } = await api.get(params);
  const {
    sections
  } = parse;
  const sectionsToArchive = [];
  for (const section of sections) {
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
  return sectionsToArchive;
};
var getSectionContent = async ({
  title,
  section
}) => {
  var _response$query$pages;
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
  const response = await api.get(params);
  return ((_response$query$pages = response["query"].pages[0]) === null || _response$query$pages === void 0 || (_response$query$pages = _response$query$pages.revisions) === null || _response$query$pages === void 0 ? void 0 : _response$query$pages[0].slots.main.content) ?? null;
};
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
var isPageExist = async (archiveTo) => {
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
  } = await api.get(params);
  if ((_query$pages$ = query.pages[0]) !== null && _query$pages$ !== void 0 && _query$pages$.missing) {
    return false;
  }
  return true;
};
var isSectionExist = async ({
  index,
  anchor
}) => {
  const {
    wgPageName
  } = mw.config.get();
  const sections = await getSections(wgPageName);
  let isExist = false;
  for (const section of sections) {
    if (index === section.index && anchor === section.anchor) {
      isExist = true;
    }
  }
  return isExist;
};
var removeSection = async ({
  index,
  anchor,
  summary
}) => {
  const {
    wgPageName
  } = mw.config.get();
  const isExist = await isSectionExist({
    index,
    anchor
  });
  if (isExist !== true) {
    return;
  }
  const content = await getSectionContent({
    title: wgPageName,
    section: index
  });
  if (content === null) {
    return;
  }
  await api.edit(wgPageName, () => {
    return {
      section: index,
      text: "",
      summary: summary ?? getMessage("Delete summary"),
      minor: true
    };
  });
};
var archiveSection = async ({
  index,
  anchor,
  archiveTo
}) => {
  const {
    wgPageName
  } = mw.config.get();
  const isExist = await isSectionExist({
    index,
    anchor
  });
  if (isExist !== true) {
    return;
  }
  const content = await getSectionContent({
    title: wgPageName,
    section: index
  });
  if (content === null) {
    return;
  }
  const pageExist = await isPageExist(archiveTo);
  if (!pageExist) {
    await api.create(archiveTo, {
      summary: getMessage("Create summary"),
      minor: true
    }, "{{talkarchive}}");
  }
  await api.edit(archiveTo, () => {
    return {
      appendtext: `

${content}`,
      summary: getMessage("Archive summary"),
      minor: true
    };
  });
  await removeSection({
    index,
    anchor,
    summary: getMessage("Archive summary")
  });
};
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
    const messageChannel = new BroadcastChannel(`${mw.config.get().wgPageName}_message`);
    const refreshChannel = new BroadcastChannel(`${mw.config.get().wgPageName}_refresh`);
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
    const runSectionAction = async (section, action) => {
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
          await archiveSection({
            index: section.indexNo,
            anchor: section.anchor,
            archiveTo: section.archiveTo
          });
        } else {
          await removeSection({
            index: section.indexNo,
            anchor: section.anchor
          });
        }
      } catch (error) {
        console.error(`EasyArchive failed to ${action} section ${section.indexNo}`, error);
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
    };
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
    const headings = document.querySelectorAll(`h${arcLevel}`);
    const headlineIds = new Set([...headings].map((heading) => {
      var _heading$querySelecto;
      return (_heading$querySelecto = heading.querySelector(".mw-headline")) === null || _heading$querySelecto === void 0 ? void 0 : _heading$querySelecto.id;
    }).filter((id) => Boolean(id)));
    for (const section of sections) {
      var _headline$parentEleme;
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

