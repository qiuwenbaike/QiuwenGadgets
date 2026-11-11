/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=ToolsRedirect|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title2=ToolsRedirect Messages|license2=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-msg-zh-hans.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-msg-zh-hant.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect/messages.js}
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

// dist/ToolsRedirect/ToolsRedirect.js
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/ToolsRedirect/ToolsRedirect.ts
var ToolsRedirect_exports = {};
__export(ToolsRedirect_exports, {
  findRedirectBySelector: () => findRedirectBySelector,
  findRedirectCallback: () => findRedirectCallback,
  setRedirectTextSuffix: () => setRedirectTextSuffix
});
module.exports = __toCommonJS(ToolsRedirect_exports);
//! src/ToolsRedirect/options.json
var apiTag = "ToolsRedirect";
var version = "2.0";
//! src/ToolsRedirect/modules/constant.ts
var SUFFIX_APPEND = 0;
var SUFFIX_REPLACE = 1;
var SUFFIX_SETDEFAULT = 2;
var VARIANTS = ["zh-hans", "zh-hant", "zh-cn", "zh-hk", "zh-mo", "zh-sg", "zh-my", "zh-tw"];
//! src/ToolsRedirect/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)(`ToolsRedirect/${version}`);
//! src/ToolsRedirect/modules/util/fixNamespace.ts
var fixNamespace = (title) => {
  const {
    wgNamespaceIds,
    wgNamespaceNumber: wgNamespaceNumber2,
    wgPageName: wgPageName2
  } = mw.config.get();
  const nsPrefixes = [];
  let nsCanonPrefix;
  let nsPrefixPattern;
  for (const [text, nsid] of Object.entries(wgNamespaceIds)) {
    if (nsid === wgNamespaceNumber2 && !!text) {
      nsPrefixes[nsPrefixes.length] = text;
    }
  }
  if (wgNamespaceNumber2 === 0) {
    nsCanonPrefix = "";
    nsPrefixPattern = /^/;
  } else {
    nsCanonPrefix = `${wgPageName2.split(":")[0]}:`;
    nsPrefixPattern = new RegExp(`^(${nsPrefixes.join("|")}):`, "i");
  }
  if (wgNamespaceNumber2 === 0) {
    return title;
  } else if (nsPrefixPattern.test(title)) {
    return title.replace(nsPrefixPattern, nsCanonPrefix);
  }
  return nsCanonPrefix + title;
};
//! src/ToolsRedirect/modules/util/getMessage.ts
var getMessage = (key, ...args) => {
  const fullKey = `toolsredirect-${key}`;
  return args.length ? mw.message(fullKey, ...args).parse() : mw.message(fullKey).plain();
};
//! src/ToolsRedirect/modules/core.ts
var {
  wgNamespaceNumber,
  wgPageName
} = mw.config.get();
var IS_CATEGORY = wgNamespaceNumber === 14;
var findRedirectCallbacks = [];
var pageWithRedirectTextSuffix = {};
var redirectExcludes = {};
var findRedirectCallback = function(callback, ...args) {
  if (callback) {
    findRedirectCallbacks[findRedirectCallbacks.length] = callback;
  } else {
    findRedirectCallbacks = findRedirectCallbacks.concat(callback, ...args);
  }
  return this;
};
var findRedirectBySelector = function(selector) {
  findRedirectCallbacks[findRedirectCallbacks.length] = () => {
    return $(selector).map((_index, element) => {
      return $(element).eq(0).text().trim();
    });
  };
  return this;
};
var setRedirectTextSuffix = (title, suffix, flag) => {
  let flag_set = false;
  let flag_append = false;
  flag || (flag = SUFFIX_APPEND);
  flag_set = flag === SUFFIX_REPLACE;
  title = fixNamespace(title);
  if (title in pageWithRedirectTextSuffix) {
    flag_append = flag === SUFFIX_APPEND;
  } else {
    flag_set = true;
  }
  if (flag_set) {
    pageWithRedirectTextSuffix[title] = [].concat(suffix);
  } else if (flag_append) {
    pageWithRedirectTextSuffix[title] = (pageWithRedirectTextSuffix[title] ?? []).concat(suffix);
  }
};
var ToolsRedirect = {
  variants: VARIANTS,
  init($body, onOpen) {
    const button = $("<li>").addClass("mw-list-item collapsible vector-tab-noicon").attr("id", "ca-redirect").css("cursor", "pointer").append($("<a>").attr("title", getMessage("btndesc")).text(getMessage("btntitle")));
    button.on("click", (event) => {
      event.preventDefault();
      onOpen();
    });
    $body.find("li#ca-history").after(button);
  },
  attachContainers(viewContainer, createContainer) {
    this.tabs.view = {
      cont: $(viewContainer),
      loaded: false
    };
    this.tabs.create = {
      cont: $(createContainer),
      loaded: false
    };
  },
  tabs: {
    view: {
      cont: $(),
      loaded: false
    },
    create: {
      cont: $(),
      loaded: false
    }
  },
  fix(pagenames) {
    const self = this;
    $("p.desc", self.tabs.view.cont).text(getMessage("fixloading"));
    $("p[class!=desc]", self.tabs.view.cont).remove();
    self.loading(self.tabs.view.cont);
    void self.bulkEditByRegex(pagenames, /\s*\[\[.*?(#.*?)?\]\]/, ` [[${wgPageName}$1]]`, getMessage("fixsummary")).then(() => {
      setTimeout(() => {
        self.loaded(self.tabs.view.cont);
        self.loadView(true);
      }, 3e3);
    });
  },
  create(pagenames) {
    const self = this;
    $("p.desc", self.tabs.create.cont).text(getMessage("createloading"));
    $("p[class!=desc]", self.tabs.create.cont).remove();
    self.loading(self.tabs.create.cont);
    void self.bulkEdit(pagenames, getMessage(IS_CATEGORY ? "createtext-category" : "createtext").replace("$1", wgPageName), getMessage("createsummary").replace("$1", wgPageName)).then(() => {
      setTimeout(() => {
        self.loaded(self.tabs.create.cont);
        self.tabs.view.loaded = false;
        self.loadCreate(true);
      }, 500);
    });
  },
  addRedirectTextSuffix(title, text) {
    if (title in pageWithRedirectTextSuffix) {
      text += `
${[...new Set(pageWithRedirectTextSuffix[title] ?? [])].join("\n")}`;
    }
    return text;
  },
  bulkEdit(titles, text, summary) {
    const self = this;
    titles = titles.filter((v, i, arr) => {
      return arr.indexOf(v) === i;
    });
    return api.post({
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "info",
      titles
    }).then(({
      query
    }) => {
      const deferreds = [];
      for (const {
        title
      } of query.pages) {
        deferreds[deferreds.length] = api.postWithToken("csrf", {
          action: "edit",
          format: "json",
          formatversion: "2",
          title,
          text: self.addRedirectTextSuffix(title, text),
          summary,
          tags: apiTag
        });
      }
      return $.when(...deferreds);
    });
  },
  bulkEditByRegex(titles, regex, text, summary) {
    titles = titles.filter((v, i, arr) => {
      return arr.indexOf(v) === i;
    });
    return api.post({
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "revisions",
      rvprop: "content",
      rvslots: "main",
      titles
    }).then(({
      query
    }) => {
      const deferreds = [];
      for (const page of query.pages) {
        const {
          content
        } = page.revisions[0].slots["main"];
        const newContent = content.replace(regex, text);
        deferreds[deferreds.length] = api.postWithToken("csrf", {
          action: "edit",
          format: "json",
          formatversion: "2",
          title: page.title,
          text: newContent,
          tags: apiTag,
          basetimestamp: page.revisions[0].timestamp,
          summary
        });
      }
      return $.when(...deferreds);
    });
  },
  loadTabCont(tabname, callback, reload) {
    const self = this;
    const tab = self.tabs[tabname];
    if (reload) {
      tab.loaded = false;
    }
    if (!tab.loaded) {
      tab.cont.html("");
      const $desc = $("<p>").addClass("desc").append($("<span>").addClass("desc-text").text(getMessage("rediloading"))).appendTo(tab.cont);
      const $text = $desc.find("> .desc-text");
      callback.apply(self).done(() => {
        $text.text(getMessage(`tab${tabname}desc`));
      }).fail(() => {
        $text.text(getMessage(`tab${tabname}notfound`));
      }).always(() => {
        self.addMethods($desc, [{
          href: "#refresh",
          title: getMessage("refresh"),
          click(event) {
            event.preventDefault();
            self.loadTabCont(tabname, callback, true);
          }
        }]);
      });
      tab.loaded = true;
    }
  },
  loading(container) {
    if (container.prop("tagName").toLowerCase() === "span") {
      container.addClass("mw-ajax-loader");
    } else if ($("span.mw-ajax-loader", container).length === 0) {
      $("<span>").addClass("mw-ajax-loader").appendTo(container);
    }
  },
  loaded(container) {
    if (container.prop("tagName").toLowerCase() === "span") {
      container.removeClass("mw-ajax-loader");
    } else {
      $("span.mw-ajax-loader", container).remove();
    }
  },
  selectAll(cont) {
    $("input[type=checkbox]:not(:disabled)", cont).prop("checked", true);
  },
  selectInverse(cont) {
    $("input[type=checkbox]:not(:disabled)", cont).each((_index, element) => {
      const $element = $(element);
      $element.prop("checked", !$element.prop("checked"));
    });
  },
  selectAction(cont, cb) {
    const pagenames = [];
    $("input[type=checkbox]:checked", cont).each((_index, pagename) => {
      pagenames[pagenames.length] = $(pagename).data("page-title");
    });
    if (pagenames.length > 0) {
      cb.call(this, pagenames);
    }
  },
  clickAction(cont, cb) {
    const pagename = $('input[type="checkbox"]', cont).data("page-title");
    cb.call(this, [pagename]);
  },
  buildLink({
    title,
    href,
    click,
    classname
  }) {
    const a = $("<a>").attr({
      title,
      href,
      target: "_blank",
      rel: ["noopener", "noreferrer"].join(" ")
    }).text(title);
    if (click) {
      a.on("click", click);
    }
    if (classname) {
      a.addClass(classname);
    }
    return $("<span>").addClass("tools-redirect_link").append(a);
  },
  addMethods($parent, methods) {
    const self = this;
    let $container = $parent.find("> .tools-redirect_methods");
    const methodExist = ({
      href
    }) => {
      return $container.find(`a[href=${JSON.stringify(href)}]`).length > 0;
    };
    if ($container.length === 0) {
      $container = $("<span>").addClass("tools-redirect_methods").appendTo($parent);
    }
    for (const method of methods) {
      if (!methodExist(method)) {
        self.buildLink(method).appendTo($container);
      }
    }
  },
  buildSelection(main, metd, mt, dsab) {
    const cont = $("<span>");
    const sele = $("<input>").attr("type", "checkbox").appendTo(cont);
    this.buildLink(main).appendTo(cont);
    this.addMethods(cont, metd);
    sele.data("page-title", mt);
    if (dsab) {
      sele.prop("disabled", "disabled");
    }
    return cont;
  },
  loadView(reload) {
    const $container = this.tabs.view.cont;
    this.loadTabCont("view", () => {
      return this.loadRedirect(wgPageName, $container, 0);
    }, reload);
  },
  loadCreate(reload) {
    this.loadTabCont("create", () => {
      return this.findRedirect(wgPageName);
    }, reload);
  },
  loadRedirect(pagename, container, deep, loaded) {
    this.loading(container);
    const self = this;
    const deferred = $.Deferred();
    const top = deep ? $("<dl>").appendTo(container) : container;
    if (!loaded) {
      loaded = {};
      loaded[pagename] = true;
    }
    const onClickFix = (event) => {
      const entry = $(this).parents("dd, p").first();
      event.preventDefault();
      self.clickAction(entry, this.fix);
    };
    void api.post({
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "redirects",
      titles: pagename,
      rdlimit: "max"
    }).then(({
      query
    }) => {
      self.loaded(container);
      let has_redirect = false;
      const desc = $("p.desc", self.tabs.view.cont);
      const maximumRedirectDepth = 10;
      for (const page of query.pages) {
        if (page.redirects) {
          const {
            redirects
          } = page;
          for (const {
            title
          } of redirects) {
            const rdtitle = title;
            const ultitle = rdtitle.replace(/ /g, "_");
            const entry = (deep ? $("<dd>") : $("<p>")).appendTo(top);
            const methods = [{
              href: mw.util.getUrl(ultitle, {
                action: "edit"
              }),
              title: getMessage("rediedit")
            }];
            const isCycleRedirect = rdtitle in loaded;
            loaded[rdtitle] = true;
            if (!isCycleRedirect && deep) {
              methods[methods.length] = {
                href: "#fix-redirect",
                title: getMessage("tabviewfix"),
                click: onClickFix
              };
            }
            const $container = self.buildSelection({
              href: mw.util.getUrl(ultitle, {
                redirect: "no"
              }),
              title: rdtitle
            }, methods, ultitle, !deep).appendTo(entry);
            if (isCycleRedirect) {
              $container.append(`<span class="error">${getMessage("errcycleredirect")}</span>`);
            } else if (deep < maximumRedirectDepth) {
              void deferred.then(() => {
                return self.loadRedirect(rdtitle, entry, deep + 1, loaded);
              });
            }
            has_redirect = true;
          }
        } else {
          has_redirect = false;
        }
      }
      if (has_redirect && deep === 1) {
        self.addMethods(desc, [{
          href: "#select-all",
          title: getMessage("selectall"),
          click(event) {
            event.preventDefault();
            self.selectAll(self.tabs.view.cont);
          }
        }, {
          href: "#select-inverse",
          title: getMessage("selectinverse"),
          click(event) {
            event.preventDefault();
            self.selectInverse(self.tabs.view.cont);
          }
        }, {
          href: "#fix-selected",
          title: getMessage("tabviewfix"),
          click(event) {
            event.preventDefault();
            self.selectAction(self.tabs.view.cont, self.fix);
          }
        }]);
      }
      if (has_redirect) {
        void deferred.resolveWith(self);
      } else {
        void deferred.rejectWith(self);
      }
    });
    return deferred.promise();
  },
  findVariants(pagename, titles) {
    const self = this;
    const suffixReg = /^.+?((（|[ _]\().+?([)）]))$/;
    let retTitles = [];
    const deferreds = [];
    for (const variant of VARIANTS) {
      const xhr = api.post({
        action: "parse",
        format: "json",
        formatversion: "2",
        page: pagename,
        prop: "displaytitle",
        uselang: variant,
        variant
      }).then(({
        parse
      }) => {
        const {
          displaytitle
        } = parse;
        let title = $("<span>").append(displaytitle).eq(0).text().trim();
        title = fixNamespace(title);
        setRedirectTextSuffix(title, "{{简繁重定向}}", SUFFIX_APPEND);
        return title;
      });
      deferreds[deferreds.length] = xhr;
    }
    return $.when(...deferreds).then((...args) => {
      const suffixes = [];
      for (const title of args) {
        let suffix;
        const suffixArr = suffixReg.exec(title);
        if (suffixArr && suffixArr.length === 2) {
          [, suffix] = suffixArr;
        } else {
          suffix = "";
        }
        retTitles[retTitles.length] = title;
        suffixes[suffixes.length] = suffix;
      }
      for (const suffix of new Set(suffixes)) {
        retTitles = [...retTitles, ...titles.map((title) => {
          const modifiedTitle = fixNamespace(title);
          return suffixReg.test(modifiedTitle) ? modifiedTitle : modifiedTitle + suffix;
        })];
      }
      return self.findNotExists([...new Set(retTitles)]);
    });
  },
  findNotExists(titles) {
    const deferreds = [];
    const excludes = ["用字模式"];
    let alltitles = [];
    for (const variant of VARIANTS) {
      deferreds[deferreds.length] = api.get({
        action: "parse",
        format: "json",
        formatversion: "2",
        text: titles,
        prop: "text",
        title: "MediaWiki:Gadget-ToolsRedirect.js/-",
        contentmodel: "wikitext",
        uselang: variant,
        variant
      }).then(({
        parse
      }) => {
        return $(parse.text).text().trim().split("|");
      });
    }
    return $.when(...deferreds).then((...titlesArr) => {
      for (const titles2 of titlesArr) {
        alltitles = [...alltitles].concat(titles2);
      }
      alltitles = alltitles.filter((v, i, arr) => {
        return arr.indexOf(v) === i;
      });
      return api.post({
        action: "query",
        format: "json",
        formatversion: "2",
        prop: "info",
        titles: alltitles
      }).then(({
        query
      }) => {
        titles = [];
        for (const page of query.pages) {
          const {
            title
          } = page;
          if (page.missing && !excludes.includes(title)) {
            if (title in redirectExcludes) {
              return [];
            }
            titles[titles.length] = title;
            setRedirectTextSuffix(title, "{{别名重定向}}", SUFFIX_SETDEFAULT);
          }
        }
        return titles;
      });
    });
  },
  findRedirect(pagename) {
    const self = this;
    const frcDeferreds = [];
    const container = self.tabs.create.cont;
    const $body = $("body");
    const $content = $body.find("#mw-content-text > div.mw-parser-output");
    const deferred = $.Deferred();
    let titles = [];
    self.loading(container);
    for (const callback of findRedirectCallbacks) {
      const ret = callback(pagename, $content, titles);
      if (typeof ret === "string") {
        titles[titles.length] = ret;
      } else if ("done" in ret) {
        frcDeferreds[frcDeferreds.length] = ret;
      } else {
        titles = [.../* @__PURE__ */ new Set([...titles, ...ret])];
      }
    }
    titles = titles.map((title) => title || "").filter(Boolean);
    const onClickCreate = function(event) {
      const entry = $(this).parents("p:first");
      event.preventDefault();
      self.clickAction(entry, self.create);
    };
    void $.when(...frcDeferreds).then((...responses) => {
      for (const ret of responses) {
        if (typeof ret === "string") {
          titles[titles.length] = ret;
        } else {
          titles = [.../* @__PURE__ */ new Set([...titles, ...ret])];
        }
      }
      return self.findVariants(pagename, titles);
    }).then((fvtitles) => {
      self.loaded(container);
      for (const title of fvtitles) {
        const ultitle = title.replace(" ", "_");
        const entry = $("<p>").appendTo(container);
        self.buildSelection({
          href: mw.util.getUrl(ultitle, {
            action: "edit",
            redlink: "1"
          }),
          title,
          classname: "new"
        }, [{
          href: "#create-redirect",
          title: getMessage("tabcreatetitle"),
          click: onClickCreate
        }], ultitle, false).appendTo(entry);
      }
      const desc = $("p.desc", container);
      if (fvtitles.length > 0) {
        self.addMethods(desc, [{
          href: "#select-all",
          title: getMessage("selectall"),
          click(event) {
            event.preventDefault();
            self.selectAll(container);
          }
        }, {
          href: "#select-inverse",
          title: getMessage("selectinverse"),
          click(event) {
            event.preventDefault();
            self.selectInverse(container);
          }
        }, {
          href: "#create-selected",
          title: getMessage("tabcreatetitle"),
          click(event) {
            event.preventDefault();
            self.selectAction(container, self.create);
          }
        }]);
        void deferred.resolveWith(self, [fvtitles]);
      } else {
        void deferred.rejectWith(self, [fvtitles]);
      }
    });
    return deferred.promise();
  }
};
//! src/ToolsRedirect/ToolsRedirect.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/ToolsRedirect/modules/ui.ts
var import_vue4 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var import_vue2 = require("vue");
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "App",
  props: {
    controller: {
      type: null,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    const props = __props;
    const isOpen = (0, import_vue2.ref)(false);
    const activeTab = (0, import_vue2.ref)("view");
    const viewContainer = (0, import_vue2.ref)();
    const createContainer = (0, import_vue2.ref)();
    const open = () => {
      isOpen.value = true;
    };
    __expose({
      open
    });
    const loadTab = async (tab, reload = false) => {
      await (0, import_vue2.nextTick)();
      if (!viewContainer.value || !createContainer.value) {
        return;
      }
      props.controller.attachContainers(viewContainer.value, createContainer.value);
      if (tab === "view") {
        props.controller.loadView(reload);
      } else {
        props.controller.loadCreate(reload);
      }
    };
    (0, import_vue2.watch)(activeTab, (tab) => {
      void loadTab(tab);
    });
    (0, import_vue2.watch)(isOpen, (open2) => {
      if (open2) {
        void loadTab(activeTab.value);
      }
    });
    const __returned__ = {
      props,
      isOpen,
      activeTab,
      viewContainer,
      createContainer,
      open,
      loadTab,
      get CdxButton() {
        return import_codex.CdxButton;
      },
      get CdxDialog() {
        return import_codex.CdxDialog;
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
var import_vue3 = require("vue");
var _hoisted_1 = {
  class: "tools-redirect-tabs",
  role: "tablist"
};
var _hoisted_2 = {
  ref: "viewContainer",
  class: "dialog-redirect tab-redirect",
  role: "tabpanel"
};
var _hoisted_3 = {
  ref: "createContainer",
  class: "dialog-redirect tab-redirect",
  role: "tabpanel"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxDialog"], {
    open: $setup.isOpen,
    "onUpdate:open": _cache[2] || (_cache[2] = ($event) => $setup.isOpen = $event),
    title: $setup.getMessage("dlgtitle"),
    "use-close-button": true
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createElementVNode)("div", _hoisted_1, [(0, import_vue3.createVNode)($setup["CdxButton"], {
      weight: $setup.activeTab === "view" ? "primary" : "quiet",
      role: "tab",
      "aria-selected": $setup.activeTab === "view",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.activeTab = "view")
    }, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
        (0, import_vue3.toDisplayString)($setup.getMessage("tabviewtitle")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["weight", "aria-selected"]), (0, import_vue3.createVNode)($setup["CdxButton"], {
      weight: $setup.activeTab === "create" ? "primary" : "quiet",
      role: "tab",
      "aria-selected": $setup.activeTab === "create",
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.activeTab = "create")
    }, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
        (0, import_vue3.toDisplayString)($setup.getMessage("tabcreatetitle")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["weight", "aria-selected"])]), (0, import_vue3.withDirectives)((0, import_vue3.createElementVNode)(
      "div",
      _hoisted_2,
      null,
      512
      /* NEED_PATCH */
    ), [[import_vue3.vShow, $setup.activeTab === "view"]]), (0, import_vue3.withDirectives)((0, import_vue3.createElementVNode)(
      "div",
      _hoisted_3,
      null,
      512
      /* NEED_PATCH */
    ), [[import_vue3.vShow, $setup.activeTab === "create"]])]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title"]);
}
//! src/ToolsRedirect/App.vue
App_default.render = render;
App_default.__file = "src\\ToolsRedirect\\App.vue";
App_default.__scopeId = "data-v-59c8339e";
var App_default2 = App_default;
//! src/ToolsRedirect/modules/ui.ts
var mountToolsRedirect = (controller) => {
  const root = document.createElement("div");
  document.body.append(root);
  const app = (0, import_vue4.createApp)(App_default2, {
    controller
  });
  const instance = app.mount(root);
  return instance;
};
//! src/ToolsRedirect/modules/messages.ts
var {
  wgUserLanguage
} = mw.config.get();
var setMessages = () => {
  const DEFAULT_MESSAGES_HANS = {
    "toolsredirect-btntitle": "重定向",
    "toolsredirect-btndesc": "创建和管理此页面的重定向",
    "toolsredirect-dlgtitle": "创建和管理重定向",
    "toolsredirect-rediloading": "数据加载中，请稍候……",
    "toolsredirect-rediedit": "编辑",
    "toolsredirect-selectall": "全选",
    "toolsredirect-selectinverse": "反选",
    "toolsredirect-tabviewtitle": "查看",
    "toolsredirect-tabviewdesc": "以下是指向此页面的重定向页：",
    "toolsredirect-tabviewnotfound": "没有找到任何指向此页面的重定向页。",
    "toolsredirect-tabviewmulti": "多重",
    "toolsredirect-tabviewfix": "修复",
    "toolsredirect-fixloading": "请稍候，正在自动修复重定向……",
    "toolsredirect-fixtext": "#REDIRECT [[$1]]",
    "toolsredirect-fixsummary": "编辑工具：修复多重重定向",
    "toolsredirect-tabcreatetitle": "创建",
    "toolsredirect-tabcreatedesc": "以下是尚未创建的重定向页：",
    "toolsredirect-tabcreatenotfound": "没有找到可以创建的重定向页。",
    "toolsredirect-tabcreateall": "全部创建",
    "toolsredirect-createloading": "请稍候，正在自动创建重定向……",
    "toolsredirect-createtext": "#REDIRECT [[$1]]",
    "toolsredirect-createtext-category": "{{分类重定向|$1}}",
    "toolsredirect-createsummary": "编辑工具：自动创建重定向到[[$1]]",
    "toolsredirect-errcycleredirect": "无法自动修复：发现循环重定向",
    "toolsredirect-refresh": "刷新"
  };
  const DEFAULT_MESSAGES_HANT = {
    "toolsredirect-btntitle": "重新導向",
    "toolsredirect-btndesc": "創建和管理此頁面的重新導向",
    "toolsredirect-dlgtitle": "創建和管理重新導向",
    "toolsredirect-rediloading": "數據加載中，請稍候……",
    "toolsredirect-rediedit": "編輯",
    "toolsredirect-selectall": "全選",
    "toolsredirect-selectinverse": "反選",
    "toolsredirect-tabviewtitle": "查看",
    "toolsredirect-tabviewdesc": "以下是指向此頁面的重新導向頁：",
    "toolsredirect-tabviewnotfound": "沒有找到任何指向此頁面的重新導向頁。",
    "toolsredirect-tabviewmulti": "多重",
    "toolsredirect-tabviewfix": "修復",
    "toolsredirect-fixloading": "請稍候，正在自動修復重新導向……",
    "toolsredirect-fixtext": "#REDIRECT [[$1]]",
    "toolsredirect-fixsummary": "編輯工具：修復多重重新導向",
    "toolsredirect-tabcreatetitle": "創建",
    "toolsredirect-tabcreatedesc": "以下是尚未創建的重新導向頁：",
    "toolsredirect-tabcreatenotfound": "沒有找到可以創建的重新導向頁。",
    "toolsredirect-tabcreateall": "全部創建",
    "toolsredirect-createloading": "請稍候，正在自動創建重新導向……",
    "toolsredirect-createtext": "#REDIRECT [[$1]]",
    "toolsredirect-createtext-category": "{{分类重定向|$1}}",
    "toolsredirect-createsummary": "編輯工具：自動創建重新導向到[[$1]]",
    "toolsredirect-errcycleredirect": "無法自動修復：發現循環重新導向",
    "toolsredirect-refresh": "刷新"
  };
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(wgUserLanguage)) {
    mw.messages.set(DEFAULT_MESSAGES_HANT);
  } else {
    mw.messages.set(DEFAULT_MESSAGES_HANS);
  }
};
//! src/ToolsRedirect/ToolsRedirect.ts
setMessages();
void (0, import_ext_gadget2.getBody)().then(($body) => {
  const {
    open
  } = mountToolsRedirect(ToolsRedirect);
  ToolsRedirect.init($body, open);
});

})();

/* </nowiki> */

