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
      }).then(({
        parse
      }) => {
        return $(parse.text).text().trim().split("|");
      });
    }
    return $.when(...deferreds).then((...titlesArr) => {
      for (var _i5 = 0, _titlesArr = titlesArr; _i5 < _titlesArr.length; _i5++) {
        const titles2 = _titlesArr[_i5];
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
    void $.when(...frcDeferreds).then((...responses) => {
      for (var _i6 = 0, _responses = responses; _i6 < _responses.length; _i6++) {
        const ret = _responses[_i6];
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QvVG9vbHNSZWRpcmVjdC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9vcHRpb25zLmpzb24iLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy91dGlsL2ZpeE5hbWVzcGFjZS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL3V0aWwvZ2V0TWVzc2FnZS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL3VpLnRzIiwgImRpc3QvVG9vbHNSZWRpcmVjdC9zcmMvVG9vbHNSZWRpcmVjdC9BcHAudnVlIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxUb29sc1JlZGlyZWN0XFxBcHAudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1Rvb2xzUmVkaXJlY3QvQXBwLnZ1ZSIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL21lc3NhZ2VzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vVG9vbHNSZWRpcmVjdC5sZXNzJztcbmltcG9ydCB7VG9vbHNSZWRpcmVjdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHttb3VudFRvb2xzUmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy91aSc7XG5pbXBvcnQge3NldE1lc3NhZ2VzfSBmcm9tICcuL21vZHVsZXMvbWVzc2FnZXMnO1xuXG5zZXRNZXNzYWdlcygpO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qge29wZW59ID0gbW91bnRUb29sc1JlZGlyZWN0KFRvb2xzUmVkaXJlY3QpO1xuXHRUb29sc1JlZGlyZWN0LmluaXQoJGJvZHksIG9wZW4pO1xufSk7XG5cbmV4cG9ydCB7ZmluZFJlZGlyZWN0Q2FsbGJhY2ssIGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IsIHNldFJlZGlyZWN0VGV4dFN1ZmZpeH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuIiwgIntcblx0XCJhcGlUYWdcIjogXCJUb29sc1JlZGlyZWN0XCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiY29uc3QgU1VGRklYX0FQUEVORCA9IDA7XG5jb25zdCBTVUZGSVhfUkVQTEFDRSA9IDE7XG5jb25zdCBTVUZGSVhfU0VUREVGQVVMVCA9IDI7XG5cbmNvbnN0IFZBUklBTlRTID0gWyd6aC1oYW5zJywgJ3poLWhhbnQnLCAnemgtY24nLCAnemgtaGsnLCAnemgtbW8nLCAnemgtc2cnLCAnemgtbXknLCAnemgtdHcnXTtcblxuZXhwb3J0IHtTVUZGSVhfQVBQRU5ELCBTVUZGSVhfUkVQTEFDRSwgU1VGRklYX1NFVERFRkFVTFQsIFZBUklBTlRTfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1JlZGlyZWN0Q2FsbGJhY2ssIFJlZGlyZWN0TWV0aG9kLCBUb29sc1JlZGlyZWN0QXBpfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7U1VGRklYX0FQUEVORCwgU1VGRklYX1JFUExBQ0UsIFNVRkZJWF9TRVRERUZBVUxULCBWQVJJQU5UU30gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXksIHVuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Zml4TmFtZXNwYWNlfSBmcm9tICcuL3V0aWwvZml4TmFtZXNwYWNlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi91dGlsL2dldE1lc3NhZ2UnO1xuY29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IElTX0NBVEVHT1JZID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0O1xubGV0IGZpbmRSZWRpcmVjdENhbGxiYWNrczogUmVkaXJlY3RDYWxsYmFja1tdID0gW107XG5jb25zdCBwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeDogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5jb25zdCByZWRpcmVjdEV4Y2x1ZGVzOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9O1xuXG4vKipcbiAqIEFkZCBuZXcgY3VzdG9tIGNhbGxiYWNrIGZvciBmaW5kaW5nIG5ldyBwb3RlbnRpYWwgcmVkaXJlY3QgdGl0bGVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIChwYWdlbmFtZSwgJGNvbnRlbnQsIHRpdGxlcykgPT4gdGl0bGUgbGlzdFxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gYXJnc1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5jb25zdCBmaW5kUmVkaXJlY3RDYWxsYmFjayA9IGZ1bmN0aW9uIChcblx0dGhpczogVG9vbHNSZWRpcmVjdEFwaSxcblx0Y2FsbGJhY2s6IFJlZGlyZWN0Q2FsbGJhY2ssXG5cdC4uLmFyZ3M6IHVua25vd25bXVxuKTogVG9vbHNSZWRpcmVjdEFwaSB7XG5cdGlmIChjYWxsYmFjaykge1xuXHRcdGZpbmRSZWRpcmVjdENhbGxiYWNrc1tmaW5kUmVkaXJlY3RDYWxsYmFja3MubGVuZ3RoXSA9IGNhbGxiYWNrO1xuXHR9IGVsc2Uge1xuXHRcdGZpbmRSZWRpcmVjdENhbGxiYWNrcyA9IGdlbmVyYXRlQXJyYXkoZmluZFJlZGlyZWN0Q2FsbGJhY2tzLCBjYWxsYmFjaywgLi4uYXJncykgYXMgUmVkaXJlY3RDYWxsYmFja1tdO1xuXHR9XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBGaW5kIG5ldyBwb3RlbnRpYWwgcmVkaXJlY3QgdGl0bGVzIHRocm91Z2ggc2VsZWN0b3IocylcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuY29uc3QgZmluZFJlZGlyZWN0QnlTZWxlY3RvciA9IGZ1bmN0aW9uICh0aGlzOiBUb29sc1JlZGlyZWN0QXBpLCBzZWxlY3Rvcjogc3RyaW5nKTogVG9vbHNSZWRpcmVjdEFwaSB7XG5cdC8qIEEgc2hvcnRjdXQgdG8gYWRkIENTUyBzZWxlY3RvcnMgYXMgcnVsZSB0byBmaW5kIG5ldyBwb3RlbnRpYWwgcmVkaXJlY3QgdGl0bGVzLiAqL1xuXHRmaW5kUmVkaXJlY3RDYWxsYmFja3NbZmluZFJlZGlyZWN0Q2FsbGJhY2tzLmxlbmd0aF0gPSAoKSA9PiB7XG5cdFx0cmV0dXJuICQoc2VsZWN0b3IpLm1hcCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gJChlbGVtZW50KS5lcSgwKS50ZXh0KCkudHJpbSgpIHx8IG51bGw7XG5cdFx0fSk7XG5cdH07XG5cdHJldHVybiB0aGlzO1xufTtcblxuY29uc3Qgc2V0UmVkaXJlY3RUZXh0U3VmZml4ID0gKHRpdGxlOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nLCBmbGFnPzogbnVtYmVyKTogdm9pZCA9PiB7XG5cdGxldCBmbGFnX3NldCA9IGZhbHNlO1xuXHRsZXQgZmxhZ19hcHBlbmQgPSBmYWxzZTtcblx0ZmxhZyB8fD0gU1VGRklYX0FQUEVORDsgLy8gZGVmYXVsdCBhcHBlbmRcblx0ZmxhZ19zZXQgPSBmbGFnID09PSBTVUZGSVhfUkVQTEFDRTtcblx0dGl0bGUgPSBmaXhOYW1lc3BhY2UodGl0bGUpO1xuXHRpZiAodGl0bGUgaW4gcGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXgpIHtcblx0XHRmbGFnX2FwcGVuZCA9IGZsYWcgPT09IFNVRkZJWF9BUFBFTkQ7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaWYgbm90IGV4aXN0LCBldmVyeSBmbGFnIGNhbiBzZXRcblx0XHRmbGFnX3NldCA9IHRydWU7XG5cdH1cblx0aWYgKGZsYWdfc2V0KSB7XG5cdFx0cGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXhbdGl0bGVdID0gZ2VuZXJhdGVBcnJheShzdWZmaXgpO1xuXHR9IGVsc2UgaWYgKGZsYWdfYXBwZW5kKSB7XG5cdFx0cGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXhbdGl0bGVdID0gZ2VuZXJhdGVBcnJheShwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0gPz8gW10sIHN1ZmZpeCkgYXMgc3RyaW5nW107XG5cdH1cbn07XG5cbmNvbnN0IFRvb2xzUmVkaXJlY3Q6IFRvb2xzUmVkaXJlY3RBcGkgPSB7XG5cdHZhcmlhbnRzOiBWQVJJQU5UUyxcblx0aW5pdCgkYm9keSwgb25PcGVuKSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ213LWxpc3QtaXRlbSBjb2xsYXBzaWJsZSB2ZWN0b3ItdGFiLW5vaWNvbicpXG5cdFx0XHQuYXR0cignaWQnLCAnY2EtcmVkaXJlY3QnKVxuXHRcdFx0LmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKVxuXHRcdFx0LmFwcGVuZCgkKCc8YT4nKS5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ2J0bmRlc2MnKSkudGV4dChnZXRNZXNzYWdlKCdidG50aXRsZScpKSk7XG5cdFx0YnV0dG9uLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdG9uT3BlbigpO1xuXHRcdH0pO1xuXHRcdCRib2R5LmZpbmQoJ2xpI2NhLWhpc3RvcnknKS5hZnRlcihidXR0b24pO1xuXHR9LFxuXHRhdHRhY2hDb250YWluZXJzKHZpZXdDb250YWluZXIsIGNyZWF0ZUNvbnRhaW5lcikge1xuXHRcdHRoaXMudGFicy52aWV3ID0ge2NvbnQ6ICQodmlld0NvbnRhaW5lciksIGxvYWRlZDogZmFsc2V9O1xuXHRcdHRoaXMudGFicy5jcmVhdGUgPSB7Y29udDogJChjcmVhdGVDb250YWluZXIpLCBsb2FkZWQ6IGZhbHNlfTtcblx0fSxcblx0dGFiczoge1xuXHRcdHZpZXc6IHtjb250OiAkKCksIGxvYWRlZDogZmFsc2V9LFxuXHRcdGNyZWF0ZToge2NvbnQ6ICQoKSwgbG9hZGVkOiBmYWxzZX0sXG5cdH0sXG5cdGZpeChwYWdlbmFtZXMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHQkKCdwLmRlc2MnLCBzZWxmLnRhYnMudmlldy5jb250KS50ZXh0KGdldE1lc3NhZ2UoJ2ZpeGxvYWRpbmcnKSk7XG5cdFx0JCgncFtjbGFzcyE9ZGVzY10nLCBzZWxmLnRhYnMudmlldy5jb250KS5yZW1vdmUoKTtcblx0XHRzZWxmLmxvYWRpbmcoc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0dm9pZCBzZWxmXG5cdFx0XHQuYnVsa0VkaXRCeVJlZ2V4KHBhZ2VuYW1lcywgL1xccypcXFtcXFsuKj8oIy4qPyk/XFxdXFxdLywgYCBbWyR7d2dQYWdlTmFtZX0kMV1dYCwgZ2V0TWVzc2FnZSgnZml4c3VtbWFyeScpKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHQvLyBkZWxheSBsb2FkIGJlZm9yZSB0aGUgYXN5bmNocm9ub3VzIHRhc2tzIG9uIHNlcnZlciBmaW5pc2hlZFxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmxvYWRlZChzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0XHRzZWxmLmxvYWRWaWV3KHRydWUpO1xuXHRcdFx0XHR9LCAzMDAwKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRjcmVhdGUocGFnZW5hbWVzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0JCgncC5kZXNjJywgc2VsZi50YWJzLmNyZWF0ZS5jb250KS50ZXh0KGdldE1lc3NhZ2UoJ2NyZWF0ZWxvYWRpbmcnKSk7XG5cdFx0JCgncFtjbGFzcyE9ZGVzY10nLCBzZWxmLnRhYnMuY3JlYXRlLmNvbnQpLnJlbW92ZSgpO1xuXHRcdHNlbGYubG9hZGluZyhzZWxmLnRhYnMuY3JlYXRlLmNvbnQpO1xuXHRcdHZvaWQgc2VsZlxuXHRcdFx0LmJ1bGtFZGl0KFxuXHRcdFx0XHRwYWdlbmFtZXMsXG5cdFx0XHRcdGdldE1lc3NhZ2UoSVNfQ0FURUdPUlkgPyAnY3JlYXRldGV4dC1jYXRlZ29yeScgOiAnY3JlYXRldGV4dCcpLnJlcGxhY2UoJyQxJywgd2dQYWdlTmFtZSksXG5cdFx0XHRcdGdldE1lc3NhZ2UoJ2NyZWF0ZXN1bW1hcnknKS5yZXBsYWNlKCckMScsIHdnUGFnZU5hbWUpXG5cdFx0XHQpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdC8vIGRlbGF5IGxvYWQgYmVmb3JlIHRoZSBhc3luY2hyb25vdXMgdGFza3Mgb24gc2VydmVyIGZpbmlzaGVkXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYubG9hZGVkKHNlbGYudGFicy5jcmVhdGUuY29udCk7XG5cdFx0XHRcdFx0c2VsZi50YWJzLnZpZXcubG9hZGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0c2VsZi5sb2FkQ3JlYXRlKHRydWUpO1xuXHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGFkZFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgdGV4dCkge1xuXHRcdGlmICh0aXRsZSBpbiBwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeCkge1xuXHRcdFx0dGV4dCArPSBgXFxuJHt1bmlxdWVBcnJheShwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0gPz8gW10pLmpvaW4oJ1xcbicpfWA7IC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHR9XG5cdFx0cmV0dXJuIHRleHQ7XG5cdH0sXG5cdGJ1bGtFZGl0KHRpdGxlcywgdGV4dCwgc3VtbWFyeSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5maWx0ZXIoKHYsIGksIGFycikgPT4ge1xuXHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKHYpID09PSBpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBhcGlcblx0XHRcdC5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdHRpdGxlcyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGV9IG9mIHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWRzW2RlZmVycmVkcy5sZW5ndGhdID0gYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHR0ZXh0OiBzZWxmLmFkZFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgdGV4dCksXG5cdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0dGFnczogT1BUSU9OUy5hcGlUYWcsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGJ1bGtFZGl0QnlSZWdleCh0aXRsZXMsIHJlZ2V4LCB0ZXh0LCBzdW1tYXJ5KSB7XG5cdFx0dGl0bGVzID0gdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YodikgPT09IGk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGFwaVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0XHR0aXRsZXMsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0Y29uc3QgZGVmZXJyZWRzOiBKUXVlcnkuUHJvbWlzZTx1bmtub3duPltdID0gW107XG5cdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGNvbnN0IHtjb250ZW50fSA9IHBhZ2UucmV2aXNpb25zWzBdLnNsb3RzWydtYWluJ107XG5cdFx0XHRcdFx0Y29uc3QgbmV3Q29udGVudCA9IGNvbnRlbnQucmVwbGFjZShyZWdleCwgdGV4dCk7XG5cdFx0XHRcdFx0ZGVmZXJyZWRzW2RlZmVycmVkcy5sZW5ndGhdID0gYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdFx0dGl0bGU6IHBhZ2UudGl0bGUsXG5cdFx0XHRcdFx0XHR0ZXh0OiBuZXdDb250ZW50LFxuXHRcdFx0XHRcdFx0dGFnczogT1BUSU9OUy5hcGlUYWcsXG5cdFx0XHRcdFx0XHRiYXNldGltZXN0YW1wOiBwYWdlLnJldmlzaW9uc1swXS50aW1lc3RhbXAsXG5cdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRsb2FkVGFiQ29udCh0YWJuYW1lLCBjYWxsYmFjaywgcmVsb2FkKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgdGFiID0gc2VsZi50YWJzW3RhYm5hbWVdO1xuXHRcdGlmIChyZWxvYWQpIHtcblx0XHRcdHRhYi5sb2FkZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCF0YWIubG9hZGVkKSB7XG5cdFx0XHR0YWIuY29udC5odG1sKCcnKTtcblx0XHRcdC8vXG5cdFx0XHRjb25zdCAkZGVzYyA9ICQoJzxwPicpXG5cdFx0XHRcdC5hZGRDbGFzcygnZGVzYycpXG5cdFx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rlc2MtdGV4dCcpLnRleHQoZ2V0TWVzc2FnZSgncmVkaWxvYWRpbmcnKSkpXG5cdFx0XHRcdC5hcHBlbmRUbyh0YWIuY29udCk7XG5cdFx0XHRjb25zdCAkdGV4dCA9ICRkZXNjLmZpbmQoJz4gLmRlc2MtdGV4dCcpO1xuXHRcdFx0Y2FsbGJhY2tcblx0XHRcdFx0LmFwcGx5KHNlbGYpXG5cdFx0XHRcdC5kb25lKCgpID0+IHtcblx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMuanNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0JHRleHQudGV4dChnZXRNZXNzYWdlKGB0YWIke3RhYm5hbWV9ZGVzY2ApKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmZhaWwoKCkgPT4ge1xuXHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBtZXNzYWdlcy5qc1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHQkdGV4dC50ZXh0KGdldE1lc3NhZ2UoYHRhYiR7dGFibmFtZX1ub3Rmb3VuZGApKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5hZGRNZXRob2RzKCRkZXNjLCBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjcmVmcmVzaCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdyZWZyZXNoJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLmxvYWRUYWJDb250KHRhYm5hbWUsIGNhbGxiYWNrLCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0dGFiLmxvYWRlZCA9IHRydWU7XG5cdFx0fVxuXHR9LFxuXHRsb2FkaW5nKGNvbnRhaW5lcikge1xuXHRcdGlmIChjb250YWluZXIucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCkgPT09ICdzcGFuJykge1xuXHRcdFx0Y29udGFpbmVyLmFkZENsYXNzKCdtdy1hamF4LWxvYWRlcicpO1xuXHRcdH0gZWxzZSBpZiAoJCgnc3Bhbi5tdy1hamF4LWxvYWRlcicsIGNvbnRhaW5lcikubGVuZ3RoID09PSAwKSB7XG5cdFx0XHQkKCc8c3Bhbj4nKS5hZGRDbGFzcygnbXctYWpheC1sb2FkZXInKS5hcHBlbmRUbyhjb250YWluZXIpO1xuXHRcdH1cblx0fSxcblx0bG9hZGVkKGNvbnRhaW5lcikge1xuXHRcdGlmIChjb250YWluZXIucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCkgPT09ICdzcGFuJykge1xuXHRcdFx0Y29udGFpbmVyLnJlbW92ZUNsYXNzKCdtdy1hamF4LWxvYWRlcicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCdzcGFuLm13LWFqYXgtbG9hZGVyJywgY29udGFpbmVyKS5yZW1vdmUoKTtcblx0XHR9XG5cdH0sXG5cdHNlbGVjdEFsbChjb250KSB7XG5cdFx0JCgnaW5wdXRbdHlwZT1jaGVja2JveF06bm90KDpkaXNhYmxlZCknLCBjb250KS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG5cdH0sXG5cdHNlbGVjdEludmVyc2UoY29udCkge1xuXHRcdCQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdOm5vdCg6ZGlzYWJsZWQpJywgY29udCkuZWFjaCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cdFx0XHQkZWxlbWVudC5wcm9wKCdjaGVja2VkJywgISRlbGVtZW50LnByb3AoJ2NoZWNrZWQnKSk7XG5cdFx0fSk7XG5cdH0sXG5cdHNlbGVjdEFjdGlvbihjb250LCBjYikge1xuXHRcdGNvbnN0IHBhZ2VuYW1lczogc3RyaW5nW10gPSBbXTtcblx0XHQkKCdpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkJywgY29udCkuZWFjaCgoX2luZGV4LCBwYWdlbmFtZSkgPT4ge1xuXHRcdFx0cGFnZW5hbWVzW3BhZ2VuYW1lcy5sZW5ndGhdID0gJChwYWdlbmFtZSkuZGF0YSgncGFnZS10aXRsZScpO1xuXHRcdH0pO1xuXHRcdGlmIChwYWdlbmFtZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y2IuY2FsbCh0aGlzLCBwYWdlbmFtZXMpO1xuXHRcdH1cblx0fSxcblx0Y2xpY2tBY3Rpb24oY29udCwgY2IpIHtcblx0XHRjb25zdCBwYWdlbmFtZSA9ICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIGNvbnQpLmRhdGEoJ3BhZ2UtdGl0bGUnKTtcblx0XHRjYi5jYWxsKHRoaXMsIFtwYWdlbmFtZV0pO1xuXHR9LFxuXHRidWlsZExpbmsoe3RpdGxlLCBocmVmLCBjbGljaywgY2xhc3NuYW1lfSkge1xuXHRcdGNvbnN0IGEgPSAkKCc8YT4nKVxuXHRcdFx0LmF0dHIoe1xuXHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0aHJlZixcblx0XHRcdFx0dGFyZ2V0OiAnX2JsYW5rJyxcblx0XHRcdFx0cmVsOiBbJ25vb3BlbmVyJywgJ25vcmVmZXJyZXInXS5qb2luKCcgJyksXG5cdFx0XHR9KVxuXHRcdFx0LnRleHQodGl0bGUpO1xuXHRcdGlmIChjbGljaykge1xuXHRcdFx0YS5vbignY2xpY2snLCBjbGljayk7XG5cdFx0fVxuXHRcdGlmIChjbGFzc25hbWUpIHtcblx0XHRcdGEuYWRkQ2xhc3MoY2xhc3NuYW1lKTtcblx0XHR9XG5cdFx0cmV0dXJuICQoJzxzcGFuPicpLmFkZENsYXNzKCd0b29scy1yZWRpcmVjdF9saW5rJykuYXBwZW5kKGEpO1xuXHR9LFxuXHRhZGRNZXRob2RzKCRwYXJlbnQsIG1ldGhvZHMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRsZXQgJGNvbnRhaW5lciA9ICRwYXJlbnQuZmluZCgnPiAudG9vbHMtcmVkaXJlY3RfbWV0aG9kcycpO1xuXHRcdGNvbnN0IG1ldGhvZEV4aXN0ID0gKHtocmVmfTogUmVkaXJlY3RNZXRob2QpOiBib29sZWFuID0+IHtcblx0XHRcdHJldHVybiAkY29udGFpbmVyLmZpbmQoYGFbaHJlZj0ke0pTT04uc3RyaW5naWZ5KGhyZWYpfV1gKS5sZW5ndGggPiAwO1xuXHRcdH07XG5cdFx0aWYgKCRjb250YWluZXIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHQkY29udGFpbmVyID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3Rvb2xzLXJlZGlyZWN0X21ldGhvZHMnKS5hcHBlbmRUbygkcGFyZW50KTtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBtZXRob2Qgb2YgbWV0aG9kcykge1xuXHRcdFx0aWYgKCFtZXRob2RFeGlzdChtZXRob2QpKSB7XG5cdFx0XHRcdHNlbGYuYnVpbGRMaW5rKG1ldGhvZCkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRidWlsZFNlbGVjdGlvbihtYWluLCBtZXRkLCBtdCwgZHNhYikge1xuXHRcdGNvbnN0IGNvbnQgPSAkKCc8c3Bhbj4nKTtcblx0XHRjb25zdCBzZWxlID0gJCgnPGlucHV0PicpLmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKS5hcHBlbmRUbyhjb250KTtcblx0XHR0aGlzLmJ1aWxkTGluayhtYWluKS5hcHBlbmRUbyhjb250KTtcblx0XHR0aGlzLmFkZE1ldGhvZHMoY29udCwgbWV0ZCk7XG5cdFx0c2VsZS5kYXRhKCdwYWdlLXRpdGxlJywgbXQpO1xuXHRcdGlmIChkc2FiKSB7XG5cdFx0XHRzZWxlLnByb3AoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0fVxuXHRcdHJldHVybiBjb250O1xuXHR9LFxuXHRsb2FkVmlldyhyZWxvYWQpIHtcblx0XHRjb25zdCAkY29udGFpbmVyID0gdGhpcy50YWJzLnZpZXcuY29udDtcblx0XHR0aGlzLmxvYWRUYWJDb250KFxuXHRcdFx0J3ZpZXcnLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5sb2FkUmVkaXJlY3Qod2dQYWdlTmFtZSwgJGNvbnRhaW5lciwgMCk7XG5cdFx0XHR9LFxuXHRcdFx0cmVsb2FkXG5cdFx0KTtcblx0fSxcblx0bG9hZENyZWF0ZShyZWxvYWQpIHtcblx0XHR0aGlzLmxvYWRUYWJDb250KFxuXHRcdFx0J2NyZWF0ZScsXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpbmRSZWRpcmVjdCh3Z1BhZ2VOYW1lKTtcblx0XHRcdH0sXG5cdFx0XHRyZWxvYWRcblx0XHQpO1xuXHR9LFxuXHRsb2FkUmVkaXJlY3QocGFnZW5hbWUsIGNvbnRhaW5lciwgZGVlcCwgbG9hZGVkKSB7XG5cdFx0dGhpcy5sb2FkaW5nKGNvbnRhaW5lcik7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgdG9wID0gZGVlcCA/ICQoJzxkbD4nKS5hcHBlbmRUbyhjb250YWluZXIpIDogY29udGFpbmVyO1xuXHRcdGlmICghbG9hZGVkKSB7XG5cdFx0XHRsb2FkZWQgPSB7fTtcblx0XHRcdGxvYWRlZFtwYWdlbmFtZV0gPSB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBvbkNsaWNrRml4ID0gKGV2ZW50OiBKUXVlcnkuRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IGVudHJ5ID0gJCh0aGlzKS5wYXJlbnRzKCdkZCwgcCcpLmZpcnN0KCk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c2VsZi5jbGlja0FjdGlvbihlbnRyeSwgdGhpcy5maXgpO1xuXHRcdH07XG5cdFx0dm9pZCBhcGlcblx0XHRcdC5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAncmVkaXJlY3RzJyxcblx0XHRcdFx0dGl0bGVzOiBwYWdlbmFtZSxcblx0XHRcdFx0cmRsaW1pdDogJ21heCcsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0c2VsZi5sb2FkZWQoY29udGFpbmVyKTtcblx0XHRcdFx0bGV0IGhhc19yZWRpcmVjdCA9IGZhbHNlO1xuXHRcdFx0XHRjb25zdCBkZXNjID0gJCgncC5kZXNjJywgc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0XHRcdGNvbnN0IG1heGltdW1SZWRpcmVjdERlcHRoID0gMTA7XG5cdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGlmIChwYWdlLnJlZGlyZWN0cykge1xuXHRcdFx0XHRcdFx0Y29uc3Qge3JlZGlyZWN0c30gPSBwYWdlO1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGV9IG9mIHJlZGlyZWN0cykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCByZHRpdGxlID0gdGl0bGU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHVsdGl0bGUgPSByZHRpdGxlLnJlcGxhY2UoLyAvZywgJ18nKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZW50cnkgPSAoZGVlcCA/ICQoJzxkZD4nKSA6ICQoJzxwPicpKS5hcHBlbmRUbyh0b3ApO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBtZXRob2RzOiBSZWRpcmVjdE1ldGhvZFtdID0gW1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY6IG13LnV0aWwuZ2V0VXJsKHVsdGl0bGUsIHthY3Rpb246ICdlZGl0J30pLFxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3JlZGllZGl0JyksXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgaXNDeWNsZVJlZGlyZWN0ID0gcmR0aXRsZSBpbiBsb2FkZWQ7XG5cdFx0XHRcdFx0XHRcdGxvYWRlZFtyZHRpdGxlXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdGlmICghaXNDeWNsZVJlZGlyZWN0ICYmIGRlZXApIHtcblx0XHRcdFx0XHRcdFx0XHRtZXRob2RzW21ldGhvZHMubGVuZ3RoXSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY6ICcjZml4LXJlZGlyZWN0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJ2aWV3Zml4JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGljazogb25DbGlja0ZpeCxcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRjb250YWluZXIgPSBzZWxmXG5cdFx0XHRcdFx0XHRcdFx0LmJ1aWxkU2VsZWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmOiBtdy51dGlsLmdldFVybCh1bHRpdGxlLCB7cmVkaXJlY3Q6ICdubyd9KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJkdGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0bWV0aG9kcyxcblx0XHRcdFx0XHRcdFx0XHRcdHVsdGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHQhZGVlcFxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kVG8oZW50cnkpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaXNDeWNsZVJlZGlyZWN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0JGNvbnRhaW5lci5hcHBlbmQoYDxzcGFuIGNsYXNzPVwiZXJyb3JcIj4ke2dldE1lc3NhZ2UoJ2VycmN5Y2xlcmVkaXJlY3QnKX08L3NwYW4+YCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZGVlcCA8IG1heGltdW1SZWRpcmVjdERlcHRoKSB7XG5cdFx0XHRcdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLmxvYWRSZWRpcmVjdChyZHRpdGxlLCBlbnRyeSwgZGVlcCArIDEsIGxvYWRlZCk7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aGFzX3JlZGlyZWN0ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aGFzX3JlZGlyZWN0ID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChoYXNfcmVkaXJlY3QgJiYgZGVlcCA9PT0gMSkge1xuXHRcdFx0XHRcdHNlbGYuYWRkTWV0aG9kcyhkZXNjLCBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWFsbCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdzZWxlY3RhbGwnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0QWxsKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNzZWxlY3QtaW52ZXJzZScsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdzZWxlY3RpbnZlcnNlJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEludmVyc2Uoc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI2ZpeC1zZWxlY3RlZCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJ2aWV3Zml4JyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFjdGlvbihzZWxmLnRhYnMudmlldy5jb250LCBzZWxmLmZpeCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChoYXNfcmVkaXJlY3QpIHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmVXaXRoKHNlbGYpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0V2l0aChzZWxmKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcblx0fSxcblx0ZmluZFZhcmlhbnRzKHBhZ2VuYW1lLCB0aXRsZXMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBzdWZmaXhSZWcgPSAvXi4rPygo77yIfFsgX11cXCgpLis/KFsp77yJXSkpJC87XG5cdFx0bGV0IHJldFRpdGxlczogc3RyaW5nW10gPSBbXTtcblx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgVkFSSUFOVFMpIHtcblx0XHRcdGNvbnN0IHhociA9IGFwaVxuXHRcdFx0XHQucG9zdCh7XG5cdFx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRwYWdlOiBwYWdlbmFtZSxcblx0XHRcdFx0XHRwcm9wOiAnZGlzcGxheXRpdGxlJyxcblx0XHRcdFx0XHR1c2VsYW5nOiB2YXJpYW50LFxuXHRcdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCh7cGFyc2V9KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qge2Rpc3BsYXl0aXRsZX0gPSBwYXJzZTtcblx0XHRcdFx0XHQvLyBFeGFtcGxlOlxuXHRcdFx0XHRcdC8vIC0gQmVmb3JlOiA8c3BhbiBjbGFzcz1cIm13LXBhZ2UtdGl0bGUtbmFtZXNwYWNlXCI+5rGC6Ze755m+56eRPC9zcGFuPjxzcGFuIGNsYXNzPVwibXctcGFnZS10aXRsZS1zZXBhcmF0b3JcIj46PC9zcGFuPjxzcGFuIGNsYXNzPVwibXctcGFnZS10aXRsZS1tYWluXCI+5rKZ55uSPC9zcGFuPlxuXHRcdFx0XHRcdC8vIC0gQWZ0ZXI6IOaxgumXu+eZvuenkTrmspnnm5Jcblx0XHRcdFx0XHRsZXQgdGl0bGUgPSAkKCc8c3Bhbj4nKS5hcHBlbmQoZGlzcGxheXRpdGxlKS5lcSgwKS50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRcdHRpdGxlID0gZml4TmFtZXNwYWNlKHRpdGxlKTtcblx0XHRcdFx0XHRzZXRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsICd7e+eugOe5gemHjeWumuWQkX19JywgU1VGRklYX0FQUEVORCk7XG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlO1xuXHRcdFx0XHR9KTtcblx0XHRcdGRlZmVycmVkc1tkZWZlcnJlZHMubGVuZ3RoXSA9IHhocjtcblx0XHR9XG5cdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpLnRoZW4oKC4uLmFyZ3M6IHN0cmluZ1tdKSA9PiB7XG5cdFx0XHRjb25zdCBzdWZmaXhlcyA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCB0aXRsZSBvZiBhcmdzKSB7XG5cdFx0XHRcdGxldCBzdWZmaXg7XG5cdFx0XHRcdC8vIGZpbmQgdGl0bGUgc3VmZml4LFxuXHRcdFx0XHQvLyBmb3IgZXhhbXBsZSBcIiAo5rWO5Y2X5biCKVwiIHRvIFwi5biC5Lit5Yy6ICjmtY7ljZfluIIpXCJcblx0XHRcdFx0Y29uc3Qgc3VmZml4QXJyID0gc3VmZml4UmVnLmV4ZWModGl0bGUpO1xuXHRcdFx0XHRpZiAoc3VmZml4QXJyICYmIHN1ZmZpeEFyci5sZW5ndGggPT09IDIpIHtcblx0XHRcdFx0XHRbLCBzdWZmaXhdID0gc3VmZml4QXJyO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1ZmZpeCA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldFRpdGxlc1tyZXRUaXRsZXMubGVuZ3RoXSA9IHRpdGxlO1xuXHRcdFx0XHRzdWZmaXhlc1tzdWZmaXhlcy5sZW5ndGhdID0gc3VmZml4O1xuXHRcdFx0fVxuXHRcdFx0Ly8gYXBwZW5kIHN1ZmZpeGVzXG5cdFx0XHRmb3IgKGNvbnN0IHN1ZmZpeCBvZiB1bmlxdWVBcnJheShzdWZmaXhlcykpIHtcblx0XHRcdFx0cmV0VGl0bGVzID0gW1xuXHRcdFx0XHRcdC4uLnJldFRpdGxlcyxcblx0XHRcdFx0XHQuLi50aXRsZXMubWFwKCh0aXRsZSkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgbW9kaWZpZWRUaXRsZSA9IGZpeE5hbWVzcGFjZSh0aXRsZSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc3VmZml4UmVnLnRlc3QobW9kaWZpZWRUaXRsZSkgPyBtb2RpZmllZFRpdGxlIDogbW9kaWZpZWRUaXRsZSArIHN1ZmZpeDtcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNlbGYuZmluZE5vdEV4aXN0cyh1bmlxdWVBcnJheShyZXRUaXRsZXMpKTsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdH0pO1xuXHR9LFxuXHRmaW5kTm90RXhpc3RzKHRpdGxlcykge1xuXHRcdGNvbnN0IGRlZmVycmVkcyA9IFtdO1xuXHRcdGNvbnN0IGV4Y2x1ZGVzID0gWyfnlKjlrZfmqKHlvI8nXTtcblx0XHRsZXQgYWxsdGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiBWQVJJQU5UUykge1xuXHRcdFx0ZGVmZXJyZWRzW2RlZmVycmVkcy5sZW5ndGhdID0gYXBpXG5cdFx0XHRcdC5nZXQoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0dGV4dDogdGl0bGVzLFxuXHRcdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdFx0XHR0aXRsZTogJ01lZGlhV2lraTpHYWRnZXQtVG9vbHNSZWRpcmVjdC5qcy8tJyxcblx0XHRcdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdFx0dXNlbGFuZzogdmFyaWFudCxcblx0XHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoe3BhcnNlfSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAkKHBhcnNlLnRleHQpLnRleHQoKS50cmltKCkuc3BsaXQoJ3wnKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKS50aGVuKCguLi50aXRsZXNBcnI6IHN0cmluZ1tdW10pID0+IHtcblx0XHRcdGZvciAoY29uc3QgdGl0bGVzIG9mIHRpdGxlc0Fycikge1xuXHRcdFx0XHRhbGx0aXRsZXMgPSBbLi4uYWxsdGl0bGVzXS5jb25jYXQodGl0bGVzKTtcblx0XHRcdH1cblx0XHRcdGFsbHRpdGxlcyA9IGFsbHRpdGxlcy5maWx0ZXIoKHYsIGksIGFycikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YodikgPT09IGk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBhcGlcblx0XHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHRcdHRpdGxlczogYWxsdGl0bGVzLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRcdHRpdGxlcyA9IFtdO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdFx0Y29uc3Qge3RpdGxlfSA9IHBhZ2U7XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5taXNzaW5nICYmICFleGNsdWRlcy5pbmNsdWRlcyh0aXRsZSkpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHRpdGxlIGluIHJlZGlyZWN0RXhjbHVkZXMpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBleGNsdWRlIHNwZWNpYWwgdGl0bGVzXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IHRpdGxlO1xuXHRcdFx0XHRcdFx0XHQvLyBvbmx5IHNldCBkZWZhdWx0IHN1ZmZpeFxuXHRcdFx0XHRcdFx0XHRzZXRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsICd7e+WIq+WQjemHjeWumuWQkX19JywgU1VGRklYX1NFVERFRkFVTFQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0fSxcblx0ZmluZFJlZGlyZWN0KHBhZ2VuYW1lKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgZnJjRGVmZXJyZWRzID0gW107XG5cdFx0Y29uc3QgY29udGFpbmVyID0gc2VsZi50YWJzLmNyZWF0ZS5jb250O1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdGNvbnN0ICRjb250ZW50ID0gJGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCA+IGRpdi5tdy1wYXJzZXItb3V0cHV0Jyk7XG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdFx0bGV0IHRpdGxlczogc3RyaW5nW10gPSBbXTtcblx0XHRzZWxmLmxvYWRpbmcoY29udGFpbmVyKTtcblx0XHRmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGZpbmRSZWRpcmVjdENhbGxiYWNrcykge1xuXHRcdFx0Y29uc3QgcmV0ID0gY2FsbGJhY2socGFnZW5hbWUsICRjb250ZW50LCB0aXRsZXMpO1xuXHRcdFx0aWYgKHR5cGVvZiByZXQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IHJldDtcblx0XHRcdH0gZWxzZSBpZiAoJ2RvbmUnIGluIHJldCkge1xuXHRcdFx0XHQvLyBpcyBEZWZlcnJlZFxuXHRcdFx0XHRmcmNEZWZlcnJlZHNbZnJjRGVmZXJyZWRzLmxlbmd0aF0gPSByZXQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aXRsZXMgPSB1bmlxdWVBcnJheShbLi4udGl0bGVzLCAuLi5yZXRdKTsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyByZW1vdmUgYWxsIGVtcHR5IHRpdGxlc1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5tYXAoKHRpdGxlKSA9PiB0aXRsZSB8fCAnJykuZmlsdGVyKEJvb2xlYW4pO1xuXHRcdGNvbnN0IG9uQ2xpY2tDcmVhdGUgPSBmdW5jdGlvbiAodGhpczogSFRNTEVsZW1lbnQsIGV2ZW50OiBKUXVlcnkuRXZlbnQpOiB2b2lkIHtcblx0XHRcdGNvbnN0IGVudHJ5ID0gJCh0aGlzKS5wYXJlbnRzKCdwOmZpcnN0Jyk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c2VsZi5jbGlja0FjdGlvbihlbnRyeSwgc2VsZi5jcmVhdGUpO1xuXHRcdH07XG5cdFx0Ly8gaGFuZGxlcyB0aGUgZGVmZXJyZWQgY2FsbGJhY2tzXG5cdFx0dm9pZCAkLndoZW4oLi4uZnJjRGVmZXJyZWRzKVxuXHRcdFx0LnRoZW4oKC4uLnJlc3BvbnNlcykgPT4ge1xuXHRcdFx0XHRmb3IgKGNvbnN0IHJldCBvZiByZXNwb25zZXMpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHJldCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IHJldDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGl0bGVzID0gdW5pcXVlQXJyYXkoWy4uLnRpdGxlcywgLi4ucmV0XSk7IC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHNlbGYuZmluZFZhcmlhbnRzKHBhZ2VuYW1lLCB0aXRsZXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKChmdnRpdGxlcykgPT4ge1xuXHRcdFx0XHQvLyBidWlsZCBIVE1MXG5cdFx0XHRcdHNlbGYubG9hZGVkKGNvbnRhaW5lcik7XG5cdFx0XHRcdGZvciAoY29uc3QgdGl0bGUgb2YgZnZ0aXRsZXMpIHtcblx0XHRcdFx0XHRjb25zdCB1bHRpdGxlID0gdGl0bGUucmVwbGFjZSgnICcsICdfJyk7XG5cdFx0XHRcdFx0Y29uc3QgZW50cnkgPSAkKCc8cD4nKS5hcHBlbmRUbyhjb250YWluZXIpO1xuXHRcdFx0XHRcdHNlbGYuYnVpbGRTZWxlY3Rpb24oXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6IG13LnV0aWwuZ2V0VXJsKHVsdGl0bGUsIHthY3Rpb246ICdlZGl0JywgcmVkbGluazogJzEnfSksXG5cdFx0XHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRjbGFzc25hbWU6ICduZXcnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGhyZWY6ICcjY3JlYXRlLXJlZGlyZWN0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFiY3JlYXRldGl0bGUnKSxcblx0XHRcdFx0XHRcdFx0XHRjbGljazogb25DbGlja0NyZWF0ZSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHR1bHRpdGxlLFxuXHRcdFx0XHRcdFx0ZmFsc2Vcblx0XHRcdFx0XHQpLmFwcGVuZFRvKGVudHJ5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBkZXNjID0gJCgncC5kZXNjJywgY29udGFpbmVyKTtcblx0XHRcdFx0aWYgKGZ2dGl0bGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzZWxmLmFkZE1ldGhvZHMoZGVzYywgW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3NlbGVjdC1hbGwnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0YWxsJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFsbChjb250YWluZXIpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNzZWxlY3QtaW52ZXJzZScsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdzZWxlY3RpbnZlcnNlJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEludmVyc2UoY29udGFpbmVyKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjY3JlYXRlLXNlbGVjdGVkJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYmNyZWF0ZXRpdGxlJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFjdGlvbihjb250YWluZXIsIHNlbGYuY3JlYXRlKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlV2l0aChzZWxmLCBbZnZ0aXRsZXNdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdFdpdGgoc2VsZiwgW2Z2dGl0bGVzXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG5cdH0sXG59O1xuXG5leHBvcnQge1Rvb2xzUmVkaXJlY3QsIGZpbmRSZWRpcmVjdENhbGxiYWNrLCBmaW5kUmVkaXJlY3RCeVNlbGVjdG9yLCBzZXRSZWRpcmVjdFRleHRTdWZmaXh9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgVG9vbHNSZWRpcmVjdC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImNvbnN0IGZpeE5hbWVzcGFjZSA9ICh0aXRsZTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlSWRzLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgbnNQcmVmaXhlcyA9IFtdO1xuXHRsZXQgbnNDYW5vblByZWZpeDogc3RyaW5nO1xuXHRsZXQgbnNQcmVmaXhQYXR0ZXJuOiBSZWdFeHA7XG5cblx0Zm9yIChjb25zdCBbdGV4dCwgbnNpZF0gb2YgT2JqZWN0LmVudHJpZXMod2dOYW1lc3BhY2VJZHMpKSB7XG5cdFx0aWYgKG5zaWQgPT09IHdnTmFtZXNwYWNlTnVtYmVyICYmICEhdGV4dCkge1xuXHRcdFx0bnNQcmVmaXhlc1tuc1ByZWZpeGVzLmxlbmd0aF0gPSB0ZXh0O1xuXHRcdH1cblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCkge1xuXHRcdC8vIGFydGljbGVzXG5cdFx0bnNDYW5vblByZWZpeCA9ICcnO1xuXHRcdG5zUHJlZml4UGF0dGVybiA9IC9eLztcblx0fSBlbHNlIHtcblx0XHRuc0Nhbm9uUHJlZml4ID0gYCR7d2dQYWdlTmFtZS5zcGxpdCgnOicpWzBdfTpgO1xuXHRcdG5zUHJlZml4UGF0dGVybiA9IG5ldyBSZWdFeHAoYF4oJHtuc1ByZWZpeGVzLmpvaW4oJ3wnKX0pOmAsICdpJyk7XG5cdH1cblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHQvLyBkbyBub3RoaW5nIGlmIGl0J3MgYXJ0aWNsZXNcblx0XHRyZXR1cm4gdGl0bGU7XG5cdH0gZWxzZSBpZiAobnNQcmVmaXhQYXR0ZXJuLnRlc3QodGl0bGUpKSB7XG5cdFx0Ly8gY2Fub25pemUgdGhlIG5hbWVzcGFjZVxuXHRcdHJldHVybiB0aXRsZS5yZXBsYWNlKG5zUHJlZml4UGF0dGVybiwgbnNDYW5vblByZWZpeCk7XG5cdH1cblx0Ly8gZG9uJ3QgaGF2ZSBhIG5hbWVzcGFjZVxuXHRyZXR1cm4gbnNDYW5vblByZWZpeCArIHRpdGxlO1xufTtcblxuZXhwb3J0IHtmaXhOYW1lc3BhY2V9O1xuIiwgImltcG9ydCB0eXBlIHtNZXNzYWdlS2V5fSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IGdldE1lc3NhZ2UgPSAoa2V5OiBNZXNzYWdlS2V5IGV4dGVuZHMgYHRvb2xzcmVkaXJlY3QtJHtpbmZlciBQfWAgPyBQIDogbmV2ZXIsIC4uLmFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nID0+IHtcblx0Y29uc3QgZnVsbEtleTogc3RyaW5nID0gYHRvb2xzcmVkaXJlY3QtJHtrZXl9YDtcblx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdHJldHVybiBhcmdzLmxlbmd0aCA/IG13Lm1lc3NhZ2UoZnVsbEtleSwgLi4uYXJncykucGFyc2UoKSA6IG13Lm1lc3NhZ2UoZnVsbEtleSkucGxhaW4oKTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5cbmludGVyZmFjZSBUb29sc1JlZGlyZWN0Q29udHJvbGxlciB7XG5cdGF0dGFjaENvbnRhaW5lcnModmlld0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGNyZWF0ZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgVG9vbHNSZWRpcmVjdEluc3RhbmNlIHtcblx0b3BlbjogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgbW91bnRUb29sc1JlZGlyZWN0ID0gKGNvbnRyb2xsZXI6IFRvb2xzUmVkaXJlY3RDb250cm9sbGVyKTogVG9vbHNSZWRpcmVjdEluc3RhbmNlID0+IHtcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcblx0Y29uc3QgYXBwOiBWdWVBcHA8RWxlbWVudD4gPSBjcmVhdGVBcHAoQXBwLCB7Y29udHJvbGxlcn0pO1xuXHRjb25zdCBpbnN0YW5jZSA9IGFwcC5tb3VudChyb290KSBhcyB1bmtub3duIGFzIFRvb2xzUmVkaXJlY3RJbnN0YW5jZTtcblx0cmV0dXJuIGluc3RhbmNlO1xufTtcblxuZXhwb3J0IHttb3VudFRvb2xzUmVkaXJlY3R9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeEJ1dHRvbiwgQ2R4RGlhbG9nfSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7bmV4dFRpY2ssIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge1Rvb2xzUmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvZ2V0TWVzc2FnZSc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRjb250cm9sbGVyOiB0eXBlb2YgVG9vbHNSZWRpcmVjdDtcbn0+KCk7XG5cbmNvbnN0IGlzT3BlbiA9IHJlZihmYWxzZSk7XG5jb25zdCBhY3RpdmVUYWIgPSByZWYoJ3ZpZXcnKTtcbmNvbnN0IHZpZXdDb250YWluZXIgPSByZWY8SFRNTEVsZW1lbnQ+KCk7XG5jb25zdCBjcmVhdGVDb250YWluZXIgPSByZWY8SFRNTEVsZW1lbnQ+KCk7XG5cbmNvbnN0IG9wZW4gPSAoKSA9PiB7XG5cdGlzT3Blbi52YWx1ZSA9IHRydWU7XG59O1xuXG5kZWZpbmVFeHBvc2Uoe29wZW59KTtcblxuY29uc3QgbG9hZFRhYiA9IGFzeW5jICh0YWI6IHN0cmluZywgcmVsb2FkID0gZmFsc2UpID0+IHtcblx0YXdhaXQgbmV4dFRpY2soKTtcblx0aWYgKCF2aWV3Q29udGFpbmVyLnZhbHVlIHx8ICFjcmVhdGVDb250YWluZXIudmFsdWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0cHJvcHMuY29udHJvbGxlci5hdHRhY2hDb250YWluZXJzKHZpZXdDb250YWluZXIudmFsdWUsIGNyZWF0ZUNvbnRhaW5lci52YWx1ZSk7XG5cdGlmICh0YWIgPT09ICd2aWV3Jykge1xuXHRcdHByb3BzLmNvbnRyb2xsZXIubG9hZFZpZXcocmVsb2FkKTtcblx0fSBlbHNlIHtcblx0XHRwcm9wcy5jb250cm9sbGVyLmxvYWRDcmVhdGUocmVsb2FkKTtcblx0fVxufTtcblxud2F0Y2goYWN0aXZlVGFiLCAodGFiKSA9PiB7XG5cdHZvaWQgbG9hZFRhYih0YWIpO1xufSk7XG5cbndhdGNoKGlzT3BlbiwgKG9wZW4pID0+IHtcblx0aWYgKG9wZW4pIHtcblx0XHR2b2lkIGxvYWRUYWIoYWN0aXZlVGFiLnZhbHVlKTtcblx0fVxufSk7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWRpYWxvZyB2LW1vZGVsOm9wZW49XCJpc09wZW5cIiA6dGl0bGU9XCJnZXRNZXNzYWdlKCdkbGd0aXRsZScpXCIgOnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCI+XG5cdFx0PGRpdiBjbGFzcz1cInRvb2xzLXJlZGlyZWN0LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPlxuXHRcdFx0PGNkeC1idXR0b25cblx0XHRcdFx0OndlaWdodD1cImFjdGl2ZVRhYiA9PT0gJ3ZpZXcnID8gJ3ByaW1hcnknIDogJ3F1aWV0J1wiXG5cdFx0XHRcdHJvbGU9XCJ0YWJcIlxuXHRcdFx0XHQ6YXJpYS1zZWxlY3RlZD1cImFjdGl2ZVRhYiA9PT0gJ3ZpZXcnXCJcblx0XHRcdFx0QGNsaWNrPVwiYWN0aXZlVGFiID0gJ3ZpZXcnXCJcblx0XHRcdD5cblx0XHRcdFx0e3sgZ2V0TWVzc2FnZSgndGFidmlld3RpdGxlJykgfX1cblx0XHRcdDwvY2R4LWJ1dHRvbj5cblx0XHRcdDxjZHgtYnV0dG9uXG5cdFx0XHRcdDp3ZWlnaHQ9XCJhY3RpdmVUYWIgPT09ICdjcmVhdGUnID8gJ3ByaW1hcnknIDogJ3F1aWV0J1wiXG5cdFx0XHRcdHJvbGU9XCJ0YWJcIlxuXHRcdFx0XHQ6YXJpYS1zZWxlY3RlZD1cImFjdGl2ZVRhYiA9PT0gJ2NyZWF0ZSdcIlxuXHRcdFx0XHRAY2xpY2s9XCJhY3RpdmVUYWIgPSAnY3JlYXRlJ1wiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7IGdldE1lc3NhZ2UoJ3RhYmNyZWF0ZXRpdGxlJykgfX1cblx0XHRcdDwvY2R4LWJ1dHRvbj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHR2LXNob3c9XCJhY3RpdmVUYWIgPT09ICd2aWV3J1wiXG5cdFx0XHRyZWY9XCJ2aWV3Q29udGFpbmVyXCJcblx0XHRcdGNsYXNzPVwiZGlhbG9nLXJlZGlyZWN0IHRhYi1yZWRpcmVjdFwiXG5cdFx0XHRyb2xlPVwidGFicGFuZWxcIlxuXHRcdD48L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHR2LXNob3c9XCJhY3RpdmVUYWIgPT09ICdjcmVhdGUnXCJcblx0XHRcdHJlZj1cImNyZWF0ZUNvbnRhaW5lclwiXG5cdFx0XHRjbGFzcz1cImRpYWxvZy1yZWRpcmVjdCB0YWItcmVkaXJlY3RcIlxuXHRcdFx0cm9sZT1cInRhYnBhbmVsXCJcblx0XHQ+PC9kaXY+XG5cdDwvY2R4LWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbi50b29scy1yZWRpcmVjdC10YWJzIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiA0cHg7XG5cdG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5kaWFsb2ctcmVkaXJlY3Qge1xuXHRtYXgtaGVpZ2h0OiA2NXZoO1xuXHRvdmVyZmxvdy15OiBhdXRvO1xuXG5cdDpkZWVwKC5tdy1hamF4LWxvYWRlcikge1xuXHRcdHRvcDogMDtcblx0fVxuXG5cdDpkZWVwKGEpIHtcblx0XHRjb2xvcjogIzA2NDVhZDtcblxuXHRcdCY6dmlzaXRlZCB7XG5cdFx0XHRjb2xvcjogIzBiMDA4MDtcblx0XHR9XG5cblx0XHQmLm5ldyB7XG5cdFx0XHRjb2xvcjogI2MyMDtcblxuXHRcdFx0Jjp2aXNpdGVkIHtcblx0XHRcdFx0Y29sb3I6ICNhNTU4NTg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgdlNob3cgYXMgX3ZTaG93LCB3aXRoRGlyZWN0aXZlcyBhcyBfd2l0aERpcmVjdGl2ZXMsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHtcbiAgY2xhc3M6IFwidG9vbHMtcmVkaXJlY3QtdGFic1wiLFxuICByb2xlOiBcInRhYmxpc3RcIlxufVxuY29uc3QgX2hvaXN0ZWRfMiA9IHtcbiAgcmVmOiBcInZpZXdDb250YWluZXJcIixcbiAgY2xhc3M6IFwiZGlhbG9nLXJlZGlyZWN0IHRhYi1yZWRpcmVjdFwiLFxuICByb2xlOiBcInRhYnBhbmVsXCJcbn1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7XG4gIHJlZjogXCJjcmVhdGVDb250YWluZXJcIixcbiAgY2xhc3M6IFwiZGlhbG9nLXJlZGlyZWN0IHRhYi1yZWRpcmVjdFwiLFxuICByb2xlOiBcInRhYnBhbmVsXCJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhEaWFsb2dcIl0sIHtcbiAgICBvcGVuOiAkc2V0dXAuaXNPcGVuLFxuICAgIFwib25VcGRhdGU6b3BlblwiOiBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc09wZW4pID0gJGV2ZW50KSksXG4gICAgdGl0bGU6ICRzZXR1cC5nZXRNZXNzYWdlKCdkbGd0aXRsZScpLFxuICAgIFwidXNlLWNsb3NlLWJ1dHRvblwiOiB0cnVlXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgIHdlaWdodDogJHNldHVwLmFjdGl2ZVRhYiA9PT0gJ3ZpZXcnID8gJ3ByaW1hcnknIDogJ3F1aWV0JyxcbiAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiAkc2V0dXAuYWN0aXZlVGFiID09PSAndmlldycsXG4gICAgICAgICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCRzZXR1cC5hY3RpdmVUYWIgPSAndmlldycpKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCd0YWJ2aWV3dGl0bGUnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJ3ZWlnaHRcIiwgXCJhcmlhLXNlbGVjdGVkXCJdKSxcbiAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgIHdlaWdodDogJHNldHVwLmFjdGl2ZVRhYiA9PT0gJ2NyZWF0ZScgPyAncHJpbWFyeScgOiAncXVpZXQnLFxuICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6ICRzZXR1cC5hY3RpdmVUYWIgPT09ICdjcmVhdGUnLFxuICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gJGV2ZW50ID0+ICgkc2V0dXAuYWN0aXZlVGFiID0gJ2NyZWF0ZScpKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIndlaWdodFwiLCBcImFyaWEtc2VsZWN0ZWRcIl0pXG4gICAgICBdKSxcbiAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIG51bGwsIDUxMiAvKiBORUVEX1BBVENIICovKSwgW1xuICAgICAgICBbX3ZTaG93LCAkc2V0dXAuYWN0aXZlVGFiID09PSAndmlldyddXG4gICAgICBdKSxcbiAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzMsIG51bGwsIDUxMiAvKiBORUVEX1BBVENIICovKSwgW1xuICAgICAgICBbX3ZTaG93LCAkc2V0dXAuYWN0aXZlVGFiID09PSAnY3JlYXRlJ11cbiAgICAgIF0pXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcInRpdGxlXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxUb29sc1JlZGlyZWN0XFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFRvb2xzUmVkaXJlY3RcXFxcQXBwLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxUb29sc1JlZGlyZWN0XFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxUb29sc1JlZGlyZWN0XFxcXEFwcC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNTljODMzOWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB0eXBlIHtNZXNzYWdlS2V5fSBmcm9tICcuL3R5cGVzJztcblxuY29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3Qgc2V0TWVzc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IERFRkFVTFRfTUVTU0FHRVNfSEFOUyA9IHtcblx0XHQndG9vbHNyZWRpcmVjdC1idG50aXRsZSc6ICfph43lrprlkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWJ0bmRlc2MnOiAn5Yib5bu65ZKM566h55CG5q2k6aG16Z2i55qE6YeN5a6a5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1kbGd0aXRsZSc6ICfliJvlu7rlkoznrqHnkIbph43lrprlkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXJlZGlsb2FkaW5nJzogJ+aVsOaNruWKoOi9veS4re+8jOivt+eojeWAmeKApuKApicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtcmVkaWVkaXQnOiAn57yW6L6RJyxcblx0XHQndG9vbHNyZWRpcmVjdC1zZWxlY3RhbGwnOiAn5YWo6YCJJyxcblx0XHQndG9vbHNyZWRpcmVjdC1zZWxlY3RpbnZlcnNlJzogJ+WPjemAiScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld3RpdGxlJzogJ+afpeeciycsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2Rlc2MnOiAn5Lul5LiL5piv5oyH5ZCR5q2k6aG16Z2i55qE6YeN5a6a5ZCR6aG177yaJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bm90Zm91bmQnOiAn5rKh5pyJ5om+5Yiw5Lu75L2V5oyH5ZCR5q2k6aG16Z2i55qE6YeN5a6a5ZCR6aG144CCJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bXVsdGknOiAn5aSa6YeNJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3Zml4JzogJ+S/ruWkjScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZml4bG9hZGluZyc6ICfor7fnqI3lgJnvvIzmraPlnKjoh6rliqjkv67lpI3ph43lrprlkJHigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeHRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZml4c3VtbWFyeSc6ICfnvJbovpHlt6XlhbfvvJrkv67lpI3lpJrph43ph43lrprlkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZXRpdGxlJzogJ+WIm+W7uicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlZGVzYyc6ICfku6XkuIvmmK/lsJrmnKrliJvlu7rnmoTph43lrprlkJHpobXvvJonLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZW5vdGZvdW5kJzogJ+ayoeacieaJvuWIsOWPr+S7peWIm+W7uueahOmHjeWumuWQkemhteOAgicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlYWxsJzogJ+WFqOmDqOWIm+W7uicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlbG9hZGluZyc6ICfor7fnqI3lgJnvvIzmraPlnKjoh6rliqjliJvlu7rph43lrprlkJHigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRldGV4dC1jYXRlZ29yeSc6ICd7e+WIhuexu+mHjeWumuWQkXwkMX19Jyxcblx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGVzdW1tYXJ5JzogJ+e8lui+keW3peWFt++8muiHquWKqOWIm+W7uumHjeWumuWQkeWIsFtbJDFdXScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZXJyY3ljbGVyZWRpcmVjdCc6ICfml6Dms5Xoh6rliqjkv67lpI3vvJrlj5HnjrDlvqrnjq/ph43lrprlkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXJlZnJlc2gnOiAn5Yi35pawJyxcblx0fSBzYXRpc2ZpZXMgUmVjb3JkPE1lc3NhZ2VLZXksIHN0cmluZz47XG5cdGNvbnN0IERFRkFVTFRfTUVTU0FHRVNfSEFOVCA9IHtcblx0XHQndG9vbHNyZWRpcmVjdC1idG50aXRsZSc6ICfph43mlrDlsI7lkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWJ0bmRlc2MnOiAn5Ym15bu65ZKM566h55CG5q2k6aCB6Z2i55qE6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1kbGd0aXRsZSc6ICflibXlu7rlkoznrqHnkIbph43mlrDlsI7lkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXJlZGlsb2FkaW5nJzogJ+aVuOaTmuWKoOi8ieS4re+8jOiri+eojeWAmeKApuKApicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtcmVkaWVkaXQnOiAn57eo6LyvJyxcblx0XHQndG9vbHNyZWRpcmVjdC1zZWxlY3RhbGwnOiAn5YWo6YG4Jyxcblx0XHQndG9vbHNyZWRpcmVjdC1zZWxlY3RpbnZlcnNlJzogJ+WPjemBuCcsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld3RpdGxlJzogJ+afpeeciycsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2Rlc2MnOiAn5Lul5LiL5piv5oyH5ZCR5q2k6aCB6Z2i55qE6YeN5paw5bCO5ZCR6aCB77yaJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bm90Zm91bmQnOiAn5rKS5pyJ5om+5Yiw5Lu75L2V5oyH5ZCR5q2k6aCB6Z2i55qE6YeN5paw5bCO5ZCR6aCB44CCJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bXVsdGknOiAn5aSa6YeNJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3Zml4JzogJ+S/ruW+qScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZml4bG9hZGluZyc6ICfoq4vnqI3lgJnvvIzmraPlnKjoh6rli5Xkv67lvqnph43mlrDlsI7lkJHigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeHRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZml4c3VtbWFyeSc6ICfnt6jovK/lt6XlhbfvvJrkv67lvqnlpJrph43ph43mlrDlsI7lkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZXRpdGxlJzogJ+WJteW7uicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlZGVzYyc6ICfku6XkuIvmmK/lsJrmnKrlibXlu7rnmoTph43mlrDlsI7lkJHpoIHvvJonLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZW5vdGZvdW5kJzogJ+aykuacieaJvuWIsOWPr+S7peWJteW7uueahOmHjeaWsOWwjuWQkemggeOAgicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlYWxsJzogJ+WFqOmDqOWJteW7uicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlbG9hZGluZyc6ICfoq4vnqI3lgJnvvIzmraPlnKjoh6rli5XlibXlu7rph43mlrDlsI7lkJHigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRldGV4dC1jYXRlZ29yeSc6ICd7e+WIhuexu+mHjeWumuWQkXwkMX19Jyxcblx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGVzdW1tYXJ5JzogJ+e3qOi8r+W3peWFt++8muiHquWLleWJteW7uumHjeaWsOWwjuWQkeWIsFtbJDFdXScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZXJyY3ljbGVyZWRpcmVjdCc6ICfnhKHms5Xoh6rli5Xkv67lvqnvvJrnmbznj77lvqrnkrDph43mlrDlsI7lkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXJlZnJlc2gnOiAn5Yi35pawJyxcblx0fSBzYXRpc2ZpZXMgUmVjb3JkPE1lc3NhZ2VLZXksIHN0cmluZz47XG5cblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdG13Lm1lc3NhZ2VzLnNldChERUZBVUxUX01FU1NBR0VTX0hBTlQpO1xuXHR9IGVsc2Uge1xuXHRcdG13Lm1lc3NhZ2VzLnNldChERUZBVUxUX01FU1NBR0VTX0hBTlMpO1xuXHR9XG59O1xuXG5leHBvcnQge3NldE1lc3NhZ2VzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx3QkFBQSxDQUFBO0FBQUFDLFNBQUFELHVCQUFBO0VBQUFFLHdCQUFBQSxNQUFBQTtFQUFBQyxzQkFBQUEsTUFBQUE7RUFBQUMsdUJBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBUCxxQkFBQTs7QUNDQyxJQUFBUSxTQUFVO0FBQ1YsSUFBQUMsVUFBVzs7QUNGWixJQUFNQyxnQkFBZ0I7QUFDdEIsSUFBTUMsaUJBQWlCO0FBQ3ZCLElBQU1DLG9CQUFvQjtBQUUxQixJQUFNQyxXQUFXLENBQUMsV0FBVyxXQUFXLFNBQVMsU0FBUyxTQUFTLFNBQVMsU0FBUyxPQUFPOztBQ0Q1RixJ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Q0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIscUNBQXFDO0lBQ3JDLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMseUJBQXlCO0VBQzFCO0FBQ0EsUUFBTUMsd0JBQXdCO0lBQzdCLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0IsbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLHFDQUFxQztJQUNyQywrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLHlCQUF5QjtFQUMxQjtBQUVBLE1BQUksQ0FBQyxXQUFXLFNBQVMsU0FBUyxPQUFPLEVBQUU5RSxTQUFTMkUsY0FBYyxHQUFHO0FBQ3BFNVMsT0FBR2dULFNBQVNDLElBQUlGLHFCQUFxQjtFQUN0QyxPQUFPO0FBQ04vUyxPQUFHZ1QsU0FBU0MsSUFBSUgscUJBQXFCO0VBQ3RDO0FBQ0Q7O0FYM0RBRCxZQUFZO0FBRVosTUFBQSxHQUFLN0QsbUJBQUFrRSxTQUFRLEVBQUUxTyxLQUFNMUIsV0FBeUM7QUFDN0QsUUFBTTtJQUFDMk07RUFBSSxJQUFJMEMsbUJBQW1CeFAsYUFBYTtBQUMvQ0EsZ0JBQWNFLEtBQUtDLE9BQU8yTSxJQUFJO0FBQy9CLENBQUM7IiwKICAibmFtZXMiOiBbIlRvb2xzUmVkaXJlY3RfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJmaW5kUmVkaXJlY3RCeVNlbGVjdG9yIiwgImZpbmRSZWRpcmVjdENhbGxiYWNrIiwgInNldFJlZGlyZWN0VGV4dFN1ZmZpeCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiYXBpVGFnIiwgInZlcnNpb24iLCAiU1VGRklYX0FQUEVORCIsICJTVUZGSVhfUkVQTEFDRSIsICJTVUZGSVhfU0VUREVGQVVMVCIsICJWQVJJQU5UUyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJmaXhOYW1lc3BhY2UiLCAidGl0bGUiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dOYW1lc3BhY2VOdW1iZXIyIiwgIndnUGFnZU5hbWUiLCAid2dQYWdlTmFtZTIiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJuc1ByZWZpeGVzIiwgIm5zQ2Fub25QcmVmaXgiLCAibnNQcmVmaXhQYXR0ZXJuIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAidGV4dCIsICJuc2lkIiwgInNwbGl0IiwgIlJlZ0V4cCIsICJqb2luIiwgInRlc3QiLCAicmVwbGFjZSIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhcmdzIiwgImZ1bGxLZXkiLCAibWVzc2FnZSIsICJwYXJzZSIsICJwbGFpbiIsICJJU19DQVRFR09SWSIsICJmaW5kUmVkaXJlY3RDYWxsYmFja3MiLCAicGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXgiLCAicmVkaXJlY3RFeGNsdWRlcyIsICJjYWxsYmFjayIsICJnZW5lcmF0ZUFycmF5IiwgInNlbGVjdG9yIiwgIiQiLCAibWFwIiwgIl9pbmRleCIsICJlbGVtZW50IiwgImVxIiwgInRyaW0iLCAic3VmZml4IiwgImZsYWciLCAiZmxhZ19zZXQiLCAiZmxhZ19hcHBlbmQiLCAiX3BhZ2VXaXRoUmVkaXJlY3RUZXh0IiwgIlRvb2xzUmVkaXJlY3QiLCAidmFyaWFudHMiLCAiaW5pdCIsICIkYm9keSIsICJvbk9wZW4iLCAiYnV0dG9uIiwgImFkZENsYXNzIiwgImF0dHIiLCAiY3NzIiwgImFwcGVuZCIsICJvbiIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJmaW5kIiwgImFmdGVyIiwgImF0dGFjaENvbnRhaW5lcnMiLCAidmlld0NvbnRhaW5lciIsICJjcmVhdGVDb250YWluZXIiLCAidGFicyIsICJ2aWV3IiwgImNvbnQiLCAibG9hZGVkIiwgImNyZWF0ZSIsICJmaXgiLCAicGFnZW5hbWVzIiwgInNlbGYiLCAicmVtb3ZlIiwgImxvYWRpbmciLCAiYnVsa0VkaXRCeVJlZ2V4IiwgInRoZW4iLCAic2V0VGltZW91dCIsICJsb2FkVmlldyIsICJidWxrRWRpdCIsICJsb2FkQ3JlYXRlIiwgImFkZFJlZGlyZWN0VGV4dFN1ZmZpeCIsICJfcGFnZVdpdGhSZWRpcmVjdFRleHQyIiwgInVuaXF1ZUFycmF5IiwgInRpdGxlcyIsICJzdW1tYXJ5IiwgImZpbHRlciIsICJ2IiwgImkiLCAiYXJyIiwgImluZGV4T2YiLCAicG9zdCIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJxdWVyeSIsICJkZWZlcnJlZHMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJwYWdlcyIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAicG9zdFdpdGhUb2tlbiIsICJ0YWdzIiwgImVyciIsICJlIiwgImYiLCAid2hlbiIsICJyZWdleCIsICJydnByb3AiLCAicnZzbG90cyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJwYWdlIiwgImNvbnRlbnQiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm5ld0NvbnRlbnQiLCAiYmFzZXRpbWVzdGFtcCIsICJ0aW1lc3RhbXAiLCAibG9hZFRhYkNvbnQiLCAidGFibmFtZSIsICJyZWxvYWQiLCAidGFiIiwgImh0bWwiLCAiJGRlc2MiLCAiYXBwZW5kVG8iLCAiJHRleHQiLCAiYXBwbHkiLCAiZmFpbCIsICJhbHdheXMiLCAiYWRkTWV0aG9kcyIsICJocmVmIiwgImNsaWNrIiwgImNvbnRhaW5lciIsICJ0b0xvd2VyQ2FzZSIsICJyZW1vdmVDbGFzcyIsICJzZWxlY3RBbGwiLCAic2VsZWN0SW52ZXJzZSIsICJlYWNoIiwgIiRlbGVtZW50IiwgInNlbGVjdEFjdGlvbiIsICJjYiIsICJwYWdlbmFtZSIsICJkYXRhIiwgImNhbGwiLCAiY2xpY2tBY3Rpb24iLCAiYnVpbGRMaW5rIiwgImNsYXNzbmFtZSIsICJhIiwgInRhcmdldCIsICJyZWwiLCAiJHBhcmVudCIsICJtZXRob2RzIiwgIiRjb250YWluZXIiLCAibWV0aG9kRXhpc3QiLCAiSlNPTiIsICJzdHJpbmdpZnkiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAibWV0aG9kIiwgImJ1aWxkU2VsZWN0aW9uIiwgIm1haW4iLCAibWV0ZCIsICJtdCIsICJkc2FiIiwgInNlbGUiLCAibG9hZFJlZGlyZWN0IiwgImZpbmRSZWRpcmVjdCIsICJkZWVwIiwgImRlZmVycmVkIiwgIkRlZmVycmVkIiwgInRvcCIsICJvbkNsaWNrRml4IiwgImVudHJ5IiwgInBhcmVudHMiLCAiZmlyc3QiLCAicmRsaW1pdCIsICJoYXNfcmVkaXJlY3QiLCAiZGVzYyIsICJtYXhpbXVtUmVkaXJlY3REZXB0aCIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJyZWRpcmVjdHMiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAicmR0aXRsZSIsICJ1bHRpdGxlIiwgInV0aWwiLCAiZ2V0VXJsIiwgImlzQ3ljbGVSZWRpcmVjdCIsICJyZWRpcmVjdCIsICJyZXNvbHZlV2l0aCIsICJyZWplY3RXaXRoIiwgInByb21pc2UiLCAiZmluZFZhcmlhbnRzIiwgInN1ZmZpeFJlZyIsICJyZXRUaXRsZXMiLCAiX2kyIiwgIl9WQVJJQU5UUyIsICJ2YXJpYW50IiwgInhociIsICJ1c2VsYW5nIiwgImRpc3BsYXl0aXRsZSIsICJzdWZmaXhlcyIsICJfaTMiLCAiX2FyZ3MiLCAic3VmZml4QXJyIiwgImV4ZWMiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAibW9kaWZpZWRUaXRsZSIsICJmaW5kTm90RXhpc3RzIiwgImV4Y2x1ZGVzIiwgImFsbHRpdGxlcyIsICJfaTQiLCAiX1ZBUklBTlRTMiIsICJjb250ZW50bW9kZWwiLCAidGl0bGVzQXJyIiwgIl9pNSIsICJfdGl0bGVzQXJyIiwgInRpdGxlczIiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAibWlzc2luZyIsICJpbmNsdWRlcyIsICJmcmNEZWZlcnJlZHMiLCAiJGNvbnRlbnQiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAicmV0IiwgIkJvb2xlYW4iLCAib25DbGlja0NyZWF0ZSIsICJyZXNwb25zZXMiLCAiX2k2IiwgIl9yZXNwb25zZXMiLCAiZnZ0aXRsZXMiLCAiX2l0ZXJhdG9yMCIsICJfc3RlcDAiLCAicmVkbGluayIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiaW1wb3J0X3Z1ZTQiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF92dWUyIiwgInByb3BzIiwgIl9fcHJvcHMiLCAiaXNPcGVuIiwgInJlZiIsICJhY3RpdmVUYWIiLCAib3BlbiIsICJfX2V4cG9zZSIsICJsb2FkVGFiIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAibmV4dFRpY2siLCAiY29udHJvbGxlciIsICJfeCIsICJhcmd1bWVudHMiLCAid2F0Y2giLCAib3BlbjIiLCAiaW1wb3J0X3Z1ZTMiLCAiX2hvaXN0ZWRfMSIsICJjbGFzcyIsICJyb2xlIiwgIl9ob2lzdGVkXzIiLCAiX2hvaXN0ZWRfMyIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAiJGV2ZW50IiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiY3JlYXRlVk5vZGUiLCAid2VpZ2h0IiwgIm9uQ2xpY2siLCAiY3JlYXRlVGV4dFZOb2RlIiwgInRvRGlzcGxheVN0cmluZyIsICJfIiwgIndpdGhEaXJlY3RpdmVzIiwgInZTaG93IiwgIkFwcF9kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiQXBwX2RlZmF1bHQyIiwgIm1vdW50VG9vbHNSZWRpcmVjdCIsICJyb290IiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiYm9keSIsICJhcHAiLCAiY3JlYXRlQXBwIiwgImluc3RhbmNlIiwgIm1vdW50IiwgIndnVXNlckxhbmd1YWdlIiwgInNldE1lc3NhZ2VzIiwgIkRFRkFVTFRfTUVTU0FHRVNfSEFOUyIsICJERUZBVUxUX01FU1NBR0VTX0hBTlQiLCAibWVzc2FnZXMiLCAic2V0IiwgImdldEJvZHkiXQp9Cg==
