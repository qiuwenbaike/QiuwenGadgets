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
//! src/ToolsRedirect/modules/core.ts
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
    var _pageWithRedirectText;
    pageWithRedirectTextSuffix[title] = (0, import_ext_gadget2.generateArray)((_pageWithRedirectText = pageWithRedirectTextSuffix[title]) !== null && _pageWithRedirectText !== void 0 ? _pageWithRedirectText : [], suffix);
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
      var _pageWithRedirectText2;
      text += "\n".concat((0, import_ext_gadget2.uniqueArray)((_pageWithRedirectText2 = pageWithRedirectTextSuffix[title]) !== null && _pageWithRedirectText2 !== void 0 ? _pageWithRedirectText2 : []).join("\n"));
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
                return [];
              }
              titles[titles.length] = title;
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
    titles = titles.map((title) => title || "").filter(Boolean);
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
      var _iterator0 = _createForOfIteratorHelper(fvtitles), _step0;
      try {
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
          const title = _step0.value;
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
        _iterator0.e(err);
      } finally {
        _iterator0.f();
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
    const loadTab = /* @__PURE__ */ (function() {
      var _ref = _asyncToGenerator(function* (tab, reload = false) {
        yield (0, import_vue2.nextTick)();
        if (!viewContainer.value || !createContainer.value) {
          return;
        }
        props.controller.attachContainers(viewContainer.value, createContainer.value);
        if (tab === "view") {
          props.controller.loadView(reload);
        } else {
          props.controller.loadCreate(reload);
        }
      });
      return function loadTab2(_x) {
        return _ref.apply(this, arguments);
      };
    })();
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
void (0, import_ext_gadget3.getBody)().then(($body) => {
  const {
    open
  } = mountToolsRedirect(ToolsRedirect);
  ToolsRedirect.init($body, open);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QvVG9vbHNSZWRpcmVjdC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9vcHRpb25zLmpzb24iLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy91dGlsL2ZpeE5hbWVzcGFjZS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL3V0aWwvZ2V0TWVzc2FnZS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL3VpLnRzIiwgImRpc3QvVG9vbHNSZWRpcmVjdC9zcmMvVG9vbHNSZWRpcmVjdC9BcHAudnVlIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxUb29sc1JlZGlyZWN0XFxBcHAudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1Rvb2xzUmVkaXJlY3QvQXBwLnZ1ZSIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL21lc3NhZ2VzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vVG9vbHNSZWRpcmVjdC5sZXNzJztcbmltcG9ydCB7VG9vbHNSZWRpcmVjdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHttb3VudFRvb2xzUmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy91aSc7XG5pbXBvcnQge3NldE1lc3NhZ2VzfSBmcm9tICcuL21vZHVsZXMvbWVzc2FnZXMnO1xuXG5zZXRNZXNzYWdlcygpO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qge29wZW59ID0gbW91bnRUb29sc1JlZGlyZWN0KFRvb2xzUmVkaXJlY3QpO1xuXHRUb29sc1JlZGlyZWN0LmluaXQoJGJvZHksIG9wZW4pO1xufSk7XG5cbmV4cG9ydCB7ZmluZFJlZGlyZWN0Q2FsbGJhY2ssIGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IsIHNldFJlZGlyZWN0VGV4dFN1ZmZpeH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuIiwgIntcblx0XCJhcGlUYWdcIjogXCJUb29sc1JlZGlyZWN0XCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiY29uc3QgU1VGRklYX0FQUEVORCA9IDA7XG5jb25zdCBTVUZGSVhfUkVQTEFDRSA9IDE7XG5jb25zdCBTVUZGSVhfU0VUREVGQVVMVCA9IDI7XG5cbmNvbnN0IFZBUklBTlRTID0gWyd6aC1oYW5zJywgJ3poLWhhbnQnLCAnemgtY24nLCAnemgtaGsnLCAnemgtbW8nLCAnemgtc2cnLCAnemgtbXknLCAnemgtdHcnXTtcblxuZXhwb3J0IHtTVUZGSVhfQVBQRU5ELCBTVUZGSVhfUkVQTEFDRSwgU1VGRklYX1NFVERFRkFVTFQsIFZBUklBTlRTfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1JlZGlyZWN0Q2FsbGJhY2ssIFJlZGlyZWN0TWV0aG9kLCBUb29sc1JlZGlyZWN0QXBpfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7U1VGRklYX0FQUEVORCwgU1VGRklYX1JFUExBQ0UsIFNVRkZJWF9TRVRERUZBVUxULCBWQVJJQU5UU30gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXksIHVuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Zml4TmFtZXNwYWNlfSBmcm9tICcuL3V0aWwvZml4TmFtZXNwYWNlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi91dGlsL2dldE1lc3NhZ2UnO1xuY29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IElTX0NBVEVHT1JZID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0O1xubGV0IGZpbmRSZWRpcmVjdENhbGxiYWNrczogUmVkaXJlY3RDYWxsYmFja1tdID0gW107XG5jb25zdCBwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeDogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5jb25zdCByZWRpcmVjdEV4Y2x1ZGVzOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9O1xuXG4vKipcbiAqIEFkZCBuZXcgY3VzdG9tIGNhbGxiYWNrIGZvciBmaW5kaW5nIG5ldyBwb3RlbnRpYWwgcmVkaXJlY3QgdGl0bGVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIChwYWdlbmFtZSwgJGNvbnRlbnQsIHRpdGxlcykgPT4gdGl0bGUgbGlzdFxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gYXJnc1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5jb25zdCBmaW5kUmVkaXJlY3RDYWxsYmFjayA9IGZ1bmN0aW9uIChcblx0dGhpczogVG9vbHNSZWRpcmVjdEFwaSxcblx0Y2FsbGJhY2s6IFJlZGlyZWN0Q2FsbGJhY2ssXG5cdC4uLmFyZ3M6IHVua25vd25bXVxuKTogVG9vbHNSZWRpcmVjdEFwaSB7XG5cdGlmIChjYWxsYmFjaykge1xuXHRcdGZpbmRSZWRpcmVjdENhbGxiYWNrc1tmaW5kUmVkaXJlY3RDYWxsYmFja3MubGVuZ3RoXSA9IGNhbGxiYWNrO1xuXHR9IGVsc2Uge1xuXHRcdGZpbmRSZWRpcmVjdENhbGxiYWNrcyA9IGdlbmVyYXRlQXJyYXkoZmluZFJlZGlyZWN0Q2FsbGJhY2tzLCBjYWxsYmFjaywgLi4uYXJncykgYXMgUmVkaXJlY3RDYWxsYmFja1tdO1xuXHR9XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBGaW5kIG5ldyBwb3RlbnRpYWwgcmVkaXJlY3QgdGl0bGVzIHRocm91Z2ggc2VsZWN0b3IocylcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuY29uc3QgZmluZFJlZGlyZWN0QnlTZWxlY3RvciA9IGZ1bmN0aW9uICh0aGlzOiBUb29sc1JlZGlyZWN0QXBpLCBzZWxlY3Rvcjogc3RyaW5nKTogVG9vbHNSZWRpcmVjdEFwaSB7XG5cdC8qIEEgc2hvcnRjdXQgdG8gYWRkIENTUyBzZWxlY3RvcnMgYXMgcnVsZSB0byBmaW5kIG5ldyBwb3RlbnRpYWwgcmVkaXJlY3QgdGl0bGVzLiAqL1xuXHRmaW5kUmVkaXJlY3RDYWxsYmFja3NbZmluZFJlZGlyZWN0Q2FsbGJhY2tzLmxlbmd0aF0gPSAoKSA9PiB7XG5cdFx0cmV0dXJuICQoc2VsZWN0b3IpLm1hcCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gJChlbGVtZW50KS5lcSgwKS50ZXh0KCkudHJpbSgpIHx8IG51bGw7XG5cdFx0fSkgYXMgSlF1ZXJ5PGFueT47XG5cdH07XG5cdHJldHVybiB0aGlzO1xufTtcblxuY29uc3Qgc2V0UmVkaXJlY3RUZXh0U3VmZml4ID0gKHRpdGxlOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nLCBmbGFnPzogbnVtYmVyKTogdm9pZCA9PiB7XG5cdGxldCBmbGFnX3NldCA9IGZhbHNlO1xuXHRsZXQgZmxhZ19hcHBlbmQgPSBmYWxzZTtcblx0ZmxhZyB8fD0gU1VGRklYX0FQUEVORDsgLy8gZGVmYXVsdCBhcHBlbmRcblx0ZmxhZ19zZXQgPSBmbGFnID09PSBTVUZGSVhfUkVQTEFDRTtcblx0dGl0bGUgPSBmaXhOYW1lc3BhY2UodGl0bGUpO1xuXHRpZiAodGl0bGUgaW4gcGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXgpIHtcblx0XHRmbGFnX2FwcGVuZCA9IGZsYWcgPT09IFNVRkZJWF9BUFBFTkQ7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaWYgbm90IGV4aXN0LCBldmVyeSBmbGFnIGNhbiBzZXRcblx0XHRmbGFnX3NldCA9IHRydWU7XG5cdH1cblx0aWYgKGZsYWdfc2V0KSB7XG5cdFx0cGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXhbdGl0bGVdID0gZ2VuZXJhdGVBcnJheShzdWZmaXgpO1xuXHR9IGVsc2UgaWYgKGZsYWdfYXBwZW5kKSB7XG5cdFx0cGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXhbdGl0bGVdID0gZ2VuZXJhdGVBcnJheShwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0gPz8gW10sIHN1ZmZpeCkgYXMgc3RyaW5nW107XG5cdH1cbn07XG5cbmNvbnN0IFRvb2xzUmVkaXJlY3Q6IFRvb2xzUmVkaXJlY3RBcGkgPSB7XG5cdHZhcmlhbnRzOiBWQVJJQU5UUyxcblx0aW5pdCgkYm9keSwgb25PcGVuKSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ213LWxpc3QtaXRlbSBjb2xsYXBzaWJsZSB2ZWN0b3ItdGFiLW5vaWNvbicpXG5cdFx0XHQuYXR0cignaWQnLCAnY2EtcmVkaXJlY3QnKVxuXHRcdFx0LmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKVxuXHRcdFx0LmFwcGVuZCgkKCc8YT4nKS5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ2J0bmRlc2MnKSkudGV4dChnZXRNZXNzYWdlKCdidG50aXRsZScpKSk7XG5cdFx0YnV0dG9uLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdG9uT3BlbigpO1xuXHRcdH0pO1xuXHRcdCRib2R5LmZpbmQoJ2xpI2NhLWhpc3RvcnknKS5hZnRlcihidXR0b24pO1xuXHR9LFxuXHRhdHRhY2hDb250YWluZXJzKHZpZXdDb250YWluZXIsIGNyZWF0ZUNvbnRhaW5lcikge1xuXHRcdHRoaXMudGFicy52aWV3ID0ge2NvbnQ6ICQodmlld0NvbnRhaW5lciksIGxvYWRlZDogZmFsc2V9O1xuXHRcdHRoaXMudGFicy5jcmVhdGUgPSB7Y29udDogJChjcmVhdGVDb250YWluZXIpLCBsb2FkZWQ6IGZhbHNlfTtcblx0fSxcblx0dGFiczoge1xuXHRcdHZpZXc6IHtjb250OiAkKCksIGxvYWRlZDogZmFsc2V9LFxuXHRcdGNyZWF0ZToge2NvbnQ6ICQoKSwgbG9hZGVkOiBmYWxzZX0sXG5cdH0sXG5cdGZpeChwYWdlbmFtZXMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHQkKCdwLmRlc2MnLCBzZWxmLnRhYnMudmlldy5jb250KS50ZXh0KGdldE1lc3NhZ2UoJ2ZpeGxvYWRpbmcnKSk7XG5cdFx0JCgncFtjbGFzcyE9ZGVzY10nLCBzZWxmLnRhYnMudmlldy5jb250KS5yZW1vdmUoKTtcblx0XHRzZWxmLmxvYWRpbmcoc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0dm9pZCBzZWxmXG5cdFx0XHQuYnVsa0VkaXRCeVJlZ2V4KHBhZ2VuYW1lcywgL1xccypcXFtcXFsuKj8oIy4qPyk/XFxdXFxdLywgYCBbWyR7d2dQYWdlTmFtZX0kMV1dYCwgZ2V0TWVzc2FnZSgnZml4c3VtbWFyeScpKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHQvLyBkZWxheSBsb2FkIGJlZm9yZSB0aGUgYXN5bmNocm9ub3VzIHRhc2tzIG9uIHNlcnZlciBmaW5pc2hlZFxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmxvYWRlZChzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0XHRzZWxmLmxvYWRWaWV3KHRydWUpO1xuXHRcdFx0XHR9LCAzMDAwKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRjcmVhdGUocGFnZW5hbWVzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0JCgncC5kZXNjJywgc2VsZi50YWJzLmNyZWF0ZS5jb250KS50ZXh0KGdldE1lc3NhZ2UoJ2NyZWF0ZWxvYWRpbmcnKSk7XG5cdFx0JCgncFtjbGFzcyE9ZGVzY10nLCBzZWxmLnRhYnMuY3JlYXRlLmNvbnQpLnJlbW92ZSgpO1xuXHRcdHNlbGYubG9hZGluZyhzZWxmLnRhYnMuY3JlYXRlLmNvbnQpO1xuXHRcdHZvaWQgc2VsZlxuXHRcdFx0LmJ1bGtFZGl0KFxuXHRcdFx0XHRwYWdlbmFtZXMsXG5cdFx0XHRcdGdldE1lc3NhZ2UoSVNfQ0FURUdPUlkgPyAnY3JlYXRldGV4dC1jYXRlZ29yeScgOiAnY3JlYXRldGV4dCcpLnJlcGxhY2UoJyQxJywgd2dQYWdlTmFtZSksXG5cdFx0XHRcdGdldE1lc3NhZ2UoJ2NyZWF0ZXN1bW1hcnknKS5yZXBsYWNlKCckMScsIHdnUGFnZU5hbWUpXG5cdFx0XHQpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdC8vIGRlbGF5IGxvYWQgYmVmb3JlIHRoZSBhc3luY2hyb25vdXMgdGFza3Mgb24gc2VydmVyIGZpbmlzaGVkXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYubG9hZGVkKHNlbGYudGFicy5jcmVhdGUuY29udCk7XG5cdFx0XHRcdFx0c2VsZi50YWJzLnZpZXcubG9hZGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0c2VsZi5sb2FkQ3JlYXRlKHRydWUpO1xuXHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGFkZFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgdGV4dCkge1xuXHRcdGlmICh0aXRsZSBpbiBwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeCkge1xuXHRcdFx0dGV4dCArPSBgXFxuJHt1bmlxdWVBcnJheShwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0gPz8gW10pLmpvaW4oJ1xcbicpfWA7IC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHR9XG5cdFx0cmV0dXJuIHRleHQ7XG5cdH0sXG5cdGJ1bGtFZGl0KHRpdGxlcywgdGV4dCwgc3VtbWFyeSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5maWx0ZXIoKHYsIGksIGFycikgPT4ge1xuXHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKHYpID09PSBpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBhcGlcblx0XHRcdC5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdHRpdGxlcyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGV9IG9mIHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWRzW2RlZmVycmVkcy5sZW5ndGhdID0gYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHR0ZXh0OiBzZWxmLmFkZFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgdGV4dCksXG5cdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0dGFnczogT1BUSU9OUy5hcGlUYWcsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGJ1bGtFZGl0QnlSZWdleCh0aXRsZXMsIHJlZ2V4LCB0ZXh0LCBzdW1tYXJ5KSB7XG5cdFx0dGl0bGVzID0gdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YodikgPT09IGk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGFwaVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0XHR0aXRsZXMsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0Y29uc3QgZGVmZXJyZWRzOiBzdHJpbmcgfCBhbnlbXSA9IFtdO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRjb25zdCB7Y29udGVudH0gPSBwYWdlLnJldmlzaW9uc1swXS5zbG90c1snbWFpbiddO1xuXHRcdFx0XHRcdGNvbnN0IG5ld0NvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UocmVnZXgsIHRleHQpO1xuXHRcdFx0XHRcdGRlZmVycmVkc1tkZWZlcnJlZHMubGVuZ3RoXSA9IGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRcdHRpdGxlOiBwYWdlLnRpdGxlLFxuXHRcdFx0XHRcdFx0dGV4dDogbmV3Q29udGVudCxcblx0XHRcdFx0XHRcdHRhZ3M6IE9QVElPTlMuYXBpVGFnLFxuXHRcdFx0XHRcdFx0YmFzZXRpbWVzdGFtcDogcGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wLFxuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gJC53aGVuKC4uLmRlZmVycmVkcyk7XG5cdFx0XHR9KTtcblx0fSxcblx0bG9hZFRhYkNvbnQodGFibmFtZSwgY2FsbGJhY2ssIHJlbG9hZCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IHRhYiA9IHNlbGYudGFic1t0YWJuYW1lXTtcblx0XHRpZiAocmVsb2FkKSB7XG5cdFx0XHR0YWIubG9hZGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghdGFiLmxvYWRlZCkge1xuXHRcdFx0dGFiLmNvbnQuaHRtbCgnJyk7XG5cdFx0XHQvL1xuXHRcdFx0Y29uc3QgJGRlc2MgPSAkKCc8cD4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2Rlc2MnKVxuXHRcdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLmFkZENsYXNzKCdkZXNjLXRleHQnKS50ZXh0KGdldE1lc3NhZ2UoJ3JlZGlsb2FkaW5nJykpKVxuXHRcdFx0XHQuYXBwZW5kVG8odGFiLmNvbnQpO1xuXHRcdFx0Y29uc3QgJHRleHQgPSAkZGVzYy5maW5kKCc+IC5kZXNjLXRleHQnKTtcblx0XHRcdGNhbGxiYWNrXG5cdFx0XHRcdC5hcHBseShzZWxmKVxuXHRcdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLmpzXG5cdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdCR0ZXh0LnRleHQoZ2V0TWVzc2FnZShgdGFiJHt0YWJuYW1lfWRlc2NgKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5mYWlsKCgpID0+IHtcblx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMuanNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0JHRleHQudGV4dChnZXRNZXNzYWdlKGB0YWIke3RhYm5hbWV9bm90Zm91bmRgKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYuYWRkTWV0aG9kcygkZGVzYywgW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3JlZnJlc2gnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgncmVmcmVzaCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5sb2FkVGFiQ29udCh0YWJuYW1lLCBjYWxsYmFjaywgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdHRhYi5sb2FkZWQgPSB0cnVlO1xuXHRcdH1cblx0fSxcblx0bG9hZGluZyhjb250YWluZXIpIHtcblx0XHRpZiAoY29udGFpbmVyLnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpID09PSAnc3BhbicpIHtcblx0XHRcdGNvbnRhaW5lci5hZGRDbGFzcygnbXctYWpheC1sb2FkZXInKTtcblx0XHR9IGVsc2UgaWYgKCQoJ3NwYW4ubXctYWpheC1sb2FkZXInLCBjb250YWluZXIpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0JCgnPHNwYW4+JykuYWRkQ2xhc3MoJ213LWFqYXgtbG9hZGVyJykuYXBwZW5kVG8oY29udGFpbmVyKTtcblx0XHR9XG5cdH0sXG5cdGxvYWRlZChjb250YWluZXIpIHtcblx0XHRpZiAoY29udGFpbmVyLnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpID09PSAnc3BhbicpIHtcblx0XHRcdGNvbnRhaW5lci5yZW1vdmVDbGFzcygnbXctYWpheC1sb2FkZXInKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnc3Bhbi5tdy1hamF4LWxvYWRlcicsIGNvbnRhaW5lcikucmVtb3ZlKCk7XG5cdFx0fVxuXHR9LFxuXHRzZWxlY3RBbGwoY29udCkge1xuXHRcdCQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdOm5vdCg6ZGlzYWJsZWQpJywgY29udCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuXHR9LFxuXHRzZWxlY3RJbnZlcnNlKGNvbnQpIHtcblx0XHQkKCdpbnB1dFt0eXBlPWNoZWNrYm94XTpub3QoOmRpc2FibGVkKScsIGNvbnQpLmVhY2goKF9pbmRleCwgZWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXHRcdFx0JGVsZW1lbnQucHJvcCgnY2hlY2tlZCcsICEkZWxlbWVudC5wcm9wKCdjaGVja2VkJykpO1xuXHRcdH0pO1xuXHR9LFxuXHRzZWxlY3RBY3Rpb24oY29udCwgY2IpIHtcblx0XHRjb25zdCBwYWdlbmFtZXM6IHN0cmluZ1tdID0gW107XG5cdFx0JCgnaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCcsIGNvbnQpLmVhY2goKF9pbmRleCwgcGFnZW5hbWUpID0+IHtcblx0XHRcdHBhZ2VuYW1lc1twYWdlbmFtZXMubGVuZ3RoXSA9ICQocGFnZW5hbWUpLmRhdGEoJ3BhZ2UtdGl0bGUnKTtcblx0XHR9KTtcblx0XHRpZiAocGFnZW5hbWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNiLmNhbGwodGhpcywgcGFnZW5hbWVzKTtcblx0XHR9XG5cdH0sXG5cdGNsaWNrQWN0aW9uKGNvbnQsIGNiKSB7XG5cdFx0Y29uc3QgcGFnZW5hbWUgPSAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCBjb250KS5kYXRhKCdwYWdlLXRpdGxlJyk7XG5cdFx0Y2IuY2FsbCh0aGlzLCBbcGFnZW5hbWVdKTtcblx0fSxcblx0YnVpbGRMaW5rKHt0aXRsZSwgaHJlZiwgY2xpY2ssIGNsYXNzbmFtZX0pIHtcblx0XHRjb25zdCBhID0gJCgnPGE+Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdGhyZWYsXG5cdFx0XHRcdHRhcmdldDogJ19ibGFuaycsXG5cdFx0XHRcdHJlbDogWydub29wZW5lcicsICdub3JlZmVycmVyJ10uam9pbignICcpLFxuXHRcdFx0fSlcblx0XHRcdC50ZXh0KHRpdGxlKTtcblx0XHRpZiAoY2xpY2spIHtcblx0XHRcdGEub24oJ2NsaWNrJywgY2xpY2spO1xuXHRcdH1cblx0XHRpZiAoY2xhc3NuYW1lKSB7XG5cdFx0XHRhLmFkZENsYXNzKGNsYXNzbmFtZSk7XG5cdFx0fVxuXHRcdHJldHVybiAkKCc8c3Bhbj4nKS5hZGRDbGFzcygndG9vbHMtcmVkaXJlY3RfbGluaycpLmFwcGVuZChhKTtcblx0fSxcblx0YWRkTWV0aG9kcygkcGFyZW50LCBtZXRob2RzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0bGV0ICRjb250YWluZXIgPSAkcGFyZW50LmZpbmQoJz4gLnRvb2xzLXJlZGlyZWN0X21ldGhvZHMnKTtcblx0XHRjb25zdCBtZXRob2RFeGlzdCA9ICh7aHJlZn06IFJlZGlyZWN0TWV0aG9kKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRyZXR1cm4gJGNvbnRhaW5lci5maW5kKGBhW2hyZWY9JHtKU09OLnN0cmluZ2lmeShocmVmKX1dYCkubGVuZ3RoID4gMDtcblx0XHR9O1xuXHRcdGlmICgkY29udGFpbmVyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0JGNvbnRhaW5lciA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCd0b29scy1yZWRpcmVjdF9tZXRob2RzJykuYXBwZW5kVG8oJHBhcmVudCk7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgbWV0aG9kIG9mIG1ldGhvZHMpIHtcblx0XHRcdGlmICghbWV0aG9kRXhpc3QobWV0aG9kKSkge1xuXHRcdFx0XHRzZWxmLmJ1aWxkTGluayhtZXRob2QpLmFwcGVuZFRvKCRjb250YWluZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0YnVpbGRTZWxlY3Rpb24obWFpbiwgbWV0ZCwgbXQsIGRzYWIpIHtcblx0XHRjb25zdCBjb250ID0gJCgnPHNwYW4+Jyk7XG5cdFx0Y29uc3Qgc2VsZSA9ICQoJzxpbnB1dD4nKS5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JykuYXBwZW5kVG8oY29udCk7XG5cdFx0dGhpcy5idWlsZExpbmsobWFpbikuYXBwZW5kVG8oY29udCk7XG5cdFx0dGhpcy5hZGRNZXRob2RzKGNvbnQsIG1ldGQpO1xuXHRcdHNlbGUuZGF0YSgncGFnZS10aXRsZScsIG10KTtcblx0XHRpZiAoZHNhYikge1xuXHRcdFx0c2VsZS5wcm9wKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gY29udDtcblx0fSxcblx0bG9hZFZpZXcocmVsb2FkKSB7XG5cdFx0Y29uc3QgJGNvbnRhaW5lciA9IHRoaXMudGFicy52aWV3LmNvbnQ7XG5cdFx0dGhpcy5sb2FkVGFiQ29udChcblx0XHRcdCd2aWV3Jyxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubG9hZFJlZGlyZWN0KHdnUGFnZU5hbWUsICRjb250YWluZXIsIDApO1xuXHRcdFx0fSxcblx0XHRcdHJlbG9hZFxuXHRcdCk7XG5cdH0sXG5cdGxvYWRDcmVhdGUocmVsb2FkKSB7XG5cdFx0dGhpcy5sb2FkVGFiQ29udChcblx0XHRcdCdjcmVhdGUnLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5maW5kUmVkaXJlY3Qod2dQYWdlTmFtZSk7XG5cdFx0XHR9LFxuXHRcdFx0cmVsb2FkXG5cdFx0KTtcblx0fSxcblx0bG9hZFJlZGlyZWN0KHBhZ2VuYW1lLCBjb250YWluZXIsIGRlZXAsIGxvYWRlZCkge1xuXHRcdHRoaXMubG9hZGluZyhjb250YWluZXIpO1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGNvbnN0IHRvcCA9IGRlZXAgPyAkKCc8ZGw+JykuYXBwZW5kVG8oY29udGFpbmVyKSA6IGNvbnRhaW5lcjtcblx0XHRpZiAoIWxvYWRlZCkge1xuXHRcdFx0bG9hZGVkID0ge307XG5cdFx0XHRsb2FkZWRbcGFnZW5hbWVdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Y29uc3Qgb25DbGlja0ZpeCA9IChldmVudDogSlF1ZXJ5LkV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCBlbnRyeSA9ICQodGhpcykucGFyZW50cygnZGQsIHAnKS5maXJzdCgpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHNlbGYuY2xpY2tBY3Rpb24oZW50cnksIHRoaXMuZml4KTtcblx0XHR9O1xuXHRcdHZvaWQgYXBpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ3JlZGlyZWN0cycsXG5cdFx0XHRcdHRpdGxlczogcGFnZW5hbWUsXG5cdFx0XHRcdHJkbGltaXQ6ICdtYXgnLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRcdHNlbGYubG9hZGVkKGNvbnRhaW5lcik7XG5cdFx0XHRcdGxldCBoYXNfcmVkaXJlY3QgPSBmYWxzZTtcblx0XHRcdFx0Y29uc3QgZGVzYyA9ICQoJ3AuZGVzYycsIHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRjb25zdCBtYXhpbXVtUmVkaXJlY3REZXB0aCA9IDEwO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRpZiAocGFnZS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHtyZWRpcmVjdHN9ID0gcGFnZTtcblx0XHRcdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiByZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgcmR0aXRsZSA9IHRpdGxlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCB1bHRpdGxlID0gcmR0aXRsZS5yZXBsYWNlKC8gL2csICdfJyk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGVudHJ5ID0gKGRlZXAgPyAkKCc8ZGQ+JykgOiAkKCc8cD4nKSkuYXBwZW5kVG8odG9wKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbWV0aG9kczogUmVkaXJlY3RNZXRob2RbXSA9IFtcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmOiBtdy51dGlsLmdldFVybCh1bHRpdGxlLCB7YWN0aW9uOiAnZWRpdCd9KSxcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdyZWRpZWRpdCcpLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdF07XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGlzQ3ljbGVSZWRpcmVjdCA9IHJkdGl0bGUgaW4gbG9hZGVkO1xuXHRcdFx0XHRcdFx0XHRsb2FkZWRbcmR0aXRsZV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRpZiAoIWlzQ3ljbGVSZWRpcmVjdCAmJiBkZWVwKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWV0aG9kc1ttZXRob2RzLmxlbmd0aF0gPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmOiAnI2ZpeC1yZWRpcmVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFidmlld2ZpeCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xpY2s6IG9uQ2xpY2tGaXgsXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zdCAkY29udGFpbmVyID0gc2VsZlxuXHRcdFx0XHRcdFx0XHRcdC5idWlsZFNlbGVjdGlvbihcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZjogbXcudXRpbC5nZXRVcmwodWx0aXRsZSwge3JlZGlyZWN0OiAnbm8nfSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdG1ldGhvZHMsXG5cdFx0XHRcdFx0XHRcdFx0XHR1bHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0IWRlZXBcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZFRvKGVudHJ5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlzQ3ljbGVSZWRpcmVjdCkge1xuXHRcdFx0XHRcdFx0XHRcdCRjb250YWluZXIuYXBwZW5kKGA8c3BhbiBjbGFzcz1cImVycm9yXCI+JHtnZXRNZXNzYWdlKCdlcnJjeWNsZXJlZGlyZWN0Jyl9PC9zcGFuPmApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGRlZXAgPCBtYXhpbXVtUmVkaXJlY3REZXB0aCkge1xuXHRcdFx0XHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5sb2FkUmVkaXJlY3QocmR0aXRsZSwgZW50cnksIGRlZXAgKyAxLCBsb2FkZWQpO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGhhc19yZWRpcmVjdCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGhhc19yZWRpcmVjdCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaGFzX3JlZGlyZWN0ICYmIGRlZXAgPT09IDEpIHtcblx0XHRcdFx0XHRzZWxmLmFkZE1ldGhvZHMoZGVzYywgW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3NlbGVjdC1hbGwnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0YWxsJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFsbChzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWludmVyc2UnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0aW52ZXJzZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RJbnZlcnNlKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNmaXgtc2VsZWN0ZWQnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFidmlld2ZpeCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBY3Rpb24oc2VsZi50YWJzLnZpZXcuY29udCwgc2VsZi5maXgpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaGFzX3JlZGlyZWN0KSB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlV2l0aChzZWxmKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdFdpdGgoc2VsZik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG5cdH0sXG5cdGZpbmRWYXJpYW50cyhwYWdlbmFtZSwgdGl0bGVzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3Qgc3VmZml4UmVnID0gL14uKz8oKO+8iHxbIF9dXFwoKS4rPyhbKe+8iV0pKSQvO1xuXHRcdGxldCByZXRUaXRsZXM6IHN0cmluZ1tdID0gW107XG5cdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0XHRjb25zdCB4aHIgPSBhcGlcblx0XHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0cGFnZTogcGFnZW5hbWUsXG5cdFx0XHRcdFx0cHJvcDogJ2Rpc3BsYXl0aXRsZScsXG5cdFx0XHRcdFx0dXNlbGFuZzogdmFyaWFudCxcblx0XHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoe3BhcnNlfSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHtkaXNwbGF5dGl0bGV9ID0gcGFyc2U7XG5cdFx0XHRcdFx0Ly8gRXhhbXBsZTpcblx0XHRcdFx0XHQvLyAtIEJlZm9yZTogPHNwYW4gY2xhc3M9XCJtdy1wYWdlLXRpdGxlLW5hbWVzcGFjZVwiPuaxgumXu+eZvuenkTwvc3Bhbj48c3BhbiBjbGFzcz1cIm13LXBhZ2UtdGl0bGUtc2VwYXJhdG9yXCI+Ojwvc3Bhbj48c3BhbiBjbGFzcz1cIm13LXBhZ2UtdGl0bGUtbWFpblwiPuaymeebkjwvc3Bhbj5cblx0XHRcdFx0XHQvLyAtIEFmdGVyOiDmsYLpl7vnmb7np5E65rKZ55uSXG5cdFx0XHRcdFx0bGV0IHRpdGxlID0gJCgnPHNwYW4+JykuYXBwZW5kKGRpc3BsYXl0aXRsZSkuZXEoMCkudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0XHR0aXRsZSA9IGZpeE5hbWVzcGFjZSh0aXRsZSk7XG5cdFx0XHRcdFx0c2V0UmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCAne3vnroDnuYHph43lrprlkJF9fScsIFNVRkZJWF9BUFBFTkQpO1xuXHRcdFx0XHRcdHJldHVybiB0aXRsZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRkZWZlcnJlZHNbZGVmZXJyZWRzLmxlbmd0aF0gPSB4aHI7XG5cdFx0fVxuXHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKS50aGVuKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuXHRcdFx0Y29uc3Qgc3VmZml4ZXMgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgdGl0bGUgb2YgYXJncykge1xuXHRcdFx0XHRsZXQgc3VmZml4O1xuXHRcdFx0XHQvLyBmaW5kIHRpdGxlIHN1ZmZpeCxcblx0XHRcdFx0Ly8gZm9yIGV4YW1wbGUgXCIgKOa1juWNl+W4gilcIiB0byBcIuW4guS4reWMuiAo5rWO5Y2X5biCKVwiXG5cdFx0XHRcdGNvbnN0IHN1ZmZpeEFyciA9IHN1ZmZpeFJlZy5leGVjKHRpdGxlKTtcblx0XHRcdFx0aWYgKHN1ZmZpeEFyciAmJiBzdWZmaXhBcnIubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRcdFx0Wywgc3VmZml4XSA9IHN1ZmZpeEFycjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdWZmaXggPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXRUaXRsZXNbcmV0VGl0bGVzLmxlbmd0aF0gPSB0aXRsZTtcblx0XHRcdFx0c3VmZml4ZXNbc3VmZml4ZXMubGVuZ3RoXSA9IHN1ZmZpeDtcblx0XHRcdH1cblx0XHRcdC8vIGFwcGVuZCBzdWZmaXhlc1xuXHRcdFx0Zm9yIChjb25zdCBzdWZmaXggb2YgdW5pcXVlQXJyYXkoc3VmZml4ZXMpKSB7XG5cdFx0XHRcdHJldFRpdGxlcyA9IFtcblx0XHRcdFx0XHQuLi5yZXRUaXRsZXMsXG5cdFx0XHRcdFx0Li4udGl0bGVzLm1hcCgodGl0bGUpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IG1vZGlmaWVkVGl0bGUgPSBmaXhOYW1lc3BhY2UodGl0bGUpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHN1ZmZpeFJlZy50ZXN0KG1vZGlmaWVkVGl0bGUpID8gbW9kaWZpZWRUaXRsZSA6IG1vZGlmaWVkVGl0bGUgKyBzdWZmaXg7XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZWxmLmZpbmROb3RFeGlzdHModW5pcXVlQXJyYXkocmV0VGl0bGVzKSk7IC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHR9KTtcblx0fSxcblx0ZmluZE5vdEV4aXN0cyh0aXRsZXMpIHtcblx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRjb25zdCBleGNsdWRlcyA9IFsn55So5a2X5qih5byPJ107XG5cdFx0bGV0IGFsbHRpdGxlczogc3RyaW5nW10gPSBbXTtcblx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgVkFSSUFOVFMpIHtcblx0XHRcdGRlZmVycmVkc1tkZWZlcnJlZHMubGVuZ3RoXSA9IGFwaS5nZXQoe1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRleHQ6IHRpdGxlcyxcblx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0XHR0aXRsZTogJ01lZGlhV2lraTpHYWRnZXQtVG9vbHNSZWRpcmVjdC5qcy8tJyxcblx0XHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0XHR1c2VsYW5nOiB2YXJpYW50LFxuXHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKS50aGVuKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBbe3BhcnNlfV0gb2YgYXJncyBhcyBBcnJheTxbKHR5cGVvZiBhcmdzKVtudW1iZXJdXT4pIHtcblx0XHRcdFx0YWxsdGl0bGVzID0gWy4uLmFsbHRpdGxlcywgLi4uJChwYXJzZS50ZXh0KS50ZXh0KCkudHJpbSgpLnNwbGl0KCd8JyldO1xuXHRcdFx0fVxuXHRcdFx0YWxsdGl0bGVzID0gYWxsdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2KSA9PT0gaTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGFwaVxuXHRcdFx0XHQucG9zdCh7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdFx0dGl0bGVzOiBhbGx0aXRsZXMsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRcdFx0dGl0bGVzID0gW107XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7dGl0bGV9ID0gcGFnZTtcblx0XHRcdFx0XHRcdGlmIChwYWdlLm1pc3NpbmcgJiYgIWV4Y2x1ZGVzLmluY2x1ZGVzKHRpdGxlKSkge1xuXHRcdFx0XHRcdFx0XHRpZiAodGl0bGUgaW4gcmVkaXJlY3RFeGNsdWRlcykge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGV4Y2x1ZGUgc3BlY2lhbCB0aXRsZXNcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gdGl0bGU7XG5cdFx0XHRcdFx0XHRcdC8vIG9ubHkgc2V0IGRlZmF1bHQgc3VmZml4XG5cdFx0XHRcdFx0XHRcdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgJ3t75Yir5ZCN6YeN5a6a5ZCRfX0nLCBTVUZGSVhfU0VUREVGQVVMVCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxuXHRmaW5kUmVkaXJlY3QocGFnZW5hbWUpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBmcmNEZWZlcnJlZHMgPSBbXTtcblx0XHRjb25zdCBjb250YWluZXIgPSBzZWxmLnRhYnMuY3JlYXRlLmNvbnQ7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0Y29uc3QgJGNvbnRlbnQgPSAkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0ID4gZGl2Lm13LXBhcnNlci1vdXRwdXQnKTtcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRsZXQgdGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHNlbGYubG9hZGluZyhjb250YWluZXIpO1xuXHRcdGZvciAoY29uc3QgY2FsbGJhY2sgb2YgZmluZFJlZGlyZWN0Q2FsbGJhY2tzKSB7XG5cdFx0XHRjb25zdCByZXQgPSBjYWxsYmFjayhwYWdlbmFtZSwgJGNvbnRlbnQsIHRpdGxlcyk7XG5cdFx0XHRpZiAodHlwZW9mIHJldCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gcmV0O1xuXHRcdFx0fSBlbHNlIGlmICgnZG9uZScgaW4gcmV0KSB7XG5cdFx0XHRcdC8vIGlzIERlZmVycmVkXG5cdFx0XHRcdGZyY0RlZmVycmVkc1tmcmNEZWZlcnJlZHMubGVuZ3RoXSA9IHJldDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRpdGxlcyA9IHVuaXF1ZUFycmF5KFsuLi50aXRsZXMsIC4uLnJldF0pOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHJlbW92ZSBhbGwgZW1wdHkgdGl0bGVzXG5cdFx0dGl0bGVzID0gdGl0bGVzLm1hcCgodGl0bGUpID0+IHRpdGxlIHx8ICcnKS5maWx0ZXIoQm9vbGVhbik7XG5cdFx0Y29uc3Qgb25DbGlja0NyZWF0ZSA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCwgZXZlbnQ6IEpRdWVyeS5FdmVudCk6IHZvaWQge1xuXHRcdFx0Y29uc3QgZW50cnkgPSAkKHRoaXMpLnBhcmVudHMoJ3A6Zmlyc3QnKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRzZWxmLmNsaWNrQWN0aW9uKGVudHJ5LCBzZWxmLmNyZWF0ZSk7XG5cdFx0fTtcblx0XHQvLyBoYW5kbGVzIHRoZSBkZWZlcnJlZCBjYWxsYmFja3Ncblx0XHR2b2lkICQud2hlbiguLi5mcmNEZWZlcnJlZHMpXG5cdFx0XHQudGhlbigoLi4uYXJncykgPT4ge1xuXHRcdFx0XHRmb3IgKGNvbnN0IHJldCBvZiBhcmdzKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiByZXQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSByZXQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRpdGxlcyA9IHVuaXF1ZUFycmF5KFsuLi50aXRsZXMsIC4uLnJldF0pOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzZWxmLmZpbmRWYXJpYW50cyhwYWdlbmFtZSwgdGl0bGVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoZnZ0aXRsZXMpID0+IHtcblx0XHRcdFx0Ly8gYnVpbGQgSFRNTFxuXHRcdFx0XHRzZWxmLmxvYWRlZChjb250YWluZXIpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHRpdGxlIG9mIGZ2dGl0bGVzKSB7XG5cdFx0XHRcdFx0Y29uc3QgdWx0aXRsZSA9IHRpdGxlLnJlcGxhY2UoJyAnLCAnXycpO1xuXHRcdFx0XHRcdGNvbnN0IGVudHJ5ID0gJCgnPHA+JykuYXBwZW5kVG8oY29udGFpbmVyKTtcblx0XHRcdFx0XHRzZWxmLmJ1aWxkU2VsZWN0aW9uKFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiBtdy51dGlsLmdldFVybCh1bHRpdGxlLCB7YWN0aW9uOiAnZWRpdCcsIHJlZGxpbms6ICcxJ30pLFxuXHRcdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdFx0Y2xhc3NuYW1lOiAnbmV3Jyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRocmVmOiAnI2NyZWF0ZS1yZWRpcmVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYmNyZWF0ZXRpdGxlJyksXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6IG9uQ2xpY2tDcmVhdGUsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0dWx0aXRsZSxcblx0XHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdFx0KS5hcHBlbmRUbyhlbnRyeSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZGVzYyA9ICQoJ3AuZGVzYycsIGNvbnRhaW5lcik7XG5cdFx0XHRcdGlmIChmdnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2VsZi5hZGRNZXRob2RzKGRlc2MsIFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNzZWxlY3QtYWxsJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3NlbGVjdGFsbCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBbGwoY29udGFpbmVyKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWludmVyc2UnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0aW52ZXJzZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RJbnZlcnNlKGNvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI2NyZWF0ZS1zZWxlY3RlZCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBY3Rpb24oY29udGFpbmVyLCBzZWxmLmNyZWF0ZSk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZVdpdGgoc2VsZiwgW2Z2dGl0bGVzXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3RXaXRoKHNlbGYsIFtmdnRpdGxlc10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xuXHR9LFxufTtcblxuZXhwb3J0IHtUb29sc1JlZGlyZWN0LCBmaW5kUmVkaXJlY3RDYWxsYmFjaywgZmluZFJlZGlyZWN0QnlTZWxlY3Rvciwgc2V0UmVkaXJlY3RUZXh0U3VmZml4fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFRvb2xzUmVkaXJlY3QvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJjb25zdCBmaXhOYW1lc3BhY2UgPSAodGl0bGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZUlkcywgd2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IG5zUHJlZml4ZXMgPSBbXTtcblx0bGV0IG5zQ2Fub25QcmVmaXg6IHN0cmluZztcblx0bGV0IG5zUHJlZml4UGF0dGVybjogUmVnRXhwO1xuXG5cdGZvciAoY29uc3QgW3RleHQsIG5zaWRdIG9mIE9iamVjdC5lbnRyaWVzKHdnTmFtZXNwYWNlSWRzKSkge1xuXHRcdGlmIChuc2lkID09PSB3Z05hbWVzcGFjZU51bWJlciAmJiAhIXRleHQpIHtcblx0XHRcdG5zUHJlZml4ZXNbbnNQcmVmaXhlcy5sZW5ndGhdID0gdGV4dDtcblx0XHR9XG5cdH1cblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHQvLyBhcnRpY2xlc1xuXHRcdG5zQ2Fub25QcmVmaXggPSAnJztcblx0XHRuc1ByZWZpeFBhdHRlcm4gPSAvXi87XG5cdH0gZWxzZSB7XG5cdFx0bnNDYW5vblByZWZpeCA9IGAke3dnUGFnZU5hbWUuc3BsaXQoJzonKVswXX06YDtcblx0XHRuc1ByZWZpeFBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeKCR7bnNQcmVmaXhlcy5qb2luKCd8Jyl9KTpgLCAnaScpO1xuXHR9XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdFx0Ly8gZG8gbm90aGluZyBpZiBpdCdzIGFydGljbGVzXG5cdFx0cmV0dXJuIHRpdGxlO1xuXHR9IGVsc2UgaWYgKG5zUHJlZml4UGF0dGVybi50ZXN0KHRpdGxlKSkge1xuXHRcdC8vIGNhbm9uaXplIHRoZSBuYW1lc3BhY2Vcblx0XHRyZXR1cm4gdGl0bGUucmVwbGFjZShuc1ByZWZpeFBhdHRlcm4sIG5zQ2Fub25QcmVmaXgpO1xuXHR9XG5cdC8vIGRvbid0IGhhdmUgYSBuYW1lc3BhY2Vcblx0cmV0dXJuIG5zQ2Fub25QcmVmaXggKyB0aXRsZTtcbn07XG5cbmV4cG9ydCB7Zml4TmFtZXNwYWNlfTtcbiIsICJpbXBvcnQgdHlwZSB7TWVzc2FnZUtleX0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBnZXRNZXNzYWdlID0gKGtleTogTWVzc2FnZUtleSBleHRlbmRzIGB0b29sc3JlZGlyZWN0LSR7aW5mZXIgUH1gID8gUCA6IG5ldmVyLCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGZ1bGxLZXk6IHN0cmluZyA9IGB0b29sc3JlZGlyZWN0LSR7a2V5fWA7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGZ1bGxLZXksIC4uLmFyZ3MpLnBhcnNlKCkgOiBtdy5tZXNzYWdlKGZ1bGxLZXkpLnBsYWluKCk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7dHlwZSBBcHAgYXMgVnVlQXBwLCBjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL0FwcC52dWUnO1xuXG5pbnRlcmZhY2UgVG9vbHNSZWRpcmVjdENvbnRyb2xsZXIge1xuXHRhdHRhY2hDb250YWluZXJzKHZpZXdDb250YWluZXI6IEhUTUxFbGVtZW50LCBjcmVhdGVDb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZDtcbn1cblxuaW50ZXJmYWNlIFRvb2xzUmVkaXJlY3RJbnN0YW5jZSB7XG5cdG9wZW46ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IG1vdW50VG9vbHNSZWRpcmVjdCA9IChjb250cm9sbGVyOiBUb29sc1JlZGlyZWN0Q29udHJvbGxlcik6IFRvb2xzUmVkaXJlY3RJbnN0YW5jZSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQocm9vdCk7XG5cdGNvbnN0IGFwcDogVnVlQXBwPEVsZW1lbnQ+ID0gY3JlYXRlQXBwKEFwcCwge2NvbnRyb2xsZXJ9KTtcblx0Y29uc3QgaW5zdGFuY2UgPSBhcHAubW91bnQocm9vdCkgYXMgdW5rbm93biBhcyBUb29sc1JlZGlyZWN0SW5zdGFuY2U7XG5cdHJldHVybiBpbnN0YW5jZTtcbn07XG5cbmV4cG9ydCB7bW91bnRUb29sc1JlZGlyZWN0fTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhCdXR0b24sIENkeERpYWxvZ30gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge25leHRUaWNrLCByZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuaW1wb3J0IHtUb29sc1JlZGlyZWN0fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dldE1lc3NhZ2UnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0Y29udHJvbGxlcjogdHlwZW9mIFRvb2xzUmVkaXJlY3Q7XG59PigpO1xuXG5jb25zdCBpc09wZW4gPSByZWYoZmFsc2UpO1xuY29uc3QgYWN0aXZlVGFiID0gcmVmKCd2aWV3Jyk7XG5jb25zdCB2aWV3Q29udGFpbmVyID0gcmVmPEhUTUxFbGVtZW50PigpO1xuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gcmVmPEhUTUxFbGVtZW50PigpO1xuXG5jb25zdCBvcGVuID0gKCkgPT4ge1xuXHRpc09wZW4udmFsdWUgPSB0cnVlO1xufTtcblxuZGVmaW5lRXhwb3NlKHtvcGVufSk7XG5cbmNvbnN0IGxvYWRUYWIgPSBhc3luYyAodGFiOiBzdHJpbmcsIHJlbG9hZCA9IGZhbHNlKSA9PiB7XG5cdGF3YWl0IG5leHRUaWNrKCk7XG5cdGlmICghdmlld0NvbnRhaW5lci52YWx1ZSB8fCAhY3JlYXRlQ29udGFpbmVyLnZhbHVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHByb3BzLmNvbnRyb2xsZXIuYXR0YWNoQ29udGFpbmVycyh2aWV3Q29udGFpbmVyLnZhbHVlLCBjcmVhdGVDb250YWluZXIudmFsdWUpO1xuXHRpZiAodGFiID09PSAndmlldycpIHtcblx0XHRwcm9wcy5jb250cm9sbGVyLmxvYWRWaWV3KHJlbG9hZCk7XG5cdH0gZWxzZSB7XG5cdFx0cHJvcHMuY29udHJvbGxlci5sb2FkQ3JlYXRlKHJlbG9hZCk7XG5cdH1cbn07XG5cbndhdGNoKGFjdGl2ZVRhYiwgKHRhYikgPT4ge1xuXHR2b2lkIGxvYWRUYWIodGFiKTtcbn0pO1xuXG53YXRjaChpc09wZW4sIChvcGVuKSA9PiB7XG5cdGlmIChvcGVuKSB7XG5cdFx0dm9pZCBsb2FkVGFiKGFjdGl2ZVRhYi52YWx1ZSk7XG5cdH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGNkeC1kaWFsb2cgdi1tb2RlbDpvcGVuPVwiaXNPcGVuXCIgOnRpdGxlPVwiZ2V0TWVzc2FnZSgnZGxndGl0bGUnKVwiIDp1c2UtY2xvc2UtYnV0dG9uPVwidHJ1ZVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJ0b29scy1yZWRpcmVjdC10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj5cblx0XHRcdDxjZHgtYnV0dG9uXG5cdFx0XHRcdDp3ZWlnaHQ9XCJhY3RpdmVUYWIgPT09ICd2aWV3JyA/ICdwcmltYXJ5JyA6ICdxdWlldCdcIlxuXHRcdFx0XHRyb2xlPVwidGFiXCJcblx0XHRcdFx0OmFyaWEtc2VsZWN0ZWQ9XCJhY3RpdmVUYWIgPT09ICd2aWV3J1wiXG5cdFx0XHRcdEBjbGljaz1cImFjdGl2ZVRhYiA9ICd2aWV3J1wiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7IGdldE1lc3NhZ2UoJ3RhYnZpZXd0aXRsZScpIH19XG5cdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0XHQ8Y2R4LWJ1dHRvblxuXHRcdFx0XHQ6d2VpZ2h0PVwiYWN0aXZlVGFiID09PSAnY3JlYXRlJyA/ICdwcmltYXJ5JyA6ICdxdWlldCdcIlxuXHRcdFx0XHRyb2xlPVwidGFiXCJcblx0XHRcdFx0OmFyaWEtc2VsZWN0ZWQ9XCJhY3RpdmVUYWIgPT09ICdjcmVhdGUnXCJcblx0XHRcdFx0QGNsaWNrPVwiYWN0aXZlVGFiID0gJ2NyZWF0ZSdcIlxuXHRcdFx0PlxuXHRcdFx0XHR7eyBnZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpIH19XG5cdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdlxuXHRcdFx0di1zaG93PVwiYWN0aXZlVGFiID09PSAndmlldydcIlxuXHRcdFx0cmVmPVwidmlld0NvbnRhaW5lclwiXG5cdFx0XHRjbGFzcz1cImRpYWxvZy1yZWRpcmVjdCB0YWItcmVkaXJlY3RcIlxuXHRcdFx0cm9sZT1cInRhYnBhbmVsXCJcblx0XHQ+PC9kaXY+XG5cdFx0PGRpdlxuXHRcdFx0di1zaG93PVwiYWN0aXZlVGFiID09PSAnY3JlYXRlJ1wiXG5cdFx0XHRyZWY9XCJjcmVhdGVDb250YWluZXJcIlxuXHRcdFx0Y2xhc3M9XCJkaWFsb2ctcmVkaXJlY3QgdGFiLXJlZGlyZWN0XCJcblx0XHRcdHJvbGU9XCJ0YWJwYW5lbFwiXG5cdFx0PjwvZGl2PlxuXHQ8L2NkeC1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG4udG9vbHMtcmVkaXJlY3QtdGFicyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogNHB4O1xuXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZGlhbG9nLXJlZGlyZWN0IHtcblx0bWF4LWhlaWdodDogNjV2aDtcblx0b3ZlcmZsb3cteTogYXV0bztcblxuXHQ6ZGVlcCgubXctYWpheC1sb2FkZXIpIHtcblx0XHR0b3A6IDA7XG5cdH1cblxuXHQ6ZGVlcChhKSB7XG5cdFx0Y29sb3I6ICMwNjQ1YWQ7XG5cblx0XHQmOnZpc2l0ZWQge1xuXHRcdFx0Y29sb3I6ICMwYjAwODA7XG5cdFx0fVxuXG5cdFx0Ji5uZXcge1xuXHRcdFx0Y29sb3I6ICNjMjA7XG5cblx0XHRcdCY6dmlzaXRlZCB7XG5cdFx0XHRcdGNvbG9yOiAjYTU1ODU4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHZTaG93IGFzIF92U2hvdywgd2l0aERpcmVjdGl2ZXMgYXMgX3dpdGhEaXJlY3RpdmVzLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7XG4gIGNsYXNzOiBcInRvb2xzLXJlZGlyZWN0LXRhYnNcIixcbiAgcm9sZTogXCJ0YWJsaXN0XCJcbn1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7XG4gIHJlZjogXCJ2aWV3Q29udGFpbmVyXCIsXG4gIGNsYXNzOiBcImRpYWxvZy1yZWRpcmVjdCB0YWItcmVkaXJlY3RcIixcbiAgcm9sZTogXCJ0YWJwYW5lbFwiXG59XG5jb25zdCBfaG9pc3RlZF8zID0ge1xuICByZWY6IFwiY3JlYXRlQ29udGFpbmVyXCIsXG4gIGNsYXNzOiBcImRpYWxvZy1yZWRpcmVjdCB0YWItcmVkaXJlY3RcIixcbiAgcm9sZTogXCJ0YWJwYW5lbFwiXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4RGlhbG9nXCJdLCB7XG4gICAgb3BlbjogJHNldHVwLmlzT3BlbixcbiAgICBcIm9uVXBkYXRlOm9wZW5cIjogX2NhY2hlWzJdIHx8IChfY2FjaGVbMl0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNPcGVuKSA9ICRldmVudCkpLFxuICAgIHRpdGxlOiAkc2V0dXAuZ2V0TWVzc2FnZSgnZGxndGl0bGUnKSxcbiAgICBcInVzZS1jbG9zZS1idXR0b25cIjogdHJ1ZVxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICAgICAgICB3ZWlnaHQ6ICRzZXR1cC5hY3RpdmVUYWIgPT09ICd2aWV3JyA/ICdwcmltYXJ5JyA6ICdxdWlldCcsXG4gICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogJHNldHVwLmFjdGl2ZVRhYiA9PT0gJ3ZpZXcnLFxuICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgkc2V0dXAuYWN0aXZlVGFiID0gJ3ZpZXcnKSlcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgndGFidmlld3RpdGxlJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wid2VpZ2h0XCIsIFwiYXJpYS1zZWxlY3RlZFwiXSksXG4gICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICAgICAgICB3ZWlnaHQ6ICRzZXR1cC5hY3RpdmVUYWIgPT09ICdjcmVhdGUnID8gJ3ByaW1hcnknIDogJ3F1aWV0JyxcbiAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiAkc2V0dXAuYWN0aXZlVGFiID09PSAnY3JlYXRlJyxcbiAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoJHNldHVwLmFjdGl2ZVRhYiA9ICdjcmVhdGUnKSlcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgndGFiY3JlYXRldGl0bGUnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJ3ZWlnaHRcIiwgXCJhcmlhLXNlbGVjdGVkXCJdKVxuICAgICAgXSksXG4gICAgICBfd2l0aERpcmVjdGl2ZXMoX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBudWxsLCA1MTIgLyogTkVFRF9QQVRDSCAqLyksIFtcbiAgICAgICAgW192U2hvdywgJHNldHVwLmFjdGl2ZVRhYiA9PT0gJ3ZpZXcnXVxuICAgICAgXSksXG4gICAgICBfd2l0aERpcmVjdGl2ZXMoX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBudWxsLCA1MTIgLyogTkVFRF9QQVRDSCAqLyksIFtcbiAgICAgICAgW192U2hvdywgJHNldHVwLmFjdGl2ZVRhYiA9PT0gJ2NyZWF0ZSddXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJ0aXRsZVwiXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVG9vbHNSZWRpcmVjdFxcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxUb29sc1JlZGlyZWN0XFxcXEFwcC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVG9vbHNSZWRpcmVjdFxcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVG9vbHNSZWRpcmVjdFxcXFxBcHAudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LTU5YzgzMzllXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgdHlwZSB7TWVzc2FnZUtleX0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IHNldE1lc3NhZ2VzID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBERUZBVUxUX01FU1NBR0VTX0hBTlMgPSB7XG5cdFx0J3Rvb2xzcmVkaXJlY3QtYnRudGl0bGUnOiAn6YeN5a6a5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1idG5kZXNjJzogJ+WIm+W7uuWSjOeuoeeQhuatpOmhtemdoueahOmHjeWumuWQkScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZGxndGl0bGUnOiAn5Yib5bu65ZKM566h55CG6YeN5a6a5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1yZWRpbG9hZGluZyc6ICfmlbDmja7liqDovb3kuK3vvIzor7fnqI3lgJnigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXJlZGllZGl0JzogJ+e8lui+kScsXG5cdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0YWxsJzogJ+WFqOmAiScsXG5cdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0aW52ZXJzZSc6ICflj43pgIknLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXd0aXRsZSc6ICfmn6XnnIsnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdkZXNjJzogJ+S7peS4i+aYr+aMh+WQkeatpOmhtemdoueahOmHjeWumuWQkemhte+8micsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld25vdGZvdW5kJzogJ+ayoeacieaJvuWIsOS7u+S9leaMh+WQkeatpOmhtemdoueahOmHjeWumuWQkemhteOAgicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld211bHRpJzogJ+WkmumHjScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2ZpeCc6ICfkv67lpI0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeGxvYWRpbmcnOiAn6K+356iN5YCZ77yM5q2j5Zyo6Ieq5Yqo5L+u5aSN6YeN5a6a5ZCR4oCm4oCmJyxcblx0XHQndG9vbHNyZWRpcmVjdC1maXh0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeHN1bW1hcnknOiAn57yW6L6R5bel5YW377ya5L+u5aSN5aSa6YeN6YeN5a6a5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGV0aXRsZSc6ICfliJvlu7onLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWRlc2MnOiAn5Lul5LiL5piv5bCa5pyq5Yib5bu655qE6YeN5a6a5ZCR6aG177yaJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVub3Rmb3VuZCc6ICfmsqHmnInmib7liLDlj6/ku6XliJvlu7rnmoTph43lrprlkJHpobXjgIInLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWFsbCc6ICflhajpg6jliJvlu7onLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZWxvYWRpbmcnOiAn6K+356iN5YCZ77yM5q2j5Zyo6Ieq5Yqo5Yib5bu66YeN5a6a5ZCR4oCm4oCmJyxcblx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGV0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXRleHQtY2F0ZWdvcnknOiAne3vliIbnsbvph43lrprlkJF8JDF9fScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlc3VtbWFyeSc6ICfnvJbovpHlt6XlhbfvvJroh6rliqjliJvlu7rph43lrprlkJHliLBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWVycmN5Y2xlcmVkaXJlY3QnOiAn5peg5rOV6Ieq5Yqo5L+u5aSN77ya5Y+R546w5b6q546v6YeN5a6a5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1yZWZyZXNoJzogJ+WIt+aWsCcsXG5cdH0gc2F0aXNmaWVzIFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+O1xuXHRjb25zdCBERUZBVUxUX01FU1NBR0VTX0hBTlQgPSB7XG5cdFx0J3Rvb2xzcmVkaXJlY3QtYnRudGl0bGUnOiAn6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1idG5kZXNjJzogJ+WJteW7uuWSjOeuoeeQhuatpOmggemdoueahOmHjeaWsOWwjuWQkScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZGxndGl0bGUnOiAn5Ym15bu65ZKM566h55CG6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1yZWRpbG9hZGluZyc6ICfmlbjmk5rliqDovInkuK3vvIzoq4vnqI3lgJnigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXJlZGllZGl0JzogJ+e3qOi8rycsXG5cdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0YWxsJzogJ+WFqOmBuCcsXG5cdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0aW52ZXJzZSc6ICflj43pgbgnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXd0aXRsZSc6ICfmn6XnnIsnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdkZXNjJzogJ+S7peS4i+aYr+aMh+WQkeatpOmggemdoueahOmHjeaWsOWwjuWQkemgge+8micsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld25vdGZvdW5kJzogJ+aykuacieaJvuWIsOS7u+S9leaMh+WQkeatpOmggemdoueahOmHjeaWsOWwjuWQkemggeOAgicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld211bHRpJzogJ+WkmumHjScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2ZpeCc6ICfkv67lvqknLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeGxvYWRpbmcnOiAn6KuL56iN5YCZ77yM5q2j5Zyo6Ieq5YuV5L+u5b6p6YeN5paw5bCO5ZCR4oCm4oCmJyxcblx0XHQndG9vbHNyZWRpcmVjdC1maXh0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeHN1bW1hcnknOiAn57eo6Lyv5bel5YW377ya5L+u5b6p5aSa6YeN6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGV0aXRsZSc6ICflibXlu7onLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWRlc2MnOiAn5Lul5LiL5piv5bCa5pyq5Ym15bu655qE6YeN5paw5bCO5ZCR6aCB77yaJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVub3Rmb3VuZCc6ICfmspLmnInmib7liLDlj6/ku6XlibXlu7rnmoTph43mlrDlsI7lkJHpoIHjgIInLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWFsbCc6ICflhajpg6jlibXlu7onLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZWxvYWRpbmcnOiAn6KuL56iN5YCZ77yM5q2j5Zyo6Ieq5YuV5Ym15bu66YeN5paw5bCO5ZCR4oCm4oCmJyxcblx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGV0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXRleHQtY2F0ZWdvcnknOiAne3vliIbnsbvph43lrprlkJF8JDF9fScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlc3VtbWFyeSc6ICfnt6jovK/lt6XlhbfvvJroh6rli5XlibXlu7rph43mlrDlsI7lkJHliLBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWVycmN5Y2xlcmVkaXJlY3QnOiAn54Sh5rOV6Ieq5YuV5L+u5b6p77ya55m854++5b6q55Kw6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1yZWZyZXNoJzogJ+WIt+aWsCcsXG5cdH0gc2F0aXNmaWVzIFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+O1xuXG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoREVGQVVMVF9NRVNTQUdFU19IQU5UKTtcblx0fSBlbHNlIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoREVGQVVMVF9NRVNTQUdFU19IQU5TKTtcblx0fVxufTtcblxuZXhwb3J0IHtzZXRNZXNzYWdlc307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCx1QkFBQTtFQUFBRSx3QkFBQUEsTUFBQUE7RUFBQUMsc0JBQUFBLE1BQUFBO0VBQUFDLHVCQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQVAscUJBQUE7O0FDQ0MsSUFBQVEsU0FBVTtBQUNWLElBQUFDLFVBQVc7O0FDRlosSUFBTUMsZ0JBQWdCO0FBQ3RCLElBQU1DLGlCQUFpQjtBQUN2QixJQUFNQyxvQkFBb0I7QUFFMUIsSUFBTUMsV0FBVyxDQUFDLFdBQVcsV0FBVyxTQUFTLFNBQVMsU0FBUyxTQUFTLFNBQVMsT0FBTzs7QUNBNUYsSUFBQUMscUJBQXlDQyxRQUFBLGlCQUFBOztBQ0h6QyxJ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QkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLHlCQUF5QjtFQUMxQjtBQUNBLFFBQU1DLHdCQUF3QjtJQUM3QiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLG1DQUFtQztJQUNuQyw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyx5QkFBeUI7RUFDMUI7QUFFQSxNQUFJLENBQUMsV0FBVyxTQUFTLFNBQVMsT0FBTyxFQUFFN0UsU0FBUzBFLGNBQWMsR0FBRztBQUNwRXpTLE9BQUc2UyxTQUFTQyxJQUFJRixxQkFBcUI7RUFDdEMsT0FBTztBQUNONVMsT0FBRzZTLFNBQVNDLElBQUlILHFCQUFxQjtFQUN0QztBQUNEOztBWDNEQUQsWUFBWTtBQUVaLE1BQUEsR0FBSzdELG1CQUFBa0UsU0FBUSxFQUFFdk8sS0FBTTFCLFdBQXlDO0FBQzdELFFBQU07SUFBQ3dNO0VBQUksSUFBSTBDLG1CQUFtQnJQLGFBQWE7QUFDL0NBLGdCQUFjRSxLQUFLQyxPQUFPd00sSUFBSTtBQUMvQixDQUFDOyIsCiAgIm5hbWVzIjogWyJUb29sc1JlZGlyZWN0X2V4cG9ydHMiLCAiX19leHBvcnQiLCAiZmluZFJlZGlyZWN0QnlTZWxlY3RvciIsICJmaW5kUmVkaXJlY3RDYWxsYmFjayIsICJzZXRSZWRpcmVjdFRleHRTdWZmaXgiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgImFwaVRhZyIsICJ2ZXJzaW9uIiwgIlNVRkZJWF9BUFBFTkQiLCAiU1VGRklYX1JFUExBQ0UiLCAiU1VGRklYX1NFVERFRkFVTFQiLCAiVkFSSUFOVFMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiZml4TmFtZXNwYWNlIiwgInRpdGxlIiwgIndnTmFtZXNwYWNlSWRzIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnTmFtZXNwYWNlTnVtYmVyMiIsICJ3Z1BhZ2VOYW1lIiwgIndnUGFnZU5hbWUyIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAibnNQcmVmaXhlcyIsICJuc0Nhbm9uUHJlZml4IiwgIm5zUHJlZml4UGF0dGVybiIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibGVuZ3RoIiwgInRleHQiLCAibnNpZCIsICJzcGxpdCIsICJSZWdFeHAiLCAiam9pbiIsICJ0ZXN0IiwgInJlcGxhY2UiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYXJncyIsICJmdWxsS2V5IiwgIm1lc3NhZ2UiLCAicGFyc2UiLCAicGxhaW4iLCAiSVNfQ0FURUdPUlkiLCAiZmluZFJlZGlyZWN0Q2FsbGJhY2tzIiwgInBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4IiwgInJlZGlyZWN0RXhjbHVkZXMiLCAiY2FsbGJhY2siLCAiZ2VuZXJhdGVBcnJheSIsICJzZWxlY3RvciIsICIkIiwgIm1hcCIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJlcSIsICJ0cmltIiwgInN1ZmZpeCIsICJmbGFnIiwgImZsYWdfc2V0IiwgImZsYWdfYXBwZW5kIiwgIl9wYWdlV2l0aFJlZGlyZWN0VGV4dCIsICJUb29sc1JlZGlyZWN0IiwgInZhcmlhbnRzIiwgImluaXQiLCAiJGJvZHkiLCAib25PcGVuIiwgImJ1dHRvbiIsICJhZGRDbGFzcyIsICJhdHRyIiwgImNzcyIsICJhcHBlbmQiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiZmluZCIsICJhZnRlciIsICJhdHRhY2hDb250YWluZXJzIiwgInZpZXdDb250YWluZXIiLCAiY3JlYXRlQ29udGFpbmVyIiwgInRhYnMiLCAidmlldyIsICJjb250IiwgImxvYWRlZCIsICJjcmVhdGUiLCAiZml4IiwgInBhZ2VuYW1lcyIsICJzZWxmIiwgInJlbW92ZSIsICJsb2FkaW5nIiwgImJ1bGtFZGl0QnlSZWdleCIsICJ0aGVuIiwgInNldFRpbWVvdXQiLCAibG9hZFZpZXciLCAiYnVsa0VkaXQiLCAibG9hZENyZWF0ZSIsICJhZGRSZWRpcmVjdFRleHRTdWZmaXgiLCAiX3BhZ2VXaXRoUmVkaXJlY3RUZXh0MiIsICJ1bmlxdWVBcnJheSIsICJ0aXRsZXMiLCAic3VtbWFyeSIsICJmaWx0ZXIiLCAidiIsICJpIiwgImFyciIsICJpbmRleE9mIiwgInBvc3QiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicXVlcnkiLCAiZGVmZXJyZWRzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAicGFnZXMiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgInBvc3RXaXRoVG9rZW4iLCAidGFncyIsICJlcnIiLCAiZSIsICJmIiwgIndoZW4iLCAicmVnZXgiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAicGFnZSIsICJjb250ZW50IiwgInJldmlzaW9ucyIsICJzbG90cyIsICJuZXdDb250ZW50IiwgImJhc2V0aW1lc3RhbXAiLCAidGltZXN0YW1wIiwgImxvYWRUYWJDb250IiwgInRhYm5hbWUiLCAicmVsb2FkIiwgInRhYiIsICJodG1sIiwgIiRkZXNjIiwgImFwcGVuZFRvIiwgIiR0ZXh0IiwgImFwcGx5IiwgImZhaWwiLCAiYWx3YXlzIiwgImFkZE1ldGhvZHMiLCAiaHJlZiIsICJjbGljayIsICJjb250YWluZXIiLCAidG9Mb3dlckNhc2UiLCAicmVtb3ZlQ2xhc3MiLCAic2VsZWN0QWxsIiwgInNlbGVjdEludmVyc2UiLCAiZWFjaCIsICIkZWxlbWVudCIsICJzZWxlY3RBY3Rpb24iLCAiY2IiLCAicGFnZW5hbWUiLCAiZGF0YSIsICJjYWxsIiwgImNsaWNrQWN0aW9uIiwgImJ1aWxkTGluayIsICJjbGFzc25hbWUiLCAiYSIsICJ0YXJnZXQiLCAicmVsIiwgIiRwYXJlbnQiLCAibWV0aG9kcyIsICIkY29udGFpbmVyIiwgIm1ldGhvZEV4aXN0IiwgIkpTT04iLCAic3RyaW5naWZ5IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIm1ldGhvZCIsICJidWlsZFNlbGVjdGlvbiIsICJtYWluIiwgIm1ldGQiLCAibXQiLCAiZHNhYiIsICJzZWxlIiwgImxvYWRSZWRpcmVjdCIsICJmaW5kUmVkaXJlY3QiLCAiZGVlcCIsICJkZWZlcnJlZCIsICJEZWZlcnJlZCIsICJ0b3AiLCAib25DbGlja0ZpeCIsICJlbnRyeSIsICJwYXJlbnRzIiwgImZpcnN0IiwgInJkbGltaXQiLCAiaGFzX3JlZGlyZWN0IiwgImRlc2MiLCAibWF4aW11bVJlZGlyZWN0RGVwdGgiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAicmVkaXJlY3RzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInJkdGl0bGUiLCAidWx0aXRsZSIsICJ1dGlsIiwgImdldFVybCIsICJpc0N5Y2xlUmVkaXJlY3QiLCAicmVkaXJlY3QiLCAicmVzb2x2ZVdpdGgiLCAicmVqZWN0V2l0aCIsICJwcm9taXNlIiwgImZpbmRWYXJpYW50cyIsICJzdWZmaXhSZWciLCAicmV0VGl0bGVzIiwgIl9pMiIsICJfVkFSSUFOVFMiLCAidmFyaWFudCIsICJ4aHIiLCAidXNlbGFuZyIsICJkaXNwbGF5dGl0bGUiLCAic3VmZml4ZXMiLCAiX2kzIiwgIl9hcmdzIiwgInN1ZmZpeEFyciIsICJleGVjIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgIm1vZGlmaWVkVGl0bGUiLCAiZmluZE5vdEV4aXN0cyIsICJleGNsdWRlcyIsICJhbGx0aXRsZXMiLCAiX2k0IiwgIl9WQVJJQU5UUzIiLCAiY29udGVudG1vZGVsIiwgIl9pNSIsICJfYXJnczIiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAibWlzc2luZyIsICJpbmNsdWRlcyIsICJmcmNEZWZlcnJlZHMiLCAiJGNvbnRlbnQiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAicmV0IiwgIkJvb2xlYW4iLCAib25DbGlja0NyZWF0ZSIsICJfaTYiLCAiX2FyZ3MzIiwgImZ2dGl0bGVzIiwgIl9pdGVyYXRvcjAiLCAiX3N0ZXAwIiwgInJlZGxpbmsiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImltcG9ydF92dWU0IiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfdnVlMiIsICJwcm9wcyIsICJfX3Byb3BzIiwgImlzT3BlbiIsICJyZWYiLCAiYWN0aXZlVGFiIiwgIm9wZW4iLCAiX19leHBvc2UiLCAibG9hZFRhYiIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIm5leHRUaWNrIiwgImNvbnRyb2xsZXIiLCAiX3giLCAiYXJndW1lbnRzIiwgIndhdGNoIiwgIm9wZW4yIiwgImltcG9ydF92dWUzIiwgIl9ob2lzdGVkXzEiLCAiY2xhc3MiLCAicm9sZSIsICJfaG9pc3RlZF8yIiwgIl9ob2lzdGVkXzMiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUJsb2NrIiwgIiRldmVudCIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgImNyZWF0ZVZOb2RlIiwgIndlaWdodCIsICJvbkNsaWNrIiwgImNyZWF0ZVRleHRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiXyIsICJ3aXRoRGlyZWN0aXZlcyIsICJ2U2hvdyIsICJBcHBfZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIkFwcF9kZWZhdWx0MiIsICJtb3VudFRvb2xzUmVkaXJlY3QiLCAicm9vdCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImJvZHkiLCAiYXBwIiwgImNyZWF0ZUFwcCIsICJpbnN0YW5jZSIsICJtb3VudCIsICJ3Z1VzZXJMYW5ndWFnZSIsICJzZXRNZXNzYWdlcyIsICJERUZBVUxUX01FU1NBR0VTX0hBTlMiLCAiREVGQVVMVF9NRVNTQUdFU19IQU5UIiwgIm1lc3NhZ2VzIiwgInNldCIsICJnZXRCb2R5Il0KfQo=
