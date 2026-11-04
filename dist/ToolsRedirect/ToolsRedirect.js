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
    return $.when(...deferreds).then((...responses) => {
      for (var _i5 = 0, _responses = responses; _i5 < _responses.length; _i5++) {
        const {
          parse
        } = _responses[_i5];
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
    void $.when(...frcDeferreds).then((...responses) => {
      for (var _i6 = 0, _responses2 = responses; _i6 < _responses2.length; _i6++) {
        const ret = _responses2[_i6];
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QvVG9vbHNSZWRpcmVjdC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9vcHRpb25zLmpzb24iLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy91dGlsL2ZpeE5hbWVzcGFjZS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL3V0aWwvZ2V0TWVzc2FnZS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL3VpLnRzIiwgImRpc3QvVG9vbHNSZWRpcmVjdC9zcmMvVG9vbHNSZWRpcmVjdC9BcHAudnVlIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxUb29sc1JlZGlyZWN0XFxBcHAudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1Rvb2xzUmVkaXJlY3QvQXBwLnZ1ZSIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL21lc3NhZ2VzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vVG9vbHNSZWRpcmVjdC5sZXNzJztcbmltcG9ydCB7VG9vbHNSZWRpcmVjdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHttb3VudFRvb2xzUmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy91aSc7XG5pbXBvcnQge3NldE1lc3NhZ2VzfSBmcm9tICcuL21vZHVsZXMvbWVzc2FnZXMnO1xuXG5zZXRNZXNzYWdlcygpO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qge29wZW59ID0gbW91bnRUb29sc1JlZGlyZWN0KFRvb2xzUmVkaXJlY3QpO1xuXHRUb29sc1JlZGlyZWN0LmluaXQoJGJvZHksIG9wZW4pO1xufSk7XG5cbmV4cG9ydCB7ZmluZFJlZGlyZWN0Q2FsbGJhY2ssIGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IsIHNldFJlZGlyZWN0VGV4dFN1ZmZpeH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuIiwgIntcblx0XCJhcGlUYWdcIjogXCJUb29sc1JlZGlyZWN0XCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiY29uc3QgU1VGRklYX0FQUEVORCA9IDA7XG5jb25zdCBTVUZGSVhfUkVQTEFDRSA9IDE7XG5jb25zdCBTVUZGSVhfU0VUREVGQVVMVCA9IDI7XG5cbmNvbnN0IFZBUklBTlRTID0gWyd6aC1oYW5zJywgJ3poLWhhbnQnLCAnemgtY24nLCAnemgtaGsnLCAnemgtbW8nLCAnemgtc2cnLCAnemgtbXknLCAnemgtdHcnXTtcblxuZXhwb3J0IHtTVUZGSVhfQVBQRU5ELCBTVUZGSVhfUkVQTEFDRSwgU1VGRklYX1NFVERFRkFVTFQsIFZBUklBTlRTfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1JlZGlyZWN0Q2FsbGJhY2ssIFJlZGlyZWN0TWV0aG9kLCBUb29sc1JlZGlyZWN0QXBpfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7U1VGRklYX0FQUEVORCwgU1VGRklYX1JFUExBQ0UsIFNVRkZJWF9TRVRERUZBVUxULCBWQVJJQU5UU30gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXksIHVuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtBcGlSZXNwb25zZX0gZnJvbSAndHlwZXMtbWVkaWF3aWtpL213L0FwaSc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtmaXhOYW1lc3BhY2V9IGZyb20gJy4vdXRpbC9maXhOYW1lc3BhY2UnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL3V0aWwvZ2V0TWVzc2FnZSc7XG5jb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgSVNfQ0FURUdPUlkgPSB3Z05hbWVzcGFjZU51bWJlciA9PT0gMTQ7XG5sZXQgZmluZFJlZGlyZWN0Q2FsbGJhY2tzOiBSZWRpcmVjdENhbGxiYWNrW10gPSBbXTtcbmNvbnN0IHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcbmNvbnN0IHJlZGlyZWN0RXhjbHVkZXM6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge307XG5cbi8qKlxuICogQWRkIG5ldyBjdXN0b20gY2FsbGJhY2sgZm9yIGZpbmRpbmcgbmV3IHBvdGVudGlhbCByZWRpcmVjdCB0aXRsZXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgKHBhZ2VuYW1lLCAkY29udGVudCwgdGl0bGVzKSA9PiB0aXRsZSBsaXN0XG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBhcmdzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmNvbnN0IGZpbmRSZWRpcmVjdENhbGxiYWNrID0gZnVuY3Rpb24gKFxuXHR0aGlzOiBUb29sc1JlZGlyZWN0QXBpLFxuXHRjYWxsYmFjazogUmVkaXJlY3RDYWxsYmFjayxcblx0Li4uYXJnczogdW5rbm93bltdXG4pOiBUb29sc1JlZGlyZWN0QXBpIHtcblx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0ZmluZFJlZGlyZWN0Q2FsbGJhY2tzW2ZpbmRSZWRpcmVjdENhbGxiYWNrcy5sZW5ndGhdID0gY2FsbGJhY2s7XG5cdH0gZWxzZSB7XG5cdFx0ZmluZFJlZGlyZWN0Q2FsbGJhY2tzID0gZ2VuZXJhdGVBcnJheShmaW5kUmVkaXJlY3RDYWxsYmFja3MsIGNhbGxiYWNrLCAuLi5hcmdzKSBhcyBSZWRpcmVjdENhbGxiYWNrW107XG5cdH1cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEZpbmQgbmV3IHBvdGVudGlhbCByZWRpcmVjdCB0aXRsZXMgdGhyb3VnaCBzZWxlY3RvcihzKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5jb25zdCBmaW5kUmVkaXJlY3RCeVNlbGVjdG9yID0gZnVuY3Rpb24gKHRoaXM6IFRvb2xzUmVkaXJlY3RBcGksIHNlbGVjdG9yOiBzdHJpbmcpOiBUb29sc1JlZGlyZWN0QXBpIHtcblx0LyogQSBzaG9ydGN1dCB0byBhZGQgQ1NTIHNlbGVjdG9ycyBhcyBydWxlIHRvIGZpbmQgbmV3IHBvdGVudGlhbCByZWRpcmVjdCB0aXRsZXMuICovXG5cdGZpbmRSZWRpcmVjdENhbGxiYWNrc1tmaW5kUmVkaXJlY3RDYWxsYmFja3MubGVuZ3RoXSA9ICgpID0+IHtcblx0XHRyZXR1cm4gJChzZWxlY3RvcikubWFwKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiAkKGVsZW1lbnQpLmVxKDApLnRleHQoKS50cmltKCkgfHwgbnVsbDtcblx0XHR9KTtcblx0fTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5jb25zdCBzZXRSZWRpcmVjdFRleHRTdWZmaXggPSAodGl0bGU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcsIGZsYWc/OiBudW1iZXIpOiB2b2lkID0+IHtcblx0bGV0IGZsYWdfc2V0ID0gZmFsc2U7XG5cdGxldCBmbGFnX2FwcGVuZCA9IGZhbHNlO1xuXHRmbGFnIHx8PSBTVUZGSVhfQVBQRU5EOyAvLyBkZWZhdWx0IGFwcGVuZFxuXHRmbGFnX3NldCA9IGZsYWcgPT09IFNVRkZJWF9SRVBMQUNFO1xuXHR0aXRsZSA9IGZpeE5hbWVzcGFjZSh0aXRsZSk7XG5cdGlmICh0aXRsZSBpbiBwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeCkge1xuXHRcdGZsYWdfYXBwZW5kID0gZmxhZyA9PT0gU1VGRklYX0FQUEVORDtcblx0fSBlbHNlIHtcblx0XHQvLyBpZiBub3QgZXhpc3QsIGV2ZXJ5IGZsYWcgY2FuIHNldFxuXHRcdGZsYWdfc2V0ID0gdHJ1ZTtcblx0fVxuXHRpZiAoZmxhZ19zZXQpIHtcblx0XHRwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0gPSBnZW5lcmF0ZUFycmF5KHN1ZmZpeCk7XG5cdH0gZWxzZSBpZiAoZmxhZ19hcHBlbmQpIHtcblx0XHRwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0gPSBnZW5lcmF0ZUFycmF5KHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSA/PyBbXSwgc3VmZml4KSBhcyBzdHJpbmdbXTtcblx0fVxufTtcblxuY29uc3QgVG9vbHNSZWRpcmVjdDogVG9vbHNSZWRpcmVjdEFwaSA9IHtcblx0dmFyaWFudHM6IFZBUklBTlRTLFxuXHRpbml0KCRib2R5LCBvbk9wZW4pIHtcblx0XHRjb25zdCBidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdC5hZGRDbGFzcygnbXctbGlzdC1pdGVtIGNvbGxhcHNpYmxlIHZlY3Rvci10YWItbm9pY29uJylcblx0XHRcdC5hdHRyKCdpZCcsICdjYS1yZWRpcmVjdCcpXG5cdFx0XHQuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0XHQuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnYnRuZGVzYycpKS50ZXh0KGdldE1lc3NhZ2UoJ2J0bnRpdGxlJykpKTtcblx0XHRidXR0b24ub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0b25PcGVuKCk7XG5cdFx0fSk7XG5cdFx0JGJvZHkuZmluZCgnbGkjY2EtaGlzdG9yeScpLmFmdGVyKGJ1dHRvbik7XG5cdH0sXG5cdGF0dGFjaENvbnRhaW5lcnModmlld0NvbnRhaW5lciwgY3JlYXRlQ29udGFpbmVyKSB7XG5cdFx0dGhpcy50YWJzLnZpZXcgPSB7Y29udDogJCh2aWV3Q29udGFpbmVyKSwgbG9hZGVkOiBmYWxzZX07XG5cdFx0dGhpcy50YWJzLmNyZWF0ZSA9IHtjb250OiAkKGNyZWF0ZUNvbnRhaW5lciksIGxvYWRlZDogZmFsc2V9O1xuXHR9LFxuXHR0YWJzOiB7XG5cdFx0dmlldzoge2NvbnQ6ICQoKSwgbG9hZGVkOiBmYWxzZX0sXG5cdFx0Y3JlYXRlOiB7Y29udDogJCgpLCBsb2FkZWQ6IGZhbHNlfSxcblx0fSxcblx0Zml4KHBhZ2VuYW1lcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdCQoJ3AuZGVzYycsIHNlbGYudGFicy52aWV3LmNvbnQpLnRleHQoZ2V0TWVzc2FnZSgnZml4bG9hZGluZycpKTtcblx0XHQkKCdwW2NsYXNzIT1kZXNjXScsIHNlbGYudGFicy52aWV3LmNvbnQpLnJlbW92ZSgpO1xuXHRcdHNlbGYubG9hZGluZyhzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHR2b2lkIHNlbGZcblx0XHRcdC5idWxrRWRpdEJ5UmVnZXgocGFnZW5hbWVzLCAvXFxzKlxcW1xcWy4qPygjLio/KT9cXF1cXF0vLCBgIFtbJHt3Z1BhZ2VOYW1lfSQxXV1gLCBnZXRNZXNzYWdlKCdmaXhzdW1tYXJ5JykpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdC8vIGRlbGF5IGxvYWQgYmVmb3JlIHRoZSBhc3luY2hyb25vdXMgdGFza3Mgb24gc2VydmVyIGZpbmlzaGVkXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYubG9hZGVkKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRcdHNlbGYubG9hZFZpZXcodHJ1ZSk7XG5cdFx0XHRcdH0sIDMwMDApO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGNyZWF0ZShwYWdlbmFtZXMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHQkKCdwLmRlc2MnLCBzZWxmLnRhYnMuY3JlYXRlLmNvbnQpLnRleHQoZ2V0TWVzc2FnZSgnY3JlYXRlbG9hZGluZycpKTtcblx0XHQkKCdwW2NsYXNzIT1kZXNjXScsIHNlbGYudGFicy5jcmVhdGUuY29udCkucmVtb3ZlKCk7XG5cdFx0c2VsZi5sb2FkaW5nKHNlbGYudGFicy5jcmVhdGUuY29udCk7XG5cdFx0dm9pZCBzZWxmXG5cdFx0XHQuYnVsa0VkaXQoXG5cdFx0XHRcdHBhZ2VuYW1lcyxcblx0XHRcdFx0Z2V0TWVzc2FnZShJU19DQVRFR09SWSA/ICdjcmVhdGV0ZXh0LWNhdGVnb3J5JyA6ICdjcmVhdGV0ZXh0JykucmVwbGFjZSgnJDEnLCB3Z1BhZ2VOYW1lKSxcblx0XHRcdFx0Z2V0TWVzc2FnZSgnY3JlYXRlc3VtbWFyeScpLnJlcGxhY2UoJyQxJywgd2dQYWdlTmFtZSlcblx0XHRcdClcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0Ly8gZGVsYXkgbG9hZCBiZWZvcmUgdGhlIGFzeW5jaHJvbm91cyB0YXNrcyBvbiBzZXJ2ZXIgZmluaXNoZWRcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5sb2FkZWQoc2VsZi50YWJzLmNyZWF0ZS5jb250KTtcblx0XHRcdFx0XHRzZWxmLnRhYnMudmlldy5sb2FkZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRzZWxmLmxvYWRDcmVhdGUodHJ1ZSk7XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9KTtcblx0fSxcblx0YWRkUmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCB0ZXh0KSB7XG5cdFx0aWYgKHRpdGxlIGluIHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4KSB7XG5cdFx0XHR0ZXh0ICs9IGBcXG4ke3VuaXF1ZUFycmF5KHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSA/PyBbXSkuam9pbignXFxuJyl9YDsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdH1cblx0XHRyZXR1cm4gdGV4dDtcblx0fSxcblx0YnVsa0VkaXQodGl0bGVzLCB0ZXh0LCBzdW1tYXJ5KSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0dGl0bGVzID0gdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YodikgPT09IGk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGFwaVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0dGl0bGVzLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGRlZmVycmVkcyA9IFtdO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZX0gb2YgcXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRkZWZlcnJlZHNbZGVmZXJyZWRzLmxlbmd0aF0gPSBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdHRleHQ6IHNlbGYuYWRkUmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCB0ZXh0KSxcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHR0YWdzOiBPUFRJT05TLmFwaVRhZyxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gJC53aGVuKC4uLmRlZmVycmVkcyk7XG5cdFx0XHR9KTtcblx0fSxcblx0YnVsa0VkaXRCeVJlZ2V4KHRpdGxlcywgcmVnZXgsIHRleHQsIHN1bW1hcnkpIHtcblx0XHR0aXRsZXMgPSB0aXRsZXMuZmlsdGVyKCh2LCBpLCBhcnIpID0+IHtcblx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2KSA9PT0gaTtcblx0XHR9KTtcblx0XHRyZXR1cm4gYXBpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRcdHRpdGxlcyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBkZWZlcnJlZHM6IEpRdWVyeS5Qcm9taXNlPHVua25vd24+W10gPSBbXTtcblx0XHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0Y29uc3Qge2NvbnRlbnR9ID0gcGFnZS5yZXZpc2lvbnNbMF0uc2xvdHNbJ21haW4nXTtcblx0XHRcdFx0XHRjb25zdCBuZXdDb250ZW50ID0gY29udGVudC5yZXBsYWNlKHJlZ2V4LCB0ZXh0KTtcblx0XHRcdFx0XHRkZWZlcnJlZHNbZGVmZXJyZWRzLmxlbmd0aF0gPSBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0XHR0aXRsZTogcGFnZS50aXRsZSxcblx0XHRcdFx0XHRcdHRleHQ6IG5ld0NvbnRlbnQsXG5cdFx0XHRcdFx0XHR0YWdzOiBPUFRJT05TLmFwaVRhZyxcblx0XHRcdFx0XHRcdGJhc2V0aW1lc3RhbXA6IHBhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcCxcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGxvYWRUYWJDb250KHRhYm5hbWUsIGNhbGxiYWNrLCByZWxvYWQpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCB0YWIgPSBzZWxmLnRhYnNbdGFibmFtZV07XG5cdFx0aWYgKHJlbG9hZCkge1xuXHRcdFx0dGFiLmxvYWRlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIXRhYi5sb2FkZWQpIHtcblx0XHRcdHRhYi5jb250Lmh0bWwoJycpO1xuXHRcdFx0Ly9cblx0XHRcdGNvbnN0ICRkZXNjID0gJCgnPHA+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdkZXNjJylcblx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZGVzYy10ZXh0JykudGV4dChnZXRNZXNzYWdlKCdyZWRpbG9hZGluZycpKSlcblx0XHRcdFx0LmFwcGVuZFRvKHRhYi5jb250KTtcblx0XHRcdGNvbnN0ICR0ZXh0ID0gJGRlc2MuZmluZCgnPiAuZGVzYy10ZXh0Jyk7XG5cdFx0XHRjYWxsYmFja1xuXHRcdFx0XHQuYXBwbHkoc2VsZilcblx0XHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBtZXNzYWdlcy5qc1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHQkdGV4dC50ZXh0KGdldE1lc3NhZ2UoYHRhYiR7dGFibmFtZX1kZXNjYCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuZmFpbCgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLmpzXG5cdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdCR0ZXh0LnRleHQoZ2V0TWVzc2FnZShgdGFiJHt0YWJuYW1lfW5vdGZvdW5kYCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmFkZE1ldGhvZHMoJGRlc2MsIFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNyZWZyZXNoJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3JlZnJlc2gnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYubG9hZFRhYkNvbnQodGFibmFtZSwgY2FsbGJhY2ssIHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR0YWIubG9hZGVkID0gdHJ1ZTtcblx0XHR9XG5cdH0sXG5cdGxvYWRpbmcoY29udGFpbmVyKSB7XG5cdFx0aWYgKGNvbnRhaW5lci5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKSA9PT0gJ3NwYW4nKSB7XG5cdFx0XHRjb250YWluZXIuYWRkQ2xhc3MoJ213LWFqYXgtbG9hZGVyJyk7XG5cdFx0fSBlbHNlIGlmICgkKCdzcGFuLm13LWFqYXgtbG9hZGVyJywgY29udGFpbmVyKS5sZW5ndGggPT09IDApIHtcblx0XHRcdCQoJzxzcGFuPicpLmFkZENsYXNzKCdtdy1hamF4LWxvYWRlcicpLmFwcGVuZFRvKGNvbnRhaW5lcik7XG5cdFx0fVxuXHR9LFxuXHRsb2FkZWQoY29udGFpbmVyKSB7XG5cdFx0aWYgKGNvbnRhaW5lci5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKSA9PT0gJ3NwYW4nKSB7XG5cdFx0XHRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ213LWFqYXgtbG9hZGVyJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoJ3NwYW4ubXctYWpheC1sb2FkZXInLCBjb250YWluZXIpLnJlbW92ZSgpO1xuXHRcdH1cblx0fSxcblx0c2VsZWN0QWxsKGNvbnQpIHtcblx0XHQkKCdpbnB1dFt0eXBlPWNoZWNrYm94XTpub3QoOmRpc2FibGVkKScsIGNvbnQpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcblx0fSxcblx0c2VsZWN0SW52ZXJzZShjb250KSB7XG5cdFx0JCgnaW5wdXRbdHlwZT1jaGVja2JveF06bm90KDpkaXNhYmxlZCknLCBjb250KS5lYWNoKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcblx0XHRcdCRlbGVtZW50LnByb3AoJ2NoZWNrZWQnLCAhJGVsZW1lbnQucHJvcCgnY2hlY2tlZCcpKTtcblx0XHR9KTtcblx0fSxcblx0c2VsZWN0QWN0aW9uKGNvbnQsIGNiKSB7XG5cdFx0Y29uc3QgcGFnZW5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdCQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQnLCBjb250KS5lYWNoKChfaW5kZXgsIHBhZ2VuYW1lKSA9PiB7XG5cdFx0XHRwYWdlbmFtZXNbcGFnZW5hbWVzLmxlbmd0aF0gPSAkKHBhZ2VuYW1lKS5kYXRhKCdwYWdlLXRpdGxlJyk7XG5cdFx0fSk7XG5cdFx0aWYgKHBhZ2VuYW1lcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjYi5jYWxsKHRoaXMsIHBhZ2VuYW1lcyk7XG5cdFx0fVxuXHR9LFxuXHRjbGlja0FjdGlvbihjb250LCBjYikge1xuXHRcdGNvbnN0IHBhZ2VuYW1lID0gJCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgY29udCkuZGF0YSgncGFnZS10aXRsZScpO1xuXHRcdGNiLmNhbGwodGhpcywgW3BhZ2VuYW1lXSk7XG5cdH0sXG5cdGJ1aWxkTGluayh7dGl0bGUsIGhyZWYsIGNsaWNrLCBjbGFzc25hbWV9KSB7XG5cdFx0Y29uc3QgYSA9ICQoJzxhPicpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRocmVmLFxuXHRcdFx0XHR0YXJnZXQ6ICdfYmxhbmsnLFxuXHRcdFx0XHRyZWw6IFsnbm9vcGVuZXInLCAnbm9yZWZlcnJlciddLmpvaW4oJyAnKSxcblx0XHRcdH0pXG5cdFx0XHQudGV4dCh0aXRsZSk7XG5cdFx0aWYgKGNsaWNrKSB7XG5cdFx0XHRhLm9uKCdjbGljaycsIGNsaWNrKTtcblx0XHR9XG5cdFx0aWYgKGNsYXNzbmFtZSkge1xuXHRcdFx0YS5hZGRDbGFzcyhjbGFzc25hbWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3Rvb2xzLXJlZGlyZWN0X2xpbmsnKS5hcHBlbmQoYSk7XG5cdH0sXG5cdGFkZE1ldGhvZHMoJHBhcmVudCwgbWV0aG9kcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGxldCAkY29udGFpbmVyID0gJHBhcmVudC5maW5kKCc+IC50b29scy1yZWRpcmVjdF9tZXRob2RzJyk7XG5cdFx0Y29uc3QgbWV0aG9kRXhpc3QgPSAoe2hyZWZ9OiBSZWRpcmVjdE1ldGhvZCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0cmV0dXJuICRjb250YWluZXIuZmluZChgYVtocmVmPSR7SlNPTi5zdHJpbmdpZnkoaHJlZil9XWApLmxlbmd0aCA+IDA7XG5cdFx0fTtcblx0XHRpZiAoJGNvbnRhaW5lci5sZW5ndGggPT09IDApIHtcblx0XHRcdCRjb250YWluZXIgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygndG9vbHMtcmVkaXJlY3RfbWV0aG9kcycpLmFwcGVuZFRvKCRwYXJlbnQpO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IG1ldGhvZCBvZiBtZXRob2RzKSB7XG5cdFx0XHRpZiAoIW1ldGhvZEV4aXN0KG1ldGhvZCkpIHtcblx0XHRcdFx0c2VsZi5idWlsZExpbmsobWV0aG9kKS5hcHBlbmRUbygkY29udGFpbmVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGJ1aWxkU2VsZWN0aW9uKG1haW4sIG1ldGQsIG10LCBkc2FiKSB7XG5cdFx0Y29uc3QgY29udCA9ICQoJzxzcGFuPicpO1xuXHRcdGNvbnN0IHNlbGUgPSAkKCc8aW5wdXQ+JykuYXR0cigndHlwZScsICdjaGVja2JveCcpLmFwcGVuZFRvKGNvbnQpO1xuXHRcdHRoaXMuYnVpbGRMaW5rKG1haW4pLmFwcGVuZFRvKGNvbnQpO1xuXHRcdHRoaXMuYWRkTWV0aG9kcyhjb250LCBtZXRkKTtcblx0XHRzZWxlLmRhdGEoJ3BhZ2UtdGl0bGUnLCBtdCk7XG5cdFx0aWYgKGRzYWIpIHtcblx0XHRcdHNlbGUucHJvcCgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbnQ7XG5cdH0sXG5cdGxvYWRWaWV3KHJlbG9hZCkge1xuXHRcdGNvbnN0ICRjb250YWluZXIgPSB0aGlzLnRhYnMudmlldy5jb250O1xuXHRcdHRoaXMubG9hZFRhYkNvbnQoXG5cdFx0XHQndmlldycsXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmxvYWRSZWRpcmVjdCh3Z1BhZ2VOYW1lLCAkY29udGFpbmVyLCAwKTtcblx0XHRcdH0sXG5cdFx0XHRyZWxvYWRcblx0XHQpO1xuXHR9LFxuXHRsb2FkQ3JlYXRlKHJlbG9hZCkge1xuXHRcdHRoaXMubG9hZFRhYkNvbnQoXG5cdFx0XHQnY3JlYXRlJyxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmluZFJlZGlyZWN0KHdnUGFnZU5hbWUpO1xuXHRcdFx0fSxcblx0XHRcdHJlbG9hZFxuXHRcdCk7XG5cdH0sXG5cdGxvYWRSZWRpcmVjdChwYWdlbmFtZSwgY29udGFpbmVyLCBkZWVwLCBsb2FkZWQpIHtcblx0XHR0aGlzLmxvYWRpbmcoY29udGFpbmVyKTtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCB0b3AgPSBkZWVwID8gJCgnPGRsPicpLmFwcGVuZFRvKGNvbnRhaW5lcikgOiBjb250YWluZXI7XG5cdFx0aWYgKCFsb2FkZWQpIHtcblx0XHRcdGxvYWRlZCA9IHt9O1xuXHRcdFx0bG9hZGVkW3BhZ2VuYW1lXSA9IHRydWU7XG5cdFx0fVxuXHRcdGNvbnN0IG9uQ2xpY2tGaXggPSAoZXZlbnQ6IEpRdWVyeS5FdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgZW50cnkgPSAkKHRoaXMpLnBhcmVudHMoJ2RkLCBwJykuZmlyc3QoKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRzZWxmLmNsaWNrQWN0aW9uKGVudHJ5LCB0aGlzLmZpeCk7XG5cdFx0fTtcblx0XHR2b2lkIGFwaVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6ICdyZWRpcmVjdHMnLFxuXHRcdFx0XHR0aXRsZXM6IHBhZ2VuYW1lLFxuXHRcdFx0XHRyZGxpbWl0OiAnbWF4Jyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRzZWxmLmxvYWRlZChjb250YWluZXIpO1xuXHRcdFx0XHRsZXQgaGFzX3JlZGlyZWN0ID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IGRlc2MgPSAkKCdwLmRlc2MnLCBzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0Y29uc3QgbWF4aW11bVJlZGlyZWN0RGVwdGggPSAxMDtcblx0XHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0aWYgKHBhZ2UucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7cmVkaXJlY3RzfSA9IHBhZ2U7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZX0gb2YgcmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHJkdGl0bGUgPSB0aXRsZTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdWx0aXRsZSA9IHJkdGl0bGUucmVwbGFjZSgvIC9nLCAnXycpO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBlbnRyeSA9IChkZWVwID8gJCgnPGRkPicpIDogJCgnPHA+JykpLmFwcGVuZFRvKHRvcCk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG1ldGhvZHM6IFJlZGlyZWN0TWV0aG9kW10gPSBbXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZjogbXcudXRpbC5nZXRVcmwodWx0aXRsZSwge2FjdGlvbjogJ2VkaXQnfSksXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgncmVkaWVkaXQnKSxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRdO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBpc0N5Y2xlUmVkaXJlY3QgPSByZHRpdGxlIGluIGxvYWRlZDtcblx0XHRcdFx0XHRcdFx0bG9hZGVkW3JkdGl0bGVdID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0aWYgKCFpc0N5Y2xlUmVkaXJlY3QgJiYgZGVlcCkge1xuXHRcdFx0XHRcdFx0XHRcdG1ldGhvZHNbbWV0aG9kcy5sZW5ndGhdID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZjogJyNmaXgtcmVkaXJlY3QnLFxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYnZpZXdmaXgnKSxcblx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrOiBvbkNsaWNrRml4LFxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc3QgJGNvbnRhaW5lciA9IHNlbGZcblx0XHRcdFx0XHRcdFx0XHQuYnVpbGRTZWxlY3Rpb24oXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY6IG13LnV0aWwuZ2V0VXJsKHVsdGl0bGUsIHtyZWRpcmVjdDogJ25vJ30pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmR0aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRtZXRob2RzLFxuXHRcdFx0XHRcdFx0XHRcdFx0dWx0aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRcdCFkZWVwXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmRUbyhlbnRyeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpc0N5Y2xlUmVkaXJlY3QpIHtcblx0XHRcdFx0XHRcdFx0XHQkY29udGFpbmVyLmFwcGVuZChgPHNwYW4gY2xhc3M9XCJlcnJvclwiPiR7Z2V0TWVzc2FnZSgnZXJyY3ljbGVyZWRpcmVjdCcpfTwvc3Bhbj5gKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkZWVwIDwgbWF4aW11bVJlZGlyZWN0RGVwdGgpIHtcblx0XHRcdFx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYubG9hZFJlZGlyZWN0KHJkdGl0bGUsIGVudHJ5LCBkZWVwICsgMSwgbG9hZGVkKTtcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRoYXNfcmVkaXJlY3QgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRoYXNfcmVkaXJlY3QgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGhhc19yZWRpcmVjdCAmJiBkZWVwID09PSAxKSB7XG5cdFx0XHRcdFx0c2VsZi5hZGRNZXRob2RzKGRlc2MsIFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNzZWxlY3QtYWxsJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3NlbGVjdGFsbCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBbGwoc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3NlbGVjdC1pbnZlcnNlJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3NlbGVjdGludmVyc2UnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0SW52ZXJzZShzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjZml4LXNlbGVjdGVkJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYnZpZXdmaXgnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0QWN0aW9uKHNlbGYudGFicy52aWV3LmNvbnQsIHNlbGYuZml4KTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGhhc19yZWRpcmVjdCkge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZVdpdGgoc2VsZik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3RXaXRoKHNlbGYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xuXHR9LFxuXHRmaW5kVmFyaWFudHMocGFnZW5hbWUsIHRpdGxlcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IHN1ZmZpeFJlZyA9IC9eLis/KCjvvIh8WyBfXVxcKCkuKz8oWynvvIldKSkkLztcblx0XHRsZXQgcmV0VGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGNvbnN0IGRlZmVycmVkcyA9IFtdO1xuXHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiBWQVJJQU5UUykge1xuXHRcdFx0Y29uc3QgeGhyID0gYXBpXG5cdFx0XHRcdC5wb3N0KHtcblx0XHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdHBhZ2U6IHBhZ2VuYW1lLFxuXHRcdFx0XHRcdHByb3A6ICdkaXNwbGF5dGl0bGUnLFxuXHRcdFx0XHRcdHVzZWxhbmc6IHZhcmlhbnQsXG5cdFx0XHRcdFx0dmFyaWFudCxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRoZW4oKHtwYXJzZX0pID0+IHtcblx0XHRcdFx0XHRjb25zdCB7ZGlzcGxheXRpdGxlfSA9IHBhcnNlO1xuXHRcdFx0XHRcdC8vIEV4YW1wbGU6XG5cdFx0XHRcdFx0Ly8gLSBCZWZvcmU6IDxzcGFuIGNsYXNzPVwibXctcGFnZS10aXRsZS1uYW1lc3BhY2VcIj7msYLpl7vnmb7np5E8L3NwYW4+PHNwYW4gY2xhc3M9XCJtdy1wYWdlLXRpdGxlLXNlcGFyYXRvclwiPjo8L3NwYW4+PHNwYW4gY2xhc3M9XCJtdy1wYWdlLXRpdGxlLW1haW5cIj7mspnnm5I8L3NwYW4+XG5cdFx0XHRcdFx0Ly8gLSBBZnRlcjog5rGC6Ze755m+56eROuaymeebklxuXHRcdFx0XHRcdGxldCB0aXRsZSA9ICQoJzxzcGFuPicpLmFwcGVuZChkaXNwbGF5dGl0bGUpLmVxKDApLnRleHQoKS50cmltKCk7XG5cdFx0XHRcdFx0dGl0bGUgPSBmaXhOYW1lc3BhY2UodGl0bGUpO1xuXHRcdFx0XHRcdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgJ3t7566A57mB6YeN5a6a5ZCRfX0nLCBTVUZGSVhfQVBQRU5EKTtcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0ZGVmZXJyZWRzW2RlZmVycmVkcy5sZW5ndGhdID0geGhyO1xuXHRcdH1cblx0XHRyZXR1cm4gJC53aGVuKC4uLmRlZmVycmVkcykudGhlbigoLi4uYXJnczogc3RyaW5nW10pID0+IHtcblx0XHRcdGNvbnN0IHN1ZmZpeGVzID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IHRpdGxlIG9mIGFyZ3MpIHtcblx0XHRcdFx0bGV0IHN1ZmZpeDtcblx0XHRcdFx0Ly8gZmluZCB0aXRsZSBzdWZmaXgsXG5cdFx0XHRcdC8vIGZvciBleGFtcGxlIFwiICjmtY7ljZfluIIpXCIgdG8gXCLluILkuK3ljLogKOa1juWNl+W4gilcIlxuXHRcdFx0XHRjb25zdCBzdWZmaXhBcnIgPSBzdWZmaXhSZWcuZXhlYyh0aXRsZSk7XG5cdFx0XHRcdGlmIChzdWZmaXhBcnIgJiYgc3VmZml4QXJyLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0XHRcdFssIHN1ZmZpeF0gPSBzdWZmaXhBcnI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3VmZml4ID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0VGl0bGVzW3JldFRpdGxlcy5sZW5ndGhdID0gdGl0bGU7XG5cdFx0XHRcdHN1ZmZpeGVzW3N1ZmZpeGVzLmxlbmd0aF0gPSBzdWZmaXg7XG5cdFx0XHR9XG5cdFx0XHQvLyBhcHBlbmQgc3VmZml4ZXNcblx0XHRcdGZvciAoY29uc3Qgc3VmZml4IG9mIHVuaXF1ZUFycmF5KHN1ZmZpeGVzKSkge1xuXHRcdFx0XHRyZXRUaXRsZXMgPSBbXG5cdFx0XHRcdFx0Li4ucmV0VGl0bGVzLFxuXHRcdFx0XHRcdC4uLnRpdGxlcy5tYXAoKHRpdGxlKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBtb2RpZmllZFRpdGxlID0gZml4TmFtZXNwYWNlKHRpdGxlKTtcblx0XHRcdFx0XHRcdHJldHVybiBzdWZmaXhSZWcudGVzdChtb2RpZmllZFRpdGxlKSA/IG1vZGlmaWVkVGl0bGUgOiBtb2RpZmllZFRpdGxlICsgc3VmZml4O1xuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2VsZi5maW5kTm90RXhpc3RzKHVuaXF1ZUFycmF5KHJldFRpdGxlcykpOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0fSk7XG5cdH0sXG5cdGZpbmROb3RFeGlzdHModGl0bGVzKSB7XG5cdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0Y29uc3QgZXhjbHVkZXMgPSBbJ+eUqOWtl+aooeW8jyddO1xuXHRcdGxldCBhbGx0aXRsZXM6IHN0cmluZ1tdID0gW107XG5cdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0XHRkZWZlcnJlZHNbZGVmZXJyZWRzLmxlbmd0aF0gPSBhcGkuZ2V0KHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0ZXh0OiB0aXRsZXMsXG5cdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdFx0dGl0bGU6ICdNZWRpYVdpa2k6R2FkZ2V0LVRvb2xzUmVkaXJlY3QuanMvLScsXG5cdFx0XHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRcdFx0dXNlbGFuZzogdmFyaWFudCxcblx0XHRcdFx0dmFyaWFudCxcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gJC53aGVuKC4uLmRlZmVycmVkcykudGhlbigoLi4ucmVzcG9uc2VzOiBBcGlSZXNwb25zZVtdKSA9PiB7XG5cdFx0XHQvLyBgYWN0aW9uPXBhcnNlJnByb3A9dGV4dGAgcmVzb2x2ZXMgdG8gYHtwYXJzZToge3RleHQ6IHN0cmluZ319YFxuXHRcdFx0Zm9yIChjb25zdCB7cGFyc2V9IG9mIHJlc3BvbnNlcyBhcyBBcnJheTx7cGFyc2U6IHt0ZXh0OiBzdHJpbmd9fT4pIHtcblx0XHRcdFx0YWxsdGl0bGVzID0gWy4uLmFsbHRpdGxlcywgLi4uJChwYXJzZS50ZXh0KS50ZXh0KCkudHJpbSgpLnNwbGl0KCd8JyldO1xuXHRcdFx0fVxuXHRcdFx0YWxsdGl0bGVzID0gYWxsdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2KSA9PT0gaTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGFwaVxuXHRcdFx0XHQucG9zdCh7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdFx0dGl0bGVzOiBhbGx0aXRsZXMsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRcdFx0dGl0bGVzID0gW107XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7dGl0bGV9ID0gcGFnZTtcblx0XHRcdFx0XHRcdGlmIChwYWdlLm1pc3NpbmcgJiYgIWV4Y2x1ZGVzLmluY2x1ZGVzKHRpdGxlKSkge1xuXHRcdFx0XHRcdFx0XHRpZiAodGl0bGUgaW4gcmVkaXJlY3RFeGNsdWRlcykge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGV4Y2x1ZGUgc3BlY2lhbCB0aXRsZXNcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gdGl0bGU7XG5cdFx0XHRcdFx0XHRcdC8vIG9ubHkgc2V0IGRlZmF1bHQgc3VmZml4XG5cdFx0XHRcdFx0XHRcdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgJ3t75Yir5ZCN6YeN5a6a5ZCRfX0nLCBTVUZGSVhfU0VUREVGQVVMVCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxuXHRmaW5kUmVkaXJlY3QocGFnZW5hbWUpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBmcmNEZWZlcnJlZHMgPSBbXTtcblx0XHRjb25zdCBjb250YWluZXIgPSBzZWxmLnRhYnMuY3JlYXRlLmNvbnQ7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0Y29uc3QgJGNvbnRlbnQgPSAkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0ID4gZGl2Lm13LXBhcnNlci1vdXRwdXQnKTtcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRsZXQgdGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHNlbGYubG9hZGluZyhjb250YWluZXIpO1xuXHRcdGZvciAoY29uc3QgY2FsbGJhY2sgb2YgZmluZFJlZGlyZWN0Q2FsbGJhY2tzKSB7XG5cdFx0XHRjb25zdCByZXQgPSBjYWxsYmFjayhwYWdlbmFtZSwgJGNvbnRlbnQsIHRpdGxlcyk7XG5cdFx0XHRpZiAodHlwZW9mIHJldCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gcmV0O1xuXHRcdFx0fSBlbHNlIGlmICgnZG9uZScgaW4gcmV0KSB7XG5cdFx0XHRcdC8vIGlzIERlZmVycmVkXG5cdFx0XHRcdGZyY0RlZmVycmVkc1tmcmNEZWZlcnJlZHMubGVuZ3RoXSA9IHJldDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRpdGxlcyA9IHVuaXF1ZUFycmF5KFsuLi50aXRsZXMsIC4uLnJldF0pOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHJlbW92ZSBhbGwgZW1wdHkgdGl0bGVzXG5cdFx0dGl0bGVzID0gdGl0bGVzLm1hcCgodGl0bGUpID0+IHRpdGxlIHx8ICcnKS5maWx0ZXIoQm9vbGVhbik7XG5cdFx0Y29uc3Qgb25DbGlja0NyZWF0ZSA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCwgZXZlbnQ6IEpRdWVyeS5FdmVudCk6IHZvaWQge1xuXHRcdFx0Y29uc3QgZW50cnkgPSAkKHRoaXMpLnBhcmVudHMoJ3A6Zmlyc3QnKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRzZWxmLmNsaWNrQWN0aW9uKGVudHJ5LCBzZWxmLmNyZWF0ZSk7XG5cdFx0fTtcblx0XHQvLyBoYW5kbGVzIHRoZSBkZWZlcnJlZCBjYWxsYmFja3Ncblx0XHR2b2lkICQud2hlbiguLi5mcmNEZWZlcnJlZHMpXG5cdFx0XHQudGhlbigoLi4ucmVzcG9uc2VzKSA9PiB7XG5cdFx0XHRcdGZvciAoY29uc3QgcmV0IG9mIHJlc3BvbnNlcykge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgcmV0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gcmV0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMgPSB1bmlxdWVBcnJheShbLi4udGl0bGVzLCAuLi5yZXRdKTsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gc2VsZi5maW5kVmFyaWFudHMocGFnZW5hbWUsIHRpdGxlcyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKGZ2dGl0bGVzKSA9PiB7XG5cdFx0XHRcdC8vIGJ1aWxkIEhUTUxcblx0XHRcdFx0c2VsZi5sb2FkZWQoY29udGFpbmVyKTtcblx0XHRcdFx0Zm9yIChjb25zdCB0aXRsZSBvZiBmdnRpdGxlcykge1xuXHRcdFx0XHRcdGNvbnN0IHVsdGl0bGUgPSB0aXRsZS5yZXBsYWNlKCcgJywgJ18nKTtcblx0XHRcdFx0XHRjb25zdCBlbnRyeSA9ICQoJzxwPicpLmFwcGVuZFRvKGNvbnRhaW5lcik7XG5cdFx0XHRcdFx0c2VsZi5idWlsZFNlbGVjdGlvbihcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogbXcudXRpbC5nZXRVcmwodWx0aXRsZSwge2FjdGlvbjogJ2VkaXQnLCByZWRsaW5rOiAnMSd9KSxcblx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdGNsYXNzbmFtZTogJ25ldycsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0aHJlZjogJyNjcmVhdGUtcmVkaXJlY3QnLFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpLFxuXHRcdFx0XHRcdFx0XHRcdGNsaWNrOiBvbkNsaWNrQ3JlYXRlLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdHVsdGl0bGUsXG5cdFx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHRcdCkuYXBwZW5kVG8oZW50cnkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGRlc2MgPSAkKCdwLmRlc2MnLCBjb250YWluZXIpO1xuXHRcdFx0XHRpZiAoZnZ0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNlbGYuYWRkTWV0aG9kcyhkZXNjLCBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWFsbCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdzZWxlY3RhbGwnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0QWxsKGNvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3NlbGVjdC1pbnZlcnNlJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3NlbGVjdGludmVyc2UnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0SW52ZXJzZShjb250YWluZXIpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNjcmVhdGUtc2VsZWN0ZWQnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFiY3JlYXRldGl0bGUnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0QWN0aW9uKGNvbnRhaW5lciwgc2VsZi5jcmVhdGUpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmVXaXRoKHNlbGYsIFtmdnRpdGxlc10pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0V2l0aChzZWxmLCBbZnZ0aXRsZXNdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcblx0fSxcbn07XG5cbmV4cG9ydCB7VG9vbHNSZWRpcmVjdCwgZmluZFJlZGlyZWN0Q2FsbGJhY2ssIGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IsIHNldFJlZGlyZWN0VGV4dFN1ZmZpeH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBUb29sc1JlZGlyZWN0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiY29uc3QgZml4TmFtZXNwYWNlID0gKHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VJZHMsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBuc1ByZWZpeGVzID0gW107XG5cdGxldCBuc0Nhbm9uUHJlZml4OiBzdHJpbmc7XG5cdGxldCBuc1ByZWZpeFBhdHRlcm46IFJlZ0V4cDtcblxuXHRmb3IgKGNvbnN0IFt0ZXh0LCBuc2lkXSBvZiBPYmplY3QuZW50cmllcyh3Z05hbWVzcGFjZUlkcykpIHtcblx0XHRpZiAobnNpZCA9PT0gd2dOYW1lc3BhY2VOdW1iZXIgJiYgISF0ZXh0KSB7XG5cdFx0XHRuc1ByZWZpeGVzW25zUHJlZml4ZXMubGVuZ3RoXSA9IHRleHQ7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdFx0Ly8gYXJ0aWNsZXNcblx0XHRuc0Nhbm9uUHJlZml4ID0gJyc7XG5cdFx0bnNQcmVmaXhQYXR0ZXJuID0gL14vO1xuXHR9IGVsc2Uge1xuXHRcdG5zQ2Fub25QcmVmaXggPSBgJHt3Z1BhZ2VOYW1lLnNwbGl0KCc6JylbMF19OmA7XG5cdFx0bnNQcmVmaXhQYXR0ZXJuID0gbmV3IFJlZ0V4cChgXigke25zUHJlZml4ZXMuam9pbignfCcpfSk6YCwgJ2knKTtcblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCkge1xuXHRcdC8vIGRvIG5vdGhpbmcgaWYgaXQncyBhcnRpY2xlc1xuXHRcdHJldHVybiB0aXRsZTtcblx0fSBlbHNlIGlmIChuc1ByZWZpeFBhdHRlcm4udGVzdCh0aXRsZSkpIHtcblx0XHQvLyBjYW5vbml6ZSB0aGUgbmFtZXNwYWNlXG5cdFx0cmV0dXJuIHRpdGxlLnJlcGxhY2UobnNQcmVmaXhQYXR0ZXJuLCBuc0Nhbm9uUHJlZml4KTtcblx0fVxuXHQvLyBkb24ndCBoYXZlIGEgbmFtZXNwYWNlXG5cdHJldHVybiBuc0Nhbm9uUHJlZml4ICsgdGl0bGU7XG59O1xuXG5leHBvcnQge2ZpeE5hbWVzcGFjZX07XG4iLCAiaW1wb3J0IHR5cGUge01lc3NhZ2VLZXl9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgZ2V0TWVzc2FnZSA9IChrZXk6IE1lc3NhZ2VLZXkgZXh0ZW5kcyBgdG9vbHNyZWRpcmVjdC0ke2luZmVyIFB9YCA/IFAgOiBuZXZlciwgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBmdWxsS2V5OiBzdHJpbmcgPSBgdG9vbHNyZWRpcmVjdC0ke2tleX1gO1xuXHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0cmV0dXJuIGFyZ3MubGVuZ3RoID8gbXcubWVzc2FnZShmdWxsS2V5LCAuLi5hcmdzKS5wYXJzZSgpIDogbXcubWVzc2FnZShmdWxsS2V5KS5wbGFpbigpO1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge3R5cGUgQXBwIGFzIFZ1ZUFwcCwgY3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9BcHAudnVlJztcblxuaW50ZXJmYWNlIFRvb2xzUmVkaXJlY3RDb250cm9sbGVyIHtcblx0YXR0YWNoQ29udGFpbmVycyh2aWV3Q29udGFpbmVyOiBIVE1MRWxlbWVudCwgY3JlYXRlQ29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQ7XG59XG5cbmludGVyZmFjZSBUb29sc1JlZGlyZWN0SW5zdGFuY2Uge1xuXHRvcGVuOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBtb3VudFRvb2xzUmVkaXJlY3QgPSAoY29udHJvbGxlcjogVG9vbHNSZWRpcmVjdENvbnRyb2xsZXIpOiBUb29sc1JlZGlyZWN0SW5zdGFuY2UgPT4ge1xuXHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHJvb3QpO1xuXHRjb25zdCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiA9IGNyZWF0ZUFwcChBcHAsIHtjb250cm9sbGVyfSk7XG5cdGNvbnN0IGluc3RhbmNlID0gYXBwLm1vdW50KHJvb3QpIGFzIHVua25vd24gYXMgVG9vbHNSZWRpcmVjdEluc3RhbmNlO1xuXHRyZXR1cm4gaW5zdGFuY2U7XG59O1xuXG5leHBvcnQge21vdW50VG9vbHNSZWRpcmVjdH07XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4QnV0dG9uLCBDZHhEaWFsb2d9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtuZXh0VGljaywgcmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7VG9vbHNSZWRpcmVjdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRNZXNzYWdlJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdGNvbnRyb2xsZXI6IHR5cGVvZiBUb29sc1JlZGlyZWN0O1xufT4oKTtcblxuY29uc3QgaXNPcGVuID0gcmVmKGZhbHNlKTtcbmNvbnN0IGFjdGl2ZVRhYiA9IHJlZigndmlldycpO1xuY29uc3Qgdmlld0NvbnRhaW5lciA9IHJlZjxIVE1MRWxlbWVudD4oKTtcbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9IHJlZjxIVE1MRWxlbWVudD4oKTtcblxuY29uc3Qgb3BlbiA9ICgpID0+IHtcblx0aXNPcGVuLnZhbHVlID0gdHJ1ZTtcbn07XG5cbmRlZmluZUV4cG9zZSh7b3Blbn0pO1xuXG5jb25zdCBsb2FkVGFiID0gYXN5bmMgKHRhYjogc3RyaW5nLCByZWxvYWQgPSBmYWxzZSkgPT4ge1xuXHRhd2FpdCBuZXh0VGljaygpO1xuXHRpZiAoIXZpZXdDb250YWluZXIudmFsdWUgfHwgIWNyZWF0ZUNvbnRhaW5lci52YWx1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRwcm9wcy5jb250cm9sbGVyLmF0dGFjaENvbnRhaW5lcnModmlld0NvbnRhaW5lci52YWx1ZSwgY3JlYXRlQ29udGFpbmVyLnZhbHVlKTtcblx0aWYgKHRhYiA9PT0gJ3ZpZXcnKSB7XG5cdFx0cHJvcHMuY29udHJvbGxlci5sb2FkVmlldyhyZWxvYWQpO1xuXHR9IGVsc2Uge1xuXHRcdHByb3BzLmNvbnRyb2xsZXIubG9hZENyZWF0ZShyZWxvYWQpO1xuXHR9XG59O1xuXG53YXRjaChhY3RpdmVUYWIsICh0YWIpID0+IHtcblx0dm9pZCBsb2FkVGFiKHRhYik7XG59KTtcblxud2F0Y2goaXNPcGVuLCAob3BlbikgPT4ge1xuXHRpZiAob3Blbikge1xuXHRcdHZvaWQgbG9hZFRhYihhY3RpdmVUYWIudmFsdWUpO1xuXHR9XG59KTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtZGlhbG9nIHYtbW9kZWw6b3Blbj1cImlzT3BlblwiIDp0aXRsZT1cImdldE1lc3NhZ2UoJ2RsZ3RpdGxlJylcIiA6dXNlLWNsb3NlLWJ1dHRvbj1cInRydWVcIj5cblx0XHQ8ZGl2IGNsYXNzPVwidG9vbHMtcmVkaXJlY3QtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+XG5cdFx0XHQ8Y2R4LWJ1dHRvblxuXHRcdFx0XHQ6d2VpZ2h0PVwiYWN0aXZlVGFiID09PSAndmlldycgPyAncHJpbWFyeScgOiAncXVpZXQnXCJcblx0XHRcdFx0cm9sZT1cInRhYlwiXG5cdFx0XHRcdDphcmlhLXNlbGVjdGVkPVwiYWN0aXZlVGFiID09PSAndmlldydcIlxuXHRcdFx0XHRAY2xpY2s9XCJhY3RpdmVUYWIgPSAndmlldydcIlxuXHRcdFx0PlxuXHRcdFx0XHR7eyBnZXRNZXNzYWdlKCd0YWJ2aWV3dGl0bGUnKSB9fVxuXHRcdFx0PC9jZHgtYnV0dG9uPlxuXHRcdFx0PGNkeC1idXR0b25cblx0XHRcdFx0OndlaWdodD1cImFjdGl2ZVRhYiA9PT0gJ2NyZWF0ZScgPyAncHJpbWFyeScgOiAncXVpZXQnXCJcblx0XHRcdFx0cm9sZT1cInRhYlwiXG5cdFx0XHRcdDphcmlhLXNlbGVjdGVkPVwiYWN0aXZlVGFiID09PSAnY3JlYXRlJ1wiXG5cdFx0XHRcdEBjbGljaz1cImFjdGl2ZVRhYiA9ICdjcmVhdGUnXCJcblx0XHRcdD5cblx0XHRcdFx0e3sgZ2V0TWVzc2FnZSgndGFiY3JlYXRldGl0bGUnKSB9fVxuXHRcdFx0PC9jZHgtYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXZcblx0XHRcdHYtc2hvdz1cImFjdGl2ZVRhYiA9PT0gJ3ZpZXcnXCJcblx0XHRcdHJlZj1cInZpZXdDb250YWluZXJcIlxuXHRcdFx0Y2xhc3M9XCJkaWFsb2ctcmVkaXJlY3QgdGFiLXJlZGlyZWN0XCJcblx0XHRcdHJvbGU9XCJ0YWJwYW5lbFwiXG5cdFx0PjwvZGl2PlxuXHRcdDxkaXZcblx0XHRcdHYtc2hvdz1cImFjdGl2ZVRhYiA9PT0gJ2NyZWF0ZSdcIlxuXHRcdFx0cmVmPVwiY3JlYXRlQ29udGFpbmVyXCJcblx0XHRcdGNsYXNzPVwiZGlhbG9nLXJlZGlyZWN0IHRhYi1yZWRpcmVjdFwiXG5cdFx0XHRyb2xlPVwidGFicGFuZWxcIlxuXHRcdD48L2Rpdj5cblx0PC9jZHgtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuLnRvb2xzLXJlZGlyZWN0LXRhYnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDRweDtcblx0bWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmRpYWxvZy1yZWRpcmVjdCB7XG5cdG1heC1oZWlnaHQ6IDY1dmg7XG5cdG92ZXJmbG93LXk6IGF1dG87XG5cblx0OmRlZXAoLm13LWFqYXgtbG9hZGVyKSB7XG5cdFx0dG9wOiAwO1xuXHR9XG5cblx0OmRlZXAoYSkge1xuXHRcdGNvbG9yOiAjMDY0NWFkO1xuXG5cdFx0Jjp2aXNpdGVkIHtcblx0XHRcdGNvbG9yOiAjMGIwMDgwO1xuXHRcdH1cblxuXHRcdCYubmV3IHtcblx0XHRcdGNvbG9yOiAjYzIwO1xuXG5cdFx0XHQmOnZpc2l0ZWQge1xuXHRcdFx0XHRjb2xvcjogI2E1NTg1ODtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCB2U2hvdyBhcyBfdlNob3csIHdpdGhEaXJlY3RpdmVzIGFzIF93aXRoRGlyZWN0aXZlcywgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0ge1xuICBjbGFzczogXCJ0b29scy1yZWRpcmVjdC10YWJzXCIsXG4gIHJvbGU6IFwidGFibGlzdFwiXG59XG5jb25zdCBfaG9pc3RlZF8yID0ge1xuICByZWY6IFwidmlld0NvbnRhaW5lclwiLFxuICBjbGFzczogXCJkaWFsb2ctcmVkaXJlY3QgdGFiLXJlZGlyZWN0XCIsXG4gIHJvbGU6IFwidGFicGFuZWxcIlxufVxuY29uc3QgX2hvaXN0ZWRfMyA9IHtcbiAgcmVmOiBcImNyZWF0ZUNvbnRhaW5lclwiLFxuICBjbGFzczogXCJkaWFsb2ctcmVkaXJlY3QgdGFiLXJlZGlyZWN0XCIsXG4gIHJvbGU6IFwidGFicGFuZWxcIlxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeERpYWxvZ1wiXSwge1xuICAgIG9wZW46ICRzZXR1cC5pc09wZW4sXG4gICAgXCJvblVwZGF0ZTpvcGVuXCI6IF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzT3BlbikgPSAkZXZlbnQpKSxcbiAgICB0aXRsZTogJHNldHVwLmdldE1lc3NhZ2UoJ2RsZ3RpdGxlJyksXG4gICAgXCJ1c2UtY2xvc2UtYnV0dG9uXCI6IHRydWVcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICAgICAgd2VpZ2h0OiAkc2V0dXAuYWN0aXZlVGFiID09PSAndmlldycgPyAncHJpbWFyeScgOiAncXVpZXQnLFxuICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6ICRzZXR1cC5hY3RpdmVUYWIgPT09ICd2aWV3JyxcbiAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoJHNldHVwLmFjdGl2ZVRhYiA9ICd2aWV3JykpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ3RhYnZpZXd0aXRsZScpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIndlaWdodFwiLCBcImFyaWEtc2VsZWN0ZWRcIl0pLFxuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICAgICAgd2VpZ2h0OiAkc2V0dXAuYWN0aXZlVGFiID09PSAnY3JlYXRlJyA/ICdwcmltYXJ5JyA6ICdxdWlldCcsXG4gICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogJHNldHVwLmFjdGl2ZVRhYiA9PT0gJ2NyZWF0ZScsXG4gICAgICAgICAgb25DbGljazogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAkZXZlbnQgPT4gKCRzZXR1cC5hY3RpdmVUYWIgPSAnY3JlYXRlJykpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ3RhYmNyZWF0ZXRpdGxlJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wid2VpZ2h0XCIsIFwiYXJpYS1zZWxlY3RlZFwiXSlcbiAgICAgIF0pLFxuICAgICAgX3dpdGhEaXJlY3RpdmVzKF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgbnVsbCwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pLCBbXG4gICAgICAgIFtfdlNob3csICRzZXR1cC5hY3RpdmVUYWIgPT09ICd2aWV3J11cbiAgICAgIF0pLFxuICAgICAgX3dpdGhEaXJlY3RpdmVzKF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMywgbnVsbCwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pLCBbXG4gICAgICAgIFtfdlNob3csICRzZXR1cC5hY3RpdmVUYWIgPT09ICdjcmVhdGUnXVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9LCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwidGl0bGVcIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFRvb2xzUmVkaXJlY3RcXFxcQXBwLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVG9vbHNSZWRpcmVjdFxcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFRvb2xzUmVkaXJlY3RcXFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFRvb2xzUmVkaXJlY3RcXFxcQXBwLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi01OWM4MzM5ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHR5cGUge01lc3NhZ2VLZXl9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBzZXRNZXNzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3QgREVGQVVMVF9NRVNTQUdFU19IQU5TID0ge1xuXHRcdCd0b29sc3JlZGlyZWN0LWJ0bnRpdGxlJzogJ+mHjeWumuWQkScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtYnRuZGVzYyc6ICfliJvlu7rlkoznrqHnkIbmraTpobXpnaLnmoTph43lrprlkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWRsZ3RpdGxlJzogJ+WIm+W7uuWSjOeuoeeQhumHjeWumuWQkScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtcmVkaWxvYWRpbmcnOiAn5pWw5o2u5Yqg6L295Lit77yM6K+356iN5YCZ4oCm4oCmJyxcblx0XHQndG9vbHNyZWRpcmVjdC1yZWRpZWRpdCc6ICfnvJbovpEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXNlbGVjdGFsbCc6ICflhajpgIknLFxuXHRcdCd0b29sc3JlZGlyZWN0LXNlbGVjdGludmVyc2UnOiAn5Y+N6YCJJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3dGl0bGUnOiAn5p+l55yLJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3ZGVzYyc6ICfku6XkuIvmmK/mjIflkJHmraTpobXpnaLnmoTph43lrprlkJHpobXvvJonLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdub3Rmb3VuZCc6ICfmsqHmnInmib7liLDku7vkvZXmjIflkJHmraTpobXpnaLnmoTph43lrprlkJHpobXjgIInLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdtdWx0aSc6ICflpJrph40nLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdmaXgnOiAn5L+u5aSNJyxcblx0XHQndG9vbHNyZWRpcmVjdC1maXhsb2FkaW5nJzogJ+ivt+eojeWAme+8jOato+WcqOiHquWKqOS/ruWkjemHjeWumuWQkeKApuKApicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZml4dGV4dCc6ICcjUkVESVJFQ1QgW1skMV1dJyxcblx0XHQndG9vbHNyZWRpcmVjdC1maXhzdW1tYXJ5JzogJ+e8lui+keW3peWFt++8muS/ruWkjeWkmumHjemHjeWumuWQkScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRldGl0bGUnOiAn5Yib5bu6Jyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVkZXNjJzogJ+S7peS4i+aYr+WwmuacquWIm+W7uueahOmHjeWumuWQkemhte+8micsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlbm90Zm91bmQnOiAn5rKh5pyJ5om+5Yiw5Y+v5Lul5Yib5bu655qE6YeN5a6a5ZCR6aG144CCJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVhbGwnOiAn5YWo6YOo5Yib5bu6Jyxcblx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGVsb2FkaW5nJzogJ+ivt+eojeWAme+8jOato+WcqOiHquWKqOWIm+W7uumHjeWumuWQkeKApuKApicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRldGV4dCc6ICcjUkVESVJFQ1QgW1skMV1dJyxcblx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGV0ZXh0LWNhdGVnb3J5JzogJ3t75YiG57G76YeN5a6a5ZCRfCQxfX0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXN1bW1hcnknOiAn57yW6L6R5bel5YW377ya6Ieq5Yqo5Yib5bu66YeN5a6a5ZCR5YiwW1skMV1dJyxcblx0XHQndG9vbHNyZWRpcmVjdC1lcnJjeWNsZXJlZGlyZWN0JzogJ+aXoOazleiHquWKqOS/ruWkje+8muWPkeeOsOW+queOr+mHjeWumuWQkScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtcmVmcmVzaCc6ICfliLfmlrAnLFxuXHR9IHNhdGlzZmllcyBSZWNvcmQ8TWVzc2FnZUtleSwgc3RyaW5nPjtcblx0Y29uc3QgREVGQVVMVF9NRVNTQUdFU19IQU5UID0ge1xuXHRcdCd0b29sc3JlZGlyZWN0LWJ0bnRpdGxlJzogJ+mHjeaWsOWwjuWQkScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtYnRuZGVzYyc6ICflibXlu7rlkoznrqHnkIbmraTpoIHpnaLnmoTph43mlrDlsI7lkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWRsZ3RpdGxlJzogJ+WJteW7uuWSjOeuoeeQhumHjeaWsOWwjuWQkScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtcmVkaWxvYWRpbmcnOiAn5pW45pOa5Yqg6LyJ5Lit77yM6KuL56iN5YCZ4oCm4oCmJyxcblx0XHQndG9vbHNyZWRpcmVjdC1yZWRpZWRpdCc6ICfnt6jovK8nLFxuXHRcdCd0b29sc3JlZGlyZWN0LXNlbGVjdGFsbCc6ICflhajpgbgnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXNlbGVjdGludmVyc2UnOiAn5Y+N6YG4Jyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3dGl0bGUnOiAn5p+l55yLJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3ZGVzYyc6ICfku6XkuIvmmK/mjIflkJHmraTpoIHpnaLnmoTph43mlrDlsI7lkJHpoIHvvJonLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdub3Rmb3VuZCc6ICfmspLmnInmib7liLDku7vkvZXmjIflkJHmraTpoIHpnaLnmoTph43mlrDlsI7lkJHpoIHjgIInLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdtdWx0aSc6ICflpJrph40nLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdmaXgnOiAn5L+u5b6pJyxcblx0XHQndG9vbHNyZWRpcmVjdC1maXhsb2FkaW5nJzogJ+iri+eojeWAme+8jOato+WcqOiHquWLleS/ruW+qemHjeaWsOWwjuWQkeKApuKApicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZml4dGV4dCc6ICcjUkVESVJFQ1QgW1skMV1dJyxcblx0XHQndG9vbHNyZWRpcmVjdC1maXhzdW1tYXJ5JzogJ+e3qOi8r+W3peWFt++8muS/ruW+qeWkmumHjemHjeaWsOWwjuWQkScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRldGl0bGUnOiAn5Ym15bu6Jyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVkZXNjJzogJ+S7peS4i+aYr+WwmuacquWJteW7uueahOmHjeaWsOWwjuWQkemgge+8micsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlbm90Zm91bmQnOiAn5rKS5pyJ5om+5Yiw5Y+v5Lul5Ym15bu655qE6YeN5paw5bCO5ZCR6aCB44CCJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVhbGwnOiAn5YWo6YOo5Ym15bu6Jyxcblx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGVsb2FkaW5nJzogJ+iri+eojeWAme+8jOato+WcqOiHquWLleWJteW7uumHjeaWsOWwjuWQkeKApuKApicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRldGV4dCc6ICcjUkVESVJFQ1QgW1skMV1dJyxcblx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGV0ZXh0LWNhdGVnb3J5JzogJ3t75YiG57G76YeN5a6a5ZCRfCQxfX0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXN1bW1hcnknOiAn57eo6Lyv5bel5YW377ya6Ieq5YuV5Ym15bu66YeN5paw5bCO5ZCR5YiwW1skMV1dJyxcblx0XHQndG9vbHNyZWRpcmVjdC1lcnJjeWNsZXJlZGlyZWN0JzogJ+eEoeazleiHquWLleS/ruW+qe+8mueZvOePvuW+queSsOmHjeaWsOWwjuWQkScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtcmVmcmVzaCc6ICfliLfmlrAnLFxuXHR9IHNhdGlzZmllcyBSZWNvcmQ8TWVzc2FnZUtleSwgc3RyaW5nPjtcblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KERFRkFVTFRfTUVTU0FHRVNfSEFOVCk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KERFRkFVTFRfTUVTU0FHRVNfSEFOUyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7c2V0TWVzc2FnZXN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdCQUFBLENBQUE7QUFBQUMsU0FBQUQsdUJBQUE7RUFBQUUsd0JBQUFBLE1BQUFBO0VBQUFDLHNCQUFBQSxNQUFBQTtFQUFBQyx1QkFBQUEsTUFBQUE7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUFQLHFCQUFBOztBQ0NDLElBQUFRLFNBQVU7QUFDVixJQUFBQyxVQUFXOztBQ0ZaLElBQU1DLGdCQUFnQjtBQUN0QixJQUFNQyxpQkFBaUI7QUFDdkIsSUFBTUMsb0JBQW9CO0FBRTFCLElB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QkFBK0I7SUFDL0IsbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLHFDQUFxQztJQUNyQywrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLHlCQUF5QjtFQUMxQjtBQUNBLFFBQU1DLHdCQUF3QjtJQUM3QiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLG1DQUFtQztJQUNuQyw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyx5QkFBeUI7RUFDMUI7QUFFQSxNQUFJLENBQUMsV0FBVyxTQUFTLFNBQVMsT0FBTyxFQUFFN0UsU0FBUzBFLGNBQWMsR0FBRztBQUNwRTFTLE9BQUc4UyxTQUFTQyxJQUFJRixxQkFBcUI7RUFDdEMsT0FBTztBQUNON1MsT0FBRzhTLFNBQVNDLElBQUlILHFCQUFxQjtFQUN0QztBQUNEOztBWDNEQUQsWUFBWTtBQUVaLE1BQUEsR0FBSzdELG1CQUFBa0UsU0FBUSxFQUFFeE8sS0FBTTFCLFdBQXlDO0FBQzdELFFBQU07SUFBQ3lNO0VBQUksSUFBSTBDLG1CQUFtQnRQLGFBQWE7QUFDL0NBLGdCQUFjRSxLQUFLQyxPQUFPeU0sSUFBSTtBQUMvQixDQUFDOyIsCiAgIm5hbWVzIjogWyJUb29sc1JlZGlyZWN0X2V4cG9ydHMiLCAiX19leHBvcnQiLCAiZmluZFJlZGlyZWN0QnlTZWxlY3RvciIsICJmaW5kUmVkaXJlY3RDYWxsYmFjayIsICJzZXRSZWRpcmVjdFRleHRTdWZmaXgiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgImFwaVRhZyIsICJ2ZXJzaW9uIiwgIlNVRkZJWF9BUFBFTkQiLCAiU1VGRklYX1JFUExBQ0UiLCAiU1VGRklYX1NFVERFRkFVTFQiLCAiVkFSSUFOVFMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiZml4TmFtZXNwYWNlIiwgInRpdGxlIiwgIndnTmFtZXNwYWNlSWRzIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnTmFtZXNwYWNlTnVtYmVyMiIsICJ3Z1BhZ2VOYW1lIiwgIndnUGFnZU5hbWUyIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAibnNQcmVmaXhlcyIsICJuc0Nhbm9uUHJlZml4IiwgIm5zUHJlZml4UGF0dGVybiIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibGVuZ3RoIiwgInRleHQiLCAibnNpZCIsICJzcGxpdCIsICJSZWdFeHAiLCAiam9pbiIsICJ0ZXN0IiwgInJlcGxhY2UiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYXJncyIsICJmdWxsS2V5IiwgIm1lc3NhZ2UiLCAicGFyc2UiLCAicGxhaW4iLCAiSVNfQ0FURUdPUlkiLCAiZmluZFJlZGlyZWN0Q2FsbGJhY2tzIiwgInBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4IiwgInJlZGlyZWN0RXhjbHVkZXMiLCAiY2FsbGJhY2siLCAiZ2VuZXJhdGVBcnJheSIsICJzZWxlY3RvciIsICIkIiwgIm1hcCIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJlcSIsICJ0cmltIiwgInN1ZmZpeCIsICJmbGFnIiwgImZsYWdfc2V0IiwgImZsYWdfYXBwZW5kIiwgIl9wYWdlV2l0aFJlZGlyZWN0VGV4dCIsICJUb29sc1JlZGlyZWN0IiwgInZhcmlhbnRzIiwgImluaXQiLCAiJGJvZHkiLCAib25PcGVuIiwgImJ1dHRvbiIsICJhZGRDbGFzcyIsICJhdHRyIiwgImNzcyIsICJhcHBlbmQiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiZmluZCIsICJhZnRlciIsICJhdHRhY2hDb250YWluZXJzIiwgInZpZXdDb250YWluZXIiLCAiY3JlYXRlQ29udGFpbmVyIiwgInRhYnMiLCAidmlldyIsICJjb250IiwgImxvYWRlZCIsICJjcmVhdGUiLCAiZml4IiwgInBhZ2VuYW1lcyIsICJzZWxmIiwgInJlbW92ZSIsICJsb2FkaW5nIiwgImJ1bGtFZGl0QnlSZWdleCIsICJ0aGVuIiwgInNldFRpbWVvdXQiLCAibG9hZFZpZXciLCAiYnVsa0VkaXQiLCAibG9hZENyZWF0ZSIsICJhZGRSZWRpcmVjdFRleHRTdWZmaXgiLCAiX3BhZ2VXaXRoUmVkaXJlY3RUZXh0MiIsICJ1bmlxdWVBcnJheSIsICJ0aXRsZXMiLCAic3VtbWFyeSIsICJmaWx0ZXIiLCAidiIsICJpIiwgImFyciIsICJpbmRleE9mIiwgInBvc3QiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicXVlcnkiLCAiZGVmZXJyZWRzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAicGFnZXMiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgInBvc3RXaXRoVG9rZW4iLCAidGFncyIsICJlcnIiLCAiZSIsICJmIiwgIndoZW4iLCAicmVnZXgiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAicGFnZSIsICJjb250ZW50IiwgInJldmlzaW9ucyIsICJzbG90cyIsICJuZXdDb250ZW50IiwgImJhc2V0aW1lc3RhbXAiLCAidGltZXN0YW1wIiwgImxvYWRUYWJDb250IiwgInRhYm5hbWUiLCAicmVsb2FkIiwgInRhYiIsICJodG1sIiwgIiRkZXNjIiwgImFwcGVuZFRvIiwgIiR0ZXh0IiwgImFwcGx5IiwgImZhaWwiLCAiYWx3YXlzIiwgImFkZE1ldGhvZHMiLCAiaHJlZiIsICJjbGljayIsICJjb250YWluZXIiLCAidG9Mb3dlckNhc2UiLCAicmVtb3ZlQ2xhc3MiLCAic2VsZWN0QWxsIiwgInNlbGVjdEludmVyc2UiLCAiZWFjaCIsICIkZWxlbWVudCIsICJzZWxlY3RBY3Rpb24iLCAiY2IiLCAicGFnZW5hbWUiLCAiZGF0YSIsICJjYWxsIiwgImNsaWNrQWN0aW9uIiwgImJ1aWxkTGluayIsICJjbGFzc25hbWUiLCAiYSIsICJ0YXJnZXQiLCAicmVsIiwgIiRwYXJlbnQiLCAibWV0aG9kcyIsICIkY29udGFpbmVyIiwgIm1ldGhvZEV4aXN0IiwgIkpTT04iLCAic3RyaW5naWZ5IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIm1ldGhvZCIsICJidWlsZFNlbGVjdGlvbiIsICJtYWluIiwgIm1ldGQiLCAibXQiLCAiZHNhYiIsICJzZWxlIiwgImxvYWRSZWRpcmVjdCIsICJmaW5kUmVkaXJlY3QiLCAiZGVlcCIsICJkZWZlcnJlZCIsICJEZWZlcnJlZCIsICJ0b3AiLCAib25DbGlja0ZpeCIsICJlbnRyeSIsICJwYXJlbnRzIiwgImZpcnN0IiwgInJkbGltaXQiLCAiaGFzX3JlZGlyZWN0IiwgImRlc2MiLCAibWF4aW11bVJlZGlyZWN0RGVwdGgiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAicmVkaXJlY3RzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInJkdGl0bGUiLCAidWx0aXRsZSIsICJ1dGlsIiwgImdldFVybCIsICJpc0N5Y2xlUmVkaXJlY3QiLCAicmVkaXJlY3QiLCAicmVzb2x2ZVdpdGgiLCAicmVqZWN0V2l0aCIsICJwcm9taXNlIiwgImZpbmRWYXJpYW50cyIsICJzdWZmaXhSZWciLCAicmV0VGl0bGVzIiwgIl9pMiIsICJfVkFSSUFOVFMiLCAidmFyaWFudCIsICJ4aHIiLCAidXNlbGFuZyIsICJkaXNwbGF5dGl0bGUiLCAic3VmZml4ZXMiLCAiX2kzIiwgIl9hcmdzIiwgInN1ZmZpeEFyciIsICJleGVjIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgIm1vZGlmaWVkVGl0bGUiLCAiZmluZE5vdEV4aXN0cyIsICJleGNsdWRlcyIsICJhbGx0aXRsZXMiLCAiX2k0IiwgIl9WQVJJQU5UUzIiLCAiY29udGVudG1vZGVsIiwgInJlc3BvbnNlcyIsICJfaTUiLCAiX3Jlc3BvbnNlcyIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJtaXNzaW5nIiwgImluY2x1ZGVzIiwgImZyY0RlZmVycmVkcyIsICIkY29udGVudCIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJyZXQiLCAiQm9vbGVhbiIsICJvbkNsaWNrQ3JlYXRlIiwgIl9pNiIsICJfcmVzcG9uc2VzMiIsICJmdnRpdGxlcyIsICJfaXRlcmF0b3IwIiwgIl9zdGVwMCIsICJyZWRsaW5rIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbXBvcnRfdnVlNCIsICJpbXBvcnRfY29kZXgiLCAiaW1wb3J0X3Z1ZTIiLCAicHJvcHMiLCAiX19wcm9wcyIsICJpc09wZW4iLCAicmVmIiwgImFjdGl2ZVRhYiIsICJvcGVuIiwgIl9fZXhwb3NlIiwgImxvYWRUYWIiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJuZXh0VGljayIsICJjb250cm9sbGVyIiwgIl94IiwgImFyZ3VtZW50cyIsICJ3YXRjaCIsICJvcGVuMiIsICJpbXBvcnRfdnVlMyIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgInJvbGUiLCAiX2hvaXN0ZWRfMiIsICJfaG9pc3RlZF8zIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICIkZXZlbnQiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJjcmVhdGVWTm9kZSIsICJ3ZWlnaHQiLCAib25DbGljayIsICJjcmVhdGVUZXh0Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgIl8iLCAid2l0aERpcmVjdGl2ZXMiLCAidlNob3ciLCAiQXBwX2RlZmF1bHQiLCAiX19maWxlIiwgIl9fc2NvcGVJZCIsICJBcHBfZGVmYXVsdDIiLCAibW91bnRUb29sc1JlZGlyZWN0IiwgInJvb3QiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJib2R5IiwgImFwcCIsICJjcmVhdGVBcHAiLCAiaW5zdGFuY2UiLCAibW91bnQiLCAid2dVc2VyTGFuZ3VhZ2UiLCAic2V0TWVzc2FnZXMiLCAiREVGQVVMVF9NRVNTQUdFU19IQU5TIiwgIkRFRkFVTFRfTUVTU0FHRVNfSEFOVCIsICJtZXNzYWdlcyIsICJzZXQiLCAiZ2V0Qm9keSJdCn0K
