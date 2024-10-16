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
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
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
//! src/ToolsRedirect/modules/core.js
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/ToolsRedirect/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("ToolsRedirect/".concat(version));
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
  for (var _i = 0, _Object$entries = Object.entries(wgNamespaceIds); _i < _Object$entries.length; _i++) {
    const [text, nsid] = _Object$entries[_i];
    if (nsid === wgNamespaceNumber2 && !!text) {
      nsPrefixes[nsPrefixes.length] = text;
    }
  }
  if (wgNamespaceNumber2 === 0) {
    nsCanonPrefix = "";
    nsPrefixPattern = /^/;
  } else {
    nsCanonPrefix = "".concat(wgPageName2.split(":")[0], ":");
    nsPrefixPattern = new RegExp("^(".concat(nsPrefixes.join("|"), "):"), "i");
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
  const fullKey = "toolsredirect-".concat(key);
  return args.length ? mw.message(fullKey, ...args).parse() : mw.message(fullKey).plain();
};
//! src/ToolsRedirect/modules/core.js
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
    void self.bulkEditByRegex(pagenames, /\s*\[\[.*?(#.*?)?\]\]/, " [[".concat(wgPageName, "$1]]"), getMessage("fixsummary")).then(() => {
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
      text += "\n".concat((0, import_ext_gadget2.uniqueArray)(pageWithRedirectTextSuffix[title]).join("\n"));
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
      var _iterator7 = _createForOfIteratorHelper((0, import_ext_gadget2.uniqueArray)(suffixes)), _step7;
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
      return self.findNotExists((0, import_ext_gadget2.uniqueArray)(retTitles));
    });
  },
  findNotExists(titles) {
    const deferreds = [];
    const excludes = ["用字模式"];
    let alltitles = [];
    for (var _i4 = 0, _VARIANTS2 = VARIANTS; _i4 < _VARIANTS2.length; _i4++) {
      const variant = _VARIANTS2[_i4];
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
            if (page.missing && !excludes.includes(title)) {
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
          titles = (0, import_ext_gadget2.uniqueArray)([...titles, ...ret]);
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
          titles = (0, import_ext_gadget2.uniqueArray)([...titles, ...ret]);
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
//! src/ToolsRedirect/ToolsRedirect.ts
var import_ext_gadget3 = require("ext.gadget.Util");
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
void (0, import_ext_gadget3.getBody)().then(($body) => {
  ToolsRedirect.init($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QvVG9vbHNSZWRpcmVjdC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9vcHRpb25zLmpzb24iLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL2NvcmUuanMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy91dGlsL2ZpeE5hbWVzcGFjZS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL3V0aWwvZ2V0TWVzc2FnZS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL21lc3NhZ2VzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vVG9vbHNSZWRpcmVjdC5sZXNzJztcbmltcG9ydCB7VG9vbHNSZWRpcmVjdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtzZXRNZXNzYWdlc30gZnJvbSAnLi9tb2R1bGVzL21lc3NhZ2VzJztcblxuc2V0TWVzc2FnZXMoKTtcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFRvb2xzUmVkaXJlY3QuaW5pdCgkYm9keSk7XG59KTtcblxuZXhwb3J0IHtmaW5kUmVkaXJlY3RDYWxsYmFjaywgZmluZFJlZGlyZWN0QnlTZWxlY3Rvciwgc2V0UmVkaXJlY3RUZXh0U3VmZml4fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG4iLCAie1xuXHRcImFwaVRhZ1wiOiBcIlRvb2xzUmVkaXJlY3RcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJjb25zdCBTVUZGSVhfQVBQRU5EID0gMDtcbmNvbnN0IFNVRkZJWF9SRVBMQUNFID0gMTtcbmNvbnN0IFNVRkZJWF9TRVRERUZBVUxUID0gMjtcblxuY29uc3QgVkFSSUFOVFMgPSBbJ3poLWhhbnMnLCAnemgtaGFudCcsICd6aC1jbicsICd6aC1oaycsICd6aC1tbycsICd6aC1zZycsICd6aC1teScsICd6aC10dyddO1xuXG5leHBvcnQge1NVRkZJWF9BUFBFTkQsIFNVRkZJWF9SRVBMQUNFLCBTVUZGSVhfU0VUREVGQVVMVCwgVkFSSUFOVFN9O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1NVRkZJWF9BUFBFTkQsIFNVRkZJWF9SRVBMQUNFLCBTVUZGSVhfU0VUREVGQVVMVCwgVkFSSUFOVFN9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2ZpeE5hbWVzcGFjZX0gZnJvbSAnLi91dGlsL2ZpeE5hbWVzcGFjZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vdXRpbC9nZXRNZXNzYWdlJztcblxuY29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IElTX0NBVEVHT1JZID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0O1xubGV0IGZpbmRSZWRpcmVjdENhbGxiYWNrcyA9IFtdO1xuY29uc3QgcGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXggPSB7fTtcbmNvbnN0IHJlZGlyZWN0RXhjbHVkZXMgPSB7fTtcblxuLyoqXG4gKiBBZGQgbmV3IGN1c3RvbSBjYWxsYmFjayBmb3IgZmluZGluZyBuZXcgcG90ZW50aWFsIHJlZGlyZWN0IHRpdGxlcy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAocGFnZW5hbWUsICRjb250ZW50LCB0aXRsZXMpID0+IHRpdGxlIGxpc3RcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGFyZ3NcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuY29uc3QgZmluZFJlZGlyZWN0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIC4uLmFyZ3MpIHtcblx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0ZmluZFJlZGlyZWN0Q2FsbGJhY2tzW2ZpbmRSZWRpcmVjdENhbGxiYWNrcy5sZW5ndGhdID0gY2FsbGJhY2s7XG5cdH0gZWxzZSB7XG5cdFx0ZmluZFJlZGlyZWN0Q2FsbGJhY2tzID0gZ2VuZXJhdGVBcnJheShmaW5kUmVkaXJlY3RDYWxsYmFja3MsIGNhbGxiYWNrLCAuLi5hcmdzKTtcblx0fVxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRmluZCBuZXcgcG90ZW50aWFsIHJlZGlyZWN0IHRpdGxlcyB0aHJvdWdoIHNlbGVjdG9yKHMpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmNvbnN0IGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblx0LyogQSBzaG9ydGN1dCB0byBhZGQgQ1NTIHNlbGVjdG9ycyBhcyBydWxlIHRvIGZpbmQgbmV3IHBvdGVudGlhbCByZWRpcmVjdCB0aXRsZXMuICovXG5cdGZpbmRSZWRpcmVjdENhbGxiYWNrc1tmaW5kUmVkaXJlY3RDYWxsYmFja3MubGVuZ3RoXSA9ICgpID0+IHtcblx0XHRyZXR1cm4gJChzZWxlY3RvcikubWFwKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiAkKGVsZW1lbnQpLmVxKDApLnRleHQoKS50cmltKCkgfHwgbnVsbDtcblx0XHR9KTtcblx0fTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5jb25zdCBzZXRSZWRpcmVjdFRleHRTdWZmaXggPSAodGl0bGUsIHN1ZmZpeCwgZmxhZykgPT4ge1xuXHRsZXQgZmxhZ19zZXQgPSBmYWxzZTtcblx0bGV0IGZsYWdfYXBwZW5kID0gZmFsc2U7XG5cdGZsYWcgfHw9IFNVRkZJWF9BUFBFTkQ7IC8vIGRlZmF1bHQgYXBwZW5kXG5cdGZsYWdfc2V0ID0gZmxhZyA9PT0gU1VGRklYX1JFUExBQ0U7XG5cdHRpdGxlID0gZml4TmFtZXNwYWNlKHRpdGxlKTtcblx0aWYgKHRpdGxlIGluIHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4KSB7XG5cdFx0ZmxhZ19hcHBlbmQgPSBmbGFnID09PSBTVUZGSVhfQVBQRU5EO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGlmIG5vdCBleGlzdCwgZXZlcnkgZmxhZyBjYW4gc2V0XG5cdFx0ZmxhZ19zZXQgPSB0cnVlO1xuXHR9XG5cdGlmIChmbGFnX3NldCkge1xuXHRcdHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSA9IGdlbmVyYXRlQXJyYXkoc3VmZml4KTtcblx0fSBlbHNlIGlmIChmbGFnX2FwcGVuZCkge1xuXHRcdHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSA9IGdlbmVyYXRlQXJyYXkocGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXhbdGl0bGVdLCBzdWZmaXgpO1xuXHR9XG59O1xuXG5jb25zdCBUb29sc1JlZGlyZWN0ID0ge1xuXHR0YWJzZWxlbTogbnVsbCxcblx0dGFnc2VsZW06IG51bGwsXG5cdHZhcmlhbnRzOiBWQVJJQU5UUyxcblx0aW5pdCgkYm9keSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0LmFkZENsYXNzKCdtdy1saXN0LWl0ZW0gY29sbGFwc2libGUgdmVjdG9yLXRhYi1ub2ljb24nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ2NhLXJlZGlyZWN0Jylcblx0XHRcdC5jc3MoJ2N1cnNvcicsICdwb2ludGVyJylcblx0XHRcdC5hcHBlbmQoJCgnPGE+JykuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKCdidG5kZXNjJykpLnRleHQoZ2V0TWVzc2FnZSgnYnRudGl0bGUnKSkpO1xuXHRcdGJ1dHRvbi5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRzZWxmLmRpYWxvZygpO1xuXHRcdH0pO1xuXHRcdCRib2R5LmZpbmQoJ2xpI2NhLWhpc3RvcnknKS5hZnRlcihidXR0b24pO1xuXHR9LFxuXHRkaWFsb2coKSB7XG5cdFx0Y29uc3QgZGlhbG9nID0gJCgnPGRpdj4nKVxuXHRcdFx0LmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnZGxndGl0bGUnKSlcblx0XHRcdC5hZGRDbGFzcygnZGlhbG9nLXJlZGlyZWN0Jylcblx0XHRcdC5kaWFsb2coe1xuXHRcdFx0XHRiZ2lmcmFtZTogdHJ1ZSxcblx0XHRcdFx0cmVzaXphYmxlOiBmYWxzZSxcblx0XHRcdFx0bW9kYWw6IHRydWUsXG5cdFx0XHRcdHdpZHRoOiBNYXRoLnJvdW5kKCQod2luZG93KS53aWR0aCgpICogMC44KSxcblx0XHRcdFx0cG9zaXRpb246ICdjZW50ZXInLFxuXHRcdFx0fSk7XG5cdFx0ZGlhbG9nLmNzcygnbWF4LWhlaWdodCcsIGAke01hdGgucm91bmQoJCh3aW5kb3cpLmhlaWdodCgpICogMC44KX1weGApO1xuXHRcdHRoaXMudGFic2VsZW0gPSAkKCc8ZGl2PicpLmFkZENsYXNzKCd0YWItcmVkaXJlY3QnKS5hcHBlbmRUbyhkaWFsb2cpO1xuXHRcdHRoaXMudGFnc2VsZW0gPSAkKCc8dWw+JykuYXBwZW5kVG8odGhpcy50YWJzZWxlbSk7XG5cdFx0dGhpcy5hZGRUYWJzKCk7XG5cdFx0dGhpcy50YWJzZWxlbS50YWJzKCk7XG5cdH0sXG5cdGFkZFRhYnMoKSB7XG5cdFx0Zm9yIChjb25zdCBrbmFtZSBpbiB0aGlzLnRhYnMpIHtcblx0XHRcdGlmIChPYmplY3QuaGFzT3duKHRoaXMudGFicywga25hbWUpKSB7XG5cdFx0XHRcdGlmICh0aGlzLnRhYnNba25hbWVdID09PSBudWxsKSB7XG5cdFx0XHRcdFx0dGhpcy50YWJzW2tuYW1lXSA9IHRoaXNbYF9pbml0VGFiJHtrbmFtZVswXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2tuYW1lLnNsaWNlKDEpfWBdKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdGFiID0gdGhpcy50YWJzW2tuYW1lXTtcblx0XHRcdFx0dGhpcy50YWdzZWxlbS5hcHBlbmQodGFiLnRhZyk7XG5cdFx0XHRcdHRoaXMudGFic2VsZW0uYXBwZW5kKHRhYi5jb250KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gZGVmYXVsdCB0YWIsIGF1dG9sb2FkIHdoZW4gZGlhbG9nIGluaXRpYXRlXG5cdFx0dGhpcy5sb2FkVmlldygpO1xuXHR9LFxuXHRjcmVhdGVUYWIodGFibmFtZSwgdGFidGl0bGUsIG9uQ2xpY2spIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCB0YWcgPSAkKCc8bGk+JykuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ2hyZWYnLCBgI3RhYi0ke3RhYm5hbWV9YCkudGV4dCh0YWJ0aXRsZSkpO1xuXHRcdGNvbnN0IGNvbnQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgYHRhYi0ke3RhYm5hbWV9YCk7XG5cdFx0JCgnYScsIHRhZykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0b25DbGljay5jYWxsKHNlbGYpO1xuXHRcdH0pO1xuXHRcdHJldHVybiB7XG5cdFx0XHR0YWcsXG5cdFx0XHRjb250LFxuXHRcdFx0bG9hZGVkOiBmYWxzZSxcblx0XHR9O1xuXHR9LFxuXHRfaW5pdFRhYlZpZXcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlVGFiKCd2aWV3JywgZ2V0TWVzc2FnZSgndGFidmlld3RpdGxlJyksIHRoaXMubG9hZFZpZXcpO1xuXHR9LFxuXHRfaW5pdFRhYkNyZWF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVUYWIoJ2NyZWF0ZScsIGdldE1lc3NhZ2UoJ3RhYmNyZWF0ZXRpdGxlJyksIHRoaXMubG9hZENyZWF0ZSk7XG5cdH0sXG5cdHRhYnM6IHtcblx0XHR2aWV3OiBudWxsLFxuXHRcdGNyZWF0ZTogbnVsbCxcblx0fSxcblx0Zml4KHBhZ2VuYW1lcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdCQoJ3AuZGVzYycsIHNlbGYudGFicy52aWV3LmNvbnQpLnRleHQoZ2V0TWVzc2FnZSgnZml4bG9hZGluZycpKTtcblx0XHQkKCdwW2NsYXNzIT1kZXNjXScsIHNlbGYudGFicy52aWV3LmNvbnQpLnJlbW92ZSgpO1xuXHRcdHNlbGYubG9hZGluZyhzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHR2b2lkIHNlbGZcblx0XHRcdC5idWxrRWRpdEJ5UmVnZXgocGFnZW5hbWVzLCAvXFxzKlxcW1xcWy4qPygjLio/KT9cXF1cXF0vLCBgIFtbJHt3Z1BhZ2VOYW1lfSQxXV1gLCBnZXRNZXNzYWdlKCdmaXhzdW1tYXJ5JykpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdC8vIGRlbGF5IGxvYWQgYmVmb3JlIHRoZSBhc3luY2hyb25vdXMgdGFza3Mgb24gc2VydmVyIGZpbmlzaGVkXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYubG9hZGVkKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRcdHNlbGYubG9hZFZpZXcodHJ1ZSk7XG5cdFx0XHRcdH0sIDMwMDApO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGNyZWF0ZShwYWdlbmFtZXMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHQkKCdwLmRlc2MnLCBzZWxmLnRhYnMuY3JlYXRlLmNvbnQpLnRleHQoZ2V0TWVzc2FnZSgnY3JlYXRlbG9hZGluZycpKTtcblx0XHQkKCdwW2NsYXNzIT1kZXNjXScsIHNlbGYudGFicy5jcmVhdGUuY29udCkucmVtb3ZlKCk7XG5cdFx0c2VsZi5sb2FkaW5nKHNlbGYudGFicy5jcmVhdGUuY29udCk7XG5cdFx0dm9pZCBzZWxmXG5cdFx0XHQuYnVsa0VkaXQoXG5cdFx0XHRcdHBhZ2VuYW1lcyxcblx0XHRcdFx0Z2V0TWVzc2FnZSgnY3JlYXRldGV4dCcpLnJlcGxhY2UoJyQxJywgd2dQYWdlTmFtZSksXG5cdFx0XHRcdGdldE1lc3NhZ2UoJ2NyZWF0ZXN1bW1hcnknKS5yZXBsYWNlKCckMScsIHdnUGFnZU5hbWUpXG5cdFx0XHQpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdC8vIGRlbGF5IGxvYWQgYmVmb3JlIHRoZSBhc3luY2hyb25vdXMgdGFza3Mgb24gc2VydmVyIGZpbmlzaGVkXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYubG9hZGVkKHNlbGYudGFicy5jcmVhdGUuY29udCk7XG5cdFx0XHRcdFx0c2VsZi50YWJzLnZpZXcubG9hZGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0c2VsZi5sb2FkQ3JlYXRlKHRydWUpO1xuXHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGFkZFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgdGV4dCkge1xuXHRcdGlmICh0aXRsZSBpbiBwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeCkge1xuXHRcdFx0dGV4dCArPSBgXFxuJHt1bmlxdWVBcnJheShwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0pLmpvaW4oJ1xcbicpfWA7IC8vIFJlcGxhY2UgYFsuLi5uZXcgU2V0KCldYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0fVxuXHRcdHJldHVybiB0ZXh0O1xuXHR9LFxuXHRidWxrRWRpdCh0aXRsZXMsIHRleHQsIHN1bW1hcnkpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHR0aXRsZXMgPSB0aXRsZXMuZmlsdGVyKCh2LCBpLCBhcnIpID0+IHtcblx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2KSA9PT0gaTtcblx0XHR9KTtcblx0XHRyZXR1cm4gYXBpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHR0aXRsZXMsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGRlZmVycmVkc1tkZWZlcnJlZHMubGVuZ3RoXSA9IGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdFx0dGV4dDogc2VsZi5hZGRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsIHRleHQpLFxuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdHRhZ3M6IE9QVElPTlMuYXBpVGFnLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRidWxrRWRpdEJ5UmVnZXgodGl0bGVzLCByZWdleCwgdGV4dCwgc3VtbWFyeSkge1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5maWx0ZXIoKHYsIGksIGFycikgPT4ge1xuXHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKHYpID09PSBpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBhcGlcblx0XHRcdC5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdFx0dGl0bGVzLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGRlZmVycmVkcyA9IFtdO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRjb25zdCB7Y29udGVudH0gPSBwYWdlLnJldmlzaW9uc1swXS5zbG90c1snbWFpbiddO1xuXHRcdFx0XHRcdGNvbnN0IG5ld0NvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UocmVnZXgsIHRleHQpO1xuXHRcdFx0XHRcdGRlZmVycmVkc1tkZWZlcnJlZHMubGVuZ3RoXSA9IGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRcdHRpdGxlOiBwYWdlLnRpdGxlLFxuXHRcdFx0XHRcdFx0dGV4dDogbmV3Q29udGVudCxcblx0XHRcdFx0XHRcdHRhZ3M6IE9QVElPTlMuYXBpVGFnLFxuXHRcdFx0XHRcdFx0YmFzZXRpbWVzdGFtcDogcGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wLFxuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gJC53aGVuKC4uLmRlZmVycmVkcyk7XG5cdFx0XHR9KTtcblx0fSxcblx0bG9hZFRhYkNvbnQodGFibmFtZSwgY2FsbGJhY2ssIHJlbG9hZCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IHRhYiA9IHNlbGYudGFic1t0YWJuYW1lXTtcblx0XHRpZiAocmVsb2FkKSB7XG5cdFx0XHR0YWIubG9hZGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghdGFiLmxvYWRlZCkge1xuXHRcdFx0dGFiLmNvbnQuaHRtbCgnJyk7XG5cdFx0XHQvL1xuXHRcdFx0Y29uc3QgJGRlc2MgPSAkKCc8cD4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2Rlc2MnKVxuXHRcdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLmFkZENsYXNzKCdkZXNjLXRleHQnKS50ZXh0KGdldE1lc3NhZ2UoJ3JlZGlsb2FkaW5nJykpKVxuXHRcdFx0XHQuYXBwZW5kVG8odGFiLmNvbnQpO1xuXHRcdFx0Y29uc3QgJHRleHQgPSAkZGVzYy5maW5kKCc+IC5kZXNjLXRleHQnKTtcblx0XHRcdGNhbGxiYWNrXG5cdFx0XHRcdC5hcHBseShzZWxmKVxuXHRcdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLmpzXG5cdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdCR0ZXh0LnRleHQoZ2V0TWVzc2FnZShgdGFiJHt0YWJuYW1lfWRlc2NgKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5mYWlsKCgpID0+IHtcblx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMuanNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0JHRleHQudGV4dChnZXRNZXNzYWdlKGB0YWIke3RhYm5hbWV9bm90Zm91bmRgKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYuYWRkTWV0aG9kcygkZGVzYywgW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3JlZnJlc2gnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgncmVmcmVzaCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5sb2FkVGFiQ29udCh0YWJuYW1lLCBjYWxsYmFjaywgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdHRhYi5sb2FkZWQgPSB0cnVlO1xuXHRcdH1cblx0fSxcblx0bG9hZGluZyhjb250YWluZXIpIHtcblx0XHRpZiAoY29udGFpbmVyLnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpID09PSAnc3BhbicpIHtcblx0XHRcdGNvbnRhaW5lci5hZGRDbGFzcygnbXctYWpheC1sb2FkZXInKTtcblx0XHR9IGVsc2UgaWYgKCQoJ3NwYW4ubXctYWpheC1sb2FkZXInLCBjb250YWluZXIpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0JCgnPHNwYW4+JykuYWRkQ2xhc3MoJ213LWFqYXgtbG9hZGVyJykuYXBwZW5kVG8oY29udGFpbmVyKTtcblx0XHR9XG5cdH0sXG5cdGxvYWRlZChjb250YWluZXIpIHtcblx0XHRpZiAoY29udGFpbmVyLnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpID09PSAnc3BhbicpIHtcblx0XHRcdGNvbnRhaW5lci5yZW1vdmVDbGFzcygnbXctYWpheC1sb2FkZXInKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnc3Bhbi5tdy1hamF4LWxvYWRlcicsIGNvbnRhaW5lcikucmVtb3ZlKCk7XG5cdFx0fVxuXHR9LFxuXHRzZWxlY3RBbGwoY29udCkge1xuXHRcdCQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdOm5vdCg6ZGlzYWJsZWQpJywgY29udCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuXHR9LFxuXHRzZWxlY3RJbnZlcnNlKGNvbnQpIHtcblx0XHQkKCdpbnB1dFt0eXBlPWNoZWNrYm94XTpub3QoOmRpc2FibGVkKScsIGNvbnQpLmVhY2goKF9pbmRleCwgZWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXHRcdFx0JGVsZW1lbnQucHJvcCgnY2hlY2tlZCcsICEkZWxlbWVudC5wcm9wKCdjaGVja2VkJykpO1xuXHRcdH0pO1xuXHR9LFxuXHRzZWxlY3RBY3Rpb24oY29udCwgY2IpIHtcblx0XHRjb25zdCBwYWdlbmFtZXMgPSBbXTtcblx0XHQkKCdpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkJywgY29udCkuZWFjaCgoX2luZGV4LCBwYWdlbmFtZSkgPT4ge1xuXHRcdFx0cGFnZW5hbWVzW3BhZ2VuYW1lcy5sZW5ndGhdID0gJChwYWdlbmFtZSkuZGF0YSgncGFnZS10aXRsZScpO1xuXHRcdH0pO1xuXHRcdGlmIChwYWdlbmFtZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y2IuY2FsbCh0aGlzLCBwYWdlbmFtZXMpO1xuXHRcdH1cblx0fSxcblx0Y2xpY2tBY3Rpb24oY29udCwgY2IpIHtcblx0XHRjb25zdCBwYWdlbmFtZSA9ICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIGNvbnQpLmRhdGEoJ3BhZ2UtdGl0bGUnKTtcblx0XHRjYi5jYWxsKHRoaXMsIFtwYWdlbmFtZV0pO1xuXHR9LFxuXHRidWlsZExpbmsoe3RpdGxlLCBocmVmLCBjbGljaywgY2xhc3NuYW1lfSkge1xuXHRcdGNvbnN0IGEgPSAkKCc8YT4nKVxuXHRcdFx0LmF0dHIoe1xuXHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0aHJlZixcblx0XHRcdFx0dGFyZ2V0OiAnX2JsYW5rJyxcblx0XHRcdFx0cmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcicsXG5cdFx0XHR9KVxuXHRcdFx0LnRleHQodGl0bGUpO1xuXHRcdGlmIChjbGljaykge1xuXHRcdFx0YS5vbignY2xpY2snLCBjbGljayk7XG5cdFx0fVxuXHRcdGlmIChjbGFzc25hbWUpIHtcblx0XHRcdGEuYWRkQ2xhc3MoY2xhc3NuYW1lKTtcblx0XHR9XG5cdFx0cmV0dXJuICQoJzxzcGFuPicpLmFkZENsYXNzKCd0b29scy1yZWRpcmVjdF9saW5rJykuYXBwZW5kKGEpO1xuXHR9LFxuXHRhZGRNZXRob2RzKCRwYXJlbnQsIG1ldGhvZHMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRsZXQgJGNvbnRhaW5lciA9ICRwYXJlbnQuZmluZCgnPiAudG9vbHMtcmVkaXJlY3RfbWV0aG9kcycpO1xuXHRcdGNvbnN0IG1ldGhvZEV4aXN0ID0gKHtocmVmfSkgPT4ge1xuXHRcdFx0cmV0dXJuICRjb250YWluZXIuZmluZChgYVtocmVmPSR7SlNPTi5zdHJpbmdpZnkoaHJlZil9XWApLmxlbmd0aCA+IDA7XG5cdFx0fTtcblx0XHRpZiAoJGNvbnRhaW5lci5sZW5ndGggPT09IDApIHtcblx0XHRcdCRjb250YWluZXIgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygndG9vbHMtcmVkaXJlY3RfbWV0aG9kcycpLmFwcGVuZFRvKCRwYXJlbnQpO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IG1ldGhvZCBvZiBtZXRob2RzKSB7XG5cdFx0XHRpZiAoIW1ldGhvZEV4aXN0KG1ldGhvZCkpIHtcblx0XHRcdFx0c2VsZi5idWlsZExpbmsobWV0aG9kKS5hcHBlbmRUbygkY29udGFpbmVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGJ1aWxkU2VsZWN0aW9uKG1haW4sIG1ldGQsIG10LCBkc2FiKSB7XG5cdFx0Y29uc3QgY29udCA9ICQoJzxzcGFuPicpO1xuXHRcdGNvbnN0IHNlbGUgPSAkKCc8aW5wdXQ+JykuYXR0cigndHlwZScsICdjaGVja2JveCcpLmFwcGVuZFRvKGNvbnQpO1xuXHRcdHRoaXMuYnVpbGRMaW5rKG1haW4pLmFwcGVuZFRvKGNvbnQpO1xuXHRcdHRoaXMuYWRkTWV0aG9kcyhjb250LCBtZXRkKTtcblx0XHRzZWxlLmRhdGEoJ3BhZ2UtdGl0bGUnLCBtdCk7XG5cdFx0aWYgKGRzYWIpIHtcblx0XHRcdHNlbGUucHJvcCgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbnQ7XG5cdH0sXG5cdGxvYWRWaWV3KHJlbG9hZCkge1xuXHRcdGNvbnN0ICRjb250YWluZXIgPSB0aGlzLnRhYnMudmlldy5jb250O1xuXHRcdHRoaXMubG9hZFRhYkNvbnQoXG5cdFx0XHQndmlldycsXG5cdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmxvYWRSZWRpcmVjdCh3Z1BhZ2VOYW1lLCAkY29udGFpbmVyLCAwKTtcblx0XHRcdH0sXG5cdFx0XHRyZWxvYWRcblx0XHQpO1xuXHR9LFxuXHRsb2FkQ3JlYXRlKHJlbG9hZCkge1xuXHRcdHRoaXMubG9hZFRhYkNvbnQoXG5cdFx0XHQnY3JlYXRlJyxcblx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmluZFJlZGlyZWN0KHdnUGFnZU5hbWUpO1xuXHRcdFx0fSxcblx0XHRcdHJlbG9hZFxuXHRcdCk7XG5cdH0sXG5cdGxvYWRSZWRpcmVjdChwYWdlbmFtZSwgY29udGFpbmVyLCBkZWVwLCBsb2FkZWQpIHtcblx0XHR0aGlzLmxvYWRpbmcoY29udGFpbmVyKTtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCB0b3AgPSBkZWVwID8gJCgnPGRsPicpLmFwcGVuZFRvKGNvbnRhaW5lcikgOiBjb250YWluZXI7XG5cdFx0aWYgKCFsb2FkZWQpIHtcblx0XHRcdGxvYWRlZCA9IHt9O1xuXHRcdFx0bG9hZGVkW3BhZ2VuYW1lXSA9IHRydWU7XG5cdFx0fVxuXHRcdGNvbnN0IG9uQ2xpY2tGaXggPSAoZXZlbnQpID0+IHtcblx0XHRcdGNvbnN0IGVudHJ5ID0gJCh0aGlzKS5wYXJlbnRzKCdkZCwgcCcpLmZpcnN0KCk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c2VsZi5jbGlja0FjdGlvbihlbnRyeSwgdGhpcy5maXgpO1xuXHRcdH07XG5cdFx0dm9pZCBhcGlcblx0XHRcdC5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAncmVkaXJlY3RzJyxcblx0XHRcdFx0dGl0bGVzOiBwYWdlbmFtZSxcblx0XHRcdFx0cmRsaW1pdDogJ21heCcsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0c2VsZi5sb2FkZWQoY29udGFpbmVyKTtcblx0XHRcdFx0bGV0IGhhc19yZWRpcmVjdCA9IGZhbHNlO1xuXHRcdFx0XHRjb25zdCBkZXNjID0gJCgncC5kZXNjJywgc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0XHRcdGNvbnN0IG1heGltdW1SZWRpcmVjdERlcHRoID0gMTA7XG5cdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGlmIChwYWdlLnJlZGlyZWN0cykge1xuXHRcdFx0XHRcdFx0Y29uc3Qge3JlZGlyZWN0c30gPSBwYWdlO1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGV9IG9mIHJlZGlyZWN0cykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCByZHRpdGxlID0gdGl0bGU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHVsdGl0bGUgPSByZHRpdGxlLnJlcGxhY2UoLyAvZywgJ18nKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZW50cnkgPSAoZGVlcCA/ICQoJzxkZD4nKSA6ICQoJzxwPicpKS5hcHBlbmRUbyh0b3ApO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBtZXRob2RzID0gW1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY6IG13LnV0aWwuZ2V0VXJsKHVsdGl0bGUsIHthY3Rpb246ICdlZGl0J30pLFxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3JlZGllZGl0JyksXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgaXNDeWNsZVJlZGlyZWN0ID0gcmR0aXRsZSBpbiBsb2FkZWQ7XG5cdFx0XHRcdFx0XHRcdGxvYWRlZFtyZHRpdGxlXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdGlmICghaXNDeWNsZVJlZGlyZWN0ICYmIGRlZXApIHtcblx0XHRcdFx0XHRcdFx0XHRtZXRob2RzW21ldGhvZHMubGVuZ3RoXSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY6ICcjZml4LXJlZGlyZWN0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJ2aWV3Zml4JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGljazogb25DbGlja0ZpeCxcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRjb250YWluZXIgPSBzZWxmXG5cdFx0XHRcdFx0XHRcdFx0LmJ1aWxkU2VsZWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmOiBtdy51dGlsLmdldFVybCh1bHRpdGxlLCB7cmVkaXJlY3Q6ICdubyd9KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJkdGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0bWV0aG9kcyxcblx0XHRcdFx0XHRcdFx0XHRcdHVsdGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHQhZGVlcFxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kVG8oZW50cnkpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaXNDeWNsZVJlZGlyZWN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0JGNvbnRhaW5lci5hcHBlbmQoYDxzcGFuIGNsYXNzPVwiZXJyb3JcIj4ke2dldE1lc3NhZ2UoJ2VycmN5Y2xlcmVkaXJlY3QnKX08L3NwYW4+YCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZGVlcCA8IG1heGltdW1SZWRpcmVjdERlcHRoKSB7XG5cdFx0XHRcdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLmxvYWRSZWRpcmVjdChyZHRpdGxlLCBlbnRyeSwgZGVlcCArIDEsIGxvYWRlZCk7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aGFzX3JlZGlyZWN0ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aGFzX3JlZGlyZWN0ID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChoYXNfcmVkaXJlY3QgJiYgZGVlcCA9PT0gMSkge1xuXHRcdFx0XHRcdHNlbGYuYWRkTWV0aG9kcyhkZXNjLCBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWFsbCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdzZWxlY3RhbGwnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0QWxsKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNzZWxlY3QtaW52ZXJzZScsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdzZWxlY3RpbnZlcnNlJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEludmVyc2Uoc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI2ZpeC1zZWxlY3RlZCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJ2aWV3Zml4JyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFjdGlvbihzZWxmLnRhYnMudmlldy5jb250LCBzZWxmLmZpeCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChoYXNfcmVkaXJlY3QpIHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmVXaXRoKHNlbGYpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0V2l0aChzZWxmKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcblx0fSxcblx0ZmluZFZhcmlhbnRzKHBhZ2VuYW1lLCB0aXRsZXMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBzdWZmaXhSZWcgPSAvXi4rPygo77yIfFsgX11cXCgpLis/KFsp77yJXSkpJC87XG5cdFx0bGV0IHJldFRpdGxlcyA9IFtdO1xuXHRcdGNvbnN0IGRlZmVycmVkcyA9IFtdO1xuXHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiBWQVJJQU5UUykge1xuXHRcdFx0Y29uc3QgeGhyID0gYXBpXG5cdFx0XHRcdC5wb3N0KHtcblx0XHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdHBhZ2U6IHBhZ2VuYW1lLFxuXHRcdFx0XHRcdHByb3A6ICdkaXNwbGF5dGl0bGUnLFxuXHRcdFx0XHRcdHVzZWxhbmc6IHZhcmlhbnQsXG5cdFx0XHRcdFx0dmFyaWFudCxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRoZW4oKHtwYXJzZX0pID0+IHtcblx0XHRcdFx0XHRjb25zdCB7ZGlzcGxheXRpdGxlfSA9IHBhcnNlO1xuXHRcdFx0XHRcdC8vIEV4YW1wbGU6XG5cdFx0XHRcdFx0Ly8gLSBCZWZvcmU6IDxzcGFuIGNsYXNzPVwibXctcGFnZS10aXRsZS1uYW1lc3BhY2VcIj7msYLpl7vnmb7np5E8L3NwYW4+PHNwYW4gY2xhc3M9XCJtdy1wYWdlLXRpdGxlLXNlcGFyYXRvclwiPjo8L3NwYW4+PHNwYW4gY2xhc3M9XCJtdy1wYWdlLXRpdGxlLW1haW5cIj7mspnnm5I8L3NwYW4+XG5cdFx0XHRcdFx0Ly8gLSBBZnRlcjog5rGC6Ze755m+56eROuaymeebklxuXHRcdFx0XHRcdGxldCB0aXRsZSA9ICQoJzxzcGFuPicpLmFwcGVuZChkaXNwbGF5dGl0bGUpLmVxKDApLnRleHQoKS50cmltKCk7XG5cdFx0XHRcdFx0dGl0bGUgPSBmaXhOYW1lc3BhY2UodGl0bGUpO1xuXHRcdFx0XHRcdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgJ3t7566A57mB6YeN5a6a5ZCRfX0nLCBTVUZGSVhfQVBQRU5EKTtcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0ZGVmZXJyZWRzW2RlZmVycmVkcy5sZW5ndGhdID0geGhyO1xuXHRcdH1cblx0XHRyZXR1cm4gJC53aGVuKC4uLmRlZmVycmVkcykudGhlbigoLi4uYXJncykgPT4ge1xuXHRcdFx0Y29uc3Qgc3VmZml4ZXMgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgdGl0bGUgb2YgYXJncykge1xuXHRcdFx0XHRsZXQgc3VmZml4O1xuXHRcdFx0XHQvLyBmaW5kIHRpdGxlIHN1ZmZpeCxcblx0XHRcdFx0Ly8gZm9yIGV4YW1wbGUgXCIgKOa1juWNl+W4gilcIiB0byBcIuW4guS4reWMuiAo5rWO5Y2X5biCKVwiXG5cdFx0XHRcdGNvbnN0IHN1ZmZpeEFyciA9IHN1ZmZpeFJlZy5leGVjKHRpdGxlKTtcblx0XHRcdFx0aWYgKHN1ZmZpeEFyciAmJiBzdWZmaXhBcnIubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRcdFx0Wywgc3VmZml4XSA9IHN1ZmZpeEFycjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdWZmaXggPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXRUaXRsZXNbcmV0VGl0bGVzLmxlbmd0aF0gPSB0aXRsZTtcblx0XHRcdFx0c3VmZml4ZXNbc3VmZml4ZXMubGVuZ3RoXSA9IHN1ZmZpeDtcblx0XHRcdH1cblx0XHRcdC8vIGFwcGVuZCBzdWZmaXhlc1xuXHRcdFx0Zm9yIChjb25zdCBzdWZmaXggb2YgdW5pcXVlQXJyYXkoc3VmZml4ZXMpKSB7XG5cdFx0XHRcdHJldFRpdGxlcyA9IFtcblx0XHRcdFx0XHQuLi5yZXRUaXRsZXMsXG5cdFx0XHRcdFx0Li4udGl0bGVzLm1hcCgodGl0bGUpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IG1vZGlmaWVkVGl0bGUgPSBmaXhOYW1lc3BhY2UodGl0bGUpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHN1ZmZpeFJlZy50ZXN0KG1vZGlmaWVkVGl0bGUpID8gbW9kaWZpZWRUaXRsZSA6IG1vZGlmaWVkVGl0bGUgKyBzdWZmaXg7XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZWxmLmZpbmROb3RFeGlzdHModW5pcXVlQXJyYXkocmV0VGl0bGVzKSk7IC8vIFJlcGxhY2UgYFsuLi5uZXcgU2V0KCldYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0fSk7XG5cdH0sXG5cdGZpbmROb3RFeGlzdHModGl0bGVzKSB7XG5cdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0Y29uc3QgZXhjbHVkZXMgPSBbJ+eUqOWtl+aooeW8jyddO1xuXHRcdGxldCBhbGx0aXRsZXMgPSBbXTtcblx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgVkFSSUFOVFMpIHtcblx0XHRcdGRlZmVycmVkc1tkZWZlcnJlZHMubGVuZ3RoXSA9IGFwaS5nZXQoe1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRleHQ6IHRpdGxlcyxcblx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0XHR0aXRsZTogJ01lZGlhV2lraTpHYWRnZXQtVG9vbHNSZWRpcmVjdC5qcy8tJyxcblx0XHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0XHR1c2VsYW5nOiB2YXJpYW50LFxuXHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKS50aGVuKCguLi5hcmdzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IFt7cGFyc2V9XSBvZiBhcmdzKSB7XG5cdFx0XHRcdGFsbHRpdGxlcyA9IFsuLi5hbGx0aXRsZXMsIC4uLiQocGFyc2UudGV4dCkudGV4dCgpLnRyaW0oKS5zcGxpdCgnfCcpXTtcblx0XHRcdH1cblx0XHRcdGFsbHRpdGxlcyA9IGFsbHRpdGxlcy5maWx0ZXIoKHYsIGksIGFycikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YodikgPT09IGk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBhcGlcblx0XHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHRcdHRpdGxlczogYWxsdGl0bGVzLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRcdHRpdGxlcyA9IFtdO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdFx0Y29uc3Qge3RpdGxlfSA9IHBhZ2U7XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5taXNzaW5nICYmICFleGNsdWRlcy5pbmNsdWRlcyh0aXRsZSkpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHRpdGxlIGluIHJlZGlyZWN0RXhjbHVkZXMpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBleGNsdWRlIHNwZWNpYWwgdGl0bGVzXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IHRpdGxlO1xuXHRcdFx0XHRcdFx0XHRpZiAoSVNfQ0FURUdPUlkpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSB3Z1BhZ2VOYW1lLnJlcGxhY2UoL15DYXRlZ29yeTovLCAnJyk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0UmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCAne3vliIbnsbvph43lrprlkJF8JDF9fScucmVwbGFjZSgnJDEnLCB0YXJnZXQpKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvLyBvbmx5IHNldCBkZWZhdWx0IHN1ZmZpeFxuXHRcdFx0XHRcdFx0XHRzZXRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsICd7e+WIq+WQjemHjeWumuWQkX19JywgU1VGRklYX1NFVERFRkFVTFQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0fSxcblx0ZmluZFJlZGlyZWN0KHBhZ2VuYW1lKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgZnJjRGVmZXJyZWRzID0gW107XG5cdFx0Y29uc3QgY29udGFpbmVyID0gc2VsZi50YWJzLmNyZWF0ZS5jb250O1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdGNvbnN0ICRjb250ZW50ID0gJGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCA+IGRpdi5tdy1wYXJzZXItb3V0cHV0Jyk7XG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdFx0bGV0IHRpdGxlcyA9IFtdO1xuXHRcdHNlbGYubG9hZGluZyhjb250YWluZXIpO1xuXHRcdGZvciAoY29uc3QgY2FsbGJhY2sgb2YgZmluZFJlZGlyZWN0Q2FsbGJhY2tzKSB7XG5cdFx0XHRjb25zdCByZXQgPSBjYWxsYmFjayhwYWdlbmFtZSwgJGNvbnRlbnQsIHRpdGxlcyk7XG5cdFx0XHRpZiAodHlwZW9mIHJldCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gcmV0O1xuXHRcdFx0fSBlbHNlIGlmICgnZG9uZScgaW4gcmV0KSB7XG5cdFx0XHRcdC8vIGlzIERlZmVycmVkXG5cdFx0XHRcdGZyY0RlZmVycmVkc1tmcmNEZWZlcnJlZHMubGVuZ3RoXSA9IHJldDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRpdGxlcyA9IHVuaXF1ZUFycmF5KFsuLi50aXRsZXMsIC4uLnJldF0pOyAvLyBSZXBsYWNlIGBbLi4ubmV3IFNldCgpXWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyByZW1vdmUgYWxsIGVtcHR5IHRpdGxlc1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5tYXAoKHRpdGxlKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGl0bGUgfHwgbnVsbDtcblx0XHR9KTtcblx0XHRjb25zdCBvbkNsaWNrQ3JlYXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRjb25zdCBlbnRyeSA9ICQodGhpcykucGFyZW50cygncDpmaXJzdCcpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHNlbGYuY2xpY2tBY3Rpb24oZW50cnksIHNlbGYuY3JlYXRlKTtcblx0XHR9O1xuXHRcdC8vIGhhbmRsZXMgdGhlIGRlZmVycmVkIGNhbGxiYWNrc1xuXHRcdHZvaWQgJC53aGVuKC4uLmZyY0RlZmVycmVkcylcblx0XHRcdC50aGVuKCguLi5hcmdzKSA9PiB7XG5cdFx0XHRcdGZvciAoY29uc3QgcmV0IG9mIGFyZ3MpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHJldCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IHJldDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGl0bGVzID0gdW5pcXVlQXJyYXkoWy4uLnRpdGxlcywgLi4ucmV0XSk7IC8vIFJlcGxhY2UgYFsuLi5uZXcgU2V0KCldYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzZWxmLmZpbmRWYXJpYW50cyhwYWdlbmFtZSwgdGl0bGVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoZnZ0aXRsZXMpID0+IHtcblx0XHRcdFx0Ly8gYnVpbGQgSFRNTFxuXHRcdFx0XHRzZWxmLmxvYWRlZChjb250YWluZXIpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHRpdGxlIG9mIGZ2dGl0bGVzKSB7XG5cdFx0XHRcdFx0Y29uc3QgdWx0aXRsZSA9IHRpdGxlLnJlcGxhY2UoJyAnLCAnXycpO1xuXHRcdFx0XHRcdGNvbnN0IGVudHJ5ID0gJCgnPHA+JykuYXBwZW5kVG8oY29udGFpbmVyKTtcblx0XHRcdFx0XHRzZWxmLmJ1aWxkU2VsZWN0aW9uKFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiBtdy51dGlsLmdldFVybCh1bHRpdGxlLCB7YWN0aW9uOiAnZWRpdCcsIHJlZGxpbms6ICcxJ30pLFxuXHRcdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdFx0Y2xhc3NuYW1lOiAnbmV3Jyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRocmVmOiAnI2NyZWF0ZS1yZWRpcmVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYmNyZWF0ZXRpdGxlJyksXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6IG9uQ2xpY2tDcmVhdGUsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0dWx0aXRsZSxcblx0XHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdFx0KS5hcHBlbmRUbyhlbnRyeSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZGVzYyA9ICQoJ3AuZGVzYycsIGNvbnRhaW5lcik7XG5cdFx0XHRcdGlmIChmdnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2VsZi5hZGRNZXRob2RzKGRlc2MsIFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNzZWxlY3QtYWxsJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3NlbGVjdGFsbCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBbGwoY29udGFpbmVyKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWludmVyc2UnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0aW52ZXJzZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RJbnZlcnNlKGNvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI2NyZWF0ZS1zZWxlY3RlZCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBY3Rpb24oY29udGFpbmVyLCBzZWxmLmNyZWF0ZSk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZVdpdGgoc2VsZiwgW2Z2dGl0bGVzXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3RXaXRoKHNlbGYsIFtmdnRpdGxlc10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xuXHR9LFxufTtcblxuZXhwb3J0IHtUb29sc1JlZGlyZWN0LCBmaW5kUmVkaXJlY3RDYWxsYmFjaywgZmluZFJlZGlyZWN0QnlTZWxlY3Rvciwgc2V0UmVkaXJlY3RUZXh0U3VmZml4fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFRvb2xzUmVkaXJlY3QvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJjb25zdCBmaXhOYW1lc3BhY2UgPSAodGl0bGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZUlkcywgd2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IG5zUHJlZml4ZXMgPSBbXTtcblx0bGV0IG5zQ2Fub25QcmVmaXg6IHN0cmluZztcblx0bGV0IG5zUHJlZml4UGF0dGVybjogUmVnRXhwO1xuXG5cdGZvciAoY29uc3QgW3RleHQsIG5zaWRdIG9mIE9iamVjdC5lbnRyaWVzKHdnTmFtZXNwYWNlSWRzKSkge1xuXHRcdGlmIChuc2lkID09PSB3Z05hbWVzcGFjZU51bWJlciAmJiAhIXRleHQpIHtcblx0XHRcdG5zUHJlZml4ZXNbbnNQcmVmaXhlcy5sZW5ndGhdID0gdGV4dDtcblx0XHR9XG5cdH1cblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHQvLyBhcnRpY2xlc1xuXHRcdG5zQ2Fub25QcmVmaXggPSAnJztcblx0XHRuc1ByZWZpeFBhdHRlcm4gPSAvXi87XG5cdH0gZWxzZSB7XG5cdFx0bnNDYW5vblByZWZpeCA9IGAke3dnUGFnZU5hbWUuc3BsaXQoJzonKVswXX06YDtcblx0XHRuc1ByZWZpeFBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeKCR7bnNQcmVmaXhlcy5qb2luKCd8Jyl9KTpgLCAnaScpO1xuXHR9XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdFx0Ly8gZG8gbm90aGluZyBpZiBpdCdzIGFydGljbGVzXG5cdFx0cmV0dXJuIHRpdGxlO1xuXHR9IGVsc2UgaWYgKG5zUHJlZml4UGF0dGVybi50ZXN0KHRpdGxlKSkge1xuXHRcdC8vIGNhbm9uaXplIHRoZSBuYW1lc3BhY2Vcblx0XHRyZXR1cm4gdGl0bGUucmVwbGFjZShuc1ByZWZpeFBhdHRlcm4sIG5zQ2Fub25QcmVmaXgpO1xuXHR9XG5cdC8vIGRvbid0IGhhdmUgYSBuYW1lc3BhY2Vcblx0cmV0dXJuIG5zQ2Fub25QcmVmaXggKyB0aXRsZTtcbn07XG5cbmV4cG9ydCB7Zml4TmFtZXNwYWNlfTtcbiIsICJpbXBvcnQgdHlwZSB7TWVzc2FnZUtleX0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBnZXRNZXNzYWdlID0gKGtleTogTWVzc2FnZUtleSBleHRlbmRzIGB0b29sc3JlZGlyZWN0LSR7aW5mZXIgUH1gID8gUCA6IG5ldmVyLCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGZ1bGxLZXk6IHN0cmluZyA9IGB0b29sc3JlZGlyZWN0LSR7a2V5fWA7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGZ1bGxLZXksIC4uLmFyZ3MpLnBhcnNlKCkgOiBtdy5tZXNzYWdlKGZ1bGxLZXkpLnBsYWluKCk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB0eXBlIHtNZXNzYWdlS2V5fSBmcm9tICcuL3R5cGVzJztcblxuY29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3Qgc2V0TWVzc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IERFRkFVTFRfTUVTU0FHRVNfSEFOUyA9IHtcblx0XHQndG9vbHNyZWRpcmVjdC1idG50aXRsZSc6ICfph43lrprlkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWJ0bmRlc2MnOiAn5Yib5bu65ZKM566h55CG5q2k6aG16Z2i55qE6YeN5a6a5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1kbGd0aXRsZSc6ICfliJvlu7rlkoznrqHnkIbph43lrprlkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXJlZGlsb2FkaW5nJzogJ+aVsOaNruWKoOi9veS4re+8jOivt+eojeWAmeKApuKApicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtcmVkaWVkaXQnOiAn57yW6L6RJyxcblx0XHQndG9vbHNyZWRpcmVjdC1zZWxlY3RhbGwnOiAn5YWo6YCJJyxcblx0XHQndG9vbHNyZWRpcmVjdC1zZWxlY3RpbnZlcnNlJzogJ+WPjemAiScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld3RpdGxlJzogJ+afpeeciycsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2Rlc2MnOiAn5Lul5LiL5piv5oyH5ZCR5q2k6aG16Z2i55qE6YeN5a6a5ZCR6aG177yaJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bm90Zm91bmQnOiAn5rKh5pyJ5om+5Yiw5Lu75L2V5oyH5ZCR5q2k6aG16Z2i55qE6YeN5a6a5ZCR6aG144CCJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bXVsdGknOiAn5aSa6YeNJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3Zml4JzogJ+S/ruWkjScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZml4bG9hZGluZyc6ICfor7fnqI3lgJnvvIzmraPlnKjoh6rliqjkv67lpI3ph43lrprlkJHigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeHRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZml4c3VtbWFyeSc6ICfnvJbovpHlt6XlhbfvvJrkv67lpI3lpJrph43ph43lrprlkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZXRpdGxlJzogJ+WIm+W7uicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlZGVzYyc6ICfku6XkuIvmmK/lsJrmnKrliJvlu7rnmoTph43lrprlkJHpobXvvJonLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZW5vdGZvdW5kJzogJ+ayoeacieaJvuWIsOWPr+S7peWIm+W7uueahOmHjeWumuWQkemhteOAgicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlYWxsJzogJ+WFqOmDqOWIm+W7uicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlbG9hZGluZyc6ICfor7fnqI3lgJnvvIzmraPlnKjoh6rliqjliJvlu7rph43lrprlkJHigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlc3VtbWFyeSc6ICfnvJbovpHlt6XlhbfvvJroh6rliqjliJvlu7rph43lrprlkJHliLBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWVycmN5Y2xlcmVkaXJlY3QnOiAn5peg5rOV6Ieq5Yqo5L+u5aSN77ya5Y+R546w5b6q546v6YeN5a6a5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1yZWZyZXNoJzogJ+WIt+aWsCcsXG5cdH0gc2F0aXNmaWVzIFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+O1xuXHRjb25zdCBERUZBVUxUX01FU1NBR0VTX0hBTlQgPSB7XG5cdFx0J3Rvb2xzcmVkaXJlY3QtYnRudGl0bGUnOiAn6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1idG5kZXNjJzogJ+WJteW7uuWSjOeuoeeQhuatpOmggemdoueahOmHjeaWsOWwjuWQkScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZGxndGl0bGUnOiAn5Ym15bu65ZKM566h55CG6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1yZWRpbG9hZGluZyc6ICfmlbjmk5rliqDovInkuK3vvIzoq4vnqI3lgJnigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXJlZGllZGl0JzogJ+e3qOi8rycsXG5cdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0YWxsJzogJ+WFqOmBuCcsXG5cdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0aW52ZXJzZSc6ICflj43pgbgnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXd0aXRsZSc6ICfmn6XnnIsnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdkZXNjJzogJ+S7peS4i+aYr+aMh+WQkeatpOmggemdoueahOmHjeaWsOWwjuWQkemgge+8micsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld25vdGZvdW5kJzogJ+aykuacieaJvuWIsOS7u+S9leaMh+WQkeatpOmggemdoueahOmHjeaWsOWwjuWQkemggeOAgicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld211bHRpJzogJ+WkmumHjScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2ZpeCc6ICfkv67lvqknLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeGxvYWRpbmcnOiAn6KuL56iN5YCZ77yM5q2j5Zyo6Ieq5YuV5L+u5b6p6YeN5paw5bCO5ZCR4oCm4oCmJyxcblx0XHQndG9vbHNyZWRpcmVjdC1maXh0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeHN1bW1hcnknOiAn57eo6Lyv5bel5YW377ya5L+u5b6p5aSa6YeN6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGV0aXRsZSc6ICflibXlu7onLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWRlc2MnOiAn5Lul5LiL5piv5bCa5pyq5Ym15bu655qE6YeN5paw5bCO5ZCR6aCB77yaJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVub3Rmb3VuZCc6ICfmspLmnInmib7liLDlj6/ku6XlibXlu7rnmoTph43mlrDlsI7lkJHpoIHjgIInLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWFsbCc6ICflhajpg6jlibXlu7onLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZWxvYWRpbmcnOiAn6KuL56iN5YCZ77yM5q2j5Zyo6Ieq5YuV5Ym15bu66YeN5paw5bCO5ZCR4oCm4oCmJyxcblx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGV0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXN1bW1hcnknOiAn57eo6Lyv5bel5YW377ya6Ieq5YuV5Ym15bu66YeN5paw5bCO5ZCR5YiwW1skMV1dJyxcblx0XHQndG9vbHNyZWRpcmVjdC1lcnJjeWNsZXJlZGlyZWN0JzogJ+eEoeazleiHquWLleS/ruW+qe+8mueZvOePvuW+queSsOmHjeaWsOWwjuWQkScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtcmVmcmVzaCc6ICfliLfmlrAnLFxuXHR9IHNhdGlzZmllcyBSZWNvcmQ8TWVzc2FnZUtleSwgc3RyaW5nPjtcblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KERFRkFVTFRfTUVTU0FHRVNfSEFOVCk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KERFRkFVTFRfTUVTU0FHRVNfSEFOUyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7c2V0TWVzc2FnZXN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx3QkFBQSxDQUFBO0FBQUFDLFNBQUFELHVCQUFBO0VBQUFFLHdCQUFBQSxNQUFBQTtFQUFBQyxzQkFBQUEsTUFBQUE7RUFBQUMsdUJBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBUCxxQkFBQTs7QUNDQyxJQUFBUSxTQUFVO0FBQ1YsSUFBQUMsVUFBVzs7QUNGWixJQUFNQyxnQkFBZ0I7QUFDdEIsSUFBTUMsaUJBQWlCO0FBQ3ZCLElBQU1DLG9CQUFvQjtBQUUxQixJQUFNQyxXQUFXLENBQUMsV0FBVyxXQUFXLFNBQVMsU0FBUyxTQUFTLFNBQVMsU0FBUyxPQUFPOztBQ0E1RixJQUFBQyxxQkFBeUNDLFFBQUEsaUJBQUE7O0FDSHpDLElBQUFDLG9CQUF3QkQsUUFBQSxpQkFBQTtBQUV4QixJQUFNRSxPQUFBLEdBQWNELGtCQUFBRSxXQUFBLGlCQUFBQyxPQUFtQ1YsT0FBTyxDQUFFOztBQ0hoRSxJQUFNVyxlQUFnQkMsV0FBMEI7QUFDL0MsUUFBTTtJQUFDQztJQUFnQkMsbUJBQUFDO0lBQW1CQyxZQUFBQztFQUFVLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFdEUsUUFBTUMsYUFBYSxDQUFBO0FBQ25CLE1BQUlDO0FBQ0osTUFBSUM7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QXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLG1DQUFtQztJQUNuQyw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLHlCQUF5QjtFQUMxQjtBQUVBLE1BQUksQ0FBQyxXQUFXLFNBQVMsU0FBUyxPQUFPLEVBQUVqQixTQUFTYyxjQUFjLEdBQUc7QUFDcEUvUCxPQUFHbVEsU0FBU0MsSUFBSUYscUJBQXFCO0VBQ3RDLE9BQU87QUFDTmxRLE9BQUdtUSxTQUFTQyxJQUFJSCxxQkFBcUI7RUFDdEM7QUFDRDs7QVAxREFELFlBQVk7QUFFWixNQUFBLEdBQUtGLG1CQUFBTyxTQUFRLEVBQUVwSyxLQUFNbEQsV0FBeUM7QUFDN0RMLGdCQUFjSSxLQUFLQyxLQUFLO0FBQ3pCLENBQUM7IiwKICAibmFtZXMiOiBbIlRvb2xzUmVkaXJlY3RfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJmaW5kUmVkaXJlY3RCeVNlbGVjdG9yIiwgImZpbmRSZWRpcmVjdENhbGxiYWNrIiwgInNldFJlZGlyZWN0VGV4dFN1ZmZpeCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiYXBpVGFnIiwgInZlcnNpb24iLCAiU1VGRklYX0FQUEVORCIsICJTVUZGSVhfUkVQTEFDRSIsICJTVUZGSVhfU0VUREVGQVVMVCIsICJWQVJJQU5UUyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJmaXhOYW1lc3BhY2UiLCAidGl0bGUiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dOYW1lc3BhY2VOdW1iZXIyIiwgIndnUGFnZU5hbWUiLCAid2dQYWdlTmFtZTIiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJuc1ByZWZpeGVzIiwgIm5zQ2Fub25QcmVmaXgiLCAibnNQcmVmaXhQYXR0ZXJuIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAidGV4dCIsICJuc2lkIiwgInNwbGl0IiwgIlJlZ0V4cCIsICJqb2luIiwgInRlc3QiLCAicmVwbGFjZSIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhcmdzIiwgImZ1bGxLZXkiLCAibWVzc2FnZSIsICJwYXJzZSIsICJwbGFpbiIsICJJU19DQVRFR09SWSIsICJmaW5kUmVkaXJlY3RDYWxsYmFja3MiLCAicGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXgiLCAicmVkaXJlY3RFeGNsdWRlcyIsICJjYWxsYmFjayIsICJnZW5lcmF0ZUFycmF5IiwgInNlbGVjdG9yIiwgIiQiLCAibWFwIiwgIl9pbmRleCIsICJlbGVtZW50IiwgImVxIiwgInRyaW0iLCAic3VmZml4IiwgImZsYWciLCAiZmxhZ19zZXQiLCAiZmxhZ19hcHBlbmQiLCAiVG9vbHNSZWRpcmVjdCIsICJ0YWJzZWxlbSIsICJ0YWdzZWxlbSIsICJ2YXJpYW50cyIsICJpbml0IiwgIiRib2R5IiwgInNlbGYiLCAiYnV0dG9uIiwgImFkZENsYXNzIiwgImF0dHIiLCAiY3NzIiwgImFwcGVuZCIsICJvbiIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJkaWFsb2ciLCAiZmluZCIsICJhZnRlciIsICJiZ2lmcmFtZSIsICJyZXNpemFibGUiLCAibW9kYWwiLCAid2lkdGgiLCAiTWF0aCIsICJyb3VuZCIsICJ3aW5kb3ciLCAicG9zaXRpb24iLCAiaGVpZ2h0IiwgImFwcGVuZFRvIiwgImFkZFRhYnMiLCAidGFicyIsICJrbmFtZSIsICJoYXNPd24iLCAiY2hhckF0IiwgInRvVXBwZXJDYXNlIiwgInNsaWNlIiwgInRhYiIsICJ0YWciLCAiY29udCIsICJsb2FkVmlldyIsICJjcmVhdGVUYWIiLCAidGFibmFtZSIsICJ0YWJ0aXRsZSIsICJvbkNsaWNrIiwgImNhbGwiLCAibG9hZGVkIiwgIl9pbml0VGFiVmlldyIsICJfaW5pdFRhYkNyZWF0ZSIsICJsb2FkQ3JlYXRlIiwgInZpZXciLCAiY3JlYXRlIiwgImZpeCIsICJwYWdlbmFtZXMiLCAicmVtb3ZlIiwgImxvYWRpbmciLCAiYnVsa0VkaXRCeVJlZ2V4IiwgInRoZW4iLCAic2V0VGltZW91dCIsICJidWxrRWRpdCIsICJhZGRSZWRpcmVjdFRleHRTdWZmaXgiLCAidW5pcXVlQXJyYXkiLCAidGl0bGVzIiwgInN1bW1hcnkiLCAiZmlsdGVyIiwgInYiLCAiaSIsICJhcnIiLCAiaW5kZXhPZiIsICJwb3N0IiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInF1ZXJ5IiwgImRlZmVycmVkcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInBhZ2VzIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJ2YWx1ZSIsICJwb3N0V2l0aFRva2VuIiwgInRhZ3MiLCAiZXJyIiwgImUiLCAiZiIsICJ3aGVuIiwgInJlZ2V4IiwgInJ2cHJvcCIsICJydnNsb3RzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInBhZ2UiLCAiY29udGVudCIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibmV3Q29udGVudCIsICJiYXNldGltZXN0YW1wIiwgInRpbWVzdGFtcCIsICJsb2FkVGFiQ29udCIsICJyZWxvYWQiLCAiaHRtbCIsICIkZGVzYyIsICIkdGV4dCIsICJhcHBseSIsICJmYWlsIiwgImFsd2F5cyIsICJhZGRNZXRob2RzIiwgImhyZWYiLCAiY2xpY2siLCAiY29udGFpbmVyIiwgInRvTG93ZXJDYXNlIiwgInJlbW92ZUNsYXNzIiwgInNlbGVjdEFsbCIsICJzZWxlY3RJbnZlcnNlIiwgImVhY2giLCAiJGVsZW1lbnQiLCAic2VsZWN0QWN0aW9uIiwgImNiIiwgInBhZ2VuYW1lIiwgImRhdGEiLCAiY2xpY2tBY3Rpb24iLCAiYnVpbGRMaW5rIiwgImNsYXNzbmFtZSIsICJhIiwgInRhcmdldCIsICJyZWwiLCAiJHBhcmVudCIsICJtZXRob2RzIiwgIiRjb250YWluZXIiLCAibWV0aG9kRXhpc3QiLCAiSlNPTiIsICJzdHJpbmdpZnkiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAibWV0aG9kIiwgImJ1aWxkU2VsZWN0aW9uIiwgIm1haW4iLCAibWV0ZCIsICJtdCIsICJkc2FiIiwgInNlbGUiLCAibG9hZFJlZGlyZWN0IiwgImZpbmRSZWRpcmVjdCIsICJkZWVwIiwgImRlZmVycmVkIiwgIkRlZmVycmVkIiwgInRvcCIsICJvbkNsaWNrRml4IiwgImVudHJ5IiwgInBhcmVudHMiLCAiZmlyc3QiLCAicmRsaW1pdCIsICJoYXNfcmVkaXJlY3QiLCAiZGVzYyIsICJtYXhpbXVtUmVkaXJlY3REZXB0aCIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJyZWRpcmVjdHMiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAicmR0aXRsZSIsICJ1bHRpdGxlIiwgInV0aWwiLCAiZ2V0VXJsIiwgImlzQ3ljbGVSZWRpcmVjdCIsICJyZWRpcmVjdCIsICJyZXNvbHZlV2l0aCIsICJyZWplY3RXaXRoIiwgInByb21pc2UiLCAiZmluZFZhcmlhbnRzIiwgInN1ZmZpeFJlZyIsICJyZXRUaXRsZXMiLCAiX2kyIiwgIl9WQVJJQU5UUyIsICJ2YXJpYW50IiwgInhociIsICJ1c2VsYW5nIiwgImRpc3BsYXl0aXRsZSIsICJzdWZmaXhlcyIsICJfaTMiLCAiX2FyZ3MiLCAic3VmZml4QXJyIiwgImV4ZWMiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAibW9kaWZpZWRUaXRsZSIsICJmaW5kTm90RXhpc3RzIiwgImV4Y2x1ZGVzIiwgImFsbHRpdGxlcyIsICJfaTQiLCAiX1ZBUklBTlRTMiIsICJjb250ZW50bW9kZWwiLCAiX2k1IiwgIl9hcmdzMiIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJtaXNzaW5nIiwgImluY2x1ZGVzIiwgImZyY0RlZmVycmVkcyIsICIkY29udGVudCIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJyZXQiLCAib25DbGlja0NyZWF0ZSIsICJfaTYiLCAiX2FyZ3MzIiwgImZ2dGl0bGVzIiwgIl9pdGVyYXRvcjEwIiwgIl9zdGVwMTAiLCAicmVkbGluayIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAid2dVc2VyTGFuZ3VhZ2UiLCAic2V0TWVzc2FnZXMiLCAiREVGQVVMVF9NRVNTQUdFU19IQU5TIiwgIkRFRkFVTFRfTUVTU0FHRVNfSEFOVCIsICJtZXNzYWdlcyIsICJzZXQiLCAiZ2V0Qm9keSJdCn0K
