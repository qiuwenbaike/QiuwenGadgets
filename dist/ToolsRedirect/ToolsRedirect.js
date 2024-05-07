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
      text += "\n".concat([...(0, import_ext_gadget2.uniqueArray)(pageWithRedirectTextSuffix[title])].join("\n"));
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
      return self.findNotExists([...(0, import_ext_gadget2.uniqueArray)(retTitles)]);
    });
  },
  findNotExists(titles) {
    const deferreds = [];
    const excludes = (0, import_ext_gadget2.uniqueArray)(["用字模式"]);
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
          titles = [...(0, import_ext_gadget2.uniqueArray)([...titles, ...ret])];
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
          titles = [...(0, import_ext_gadget2.uniqueArray)([...titles, ...ret])];
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QvVG9vbHNSZWRpcmVjdC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9vcHRpb25zLmpzb24iLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL2NvcmUuanMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy91dGlsL2dldE1lc3NhZ2UudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9tZXNzYWdlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICcuL1Rvb2xzUmVkaXJlY3QubGVzcyc7XG5pbXBvcnQge1Rvb2xzUmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7c2V0TWVzc2FnZXN9IGZyb20gJy4vbW9kdWxlcy9tZXNzYWdlcyc7XG5cbnNldE1lc3NhZ2VzKCk7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRUb29sc1JlZGlyZWN0LmluaXQoJGJvZHkpO1xufSk7XG5cbmV4cG9ydCB7ZmluZFJlZGlyZWN0Q2FsbGJhY2ssIGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IsIHNldFJlZGlyZWN0VGV4dFN1ZmZpeH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuIiwgIntcblx0XCJhcGlUYWdcIjogXCJUb29sc1JlZGlyZWN0XCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiY29uc3QgU1VGRklYX0FQUEVORCA9IDA7XG5jb25zdCBTVUZGSVhfUkVQTEFDRSA9IDE7XG5jb25zdCBTVUZGSVhfU0VUREVGQVVMVCA9IDI7XG5cbmNvbnN0IFZBUklBTlRTID0gWyd6aC1oYW5zJywgJ3poLWhhbnQnLCAnemgtY24nLCAnemgtaGsnLCAnemgtbW8nLCAnemgtc2cnLCAnemgtbXknLCAnemgtdHcnXTtcblxuZXhwb3J0IHtTVUZGSVhfQVBQRU5ELCBTVUZGSVhfUkVQTEFDRSwgU1VGRklYX1NFVERFRkFVTFQsIFZBUklBTlRTfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtTVUZGSVhfQVBQRU5ELCBTVUZGSVhfUkVQTEFDRSwgU1VGRklYX1NFVERFRkFVTFQsIFZBUklBTlRTfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheSwgdW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL3V0aWwvZ2V0TWVzc2FnZSc7XG5cbmNvbnN0IHt3Z05hbWVzcGFjZUlkcywgd2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgSVNfQ0FURUdPUlkgPSB3Z05hbWVzcGFjZU51bWJlciA9PT0gMTQ7XG5cbmxldCBmaW5kUmVkaXJlY3RDYWxsYmFja3MgPSBbXTtcbmNvbnN0IHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4ID0ge307XG5jb25zdCByZWRpcmVjdEV4Y2x1ZGVzID0ge307XG5jb25zdCBuc1ByZWZpeGVzID0gW107XG5sZXQgbnNDYW5vblByZWZpeCwgbnNQcmVmaXhQYXR0ZXJuO1xuXG5mb3IgKGNvbnN0IFt0ZXh0LCBuc2lkXSBvZiBPYmplY3QuZW50cmllcyh3Z05hbWVzcGFjZUlkcykpIHtcblx0aWYgKG5zaWQgPT09IHdnTmFtZXNwYWNlTnVtYmVyICYmICEhdGV4dCkge1xuXHRcdG5zUHJlZml4ZXNbbnNQcmVmaXhlcy5sZW5ndGhdID0gdGV4dDtcblx0fVxufVxuXG5pZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0Ly8gYXJ0aWNsZXNcblx0bnNDYW5vblByZWZpeCA9ICcnO1xuXHRuc1ByZWZpeFBhdHRlcm4gPSAvXi87XG59IGVsc2Uge1xuXHRuc0Nhbm9uUHJlZml4ID0gYCR7d2dQYWdlTmFtZS5zcGxpdCgnOicpWzBdfTpgO1xuXHRuc1ByZWZpeFBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeKCR7bnNQcmVmaXhlcy5qb2luKCd8Jyl9KTpgLCAnaScpO1xufVxuXG5jb25zdCBmaXhOYW1lc3BhY2UgPSAodGl0bGUpID0+IHtcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdFx0Ly8gZG8gbm90aGluZyBpZiBpdCdzIGFydGljbGVzXG5cdFx0cmV0dXJuIHRpdGxlO1xuXHR9IGVsc2UgaWYgKG5zUHJlZml4UGF0dGVybi50ZXN0KHRpdGxlKSkge1xuXHRcdC8vIGNhbm9uaXplIHRoZSBuYW1lc3BhY2Vcblx0XHRyZXR1cm4gdGl0bGUucmVwbGFjZShuc1ByZWZpeFBhdHRlcm4sIG5zQ2Fub25QcmVmaXgpO1xuXHR9XG5cdC8vIGRvbid0IGhhdmUgYSBuYW1lc3BhY2Vcblx0cmV0dXJuIG5zQ2Fub25QcmVmaXggKyB0aXRsZTtcbn07XG5cbi8qKlxuICogQWRkIG5ldyBjdXN0b20gY2FsbGJhY2sgZm9yIGZpbmRpbmcgbmV3IHBvdGVudGlhbCByZWRpcmVjdCB0aXRsZXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgKHBhZ2VuYW1lLCAkY29udGVudCwgdGl0bGVzKSA9PiB0aXRsZSBsaXN0XG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBhcmdzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmNvbnN0IGZpbmRSZWRpcmVjdENhbGxiYWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrLCAuLi5hcmdzKSB7XG5cdGlmIChjYWxsYmFjaykge1xuXHRcdGZpbmRSZWRpcmVjdENhbGxiYWNrc1tmaW5kUmVkaXJlY3RDYWxsYmFja3MubGVuZ3RoXSA9IGNhbGxiYWNrO1xuXHR9IGVsc2Uge1xuXHRcdGZpbmRSZWRpcmVjdENhbGxiYWNrcyA9IGdlbmVyYXRlQXJyYXkoZmluZFJlZGlyZWN0Q2FsbGJhY2tzLCBjYWxsYmFjaywgLi4uYXJncyk7XG5cdH1cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEZpbmQgbmV3IHBvdGVudGlhbCByZWRpcmVjdCB0aXRsZXMgdGhyb3VnaCBzZWxlY3RvcihzKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5jb25zdCBmaW5kUmVkaXJlY3RCeVNlbGVjdG9yID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cdC8qIEEgc2hvcnRjdXQgdG8gYWRkIENTUyBzZWxlY3RvcnMgYXMgcnVsZSB0byBmaW5kIG5ldyBwb3RlbnRpYWwgcmVkaXJlY3QgdGl0bGVzLiAqL1xuXHRmaW5kUmVkaXJlY3RDYWxsYmFja3NbZmluZFJlZGlyZWN0Q2FsbGJhY2tzLmxlbmd0aF0gPSAoKSA9PiB7XG5cdFx0cmV0dXJuICQoc2VsZWN0b3IpLm1hcCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gJChlbGVtZW50KS5lcSgwKS50ZXh0KCkudHJpbSgpIHx8IG51bGw7XG5cdFx0fSk7XG5cdH07XG5cdHJldHVybiB0aGlzO1xufTtcblxuY29uc3Qgc2V0UmVkaXJlY3RUZXh0U3VmZml4ID0gKHRpdGxlLCBzdWZmaXgsIGZsYWcpID0+IHtcblx0bGV0IGZsYWdfc2V0ID0gZmFsc2U7XG5cdGxldCBmbGFnX2FwcGVuZCA9IGZhbHNlO1xuXHRmbGFnIHx8PSBTVUZGSVhfQVBQRU5EOyAvLyBkZWZhdWx0IGFwcGVuZFxuXHRmbGFnX3NldCA9IGZsYWcgPT09IFNVRkZJWF9SRVBMQUNFO1xuXHR0aXRsZSA9IGZpeE5hbWVzcGFjZSh0aXRsZSk7XG5cdGlmICh0aXRsZSBpbiBwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeCkge1xuXHRcdGZsYWdfYXBwZW5kID0gZmxhZyA9PT0gU1VGRklYX0FQUEVORDtcblx0fSBlbHNlIHtcblx0XHQvLyBpZiBub3QgZXhpc3QsIGV2ZXJ5IGZsYWcgY2FuIHNldFxuXHRcdGZsYWdfc2V0ID0gdHJ1ZTtcblx0fVxuXHRpZiAoZmxhZ19zZXQpIHtcblx0XHRwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0gPSBnZW5lcmF0ZUFycmF5KHN1ZmZpeCk7XG5cdH0gZWxzZSBpZiAoZmxhZ19hcHBlbmQpIHtcblx0XHRwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0gPSBnZW5lcmF0ZUFycmF5KHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSwgc3VmZml4KTtcblx0fVxufTtcblxuY29uc3QgVG9vbHNSZWRpcmVjdCA9IHtcblx0dGFic2VsZW06IG51bGwsXG5cdHRhZ3NlbGVtOiBudWxsLFxuXHR2YXJpYW50czogVkFSSUFOVFMsXG5cdGluaXQoJGJvZHkpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdC5hZGRDbGFzcygnbXctbGlzdC1pdGVtIGNvbGxhcHNpYmxlIHZlY3Rvci10YWItbm9pY29uJylcblx0XHRcdC5hdHRyKCdpZCcsICdjYS1yZWRpcmVjdCcpXG5cdFx0XHQuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0XHQuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnYnRuZGVzYycpKS50ZXh0KGdldE1lc3NhZ2UoJ2J0bnRpdGxlJykpKTtcblx0XHRidXR0b24ub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c2VsZi5kaWFsb2coKTtcblx0XHR9KTtcblx0XHQkYm9keS5maW5kKCdsaSNjYS1oaXN0b3J5JykuYWZ0ZXIoYnV0dG9uKTtcblx0fSxcblx0ZGlhbG9nKCkge1xuXHRcdGNvbnN0IGRpYWxvZyA9ICQoJzxkaXY+Jylcblx0XHRcdC5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ2RsZ3RpdGxlJykpXG5cdFx0XHQuYWRkQ2xhc3MoJ2RpYWxvZy1yZWRpcmVjdCcpXG5cdFx0XHQuZGlhbG9nKHtcblx0XHRcdFx0YmdpZnJhbWU6IHRydWUsXG5cdFx0XHRcdHJlc2l6YWJsZTogZmFsc2UsXG5cdFx0XHRcdG1vZGFsOiB0cnVlLFxuXHRcdFx0XHR3aWR0aDogTWF0aC5yb3VuZCgkKHdpbmRvdykud2lkdGgoKSAqIDAuOCksXG5cdFx0XHRcdHBvc2l0aW9uOiAnY2VudGVyJyxcblx0XHRcdH0pO1xuXHRcdGRpYWxvZy5jc3MoJ21heC1oZWlnaHQnLCBgJHtNYXRoLnJvdW5kKCQod2luZG93KS5oZWlnaHQoKSAqIDAuOCl9cHhgKTtcblx0XHR0aGlzLnRhYnNlbGVtID0gJCgnPGRpdj4nKS5hZGRDbGFzcygndGFiLXJlZGlyZWN0JykuYXBwZW5kVG8oZGlhbG9nKTtcblx0XHR0aGlzLnRhZ3NlbGVtID0gJCgnPHVsPicpLmFwcGVuZFRvKHRoaXMudGFic2VsZW0pO1xuXHRcdHRoaXMuYWRkVGFicygpO1xuXHRcdHRoaXMudGFic2VsZW0udGFicygpO1xuXHR9LFxuXHRhZGRUYWJzKCkge1xuXHRcdGZvciAoY29uc3Qga25hbWUgaW4gdGhpcy50YWJzKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093bih0aGlzLnRhYnMsIGtuYW1lKSkge1xuXHRcdFx0XHRpZiAodGhpcy50YWJzW2tuYW1lXSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMudGFic1trbmFtZV0gPSB0aGlzW2BfaW5pdFRhYiR7a25hbWVbMF0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtrbmFtZS5zbGljZSgxKX1gXSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHRhYiA9IHRoaXMudGFic1trbmFtZV07XG5cdFx0XHRcdHRoaXMudGFnc2VsZW0uYXBwZW5kKHRhYi50YWcpO1xuXHRcdFx0XHR0aGlzLnRhYnNlbGVtLmFwcGVuZCh0YWIuY29udCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGRlZmF1bHQgdGFiLCBhdXRvbG9hZCB3aGVuIGRpYWxvZyBpbml0aWF0ZVxuXHRcdHRoaXMubG9hZFZpZXcoKTtcblx0fSxcblx0Y3JlYXRlVGFiKHRhYm5hbWUsIHRhYnRpdGxlLCBvbkNsaWNrKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgdGFnID0gJCgnPGxpPicpLmFwcGVuZCgkKCc8YT4nKS5hdHRyKCdocmVmJywgYCN0YWItJHt0YWJuYW1lfWApLnRleHQodGFidGl0bGUpKTtcblx0XHRjb25zdCBjb250ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsIGB0YWItJHt0YWJuYW1lfWApO1xuXHRcdCQoJ2EnLCB0YWcpLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdG9uQ2xpY2suY2FsbChzZWxmKTtcblx0XHR9KTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGFnLFxuXHRcdFx0Y29udCxcblx0XHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0fTtcblx0fSxcblx0X2luaXRUYWJWaWV3KCkge1xuXHRcdHJldHVybiB0aGlzLmNyZWF0ZVRhYigndmlldycsIGdldE1lc3NhZ2UoJ3RhYnZpZXd0aXRsZScpLCB0aGlzLmxvYWRWaWV3KTtcblx0fSxcblx0X2luaXRUYWJDcmVhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlVGFiKCdjcmVhdGUnLCBnZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpLCB0aGlzLmxvYWRDcmVhdGUpO1xuXHR9LFxuXHR0YWJzOiB7XG5cdFx0dmlldzogbnVsbCxcblx0XHRjcmVhdGU6IG51bGwsXG5cdH0sXG5cdGZpeChwYWdlbmFtZXMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHQkKCdwLmRlc2MnLCBzZWxmLnRhYnMudmlldy5jb250KS50ZXh0KGdldE1lc3NhZ2UoJ2ZpeGxvYWRpbmcnKSk7XG5cdFx0JCgncFtjbGFzcyE9ZGVzY10nLCBzZWxmLnRhYnMudmlldy5jb250KS5yZW1vdmUoKTtcblx0XHRzZWxmLmxvYWRpbmcoc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0dm9pZCBzZWxmXG5cdFx0XHQuYnVsa0VkaXRCeVJlZ2V4KHBhZ2VuYW1lcywgL1xccypcXFtcXFsuKj9cXF1cXF0vLCBgIFtbJHt3Z1BhZ2VOYW1lfV1dYCwgZ2V0TWVzc2FnZSgnZml4c3VtbWFyeScpKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHQvLyBkZWxheSBsb2FkIGJlZm9yZSB0aGUgYXN5bmNocm9ub3VzIHRhc2tzIG9uIHNlcnZlciBmaW5pc2hlZFxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmxvYWRlZChzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0XHRzZWxmLmxvYWRWaWV3KHRydWUpO1xuXHRcdFx0XHR9LCAzMDAwKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRjcmVhdGUocGFnZW5hbWVzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0JCgncC5kZXNjJywgc2VsZi50YWJzLmNyZWF0ZS5jb250KS50ZXh0KGdldE1lc3NhZ2UoJ2NyZWF0ZWxvYWRpbmcnKSk7XG5cdFx0JCgncFtjbGFzcyE9ZGVzY10nLCBzZWxmLnRhYnMuY3JlYXRlLmNvbnQpLnJlbW92ZSgpO1xuXHRcdHNlbGYubG9hZGluZyhzZWxmLnRhYnMuY3JlYXRlLmNvbnQpO1xuXHRcdHZvaWQgc2VsZlxuXHRcdFx0LmJ1bGtFZGl0KFxuXHRcdFx0XHRwYWdlbmFtZXMsXG5cdFx0XHRcdGdldE1lc3NhZ2UoJ2NyZWF0ZXRleHQnKS5yZXBsYWNlKCckMScsIHdnUGFnZU5hbWUpLFxuXHRcdFx0XHRnZXRNZXNzYWdlKCdjcmVhdGVzdW1tYXJ5JykucmVwbGFjZSgnJDEnLCB3Z1BhZ2VOYW1lKVxuXHRcdFx0KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHQvLyBkZWxheSBsb2FkIGJlZm9yZSB0aGUgYXN5bmNocm9ub3VzIHRhc2tzIG9uIHNlcnZlciBmaW5pc2hlZFxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmxvYWRlZChzZWxmLnRhYnMuY3JlYXRlLmNvbnQpO1xuXHRcdFx0XHRcdHNlbGYudGFicy52aWV3LmxvYWRlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdHNlbGYubG9hZENyZWF0ZSh0cnVlKTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRhZGRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsIHRleHQpIHtcblx0XHRpZiAodGl0bGUgaW4gcGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXgpIHtcblx0XHRcdC8vIHRleHQgKz0gYFxcbiR7Wy4uLm5ldyBTZXQocGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXhbdGl0bGVdKV0uam9pbignXFxuJyl9YDtcblx0XHRcdHRleHQgKz0gYFxcbiR7Wy4uLnVuaXF1ZUFycmF5KHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSldLmpvaW4oJ1xcbicpfWA7XG5cdFx0fVxuXHRcdHJldHVybiB0ZXh0O1xuXHR9LFxuXHRidWxrRWRpdCh0aXRsZXMsIHRleHQsIHN1bW1hcnkpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHR0aXRsZXMgPSB0aXRsZXMuZmlsdGVyKCh2LCBpLCBhcnIpID0+IHtcblx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2KSA9PT0gaTtcblx0XHR9KTtcblx0XHR0aXRsZXMgPSB0aXRsZXMuam9pbignfCcpO1xuXHRcdHJldHVybiBhcGlcblx0XHRcdC5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdHRpdGxlcyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGV9IG9mIHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWRzW2RlZmVycmVkcy5sZW5ndGhdID0gYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHR0ZXh0OiBzZWxmLmFkZFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgdGV4dCksXG5cdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0dGFnczogT1BUSU9OUy5hcGlUYWcsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGJ1bGtFZGl0QnlSZWdleCh0aXRsZXMsIHJlZ2V4LCB0ZXh0LCBzdW1tYXJ5KSB7XG5cdFx0dGl0bGVzID0gdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YodikgPT09IGk7XG5cdFx0fSk7XG5cdFx0dGl0bGVzID0gdGl0bGVzLmpvaW4oJ3wnKTtcblx0XHRyZXR1cm4gYXBpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRcdHRpdGxlcyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0Y29uc3Qge2NvbnRlbnR9ID0gcGFnZS5yZXZpc2lvbnNbMF0uc2xvdHNbJ21haW4nXTtcblx0XHRcdFx0XHRjb25zdCBuZXdDb250ZW50ID0gY29udGVudC5yZXBsYWNlKHJlZ2V4LCB0ZXh0KTtcblx0XHRcdFx0XHRkZWZlcnJlZHNbZGVmZXJyZWRzLmxlbmd0aF0gPSBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0XHR0aXRsZTogcGFnZS50aXRsZSxcblx0XHRcdFx0XHRcdHRleHQ6IG5ld0NvbnRlbnQsXG5cdFx0XHRcdFx0XHR0YWdzOiBPUFRJT05TLmFwaVRhZyxcblx0XHRcdFx0XHRcdGJhc2V0aW1lc3RhbXA6IHBhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcCxcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGxvYWRUYWJDb250KHRhYm5hbWUsIGNhbGxiYWNrLCByZWxvYWQpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCB0YWIgPSBzZWxmLnRhYnNbdGFibmFtZV07XG5cdFx0aWYgKHJlbG9hZCkge1xuXHRcdFx0dGFiLmxvYWRlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIXRhYi5sb2FkZWQpIHtcblx0XHRcdHRhYi5jb250Lmh0bWwoJycpO1xuXHRcdFx0Ly9cblx0XHRcdGNvbnN0ICRkZXNjID0gJCgnPHA+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdkZXNjJylcblx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZGVzYy10ZXh0JykudGV4dChnZXRNZXNzYWdlKCdyZWRpbG9hZGluZycpKSlcblx0XHRcdFx0LmFwcGVuZFRvKHRhYi5jb250KTtcblx0XHRcdGNvbnN0ICR0ZXh0ID0gJGRlc2MuZmluZCgnPiAuZGVzYy10ZXh0Jyk7XG5cdFx0XHRjYWxsYmFja1xuXHRcdFx0XHQuYXBwbHkoc2VsZilcblx0XHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBtZXNzYWdlcy5qc1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHQkdGV4dC50ZXh0KGdldE1lc3NhZ2UoYHRhYiR7dGFibmFtZX1kZXNjYCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuZmFpbCgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLmpzXG5cdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdCR0ZXh0LnRleHQoZ2V0TWVzc2FnZShgdGFiJHt0YWJuYW1lfW5vdGZvdW5kYCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmFkZE1ldGhvZHMoJGRlc2MsIFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNyZWZyZXNoJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3JlZnJlc2gnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYubG9hZFRhYkNvbnQodGFibmFtZSwgY2FsbGJhY2ssIHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR0YWIubG9hZGVkID0gdHJ1ZTtcblx0XHR9XG5cdH0sXG5cdGxvYWRpbmcoY29udGFpbmVyKSB7XG5cdFx0aWYgKGNvbnRhaW5lci5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKSA9PT0gJ3NwYW4nKSB7XG5cdFx0XHRjb250YWluZXIuYWRkQ2xhc3MoJ213LWFqYXgtbG9hZGVyJyk7XG5cdFx0fSBlbHNlIGlmICgkKCdzcGFuLm13LWFqYXgtbG9hZGVyJywgY29udGFpbmVyKS5sZW5ndGggPT09IDApIHtcblx0XHRcdCQoJzxzcGFuPicpLmFkZENsYXNzKCdtdy1hamF4LWxvYWRlcicpLmFwcGVuZFRvKGNvbnRhaW5lcik7XG5cdFx0fVxuXHR9LFxuXHRsb2FkZWQoY29udGFpbmVyKSB7XG5cdFx0aWYgKGNvbnRhaW5lci5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKSA9PT0gJ3NwYW4nKSB7XG5cdFx0XHRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ213LWFqYXgtbG9hZGVyJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoJ3NwYW4ubXctYWpheC1sb2FkZXInLCBjb250YWluZXIpLnJlbW92ZSgpO1xuXHRcdH1cblx0fSxcblx0c2VsZWN0QWxsKGNvbnQpIHtcblx0XHQkKCdpbnB1dFt0eXBlPWNoZWNrYm94XTpub3QoOmRpc2FibGVkKScsIGNvbnQpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcblx0fSxcblx0c2VsZWN0SW52ZXJzZShjb250KSB7XG5cdFx0JCgnaW5wdXRbdHlwZT1jaGVja2JveF06bm90KDpkaXNhYmxlZCknLCBjb250KS5lYWNoKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcblx0XHRcdCRlbGVtZW50LnByb3AoJ2NoZWNrZWQnLCAhJGVsZW1lbnQucHJvcCgnY2hlY2tlZCcpKTtcblx0XHR9KTtcblx0fSxcblx0c2VsZWN0QWN0aW9uKGNvbnQsIGNiKSB7XG5cdFx0Y29uc3QgcGFnZW5hbWVzID0gW107XG5cdFx0JCgnaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCcsIGNvbnQpLmVhY2goKF9pbmRleCwgcGFnZW5hbWUpID0+IHtcblx0XHRcdHBhZ2VuYW1lc1twYWdlbmFtZXMubGVuZ3RoXSA9ICQocGFnZW5hbWUpLmRhdGEoJ3BhZ2UtdGl0bGUnKTtcblx0XHR9KTtcblx0XHRpZiAocGFnZW5hbWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNiLmNhbGwodGhpcywgcGFnZW5hbWVzKTtcblx0XHR9XG5cdH0sXG5cdGNsaWNrQWN0aW9uKGNvbnQsIGNiKSB7XG5cdFx0Y29uc3QgcGFnZW5hbWUgPSAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCBjb250KS5kYXRhKCdwYWdlLXRpdGxlJyk7XG5cdFx0Y2IuY2FsbCh0aGlzLCBbcGFnZW5hbWVdKTtcblx0fSxcblx0YnVpbGRMaW5rKHt0aXRsZSwgaHJlZiwgY2xpY2ssIGNsYXNzbmFtZX0pIHtcblx0XHRjb25zdCBhID0gJCgnPGE+Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdGhyZWYsXG5cdFx0XHRcdHRhcmdldDogJ19ibGFuaycsXG5cdFx0XHRcdHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInLFxuXHRcdFx0fSlcblx0XHRcdC50ZXh0KHRpdGxlKTtcblx0XHRpZiAoY2xpY2spIHtcblx0XHRcdGEub24oJ2NsaWNrJywgY2xpY2spO1xuXHRcdH1cblx0XHRpZiAoY2xhc3NuYW1lKSB7XG5cdFx0XHRhLmFkZENsYXNzKGNsYXNzbmFtZSk7XG5cdFx0fVxuXHRcdHJldHVybiAkKCc8c3Bhbj4nKS5hZGRDbGFzcygndG9vbHMtcmVkaXJlY3RfbGluaycpLmFwcGVuZChhKTtcblx0fSxcblx0YWRkTWV0aG9kcygkcGFyZW50LCBtZXRob2RzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0bGV0ICRjb250YWluZXIgPSAkcGFyZW50LmZpbmQoJz4gLnRvb2xzLXJlZGlyZWN0X21ldGhvZHMnKTtcblx0XHRjb25zdCBtZXRob2RFeGlzdCA9ICh7aHJlZn0pID0+IHtcblx0XHRcdHJldHVybiAkY29udGFpbmVyLmZpbmQoYGFbaHJlZj0ke0pTT04uc3RyaW5naWZ5KGhyZWYpfV1gKS5sZW5ndGggPiAwO1xuXHRcdH07XG5cdFx0aWYgKCRjb250YWluZXIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHQkY29udGFpbmVyID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3Rvb2xzLXJlZGlyZWN0X21ldGhvZHMnKS5hcHBlbmRUbygkcGFyZW50KTtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBtZXRob2Qgb2YgbWV0aG9kcykge1xuXHRcdFx0aWYgKCFtZXRob2RFeGlzdChtZXRob2QpKSB7XG5cdFx0XHRcdHNlbGYuYnVpbGRMaW5rKG1ldGhvZCkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRidWlsZFNlbGVjdGlvbihtYWluLCBtZXRkLCBtdCwgZHNhYikge1xuXHRcdGNvbnN0IGNvbnQgPSAkKCc8c3Bhbj4nKTtcblx0XHRjb25zdCBzZWxlID0gJCgnPGlucHV0PicpLmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKS5hcHBlbmRUbyhjb250KTtcblx0XHR0aGlzLmJ1aWxkTGluayhtYWluKS5hcHBlbmRUbyhjb250KTtcblx0XHR0aGlzLmFkZE1ldGhvZHMoY29udCwgbWV0ZCk7XG5cdFx0c2VsZS5kYXRhKCdwYWdlLXRpdGxlJywgbXQpO1xuXHRcdGlmIChkc2FiKSB7XG5cdFx0XHRzZWxlLnByb3AoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0fVxuXHRcdHJldHVybiBjb250O1xuXHR9LFxuXHRsb2FkVmlldyhyZWxvYWQpIHtcblx0XHRjb25zdCAkY29udGFpbmVyID0gdGhpcy50YWJzLnZpZXcuY29udDtcblx0XHR0aGlzLmxvYWRUYWJDb250KFxuXHRcdFx0J3ZpZXcnLFxuXHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5sb2FkUmVkaXJlY3Qod2dQYWdlTmFtZSwgJGNvbnRhaW5lciwgMCk7XG5cdFx0XHR9LFxuXHRcdFx0cmVsb2FkXG5cdFx0KTtcblx0fSxcblx0bG9hZENyZWF0ZShyZWxvYWQpIHtcblx0XHR0aGlzLmxvYWRUYWJDb250KFxuXHRcdFx0J2NyZWF0ZScsXG5cdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpbmRSZWRpcmVjdCh3Z1BhZ2VOYW1lKTtcblx0XHRcdH0sXG5cdFx0XHRyZWxvYWRcblx0XHQpO1xuXHR9LFxuXHRsb2FkUmVkaXJlY3QocGFnZW5hbWUsIGNvbnRhaW5lciwgZGVlcCwgbG9hZGVkKSB7XG5cdFx0dGhpcy5sb2FkaW5nKGNvbnRhaW5lcik7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgdG9wID0gZGVlcCA/ICQoJzxkbD4nKS5hcHBlbmRUbyhjb250YWluZXIpIDogY29udGFpbmVyO1xuXHRcdGlmICghbG9hZGVkKSB7XG5cdFx0XHRsb2FkZWQgPSB7fTtcblx0XHRcdGxvYWRlZFtwYWdlbmFtZV0gPSB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBvbkNsaWNrRml4ID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRjb25zdCBlbnRyeSA9ICQodGhpcykucGFyZW50cygnZGQsIHAnKS5maXJzdCgpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHNlbGYuY2xpY2tBY3Rpb24oZW50cnksIHRoaXMuZml4KTtcblx0XHR9O1xuXHRcdHZvaWQgYXBpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ3JlZGlyZWN0cycsXG5cdFx0XHRcdHRpdGxlczogcGFnZW5hbWUsXG5cdFx0XHRcdHJkbGltaXQ6ICdtYXgnLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRcdHNlbGYubG9hZGVkKGNvbnRhaW5lcik7XG5cdFx0XHRcdGxldCBoYXNfcmVkaXJlY3QgPSBmYWxzZTtcblx0XHRcdFx0Y29uc3QgZGVzYyA9ICQoJ3AuZGVzYycsIHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRjb25zdCBtYXhpbXVtUmVkaXJlY3REZXB0aCA9IDEwO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRpZiAocGFnZS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHtyZWRpcmVjdHN9ID0gcGFnZTtcblx0XHRcdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiByZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgcmR0aXRsZSA9IHRpdGxlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCB1bHRpdGxlID0gcmR0aXRsZS5yZXBsYWNlKC8gL2csICdfJyk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGVudHJ5ID0gKGRlZXAgPyAkKCc8ZGQ+JykgOiAkKCc8cD4nKSkuYXBwZW5kVG8odG9wKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbWV0aG9kcyA9IFtcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmOiBtdy51dGlsLmdldFVybCh1bHRpdGxlLCB7YWN0aW9uOiAnZWRpdCd9KSxcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdyZWRpZWRpdCcpLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdF07XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGlzQ3ljbGVSZWRpcmVjdCA9IHJkdGl0bGUgaW4gbG9hZGVkO1xuXHRcdFx0XHRcdFx0XHRsb2FkZWRbcmR0aXRsZV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRpZiAoIWlzQ3ljbGVSZWRpcmVjdCAmJiBkZWVwKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWV0aG9kc1ttZXRob2RzLmxlbmd0aF0gPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmOiAnI2ZpeC1yZWRpcmVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFidmlld2ZpeCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xpY2s6IG9uQ2xpY2tGaXgsXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zdCAkY29udGFpbmVyID0gc2VsZlxuXHRcdFx0XHRcdFx0XHRcdC5idWlsZFNlbGVjdGlvbihcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZjogbXcudXRpbC5nZXRVcmwodWx0aXRsZSwge3JlZGlyZWN0OiAnbm8nfSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdG1ldGhvZHMsXG5cdFx0XHRcdFx0XHRcdFx0XHR1bHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0IWRlZXBcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZFRvKGVudHJ5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlzQ3ljbGVSZWRpcmVjdCkge1xuXHRcdFx0XHRcdFx0XHRcdCRjb250YWluZXIuYXBwZW5kKGA8c3BhbiBjbGFzcz1cImVycm9yXCI+JHtnZXRNZXNzYWdlKCdlcnJjeWNsZXJlZGlyZWN0Jyl9PC9zcGFuPmApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGRlZXAgPCBtYXhpbXVtUmVkaXJlY3REZXB0aCkge1xuXHRcdFx0XHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5sb2FkUmVkaXJlY3QocmR0aXRsZSwgZW50cnksIGRlZXAgKyAxLCBsb2FkZWQpO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGhhc19yZWRpcmVjdCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGhhc19yZWRpcmVjdCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaGFzX3JlZGlyZWN0ICYmIGRlZXAgPT09IDEpIHtcblx0XHRcdFx0XHRzZWxmLmFkZE1ldGhvZHMoZGVzYywgW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3NlbGVjdC1hbGwnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0YWxsJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFsbChzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWludmVyc2UnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0aW52ZXJzZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RJbnZlcnNlKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNmaXgtc2VsZWN0ZWQnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFidmlld2ZpeCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBY3Rpb24oc2VsZi50YWJzLnZpZXcuY29udCwgc2VsZi5maXgpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaGFzX3JlZGlyZWN0KSB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlV2l0aChzZWxmKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdFdpdGgoc2VsZik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG5cdH0sXG5cdGZpbmRWYXJpYW50cyhwYWdlbmFtZSwgdGl0bGVzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3Qgc3VmZml4UmVnID0gL14uKz8oKO+8iHxbIF9dXFwoKS4rPyhbKe+8iV0pKSQvO1xuXHRcdGxldCByZXRUaXRsZXMgPSBbXTtcblx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgVkFSSUFOVFMpIHtcblx0XHRcdGNvbnN0IHhociA9IGFwaVxuXHRcdFx0XHQucG9zdCh7XG5cdFx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRwYWdlOiBwYWdlbmFtZSxcblx0XHRcdFx0XHRwcm9wOiAnZGlzcGxheXRpdGxlJyxcblx0XHRcdFx0XHR1c2VsYW5nOiB2YXJpYW50LFxuXHRcdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCh7cGFyc2V9KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qge2Rpc3BsYXl0aXRsZX0gPSBwYXJzZTtcblx0XHRcdFx0XHQvLyBFeGFtcGxlOlxuXHRcdFx0XHRcdC8vIC0gQmVmb3JlOiA8c3BhbiBjbGFzcz1cIm13LXBhZ2UtdGl0bGUtbmFtZXNwYWNlXCI+5rGC6Ze755m+56eRPC9zcGFuPjxzcGFuIGNsYXNzPVwibXctcGFnZS10aXRsZS1zZXBhcmF0b3JcIj46PC9zcGFuPjxzcGFuIGNsYXNzPVwibXctcGFnZS10aXRsZS1tYWluXCI+5rKZ55uSPC9zcGFuPlxuXHRcdFx0XHRcdC8vIC0gQWZ0ZXI6IOaxgumXu+eZvuenkTrmspnnm5Jcblx0XHRcdFx0XHRsZXQgdGl0bGUgPSAkKCc8c3Bhbj4nKS5hcHBlbmQoZGlzcGxheXRpdGxlKS5lcSgwKS50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRcdHRpdGxlID0gZml4TmFtZXNwYWNlKHRpdGxlKTtcblx0XHRcdFx0XHRzZXRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsICd7e+eugOe5gemHjeWumuWQkX19JywgU1VGRklYX0FQUEVORCk7XG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlO1xuXHRcdFx0XHR9KTtcblx0XHRcdGRlZmVycmVkc1tkZWZlcnJlZHMubGVuZ3RoXSA9IHhocjtcblx0XHR9XG5cdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpLnRoZW4oKC4uLmFyZ3MpID0+IHtcblx0XHRcdGNvbnN0IHN1ZmZpeGVzID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IHRpdGxlIG9mIGFyZ3MpIHtcblx0XHRcdFx0bGV0IHN1ZmZpeDtcblx0XHRcdFx0Ly8gZmluZCB0aXRsZSBzdWZmaXgsXG5cdFx0XHRcdC8vIGZvciBleGFtcGxlIFwiICjmtY7ljZfluIIpXCIgdG8gXCLluILkuK3ljLogKOa1juWNl+W4gilcIlxuXHRcdFx0XHRjb25zdCBzdWZmaXhBcnIgPSBzdWZmaXhSZWcuZXhlYyh0aXRsZSk7XG5cdFx0XHRcdGlmIChzdWZmaXhBcnIgJiYgc3VmZml4QXJyLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0XHRcdFssIHN1ZmZpeF0gPSBzdWZmaXhBcnI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3VmZml4ID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0VGl0bGVzW3JldFRpdGxlcy5sZW5ndGhdID0gdGl0bGU7XG5cdFx0XHRcdHN1ZmZpeGVzW3N1ZmZpeGVzLmxlbmd0aF0gPSBzdWZmaXg7XG5cdFx0XHR9XG5cdFx0XHQvLyBhcHBlbmQgc3VmZml4ZXNcblx0XHRcdGZvciAoY29uc3Qgc3VmZml4IG9mIHVuaXF1ZUFycmF5KHN1ZmZpeGVzKSkge1xuXHRcdFx0XHRyZXRUaXRsZXMgPSBbXG5cdFx0XHRcdFx0Li4ucmV0VGl0bGVzLFxuXHRcdFx0XHRcdC4uLnRpdGxlcy5tYXAoKHRpdGxlKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBtb2RpZmllZFRpdGxlID0gZml4TmFtZXNwYWNlKHRpdGxlKTtcblx0XHRcdFx0XHRcdHJldHVybiBzdWZmaXhSZWcudGVzdChtb2RpZmllZFRpdGxlKSA/IG1vZGlmaWVkVGl0bGUgOiBtb2RpZmllZFRpdGxlICsgc3VmZml4O1xuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdO1xuXHRcdFx0fVxuXHRcdFx0Ly8gcmV0dXJuIHNlbGYuZmluZE5vdEV4aXN0cyhbLi4ubmV3IFNldChyZXRUaXRsZXMpXSk7XG5cdFx0XHRyZXR1cm4gc2VsZi5maW5kTm90RXhpc3RzKFsuLi51bmlxdWVBcnJheShyZXRUaXRsZXMpXSk7XG5cdFx0fSk7XG5cdH0sXG5cdGZpbmROb3RFeGlzdHModGl0bGVzKSB7XG5cdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0Ly8gY29uc3QgZXhjbHVkZXMgPSBuZXcgU2V0KFsn55So5a2X5qih5byPJ10pO1xuXHRcdGNvbnN0IGV4Y2x1ZGVzID0gdW5pcXVlQXJyYXkoWyfnlKjlrZfmqKHlvI8nXSk7XG5cdFx0bGV0IGFsbHRpdGxlcyA9IFtdO1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5qb2luKCd8Jyk7XG5cdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0XHRkZWZlcnJlZHNbZGVmZXJyZWRzLmxlbmd0aF0gPSBhcGkucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGV4dDogdGl0bGVzLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdHRpdGxlOiAnTWVkaWFXaWtpOkdhZGdldC1Ub29sc1JlZGlyZWN0LmpzLy0nLFxuXHRcdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdHVzZWxhbmc6IHZhcmlhbnQsXG5cdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpLnRoZW4oKC4uLmFyZ3MpID0+IHtcblx0XHRcdGZvciAoY29uc3QgW3twYXJzZX1dIG9mIGFyZ3MpIHtcblx0XHRcdFx0YWxsdGl0bGVzID0gWy4uLmFsbHRpdGxlcywgLi4uJChwYXJzZS50ZXh0KS50ZXh0KCkudHJpbSgpLnNwbGl0KCd8JyldO1xuXHRcdFx0fVxuXHRcdFx0YWxsdGl0bGVzID0gYWxsdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2KSA9PT0gaTtcblx0XHRcdH0pO1xuXHRcdFx0YWxsdGl0bGVzID0gYWxsdGl0bGVzLmpvaW4oJ3wnKTtcblx0XHRcdHJldHVybiBhcGlcblx0XHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHRcdHRpdGxlczogYWxsdGl0bGVzLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRcdHRpdGxlcyA9IFtdO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdFx0Y29uc3Qge3RpdGxlfSA9IHBhZ2U7XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5taXNzaW5nICYmICFleGNsdWRlcy5oYXModGl0bGUpKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aXRsZSBpbiByZWRpcmVjdEV4Y2x1ZGVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gZXhjbHVkZSBzcGVjaWFsIHRpdGxlc1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSB0aXRsZTtcblx0XHRcdFx0XHRcdFx0aWYgKElTX0NBVEVHT1JZKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gd2dQYWdlTmFtZS5yZXBsYWNlKC9eQ2F0ZWdvcnk6LywgJycpO1xuXHRcdFx0XHRcdFx0XHRcdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgJ3t75YiG57G76YeN5a6a5ZCRfCQxfX0nLnJlcGxhY2UoJyQxJywgdGFyZ2V0KSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ly8gb25seSBzZXQgZGVmYXVsdCBzdWZmaXhcblx0XHRcdFx0XHRcdFx0c2V0UmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCAne3vliKvlkI3ph43lrprlkJF9fScsIFNVRkZJWF9TRVRERUZBVUxUKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cdGZpbmRSZWRpcmVjdChwYWdlbmFtZSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGZyY0RlZmVycmVkcyA9IFtdO1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IHNlbGYudGFicy5jcmVhdGUuY29udDtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRjb25zdCAkY29udGVudCA9ICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQgPiBkaXYubXctcGFyc2VyLW91dHB1dCcpO1xuXHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGxldCB0aXRsZXMgPSBbXTtcblx0XHRzZWxmLmxvYWRpbmcoY29udGFpbmVyKTtcblx0XHRmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGZpbmRSZWRpcmVjdENhbGxiYWNrcykge1xuXHRcdFx0Y29uc3QgcmV0ID0gY2FsbGJhY2socGFnZW5hbWUsICRjb250ZW50LCB0aXRsZXMpO1xuXHRcdFx0aWYgKHR5cGVvZiByZXQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IHJldDtcblx0XHRcdH0gZWxzZSBpZiAoJ2RvbmUnIGluIHJldCkge1xuXHRcdFx0XHQvLyBpcyBEZWZlcnJlZFxuXHRcdFx0XHRmcmNEZWZlcnJlZHNbZnJjRGVmZXJyZWRzLmxlbmd0aF0gPSByZXQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyB0aXRsZXMgPSBbLi4ubmV3IFNldChbLi4udGl0bGVzLCAuLi5yZXRdKV07XG5cdFx0XHRcdHRpdGxlcyA9IFsuLi51bmlxdWVBcnJheShbLi4udGl0bGVzLCAuLi5yZXRdKV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHJlbW92ZSBhbGwgZW1wdHkgdGl0bGVzXG5cdFx0dGl0bGVzID0gdGl0bGVzLm1hcCgodGl0bGUpID0+IHtcblx0XHRcdHJldHVybiB0aXRsZSB8fCBudWxsO1xuXHRcdH0pO1xuXHRcdGNvbnN0IG9uQ2xpY2tDcmVhdGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdGNvbnN0IGVudHJ5ID0gJCh0aGlzKS5wYXJlbnRzKCdwOmZpcnN0Jyk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c2VsZi5jbGlja0FjdGlvbihlbnRyeSwgc2VsZi5jcmVhdGUpO1xuXHRcdH07XG5cdFx0Ly8gaGFuZGxlcyB0aGUgZGVmZXJyZWQgY2FsbGJhY2tzXG5cdFx0dm9pZCAkLndoZW4oLi4uZnJjRGVmZXJyZWRzKVxuXHRcdFx0LnRoZW4oKC4uLmFyZ3MpID0+IHtcblx0XHRcdFx0Zm9yIChjb25zdCByZXQgb2YgYXJncykge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgcmV0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gcmV0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyB0aXRsZXMgPSBbLi4ubmV3IFNldChbLi4udGl0bGVzLCAuLi5yZXRdKV07XG5cdFx0XHRcdFx0XHR0aXRsZXMgPSBbLi4udW5pcXVlQXJyYXkoWy4uLnRpdGxlcywgLi4ucmV0XSldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gc2VsZi5maW5kVmFyaWFudHMocGFnZW5hbWUsIHRpdGxlcyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKGZ2dGl0bGVzKSA9PiB7XG5cdFx0XHRcdC8vIGJ1aWxkIEhUTUxcblx0XHRcdFx0c2VsZi5sb2FkZWQoY29udGFpbmVyKTtcblx0XHRcdFx0Zm9yIChjb25zdCB0aXRsZSBvZiBmdnRpdGxlcykge1xuXHRcdFx0XHRcdGNvbnN0IHVsdGl0bGUgPSB0aXRsZS5yZXBsYWNlKCcgJywgJ18nKTtcblx0XHRcdFx0XHRjb25zdCBlbnRyeSA9ICQoJzxwPicpLmFwcGVuZFRvKGNvbnRhaW5lcik7XG5cdFx0XHRcdFx0c2VsZi5idWlsZFNlbGVjdGlvbihcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogbXcudXRpbC5nZXRVcmwodWx0aXRsZSwge2FjdGlvbjogJ2VkaXQnLCByZWRsaW5rOiAnMSd9KSxcblx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdGNsYXNzbmFtZTogJ25ldycsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0aHJlZjogJyNjcmVhdGUtcmVkaXJlY3QnLFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpLFxuXHRcdFx0XHRcdFx0XHRcdGNsaWNrOiBvbkNsaWNrQ3JlYXRlLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdHVsdGl0bGUsXG5cdFx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHRcdCkuYXBwZW5kVG8oZW50cnkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGRlc2MgPSAkKCdwLmRlc2MnLCBjb250YWluZXIpO1xuXHRcdFx0XHRpZiAoZnZ0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNlbGYuYWRkTWV0aG9kcyhkZXNjLCBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWFsbCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdzZWxlY3RhbGwnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0QWxsKGNvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3NlbGVjdC1pbnZlcnNlJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3NlbGVjdGludmVyc2UnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0SW52ZXJzZShjb250YWluZXIpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNjcmVhdGUtc2VsZWN0ZWQnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFiY3JlYXRldGl0bGUnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0QWN0aW9uKGNvbnRhaW5lciwgc2VsZi5jcmVhdGUpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmVXaXRoKHNlbGYsIFtmdnRpdGxlc10pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0V2l0aChzZWxmLCBbZnZ0aXRsZXNdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcblx0fSxcbn07XG5cbi8qIGV4cG9ydCBnbG9iYWwgb2JqZWN0ICovXG53aW5kb3cudG9vbHNSZWRpcmVjdCA9IHtcblx0ZmluZFJlZGlyZWN0Q2FsbGJhY2ssXG5cdGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IsXG5cdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCxcbn07XG5cbmV4cG9ydCB7VG9vbHNSZWRpcmVjdCwgZmluZFJlZGlyZWN0Q2FsbGJhY2ssIGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IsIHNldFJlZGlyZWN0VGV4dFN1ZmZpeH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBUb29sc1JlZGlyZWN0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHR5cGUge01lc3NhZ2VLZXl9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgZ2V0TWVzc2FnZSA9IChrZXk6IE1lc3NhZ2VLZXkgZXh0ZW5kcyBgdG9vbHNyZWRpcmVjdC0ke2luZmVyIFB9YCA/IFAgOiBuZXZlciwgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBmdWxsS2V5OiBzdHJpbmcgPSBgdG9vbHNyZWRpcmVjdC0ke2tleX1gO1xuXHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0cmV0dXJuIGFyZ3MubGVuZ3RoID8gbXcubWVzc2FnZShmdWxsS2V5LCAuLi5hcmdzKS5wYXJzZSgpIDogbXcubWVzc2FnZShmdWxsS2V5KS5wbGFpbigpO1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgdHlwZSB7TWVzc2FnZUtleX0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IERFRkFVTFRfTUVTU0FHRVMgPSB7XG5cdCd0b29sc3JlZGlyZWN0LWJ0bnRpdGxlJzogJ+mHjeWumuWQkScsXG5cdCd0b29sc3JlZGlyZWN0LWJ0bmRlc2MnOiAn5Yib5bu65ZKM566h55CG5q2k6aG16Z2i55qE6YeN5a6a5ZCRJyxcblx0J3Rvb2xzcmVkaXJlY3QtZGxndGl0bGUnOiAn5Yib5bu65ZKM566h55CG6YeN5a6a5ZCRJyxcblx0J3Rvb2xzcmVkaXJlY3QtcmVkaWxvYWRpbmcnOiAn5pWw5o2u5Yqg6L295Lit77yM6K+356iN5YCZ4oCm4oCmJyxcblx0J3Rvb2xzcmVkaXJlY3QtcmVkaWVkaXQnOiAn57yW6L6RJyxcblx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0YWxsJzogJ+WFqOmAiScsXG5cdCd0b29sc3JlZGlyZWN0LXNlbGVjdGludmVyc2UnOiAn5Y+N6YCJJyxcblx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld3RpdGxlJzogJ+afpeeciycsXG5cdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdkZXNjJzogJ+S7peS4i+aYr+aMh+WQkeatpOmhtemdoueahOmHjeWumuWQkemhte+8micsXG5cdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdub3Rmb3VuZCc6ICfmsqHmnInmib7liLDku7vkvZXmjIflkJHmraTpobXpnaLnmoTph43lrprlkJHpobXjgIInLFxuXHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bXVsdGknOiAn5aSa6YeNJyxcblx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2ZpeCc6ICfkv67lpI0nLFxuXHQndG9vbHNyZWRpcmVjdC1maXhsb2FkaW5nJzogJ+ivt+eojeWAme+8jOato+WcqOiHquWKqOS/ruWkjemHjeWumuWQkeKApuKApicsXG5cdCd0b29sc3JlZGlyZWN0LWZpeHRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdCd0b29sc3JlZGlyZWN0LWZpeHN1bW1hcnknOiAn57yW6L6R5bel5YW377ya5L+u5aSN5aSa6YeN6YeN5a6a5ZCRJyxcblx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRldGl0bGUnOiAn5Yib5bu6Jyxcblx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlZGVzYyc6ICfku6XkuIvmmK/lsJrmnKrliJvlu7rnmoTph43lrprlkJHpobXvvJonLFxuXHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVub3Rmb3VuZCc6ICfmsqHmnInmib7liLDlj6/ku6XliJvlu7rnmoTph43lrprlkJHpobXjgIInLFxuXHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVhbGwnOiAn5YWo6YOo5Yib5bu6Jyxcblx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlbG9hZGluZyc6ICfor7fnqI3lgJnvvIzmraPlnKjoh6rliqjliJvlu7rph43lrprlkJHigKbigKYnLFxuXHQndG9vbHNyZWRpcmVjdC1jcmVhdGV0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHQndG9vbHNyZWRpcmVjdC1jcmVhdGVzdW1tYXJ5JzogJ+e8lui+keW3peWFt++8muiHquWKqOWIm+W7uumHjeWumuWQkeWIsFtbJDFdXScsXG5cdCd0b29sc3JlZGlyZWN0LWVycmN5Y2xlcmVkaXJlY3QnOiAn5peg5rOV6Ieq5Yqo5L+u5aSN77ya5Y+R546w5b6q546v6YeN5a6a5ZCRJyxcblx0J3Rvb2xzcmVkaXJlY3QtcmVmcmVzaCc6ICfliLfmlrAnLFxufSBzYXRpc2ZpZXMgUmVjb3JkPE1lc3NhZ2VLZXksIHN0cmluZz47XG5cbmNvbnN0IHNldE1lc3NhZ2VzID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0PHR5cGVvZiBERUZBVUxUX01FU1NBR0VTPih7XG5cdFx0XHQndG9vbHNyZWRpcmVjdC1idG50aXRsZSc6ICfph43mlrDlsI7lkJEnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtYnRuZGVzYyc6ICflibXlu7rlkoznrqHnkIbmraTpoIHpnaLnmoTph43mlrDlsI7lkJEnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtZGxndGl0bGUnOiAn5Ym15bu65ZKM566h55CG6YeN5paw5bCO5ZCRJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXJlZGlsb2FkaW5nJzogJ+aVuOaTmuWKoOi8ieS4re+8jOiri+eojeWAmeKApuKApicsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1yZWRpZWRpdCc6ICfnt6jovK8nLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0YWxsJzogJ+WFqOmBuCcsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1zZWxlY3RpbnZlcnNlJzogJ+WPjemBuCcsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3dGl0bGUnOiAn5p+l55yLJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdkZXNjJzogJ+S7peS4i+aYr+aMh+WQkeatpOmggemdoueahOmHjeaWsOWwjuWQkemgge+8micsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bm90Zm91bmQnOiAn5rKS5pyJ5om+5Yiw5Lu75L2V5oyH5ZCR5q2k6aCB6Z2i55qE6YeN5paw5bCO5ZCR6aCB44CCJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdtdWx0aSc6ICflpJrph40nLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2ZpeCc6ICfkv67lvqknLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtZml4bG9hZGluZyc6ICfoq4vnqI3lgJnvvIzmraPlnKjoh6rli5Xkv67lvqnph43mlrDlsI7lkJHigKbigKYnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtZml4dGV4dCc6ICcjUkVESVJFQ1QgW1skMV1dJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWZpeHN1bW1hcnknOiAn57eo6Lyv5bel5YW377ya5L+u5b6p5aSa6YeN6YeN5paw5bCO5ZCRJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZXRpdGxlJzogJ+WJteW7uicsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVkZXNjJzogJ+S7peS4i+aYr+WwmuacquWJteW7uueahOmHjeaWsOWwjuWQkemgge+8micsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVub3Rmb3VuZCc6ICfmspLmnInmib7liLDlj6/ku6XlibXlu7rnmoTph43mlrDlsI7lkJHpoIHjgIInLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlYWxsJzogJ+WFqOmDqOWJteW7uicsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGVsb2FkaW5nJzogJ+iri+eojeWAme+8jOato+WcqOiHquWLleWJteW7uumHjeaWsOWwjuWQkeKApuKApicsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGV0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlc3VtbWFyeSc6ICfnt6jovK/lt6XlhbfvvJroh6rli5XlibXlu7rph43mlrDlsI7lkJHliLBbWyQxXV0nLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtZXJyY3ljbGVyZWRpcmVjdCc6ICfnhKHms5Xoh6rli5Xkv67lvqnvvJrnmbznj77lvqrnkrDph43mlrDlsI7lkJEnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtcmVmcmVzaCc6ICfliLfmlrAnLFxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG13Lm1lc3NhZ2VzLnNldChERUZBVUxUX01FU1NBR0VTKTtcblx0fVxufTtcblxuZXhwb3J0IHtzZXRNZXNzYWdlc307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdCQUFBLENBQUE7QUFBQUMsU0FBQUQsdUJBQUE7RUFBQUUsd0JBQUFBLE1BQUFBO0VBQUFDLHNCQUFBQSxNQUFBQTtFQUFBQyx1QkFBQUEsTUFBQUE7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUFQLHFCQUFBOztBQ0NDLElBQUFRLFNBQVU7QUFDVixJQUFBQyxVQUFXOztBQ0ZaLElBQU1DLGdCQUFnQjtBQUN0QixJQUFNQyxpQkFBaUI7QUFDdkIsSUFBTUMsb0JBQW9CO0FBRTFCLElBQU1DLFdBQVcsQ0FBQyxXQUFXLFdBQVcsU0FBUyxTQUFTLFNBQVMsU0FBUyxTQUFTLE9BQU87O0FDQTVGLElBQUFDLHFCQUF5Q0MsUUFBQSxpQkFBQTs7QUNIekMsSUFBQUMsb0JBQXdCRCxRQUFBLGlCQUFBO0FBRXhCLElBQU1FLE9BQUEsR0FBY0Qsa0JBQUFFLFdBQUEsaUJBQUFDLE9BQW1DVixPQUFPLENBQUU7O0FDRGhFLElBQU1XLGFBQWFBLENBQUNDLFFBQW1FQyxTQUEyQjtBQUNqSCxRQUFNQyxVQUFBLGlCQUFBSixPQUFtQ0UsR0FBRztBQUk1QyxTQUFPQyxLQUFLRSxTQUFTQyxHQUFHQyxRQUFRSCxTQUFTLEdBQUdELElBQUksRUFBRUssTUFBTSxJQUFJRixHQUFHQyxRQUFRSCxPQUFPLEVBQUVLLE1BQU07QUFDdkY7O0FGQUEsSUFBTTtFQUFDQztFQUFnQkM7RUFBbUJDO0FBQVUsSUFBSU4sR0FBR08sT0FBT0MsSUFBSTtBQUN0RSxJQUFNQyxjQUFjSixzQkFBc0I7QUFFMUMsSUFBSUssd0JBQXdCLENBQUE7QUFDNUIsSUFBTUMsNkJBQTZCLENBQUM7QUFDcEMsSUFBTUMsbUJBQW1CLENBQUM7QUFDMUIsSUFBTUMsYUFBYSxDQUFBO0FBQ25CLElBQUlDO0FBQUosSUFBbUJDO0FBRW5CLEtBQUFDLEtBQUEsR0FBQUMsa0JBQTJCQyxPQUFPQyxRQUFRZixjQUFjLEdBQUFZLEtBQUFDLGdCQUFBbEIsUUFBQWlCLE1BQUc7QUFBM0QsUUFBVyxDQUFDSSxNQUFNQyxJQUFJLElBQUFKLGdCQUFBRCxFQUFBO0FBQ3JCLE1BQUlLLFNBQVNoQixxQkFBcUIsQ0FBQyxDQUFDZSxNQUFNO0FBQ3pDUCxlQUFXQSxXQUFXZCxNQUFNLElBQUlxQjtFQUNqQztBQUNEO0FBSkFKO0FBQUFDO0FBTUEsSUFBSVosc0JBQXNCLEdBQUc7QUFFNUJTLGtCQUFnQjtBQUNoQkMsb0JBQWtCO0FBQ25CLE9BQU87QUFDTkQsa0JBQUEsR0FBQXBCLE9BQW1CWSxXQUFXZ0IsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFDLEdBQUE7QUFDM0NQLG9CQUFrQixJQUFJUSxPQUFBLEtBQUE3QixPQUFZbUIsV0FBV1csS0FBSyxHQUFHLEdBQUMsSUFBQSxHQUFNLEdBQUc7QUFDaEU7QUFFQSxJQUFNQyxlQUFnQkMsV0FBVTtBQUMvQixNQUFJckIsc0JBQXNCLEdBQUc7QUFFNUIsV0FBT3FCO0VBQ1IsV0FBV1gsZ0JBQWdCWSxLQUFLRCxLQUFLLEdBQUc7QUFFdkMsV0FBT0EsTUFBTUUsUUFBUWIsaUJBQWlCRCxhQUFhO0VBQ3BEO0FBRUEsU0FBT0EsZ0JBQWdCWTtBQUN4QjtBQVNBLElBQU1oRCx1QkFBdUIsU0FBVW1ELGFBQWFoQyxNQUFNO0FBQ3pELE1BQUlnQyxVQUFVO0FBQ2JuQiwwQkFBc0JBLHNCQUFzQlgsTUFBTSxJQUFJOEI7RUFDdkQsT0FBTztBQUNObkIsNkJBQUEsR0FBd0JyQixtQkFBQXlDLGVBQWNwQix1QkFBdUJtQixVQUFVLEdBQUdoQyxJQUFJO0VBQy9FO0FBQ0EsU0FBTztBQUNSO0FBUUEsSUFBTXBCLHlCQUF5QixTQUFVc0QsVUFBVTtBQUVsRHJCLHdCQUFzQkEsc0JBQXNCWCxNQUFNLElBQUksTUFBTTtBQUMzRCxXQUFPaUMsRUFBRUQsUUFBUSxFQUFFRSxJQUFJLENBQUNDLFFBQVFDLFlBQVk7QUFDM0MsYUFBT0gsRUFBRUcsT0FBTyxFQUFFQyxHQUFHLENBQUMsRUFBRWhCLEtBQUssRUFBRWlCLEtBQUssS0FBSztJQUMxQyxDQUFDO0VBQ0Y7QUFDQSxTQUFPO0FBQ1I7QUFFQSxJQUFNMUQsd0JBQXdCQSxDQUFDK0MsT0FBT1ksUUFBUUMsU0FBUztBQUN0RCxNQUFJQyxXQUFXO0FBQ2YsTUFBSUMsY0FBYztBQUNsQkYsV0FBQUEsT0FBU3REO0FBQ1R1RCxhQUFXRCxTQUFTckQ7QUFDcEJ3QyxVQUFRRCxhQUFhQyxLQUFLO0FBQzFCLE1BQUlBLFNBQVNmLDRCQUE0QjtBQUN4QzhCLGtCQUFjRixTQUFTdEQ7RUFDeEIsT0FBTztBQUVOdUQsZUFBVztFQUNaO0FBQ0EsTUFBSUEsVUFBVTtBQUNiN0IsK0JBQTJCZSxLQUFLLEtBQUEsR0FBSXJDLG1CQUFBeUMsZUFBY1EsTUFBTTtFQUN6RCxXQUFXRyxhQUFhO0FBQ3ZCOUIsK0JBQTJCZSxLQUFLLEtBQUEsR0FBSXJDLG1CQUFBeUMsZUFBY25CLDJCQUEyQmUsS0FBSyxHQUFHWSxNQUFNO0VBQzVGO0FBQ0Q7QUFFQSxJQUFNSSxnQkFBZ0I7RUFDckJDLFVBQVU7RUFDVkMsVUFBVTtFQUNWQyxVQUFVekQ7RUFDVjBELEtBQUtDLE9BQU87QUFDWCxVQUFNQyxPQUFPO0FBQ2IsVUFBTUMsU0FBU2pCLEVBQUUsTUFBTSxFQUNyQmtCLFNBQVMsNENBQTRDLEVBQ3JEQyxLQUFLLE1BQU0sYUFBYSxFQUN4QkMsSUFBSSxVQUFVLFNBQVMsRUFDdkJDLE9BQU9yQixFQUFFLEtBQUssRUFBRW1CLEtBQUssU0FBU3hELFdBQVcsU0FBUyxDQUFDLEVBQUV5QixLQUFLekIsV0FBVyxVQUFVLENBQUMsQ0FBQztBQUNuRnNELFdBQU9LLEdBQUcsU0FBVUMsV0FBVTtBQUM3QkEsWUFBTUMsZUFBZTtBQUNyQlIsV0FBS1MsT0FBTztJQUNiLENBQUM7QUFDRFYsVUFBTVcsS0FBSyxlQUFlLEVBQUVDLE1BQU1WLE1BQU07RUFDekM7RUFDQVEsU0FBUztBQUNSLFVBQU1BLFNBQVN6QixFQUFFLE9BQU8sRUFDdEJtQixLQUFLLFNBQVN4RCxXQUFXLFVBQVUsQ0FBQyxFQUNwQ3VELFNBQVMsaUJBQWlCLEVBQzFCTyxPQUFPO01BQ1BHLFVBQVU7TUFDVkMsV0FBVztNQUNYQyxPQUFPO01BQ1BDLE9BQU9DLEtBQUtDLE1BQU1qQyxFQUFFa0MsTUFBTSxFQUFFSCxNQUFNLElBQUksR0FBRztNQUN6Q0ksVUFBVTtJQUNYLENBQUM7QUFDRlYsV0FBT0wsSUFBSSxjQUFBLEdBQUExRCxPQUFpQnNFLEtBQUtDLE1BQU1qQyxFQUFFa0MsTUFBTSxFQUFFRSxPQUFPLElBQUksR0FBRyxHQUFDLElBQUEsQ0FBSTtBQUNwRSxTQUFLekIsV0FBV1gsRUFBRSxPQUFPLEVBQUVrQixTQUFTLGNBQWMsRUFBRW1CLFNBQVNaLE1BQU07QUFDbkUsU0FBS2IsV0FBV1osRUFBRSxNQUFNLEVBQUVxQyxTQUFTLEtBQUsxQixRQUFRO0FBQ2hELFNBQUsyQixRQUFRO0FBQ2IsU0FBSzNCLFNBQVM0QixLQUFLO0VBQ3BCO0VBQ0FELFVBQVU7QUFDVCxlQUFXRSxTQUFTLEtBQUtELE1BQU07QUFDOUIsVUFBSXJELE9BQU91RCxPQUFPLEtBQUtGLE1BQU1DLEtBQUssR0FBRztBQUNwQyxZQUFJLEtBQUtELEtBQUtDLEtBQUssTUFBTSxNQUFNO0FBQzlCLGVBQUtELEtBQUtDLEtBQUssSUFBSSxLQUFBLFdBQUE5RSxPQUFnQjhFLE1BQU0sQ0FBQyxFQUFFRSxPQUFPLENBQUMsRUFBRUMsWUFBWSxDQUFDLEVBQUFqRixPQUFHOEUsTUFBTUksTUFBTSxDQUFDLENBQUMsQ0FBQSxFQUFJO1FBQ3pGO0FBQ0EsY0FBTUMsTUFBTSxLQUFLTixLQUFLQyxLQUFLO0FBQzNCLGFBQUs1QixTQUFTUyxPQUFPd0IsSUFBSUMsR0FBRztBQUM1QixhQUFLbkMsU0FBU1UsT0FBT3dCLElBQUlFLElBQUk7TUFDOUI7SUFDRDtBQUVBLFNBQUtDLFNBQVM7RUFDZjtFQUNBQyxVQUFVQyxTQUFTQyxVQUFVQyxTQUFTO0FBQ3JDLFVBQU1wQyxPQUFPO0FBQ2IsVUFBTThCLE1BQU05QyxFQUFFLE1BQU0sRUFBRXFCLE9BQU9yQixFQUFFLEtBQUssRUFBRW1CLEtBQUssUUFBQSxRQUFBekQsT0FBZ0J3RixPQUFPLENBQUUsRUFBRTlELEtBQUsrRCxRQUFRLENBQUM7QUFDcEYsVUFBTUosT0FBTy9DLEVBQUUsT0FBTyxFQUFFbUIsS0FBSyxNQUFBLE9BQUF6RCxPQUFhd0YsT0FBTyxDQUFFO0FBQ25EbEQsTUFBRSxLQUFLOEMsR0FBRyxFQUFFeEIsR0FBRyxTQUFTLE1BQU07QUFDN0I4QixjQUFRQyxLQUFLckMsSUFBSTtJQUNsQixDQUFDO0FBQ0QsV0FBTztNQUNOOEI7TUFDQUM7TUFDQU8sUUFBUTtJQUNUO0VBQ0Q7RUFDQUMsZUFBZTtBQUNkLFdBQU8sS0FBS04sVUFBVSxRQUFRdEYsV0FBVyxjQUFjLEdBQUcsS0FBS3FGLFFBQVE7RUFDeEU7RUFDQVEsaUJBQWlCO0FBQ2hCLFdBQU8sS0FBS1AsVUFBVSxVQUFVdEYsV0FBVyxnQkFBZ0IsR0FBRyxLQUFLOEYsVUFBVTtFQUM5RTtFQUNBbEIsTUFBTTtJQUNMbUIsTUFBTTtJQUNOQyxRQUFRO0VBQ1Q7RUFDQUMsSUFBSUMsV0FBVztBQUNkLFVBQU03QyxPQUFPO0FBQ2JoQixNQUFFLFVBQVVnQixLQUFLdUIsS0FBS21CLEtBQUtYLElBQUksRUFBRTNELEtBQUt6QixXQUFXLFlBQVksQ0FBQztBQUM5RHFDLE1BQUUsa0JBQWtCZ0IsS0FBS3VCLEtBQUttQixLQUFLWCxJQUFJLEVBQUVlLE9BQU87QUFDaEQ5QyxTQUFLK0MsUUFBUS9DLEtBQUt1QixLQUFLbUIsS0FBS1gsSUFBSTtBQUNoQyxTQUFLL0IsS0FDSGdELGdCQUFnQkgsV0FBVyxrQkFBQSxNQUFBbkcsT0FBd0JZLFlBQVUsSUFBQSxHQUFNWCxXQUFXLFlBQVksQ0FBQyxFQUMzRnNHLEtBQUssTUFBTTtBQUVYQyxpQkFBVyxNQUFNO0FBQ2hCbEQsYUFBS3NDLE9BQU90QyxLQUFLdUIsS0FBS21CLEtBQUtYLElBQUk7QUFDL0IvQixhQUFLZ0MsU0FBUyxJQUFJO01BQ25CLEdBQUcsR0FBSTtJQUNSLENBQUM7RUFDSDtFQUNBVyxPQUFPRSxXQUFXO0FBQ2pCLFVBQU03QyxPQUFPO0FBQ2JoQixNQUFFLFVBQVVnQixLQUFLdUIsS0FBS29CLE9BQU9aLElBQUksRUFBRTNELEtBQUt6QixXQUFXLGVBQWUsQ0FBQztBQUNuRXFDLE1BQUUsa0JBQWtCZ0IsS0FBS3VCLEtBQUtvQixPQUFPWixJQUFJLEVBQUVlLE9BQU87QUFDbEQ5QyxTQUFLK0MsUUFBUS9DLEtBQUt1QixLQUFLb0IsT0FBT1osSUFBSTtBQUNsQyxTQUFLL0IsS0FDSG1ELFNBQ0FOLFdBQ0FsRyxXQUFXLFlBQVksRUFBRWlDLFFBQVEsTUFBTXRCLFVBQVUsR0FDakRYLFdBQVcsZUFBZSxFQUFFaUMsUUFBUSxNQUFNdEIsVUFBVSxDQUNyRCxFQUNDMkYsS0FBSyxNQUFNO0FBRVhDLGlCQUFXLE1BQU07QUFDaEJsRCxhQUFLc0MsT0FBT3RDLEtBQUt1QixLQUFLb0IsT0FBT1osSUFBSTtBQUNqQy9CLGFBQUt1QixLQUFLbUIsS0FBS0osU0FBUztBQUN4QnRDLGFBQUt5QyxXQUFXLElBQUk7TUFDckIsR0FBRyxHQUFHO0lBQ1AsQ0FBQztFQUNIO0VBQ0FXLHNCQUFzQjFFLE9BQU9OLE1BQU07QUFDbEMsUUFBSU0sU0FBU2YsNEJBQTRCO0FBRXhDUyxjQUFBLEtBQUExQixPQUFhLENBQUMsSUFBQSxHQUFHTCxtQkFBQWdILGFBQVkxRiwyQkFBMkJlLEtBQUssQ0FBQyxDQUFDLEVBQUVGLEtBQUssSUFBSSxDQUFDO0lBQzVFO0FBQ0EsV0FBT0o7RUFDUjtFQUNBK0UsU0FBU0csUUFBUWxGLE1BQU1tRixTQUFTO0FBQy9CLFVBQU12RCxPQUFPO0FBQ2JzRCxhQUFTQSxPQUFPRSxPQUFPLENBQUNDLEdBQUdDLEdBQUdDLFFBQVE7QUFDckMsYUFBT0EsSUFBSUMsUUFBUUgsQ0FBQyxNQUFNQztJQUMzQixDQUFDO0FBQ0RKLGFBQVNBLE9BQU85RSxLQUFLLEdBQUc7QUFDeEIsV0FBT2hDLElBQ0xxSCxLQUFLO01BQ0xDLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTlg7SUFDRCxDQUFDLEVBQ0FMLEtBQUssQ0FBQztNQUFDaUI7SUFBSyxNQUFNO0FBQ2xCLFlBQU1DLFlBQVksQ0FBQTtBQUFDLFVBQUFDLGFBQUFDLDJCQUNHSCxNQUFNSSxLQUFBLEdBQUFDO0FBQUEsVUFBQTtBQUE1QixhQUFBSCxXQUFBSSxFQUFBLEdBQUEsRUFBQUQsU0FBQUgsV0FBQUssRUFBQSxHQUFBQyxRQUFtQztBQUFBLGdCQUF4QjtZQUFDaEc7VUFBSyxJQUFBNkYsT0FBQUk7QUFDaEJSLG9CQUFVQSxVQUFVcEgsTUFBTSxJQUFJUCxJQUFJb0ksY0FBYyxRQUFRO1lBQ3ZEZCxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsZUFBZTtZQUNmdEY7WUFDQU4sTUFBTTRCLEtBQUtvRCxzQkFBc0IxRSxPQUFPTixJQUFJO1lBQzVDbUY7WUFDQXNCLE1BQWM5STtVQUNmLENBQUM7UUFDRjtNQUFBLFNBQUErSSxLQUFBO0FBQUFWLG1CQUFBVyxFQUFBRCxHQUFBO01BQUEsVUFBQTtBQUFBVixtQkFBQVksRUFBQTtNQUFBO0FBQ0EsYUFBT2hHLEVBQUVpRyxLQUFLLEdBQUdkLFNBQVM7SUFDM0IsQ0FBQztFQUNIO0VBQ0FuQixnQkFBZ0JNLFFBQVE0QixPQUFPOUcsTUFBTW1GLFNBQVM7QUFDN0NELGFBQVNBLE9BQU9FLE9BQU8sQ0FBQ0MsR0FBR0MsR0FBR0MsUUFBUTtBQUNyQyxhQUFPQSxJQUFJQyxRQUFRSCxDQUFDLE1BQU1DO0lBQzNCLENBQUM7QUFDREosYUFBU0EsT0FBTzlFLEtBQUssR0FBRztBQUN4QixXQUFPaEMsSUFDTHFILEtBQUs7TUFDTEMsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTTtNQUNOa0IsUUFBUTtNQUNSQyxTQUFTO01BQ1Q5QjtJQUNELENBQUMsRUFDQUwsS0FBSyxDQUFDO01BQUNpQjtJQUFLLE1BQU07QUFDbEIsWUFBTUMsWUFBWSxDQUFBO0FBQUMsVUFBQWtCLGFBQUFoQiwyQkFDQUgsTUFBTUksS0FBQSxHQUFBZ0I7QUFBQSxVQUFBO0FBQXpCLGFBQUFELFdBQUFiLEVBQUEsR0FBQSxFQUFBYyxTQUFBRCxXQUFBWixFQUFBLEdBQUFDLFFBQWdDO0FBQUEsZ0JBQXJCYSxPQUFBRCxPQUFBWDtBQUNWLGdCQUFNO1lBQUNhO1VBQU8sSUFBSUQsS0FBS0UsVUFBVSxDQUFDLEVBQUVDLE1BQU0sTUFBTTtBQUNoRCxnQkFBTUMsYUFBYUgsUUFBUTVHLFFBQVFzRyxPQUFPOUcsSUFBSTtBQUM5QytGLG9CQUFVQSxVQUFVcEgsTUFBTSxJQUFJUCxJQUFJb0ksY0FBYyxRQUFRO1lBQ3ZEZCxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsZUFBZTtZQUNmdEYsT0FBTzZHLEtBQUs3RztZQUNaTixNQUFNdUg7WUFDTmQsTUFBYzlJO1lBQ2Q2SixlQUFlTCxLQUFLRSxVQUFVLENBQUMsRUFBRUk7WUFDakN0QztVQUNELENBQUM7UUFDRjtNQUFBLFNBQUF1QixLQUFBO0FBQUFPLG1CQUFBTixFQUFBRCxHQUFBO01BQUEsVUFBQTtBQUFBTyxtQkFBQUwsRUFBQTtNQUFBO0FBQ0EsYUFBT2hHLEVBQUVpRyxLQUFLLEdBQUdkLFNBQVM7SUFDM0IsQ0FBQztFQUNIO0VBQ0EyQixZQUFZNUQsU0FBU3JELFVBQVVrSCxRQUFRO0FBQ3RDLFVBQU0vRixPQUFPO0FBQ2IsVUFBTTZCLE1BQU03QixLQUFLdUIsS0FBS1csT0FBTztBQUM3QixRQUFJNkQsUUFBUTtBQUNYbEUsVUFBSVMsU0FBUztJQUNkO0FBQ0EsUUFBSSxDQUFDVCxJQUFJUyxRQUFRO0FBQ2hCVCxVQUFJRSxLQUFLaUUsS0FBSyxFQUFFO0FBRWhCLFlBQU1DLFFBQVFqSCxFQUFFLEtBQUssRUFDbkJrQixTQUFTLE1BQU0sRUFDZkcsT0FBT3JCLEVBQUUsUUFBUSxFQUFFa0IsU0FBUyxXQUFXLEVBQUU5QixLQUFLekIsV0FBVyxhQUFhLENBQUMsQ0FBQyxFQUN4RTBFLFNBQVNRLElBQUlFLElBQUk7QUFDbkIsWUFBTW1FLFFBQVFELE1BQU12RixLQUFLLGNBQWM7QUFDdkM3QixlQUNFc0gsTUFBTW5HLElBQUksRUFDVjBFLEtBQUssTUFBTTtBQUlYd0IsY0FBTTlILEtBQUt6QixXQUFBLE1BQUFELE9BQWlCd0YsU0FBTyxNQUFBLENBQU0sQ0FBQztNQUMzQyxDQUFDLEVBQ0FrRSxLQUFLLE1BQU07QUFJWEYsY0FBTTlILEtBQUt6QixXQUFBLE1BQUFELE9BQWlCd0YsU0FBTyxVQUFBLENBQVUsQ0FBQztNQUMvQyxDQUFDLEVBQ0FtRSxPQUFPLE1BQU07QUFDYnJHLGFBQUtzRyxXQUFXTCxPQUFPLENBQ3RCO1VBQ0NNLE1BQU07VUFDTjdILE9BQU8vQixXQUFXLFNBQVM7VUFDM0I2SixNQUFNakcsT0FBTztBQUNaQSxrQkFBTUMsZUFBZTtBQUNyQlIsaUJBQUs4RixZQUFZNUQsU0FBU3JELFVBQVUsSUFBSTtVQUN6QztRQUNELENBQUEsQ0FDQTtNQUNGLENBQUM7QUFDRmdELFVBQUlTLFNBQVM7SUFDZDtFQUNEO0VBQ0FTLFFBQVEwRCxXQUFXO0FBQ2xCLFFBQUlBLFVBQVV4QyxLQUFLLFNBQVMsRUFBRXlDLFlBQVksTUFBTSxRQUFRO0FBQ3ZERCxnQkFBVXZHLFNBQVMsZ0JBQWdCO0lBQ3BDLFdBQVdsQixFQUFFLHVCQUF1QnlILFNBQVMsRUFBRTFKLFdBQVcsR0FBRztBQUM1RGlDLFFBQUUsUUFBUSxFQUFFa0IsU0FBUyxnQkFBZ0IsRUFBRW1CLFNBQVNvRixTQUFTO0lBQzFEO0VBQ0Q7RUFDQW5FLE9BQU9tRSxXQUFXO0FBQ2pCLFFBQUlBLFVBQVV4QyxLQUFLLFNBQVMsRUFBRXlDLFlBQVksTUFBTSxRQUFRO0FBQ3ZERCxnQkFBVUUsWUFBWSxnQkFBZ0I7SUFDdkMsT0FBTztBQUNOM0gsUUFBRSx1QkFBdUJ5SCxTQUFTLEVBQUUzRCxPQUFPO0lBQzVDO0VBQ0Q7RUFDQThELFVBQVU3RSxNQUFNO0FBQ2YvQyxNQUFFLHVDQUF1QytDLElBQUksRUFBRWtDLEtBQUssV0FBVyxJQUFJO0VBQ3BFO0VBQ0E0QyxjQUFjOUUsTUFBTTtBQUNuQi9DLE1BQUUsdUNBQXVDK0MsSUFBSSxFQUFFK0UsS0FBSyxDQUFDNUgsUUFBUUMsWUFBWTtBQUN4RSxZQUFNNEgsV0FBVy9ILEVBQUVHLE9BQU87QUFDMUI0SCxlQUFTOUMsS0FBSyxXQUFXLENBQUM4QyxTQUFTOUMsS0FBSyxTQUFTLENBQUM7SUFDbkQsQ0FBQztFQUNGO0VBQ0ErQyxhQUFhakYsTUFBTWtGLElBQUk7QUFDdEIsVUFBTXBFLFlBQVksQ0FBQTtBQUNsQjdELE1BQUUsZ0NBQWdDK0MsSUFBSSxFQUFFK0UsS0FBSyxDQUFDNUgsUUFBUWdJLGFBQWE7QUFDbEVyRSxnQkFBVUEsVUFBVTlGLE1BQU0sSUFBSWlDLEVBQUVrSSxRQUFRLEVBQUVDLEtBQUssWUFBWTtJQUM1RCxDQUFDO0FBQ0QsUUFBSXRFLFVBQVU5RixTQUFTLEdBQUc7QUFDekJrSyxTQUFHNUUsS0FBSyxNQUFNUSxTQUFTO0lBQ3hCO0VBQ0Q7RUFDQXVFLFlBQVlyRixNQUFNa0YsSUFBSTtBQUNyQixVQUFNQyxXQUFXbEksRUFBRSwwQkFBMEIrQyxJQUFJLEVBQUVvRixLQUFLLFlBQVk7QUFDcEVGLE9BQUc1RSxLQUFLLE1BQU0sQ0FBQzZFLFFBQVEsQ0FBQztFQUN6QjtFQUNBRyxVQUFVO0lBQUMzSTtJQUFPNkg7SUFBTUM7SUFBT2M7RUFBUyxHQUFHO0FBQzFDLFVBQU1DLElBQUl2SSxFQUFFLEtBQUssRUFDZm1CLEtBQUs7TUFDTHpCO01BQ0E2SDtNQUNBaUIsUUFBUTtNQUNSQyxLQUFLO0lBQ04sQ0FBQyxFQUNBckosS0FBS00sS0FBSztBQUNaLFFBQUk4SCxPQUFPO0FBQ1ZlLFFBQUVqSCxHQUFHLFNBQVNrRyxLQUFLO0lBQ3BCO0FBQ0EsUUFBSWMsV0FBVztBQUNkQyxRQUFFckgsU0FBU29ILFNBQVM7SUFDckI7QUFDQSxXQUFPdEksRUFBRSxRQUFRLEVBQUVrQixTQUFTLHFCQUFxQixFQUFFRyxPQUFPa0gsQ0FBQztFQUM1RDtFQUNBakIsV0FBV29CLFNBQVNDLFNBQVM7QUFDNUIsVUFBTTNILE9BQU87QUFDYixRQUFJNEgsYUFBYUYsUUFBUWhILEtBQUssMkJBQTJCO0FBQ3pELFVBQU1tSCxjQUFjQSxDQUFDO01BQUN0QjtJQUFJLE1BQU07QUFDL0IsYUFBT3FCLFdBQVdsSCxLQUFBLFVBQUFoRSxPQUFlb0wsS0FBS0MsVUFBVXhCLElBQUksR0FBQyxHQUFBLENBQUcsRUFBRXhKLFNBQVM7SUFDcEU7QUFDQSxRQUFJNkssV0FBVzdLLFdBQVcsR0FBRztBQUM1QjZLLG1CQUFhNUksRUFBRSxRQUFRLEVBQUVrQixTQUFTLHdCQUF3QixFQUFFbUIsU0FBU3FHLE9BQU87SUFDN0U7QUFBQSxRQUFBTSxhQUFBM0QsMkJBQ3FCc0QsT0FBQSxHQUFBTTtBQUFBLFFBQUE7QUFBckIsV0FBQUQsV0FBQXhELEVBQUEsR0FBQSxFQUFBeUQsU0FBQUQsV0FBQXZELEVBQUEsR0FBQUMsUUFBOEI7QUFBQSxjQUFuQndELFNBQUFELE9BQUF0RDtBQUNWLFlBQUksQ0FBQ2tELFlBQVlLLE1BQU0sR0FBRztBQUN6QmxJLGVBQUtxSCxVQUFVYSxNQUFNLEVBQUU3RyxTQUFTdUcsVUFBVTtRQUMzQztNQUNEO0lBQUEsU0FBQTlDLEtBQUE7QUFBQWtELGlCQUFBakQsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQWtELGlCQUFBaEQsRUFBQTtJQUFBO0VBQ0Q7RUFDQW1ELGVBQWVDLE1BQU1DLE1BQU1DLElBQUlDLE1BQU07QUFDcEMsVUFBTXhHLE9BQU8vQyxFQUFFLFFBQVE7QUFDdkIsVUFBTXdKLE9BQU94SixFQUFFLFNBQVMsRUFBRW1CLEtBQUssUUFBUSxVQUFVLEVBQUVrQixTQUFTVSxJQUFJO0FBQ2hFLFNBQUtzRixVQUFVZSxJQUFJLEVBQUUvRyxTQUFTVSxJQUFJO0FBQ2xDLFNBQUt1RSxXQUFXdkUsTUFBTXNHLElBQUk7QUFDMUJHLFNBQUtyQixLQUFLLGNBQWNtQixFQUFFO0FBQzFCLFFBQUlDLE1BQU07QUFDVEMsV0FBS3ZFLEtBQUssWUFBWSxVQUFVO0lBQ2pDO0FBQ0EsV0FBT2xDO0VBQ1I7RUFDQUMsU0FBUytELFFBQVE7QUFDaEIsVUFBTTZCLGFBQWEsS0FBS3JHLEtBQUttQixLQUFLWDtBQUNsQyxTQUFLK0QsWUFDSixRQUNBLFdBQVk7QUFDWCxhQUFPLEtBQUsyQyxhQUFhbkwsWUFBWXNLLFlBQVksQ0FBQztJQUNuRCxHQUNBN0IsTUFDRDtFQUNEO0VBQ0F0RCxXQUFXc0QsUUFBUTtBQUNsQixTQUFLRCxZQUNKLFVBQ0EsV0FBWTtBQUNYLGFBQU8sS0FBSzRDLGFBQWFwTCxVQUFVO0lBQ3BDLEdBQ0F5SSxNQUNEO0VBQ0Q7RUFDQTBDLGFBQWF2QixVQUFVVCxXQUFXa0MsTUFBTXJHLFFBQVE7QUFDL0MsU0FBS1MsUUFBUTBELFNBQVM7QUFDdEIsVUFBTXpHLE9BQU87QUFDYixVQUFNNEksV0FBVzVKLEVBQUU2SixTQUFTO0FBQzVCLFVBQU1DLE1BQU1ILE9BQU8zSixFQUFFLE1BQU0sRUFBRXFDLFNBQVNvRixTQUFTLElBQUlBO0FBQ25ELFFBQUksQ0FBQ25FLFFBQVE7QUFDWkEsZUFBUyxDQUFDO0FBQ1ZBLGFBQU80RSxRQUFRLElBQUk7SUFDcEI7QUFDQSxVQUFNNkIsYUFBY3hJLFdBQVU7QUFDN0IsWUFBTXlJLFFBQVFoSyxFQUFFLElBQUksRUFBRWlLLFFBQVEsT0FBTyxFQUFFQyxNQUFNO0FBQzdDM0ksWUFBTUMsZUFBZTtBQUNyQlIsV0FBS29ILFlBQVk0QixPQUFPLEtBQUtwRyxHQUFHO0lBQ2pDO0FBQ0EsU0FBS3BHLElBQ0hxSCxLQUFLO01BQ0xDLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTlgsUUFBUTREO01BQ1JpQyxTQUFTO0lBQ1YsQ0FBQyxFQUNBbEcsS0FBSyxDQUFDO01BQUNpQjtJQUFLLE1BQU07QUFDbEJsRSxXQUFLc0MsT0FBT21FLFNBQVM7QUFDckIsVUFBSTJDLGVBQWU7QUFDbkIsWUFBTUMsT0FBT3JLLEVBQUUsVUFBVWdCLEtBQUt1QixLQUFLbUIsS0FBS1gsSUFBSTtBQUM1QyxZQUFNdUgsdUJBQXVCO0FBQUEsVUFBQUMsYUFBQWxGLDJCQUNWSCxNQUFNSSxLQUFBLEdBQUFrRjtBQUFBLFVBQUE7QUFBekIsYUFBQUQsV0FBQS9FLEVBQUEsR0FBQSxFQUFBZ0YsU0FBQUQsV0FBQTlFLEVBQUEsR0FBQUMsUUFBZ0M7QUFBQSxnQkFBckJhLE9BQUFpRSxPQUFBN0U7QUFDVixjQUFJWSxLQUFLa0UsV0FBVztBQUNuQixrQkFBTTtjQUFDQTtZQUFTLElBQUlsRTtBQUFBLGdCQUFBbUUsYUFBQXJGLDJCQUNFb0YsU0FBQSxHQUFBRTtBQUFBLGdCQUFBO0FBQXRCLG1CQUFBRCxXQUFBbEYsRUFBQSxHQUFBLEVBQUFtRixTQUFBRCxXQUFBakYsRUFBQSxHQUFBQyxRQUFpQztBQUFBLHNCQUF0QjtrQkFBQ2hHO2dCQUFLLElBQUFpTCxPQUFBaEY7QUFDaEIsc0JBQU1pRixVQUFVbEw7QUFDaEIsc0JBQU1tTCxVQUFVRCxRQUFRaEwsUUFBUSxNQUFNLEdBQUc7QUFDekMsc0JBQU1vSyxTQUFTTCxPQUFPM0osRUFBRSxNQUFNLElBQUlBLEVBQUUsS0FBSyxHQUFHcUMsU0FBU3lILEdBQUc7QUFDeEQsc0JBQU1uQixVQUFVLENBQ2Y7a0JBQ0NwQixNQUFNdkosR0FBRzhNLEtBQUtDLE9BQU9GLFNBQVM7b0JBQUMvRixRQUFRO2tCQUFNLENBQUM7a0JBQzlDcEYsT0FBTy9CLFdBQVcsVUFBVTtnQkFDN0IsQ0FBQTtBQUVELHNCQUFNcU4sa0JBQWtCSixXQUFXdEg7QUFDbkNBLHVCQUFPc0gsT0FBTyxJQUFJO0FBQ2xCLG9CQUFJLENBQUNJLG1CQUFtQnJCLE1BQU07QUFDN0JoQiwwQkFBUUEsUUFBUTVLLE1BQU0sSUFBSTtvQkFDekJ3SixNQUFNO29CQUNON0gsT0FBTy9CLFdBQVcsWUFBWTtvQkFDOUI2SixPQUFPdUM7a0JBQ1I7Z0JBQ0Q7QUFDQSxzQkFBTW5CLGFBQWE1SCxLQUNqQm1JLGVBQ0E7a0JBQ0M1QixNQUFNdkosR0FBRzhNLEtBQUtDLE9BQU9GLFNBQVM7b0JBQUNJLFVBQVU7a0JBQUksQ0FBQztrQkFDOUN2TCxPQUFPa0w7Z0JBQ1IsR0FDQWpDLFNBQ0FrQyxTQUNBLENBQUNsQixJQUNGLEVBQ0N0SCxTQUFTMkgsS0FBSztBQUNoQixvQkFBSWdCLGlCQUFpQjtBQUNwQnBDLDZCQUFXdkgsT0FBQSx1QkFBQTNELE9BQThCQyxXQUFXLGtCQUFrQixHQUFDLFNBQUEsQ0FBUztnQkFDakYsV0FBV2dNLE9BQU9XLHNCQUFzQjtBQUN2Qyx1QkFBS1YsU0FBUzNGLEtBQUssTUFBTTtBQUN4QiwyQkFBT2pELEtBQUt5SSxhQUFhbUIsU0FBU1osT0FBT0wsT0FBTyxHQUFHckcsTUFBTTtrQkFDMUQsQ0FBQztnQkFDRjtBQUNBOEcsK0JBQWU7Y0FDaEI7WUFBQSxTQUFBdEUsS0FBQTtBQUFBNEUseUJBQUEzRSxFQUFBRCxHQUFBO1lBQUEsVUFBQTtBQUFBNEUseUJBQUExRSxFQUFBO1lBQUE7VUFDRCxPQUFPO0FBQ05vRSwyQkFBZTtVQUNoQjtRQUNEO01BQUEsU0FBQXRFLEtBQUE7QUFBQXlFLG1CQUFBeEUsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQXlFLG1CQUFBdkUsRUFBQTtNQUFBO0FBQ0EsVUFBSW9FLGdCQUFnQlQsU0FBUyxHQUFHO0FBQy9CM0ksYUFBS3NHLFdBQVcrQyxNQUFNLENBQ3JCO1VBQ0M5QyxNQUFNO1VBQ043SCxPQUFPL0IsV0FBVyxXQUFXO1VBQzdCNkosTUFBTWpHLE9BQU87QUFDWkEsa0JBQU1DLGVBQWU7QUFDckJSLGlCQUFLNEcsVUFBVTVHLEtBQUt1QixLQUFLbUIsS0FBS1gsSUFBSTtVQUNuQztRQUNELEdBQ0E7VUFDQ3dFLE1BQU07VUFDTjdILE9BQU8vQixXQUFXLGVBQWU7VUFDakM2SixNQUFNakcsT0FBTztBQUNaQSxrQkFBTUMsZUFBZTtBQUNyQlIsaUJBQUs2RyxjQUFjN0csS0FBS3VCLEtBQUttQixLQUFLWCxJQUFJO1VBQ3ZDO1FBQ0QsR0FDQTtVQUNDd0UsTUFBTTtVQUNON0gsT0FBTy9CLFdBQVcsWUFBWTtVQUM5QjZKLE1BQU1qRyxPQUFPO0FBQ1pBLGtCQUFNQyxlQUFlO0FBQ3JCUixpQkFBS2dILGFBQWFoSCxLQUFLdUIsS0FBS21CLEtBQUtYLE1BQU0vQixLQUFLNEMsR0FBRztVQUNoRDtRQUNELENBQUEsQ0FDQTtNQUNGO0FBQ0EsVUFBSXdHLGNBQWM7QUFDakIsYUFBS1IsU0FBU3NCLFlBQVlsSyxJQUFJO01BQy9CLE9BQU87QUFDTixhQUFLNEksU0FBU3VCLFdBQVduSyxJQUFJO01BQzlCO0lBQ0QsQ0FBQztBQUNGLFdBQU80SSxTQUFTd0IsUUFBUTtFQUN6QjtFQUNBQyxhQUFhbkQsVUFBVTVELFFBQVE7QUFDOUIsVUFBTXRELE9BQU87QUFDYixVQUFNc0ssWUFBWTtBQUNsQixRQUFJQyxZQUFZLENBQUE7QUFDaEIsVUFBTXBHLFlBQVksQ0FBQTtBQUNsQixhQUFBcUcsTUFBQSxHQUFBQyxZQUFzQnJPLFVBQUFvTyxNQUFBQyxVQUFBMU4sUUFBQXlOLE9BQVU7QUFBaEMsWUFBV0UsVUFBQUQsVUFBQUQsR0FBQTtBQUNWLFlBQU1HLE1BQU1uTyxJQUNWcUgsS0FBSztRQUNMQyxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsZUFBZTtRQUNmdUIsTUFBTTJCO1FBQ05qRCxNQUFNO1FBQ04yRyxTQUFTRjtRQUNUQTtNQUNELENBQUMsRUFDQXpILEtBQUssQ0FBQztRQUFDL0Y7TUFBSyxNQUFNO0FBQ2xCLGNBQU07VUFBQzJOO1FBQVksSUFBSTNOO0FBSXZCLFlBQUl3QixRQUFRTSxFQUFFLFFBQVEsRUFBRXFCLE9BQU93SyxZQUFZLEVBQUV6TCxHQUFHLENBQUMsRUFBRWhCLEtBQUssRUFBRWlCLEtBQUs7QUFDL0RYLGdCQUFRRCxhQUFhQyxLQUFLO0FBQzFCL0MsOEJBQXNCK0MsT0FBTyxhQUFhekMsYUFBYTtBQUN2RCxlQUFPeUM7TUFDUixDQUFDO0FBQ0Z5RixnQkFBVUEsVUFBVXBILE1BQU0sSUFBSTROO0lBQy9CO0FBQ0EsV0FBTzNMLEVBQUVpRyxLQUFLLEdBQUdkLFNBQVMsRUFBRWxCLEtBQUssSUFBSXBHLFNBQVM7QUFDN0MsWUFBTWlPLFdBQVcsQ0FBQTtBQUNqQixlQUFBQyxNQUFBLEdBQUFDLFFBQW9Cbk8sTUFBQWtPLE1BQUFDLE1BQUFqTyxRQUFBZ08sT0FBTTtBQUExQixjQUFXck0sUUFBQXNNLE1BQUFELEdBQUE7QUFDVixZQUFJekw7QUFHSixjQUFNMkwsWUFBWVgsVUFBVVksS0FBS3hNLEtBQUs7QUFDdEMsWUFBSXVNLGFBQWFBLFVBQVVsTyxXQUFXLEdBQUc7QUFDeEMsV0FBQSxFQUFHdUMsTUFBTSxJQUFJMkw7UUFDZCxPQUFPO0FBQ04zTCxtQkFBUztRQUNWO0FBQ0FpTCxrQkFBVUEsVUFBVXhOLE1BQU0sSUFBSTJCO0FBQzlCb00saUJBQVNBLFNBQVMvTixNQUFNLElBQUl1QztNQUM3QjtBQUFBLFVBQUE2TCxhQUFBOUcsNEJBRVcsR0FBVWhJLG1CQUFBZ0gsYUFBWXlILFFBQVEsQ0FBQSxHQUFBTTtBQUFBLFVBQUE7QUFBekMsYUFBQUQsV0FBQTNHLEVBQUEsR0FBQSxFQUFBNEcsU0FBQUQsV0FBQTFHLEVBQUEsR0FBQUMsUUFBNEM7QUFBQSxnQkFBakNwRixTQUFBOEwsT0FBQXpHO0FBQ1Y0RixzQkFBWSxDQUNYLEdBQUdBLFdBQ0gsR0FBR2pILE9BQU9yRSxJQUFLUCxXQUFVO0FBQ3hCLGtCQUFNMk0sZ0JBQWdCNU0sYUFBYUMsS0FBSztBQUN4QyxtQkFBTzRMLFVBQVUzTCxLQUFLME0sYUFBYSxJQUFJQSxnQkFBZ0JBLGdCQUFnQi9MO1VBQ3hFLENBQUMsQ0FBQTtRQUVIO01BQUEsU0FBQXdGLEtBQUE7QUFBQXFHLG1CQUFBcEcsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQXFHLG1CQUFBbkcsRUFBQTtNQUFBO0FBRUEsYUFBT2hGLEtBQUtzTCxjQUFjLENBQUMsSUFBQSxHQUFHalAsbUJBQUFnSCxhQUFZa0gsU0FBUyxDQUFDLENBQUM7SUFDdEQsQ0FBQztFQUNGO0VBQ0FlLGNBQWNoSSxRQUFRO0FBQ3JCLFVBQU1hLFlBQVksQ0FBQTtBQUVsQixVQUFNb0gsWUFBQSxHQUFXbFAsbUJBQUFnSCxhQUFZLENBQUMsTUFBTSxDQUFDO0FBQ3JDLFFBQUltSSxZQUFZLENBQUE7QUFDaEJsSSxhQUFTQSxPQUFPOUUsS0FBSyxHQUFHO0FBQ3hCLGFBQUFpTixNQUFBLEdBQUFDLGFBQXNCdFAsVUFBQXFQLE1BQUFDLFdBQUEzTyxRQUFBME8sT0FBVTtBQUFoQyxZQUFXZixVQUFBZ0IsV0FBQUQsR0FBQTtBQUNWdEgsZ0JBQVVBLFVBQVVwSCxNQUFNLElBQUlQLElBQUlxSCxLQUFLO1FBQ3RDQyxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsZUFBZTtRQUNmNUYsTUFBTWtGO1FBQ05XLE1BQU07UUFDTnZGLE9BQU87UUFDUGlOLGNBQWM7UUFDZGYsU0FBU0Y7UUFDVEE7TUFDRCxDQUFDO0lBQ0Y7QUFDQSxXQUFPMUwsRUFBRWlHLEtBQUssR0FBR2QsU0FBUyxFQUFFbEIsS0FBSyxJQUFJcEcsU0FBUztBQUM3QyxlQUFBK08sTUFBQSxHQUFBQyxTQUF3QmhQLE1BQUErTyxNQUFBQyxPQUFBOU8sUUFBQTZPLE9BQU07QUFBOUIsY0FBVyxDQUFDO1VBQUMxTztRQUFLLENBQUMsSUFBQTJPLE9BQUFELEdBQUE7QUFDbEJKLG9CQUFZLENBQUMsR0FBR0EsV0FBVyxHQUFHeE0sRUFBRTlCLE1BQU1rQixJQUFJLEVBQUVBLEtBQUssRUFBRWlCLEtBQUssRUFBRWYsTUFBTSxHQUFHLENBQUM7TUFDckU7QUFDQWtOLGtCQUFZQSxVQUFVaEksT0FBTyxDQUFDQyxHQUFHQyxHQUFHQyxRQUFRO0FBQzNDLGVBQU9BLElBQUlDLFFBQVFILENBQUMsTUFBTUM7TUFDM0IsQ0FBQztBQUNEOEgsa0JBQVlBLFVBQVVoTixLQUFLLEdBQUc7QUFDOUIsYUFBT2hDLElBQ0xxSCxLQUFLO1FBQ0xDLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxlQUFlO1FBQ2ZDLE1BQU07UUFDTlgsUUFBUWtJO01BQ1QsQ0FBQyxFQUNBdkksS0FBSyxDQUFDO1FBQUNpQjtNQUFLLE1BQU07QUFDbEJaLGlCQUFTLENBQUE7QUFBQyxZQUFBd0ksYUFBQXpILDJCQUNTSCxNQUFNSSxLQUFBLEdBQUF5SDtBQUFBLFlBQUE7QUFBekIsZUFBQUQsV0FBQXRILEVBQUEsR0FBQSxFQUFBdUgsU0FBQUQsV0FBQXJILEVBQUEsR0FBQUMsUUFBZ0M7QUFBQSxrQkFBckJhLE9BQUF3RyxPQUFBcEg7QUFDVixrQkFBTTtjQUFDakc7WUFBSyxJQUFJNkc7QUFDaEIsZ0JBQUlBLEtBQUt5RyxXQUFXLENBQUNULFNBQVNVLElBQUl2TixLQUFLLEdBQUc7QUFDekMsa0JBQUlBLFNBQVNkLGtCQUFrQjtBQUU5QjtjQUNEO0FBQ0EwRixxQkFBT0EsT0FBT3ZHLE1BQU0sSUFBSTJCO0FBQ3hCLGtCQUFJakIsYUFBYTtBQUNoQixzQkFBTStKLFNBQVNsSyxXQUFXc0IsUUFBUSxjQUFjLEVBQUU7QUFDbERqRCxzQ0FBc0IrQyxPQUFPLGVBQWVFLFFBQVEsTUFBTTRJLE1BQU0sQ0FBQztjQUNsRTtBQUVBN0wsb0NBQXNCK0MsT0FBTyxhQUFhdkMsaUJBQWlCO1lBQzVEO1VBQ0Q7UUFBQSxTQUFBMkksS0FBQTtBQUFBZ0gscUJBQUEvRyxFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBZ0gscUJBQUE5RyxFQUFBO1FBQUE7QUFDQSxlQUFPMUI7TUFDUixDQUFDO0lBQ0gsQ0FBQztFQUNGO0VBQ0FvRixhQUFheEIsVUFBVTtBQUN0QixVQUFNbEgsT0FBTztBQUNiLFVBQU1rTSxlQUFlLENBQUE7QUFDckIsVUFBTXpGLFlBQVl6RyxLQUFLdUIsS0FBS29CLE9BQU9aO0FBQ25DLFVBQU1oQyxRQUFRZixFQUFFLE1BQU07QUFDdEIsVUFBTW1OLFdBQVdwTSxNQUFNVyxLQUFLLHlDQUF5QztBQUNyRSxVQUFNa0ksV0FBVzVKLEVBQUU2SixTQUFTO0FBQzVCLFFBQUl2RixTQUFTLENBQUE7QUFDYnRELFNBQUsrQyxRQUFRMEQsU0FBUztBQUFBLFFBQUEyRixhQUFBL0gsMkJBQ0MzRyxxQkFBQSxHQUFBMk87QUFBQSxRQUFBO0FBQXZCLFdBQUFELFdBQUE1SCxFQUFBLEdBQUEsRUFBQTZILFNBQUFELFdBQUEzSCxFQUFBLEdBQUFDLFFBQThDO0FBQUEsY0FBbkM3RixXQUFBd04sT0FBQTFIO0FBQ1YsY0FBTTJILE1BQU16TixTQUFTcUksVUFBVWlGLFVBQVU3SSxNQUFNO0FBQy9DLFlBQUksT0FBT2dKLFFBQVEsVUFBVTtBQUM1QmhKLGlCQUFPQSxPQUFPdkcsTUFBTSxJQUFJdVA7UUFDekIsV0FBVyxVQUFVQSxLQUFLO0FBRXpCSix1QkFBYUEsYUFBYW5QLE1BQU0sSUFBSXVQO1FBQ3JDLE9BQU87QUFFTmhKLG1CQUFTLENBQUMsSUFBQSxHQUFHakgsbUJBQUFnSCxhQUFZLENBQUMsR0FBR0MsUUFBUSxHQUFHZ0osR0FBRyxDQUFDLENBQUM7UUFDOUM7TUFDRDtJQUFBLFNBQUF4SCxLQUFBO0FBQUFzSCxpQkFBQXJILEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUFzSCxpQkFBQXBILEVBQUE7SUFBQTtBQUVBMUIsYUFBU0EsT0FBT3JFLElBQUtQLFdBQVU7QUFDOUIsYUFBT0EsU0FBUztJQUNqQixDQUFDO0FBQ0QsVUFBTTZOLGdCQUFnQixTQUFVaE0sT0FBTztBQUN0QyxZQUFNeUksUUFBUWhLLEVBQUUsSUFBSSxFQUFFaUssUUFBUSxTQUFTO0FBQ3ZDMUksWUFBTUMsZUFBZTtBQUNyQlIsV0FBS29ILFlBQVk0QixPQUFPaEosS0FBSzJDLE1BQU07SUFDcEM7QUFFQSxTQUFLM0QsRUFBRWlHLEtBQUssR0FBR2lILFlBQVksRUFDekJqSixLQUFLLElBQUlwRyxTQUFTO0FBQ2xCLGVBQUEyUCxNQUFBLEdBQUFDLFNBQWtCNVAsTUFBQTJQLE1BQUFDLE9BQUExUCxRQUFBeVAsT0FBTTtBQUF4QixjQUFXRixNQUFBRyxPQUFBRCxHQUFBO0FBQ1YsWUFBSSxPQUFPRixRQUFRLFVBQVU7QUFDNUJoSixpQkFBT0EsT0FBT3ZHLE1BQU0sSUFBSXVQO1FBQ3pCLE9BQU87QUFFTmhKLG1CQUFTLENBQUMsSUFBQSxHQUFHakgsbUJBQUFnSCxhQUFZLENBQUMsR0FBR0MsUUFBUSxHQUFHZ0osR0FBRyxDQUFDLENBQUM7UUFDOUM7TUFDRDtBQUNBLGFBQU90TSxLQUFLcUssYUFBYW5ELFVBQVU1RCxNQUFNO0lBQzFDLENBQUMsRUFDQUwsS0FBTXlKLGNBQWE7QUFFbkIxTSxXQUFLc0MsT0FBT21FLFNBQVM7QUFBQSxVQUFBa0csY0FBQXRJLDJCQUNEcUksUUFBQSxHQUFBRTtBQUFBLFVBQUE7QUFBcEIsYUFBQUQsWUFBQW5JLEVBQUEsR0FBQSxFQUFBb0ksVUFBQUQsWUFBQWxJLEVBQUEsR0FBQUMsUUFBOEI7QUFBQSxnQkFBbkJoRyxRQUFBa08sUUFBQWpJO0FBQ1YsZ0JBQU1rRixVQUFVbkwsTUFBTUUsUUFBUSxLQUFLLEdBQUc7QUFDdEMsZ0JBQU1vSyxRQUFRaEssRUFBRSxLQUFLLEVBQUVxQyxTQUFTb0YsU0FBUztBQUN6Q3pHLGVBQUttSSxlQUNKO1lBQ0M1QixNQUFNdkosR0FBRzhNLEtBQUtDLE9BQU9GLFNBQVM7Y0FBQy9GLFFBQVE7Y0FBUStJLFNBQVM7WUFBRyxDQUFDO1lBQzVEbk87WUFDQTRJLFdBQVc7VUFDWixHQUNBLENBQ0M7WUFDQ2YsTUFBTTtZQUNON0gsT0FBTy9CLFdBQVcsZ0JBQWdCO1lBQ2xDNkosT0FBTytGO1VBQ1IsQ0FBQSxHQUVEMUMsU0FDQSxLQUNELEVBQUV4SSxTQUFTMkgsS0FBSztRQUNqQjtNQUFBLFNBQUFsRSxLQUFBO0FBQUE2SCxvQkFBQTVILEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUE2SCxvQkFBQTNILEVBQUE7TUFBQTtBQUNBLFlBQU1xRSxPQUFPckssRUFBRSxVQUFVeUgsU0FBUztBQUNsQyxVQUFJaUcsU0FBUzNQLFNBQVMsR0FBRztBQUN4QmlELGFBQUtzRyxXQUFXK0MsTUFBTSxDQUNyQjtVQUNDOUMsTUFBTTtVQUNON0gsT0FBTy9CLFdBQVcsV0FBVztVQUM3QjZKLE1BQU1qRyxPQUFPO0FBQ1pBLGtCQUFNQyxlQUFlO0FBQ3JCUixpQkFBSzRHLFVBQVVILFNBQVM7VUFDekI7UUFDRCxHQUNBO1VBQ0NGLE1BQU07VUFDTjdILE9BQU8vQixXQUFXLGVBQWU7VUFDakM2SixNQUFNakcsT0FBTztBQUNaQSxrQkFBTUMsZUFBZTtBQUNyQlIsaUJBQUs2RyxjQUFjSixTQUFTO1VBQzdCO1FBQ0QsR0FDQTtVQUNDRixNQUFNO1VBQ043SCxPQUFPL0IsV0FBVyxnQkFBZ0I7VUFDbEM2SixNQUFNakcsT0FBTztBQUNaQSxrQkFBTUMsZUFBZTtBQUNyQlIsaUJBQUtnSCxhQUFhUCxXQUFXekcsS0FBSzJDLE1BQU07VUFDekM7UUFDRCxDQUFBLENBQ0E7QUFDRCxhQUFLaUcsU0FBU3NCLFlBQVlsSyxNQUFNLENBQUMwTSxRQUFRLENBQUM7TUFDM0MsT0FBTztBQUNOLGFBQUs5RCxTQUFTdUIsV0FBV25LLE1BQU0sQ0FBQzBNLFFBQVEsQ0FBQztNQUMxQztJQUNELENBQUM7QUFDRixXQUFPOUQsU0FBU3dCLFFBQVE7RUFDekI7QUFDRDtBQUdBbEosT0FBTzRMLGdCQUFnQjtFQUN0QnBSO0VBQ0FEO0VBQ0FFO0FBQ0Q7O0FIdnVCQSxJQUFBb1IscUJBQXNCelEsUUFBQSxpQkFBQTs7QU1BdEIsSUFBTTtFQUFDMFE7QUFBYyxJQUFJaFEsR0FBR08sT0FBT0MsSUFBSTtBQUV2QyxJQUFNeVAsbUJBQW1CO0VBQ3hCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLGlDQUFpQztFQUNqQyw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsbUNBQW1DO0VBQ25DLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMseUJBQXlCO0FBQzFCO0FBRUEsSUFBTUMsY0FBY0EsTUFBWTtBQUMvQixNQUFJLENBQUMsV0FBVyxTQUFTLFNBQVMsT0FBTyxFQUFFQyxTQUFTSCxjQUFjLEdBQUc7QUFDcEVoUSxPQUFHb1EsU0FBU0MsSUFBNkI7TUFDeEMsMEJBQTBCO01BQzFCLHlCQUF5QjtNQUN6QiwwQkFBMEI7TUFDMUIsNkJBQTZCO01BQzdCLDBCQUEwQjtNQUMxQiwyQkFBMkI7TUFDM0IsK0JBQStCO01BQy9CLDhCQUE4QjtNQUM5Qiw2QkFBNkI7TUFDN0IsaUNBQWlDO01BQ2pDLDhCQUE4QjtNQUM5Qiw0QkFBNEI7TUFDNUIsNEJBQTRCO01BQzVCLHlCQUF5QjtNQUN6Qiw0QkFBNEI7TUFDNUIsZ0NBQWdDO01BQ2hDLCtCQUErQjtNQUMvQixtQ0FBbUM7TUFDbkMsOEJBQThCO01BQzlCLCtCQUErQjtNQUMvQiw0QkFBNEI7TUFDNUIsK0JBQStCO01BQy9CLGtDQUFrQztNQUNsQyx5QkFBeUI7SUFDMUIsQ0FBQztFQUNGLE9BQU87QUFDTnJRLE9BQUdvUSxTQUFTQyxJQUFJSixnQkFBZ0I7RUFDakM7QUFDRDs7QU56REFDLFlBQVk7QUFFWixNQUFBLEdBQUtILG1CQUFBTyxTQUFRLEVBQUVySyxLQUFNbEQsV0FBeUM7QUFDN0RMLGdCQUFjSSxLQUFLQyxLQUFLO0FBQ3pCLENBQUM7IiwKICAibmFtZXMiOiBbIlRvb2xzUmVkaXJlY3RfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJmaW5kUmVkaXJlY3RCeVNlbGVjdG9yIiwgImZpbmRSZWRpcmVjdENhbGxiYWNrIiwgInNldFJlZGlyZWN0VGV4dFN1ZmZpeCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiYXBpVGFnIiwgInZlcnNpb24iLCAiU1VGRklYX0FQUEVORCIsICJTVUZGSVhfUkVQTEFDRSIsICJTVUZGSVhfU0VUREVGQVVMVCIsICJWQVJJQU5UUyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhcmdzIiwgImZ1bGxLZXkiLCAibGVuZ3RoIiwgIm13IiwgIm1lc3NhZ2UiLCAicGFyc2UiLCAicGxhaW4iLCAid2dOYW1lc3BhY2VJZHMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJjb25maWciLCAiZ2V0IiwgIklTX0NBVEVHT1JZIiwgImZpbmRSZWRpcmVjdENhbGxiYWNrcyIsICJwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeCIsICJyZWRpcmVjdEV4Y2x1ZGVzIiwgIm5zUHJlZml4ZXMiLCAibnNDYW5vblByZWZpeCIsICJuc1ByZWZpeFBhdHRlcm4iLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgInRleHQiLCAibnNpZCIsICJzcGxpdCIsICJSZWdFeHAiLCAiam9pbiIsICJmaXhOYW1lc3BhY2UiLCAidGl0bGUiLCAidGVzdCIsICJyZXBsYWNlIiwgImNhbGxiYWNrIiwgImdlbmVyYXRlQXJyYXkiLCAic2VsZWN0b3IiLCAiJCIsICJtYXAiLCAiX2luZGV4IiwgImVsZW1lbnQiLCAiZXEiLCAidHJpbSIsICJzdWZmaXgiLCAiZmxhZyIsICJmbGFnX3NldCIsICJmbGFnX2FwcGVuZCIsICJUb29sc1JlZGlyZWN0IiwgInRhYnNlbGVtIiwgInRhZ3NlbGVtIiwgInZhcmlhbnRzIiwgImluaXQiLCAiJGJvZHkiLCAic2VsZiIsICJidXR0b24iLCAiYWRkQ2xhc3MiLCAiYXR0ciIsICJjc3MiLCAiYXBwZW5kIiwgIm9uIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImRpYWxvZyIsICJmaW5kIiwgImFmdGVyIiwgImJnaWZyYW1lIiwgInJlc2l6YWJsZSIsICJtb2RhbCIsICJ3aWR0aCIsICJNYXRoIiwgInJvdW5kIiwgIndpbmRvdyIsICJwb3NpdGlvbiIsICJoZWlnaHQiLCAiYXBwZW5kVG8iLCAiYWRkVGFicyIsICJ0YWJzIiwgImtuYW1lIiwgImhhc093biIsICJjaGFyQXQiLCAidG9VcHBlckNhc2UiLCAic2xpY2UiLCAidGFiIiwgInRhZyIsICJjb250IiwgImxvYWRWaWV3IiwgImNyZWF0ZVRhYiIsICJ0YWJuYW1lIiwgInRhYnRpdGxlIiwgIm9uQ2xpY2siLCAiY2FsbCIsICJsb2FkZWQiLCAiX2luaXRUYWJWaWV3IiwgIl9pbml0VGFiQ3JlYXRlIiwgImxvYWRDcmVhdGUiLCAidmlldyIsICJjcmVhdGUiLCAiZml4IiwgInBhZ2VuYW1lcyIsICJyZW1vdmUiLCAibG9hZGluZyIsICJidWxrRWRpdEJ5UmVnZXgiLCAidGhlbiIsICJzZXRUaW1lb3V0IiwgImJ1bGtFZGl0IiwgImFkZFJlZGlyZWN0VGV4dFN1ZmZpeCIsICJ1bmlxdWVBcnJheSIsICJ0aXRsZXMiLCAic3VtbWFyeSIsICJmaWx0ZXIiLCAidiIsICJpIiwgImFyciIsICJpbmRleE9mIiwgInBvc3QiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicXVlcnkiLCAiZGVmZXJyZWRzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAicGFnZXMiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgInBvc3RXaXRoVG9rZW4iLCAidGFncyIsICJlcnIiLCAiZSIsICJmIiwgIndoZW4iLCAicmVnZXgiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAicGFnZSIsICJjb250ZW50IiwgInJldmlzaW9ucyIsICJzbG90cyIsICJuZXdDb250ZW50IiwgImJhc2V0aW1lc3RhbXAiLCAidGltZXN0YW1wIiwgImxvYWRUYWJDb250IiwgInJlbG9hZCIsICJodG1sIiwgIiRkZXNjIiwgIiR0ZXh0IiwgImFwcGx5IiwgImZhaWwiLCAiYWx3YXlzIiwgImFkZE1ldGhvZHMiLCAiaHJlZiIsICJjbGljayIsICJjb250YWluZXIiLCAidG9Mb3dlckNhc2UiLCAicmVtb3ZlQ2xhc3MiLCAic2VsZWN0QWxsIiwgInNlbGVjdEludmVyc2UiLCAiZWFjaCIsICIkZWxlbWVudCIsICJzZWxlY3RBY3Rpb24iLCAiY2IiLCAicGFnZW5hbWUiLCAiZGF0YSIsICJjbGlja0FjdGlvbiIsICJidWlsZExpbmsiLCAiY2xhc3NuYW1lIiwgImEiLCAidGFyZ2V0IiwgInJlbCIsICIkcGFyZW50IiwgIm1ldGhvZHMiLCAiJGNvbnRhaW5lciIsICJtZXRob2RFeGlzdCIsICJKU09OIiwgInN0cmluZ2lmeSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJtZXRob2QiLCAiYnVpbGRTZWxlY3Rpb24iLCAibWFpbiIsICJtZXRkIiwgIm10IiwgImRzYWIiLCAic2VsZSIsICJsb2FkUmVkaXJlY3QiLCAiZmluZFJlZGlyZWN0IiwgImRlZXAiLCAiZGVmZXJyZWQiLCAiRGVmZXJyZWQiLCAidG9wIiwgIm9uQ2xpY2tGaXgiLCAiZW50cnkiLCAicGFyZW50cyIsICJmaXJzdCIsICJyZGxpbWl0IiwgImhhc19yZWRpcmVjdCIsICJkZXNjIiwgIm1heGltdW1SZWRpcmVjdERlcHRoIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgInJlZGlyZWN0cyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJyZHRpdGxlIiwgInVsdGl0bGUiLCAidXRpbCIsICJnZXRVcmwiLCAiaXNDeWNsZVJlZGlyZWN0IiwgInJlZGlyZWN0IiwgInJlc29sdmVXaXRoIiwgInJlamVjdFdpdGgiLCAicHJvbWlzZSIsICJmaW5kVmFyaWFudHMiLCAic3VmZml4UmVnIiwgInJldFRpdGxlcyIsICJfaTIiLCAiX1ZBUklBTlRTIiwgInZhcmlhbnQiLCAieGhyIiwgInVzZWxhbmciLCAiZGlzcGxheXRpdGxlIiwgInN1ZmZpeGVzIiwgIl9pMyIsICJfYXJncyIsICJzdWZmaXhBcnIiLCAiZXhlYyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJtb2RpZmllZFRpdGxlIiwgImZpbmROb3RFeGlzdHMiLCAiZXhjbHVkZXMiLCAiYWxsdGl0bGVzIiwgIl9pNCIsICJfVkFSSUFOVFMyIiwgImNvbnRlbnRtb2RlbCIsICJfaTUiLCAiX2FyZ3MyIiwgIl9pdGVyYXRvcjgiLCAiX3N0ZXA4IiwgIm1pc3NpbmciLCAiaGFzIiwgImZyY0RlZmVycmVkcyIsICIkY29udGVudCIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJyZXQiLCAib25DbGlja0NyZWF0ZSIsICJfaTYiLCAiX2FyZ3MzIiwgImZ2dGl0bGVzIiwgIl9pdGVyYXRvcjEwIiwgIl9zdGVwMTAiLCAicmVkbGluayIsICJ0b29sc1JlZGlyZWN0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ3Z1VzZXJMYW5ndWFnZSIsICJERUZBVUxUX01FU1NBR0VTIiwgInNldE1lc3NhZ2VzIiwgImluY2x1ZGVzIiwgIm1lc3NhZ2VzIiwgInNldCIsICJnZXRCb2R5Il0KfQo=
