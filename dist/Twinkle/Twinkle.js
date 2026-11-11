/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://git.qiuwen.net.cn/Mirror/xiplus-twinkle}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Twinkle}
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

// dist/Twinkle/Twinkle.js
//! src/Twinkle/modules/utils/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("morebits.js; Twinkle/1.1");
//! src/Twinkle/modules/utils/useUls.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var uls = (simplified, traditional) => {
  return typeof import_ext_gadget2.wgULS === "function" ? (0, import_ext_gadget2.wgULS)(simplified, traditional) : simplified;
};
//! src/Twinkle/modules/twinkle.ts
/*! Twinkle.js - twinkle.ts */
var Morebits = window.Morebits;
(function twinkle() {
  var _window;
  const $body6 = $("body");
  const Twinkle2 = {};
  (_window = window).Twinkle || (_window.Twinkle = Twinkle2);
  if (!Morebits.userIsInGroup("autoconfirmed") && !Morebits.userIsInGroup("confirmed")) {
    console.warn("[Twinkle] 非确认用户或自动确认用户，Twinkle不会运行。");
    return;
  }
  Twinkle2.changeTags = "Twinkle";
  Twinkle2.summaryAd = "（[[H:TW|Twinkle]]）";
  Twinkle2.hatnoteRegex = "(?:Short[ _]description)|(?:Rellink|Hatnote|HAT)|(?:Main|[细細][节節]|Main[ _]articles|主[条條]目|Hurricane[ _]main|[条條]目|主|[頁页]面|主[頁页]面|主[頁页]|主[題题]目|Main[ _]article|AP)|(?:Wrongtitle|Correct[ _]title)|(?:主条目消歧义|主條目消歧義|消歧义链接|消歧義鏈接|消歧義連結|消连|消連|消歧义连结|DisambLink|Noteref|Dablink)|(?:Distinguish|不是|Not|提示|混淆|分別|分别|區別|区别|本条目的主题不是|本條目的主題不是|本条目主题不是|本條目主題不是|条目主题不是|條目主題不是|主题不是|主題不是|Confused|区分|區分|Confusion|Confuse|RedirectNOT|Misspelling)|(?:Distinguish2|SelfDistinguish|Not2|不是2)|(?:For)|(?:Details|Further|See|另见|另見|More|相關條目|相关条目|Detail|见|見|更多资料|更多資料|Further[ _]information|更多资讯|更多資訊|More[ _]information|更多信息)|(?:Selfref)|(?:About|Otheruses4|关于|關於)|(?:Other[ _]uses|Otheruse|条目消歧义|條目消歧義|他用|Otheruses)|(?:Other[ _]uses list|Otheruselist|主條目消歧義列表|主条目消歧义列表|Otheruseslist|Aboutlist|About[ _]list|Otheruses[ _]list)|(?:Redirect|重定向至此|Redirects[ _]here|Redirect[ _]to)|(?:Redirect2|主條目消歧義2|主条目消歧义2|Redir|重定向至此2)|(?:Redirect3)|(?:Redirect4)|(?:Redirect-distinguish)|(?:Redirect-synonym)|(?:Redirect-multi)|(?:See[ _]Wiktionary|Seewikt)|(?:Seealso|参看|參看|See[ _]also|参见|參見|Also)|(?:See[ _]also2|Seealso2|不轉換參見|不转换参见)|(?:Other[ _]places)|(?:Contrast|對比|对比)";
  Twinkle2.initCallbacks = [];
  Twinkle2.addInitCallback = (func, name) => {
    Twinkle2.initCallbacks[Twinkle2.initCallbacks.length] = {
      func,
      name
    };
  };
  Twinkle2.defaultConfig = {
    // General
    userTalkPageMode: "tab",
    dialogLargeFont: false,
    disabledModules: Morebits.userIsSysop ? [] : ["block"],
    // default to disable block for non-sysop, if enable manually, they can only use it to tag userpage
    disabledSysopModules: [],
    // ARV
    spiWatchReport: "yes",
    // Block
    defaultToBlock64: false,
    defaultToPartialBlocks: false,
    blankTalkpageOnIndefBlock: false,
    watchBlockNotices: "yes",
    customBlockReasonList: [],
    // Fluff (revert and rollback)
    openTalkPage: [],
    openTalkPageOnAutoRevert: false,
    rollbackInPlace: false,
    markRevertedPagesAsMinor: ["vand"],
    watchRevertedPages: ["norm", "vand", "torev"],
    watchRevertedExpiry: "yes",
    offerReasonOnNormalRevert: true,
    confirmOnFluff: false,
    showRollbackLinks: ["diff", "others"],
    customRevertSummary: [],
    // DI (twinkleimage)
    notifyUserOnDeli: true,
    deliWatchPage: "default",
    deliWatchUser: "default",
    // Protect
    watchRequestedPages: "yes",
    watchPPTaggedPages: "default",
    watchProtectedPages: "default",
    // CSD
    speedySelectionStyle: "buttonClick",
    watchSpeedyPages: ["g1", "g3", "g4", "g7", "g8"],
    watchSpeedyExpiry: "yes",
    markSpeedyPagesAsPatrolled: false,
    watchSpeedyUser: "1 month",
    // these next two should probably be identical by default
    notifyUserOnSpeedyDeletionNomination: ["db", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "a1", "a2", "a3", "r1", "r2", "f1", "f2", "f3", "f4", "f5", "o1", "o2", "o3"],
    warnUserOnSpeedyDelete: ["db", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "a1", "a2", "a3", "r1", "r2", "f1", "f2", "f3", "f4", "f5", "o1", "o2", "o3"],
    promptForSpeedyDeletionSummary: [],
    openUserTalkPageOnSpeedyDelete: [],
    deleteTalkPageOnDelete: true,
    deleteRedirectsOnDelete: true,
    deleteSysopDefaultToDelete: false,
    speedyWindowHeight: 500,
    speedyWindowWidth: 800,
    logSpeedyNominations: true,
    speedyLogPageName: "CSD日志",
    noLogOnSpeedyNomination: ["o1"],
    enlargeG7Input: false,
    // Unlink
    unlinkNamespaces: ["0", "6", "10", "118"],
    // Warn
    defaultWarningGroup: "1",
    combinedSingletMenus: false,
    watchWarnings: "yes",
    oldSelect: false,
    customWarningList: [],
    autoMenuAfterRollback: false,
    // XfD
    logXfdNominations: true,
    xfdLogPageName: "XfD日志",
    noLogOnXfdNomination: [],
    xfdWatchDiscussion: "default",
    xfdWatchPage: "default",
    xfdWatchUser: "default",
    markXfdPagesAsPatrolled: true,
    FwdCsdToXfd: Morebits.userIsSysop,
    afdDefaultCategory: "delete",
    afdFameDefaultReason: "没有足够的可靠来源证明此条目符合[[Qiuwen:收录标准|收录标准]]",
    afdSubstubDefaultReason: "过期小小作品",
    XfdClose: Morebits.userIsSysop ? "all" : "hide",
    // Copyvio
    copyvioWatchPage: "yes",
    copyvioWatchUser: "yes",
    markCopyvioPagesAsPatrolled: true,
    // Hidden preferences
    autolevelStaleDays: 3,
    revertMaxRevisions: 50,
    // intentionally limited
    batchMax: 5e3,
    batchChunks: 50,
    configPage: "Help:Twinkle/参数设置",
    projectNamespaceName: mw.config.get("wgFormattedNamespaces")[4] ?? "",
    sandboxPage: "Qiuwen:沙盒",
    // Deprecated options, as a fallback for add-on scripts/modules
    summaryAd: "（[[H:TW|Twinkle]]）",
    deletionSummaryAd: "（[[H:TW|Twinkle]]）",
    protectionSummaryAd: "（[[H:TW|Twinkle]]）",
    blockSummaryAd: "（[[H:TW|Twinkle]]）",
    // Tag
    groupByDefault: true,
    watchTaggedPages: "yes",
    watchMergeDiscussions: "yes",
    markTaggedPagesAsMinor: false,
    markTaggedPagesAsPatrolled: true,
    tagArticleSortOrder: "cat",
    customTagList: [],
    customFileTagList: [],
    customRedirectTagList: [],
    // Stub
    watchStubbedPages: false,
    markStubbedPagesAsMinor: false,
    markStubbedPagesAsPatrolled: true,
    stubArticleSortOrder: "cat",
    customStubList: [],
    // Talkback
    markTalkbackAsMinor: true,
    insertTalkbackSignature: true,
    // always sign talkback templates
    talkbackHeading: uls("回复通告", "回覆通告"),
    mailHeading: uls("您有新邮件！", "您有新郵件！")
  };
  switch (mw.config.get("skin")) {
    case "vector":
    case "vector-2022":
      Twinkle2.defaultConfig.portletArea = "right-navigation";
      Twinkle2.defaultConfig.portletId = "p-twinkle";
      Twinkle2.defaultConfig.portletName = "TW";
      Twinkle2.defaultConfig.portletType = "menu";
      Twinkle2.defaultConfig.portletNext = "p-search";
      break;
    case "gongbi":
      Twinkle2.defaultConfig.portletArea = $body6.find("#page-tools .sidebar-inner").length > 0 ? "#page-tools .sidebar-inner" : "#page-more .sidebar-inner";
      Twinkle2.defaultConfig.portletId = "p-twinkle";
      Twinkle2.defaultConfig.portletName = "Twinkle";
      Twinkle2.defaultConfig.portletType = null;
      Twinkle2.defaultConfig.portletNext = $body6.find("#page-tools .sidebar-inner").length > 0 ? "page-more" : null;
      break;
    case "citizen":
      Twinkle2.defaultConfig.portletArea = "#citizen-page-actions-more__card .citizen-menu__card-content";
      Twinkle2.defaultConfig.portletId = "p-twinkle";
      Twinkle2.defaultConfig.portletName = "Twinkle";
      Twinkle2.defaultConfig.portletType = "nav";
      Twinkle2.defaultConfig.portletNext = "p-tb";
      break;
    default:
      Twinkle2.defaultConfig.portletArea = null;
      Twinkle2.defaultConfig.portletId = "p-cactions";
      Twinkle2.defaultConfig.portletName = null;
      Twinkle2.defaultConfig.portletType = null;
      Twinkle2.defaultConfig.portletNext = null;
  }
  Twinkle2.getPref = (name) => {
    if (typeof Twinkle2.prefs === "object" && Twinkle2.prefs[name] !== void 0) {
      return Twinkle2.prefs[name];
    }
    const legacyPrefs = window.TwinkleConfig;
    if (typeof legacyPrefs === "object" && legacyPrefs[name] !== void 0) {
      return legacyPrefs[name];
    }
    return Twinkle2.defaultConfig[name];
  };
  Twinkle2.addPortlet = (navigation, id, text, type, nextnodeid) => {
    const root = document.querySelector(/^(?:#|\.)/.test(navigation) ? navigation : `#${navigation}`);
    if (!root) {
      return null;
    }
    const item = document.querySelector(`#${id}`);
    if (item) {
      if (item.parentNode && item.parentNode === root) {
        return item;
      }
      return null;
    }
    let nextnode;
    if (nextnodeid) {
      nextnode = document.querySelector(`#${nextnodeid}`) ?? void 0;
    }
    const skin = mw.config.get("skin");
    if (skin !== "vector" && skin !== "vector-2022" || navigation !== "left-navigation" && navigation !== "right-navigation") {
      type = null;
    }
    let outerNavClass;
    let innerDivClass;
    let ulClassName;
    switch (skin) {
      case "vector":
      case "vector-2022":
        if (navigation !== "portal" && navigation !== "left-navigation" && navigation !== "right-navigation") {
          navigation = "mw-panel";
        }
        outerNavClass = "mw-portlet vector-menu";
        if (navigation === "mw-panel") {
          outerNavClass += " vector-menu-portal";
        } else if (type === "menu") {
          outerNavClass += " vector-menu-dropdown vector-dropdown vector-menu-dropdown-noicon";
        } else {
          outerNavClass += " vector-menu-tabs";
        }
        innerDivClass = "vector-menu-content vector-dropdown-content";
        ulClassName = "vector-menu-content-list";
        break;
      case "gongbi":
        outerNavClass = "mw-portlet";
        innerDivClass = "mw-portlet-body";
        break;
      case "citizen":
        outerNavClass = "citizen-menu mw-portlet";
        innerDivClass = "citizen-menu__content mw-portlet-twinkle";
        ulClassName = "citizen-menu__content-list";
        break;
      default:
        navigation = "column-one";
        outerNavClass = "portlet";
        break;
    }
    let outerNav;
    let heading;
    if (skin === "vector-2022") {
      outerNav = document.createElement("div");
      heading = document.createElement("label");
    } else {
      outerNav = document.createElement("nav");
      heading = document.createElement("h3");
    }
    outerNav.setAttribute("aria-labelledby", `${id}-label`);
    outerNav.className = `${outerNavClass} emptyPortlet`;
    outerNav.id = id;
    if (nextnode && nextnode.parentNode === root) {
      root.insertBefore(outerNav, nextnode);
    } else {
      root.appendChild(outerNav);
    }
    heading.id = `${id}-label`;
    const ul = document.createElement("ul");
    if (skin === "vector" || skin === "vector-2022") {
      heading.setAttribute("for", `${id}-dropdown-checkbox`);
      ul.className = "vector-menu-content-list";
      heading.className = "vector-menu-heading vector-dropdown-label";
      if (outerNavClass.includes("vector-menu-dropdown")) {
        const chkbox = document.createElement("input");
        chkbox.id = `${id}-dropdown-checkbox`;
        chkbox.className = "vector-menu-checkbox vector-dropdown-checkbox";
        chkbox.setAttribute("type", "checkbox");
        chkbox.setAttribute("aria-labelledby", `${id}-label`);
        outerNav.appendChild(chkbox);
        const span = document.createElement("span");
        span.appendChild(document.createTextNode(text));
        heading.appendChild(span);
        const a = document.createElement("a");
        a.href = "#";
        $(a).on("click", (e) => {
          e.preventDefault();
        });
        heading.appendChild(a);
      }
    } else {
      if (ulClassName) {
        ul.className = ulClassName;
      }
      heading.appendChild(document.createTextNode(text));
    }
    outerNav.appendChild(heading);
    if (innerDivClass) {
      const innerDiv = document.createElement("div");
      innerDiv.className = innerDivClass;
      innerDiv.appendChild(ul);
      outerNav.appendChild(innerDiv);
    } else {
      outerNav.appendChild(ul);
    }
    return outerNav;
  };
  let cactionsAdjusted = false;
  let resizeQueued = false;
  const queueCollapsibleTabsResize = () => {
    if (resizeQueued) {
      return;
    }
    resizeQueued = true;
    window.setTimeout(() => {
      resizeQueued = false;
      if ($.collapsibleTabs) {
        $.collapsibleTabs.handleResize();
      }
    }, 0);
  };
  Twinkle2.addPortletLink = (task, text, id, tooltip) => {
    const portletArea = Twinkle2.getPref("portletArea");
    if (portletArea !== null && portletArea !== void 0) {
      Twinkle2.addPortlet(portletArea, Twinkle2.getPref("portletId") ?? "", Twinkle2.getPref("portletName") ?? "", Twinkle2.getPref("portletType") ?? null, Twinkle2.getPref("portletNext") ?? void 0);
    }
    const link = mw.util.addPortletLink(Twinkle2.getPref("portletId") ?? "", typeof task === "string" ? task : "#", text, id, tooltip);
    if (!cactionsAdjusted) {
      const $cactions = $body6.find(".client-js .skin-vector #p-cactions");
      if ($cactions.length) {
        $cactions.css("margin-right", "initial");
        cactionsAdjusted = true;
      }
    }
    if (typeof task === "function" && link) {
      $(link).find("a").on("click", (ev) => {
        task();
        ev.preventDefault();
      });
    }
    queueCollapsibleTabsResize();
    return link;
  };
  const parseTwinkleOptions = (content) => {
    const match = /window\.Twinkle\.prefs\s*=\s*(\{[\s\S]*\})\s*;/.exec(content);
    if (!match) {
      return;
    }
    try {
      return JSON.parse(match[1] ?? "");
    } catch {
      return void 0;
    }
  };
  const notifyPreferencesError = () => {
    void mw.notify(uls("未能加载您的Twinkle参数设置", "未能載入您的Twinkle偏好設定"), {
      type: "error",
      tag: "twinkle"
    });
  };
  Twinkle2.prefs || (Twinkle2.prefs = {});
  void api.get({
    action: "query",
    prop: ["revisions"],
    rvprop: "content",
    format: "json",
    formatversion: "2",
    titles: `User:${mw.config.get("wgUserName")}/twinkleoptions.js`,
    rvlimit: "1",
    rvslots: "main"
  }).then((response) => {
    if (!response["query"].pages[0].missing) {
      const content = response["query"].pages[0].revisions[0].slots.main.content ?? "";
      if (content !== "") {
        const prefs = parseTwinkleOptions(content);
        if (prefs) {
          Twinkle2.prefs = prefs;
        } else {
          notifyPreferencesError();
        }
      }
    }
  }).fail(() => {
    notifyPreferencesError();
  }).always(() => {
    $(Twinkle2.load);
  });
  Twinkle2.load = () => {
    let activeSpecialPageList = ["Block", "Contributions", "AbuseLog", "Recentchanges", "Recentchangeslinked"];
    if (Morebits.userIsSysop) {
      activeSpecialPageList = [...activeSpecialPageList, "DeletedContributions", "Prefixindex", "BrokenRedirects"];
    }
    const canonicalSpecialPageName = mw.config.get("wgCanonicalSpecialPageName");
    if (mw.config.get("wgNamespaceNumber") === -1 && (canonicalSpecialPageName === false || !activeSpecialPageList.includes(canonicalSpecialPageName))) {
      return;
    }
    if (window.top !== window.self) {
      return;
    }
    Twinkle2.userAgent = "Twinkle/1.1";
    Morebits.wiki.api.setApiUserAgent(Twinkle2.userAgent);
    Twinkle2.disabledModules = [...Twinkle2.getPref("disabledModules"), ...Twinkle2.getPref("disabledSysopModules")];
    Twinkle2.addInitCallback = (func, name) => {
      var _Twinkle2$disabledMod;
      if (!name || !((_Twinkle2$disabledMod = Twinkle2.disabledModules) !== null && _Twinkle2$disabledMod !== void 0 && _Twinkle2$disabledMod.includes(name))) {
        func();
      }
    };
    for (const module of Twinkle2.initCallbacks) {
      Twinkle2.addInitCallback(module.func, module.name);
    }
    if (Twinkle2.getPref("dialogLargeFont")) {
      mw.util.addCSS(".morebits-dialog-content,.morebits-dialog-footerlinks{font-size:100%!important}.morebits-dialog input,.morebits-dialog select,.morebits-dialog-content button{font-size:inherit !important}");
    }
    const isVector = ["vector", "vector-2022"].includes(mw.config.get("skin"));
    if (isVector && Twinkle2.getPref("portletType") === "menu" && $body6.find("#p-twinkle").length === 0) {
      $body6.find("#p-cactions").css("margin-right", "initial");
    }
  };
  Twinkle2.sortByNamespace = (first, second) => {
    return (first.ns ?? 0) - (second.ns ?? 0) || (first.title > second.title ? 1 : -1);
  };
  Twinkle2.generateBatchPageLinks = (checkbox) => {
    const $checkbox = $(checkbox);
    const link = Morebits.htmlNode("a", $checkbox.val() ?? "");
    link.setAttribute("class", "tw-batchpage-link");
    link.setAttribute("href", mw.util.getUrl($checkbox.val()));
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    $checkbox.next().prepend(link, document.createTextNode(" "));
  };
})();
//! src/Twinkle/modules/utils/mountDialog.ts
var import_vue = require("vue");
/*! Twinkle - shared Vue dialog mounting helper */
var mountDialog = (component, props = {}) => {
  const root = document.createElement("div");
  document.body.append(root);
  let mounted = true;
  const teardown = () => {
    if (mounted) {
      mounted = false;
      app.unmount();
      root.remove();
    }
  };
  const app = (0, import_vue.createApp)({
    render: () => (0, import_vue.h)(component, {
      ...props,
      onClose: teardown
    })
  });
  app.mount(root);
  return {
    close: teardown
  };
};
//! src/Twinkle/modules/utils/lazyDialogs.ts
/*! Twinkle - lazy loading of dialog components from Gadget-TwinkleDialogs */
var DIALOGS_MODULE = "ext.gadget.TwinkleDialogs";
var getDialogComponent = async (name) => {
  var _window$TwinkleDialog;
  await mw.loader.using(DIALOGS_MODULE);
  const component = (_window$TwinkleDialog = window.TwinkleDialogs) === null || _window$TwinkleDialog === void 0 ? void 0 : _window$TwinkleDialog[name];
  if (!component) {
    throw new Error(`Twinkle: dialog component "${name}" is not registered`);
  }
  return component;
};
var mountLazyDialog = (name, props = {}) => {
  let teardown = () => {
  };
  let closeRequested = false;
  void (async () => {
    try {
      const component = await getDialogComponent(name);
      const handle = mountDialog(component, props);
      if (closeRequested) {
        handle.close();
      } else {
        teardown = handle.close;
      }
    } catch {
      void mw.notify(uls("未能加载Twinkle对话框", "未能載入Twinkle對話框"), {
        type: "error",
        tag: "twinkle"
      });
    }
  })();
  return {
    close: () => {
      closeRequested = true;
      teardown();
    }
  };
};
//! src/Twinkle/modules/twinklearv.ts
var import_vue2 = require("vue");
/*! Twinkle.js - twinklearv.ts */
var twinklearv = () => {
  const username = mw.config.get("wgRelevantUserName");
  if (!username) {
    return;
  }
  const isIP = mw.util.isIPAddress(username);
  const title = isIP ? uls("报告IP给管理员", "報告IP給管理員") : uls("报告用户给管理人员", "報告使用者給管理人員");
  Twinkle.addPortletLink(() => {
    twinklearv.callback(username, isIP);
  }, uls("告状", "告狀"), "tw-arv", title);
};
twinklearv.callback = (uid, isIP) => {
  if (uid === mw.config.get("wgUserName")) {
    void mw.notify(uls("你不想报告你自己，对吧？", "你不想報告你自己，對吧？"), {
      type: "warn",
      tag: "twinklearv"
    });
    return;
  }
  const blockNotice = (0, import_vue2.reactive)({
    text: "",
    severe: true
  });
  mountLazyDialog("TwArvDialog", {
    uid,
    isIP: Boolean(isIP),
    blockNotice,
    title: uls("报告用户给管理人员", "報告使用者給管理人員"),
    footerLinks: [{
      text: uls("告状设置", "告狀設定"),
      href: mw.util.getUrl("H:TW/PREF#arv")
    }, {
      text: uls("Twinkle帮助", "Twinkle說明"),
      href: mw.util.getUrl("H:TW#告狀")
    }]
  });
  const query = {
    action: "query",
    list: "blocks",
    bkprop: "range|flags",
    format: "json"
  };
  if (isIP) {
    query.bkip = uid;
  } else {
    query.bkusers = uid;
  }
  new window.Morebits.wiki.api(uls("检查用户的封禁状态", "檢查使用者的封鎖狀態"), query, (apiobj) => {
    var _response$query;
    const response = apiobj.getResponse();
    const blocklist = ((_response$query = response.query) === null || _response$query === void 0 ? void 0 : _response$query.blocks) ?? [];
    if (blocklist.length) {
      const [block] = blocklist;
      if (!block) {
        return;
      }
      let message = (isIP ? uls("此IP地址", "此IP位址") : uls("此账号", "此賬號")) + uls("已经被", "已經被") + (block.partial ? "部分" : "");
      message += (block.rangestart === block.rangeend ? "" : "段") + uls("封禁。", "封鎖。");
      blockNotice.severe = !block.partial;
      blockNotice.text = message;
    }
  }).post();
};
Twinkle.arv = twinklearv;
Twinkle.addInitCallback(twinklearv, "arv");
//! src/Twinkle/modules/ui/morebits.ts
/*! Twinkle - shared typed access to the Morebits global (provided by `ext.gadget.morebits`). */
var Morebits2 = window.Morebits;
var newParamsApi = (statusText, query, onSuccess, onError) => {
  return new Morebits2.wiki.api(statusText, query, onSuccess, void 0, onError);
};
//! src/Twinkle/modules/utils/footerLinks.ts
/*! Twinkle - shared dialog footer links helper */
var footerLinks = (module, settingsText, extra = [], feedback = false) => [...extra, {
  text: settingsText,
  href: mw.util.getUrl(`H:TW/PREF#${module}`)
}, {
  text: uls("Twinkle帮助", "Twinkle說明"),
  href: mw.util.getUrl(`H:TW/DOC#${module}`)
}, ...feedback ? [{
  text: uls("反馈意见", "回報意見"),
  href: mw.util.getUrl("HT:TW")
}] : []];
//! src/Twinkle/modules/twinklewarn.ts
var import_vue3 = require("vue");
/*! Twinkle.js - twinklewarn.ts */
var $body = $("body");
var relevantUserName = mw.config.get("wgRelevantUserName") ?? "";
var twinklewarn = () => {
  if (relevantUserName) {
    Twinkle.addPortletLink(twinklewarn.callback, "警告", "tw-warn", uls("警告或提醒用户", "警告或提醒使用者"));
    if (Twinkle.getPref("autoMenuAfterRollback") === true && mw.config.get("wgNamespaceNumber") === 3 && mw.util.getParamValue("vanarticle") && !mw.util.getParamValue("noautowarn")) {
      twinklewarn.callback();
    }
  }
  if (mw.config.get("wgAction") === "rollback") {
    const $vandalTalkLink = $body.find("#mw-rollback-success").find(".mw-usertoollinks a").first();
    if ($vandalTalkLink.length) {
      twinklewarn.makeVandalTalkLink($vandalTalkLink, Morebits2.pageNameNorm);
      $vandalTalkLink.css("font-weight", "bold");
    }
  }
  if (mw.config.get("wgCanonicalSpecialPageName") === "AbuseLog" && mw.config.get("wgAbuseFilterVariables") !== null) {
    const afTalkLink = $body.find(".mw-usertoollinks-talk").first();
    if (afTalkLink.length) {
      const afv = mw.config.get("wgAbuseFilterVariables");
      twinklewarn.makeVandalTalkLink(afTalkLink, afv["page_prefixedtitle"] ?? "");
      afTalkLink.css("font-weight", "bold");
    }
  }
};
twinklewarn.makeVandalTalkLink = ($vandalTalkLink, pagename) => {
  $vandalTalkLink.wrapInner($("<span>").attr("title", uls("如果合适，您可以用Twinkle在该用户讨论页上做出警告。", "如果合適，您可以用Twinkle在該使用者討論頁上做出警告。")));
  const extraParam = `vanarticle=${mw.util.rawurlencode(pagename)}`;
  const href = $vandalTalkLink.attr("href") ?? "";
  if (href.includes("?")) {
    $vandalTalkLink.attr("href", `${href}&${extraParam}`);
  } else {
    $vandalTalkLink.attr("href", `${href}?${extraParam}`);
  }
};
twinklewarn.callback = () => {
  var _mainGroupOptions$fin;
  if (relevantUserName === mw.config.get("wgUserName") && !confirm(uls("您将要警告自己！您确定要继续吗？", "您將要警告自己！您確定要繼續嗎？"))) {
    return;
  }
  const notice = (0, import_vue3.reactive)({
    text: ""
  });
  const defaultGroup = Number.parseInt(Twinkle.getPref("defaultWarningGroup"), 10);
  const mainGroupOptions = [{
    value: "autolevel",
    label: uls("自动选择层级", "自動選擇層級"),
    selected: defaultGroup === 7
  }, {
    value: "level1",
    label: "1：提醒",
    selected: defaultGroup === 1
  }, {
    value: "level2",
    label: "2：警告",
    selected: defaultGroup === 2
  }];
  if (Twinkle.getPref("combinedSingletMenus") === true) {
    mainGroupOptions.push({
      value: "singlecombined",
      label: uls("单层级消息", "單層級訊息"),
      selected: defaultGroup === 3 || defaultGroup === 4
    });
  } else {
    mainGroupOptions.push({
      value: "singlenotice",
      label: uls("单层级提醒", "單層級提醒"),
      selected: defaultGroup === 3
    }, {
      value: "singlewarn",
      label: uls("单层级警告", "單層級警告"),
      selected: defaultGroup === 4
    });
  }
  if (Twinkle.getPref("customWarningList").length) {
    mainGroupOptions.push({
      value: "custom",
      label: uls("自定义警告", "自訂警告"),
      selected: defaultGroup === 5
    });
  }
  mainGroupOptions.push({
    value: "kitchensink",
    label: "所有警告模板",
    selected: defaultGroup === 6
  });
  const initialMainGroup = ((_mainGroupOptions$fin = mainGroupOptions.find((option) => {
    return option.selected;
  })) === null || _mainGroupOptions$fin === void 0 ? void 0 : _mainGroupOptions$fin.value) ?? "autolevel";
  const {
    close: closeDialog
  } = mountLazyDialog("TwWarnDialog", {
    title: uls("警告、提醒用户", "警告、提醒使用者"),
    relevantUserName,
    mainGroupOptions,
    initialMainGroup,
    initialArticle: mw.util.getParamValue("vanarticle") || "",
    messages: twinklewarn.messages,
    customWarningList: Twinkle.getPref("customWarningList"),
    notice,
    footerLinks: footerLinks("warn", uls("警告设置", "警告設定")),
    onOpenArv: () => {
      var _Twinkle$arv;
      Morebits2.wiki.actionCompleted.redirect = null;
      closeDialog();
      (_Twinkle$arv = Twinkle.arv) === null || _Twinkle$arv === void 0 || _Twinkle$arv.callback(relevantUserName);
    }
  });
  let message = "";
  let query = {};
  const vanrevid = mw.util.getParamValue("vanarticlerevid");
  if (vanrevid) {
    if (!mw.util.getParamValue("noautowarn") && mw.util.getParamValue("vanarticle")) {
      query = {
        action: "query",
        titles: mw.util.getParamValue("vanarticle"),
        prop: "revisions",
        rvstartid: vanrevid,
        rvlimit: 2,
        rvdir: "newer",
        rvprop: "user"
      };
      new Morebits2.wiki.api(uls("检查您是否成功回退该页面", "檢查您是否成功回退該頁面"), query, (apiobj) => {
        var _$$find$;
        const xmlDoc = apiobj.getResponse();
        const revertUser = (_$$find$ = $(xmlDoc).find("revisions rev")[1]) === null || _$$find$ === void 0 ? void 0 : _$$find$.getAttribute("user");
        if (revertUser && revertUser !== mw.config.get("wgUserName")) {
          message += uls("其他人回退了该页面，并可能已经警告该用户。", "其他人回退了該頁面，並可能已經警告該使用者。");
          notice.text = `警告：${message}`;
        }
      }).post();
    }
    const checkStale = (vantimestamp_) => {
      const revDate = new Morebits2.date(vantimestamp_ ?? "");
      if (vantimestamp_ && revDate.isValid() && revDate.add(24, "hours").isBefore(/* @__PURE__ */ new Date())) {
        message += uls("这笔编辑是在24小时前做出的，现在警告可能已过时。", "這筆編輯是在24小時前做出的，現在警告可能已過時。");
        notice.text = `警告：${message}`;
      }
    };
    let vantimestamp = mw.util.getParamValue("vantimestamp");
    if (vantimestamp) {
      checkStale(vantimestamp);
    } else {
      query = {
        action: "query",
        prop: "revisions",
        rvprop: "timestamp",
        revids: vanrevid
      };
      new Morebits2.wiki.api(uls("获取版本时间戳", "取得版本時間戳"), query, (apiobj) => {
        const xmlDoc = apiobj.getResponse();
        vantimestamp = $(xmlDoc).find("revisions rev").attr("timestamp") ?? null;
        checkStale(vantimestamp);
      }).post();
    }
  }
};
twinklewarn.messages = {
  levels: [{
    category: uls("不同类型的非建设编辑", "不同類別的非建設編輯"),
    list: {
      "uw-paid": {
        level1: {
          label: uls("未申报的有偿编辑", "未申報的有償編輯"),
          summary: uls("注意：未申报的有偿编辑", "注意：未申報的有償編輯")
        },
        level2: {
          label: uls("未申报的有偿编辑", "未申報的有償編輯"),
          summary: uls("警告：未申报的有偿编辑", "警告：未申報的有償編輯")
        }
      },
      "uw-copyright": {
        level1: {
          label: uls("侵犯著作权", "侵犯版權"),
          summary: uls("注意：侵犯著作权", "注意：侵犯版權")
        },
        level2: {
          label: uls("多次侵犯著作权", "多次侵犯版權"),
          summary: uls("警告：多次侵犯著作权", "警告：多次侵犯版權")
        }
      },
      "uw-crystal": {
        level1: {
          label: uls("加入臆测或未确认的消息", "加入臆測或未確認的訊息"),
          summary: uls("注意：加入臆测或未确认的消息", "注意：加入臆測或未確認的訊息")
        },
        level2: {
          label: uls("多次加入臆测或未确认的消息", "多次加入臆測或未確認的訊息"),
          summary: uls("警告：多次加入臆测或未确认的消息", "警告：多次加入臆測或未確認的訊息")
        }
      },
      "uw-delete": {
        level1: {
          label: uls("不恰当地移除页面内容、模板或资料", "不恰當地移除頁面內容、模板或資料"),
          summary: uls("注意：不恰当地移除页面内容、模板或资料", "注意：不恰當地移除頁面內容、模板或資料")
        },
        level2: {
          label: uls("不恰当地移除页面内容、模板或资料", "不恰當地移除頁面內容、模板或資料"),
          summary: uls("警告：不恰当地移除页面内容、模板或资料", "警告：不恰當地移除頁面內容、模板或資料")
        }
      },
      "uw-image": {
        level1: {
          label: uls("在页面中加入不当图片", "在頁面中加入不當圖片"),
          summary: uls("注意：在页面中加入不当图片", "注意：在頁面中加入不當圖片")
        },
        level2: {
          label: uls("在页面中加入不当图片", "在頁面中加入不當圖片"),
          summary: uls("警告：在页面中加入不当图片", "警告：在頁面中加入不當圖片")
        }
      },
      "uw-newpage": {
        level1: {
          label: uls("创建不当页面", "建立不當頁面"),
          summary: uls("注意：创建不当页面", "注意：建立不當頁面")
        },
        level2: {
          label: uls("创建不当页面", "建立不當頁面"),
          summary: uls("警告：创建不当页面", "警告：建立不當頁面")
        }
      },
      "uw-nor": {
        level1: {
          label: uls("在条目中加入原创研究", "在條目中加入原創研究"),
          summary: uls("注意：在条目中加入原创研究", "注意：在條目中加入原創研究")
        },
        level2: {
          label: uls("在条目中加入原创研究", "在條目中加入原創研究"),
          summary: uls("警告：在条目中加入原创研究", "警告：在條目中加入原創研究")
        }
      },
      "uw-opov": {
        level1: {
          label: uls("违反客观原则", "違反客觀原則"),
          summary: uls("注意：违反客观原则", "注意：違反客觀原則")
        },
        level2: {
          label: uls("违反客观原则", "違反客觀原則"),
          summary: uls("警告：违反客观原则", "警告：違反客觀原則")
        }
      },
      "uw-redirect": {
        level1: {
          label: uls("创建破坏性的重定向", "建立破壞性的重定向"),
          summary: uls("注意：创建破坏性的重定向", "注意：建立破壞性的重定向")
        },
        level2: {
          label: uls("创建恶意重定向", "建立惡意重定向"),
          summary: uls("警告：创建恶意重定向", "警告：建立惡意重定向")
        }
      },
      "uw-upload": {
        level1: {
          label: uls("上传不当图像", "上傳不當圖像"),
          summary: uls("注意：上传不当图像", "注意：上傳不當圖像")
        },
        level2: {
          label: uls("上传不当图像", "上傳不當圖像"),
          summary: uls("警告：上传不当图像", "警告：上傳不當圖像")
        }
      },
      "uw-vandalism": {
        level1: {
          label: uls("明显的破坏", "明顯的破壞"),
          summary: uls("注意：明显破坏", "注意：明顯破壞")
        },
        level2: {
          label: uls("明显的破坏", "明顯的破壞"),
          summary: uls("警告：明显破坏", "警告：明顯破壞")
        }
      },
      "uw-tdel": {
        level1: {
          label: uls("在问题仍未解决的情况下移除维护性模板", "在問題仍未解決的情況下移除維護性模板"),
          summary: uls("注意：移除维护性模板", "注意：移除維護性模板")
        },
        level2: {
          label: uls("在问题仍未解决的情况下移除维护性模板", "在問題仍未解決的情況下移除維護性模板"),
          summary: uls("警告：移除维护性模板", "警告：移除維護性模板")
        }
      }
    }
  }, {
    category: uls("增加广告", "增加廣告"),
    list: {
      "uw-spam": {
        level1: {
          label: uls("增加不合适的外部链接", "增加不合適的外部連結"),
          summary: uls("注意：增加不合适的外部链接", "注意：增加不合適的外部連結")
        },
        level2: {
          label: uls("增加垃圾链接", "增加垃圾連結"),
          summary: uls("警告：增加垃圾链接", "警告：增加垃圾連結")
        }
      },
      "uw-advert": {
        level1: {
          label: uls("利用求闻百科来发布广告或推广", "利用求聞百科來發布廣告或推廣"),
          summary: uls("注意：利用求闻百科来发布广告或推广", "注意：利用求聞百科來發布廣告或推廣")
        },
        level2: {
          label: uls("利用求闻百科来发布广告或推广", "利用求聞百科來發布廣告或推廣"),
          summary: uls("警告：利用求闻百科来发布广告或推广", "警告：利用求聞百科來發布廣告或推廣")
        }
      }
    }
  }, {
    category: uls("加插不实、诽谤文字", "加插不實、誹謗文字"),
    list: {
      "uw-biog": {
        level1: {
          label: uls("在人物传记中加入没有可靠来源佐证而且可能引发争议的内容", "在人物傳記中加入沒有可靠來源佐證而且可能引發爭議的內容"),
          summary: uls("注意：在人物传记中加入没有可靠来源佐证而且可能引发争议的内容", "注意：在人物傳記中加入沒有可靠來源佐證而且可能引發爭議的內容")
        },
        level2: {
          label: uls("在人物传记中加入没有可靠来源佐证而且可能引发争议的内容", "在人物傳記中加入沒有可靠來源佐證而且可能引發爭議的內容"),
          summary: uls("警告：在人物传记中加入没有可靠来源佐证而且可能引发争议的内容", "警告：在人物傳記中加入沒有可靠來源佐證而且可能引發爭議的內容")
        }
      },
      "uw-error": {
        level1: {
          label: uls("故意加入不实内容", "故意加入不實內容"),
          summary: uls("注意：故意加入不实内容", "注意：故意加入不實內容")
        },
        level2: {
          label: uls("故意加入不实内容", "故意加入不實內容"),
          summary: uls("警告：故意加入不实内容", "警告：故意加入不實內容")
        }
      },
      "uw-unsourced": {
        level1: {
          label: uls("加入没有可靠来源佐证的内容", "加入沒有可靠來源佐證的內容"),
          summary: uls("注意：加入没有可靠来源佐证的内容", "注意：加入沒有可靠來源佐證的內容")
        },
        level2: {
          label: uls("加入没有可靠来源佐证的内容", "加入沒有可靠來源佐證的內容"),
          summary: uls("警告：加入没有可靠来源佐证的内容", "警告：加入沒有可靠來源佐證的內容")
        }
      }
    }
  }, {
    category: uls("翻译品质", "翻譯品質"),
    list: {
      "uw-roughtranslation": {
        level1: {
          label: uls("您翻译的质量有待改善", "您翻譯的質量有待改善"),
          summary: uls("注意：您翻译的质量有待改善", "注意：您翻譯的質量有待改善")
        },
        level2: {
          label: uls("粗劣翻译", "粗劣翻譯"),
          summary: uls("警告：粗劣翻译", "警告：粗劣翻譯")
        }
      }
    }
  }, {
    category: uls("非能接受且违反条例的单方面行为或操作", "非能接受且違反條例的單方面行為或操作"),
    list: {
      "uw-afd": {
        level1: {
          label: uls("移除{{afd}}（页面存废讨论）模板", "移除{{afd}}（頁面存廢討論）模板"),
          summary: uls("注意：移除{{afd}}（页面存废讨论）模板", "注意：移除{{afd}}（頁面存廢討論）模板")
        },
        level2: {
          label: uls("移除{{afd}}（页面存废讨论）模板", "移除{{afd}}（頁面存廢討論）模板"),
          summary: uls("警告：移除{{afd}}（页面存废讨论）模板", "警告：移除{{afd}}（頁面存廢討論）模板")
        }
      },
      "uw-mos": {
        level1: {
          label: uls("不恰当的条目格式、日期、语言等", "不恰當的條目格式、日期、語言等"),
          summary: uls("注意：不恰当的条目格式、日期、语言等", "注意：不恰當的條目格式、日期、語言等")
        },
        level2: {
          label: uls("不恰当的条目格式、日期、语言等", "不恰當的條目格式、日期、語言等"),
          summary: uls("警告：不恰当的条目格式、日期、语言等", "警告：不恰當的條目格式、日期、語言等")
        }
      },
      "uw-move": {
        level1: {
          label: uls("无故移动条目/新名称不符合命名规范", "無故移動條目/新名稱不符合命名規範"),
          summary: uls("注意：不恰当地移动页面", "注意：不恰當地移動頁面")
        },
        level2: {
          label: uls("把页面移动到不恰当、违反命名常规或违反共识的标题", "把頁面移動到不恰當、違反命名常規或違反共識的標題"),
          summary: uls("警告：不恰当地移动页面", "警告：不恰當地移動頁面")
        }
      },
      "uw-speedy": {
        level1: {
          label: uls("移除{{delete}}（快速删除）模板", "移除{{delete}}（快速刪除）模板"),
          summary: uls("注意：移除{{delete}}（快速删除）模板", "注意：移除{{delete}}（快速刪除）模板")
        },
        level2: {
          label: uls("移除{{delete}}（快速删除）模板", "移除{{delete}}（快速刪除）模板"),
          summary: uls("警告：移除{{delete}}（快速删除）模板", "警告：移除{{delete}}（快速刪除）模板")
        }
      },
      "uw-talkpage": {
        level1: {
          label: uls("违反讨论页规范", "違反討論頁規範"),
          summary: uls("注意：违反讨论页规范", "注意：違反討論頁規範")
        },
        level2: {
          label: uls("违反讨论页规范", "違反討論頁規範"),
          summary: uls("警告：违反讨论页规范", "警告：違反討論頁規範")
        }
      },
      "uw-tpv": {
        level1: {
          label: "修改他人留言",
          summary: "注意：修改他人留言"
        },
        level2: {
          label: "修改他人留言",
          summary: "警告：修改他人留言"
        }
      }
    }
  }, {
    category: uls("对其他用户和条目的态度", "對其他用戶和條目的態度"),
    list: {
      "uw-illegal": {
        level1: {
          label: uls("加入不符合中国价值观的内容", "加入不符合中國價值觀的內容"),
          summary: uls("注意：加入不符合中国价值观的内容", "注意：加入不符合中國價值觀的內容")
        },
        level2: {
          label: uls("加入不符合中国价值观的内容", "加入不符合中國價值觀的內容"),
          summary: uls("警告：加入不符合中国价值观的内容", "警告：加入不符合中國價值觀的內容")
        }
      },
      "uw-own": {
        level1: {
          label: uls("主张条目所有权", "主張條目所有權"),
          summary: uls("注意：主张条目所有权", "注意：主張條目所有權")
        },
        level2: {
          label: uls("主张条目的所有权", "主張條目的所有權"),
          summary: uls("警告：主张条目的所有权", "警告：主張條目的所有權")
        }
      },
      "uw-socialmedia": {
        level1: {
          label: uls("将求闻百科当作社交媒体使用", "將求聞百科當作社交媒體使用"),
          summary: uls("注意：将求闻百科当作社交媒体使用", "注意：將求聞百科當作社交媒體使用")
        },
        level2: {
          label: uls("将求闻百科当作社交媒体使用", "將求聞百科當作社交媒體使用"),
          summary: uls("警告：将求闻百科当作社交媒体使用", "警告：將求聞百科當作社交媒體使用")
        }
      }
    }
  }],
  singlenotice: {
    "uw-2redirect": {
      label: uls("在移动页面后应该修复双重重定向", "在移動頁面後應該修復雙重重定向"),
      summary: uls("注意：在移动页面后应该修复双重重定向", "注意：在移動頁面後應該修復雙重重定向")
    },
    "uw-aiv": {
      label: uls("举报事项并不是破坏行为", "舉報事項並不是破壞行为"),
      summary: uls("注意：不恰当地举报破坏", "注意：不恰當地舉報破壞")
    },
    "uw-articlesig": {
      label: uls("在条目中签名", "在條目中簽名"),
      summary: uls("注意：在条目中签名", "注意：在條目中簽名")
    },
    "uw-autobiography": {
      label: uls("创建自传", "建立自傳"),
      summary: uls("注意：创建自传", "注意：建立自傳")
    },
    "uw-badcat": {
      label: uls("加入错误的页面分类", "加入錯誤的頁面分類"),
      summary: uls("注意：加入错误的页面分类", "注意：加入錯誤的頁面分類")
    },
    "uw-bite": {
      label: uls("伤害新手", "傷害新手"),
      summary: uls("注意：伤害新手", "注意：傷害新手")
    },
    "uw-chinese": {
      label: uls("请使用标准汉语沟通", "請使用標準漢語溝通"),
      summary: uls("注意：请使用标准汉语沟通", "注意：請使用標準漢語溝通")
    },
    "uw-cpmove": {
      label: uls("剪贴移动", "剪貼移動"),
      summary: uls("注意：剪贴移动", "注意：剪貼移動")
    },
    "uw-dab": {
      label: uls("消歧义页格式错误", "消歧義頁格式錯誤"),
      summary: uls("注意：消歧义页格式错误", "注意：消歧義頁格式錯誤")
    },
    "uw-newpage-draft": {
      label: uls("最近创建的页面被移动到草稿", "最近建立的頁面被移動到草稿"),
      summary: uls("注意：最近创建的页面被移动到草稿", "注意：最近建立的頁面被移動到草稿")
    },
    "uw-selfrevert": {
      label: uls("感谢您自行回退自己的测试，以后不要再这样做了", "感謝您自行回退自己的測試，以後不要再這樣做了"),
      summary: uls("注意：回退个人的测试", "注意：回退個人的測試")
    },
    "uw-substub": {
      label: uls("创建小小作品", "建立小小作品"),
      summary: uls("警告：创建小小作品", "警告：建立小小作品")
    },
    "uw-talkinarticle": {
      label: uls("在条目页中留下意见", "在條目頁中留下意見"),
      summary: uls("注意：在条目页中留下意见", "注意：在條目頁中留下意見")
    },
    "uw-unsigned": {
      label: uls("没有在讨论页上签名", "沒有在討論頁上簽名"),
      summary: uls("注意：没有在讨论页上签名", "注意：沒有在討論頁上簽名")
    },
    "uw-wrongcsd": {
      label: uls("快速删除理由不当", "快速刪除理由不當"),
      summary: uls("注意：快速删除理由不当", "注意：快速刪除理由不當")
    },
    "uw-wrongsummary": {
      label: uls("在编辑摘要制造不适当的内容", "在編輯摘要製造不適當的內容"),
      summary: uls("警告：在编辑摘要制造不适当的内容", "警告：在編輯摘要製造不適當的內容")
    }
  },
  singlewarn: {
    "uw-3rr": {
      label: uls("用户潜在违反回退不过三原则的可能性", "用戶潛在違反回退不過三原則的可能性"),
      summary: uls("警告：用户潜在违反回退不过三原则的可能性", "警告：用戶潛在違反回退不過三原則的可能性")
    },
    "uw-attack": {
      label: uls("人身攻击", "人身攻擊"),
      summary: uls("警告：人身攻击", "警告：人身攻擊"),
      suppressArticleInSummary: true
    },
    "uw-coi": {
      label: uls("利益冲突", "利益衝突"),
      summary: uls("注意：利益冲突", "注意：利益衝突")
    },
    "uw-fakesource": {
      label: uls("虚构数据源或引文", "虛構資料來源或引文"),
      summary: uls("警告：虚构数据源或引文", "警告：虛構資料來源或引文")
    },
    "uw-pinfo": {
      label: uls("张贴他人隐私", "張貼他人隱私"),
      summary: uls("警告：张贴他人隐私", "警告：張貼他人隱私")
    }
  }
};
Twinkle.warn = twinklewarn;
Twinkle.addInitCallback(twinklewarn, "warn");
//! src/Twinkle/modules/utils/utc8.ts
var UTC8_OFFSET_MINUTES = 8 * 60;
//! src/Twinkle/modules/twinkleblock.ts
var import_vue4 = require("vue");
/*! Twinkle.js - twinkleblock.ts */
var $body2 = $("body");
var relevantUserName2 = "";
var blockedUserName;
var isRegistered = false;
var userIsBot = false;
var currentBlockInfo;
var hasBlockLog = false;
var blockLog = false;
var blockLogId = false;
var dialogData = null;
var dialogEpoch = 0;
var twinkleblock = () => {
  relevantUserName2 = mw.config.get("wgRelevantUserName") ?? "";
  if ((Morebits2.userIsSysop || !mw.util.isIPAddress(relevantUserName2, true)) && relevantUserName2 && (!Morebits2.ip.isRange(relevantUserName2) || Morebits2.ip.validCIDR(relevantUserName2))) {
    Twinkle.addPortletLink(twinkleblock.callback, uls("封禁", "封鎖"), "tw-block", uls("封禁相关用户", "封鎖相關使用者"));
  }
};
var buildNotices = () => {
  const notices = {
    currentBlock: null,
    currentInfo: null,
    blockLog: null,
    blockLogLink: mw.util.getUrl("Special:Log", {
      action: "view",
      page: relevantUserName2,
      type: "block"
    })
  };
  if (currentBlockInfo) {
    const sameUser = blockedUserName === relevantUserName2;
    let statusStr = `${relevantUserName2}已被${currentBlockInfo.partial === "" ? uls("部分封禁", "部分封鎖") : uls("全站封禁", "全站封鎖")}`;
    if (currentBlockInfo.rangestart !== currentBlockInfo.rangeend) {
      if (sameUser) {
        statusStr += uls("（段封禁）", "（段封鎖）");
      } else {
        const rangeLabel = Morebits2.ip.get64(relevantUserName2) === blockedUserName ? "/64" : blockedUserName ?? "";
        statusStr += uls("（位于", "（位於") + rangeLabel + uls("段封禁内）", "段封鎖內）");
      }
    }
    if (currentBlockInfo.expiry === "infinity") {
      statusStr += uls("（无限期）", "（無限期）");
    } else if (new Morebits2.date(currentBlockInfo.expiry ?? "").isValid()) {
      statusStr += `${uls("（终止于", "（終止於") + new Morebits2.date(currentBlockInfo.expiry ?? "").calendar(UTC8_OFFSET_MINUTES)}）`;
    }
    let infoStr = uls("此表单将", "此表單將");
    if (sameUser) {
      infoStr += uls("更改封禁", "變更封鎖");
      infoStr += "。";
    } else {
      infoStr += uls("加上额外的", "加上額外的") + uls("封禁。", "封鎖。");
    }
    notices.currentBlock = statusStr;
    notices.currentInfo = infoStr;
  }
  if (hasBlockLog) {
    if (currentBlockInfo) {
      notices.blockLog = uls("封禁详情", "封鎖詳情");
    } else {
      const log = blockLog || [];
      const [lastBlockAction] = log;
      if (lastBlockAction) {
        const blockAction = lastBlockAction.action === "unblock" ? log[1] ?? lastBlockAction : lastBlockAction;
        let logText = `此${Morebits2.ip.isRange(relevantUserName2) ? uls("IP范围", "IP範圍") : uls("用户", "使用者")}曾在${new Morebits2.date(blockAction.timestamp).calendar(UTC8_OFFSET_MINUTES)}被${blockAction.user}${uls("封禁", "封鎖")}${Morebits2.string.formatTime(blockAction.params.duration ?? "")}`;
        if (lastBlockAction.action === "unblock") {
          logText += `，${new Morebits2.date(lastBlockAction.timestamp).calendar(UTC8_OFFSET_MINUTES)}解封`;
        } else {
          logText += `，${new Morebits2.date(blockAction.params.expiry ?? "").calendar(UTC8_OFFSET_MINUTES)}${uls("过期", "過期")}`;
        }
        notices.blockLog = logText;
      }
    }
  }
  return notices;
};
var filteredBlockGroups = (group, showTemplate) => {
  return group.map((blockGroup) => {
    if (blockGroup.custom) {
      if (showTemplate) {
        let templates = Twinkle.getPref("customBlockReasonList").map((item) => {
          var _twinkleblock$blockPr;
          if ((_twinkleblock$blockPr = twinkleblock.blockPresetsInfo[item.value]) !== null && _twinkleblock$blockPr !== void 0 && _twinkleblock$blockPr.custom) {
            return item.value;
          }
          return void 0;
        }).filter((item) => item !== void 0);
        templates = Morebits2.array.uniq(templates);
        blockGroup.list = templates.map((template) => {
          return {
            label: uls("自定义模板", "自訂模板"),
            value: template
          };
        });
      } else {
        blockGroup.list = Twinkle.getPref("customBlockReasonList").map((item) => {
          return {
            label: item.label,
            value: `${item.value}|${item.label}`
          };
        });
      }
    }
    const list = (blockGroup.list ?? []).map((blockPreset) => {
      if (!showTemplate && blockPreset.meta) {
        return null;
      }
      switch (blockPreset.value) {
        case "range block":
          if (!Morebits2.ip.isRange(relevantUserName2)) {
            return null;
          }
          blockPreset.selected = !Morebits2.ip.get64(relevantUserName2);
          break;
        default:
          break;
      }
      const blockSettings = twinkleblock.blockPresetsInfo[blockPreset.value] ?? {};
      let registrationRestrict;
      if (blockSettings.forRegisteredOnly) {
        registrationRestrict = isRegistered;
      } else if (blockSettings.forAnonOnly) {
        registrationRestrict = !isRegistered;
      } else {
        registrationRestrict = true;
      }
      if (!(blockSettings.templateName && showTemplate) && registrationRestrict) {
        const templateName = blockSettings.templateName || blockPreset.value;
        return {
          label: (showTemplate ? `{{${templateName}}}: ` : "") + blockPreset.label,
          value: blockPreset.value,
          data: [{
            name: "template-name",
            value: templateName
          }],
          selected: !!blockPreset.selected,
          disabled: !!blockPreset.disabled
        };
      }
      return null;
    }).filter((item) => item !== null);
    if (list.length) {
      return {
        label: blockGroup.label,
        list
      };
    }
    return null;
  }).filter((item) => item !== null);
};
var buildPresetGroups = (partialBox) => {
  let blockGroup = partialBox ? twinkleblock.blockGroupsPartial : twinkleblock.blockGroups;
  const prior = {
    label: uls("当前封禁", "目前封鎖")
  };
  if (blockedUserName === relevantUserName2 && currentBlockInfo) {
    const priorSettings = currentBlockInfo;
    twinkleblock.blockPresetsInfo["prior"] = priorSettings;
    prior.list = [{
      label: uls("当前封禁设置", "目前封鎖設定"),
      value: "prior",
      selected: true
    }];
    if (!blockGroup.some((bg) => {
      return bg.label === prior.label;
    })) {
      blockGroup = [...blockGroup, prior];
    }
    if (partialBox) {
      priorSettings.templateName = Morebits2.string.isInfinity(currentBlockInfo.expiry ?? "") ? "uw-pblockindef" : "uw-pblock";
    } else if (isRegistered) {
      priorSettings.templateName = Morebits2.string.isInfinity(currentBlockInfo.expiry ?? "") ? "uw-blockindef" : "uw-block";
    } else {
      priorSettings.templateName = "uw-ablock";
    }
  } else {
    blockGroup = blockGroup.filter((bg) => {
      return bg.label !== prior.label;
    });
  }
  return {
    presetGroups: filteredBlockGroups(blockGroup, false),
    templateGroups: filteredBlockGroups(blockGroup, true)
  };
};
twinkleblock.callback = () => {
  if (relevantUserName2 === mw.config.get("wgUserName") && !confirm(uls("您即将对自己执行封禁相关操作！确认要继续吗？", "您即將對自己執行封鎖相關操作！確認要繼續嗎？"))) {
    return;
  }
  currentBlockInfo = void 0;
  let dialog = null;
  const mountBlockDialog = () => {
    var _dialog;
    twinkleblock.transformBlockPresets();
    (_dialog = dialog) === null || _dialog === void 0 || _dialog.close();
    const partialChecked = blockedUserName === relevantUserName2 && currentBlockInfo ? currentBlockInfo.partial === "" : Twinkle.getPref("defaultToPartialBlocks");
    const groups = buildPresetGroups(partialChecked);
    dialogData = (0, import_vue4.reactive)({
      isRegistered,
      userIsBot,
      partialChecked,
      presetGroups: groups.presetGroups,
      templateGroups: groups.templateGroups,
      notices: buildNotices()
    });
    const data = dialogData;
    const sixtyFour = Morebits2.ip.get64(mw.config.get("wgRelevantUserName") ?? "");
    const sixtyFourAvailable = !!sixtyFour && sixtyFour !== mw.config.get("wgRelevantUserName");
    dialog = mountLazyDialog("TwBlockDialog", {
      key: dialogEpoch,
      title: uls("封禁或向", "封鎖或向") + relevantUserName2 + uls("发出封禁模板", "發出封鎖模板"),
      showBlock: Morebits2.userIsSysop,
      showTemplate: Morebits2.userIsSysop,
      showTag: isRegistered,
      showProtect: isRegistered && Morebits2.userIsSysop,
      showUnblock: Morebits2.userIsSysop,
      initialBlock: Morebits2.userIsSysop,
      initialTemplate: Morebits2.userIsSysop && !Morebits2.ip.isRange(mw.config.get("wgRelevantUserName") ?? ""),
      initialPartial: partialChecked,
      initialUnblock: false,
      sixtyFourAvailable,
      initialBlock64: Twinkle.getPref("defaultToBlock64"),
      presetGroups: data.presetGroups,
      templateGroups: data.templateGroups,
      presetsInfo: twinkleblock.blockPresetsInfo,
      expiryPresetOptions: twinkleblock.expiryPresetOptions,
      namespaces: twinkleblock.namespaceOptions,
      isRegistered: data.isRegistered,
      userIsBot: data.userIsBot,
      notices: data.notices,
      relevantUserName: relevantUserName2,
      blockLogId,
      currentBlockInfo,
      footerLinks: footerLinks("block", uls("封禁设置", "封鎖設定"), [{
        text: uls("封禁方针", "封鎖方針"),
        href: mw.util.getUrl("QW:BLOCK")
      }]),
      onBlock64Changed: (checked) => {
        const wgRelevantName = mw.config.get("wgRelevantUserName") ?? "";
        const originalIsRange = Morebits2.ip.isRange(wgRelevantName);
        relevantUserName2 = checked ? Morebits2.ip.get64(wgRelevantName) || wgRelevantName : wgRelevantName;
        const regenerate = () => {
          dialogEpoch += 1;
          mountBlockDialog();
        };
        const cached = twinkleblock.fetchedData[relevantUserName2];
        if (cached) {
          twinkleblock.processUserInfo(cached, regenerate);
        } else {
          twinkleblock.fetchUserInfo(regenerate);
        }
        if (!checked && dialogData) {
          dialogData.templateCheck = originalIsRange;
        }
      }
    });
  };
  twinkleblock.fetchUserInfo(mountBlockDialog);
};
twinkleblock.fetchedData = {};
twinkleblock.processUserInfo = (data, fn) => {
  var _blockinfo, _data$query$logevents;
  let blockinfo = data.query.blocks[0];
  const userinfo = data.query.users[0];
  if (data.query.blocks.length > 1 && ((_blockinfo = blockinfo) === null || _blockinfo === void 0 ? void 0 : _blockinfo.user) !== relevantUserName2) {
    blockinfo = data.query.blocks[1];
  }
  if (userinfo) {
    twinkleblock.fetchedData[userinfo.name] = data;
    isRegistered = !!userinfo.userid;
    if (isRegistered) {
      userIsBot = !!userinfo.groupmemberships && userinfo.groupmemberships.map((e) => {
        return e.group;
      }).includes("bot");
    } else {
      userIsBot = false;
    }
  } else {
    isRegistered = false;
    userIsBot = false;
  }
  if (blockinfo) {
    blockinfo.disabletalk = blockinfo.allowusertalk === void 0;
    blockinfo.hardblock = blockinfo.anononly === void 0;
  }
  currentBlockInfo = blockinfo;
  blockedUserName = currentBlockInfo ? currentBlockInfo.user : void 0;
  hasBlockLog = !!data.query.logevents.length;
  blockLog = hasBlockLog ? data.query.logevents : false;
  blockLogId = hasBlockLog ? ((_data$query$logevents = data.query.logevents[0]) === null || _data$query$logevents === void 0 ? void 0 : _data$query$logevents.logid) ?? false : false;
  if (typeof fn === "function") {
    fn();
  }
};
twinkleblock.fetchUserInfo = (fn) => {
  const query = {
    format: "json",
    action: "query",
    list: "blocks|users|logevents",
    letype: "block",
    lelimit: 2,
    letitle: `User:${relevantUserName2}`,
    bkprop: "expiry|reason|flags|restrictions|range|user",
    ususers: relevantUserName2
  };
  if (mw.util.isIPAddress(relevantUserName2, true)) {
    query["bkip"] = relevantUserName2;
  } else {
    query["bkusers"] = relevantUserName2;
    query["usprop"] = "groupmemberships";
  }
  void api.get(query).then((data) => {
    twinkleblock.processUserInfo(data, fn);
  }, (error) => {
    Morebits2.status.init($body2.find('div[name="currentblock"] span').last()[0] ?? null);
    Morebits2.status.warn(uls("抓取用户信息出错", "抓取使用者資訊出錯"), String(error));
  });
};
twinkleblock.expiryPresetOptions = [{
  label: uls("自定义", "自訂"),
  value: "custom"
}, {
  label: uls("无限期", "無限期"),
  value: "infinity"
}, {
  label: uls("3小时", "3小時"),
  value: "3 hours"
}, {
  label: uls("12小时", "12小時"),
  value: "12 hours"
}, {
  label: "1天",
  value: "1 day"
}, {
  label: uls("31小时", "31小時"),
  value: "31 hours"
}, {
  label: "2天",
  value: "2 days"
}, {
  label: "3天",
  value: "3 days"
}, {
  label: uls("1周", "1週"),
  value: "1 week"
}, {
  label: uls("2周", "2週"),
  value: "2 weeks"
}, {
  label: uls("1个月", "1個月"),
  value: "1 month"
}, {
  label: uls("3个月", "3個月"),
  value: "3 months"
}, {
  label: uls("6个月", "6個月"),
  value: "6 months"
}, {
  label: "1年",
  value: "1 year"
}, {
  label: "2年",
  value: "2 years"
}, {
  label: "3年",
  value: "3 years"
}];
var menuFormattedNamespaces = {};
for (const [number, name] of Object.entries(mw.config.get("wgFormattedNamespaces"))) {
  menuFormattedNamespaces[Number(number)] = String(name);
}
menuFormattedNamespaces[0] = uls("（条目）", "（條目）");
twinkleblock.namespaceOptions = Object.entries(menuFormattedNamespaces).filter(([number]) => {
  return Number(number) >= 0 && Number(number) < 830;
}).map(([number, name]) => {
  return {
    value: Number(number),
    label: name
  };
});
twinkleblock.blockPresetsInfo = {
  // uw-prefixed
  "uw-block": {
    autoblock: true,
    expiry: "1 day",
    forRegisteredOnly: true,
    nocreate: true,
    pageParam: true,
    reasonParam: true,
    summary: uls("封禁通知", "封鎖通知"),
    suppressArticleInSummary: true
  },
  "uw-blockindef": {
    autoblock: true,
    expiry: "infinity",
    forRegisteredOnly: true,
    nocreate: true,
    pageParam: true,
    reasonParam: true,
    summary: uls("封禁通知", "封鎖通知"),
    suppressArticleInSummary: true
  },
  "uw-blocknotalk": {
    disabletalk: true,
    pageParam: true,
    reasonParam: true,
    summary: uls("封禁通知：禁止编辑讨论页", "封鎖通知：禁止編輯討論頁"),
    suppressArticleInSummary: true
  },
  "uw-3block": {
    autoblock: true,
    expiry: "1 day",
    nocreate: true,
    pageParam: true,
    reason: uls("违反[[QW:3RR|回退不过三原则]]", "違反[[QW:3RR|回退不過三原則]]"),
    summary: uls("封禁通知：违反[[QW:3RR|回退不过三原则]]", "封鎖通知：違反[[QW:3RR|回退不過三原則]]")
  },
  "uw-adblock": {
    autoblock: true,
    nocreate: true,
    pageParam: true,
    reason: uls("散发[[QW:SOAP|散发广告或宣传]]", "散發[[QW:SOAP|散發廣告或宣傳]]"),
    summary: uls("封禁通知：散发[[QW:SOAP|散发广告或宣传]]", "封鎖通知：散發[[QW:SOAP|散發廣告或宣傳]]")
  },
  "uw-attackblock": {
    autoblock: true,
    expiry: "1 day",
    nocreate: true,
    reason: uls("[[QW:CIV|行为无礼]]或[[QW:NPA|人身攻击]]", "[[QW:CIV|行為無禮]]或[[QW:NPA|人身攻擊]]"),
    summary: uls("封禁通知：[[QW:CIV|行为无礼]]或[[QW:NPA|人身攻击]]", "封鎖通知：[[QW:CIV|行為無禮]]或[[QW:NPA|人身攻擊]]")
  },
  "uw-copyrightblock": {
    autoblock: true,
    expiry: "infinity",
    nocreate: true,
    pageParam: true,
    reason: uls("持续[[QW:COPYVIO|侵犯著作权]]", "持續[[QW:COPYVIO|侵犯著作權]]"),
    summary: uls("封禁通知：持续[[QW:COPYVIO|侵犯著作权]]", "封鎖通知：持續[[QW:COPYVIO|侵犯著作權]]"),
    templateName: "uw-blockindef"
  },
  "uw-dblock": {
    autoblock: true,
    nocreate: true,
    pageParam: true,
    reason: uls("持续[[QW:VAN|删除内容]]", "持續[[QW:VAN|刪除內容]]"),
    summary: uls("封禁通知：持续[[QW:VAN|删除内容]]", "封鎖通知：持續[[QW:VAN|刪除內容]]")
  },
  "uw-hblock": {
    autoblock: true,
    nocreate: true,
    pageParam: true,
    reason: uls("[[QW:骚扰|骚扰]]其他用户", "[[QW:騷擾|騷擾]]其他使用者"),
    summary: uls("封禁通知：[[QW:骚扰|骚扰]]其他用户", "封鎖通知：[[QW:騷擾|騷擾]]其他使用者")
  },
  "uw-vblock": {
    autoblock: true,
    expiry: "1 day",
    nocreate: true,
    pageParam: true,
    reason: uls("[[QW:VAN|破坏]]", "[[QW:VAN|破壞]]"),
    summary: uls("封禁通知：[[QW:VAN|破坏]]", "封鎖通知：[[QW:VAN|破壞]]")
  },
  "uw-illegalblock": {
    autoblock: true,
    expiry: "1 day",
    nocreate: true,
    pageParam: true,
    reason: uls("持续加入不符合中国价值观的非法内容", "持續加入不符合中國價值觀的非法內容"),
    summary: uls("封禁通知：持续加入不符合中国价值观的非法内容", "封鎖通知：持續加入不符合中國價值觀的非法內容")
  },
  "uw-sockblock": {
    autoblock: true,
    expiry: "1 week",
    forRegisteredOnly: true,
    nocreate: true,
    reason: uls("滥用[[QW:SOCK|多个账号]]", "濫用[[QW:SOCK|多個賬號]]"),
    summary: uls("封禁通知：滥用[[QW:SOCK|多个账号]]", "封鎖通知：濫用[[QW:SOCK|多個賬號]]"),
    templateName: "uw-block"
  },
  // uw-u-prefixed
  "uw-ublock": {
    expiry: "infinity",
    forRegisteredOnly: true,
    reason: `{{uw-ublock}}<!-- ${uls("不当用户名、软封禁", "不當使用者名稱")} -->`,
    summary: uls("封禁通知：您的用户名违反[[QW:U|用户名条例]]", "封鎖通知：您的使用者名稱違反[[QW:U|使用者名稱條例]]")
  },
  "uw-ublock-illegal": {
    autoblock: true,
    expiry: "infinity",
    forRegisteredOnly: true,
    nocreate: true,
    reason: `{{uw-ublock-illegal}}<!-- ${uls("不合规的用户名", "不合規的使用者名稱")} -->`,
    summary: uls("封禁通知：您的用户名违反[[QW:U|用户名条例]]", "封鎖通知：您的使用者名稱違反[[QW:U|使用者名稱條例]]")
  },
  "uw-ublock-suggestive": {
    autoblock: true,
    expiry: "infinity",
    forRegisteredOnly: true,
    nocreate: true,
    reason: `{{uw-ublock-suggestive}}<!-- ${uls("误导、混淆性用户名", "誤導、混淆性使用者名稱")} -->`,
    summary: uls("封禁通知：您的用户名违反[[QW:U|用户名条例]]", "封鎖通知：您的使用者名稱違反[[QW:U|使用者名稱條例]]")
  },
  "uw-ublock-spam": {
    autoblock: true,
    expiry: "infinity",
    forRegisteredOnly: true,
    nocreate: true,
    reason: `{{uw-ublock-spam}}<!-- ${uls("宣传性用户名或宣传性编辑", "宣傳性使用者名稱或宣傳性編輯")} -->`,
    summary: uls("封禁通知：您的用户名违反[[QW:U|用户名条例]]", "封鎖通知：您的使用者名稱違反[[QW:U|使用者名稱條例]]")
  },
  // other block templates
  "range block": {
    expiry: "1 week",
    reason: "{{range block}}",
    nocreate: true,
    nonstandard: true,
    forAnonOnly: true,
    sig: "~~".concat("~~")
  },
  "blocked proxy": {
    expiry: "2 years",
    forAnonOnly: true,
    nocreate: true,
    nonstandard: true,
    hardblock: true,
    reason: "{{blocked proxy}}",
    sig: null
  },
  checkuserblock: {
    expiry: "1 week",
    forAnonOnly: true,
    nocreate: true,
    nonstandard: true,
    reason: "{{checkuserblock}}",
    sig: "~~".concat("~~")
  },
  "checkuserblock-account": {
    autoblock: true,
    expiry: "infinity",
    forRegisteredOnly: true,
    nocreate: true,
    nonstandard: true,
    reason: "{{checkuserblock-account}}",
    sig: "~~".concat("~~")
  },
  "school block": {
    expiry: "1 week",
    forAnonOnly: true,
    nocreate: true,
    nonstandard: true,
    reason: "{{school block}}",
    sig: "~~".concat("~~")
  },
  "Bot block message": {
    expiry: "infinity",
    forRegisteredOnly: true,
    reason: uls("机器人故障", "機器人故障"),
    summary: uls("封禁通知：机器人故障", "封鎖通知：機器人故障"),
    sig: "~~".concat("~~")
  },
  // other block reasons
  bioblock: {
    autoblock: true,
    expiry: "1 day",
    nocreate: true,
    pageParam: true,
    reason: uls("违反生者传记条例", "違反生者傳記條例"),
    summary: uls("封禁通知：违反生者传记条例", "封鎖通知：違反生者傳記條例"),
    templateName: "uw-vblock"
  },
  ucblock: {
    autoblock: true,
    expiry: "1 day",
    nocreate: true,
    pageParam: true,
    reason: uls("屡次增加没有[[QW:RS|可靠来源]]的资料", "屢次增加沒有[[QW:RS|可靠來源]]的資料"),
    summary: uls("封禁通知：屡次增加没有[[QW:RS|可靠来源]]的资料", "封鎖通知：屢次增加沒有[[QW:RS|可靠來源]]的資料"),
    templateName: "uw-block"
  },
  npblock: {
    autoblock: true,
    expiry: "1 day",
    nocreate: true,
    pageParam: true,
    reason: uls("在条目中增加无意义文字", "在條目中增加無意義文字"),
    summary: uls("封禁通知：在条目中增加无意义文字", "封鎖通知：在條目中增加無意義文字"),
    templateName: "uw-vblock"
  },
  "point-block": {
    autoblock: true,
    expiry: "1 day",
    nocreate: true,
    pageParam: true,
    reasonParam: true,
    reason: uls("持续打制度擦边球", "持續打制度擦邊球"),
    summary: uls("封禁通知：持续打制度擦边球", "封鎖通知：持續打制度擦邊球"),
    templateName: "uw-block"
  },
  "sock-contribs": {
    autoblock: true,
    expiry: "infinity",
    forRegisteredOnly: true,
    nocreate: true,
    reasonParam: true,
    reason: uls("确认为[[QW:SOCK|傀儡]]或真人傀儡 - 根据用户贡献确定", "確認為[[QW:SOCK|傀儡]]或真人傀儡 - 根據使用者貢獻確定"),
    summary: uls("封禁通知：确认为[[QW:SOCK|傀儡]]或真人傀儡", "封鎖通知：確認為[[QW:SOCK|傀儡]]或真人傀儡"),
    templateName: "uw-blockindef"
  },
  "sock-cu": {
    autoblock: true,
    expiry: "infinity",
    forRegisteredOnly: true,
    nocreate: true,
    reasonParam: true,
    reason: uls("确认为[[QW:SOCK|傀儡]]或真人傀儡 - 用户查核确认", "確認為[[QW:SOCK|傀儡]]或真人傀儡 - 使用者查核確認"),
    summary: uls("封禁通知：确认为[[QW:SOCK|傀儡]]或真人傀儡", "封鎖通知：確認為[[QW:SOCK|傀儡]]或真人傀儡"),
    templateName: "uw-blockindef"
  },
  "uw-ublock-attack": {
    autoblock: true,
    expiry: "infinity",
    forRegisteredOnly: true,
    nocreate: true,
    reason: `{{uw-ublock-attack}}<!-- ${uls("攻击性用户名", "攻擊性使用者名稱")} -->`,
    summary: uls("封禁通知：攻击性用户名", "封鎖通知：攻擊性使用者名稱")
  },
  // Begin partial block templates, accessed in Twinkle.block.blockGroupsPartial
  "uw-pblock": {
    autoblock: true,
    expiry: "1 day",
    nocreate: false,
    pageParam: false,
    reasonParam: true,
    summary: uls("封禁通知：您已被禁止编辑求闻百科的部分区域", "封鎖通知：您已被禁止編輯求聞百科的部分區域")
  },
  "uw-pblockindef": {
    autoblock: true,
    expiry: "infinity",
    nocreate: false,
    pageParam: false,
    reasonParam: true,
    summary: uls("封禁通知：您已被永久禁止编辑求闻百科的部分区域", "封鎖通知：您已被永久禁止編輯求聞百科的部分區域")
  }
};
twinkleblock.transformBlockPresets = () => {
  for (const item of Twinkle.getPref("customBlockReasonList")) {
    const newKey = `${item.value}|${item.label}`;
    twinkleblock.blockPresetsInfo[newKey] = {
      autoblock: true,
      nocreate: true,
      ...twinkleblock.blockPresetsInfo[item.value],
      reason: item.label,
      templateName: item.value
    };
    if (twinkleblock.blockPresetsInfo[item.value] === void 0) {
      twinkleblock.blockPresetsInfo[item.value] = {
        pageParam: true,
        reasonParam: true,
        custom: true
      };
    }
  }
  for (const [preset, settings] of Object.entries(twinkleblock.blockPresetsInfo)) {
    settings.summary || (settings.summary = settings.reason || "");
    settings.sig = settings.sig === void 0 ? "yes" : settings.sig;
    settings.indefinite || (settings.indefinite = Morebits2.string.isInfinity(settings.expiry ?? ""));
    if (!isRegistered && settings.indefinite) {
      settings.expiry = "1 day";
    } else {
      settings.expiry || (settings.expiry = "1 day");
    }
    twinkleblock.blockPresetsInfo[preset] = settings;
  }
};
twinkleblock.blockGroups = [{
  label: uls("普通封禁", "普通封鎖"),
  list: [
    {
      label: uls("通用封禁（自定义理由）", "通用封鎖（自訂理由）"),
      value: "uw-block"
    },
    {
      label: uls("无限期封禁（自定义理由）", "無限期封鎖（自訂理由）"),
      value: "uw-blockindef"
    },
    {
      label: uls("禁止编辑讨论页", "禁止編輯討論頁"),
      value: "uw-blocknotalk",
      meta: true
    },
    {
      label: uls("违反回退不过三原则", "違反回退不過三原則"),
      value: "uw-3block"
    },
    {
      label: uls("散发广告或宣传", "散發廣告或宣傳"),
      value: "uw-adblock"
    },
    {
      label: uls("行为无礼或人身攻击", "行為無禮或人身攻擊"),
      value: "uw-attackblock"
    },
    {
      label: uls("多次加入侵犯著作权的内容", "多次加入侵犯著作權的內容"),
      value: "uw-copyrightblock"
    },
    {
      label: uls("无故删除内容", "無故刪除內容"),
      value: "uw-dblock"
    },
    {
      label: uls("骚扰用户", "騷擾使用者"),
      value: "uw-hblock"
    },
    {
      label: uls("破坏", "破壞"),
      value: "uw-vblock",
      selected: true
    },
    {
      label: uls("持续加入不符合中国价值观的非法内容", "持續加入不符合中國價值觀的非法內容"),
      value: "uw-illegalblock"
    },
    {
      label: uls("滥用多个账号", "濫用多個賬號"),
      value: "uw-sockblock"
    },
    // other block reasons
    {
      label: uls("违反生者传记条例", "違反生者傳記條例"),
      value: "bioblock"
    },
    {
      label: uls("屡次增加没有可靠来源的资料", "屢次增加沒有可靠來源的資料"),
      value: "ucblock"
    },
    {
      label: uls("在条目中增加无意义文字", "在條目中增加無意義文字"),
      value: "npblock"
    },
    {
      label: uls("持续打制度擦边球", "持續打制度擦邊球"),
      value: "point-block"
    },
    {
      label: uls("确认为傀儡或真人傀儡（根据用户贡献确定）", "確認為傀儡或真人傀儡（根據使用者貢獻確定）"),
      value: "sock-contribs"
    },
    {
      label: uls("确认为傀儡或真人傀儡（用户查核确认）", "確認為傀儡或真人傀儡（使用者查核確認）"),
      value: "sock-cu"
    },
    {
      label: uls("机器人发生故障并必须紧急停止", "機器人發生故障並必須緊急停止"),
      value: "Bot block message"
    }
  ]
}, {
  custom: true,
  label: uls("自定义封禁理由", "自訂封鎖理由")
}, {
  label: uls("用户名封禁", "使用者名稱封鎖"),
  list: [{
    label: uls("违反用户名条例", "違反使用者名稱條例"),
    value: "uw-ublock"
  }, {
    label: uls("不合规的用户名", "不合規的使用者名稱"),
    value: "uw-ublock-illegal"
  }, {
    label: uls("宣传性用户名", "宣傳性使用者名稱"),
    value: "uw-ublock-spam"
  }, {
    label: uls("攻击性用户名", "攻擊性使用者名稱"),
    value: "uw-ublock-attack"
  }, {
    label: uls("混淆性或误导性用户名", "混淆性或誤導性使用者名稱"),
    value: "uw-ublock-suggestive"
  }]
}, {
  label: "其他模板",
  list: [{
    label: "range block",
    value: "range block",
    forAnonOnly: true
  }, {
    label: "school block",
    value: "school block",
    forAnonOnly: true
  }, {
    label: "blocked proxy",
    value: "blocked proxy",
    forAnonOnly: true
  }, {
    label: uls("用户查核封禁（主用户）", "使用者查核封鎖（主使用者）"),
    value: "checkuserblock",
    forAnonOnly: true
  }, {
    label: uls("用户查核封禁（子用户）", "使用者查核封鎖（子使用者）"),
    value: "checkuserblock-account",
    forRegisteredOnly: true
  }]
}];
twinkleblock.blockGroupsPartial = [{
  label: uls("常见部分封禁理由", "常見部分封鎖理由"),
  list: [{
    label: uls("通用部分封禁（自定义理由）", "通用部分封鎖（自訂理由）"),
    value: "uw-pblock",
    selected: true
  }, {
    label: uls("无限期部分封禁（自定义理由）", "無限期部分封鎖（自訂理由）"),
    value: "uw-pblockindef"
  }]
}];
Twinkle.block = twinkleblock;
Twinkle.addInitCallback(Twinkle.block, "block");
//! src/Twinkle/modules/friendlytalkback.ts
/*! Twinkle.js - friendlytalkback.ts */
var talkback = () => {
  if (!mw.config.get("wgRelevantUserName")) {
    return;
  }
  Twinkle.addPortletLink(talkback.callback, "通告", "friendly-talkback", uls("回复通告", "回覆通告"));
};
talkback.callback = () => {
  if (mw.config.get("wgRelevantUserName") === mw.config.get("wgUserName") && !window.confirm(uls("您寂寞到了要自己回复自己的程度么？", "您寂寞到了要自己回覆自己的程度麼？"))) {
    return;
  }
  mountLazyDialog("TwTalkbackDialog", {
    title: uls("回复通告", "回覆通告"),
    footerLinks: footerLinks("talkback", uls("通告设置", "通告設定"), [{
      text: uls("关于{{talkback}}", "關於{{talkback}}"),
      href: mw.util.getUrl("Template:Talkback")
    }])
  });
  const query = {
    action: "query",
    prop: "extlinks",
    titles: `User talk:${mw.config.get("wgRelevantUserName")}`,
    elquery: "userjs.invalid/noTalkback",
    ellimit: "1"
  };
  const api2 = new Morebits2.wiki.api(uls("抓取退出通告信息", "抓取退出通告資訊"), query, optoutStatus);
  api2.post();
};
talkback.optout = "";
var optoutStatus = (apiobj) => {
  const $el = $(apiobj.getXML()).find("el");
  if ($el.length) {
    talkback.optout = mw.config.get("wgRelevantUserName") + uls("不希望收到回复通告", "不希望收到回覆通告");
    const url = $el.text();
    const reason = mw.util.getParamValue("reason", url);
    talkback.optout += reason ? `：${Morebits2.string.appendPunctuation(reason)}` : "。";
  }
  const optoutMessage = document.querySelector("#twinkle-talkback-optout-message");
  if (optoutMessage) {
    optoutMessage.textContent = talkback.optout;
  }
};
Twinkle.talkback = talkback;
Twinkle.addInitCallback(Twinkle.talkback, "talkback");
//! src/Twinkle/modules/twinklespeedy.ts
var import_vue5 = require("vue");
/*! Twinkle.js - twinklespeedy.ts */
var twinklespeedy = () => {
  if (mw.config.get("wgNamespaceNumber") < 0 || !mw.config.get("wgArticleId")) {
    return;
  }
  Twinkle.addPortletLink(twinklespeedy.callback, uls("速删", "速刪"), "tw-csd", Morebits2.userIsSysop ? uls("快速删除", "快速刪除") : uls("请求快速删除", "請求快速刪除"));
};
twinklespeedy.closeDialog = () => {
};
twinklespeedy.hasCSD = !!document.querySelector("#delete-reason");
twinklespeedy.callback = () => {
  var _document$querySelect;
  const dialogData2 = (0, import_vue5.reactive)({
    priorCountText: null,
    priorCountColor: "inherit"
  });
  const {
    close
  } = mountLazyDialog("TwSpeedyDialog", {
    isSysop: Morebits2.userIsSysop,
    hasCSD: twinklespeedy.hasCSD,
    namespace: mw.config.get("wgNamespaceNumber"),
    isRedirect: mw.config.get("wgIsRedirect"),
    isIPUserTalk: mw.util.isIPAddress(mw.config.get("wgRelevantUserName")),
    pageContentModel: mw.config.get("wgPageContentModel"),
    radioClick: Twinkle.getPref("speedySelectionStyle") === "radioClick",
    deleteSysopDefaultToDelete: Twinkle.getPref("deleteSysopDefaultToDelete") === true,
    deleteTalkPageOnDelete: Twinkle.getPref("deleteTalkPageOnDelete") === true,
    deleteRedirectsOnDelete: Twinkle.getPref("deleteRedirectsOnDelete") === true,
    hasCSDReason: twinklespeedy.hasCSD ? decodeURIComponent(((_document$querySelect = document.querySelector("#delete-reason")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.textContent) ?? "").replace(/\+/g, " ") : "",
    enlargeG7: Twinkle.getPref("enlargeG7Input") === true,
    priorCountText: dialogData2.priorCountText,
    priorCountColor: dialogData2.priorCountColor,
    customList: twinklespeedy.customRationale,
    articleList: twinklespeedy.articleList,
    userList: twinklespeedy.userList,
    usertalkList: twinklespeedy.usertalkList,
    fileList: twinklespeedy.fileList,
    categoryList: twinklespeedy.categoryList,
    draftList: twinklespeedy.draftList,
    talkList: twinklespeedy.talkList,
    generalList: twinklespeedy.generalList,
    redirectList: twinklespeedy.redirectList,
    footerLinks: footerLinks("speedy", uls("速删设置", "速刪設定"), [{
      text: uls("快速删除方针", "快速刪除方針"),
      href: mw.util.getUrl("QW:CSD")
    }])
  });
  twinklespeedy.closeDialog = () => {
    twinklespeedy.closeDialog = () => {
    };
    close();
  };
  twinklespeedy.callback.priorDeletionCount(dialogData2);
};
twinklespeedy.callback.priorDeletionCount = (dialogData2) => {
  const query = {
    action: "query",
    format: "json",
    list: "logevents",
    letype: "delete",
    leaction: "delete/delete",
    // Just pure page deletion, no redirect overwrites or revdel
    letitle: mw.config.get("wgPageName"),
    leprop: "",
    // We're just counting we don't actually care about the entries
    lelimit: 5
    // A little bit goes a long way
  };
  new Morebits2.wiki.api(uls("检查之前的删除", "檢查之前的刪除"), query, (apiobj) => {
    var _response$query2;
    const response = apiobj.getResponse();
    const delCount = ((_response$query2 = response.query) === null || _response$query2 === void 0 || (_response$query2 = _response$query2.logevents) === null || _response$query2 === void 0 ? void 0 : _response$query2.length) ?? 0;
    if (delCount) {
      let message = uls("被删除", "被刪除");
      if (response["continue"]) {
        message += uls("超过", "超過");
      }
      message += `${delCount}次`;
      dialogData2.priorCountText = message;
      dialogData2.priorCountColor = delCount >= 3 ? "#ff0000" : "inherit";
    }
  }).post();
};
twinklespeedy.customRationale = [{
  label: `自定义理由${Morebits2.userIsSysop ? "（自定义删除理由）" : ""}`,
  value: "reason",
  tooltip: "该页至少应该符合一条快速删除的标准，并且您必须在理由中提到。",
  subgroup: {
    name: "reason_1",
    type: "input",
    label: "理由：",
    size: 60
  }
}];
twinklespeedy.fileList = [{
  label: "F1：明显不符合本站著作权方针的文件",
  value: "f1",
  tooltip: "包括以下情况：1.上传后3天内仍然来源不明、著作权不明的文件。2.上传者宣称拥有，而在其他来源找到的文件。3.文件宣称由某作者依据某自由著作权协议发布，但找不到该自由协议的声明。4.其他明显侵权的文件，可附加侵权理由。"
}, {
  label: "F2：重复且不再被使用的文件",
  value: "f2",
  tooltip: "包括以下情况：与现有文件完全相同（或与现有文件内容一致但尺寸较小），且没有客观需要（如某些场合需使用小尺寸图片）的文件。或是被更加清晰的文件、SVG格式文件所取代的文件。请提报者确定文件没有任何页面使用后再提报删除，并附注对应质量更好的文件名。",
  subgroup: {
    name: "f2_filename",
    type: "input",
    label: "新文件名：",
    tooltip: "可不含“File:”前缀。"
  }
}];
twinklespeedy.articleList = [{
  label: "A1：内容空泛或完全没有内容。",
  value: "a1",
  tooltip: "条目的内容笼统，或甚至根本没有提及条目主体，使条目不能用以区分其他事物；或条目只包括外部链接、参见、参考来源、分类、模板，而没有文字描述。消歧义页、重定向页不适用此条。请注意有些用户可能会多次保存，若此类页面的最后一次编辑时间超过24小时，则可提请快速删除。"
}, {
  label: "A2：与其他条目或其历史版本重复，且不适合作为其重定向。",
  value: "a2",
  tooltip: "条目创建时的内容，与其他现有条目（或其历史版本）内容完全相同或非常相似，且名称不适合作为后者的重定向。不包括拆分、合并、重组后产生的条目。如有疑虑，可转交删除讨论。若后创建的条目名称可作为重定向，可直接改为重定向；若先创建的条目宜作为后创建条目的重定向，请提请移动请求。",
  subgroup: {
    name: "a2_pagename",
    type: "input",
    label: "现有条目名：",
    tooltip: "不自动加上链接，若需要请自行加上[[]]。",
    size: 60
  }
}, {
  label: "A3：非现代汉语或翻译拙劣的条目",
  value: "a3",
  tooltip: "条目内容绝大部分非现代汉语，包括未翻译的外语、方言及文言文；或翻译质量低下，以至于难以理解或出现较多错误。"
}];
twinklespeedy.categoryList = [{
  label: "O2：空分类。",
  value: "o2",
  tooltip: "没有收录任何页面、文件、子分类的分类。Category:请勿删除的分类中的分类不适用。"
}];
twinklespeedy.draftList = [{
  label: "O3：废弃草稿。",
  value: "o3",
  tooltip: "草稿名字空间内六个月内无编辑的页面。"
}];
twinklespeedy.usertalkList = [];
twinklespeedy.talkList = [];
twinklespeedy.userList = [{
  label: "O1：用户请求删除自己的用户页。",
  value: "o1",
  tooltip: "管理员需查看编辑历史，确认该页面不是从其他名字空间移动而来。"
}, {
  label: "O3：废弃草稿。",
  value: "o3",
  tooltip: "使用条目创建向导创建的超过六个月未改善的用户页草稿。"
}];
twinklespeedy.generalList = [{
  label: "G1：明显违反法律法规或违背公序良俗的页面",
  value: "g1",
  tooltip: "明显违反服务器所在地的法律法规及有关规定，或突破社会公序良俗底线，按照中华人民共和国互联网管理规定应予删除的页面。"
}, {
  label: "G2：没有实际内容的页面",
  value: "g2",
  tooltip: "仅包括无意义字符串而没有实际内容的页面。由用户本人创建的用户页、用户讨论页，及专为测试提供的沙盒，不适用此准则。"
}, {
  label: "G3：纯粹破坏",
  value: "g3",
  tooltip: "包括但不限于明显的恶作剧、错误信息、人身攻击等，以及清理移动破坏时留下的重定向。若收到或发现严重的人身攻击与诋毁，管理员及其他用户应通知监督员进行监督隐藏。"
}, {
  label: "G4：重新创建已被删除的页面",
  value: "g4",
  tooltip: "若现有页面与曾在删除讨论（含页面存废讨论、文件存废讨论和侵权审核，不含快速删除）中被删除内容相同或非常相似，且现有内容仍然适用删除讨论中的结论，无论标题是否相同，都适用本标准。若现有页面标题与已删版本不一致，则提请速删者应一并注明已删版本的页面名；若该页面之前被快速删除，请以相同理由重新提请速删。若现有内容不适用删除讨论中的结论，应重新提出删除讨论。",
  subgroup: [{
    name: "g4_pagename",
    type: "input",
    label: "已删版此页面名：",
    size: 60
  }],
  hideSubgroupWhenMultiple: true
}, {
  label: "G5：因技术原因删除页面",
  value: "g5",
  tooltip: "包括以下情形：因移动请求而删除页面；以覆盖删除重定向；删除无用的MediaWiki页面，及其他技术团队或界面管理员认为有必要执行的快速删除情形。",
  subgroup: {
    name: "g5_rationale",
    type: "input",
    label: "删除原因：",
    size: 60
  }
}, {
  label: "G6：原作者提请删除或清空页面，且页面原作者仅有一人",
  value: "g6",
  tooltip: "页面原作者持合理理由提出的快速删除；或页面原作者（实际贡献者）清空页面，其他用户提交的快速删除。页面原作者（实际贡献者）仅一人时满足本准则。若页面实际贡献者多于一人，请持合理理由提交删除讨论。后一情形不包括用户页、用户讨论页，且应在页面最后一次编辑6小时后提出。被导入的页面，导入者视为原作者。",
  subgroup: {
    name: "g6_rationale",
    type: "input",
    label: "删除原因：",
    size: 60
  },
  hideSubgroupWhenSysop: true
}, {
  label: "G7：明显的广告宣传",
  value: "g7",
  tooltip: "应用于明显的广告宣传，或只有相关人物、组织等事物联系方法（包括但不限于电话、地址、电子邮箱、即时通讯软件联系方式（如QQ号、微信号）、社交媒体链接）。若宣传语气不明显，建议转交删除讨论。"
}, {
  label: "G8：未列明可靠来源且语调负面的生者传记",
  value: "g8",
  tooltip: "本情况下有的页面严重侵犯他人名誉权，有时可能侵犯隐私权，可能需要提请监督。"
}, {
  label: "G9：孤立页面",
  value: "g9",
  tooltip: "包括以下几种类型：1.没有对应文件的文件页面；2.没有对应母页面的子页面（用户页子页面除外）；3.指向不存在页面的重定向；4.没有对应内容页面的讨论页（讨论页存档、用户讨论页，以及在主页面挂有{{CSD Placeholder}}模板的讨论页除外）；5.不存在注册用户的用户页及用户页子页面（随用户更名产生的用户页重定向除外）。请在删除时注意有无将内容移至他处的必要。"
}];
twinklespeedy.redirectList = [{
  label: "R1：不能发挥实际作用的重定向。",
  value: "r1",
  tooltip: "包括以下情况：1.指向本身或循环的重定向，如A→B→C→……→A或A→A（繁简重定向不适用此项）；2.格式错误的重定向，包括标题仅为繁体、繁简混用、消歧义使用的括弧或空格错误、间隔号使用错误（因类推简化字未收录至《通用规范汉字表》导致的繁简混杂情形，或系统无法自动进行繁简处理的情形，则不适用）。若重定向页面标题，与合乎命名常规的目标页面标题之间，仅存在繁简字体的区别，而不存在词语用法区别，则不保留该重定向。因系统无法自动繁简转换而必须保留的重定向页面除外。对于其他未列出的情况，若用户认为该重定向无法发挥实际作用，且依据常识没有任何争议，可凭合理理由提请速删，由管理员判断。指向不存在页面的重定向，适用G9准则。",
  subgroup: {
    name: "r1_type",
    type: "select",
    label: "适用类型：",
    list: [{
      label: "请选择",
      value: ""
    }, {
      label: "指向本身或循环的重定向",
      value: "指向本身或循环的重定向。"
    }, {
      label: "标题繁简混用",
      value: "标题繁简混用。"
    }, {
      label: "消歧义使用的括号或空格错误",
      value: "消歧义使用的括号或空格错误。"
    }, {
      label: "间隔号使用错误",
      value: "间隔号使用错误。"
    }, {
      label: "草稿命名空间内的重定向",
      value: "草稿命名空间内的重定向。"
    }, {
      label: "其他理由（请勾选上方“应用多个理由”，并填写自定义理由）",
      value: "other"
    }]
  }
}, {
  label: "R2：名称与导向目标代表事物不一致或不完全一致的重定向。",
  value: "r2",
  tooltip: "包括但不限于以下情况：1.由任何非条目页面（除用户页）导向条目页的重定向，以及由条目页导向任何非条目页面的重定向。2.明显笔误的重定向，如出现不常见的错别字等。（别称重定向不适用此项。若含错别字或有笔误的重定向使用频率高，此类重定向有助于帮助用户寻找到正确的页面，不适用此标准。有争议的此类重定向宜提交删除讨论。）3.明显与导向目标所涵盖的主题无关，或比导向目标所涵盖的主题更广泛的重定向。（若不明显，可改为提交删除讨论。）",
  subgroup: {
    name: "r2_type",
    type: "select",
    label: "适用类型：",
    list: [{
      label: "请选择",
      value: ""
    }, {
      label: "由非条目页面（除用户页）导向条目页的重定向",
      value: "由非条目页面（除用户页）导向条目页的重定向。"
    }, {
      label: "由条目页导向非条目页面的重定向",
      value: "由条目页导向任何非条目页面的重定向。"
    }, {
      label: "明显笔误的重定向",
      value: "明显笔误的重定向。"
    }, {
      label: "与导向目标无关或比其范围更广泛的重定向",
      value: "与导向目标无关或比其范围更广泛的重定向。"
    }, {
      label: "其他理由（请勾选上方“应用多个理由”，并填写自定义理由）",
      value: "other"
    }]
  }
}];
twinklespeedy.normalizeHash = {
  reason: "db",
  multiple: "multiple",
  "multiple-finish": "multiple-finish",
  g1: "g1",
  g2: "g2",
  g3: "g3",
  g4: "g4",
  g5: "g5",
  g6: "g6",
  g7: "g7",
  g8: "g8",
  g9: "g9",
  a1: "a1",
  a2: "a2",
  a3: "a3",
  r1: "r1",
  r2: "r2",
  f1: "f1",
  f2: "f2",
  f3: "f3",
  f4: "f4",
  f5: "f5",
  o1: "o1",
  o2: "o2",
  o3: "o3"
};
twinklespeedy.callbacks = {
  parseWikitext: (title, wikitext, callback) => {
    const query = {
      action: "parse",
      prop: "text",
      pst: "true",
      text: wikitext,
      contentmodel: "wikitext",
      title
    };
    const statusIndicator = new Morebits2.status(uls("构造删除理由", "構造刪除理由"));
    const api2 = new Morebits2.wiki.api(uls("解析删除模板", "解析刪除模板"), query, (apiObj) => {
      var _xmlDoc$querySelector;
      const xmlDoc = apiObj.getXML();
      const raw = ((_xmlDoc$querySelector = xmlDoc.querySelector("text")) === null || _xmlDoc$querySelector === void 0 || (_xmlDoc$querySelector = _xmlDoc$querySelector.childNodes[0]) === null || _xmlDoc$querySelector === void 0 ? void 0 : _xmlDoc$querySelector.nodeValue) ?? "";
      const reason = decodeURIComponent($(raw).find("#delete-reason").text().replace(/\+/g, " "));
      if (reason) {
        statusIndicator.info("完成");
      } else {
        statusIndicator.warn(uls("未能从删除模板生成删除理由", "未能從刪除模板生成刪除理由"));
      }
      callback(reason);
    }, statusIndicator);
    api2.post();
  },
  user: {
    addToLog: (params, initialContrib) => {
      const usl = new Morebits2.userspaceLogger(Twinkle.getPref("speedyLogPageName"));
      usl.initialText = `这是该用户使用[[H:TW|Twinkle]]的速删模块做出的[[QW:CSD|快速删除]]提名列表。

若您不再想保留此日志，请在[[${Twinkle.getPref("configPage")}|参数设置]]中关掉，并使用[[QW:CSD#O1|CSD O1]]提交快速删除。${Morebits2.userIsSysop ? "\n\n此日志并不记录用Twinkle直接执行的删除。" : ""}`;
      let appendText = `# [[:${Morebits2.pageNameNorm}]]：`;
      if (params.fromDI) {
        appendText += `图版[[QW:CSD#${(params.normalized ?? "").toUpperCase()}|CSD ${(params.normalized ?? "").toUpperCase()}]]（{{tl|${params.templatename}}}）`;
      } else if ((params.normalizeds ?? []).length > 1) {
        appendText += "多个理由（";
        for (const norm of params.normalizeds ?? []) {
          appendText += `[[QW:CSD#${norm.toUpperCase()}|${norm.toUpperCase()}]]、`;
        }
        appendText = appendText.slice(0, Math.max(0, appendText.length - 1));
        appendText += "）";
      } else if ((params.normalizeds ?? [])[0] === "db") {
        appendText += "自定义理由";
      } else {
        const firstNorm = (params.normalizeds ?? [])[0] ?? "";
        appendText += `[[QW:CSD#${firstNorm.toUpperCase()}|CSD ${firstNorm.toUpperCase()}]]`;
      }
      if (params.requestsalt) {
        appendText += uls("；请求白纸保护", "；請求白紙保護");
      }
      if (initialContrib) {
        appendText += `；通知{{user|${initialContrib}}}`;
      }
      appendText += " ~~".concat("~", "~~\n");
      usl.changeTags = Twinkle.changeTags;
      usl.log(appendText, uls("记录对[[", "記錄對[[") + Morebits2.pageNameNorm + uls("]]的快速删除提名", "]]的快速刪除提名"));
    }
  }
};
Twinkle.speedy = twinklespeedy;
Twinkle.addInitCallback(twinklespeedy, "speedy");
//! src/Twinkle/modules/twinklecopyvio.ts
/*! Twinkle.js - twinklecopyvio.ts */
var twinklecopyvio = () => {
  if (mw.config.get("wgNamespaceNumber") < 0 || !mw.config.get("wgArticleId") || mw.config.get("wgNamespaceNumber") === 6 && (document.querySelector("#mw-sharedupload") || !document.querySelector("#mw-imagepage-section-filehistory") && !Morebits2.isPageRedirect())) {
    return;
  }
  Twinkle.addPortletLink(twinklecopyvio.callback, uls("侵权", "侵權"), "tw-copyvio", uls("提报侵权页面", "提報侵權頁面"));
};
twinklecopyvio.callback = () => {
  mountLazyDialog("TwCopyvioDialog", {
    title: uls("提报侵权页面", "提報侵權頁面"),
    footerLinks: footerLinks("copyvio", uls("侵权设置", "侵權設定"), [], true)
  });
};
Twinkle.copyvio = twinklecopyvio;
Twinkle.addInitCallback(Twinkle.copyvio, "copyvio");
//! src/Twinkle/modules/twinklexfd.ts
/*! Twinkle.js - twinklexfd.ts */
var twinklexfd = () => {
  if (mw.config.get("wgNamespaceNumber") < 0 || !mw.config.get("wgArticleId") || mw.config.get("wgNamespaceNumber") === 6 && (document.querySelector("#mw-sharedupload") || !document.querySelector("#mw-imagepage-section-filehistory") && !Morebits2.isPageRedirect())) {
    return;
  }
  Twinkle.addPortletLink(() => {
    twinklexfd.callback();
  }, uls("提删", "提刪"), "tw-xfd", uls("提交删除讨论", "提交刪除討論"));
};
twinklexfd.currentRationale = null;
twinklexfd.printRationale = () => {
  if (twinklexfd.currentRationale) {
    Morebits2.status.printUserText(twinklexfd.currentRationale, uls("您的理由已在下方提供，若您想重新提交，请将其复制到一新窗口中：", "您的理由已在下方提供，若您想重新提交，請將其複製到一新視窗中："));
    twinklexfd.currentRationale = null;
  }
};
twinklexfd.callback = () => {
  const afdDefaultCategory = Twinkle.getPref("afdDefaultCategory");
  let initialXfdCat = "delete";
  if (afdDefaultCategory === "same") {
    const saved = mw.storage.get("Twinkle_afdCategory");
    if (typeof saved === "string") {
      initialXfdCat = saved;
    } else {
      mw.storage.set("Twinkle_afdCategory", "delete");
    }
  }
  const deleteReasonElement = document.querySelector("#delete-reason");
  const fwdcsdReason = deleteReasonElement ? decodeURIComponent(deleteReasonElement.textContent ?? "").replace(/\+/g, " ") : "";
  mountLazyDialog("TwXfdDialog", {
    title: uls("提交存废讨论", "提交存廢討論"),
    defaultCategory: mw.config.get("wgNamespaceNumber") === 6 ? "ffd" : "afd",
    showFwdCsd: !!Twinkle.getPref("FwdCsdToXfd"),
    initialXfdCat,
    rememberCategory: afdDefaultCategory === "same",
    fameDefaultReason: Twinkle.getPref("afdFameDefaultReason"),
    substubDefaultReason: Twinkle.getPref("afdSubstubDefaultReason"),
    fwdcsdReason,
    showNoinclude: mw.config.get("wgNamespaceNumber") === 10 && mw.config.get("wgPageContentModel") !== "Scribunto",
    noincludeDisabled: mw.config.get("wgPageContentModel") === "Scribunto",
    footerLinks: footerLinks("xfd", uls("提删设置", "提刪設定"))
  });
};
Twinkle.xfd = twinklexfd;
Twinkle.addInitCallback(twinklexfd, "xfd");
//! src/Twinkle/modules/twinkleimage.ts
/*! Twinkle.js - twinkleimage.ts */
var twinkleimage = () => {
  if (mw.config.get("wgNamespaceNumber") === 6 && !document.querySelector("#mw-sharedupload") && document.querySelector("#mw-imagepage-section-filehistory")) {
    Twinkle.addPortletLink(twinkleimage.callback, uls("图权", "圖權"), "tw-di", uls("提交文件快速删除", "提交檔案快速刪除"));
  }
};
twinkleimage.callback = () => {
  mountLazyDialog("TwImageDialog", {
    title: uls("文件快速删除候选", "檔案快速刪除候選"),
    initialNotify: Twinkle.getPref("notifyUserOnDeli"),
    footerLinks: footerLinks("image", uls("图权设置", "圖權設定"), [{
      text: uls("快速删除方针", "快速刪除方針"),
      href: mw.util.getUrl("QW:CSD")
    }], true)
  });
};
Twinkle.image = twinkleimage;
Twinkle.addInitCallback(twinkleimage, "image");
//! src/Twinkle/modules/twinkleprotect.ts
var import_vue6 = require("vue");
/*! Twinkle.js - twinkleprotect.ts */
var twinkleprotect = () => {
  if (mw.config.get("wgNamespaceNumber") < 0 || mw.config.get("wgNamespaceNumber") === 8) {
    return;
  }
  Twinkle.addPortletLink(twinkleprotect.callback, uls("保护", "保護"), "tw-rpp", window.Morebits.userIsSysop ? uls("保护页面", "保護頁面") : uls("请求保护页面", "請求保護頁面"));
};
var isTemplate = mw.config.get("wgNamespaceNumber") === 10 || mw.config.get("wgNamespaceNumber") === 828;
var protectionInfo = null;
twinkleprotect.callback = () => {
  const info = (0, import_vue6.reactive)({
    previousNotice: null,
    logLink: mw.util.getUrl("Special:Log", {
      action: "view",
      page: mw.config.get("wgPageName"),
      type: "protect"
    }),
    currentStatus: null
  });
  protectionInfo = info;
  mountLazyDialog("TwProtectDialog", {
    isSysop: window.Morebits.userIsSysop,
    pageExists: mw.config.get("wgArticleId") !== 0,
    isScribunto: mw.config.get("wgPageContentModel") === "Scribunto",
    isTemplate,
    protectionInfo: info,
    title: window.Morebits.userIsSysop ? uls("施行或请求保护页面", "施行或請求保護頁面") : uls("请求保护页面", "請求保護頁面"),
    footerLinks: footerLinks("protect", uls("保护设置", "保護設定"), [{
      text: uls("保护方针", "保護方針"),
      href: mw.util.getUrl("QW:PROT")
    }]),
    protectionLevels: twinkleprotect.protectionLevels,
    protectionLengths: twinkleprotect.protectionLengths,
    protectionTypesAdmin: twinkleprotect.protectionTypesAdmin,
    protectionTypesCreateOnly: twinkleprotect.protectionTypesCreateOnly,
    protectionTypesCreate: twinkleprotect.protectionTypesCreate,
    protectionTags: twinkleprotect.protectionTags,
    protectionPresetsInfo: twinkleprotect.protectionPresetsInfo
  });
  twinkleprotect.fetchProtectionLevel();
};
twinkleprotect.currentProtectionLevels = {};
twinkleprotect.previousProtectionLevels = {};
twinkleprotect.previousProtectionLog = void 0;
twinkleprotect.fetchProtectionLevel = () => {
  const params = {
    format: "json",
    indexpageids: true,
    action: "query",
    list: "logevents",
    letype: "protect",
    letitle: mw.config.get("wgPageName"),
    prop: "info",
    inprop: "protection|watched",
    titles: mw.config.get("wgPageName")
  };
  void api.get(params).then((response) => {
    var _logevents$;
    const protectData = response;
    const [pageid] = protectData.query.pageids;
    const page = protectData.query.pages[pageid ?? ""];
    if (!page) {
      return;
    }
    const current = {};
    const previous = {};
    twinkleprotect.watched = Boolean(page.watchlistexpiry) || page.watched === "";
    for (const protection of page.protection) {
      if (protection.type !== "aft") {
        current[protection.type] = {
          level: protection.level,
          expiry: protection.expiry,
          cascade: protection.cascade === ""
        };
      }
    }
    const logevents = protectData.query.logevents;
    if (logevents.length >= 1 && ((_logevents$ = logevents[0]) === null || _logevents$ === void 0 ? void 0 : _logevents$.action) !== "unprotect") {
      [twinkleprotect.previousProtectionLog] = logevents;
    } else if (logevents.length >= 2) {
      [, twinkleprotect.previousProtectionLog] = logevents;
    }
    if (twinkleprotect.previousProtectionLog) {
      for (const protection of twinkleprotect.previousProtectionLog.params.details) {
        if (protection.type !== "aft") {
          previous[protection.type] = {
            level: protection.level,
            expiry: protection.expiry,
            cascade: protection.cascade === ""
          };
        }
      }
    }
    twinkleprotect.hasProtectLog = !!protectData.query.logevents.length;
    twinkleprotect.currentProtectionLevels = current;
    twinkleprotect.previousProtectionLevels = previous;
    showLogAndCurrentProtectInfo();
  });
};
var showLogAndCurrentProtectInfo = () => {
  if (!protectionInfo) {
    return;
  }
  const currentlyProtected = Object.keys(twinkleprotect.currentProtectionLevels).length !== 0;
  if (twinkleprotect.hasProtectLog && twinkleprotect.previousProtectionLog) {
    const log = twinkleprotect.previousProtectionLog;
    protectionInfo.previousNotice = currentlyProtected ? uls("先前保护", "先前保護") : `${uls("此页面曾在", "此頁面曾在")}${new window.Morebits.date(log.timestamp).calendar(UTC8_OFFSET_MINUTES)}被${log.user}${uls("保护", "保護")}：${twinkleprotect.formatProtectionDescription(twinkleprotect.previousProtectionLevels)}`;
  } else {
    protectionInfo.previousNotice = null;
  }
  const description = twinkleprotect.formatProtectionDescription(twinkleprotect.currentProtectionLevels);
  protectionInfo.currentStatus = {
    severe: currentlyProtected,
    text: description
  };
};
twinkleprotect.protectionLevels = [{
  label: "全部",
  value: "all"
}, {
  label: uls("仅自动确认用户", "僅自動確認使用者"),
  value: "autoconfirmed"
}, {
  label: uls("仅模板编辑员和管理员", "僅模板編輯員和管理員"),
  value: "templateeditor"
}, {
  label: uls("仅管理员", "僅管理員"),
  value: "sysop",
  selected: true
}, {
  label: uls("仅资深编者", "僅資深編者"),
  value: "revisionprotected"
}, {
  label: uls("仅裁决委员", "僅裁決委員"),
  value: "officialprotected"
}];
twinkleprotect.protectionLengths = [{
  label: "1天",
  value: "1 day"
}, {
  label: "3天",
  value: "3 days"
}, {
  label: uls("1周", "1週"),
  value: "1 week"
}, {
  label: uls("2周", "2週"),
  value: "2 weeks"
}, {
  label: uls("1个月", "1個月"),
  value: "1 month"
}, {
  label: uls("3个月", "3個月"),
  value: "3 months"
}, {
  label: uls("6个月", "6個月"),
  value: "6 months"
}, {
  label: "1年",
  value: "1 year"
}, {
  label: uls("无限期", "無限期"),
  value: "infinity"
}, {
  label: uls("自定义……", "自訂……"),
  value: "custom"
}];
twinkleprotect.protectionTypesAdmin = [{
  label: uls("解除保护", "解除保護"),
  value: "unprotect"
}, {
  label: uls("全保护", "全保護"),
  list: [{
    label: uls("常规（全）", "常規（全）"),
    value: "pp-protected"
  }, {
    label: uls("争议、编辑战（全）", "爭議、編輯戰（全）"),
    value: "pp-dispute"
  }]
}, {
  label: uls("模板保护", "模板保護"),
  list: [{
    label: uls("高风险模板（模板）", "高風險模板（模板）"),
    value: "pp-template"
  }]
}, {
  label: uls("半保护", "半保護"),
  list: [{
    label: uls("常规（半）", "常規（半）"),
    value: "pp-semi-protected"
  }, {
    label: uls("持续破坏（半）", "持續破壞（半）"),
    value: "pp-semi-vandalism"
  }, {
    label: uls("违反生者传记条例（半）", "違反生者傳記條例（半）"),
    value: "pp-semi-blp"
  }, {
    label: uls("傀儡破坏（半）", "傀儡破壞（半）"),
    value: "pp-semi-sock"
  }, {
    label: uls("高风险模板（半）", "高風險模板（半）"),
    value: "pp-semi-template"
  }, {
    label: uls("被封禁用户滥用讨论页（半）", "被封禁使用者濫用討論頁（半）"),
    value: "pp-semi-usertalk"
  }]
}, {
  label: uls("移动保护", "移動保護"),
  list: [{
    label: uls("常规（移动）", "常規（移動）"),
    value: "pp-move"
  }, {
    label: uls("争议、移动战（移动）", "爭議、移動戰（移動）"),
    value: "pp-move-dispute"
  }, {
    label: uls("移动破坏（移动）", "移動破壞（移動）"),
    value: "pp-move-vandalism"
  }, {
    label: uls("高风险页面（移动）", "高風險頁面（移動）"),
    value: "pp-move-indef"
  }]
}].filter(({
  label
}) => {
  return isTemplate || label !== "模板保护" && label !== "模板保護";
});
twinkleprotect.protectionTypesCreateOnly = [{
  label: uls("白纸保护", "白紙保護"),
  list: [{
    label: uls("常规（白纸）", "常規（白紙）"),
    value: "pp-create"
  }, {
    label: uls("多次重复创建（白纸）", "多次重複建立（白紙）"),
    value: "pp-create-repeat"
  }, {
    label: uls("持续破坏（白纸）", "持續破壞（白紙）"),
    value: "pp-create-vandalism"
  }, {
    label: uls("已封禁用户的用户页（白纸）", "已封禁使用者的使用者頁（白紙）"),
    value: "pp-create-userpage"
  }]
}];
twinkleprotect.protectionTypes = [...twinkleprotect.protectionTypesAdmin, ...twinkleprotect.protectionTypesCreateOnly];
twinkleprotect.protectionTypesCreate = [{
  label: "解除保护",
  value: "unprotect"
}, ...twinkleprotect.protectionTypesCreateOnly];
twinkleprotect.protectionPresetsInfo = {
  "pp-protected": {
    edit: "sysop",
    move: "sysop",
    reason: null
  },
  "pp-dispute": {
    edit: "sysop",
    move: "sysop",
    reason: uls("编辑战", "編輯戰")
  },
  "pp-template": {
    edit: "templateeditor",
    move: "templateeditor",
    expiry: "infinity",
    reason: uls("[[QW:HRT|高风险模板]]", "[[QW:HRT|高風險模板]]"),
    template: "noop"
  },
  "pp-vandalism": {
    edit: "sysop",
    move: "sysop",
    reason: uls("被自动确认用户破坏", "被自動確認使用者破壞")
  },
  "pp-sock": {
    edit: "sysop",
    move: "sysop",
    reason: uls("持续的傀儡破坏", "持續的傀儡破壞")
  },
  "pp-semi-vandalism": {
    edit: "autoconfirmed",
    reason: uls("被新用户破坏", "被新使用者破壞"),
    template: "pp-vandalism"
  },
  "pp-semi-blp": {
    edit: "autoconfirmed",
    reason: uls("新用户违反生者传记条例", "新使用者違反生者傳記條例")
  },
  "pp-semi-usertalk": {
    edit: "autoconfirmed",
    reason: uls("被封禁用户滥用其讨论页", "被封禁使用者濫用其討論頁")
  },
  "pp-semi-template": {
    // removed for now
    edit: "autoconfirmed",
    expiry: "infinity",
    reason: uls("[[QW:HRT|高风险模板]]", "[[QW:HRT|高風險模板]]"),
    template: "noop"
  },
  "pp-semi-sock": {
    edit: "autoconfirmed",
    reason: uls("持续的傀儡破坏", "持續的傀儡破壞"),
    template: "pp-sock"
  },
  "pp-semi-protected": {
    edit: "autoconfirmed",
    reason: null,
    template: "pp-protected"
  },
  "pp-move": {
    move: "sysop",
    reason: null
  },
  "pp-move-dispute": {
    move: "sysop",
    reason: uls("页面移动战", "頁面移動戰")
  },
  "pp-move-vandalism": {
    move: "sysop",
    reason: uls("移动破坏", "移動破壞")
  },
  "pp-move-indef": {
    move: "sysop",
    expiry: "infinity",
    reason: uls("高风险页面", "高風險頁面")
  },
  unprotect: {
    edit: "all",
    move: "all",
    create: "all",
    reason: null,
    template: "none"
  },
  "pp-create": {
    create: "autoconfirmed",
    reason: null
  },
  "pp-create-repeat": {
    create: "autoconfirmed",
    reason: uls("多次重复创建", "多次重複建立")
  },
  "pp-create-vandalism": {
    create: "autoconfirmed",
    reason: uls("被新用户破坏", "被新使用者破壞")
  },
  "pp-create-userpage": {
    create: "sysop",
    expiry: "infinity",
    reason: uls("被永久封禁的用户页", "被永久封禁的使用者頁面")
  }
};
twinkleprotect.protectionTags = [{
  label: uls("无（移除现有模板）", "無（移除現有模板）"),
  value: "none"
}, {
  label: uls("无（不移除现有模板）", "無（不移除現有模板）"),
  value: "noop"
}, {
  label: "通用模板",
  list: [{
    label: `{{pp-dispute}}: ${uls("争议", "爭議")}`,
    value: "pp-dispute"
  }, {
    label: `{{pp-vandalism}}: ${uls("破坏", "破壞")}`,
    value: "pp-vandalism",
    selected: true
  }, {
    label: "{{pp-sock}}: 傀儡",
    value: "pp-sock"
  }, {
    label: `{{pp-template}}: ${uls("高风险模板", "高風險模板")}`,
    value: "pp-template"
  }, {
    label: `{{pp-protected}}: ${uls("常规", "常規")}`,
    value: "pp-protected"
  }]
}, {
  label: uls("半保护模板", "半保護模板"),
  list: [{
    label: `{{pp-semi-usertalk}}: ${uls("封禁的用户", "封禁的使用者")}`,
    value: "pp-semi-usertalk"
  }, {
    label: `{{pp-semi-blp}}: ${uls("生者传记", "生者傳記")}`,
    value: "pp-semi-blp"
  }, {
    label: `{{pp-semi-indef}}: ${uls("长期", "長期")}`,
    value: "pp-semi-indef"
  }]
}, {
  label: uls("移动保护模板", "移動保護模板"),
  list: [{
    label: `{{pp-move-dispute}}: ${uls("争议", "爭議")}`,
    value: "pp-move-dispute"
  }, {
    label: `{{pp-move-vandalism}}: ${uls("破坏", "破壞")}`,
    value: "pp-move-vandalism"
  }, {
    label: `{{pp-move-indef}}: ${uls("长期", "長期")}`,
    value: "pp-move-indef"
  }, {
    label: `{{pp-move}}: ${uls("常规", "常規")}`,
    value: "pp-move"
  }]
}];
twinkleprotect.formatProtectionDescription = (protectionLevels) => {
  if (Object.keys(protectionLevels).length === 0) {
    return uls("无保护", "無保護");
  }
  const descriptions = [];
  for (const [type, settings] of Object.entries(protectionLevels)) {
    let label;
    switch (type) {
      case "edit":
        label = uls("编辑", "編輯");
        break;
      case "move":
        label = uls("移动", "移動");
        break;
      case "create":
        label = uls("创建", "建立");
        break;
      case "upload":
        label = uls("上传", "上傳");
        break;
      default:
        label = type;
        break;
    }
    let level;
    switch (settings.level) {
      case "officialprotected":
        level = uls("仅裁决委员", "僅裁決委員");
        break;
      case "revisionprotected":
        level = uls("仅资深编者", "僅資深編者");
        break;
      case "autoconfirmed":
        level = uls("仅自动确认用户", "僅自動確認使用者");
        break;
      case "templateeditor":
        level = uls("仅模板编辑员和管理员", "僅模板編輯員和管理員");
        break;
      case "sysop":
        level = uls("仅管理员", "僅管理員");
        break;
      default:
        level = settings.level;
        break;
    }
    let description = `${label}：${level}`;
    if (window.Morebits.string.isInfinity(settings.expiry)) {
      description += uls("（无限期）", "（無限期）");
    } else {
      description += `${uls("（过期：", "（過期：") + new window.Morebits.date(settings.expiry).calendar(UTC8_OFFSET_MINUTES)}）`;
    }
    if (settings.cascade) {
      description += uls("（连锁）", "（連鎖）");
    }
    descriptions.push(description);
  }
  return descriptions.join(" ");
};
Twinkle.protect = twinkleprotect;
Twinkle.addInitCallback(twinkleprotect, "protect");
//! src/Twinkle/modules/friendlytag.ts
var import_vue7 = require("vue");
/*! Twinkle.js - friendlytag.ts */
var $body3 = $("body");
var modeEn;
var canRemove = false;
var alreadyPresent = (0, import_vue7.reactive)([]);
var friendlytag = () => {
  if (window.Morebits.isPageRedirect()) {
    modeEn = "redirect";
    Twinkle.addPortletLink(friendlytag.callback, uls("标记", "標記"), "friendly-tag", uls("标记重定向", "標記重新導向"));
  } else if (mw.config.get("wgNamespaceNumber") === 6 && !document.querySelector("#mw-sharedupload") && document.querySelector("#mw-imagepage-section-filehistory")) {
    modeEn = "file";
    Twinkle.addPortletLink(friendlytag.callback, uls("标记", "標記"), "friendly-tag", uls("标记文件", "標記檔案"));
  } else if ([0, 118].includes(mw.config.get("wgNamespaceNumber")) && mw.config.get("wgCurRevisionId") || window.Morebits.pageNameNorm === Twinkle.getPref("sandboxPage")) {
    modeEn = "article";
    canRemove = mw.config.get("wgCurRevisionId") === mw.config.get("wgRevisionId") && // Disabled on latest diff because the diff slider could be used to slide
    // away from the latest diff without causing the script to reload
    !mw.config.get("wgDiffNewId");
    Twinkle.addPortletLink(friendlytag.callback, uls("标记", "標記"), "friendly-tag", uls("标记条目", "標記條目"));
  }
};
friendlytag.callback = () => {
  if (!modeEn) {
    return;
  }
  const currentMode = modeEn;
  const flatObject = {};
  for (const group of articleTagList) {
    for (const subgroup of group.value) {
      if ("value" in subgroup) {
        for (const item of subgroup.value) {
          flatObject[item.tag] = {
            description: item.description,
            excludeMI: !!item.excludeMI
          };
        }
      } else {
        flatObject[subgroup.tag] = {
          description: subgroup.description,
          excludeMI: !!subgroup.excludeMI
        };
      }
    }
  }
  const alphabeticalList = Object.keys(flatObject).sort();
  const articleGroups = articleTagList.map((group) => {
    const subgroups = [];
    const first = group.value[0];
    if (first && "tag" in first) {
      subgroups.push({
        key: null,
        items: group.value.filter((item) => "tag" in item).map((item) => {
          return {
            tag: item.tag,
            description: item.description
          };
        })
      });
    } else {
      for (const subgroup of group.value) {
        if ("value" in subgroup) {
          subgroups.push({
            key: subgroup.key,
            items: subgroup.value.map((item) => {
              return {
                tag: item.tag,
                description: item.description
              };
            })
          });
        }
      }
    }
    return {
      key: group.key,
      subgroups
    };
  });
  const alphaTags = alphabeticalList.map((tag) => {
    var _flatObject$tag;
    return {
      tag,
      description: ((_flatObject$tag = flatObject[tag]) === null || _flatObject$tag === void 0 ? void 0 : _flatObject$tag.description) ?? ""
    };
  });
  const fileGroups = fileList.map((group) => {
    return {
      key: group.key,
      items: group.value.map((item) => {
        return {
          tag: item.value,
          label: item.label,
          ...item.subgroup ? {
            subgroup: item.subgroup
          } : {},
          buildFilename: !!group.buildFilename
        };
      })
    };
  });
  const redirectGroups = redirectList.map((group) => {
    return {
      key: group.key,
      items: group.value.map((item) => {
        return {
          tag: item.tag,
          label: `{{${item.tag}}}：${item.description}`,
          ...item.subgroup ? {
            subgroup: item.subgroup
          } : {}
        };
      })
    };
  });
  const getCustomGroups = (prefKey) => {
    const list = Twinkle.getPref(prefKey);
    return list.length ? [{
      key: uls("自定义模板", "自訂模板"),
      items: list.map((el) => {
        return {
          tag: el.value,
          label: el.label,
          ...el.subgroup ? {
            subgroup: el.subgroup
          } : {}
        };
      })
    }] : [];
  };
  const customGroups = currentMode === "article" ? getCustomGroups("customTagList") : currentMode === "file" ? getCustomGroups("customFileTagList") : getCustomGroups("customRedirectTagList");
  let title;
  switch (currentMode) {
    case "article":
      title = uls("条目维护标记", "條目維護標記");
      break;
    case "file":
      title = uls("文件维护标记", "檔案維護標記");
      break;
    default:
      title = uls("重定向标记", "重新導向標記");
      break;
  }
  mountLazyDialog("TwTagDialog", {
    mode: currentMode,
    title,
    canRemove,
    isMainspace: mw.config.get("wgNamespaceNumber") === 0,
    initialSortOrder: Twinkle.getPref("tagArticleSortOrder") === "alpha" ? "alpha" : "cat",
    initialGroup: !!Twinkle.getPref("groupByDefault"),
    showPatrol: !!document.querySelector(".patrollink"),
    initialPatrol: !!Twinkle.getPref("markTaggedPagesAsPatrolled"),
    articleGroups,
    alphaTags,
    alreadyPresentTags: alreadyPresent,
    flatDescriptions: Object.fromEntries(Object.entries(flatObject).map(([tag, info]) => {
      return [tag, info.description];
    })),
    flatExcludeMI: Object.fromEntries(Object.entries(flatObject).map(([tag, info]) => {
      return [tag, info.excludeMI];
    })),
    fileGroups,
    redirectGroups,
    customGroups,
    footerLinks: footerLinks("tag", uls("标记设置", "標記設定"))
  });
  if (currentMode === "article") {
    const presentTags = [];
    if (canRemove) {
      for (const e of $body3.find(".mw-parser-output").children().toArray()) {
        if (e.tagName === "H2") {
          break;
        }
        const boxClass = e.classList[0];
        if (boxClass && e.className.indexOf("box-") === 0) {
          if (boxClass === "box-问题条目") {
            $(e).find(".ambox").each((_index, element) => {
              const amboxClass = element.classList[0];
              if (amboxClass && amboxClass.indexOf("box-") === 0) {
                const boxTag = amboxClass.slice("box-".length).replace(/_/g, " ");
                presentTags.push(boxTag);
              }
            });
            continue;
          }
          presentTags.push(boxClass.slice("box-".length).replace(/_/g, " "));
        }
      }
      if (document.querySelectorAll(".box-Uncategorized").length) {
        presentTags.push("Uncategorized");
      }
      if (document.querySelectorAll(".box-Improve_categories").length) {
        presentTags.push("Improve categories");
      }
    }
    alreadyPresent.splice(0, alreadyPresent.length, ...presentTags);
  }
};
var articleTagList = [{
  key: uls("清理和维护模板", "清理和維護模板"),
  value: [{
    key: uls("常规清理", "常規清理"),
    value: [{
      tag: "Cleanup",
      description: uls("可能需要进行清理，以符合求闻百科的质量标准", "可能需要進行清理，以符合求聞百科的質量標準")
    }, {
      tag: "Cleanup rewrite",
      description: uls("不符合求闻百科的质量标准，需要完全重写", "不符合求聞百科的質量標準，需要完全重寫")
    }, {
      tag: "Cleanup-jargon",
      description: uls("包含过多行话或专业术语，可能需要简化或提出进一步解释", "包含過多行話或專業術語，可能需要簡化或提出進一步解釋")
    }, {
      tag: "Copy edit",
      description: uls("需要编修，以确保文法、用词、语气、格式、标点等使用恰当", "需要編修，以確保文法、用詞、語氣、格式、標點等使用恰當")
    }]
  }, {
    key: uls("可能多余的内容", "可能多餘的內容"),
    value: [{
      tag: "Copypaste",
      description: uls("内容可能是从某个来源处拷贝后粘贴", "內容可能是從某個來源處拷貝後貼上")
    }, {
      tag: "External links",
      description: uls("使用外部链接的方式可能不符合求闻百科的方针", "使用外部連結的方式可能不符合求聞百科的方針")
    }, {
      tag: "Non-free",
      description: uls("可能过多或不当地使用了受著作权保护的文字、图像或多媒体文件", "可能過多或不當地使用了受版權保護的文字、圖像或多媒體檔案")
    }]
  }, {
    key: uls("结构和导言", "結構和導言"),
    value: [{
      tag: "Lead too long",
      description: uls("导言部分也许过于冗长", "導言部分也許過於冗長")
    }, {
      tag: "Lead too short",
      description: uls("导言部分也许不足以概括其内容", "導言部分也許不足以概括其內容")
    }, {
      tag: "Very long",
      description: uls("可能过于冗长", "可能過於冗長")
    }]
  }, {
    key: uls("虚构作品相关清理", "虛構作品相關清理"),
    value: [{
      tag: "In-universe",
      description: uls("使用小说故事内的观点描述一个虚构事物", "使用小說故事內的觀點描述一個虛構事物")
    }, {
      tag: "Long plot",
      description: uls("可能包含过于详细的剧情摘要", "可能包含過於詳細的劇情摘要")
    }]
  }]
}, {
  key: uls("常规条目问题", "常規條目問題"),
  value: [{
    key: "重要性和知名度",
    value: [{
      tag: "Notability",
      description: uls("可能不符合通用收录标准", "可能不符合通用收錄標準"),
      excludeMI: true
    }, {
      tag: "Notability Unreferenced",
      description: uls("可能具备收录标准，但需要来源加以彰显", "可能具備收錄標準，但需要來源加以彰顯")
    }]
  }, {
    key: uls("写作风格", "寫作風格"),
    value: [{
      tag: "Advert",
      description: uls("类似广告或宣传性内容", "類似廣告或宣傳性內容")
    }, {
      tag: "Fanpov",
      description: uls("类似爱好者网页", "類似愛好者網頁")
    }, {
      tag: "How-to",
      description: uls("包含指南或教学内容", "包含指南或教學內容")
    }, {
      tag: "Inappropriate person",
      description: uls("使用不适当的第一人称和第二人称", "使用不適當的第一人稱和第二人稱")
    }, {
      tag: "Newsrelease",
      description: uls("阅读起来像是新闻稿及包含过度的宣传性语调", "閱讀起來像是新聞稿及包含過度的宣傳性語調")
    }, {
      tag: "Prose",
      description: uls("使用了日期或时间列表式记述，需要改写为连贯的叙述性文字", "使用了日期或時間列表式記述，需要改寫為連貫的敘述性文字")
    }, {
      tag: "Review",
      description: uls("阅读起来类似评论，需要清理", "閱讀起來類似評論，需要清理")
    }, {
      tag: "Tone",
      description: uls("语调或风格可能不适合百科全书的写作方式", "語調或風格可能不適合百科全書的寫作方式")
    }]
  }, {
    key: uls("内容", "內容"),
    value: [
      {
        tag: "Missing information",
        description: "缺少必要的信息"
      },
      // these three have a subgroup with several options
      {
        tag: "Substub",
        description: uls("过于短小", "過於短小"),
        excludeMI: true
      },
      {
        tag: "Unencyclopedic",
        description: uls("可能不适合写入百科全书", "可能不適合寫入百科全書")
      }
    ]
  }, {
    key: uls("信息和细节", "資訊和細節"),
    value: [{
      tag: "Expert needed",
      description: uls("需要精通或熟悉本主题的专业人士（专家）参与及协助编辑", "需要精通或熟悉本主題的專業人士（專家）參與及協助編輯")
    }, {
      tag: "Overly detailed",
      description: uls("包含太多过度细节内容", "包含太多過度細節內容")
    }, {
      tag: "Trivia",
      description: uls("应避免有陈列杂项、琐碎资料的部分", "應避免有陳列雜項、瑣碎資料的部分")
    }]
  }, {
    key: uls("时间性", "時間性"),
    value: [{
      tag: "Current",
      description: uls("记述新闻动态", "記述新聞動態"),
      excludeMI: true
    }, {
      tag: "Update",
      description: uls("当前条目或章节需要更新", "當前條目或章節需要更新")
    }]
  }, {
    key: uls("客观性和事实准确性", "客觀性和事實準確性"),
    value: [{
      tag: "Autobiography",
      description: uls("类似一篇自传，或内容主要由条目描述的当事人或组织撰写、编辑", "類似一篇自傳，或內容主要由條目描述的當事人或組織撰寫、編輯")
    }, {
      tag: "COI",
      description: uls("主要贡献者与本条目所宣扬的内容可能存在利益冲突", "主要貢獻者與本條目所宣揚的內容可能存在利益衝突")
    }, {
      tag: "Disputed",
      description: uls("内容疑欠准确，有待查证", "內容疑欠準確，有待查證")
    }, {
      tag: "Globalize",
      description: uls("仅具有一部分地区的信息或观点", "僅具有一部分地區的資訊或觀點")
    }, {
      tag: "Hoax",
      description: uls("真实性被质疑", "真實性被質疑")
    }, {
      tag: "POV",
      description: uls("客观性有争议。内容、语调可能带有明显的个人观点或地方色彩", "客觀性有爭議。內容、語調可能帶有明顯的個人觀點或地方色彩")
    }, {
      tag: "Self-contradictory",
      description: uls("内容自相矛盾", "內容自相矛盾")
    }, {
      tag: "Weasel",
      description: uls("语义模棱两可而损及其客观性或准确性", "語意模棱兩可而損及其客觀性或準確性")
    }]
  }, {
    key: uls("可供查证和来源", "可供查證和來源"),
    value: [{
      tag: "BLPdispute",
      description: uls("可能违反了求闻百科关于生者传记的方针", "可能違反了求聞百科關於生者傳記的方針")
    }, {
      tag: "BLPsources",
      description: uls("生者传记需要补充更多可供查证的来源", "生者傳記需要補充更多可供查證的來源")
    }, {
      tag: "BLP unsourced",
      description: uls("生者传记没有列出任何参考或来源", "生者傳記沒有列出任何參考或來源")
    }, {
      tag: "Citecheck",
      description: uls("可能包含不适用或被曲解的引用资料，部分内容的准确性无法被证实", "可能包含不適用或被曲解的引用資料，部分內容的準確性無法被證實")
    }, {
      tag: "More footnotes needed",
      description: uls("因为文内引用不足，部分字句的来源仍然不明", "因為文內引用不足，部分字句的來源仍然不明")
    }, {
      tag: "No footnotes",
      description: uls("因为没有内文引用而来源仍然不明", "因為沒有內文引用而來源仍然不明")
    }, {
      tag: "Onesource",
      description: uls("极大或完全地依赖于某个单一的来源", "極大或完全地依賴於某個單一的來源")
    }, {
      tag: "Original research",
      description: uls("可能包含原创研究或未查证内容", "可能包含原創研究或未查證內容")
    }, {
      tag: "Primarysources",
      description: uls("依赖第一手来源", "依賴第一手來源")
    }, {
      tag: "Refimprove",
      description: uls("需要补充更多来源", "需要補充更多來源")
    }, {
      tag: "Unreferenced",
      description: uls("没有列出任何参考或来源", "沒有列出任何參考或來源")
    }, {
      tag: "Unreliable sources",
      description: uls("使用的来源可能不可靠", "使用的來源可能不可靠")
    }]
  }]
}, {
  key: uls("具体内容问题", "具體內容問題"),
  value: [{
    key: uls("语言", "語言"),
    value: [{
      tag: "NotMandarin",
      description: uls("包含过多不是现代标准汉语的内容", "包含過多不是現代標準漢語的內容"),
      excludeMI: true
    }, {
      tag: "Rough translation",
      description: uls("翻译品质不佳", "翻譯品質不佳")
    }]
  }, {
    key: uls("链接", "連結"),
    value: [{
      tag: "Dead end",
      description: uls("需要加上内部链接以构筑百科全书的链接网络", "需要加上內部連結以構築百科全書的連結網絡")
    }, {
      tag: "Orphan",
      description: uls("没有或只有很少链入页面", "沒有或只有很少連入頁面")
    }, {
      tag: "Overlinked",
      description: uls("含有过多、重复、或不必要的内部链接", "含有過多、重複、或不必要的內部連結")
    }, {
      tag: "Underlinked",
      description: uls("需要更多内部链接以构筑百科全书的链接网络", "需要更多內部連結以構築百科全書的連結網絡")
    }]
  }, {
    key: uls("参考技术", "參考技術"),
    value: [{
      tag: "Citation style",
      description: uls("引用需要进行清理", "引用需要進行清理")
    }]
  }, {
    key: uls("分类", "分類"),
    value: [{
      tag: "Improve categories",
      description: uls("需要更多页面分类", "需要更多頁面分類"),
      excludeMI: true
    }, {
      tag: "Uncategorized",
      description: uls("缺少页面分类", "缺少頁面分類"),
      excludeMI: true
    }]
  }]
}, {
  key: uls("合并、拆分、移动", "合併、拆分、移動"),
  value: [{
    tag: "Merge from",
    description: uls("建议将页面并入此页面", "建議將頁面併入此頁面"),
    excludeMI: true
  }, {
    tag: "Merge to",
    description: uls("建议将此页面并入页面", "建議將此頁面併入頁面"),
    excludeMI: true
  }, {
    tag: "Merge",
    description: uls("建议此页面与页面合并", "建議此頁面與頁面合併"),
    excludeMI: true
  }, {
    tag: "Requested move",
    description: uls("建议将此页面移动到新名称", "建議將此頁面移動到新名稱"),
    excludeMI: true
  }, {
    tag: "Split",
    description: uls("建议将此页面分割为多个页面", "建議將此頁面分割為多個頁面"),
    excludeMI: true
  }]
}];
var redirectList = [{
  key: "常用模板",
  value: [{
    tag: uls("合并重定向", "合併重定向"),
    description: uls("保持页面题名至相应主条目，令页面内容在合并后仍能保存其编辑历史", "保持頁面題名至相應主條目，令頁面內容在合併後仍能儲存其編輯歷史")
  }, {
    tag: uls("简繁重定向", "簡繁重定向"),
    description: uls("引导简体至繁体，或繁体至简体", "引導簡體至繁體，或繁體至簡體")
  }, {
    tag: uls("收录标准重定向", "收錄標準重定向"),
    description: uls("缺乏收录标准的子主题向有收录标准的母主题的重定向", "缺乏收錄標準的子主題向有收錄標準的母主題的重定向")
  }, {
    tag: "模板重定向",
    description: uls("指向模板的重定向页面", "指向模板的重定向頁面")
  }, {
    tag: uls("别名重定向", "別名重定向"),
    description: uls("标题的其他名称、笔名、绰号、同义字等", "標題的其他名稱、筆名、綽號、同義字等")
  }, {
    tag: uls("译名重定向", "譯名重定向"),
    description: uls("人物、作品等各项事物的其他翻译名称", "人物、作品等各項事物的其他翻譯名稱")
  }, {
    tag: uls("缩写重定向", "縮寫重定向"),
    description: uls("标题缩写", "標題縮寫")
  }, {
    tag: uls("拼写重定向", "拼寫重定向"),
    description: uls("标题的其他不同拼写", "標題的其他不同拼寫")
  }, {
    tag: uls("错字重定向", "錯字重定向"),
    description: uls("纠正标题的常见错误拼写或误植", "糾正標題的常見錯誤拼寫或誤植")
  }, {
    tag: uls("旧名重定向", "舊名重定向"),
    description: uls("将事物早前的名称引导至更改后的主题", "將事物早前的名稱引導至更改後的主題")
  }, {
    tag: "全名重定向",
    description: uls("标题的完整或更完整名称", "標題的完整或更完整名稱")
  }, {
    tag: "短名重定向",
    description: uls("完整标题名称或人物全名的部分、不完整的名称或简称", "完整標題名稱或人物全名的部分、不完整的名稱或簡稱")
  }, {
    tag: "姓氏重定向",
    description: "人物姓氏"
  }, {
    tag: "名字重定向",
    description: "人物人名"
  }, {
    tag: "本名重定向",
    description: "人物本名"
  }, {
    tag: "非中文重定向",
    description: uls("非中文标题", "非中文標題"),
    subgroup: [{
      name: "altLangFrom",
      type: "input",
      label: "本重新導向的語言（可選）",
      tooltip: "輸入重新導向名稱所使用語言的ISO 639代碼，例如en代表英語，代碼可參見 Template:ISO_639_name"
    }]
  }, {
    tag: "日文重定向",
    description: uls("日语名称", "日語名稱")
  }]
}, {
  key: "偶用模板",
  value: [{
    tag: "角色重定向",
    description: uls("电视剧、电影、书籍等作品的角色", "電視劇、電影、書籍等作品的角色")
  }, {
    tag: uls("章节重定向", "章節重定向"),
    description: uls("导向至较高密度组织的页面", "導向至較高密度組織的頁面")
  }, {
    tag: "列表重定向",
    description: uls("导向至低密度的列表", "導向至低密度的列表")
  }, {
    tag: "可能性重定向",
    description: uls("导向至当前提供内容更为详尽的目标页面", "導向至當前提供內容更為詳盡的目標頁面")
  }, {
    tag: uls("关联字重定向", "關聯字重定向"),
    description: uls("标题名称关联字", "標題名稱關聯字")
  }, {
    tag: uls("条目请求重定向", "條目請求重定向"),
    description: uls("需要独立条目的页面", "需要獨立條目的頁面"),
    subgroup: [{
      name: "reqArticleLang",
      type: "input",
      label: "外語語言代碼：",
      tooltip: "使用ISO 639代碼，可參見 Template:ISO_639_name"
    }, {
      name: "reqArticleTitle",
      type: "input",
      label: "外語頁面名稱：",
      size: 60
    }]
  }, {
    tag: uls("快捷方式重定向", "捷徑重定向"),
    description: uls("求闻百科快捷方式", "求聞百科快捷方式")
  }]
}, {
  key: uls("鲜用模板", "鮮用模板"),
  value: [{
    tag: uls("词组重定向", "詞組重定向"),
    description: uls("将词组/词组/成语指向切题的条目及恰当章节", "將詞組/詞組/成語指向切題的條目及恰當章節")
  }, {
    tag: uls("消歧义页重定向", "消歧義頁重定向"),
    description: uls("指向消歧义页", "指向消歧義頁")
  }, {
    tag: "域名重定向",
    description: uls("域名", "網域名稱")
  }, {
    tag: "年代重定向",
    description: uls("于年份条目导向至年代条目", "於年份條目導向至年代條目")
  }, {
    tag: uls("用户框模板重定向", "用戶框模板重定向"),
    description: uls("用户框模板", "用戶框模板")
  }, {
    tag: "重定向模板用重定向",
    description: uls("导向至重定向模板", "導向至重定向模板")
  }, {
    tag: "EXIF重定向",
    description: uls("JPEG图像文件包含EXIF信息", "JPEG圖檔包含EXIF資訊")
  }]
}];
var fileList = [{
  key: uls("著作权和来源问题标签", "著作權和來源問題標籤"),
  value: [{
    label: `{{Non-free reduce}}：${uls("非低分辨率的合理使用图像（或过长的音频剪辑等）", "非低解析度的合理使用圖像（或過長的音頻剪輯等）")}`,
    value: "Non-free reduce"
  }]
}, {
  key: uls("清理标签", "清理標籤"),
  value: [{
    label: `{{Watermark}}：${uls("图像包含了水印", "圖像包含了浮水印")}`,
    value: "Watermark"
  }, {
    label: `{{Rename media}}：${uls("文件应该根据文件使用方针重新命名", "檔案應該根據檔案使用方針重新命名")}`,
    value: "Rename media",
    subgroup: [{
      type: "input",
      name: "renamemediaNewname",
      label: uls("新名称：", "新名稱："),
      tooltip: uls("输入图像的新名称（可选）", "輸入圖像的新名稱（可選）")
    }, {
      type: "input",
      name: "renamemediaReason",
      label: "原因：",
      tooltip: uls("输入重命名的原因（可选）", "輸入重新命名的原因（可選）")
    }]
  }, {
    label: `{{Should be SVG}}：${uls("PNG、GIF、JPEG文件应该重制成矢量图形", "PNG、GIF、JPEG檔案應該重製成向量圖形")}`,
    value: "Should be SVG"
  }]
}, {
  key: uls("文件取代标签", "檔案取代標籤"),
  value: [{
    label: `{{Obsolete}}：${uls("有新版本可用的过时文件", "有新版本可用的過時檔案")}`,
    value: "Obsolete"
  }, {
    label: `{{Vector version available}}：${uls("有矢量图形可用的非矢量图形文件", "有向量圖形可用的非向量圖形檔案")}`,
    value: "Vector version available"
  }],
  buildFilename: true
}];
Twinkle.tag = friendlytag;
Twinkle.addInitCallback(friendlytag, "tag");
//! src/Twinkle/modules/twinklestub.ts
/*! Twinkle.js - twinklestub.ts */
var twinklestub = () => {
  if (Morebits2.isPageRedirect()) {
  } else if ([0, 118].includes(mw.config.get("wgNamespaceNumber")) && mw.config.get("wgCurRevisionId") || Morebits2.pageNameNorm === Twinkle.getPref("sandboxPage")) {
    twinklestub.mode = uls("条目", "條目");
    Twinkle.addPortletLink(twinklestub.callback, "小作品", "friendly-tag", uls("标记小作品", "標記小作品"));
  }
};
twinklestub.callback = () => {
  const tagUrl = (tag) => {
    return mw.util.getUrl(`Template:${Morebits2.string.toUpperCaseFirstChar(tag)}`);
  };
  const makeItems = (tags) => {
    return tags.map((tag) => {
      return {
        value: tag,
        label: `{{${tag}}}: ${twinklestub.article.tags[tag] ?? ""}`,
        url: tagUrl(tag)
      };
    });
  };
  const customTags = Twinkle.getPref("customStubList").map((item) => {
    return {
      value: item.value,
      label: item.label,
      url: tagUrl(item.value)
    };
  });
  const catGroups = Object.entries(twinklestub.article.tagCategories).map(([title, content]) => {
    return {
      header: twinklestub.article.tagCategoriesHeader[title] ?? "",
      subgroups: Array.isArray(content) ? [{
        items: makeItems(content)
      }] : Object.entries(content).map(([subtitle, subcontent]) => {
        return {
          title: subtitle,
          items: makeItems(subcontent)
        };
      })
    };
  });
  const alphaTags = makeItems(Object.keys(twinklestub.article.tags));
  mountLazyDialog("TwStubDialog", {
    title: uls("条目小作品标记", "條目小作品標記"),
    mode: twinklestub.mode,
    initialSortOrder: Twinkle.getPref("stubArticleSortOrder") === "alpha" ? "alpha" : "cat",
    showPatrol: !!document.querySelector(".patrollink"),
    initialPatrol: Twinkle.getPref("markStubbedPagesAsPatrolled") === true,
    customTags,
    catGroups,
    alphaTags,
    footerLinks: footerLinks("stub", uls("小作品设置", "小作品設定"), [{
      text: uls("小作品说明", "小作品說明"),
      href: mw.util.getUrl("QW:小作品")
    }], true)
  });
};
twinklestub.article = {
  tags: {
    "actor-stub": "演员",
    "asia-stub": "亚洲",
    "bio-stub": "人物",
    "biology-stub": "生物学",
    "chem-stub": "化学",
    "europe-stub": "欧洲",
    "expand list": "未完成列表",
    "food-stub": "食物",
    "france-geo-stub": "法国地理",
    "geo-stub": "地理位置",
    "hist-stub": "历史或历史学",
    "JP-stub": "日本",
    "lit-stub": "文学",
    "math-stub": "数学",
    "med-stub": "医学",
    "mil-stub": "军事",
    "movie-stub": "电影",
    "music-stub": "音乐",
    "physics-stub": "物理学",
    "politic-stub": "政治",
    "religion-stub": "宗教",
    "science-stub": "科学",
    "sport-stub": "体育",
    stub: "通用小作品",
    "switzerland-stub": "瑞士",
    "tech-stub": "科技",
    "transp-stub": "交通",
    "TV-stub": "电视",
    "UK-stub": "英国",
    "US-bio-stub": "美国人物",
    "US-geo-stub": "美国地理",
    "US-stub": "美国",
    "weather-stub": "天气和特别的天气事件"
  },
  tagCategoriesHeader: {
    general: "通用模板",
    geo: "国家和地理",
    others: "杂项",
    bio: "人物",
    science: "科学",
    sport: "体育",
    tech: "技术",
    art: "艺术"
  },
  tagCategories: {
    general: ["stub", "expand list"],
    geo: ["asia-stub", "europe-stub", "france-geo-stub", "geo-stub", "JP-stub", "switzerland-stub", "UK-stub", "US-bio-stub", "US-geo-stub", "US-stub"],
    others: ["food-stub", "hist-stub", "mil-stub", "politic-stub", "religion-stub", "transp-stub"],
    bio: ["actor-stub", "bio-stub", "US-bio-stub"],
    science: ["biology-stub", "chem-stub", "math-stub", "med-stub", "physics-stub", "science-stub", "weather-stub"],
    sport: ["sport-stub"],
    tech: ["tech-stub"],
    art: ["actor-stub", "lit-stub", "movie-stub", "music-stub", "TV-stub"]
  }
};
Twinkle.stub = twinklestub;
Twinkle.addInitCallback(twinklestub, "stub");
//! src/Twinkle/modules/twinklediff.ts
/*! Twinkle.js - twinklediff.ts */
var twinklediff = () => {
  if (mw.config.get("wgNamespaceNumber") < 0 || !mw.config.get("wgArticleId")) {
    return;
  }
  Twinkle.addPortletLink(mw.util.getUrl(mw.config.get("wgPageName"), {
    diff: "cur",
    oldid: "prev"
  }), uls("最后", "最後"), "tw-lastdiff", uls("显示最后修改", "顯示最後修改"));
  if (mw.config.get("wgDiffNewId")) {
    Twinkle.addPortletLink(() => {
      twinklediff.evaluate(false);
    }, "自上", "tw-since", uls("显示与上一修订版本间的差异", "顯示與上一修訂版本間的差異"));
    Twinkle.addPortletLink(() => {
      twinklediff.evaluate(true);
    }, "自我", "tw-sincemine", uls("显示与我做出的修订版本的差异", "顯示與我做出的修訂版本的差異"));
    Twinkle.addPortletLink(mw.util.getUrl(mw.config.get("wgPageName"), {
      diff: "cur",
      oldid: mw.config.get("wgDiffNewId")
    }), uls("当前", "目前"), "tw-curdiff", uls("显示与当前版本间的差异", "顯示與目前版本間的差異"));
  }
};
twinklediff.evaluate = (me) => {
  let user;
  if (me) {
    user = mw.config.get("wgUserName");
  } else {
    const node = document.querySelector("#mw-diff-ntitle2");
    if (!node) {
      return;
    }
    user = $(node).find("a").first().text();
  }
  const query = {
    prop: "revisions",
    action: "query",
    titles: mw.config.get("wgPageName"),
    rvlimit: 1,
    rvprop: ["ids", "user"],
    rvstartid: mw.config.get("wgCurRevisionId") - 1,
    rvuser: user
  };
  Morebits2.status.init(document.querySelector("#mw-content-text"));
  const api2 = newParamsApi(uls("抓取最初贡献者信息", "抓取最初貢獻者資訊"), query, twinklediff.callbacks.main);
  api2.params = {
    user
  };
  api2.post();
};
twinklediff.callbacks = {
  main: (self) => {
    const xmlDoc = self.getXML();
    const revid = xmlDoc ? $(xmlDoc).find("rev").attr("revid") : void 0;
    if (!revid) {
      self.statelem.error(uls("未找到合适的早期版本，或 ", "未找到合適的早期版本，或 ") + self.params.user + uls(" 是唯一贡献者。取消。", " 是唯一貢獻者。取消。"));
      return;
    }
    window.location.assign(mw.util.getUrl(mw.config.get("wgPageName"), {
      diff: mw.config.get("wgCurRevisionId"),
      oldid: revid
    }));
  }
};
Twinkle.diff = twinklediff;
Twinkle.addInitCallback(twinklediff, "diff");
//! src/Twinkle/modules/twinkleunlink.ts
var import_vue8 = require("vue");
/*! Twinkle.js - twinkleunlink.ts */
var twinkleunlink = () => {
  if (mw.config.get("wgNamespaceNumber") < 0 || mw.config.get("wgPageName") === Twinkle.getPref("sandboxPage") || !Morebits2.userIsSysop) {
    return;
  }
  Twinkle.addPortletLink(() => {
    twinkleunlink.callback();
  }, uls("消链", "消連"), "tw-unlink", uls("取消到本页的链接", "取消到本頁的連結"));
};
twinkleunlink.callback = (presetReason) => {
  var _dialogInstance2$curr;
  const fileSpace = mw.config.get("wgNamespaceNumber") === 6;
  const listData = (0, import_vue8.reactive)({
    backlinks: [],
    imageusage: [],
    namespacesText: "",
    loaded: false
  });
  const escape = mw.html.escape;
  const pageName = Morebits2.pageNameNorm;
  const linkPlainAfter = fileSpace ? `<!-- [[${escape(pageName)}]] -->` : escape(pageName);
  const docHtml = `${uls("这个工具可以取消所有指向该页的链接（“链入”）", "這個工具可以取消所有指向該頁的連結（「連入」）") + (fileSpace ? uls("，或通过加入<!-- -->注释标记隐藏所有对此文件的使用", "，或透過加入<!-- -->注釋標記隱藏所有對此檔案的使用") : "")}。例如：<code>[[${fileSpace ? ":" : ""}${escape(pageName)}${escape(uls("|链接文字]]", "|連結文字]]"))}</code>${uls("将会变成", "將會變成")}<code>${uls("链接文字", "連結文字")}</code>，<code>[[${escape(pageName)}]]</code>${uls("将会变成", "將會變成")}<code>${linkPlainAfter}</code>，<code>{{${escape(mw.config.get("wgTitle") ?? "")}}}</code>${uls("将会被移除", "將會被移除")}${uls("。请小心使用。", "。請小心使用。")}`;
  const dialogInstance2 = {
    current: null
  };
  mountLazyDialog("TwUnlinkDialog", {
    ref: (instance) => {
      dialogInstance2.current = instance ?? null;
    },
    title: uls("取消链入", "取消連入") + (fileSpace ? uls("和模板、文件使用", "和模板、檔案使用") : ""),
    fileSpace,
    presetReason: presetReason || "",
    docHtml,
    list: listData,
    footerLinks: footerLinks("unlink", uls("链入设置", "連入設定"))
  });
  const statusRoot = ((_dialogInstance2$curr = dialogInstance2.current) === null || _dialogInstance2$curr === void 0 ? void 0 : _dialogInstance2$curr.getStatusRoot()) ?? null;
  if (statusRoot) {
    Morebits2.status.init(statusRoot);
  }
  const query = {
    action: "query",
    list: "backlinks",
    bltitle: mw.config.get("wgPageName"),
    bllimit: "max",
    // 500 is max for normal users, 5000 for bots and sysops
    blnamespace: Twinkle.getPref("unlinkNamespaces"),
    rawcontinue: true,
    format: "json"
  };
  if (fileSpace) {
    query["list"] = "backlinks|imageusage";
    query["iutitle"] = query["bltitle"];
    query["iulimit"] = query["bllimit"];
    query["iunamespace"] = query["blnamespace"];
  } else {
    query["blfilterredir"] = "nonredirects";
  }
  const displayBacklinks = (apiobj) => {
    var _response$query4, _dialogInstance2$curr2;
    const response = apiobj.getResponse();
    const {
      list
    } = apiobj.params;
    const namespaces = [];
    for (const v of Twinkle.getPref("unlinkNamespaces")) {
      namespaces[namespaces.length] = v === "0" ? uls("（条目）", "（條目）") : mw.config.get("wgFormattedNamespaces")[v] ?? v;
    }
    list.namespacesText = uls("已选择的命名空间：", "已選擇的命名空間：") + namespaces.join("、");
    if (apiobj.params.image) {
      var _response$query3;
      const imageusage = ((_response$query3 = response.query) === null || _response$query3 === void 0 ? void 0 : _response$query3.imageusage) ?? [];
      list.imageusage.push(...[...imageusage].sort(Twinkle.sortByNamespace).map((item) => {
        return item.title;
      }));
    }
    const backlinks = ((_response$query4 = response.query) === null || _response$query4 === void 0 ? void 0 : _response$query4.backlinks) ?? [];
    list.backlinks.push(...[...backlinks].sort(Twinkle.sortByNamespace).map((item) => {
      return item.title;
    }));
    list.loaded = true;
    (_dialogInstance2$curr2 = dialogInstance2.current) === null || _dialogInstance2$curr2 === void 0 || _dialogInstance2$curr2.clear();
  };
  const api2 = new Morebits2.wiki.api(uls("抓取链入", "抓取連入"), query, displayBacklinks);
  api2.params = {
    list: listData,
    image: fileSpace
  };
  api2.statelem.status(uls("加载中……", "載入中……"));
  api2.post();
};
Twinkle.unlink = twinkleunlink;
Twinkle.addInitCallback(twinkleunlink, "unlink");
//! src/Twinkle/modules/twinklefluff.ts
/*! Twinkle.js - twinklefluff.ts */
var Morebits3 = window.Morebits;
var $body4 = $("body");
var getRevertSummary = () => {
  const select = document.querySelector('select[name="revertsummary"]');
  return (select === null || select === void 0 ? void 0 : select.value) ?? "";
};
var twinklefluff = () => {
  if (mw.config.get("wgIsProbablyEditable")) {
    if (mw.config.get("wgDiffNewId") || mw.config.get("wgDiffOldId")) {
      mw.hook("wikipage.diff").add(() => {
        twinklefluff.addLinks.diff();
      });
    } else if (mw.config.get("wgAction") === "view" && mw.config.get("wgRevisionId") && mw.config.get("wgCurRevisionId") !== mw.config.get("wgRevisionId")) {
      twinklefluff.addLinks.oldid();
    } else if (mw.config.get("wgAction") === "history") {
      twinklefluff.addLinks.history();
    }
  } else if (mw.config.get("wgNamespaceNumber") === -1) {
    twinklefluff.skipTalk = !Twinkle.getPref("openTalkPageOnAutoRevert");
    twinklefluff.rollbackInPlace = Twinkle.getPref("rollbackInPlace");
    if (mw.config.get("wgCanonicalSpecialPageName") === "Contributions") {
      twinklefluff.addLinks.contributions();
    } else if (mw.config.get("wgCanonicalSpecialPageName") === "Recentchanges" || mw.config.get("wgCanonicalSpecialPageName") === "Recentchangeslinked") {
      mw.hook("wikipage.content").add((item) => {
        if (item.is("div")) {
          twinklefluff.addLinks.recentchanges();
        }
      });
    }
  }
};
twinklefluff.trustedBots = [];
twinklefluff.skipTalk = null;
twinklefluff.rollbackInPlace = null;
twinklefluff.hiddenName = uls("已隐藏的用户", "已隱藏的使用者");
twinklefluff.linkBuilder = {
  spanTag: (color, content) => {
    const span = document.createElement("span");
    span.style.color = color;
    span.appendChild(document.createTextNode(content));
    return span;
  },
  buildLink: (color, text) => {
    const link = document.createElement("a");
    link.appendChild(twinklefluff.linkBuilder.spanTag("Black", "["));
    link.appendChild(twinklefluff.linkBuilder.spanTag(color, text));
    link.appendChild(twinklefluff.linkBuilder.spanTag("Black", "]"));
    link.href = "#";
    return link;
  },
  /**
   * @param [vandal=null] - Username of the editor being reverted.
   * Provide a falsey value if the username is hidden, defaults to null
   * @param [inline] - True to create two links in a span, false
   * to create three links in a div
   * @param [rev] - Revision ID being reverted (optional)
   * @param [page] - Page being reverted (optional)
   */
  rollbackLinks: (vandal, inline, rev, page) => {
    vandal || (vandal = null);
    const elem = inline ? "span" : "div";
    const revNode = document.createElement(elem);
    const revNumber = typeof rev === "string" ? Number.parseInt(rev, 10) : rev ?? void 0;
    if (revNumber) {
      revNode.setAttribute("id", `tw-revert${revNumber}`);
    } else {
      revNode.setAttribute("id", "tw-revert");
    }
    const normNode = document.createElement("strong");
    const vandNode = document.createElement("strong");
    const normLink = twinklefluff.linkBuilder.buildLink("SteelBlue", "回退");
    const vandLink = twinklefluff.linkBuilder.buildLink("Red", uls("破坏", "破壞"));
    $(normLink).on("click", (e) => {
      e.preventDefault();
      twinklefluff.revert("norm", vandal, revNumber, page);
      twinklefluff.disableLinks(revNode);
    });
    $(vandLink).on("click", (e) => {
      e.preventDefault();
      twinklefluff.revert("vand", vandal, revNumber, page);
      twinklefluff.disableLinks(revNode);
    });
    vandNode.appendChild(vandLink);
    normNode.appendChild(normLink);
    const separator = inline ? " " : " || ";
    revNode.appendChild(normNode);
    revNode.appendChild(document.createTextNode(separator));
    revNode.appendChild(vandNode);
    return revNode;
  },
  // Build [restore this revision] links
  restoreThisRevisionLink: (revisionRef, inline) => {
    const revision = typeof revisionRef === "number" ? revisionRef : mw.config.get(revisionRef);
    const elem = inline ? "span" : "div";
    const revertToRevisionNode = document.createElement(elem);
    revertToRevisionNode.setAttribute("id", `tw-revert-to-${revision}`);
    revertToRevisionNode.style.fontWeight = "bold";
    const revertToRevisionLink = twinklefluff.linkBuilder.buildLink("SaddleBrown", uls("恢复此版本", "恢復此版本"));
    $(revertToRevisionLink).on("click", (e) => {
      e.preventDefault();
      twinklefluff.revertToRevision(revision);
    });
    if (inline) {
      revertToRevisionNode.appendChild(document.createTextNode(" "));
    }
    revertToRevisionNode.appendChild(revertToRevisionLink);
    return revertToRevisionNode;
  }
};
twinklefluff.addLinks = {
  contributions: () => {
    const isRange = !!$body4.find("#sp-contributions-footer-anon-range")[0];
    if (mw.config.exists("wgRelevantUserName") || isRange) {
      let username = mw.config.get("wgRelevantUserName");
      if (Twinkle.getPref("showRollbackLinks").includes("contribs") || mw.config.get("wgUserName") !== username && Twinkle.getPref("showRollbackLinks").includes("others") || mw.config.get("wgUserName") === username && Twinkle.getPref("showRollbackLinks").includes("mine")) {
        const $list = $body4.find("#mw-content-text").find("ul li:has(span.mw-uctop):has(.mw-changeslist-diff)");
        $list.each((_key, current) => {
          const page = $(current).find(".mw-contributions-title").text();
          if (isRange) {
            username = $(current).find(".mw-userlink:not(.history-deleted)").text();
          }
          current.appendChild(twinklefluff.linkBuilder.rollbackLinks(username, true, current.dataset["mwRevid"], page));
        });
      }
    }
  },
  recentchanges: () => {
    if (mw.config.get("wgCanonicalSpecialPageName") === "Recentchanges" && Twinkle.getPref("showRollbackLinks").includes("recentchanges") || mw.config.get("wgCanonicalSpecialPageName") === "Recentchangeslinked" && Twinkle.getPref("showRollbackLinks").includes("recentchangeslinked")) {
      let $list = $body4.find(".mw-changeslist .mw-changeslist-last.mw-changeslist-src-mw-edit");
      $list = $list.not(".mw-rcfilters-ui-highlights-enhanced-toplevel").find(".mw-changeslist-line-inner, td.mw-enhanced-rc-nested");
      $list.each((_key, current) => {
        const href = $(current).find(".mw-changeslist-diff").attr("href");
        const rev = mw.util.getParamValue("diff", href ?? void 0);
        if (rev && current.querySelector(`#tw-revert${rev}`)) {
          return;
        }
        if (!rev && current.querySelector("#tw-revert")) {
          return;
        }
        const vandal = $(current).find(".mw-userlink:not(.history-deleted)").text();
        const page = current.dataset["targetPage"];
        current.appendChild(twinklefluff.linkBuilder.rollbackLinks(vandal, true, rev, page));
      });
    }
  },
  history: () => {
    if (Twinkle.getPref("showRollbackLinks").includes("history")) {
      const histList = $body4.find("#pagehistory li").toArray();
      if (!$body4.find("a.mw-firstlink").length) {
        const first = histList.shift();
        if (!first) {
          return;
        }
        const vandal = $(first).find(".mw-userlink:not(.history-deleted)").text();
        for (const item of histList) {
          if ($(item).find(".mw-userlink").text() !== vandal) {
            first.appendChild(twinklefluff.linkBuilder.rollbackLinks(vandal, true));
            break;
          }
        }
      }
      for (const rev of histList) {
        var _rev$querySelector;
        const href = (_rev$querySelector = rev.querySelector(".mw-changeslist-date")) === null || _rev$querySelector === void 0 ? void 0 : _rev$querySelector.href;
        const oldid = Number.parseInt(mw.util.getParamValue("oldid", href ?? void 0) ?? "", 10);
        if (!Number.isNaN(oldid)) {
          rev.appendChild(twinklefluff.linkBuilder.restoreThisRevisionLink(oldid, true));
        }
      }
    }
  },
  diff: () => {
    const warnFromTalk = (xtitle) => {
      const talkLink = $(`#mw-diff-${xtitle}2 .mw-usertoollinks a`).first();
      if (talkLink.length) {
        let extraParams = `vanarticle=${mw.util.rawurlencode(Morebits3.pageNameNorm)}&noautowarn=true`;
        extraParams += "&vanarticlerevid=";
        extraParams += String(xtitle === "otitle" ? mw.config.get("wgDiffOldId") : mw.config.get("wgDiffNewId"));
        const href = talkLink.attr("href");
        if (href !== void 0) {
          if (href.includes("?")) {
            talkLink.attr("href", `${href}&${extraParams}`);
          } else {
            talkLink.attr("href", `${href}?${extraParams}`);
          }
        }
      }
    };
    warnFromTalk("otitle");
    if (mw.config.get("wgDiffOldId") && mw.config.get("wgDiffOldId") !== mw.config.get("wgDiffNewId")) {
      var _document$querySelect2;
      const oldTitle = (_document$querySelect2 = document.querySelector("#mw-diff-otitle1")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.parentElement;
      if (oldTitle) {
        const revertToRevision = twinklefluff.linkBuilder.restoreThisRevisionLink("wgDiffOldId");
        oldTitle.insertBefore(revertToRevision, oldTitle.firstChild);
        if (Twinkle.getPref("customRevertSummary").length > 0) {
          revertToRevision.appendChild(document.createTextNode(" || "));
          const revertsummary = document.createElement("select");
          revertsummary.setAttribute("name", "revertsummary");
          const defaultOption = document.createElement("option");
          defaultOption.value = "";
          defaultOption.textContent = uls("选择回退理由", "選擇回退理由");
          revertsummary.appendChild(defaultOption);
          for (const item of Twinkle.getPref("customRevertSummary")) {
            const option = document.createElement("option");
            option.value = item.value;
            option.textContent = item.label;
            revertsummary.appendChild(option);
          }
          revertToRevision.appendChild(revertsummary);
        }
      }
    }
    warnFromTalk("ntitle");
    if (document.querySelector("#differences-nextlink")) {
      var _document$querySelect3;
      const newTitle = (_document$querySelect3 = document.querySelector("#mw-diff-ntitle1")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.parentElement;
      if (newTitle) {
        newTitle.insertBefore(twinklefluff.linkBuilder.restoreThisRevisionLink("wgDiffNewId"), newTitle.firstChild);
      }
    } else if (Twinkle.getPref("showRollbackLinks").includes("diff") && mw.config.get("wgDiffOldId") && (mw.config.get("wgDiffOldId") !== mw.config.get("wgDiffNewId") || document.querySelector("#differences-prevlink"))) {
      var _$body4$find$find$, _document$querySelect4;
      const vandal = ((_$body4$find$find$ = $body4.find("#mw-diff-ntitle2").find(".mw-userlink")[0]) === null || _$body4$find$find$ === void 0 ? void 0 : _$body4$find$find$.textContent) ?? null;
      const ntitle = (_document$querySelect4 = document.querySelector("#mw-diff-ntitle1")) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.parentElement;
      if (ntitle) {
        ntitle.insertBefore(twinklefluff.linkBuilder.rollbackLinks(vandal), ntitle.firstChild);
      }
    }
  },
  oldid: () => {
    var _document$querySelect5;
    const title = (_document$querySelect5 = document.querySelector("#mw-revision-info")) === null || _document$querySelect5 === void 0 ? void 0 : _document$querySelect5.parentElement;
    if (title) {
      title.insertBefore(twinklefluff.linkBuilder.restoreThisRevisionLink("wgRevisionId"), title.firstChild);
    }
  }
};
twinklefluff.disableLinks = (parentNode) => {
  $(parentNode).children().each((_i, node) => {
    node.innerHTML = node.textContent ?? "";
    $(node).css("font-weight", "normal").css("color", "darkgray");
  });
};
twinklefluff.revert = (type, vandal, rev, page) => {
  if (vandal && mw.util.isIPv6Address(vandal)) {
    vandal = Morebits3.ip.sanitizeIPv6(vandal);
  }
  const pagename = page || mw.config.get("wgPageName");
  const revid = rev || mw.config.get("wgCurRevisionId");
  const summary = getRevertSummary();
  if (twinklefluff.rollbackInPlace) {
    const notifyStatus = document.createElement("span");
    void mw.notify(notifyStatus, {
      autoHide: false,
      title: `回退${page}`,
      tag: `twinklefluff_${rev}`
      // Shouldn't be necessary given disableLink
    });
    Morebits3.status.init(notifyStatus);
  } else {
    Morebits3.status.init(document.querySelector("#mw-content-text"));
    $body4.find("#catlinks").remove();
  }
  const params = {
    type,
    user: vandal,
    userHidden: !vandal,
    pagename,
    revid,
    summary
  };
  const query = {
    action: "query",
    prop: ["info", "revisions"],
    titles: pagename,
    intestactions: "edit",
    rvlimit: Twinkle.getPref("revertMaxRevisions"),
    rvprop: ["ids", "timestamp", "user"],
    curtimestamp: "",
    meta: "tokens",
    type: "csrf"
  };
  const api2 = new Morebits3.wiki.api(uls("抓取较早修订版本信息", "抓取較早修訂版本資訊"), query, twinklefluff.callbacks.main);
  api2.params = params;
  api2.post();
};
twinklefluff.revertToRevision = (oldrev) => {
  const summary = getRevertSummary();
  Morebits3.status.init(document.querySelector("#mw-content-text"));
  const query = {
    action: "query",
    prop: ["info", "revisions"],
    titles: mw.config.get("wgPageName"),
    rvlimit: 1,
    rvstartid: oldrev,
    rvprop: ["ids", "user"],
    format: "xml",
    curtimestamp: "",
    meta: "tokens",
    type: "csrf"
  };
  const api2 = new Morebits3.wiki.api(uls("抓取较早修订版本信息", "抓取較早修訂版本資訊"), query, twinklefluff.callbacks.toRevision);
  api2.params = {
    rev: oldrev,
    summary
  };
  api2.post();
};
twinklefluff.callbacks = {
  toRevision: (apiobj) => {
    const xmlDoc = apiobj.responseXML;
    const lastrevid = Number.parseInt($(xmlDoc).find("page").attr("lastrevid") ?? "", 10);
    const touched = $(xmlDoc).find("page").attr("touched");
    const loadtimestamp = $(xmlDoc).find("api").attr("curtimestamp");
    const csrftoken = $(xmlDoc).find("tokens").attr("csrftoken");
    const revertToRevID = Number.parseInt($(xmlDoc).find("rev").attr("revid") ?? "", 10);
    const revertToUser = $(xmlDoc).find("rev").attr("user");
    const revertToUserHidden = typeof $(xmlDoc).find("rev").attr("userhidden") === "string";
    if (revertToRevID !== apiobj.params.rev) {
      apiobj.statelem.error(uls("抓取到的修订版本与请求的修订版本不符，取消。", "抓取到的修訂版本與請求的修訂版本不符，取消。"));
      return;
    }
    const optional_summary = prompt(`${uls("请输入回退理由：", "請輸入回退理由：")}                                `, apiobj.params.summary);
    if (optional_summary === null) {
      apiobj.statelem.error(uls("由用户取消。", "由使用者取消。"));
      return;
    }
    const summary = twinklefluff.formatSummary(uls("回退到由$USER做出的修订版本", "回退到由$USER做出的修訂版本") + revertToRevID, revertToUserHidden ? null : revertToUser ?? null, optional_summary);
    const query = {
      action: "edit",
      title: mw.config.get("wgPageName"),
      summary,
      tags: Twinkle.changeTags,
      token: csrftoken,
      undo: lastrevid,
      undoafter: revertToRevID,
      basetimestamp: touched,
      starttimestamp: loadtimestamp,
      minor: Twinkle.getPref("markRevertedPagesAsMinor").includes("torev") ? true : void 0,
      bot: true
    };
    if (Twinkle.getPref("watchRevertedPages").includes("torev")) {
      const watchOrExpiry = Twinkle.getPref("watchRevertedExpiry");
      if (!watchOrExpiry || watchOrExpiry === "no") {
        query["watchlist"] = "nochange";
      } else if (watchOrExpiry === "default" || watchOrExpiry === "preferences") {
        query["watchlist"] = "preferences";
      } else {
        query["watchlist"] = "watch";
        if (typeof watchOrExpiry === "string" && watchOrExpiry !== "yes") {
          query["watchlistexpiry"] = watchOrExpiry;
        }
      }
    }
    Morebits3.wiki.actionCompleted.redirect = mw.config.get("wgPageName");
    Morebits3.wiki.actionCompleted.notice = "回退完成";
    const api2 = new Morebits3.wiki.api(uls("保存回退内容", "儲存回退內容"), query, twinklefluff.callbacks.complete, apiobj.statelem);
    api2.params = apiobj.params;
    api2.post();
  },
  main: (apiobj) => {
    var _revs$2, _revs$3;
    const xmlDoc = apiobj.responseXML;
    if ($(xmlDoc).find("actions").attr("edit") === void 0) {
      apiobj.statelem.error("Unable to edit the page, it's probably protected.");
      return;
    }
    const lastrevid = Number.parseInt($(xmlDoc).find("page").attr("lastrevid") ?? "", 10);
    const touched = $(xmlDoc).find("page").attr("touched");
    const loadtimestamp = $(xmlDoc).find("api").attr("curtimestamp");
    const csrftoken = $(xmlDoc).find("tokens").attr("csrftoken");
    const revs = $(xmlDoc).find("rev");
    const {
      statelem
    } = apiobj;
    const {
      params
    } = apiobj;
    if (revs.length < 1) {
      statelem.error(uls("没有其它修订版本，无法回退", "沒有其它修訂版本，無法回退"));
      return;
    }
    const [top] = revs;
    if (!top) {
      statelem.error(uls("没有其它修订版本，无法回退", "沒有其它修訂版本，無法回退"));
      return;
    }
    const lastuser = top.getAttribute("user");
    if (lastrevid < params.revid) {
      Morebits3.status.error(uls("错误", "錯誤"), uls(["从服务器获取的最新修订版本ID ", Morebits3.htmlNode("strong", String(lastrevid)), " 小于目前所显示的修订版本ID。这可能意味着当前修订版本已被删除、服务器延迟、或抓取到了坏掉的信息。取消。"], ["從伺服器取得的最新修訂版本ID ", Morebits3.htmlNode("strong", String(lastrevid)), " 小於目前所顯示的修訂版本ID。這可能意味著當前修訂版本已被刪除、伺服器延遲、或擷取到了壞掉的資訊。取消。"]));
      return;
    }
    let userNorm = params.user || twinklefluff.hiddenName;
    let index = 1;
    if (params.revid === lastrevid) {
      params.user = lastuser;
      userNorm = params.user || twinklefluff.hiddenName;
    } else {
      var _revs$;
      Morebits3.status.warn("警告", uls(["最新修订版本 ", Morebits3.htmlNode("strong", String(lastrevid)), " 与我们的修订版本 ", Morebits3.htmlNode("strong", String(params.revid)), "不同"], ["最新修訂版本 ", Morebits3.htmlNode("strong", String(lastrevid)), " 與我們的修訂版本 ", Morebits3.htmlNode("strong", String(params.revid)), " 不同"]));
      if (lastuser === params.user) {
        switch (params.type) {
          case "vand":
            Morebits3.status.info(uls("信息", "資訊"), [uls("最新修订版本由 ", "最新修訂版本由 "), Morebits3.htmlNode("strong", userNorm), uls(" 做出，因我们假定破坏，继续回退操作。", " 做出，因我們假定破壞，繼續回退操作。")]);
            break;
          default:
            Morebits3.status.warn("提示", [uls("最新修订版本由 ", "最新修訂版本由 "), Morebits3.htmlNode("strong", userNorm), uls(" 做出，但我们还是不回退了。", " 做出，但我們還是不回退了。")]);
            return;
        }
      } else if (params.type === "vand" && // Okay to test on user since it will either fail or sysop will correctly access it
      // Besides, none of the trusted bots are going to be revdel'd
      twinklefluff.trustedBots.includes(top.getAttribute("user") ?? "") && revs.length > 1 && // Legacy parity: the original compares the raw attribute string
      // against the numeric revid, so this branch never matches
      ((_revs$ = revs[1]) === null || _revs$ === void 0 ? void 0 : _revs$.getAttribute("revid")) === params.revid) {
        Morebits3.status.info(uls("信息", "資訊"), uls(["最新修订版本由 ", Morebits3.htmlNode("strong", lastuser ?? ""), "，一个可信的机器人做出，但之前的版本被认为是破坏，继续回退操作。"], ["最新修訂版本由 ", Morebits3.htmlNode("strong", lastuser ?? ""), "，一個可信的機器人做出，但之前的版本被認為是破壞，繼續回退操作。"]));
        index = 2;
      } else {
        Morebits3.status.error(uls("错误", "錯誤"), uls(["最新修订版本由 ", Morebits3.htmlNode("strong", lastuser ?? ""), " 做出，所以这个修订版本可能已经被回退了，取消回退操作。"], ["最新修訂版本由 ", Morebits3.htmlNode("strong", lastuser ?? ""), " 做出，所以這個修訂版本可能已經被回退了，取消回退操作。"]));
        return;
      }
    }
    if (params.user !== null && twinklefluff.trustedBots.includes(params.user)) {
      switch (params.type) {
        case "vand":
          Morebits3.status.info(uls("信息", "資訊"), [uls("将对 ", "將對 "), Morebits3.htmlNode("strong", userNorm), uls(" 执行破坏回退，这是一个可信的机器人，我们假定您要回退前一个修订版本。", " 執行破壞回退，這是一個可信的機器人，我們假定您要回退前一個修訂版本。")]);
          index = 2;
          params.user = ((_revs$2 = revs[1]) === null || _revs$2 === void 0 ? void 0 : _revs$2.getAttribute("user")) ?? null;
          params.userHidden = ((_revs$3 = revs[1]) === null || _revs$3 === void 0 ? void 0 : _revs$3.getAttribute("userhidden")) === "";
          break;
        /* case 'norm': */
        /* falls through */
        default: {
          const cont = confirm(uls("选择了常规回退，但最新修改是由一个可信的机器人（", "選擇了常規回退，但最新修改是由一個可信的機器人（") + userNorm + uls("）做出的。确定以回退前一个修订版本，取消以回退机器人的修改", "）做出的。確定以回退前一個修訂版本，取消以回退機器人的修改"));
          if (cont) {
            var _revs$4, _revs$5;
            Morebits3.status.info(uls("信息", "資訊"), [uls("将对 ", "將對 "), Morebits3.htmlNode("strong", userNorm), uls(" 执行常规回退，这是一个可信的机器人，基于确认，我们将回退前一个修订版本。", " 執行常規回退，這是一個可信的機器人，基於確認，我們將回退前一個修訂版本。")]);
            index = 2;
            params.user = ((_revs$4 = revs[1]) === null || _revs$4 === void 0 ? void 0 : _revs$4.getAttribute("user")) ?? null;
            params.userHidden = ((_revs$5 = revs[1]) === null || _revs$5 === void 0 ? void 0 : _revs$5.getAttribute("userhidden")) === "";
            userNorm = params.user || twinklefluff.hiddenName;
          } else {
            Morebits3.status.warn("提示", [uls("将对 ", "將對 "), Morebits3.htmlNode("strong", userNorm), uls(" 执行常规回退，这是一个可信的机器人，基于确认，我们仍将回退这个修订版本。", " 執行常規回退，這是一個可信的機器人，基於確認，我們仍將回退這個修訂版本。")]);
          }
          break;
        }
      }
    }
    let found = false;
    let count = 0;
    for (let i = index; i < revs.length; ++i) {
      var _revs$i;
      ++count;
      if (((_revs$i = revs[i]) === null || _revs$i === void 0 ? void 0 : _revs$i.getAttribute("user")) !== params.user) {
        found = i;
        break;
      }
    }
    if (!found) {
      statelem.error([uls("未找到之前的修订版本，可能 ", "未找到之前的修訂版本，可能 "), Morebits3.htmlNode("strong", userNorm), uls(" 是唯一贡献者，或这个用户连续做出了超过 ", " 是唯一貢獻者，或這個用戶連續做出了超過 ") + mw.language.convertNumber(Twinkle.getPref("revertMaxRevisions")) + uls(" 次编辑。", " 次編輯。")]);
      return;
    }
    const good_revision = revs[found];
    if (!good_revision) {
      return;
    }
    let userHasAlreadyConfirmedAction = false;
    if (params.type !== "vand" && count > 1) {
      if (!confirm(userNorm + uls(" 连续做出了 ", " 連續做出了 ") + mw.language.convertNumber(count) + uls(" 次编辑，是否要全部回退？", " 次編輯，是否要全部回退？"))) {
        Morebits3.status.info("提示", uls("用户取消操作", "使用者取消操作"));
        return;
      }
      userHasAlreadyConfirmedAction = true;
    }
    params.count = count;
    params.goodid = good_revision.getAttribute("revid");
    params.gooduser = good_revision.getAttribute("user");
    params.gooduserHidden = good_revision.getAttribute("userhidden") === "";
    statelem.status([Morebits3.htmlNode("strong", mw.language.convertNumber(count)), uls(" 个修订版本之前由 ", " 個修訂版本之前由 "), Morebits3.htmlNode("strong", params.gooduserHidden ? twinklefluff.hiddenName : params.gooduser ?? ""), uls(" 做出的修订版本 ", " 做出的修訂版本 "), Morebits3.htmlNode("strong", params.goodid ?? "")]);
    let summary;
    let extra_summary;
    switch (params.type) {
      case "vand":
        summary = twinklefluff.formatSummary(`回退$USER做出的${params.count}${uls("次编辑，到由", "次編輯，到由")}${params.gooduserHidden ? twinklefluff.hiddenName : params.gooduser}${uls("做出的最后修订版本 ", "做出的最後修訂版本 ")}`, params.userHidden ? null : params.user);
        break;
      /* case 'norm': */
      /* falls through */
      default:
        if (Twinkle.getPref("offerReasonOnNormalRevert")) {
          extra_summary = prompt(`${uls("可选的编辑摘要：", "可選的編輯摘要：")}                              `, params.summary);
          if (extra_summary === null) {
            statelem.error(uls("用户取消操作。", "使用者取消操作。"));
            return;
          }
          userHasAlreadyConfirmedAction = true;
        }
        summary = twinklefluff.formatSummary(`回退$USER做出的${params.count}${uls("次编辑", "次編輯")}`, params.userHidden ? null : params.user, extra_summary);
        break;
    }
    if (Twinkle.getPref("confirmOnFluff") && !userHasAlreadyConfirmedAction && !confirm(uls("回退页面：您确定吗？", "回退頁面：您確定嗎？"))) {
      statelem.error(uls("用户取消操作。", "使用者取消操作。"));
      return;
    }
    if (!twinklefluff.skipTalk && Twinkle.getPref("openTalkPage").includes(params.type) && !params.userHidden && mw.config.get("wgUserName") !== params.user) {
      params.notifyUser = true;
      params.vantimestamp = top.getAttribute("timestamp");
    }
    const query = {
      action: "edit",
      title: params.pagename,
      summary,
      tags: Twinkle.changeTags,
      token: csrftoken,
      undo: lastrevid,
      undoafter: params.goodid,
      basetimestamp: touched,
      starttimestamp: loadtimestamp,
      minor: Twinkle.getPref("markRevertedPagesAsMinor").includes(params.type) ? true : void 0,
      bot: true
    };
    if (Twinkle.getPref("watchRevertedPages").includes(params.type)) {
      const watchOrExpiry = Twinkle.getPref("watchRevertedExpiry");
      if (!watchOrExpiry || watchOrExpiry === "no") {
        query["watchlist"] = "nochange";
      } else if (watchOrExpiry === "default" || watchOrExpiry === "preferences") {
        query["watchlist"] = "preferences";
      } else {
        query["watchlist"] = "watch";
        if (typeof watchOrExpiry === "string" && watchOrExpiry !== "yes") {
          query["watchlistexpiry"] = watchOrExpiry;
        }
      }
    }
    if (!twinklefluff.rollbackInPlace) {
      Morebits3.wiki.actionCompleted.redirect = params.pagename;
    }
    Morebits3.wiki.actionCompleted.notice = "回退完成";
    const api2 = new Morebits3.wiki.api(uls("保存回退内容", "儲存回退內容"), query, twinklefluff.callbacks.complete, statelem);
    api2.params = params;
    api2.post();
  },
  complete: (apiobj) => {
    const xml = apiobj.getXML();
    const $edit = $(xml).find("edit");
    if ($(xml).find("captcha").length > 0) {
      apiobj.statelem.error(uls("不能回退，因服务器要求您输入验证码。", "不能回退，因伺服器要求您輸入驗證碼。"));
    } else if ($edit.attr("nochange") === "") {
      apiobj.statelem.error(uls("要回退到的版本与当前版本相同，没什么要做的", "要回退到的版本與目前版本相同，沒什麼要做的"));
    } else {
      apiobj.statelem.info("完成");
      const {
        params
      } = apiobj;
      if (params.notifyUser && !params.userHidden) {
        var _params$pagename;
        Morebits3.status.info(uls("信息", "資訊"), [uls("开启用户 ", "開啟使用者 "), Morebits3.htmlNode("strong", params.user ?? ""), uls(" 的讨论页", " 的討論頁")]);
        const windowQuery = {
          title: `User talk:${params.user}`,
          action: "edit",
          preview: "yes",
          vanarticle: (_params$pagename = params.pagename) === null || _params$pagename === void 0 ? void 0 : _params$pagename.replace(/_/g, " "),
          vanarticlerevid: params.revid,
          vantimestamp: params.vantimestamp ?? void 0,
          vanarticlegoodrevid: params.goodid ?? void 0,
          type: params.type,
          count: params.count
        };
        switch (Twinkle.getPref("userTalkPageMode")) {
          case "tab":
            window.open(mw.util.getUrl("", windowQuery), "_blank", "noopener,noreferrer");
            break;
          case "blank":
            window.open(mw.util.getUrl("", windowQuery), "_blank", "noopener,noreferrer,location=no,toolbar=no,status=no,directories=no,scrollbars=yes,width=1200,height=800");
            break;
          /* case 'window': */
          /* falls through */
          default:
            window.open(mw.util.getUrl("", windowQuery), window.name === "twinklewarnwindow" ? "_blank" : "twinklewarnwindow", window.name === "twinklewarnwindow" ? "noopener,noreferrer,location=no,toolbar=no,status=no,directories=no,scrollbars=yes,width=1200,height=800" : "location=no,toolbar=no,status=no,directories=no,scrollbars=yes,width=1200,height=800");
            break;
        }
      }
    }
  }
};
twinklefluff.formatSummary = (builtInString, userName, customString) => {
  let result = builtInString;
  if (customString) {
    result += `：${Morebits3.string.toUpperCaseFirstChar(customString)}`;
  }
  if (/\$USER/.test(builtInString)) {
    if (userName) {
      const resultLen = unescape(encodeURIComponent(result.replace("$USER", ""))).length;
      const contribsLink = `[[Special:Contributions/${userName}|${userName}]]`;
      const contribsLen = unescape(encodeURIComponent(contribsLink)).length;
      if (resultLen + contribsLen <= 499) {
        const talkLink = `（[[User talk:${userName}${uls("|讨论]]）", "|討論]]）")}`;
        if (resultLen + contribsLen + unescape(encodeURIComponent(talkLink)).length <= 499) {
          result = Morebits3.string.safeReplace(result, "$USER", contribsLink + talkLink);
        } else {
          result = Morebits3.string.safeReplace(result, "$USER", contribsLink);
        }
      } else {
        result = Morebits3.string.safeReplace(result, "$USER", userName);
      }
    } else {
      result = Morebits3.string.safeReplace(result, "$USER", twinklefluff.hiddenName);
    }
  }
  return result;
};
Twinkle.fluff = twinklefluff;
Twinkle.addInitCallback(twinklefluff, "fluff");
//! src/Twinkle/modules/twinklebatchdelete.ts
var import_vue9 = require("vue");
/*! Twinkle.js - twinklebatchdelete.ts */
var dialogInstance = {
  current: null
};
var twinklebatchdelete = () => {
  if (Morebits2.userIsSysop && (mw.config.get("wgCurRevisionId") && mw.config.get("wgNamespaceNumber") > 0 || mw.config.get("wgCanonicalSpecialPageName") === "Prefixindex" || mw.config.get("wgCanonicalSpecialPageName") === "BrokenRedirects")) {
    Twinkle.addPortletLink(twinklebatchdelete.callback, uls("批删", "批刪"), "tw-batch", uls("删除此分类或页面中的所有链接", "刪除此分類或頁面中的所有連結"));
  }
};
twinklebatchdelete.callback = () => {
  var _dialogInstance$curre;
  const listData = (0, import_vue9.reactive)({
    pages: [],
    loaded: false,
    subpagesLoading: false
  });
  mountLazyDialog("TwBatchDeleteDialog", {
    ref: (instance) => {
      dialogInstance.current = instance ?? null;
    },
    title: uls("批量删除", "批次刪除"),
    reasonList: twinklebatchdelete.deletereasonlist,
    appendPunctuation: Morebits2.string.appendPunctuation,
    list: listData,
    footerLinks: [{
      text: uls("Twinkle帮助", "Twinkle說明"),
      href: mw.util.getUrl("H:TW/DOC#batchdelete")
    }],
    onLoadSubpages: (titles) => {
      listData.subpagesLoading = true;
      const subpageLister = new Morebits2.batchOperation();
      subpageLister.setOption("chunkSize", Number(Twinkle.getPref("batchChunks")));
      subpageLister.setPageList(titles);
      subpageLister.run((pageName) => {
        const pageTitle = mw.Title.newFromText(pageName);
        if (!pageTitle) {
          subpageLister.workerSuccess(pageName);
          return;
        }
        if ([0, 6, 8].includes(pageTitle.namespace)) {
          subpageLister.workerSuccess(pageName);
          return;
        }
        const subpageApi = new Morebits2.wiki.api(uls("正在获取 ", "正在取得 ") + pageName + uls(" 的子页面", " 的子頁面"), {
          action: "query",
          prop: "revisions|info|imageinfo",
          generator: "allpages",
          rvprop: "size",
          inprop: "protection",
          gapprefix: `${pageTitle.title}/`,
          gapnamespace: pageTitle.namespace,
          gaplimit: "max",
          // Not used by API, but added for access in onSuccess()
          pageNameFull: pageName
        }, (apiobj) => {
          const xml = apiobj.getResponse();
          const $pages = $(xml).find("page");
          const subpageList = [];
          $pages.each((_index, page) => {
            const $page = $(page);
            const ns = $page.attr("ns");
            const title = $page.attr("title");
            const isRedir = $page.attr("redirect") === "";
            const $editprot = $page.find('pr[type="edit"][level="sysop"]');
            const isProtected = $editprot.length > 0;
            const size = $page.find("rev").attr("size");
            const metadata = [];
            if (isRedir) {
              metadata[metadata.length] = "redirect";
            }
            if (isProtected) {
              metadata[metadata.length] = uls("全保护，", "全保護，") + ($editprot.attr("expiry") === "infinity" ? uls("无限期", "無限期") : `${new Morebits2.date($editprot.attr("expiry") ?? "").calendar(UTC8_OFFSET_MINUTES)} (UTC+8)`) + uls("过期", "過期");
            }
            if (ns === "6") {
              metadata[metadata.length] = `${uls("上传者：", "上傳者：") + $page.find("ii").attr("user")}，${uls("最后编辑：", "最後編輯：")}${$page.find("rev").attr("user")}`;
            } else {
              metadata[metadata.length] = mw.language.convertNumber(Number(size ?? 0)) + uls("字节", "位元組");
            }
            subpageList[subpageList.length] = {
              title: title ?? "",
              label: (title ?? "") + (metadata.length ? ` (${metadata.join("; ")})` : ""),
              isProtected
            };
          });
          if (subpageList.length) {
            const item = listData.pages.find((pageItem) => {
              return pageItem.title === apiobj.query["pageNameFull"];
            });
            if (item) {
              item.subpages = subpageList;
            }
          }
          subpageLister.workerSuccess(pageName);
        }, void 0, () => {
          subpageLister.workerFailure();
        });
        subpageApi.post();
      }, () => {
        listData.subpagesLoading = false;
      });
    }
  });
  const statusRoot = ((_dialogInstance$curre = dialogInstance.current) === null || _dialogInstance$curre === void 0 ? void 0 : _dialogInstance$curre.getStatusRoot()) ?? null;
  if (statusRoot) {
    Morebits2.status.init(statusRoot);
  }
  const query = {
    action: "query",
    prop: "revisions|info|imageinfo",
    inprop: "protection",
    rvprop: "size|user"
  };
  if (mw.config.get("wgNamespaceNumber") === 14) {
    query["generator"] = "categorymembers";
    query["gcmtitle"] = mw.config.get("wgPageName");
    query["gcmlimit"] = Twinkle.getPref("batchMax");
  } else if (mw.config.get("wgCanonicalSpecialPageName") === "Prefixindex") {
    query["generator"] = "allpages";
    query["gaplimit"] = Twinkle.getPref("batchMax");
    if (mw.util.getParamValue("prefix")) {
      query["gapnamespace"] = mw.util.getParamValue("namespace");
      query["gapprefix"] = mw.util.getParamValue("prefix");
    } else {
      var _titleSplit$;
      let pathSplit = decodeURIComponent(location.pathname).split("/");
      if (pathSplit.length < 3 || pathSplit[2] !== "Special:前缀索引") {
        return;
      }
      const titleSplit = (pathSplit[3] ?? "").split(":");
      query["gapnamespace"] = mw.config.get("wgNamespaceIds")[((_titleSplit$ = titleSplit[0]) === null || _titleSplit$ === void 0 ? void 0 : _titleSplit$.toLowerCase()) ?? ""];
      if (titleSplit.length < 2 || query["gapnamespace"] === void 0) {
        query["gapnamespace"] = 0;
        query["gapprefix"] = pathSplit.splice(3).join("/");
      } else {
        pathSplit = pathSplit.splice(4);
        pathSplit.splice(0, 0, titleSplit.splice(1).join(":"));
        query["gapprefix"] = pathSplit.join("/");
      }
    }
  } else if (mw.config.get("wgCanonicalSpecialPageName") === "BrokenRedirects") {
    query["generator"] = "querypage";
    query["gqppage"] = "BrokenRedirects";
    query["gqplimit"] = Twinkle.getPref("batchMax");
  } else {
    query["generator"] = "links";
    query["titles"] = mw.config.get("wgPageName");
    query["gpllimit"] = Twinkle.getPref("batchMax");
  }
  const api2 = new Morebits2.wiki.api(uls("加载中…", "載入中…"), query, (apiobj) => {
    var _dialogInstance$curre2;
    const xml = apiobj.getResponse();
    const $pages = $(xml).find("page").filter(":not([missing])");
    $pages.each((_index, page) => {
      const $page = $(page);
      const ns = $page.attr("ns");
      const title = $page.attr("title");
      const isRedir = $page.attr("redirect") === "";
      const $editprot = $page.find('pr[type="edit"][level="sysop"]');
      const isProtected = $editprot.length > 0;
      const size = $page.find("rev").attr("size");
      const metadata = [];
      if (isRedir) {
        metadata[metadata.length] = uls("重定向", "重新導向");
      }
      if (isProtected) {
        metadata[metadata.length] = uls("全保护，", "全保護，") + ($editprot.attr("expiry") === "infinity" ? uls("无限期", "無限期") : `${new Morebits2.date($editprot.attr("expiry") ?? "").calendar(UTC8_OFFSET_MINUTES)} (UTC+8)`) + uls("过期", "過期");
      }
      if (ns === "6") {
        metadata[metadata.length] = `${uls("上传者：", "上傳者：") + $page.find("ii").attr("user")}，${uls("最后编辑：", "最後編輯：")}${$page.find("rev").attr("user")}`;
      } else {
        metadata[metadata.length] = mw.language.convertNumber(Number(size ?? 0)) + uls("字节", "位元組");
      }
      listData.pages.push({
        title: title ?? "",
        label: (title ?? "") + (metadata.length ? `（${metadata.join("，")}）` : ""),
        isProtected
      });
    });
    listData.loaded = true;
    (_dialogInstance$curre2 = dialogInstance.current) === null || _dialogInstance$curre2 === void 0 || _dialogInstance$curre2.clear();
  });
  api2.statelem.status(uls("加载中……", "載入中……"));
  api2.post();
};
twinklebatchdelete.deletereasonlist = [{
  label: uls("请选择", "請選擇"),
  value: ""
}, {
  label: uls("G6：原作者提请删除或清空页面，且页面原作者仅有一人", "G6：原作者提請刪除或清空頁面，且頁面原作者僅有一人"),
  value: uls("[[QW:CSD#G6|G6]]：原作者提请删除或清空页面，且页面原作者仅有一人", "[[QW:CSD#G6|G6]]：原作者提請刪除或清空頁面，且頁面原作者僅有一人")
}, {
  label: uls("G9：孤立页面，比如没有主页面的讨论页、指向空页面的重定向等", "G9：孤立頁面，比如沒有主頁面的討論頁、指向空頁面的重新導向等"),
  value: uls("[[QW:CSD#G9|G9]]：孤立页面", "[[QW:CSD#G9|G9]]：孤立頁面")
}, {
  label: uls("R1：不能发挥实际作用的重定向。", "R1：不能發揮實際作用的重定向。"),
  value: uls("[[QW:CSD#R1|R1]]：不能发挥实际作用的重定向。", "[[QW:CSD#R1|R1]]：不能發揮實際作用的重定向。")
}, {
  label: uls("R2：名称与导向目标代表事物不一致或不完全一致的重定向。", "R2：名稱與導向目標代表事物不一致或不完全一致的重定向。"),
  value: uls("[[QW:CSD#R2|R2]]：名称与导向目标代表事物不一致或不完全一致的重定向。", "[[QW:CSD#R2|R2]]：名稱與導向目標代表事物不一致或不完全一致的重定向。")
}, {
  label: uls("F4：可被替代的合理使用文件", "F4：可被替代的合理使用檔案"),
  value: uls("[[QW:CSD#F4|F4]]：可被替代的合理使用文件", "[[QW:CSD#F4|F4]]：可被替代的合理使用檔案")
}, {
  label: uls("F5：没有被条目使用的非自由著作权文件、没有填写任何合理使用依据的非自由著作权文件", "F5：沒有被條目使用的非自由版權檔案、沒有填寫任何合理使用依據的非自由版權檔案"),
  value: uls("[[QW:CSD#F5|F5]]：没有被条目使用的非自由著作权文件、没有填写任何合理使用依据的非自由著作权文件", "[[QW:CSD#F5|F5]]：沒有被條目使用的非自由版權檔案、沒有填寫任何合理使用依據的非自由版權檔案")
}, {
  label: uls("O1：用户请求删除自己的用户页或其子页面", "O1：使用者請求刪除自己的使用者頁面或其子頁面"),
  value: uls("[[QW:CSD#O1|O1]]：用户请求删除自己的[[Help:用户页|用户页]]或其子页面。", "[[QW:CSD#O1|O1]]：使用者請求刪除自己的[[Help:用户页|使用者頁面]]或其子頁面。")
}, {
  label: uls("O2：空的分类（没有条目也没有子分类）", "O2：空的分類（沒有條目也沒有子分類）"),
  value: uls("[[QW:CSD#O2|O2]]：空的分类（没有条目也没有子分类）。", "[[QW:CSD#O2|O2]]：空的分類（沒有條目也沒有子分類）。")
}, {
  label: uls("O3：废弃草稿", "O3：廢棄草稿"),
  value: uls("[[QW:CSD#O3|O3]]：废弃草稿。", "[[QW:CSD#O3|O3]]：廢棄草稿。")
}];
Twinkle.batchdelete = twinklebatchdelete;
Twinkle.addInitCallback(twinklebatchdelete, "batchdelete");
//! src/Twinkle/modules/twinklebatchundelete.ts
var import_vue10 = require("vue");
/*! Twinkle.js - twinklebatchundelete.ts */
var twinklebatchundelete = () => {
  if (!Morebits2.userIsSysop || !mw.config.get("wgArticleId") || mw.config.get("wgNamespaceNumber") !== mw.config.get("wgNamespaceIds")["user"] && mw.config.get("wgNamespaceNumber") !== mw.config.get("wgNamespaceIds")["project"]) {
    return;
  }
  Twinkle.addPortletLink(twinklebatchundelete.callback, uls("批复", "批復"), "tw-batch-undel", uls("反删除页面", "反刪除頁面"));
};
twinklebatchundelete.callback = () => {
  var _dialogInstance2$curr3;
  const list = (0, import_vue10.reactive)([]);
  const dialogInstance2 = {
    current: null
  };
  mountLazyDialog("TwBatchUndeleteDialog", {
    ref: (instance) => {
      dialogInstance2.current = instance ?? null;
    },
    title: uls("批量反删除", "批次反刪除"),
    list,
    footerLinks: [{
      text: uls("Twinkle帮助", "Twinkle說明"),
      href: mw.util.getUrl("H:TW/DOC#batchundelete")
    }]
  });
  const statusRoot = ((_dialogInstance2$curr3 = dialogInstance2.current) === null || _dialogInstance2$curr3 === void 0 ? void 0 : _dialogInstance2$curr3.getStatusRoot()) ?? null;
  if (statusRoot) {
    Morebits2.status.init(statusRoot);
  }
  const query = {
    action: "query",
    generator: "links",
    prop: "info",
    inprop: "protection",
    titles: mw.config.get("wgPageName"),
    gpllimit: Twinkle.getPref("batchMax")
  };
  const api2 = new Morebits2.wiki.api(uls("抓取页面列表", "抓取頁面列表"), query, (apiobj) => {
    var _dialogInstance2$curr4;
    const xml = apiobj.getResponse();
    const $pages = $(xml).find("page[missing]");
    for (const page of $pages.toArray()) {
      const $page = $(page);
      const title = $page.attr("title") ?? "";
      const $editprot = $page.find('pr[type="create"][level="sysop"]');
      const isProtected = $editprot.length > 0;
      const expiry = $editprot.attr("expiry");
      const expiryLabel = expiry === "infinity" ? uls("无限期", "無限期") : expiry ? `${new Morebits2.date(expiry).calendar(UTC8_OFFSET_MINUTES)} (UTC+8)${uls("过期", "過期")}` : uls("过期时间未知", "過期時間未知");
      list.push({
        title,
        label: title + (isProtected ? `（${uls("全保护，", "全保護，")}${expiryLabel}）` : ""),
        isProtected
      });
    }
    (_dialogInstance2$curr4 = dialogInstance2.current) === null || _dialogInstance2$curr4 === void 0 || _dialogInstance2$curr4.clear();
  });
  api2.statelem.status(uls("加载中……", "載入中……"));
  api2.post();
};
Twinkle.batchundelete = twinklebatchundelete;
Twinkle.addInitCallback(twinklebatchundelete, "batchundelete");
//! src/Twinkle/modules/twinklebatchprotect.ts
var import_vue11 = require("vue");
/*! Twinkle.js - twinklebatchprotect.ts */
var twinklebatchprotect = () => {
  if (Morebits2.userIsSysop && (mw.config.get("wgArticleId") > 0 && [2, 4].includes(mw.config.get("wgNamespaceNumber")) || mw.config.get("wgNamespaceNumber") === 14 || mw.config.get("wgCanonicalSpecialPageName") === "Prefixindex")) {
    Twinkle.addPortletLink(twinklebatchprotect.callback, "批保", "tw-pbatch", "批量保护链出页面");
  }
};
twinklebatchprotect.callback = () => {
  var _Twinkle$protect, _Twinkle$protect2, _Twinkle$protect3, _dialogInstance2$curr5;
  const listData = (0, import_vue11.reactive)({
    pages: [],
    loaded: false
  });
  const dialogInstance2 = {
    current: null
  };
  mountLazyDialog("TwBatchProtectDialog", {
    ref: (instance) => {
      dialogInstance2.current = instance ?? null;
    },
    title: "批保",
    levels: ((_Twinkle$protect = Twinkle.protect) === null || _Twinkle$protect === void 0 ? void 0 : _Twinkle$protect.protectionLevels) ?? [],
    moveLevels: (((_Twinkle$protect2 = Twinkle.protect) === null || _Twinkle$protect2 === void 0 ? void 0 : _Twinkle$protect2.protectionLevels) ?? []).filter((level) => {
      return level.value !== "autoconfirmed";
    }),
    lengths: ((_Twinkle$protect3 = Twinkle.protect) === null || _Twinkle$protect3 === void 0 ? void 0 : _Twinkle$protect3.protectionLengths) ?? [],
    list: listData,
    footerLinks: [{
      text: "保护方针",
      href: mw.util.getUrl("QW:PROT")
    }, {
      text: uls("帮助文档", "幫助文檔"),
      href: mw.util.getUrl("H:TW/DOC#保护")
    }, {
      text: uls("问题反馈", "問題反饋"),
      href: mw.util.getUrl("HT:TW")
    }]
  });
  const statusRoot = ((_dialogInstance2$curr5 = dialogInstance2.current) === null || _dialogInstance2$curr5 === void 0 ? void 0 : _dialogInstance2$curr5.getStatusRoot()) ?? null;
  if (statusRoot) {
    Morebits2.status.init(statusRoot);
  }
  const query = {
    action: "query",
    prop: "revisions|info|imageinfo",
    rvprop: "size|user",
    inprop: "protection",
    format: "json"
  };
  if (mw.config.get("wgNamespaceNumber") === 14) {
    query["generator"] = "categorymembers";
    query["gcmtitle"] = mw.config.get("wgPageName");
    query["gcmlimit"] = Twinkle.getPref("batchMax");
  } else if (mw.config.get("wgCanonicalSpecialPageName") === "Prefixindex") {
    var _document$querySelect6, _document$querySelect7;
    query["generator"] = "allpages";
    query["gapnamespace"] = mw.util.getParamValue("namespace") || ((_document$querySelect6 = document.querySelector('select[name="namespace"]')) === null || _document$querySelect6 === void 0 ? void 0 : _document$querySelect6.value) || "";
    query["gapprefix"] = mw.util.getParamValue("prefix") || ((_document$querySelect7 = document.querySelector('input[name="prefix"]')) === null || _document$querySelect7 === void 0 ? void 0 : _document$querySelect7.value) || "";
    query["gaplimit"] = Twinkle.getPref("batchMax");
  } else {
    query["generator"] = "links";
    query["titles"] = mw.config.get("wgPageName");
    query["gpllimit"] = Twinkle.getPref("batchMax");
  }
  const api2 = new Morebits2.wiki.api(uls("抓取页面列表", "抓取頁面列表"), query, (apiobj) => {
    var _queryResult$query, _dialogInstance2$curr6;
    const queryResult = apiobj.getResponse();
    const pages = ((_queryResult$query = queryResult.query) === null || _queryResult$query === void 0 ? void 0 : _queryResult$query.pages) ?? [];
    pages.sort(Twinkle.sortByNamespace);
    for (const page of pages) {
      const metadata = [];
      const missing = !!page.missing;
      if (missing) {
        metadata.push("页面不存在");
      } else {
        if (page.redirect) {
          metadata.push("重定向");
        }
        if (page.ns === 6) {
          var _page$imageinfo, _page$revisions;
          metadata.push(`上传者：${(_page$imageinfo = page.imageinfo) === null || _page$imageinfo === void 0 || (_page$imageinfo = _page$imageinfo[0]) === null || _page$imageinfo === void 0 ? void 0 : _page$imageinfo.user}，最后编辑者：${(_page$revisions = page.revisions) === null || _page$revisions === void 0 || (_page$revisions = _page$revisions[0]) === null || _page$revisions === void 0 ? void 0 : _page$revisions.user}`);
        } else {
          var _page$revisions2;
          metadata.push(`${mw.language.convertNumber(((_page$revisions2 = page.revisions) === null || _page$revisions2 === void 0 || (_page$revisions2 = _page$revisions2[0]) === null || _page$revisions2 === void 0 ? void 0 : _page$revisions2.size) ?? 0)}字节`);
        }
      }
      const protectionType = missing ? "create" : "edit";
      let editProt;
      for (let index = page.protection.length - 1; index >= 0; index--) {
        const protection = page.protection[index];
        if ((protection === null || protection === void 0 ? void 0 : protection.type) === protectionType && protection.level) {
          editProt = protection;
          break;
        }
      }
      if (editProt) {
        let level = "";
        switch (editProt.level) {
          case "autoconfirmed":
            level = uls("半保护", "半保護");
            break;
          case "templateeditor":
            level = uls("模板保护", "模板保護");
            break;
          case "sysop":
            level = uls("全保护", "全保護");
            break;
          case "revisionprotected":
            level = uls("版本保护", "版本保護");
            break;
          case "officialprotected":
            level = uls("裁委会保护", "裁委會保護");
            break;
          default:
            level = uls("未知保护类型", "未知保護類別");
            break;
        }
        metadata.push(`${missing ? "白纸" : ""}${level}${editProt.expiry === "infinity" ? "（永久）" : `（${new Morebits2.date(editProt.expiry).calendar(UTC8_OFFSET_MINUTES)} (UTC+8)过期）`}`);
      }
      const {
        title
      } = page;
      listData.pages.push({
        title,
        label: title + (metadata.length > 0 ? ` (${metadata.join("; ")})` : ""),
        isProtected: !!editProt
      });
    }
    listData.loaded = true;
    (_dialogInstance2$curr6 = dialogInstance2.current) === null || _dialogInstance2$curr6 === void 0 || _dialogInstance2$curr6.clear();
  });
  api2.statelem.status(uls("加载中……", "載入中……"));
  api2.post();
};
Twinkle.batchprotect = twinklebatchprotect;
Twinkle.addInitCallback(twinklebatchprotect, "batchprotect");
//! src/Twinkle/modules/twinkleclose.ts
/*! Twinkle.js - twinkleclose.ts */
var $body5 = $("body");
var twinkleclose = () => {
  if (Twinkle.getPref("XfdClose") === "hide" || !/^Qiuwen([_ ]talk)?:存废讨论\/记录(?:\/\d+){3}$/.test(mw.config.get("wgPageName"))) {
    return;
  }
  mw.hook("wikipage.content").add((item) => {
    if (item.attr("id") === "mw-content-text") {
      addLinks();
    }
  });
};
var addLinks = () => {
  const spanTag = (color, content) => {
    const span = document.createElement("span");
    span.style.color = color;
    span.appendChild(document.createTextNode(content));
    return span;
  };
  $body5.find("h1:has(.mw-headline),h2:has(.mw-headline),h3:has(.mw-headline),h4:has(.mw-headline),h5:has(.mw-headline),h6:has(.mw-headline)").each((index, element) => {
    element.dataset["section"] = String(index + 1);
  });
  const selector = ":has(.mw-headline a:only-of-type):not(:has(+ div.NavFrame))";
  const titles = $body5.find("#bodyContent").find(`h2${selector}:not(:has(+ p + h3)), h3${selector}`);
  const delNode = document.createElement("strong");
  const delLink = document.createElement("a");
  delLink.appendChild(spanTag("Black", "["));
  delLink.appendChild(spanTag("Red", uls("关闭讨论", "關閉討論")));
  delLink.appendChild(spanTag("Black", "]"));
  delNode.appendChild(delLink);
  for (const current of titles) {
    const headlinehref = $(current).find(".mw-headline a:not(.ext-discussiontools-init-section-subscribe-link)").attr("href");
    if (headlinehref !== void 0) {
      let title = null;
      if (headlinehref.includes("redlink=1")) {
        title = headlinehref.slice(19, -22);
      } else {
        const m = headlinehref.match(/\/wiki\/([^?]+)/);
        if (m !== null) {
          title = m[1] ?? null;
        }
      }
      if (title !== null) {
        const normalized = decodeURIComponent(title).replace(/_/g, " ");
        const pagenotexist = $(current).find(".mw-headline a").hasClass("new");
        const section = current.dataset["section"];
        const [node] = current.querySelectorAll(".mw-headline");
        if (!node || section === void 0) {
          continue;
        }
        node.appendChild(document.createTextNode(" "));
        const tmpNode = delNode.cloneNode(true);
        const anchor = tmpNode.firstChild;
        anchor.href = `#${section}`;
        $(anchor).on("click", () => {
          twinkleclose.callback(normalized, section, pagenotexist);
          return false;
        });
        node.appendChild(tmpNode);
      }
    }
  }
};
twinkleclose.callback = (title, section, noop) => {
  mountLazyDialog("TwCloseDialog", {
    title,
    section: section ?? "",
    initialNoop: noop,
    footerLinks: [{
      text: "存废讨论设置",
      href: mw.util.getUrl("H:TW/PREF#close")
    }, {
      text: "Twinkle帮助",
      href: mw.util.getUrl("H:TW/DOC#close")
    }, {
      text: uls("反馈意见", "回報意見"),
      href: mw.util.getUrl("HT:TW")
    }]
  });
};
Twinkle.close = twinkleclose;
Twinkle.addInitCallback(Twinkle.close, "close");
//! src/Twinkle/modules/twinkleconfig.ts
var import_vue12 = require("vue");
/*! Twinkle.js - twinkleconfig.ts */
var watchlistEnums = {
  yes: uls("永久加入到监视列表", "永久加入到監視清單"),
  no: uls("不加入到监视列表", "不加入到監視清單"),
  default: uls("遵守站点设置", "遵守站點設定"),
  "1 week": uls("加入到监视列表1周", "加入到監視清單1週"),
  "1 month": uls("加入到监视列表1个月", "加入到監視清單1個月"),
  "3 months": uls("加入到监视列表3个月", "加入到監視清單3個月"),
  "6 months": uls("加入到监视列表6个月", "加入到監視清單6個月")
};
var commonSets = {
  csdCriteria: {
    db: uls("自定义理由", "自訂理由"),
    g1: "G1",
    g2: "G2",
    g3: "G3",
    g4: "G4",
    g5: "G5",
    g6: "G6",
    g7: "G7",
    g8: "G8",
    g9: "G9",
    a1: "A1",
    a2: "A2",
    a3: "A3",
    o1: "O1",
    o2: "O2",
    o3: "O3",
    f1: "F1",
    f2: "F2",
    f3: "F3",
    f4: "F4",
    f5: "F5",
    r1: "R1",
    r2: "R2"
  },
  csdCriteriaDisplayOrder: ["db", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "a1", "a2", "a3", "o1", "o2", "o3", "f1", "f2", "f3", "f4", "f5", "r1", "r2"],
  csdCriteriaNotification: {
    db: uls("自定义理由", "自訂理由"),
    g1: "G1",
    g2: "G2",
    g3: "G3",
    g4: "G4",
    g5: "G5",
    g6: "G6",
    g7: "G7",
    g8: "G8",
    g9: "G9",
    a1: "A1",
    a2: "A2",
    a3: "A3",
    o1: "O1",
    o2: "O2",
    o3: "O3",
    f1: "F1",
    f2: "F2",
    f3: "F3",
    f4: "F4",
    f5: "F5",
    r1: "R1",
    r2: "R2"
  },
  csdCriteriaNotificationDisplayOrder: ["db", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "a1", "a2", "a3", "o1", "o2", "o3", "f1", "f2", "f3", "f4", "f5", "r1", "r2"],
  csdAndDICriteria: {
    db: uls("自定义理由", "自訂理由"),
    g1: "G1",
    g2: "G2",
    g3: "G3",
    g4: "G4",
    g5: "G5",
    g6: "G6",
    g7: "G7",
    g8: "G8",
    g9: "G9",
    a1: "A1",
    a2: "A2",
    a3: "A3",
    o1: "O1",
    o2: "O2",
    o3: "O3",
    f1: "F1",
    f2: "F2",
    f3: "F3",
    f4: "F4",
    f5: "F5",
    r1: "R1",
    r2: "R2"
  },
  csdAndDICriteriaDisplayOrder: ["db", "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "a1", "a2", "a3", "o1", "o2", "o3", "f1", "f2", "f3", "f4", "f5", "r1", "r2"],
  xfdCriteria: {
    delete: uls("删除", "刪除"),
    merge: uls("合并", "合併"),
    fwdcsd: uls("转交自快速删除候选", "轉交自快速刪除候選"),
    fame: uls("批量关注度提删", "批次關注度提刪"),
    substub: uls("批量小小作品提删", "批次小小作品提刪"),
    batch: uls("批量其他提删", "批次其他提刪")
  },
  xfdCriteriaDisplayOrder: ["delete", "merge", "fwdcsd", "fame", "substub", "batch"],
  namespacesNoSpecial: {
    0: uls("（条目）", "（條目）"),
    1: "Talk",
    2: "User",
    3: "User talk",
    4: "Qiuwen",
    5: "Qiuwen talk",
    6: "File",
    7: "File talk",
    8: "MediaWiki",
    9: "MediaWiki talk",
    10: "Template",
    11: "Template talk",
    12: "Help",
    13: "Help talk",
    14: "Category",
    15: "Category talk",
    118: "Draft",
    119: "Draft talk",
    204: "NEA",
    205: "NEA talk",
    206: "Addendum",
    207: "Addendum talk",
    828: "Module",
    829: "Module talk"
  }
};
var sections = [{
  title: uls("常规", "常規"),
  module: "general",
  preferences: [
    // TwinkleConfig.userTalkPageMode may take arguments:
    // 'window': open a new window, remember the opened window
    // 'tab': opens in a new tab, if possible.
    // 'blank': force open in a new window, even if such a window exists
    {
      name: "userTalkPageMode",
      label: uls("当要打开用户讨论页时", "當要打開使用者討論頁時"),
      type: "enum",
      enumValues: {
        window: uls("在窗口中，替换成其它用户对话页", "在當前分頁，替換成其它用戶討論頁"),
        tab: uls("在新标签页中", "在新分頁中"),
        blank: uls("在全新的窗口中", "在新視窗中")
      }
    },
    // TwinkleConfig.dialogLargeFont (boolean)
    {
      name: "dialogLargeFont",
      label: uls("在Twinkle对话框中使用大号字体", "在Twinkle對話方塊中使用大號字型"),
      type: "boolean"
    },
    // TwinkleConfig.disabledModules (array)
    {
      name: "disabledModules",
      label: uls("关闭指定的Twinkle模块", "關閉指定的Twinkle模組"),
      helptip: uls("您在此选择的功能将无法使用，取消选择以重新启用功能。", "您在此選擇的功能將無法使用，取消選擇以重新啟用功能。"),
      type: "set",
      setValues: {
        arv: uls("告状", "告狀"),
        warn: "警告",
        block: uls("封禁", "封鎖"),
        talkback: "通告",
        speedy: uls("速删", "速刪"),
        copyvio: uls("侵权", "侵權"),
        xfd: uls("提删", "提刪"),
        image: uls("图权", "圖權"),
        protect: uls("保护", "保護"),
        tag: uls("标记", "標記"),
        stub: "小作品",
        diff: uls("差异", "差異"),
        unlink: uls("链入", "連入"),
        fluff: "回退"
      }
    },
    // TwinkleConfig.disabledSysopModules (array)
    {
      name: "disabledSysopModules",
      label: uls("关闭指定的Twinkle管理员模块", "關閉指定的Twinkle管理員模組"),
      helptip: uls("您在此选择的功能将无法使用，取消选择以重新启用功能。", "您在此選擇的功能將無法使用，取消選擇以重新啟用功能。"),
      adminOnly: true,
      type: "set",
      setValues: {
        batchdelete: uls("批删", "批刪"),
        batchundelete: uls("批复", "批復")
      }
    }
  ]
}, {
  title: uls("告状", "告狀"),
  module: "arv",
  preferences: [{
    name: "spiWatchReport",
    label: uls("发起傀儡调查时加入到监视列表", "發起傀儡調查時加入到監視清單"),
    type: "enum",
    enumValues: watchlistEnums
  }]
}, {
  title: uls("封禁用户", "封鎖使用者"),
  module: "block",
  adminOnly: true,
  preferences: [
    // TwinkleConfig.defaultToBlock64 (boolean)
    // Whether to default to just blocking the /64 on or off
    {
      name: "defaultToBlock64",
      label: uls("对于IPv6地址，默认选择封禁/64段", "對於IPv6地址，預設選擇封鎖/64段"),
      type: "boolean"
    },
    // TwinkleConfig.defaultToPartialBlocks (boolean)
    // Whether to default partial blocks on or off
    {
      name: "defaultToPartialBlocks",
      label: uls("打开封禁菜单时默认选择部分封禁", "打開封鎖選單時預設選擇部分封鎖"),
      type: "boolean"
    },
    // TwinkleConfig.watchBlockNotices (string)
    // Watchlist setting for the page which has been dispatched an warning or notice
    {
      name: "watchBlockNotices",
      label: uls("发送封禁模板时加入用户讨论页到监视列表", "發送封鎖模板時加入使用者討論頁到監視清單"),
      type: "enum",
      enumValues: watchlistEnums
    },
    {
      name: "customBlockReasonList",
      label: uls("自定义封禁理由", "自訂封鎖理由"),
      helptip: uls("您可以加入常用的封禁理由。自定义的封禁理由会出现在一般的封禁理由下方。", "您可以加入常用的封鎖理由。自訂的封鎖理由會出現在一般的封鎖理由下方。"),
      type: "customList",
      customListValueTitle: uls("使用封禁模板（默认为 uw-block1）", "使用封鎖模板（預設為 uw-block1）"),
      customListLabelTitle: uls("“由于…您已被封禁”及封禁日志理由", "「由於…您已被封鎖」及封鎖日誌理由")
    }
  ]
}, {
  title: uls("图片删除", "圖片刪除"),
  module: "image",
  preferences: [
    // TwinkleConfig.notifyUserOnDeli (boolean)
    // If the user should be notified after placing a file deletion tag
    {
      name: "notifyUserOnDeli",
      label: uls("默认勾选“通知创建者”", "預設勾選「通知建立者」"),
      type: "boolean"
    },
    // TwinkleConfig.deliWatchPage (string)
    // The watchlist setting of the page tagged for deletion.
    {
      name: "deliWatchPage",
      label: uls("标记图片时加入到监视列表", "標記圖片時加入到監視清單"),
      type: "enum",
      enumValues: watchlistEnums
    },
    // TwinkleConfig.deliWatchUser (string)
    // The watchlist setting of the user talk page if a notification is placed.
    {
      name: "deliWatchUser",
      label: uls("标记图片时加入创建者讨论页到监视列表", "標記圖片時加入建立者討論頁到監視清單"),
      type: "enum",
      enumValues: watchlistEnums
    }
  ]
}, {
  title: uls("保护", "保護"),
  module: "protect",
  preferences: [{
    name: "watchRequestedPages",
    label: uls("请求保护页面时加入到监视列表", "請求保護頁面時加入到監視清單"),
    type: "enum",
    enumValues: watchlistEnums
  }, {
    name: "watchPPTaggedPages",
    label: uls("标记保护模板时加入到监视列表", "標記保護模板時加入到監視清單"),
    type: "enum",
    enumValues: watchlistEnums
  }, {
    name: "watchProtectedPages",
    label: uls("保护时加入到监视列表", "保護時加入到監視清單"),
    helptip: uls("若在保护后也标记页面，则使用标记页面的参数设置。", "若在保護後也標記頁面，則使用標記頁面的偏好設定。"),
    adminOnly: true,
    type: "enum",
    enumValues: watchlistEnums
  }]
}, {
  title: "回退",
  // twinklefluff module
  module: "fluff",
  preferences: [
    // TwinkleConfig.autoMenuAfterRollback (bool)
    // Option to automatically open the warning menu if the user talk page is opened post-reversion
    {
      name: "autoMenuAfterRollback",
      label: uls("在Twinkle回退后自动打开用户讨论页上的Twinkle警告菜单", "在Twinkle回退後自動打開使用者討論頁上的Twinkle警告選單"),
      helptip: uls("仅在选取下方对应框时才执行", "僅在選取下方對應框時才執行"),
      type: "boolean"
    },
    // TwinkleConfig.openTalkPage (array)
    // What types of actions that should result in opening of talk page
    {
      name: "openTalkPage",
      label: uls("在这些类型的回退后打开用户讨论页", "在這些類別的回退後打開使用者討論頁"),
      type: "set",
      setValues: {
        norm: uls("常规回退", "常規回退"),
        vand: uls("破坏回退", "破壞回退")
      }
    },
    // TwinkleConfig.openTalkPageOnAutoRevert (bool)
    // Defines if talk page should be opened when calling revert from contribs or recent changes pages. If set to true, openTalkPage defines then if talk page will be opened.
    {
      name: "openTalkPageOnAutoRevert",
      label: uls("在从用户贡献及最近更改中发起回退时打开用户讨论页", "在從使用者貢獻及近期變更中發起回退時打開使用者討論頁"),
      helptip: uls("当它打开时，依赖上一个设置。", "當它打開時，依賴上一個設定。"),
      type: "boolean"
    },
    // TwinkleConfig.rollbackInPlace (bool)
    //
    {
      name: "rollbackInPlace",
      label: uls("在从用户贡献及最近更改中发起回退时不刷新页面", "在從使用者貢獻及近期變更中發起回退時不重新整理頁面"),
      helptip: uls("当它打开时，Twinkle将不会在从用户贡献及最近更改中发起回退时刷新页面，允许您一次性回退多个编辑。", "當它打開時，Twinkle將不會在從使用者貢獻及近期變更中發起回退時重新整理頁面，允許您一次性回退多個編輯。"),
      type: "boolean"
    },
    // TwinkleConfig.markRevertedPagesAsMinor (array)
    // What types of actions that should result in marking edit as minor
    {
      name: "markRevertedPagesAsMinor",
      label: uls("将这些类型的回退标记为小修改", "將這些類別的回退標記為小修改"),
      type: "set",
      setValues: {
        norm: uls("常规回退", "常規回退"),
        vand: uls("破坏回退", "破壞回退"),
        torev: uls("“恢复此版本”", "「恢復此版本」")
      }
    },
    // TwinkleConfig.watchRevertedPages (array)
    // What types of actions that should result in forced addition to watchlist
    {
      name: "watchRevertedPages",
      label: uls("把这些类型的回退加入到监视列表", "把這些類別的回退加入到監視清單"),
      type: "set",
      setValues: {
        norm: uls("常规回退", "常規回退"),
        vand: uls("破坏回退", "破壞回退"),
        torev: uls("“恢复此版本”", "「恢復此版本」")
      }
    },
    // TwinkleConfig.watchRevertedExpiry
    // If any of the above items are selected, whether to expire the watch
    {
      name: "watchRevertedExpiry",
      label: uls("当回退页面时，加入到监视列表的期限", "當回退頁面時，加入到監視清單的期限"),
      type: "enum",
      enumValues: watchlistEnums
    },
    // TwinkleConfig.offerReasonOnNormalRevert (boolean)
    // If to offer a prompt for extra summary reason for normal reverts, default to true
    {
      name: "offerReasonOnNormalRevert",
      label: uls("常规回退时询问理由", "常規回退時詢問理由"),
      helptip: uls("“常规”回退是中间的那个[回退]链接。", "「常規」回退是中間的那個[回退]連結。"),
      type: "boolean"
    },
    {
      name: "confirmOnFluff",
      label: uls("回退前要求确认（所有设备）", "回退前要求確認（所有裝置）"),
      helptip: uls("对于使用移动设备的用户，或者意志不坚定的。", "對於使用行動裝置的使用者，或者意志不堅定的。"),
      type: "boolean"
    },
    // TwinkleConfig.showRollbackLinks (array)
    // Where Twinkle should show rollback links:
    // diff, others, mine, contribs, history, recent
    // Note from TTO: |contribs| seems to be equal to |others| + |mine|, i.e. redundant, so I left it out heres
    {
      name: "showRollbackLinks",
      label: uls("在这些页面上显示回退链接", "在這些頁面上顯示回退連結"),
      type: "set",
      setValues: {
        diff: uls("差异", "差異"),
        history: uls("历史记录", "歷史記錄"),
        others: uls("其它用户的贡献", "其它使用者的貢獻"),
        mine: uls("我的贡献", "我的貢獻"),
        recentchanges: uls("最近更改", "近期變更"),
        recentchangeslinked: uls("相关更改", "相關變更")
      }
    },
    {
      name: "customRevertSummary",
      label: "回退理由",
      helptip: uls("在查看差异时可选，仅善意回退、常规回退、恢复此版本", "在檢視差異時可選，僅善意回退、常規回退、恢復此版本"),
      type: "customList",
      customListValueTitle: "理由",
      customListLabelTitle: uls("显示的文字", "顯示的文字")
    }
  ]
}, {
  title: uls("快速删除", "快速刪除"),
  module: "speedy",
  preferences: [
    {
      name: "speedySelectionStyle",
      label: uls("什么时候执行标记或删除", "什麼時候執行標記或刪除"),
      type: "enum",
      enumValues: {
        buttonClick: uls("当我点“提交”时", "當我點「提交」時"),
        radioClick: uls("当我点一个选项时", "當我點一個選項時")
      }
    },
    // TwinkleConfig.watchSpeedyPages (array)
    // Whether to add speedy tagged pages to watchlist
    {
      name: "watchSpeedyPages",
      label: uls("将以下理由加入到监视列表", "將以下理由加入到監視清單"),
      type: "set",
      setValues: commonSets.csdCriteria,
      setDisplayOrder: commonSets.csdCriteriaDisplayOrder
    },
    // TwinkleConfig.watchSpeedyExpiry
    // If any of the above items are selected, whether to expire the watch
    {
      name: "watchSpeedyExpiry",
      label: uls("当标记页面时，加入到监视列表的期限", "當標記頁面時，加入到監視清單的期限"),
      type: "enum",
      enumValues: watchlistEnums
    },
    // TwinkleConfig.markSpeedyPagesAsPatrolled (boolean)
    // If, when applying speedy template to page, to mark the page as patrolled (if the page was reached from NewPages)
    {
      name: "markSpeedyPagesAsPatrolled",
      label: uls("标记时标记页面为已巡查（如可能）", "標記時標記頁面為已巡查（如可能）"),
      type: "boolean"
    },
    // TwinkleConfig.notifyUserOnSpeedyDeletionNomination (array)
    // What types of actions should result that the author of the page being notified of nomination
    {
      name: "notifyUserOnSpeedyDeletionNomination",
      label: uls("仅在使用以下理由时通知页面创建者", "僅在使用以下理由時通知頁面建立者"),
      helptip: uls("尽管您在对话框中选择通知，通知仍只会在使用这些理由时发出。", "儘管您在對話方塊中選擇通知，通知仍只會在使用這些理由時發出。"),
      type: "set",
      setValues: commonSets.csdCriteriaNotification,
      setDisplayOrder: commonSets.csdCriteriaNotificationDisplayOrder
    },
    // TwinkleConfig.promptForSpeedyDeletionSummary (array of strings)
    {
      name: "promptForSpeedyDeletionSummary",
      label: uls("使用以下理由删除时允许编辑删除理由", "使用以下理由刪除時允許編輯刪除理由"),
      adminOnly: true,
      type: "set",
      setValues: commonSets.csdAndDICriteria,
      setDisplayOrder: commonSets.csdAndDICriteriaDisplayOrder
    },
    // TwinkleConfig.openUserTalkPageOnSpeedyDelete (array of strings)
    // What types of actions that should result user talk page to be opened when speedily deleting (admin only)
    {
      name: "openUserTalkPageOnSpeedyDelete",
      label: uls("使用以下理由时打开用户讨论页", "使用以下理由時打開使用者討論頁"),
      adminOnly: true,
      type: "set",
      setValues: commonSets.csdAndDICriteria,
      setDisplayOrder: commonSets.csdAndDICriteriaDisplayOrder
    },
    // TwinkleConfig.deleteTalkPageOnDelete (boolean)
    // If talk page if exists should also be deleted (CSD G8) when spedying a page (admin only)
    {
      name: "deleteTalkPageOnDelete",
      label: uls("默认勾选“删除讨论页”", "預設勾選「刪除討論頁」"),
      adminOnly: true,
      type: "boolean"
    },
    {
      name: "deleteRedirectsOnDelete",
      label: uls("默认勾选“删除重定向”", "預設勾選「刪除重新導向」"),
      adminOnly: true,
      type: "boolean"
    },
    // TwinkleConfig.deleteSysopDefaultToDelete (boolean)
    // Make the CSD screen default to "delete" instead of "tag" (admin only)
    {
      name: "deleteSysopDefaultToDelete",
      label: uls("默认为直接删除而不是标记", "預設為直接刪除而不是標記"),
      helptip: uls("若已放置快速删除标记，则永远默认为删除模式。", "若已放置快速刪除標記，則永遠預設為刪除模式。"),
      adminOnly: true,
      type: "boolean"
    },
    // TwinkleConfig.speedyWindowWidth (integer)
    // Defines the width of the Twinkle SD window in pixels
    {
      name: "speedyWindowWidth",
      label: uls("快速删除对话框宽度（像素）", "快速刪除對話方塊寬度（像素）"),
      type: "integer"
    },
    // TwinkleConfig.speedyWindowWidth (integer)
    // Defines the width of the Twinkle SD window in pixels
    {
      name: "speedyWindowHeight",
      label: uls("快速删除对话框高度（像素）", "快速刪除對話方塊高度（像素）"),
      helptip: uls("若您有一台很大的显示器，您可以将此调高。", "若您有一台很大的顯示器，您可以將此調高。"),
      type: "integer"
    },
    {
      name: "logSpeedyNominations",
      label: uls("在用户空间中记录所有快速删除提名", "在使用者空間中記錄所有快速刪除提名"),
      helptip: uls("非管理员无法访问到已删除的贡献，用户空间日志提供了一个很好的方法来记录这些历史。", "非管理員無法存取到已刪除的貢獻，使用者空間日誌提供了一個很好的方法來記錄這些歷史。"),
      type: "boolean"
    },
    {
      name: "speedyLogPageName",
      label: uls("在此页保留日志", "在此頁保留日誌"),
      helptip: uls("在此框中输入子页面名称，您将在User:<i>用户名</i>/<i>子页面</i>找到CSD日志。仅在启用日志时工作。", "在此框中輸入子頁面名稱，您將在User:<i>使用者名稱</i>/<i>子頁面</i>找到CSD日誌。僅在啟用日誌時工作。"),
      type: "string"
    },
    {
      name: "noLogOnSpeedyNomination",
      label: uls("在使用以下理由时不做记录", "在使用以下理由時不做記錄"),
      type: "set",
      setValues: commonSets.csdAndDICriteria,
      setDisplayOrder: commonSets.csdAndDICriteriaDisplayOrder
    },
    {
      name: "enlargeG7Input",
      label: uls("扩大CSD G7的按钮", "擴大CSD G7的按鈕"),
      helptip: uls("扩为默认的两倍大。", "擴為預設的兩倍大。"),
      type: "boolean"
    }
  ]
}, {
  title: uls("标记", "標記"),
  module: "tag",
  preferences: [{
    name: "watchTaggedPages",
    label: uls("标记时加入到监视列表", "標記時加入到監視清單"),
    type: "enum",
    enumValues: watchlistEnums
  }, {
    name: "watchMergeDiscussions",
    label: uls("加入合并讨论时监视讨论页", "加入合併討論時監視討論頁"),
    type: "enum",
    enumValues: watchlistEnums
  }, {
    name: "markTaggedPagesAsMinor",
    label: uls("将标记标记为小修改", "將標記標記為小修改"),
    type: "boolean"
  }, {
    name: "markTaggedPagesAsPatrolled",
    label: uls("默认勾选“标记页面为已巡查”框", "預設勾選「標記頁面為已巡查」框"),
    type: "boolean"
  }, {
    name: "groupByDefault",
    label: uls("默认勾选“合并到{{multiple issues}}”复选框", "預設勾選「合併到{{multiple issues}}」核取方塊"),
    type: "boolean"
  }, {
    name: "tagArticleSortOrder",
    label: uls("条目标记的默认查看方式", "條目標記的預設檢視方式"),
    type: "enum",
    enumValues: {
      cat: uls("按类型", "按類別"),
      alpha: "按字母"
    }
  }, {
    name: "customTagList",
    label: uls("自定义条目维护标记", "自訂條目維護標記"),
    helptip: uls("这些会出现在列表的末尾。", "這些會出現在列表的末尾。"),
    type: "customList",
    customListValueTitle: uls("模板名（不含大括号）", "模板名（不含大括號）"),
    customListLabelTitle: uls("显示的文字", "顯示的文字")
  }, {
    name: "customFileTagList",
    label: uls("自定义文件维护标记", "自訂檔案維護標記"),
    helptip: uls("这些会出现在列表的末尾。", "這些會出現在列表的末尾。"),
    type: "customList",
    customListValueTitle: uls("模板名（不含大括号）", "模板名（不含大括號）"),
    customListLabelTitle: uls("显示的文字", "顯示的文字")
  }, {
    name: "customRedirectTagList",
    label: uls("自定义重定向维护标记", "自訂重新導向維護標記"),
    helptip: uls("这些会出现在列表的末尾。", "這些會出現在列表的末尾。"),
    type: "customList",
    customListValueTitle: uls("模板名（不含大括号）", "模板名（不含大括號）"),
    customListLabelTitle: uls("显示的文字", "顯示的文字")
  }]
}, {
  title: "小作品",
  module: "stub",
  preferences: [{
    name: "watchStubbedPages",
    label: uls("标记时加入到监视列表", "標記時加入到監視清單"),
    type: "boolean"
  }, {
    name: "markStubbedPagesAsMinor",
    label: uls("将小作品标记为小修改", "將小作品標記為小修改"),
    type: "boolean"
  }, {
    name: "markStubbedPagesAsPatrolled",
    label: uls("默认勾选“标记页面为已巡查”框", "預設勾選「標記頁面為已巡查」框"),
    type: "boolean"
  }, {
    name: "stubArticleSortOrder",
    label: uls("条目小作品的默认查看方式", "條目小作品的預設檢視方式"),
    type: "enum",
    enumValues: {
      cat: uls("按类型", "按類別"),
      alpha: "按字母"
    }
  }, {
    name: "customStubList",
    label: uls("自定义条目小作品标记", "自訂條目小作品標記"),
    helptip: uls("这些会出现在列表的末尾。", "這些會出現在列表的末尾。"),
    type: "customList",
    customListValueTitle: uls("模板名（不含大括号）", "模板名（不含大括號）"),
    customListLabelTitle: uls("显示的文字", "顯示的文字")
  }]
}, {
  title: "通告",
  module: "talkback",
  preferences: [{
    name: "markTalkbackAsMinor",
    label: uls("将通告标记为小修改", "將通告標記為小修改"),
    type: "boolean"
  }, {
    name: "insertTalkbackSignature",
    label: uls("通告时加入签名", "通告時加入簽名"),
    type: "boolean"
  }, {
    name: "talkbackHeading",
    label: uls("通告所用的小节标题", "通告所用的小節標題"),
    type: "string"
  }, {
    name: "mailHeading",
    label: uls("“有新邮件”所用的小节标题", "「有新郵件」所用的小節標題"),
    type: "string"
  }]
}, {
  title: uls("取消链入", "取消連入"),
  module: "unlink",
  preferences: [
    // TwinkleConfig.unlinkNamespaces (array)
    // In what namespaces unlink should happen, default in 0 (article) and 100 (portal)
    {
      name: "unlinkNamespaces",
      label: uls("取消以下命名空间中的反向链接", "取消以下命名空間中的反向連結"),
      helptip: uls("请避免选择讨论页，因这样会导致Twinkle试图修改讨论存档。", "請避免選擇討論頁，因這樣會導致Twinkle試圖修改討論存檔。"),
      type: "set",
      setValues: commonSets.namespacesNoSpecial
    }
  ]
}, {
  title: uls("警告用户", "警告使用者"),
  module: "warn",
  preferences: [
    // TwinkleConfig.defaultWarningGroup (int)
    // if true, watch the page which has been dispatched an warning or notice, if false, default applies
    {
      name: "defaultWarningGroup",
      label: uls("默认警告级别", "預設警告級別"),
      type: "enum",
      enumValues: {
        1: "1：注意",
        2: "2：警告",
        3: uls("单层级提醒", "單層級提醒"),
        4: uls("单层级警告", "單層級警告"),
        5: uls("自定义提醒或警告", "自訂提醒或警告"),
        6: "所有警告模板",
        7: uls("自动选择层级", "自動選擇層級")
        // 8 was used for block templates before #260
        // 9 was deprecated
        // 10 was deprecated
        // 11 was deprecated
      }
    },
    // TwinkleConfig.combinedSingletMenus (boolean)
    // if true, show one menu with both single-issue notices and warnings instead of two separately
    {
      name: "combinedSingletMenus",
      label: uls("将两个单层级菜单合并成一个", "將兩個單層級選單合併成一個"),
      helptip: uls("当启用此选项时，无论默认警告级别选择单层级通知或单层级警告皆属于此项。", "當啟用此選項時，無論預設警告級別選擇單層級通知或單層級警告皆屬於此項。"),
      type: "boolean"
    },
    // TwinkleConfig.watchWarnings (string)
    // Watchlist setting for the page which has been dispatched an warning or notice
    {
      name: "watchWarnings",
      label: uls("警告时加入用户讨论页到监视列表", "警告時加入使用者討論頁到監視清單"),
      type: "enum",
      enumValues: watchlistEnums
    },
    // TwinkleConfig.oldSelect (boolean)
    // if true, use the native select menu rather the jquery chosen-based one
    {
      name: "oldSelect",
      label: uls("使用不可搜索的经典菜单", "使用不可搜尋的經典選單"),
      type: "boolean"
    },
    {
      name: "customWarningList",
      label: uls("自定义警告模板", "自訂警告模板"),
      helptip: uls("您可以加入模板或用户子页面。自定义警告会出现在警告对话框中“自定义警告”一节。", "您可以加入模板或使用者子頁面。自訂警告會出現在警告對話方塊中「自訂警告」一節。"),
      type: "customList",
      customListValueTitle: uls("模板名（不含大括号）", "模板名（不含大括號）"),
      customListLabelTitle: uls("显示的文字（和编辑摘要）", "顯示的文字（和編輯摘要）")
    }
  ]
}, {
  title: uls("存废讨论", "存廢討論"),
  module: "xfd",
  preferences: [
    {
      name: "logXfdNominations",
      label: uls("在用户空间中记录所有存废讨论提名", "在使用者空間中記錄所有存廢討論提名"),
      helptip: uls("该日志供您追踪所有通过Twinkle提交的存废讨论", "該日誌供您追蹤所有透過Twinkle提交的存廢討論"),
      type: "boolean"
    },
    {
      name: "xfdLogPageName",
      label: uls("在此页保留日志", "在此頁保留日誌"),
      helptip: uls("在此框中输入子页面名称，您将在User:<i>用户名</i>/<i>子页面</i>找到XFD日志。仅在启用日志时工作。", "在此框中輸入子頁面名稱，您將在User:<i>使用者名稱</i>/<i>子頁面</i>找到XFD日誌。僅在啟用日誌時工作。"),
      type: "string"
    },
    {
      name: "noLogOnXfdNomination",
      label: uls("在使用以下理由时不做记录", "在使用以下理由時不做記錄"),
      type: "set",
      setValues: commonSets.xfdCriteria,
      setDisplayOrder: commonSets.xfdCriteriaDisplayOrder
    },
    // TwinkleConfig.xfdWatchPage (string)
    // The watchlist setting of the page being nominated for XfD.
    {
      name: "xfdWatchPage",
      label: uls("加入提名的页面到监视列表", "加入提名的頁面到監視清單"),
      type: "enum",
      enumValues: watchlistEnums
    },
    // TwinkleConfig.xfdWatchDiscussion (string)
    // The watchlist setting of the newly created XfD page (for those processes that create discussion pages for each nomination),
    // or the list page for the other processes.
    {
      name: "xfdWatchDiscussion",
      label: uls("加入存废讨论页到监视列表", "加入存廢討論頁到監視清單"),
      helptip: uls("当日的页面。", "當日的頁面。"),
      type: "enum",
      enumValues: watchlistEnums
    },
    // TwinkleConfig.xfdWatchUser (string)
    // The watchlist setting of the user talk page if they receive a notification.
    {
      name: "xfdWatchUser",
      label: uls("加入创建者讨论页到监视列表（在通知时）", "加入建立者討論頁到監視清單（在通知時）"),
      type: "enum",
      enumValues: watchlistEnums
    },
    {
      name: "markXfdPagesAsPatrolled",
      label: uls("标记时标记页面为已巡查（如可能）", "標記時標記頁面為已巡查（如可能）"),
      helptip: uls("基于技术原因，页面仅会在由Special:NewPages到达时被标记为已巡查。", "基於技術原因，頁面僅會在由Special:NewPages到達時被標記為已巡查。"),
      type: "boolean"
    },
    {
      name: "FwdCsdToXfd",
      label: uls("提删类型增加转交自快速删除候选", "提刪類別增加轉交自快速刪除候選"),
      helptip: uls("请确保您充分了解[[Qiuwen:快速删除方针]]才开启此功能。", "請確保您充分了解[[Qiuwen:快速刪除方針]]才開啟此功能。"),
      type: "boolean"
    },
    {
      name: "afdDefaultCategory",
      label: uls("默认提删类型", "預設提刪類別"),
      helptip: uls("若选择“相同于上次选择”将使用localStorage来记忆。", "若選擇「相同於上次選擇」將使用localStorage來記憶。"),
      type: "enum",
      enumValues: {
        delete: uls("删除", "刪除"),
        same: uls("相同于上次选择", "相同於上次選擇")
      }
    },
    {
      name: "afdFameDefaultReason",
      label: uls("默认关注度提删理由", "預設關注度提刪理由"),
      helptip: uls("用于批量提删。", "用於批次提刪。"),
      type: "string"
    },
    {
      name: "afdSubstubDefaultReason",
      label: uls("默认小小作品提删理由", "預設小小作品提刪理由"),
      helptip: uls("用于批量提删。", "用於批次提刪。"),
      type: "string"
    }
  ]
}, {
  title: uls("关闭存废讨论", "關閉存廢討論"),
  module: "close",
  preferences: [{
    name: "XfdClose",
    label: uls("在存废讨论显示关闭讨论按钮", "在存廢討論顯示關閉討論按鈕"),
    helptip: uls("请确保您充分了解[[Qiuwen:删除方针]]才开启此功能。", "請確保您充分了解[[Qiuwen:刪除方針]]才開啟此功能。"),
    type: "enum",
    enumValues: {
      hide: uls("不显示", "不顯示"),
      nonadminonly: uls("只包含非管理员可使用选项", "只包含非管理員可使用選項"),
      all: uls("显示所有选项", "顯示所有選項")
    }
  }]
}, {
  title: uls("侵犯著作权", "侵犯著作權"),
  module: "copyvio",
  preferences: [
    // TwinkleConfig.copyvioWatchPage (string)
    // The watchlist setting of the page being nominated for XfD.
    {
      name: "copyvioWatchPage",
      label: uls("加入提报的页面到监视列表", "加入提報的頁面到監視清單"),
      type: "enum",
      enumValues: watchlistEnums
    },
    // TwinkleConfig.copyvioWatchUser (string)
    // The watchlist setting of the user if he receives a notification.
    {
      name: "copyvioWatchUser",
      label: uls("加入创建者讨论页到监视列表（在通知时）", "加入建立者討論頁到監視清單（在通知時）"),
      type: "enum",
      enumValues: watchlistEnums
    },
    // TwinkleConfig.markCopyvioPagesAsPatrolled (boolean)
    // If, when applying copyvio template to page, to mark the page as patrolled (if the page was reached from NewPages)
    {
      name: "markCopyvioPagesAsPatrolled",
      label: uls("标记时标记页面为已巡查（如可能）", "標記時標記頁面為已巡查（如可能）"),
      helptip: uls("基于技术原因，页面仅会在由Special:NewPages到达时被标记为已巡查。", "基於技術原因，頁面僅會在由Special:NewPages到達時被標記為已巡查。"),
      type: "boolean"
    }
  ]
}, {
  title: uls("隐藏", "隱藏"),
  hidden: true,
  preferences: [
    // twinkle.js: portlet setup
    {
      name: "portletArea",
      type: "string"
    },
    {
      name: "portletId",
      type: "string"
    },
    {
      name: "portletName",
      type: "string"
    },
    {
      name: "portletType",
      type: "string"
    },
    {
      name: "portletNext",
      type: "string"
    },
    // twinklefluff.js: defines how many revision to query maximum, maximum possible is 50, default is 50
    {
      name: "revertMaxRevisions",
      type: "integer"
    },
    // twinklebatchdelete.js: How many pages should be processed maximum
    {
      name: "batchMax",
      type: "integer",
      adminOnly: true
    },
    // How many pages should be processed at a time by deprod and batchdelete/protect/undelete
    {
      name: "batchChunks",
      type: "integer",
      adminOnly: true
    }
  ]
}];
var init = () => {
  if (mw.config.get("wgPageName") === String(Twinkle.getPref("configPage")) && mw.config.get("wgAction") === "view") {
    if (!document.querySelector("#twinkle-config")) {
      return;
    }
    const contentdiv = document.querySelector("#twinkle-config-content");
    if (!contentdiv) {
      return;
    }
    contentdiv.textContent = "";
    const visibleSections = [];
    for (const section of sections) {
      if (section.hidden || section.adminOnly && !window.Morebits.userIsSysop) {
        continue;
      }
      visibleSections.push({
        title: section.title,
        ...section.module ? {
          module: section.module
        } : {},
        preferences: section.preferences.filter((pref) => {
          return !pref.adminOnly || window.Morebits.userIsSysop;
        })
      });
    }
    const initialValues = {};
    for (const section of visibleSections) {
      for (const pref of section.preferences) {
        const gotPref = Twinkle.getPref(pref.name);
        if (pref.type === "enum" && typeof gotPref === "boolean") {
          initialValues[pref.name] = gotPref ? "yes" : "no";
        } else {
          initialValues[pref.name] = gotPref;
        }
      }
    }
    const root = document.createElement("div");
    contentdiv.appendChild(root);
    void (async () => {
      try {
        const component = await getDialogComponent("TwConfigPanel");
        const app = (0, import_vue12.createApp)({
          render: () => {
            return (0, import_vue12.h)(component, {
              sections: visibleSections,
              allSections: sections,
              defaults: Twinkle.defaultConfig,
              initialValues
            });
          }
        });
        app.mount(root);
        if (window.location.hash) {
          const loc = window.location.hash;
          window.location.hash = "";
          window.location.hash = loc;
        }
      } catch {
        void mw.notify(uls("未能加载Twinkle参数设置面板", "未能載入Twinkle偏好設定面板"), {
          type: "error",
          tag: "twinkle"
        });
      }
    })();
  } else if (mw.config.get("wgNamespaceNumber") === mw.config.get("wgNamespaceIds")["user"] && mw.config.get("wgTitle").indexOf(mw.config.get("wgUserName") ?? "") === 0 && mw.config.get("wgPageName").slice(-3) === ".js") {
    const $body6 = $("body");
    const box = document.createElement("div");
    box.setAttribute("id", "twinkle-config-headerbox");
    let link;
    const scriptPageName = mw.config.get("wgPageName").slice(mw.config.get("wgPageName").lastIndexOf("/") + 1, mw.config.get("wgPageName").lastIndexOf(".js"));
    if (scriptPageName === "twinkleoptions") {
      box.setAttribute("class", "config-twopt-box");
      if (mw.config.get("wgArticleId") > 0) {
        box.appendChild(document.createTextNode(uls("这页包含您的Twinkle参数设置，您可使用", "這頁包含您的Twinkle偏好設定，您可使用")));
      } else {
        box.appendChild(document.createTextNode(uls("您可配置您的Twinkle，通过使用", "您可配置您的Twinkle，通過使用")));
      }
      link = document.createElement("a");
      link.setAttribute("href", mw.util.getUrl(String(Twinkle.getPref("configPage"))));
      link.appendChild(document.createTextNode(uls("Twinkle参数设置面板", "Twinkle偏好設定面板")));
      box.appendChild(link);
      box.appendChild(document.createTextNode(uls("，或直接编辑本页。", "，或直接編輯本頁。")));
      $(box).insertAfter($body6.find("#contentSub"));
    } else if (["vector", "vector-2022", "gongbi", "citizen", "common"].includes(scriptPageName)) {
      box.setAttribute("class", "config-userskin-box");
      box.appendChild(document.createTextNode(uls("若您想配置您的Twinkle，请使用", "若您想配置您的Twinkle，請使用")));
      link = document.createElement("a");
      link.setAttribute("href", mw.util.getUrl(String(Twinkle.getPref("configPage"))));
      link.appendChild(document.createTextNode(uls("Twinkle参数设置面板", "Twinkle偏好設定面板")));
      box.appendChild(link);
      box.appendChild(document.createTextNode("。"));
      $(box).insertAfter($body6.find("#contentSub"));
    }
  }
};
Twinkle.config = {
  watchlistEnums,
  commonSets,
  sections,
  init
};
Twinkle.addInitCallback(Twinkle.config.init);

})();

/* </nowiki> */

