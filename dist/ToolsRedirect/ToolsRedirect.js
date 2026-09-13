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
    },
    open: {
      type: Boolean,
      required: true
    },
    onOpen: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const isOpen = (0, import_vue2.ref)(props.open);
    const activeTab = (0, import_vue2.ref)("view");
    const viewContainer = (0, import_vue2.ref)();
    const createContainer = (0, import_vue2.ref)();
    const open = () => {
      isOpen.value = true;
      props.onOpen();
    };
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
  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
    import_vue3.Fragment,
    null,
    [(0, import_vue3.createVNode)($setup["CdxButton"], {
      class: "tools-redirect-trigger",
      onClick: $setup.open
    }, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
        (0, import_vue3.toDisplayString)($setup.getMessage("btntitle")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }), (0, import_vue3.createVNode)($setup["CdxDialog"], {
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
    }, 8, ["open", "title"])],
    64
    /* STABLE_FRAGMENT */
  );
}
//! src/ToolsRedirect/App.vue
App_default.render = render;
App_default.__file = "src\\ToolsRedirect\\App.vue";
var App_default2 = App_default;
//! src/ToolsRedirect/modules/ui.ts
var app;
var mountToolsRedirect = (controller, onOpen) => {
  const root = document.createElement("div");
  document.body.append(root);
  app = (0, import_vue4.createApp)(App_default2, {
    controller,
    open: false,
    onOpen
  });
  app.mount(root);
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
  mountToolsRedirect(ToolsRedirect, () => void 0);
  ToolsRedirect.init($body, () => {
    const trigger = document.querySelector(".tools-redirect-trigger");
    trigger === null || trigger === void 0 || trigger.click();
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QvVG9vbHNSZWRpcmVjdC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9vcHRpb25zLmpzb24iLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy91dGlsL2ZpeE5hbWVzcGFjZS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL3V0aWwvZ2V0TWVzc2FnZS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL3VpLnRzIiwgImRpc3QvVG9vbHNSZWRpcmVjdC9zcmMvVG9vbHNSZWRpcmVjdC9BcHAudnVlIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxUb29sc1JlZGlyZWN0XFxBcHAudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1Rvb2xzUmVkaXJlY3QvQXBwLnZ1ZSIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL21lc3NhZ2VzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vVG9vbHNSZWRpcmVjdC5sZXNzJztcbmltcG9ydCB7VG9vbHNSZWRpcmVjdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHttb3VudFRvb2xzUmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy91aSc7XG5pbXBvcnQge3NldE1lc3NhZ2VzfSBmcm9tICcuL21vZHVsZXMvbWVzc2FnZXMnO1xuXG5zZXRNZXNzYWdlcygpO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0bW91bnRUb29sc1JlZGlyZWN0KFRvb2xzUmVkaXJlY3QsICgpID0+IHVuZGVmaW5lZCk7XG5cdFRvb2xzUmVkaXJlY3QuaW5pdCgkYm9keSwgKCkgPT4ge1xuXHRcdGNvbnN0IHRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PignLnRvb2xzLXJlZGlyZWN0LXRyaWdnZXInKTtcblx0XHR0cmlnZ2VyPy5jbGljaygpO1xuXHR9KTtcbn0pO1xuXG5leHBvcnQge2ZpbmRSZWRpcmVjdENhbGxiYWNrLCBmaW5kUmVkaXJlY3RCeVNlbGVjdG9yLCBzZXRSZWRpcmVjdFRleHRTdWZmaXh9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbiIsICJ7XG5cdFwiYXBpVGFnXCI6IFwiVG9vbHNSZWRpcmVjdFwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImNvbnN0IFNVRkZJWF9BUFBFTkQgPSAwO1xuY29uc3QgU1VGRklYX1JFUExBQ0UgPSAxO1xuY29uc3QgU1VGRklYX1NFVERFRkFVTFQgPSAyO1xuXG5jb25zdCBWQVJJQU5UUyA9IFsnemgtaGFucycsICd6aC1oYW50JywgJ3poLWNuJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXNnJywgJ3poLW15JywgJ3poLXR3J107XG5cbmV4cG9ydCB7U1VGRklYX0FQUEVORCwgU1VGRklYX1JFUExBQ0UsIFNVRkZJWF9TRVRERUZBVUxULCBWQVJJQU5UU307XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtSZWRpcmVjdENhbGxiYWNrLCBSZWRpcmVjdE1ldGhvZCwgVG9vbHNSZWRpcmVjdEFwaX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1NVRkZJWF9BUFBFTkQsIFNVRkZJWF9SRVBMQUNFLCBTVUZGSVhfU0VUREVGQVVMVCwgVkFSSUFOVFN9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2ZpeE5hbWVzcGFjZX0gZnJvbSAnLi91dGlsL2ZpeE5hbWVzcGFjZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vdXRpbC9nZXRNZXNzYWdlJztcbmNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5jb25zdCBJU19DQVRFR09SWSA9IHdnTmFtZXNwYWNlTnVtYmVyID09PSAxNDtcbmxldCBmaW5kUmVkaXJlY3RDYWxsYmFja3M6IFJlZGlyZWN0Q2FsbGJhY2tbXSA9IFtdO1xuY29uc3QgcGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXg6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuY29uc3QgcmVkaXJlY3RFeGNsdWRlczogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4gPSB7fTtcblxuLyoqXG4gKiBBZGQgbmV3IGN1c3RvbSBjYWxsYmFjayBmb3IgZmluZGluZyBuZXcgcG90ZW50aWFsIHJlZGlyZWN0IHRpdGxlcy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAocGFnZW5hbWUsICRjb250ZW50LCB0aXRsZXMpID0+IHRpdGxlIGxpc3RcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGFyZ3NcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuY29uc3QgZmluZFJlZGlyZWN0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoXG5cdHRoaXM6IFRvb2xzUmVkaXJlY3RBcGksXG5cdGNhbGxiYWNrOiBSZWRpcmVjdENhbGxiYWNrLFxuXHQuLi5hcmdzOiB1bmtub3duW11cbik6IFRvb2xzUmVkaXJlY3RBcGkge1xuXHRpZiAoY2FsbGJhY2spIHtcblx0XHRmaW5kUmVkaXJlY3RDYWxsYmFja3NbZmluZFJlZGlyZWN0Q2FsbGJhY2tzLmxlbmd0aF0gPSBjYWxsYmFjaztcblx0fSBlbHNlIHtcblx0XHRmaW5kUmVkaXJlY3RDYWxsYmFja3MgPSBnZW5lcmF0ZUFycmF5KGZpbmRSZWRpcmVjdENhbGxiYWNrcywgY2FsbGJhY2ssIC4uLmFyZ3MpIGFzIFJlZGlyZWN0Q2FsbGJhY2tbXTtcblx0fVxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRmluZCBuZXcgcG90ZW50aWFsIHJlZGlyZWN0IHRpdGxlcyB0aHJvdWdoIHNlbGVjdG9yKHMpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmNvbnN0IGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IgPSBmdW5jdGlvbiAodGhpczogVG9vbHNSZWRpcmVjdEFwaSwgc2VsZWN0b3I6IHN0cmluZyk6IFRvb2xzUmVkaXJlY3RBcGkge1xuXHQvKiBBIHNob3J0Y3V0IHRvIGFkZCBDU1Mgc2VsZWN0b3JzIGFzIHJ1bGUgdG8gZmluZCBuZXcgcG90ZW50aWFsIHJlZGlyZWN0IHRpdGxlcy4gKi9cblx0ZmluZFJlZGlyZWN0Q2FsbGJhY2tzW2ZpbmRSZWRpcmVjdENhbGxiYWNrcy5sZW5ndGhdID0gKCkgPT4ge1xuXHRcdHJldHVybiAkKHNlbGVjdG9yKS5tYXAoKF9pbmRleCwgZWxlbWVudCkgPT4ge1xuXHRcdFx0cmV0dXJuICQoZWxlbWVudCkuZXEoMCkudGV4dCgpLnRyaW0oKSB8fCBudWxsO1xuXHRcdH0pIGFzIEpRdWVyeTxhbnk+O1xuXHR9O1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbmNvbnN0IHNldFJlZGlyZWN0VGV4dFN1ZmZpeCA9ICh0aXRsZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZywgZmxhZz86IG51bWJlcik6IHZvaWQgPT4ge1xuXHRsZXQgZmxhZ19zZXQgPSBmYWxzZTtcblx0bGV0IGZsYWdfYXBwZW5kID0gZmFsc2U7XG5cdGZsYWcgfHw9IFNVRkZJWF9BUFBFTkQ7IC8vIGRlZmF1bHQgYXBwZW5kXG5cdGZsYWdfc2V0ID0gZmxhZyA9PT0gU1VGRklYX1JFUExBQ0U7XG5cdHRpdGxlID0gZml4TmFtZXNwYWNlKHRpdGxlKTtcblx0aWYgKHRpdGxlIGluIHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4KSB7XG5cdFx0ZmxhZ19hcHBlbmQgPSBmbGFnID09PSBTVUZGSVhfQVBQRU5EO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGlmIG5vdCBleGlzdCwgZXZlcnkgZmxhZyBjYW4gc2V0XG5cdFx0ZmxhZ19zZXQgPSB0cnVlO1xuXHR9XG5cdGlmIChmbGFnX3NldCkge1xuXHRcdHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSA9IGdlbmVyYXRlQXJyYXkoc3VmZml4KTtcblx0fSBlbHNlIGlmIChmbGFnX2FwcGVuZCkge1xuXHRcdHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSA9IGdlbmVyYXRlQXJyYXkocGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXhbdGl0bGVdID8/IFtdLCBzdWZmaXgpIGFzIHN0cmluZ1tdO1xuXHR9XG59O1xuXG5jb25zdCBUb29sc1JlZGlyZWN0OiBUb29sc1JlZGlyZWN0QXBpID0ge1xuXHR2YXJpYW50czogVkFSSUFOVFMsXG5cdGluaXQoJGJvZHksIG9uT3Blbikge1xuXHRcdGNvbnN0IGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0LmFkZENsYXNzKCdtdy1saXN0LWl0ZW0gY29sbGFwc2libGUgdmVjdG9yLXRhYi1ub2ljb24nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ2NhLXJlZGlyZWN0Jylcblx0XHRcdC5jc3MoJ2N1cnNvcicsICdwb2ludGVyJylcblx0XHRcdC5hcHBlbmQoJCgnPGE+JykuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKCdidG5kZXNjJykpLnRleHQoZ2V0TWVzc2FnZSgnYnRudGl0bGUnKSkpO1xuXHRcdGJ1dHRvbi5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRvbk9wZW4oKTtcblx0XHR9KTtcblx0XHQkYm9keS5maW5kKCdsaSNjYS1oaXN0b3J5JykuYWZ0ZXIoYnV0dG9uKTtcblx0fSxcblx0YXR0YWNoQ29udGFpbmVycyh2aWV3Q29udGFpbmVyLCBjcmVhdGVDb250YWluZXIpIHtcblx0XHR0aGlzLnRhYnMudmlldyA9IHtjb250OiAkKHZpZXdDb250YWluZXIpLCBsb2FkZWQ6IGZhbHNlfTtcblx0XHR0aGlzLnRhYnMuY3JlYXRlID0ge2NvbnQ6ICQoY3JlYXRlQ29udGFpbmVyKSwgbG9hZGVkOiBmYWxzZX07XG5cdH0sXG5cdHRhYnM6IHtcblx0XHR2aWV3OiB7Y29udDogJCgpLCBsb2FkZWQ6IGZhbHNlfSxcblx0XHRjcmVhdGU6IHtjb250OiAkKCksIGxvYWRlZDogZmFsc2V9LFxuXHR9LFxuXHRmaXgocGFnZW5hbWVzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0JCgncC5kZXNjJywgc2VsZi50YWJzLnZpZXcuY29udCkudGV4dChnZXRNZXNzYWdlKCdmaXhsb2FkaW5nJykpO1xuXHRcdCQoJ3BbY2xhc3MhPWRlc2NdJywgc2VsZi50YWJzLnZpZXcuY29udCkucmVtb3ZlKCk7XG5cdFx0c2VsZi5sb2FkaW5nKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdHZvaWQgc2VsZlxuXHRcdFx0LmJ1bGtFZGl0QnlSZWdleChwYWdlbmFtZXMsIC9cXHMqXFxbXFxbLio/KCMuKj8pP1xcXVxcXS8sIGAgW1ske3dnUGFnZU5hbWV9JDFdXWAsIGdldE1lc3NhZ2UoJ2ZpeHN1bW1hcnknKSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0Ly8gZGVsYXkgbG9hZCBiZWZvcmUgdGhlIGFzeW5jaHJvbm91cyB0YXNrcyBvbiBzZXJ2ZXIgZmluaXNoZWRcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5sb2FkZWQoc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0XHRcdFx0c2VsZi5sb2FkVmlldyh0cnVlKTtcblx0XHRcdFx0fSwgMzAwMCk7XG5cdFx0XHR9KTtcblx0fSxcblx0Y3JlYXRlKHBhZ2VuYW1lcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdCQoJ3AuZGVzYycsIHNlbGYudGFicy5jcmVhdGUuY29udCkudGV4dChnZXRNZXNzYWdlKCdjcmVhdGVsb2FkaW5nJykpO1xuXHRcdCQoJ3BbY2xhc3MhPWRlc2NdJywgc2VsZi50YWJzLmNyZWF0ZS5jb250KS5yZW1vdmUoKTtcblx0XHRzZWxmLmxvYWRpbmcoc2VsZi50YWJzLmNyZWF0ZS5jb250KTtcblx0XHR2b2lkIHNlbGZcblx0XHRcdC5idWxrRWRpdChcblx0XHRcdFx0cGFnZW5hbWVzLFxuXHRcdFx0XHRnZXRNZXNzYWdlKElTX0NBVEVHT1JZID8gJ2NyZWF0ZXRleHQtY2F0ZWdvcnknIDogJ2NyZWF0ZXRleHQnKS5yZXBsYWNlKCckMScsIHdnUGFnZU5hbWUpLFxuXHRcdFx0XHRnZXRNZXNzYWdlKCdjcmVhdGVzdW1tYXJ5JykucmVwbGFjZSgnJDEnLCB3Z1BhZ2VOYW1lKVxuXHRcdFx0KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHQvLyBkZWxheSBsb2FkIGJlZm9yZSB0aGUgYXN5bmNocm9ub3VzIHRhc2tzIG9uIHNlcnZlciBmaW5pc2hlZFxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmxvYWRlZChzZWxmLnRhYnMuY3JlYXRlLmNvbnQpO1xuXHRcdFx0XHRcdHNlbGYudGFicy52aWV3LmxvYWRlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdHNlbGYubG9hZENyZWF0ZSh0cnVlKTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRhZGRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsIHRleHQpIHtcblx0XHRpZiAodGl0bGUgaW4gcGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXgpIHtcblx0XHRcdHRleHQgKz0gYFxcbiR7dW5pcXVlQXJyYXkocGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXhbdGl0bGVdID8/IFtdKS5qb2luKCdcXG4nKX1gOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0fVxuXHRcdHJldHVybiB0ZXh0O1xuXHR9LFxuXHRidWxrRWRpdCh0aXRsZXMsIHRleHQsIHN1bW1hcnkpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHR0aXRsZXMgPSB0aXRsZXMuZmlsdGVyKCh2LCBpLCBhcnIpID0+IHtcblx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2KSA9PT0gaTtcblx0XHR9KTtcblx0XHRyZXR1cm4gYXBpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHR0aXRsZXMsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGRlZmVycmVkc1tkZWZlcnJlZHMubGVuZ3RoXSA9IGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdFx0dGV4dDogc2VsZi5hZGRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsIHRleHQpLFxuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdHRhZ3M6IE9QVElPTlMuYXBpVGFnLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRidWxrRWRpdEJ5UmVnZXgodGl0bGVzLCByZWdleCwgdGV4dCwgc3VtbWFyeSkge1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5maWx0ZXIoKHYsIGksIGFycikgPT4ge1xuXHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKHYpID09PSBpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBhcGlcblx0XHRcdC5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdFx0dGl0bGVzLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGRlZmVycmVkcyA9IFtdO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRjb25zdCB7Y29udGVudH0gPSBwYWdlLnJldmlzaW9uc1swXS5zbG90c1snbWFpbiddO1xuXHRcdFx0XHRcdGNvbnN0IG5ld0NvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UocmVnZXgsIHRleHQpO1xuXHRcdFx0XHRcdGRlZmVycmVkc1tkZWZlcnJlZHMubGVuZ3RoXSA9IGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRcdHRpdGxlOiBwYWdlLnRpdGxlLFxuXHRcdFx0XHRcdFx0dGV4dDogbmV3Q29udGVudCxcblx0XHRcdFx0XHRcdHRhZ3M6IE9QVElPTlMuYXBpVGFnLFxuXHRcdFx0XHRcdFx0YmFzZXRpbWVzdGFtcDogcGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wLFxuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gJC53aGVuKC4uLmRlZmVycmVkcyk7XG5cdFx0XHR9KTtcblx0fSxcblx0bG9hZFRhYkNvbnQodGFibmFtZSwgY2FsbGJhY2ssIHJlbG9hZCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IHRhYiA9IHNlbGYudGFic1t0YWJuYW1lXTtcblx0XHRpZiAocmVsb2FkKSB7XG5cdFx0XHR0YWIubG9hZGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghdGFiLmxvYWRlZCkge1xuXHRcdFx0dGFiLmNvbnQuaHRtbCgnJyk7XG5cdFx0XHQvL1xuXHRcdFx0Y29uc3QgJGRlc2MgPSAkKCc8cD4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2Rlc2MnKVxuXHRcdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLmFkZENsYXNzKCdkZXNjLXRleHQnKS50ZXh0KGdldE1lc3NhZ2UoJ3JlZGlsb2FkaW5nJykpKVxuXHRcdFx0XHQuYXBwZW5kVG8odGFiLmNvbnQpO1xuXHRcdFx0Y29uc3QgJHRleHQgPSAkZGVzYy5maW5kKCc+IC5kZXNjLXRleHQnKTtcblx0XHRcdGNhbGxiYWNrXG5cdFx0XHRcdC5hcHBseShzZWxmKVxuXHRcdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLmpzXG5cdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdCR0ZXh0LnRleHQoZ2V0TWVzc2FnZShgdGFiJHt0YWJuYW1lfWRlc2NgKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5mYWlsKCgpID0+IHtcblx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMuanNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0JHRleHQudGV4dChnZXRNZXNzYWdlKGB0YWIke3RhYm5hbWV9bm90Zm91bmRgKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYuYWRkTWV0aG9kcygkZGVzYywgW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3JlZnJlc2gnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgncmVmcmVzaCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5sb2FkVGFiQ29udCh0YWJuYW1lLCBjYWxsYmFjaywgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdHRhYi5sb2FkZWQgPSB0cnVlO1xuXHRcdH1cblx0fSxcblx0bG9hZGluZyhjb250YWluZXIpIHtcblx0XHRpZiAoY29udGFpbmVyLnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpID09PSAnc3BhbicpIHtcblx0XHRcdGNvbnRhaW5lci5hZGRDbGFzcygnbXctYWpheC1sb2FkZXInKTtcblx0XHR9IGVsc2UgaWYgKCQoJ3NwYW4ubXctYWpheC1sb2FkZXInLCBjb250YWluZXIpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0JCgnPHNwYW4+JykuYWRkQ2xhc3MoJ213LWFqYXgtbG9hZGVyJykuYXBwZW5kVG8oY29udGFpbmVyKTtcblx0XHR9XG5cdH0sXG5cdGxvYWRlZChjb250YWluZXIpIHtcblx0XHRpZiAoY29udGFpbmVyLnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpID09PSAnc3BhbicpIHtcblx0XHRcdGNvbnRhaW5lci5yZW1vdmVDbGFzcygnbXctYWpheC1sb2FkZXInKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnc3Bhbi5tdy1hamF4LWxvYWRlcicsIGNvbnRhaW5lcikucmVtb3ZlKCk7XG5cdFx0fVxuXHR9LFxuXHRzZWxlY3RBbGwoY29udCkge1xuXHRcdCQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdOm5vdCg6ZGlzYWJsZWQpJywgY29udCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuXHR9LFxuXHRzZWxlY3RJbnZlcnNlKGNvbnQpIHtcblx0XHQkKCdpbnB1dFt0eXBlPWNoZWNrYm94XTpub3QoOmRpc2FibGVkKScsIGNvbnQpLmVhY2goKF9pbmRleCwgZWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXHRcdFx0JGVsZW1lbnQucHJvcCgnY2hlY2tlZCcsICEkZWxlbWVudC5wcm9wKCdjaGVja2VkJykpO1xuXHRcdH0pO1xuXHR9LFxuXHRzZWxlY3RBY3Rpb24oY29udCwgY2IpIHtcblx0XHRjb25zdCBwYWdlbmFtZXM6IHN0cmluZ1tdID0gW107XG5cdFx0JCgnaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCcsIGNvbnQpLmVhY2goKF9pbmRleCwgcGFnZW5hbWUpID0+IHtcblx0XHRcdHBhZ2VuYW1lc1twYWdlbmFtZXMubGVuZ3RoXSA9ICQocGFnZW5hbWUpLmRhdGEoJ3BhZ2UtdGl0bGUnKTtcblx0XHR9KTtcblx0XHRpZiAocGFnZW5hbWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNiLmNhbGwodGhpcywgcGFnZW5hbWVzKTtcblx0XHR9XG5cdH0sXG5cdGNsaWNrQWN0aW9uKGNvbnQsIGNiKSB7XG5cdFx0Y29uc3QgcGFnZW5hbWUgPSAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCBjb250KS5kYXRhKCdwYWdlLXRpdGxlJyk7XG5cdFx0Y2IuY2FsbCh0aGlzLCBbcGFnZW5hbWVdKTtcblx0fSxcblx0YnVpbGRMaW5rKHt0aXRsZSwgaHJlZiwgY2xpY2ssIGNsYXNzbmFtZX0pIHtcblx0XHRjb25zdCBhID0gJCgnPGE+Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdGhyZWYsXG5cdFx0XHRcdHRhcmdldDogJ19ibGFuaycsXG5cdFx0XHRcdHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInLFxuXHRcdFx0fSlcblx0XHRcdC50ZXh0KHRpdGxlKTtcblx0XHRpZiAoY2xpY2spIHtcblx0XHRcdGEub24oJ2NsaWNrJywgY2xpY2spO1xuXHRcdH1cblx0XHRpZiAoY2xhc3NuYW1lKSB7XG5cdFx0XHRhLmFkZENsYXNzKGNsYXNzbmFtZSk7XG5cdFx0fVxuXHRcdHJldHVybiAkKCc8c3Bhbj4nKS5hZGRDbGFzcygndG9vbHMtcmVkaXJlY3RfbGluaycpLmFwcGVuZChhKTtcblx0fSxcblx0YWRkTWV0aG9kcygkcGFyZW50LCBtZXRob2RzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0bGV0ICRjb250YWluZXIgPSAkcGFyZW50LmZpbmQoJz4gLnRvb2xzLXJlZGlyZWN0X21ldGhvZHMnKTtcblx0XHRjb25zdCBtZXRob2RFeGlzdCA9ICh7aHJlZn06IFJlZGlyZWN0TWV0aG9kKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRyZXR1cm4gJGNvbnRhaW5lci5maW5kKGBhW2hyZWY9JHtKU09OLnN0cmluZ2lmeShocmVmKX1dYCkubGVuZ3RoID4gMDtcblx0XHR9O1xuXHRcdGlmICgkY29udGFpbmVyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0JGNvbnRhaW5lciA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCd0b29scy1yZWRpcmVjdF9tZXRob2RzJykuYXBwZW5kVG8oJHBhcmVudCk7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgbWV0aG9kIG9mIG1ldGhvZHMpIHtcblx0XHRcdGlmICghbWV0aG9kRXhpc3QobWV0aG9kKSkge1xuXHRcdFx0XHRzZWxmLmJ1aWxkTGluayhtZXRob2QpLmFwcGVuZFRvKCRjb250YWluZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0YnVpbGRTZWxlY3Rpb24obWFpbiwgbWV0ZCwgbXQsIGRzYWIpIHtcblx0XHRjb25zdCBjb250ID0gJCgnPHNwYW4+Jyk7XG5cdFx0Y29uc3Qgc2VsZSA9ICQoJzxpbnB1dD4nKS5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JykuYXBwZW5kVG8oY29udCk7XG5cdFx0dGhpcy5idWlsZExpbmsobWFpbikuYXBwZW5kVG8oY29udCk7XG5cdFx0dGhpcy5hZGRNZXRob2RzKGNvbnQsIG1ldGQpO1xuXHRcdHNlbGUuZGF0YSgncGFnZS10aXRsZScsIG10KTtcblx0XHRpZiAoZHNhYikge1xuXHRcdFx0c2VsZS5wcm9wKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gY29udDtcblx0fSxcblx0bG9hZFZpZXcocmVsb2FkKSB7XG5cdFx0Y29uc3QgJGNvbnRhaW5lciA9IHRoaXMudGFicy52aWV3LmNvbnQ7XG5cdFx0dGhpcy5sb2FkVGFiQ29udChcblx0XHRcdCd2aWV3Jyxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubG9hZFJlZGlyZWN0KHdnUGFnZU5hbWUsICRjb250YWluZXIsIDApO1xuXHRcdFx0fSxcblx0XHRcdHJlbG9hZFxuXHRcdCk7XG5cdH0sXG5cdGxvYWRDcmVhdGUocmVsb2FkKSB7XG5cdFx0dGhpcy5sb2FkVGFiQ29udChcblx0XHRcdCdjcmVhdGUnLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5maW5kUmVkaXJlY3Qod2dQYWdlTmFtZSk7XG5cdFx0XHR9LFxuXHRcdFx0cmVsb2FkXG5cdFx0KTtcblx0fSxcblx0bG9hZFJlZGlyZWN0KHBhZ2VuYW1lLCBjb250YWluZXIsIGRlZXAsIGxvYWRlZCkge1xuXHRcdHRoaXMubG9hZGluZyhjb250YWluZXIpO1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGNvbnN0IHRvcCA9IGRlZXAgPyAkKCc8ZGw+JykuYXBwZW5kVG8oY29udGFpbmVyKSA6IGNvbnRhaW5lcjtcblx0XHRpZiAoIWxvYWRlZCkge1xuXHRcdFx0bG9hZGVkID0ge307XG5cdFx0XHRsb2FkZWRbcGFnZW5hbWVdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Y29uc3Qgb25DbGlja0ZpeCA9IChldmVudDogSlF1ZXJ5LkV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCBlbnRyeSA9ICQodGhpcykucGFyZW50cygnZGQsIHAnKS5maXJzdCgpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHNlbGYuY2xpY2tBY3Rpb24oZW50cnksIHRoaXMuZml4KTtcblx0XHR9O1xuXHRcdHZvaWQgYXBpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ3JlZGlyZWN0cycsXG5cdFx0XHRcdHRpdGxlczogcGFnZW5hbWUsXG5cdFx0XHRcdHJkbGltaXQ6ICdtYXgnLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRcdHNlbGYubG9hZGVkKGNvbnRhaW5lcik7XG5cdFx0XHRcdGxldCBoYXNfcmVkaXJlY3QgPSBmYWxzZTtcblx0XHRcdFx0Y29uc3QgZGVzYyA9ICQoJ3AuZGVzYycsIHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRjb25zdCBtYXhpbXVtUmVkaXJlY3REZXB0aCA9IDEwO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRpZiAocGFnZS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHtyZWRpcmVjdHN9ID0gcGFnZTtcblx0XHRcdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiByZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgcmR0aXRsZSA9IHRpdGxlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCB1bHRpdGxlID0gcmR0aXRsZS5yZXBsYWNlKC8gL2csICdfJyk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGVudHJ5ID0gKGRlZXAgPyAkKCc8ZGQ+JykgOiAkKCc8cD4nKSkuYXBwZW5kVG8odG9wKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbWV0aG9kczogUmVkaXJlY3RNZXRob2RbXSA9IFtcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmOiBtdy51dGlsLmdldFVybCh1bHRpdGxlLCB7YWN0aW9uOiAnZWRpdCd9KSxcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdyZWRpZWRpdCcpLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdF07XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGlzQ3ljbGVSZWRpcmVjdCA9IHJkdGl0bGUgaW4gbG9hZGVkO1xuXHRcdFx0XHRcdFx0XHRsb2FkZWRbcmR0aXRsZV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRpZiAoIWlzQ3ljbGVSZWRpcmVjdCAmJiBkZWVwKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWV0aG9kc1ttZXRob2RzLmxlbmd0aF0gPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmOiAnI2ZpeC1yZWRpcmVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFidmlld2ZpeCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xpY2s6IG9uQ2xpY2tGaXgsXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zdCAkY29udGFpbmVyID0gc2VsZlxuXHRcdFx0XHRcdFx0XHRcdC5idWlsZFNlbGVjdGlvbihcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZjogbXcudXRpbC5nZXRVcmwodWx0aXRsZSwge3JlZGlyZWN0OiAnbm8nfSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdG1ldGhvZHMsXG5cdFx0XHRcdFx0XHRcdFx0XHR1bHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0IWRlZXBcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZFRvKGVudHJ5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlzQ3ljbGVSZWRpcmVjdCkge1xuXHRcdFx0XHRcdFx0XHRcdCRjb250YWluZXIuYXBwZW5kKGA8c3BhbiBjbGFzcz1cImVycm9yXCI+JHtnZXRNZXNzYWdlKCdlcnJjeWNsZXJlZGlyZWN0Jyl9PC9zcGFuPmApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGRlZXAgPCBtYXhpbXVtUmVkaXJlY3REZXB0aCkge1xuXHRcdFx0XHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5sb2FkUmVkaXJlY3QocmR0aXRsZSwgZW50cnksIGRlZXAgKyAxLCBsb2FkZWQpO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGhhc19yZWRpcmVjdCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGhhc19yZWRpcmVjdCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaGFzX3JlZGlyZWN0ICYmIGRlZXAgPT09IDEpIHtcblx0XHRcdFx0XHRzZWxmLmFkZE1ldGhvZHMoZGVzYywgW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3NlbGVjdC1hbGwnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0YWxsJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFsbChzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWludmVyc2UnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0aW52ZXJzZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RJbnZlcnNlKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNmaXgtc2VsZWN0ZWQnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFidmlld2ZpeCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBY3Rpb24oc2VsZi50YWJzLnZpZXcuY29udCwgc2VsZi5maXgpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaGFzX3JlZGlyZWN0KSB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlV2l0aChzZWxmKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdFdpdGgoc2VsZik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG5cdH0sXG5cdGZpbmRWYXJpYW50cyhwYWdlbmFtZSwgdGl0bGVzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3Qgc3VmZml4UmVnID0gL14uKz8oKO+8iHxbIF9dXFwoKS4rPyhbKe+8iV0pKSQvO1xuXHRcdGxldCByZXRUaXRsZXM6IHN0cmluZ1tdID0gW107XG5cdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0XHRjb25zdCB4aHIgPSBhcGlcblx0XHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0cGFnZTogcGFnZW5hbWUsXG5cdFx0XHRcdFx0cHJvcDogJ2Rpc3BsYXl0aXRsZScsXG5cdFx0XHRcdFx0dXNlbGFuZzogdmFyaWFudCxcblx0XHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoe3BhcnNlfSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHtkaXNwbGF5dGl0bGV9ID0gcGFyc2U7XG5cdFx0XHRcdFx0Ly8gRXhhbXBsZTpcblx0XHRcdFx0XHQvLyAtIEJlZm9yZTogPHNwYW4gY2xhc3M9XCJtdy1wYWdlLXRpdGxlLW5hbWVzcGFjZVwiPuaxgumXu+eZvuenkTwvc3Bhbj48c3BhbiBjbGFzcz1cIm13LXBhZ2UtdGl0bGUtc2VwYXJhdG9yXCI+Ojwvc3Bhbj48c3BhbiBjbGFzcz1cIm13LXBhZ2UtdGl0bGUtbWFpblwiPuaymeebkjwvc3Bhbj5cblx0XHRcdFx0XHQvLyAtIEFmdGVyOiDmsYLpl7vnmb7np5E65rKZ55uSXG5cdFx0XHRcdFx0bGV0IHRpdGxlID0gJCgnPHNwYW4+JykuYXBwZW5kKGRpc3BsYXl0aXRsZSkuZXEoMCkudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0XHR0aXRsZSA9IGZpeE5hbWVzcGFjZSh0aXRsZSk7XG5cdFx0XHRcdFx0c2V0UmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCAne3vnroDnuYHph43lrprlkJF9fScsIFNVRkZJWF9BUFBFTkQpO1xuXHRcdFx0XHRcdHJldHVybiB0aXRsZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRkZWZlcnJlZHNbZGVmZXJyZWRzLmxlbmd0aF0gPSB4aHI7XG5cdFx0fVxuXHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKS50aGVuKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuXHRcdFx0Y29uc3Qgc3VmZml4ZXMgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgdGl0bGUgb2YgYXJncykge1xuXHRcdFx0XHRsZXQgc3VmZml4O1xuXHRcdFx0XHQvLyBmaW5kIHRpdGxlIHN1ZmZpeCxcblx0XHRcdFx0Ly8gZm9yIGV4YW1wbGUgXCIgKOa1juWNl+W4gilcIiB0byBcIuW4guS4reWMuiAo5rWO5Y2X5biCKVwiXG5cdFx0XHRcdGNvbnN0IHN1ZmZpeEFyciA9IHN1ZmZpeFJlZy5leGVjKHRpdGxlKTtcblx0XHRcdFx0aWYgKHN1ZmZpeEFyciAmJiBzdWZmaXhBcnIubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRcdFx0Wywgc3VmZml4XSA9IHN1ZmZpeEFycjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdWZmaXggPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXRUaXRsZXNbcmV0VGl0bGVzLmxlbmd0aF0gPSB0aXRsZTtcblx0XHRcdFx0c3VmZml4ZXNbc3VmZml4ZXMubGVuZ3RoXSA9IHN1ZmZpeDtcblx0XHRcdH1cblx0XHRcdC8vIGFwcGVuZCBzdWZmaXhlc1xuXHRcdFx0Zm9yIChjb25zdCBzdWZmaXggb2YgdW5pcXVlQXJyYXkoc3VmZml4ZXMpKSB7XG5cdFx0XHRcdHJldFRpdGxlcyA9IFtcblx0XHRcdFx0XHQuLi5yZXRUaXRsZXMsXG5cdFx0XHRcdFx0Li4udGl0bGVzLm1hcCgodGl0bGUpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IG1vZGlmaWVkVGl0bGUgPSBmaXhOYW1lc3BhY2UodGl0bGUpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHN1ZmZpeFJlZy50ZXN0KG1vZGlmaWVkVGl0bGUpID8gbW9kaWZpZWRUaXRsZSA6IG1vZGlmaWVkVGl0bGUgKyBzdWZmaXg7XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZWxmLmZpbmROb3RFeGlzdHModW5pcXVlQXJyYXkocmV0VGl0bGVzKSk7IC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHR9KTtcblx0fSxcblx0ZmluZE5vdEV4aXN0cyh0aXRsZXMpIHtcblx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRjb25zdCBleGNsdWRlcyA9IFsn55So5a2X5qih5byPJ107XG5cdFx0bGV0IGFsbHRpdGxlczogc3RyaW5nW10gPSBbXTtcblx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgVkFSSUFOVFMpIHtcblx0XHRcdGRlZmVycmVkc1tkZWZlcnJlZHMubGVuZ3RoXSA9IGFwaS5nZXQoe1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRleHQ6IHRpdGxlcyxcblx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0XHR0aXRsZTogJ01lZGlhV2lraTpHYWRnZXQtVG9vbHNSZWRpcmVjdC5qcy8tJyxcblx0XHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0XHR1c2VsYW5nOiB2YXJpYW50LFxuXHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKS50aGVuKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBbe3BhcnNlfV0gb2YgYXJncyBhcyBBcnJheTxbKHR5cGVvZiBhcmdzKVtudW1iZXJdXT4pIHtcblx0XHRcdFx0YWxsdGl0bGVzID0gWy4uLmFsbHRpdGxlcywgLi4uJChwYXJzZS50ZXh0KS50ZXh0KCkudHJpbSgpLnNwbGl0KCd8JyldO1xuXHRcdFx0fVxuXHRcdFx0YWxsdGl0bGVzID0gYWxsdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2KSA9PT0gaTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGFwaVxuXHRcdFx0XHQucG9zdCh7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdFx0dGl0bGVzOiBhbGx0aXRsZXMsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRcdFx0dGl0bGVzID0gW107XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7dGl0bGV9ID0gcGFnZTtcblx0XHRcdFx0XHRcdGlmIChwYWdlLm1pc3NpbmcgJiYgIWV4Y2x1ZGVzLmluY2x1ZGVzKHRpdGxlKSkge1xuXHRcdFx0XHRcdFx0XHRpZiAodGl0bGUgaW4gcmVkaXJlY3RFeGNsdWRlcykge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGV4Y2x1ZGUgc3BlY2lhbCB0aXRsZXNcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gdGl0bGU7XG5cdFx0XHRcdFx0XHRcdC8vIG9ubHkgc2V0IGRlZmF1bHQgc3VmZml4XG5cdFx0XHRcdFx0XHRcdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgJ3t75Yir5ZCN6YeN5a6a5ZCRfX0nLCBTVUZGSVhfU0VUREVGQVVMVCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxuXHRmaW5kUmVkaXJlY3QocGFnZW5hbWUpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBmcmNEZWZlcnJlZHMgPSBbXTtcblx0XHRjb25zdCBjb250YWluZXIgPSBzZWxmLnRhYnMuY3JlYXRlLmNvbnQ7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0Y29uc3QgJGNvbnRlbnQgPSAkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0ID4gZGl2Lm13LXBhcnNlci1vdXRwdXQnKTtcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRsZXQgdGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHNlbGYubG9hZGluZyhjb250YWluZXIpO1xuXHRcdGZvciAoY29uc3QgY2FsbGJhY2sgb2YgZmluZFJlZGlyZWN0Q2FsbGJhY2tzKSB7XG5cdFx0XHRjb25zdCByZXQgPSBjYWxsYmFjayhwYWdlbmFtZSwgJGNvbnRlbnQsIHRpdGxlcyk7XG5cdFx0XHRpZiAodHlwZW9mIHJldCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gcmV0O1xuXHRcdFx0fSBlbHNlIGlmICgnZG9uZScgaW4gcmV0KSB7XG5cdFx0XHRcdC8vIGlzIERlZmVycmVkXG5cdFx0XHRcdGZyY0RlZmVycmVkc1tmcmNEZWZlcnJlZHMubGVuZ3RoXSA9IHJldDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRpdGxlcyA9IHVuaXF1ZUFycmF5KFsuLi50aXRsZXMsIC4uLnJldF0pOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHJlbW92ZSBhbGwgZW1wdHkgdGl0bGVzXG5cdFx0dGl0bGVzID0gdGl0bGVzLm1hcCgodGl0bGUpID0+IHRpdGxlIHx8ICcnKS5maWx0ZXIoQm9vbGVhbik7XG5cdFx0Y29uc3Qgb25DbGlja0NyZWF0ZSA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCwgZXZlbnQ6IEpRdWVyeS5FdmVudCk6IHZvaWQge1xuXHRcdFx0Y29uc3QgZW50cnkgPSAkKHRoaXMpLnBhcmVudHMoJ3A6Zmlyc3QnKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRzZWxmLmNsaWNrQWN0aW9uKGVudHJ5LCBzZWxmLmNyZWF0ZSk7XG5cdFx0fTtcblx0XHQvLyBoYW5kbGVzIHRoZSBkZWZlcnJlZCBjYWxsYmFja3Ncblx0XHR2b2lkICQud2hlbiguLi5mcmNEZWZlcnJlZHMpXG5cdFx0XHQudGhlbigoLi4uYXJncykgPT4ge1xuXHRcdFx0XHRmb3IgKGNvbnN0IHJldCBvZiBhcmdzKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiByZXQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSByZXQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRpdGxlcyA9IHVuaXF1ZUFycmF5KFsuLi50aXRsZXMsIC4uLnJldF0pOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzZWxmLmZpbmRWYXJpYW50cyhwYWdlbmFtZSwgdGl0bGVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoZnZ0aXRsZXMpID0+IHtcblx0XHRcdFx0Ly8gYnVpbGQgSFRNTFxuXHRcdFx0XHRzZWxmLmxvYWRlZChjb250YWluZXIpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHRpdGxlIG9mIGZ2dGl0bGVzKSB7XG5cdFx0XHRcdFx0Y29uc3QgdWx0aXRsZSA9IHRpdGxlLnJlcGxhY2UoJyAnLCAnXycpO1xuXHRcdFx0XHRcdGNvbnN0IGVudHJ5ID0gJCgnPHA+JykuYXBwZW5kVG8oY29udGFpbmVyKTtcblx0XHRcdFx0XHRzZWxmLmJ1aWxkU2VsZWN0aW9uKFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiBtdy51dGlsLmdldFVybCh1bHRpdGxlLCB7YWN0aW9uOiAnZWRpdCcsIHJlZGxpbms6ICcxJ30pLFxuXHRcdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdFx0Y2xhc3NuYW1lOiAnbmV3Jyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRocmVmOiAnI2NyZWF0ZS1yZWRpcmVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYmNyZWF0ZXRpdGxlJyksXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6IG9uQ2xpY2tDcmVhdGUsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0dWx0aXRsZSxcblx0XHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdFx0KS5hcHBlbmRUbyhlbnRyeSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZGVzYyA9ICQoJ3AuZGVzYycsIGNvbnRhaW5lcik7XG5cdFx0XHRcdGlmIChmdnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2VsZi5hZGRNZXRob2RzKGRlc2MsIFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNzZWxlY3QtYWxsJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3NlbGVjdGFsbCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBbGwoY29udGFpbmVyKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWludmVyc2UnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0aW52ZXJzZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RJbnZlcnNlKGNvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI2NyZWF0ZS1zZWxlY3RlZCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBY3Rpb24oY29udGFpbmVyLCBzZWxmLmNyZWF0ZSk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZVdpdGgoc2VsZiwgW2Z2dGl0bGVzXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3RXaXRoKHNlbGYsIFtmdnRpdGxlc10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xuXHR9LFxufTtcblxuZXhwb3J0IHtUb29sc1JlZGlyZWN0LCBmaW5kUmVkaXJlY3RDYWxsYmFjaywgZmluZFJlZGlyZWN0QnlTZWxlY3Rvciwgc2V0UmVkaXJlY3RUZXh0U3VmZml4fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFRvb2xzUmVkaXJlY3QvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJjb25zdCBmaXhOYW1lc3BhY2UgPSAodGl0bGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZUlkcywgd2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IG5zUHJlZml4ZXMgPSBbXTtcblx0bGV0IG5zQ2Fub25QcmVmaXg6IHN0cmluZztcblx0bGV0IG5zUHJlZml4UGF0dGVybjogUmVnRXhwO1xuXG5cdGZvciAoY29uc3QgW3RleHQsIG5zaWRdIG9mIE9iamVjdC5lbnRyaWVzKHdnTmFtZXNwYWNlSWRzKSkge1xuXHRcdGlmIChuc2lkID09PSB3Z05hbWVzcGFjZU51bWJlciAmJiAhIXRleHQpIHtcblx0XHRcdG5zUHJlZml4ZXNbbnNQcmVmaXhlcy5sZW5ndGhdID0gdGV4dDtcblx0XHR9XG5cdH1cblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHQvLyBhcnRpY2xlc1xuXHRcdG5zQ2Fub25QcmVmaXggPSAnJztcblx0XHRuc1ByZWZpeFBhdHRlcm4gPSAvXi87XG5cdH0gZWxzZSB7XG5cdFx0bnNDYW5vblByZWZpeCA9IGAke3dnUGFnZU5hbWUuc3BsaXQoJzonKVswXX06YDtcblx0XHRuc1ByZWZpeFBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeKCR7bnNQcmVmaXhlcy5qb2luKCd8Jyl9KTpgLCAnaScpO1xuXHR9XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdFx0Ly8gZG8gbm90aGluZyBpZiBpdCdzIGFydGljbGVzXG5cdFx0cmV0dXJuIHRpdGxlO1xuXHR9IGVsc2UgaWYgKG5zUHJlZml4UGF0dGVybi50ZXN0KHRpdGxlKSkge1xuXHRcdC8vIGNhbm9uaXplIHRoZSBuYW1lc3BhY2Vcblx0XHRyZXR1cm4gdGl0bGUucmVwbGFjZShuc1ByZWZpeFBhdHRlcm4sIG5zQ2Fub25QcmVmaXgpO1xuXHR9XG5cdC8vIGRvbid0IGhhdmUgYSBuYW1lc3BhY2Vcblx0cmV0dXJuIG5zQ2Fub25QcmVmaXggKyB0aXRsZTtcbn07XG5cbmV4cG9ydCB7Zml4TmFtZXNwYWNlfTtcbiIsICJpbXBvcnQgdHlwZSB7TWVzc2FnZUtleX0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBnZXRNZXNzYWdlID0gKGtleTogTWVzc2FnZUtleSBleHRlbmRzIGB0b29sc3JlZGlyZWN0LSR7aW5mZXIgUH1gID8gUCA6IG5ldmVyLCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGZ1bGxLZXk6IHN0cmluZyA9IGB0b29sc3JlZGlyZWN0LSR7a2V5fWA7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGZ1bGxLZXksIC4uLmFyZ3MpLnBhcnNlKCkgOiBtdy5tZXNzYWdlKGZ1bGxLZXkpLnBsYWluKCk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7dHlwZSBBcHAgYXMgVnVlQXBwLCBjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL0FwcC52dWUnO1xuXG5pbnRlcmZhY2UgVG9vbHNSZWRpcmVjdENvbnRyb2xsZXIge1xuXHRhdHRhY2hDb250YWluZXJzKHZpZXdDb250YWluZXI6IEhUTUxFbGVtZW50LCBjcmVhdGVDb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZDtcbn1cblxubGV0IGFwcDogVnVlQXBwPEVsZW1lbnQ+IHwgdW5kZWZpbmVkO1xuXG5jb25zdCBtb3VudFRvb2xzUmVkaXJlY3QgPSAoY29udHJvbGxlcjogVG9vbHNSZWRpcmVjdENvbnRyb2xsZXIsIG9uT3BlbjogKCkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHJvb3QpO1xuXHRhcHAgPSBjcmVhdGVBcHAoQXBwLCB7Y29udHJvbGxlciwgb3BlbjogZmFsc2UsIG9uT3Blbn0pO1xuXHRhcHAubW91bnQocm9vdCk7XG59O1xuXG5leHBvcnQge21vdW50VG9vbHNSZWRpcmVjdH07XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4QnV0dG9uLCBDZHhEaWFsb2d9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtuZXh0VGljaywgcmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7VG9vbHNSZWRpcmVjdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRNZXNzYWdlJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdGNvbnRyb2xsZXI6IHR5cGVvZiBUb29sc1JlZGlyZWN0O1xuXHRvcGVuOiBib29sZWFuO1xuXHRvbk9wZW46ICgpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBpc09wZW4gPSByZWYocHJvcHMub3Blbik7XG5jb25zdCBhY3RpdmVUYWIgPSByZWYoJ3ZpZXcnKTtcbmNvbnN0IHZpZXdDb250YWluZXIgPSByZWY8SFRNTEVsZW1lbnQ+KCk7XG5jb25zdCBjcmVhdGVDb250YWluZXIgPSByZWY8SFRNTEVsZW1lbnQ+KCk7XG5cbmNvbnN0IG9wZW4gPSAoKSA9PiB7XG5cdGlzT3Blbi52YWx1ZSA9IHRydWU7XG5cdHByb3BzLm9uT3BlbigpO1xufTtcblxuY29uc3QgbG9hZFRhYiA9IGFzeW5jICh0YWI6IHN0cmluZywgcmVsb2FkID0gZmFsc2UpID0+IHtcblx0YXdhaXQgbmV4dFRpY2soKTtcblx0aWYgKCF2aWV3Q29udGFpbmVyLnZhbHVlIHx8ICFjcmVhdGVDb250YWluZXIudmFsdWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0cHJvcHMuY29udHJvbGxlci5hdHRhY2hDb250YWluZXJzKHZpZXdDb250YWluZXIudmFsdWUsIGNyZWF0ZUNvbnRhaW5lci52YWx1ZSk7XG5cdGlmICh0YWIgPT09ICd2aWV3Jykge1xuXHRcdHByb3BzLmNvbnRyb2xsZXIubG9hZFZpZXcocmVsb2FkKTtcblx0fSBlbHNlIHtcblx0XHRwcm9wcy5jb250cm9sbGVyLmxvYWRDcmVhdGUocmVsb2FkKTtcblx0fVxufTtcblxud2F0Y2goYWN0aXZlVGFiLCAodGFiKSA9PiB7XG5cdHZvaWQgbG9hZFRhYih0YWIpO1xufSk7XG5cbndhdGNoKGlzT3BlbiwgKG9wZW4pID0+IHtcblx0aWYgKG9wZW4pIHtcblx0XHR2b2lkIGxvYWRUYWIoYWN0aXZlVGFiLnZhbHVlKTtcblx0fVxufSk7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWJ1dHRvbiBjbGFzcz1cInRvb2xzLXJlZGlyZWN0LXRyaWdnZXJcIiBAY2xpY2s9XCJvcGVuXCI+e3sgZ2V0TWVzc2FnZSgnYnRudGl0bGUnKSB9fTwvY2R4LWJ1dHRvbj5cblx0PGNkeC1kaWFsb2cgdi1tb2RlbDpvcGVuPVwiaXNPcGVuXCIgOnRpdGxlPVwiZ2V0TWVzc2FnZSgnZGxndGl0bGUnKVwiIDp1c2UtY2xvc2UtYnV0dG9uPVwidHJ1ZVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJ0b29scy1yZWRpcmVjdC10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj5cblx0XHRcdDxjZHgtYnV0dG9uXG5cdFx0XHRcdDp3ZWlnaHQ9XCJhY3RpdmVUYWIgPT09ICd2aWV3JyA/ICdwcmltYXJ5JyA6ICdxdWlldCdcIlxuXHRcdFx0XHRyb2xlPVwidGFiXCJcblx0XHRcdFx0OmFyaWEtc2VsZWN0ZWQ9XCJhY3RpdmVUYWIgPT09ICd2aWV3J1wiXG5cdFx0XHRcdEBjbGljaz1cImFjdGl2ZVRhYiA9ICd2aWV3J1wiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7IGdldE1lc3NhZ2UoJ3RhYnZpZXd0aXRsZScpIH19XG5cdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0XHQ8Y2R4LWJ1dHRvblxuXHRcdFx0XHQ6d2VpZ2h0PVwiYWN0aXZlVGFiID09PSAnY3JlYXRlJyA/ICdwcmltYXJ5JyA6ICdxdWlldCdcIlxuXHRcdFx0XHRyb2xlPVwidGFiXCJcblx0XHRcdFx0OmFyaWEtc2VsZWN0ZWQ9XCJhY3RpdmVUYWIgPT09ICdjcmVhdGUnXCJcblx0XHRcdFx0QGNsaWNrPVwiYWN0aXZlVGFiID0gJ2NyZWF0ZSdcIlxuXHRcdFx0PlxuXHRcdFx0XHR7eyBnZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpIH19XG5cdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdlxuXHRcdFx0di1zaG93PVwiYWN0aXZlVGFiID09PSAndmlldydcIlxuXHRcdFx0cmVmPVwidmlld0NvbnRhaW5lclwiXG5cdFx0XHRjbGFzcz1cImRpYWxvZy1yZWRpcmVjdCB0YWItcmVkaXJlY3RcIlxuXHRcdFx0cm9sZT1cInRhYnBhbmVsXCJcblx0XHQ+PC9kaXY+XG5cdFx0PGRpdlxuXHRcdFx0di1zaG93PVwiYWN0aXZlVGFiID09PSAnY3JlYXRlJ1wiXG5cdFx0XHRyZWY9XCJjcmVhdGVDb250YWluZXJcIlxuXHRcdFx0Y2xhc3M9XCJkaWFsb2ctcmVkaXJlY3QgdGFiLXJlZGlyZWN0XCJcblx0XHRcdHJvbGU9XCJ0YWJwYW5lbFwiXG5cdFx0PjwvZGl2PlxuXHQ8L2NkeC1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIj5cbi50b29scy1yZWRpcmVjdC10cmlnZ2VyIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnRvb2xzLXJlZGlyZWN0LXRhYnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDRweDtcblx0bWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmRpYWxvZy1yZWRpcmVjdCB7XG5cdG1heC1oZWlnaHQ6IDY1dmg7XG5cdG92ZXJmbG93LXk6IGF1dG87XG5cblx0Lm13LWFqYXgtbG9hZGVyIHtcblx0XHR0b3A6IDA7XG5cdH1cblxuXHRhIHtcblx0XHRjb2xvcjogIzA2NDVhZDtcblxuXHRcdCY6dmlzaXRlZCB7XG5cdFx0XHRjb2xvcjogIzBiMDA4MDtcblx0XHR9XG5cblx0XHQmLm5ldyB7XG5cdFx0XHRjb2xvcjogI2MyMDtcblxuXHRcdFx0Jjp2aXNpdGVkIHtcblx0XHRcdFx0Y29sb3I6ICNhNTU4NTg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgdlNob3cgYXMgX3ZTaG93LCB3aXRoRGlyZWN0aXZlcyBhcyBfd2l0aERpcmVjdGl2ZXMsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7XG4gIGNsYXNzOiBcInRvb2xzLXJlZGlyZWN0LXRhYnNcIixcbiAgcm9sZTogXCJ0YWJsaXN0XCJcbn1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7XG4gIHJlZjogXCJ2aWV3Q29udGFpbmVyXCIsXG4gIGNsYXNzOiBcImRpYWxvZy1yZWRpcmVjdCB0YWItcmVkaXJlY3RcIixcbiAgcm9sZTogXCJ0YWJwYW5lbFwiXG59XG5jb25zdCBfaG9pc3RlZF8zID0ge1xuICByZWY6IFwiY3JlYXRlQ29udGFpbmVyXCIsXG4gIGNsYXNzOiBcImRpYWxvZy1yZWRpcmVjdCB0YWItcmVkaXJlY3RcIixcbiAgcm9sZTogXCJ0YWJwYW5lbFwiXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgW1xuICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICAgIGNsYXNzOiBcInRvb2xzLXJlZGlyZWN0LXRyaWdnZXJcIixcbiAgICAgIG9uQ2xpY2s6ICRzZXR1cC5vcGVuXG4gICAgfSwge1xuICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ2J0bnRpdGxlJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICBdKSxcbiAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgfSksXG4gICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeERpYWxvZ1wiXSwge1xuICAgICAgb3BlbjogJHNldHVwLmlzT3BlbixcbiAgICAgIFwib25VcGRhdGU6b3BlblwiOiBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc09wZW4pID0gJGV2ZW50KSksXG4gICAgICB0aXRsZTogJHNldHVwLmdldE1lc3NhZ2UoJ2RsZ3RpdGxlJyksXG4gICAgICBcInVzZS1jbG9zZS1idXR0b25cIjogdHJ1ZVxuICAgIH0sIHtcbiAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgICAgd2VpZ2h0OiAkc2V0dXAuYWN0aXZlVGFiID09PSAndmlldycgPyAncHJpbWFyeScgOiAncXVpZXQnLFxuICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiAkc2V0dXAuYWN0aXZlVGFiID09PSAndmlldycsXG4gICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoJHNldHVwLmFjdGl2ZVRhYiA9ICd2aWV3JykpXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ3RhYnZpZXd0aXRsZScpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIndlaWdodFwiLCBcImFyaWEtc2VsZWN0ZWRcIl0pLFxuICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICAgICAgICAgIHdlaWdodDogJHNldHVwLmFjdGl2ZVRhYiA9PT0gJ2NyZWF0ZScgPyAncHJpbWFyeScgOiAncXVpZXQnLFxuICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiAkc2V0dXAuYWN0aXZlVGFiID09PSAnY3JlYXRlJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gJGV2ZW50ID0+ICgkc2V0dXAuYWN0aXZlVGFiID0gJ2NyZWF0ZScpKVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIndlaWdodFwiLCBcImFyaWEtc2VsZWN0ZWRcIl0pXG4gICAgICAgIF0pLFxuICAgICAgICBfd2l0aERpcmVjdGl2ZXMoX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBudWxsLCA1MTIgLyogTkVFRF9QQVRDSCAqLyksIFtcbiAgICAgICAgICBbX3ZTaG93LCAkc2V0dXAuYWN0aXZlVGFiID09PSAndmlldyddXG4gICAgICAgIF0pLFxuICAgICAgICBfd2l0aERpcmVjdGl2ZXMoX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBudWxsLCA1MTIgLyogTkVFRF9QQVRDSCAqLyksIFtcbiAgICAgICAgICBbX3ZTaG93LCAkc2V0dXAuYWN0aXZlVGFiID09PSAnY3JlYXRlJ11cbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICB9LCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwidGl0bGVcIl0pXG4gIF0sIDY0IC8qIFNUQUJMRV9GUkFHTUVOVCAqLykpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVG9vbHNSZWRpcmVjdFxcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxUb29sc1JlZGlyZWN0XFxcXEFwcC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVG9vbHNSZWRpcmVjdFxcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVG9vbHNSZWRpcmVjdFxcXFxBcHAudnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgdHlwZSB7TWVzc2FnZUtleX0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IHNldE1lc3NhZ2VzID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBERUZBVUxUX01FU1NBR0VTX0hBTlMgPSB7XG5cdFx0J3Rvb2xzcmVkaXJlY3QtYnRudGl0bGUnOiAn6YeN5a6a5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1idG5kZXNjJzogJ+WIm+W7uuWSjOeuoeeQhuatpOmhtemdoueahOmHjeWumuWQkScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZGxndGl0bGUnOiAn5Yib5bu65ZKM566h55CG6YeN5a6a5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1yZWRpbG9hZGluZyc6ICfmlbDmja7liqDovb3kuK3vvIzor7fnqI3lgJnigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXJlZGllZGl0JzogJ+e8lui+kScsXG5cdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0YWxsJzogJ+WFqOmAiScsXG5cdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0aW52ZXJzZSc6ICflj43pgIknLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXd0aXRsZSc6ICfmn6XnnIsnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdkZXNjJzogJ+S7peS4i+aYr+aMh+WQkeatpOmhtemdoueahOmHjeWumuWQkemhte+8micsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld25vdGZvdW5kJzogJ+ayoeacieaJvuWIsOS7u+S9leaMh+WQkeatpOmhtemdoueahOmHjeWumuWQkemhteOAgicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld211bHRpJzogJ+WkmumHjScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2ZpeCc6ICfkv67lpI0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeGxvYWRpbmcnOiAn6K+356iN5YCZ77yM5q2j5Zyo6Ieq5Yqo5L+u5aSN6YeN5a6a5ZCR4oCm4oCmJyxcblx0XHQndG9vbHNyZWRpcmVjdC1maXh0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeHN1bW1hcnknOiAn57yW6L6R5bel5YW377ya5L+u5aSN5aSa6YeN6YeN5a6a5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGV0aXRsZSc6ICfliJvlu7onLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWRlc2MnOiAn5Lul5LiL5piv5bCa5pyq5Yib5bu655qE6YeN5a6a5ZCR6aG177yaJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVub3Rmb3VuZCc6ICfmsqHmnInmib7liLDlj6/ku6XliJvlu7rnmoTph43lrprlkJHpobXjgIInLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWFsbCc6ICflhajpg6jliJvlu7onLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZWxvYWRpbmcnOiAn6K+356iN5YCZ77yM5q2j5Zyo6Ieq5Yqo5Yib5bu66YeN5a6a5ZCR4oCm4oCmJyxcblx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGV0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXRleHQtY2F0ZWdvcnknOiAne3vliIbnsbvph43lrprlkJF8JDF9fScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlc3VtbWFyeSc6ICfnvJbovpHlt6XlhbfvvJroh6rliqjliJvlu7rph43lrprlkJHliLBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWVycmN5Y2xlcmVkaXJlY3QnOiAn5peg5rOV6Ieq5Yqo5L+u5aSN77ya5Y+R546w5b6q546v6YeN5a6a5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1yZWZyZXNoJzogJ+WIt+aWsCcsXG5cdH0gc2F0aXNmaWVzIFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+O1xuXHRjb25zdCBERUZBVUxUX01FU1NBR0VTX0hBTlQgPSB7XG5cdFx0J3Rvb2xzcmVkaXJlY3QtYnRudGl0bGUnOiAn6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1idG5kZXNjJzogJ+WJteW7uuWSjOeuoeeQhuatpOmggemdoueahOmHjeaWsOWwjuWQkScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZGxndGl0bGUnOiAn5Ym15bu65ZKM566h55CG6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1yZWRpbG9hZGluZyc6ICfmlbjmk5rliqDovInkuK3vvIzoq4vnqI3lgJnigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXJlZGllZGl0JzogJ+e3qOi8rycsXG5cdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0YWxsJzogJ+WFqOmBuCcsXG5cdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0aW52ZXJzZSc6ICflj43pgbgnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXd0aXRsZSc6ICfmn6XnnIsnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdkZXNjJzogJ+S7peS4i+aYr+aMh+WQkeatpOmggemdoueahOmHjeaWsOWwjuWQkemgge+8micsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld25vdGZvdW5kJzogJ+aykuacieaJvuWIsOS7u+S9leaMh+WQkeatpOmggemdoueahOmHjeaWsOWwjuWQkemggeOAgicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld211bHRpJzogJ+WkmumHjScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2ZpeCc6ICfkv67lvqknLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeGxvYWRpbmcnOiAn6KuL56iN5YCZ77yM5q2j5Zyo6Ieq5YuV5L+u5b6p6YeN5paw5bCO5ZCR4oCm4oCmJyxcblx0XHQndG9vbHNyZWRpcmVjdC1maXh0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeHN1bW1hcnknOiAn57eo6Lyv5bel5YW377ya5L+u5b6p5aSa6YeN6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGV0aXRsZSc6ICflibXlu7onLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWRlc2MnOiAn5Lul5LiL5piv5bCa5pyq5Ym15bu655qE6YeN5paw5bCO5ZCR6aCB77yaJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVub3Rmb3VuZCc6ICfmspLmnInmib7liLDlj6/ku6XlibXlu7rnmoTph43mlrDlsI7lkJHpoIHjgIInLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWFsbCc6ICflhajpg6jlibXlu7onLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZWxvYWRpbmcnOiAn6KuL56iN5YCZ77yM5q2j5Zyo6Ieq5YuV5Ym15bu66YeN5paw5bCO5ZCR4oCm4oCmJyxcblx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGV0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXRleHQtY2F0ZWdvcnknOiAne3vliIbnsbvph43lrprlkJF8JDF9fScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlc3VtbWFyeSc6ICfnt6jovK/lt6XlhbfvvJroh6rli5XlibXlu7rph43mlrDlsI7lkJHliLBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWVycmN5Y2xlcmVkaXJlY3QnOiAn54Sh5rOV6Ieq5YuV5L+u5b6p77ya55m854++5b6q55Kw6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1yZWZyZXNoJzogJ+WIt+aWsCcsXG5cdH0gc2F0aXNmaWVzIFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+O1xuXG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoREVGQVVMVF9NRVNTQUdFU19IQU5UKTtcblx0fSBlbHNlIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoREVGQVVMVF9NRVNTQUdFU19IQU5TKTtcblx0fVxufTtcblxuZXhwb3J0IHtzZXRNZXNzYWdlc307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCx1QkFBQTtFQUFBRSx3QkFBQUEsTUFBQUE7RUFBQUMsc0JBQUFBLE1BQUFBO0VBQUFDLHVCQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQVAscUJBQUE7O0FDQ0MsSUFBQVEsU0FBVTtBQUNWLElBQUFDLFVBQVc7O0FDRlosSUFBTUMsZ0JBQWdCO0FBQ3RCLElBQU1DLGlCQUFpQjtBQUN2QixJQUFNQyxvQkFBb0I7QUFFMUIsSUFBTUMsV0FBVyxDQUFDLFdBQVcsV0FBVyxTQUFTLFNBQVMsU0FBUyxTQUFTLFNBQVMsT0FBTzs7QUNBNUYsSUFBQUMscUJBQXlDQyxRQUFBLGlCQUFBOztBQ0h6QyxJQUFBQyxvQkFBd0JELFFBQUEsaUJBQUE7QUFFeEIsSUFBTUUsT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSxpQkFBQUMsT0FBbUNWLE9BQU8sQ0FBRTs7QUNIaEUsSUFBTVcsZUFBZ0JDLFdBQTBCO0FBQy9DLFFBQU07SUFBQ0M7SUFBZ0JDLG1CQUFBQztJQUFtQkMsWUFBQUM7RUFBVSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRXRFLFFBQU1DLGFBQWEsQ0FBQTtBQUNuQixNQUFJQztBQUNKLE1BQUlDO0FBRUosV0FBQUMsS0FBQSxHQUFBQyxrQkFBMkJDLE9BQU9DLFFBQVFkLGNBQWMsR0FBQVcsS0FBQUMsZ0JBQUFHLFFBQUFKLE1BQUc7QUFBM0QsVUFBVyxDQUFDSyxNQUFNQyxJQUFJLElBQUFMLGdCQUFBRCxFQUFBO0FBQ3JCLFFBQUlNLFNBQVNmLHNCQUFxQixDQUFDLENBQUNjLE1BQU07QUFDekNSLGlCQUFXQSxXQUFXTyxNQUFNLElBQUlDO0lBQ2pDO0VBQ0Q7QUFFQSxNQUFJZCx1QkFBc0IsR0FBRztBQUU1Qk8sb0JBQWdCO0FBQ2hCQyxzQkFBa0I7RUFDbkIsT0FBTztBQUNORCxvQkFBQSxHQUFBWixPQUFtQk8sWUFBV2MsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFDLEdBQUE7QUFDM0NSLHNCQUFrQixJQUFJUyxPQUFBLEtBQUF0QixPQUFZVyxXQUFXWSxLQUFLLEdBQUcsR0FBQyxJQUFBLEdBQU0sR0FBRztFQUNoRTtBQUVBLE1BQUlsQix1QkFBc0IsR0FBRztBQUU1QixXQUFPSDtFQUNSLFdBQVdXLGdCQUFnQlcsS0FBS3RCLEtBQUssR0FBRztBQUV2QyxXQUFPQSxNQUFNdUIsUUFBUVosaUJBQWlCRCxhQUFhO0VBQ3BEO0FBRUEsU0FBT0EsZ0JBQWdCVjtBQUN4Qjs7QUM3QkEsSUFBTXdCLGFBQWFBLENBQUNDLFFBQW1FQyxTQUEyQjtBQUNqSCxRQUFNQyxVQUFBLGlCQUFBN0IsT0FBbUMyQixHQUFHO0FBSTVDLFNBQU9DLEtBQUtWLFNBQVNWLEdBQUdzQixRQUFRRCxTQUFTLEdBQUdELElBQUksRUFBRUcsTUFBTSxJQUFJdkIsR0FBR3NCLFFBQVFELE9BQU8sRUFBRUcsTUFBTTtBQUN2Rjs7QUhBQSxJQUFNO0VBQUM1QjtFQUFtQkU7QUFBVSxJQUFJRSxHQUFHQyxPQUFPQyxJQUFJO0FBQ3RELElBQU11QixjQUFjN0Isc0JBQXNCO0FBQzFDLElBQUk4Qix3QkFBNEMsQ0FBQTtBQUNoRCxJQUFNQyw2QkFBdUQsQ0FBQztBQUM5RCxJQUFNQyxtQkFBNEMsQ0FBQztBQVNuRCxJQUFNcEQsdUJBQXVCLFNBRTVCcUQsYUFDR1QsTUFDZ0I7QUFDbkIsTUFBSVMsVUFBVTtBQUNiSCwwQkFBc0JBLHNCQUFzQmhCLE1BQU0sSUFBSW1CO0VBQ3ZELE9BQU87QUFDTkgsNkJBQUEsR0FBd0J2QyxtQkFBQTJDLGVBQWNKLHVCQUF1QkcsVUFBVSxHQUFHVCxJQUFJO0VBQy9FO0FBQ0EsU0FBTztBQUNSO0FBUUEsSUFBTTdDLHlCQUF5QixTQUFrQ3dELFVBQW9DO0FBRXBHTCx3QkFBc0JBLHNCQUFzQmhCLE1BQU0sSUFBSSxNQUFNO0FBQzNELFdBQU9zQixFQUFFRCxRQUFRLEVBQUVFLElBQUksQ0FBQ0MsUUFBUUMsWUFBWTtBQUMzQyxhQUFPSCxFQUFFRyxPQUFPLEVBQUVDLEdBQUcsQ0FBQyxFQUFFekIsS0FBSyxFQUFFMEIsS0FBSyxLQUFLO0lBQzFDLENBQUM7RUFDRjtBQUNBLFNBQU87QUFDUjtBQUVBLElBQU01RCx3QkFBd0JBLENBQUNpQixPQUFlNEMsUUFBZ0JDLFNBQXdCO0FBQ3JGLE1BQUlDLFdBQVc7QUFDZixNQUFJQyxjQUFjO0FBQ2xCRixXQUFBQSxPQUFTeEQ7QUFDVHlELGFBQVdELFNBQVN2RDtBQUNwQlUsVUFBUUQsYUFBYUMsS0FBSztBQUMxQixNQUFJQSxTQUFTaUMsNEJBQTRCO0FBQ3hDYyxrQkFBY0YsU0FBU3hEO0VBQ3hCLE9BQU87QUFFTnlELGVBQVc7RUFDWjtBQUNBLE1BQUlBLFVBQVU7QUFDYmIsK0JBQTJCakMsS0FBSyxLQUFBLEdBQUlQLG1CQUFBMkMsZUFBY1EsTUFBTTtFQUN6RCxXQUFXRyxhQUFhO0FBQUEsUUFBQUM7QUFDdkJmLCtCQUEyQmpDLEtBQUssS0FBQSxHQUFJUCxtQkFBQTJDLGdCQUFBWSx3QkFBY2YsMkJBQTJCakMsS0FBSyxPQUFBLFFBQUFnRCwwQkFBQSxTQUFBQSx3QkFBSyxDQUFBLEdBQUlKLE1BQU07RUFDbEc7QUFDRDtBQUVBLElBQU1LLGdCQUFrQztFQUN2Q0MsVUFBVTFEO0VBQ1YyRCxLQUFLQyxPQUFPQyxRQUFRO0FBQ25CLFVBQU1DLFNBQVNoQixFQUFFLE1BQU0sRUFDckJpQixTQUFTLDRDQUE0QyxFQUNyREMsS0FBSyxNQUFNLGFBQWEsRUFDeEJDLElBQUksVUFBVSxTQUFTLEVBQ3ZCQyxPQUFPcEIsRUFBRSxLQUFLLEVBQUVrQixLQUFLLFNBQVNoQyxXQUFXLFNBQVMsQ0FBQyxFQUFFUCxLQUFLTyxXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBQ25GOEIsV0FBT0ssR0FBRyxTQUFVQyxXQUFVO0FBQzdCQSxZQUFNQyxlQUFlO0FBQ3JCUixhQUFPO0lBQ1IsQ0FBQztBQUNERCxVQUFNVSxLQUFLLGVBQWUsRUFBRUMsTUFBTVQsTUFBTTtFQUN6QztFQUNBVSxpQkFBaUJDLGVBQWVDLGlCQUFpQjtBQUNoRCxTQUFLQyxLQUFLQyxPQUFPO01BQUNDLE1BQU0vQixFQUFFMkIsYUFBYTtNQUFHSyxRQUFRO0lBQUs7QUFDdkQsU0FBS0gsS0FBS0ksU0FBUztNQUFDRixNQUFNL0IsRUFBRTRCLGVBQWU7TUFBR0ksUUFBUTtJQUFLO0VBQzVEO0VBQ0FILE1BQU07SUFDTEMsTUFBTTtNQUFDQyxNQUFNL0IsRUFBRTtNQUFHZ0MsUUFBUTtJQUFLO0lBQy9CQyxRQUFRO01BQUNGLE1BQU0vQixFQUFFO01BQUdnQyxRQUFRO0lBQUs7RUFDbEM7RUFDQUUsSUFBSUMsV0FBVztBQUNkLFVBQU1DLE9BQU87QUFDYnBDLE1BQUUsVUFBVW9DLEtBQUtQLEtBQUtDLEtBQUtDLElBQUksRUFBRXBELEtBQUtPLFdBQVcsWUFBWSxDQUFDO0FBQzlEYyxNQUFFLGtCQUFrQm9DLEtBQUtQLEtBQUtDLEtBQUtDLElBQUksRUFBRU0sT0FBTztBQUNoREQsU0FBS0UsUUFBUUYsS0FBS1AsS0FBS0MsS0FBS0MsSUFBSTtBQUNoQyxTQUFLSyxLQUNIRyxnQkFBZ0JKLFdBQVcseUJBQUEsTUFBQTNFLE9BQStCTSxZQUFVLE1BQUEsR0FBUW9CLFdBQVcsWUFBWSxDQUFDLEVBQ3BHc0QsS0FBSyxNQUFNO0FBRVhDLGlCQUFXLE1BQU07QUFDaEJMLGFBQUtKLE9BQU9JLEtBQUtQLEtBQUtDLEtBQUtDLElBQUk7QUFDL0JLLGFBQUtNLFNBQVMsSUFBSTtNQUNuQixHQUFHLEdBQUk7SUFDUixDQUFDO0VBQ0g7RUFDQVQsT0FBT0UsV0FBVztBQUNqQixVQUFNQyxPQUFPO0FBQ2JwQyxNQUFFLFVBQVVvQyxLQUFLUCxLQUFLSSxPQUFPRixJQUFJLEVBQUVwRCxLQUFLTyxXQUFXLGVBQWUsQ0FBQztBQUNuRWMsTUFBRSxrQkFBa0JvQyxLQUFLUCxLQUFLSSxPQUFPRixJQUFJLEVBQUVNLE9BQU87QUFDbERELFNBQUtFLFFBQVFGLEtBQUtQLEtBQUtJLE9BQU9GLElBQUk7QUFDbEMsU0FBS0ssS0FDSE8sU0FDQVIsV0FDQWpELFdBQVdPLGNBQWMsd0JBQXdCLFlBQVksRUFBRVIsUUFBUSxNQUFNbkIsVUFBVSxHQUN2Rm9CLFdBQVcsZUFBZSxFQUFFRCxRQUFRLE1BQU1uQixVQUFVLENBQ3JELEVBQ0MwRSxLQUFLLE1BQU07QUFFWEMsaUJBQVcsTUFBTTtBQUNoQkwsYUFBS0osT0FBT0ksS0FBS1AsS0FBS0ksT0FBT0YsSUFBSTtBQUNqQ0ssYUFBS1AsS0FBS0MsS0FBS0UsU0FBUztBQUN4QkksYUFBS1EsV0FBVyxJQUFJO01BQ3JCLEdBQUcsR0FBRztJQUNQLENBQUM7RUFDSDtFQUNBQyxzQkFBc0JuRixPQUFPaUIsTUFBTTtBQUNsQyxRQUFJakIsU0FBU2lDLDRCQUE0QjtBQUFBLFVBQUFtRDtBQUN4Q25FLGNBQUEsS0FBQW5CLFFBQVEsR0FBS0wsbUJBQUE0RixjQUFBRCx5QkFBWW5ELDJCQUEyQmpDLEtBQUssT0FBQSxRQUFBb0YsMkJBQUEsU0FBQUEseUJBQUssQ0FBQSxDQUFFLEVBQUUvRCxLQUFLLElBQUksQ0FBQztJQUM3RTtBQUNBLFdBQU9KO0VBQ1I7RUFDQWdFLFNBQVNLLFFBQVFyRSxNQUFNc0UsU0FBUztBQUMvQixVQUFNYixPQUFPO0FBQ2JZLGFBQVNBLE9BQU9FLE9BQU8sQ0FBQ0MsR0FBR0MsR0FBR0MsUUFBUTtBQUNyQyxhQUFPQSxJQUFJQyxRQUFRSCxDQUFDLE1BQU1DO0lBQzNCLENBQUM7QUFDRCxXQUFPOUYsSUFDTGlHLEtBQUs7TUFDTEMsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTTtNQUNOWDtJQUNELENBQUMsRUFDQVIsS0FBSyxDQUFDO01BQUNvQjtJQUFLLE1BQU07QUFDbEIsWUFBTUMsWUFBWSxDQUFBO0FBQUMsVUFBQUMsYUFBQUMsMkJBQ0dILE1BQU1JLEtBQUEsR0FBQUM7QUFBQSxVQUFBO0FBQTVCLGFBQUFILFdBQUFJLEVBQUEsR0FBQSxFQUFBRCxTQUFBSCxXQUFBSyxFQUFBLEdBQUFDLFFBQW1DO0FBQUEsZ0JBQXhCO1lBQUMxRztVQUFLLElBQUF1RyxPQUFBSTtBQUNoQlIsb0JBQVVBLFVBQVVuRixNQUFNLElBQUlwQixJQUFJZ0gsY0FBYyxRQUFRO1lBQ3ZEZCxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsZUFBZTtZQUNmaEc7WUFDQWlCLE1BQU15RCxLQUFLUyxzQkFBc0JuRixPQUFPaUIsSUFBSTtZQUM1Q3NFO1lBQ0FzQixNQUFjMUg7VUFDZixDQUFDO1FBQ0Y7TUFBQSxTQUFBMkgsS0FBQTtBQUFBVixtQkFBQVcsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQVYsbUJBQUFZLEVBQUE7TUFBQTtBQUNBLGFBQU8xRSxFQUFFMkUsS0FBSyxHQUFHZCxTQUFTO0lBQzNCLENBQUM7RUFDSDtFQUNBdEIsZ0JBQWdCUyxRQUFRNEIsT0FBT2pHLE1BQU1zRSxTQUFTO0FBQzdDRCxhQUFTQSxPQUFPRSxPQUFPLENBQUNDLEdBQUdDLEdBQUdDLFFBQVE7QUFDckMsYUFBT0EsSUFBSUMsUUFBUUgsQ0FBQyxNQUFNQztJQUMzQixDQUFDO0FBQ0QsV0FBTzlGLElBQ0xpRyxLQUFLO01BQ0xDLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTmtCLFFBQVE7TUFDUkMsU0FBUztNQUNUOUI7SUFDRCxDQUFDLEVBQ0FSLEtBQUssQ0FBQztNQUFDb0I7SUFBSyxNQUFNO0FBQ2xCLFlBQU1DLFlBQVksQ0FBQTtBQUFDLFVBQUFrQixhQUFBaEIsMkJBQ0FILE1BQU1JLEtBQUEsR0FBQWdCO0FBQUEsVUFBQTtBQUF6QixhQUFBRCxXQUFBYixFQUFBLEdBQUEsRUFBQWMsU0FBQUQsV0FBQVosRUFBQSxHQUFBQyxRQUFnQztBQUFBLGdCQUFyQmEsT0FBQUQsT0FBQVg7QUFDVixnQkFBTTtZQUFDYTtVQUFPLElBQUlELEtBQUtFLFVBQVUsQ0FBQyxFQUFFQyxNQUFNLE1BQU07QUFDaEQsZ0JBQU1DLGFBQWFILFFBQVFqRyxRQUFRMkYsT0FBT2pHLElBQUk7QUFDOUNrRixvQkFBVUEsVUFBVW5GLE1BQU0sSUFBSXBCLElBQUlnSCxjQUFjLFFBQVE7WUFDdkRkLFFBQVE7WUFDUkMsUUFBUTtZQUNSQyxlQUFlO1lBQ2ZoRyxPQUFPdUgsS0FBS3ZIO1lBQ1ppQixNQUFNMEc7WUFDTmQsTUFBYzFIO1lBQ2R5SSxlQUFlTCxLQUFLRSxVQUFVLENBQUMsRUFBRUk7WUFDakN0QztVQUNELENBQUM7UUFDRjtNQUFBLFNBQUF1QixLQUFBO0FBQUFPLG1CQUFBTixFQUFBRCxHQUFBO01BQUEsVUFBQTtBQUFBTyxtQkFBQUwsRUFBQTtNQUFBO0FBQ0EsYUFBTzFFLEVBQUUyRSxLQUFLLEdBQUdkLFNBQVM7SUFDM0IsQ0FBQztFQUNIO0VBQ0EyQixZQUFZQyxTQUFTNUYsVUFBVTZGLFFBQVE7QUFDdEMsVUFBTXRELE9BQU87QUFDYixVQUFNdUQsTUFBTXZELEtBQUtQLEtBQUs0RCxPQUFPO0FBQzdCLFFBQUlDLFFBQVE7QUFDWEMsVUFBSTNELFNBQVM7SUFDZDtBQUNBLFFBQUksQ0FBQzJELElBQUkzRCxRQUFRO0FBQ2hCMkQsVUFBSTVELEtBQUs2RCxLQUFLLEVBQUU7QUFFaEIsWUFBTUMsUUFBUTdGLEVBQUUsS0FBSyxFQUNuQmlCLFNBQVMsTUFBTSxFQUNmRyxPQUFPcEIsRUFBRSxRQUFRLEVBQUVpQixTQUFTLFdBQVcsRUFBRXRDLEtBQUtPLFdBQVcsYUFBYSxDQUFDLENBQUMsRUFDeEU0RyxTQUFTSCxJQUFJNUQsSUFBSTtBQUNuQixZQUFNZ0UsUUFBUUYsTUFBTXJFLEtBQUssY0FBYztBQUN2QzNCLGVBQ0VtRyxNQUFNNUQsSUFBSSxFQUNWZ0MsS0FBSyxNQUFNO0FBSVgyQixjQUFNcEgsS0FBS08sV0FBQSxNQUFBMUIsT0FBaUJpSSxTQUFPLE1BQUEsQ0FBTSxDQUFDO01BQzNDLENBQUMsRUFDQVEsS0FBSyxNQUFNO0FBSVhGLGNBQU1wSCxLQUFLTyxXQUFBLE1BQUExQixPQUFpQmlJLFNBQU8sVUFBQSxDQUFVLENBQUM7TUFDL0MsQ0FBQyxFQUNBUyxPQUFPLE1BQU07QUFDYjlELGFBQUsrRCxXQUFXTixPQUFPLENBQ3RCO1VBQ0NPLE1BQU07VUFDTjFJLE9BQU93QixXQUFXLFNBQVM7VUFDM0JtSCxNQUFNL0UsT0FBTztBQUNaQSxrQkFBTUMsZUFBZTtBQUNyQmEsaUJBQUtvRCxZQUFZQyxTQUFTNUYsVUFBVSxJQUFJO1VBQ3pDO1FBQ0QsQ0FBQSxDQUNBO01BQ0YsQ0FBQztBQUNGOEYsVUFBSTNELFNBQVM7SUFDZDtFQUNEO0VBQ0FNLFFBQVFnRSxXQUFXO0FBQ2xCLFFBQUlBLFVBQVUzQyxLQUFLLFNBQVMsRUFBRTRDLFlBQVksTUFBTSxRQUFRO0FBQ3ZERCxnQkFBVXJGLFNBQVMsZ0JBQWdCO0lBQ3BDLFdBQVdqQixFQUFFLHVCQUF1QnNHLFNBQVMsRUFBRTVILFdBQVcsR0FBRztBQUM1RHNCLFFBQUUsUUFBUSxFQUFFaUIsU0FBUyxnQkFBZ0IsRUFBRTZFLFNBQVNRLFNBQVM7SUFDMUQ7RUFDRDtFQUNBdEUsT0FBT3NFLFdBQVc7QUFDakIsUUFBSUEsVUFBVTNDLEtBQUssU0FBUyxFQUFFNEMsWUFBWSxNQUFNLFFBQVE7QUFDdkRELGdCQUFVRSxZQUFZLGdCQUFnQjtJQUN2QyxPQUFPO0FBQ054RyxRQUFFLHVCQUF1QnNHLFNBQVMsRUFBRWpFLE9BQU87SUFDNUM7RUFDRDtFQUNBb0UsVUFBVTFFLE1BQU07QUFDZi9CLE1BQUUsdUNBQXVDK0IsSUFBSSxFQUFFNEIsS0FBSyxXQUFXLElBQUk7RUFDcEU7RUFDQStDLGNBQWMzRSxNQUFNO0FBQ25CL0IsTUFBRSx1Q0FBdUMrQixJQUFJLEVBQUU0RSxLQUFLLENBQUN6RyxRQUFRQyxZQUFZO0FBQ3hFLFlBQU15RyxXQUFXNUcsRUFBRUcsT0FBTztBQUMxQnlHLGVBQVNqRCxLQUFLLFdBQVcsQ0FBQ2lELFNBQVNqRCxLQUFLLFNBQVMsQ0FBQztJQUNuRCxDQUFDO0VBQ0Y7RUFDQWtELGFBQWE5RSxNQUFNK0UsSUFBSTtBQUN0QixVQUFNM0UsWUFBc0IsQ0FBQTtBQUM1Qm5DLE1BQUUsZ0NBQWdDK0IsSUFBSSxFQUFFNEUsS0FBSyxDQUFDekcsUUFBUTZHLGFBQWE7QUFDbEU1RSxnQkFBVUEsVUFBVXpELE1BQU0sSUFBSXNCLEVBQUUrRyxRQUFRLEVBQUVDLEtBQUssWUFBWTtJQUM1RCxDQUFDO0FBQ0QsUUFBSTdFLFVBQVV6RCxTQUFTLEdBQUc7QUFDekJvSSxTQUFHRyxLQUFLLE1BQU05RSxTQUFTO0lBQ3hCO0VBQ0Q7RUFDQStFLFlBQVluRixNQUFNK0UsSUFBSTtBQUNyQixVQUFNQyxXQUFXL0csRUFBRSwwQkFBMEIrQixJQUFJLEVBQUVpRixLQUFLLFlBQVk7QUFDcEVGLE9BQUdHLEtBQUssTUFBTSxDQUFDRixRQUFRLENBQUM7RUFDekI7RUFDQUksVUFBVTtJQUFDeko7SUFBTzBJO0lBQU1DO0lBQU9lO0VBQVMsR0FBRztBQUMxQyxVQUFNQyxJQUFJckgsRUFBRSxLQUFLLEVBQ2ZrQixLQUFLO01BQ0x4RDtNQUNBMEk7TUFDQWtCLFFBQVE7TUFDUkMsS0FBSztJQUNOLENBQUMsRUFDQTVJLEtBQUtqQixLQUFLO0FBQ1osUUFBSTJJLE9BQU87QUFDVmdCLFFBQUVoRyxHQUFHLFNBQVNnRixLQUFLO0lBQ3BCO0FBQ0EsUUFBSWUsV0FBVztBQUNkQyxRQUFFcEcsU0FBU21HLFNBQVM7SUFDckI7QUFDQSxXQUFPcEgsRUFBRSxRQUFRLEVBQUVpQixTQUFTLHFCQUFxQixFQUFFRyxPQUFPaUcsQ0FBQztFQUM1RDtFQUNBbEIsV0FBV3FCLFNBQVNDLFNBQVM7QUFDNUIsVUFBTXJGLE9BQU87QUFDYixRQUFJc0YsYUFBYUYsUUFBUWhHLEtBQUssMkJBQTJCO0FBQ3pELFVBQU1tRyxjQUFjQSxDQUFDO01BQUN2QjtJQUFJLE1BQStCO0FBQ3hELGFBQU9zQixXQUFXbEcsS0FBQSxVQUFBaEUsT0FBZW9LLEtBQUtDLFVBQVV6QixJQUFJLEdBQUMsR0FBQSxDQUFHLEVBQUUxSCxTQUFTO0lBQ3BFO0FBQ0EsUUFBSWdKLFdBQVdoSixXQUFXLEdBQUc7QUFDNUJnSixtQkFBYTFILEVBQUUsUUFBUSxFQUFFaUIsU0FBUyx3QkFBd0IsRUFBRTZFLFNBQVMwQixPQUFPO0lBQzdFO0FBQUEsUUFBQU0sYUFBQS9ELDJCQUNxQjBELE9BQUEsR0FBQU07QUFBQSxRQUFBO0FBQXJCLFdBQUFELFdBQUE1RCxFQUFBLEdBQUEsRUFBQTZELFNBQUFELFdBQUEzRCxFQUFBLEdBQUFDLFFBQThCO0FBQUEsY0FBbkI0RCxTQUFBRCxPQUFBMUQ7QUFDVixZQUFJLENBQUNzRCxZQUFZSyxNQUFNLEdBQUc7QUFDekI1RixlQUFLK0UsVUFBVWEsTUFBTSxFQUFFbEMsU0FBUzRCLFVBQVU7UUFDM0M7TUFDRDtJQUFBLFNBQUFsRCxLQUFBO0FBQUFzRCxpQkFBQXJELEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUFzRCxpQkFBQXBELEVBQUE7SUFBQTtFQUNEO0VBQ0F1RCxlQUFlQyxNQUFNQyxNQUFNQyxJQUFJQyxNQUFNO0FBQ3BDLFVBQU10RyxPQUFPL0IsRUFBRSxRQUFRO0FBQ3ZCLFVBQU1zSSxPQUFPdEksRUFBRSxTQUFTLEVBQUVrQixLQUFLLFFBQVEsVUFBVSxFQUFFNEUsU0FBUy9ELElBQUk7QUFDaEUsU0FBS29GLFVBQVVlLElBQUksRUFBRXBDLFNBQVMvRCxJQUFJO0FBQ2xDLFNBQUtvRSxXQUFXcEUsTUFBTW9HLElBQUk7QUFDMUJHLFNBQUt0QixLQUFLLGNBQWNvQixFQUFFO0FBQzFCLFFBQUlDLE1BQU07QUFDVEMsV0FBSzNFLEtBQUssWUFBWSxVQUFVO0lBQ2pDO0FBQ0EsV0FBTzVCO0VBQ1I7RUFDQVcsU0FBU2dELFFBQVE7QUFDaEIsVUFBTWdDLGFBQWEsS0FBSzdGLEtBQUtDLEtBQUtDO0FBQ2xDLFNBQUt5RCxZQUNKLFFBQ0EsTUFBTTtBQUNMLGFBQU8sS0FBSytDLGFBQWF6SyxZQUFZNEosWUFBWSxDQUFDO0lBQ25ELEdBQ0FoQyxNQUNEO0VBQ0Q7RUFDQTlDLFdBQVc4QyxRQUFRO0FBQ2xCLFNBQUtGLFlBQ0osVUFDQSxNQUFNO0FBQ0wsYUFBTyxLQUFLZ0QsYUFBYTFLLFVBQVU7SUFDcEMsR0FDQTRILE1BQ0Q7RUFDRDtFQUNBNkMsYUFBYXhCLFVBQVVULFdBQVdtQyxNQUFNekcsUUFBUTtBQUMvQyxTQUFLTSxRQUFRZ0UsU0FBUztBQUN0QixVQUFNbEUsT0FBTztBQUNiLFVBQU1zRyxXQUFXMUksRUFBRTJJLFNBQVM7QUFDNUIsVUFBTUMsTUFBTUgsT0FBT3pJLEVBQUUsTUFBTSxFQUFFOEYsU0FBU1EsU0FBUyxJQUFJQTtBQUNuRCxRQUFJLENBQUN0RSxRQUFRO0FBQ1pBLGVBQVMsQ0FBQztBQUNWQSxhQUFPK0UsUUFBUSxJQUFJO0lBQ3BCO0FBQ0EsVUFBTThCLGFBQWN2SCxXQUE4QjtBQUNqRCxZQUFNd0gsUUFBUTlJLEVBQUUsSUFBSSxFQUFFK0ksUUFBUSxPQUFPLEVBQUVDLE1BQU07QUFDN0MxSCxZQUFNQyxlQUFlO0FBQ3JCYSxXQUFLOEUsWUFBWTRCLE9BQU8sS0FBSzVHLEdBQUc7SUFDakM7QUFDQSxTQUFLNUUsSUFDSGlHLEtBQUs7TUFDTEMsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTTtNQUNOWCxRQUFRK0Q7TUFDUmtDLFNBQVM7SUFDVixDQUFDLEVBQ0F6RyxLQUFLLENBQUM7TUFBQ29CO0lBQUssTUFBTTtBQUNsQnhCLFdBQUtKLE9BQU9zRSxTQUFTO0FBQ3JCLFVBQUk0QyxlQUFlO0FBQ25CLFlBQU1DLE9BQU9uSixFQUFFLFVBQVVvQyxLQUFLUCxLQUFLQyxLQUFLQyxJQUFJO0FBQzVDLFlBQU1xSCx1QkFBdUI7QUFBQSxVQUFBQyxhQUFBdEYsMkJBQ1ZILE1BQU1JLEtBQUEsR0FBQXNGO0FBQUEsVUFBQTtBQUF6QixhQUFBRCxXQUFBbkYsRUFBQSxHQUFBLEVBQUFvRixTQUFBRCxXQUFBbEYsRUFBQSxHQUFBQyxRQUFnQztBQUFBLGdCQUFyQmEsT0FBQXFFLE9BQUFqRjtBQUNWLGNBQUlZLEtBQUtzRSxXQUFXO0FBQ25CLGtCQUFNO2NBQUNBO1lBQVMsSUFBSXRFO0FBQUEsZ0JBQUF1RSxhQUFBekYsMkJBQ0V3RixTQUFBLEdBQUFFO0FBQUEsZ0JBQUE7QUFBdEIsbUJBQUFELFdBQUF0RixFQUFBLEdBQUEsRUFBQXVGLFNBQUFELFdBQUFyRixFQUFBLEdBQUFDLFFBQWlDO0FBQUEsc0JBQXRCO2tCQUFDMUc7Z0JBQUssSUFBQStMLE9BQUFwRjtBQUNoQixzQkFBTXFGLFVBQVVoTTtBQUNoQixzQkFBTWlNLFVBQVVELFFBQVF6SyxRQUFRLE1BQU0sR0FBRztBQUN6QyxzQkFBTTZKLFNBQVNMLE9BQU96SSxFQUFFLE1BQU0sSUFBSUEsRUFBRSxLQUFLLEdBQUc4RixTQUFTOEMsR0FBRztBQUN4RCxzQkFBTW5CLFVBQTRCLENBQ2pDO2tCQUNDckIsTUFBTXBJLEdBQUc0TCxLQUFLQyxPQUFPRixTQUFTO29CQUFDbkcsUUFBUTtrQkFBTSxDQUFDO2tCQUM5QzlGLE9BQU93QixXQUFXLFVBQVU7Z0JBQzdCLENBQUE7QUFFRCxzQkFBTTRLLGtCQUFrQkosV0FBVzFIO0FBQ25DQSx1QkFBTzBILE9BQU8sSUFBSTtBQUNsQixvQkFBSSxDQUFDSSxtQkFBbUJyQixNQUFNO0FBQzdCaEIsMEJBQVFBLFFBQVEvSSxNQUFNLElBQUk7b0JBQ3pCMEgsTUFBTTtvQkFDTjFJLE9BQU93QixXQUFXLFlBQVk7b0JBQzlCbUgsT0FBT3dDO2tCQUNSO2dCQUNEO0FBQ0Esc0JBQU1uQixhQUFhdEYsS0FDakI2RixlQUNBO2tCQUNDN0IsTUFBTXBJLEdBQUc0TCxLQUFLQyxPQUFPRixTQUFTO29CQUFDSSxVQUFVO2tCQUFJLENBQUM7a0JBQzlDck0sT0FBT2dNO2dCQUNSLEdBQ0FqQyxTQUNBa0MsU0FDQSxDQUFDbEIsSUFDRixFQUNDM0MsU0FBU2dELEtBQUs7QUFDaEIsb0JBQUlnQixpQkFBaUI7QUFDcEJwQyw2QkFBV3RHLE9BQUEsdUJBQUE1RCxPQUE4QjBCLFdBQVcsa0JBQWtCLEdBQUMsU0FBQSxDQUFTO2dCQUNqRixXQUFXdUosT0FBT1csc0JBQXNCO0FBQ3ZDLHVCQUFLVixTQUFTbEcsS0FBSyxNQUFNO0FBQ3hCLDJCQUFPSixLQUFLbUcsYUFBYW1CLFNBQVNaLE9BQU9MLE9BQU8sR0FBR3pHLE1BQU07a0JBQzFELENBQUM7Z0JBQ0Y7QUFDQWtILCtCQUFlO2NBQ2hCO1lBQUEsU0FBQTFFLEtBQUE7QUFBQWdGLHlCQUFBL0UsRUFBQUQsR0FBQTtZQUFBLFVBQUE7QUFBQWdGLHlCQUFBOUUsRUFBQTtZQUFBO1VBQ0QsT0FBTztBQUNOd0UsMkJBQWU7VUFDaEI7UUFDRDtNQUFBLFNBQUExRSxLQUFBO0FBQUE2RSxtQkFBQTVFLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUE2RSxtQkFBQTNFLEVBQUE7TUFBQTtBQUNBLFVBQUl3RSxnQkFBZ0JULFNBQVMsR0FBRztBQUMvQnJHLGFBQUsrRCxXQUFXZ0QsTUFBTSxDQUNyQjtVQUNDL0MsTUFBTTtVQUNOMUksT0FBT3dCLFdBQVcsV0FBVztVQUM3Qm1ILE1BQU0vRSxPQUFPO0FBQ1pBLGtCQUFNQyxlQUFlO0FBQ3JCYSxpQkFBS3FFLFVBQVVyRSxLQUFLUCxLQUFLQyxLQUFLQyxJQUFJO1VBQ25DO1FBQ0QsR0FDQTtVQUNDcUUsTUFBTTtVQUNOMUksT0FBT3dCLFdBQVcsZUFBZTtVQUNqQ21ILE1BQU0vRSxPQUFPO0FBQ1pBLGtCQUFNQyxlQUFlO0FBQ3JCYSxpQkFBS3NFLGNBQWN0RSxLQUFLUCxLQUFLQyxLQUFLQyxJQUFJO1VBQ3ZDO1FBQ0QsR0FDQTtVQUNDcUUsTUFBTTtVQUNOMUksT0FBT3dCLFdBQVcsWUFBWTtVQUM5Qm1ILE1BQU0vRSxPQUFPO0FBQ1pBLGtCQUFNQyxlQUFlO0FBQ3JCYSxpQkFBS3lFLGFBQWF6RSxLQUFLUCxLQUFLQyxLQUFLQyxNQUFNSyxLQUFLRixHQUFHO1VBQ2hEO1FBQ0QsQ0FBQSxDQUNBO01BQ0Y7QUFDQSxVQUFJZ0gsY0FBYztBQUNqQixhQUFLUixTQUFTc0IsWUFBWTVILElBQUk7TUFDL0IsT0FBTztBQUNOLGFBQUtzRyxTQUFTdUIsV0FBVzdILElBQUk7TUFDOUI7SUFDRCxDQUFDO0FBQ0YsV0FBT3NHLFNBQVN3QixRQUFRO0VBQ3pCO0VBQ0FDLGFBQWFwRCxVQUFVL0QsUUFBUTtBQUM5QixVQUFNWixPQUFPO0FBQ2IsVUFBTWdJLFlBQVk7QUFDbEIsUUFBSUMsWUFBc0IsQ0FBQTtBQUMxQixVQUFNeEcsWUFBWSxDQUFBO0FBQ2xCLGFBQUF5RyxNQUFBLEdBQUFDLFlBQXNCck4sVUFBQW9OLE1BQUFDLFVBQUE3TCxRQUFBNEwsT0FBVTtBQUFoQyxZQUFXRSxVQUFBRCxVQUFBRCxHQUFBO0FBQ1YsWUFBTUcsTUFBTW5OLElBQ1ZpRyxLQUFLO1FBQ0xDLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxlQUFlO1FBQ2Z1QixNQUFNOEI7UUFDTnBELE1BQU07UUFDTitHLFNBQVNGO1FBQ1RBO01BQ0QsQ0FBQyxFQUNBaEksS0FBSyxDQUFDO1FBQUNqRDtNQUFLLE1BQU07QUFDbEIsY0FBTTtVQUFDb0w7UUFBWSxJQUFJcEw7QUFJdkIsWUFBSTdCLFFBQVFzQyxFQUFFLFFBQVEsRUFBRW9CLE9BQU91SixZQUFZLEVBQUV2SyxHQUFHLENBQUMsRUFBRXpCLEtBQUssRUFBRTBCLEtBQUs7QUFDL0QzQyxnQkFBUUQsYUFBYUMsS0FBSztBQUMxQmpCLDhCQUFzQmlCLE9BQU8sYUFBYVgsYUFBYTtBQUN2RCxlQUFPVztNQUNSLENBQUM7QUFDRm1HLGdCQUFVQSxVQUFVbkYsTUFBTSxJQUFJK0w7SUFDL0I7QUFDQSxXQUFPekssRUFBRTJFLEtBQUssR0FBR2QsU0FBUyxFQUFFckIsS0FBSyxJQUFJcEQsU0FBZ0I7QUFDcEQsWUFBTXdMLFdBQVcsQ0FBQTtBQUNqQixlQUFBQyxNQUFBLEdBQUFDLFFBQW9CMUwsTUFBQXlMLE1BQUFDLE1BQUFwTSxRQUFBbU0sT0FBTTtBQUExQixjQUFXbk4sUUFBQW9OLE1BQUFELEdBQUE7QUFDVixZQUFJdks7QUFHSixjQUFNeUssWUFBWVgsVUFBVVksS0FBS3ROLEtBQUs7QUFDdEMsWUFBSXFOLGFBQWFBLFVBQVVyTSxXQUFXLEdBQUc7QUFDeEMsV0FBQSxFQUFHNEIsTUFBTSxJQUFJeUs7UUFDZCxPQUFPO0FBQ056SyxtQkFBUztRQUNWO0FBQ0ErSixrQkFBVUEsVUFBVTNMLE1BQU0sSUFBSWhCO0FBQzlCa04saUJBQVNBLFNBQVNsTSxNQUFNLElBQUk0QjtNQUM3QjtBQUFBLFVBQUEySyxhQUFBbEgsNEJBRVcsR0FBVTVHLG1CQUFBNEYsYUFBWTZILFFBQVEsQ0FBQSxHQUFBTTtBQUFBLFVBQUE7QUFBekMsYUFBQUQsV0FBQS9HLEVBQUEsR0FBQSxFQUFBZ0gsU0FBQUQsV0FBQTlHLEVBQUEsR0FBQUMsUUFBNEM7QUFBQSxnQkFBakM5RCxTQUFBNEssT0FBQTdHO0FBQ1ZnRyxzQkFBWSxDQUNYLEdBQUdBLFdBQ0gsR0FBR3JILE9BQU8vQyxJQUFLdkMsV0FBVTtBQUN4QixrQkFBTXlOLGdCQUFnQjFOLGFBQWFDLEtBQUs7QUFDeEMsbUJBQU8wTSxVQUFVcEwsS0FBS21NLGFBQWEsSUFBSUEsZ0JBQWdCQSxnQkFBZ0I3SztVQUN4RSxDQUFDLENBQUE7UUFFSDtNQUFBLFNBQUFrRSxLQUFBO0FBQUF5RyxtQkFBQXhHLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUF5RyxtQkFBQXZHLEVBQUE7TUFBQTtBQUVBLGFBQU90QyxLQUFLZ0osZUFBQSxHQUFjak8sbUJBQUE0RixhQUFZc0gsU0FBUyxDQUFDO0lBQ2pELENBQUM7RUFDRjtFQUNBZSxjQUFjcEksUUFBUTtBQUNyQixVQUFNYSxZQUFZLENBQUE7QUFDbEIsVUFBTXdILFdBQVcsQ0FBQyxNQUFNO0FBQ3hCLFFBQUlDLFlBQXNCLENBQUE7QUFDMUIsYUFBQUMsTUFBQSxHQUFBQyxhQUFzQnRPLFVBQUFxTyxNQUFBQyxXQUFBOU0sUUFBQTZNLE9BQVU7QUFBaEMsWUFBV2YsVUFBQWdCLFdBQUFELEdBQUE7QUFDVjFILGdCQUFVQSxVQUFVbkYsTUFBTSxJQUFJcEIsSUFBSVksSUFBSTtRQUNyQ3NGLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxlQUFlO1FBQ2YvRSxNQUFNcUU7UUFDTlcsTUFBTTtRQUNOakcsT0FBTztRQUNQK04sY0FBYztRQUNkZixTQUFTRjtRQUNUQTtNQUNELENBQUM7SUFDRjtBQUNBLFdBQU94SyxFQUFFMkUsS0FBSyxHQUFHZCxTQUFTLEVBQUVyQixLQUFLLElBQUlwRCxTQUFnQjtBQUNwRCxlQUFBc00sTUFBQSxHQUFBQyxTQUF3QnZNLE1BQUFzTSxNQUFBQyxPQUFBak4sUUFBQWdOLE9BQXdDO0FBQWhFLGNBQVcsQ0FBQztVQUFDbk07UUFBSyxDQUFDLElBQUFvTSxPQUFBRCxHQUFBO0FBQ2xCSixvQkFBWSxDQUFDLEdBQUdBLFdBQVcsR0FBR3RMLEVBQUVULE1BQU1aLElBQUksRUFBRUEsS0FBSyxFQUFFMEIsS0FBSyxFQUFFeEIsTUFBTSxHQUFHLENBQUM7TUFDckU7QUFDQXlNLGtCQUFZQSxVQUFVcEksT0FBTyxDQUFDQyxHQUFHQyxHQUFHQyxRQUFRO0FBQzNDLGVBQU9BLElBQUlDLFFBQVFILENBQUMsTUFBTUM7TUFDM0IsQ0FBQztBQUNELGFBQU85RixJQUNMaUcsS0FBSztRQUNMQyxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsZUFBZTtRQUNmQyxNQUFNO1FBQ05YLFFBQVFzSTtNQUNULENBQUMsRUFDQTlJLEtBQUssQ0FBQztRQUFDb0I7TUFBSyxNQUFNO0FBQ2xCWixpQkFBUyxDQUFBO0FBQUMsWUFBQTRJLGFBQUE3SCwyQkFDU0gsTUFBTUksS0FBQSxHQUFBNkg7QUFBQSxZQUFBO0FBQXpCLGVBQUFELFdBQUExSCxFQUFBLEdBQUEsRUFBQTJILFNBQUFELFdBQUF6SCxFQUFBLEdBQUFDLFFBQWdDO0FBQUEsa0JBQXJCYSxPQUFBNEcsT0FBQXhIO0FBQ1Ysa0JBQU07Y0FBQzNHO1lBQUssSUFBSXVIO0FBQ2hCLGdCQUFJQSxLQUFLNkcsV0FBVyxDQUFDVCxTQUFTVSxTQUFTck8sS0FBSyxHQUFHO0FBQzlDLGtCQUFJQSxTQUFTa0Msa0JBQWtCO0FBRTlCLHVCQUFPLENBQUE7Y0FDUjtBQUNBb0QscUJBQU9BLE9BQU90RSxNQUFNLElBQUloQjtBQUV4QmpCLG9DQUFzQmlCLE9BQU8sYUFBYVQsaUJBQWlCO1lBQzVEO1VBQ0Q7UUFBQSxTQUFBdUgsS0FBQTtBQUFBb0gscUJBQUFuSCxFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBb0gscUJBQUFsSCxFQUFBO1FBQUE7QUFDQSxlQUFPMUI7TUFDUixDQUFDO0lBQ0gsQ0FBQztFQUNGO0VBQ0F3RixhQUFhekIsVUFBVTtBQUN0QixVQUFNM0UsT0FBTztBQUNiLFVBQU00SixlQUFlLENBQUE7QUFDckIsVUFBTTFGLFlBQVlsRSxLQUFLUCxLQUFLSSxPQUFPRjtBQUNuQyxVQUFNakIsUUFBUWQsRUFBRSxNQUFNO0FBQ3RCLFVBQU1pTSxXQUFXbkwsTUFBTVUsS0FBSyx5Q0FBeUM7QUFDckUsVUFBTWtILFdBQVcxSSxFQUFFMkksU0FBUztBQUM1QixRQUFJM0YsU0FBbUIsQ0FBQTtBQUN2QlosU0FBS0UsUUFBUWdFLFNBQVM7QUFBQSxRQUFBNEYsYUFBQW5JLDJCQUNDckUscUJBQUEsR0FBQXlNO0FBQUEsUUFBQTtBQUF2QixXQUFBRCxXQUFBaEksRUFBQSxHQUFBLEVBQUFpSSxTQUFBRCxXQUFBL0gsRUFBQSxHQUFBQyxRQUE4QztBQUFBLGNBQW5DdkUsV0FBQXNNLE9BQUE5SDtBQUNWLGNBQU0rSCxNQUFNdk0sU0FBU2tILFVBQVVrRixVQUFVakosTUFBTTtBQUMvQyxZQUFJLE9BQU9vSixRQUFRLFVBQVU7QUFDNUJwSixpQkFBT0EsT0FBT3RFLE1BQU0sSUFBSTBOO1FBQ3pCLFdBQVcsVUFBVUEsS0FBSztBQUV6QkosdUJBQWFBLGFBQWF0TixNQUFNLElBQUkwTjtRQUNyQyxPQUFPO0FBQ05wSixvQkFBQSxHQUFTN0YsbUJBQUE0RixhQUFZLENBQUMsR0FBR0MsUUFBUSxHQUFHb0osR0FBRyxDQUFDO1FBQ3pDO01BQ0Q7SUFBQSxTQUFBNUgsS0FBQTtBQUFBMEgsaUJBQUF6SCxFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBMEgsaUJBQUF4SCxFQUFBO0lBQUE7QUFFQTFCLGFBQVNBLE9BQU8vQyxJQUFLdkMsV0FBVUEsU0FBUyxFQUFFLEVBQUV3RixPQUFPbUosT0FBTztBQUMxRCxVQUFNQyxnQkFBZ0IsU0FBNkJoTCxPQUEyQjtBQUM3RSxZQUFNd0gsUUFBUTlJLEVBQUUsSUFBSSxFQUFFK0ksUUFBUSxTQUFTO0FBQ3ZDekgsWUFBTUMsZUFBZTtBQUNyQmEsV0FBSzhFLFlBQVk0QixPQUFPMUcsS0FBS0gsTUFBTTtJQUNwQztBQUVBLFNBQUtqQyxFQUFFMkUsS0FBSyxHQUFHcUgsWUFBWSxFQUN6QnhKLEtBQUssSUFBSXBELFNBQVM7QUFDbEIsZUFBQW1OLE1BQUEsR0FBQUMsU0FBa0JwTixNQUFBbU4sTUFBQUMsT0FBQTlOLFFBQUE2TixPQUFNO0FBQXhCLGNBQVdILE1BQUFJLE9BQUFELEdBQUE7QUFDVixZQUFJLE9BQU9ILFFBQVEsVUFBVTtBQUM1QnBKLGlCQUFPQSxPQUFPdEUsTUFBTSxJQUFJME47UUFDekIsT0FBTztBQUNOcEosb0JBQUEsR0FBUzdGLG1CQUFBNEYsYUFBWSxDQUFDLEdBQUdDLFFBQVEsR0FBR29KLEdBQUcsQ0FBQztRQUN6QztNQUNEO0FBQ0EsYUFBT2hLLEtBQUsrSCxhQUFhcEQsVUFBVS9ELE1BQU07SUFDMUMsQ0FBQyxFQUNBUixLQUFNaUssY0FBYTtBQUVuQnJLLFdBQUtKLE9BQU9zRSxTQUFTO0FBQUEsVUFBQW9HLGFBQUEzSSwyQkFDRDBJLFFBQUEsR0FBQUU7QUFBQSxVQUFBO0FBQXBCLGFBQUFELFdBQUF4SSxFQUFBLEdBQUEsRUFBQXlJLFNBQUFELFdBQUF2SSxFQUFBLEdBQUFDLFFBQThCO0FBQUEsZ0JBQW5CMUcsUUFBQWlQLE9BQUF0STtBQUNWLGdCQUFNc0YsVUFBVWpNLE1BQU11QixRQUFRLEtBQUssR0FBRztBQUN0QyxnQkFBTTZKLFFBQVE5SSxFQUFFLEtBQUssRUFBRThGLFNBQVNRLFNBQVM7QUFDekNsRSxlQUFLNkYsZUFDSjtZQUNDN0IsTUFBTXBJLEdBQUc0TCxLQUFLQyxPQUFPRixTQUFTO2NBQUNuRyxRQUFRO2NBQVFvSixTQUFTO1lBQUcsQ0FBQztZQUM1RGxQO1lBQ0EwSixXQUFXO1VBQ1osR0FDQSxDQUNDO1lBQ0NoQixNQUFNO1lBQ04xSSxPQUFPd0IsV0FBVyxnQkFBZ0I7WUFDbENtSCxPQUFPaUc7VUFDUixDQUFBLEdBRUQzQyxTQUNBLEtBQ0QsRUFBRTdELFNBQVNnRCxLQUFLO1FBQ2pCO01BQUEsU0FBQXRFLEtBQUE7QUFBQWtJLG1CQUFBakksRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQWtJLG1CQUFBaEksRUFBQTtNQUFBO0FBQ0EsWUFBTXlFLE9BQU9uSixFQUFFLFVBQVVzRyxTQUFTO0FBQ2xDLFVBQUltRyxTQUFTL04sU0FBUyxHQUFHO0FBQ3hCMEQsYUFBSytELFdBQVdnRCxNQUFNLENBQ3JCO1VBQ0MvQyxNQUFNO1VBQ04xSSxPQUFPd0IsV0FBVyxXQUFXO1VBQzdCbUgsTUFBTS9FLE9BQU87QUFDWkEsa0JBQU1DLGVBQWU7QUFDckJhLGlCQUFLcUUsVUFBVUgsU0FBUztVQUN6QjtRQUNELEdBQ0E7VUFDQ0YsTUFBTTtVQUNOMUksT0FBT3dCLFdBQVcsZUFBZTtVQUNqQ21ILE1BQU0vRSxPQUFPO0FBQ1pBLGtCQUFNQyxlQUFlO0FBQ3JCYSxpQkFBS3NFLGNBQWNKLFNBQVM7VUFDN0I7UUFDRCxHQUNBO1VBQ0NGLE1BQU07VUFDTjFJLE9BQU93QixXQUFXLGdCQUFnQjtVQUNsQ21ILE1BQU0vRSxPQUFPO0FBQ1pBLGtCQUFNQyxlQUFlO0FBQ3JCYSxpQkFBS3lFLGFBQWFQLFdBQVdsRSxLQUFLSCxNQUFNO1VBQ3pDO1FBQ0QsQ0FBQSxDQUNBO0FBQ0QsYUFBS3lHLFNBQVNzQixZQUFZNUgsTUFBTSxDQUFDcUssUUFBUSxDQUFDO01BQzNDLE9BQU87QUFDTixhQUFLL0QsU0FBU3VCLFdBQVc3SCxNQUFNLENBQUNxSyxRQUFRLENBQUM7TUFDMUM7SUFDRCxDQUFDO0FBQ0YsV0FBTy9ELFNBQVN3QixRQUFRO0VBQ3pCO0FBQ0Q7O0FIdm9CQSxJQUFBMkMscUJBQXNCelAsUUFBQSxpQkFBQTs7QU9GdEIsSUFBQTBQLGNBQTRDMVAsUUFBQSxLQUFBOztBQ0M1QyxJQUFBMlAsZUFBbUMzUCxRQUFBLGtCQUFBO0FBQ25DLElBQUE0UCxjQUFtQzVQLFFBQUEsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5DLFVBQU02UCxRQUFRQztBQU1kLFVBQU1DLFVBQUEsR0FBU0gsWUFBQUksS0FBSUgsTUFBTUksSUFBSTtBQUM3QixVQUFNQyxhQUFBLEdBQVlOLFlBQUFJLEtBQUksTUFBTTtBQUM1QixVQUFNekwsaUJBQUEsR0FBZ0JxTCxZQUFBSSxLQUFpQjtBQUN2QyxVQUFNeEwsbUJBQUEsR0FBa0JvTCxZQUFBSSxLQUFpQjtBQUV6QyxVQUFNQyxPQUFPQSxNQUFNO0FBQ2xCRixhQUFPOUksUUFBUTtBQUNmNEksWUFBTWxNLE9BQU87SUFDZDtBQUVBLFVBQU13TSxVQUFBLDRCQUFBO0FBQUEsVUFBQUMsT0FBQUMsa0JBQVUsV0FBTzlILEtBQWFELFNBQVMsT0FBVTtBQUN0RCxlQUFBLEdBQU1zSCxZQUFBVSxVQUFTO0FBQ2YsWUFBSSxDQUFDL0wsY0FBYzBDLFNBQVMsQ0FBQ3pDLGdCQUFnQnlDLE9BQU87QUFDbkQ7UUFDRDtBQUNBNEksY0FBTVUsV0FBV2pNLGlCQUFpQkMsY0FBYzBDLE9BQU96QyxnQkFBZ0J5QyxLQUFLO0FBQzVFLFlBQUlzQixRQUFRLFFBQVE7QUFDbkJzSCxnQkFBTVUsV0FBV2pMLFNBQVNnRCxNQUFNO1FBQ2pDLE9BQU87QUFDTnVILGdCQUFNVSxXQUFXL0ssV0FBVzhDLE1BQU07UUFDbkM7TUFDRCxDQUFBO0FBQUEsYUFBQSxTQVhNNkgsU0FBQUssSUFBQTtBQUFBLGVBQUFKLEtBQUF4SCxNQUFBLE1BQUE2SCxTQUFBO01BQUE7SUFBQSxHQUFBO0FBYU4sS0FBQSxHQUFBYixZQUFBYyxPQUFNUixXQUFZM0gsU0FBUTtBQUN6QixXQUFLNEgsUUFBUTVILEdBQUc7SUFDakIsQ0FBQztBQUVELEtBQUEsR0FBQXFILFlBQUFjLE9BQU1YLFFBQVNZLFdBQVM7QUFDdkIsVUFBSUEsT0FBTTtBQUNULGFBQUtSLFFBQVFELFVBQVVqSixLQUFLO01BQzdCO0lBQ0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0QsSUFBQTJKLGNBQXFVNVEsUUFBQSxLQUFBO0FBRXJVLElBQU02USxhQUFhO0VBQ2pCQyxPQUFPO0VBQ1BDLE1BQU07QUFDUjtBQUNBLElBQU1DLGFBQWE7RUFDakJoQixLQUFLO0VBQ0xjLE9BQU87RUFDUEMsTUFBTTtBQUNSO0FBQ0EsSUFBTUUsYUFBYTtFQUNqQmpCLEtBQUs7RUFDTGMsT0FBTztFQUNQQyxNQUFNO0FBQ1I7QUFFTyxTQUFTRyxPQUFPQyxNQUFNQyxRQUFRQyxRQUFRQyxRQUFRQyxPQUFPQyxVQUFVO0FBQ3BFLFVBQUEsR0FBUVosWUFBQWEsV0FBVyxJQUFBLEdBQUdiLFlBQUFjO0lBQW9CZCxZQUFBZTtJQUFXO0lBQU0sRUFBQSxHQUN6RGYsWUFBQWdCLGFBQWFOLE9BQU8sV0FBVyxHQUFHO01BQ2hDUixPQUFPO01BQ1BlLFNBQVNQLE9BQU9yQjtJQUNsQixHQUFHO01BQ0Q2QixVQUFBLEdBQVNsQixZQUFBbUIsU0FBUyxNQUFNLEVBQUEsR0FDdEJuQixZQUFBb0I7U0FBQSxHQUFpQnBCLFlBQUFxQixpQkFBaUJYLE9BQU94UCxXQUFXLFVBQVUsQ0FBQztRQUFHOztNQUFZLENBQUEsQ0FDL0U7TUFDRG9RLEdBQUc7O0lBQ0wsQ0FBQyxJQUFBLEdBQ0R0QixZQUFBZ0IsYUFBYU4sT0FBTyxXQUFXLEdBQUc7TUFDaENyQixNQUFNcUIsT0FBT3ZCO01BQ2IsaUJBQWlCcUIsT0FBTyxDQUFDLE1BQU1BLE9BQU8sQ0FBQyxJQUFJZSxZQUFZYixPQUFPdkIsU0FBVW9DO01BQ3hFN1IsT0FBT2dSLE9BQU94UCxXQUFXLFVBQVU7TUFDbkMsb0JBQW9CO0lBQ3RCLEdBQUc7TUFDRGdRLFVBQUEsR0FBU2xCLFlBQUFtQixTQUFTLE1BQU0sRUFBQSxHQUN0Qm5CLFlBQUF3QixvQkFBb0IsT0FBT3ZCLFlBQVksRUFBQSxHQUNyQ0QsWUFBQWdCLGFBQWFOLE9BQU8sV0FBVyxHQUFHO1FBQ2hDZSxRQUFRZixPQUFPcEIsY0FBYyxTQUFTLFlBQVk7UUFDbERhLE1BQU07UUFDTixpQkFBaUJPLE9BQU9wQixjQUFjO1FBQ3RDMkIsU0FBU1QsT0FBTyxDQUFDLE1BQU1BLE9BQU8sQ0FBQyxJQUFJZSxZQUFXYixPQUFPcEIsWUFBWTtNQUNuRSxHQUFHO1FBQ0Q0QixVQUFBLEdBQVNsQixZQUFBbUIsU0FBUyxNQUFNLEVBQUEsR0FDdEJuQixZQUFBb0I7V0FBQSxHQUFpQnBCLFlBQUFxQixpQkFBaUJYLE9BQU94UCxXQUFXLGNBQWMsQ0FBQztVQUFHOztRQUFZLENBQUEsQ0FDbkY7UUFDRG9RLEdBQUc7O01BQ0wsR0FBRyxHQUFlLENBQUMsVUFBVSxlQUFlLENBQUMsSUFBQSxHQUM3Q3RCLFlBQUFnQixhQUFhTixPQUFPLFdBQVcsR0FBRztRQUNoQ2UsUUFBUWYsT0FBT3BCLGNBQWMsV0FBVyxZQUFZO1FBQ3BEYSxNQUFNO1FBQ04saUJBQWlCTyxPQUFPcEIsY0FBYztRQUN0QzJCLFNBQVNULE9BQU8sQ0FBQyxNQUFNQSxPQUFPLENBQUMsSUFBSWUsWUFBV2IsT0FBT3BCLFlBQVk7TUFDbkUsR0FBRztRQUNENEIsVUFBQSxHQUFTbEIsWUFBQW1CLFNBQVMsTUFBTSxFQUFBLEdBQ3RCbkIsWUFBQW9CO1dBQUEsR0FBaUJwQixZQUFBcUIsaUJBQWlCWCxPQUFPeFAsV0FBVyxnQkFBZ0IsQ0FBQztVQUFHOztRQUFZLENBQUEsQ0FDckY7UUFDRG9RLEdBQUc7O01BQ0wsR0FBRyxHQUFlLENBQUMsVUFBVSxlQUFlLENBQUMsQ0FBQSxDQUM5QyxJQUFBLEdBQ0R0QixZQUFBMEIsaUJBQUEsR0FBZ0IxQixZQUFBd0I7UUFBb0I7UUFBT3BCO1FBQVk7UUFBTTs7TUFBb0IsR0FBRyxDQUNsRixDQUFDSixZQUFBMkIsT0FBUWpCLE9BQU9wQixjQUFjLE1BQU0sQ0FBQSxDQUNyQyxJQUFBLEdBQ0RVLFlBQUEwQixpQkFBQSxHQUFnQjFCLFlBQUF3QjtRQUFvQjtRQUFPbkI7UUFBWTtRQUFNOztNQUFvQixHQUFHLENBQ2xGLENBQUNMLFlBQUEyQixPQUFRakIsT0FBT3BCLGNBQWMsUUFBUSxDQUFBLENBQ3ZDLENBQUEsQ0FDRjtNQUNEZ0MsR0FBRzs7SUFDTCxHQUFHLEdBQWUsQ0FBQyxRQUFRLE9BQU8sQ0FBQyxDQUFBO0lBQ2xDOztFQUF3QjtBQUM3Qjs7QUNyRStSTSxZQUFPdEIsU0FBU0E7QUFBT3NCLFlBQU9DLFNBQVM7QUFBOEIsSUFBT0MsZUFBUUY7O0FIT25YLElBQUlHO0FBRUosSUFBTUMscUJBQXFCQSxDQUFDckMsWUFBcUM1TSxXQUE2QjtBQUM3RixRQUFNa1AsT0FBT0MsU0FBU0MsY0FBYyxLQUFLO0FBQ3pDRCxXQUFTRSxLQUFLaFAsT0FBTzZPLElBQUk7QUFDekJGLFNBQUEsR0FBTWpELFlBQUF1RCxXQUFVUCxjQUFLO0lBQUNuQztJQUFZTixNQUFNO0lBQU90TTtFQUFNLENBQUM7QUFDdERnUCxNQUFJTyxNQUFNTCxJQUFJO0FBQ2Y7O0FJWkEsSUFBTTtFQUFDTTtBQUFjLElBQUl2UyxHQUFHQyxPQUFPQyxJQUFJO0FBRXZDLElBQU1zUyxjQUFjQSxNQUFZO0FBQy9CLFFBQU1DLHdCQUF3QjtJQUM3QiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLG1DQUFtQztJQUNuQyw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyx5QkFBeUI7RUFDMUI7QUFDQSxRQUFNQyx3QkFBd0I7SUFDN0IsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQixtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIscUNBQXFDO0lBQ3JDLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMseUJBQXlCO0VBQzFCO0FBRUEsTUFBSSxDQUFDLFdBQVcsU0FBUyxTQUFTLE9BQU8sRUFBRTNFLFNBQVN3RSxjQUFjLEdBQUc7QUFDcEV2UyxPQUFHMlMsU0FBU0MsSUFBSUYscUJBQXFCO0VBQ3RDLE9BQU87QUFDTjFTLE9BQUcyUyxTQUFTQyxJQUFJSCxxQkFBcUI7RUFDdEM7QUFDRDs7QVgzREFELFlBQVk7QUFFWixNQUFBLEdBQUszRCxtQkFBQWdFLFNBQVEsRUFBRXJPLEtBQU0xQixXQUF5QztBQUM3RGtQLHFCQUFtQnJQLGVBQWUsTUFBTSxNQUFTO0FBQ2pEQSxnQkFBY0UsS0FBS0MsT0FBTyxNQUFNO0FBQy9CLFVBQU1nUSxVQUFVWixTQUFTYSxjQUFpQyx5QkFBeUI7QUFDbkZELGdCQUFBLFFBQUFBLFlBQUEsVUFBQUEsUUFBU3pLLE1BQU07RUFDaEIsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbIlRvb2xzUmVkaXJlY3RfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJmaW5kUmVkaXJlY3RCeVNlbGVjdG9yIiwgImZpbmRSZWRpcmVjdENhbGxiYWNrIiwgInNldFJlZGlyZWN0VGV4dFN1ZmZpeCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiYXBpVGFnIiwgInZlcnNpb24iLCAiU1VGRklYX0FQUEVORCIsICJTVUZGSVhfUkVQTEFDRSIsICJTVUZGSVhfU0VUREVGQVVMVCIsICJWQVJJQU5UUyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJmaXhOYW1lc3BhY2UiLCAidGl0bGUiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dOYW1lc3BhY2VOdW1iZXIyIiwgIndnUGFnZU5hbWUiLCAid2dQYWdlTmFtZTIiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJuc1ByZWZpeGVzIiwgIm5zQ2Fub25QcmVmaXgiLCAibnNQcmVmaXhQYXR0ZXJuIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAidGV4dCIsICJuc2lkIiwgInNwbGl0IiwgIlJlZ0V4cCIsICJqb2luIiwgInRlc3QiLCAicmVwbGFjZSIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhcmdzIiwgImZ1bGxLZXkiLCAibWVzc2FnZSIsICJwYXJzZSIsICJwbGFpbiIsICJJU19DQVRFR09SWSIsICJmaW5kUmVkaXJlY3RDYWxsYmFja3MiLCAicGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXgiLCAicmVkaXJlY3RFeGNsdWRlcyIsICJjYWxsYmFjayIsICJnZW5lcmF0ZUFycmF5IiwgInNlbGVjdG9yIiwgIiQiLCAibWFwIiwgIl9pbmRleCIsICJlbGVtZW50IiwgImVxIiwgInRyaW0iLCAic3VmZml4IiwgImZsYWciLCAiZmxhZ19zZXQiLCAiZmxhZ19hcHBlbmQiLCAiX3BhZ2VXaXRoUmVkaXJlY3RUZXh0IiwgIlRvb2xzUmVkaXJlY3QiLCAidmFyaWFudHMiLCAiaW5pdCIsICIkYm9keSIsICJvbk9wZW4iLCAiYnV0dG9uIiwgImFkZENsYXNzIiwgImF0dHIiLCAiY3NzIiwgImFwcGVuZCIsICJvbiIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJmaW5kIiwgImFmdGVyIiwgImF0dGFjaENvbnRhaW5lcnMiLCAidmlld0NvbnRhaW5lciIsICJjcmVhdGVDb250YWluZXIiLCAidGFicyIsICJ2aWV3IiwgImNvbnQiLCAibG9hZGVkIiwgImNyZWF0ZSIsICJmaXgiLCAicGFnZW5hbWVzIiwgInNlbGYiLCAicmVtb3ZlIiwgImxvYWRpbmciLCAiYnVsa0VkaXRCeVJlZ2V4IiwgInRoZW4iLCAic2V0VGltZW91dCIsICJsb2FkVmlldyIsICJidWxrRWRpdCIsICJsb2FkQ3JlYXRlIiwgImFkZFJlZGlyZWN0VGV4dFN1ZmZpeCIsICJfcGFnZVdpdGhSZWRpcmVjdFRleHQyIiwgInVuaXF1ZUFycmF5IiwgInRpdGxlcyIsICJzdW1tYXJ5IiwgImZpbHRlciIsICJ2IiwgImkiLCAiYXJyIiwgImluZGV4T2YiLCAicG9zdCIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJxdWVyeSIsICJkZWZlcnJlZHMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJwYWdlcyIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAicG9zdFdpdGhUb2tlbiIsICJ0YWdzIiwgImVyciIsICJlIiwgImYiLCAid2hlbiIsICJyZWdleCIsICJydnByb3AiLCAicnZzbG90cyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJwYWdlIiwgImNvbnRlbnQiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm5ld0NvbnRlbnQiLCAiYmFzZXRpbWVzdGFtcCIsICJ0aW1lc3RhbXAiLCAibG9hZFRhYkNvbnQiLCAidGFibmFtZSIsICJyZWxvYWQiLCAidGFiIiwgImh0bWwiLCAiJGRlc2MiLCAiYXBwZW5kVG8iLCAiJHRleHQiLCAiYXBwbHkiLCAiZmFpbCIsICJhbHdheXMiLCAiYWRkTWV0aG9kcyIsICJocmVmIiwgImNsaWNrIiwgImNvbnRhaW5lciIsICJ0b0xvd2VyQ2FzZSIsICJyZW1vdmVDbGFzcyIsICJzZWxlY3RBbGwiLCAic2VsZWN0SW52ZXJzZSIsICJlYWNoIiwgIiRlbGVtZW50IiwgInNlbGVjdEFjdGlvbiIsICJjYiIsICJwYWdlbmFtZSIsICJkYXRhIiwgImNhbGwiLCAiY2xpY2tBY3Rpb24iLCAiYnVpbGRMaW5rIiwgImNsYXNzbmFtZSIsICJhIiwgInRhcmdldCIsICJyZWwiLCAiJHBhcmVudCIsICJtZXRob2RzIiwgIiRjb250YWluZXIiLCAibWV0aG9kRXhpc3QiLCAiSlNPTiIsICJzdHJpbmdpZnkiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAibWV0aG9kIiwgImJ1aWxkU2VsZWN0aW9uIiwgIm1haW4iLCAibWV0ZCIsICJtdCIsICJkc2FiIiwgInNlbGUiLCAibG9hZFJlZGlyZWN0IiwgImZpbmRSZWRpcmVjdCIsICJkZWVwIiwgImRlZmVycmVkIiwgIkRlZmVycmVkIiwgInRvcCIsICJvbkNsaWNrRml4IiwgImVudHJ5IiwgInBhcmVudHMiLCAiZmlyc3QiLCAicmRsaW1pdCIsICJoYXNfcmVkaXJlY3QiLCAiZGVzYyIsICJtYXhpbXVtUmVkaXJlY3REZXB0aCIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJyZWRpcmVjdHMiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAicmR0aXRsZSIsICJ1bHRpdGxlIiwgInV0aWwiLCAiZ2V0VXJsIiwgImlzQ3ljbGVSZWRpcmVjdCIsICJyZWRpcmVjdCIsICJyZXNvbHZlV2l0aCIsICJyZWplY3RXaXRoIiwgInByb21pc2UiLCAiZmluZFZhcmlhbnRzIiwgInN1ZmZpeFJlZyIsICJyZXRUaXRsZXMiLCAiX2kyIiwgIl9WQVJJQU5UUyIsICJ2YXJpYW50IiwgInhociIsICJ1c2VsYW5nIiwgImRpc3BsYXl0aXRsZSIsICJzdWZmaXhlcyIsICJfaTMiLCAiX2FyZ3MiLCAic3VmZml4QXJyIiwgImV4ZWMiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAibW9kaWZpZWRUaXRsZSIsICJmaW5kTm90RXhpc3RzIiwgImV4Y2x1ZGVzIiwgImFsbHRpdGxlcyIsICJfaTQiLCAiX1ZBUklBTlRTMiIsICJjb250ZW50bW9kZWwiLCAiX2k1IiwgIl9hcmdzMiIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJtaXNzaW5nIiwgImluY2x1ZGVzIiwgImZyY0RlZmVycmVkcyIsICIkY29udGVudCIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJyZXQiLCAiQm9vbGVhbiIsICJvbkNsaWNrQ3JlYXRlIiwgIl9pNiIsICJfYXJnczMiLCAiZnZ0aXRsZXMiLCAiX2l0ZXJhdG9yMCIsICJfc3RlcDAiLCAicmVkbGluayIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiaW1wb3J0X3Z1ZTQiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF92dWUyIiwgInByb3BzIiwgIl9fcHJvcHMiLCAiaXNPcGVuIiwgInJlZiIsICJvcGVuIiwgImFjdGl2ZVRhYiIsICJsb2FkVGFiIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAibmV4dFRpY2siLCAiY29udHJvbGxlciIsICJfeCIsICJhcmd1bWVudHMiLCAid2F0Y2giLCAib3BlbjIiLCAiaW1wb3J0X3Z1ZTMiLCAiX2hvaXN0ZWRfMSIsICJjbGFzcyIsICJyb2xlIiwgIl9ob2lzdGVkXzIiLCAiX2hvaXN0ZWRfMyIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgIkZyYWdtZW50IiwgImNyZWF0ZVZOb2RlIiwgIm9uQ2xpY2siLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgImNyZWF0ZVRleHRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiXyIsICIkZXZlbnQiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgIndlaWdodCIsICJ3aXRoRGlyZWN0aXZlcyIsICJ2U2hvdyIsICJBcHBfZGVmYXVsdCIsICJfX2ZpbGUiLCAiQXBwX2RlZmF1bHQyIiwgImFwcCIsICJtb3VudFRvb2xzUmVkaXJlY3QiLCAicm9vdCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImJvZHkiLCAiY3JlYXRlQXBwIiwgIm1vdW50IiwgIndnVXNlckxhbmd1YWdlIiwgInNldE1lc3NhZ2VzIiwgIkRFRkFVTFRfTUVTU0FHRVNfSEFOUyIsICJERUZBVUxUX01FU1NBR0VTX0hBTlQiLCAibWVzc2FnZXMiLCAic2V0IiwgImdldEJvZHkiLCAidHJpZ2dlciIsICJxdWVyeVNlbGVjdG9yIl0KfQo=
