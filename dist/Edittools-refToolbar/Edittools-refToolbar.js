/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title1=RefToolbar.js|license1=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-refToolbar.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-refToolbar/modules/RefToolbar.ts}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title2=RefToolbarBase.js|license2=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-refToolbarBase.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-refToolbar/modules/RefToolbarBase.js}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=RefToolbar.js (RefToolbar 2.0)|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:RefToolbar.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-refToolbar/modules/RefToolbar2.0.js}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=RefToolBar messages|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:RefToolbarMessages-zh-hans.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:RefToolbarMessages-zh-hant.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-refToolbar/modules/RefToolbarMessages.js}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=RefToolBar Config|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:RefToolbarConfig.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-refToolbar/modules/RefToolbarConfig.js}
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

// dist/Edittools-refToolbar/Edittools-refToolbar.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
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
//! src/Edittools-refToolbar/modules/constant.ts
var WG_ACTION = mw.config.get("wgAction");
var WG_PAGE_CONTENT_MODEL = mw.config.get("wgPageContentModel");
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
//! src/Edittools-refToolbar/modules/RefToolbar2.0.js
var import_ext_gadget = require("ext.gadget.Util");
//! src/Edittools-refToolbar/modules/util/getMessage.ts
var getMessage = (key, ...args) => {
  return args.length ? mw.message(key, ...args).parse() : mw.message(key).plain();
};
//! src/Edittools-refToolbar/modules/RefToolbarConfig.js
var refToolbarConfig = () => {
  const {
    CiteTemplate,
    CiteErrorCheck
  } = window;
  CiteTB.Options = {
    "date format": "<year>-<zmonth>-<zdate>",
    "autodate fields": ["accessdate"],
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    modal: true,
    autoparse: true,
    expandtemplates: false
  };
  new CiteTemplate("cite web", "web", [
    // Basic fields
    {
      field: "author<N>",
      increment_group: "author_alt",
      increment_button: true
    },
    {
      field: "title",
      autofillprop: "title"
    },
    {
      field: "url",
      autofillid: "url"
    },
    {
      field: "website",
      autofillprop: "journal"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "accessdate"
    },
    {
      field: "ref",
      tooltip: "cite-ref-tooltip"
    }
  ], [
    // Expanded fields
    {
      field: "authorlink<N>",
      tooltip: "cite-authorlink-tooltip",
      increment_group: "authorlink",
      increment_button: true
    },
    {
      field: "last<N>",
      autofillprop: "last-incr",
      increment_group: "author"
    },
    {
      field: "first<N>",
      autofillprop: "first-incr",
      increment_group: "author",
      increment_button: true
    },
    {
      field: "location"
    },
    {
      field: "page",
      tooltip: "cite-page-tooltip"
    },
    {
      field: "pages",
      autofillprop: "pages",
      tooltip: "cite-pages-tooltip"
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "doi",
      autofillid: "doi",
      autofillprop: "doi"
    },
    {
      field: "date",
      autofillprop: "date"
    },
    {
      field: "quote"
    }
  ]);
  new CiteTemplate("cite news", "news", [
    // Basic fields
    {
      field: "author<N>",
      increment_group: "author_alt",
      increment_button: true
    },
    {
      field: "title",
      autofillprop: "title"
    },
    {
      field: "url",
      autofillid: "url"
    },
    {
      field: "accessdate"
    },
    {
      field: "work",
      tooltip: "cite-work-tooltip",
      autofillprop: "journal"
    },
    {
      field: "agency"
    },
    {
      field: "issue"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "date",
      autofillprop: "date"
    },
    {
      field: "ref",
      tooltip: "cite-ref-tooltip"
    }
  ], [
    // Expanded fields
    {
      field: "authorlink<N>",
      tooltip: "cite-authorlink-tooltip",
      increment_group: "authorlink",
      increment_button: true
    },
    {
      field: "last<N>",
      autofillprop: "last-incr",
      increment_group: "author"
    },
    {
      field: "first<N>",
      autofillprop: "first-incr",
      increment_group: "author",
      increment_button: true
    },
    {
      field: "location"
    },
    {
      field: "page",
      tooltip: "cite-page-tooltip"
    },
    {
      field: "pages",
      autofillprop: "pages",
      tooltip: "cite-pages-tooltip"
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "doi",
      autofillid: "doi",
      autofillprop: "doi"
    },
    {
      field: "quote"
    }
  ]);
  new CiteTemplate("cite book", "book", [
    // Basic fields
    {
      field: "author<N>",
      increment_group: "author_alt",
      increment_button: true
    },
    {
      field: "coauthors",
      autofillprop: "coauthors"
    },
    {
      field: "editor"
    },
    {
      field: "title",
      autofillprop: "title"
    },
    {
      field: "date",
      autofillprop: "year"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "location",
      autofillprop: "location"
    },
    {
      field: "isbn",
      /* "autofillid":"isbn", */
      autofillprop: "isbn"
    },
    {
      field: "page",
      tooltip: "cite-page-tooltip"
    },
    {
      field: "pages",
      autofillprop: "pages",
      tooltip: "cite-pages-tooltip"
    },
    {
      field: "edition",
      autofillprop: "edition"
    },
    {
      field: "url",
      autofillid: "url"
    },
    {
      field: "accessdate"
    },
    {
      field: "ref",
      tooltip: "cite-ref-tooltip"
    }
  ], [
    // Expanded fields
    {
      field: "last<N>",
      autofillprop: "last-incr",
      increment_group: "author"
    },
    {
      field: "first<N>",
      autofillprop: "first-incr",
      increment_group: "author",
      increment_button: true
    },
    {
      field: "authorlink<N>",
      tooltip: "cite-authorlink-tooltip",
      increment_group: "authorlink",
      increment_button: true
    },
    {
      field: "editor<N>-last",
      increment_group: "editor"
    },
    {
      field: "editor<N>-first",
      increment_group: "editor",
      increment_button: true
    },
    {
      field: "editor<N>-link",
      increment_group: "editorlink",
      increment_button: true
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "chapter",
      autofillprop: "chapter"
    },
    {
      field: "quote"
    }
  ]);
  new CiteTemplate("cite journal", "journal", [
    // Basic fields
    {
      field: "author<N>",
      increment_group: "author_alt",
      increment_button: true
    },
    {
      field: "coauthors",
      autofillprop: "coauthors"
    },
    {
      field: "title",
      autofillprop: "title"
    },
    {
      field: "journal",
      autofillprop: "journal"
    },
    {
      field: "date",
      autofillprop: "date"
    },
    {
      field: "volume",
      autofillprop: "volume"
    },
    {
      field: "issue",
      autofillprop: "issue"
    },
    {
      field: "page",
      tooltip: "cite-page-tooltip"
    },
    {
      field: "pages",
      autofillprop: "pages",
      tooltip: "cite-pages-tooltip"
    },
    {
      field: "doi",
      autofillid: "doi",
      autofillprop: "doi"
    },
    {
      field: "pmid",
      autofillid: "pmid"
    },
    {
      field: "url",
      autofillid: "url"
    },
    {
      field: "accessdate"
    },
    {
      field: "ref",
      tooltip: "cite-ref-tooltip"
    }
  ], [
    // Expanded fields
    {
      field: "authorlink<N>",
      tooltip: "cite-authorlink-tooltip",
      increment_group: "authorlink",
      increment_button: true
    },
    {
      field: "last<N>",
      autofillprop: "last-incr",
      increment_group: "author"
    },
    {
      field: "first<N>",
      autofillprop: "first-incr",
      increment_group: "author",
      increment_button: true
    },
    {
      field: "editor<N>-last",
      increment_group: "editor"
    },
    {
      field: "editor<N>-first",
      increment_group: "editor",
      increment_button: true
    },
    {
      field: "editor<N>-link",
      increment_group: "editorlink",
      increment_button: true
    },
    {
      field: "series"
    },
    {
      field: "at",
      tooltip: "cite-at-tooltip"
    },
    {
      field: "trans-title"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "location"
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "issn",
      autofillprop: "issn"
    },
    {
      field: "pmc"
    },
    {
      field: "oclc"
    },
    {
      field: "bibcode"
    },
    {
      field: "id"
    },
    {
      field: "quote"
    },
    {
      field: "postscript",
      tooltip: "cite-postscript-tooltip"
    }
  ]);
  new CiteTemplate("cite conference", "conference", [
    // Basic fields
    {
      field: "author",
      autofillprop: "author1"
    },
    {
      field: "coauthors",
      autofillprop: "coauthors"
    },
    {
      field: "title",
      autofillprop: "title"
    },
    {
      field: "conference"
    },
    {
      field: "conferenceurl"
    },
    {
      field: "booktitle",
      autofillprop: "journal"
    },
    {
      field: "date",
      autofillprop: "date"
    },
    {
      field: "year"
    },
    {
      field: "month"
    },
    {
      field: "volume",
      autofillprop: "volume"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "location",
      autofillprop: "location"
    },
    {
      field: "isbn"
    },
    {
      field: "pages"
    },
    {
      field: "doi",
      autofillid: "doi",
      autofillprop: "doi"
    },
    {
      field: "pmid",
      autofillid: "pmid"
    },
    {
      field: "url",
      autofillid: "url"
    },
    {
      field: "accessdate",
      tooltip: "cite-accessdate-tooltip"
    }
  ], [
    // Expanded fields
    {
      field: "last",
      autofillprop: "last1"
    },
    {
      field: "first",
      autofillprop: "first1"
    },
    {
      field: "authorlink",
      tooltip: "cite-authorlink-tooltip"
    },
    {
      field: "editor"
    },
    {
      field: "others"
    },
    {
      field: "edition",
      autofillprop: "edition"
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "issn"
    },
    {
      field: "oclc"
    },
    {
      field: "id",
      tooltip: "cite-id-tooltip"
    },
    {
      field: "quote"
    }
  ]);
  new CiteTemplate("cite encyclopedia", "encyclopedia", [
    // Basic fields
    {
      field: "author",
      autofillprop: "author1"
    },
    {
      field: "title"
    },
    {
      field: "editor"
    },
    {
      field: "encyclopedia",
      autofillprop: "title"
    },
    {
      field: "volume"
    },
    {
      field: "year",
      autofillprop: "year"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "location",
      autofillprop: "location"
    },
    {
      field: "isbn"
    },
    {
      field: "pages"
    },
    {
      field: "url"
    }
  ], [
    // Expanded fields
    {
      field: "last",
      autofillprop: "last1"
    },
    {
      field: "first",
      autofillprop: "first1"
    },
    {
      field: "authorlink",
      tooltip: "cite-authorlink-tooltip"
    },
    {
      field: "coauthors",
      autofillprop: "coauthors"
    },
    {
      field: "others"
    },
    {
      field: "edition",
      autofillprop: "edition"
    },
    {
      field: "oclc"
    },
    {
      field: "id",
      tooltip: "cite-id-tooltip"
    },
    {
      field: "accessdate",
      tooltip: "cite-accessdate-tooltip"
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "date"
    },
    {
      field: "month"
    },
    {
      field: "quote"
    }
  ]);
  new CiteErrorCheck({
    type: "reflist",
    testname: "samecontent",
    desc: "cite-samecontent-desc",
    func: (reflist) => {
      const errors = [];
      const refs2 = [];
      var _iterator = _createForOfIteratorHelper(reflist), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const element = _step.value;
          if (element.shorttag) {
            continue;
          }
          if (refs2.includes(element.content)) {
            if (errors.includes(element.content)) {
              continue;
            }
            errors[errors.length] = element.content;
          } else {
            refs2[refs2.length] = element.content;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      const ret = [];
      for (var _i = 0, _errors = errors; _i < _errors.length; _i++) {
        const error = _errors[_i];
        ret[ret.length] = {
          msg: "cite-samecontent-error",
          err: error
        };
      }
      return ret;
    }
  });
  new CiteErrorCheck({
    type: "reflist",
    testname: "repeated",
    desc: "cite-repeated-desc",
    func: (reflist) => {
      const errors = [];
      const refs2 = [];
      var _iterator2 = _createForOfIteratorHelper(reflist), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const element = _step2.value;
          if (element.shorttag || !element.refname) {
            continue;
          }
          if (refs2.includes(element.refname)) {
            if (errors.includes(element.refname)) {
              continue;
            }
            errors[errors.length] = element.refname;
          } else {
            refs2[refs2.length] = element.refname;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      const ret = [];
      for (var _i2 = 0, _errors2 = errors; _i2 < _errors2.length; _i2++) {
        const error = _errors2[_i2];
        ret[ret.length] = {
          msg: "cite-repeated-error",
          err: error
        };
      }
      return ret;
    }
  });
  new CiteErrorCheck({
    type: "reflist",
    testname: "undefined",
    desc: "cite-undefined-desc",
    func: (reflist) => {
      const errors = [];
      const longrefs = [];
      for (var _i3 = 0, _Object$values = Object.values(reflist); _i3 < _Object$values.length; _i3++) {
        const value = _Object$values[_i3];
        const {
          refname,
          shorttag
        } = value;
        if (!shorttag && refname) {
          longrefs[longrefs.length] = value.refname;
        }
        if (shorttag && errors.includes(refname) === -1 && !longrefs.includes(refname)) {
          errors[errors.length] = refname;
        }
      }
      const ret = [];
      for (var _i4 = 0, _errors3 = errors; _i4 < _errors3.length; _i4++) {
        const error = _errors3[_i4];
        ret[ret.length] = {
          msg: "cite-undefined-error",
          err: error
        };
      }
      return ret;
    }
  });
  CiteTB.init();
};
//! src/Edittools-refToolbar/modules/RefToolbar2.0.js
var refToolbar2 = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    const $body = yield (0, import_ext_gadget.getBody)();
    const api = (0, import_ext_gadget.initMwApi)("RefToolbar/2.0");
    CiteTB.DefaultOptions = {
      "date format": "<year>-<zmonth>-<zdate>",
      "autodate fields": [],
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      modal: true,
      autoparse: false,
      expandtemplates: false
    };
    CiteTB.getOption = (opt) => {
      if (CiteTB.UserOptions[opt] !== void 0) {
        return CiteTB.UserOptions[opt];
      } else if (CiteTB.Options[opt] !== void 0) {
        return CiteTB.Options[opt];
      }
      return CiteTB.DefaultOptions[opt];
    };
    CiteTB.init = () => {
      var _$$width2, _$$width3;
      $(document).find("head").trigger("reftoolbarbase");
      const $target = $body.find("textarea[name=wpTextbox1]");
      const temlist = {};
      for (const t in CiteTB.Templates) {
        if (Object.hasOwn(CiteTB.Templates, t)) {
          var _$$width;
          const tem = CiteTB.Templates[t];
          const sform = CiteTB.escStr(tem.shortform);
          const actionobj = {
            type: "dialog",
            module: "cite-dialog-".concat(sform)
          };
          const dialogobj = {};
          dialogobj["cite-dialog-".concat(sform)] = {
            resizeme: false,
            titleMsg: "cite-dialog-".concat(sform),
            id: "citetoolbar-".concat(sform),
            init: () => {
            },
            html: tem.getInitial(),
            dialog: {
              width: Math.round((_$$width = $(window).width()) !== null && _$$width !== void 0 ? _$$width : 0 * 0.8),
              open() {
                $(this).html(CiteTB.getOpenTemplate().getForm());
                $body.find(".cite-prev-parse").on("click", (e) => {
                  e.preventDefault();
                  CiteTB.prevParseClick();
                });
              },
              buttons: {
                "cite-form-submit"() {
                  const ref = CiteTB.getRef(false, true);
                  $(this).dialog("close");
                  $.wikiEditor.modules.toolbar.fn.doAction($(this).data("context"), {
                    type: "encapsulate",
                    options: {
                      post: ref
                    }
                  }, $(this));
                },
                "cite-form-showhide": CiteTB.showHideExtra,
                "cite-refpreview"() {
                  const ref = CiteTB.getRef(false, false);
                  const template = CiteTB.getOpenTemplate();
                  const div = $("#citetoolbar-".concat(CiteTB.escStr(template.shortform)));
                  div.find(".cite-preview-label").show();
                  div.find(".cite-ref-preview").text(ref).show();
                  if (CiteTB.getOption("autoparse")) {
                    CiteTB.prevParseClick();
                  } else {
                    div.find(".cite-prev-parse").show();
                    div.find(".cite-prev-parsed-label").hide();
                    div.find(".cite-preview-parsed").html("");
                  }
                },
                "wikieditor-toolbar-tool-link-cancel"() {
                  $(this).dialog("close");
                },
                "cite-form-reset"() {
                  CiteTB.resetForm();
                }
              }
            }
          };
          try {
            $target.wikiEditor("addDialog", dialogobj);
          } catch {
          }
          temlist[sform] = {
            label: tem.templatename,
            action: actionobj
          };
        }
      }
      const refsection = {
        sections: {
          cites: {
            type: "toolbar",
            label: getMessage("cite-section-label"),
            groups: {
              template: {
                tools: {
                  template: {
                    type: "select",
                    label: getMessage("cite-template-list"),
                    list: temlist
                  }
                }
              },
              namedrefs: {
                label: getMessage("cite-named-refs-label"),
                tools: {
                  nrefs: {
                    type: "button",
                    action: {
                      type: "dialog",
                      module: "cite-toolbar-namedrefs"
                    },
                    icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/b/be/Nuvola_clipboard_lined.svg/22px-Nuvola_clipboard_lined.svg.png",
                    section: "cites",
                    group: "namedrefs",
                    label: getMessage("cite-named-refs-button")
                  }
                }
              },
              errorcheck: {
                label: getMessage("cite-errorcheck-label"),
                tools: {
                  echeck: {
                    type: "button",
                    action: {
                      type: "dialog",
                      module: "cite-toolbar-errorcheck"
                    },
                    icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/a/a3/Nuvola_apps_korganizer-NO.png/22px-Nuvola_apps_korganizer-NO.png",
                    section: "cites",
                    group: "errorcheck",
                    label: getMessage("cite-errorcheck-button")
                  }
                }
              }
            }
          }
        }
      };
      const defaultdialogs = {
        "cite-toolbar-errorcheck": {
          titleMsg: "cite-errorcheck-label",
          id: "citetoolbar-errorcheck",
          resizeme: false,
          init: () => {
          },
          html: '<div id="cite-namedref-loading"><img src="https://tu.zhongwen.wiki/images/qiuwenbaike/zh/d/de/Ajax-loader.gif" />&nbsp;'.concat(getMessage("cite-loading"), "</div>"),
          dialog: {
            width: Math.round((_$$width2 = $(window).width()) !== null && _$$width2 !== void 0 ? _$$width2 : 0 * 0.8),
            open() {
              CiteTB.loadRefs();
            },
            buttons: {
              "cite-errorcheck-submit"() {
                const errorchecks = $body.find("input[name=cite-err-test]:checked");
                let errors = [];
                var _iterator3 = _createForOfIteratorHelper(errorchecks), _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                    const errorcheck = _step3.value;
                    errors = [...errors, ...CiteTB.ErrorChecks[$(errorcheck).val()].run()];
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
                CiteTB.displayErrors(errors);
                $(this).dialog("close");
              },
              "wikieditor-toolbar-tool-link-cancel"() {
                $(this).dialog("close");
              }
            }
          }
        },
        "cite-toolbar-namedrefs": {
          titleMsg: "cite-named-refs-title",
          resizeme: false,
          id: "citetoolbar-namedrefs",
          html: '<div id="cite-namedref-loading"> <img src="https://tu.zhongwen.wiki/images/qiuwenbaike/zh/d/de/Ajax-loader.gif" /> &nbsp;'.concat(getMessage("cite-loading"), "</div>"),
          init: () => {
          },
          dialog: {
            width: Math.round((_$$width3 = $(window).width()) !== null && _$$width3 !== void 0 ? _$$width3 : 0 * 0.8),
            open() {
              CiteTB.loadRefs();
            },
            buttons: {
              "cite-form-submit"() {
                const refname = $body.find("#cite-namedref-select").val();
                if (refname === "") {
                  return;
                }
                $(this).dialog("close");
                $.wikiEditor.modules.toolbar.fn.doAction($(this).data("context"), {
                  type: "encapsulate",
                  options: {
                    post: CiteTB.getNamedRef(refname, true)
                  }
                }, $(this));
              },
              "wikieditor-toolbar-tool-link-cancel"() {
                $(this).dialog("close");
              }
            }
          }
        }
      };
      try {
        $target.wikiEditor("addDialog", defaultdialogs);
      } catch {
      }
      $body.find("#citetoolbar-namedrefs").off("dialogopen");
      if (!CiteTB.getOption("modal")) {
        mw.util.addCSS(".ui-widget-overlay{display:none !important}");
      }
      try {
        $target.wikiEditor("addToToolbar", refsection);
      } catch {
      }
    };
    CiteTB.mainRefList = [];
    CiteTB.refsLoaded = false;
    CiteTB.getRef = (inneronly, forinsert) => {
      let i, j, g, group;
      const template = CiteTB.getOpenTemplate();
      const {
        templatename
      } = template;
      let res = "";
      const refobj = {
        shorttag: false
      };
      if (!inneronly) {
        group = $("#cite-".concat(CiteTB.escStr(template.shortform), "-group")).val();
        let refname = $("#cite-".concat(CiteTB.escStr(template.shortform), "-name")).val();
        res += "<ref";
        if (refname) {
          refname = String(refname).trim();
          res += " name=".concat(CiteTB.getQuotedString(refname));
          refobj.refname = refname;
        }
        if (group) {
          group = String(group).trim();
          res += " group=".concat(CiteTB.getQuotedString(group));
          refobj.refgroup = group;
        }
        res += ">";
      }
      let content = "{{".concat(templatename);
      for (g in template.incrementables) {
        if (Object.hasOwn(template.incrementables, g)) {
          group = template.incrementables[g];
          for (i = 1; i <= group.val; i++) {
            for (j = 0; j < group.fields.length; j++) {
              const fieldname = group.fields[j].field;
              const fieldid = fieldname.replace("<N>", i.toString());
              const field = $("#cite-".concat(CiteTB.escStr(template.shortform), "-").concat(fieldid)).val();
              if (field) {
                content += " |".concat(fieldid, "=");
                content += String(field).trim();
              }
            }
          }
        }
      }
      for (i = 0; i < template.basic.length; i++) {
        if (template.basic[i].increment_group) {
          continue;
        }
        const fieldname = template.basic[i].field;
        const field = $("#cite-".concat(CiteTB.escStr(template.shortform), "-").concat(fieldname)).val();
        if (field) {
          content += " |".concat(fieldname, "=");
          content += String(field).trim();
        }
      }
      if ($body.find("#cite-form-status").val() !== "closed") {
        for (i = 0; i < template.extra.length; i++) {
          if (template.extra[i].increment_group) {
            continue;
          }
          const fieldname = template.extra[i].field;
          const field = $("#cite-".concat(CiteTB.escStr(template.shortform), "-").concat(fieldname)).val();
          if (field) {
            content += " |".concat(fieldname, "=");
            content += String(field).trim();
          }
        }
      }
      content += "}}";
      res += content;
      refobj.content = content;
      if (!inneronly) {
        res += "</ref>";
      }
      if (forinsert) {
        CiteTB.mainRefList[CiteTB.mainRefList.length] = refobj;
      }
      return res;
    };
    CiteTB.getNamedRef = (refname, forinsert) => {
      if (forinsert) {
        CiteTB.mainRefList[CiteTB.mainRefList.length] = {
          shorttag: true,
          refname
        };
      }
      return "<ref name=".concat(CiteTB.getQuotedString(refname), " />");
    };
    CiteTB.loadRefs = () => {
      if (CiteTB.refsLoaded) {
        return;
      }
      CiteTB.getPageText(CiteTB.loadRefsInternal);
    };
    CiteTB.loadRefsInternal = (text) => {
      const refsregex = /< *ref(?: +(name|group) *= *(?:"([^"]*?)"|'([^']*?)'|([^ '"/>]*?)) *)? *(?: +(name|group) *= *(?:"([^"]*?)"|'([^']*?)'|([^ '"/>]*?)) *)? *(?:\/ *>|>((?:.|\n)*?)< *\/ *ref *>)/gim;
      while (true) {
        const ref = refsregex.exec(text);
        if (ref === null) {
          break;
        }
        const refobj = {};
        if (ref[9]) {
          [, , , , , , , , , refobj.content] = ref;
          refobj.shorttag = false;
        } else {
          refobj.shorttag = true;
        }
        if (ref[1] !== "") {
          if (ref[2]) {
            [, , refobj["ref".concat(ref[1])]] = ref;
          } else if (ref[3]) {
            [, , , refobj["ref".concat(ref[1])]] = ref;
          } else {
            [, , , , refobj["ref".concat(ref[1])]] = ref;
          }
        }
        if (ref[5] !== "") {
          if (ref[6]) {
            [, , , , , , refobj["ref".concat(ref[5])]] = ref;
          } else if (ref[7]) {
            [, , , , , , , refobj["ref".concat(ref[5])]] = ref;
          } else {
            [, , , , , , , , refobj["ref".concat(ref[5])]] = ref;
          }
        }
        CiteTB.mainRefList[CiteTB.mainRefList.length] = refobj;
      }
      CiteTB.refsLoaded = true;
      CiteTB.setupErrorCheck();
      CiteTB.setupNamedRefs();
    };
    CiteTB.parse = (text, callback) => {
      const postdata = {
        action: "parse",
        title: mw.config.get("wgPageName"),
        text,
        prop: "text",
        format: "json",
        formatversion: "2"
      };
      api.post(postdata).then(({
        parse
      }) => {
        const html = parse.text;
        callback(html);
      });
    };
    CiteTB.expandtemplates = (text, callback) => {
      const postdata = {
        action: "expandtemplates",
        title: mw.config.get("wgPageName"),
        text,
        format: "json",
        formatversion: "2"
      };
      api.post(postdata).then(({
        expandtemplates
      }) => {
        const restext = expandtemplates.wikitext;
        callback(restext);
      });
    };
    CiteTB.getPageText = (callback) => {
      const section = $body.find("input[name=wpSection]").val();
      if (section === "") {
        if (CiteTB.getOption("expandtemplates")) {
          CiteTB.expandtemplates($body.find("textarea[name=wpTextbox1]").wikiEditor("getContents").text(), callback);
        } else {
          callback($body.find("textarea[name=wpTextbox1]").wikiEditor("getContents").text());
        }
      } else {
        const postdata = {
          action: "query",
          prop: "revisions",
          rvprop: "content",
          pageids: mw.config.get("wgArticleId"),
          format: "json",
          formatversion: "2"
        };
        if (CiteTB.getOption("expandtemplates")) {
          postdata.rvexpandtemplates = "1";
        }
        api.get(postdata).then(({
          query
        }) => {
          const pagetext = query.pages[0].revisions[0].content;
          callback(pagetext);
        });
      }
    };
    CiteTB.safeDecodeURIComponent = (s) => {
      try {
        s = decodeURIComponent(s);
      } catch {
      }
      return s;
    };
    CiteTB.initAutofill = function() {
      var _$$attr;
      const elemid = (_$$attr = $(this).attr("id")) !== null && _$$attr !== void 0 ? _$$attr : "";
      const res = /^cite-auto-(.*?)-(.*)-(.*)$/.exec(elemid);
      if (!res) {
        return false;
      }
      const [, tem, field, autotype] = res;
      let id = $("#cite-".concat(tem, "-").concat(field)).val();
      if (!id) {
        return false;
      }
      let url = "https://citoid.qiuwen.net.cn/lookup.php?";
      id = CiteTB.safeDecodeURIComponent(id);
      url += "".concat(autotype, "=").concat(encodeURIComponent(id));
      url += "&template=".concat(encodeURIComponent(tem));
      const s = document.createElement("script");
      s.setAttribute("src", url);
      s.setAttribute("type", "text/javascript");
      document.head.append(s);
      return false;
    };
    CiteTB.autoFill = (data, template, type) => {
      const cl = "cite-".concat(template, "-");
      let i, j;
      let coauthors;
      $(".".concat(cl, "title")).val(data.title);
      if (data.authors && data.authors.length > 0) {
        if ($(".".concat(cl, "last-incr-1")).length > 0) {
          var _$$eq$attr;
          const classes = (_$$eq$attr = $(".".concat(cl, "last-incr-1")).eq(0).attr("class")) === null || _$$eq$attr === void 0 ? void 0 : _$$eq$attr.split(/\s+/);
          if (!classes) {
            return;
          }
          let group = false;
          const patt = /cite-[^-]*?-incr-(.*)/;
          var _iterator4 = _createForOfIteratorHelper(classes), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              const class_ = _step4.value;
              if (patt.exec(class_)) {
                [, group] = patt.exec(class_);
                break;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          $(".".concat(cl, "last-incr-1")).val(data.authors[0][0]);
          $(".".concat(cl, "first-incr-1")).val(data.authors[0][1]);
          const elemid = "#cite-incr-".concat(template, "-").concat(group);
          for (i = 2; i < data.authors.length + 1; i++) {
            $(elemid).trigger("click");
            $(".".concat(cl, "last-incr-").concat(i.toString())).val(data.authors[i - 1][0]);
            $(".".concat(cl, "first-incr-").concat(i.toString())).val(data.authors[i - 1][1]);
          }
        } else if ($(".".concat(cl, "author-incr-1")).length > 0) {
          var _$$eq$attr2;
          const classes = (_$$eq$attr2 = $(".".concat(cl, "author-incr-1")).eq(0).attr("class")) === null || _$$eq$attr2 === void 0 ? void 0 : _$$eq$attr2.split(/\s+/);
          if (!classes) {
            return;
          }
          let group = false;
          const patt = /cite-[^-]*?-incr-(.*)/;
          var _iterator5 = _createForOfIteratorHelper(classes), _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              const class_ = _step5.value;
              if (patt.exec(class_)) {
                [, group] = patt.exec(class_);
                break;
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          $(".".concat(cl, "author-incr-1")).val(data.authors[0].join(", "));
          const elemid = "#cite-incr-".concat(template, "-").concat(group);
          for (i = 2; i < data.authors.length + 1; i++) {
            $(elemid).trigger("click");
            $(".".concat(cl, "author-incr-").concat(i.toString())).val(data.authors[i - 1].join(", "));
          }
        } else if ($(".".concat(cl, "last1")).length > 0) {
          for (i = 0; data.authors && i < data.authors.length; i++) {
            if ($(".".concat(cl, "last").concat(i + 1)).length) {
              $(".".concat(cl, "last").concat(i + 1)).val(data.authors[i][0]);
              $(".".concat(cl, "first").concat(i + 1)).val(data.authors[i][1]);
            } else {
              coauthors = [];
              for (j = i; j < data.authors.length; j++) {
                coauthors[coauthors.length] = data.authors[j].join(", ");
              }
              $(".".concat(cl, "coauthors")).val(coauthors.join("; "));
              break;
            }
          }
        } else if ($(".".concat(cl, "author1")).length === 0) {
          const authors = [];
          for (i = 0; data.authors && i < data.authors.length; i++) {
            authors[authors.length] = data.authors[i].join(", ");
          }
          $(".".concat(cl, "authors")).val(authors.join("; "));
        } else {
          for (i = 0; data.authors && i < data.authors.length; i++) {
            if ($(".".concat(cl, "author").concat(i + 1)).length) {
              $(".".concat(cl, "author").concat(i + 1)).val(data.authors[i].join(", "));
            } else {
              coauthors = [];
              for (j = i; j < data.authors.length; j++) {
                coauthors[coauthors.length] = data.authors[j].join(", ");
              }
              $(".".concat(cl, "coauthors")).val(coauthors.join("; "));
              break;
            }
          }
        }
      }
      if (data.date) {
        try {
          const DT = new Date(data.date);
          if (/^\d{4}-\d{2}(-XX)?$/i.test(data.date)) {
            data.date = data.date.replace("-XX", "");
            $(".".concat(cl, "date")).val(CiteTB.formatDate(DT, false, true));
          } else if (/^\d{4}-\d{2}-\d{2}?/i.test(data.date)) {
            $(".".concat(cl, "date")).val(CiteTB.formatDate(DT, true, true));
          } else {
            $(".".concat(cl, "date")).val(data.date);
          }
        } catch {
        }
      } else {
        $(".".concat(cl, "date")).val(data.date);
      }
      switch (type) {
        case "pmid":
        case "doi":
          $(".".concat(cl, "journal")).val(data.journal);
          $(".".concat(cl, "volume")).val(data.volume);
          $(".".concat(cl, "issue")).val(data.issue);
          $(".".concat(cl, "pages")).val(data.pages);
          if (type === "pmid" && data.doi) {
            $(".".concat(cl, "doi")).val(data.doi);
          }
          break;
        case "isbn":
          $(".".concat(cl, "publisher")).val(data.publisher);
          $(".".concat(cl, "location")).val(data.location);
          $(".".concat(cl, "edition")).val(data.edition);
          break;
        case "url":
          $(".".concat(cl, "journal")).val(data.journal);
          $(".".concat(cl, "volume")).val(data.volume);
          $(".".concat(cl, "issue")).val(data.issue);
          $(".".concat(cl, "pages")).val(data.pages);
          $(".".concat(cl, "publisher")).val(data.publisher);
          $(".".concat(cl, "edition")).val(data.edition);
          $(".".concat(cl, "isbn")).val(data.isbn);
          $(".".concat(cl, "issn")).val(data.issn);
          $(".".concat(cl, "doi")).val(data.doi);
          if (data.language && data.language !== "en-US" && data.language !== "en-GB") {
            $(".".concat(cl, "language")).val(data.language);
          }
          $(".".concat(cl, "chapter")).val(data.chapter);
          break;
      }
    };
    CiteTB.incrementFields = function() {
      var _$$attr2;
      const template = CiteTB.getOpenTemplate();
      const [currentrow] = $(this).parents("tr");
      $(this).prev().css("width", "100%");
      $(this).detach();
      const elemid = (_$$attr2 = $(this).attr("id")) !== null && _$$attr2 !== void 0 ? _$$attr2 : "";
      const res = /^cite-incr-(.*?)-(.*)$/.exec(elemid);
      if (!res) {
        return;
      }
      const [, , group] = res;
      const increments = template.incrementables[group];
      const {
        fields
      } = increments;
      template.incrementables[group].val += 1;
      const trs = template.makeFormInner(fields, false);
      trs.reverse();
      var _iterator6 = _createForOfIteratorHelper(trs), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          const tr = _step6.value;
          $(currentrow).after(tr);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    };
    CiteTB.fillAccessdate = function() {
      var _$$attr3;
      const elemid = (_$$attr3 = $(this).attr("id")) !== null && _$$attr3 !== void 0 ? _$$attr3 : "";
      const res = /^cite-date-(.*?)-(.*)$/.exec(elemid);
      const [, id] = res;
      if (!res) {
        return;
      }
      const [, , field] = res;
      const DT = /* @__PURE__ */ new Date();
      const datestr = CiteTB.formatDate(DT);
      $("#cite-".concat(id, "-").concat(field)).val(datestr);
      return false;
    };
    CiteTB.formatDate = (DT, useday, usemonth) => {
      if (useday === void 0) {
        useday = true;
      }
      if (usemonth === void 0) {
        usemonth = true;
      }
      let datestr = CiteTB.getOption("date format");
      let zmonth = "";
      let month = DT.getUTCMonth() + 1;
      if (month < 10) {
        zmonth = "0".concat(month.toString());
      } else {
        zmonth = month.toString();
      }
      month = month.toString();
      let zdate = "";
      let date = DT.getUTCDate();
      if (date < 10) {
        zdate = "0".concat(date.toString());
      } else {
        zdate = date.toString();
      }
      date = date.toString();
      if (useday) {
        datestr = datestr.replace("<date>", date);
        datestr = datestr.replace("<zdate>", zdate);
      } else {
        datestr = datestr.replace("<date>", "");
        datestr = datestr.replace("<zdate>", "");
      }
      if (usemonth) {
        datestr = datestr.replace("<month>", month);
        datestr = datestr.replace("<zmonth>", zmonth);
        datestr = datestr.replace("<monthname>", CiteTB.getOption("months")[DT.getUTCMonth()]);
      } else {
        datestr = datestr.replace("<month>", "");
        datestr = datestr.replace("<zmonth>", "");
        datestr = datestr.replace("<monthname>", "");
      }
      datestr = datestr.replace("<year>", DT.getUTCFullYear().toString());
      return datestr.replace(/^[ /\-,.]*(.*?)[ /\-,.]*$/g, "$1");
    };
    CiteTB.setupNamedRefs = () => {
      const names = [];
      let i;
      for (i = 0; i < CiteTB.mainRefList.length; i++) {
        if (!CiteTB.mainRefList[i].shorttag && CiteTB.mainRefList[i].refname) {
          names[names.length] = CiteTB.mainRefList[i];
        }
      }
      const stuff = $("<div>");
      $body.find("#citetoolbar-namedrefs").html(stuff);
      if (names.length === 0) {
        stuff.html(getMessage("cite-no-namedrefs"));
      } else {
        stuff.html(getMessage("cite-namedrefs-intro"));
        const select = $("<select>").attr("id", "cite-namedref-select");
        select.append($("<option>").attr("value", "").text(getMessage("cite-named-refs-dropdown")));
        for (i = 0; i < names.length; i++) {
          select.append($("<option>").text(names[i].refname));
        }
        stuff.after(select);
        select.before("<br>");
        const prevlabel = $("<div>").attr("id", "cite-nref-preview-label").css("display", "none").html(getMessage("cite-raw-preview"));
        select.after(prevlabel);
        prevlabel.before("<br><br>");
        prevlabel.after('<div id="cite-namedref-preview" style="padding:0.5em; font-size:110%" />');
        const parselabel = $("<span>").attr("id", "cite-parsed-label").css("display", "none").html(getMessage("cite-parsed-label"));
        $body.find("#cite-namedref-preview").after(parselabel);
        parselabel.after('<div id="cite-namedref-parsed" style="padding-bottom:0.5em; font-size:110%" />');
        const link = $("<a>").attr({
          href: "#",
          id: "cite-nref-parse"
        }).css({
          margin: "0 1em 0 1em",
          display: "none",
          color: "#00008b"
        });
        link.html(getMessage("cite-form-parse"));
        $body.find("#cite-namedref-parsed").after(link);
        $body.find("#cite-namedref-select").on("change", CiteTB.namedRefSelectClick);
        $body.find("#cite-nref-parse").on("click", CiteTB.nrefParseClick);
      }
    };
    CiteTB.setupErrorCheck = () => {
      const form = $("<div>").attr("id", "cite-errorcheck-heading").html(getMessage("cite-errorcheck-heading"));
      const ul = $("<ul>").attr("id", "cite-errcheck-list");
      let test;
      for (const t in CiteTB.ErrorChecks) {
        if (Object.hasOwn(CiteTB.ErrorChecks, t)) {
          test = CiteTB.ErrorChecks[t];
          ul.append(test.getRow());
        }
      }
      form.append(ul);
      $body.find("#citetoolbar-errorcheck").html(form.html());
    };
    CiteTB.fillNrefPreview = (parsed) => {
      $body.find("#cite-parsed-label").show();
      $body.find("#cite-namedref-parsed").html(parsed);
    };
    CiteTB.nrefParseClick = () => {
      const choice = $body.find("#cite-namedref-select").val();
      if (choice === "") {
        $body.find("#cite-parsed-label").hide();
        $body.find("#cite-namedref-parsed").text("");
        return false;
      }
      $body.find("#cite-nref-parse").hide();
      for (let i = 0; i < CiteTB.mainRefList.length; i++) {
        if (!CiteTB.mainRefList[i].shorttag && CiteTB.mainRefList[i].refname === choice) {
          CiteTB.parse(CiteTB.mainRefList[i].content, CiteTB.fillNrefPreview);
          return false;
        }
      }
    };
    CiteTB.lastnamedrefchoice = "";
    CiteTB.namedRefSelectClick = () => {
      const choice = $body.find("#cite-namedref-select").val();
      if (CiteTB.lastnamedrefchoice === choice) {
        return;
      }
      CiteTB.lastnamedrefchoice = choice;
      $body.find("#cite-parsed-label").hide();
      $body.find("#cite-namedref-parsed").text("");
      if (choice === "") {
        $body.find("#cite-nref-preview-label").hide();
        $body.find("#cite-namedref-preview").text("");
        $body.find("#cite-nref-parse").hide();
        return;
      }
      for (let i = 0; i < CiteTB.mainRefList.length; i++) {
        if (!CiteTB.mainRefList[i].shorttag && CiteTB.mainRefList[i].refname === choice) {
          $body.find("#cite-nref-preview-label").show();
          $body.find("#cite-namedref-preview").text(CiteTB.mainRefList[i].content);
          if (CiteTB.getOption("autoparse")) {
            CiteTB.nrefParseClick();
          } else {
            $body.find("#cite-nref-parse").show();
          }
        }
      }
    };
    CiteTB.fillTemplatePreview = (text) => {
      const template = CiteTB.getOpenTemplate();
      const div = $("#citetoolbar-".concat(CiteTB.escStr(template.shortform)));
      div.find(".cite-prev-parsed-label").show();
      div.find(".cite-preview-parsed").html(text);
    };
    CiteTB.prevParseClick = () => {
      const ref = CiteTB.getRef(true, false);
      const template = CiteTB.getOpenTemplate();
      const div = $("#citetoolbar-".concat(CiteTB.escStr(template.shortform)));
      div.find(".cite-prev-parse").hide();
      CiteTB.parse(ref, CiteTB.fillTemplatePreview);
    };
    CiteTB.showHideExtra = () => {
      const template = CiteTB.getOpenTemplate();
      const div = $("#citetoolbar-".concat(CiteTB.escStr(template.shortform)));
      const setting = div.find(".cite-form-status").val();
      if (setting === "closed") {
        div.find(".cite-form-status").val("open");
        div.find(".cite-extra-fields").show(1, () => {
          div.find(".cite-extra-fields").css({
            width: "100%",
            "background-color": "transparent"
          });
        });
      } else {
        div.find(".cite-form-status").val("closed");
        div.find(".cite-extra-fields").hide();
      }
    };
    CiteTB.resetForm = () => {
      const template = CiteTB.getOpenTemplate();
      const div = $("#citetoolbar-".concat(CiteTB.escStr(template.shortform)));
      div.html(template.getForm());
    };
    CiteTB.getQuotedString = (s) => {
      const sq = /'/.test(s);
      const dq = /"/.test(s);
      if (!sq && !dq) {
        return '"'.concat(s, '"');
      } else if (!dq) {
        return '"'.concat(s, '"');
      } else if (!sq) {
        return "'".concat(s, "'");
      }
      s = s.replace(/"/g, "'");
      return '"'.concat(s, '"');
    };
    CiteTB.fixStr = (s) => {
      s = s.slice(0, 1).toUpperCase() + s.slice(1);
      s = s.replace("_", " ");
      return s;
    };
    CiteTB.escStr = (s) => {
      return s.replace(/\s/g, "-").replace(/'/g, "\\'").replace(/"/g, '\\"');
    };
    CiteTB.getOpenTemplate = () => {
      const dialogs = $body.find(".ui-dialog-content.ui-widget-content:visible");
      const templatename = $(dialogs[0]).find(".cite-template").val();
      return CiteTB.Templates[templatename];
    };
    CiteTB.displayErrors = (errors) => {
      $body.find("#cite-err-report").remove();
      const table = $("<table>").attr("id", "cite-err-report").css({
        width: "100%",
        border: "1px solid #A9A9A9",
        "background-color": "#FFEFD5",
        padding: "0.25em",
        "margin-top": "0.5em"
      });
      $body.find("#editpage-copywarn").before(table);
      let tr;
      const tr1 = $("<tr>").css("width", "100%");
      const th1 = $("<th>").css("width", "60%").css("font-size", "110%").html(getMessage("cite-err-report-heading"));
      const th2 = $("<th>").css("width", "40%").css("text-align", "right;");
      const im = $("<img>").attr("src", "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/5/55/Gtk-stop.svg/20px-Gtk-stop.svg.png");
      im.attr("alt", getMessage("cite-err-report-close")).attr("title", getMessage("cite-err-report-close"));
      const ad = $("<a>").attr({
        id: "cite-err-check-close",
        href: "#"
      });
      ad.append(im);
      th2.append(ad);
      tr1.append(th1).append(th2);
      table.append(tr1);
      $body.find("#cite-err-check-close").on("click", () => {
        $body.find("#cite-err-report").remove();
      });
      if (errors.length === 0) {
        tr = $("<tr>").css("width", "100%");
        const td = $("<td>").css("text-align", "center").css("margin", "1.5px").html(getMessage("cite-err-report-empty"));
        tr.append(td);
        table.append(tr);
        return;
      }
      for (const error in errors) {
        if (Object.hasOwn(errors, error)) {
          const err = errors[error];
          tr = $("<tr>").css("width", "100%");
          const td1 = $("<td>").css({
            border: "1px solid #000",
            margin: "1.5px",
            width: "60%"
          }).html(err.err);
          const td2 = $("<td>").css({
            border: "1px solid #000",
            margin: "1.5px",
            width: "40%"
          }).html(getMessage(err.msg));
          tr.append(td1).append(td2);
          table.append(tr);
        }
      }
    };
    refToolbarConfig();
  });
  return function refToolbar22() {
    return _ref.apply(this, arguments);
  };
}();
//! src/Edittools-refToolbar/modules/RefToolbarBase.js
var refToolbarBase = () => {
  var _window;
  (_window = window).CiteTB || (_window.CiteTB = {
    Templates: {},
    // All templates
    Options: {},
    // Global options
    UserOptions: {},
    // User options
    DefaultOptions: {},
    // Script defaults
    ErrorChecks: {}
    // Error check functions
  });
  window.CiteTemplate = class CiteTemplate {
    constructor(templatename, shortform, basicfields, expandedfields) {
      this.templatename = templatename;
      this.shortform = shortform;
      this.basic = basicfields;
      this.extra = expandedfields;
      this.incrementables = {};
      CiteTB.Templates[this.templatename] = this;
    }
    makeFormInner(fields, incrsetup) {
      const trs = [];
      const autofills = [];
      let tr;
      var _iterator7 = _createForOfIteratorHelper(fields.entries()), _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
          const [i, fieldobj] = _step7.value;
          let {
            field
          } = fieldobj;
          let labelfield = fieldobj.field;
          let ad = false;
          let im;
          if (incrsetup && fieldobj.increment_group) {
            field = fieldobj.field.replace("<N>", "1");
            labelfield = fieldobj.field.replace("<N>", "");
            if (this.incrementables[fieldobj.increment_group] && !this.incrementables[fieldobj.increment_group].setup) {
              this.incrementables[fieldobj.increment_group].fields[this.incrementables[fieldobj.increment_group].fields.length] = fieldobj;
            } else if (!this.incrementables[fieldobj.increment_group]) {
              this.incrementables[fieldobj.increment_group] = {
                fields: [fieldobj],
                val: 1,
                setup: false
              };
            } else if (this.incrementables[fieldobj.increment_group] && this.incrementables[fieldobj.increment_group].setup) {
              this.incrementables[fieldobj.increment_group].val = 1;
            }
          } else if (fieldobj.increment_group) {
            const incrval = this.incrementables[fieldobj.increment_group].val;
            field = fieldobj.field.replace("<N>", incrval.toString());
            labelfield = fieldobj.field.replace("<N>", "");
          }
          const autodateFields = CiteTB.getOption("autodate fields");
          if (autodateFields.includes(field)) {
            im = $("<img>").attr("src", "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/7/7b/Nuvola_apps_date.svg/20px-Nuvola_apps_date.svg.png");
            im.attr("alt", getMessage("cite-insert-date")).attr("title", getMessage("cite-insert-date"));
            ad = $("<a>").attr("href", "#");
            ad.append(im);
            ad.attr("id", "cite-date-".concat(CiteTB.escStr(this.shortform), "-").concat(field));
            $(document).on("click", "#cite-date-".concat(CiteTB.escStr(this.shortform), "-").concat(field), CiteTB.fillAccessdate);
          }
          if (fieldobj.autofillid) {
            const autotype = fieldobj.autofillid;
            im = $("<img>").attr("src", "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/1/17/System-search.svg/20px-System-search.svg.png");
            im.attr("alt", getMessage("cite-autofill-alt")).attr("title", getMessage("cite-autofill-alt"));
            ad = $("<a>").attr("href", "#");
            ad.append(im);
            ad.attr("id", "cite-auto-".concat(CiteTB.escStr(this.shortform), "-").concat(field, "-").concat(autotype));
            autofills[autofills.length] = "#cite-auto-".concat(CiteTB.escStr(this.shortform), "-").concat(field, "-").concat(autotype);
          }
          if (fieldobj.increment_button) {
            const incrtype = fieldobj.increment_group;
            im = $("<img>").attr("src", "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/b/b9/Nuvola_action_edit_add.svg/20px-Nuvola_action_edit_add.svg.png");
            im.attr("alt", getMessage("cite-increment-alt")).attr("title", getMessage("cite-increment-alt"));
            ad = $("<a>").attr("href", "#");
            ad.append(im);
            ad.attr("id", "cite-incr-".concat(CiteTB.escStr(this.shortform), "-").concat(incrtype));
          }
          let display = getMessage("cite-".concat(labelfield, "-label"));
          if (typeof display !== "string") {
            display = fieldobj.label ? CiteTB.fixStr(fieldobj.label) : CiteTB.fixStr(labelfield);
          }
          const tooltip = fieldobj.tooltip ? $("<abbr>").attr("title", getMessage(fieldobj.tooltip)).html($("<sup>").text("?")) : false;
          let input = "";
          input = $("<input>").attr({
            tabindex: "1",
            style: ad ? "width: 85%" : "width: 100%",
            type: "text"
          });
          input.attr("id", "cite-".concat(CiteTB.escStr(this.shortform), "-").concat(field));
          if (fieldobj.autofillprop) {
            let classname = "cite-".concat(CiteTB.escStr(this.shortform), "-").concat(fieldobj.autofillprop);
            if (fieldobj.increment_group) {
              input.addClass("cite-".concat(CiteTB.escStr(this.shortform), "-incr-").concat(fieldobj.increment_group));
              classname += "-".concat(this.incrementables[fieldobj.increment_group].val.toString());
            }
            input.addClass(classname);
          }
          const label = $("<label>");
          label.attr("for", "cite-".concat(CiteTB.escStr(this.shortform), "-").concat(field)).text(display);
          if (tooltip) {
            label.append(tooltip);
          }
          let style = "text-align: right; width: 20%;";
          if (i % 2 === 1) {
            style += " padding-left: 1em;";
          } else {
            tr = $("<tr>");
          }
          const td1 = $("<td>").addClass("cite-form-td").attr({
            style
          });
          td1.append(label);
          tr.append(td1);
          const td2 = $("<td>").addClass("cite-form-td").css("width", "30%");
          td2.append(input);
          if (ad) {
            td2.append(ad);
          }
          tr.append(td2);
          if (i % 2 === 0) {
            trs[trs.length] = tr;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      let needsetup = false;
      for (const g in this.incrementables) {
        if (!this.incrementables[g].setup) {
          needsetup = true;
          $(document).on("click", "#cite-incr-".concat(CiteTB.escStr(this.shortform), "-").concat(g), CiteTB.incrementFields);
          this.incrementables[g].setup = true;
        }
      }
      if (needsetup || Object.keys(this.incrementables).length === 0) {
        var _iterator8 = _createForOfIteratorHelper(autofills), _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
            const autofill = _step8.value;
            $(document).on("click", autofill, CiteTB.initAutofill);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
      return trs;
    }
    // gives a little bit of HTML so the open form can be identified
    getInitial() {
      const hidden = $("<input>").addClass("cite-template").attr({
        type: "hidden",
        value: this.templatename
      });
      return hidden;
    }
    // makes the form used in the dialog boxes
    getForm() {
      const main = $("<div>").addClass("cite-form-container");
      const form1 = $("<table>").addClass("cite-basic-fields").css({
        width: "100%",
        "background-color": "transparent"
      });
      let trs = this.makeFormInner(this.basic, true);
      var _iterator9 = _createForOfIteratorHelper(trs), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          const tr = _step9.value;
          form1.append(tr);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      const form2 = $("<table>").addClass("cite-extra-fields").css({
        width: "100%",
        "background-color": "transparent",
        display: "none"
      });
      trs = this.makeFormInner(this.extra, true);
      var _iterator10 = _createForOfIteratorHelper(trs), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          const tr = _step10.value;
          form2.append(tr);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      main.append(form1).append(form2);
      const form3 = $("<table>").addClass("cite-other-fields").css({
        width: "100%",
        "background-color": "transparent",
        "padding-top": "1em"
      });
      const $tr = $("<tr>");
      const $td1 = $("<td>").addClass("cite-form-td").css({
        "text-align": "right",
        width: "20%"
      });
      const $label1 = $("<label>");
      $label1.attr("for", "cite-".concat(CiteTB.escStr(this.shortform), "-name")).text(getMessage("cite-name-label"));
      $td1.append($label1);
      const td2 = $("<td>").addClass("cite-form-td").css("width", "30%");
      const input1 = $("<input>").attr({
        tabindex: "1",
        style: "width: 100%",
        type: "text"
      });
      input1.attr("id", "cite-".concat(CiteTB.escStr(this.shortform), "-name"));
      td2.append(input1);
      const td3 = $("<td>").addClass("cite-form-td").css({
        "text-align": "right",
        "padding-left": "1em",
        width: "20%"
      });
      const label2 = $("<label>");
      label2.attr("for", "cite-".concat(CiteTB.escStr(this.shortform), "-group")).text(getMessage("cite-group-label"));
      td3.append(label2);
      const td4 = $("<td>").addClass("cite-form-td").css("width", "30%");
      const input2 = $("<input>").attr({
        tabindex: "1",
        style: "width: 100%",
        type: "text"
      });
      input2.attr("id", "cite-".concat(CiteTB.escStr(this.shortform), "-group"));
      td4.append(input2);
      $tr.append($td1).append(td2).append(td3).append(td4);
      form3.append($tr);
      main.append(form3);
      const extras = $("<div>");
      extras.append($("<input>").addClass("cite-form-status").attr({
        type: "hidden",
        value: "closed"
      }));
      const hidden = $("<input>").addClass("cite-template").attr("type", "hidden");
      hidden.val(this.templatename);
      extras.append(hidden);
      const span1 = $("<span>").addClass("cite-preview-label").css("display", "none");
      span1.text(getMessage("cite-raw-preview"));
      extras.append(span1).append($("<div>").addClass("cite-ref-preview").css({
        padding: "0.5em",
        "font-size": "110%"
      }));
      const span2 = $("<span>").addClass("cite-prev-parsed-label").css("display", "none");
      span2.text(getMessage("cite-parsed-label"));
      extras.append(span2).append($("<div>").addClass("cite-preview-parsed").css({
        "padding-bottom": "0.5em",
        "font-size": "110%"
      }));
      const link = $("<a>").addClass("cite-prev-parse").attr("href", "#").css({
        margin: "0 1em",
        display: "none",
        color: "#00008b"
      });
      link.text(getMessage("cite-form-parse"));
      extras.append(link);
      main.append(extras);
      return main;
    }
  };
  window.CiteErrorCheck = class CiteErrorCheck {
    constructor(obj) {
      this.obj = obj;
      CiteTB.ErrorChecks[this.obj.testname] = this;
    }
    run() {
      let errors = [];
      switch (this.obj.type) {
        case "refcheck":
          CiteTB.loadRefs();
          for (let i = 0; i < CiteTB.mainRefList.length; i++) {
            const e = this.obj.func(CiteTB.mainRefList[i]);
            if (e) {
              errors[errors.length] = e;
            }
          }
          break;
        case "reflist":
          CiteTB.loadRefs();
          errors = this.obj.func(CiteTB.mainRefList);
          break;
        case "search": {
          const {
            func
          } = this.obj;
          CiteTB.getPageText((text) => {
            errors = func(text);
          });
          break;
        }
      }
      return errors;
    }
    getRow() {
      const row = $("<li>");
      const check = $("<input>").attr({
        type: "checkbox",
        name: "cite-err-test"
      });
      check.attr("value", this.obj.testname);
      const label = $("<label>").html(getMessage(this.obj.desc));
      label.attr("for", this.obj.testname);
      row.append(check).append(" &ndash; ").append(label);
      return row;
    }
  };
  $(document).find("head").trigger("reftoolbarbase");
};
//! src/Edittools-refToolbar/modules/messages.ts
var refToolbarMesages = () => {
  if (WG_USER_LANGUAGE === "en") {
    return;
  }
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(WG_USER_LANGUAGE)) {
    mw.messages.set({
      "cite-section-label": "引用",
      "cite-template-list": "模板",
      "cite-named-refs-label": "同名文獻",
      "cite-named-refs-title": "插入同名文獻",
      "cite-named-refs-button": "已命名參考文獻",
      "cite-named-refs-dropdown": "同名文獻",
      // Used on the top of the named refs list dropsown
      "cite-errorcheck-label": "錯誤檢查",
      "cite-errorcheck-button": "檢查錯誤",
      "cite-dialog-base": "引用",
      "cite-form-submit": "插入",
      "cite-form-showhide": "顯示/隱藏額外區域",
      "cite-no-namedrefs": "在本頁找不到任何同名文獻",
      "cite-namedrefs-intro": "從列出的參考文獻目錄中選擇一個名字。點擊「插入」插入一個參考文獻到文本中。",
      "cite-raw-preview": "Wikitext:",
      "cite-parsed-label": "解析後的wikitext:",
      "cite-form-parse": "顯示解析後的預覽",
      "cite-refpreview": "預覽",
      "cite-name-label": "ref名",
      "cite-group-label": "ref組",
      "cite-errorcheck-submit": "檢查",
      "cite-errorcheck-heading": "檢查下列錯誤：",
      "cite-error-unclosed": "未關閉<tt>&lt;ref&gt;</tt>標記",
      "cite-error-samecontent": "有相同內容的參考文獻",
      "cite-error-templates": '參考文獻未使用<a href="'.concat(mw.util.getUrl("Category:引用模板"), '">引用模板</a>'),
      "cite-error-repeated": "多個參考文獻有相同名稱",
      "cite-error-undef": "有未定義的同名參考文獻在使用",
      "cite-error-samecontent-msg": "多個文獻含有相同內容: $1",
      "cite-error-repeated-msg": "給多個參考文獻命名: 「$1」",
      "cite-error-templates-msg": "沒有使用模板: $1",
      "cite-form-reset": "重設表單",
      "cite-loading": "載入數據",
      // Shown while pagetext is being downloaded from the API
      "cite-insert-date": "插入當前日期",
      // Alt/title text for "insert date" icon
      "cite-err-report-heading": "引用錯誤報告",
      // Heading for error report table
      "cite-err-report-close": "關閉",
      // Alt/title text for "close" icon on error report
      "cite-err-report-empty": "未找到錯誤",
      // Message displayed in the error report list if there are no errors
      "cite-autofill-alt": "自動填充",
      // Alt text for autofill button image
      "cite-ref-tooltip": "錨點的標識符（使該引用可以成為內部連結的目標）",
      "cite-postscript-tooltip": "如果設定這一參數，則覆蓋使用句點終止引文的默認行爲",
      "cite-dialog-web": "網頁引用",
      "cite-dialog-news": "新聞引用",
      "cite-dialog-book": "書籍引用",
      "cite-dialog-journal": "期刊引用",
      "cite-dialog-conference": "會議引用",
      "cite-dialog-encyclopedia": "百科全書引用",
      "cite-author-label": "作者",
      "cite-title-label": "標題",
      "cite-url-label": "網址",
      "cite-website-label": "網站名稱",
      "cite-work-label": "報紙或雜誌",
      "cite-agency-label": "通訊社",
      "cite-publisher-label": "出版者",
      "cite-accessdate-label": "存取日期",
      "cite-last-label": "姓",
      "cite-first-label": "名",
      "cite-authorlink-label": "作者條目",
      "cite-coauthors-label": "其他作者",
      "cite-location-label": "出版地",
      "cite-page-label": "所在頁",
      "cite-pages-label": "頁範圍",
      "cite-at-label": "書內部分",
      "cite-language-label": "語言",
      "cite-format-label": "文件格式",
      "cite-doi-label": "DOI",
      "cite-date-label": "日期",
      "cite-month-label": "月份",
      "cite-year-label": "年份",
      "cite-quote-label": "摘錄",
      "cite-newspaper-label": "新聞媒體",
      "cite-author2-label": "第2作者",
      "cite-author3-label": "第3作者",
      "cite-author4-label": "第4作者",
      "cite-author5-label": "第5作者",
      "cite-agency": "通訊社",
      "cite-issn-label": "ISSN",
      "cite-oclc-label": "OCLC",
      "cite-bibcode-label": "Bibcode",
      "cite-isbn-label": "ISBN",
      "cite-others-label": "譯者",
      "cite-edition-label": "版本",
      "cite-trans-title-label": "翻譯後標題",
      "cite-ref-label": "錨點標識符",
      "cite-postscript-label": "结尾符",
      "cite-series-label": "系列",
      "cite-volume-label": "卷",
      "cite-unified-label": "統一書號",
      "cite-chapter-label": "章節",
      "cite-journal-label": "雜誌/期刊",
      "cite-issue-label": "期",
      "cite-pmid-label": "PMID",
      "cite-editor-label": "編輯",
      "cite-editor1-first-label": "編輯名",
      "cite-editor1-last-label": "編輯姓",
      "cite-editor1-link-label": "編輯條目",
      "cite-editor-first-label": "編輯名",
      "cite-editor-last-label": "編輯姓",
      "cite-editor-link-label": "編輯條目",
      "cite-pmc-label": "PMC",
      "cite-id-label": "ID",
      "cite-laysummary-label": "簡明摘要",
      "cite-laysource-label": "簡明摘要來源",
      "cite-laydate-label": "簡明摘要日期",
      "cite-conference-label": "會議名稱",
      "cite-conferenceurl-label": "會議網址",
      "cite-booktitle-label": "論文集",
      "cite-encyclopedia-label": "百科全書名",
      "cite-authorlink-tooltip": "若該作者有條目，填寫條目名稱",
      "cite-at-tooltip": "內容在來源中的位置（當按頁碼引用不適當時）",
      "cite-accessdate-tooltip": "訪問這個引用來源時的日期",
      "cite-id-tooltip": "其他的文章編號",
      "cite-samecontent-desc": "檢查含有相同內容的多個參考文獻",
      "cite-samecontent-error": "多個參考文獻包含有相同內容",
      "cite-repeated-desc": "使用相同名字的多個參考文獻",
      "cite-repeated-error": "多個參考文獻使用了相同名字",
      "cite-undefined-desc": "未定義的參考文獻",
      "cite-undefined-error": "一個已命名的參考文獻已經使用但是沒有定義",
      "cite-work-tooltip": "刊登該作品的出版物的名稱。請不要使用斜體",
      "cite-newspaper-tooltip": "刊登該新聞的出版物名稱",
      "cite-series-tooltip": "當書籍是一系列出版品中的其中一部份時使用",
      "cite-unified-tooltip": "1980年代之前中國所使用的書籍編號",
      "cite-laysummary-tooltip": "該文獻相關的新聞報道的URL",
      "cite-laysource-tooltip": "該文獻相關的新聞報道的出處"
    });
  } else {
    mw.messages.set({
      "cite-section-label": "引用",
      "cite-template-list": "模板",
      "cite-named-refs-label": "同名文献",
      "cite-named-refs-title": "插入同名文献",
      "cite-named-refs-button": "已命名参考文献",
      "cite-named-refs-dropdown": "同名文献",
      // Used on the top of the named refs list dropsown
      "cite-errorcheck-label": "错误检查",
      "cite-errorcheck-button": "检查错误",
      "cite-dialog-base": "引用",
      "cite-form-submit": "插入",
      "cite-form-showhide": "显示/隐藏额外区域",
      "cite-no-namedrefs": "在本页找不到任何同名文献",
      "cite-namedrefs-intro": "从列出的参考文献目录中选择一个名字。点击“插入”插入一个参考文献到文本中。",
      "cite-raw-preview": "Wikitext:",
      "cite-parsed-label": "解析后的wikitext:",
      "cite-form-parse": "显示解析后的预览",
      "cite-refpreview": "预览",
      "cite-name-label": "ref名",
      "cite-group-label": "ref组",
      "cite-errorcheck-submit": "检查",
      "cite-errorcheck-heading": "检查下列错误：",
      "cite-error-unclosed": "未关闭<tt>&lt;ref&gt;</tt>标记",
      "cite-error-samecontent": "有相同内容的参考文献",
      "cite-error-templates": '参考文献未使用<a href="'.concat(mw.util.getUrl("Category:引用模板"), '">引用模板</a>'),
      "cite-error-repeated": "多个参考文献有相同名称",
      "cite-error-undef": "有未定义的同名参考文献在使用",
      "cite-error-samecontent-msg": "多个文献含有相同内容: $1",
      "cite-error-repeated-msg": "给多个参考文献命名: “$1”",
      "cite-error-templates-msg": "没有使用模板: $1",
      "cite-form-reset": "重设表单",
      "cite-loading": "载入数据",
      // Shown while pagetext is being downloaded from the API
      "cite-insert-date": "插入当前日期",
      // Alt/title text for "insert date" icon
      "cite-err-report-heading": "引用错误报告",
      // Heading for error report table
      "cite-err-report-close": "关闭",
      // Alt/title text for "close" icon on error report
      "cite-err-report-empty": "未找到错误",
      // Message displayed in the error report list if there are no errors
      "cite-autofill-alt": "自动填充",
      // Alt text for autofill button image
      "cite-ref-tooltip": "锚点的标识符（使该引用可以成为内部链接的目标）",
      "cite-postscript-tooltip": "如果设定这一参数，则覆盖使用句点终止引文的默认行为",
      "cite-dialog-web": "网页引用",
      "cite-dialog-news": "新闻引用",
      "cite-dialog-book": "书籍引用",
      "cite-dialog-journal": "期刊引用",
      "cite-dialog-conference": "会议引用",
      "cite-dialog-encyclopedia": "百科全书引用",
      "cite-author-label": "作者",
      "cite-title-label": "标题",
      "cite-url-label": "网址",
      "cite-website-label": "网站名称",
      "cite-work-label": "报纸或杂志",
      "cite-agency-label": "通讯社",
      "cite-publisher-label": "出版者",
      "cite-accessdate-label": "访问日期",
      "cite-last-label": "姓",
      "cite-first-label": "名",
      "cite-authorlink-label": "作者条目",
      "cite-coauthors-label": "其他作者",
      "cite-location-label": "出版地",
      "cite-page-label": "所在页",
      "cite-pages-label": "页范围",
      "cite-at-label": "书内部分",
      "cite-language-label": "语言",
      "cite-format-label": "文档格式",
      "cite-doi-label": "DOI",
      "cite-date-label": "日期",
      "cite-month-label": "月份",
      "cite-year-label": "年份",
      "cite-quote-label": "摘录",
      "cite-newspaper-label": "新闻媒体",
      "cite-author2-label": "第2作者",
      "cite-author3-label": "第3作者",
      "cite-author4-label": "第4作者",
      "cite-author5-label": "第5作者",
      "cite-agency": "通讯社",
      "cite-issn-label": "ISSN",
      "cite-oclc-label": "OCLC",
      "cite-bibcode-label": "Bibcode",
      "cite-isbn-label": "ISBN",
      "cite-others-label": "译者",
      "cite-edition-label": "版本",
      "cite-trans-title-label": "翻译后标题",
      "cite-ref-label": "锚点标识符",
      "cite-postscript-label": "结尾符",
      "cite-series-label": "系列",
      "cite-volume-label": "卷",
      "cite-unified-label": "统一书号",
      "cite-chapter-label": "章节",
      "cite-journal-label": "杂志/期刊",
      "cite-issue-label": "期",
      "cite-pmid-label": "PMID",
      "cite-editor-label": "编辑",
      "cite-editor1-first-label": "编辑名",
      "cite-editor1-last-label": "编辑姓",
      "cite-editor1-link-label": "编辑条目",
      "cite-editor-first-label": "编辑名",
      "cite-editor-last-label": "编辑姓",
      "cite-editor-link-label": "编辑条目",
      "cite-pmc-label": "PMC",
      "cite-id-label": "ID",
      "cite-laysummary-label": "简明摘要",
      "cite-laysource-label": "简明摘要来源",
      "cite-laydate-label": "简明摘要日期",
      "cite-conference-label": "会议名称",
      "cite-conferenceurl-label": "会议网址",
      "cite-booktitle-label": "论文集",
      "cite-encyclopedia-label": "百科全书名",
      "cite-authorlink-tooltip": "若该作者有条目，填写条目名称",
      "cite-at-tooltip": "内容在来源中的位置（当按页码引用不适当时）",
      "cite-accessdate-tooltip": "访问这个引用来源时的日期",
      "cite-id-tooltip": "其他的文章编号",
      "cite-samecontent-desc": "检查含有相同内容的多个参考文献",
      "cite-samecontent-error": "多个参考文献包含有相同内容",
      "cite-repeated-desc": "使用相同名字的多个参考文献",
      "cite-repeated-error": "多个参考文献使用了相同名字",
      "cite-undefined-desc": "未定义的参考文献",
      "cite-undefined-error": "一个已命名的参考文献已经使用但是没有定义",
      "cite-work-tooltip": "刊登该作品的出版物的名称。请不要使用斜体",
      "cite-newspaper-tooltip": "刊登該新聞的出版物名称",
      "cite-series-tooltip": "当书籍是一系列出版品中的其中一部份时使用",
      "cite-unified-tooltip": "1980年代之前中国所使用的书籍编号",
      "cite-laysummary-tooltip": "该文献相关的新闻报道的URL",
      "cite-laysource-tooltip": "该文献相关的新闻报道的出处"
    });
  }
};
//! src/Edittools-refToolbar/Edittools-refToolbar.ts
(() => {
  if (mw.config.get("wgRefToolbarInstalled")) {
    return;
  }
  if (!IS_WG_EDIT_OR_SUBMIT_ACTION || WG_PAGE_CONTENT_MODEL !== "wikitext") {
    return;
  }
  if (!mw.user.options.get("usebetatoolbar")) {
    return;
  }
  if (document.querySelector("textarea[name=wpTextbox1][readonly]")) {
    return;
  }
  refToolbarMesages();
  refToolbarBase();
  void refToolbar2();
  mw.config.set("wgRefToolbarInstalled", true);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXR0b29scy1yZWZUb29sYmFyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXR0b29scy1yZWZUb29sYmFyL21vZHVsZXMvUmVmVG9vbGJhcjIuMC5qcyIsICJzcmMvRWRpdHRvb2xzLXJlZlRvb2xiYXIvbW9kdWxlcy91dGlsL2dldE1lc3NhZ2UudHMiLCAic3JjL0VkaXR0b29scy1yZWZUb29sYmFyL21vZHVsZXMvUmVmVG9vbGJhckNvbmZpZy5qcyIsICJzcmMvRWRpdHRvb2xzLXJlZlRvb2xiYXIvbW9kdWxlcy9SZWZUb29sYmFyQmFzZS5qcyIsICJzcmMvRWRpdHRvb2xzLXJlZlRvb2xiYXIvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvRWRpdHRvb2xzLXJlZlRvb2xiYXIvRWRpdHRvb2xzLXJlZlRvb2xiYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuY29uc3QgV0dfUEFHRV9DT05URU5UX01PREVMOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKTtcbmNvbnN0IFdHX1VTRVJfTEFOR1VBR0U6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyk7XG5cbmNvbnN0IElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTjogYm9vbGVhbiA9IFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhXR19BQ1RJT04pO1xuXG5leHBvcnQge1dHX1BBR0VfQ09OVEVOVF9NT0RFTCwgV0dfVVNFUl9MQU5HVUFHRSwgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OfTtcbiIsICIvKiBnbG9iYWwgQ2l0ZVRCICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnQgKi9cbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge2dldEJvZHksIGluaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi91dGlsL2dldE1lc3NhZ2UnO1xuaW1wb3J0IHtyZWZUb29sYmFyQ29uZmlnfSBmcm9tICcuL1JlZlRvb2xiYXJDb25maWcnO1xuXG4vLyBUT0RPOiBtYWtlIGF1dG9kYXRlIGFuIG9wdGlvbiBpbiB0aGUgQ2l0ZVRlbXBsYXRlIG9iamVjdCwgbm90IGEgcHJlZmVyZW5jZVxuY29uc3QgcmVmVG9vbGJhcjIgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gYXdhaXQgZ2V0Qm9keSgpO1xuXHRjb25zdCBhcGkgPSBpbml0TXdBcGkoJ1JlZlRvb2xiYXIvMi4wJyk7XG5cblx0Ly8gRGVmYXVsdCBvcHRpb25zLCB0aGVzZSBtYWlubHkgZXhpc3Qgc28gdGhlIHNjcmlwdCB3b24ndCBicmVhayBpZiBhIG5ldyBvcHRpb24gaXMgYWRkZWRcblx0Q2l0ZVRCLkRlZmF1bHRPcHRpb25zID0ge1xuXHRcdCdkYXRlIGZvcm1hdCc6ICc8eWVhcj4tPHptb250aD4tPHpkYXRlPicsXG5cdFx0J2F1dG9kYXRlIGZpZWxkcyc6IFtdLFxuXHRcdG1vbnRoczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuXHRcdG1vZGFsOiB0cnVlLFxuXHRcdGF1dG9wYXJzZTogZmFsc2UsXG5cdFx0ZXhwYW5kdGVtcGxhdGVzOiBmYWxzZSxcblx0fTtcblxuXHQvLyBHZXQgYW4gb3B0aW9uIC0gdXNlciBzZXR0aW5ncyBvdmVycmlkZSBnbG9iYWwgd2hpY2ggb3ZlcnJpZGUgZGVmYXVsdHNcblx0Q2l0ZVRCLmdldE9wdGlvbiA9IChvcHQpID0+IHtcblx0XHRpZiAoQ2l0ZVRCLlVzZXJPcHRpb25zW29wdF0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIENpdGVUQi5Vc2VyT3B0aW9uc1tvcHRdO1xuXHRcdH0gZWxzZSBpZiAoQ2l0ZVRCLk9wdGlvbnNbb3B0XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gQ2l0ZVRCLk9wdGlvbnNbb3B0XTtcblx0XHR9XG5cdFx0cmV0dXJuIENpdGVUQi5EZWZhdWx0T3B0aW9uc1tvcHRdO1xuXHR9O1xuXG5cdENpdGVUQi5pbml0ID0gKCkgPT4ge1xuXHRcdC8qIE1haW4gc3R1ZmYsIGJ1aWxkIHRoZSBhY3R1YWwgdG9vbGJhciBzdHJ1Y3R1cmVcblx0XHQgKiAxLiBnZXQgdGhlIHRlbXBsYXRlIGxpc3QsIG1ha2UgdGhlIGRyb3Bkb3duIGxpc3QgYW5kIHNldCB1cCB0aGUgdGVtcGxhdGUgZGlhbG9nIGJveGVzXG5cdFx0ICogMi4gYWN0dWFsbHkgYnVpbGQgdGhlIHRvb2xiYXI6XG5cdFx0ICogLSBBIHNlY3Rpb24gZm9yIGNpdGVzXG5cdFx0ICogLS0gZHJvcGRvd24gZm9yIHRoZSB0ZW1wbGF0ZXMgKHByZXZpb3VzbHkgZGVmaW5lZClcblx0XHQgKiAtLSBidXR0b24gZm9yIG5hbWVkIHJlZnMgd2l0aCBhIGRpYWxvZyBib3hcblx0XHQgKiAtLSBidXR0b24gZm9yIGVycm9yY2hlY2tcblx0XHQgKiAzLiBhZGQgdGhlIHdob2xlIHRoaW5nIHRvIHRoZSBtYWluIHRvb2xiYXJcblx0XHQgKi9cblxuXHRcdCQoZG9jdW1lbnQpLmZpbmQoJ2hlYWQnKS50cmlnZ2VyKCdyZWZ0b29sYmFyYmFzZScpO1xuXHRcdGNvbnN0ICR0YXJnZXQgPSAkYm9keS5maW5kKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJyk7XG5cdFx0Y29uc3QgdGVtbGlzdCA9IHt9O1xuXHRcdGZvciAoY29uc3QgdCBpbiBDaXRlVEIuVGVtcGxhdGVzKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093bihDaXRlVEIuVGVtcGxhdGVzLCB0KSkge1xuXHRcdFx0XHRjb25zdCB0ZW0gPSBDaXRlVEIuVGVtcGxhdGVzW3RdO1xuXHRcdFx0XHRjb25zdCBzZm9ybSA9IENpdGVUQi5lc2NTdHIodGVtLnNob3J0Zm9ybSk7XG5cdFx0XHRcdGNvbnN0IGFjdGlvbm9iaiA9IHtcblx0XHRcdFx0XHR0eXBlOiAnZGlhbG9nJyxcblx0XHRcdFx0XHRtb2R1bGU6IGBjaXRlLWRpYWxvZy0ke3Nmb3JtfWAsXG5cdFx0XHRcdH07XG5cdFx0XHRcdGNvbnN0IGRpYWxvZ29iaiA9IHt9O1xuXHRcdFx0XHRkaWFsb2dvYmpbYGNpdGUtZGlhbG9nLSR7c2Zvcm19YF0gPSB7XG5cdFx0XHRcdFx0cmVzaXplbWU6IGZhbHNlLFxuXHRcdFx0XHRcdHRpdGxlTXNnOiBgY2l0ZS1kaWFsb2ctJHtzZm9ybX1gLFxuXHRcdFx0XHRcdGlkOiBgY2l0ZXRvb2xiYXItJHtzZm9ybX1gLFxuXHRcdFx0XHRcdGluaXQ6ICgpID0+IHt9LFxuXHRcdFx0XHRcdGh0bWw6IHRlbS5nZXRJbml0aWFsKCksXG5cdFx0XHRcdFx0ZGlhbG9nOiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogTWF0aC5yb3VuZCgkKHdpbmRvdykud2lkdGgoKSA/PyAwICogMC44KSxcblx0XHRcdFx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykuaHRtbChDaXRlVEIuZ2V0T3BlblRlbXBsYXRlKCkuZ2V0Rm9ybSgpKTtcblx0XHRcdFx0XHRcdFx0LyoqIEBwYXJhbSB7alF1ZXJ5LkV2ZW50fSBlICovXG5cdFx0XHRcdFx0XHRcdCRib2R5LmZpbmQoJy5jaXRlLXByZXYtcGFyc2UnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRDaXRlVEIucHJldlBhcnNlQ2xpY2soKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0YnV0dG9uczoge1xuXHRcdFx0XHRcdFx0XHQnY2l0ZS1mb3JtLXN1Ym1pdCcoKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgcmVmID0gQ2l0ZVRCLmdldFJlZihmYWxzZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0XHRcdFx0XHRcdFx0JC53aWtpRWRpdG9yLm1vZHVsZXMudG9vbGJhci5mbi5kb0FjdGlvbihcblx0XHRcdFx0XHRcdFx0XHRcdCQodGhpcykuZGF0YSgnY29udGV4dCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogcmVmLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnY2l0ZS1mb3JtLXNob3doaWRlJzogQ2l0ZVRCLnNob3dIaWRlRXh0cmEsXG5cdFx0XHRcdFx0XHRcdCdjaXRlLXJlZnByZXZpZXcnKCkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHJlZiA9IENpdGVUQi5nZXRSZWYoZmFsc2UsIGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0ZW1wbGF0ZSA9IENpdGVUQi5nZXRPcGVuVGVtcGxhdGUoKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBkaXYgPSAkKGAjY2l0ZXRvb2xiYXItJHtDaXRlVEIuZXNjU3RyKHRlbXBsYXRlLnNob3J0Zm9ybSl9YCk7XG5cdFx0XHRcdFx0XHRcdFx0ZGl2LmZpbmQoJy5jaXRlLXByZXZpZXctbGFiZWwnKS5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdFx0ZGl2LmZpbmQoJy5jaXRlLXJlZi1wcmV2aWV3JykudGV4dChyZWYpLnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoQ2l0ZVRCLmdldE9wdGlvbignYXV0b3BhcnNlJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdENpdGVUQi5wcmV2UGFyc2VDbGljaygpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXYuZmluZCgnLmNpdGUtcHJldi1wYXJzZScpLnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHRcdGRpdi5maW5kKCcuY2l0ZS1wcmV2LXBhcnNlZC1sYWJlbCcpLmhpZGUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdGRpdi5maW5kKCcuY2l0ZS1wcmV2aWV3LXBhcnNlZCcpLmh0bWwoJycpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dpa2llZGl0b3ItdG9vbGJhci10b29sLWxpbmstY2FuY2VsJygpIHtcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J2NpdGUtZm9ybS1yZXNldCcoKSB7XG5cdFx0XHRcdFx0XHRcdFx0Q2l0ZVRCLnJlc2V0Rm9ybSgpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdCR0YXJnZXQud2lraUVkaXRvcignYWRkRGlhbG9nJywgZGlhbG9nb2JqKTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogVHlwZUVycm9yOiByYW5nZSBpcyBudWxsICovXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gaWYgKCFDaXRlVEIuZ2V0T3B0aW9uKCdtb2RhbCcpKSB7XG5cdFx0XHRcdC8vIFx0JGJvZHkuZmluZChgI2NpdGV0b29sYmFyLSR7c2Zvcm19YCkuZGlhbG9nKCdvcHRpb24nLCAnbW9kYWwnLCBmYWxzZSk7XG5cdFx0XHRcdC8vIH1cblx0XHRcdFx0dGVtbGlzdFtzZm9ybV0gPSB7XG5cdFx0XHRcdFx0bGFiZWw6IHRlbS50ZW1wbGF0ZW5hbWUsXG5cdFx0XHRcdFx0YWN0aW9uOiBhY3Rpb25vYmosXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVmc2VjdGlvbiA9IHtcblx0XHRcdHNlY3Rpb25zOiB7XG5cdFx0XHRcdGNpdGVzOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3Rvb2xiYXInLFxuXHRcdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdjaXRlLXNlY3Rpb24tbGFiZWwnKSxcblx0XHRcdFx0XHRncm91cHM6IHtcblx0XHRcdFx0XHRcdHRlbXBsYXRlOiB7XG5cdFx0XHRcdFx0XHRcdHRvb2xzOiB7XG5cdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ2NpdGUtdGVtcGxhdGUtbGlzdCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdDogdGVtbGlzdCxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG5hbWVkcmVmczoge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnY2l0ZS1uYW1lZC1yZWZzLWxhYmVsJyksXG5cdFx0XHRcdFx0XHRcdHRvb2xzOiB7XG5cdFx0XHRcdFx0XHRcdFx0bnJlZnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdkaWFsb2cnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6ICdjaXRlLXRvb2xiYXItbmFtZWRyZWZzJyxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi9iL2JlL051dm9sYV9jbGlwYm9hcmRfbGluZWQuc3ZnLzIycHgtTnV2b2xhX2NsaXBib2FyZF9saW5lZC5zdmcucG5nJyxcblx0XHRcdFx0XHRcdFx0XHRcdHNlY3Rpb246ICdjaXRlcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRncm91cDogJ25hbWVkcmVmcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnY2l0ZS1uYW1lZC1yZWZzLWJ1dHRvbicpLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZXJyb3JjaGVjazoge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnY2l0ZS1lcnJvcmNoZWNrLWxhYmVsJyksXG5cdFx0XHRcdFx0XHRcdHRvb2xzOiB7XG5cdFx0XHRcdFx0XHRcdFx0ZWNoZWNrOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZGlhbG9nJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiAnY2l0ZS10b29sYmFyLWVycm9yY2hlY2snLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iL2EvYTMvTnV2b2xhX2FwcHNfa29yZ2FuaXplci1OTy5wbmcvMjJweC1OdXZvbGFfYXBwc19rb3JnYW5pemVyLU5PLnBuZycsXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uOiAnY2l0ZXMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0Z3JvdXA6ICdlcnJvcmNoZWNrJyxcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdjaXRlLWVycm9yY2hlY2stYnV0dG9uJyksXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fTtcblxuXHRcdGNvbnN0IGRlZmF1bHRkaWFsb2dzID0ge1xuXHRcdFx0J2NpdGUtdG9vbGJhci1lcnJvcmNoZWNrJzoge1xuXHRcdFx0XHR0aXRsZU1zZzogJ2NpdGUtZXJyb3JjaGVjay1sYWJlbCcsXG5cdFx0XHRcdGlkOiAnY2l0ZXRvb2xiYXItZXJyb3JjaGVjaycsXG5cdFx0XHRcdHJlc2l6ZW1lOiBmYWxzZSxcblx0XHRcdFx0aW5pdDogKCkgPT4ge30sXG5cdFx0XHRcdGh0bWw6IGA8ZGl2IGlkPVwiY2l0ZS1uYW1lZHJlZi1sb2FkaW5nXCI+PGltZyBzcmM9XCJodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL2QvZGUvQWpheC1sb2FkZXIuZ2lmXCIgLz4mbmJzcDske2dldE1lc3NhZ2UoXG5cdFx0XHRcdFx0J2NpdGUtbG9hZGluZydcblx0XHRcdFx0KX08L2Rpdj5gLFxuXHRcdFx0XHRkaWFsb2c6IHtcblx0XHRcdFx0XHR3aWR0aDogTWF0aC5yb3VuZCgkKHdpbmRvdykud2lkdGgoKSA/PyAwICogMC44KSxcblx0XHRcdFx0XHRvcGVuKCkge1xuXHRcdFx0XHRcdFx0Q2l0ZVRCLmxvYWRSZWZzKCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRidXR0b25zOiB7XG5cdFx0XHRcdFx0XHQnY2l0ZS1lcnJvcmNoZWNrLXN1Ym1pdCcoKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGVycm9yY2hlY2tzID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT1jaXRlLWVyci10ZXN0XTpjaGVja2VkJyk7XG5cdFx0XHRcdFx0XHRcdGxldCBlcnJvcnMgPSBbXTtcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlcnJvcmNoZWNrIG9mIGVycm9yY2hlY2tzKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JzID0gWy4uLmVycm9ycywgLi4uQ2l0ZVRCLkVycm9yQ2hlY2tzWyQoZXJyb3JjaGVjaykudmFsKCldLnJ1bigpXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRDaXRlVEIuZGlzcGxheUVycm9ycyhlcnJvcnMpO1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQnd2lraWVkaXRvci10b29sYmFyLXRvb2wtbGluay1jYW5jZWwnKCkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHQnY2l0ZS10b29sYmFyLW5hbWVkcmVmcyc6IHtcblx0XHRcdFx0dGl0bGVNc2c6ICdjaXRlLW5hbWVkLXJlZnMtdGl0bGUnLFxuXHRcdFx0XHRyZXNpemVtZTogZmFsc2UsXG5cdFx0XHRcdGlkOiAnY2l0ZXRvb2xiYXItbmFtZWRyZWZzJyxcblx0XHRcdFx0aHRtbDogYDxkaXYgaWQ9XCJjaXRlLW5hbWVkcmVmLWxvYWRpbmdcIj4gPGltZyBzcmM9XCJodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL2QvZGUvQWpheC1sb2FkZXIuZ2lmXCIgLz4gJm5ic3A7JHtnZXRNZXNzYWdlKFxuXHRcdFx0XHRcdCdjaXRlLWxvYWRpbmcnXG5cdFx0XHRcdCl9PC9kaXY+YCxcblx0XHRcdFx0aW5pdDogKCkgPT4ge30sXG5cdFx0XHRcdGRpYWxvZzoge1xuXHRcdFx0XHRcdHdpZHRoOiBNYXRoLnJvdW5kKCQod2luZG93KS53aWR0aCgpID8/IDAgKiAwLjgpLFxuXHRcdFx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdFx0XHRDaXRlVEIubG9hZFJlZnMoKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGJ1dHRvbnM6IHtcblx0XHRcdFx0XHRcdCdjaXRlLWZvcm0tc3VibWl0JygpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgcmVmbmFtZSA9ICRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXNlbGVjdCcpLnZhbCgpO1xuXHRcdFx0XHRcdFx0XHRpZiAocmVmbmFtZSA9PT0gJycpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0XHRcdFx0XHRcdCQud2lraUVkaXRvci5tb2R1bGVzLnRvb2xiYXIuZm4uZG9BY3Rpb24oXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kYXRhKCdjb250ZXh0JyksXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zdDogQ2l0ZVRCLmdldE5hbWVkUmVmKHJlZm5hbWUsIHRydWUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQnd2lraWVkaXRvci10b29sYmFyLXRvb2wtbGluay1jYW5jZWwnKCkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fTtcblxuXHRcdHRyeSB7XG5cdFx0XHQkdGFyZ2V0Lndpa2lFZGl0b3IoJ2FkZERpYWxvZycsIGRlZmF1bHRkaWFsb2dzKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdC8vIGVycm9yIG9jY3VycmVkIHNldHRpbmcgdXAgd2lraWVkaXRvci5cblx0XHR9XG5cdFx0JGJvZHkuZmluZCgnI2NpdGV0b29sYmFyLW5hbWVkcmVmcycpLm9mZignZGlhbG9nb3BlbicpO1xuXHRcdGlmICghQ2l0ZVRCLmdldE9wdGlvbignbW9kYWwnKSkge1xuXHRcdFx0Ly8gJGJvZHkuZmluZCgnI2NpdGV0b29sYmFyLW5hbWVkcmVmcycpLmRpYWxvZygnb3B0aW9uJywgJ21vZGFsJywgZmFsc2UpO1xuXHRcdFx0Ly8gJGJvZHkuZmluZCgnI2NpdGV0b29sYmFyLWVycm9yY2hlY2snKS5kaWFsb2coJ29wdGlvbicsICdtb2RhbCcsIGZhbHNlKTtcblx0XHRcdG13LnV0aWwuYWRkQ1NTKCcudWktd2lkZ2V0LW92ZXJsYXl7ZGlzcGxheTpub25lICFpbXBvcnRhbnR9Jyk7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHQkdGFyZ2V0Lndpa2lFZGl0b3IoJ2FkZFRvVG9vbGJhcicsIHJlZnNlY3Rpb24pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0Ly8gZXJyb3Igb2NjdXJyZWQgc2V0dGluZyB1cCB3aWtpZWRpdG9yLlxuXHRcdH1cblx0fTtcblxuXHQvLyBTZXR1cCB0aGUgbWFpbiBvYmplY3Rcblx0Q2l0ZVRCLm1haW5SZWZMaXN0ID0gW107XG5cdENpdGVUQi5yZWZzTG9hZGVkID0gZmFsc2U7XG5cblx0Ly8gUkVGIEZVTkNUSU9OU1xuXHQvLyBBY3R1YWxseSBhc3NlbWJsZSBhIHJlZiBmcm9tIHVzZXIgaW5wdXRcblx0Q2l0ZVRCLmdldFJlZiA9IChpbm5lcm9ubHksIGZvcmluc2VydCkgPT4ge1xuXHRcdGxldCBpLCBqLCBnLCBncm91cDtcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IENpdGVUQi5nZXRPcGVuVGVtcGxhdGUoKTtcblx0XHRjb25zdCB7dGVtcGxhdGVuYW1lfSA9IHRlbXBsYXRlO1xuXHRcdGxldCByZXMgPSAnJztcblx0XHRjb25zdCByZWZvYmogPSB7XG5cdFx0XHRzaG9ydHRhZzogZmFsc2UsXG5cdFx0fTtcblx0XHRpZiAoIWlubmVyb25seSkge1xuXHRcdFx0Z3JvdXAgPSAkKGAjY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX0tZ3JvdXBgKS52YWwoKTtcblx0XHRcdGxldCByZWZuYW1lID0gJChgI2NpdGUtJHtDaXRlVEIuZXNjU3RyKHRlbXBsYXRlLnNob3J0Zm9ybSl9LW5hbWVgKS52YWwoKTtcblx0XHRcdHJlcyArPSAnPHJlZic7XG5cdFx0XHRpZiAocmVmbmFtZSkge1xuXHRcdFx0XHRyZWZuYW1lID0gU3RyaW5nKHJlZm5hbWUpLnRyaW0oKTtcblx0XHRcdFx0cmVzICs9IGAgbmFtZT0ke0NpdGVUQi5nZXRRdW90ZWRTdHJpbmcocmVmbmFtZSl9YDtcblx0XHRcdFx0cmVmb2JqLnJlZm5hbWUgPSByZWZuYW1lO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGdyb3VwKSB7XG5cdFx0XHRcdGdyb3VwID0gU3RyaW5nKGdyb3VwKS50cmltKCk7XG5cdFx0XHRcdHJlcyArPSBgIGdyb3VwPSR7Q2l0ZVRCLmdldFF1b3RlZFN0cmluZyhncm91cCl9YDtcblx0XHRcdFx0cmVmb2JqLnJlZmdyb3VwID0gZ3JvdXA7XG5cdFx0XHR9XG5cdFx0XHRyZXMgKz0gJz4nO1xuXHRcdH1cblx0XHRsZXQgY29udGVudCA9IGB7eyR7dGVtcGxhdGVuYW1lfWA7XG5cdFx0Zm9yIChnIGluIHRlbXBsYXRlLmluY3JlbWVudGFibGVzKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093bih0ZW1wbGF0ZS5pbmNyZW1lbnRhYmxlcywgZykpIHtcblx0XHRcdFx0Z3JvdXAgPSB0ZW1wbGF0ZS5pbmNyZW1lbnRhYmxlc1tnXTtcblx0XHRcdFx0Zm9yIChpID0gMTsgaSA8PSBncm91cC52YWw7IGkrKykge1xuXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBncm91cC5maWVsZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGNvbnN0IGZpZWxkbmFtZSA9IGdyb3VwLmZpZWxkc1tqXS5maWVsZDtcblx0XHRcdFx0XHRcdGNvbnN0IGZpZWxkaWQgPSBmaWVsZG5hbWUucmVwbGFjZSgnPE4+JywgaS50b1N0cmluZygpKTtcblx0XHRcdFx0XHRcdGNvbnN0IGZpZWxkID0gJChgI2NpdGUtJHtDaXRlVEIuZXNjU3RyKHRlbXBsYXRlLnNob3J0Zm9ybSl9LSR7ZmllbGRpZH1gKS52YWwoKTtcblx0XHRcdFx0XHRcdGlmIChmaWVsZCkge1xuXHRcdFx0XHRcdFx0XHRjb250ZW50ICs9IGAgfCR7ZmllbGRpZH09YDtcblx0XHRcdFx0XHRcdFx0Y29udGVudCArPSBTdHJpbmcoZmllbGQpLnRyaW0oKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRlbXBsYXRlLmJhc2ljLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGVtcGxhdGUuYmFzaWNbaV0uaW5jcmVtZW50X2dyb3VwKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZmllbGRuYW1lID0gdGVtcGxhdGUuYmFzaWNbaV0uZmllbGQ7XG5cdFx0XHRjb25zdCBmaWVsZCA9ICQoYCNjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfS0ke2ZpZWxkbmFtZX1gKS52YWwoKTtcblx0XHRcdGlmIChmaWVsZCkge1xuXHRcdFx0XHRjb250ZW50ICs9IGAgfCR7ZmllbGRuYW1lfT1gO1xuXHRcdFx0XHRjb250ZW50ICs9IFN0cmluZyhmaWVsZCkudHJpbSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoJGJvZHkuZmluZCgnI2NpdGUtZm9ybS1zdGF0dXMnKS52YWwoKSAhPT0gJ2Nsb3NlZCcpIHtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCB0ZW1wbGF0ZS5leHRyYS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAodGVtcGxhdGUuZXh0cmFbaV0uaW5jcmVtZW50X2dyb3VwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZmllbGRuYW1lID0gdGVtcGxhdGUuZXh0cmFbaV0uZmllbGQ7XG5cdFx0XHRcdGNvbnN0IGZpZWxkID0gJChgI2NpdGUtJHtDaXRlVEIuZXNjU3RyKHRlbXBsYXRlLnNob3J0Zm9ybSl9LSR7ZmllbGRuYW1lfWApLnZhbCgpO1xuXHRcdFx0XHRpZiAoZmllbGQpIHtcblx0XHRcdFx0XHRjb250ZW50ICs9IGAgfCR7ZmllbGRuYW1lfT1gO1xuXHRcdFx0XHRcdGNvbnRlbnQgKz0gU3RyaW5nKGZpZWxkKS50cmltKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y29udGVudCArPSAnfX0nO1xuXHRcdHJlcyArPSBjb250ZW50O1xuXHRcdHJlZm9iai5jb250ZW50ID0gY29udGVudDtcblx0XHRpZiAoIWlubmVyb25seSkge1xuXHRcdFx0cmVzICs9ICc8L3JlZj4nO1xuXHRcdH1cblx0XHRpZiAoZm9yaW5zZXJ0KSB7XG5cdFx0XHRDaXRlVEIubWFpblJlZkxpc3RbQ2l0ZVRCLm1haW5SZWZMaXN0Lmxlbmd0aF0gPSByZWZvYmo7XG5cdFx0fVxuXHRcdHJldHVybiByZXM7XG5cdH07XG5cblx0Ly8gTWFrZSBhIHJlZmVyZW5jZSB0byBhIG5hbWVkIHJlZlxuXHRDaXRlVEIuZ2V0TmFtZWRSZWYgPSAocmVmbmFtZSwgZm9yaW5zZXJ0KSA9PiB7XG5cdFx0aWYgKGZvcmluc2VydCkge1xuXHRcdFx0Q2l0ZVRCLm1haW5SZWZMaXN0W0NpdGVUQi5tYWluUmVmTGlzdC5sZW5ndGhdID0ge1xuXHRcdFx0XHRzaG9ydHRhZzogdHJ1ZSxcblx0XHRcdFx0cmVmbmFtZSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiBgPHJlZiBuYW1lPSR7Q2l0ZVRCLmdldFF1b3RlZFN0cmluZyhyZWZuYW1lKX0gLz5gO1xuXHR9O1xuXG5cdC8vIEZ1bmN0aW9uIHRvIGxvYWQgdGhlIHJlZiBsaXN0XG5cdENpdGVUQi5sb2FkUmVmcyA9ICgpID0+IHtcblx0XHRpZiAoQ2l0ZVRCLnJlZnNMb2FkZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Q2l0ZVRCLmdldFBhZ2VUZXh0KENpdGVUQi5sb2FkUmVmc0ludGVybmFsKTtcblx0fTtcblxuXHQvLyBGdW5jdGlvbiB0aGF0IGFjdHVhbGx5IGxvYWRzIHRoZSBsaXN0IGZyb20gdGhlIHBhZ2UgdGV4dFxuXHRDaXRlVEIubG9hZFJlZnNJbnRlcm5hbCA9ICh0ZXh0KSA9PiB7XG5cdFx0Ly8gV2hhdCB0aGlzIGRvZXM6ICAgICAgICAgICAgIGV4dHJhY3QgZmlyc3QgbmFtZS9ncm91cCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYWN0IHNlY29uZCBuYW1lL2dyb3VwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvcnR0YWcgICBpbm5lciBjb250ZW50XG5cdFx0Y29uc3QgcmVmc3JlZ2V4ID1cblx0XHRcdC88ICpyZWYoPzogKyhuYW1lfGdyb3VwKSAqPSAqKD86XCIoW15cIl0qPylcInwnKFteJ10qPyknfChbXiAnXCIvPl0qPykpICopPyAqKD86ICsobmFtZXxncm91cCkgKj0gKig/OlwiKFteXCJdKj8pXCJ8JyhbXiddKj8pJ3woW14gJ1wiLz5dKj8pKSAqKT8gKig/OlxcLyAqPnw+KCg/Oi58XFxuKSo/KTwgKlxcLyAqcmVmICo+KS9naW07XG5cdFx0Ly8gVGhpcyBzaG91bGQgd29yayByZWdhcmRsZXNzIG9mIHRoZSBxdW90aW5nIHVzZWQgZm9yIG5hbWVzL2dyb3VwcyBhbmQgZm9yIGxpbmVicmVha3MgaW4gdGhlIGlubmVyIGNvbnRlbnRcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0Y29uc3QgcmVmID0gcmVmc3JlZ2V4LmV4ZWModGV4dCk7XG5cdFx0XHRpZiAocmVmID09PSBudWxsKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVmb2JqID0ge307XG5cdFx0XHRpZiAocmVmWzldKSB7XG5cdFx0XHRcdC8vIENvbnRlbnQgKyBzaG9ydCB0YWcgY2hlY2tcblx0XHRcdFx0Ly8gbXcubm90aWZ5KGBcIiR7cmVmWzldfVwiYCwge3RhZzogJ1JlZlRvb2xiYXIyLjAnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdFx0WywgLCAsICwgLCAsICwgLCAsIHJlZm9iai5jb250ZW50XSA9IHJlZjtcblx0XHRcdFx0cmVmb2JqLnNob3J0dGFnID0gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZWZvYmouc2hvcnR0YWcgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHJlZlsxXSAhPT0gJycpIHtcblx0XHRcdFx0Ly8gRmlyc3QgbmFtZS9ncm91cFxuXHRcdFx0XHRpZiAocmVmWzJdKSB7XG5cdFx0XHRcdFx0WywgLCByZWZvYmpbYHJlZiR7cmVmWzFdfWBdXSA9IHJlZjtcblx0XHRcdFx0fSBlbHNlIGlmIChyZWZbM10pIHtcblx0XHRcdFx0XHRbLCAsICwgcmVmb2JqW2ByZWYke3JlZlsxXX1gXV0gPSByZWY7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0WywgLCAsICwgcmVmb2JqW2ByZWYke3JlZlsxXX1gXV0gPSByZWY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChyZWZbNV0gIT09ICcnKSB7XG5cdFx0XHRcdC8vIFNlY29uZCBuYW1lL2dyb3VwXG5cdFx0XHRcdGlmIChyZWZbNl0pIHtcblx0XHRcdFx0XHRbLCAsICwgLCAsICwgcmVmb2JqW2ByZWYke3JlZls1XX1gXV0gPSByZWY7XG5cdFx0XHRcdH0gZWxzZSBpZiAocmVmWzddKSB7XG5cdFx0XHRcdFx0WywgLCAsICwgLCAsICwgcmVmb2JqW2ByZWYke3JlZls1XX1gXV0gPSByZWY7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0WywgLCAsICwgLCAsICwgLCByZWZvYmpbYHJlZiR7cmVmWzVdfWBdXSA9IHJlZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Q2l0ZVRCLm1haW5SZWZMaXN0W0NpdGVUQi5tYWluUmVmTGlzdC5sZW5ndGhdID0gcmVmb2JqO1xuXHRcdH1cblx0XHRDaXRlVEIucmVmc0xvYWRlZCA9IHRydWU7XG5cdFx0Q2l0ZVRCLnNldHVwRXJyb3JDaGVjaygpO1xuXHRcdENpdGVUQi5zZXR1cE5hbWVkUmVmcygpO1xuXHR9O1xuXG5cdC8vIEFKQVggRlVOQ1RJT05TXG5cdC8vIFBhcnNlIHNvbWUgd2lraXRleHQgYW5kIGhhbmQgaXQgb2ZmIHRvIGEgY2FsbGJhY2sgZnVuY3Rpb25cblx0Q2l0ZVRCLnBhcnNlID0gKHRleHQsIGNhbGxiYWNrKSA9PiB7XG5cdFx0Y29uc3QgcG9zdGRhdGEgPSB7XG5cdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHR0aXRsZTogbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRcdFx0dGV4dCxcblx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdH07XG5cdFx0YXBpLnBvc3QocG9zdGRhdGEpLnRoZW4oKHtwYXJzZX0pID0+IHtcblx0XHRcdGNvbnN0IGh0bWwgPSBwYXJzZS50ZXh0O1xuXHRcdFx0Y2FsbGJhY2soaHRtbCk7XG5cdFx0fSk7XG5cdH07XG5cblx0Ly8gVXNlIHRoZSBBUEkgdG8gZXhwYW5kIHRlbXBsYXRlcyBvbiBzb21lIHRleHRcblx0Q2l0ZVRCLmV4cGFuZHRlbXBsYXRlcyA9ICh0ZXh0LCBjYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IHBvc3RkYXRhID0ge1xuXHRcdFx0YWN0aW9uOiAnZXhwYW5kdGVtcGxhdGVzJyxcblx0XHRcdHRpdGxlOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHR0ZXh0LFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0fTtcblx0XHRhcGkucG9zdChwb3N0ZGF0YSkudGhlbigoe2V4cGFuZHRlbXBsYXRlc30pID0+IHtcblx0XHRcdGNvbnN0IHJlc3RleHQgPSBleHBhbmR0ZW1wbGF0ZXMud2lraXRleHQ7XG5cdFx0XHRjYWxsYmFjayhyZXN0ZXh0KTtcblx0XHR9KTtcblx0fTtcblxuXHQvLyBGdW5jdGlvbiB0byBnZXQgdGhlIHBhZ2UgdGV4dFxuXHRDaXRlVEIuZ2V0UGFnZVRleHQgPSAoY2FsbGJhY2spID0+IHtcblx0XHRjb25zdCBzZWN0aW9uID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cFNlY3Rpb25dJykudmFsKCk7XG5cdFx0aWYgKHNlY3Rpb24gPT09ICcnKSB7XG5cdFx0XHRpZiAoQ2l0ZVRCLmdldE9wdGlvbignZXhwYW5kdGVtcGxhdGVzJykpIHtcblx0XHRcdFx0Q2l0ZVRCLmV4cGFuZHRlbXBsYXRlcyhcblx0XHRcdFx0XHQkYm9keS5maW5kKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykud2lraUVkaXRvcignZ2V0Q29udGVudHMnKS50ZXh0KCksXG5cdFx0XHRcdFx0Y2FsbGJhY2tcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNhbGxiYWNrKCRib2R5LmZpbmQoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKS53aWtpRWRpdG9yKCdnZXRDb250ZW50cycpLnRleHQoKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHBvc3RkYXRhID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdFx0cGFnZWlkczogbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlSWQnKSxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoQ2l0ZVRCLmdldE9wdGlvbignZXhwYW5kdGVtcGxhdGVzJykpIHtcblx0XHRcdFx0cG9zdGRhdGEucnZleHBhbmR0ZW1wbGF0ZXMgPSAnMSc7XG5cdFx0XHR9XG5cdFx0XHRhcGkuZ2V0KHBvc3RkYXRhKS50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBhZ2V0ZXh0ID0gcXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQ7XG5cdFx0XHRcdGNhbGxiYWNrKHBhZ2V0ZXh0KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHQvLyBTYWZlIHZlcnNpb24gb2YgZGVjb2RlVVJJQ29tcG9uZW50KCkgdGhhdCBkb2Vzbid0IHRocm93IGV4Y2VwdGlvbnMuXG5cdC8vIElmIHRoZSBuYXRpdmUgZGVjb2RlVVJJQ29tcG9uZW50KCkgdGhyZXcgYW4gZXhjZXB0aW9uLCB0aGUgb3JpZ2luYWwgc3RyaW5nIHdpbGwgYmUgcmV0dXJuZWQuXG5cdENpdGVUQi5zYWZlRGVjb2RlVVJJQ29tcG9uZW50ID0gKHMpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0cyA9IGRlY29kZVVSSUNvbXBvbmVudChzKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdC8qIGVtcHR5ICovXG5cdFx0fVxuXHRcdHJldHVybiBzO1xuXHR9O1xuXG5cdC8vIEF1dG9maWxsIGEgdGVtcGxhdGUgZnJvbSBhbiBJRCAoSVNCTiwgRE9JLCBQTUlELCBVUkwpXG5cdENpdGVUQi5pbml0QXV0b2ZpbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgZWxlbWlkID0gJCh0aGlzKS5hdHRyKCdpZCcpID8/ICcnO1xuXHRcdGNvbnN0IHJlcyA9IC9eY2l0ZS1hdXRvLSguKj8pLSguKiktKC4qKSQvLmV4ZWMoZWxlbWlkKTtcblx0XHRpZiAoIXJlcykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBbLCB0ZW0sIGZpZWxkLCBhdXRvdHlwZV0gPSByZXM7XG5cdFx0bGV0IGlkID0gJChgI2NpdGUtJHt0ZW19LSR7ZmllbGR9YCkudmFsKCk7XG5cdFx0aWYgKCFpZCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRsZXQgdXJsID0gJ2h0dHBzOi8vY2l0b2lkLnFpdXdlbi5uZXQuY24vbG9va3VwLnBocD8nO1xuXHRcdC8vIENpdG9pZCBleHBlY3RzIG1pbmltYWxseSBlbmNvZGVkIGlucHV0LCBzbyBkbyBzb21lIHNwZWN1bGF0aXZlIGRlY29kaW5nIGhlcmUgdG8gYXZvaWRcblx0XHQvLyA0MDQgZmV0Y2hlcy4gaHR0cHM6Ly9waGFicmljYXRvci53aWtpbWVkaWEub3JnL1QxNDY1Mzlcblx0XHRpZCA9IENpdGVUQi5zYWZlRGVjb2RlVVJJQ29tcG9uZW50KGlkKTtcblx0XHR1cmwgKz0gYCR7YXV0b3R5cGV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX1gO1xuXHRcdHVybCArPSBgJnRlbXBsYXRlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRlbSl9YDtcblx0XHRjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdFx0cy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVybCk7XG5cdFx0cy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmQocyk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdC8vIENhbGxiYWNrIGZvciBhdXRvZmlsbFxuXHQvLyBUT0RPOiBBdXRvZmlsbCB0aGUgVVJMLCBhdCBsZWFzdCBmb3IgRE9JXG5cdENpdGVUQi5hdXRvRmlsbCA9IChkYXRhLCB0ZW1wbGF0ZSwgdHlwZSkgPT4ge1xuXHRcdGNvbnN0IGNsID0gYGNpdGUtJHt0ZW1wbGF0ZX0tYDtcblx0XHRsZXQgaSwgajtcblx0XHRsZXQgY29hdXRob3JzO1xuXHRcdCQoYC4ke2NsfXRpdGxlYCkudmFsKGRhdGEudGl0bGUpO1xuXHRcdC8vIEZpbGwgaW4gYXV0aG9yc1xuXHRcdGlmIChkYXRhLmF1dGhvcnMgJiYgZGF0YS5hdXRob3JzLmxlbmd0aCA+IDApIHtcblx0XHRcdGlmICgkKGAuJHtjbH1sYXN0LWluY3ItMWApLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29uc3QgY2xhc3NlcyA9ICQoYC4ke2NsfWxhc3QtaW5jci0xYCkuZXEoMCkuYXR0cignY2xhc3MnKT8uc3BsaXQoL1xccysvKTtcblx0XHRcdFx0aWYgKCFjbGFzc2VzKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBncm91cCA9IGZhbHNlO1xuXHRcdFx0XHRjb25zdCBwYXR0ID0gL2NpdGUtW14tXSo/LWluY3ItKC4qKS87XG5cdFx0XHRcdGZvciAoY29uc3QgY2xhc3NfIG9mIGNsYXNzZXMpIHtcblx0XHRcdFx0XHRpZiAocGF0dC5leGVjKGNsYXNzXykpIHtcblx0XHRcdFx0XHRcdFssIGdyb3VwXSA9IHBhdHQuZXhlYyhjbGFzc18pO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdCQoYC4ke2NsfWxhc3QtaW5jci0xYCkudmFsKGRhdGEuYXV0aG9yc1swXVswXSk7XG5cdFx0XHRcdCQoYC4ke2NsfWZpcnN0LWluY3ItMWApLnZhbChkYXRhLmF1dGhvcnNbMF1bMV0pO1xuXHRcdFx0XHRjb25zdCBlbGVtaWQgPSBgI2NpdGUtaW5jci0ke3RlbXBsYXRlfS0ke2dyb3VwfWA7XG5cdFx0XHRcdGZvciAoaSA9IDI7IGkgPCBkYXRhLmF1dGhvcnMubGVuZ3RoICsgMTsgaSsrKSB7XG5cdFx0XHRcdFx0JChlbGVtaWQpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdFx0JChgLiR7Y2x9bGFzdC1pbmNyLSR7aS50b1N0cmluZygpfWApLnZhbChkYXRhLmF1dGhvcnNbaSAtIDFdWzBdKTtcblx0XHRcdFx0XHQkKGAuJHtjbH1maXJzdC1pbmNyLSR7aS50b1N0cmluZygpfWApLnZhbChkYXRhLmF1dGhvcnNbaSAtIDFdWzFdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICgkKGAuJHtjbH1hdXRob3ItaW5jci0xYCkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjb25zdCBjbGFzc2VzID0gJChgLiR7Y2x9YXV0aG9yLWluY3ItMWApLmVxKDApLmF0dHIoJ2NsYXNzJyk/LnNwbGl0KC9cXHMrLyk7XG5cdFx0XHRcdGlmICghY2xhc3Nlcykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgZ3JvdXAgPSBmYWxzZTtcblx0XHRcdFx0Y29uc3QgcGF0dCA9IC9jaXRlLVteLV0qPy1pbmNyLSguKikvO1xuXHRcdFx0XHRmb3IgKGNvbnN0IGNsYXNzXyBvZiBjbGFzc2VzKSB7XG5cdFx0XHRcdFx0aWYgKHBhdHQuZXhlYyhjbGFzc18pKSB7XG5cdFx0XHRcdFx0XHRbLCBncm91cF0gPSBwYXR0LmV4ZWMoY2xhc3NfKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQkKGAuJHtjbH1hdXRob3ItaW5jci0xYCkudmFsKGRhdGEuYXV0aG9yc1swXS5qb2luKCcsICcpKTtcblx0XHRcdFx0Y29uc3QgZWxlbWlkID0gYCNjaXRlLWluY3ItJHt0ZW1wbGF0ZX0tJHtncm91cH1gO1xuXHRcdFx0XHRmb3IgKGkgPSAyOyBpIDwgZGF0YS5hdXRob3JzLmxlbmd0aCArIDE7IGkrKykge1xuXHRcdFx0XHRcdCQoZWxlbWlkKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHRcdCQoYC4ke2NsfWF1dGhvci1pbmNyLSR7aS50b1N0cmluZygpfWApLnZhbChkYXRhLmF1dGhvcnNbaSAtIDFdLmpvaW4oJywgJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCQoYC4ke2NsfWxhc3QxYCkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBkYXRhLmF1dGhvcnMgJiYgaSA8IGRhdGEuYXV0aG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmICgkKGAuJHtjbH1sYXN0JHtpICsgMX1gKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdCQoYC4ke2NsfWxhc3Qke2kgKyAxfWApLnZhbChkYXRhLmF1dGhvcnNbaV1bMF0pO1xuXHRcdFx0XHRcdFx0JChgLiR7Y2x9Zmlyc3Qke2kgKyAxfWApLnZhbChkYXRhLmF1dGhvcnNbaV1bMV0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb2F1dGhvcnMgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IGk7IGogPCBkYXRhLmF1dGhvcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0Y29hdXRob3JzW2NvYXV0aG9ycy5sZW5ndGhdID0gZGF0YS5hdXRob3JzW2pdLmpvaW4oJywgJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQkKGAuJHtjbH1jb2F1dGhvcnNgKS52YWwoY29hdXRob3JzLmpvaW4oJzsgJykpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCQoYC4ke2NsfWF1dGhvcjFgKS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0Y29uc3QgYXV0aG9ycyA9IFtdO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBkYXRhLmF1dGhvcnMgJiYgaSA8IGRhdGEuYXV0aG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGF1dGhvcnNbYXV0aG9ycy5sZW5ndGhdID0gZGF0YS5hdXRob3JzW2ldLmpvaW4oJywgJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JChgLiR7Y2x9YXV0aG9yc2ApLnZhbChhdXRob3JzLmpvaW4oJzsgJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChpID0gMDsgZGF0YS5hdXRob3JzICYmIGkgPCBkYXRhLmF1dGhvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoJChgLiR7Y2x9YXV0aG9yJHtpICsgMX1gKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdCQoYC4ke2NsfWF1dGhvciR7aSArIDF9YCkudmFsKGRhdGEuYXV0aG9yc1tpXS5qb2luKCcsICcpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29hdXRob3JzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKGogPSBpOyBqIDwgZGF0YS5hdXRob3JzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGNvYXV0aG9yc1tjb2F1dGhvcnMubGVuZ3RoXSA9IGRhdGEuYXV0aG9yc1tqXS5qb2luKCcsICcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0JChgLiR7Y2x9Y29hdXRob3JzYCkudmFsKGNvYXV0aG9ycy5qb2luKCc7ICcpKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEZvcm1hdCBwYXJ0aWFsIGRhdGVzIG9mIHRoZSBmb3JtYXQgWVlZWS1NTSwgWVlZWS1NTS1YWCwgb3IgWVlZWS1NTS1ERCBjb3JyZWN0bHlcblx0XHRpZiAoZGF0YS5kYXRlKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBEVCA9IG5ldyBEYXRlKGRhdGEuZGF0ZSk7XG5cdFx0XHRcdGlmICgvXlxcZHs0fS1cXGR7Mn0oLVhYKT8kL2kudGVzdChkYXRhLmRhdGUpKSB7XG5cdFx0XHRcdFx0ZGF0YS5kYXRlID0gZGF0YS5kYXRlLnJlcGxhY2UoJy1YWCcsICcnKTtcblx0XHRcdFx0XHQkKGAuJHtjbH1kYXRlYCkudmFsKENpdGVUQi5mb3JtYXREYXRlKERULCBmYWxzZSwgdHJ1ZSkpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKC9eXFxkezR9LVxcZHsyfS1cXGR7Mn0/L2kudGVzdChkYXRhLmRhdGUpKSB7XG5cdFx0XHRcdFx0JChgLiR7Y2x9ZGF0ZWApLnZhbChDaXRlVEIuZm9ybWF0RGF0ZShEVCwgdHJ1ZSwgdHJ1ZSkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQoYC4ke2NsfWRhdGVgKS52YWwoZGF0YS5kYXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoYC4ke2NsfWRhdGVgKS52YWwoZGF0YS5kYXRlKTtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgJ3BtaWQnOlxuXHRcdFx0Y2FzZSAnZG9pJzpcblx0XHRcdFx0JChgLiR7Y2x9am91cm5hbGApLnZhbChkYXRhLmpvdXJuYWwpO1xuXHRcdFx0XHQkKGAuJHtjbH12b2x1bWVgKS52YWwoZGF0YS52b2x1bWUpO1xuXHRcdFx0XHQkKGAuJHtjbH1pc3N1ZWApLnZhbChkYXRhLmlzc3VlKTtcblx0XHRcdFx0JChgLiR7Y2x9cGFnZXNgKS52YWwoZGF0YS5wYWdlcyk7XG5cdFx0XHRcdGlmICh0eXBlID09PSAncG1pZCcgJiYgZGF0YS5kb2kpIHtcblx0XHRcdFx0XHQkKGAuJHtjbH1kb2lgKS52YWwoZGF0YS5kb2kpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2lzYm4nOlxuXHRcdFx0XHQkKGAuJHtjbH1wdWJsaXNoZXJgKS52YWwoZGF0YS5wdWJsaXNoZXIpO1xuXHRcdFx0XHQkKGAuJHtjbH1sb2NhdGlvbmApLnZhbChkYXRhLmxvY2F0aW9uKTtcblx0XHRcdFx0JChgLiR7Y2x9ZWRpdGlvbmApLnZhbChkYXRhLmVkaXRpb24pO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd1cmwnOlxuXHRcdFx0XHQkKGAuJHtjbH1qb3VybmFsYCkudmFsKGRhdGEuam91cm5hbCk7XG5cdFx0XHRcdCQoYC4ke2NsfXZvbHVtZWApLnZhbChkYXRhLnZvbHVtZSk7XG5cdFx0XHRcdCQoYC4ke2NsfWlzc3VlYCkudmFsKGRhdGEuaXNzdWUpO1xuXHRcdFx0XHQkKGAuJHtjbH1wYWdlc2ApLnZhbChkYXRhLnBhZ2VzKTtcblx0XHRcdFx0JChgLiR7Y2x9cHVibGlzaGVyYCkudmFsKGRhdGEucHVibGlzaGVyKTtcblx0XHRcdFx0JChgLiR7Y2x9ZWRpdGlvbmApLnZhbChkYXRhLmVkaXRpb24pO1xuXHRcdFx0XHQkKGAuJHtjbH1pc2JuYCkudmFsKGRhdGEuaXNibik7XG5cdFx0XHRcdCQoYC4ke2NsfWlzc25gKS52YWwoZGF0YS5pc3NuKTtcblx0XHRcdFx0JChgLiR7Y2x9ZG9pYCkudmFsKGRhdGEuZG9pKTtcblx0XHRcdFx0Ly8gXCJlbi1VU1wiIGlzbid0IGEgdmFsaWQgdmFsdWUgZm9yIHRoZSBsYW5ndWFnZSBwYXJhbWV0ZXJcblx0XHRcdFx0aWYgKGRhdGEubGFuZ3VhZ2UgJiYgZGF0YS5sYW5ndWFnZSAhPT0gJ2VuLVVTJyAmJiBkYXRhLmxhbmd1YWdlICE9PSAnZW4tR0InKSB7XG5cdFx0XHRcdFx0JChgLiR7Y2x9bGFuZ3VhZ2VgKS52YWwoZGF0YS5sYW5ndWFnZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JChgLiR7Y2x9Y2hhcHRlcmApLnZhbChkYXRhLmNoYXB0ZXIpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHQvLyBObyBkZWZhdWx0XG5cdFx0fVxuXHR9O1xuXG5cdC8vIEZPUk0gRElBTE9HIEZVTkNUSU9OU1xuXHQvLyBBZGQgbmV3IGluY3JlbWVudGFibGUgZmllbGRzXG5cdENpdGVUQi5pbmNyZW1lbnRGaWVsZHMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBDaXRlVEIuZ2V0T3BlblRlbXBsYXRlKCk7XG5cdFx0Y29uc3QgW2N1cnJlbnRyb3ddID0gJCh0aGlzKS5wYXJlbnRzKCd0cicpO1xuXHRcdCQodGhpcykucHJldigpLmNzcygnd2lkdGgnLCAnMTAwJScpO1xuXHRcdCQodGhpcykuZGV0YWNoKCk7XG5cdFx0Y29uc3QgZWxlbWlkID0gJCh0aGlzKS5hdHRyKCdpZCcpID8/ICcnO1xuXHRcdGNvbnN0IHJlcyA9IC9eY2l0ZS1pbmNyLSguKj8pLSguKikkLy5leGVjKGVsZW1pZCk7XG5cdFx0aWYgKCFyZXMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgWywgLCBncm91cF0gPSByZXM7XG5cdFx0Y29uc3QgaW5jcmVtZW50cyA9IHRlbXBsYXRlLmluY3JlbWVudGFibGVzW2dyb3VwXTtcblx0XHRjb25zdCB7ZmllbGRzfSA9IGluY3JlbWVudHM7XG5cdFx0dGVtcGxhdGUuaW5jcmVtZW50YWJsZXNbZ3JvdXBdLnZhbCArPSAxO1xuXHRcdGNvbnN0IHRycyA9IHRlbXBsYXRlLm1ha2VGb3JtSW5uZXIoZmllbGRzLCBmYWxzZSk7XG5cdFx0dHJzLnJldmVyc2UoKTtcblx0XHRmb3IgKGNvbnN0IHRyIG9mIHRycykge1xuXHRcdFx0JChjdXJyZW50cm93KS5hZnRlcih0cik7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIGZpbGwgdGhlIGFjY2Vzc2RhdGUgcGFyYW0gd2l0aCB0aGUgY3VycmVudCBkYXRlXG5cdENpdGVUQi5maWxsQWNjZXNzZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBlbGVtaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJykgPz8gJyc7XG5cdFx0Y29uc3QgcmVzID0gL15jaXRlLWRhdGUtKC4qPyktKC4qKSQvLmV4ZWMoZWxlbWlkKTtcblx0XHRjb25zdCBbLCBpZF0gPSByZXM7XG5cdFx0aWYgKCFyZXMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgWywgLCBmaWVsZF0gPSByZXM7XG5cdFx0Y29uc3QgRFQgPSBuZXcgRGF0ZSgpO1xuXHRcdGNvbnN0IGRhdGVzdHIgPSBDaXRlVEIuZm9ybWF0RGF0ZShEVCk7XG5cdFx0JChgI2NpdGUtJHtpZH0tJHtmaWVsZH1gKS52YWwoZGF0ZXN0cik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdENpdGVUQi5mb3JtYXREYXRlID0gKERULCB1c2VkYXksIHVzZW1vbnRoKSA9PiB7XG5cdFx0aWYgKHVzZWRheSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR1c2VkYXkgPSB0cnVlO1xuXHRcdH1cblx0XHRpZiAodXNlbW9udGggPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dXNlbW9udGggPSB0cnVlO1xuXHRcdH1cblx0XHRsZXQgZGF0ZXN0ciA9IENpdGVUQi5nZXRPcHRpb24oJ2RhdGUgZm9ybWF0Jyk7XG5cdFx0bGV0IHptb250aCA9ICcnO1xuXHRcdGxldCBtb250aCA9IERULmdldFVUQ01vbnRoKCkgKyAxO1xuXHRcdGlmIChtb250aCA8IDEwKSB7XG5cdFx0XHR6bW9udGggPSBgMCR7bW9udGgudG9TdHJpbmcoKX1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR6bW9udGggPSBtb250aC50b1N0cmluZygpO1xuXHRcdH1cblx0XHRtb250aCA9IG1vbnRoLnRvU3RyaW5nKCk7XG5cdFx0bGV0IHpkYXRlID0gJyc7XG5cdFx0bGV0IGRhdGUgPSBEVC5nZXRVVENEYXRlKCk7XG5cdFx0aWYgKGRhdGUgPCAxMCkge1xuXHRcdFx0emRhdGUgPSBgMCR7ZGF0ZS50b1N0cmluZygpfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHpkYXRlID0gZGF0ZS50b1N0cmluZygpO1xuXHRcdH1cblx0XHRkYXRlID0gZGF0ZS50b1N0cmluZygpO1xuXHRcdGlmICh1c2VkYXkpIHtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzxkYXRlPicsIGRhdGUpO1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPHpkYXRlPicsIHpkYXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPGRhdGU+JywgJycpO1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPHpkYXRlPicsICcnKTtcblx0XHR9XG5cdFx0aWYgKHVzZW1vbnRoKSB7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8bW9udGg+JywgbW9udGgpO1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPHptb250aD4nLCB6bW9udGgpO1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPG1vbnRobmFtZT4nLCBDaXRlVEIuZ2V0T3B0aW9uKCdtb250aHMnKVtEVC5nZXRVVENNb250aCgpXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzxtb250aD4nLCAnJyk7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8em1vbnRoPicsICcnKTtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzxtb250aG5hbWU+JywgJycpO1xuXHRcdH1cblx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8eWVhcj4nLCBEVC5nZXRVVENGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuXHRcdHJldHVybiBkYXRlc3RyLnJlcGxhY2UoL15bIC9cXC0sLl0qKC4qPylbIC9cXC0sLl0qJC9nLCAnJDEnKTsgLy8gQ2xlYW51cCBhbnkgZGFuZ2xpbmcgc3BhY2VzIG9yIGNvbm5lY3RvcnMgdGhhdCBtaWdodCByZXN1bHQgZnJvbSBvbWl0dGluZyBkYXRlL21vbnRoXG5cdH07XG5cblx0Ly8gRnVuY3Rpb24gY2FsbGVkIGFmdGVyIHRoZSByZWYgbGlzdCBpcyBsb2FkZWQsIHRvIGFjdHVhbGx5IHNldCB0aGUgY29udGVudHMgb2YgdGhlIG5hbWVkIHJlZiBkaWFsb2dcblx0Ly8gVW50aWwgdGhlIGxpc3QgaXMgbG9hZGVkLCBpdHMganVzdCBhIFwiTG9hZGluZ1wiIHBsYWNlaG9sZGVyXG5cdENpdGVUQi5zZXR1cE5hbWVkUmVmcyA9ICgpID0+IHtcblx0XHRjb25zdCBuYW1lcyA9IFtdO1xuXHRcdGxldCBpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBDaXRlVEIubWFpblJlZkxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICghQ2l0ZVRCLm1haW5SZWZMaXN0W2ldLnNob3J0dGFnICYmIENpdGVUQi5tYWluUmVmTGlzdFtpXS5yZWZuYW1lKSB7XG5cdFx0XHRcdG5hbWVzW25hbWVzLmxlbmd0aF0gPSBDaXRlVEIubWFpblJlZkxpc3RbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IHN0dWZmID0gJCgnPGRpdj4nKTtcblx0XHQkYm9keS5maW5kKCcjY2l0ZXRvb2xiYXItbmFtZWRyZWZzJykuaHRtbChzdHVmZik7XG5cdFx0aWYgKG5hbWVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0c3R1ZmYuaHRtbChnZXRNZXNzYWdlKCdjaXRlLW5vLW5hbWVkcmVmcycpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R1ZmYuaHRtbChnZXRNZXNzYWdlKCdjaXRlLW5hbWVkcmVmcy1pbnRybycpKTtcblx0XHRcdGNvbnN0IHNlbGVjdCA9ICQoJzxzZWxlY3Q+JykuYXR0cignaWQnLCAnY2l0ZS1uYW1lZHJlZi1zZWxlY3QnKTtcblx0XHRcdHNlbGVjdC5hcHBlbmQoJCgnPG9wdGlvbj4nKS5hdHRyKCd2YWx1ZScsICcnKS50ZXh0KGdldE1lc3NhZ2UoJ2NpdGUtbmFtZWQtcmVmcy1kcm9wZG93bicpKSk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0c2VsZWN0LmFwcGVuZCgkKCc8b3B0aW9uPicpLnRleHQobmFtZXNbaV0ucmVmbmFtZSkpO1xuXHRcdFx0fVxuXHRcdFx0c3R1ZmYuYWZ0ZXIoc2VsZWN0KTtcblx0XHRcdHNlbGVjdC5iZWZvcmUoJzxicj4nKTtcblx0XHRcdGNvbnN0IHByZXZsYWJlbCA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ2NpdGUtbnJlZi1wcmV2aWV3LWxhYmVsJylcblx0XHRcdFx0LmNzcygnZGlzcGxheScsICdub25lJylcblx0XHRcdFx0Lmh0bWwoZ2V0TWVzc2FnZSgnY2l0ZS1yYXctcHJldmlldycpKTtcblx0XHRcdHNlbGVjdC5hZnRlcihwcmV2bGFiZWwpO1xuXHRcdFx0cHJldmxhYmVsLmJlZm9yZSgnPGJyPjxicj4nKTtcblx0XHRcdHByZXZsYWJlbC5hZnRlcignPGRpdiBpZD1cImNpdGUtbmFtZWRyZWYtcHJldmlld1wiIHN0eWxlPVwicGFkZGluZzowLjVlbTsgZm9udC1zaXplOjExMCVcIiAvPicpO1xuXHRcdFx0Y29uc3QgcGFyc2VsYWJlbCA9ICQoJzxzcGFuPicpXG5cdFx0XHRcdC5hdHRyKCdpZCcsICdjaXRlLXBhcnNlZC1sYWJlbCcpXG5cdFx0XHRcdC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG5cdFx0XHRcdC5odG1sKGdldE1lc3NhZ2UoJ2NpdGUtcGFyc2VkLWxhYmVsJykpO1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtcHJldmlldycpLmFmdGVyKHBhcnNlbGFiZWwpO1xuXHRcdFx0cGFyc2VsYWJlbC5hZnRlcignPGRpdiBpZD1cImNpdGUtbmFtZWRyZWYtcGFyc2VkXCIgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTowLjVlbTsgZm9udC1zaXplOjExMCVcIiAvPicpO1xuXHRcdFx0Y29uc3QgbGluayA9ICQoJzxhPicpXG5cdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRocmVmOiAnIycsXG5cdFx0XHRcdFx0aWQ6ICdjaXRlLW5yZWYtcGFyc2UnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRtYXJnaW46ICcwIDFlbSAwIDFlbScsXG5cdFx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdFx0XHRcdGNvbG9yOiAnIzAwMDA4YicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0bGluay5odG1sKGdldE1lc3NhZ2UoJ2NpdGUtZm9ybS1wYXJzZScpKTtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXBhcnNlZCcpLmFmdGVyKGxpbmspO1xuXG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1zZWxlY3QnKS5vbignY2hhbmdlJywgQ2l0ZVRCLm5hbWVkUmVmU2VsZWN0Q2xpY2spO1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbnJlZi1wYXJzZScpLm9uKCdjbGljaycsIENpdGVUQi5ucmVmUGFyc2VDbGljayk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIEZ1bmN0aW9uIHRvIGdldCB0aGUgZXJyb3JjaGVjayBmb3JtIEhUTUxcblx0Q2l0ZVRCLnNldHVwRXJyb3JDaGVjayA9ICgpID0+IHtcblx0XHRjb25zdCBmb3JtID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdjaXRlLWVycm9yY2hlY2staGVhZGluZycpLmh0bWwoZ2V0TWVzc2FnZSgnY2l0ZS1lcnJvcmNoZWNrLWhlYWRpbmcnKSk7XG5cdFx0Y29uc3QgdWwgPSAkKCc8dWw+JykuYXR0cignaWQnLCAnY2l0ZS1lcnJjaGVjay1saXN0Jyk7XG5cdFx0bGV0IHRlc3Q7XG5cdFx0Zm9yIChjb25zdCB0IGluIENpdGVUQi5FcnJvckNoZWNrcykge1xuXHRcdFx0aWYgKE9iamVjdC5oYXNPd24oQ2l0ZVRCLkVycm9yQ2hlY2tzLCB0KSkge1xuXHRcdFx0XHR0ZXN0ID0gQ2l0ZVRCLkVycm9yQ2hlY2tzW3RdO1xuXHRcdFx0XHR1bC5hcHBlbmQodGVzdC5nZXRSb3coKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvcm0uYXBwZW5kKHVsKTtcblx0XHQkYm9keS5maW5kKCcjY2l0ZXRvb2xiYXItZXJyb3JjaGVjaycpLmh0bWwoZm9ybS5odG1sKCkpO1xuXHR9O1xuXG5cdC8vIENhbGxiYWNrIGZ1bmN0aW9uIGZvciBwYXJzZWQgcHJldmlld1xuXHRDaXRlVEIuZmlsbE5yZWZQcmV2aWV3ID0gKHBhcnNlZCkgPT4ge1xuXHRcdCRib2R5LmZpbmQoJyNjaXRlLXBhcnNlZC1sYWJlbCcpLnNob3coKTtcblx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1wYXJzZWQnKS5odG1sKHBhcnNlZCk7XG5cdH07XG5cblx0Ly8gQ2xpY2sgaGFuZGxlciBmb3IgdGhlIG5hbWVkLXJlZiBwYXJzZWQgcHJldmlld1xuXHRDaXRlVEIubnJlZlBhcnNlQ2xpY2sgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY2hvaWNlID0gJGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtc2VsZWN0JykudmFsKCk7XG5cdFx0aWYgKGNob2ljZSA9PT0gJycpIHtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLXBhcnNlZC1sYWJlbCcpLmhpZGUoKTtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXBhcnNlZCcpLnRleHQoJycpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQkYm9keS5maW5kKCcjY2l0ZS1ucmVmLXBhcnNlJykuaGlkZSgpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgQ2l0ZVRCLm1haW5SZWZMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoIUNpdGVUQi5tYWluUmVmTGlzdFtpXS5zaG9ydHRhZyAmJiBDaXRlVEIubWFpblJlZkxpc3RbaV0ucmVmbmFtZSA9PT0gY2hvaWNlKSB7XG5cdFx0XHRcdENpdGVUQi5wYXJzZShDaXRlVEIubWFpblJlZkxpc3RbaV0uY29udGVudCwgQ2l0ZVRCLmZpbGxOcmVmUHJldmlldyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Ly8gQ2xpY2sgaGFuZGxlciBmb3IgdGhlIG5hbWVkLXJlZiBkcm9wZG93blxuXHRDaXRlVEIubGFzdG5hbWVkcmVmY2hvaWNlID0gJyc7XG5cdENpdGVUQi5uYW1lZFJlZlNlbGVjdENsaWNrID0gKCkgPT4ge1xuXHRcdGNvbnN0IGNob2ljZSA9ICRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXNlbGVjdCcpLnZhbCgpO1xuXHRcdGlmIChDaXRlVEIubGFzdG5hbWVkcmVmY2hvaWNlID09PSBjaG9pY2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Q2l0ZVRCLmxhc3RuYW1lZHJlZmNob2ljZSA9IGNob2ljZTtcblx0XHQkYm9keS5maW5kKCcjY2l0ZS1wYXJzZWQtbGFiZWwnKS5oaWRlKCk7XG5cdFx0JGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtcGFyc2VkJykudGV4dCgnJyk7XG5cdFx0aWYgKGNob2ljZSA9PT0gJycpIHtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5yZWYtcHJldmlldy1sYWJlbCcpLmhpZGUoKTtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXByZXZpZXcnKS50ZXh0KCcnKTtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5yZWYtcGFyc2UnKS5oaWRlKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgQ2l0ZVRCLm1haW5SZWZMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoIUNpdGVUQi5tYWluUmVmTGlzdFtpXS5zaG9ydHRhZyAmJiBDaXRlVEIubWFpblJlZkxpc3RbaV0ucmVmbmFtZSA9PT0gY2hvaWNlKSB7XG5cdFx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5yZWYtcHJldmlldy1sYWJlbCcpLnNob3coKTtcblx0XHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtcHJldmlldycpLnRleHQoQ2l0ZVRCLm1haW5SZWZMaXN0W2ldLmNvbnRlbnQpO1xuXHRcdFx0XHRpZiAoQ2l0ZVRCLmdldE9wdGlvbignYXV0b3BhcnNlJykpIHtcblx0XHRcdFx0XHRDaXRlVEIubnJlZlBhcnNlQ2xpY2soKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1ucmVmLXBhcnNlJykuc2hvdygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8vIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBwYXJzZWQgcHJldmlld1xuXHRDaXRlVEIuZmlsbFRlbXBsYXRlUHJldmlldyA9ICh0ZXh0KSA9PiB7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBDaXRlVEIuZ2V0T3BlblRlbXBsYXRlKCk7XG5cdFx0Y29uc3QgZGl2ID0gJChgI2NpdGV0b29sYmFyLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfWApO1xuXHRcdGRpdi5maW5kKCcuY2l0ZS1wcmV2LXBhcnNlZC1sYWJlbCcpLnNob3coKTtcblx0XHRkaXYuZmluZCgnLmNpdGUtcHJldmlldy1wYXJzZWQnKS5odG1sKHRleHQpO1xuXHR9O1xuXG5cdC8vIENsaWNrIGhhbmRsZXIgZm9yIHRlbXBsYXRlIHBhcnNlZCBwcmV2aWV3XG5cdENpdGVUQi5wcmV2UGFyc2VDbGljayA9ICgpID0+IHtcblx0XHRjb25zdCByZWYgPSBDaXRlVEIuZ2V0UmVmKHRydWUsIGZhbHNlKTtcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IENpdGVUQi5nZXRPcGVuVGVtcGxhdGUoKTtcblx0XHRjb25zdCBkaXYgPSAkKGAjY2l0ZXRvb2xiYXItJHtDaXRlVEIuZXNjU3RyKHRlbXBsYXRlLnNob3J0Zm9ybSl9YCk7XG5cdFx0ZGl2LmZpbmQoJy5jaXRlLXByZXYtcGFyc2UnKS5oaWRlKCk7XG5cdFx0Q2l0ZVRCLnBhcnNlKHJlZiwgQ2l0ZVRCLmZpbGxUZW1wbGF0ZVByZXZpZXcpO1xuXHR9O1xuXG5cdC8vIFNob3cvaGlkZSB0aGUgZXh0cmEgZmllbGRzIGluIHRoZSBkaWFsb2cgYm94XG5cdENpdGVUQi5zaG93SGlkZUV4dHJhID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdGNvbnN0IGRpdiA9ICQoYCNjaXRldG9vbGJhci0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX1gKTtcblx0XHRjb25zdCBzZXR0aW5nID0gZGl2LmZpbmQoJy5jaXRlLWZvcm0tc3RhdHVzJykudmFsKCk7XG5cdFx0aWYgKHNldHRpbmcgPT09ICdjbG9zZWQnKSB7XG5cdFx0XHRkaXYuZmluZCgnLmNpdGUtZm9ybS1zdGF0dXMnKS52YWwoJ29wZW4nKTtcblx0XHRcdGRpdi5maW5kKCcuY2l0ZS1leHRyYS1maWVsZHMnKS5zaG93KDEsICgpID0+IHtcblx0XHRcdFx0Ly8galF1ZXJ5IGFkZHMgYGRpc3BsYXk6IGJsb2NrYCwgd2hpY2ggc2NyZXdzIHRoaW5ncyB1cFxuXHRcdFx0XHRkaXYuZmluZCgnLmNpdGUtZXh0cmEtZmllbGRzJykuY3NzKHtcblx0XHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGl2LmZpbmQoJy5jaXRlLWZvcm0tc3RhdHVzJykudmFsKCdjbG9zZWQnKTtcblx0XHRcdGRpdi5maW5kKCcuY2l0ZS1leHRyYS1maWVsZHMnKS5oaWRlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIFJlc2V0cyBmb3JtIGZpZWxkcyBhbmQgcHJldmlld3Ncblx0Ly8gUmVzZXRzIGZvcm0gZmllbGRzIGFuZCBwcmV2aWV3c1xuXHRDaXRlVEIucmVzZXRGb3JtID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdGNvbnN0IGRpdiA9ICQoYCNjaXRldG9vbGJhci0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX1gKTtcblx0XHRkaXYuaHRtbCh0ZW1wbGF0ZS5nZXRGb3JtKCkpO1xuXHR9O1xuXG5cdC8vIFNUUklORyBVVElMSVRZIEZVTkNUSU9OU1xuXHQvLyBSZXR1cm5zIGEgc3RyaW5nIHF1b3RlZCBhcyBuZWNlc3NhcnkgZm9yIG5hbWUvZ3JvdXAgYXR0cmlidXRlc1xuXHRDaXRlVEIuZ2V0UXVvdGVkU3RyaW5nID0gKHMpID0+IHtcblx0XHRjb25zdCBzcSA9IC8nLy50ZXN0KHMpOyAvLyBzaW5nbGUgcXVvdGVzXG5cdFx0Y29uc3QgZHEgPSAvXCIvLnRlc3Qocyk7IC8vIGRvdWJsZSBxdW90ZXNcblx0XHRpZiAoIXNxICYmICFkcSkge1xuXHRcdFx0Ly8gQWx3YXlzIHF1b3RlcyBmb3Igbm9uLWxhdGluIGFscGhhYmV0XG5cdFx0XHRyZXR1cm4gYFwiJHtzfVwiYDtcblx0XHR9IGVsc2UgaWYgKCFkcSkge1xuXHRcdFx0Ly8gQ2FuIHVzZSBkb3VibGUgcXVvdGVzXG5cdFx0XHRyZXR1cm4gYFwiJHtzfVwiYDtcblx0XHR9IGVsc2UgaWYgKCFzcSkge1xuXHRcdFx0Ly8gQ2FuIHVzZSBzaW5nbGUgcXVvdGVzXG5cdFx0XHRyZXR1cm4gYCcke3N9J2A7XG5cdFx0fVxuXHRcdC8vIEhhcyBkb3VibGUgYW5kIHNpbmdsZSBxdW90ZXNcblx0XHRzID0gcy5yZXBsYWNlKC9cIi9nLCBcIidcIik7XG5cdFx0cmV0dXJuIGBcIiR7c31cImA7XG5cdH07XG5cblx0Ly8gRml4IHVwIHN0cmluZ3MgZm9yIG91dHB1dCAtIGNhcGl0YWxpemUgZmlyc3QgY2hhciwgcmVwbGFjZSB1bmRlcnNjb3JlcyB3aXRoIHNwYWNlc1xuXHRDaXRlVEIuZml4U3RyID0gKHMpID0+IHtcblx0XHRzID0gcy5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKTtcblx0XHRzID0gcy5yZXBsYWNlKCdfJywgJyAnKTtcblx0XHRyZXR1cm4gcztcblx0fTtcblxuXHQvLyBFc2NhcGUgc3BhY2VzIGFuZCBxdW90ZXMgZm9yIHVzZSBpbiBIVE1MIGNsYXNzZXMvaWRzXG5cdENpdGVUQi5lc2NTdHIgPSAocykgPT4ge1xuXHRcdHJldHVybiBzLnJlcGxhY2UoL1xccy9nLCAnLScpLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJyk7XG5cdH07XG5cblx0Ly8gTUlTQyBGVU5DVElPTlNcblx0Ly8gRGV0ZXJtaW5lIHdoaWNoIHRlbXBsYXRlIGZvcm0gaXMgb3BlbiwgYW5kIGdldCB0aGUgdGVtcGxhdGUgb2JqZWN0IGZvciBpdFxuXHRDaXRlVEIuZ2V0T3BlblRlbXBsYXRlID0gKCkgPT4ge1xuXHRcdGNvbnN0IGRpYWxvZ3MgPSAkYm9keS5maW5kKCcudWktZGlhbG9nLWNvbnRlbnQudWktd2lkZ2V0LWNvbnRlbnQ6dmlzaWJsZScpO1xuXHRcdGNvbnN0IHRlbXBsYXRlbmFtZSA9ICQoZGlhbG9nc1swXSkuZmluZCgnLmNpdGUtdGVtcGxhdGUnKS52YWwoKTtcblx0XHRyZXR1cm4gQ2l0ZVRCLlRlbXBsYXRlc1t0ZW1wbGF0ZW5hbWVdO1xuXHR9O1xuXG5cdC8vIERpc3BsYXkgdGhlIHJlcG9ydCBmb3IgdGhlIGVycm9yIGNoZWNrc1xuXHRDaXRlVEIuZGlzcGxheUVycm9ycyA9IChlcnJvcnMpID0+IHtcblx0XHQkYm9keS5maW5kKCcjY2l0ZS1lcnItcmVwb3J0JykucmVtb3ZlKCk7XG5cdFx0Y29uc3QgdGFibGUgPSAkKCc8dGFibGU+JykuYXR0cignaWQnLCAnY2l0ZS1lcnItcmVwb3J0JykuY3NzKHtcblx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRib3JkZXI6ICcxcHggc29saWQgI0E5QTlBOScsXG5cdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICcjRkZFRkQ1Jyxcblx0XHRcdHBhZGRpbmc6ICcwLjI1ZW0nLFxuXHRcdFx0J21hcmdpbi10b3AnOiAnMC41ZW0nLFxuXHRcdH0pO1xuXHRcdCRib2R5LmZpbmQoJyNlZGl0cGFnZS1jb3B5d2FybicpLmJlZm9yZSh0YWJsZSk7XG5cdFx0bGV0IHRyO1xuXHRcdGNvbnN0IHRyMSA9ICQoJzx0cj4nKS5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcblx0XHRjb25zdCB0aDEgPSAkKCc8dGg+JykuY3NzKCd3aWR0aCcsICc2MCUnKS5jc3MoJ2ZvbnQtc2l6ZScsICcxMTAlJykuaHRtbChnZXRNZXNzYWdlKCdjaXRlLWVyci1yZXBvcnQtaGVhZGluZycpKTtcblx0XHRjb25zdCB0aDIgPSAkKCc8dGg+JykuY3NzKCd3aWR0aCcsICc0MCUnKS5jc3MoJ3RleHQtYWxpZ24nLCAncmlnaHQ7Jyk7XG5cdFx0Y29uc3QgaW0gPSAkKCc8aW1nPicpLmF0dHIoXG5cdFx0XHQnc3JjJyxcblx0XHRcdCdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iLzUvNTUvR3RrLXN0b3Auc3ZnLzIwcHgtR3RrLXN0b3Auc3ZnLnBuZydcblx0XHQpO1xuXHRcdGltLmF0dHIoJ2FsdCcsIGdldE1lc3NhZ2UoJ2NpdGUtZXJyLXJlcG9ydC1jbG9zZScpKS5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ2NpdGUtZXJyLXJlcG9ydC1jbG9zZScpKTtcblx0XHRjb25zdCBhZCA9ICQoJzxhPicpLmF0dHIoe1xuXHRcdFx0aWQ6ICdjaXRlLWVyci1jaGVjay1jbG9zZScsXG5cdFx0XHRocmVmOiAnIycsXG5cdFx0fSk7XG5cdFx0YWQuYXBwZW5kKGltKTtcblx0XHR0aDIuYXBwZW5kKGFkKTtcblx0XHR0cjEuYXBwZW5kKHRoMSkuYXBwZW5kKHRoMik7XG5cdFx0dGFibGUuYXBwZW5kKHRyMSk7XG5cdFx0JGJvZHkuZmluZCgnI2NpdGUtZXJyLWNoZWNrLWNsb3NlJykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtZXJyLXJlcG9ydCcpLnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0ciA9ICQoJzx0cj4nKS5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcblx0XHRcdGNvbnN0IHRkID0gJCgnPHRkPicpXG5cdFx0XHRcdC5jc3MoJ3RleHQtYWxpZ24nLCAnY2VudGVyJylcblx0XHRcdFx0LmNzcygnbWFyZ2luJywgJzEuNXB4Jylcblx0XHRcdFx0Lmh0bWwoZ2V0TWVzc2FnZSgnY2l0ZS1lcnItcmVwb3J0LWVtcHR5JykpO1xuXHRcdFx0dHIuYXBwZW5kKHRkKTtcblx0XHRcdHRhYmxlLmFwcGVuZCh0cik7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBlcnJvciBpbiBlcnJvcnMpIHtcblx0XHRcdGlmIChPYmplY3QuaGFzT3duKGVycm9ycywgZXJyb3IpKSB7XG5cdFx0XHRcdGNvbnN0IGVyciA9IGVycm9yc1tlcnJvcl07XG5cdFx0XHRcdHRyID0gJCgnPHRyPicpLmNzcygnd2lkdGgnLCAnMTAwJScpO1xuXHRcdFx0XHRjb25zdCB0ZDEgPSAkKCc8dGQ+Jylcblx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjMDAwJyxcblx0XHRcdFx0XHRcdG1hcmdpbjogJzEuNXB4Jyxcblx0XHRcdFx0XHRcdHdpZHRoOiAnNjAlJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5odG1sKGVyci5lcnIpO1xuXHRcdFx0XHRjb25zdCB0ZDIgPSAkKCc8dGQ+Jylcblx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjMDAwJyxcblx0XHRcdFx0XHRcdG1hcmdpbjogJzEuNXB4Jyxcblx0XHRcdFx0XHRcdHdpZHRoOiAnNDAlJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5odG1sKGdldE1lc3NhZ2UoZXJyLm1zZykpO1xuXHRcdFx0XHR0ci5hcHBlbmQodGQxKS5hcHBlbmQodGQyKTtcblx0XHRcdFx0dGFibGUuYXBwZW5kKHRyKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Ly8gTG9hZCBjb25maWd1cmF0aW9uIGZvciBzaXRlXG5cdHJlZlRvb2xiYXJDb25maWcoKTtcblxuXHQvLyBFbmQgb2YgY29kZSBsb2FkZWQgb25seSBvbiBlZGl0XG59O1xuXG5leHBvcnQge3JlZlRvb2xiYXIyfTtcbiIsICJjb25zdCBnZXRNZXNzYWdlID0gKGtleTogc3RyaW5nLCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGtleSwgLi4uYXJncykucGFyc2UoKSA6IG13Lm1lc3NhZ2Uoa2V5KS5wbGFpbigpO1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICIvKiBnbG9iYWwgQ2l0ZVRCICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UsIG5vLW5ldywgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXG4vLyBAdHMtbm9jaGVja1xuLyoqXG4gKiBTaXRld2lkZSBvcHRpb25zIGZvciB0aGUgdGhlIENpdGUgdG9vbGJhciBidXR0b246XG4gKiBBbGwgb3B0aW9ucyBzaG91bGQgYmUgc3BlY2lmaWVkXG4gKlxuICogXCJkYXRlIGZvcm1hdFwiIHNldHMgdGhlIGRhdGUgZm9ybWF0IHVzZWQgZm9yIHRoZSBmdW5jdGlvbiB0byBpbnNlcnQgdGhlIGN1cnJlbnQgZGF0ZVxuICogQ3VycmVudCBhdmFpbGFibGUgb3B0aW9uczpcbiAqIGRhdGUgLSB0aGUgZGF5IG9mIHRoZSBtb250aFxuICogemRhdGUgLSBkYXkgb2YgdGhlIG1vbnRoLCB6ZXJvIHBhZGRlZCB0byAyIGRpZ2l0c1xuICogbW9udGhuYW1lIC0gVGhlIG1vbnRoIG5hbWVcbiAqIG1vbnRoIC0gVGhlIG51bWJlcmljIG1vbnRoICgxLTEyKVxuICogem1vbnRoIC0gbnVtZXJpYyBtb250aCwgemVybyBwYWRkZWQgdG8gMiBkaWdpdHNcbiAqIHllYXIgLSBUaGUgZnVsbCB5ZWFyICg0IGRpZ2l0cylcbiAqXG4gKiBcImF1dG9kYXRlIGZpZWxkc1wiIGlzIGEgbGlzdCBvZiB0ZW1wbGF0ZSBmaWVsZHMgdGhhdCBzaG91bGQgaGF2ZSBhIGJ1dHRvbiB0byBpbnNlcnQgdGhlIGN1cnJlbnQgZGF0ZVxuICpcbiAqIFwibW9udGhzXCIgaXMgYSBsaXN0IG9mIGxvY2FsaXplZCBtb250aCBuYW1lc1xuICpcbiAqIFwibW9kYWxcIiAtIGlmIHRydWUsIHRoZSBkaWFsb2dzIHdpbGwgYmUgbW9kYWwgd2luZG93cywgYmxvY2tpbmcgYWNjZXNzIHRvIHRoZSByZXN0IG9mIHRoZSB3aW5kb3cuXG4gKiBBbGwgZGlhbG9ncyBpbiB0aGUgdG9vbGJhciBhcmUgbW9kYWwgYnkgZGVmYXVsdFxuICpcbiAqIFwiYXV0b3BhcnNlXCIgLSBpZiB0cnVlLCBwcmV2aWV3aW5nIGEgcmVmIHdpbGwgYXV0b21hdGljYWxseSB0cmlnZ2VyIGEgcHJldmlldyBvZiB0aGUgcGFyc2VkIHdpa2l0ZXh0LlxuICogSXQgaXMgbm90IHJlY29tbWVuZGVkIHRvIHNldCB0aGlzIHRvIHRydWUgYXMgYSBnbG9iYWwgc2V0dGluZyBhcyBpdCBtYXkgc2xvdyB0aGUgc2NyaXB0IGRvd24gZm9yXG4gKiBwZW9wbGUgd2l0aCBzbG93IGNvbm5lY3Rpb25zLlxuICpcbiAqIFwiZXhwYW5kdGVtcGxhdGVzXCIgLSBpZiB0cnVlLCB0ZW1wbGF0ZXMgYW5kIHBhcnNlciBmdW5jdGlvbnMgd2lsbCBiZSBleHBhbmRlZCB3aGVuIGdldHRpbmcgcGFnZSB0ZXh0XG4gKiAodGVtcGxhdGVzIGluc2lkZSBvZiByZWYgdGFncyB3aWxsIG5vdCBiZSBleHBhbmRlZCkuIFRoaXMgd2lsbCBhbGxvdyByZWZlcmVuY2VzIGluc2lkZSBvZiB0ZW1wbGF0ZXMgb3JcbiAqIHJlZmVyZW5jZXMgdXNpbmcge3sjdGFnOnJlZn19IHRvIGJlIGxpc3RlZCBpbiB0aGUgbmFtZWQgcmVmcyBkaWFsb2cgYW5kIHNlYXJjaGVkIGJ5IGVycm9yIGNoZWNrcy5cbiAqIFRoaXMgbWF5IHNsb3cgbG9hZGluZyB0aGUgbmFtZWQgcmVmcyBhbmQgZXJyb3IgY2hlY2sgZGlhbG9ncy5cbiAqL1xuY29uc3QgcmVmVG9vbGJhckNvbmZpZyA9ICgpID0+IHtcblx0Y29uc3Qge0NpdGVUZW1wbGF0ZSwgQ2l0ZUVycm9yQ2hlY2t9ID0gd2luZG93O1xuXG5cdENpdGVUQi5PcHRpb25zID0ge1xuXHRcdCdkYXRlIGZvcm1hdCc6ICc8eWVhcj4tPHptb250aD4tPHpkYXRlPicsXG5cdFx0J2F1dG9kYXRlIGZpZWxkcyc6IFsnYWNjZXNzZGF0ZSddLFxuXHRcdG1vbnRoczogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxuXHRcdG1vZGFsOiB0cnVlLFxuXHRcdGF1dG9wYXJzZTogdHJ1ZSxcblx0XHRleHBhbmR0ZW1wbGF0ZXM6IGZhbHNlLFxuXHR9O1xuXG5cdC8vIENpdGUgdGVtcGxhdGUgZGVmaW5pdGlvbnNcblx0bmV3IENpdGVUZW1wbGF0ZShcblx0XHQnY2l0ZSB3ZWInLFxuXHRcdCd3ZWInLFxuXHRcdFtcblx0XHRcdC8vIEJhc2ljIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcjxOPicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcl9hbHQnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd0aXRsZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3RpdGxlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndXJsJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ3VybCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3dlYnNpdGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdqb3VybmFsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncHVibGlzaGVyJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncHVibGlzaGVyJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYWNjZXNzZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3JlZicsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXJlZi10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQvLyBFeHBhbmRlZCBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3JsaW5rPE4+Jyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtYXV0aG9ybGluay10b29sdGlwJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9ybGluaycsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhc3Q8Tj4nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYXN0LWluY3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmaXJzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2ZpcnN0LWluY3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsb2NhdGlvbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2UnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wYWdlLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlcycsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3BhZ2VzJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcGFnZXMtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhbmd1YWdlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmb3JtYXQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAnZG9pJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZG9pJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZGF0ZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2RhdGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdxdW90ZScsXG5cdFx0XHR9LFxuXHRcdF1cblx0KTtcblx0bmV3IENpdGVUZW1wbGF0ZShcblx0XHQnY2l0ZSBuZXdzJyxcblx0XHQnbmV3cycsXG5cdFx0W1xuXHRcdFx0Ly8gQmFzaWMgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9yPE4+Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yX2FsdCcsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3RpdGxlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAndGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd1cmwnLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAndXJsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYWNjZXNzZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3dvcmsnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS13b3JrLXRvb2x0aXAnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdqb3VybmFsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYWdlbmN5Jyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaXNzdWUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwdWJsaXNoZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwdWJsaXNoZXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkYXRlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3JlZicsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXJlZi10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQvLyBFeHBhbmRlZCBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3JsaW5rPE4+Jyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtYXV0aG9ybGluay10b29sdGlwJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9ybGluaycsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhc3Q8Tj4nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYXN0LWluY3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmaXJzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2ZpcnN0LWluY3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsb2NhdGlvbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2UnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wYWdlLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlcycsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3BhZ2VzJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcGFnZXMtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhbmd1YWdlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmb3JtYXQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAnZG9pJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZG9pJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncXVvdGUnLFxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cdG5ldyBDaXRlVGVtcGxhdGUoXG5cdFx0J2NpdGUgYm9vaycsXG5cdFx0J2Jvb2snLFxuXHRcdFtcblx0XHRcdC8vIEJhc2ljIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcjxOPicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcl9hbHQnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdjb2F1dGhvcnMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdjb2F1dGhvcnMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0b3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd0aXRsZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3RpdGxlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZGF0ZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3llYXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwdWJsaXNoZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwdWJsaXNoZXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsb2NhdGlvbicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xvY2F0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaXNibicsXG5cdFx0XHRcdC8qIFwiYXV0b2ZpbGxpZFwiOlwiaXNiblwiLCAqLyBhdXRvZmlsbHByb3A6ICdpc2JuJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZScsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2UtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2VzJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncGFnZXMnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wYWdlcy10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdGlvbicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2VkaXRpb24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd1cmwnLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAndXJsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYWNjZXNzZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3JlZicsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXJlZi10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQvLyBFeHBhbmRlZCBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYXN0PE4+Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFzdC1pbmNyJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZmlyc3Q8Tj4nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdmaXJzdC1pbmNyJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9ybGluazxOPicsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWF1dGhvcmxpbmstdG9vbHRpcCcsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcmxpbmsnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0b3I8Tj4tbGFzdCcsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2VkaXRvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcjxOPi1maXJzdCcsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2VkaXRvcicsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcjxOPi1saW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnZWRpdG9ybGluaycsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhbmd1YWdlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmb3JtYXQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdjaGFwdGVyJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnY2hhcHRlcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3F1b3RlJyxcblx0XHRcdH0sXG5cdFx0XVxuXHQpO1xuXHRuZXcgQ2l0ZVRlbXBsYXRlKFxuXHRcdCdjaXRlIGpvdXJuYWwnLFxuXHRcdCdqb3VybmFsJyxcblx0XHRbXG5cdFx0XHQvLyBCYXNpYyBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3I8Tj4nLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3JfYWx0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnY29hdXRob3JzJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnY29hdXRob3JzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndGl0bGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd0aXRsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2pvdXJuYWwnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdqb3VybmFsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZGF0ZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2RhdGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd2b2x1bWUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd2b2x1bWUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpc3N1ZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2lzc3VlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZScsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2UtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2VzJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncGFnZXMnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wYWdlcy10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZG9pJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ2RvaScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2RvaScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BtaWQnLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAncG1pZCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3VybCcsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICd1cmwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhY2Nlc3NkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncmVmJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcmVmLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdC8vIEV4cGFuZGVkIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcmxpbms8Tj4nLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hdXRob3JsaW5rLXRvb2x0aXAnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3JsaW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2ZpcnN0PE4+Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZmlyc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcjxOPi1sYXN0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnZWRpdG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yPE4+LWZpcnN0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnZWRpdG9yJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yPE4+LWxpbmsnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdlZGl0b3JsaW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnc2VyaWVzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXQnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hdC10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndHJhbnMtdGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwdWJsaXNoZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwdWJsaXNoZXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsb2NhdGlvbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhbmd1YWdlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmb3JtYXQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpc3NuJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnaXNzbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BtYycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ29jbGMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdiaWJjb2RlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaWQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdxdW90ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3Bvc3RzY3JpcHQnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wb3N0c2NyaXB0LXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cdG5ldyBDaXRlVGVtcGxhdGUoXG5cdFx0J2NpdGUgY29uZmVyZW5jZScsXG5cdFx0J2NvbmZlcmVuY2UnLFxuXHRcdFtcblx0XHRcdC8vIEJhc2ljIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2F1dGhvcjEnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdjb2F1dGhvcnMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdjb2F1dGhvcnMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd0aXRsZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3RpdGxlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnY29uZmVyZW5jZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2NvbmZlcmVuY2V1cmwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdib29rdGl0bGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdqb3VybmFsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZGF0ZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2RhdGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd5ZWFyJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbW9udGgnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd2b2x1bWUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd2b2x1bWUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwdWJsaXNoZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwdWJsaXNoZXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsb2NhdGlvbicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xvY2F0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaXNibicgLyogLCBcImF1dG9maWxsaWRcIjpcImlzYm5cIiAqLyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAnZG9pJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZG9pJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncG1pZCcsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICdwbWlkJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndXJsJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ3VybCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2FjY2Vzc2RhdGUnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hY2Nlc3NkYXRlLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdC8vIEV4cGFuZGVkIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhc3QnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYXN0MScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2ZpcnN0Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZmlyc3QxJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9ybGluaycsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWF1dGhvcmxpbmstdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ290aGVycycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRpb24nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdlZGl0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYW5ndWFnZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Zvcm1hdCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lzc24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdvY2xjJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaWQnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1pZC10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncXVvdGUnLFxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cdG5ldyBDaXRlVGVtcGxhdGUoXG5cdFx0J2NpdGUgZW5jeWNsb3BlZGlhJyxcblx0XHQnZW5jeWNsb3BlZGlhJyxcblx0XHRbXG5cdFx0XHQvLyBCYXNpYyBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3InLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdhdXRob3IxJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0b3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlbmN5Y2xvcGVkaWEnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd0aXRsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3ZvbHVtZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3llYXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd5ZWFyJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncHVibGlzaGVyJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncHVibGlzaGVyJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbG9jYXRpb24nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsb2NhdGlvbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lzYm4nIC8qICwgXCJhdXRvZmlsbGlkXCI6XCJpc2JuXCIgKi8sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2VzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndXJsJyxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQvLyBFeHBhbmRlZCBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYXN0Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFzdDEnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmaXJzdCcsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2ZpcnN0MScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcmxpbmsnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hdXRob3JsaW5rLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdjb2F1dGhvcnMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdjb2F1dGhvcnMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdvdGhlcnMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0aW9uJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZWRpdGlvbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ29jbGMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpZCcsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWlkLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhY2Nlc3NkYXRlJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtYWNjZXNzZGF0ZS10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYW5ndWFnZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Zvcm1hdCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RhdGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdtb250aCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3F1b3RlJyxcblx0XHRcdH0sXG5cdFx0XVxuXHQpO1xuXG5cdC8vIENpdGUgZXJyb3IgY2hlY2sgZGVmaW5pdGlvbnNcblx0bmV3IENpdGVFcnJvckNoZWNrKHtcblx0XHR0eXBlOiAncmVmbGlzdCcsXG5cdFx0dGVzdG5hbWU6ICdzYW1lY29udGVudCcsXG5cdFx0ZGVzYzogJ2NpdGUtc2FtZWNvbnRlbnQtZGVzYycsXG5cdFx0ZnVuYzogKHJlZmxpc3QpID0+IHtcblx0XHRcdGNvbnN0IGVycm9ycyA9IFtdO1xuXHRcdFx0Y29uc3QgcmVmczIgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiByZWZsaXN0KSB7XG5cdFx0XHRcdGlmIChlbGVtZW50LnNob3J0dGFnKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlZnMyLmluY2x1ZGVzKGVsZW1lbnQuY29udGVudCkpIHtcblx0XHRcdFx0XHRpZiAoZXJyb3JzLmluY2x1ZGVzKGVsZW1lbnQuY29udGVudCkpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlcnJvcnNbZXJyb3JzLmxlbmd0aF0gPSBlbGVtZW50LmNvbnRlbnQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVmczJbcmVmczIubGVuZ3RoXSA9IGVsZW1lbnQuY29udGVudDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IGVycm9yIG9mIGVycm9ycykge1xuXHRcdFx0XHRyZXRbcmV0Lmxlbmd0aF0gPSB7XG5cdFx0XHRcdFx0bXNnOiAnY2l0ZS1zYW1lY29udGVudC1lcnJvcicsXG5cdFx0XHRcdFx0ZXJyOiBlcnJvcixcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSxcblx0fSk7XG5cdG5ldyBDaXRlRXJyb3JDaGVjayh7XG5cdFx0dHlwZTogJ3JlZmxpc3QnLFxuXHRcdHRlc3RuYW1lOiAncmVwZWF0ZWQnLFxuXHRcdGRlc2M6ICdjaXRlLXJlcGVhdGVkLWRlc2MnLFxuXHRcdGZ1bmM6IChyZWZsaXN0KSA9PiB7XG5cdFx0XHRjb25zdCBlcnJvcnMgPSBbXTtcblx0XHRcdGNvbnN0IHJlZnMyID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcmVmbGlzdCkge1xuXHRcdFx0XHRpZiAoZWxlbWVudC5zaG9ydHRhZyB8fCAhZWxlbWVudC5yZWZuYW1lKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlZnMyLmluY2x1ZGVzKGVsZW1lbnQucmVmbmFtZSkpIHtcblx0XHRcdFx0XHRpZiAoZXJyb3JzLmluY2x1ZGVzKGVsZW1lbnQucmVmbmFtZSkpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlcnJvcnNbZXJyb3JzLmxlbmd0aF0gPSBlbGVtZW50LnJlZm5hbWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVmczJbcmVmczIubGVuZ3RoXSA9IGVsZW1lbnQucmVmbmFtZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IGVycm9yIG9mIGVycm9ycykge1xuXHRcdFx0XHRyZXRbcmV0Lmxlbmd0aF0gPSB7XG5cdFx0XHRcdFx0bXNnOiAnY2l0ZS1yZXBlYXRlZC1lcnJvcicsXG5cdFx0XHRcdFx0ZXJyOiBlcnJvcixcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSxcblx0fSk7XG5cdG5ldyBDaXRlRXJyb3JDaGVjayh7XG5cdFx0dHlwZTogJ3JlZmxpc3QnLFxuXHRcdHRlc3RuYW1lOiAndW5kZWZpbmVkJyxcblx0XHRkZXNjOiAnY2l0ZS11bmRlZmluZWQtZGVzYycsXG5cdFx0ZnVuYzogKHJlZmxpc3QpID0+IHtcblx0XHRcdGNvbnN0IGVycm9ycyA9IFtdO1xuXHRcdFx0Y29uc3QgbG9uZ3JlZnMgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgdmFsdWUgb2YgT2JqZWN0LnZhbHVlcyhyZWZsaXN0KSkge1xuXHRcdFx0XHRjb25zdCB7cmVmbmFtZSwgc2hvcnR0YWd9ID0gdmFsdWU7XG5cdFx0XHRcdGlmICghc2hvcnR0YWcgJiYgcmVmbmFtZSkge1xuXHRcdFx0XHRcdGxvbmdyZWZzW2xvbmdyZWZzLmxlbmd0aF0gPSB2YWx1ZS5yZWZuYW1lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzaG9ydHRhZyAmJiBlcnJvcnMuaW5jbHVkZXMocmVmbmFtZSkgPT09IC0xICYmICFsb25ncmVmcy5pbmNsdWRlcyhyZWZuYW1lKSkge1xuXHRcdFx0XHRcdGVycm9yc1tlcnJvcnMubGVuZ3RoXSA9IHJlZm5hbWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBlcnJvciBvZiBlcnJvcnMpIHtcblx0XHRcdFx0cmV0W3JldC5sZW5ndGhdID0ge1xuXHRcdFx0XHRcdG1zZzogJ2NpdGUtdW5kZWZpbmVkLWVycm9yJyxcblx0XHRcdFx0XHRlcnI6IGVycm9yLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9LFxuXHR9KTtcblxuXHQvLyBleGVjdXRlIG1haW4gZnVuY3Rpb25cblx0Q2l0ZVRCLmluaXQoKTtcbn07XG5cbmV4cG9ydCB7cmVmVG9vbGJhckNvbmZpZ307XG4iLCAiLyogZ2xvYmFsIENpdGVUQiAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL3V0aWwvZ2V0TWVzc2FnZSc7XG5cbmNvbnN0IHJlZlRvb2xiYXJCYXNlID0gKCkgPT4ge1xuXHR3aW5kb3cuQ2l0ZVRCIHx8PSB7XG5cdFx0VGVtcGxhdGVzOiB7fSwgLy8gQWxsIHRlbXBsYXRlc1xuXHRcdE9wdGlvbnM6IHt9LCAvLyBHbG9iYWwgb3B0aW9uc1xuXHRcdFVzZXJPcHRpb25zOiB7fSwgLy8gVXNlciBvcHRpb25zXG5cdFx0RGVmYXVsdE9wdGlvbnM6IHt9LCAvLyBTY3JpcHQgZGVmYXVsdHNcblx0XHRFcnJvckNoZWNrczoge30sIC8vIEVycm9yIGNoZWNrIGZ1bmN0aW9uc1xuXHR9O1xuXG5cdC8vIENsYXNzIGZvciBjaXRlIHRlbXBsYXRlc1xuXHR3aW5kb3cuQ2l0ZVRlbXBsYXRlID0gY2xhc3MgQ2l0ZVRlbXBsYXRlIHtcblx0XHRjb25zdHJ1Y3Rvcih0ZW1wbGF0ZW5hbWUsIHNob3J0Zm9ybSwgYmFzaWNmaWVsZHMsIGV4cGFuZGVkZmllbGRzKSB7XG5cdFx0XHQvLyBQcm9wZXJ0aWVzXG5cdFx0XHR0aGlzLnRlbXBsYXRlbmFtZSA9IHRlbXBsYXRlbmFtZTsgLy8gVGhlIHRlbXBsYXRlIG5hbWUgLSBcImNpdGUgd2ViXCIsIFwiY2l0ZSBib29rXCIsIGV0Yy5cblx0XHRcdHRoaXMuc2hvcnRmb3JtID0gc2hvcnRmb3JtOyAvLyBBIHNob3J0IGZvcm0sIHVzZWQgZm9yIHRoZSBkcm9wZG93biBib3hcblx0XHRcdHRoaXMuYmFzaWMgPSBiYXNpY2ZpZWxkczsgLy8gQmFzaWMgZmllbGRzIC0gYXV0aG9yLCB0aXRsZSwgcHVibGlzaGVyLi4uXG5cblx0XHRcdC8vIExlc3MgY29tbW9uIC0gcXVvdGUsIGFyY2hpdmV1cmwgLSBzaG91bGQgYmUgZXZlcnl0aGluZyB0aGUgdGVtcGxhdGUgc3VwcG9ydHMgbWludXMgdGhlIGJhc2ljIG9uZXNcblx0XHRcdHRoaXMuZXh0cmEgPSBleHBhbmRlZGZpZWxkcztcblx0XHRcdHRoaXMuaW5jcmVtZW50YWJsZXMgPSB7fTtcblxuXHRcdFx0Ly8gQWRkIGl0IHRvIHRoZSBsaXN0XG5cdFx0XHRDaXRlVEIuVGVtcGxhdGVzW3RoaXMudGVtcGxhdGVuYW1lXSA9IHRoaXM7XG5cdFx0fVxuXHRcdG1ha2VGb3JtSW5uZXIoZmllbGRzLCBpbmNyc2V0dXApIHtcblx0XHRcdGNvbnN0IHRycyA9IFtdO1xuXHRcdFx0Y29uc3QgYXV0b2ZpbGxzID0gW107XG5cdFx0XHRsZXQgdHI7XG5cdFx0XHRmb3IgKGNvbnN0IFtpLCBmaWVsZG9ial0gb2YgZmllbGRzLmVudHJpZXMoKSkge1xuXHRcdFx0XHRsZXQge2ZpZWxkfSA9IGZpZWxkb2JqO1xuXHRcdFx0XHRsZXQgbGFiZWxmaWVsZCA9IGZpZWxkb2JqLmZpZWxkO1xuXHRcdFx0XHRsZXQgYWQgPSBmYWxzZTtcblx0XHRcdFx0bGV0IGltO1xuXHRcdFx0XHRpZiAoaW5jcnNldHVwICYmIGZpZWxkb2JqLmluY3JlbWVudF9ncm91cCkge1xuXHRcdFx0XHRcdGZpZWxkID0gZmllbGRvYmouZmllbGQucmVwbGFjZSgnPE4+JywgJzEnKTtcblx0XHRcdFx0XHRsYWJlbGZpZWxkID0gZmllbGRvYmouZmllbGQucmVwbGFjZSgnPE4+JywgJycpO1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdHRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXSAmJlxuXHRcdFx0XHRcdFx0IXRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXS5zZXR1cFxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0Ly8gVGhlIG9iamVjdCBoYXMgYmVlbiBjcmVhdGVkLCBidXQgbm90IGZ1bGx5IGluaXRpYWxpemVkXG5cdFx0XHRcdFx0XHR0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0uZmllbGRzW1xuXHRcdFx0XHRcdFx0XHR0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0uZmllbGRzLmxlbmd0aFxuXHRcdFx0XHRcdFx0XSA9IGZpZWxkb2JqO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIXRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXSkge1xuXHRcdFx0XHRcdFx0Ly8gT2JqZWN0IG5vdCB5ZXQgY3JlYXRlZFxuXHRcdFx0XHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdID0ge1xuXHRcdFx0XHRcdFx0XHRmaWVsZHM6IFtmaWVsZG9ial0sXG5cdFx0XHRcdFx0XHRcdHZhbDogMSxcblx0XHRcdFx0XHRcdFx0c2V0dXA6IGZhbHNlLFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdICYmXG5cdFx0XHRcdFx0XHR0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0uc2V0dXBcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdC8vIEZ1bGx5IGluaXRpYWxpemVkIGZyb20gYSBwcmV2aW91cyBpbnZvY2F0aW9uIG9mIHRoaXMgZnVuY3Rpb24sIGp1c3QgcmVzZXR0aW5nIHRoZSBudW1iZXJcblx0XHRcdFx0XHRcdHRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXS52YWwgPSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXApIHtcblx0XHRcdFx0XHQvLyBBZGRpbmcgYSBuZXcgcm93XG5cdFx0XHRcdFx0Y29uc3QgaW5jcnZhbCA9IHRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXS52YWw7XG5cdFx0XHRcdFx0ZmllbGQgPSBmaWVsZG9iai5maWVsZC5yZXBsYWNlKCc8Tj4nLCBpbmNydmFsLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdGxhYmVsZmllbGQgPSBmaWVsZG9iai5maWVsZC5yZXBsYWNlKCc8Tj4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgYXV0b2RhdGVGaWVsZHMgPSBDaXRlVEIuZ2V0T3B0aW9uKCdhdXRvZGF0ZSBmaWVsZHMnKTtcblx0XHRcdFx0aWYgKGF1dG9kYXRlRmllbGRzLmluY2x1ZGVzKGZpZWxkKSkge1xuXHRcdFx0XHRcdGltID0gJCgnPGltZz4nKS5hdHRyKFxuXHRcdFx0XHRcdFx0J3NyYycsXG5cdFx0XHRcdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi83LzdiL051dm9sYV9hcHBzX2RhdGUuc3ZnLzIwcHgtTnV2b2xhX2FwcHNfZGF0ZS5zdmcucG5nJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aW0uYXR0cignYWx0JywgZ2V0TWVzc2FnZSgnY2l0ZS1pbnNlcnQtZGF0ZScpKS5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ2NpdGUtaW5zZXJ0LWRhdGUnKSk7XG5cdFx0XHRcdFx0YWQgPSAkKCc8YT4nKS5hdHRyKCdocmVmJywgJyMnKTtcblx0XHRcdFx0XHRhZC5hcHBlbmQoaW0pO1xuXHRcdFx0XHRcdGFkLmF0dHIoJ2lkJywgYGNpdGUtZGF0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS0ke2ZpZWxkfWApO1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9uKFxuXHRcdFx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0XHRcdGAjY2l0ZS1kYXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7ZmllbGR9YCxcblx0XHRcdFx0XHRcdENpdGVUQi5maWxsQWNjZXNzZGF0ZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGZpZWxkb2JqLmF1dG9maWxsaWQpIHtcblx0XHRcdFx0XHRjb25zdCBhdXRvdHlwZSA9IGZpZWxkb2JqLmF1dG9maWxsaWQ7XG5cdFx0XHRcdFx0aW0gPSAkKCc8aW1nPicpLmF0dHIoXG5cdFx0XHRcdFx0XHQnc3JjJyxcblx0XHRcdFx0XHRcdCdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iLzEvMTcvU3lzdGVtLXNlYXJjaC5zdmcvMjBweC1TeXN0ZW0tc2VhcmNoLnN2Zy5wbmcnXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpbS5hdHRyKCdhbHQnLCBnZXRNZXNzYWdlKCdjaXRlLWF1dG9maWxsLWFsdCcpKS5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ2NpdGUtYXV0b2ZpbGwtYWx0JykpO1xuXHRcdFx0XHRcdGFkID0gJCgnPGE+JykuYXR0cignaHJlZicsICcjJyk7XG5cdFx0XHRcdFx0YWQuYXBwZW5kKGltKTtcblx0XHRcdFx0XHRhZC5hdHRyKCdpZCcsIGBjaXRlLWF1dG8tJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtmaWVsZH0tJHthdXRvdHlwZX1gKTtcblx0XHRcdFx0XHRhdXRvZmlsbHNbYXV0b2ZpbGxzLmxlbmd0aF0gPSBgI2NpdGUtYXV0by0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS0ke2ZpZWxkfS0ke2F1dG90eXBlfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGZpZWxkb2JqLmluY3JlbWVudF9idXR0b24pIHtcblx0XHRcdFx0XHRjb25zdCBpbmNydHlwZSA9IGZpZWxkb2JqLmluY3JlbWVudF9ncm91cDtcblx0XHRcdFx0XHRpbSA9ICQoJzxpbWc+JykuYXR0cihcblx0XHRcdFx0XHRcdCdzcmMnLFxuXHRcdFx0XHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvYi9iOS9OdXZvbGFfYWN0aW9uX2VkaXRfYWRkLnN2Zy8yMHB4LU51dm9sYV9hY3Rpb25fZWRpdF9hZGQuc3ZnLnBuZydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGltLmF0dHIoJ2FsdCcsIGdldE1lc3NhZ2UoJ2NpdGUtaW5jcmVtZW50LWFsdCcpKS5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ2NpdGUtaW5jcmVtZW50LWFsdCcpKTtcblx0XHRcdFx0XHRhZCA9ICQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnIycpO1xuXHRcdFx0XHRcdGFkLmFwcGVuZChpbSk7XG5cdFx0XHRcdFx0YWQuYXR0cignaWQnLCBgY2l0ZS1pbmNyLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7aW5jcnR5cGV9YCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgZGlzcGxheSA9IGdldE1lc3NhZ2UoYGNpdGUtJHtsYWJlbGZpZWxkfS1sYWJlbGApO1xuXHRcdFx0XHRpZiAodHlwZW9mIGRpc3BsYXkgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0ZGlzcGxheSA9IGZpZWxkb2JqLmxhYmVsID8gQ2l0ZVRCLmZpeFN0cihmaWVsZG9iai5sYWJlbCkgOiBDaXRlVEIuZml4U3RyKGxhYmVsZmllbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHRvb2x0aXAgPSBmaWVsZG9iai50b29sdGlwXG5cdFx0XHRcdFx0PyAkKCc8YWJicj4nKS5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoZmllbGRvYmoudG9vbHRpcCkpLmh0bWwoJCgnPHN1cD4nKS50ZXh0KCc/JykpXG5cdFx0XHRcdFx0OiBmYWxzZTtcblx0XHRcdFx0bGV0IGlucHV0ID0gJyc7XG5cdFx0XHRcdGlucHV0ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0XHRcdHRhYmluZGV4OiAnMScsXG5cdFx0XHRcdFx0c3R5bGU6IGFkID8gJ3dpZHRoOiA4NSUnIDogJ3dpZHRoOiAxMDAlJyxcblx0XHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpbnB1dC5hdHRyKCdpZCcsIGBjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7ZmllbGR9YCk7XG5cdFx0XHRcdGlmIChmaWVsZG9iai5hdXRvZmlsbHByb3ApIHtcblx0XHRcdFx0XHRsZXQgY2xhc3NuYW1lID0gYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtmaWVsZG9iai5hdXRvZmlsbHByb3B9YDtcblx0XHRcdFx0XHRpZiAoZmllbGRvYmouaW5jcmVtZW50X2dyb3VwKSB7XG5cdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWF3aWtpL2NsYXNzLWRvY1xuXHRcdFx0XHRcdFx0aW5wdXQuYWRkQ2xhc3MoYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0taW5jci0ke2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cH1gKTtcblx0XHRcdFx0XHRcdGNsYXNzbmFtZSArPSBgLSR7dGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdLnZhbC50b1N0cmluZygpfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtZWRpYXdpa2kvY2xhc3MtZG9jXG5cdFx0XHRcdFx0aW5wdXQuYWRkQ2xhc3MoY2xhc3NuYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBsYWJlbCA9ICQoJzxsYWJlbD4nKTtcblx0XHRcdFx0bGFiZWwuYXR0cignZm9yJywgYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtmaWVsZH1gKS50ZXh0KGRpc3BsYXkpO1xuXHRcdFx0XHRpZiAodG9vbHRpcCkge1xuXHRcdFx0XHRcdGxhYmVsLmFwcGVuZCh0b29sdGlwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgc3R5bGUgPSAndGV4dC1hbGlnbjogcmlnaHQ7IHdpZHRoOiAyMCU7Jztcblx0XHRcdFx0aWYgKGkgJSAyID09PSAxKSB7XG5cdFx0XHRcdFx0c3R5bGUgKz0gJyBwYWRkaW5nLWxlZnQ6IDFlbTsnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRyID0gJCgnPHRyPicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHRkMSA9ICQoJzx0ZD4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLXRkJykuYXR0cih7XG5cdFx0XHRcdFx0c3R5bGUsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0ZDEuYXBwZW5kKGxhYmVsKTtcblx0XHRcdFx0dHIuYXBwZW5kKHRkMSk7XG5cdFx0XHRcdGNvbnN0IHRkMiA9ICQoJzx0ZD4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLXRkJykuY3NzKCd3aWR0aCcsICczMCUnKTtcblx0XHRcdFx0dGQyLmFwcGVuZChpbnB1dCk7XG5cdFx0XHRcdGlmIChhZCkge1xuXHRcdFx0XHRcdHRkMi5hcHBlbmQoYWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRyLmFwcGVuZCh0ZDIpO1xuXHRcdFx0XHRpZiAoaSAlIDIgPT09IDApIHtcblx0XHRcdFx0XHR0cnNbdHJzLmxlbmd0aF0gPSB0cjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGV0IG5lZWRzZXR1cCA9IGZhbHNlO1xuXHRcdFx0Zm9yIChjb25zdCBnIGluIHRoaXMuaW5jcmVtZW50YWJsZXMpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmluY3JlbWVudGFibGVzW2ddLnNldHVwKSB7XG5cdFx0XHRcdFx0bmVlZHNldHVwID0gdHJ1ZTtcblx0XHRcdFx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCBgI2NpdGUtaW5jci0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS0ke2d9YCwgQ2l0ZVRCLmluY3JlbWVudEZpZWxkcyk7XG5cdFx0XHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlc1tnXS5zZXR1cCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChuZWVkc2V0dXAgfHwgT2JqZWN0LmtleXModGhpcy5pbmNyZW1lbnRhYmxlcykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgYXV0b2ZpbGwgb2YgYXV0b2ZpbGxzKSB7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgYXV0b2ZpbGwsIENpdGVUQi5pbml0QXV0b2ZpbGwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJzO1xuXHRcdH1cblx0XHQvLyBnaXZlcyBhIGxpdHRsZSBiaXQgb2YgSFRNTCBzbyB0aGUgb3BlbiBmb3JtIGNhbiBiZSBpZGVudGlmaWVkXG5cdFx0Z2V0SW5pdGlhbCgpIHtcblx0XHRcdGNvbnN0IGhpZGRlbiA9ICQoJzxpbnB1dD4nKS5hZGRDbGFzcygnY2l0ZS10ZW1wbGF0ZScpLmF0dHIoe1xuXHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0dmFsdWU6IHRoaXMudGVtcGxhdGVuYW1lLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gaGlkZGVuO1xuXHRcdH1cblx0XHQvLyBtYWtlcyB0aGUgZm9ybSB1c2VkIGluIHRoZSBkaWFsb2cgYm94ZXNcblx0XHRnZXRGb3JtKCkge1xuXHRcdFx0Y29uc3QgbWFpbiA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2NpdGUtZm9ybS1jb250YWluZXInKTtcblx0XHRcdGNvbnN0IGZvcm0xID0gJCgnPHRhYmxlPicpLmFkZENsYXNzKCdjaXRlLWJhc2ljLWZpZWxkcycpLmNzcyh7XG5cdFx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdH0pO1xuXHRcdFx0bGV0IHRycyA9IHRoaXMubWFrZUZvcm1Jbm5lcih0aGlzLmJhc2ljLCB0cnVlKTtcblx0XHRcdGZvciAoY29uc3QgdHIgb2YgdHJzKSB7XG5cdFx0XHRcdGZvcm0xLmFwcGVuZCh0cik7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBmb3JtMiA9ICQoJzx0YWJsZT4nKS5hZGRDbGFzcygnY2l0ZS1leHRyYS1maWVsZHMnKS5jc3Moe1xuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdGRpc3BsYXk6ICdub25lJyxcblx0XHRcdH0pO1xuXHRcdFx0dHJzID0gdGhpcy5tYWtlRm9ybUlubmVyKHRoaXMuZXh0cmEsIHRydWUpO1xuXHRcdFx0Zm9yIChjb25zdCB0ciBvZiB0cnMpIHtcblx0XHRcdFx0Zm9ybTIuYXBwZW5kKHRyKTtcblx0XHRcdH1cblx0XHRcdG1haW4uYXBwZW5kKGZvcm0xKS5hcHBlbmQoZm9ybTIpO1xuXHRcdFx0Y29uc3QgZm9ybTMgPSAkKCc8dGFibGU+JykuYWRkQ2xhc3MoJ2NpdGUtb3RoZXItZmllbGRzJykuY3NzKHtcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHQncGFkZGluZy10b3AnOiAnMWVtJyxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgJHRyID0gJCgnPHRyPicpO1xuXHRcdFx0Y29uc3QgJHRkMSA9ICQoJzx0ZD4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLXRkJykuY3NzKHtcblx0XHRcdFx0J3RleHQtYWxpZ24nOiAncmlnaHQnLFxuXHRcdFx0XHR3aWR0aDogJzIwJScsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0ICRsYWJlbDEgPSAkKCc8bGFiZWw+Jyk7XG5cdFx0XHQkbGFiZWwxLmF0dHIoJ2ZvcicsIGBjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LW5hbWVgKS50ZXh0KGdldE1lc3NhZ2UoJ2NpdGUtbmFtZS1sYWJlbCcpKTtcblx0XHRcdCR0ZDEuYXBwZW5kKCRsYWJlbDEpO1xuXHRcdFx0Y29uc3QgdGQyID0gJCgnPHRkPicpLmFkZENsYXNzKCdjaXRlLWZvcm0tdGQnKS5jc3MoJ3dpZHRoJywgJzMwJScpO1xuXHRcdFx0Y29uc3QgaW5wdXQxID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0XHR0YWJpbmRleDogJzEnLFxuXHRcdFx0XHRzdHlsZTogJ3dpZHRoOiAxMDAlJyxcblx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0fSk7XG5cdFx0XHRpbnB1dDEuYXR0cignaWQnLCBgY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS1uYW1lYCk7XG5cdFx0XHR0ZDIuYXBwZW5kKGlucHV0MSk7XG5cdFx0XHRjb25zdCB0ZDMgPSAkKCc8dGQ+JykuYWRkQ2xhc3MoJ2NpdGUtZm9ybS10ZCcpLmNzcyh7XG5cdFx0XHRcdCd0ZXh0LWFsaWduJzogJ3JpZ2h0Jyxcblx0XHRcdFx0J3BhZGRpbmctbGVmdCc6ICcxZW0nLFxuXHRcdFx0XHR3aWR0aDogJzIwJScsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGxhYmVsMiA9ICQoJzxsYWJlbD4nKTtcblx0XHRcdGxhYmVsMi5hdHRyKCdmb3InLCBgY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS1ncm91cGApLnRleHQoZ2V0TWVzc2FnZSgnY2l0ZS1ncm91cC1sYWJlbCcpKTtcblx0XHRcdHRkMy5hcHBlbmQobGFiZWwyKTtcblx0XHRcdGNvbnN0IHRkNCA9ICQoJzx0ZD4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLXRkJykuY3NzKCd3aWR0aCcsICczMCUnKTtcblx0XHRcdGNvbnN0IGlucHV0MiA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdFx0dGFiaW5kZXg6ICcxJyxcblx0XHRcdFx0c3R5bGU6ICd3aWR0aDogMTAwJScsXG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdH0pO1xuXHRcdFx0aW5wdXQyLmF0dHIoJ2lkJywgYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tZ3JvdXBgKTtcblx0XHRcdHRkNC5hcHBlbmQoaW5wdXQyKTtcblx0XHRcdCR0ci5hcHBlbmQoJHRkMSkuYXBwZW5kKHRkMikuYXBwZW5kKHRkMykuYXBwZW5kKHRkNCk7XG5cdFx0XHRmb3JtMy5hcHBlbmQoJHRyKTtcblx0XHRcdG1haW4uYXBwZW5kKGZvcm0zKTtcblx0XHRcdGNvbnN0IGV4dHJhcyA9ICQoJzxkaXY+Jyk7XG5cdFx0XHRleHRyYXMuYXBwZW5kKFxuXHRcdFx0XHQkKCc8aW5wdXQ+JykuYWRkQ2xhc3MoJ2NpdGUtZm9ybS1zdGF0dXMnKS5hdHRyKHtcblx0XHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0XHR2YWx1ZTogJ2Nsb3NlZCcsXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgaGlkZGVuID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdjaXRlLXRlbXBsYXRlJykuYXR0cigndHlwZScsICdoaWRkZW4nKTtcblx0XHRcdGhpZGRlbi52YWwodGhpcy50ZW1wbGF0ZW5hbWUpO1xuXHRcdFx0ZXh0cmFzLmFwcGVuZChoaWRkZW4pO1xuXHRcdFx0Y29uc3Qgc3BhbjEgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnY2l0ZS1wcmV2aWV3LWxhYmVsJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHRcdHNwYW4xLnRleHQoZ2V0TWVzc2FnZSgnY2l0ZS1yYXctcHJldmlldycpKTtcblx0XHRcdGV4dHJhcy5hcHBlbmQoc3BhbjEpLmFwcGVuZChcblx0XHRcdFx0JCgnPGRpdj4nKS5hZGRDbGFzcygnY2l0ZS1yZWYtcHJldmlldycpLmNzcyh7XG5cdFx0XHRcdFx0cGFkZGluZzogJzAuNWVtJyxcblx0XHRcdFx0XHQnZm9udC1zaXplJzogJzExMCUnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IHNwYW4yID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2NpdGUtcHJldi1wYXJzZWQtbGFiZWwnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0c3BhbjIudGV4dChnZXRNZXNzYWdlKCdjaXRlLXBhcnNlZC1sYWJlbCcpKTtcblx0XHRcdGV4dHJhcy5hcHBlbmQoc3BhbjIpLmFwcGVuZChcblx0XHRcdFx0JCgnPGRpdj4nKS5hZGRDbGFzcygnY2l0ZS1wcmV2aWV3LXBhcnNlZCcpLmNzcyh7XG5cdFx0XHRcdFx0J3BhZGRpbmctYm90dG9tJzogJzAuNWVtJyxcblx0XHRcdFx0XHQnZm9udC1zaXplJzogJzExMCUnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGxpbmsgPSAkKCc8YT4nKS5hZGRDbGFzcygnY2l0ZS1wcmV2LXBhcnNlJykuYXR0cignaHJlZicsICcjJykuY3NzKHtcblx0XHRcdFx0bWFyZ2luOiAnMCAxZW0nLFxuXHRcdFx0XHRkaXNwbGF5OiAnbm9uZScsXG5cdFx0XHRcdGNvbG9yOiAnIzAwMDA4YicsXG5cdFx0XHR9KTtcblx0XHRcdGxpbmsudGV4dChnZXRNZXNzYWdlKCdjaXRlLWZvcm0tcGFyc2UnKSk7XG5cdFx0XHRleHRyYXMuYXBwZW5kKGxpbmspO1xuXHRcdFx0bWFpbi5hcHBlbmQoZXh0cmFzKTtcblx0XHRcdHJldHVybiBtYWluO1xuXHRcdH1cblx0fTtcblx0LyoqXG5cdCAqIENsYXNzIGZvciBlcnJvciBjaGVja3Ncblx0ICogRklYTUU6IERPQ1MgT1VUIE9GIERBVEVcblx0ICogdHlwZSAtIHR5cGUgb2YgZXJyb3IgY2hlY2sgLSBjdXJyZW50IG9wdGlvbnM6XG5cdCAqICogJ3JlZmNoZWNrJyAtIGFwcGx5IGEgZnVuY3Rpb24gb24gZWFjaCByZWYgaW5kaXZpZHVhbGx5XG5cdCAqIC0gZnVuY3Rpb24gc2hvdWxkIGFjY2VwdCBhIHJlZiBvYmplY3QsIHJldHVybiBhIHN0cmluZ1xuXHQgKiAqICdyZWZsaXN0JyAtIGFwcGx5IGEgZnVuY3Rpb24gb24gdGhlIGVudGlyZSByZWYgbGlzdFxuXHQgKiAtIGZ1bmN0aW9uIHNob3VsZCBhY2NlcHQgYW4gYXJyYXkgb2YgcmVmIG9iamVjdHMsIHJldHVybiBhbiBhcnJheSBvZiBzdHJpbmdzXG5cdCAqICogJ3NlYXJjaCcgLSBhcHBseSBhIGZ1bmN0aW9uIHJvIHRoZSBwYWdlIHRleHRcblx0ICogLSBmdW5jdGlvbiBzaG91bGQgYWNjZXB0IHRoZSBwYWdlIHRleHQgYXMgYSBzdHJpbmcsIHJldHVybiBhbiBhcnJheSBvZiBzdHJpbmdzXG5cdCAqIFRoZSBzdHJpbmdzIHJldHVybmVkIGJ5IHRoZSBmdW5jdGlvbiBzaG91bGQgYmUgdmFsaWQgSFRNTFxuXHQgKiBmdW5jdGlvbiAtIFRoZSBmdW5jdGlvbiBkZXNjcmliZWQgYWJvdmUgdGVzdG5hbWUgLSBOYW1lIG9mIHRoZSBlcnJvciBjaGVjaywgbXVzdCBub3QgY29udGFpbiBzcGFjZXNcblx0ICogZGVzYyAtIEEgc2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHRlc3Rcblx0ICpcblx0ICogQHBhcmFtIHt1bmtub3dufSBvYmpcblx0ICovXG5cdHdpbmRvdy5DaXRlRXJyb3JDaGVjayA9IGNsYXNzIENpdGVFcnJvckNoZWNrIHtcblx0XHRjb25zdHJ1Y3RvcihvYmopIHtcblx0XHRcdHRoaXMub2JqID0gb2JqO1xuXG5cdFx0XHRDaXRlVEIuRXJyb3JDaGVja3NbdGhpcy5vYmoudGVzdG5hbWVdID0gdGhpcztcblx0XHR9XG5cdFx0cnVuKCkge1xuXHRcdFx0bGV0IGVycm9ycyA9IFtdO1xuXHRcdFx0c3dpdGNoICh0aGlzLm9iai50eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ3JlZmNoZWNrJzpcblx0XHRcdFx0XHRDaXRlVEIubG9hZFJlZnMoKTtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IENpdGVUQi5tYWluUmVmTGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0Y29uc3QgZSA9IHRoaXMub2JqLmZ1bmMoQ2l0ZVRCLm1haW5SZWZMaXN0W2ldKTtcblx0XHRcdFx0XHRcdGlmIChlKSB7XG5cdFx0XHRcdFx0XHRcdGVycm9yc1tlcnJvcnMubGVuZ3RoXSA9IGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZWZsaXN0Jzpcblx0XHRcdFx0XHRDaXRlVEIubG9hZFJlZnMoKTtcblx0XHRcdFx0XHRlcnJvcnMgPSB0aGlzLm9iai5mdW5jKENpdGVUQi5tYWluUmVmTGlzdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3NlYXJjaCc6IHtcblx0XHRcdFx0XHRjb25zdCB7ZnVuY30gPSB0aGlzLm9iajtcblx0XHRcdFx0XHRDaXRlVEIuZ2V0UGFnZVRleHQoKHRleHQpID0+IHtcblx0XHRcdFx0XHRcdGVycm9ycyA9IGZ1bmModGV4dCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBlcnJvcnM7XG5cdFx0fVxuXHRcdGdldFJvdygpIHtcblx0XHRcdGNvbnN0IHJvdyA9ICQoJzxsaT4nKTtcblx0XHRcdGNvbnN0IGNoZWNrID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRuYW1lOiAnY2l0ZS1lcnItdGVzdCcsXG5cdFx0XHR9KTtcblx0XHRcdGNoZWNrLmF0dHIoJ3ZhbHVlJywgdGhpcy5vYmoudGVzdG5hbWUpO1xuXHRcdFx0Y29uc3QgbGFiZWwgPSAkKCc8bGFiZWw+JykuaHRtbChnZXRNZXNzYWdlKHRoaXMub2JqLmRlc2MpKTtcblx0XHRcdGxhYmVsLmF0dHIoJ2ZvcicsIHRoaXMub2JqLnRlc3RuYW1lKTtcblx0XHRcdHJvdy5hcHBlbmQoY2hlY2spLmFwcGVuZCgnICZuZGFzaDsgJykuYXBwZW5kKGxhYmVsKTtcblx0XHRcdHJldHVybiByb3c7XG5cdFx0fVxuXHR9O1xuXG5cdCQoZG9jdW1lbnQpLmZpbmQoJ2hlYWQnKS50cmlnZ2VyKCdyZWZ0b29sYmFyYmFzZScpO1xufTtcblxuZXhwb3J0IHtyZWZUb29sYmFyQmFzZX07XG4iLCAiaW1wb3J0IHtXR19VU0VSX0xBTkdVQUdFfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgcmVmVG9vbGJhck1lc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdGlmIChXR19VU0VSX0xBTkdVQUdFID09PSAnZW4nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIEFsbCB1c2VyLWZhY2luZyBtZXNzYWdlc1xuXHQvLyBUT0RPOiBEb2N1bWVudCB1c2FnZVxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMoV0dfVVNFUl9MQU5HVUFHRSkpIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2NpdGUtc2VjdGlvbi1sYWJlbCc6ICflvJXnlKgnLFxuXHRcdFx0J2NpdGUtdGVtcGxhdGUtbGlzdCc6ICfmqKHmnb8nLFxuXHRcdFx0J2NpdGUtbmFtZWQtcmVmcy1sYWJlbCc6ICflkIzlkI3mlofnjbsnLFxuXHRcdFx0J2NpdGUtbmFtZWQtcmVmcy10aXRsZSc6ICfmj5LlhaXlkIzlkI3mlofnjbsnLFxuXHRcdFx0J2NpdGUtbmFtZWQtcmVmcy1idXR0b24nOiAn5bey5ZG95ZCN5Y+D6ICD5paH5427Jyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtZHJvcGRvd24nOiAn5ZCM5ZCN5paH5427Jyxcblx0XHRcdC8vIFVzZWQgb24gdGhlIHRvcCBvZiB0aGUgbmFtZWQgcmVmcyBsaXN0IGRyb3Bzb3duXG5cdFx0XHQnY2l0ZS1lcnJvcmNoZWNrLWxhYmVsJzogJ+mMr+iqpOaqouafpScsXG5cdFx0XHQnY2l0ZS1lcnJvcmNoZWNrLWJ1dHRvbic6ICfmqqLmn6XpjK/oqqQnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWJhc2UnOiAn5byV55SoJyxcblx0XHRcdCdjaXRlLWZvcm0tc3VibWl0JzogJ+aPkuWFpScsXG5cdFx0XHQnY2l0ZS1mb3JtLXNob3doaWRlJzogJ+mhr+ekui/pmrHol4/poY3lpJbljYDln58nLFxuXHRcdFx0J2NpdGUtbm8tbmFtZWRyZWZzJzogJ+WcqOacrOmggeaJvuS4jeWIsOS7u+S9leWQjOWQjeaWh+eNuycsXG5cdFx0XHQnY2l0ZS1uYW1lZHJlZnMtaW50cm8nOiAn5b6e5YiX5Ye655qE5Y+D6ICD5paH542755uu6YyE5Lit6YG45pOH5LiA5YCL5ZCN5a2X44CC6bue5pOK44CM5o+S5YWl44CN5o+S5YWl5LiA5YCL5Y+D6ICD5paH54275Yiw5paH5pys5Lit44CCJyxcblx0XHRcdCdjaXRlLXJhdy1wcmV2aWV3JzogJ1dpa2l0ZXh0OicsXG5cdFx0XHQnY2l0ZS1wYXJzZWQtbGFiZWwnOiAn6Kej5p6Q5b6M55qEd2lraXRleHQ6Jyxcblx0XHRcdCdjaXRlLWZvcm0tcGFyc2UnOiAn6aGv56S66Kej5p6Q5b6M55qE6aCQ6Ka9Jyxcblx0XHRcdCdjaXRlLXJlZnByZXZpZXcnOiAn6aCQ6Ka9Jyxcblx0XHRcdCdjaXRlLW5hbWUtbGFiZWwnOiAncmVm5ZCNJyxcblx0XHRcdCdjaXRlLWdyb3VwLWxhYmVsJzogJ3JlZue1hCcsXG5cdFx0XHQnY2l0ZS1lcnJvcmNoZWNrLXN1Ym1pdCc6ICfmqqLmn6UnLFxuXHRcdFx0J2NpdGUtZXJyb3JjaGVjay1oZWFkaW5nJzogJ+aqouafpeS4i+WIl+mMr+iqpO+8micsXG5cdFx0XHQnY2l0ZS1lcnJvci11bmNsb3NlZCc6ICfmnKrpl5zplok8dHQ+Jmx0O3JlZiZndDs8L3R0PuaomeiomCcsXG5cdFx0XHQnY2l0ZS1lcnJvci1zYW1lY29udGVudCc6ICfmnInnm7jlkIzlhaflrrnnmoTlj4PogIPmlofnjbsnLFxuXHRcdFx0J2NpdGUtZXJyb3ItdGVtcGxhdGVzJzogYOWPg+iAg+aWh+eNu+acquS9v+eUqDxhIGhyZWY9XCIke213LnV0aWwuZ2V0VXJsKCdDYXRlZ29yeTrlvJXnlKjmqKHmnb8nKX1cIj7lvJXnlKjmqKHmnb88L2E+YCxcblx0XHRcdCdjaXRlLWVycm9yLXJlcGVhdGVkJzogJ+WkmuWAi+WPg+iAg+aWh+eNu+acieebuOWQjOWQjeeosScsXG5cdFx0XHQnY2l0ZS1lcnJvci11bmRlZic6ICfmnInmnKrlrprnvqnnmoTlkIzlkI3lj4PogIPmlofnjbvlnKjkvb/nlKgnLFxuXHRcdFx0J2NpdGUtZXJyb3Itc2FtZWNvbnRlbnQtbXNnJzogJ+WkmuWAi+aWh+eNu+WQq+acieebuOWQjOWFp+WuuTogJDEnLFxuXHRcdFx0J2NpdGUtZXJyb3ItcmVwZWF0ZWQtbXNnJzogJ+e1puWkmuWAi+WPg+iAg+aWh+eNu+WRveWQjTog44CMJDHjgI0nLFxuXHRcdFx0J2NpdGUtZXJyb3ItdGVtcGxhdGVzLW1zZyc6ICfmspLmnInkvb/nlKjmqKHmnb86ICQxJyxcblx0XHRcdCdjaXRlLWZvcm0tcmVzZXQnOiAn6YeN6Kit6KGo5ZauJyxcblx0XHRcdCdjaXRlLWxvYWRpbmcnOiAn6LyJ5YWl5pW45pOaJyxcblx0XHRcdC8vIFNob3duIHdoaWxlIHBhZ2V0ZXh0IGlzIGJlaW5nIGRvd25sb2FkZWQgZnJvbSB0aGUgQVBJXG5cdFx0XHQnY2l0ZS1pbnNlcnQtZGF0ZSc6ICfmj5LlhaXnlbbliY3ml6XmnJ8nLFxuXHRcdFx0Ly8gQWx0L3RpdGxlIHRleHQgZm9yIFwiaW5zZXJ0IGRhdGVcIiBpY29uXG5cdFx0XHQnY2l0ZS1lcnItcmVwb3J0LWhlYWRpbmcnOiAn5byV55So6Yyv6Kqk5aCx5ZGKJyxcblx0XHRcdC8vIEhlYWRpbmcgZm9yIGVycm9yIHJlcG9ydCB0YWJsZVxuXHRcdFx0J2NpdGUtZXJyLXJlcG9ydC1jbG9zZSc6ICfpl5zploknLFxuXHRcdFx0Ly8gQWx0L3RpdGxlIHRleHQgZm9yIFwiY2xvc2VcIiBpY29uIG9uIGVycm9yIHJlcG9ydFxuXHRcdFx0J2NpdGUtZXJyLXJlcG9ydC1lbXB0eSc6ICfmnKrmib7liLDpjK/oqqQnLFxuXHRcdFx0Ly8gTWVzc2FnZSBkaXNwbGF5ZWQgaW4gdGhlIGVycm9yIHJlcG9ydCBsaXN0IGlmIHRoZXJlIGFyZSBubyBlcnJvcnNcblx0XHRcdCdjaXRlLWF1dG9maWxsLWFsdCc6ICfoh6rli5XloavlhYUnLFxuXHRcdFx0Ly8gQWx0IHRleHQgZm9yIGF1dG9maWxsIGJ1dHRvbiBpbWFnZVxuXHRcdFx0J2NpdGUtcmVmLXRvb2x0aXAnOiAn6Yyo6bue55qE5qiZ6K2Y56ym77yI5L2/6Kmy5byV55So5Y+v5Lul5oiQ54K65YWn6YOo6YCj57WQ55qE55uu5qiZ77yJJyxcblx0XHRcdCdjaXRlLXBvc3RzY3JpcHQtdG9vbHRpcCc6ICflpoLmnpzoqK3lrprpgJnkuIDlj4PmlbjvvIzliYfopobok4vkvb/nlKjlj6Xpu57ntYLmraLlvJXmlofnmoTpu5joqo3ooYzniLInLFxuXHRcdFx0J2NpdGUtZGlhbG9nLXdlYic6ICfntrLpoIHlvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLW5ld3MnOiAn5paw6IGe5byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1ib29rJzogJ+abuOexjeW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctam91cm5hbCc6ICfmnJ/liIrlvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWNvbmZlcmVuY2UnOiAn5pyD6K2w5byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1lbmN5Y2xvcGVkaWEnOiAn55m+56eR5YWo5pu45byV55SoJyxcblx0XHRcdCdjaXRlLWF1dGhvci1sYWJlbCc6ICfkvZzogIUnLFxuXHRcdFx0J2NpdGUtdGl0bGUtbGFiZWwnOiAn5qiZ6aGMJyxcblx0XHRcdCdjaXRlLXVybC1sYWJlbCc6ICfntrLlnYAnLFxuXHRcdFx0J2NpdGUtd2Vic2l0ZS1sYWJlbCc6ICfntrLnq5nlkI3nqLEnLFxuXHRcdFx0J2NpdGUtd29yay1sYWJlbCc6ICfloLHntJnmiJbpm5zoqownLFxuXHRcdFx0J2NpdGUtYWdlbmN5LWxhYmVsJzogJ+mAmuioiuekvicsXG5cdFx0XHQnY2l0ZS1wdWJsaXNoZXItbGFiZWwnOiAn5Ye654mI6ICFJyxcblx0XHRcdCdjaXRlLWFjY2Vzc2RhdGUtbGFiZWwnOiAn5a2Y5Y+W5pel5pyfJyxcblx0XHRcdCdjaXRlLWxhc3QtbGFiZWwnOiAn5aeTJyxcblx0XHRcdCdjaXRlLWZpcnN0LWxhYmVsJzogJ+WQjScsXG5cdFx0XHQnY2l0ZS1hdXRob3JsaW5rLWxhYmVsJzogJ+S9nOiAheaineebricsXG5cdFx0XHQnY2l0ZS1jb2F1dGhvcnMtbGFiZWwnOiAn5YW25LuW5L2c6ICFJyxcblx0XHRcdCdjaXRlLWxvY2F0aW9uLWxhYmVsJzogJ+WHuueJiOWcsCcsXG5cdFx0XHQnY2l0ZS1wYWdlLWxhYmVsJzogJ+aJgOWcqOmggScsXG5cdFx0XHQnY2l0ZS1wYWdlcy1sYWJlbCc6ICfpoIHnr4TlnI0nLFxuXHRcdFx0J2NpdGUtYXQtbGFiZWwnOiAn5pu45YWn6YOo5YiGJyxcblx0XHRcdCdjaXRlLWxhbmd1YWdlLWxhYmVsJzogJ+iqnuiogCcsXG5cdFx0XHQnY2l0ZS1mb3JtYXQtbGFiZWwnOiAn5paH5Lu25qC85byPJyxcblx0XHRcdCdjaXRlLWRvaS1sYWJlbCc6ICdET0knLFxuXHRcdFx0J2NpdGUtZGF0ZS1sYWJlbCc6ICfml6XmnJ8nLFxuXHRcdFx0J2NpdGUtbW9udGgtbGFiZWwnOiAn5pyI5Lu9Jyxcblx0XHRcdCdjaXRlLXllYXItbGFiZWwnOiAn5bm05Lu9Jyxcblx0XHRcdCdjaXRlLXF1b3RlLWxhYmVsJzogJ+aRmOmMhCcsXG5cdFx0XHQnY2l0ZS1uZXdzcGFwZXItbGFiZWwnOiAn5paw6IGe5aqS6auUJyxcblx0XHRcdCdjaXRlLWF1dGhvcjItbGFiZWwnOiAn56ysMuS9nOiAhScsXG5cdFx0XHQnY2l0ZS1hdXRob3IzLWxhYmVsJzogJ+esrDPkvZzogIUnLFxuXHRcdFx0J2NpdGUtYXV0aG9yNC1sYWJlbCc6ICfnrKw05L2c6ICFJyxcblx0XHRcdCdjaXRlLWF1dGhvcjUtbGFiZWwnOiAn56ysNeS9nOiAhScsXG5cdFx0XHQnY2l0ZS1hZ2VuY3knOiAn6YCa6KiK56S+Jyxcblx0XHRcdCdjaXRlLWlzc24tbGFiZWwnOiAnSVNTTicsXG5cdFx0XHQnY2l0ZS1vY2xjLWxhYmVsJzogJ09DTEMnLFxuXHRcdFx0J2NpdGUtYmliY29kZS1sYWJlbCc6ICdCaWJjb2RlJyxcblx0XHRcdCdjaXRlLWlzYm4tbGFiZWwnOiAnSVNCTicsXG5cdFx0XHQnY2l0ZS1vdGhlcnMtbGFiZWwnOiAn6K2v6ICFJyxcblx0XHRcdCdjaXRlLWVkaXRpb24tbGFiZWwnOiAn54mI5pysJyxcblx0XHRcdCdjaXRlLXRyYW5zLXRpdGxlLWxhYmVsJzogJ+e/u+itr+W+jOaomemhjCcsXG5cdFx0XHQnY2l0ZS1yZWYtbGFiZWwnOiAn6Yyo6bue5qiZ6K2Y56ymJyxcblx0XHRcdCdjaXRlLXBvc3RzY3JpcHQtbGFiZWwnOiAn57uT5bC+56ymJyxcblx0XHRcdCdjaXRlLXNlcmllcy1sYWJlbCc6ICfns7vliJcnLFxuXHRcdFx0J2NpdGUtdm9sdW1lLWxhYmVsJzogJ+WNtycsXG5cdFx0XHQnY2l0ZS11bmlmaWVkLWxhYmVsJzogJ+e1seS4gOabuOiZnycsXG5cdFx0XHQnY2l0ZS1jaGFwdGVyLWxhYmVsJzogJ+eroOevgCcsXG5cdFx0XHQnY2l0ZS1qb3VybmFsLWxhYmVsJzogJ+mbnOiqjC/mnJ/liIonLFxuXHRcdFx0J2NpdGUtaXNzdWUtbGFiZWwnOiAn5pyfJyxcblx0XHRcdCdjaXRlLXBtaWQtbGFiZWwnOiAnUE1JRCcsXG5cdFx0XHQnY2l0ZS1lZGl0b3ItbGFiZWwnOiAn57eo6LyvJyxcblx0XHRcdCdjaXRlLWVkaXRvcjEtZmlyc3QtbGFiZWwnOiAn57eo6Lyv5ZCNJyxcblx0XHRcdCdjaXRlLWVkaXRvcjEtbGFzdC1sYWJlbCc6ICfnt6jovK/lp5MnLFxuXHRcdFx0J2NpdGUtZWRpdG9yMS1saW5rLWxhYmVsJzogJ+e3qOi8r+aineebricsXG5cdFx0XHQnY2l0ZS1lZGl0b3ItZmlyc3QtbGFiZWwnOiAn57eo6Lyv5ZCNJyxcblx0XHRcdCdjaXRlLWVkaXRvci1sYXN0LWxhYmVsJzogJ+e3qOi8r+WnkycsXG5cdFx0XHQnY2l0ZS1lZGl0b3ItbGluay1sYWJlbCc6ICfnt6jovK/mop3nm64nLFxuXHRcdFx0J2NpdGUtcG1jLWxhYmVsJzogJ1BNQycsXG5cdFx0XHQnY2l0ZS1pZC1sYWJlbCc6ICdJRCcsXG5cdFx0XHQnY2l0ZS1sYXlzdW1tYXJ5LWxhYmVsJzogJ+ewoeaYjuaRmOimgScsXG5cdFx0XHQnY2l0ZS1sYXlzb3VyY2UtbGFiZWwnOiAn57Ch5piO5pGY6KaB5L6G5rqQJyxcblx0XHRcdCdjaXRlLWxheWRhdGUtbGFiZWwnOiAn57Ch5piO5pGY6KaB5pel5pyfJyxcblx0XHRcdCdjaXRlLWNvbmZlcmVuY2UtbGFiZWwnOiAn5pyD6K2w5ZCN56ixJyxcblx0XHRcdCdjaXRlLWNvbmZlcmVuY2V1cmwtbGFiZWwnOiAn5pyD6K2w57ay5Z2AJyxcblx0XHRcdCdjaXRlLWJvb2t0aXRsZS1sYWJlbCc6ICfoq5bmlofpm4YnLFxuXHRcdFx0J2NpdGUtZW5jeWNsb3BlZGlhLWxhYmVsJzogJ+eZvuenkeWFqOabuOWQjScsXG5cdFx0XHQnY2l0ZS1hdXRob3JsaW5rLXRvb2x0aXAnOiAn6Iul6Kmy5L2c6ICF5pyJ5qKd55uu77yM5aGr5a+r5qKd55uu5ZCN56ixJyxcblx0XHRcdCdjaXRlLWF0LXRvb2x0aXAnOiAn5YWn5a655Zyo5L6G5rqQ5Lit55qE5L2N572u77yI55W25oyJ6aCB56K85byV55So5LiN6YGp55W25pmC77yJJyxcblx0XHRcdCdjaXRlLWFjY2Vzc2RhdGUtdG9vbHRpcCc6ICfoqKrllY/pgJnlgIvlvJXnlKjkvobmupDmmYLnmoTml6XmnJ8nLFxuXHRcdFx0J2NpdGUtaWQtdG9vbHRpcCc6ICflhbbku5bnmoTmlofnq6Dnt6jomZ8nLFxuXHRcdFx0J2NpdGUtc2FtZWNvbnRlbnQtZGVzYyc6ICfmqqLmn6XlkKvmnInnm7jlkIzlhaflrrnnmoTlpJrlgIvlj4PogIPmlofnjbsnLFxuXHRcdFx0J2NpdGUtc2FtZWNvbnRlbnQtZXJyb3InOiAn5aSa5YCL5Y+D6ICD5paH54275YyF5ZCr5pyJ55u45ZCM5YWn5a65Jyxcblx0XHRcdCdjaXRlLXJlcGVhdGVkLWRlc2MnOiAn5L2/55So55u45ZCM5ZCN5a2X55qE5aSa5YCL5Y+D6ICD5paH5427Jyxcblx0XHRcdCdjaXRlLXJlcGVhdGVkLWVycm9yJzogJ+WkmuWAi+WPg+iAg+aWh+eNu+S9v+eUqOS6huebuOWQjOWQjeWtlycsXG5cdFx0XHQnY2l0ZS11bmRlZmluZWQtZGVzYyc6ICfmnKrlrprnvqnnmoTlj4PogIPmlofnjbsnLFxuXHRcdFx0J2NpdGUtdW5kZWZpbmVkLWVycm9yJzogJ+S4gOWAi+W3suWRveWQjeeahOWPg+iAg+aWh+eNu+W3sue2k+S9v+eUqOS9huaYr+aykuacieWumue+qScsXG5cdFx0XHQnY2l0ZS13b3JrLXRvb2x0aXAnOiAn5YiK55m76Kmy5L2c5ZOB55qE5Ye654mI54mp55qE5ZCN56ix44CC6KuL5LiN6KaB5L2/55So5pac6auUJyxcblx0XHRcdCdjaXRlLW5ld3NwYXBlci10b29sdGlwJzogJ+WIiueZu+ipsuaWsOiBnueahOWHuueJiOeJqeWQjeeosScsXG5cdFx0XHQnY2l0ZS1zZXJpZXMtdG9vbHRpcCc6ICfnlbbmm7jnsY3mmK/kuIDns7vliJflh7rniYjlk4HkuK3nmoTlhbbkuK3kuIDpg6jku73mmYLkvb/nlKgnLFxuXHRcdFx0J2NpdGUtdW5pZmllZC10b29sdGlwJzogJzE5ODDlubTku6PkuYvliY3kuK3lnIvmiYDkvb/nlKjnmoTmm7jnsY3nt6jomZ8nLFxuXHRcdFx0J2NpdGUtbGF5c3VtbWFyeS10b29sdGlwJzogJ+ipsuaWh+eNu+ebuOmXnOeahOaWsOiBnuWgsemBk+eahFVSTCcsXG5cdFx0XHQnY2l0ZS1sYXlzb3VyY2UtdG9vbHRpcCc6ICfoqbLmlofnjbvnm7jpl5znmoTmlrDogZ7loLHpgZPnmoTlh7romZUnLFxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG13Lm1lc3NhZ2VzLnNldCh7XG5cdFx0XHQnY2l0ZS1zZWN0aW9uLWxhYmVsJzogJ+W8leeUqCcsXG5cdFx0XHQnY2l0ZS10ZW1wbGF0ZS1saXN0JzogJ+aooeadvycsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLWxhYmVsJzogJ+WQjOWQjeaWh+eMricsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLXRpdGxlJzogJ+aPkuWFpeWQjOWQjeaWh+eMricsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLWJ1dHRvbic6ICflt7Llkb3lkI3lj4LogIPmlofnjK4nLFxuXHRcdFx0J2NpdGUtbmFtZWQtcmVmcy1kcm9wZG93bic6ICflkIzlkI3mlofnjK4nLFxuXHRcdFx0Ly8gVXNlZCBvbiB0aGUgdG9wIG9mIHRoZSBuYW1lZCByZWZzIGxpc3QgZHJvcHNvd25cblx0XHRcdCdjaXRlLWVycm9yY2hlY2stbGFiZWwnOiAn6ZSZ6K+v5qOA5p+lJyxcblx0XHRcdCdjaXRlLWVycm9yY2hlY2stYnV0dG9uJzogJ+ajgOafpemUmeivrycsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctYmFzZSc6ICflvJXnlKgnLFxuXHRcdFx0J2NpdGUtZm9ybS1zdWJtaXQnOiAn5o+S5YWlJyxcblx0XHRcdCdjaXRlLWZvcm0tc2hvd2hpZGUnOiAn5pi+56S6L+makOiXj+mineWkluWMuuWfnycsXG5cdFx0XHQnY2l0ZS1uby1uYW1lZHJlZnMnOiAn5Zyo5pys6aG15om+5LiN5Yiw5Lu75L2V5ZCM5ZCN5paH54yuJyxcblx0XHRcdCdjaXRlLW5hbWVkcmVmcy1pbnRybyc6ICfku47liJflh7rnmoTlj4LogIPmlofnjK7nm67lvZXkuK3pgInmi6nkuIDkuKrlkI3lrZfjgILngrnlh7vigJzmj5LlhaXigJ3mj5LlhaXkuIDkuKrlj4LogIPmlofnjK7liLDmlofmnKzkuK3jgIInLFxuXHRcdFx0J2NpdGUtcmF3LXByZXZpZXcnOiAnV2lraXRleHQ6Jyxcblx0XHRcdCdjaXRlLXBhcnNlZC1sYWJlbCc6ICfop6PmnpDlkI7nmoR3aWtpdGV4dDonLFxuXHRcdFx0J2NpdGUtZm9ybS1wYXJzZSc6ICfmmL7npLrop6PmnpDlkI7nmoTpooTop4gnLFxuXHRcdFx0J2NpdGUtcmVmcHJldmlldyc6ICfpooTop4gnLFxuXHRcdFx0J2NpdGUtbmFtZS1sYWJlbCc6ICdyZWblkI0nLFxuXHRcdFx0J2NpdGUtZ3JvdXAtbGFiZWwnOiAncmVm57uEJyxcblx0XHRcdCdjaXRlLWVycm9yY2hlY2stc3VibWl0JzogJ+ajgOafpScsXG5cdFx0XHQnY2l0ZS1lcnJvcmNoZWNrLWhlYWRpbmcnOiAn5qOA5p+l5LiL5YiX6ZSZ6K+v77yaJyxcblx0XHRcdCdjaXRlLWVycm9yLXVuY2xvc2VkJzogJ+acquWFs+mXrTx0dD4mbHQ7cmVmJmd0OzwvdHQ+5qCH6K6wJyxcblx0XHRcdCdjaXRlLWVycm9yLXNhbWVjb250ZW50JzogJ+acieebuOWQjOWGheWuueeahOWPguiAg+aWh+eMricsXG5cdFx0XHQnY2l0ZS1lcnJvci10ZW1wbGF0ZXMnOiBg5Y+C6ICD5paH54yu5pyq5L2/55SoPGEgaHJlZj1cIiR7bXcudXRpbC5nZXRVcmwoJ0NhdGVnb3J5OuW8leeUqOaooeadvycpfVwiPuW8leeUqOaooeadvzwvYT5gLFxuXHRcdFx0J2NpdGUtZXJyb3ItcmVwZWF0ZWQnOiAn5aSa5Liq5Y+C6ICD5paH54yu5pyJ55u45ZCM5ZCN56ewJyxcblx0XHRcdCdjaXRlLWVycm9yLXVuZGVmJzogJ+acieacquWumuS5ieeahOWQjOWQjeWPguiAg+aWh+eMruWcqOS9v+eUqCcsXG5cdFx0XHQnY2l0ZS1lcnJvci1zYW1lY29udGVudC1tc2cnOiAn5aSa5Liq5paH54yu5ZCr5pyJ55u45ZCM5YaF5a65OiAkMScsXG5cdFx0XHQnY2l0ZS1lcnJvci1yZXBlYXRlZC1tc2cnOiAn57uZ5aSa5Liq5Y+C6ICD5paH54yu5ZG95ZCNOiDigJwkMeKAnScsXG5cdFx0XHQnY2l0ZS1lcnJvci10ZW1wbGF0ZXMtbXNnJzogJ+ayoeacieS9v+eUqOaooeadvzogJDEnLFxuXHRcdFx0J2NpdGUtZm9ybS1yZXNldCc6ICfph43orr7ooajljZUnLFxuXHRcdFx0J2NpdGUtbG9hZGluZyc6ICfovb3lhaXmlbDmja4nLFxuXHRcdFx0Ly8gU2hvd24gd2hpbGUgcGFnZXRleHQgaXMgYmVpbmcgZG93bmxvYWRlZCBmcm9tIHRoZSBBUElcblx0XHRcdCdjaXRlLWluc2VydC1kYXRlJzogJ+aPkuWFpeW9k+WJjeaXpeacnycsXG5cdFx0XHQvLyBBbHQvdGl0bGUgdGV4dCBmb3IgXCJpbnNlcnQgZGF0ZVwiIGljb25cblx0XHRcdCdjaXRlLWVyci1yZXBvcnQtaGVhZGluZyc6ICflvJXnlKjplJnor6/miqXlkYonLFxuXHRcdFx0Ly8gSGVhZGluZyBmb3IgZXJyb3IgcmVwb3J0IHRhYmxlXG5cdFx0XHQnY2l0ZS1lcnItcmVwb3J0LWNsb3NlJzogJ+WFs+mXrScsXG5cdFx0XHQvLyBBbHQvdGl0bGUgdGV4dCBmb3IgXCJjbG9zZVwiIGljb24gb24gZXJyb3IgcmVwb3J0XG5cdFx0XHQnY2l0ZS1lcnItcmVwb3J0LWVtcHR5JzogJ+acquaJvuWIsOmUmeivrycsXG5cdFx0XHQvLyBNZXNzYWdlIGRpc3BsYXllZCBpbiB0aGUgZXJyb3IgcmVwb3J0IGxpc3QgaWYgdGhlcmUgYXJlIG5vIGVycm9yc1xuXHRcdFx0J2NpdGUtYXV0b2ZpbGwtYWx0JzogJ+iHquWKqOWhq+WFhScsXG5cdFx0XHQvLyBBbHQgdGV4dCBmb3IgYXV0b2ZpbGwgYnV0dG9uIGltYWdlXG5cdFx0XHQnY2l0ZS1yZWYtdG9vbHRpcCc6ICfplJrngrnnmoTmoIfor4bnrKbvvIjkvb/or6XlvJXnlKjlj6/ku6XmiJDkuLrlhoXpg6jpk77mjqXnmoTnm67moIfvvIknLFxuXHRcdFx0J2NpdGUtcG9zdHNjcmlwdC10b29sdGlwJzogJ+WmguaenOiuvuWumui/meS4gOWPguaVsO+8jOWImeimhuebluS9v+eUqOWPpeeCuee7iOatouW8leaWh+eahOm7mOiupOihjOS4uicsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctd2ViJzogJ+e9kemhteW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctbmV3cyc6ICfmlrDpl7vlvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWJvb2snOiAn5Lmm57GN5byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1qb3VybmFsJzogJ+acn+WIiuW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctY29uZmVyZW5jZSc6ICfkvJrorq7lvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWVuY3ljbG9wZWRpYSc6ICfnmb7np5HlhajkuablvJXnlKgnLFxuXHRcdFx0J2NpdGUtYXV0aG9yLWxhYmVsJzogJ+S9nOiAhScsXG5cdFx0XHQnY2l0ZS10aXRsZS1sYWJlbCc6ICfmoIfpopgnLFxuXHRcdFx0J2NpdGUtdXJsLWxhYmVsJzogJ+e9keWdgCcsXG5cdFx0XHQnY2l0ZS13ZWJzaXRlLWxhYmVsJzogJ+e9keermeWQjeensCcsXG5cdFx0XHQnY2l0ZS13b3JrLWxhYmVsJzogJ+aKpee6uOaIluadguW/lycsXG5cdFx0XHQnY2l0ZS1hZ2VuY3ktbGFiZWwnOiAn6YCa6K6v56S+Jyxcblx0XHRcdCdjaXRlLXB1Ymxpc2hlci1sYWJlbCc6ICflh7rniYjogIUnLFxuXHRcdFx0J2NpdGUtYWNjZXNzZGF0ZS1sYWJlbCc6ICforr/pl67ml6XmnJ8nLFxuXHRcdFx0J2NpdGUtbGFzdC1sYWJlbCc6ICflp5MnLFxuXHRcdFx0J2NpdGUtZmlyc3QtbGFiZWwnOiAn5ZCNJyxcblx0XHRcdCdjaXRlLWF1dGhvcmxpbmstbGFiZWwnOiAn5L2c6ICF5p2h55uuJyxcblx0XHRcdCdjaXRlLWNvYXV0aG9ycy1sYWJlbCc6ICflhbbku5bkvZzogIUnLFxuXHRcdFx0J2NpdGUtbG9jYXRpb24tbGFiZWwnOiAn5Ye654mI5ZywJyxcblx0XHRcdCdjaXRlLXBhZ2UtbGFiZWwnOiAn5omA5Zyo6aG1Jyxcblx0XHRcdCdjaXRlLXBhZ2VzLWxhYmVsJzogJ+mhteiMg+WbtCcsXG5cdFx0XHQnY2l0ZS1hdC1sYWJlbCc6ICfkuablhoXpg6jliIYnLFxuXHRcdFx0J2NpdGUtbGFuZ3VhZ2UtbGFiZWwnOiAn6K+t6KiAJyxcblx0XHRcdCdjaXRlLWZvcm1hdC1sYWJlbCc6ICfmlofmoaPmoLzlvI8nLFxuXHRcdFx0J2NpdGUtZG9pLWxhYmVsJzogJ0RPSScsXG5cdFx0XHQnY2l0ZS1kYXRlLWxhYmVsJzogJ+aXpeacnycsXG5cdFx0XHQnY2l0ZS1tb250aC1sYWJlbCc6ICfmnIjku70nLFxuXHRcdFx0J2NpdGUteWVhci1sYWJlbCc6ICflubTku70nLFxuXHRcdFx0J2NpdGUtcXVvdGUtbGFiZWwnOiAn5pGY5b2VJyxcblx0XHRcdCdjaXRlLW5ld3NwYXBlci1sYWJlbCc6ICfmlrDpl7vlqpLkvZMnLFxuXHRcdFx0J2NpdGUtYXV0aG9yMi1sYWJlbCc6ICfnrKwy5L2c6ICFJyxcblx0XHRcdCdjaXRlLWF1dGhvcjMtbGFiZWwnOiAn56ysM+S9nOiAhScsXG5cdFx0XHQnY2l0ZS1hdXRob3I0LWxhYmVsJzogJ+esrDTkvZzogIUnLFxuXHRcdFx0J2NpdGUtYXV0aG9yNS1sYWJlbCc6ICfnrKw15L2c6ICFJyxcblx0XHRcdCdjaXRlLWFnZW5jeSc6ICfpgJrorq/npL4nLFxuXHRcdFx0J2NpdGUtaXNzbi1sYWJlbCc6ICdJU1NOJyxcblx0XHRcdCdjaXRlLW9jbGMtbGFiZWwnOiAnT0NMQycsXG5cdFx0XHQnY2l0ZS1iaWJjb2RlLWxhYmVsJzogJ0JpYmNvZGUnLFxuXHRcdFx0J2NpdGUtaXNibi1sYWJlbCc6ICdJU0JOJyxcblx0XHRcdCdjaXRlLW90aGVycy1sYWJlbCc6ICfor5HogIUnLFxuXHRcdFx0J2NpdGUtZWRpdGlvbi1sYWJlbCc6ICfniYjmnKwnLFxuXHRcdFx0J2NpdGUtdHJhbnMtdGl0bGUtbGFiZWwnOiAn57+76K+R5ZCO5qCH6aKYJyxcblx0XHRcdCdjaXRlLXJlZi1sYWJlbCc6ICfplJrngrnmoIfor4bnrKYnLFxuXHRcdFx0J2NpdGUtcG9zdHNjcmlwdC1sYWJlbCc6ICfnu5PlsL7nrKYnLFxuXHRcdFx0J2NpdGUtc2VyaWVzLWxhYmVsJzogJ+ezu+WIlycsXG5cdFx0XHQnY2l0ZS12b2x1bWUtbGFiZWwnOiAn5Y23Jyxcblx0XHRcdCdjaXRlLXVuaWZpZWQtbGFiZWwnOiAn57uf5LiA5Lmm5Y+3Jyxcblx0XHRcdCdjaXRlLWNoYXB0ZXItbGFiZWwnOiAn56ug6IqCJyxcblx0XHRcdCdjaXRlLWpvdXJuYWwtbGFiZWwnOiAn5p2C5b+XL+acn+WIiicsXG5cdFx0XHQnY2l0ZS1pc3N1ZS1sYWJlbCc6ICfmnJ8nLFxuXHRcdFx0J2NpdGUtcG1pZC1sYWJlbCc6ICdQTUlEJyxcblx0XHRcdCdjaXRlLWVkaXRvci1sYWJlbCc6ICfnvJbovpEnLFxuXHRcdFx0J2NpdGUtZWRpdG9yMS1maXJzdC1sYWJlbCc6ICfnvJbovpHlkI0nLFxuXHRcdFx0J2NpdGUtZWRpdG9yMS1sYXN0LWxhYmVsJzogJ+e8lui+keWnkycsXG5cdFx0XHQnY2l0ZS1lZGl0b3IxLWxpbmstbGFiZWwnOiAn57yW6L6R5p2h55uuJyxcblx0XHRcdCdjaXRlLWVkaXRvci1maXJzdC1sYWJlbCc6ICfnvJbovpHlkI0nLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWxhc3QtbGFiZWwnOiAn57yW6L6R5aeTJyxcblx0XHRcdCdjaXRlLWVkaXRvci1saW5rLWxhYmVsJzogJ+e8lui+keadoeebricsXG5cdFx0XHQnY2l0ZS1wbWMtbGFiZWwnOiAnUE1DJyxcblx0XHRcdCdjaXRlLWlkLWxhYmVsJzogJ0lEJyxcblx0XHRcdCdjaXRlLWxheXN1bW1hcnktbGFiZWwnOiAn566A5piO5pGY6KaBJyxcblx0XHRcdCdjaXRlLWxheXNvdXJjZS1sYWJlbCc6ICfnroDmmI7mkZjopoHmnaXmupAnLFxuXHRcdFx0J2NpdGUtbGF5ZGF0ZS1sYWJlbCc6ICfnroDmmI7mkZjopoHml6XmnJ8nLFxuXHRcdFx0J2NpdGUtY29uZmVyZW5jZS1sYWJlbCc6ICfkvJrorq7lkI3np7AnLFxuXHRcdFx0J2NpdGUtY29uZmVyZW5jZXVybC1sYWJlbCc6ICfkvJrorq7nvZHlnYAnLFxuXHRcdFx0J2NpdGUtYm9va3RpdGxlLWxhYmVsJzogJ+iuuuaWh+mbhicsXG5cdFx0XHQnY2l0ZS1lbmN5Y2xvcGVkaWEtbGFiZWwnOiAn55m+56eR5YWo5Lmm5ZCNJyxcblx0XHRcdCdjaXRlLWF1dGhvcmxpbmstdG9vbHRpcCc6ICfoi6Xor6XkvZzogIXmnInmnaHnm67vvIzloavlhpnmnaHnm67lkI3np7AnLFxuXHRcdFx0J2NpdGUtYXQtdG9vbHRpcCc6ICflhoXlrrnlnKjmnaXmupDkuK3nmoTkvY3nva7vvIjlvZPmjInpobXnoIHlvJXnlKjkuI3pgILlvZPml7bvvIknLFxuXHRcdFx0J2NpdGUtYWNjZXNzZGF0ZS10b29sdGlwJzogJ+iuv+mXrui/meS4quW8leeUqOadpea6kOaXtueahOaXpeacnycsXG5cdFx0XHQnY2l0ZS1pZC10b29sdGlwJzogJ+WFtuS7lueahOaWh+eroOe8luWPtycsXG5cdFx0XHQnY2l0ZS1zYW1lY29udGVudC1kZXNjJzogJ+ajgOafpeWQq+acieebuOWQjOWGheWuueeahOWkmuS4quWPguiAg+aWh+eMricsXG5cdFx0XHQnY2l0ZS1zYW1lY29udGVudC1lcnJvcic6ICflpJrkuKrlj4LogIPmlofnjK7ljIXlkKvmnInnm7jlkIzlhoXlrrknLFxuXHRcdFx0J2NpdGUtcmVwZWF0ZWQtZGVzYyc6ICfkvb/nlKjnm7jlkIzlkI3lrZfnmoTlpJrkuKrlj4LogIPmlofnjK4nLFxuXHRcdFx0J2NpdGUtcmVwZWF0ZWQtZXJyb3InOiAn5aSa5Liq5Y+C6ICD5paH54yu5L2/55So5LqG55u45ZCM5ZCN5a2XJyxcblx0XHRcdCdjaXRlLXVuZGVmaW5lZC1kZXNjJzogJ+acquWumuS5ieeahOWPguiAg+aWh+eMricsXG5cdFx0XHQnY2l0ZS11bmRlZmluZWQtZXJyb3InOiAn5LiA5Liq5bey5ZG95ZCN55qE5Y+C6ICD5paH54yu5bey57uP5L2/55So5L2G5piv5rKh5pyJ5a6a5LmJJyxcblx0XHRcdCdjaXRlLXdvcmstdG9vbHRpcCc6ICfliIrnmbvor6XkvZzlk4HnmoTlh7rniYjniannmoTlkI3np7DjgILor7fkuI3opoHkvb/nlKjmlpzkvZMnLFxuXHRcdFx0J2NpdGUtbmV3c3BhcGVyLXRvb2x0aXAnOiAn5YiK55m76Kmy5paw6IGe55qE5Ye654mI54mp5ZCN56ewJyxcblx0XHRcdCdjaXRlLXNlcmllcy10b29sdGlwJzogJ+W9k+S5puexjeaYr+S4gOezu+WIl+WHuueJiOWTgeS4reeahOWFtuS4reS4gOmDqOS7veaXtuS9v+eUqCcsXG5cdFx0XHQnY2l0ZS11bmlmaWVkLXRvb2x0aXAnOiAnMTk4MOW5tOS7o+S5i+WJjeS4reWbveaJgOS9v+eUqOeahOS5puexjee8luWPtycsXG5cdFx0XHQnY2l0ZS1sYXlzdW1tYXJ5LXRvb2x0aXAnOiAn6K+l5paH54yu55u45YWz55qE5paw6Ze75oql6YGT55qEVVJMJyxcblx0XHRcdCdjaXRlLWxheXNvdXJjZS10b29sdGlwJzogJ+ivpeaWh+eMruebuOWFs+eahOaWsOmXu+aKpemBk+eahOWHuuWkhCcsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cmVmVG9vbGJhck1lc2FnZXN9O1xuIiwgImltcG9ydCAnLi9FZGl0dG9vbHMtcmVmVG9vbGJhci5sZXNzJztcbmltcG9ydCB7SVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OLCBXR19QQUdFX0NPTlRFTlRfTU9ERUx9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge3JlZlRvb2xiYXIyfSBmcm9tICcuL21vZHVsZXMvUmVmVG9vbGJhcjIuMCc7XG5pbXBvcnQge3JlZlRvb2xiYXJCYXNlfSBmcm9tICcuL21vZHVsZXMvUmVmVG9vbGJhckJhc2UnO1xuaW1wb3J0IHtyZWZUb29sYmFyTWVzYWdlc30gZnJvbSAnLi9tb2R1bGVzL21lc3NhZ2VzJztcblxuLyoqXG4gKiBSZWZUb29sYmFyXG4gKlxuICogQWRkcyB0b29scyBmb3IgY2l0aW5nIHJlZmVyZW5jZXMgdG8gdGhlIGVkaXQgdG9vbGJhci5cbiAqIE9uZSBvZiB0d28gcG9zc2libGUgdmVyc2lvbnMgd2lsbCBsb2FkIChSZWZ0b29sYmFyIDEuMCBvciBSZWZ0b29sYmFyIDEuMClcbiAqIGRlcGVuZGluZyBvbiB0aGUgdXNlciBwcmVmZXJlbmNlcyAodGhlIHVzZWJldGF0b29sYmFyIHByZWZlcmVuY2UpLlxuICpcbiAqIEBhdXRob3IgTXIuWi1tYW4sIEthbGRhcmlcbiAqL1xuKCgpOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dSZWZUb29sYmFySW5zdGFsbGVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBPbmx5IGV4ZWN1dGUgd2hlbiBlZGl0aW5nL3ByZXZpZXdpbmcgd2lraXRleHQgcGFnZXNcblx0aWYgKCFJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04gfHwgV0dfUEFHRV9DT05URU5UX01PREVMICE9PSAnd2lraXRleHQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCd1c2ViZXRhdG9vbGJhcicpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV1bcmVhZG9ubHldJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBMb2FkIGxvY2FsIG1lc3NhZ2VzLlxuXHRyZWZUb29sYmFyTWVzYWdlcygpO1xuXHQvLyBMb2FkIG1haW4gZnVuY3Rpb25zXG5cdHJlZlRvb2xiYXJCYXNlKCk7XG5cdHZvaWQgcmVmVG9vbGJhcjIoKTtcblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldCgnd2dSZWZUb29sYmFySW5zdGFsbGVkJywgdHJ1ZSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBd0NDLEdBQUdDLE9BQU9DLElBQUksVUFBVTtBQUN0RSxJQUFNQyx3QkFBZ0NILEdBQUdDLE9BQU9DLElBQUksb0JBQW9CO0FBQ3hFLElBQU1FLG1CQUEyQkosR0FBR0MsT0FBT0MsSUFBSSxnQkFBZ0I7QUFFL0QsSUFBTUcsOEJBQXVDLENBQUMsUUFBUSxRQUFRLEVBQUVDLFNBQVNQLFNBQVM7O0FDRGxGLElBQUFRLG9CQUFpQ0MsUUFBQSxpQkFBQTs7QUNIakMsSUFBTUMsYUFBYUEsQ0FBQ0MsUUFBZ0JDLFNBQTJCO0FBSTlELFNBQU9BLEtBQUtDLFNBQVNaLEdBQUdhLFFBQVFILEtBQUssR0FBR0MsSUFBSSxFQUFFRyxNQUFNLElBQUlkLEdBQUdhLFFBQVFILEdBQUcsRUFBRUssTUFBTTtBQUMvRTs7QUMyQkEsSUFBTUMsbUJBQW1CQSxNQUFNO0FBQzlCLFFBQU07SUFBQ0M7SUFBY0M7RUFBYyxJQUFJQztBQUV2Q0MsU0FBT0MsVUFBVTtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CLENBQUMsWUFBWTtJQUNoQ0MsUUFBUSxDQUFDLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE9BQU8sT0FBTyxLQUFLO0lBQ2xGQyxPQUFPO0lBQ1BDLFdBQVc7SUFDWEMsaUJBQWlCO0VBQ2xCO0FB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TUFDbkIseUJBQXlCO01BQ3pCLDBCQUEwQjtNQUMxQixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLHVCQUF1QjtNQUN2Qix3QkFBd0I7TUFDeEIscUJBQXFCO01BQ3JCLDBCQUEwQjtNQUMxQix1QkFBdUI7TUFDdkIsd0JBQXdCO01BQ3hCLDJCQUEyQjtNQUMzQiwwQkFBMEI7SUFDM0IsQ0FBQztFQUNGO0FBQ0Q7O0NDaFFDLE1BQVk7QUFFWixNQUFJcFgsR0FBR0MsT0FBT0MsSUFBSSx1QkFBdUIsR0FBRztBQUMzQztFQUNEO0FBR0EsTUFBSSxDQUFDRywrQkFBK0JGLDBCQUEwQixZQUFZO0FBQ3pFO0VBQ0Q7QUFFQSxNQUFJLENBQUNILEdBQUdxWCxLQUFLeFAsUUFBUTNILElBQUksZ0JBQWdCLEdBQUc7QUFDM0M7RUFDRDtBQUVBLE1BQUlrRixTQUFTa1MsY0FBYyxxQ0FBcUMsR0FBRztBQUNsRTtFQUNEO0FBR0FMLG9CQUFrQjtBQUVsQmxELGlCQUFlO0FBQ2YsT0FBS3pQLFlBQVk7QUFHakJ0RSxLQUFHQyxPQUFPa1gsSUFBSSx5QkFBeUIsSUFBSTtBQUM1QyxHQUFHOyIsCiAgIm5hbWVzIjogWyJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19QQUdFX0NPTlRFTlRfTU9ERUwiLCAiV0dfVVNFUl9MQU5HVUFHRSIsICJJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04iLCAiaW5jbHVkZXMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhcmdzIiwgImxlbmd0aCIsICJtZXNzYWdlIiwgInBhcnNlIiwgInBsYWluIiwgInJlZlRvb2xiYXJDb25maWciLCAiQ2l0ZVRlbXBsYXRlIiwgIkNpdGVFcnJvckNoZWNrIiwgIndpbmRvdyIsICJDaXRlVEIiLCAiT3B0aW9ucyIsICJtb250aHMiLCAibW9kYWwiLCAiYXV0b3BhcnNlIiwgImV4cGFuZHRlbXBsYXRlcyIsICJmaWVsZCIsICJpbmNyZW1lbnRfZ3JvdXAiLCAiaW5jcmVtZW50X2J1dHRvbiIsICJhdXRvZmlsbHByb3AiLCAiYXV0b2ZpbGxpZCIsICJ0b29sdGlwIiwgInR5cGUiLCAidGVzdG5hbWUiLCAiZGVzYyIsICJmdW5jIiwgInJlZmxpc3QiLCAiZXJyb3JzIiwgInJlZnMyIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgInNob3J0dGFnIiwgImNvbnRlbnQiLCAiZXJyIiwgImUiLCAiZiIsICJyZXQiLCAiX2kiLCAiX2Vycm9ycyIsICJlcnJvciIsICJtc2ciLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAicmVmbmFtZSIsICJfaTIiLCAiX2Vycm9yczIiLCAibG9uZ3JlZnMiLCAiX2kzIiwgIl9PYmplY3QkdmFsdWVzIiwgIk9iamVjdCIsICJ2YWx1ZXMiLCAiX2k0IiwgIl9lcnJvcnMzIiwgImluaXQiLCAicmVmVG9vbGJhcjIiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICIkYm9keSIsICJnZXRCb2R5IiwgImFwaSIsICJpbml0TXdBcGkiLCAiRGVmYXVsdE9wdGlvbnMiLCAiZ2V0T3B0aW9uIiwgIm9wdCIsICJVc2VyT3B0aW9ucyIsICJfJCR3aWR0aDIiLCAiXyQkd2lkdGgzIiwgIiQiLCAiZG9jdW1lbnQiLCAiZmluZCIsICJ0cmlnZ2VyIiwgIiR0YXJnZXQiLCAidGVtbGlzdCIsICJ0IiwgIlRlbXBsYXRlcyIsICJoYXNPd24iLCAiXyQkd2lkdGgiLCAidGVtIiwgInNmb3JtIiwgImVzY1N0ciIsICJzaG9ydGZvcm0iLCAiYWN0aW9ub2JqIiwgIm1vZHVsZSIsICJjb25jYXQiLCAiZGlhbG9nb2JqIiwgInJlc2l6ZW1lIiwgInRpdGxlTXNnIiwgImlkIiwgImh0bWwiLCAiZ2V0SW5pdGlhbCIsICJkaWFsb2ciLCAid2lkdGgiLCAiTWF0aCIsICJyb3VuZCIsICJvcGVuIiwgImdldE9wZW5UZW1wbGF0ZSIsICJnZXRGb3JtIiwgIm9uIiwgInByZXZlbnREZWZhdWx0IiwgInByZXZQYXJzZUNsaWNrIiwgImJ1dHRvbnMiLCAicmVmIiwgImdldFJlZiIsICJ3aWtpRWRpdG9yIiwgIm1vZHVsZXMiLCAidG9vbGJhciIsICJmbiIsICJkb0FjdGlvbiIsICJkYXRhIiwgIm9wdGlvbnMiLCAicG9zdCIsICJzaG93SGlkZUV4dHJhIiwgInRlbXBsYXRlIiwgImRpdiIsICJzaG93IiwgInRleHQiLCAiaGlkZSIsICJyZXNldEZvcm0iLCAibGFiZWwiLCAidGVtcGxhdGVuYW1lIiwgImFjdGlvbiIsICJyZWZzZWN0aW9uIiwgInNlY3Rpb25zIiwgImNpdGVzIiwgImdyb3VwcyIsICJ0b29scyIsICJsaXN0IiwgIm5hbWVkcmVmcyIsICJucmVmcyIsICJpY29uIiwgInNlY3Rpb24iLCAiZ3JvdXAiLCAiZXJyb3JjaGVjayIsICJlY2hlY2siLCAiZGVmYXVsdGRpYWxvZ3MiLCAibG9hZFJlZnMiLCAiZXJyb3JjaGVja3MiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiRXJyb3JDaGVja3MiLCAidmFsIiwgInJ1biIsICJkaXNwbGF5RXJyb3JzIiwgImdldE5hbWVkUmVmIiwgIm9mZiIsICJ1dGlsIiwgImFkZENTUyIsICJtYWluUmVmTGlzdCIsICJyZWZzTG9hZGVkIiwgImlubmVyb25seSIsICJmb3JpbnNlcnQiLCAiaSIsICJqIiwgImciLCAicmVzIiwgInJlZm9iaiIsICJTdHJpbmciLCAidHJpbSIsICJnZXRRdW90ZWRTdHJpbmciLCAicmVmZ3JvdXAiLCAiaW5jcmVtZW50YWJsZXMiLCAiZmllbGRzIiwgImZpZWxkbmFtZSIsICJmaWVsZGlkIiwgInJlcGxhY2UiLCAidG9TdHJpbmciLCAiYmFzaWMiLCAiZXh0cmEiLCAiZ2V0UGFnZVRleHQiLCAibG9hZFJlZnNJbnRlcm5hbCIsICJyZWZzcmVnZXgiLCAiZXhlYyIsICJzZXR1cEVycm9yQ2hlY2siLCAic2V0dXBOYW1lZFJlZnMiLCAiY2FsbGJhY2siLCAicG9zdGRhdGEiLCAidGl0bGUiLCAicHJvcCIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aGVuIiwgInJlc3RleHQiLCAid2lraXRleHQiLCAicnZwcm9wIiwgInBhZ2VpZHMiLCAicnZleHBhbmR0ZW1wbGF0ZXMiLCAicXVlcnkiLCAicGFnZXRleHQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNhZmVEZWNvZGVVUklDb21wb25lbnQiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImluaXRBdXRvZmlsbCIsICJfJCRhdHRyIiwgImVsZW1pZCIsICJhdHRyIiwgImF1dG90eXBlIiwgInVybCIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJzZXRBdHRyaWJ1dGUiLCAiaGVhZCIsICJhcHBlbmQiLCAiYXV0b0ZpbGwiLCAiY2wiLCAiY29hdXRob3JzIiwgImF1dGhvcnMiLCAiXyQkZXEkYXR0ciIsICJjbGFzc2VzIiwgImVxIiwgInNwbGl0IiwgInBhdHQiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiY2xhc3NfIiwgIl8kJGVxJGF0dHIyIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImpvaW4iLCAiZGF0ZSIsICJEVCIsICJEYXRlIiwgInRlc3QiLCAiZm9ybWF0RGF0ZSIsICJqb3VybmFsIiwgInZvbHVtZSIsICJpc3N1ZSIsICJkb2kiLCAicHVibGlzaGVyIiwgImxvY2F0aW9uIiwgImVkaXRpb24iLCAiaXNibiIsICJpc3NuIiwgImxhbmd1YWdlIiwgImNoYXB0ZXIiLCAiaW5jcmVtZW50RmllbGRzIiwgIl8kJGF0dHIyIiwgImN1cnJlbnRyb3ciLCAicGFyZW50cyIsICJwcmV2IiwgImNzcyIsICJkZXRhY2giLCAiaW5jcmVtZW50cyIsICJ0cnMiLCAibWFrZUZvcm1Jbm5lciIsICJyZXZlcnNlIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInRyIiwgImFmdGVyIiwgImZpbGxBY2Nlc3NkYXRlIiwgIl8kJGF0dHIzIiwgImRhdGVzdHIiLCAidXNlZGF5IiwgInVzZW1vbnRoIiwgInptb250aCIsICJtb250aCIsICJnZXRVVENNb250aCIsICJ6ZGF0ZSIsICJnZXRVVENEYXRlIiwgImdldFVUQ0Z1bGxZZWFyIiwgIm5hbWVzIiwgInN0dWZmIiwgInNlbGVjdCIsICJiZWZvcmUiLCAicHJldmxhYmVsIiwgInBhcnNlbGFiZWwiLCAibGluayIsICJocmVmIiwgIm1hcmdpbiIsICJkaXNwbGF5IiwgImNvbG9yIiwgIm5hbWVkUmVmU2VsZWN0Q2xpY2siLCAibnJlZlBhcnNlQ2xpY2siLCAiZm9ybSIsICJ1bCIsICJnZXRSb3ciLCAiZmlsbE5yZWZQcmV2aWV3IiwgInBhcnNlZCIsICJjaG9pY2UiLCAibGFzdG5hbWVkcmVmY2hvaWNlIiwgImZpbGxUZW1wbGF0ZVByZXZpZXciLCAic2V0dGluZyIsICJzcSIsICJkcSIsICJmaXhTdHIiLCAic2xpY2UiLCAidG9VcHBlckNhc2UiLCAiZGlhbG9ncyIsICJyZW1vdmUiLCAidGFibGUiLCAiYm9yZGVyIiwgInBhZGRpbmciLCAidHIxIiwgInRoMSIsICJ0aDIiLCAiaW0iLCAiYWQiLCAidGQiLCAidGQxIiwgInRkMiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicmVmVG9vbGJhckJhc2UiLCAiX3dpbmRvdyIsICJjb25zdHJ1Y3RvciIsICJiYXNpY2ZpZWxkcyIsICJleHBhbmRlZGZpZWxkcyIsICJpbmNyc2V0dXAiLCAiYXV0b2ZpbGxzIiwgIl9pdGVyYXRvcjciLCAiZW50cmllcyIsICJfc3RlcDciLCAiZmllbGRvYmoiLCAibGFiZWxmaWVsZCIsICJzZXR1cCIsICJpbmNydmFsIiwgImF1dG9kYXRlRmllbGRzIiwgImluY3J0eXBlIiwgImlucHV0IiwgInRhYmluZGV4IiwgInN0eWxlIiwgImNsYXNzbmFtZSIsICJhZGRDbGFzcyIsICJuZWVkc2V0dXAiLCAia2V5cyIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJhdXRvZmlsbCIsICJoaWRkZW4iLCAibWFpbiIsICJmb3JtMSIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJmb3JtMiIsICJfaXRlcmF0b3IxMCIsICJfc3RlcDEwIiwgImZvcm0zIiwgIiR0ciIsICIkdGQxIiwgIiRsYWJlbDEiLCAiaW5wdXQxIiwgInRkMyIsICJsYWJlbDIiLCAidGQ0IiwgImlucHV0MiIsICJleHRyYXMiLCAic3BhbjEiLCAic3BhbjIiLCAib2JqIiwgInJvdyIsICJjaGVjayIsICJuYW1lIiwgInJlZlRvb2xiYXJNZXNhZ2VzIiwgIm1lc3NhZ2VzIiwgInNldCIsICJnZXRVcmwiLCAidXNlciIsICJxdWVyeVNlbGVjdG9yIl0KfQo=
