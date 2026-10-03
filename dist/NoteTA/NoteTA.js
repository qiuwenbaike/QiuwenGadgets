/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-noteTA.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/NoteTA}
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

// dist/NoteTA/NoteTA.js
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/NoteTA/options.json
var portletClass = "x-noteTA-viewer";
var version = "1.0";
//! src/NoteTA/modules/util/ApiRetryFailError.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/NoteTA/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    ApiRetryFailError: (0, import_ext_gadget.localize)({
      en: "Api calls failed $1 time(s) in a row. Errors: ",
      "zh-hans": "Api 调用连续失败 $1 次，$1 次调用的错误分别为：",
      "zh-hant": "Api 調用連續失敗 $1 次，$1 次調用的錯誤分別為："
    }),
    Loading: (0, import_ext_gadget.localize)({
      en: "Loading...",
      "zh-hans": "正在加载……",
      "zh-hant": "正在載入……"
    }),
    Title: (0, import_ext_gadget.localize)({
      en: "NoteTA",
      "zh-hans": "字词转换",
      "zh-hant": "字詞轉換"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/NoteTA/modules/util/ApiRetryFailError.tsx
var ApiRetryFailError = class extends Error {
  errors;
  constructor(errors) {
    super("Api calls failed ".concat(errors.length, " time(s) in a row."));
    this.name = "ApiRetryFailError";
    this.errors = errors;
  }
  toJQuery() {
    const errorCount = this.errors.length;
    const element = /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
      className: "error"
    }, /* @__PURE__ */ import_ext_gadget2.default.createElement("p", null, getMessage("ApiRetryFailError").replace(/\$1/g, errorCount.toString())), /* @__PURE__ */ import_ext_gadget2.default.createElement("ol", null, this.errors.map((error, index) => /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      key: index
    }, error.split("\n").map((line, number) => /* @__PURE__ */ import_ext_gadget2.default.createElement("p", {
      key: number
    }, line))))));
    const $element = $(element);
    return $element;
  }
};
//! src/NoteTA/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("NoteTA/".concat(version));
//! src/NoteTA/modules/parseWikitext.ts
var parseWithRetry = (args, count = 3, previousErrors = []) => {
  if (!count) {
    return $.Deferred().reject(new ApiRetryFailError(previousErrors));
  }
  const deferred = $.Deferred();
  void api.parse(...args).then((response) => {
    void deferred.resolve(response);
  }).catch((error) => {
    console.error(error);
    if (error && typeof error === "object" && "stack" in error) {
      previousErrors[previousErrors.length] = error.stack;
    } else {
      previousErrors[previousErrors.length] = String(error);
    }
    parseWithRetry(args, --count, previousErrors).then((newResponse) => {
      void deferred.resolve(newResponse);
    }).catch((newError) => {
      void deferred.reject(newError);
    });
  });
  return deferred;
};
var parseWikitext = (...args) => {
  return parseWithRetry(args);
};
//! src/NoteTA/modules/viewer.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.JSX"), 1);
//! src/NoteTA/modules/util/assert.ts
function assert(value, valueName) {
  if (!value) {
    throw new Error("Assert Fail, ".concat(valueName, " == false."));
  }
}
//! src/NoteTA/modules/initViewMap.ts
var viewerMap = /* @__PURE__ */ new Map();
//! src/NoteTA/modules/initWindowManager.ts
var initWindowManager = () => {
  return new OO.ui.WindowManager();
};
var windowManager = initWindowManager();
//! src/NoteTA/modules/viewer.tsx
var getViewer = ($body, hash) => {
  if (viewerMap.has(hash)) {
    const storedViewer = viewerMap.get(hash);
    assert(storedViewer, "viewer");
    return storedViewer;
  }
  const $targetElement = $body.find("#noteTA-".concat(hash));
  if (!$targetElement.length) {
    throw new Error(`Can't get Element "#noteTA-`.concat(hash, '".'));
  }
  const {
    wgPageName,
    wgUserVariant
  } = mw.config.get();
  class NoteTAViewer extends OO.ui.ProcessDialog {
    dataIsLoaded;
    executePromise;
    mutationObserver;
    $realContent;
    $body;
    // @ts-expect-error TS2503
    static lastError;
    static noteTAParseText;
    constructor() {
      super({
        size: "larger"
      });
      this.dataIsLoaded = false;
      this.$realContent = $(/* @__PURE__ */ import_ext_gadget4.default.createElement("div", null));
      this.mutationObserver = new MutationObserver(this.updateSize.bind(this));
      this.mutationObserver.observe(this.$realContent.get(0), {
        childList: true,
        subtree: true
      });
    }
    // @ts-expect-error TS4112
    initialize() {
      super.initialize();
      const panelLayout = new OO.ui.PanelLayout({
        expanded: false,
        padded: true
      });
      this.$realContent.appendTo(panelLayout.$element);
      panelLayout.$element.appendTo(this.$body);
      return this;
    }
    // @ts-expect-error TS2503
    getSetupProcess(data) {
      return super.getSetupProcess(data).next(() => {
        void this.doExecuteWrap();
        void NoteTAViewer.executeAction("main");
      });
    }
    // @ts-expect-error TS2503
    getActionProcess(action) {
      const isMainAction = action === "main";
      return super.getActionProcess(action).next(() => {
        if (isMainAction) {
          return this.doExecuteWrap();
        }
      }).next(() => {
        if (isMainAction && NoteTAViewer.lastError) {
          return NoteTAViewer.lastError;
        }
        return super.getActionProcess(action).execute();
      });
    }
    destroy() {
      this.mutationObserver.disconnect();
    }
    static getNoteTAParseText() {
      if (NoteTAViewer.noteTAParseText) {
        return $.Deferred().resolve(NoteTAViewer.noteTAParseText);
      }
      const $noteTAtitle = $targetElement.find(".noteTA-title");
      const actualTitle = wgPageName.replace(/_/g, " ");
      let wikitext = "";
      const titleDeferred = $.Deferred();
      if ($noteTAtitle.length) {
        const titleConv = $noteTAtitle.attr("data-noteta-code");
        assert(titleConv, "titleConv");
        let titleDesc = $noteTAtitle.attr("data-noteta-desc");
        if (titleDesc) {
          titleDesc = "（".concat(titleDesc, "）");
        } else {
          titleDesc = "";
        }
        wikitext += '<span style="float:right">{{edit|'.concat(actualTitle, "|section=0}}</span>\n");
        wikitext += "; 本文使用[[Help:字词转换处理|标题手工转换]]\n";
        wikitext += "* 转换标题为：-{D|".concat(titleConv, "}-").concat(titleDesc, "\n");
        wikitext += "* 实际标题为：-{R|".concat(actualTitle, "}-；当前显示为：-{|").concat(titleConv, "}-\n");
        void titleDeferred.resolve();
      } else {
        parseWikitext("{{noteTA/multititle|".concat(actualTitle, "}}"), {
          title: actualTitle,
          variant: "zh"
        }).then((resultHtml) => {
          const $multiTitle = $($.parseHTML(resultHtml)).find(".noteTA-multititle");
          if ($multiTitle.length) {
            wikitext += "; 本文[[Help:字词转换处理|标题可能经过转换]]\n* 转换标题为：";
            const textVariant = {};
            const variantText = {};
            var _iterator2 = _createForOfIteratorHelper($multiTitle.children()), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                const element = _step2.value;
                const $element = $(element);
                const variant = $element.attr("data-noteta-multititle-variant");
                assert(variant, "variant");
                const text = $element.text().trim();
                variantText[variant] = text;
                const textVariantArray = textVariant[text];
                if (textVariantArray) {
                  textVariantArray[textVariantArray.length] = variant;
                } else {
                  textVariant[text] = [variant];
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            const titleConverted = variantText[wgUserVariant];
            const multiTitle = [];
            for (var _i = 0, _Object$values = Object.values(variantText); _i < _Object$values.length; _i++) {
              const text = _Object$values[_i];
              if (text === null || text === void 0) {
                continue;
              }
              const variants = textVariant[text];
              if (!variants) {
                continue;
              }
              var _iterator3 = _createForOfIteratorHelper(variants), _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  const variant = _step3.value;
                  variantText[variant] = null;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              const variantsName = variants.map((variant) => "-{R|{{MediaWiki:Variantname-".concat(variant, "}}}-")).join("、");
              multiTitle[multiTitle.length] = "".concat(variantsName, "：-{R|").concat(text, "}-");
            }
            const subItemSeparator = "\n** ";
            wikitext += "".concat(subItemSeparator).concat(multiTitle.join(subItemSeparator));
            wikitext += "\n* 实际标题为：-{R|".concat(actualTitle, "}-；当前显示为：-{R|").concat(titleConverted, "}-\n");
          }
          void titleDeferred.resolve();
        }).catch((error) => {
          void titleDeferred.reject(error);
        });
      }
      const deferred = $.Deferred();
      titleDeferred.then(() => {
        const $noteTAgroups = $targetElement.find(".noteTA-group > *[data-noteta-group]");
        var _iterator4 = _createForOfIteratorHelper($noteTAgroups), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            const element = _step4.value;
            const $element = $(element);
            switch ($element.attr("data-noteta-group-source")) {
              case "template":
                wikitext += "{{CGroup/".concat($element.attr("data-noteta-group"), "}}\n");
                break;
              case "module":
                wikitext += "{{#invoke:CGroupViewer|dialog|".concat($element.attr("data-noteta-group"), "}}\n");
                break;
              case "none":
                wikitext += "; 本文使用的公共转换组“".concat($element.attr("data-noteta-group"), "”尚未创建\n");
                wikitext += "* {{edit|Module:CGroup/".concat($element.attr("data-noteta-group"), "|创建公共转换组“").concat($element.attr("data-noteta-group"), "”}}\n");
                break;
              default:
                wikitext += "; 未知公共转换组“".concat($element.attr("data-noteta-group"), "”来源“").concat($element.attr("data-noteta-group-source"), "”\n");
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        const $noteTAlocal = $targetElement.find(".noteTA-local");
        if ($noteTAlocal.length) {
          wikitext += '<span style="float:right">{{edit|'.concat(actualTitle, "|section=0}}</span>\n");
          wikitext += "; 本文使用[[Help:字词转换处理|全文手工转换]]\n";
          const $noteTAlocals = $noteTAlocal.children("*[data-noteta-code]");
          var _iterator5 = _createForOfIteratorHelper($noteTAlocals), _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              const element = _step5.value;
              const $element = $(element);
              let localDesc = $element.attr("data-noteta-desc");
              if (localDesc) {
                localDesc = "（".concat(localDesc, "）");
              } else {
                localDesc = "";
              }
              const localConv = $element.attr("data-noteta-code");
              wikitext += "* -{D|".concat(localConv, "}-").concat(localDesc, "当前显示为：-{").concat(localConv, "}-\n");
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
        wikitext += "{{noteTA/footer}}\n";
        NoteTAViewer.noteTAParseText = wikitext;
        void deferred.resolve(wikitext);
      }).catch((error) => {
        void deferred.reject(error);
      });
      return deferred;
    }
    doExecute() {
      if (this.dataIsLoaded) {
        return $.Deferred().resolve();
      }
      this.$realContent.empty().append(/* @__PURE__ */ import_ext_gadget4.default.createElement("p", null, getMessage("Loading")));
      return NoteTAViewer.getNoteTAParseText().then((wikitext) => parseWikitext(wikitext, {
        title: "Template:CGroup/-",
        variant: wgUserVariant
      })).then((parsedHtml) => {
        this.$realContent.empty().html(parsedHtml).addClass("".concat(portletClass, "-output"));
        this.$realContent.find(".mw-collapsible").makeCollapsible();
        this.updateSize();
        this.dataIsLoaded = true;
      }).catch((error) => {
        if (error instanceof ApiRetryFailError) {
          throw new OO.ui.Error(error.toJQuery(), {
            recoverable: true
          });
        } else {
          throw new OO.ui.Error(String(error), {
            recoverable: false
          });
        }
      });
    }
    doExecuteWrap() {
      if (this.executePromise === void 0) {
        this.executePromise = this.doExecute();
        delete NoteTAViewer.lastError;
        const executeDeferred = $.Deferred();
        void this.executePromise.then((response) => {
          void executeDeferred.resolve(response);
        }).catch((error) => {
          if (error instanceof OO.ui.Error) {
            NoteTAViewer.lastError = error;
          } else {
            void executeDeferred.reject(error);
          }
        }).always(() => {
          delete this.executePromise;
        });
        return executeDeferred;
      }
      const deferred = $.Deferred();
      void this.executePromise.then((response) => {
        void deferred.resolve(response);
      }).catch((error) => {
        if (error instanceof OO.ui.Error) {
          NoteTAViewer.lastError = error;
        } else {
          void deferred.reject(error);
        }
      }).always(() => {
        delete this.executePromise;
      });
      return deferred;
    }
  }
  NoteTAViewer.static = {
    // @ts-expect-error TS2304
    ...OO.ui.ProcessDialog.static
  };
  NoteTAViewer.static.name = "NoteTAViewer-".concat(hash);
  NoteTAViewer.static.title = getMessage("Title");
  NoteTAViewer.static.actions = [{
    label: mw.message("ooui-dialog-process-dismiss").parse(),
    flags: "safe"
  }];
  const viewer = new NoteTAViewer();
  windowManager.addWindows([viewer]);
  viewerMap.set(hash, viewer);
  return viewer;
};
var resetAllViewer = () => {
  var _iterator6 = _createForOfIteratorHelper(viewerMap.values()), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      const viewer = _step6.value;
      viewer.destroy();
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  viewerMap.clear();
  void windowManager.clearWindows();
};
//! src/NoteTA/modules/initGlobalMethods.ts
var portletId;
var initGlobalMethods = ($body) => {
  const globalMethods = {
    init() {
    },
    deInit() {
    }
  };
  const {
    skin
  } = mw.config.get();
  if (skin === "vector") {
    portletId = "p-noteTA";
    let $noteTATab;
    globalMethods.init = () => {
      if ($noteTATab || !portletId) {
        return;
      }
      const noteTATab = mw.util.addPortlet(portletId);
      if (!noteTATab) {
        return;
      }
      $noteTATab = $(noteTATab);
      $noteTATab.removeClass("mw-portlet-".concat(portletId)).addClass(["mw-portlet-".concat(portletId.replace("p-", "")), "vector-menu-tabs", "vector-menu-tabs-legacy"]);
      $body.find("#p-variants").after($noteTATab);
    };
    globalMethods.deInit = () => {
      if (!$noteTATab) {
        return;
      }
      $noteTATab.find("ul").empty();
      if (portletId) {
        mw.util.hidePortlet(portletId);
      }
    };
  } else if (skin === "vector-2022") {
    portletId = "p-associated-pages";
    globalMethods.deInit = () => {
      $body.find(".".concat(portletClass)).remove();
    };
  }
  return globalMethods;
};
//! src/NoteTA/NoteTA.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/NoteTA/modules/util/generatePortletLink.tsx
var import_ext_gadget5 = __toESM(require("ext.gadget.JSX"), 1);
var generatePortletLink = (hash) => {
  if (!portletId) {
    return;
  }
  const portletLink = mw.util.addPortletLink(portletId, "#", "汉/漢", "ca-noteTA-".concat(hash));
  if (!portletLink) {
    return;
  }
  portletLink.classList.add("ca-noteTA");
  const $portletLink = $(portletLink).addClass(portletClass);
  $portletLink.find("a").empty().append(/* @__PURE__ */ import_ext_gadget5.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget5.default.createElement("span", {
    className: ["".concat(portletClass, "__label"), "".concat(portletClass, "__label-hans")]
  }, "汉"), /* @__PURE__ */ import_ext_gadget5.default.createElement("span", {
    className: ["".concat(portletClass, "__label"), "".concat(portletClass, "__label-hant")]
  }, "漢")));
  return $portletLink;
};
//! src/NoteTA/NoteTA.ts
var isInit = false;
mw.hook("wikipage.content").add(function noteTA($content) {
  const $body = $content.parents("body");
  if (!isInit) {
    isInit = true;
    windowManager.$element.appendTo($body);
  }
  resetAllViewer();
  const globalMethods = initGlobalMethods($body);
  globalMethods.deInit();
  globalMethods.init();
  var _iterator7 = _createForOfIteratorHelper($body.find(".mw-indicator[id^=mw-indicator-noteTA-]")), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      const element = _step7.value;
      const hash = element.id.replace(/^mw-indicator-noteTA-/, "");
      let $element = $(element);
      if (portletId) {
        $element.hide();
        const $portletLink = generatePortletLink(hash);
        if (!$portletLink) {
          continue;
        }
        $element = $portletLink;
      }
      const openerListener = (event) => {
        if (!(0, import_ext_gadget6.checkA11yConfirmKey)(event)) {
          return;
        }
        event.preventDefault();
        getViewer($body, hash).open();
      };
      $element.on("click", openerListener);
      $element.on("keydown", openerListener);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9vcHRpb25zLmpzb24iLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3IudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9hcGkudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3BhcnNlV2lraXRleHQudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3ZpZXdlci50c3giLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvYXNzZXJ0LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pbml0Vmlld01hcC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXIudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2luaXRHbG9iYWxNZXRob2RzLnRzIiwgInNyYy9Ob3RlVEEvTm90ZVRBLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL2dlbmVyYXRlUG9ydGxldExpbmsudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwicG9ydGxldENsYXNzXCI6IFwieC1ub3RlVEEtdmlld2VyXCIsXG5cdFwidmVyc2lvblwiOiBcIjEuMFwiXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNsYXNzIEFwaVJldHJ5RmFpbEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRwcml2YXRlIGVycm9yczogc3RyaW5nW107XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKGVycm9yczogc3RyaW5nW10pIHtcblx0XHRzdXBlcihgQXBpIGNhbGxzIGZhaWxlZCAke2Vycm9ycy5sZW5ndGh9IHRpbWUocykgaW4gYSByb3cuYCk7XG5cdFx0dGhpcy5uYW1lID0gJ0FwaVJldHJ5RmFpbEVycm9yJztcblx0XHR0aGlzLmVycm9ycyA9IGVycm9ycztcblx0fVxuXG5cdHB1YmxpYyB0b0pRdWVyeSgpOiBKUXVlcnkge1xuXHRcdGNvbnN0IGVycm9yQ291bnQ6IG51bWJlciA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcblxuXHRcdGNvbnN0IGVsZW1lbnQgPSAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+XG5cdFx0XHRcdDxwPntnZXRNZXNzYWdlKCdBcGlSZXRyeUZhaWxFcnJvcicpLnJlcGxhY2UoL1xcJDEvZywgZXJyb3JDb3VudC50b1N0cmluZygpKX08L3A+XG5cdFx0XHRcdDxvbD5cblx0XHRcdFx0XHR7dGhpcy5lcnJvcnMubWFwPFJlYWN0LlJlYWN0RWxlbWVudD4oKGVycm9yLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0PGxpIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHR7ZXJyb3Iuc3BsaXQoJ1xcbicpLm1hcDxSZWFjdC5SZWFjdEVsZW1lbnQ+KChsaW5lLCBudW1iZXIpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8cCBrZXk9e251bWJlcn0+e2xpbmV9PC9wPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvb2w+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcdGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KSBhcyBKUXVlcnk7XG5cblx0XHRyZXR1cm4gJGVsZW1lbnQ7XG5cdH1cbn1cblxuZXhwb3J0IHtBcGlSZXRyeUZhaWxFcnJvcn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFwaVJldHJ5RmFpbEVycm9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FwaSBjYWxscyBmYWlsZWQgJDEgdGltZShzKSBpbiBhIHJvdy4gRXJyb3JzOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAnQXBpIOiwg+eUqOi/nue7reWksei0pSAkMSDmrKHvvIwkMSDmrKHosIPnlKjnmoTplJnor6/liIbliKvkuLrvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAnQXBpIOiqv+eUqOmAo+e6jOWkseaVlyAkMSDmrKHvvIwkMSDmrKHoqr/nlKjnmoTpjK/oqqTliIbliKXngrrvvJonLFxuXHRcdH0pLFxuXHRcdExvYWRpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZy4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjliqDovb3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo6LyJ5YWl4oCm4oCmJyxcblx0XHR9KSxcblx0XHRUaXRsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOb3RlVEEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2X6K+N6L2s5o2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wtl+ipnui9ieaPmycsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTm90ZVRBLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtBcGlSZXRyeUZhaWxFcnJvcn0gZnJvbSAnLi91dGlsL0FwaVJldHJ5RmFpbEVycm9yJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbnR5cGUgQXBpUGFyc2UgPSBtdy5BcGlbJ3BhcnNlJ107XG50eXBlIEFwaVBhcnNlUGFyYW1ldGVycyA9IFBhcmFtZXRlcnM8QXBpUGFyc2U+O1xudHlwZSBBcGlQYXJzZVJlc3BvbnNlID0gQXdhaXRlZDxSZXR1cm5UeXBlPEFwaVBhcnNlPj47XG50eXBlIEFwaVJlc3BvbnNlID0gQXBpUGFyc2VSZXNwb25zZSB8IEFwaVJldHJ5RmFpbEVycm9yO1xuXG5jb25zdCBwYXJzZVdpdGhSZXRyeSA9IChcblx0YXJnczogQXBpUGFyc2VQYXJhbWV0ZXJzLFxuXHRjb3VudDogbnVtYmVyID0gMyxcblx0cHJldmlvdXNFcnJvcnM6IHN0cmluZ1tdID0gW11cbik6IEpRdWVyeS5EZWZlcnJlZDxBcGlSZXNwb25zZT4gPT4ge1xuXHRpZiAoIWNvdW50KSB7XG5cdFx0cmV0dXJuICQuRGVmZXJyZWQ8QXBpUmV0cnlGYWlsRXJyb3I+KCkucmVqZWN0KG5ldyBBcGlSZXRyeUZhaWxFcnJvcihwcmV2aW91c0Vycm9ycykpO1xuXHR9XG5cblx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXG5cdHZvaWQgYXBpXG5cdFx0LnBhcnNlKC4uLmFyZ3MpXG5cdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlQYXJzZVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUocmVzcG9uc2UpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnJvcj86IEVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblxuXHRcdFx0aWYgKGVycm9yICYmIHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgJiYgJ3N0YWNrJyBpbiBlcnJvcikge1xuXHRcdFx0XHRwcmV2aW91c0Vycm9yc1twcmV2aW91c0Vycm9ycy5sZW5ndGhdID0gZXJyb3Iuc3RhY2s7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwcmV2aW91c0Vycm9yc1twcmV2aW91c0Vycm9ycy5sZW5ndGhdID0gU3RyaW5nKGVycm9yKTtcblx0XHRcdH1cblxuXHRcdFx0cGFyc2VXaXRoUmV0cnkoYXJncywgLS1jb3VudCwgcHJldmlvdXNFcnJvcnMpXG5cdFx0XHRcdC50aGVuKChuZXdSZXNwb25zZTogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUobmV3UmVzcG9uc2UpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKG5ld0Vycm9yPzogRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChuZXdFcnJvcik7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdHJldHVybiBkZWZlcnJlZDtcbn07XG5cbmNvbnN0IHBhcnNlV2lraXRleHQgPSAoLi4uYXJnczogQXBpUGFyc2VQYXJhbWV0ZXJzKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiA9PiB7XG5cdHJldHVybiBwYXJzZVdpdGhSZXRyeShhcmdzKTtcbn07XG5cbmV4cG9ydCB7dHlwZSBBcGlQYXJzZVJlc3BvbnNlLCB0eXBlIEFwaVJlc3BvbnNlLCBwYXJzZVdpa2l0ZXh0fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge3R5cGUgQXBpUGFyc2VSZXNwb25zZSwgdHlwZSBBcGlSZXNwb25zZSwgcGFyc2VXaWtpdGV4dH0gZnJvbSAnLi9wYXJzZVdpa2l0ZXh0JztcbmltcG9ydCB7QXBpUmV0cnlGYWlsRXJyb3J9IGZyb20gJy4vdXRpbC9BcGlSZXRyeUZhaWxFcnJvcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJy4vdXRpbC9hc3NlcnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt2aWV3ZXJNYXB9IGZyb20gJy4vaW5pdFZpZXdNYXAnO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3QgZ2V0Vmlld2VyID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiwgaGFzaDogc3RyaW5nKTogdHlwZW9mIHZpZXdlciA9PiB7XG5cdGlmICh2aWV3ZXJNYXAuaGFzKGhhc2gpKSB7XG5cdFx0Y29uc3Qgc3RvcmVkVmlld2VyID0gdmlld2VyTWFwLmdldChoYXNoKTtcblx0XHRhc3NlcnQoc3RvcmVkVmlld2VyLCAndmlld2VyJyk7XG5cblx0XHRyZXR1cm4gc3RvcmVkVmlld2VyO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldEVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYCNub3RlVEEtJHtoYXNofWApO1xuXHRpZiAoISR0YXJnZXRFbGVtZW50Lmxlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgZ2V0IEVsZW1lbnQgXCIjbm90ZVRBLSR7aGFzaH1cIi5gKTtcblx0fVxuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRjbGFzcyBOb3RlVEFWaWV3ZXIgZXh0ZW5kcyBPTy51aS5Qcm9jZXNzRGlhbG9nIHtcblx0XHRwcml2YXRlIGRhdGFJc0xvYWRlZDogYm9vbGVhbjtcblx0XHRwcml2YXRlIGV4ZWN1dGVQcm9taXNlPzogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5kb0V4ZWN1dGU+O1xuXHRcdHByaXZhdGUgbXV0YXRpb25PYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcblx0XHRwcml2YXRlICRyZWFsQ29udGVudDogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgJGJvZHk6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRcdHByaXZhdGUgc3RhdGljIGxhc3RFcnJvcj86IE9PLnVpLkVycm9yO1xuXHRcdHByaXZhdGUgc3RhdGljIG5vdGVUQVBhcnNlVGV4dDogc3RyaW5nO1xuXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0c3VwZXIoe1xuXHRcdFx0XHRzaXplOiAnbGFyZ2VyJyxcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmRhdGFJc0xvYWRlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy4kcmVhbENvbnRlbnQgPSAkKDxkaXYgLz4pIGFzIEpRdWVyeTtcblxuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0XHRcdHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCh0aGlzIGFzIE9PLnVpLlByb2Nlc3NEaWFsb2cpLnVwZGF0ZVNpemUuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRyZWFsQ29udGVudC5nZXQoMCkgYXMgSFRNTEVsZW1lbnQsIHtcblx0XHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzQxMTJcblx0XHRwdWJsaWMgb3ZlcnJpZGUgaW5pdGlhbGl6ZSgpOiB0aGlzIHtcblx0XHRcdHN1cGVyLmluaXRpYWxpemUoKTtcblxuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0XHRcdGNvbnN0IHBhbmVsTGF5b3V0OiBPTy51aS5QYW5lbExheW91dCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmFwcGVuZFRvKHBhbmVsTGF5b3V0LiRlbGVtZW50KTtcblx0XHRcdHBhbmVsTGF5b3V0LiRlbGVtZW50LmFwcGVuZFRvKHRoaXMuJGJvZHkgYXMgSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRcdHB1YmxpYyBvdmVycmlkZSBnZXRTZXR1cFByb2Nlc3MoZGF0YTogT08udWkuRGlhbG9nLlNldHVwRGF0YU1hcCk6IE9PLnVpLlByb2Nlc3Mge1xuXHRcdFx0cmV0dXJuIHN1cGVyLmdldFNldHVwUHJvY2VzcyhkYXRhKS5uZXh0KCgpOiB2b2lkID0+IHtcblx0XHRcdFx0dm9pZCB0aGlzLmRvRXhlY3V0ZVdyYXAoKTtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0XHRcdFx0dm9pZCAoTm90ZVRBVmlld2VyIGFzIE9PLnVpLlByb2Nlc3NEaWFsb2cpLmV4ZWN1dGVBY3Rpb24oJ21haW4nKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldEFjdGlvblByb2Nlc3MoYWN0aW9uPzogc3RyaW5nKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRjb25zdCBpc01haW5BY3Rpb246IGJvb2xlYW4gPSBhY3Rpb24gPT09ICdtYWluJztcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0c3VwZXJcblx0XHRcdFx0XHQuZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24pXG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzcwMzBcblx0XHRcdFx0XHQubmV4dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoaXNNYWluQWN0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmRvRXhlY3V0ZVdyYXAoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5uZXh0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChpc01haW5BY3Rpb24gJiYgTm90ZVRBVmlld2VyLmxhc3RFcnJvcikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gTm90ZVRBVmlld2VyLmxhc3RFcnJvcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBzdXBlci5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbikuZXhlY3V0ZSgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuXHRcdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBnZXROb3RlVEFQYXJzZVRleHQoKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiB7XG5cdFx0XHRpZiAoTm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZDxzdHJpbmc+KCkucmVzb2x2ZShOb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgJG5vdGVUQXRpdGxlOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLXRpdGxlJyk7XG5cdFx0XHRjb25zdCBhY3R1YWxUaXRsZTogc3RyaW5nID0gd2dQYWdlTmFtZS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdFx0XHRjb25zdCB0aXRsZURlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblxuXHRcdFx0aWYgKCRub3RlVEF0aXRsZS5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgdGl0bGVDb252OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkbm90ZVRBdGl0bGUuYXR0cignZGF0YS1ub3RldGEtY29kZScpO1xuXHRcdFx0XHRhc3NlcnQodGl0bGVDb252LCAndGl0bGVDb252Jyk7XG5cblx0XHRcdFx0bGV0IHRpdGxlRGVzYzogc3RyaW5nIHwgdW5kZWZpbmVkID0gJG5vdGVUQXRpdGxlLmF0dHIoJ2RhdGEtbm90ZXRhLWRlc2MnKTtcblx0XHRcdFx0aWYgKHRpdGxlRGVzYykge1xuXHRcdFx0XHRcdHRpdGxlRGVzYyA9IGDvvIgke3RpdGxlRGVzY33vvIlgO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRpdGxlRGVzYyA9ICcnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2lraXRleHQgKz0gYDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj57e2VkaXR8JHthY3R1YWxUaXRsZX18c2VjdGlvbj0wfX08L3NwYW4+XFxuYDtcblx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paH5L2/55SoW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzmoIfpopjmiYvlt6XovazmjaJdXVxcbic7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIOi9rOaNouagh+mimOS4uu+8mi17RHwke3RpdGxlQ29udn19LSR7dGl0bGVEZXNjfVxcbmA7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIOWunumZheagh+mimOS4uu+8mi17Unwke2FjdHVhbFRpdGxlfX0t77yb5b2T5YmN5pi+56S65Li677yaLXt8JHt0aXRsZUNvbnZ9fS1cXG5gO1xuXG5cdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYXJzZVdpa2l0ZXh0KGB7e25vdGVUQS9tdWx0aXRpdGxlfCR7YWN0dWFsVGl0bGV9fX1gLCB7XG5cdFx0XHRcdFx0dGl0bGU6IGFjdHVhbFRpdGxlLFxuXHRcdFx0XHRcdHZhcmlhbnQ6ICd6aCcsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnRoZW4oKHJlc3VsdEh0bWw6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCAkbXVsdGlUaXRsZTogSlF1ZXJ5ID0gJCgkLnBhcnNlSFRNTChyZXN1bHRIdG1sIGFzIEFwaVBhcnNlUmVzcG9uc2UpKS5maW5kKFxuXHRcdFx0XHRcdFx0XHQnLm5vdGVUQS1tdWx0aXRpdGxlJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGlmICgkbXVsdGlUaXRsZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paHW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzmoIfpopjlj6/og73nu4/ov4fovazmjaJdXVxcbiog6L2s5o2i5qCH6aKY5Li677yaJztcblxuXHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0VmFyaWFudDogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRUZXh0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudWxsPiA9IHt9O1xuXG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbXVsdGlUaXRsZS5jaGlsZHJlbigpKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtbXVsdGl0aXRsZS12YXJpYW50Jyk7XG5cdFx0XHRcdFx0XHRcdFx0YXNzZXJ0KHZhcmlhbnQsICd2YXJpYW50Jyk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0OiBzdHJpbmcgPSAkZWxlbWVudC50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRUZXh0W3ZhcmlhbnRdID0gdGV4dDtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHRWYXJpYW50QXJyYXk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gdGV4dFZhcmlhbnRbdGV4dF07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRleHRWYXJpYW50QXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHRWYXJpYW50QXJyYXlbdGV4dFZhcmlhbnRBcnJheS5sZW5ndGhdID0gdmFyaWFudDtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dFZhcmlhbnRbdGV4dF0gPSBbdmFyaWFudF07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgdGl0bGVDb252ZXJ0ZWQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgPSB2YXJpYW50VGV4dFt3Z1VzZXJWYXJpYW50IGFzIHN0cmluZ107XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbXVsdGlUaXRsZTogc3RyaW5nW10gPSBbXTtcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCB0ZXh0IG9mIE9iamVjdC52YWx1ZXModmFyaWFudFRleHQpKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRleHQgPT09IG51bGwgfHwgdGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50czogc3RyaW5nW10gfCB1bmRlZmluZWQgPSB0ZXh0VmFyaWFudFt0ZXh0XTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXZhcmlhbnRzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRUZXh0W3ZhcmlhbnRdID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50c05hbWU6IHN0cmluZyA9IHZhcmlhbnRzXG5cdFx0XHRcdFx0XHRcdFx0XHQubWFwKCh2YXJpYW50OiBzdHJpbmcpOiBzdHJpbmcgPT4gYC17Unx7e01lZGlhV2lraTpWYXJpYW50bmFtZS0ke3ZhcmlhbnR9fX19LWApXG5cdFx0XHRcdFx0XHRcdFx0XHQuam9pbign44CBJyk7XG5cdFx0XHRcdFx0XHRcdFx0bXVsdGlUaXRsZVttdWx0aVRpdGxlLmxlbmd0aF0gPSBgJHt2YXJpYW50c05hbWV977yaLXtSfCR7dGV4dH19LWA7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBzdWJJdGVtU2VwYXJhdG9yOiBzdHJpbmcgPSAnXFxuKiogJztcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYCR7c3ViSXRlbVNlcGFyYXRvcn0ke211bHRpVGl0bGUuam9pbihzdWJJdGVtU2VwYXJhdG9yKX1gO1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgXFxuKiDlrp7pmYXmoIfpopjkuLrvvJote1J8JHthY3R1YWxUaXRsZX19Le+8m+W9k+WJjeaYvuekuuS4uu+8mi17Unwke3RpdGxlQ29udmVydGVkfX0tXFxuYDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlc29sdmUoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXG5cdFx0XHR0aXRsZURlZmVycmVkXG5cdFx0XHRcdC50aGVuKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRjb25zdCAkbm90ZVRBZ3JvdXBzOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLWdyb3VwID4gKltkYXRhLW5vdGV0YS1ncm91cF0nKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJG5vdGVUQWdyb3Vwcykge1xuXHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKCRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwLXNvdXJjZScpKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ3RlbXBsYXRlJzpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBge3tDR3JvdXAvJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbW9kdWxlJzpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBge3sjaW52b2tlOkNHcm91cFZpZXdlcnxkaWFsb2d8JHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbm9uZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDsg5pys5paH5L2/55So55qE5YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAneWwmuacquWIm+W7ulxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYCoge3tlZGl0fE1vZHVsZTpDR3JvdXAvJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfXzliJvlu7rlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCdfX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA7IOacquefpeWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ3mnaXmupDigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwLXNvdXJjZScpfeKAnVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWxvY2FsOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLWxvY2FsJyk7XG5cdFx0XHRcdFx0aWYgKCRub3RlVEFsb2NhbC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA8c3BhbiBzdHlsZT1cImZsb2F0OnJpZ2h0XCI+e3tlZGl0fCR7YWN0dWFsVGl0bGV9fHNlY3Rpb249MH19PC9zcGFuPlxcbmA7XG5cdFx0XHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlofkvb/nlKhbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOWFqOaWh+aJi+W3pei9rOaNol1dXFxuJztcblxuXHRcdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWxvY2FscyA9ICRub3RlVEFsb2NhbC5jaGlsZHJlbignKltkYXRhLW5vdGV0YS1jb2RlXScpO1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRub3RlVEFsb2NhbHMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdFx0bGV0IGxvY2FsRGVzYzogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZGVzYycpO1xuXHRcdFx0XHRcdFx0XHRpZiAobG9jYWxEZXNjKSB7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYWxEZXNjID0gYO+8iCR7bG9jYWxEZXNjfe+8iWA7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYWxEZXNjID0gJyc7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBsb2NhbENvbnY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWNvZGUnKTtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYCogLXtEfCR7bG9jYWxDb252fX0tJHtsb2NhbERlc2N95b2T5YmN5pi+56S65Li677yaLXske2xvY2FsQ29udn19LVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0d2lraXRleHQgKz0gJ3t7bm90ZVRBL2Zvb3Rlcn19XFxuJztcblxuXHRcdFx0XHRcdE5vdGVUQVZpZXdlci5ub3RlVEFQYXJzZVRleHQgPSB3aWtpdGV4dDtcblxuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZSh3aWtpdGV4dCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZG9FeGVjdXRlKCkge1xuXHRcdFx0aWYgKHRoaXMuZGF0YUlzTG9hZGVkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpLnJlc29sdmUoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuZW1wdHkoKS5hcHBlbmQoPHA+e2dldE1lc3NhZ2UoJ0xvYWRpbmcnKX08L3A+KTtcblxuXHRcdFx0cmV0dXJuIE5vdGVUQVZpZXdlci5nZXROb3RlVEFQYXJzZVRleHQoKVxuXHRcdFx0XHQudGhlbigod2lraXRleHQ6IEFwaVJlc3BvbnNlKSA9PlxuXHRcdFx0XHRcdHBhcnNlV2lraXRleHQod2lraXRleHQgYXMgQXBpUGFyc2VSZXNwb25zZSwge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdUZW1wbGF0ZTpDR3JvdXAvLScsXG5cdFx0XHRcdFx0XHR2YXJpYW50OiB3Z1VzZXJWYXJpYW50IGFzIHN0cmluZyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC50aGVuKChwYXJzZWRIdG1sOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdHRoaXMuJHJlYWxDb250ZW50XG5cdFx0XHRcdFx0XHQuZW1wdHkoKVxuXHRcdFx0XHRcdFx0Lmh0bWwocGFyc2VkSHRtbCBhcyBBcGlQYXJzZVJlc3BvbnNlKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKGAke09QVElPTlMucG9ydGxldENsYXNzfS1vdXRwdXRgKTtcblxuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmZpbmQoJy5tdy1jb2xsYXBzaWJsZScpIGFzIEpRdWVyeSAmIHttYWtlQ29sbGFwc2libGU6ICgpID0+IEpRdWVyeX1cblx0XHRcdFx0XHQpLm1ha2VDb2xsYXBzaWJsZSgpO1xuXG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0XHRcdFx0XHQodGhpcyBhcyBPTy51aS5Qcm9jZXNzRGlhbG9nKS51cGRhdGVTaXplKCk7XG5cdFx0XHRcdFx0dGhpcy5kYXRhSXNMb2FkZWQgPSB0cnVlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvciB8IEVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgQXBpUmV0cnlGYWlsRXJyb3IpIHtcblx0XHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgT08udWkuRXJyb3IoZXJyb3IudG9KUXVlcnkoKSwge1xuXHRcdFx0XHRcdFx0XHRyZWNvdmVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pIGFzIHVua25vd24gYXMgRXJyb3I7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgT08udWkuRXJyb3IoU3RyaW5nKGVycm9yKSwge1xuXHRcdFx0XHRcdFx0XHRyZWNvdmVyYWJsZTogZmFsc2UsXG5cdFx0XHRcdFx0XHR9KSBhcyB1bmtub3duIGFzIEVycm9yO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBkb0V4ZWN1dGVXcmFwKCkge1xuXHRcdFx0aWYgKHRoaXMuZXhlY3V0ZVByb21pc2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmV4ZWN1dGVQcm9taXNlID0gdGhpcy5kb0V4ZWN1dGUoKTtcblx0XHRcdFx0ZGVsZXRlIE5vdGVUQVZpZXdlci5sYXN0RXJyb3I7XG5cblx0XHRcdFx0Y29uc3QgZXhlY3V0ZURlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblx0XHRcdFx0dm9pZCAodGhpcy5leGVjdXRlUHJvbWlzZSBhcyBKUXVlcnkuUHJvbWlzZTxBcGlSZXNwb25zZT4pXG5cdFx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCBleGVjdXRlRGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEVycm9yIHwgT08udWkuRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBPTy51aS5FcnJvcikge1xuXHRcdFx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubGFzdEVycm9yID0gZXJyb3I7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2b2lkIGV4ZWN1dGVEZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFsd2F5cygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5leGVjdXRlUHJvbWlzZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gZXhlY3V0ZURlZmVycmVkO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cdFx0XHR2b2lkICh0aGlzLmV4ZWN1dGVQcm9taXNlIGFzIEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPilcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEVycm9yIHwgT08udWkuRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIE9PLnVpLkVycm9yKSB7XG5cdFx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubGFzdEVycm9yID0gZXJyb3I7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5hbHdheXMoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmV4ZWN1dGVQcm9taXNlO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH1cblx0fVxuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdChOb3RlVEFWaWV3ZXIgYXMgT08udWkuUHJvY2Vzc0RpYWxvZykuc3RhdGljID0ge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0Li4uT08udWkuUHJvY2Vzc0RpYWxvZy5zdGF0aWMsXG5cdH07XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdChOb3RlVEFWaWV3ZXIgYXMgT08udWkuUHJvY2Vzc0RpYWxvZykuc3RhdGljLm5hbWUgPSBgTm90ZVRBVmlld2VyLSR7aGFzaH1gO1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHQoTm90ZVRBVmlld2VyIGFzIE9PLnVpLlByb2Nlc3NEaWFsb2cpLnN0YXRpYy50aXRsZSA9IGdldE1lc3NhZ2UoJ1RpdGxlJyk7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdChOb3RlVEFWaWV3ZXIgYXMgT08udWkuUHJvY2Vzc0RpYWxvZykuc3RhdGljLmFjdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0bGFiZWw6IG13Lm1lc3NhZ2UoJ29vdWktZGlhbG9nLXByb2Nlc3MtZGlzbWlzcycpLnBhcnNlKCksXG5cdFx0XHRmbGFnczogJ3NhZmUnLFxuXHRcdH0sXG5cdF07XG5cblx0Y29uc3Qgdmlld2VyOiBOb3RlVEFWaWV3ZXIgPSBuZXcgTm90ZVRBVmlld2VyKCk7XG5cdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbdmlld2VyXSk7XG5cdHZpZXdlck1hcC5zZXQoaGFzaCwgdmlld2VyKTtcblxuXHRyZXR1cm4gdmlld2VyO1xufTtcblxuY29uc3QgcmVzZXRBbGxWaWV3ZXIgPSAoKTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3Qgdmlld2VyIG9mIHZpZXdlck1hcC52YWx1ZXMoKSkge1xuXHRcdHZpZXdlci5kZXN0cm95KCk7XG5cdH1cblx0dmlld2VyTWFwLmNsZWFyKCk7XG5cdHZvaWQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcbn07XG5cbmV4cG9ydCB7Z2V0Vmlld2VyLCByZXNldEFsbFZpZXdlcn07XG4iLCAiZnVuY3Rpb24gYXNzZXJ0PFQ+KHZhbHVlOiBUIHwgdW5kZWZpbmVkLCB2YWx1ZU5hbWU6IHN0cmluZyk6IGFzc2VydHMgdmFsdWUge1xuXHRpZiAoIXZhbHVlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBBc3NlcnQgRmFpbCwgJHt2YWx1ZU5hbWV9ID09IGZhbHNlLmApO1xuXHR9XG59XG5cbmV4cG9ydCB7YXNzZXJ0fTtcbiIsICJpbXBvcnQge3R5cGUgZ2V0Vmlld2VyfSBmcm9tICcuL3ZpZXdlcic7XG5cbmNvbnN0IHZpZXdlck1hcCA9IG5ldyBNYXA8c3RyaW5nLCBSZXR1cm5UeXBlPHR5cGVvZiBnZXRWaWV3ZXI+PigpO1xuXG5leHBvcnQge3ZpZXdlck1hcH07XG4iLCAiLy8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcbmNvbnN0IGluaXRXaW5kb3dNYW5hZ2VyID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIgPT4ge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRyZXR1cm4gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcbn07XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5jb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gaW5pdFdpbmRvd01hbmFnZXIoKTtcblxuZXhwb3J0IHt3aW5kb3dNYW5hZ2VyfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5cbmxldCBwb3J0bGV0SWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuY29uc3QgaW5pdEdsb2JhbE1ldGhvZHMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdHlwZW9mIGdsb2JhbE1ldGhvZHMgPT4ge1xuXHRjb25zdCBnbG9iYWxNZXRob2RzOiB7XG5cdFx0aW5pdCgpOiB2b2lkO1xuXHRcdGRlSW5pdCgpOiB2b2lkO1xuXHR9ID0ge1xuXHRcdGluaXQoKSB7XG5cdFx0XHQvKiBmYWtlICovXG5cdFx0fSxcblx0XHRkZUluaXQoKSB7XG5cdFx0XHQvKiBmYWtlICovXG5cdFx0fSxcblx0fTtcblxuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHNraW4gPT09ICd2ZWN0b3InKSB7XG5cdFx0cG9ydGxldElkID0gJ3Atbm90ZVRBJztcblxuXHRcdGxldCAkbm90ZVRBVGFiOiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cdFx0Z2xvYmFsTWV0aG9kcy5pbml0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCRub3RlVEFUYWIgfHwgIXBvcnRsZXRJZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBub3RlVEFUYWI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldChwb3J0bGV0SWQpO1xuXHRcdFx0aWYgKCFub3RlVEFUYWIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0JG5vdGVUQVRhYiA9ICQobm90ZVRBVGFiKTtcblx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIGFib3ZlIGNvZGVcblx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdCRub3RlVEFUYWJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKGBtdy1wb3J0bGV0LSR7cG9ydGxldElkfWApXG5cdFx0XHRcdC5hZGRDbGFzcyhbYG13LXBvcnRsZXQtJHtwb3J0bGV0SWQucmVwbGFjZSgncC0nLCAnJyl9YCwgJ3ZlY3Rvci1tZW51LXRhYnMnLCAndmVjdG9yLW1lbnUtdGFicy1sZWdhY3knXSk7XG5cdFx0XHQkYm9keS5maW5kKCcjcC12YXJpYW50cycpLmFmdGVyKCRub3RlVEFUYWIpO1xuXHRcdH07XG5cdFx0Z2xvYmFsTWV0aG9kcy5kZUluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoISRub3RlVEFUYWIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0JG5vdGVUQVRhYi5maW5kKCd1bCcpLmVtcHR5KCk7XG5cdFx0XHRpZiAocG9ydGxldElkKSB7XG5cdFx0XHRcdG13LnV0aWwuaGlkZVBvcnRsZXQocG9ydGxldElkKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9IGVsc2UgaWYgKHNraW4gPT09ICd2ZWN0b3ItMjAyMicpIHtcblx0XHRwb3J0bGV0SWQgPSAncC1hc3NvY2lhdGVkLXBhZ2VzJztcblxuXHRcdGdsb2JhbE1ldGhvZHMuZGVJbml0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0JGJvZHkuZmluZChgLiR7T1BUSU9OUy5wb3J0bGV0Q2xhc3N9YCkucmVtb3ZlKCk7XG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBnbG9iYWxNZXRob2RzO1xufTtcblxuZXhwb3J0IHtwb3J0bGV0SWQsIGluaXRHbG9iYWxNZXRob2RzfTtcbiIsICJpbXBvcnQge2dldFZpZXdlciwgcmVzZXRBbGxWaWV3ZXJ9IGZyb20gJy4vbW9kdWxlcy92aWV3ZXInO1xuaW1wb3J0IHtpbml0R2xvYmFsTWV0aG9kcywgcG9ydGxldElkfSBmcm9tICcuL21vZHVsZXMvaW5pdEdsb2JhbE1ldGhvZHMnO1xuaW1wb3J0IHtjaGVja0ExMXlDb25maXJtS2V5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZW5lcmF0ZVBvcnRsZXRMaW5rfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVBvcnRsZXRMaW5rJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyJztcblxubGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG5vdGVUQSgkY29udGVudCk6IHZvaWQge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkY29udGVudC5wYXJlbnRzKCdib2R5Jyk7XG5cblx0aWYgKCFpc0luaXQpIHtcblx0XHRpc0luaXQgPSB0cnVlO1xuXHRcdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuYXBwZW5kVG8oJGJvZHkpO1xuXHR9XG5cblx0cmVzZXRBbGxWaWV3ZXIoKTtcblxuXHRjb25zdCBnbG9iYWxNZXRob2RzID0gaW5pdEdsb2JhbE1ldGhvZHMoJGJvZHkpO1xuXHRnbG9iYWxNZXRob2RzLmRlSW5pdCgpO1xuXHRnbG9iYWxNZXRob2RzLmluaXQoKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZCgnLm13LWluZGljYXRvcltpZF49bXctaW5kaWNhdG9yLW5vdGVUQS1dJykpIHtcblx0XHRjb25zdCBoYXNoOiBzdHJpbmcgPSBlbGVtZW50LmlkLnJlcGxhY2UoL15tdy1pbmRpY2F0b3Itbm90ZVRBLS8sICcnKTtcblxuXHRcdGxldCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRpZiAocG9ydGxldElkKSB7XG5cdFx0XHQkZWxlbWVudC5oaWRlKCk7XG5cblx0XHRcdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5IHwgdW5kZWZpbmVkID0gZ2VuZXJhdGVQb3J0bGV0TGluayhoYXNoKTtcblx0XHRcdGlmICghJHBvcnRsZXRMaW5rKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQkZWxlbWVudCA9ICRwb3J0bGV0TGluaztcblx0XHR9XG5cblx0XHRjb25zdCBvcGVuZXJMaXN0ZW5lciA9IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0XHQoZ2V0Vmlld2VyKCRib2R5LCBoYXNoKSBhcyBPTy51aS5Qcm9jZXNzRGlhbG9nKS5vcGVuKCk7XG5cdFx0fTtcblx0XHQkZWxlbWVudC5vbignY2xpY2snLCBvcGVuZXJMaXN0ZW5lcik7XG5cdFx0JGVsZW1lbnQub24oJ2tleWRvd24nLCBvcGVuZXJMaXN0ZW5lcik7XG5cdH1cbn0pO1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge3BvcnRsZXRJZH0gZnJvbSAnLi4vaW5pdEdsb2JhbE1ldGhvZHMnO1xuXG5jb25zdCBnZW5lcmF0ZVBvcnRsZXRMaW5rID0gKGhhc2g6IHN0cmluZyk6IEpRdWVyeSB8IHVuZGVmaW5lZCA9PiB7XG5cdGlmICghcG9ydGxldElkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgJ+axiS/mvKInLCBgY2Etbm90ZVRBLSR7aGFzaH1gKTtcblx0aWYgKCFwb3J0bGV0TGluaykge1xuXHRcdHJldHVybjtcblx0fVxuXHRwb3J0bGV0TGluay5jbGFzc0xpc3QuYWRkKCdjYS1ub3RlVEEnKTtcblxuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRjb25zdCAkcG9ydGxldExpbms6IEpRdWVyeSA9ICQocG9ydGxldExpbmspLmFkZENsYXNzKE9QVElPTlMucG9ydGxldENsYXNzKTtcblx0JHBvcnRsZXRMaW5rXG5cdFx0LmZpbmQoJ2EnKVxuXHRcdC5lbXB0eSgpXG5cdFx0LmFwcGVuZChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17W2Ake09QVElPTlMucG9ydGxldENsYXNzfV9fbGFiZWxgLCBgJHtPUFRJT05TLnBvcnRsZXRDbGFzc31fX2xhYmVsLWhhbnNgXX0+XG5cdFx0XHRcdFx0eyfmsYknfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17W2Ake09QVElPTlMucG9ydGxldENsYXNzfV9fbGFiZWxgLCBgJHtPUFRJT05TLnBvcnRsZXRDbGFzc31fX2xhYmVsLWhhbnRgXX0+XG5cdFx0XHRcdFx0eyfmvKInfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXG5cdHJldHVybiAkcG9ydGxldExpbms7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlUG9ydGxldExpbmt9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLGVBQWdCO0FBQ2hCLElBQUFDLFVBQVc7O0FDRlosSUFBQUMscUJBQWtCQyxRQUFBQyxRQUFBLGdCQUFBLEdBQUEsQ0FBQTs7QUNBbEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLG9CQUFBLEdBQW1CRixrQkFBQUcsVUFBUztNQUMzQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxVQUFBLEdBQVNMLGtCQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFFBQUEsR0FBT04sa0JBQUFHLFVBQVM7TUFDZkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRyxlQUFlTixnQkFBZ0I7QUFFckMsSUFBTU8sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUR2QkEsSUFBTVAsb0JBQU4sY0FBZ0NRLE1BQU07RUFDN0JDO0VBRURDLFlBQVlELFFBQWtCO0FBQ3BDLFVBQUEsb0JBQUFFLE9BQTBCRixPQUFPRyxRQUFNLG9CQUFBLENBQW9CO0FBQzNELFNBQUtDLE9BQU87QUFDWixTQUFLSixTQUFTQTtFQUNmO0VBRU9LLFdBQW1CO0FBQ3pCLFVBQU1DLGFBQXFCLEtBQUtOLE9BQU9HO0FBRXZDLFVBQU1JLFVBQ0xyQixtQ0FBQXNCLFFBQUFDLGNBQUMsT0FBQTtNQUFJQyxXQUFVO0lBQUEsR0FDZHhCLG1DQUFBc0IsUUFBQUMsY0FBQyxLQUFBLE1BQUdaLFdBQVcsbUJBQW1CLEVBQUVjLFFBQVEsUUFBUUwsV0FBV00sU0FBUyxDQUFDLENBQUUsR0FDM0UxQixtQ0FBQXNCLFFBQUFDLGNBQUMsTUFBQSxNQUNDLEtBQUtULE9BQU9hLElBQXdCLENBQUNDLE9BQU9DLFVBQzVDN0IsbUNBQUFzQixRQUFBQyxjQUFDLE1BQUE7TUFBR1gsS0FBS2lCO0lBQUEsR0FDUEQsTUFBTUUsTUFBTSxJQUFJLEVBQUVILElBQXdCLENBQUNJLE1BQU1DLFdBQ2pEaEMsbUNBQUFzQixRQUFBQyxjQUFDLEtBQUE7TUFBRVgsS0FBS29CO0lBQUEsR0FBU0QsSUFBSyxDQUN0QixDQUNGLENBQ0EsQ0FDRixDQUNEO0FBRUQsVUFBTUUsV0FBV0MsRUFBRWIsT0FBTztBQUUxQixXQUFPWTtFQUNSO0FBQ0Q7O0FFaENBLElBQUFFLHFCQUF3QmpDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTWtDLE9BQUEsR0FBY0QsbUJBQUFFLFdBQUEsVUFBQXJCLE9BQTRCakIsT0FBTyxDQUFFOztBQ0t6RCxJQUFNdUMsaUJBQWlCQSxDQUN0QkMsTUFDQUMsUUFBZ0IsR0FDaEJDLGlCQUEyQixDQUFBLE1BQ087QUFDbEMsTUFBSSxDQUFDRCxPQUFPO0FBQ1gsV0FBT04sRUFBRVEsU0FBNEIsRUFBRUMsT0FBTyxJQUFJdEMsa0JBQWtCb0MsY0FBYyxDQUFDO0VBQ3BGO0FBRUEsUUFBTUcsV0FBV1YsRUFBRVEsU0FBc0I7QUFFekMsT0FBS04sSUFDSFMsTUFBTSxHQUFHTixJQUFJLEVBQ2JPLEtBQU1DLGNBQXFDO0FBQzNDLFNBQUtILFNBQVNJLFFBQVFELFFBQVE7RUFDL0IsQ0FBQyxFQUNBRSxNQUFPckIsV0FBaUM7QUFDeENzQixZQUFRdEIsTUFBTUEsS0FBSztBQUVuQixRQUFJQSxTQUFTLE9BQU9BLFVBQVUsWUFBWSxXQUFXQSxPQUFPO0FBQzNEYSxxQkFBZUEsZUFBZXhCLE1BQU0sSUFBSVcsTUFBTXVCO0lBQy9DLE9BQU87QUFDTlYscUJBQWVBLGVBQWV4QixNQUFNLElBQUltQyxPQUFPeEIsS0FBSztJQUNyRDtBQUVBVSxtQkFBZUMsTUFBTSxFQUFFQyxPQUFPQyxjQUFjLEVBQzFDSyxLQUFNTyxpQkFBbUM7QUFDekMsV0FBS1QsU0FBU0ksUUFBUUssV0FBVztJQUNsQyxDQUFDLEVBQ0FKLE1BQU9LLGNBQW9DO0FBQzNDLFdBQUtWLFNBQVNELE9BQU9XLFFBQVE7SUFDOUIsQ0FBQztFQUNILENBQUM7QUFFRixTQUFPVjtBQUNSO0FBRUEsSUFBTVcsZ0JBQWdCQSxJQUFJaEIsU0FBMkQ7QUFDcEYsU0FBT0QsZUFBZUMsSUFBSTtBQUMzQjs7QUM1Q0EsSUFBQWlCLHFCQUFrQnZELFFBQUFDLFFBQUEsZ0JBQUEsR0FBQSxDQUFBOztBQ0hsQixTQUFTdUQsT0FBVUMsT0FBc0JDLFdBQWtDO0FBQzFFLE1BQUksQ0FBQ0QsT0FBTztBQUNYLFVBQU0sSUFBSTdDLE1BQUEsZ0JBQUFHLE9BQXNCMkMsV0FBUyxZQUFBLENBQVk7RUFDdEQ7QUFDRDs7QUNGQSxJQUFNQyxZQUFZLG9CQUFJQyxJQUEwQzs7QUNEaEUsSUFBTUMsb0JBQW9CQSxNQUEyQjtBQUVwRCxTQUFPLElBQUlDLEdBQUdDLEdBQUdDLGNBQWM7QUFDaEM7QUFHQSxJQUFNQyxnQkFBcUNKLGtCQUFrQjs7QUhFN0QsSUFBTUssWUFBWUEsQ0FBQ0MsT0FBZ0NDLFNBQWdDO0FBQ2xGLE1BQUlULFVBQVVVLElBQUlELElBQUksR0FBRztBQUN4QixVQUFNRSxlQUFlWCxVQUFVWSxJQUFJSCxJQUFJO0FBQ3ZDWixXQUFPYyxjQUFjLFFBQVE7QUFFN0IsV0FBT0E7RUFDUjtBQUVBLFFBQU1FLGlCQUF5QkwsTUFBTU0sS0FBQSxXQUFBMUQsT0FBZ0JxRCxJQUFJLENBQUU7QUFDM0QsTUFBSSxDQUFDSSxlQUFleEQsUUFBUTtBQUMzQixVQUFNLElBQUlKLE1BQUEsOEJBQUFHLE9BQW9DcUQsTUFBSSxJQUFBLENBQUk7RUFDdkQ7QUFFQSxRQUFNO0lBQUNNO0lBQVlDO0VBQWEsSUFBSUMsR0FBR0MsT0FBT04sSUFBSTtFQUdsRCxNQUFNTyxxQkFBcUJoQixHQUFHQyxHQUFHZ0IsY0FBYztJQUN0Q0M7SUFDQUM7SUFDQUM7SUFDQUM7SUFDQWhCOztJQUVSLE9BQWVpQjtJQUNmLE9BQWVDO0lBRVJ2RSxjQUFjO0FBQ3BCLFlBQU07UUFDTHdFLE1BQU07TUFDUCxDQUFDO0FBRUQsV0FBS04sZUFBZTtBQUNwQixXQUFLRyxlQUFlbEQsRUFBRXNCLG1DQUFBbEMsUUFBQUMsY0FBQyxPQUFBLElBQUksQ0FBRTtBQUc3QixXQUFLNEQsbUJBQW1CLElBQUlLLGlCQUFrQixLQUE2QkMsV0FBV0MsS0FBSyxJQUFJLENBQUM7QUFDaEcsV0FBS1AsaUJBQWlCUSxRQUFRLEtBQUtQLGFBQWFaLElBQUksQ0FBQyxHQUFrQjtRQUN0RW9CLFdBQVc7UUFDWEMsU0FBUztNQUNWLENBQUM7SUFDRjs7SUFHZ0JDLGFBQW1CO0FBQ2xDLFlBQU1BLFdBQVc7QUFHakIsWUFBTUMsY0FBaUMsSUFBSWhDLEdBQUdDLEdBQUdnQyxZQUFZO1FBQzVEQyxVQUFVO1FBQ1ZDLFFBQVE7TUFDVCxDQUFDO0FBRUQsV0FBS2QsYUFBYWUsU0FBU0osWUFBWTlELFFBQVE7QUFDL0M4RCxrQkFBWTlELFNBQVNrRSxTQUFTLEtBQUsvQixLQUFnQztBQUVuRSxhQUFPO0lBQ1I7O0lBR2dCZ0MsZ0JBQWdCQyxNQUFnRDtBQUMvRSxhQUFPLE1BQU1ELGdCQUFnQkMsSUFBSSxFQUFFQyxLQUFLLE1BQVk7QUFDbkQsYUFBSyxLQUFLQyxjQUFjO0FBRXhCLGFBQU14QixhQUFxQ3lCLGNBQWMsTUFBTTtNQUNoRSxDQUFDO0lBQ0Y7O0lBR2dCQyxpQkFBaUJDLFFBQWdDO0FBQ2hFLFlBQU1DLGVBQXdCRCxXQUFXO0FBRXpDLGFBQ0MsTUFDRUQsaUJBQWlCQyxNQUFNLEVBRXZCSixLQUFLLE1BQU07QUFDWCxZQUFJSyxjQUFjO0FBQ2pCLGlCQUFPLEtBQUtKLGNBQWM7UUFDM0I7TUFDRCxDQUFDLEVBQ0FELEtBQUssTUFBTTtBQUNYLFlBQUlLLGdCQUFnQjVCLGFBQWFNLFdBQVc7QUFDM0MsaUJBQU9OLGFBQWFNO1FBQ3JCO0FBQ0EsZUFBTyxNQUFNb0IsaUJBQWlCQyxNQUFNLEVBQUVFLFFBQVE7TUFDL0MsQ0FBQztJQUVKO0lBRU9DLFVBQWdCO0FBQ3RCLFdBQUsxQixpQkFBaUIyQixXQUFXO0lBQ2xDO0lBRUEsT0FBZUMscUJBQW1EO0FBQ2pFLFVBQUloQyxhQUFhTyxpQkFBaUI7QUFDakMsZUFBT3BELEVBQUVRLFNBQWlCLEVBQUVNLFFBQVErQixhQUFhTyxlQUFlO01BQ2pFO0FBRUEsWUFBTTBCLGVBQXVCdkMsZUFBZUMsS0FBSyxlQUFlO0FBQ2hFLFlBQU11QyxjQUFzQnRDLFdBQVdsRCxRQUFRLE1BQU0sR0FBRztBQUN4RCxVQUFJeUYsV0FBbUI7QUFFdkIsWUFBTUMsZ0JBQWdCakYsRUFBRVEsU0FBc0I7QUFFOUMsVUFBSXNFLGFBQWEvRixRQUFRO0FBQ3hCLGNBQU1tRyxZQUFnQ0osYUFBYUssS0FBSyxrQkFBa0I7QUFDMUU1RCxlQUFPMkQsV0FBVyxXQUFXO0FBRTdCLFlBQUlFLFlBQWdDTixhQUFhSyxLQUFLLGtCQUFrQjtBQUN4RSxZQUFJQyxXQUFXO0FBQ2RBLHNCQUFBLElBQUF0RyxPQUFnQnNHLFdBQVMsR0FBQTtRQUMxQixPQUFPO0FBQ05BLHNCQUFZO1FBQ2I7QUFFQUosb0JBQUEsb0NBQUFsRyxPQUFnRGlHLGFBQVcsdUJBQUE7QUFDM0RDLG9CQUFZO0FBQ1pBLG9CQUFBLGVBQUFsRyxPQUEyQm9HLFdBQVMsSUFBQSxFQUFBcEcsT0FBS3NHLFdBQVMsSUFBQTtBQUNsREosb0JBQUEsZUFBQWxHLE9BQTJCaUcsYUFBVyxjQUFBLEVBQUFqRyxPQUFlb0csV0FBUyxNQUFBO0FBRTlELGFBQUtELGNBQWNuRSxRQUFRO01BQzVCLE9BQU87QUFDTk8sc0JBQUEsdUJBQUF2QyxPQUFxQ2lHLGFBQVcsSUFBQSxHQUFNO1VBQ3JETSxPQUFPTjtVQUNQTyxTQUFTO1FBQ1YsQ0FBQyxFQUNDMUUsS0FBTTJFLGdCQUFrQztBQUN4QyxnQkFBTUMsY0FBc0J4RixFQUFFQSxFQUFFeUYsVUFBVUYsVUFBOEIsQ0FBQyxFQUFFL0MsS0FDMUUsb0JBQ0Q7QUFDQSxjQUFJZ0QsWUFBWXpHLFFBQVE7QUFDdkJpRyx3QkFBWTtBQUVaLGtCQUFNVSxjQUF3QyxDQUFDO0FBQy9DLGtCQUFNQyxjQUE2QyxDQUFDO0FBQUEsZ0JBQUFDLGFBQUFDLDJCQUU5QkwsWUFBWU0sU0FBUyxDQUFBLEdBQUFDO0FBQUEsZ0JBQUE7QUFBM0MsbUJBQUFILFdBQUFJLEVBQUEsR0FBQSxFQUFBRCxTQUFBSCxXQUFBSyxFQUFBLEdBQUFDLFFBQThDO0FBQUEsc0JBQW5DL0csVUFBQTRHLE9BQUF2RTtBQUNWLHNCQUFNekIsV0FBV0MsRUFBRWIsT0FBTztBQUUxQixzQkFBTW1HLFVBQThCdkYsU0FBU29GLEtBQUssZ0NBQWdDO0FBQ2xGNUQsdUJBQU8rRCxTQUFTLFNBQVM7QUFFekIsc0JBQU1hLE9BQWVwRyxTQUFTb0csS0FBSyxFQUFFQyxLQUFLO0FBQzFDVCw0QkFBWUwsT0FBTyxJQUFJYTtBQUV2QixzQkFBTUUsbUJBQXlDWCxZQUFZUyxJQUFJO0FBQy9ELG9CQUFJRSxrQkFBa0I7QUFDckJBLG1DQUFpQkEsaUJBQWlCdEgsTUFBTSxJQUFJdUc7Z0JBQzdDLE9BQU87QUFDTkksOEJBQVlTLElBQUksSUFBSSxDQUFDYixPQUFPO2dCQUM3QjtjQUNEO1lBQUEsU0FBQWdCLEtBQUE7QUFBQVYseUJBQUFXLEVBQUFELEdBQUE7WUFBQSxVQUFBO0FBQUFWLHlCQUFBWSxFQUFBO1lBQUE7QUFFQSxrQkFBTUMsaUJBQTRDZCxZQUFZakQsYUFBdUI7QUFFckYsa0JBQU1nRSxhQUF1QixDQUFBO0FBQzdCLHFCQUFBQyxLQUFBLEdBQUFDLGlCQUFtQkMsT0FBT0MsT0FBT25CLFdBQVcsR0FBQWdCLEtBQUFDLGVBQUE3SCxRQUFBNEgsTUFBRztBQUEvQyxvQkFBV1IsT0FBQVMsZUFBQUQsRUFBQTtBQUNWLGtCQUFJUixTQUFTLFFBQVFBLFNBQVMsUUFBVztBQUN4QztjQUNEO0FBRUEsb0JBQU1ZLFdBQWlDckIsWUFBWVMsSUFBSTtBQUN2RCxrQkFBSSxDQUFDWSxVQUFVO0FBQ2Q7Y0FDRDtBQUFBLGtCQUFBQyxhQUFBbkIsMkJBRXNCa0IsUUFBQSxHQUFBRTtBQUFBLGtCQUFBO0FBQXRCLHFCQUFBRCxXQUFBaEIsRUFBQSxHQUFBLEVBQUFpQixTQUFBRCxXQUFBZixFQUFBLEdBQUFDLFFBQWdDO0FBQUEsd0JBQXJCWixVQUFBMkIsT0FBQXpGO0FBQ1ZtRSw4QkFBWUwsT0FBTyxJQUFJO2dCQUN4QjtjQUFBLFNBQUFnQixLQUFBO0FBQUFVLDJCQUFBVCxFQUFBRCxHQUFBO2NBQUEsVUFBQTtBQUFBVSwyQkFBQVIsRUFBQTtjQUFBO0FBRUEsb0JBQU1VLGVBQXVCSCxTQUMzQnRILElBQUs2RixhQUFBLCtCQUFBeEcsT0FBMkR3RyxTQUFPLE1BQUEsQ0FBTSxFQUM3RTZCLEtBQUssR0FBRztBQUNWVCx5QkFBV0EsV0FBVzNILE1BQU0sSUFBQSxHQUFBRCxPQUFPb0ksY0FBWSxPQUFBLEVBQUFwSSxPQUFRcUgsTUFBSSxJQUFBO1lBQzVEO0FBRUEsa0JBQU1pQixtQkFBMkI7QUFDakNwQyx3QkFBQSxHQUFBbEcsT0FBZXNJLGdCQUFnQixFQUFBdEksT0FBRzRILFdBQVdTLEtBQUtDLGdCQUFnQixDQUFDO0FBQ25FcEMsd0JBQUEsaUJBQUFsRyxPQUE2QmlHLGFBQVcsZUFBQSxFQUFBakcsT0FBZ0IySCxnQkFBYyxNQUFBO1VBQ3ZFO0FBRUEsZUFBS3hCLGNBQWNuRSxRQUFRO1FBQzVCLENBQUMsRUFDQUMsTUFBT3JCLFdBQW1DO0FBQzFDLGVBQUt1RixjQUFjeEUsT0FBT2YsS0FBSztRQUNoQyxDQUFDO01BQ0g7QUFFQSxZQUFNZ0IsV0FBV1YsRUFBRVEsU0FBc0I7QUFFekN5RSxvQkFDRXJFLEtBQUssTUFBWTtBQUNqQixjQUFNeUcsZ0JBQXdCOUUsZUFBZUMsS0FBSyxzQ0FBc0M7QUFBQSxZQUFBOEUsYUFBQXpCLDJCQUNsRXdCLGFBQUEsR0FBQUU7QUFBQSxZQUFBO0FBQXRCLGVBQUFELFdBQUF0QixFQUFBLEdBQUEsRUFBQXVCLFNBQUFELFdBQUFyQixFQUFBLEdBQUFDLFFBQXFDO0FBQUEsa0JBQTFCL0csVUFBQW9JLE9BQUEvRjtBQUNWLGtCQUFNekIsV0FBbUJDLEVBQUViLE9BQU87QUFDbEMsb0JBQVFZLFNBQVNvRixLQUFLLDBCQUEwQixHQUFBO2NBQy9DLEtBQUs7QUFDSkgsNEJBQUEsWUFBQWxHLE9BQXdCaUIsU0FBU29GLEtBQUssbUJBQW1CLEdBQUMsTUFBQTtBQUMxRDtjQUNELEtBQUs7QUFDSkgsNEJBQUEsaUNBQUFsRyxPQUE2Q2lCLFNBQVNvRixLQUFLLG1CQUFtQixHQUFDLE1BQUE7QUFDL0U7Y0FDRCxLQUFLO0FBQ0pILDRCQUFBLGdCQUFBbEcsT0FBNEJpQixTQUFTb0YsS0FBSyxtQkFBbUIsR0FBQyxTQUFBO0FBQzlESCw0QkFBQSwwQkFBQWxHLE9BQXNDaUIsU0FBU29GLEtBQUssbUJBQW1CLEdBQUMsV0FBQSxFQUFBckcsT0FBWWlCLFNBQVNvRixLQUFLLG1CQUFtQixHQUFDLE9BQUE7QUFDdEg7Y0FDRDtBQUNDSCw0QkFBQSxhQUFBbEcsT0FBeUJpQixTQUFTb0YsS0FBSyxtQkFBbUIsR0FBQyxNQUFBLEVBQUFyRyxPQUFPaUIsU0FBU29GLEtBQUssMEJBQTBCLEdBQUMsS0FBQTtZQUM3RztVQUNEO1FBQUEsU0FBQW1CLEtBQUE7QUFBQWdCLHFCQUFBZixFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBZ0IscUJBQUFkLEVBQUE7UUFBQTtBQUVBLGNBQU1nQixlQUF1QmpGLGVBQWVDLEtBQUssZUFBZTtBQUNoRSxZQUFJZ0YsYUFBYXpJLFFBQVE7QUFDeEJpRyxzQkFBQSxvQ0FBQWxHLE9BQWdEaUcsYUFBVyx1QkFBQTtBQUMzREMsc0JBQVk7QUFFWixnQkFBTXlDLGdCQUFnQkQsYUFBYTFCLFNBQVMscUJBQXFCO0FBQUEsY0FBQTRCLGFBQUE3QiwyQkFDM0M0QixhQUFBLEdBQUFFO0FBQUEsY0FBQTtBQUF0QixpQkFBQUQsV0FBQTFCLEVBQUEsR0FBQSxFQUFBMkIsU0FBQUQsV0FBQXpCLEVBQUEsR0FBQUMsUUFBcUM7QUFBQSxvQkFBMUIvRyxVQUFBd0ksT0FBQW5HO0FBQ1Ysb0JBQU16QixXQUFtQkMsRUFBRWIsT0FBTztBQUVsQyxrQkFBSXlJLFlBQWdDN0gsU0FBU29GLEtBQUssa0JBQWtCO0FBQ3BFLGtCQUFJeUMsV0FBVztBQUNkQSw0QkFBQSxJQUFBOUksT0FBZ0I4SSxXQUFTLEdBQUE7Y0FDMUIsT0FBTztBQUNOQSw0QkFBWTtjQUNiO0FBRUEsb0JBQU1DLFlBQWdDOUgsU0FBU29GLEtBQUssa0JBQWtCO0FBQ3RFSCwwQkFBQSxTQUFBbEcsT0FBcUIrSSxXQUFTLElBQUEsRUFBQS9JLE9BQUs4SSxXQUFTLFVBQUEsRUFBQTlJLE9BQVcrSSxXQUFTLE1BQUE7WUFDakU7VUFBQSxTQUFBdkIsS0FBQTtBQUFBb0IsdUJBQUFuQixFQUFBRCxHQUFBO1VBQUEsVUFBQTtBQUFBb0IsdUJBQUFsQixFQUFBO1VBQUE7UUFDRDtBQUVBeEIsb0JBQVk7QUFFWm5DLHFCQUFhTyxrQkFBa0I0QjtBQUUvQixhQUFLdEUsU0FBU0ksUUFBUWtFLFFBQVE7TUFDL0IsQ0FBQyxFQUNBakUsTUFBT3JCLFdBQW1DO0FBQzFDLGFBQUtnQixTQUFTRCxPQUFPZixLQUFLO01BQzNCLENBQUM7QUFFRixhQUFPZ0I7SUFDUjtJQUVRb0gsWUFBWTtBQUNuQixVQUFJLEtBQUsvRSxjQUFjO0FBQ3RCLGVBQU8vQyxFQUFFUSxTQUFzQixFQUFFTSxRQUFRO01BQzFDO0FBRUEsV0FBS29DLGFBQWE2RSxNQUFNLEVBQUVDLE9BQU8xRyxtQ0FBQWxDLFFBQUFDLGNBQUMsS0FBQSxNQUFHWixXQUFXLFNBQVMsQ0FBRSxDQUFJO0FBRS9ELGFBQU9vRSxhQUFhZ0MsbUJBQW1CLEVBQ3JDakUsS0FBTW9FLGNBQ04zRCxjQUFjMkQsVUFBOEI7UUFDM0NLLE9BQU87UUFDUEMsU0FBUzVDO01BQ1YsQ0FBQyxDQUNGLEVBQ0M5QixLQUFNcUgsZ0JBQWtDO0FBSXhDLGFBQUsvRSxhQUNINkUsTUFBTSxFQUNORyxLQUFLRCxVQUE4QixFQUNuQ0UsU0FBQSxHQUFBckosT0FBb0JsQixjQUFZLFNBQUEsQ0FBUztBQUcxQyxhQUFLc0YsYUFBYVYsS0FBSyxpQkFBaUIsRUFDdkM0RixnQkFBZ0I7QUFHakIsYUFBNkI3RSxXQUFXO0FBQ3pDLGFBQUtSLGVBQWU7TUFDckIsQ0FBQyxFQUNBaEMsTUFBT3JCLFdBQW9EO0FBQzNELFlBQUlBLGlCQUFpQnZCLG1CQUFtQjtBQUV2QyxnQkFBTSxJQUFJMEQsR0FBR0MsR0FBR25ELE1BQU1lLE1BQU1ULFNBQVMsR0FBRztZQUN2Q29KLGFBQWE7VUFDZCxDQUFDO1FBQ0YsT0FBTztBQUVOLGdCQUFNLElBQUl4RyxHQUFHQyxHQUFHbkQsTUFBTXVDLE9BQU94QixLQUFLLEdBQUc7WUFDcEMySSxhQUFhO1VBQ2QsQ0FBQztRQUNGO01BQ0QsQ0FBQztJQUNIO0lBRVFoRSxnQkFBZ0I7QUFDdkIsVUFBSSxLQUFLckIsbUJBQW1CLFFBQVc7QUFDdEMsYUFBS0EsaUJBQWlCLEtBQUs4RSxVQUFVO0FBQ3JDLGVBQU9qRixhQUFhTTtBQUVwQixjQUFNbUYsa0JBQWtCdEksRUFBRVEsU0FBc0I7QUFDaEQsYUFBTSxLQUFLd0MsZUFDVHBDLEtBQU1DLGNBQWdDO0FBQ3RDLGVBQUt5SCxnQkFBZ0J4SCxRQUFRRCxRQUFRO1FBQ3RDLENBQUMsRUFFQUUsTUFBT3JCLFdBQThDO0FBRXJELGNBQUlBLGlCQUFpQm1DLEdBQUdDLEdBQUduRCxPQUFPO0FBQ2pDa0UseUJBQWFNLFlBQVl6RDtVQUMxQixPQUFPO0FBQ04saUJBQUs0SSxnQkFBZ0I3SCxPQUFPZixLQUFLO1VBQ2xDO1FBQ0QsQ0FBQyxFQUNBNkksT0FBTyxNQUFZO0FBQ25CLGlCQUFPLEtBQUt2RjtRQUNiLENBQUM7QUFFRixlQUFPc0Y7TUFDUjtBQUVBLFlBQU01SCxXQUFXVixFQUFFUSxTQUFzQjtBQUN6QyxXQUFNLEtBQUt3QyxlQUNUcEMsS0FBTUMsY0FBZ0M7QUFDdEMsYUFBS0gsU0FBU0ksUUFBUUQsUUFBUTtNQUMvQixDQUFDLEVBRUFFLE1BQU9yQixXQUE4QztBQUVyRCxZQUFJQSxpQkFBaUJtQyxHQUFHQyxHQUFHbkQsT0FBTztBQUNqQ2tFLHVCQUFhTSxZQUFZekQ7UUFDMUIsT0FBTztBQUNOLGVBQUtnQixTQUFTRCxPQUFPZixLQUFLO1FBQzNCO01BQ0QsQ0FBQyxFQUNBNkksT0FBTyxNQUFZO0FBQ25CLGVBQU8sS0FBS3ZGO01BQ2IsQ0FBQztBQUVGLGFBQU90QztJQUNSO0VBQ0Q7QUFHQ21DLGVBQXFDMkYsU0FBUzs7SUFFOUMsR0FBRzNHLEdBQUdDLEdBQUdnQixjQUFjMEY7RUFDeEI7QUFFQzNGLGVBQXFDMkYsT0FBT3hKLE9BQUEsZ0JBQUFGLE9BQXVCcUQsSUFBSTtBQUV2RVUsZUFBcUMyRixPQUFPbkQsUUFBUTVHLFdBQVcsT0FBTztBQUV0RW9FLGVBQXFDMkYsT0FBT0MsVUFBVSxDQUN0RDtJQUNDQyxPQUFPL0YsR0FBR2dHLFFBQVEsNkJBQTZCLEVBQUVoSSxNQUFNO0lBQ3ZEaUksT0FBTztFQUNSLENBQUE7QUFHRCxRQUFNQyxTQUF1QixJQUFJaEcsYUFBYTtBQUM5Q2IsZ0JBQWM4RyxXQUFXLENBQUNELE1BQU0sQ0FBQztBQUNqQ25ILFlBQVVxSCxJQUFJNUcsTUFBTTBHLE1BQU07QUFFMUIsU0FBT0E7QUFDUjtBQUVBLElBQU1HLGlCQUFpQkEsTUFBWTtBQUFBLE1BQUFDLGFBQUFwRCwyQkFDYm5FLFVBQVVvRixPQUFPLENBQUEsR0FBQW9DO0FBQUEsTUFBQTtBQUF0QyxTQUFBRCxXQUFBakQsRUFBQSxHQUFBLEVBQUFrRCxTQUFBRCxXQUFBaEQsRUFBQSxHQUFBQyxRQUF5QztBQUFBLFlBQTlCMkMsU0FBQUssT0FBQTFIO0FBQ1ZxSCxhQUFPbEUsUUFBUTtJQUNoQjtFQUFBLFNBQUEyQixLQUFBO0FBQUEyQyxlQUFBMUMsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQTJDLGVBQUF6QyxFQUFBO0VBQUE7QUFDQTlFLFlBQVV5SCxNQUFNO0FBQ2hCLE9BQUtuSCxjQUFjb0gsYUFBYTtBQUNqQzs7QUl4WEEsSUFBSUM7QUFFSixJQUFNQyxvQkFBcUJwSCxXQUF5RDtBQUNuRixRQUFNcUgsZ0JBR0Y7SUFDSEMsT0FBTztJQUVQO0lBQ0FDLFNBQVM7SUFFVDtFQUNEO0FBRUEsUUFBTTtJQUFDQztFQUFJLElBQUkvRyxHQUFHQyxPQUFPTixJQUFJO0FBRTdCLE1BQUlvSCxTQUFTLFVBQVU7QUFDdEJMLGdCQUFZO0FBRVosUUFBSU07QUFDSkosa0JBQWNDLE9BQU8sTUFBWTtBQUNoQyxVQUFJRyxjQUFjLENBQUNOLFdBQVc7QUFDN0I7TUFDRDtBQUNBLFlBQU1PLFlBQWdDakgsR0FBR2tILEtBQUtDLFdBQVdULFNBQVM7QUFDbEUsVUFBSSxDQUFDTyxXQUFXO0FBQ2Y7TUFDRDtBQUNBRCxtQkFBYTNKLEVBQUU0SixTQUFTO0FBSXhCRCxpQkFDRUksWUFBQSxjQUFBakwsT0FBMEJ1SyxTQUFTLENBQUUsRUFDckNsQixTQUFTLENBQUEsY0FBQXJKLE9BQWV1SyxVQUFVOUosUUFBUSxNQUFNLEVBQUUsQ0FBQyxHQUFJLG9CQUFvQix5QkFBeUIsQ0FBQztBQUN2RzJDLFlBQU1NLEtBQUssYUFBYSxFQUFFd0gsTUFBTUwsVUFBVTtJQUMzQztBQUNBSixrQkFBY0UsU0FBUyxNQUFZO0FBQ2xDLFVBQUksQ0FBQ0UsWUFBWTtBQUNoQjtNQUNEO0FBQ0FBLGlCQUFXbkgsS0FBSyxJQUFJLEVBQUV1RixNQUFNO0FBQzVCLFVBQUlzQixXQUFXO0FBQ2QxRyxXQUFHa0gsS0FBS0ksWUFBWVosU0FBUztNQUM5QjtJQUNEO0VBQ0QsV0FBV0ssU0FBUyxlQUFlO0FBQ2xDTCxnQkFBWTtBQUVaRSxrQkFBY0UsU0FBUyxNQUFZO0FBQ2xDdkgsWUFBTU0sS0FBQSxJQUFBMUQsT0FBaUJsQixZQUFZLENBQUUsRUFBRXNNLE9BQU87SUFDL0M7RUFDRDtBQUVBLFNBQU9YO0FBQ1I7O0FDeERBLElBQUFZLHFCQUFrQ25NLFFBQUEsaUJBQUE7O0FDRGxDLElBQUFvTSxxQkFBa0JyTSxRQUFBQyxRQUFBLGdCQUFBLEdBQUEsQ0FBQTtBQUdsQixJQUFNcU0sc0JBQXVCbEksVUFBcUM7QUFDakUsTUFBSSxDQUFDa0gsV0FBVztBQUNmO0VBQ0Q7QUFFQSxRQUFNaUIsY0FBb0MzSCxHQUFHa0gsS0FBS1UsZUFBZWxCLFdBQVcsS0FBSyxPQUFBLGFBQUF2SyxPQUFvQnFELElBQUksQ0FBRTtBQUMzRyxNQUFJLENBQUNtSSxhQUFhO0FBQ2pCO0VBQ0Q7QUFDQUEsY0FBWUUsVUFBVUMsSUFBSSxXQUFXO0FBS3JDLFFBQU1DLGVBQXVCMUssRUFBRXNLLFdBQVcsRUFBRW5DLFNBQWlCdkssWUFBWTtBQUN6RThNLGVBQ0VsSSxLQUFLLEdBQUcsRUFDUnVGLE1BQU0sRUFDTkMsT0FDQW9DLG1DQUFBaEwsUUFBQUMsY0FBQyxPQUFBLE1BQ0ErSyxtQ0FBQWhMLFFBQUFDLGNBQUMsUUFBQTtJQUFLQyxXQUFXLENBQUEsR0FBQVIsT0FBWWxCLGNBQVksU0FBQSxHQUFBLEdBQUFrQixPQUFzQmxCLGNBQVksY0FBQSxDQUFBO0VBQWMsR0FDdkYsR0FDRixHQUNBd00sbUNBQUFoTCxRQUFBQyxjQUFDLFFBQUE7SUFBS0MsV0FBVyxDQUFBLEdBQUFSLE9BQVlsQixjQUFZLFNBQUEsR0FBQSxHQUFBa0IsT0FBc0JsQixjQUFZLGNBQUEsQ0FBQTtFQUFjLEdBQ3ZGLEdBQ0YsQ0FDRCxDQUNEO0FBRUQsU0FBTzhNO0FBQ1I7O0FENUJBLElBQUlDLFNBQWtCO0FBRXRCaEksR0FBR2lJLEtBQUssa0JBQWtCLEVBQUVILElBQUksU0FBU0ksT0FBT0MsVUFBZ0I7QUFDL0QsUUFBTTVJLFFBQWlDNEksU0FBU0MsUUFBUSxNQUFNO0FBRTlELE1BQUksQ0FBQ0osUUFBUTtBQUNaQSxhQUFTO0FBQ1QzSSxrQkFBY2pDLFNBQVNrRSxTQUFTL0IsS0FBSztFQUN0QztBQUVBOEcsaUJBQWU7QUFFZixRQUFNTyxnQkFBZ0JELGtCQUFrQnBILEtBQUs7QUFDN0NxSCxnQkFBY0UsT0FBTztBQUNyQkYsZ0JBQWNDLEtBQUs7QUFBQSxNQUFBd0IsYUFBQW5GLDJCQUVHM0QsTUFBTU0sS0FBSyx5Q0FBeUMsQ0FBQSxHQUFBeUk7QUFBQSxNQUFBO0FBQTFFLFNBQUFELFdBQUFoRixFQUFBLEdBQUEsRUFBQWlGLFNBQUFELFdBQUEvRSxFQUFBLEdBQUFDLFFBQTZFO0FBQUEsWUFBbEUvRyxVQUFBOEwsT0FBQXpKO0FBQ1YsWUFBTVcsT0FBZWhELFFBQVErTCxHQUFHM0wsUUFBUSx5QkFBeUIsRUFBRTtBQUVuRSxVQUFJUSxXQUFtQkMsRUFBRWIsT0FBTztBQUNoQyxVQUFJa0ssV0FBVztBQUNkdEosaUJBQVNvTCxLQUFLO0FBRWQsY0FBTVQsZUFBbUNMLG9CQUFvQmxJLElBQUk7QUFDakUsWUFBSSxDQUFDdUksY0FBYztBQUNsQjtRQUNEO0FBRUEzSyxtQkFBVzJLO01BQ1o7QUFFQSxZQUFNVSxpQkFBa0JDLFdBQXlEO0FBQ2hGLFlBQUksRUFBQSxHQUFDbEIsbUJBQUFtQixxQkFBb0JELEtBQUssR0FBRztBQUNoQztRQUNEO0FBRUFBLGNBQU1FLGVBQWU7QUFFcEJ0SixrQkFBVUMsT0FBT0MsSUFBSSxFQUEwQnFKLEtBQUs7TUFDdEQ7QUFDQXpMLGVBQVMwTCxHQUFHLFNBQVNMLGNBQWM7QUFDbkNyTCxlQUFTMEwsR0FBRyxXQUFXTCxjQUFjO0lBQ3RDO0VBQUEsU0FBQTlFLEtBQUE7QUFBQTBFLGVBQUF6RSxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBMEUsZUFBQXhFLEVBQUE7RUFBQTtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbInBvcnRsZXRDbGFzcyIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFwaVJldHJ5RmFpbEVycm9yIiwgImxvY2FsaXplIiwgImVuIiwgIkxvYWRpbmciLCAiVGl0bGUiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkVycm9yIiwgImVycm9ycyIsICJjb25zdHJ1Y3RvciIsICJjb25jYXQiLCAibGVuZ3RoIiwgIm5hbWUiLCAidG9KUXVlcnkiLCAiZXJyb3JDb3VudCIsICJlbGVtZW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicmVwbGFjZSIsICJ0b1N0cmluZyIsICJtYXAiLCAiZXJyb3IiLCAiaW5kZXgiLCAic3BsaXQiLCAibGluZSIsICJudW1iZXIiLCAiJGVsZW1lbnQiLCAiJCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJwYXJzZVdpdGhSZXRyeSIsICJhcmdzIiwgImNvdW50IiwgInByZXZpb3VzRXJyb3JzIiwgIkRlZmVycmVkIiwgInJlamVjdCIsICJkZWZlcnJlZCIsICJwYXJzZSIsICJ0aGVuIiwgInJlc3BvbnNlIiwgInJlc29sdmUiLCAiY2F0Y2giLCAiY29uc29sZSIsICJzdGFjayIsICJTdHJpbmciLCAibmV3UmVzcG9uc2UiLCAibmV3RXJyb3IiLCAicGFyc2VXaWtpdGV4dCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYXNzZXJ0IiwgInZhbHVlIiwgInZhbHVlTmFtZSIsICJ2aWV3ZXJNYXAiLCAiTWFwIiwgImluaXRXaW5kb3dNYW5hZ2VyIiwgIk9PIiwgInVpIiwgIldpbmRvd01hbmFnZXIiLCAid2luZG93TWFuYWdlciIsICJnZXRWaWV3ZXIiLCAiJGJvZHkiLCAiaGFzaCIsICJoYXMiLCAic3RvcmVkVmlld2VyIiwgImdldCIsICIkdGFyZ2V0RWxlbWVudCIsICJmaW5kIiwgIndnUGFnZU5hbWUiLCAid2dVc2VyVmFyaWFudCIsICJtdyIsICJjb25maWciLCAiTm90ZVRBVmlld2VyIiwgIlByb2Nlc3NEaWFsb2ciLCAiZGF0YUlzTG9hZGVkIiwgImV4ZWN1dGVQcm9taXNlIiwgIm11dGF0aW9uT2JzZXJ2ZXIiLCAiJHJlYWxDb250ZW50IiwgImxhc3RFcnJvciIsICJub3RlVEFQYXJzZVRleHQiLCAic2l6ZSIsICJNdXRhdGlvbk9ic2VydmVyIiwgInVwZGF0ZVNpemUiLCAiYmluZCIsICJvYnNlcnZlIiwgImNoaWxkTGlzdCIsICJzdWJ0cmVlIiwgImluaXRpYWxpemUiLCAicGFuZWxMYXlvdXQiLCAiUGFuZWxMYXlvdXQiLCAiZXhwYW5kZWQiLCAicGFkZGVkIiwgImFwcGVuZFRvIiwgImdldFNldHVwUHJvY2VzcyIsICJkYXRhIiwgIm5leHQiLCAiZG9FeGVjdXRlV3JhcCIsICJleGVjdXRlQWN0aW9uIiwgImdldEFjdGlvblByb2Nlc3MiLCAiYWN0aW9uIiwgImlzTWFpbkFjdGlvbiIsICJleGVjdXRlIiwgImRlc3Ryb3kiLCAiZGlzY29ubmVjdCIsICJnZXROb3RlVEFQYXJzZVRleHQiLCAiJG5vdGVUQXRpdGxlIiwgImFjdHVhbFRpdGxlIiwgIndpa2l0ZXh0IiwgInRpdGxlRGVmZXJyZWQiLCAidGl0bGVDb252IiwgImF0dHIiLCAidGl0bGVEZXNjIiwgInRpdGxlIiwgInZhcmlhbnQiLCAicmVzdWx0SHRtbCIsICIkbXVsdGlUaXRsZSIsICJwYXJzZUhUTUwiLCAidGV4dFZhcmlhbnQiLCAidmFyaWFudFRleHQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJjaGlsZHJlbiIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAidGV4dCIsICJ0cmltIiwgInRleHRWYXJpYW50QXJyYXkiLCAiZXJyIiwgImUiLCAiZiIsICJ0aXRsZUNvbnZlcnRlZCIsICJtdWx0aVRpdGxlIiwgIl9pIiwgIl9PYmplY3QkdmFsdWVzIiwgIk9iamVjdCIsICJ2YWx1ZXMiLCAidmFyaWFudHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAidmFyaWFudHNOYW1lIiwgImpvaW4iLCAic3ViSXRlbVNlcGFyYXRvciIsICIkbm90ZVRBZ3JvdXBzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIiRub3RlVEFsb2NhbCIsICIkbm90ZVRBbG9jYWxzIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImxvY2FsRGVzYyIsICJsb2NhbENvbnYiLCAiZG9FeGVjdXRlIiwgImVtcHR5IiwgImFwcGVuZCIsICJwYXJzZWRIdG1sIiwgImh0bWwiLCAiYWRkQ2xhc3MiLCAibWFrZUNvbGxhcHNpYmxlIiwgInJlY292ZXJhYmxlIiwgImV4ZWN1dGVEZWZlcnJlZCIsICJhbHdheXMiLCAic3RhdGljIiwgImFjdGlvbnMiLCAibGFiZWwiLCAibWVzc2FnZSIsICJmbGFncyIsICJ2aWV3ZXIiLCAiYWRkV2luZG93cyIsICJzZXQiLCAicmVzZXRBbGxWaWV3ZXIiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiY2xlYXIiLCAiY2xlYXJXaW5kb3dzIiwgInBvcnRsZXRJZCIsICJpbml0R2xvYmFsTWV0aG9kcyIsICJnbG9iYWxNZXRob2RzIiwgImluaXQiLCAiZGVJbml0IiwgInNraW4iLCAiJG5vdGVUQVRhYiIsICJub3RlVEFUYWIiLCAidXRpbCIsICJhZGRQb3J0bGV0IiwgInJlbW92ZUNsYXNzIiwgImFmdGVyIiwgImhpZGVQb3J0bGV0IiwgInJlbW92ZSIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImdlbmVyYXRlUG9ydGxldExpbmsiLCAicG9ydGxldExpbmsiLCAiYWRkUG9ydGxldExpbmsiLCAiY2xhc3NMaXN0IiwgImFkZCIsICIkcG9ydGxldExpbmsiLCAiaXNJbml0IiwgImhvb2siLCAibm90ZVRBIiwgIiRjb250ZW50IiwgInBhcmVudHMiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiaWQiLCAiaGlkZSIsICJvcGVuZXJMaXN0ZW5lciIsICJldmVudCIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgInByZXZlbnREZWZhdWx0IiwgIm9wZW4iLCAib24iXQp9Cg==
