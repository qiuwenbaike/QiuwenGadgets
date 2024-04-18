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
window.toolsRedirect = {
  findRedirectCallback,
  findRedirectBySelector,
  setRedirectTextSuffix
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
      var _iterator = _createForOfIteratorHelper(query.pages), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const {
            title
          } = _step.value;
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
        _iterator.e(err);
      } finally {
        _iterator.f();
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
      var _iterator2 = _createForOfIteratorHelper(query.pages), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const page = _step2.value;
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
        _iterator2.e(err);
      } finally {
        _iterator2.f();
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
    var _iterator3 = _createForOfIteratorHelper(methods), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const method = _step3.value;
        if (!methodExist(method)) {
          self.buildLink(method).appendTo($container);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
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
      var _iterator4 = _createForOfIteratorHelper(query.pages), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          const page = _step4.value;
          if (page.redirects) {
            const {
              redirects
            } = page;
            var _iterator5 = _createForOfIteratorHelper(redirects), _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                const {
                  title
                } = _step5.value;
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
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          } else {
            has_redirect = false;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
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
      var _iterator6 = _createForOfIteratorHelper(new Set(suffixes)), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          const suffix = _step6.value;
          retTitles = [...retTitles, ...titles.map((title) => {
            const modifiedTitle = fixNamespace(title);
            return suffixReg.test(modifiedTitle) ? modifiedTitle : modifiedTitle + suffix;
          })];
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
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
        var _iterator7 = _createForOfIteratorHelper(query.pages), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            const page = _step7.value;
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
          _iterator7.e(err);
        } finally {
          _iterator7.f();
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
    var _iterator8 = _createForOfIteratorHelper(findRedirectCallbacks), _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
        const callback = _step8.value;
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
      _iterator8.e(err);
    } finally {
      _iterator8.f();
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
      var _iterator9 = _createForOfIteratorHelper(fvtitles), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          const title = _step9.value;
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
        _iterator9.e(err);
      } finally {
        _iterator9.f();
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
    var _iterator10 = _createForOfIteratorHelper($content.find('> p > [lang="la"], > p > i')), _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
        var _previousNode$textCon, _previousNode$textCon2;
        const element = _step10.value;
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
      _iterator10.e(err);
    } finally {
      _iterator10.f();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3Qvb3B0aW9ucy5qc29uIiwgInNyYy9Ub29sc1JlZGlyZWN0L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9jb3JlLmpzIiwgInNyYy9Ub29sc1JlZGlyZWN0L21vZHVsZXMvdXRpbC9nZXRNZXNzYWdlLnRzIiwgInNyYy9Ub29sc1JlZGlyZWN0L1Rvb2xzUmVkaXJlY3QudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL2Jpby1sYXRpbi1uYW1lcy50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL29wdC1ib2xkcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImFwaVRhZ1wiOiBcIlRvb2xzUmVkaXJlY3RcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJjb25zdCBTVUZGSVhfQVBQRU5EID0gMDtcbmNvbnN0IFNVRkZJWF9SRVBMQUNFID0gMTtcbmNvbnN0IFNVRkZJWF9TRVRERUZBVUxUID0gMjtcblxuY29uc3QgVkFSSUFOVFMgPSBbJ3poLWhhbnMnLCAnemgtaGFudCcsICd6aC1jbicsICd6aC1oaycsICd6aC1tbycsICd6aC1zZycsICd6aC1teScsICd6aC10dyddO1xuXG5leHBvcnQge1NVRkZJWF9BUFBFTkQsIFNVRkZJWF9SRVBMQUNFLCBTVUZGSVhfU0VUREVGQVVMVCwgVkFSSUFOVFN9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgVG9vbHNSZWRpcmVjdC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1NVRkZJWF9BUFBFTkQsIFNVRkZJWF9SRVBMQUNFLCBTVUZGSVhfU0VUREVGQVVMVCwgVkFSSUFOVFN9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi91dGlsL2dldE1lc3NhZ2UnO1xuXG5jb25zdCB7d2dOYW1lc3BhY2VJZHMsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IElTX0NBVEVHT1JZID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0O1xuXG5sZXQgZmluZFJlZGlyZWN0Q2FsbGJhY2tzID0gW107XG5jb25zdCBwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeCA9IHt9O1xuY29uc3QgcmVkaXJlY3RFeGNsdWRlcyA9IHt9O1xuY29uc3QgbnNQcmVmaXhlcyA9IFtdO1xubGV0IG5zQ2Fub25QcmVmaXgsIG5zUHJlZml4UGF0dGVybjtcblxuZm9yIChjb25zdCBbdGV4dCwgbnNpZF0gb2YgT2JqZWN0LmVudHJpZXMod2dOYW1lc3BhY2VJZHMpKSB7XG5cdGlmIChuc2lkID09PSB3Z05hbWVzcGFjZU51bWJlciAmJiAhIXRleHQpIHtcblx0XHRuc1ByZWZpeGVzW25zUHJlZml4ZXMubGVuZ3RoXSA9IHRleHQ7XG5cdH1cbn1cblxuaWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdC8vIGFydGljbGVzXG5cdG5zQ2Fub25QcmVmaXggPSAnJztcblx0bnNQcmVmaXhQYXR0ZXJuID0gL14vO1xufSBlbHNlIHtcblx0bnNDYW5vblByZWZpeCA9IGAke3dnUGFnZU5hbWUuc3BsaXQoJzonKVswXX06YDtcblx0bnNQcmVmaXhQYXR0ZXJuID0gbmV3IFJlZ0V4cChgXigke25zUHJlZml4ZXMuam9pbignfCcpfSk6YCwgJ2knKTtcbn1cblxuY29uc3QgZml4TmFtZXNwYWNlID0gKHRpdGxlKSA9PiB7XG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCkge1xuXHRcdC8vIGRvIG5vdGhpbmcgaWYgaXQncyBhcnRpY2xlc1xuXHRcdHJldHVybiB0aXRsZTtcblx0fSBlbHNlIGlmIChuc1ByZWZpeFBhdHRlcm4udGVzdCh0aXRsZSkpIHtcblx0XHQvLyBjYW5vbml6ZSB0aGUgbmFtZXNwYWNlXG5cdFx0cmV0dXJuIHRpdGxlLnJlcGxhY2UobnNQcmVmaXhQYXR0ZXJuLCBuc0Nhbm9uUHJlZml4KTtcblx0fVxuXHQvLyBkb24ndCBoYXZlIGEgbmFtZXNwYWNlXG5cdHJldHVybiBuc0Nhbm9uUHJlZml4ICsgdGl0bGU7XG59O1xuXG4vKipcbiAqIEFkZCBuZXcgY3VzdG9tIGNhbGxiYWNrIGZvciBmaW5kaW5nIG5ldyBwb3RlbnRpYWwgcmVkaXJlY3QgdGl0bGVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIChwYWdlbmFtZSwgJGNvbnRlbnQsIHRpdGxlcykgPT4gdGl0bGUgbGlzdFxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gYXJnc1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5jb25zdCBmaW5kUmVkaXJlY3RDYWxsYmFjayA9IGZ1bmN0aW9uIChjYWxsYmFjaywgLi4uYXJncykge1xuXHRpZiAoY2FsbGJhY2spIHtcblx0XHRmaW5kUmVkaXJlY3RDYWxsYmFja3NbZmluZFJlZGlyZWN0Q2FsbGJhY2tzLmxlbmd0aF0gPSBjYWxsYmFjaztcblx0fSBlbHNlIHtcblx0XHRmaW5kUmVkaXJlY3RDYWxsYmFja3MgPSBnZW5lcmF0ZUFycmF5KGZpbmRSZWRpcmVjdENhbGxiYWNrcywgY2FsbGJhY2ssIC4uLmFyZ3MpO1xuXHR9XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBGaW5kIG5ldyBwb3RlbnRpYWwgcmVkaXJlY3QgdGl0bGVzIHRocm91Z2ggc2VsZWN0b3IocylcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuY29uc3QgZmluZFJlZGlyZWN0QnlTZWxlY3RvciA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXHQvKiBBIHNob3J0Y3V0IHRvIGFkZCBDU1Mgc2VsZWN0b3JzIGFzIHJ1bGUgdG8gZmluZCBuZXcgcG90ZW50aWFsIHJlZGlyZWN0IHRpdGxlcy4gKi9cblx0ZmluZFJlZGlyZWN0Q2FsbGJhY2tzW2ZpbmRSZWRpcmVjdENhbGxiYWNrcy5sZW5ndGhdID0gKCkgPT4ge1xuXHRcdHJldHVybiAkKHNlbGVjdG9yKS5tYXAoKF9pbmRleCwgZWxlbWVudCkgPT4ge1xuXHRcdFx0cmV0dXJuICQoZWxlbWVudCkuZXEoMCkudGV4dCgpLnRyaW0oKSB8fCBudWxsO1xuXHRcdH0pO1xuXHR9O1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbmNvbnN0IHNldFJlZGlyZWN0VGV4dFN1ZmZpeCA9ICh0aXRsZSwgc3VmZml4LCBmbGFnKSA9PiB7XG5cdGxldCBmbGFnX3NldCA9IGZhbHNlO1xuXHRsZXQgZmxhZ19hcHBlbmQgPSBmYWxzZTtcblx0ZmxhZyB8fD0gU1VGRklYX0FQUEVORDsgLy8gZGVmYXVsdCBhcHBlbmRcblx0ZmxhZ19zZXQgPSBmbGFnID09PSBTVUZGSVhfUkVQTEFDRTtcblx0dGl0bGUgPSBmaXhOYW1lc3BhY2UodGl0bGUpO1xuXHRpZiAodGl0bGUgaW4gcGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXgpIHtcblx0XHRmbGFnX2FwcGVuZCA9IGZsYWcgPT09IFNVRkZJWF9BUFBFTkQ7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaWYgbm90IGV4aXN0LCBldmVyeSBmbGFnIGNhbiBzZXRcblx0XHRmbGFnX3NldCA9IHRydWU7XG5cdH1cblx0aWYgKGZsYWdfc2V0KSB7XG5cdFx0cGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXhbdGl0bGVdID0gZ2VuZXJhdGVBcnJheShzdWZmaXgpO1xuXHR9IGVsc2UgaWYgKGZsYWdfYXBwZW5kKSB7XG5cdFx0cGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXhbdGl0bGVdID0gZ2VuZXJhdGVBcnJheShwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV0sIHN1ZmZpeCk7XG5cdH1cbn07XG5cbi8qIGV4cG9ydCBnbG9iYWwgb2JqZWN0ICovXG53aW5kb3cudG9vbHNSZWRpcmVjdCA9IHtcblx0ZmluZFJlZGlyZWN0Q2FsbGJhY2ssXG5cdGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IsXG5cdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCxcbn07XG5cbmNvbnN0IFRvb2xzUmVkaXJlY3QgPSB7XG5cdHRhYnNlbGVtOiBudWxsLFxuXHR0YWdzZWxlbTogbnVsbCxcblx0dmFyaWFudHM6IFZBUklBTlRTLFxuXHRpbml0KCRib2R5KSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgYnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ213LWxpc3QtaXRlbSBjb2xsYXBzaWJsZSB2ZWN0b3ItdGFiLW5vaWNvbicpXG5cdFx0XHQuYXR0cignaWQnLCAnY2EtcmVkaXJlY3QnKVxuXHRcdFx0LmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKVxuXHRcdFx0LmFwcGVuZCgkKCc8YT4nKS5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ2J0bmRlc2MnKSkudGV4dChnZXRNZXNzYWdlKCdidG50aXRsZScpKSk7XG5cdFx0YnV0dG9uLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHNlbGYuZGlhbG9nKCk7XG5cdFx0fSk7XG5cdFx0JGJvZHkuZmluZCgnbGkjY2EtaGlzdG9yeScpLmFmdGVyKGJ1dHRvbik7XG5cdH0sXG5cdGRpYWxvZygpIHtcblx0XHRjb25zdCBkaWFsb2cgPSAkKCc8ZGl2PicpXG5cdFx0XHQuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKCdkbGd0aXRsZScpKVxuXHRcdFx0LmFkZENsYXNzKCdkaWFsb2ctcmVkaXJlY3QnKVxuXHRcdFx0LmRpYWxvZyh7XG5cdFx0XHRcdGJnaWZyYW1lOiB0cnVlLFxuXHRcdFx0XHRyZXNpemFibGU6IGZhbHNlLFxuXHRcdFx0XHRtb2RhbDogdHJ1ZSxcblx0XHRcdFx0d2lkdGg6IE1hdGgucm91bmQoJCh3aW5kb3cpLndpZHRoKCkgKiAwLjgpLFxuXHRcdFx0XHRwb3NpdGlvbjogJ2NlbnRlcicsXG5cdFx0XHR9KTtcblx0XHRkaWFsb2cuY3NzKCdtYXgtaGVpZ2h0JywgYCR7TWF0aC5yb3VuZCgkKHdpbmRvdykuaGVpZ2h0KCkgKiAwLjgpfXB4YCk7XG5cdFx0dGhpcy50YWJzZWxlbSA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ3RhYi1yZWRpcmVjdCcpLmFwcGVuZFRvKGRpYWxvZyk7XG5cdFx0dGhpcy50YWdzZWxlbSA9ICQoJzx1bD4nKS5hcHBlbmRUbyh0aGlzLnRhYnNlbGVtKTtcblx0XHR0aGlzLmFkZFRhYnMoKTtcblx0XHR0aGlzLnRhYnNlbGVtLnRhYnMoKTtcblx0fSxcblx0YWRkVGFicygpIHtcblx0XHRmb3IgKGNvbnN0IGtuYW1lIGluIHRoaXMudGFicykge1xuXHRcdFx0aWYgKE9iamVjdC5oYXNPd24odGhpcy50YWJzLCBrbmFtZSkpIHtcblx0XHRcdFx0aWYgKHRoaXMudGFic1trbmFtZV0gPT09IG51bGwpIHtcblx0XHRcdFx0XHR0aGlzLnRhYnNba25hbWVdID0gdGhpc1tgX2luaXRUYWIke2tuYW1lWzBdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7a25hbWUuc2xpY2UoMSl9YF0oKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB0YWIgPSB0aGlzLnRhYnNba25hbWVdO1xuXHRcdFx0XHR0aGlzLnRhZ3NlbGVtLmFwcGVuZCh0YWIudGFnKTtcblx0XHRcdFx0dGhpcy50YWJzZWxlbS5hcHBlbmQodGFiLmNvbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBkZWZhdWx0IHRhYiwgYXV0b2xvYWQgd2hlbiBkaWFsb2cgaW5pdGlhdGVcblx0XHR0aGlzLmxvYWRWaWV3KCk7XG5cdH0sXG5cdGNyZWF0ZVRhYih0YWJuYW1lLCB0YWJ0aXRsZSwgb25DbGljaykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IHRhZyA9ICQoJzxsaT4nKS5hcHBlbmQoJCgnPGE+JykuYXR0cignaHJlZicsIGAjdGFiLSR7dGFibmFtZX1gKS50ZXh0KHRhYnRpdGxlKSk7XG5cdFx0Y29uc3QgY29udCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCBgdGFiLSR7dGFibmFtZX1gKTtcblx0XHQkKCdhJywgdGFnKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRvbkNsaWNrLmNhbGwoc2VsZik7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRhZyxcblx0XHRcdGNvbnQsXG5cdFx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdH07XG5cdH0sXG5cdF9pbml0VGFiVmlldygpIHtcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVUYWIoJ3ZpZXcnLCBnZXRNZXNzYWdlKCd0YWJ2aWV3dGl0bGUnKSwgdGhpcy5sb2FkVmlldyk7XG5cdH0sXG5cdF9pbml0VGFiQ3JlYXRlKCkge1xuXHRcdHJldHVybiB0aGlzLmNyZWF0ZVRhYignY3JlYXRlJywgZ2V0TWVzc2FnZSgndGFiY3JlYXRldGl0bGUnKSwgdGhpcy5sb2FkQ3JlYXRlKTtcblx0fSxcblx0dGFiczoge1xuXHRcdHZpZXc6IG51bGwsXG5cdFx0Y3JlYXRlOiBudWxsLFxuXHR9LFxuXHRmaXgocGFnZW5hbWVzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0JCgncC5kZXNjJywgc2VsZi50YWJzLnZpZXcuY29udCkudGV4dChnZXRNZXNzYWdlKCdmaXhsb2FkaW5nJykpO1xuXHRcdCQoJ3BbY2xhc3MhPWRlc2NdJywgc2VsZi50YWJzLnZpZXcuY29udCkucmVtb3ZlKCk7XG5cdFx0c2VsZi5sb2FkaW5nKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdHZvaWQgc2VsZlxuXHRcdFx0LmJ1bGtFZGl0QnlSZWdleChwYWdlbmFtZXMsIC9cXHMqXFxbXFxbLio/XFxdXFxdLywgYCBbWyR7d2dQYWdlTmFtZX1dXWAsIGdldE1lc3NhZ2UoJ2ZpeHN1bW1hcnknKSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0Ly8gZGVsYXkgbG9hZCBiZWZvcmUgdGhlIGFzeW5jaHJvbm91cyB0YXNrcyBvbiBzZXJ2ZXIgZmluaXNoZWRcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5sb2FkZWQoc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0XHRcdFx0c2VsZi5sb2FkVmlldyh0cnVlKTtcblx0XHRcdFx0fSwgMzAwMCk7XG5cdFx0XHR9KTtcblx0fSxcblx0Y3JlYXRlKHBhZ2VuYW1lcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdCQoJ3AuZGVzYycsIHNlbGYudGFicy5jcmVhdGUuY29udCkudGV4dChnZXRNZXNzYWdlKCdjcmVhdGVsb2FkaW5nJykpO1xuXHRcdCQoJ3BbY2xhc3MhPWRlc2NdJywgc2VsZi50YWJzLmNyZWF0ZS5jb250KS5yZW1vdmUoKTtcblx0XHRzZWxmLmxvYWRpbmcoc2VsZi50YWJzLmNyZWF0ZS5jb250KTtcblx0XHR2b2lkIHNlbGZcblx0XHRcdC5idWxrRWRpdChcblx0XHRcdFx0cGFnZW5hbWVzLFxuXHRcdFx0XHRnZXRNZXNzYWdlKCdjcmVhdGV0ZXh0JykucmVwbGFjZSgnJDEnLCB3Z1BhZ2VOYW1lKSxcblx0XHRcdFx0Z2V0TWVzc2FnZSgnY3JlYXRlc3VtbWFyeScpLnJlcGxhY2UoJyQxJywgd2dQYWdlTmFtZSlcblx0XHRcdClcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0Ly8gZGVsYXkgbG9hZCBiZWZvcmUgdGhlIGFzeW5jaHJvbm91cyB0YXNrcyBvbiBzZXJ2ZXIgZmluaXNoZWRcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5sb2FkZWQoc2VsZi50YWJzLmNyZWF0ZS5jb250KTtcblx0XHRcdFx0XHRzZWxmLnRhYnMudmlldy5sb2FkZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRzZWxmLmxvYWRDcmVhdGUodHJ1ZSk7XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9KTtcblx0fSxcblx0YWRkUmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCB0ZXh0KSB7XG5cdFx0aWYgKHRpdGxlIGluIHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4KSB7XG5cdFx0XHR0ZXh0ICs9IGBcXG4ke1suLi5uZXcgU2V0KHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSldLmpvaW4oJ1xcbicpfWA7XG5cdFx0fVxuXHRcdHJldHVybiB0ZXh0O1xuXHR9LFxuXHRidWxrRWRpdCh0aXRsZXMsIHRleHQsIHN1bW1hcnkpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHR0aXRsZXMgPSB0aXRsZXMuZmlsdGVyKCh2LCBpLCBhcnIpID0+IHtcblx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2KSA9PT0gaTtcblx0XHR9KTtcblx0XHR0aXRsZXMgPSB0aXRsZXMuam9pbignfCcpO1xuXHRcdHJldHVybiBhcGlcblx0XHRcdC5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdHRpdGxlcyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGV9IG9mIHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWRzW2RlZmVycmVkcy5sZW5ndGhdID0gYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHR0ZXh0OiBzZWxmLmFkZFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgdGV4dCksXG5cdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0dGFnczogT1BUSU9OUy5hcGlUYWcsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGJ1bGtFZGl0QnlSZWdleCh0aXRsZXMsIHJlZ2V4LCB0ZXh0LCBzdW1tYXJ5KSB7XG5cdFx0dGl0bGVzID0gdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YodikgPT09IGk7XG5cdFx0fSk7XG5cdFx0dGl0bGVzID0gdGl0bGVzLmpvaW4oJ3wnKTtcblx0XHRyZXR1cm4gYXBpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRcdHRpdGxlcyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0Y29uc3Qge2NvbnRlbnR9ID0gcGFnZS5yZXZpc2lvbnNbMF0uc2xvdHNbJ21haW4nXTtcblx0XHRcdFx0XHRjb25zdCBuZXdDb250ZW50ID0gY29udGVudC5yZXBsYWNlKHJlZ2V4LCB0ZXh0KTtcblx0XHRcdFx0XHRkZWZlcnJlZHNbZGVmZXJyZWRzLmxlbmd0aF0gPSBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0XHR0aXRsZTogcGFnZS50aXRsZSxcblx0XHRcdFx0XHRcdHRleHQ6IG5ld0NvbnRlbnQsXG5cdFx0XHRcdFx0XHR0YWdzOiBPUFRJT05TLmFwaVRhZyxcblx0XHRcdFx0XHRcdGJhc2V0aW1lc3RhbXA6IHBhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcCxcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGxvYWRUYWJDb250KHRhYm5hbWUsIGNhbGxiYWNrLCByZWxvYWQpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCB0YWIgPSBzZWxmLnRhYnNbdGFibmFtZV07XG5cdFx0aWYgKHJlbG9hZCkge1xuXHRcdFx0dGFiLmxvYWRlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIXRhYi5sb2FkZWQpIHtcblx0XHRcdHRhYi5jb250Lmh0bWwoJycpO1xuXHRcdFx0Ly9cblx0XHRcdGNvbnN0ICRkZXNjID0gJCgnPHA+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdkZXNjJylcblx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZGVzYy10ZXh0JykudGV4dChnZXRNZXNzYWdlKCdyZWRpbG9hZGluZycpKSlcblx0XHRcdFx0LmFwcGVuZFRvKHRhYi5jb250KTtcblx0XHRcdGNvbnN0ICR0ZXh0ID0gJGRlc2MuZmluZCgnPiAuZGVzYy10ZXh0Jyk7XG5cdFx0XHRjYWxsYmFja1xuXHRcdFx0XHQuYXBwbHkoc2VsZilcblx0XHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBtZXNzYWdlcy5qc1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHQkdGV4dC50ZXh0KGdldE1lc3NhZ2UoYHRhYiR7dGFibmFtZX1kZXNjYCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuZmFpbCgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLmpzXG5cdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdCR0ZXh0LnRleHQoZ2V0TWVzc2FnZShgdGFiJHt0YWJuYW1lfW5vdGZvdW5kYCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmFkZE1ldGhvZHMoJGRlc2MsIFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNyZWZyZXNoJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3JlZnJlc2gnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYubG9hZFRhYkNvbnQodGFibmFtZSwgY2FsbGJhY2ssIHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR0YWIubG9hZGVkID0gdHJ1ZTtcblx0XHR9XG5cdH0sXG5cdGxvYWRpbmcoY29udGFpbmVyKSB7XG5cdFx0aWYgKGNvbnRhaW5lci5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKSA9PT0gJ3NwYW4nKSB7XG5cdFx0XHRjb250YWluZXIuYWRkQ2xhc3MoJ213LWFqYXgtbG9hZGVyJyk7XG5cdFx0fSBlbHNlIGlmICgkKCdzcGFuLm13LWFqYXgtbG9hZGVyJywgY29udGFpbmVyKS5sZW5ndGggPT09IDApIHtcblx0XHRcdCQoJzxzcGFuPicpLmFkZENsYXNzKCdtdy1hamF4LWxvYWRlcicpLmFwcGVuZFRvKGNvbnRhaW5lcik7XG5cdFx0fVxuXHR9LFxuXHRsb2FkZWQoY29udGFpbmVyKSB7XG5cdFx0aWYgKGNvbnRhaW5lci5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKSA9PT0gJ3NwYW4nKSB7XG5cdFx0XHRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ213LWFqYXgtbG9hZGVyJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoJ3NwYW4ubXctYWpheC1sb2FkZXInLCBjb250YWluZXIpLnJlbW92ZSgpO1xuXHRcdH1cblx0fSxcblx0c2VsZWN0QWxsKGNvbnQpIHtcblx0XHQkKCdpbnB1dFt0eXBlPWNoZWNrYm94XTpub3QoOmRpc2FibGVkKScsIGNvbnQpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcblx0fSxcblx0c2VsZWN0SW52ZXJzZShjb250KSB7XG5cdFx0JCgnaW5wdXRbdHlwZT1jaGVja2JveF06bm90KDpkaXNhYmxlZCknLCBjb250KS5lYWNoKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcblx0XHRcdCRlbGVtZW50LnByb3AoJ2NoZWNrZWQnLCAhJGVsZW1lbnQucHJvcCgnY2hlY2tlZCcpKTtcblx0XHR9KTtcblx0fSxcblx0c2VsZWN0QWN0aW9uKGNvbnQsIGNiKSB7XG5cdFx0Y29uc3QgcGFnZW5hbWVzID0gW107XG5cdFx0JCgnaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCcsIGNvbnQpLmVhY2goKF9pbmRleCwgcGFnZW5hbWUpID0+IHtcblx0XHRcdHBhZ2VuYW1lc1twYWdlbmFtZXMubGVuZ3RoXSA9ICQocGFnZW5hbWUpLmRhdGEoJ3BhZ2UtdGl0bGUnKTtcblx0XHR9KTtcblx0XHRpZiAocGFnZW5hbWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNiLmNhbGwodGhpcywgcGFnZW5hbWVzKTtcblx0XHR9XG5cdH0sXG5cdGNsaWNrQWN0aW9uKGNvbnQsIGNiKSB7XG5cdFx0Y29uc3QgcGFnZW5hbWUgPSAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCBjb250KS5kYXRhKCdwYWdlLXRpdGxlJyk7XG5cdFx0Y2IuY2FsbCh0aGlzLCBbcGFnZW5hbWVdKTtcblx0fSxcblx0YnVpbGRMaW5rKHt0aXRsZSwgaHJlZiwgY2xpY2ssIGNsYXNzbmFtZX0pIHtcblx0XHRjb25zdCBhID0gJCgnPGE+Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdGhyZWYsXG5cdFx0XHRcdHRhcmdldDogJ19ibGFuaycsXG5cdFx0XHRcdHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInLFxuXHRcdFx0fSlcblx0XHRcdC50ZXh0KHRpdGxlKTtcblx0XHRpZiAoY2xpY2spIHtcblx0XHRcdGEub24oJ2NsaWNrJywgY2xpY2spO1xuXHRcdH1cblx0XHRpZiAoY2xhc3NuYW1lKSB7XG5cdFx0XHRhLmFkZENsYXNzKGNsYXNzbmFtZSk7XG5cdFx0fVxuXHRcdHJldHVybiAkKCc8c3Bhbj4nKS5hZGRDbGFzcygndG9vbHMtcmVkaXJlY3RfbGluaycpLmFwcGVuZChhKTtcblx0fSxcblx0YWRkTWV0aG9kcygkcGFyZW50LCBtZXRob2RzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0bGV0ICRjb250YWluZXIgPSAkcGFyZW50LmZpbmQoJz4gLnRvb2xzLXJlZGlyZWN0X21ldGhvZHMnKTtcblx0XHRjb25zdCBtZXRob2RFeGlzdCA9ICh7aHJlZn0pID0+IHtcblx0XHRcdHJldHVybiAkY29udGFpbmVyLmZpbmQoYGFbaHJlZj0ke0pTT04uc3RyaW5naWZ5KGhyZWYpfV1gKS5sZW5ndGggPiAwO1xuXHRcdH07XG5cdFx0aWYgKCRjb250YWluZXIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHQkY29udGFpbmVyID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3Rvb2xzLXJlZGlyZWN0X21ldGhvZHMnKS5hcHBlbmRUbygkcGFyZW50KTtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBtZXRob2Qgb2YgbWV0aG9kcykge1xuXHRcdFx0aWYgKCFtZXRob2RFeGlzdChtZXRob2QpKSB7XG5cdFx0XHRcdHNlbGYuYnVpbGRMaW5rKG1ldGhvZCkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRidWlsZFNlbGVjdGlvbihtYWluLCBtZXRkLCBtdCwgZHNhYikge1xuXHRcdGNvbnN0IGNvbnQgPSAkKCc8c3Bhbj4nKTtcblx0XHRjb25zdCBzZWxlID0gJCgnPGlucHV0PicpLmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKS5hcHBlbmRUbyhjb250KTtcblx0XHR0aGlzLmJ1aWxkTGluayhtYWluKS5hcHBlbmRUbyhjb250KTtcblx0XHR0aGlzLmFkZE1ldGhvZHMoY29udCwgbWV0ZCk7XG5cdFx0c2VsZS5kYXRhKCdwYWdlLXRpdGxlJywgbXQpO1xuXHRcdGlmIChkc2FiKSB7XG5cdFx0XHRzZWxlLnByb3AoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0fVxuXHRcdHJldHVybiBjb250O1xuXHR9LFxuXHRsb2FkVmlldyhyZWxvYWQpIHtcblx0XHRjb25zdCAkY29udGFpbmVyID0gdGhpcy50YWJzLnZpZXcuY29udDtcblx0XHR0aGlzLmxvYWRUYWJDb250KFxuXHRcdFx0J3ZpZXcnLFxuXHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5sb2FkUmVkaXJlY3Qod2dQYWdlTmFtZSwgJGNvbnRhaW5lciwgMCk7XG5cdFx0XHR9LFxuXHRcdFx0cmVsb2FkXG5cdFx0KTtcblx0fSxcblx0bG9hZENyZWF0ZShyZWxvYWQpIHtcblx0XHR0aGlzLmxvYWRUYWJDb250KFxuXHRcdFx0J2NyZWF0ZScsXG5cdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpbmRSZWRpcmVjdCh3Z1BhZ2VOYW1lKTtcblx0XHRcdH0sXG5cdFx0XHRyZWxvYWRcblx0XHQpO1xuXHR9LFxuXHRsb2FkUmVkaXJlY3QocGFnZW5hbWUsIGNvbnRhaW5lciwgZGVlcCwgbG9hZGVkKSB7XG5cdFx0dGhpcy5sb2FkaW5nKGNvbnRhaW5lcik7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgdG9wID0gZGVlcCA/ICQoJzxkbD4nKS5hcHBlbmRUbyhjb250YWluZXIpIDogY29udGFpbmVyO1xuXHRcdGlmICghbG9hZGVkKSB7XG5cdFx0XHRsb2FkZWQgPSB7fTtcblx0XHRcdGxvYWRlZFtwYWdlbmFtZV0gPSB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBvbkNsaWNrRml4ID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRjb25zdCBlbnRyeSA9ICQodGhpcykucGFyZW50cygnZGQsIHAnKS5maXJzdCgpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHNlbGYuY2xpY2tBY3Rpb24oZW50cnksIHRoaXMuZml4KTtcblx0XHR9O1xuXHRcdHZvaWQgYXBpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ3JlZGlyZWN0cycsXG5cdFx0XHRcdHRpdGxlczogcGFnZW5hbWUsXG5cdFx0XHRcdHJkbGltaXQ6ICdtYXgnLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRcdHNlbGYubG9hZGVkKGNvbnRhaW5lcik7XG5cdFx0XHRcdGxldCBoYXNfcmVkaXJlY3QgPSBmYWxzZTtcblx0XHRcdFx0Y29uc3QgZGVzYyA9ICQoJ3AuZGVzYycsIHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRjb25zdCBtYXhpbXVtUmVkaXJlY3REZXB0aCA9IDEwO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRpZiAocGFnZS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHtyZWRpcmVjdHN9ID0gcGFnZTtcblx0XHRcdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiByZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgcmR0aXRsZSA9IHRpdGxlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCB1bHRpdGxlID0gcmR0aXRsZS5yZXBsYWNlKC8gL2csICdfJyk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGVudHJ5ID0gKGRlZXAgPyAkKCc8ZGQ+JykgOiAkKCc8cD4nKSkuYXBwZW5kVG8odG9wKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbWV0aG9kcyA9IFtcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmOiBtdy51dGlsLmdldFVybCh1bHRpdGxlLCB7YWN0aW9uOiAnZWRpdCd9KSxcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdyZWRpZWRpdCcpLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdF07XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGlzQ3ljbGVSZWRpcmVjdCA9IHJkdGl0bGUgaW4gbG9hZGVkO1xuXHRcdFx0XHRcdFx0XHRsb2FkZWRbcmR0aXRsZV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRpZiAoIWlzQ3ljbGVSZWRpcmVjdCAmJiBkZWVwKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWV0aG9kc1ttZXRob2RzLmxlbmd0aF0gPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmOiAnI2ZpeC1yZWRpcmVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFidmlld2ZpeCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xpY2s6IG9uQ2xpY2tGaXgsXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zdCAkY29udGFpbmVyID0gc2VsZlxuXHRcdFx0XHRcdFx0XHRcdC5idWlsZFNlbGVjdGlvbihcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZjogbXcudXRpbC5nZXRVcmwodWx0aXRsZSwge3JlZGlyZWN0OiAnbm8nfSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdG1ldGhvZHMsXG5cdFx0XHRcdFx0XHRcdFx0XHR1bHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0IWRlZXBcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZFRvKGVudHJ5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlzQ3ljbGVSZWRpcmVjdCkge1xuXHRcdFx0XHRcdFx0XHRcdCRjb250YWluZXIuYXBwZW5kKGA8c3BhbiBjbGFzcz1cImVycm9yXCI+JHtnZXRNZXNzYWdlKCdlcnJjeWNsZXJlZGlyZWN0Jyl9PC9zcGFuPmApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGRlZXAgPCBtYXhpbXVtUmVkaXJlY3REZXB0aCkge1xuXHRcdFx0XHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5sb2FkUmVkaXJlY3QocmR0aXRsZSwgZW50cnksIGRlZXAgKyAxLCBsb2FkZWQpO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGhhc19yZWRpcmVjdCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGhhc19yZWRpcmVjdCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaGFzX3JlZGlyZWN0ICYmIGRlZXAgPT09IDEpIHtcblx0XHRcdFx0XHRzZWxmLmFkZE1ldGhvZHMoZGVzYywgW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3NlbGVjdC1hbGwnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0YWxsJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFsbChzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWludmVyc2UnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0aW52ZXJzZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RJbnZlcnNlKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNmaXgtc2VsZWN0ZWQnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFidmlld2ZpeCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBY3Rpb24oc2VsZi50YWJzLnZpZXcuY29udCwgc2VsZi5maXgpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaGFzX3JlZGlyZWN0KSB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlV2l0aChzZWxmKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdFdpdGgoc2VsZik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG5cdH0sXG5cdGZpbmRWYXJpYW50cyhwYWdlbmFtZSwgdGl0bGVzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3Qgc3VmZml4UmVnID0gL14uKz8oKO+8iHxbIF9dXFwoKS4rPyhbKe+8iV0pKSQvO1xuXHRcdGxldCByZXRUaXRsZXMgPSBbXTtcblx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgVkFSSUFOVFMpIHtcblx0XHRcdGNvbnN0IHhociA9IGFwaVxuXHRcdFx0XHQucG9zdCh7XG5cdFx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRwYWdlOiBwYWdlbmFtZSxcblx0XHRcdFx0XHRwcm9wOiAnZGlzcGxheXRpdGxlJyxcblx0XHRcdFx0XHR1c2VsYW5nOiB2YXJpYW50LFxuXHRcdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCh7cGFyc2V9KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qge2Rpc3BsYXl0aXRsZX0gPSBwYXJzZTtcblx0XHRcdFx0XHQvLyBFeGFtcGxlOlxuXHRcdFx0XHRcdC8vIC0gQmVmb3JlOiA8c3BhbiBjbGFzcz1cIm13LXBhZ2UtdGl0bGUtbmFtZXNwYWNlXCI+5rGC6Ze755m+56eRPC9zcGFuPjxzcGFuIGNsYXNzPVwibXctcGFnZS10aXRsZS1zZXBhcmF0b3JcIj46PC9zcGFuPjxzcGFuIGNsYXNzPVwibXctcGFnZS10aXRsZS1tYWluXCI+5rKZ55uSPC9zcGFuPlxuXHRcdFx0XHRcdC8vIC0gQWZ0ZXI6IOaxgumXu+eZvuenkTrmspnnm5Jcblx0XHRcdFx0XHRsZXQgdGl0bGUgPSAkKCc8c3Bhbj4nKS5hcHBlbmQoZGlzcGxheXRpdGxlKS5lcSgwKS50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRcdHRpdGxlID0gZml4TmFtZXNwYWNlKHRpdGxlKTtcblx0XHRcdFx0XHRzZXRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsICd7e+eugOe5gemHjeWumuWQkX19JywgU1VGRklYX0FQUEVORCk7XG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlO1xuXHRcdFx0XHR9KTtcblx0XHRcdGRlZmVycmVkc1tkZWZlcnJlZHMubGVuZ3RoXSA9IHhocjtcblx0XHR9XG5cdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpLnRoZW4oKC4uLmFyZ3MpID0+IHtcblx0XHRcdGNvbnN0IHN1ZmZpeGVzID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IHRpdGxlIG9mIGFyZ3MpIHtcblx0XHRcdFx0bGV0IHN1ZmZpeDtcblx0XHRcdFx0Ly8gZmluZCB0aXRsZSBzdWZmaXgsXG5cdFx0XHRcdC8vIGZvciBleGFtcGxlIFwiICjmtY7ljZfluIIpXCIgdG8gXCLluILkuK3ljLogKOa1juWNl+W4gilcIlxuXHRcdFx0XHRjb25zdCBzdWZmaXhBcnIgPSBzdWZmaXhSZWcuZXhlYyh0aXRsZSk7XG5cdFx0XHRcdGlmIChzdWZmaXhBcnIgJiYgc3VmZml4QXJyLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0XHRcdFssIHN1ZmZpeF0gPSBzdWZmaXhBcnI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3VmZml4ID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0VGl0bGVzW3JldFRpdGxlcy5sZW5ndGhdID0gdGl0bGU7XG5cdFx0XHRcdHN1ZmZpeGVzW3N1ZmZpeGVzLmxlbmd0aF0gPSBzdWZmaXg7XG5cdFx0XHR9XG5cdFx0XHQvLyBhcHBlbmQgc3VmZml4ZXNcblx0XHRcdGZvciAoY29uc3Qgc3VmZml4IG9mIG5ldyBTZXQoc3VmZml4ZXMpKSB7XG5cdFx0XHRcdHJldFRpdGxlcyA9IFtcblx0XHRcdFx0XHQuLi5yZXRUaXRsZXMsXG5cdFx0XHRcdFx0Li4udGl0bGVzLm1hcCgodGl0bGUpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IG1vZGlmaWVkVGl0bGUgPSBmaXhOYW1lc3BhY2UodGl0bGUpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHN1ZmZpeFJlZy50ZXN0KG1vZGlmaWVkVGl0bGUpID8gbW9kaWZpZWRUaXRsZSA6IG1vZGlmaWVkVGl0bGUgKyBzdWZmaXg7XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc2VsZi5maW5kTm90RXhpc3RzKFsuLi5uZXcgU2V0KHJldFRpdGxlcyldKTtcblx0XHR9KTtcblx0fSxcblx0ZmluZE5vdEV4aXN0cyh0aXRsZXMpIHtcblx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRjb25zdCBleGNsdWRlcyA9IG5ldyBTZXQoWyfnlKjlrZfmqKHlvI8nXSk7XG5cdFx0bGV0IGFsbHRpdGxlcyA9IFtdO1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5qb2luKCd8Jyk7XG5cdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0XHRkZWZlcnJlZHNbZGVmZXJyZWRzLmxlbmd0aF0gPSBhcGkucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGV4dDogdGl0bGVzLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdHRpdGxlOiAnTWVkaWFXaWtpOkdhZGdldC1Ub29sc1JlZGlyZWN0LmpzLy0nLFxuXHRcdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdHVzZWxhbmc6IHZhcmlhbnQsXG5cdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpLnRoZW4oKC4uLmFyZ3MpID0+IHtcblx0XHRcdGZvciAoY29uc3QgW3twYXJzZX1dIG9mIGFyZ3MpIHtcblx0XHRcdFx0YWxsdGl0bGVzID0gWy4uLmFsbHRpdGxlcywgLi4uJChwYXJzZS50ZXh0KS50ZXh0KCkudHJpbSgpLnNwbGl0KCd8JyldO1xuXHRcdFx0fVxuXHRcdFx0YWxsdGl0bGVzID0gYWxsdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2KSA9PT0gaTtcblx0XHRcdH0pO1xuXHRcdFx0YWxsdGl0bGVzID0gYWxsdGl0bGVzLmpvaW4oJ3wnKTtcblx0XHRcdHJldHVybiBhcGlcblx0XHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHRcdHRpdGxlczogYWxsdGl0bGVzLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRcdHRpdGxlcyA9IFtdO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdFx0Y29uc3Qge3RpdGxlfSA9IHBhZ2U7XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5taXNzaW5nICYmICFleGNsdWRlcy5oYXModGl0bGUpKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aXRsZSBpbiByZWRpcmVjdEV4Y2x1ZGVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gZXhjbHVkZSBzcGVjaWFsIHRpdGxlc1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSB0aXRsZTtcblx0XHRcdFx0XHRcdFx0aWYgKElTX0NBVEVHT1JZKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gd2dQYWdlTmFtZS5yZXBsYWNlKC9eQ2F0ZWdvcnk6LywgJycpO1xuXHRcdFx0XHRcdFx0XHRcdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgJ3t75YiG57G76YeN5a6a5ZCRfCQxfX0nLnJlcGxhY2UoJyQxJywgdGFyZ2V0KSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ly8gb25seSBzZXQgZGVmYXVsdCBzdWZmaXhcblx0XHRcdFx0XHRcdFx0c2V0UmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCAne3vliKvlkI3ph43lrprlkJF9fScsIFNVRkZJWF9TRVRERUZBVUxUKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cdGZpbmRSZWRpcmVjdChwYWdlbmFtZSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGZyY0RlZmVycmVkcyA9IFtdO1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IHNlbGYudGFicy5jcmVhdGUuY29udDtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRjb25zdCAkY29udGVudCA9ICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQgPiBkaXYubXctcGFyc2VyLW91dHB1dCcpO1xuXHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGxldCB0aXRsZXMgPSBbXTtcblx0XHRzZWxmLmxvYWRpbmcoY29udGFpbmVyKTtcblx0XHRmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGZpbmRSZWRpcmVjdENhbGxiYWNrcykge1xuXHRcdFx0Y29uc3QgcmV0ID0gY2FsbGJhY2socGFnZW5hbWUsICRjb250ZW50LCB0aXRsZXMpO1xuXHRcdFx0aWYgKHR5cGVvZiByZXQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IHJldDtcblx0XHRcdH0gZWxzZSBpZiAoJ2RvbmUnIGluIHJldCkge1xuXHRcdFx0XHQvLyBpcyBEZWZlcnJlZFxuXHRcdFx0XHRmcmNEZWZlcnJlZHNbZnJjRGVmZXJyZWRzLmxlbmd0aF0gPSByZXQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aXRsZXMgPSBbLi4ubmV3IFNldChbLi4udGl0bGVzLCAuLi5yZXRdKV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHJlbW92ZSBhbGwgZW1wdHkgdGl0bGVzXG5cdFx0dGl0bGVzID0gdGl0bGVzLm1hcCgodGl0bGUpID0+IHtcblx0XHRcdHJldHVybiB0aXRsZSB8fCBudWxsO1xuXHRcdH0pO1xuXHRcdGNvbnN0IG9uQ2xpY2tDcmVhdGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdGNvbnN0IGVudHJ5ID0gJCh0aGlzKS5wYXJlbnRzKCdwOmZpcnN0Jyk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c2VsZi5jbGlja0FjdGlvbihlbnRyeSwgc2VsZi5jcmVhdGUpO1xuXHRcdH07XG5cdFx0Ly8gaGFuZGxlcyB0aGUgZGVmZXJyZWQgY2FsbGJhY2tzXG5cdFx0dm9pZCAkLndoZW4oLi4uZnJjRGVmZXJyZWRzKVxuXHRcdFx0LnRoZW4oKC4uLmFyZ3MpID0+IHtcblx0XHRcdFx0Zm9yIChjb25zdCByZXQgb2YgYXJncykge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgcmV0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gcmV0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMgPSBbLi4ubmV3IFNldChbLi4udGl0bGVzLCAuLi5yZXRdKV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzZWxmLmZpbmRWYXJpYW50cyhwYWdlbmFtZSwgdGl0bGVzKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoZnZ0aXRsZXMpID0+IHtcblx0XHRcdFx0Ly8gYnVpbGQgSFRNTFxuXHRcdFx0XHRzZWxmLmxvYWRlZChjb250YWluZXIpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHRpdGxlIG9mIGZ2dGl0bGVzKSB7XG5cdFx0XHRcdFx0Y29uc3QgdWx0aXRsZSA9IHRpdGxlLnJlcGxhY2UoJyAnLCAnXycpO1xuXHRcdFx0XHRcdGNvbnN0IGVudHJ5ID0gJCgnPHA+JykuYXBwZW5kVG8oY29udGFpbmVyKTtcblx0XHRcdFx0XHRzZWxmLmJ1aWxkU2VsZWN0aW9uKFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiBtdy51dGlsLmdldFVybCh1bHRpdGxlLCB7YWN0aW9uOiAnZWRpdCcsIHJlZGxpbms6ICcxJ30pLFxuXHRcdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdFx0Y2xhc3NuYW1lOiAnbmV3Jyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRocmVmOiAnI2NyZWF0ZS1yZWRpcmVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYmNyZWF0ZXRpdGxlJyksXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6IG9uQ2xpY2tDcmVhdGUsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0dWx0aXRsZSxcblx0XHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdFx0KS5hcHBlbmRUbyhlbnRyeSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZGVzYyA9ICQoJ3AuZGVzYycsIGNvbnRhaW5lcik7XG5cdFx0XHRcdGlmIChmdnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2VsZi5hZGRNZXRob2RzKGRlc2MsIFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNzZWxlY3QtYWxsJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3NlbGVjdGFsbCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBbGwoY29udGFpbmVyKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWludmVyc2UnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0aW52ZXJzZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RJbnZlcnNlKGNvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI2NyZWF0ZS1zZWxlY3RlZCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBY3Rpb24oY29udGFpbmVyLCBzZWxmLmNyZWF0ZSk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZVdpdGgoc2VsZiwgW2Z2dGl0bGVzXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3RXaXRoKHNlbGYsIFtmdnRpdGxlc10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xuXHR9LFxufTtcblxuZXhwb3J0IHtUb29sc1JlZGlyZWN0LCBmaW5kUmVkaXJlY3RDYWxsYmFjaywgZmluZFJlZGlyZWN0QnlTZWxlY3Rvciwgc2V0UmVkaXJlY3RUZXh0U3VmZml4fTtcbiIsICJpbXBvcnQgdHlwZSB7TWVzc2FnZUtleX0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBnZXRNZXNzYWdlID0gKGtleTogTWVzc2FnZUtleSBleHRlbmRzIGB0b29sc3JlZGlyZWN0LSR7aW5mZXIgUH1gID8gUCA6IG5ldmVyLCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGZ1bGxLZXk6IHN0cmluZyA9IGB0b29sc3JlZGlyZWN0LSR7a2V5fWA7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGZ1bGxLZXksIC4uLmFyZ3MpLnBhcnNlKCkgOiBtdy5tZXNzYWdlKGZ1bGxLZXkpLnBsYWluKCk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAnLi9Ub29sc1JlZGlyZWN0Lmxlc3MnO1xuaW1wb3J0IHtUb29sc1JlZGlyZWN0fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3NldE1lc3NhZ2VzfSBmcm9tICcuL21vZHVsZXMvbWVzc2FnZXMnO1xuXG5pbXBvcnQge3Rvb2xzUmVkaXJlY3RfYmlvX2xhdGluX25hbWVzfSBmcm9tICcuL21vZHVsZXMvYmlvLWxhdGluLW5hbWVzJztcbmltcG9ydCB7dG9vbHNSZWRpcmVjdF9vcHRfYm9sZHN9IGZyb20gJy4vbW9kdWxlcy9vcHQtYm9sZHMnO1xuXG5zZXRNZXNzYWdlcygpO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0VG9vbHNSZWRpcmVjdC5pbml0KCRib2R5KTtcblxuXHRpZiAobXcudXNlci5vcHRpb25zLmdldCgnZ2FkZ2V0LVRvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzJykpIHtcblx0XHR0b29sc1JlZGlyZWN0X2Jpb19sYXRpbl9uYW1lcygpO1xuXHR9XG5cdGlmIChtdy51c2VyLm9wdGlvbnMuZ2V0KCdnYWRnZXQtVG9vbHNSZWRpcmVjdC1vcHQtYm9sZHMnKSkge1xuXHRcdHRvb2xzUmVkaXJlY3Rfb3B0X2JvbGRzKCk7XG5cdH1cbn0pO1xuIiwgImltcG9ydCB0eXBlIHtNZXNzYWdlS2V5fSBmcm9tICcuL3R5cGVzJztcblxuY29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgREVGQVVMVF9NRVNTQUdFUyA9IHtcblx0J3Rvb2xzcmVkaXJlY3QtYnRudGl0bGUnOiAn6YeN5a6a5ZCRJyxcblx0J3Rvb2xzcmVkaXJlY3QtYnRuZGVzYyc6ICfliJvlu7rlkoznrqHnkIbmraTpobXpnaLnmoTph43lrprlkJEnLFxuXHQndG9vbHNyZWRpcmVjdC1kbGd0aXRsZSc6ICfliJvlu7rlkoznrqHnkIbph43lrprlkJEnLFxuXHQndG9vbHNyZWRpcmVjdC1yZWRpbG9hZGluZyc6ICfmlbDmja7liqDovb3kuK3vvIzor7fnqI3lgJnigKbigKYnLFxuXHQndG9vbHNyZWRpcmVjdC1yZWRpZWRpdCc6ICfnvJbovpEnLFxuXHQndG9vbHNyZWRpcmVjdC1zZWxlY3RhbGwnOiAn5YWo6YCJJyxcblx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0aW52ZXJzZSc6ICflj43pgIknLFxuXHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3dGl0bGUnOiAn5p+l55yLJyxcblx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2Rlc2MnOiAn5Lul5LiL5piv5oyH5ZCR5q2k6aG16Z2i55qE6YeN5a6a5ZCR6aG177yaJyxcblx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld25vdGZvdW5kJzogJ+ayoeacieaJvuWIsOS7u+S9leaMh+WQkeatpOmhtemdoueahOmHjeWumuWQkemhteOAgicsXG5cdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdtdWx0aSc6ICflpJrph40nLFxuXHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3Zml4JzogJ+S/ruWkjScsXG5cdCd0b29sc3JlZGlyZWN0LWZpeGxvYWRpbmcnOiAn6K+356iN5YCZ77yM5q2j5Zyo6Ieq5Yqo5L+u5aSN6YeN5a6a5ZCR4oCm4oCmJyxcblx0J3Rvb2xzcmVkaXJlY3QtZml4dGV4dCc6ICcjUkVESVJFQ1QgW1skMV1dJyxcblx0J3Rvb2xzcmVkaXJlY3QtZml4c3VtbWFyeSc6ICfnvJbovpHlt6XlhbfvvJrkv67lpI3lpJrph43ph43lrprlkJEnLFxuXHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGV0aXRsZSc6ICfliJvlu7onLFxuXHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVkZXNjJzogJ+S7peS4i+aYr+WwmuacquWIm+W7uueahOmHjeWumuWQkemhte+8micsXG5cdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZW5vdGZvdW5kJzogJ+ayoeacieaJvuWIsOWPr+S7peWIm+W7uueahOmHjeWumuWQkemhteOAgicsXG5cdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWFsbCc6ICflhajpg6jliJvlu7onLFxuXHQndG9vbHNyZWRpcmVjdC1jcmVhdGVsb2FkaW5nJzogJ+ivt+eojeWAme+8jOato+WcqOiHquWKqOWIm+W7uumHjeWumuWQkeKApuKApicsXG5cdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXN1bW1hcnknOiAn57yW6L6R5bel5YW377ya6Ieq5Yqo5Yib5bu66YeN5a6a5ZCR5YiwW1skMV1dJyxcblx0J3Rvb2xzcmVkaXJlY3QtZXJyY3ljbGVyZWRpcmVjdCc6ICfml6Dms5Xoh6rliqjkv67lpI3vvJrlj5HnjrDlvqrnjq/ph43lrprlkJEnLFxuXHQndG9vbHNyZWRpcmVjdC1yZWZyZXNoJzogJ+WIt+aWsCcsXG59IHNhdGlzZmllcyBSZWNvcmQ8TWVzc2FnZUtleSwgc3RyaW5nPjtcblxuY29uc3Qgc2V0TWVzc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQ8dHlwZW9mIERFRkFVTFRfTUVTU0FHRVM+KHtcblx0XHRcdCd0b29sc3JlZGlyZWN0LWJ0bnRpdGxlJzogJ+mHjeaWsOWwjuWQkScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1idG5kZXNjJzogJ+WJteW7uuWSjOeuoeeQhuatpOmggemdoueahOmHjeaWsOWwjuWQkScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1kbGd0aXRsZSc6ICflibXlu7rlkoznrqHnkIbph43mlrDlsI7lkJEnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtcmVkaWxvYWRpbmcnOiAn5pW45pOa5Yqg6LyJ5Lit77yM6KuL56iN5YCZ4oCm4oCmJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXJlZGllZGl0JzogJ+e3qOi8rycsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1zZWxlY3RhbGwnOiAn5YWo6YG4Jyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXNlbGVjdGludmVyc2UnOiAn5Y+N6YG4Jyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXd0aXRsZSc6ICfmn6XnnIsnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2Rlc2MnOiAn5Lul5LiL5piv5oyH5ZCR5q2k6aCB6Z2i55qE6YeN5paw5bCO5ZCR6aCB77yaJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdub3Rmb3VuZCc6ICfmspLmnInmib7liLDku7vkvZXmjIflkJHmraTpoIHpnaLnmoTph43mlrDlsI7lkJHpoIHjgIInLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld211bHRpJzogJ+WkmumHjScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3Zml4JzogJ+S/ruW+qScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1maXhsb2FkaW5nJzogJ+iri+eojeWAme+8jOato+WcqOiHquWLleS/ruW+qemHjeaWsOWwjuWQkeKApuKApicsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1maXh0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtZml4c3VtbWFyeSc6ICfnt6jovK/lt6XlhbfvvJrkv67lvqnlpJrph43ph43mlrDlsI7lkJEnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRldGl0bGUnOiAn5Ym15bu6Jyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWRlc2MnOiAn5Lul5LiL5piv5bCa5pyq5Ym15bu655qE6YeN5paw5bCO5ZCR6aCB77yaJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZW5vdGZvdW5kJzogJ+aykuacieaJvuWIsOWPr+S7peWJteW7uueahOmHjeaWsOWwjuWQkemggeOAgicsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVhbGwnOiAn5YWo6YOo5Ym15bu6Jyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZWxvYWRpbmcnOiAn6KuL56iN5YCZ77yM5q2j5Zyo6Ieq5YuV5Ym15bu66YeN5paw5bCO5ZCR4oCm4oCmJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGVzdW1tYXJ5JzogJ+e3qOi8r+W3peWFt++8muiHquWLleWJteW7uumHjeaWsOWwjuWQkeWIsFtbJDFdXScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1lcnJjeWNsZXJlZGlyZWN0JzogJ+eEoeazleiHquWLleS/ruW+qe+8mueZvOePvuW+queSsOmHjeaWsOWwjuWQkScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1yZWZyZXNoJzogJ+WIt+aWsCcsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KERFRkFVTFRfTUVTU0FHRVMpO1xuXHR9XG59O1xuXG5leHBvcnQge3NldE1lc3NhZ2VzfTtcbiIsICJjb25zdCB0b29sc1JlZGlyZWN0X2Jpb19sYXRpbl9uYW1lcyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3QgUkVHRVhfUFJFRklYOiBSZWdFeHAgPSAvW+WtpuWtuF3lkI1cXHMqWzrvvJpdP1xccyokLztcblx0Y29uc3QgUkVHRVhfQ09MT046IFJlZ0V4cCA9IC9eXFxzKls677yaXT9cXHMqJC87XG5cblx0d2luZG93LnRvb2xzUmVkaXJlY3QuZmluZFJlZGlyZWN0Q2FsbGJhY2soKF9wYWdlTmFtZTogc3RyaW5nLCAkY29udGVudDogSlF1ZXJ5KTogc3RyaW5nW10gPT4ge1xuXHRcdGNvbnN0IHRpdGxlczogc3RyaW5nW10gPSBbXTtcblxuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kKCc+IHAgPiBbbGFuZz1cImxhXCJdLCA+IHAgPiBpJykpIHtcblx0XHRcdGNvbnN0IHt0ZXh0Q29udGVudH0gPSBlbGVtZW50O1xuXHRcdFx0bGV0IHtwcmV2aW91c1NpYmxpbmc6IHByZXZpb3VzTm9kZX0gPSBlbGVtZW50O1xuXG5cdFx0XHRpZiAocHJldmlvdXNOb2RlICYmIFJFR0VYX0NPTE9OLnRlc3QocHJldmlvdXNOb2RlLnRleHRDb250ZW50ID8/ICcnKSkge1xuXHRcdFx0XHRwcmV2aW91c05vZGUgPSBwcmV2aW91c05vZGUucHJldmlvdXNTaWJsaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocHJldmlvdXNOb2RlICYmIFJFR0VYX1BSRUZJWC50ZXN0KHByZXZpb3VzTm9kZS50ZXh0Q29udGVudCA/PyAnJykpIHtcblx0XHRcdFx0Y29uc3QgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRleHRDb250ZW50Py50cmltKCk7XG5cdFx0XHRcdGlmICghdGl0bGUpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IHRpdGxlOyAvLyBSZXBsYWNlIGB0aXRsZXMucHVzaCh0aXRsZSlgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHRcdFx0d2luZG93LnRvb2xzUmVkaXJlY3Quc2V0UmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCAne3vlrablkI3ph43lrprlkJF9fScpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBbLi4ubmV3IFNldCh0aXRsZXMpXTtcblx0fSk7XG59O1xuXG5leHBvcnQge3Rvb2xzUmVkaXJlY3RfYmlvX2xhdGluX25hbWVzfTtcbiIsICJjb25zdCB0b29sc1JlZGlyZWN0X29wdF9ib2xkcyA9ICgpOiB2b2lkID0+IHtcblx0d2luZG93LnRvb2xzUmVkaXJlY3QuZmluZFJlZGlyZWN0QnlTZWxlY3RvcignZGl2I213LWNvbnRlbnQtdGV4dCBwID4gYicpO1xufTtcblxuZXhwb3J0IHt0b29sc1JlZGlyZWN0X29wdF9ib2xkc307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsU0FBVTtBQUNWLElBQUFDLFVBQVc7O0FDRlosSUFBTUMsZ0JBQWdCO0FBQ3RCLElBQU1DLGlCQUFpQjtBQUN2QixJQUFNQyxvQkFBb0I7QUFFMUIsSUFBTUMsV0FBVyxDQUFDLFdBQVcsV0FBVyxTQUFTLFNBQVMsU0FBUyxTQUFTLFNB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SE1BcU8sWUFBWTtBQUVaLE1BQUEsR0FBS0gsbUJBQUFtQixTQUFRLEVBQUVoTCxLQUFNakQsV0FBeUM7QUFDN0RMLGdCQUFjSSxLQUFLQyxLQUFLO0FBRXhCLE1BQUlwRCxHQUFHc1IsS0FBS0MsUUFBUS9RLElBQUksc0NBQXNDLEdBQUc7QUFDaEVpUSxrQ0FBOEI7RUFDL0I7QUFDQSxNQUFJelEsR0FBR3NSLEtBQUtDLFFBQVEvUSxJQUFJLGdDQUFnQyxHQUFHO0FBQzFENFEsNEJBQXdCO0VBQ3pCO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiYXBpVGFnIiwgInZlcnNpb24iLCAiU1VGRklYX0FQUEVORCIsICJTVUZGSVhfUkVQTEFDRSIsICJTVUZGSVhfU0VUREVGQVVMVCIsICJWQVJJQU5UUyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhcmdzIiwgImZ1bGxLZXkiLCAibGVuZ3RoIiwgIm13IiwgIm1lc3NhZ2UiLCAicGFyc2UiLCAicGxhaW4iLCAid2dOYW1lc3BhY2VJZHMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJjb25maWciLCAiZ2V0IiwgIklTX0NBVEVHT1JZIiwgImZpbmRSZWRpcmVjdENhbGxiYWNrcyIsICJwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeCIsICJyZWRpcmVjdEV4Y2x1ZGVzIiwgIm5zUHJlZml4ZXMiLCAibnNDYW5vblByZWZpeCIsICJuc1ByZWZpeFBhdHRlcm4iLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgInRleHQiLCAibnNpZCIsICJzcGxpdCIsICJSZWdFeHAiLCAiam9pbiIsICJmaXhOYW1lc3BhY2UiLCAidGl0bGUiLCAidGVzdCIsICJyZXBsYWNlIiwgImZpbmRSZWRpcmVjdENhbGxiYWNrIiwgImNhbGxiYWNrIiwgImdlbmVyYXRlQXJyYXkiLCAiZmluZFJlZGlyZWN0QnlTZWxlY3RvciIsICJzZWxlY3RvciIsICIkIiwgIm1hcCIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJlcSIsICJ0cmltIiwgInNldFJlZGlyZWN0VGV4dFN1ZmZpeCIsICJzdWZmaXgiLCAiZmxhZyIsICJmbGFnX3NldCIsICJmbGFnX2FwcGVuZCIsICJ3aW5kb3ciLCAidG9vbHNSZWRpcmVjdCIsICJUb29sc1JlZGlyZWN0IiwgInRhYnNlbGVtIiwgInRhZ3NlbGVtIiwgInZhcmlhbnRzIiwgImluaXQiLCAiJGJvZHkiLCAic2VsZiIsICJidXR0b24iLCAiYWRkQ2xhc3MiLCAiYXR0ciIsICJjc3MiLCAiYXBwZW5kIiwgIm9uIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImRpYWxvZyIsICJmaW5kIiwgImFmdGVyIiwgImJnaWZyYW1lIiwgInJlc2l6YWJsZSIsICJtb2RhbCIsICJ3aWR0aCIsICJNYXRoIiwgInJvdW5kIiwgInBvc2l0aW9uIiwgImhlaWdodCIsICJhcHBlbmRUbyIsICJhZGRUYWJzIiwgInRhYnMiLCAia25hbWUiLCAiaGFzT3duIiwgImNoYXJBdCIsICJ0b1VwcGVyQ2FzZSIsICJzbGljZSIsICJ0YWIiLCAidGFnIiwgImNvbnQiLCAibG9hZFZpZXciLCAiY3JlYXRlVGFiIiwgInRhYm5hbWUiLCAidGFidGl0bGUiLCAib25DbGljayIsICJjYWxsIiwgImxvYWRlZCIsICJfaW5pdFRhYlZpZXciLCAiX2luaXRUYWJDcmVhdGUiLCAibG9hZENyZWF0ZSIsICJ2aWV3IiwgImNyZWF0ZSIsICJmaXgiLCAicGFnZW5hbWVzIiwgInJlbW92ZSIsICJsb2FkaW5nIiwgImJ1bGtFZGl0QnlSZWdleCIsICJ0aGVuIiwgInNldFRpbWVvdXQiLCAiYnVsa0VkaXQiLCAiYWRkUmVkaXJlY3RUZXh0U3VmZml4IiwgIlNldCIsICJ0aXRsZXMiLCAic3VtbWFyeSIsICJmaWx0ZXIiLCAidiIsICJpIiwgImFyciIsICJpbmRleE9mIiwgInBvc3QiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicXVlcnkiLCAiZGVmZXJyZWRzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJwYWdlcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ2YWx1ZSIsICJwb3N0V2l0aFRva2VuIiwgInRhZ3MiLCAiZXJyIiwgImUiLCAiZiIsICJ3aGVuIiwgInJlZ2V4IiwgInJ2cHJvcCIsICJydnNsb3RzIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInBhZ2UiLCAiY29udGVudCIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibmV3Q29udGVudCIsICJiYXNldGltZXN0YW1wIiwgInRpbWVzdGFtcCIsICJsb2FkVGFiQ29udCIsICJyZWxvYWQiLCAiaHRtbCIsICIkZGVzYyIsICIkdGV4dCIsICJhcHBseSIsICJmYWlsIiwgImFsd2F5cyIsICJhZGRNZXRob2RzIiwgImhyZWYiLCAiY2xpY2siLCAiY29udGFpbmVyIiwgInRvTG93ZXJDYXNlIiwgInJlbW92ZUNsYXNzIiwgInNlbGVjdEFsbCIsICJzZWxlY3RJbnZlcnNlIiwgImVhY2giLCAiJGVsZW1lbnQiLCAic2VsZWN0QWN0aW9uIiwgImNiIiwgInBhZ2VuYW1lIiwgImRhdGEiLCAiY2xpY2tBY3Rpb24iLCAiYnVpbGRMaW5rIiwgImNsYXNzbmFtZSIsICJhIiwgInRhcmdldCIsICJyZWwiLCAiJHBhcmVudCIsICJtZXRob2RzIiwgIiRjb250YWluZXIiLCAibWV0aG9kRXhpc3QiLCAiSlNPTiIsICJzdHJpbmdpZnkiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAibWV0aG9kIiwgImJ1aWxkU2VsZWN0aW9uIiwgIm1haW4iLCAibWV0ZCIsICJtdCIsICJkc2FiIiwgInNlbGUiLCAibG9hZFJlZGlyZWN0IiwgImZpbmRSZWRpcmVjdCIsICJkZWVwIiwgImRlZmVycmVkIiwgIkRlZmVycmVkIiwgInRvcCIsICJvbkNsaWNrRml4IiwgImVudHJ5IiwgInBhcmVudHMiLCAiZmlyc3QiLCAicmRsaW1pdCIsICJoYXNfcmVkaXJlY3QiLCAiZGVzYyIsICJtYXhpbXVtUmVkaXJlY3REZXB0aCIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJyZWRpcmVjdHMiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAicmR0aXRsZSIsICJ1bHRpdGxlIiwgInV0aWwiLCAiZ2V0VXJsIiwgImlzQ3ljbGVSZWRpcmVjdCIsICJyZWRpcmVjdCIsICJyZXNvbHZlV2l0aCIsICJyZWplY3RXaXRoIiwgInByb21pc2UiLCAiZmluZFZhcmlhbnRzIiwgInN1ZmZpeFJlZyIsICJyZXRUaXRsZXMiLCAiX2kyIiwgIl9WQVJJQU5UUyIsICJ2YXJpYW50IiwgInhociIsICJ1c2VsYW5nIiwgImRpc3BsYXl0aXRsZSIsICJzdWZmaXhlcyIsICJfaTMiLCAiX2FyZ3MiLCAic3VmZml4QXJyIiwgImV4ZWMiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAibW9kaWZpZWRUaXRsZSIsICJmaW5kTm90RXhpc3RzIiwgImV4Y2x1ZGVzIiwgImFsbHRpdGxlcyIsICJfaTQiLCAiX1ZBUklBTlRTMiIsICJjb250ZW50bW9kZWwiLCAiX2k1IiwgIl9hcmdzMiIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJtaXNzaW5nIiwgImhhcyIsICJmcmNEZWZlcnJlZHMiLCAiJGNvbnRlbnQiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAicmV0IiwgIm9uQ2xpY2tDcmVhdGUiLCAiX2k2IiwgIl9hcmdzMyIsICJmdnRpdGxlcyIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJyZWRsaW5rIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ3Z1VzZXJMYW5ndWFnZSIsICJERUZBVUxUX01FU1NBR0VTIiwgInNldE1lc3NhZ2VzIiwgImluY2x1ZGVzIiwgIm1lc3NhZ2VzIiwgInNldCIsICJ0b29sc1JlZGlyZWN0X2Jpb19sYXRpbl9uYW1lcyIsICJSRUdFWF9QUkVGSVgiLCAiUkVHRVhfQ09MT04iLCAiX3BhZ2VOYW1lIiwgIl9pdGVyYXRvcjEwIiwgIl9zdGVwMTAiLCAiX3ByZXZpb3VzTm9kZSR0ZXh0Q29uIiwgIl9wcmV2aW91c05vZGUkdGV4dENvbjIiLCAidGV4dENvbnRlbnQiLCAicHJldmlvdXNTaWJsaW5nIiwgInByZXZpb3VzTm9kZSIsICJ0b29sc1JlZGlyZWN0X29wdF9ib2xkcyIsICJnZXRCb2R5IiwgInVzZXIiLCAib3B0aW9ucyJdCn0K
