/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js}
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-exlinks.js}
 * @base {@link https://meta.wikimedia.org/wiki/MediaWiki:Gadget-ShortLink.js}
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-workinprogress.js}
 * @base {@link https://www.mediawiki.org/wiki/Snippets/Load_JS_and_CSS_by_URL}
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-search-new-tab.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/SiteCommon_JS}
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

// dist/SiteCommon_JS/SiteCommon_JS.js
//! src/SiteCommon_JS/modules/core.ts
var import_ext_gadget = require("ext.gadget.Util");
var {
  wgAction,
  wgCanonicalSpecialPageName,
  wgNamespaceNumber,
  wgPageName,
  wgScript,
  wgUserName
} = mw.config.get();
var loadWithURL = async () => {
  const URL_WITH_CSS = mw.util.getParamValue("withCSS");
  const URL_WITH_JS = mw.util.getParamValue("withJS");
  const URL_WITH_MODULE = mw.util.getParamValue("withModule");
  if (URL_WITH_CSS || URL_WITH_JS || URL_WITH_MODULE) {
    if (URL_WITH_CSS && /^MediaWiki:[^#%&<=>]*\.css$/.test(URL_WITH_CSS)) {
      mw.loader.load(mw.util.getUrl(URL_WITH_CSS, {
        action: "raw",
        ctype: "text/css",
        maxage: "3600",
        smaxage: "3600"
      }), "text/css");
    }
    if (URL_WITH_JS || URL_WITH_MODULE) {
      const require2 = await mw.loader.using("ext.gadget.SiteCommon_JS");
      if (URL_WITH_JS && /^MediaWiki:[^#%&<=>]*\.js$/.test(URL_WITH_JS)) {
        mw.loader.load(mw.util.getUrl(URL_WITH_JS, {
          action: "raw",
          ctype: "text/javascript",
          maxage: "3600",
          smaxage: "3600"
        }));
      }
      if (URL_WITH_MODULE && /^(ext\.((?!(ext\.|[,|])).)*[,|]?)+$/.test(URL_WITH_MODULE)) {
        const modules = (0, import_ext_gadget.uniqueArray)(URL_WITH_MODULE.split(/[,|]/));
        mw.loader.load(modules);
      }
    }
  }
  const URL_USE = mw.util.getParamValue("use");
  if (URL_USE) {
    const wgUserNameExcaped = mw.util.escapeRegExp(wgUserName ?? "");
    const REGEX_FILE = new RegExp(`^(?:MediaWiki:${wgUserNameExcaped ? `|User:${wgUserNameExcaped}/` : ""})[^&<>=%#]*\\.(js|css)$`);
    const REGEX_EXT = /^ext\.[^,]+$/;
    const path = wgScript;
    const useFiles = URL_USE.split(/[,|]/);
    for (const useFile of useFiles) {
      const name = useFile.toString().trim();
      const what = REGEX_FILE.exec(name) ?? ["", ""];
      switch (what[1]) {
        case "css":
          mw.loader.load(`${path}?action=raw&ctype=text/css&title=${encodeURIComponent(name)}`);
          break;
        case "js": {
          const require2 = await mw.loader.using("ext.gadget.SiteCommon_JS");
          mw.loader.load(`${path}?action=raw&ctype=text/javascript&title=${encodeURIComponent(name)}`);
          break;
        }
        default:
          if (REGEX_EXT.test(name)) {
            const require2 = await mw.loader.using("ext.gadget.SiteCommon_JS");
            mw.loader.load(name);
          }
      }
    }
  }
};
var highLightRev = ($body) => {
  const URL_HIGHLIGHT = mw.util.getParamValue("highlight");
  const URL_HILIGHT = mw.util.getParamValue("hilight");
  const highlight = URL_HIGHLIGHT ?? URL_HILIGHT;
  if (!highlight || wgAction !== "history") {
    return;
  }
  for (const version of highlight.split(",")) {
    $body.find(`input[name=oldid][value=${version}]`).parent().addClass("not-patrolled");
  }
};
var addTargetBlank = ($body) => {
  const elements = $body.find('a.external, a[rel="mw:ExtLink"]');
  for (const element of elements) {
    if (!element.rel.includes("nofollow")) {
      continue;
    }
    element.target = "_blank";
    if (!element.rel.includes("noopener")) {
      element.rel += " noopener";
    }
    if (!element.rel.includes("noreferrer")) {
      element.rel += " noreferrer";
    }
  }
};
var removeTitleFromPermalink = ($body) => {
  var _$permaLinkFirstChild;
  const $permaLink = $body.find("#t-permalink");
  if (!$permaLink.length) {
    return;
  }
  const $permaLinkFirstChild = $permaLink.find(":first-child");
  const href = (_$permaLinkFirstChild = $permaLinkFirstChild.attr("href")) === null || _$permaLinkFirstChild === void 0 ? void 0 : _$permaLinkFirstChild.replace(/title=[^&]*&/, "");
  if (!href) {
    return;
  }
  $permaLinkFirstChild.attr("href", href);
};
var openSearchInNewTab = ($body) => {
  $body.find(["#search", "#searchbox", "#searchform", ".search-types", "#search-types"].join(",")).on("keydown keyup mousedown", (event) => {
    const {
      ctrlKey,
      metaKey,
      target
    } = event;
    $(target).attr("target", ctrlKey ?? metaKey ? "_blank" : "");
  });
};
var titleCleanUp = ($body) => {
  const URL_DIFF = mw.util.getParamValue("diff");
  if (URL_DIFF || wgAction !== "view" || ![6, 118].includes(wgNamespaceNumber)) {
    return;
  }
  const fullPageName = new mw.Title(wgPageName).getPrefixedText();
  const $firstHeading = $body.find(".firstHeading");
  const documentTitle = document.title;
  const pageTitle = $firstHeading.text();
  const replaceTitle = (title) => title.replace(pageTitle, fullPageName);
  document.title = replaceTitle(documentTitle);
  $firstHeading.text(replaceTitle(pageTitle));
};
var fixLocationHash = () => {
  if (location.hash) {
    location.href = location.hash;
  }
};
var hideNewUsersLog = ($body) => {
  if (wgCanonicalSpecialPageName !== "Log") {
    return;
  }
  const $newUsersLog = $body.find('input[name="wpfilters[]"][value=newusers]');
  $newUsersLog.prop({
    checked: false,
    disabled: true
  });
};
var toggleLink = ($body) => {
  var _$toggler$parent$;
  const $toggler = $body.find(".mw-collapsible-toggle, .gadget-collapsible-toggler");
  if (!$toggler.length) {
    return;
  }
  if ((_$toggler$parent$ = $toggler.parent()[0]) !== null && _$toggler$parent$ !== void 0 && _$toggler$parent$.style.color) {
    $toggler.find("a").css("color", "inherit");
  }
};
//! src/SiteCommon_JS/modules/tippy.ts
var import_ext_gadget2 = require("ext.gadget.Tippy");
var getContent = (reference) => {
  const label = reference.getAttribute("aria-label");
  const title = reference.getAttribute("alt") ?? reference.getAttribute("title");
  return (label === title ? label : title || label) || reference.textContent;
};
var onCreateCallback = (instance) => {
  const {
    reference
  } = instance;
  reference.setAttribute("aria-label", getContent(reference));
  reference.removeAttribute("title");
};
var onShowCallback = (instance) => {
  onCreateCallback(instance);
  instance.setContent(getContent(instance.reference));
};
var tippyForCitizenHeader = ($body) => {
  const {
    skin
  } = mw.config.get();
  if (skin !== "citizen") {
    return;
  }
  for (const element of $body.find([".citizen-header .citizen-dropdown-summary", ".citizen-header .citizen-echo-notification-badge", ".citizen-header__logo a", ".page-actions>nav>ul>li a", ".page-actions__button"].join(","))) {
    const $element = $(element);
    let title = $element.attr("title");
    if (!title) {
      continue;
    }
    title = title.replace(/\s*?\[.+?]$/, "");
    $element.attr({
      "aria-label": title,
      title: ""
    });
    (0, import_ext_gadget2.tippy)($element.get(0), {
      arrow: true,
      content: title,
      placement: "bottom",
      onCreate: onCreateCallback,
      onHidden: onCreateCallback,
      onShow: onShowCallback
    });
  }
};
var tippyForExtension = async () => {
  const {
    skin
  } = mw.config.get();
  if (skin === "vector-2022") {
    return;
  }
  await mw.loader.using("ext.CollapsibleSidebar.js");
  (0, import_ext_gadget2.tippy)("#sidebarButton", {
    arrow: true,
    content: getContent,
    placement: "left",
    onCreate: onCreateCallback,
    onHidden: onCreateCallback,
    onShow: onShowCallback
  });
  if (skin === "vector") {
    await mw.loader.using("ext.CollapsibleSidebar.vector");
    (0, import_ext_gadget2.tippy)("#sidebarCollapse", {
      arrow: true,
      content: getContent,
      placement: "right",
      onCreate: onCreateCallback,
      onHidden: onCreateCallback,
      onShow: onShowCallback
    });
  }
  await mw.loader.using("ext.DarkMode");
  (0, import_ext_gadget2.tippy)("#darkmode-button", {
    arrow: true,
    content: getContent,
    placement: "left",
    onCreate: onCreateCallback,
    onHidden: onCreateCallback,
    onShow: onShowCallback
  });
};
//! src/SiteCommon_JS/modules/clearExpiredLocalStorage.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var clearExpiredLocalStorage = async () => {
  while (true) {
    await mw.storage.clearExpired();
    await (0, import_ext_gadget3.delay)(60 * 1e3);
  }
};
//! src/SiteCommon_JS/modules/deprecatedFunctions.ts
var deprecatedFunctions = () => {
  /*!
   * maintenance: Some user scripts may be using the following deprecated functions.
   * These functions are no longer supported and should be updated.
   */
  mw.log.deprecate(window, "importScript", (title) => {
    return mw.loader.addScriptTag(mw.util.getUrl(title, {
      action: "raw",
      ctype: "text/javascript",
      maxage: "3600",
      smaxage: "3600"
    }));
  }, "Use mw.loader.addScriptTag() instead");
  mw.log.deprecate(window, "importStylesheet", (title) => {
    return mw.loader.addLinkTag(mw.util.getUrl(title, {
      action: "raw",
      ctype: "text/css",
      maxage: "3600",
      smaxage: "3600"
    }), "text/css");
  }, "Use mw.loader.addLinkTag() instead");
  mw.log.deprecate(window, "importScriptURI", (modules) => {
    return mw.loader.addScriptTag(mw.util.wikiUrlencode(modules));
  }, "Use mw.loader.addScriptTag() or mw.loader.getScript() instead");
  mw.log.deprecate(window, "importStylesheetURI", (modules) => {
    return mw.loader.addLinkTag(mw.util.wikiUrlencode(modules), "text/css");
  }, "Use mw.loader.addLinkTag() instead");
  mw.log.deprecate(
    window,
    // @ts-expect-error TS2345
    "importScriptCallback",
    (title, ready) => {
      void mw.loader.getScript(mw.util.getUrl(title, {
        action: "raw",
        ctype: "text/javascript",
        maxage: "3600",
        smaxage: "3600"
      })).then(ready);
    },
    "Use mw.loader.getScript() instead"
  );
  mw.log.deprecate(
    window,
    // @ts-expect-error TS2345
    "importScriptURICallback",
    (url, ready) => {
      void mw.loader.getScript(url).then(ready);
    },
    "Use mw.loader.getScript() instead"
  );
};
//! src/SiteCommon_JS/SiteCommon_JS.ts
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/SiteCommon_JS/modules/resizeJQueryUI.ts
var resizeJQueryUI = ($body) => {
  $(window).on("resize", () => {
    const windowWidth = $(window).width();
    const $jqueryUIDialog = $body.find(".ui-dialog");
    if ($jqueryUIDialog) {
      $jqueryUIDialog.css("max-width", `calc(${windowWidth}px - 2em)`);
    }
  });
};
//! src/SiteCommon_JS/SiteCommon_JS.ts
(function siteCommon() {
  const configKey = "gadget-SiteCommon_JS__Initialized";
  const {
    skin
  } = mw.config.get();
  if (mw.config.get(configKey)) {
    return;
  }
  mw.config.set(configKey, true);
  void loadWithURL();
  fixLocationHash();
  void (0, import_ext_gadget4.getBody)().then(($body) => {
    highLightRev($body);
    addTargetBlank($body);
    removeTitleFromPermalink($body);
    openSearchInNewTab($body);
    titleCleanUp($body);
    hideNewUsersLog($body);
    toggleLink($body);
    resizeJQueryUI($body);
    if (skin === "citizen") {
      tippyForCitizenHeader($body);
    }
  });
  deprecatedFunctions();
  void clearExpiredLocalStorage();
  if (!["vector-2022", "citizen"].includes(skin)) {
    void tippyForExtension();
  }
})();

})();

/* </nowiki> */

