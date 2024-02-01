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
//! src/NoteTA/modules/util/ApiRetryFailError.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
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
    }, /* @__PURE__ */ import_ext_gadget2.default.createElement("p", null, getMessage("ApiRetryFailError").replace(/\$1/g, errorCount.toString())), /* @__PURE__ */ import_ext_gadget2.default.createElement("ol", null, this.errors.reduce((errors, error, index) => [...errors, /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      key: index
    }, error.split("\n").reduce((accumulator, line, number) => [...accumulator, /* @__PURE__ */ import_ext_gadget2.default.createElement("p", {
      key: number
    }, line)], []))], [])));
    return $(element);
  }
};
//! src/NoteTA/options.json
var version = "1.0";
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
//! src/NoteTA/modules/constant.ts
var PORTLET_CLASS = "x-noteTA-viewer";
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_SKIN = mw.config.get("skin");
var WG_USER_VARIANT = mw.config.get("wgUserVariant");
//! src/NoteTA/modules/viewer.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
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
  class NoteTAViewer extends OO.ui.ProcessDialog {
    dataIsLoaded;
    executePromise;
    mutationObserver;
    $realContent;
    $body;
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
    getSetupProcess(data) {
      return super.getSetupProcess(data).next(() => {
        void this.doExecuteWrap();
        void this.executeAction("main");
      });
    }
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
      const actualTitle = WG_PAGE_NAME.replace(/_/g, " ");
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
            const titleConverted = variantText[WG_USER_VARIANT];
            const multiTitle = [];
            for (var _i = 0, _Object$values = Object.values(variantText); _i < _Object$values.length; _i++) {
              const text = _Object$values[_i];
              if (text === null) {
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
            wikitext += multiTitle.join("；");
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
        variant: WG_USER_VARIANT
      })).then((parsedHtml) => {
        this.$realContent.empty().html(parsedHtml).addClass("".concat(PORTLET_CLASS, "-output"));
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
    ...OO.ui.ProcessDialog.static
  };
  NoteTAViewer.static.name = "NoteTALoader-".concat(hash);
  NoteTAViewer.static.title = getMessage("Title");
  NoteTAViewer.static.actions = [{
    label: mw.msg("ooui-dialog-process-dismiss"),
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
//! src/NoteTA/modules/initGlobalMethods.tsx
var import_ext_gadget5 = __toESM(require("ext.gadget.React"), 1);
var globalMethods = {
  init() {
  },
  deInit() {
  },
  portletId: void 0
};
var initGlobalMethods = ($body) => {
  if (WG_SKIN === "vector") {
    globalMethods.portletId = "p-noteTA";
    let $noteTATab;
    globalMethods.init = () => {
      if ($noteTATab) {
        return;
      }
      const noteTATab = /* @__PURE__ */ import_ext_gadget5.default.createElement("div", {
        className: ["vector-menu", "vector-menu-tabs", "vector-menu-tabs-legacy"],
        id: globalMethods.portletId
      }, /* @__PURE__ */ import_ext_gadget5.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget5.default.createElement("ul", null)));
      $noteTATab = $(noteTATab);
      $body.find("#p-variants").after($noteTATab);
    };
    globalMethods.deInit = () => {
      if (!$noteTATab) {
        return;
      }
      $noteTATab.find("ul").empty();
      const {
        portletId
      } = globalMethods;
      if (portletId) {
        mw.util.hidePortlet(portletId);
      }
    };
  } else if (WG_SKIN === "vector-2022") {
    globalMethods.portletId = "p-associated-pages";
    globalMethods.deInit = () => {
      $body.find(PORTLET_CLASS).remove();
    };
  }
};
//! src/NoteTA/NoteTA.ts
var import_ext_gadget7 = require("ext.gadget.FilterAlteredClicks");
//! src/NoteTA/modules/util/generatePortletLink.tsx
var import_ext_gadget6 = __toESM(require("ext.gadget.React"), 1);
var generatePortletLink = (hash) => {
  const {
    portletId
  } = globalMethods;
  if (!portletId) {
    return;
  }
  const portletLink = mw.util.addPortletLink(portletId, "#", "汉/漢", "ca-noteTA-".concat(hash));
  if (!portletLink) {
    return;
  }
  const style = {
    height: "85%",
    padding: "1px 3px"
  };
  const $portletLink = $(portletLink).addClass(PORTLET_CLASS);
  $portletLink.find("a").empty().append(/* @__PURE__ */ import_ext_gadget6.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget6.default.createElement("span", {
    style: {
      ...style,
      background: "#d3e3f4",
      color: "#000"
    }
  }, "汉"), /* @__PURE__ */ import_ext_gadget6.default.createElement("span", {
    style: {
      ...style,
      background: "#e9e9e9",
      color: "#434343"
    }
  }, "漢")));
  return $portletLink;
};
//! src/NoteTA/NoteTA.ts
var isInit = false;
mw.hook("wikipage.content").add(($content) => {
  const $body = $content.parents("body");
  if (!isInit) {
    isInit = true;
    windowManager.$element.appendTo($body);
  }
  resetAllViewer();
  initGlobalMethods($body);
  globalMethods.deInit();
  globalMethods.init();
  var _iterator7 = _createForOfIteratorHelper($body.find(".mw-indicator[id^=mw-indicator-noteTA-]")), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      const element = _step7.value;
      const hash = element.id.replace(/^mw-indicator-noteTA-/, "");
      let $element = $(element);
      if (globalMethods.portletId) {
        var _generatePortletLink;
        $element.hide();
        $element = (_generatePortletLink = generatePortletLink(hash)) !== null && _generatePortletLink !== void 0 ? _generatePortletLink : $element;
      }
      $element.on("click", (0, import_ext_gadget7.filterAlteredClicks)((event) => {
        event.preventDefault();
        getViewer($body, hash).open();
      }));
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3IudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Ob3RlVEEvb3B0aW9ucy5qc29uIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9hcGkudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3BhcnNlV2lraXRleHQudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy92aWV3ZXIudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL2Fzc2VydC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdFZpZXdNYXAudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pbml0R2xvYmFsTWV0aG9kcy50c3giLCAic3JjL05vdGVUQS9Ob3RlVEEudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVQb3J0bGV0TGluay50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNsYXNzIEFwaVJldHJ5RmFpbEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRwcml2YXRlIGVycm9yczogc3RyaW5nW107XG5cblx0Y29uc3RydWN0b3IoZXJyb3JzOiBzdHJpbmdbXSkge1xuXHRcdHN1cGVyKGBBcGkgY2FsbHMgZmFpbGVkICR7ZXJyb3JzLmxlbmd0aH0gdGltZShzKSBpbiBhIHJvdy5gKTtcblx0XHR0aGlzLm5hbWUgPSAnQXBpUmV0cnlGYWlsRXJyb3InO1xuXHRcdHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuXHR9XG5cblx0dG9KUXVlcnkoKTogSlF1ZXJ5IHtcblx0XHRjb25zdCBlcnJvckNvdW50OiBudW1iZXIgPSB0aGlzLmVycm9ycy5sZW5ndGg7XG5cdFx0Y29uc3QgZWxlbWVudCA9IChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cblx0XHRcdFx0PHA+e2dldE1lc3NhZ2UoJ0FwaVJldHJ5RmFpbEVycm9yJykucmVwbGFjZSgvXFwkMS9nLCBlcnJvckNvdW50LnRvU3RyaW5nKCkpfTwvcD5cblx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdHt0aGlzLmVycm9ycy5yZWR1Y2UoXG5cdFx0XHRcdFx0XHQoZXJyb3JzLCBlcnJvciwgaW5kZXgpID0+IFtcblx0XHRcdFx0XHRcdFx0Li4uZXJyb3JzLFxuXHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0e2Vycm9yXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVkdWNlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoYWNjdW11bGF0b3IsIGxpbmUsIG51bWJlcikgPT4gWy4uLmFjY3VtdWxhdG9yLCA8cCBrZXk9e251bWJlcn0+e2xpbmV9PC9wPl0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtdIGFzIFJlYWN0LlJlYWN0RWxlbWVudFtdXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L2xpPixcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRbXSBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXVxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvb2w+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXG5cdFx0cmV0dXJuICQoZWxlbWVudCkgYXMgSlF1ZXJ5O1xuXHR9XG59XG5cbmV4cG9ydCB7QXBpUmV0cnlGYWlsRXJyb3J9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBcGlSZXRyeUZhaWxFcnJvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcGkgY2FsbHMgZmFpbGVkICQxIHRpbWUocykgaW4gYSByb3cuIEVycm9yczogJyxcblx0XHRcdCd6aC1oYW5zJzogJ0FwaSDosIPnlKjov57nu63lpLHotKUgJDEg5qyh77yMJDEg5qyh6LCD55So55qE6ZSZ6K+v5YiG5Yir5Li677yaJyxcblx0XHRcdCd6aC1oYW50JzogJ0FwaSDoqr/nlKjpgKPnuozlpLHmlZcgJDEg5qyh77yMJDEg5qyh6Kq/55So55qE6Yyv6Kqk5YiG5Yil54K677yaJyxcblx0XHR9KSxcblx0XHRMb2FkaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yqg6L294oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOi8ieWFpeKApuKApicsXG5cdFx0fSksXG5cdFx0VGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90ZVRBJyxcblx0XHRcdCd6aC1oYW5zJzogJ+Wtl+ivjei9rOaNoicsXG5cdFx0XHQnemgtaGFudCc6ICflrZfoqZ7ovYnmj5snLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjEuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBOb3RlVEEvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxudHlwZSBBcGlQYXJzZSA9IG13LkFwaVsncGFyc2UnXTtcbnR5cGUgQXBpUGFyc2VQYXJhbWV0ZXJzID0gUGFyYW1ldGVyczxBcGlQYXJzZT47XG50eXBlIEFwaVBhcnNlUmVzcG9uc2UgPSBBd2FpdGVkPFJldHVyblR5cGU8QXBpUGFyc2U+PjtcbnR5cGUgQXBpUmVzcG9uc2UgPSBBcGlQYXJzZVJlc3BvbnNlIHwgQXBpUmV0cnlGYWlsRXJyb3I7XG5cbmNvbnN0IHBhcnNlV2l0aFJldHJ5ID0gKFxuXHRhcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMsXG5cdGNvdW50OiBudW1iZXIgPSAzLFxuXHRwcmV2aW91c0Vycm9yczogc3RyaW5nW10gPSBbXVxuKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiA9PiB7XG5cdGlmICghY291bnQpIHtcblx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXRyeUZhaWxFcnJvcj4oKS5yZWplY3QobmV3IEFwaVJldHJ5RmFpbEVycm9yKHByZXZpb3VzRXJyb3JzKSk7XG5cdH1cblxuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0dm9pZCBhcGlcblx0XHQucGFyc2UoLi4uYXJncylcblx0XHQudGhlbigocmVzcG9uc2U6IEFwaVBhcnNlUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yPzogRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG5cdFx0XHRpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnc3RhY2snIGluIGVycm9yKSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBlcnJvci5zdGFjaztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBTdHJpbmcoZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZVdpdGhSZXRyeShhcmdzLCAtLWNvdW50LCBwcmV2aW91c0Vycm9ycylcblx0XHRcdFx0LnRoZW4oKG5ld1Jlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShuZXdSZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgobmV3RXJyb3I/OiBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KG5ld0Vycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIGRlZmVycmVkO1xufTtcblxuY29uc3QgcGFyc2VXaWtpdGV4dCA9ICguLi5hcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+ID0+IHtcblx0cmV0dXJuIHBhcnNlV2l0aFJldHJ5KGFyZ3MpO1xufTtcblxuZXhwb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9O1xuIiwgImNvbnN0IFBPUlRMRVRfQ0xBU1M6IHN0cmluZyA9ICd4LW5vdGVUQS12aWV3ZXInO1xuXG5jb25zdCBXR19QQUdFX05BTUU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcbmNvbnN0IFdHX1NLSU46IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKTtcbmNvbnN0IFdHX1VTRVJfVkFSSUFOVDogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKTtcblxuZXhwb3J0IHtQT1JUTEVUX0NMQVNTLCBXR19QQUdFX05BTUUsIFdHX1NLSU4sIFdHX1VTRVJfVkFSSUFOVH07XG4iLCAiaW1wb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9IGZyb20gJy4vcGFyc2VXaWtpdGV4dCc7XG5pbXBvcnQge1BPUlRMRVRfQ0xBU1MsIFdHX1BBR0VfTkFNRSwgV0dfVVNFUl9WQVJJQU5UfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7QXBpUmV0cnlGYWlsRXJyb3J9IGZyb20gJy4vdXRpbC9BcGlSZXRyeUZhaWxFcnJvcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnLi91dGlsL2Fzc2VydCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3ZpZXdlck1hcH0gZnJvbSAnLi9pbml0Vmlld01hcCc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBnZXRWaWV3ZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+LCBoYXNoOiBzdHJpbmcpOiB0eXBlb2Ygdmlld2VyID0+IHtcblx0aWYgKHZpZXdlck1hcC5oYXMoaGFzaCkpIHtcblx0XHRjb25zdCBzdG9yZWRWaWV3ZXIgPSB2aWV3ZXJNYXAuZ2V0KGhhc2gpO1xuXHRcdGFzc2VydChzdG9yZWRWaWV3ZXIsICd2aWV3ZXInKTtcblx0XHRyZXR1cm4gc3RvcmVkVmlld2VyO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldEVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYCNub3RlVEEtJHtoYXNofWApO1xuXHRpZiAoISR0YXJnZXRFbGVtZW50Lmxlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgZ2V0IEVsZW1lbnQgXCIjbm90ZVRBLSR7aGFzaH1cIi5gKTtcblx0fVxuXG5cdGNsYXNzIE5vdGVUQVZpZXdlciBleHRlbmRzIE9PLnVpLlByb2Nlc3NEaWFsb2cge1xuXHRcdHByaXZhdGUgZGF0YUlzTG9hZGVkOiBib29sZWFuO1xuXHRcdHByaXZhdGUgZXhlY3V0ZVByb21pc2U/OiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmRvRXhlY3V0ZT47XG5cdFx0cHJpdmF0ZSBtdXRhdGlvbk9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuXHRcdHByaXZhdGUgJHJlYWxDb250ZW50OiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSAkYm9keTogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXHRcdHByaXZhdGUgc3RhdGljIGxhc3RFcnJvcj86IE9PLnVpLkVycm9yO1xuXHRcdHByaXZhdGUgc3RhdGljIG5vdGVUQVBhcnNlVGV4dDogc3RyaW5nO1xuXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0c3VwZXIoe1xuXHRcdFx0XHRzaXplOiAnbGFyZ2VyJyxcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmRhdGFJc0xvYWRlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy4kcmVhbENvbnRlbnQgPSAkKDxkaXYgLz4pIGFzIEpRdWVyeTtcblxuXHRcdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy51cGRhdGVTaXplLmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy4kcmVhbENvbnRlbnQuZ2V0KDApIGFzIEhUTUxFbGVtZW50LCB7XG5cdFx0XHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRcdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdG92ZXJyaWRlIGluaXRpYWxpemUoKTogdGhpcyB7XG5cdFx0XHRzdXBlci5pbml0aWFsaXplKCk7XG5cblx0XHRcdGNvbnN0IHBhbmVsTGF5b3V0OiBPTy51aS5QYW5lbExheW91dCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmFwcGVuZFRvKHBhbmVsTGF5b3V0LiRlbGVtZW50KTtcblx0XHRcdHBhbmVsTGF5b3V0LiRlbGVtZW50LmFwcGVuZFRvKHRoaXMuJGJvZHkgYXMgSlF1ZXJ5KTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0b3ZlcnJpZGUgZ2V0U2V0dXBQcm9jZXNzKGRhdGE6IE9PLnVpLkRpYWxvZy5TZXR1cERhdGFNYXApOiBPTy51aS5Qcm9jZXNzIHtcblx0XHRcdHJldHVybiBzdXBlci5nZXRTZXR1cFByb2Nlc3MoZGF0YSkubmV4dCgoKSA9PiB7XG5cdFx0XHRcdHZvaWQgdGhpcy5kb0V4ZWN1dGVXcmFwKCk7XG5cdFx0XHRcdHZvaWQgdGhpcy5leGVjdXRlQWN0aW9uKCdtYWluJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRvdmVycmlkZSBnZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbj86IHN0cmluZyk6IE9PLnVpLlByb2Nlc3Mge1xuXHRcdFx0Y29uc3QgaXNNYWluQWN0aW9uOiBib29sZWFuID0gYWN0aW9uID09PSAnbWFpbic7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRzdXBlclxuXHRcdFx0XHRcdC5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbilcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNzAzMFxuXHRcdFx0XHRcdC5uZXh0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChpc01haW5BY3Rpb24pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuZG9FeGVjdXRlV3JhcCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Lm5leHQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGlzTWFpbkFjdGlvbiAmJiBOb3RlVEFWaWV3ZXIubGFzdEVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBOb3RlVEFWaWV3ZXIubGFzdEVycm9yO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHN1cGVyLmdldEFjdGlvblByb2Nlc3MoYWN0aW9uKS5leGVjdXRlKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0ZGVzdHJveSgpOiB2b2lkIHtcblx0XHRcdHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGdldE5vdGVUQVBhcnNlVGV4dCgpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+IHtcblx0XHRcdGlmIChOb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0KSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkPHN0cmluZz4oKS5yZXNvbHZlKE5vdGVUQVZpZXdlci5ub3RlVEFQYXJzZVRleHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCAkbm90ZVRBdGl0bGU6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtdGl0bGUnKTtcblx0XHRcdGNvbnN0IGFjdHVhbFRpdGxlOiBzdHJpbmcgPSBXR19QQUdFX05BTUUucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdFx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHRcdFx0Y29uc3QgdGl0bGVEZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0XHRcdGlmICgkbm90ZVRBdGl0bGUubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlQ29udjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJG5vdGVUQXRpdGxlLmF0dHIoJ2RhdGEtbm90ZXRhLWNvZGUnKTtcblx0XHRcdFx0YXNzZXJ0KHRpdGxlQ29udiwgJ3RpdGxlQ29udicpO1xuXG5cdFx0XHRcdGxldCB0aXRsZURlc2M6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRub3RlVEF0aXRsZS5hdHRyKCdkYXRhLW5vdGV0YS1kZXNjJyk7XG5cdFx0XHRcdGlmICh0aXRsZURlc2MpIHtcblx0XHRcdFx0XHR0aXRsZURlc2MgPSBg77yIJHt0aXRsZURlc2N977yJYDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aXRsZURlc2MgPSAnJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGA8c3BhbiBzdHlsZT1cImZsb2F0OnJpZ2h0XCI+e3tlZGl0fCR7YWN0dWFsVGl0bGV9fHNlY3Rpb249MH19PC9zcGFuPlxcbmA7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9ICc7IOacrOaWh+S9v+eUqFtbSGVscDrlrZfor43ovazmjaLlpITnkIZ85qCH6aKY5omL5bel6L2s5o2iXV1cXG4nO1xuXHRcdFx0XHR3aWtpdGV4dCArPSBgKiDovazmjaLmoIfpopjkuLrvvJote0R8JHt0aXRsZUNvbnZ9fS0ke3RpdGxlRGVzY31cXG5gO1xuXHRcdFx0XHR3aWtpdGV4dCArPSBgKiDlrp7pmYXmoIfpopjkuLrvvJote1J8JHthY3R1YWxUaXRsZX19Le+8m+W9k+WJjeaYvuekuuS4uu+8mi17fCR7dGl0bGVDb252fX0tXFxuYDtcblxuXHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFyc2VXaWtpdGV4dChge3tub3RlVEEvbXVsdGl0aXRsZXwke2FjdHVhbFRpdGxlfX19YCwge1xuXHRcdFx0XHRcdHRpdGxlOiBhY3R1YWxUaXRsZSxcblx0XHRcdFx0XHR2YXJpYW50OiAnemgnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKChyZXN1bHRIdG1sKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCAkbXVsdGlUaXRsZTogSlF1ZXJ5ID0gJCgkLnBhcnNlSFRNTChyZXN1bHRIdG1sIGFzIEFwaVBhcnNlUmVzcG9uc2UpKS5maW5kKFxuXHRcdFx0XHRcdFx0XHQnLm5vdGVUQS1tdWx0aXRpdGxlJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGlmICgkbXVsdGlUaXRsZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paHW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzmoIfpopjlj6/og73nu4/ov4fovazmjaJdXVxcbiog6L2s5o2i5qCH6aKY5Li677yaJztcblxuXHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0VmFyaWFudDogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRUZXh0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudWxsPiA9IHt9O1xuXG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbXVsdGlUaXRsZS5jaGlsZHJlbigpKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtbXVsdGl0aXRsZS12YXJpYW50Jyk7XG5cdFx0XHRcdFx0XHRcdFx0YXNzZXJ0KHZhcmlhbnQsICd2YXJpYW50Jyk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0OiBzdHJpbmcgPSAkZWxlbWVudC50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRUZXh0W3ZhcmlhbnRdID0gdGV4dDtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHRWYXJpYW50QXJyYXk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gdGV4dFZhcmlhbnRbdGV4dF07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRleHRWYXJpYW50QXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHRWYXJpYW50QXJyYXlbdGV4dFZhcmlhbnRBcnJheS5sZW5ndGhdID0gdmFyaWFudDtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dFZhcmlhbnRbdGV4dF0gPSBbdmFyaWFudF07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgdGl0bGVDb252ZXJ0ZWQgPSB2YXJpYW50VGV4dFtXR19VU0VSX1ZBUklBTlQgYXMgc3RyaW5nXTtcblxuXHRcdFx0XHRcdFx0XHRjb25zdCBtdWx0aVRpdGxlOiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHRleHQgb2YgT2JqZWN0LnZhbHVlcyh2YXJpYW50VGV4dCkpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gdGV4dFZhcmlhbnRbdGV4dF07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCF2YXJpYW50cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50VGV4dFt2YXJpYW50XSA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudHNOYW1lOiBzdHJpbmcgPSB2YXJpYW50c1xuXHRcdFx0XHRcdFx0XHRcdFx0Lm1hcCgodmFyaWFudDogc3RyaW5nKTogc3RyaW5nID0+IGAte1J8e3tNZWRpYVdpa2k6VmFyaWFudG5hbWUtJHt2YXJpYW50fX19fS1gKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmpvaW4oJ+OAgScpO1xuXHRcdFx0XHRcdFx0XHRcdG11bHRpVGl0bGVbbXVsdGlUaXRsZS5sZW5ndGhdID0gYCR7dmFyaWFudHNOYW1lfe+8mi17Unwke3RleHR9fS1gO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gbXVsdGlUaXRsZS5qb2luKCfvvJsnKTtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYFxcbiog5a6e6ZmF5qCH6aKY5Li677yaLXtSfCR7YWN0dWFsVGl0bGV9fS3vvJvlvZPliY3mmL7npLrkuLrvvJote1J8JHt0aXRsZUNvbnZlcnRlZH19LVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblxuXHRcdFx0dGl0bGVEZWZlcnJlZFxuXHRcdFx0XHQudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWdyb3VwczogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS1ncm91cCA+ICpbZGF0YS1ub3RldGEtZ3JvdXBdJyk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRub3RlVEFncm91cHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0c3dpdGNoICgkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cC1zb3VyY2UnKSkge1xuXHRcdFx0XHRcdFx0XHRjYXNlICd0ZW1wbGF0ZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYHt7Q0dyb3VwLyR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ21vZHVsZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYHt7I2ludm9rZTpDR3JvdXBWaWV3ZXJ8ZGlhbG9nfCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ25vbmUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA7IOacrOaWh+S9v+eUqOeahOWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ3lsJrmnKrliJvlu7pcXG5gO1xuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIHt7ZWRpdHxNb2R1bGU6Q0dyb3VwLyR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX185Yib5bu65YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAnX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgOyDmnKrnn6XlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCd5p2l5rqQ4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cC1zb3VyY2UnKX3igJ1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0ICRub3RlVEFsb2NhbDogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS1sb2NhbCcpO1xuXHRcdFx0XHRcdGlmICgkbm90ZVRBbG9jYWwubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodFwiPnt7ZWRpdHwke2FjdHVhbFRpdGxlfXxzZWN0aW9uPTB9fTwvc3Bhbj5cXG5gO1xuXHRcdFx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paH5L2/55SoW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzlhajmlofmiYvlt6XovazmjaJdXVxcbic7XG5cblx0XHRcdFx0XHRcdGNvbnN0ICRub3RlVEFsb2NhbHMgPSAkbm90ZVRBbG9jYWwuY2hpbGRyZW4oJypbZGF0YS1ub3RldGEtY29kZV0nKTtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbm90ZVRBbG9jYWxzKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRcdGxldCBsb2NhbERlc2M6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWRlc2MnKTtcblx0XHRcdFx0XHRcdFx0aWYgKGxvY2FsRGVzYykge1xuXHRcdFx0XHRcdFx0XHRcdGxvY2FsRGVzYyA9IGDvvIgke2xvY2FsRGVzY33vvIlgO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGxvY2FsRGVzYyA9ICcnO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbG9jYWxDb252OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1jb2RlJyk7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIC17RHwke2xvY2FsQ29udn19LSR7bG9jYWxEZXNjfeW9k+WJjeaYvuekuuS4uu+8mi17JHtsb2NhbENvbnZ9fS1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICd7e25vdGVUQS9mb290ZXJ9fVxcbic7XG5cblx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0ID0gd2lraXRleHQ7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKHdpa2l0ZXh0KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fVxuXG5cdFx0ZG9FeGVjdXRlKCkge1xuXHRcdFx0aWYgKHRoaXMuZGF0YUlzTG9hZGVkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpLnJlc29sdmUoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuZW1wdHkoKS5hcHBlbmQoPHA+e2dldE1lc3NhZ2UoJ0xvYWRpbmcnKX08L3A+KTtcblxuXHRcdFx0cmV0dXJuIE5vdGVUQVZpZXdlci5nZXROb3RlVEFQYXJzZVRleHQoKVxuXHRcdFx0XHQudGhlbigod2lraXRleHQ6IEFwaVJlc3BvbnNlKSA9PlxuXHRcdFx0XHRcdHBhcnNlV2lraXRleHQod2lraXRleHQgYXMgQXBpUGFyc2VSZXNwb25zZSwge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdUZW1wbGF0ZTpDR3JvdXAvLScsXG5cdFx0XHRcdFx0XHR2YXJpYW50OiBXR19VU0VSX1ZBUklBTlQgYXMgc3RyaW5nLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdFx0LnRoZW4oKHBhcnNlZEh0bWw6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0dGhpcy4kcmVhbENvbnRlbnRcblx0XHRcdFx0XHRcdC5lbXB0eSgpXG5cdFx0XHRcdFx0XHQuaHRtbChwYXJzZWRIdG1sIGFzIEFwaVBhcnNlUmVzcG9uc2UpXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoYCR7UE9SVExFVF9DTEFTU30tb3V0cHV0YCk7XG5cblx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHR0aGlzLiRyZWFsQ29udGVudC5maW5kKCcubXctY29sbGFwc2libGUnKSBhcyBKUXVlcnkgJiB7bWFrZUNvbGxhcHNpYmxlOiAoKSA9PiBKUXVlcnl9XG5cdFx0XHRcdFx0KS5tYWtlQ29sbGFwc2libGUoKTtcblxuXHRcdFx0XHRcdHRoaXMudXBkYXRlU2l6ZSgpO1xuXHRcdFx0XHRcdHRoaXMuZGF0YUlzTG9hZGVkID0gdHJ1ZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IgfCBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEFwaVJldHJ5RmFpbEVycm9yKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgT08udWkuRXJyb3IoZXJyb3IudG9KUXVlcnkoKSwge1xuXHRcdFx0XHRcdFx0XHRyZWNvdmVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgT08udWkuRXJyb3IoU3RyaW5nKGVycm9yKSwge1xuXHRcdFx0XHRcdFx0XHRyZWNvdmVyYWJsZTogZmFsc2UsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGRvRXhlY3V0ZVdyYXAoKSB7XG5cdFx0XHRpZiAodGhpcy5leGVjdXRlUHJvbWlzZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZXhlY3V0ZVByb21pc2UgPSB0aGlzLmRvRXhlY3V0ZSgpO1xuXHRcdFx0XHRkZWxldGUgTm90ZVRBVmlld2VyLmxhc3RFcnJvcjtcblxuXHRcdFx0XHRjb25zdCBleGVjdXRlRGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXHRcdFx0XHR2b2lkICh0aGlzLmV4ZWN1dGVQcm9taXNlIGFzIEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPilcblx0XHRcdFx0XHQudGhlbigocmVzcG9uc2U6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHR2b2lkIGV4ZWN1dGVEZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEVycm9yIHwgT08udWkuRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIE9PLnVpLkVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdE5vdGVUQVZpZXdlci5sYXN0RXJyb3IgPSBlcnJvcjtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZvaWQgZXhlY3V0ZURlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmV4ZWN1dGVQcm9taXNlO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiBleGVjdXRlRGVmZXJyZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblx0XHRcdHZvaWQgKHRoaXMuZXhlY3V0ZVByb21pc2UgYXMgSlF1ZXJ5LlByb21pc2U8QXBpUmVzcG9uc2U+KVxuXHRcdFx0XHQudGhlbigocmVzcG9uc2U6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnJvcjogRXJyb3IgfCBPTy51aS5FcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIE9PLnVpLkVycm9yKSB7XG5cdFx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubGFzdEVycm9yID0gZXJyb3I7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5hbHdheXMoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmV4ZWN1dGVQcm9taXNlO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH1cblx0fVxuXG5cdE5vdGVUQVZpZXdlci5zdGF0aWMgPSB7XG5cdFx0Li4uT08udWkuUHJvY2Vzc0RpYWxvZy5zdGF0aWMsXG5cdH07XG5cdE5vdGVUQVZpZXdlci5zdGF0aWMubmFtZSA9IGBOb3RlVEFMb2FkZXItJHtoYXNofWA7XG5cdE5vdGVUQVZpZXdlci5zdGF0aWMudGl0bGUgPSBnZXRNZXNzYWdlKCdUaXRsZScpO1xuXHROb3RlVEFWaWV3ZXIuc3RhdGljLmFjdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0bGFiZWw6IG13Lm1zZygnb291aS1kaWFsb2ctcHJvY2Vzcy1kaXNtaXNzJyksXG5cdFx0XHRmbGFnczogJ3NhZmUnLFxuXHRcdH0sXG5cdF07XG5cblx0Y29uc3Qgdmlld2VyOiBOb3RlVEFWaWV3ZXIgPSBuZXcgTm90ZVRBVmlld2VyKCk7XG5cdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbdmlld2VyXSk7XG5cdHZpZXdlck1hcC5zZXQoaGFzaCwgdmlld2VyKTtcblxuXHRyZXR1cm4gdmlld2VyO1xufTtcblxuY29uc3QgcmVzZXRBbGxWaWV3ZXIgPSAoKTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3Qgdmlld2VyIG9mIHZpZXdlck1hcC52YWx1ZXMoKSkge1xuXHRcdHZpZXdlci5kZXN0cm95KCk7XG5cdH1cblx0dmlld2VyTWFwLmNsZWFyKCk7XG5cdHZvaWQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcbn07XG5cbmV4cG9ydCB7Z2V0Vmlld2VyLCByZXNldEFsbFZpZXdlcn07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmZ1bmN0aW9uIGFzc2VydDxUPih2YWx1ZTogVCB8IHVuZGVmaW5lZCwgdmFsdWVOYW1lOiBzdHJpbmcpOiBhc3NlcnRzIHZhbHVlIHtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgQXNzZXJ0IEZhaWwsICR7dmFsdWVOYW1lfSA9PSBmYWxzZS5gKTtcblx0fVxufVxuXG5leHBvcnQge2Fzc2VydH07XG4iLCAiaW1wb3J0IHt0eXBlIGdldFZpZXdlcn0gZnJvbSAnLi92aWV3ZXInO1xuXG5jb25zdCB2aWV3ZXJNYXAgPSBuZXcgTWFwPHN0cmluZywgUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Vmlld2VyPj4oKTtcblxuZXhwb3J0IHt2aWV3ZXJNYXB9O1xuIiwgImNvbnN0IGluaXRXaW5kb3dNYW5hZ2VyID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIgPT4ge1xuXHRyZXR1cm4gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcbn07XG5cbmNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXG5leHBvcnQge3dpbmRvd01hbmFnZXJ9O1xuIiwgImltcG9ydCB7UE9SVExFVF9DTEFTUywgV0dfU0tJTn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbmNvbnN0IGdsb2JhbE1ldGhvZHM6IHtcblx0aW5pdCgpOiB2b2lkO1xuXHRkZUluaXQoKTogdm9pZDtcblx0cG9ydGxldElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59ID0ge1xuXHRpbml0KCkge1xuXHRcdC8qIGZha2UgKi9cblx0fSxcblx0ZGVJbml0KCkge1xuXHRcdC8qIGZha2UgKi9cblx0fSxcblx0cG9ydGxldElkOiB1bmRlZmluZWQsXG59O1xuXG5jb25zdCBpbml0R2xvYmFsTWV0aG9kcyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKFdHX1NLSU4gPT09ICd2ZWN0b3InKSB7XG5cdFx0Z2xvYmFsTWV0aG9kcy5wb3J0bGV0SWQgPSAncC1ub3RlVEEnO1xuXHRcdGxldCAkbm90ZVRBVGFiOiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cdFx0Z2xvYmFsTWV0aG9kcy5pbml0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCRub3RlVEFUYWIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8vLy8vLy8vLy8vLy8vLy8vL1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBAdG9kbyByZXBsYWNlIHdpdGggYG13LnV0aWwuYWRkUG9ydGxldGAgYWZ0ZXIgdXBncmFkZSB0byBNZWRpYVdpa2kgMS40MStcblx0XHRcdCAqIEBleGFtcGxlXG5cdFx0XHQgKiBjb25zdCBub3RlVEFUYWI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldChQT1JUTEVUX0lEKTtcblx0XHRcdCAqIGlmICghbm90ZVRBVGFiKSB7XG5cdFx0XHQgKiAgICAgcmV0dXJuO1xuXHRcdFx0ICogfVxuXHRcdFx0ICogJG5vdGVUQVRhYiA9ICQobm90ZVRBVGFiKTtcblx0XHRcdCAqICRub3RlVEFUYWIucmVtb3ZlQ2xhc3MoYG13LXBvcnRsZXQtJHtQT1JUTEVUX0lEfWApLmFkZENsYXNzKFtgbXctcG9ydGxldC0ke1BPUlRMRVRfSUQucmVwbGFjZSgncC0nLCAnJyl9YCwgJ3ZlY3Rvci1tZW51LXRhYnMnXSk7XG5cdFx0XHQgKi9cblx0XHRcdGNvbnN0IG5vdGVUQVRhYiA9IChcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Wyd2ZWN0b3ItbWVudScsICd2ZWN0b3ItbWVudS10YWJzJywgJ3ZlY3Rvci1tZW51LXRhYnMtbGVnYWN5J119XG5cdFx0XHRcdFx0aWQ9e2dsb2JhbE1ldGhvZHMucG9ydGxldElkfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDx1bCAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vXG5cdFx0XHQkbm90ZVRBVGFiID0gJChub3RlVEFUYWIpIGFzIEpRdWVyeTtcblx0XHRcdCRib2R5LmZpbmQoJyNwLXZhcmlhbnRzJykuYWZ0ZXIoJG5vdGVUQVRhYik7XG5cdFx0fTtcblx0XHRnbG9iYWxNZXRob2RzLmRlSW5pdCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGlmICghJG5vdGVUQVRhYikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQkbm90ZVRBVGFiLmZpbmQoJ3VsJykuZW1wdHkoKTtcblx0XHRcdGNvbnN0IHtwb3J0bGV0SWR9ID0gZ2xvYmFsTWV0aG9kcztcblx0XHRcdGlmIChwb3J0bGV0SWQpIHtcblx0XHRcdFx0bXcudXRpbC5oaWRlUG9ydGxldChwb3J0bGV0SWQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0gZWxzZSBpZiAoV0dfU0tJTiA9PT0gJ3ZlY3Rvci0yMDIyJykge1xuXHRcdGdsb2JhbE1ldGhvZHMucG9ydGxldElkID0gJ3AtYXNzb2NpYXRlZC1wYWdlcyc7XG5cdFx0Z2xvYmFsTWV0aG9kcy5kZUluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHQkYm9keS5maW5kKFBPUlRMRVRfQ0xBU1MpLnJlbW92ZSgpO1xuXHRcdH07XG5cdH1cbn07XG5cbmV4cG9ydCB7Z2xvYmFsTWV0aG9kcywgaW5pdEdsb2JhbE1ldGhvZHN9O1xuIiwgImltcG9ydCB7Z2V0Vmlld2VyLCByZXNldEFsbFZpZXdlcn0gZnJvbSAnLi9tb2R1bGVzL3ZpZXdlcic7XG5pbXBvcnQge2dsb2JhbE1ldGhvZHMsIGluaXRHbG9iYWxNZXRob2RzfSBmcm9tICcuL21vZHVsZXMvaW5pdEdsb2JhbE1ldGhvZHMnO1xuaW1wb3J0IHtmaWx0ZXJBbHRlcmVkQ2xpY2tzfSBmcm9tICdleHQuZ2FkZ2V0LkZpbHRlckFsdGVyZWRDbGlja3MnO1xuaW1wb3J0IHtnZW5lcmF0ZVBvcnRsZXRMaW5rfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVBvcnRsZXRMaW5rJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyJztcblxubGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKCgkY29udGVudCk6IHZvaWQgPT4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkY29udGVudC5wYXJlbnRzKCdib2R5Jyk7XG5cblx0aWYgKCFpc0luaXQpIHtcblx0XHRpc0luaXQgPSB0cnVlO1xuXHRcdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuYXBwZW5kVG8oJGJvZHkpO1xuXHR9XG5cblx0cmVzZXRBbGxWaWV3ZXIoKTtcblxuXHRpbml0R2xvYmFsTWV0aG9kcygkYm9keSk7XG5cdGdsb2JhbE1ldGhvZHMuZGVJbml0KCk7XG5cdGdsb2JhbE1ldGhvZHMuaW5pdCgpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCcubXctaW5kaWNhdG9yW2lkXj1tdy1pbmRpY2F0b3Itbm90ZVRBLV0nKSkge1xuXHRcdGNvbnN0IGhhc2g6IHN0cmluZyA9IGVsZW1lbnQuaWQucmVwbGFjZSgvXm13LWluZGljYXRvci1ub3RlVEEtLywgJycpO1xuXG5cdFx0bGV0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChnbG9iYWxNZXRob2RzLnBvcnRsZXRJZCkge1xuXHRcdFx0JGVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0JGVsZW1lbnQgPSBnZW5lcmF0ZVBvcnRsZXRMaW5rKGhhc2gpID8/ICRlbGVtZW50O1xuXHRcdH1cblxuXHRcdCRlbGVtZW50Lm9uKFxuXHRcdFx0J2NsaWNrJyxcblx0XHRcdGZpbHRlckFsdGVyZWRDbGlja3MoKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRnZXRWaWV3ZXIoJGJvZHksIGhhc2gpLm9wZW4oKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxufSk7XG4iLCAiaW1wb3J0IHtQT1JUTEVUX0NMQVNTfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dsb2JhbE1ldGhvZHN9IGZyb20gJy4uL2luaXRHbG9iYWxNZXRob2RzJztcblxuY29uc3QgZ2VuZXJhdGVQb3J0bGV0TGluayA9IChoYXNoOiBzdHJpbmcpOiBKUXVlcnkgfCB1bmRlZmluZWQgPT4ge1xuXHRjb25zdCB7cG9ydGxldElkfSA9IGdsb2JhbE1ldGhvZHM7XG5cdGlmICghcG9ydGxldElkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgJ+axiS/mvKInLCBgY2Etbm90ZVRBLSR7aGFzaH1gKTtcblx0aWYgKCFwb3J0bGV0TGluaykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuXHRcdGhlaWdodDogJzg1JScsXG5cdFx0cGFkZGluZzogJzFweCAzcHgnLFxuXHR9O1xuXG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5ID0gJChwb3J0bGV0TGluaykuYWRkQ2xhc3MoUE9SVExFVF9DTEFTUyk7XG5cdCRwb3J0bGV0TGlua1xuXHRcdC5maW5kKCdhJylcblx0XHQuZW1wdHkoKVxuXHRcdC5hcHBlbmQoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHQuLi5zdHlsZSxcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZDNlM2Y0Jyxcblx0XHRcdFx0XHRcdGNvbG9yOiAnIzAwMCcsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsn5rGJJ31cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHQuLi5zdHlsZSxcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZTllOWU5Jyxcblx0XHRcdFx0XHRcdGNvbG9yOiAnIzQzNDM0MycsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsn5ryiJ31cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblxuXHRyZXR1cm4gJHBvcnRsZXRMaW5rO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVBvcnRsZXRMaW5rfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQWxCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxvQkFBQSxHQUFtQkYsa0JBQUFHLFVBQVM7TUFDM0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTTCxrQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxRQUFBLEdBQU9OLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7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RUFBQTtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFwaVJldHJ5RmFpbEVycm9yIiwgImxvY2FsaXplIiwgImVuIiwgIkxvYWRpbmciLCAiVGl0bGUiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkVycm9yIiwgImVycm9ycyIsICJjb25zdHJ1Y3RvciIsICJjb25jYXQiLCAibGVuZ3RoIiwgIm5hbWUiLCAidG9KUXVlcnkiLCAiZXJyb3JDb3VudCIsICJlbGVtZW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicmVwbGFjZSIsICJ0b1N0cmluZyIsICJyZWR1Y2UiLCAiZXJyb3IiLCAiaW5kZXgiLCAic3BsaXQiLCAiYWNjdW11bGF0b3IiLCAibGluZSIsICJudW1iZXIiLCAiJCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcnNlV2l0aFJldHJ5IiwgImFyZ3MiLCAiY291bnQiLCAicHJldmlvdXNFcnJvcnMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgImRlZmVycmVkIiwgInBhcnNlIiwgInRoZW4iLCAicmVzcG9uc2UiLCAicmVzb2x2ZSIsICJjYXRjaCIsICJjb25zb2xlIiwgInN0YWNrIiwgIlN0cmluZyIsICJuZXdSZXNwb25zZSIsICJuZXdFcnJvciIsICJwYXJzZVdpa2l0ZXh0IiwgIlBPUlRMRVRfQ0xBU1MiLCAiV0dfUEFHRV9OQU1FIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfU0tJTiIsICJXR19VU0VSX1ZBUklBTlQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFzc2VydCIsICJ2YWx1ZSIsICJ2YWx1ZU5hbWUiLCAidmlld2VyTWFwIiwgIk1hcCIsICJpbml0V2luZG93TWFuYWdlciIsICJPTyIsICJ1aSIsICJXaW5kb3dNYW5hZ2VyIiwgIndpbmRvd01hbmFnZXIiLCAiZ2V0Vmlld2VyIiwgIiRib2R5IiwgImhhc2giLCAiaGFzIiwgInN0b3JlZFZpZXdlciIsICIkdGFyZ2V0RWxlbWVudCIsICJmaW5kIiwgIk5vdGVUQVZpZXdlciIsICJQcm9jZXNzRGlhbG9nIiwgImRhdGFJc0xvYWRlZCIsICJleGVjdXRlUHJvbWlzZSIsICJtdXRhdGlvbk9ic2VydmVyIiwgIiRyZWFsQ29udGVudCIsICJsYXN0RXJyb3IiLCAibm90ZVRBUGFyc2VUZXh0IiwgInNpemUiLCAiTXV0YXRpb25PYnNlcnZlciIsICJ1cGRhdGVTaXplIiwgImJpbmQiLCAib2JzZXJ2ZSIsICJjaGlsZExpc3QiLCAic3VidHJlZSIsICJpbml0aWFsaXplIiwgInBhbmVsTGF5b3V0IiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgInBhZGRlZCIsICJhcHBlbmRUbyIsICIkZWxlbWVudCIsICJnZXRTZXR1cFByb2Nlc3MiLCAiZGF0YSIsICJuZXh0IiwgImRvRXhlY3V0ZVdyYXAiLCAiZXhlY3V0ZUFjdGlvbiIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImFjdGlvbiIsICJpc01haW5BY3Rpb24iLCAiZXhlY3V0ZSIsICJkZXN0cm95IiwgImRpc2Nvbm5lY3QiLCAiZ2V0Tm90ZVRBUGFyc2VUZXh0IiwgIiRub3RlVEF0aXRsZSIsICJhY3R1YWxUaXRsZSIsICJ3aWtpdGV4dCIsICJ0aXRsZURlZmVycmVkIiwgInRpdGxlQ29udiIsICJhdHRyIiwgInRpdGxlRGVzYyIsICJ0aXRsZSIsICJ2YXJpYW50IiwgInJlc3VsdEh0bWwiLCAiJG11bHRpVGl0bGUiLCAicGFyc2VIVE1MIiwgInRleHRWYXJpYW50IiwgInZhcmlhbnRUZXh0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiY2hpbGRyZW4iLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInRleHQiLCAidHJpbSIsICJ0ZXh0VmFyaWFudEFycmF5IiwgImVyciIsICJlIiwgImYiLCAidGl0bGVDb252ZXJ0ZWQiLCAibXVsdGlUaXRsZSIsICJfaSIsICJfT2JqZWN0JHZhbHVlcyIsICJPYmplY3QiLCAidmFsdWVzIiwgInZhcmlhbnRzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInZhcmlhbnRzTmFtZSIsICJtYXAiLCAiam9pbiIsICIkbm90ZVRBZ3JvdXBzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIiRub3RlVEFsb2NhbCIsICIkbm90ZVRBbG9jYWxzIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImxvY2FsRGVzYyIsICJsb2NhbENvbnYiLCAiZG9FeGVjdXRlIiwgImVtcHR5IiwgImFwcGVuZCIsICJwYXJzZWRIdG1sIiwgImh0bWwiLCAiYWRkQ2xhc3MiLCAibWFrZUNvbGxhcHNpYmxlIiwgInJlY292ZXJhYmxlIiwgImV4ZWN1dGVEZWZlcnJlZCIsICJhbHdheXMiLCAic3RhdGljIiwgImFjdGlvbnMiLCAibGFiZWwiLCAibXNnIiwgImZsYWdzIiwgInZpZXdlciIsICJhZGRXaW5kb3dzIiwgInNldCIsICJyZXNldEFsbFZpZXdlciIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJjbGVhciIsICJjbGVhcldpbmRvd3MiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImdsb2JhbE1ldGhvZHMiLCAiaW5pdCIsICJkZUluaXQiLCAicG9ydGxldElkIiwgImluaXRHbG9iYWxNZXRob2RzIiwgIiRub3RlVEFUYWIiLCAibm90ZVRBVGFiIiwgImlkIiwgImFmdGVyIiwgInV0aWwiLCAiaGlkZVBvcnRsZXQiLCAicmVtb3ZlIiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAiZ2VuZXJhdGVQb3J0bGV0TGluayIsICJwb3J0bGV0TGluayIsICJhZGRQb3J0bGV0TGluayIsICJzdHlsZSIsICJoZWlnaHQiLCAicGFkZGluZyIsICIkcG9ydGxldExpbmsiLCAiYmFja2dyb3VuZCIsICJjb2xvciIsICJpc0luaXQiLCAiaG9vayIsICJhZGQiLCAiJGNvbnRlbnQiLCAicGFyZW50cyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJfZ2VuZXJhdGVQb3J0bGV0TGluayIsICJoaWRlIiwgIm9uIiwgImZpbHRlckFsdGVyZWRDbGlja3MiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAib3BlbiJdCn0K
