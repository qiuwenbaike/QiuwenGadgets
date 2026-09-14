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
  class: "tools-redirect-trigger"
};
var _hoisted_2 = {
  class: "tools-redirect-tabs",
  role: "tablist"
};
var _hoisted_3 = {
  ref: "viewContainer",
  class: "dialog-redirect tab-redirect",
  role: "tabpanel"
};
var _hoisted_4 = {
  ref: "createContainer",
  class: "dialog-redirect tab-redirect",
  role: "tabpanel"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
    import_vue3.Fragment,
    null,
    [(0, import_vue3.createElementVNode)("div", _hoisted_1, [(0, import_vue3.createVNode)($setup["CdxButton"], {
      onClick: $setup.open
    }, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
        (0, import_vue3.toDisplayString)($setup.getMessage("btntitle")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    })]), (0, import_vue3.createVNode)($setup["CdxDialog"], {
      open: $setup.isOpen,
      "onUpdate:open": _cache[2] || (_cache[2] = ($event) => $setup.isOpen = $event),
      title: $setup.getMessage("dlgtitle"),
      "use-close-button": true
    }, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createElementVNode)("div", _hoisted_2, [(0, import_vue3.createVNode)($setup["CdxButton"], {
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
        _hoisted_3,
        null,
        512
        /* NEED_PATCH */
      ), [[import_vue3.vShow, $setup.activeTab === "view"]]), (0, import_vue3.withDirectives)((0, import_vue3.createElementVNode)(
        "div",
        _hoisted_4,
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
    const trigger = document.querySelector(".tools-redirect-trigger button");
    trigger === null || trigger === void 0 || trigger.click();
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QvVG9vbHNSZWRpcmVjdC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9vcHRpb25zLmpzb24iLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy91dGlsL2ZpeE5hbWVzcGFjZS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL3V0aWwvZ2V0TWVzc2FnZS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL3VpLnRzIiwgImRpc3QvVG9vbHNSZWRpcmVjdC9zcmMvVG9vbHNSZWRpcmVjdC9BcHAudnVlIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxUb29sc1JlZGlyZWN0XFxBcHAudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1Rvb2xzUmVkaXJlY3QvQXBwLnZ1ZSIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL21lc3NhZ2VzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vVG9vbHNSZWRpcmVjdC5sZXNzJztcbmltcG9ydCB7VG9vbHNSZWRpcmVjdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHttb3VudFRvb2xzUmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy91aSc7XG5pbXBvcnQge3NldE1lc3NhZ2VzfSBmcm9tICcuL21vZHVsZXMvbWVzc2FnZXMnO1xuXG5zZXRNZXNzYWdlcygpO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0bW91bnRUb29sc1JlZGlyZWN0KFRvb2xzUmVkaXJlY3QsICgpID0+IHVuZGVmaW5lZCk7XG5cdFRvb2xzUmVkaXJlY3QuaW5pdCgkYm9keSwgKCkgPT4ge1xuXHRcdGNvbnN0IHRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PignLnRvb2xzLXJlZGlyZWN0LXRyaWdnZXIgYnV0dG9uJyk7XG5cdFx0dHJpZ2dlcj8uY2xpY2soKTtcblx0fSk7XG59KTtcblxuZXhwb3J0IHtmaW5kUmVkaXJlY3RDYWxsYmFjaywgZmluZFJlZGlyZWN0QnlTZWxlY3Rvciwgc2V0UmVkaXJlY3RUZXh0U3VmZml4fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG4iLCAie1xuXHRcImFwaVRhZ1wiOiBcIlRvb2xzUmVkaXJlY3RcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJjb25zdCBTVUZGSVhfQVBQRU5EID0gMDtcbmNvbnN0IFNVRkZJWF9SRVBMQUNFID0gMTtcbmNvbnN0IFNVRkZJWF9TRVRERUZBVUxUID0gMjtcblxuY29uc3QgVkFSSUFOVFMgPSBbJ3poLWhhbnMnLCAnemgtaGFudCcsICd6aC1jbicsICd6aC1oaycsICd6aC1tbycsICd6aC1zZycsICd6aC1teScsICd6aC10dyddO1xuXG5leHBvcnQge1NVRkZJWF9BUFBFTkQsIFNVRkZJWF9SRVBMQUNFLCBTVUZGSVhfU0VUREVGQVVMVCwgVkFSSUFOVFN9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7UmVkaXJlY3RDYWxsYmFjaywgUmVkaXJlY3RNZXRob2QsIFRvb2xzUmVkaXJlY3RBcGl9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtTVUZGSVhfQVBQRU5ELCBTVUZGSVhfUkVQTEFDRSwgU1VGRklYX1NFVERFRkFVTFQsIFZBUklBTlRTfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheSwgdW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtmaXhOYW1lc3BhY2V9IGZyb20gJy4vdXRpbC9maXhOYW1lc3BhY2UnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL3V0aWwvZ2V0TWVzc2FnZSc7XG5jb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgSVNfQ0FURUdPUlkgPSB3Z05hbWVzcGFjZU51bWJlciA9PT0gMTQ7XG5sZXQgZmluZFJlZGlyZWN0Q2FsbGJhY2tzOiBSZWRpcmVjdENhbGxiYWNrW10gPSBbXTtcbmNvbnN0IHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcbmNvbnN0IHJlZGlyZWN0RXhjbHVkZXM6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge307XG5cbi8qKlxuICogQWRkIG5ldyBjdXN0b20gY2FsbGJhY2sgZm9yIGZpbmRpbmcgbmV3IHBvdGVudGlhbCByZWRpcmVjdCB0aXRsZXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgKHBhZ2VuYW1lLCAkY29udGVudCwgdGl0bGVzKSA9PiB0aXRsZSBsaXN0XG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBhcmdzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmNvbnN0IGZpbmRSZWRpcmVjdENhbGxiYWNrID0gZnVuY3Rpb24gKFxuXHR0aGlzOiBUb29sc1JlZGlyZWN0QXBpLFxuXHRjYWxsYmFjazogUmVkaXJlY3RDYWxsYmFjayxcblx0Li4uYXJnczogdW5rbm93bltdXG4pOiBUb29sc1JlZGlyZWN0QXBpIHtcblx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0ZmluZFJlZGlyZWN0Q2FsbGJhY2tzW2ZpbmRSZWRpcmVjdENhbGxiYWNrcy5sZW5ndGhdID0gY2FsbGJhY2s7XG5cdH0gZWxzZSB7XG5cdFx0ZmluZFJlZGlyZWN0Q2FsbGJhY2tzID0gZ2VuZXJhdGVBcnJheShmaW5kUmVkaXJlY3RDYWxsYmFja3MsIGNhbGxiYWNrLCAuLi5hcmdzKSBhcyBSZWRpcmVjdENhbGxiYWNrW107XG5cdH1cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEZpbmQgbmV3IHBvdGVudGlhbCByZWRpcmVjdCB0aXRsZXMgdGhyb3VnaCBzZWxlY3RvcihzKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5jb25zdCBmaW5kUmVkaXJlY3RCeVNlbGVjdG9yID0gZnVuY3Rpb24gKHRoaXM6IFRvb2xzUmVkaXJlY3RBcGksIHNlbGVjdG9yOiBzdHJpbmcpOiBUb29sc1JlZGlyZWN0QXBpIHtcblx0LyogQSBzaG9ydGN1dCB0byBhZGQgQ1NTIHNlbGVjdG9ycyBhcyBydWxlIHRvIGZpbmQgbmV3IHBvdGVudGlhbCByZWRpcmVjdCB0aXRsZXMuICovXG5cdGZpbmRSZWRpcmVjdENhbGxiYWNrc1tmaW5kUmVkaXJlY3RDYWxsYmFja3MubGVuZ3RoXSA9ICgpID0+IHtcblx0XHRyZXR1cm4gJChzZWxlY3RvcikubWFwKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiAkKGVsZW1lbnQpLmVxKDApLnRleHQoKS50cmltKCkgfHwgbnVsbDtcblx0XHR9KSBhcyBKUXVlcnk8YW55Pjtcblx0fTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5jb25zdCBzZXRSZWRpcmVjdFRleHRTdWZmaXggPSAodGl0bGU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcsIGZsYWc/OiBudW1iZXIpOiB2b2lkID0+IHtcblx0bGV0IGZsYWdfc2V0ID0gZmFsc2U7XG5cdGxldCBmbGFnX2FwcGVuZCA9IGZhbHNlO1xuXHRmbGFnIHx8PSBTVUZGSVhfQVBQRU5EOyAvLyBkZWZhdWx0IGFwcGVuZFxuXHRmbGFnX3NldCA9IGZsYWcgPT09IFNVRkZJWF9SRVBMQUNFO1xuXHR0aXRsZSA9IGZpeE5hbWVzcGFjZSh0aXRsZSk7XG5cdGlmICh0aXRsZSBpbiBwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeCkge1xuXHRcdGZsYWdfYXBwZW5kID0gZmxhZyA9PT0gU1VGRklYX0FQUEVORDtcblx0fSBlbHNlIHtcblx0XHQvLyBpZiBub3QgZXhpc3QsIGV2ZXJ5IGZsYWcgY2FuIHNldFxuXHRcdGZsYWdfc2V0ID0gdHJ1ZTtcblx0fVxuXHRpZiAoZmxhZ19zZXQpIHtcblx0XHRwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0gPSBnZW5lcmF0ZUFycmF5KHN1ZmZpeCk7XG5cdH0gZWxzZSBpZiAoZmxhZ19hcHBlbmQpIHtcblx0XHRwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0gPSBnZW5lcmF0ZUFycmF5KHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSA/PyBbXSwgc3VmZml4KSBhcyBzdHJpbmdbXTtcblx0fVxufTtcblxuY29uc3QgVG9vbHNSZWRpcmVjdDogVG9vbHNSZWRpcmVjdEFwaSA9IHtcblx0dmFyaWFudHM6IFZBUklBTlRTLFxuXHRpbml0KCRib2R5LCBvbk9wZW4pIHtcblx0XHRjb25zdCBidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdC5hZGRDbGFzcygnbXctbGlzdC1pdGVtIGNvbGxhcHNpYmxlIHZlY3Rvci10YWItbm9pY29uJylcblx0XHRcdC5hdHRyKCdpZCcsICdjYS1yZWRpcmVjdCcpXG5cdFx0XHQuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0XHQuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnYnRuZGVzYycpKS50ZXh0KGdldE1lc3NhZ2UoJ2J0bnRpdGxlJykpKTtcblx0XHRidXR0b24ub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0b25PcGVuKCk7XG5cdFx0fSk7XG5cdFx0JGJvZHkuZmluZCgnbGkjY2EtaGlzdG9yeScpLmFmdGVyKGJ1dHRvbik7XG5cdH0sXG5cdGF0dGFjaENvbnRhaW5lcnModmlld0NvbnRhaW5lciwgY3JlYXRlQ29udGFpbmVyKSB7XG5cdFx0dGhpcy50YWJzLnZpZXcgPSB7Y29udDogJCh2aWV3Q29udGFpbmVyKSwgbG9hZGVkOiBmYWxzZX07XG5cdFx0dGhpcy50YWJzLmNyZWF0ZSA9IHtjb250OiAkKGNyZWF0ZUNvbnRhaW5lciksIGxvYWRlZDogZmFsc2V9O1xuXHR9LFxuXHR0YWJzOiB7XG5cdFx0dmlldzoge2NvbnQ6ICQoKSwgbG9hZGVkOiBmYWxzZX0sXG5cdFx0Y3JlYXRlOiB7Y29udDogJCgpLCBsb2FkZWQ6IGZhbHNlfSxcblx0fSxcblx0Zml4KHBhZ2VuYW1lcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdCQoJ3AuZGVzYycsIHNlbGYudGFicy52aWV3LmNvbnQpLnRleHQoZ2V0TWVzc2FnZSgnZml4bG9hZGluZycpKTtcblx0XHQkKCdwW2NsYXNzIT1kZXNjXScsIHNlbGYudGFicy52aWV3LmNvbnQpLnJlbW92ZSgpO1xuXHRcdHNlbGYubG9hZGluZyhzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHR2b2lkIHNlbGZcblx0XHRcdC5idWxrRWRpdEJ5UmVnZXgocGFnZW5hbWVzLCAvXFxzKlxcW1xcWy4qPygjLio/KT9cXF1cXF0vLCBgIFtbJHt3Z1BhZ2VOYW1lfSQxXV1gLCBnZXRNZXNzYWdlKCdmaXhzdW1tYXJ5JykpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdC8vIGRlbGF5IGxvYWQgYmVmb3JlIHRoZSBhc3luY2hyb25vdXMgdGFza3Mgb24gc2VydmVyIGZpbmlzaGVkXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYubG9hZGVkKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRcdHNlbGYubG9hZFZpZXcodHJ1ZSk7XG5cdFx0XHRcdH0sIDMwMDApO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGNyZWF0ZShwYWdlbmFtZXMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHQkKCdwLmRlc2MnLCBzZWxmLnRhYnMuY3JlYXRlLmNvbnQpLnRleHQoZ2V0TWVzc2FnZSgnY3JlYXRlbG9hZGluZycpKTtcblx0XHQkKCdwW2NsYXNzIT1kZXNjXScsIHNlbGYudGFicy5jcmVhdGUuY29udCkucmVtb3ZlKCk7XG5cdFx0c2VsZi5sb2FkaW5nKHNlbGYudGFicy5jcmVhdGUuY29udCk7XG5cdFx0dm9pZCBzZWxmXG5cdFx0XHQuYnVsa0VkaXQoXG5cdFx0XHRcdHBhZ2VuYW1lcyxcblx0XHRcdFx0Z2V0TWVzc2FnZShJU19DQVRFR09SWSA/ICdjcmVhdGV0ZXh0LWNhdGVnb3J5JyA6ICdjcmVhdGV0ZXh0JykucmVwbGFjZSgnJDEnLCB3Z1BhZ2VOYW1lKSxcblx0XHRcdFx0Z2V0TWVzc2FnZSgnY3JlYXRlc3VtbWFyeScpLnJlcGxhY2UoJyQxJywgd2dQYWdlTmFtZSlcblx0XHRcdClcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0Ly8gZGVsYXkgbG9hZCBiZWZvcmUgdGhlIGFzeW5jaHJvbm91cyB0YXNrcyBvbiBzZXJ2ZXIgZmluaXNoZWRcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5sb2FkZWQoc2VsZi50YWJzLmNyZWF0ZS5jb250KTtcblx0XHRcdFx0XHRzZWxmLnRhYnMudmlldy5sb2FkZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRzZWxmLmxvYWRDcmVhdGUodHJ1ZSk7XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9KTtcblx0fSxcblx0YWRkUmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCB0ZXh0KSB7XG5cdFx0aWYgKHRpdGxlIGluIHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4KSB7XG5cdFx0XHR0ZXh0ICs9IGBcXG4ke3VuaXF1ZUFycmF5KHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSA/PyBbXSkuam9pbignXFxuJyl9YDsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdH1cblx0XHRyZXR1cm4gdGV4dDtcblx0fSxcblx0YnVsa0VkaXQodGl0bGVzLCB0ZXh0LCBzdW1tYXJ5KSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0dGl0bGVzID0gdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YodikgPT09IGk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGFwaVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0dGl0bGVzLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGRlZmVycmVkcyA9IFtdO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZX0gb2YgcXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRkZWZlcnJlZHNbZGVmZXJyZWRzLmxlbmd0aF0gPSBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdHRleHQ6IHNlbGYuYWRkUmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCB0ZXh0KSxcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHR0YWdzOiBPUFRJT05TLmFwaVRhZyxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gJC53aGVuKC4uLmRlZmVycmVkcyk7XG5cdFx0XHR9KTtcblx0fSxcblx0YnVsa0VkaXRCeVJlZ2V4KHRpdGxlcywgcmVnZXgsIHRleHQsIHN1bW1hcnkpIHtcblx0XHR0aXRsZXMgPSB0aXRsZXMuZmlsdGVyKCh2LCBpLCBhcnIpID0+IHtcblx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2KSA9PT0gaTtcblx0XHR9KTtcblx0XHRyZXR1cm4gYXBpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRcdHRpdGxlcyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBkZWZlcnJlZHM6IHN0cmluZyB8IGFueVtdID0gW107XG5cdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGNvbnN0IHtjb250ZW50fSA9IHBhZ2UucmV2aXNpb25zWzBdLnNsb3RzWydtYWluJ107XG5cdFx0XHRcdFx0Y29uc3QgbmV3Q29udGVudCA9IGNvbnRlbnQucmVwbGFjZShyZWdleCwgdGV4dCk7XG5cdFx0XHRcdFx0ZGVmZXJyZWRzW2RlZmVycmVkcy5sZW5ndGhdID0gYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdFx0dGl0bGU6IHBhZ2UudGl0bGUsXG5cdFx0XHRcdFx0XHR0ZXh0OiBuZXdDb250ZW50LFxuXHRcdFx0XHRcdFx0dGFnczogT1BUSU9OUy5hcGlUYWcsXG5cdFx0XHRcdFx0XHRiYXNldGltZXN0YW1wOiBwYWdlLnJldmlzaW9uc1swXS50aW1lc3RhbXAsXG5cdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRsb2FkVGFiQ29udCh0YWJuYW1lLCBjYWxsYmFjaywgcmVsb2FkKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgdGFiID0gc2VsZi50YWJzW3RhYm5hbWVdO1xuXHRcdGlmIChyZWxvYWQpIHtcblx0XHRcdHRhYi5sb2FkZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCF0YWIubG9hZGVkKSB7XG5cdFx0XHR0YWIuY29udC5odG1sKCcnKTtcblx0XHRcdC8vXG5cdFx0XHRjb25zdCAkZGVzYyA9ICQoJzxwPicpXG5cdFx0XHRcdC5hZGRDbGFzcygnZGVzYycpXG5cdFx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rlc2MtdGV4dCcpLnRleHQoZ2V0TWVzc2FnZSgncmVkaWxvYWRpbmcnKSkpXG5cdFx0XHRcdC5hcHBlbmRUbyh0YWIuY29udCk7XG5cdFx0XHRjb25zdCAkdGV4dCA9ICRkZXNjLmZpbmQoJz4gLmRlc2MtdGV4dCcpO1xuXHRcdFx0Y2FsbGJhY2tcblx0XHRcdFx0LmFwcGx5KHNlbGYpXG5cdFx0XHRcdC5kb25lKCgpID0+IHtcblx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMuanNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0JHRleHQudGV4dChnZXRNZXNzYWdlKGB0YWIke3RhYm5hbWV9ZGVzY2ApKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmZhaWwoKCkgPT4ge1xuXHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBtZXNzYWdlcy5qc1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHQkdGV4dC50ZXh0KGdldE1lc3NhZ2UoYHRhYiR7dGFibmFtZX1ub3Rmb3VuZGApKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5hZGRNZXRob2RzKCRkZXNjLCBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjcmVmcmVzaCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdyZWZyZXNoJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLmxvYWRUYWJDb250KHRhYm5hbWUsIGNhbGxiYWNrLCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0dGFiLmxvYWRlZCA9IHRydWU7XG5cdFx0fVxuXHR9LFxuXHRsb2FkaW5nKGNvbnRhaW5lcikge1xuXHRcdGlmIChjb250YWluZXIucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCkgPT09ICdzcGFuJykge1xuXHRcdFx0Y29udGFpbmVyLmFkZENsYXNzKCdtdy1hamF4LWxvYWRlcicpO1xuXHRcdH0gZWxzZSBpZiAoJCgnc3Bhbi5tdy1hamF4LWxvYWRlcicsIGNvbnRhaW5lcikubGVuZ3RoID09PSAwKSB7XG5cdFx0XHQkKCc8c3Bhbj4nKS5hZGRDbGFzcygnbXctYWpheC1sb2FkZXInKS5hcHBlbmRUbyhjb250YWluZXIpO1xuXHRcdH1cblx0fSxcblx0bG9hZGVkKGNvbnRhaW5lcikge1xuXHRcdGlmIChjb250YWluZXIucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCkgPT09ICdzcGFuJykge1xuXHRcdFx0Y29udGFpbmVyLnJlbW92ZUNsYXNzKCdtdy1hamF4LWxvYWRlcicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCdzcGFuLm13LWFqYXgtbG9hZGVyJywgY29udGFpbmVyKS5yZW1vdmUoKTtcblx0XHR9XG5cdH0sXG5cdHNlbGVjdEFsbChjb250KSB7XG5cdFx0JCgnaW5wdXRbdHlwZT1jaGVja2JveF06bm90KDpkaXNhYmxlZCknLCBjb250KS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG5cdH0sXG5cdHNlbGVjdEludmVyc2UoY29udCkge1xuXHRcdCQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdOm5vdCg6ZGlzYWJsZWQpJywgY29udCkuZWFjaCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cdFx0XHQkZWxlbWVudC5wcm9wKCdjaGVja2VkJywgISRlbGVtZW50LnByb3AoJ2NoZWNrZWQnKSk7XG5cdFx0fSk7XG5cdH0sXG5cdHNlbGVjdEFjdGlvbihjb250LCBjYikge1xuXHRcdGNvbnN0IHBhZ2VuYW1lczogc3RyaW5nW10gPSBbXTtcblx0XHQkKCdpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkJywgY29udCkuZWFjaCgoX2luZGV4LCBwYWdlbmFtZSkgPT4ge1xuXHRcdFx0cGFnZW5hbWVzW3BhZ2VuYW1lcy5sZW5ndGhdID0gJChwYWdlbmFtZSkuZGF0YSgncGFnZS10aXRsZScpO1xuXHRcdH0pO1xuXHRcdGlmIChwYWdlbmFtZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y2IuY2FsbCh0aGlzLCBwYWdlbmFtZXMpO1xuXHRcdH1cblx0fSxcblx0Y2xpY2tBY3Rpb24oY29udCwgY2IpIHtcblx0XHRjb25zdCBwYWdlbmFtZSA9ICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIGNvbnQpLmRhdGEoJ3BhZ2UtdGl0bGUnKTtcblx0XHRjYi5jYWxsKHRoaXMsIFtwYWdlbmFtZV0pO1xuXHR9LFxuXHRidWlsZExpbmsoe3RpdGxlLCBocmVmLCBjbGljaywgY2xhc3NuYW1lfSkge1xuXHRcdGNvbnN0IGEgPSAkKCc8YT4nKVxuXHRcdFx0LmF0dHIoe1xuXHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0aHJlZixcblx0XHRcdFx0dGFyZ2V0OiAnX2JsYW5rJyxcblx0XHRcdFx0cmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcicsXG5cdFx0XHR9KVxuXHRcdFx0LnRleHQodGl0bGUpO1xuXHRcdGlmIChjbGljaykge1xuXHRcdFx0YS5vbignY2xpY2snLCBjbGljayk7XG5cdFx0fVxuXHRcdGlmIChjbGFzc25hbWUpIHtcblx0XHRcdGEuYWRkQ2xhc3MoY2xhc3NuYW1lKTtcblx0XHR9XG5cdFx0cmV0dXJuICQoJzxzcGFuPicpLmFkZENsYXNzKCd0b29scy1yZWRpcmVjdF9saW5rJykuYXBwZW5kKGEpO1xuXHR9LFxuXHRhZGRNZXRob2RzKCRwYXJlbnQsIG1ldGhvZHMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRsZXQgJGNvbnRhaW5lciA9ICRwYXJlbnQuZmluZCgnPiAudG9vbHMtcmVkaXJlY3RfbWV0aG9kcycpO1xuXHRcdGNvbnN0IG1ldGhvZEV4aXN0ID0gKHtocmVmfTogUmVkaXJlY3RNZXRob2QpOiBib29sZWFuID0+IHtcblx0XHRcdHJldHVybiAkY29udGFpbmVyLmZpbmQoYGFbaHJlZj0ke0pTT04uc3RyaW5naWZ5KGhyZWYpfV1gKS5sZW5ndGggPiAwO1xuXHRcdH07XG5cdFx0aWYgKCRjb250YWluZXIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHQkY29udGFpbmVyID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3Rvb2xzLXJlZGlyZWN0X21ldGhvZHMnKS5hcHBlbmRUbygkcGFyZW50KTtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBtZXRob2Qgb2YgbWV0aG9kcykge1xuXHRcdFx0aWYgKCFtZXRob2RFeGlzdChtZXRob2QpKSB7XG5cdFx0XHRcdHNlbGYuYnVpbGRMaW5rKG1ldGhvZCkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRidWlsZFNlbGVjdGlvbihtYWluLCBtZXRkLCBtdCwgZHNhYikge1xuXHRcdGNvbnN0IGNvbnQgPSAkKCc8c3Bhbj4nKTtcblx0XHRjb25zdCBzZWxlID0gJCgnPGlucHV0PicpLmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKS5hcHBlbmRUbyhjb250KTtcblx0XHR0aGlzLmJ1aWxkTGluayhtYWluKS5hcHBlbmRUbyhjb250KTtcblx0XHR0aGlzLmFkZE1ldGhvZHMoY29udCwgbWV0ZCk7XG5cdFx0c2VsZS5kYXRhKCdwYWdlLXRpdGxlJywgbXQpO1xuXHRcdGlmIChkc2FiKSB7XG5cdFx0XHRzZWxlLnByb3AoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0fVxuXHRcdHJldHVybiBjb250O1xuXHR9LFxuXHRsb2FkVmlldyhyZWxvYWQpIHtcblx0XHRjb25zdCAkY29udGFpbmVyID0gdGhpcy50YWJzLnZpZXcuY29udDtcblx0XHR0aGlzLmxvYWRUYWJDb250KFxuXHRcdFx0J3ZpZXcnLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5sb2FkUmVkaXJlY3Qod2dQYWdlTmFtZSwgJGNvbnRhaW5lciwgMCk7XG5cdFx0XHR9LFxuXHRcdFx0cmVsb2FkXG5cdFx0KTtcblx0fSxcblx0bG9hZENyZWF0ZShyZWxvYWQpIHtcblx0XHR0aGlzLmxvYWRUYWJDb250KFxuXHRcdFx0J2NyZWF0ZScsXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpbmRSZWRpcmVjdCh3Z1BhZ2VOYW1lKTtcblx0XHRcdH0sXG5cdFx0XHRyZWxvYWRcblx0XHQpO1xuXHR9LFxuXHRsb2FkUmVkaXJlY3QocGFnZW5hbWUsIGNvbnRhaW5lciwgZGVlcCwgbG9hZGVkKSB7XG5cdFx0dGhpcy5sb2FkaW5nKGNvbnRhaW5lcik7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgdG9wID0gZGVlcCA/ICQoJzxkbD4nKS5hcHBlbmRUbyhjb250YWluZXIpIDogY29udGFpbmVyO1xuXHRcdGlmICghbG9hZGVkKSB7XG5cdFx0XHRsb2FkZWQgPSB7fTtcblx0XHRcdGxvYWRlZFtwYWdlbmFtZV0gPSB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBvbkNsaWNrRml4ID0gKGV2ZW50OiBKUXVlcnkuRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IGVudHJ5ID0gJCh0aGlzKS5wYXJlbnRzKCdkZCwgcCcpLmZpcnN0KCk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c2VsZi5jbGlja0FjdGlvbihlbnRyeSwgdGhpcy5maXgpO1xuXHRcdH07XG5cdFx0dm9pZCBhcGlcblx0XHRcdC5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAncmVkaXJlY3RzJyxcblx0XHRcdFx0dGl0bGVzOiBwYWdlbmFtZSxcblx0XHRcdFx0cmRsaW1pdDogJ21heCcsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0c2VsZi5sb2FkZWQoY29udGFpbmVyKTtcblx0XHRcdFx0bGV0IGhhc19yZWRpcmVjdCA9IGZhbHNlO1xuXHRcdFx0XHRjb25zdCBkZXNjID0gJCgncC5kZXNjJywgc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0XHRcdGNvbnN0IG1heGltdW1SZWRpcmVjdERlcHRoID0gMTA7XG5cdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGlmIChwYWdlLnJlZGlyZWN0cykge1xuXHRcdFx0XHRcdFx0Y29uc3Qge3JlZGlyZWN0c30gPSBwYWdlO1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGV9IG9mIHJlZGlyZWN0cykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCByZHRpdGxlID0gdGl0bGU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHVsdGl0bGUgPSByZHRpdGxlLnJlcGxhY2UoLyAvZywgJ18nKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZW50cnkgPSAoZGVlcCA/ICQoJzxkZD4nKSA6ICQoJzxwPicpKS5hcHBlbmRUbyh0b3ApO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBtZXRob2RzOiBSZWRpcmVjdE1ldGhvZFtdID0gW1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY6IG13LnV0aWwuZ2V0VXJsKHVsdGl0bGUsIHthY3Rpb246ICdlZGl0J30pLFxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3JlZGllZGl0JyksXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgaXNDeWNsZVJlZGlyZWN0ID0gcmR0aXRsZSBpbiBsb2FkZWQ7XG5cdFx0XHRcdFx0XHRcdGxvYWRlZFtyZHRpdGxlXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdGlmICghaXNDeWNsZVJlZGlyZWN0ICYmIGRlZXApIHtcblx0XHRcdFx0XHRcdFx0XHRtZXRob2RzW21ldGhvZHMubGVuZ3RoXSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY6ICcjZml4LXJlZGlyZWN0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJ2aWV3Zml4JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGljazogb25DbGlja0ZpeCxcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRjb250YWluZXIgPSBzZWxmXG5cdFx0XHRcdFx0XHRcdFx0LmJ1aWxkU2VsZWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmOiBtdy51dGlsLmdldFVybCh1bHRpdGxlLCB7cmVkaXJlY3Q6ICdubyd9KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJkdGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0bWV0aG9kcyxcblx0XHRcdFx0XHRcdFx0XHRcdHVsdGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHQhZGVlcFxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kVG8oZW50cnkpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaXNDeWNsZVJlZGlyZWN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0JGNvbnRhaW5lci5hcHBlbmQoYDxzcGFuIGNsYXNzPVwiZXJyb3JcIj4ke2dldE1lc3NhZ2UoJ2VycmN5Y2xlcmVkaXJlY3QnKX08L3NwYW4+YCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZGVlcCA8IG1heGltdW1SZWRpcmVjdERlcHRoKSB7XG5cdFx0XHRcdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLmxvYWRSZWRpcmVjdChyZHRpdGxlLCBlbnRyeSwgZGVlcCArIDEsIGxvYWRlZCk7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aGFzX3JlZGlyZWN0ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aGFzX3JlZGlyZWN0ID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChoYXNfcmVkaXJlY3QgJiYgZGVlcCA9PT0gMSkge1xuXHRcdFx0XHRcdHNlbGYuYWRkTWV0aG9kcyhkZXNjLCBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWFsbCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdzZWxlY3RhbGwnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0QWxsKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNzZWxlY3QtaW52ZXJzZScsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdzZWxlY3RpbnZlcnNlJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEludmVyc2Uoc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI2ZpeC1zZWxlY3RlZCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJ2aWV3Zml4JyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFjdGlvbihzZWxmLnRhYnMudmlldy5jb250LCBzZWxmLmZpeCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChoYXNfcmVkaXJlY3QpIHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmVXaXRoKHNlbGYpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0V2l0aChzZWxmKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcblx0fSxcblx0ZmluZFZhcmlhbnRzKHBhZ2VuYW1lLCB0aXRsZXMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBzdWZmaXhSZWcgPSAvXi4rPygo77yIfFsgX11cXCgpLis/KFsp77yJXSkpJC87XG5cdFx0bGV0IHJldFRpdGxlczogc3RyaW5nW10gPSBbXTtcblx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgVkFSSUFOVFMpIHtcblx0XHRcdGNvbnN0IHhociA9IGFwaVxuXHRcdFx0XHQucG9zdCh7XG5cdFx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRwYWdlOiBwYWdlbmFtZSxcblx0XHRcdFx0XHRwcm9wOiAnZGlzcGxheXRpdGxlJyxcblx0XHRcdFx0XHR1c2VsYW5nOiB2YXJpYW50LFxuXHRcdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCh7cGFyc2V9KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qge2Rpc3BsYXl0aXRsZX0gPSBwYXJzZTtcblx0XHRcdFx0XHQvLyBFeGFtcGxlOlxuXHRcdFx0XHRcdC8vIC0gQmVmb3JlOiA8c3BhbiBjbGFzcz1cIm13LXBhZ2UtdGl0bGUtbmFtZXNwYWNlXCI+5rGC6Ze755m+56eRPC9zcGFuPjxzcGFuIGNsYXNzPVwibXctcGFnZS10aXRsZS1zZXBhcmF0b3JcIj46PC9zcGFuPjxzcGFuIGNsYXNzPVwibXctcGFnZS10aXRsZS1tYWluXCI+5rKZ55uSPC9zcGFuPlxuXHRcdFx0XHRcdC8vIC0gQWZ0ZXI6IOaxgumXu+eZvuenkTrmspnnm5Jcblx0XHRcdFx0XHRsZXQgdGl0bGUgPSAkKCc8c3Bhbj4nKS5hcHBlbmQoZGlzcGxheXRpdGxlKS5lcSgwKS50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRcdHRpdGxlID0gZml4TmFtZXNwYWNlKHRpdGxlKTtcblx0XHRcdFx0XHRzZXRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsICd7e+eugOe5gemHjeWumuWQkX19JywgU1VGRklYX0FQUEVORCk7XG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlO1xuXHRcdFx0XHR9KTtcblx0XHRcdGRlZmVycmVkc1tkZWZlcnJlZHMubGVuZ3RoXSA9IHhocjtcblx0XHR9XG5cdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpLnRoZW4oKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG5cdFx0XHRjb25zdCBzdWZmaXhlcyA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCB0aXRsZSBvZiBhcmdzKSB7XG5cdFx0XHRcdGxldCBzdWZmaXg7XG5cdFx0XHRcdC8vIGZpbmQgdGl0bGUgc3VmZml4LFxuXHRcdFx0XHQvLyBmb3IgZXhhbXBsZSBcIiAo5rWO5Y2X5biCKVwiIHRvIFwi5biC5Lit5Yy6ICjmtY7ljZfluIIpXCJcblx0XHRcdFx0Y29uc3Qgc3VmZml4QXJyID0gc3VmZml4UmVnLmV4ZWModGl0bGUpO1xuXHRcdFx0XHRpZiAoc3VmZml4QXJyICYmIHN1ZmZpeEFyci5sZW5ndGggPT09IDIpIHtcblx0XHRcdFx0XHRbLCBzdWZmaXhdID0gc3VmZml4QXJyO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1ZmZpeCA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldFRpdGxlc1tyZXRUaXRsZXMubGVuZ3RoXSA9IHRpdGxlO1xuXHRcdFx0XHRzdWZmaXhlc1tzdWZmaXhlcy5sZW5ndGhdID0gc3VmZml4O1xuXHRcdFx0fVxuXHRcdFx0Ly8gYXBwZW5kIHN1ZmZpeGVzXG5cdFx0XHRmb3IgKGNvbnN0IHN1ZmZpeCBvZiB1bmlxdWVBcnJheShzdWZmaXhlcykpIHtcblx0XHRcdFx0cmV0VGl0bGVzID0gW1xuXHRcdFx0XHRcdC4uLnJldFRpdGxlcyxcblx0XHRcdFx0XHQuLi50aXRsZXMubWFwKCh0aXRsZSkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgbW9kaWZpZWRUaXRsZSA9IGZpeE5hbWVzcGFjZSh0aXRsZSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc3VmZml4UmVnLnRlc3QobW9kaWZpZWRUaXRsZSkgPyBtb2RpZmllZFRpdGxlIDogbW9kaWZpZWRUaXRsZSArIHN1ZmZpeDtcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNlbGYuZmluZE5vdEV4aXN0cyh1bmlxdWVBcnJheShyZXRUaXRsZXMpKTsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdH0pO1xuXHR9LFxuXHRmaW5kTm90RXhpc3RzKHRpdGxlcykge1xuXHRcdGNvbnN0IGRlZmVycmVkcyA9IFtdO1xuXHRcdGNvbnN0IGV4Y2x1ZGVzID0gWyfnlKjlrZfmqKHlvI8nXTtcblx0XHRsZXQgYWxsdGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiBWQVJJQU5UUykge1xuXHRcdFx0ZGVmZXJyZWRzW2RlZmVycmVkcy5sZW5ndGhdID0gYXBpLmdldCh7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGV4dDogdGl0bGVzLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdHRpdGxlOiAnTWVkaWFXaWtpOkdhZGdldC1Ub29sc1JlZGlyZWN0LmpzLy0nLFxuXHRcdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdHVzZWxhbmc6IHZhcmlhbnQsXG5cdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpLnRoZW4oKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IFt7cGFyc2V9XSBvZiBhcmdzIGFzIEFycmF5PFsodHlwZW9mIGFyZ3MpW251bWJlcl1dPikge1xuXHRcdFx0XHRhbGx0aXRsZXMgPSBbLi4uYWxsdGl0bGVzLCAuLi4kKHBhcnNlLnRleHQpLnRleHQoKS50cmltKCkuc3BsaXQoJ3wnKV07XG5cdFx0XHR9XG5cdFx0XHRhbGx0aXRsZXMgPSBhbGx0aXRsZXMuZmlsdGVyKCh2LCBpLCBhcnIpID0+IHtcblx0XHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKHYpID09PSBpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gYXBpXG5cdFx0XHRcdC5wb3N0KHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0XHR0aXRsZXM6IGFsbHRpdGxlcyxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0XHR0aXRsZXMgPSBbXTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHt0aXRsZX0gPSBwYWdlO1xuXHRcdFx0XHRcdFx0aWYgKHBhZ2UubWlzc2luZyAmJiAhZXhjbHVkZXMuaW5jbHVkZXModGl0bGUpKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aXRsZSBpbiByZWRpcmVjdEV4Y2x1ZGVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gZXhjbHVkZSBzcGVjaWFsIHRpdGxlc1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSB0aXRsZTtcblx0XHRcdFx0XHRcdFx0Ly8gb25seSBzZXQgZGVmYXVsdCBzdWZmaXhcblx0XHRcdFx0XHRcdFx0c2V0UmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCAne3vliKvlkI3ph43lrprlkJF9fScsIFNVRkZJWF9TRVRERUZBVUxUKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cdGZpbmRSZWRpcmVjdChwYWdlbmFtZSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGZyY0RlZmVycmVkcyA9IFtdO1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IHNlbGYudGFicy5jcmVhdGUuY29udDtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRjb25zdCAkY29udGVudCA9ICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQgPiBkaXYubXctcGFyc2VyLW91dHB1dCcpO1xuXHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGxldCB0aXRsZXM6IHN0cmluZ1tdID0gW107XG5cdFx0c2VsZi5sb2FkaW5nKGNvbnRhaW5lcik7XG5cdFx0Zm9yIChjb25zdCBjYWxsYmFjayBvZiBmaW5kUmVkaXJlY3RDYWxsYmFja3MpIHtcblx0XHRcdGNvbnN0IHJldCA9IGNhbGxiYWNrKHBhZ2VuYW1lLCAkY29udGVudCwgdGl0bGVzKTtcblx0XHRcdGlmICh0eXBlb2YgcmV0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSByZXQ7XG5cdFx0XHR9IGVsc2UgaWYgKCdkb25lJyBpbiByZXQpIHtcblx0XHRcdFx0Ly8gaXMgRGVmZXJyZWRcblx0XHRcdFx0ZnJjRGVmZXJyZWRzW2ZyY0RlZmVycmVkcy5sZW5ndGhdID0gcmV0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGl0bGVzID0gdW5pcXVlQXJyYXkoWy4uLnRpdGxlcywgLi4ucmV0XSk7IC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcmVtb3ZlIGFsbCBlbXB0eSB0aXRsZXNcblx0XHR0aXRsZXMgPSB0aXRsZXMubWFwKCh0aXRsZSkgPT4gdGl0bGUgfHwgJycpLmZpbHRlcihCb29sZWFuKTtcblx0XHRjb25zdCBvbkNsaWNrQ3JlYXRlID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxFbGVtZW50LCBldmVudDogSlF1ZXJ5LkV2ZW50KTogdm9pZCB7XG5cdFx0XHRjb25zdCBlbnRyeSA9ICQodGhpcykucGFyZW50cygncDpmaXJzdCcpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHNlbGYuY2xpY2tBY3Rpb24oZW50cnksIHNlbGYuY3JlYXRlKTtcblx0XHR9O1xuXHRcdC8vIGhhbmRsZXMgdGhlIGRlZmVycmVkIGNhbGxiYWNrc1xuXHRcdHZvaWQgJC53aGVuKC4uLmZyY0RlZmVycmVkcylcblx0XHRcdC50aGVuKCguLi5hcmdzKSA9PiB7XG5cdFx0XHRcdGZvciAoY29uc3QgcmV0IG9mIGFyZ3MpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHJldCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IHJldDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGl0bGVzID0gdW5pcXVlQXJyYXkoWy4uLnRpdGxlcywgLi4ucmV0XSk7IC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHNlbGYuZmluZFZhcmlhbnRzKHBhZ2VuYW1lLCB0aXRsZXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKChmdnRpdGxlcykgPT4ge1xuXHRcdFx0XHQvLyBidWlsZCBIVE1MXG5cdFx0XHRcdHNlbGYubG9hZGVkKGNvbnRhaW5lcik7XG5cdFx0XHRcdGZvciAoY29uc3QgdGl0bGUgb2YgZnZ0aXRsZXMpIHtcblx0XHRcdFx0XHRjb25zdCB1bHRpdGxlID0gdGl0bGUucmVwbGFjZSgnICcsICdfJyk7XG5cdFx0XHRcdFx0Y29uc3QgZW50cnkgPSAkKCc8cD4nKS5hcHBlbmRUbyhjb250YWluZXIpO1xuXHRcdFx0XHRcdHNlbGYuYnVpbGRTZWxlY3Rpb24oXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6IG13LnV0aWwuZ2V0VXJsKHVsdGl0bGUsIHthY3Rpb246ICdlZGl0JywgcmVkbGluazogJzEnfSksXG5cdFx0XHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRjbGFzc25hbWU6ICduZXcnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGhyZWY6ICcjY3JlYXRlLXJlZGlyZWN0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFiY3JlYXRldGl0bGUnKSxcblx0XHRcdFx0XHRcdFx0XHRjbGljazogb25DbGlja0NyZWF0ZSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHR1bHRpdGxlLFxuXHRcdFx0XHRcdFx0ZmFsc2Vcblx0XHRcdFx0XHQpLmFwcGVuZFRvKGVudHJ5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBkZXNjID0gJCgncC5kZXNjJywgY29udGFpbmVyKTtcblx0XHRcdFx0aWYgKGZ2dGl0bGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzZWxmLmFkZE1ldGhvZHMoZGVzYywgW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3NlbGVjdC1hbGwnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0YWxsJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFsbChjb250YWluZXIpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNzZWxlY3QtaW52ZXJzZScsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdzZWxlY3RpbnZlcnNlJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEludmVyc2UoY29udGFpbmVyKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjY3JlYXRlLXNlbGVjdGVkJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYmNyZWF0ZXRpdGxlJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFjdGlvbihjb250YWluZXIsIHNlbGYuY3JlYXRlKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlV2l0aChzZWxmLCBbZnZ0aXRsZXNdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdFdpdGgoc2VsZiwgW2Z2dGl0bGVzXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG5cdH0sXG59O1xuXG5leHBvcnQge1Rvb2xzUmVkaXJlY3QsIGZpbmRSZWRpcmVjdENhbGxiYWNrLCBmaW5kUmVkaXJlY3RCeVNlbGVjdG9yLCBzZXRSZWRpcmVjdFRleHRTdWZmaXh9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgVG9vbHNSZWRpcmVjdC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImNvbnN0IGZpeE5hbWVzcGFjZSA9ICh0aXRsZTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlSWRzLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgbnNQcmVmaXhlcyA9IFtdO1xuXHRsZXQgbnNDYW5vblByZWZpeDogc3RyaW5nO1xuXHRsZXQgbnNQcmVmaXhQYXR0ZXJuOiBSZWdFeHA7XG5cblx0Zm9yIChjb25zdCBbdGV4dCwgbnNpZF0gb2YgT2JqZWN0LmVudHJpZXMod2dOYW1lc3BhY2VJZHMpKSB7XG5cdFx0aWYgKG5zaWQgPT09IHdnTmFtZXNwYWNlTnVtYmVyICYmICEhdGV4dCkge1xuXHRcdFx0bnNQcmVmaXhlc1tuc1ByZWZpeGVzLmxlbmd0aF0gPSB0ZXh0O1xuXHRcdH1cblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCkge1xuXHRcdC8vIGFydGljbGVzXG5cdFx0bnNDYW5vblByZWZpeCA9ICcnO1xuXHRcdG5zUHJlZml4UGF0dGVybiA9IC9eLztcblx0fSBlbHNlIHtcblx0XHRuc0Nhbm9uUHJlZml4ID0gYCR7d2dQYWdlTmFtZS5zcGxpdCgnOicpWzBdfTpgO1xuXHRcdG5zUHJlZml4UGF0dGVybiA9IG5ldyBSZWdFeHAoYF4oJHtuc1ByZWZpeGVzLmpvaW4oJ3wnKX0pOmAsICdpJyk7XG5cdH1cblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHQvLyBkbyBub3RoaW5nIGlmIGl0J3MgYXJ0aWNsZXNcblx0XHRyZXR1cm4gdGl0bGU7XG5cdH0gZWxzZSBpZiAobnNQcmVmaXhQYXR0ZXJuLnRlc3QodGl0bGUpKSB7XG5cdFx0Ly8gY2Fub25pemUgdGhlIG5hbWVzcGFjZVxuXHRcdHJldHVybiB0aXRsZS5yZXBsYWNlKG5zUHJlZml4UGF0dGVybiwgbnNDYW5vblByZWZpeCk7XG5cdH1cblx0Ly8gZG9uJ3QgaGF2ZSBhIG5hbWVzcGFjZVxuXHRyZXR1cm4gbnNDYW5vblByZWZpeCArIHRpdGxlO1xufTtcblxuZXhwb3J0IHtmaXhOYW1lc3BhY2V9O1xuIiwgImltcG9ydCB0eXBlIHtNZXNzYWdlS2V5fSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IGdldE1lc3NhZ2UgPSAoa2V5OiBNZXNzYWdlS2V5IGV4dGVuZHMgYHRvb2xzcmVkaXJlY3QtJHtpbmZlciBQfWAgPyBQIDogbmV2ZXIsIC4uLmFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nID0+IHtcblx0Y29uc3QgZnVsbEtleTogc3RyaW5nID0gYHRvb2xzcmVkaXJlY3QtJHtrZXl9YDtcblx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdHJldHVybiBhcmdzLmxlbmd0aCA/IG13Lm1lc3NhZ2UoZnVsbEtleSwgLi4uYXJncykucGFyc2UoKSA6IG13Lm1lc3NhZ2UoZnVsbEtleSkucGxhaW4oKTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5cbmludGVyZmFjZSBUb29sc1JlZGlyZWN0Q29udHJvbGxlciB7XG5cdGF0dGFjaENvbnRhaW5lcnModmlld0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGNyZWF0ZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkO1xufVxuXG5sZXQgYXBwOiBWdWVBcHA8RWxlbWVudD4gfCB1bmRlZmluZWQ7XG5cbmNvbnN0IG1vdW50VG9vbHNSZWRpcmVjdCA9IChjb250cm9sbGVyOiBUb29sc1JlZGlyZWN0Q29udHJvbGxlciwgb25PcGVuOiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQocm9vdCk7XG5cdGFwcCA9IGNyZWF0ZUFwcChBcHAsIHtjb250cm9sbGVyLCBvcGVuOiBmYWxzZSwgb25PcGVufSk7XG5cdGFwcC5tb3VudChyb290KTtcbn07XG5cbmV4cG9ydCB7bW91bnRUb29sc1JlZGlyZWN0fTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhCdXR0b24sIENkeERpYWxvZ30gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge25leHRUaWNrLCByZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuaW1wb3J0IHtUb29sc1JlZGlyZWN0fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dldE1lc3NhZ2UnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0Y29udHJvbGxlcjogdHlwZW9mIFRvb2xzUmVkaXJlY3Q7XG5cdG9wZW46IGJvb2xlYW47XG5cdG9uT3BlbjogKCkgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IGlzT3BlbiA9IHJlZihwcm9wcy5vcGVuKTtcbmNvbnN0IGFjdGl2ZVRhYiA9IHJlZigndmlldycpO1xuY29uc3Qgdmlld0NvbnRhaW5lciA9IHJlZjxIVE1MRWxlbWVudD4oKTtcbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9IHJlZjxIVE1MRWxlbWVudD4oKTtcblxuY29uc3Qgb3BlbiA9ICgpID0+IHtcblx0aXNPcGVuLnZhbHVlID0gdHJ1ZTtcblx0cHJvcHMub25PcGVuKCk7XG59O1xuXG5jb25zdCBsb2FkVGFiID0gYXN5bmMgKHRhYjogc3RyaW5nLCByZWxvYWQgPSBmYWxzZSkgPT4ge1xuXHRhd2FpdCBuZXh0VGljaygpO1xuXHRpZiAoIXZpZXdDb250YWluZXIudmFsdWUgfHwgIWNyZWF0ZUNvbnRhaW5lci52YWx1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRwcm9wcy5jb250cm9sbGVyLmF0dGFjaENvbnRhaW5lcnModmlld0NvbnRhaW5lci52YWx1ZSwgY3JlYXRlQ29udGFpbmVyLnZhbHVlKTtcblx0aWYgKHRhYiA9PT0gJ3ZpZXcnKSB7XG5cdFx0cHJvcHMuY29udHJvbGxlci5sb2FkVmlldyhyZWxvYWQpO1xuXHR9IGVsc2Uge1xuXHRcdHByb3BzLmNvbnRyb2xsZXIubG9hZENyZWF0ZShyZWxvYWQpO1xuXHR9XG59O1xuXG53YXRjaChhY3RpdmVUYWIsICh0YWIpID0+IHtcblx0dm9pZCBsb2FkVGFiKHRhYik7XG59KTtcblxud2F0Y2goaXNPcGVuLCAob3BlbikgPT4ge1xuXHRpZiAob3Blbikge1xuXHRcdHZvaWQgbG9hZFRhYihhY3RpdmVUYWIudmFsdWUpO1xuXHR9XG59KTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJ0b29scy1yZWRpcmVjdC10cmlnZ2VyXCI+XG5cdFx0PGNkeC1idXR0b24gQGNsaWNrPVwib3BlblwiPnt7IGdldE1lc3NhZ2UoJ2J0bnRpdGxlJykgfX08L2NkeC1idXR0b24+XG5cdDwvZGl2PlxuXHQ8Y2R4LWRpYWxvZyB2LW1vZGVsOm9wZW49XCJpc09wZW5cIiA6dGl0bGU9XCJnZXRNZXNzYWdlKCdkbGd0aXRsZScpXCIgOnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCI+XG5cdFx0PGRpdiBjbGFzcz1cInRvb2xzLXJlZGlyZWN0LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPlxuXHRcdFx0PGNkeC1idXR0b25cblx0XHRcdFx0OndlaWdodD1cImFjdGl2ZVRhYiA9PT0gJ3ZpZXcnID8gJ3ByaW1hcnknIDogJ3F1aWV0J1wiXG5cdFx0XHRcdHJvbGU9XCJ0YWJcIlxuXHRcdFx0XHQ6YXJpYS1zZWxlY3RlZD1cImFjdGl2ZVRhYiA9PT0gJ3ZpZXcnXCJcblx0XHRcdFx0QGNsaWNrPVwiYWN0aXZlVGFiID0gJ3ZpZXcnXCJcblx0XHRcdD5cblx0XHRcdFx0e3sgZ2V0TWVzc2FnZSgndGFidmlld3RpdGxlJykgfX1cblx0XHRcdDwvY2R4LWJ1dHRvbj5cblx0XHRcdDxjZHgtYnV0dG9uXG5cdFx0XHRcdDp3ZWlnaHQ9XCJhY3RpdmVUYWIgPT09ICdjcmVhdGUnID8gJ3ByaW1hcnknIDogJ3F1aWV0J1wiXG5cdFx0XHRcdHJvbGU9XCJ0YWJcIlxuXHRcdFx0XHQ6YXJpYS1zZWxlY3RlZD1cImFjdGl2ZVRhYiA9PT0gJ2NyZWF0ZSdcIlxuXHRcdFx0XHRAY2xpY2s9XCJhY3RpdmVUYWIgPSAnY3JlYXRlJ1wiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7IGdldE1lc3NhZ2UoJ3RhYmNyZWF0ZXRpdGxlJykgfX1cblx0XHRcdDwvY2R4LWJ1dHRvbj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHR2LXNob3c9XCJhY3RpdmVUYWIgPT09ICd2aWV3J1wiXG5cdFx0XHRyZWY9XCJ2aWV3Q29udGFpbmVyXCJcblx0XHRcdGNsYXNzPVwiZGlhbG9nLXJlZGlyZWN0IHRhYi1yZWRpcmVjdFwiXG5cdFx0XHRyb2xlPVwidGFicGFuZWxcIlxuXHRcdD48L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHR2LXNob3c9XCJhY3RpdmVUYWIgPT09ICdjcmVhdGUnXCJcblx0XHRcdHJlZj1cImNyZWF0ZUNvbnRhaW5lclwiXG5cdFx0XHRjbGFzcz1cImRpYWxvZy1yZWRpcmVjdCB0YWItcmVkaXJlY3RcIlxuXHRcdFx0cm9sZT1cInRhYnBhbmVsXCJcblx0XHQ+PC9kaXY+XG5cdDwvY2R4LWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxuLnRvb2xzLXJlZGlyZWN0LXRyaWdnZXIge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4udG9vbHMtcmVkaXJlY3QtdGFicyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogNHB4O1xuXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZGlhbG9nLXJlZGlyZWN0IHtcblx0bWF4LWhlaWdodDogNjV2aDtcblx0b3ZlcmZsb3cteTogYXV0bztcblxuXHQubXctYWpheC1sb2FkZXIge1xuXHRcdHRvcDogMDtcblx0fVxuXG5cdGEge1xuXHRcdGNvbG9yOiAjMDY0NWFkO1xuXG5cdFx0Jjp2aXNpdGVkIHtcblx0XHRcdGNvbG9yOiAjMGIwMDgwO1xuXHRcdH1cblxuXHRcdCYubmV3IHtcblx0XHRcdGNvbG9yOiAjYzIwO1xuXG5cdFx0XHQmOnZpc2l0ZWQge1xuXHRcdFx0XHRjb2xvcjogI2E1NTg1ODtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCB2U2hvdyBhcyBfdlNob3csIHdpdGhEaXJlY3RpdmVzIGFzIF93aXRoRGlyZWN0aXZlcywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwidG9vbHMtcmVkaXJlY3QtdHJpZ2dlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7XG4gIGNsYXNzOiBcInRvb2xzLXJlZGlyZWN0LXRhYnNcIixcbiAgcm9sZTogXCJ0YWJsaXN0XCJcbn1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7XG4gIHJlZjogXCJ2aWV3Q29udGFpbmVyXCIsXG4gIGNsYXNzOiBcImRpYWxvZy1yZWRpcmVjdCB0YWItcmVkaXJlY3RcIixcbiAgcm9sZTogXCJ0YWJwYW5lbFwiXG59XG5jb25zdCBfaG9pc3RlZF80ID0ge1xuICByZWY6IFwiY3JlYXRlQ29udGFpbmVyXCIsXG4gIGNsYXNzOiBcImRpYWxvZy1yZWRpcmVjdCB0YWItcmVkaXJlY3RcIixcbiAgcm9sZTogXCJ0YWJwYW5lbFwiXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwgeyBvbkNsaWNrOiAkc2V0dXAub3BlbiB9LCB7XG4gICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ2J0bnRpdGxlJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgIF0pLFxuICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgfSlcbiAgICBdKSxcbiAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4RGlhbG9nXCJdLCB7XG4gICAgICBvcGVuOiAkc2V0dXAuaXNPcGVuLFxuICAgICAgXCJvblVwZGF0ZTpvcGVuXCI6IF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzT3BlbikgPSAkZXZlbnQpKSxcbiAgICAgIHRpdGxlOiAkc2V0dXAuZ2V0TWVzc2FnZSgnZGxndGl0bGUnKSxcbiAgICAgIFwidXNlLWNsb3NlLWJ1dHRvblwiOiB0cnVlXG4gICAgfSwge1xuICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICAgICAgICB3ZWlnaHQ6ICRzZXR1cC5hY3RpdmVUYWIgPT09ICd2aWV3JyA/ICdwcmltYXJ5JyA6ICdxdWlldCcsXG4gICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6ICRzZXR1cC5hY3RpdmVUYWIgPT09ICd2aWV3JyxcbiAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgkc2V0dXAuYWN0aXZlVGFiID0gJ3ZpZXcnKSlcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgndGFidmlld3RpdGxlJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wid2VpZ2h0XCIsIFwiYXJpYS1zZWxlY3RlZFwiXSksXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgICAgd2VpZ2h0OiAkc2V0dXAuYWN0aXZlVGFiID09PSAnY3JlYXRlJyA/ICdwcmltYXJ5JyA6ICdxdWlldCcsXG4gICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6ICRzZXR1cC5hY3RpdmVUYWIgPT09ICdjcmVhdGUnLFxuICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAkZXZlbnQgPT4gKCRzZXR1cC5hY3RpdmVUYWIgPSAnY3JlYXRlJykpXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ3RhYmNyZWF0ZXRpdGxlJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wid2VpZ2h0XCIsIFwiYXJpYS1zZWxlY3RlZFwiXSlcbiAgICAgICAgXSksXG4gICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzMsIG51bGwsIDUxMiAvKiBORUVEX1BBVENIICovKSwgW1xuICAgICAgICAgIFtfdlNob3csICRzZXR1cC5hY3RpdmVUYWIgPT09ICd2aWV3J11cbiAgICAgICAgXSksXG4gICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzQsIG51bGwsIDUxMiAvKiBORUVEX1BBVENIICovKSwgW1xuICAgICAgICAgIFtfdlNob3csICRzZXR1cC5hY3RpdmVUYWIgPT09ICdjcmVhdGUnXVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJ0aXRsZVwiXSlcbiAgXSwgNjQgLyogU1RBQkxFX0ZSQUdNRU5UICovKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxUb29sc1JlZGlyZWN0XFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFRvb2xzUmVkaXJlY3RcXFxcQXBwLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxUb29sc1JlZGlyZWN0XFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxUb29sc1JlZGlyZWN0XFxcXEFwcC52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB0eXBlIHtNZXNzYWdlS2V5fSBmcm9tICcuL3R5cGVzJztcblxuY29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3Qgc2V0TWVzc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IERFRkFVTFRfTUVTU0FHRVNfSEFOUyA9IHtcblx0XHQndG9vbHNyZWRpcmVjdC1idG50aXRsZSc6ICfph43lrprlkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWJ0bmRlc2MnOiAn5Yib5bu65ZKM566h55CG5q2k6aG16Z2i55qE6YeN5a6a5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1kbGd0aXRsZSc6ICfliJvlu7rlkoznrqHnkIbph43lrprlkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXJlZGlsb2FkaW5nJzogJ+aVsOaNruWKoOi9veS4re+8jOivt+eojeWAmeKApuKApicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtcmVkaWVkaXQnOiAn57yW6L6RJyxcblx0XHQndG9vbHNyZWRpcmVjdC1zZWxlY3RhbGwnOiAn5YWo6YCJJyxcblx0XHQndG9vbHNyZWRpcmVjdC1zZWxlY3RpbnZlcnNlJzogJ+WPjemAiScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld3RpdGxlJzogJ+afpeeciycsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2Rlc2MnOiAn5Lul5LiL5piv5oyH5ZCR5q2k6aG16Z2i55qE6YeN5a6a5ZCR6aG177yaJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bm90Zm91bmQnOiAn5rKh5pyJ5om+5Yiw5Lu75L2V5oyH5ZCR5q2k6aG16Z2i55qE6YeN5a6a5ZCR6aG144CCJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bXVsdGknOiAn5aSa6YeNJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3Zml4JzogJ+S/ruWkjScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZml4bG9hZGluZyc6ICfor7fnqI3lgJnvvIzmraPlnKjoh6rliqjkv67lpI3ph43lrprlkJHigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeHRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZml4c3VtbWFyeSc6ICfnvJbovpHlt6XlhbfvvJrkv67lpI3lpJrph43ph43lrprlkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZXRpdGxlJzogJ+WIm+W7uicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlZGVzYyc6ICfku6XkuIvmmK/lsJrmnKrliJvlu7rnmoTph43lrprlkJHpobXvvJonLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZW5vdGZvdW5kJzogJ+ayoeacieaJvuWIsOWPr+S7peWIm+W7uueahOmHjeWumuWQkemhteOAgicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlYWxsJzogJ+WFqOmDqOWIm+W7uicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlbG9hZGluZyc6ICfor7fnqI3lgJnvvIzmraPlnKjoh6rliqjliJvlu7rph43lrprlkJHigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRldGV4dC1jYXRlZ29yeSc6ICd7e+WIhuexu+mHjeWumuWQkXwkMX19Jyxcblx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGVzdW1tYXJ5JzogJ+e8lui+keW3peWFt++8muiHquWKqOWIm+W7uumHjeWumuWQkeWIsFtbJDFdXScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZXJyY3ljbGVyZWRpcmVjdCc6ICfml6Dms5Xoh6rliqjkv67lpI3vvJrlj5HnjrDlvqrnjq/ph43lrprlkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXJlZnJlc2gnOiAn5Yi35pawJyxcblx0fSBzYXRpc2ZpZXMgUmVjb3JkPE1lc3NhZ2VLZXksIHN0cmluZz47XG5cdGNvbnN0IERFRkFVTFRfTUVTU0FHRVNfSEFOVCA9IHtcblx0XHQndG9vbHNyZWRpcmVjdC1idG50aXRsZSc6ICfph43mlrDlsI7lkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWJ0bmRlc2MnOiAn5Ym15bu65ZKM566h55CG5q2k6aCB6Z2i55qE6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1kbGd0aXRsZSc6ICflibXlu7rlkoznrqHnkIbph43mlrDlsI7lkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXJlZGlsb2FkaW5nJzogJ+aVuOaTmuWKoOi8ieS4re+8jOiri+eojeWAmeKApuKApicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtcmVkaWVkaXQnOiAn57eo6LyvJyxcblx0XHQndG9vbHNyZWRpcmVjdC1zZWxlY3RhbGwnOiAn5YWo6YG4Jyxcblx0XHQndG9vbHNyZWRpcmVjdC1zZWxlY3RpbnZlcnNlJzogJ+WPjemBuCcsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld3RpdGxlJzogJ+afpeeciycsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2Rlc2MnOiAn5Lul5LiL5piv5oyH5ZCR5q2k6aCB6Z2i55qE6YeN5paw5bCO5ZCR6aCB77yaJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bm90Zm91bmQnOiAn5rKS5pyJ5om+5Yiw5Lu75L2V5oyH5ZCR5q2k6aCB6Z2i55qE6YeN5paw5bCO5ZCR6aCB44CCJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bXVsdGknOiAn5aSa6YeNJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3Zml4JzogJ+S/ruW+qScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZml4bG9hZGluZyc6ICfoq4vnqI3lgJnvvIzmraPlnKjoh6rli5Xkv67lvqnph43mlrDlsI7lkJHigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeHRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZml4c3VtbWFyeSc6ICfnt6jovK/lt6XlhbfvvJrkv67lvqnlpJrph43ph43mlrDlsI7lkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZXRpdGxlJzogJ+WJteW7uicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlZGVzYyc6ICfku6XkuIvmmK/lsJrmnKrlibXlu7rnmoTph43mlrDlsI7lkJHpoIHvvJonLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZW5vdGZvdW5kJzogJ+aykuacieaJvuWIsOWPr+S7peWJteW7uueahOmHjeaWsOWwjuWQkemggeOAgicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlYWxsJzogJ+WFqOmDqOWJteW7uicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlbG9hZGluZyc6ICfoq4vnqI3lgJnvvIzmraPlnKjoh6rli5XlibXlu7rph43mlrDlsI7lkJHigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRldGV4dC1jYXRlZ29yeSc6ICd7e+WIhuexu+mHjeWumuWQkXwkMX19Jyxcblx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGVzdW1tYXJ5JzogJ+e3qOi8r+W3peWFt++8muiHquWLleWJteW7uumHjeaWsOWwjuWQkeWIsFtbJDFdXScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZXJyY3ljbGVyZWRpcmVjdCc6ICfnhKHms5Xoh6rli5Xkv67lvqnvvJrnmbznj77lvqrnkrDph43mlrDlsI7lkJEnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXJlZnJlc2gnOiAn5Yi35pawJyxcblx0fSBzYXRpc2ZpZXMgUmVjb3JkPE1lc3NhZ2VLZXksIHN0cmluZz47XG5cblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdG13Lm1lc3NhZ2VzLnNldChERUZBVUxUX01FU1NBR0VTX0hBTlQpO1xuXHR9IGVsc2Uge1xuXHRcdG13Lm1lc3NhZ2VzLnNldChERUZBVUxUX01FU1NBR0VTX0hBTlMpO1xuXHR9XG59O1xuXG5leHBvcnQge3NldE1lc3NhZ2VzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx3QkFBQSxDQUFBO0FBQUFDLFNBQUFELHVCQUFBO0VBQUFFLHdCQUFBQSxNQUFBQTtFQUFBQyxzQkFBQUEsTUFBQUE7RUFBQUMsdUJBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBUCxxQkFBQTs7QUNDQyxJQUFBUSxTQUFVO0FBQ1YsSUFBQUMsVUFBVzs7QUNGWixJQUFNQyxnQkFBZ0I7QUFDdEIsSUFBTUMsaUJBQWlCO0FBQ3ZCLElBQU1DLG9CQUFvQjtBQUUxQixJQUFNQyxXQUFXLENBQUMsV0FBVyxXQUFXLFNBQVMsU0FBUyxTQUFTLFNBQVMsU0FBUyxPQUFPOztBQ0E1RixJQUFBQyxxQkFBeUNDLFFBQUEsaUJBQUE7O0FDSHpDLElBQUFDLG9CQUF3QkQsUUFBQSxpQkFBQTtBQUV4QixJQUFNRSxPQUFBLEdBQWNELGtCQUFBRSxXQUFBLGlCQUFBQyxPQUFtQ1YsT0FBTyxDQUFFOztBQ0hoRSxJQUFNVyxlQUFnQkMsV0FBMEI7QUFDL0MsUUFBTTtJQUFDQztJQUFnQkMsbUJBQUFDO0lBQW1CQyxZQUFBQztFQUFVLElBQUlDLEdB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QVMxSyxNQUFNO0VBQ2hCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJUb29sc1JlZGlyZWN0X2V4cG9ydHMiLCAiX19leHBvcnQiLCAiZmluZFJlZGlyZWN0QnlTZWxlY3RvciIsICJmaW5kUmVkaXJlY3RDYWxsYmFjayIsICJzZXRSZWRpcmVjdFRleHRTdWZmaXgiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgImFwaVRhZyIsICJ2ZXJzaW9uIiwgIlNVRkZJWF9BUFBFTkQiLCAiU1VGRklYX1JFUExBQ0UiLCAiU1VGRklYX1NFVERFRkFVTFQiLCAiVkFSSUFOVFMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiZml4TmFtZXNwYWNlIiwgInRpdGxlIiwgIndnTmFtZXNwYWNlSWRzIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnTmFtZXNwYWNlTnVtYmVyMiIsICJ3Z1BhZ2VOYW1lIiwgIndnUGFnZU5hbWUyIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAibnNQcmVmaXhlcyIsICJuc0Nhbm9uUHJlZml4IiwgIm5zUHJlZml4UGF0dGVybiIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibGVuZ3RoIiwgInRleHQiLCAibnNpZCIsICJzcGxpdCIsICJSZWdFeHAiLCAiam9pbiIsICJ0ZXN0IiwgInJlcGxhY2UiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYXJncyIsICJmdWxsS2V5IiwgIm1lc3NhZ2UiLCAicGFyc2UiLCAicGxhaW4iLCAiSVNfQ0FURUdPUlkiLCAiZmluZFJlZGlyZWN0Q2FsbGJhY2tzIiwgInBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4IiwgInJlZGlyZWN0RXhjbHVkZXMiLCAiY2FsbGJhY2siLCAiZ2VuZXJhdGVBcnJheSIsICJzZWxlY3RvciIsICIkIiwgIm1hcCIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJlcSIsICJ0cmltIiwgInN1ZmZpeCIsICJmbGFnIiwgImZsYWdfc2V0IiwgImZsYWdfYXBwZW5kIiwgIl9wYWdlV2l0aFJlZGlyZWN0VGV4dCIsICJUb29sc1JlZGlyZWN0IiwgInZhcmlhbnRzIiwgImluaXQiLCAiJGJvZHkiLCAib25PcGVuIiwgImJ1dHRvbiIsICJhZGRDbGFzcyIsICJhdHRyIiwgImNzcyIsICJhcHBlbmQiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiZmluZCIsICJhZnRlciIsICJhdHRhY2hDb250YWluZXJzIiwgInZpZXdDb250YWluZXIiLCAiY3JlYXRlQ29udGFpbmVyIiwgInRhYnMiLCAidmlldyIsICJjb250IiwgImxvYWRlZCIsICJjcmVhdGUiLCAiZml4IiwgInBhZ2VuYW1lcyIsICJzZWxmIiwgInJlbW92ZSIsICJsb2FkaW5nIiwgImJ1bGtFZGl0QnlSZWdleCIsICJ0aGVuIiwgInNldFRpbWVvdXQiLCAibG9hZFZpZXciLCAiYnVsa0VkaXQiLCAibG9hZENyZWF0ZSIsICJhZGRSZWRpcmVjdFRleHRTdWZmaXgiLCAiX3BhZ2VXaXRoUmVkaXJlY3RUZXh0MiIsICJ1bmlxdWVBcnJheSIsICJ0aXRsZXMiLCAic3VtbWFyeSIsICJmaWx0ZXIiLCAidiIsICJpIiwgImFyciIsICJpbmRleE9mIiwgInBvc3QiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicXVlcnkiLCAiZGVmZXJyZWRzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAicGFnZXMiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgInBvc3RXaXRoVG9rZW4iLCAidGFncyIsICJlcnIiLCAiZSIsICJmIiwgIndoZW4iLCAicmVnZXgiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAicGFnZSIsICJjb250ZW50IiwgInJldmlzaW9ucyIsICJzbG90cyIsICJuZXdDb250ZW50IiwgImJhc2V0aW1lc3RhbXAiLCAidGltZXN0YW1wIiwgImxvYWRUYWJDb250IiwgInRhYm5hbWUiLCAicmVsb2FkIiwgInRhYiIsICJodG1sIiwgIiRkZXNjIiwgImFwcGVuZFRvIiwgIiR0ZXh0IiwgImFwcGx5IiwgImZhaWwiLCAiYWx3YXlzIiwgImFkZE1ldGhvZHMiLCAiaHJlZiIsICJjbGljayIsICJjb250YWluZXIiLCAidG9Mb3dlckNhc2UiLCAicmVtb3ZlQ2xhc3MiLCAic2VsZWN0QWxsIiwgInNlbGVjdEludmVyc2UiLCAiZWFjaCIsICIkZWxlbWVudCIsICJzZWxlY3RBY3Rpb24iLCAiY2IiLCAicGFnZW5hbWUiLCAiZGF0YSIsICJjYWxsIiwgImNsaWNrQWN0aW9uIiwgImJ1aWxkTGluayIsICJjbGFzc25hbWUiLCAiYSIsICJ0YXJnZXQiLCAicmVsIiwgIiRwYXJlbnQiLCAibWV0aG9kcyIsICIkY29udGFpbmVyIiwgIm1ldGhvZEV4aXN0IiwgIkpTT04iLCAic3RyaW5naWZ5IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIm1ldGhvZCIsICJidWlsZFNlbGVjdGlvbiIsICJtYWluIiwgIm1ldGQiLCAibXQiLCAiZHNhYiIsICJzZWxlIiwgImxvYWRSZWRpcmVjdCIsICJmaW5kUmVkaXJlY3QiLCAiZGVlcCIsICJkZWZlcnJlZCIsICJEZWZlcnJlZCIsICJ0b3AiLCAib25DbGlja0ZpeCIsICJlbnRyeSIsICJwYXJlbnRzIiwgImZpcnN0IiwgInJkbGltaXQiLCAiaGFzX3JlZGlyZWN0IiwgImRlc2MiLCAibWF4aW11bVJlZGlyZWN0RGVwdGgiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAicmVkaXJlY3RzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInJkdGl0bGUiLCAidWx0aXRsZSIsICJ1dGlsIiwgImdldFVybCIsICJpc0N5Y2xlUmVkaXJlY3QiLCAicmVkaXJlY3QiLCAicmVzb2x2ZVdpdGgiLCAicmVqZWN0V2l0aCIsICJwcm9taXNlIiwgImZpbmRWYXJpYW50cyIsICJzdWZmaXhSZWciLCAicmV0VGl0bGVzIiwgIl9pMiIsICJfVkFSSUFOVFMiLCAidmFyaWFudCIsICJ4aHIiLCAidXNlbGFuZyIsICJkaXNwbGF5dGl0bGUiLCAic3VmZml4ZXMiLCAiX2kzIiwgIl9hcmdzIiwgInN1ZmZpeEFyciIsICJleGVjIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgIm1vZGlmaWVkVGl0bGUiLCAiZmluZE5vdEV4aXN0cyIsICJleGNsdWRlcyIsICJhbGx0aXRsZXMiLCAiX2k0IiwgIl9WQVJJQU5UUzIiLCAiY29udGVudG1vZGVsIiwgIl9pNSIsICJfYXJnczIiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAibWlzc2luZyIsICJpbmNsdWRlcyIsICJmcmNEZWZlcnJlZHMiLCAiJGNvbnRlbnQiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAicmV0IiwgIkJvb2xlYW4iLCAib25DbGlja0NyZWF0ZSIsICJfaTYiLCAiX2FyZ3MzIiwgImZ2dGl0bGVzIiwgIl9pdGVyYXRvcjAiLCAiX3N0ZXAwIiwgInJlZGxpbmsiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImltcG9ydF92dWU0IiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfdnVlMiIsICJwcm9wcyIsICJfX3Byb3BzIiwgImlzT3BlbiIsICJyZWYiLCAib3BlbiIsICJhY3RpdmVUYWIiLCAibG9hZFRhYiIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIm5leHRUaWNrIiwgImNvbnRyb2xsZXIiLCAiX3giLCAiYXJndW1lbnRzIiwgIndhdGNoIiwgIm9wZW4yIiwgImltcG9ydF92dWUzIiwgIl9ob2lzdGVkXzEiLCAiY2xhc3MiLCAiX2hvaXN0ZWRfMiIsICJyb2xlIiwgIl9ob2lzdGVkXzMiLCAiX2hvaXN0ZWRfNCIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgIkZyYWdtZW50IiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJjcmVhdGVWTm9kZSIsICJvbkNsaWNrIiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJjcmVhdGVUZXh0Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgIl8iLCAiJGV2ZW50IiwgIndlaWdodCIsICJ3aXRoRGlyZWN0aXZlcyIsICJ2U2hvdyIsICJBcHBfZGVmYXVsdCIsICJfX2ZpbGUiLCAiQXBwX2RlZmF1bHQyIiwgImFwcCIsICJtb3VudFRvb2xzUmVkaXJlY3QiLCAicm9vdCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImJvZHkiLCAiY3JlYXRlQXBwIiwgIm1vdW50IiwgIndnVXNlckxhbmd1YWdlIiwgInNldE1lc3NhZ2VzIiwgIkRFRkFVTFRfTUVTU0FHRVNfSEFOUyIsICJERUZBVUxUX01FU1NBR0VTX0hBTlQiLCAibWVzc2FnZXMiLCAic2V0IiwgImdldEJvZHkiLCAidHJpZ2dlciIsICJxdWVyeVNlbGVjdG9yIl0KfQo=
