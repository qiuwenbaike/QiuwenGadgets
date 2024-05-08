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
//! src/ToolsRedirect/modules/core.js
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/ToolsRedirect/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("ToolsRedirect/".concat(version));
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
      text += "\n".concat((0, import_ext_gadget2.uniqueArray)(pageWithRedirectTextSuffix[title]).join("\n"));
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
//! src/ToolsRedirect/ToolsRedirect.ts
setMessages();
void (0, import_ext_gadget3.getBody)().then(($body) => {
  ToolsRedirect.init($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QvVG9vbHNSZWRpcmVjdC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9vcHRpb25zLmpzb24iLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL2NvcmUuanMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy91dGlsL2dldE1lc3NhZ2UudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9tZXNzYWdlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICcuL1Rvb2xzUmVkaXJlY3QubGVzcyc7XG5pbXBvcnQge1Rvb2xzUmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7c2V0TWVzc2FnZXN9IGZyb20gJy4vbW9kdWxlcy9tZXNzYWdlcyc7XG5cbnNldE1lc3NhZ2VzKCk7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRUb29sc1JlZGlyZWN0LmluaXQoJGJvZHkpO1xufSk7XG5cbmV4cG9ydCB7ZmluZFJlZGlyZWN0Q2FsbGJhY2ssIGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IsIHNldFJlZGlyZWN0VGV4dFN1ZmZpeH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuIiwgIntcblx0XCJhcGlUYWdcIjogXCJUb29sc1JlZGlyZWN0XCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiY29uc3QgU1VGRklYX0FQUEVORCA9IDA7XG5jb25zdCBTVUZGSVhfUkVQTEFDRSA9IDE7XG5jb25zdCBTVUZGSVhfU0VUREVGQVVMVCA9IDI7XG5cbmNvbnN0IFZBUklBTlRTID0gWyd6aC1oYW5zJywgJ3poLWhhbnQnLCAnemgtY24nLCAnemgtaGsnLCAnemgtbW8nLCAnemgtc2cnLCAnemgtbXknLCAnemgtdHcnXTtcblxuZXhwb3J0IHtTVUZGSVhfQVBQRU5ELCBTVUZGSVhfUkVQTEFDRSwgU1VGRklYX1NFVERFRkFVTFQsIFZBUklBTlRTfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtTVUZGSVhfQVBQRU5ELCBTVUZGSVhfUkVQTEFDRSwgU1VGRklYX1NFVERFRkFVTFQsIFZBUklBTlRTfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheSwgdW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL3V0aWwvZ2V0TWVzc2FnZSc7XG5cbmNvbnN0IHt3Z05hbWVzcGFjZUlkcywgd2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgSVNfQ0FURUdPUlkgPSB3Z05hbWVzcGFjZU51bWJlciA9PT0gMTQ7XG5cbmxldCBmaW5kUmVkaXJlY3RDYWxsYmFja3MgPSBbXTtcbmNvbnN0IHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4ID0ge307XG5jb25zdCByZWRpcmVjdEV4Y2x1ZGVzID0ge307XG5jb25zdCBuc1ByZWZpeGVzID0gW107XG5sZXQgbnNDYW5vblByZWZpeCwgbnNQcmVmaXhQYXR0ZXJuO1xuXG5mb3IgKGNvbnN0IFt0ZXh0LCBuc2lkXSBvZiBPYmplY3QuZW50cmllcyh3Z05hbWVzcGFjZUlkcykpIHtcblx0aWYgKG5zaWQgPT09IHdnTmFtZXNwYWNlTnVtYmVyICYmICEhdGV4dCkge1xuXHRcdG5zUHJlZml4ZXNbbnNQcmVmaXhlcy5sZW5ndGhdID0gdGV4dDtcblx0fVxufVxuXG5pZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0Ly8gYXJ0aWNsZXNcblx0bnNDYW5vblByZWZpeCA9ICcnO1xuXHRuc1ByZWZpeFBhdHRlcm4gPSAvXi87XG59IGVsc2Uge1xuXHRuc0Nhbm9uUHJlZml4ID0gYCR7d2dQYWdlTmFtZS5zcGxpdCgnOicpWzBdfTpgO1xuXHRuc1ByZWZpeFBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeKCR7bnNQcmVmaXhlcy5qb2luKCd8Jyl9KTpgLCAnaScpO1xufVxuXG5jb25zdCBmaXhOYW1lc3BhY2UgPSAodGl0bGUpID0+IHtcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdFx0Ly8gZG8gbm90aGluZyBpZiBpdCdzIGFydGljbGVzXG5cdFx0cmV0dXJuIHRpdGxlO1xuXHR9IGVsc2UgaWYgKG5zUHJlZml4UGF0dGVybi50ZXN0KHRpdGxlKSkge1xuXHRcdC8vIGNhbm9uaXplIHRoZSBuYW1lc3BhY2Vcblx0XHRyZXR1cm4gdGl0bGUucmVwbGFjZShuc1ByZWZpeFBhdHRlcm4sIG5zQ2Fub25QcmVmaXgpO1xuXHR9XG5cdC8vIGRvbid0IGhhdmUgYSBuYW1lc3BhY2Vcblx0cmV0dXJuIG5zQ2Fub25QcmVmaXggKyB0aXRsZTtcbn07XG5cbi8qKlxuICogQWRkIG5ldyBjdXN0b20gY2FsbGJhY2sgZm9yIGZpbmRpbmcgbmV3IHBvdGVudGlhbCByZWRpcmVjdCB0aXRsZXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgKHBhZ2VuYW1lLCAkY29udGVudCwgdGl0bGVzKSA9PiB0aXRsZSBsaXN0XG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBhcmdzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmNvbnN0IGZpbmRSZWRpcmVjdENhbGxiYWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrLCAuLi5hcmdzKSB7XG5cdGlmIChjYWxsYmFjaykge1xuXHRcdGZpbmRSZWRpcmVjdENhbGxiYWNrc1tmaW5kUmVkaXJlY3RDYWxsYmFja3MubGVuZ3RoXSA9IGNhbGxiYWNrO1xuXHR9IGVsc2Uge1xuXHRcdGZpbmRSZWRpcmVjdENhbGxiYWNrcyA9IGdlbmVyYXRlQXJyYXkoZmluZFJlZGlyZWN0Q2FsbGJhY2tzLCBjYWxsYmFjaywgLi4uYXJncyk7XG5cdH1cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEZpbmQgbmV3IHBvdGVudGlhbCByZWRpcmVjdCB0aXRsZXMgdGhyb3VnaCBzZWxlY3RvcihzKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5jb25zdCBmaW5kUmVkaXJlY3RCeVNlbGVjdG9yID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cdC8qIEEgc2hvcnRjdXQgdG8gYWRkIENTUyBzZWxlY3RvcnMgYXMgcnVsZSB0byBmaW5kIG5ldyBwb3RlbnRpYWwgcmVkaXJlY3QgdGl0bGVzLiAqL1xuXHRmaW5kUmVkaXJlY3RDYWxsYmFja3NbZmluZFJlZGlyZWN0Q2FsbGJhY2tzLmxlbmd0aF0gPSAoKSA9PiB7XG5cdFx0cmV0dXJuICQoc2VsZWN0b3IpLm1hcCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gJChlbGVtZW50KS5lcSgwKS50ZXh0KCkudHJpbSgpIHx8IG51bGw7XG5cdFx0fSk7XG5cdH07XG5cdHJldHVybiB0aGlzO1xufTtcblxuY29uc3Qgc2V0UmVkaXJlY3RUZXh0U3VmZml4ID0gKHRpdGxlLCBzdWZmaXgsIGZsYWcpID0+IHtcblx0bGV0IGZsYWdfc2V0ID0gZmFsc2U7XG5cdGxldCBmbGFnX2FwcGVuZCA9IGZhbHNlO1xuXHRmbGFnIHx8PSBTVUZGSVhfQVBQRU5EOyAvLyBkZWZhdWx0IGFwcGVuZFxuXHRmbGFnX3NldCA9IGZsYWcgPT09IFNVRkZJWF9SRVBMQUNFO1xuXHR0aXRsZSA9IGZpeE5hbWVzcGFjZSh0aXRsZSk7XG5cdGlmICh0aXRsZSBpbiBwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeCkge1xuXHRcdGZsYWdfYXBwZW5kID0gZmxhZyA9PT0gU1VGRklYX0FQUEVORDtcblx0fSBlbHNlIHtcblx0XHQvLyBpZiBub3QgZXhpc3QsIGV2ZXJ5IGZsYWcgY2FuIHNldFxuXHRcdGZsYWdfc2V0ID0gdHJ1ZTtcblx0fVxuXHRpZiAoZmxhZ19zZXQpIHtcblx0XHRwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0gPSBnZW5lcmF0ZUFycmF5KHN1ZmZpeCk7XG5cdH0gZWxzZSBpZiAoZmxhZ19hcHBlbmQpIHtcblx0XHRwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0gPSBnZW5lcmF0ZUFycmF5KHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSwgc3VmZml4KTtcblx0fVxufTtcblxuY29uc3QgVG9vbHNSZWRpcmVjdCA9IHtcblx0dGFic2VsZW06IG51bGwsXG5cdHRhZ3NlbGVtOiBudWxsLFxuXHR2YXJpYW50czogVkFSSUFOVFMsXG5cdGluaXQoJGJvZHkpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdC5hZGRDbGFzcygnbXctbGlzdC1pdGVtIGNvbGxhcHNpYmxlIHZlY3Rvci10YWItbm9pY29uJylcblx0XHRcdC5hdHRyKCdpZCcsICdjYS1yZWRpcmVjdCcpXG5cdFx0XHQuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0XHQuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnYnRuZGVzYycpKS50ZXh0KGdldE1lc3NhZ2UoJ2J0bnRpdGxlJykpKTtcblx0XHRidXR0b24ub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c2VsZi5kaWFsb2coKTtcblx0XHR9KTtcblx0XHQkYm9keS5maW5kKCdsaSNjYS1oaXN0b3J5JykuYWZ0ZXIoYnV0dG9uKTtcblx0fSxcblx0ZGlhbG9nKCkge1xuXHRcdGNvbnN0IGRpYWxvZyA9ICQoJzxkaXY+Jylcblx0XHRcdC5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ2RsZ3RpdGxlJykpXG5cdFx0XHQuYWRkQ2xhc3MoJ2RpYWxvZy1yZWRpcmVjdCcpXG5cdFx0XHQuZGlhbG9nKHtcblx0XHRcdFx0YmdpZnJhbWU6IHRydWUsXG5cdFx0XHRcdHJlc2l6YWJsZTogZmFsc2UsXG5cdFx0XHRcdG1vZGFsOiB0cnVlLFxuXHRcdFx0XHR3aWR0aDogTWF0aC5yb3VuZCgkKHdpbmRvdykud2lkdGgoKSAqIDAuOCksXG5cdFx0XHRcdHBvc2l0aW9uOiAnY2VudGVyJyxcblx0XHRcdH0pO1xuXHRcdGRpYWxvZy5jc3MoJ21heC1oZWlnaHQnLCBgJHtNYXRoLnJvdW5kKCQod2luZG93KS5oZWlnaHQoKSAqIDAuOCl9cHhgKTtcblx0XHR0aGlzLnRhYnNlbGVtID0gJCgnPGRpdj4nKS5hZGRDbGFzcygndGFiLXJlZGlyZWN0JykuYXBwZW5kVG8oZGlhbG9nKTtcblx0XHR0aGlzLnRhZ3NlbGVtID0gJCgnPHVsPicpLmFwcGVuZFRvKHRoaXMudGFic2VsZW0pO1xuXHRcdHRoaXMuYWRkVGFicygpO1xuXHRcdHRoaXMudGFic2VsZW0udGFicygpO1xuXHR9LFxuXHRhZGRUYWJzKCkge1xuXHRcdGZvciAoY29uc3Qga25hbWUgaW4gdGhpcy50YWJzKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093bih0aGlzLnRhYnMsIGtuYW1lKSkge1xuXHRcdFx0XHRpZiAodGhpcy50YWJzW2tuYW1lXSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMudGFic1trbmFtZV0gPSB0aGlzW2BfaW5pdFRhYiR7a25hbWVbMF0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtrbmFtZS5zbGljZSgxKX1gXSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHRhYiA9IHRoaXMudGFic1trbmFtZV07XG5cdFx0XHRcdHRoaXMudGFnc2VsZW0uYXBwZW5kKHRhYi50YWcpO1xuXHRcdFx0XHR0aGlzLnRhYnNlbGVtLmFwcGVuZCh0YWIuY29udCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGRlZmF1bHQgdGFiLCBhdXRvbG9hZCB3aGVuIGRpYWxvZyBpbml0aWF0ZVxuXHRcdHRoaXMubG9hZFZpZXcoKTtcblx0fSxcblx0Y3JlYXRlVGFiKHRhYm5hbWUsIHRhYnRpdGxlLCBvbkNsaWNrKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgdGFnID0gJCgnPGxpPicpLmFwcGVuZCgkKCc8YT4nKS5hdHRyKCdocmVmJywgYCN0YWItJHt0YWJuYW1lfWApLnRleHQodGFidGl0bGUpKTtcblx0XHRjb25zdCBjb250ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsIGB0YWItJHt0YWJuYW1lfWApO1xuXHRcdCQoJ2EnLCB0YWcpLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdG9uQ2xpY2suY2FsbChzZWxmKTtcblx0XHR9KTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGFnLFxuXHRcdFx0Y29udCxcblx0XHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0fTtcblx0fSxcblx0X2luaXRUYWJWaWV3KCkge1xuXHRcdHJldHVybiB0aGlzLmNyZWF0ZVRhYigndmlldycsIGdldE1lc3NhZ2UoJ3RhYnZpZXd0aXRsZScpLCB0aGlzLmxvYWRWaWV3KTtcblx0fSxcblx0X2luaXRUYWJDcmVhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlVGFiKCdjcmVhdGUnLCBnZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpLCB0aGlzLmxvYWRDcmVhdGUpO1xuXHR9LFxuXHR0YWJzOiB7XG5cdFx0dmlldzogbnVsbCxcblx0XHRjcmVhdGU6IG51bGwsXG5cdH0sXG5cdGZpeChwYWdlbmFtZXMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHQkKCdwLmRlc2MnLCBzZWxmLnRhYnMudmlldy5jb250KS50ZXh0KGdldE1lc3NhZ2UoJ2ZpeGxvYWRpbmcnKSk7XG5cdFx0JCgncFtjbGFzcyE9ZGVzY10nLCBzZWxmLnRhYnMudmlldy5jb250KS5yZW1vdmUoKTtcblx0XHRzZWxmLmxvYWRpbmcoc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0dm9pZCBzZWxmXG5cdFx0XHQuYnVsa0VkaXRCeVJlZ2V4KHBhZ2VuYW1lcywgL1xccypcXFtcXFsuKj9cXF1cXF0vLCBgIFtbJHt3Z1BhZ2VOYW1lfV1dYCwgZ2V0TWVzc2FnZSgnZml4c3VtbWFyeScpKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHQvLyBkZWxheSBsb2FkIGJlZm9yZSB0aGUgYXN5bmNocm9ub3VzIHRhc2tzIG9uIHNlcnZlciBmaW5pc2hlZFxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmxvYWRlZChzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0XHRzZWxmLmxvYWRWaWV3KHRydWUpO1xuXHRcdFx0XHR9LCAzMDAwKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRjcmVhdGUocGFnZW5hbWVzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0JCgncC5kZXNjJywgc2VsZi50YWJzLmNyZWF0ZS5jb250KS50ZXh0KGdldE1lc3NhZ2UoJ2NyZWF0ZWxvYWRpbmcnKSk7XG5cdFx0JCgncFtjbGFzcyE9ZGVzY10nLCBzZWxmLnRhYnMuY3JlYXRlLmNvbnQpLnJlbW92ZSgpO1xuXHRcdHNlbGYubG9hZGluZyhzZWxmLnRhYnMuY3JlYXRlLmNvbnQpO1xuXHRcdHZvaWQgc2VsZlxuXHRcdFx0LmJ1bGtFZGl0KFxuXHRcdFx0XHRwYWdlbmFtZXMsXG5cdFx0XHRcdGdldE1lc3NhZ2UoJ2NyZWF0ZXRleHQnKS5yZXBsYWNlKCckMScsIHdnUGFnZU5hbWUpLFxuXHRcdFx0XHRnZXRNZXNzYWdlKCdjcmVhdGVzdW1tYXJ5JykucmVwbGFjZSgnJDEnLCB3Z1BhZ2VOYW1lKVxuXHRcdFx0KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHQvLyBkZWxheSBsb2FkIGJlZm9yZSB0aGUgYXN5bmNocm9ub3VzIHRhc2tzIG9uIHNlcnZlciBmaW5pc2hlZFxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmxvYWRlZChzZWxmLnRhYnMuY3JlYXRlLmNvbnQpO1xuXHRcdFx0XHRcdHNlbGYudGFicy52aWV3LmxvYWRlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdHNlbGYubG9hZENyZWF0ZSh0cnVlKTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRhZGRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsIHRleHQpIHtcblx0XHRpZiAodGl0bGUgaW4gcGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXgpIHtcblx0XHRcdHRleHQgKz0gYFxcbiR7dW5pcXVlQXJyYXkocGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXhbdGl0bGVdKS5qb2luKCdcXG4nKX1gOyAvLyBSZXBsYWNlIGBbLi4ubmV3IFNldCgpXWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdH1cblx0XHRyZXR1cm4gdGV4dDtcblx0fSxcblx0YnVsa0VkaXQodGl0bGVzLCB0ZXh0LCBzdW1tYXJ5KSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0dGl0bGVzID0gdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YodikgPT09IGk7XG5cdFx0fSk7XG5cdFx0dGl0bGVzID0gdGl0bGVzLmpvaW4oJ3wnKTtcblx0XHRyZXR1cm4gYXBpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHR0aXRsZXMsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGRlZmVycmVkc1tkZWZlcnJlZHMubGVuZ3RoXSA9IGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdFx0dGV4dDogc2VsZi5hZGRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsIHRleHQpLFxuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdHRhZ3M6IE9QVElPTlMuYXBpVGFnLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRidWxrRWRpdEJ5UmVnZXgodGl0bGVzLCByZWdleCwgdGV4dCwgc3VtbWFyeSkge1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5maWx0ZXIoKHYsIGksIGFycikgPT4ge1xuXHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKHYpID09PSBpO1xuXHRcdH0pO1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5qb2luKCd8Jyk7XG5cdFx0cmV0dXJuIGFwaVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0XHR0aXRsZXMsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGNvbnN0IHtjb250ZW50fSA9IHBhZ2UucmV2aXNpb25zWzBdLnNsb3RzWydtYWluJ107XG5cdFx0XHRcdFx0Y29uc3QgbmV3Q29udGVudCA9IGNvbnRlbnQucmVwbGFjZShyZWdleCwgdGV4dCk7XG5cdFx0XHRcdFx0ZGVmZXJyZWRzW2RlZmVycmVkcy5sZW5ndGhdID0gYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdFx0dGl0bGU6IHBhZ2UudGl0bGUsXG5cdFx0XHRcdFx0XHR0ZXh0OiBuZXdDb250ZW50LFxuXHRcdFx0XHRcdFx0dGFnczogT1BUSU9OUy5hcGlUYWcsXG5cdFx0XHRcdFx0XHRiYXNldGltZXN0YW1wOiBwYWdlLnJldmlzaW9uc1swXS50aW1lc3RhbXAsXG5cdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRsb2FkVGFiQ29udCh0YWJuYW1lLCBjYWxsYmFjaywgcmVsb2FkKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgdGFiID0gc2VsZi50YWJzW3RhYm5hbWVdO1xuXHRcdGlmIChyZWxvYWQpIHtcblx0XHRcdHRhYi5sb2FkZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCF0YWIubG9hZGVkKSB7XG5cdFx0XHR0YWIuY29udC5odG1sKCcnKTtcblx0XHRcdC8vXG5cdFx0XHRjb25zdCAkZGVzYyA9ICQoJzxwPicpXG5cdFx0XHRcdC5hZGRDbGFzcygnZGVzYycpXG5cdFx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rlc2MtdGV4dCcpLnRleHQoZ2V0TWVzc2FnZSgncmVkaWxvYWRpbmcnKSkpXG5cdFx0XHRcdC5hcHBlbmRUbyh0YWIuY29udCk7XG5cdFx0XHRjb25zdCAkdGV4dCA9ICRkZXNjLmZpbmQoJz4gLmRlc2MtdGV4dCcpO1xuXHRcdFx0Y2FsbGJhY2tcblx0XHRcdFx0LmFwcGx5KHNlbGYpXG5cdFx0XHRcdC5kb25lKCgpID0+IHtcblx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMuanNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0JHRleHQudGV4dChnZXRNZXNzYWdlKGB0YWIke3RhYm5hbWV9ZGVzY2ApKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmZhaWwoKCkgPT4ge1xuXHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBtZXNzYWdlcy5qc1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHQkdGV4dC50ZXh0KGdldE1lc3NhZ2UoYHRhYiR7dGFibmFtZX1ub3Rmb3VuZGApKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5hZGRNZXRob2RzKCRkZXNjLCBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjcmVmcmVzaCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdyZWZyZXNoJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLmxvYWRUYWJDb250KHRhYm5hbWUsIGNhbGxiYWNrLCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0dGFiLmxvYWRlZCA9IHRydWU7XG5cdFx0fVxuXHR9LFxuXHRsb2FkaW5nKGNvbnRhaW5lcikge1xuXHRcdGlmIChjb250YWluZXIucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCkgPT09ICdzcGFuJykge1xuXHRcdFx0Y29udGFpbmVyLmFkZENsYXNzKCdtdy1hamF4LWxvYWRlcicpO1xuXHRcdH0gZWxzZSBpZiAoJCgnc3Bhbi5tdy1hamF4LWxvYWRlcicsIGNvbnRhaW5lcikubGVuZ3RoID09PSAwKSB7XG5cdFx0XHQkKCc8c3Bhbj4nKS5hZGRDbGFzcygnbXctYWpheC1sb2FkZXInKS5hcHBlbmRUbyhjb250YWluZXIpO1xuXHRcdH1cblx0fSxcblx0bG9hZGVkKGNvbnRhaW5lcikge1xuXHRcdGlmIChjb250YWluZXIucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCkgPT09ICdzcGFuJykge1xuXHRcdFx0Y29udGFpbmVyLnJlbW92ZUNsYXNzKCdtdy1hamF4LWxvYWRlcicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCdzcGFuLm13LWFqYXgtbG9hZGVyJywgY29udGFpbmVyKS5yZW1vdmUoKTtcblx0XHR9XG5cdH0sXG5cdHNlbGVjdEFsbChjb250KSB7XG5cdFx0JCgnaW5wdXRbdHlwZT1jaGVja2JveF06bm90KDpkaXNhYmxlZCknLCBjb250KS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG5cdH0sXG5cdHNlbGVjdEludmVyc2UoY29udCkge1xuXHRcdCQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdOm5vdCg6ZGlzYWJsZWQpJywgY29udCkuZWFjaCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cdFx0XHQkZWxlbWVudC5wcm9wKCdjaGVja2VkJywgISRlbGVtZW50LnByb3AoJ2NoZWNrZWQnKSk7XG5cdFx0fSk7XG5cdH0sXG5cdHNlbGVjdEFjdGlvbihjb250LCBjYikge1xuXHRcdGNvbnN0IHBhZ2VuYW1lcyA9IFtdO1xuXHRcdCQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQnLCBjb250KS5lYWNoKChfaW5kZXgsIHBhZ2VuYW1lKSA9PiB7XG5cdFx0XHRwYWdlbmFtZXNbcGFnZW5hbWVzLmxlbmd0aF0gPSAkKHBhZ2VuYW1lKS5kYXRhKCdwYWdlLXRpdGxlJyk7XG5cdFx0fSk7XG5cdFx0aWYgKHBhZ2VuYW1lcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjYi5jYWxsKHRoaXMsIHBhZ2VuYW1lcyk7XG5cdFx0fVxuXHR9LFxuXHRjbGlja0FjdGlvbihjb250LCBjYikge1xuXHRcdGNvbnN0IHBhZ2VuYW1lID0gJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgY29udCkuZGF0YSgncGFnZS10aXRsZScpO1xuXHRcdGNiLmNhbGwodGhpcywgW3BhZ2VuYW1lXSk7XG5cdH0sXG5cdGJ1aWxkTGluayh7dGl0bGUsIGhyZWYsIGNsaWNrLCBjbGFzc25hbWV9KSB7XG5cdFx0Y29uc3QgYSA9ICQoJzxhPicpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRocmVmLFxuXHRcdFx0XHR0YXJnZXQ6ICdfYmxhbmsnLFxuXHRcdFx0XHRyZWw6ICdub29wZW5lciBub3JlZmVycmVyJyxcblx0XHRcdH0pXG5cdFx0XHQudGV4dCh0aXRsZSk7XG5cdFx0aWYgKGNsaWNrKSB7XG5cdFx0XHRhLm9uKCdjbGljaycsIGNsaWNrKTtcblx0XHR9XG5cdFx0aWYgKGNsYXNzbmFtZSkge1xuXHRcdFx0YS5hZGRDbGFzcyhjbGFzc25hbWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3Rvb2xzLXJlZGlyZWN0X2xpbmsnKS5hcHBlbmQoYSk7XG5cdH0sXG5cdGFkZE1ldGhvZHMoJHBhcmVudCwgbWV0aG9kcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGxldCAkY29udGFpbmVyID0gJHBhcmVudC5maW5kKCc+IC50b29scy1yZWRpcmVjdF9tZXRob2RzJyk7XG5cdFx0Y29uc3QgbWV0aG9kRXhpc3QgPSAoe2hyZWZ9KSA9PiB7XG5cdFx0XHRyZXR1cm4gJGNvbnRhaW5lci5maW5kKGBhW2hyZWY9JHtKU09OLnN0cmluZ2lmeShocmVmKX1dYCkubGVuZ3RoID4gMDtcblx0XHR9O1xuXHRcdGlmICgkY29udGFpbmVyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0JGNvbnRhaW5lciA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCd0b29scy1yZWRpcmVjdF9tZXRob2RzJykuYXBwZW5kVG8oJHBhcmVudCk7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgbWV0aG9kIG9mIG1ldGhvZHMpIHtcblx0XHRcdGlmICghbWV0aG9kRXhpc3QobWV0aG9kKSkge1xuXHRcdFx0XHRzZWxmLmJ1aWxkTGluayhtZXRob2QpLmFwcGVuZFRvKCRjb250YWluZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0YnVpbGRTZWxlY3Rpb24obWFpbiwgbWV0ZCwgbXQsIGRzYWIpIHtcblx0XHRjb25zdCBjb250ID0gJCgnPHNwYW4+Jyk7XG5cdFx0Y29uc3Qgc2VsZSA9ICQoJzxpbnB1dD4nKS5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JykuYXBwZW5kVG8oY29udCk7XG5cdFx0dGhpcy5idWlsZExpbmsobWFpbikuYXBwZW5kVG8oY29udCk7XG5cdFx0dGhpcy5hZGRNZXRob2RzKGNvbnQsIG1ldGQpO1xuXHRcdHNlbGUuZGF0YSgncGFnZS10aXRsZScsIG10KTtcblx0XHRpZiAoZHNhYikge1xuXHRcdFx0c2VsZS5wcm9wKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gY29udDtcblx0fSxcblx0bG9hZFZpZXcocmVsb2FkKSB7XG5cdFx0Y29uc3QgJGNvbnRhaW5lciA9IHRoaXMudGFicy52aWV3LmNvbnQ7XG5cdFx0dGhpcy5sb2FkVGFiQ29udChcblx0XHRcdCd2aWV3Jyxcblx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubG9hZFJlZGlyZWN0KHdnUGFnZU5hbWUsICRjb250YWluZXIsIDApO1xuXHRcdFx0fSxcblx0XHRcdHJlbG9hZFxuXHRcdCk7XG5cdH0sXG5cdGxvYWRDcmVhdGUocmVsb2FkKSB7XG5cdFx0dGhpcy5sb2FkVGFiQ29udChcblx0XHRcdCdjcmVhdGUnLFxuXHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5maW5kUmVkaXJlY3Qod2dQYWdlTmFtZSk7XG5cdFx0XHR9LFxuXHRcdFx0cmVsb2FkXG5cdFx0KTtcblx0fSxcblx0bG9hZFJlZGlyZWN0KHBhZ2VuYW1lLCBjb250YWluZXIsIGRlZXAsIGxvYWRlZCkge1xuXHRcdHRoaXMubG9hZGluZyhjb250YWluZXIpO1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGNvbnN0IHRvcCA9IGRlZXAgPyAkKCc8ZGw+JykuYXBwZW5kVG8oY29udGFpbmVyKSA6IGNvbnRhaW5lcjtcblx0XHRpZiAoIWxvYWRlZCkge1xuXHRcdFx0bG9hZGVkID0ge307XG5cdFx0XHRsb2FkZWRbcGFnZW5hbWVdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Y29uc3Qgb25DbGlja0ZpeCA9IChldmVudCkgPT4ge1xuXHRcdFx0Y29uc3QgZW50cnkgPSAkKHRoaXMpLnBhcmVudHMoJ2RkLCBwJykuZmlyc3QoKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRzZWxmLmNsaWNrQWN0aW9uKGVudHJ5LCB0aGlzLmZpeCk7XG5cdFx0fTtcblx0XHR2b2lkIGFwaVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6ICdyZWRpcmVjdHMnLFxuXHRcdFx0XHR0aXRsZXM6IHBhZ2VuYW1lLFxuXHRcdFx0XHRyZGxpbWl0OiAnbWF4Jyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRzZWxmLmxvYWRlZChjb250YWluZXIpO1xuXHRcdFx0XHRsZXQgaGFzX3JlZGlyZWN0ID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IGRlc2MgPSAkKCdwLmRlc2MnLCBzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0Y29uc3QgbWF4aW11bVJlZGlyZWN0RGVwdGggPSAxMDtcblx0XHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0aWYgKHBhZ2UucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7cmVkaXJlY3RzfSA9IHBhZ2U7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZX0gb2YgcmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHJkdGl0bGUgPSB0aXRsZTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdWx0aXRsZSA9IHJkdGl0bGUucmVwbGFjZSgvIC9nLCAnXycpO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBlbnRyeSA9IChkZWVwID8gJCgnPGRkPicpIDogJCgnPHA+JykpLmFwcGVuZFRvKHRvcCk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG1ldGhvZHMgPSBbXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZjogbXcudXRpbC5nZXRVcmwodWx0aXRsZSwge2FjdGlvbjogJ2VkaXQnfSksXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgncmVkaWVkaXQnKSxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRdO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBpc0N5Y2xlUmVkaXJlY3QgPSByZHRpdGxlIGluIGxvYWRlZDtcblx0XHRcdFx0XHRcdFx0bG9hZGVkW3JkdGl0bGVdID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0aWYgKCFpc0N5Y2xlUmVkaXJlY3QgJiYgZGVlcCkge1xuXHRcdFx0XHRcdFx0XHRcdG1ldGhvZHNbbWV0aG9kcy5sZW5ndGhdID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZjogJyNmaXgtcmVkaXJlY3QnLFxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYnZpZXdmaXgnKSxcblx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrOiBvbkNsaWNrRml4LFxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc3QgJGNvbnRhaW5lciA9IHNlbGZcblx0XHRcdFx0XHRcdFx0XHQuYnVpbGRTZWxlY3Rpb24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY6IG13LnV0aWwuZ2V0VXJsKHVsdGl0bGUsIHtyZWRpcmVjdDogJ25vJ30pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmR0aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRtZXRob2RzLFxuXHRcdFx0XHRcdFx0XHRcdFx0dWx0aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRcdCFkZWVwXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmRUbyhlbnRyeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpc0N5Y2xlUmVkaXJlY3QpIHtcblx0XHRcdFx0XHRcdFx0XHQkY29udGFpbmVyLmFwcGVuZChgPHNwYW4gY2xhc3M9XCJlcnJvclwiPiR7Z2V0TWVzc2FnZSgnZXJyY3ljbGVyZWRpcmVjdCcpfTwvc3Bhbj5gKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkZWVwIDwgbWF4aW11bVJlZGlyZWN0RGVwdGgpIHtcblx0XHRcdFx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYubG9hZFJlZGlyZWN0KHJkdGl0bGUsIGVudHJ5LCBkZWVwICsgMSwgbG9hZGVkKTtcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRoYXNfcmVkaXJlY3QgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRoYXNfcmVkaXJlY3QgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGhhc19yZWRpcmVjdCAmJiBkZWVwID09PSAxKSB7XG5cdFx0XHRcdFx0c2VsZi5hZGRNZXRob2RzKGRlc2MsIFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNzZWxlY3QtYWxsJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3NlbGVjdGFsbCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBbGwoc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3NlbGVjdC1pbnZlcnNlJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3NlbGVjdGludmVyc2UnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0SW52ZXJzZShzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjZml4LXNlbGVjdGVkJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYnZpZXdmaXgnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0QWN0aW9uKHNlbGYudGFicy52aWV3LmNvbnQsIHNlbGYuZml4KTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGhhc19yZWRpcmVjdCkge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZVdpdGgoc2VsZik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3RXaXRoKHNlbGYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xuXHR9LFxuXHRmaW5kVmFyaWFudHMocGFnZW5hbWUsIHRpdGxlcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IHN1ZmZpeFJlZyA9IC9eLis/KCjvvIh8WyBfXVxcKCkuKz8oWynvvIldKSkkLztcblx0XHRsZXQgcmV0VGl0bGVzID0gW107XG5cdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0XHRjb25zdCB4aHIgPSBhcGlcblx0XHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0cGFnZTogcGFnZW5hbWUsXG5cdFx0XHRcdFx0cHJvcDogJ2Rpc3BsYXl0aXRsZScsXG5cdFx0XHRcdFx0dXNlbGFuZzogdmFyaWFudCxcblx0XHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoe3BhcnNlfSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHtkaXNwbGF5dGl0bGV9ID0gcGFyc2U7XG5cdFx0XHRcdFx0Ly8gRXhhbXBsZTpcblx0XHRcdFx0XHQvLyAtIEJlZm9yZTogPHNwYW4gY2xhc3M9XCJtdy1wYWdlLXRpdGxlLW5hbWVzcGFjZVwiPuaxgumXu+eZvuenkTwvc3Bhbj48c3BhbiBjbGFzcz1cIm13LXBhZ2UtdGl0bGUtc2VwYXJhdG9yXCI+Ojwvc3Bhbj48c3BhbiBjbGFzcz1cIm13LXBhZ2UtdGl0bGUtbWFpblwiPuaymeebkjwvc3Bhbj5cblx0XHRcdFx0XHQvLyAtIEFmdGVyOiDmsYLpl7vnmb7np5E65rKZ55uSXG5cdFx0XHRcdFx0bGV0IHRpdGxlID0gJCgnPHNwYW4+JykuYXBwZW5kKGRpc3BsYXl0aXRsZSkuZXEoMCkudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0XHR0aXRsZSA9IGZpeE5hbWVzcGFjZSh0aXRsZSk7XG5cdFx0XHRcdFx0c2V0UmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCAne3vnroDnuYHph43lrprlkJF9fScsIFNVRkZJWF9BUFBFTkQpO1xuXHRcdFx0XHRcdHJldHVybiB0aXRsZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRkZWZlcnJlZHNbZGVmZXJyZWRzLmxlbmd0aF0gPSB4aHI7XG5cdFx0fVxuXHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKS50aGVuKCguLi5hcmdzKSA9PiB7XG5cdFx0XHRjb25zdCBzdWZmaXhlcyA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCB0aXRsZSBvZiBhcmdzKSB7XG5cdFx0XHRcdGxldCBzdWZmaXg7XG5cdFx0XHRcdC8vIGZpbmQgdGl0bGUgc3VmZml4LFxuXHRcdFx0XHQvLyBmb3IgZXhhbXBsZSBcIiAo5rWO5Y2X5biCKVwiIHRvIFwi5biC5Lit5Yy6ICjmtY7ljZfluIIpXCJcblx0XHRcdFx0Y29uc3Qgc3VmZml4QXJyID0gc3VmZml4UmVnLmV4ZWModGl0bGUpO1xuXHRcdFx0XHRpZiAoc3VmZml4QXJyICYmIHN1ZmZpeEFyci5sZW5ndGggPT09IDIpIHtcblx0XHRcdFx0XHRbLCBzdWZmaXhdID0gc3VmZml4QXJyO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1ZmZpeCA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldFRpdGxlc1tyZXRUaXRsZXMubGVuZ3RoXSA9IHRpdGxlO1xuXHRcdFx0XHRzdWZmaXhlc1tzdWZmaXhlcy5sZW5ndGhdID0gc3VmZml4O1xuXHRcdFx0fVxuXHRcdFx0Ly8gYXBwZW5kIHN1ZmZpeGVzXG5cdFx0XHRmb3IgKGNvbnN0IHN1ZmZpeCBvZiB1bmlxdWVBcnJheShzdWZmaXhlcykpIHtcblx0XHRcdFx0cmV0VGl0bGVzID0gW1xuXHRcdFx0XHRcdC4uLnJldFRpdGxlcyxcblx0XHRcdFx0XHQuLi50aXRsZXMubWFwKCh0aXRsZSkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgbW9kaWZpZWRUaXRsZSA9IGZpeE5hbWVzcGFjZSh0aXRsZSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc3VmZml4UmVnLnRlc3QobW9kaWZpZWRUaXRsZSkgPyBtb2RpZmllZFRpdGxlIDogbW9kaWZpZWRUaXRsZSArIHN1ZmZpeDtcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNlbGYuZmluZE5vdEV4aXN0cyh1bmlxdWVBcnJheShyZXRUaXRsZXMpKTsgLy8gUmVwbGFjZSBgWy4uLm5ldyBTZXQoKV1gIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHR9KTtcblx0fSxcblx0ZmluZE5vdEV4aXN0cyh0aXRsZXMpIHtcblx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRjb25zdCBleGNsdWRlcyA9IFsn55So5a2X5qih5byPJ107XG5cdFx0bGV0IGFsbHRpdGxlcyA9IFtdO1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5qb2luKCd8Jyk7XG5cdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0XHRkZWZlcnJlZHNbZGVmZXJyZWRzLmxlbmd0aF0gPSBhcGkucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGV4dDogdGl0bGVzLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdHRpdGxlOiAnTWVkaWFXaWtpOkdhZGdldC1Ub29sc1JlZGlyZWN0LmpzLy0nLFxuXHRcdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdHVzZWxhbmc6IHZhcmlhbnQsXG5cdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpLnRoZW4oKC4uLmFyZ3MpID0+IHtcblx0XHRcdGZvciAoY29uc3QgW3twYXJzZX1dIG9mIGFyZ3MpIHtcblx0XHRcdFx0YWxsdGl0bGVzID0gWy4uLmFsbHRpdGxlcywgLi4uJChwYXJzZS50ZXh0KS50ZXh0KCkudHJpbSgpLnNwbGl0KCd8JyldO1xuXHRcdFx0fVxuXHRcdFx0YWxsdGl0bGVzID0gYWxsdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2KSA9PT0gaTtcblx0XHRcdH0pO1xuXHRcdFx0YWxsdGl0bGVzID0gYWxsdGl0bGVzLmpvaW4oJ3wnKTtcblx0XHRcdHJldHVybiBhcGlcblx0XHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHRcdHRpdGxlczogYWxsdGl0bGVzLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRcdHRpdGxlcyA9IFtdO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdFx0Y29uc3Qge3RpdGxlfSA9IHBhZ2U7XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5taXNzaW5nICYmICFleGNsdWRlcy5pbmNsdWRlcyh0aXRsZSkpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHRpdGxlIGluIHJlZGlyZWN0RXhjbHVkZXMpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBleGNsdWRlIHNwZWNpYWwgdGl0bGVzXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IHRpdGxlO1xuXHRcdFx0XHRcdFx0XHRpZiAoSVNfQ0FURUdPUlkpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSB3Z1BhZ2VOYW1lLnJlcGxhY2UoL15DYXRlZ29yeTovLCAnJyk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0UmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCAne3vliIbnsbvph43lrprlkJF8JDF9fScucmVwbGFjZSgnJDEnLCB0YXJnZXQpKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvLyBvbmx5IHNldCBkZWZhdWx0IHN1ZmZpeFxuXHRcdFx0XHRcdFx0XHRzZXRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsICd7e+WIq+WQjemHjeWumuWQkX19JywgU1VGRklYX1NFVERFRkFVTFQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0fSxcblx0ZmluZFJlZGlyZWN0KHBhZ2VuYW1lKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgZnJjRGVmZXJyZWRzID0gW107XG5cdFx0Y29uc3QgY29udGFpbmVyID0gc2VsZi50YWJzLmNyZWF0ZS5jb250O1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdGNvbnN0ICRjb250ZW50ID0gJGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCA+IGRpdi5tdy1wYXJzZXItb3V0cHV0Jyk7XG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdFx0bGV0IHRpdGxlcyA9IFtdO1xuXHRcdHNlbGYubG9hZGluZyhjb250YWluZXIpO1xuXHRcdGZvciAoY29uc3QgY2FsbGJhY2sgb2YgZmluZFJlZGlyZWN0Q2FsbGJhY2tzKSB7XG5cdFx0XHRjb25zdCByZXQgPSBjYWxsYmFjayhwYWdlbmFtZSwgJGNvbnRlbnQsIHRpdGxlcyk7XG5cdFx0XHRpZiAodHlwZW9mIHJldCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gcmV0O1xuXHRcdFx0fSBlbHNlIGlmICgnZG9uZScgaW4gcmV0KSB7XG5cdFx0XHRcdC8vIGlzIERlZmVycmVkXG5cdFx0XHRcdGZyY0RlZmVycmVkc1tmcmNEZWZlcnJlZHMubGVuZ3RoXSA9IHJldDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRpdGxlcyA9IHVuaXF1ZUFycmF5KFsuLi50aXRsZXMsIC4uLnJldF0pOyAvLyBSZXBsYWNlIGBbLi4ubmV3IFNldCgpXWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyByZW1vdmUgYWxsIGVtcHR5IHRpdGxlc1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5tYXAoKHRpdGxlKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGl0bGUgfHwgbnVsbDtcblx0XHR9KTtcblx0XHRjb25zdCBvbkNsaWNrQ3JlYXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRjb25zdCBlbnRyeSA9ICQodGhpcykucGFyZW50cygncDpmaXJzdCcpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHNlbGYuY2xpY2tBY3Rpb24oZW50cnksIHNlbGYuY3JlYXRlKTtcblx0XHR9O1xuXHRcdC8vIGhhbmRsZXMgdGhlIGRlZmVycmVkIGNhbGxiYWNrc1xuXHRcdHZvaWQgJC53aGVuKC4uLmZyY0RlZmVycmVkcylcblx0XHRcdC50aGVuKCguLi5hcmdzKSA9PiB7XG5cdFx0XHRcdGZvciAoY29uc3QgcmV0IG9mIGFyZ3MpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHJldCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IHJldDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGl0bGVzID0gdW5pcXVlQXJyYXkoWy4uLnRpdGxlcywgLi4ucmV0XSk7IC8vIFJlcGxhY2UgYFsuLi5uZXcgU2V0KCldYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzZWxmLmZpbmRWYXJpYW50cyhwYWdlbmFtZSwgdGl0bGVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoZnZ0aXRsZXMpID0+IHtcblx0XHRcdFx0Ly8gYnVpbGQgSFRNTFxuXHRcdFx0XHRzZWxmLmxvYWRlZChjb250YWluZXIpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHRpdGxlIG9mIGZ2dGl0bGVzKSB7XG5cdFx0XHRcdFx0Y29uc3QgdWx0aXRsZSA9IHRpdGxlLnJlcGxhY2UoJyAnLCAnXycpO1xuXHRcdFx0XHRcdGNvbnN0IGVudHJ5ID0gJCgnPHA+JykuYXBwZW5kVG8oY29udGFpbmVyKTtcblx0XHRcdFx0XHRzZWxmLmJ1aWxkU2VsZWN0aW9uKFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiBtdy51dGlsLmdldFVybCh1bHRpdGxlLCB7YWN0aW9uOiAnZWRpdCcsIHJlZGxpbms6ICcxJ30pLFxuXHRcdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdFx0Y2xhc3NuYW1lOiAnbmV3Jyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRocmVmOiAnI2NyZWF0ZS1yZWRpcmVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYmNyZWF0ZXRpdGxlJyksXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6IG9uQ2xpY2tDcmVhdGUsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0dWx0aXRsZSxcblx0XHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdFx0KS5hcHBlbmRUbyhlbnRyeSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZGVzYyA9ICQoJ3AuZGVzYycsIGNvbnRhaW5lcik7XG5cdFx0XHRcdGlmIChmdnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2VsZi5hZGRNZXRob2RzKGRlc2MsIFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNzZWxlY3QtYWxsJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3NlbGVjdGFsbCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBbGwoY29udGFpbmVyKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWludmVyc2UnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0aW52ZXJzZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RJbnZlcnNlKGNvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI2NyZWF0ZS1zZWxlY3RlZCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBY3Rpb24oY29udGFpbmVyLCBzZWxmLmNyZWF0ZSk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZVdpdGgoc2VsZiwgW2Z2dGl0bGVzXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3RXaXRoKHNlbGYsIFtmdnRpdGxlc10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xuXHR9LFxufTtcblxuLyogZXhwb3J0IGdsb2JhbCBvYmplY3QgKi9cbndpbmRvdy50b29sc1JlZGlyZWN0ID0ge1xuXHRmaW5kUmVkaXJlY3RDYWxsYmFjayxcblx0ZmluZFJlZGlyZWN0QnlTZWxlY3Rvcixcblx0c2V0UmVkaXJlY3RUZXh0U3VmZml4LFxufTtcblxuZXhwb3J0IHtUb29sc1JlZGlyZWN0LCBmaW5kUmVkaXJlY3RDYWxsYmFjaywgZmluZFJlZGlyZWN0QnlTZWxlY3Rvciwgc2V0UmVkaXJlY3RUZXh0U3VmZml4fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFRvb2xzUmVkaXJlY3QvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgdHlwZSB7TWVzc2FnZUtleX0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBnZXRNZXNzYWdlID0gKGtleTogTWVzc2FnZUtleSBleHRlbmRzIGB0b29sc3JlZGlyZWN0LSR7aW5mZXIgUH1gID8gUCA6IG5ldmVyLCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGZ1bGxLZXk6IHN0cmluZyA9IGB0b29sc3JlZGlyZWN0LSR7a2V5fWA7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGZ1bGxLZXksIC4uLmFyZ3MpLnBhcnNlKCkgOiBtdy5tZXNzYWdlKGZ1bGxLZXkpLnBsYWluKCk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB0eXBlIHtNZXNzYWdlS2V5fSBmcm9tICcuL3R5cGVzJztcblxuY29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgREVGQVVMVF9NRVNTQUdFUyA9IHtcblx0J3Rvb2xzcmVkaXJlY3QtYnRudGl0bGUnOiAn6YeN5a6a5ZCRJyxcblx0J3Rvb2xzcmVkaXJlY3QtYnRuZGVzYyc6ICfliJvlu7rlkoznrqHnkIbmraTpobXpnaLnmoTph43lrprlkJEnLFxuXHQndG9vbHNyZWRpcmVjdC1kbGd0aXRsZSc6ICfliJvlu7rlkoznrqHnkIbph43lrprlkJEnLFxuXHQndG9vbHNyZWRpcmVjdC1yZWRpbG9hZGluZyc6ICfmlbDmja7liqDovb3kuK3vvIzor7fnqI3lgJnigKbigKYnLFxuXHQndG9vbHNyZWRpcmVjdC1yZWRpZWRpdCc6ICfnvJbovpEnLFxuXHQndG9vbHNyZWRpcmVjdC1zZWxlY3RhbGwnOiAn5YWo6YCJJyxcblx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0aW52ZXJzZSc6ICflj43pgIknLFxuXHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3dGl0bGUnOiAn5p+l55yLJyxcblx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2Rlc2MnOiAn5Lul5LiL5piv5oyH5ZCR5q2k6aG16Z2i55qE6YeN5a6a5ZCR6aG177yaJyxcblx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld25vdGZvdW5kJzogJ+ayoeacieaJvuWIsOS7u+S9leaMh+WQkeatpOmhtemdoueahOmHjeWumuWQkemhteOAgicsXG5cdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdtdWx0aSc6ICflpJrph40nLFxuXHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3Zml4JzogJ+S/ruWkjScsXG5cdCd0b29sc3JlZGlyZWN0LWZpeGxvYWRpbmcnOiAn6K+356iN5YCZ77yM5q2j5Zyo6Ieq5Yqo5L+u5aSN6YeN5a6a5ZCR4oCm4oCmJyxcblx0J3Rvb2xzcmVkaXJlY3QtZml4dGV4dCc6ICcjUkVESVJFQ1QgW1skMV1dJyxcblx0J3Rvb2xzcmVkaXJlY3QtZml4c3VtbWFyeSc6ICfnvJbovpHlt6XlhbfvvJrkv67lpI3lpJrph43ph43lrprlkJEnLFxuXHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGV0aXRsZSc6ICfliJvlu7onLFxuXHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVkZXNjJzogJ+S7peS4i+aYr+WwmuacquWIm+W7uueahOmHjeWumuWQkemhte+8micsXG5cdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZW5vdGZvdW5kJzogJ+ayoeacieaJvuWIsOWPr+S7peWIm+W7uueahOmHjeWumuWQkemhteOAgicsXG5cdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWFsbCc6ICflhajpg6jliJvlu7onLFxuXHQndG9vbHNyZWRpcmVjdC1jcmVhdGVsb2FkaW5nJzogJ+ivt+eojeWAme+8jOato+WcqOiHquWKqOWIm+W7uumHjeWumuWQkeKApuKApicsXG5cdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXN1bW1hcnknOiAn57yW6L6R5bel5YW377ya6Ieq5Yqo5Yib5bu66YeN5a6a5ZCR5YiwW1skMV1dJyxcblx0J3Rvb2xzcmVkaXJlY3QtZXJyY3ljbGVyZWRpcmVjdCc6ICfml6Dms5Xoh6rliqjkv67lpI3vvJrlj5HnjrDlvqrnjq/ph43lrprlkJEnLFxuXHQndG9vbHNyZWRpcmVjdC1yZWZyZXNoJzogJ+WIt+aWsCcsXG59IHNhdGlzZmllcyBSZWNvcmQ8TWVzc2FnZUtleSwgc3RyaW5nPjtcblxuY29uc3Qgc2V0TWVzc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQ8dHlwZW9mIERFRkFVTFRfTUVTU0FHRVM+KHtcblx0XHRcdCd0b29sc3JlZGlyZWN0LWJ0bnRpdGxlJzogJ+mHjeaWsOWwjuWQkScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1idG5kZXNjJzogJ+WJteW7uuWSjOeuoeeQhuatpOmggemdoueahOmHjeaWsOWwjuWQkScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1kbGd0aXRsZSc6ICflibXlu7rlkoznrqHnkIbph43mlrDlsI7lkJEnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtcmVkaWxvYWRpbmcnOiAn5pW45pOa5Yqg6LyJ5Lit77yM6KuL56iN5YCZ4oCm4oCmJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXJlZGllZGl0JzogJ+e3qOi8rycsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1zZWxlY3RhbGwnOiAn5YWo6YG4Jyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXNlbGVjdGludmVyc2UnOiAn5Y+N6YG4Jyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXd0aXRsZSc6ICfmn6XnnIsnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2Rlc2MnOiAn5Lul5LiL5piv5oyH5ZCR5q2k6aCB6Z2i55qE6YeN5paw5bCO5ZCR6aCB77yaJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdub3Rmb3VuZCc6ICfmspLmnInmib7liLDku7vkvZXmjIflkJHmraTpoIHpnaLnmoTph43mlrDlsI7lkJHpoIHjgIInLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld211bHRpJzogJ+WkmumHjScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3Zml4JzogJ+S/ruW+qScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1maXhsb2FkaW5nJzogJ+iri+eojeWAme+8jOato+WcqOiHquWLleS/ruW+qemHjeaWsOWwjuWQkeKApuKApicsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1maXh0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtZml4c3VtbWFyeSc6ICfnt6jovK/lt6XlhbfvvJrkv67lvqnlpJrph43ph43mlrDlsI7lkJEnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRldGl0bGUnOiAn5Ym15bu6Jyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWRlc2MnOiAn5Lul5LiL5piv5bCa5pyq5Ym15bu655qE6YeN5paw5bCO5ZCR6aCB77yaJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZW5vdGZvdW5kJzogJ+aykuacieaJvuWIsOWPr+S7peWJteW7uueahOmHjeaWsOWwjuWQkemggeOAgicsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVhbGwnOiAn5YWo6YOo5Ym15bu6Jyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZWxvYWRpbmcnOiAn6KuL56iN5YCZ77yM5q2j5Zyo6Ieq5YuV5Ym15bu66YeN5paw5bCO5ZCR4oCm4oCmJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGVzdW1tYXJ5JzogJ+e3qOi8r+W3peWFt++8muiHquWLleWJteW7uumHjeaWsOWwjuWQkeWIsFtbJDFdXScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1lcnJjeWNsZXJlZGlyZWN0JzogJ+eEoeazleiHquWLleS/ruW+qe+8mueZvOePvuW+queSsOmHjeaWsOWwjuWQkScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1yZWZyZXNoJzogJ+WIt+aWsCcsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KERFRkFVTFRfTUVTU0FHRVMpO1xuXHR9XG59O1xuXG5leHBvcnQge3NldE1lc3NhZ2VzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCx1QkFBQTtFQUFBRSx3QkFBQUEsTUFBQUE7RUFBQUMsc0JBQUFBLE1BQUFBO0VBQUFDLHVCQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQVAscUJBQUE7O0FDQ0MsSUFBQVEsU0FBVTtBQUNWLElBQUFDLFVBQVc7O0FDRlosSUFBTUMsZ0JBQWdCO0FBQ3RCLElBQU1DLGlCQUFpQjtBQUN2QixJQUFNQyxvQkFBb0I7QUFFMUIsSUFBTUMsV0FBVyxDQUFDLFdBQVcsV0FBVyxTQUFTLFNBQVMsU0FBUyxTQUFTLFNBQVMsT0FBTzs7QUNBNUYsSUFBQUMscUJBQXlDQyxRQUFBLGlCQUFBOztBQ0h6QyxJQUFBQyxvQkFBd0JELFFBQUEsaUJBQUE7QUFFeEIsSUFBTUUsT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSxpQkFBQUMsT0FBbUNWLE9BQU8sQ0FBRTs7QUNEaEUsSUFBTVcsYUFBYUEsQ0FBQ0MsUUFBbUVDLFNBQTJCO0FBQ2pILFFBQU1DLFVBQUEsaUJBQUFKLE9BQW1DRSxHQUFHO0FBSTVDLFNBQU9DLEtBQUtFLFNBQVNDLEdBQUdDLFFBQVFILFNBQVMsR0FBR0QsSUFBSSxFQUFFSyxNQUFNLElBQUlGLEdBQUdDLFFBQVFILE9BQU8sRUFBRUssTUFBTTtBQUN2Rjs7QUZBQSxJQUFNO0VBQUNDO0VBQWdC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Y0FBY0EsTUFBWTtBQUMvQixNQUFJLENBQUMsV0FBVyxTQUFTLFNBQVMsT0FBTyxFQUFFakIsU0FBU2UsY0FBYyxHQUFHO0FBQ3BFaFEsT0FBR21RLFNBQVNDLElBQTZCO01BQ3hDLDBCQUEwQjtNQUMxQix5QkFBeUI7TUFDekIsMEJBQTBCO01BQzFCLDZCQUE2QjtNQUM3QiwwQkFBMEI7TUFDMUIsMkJBQTJCO01BQzNCLCtCQUErQjtNQUMvQiw4QkFBOEI7TUFDOUIsNkJBQTZCO01BQzdCLGlDQUFpQztNQUNqQyw4QkFBOEI7TUFDOUIsNEJBQTRCO01BQzVCLDRCQUE0QjtNQUM1Qix5QkFBeUI7TUFDekIsNEJBQTRCO01BQzVCLGdDQUFnQztNQUNoQywrQkFBK0I7TUFDL0IsbUNBQW1DO01BQ25DLDhCQUE4QjtNQUM5QiwrQkFBK0I7TUFDL0IsNEJBQTRCO01BQzVCLCtCQUErQjtNQUMvQixrQ0FBa0M7TUFDbEMseUJBQXlCO0lBQzFCLENBQUM7RUFDRixPQUFPO0FBQ05wUSxPQUFHbVEsU0FBU0MsSUFBSUgsZ0JBQWdCO0VBQ2pDO0FBQ0Q7O0FOekRBQyxZQUFZO0FBRVosTUFBQSxHQUFLSCxtQkFBQU0sU0FBUSxFQUFFcEssS0FBTWxELFdBQXlDO0FBQzdETCxnQkFBY0ksS0FBS0MsS0FBSztBQUN6QixDQUFDOyIsCiAgIm5hbWVzIjogWyJUb29sc1JlZGlyZWN0X2V4cG9ydHMiLCAiX19leHBvcnQiLCAiZmluZFJlZGlyZWN0QnlTZWxlY3RvciIsICJmaW5kUmVkaXJlY3RDYWxsYmFjayIsICJzZXRSZWRpcmVjdFRleHRTdWZmaXgiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgImFwaVRhZyIsICJ2ZXJzaW9uIiwgIlNVRkZJWF9BUFBFTkQiLCAiU1VGRklYX1JFUExBQ0UiLCAiU1VGRklYX1NFVERFRkFVTFQiLCAiVkFSSUFOVFMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYXJncyIsICJmdWxsS2V5IiwgImxlbmd0aCIsICJtdyIsICJtZXNzYWdlIiwgInBhcnNlIiwgInBsYWluIiwgIndnTmFtZXNwYWNlSWRzIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAiY29uZmlnIiwgImdldCIsICJJU19DQVRFR09SWSIsICJmaW5kUmVkaXJlY3RDYWxsYmFja3MiLCAicGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXgiLCAicmVkaXJlY3RFeGNsdWRlcyIsICJuc1ByZWZpeGVzIiwgIm5zQ2Fub25QcmVmaXgiLCAibnNQcmVmaXhQYXR0ZXJuIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJ0ZXh0IiwgIm5zaWQiLCAic3BsaXQiLCAiUmVnRXhwIiwgImpvaW4iLCAiZml4TmFtZXNwYWNlIiwgInRpdGxlIiwgInRlc3QiLCAicmVwbGFjZSIsICJjYWxsYmFjayIsICJnZW5lcmF0ZUFycmF5IiwgInNlbGVjdG9yIiwgIiQiLCAibWFwIiwgIl9pbmRleCIsICJlbGVtZW50IiwgImVxIiwgInRyaW0iLCAic3VmZml4IiwgImZsYWciLCAiZmxhZ19zZXQiLCAiZmxhZ19hcHBlbmQiLCAiVG9vbHNSZWRpcmVjdCIsICJ0YWJzZWxlbSIsICJ0YWdzZWxlbSIsICJ2YXJpYW50cyIsICJpbml0IiwgIiRib2R5IiwgInNlbGYiLCAiYnV0dG9uIiwgImFkZENsYXNzIiwgImF0dHIiLCAiY3NzIiwgImFwcGVuZCIsICJvbiIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJkaWFsb2ciLCAiZmluZCIsICJhZnRlciIsICJiZ2lmcmFtZSIsICJyZXNpemFibGUiLCAibW9kYWwiLCAid2lkdGgiLCAiTWF0aCIsICJyb3VuZCIsICJ3aW5kb3ciLCAicG9zaXRpb24iLCAiaGVpZ2h0IiwgImFwcGVuZFRvIiwgImFkZFRhYnMiLCAidGFicyIsICJrbmFtZSIsICJoYXNPd24iLCAiY2hhckF0IiwgInRvVXBwZXJDYXNlIiwgInNsaWNlIiwgInRhYiIsICJ0YWciLCAiY29udCIsICJsb2FkVmlldyIsICJjcmVhdGVUYWIiLCAidGFibmFtZSIsICJ0YWJ0aXRsZSIsICJvbkNsaWNrIiwgImNhbGwiLCAibG9hZGVkIiwgIl9pbml0VGFiVmlldyIsICJfaW5pdFRhYkNyZWF0ZSIsICJsb2FkQ3JlYXRlIiwgInZpZXciLCAiY3JlYXRlIiwgImZpeCIsICJwYWdlbmFtZXMiLCAicmVtb3ZlIiwgImxvYWRpbmciLCAiYnVsa0VkaXRCeVJlZ2V4IiwgInRoZW4iLCAic2V0VGltZW91dCIsICJidWxrRWRpdCIsICJhZGRSZWRpcmVjdFRleHRTdWZmaXgiLCAidW5pcXVlQXJyYXkiLCAidGl0bGVzIiwgInN1bW1hcnkiLCAiZmlsdGVyIiwgInYiLCAiaSIsICJhcnIiLCAiaW5kZXhPZiIsICJwb3N0IiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInF1ZXJ5IiwgImRlZmVycmVkcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInBhZ2VzIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJ2YWx1ZSIsICJwb3N0V2l0aFRva2VuIiwgInRhZ3MiLCAiZXJyIiwgImUiLCAiZiIsICJ3aGVuIiwgInJlZ2V4IiwgInJ2cHJvcCIsICJydnNsb3RzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInBhZ2UiLCAiY29udGVudCIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibmV3Q29udGVudCIsICJiYXNldGltZXN0YW1wIiwgInRpbWVzdGFtcCIsICJsb2FkVGFiQ29udCIsICJyZWxvYWQiLCAiaHRtbCIsICIkZGVzYyIsICIkdGV4dCIsICJhcHBseSIsICJmYWlsIiwgImFsd2F5cyIsICJhZGRNZXRob2RzIiwgImhyZWYiLCAiY2xpY2siLCAiY29udGFpbmVyIiwgInRvTG93ZXJDYXNlIiwgInJlbW92ZUNsYXNzIiwgInNlbGVjdEFsbCIsICJzZWxlY3RJbnZlcnNlIiwgImVhY2giLCAiJGVsZW1lbnQiLCAic2VsZWN0QWN0aW9uIiwgImNiIiwgInBhZ2VuYW1lIiwgImRhdGEiLCAiY2xpY2tBY3Rpb24iLCAiYnVpbGRMaW5rIiwgImNsYXNzbmFtZSIsICJhIiwgInRhcmdldCIsICJyZWwiLCAiJHBhcmVudCIsICJtZXRob2RzIiwgIiRjb250YWluZXIiLCAibWV0aG9kRXhpc3QiLCAiSlNPTiIsICJzdHJpbmdpZnkiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAibWV0aG9kIiwgImJ1aWxkU2VsZWN0aW9uIiwgIm1haW4iLCAibWV0ZCIsICJtdCIsICJkc2FiIiwgInNlbGUiLCAibG9hZFJlZGlyZWN0IiwgImZpbmRSZWRpcmVjdCIsICJkZWVwIiwgImRlZmVycmVkIiwgIkRlZmVycmVkIiwgInRvcCIsICJvbkNsaWNrRml4IiwgImVudHJ5IiwgInBhcmVudHMiLCAiZmlyc3QiLCAicmRsaW1pdCIsICJoYXNfcmVkaXJlY3QiLCAiZGVzYyIsICJtYXhpbXVtUmVkaXJlY3REZXB0aCIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJyZWRpcmVjdHMiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAicmR0aXRsZSIsICJ1bHRpdGxlIiwgInV0aWwiLCAiZ2V0VXJsIiwgImlzQ3ljbGVSZWRpcmVjdCIsICJyZWRpcmVjdCIsICJyZXNvbHZlV2l0aCIsICJyZWplY3RXaXRoIiwgInByb21pc2UiLCAiZmluZFZhcmlhbnRzIiwgInN1ZmZpeFJlZyIsICJyZXRUaXRsZXMiLCAiX2kyIiwgIl9WQVJJQU5UUyIsICJ2YXJpYW50IiwgInhociIsICJ1c2VsYW5nIiwgImRpc3BsYXl0aXRsZSIsICJzdWZmaXhlcyIsICJfaTMiLCAiX2FyZ3MiLCAic3VmZml4QXJyIiwgImV4ZWMiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAibW9kaWZpZWRUaXRsZSIsICJmaW5kTm90RXhpc3RzIiwgImV4Y2x1ZGVzIiwgImFsbHRpdGxlcyIsICJfaTQiLCAiX1ZBUklBTlRTMiIsICJjb250ZW50bW9kZWwiLCAiX2k1IiwgIl9hcmdzMiIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJtaXNzaW5nIiwgImluY2x1ZGVzIiwgImZyY0RlZmVycmVkcyIsICIkY29udGVudCIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJyZXQiLCAib25DbGlja0NyZWF0ZSIsICJfaTYiLCAiX2FyZ3MzIiwgImZ2dGl0bGVzIiwgIl9pdGVyYXRvcjEwIiwgIl9zdGVwMTAiLCAicmVkbGluayIsICJ0b29sc1JlZGlyZWN0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ3Z1VzZXJMYW5ndWFnZSIsICJERUZBVUxUX01FU1NBR0VTIiwgInNldE1lc3NhZ2VzIiwgIm1lc3NhZ2VzIiwgInNldCIsICJnZXRCb2R5Il0KfQo=
