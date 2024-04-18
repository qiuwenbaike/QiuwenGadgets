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
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=ToolsRedirect-bio-latin-names|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/Special:Permalink/61193369}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect/bio-latin-names.js}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=ToolsRedirect-opt-bolds|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-opt-bolds.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect/opt-bolds.js}
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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
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
var api = (0, import_ext_gadget.initMwApi)("ToolsRedirect/".concat(version));
//! src/ToolsRedirect/modules/core.js
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/ToolsRedirect/modules/util/getMessage.ts
var getMessage = (key, ...args) => {
  const fullKey = "toolsredirect-".concat(key);
  return args.length ? mw.message(fullKey, ...args).parse() : mw.message(fullKey).plain();
};
//! src/ToolsRedirect/modules/core.js
var {
  wgNamespaceIds,
  wgNamespaceNumber,
  wgPageName
} = mw.config.get();
var IS_CATEGORY = wgNamespaceNumber === 14;
var findRedirectCallbacks = [];
var pageWithRedirectTextSuffix = {};
var redirectExcludes = {};
var nsPrefixes = [];
var nsCanonPrefix;
var nsPrefixPattern;
for (_i = 0, _Object$entries = Object.entries(wgNamespaceIds); _i < _Object$entries.length; _i++) {
  const [text, nsid] = _Object$entries[_i];
  if (nsid === wgNamespaceNumber && !!text) {
    nsPrefixes[nsPrefixes.length] = text;
  }
}
var _i;
var _Object$entries;
if (wgNamespaceNumber === 0) {
  nsCanonPrefix = "";
  nsPrefixPattern = /^/;
} else {
  nsCanonPrefix = "".concat(wgPageName.split(":")[0], ":");
  nsPrefixPattern = new RegExp("^(".concat(nsPrefixes.join("|"), "):"), "i");
}
var fixNamespace = (title) => {
  if (wgNamespaceNumber === 0) {
    return title;
  } else if (nsPrefixPattern.test(title)) {
    return title.replace(nsPrefixPattern, nsCanonPrefix);
  }
  return nsCanonPrefix + title;
};
var findRedirectCallback = function(callback, ...args) {
  if (callback) {
    findRedirectCallbacks[findRedirectCallbacks.length] = callback;
  } else {
    findRedirectCallbacks = (0, import_ext_gadget2.generateArray)(findRedirectCallbacks, callback, ...args);
  }
  return this;
};
var findRedirectBySelector = function(selector) {
  findRedirectCallbacks[findRedirectCallbacks.length] = () => {
    return $(selector).map((_index, element) => {
      return $(element).eq(0).text().trim() || null;
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
    pageWithRedirectTextSuffix[title] = (0, import_ext_gadget2.generateArray)(suffix);
  } else if (flag_append) {
    pageWithRedirectTextSuffix[title] = (0, import_ext_gadget2.generateArray)(pageWithRedirectTextSuffix[title], suffix);
  }
};
var ToolsRedirect = {
  tabselem: null,
  tagselem: null,
  variants: VARIANTS,
  init($body) {
    const self = this;
    const button = $("<li>").addClass("mw-list-item collapsible vector-tab-noicon").attr("id", "ca-redirect").css("cursor", "pointer").append($("<a>").attr("title", getMessage("btndesc")).text(getMessage("btntitle")));
    button.on("click", (event) => {
      event.preventDefault();
      self.dialog();
    });
    $body.find("li#ca-history").after(button);
  },
  dialog() {
    const dialog = $("<div>").attr("title", getMessage("dlgtitle")).addClass("dialog-redirect").dialog({
      bgiframe: true,
      resizable: false,
      modal: true,
      width: Math.round($(window).width() * 0.8),
      position: "center"
    });
    dialog.css("max-height", "".concat(Math.round($(window).height() * 0.8), "px"));
    this.tabselem = $("<div>").addClass("tab-redirect").appendTo(dialog);
    this.tagselem = $("<ul>").appendTo(this.tabselem);
    this.addTabs();
    this.tabselem.tabs();
  },
  addTabs() {
    for (const kname in this.tabs) {
      if (Object.hasOwn(this.tabs, kname)) {
        if (this.tabs[kname] === null) {
          this.tabs[kname] = this["_initTab".concat(kname[0].charAt(0).toUpperCase()).concat(kname.slice(1))]();
        }
        const tab = this.tabs[kname];
        this.tagselem.append(tab.tag);
        this.tabselem.append(tab.cont);
      }
    }
    this.loadView();
  },
  createTab(tabname, tabtitle, onClick) {
    const self = this;
    const tag = $("<li>").append($("<a>").attr("href", "#tab-".concat(tabname)).text(tabtitle));
    const cont = $("<div>").attr("id", "tab-".concat(tabname));
    $("a", tag).on("click", () => {
      onClick.call(self);
    });
    return {
      tag,
      cont,
      loaded: false
    };
  },
  _initTabView() {
    return this.createTab("view", getMessage("tabviewtitle"), this.loadView);
  },
  _initTabCreate() {
    return this.createTab("create", getMessage("tabcreatetitle"), this.loadCreate);
  },
  tabs: {
    view: null,
    create: null
  },
  fix(pagenames) {
    const self = this;
    $("p.desc", self.tabs.view.cont).text(getMessage("fixloading"));
    $("p[class!=desc]", self.tabs.view.cont).remove();
    self.loading(self.tabs.view.cont);
    void self.bulkEditByRegex(pagenames, /\s*\[\[.*?\]\]/, " [[".concat(wgPageName, "]]"), getMessage("fixsummary")).then(() => {
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
    void self.bulkEdit(pagenames, getMessage("createtext").replace("$1", wgPageName), getMessage("createsummary").replace("$1", wgPageName)).then(() => {
      setTimeout(() => {
        self.loaded(self.tabs.create.cont);
        self.tabs.view.loaded = false;
        self.loadCreate(true);
      }, 500);
    });
  },
  addRedirectTextSuffix(title, text) {
    if (title in pageWithRedirectTextSuffix) {
      text += "\n".concat([...new Set(pageWithRedirectTextSuffix[title])].join("\n"));
    }
    return text;
  },
  bulkEdit(titles, text, summary) {
    const self = this;
    titles = titles.filter((v, i, arr) => {
      return arr.indexOf(v) === i;
    });
    titles = titles.join("|");
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
      var _iterator2 = _createForOfIteratorHelper(query.pages), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const {
            title
          } = _step2.value;
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
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return $.when(...deferreds);
    });
  },
  bulkEditByRegex(titles, regex, text, summary) {
    titles = titles.filter((v, i, arr) => {
      return arr.indexOf(v) === i;
    });
    titles = titles.join("|");
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
      var _iterator3 = _createForOfIteratorHelper(query.pages), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const page = _step3.value;
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
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
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
        $text.text(getMessage("tab".concat(tabname, "desc")));
      }).fail(() => {
        $text.text(getMessage("tab".concat(tabname, "notfound")));
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
      rel: "noopener noreferrer"
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
      return $container.find("a[href=".concat(JSON.stringify(href), "]")).length > 0;
    };
    if ($container.length === 0) {
      $container = $("<span>").addClass("tools-redirect_methods").appendTo($parent);
    }
    var _iterator4 = _createForOfIteratorHelper(methods), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const method = _step4.value;
        if (!methodExist(method)) {
          self.buildLink(method).appendTo($container);
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
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
    this.loadTabCont("view", function() {
      return this.loadRedirect(wgPageName, $container, 0);
    }, reload);
  },
  loadCreate(reload) {
    this.loadTabCont("create", function() {
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
      var _iterator5 = _createForOfIteratorHelper(query.pages), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          const page = _step5.value;
          if (page.redirects) {
            const {
              redirects
            } = page;
            var _iterator6 = _createForOfIteratorHelper(redirects), _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                const {
                  title
                } = _step6.value;
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
                  $container.append('<span class="error">'.concat(getMessage("errcycleredirect"), "</span>"));
                } else if (deep < maximumRedirectDepth) {
                  void deferred.then(() => {
                    return self.loadRedirect(rdtitle, entry, deep + 1, loaded);
                  });
                }
                has_redirect = true;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          } else {
            has_redirect = false;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
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
    for (var _i2 = 0, _VARIANTS = VARIANTS; _i2 < _VARIANTS.length; _i2++) {
      const variant = _VARIANTS[_i2];
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
      for (var _i3 = 0, _args = args; _i3 < _args.length; _i3++) {
        const title = _args[_i3];
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
      var _iterator7 = _createForOfIteratorHelper(new Set(suffixes)), _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
          const suffix = _step7.value;
          retTitles = [...retTitles, ...titles.map((title) => {
            const modifiedTitle = fixNamespace(title);
            return suffixReg.test(modifiedTitle) ? modifiedTitle : modifiedTitle + suffix;
          })];
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      return self.findNotExists([...new Set(retTitles)]);
    });
  },
  findNotExists(titles) {
    const deferreds = [];
    const excludes = /* @__PURE__ */ new Set(["用字模式"]);
    let alltitles = [];
    titles = titles.join("|");
    for (var _i4 = 0, _VARIANTS2 = VARIANTS; _i4 < _VARIANTS2.length; _i4++) {
      const variant = _VARIANTS2[_i4];
      deferreds[deferreds.length] = api.post({
        action: "parse",
        format: "json",
        formatversion: "2",
        text: titles,
        prop: "text",
        title: "MediaWiki:Gadget-ToolsRedirect.js/-",
        contentmodel: "wikitext",
        uselang: variant,
        variant
      });
    }
    return $.when(...deferreds).then((...args) => {
      for (var _i5 = 0, _args2 = args; _i5 < _args2.length; _i5++) {
        const [{
          parse
        }] = _args2[_i5];
        alltitles = [...alltitles, ...$(parse.text).text().trim().split("|")];
      }
      alltitles = alltitles.filter((v, i, arr) => {
        return arr.indexOf(v) === i;
      });
      alltitles = alltitles.join("|");
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
        var _iterator8 = _createForOfIteratorHelper(query.pages), _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
            const page = _step8.value;
            const {
              title
            } = page;
            if (page.missing && !excludes.has(title)) {
              if (title in redirectExcludes) {
                return;
              }
              titles[titles.length] = title;
              if (IS_CATEGORY) {
                const target = wgPageName.replace(/^Category:/, "");
                setRedirectTextSuffix(title, "{{分类重定向|$1}}".replace("$1", target));
              }
              setRedirectTextSuffix(title, "{{别名重定向}}", SUFFIX_SETDEFAULT);
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
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
    var _iterator9 = _createForOfIteratorHelper(findRedirectCallbacks), _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
        const callback = _step9.value;
        const ret = callback(pagename, $content, titles);
        if (typeof ret === "string") {
          titles[titles.length] = ret;
        } else if ("done" in ret) {
          frcDeferreds[frcDeferreds.length] = ret;
        } else {
          titles = [.../* @__PURE__ */ new Set([...titles, ...ret])];
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    titles = titles.map((title) => {
      return title || null;
    });
    const onClickCreate = function(event) {
      const entry = $(this).parents("p:first");
      event.preventDefault();
      self.clickAction(entry, self.create);
    };
    void $.when(...frcDeferreds).then((...args) => {
      for (var _i6 = 0, _args3 = args; _i6 < _args3.length; _i6++) {
        const ret = _args3[_i6];
        if (typeof ret === "string") {
          titles[titles.length] = ret;
        } else {
          titles = [.../* @__PURE__ */ new Set([...titles, ...ret])];
        }
      }
      return self.findVariants(pagename, titles);
    }).then((fvtitles) => {
      self.loaded(container);
      var _iterator10 = _createForOfIteratorHelper(fvtitles), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          const title = _step10.value;
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
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
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
window.toolsRedirect = {
  findRedirectCallback,
  findRedirectBySelector,
  setRedirectTextSuffix
};
//! src/ToolsRedirect/ToolsRedirect.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/ToolsRedirect/modules/messages.ts
var {
  wgUserLanguage
} = mw.config.get();
var DEFAULT_MESSAGES = {
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
  "toolsredirect-createsummary": "编辑工具：自动创建重定向到[[$1]]",
  "toolsredirect-errcycleredirect": "无法自动修复：发现循环重定向",
  "toolsredirect-refresh": "刷新"
};
var setMessages = () => {
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(wgUserLanguage)) {
    mw.messages.set({
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
      "toolsredirect-createsummary": "編輯工具：自動創建重新導向到[[$1]]",
      "toolsredirect-errcycleredirect": "無法自動修復：發現循環重新導向",
      "toolsredirect-refresh": "刷新"
    });
  } else {
    mw.messages.set(DEFAULT_MESSAGES);
  }
};
//! src/ToolsRedirect/modules/bio-latin-names.ts
var toolsRedirect_bio_latin_names = () => {
  const REGEX_PREFIX = /[学學]名\s*[:：]?\s*$/;
  const REGEX_COLON = /^\s*[:：]?\s*$/;
  window.toolsRedirect.findRedirectCallback((_pageName, $content) => {
    const titles = [];
    var _iterator11 = _createForOfIteratorHelper($content.find('> p > [lang="la"], > p > i')), _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
        var _previousNode$textCon, _previousNode$textCon2;
        const element = _step11.value;
        const {
          textContent
        } = element;
        let {
          previousSibling: previousNode
        } = element;
        if (previousNode && REGEX_COLON.test((_previousNode$textCon = previousNode.textContent) !== null && _previousNode$textCon !== void 0 ? _previousNode$textCon : "")) {
          previousNode = previousNode.previousSibling;
        }
        if (previousNode && REGEX_PREFIX.test((_previousNode$textCon2 = previousNode.textContent) !== null && _previousNode$textCon2 !== void 0 ? _previousNode$textCon2 : "")) {
          const title = textContent === null || textContent === void 0 ? void 0 : textContent.trim();
          if (!title) {
            continue;
          }
          titles[titles.length] = title;
          window.toolsRedirect.setRedirectTextSuffix(title, "{{学名重定向}}");
        }
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    return [...new Set(titles)];
  });
};
//! src/ToolsRedirect/modules/opt-bolds.ts
var toolsRedirect_opt_bolds = () => {
  window.toolsRedirect.findRedirectBySelector("div#mw-content-text p > b");
};
//! src/ToolsRedirect/ToolsRedirect.ts
setMessages();
void (0, import_ext_gadget3.getBody)().then(($body) => {
  ToolsRedirect.init($body);
  if (mw.user.options.get("gadget-ToolsRedirect-bio-latin-names")) {
    toolsRedirect_bio_latin_names();
  }
  if (mw.user.options.get("gadget-ToolsRedirect-opt-bolds")) {
    toolsRedirect_opt_bolds();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QvVG9vbHNSZWRpcmVjdC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9vcHRpb25zLmpzb24iLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL2NvcmUuanMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy91dGlsL2dldE1lc3NhZ2UudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL2Jpby1sYXRpbi1uYW1lcy50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL29wdC1ib2xkcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICcuL1Rvb2xzUmVkaXJlY3QubGVzcyc7XG5pbXBvcnQge1Rvb2xzUmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7c2V0TWVzc2FnZXN9IGZyb20gJy4vbW9kdWxlcy9tZXNzYWdlcyc7XG5cbmltcG9ydCB7dG9vbHNSZWRpcmVjdF9iaW9fbGF0aW5fbmFtZXN9IGZyb20gJy4vbW9kdWxlcy9iaW8tbGF0aW4tbmFtZXMnO1xuaW1wb3J0IHt0b29sc1JlZGlyZWN0X29wdF9ib2xkc30gZnJvbSAnLi9tb2R1bGVzL29wdC1ib2xkcyc7XG5cbnNldE1lc3NhZ2VzKCk7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRUb29sc1JlZGlyZWN0LmluaXQoJGJvZHkpO1xuXG5cdGlmIChtdy51c2VyLm9wdGlvbnMuZ2V0KCdnYWRnZXQtVG9vbHNSZWRpcmVjdC1iaW8tbGF0aW4tbmFtZXMnKSkge1xuXHRcdHRvb2xzUmVkaXJlY3RfYmlvX2xhdGluX25hbWVzKCk7XG5cdH1cblx0aWYgKG13LnVzZXIub3B0aW9ucy5nZXQoJ2dhZGdldC1Ub29sc1JlZGlyZWN0LW9wdC1ib2xkcycpKSB7XG5cdFx0dG9vbHNSZWRpcmVjdF9vcHRfYm9sZHMoKTtcblx0fVxufSk7XG5cbmV4cG9ydCB7ZmluZFJlZGlyZWN0Q2FsbGJhY2ssIGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IsIHNldFJlZGlyZWN0VGV4dFN1ZmZpeH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuIiwgIntcblx0XCJhcGlUYWdcIjogXCJUb29sc1JlZGlyZWN0XCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiY29uc3QgU1VGRklYX0FQUEVORCA9IDA7XG5jb25zdCBTVUZGSVhfUkVQTEFDRSA9IDE7XG5jb25zdCBTVUZGSVhfU0VUREVGQVVMVCA9IDI7XG5cbmNvbnN0IFZBUklBTlRTID0gWyd6aC1oYW5zJywgJ3poLWhhbnQnLCAnemgtY24nLCAnemgtaGsnLCAnemgtbW8nLCAnemgtc2cnLCAnemgtbXknLCAnemgtdHcnXTtcblxuZXhwb3J0IHtTVUZGSVhfQVBQRU5ELCBTVUZGSVhfUkVQTEFDRSwgU1VGRklYX1NFVERFRkFVTFQsIFZBUklBTlRTfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFRvb2xzUmVkaXJlY3QvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtTVUZGSVhfQVBQRU5ELCBTVUZGSVhfUkVQTEFDRSwgU1VGRklYX1NFVERFRkFVTFQsIFZBUklBTlRTfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vdXRpbC9nZXRNZXNzYWdlJztcblxuY29uc3Qge3dnTmFtZXNwYWNlSWRzLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5jb25zdCBJU19DQVRFR09SWSA9IHdnTmFtZXNwYWNlTnVtYmVyID09PSAxNDtcblxubGV0IGZpbmRSZWRpcmVjdENhbGxiYWNrcyA9IFtdO1xuY29uc3QgcGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXggPSB7fTtcbmNvbnN0IHJlZGlyZWN0RXhjbHVkZXMgPSB7fTtcbmNvbnN0IG5zUHJlZml4ZXMgPSBbXTtcbmxldCBuc0Nhbm9uUHJlZml4LCBuc1ByZWZpeFBhdHRlcm47XG5cbmZvciAoY29uc3QgW3RleHQsIG5zaWRdIG9mIE9iamVjdC5lbnRyaWVzKHdnTmFtZXNwYWNlSWRzKSkge1xuXHRpZiAobnNpZCA9PT0gd2dOYW1lc3BhY2VOdW1iZXIgJiYgISF0ZXh0KSB7XG5cdFx0bnNQcmVmaXhlc1tuc1ByZWZpeGVzLmxlbmd0aF0gPSB0ZXh0O1xuXHR9XG59XG5cbmlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCkge1xuXHQvLyBhcnRpY2xlc1xuXHRuc0Nhbm9uUHJlZml4ID0gJyc7XG5cdG5zUHJlZml4UGF0dGVybiA9IC9eLztcbn0gZWxzZSB7XG5cdG5zQ2Fub25QcmVmaXggPSBgJHt3Z1BhZ2VOYW1lLnNwbGl0KCc6JylbMF19OmA7XG5cdG5zUHJlZml4UGF0dGVybiA9IG5ldyBSZWdFeHAoYF4oJHtuc1ByZWZpeGVzLmpvaW4oJ3wnKX0pOmAsICdpJyk7XG59XG5cbmNvbnN0IGZpeE5hbWVzcGFjZSA9ICh0aXRsZSkgPT4ge1xuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHQvLyBkbyBub3RoaW5nIGlmIGl0J3MgYXJ0aWNsZXNcblx0XHRyZXR1cm4gdGl0bGU7XG5cdH0gZWxzZSBpZiAobnNQcmVmaXhQYXR0ZXJuLnRlc3QodGl0bGUpKSB7XG5cdFx0Ly8gY2Fub25pemUgdGhlIG5hbWVzcGFjZVxuXHRcdHJldHVybiB0aXRsZS5yZXBsYWNlKG5zUHJlZml4UGF0dGVybiwgbnNDYW5vblByZWZpeCk7XG5cdH1cblx0Ly8gZG9uJ3QgaGF2ZSBhIG5hbWVzcGFjZVxuXHRyZXR1cm4gbnNDYW5vblByZWZpeCArIHRpdGxlO1xufTtcblxuLyoqXG4gKiBBZGQgbmV3IGN1c3RvbSBjYWxsYmFjayBmb3IgZmluZGluZyBuZXcgcG90ZW50aWFsIHJlZGlyZWN0IHRpdGxlcy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAocGFnZW5hbWUsICRjb250ZW50LCB0aXRsZXMpID0+IHRpdGxlIGxpc3RcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGFyZ3NcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuY29uc3QgZmluZFJlZGlyZWN0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIC4uLmFyZ3MpIHtcblx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0ZmluZFJlZGlyZWN0Q2FsbGJhY2tzW2ZpbmRSZWRpcmVjdENhbGxiYWNrcy5sZW5ndGhdID0gY2FsbGJhY2s7XG5cdH0gZWxzZSB7XG5cdFx0ZmluZFJlZGlyZWN0Q2FsbGJhY2tzID0gZ2VuZXJhdGVBcnJheShmaW5kUmVkaXJlY3RDYWxsYmFja3MsIGNhbGxiYWNrLCAuLi5hcmdzKTtcblx0fVxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRmluZCBuZXcgcG90ZW50aWFsIHJlZGlyZWN0IHRpdGxlcyB0aHJvdWdoIHNlbGVjdG9yKHMpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmNvbnN0IGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblx0LyogQSBzaG9ydGN1dCB0byBhZGQgQ1NTIHNlbGVjdG9ycyBhcyBydWxlIHRvIGZpbmQgbmV3IHBvdGVudGlhbCByZWRpcmVjdCB0aXRsZXMuICovXG5cdGZpbmRSZWRpcmVjdENhbGxiYWNrc1tmaW5kUmVkaXJlY3RDYWxsYmFja3MubGVuZ3RoXSA9ICgpID0+IHtcblx0XHRyZXR1cm4gJChzZWxlY3RvcikubWFwKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiAkKGVsZW1lbnQpLmVxKDApLnRleHQoKS50cmltKCkgfHwgbnVsbDtcblx0XHR9KTtcblx0fTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5jb25zdCBzZXRSZWRpcmVjdFRleHRTdWZmaXggPSAodGl0bGUsIHN1ZmZpeCwgZmxhZykgPT4ge1xuXHRsZXQgZmxhZ19zZXQgPSBmYWxzZTtcblx0bGV0IGZsYWdfYXBwZW5kID0gZmFsc2U7XG5cdGZsYWcgfHw9IFNVRkZJWF9BUFBFTkQ7IC8vIGRlZmF1bHQgYXBwZW5kXG5cdGZsYWdfc2V0ID0gZmxhZyA9PT0gU1VGRklYX1JFUExBQ0U7XG5cdHRpdGxlID0gZml4TmFtZXNwYWNlKHRpdGxlKTtcblx0aWYgKHRpdGxlIGluIHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4KSB7XG5cdFx0ZmxhZ19hcHBlbmQgPSBmbGFnID09PSBTVUZGSVhfQVBQRU5EO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGlmIG5vdCBleGlzdCwgZXZlcnkgZmxhZyBjYW4gc2V0XG5cdFx0ZmxhZ19zZXQgPSB0cnVlO1xuXHR9XG5cdGlmIChmbGFnX3NldCkge1xuXHRcdHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSA9IGdlbmVyYXRlQXJyYXkoc3VmZml4KTtcblx0fSBlbHNlIGlmIChmbGFnX2FwcGVuZCkge1xuXHRcdHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSA9IGdlbmVyYXRlQXJyYXkocGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXhbdGl0bGVdLCBzdWZmaXgpO1xuXHR9XG59O1xuXG5jb25zdCBUb29sc1JlZGlyZWN0ID0ge1xuXHR0YWJzZWxlbTogbnVsbCxcblx0dGFnc2VsZW06IG51bGwsXG5cdHZhcmlhbnRzOiBWQVJJQU5UUyxcblx0aW5pdCgkYm9keSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0LmFkZENsYXNzKCdtdy1saXN0LWl0ZW0gY29sbGFwc2libGUgdmVjdG9yLXRhYi1ub2ljb24nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ2NhLXJlZGlyZWN0Jylcblx0XHRcdC5jc3MoJ2N1cnNvcicsICdwb2ludGVyJylcblx0XHRcdC5hcHBlbmQoJCgnPGE+JykuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKCdidG5kZXNjJykpLnRleHQoZ2V0TWVzc2FnZSgnYnRudGl0bGUnKSkpO1xuXHRcdGJ1dHRvbi5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRzZWxmLmRpYWxvZygpO1xuXHRcdH0pO1xuXHRcdCRib2R5LmZpbmQoJ2xpI2NhLWhpc3RvcnknKS5hZnRlcihidXR0b24pO1xuXHR9LFxuXHRkaWFsb2coKSB7XG5cdFx0Y29uc3QgZGlhbG9nID0gJCgnPGRpdj4nKVxuXHRcdFx0LmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnZGxndGl0bGUnKSlcblx0XHRcdC5hZGRDbGFzcygnZGlhbG9nLXJlZGlyZWN0Jylcblx0XHRcdC5kaWFsb2coe1xuXHRcdFx0XHRiZ2lmcmFtZTogdHJ1ZSxcblx0XHRcdFx0cmVzaXphYmxlOiBmYWxzZSxcblx0XHRcdFx0bW9kYWw6IHRydWUsXG5cdFx0XHRcdHdpZHRoOiBNYXRoLnJvdW5kKCQod2luZG93KS53aWR0aCgpICogMC44KSxcblx0XHRcdFx0cG9zaXRpb246ICdjZW50ZXInLFxuXHRcdFx0fSk7XG5cdFx0ZGlhbG9nLmNzcygnbWF4LWhlaWdodCcsIGAke01hdGgucm91bmQoJCh3aW5kb3cpLmhlaWdodCgpICogMC44KX1weGApO1xuXHRcdHRoaXMudGFic2VsZW0gPSAkKCc8ZGl2PicpLmFkZENsYXNzKCd0YWItcmVkaXJlY3QnKS5hcHBlbmRUbyhkaWFsb2cpO1xuXHRcdHRoaXMudGFnc2VsZW0gPSAkKCc8dWw+JykuYXBwZW5kVG8odGhpcy50YWJzZWxlbSk7XG5cdFx0dGhpcy5hZGRUYWJzKCk7XG5cdFx0dGhpcy50YWJzZWxlbS50YWJzKCk7XG5cdH0sXG5cdGFkZFRhYnMoKSB7XG5cdFx0Zm9yIChjb25zdCBrbmFtZSBpbiB0aGlzLnRhYnMpIHtcblx0XHRcdGlmIChPYmplY3QuaGFzT3duKHRoaXMudGFicywga25hbWUpKSB7XG5cdFx0XHRcdGlmICh0aGlzLnRhYnNba25hbWVdID09PSBudWxsKSB7XG5cdFx0XHRcdFx0dGhpcy50YWJzW2tuYW1lXSA9IHRoaXNbYF9pbml0VGFiJHtrbmFtZVswXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2tuYW1lLnNsaWNlKDEpfWBdKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdGFiID0gdGhpcy50YWJzW2tuYW1lXTtcblx0XHRcdFx0dGhpcy50YWdzZWxlbS5hcHBlbmQodGFiLnRhZyk7XG5cdFx0XHRcdHRoaXMudGFic2VsZW0uYXBwZW5kKHRhYi5jb250KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gZGVmYXVsdCB0YWIsIGF1dG9sb2FkIHdoZW4gZGlhbG9nIGluaXRpYXRlXG5cdFx0dGhpcy5sb2FkVmlldygpO1xuXHR9LFxuXHRjcmVhdGVUYWIodGFibmFtZSwgdGFidGl0bGUsIG9uQ2xpY2spIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCB0YWcgPSAkKCc8bGk+JykuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ2hyZWYnLCBgI3RhYi0ke3RhYm5hbWV9YCkudGV4dCh0YWJ0aXRsZSkpO1xuXHRcdGNvbnN0IGNvbnQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgYHRhYi0ke3RhYm5hbWV9YCk7XG5cdFx0JCgnYScsIHRhZykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0b25DbGljay5jYWxsKHNlbGYpO1xuXHRcdH0pO1xuXHRcdHJldHVybiB7XG5cdFx0XHR0YWcsXG5cdFx0XHRjb250LFxuXHRcdFx0bG9hZGVkOiBmYWxzZSxcblx0XHR9O1xuXHR9LFxuXHRfaW5pdFRhYlZpZXcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlVGFiKCd2aWV3JywgZ2V0TWVzc2FnZSgndGFidmlld3RpdGxlJyksIHRoaXMubG9hZFZpZXcpO1xuXHR9LFxuXHRfaW5pdFRhYkNyZWF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVUYWIoJ2NyZWF0ZScsIGdldE1lc3NhZ2UoJ3RhYmNyZWF0ZXRpdGxlJyksIHRoaXMubG9hZENyZWF0ZSk7XG5cdH0sXG5cdHRhYnM6IHtcblx0XHR2aWV3OiBudWxsLFxuXHRcdGNyZWF0ZTogbnVsbCxcblx0fSxcblx0Zml4KHBhZ2VuYW1lcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdCQoJ3AuZGVzYycsIHNlbGYudGFicy52aWV3LmNvbnQpLnRleHQoZ2V0TWVzc2FnZSgnZml4bG9hZGluZycpKTtcblx0XHQkKCdwW2NsYXNzIT1kZXNjXScsIHNlbGYudGFicy52aWV3LmNvbnQpLnJlbW92ZSgpO1xuXHRcdHNlbGYubG9hZGluZyhzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHR2b2lkIHNlbGZcblx0XHRcdC5idWxrRWRpdEJ5UmVnZXgocGFnZW5hbWVzLCAvXFxzKlxcW1xcWy4qP1xcXVxcXS8sIGAgW1ske3dnUGFnZU5hbWV9XV1gLCBnZXRNZXNzYWdlKCdmaXhzdW1tYXJ5JykpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdC8vIGRlbGF5IGxvYWQgYmVmb3JlIHRoZSBhc3luY2hyb25vdXMgdGFza3Mgb24gc2VydmVyIGZpbmlzaGVkXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYubG9hZGVkKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRcdHNlbGYubG9hZFZpZXcodHJ1ZSk7XG5cdFx0XHRcdH0sIDMwMDApO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGNyZWF0ZShwYWdlbmFtZXMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHQkKCdwLmRlc2MnLCBzZWxmLnRhYnMuY3JlYXRlLmNvbnQpLnRleHQoZ2V0TWVzc2FnZSgnY3JlYXRlbG9hZGluZycpKTtcblx0XHQkKCdwW2NsYXNzIT1kZXNjXScsIHNlbGYudGFicy5jcmVhdGUuY29udCkucmVtb3ZlKCk7XG5cdFx0c2VsZi5sb2FkaW5nKHNlbGYudGFicy5jcmVhdGUuY29udCk7XG5cdFx0dm9pZCBzZWxmXG5cdFx0XHQuYnVsa0VkaXQoXG5cdFx0XHRcdHBhZ2VuYW1lcyxcblx0XHRcdFx0Z2V0TWVzc2FnZSgnY3JlYXRldGV4dCcpLnJlcGxhY2UoJyQxJywgd2dQYWdlTmFtZSksXG5cdFx0XHRcdGdldE1lc3NhZ2UoJ2NyZWF0ZXN1bW1hcnknKS5yZXBsYWNlKCckMScsIHdnUGFnZU5hbWUpXG5cdFx0XHQpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdC8vIGRlbGF5IGxvYWQgYmVmb3JlIHRoZSBhc3luY2hyb25vdXMgdGFza3Mgb24gc2VydmVyIGZpbmlzaGVkXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYubG9hZGVkKHNlbGYudGFicy5jcmVhdGUuY29udCk7XG5cdFx0XHRcdFx0c2VsZi50YWJzLnZpZXcubG9hZGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0c2VsZi5sb2FkQ3JlYXRlKHRydWUpO1xuXHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGFkZFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgdGV4dCkge1xuXHRcdGlmICh0aXRsZSBpbiBwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeCkge1xuXHRcdFx0dGV4dCArPSBgXFxuJHtbLi4ubmV3IFNldChwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0pXS5qb2luKCdcXG4nKX1gO1xuXHRcdH1cblx0XHRyZXR1cm4gdGV4dDtcblx0fSxcblx0YnVsa0VkaXQodGl0bGVzLCB0ZXh0LCBzdW1tYXJ5KSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0dGl0bGVzID0gdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YodikgPT09IGk7XG5cdFx0fSk7XG5cdFx0dGl0bGVzID0gdGl0bGVzLmpvaW4oJ3wnKTtcblx0XHRyZXR1cm4gYXBpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHR0aXRsZXMsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGRlZmVycmVkc1tkZWZlcnJlZHMubGVuZ3RoXSA9IGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdFx0dGV4dDogc2VsZi5hZGRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsIHRleHQpLFxuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdHRhZ3M6IE9QVElPTlMuYXBpVGFnLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRidWxrRWRpdEJ5UmVnZXgodGl0bGVzLCByZWdleCwgdGV4dCwgc3VtbWFyeSkge1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5maWx0ZXIoKHYsIGksIGFycikgPT4ge1xuXHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKHYpID09PSBpO1xuXHRcdH0pO1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5qb2luKCd8Jyk7XG5cdFx0cmV0dXJuIGFwaVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0XHR0aXRsZXMsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGNvbnN0IHtjb250ZW50fSA9IHBhZ2UucmV2aXNpb25zWzBdLnNsb3RzWydtYWluJ107XG5cdFx0XHRcdFx0Y29uc3QgbmV3Q29udGVudCA9IGNvbnRlbnQucmVwbGFjZShyZWdleCwgdGV4dCk7XG5cdFx0XHRcdFx0ZGVmZXJyZWRzW2RlZmVycmVkcy5sZW5ndGhdID0gYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdFx0dGl0bGU6IHBhZ2UudGl0bGUsXG5cdFx0XHRcdFx0XHR0ZXh0OiBuZXdDb250ZW50LFxuXHRcdFx0XHRcdFx0dGFnczogT1BUSU9OUy5hcGlUYWcsXG5cdFx0XHRcdFx0XHRiYXNldGltZXN0YW1wOiBwYWdlLnJldmlzaW9uc1swXS50aW1lc3RhbXAsXG5cdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRsb2FkVGFiQ29udCh0YWJuYW1lLCBjYWxsYmFjaywgcmVsb2FkKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgdGFiID0gc2VsZi50YWJzW3RhYm5hbWVdO1xuXHRcdGlmIChyZWxvYWQpIHtcblx0XHRcdHRhYi5sb2FkZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCF0YWIubG9hZGVkKSB7XG5cdFx0XHR0YWIuY29udC5odG1sKCcnKTtcblx0XHRcdC8vXG5cdFx0XHRjb25zdCAkZGVzYyA9ICQoJzxwPicpXG5cdFx0XHRcdC5hZGRDbGFzcygnZGVzYycpXG5cdFx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rlc2MtdGV4dCcpLnRleHQoZ2V0TWVzc2FnZSgncmVkaWxvYWRpbmcnKSkpXG5cdFx0XHRcdC5hcHBlbmRUbyh0YWIuY29udCk7XG5cdFx0XHRjb25zdCAkdGV4dCA9ICRkZXNjLmZpbmQoJz4gLmRlc2MtdGV4dCcpO1xuXHRcdFx0Y2FsbGJhY2tcblx0XHRcdFx0LmFwcGx5KHNlbGYpXG5cdFx0XHRcdC5kb25lKCgpID0+IHtcblx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMuanNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0JHRleHQudGV4dChnZXRNZXNzYWdlKGB0YWIke3RhYm5hbWV9ZGVzY2ApKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmZhaWwoKCkgPT4ge1xuXHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBtZXNzYWdlcy5qc1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHQkdGV4dC50ZXh0KGdldE1lc3NhZ2UoYHRhYiR7dGFibmFtZX1ub3Rmb3VuZGApKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5hZGRNZXRob2RzKCRkZXNjLCBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjcmVmcmVzaCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdyZWZyZXNoJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLmxvYWRUYWJDb250KHRhYm5hbWUsIGNhbGxiYWNrLCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0dGFiLmxvYWRlZCA9IHRydWU7XG5cdFx0fVxuXHR9LFxuXHRsb2FkaW5nKGNvbnRhaW5lcikge1xuXHRcdGlmIChjb250YWluZXIucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCkgPT09ICdzcGFuJykge1xuXHRcdFx0Y29udGFpbmVyLmFkZENsYXNzKCdtdy1hamF4LWxvYWRlcicpO1xuXHRcdH0gZWxzZSBpZiAoJCgnc3Bhbi5tdy1hamF4LWxvYWRlcicsIGNvbnRhaW5lcikubGVuZ3RoID09PSAwKSB7XG5cdFx0XHQkKCc8c3Bhbj4nKS5hZGRDbGFzcygnbXctYWpheC1sb2FkZXInKS5hcHBlbmRUbyhjb250YWluZXIpO1xuXHRcdH1cblx0fSxcblx0bG9hZGVkKGNvbnRhaW5lcikge1xuXHRcdGlmIChjb250YWluZXIucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCkgPT09ICdzcGFuJykge1xuXHRcdFx0Y29udGFpbmVyLnJlbW92ZUNsYXNzKCdtdy1hamF4LWxvYWRlcicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCdzcGFuLm13LWFqYXgtbG9hZGVyJywgY29udGFpbmVyKS5yZW1vdmUoKTtcblx0XHR9XG5cdH0sXG5cdHNlbGVjdEFsbChjb250KSB7XG5cdFx0JCgnaW5wdXRbdHlwZT1jaGVja2JveF06bm90KDpkaXNhYmxlZCknLCBjb250KS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG5cdH0sXG5cdHNlbGVjdEludmVyc2UoY29udCkge1xuXHRcdCQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdOm5vdCg6ZGlzYWJsZWQpJywgY29udCkuZWFjaCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cdFx0XHQkZWxlbWVudC5wcm9wKCdjaGVja2VkJywgISRlbGVtZW50LnByb3AoJ2NoZWNrZWQnKSk7XG5cdFx0fSk7XG5cdH0sXG5cdHNlbGVjdEFjdGlvbihjb250LCBjYikge1xuXHRcdGNvbnN0IHBhZ2VuYW1lcyA9IFtdO1xuXHRcdCQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQnLCBjb250KS5lYWNoKChfaW5kZXgsIHBhZ2VuYW1lKSA9PiB7XG5cdFx0XHRwYWdlbmFtZXNbcGFnZW5hbWVzLmxlbmd0aF0gPSAkKHBhZ2VuYW1lKS5kYXRhKCdwYWdlLXRpdGxlJyk7XG5cdFx0fSk7XG5cdFx0aWYgKHBhZ2VuYW1lcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjYi5jYWxsKHRoaXMsIHBhZ2VuYW1lcyk7XG5cdFx0fVxuXHR9LFxuXHRjbGlja0FjdGlvbihjb250LCBjYikge1xuXHRcdGNvbnN0IHBhZ2VuYW1lID0gJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgY29udCkuZGF0YSgncGFnZS10aXRsZScpO1xuXHRcdGNiLmNhbGwodGhpcywgW3BhZ2VuYW1lXSk7XG5cdH0sXG5cdGJ1aWxkTGluayh7dGl0bGUsIGhyZWYsIGNsaWNrLCBjbGFzc25hbWV9KSB7XG5cdFx0Y29uc3QgYSA9ICQoJzxhPicpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRocmVmLFxuXHRcdFx0XHR0YXJnZXQ6ICdfYmxhbmsnLFxuXHRcdFx0XHRyZWw6ICdub29wZW5lciBub3JlZmVycmVyJyxcblx0XHRcdH0pXG5cdFx0XHQudGV4dCh0aXRsZSk7XG5cdFx0aWYgKGNsaWNrKSB7XG5cdFx0XHRhLm9uKCdjbGljaycsIGNsaWNrKTtcblx0XHR9XG5cdFx0aWYgKGNsYXNzbmFtZSkge1xuXHRcdFx0YS5hZGRDbGFzcyhjbGFzc25hbWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3Rvb2xzLXJlZGlyZWN0X2xpbmsnKS5hcHBlbmQoYSk7XG5cdH0sXG5cdGFkZE1ldGhvZHMoJHBhcmVudCwgbWV0aG9kcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGxldCAkY29udGFpbmVyID0gJHBhcmVudC5maW5kKCc+IC50b29scy1yZWRpcmVjdF9tZXRob2RzJyk7XG5cdFx0Y29uc3QgbWV0aG9kRXhpc3QgPSAoe2hyZWZ9KSA9PiB7XG5cdFx0XHRyZXR1cm4gJGNvbnRhaW5lci5maW5kKGBhW2hyZWY9JHtKU09OLnN0cmluZ2lmeShocmVmKX1dYCkubGVuZ3RoID4gMDtcblx0XHR9O1xuXHRcdGlmICgkY29udGFpbmVyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0JGNvbnRhaW5lciA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCd0b29scy1yZWRpcmVjdF9tZXRob2RzJykuYXBwZW5kVG8oJHBhcmVudCk7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgbWV0aG9kIG9mIG1ldGhvZHMpIHtcblx0XHRcdGlmICghbWV0aG9kRXhpc3QobWV0aG9kKSkge1xuXHRcdFx0XHRzZWxmLmJ1aWxkTGluayhtZXRob2QpLmFwcGVuZFRvKCRjb250YWluZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0YnVpbGRTZWxlY3Rpb24obWFpbiwgbWV0ZCwgbXQsIGRzYWIpIHtcblx0XHRjb25zdCBjb250ID0gJCgnPHNwYW4+Jyk7XG5cdFx0Y29uc3Qgc2VsZSA9ICQoJzxpbnB1dD4nKS5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JykuYXBwZW5kVG8oY29udCk7XG5cdFx0dGhpcy5idWlsZExpbmsobWFpbikuYXBwZW5kVG8oY29udCk7XG5cdFx0dGhpcy5hZGRNZXRob2RzKGNvbnQsIG1ldGQpO1xuXHRcdHNlbGUuZGF0YSgncGFnZS10aXRsZScsIG10KTtcblx0XHRpZiAoZHNhYikge1xuXHRcdFx0c2VsZS5wcm9wKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gY29udDtcblx0fSxcblx0bG9hZFZpZXcocmVsb2FkKSB7XG5cdFx0Y29uc3QgJGNvbnRhaW5lciA9IHRoaXMudGFicy52aWV3LmNvbnQ7XG5cdFx0dGhpcy5sb2FkVGFiQ29udChcblx0XHRcdCd2aWV3Jyxcblx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubG9hZFJlZGlyZWN0KHdnUGFnZU5hbWUsICRjb250YWluZXIsIDApO1xuXHRcdFx0fSxcblx0XHRcdHJlbG9hZFxuXHRcdCk7XG5cdH0sXG5cdGxvYWRDcmVhdGUocmVsb2FkKSB7XG5cdFx0dGhpcy5sb2FkVGFiQ29udChcblx0XHRcdCdjcmVhdGUnLFxuXHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5maW5kUmVkaXJlY3Qod2dQYWdlTmFtZSk7XG5cdFx0XHR9LFxuXHRcdFx0cmVsb2FkXG5cdFx0KTtcblx0fSxcblx0bG9hZFJlZGlyZWN0KHBhZ2VuYW1lLCBjb250YWluZXIsIGRlZXAsIGxvYWRlZCkge1xuXHRcdHRoaXMubG9hZGluZyhjb250YWluZXIpO1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGNvbnN0IHRvcCA9IGRlZXAgPyAkKCc8ZGw+JykuYXBwZW5kVG8oY29udGFpbmVyKSA6IGNvbnRhaW5lcjtcblx0XHRpZiAoIWxvYWRlZCkge1xuXHRcdFx0bG9hZGVkID0ge307XG5cdFx0XHRsb2FkZWRbcGFnZW5hbWVdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Y29uc3Qgb25DbGlja0ZpeCA9IChldmVudCkgPT4ge1xuXHRcdFx0Y29uc3QgZW50cnkgPSAkKHRoaXMpLnBhcmVudHMoJ2RkLCBwJykuZmlyc3QoKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRzZWxmLmNsaWNrQWN0aW9uKGVudHJ5LCB0aGlzLmZpeCk7XG5cdFx0fTtcblx0XHR2b2lkIGFwaVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6ICdyZWRpcmVjdHMnLFxuXHRcdFx0XHR0aXRsZXM6IHBhZ2VuYW1lLFxuXHRcdFx0XHRyZGxpbWl0OiAnbWF4Jyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRzZWxmLmxvYWRlZChjb250YWluZXIpO1xuXHRcdFx0XHRsZXQgaGFzX3JlZGlyZWN0ID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IGRlc2MgPSAkKCdwLmRlc2MnLCBzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0Y29uc3QgbWF4aW11bVJlZGlyZWN0RGVwdGggPSAxMDtcblx0XHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0aWYgKHBhZ2UucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7cmVkaXJlY3RzfSA9IHBhZ2U7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZX0gb2YgcmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHJkdGl0bGUgPSB0aXRsZTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdWx0aXRsZSA9IHJkdGl0bGUucmVwbGFjZSgvIC9nLCAnXycpO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBlbnRyeSA9IChkZWVwID8gJCgnPGRkPicpIDogJCgnPHA+JykpLmFwcGVuZFRvKHRvcCk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG1ldGhvZHMgPSBbXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZjogbXcudXRpbC5nZXRVcmwodWx0aXRsZSwge2FjdGlvbjogJ2VkaXQnfSksXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgncmVkaWVkaXQnKSxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRdO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBpc0N5Y2xlUmVkaXJlY3QgPSByZHRpdGxlIGluIGxvYWRlZDtcblx0XHRcdFx0XHRcdFx0bG9hZGVkW3JkdGl0bGVdID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0aWYgKCFpc0N5Y2xlUmVkaXJlY3QgJiYgZGVlcCkge1xuXHRcdFx0XHRcdFx0XHRcdG1ldGhvZHNbbWV0aG9kcy5sZW5ndGhdID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZjogJyNmaXgtcmVkaXJlY3QnLFxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYnZpZXdmaXgnKSxcblx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrOiBvbkNsaWNrRml4LFxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc3QgJGNvbnRhaW5lciA9IHNlbGZcblx0XHRcdFx0XHRcdFx0XHQuYnVpbGRTZWxlY3Rpb24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY6IG13LnV0aWwuZ2V0VXJsKHVsdGl0bGUsIHtyZWRpcmVjdDogJ25vJ30pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmR0aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRtZXRob2RzLFxuXHRcdFx0XHRcdFx0XHRcdFx0dWx0aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRcdCFkZWVwXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmRUbyhlbnRyeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpc0N5Y2xlUmVkaXJlY3QpIHtcblx0XHRcdFx0XHRcdFx0XHQkY29udGFpbmVyLmFwcGVuZChgPHNwYW4gY2xhc3M9XCJlcnJvclwiPiR7Z2V0TWVzc2FnZSgnZXJyY3ljbGVyZWRpcmVjdCcpfTwvc3Bhbj5gKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkZWVwIDwgbWF4aW11bVJlZGlyZWN0RGVwdGgpIHtcblx0XHRcdFx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYubG9hZFJlZGlyZWN0KHJkdGl0bGUsIGVudHJ5LCBkZWVwICsgMSwgbG9hZGVkKTtcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRoYXNfcmVkaXJlY3QgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRoYXNfcmVkaXJlY3QgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGhhc19yZWRpcmVjdCAmJiBkZWVwID09PSAxKSB7XG5cdFx0XHRcdFx0c2VsZi5hZGRNZXRob2RzKGRlc2MsIFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNzZWxlY3QtYWxsJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3NlbGVjdGFsbCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBbGwoc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3NlbGVjdC1pbnZlcnNlJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3NlbGVjdGludmVyc2UnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0SW52ZXJzZShzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjZml4LXNlbGVjdGVkJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYnZpZXdmaXgnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0QWN0aW9uKHNlbGYudGFicy52aWV3LmNvbnQsIHNlbGYuZml4KTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGhhc19yZWRpcmVjdCkge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZVdpdGgoc2VsZik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3RXaXRoKHNlbGYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xuXHR9LFxuXHRmaW5kVmFyaWFudHMocGFnZW5hbWUsIHRpdGxlcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IHN1ZmZpeFJlZyA9IC9eLis/KCjvvIh8WyBfXVxcKCkuKz8oWynvvIldKSkkLztcblx0XHRsZXQgcmV0VGl0bGVzID0gW107XG5cdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0XHRjb25zdCB4aHIgPSBhcGlcblx0XHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0cGFnZTogcGFnZW5hbWUsXG5cdFx0XHRcdFx0cHJvcDogJ2Rpc3BsYXl0aXRsZScsXG5cdFx0XHRcdFx0dXNlbGFuZzogdmFyaWFudCxcblx0XHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoe3BhcnNlfSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHtkaXNwbGF5dGl0bGV9ID0gcGFyc2U7XG5cdFx0XHRcdFx0Ly8gRXhhbXBsZTpcblx0XHRcdFx0XHQvLyAtIEJlZm9yZTogPHNwYW4gY2xhc3M9XCJtdy1wYWdlLXRpdGxlLW5hbWVzcGFjZVwiPuaxgumXu+eZvuenkTwvc3Bhbj48c3BhbiBjbGFzcz1cIm13LXBhZ2UtdGl0bGUtc2VwYXJhdG9yXCI+Ojwvc3Bhbj48c3BhbiBjbGFzcz1cIm13LXBhZ2UtdGl0bGUtbWFpblwiPuaymeebkjwvc3Bhbj5cblx0XHRcdFx0XHQvLyAtIEFmdGVyOiDmsYLpl7vnmb7np5E65rKZ55uSXG5cdFx0XHRcdFx0bGV0IHRpdGxlID0gJCgnPHNwYW4+JykuYXBwZW5kKGRpc3BsYXl0aXRsZSkuZXEoMCkudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0XHR0aXRsZSA9IGZpeE5hbWVzcGFjZSh0aXRsZSk7XG5cdFx0XHRcdFx0c2V0UmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCAne3vnroDnuYHph43lrprlkJF9fScsIFNVRkZJWF9BUFBFTkQpO1xuXHRcdFx0XHRcdHJldHVybiB0aXRsZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRkZWZlcnJlZHNbZGVmZXJyZWRzLmxlbmd0aF0gPSB4aHI7XG5cdFx0fVxuXHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKS50aGVuKCguLi5hcmdzKSA9PiB7XG5cdFx0XHRjb25zdCBzdWZmaXhlcyA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCB0aXRsZSBvZiBhcmdzKSB7XG5cdFx0XHRcdGxldCBzdWZmaXg7XG5cdFx0XHRcdC8vIGZpbmQgdGl0bGUgc3VmZml4LFxuXHRcdFx0XHQvLyBmb3IgZXhhbXBsZSBcIiAo5rWO5Y2X5biCKVwiIHRvIFwi5biC5Lit5Yy6ICjmtY7ljZfluIIpXCJcblx0XHRcdFx0Y29uc3Qgc3VmZml4QXJyID0gc3VmZml4UmVnLmV4ZWModGl0bGUpO1xuXHRcdFx0XHRpZiAoc3VmZml4QXJyICYmIHN1ZmZpeEFyci5sZW5ndGggPT09IDIpIHtcblx0XHRcdFx0XHRbLCBzdWZmaXhdID0gc3VmZml4QXJyO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1ZmZpeCA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldFRpdGxlc1tyZXRUaXRsZXMubGVuZ3RoXSA9IHRpdGxlO1xuXHRcdFx0XHRzdWZmaXhlc1tzdWZmaXhlcy5sZW5ndGhdID0gc3VmZml4O1xuXHRcdFx0fVxuXHRcdFx0Ly8gYXBwZW5kIHN1ZmZpeGVzXG5cdFx0XHRmb3IgKGNvbnN0IHN1ZmZpeCBvZiBuZXcgU2V0KHN1ZmZpeGVzKSkge1xuXHRcdFx0XHRyZXRUaXRsZXMgPSBbXG5cdFx0XHRcdFx0Li4ucmV0VGl0bGVzLFxuXHRcdFx0XHRcdC4uLnRpdGxlcy5tYXAoKHRpdGxlKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBtb2RpZmllZFRpdGxlID0gZml4TmFtZXNwYWNlKHRpdGxlKTtcblx0XHRcdFx0XHRcdHJldHVybiBzdWZmaXhSZWcudGVzdChtb2RpZmllZFRpdGxlKSA/IG1vZGlmaWVkVGl0bGUgOiBtb2RpZmllZFRpdGxlICsgc3VmZml4O1xuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNlbGYuZmluZE5vdEV4aXN0cyhbLi4ubmV3IFNldChyZXRUaXRsZXMpXSk7XG5cdFx0fSk7XG5cdH0sXG5cdGZpbmROb3RFeGlzdHModGl0bGVzKSB7XG5cdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0Y29uc3QgZXhjbHVkZXMgPSBuZXcgU2V0KFsn55So5a2X5qih5byPJ10pO1xuXHRcdGxldCBhbGx0aXRsZXMgPSBbXTtcblx0XHR0aXRsZXMgPSB0aXRsZXMuam9pbignfCcpO1xuXHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiBWQVJJQU5UUykge1xuXHRcdFx0ZGVmZXJyZWRzW2RlZmVycmVkcy5sZW5ndGhdID0gYXBpLnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRleHQ6IHRpdGxlcyxcblx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0XHR0aXRsZTogJ01lZGlhV2lraTpHYWRnZXQtVG9vbHNSZWRpcmVjdC5qcy8tJyxcblx0XHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0XHR1c2VsYW5nOiB2YXJpYW50LFxuXHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKS50aGVuKCguLi5hcmdzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IFt7cGFyc2V9XSBvZiBhcmdzKSB7XG5cdFx0XHRcdGFsbHRpdGxlcyA9IFsuLi5hbGx0aXRsZXMsIC4uLiQocGFyc2UudGV4dCkudGV4dCgpLnRyaW0oKS5zcGxpdCgnfCcpXTtcblx0XHRcdH1cblx0XHRcdGFsbHRpdGxlcyA9IGFsbHRpdGxlcy5maWx0ZXIoKHYsIGksIGFycikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YodikgPT09IGk7XG5cdFx0XHR9KTtcblx0XHRcdGFsbHRpdGxlcyA9IGFsbHRpdGxlcy5qb2luKCd8Jyk7XG5cdFx0XHRyZXR1cm4gYXBpXG5cdFx0XHRcdC5wb3N0KHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0XHR0aXRsZXM6IGFsbHRpdGxlcyxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0XHR0aXRsZXMgPSBbXTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHt0aXRsZX0gPSBwYWdlO1xuXHRcdFx0XHRcdFx0aWYgKHBhZ2UubWlzc2luZyAmJiAhZXhjbHVkZXMuaGFzKHRpdGxlKSkge1xuXHRcdFx0XHRcdFx0XHRpZiAodGl0bGUgaW4gcmVkaXJlY3RFeGNsdWRlcykge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGV4Y2x1ZGUgc3BlY2lhbCB0aXRsZXNcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gdGl0bGU7XG5cdFx0XHRcdFx0XHRcdGlmIChJU19DQVRFR09SWSkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IHdnUGFnZU5hbWUucmVwbGFjZSgvXkNhdGVnb3J5Oi8sICcnKTtcblx0XHRcdFx0XHRcdFx0XHRzZXRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsICd7e+WIhuexu+mHjeWumuWQkXwkMX19Jy5yZXBsYWNlKCckMScsIHRhcmdldCkpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8vIG9ubHkgc2V0IGRlZmF1bHQgc3VmZml4XG5cdFx0XHRcdFx0XHRcdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgJ3t75Yir5ZCN6YeN5a6a5ZCRfX0nLCBTVUZGSVhfU0VUREVGQVVMVCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxuXHRmaW5kUmVkaXJlY3QocGFnZW5hbWUpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBmcmNEZWZlcnJlZHMgPSBbXTtcblx0XHRjb25zdCBjb250YWluZXIgPSBzZWxmLnRhYnMuY3JlYXRlLmNvbnQ7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0Y29uc3QgJGNvbnRlbnQgPSAkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0ID4gZGl2Lm13LXBhcnNlci1vdXRwdXQnKTtcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRsZXQgdGl0bGVzID0gW107XG5cdFx0c2VsZi5sb2FkaW5nKGNvbnRhaW5lcik7XG5cdFx0Zm9yIChjb25zdCBjYWxsYmFjayBvZiBmaW5kUmVkaXJlY3RDYWxsYmFja3MpIHtcblx0XHRcdGNvbnN0IHJldCA9IGNhbGxiYWNrKHBhZ2VuYW1lLCAkY29udGVudCwgdGl0bGVzKTtcblx0XHRcdGlmICh0eXBlb2YgcmV0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSByZXQ7XG5cdFx0XHR9IGVsc2UgaWYgKCdkb25lJyBpbiByZXQpIHtcblx0XHRcdFx0Ly8gaXMgRGVmZXJyZWRcblx0XHRcdFx0ZnJjRGVmZXJyZWRzW2ZyY0RlZmVycmVkcy5sZW5ndGhdID0gcmV0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGl0bGVzID0gWy4uLm5ldyBTZXQoWy4uLnRpdGxlcywgLi4ucmV0XSldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyByZW1vdmUgYWxsIGVtcHR5IHRpdGxlc1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5tYXAoKHRpdGxlKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGl0bGUgfHwgbnVsbDtcblx0XHR9KTtcblx0XHRjb25zdCBvbkNsaWNrQ3JlYXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRjb25zdCBlbnRyeSA9ICQodGhpcykucGFyZW50cygncDpmaXJzdCcpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHNlbGYuY2xpY2tBY3Rpb24oZW50cnksIHNlbGYuY3JlYXRlKTtcblx0XHR9O1xuXHRcdC8vIGhhbmRsZXMgdGhlIGRlZmVycmVkIGNhbGxiYWNrc1xuXHRcdHZvaWQgJC53aGVuKC4uLmZyY0RlZmVycmVkcylcblx0XHRcdC50aGVuKCguLi5hcmdzKSA9PiB7XG5cdFx0XHRcdGZvciAoY29uc3QgcmV0IG9mIGFyZ3MpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHJldCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IHJldDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGl0bGVzID0gWy4uLm5ldyBTZXQoWy4uLnRpdGxlcywgLi4ucmV0XSldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gc2VsZi5maW5kVmFyaWFudHMocGFnZW5hbWUsIHRpdGxlcyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKGZ2dGl0bGVzKSA9PiB7XG5cdFx0XHRcdC8vIGJ1aWxkIEhUTUxcblx0XHRcdFx0c2VsZi5sb2FkZWQoY29udGFpbmVyKTtcblx0XHRcdFx0Zm9yIChjb25zdCB0aXRsZSBvZiBmdnRpdGxlcykge1xuXHRcdFx0XHRcdGNvbnN0IHVsdGl0bGUgPSB0aXRsZS5yZXBsYWNlKCcgJywgJ18nKTtcblx0XHRcdFx0XHRjb25zdCBlbnRyeSA9ICQoJzxwPicpLmFwcGVuZFRvKGNvbnRhaW5lcik7XG5cdFx0XHRcdFx0c2VsZi5idWlsZFNlbGVjdGlvbihcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogbXcudXRpbC5nZXRVcmwodWx0aXRsZSwge2FjdGlvbjogJ2VkaXQnLCByZWRsaW5rOiAnMSd9KSxcblx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdGNsYXNzbmFtZTogJ25ldycsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0aHJlZjogJyNjcmVhdGUtcmVkaXJlY3QnLFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpLFxuXHRcdFx0XHRcdFx0XHRcdGNsaWNrOiBvbkNsaWNrQ3JlYXRlLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdHVsdGl0bGUsXG5cdFx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHRcdCkuYXBwZW5kVG8oZW50cnkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGRlc2MgPSAkKCdwLmRlc2MnLCBjb250YWluZXIpO1xuXHRcdFx0XHRpZiAoZnZ0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNlbGYuYWRkTWV0aG9kcyhkZXNjLCBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWFsbCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdzZWxlY3RhbGwnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0QWxsKGNvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3NlbGVjdC1pbnZlcnNlJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3NlbGVjdGludmVyc2UnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0SW52ZXJzZShjb250YWluZXIpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNjcmVhdGUtc2VsZWN0ZWQnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFiY3JlYXRldGl0bGUnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0QWN0aW9uKGNvbnRhaW5lciwgc2VsZi5jcmVhdGUpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmVXaXRoKHNlbGYsIFtmdnRpdGxlc10pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0V2l0aChzZWxmLCBbZnZ0aXRsZXNdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcblx0fSxcbn07XG5cbi8qIGV4cG9ydCBnbG9iYWwgb2JqZWN0ICovXG53aW5kb3cudG9vbHNSZWRpcmVjdCA9IHtcblx0ZmluZFJlZGlyZWN0Q2FsbGJhY2ssXG5cdGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IsXG5cdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCxcbn07XG5cbmV4cG9ydCB7VG9vbHNSZWRpcmVjdCwgZmluZFJlZGlyZWN0Q2FsbGJhY2ssIGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IsIHNldFJlZGlyZWN0VGV4dFN1ZmZpeH07XG4iLCAiaW1wb3J0IHR5cGUge01lc3NhZ2VLZXl9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgZ2V0TWVzc2FnZSA9IChrZXk6IE1lc3NhZ2VLZXkgZXh0ZW5kcyBgdG9vbHNyZWRpcmVjdC0ke2luZmVyIFB9YCA/IFAgOiBuZXZlciwgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBmdWxsS2V5OiBzdHJpbmcgPSBgdG9vbHNyZWRpcmVjdC0ke2tleX1gO1xuXHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0cmV0dXJuIGFyZ3MubGVuZ3RoID8gbXcubWVzc2FnZShmdWxsS2V5LCAuLi5hcmdzKS5wYXJzZSgpIDogbXcubWVzc2FnZShmdWxsS2V5KS5wbGFpbigpO1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgdHlwZSB7TWVzc2FnZUtleX0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IERFRkFVTFRfTUVTU0FHRVMgPSB7XG5cdCd0b29sc3JlZGlyZWN0LWJ0bnRpdGxlJzogJ+mHjeWumuWQkScsXG5cdCd0b29sc3JlZGlyZWN0LWJ0bmRlc2MnOiAn5Yib5bu65ZKM566h55CG5q2k6aG16Z2i55qE6YeN5a6a5ZCRJyxcblx0J3Rvb2xzcmVkaXJlY3QtZGxndGl0bGUnOiAn5Yib5bu65ZKM566h55CG6YeN5a6a5ZCRJyxcblx0J3Rvb2xzcmVkaXJlY3QtcmVkaWxvYWRpbmcnOiAn5pWw5o2u5Yqg6L295Lit77yM6K+356iN5YCZ4oCm4oCmJyxcblx0J3Rvb2xzcmVkaXJlY3QtcmVkaWVkaXQnOiAn57yW6L6RJyxcblx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0YWxsJzogJ+WFqOmAiScsXG5cdCd0b29sc3JlZGlyZWN0LXNlbGVjdGludmVyc2UnOiAn5Y+N6YCJJyxcblx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld3RpdGxlJzogJ+afpeeciycsXG5cdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdkZXNjJzogJ+S7peS4i+aYr+aMh+WQkeatpOmhtemdoueahOmHjeWumuWQkemhte+8micsXG5cdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdub3Rmb3VuZCc6ICfmsqHmnInmib7liLDku7vkvZXmjIflkJHmraTpobXpnaLnmoTph43lrprlkJHpobXjgIInLFxuXHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bXVsdGknOiAn5aSa6YeNJyxcblx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2ZpeCc6ICfkv67lpI0nLFxuXHQndG9vbHNyZWRpcmVjdC1maXhsb2FkaW5nJzogJ+ivt+eojeWAme+8jOato+WcqOiHquWKqOS/ruWkjemHjeWumuWQkeKApuKApicsXG5cdCd0b29sc3JlZGlyZWN0LWZpeHRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdCd0b29sc3JlZGlyZWN0LWZpeHN1bW1hcnknOiAn57yW6L6R5bel5YW377ya5L+u5aSN5aSa6YeN6YeN5a6a5ZCRJyxcblx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRldGl0bGUnOiAn5Yib5bu6Jyxcblx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlZGVzYyc6ICfku6XkuIvmmK/lsJrmnKrliJvlu7rnmoTph43lrprlkJHpobXvvJonLFxuXHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVub3Rmb3VuZCc6ICfmsqHmnInmib7liLDlj6/ku6XliJvlu7rnmoTph43lrprlkJHpobXjgIInLFxuXHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVhbGwnOiAn5YWo6YOo5Yib5bu6Jyxcblx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlbG9hZGluZyc6ICfor7fnqI3lgJnvvIzmraPlnKjoh6rliqjliJvlu7rph43lrprlkJHigKbigKYnLFxuXHQndG9vbHNyZWRpcmVjdC1jcmVhdGV0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHQndG9vbHNyZWRpcmVjdC1jcmVhdGVzdW1tYXJ5JzogJ+e8lui+keW3peWFt++8muiHquWKqOWIm+W7uumHjeWumuWQkeWIsFtbJDFdXScsXG5cdCd0b29sc3JlZGlyZWN0LWVycmN5Y2xlcmVkaXJlY3QnOiAn5peg5rOV6Ieq5Yqo5L+u5aSN77ya5Y+R546w5b6q546v6YeN5a6a5ZCRJyxcblx0J3Rvb2xzcmVkaXJlY3QtcmVmcmVzaCc6ICfliLfmlrAnLFxufSBzYXRpc2ZpZXMgUmVjb3JkPE1lc3NhZ2VLZXksIHN0cmluZz47XG5cbmNvbnN0IHNldE1lc3NhZ2VzID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0PHR5cGVvZiBERUZBVUxUX01FU1NBR0VTPih7XG5cdFx0XHQndG9vbHNyZWRpcmVjdC1idG50aXRsZSc6ICfph43mlrDlsI7lkJEnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtYnRuZGVzYyc6ICflibXlu7rlkoznrqHnkIbmraTpoIHpnaLnmoTph43mlrDlsI7lkJEnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtZGxndGl0bGUnOiAn5Ym15bu65ZKM566h55CG6YeN5paw5bCO5ZCRJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXJlZGlsb2FkaW5nJzogJ+aVuOaTmuWKoOi8ieS4re+8jOiri+eojeWAmeKApuKApicsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1yZWRpZWRpdCc6ICfnt6jovK8nLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0YWxsJzogJ+WFqOmBuCcsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1zZWxlY3RpbnZlcnNlJzogJ+WPjemBuCcsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3dGl0bGUnOiAn5p+l55yLJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdkZXNjJzogJ+S7peS4i+aYr+aMh+WQkeatpOmggemdoueahOmHjeaWsOWwjuWQkemgge+8micsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bm90Zm91bmQnOiAn5rKS5pyJ5om+5Yiw5Lu75L2V5oyH5ZCR5q2k6aCB6Z2i55qE6YeN5paw5bCO5ZCR6aCB44CCJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdtdWx0aSc6ICflpJrph40nLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2ZpeCc6ICfkv67lvqknLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtZml4bG9hZGluZyc6ICfoq4vnqI3lgJnvvIzmraPlnKjoh6rli5Xkv67lvqnph43mlrDlsI7lkJHigKbigKYnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtZml4dGV4dCc6ICcjUkVESVJFQ1QgW1skMV1dJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWZpeHN1bW1hcnknOiAn57eo6Lyv5bel5YW377ya5L+u5b6p5aSa6YeN6YeN5paw5bCO5ZCRJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZXRpdGxlJzogJ+WJteW7uicsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVkZXNjJzogJ+S7peS4i+aYr+WwmuacquWJteW7uueahOmHjeaWsOWwjuWQkemgge+8micsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVub3Rmb3VuZCc6ICfmspLmnInmib7liLDlj6/ku6XlibXlu7rnmoTph43mlrDlsI7lkJHpoIHjgIInLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlYWxsJzogJ+WFqOmDqOWJteW7uicsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGVsb2FkaW5nJzogJ+iri+eojeWAme+8jOato+WcqOiHquWLleWJteW7uumHjeaWsOWwjuWQkeKApuKApicsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGV0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlc3VtbWFyeSc6ICfnt6jovK/lt6XlhbfvvJroh6rli5XlibXlu7rph43mlrDlsI7lkJHliLBbWyQxXV0nLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtZXJyY3ljbGVyZWRpcmVjdCc6ICfnhKHms5Xoh6rli5Xkv67lvqnvvJrnmbznj77lvqrnkrDph43mlrDlsI7lkJEnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtcmVmcmVzaCc6ICfliLfmlrAnLFxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG13Lm1lc3NhZ2VzLnNldChERUZBVUxUX01FU1NBR0VTKTtcblx0fVxufTtcblxuZXhwb3J0IHtzZXRNZXNzYWdlc307XG4iLCAiY29uc3QgdG9vbHNSZWRpcmVjdF9iaW9fbGF0aW5fbmFtZXMgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IFJFR0VYX1BSRUZJWDogUmVnRXhwID0gL1vlrablrbhd5ZCNXFxzKls677yaXT9cXHMqJC87XG5cdGNvbnN0IFJFR0VYX0NPTE9OOiBSZWdFeHAgPSAvXlxccypbOu+8ml0/XFxzKiQvO1xuXG5cdHdpbmRvdy50b29sc1JlZGlyZWN0LmZpbmRSZWRpcmVjdENhbGxiYWNrKChfcGFnZU5hbWU6IHN0cmluZywgJGNvbnRlbnQ6IEpRdWVyeSk6IHN0cmluZ1tdID0+IHtcblx0XHRjb25zdCB0aXRsZXM6IHN0cmluZ1tdID0gW107XG5cblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZCgnPiBwID4gW2xhbmc9XCJsYVwiXSwgPiBwID4gaScpKSB7XG5cdFx0XHRjb25zdCB7dGV4dENvbnRlbnR9ID0gZWxlbWVudDtcblx0XHRcdGxldCB7cHJldmlvdXNTaWJsaW5nOiBwcmV2aW91c05vZGV9ID0gZWxlbWVudDtcblxuXHRcdFx0aWYgKHByZXZpb3VzTm9kZSAmJiBSRUdFWF9DT0xPTi50ZXN0KHByZXZpb3VzTm9kZS50ZXh0Q29udGVudCA/PyAnJykpIHtcblx0XHRcdFx0cHJldmlvdXNOb2RlID0gcHJldmlvdXNOb2RlLnByZXZpb3VzU2libGluZztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHByZXZpb3VzTm9kZSAmJiBSRUdFWF9QUkVGSVgudGVzdChwcmV2aW91c05vZGUudGV4dENvbnRlbnQgPz8gJycpKSB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0ZXh0Q29udGVudD8udHJpbSgpO1xuXHRcdFx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSB0aXRsZTsgLy8gUmVwbGFjZSBgdGl0bGVzLnB1c2godGl0bGUpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHRcdHdpbmRvdy50b29sc1JlZGlyZWN0LnNldFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgJ3t75a2m5ZCN6YeN5a6a5ZCRfX0nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gWy4uLm5ldyBTZXQodGl0bGVzKV07XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0b29sc1JlZGlyZWN0X2Jpb19sYXRpbl9uYW1lc307XG4iLCAiY29uc3QgdG9vbHNSZWRpcmVjdF9vcHRfYm9sZHMgPSAoKTogdm9pZCA9PiB7XG5cdHdpbmRvdy50b29sc1JlZGlyZWN0LmZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IoJ2RpdiNtdy1jb250ZW50LXRleHQgcCA+IGInKTtcbn07XG5cbmV4cG9ydCB7dG9vbHNSZWRpcmVjdF9vcHRfYm9sZHN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJ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QTRFLGlCQUFPQSxPQUFPdkcsTUFBTSxJQUFJMkI7QUFDeEJ3QyxpQkFBTzRMLGNBQWNuUixzQkFBc0IrQyxPQUFPLFdBQVc7UUFDOUQ7TUFDRDtJQUFBLFNBQUFvRyxLQUFBO0FBQUE0SSxrQkFBQTNJLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUE0SSxrQkFBQTFJLEVBQUE7SUFBQTtBQUVBLFdBQU8sQ0FBQyxHQUFHLElBQUkzQixJQUFJQyxNQUFNLENBQUM7RUFDM0IsQ0FBQztBQUNGOztBQzVCQSxJQUFNMkssMEJBQTBCQSxNQUFZO0FBQzNDL00sU0FBTzRMLGNBQWNyUix1QkFBdUIsMkJBQTJCO0FBQ3hFOztBUk1BeVIsWUFBWTtBQUVaLE1BQUEsR0FBS0gsbUJBQUFtQixTQUFRLEVBQUVqTCxLQUFNbEQsV0FBeUM7QUFDN0RMLGdCQUFjSSxLQUFLQyxLQUFLO0FBRXhCLE1BQUkvQyxHQUFHbVIsS0FBS0MsUUFBUTVRLElBQUksc0NBQXNDLEdBQUc7QUFDaEU4UCxrQ0FBOEI7RUFDL0I7QUFDQSxNQUFJdFEsR0FBR21SLEtBQUtDLFFBQVE1USxJQUFJLGdDQUFnQyxHQUFHO0FBQzFEeVEsNEJBQXdCO0VBQ3pCO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiVG9vbHNSZWRpcmVjdF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgImZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IiLCAiZmluZFJlZGlyZWN0Q2FsbGJhY2siLCAic2V0UmVkaXJlY3RUZXh0U3VmZml4IiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJhcGlUYWciLCAidmVyc2lvbiIsICJTVUZGSVhfQVBQRU5EIiwgIlNVRkZJWF9SRVBMQUNFIiwgIlNVRkZJWF9TRVRERUZBVUxUIiwgIlZBUklBTlRTIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFyZ3MiLCAiZnVsbEtleSIsICJsZW5ndGgiLCAibXciLCAibWVzc2FnZSIsICJwYXJzZSIsICJwbGFpbiIsICJ3Z05hbWVzcGFjZUlkcyIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAiSVNfQ0FURUdPUlkiLCAiZmluZFJlZGlyZWN0Q2FsbGJhY2tzIiwgInBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4IiwgInJlZGlyZWN0RXhjbHVkZXMiLCAibnNQcmVmaXhlcyIsICJuc0Nhbm9uUHJlZml4IiwgIm5zUHJlZml4UGF0dGVybiIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAidGV4dCIsICJuc2lkIiwgInNwbGl0IiwgIlJlZ0V4cCIsICJqb2luIiwgImZpeE5hbWVzcGFjZSIsICJ0aXRsZSIsICJ0ZXN0IiwgInJlcGxhY2UiLCAiY2FsbGJhY2siLCAiZ2VuZXJhdGVBcnJheSIsICJzZWxlY3RvciIsICIkIiwgIm1hcCIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJlcSIsICJ0cmltIiwgInN1ZmZpeCIsICJmbGFnIiwgImZsYWdfc2V0IiwgImZsYWdfYXBwZW5kIiwgIlRvb2xzUmVkaXJlY3QiLCAidGFic2VsZW0iLCAidGFnc2VsZW0iLCAidmFyaWFudHMiLCAiaW5pdCIsICIkYm9keSIsICJzZWxmIiwgImJ1dHRvbiIsICJhZGRDbGFzcyIsICJhdHRyIiwgImNzcyIsICJhcHBlbmQiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiZGlhbG9nIiwgImZpbmQiLCAiYWZ0ZXIiLCAiYmdpZnJhbWUiLCAicmVzaXphYmxlIiwgIm1vZGFsIiwgIndpZHRoIiwgIk1hdGgiLCAicm91bmQiLCAid2luZG93IiwgInBvc2l0aW9uIiwgImhlaWdodCIsICJhcHBlbmRUbyIsICJhZGRUYWJzIiwgInRhYnMiLCAia25hbWUiLCAiaGFzT3duIiwgImNoYXJBdCIsICJ0b1VwcGVyQ2FzZSIsICJzbGljZSIsICJ0YWIiLCAidGFnIiwgImNvbnQiLCAibG9hZFZpZXciLCAiY3JlYXRlVGFiIiwgInRhYm5hbWUiLCAidGFidGl0bGUiLCAib25DbGljayIsICJjYWxsIiwgImxvYWRlZCIsICJfaW5pdFRhYlZpZXciLCAiX2luaXRUYWJDcmVhdGUiLCAibG9hZENyZWF0ZSIsICJ2aWV3IiwgImNyZWF0ZSIsICJmaXgiLCAicGFnZW5hbWVzIiwgInJlbW92ZSIsICJsb2FkaW5nIiwgImJ1bGtFZGl0QnlSZWdleCIsICJ0aGVuIiwgInNldFRpbWVvdXQiLCAiYnVsa0VkaXQiLCAiYWRkUmVkaXJlY3RUZXh0U3VmZml4IiwgIlNldCIsICJ0aXRsZXMiLCAic3VtbWFyeSIsICJmaWx0ZXIiLCAidiIsICJpIiwgImFyciIsICJpbmRleE9mIiwgInBvc3QiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicXVlcnkiLCAiZGVmZXJyZWRzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAicGFnZXMiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgInBvc3RXaXRoVG9rZW4iLCAidGFncyIsICJlcnIiLCAiZSIsICJmIiwgIndoZW4iLCAicmVnZXgiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAicGFnZSIsICJjb250ZW50IiwgInJldmlzaW9ucyIsICJzbG90cyIsICJuZXdDb250ZW50IiwgImJhc2V0aW1lc3RhbXAiLCAidGltZXN0YW1wIiwgImxvYWRUYWJDb250IiwgInJlbG9hZCIsICJodG1sIiwgIiRkZXNjIiwgIiR0ZXh0IiwgImFwcGx5IiwgImZhaWwiLCAiYWx3YXlzIiwgImFkZE1ldGhvZHMiLCAiaHJlZiIsICJjbGljayIsICJjb250YWluZXIiLCAidG9Mb3dlckNhc2UiLCAicmVtb3ZlQ2xhc3MiLCAic2VsZWN0QWxsIiwgInNlbGVjdEludmVyc2UiLCAiZWFjaCIsICIkZWxlbWVudCIsICJzZWxlY3RBY3Rpb24iLCAiY2IiLCAicGFnZW5hbWUiLCAiZGF0YSIsICJjbGlja0FjdGlvbiIsICJidWlsZExpbmsiLCAiY2xhc3NuYW1lIiwgImEiLCAidGFyZ2V0IiwgInJlbCIsICIkcGFyZW50IiwgIm1ldGhvZHMiLCAiJGNvbnRhaW5lciIsICJtZXRob2RFeGlzdCIsICJKU09OIiwgInN0cmluZ2lmeSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJtZXRob2QiLCAiYnVpbGRTZWxlY3Rpb24iLCAibWFpbiIsICJtZXRkIiwgIm10IiwgImRzYWIiLCAic2VsZSIsICJsb2FkUmVkaXJlY3QiLCAiZmluZFJlZGlyZWN0IiwgImRlZXAiLCAiZGVmZXJyZWQiLCAiRGVmZXJyZWQiLCAidG9wIiwgIm9uQ2xpY2tGaXgiLCAiZW50cnkiLCAicGFyZW50cyIsICJmaXJzdCIsICJyZGxpbWl0IiwgImhhc19yZWRpcmVjdCIsICJkZXNjIiwgIm1heGltdW1SZWRpcmVjdERlcHRoIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgInJlZGlyZWN0cyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJyZHRpdGxlIiwgInVsdGl0bGUiLCAidXRpbCIsICJnZXRVcmwiLCAiaXNDeWNsZVJlZGlyZWN0IiwgInJlZGlyZWN0IiwgInJlc29sdmVXaXRoIiwgInJlamVjdFdpdGgiLCAicHJvbWlzZSIsICJmaW5kVmFyaWFudHMiLCAic3VmZml4UmVnIiwgInJldFRpdGxlcyIsICJfaTIiLCAiX1ZBUklBTlRTIiwgInZhcmlhbnQiLCAieGhyIiwgInVzZWxhbmciLCAiZGlzcGxheXRpdGxlIiwgInN1ZmZpeGVzIiwgIl9pMyIsICJfYXJncyIsICJzdWZmaXhBcnIiLCAiZXhlYyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJtb2RpZmllZFRpdGxlIiwgImZpbmROb3RFeGlzdHMiLCAiZXhjbHVkZXMiLCAiYWxsdGl0bGVzIiwgIl9pNCIsICJfVkFSSUFOVFMyIiwgImNvbnRlbnRtb2RlbCIsICJfaTUiLCAiX2FyZ3MyIiwgIl9pdGVyYXRvcjgiLCAiX3N0ZXA4IiwgIm1pc3NpbmciLCAiaGFzIiwgImZyY0RlZmVycmVkcyIsICIkY29udGVudCIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJyZXQiLCAib25DbGlja0NyZWF0ZSIsICJfaTYiLCAiX2FyZ3MzIiwgImZ2dGl0bGVzIiwgIl9pdGVyYXRvcjEwIiwgIl9zdGVwMTAiLCAicmVkbGluayIsICJ0b29sc1JlZGlyZWN0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ3Z1VzZXJMYW5ndWFnZSIsICJERUZBVUxUX01FU1NBR0VTIiwgInNldE1lc3NhZ2VzIiwgImluY2x1ZGVzIiwgIm1lc3NhZ2VzIiwgInNldCIsICJ0b29sc1JlZGlyZWN0X2Jpb19sYXRpbl9uYW1lcyIsICJSRUdFWF9QUkVGSVgiLCAiUkVHRVhfQ09MT04iLCAiX3BhZ2VOYW1lIiwgIl9pdGVyYXRvcjExIiwgIl9zdGVwMTEiLCAiX3ByZXZpb3VzTm9kZSR0ZXh0Q29uIiwgIl9wcmV2aW91c05vZGUkdGV4dENvbjIiLCAidGV4dENvbnRlbnQiLCAicHJldmlvdXNTaWJsaW5nIiwgInByZXZpb3VzTm9kZSIsICJ0b29sc1JlZGlyZWN0X29wdF9ib2xkcyIsICJnZXRCb2R5IiwgInVzZXIiLCAib3B0aW9ucyJdCn0K
