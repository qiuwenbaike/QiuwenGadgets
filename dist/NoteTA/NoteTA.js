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
        this.$realContent.empty().html(parsedHtml);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3IudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Ob3RlVEEvb3B0aW9ucy5qc29uIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9hcGkudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3BhcnNlV2lraXRleHQudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy92aWV3ZXIudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL2Fzc2VydC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdFZpZXdNYXAudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pbml0R2xvYmFsTWV0aG9kcy50c3giLCAic3JjL05vdGVUQS9Ob3RlVEEudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVQb3J0bGV0TGluay50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNsYXNzIEFwaVJldHJ5RmFpbEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRwcml2YXRlIGVycm9yczogc3RyaW5nW107XG5cblx0Y29uc3RydWN0b3IoZXJyb3JzOiBzdHJpbmdbXSkge1xuXHRcdHN1cGVyKGBBcGkgY2FsbHMgZmFpbGVkICR7ZXJyb3JzLmxlbmd0aH0gdGltZShzKSBpbiBhIHJvdy5gKTtcblx0XHR0aGlzLm5hbWUgPSAnQXBpUmV0cnlGYWlsRXJyb3InO1xuXHRcdHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuXHR9XG5cblx0dG9KUXVlcnkoKTogSlF1ZXJ5IHtcblx0XHRjb25zdCBlcnJvckNvdW50OiBudW1iZXIgPSB0aGlzLmVycm9ycy5sZW5ndGg7XG5cdFx0Y29uc3QgZWxlbWVudCA9IChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cblx0XHRcdFx0PHA+e2dldE1lc3NhZ2UoJ0FwaVJldHJ5RmFpbEVycm9yJykucmVwbGFjZSgvXFwkMS9nLCBlcnJvckNvdW50LnRvU3RyaW5nKCkpfTwvcD5cblx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdHt0aGlzLmVycm9ycy5yZWR1Y2UoXG5cdFx0XHRcdFx0XHQoZXJyb3JzLCBlcnJvciwgaW5kZXgpID0+IFtcblx0XHRcdFx0XHRcdFx0Li4uZXJyb3JzLFxuXHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0e2Vycm9yXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVkdWNlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoYWNjdW11bGF0b3IsIGxpbmUsIG51bWJlcikgPT4gWy4uLmFjY3VtdWxhdG9yLCA8cCBrZXk9e251bWJlcn0+e2xpbmV9PC9wPl0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtdIGFzIFJlYWN0LlJlYWN0RWxlbWVudFtdXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L2xpPixcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRbXSBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXVxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvb2w+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXG5cdFx0cmV0dXJuICQoZWxlbWVudCkgYXMgSlF1ZXJ5O1xuXHR9XG59XG5cbmV4cG9ydCB7QXBpUmV0cnlGYWlsRXJyb3J9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBcGlSZXRyeUZhaWxFcnJvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcGkgY2FsbHMgZmFpbGVkICQxIHRpbWUocykgaW4gYSByb3cuIEVycm9yczogJyxcblx0XHRcdCd6aC1oYW5zJzogJ0FwaSDosIPnlKjov57nu63lpLHotKUgJDEg5qyh77yMJDEg5qyh6LCD55So55qE6ZSZ6K+v5YiG5Yir5Li677yaJyxcblx0XHRcdCd6aC1oYW50JzogJ0FwaSDoqr/nlKjpgKPnuozlpLHmlZcgJDEg5qyh77yMJDEg5qyh6Kq/55So55qE6Yyv6Kqk5YiG5Yil54K677yaJyxcblx0XHR9KSxcblx0XHRMb2FkaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yqg6L294oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOi8ieWFpeKApuKApicsXG5cdFx0fSksXG5cdFx0VGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90ZVRBJyxcblx0XHRcdCd6aC1oYW5zJzogJ+Wtl+ivjei9rOaNoicsXG5cdFx0XHQnemgtaGFudCc6ICflrZfoqZ7ovYnmj5snLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjEuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBOb3RlVEEvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxudHlwZSBBcGlQYXJzZSA9IG13LkFwaVsncGFyc2UnXTtcbnR5cGUgQXBpUGFyc2VQYXJhbWV0ZXJzID0gUGFyYW1ldGVyczxBcGlQYXJzZT47XG50eXBlIEFwaVBhcnNlUmVzcG9uc2UgPSBBd2FpdGVkPFJldHVyblR5cGU8QXBpUGFyc2U+PjtcbnR5cGUgQXBpUmVzcG9uc2UgPSBBcGlQYXJzZVJlc3BvbnNlIHwgQXBpUmV0cnlGYWlsRXJyb3I7XG5cbmNvbnN0IHBhcnNlV2l0aFJldHJ5ID0gKFxuXHRhcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMsXG5cdGNvdW50OiBudW1iZXIgPSAzLFxuXHRwcmV2aW91c0Vycm9yczogc3RyaW5nW10gPSBbXVxuKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiA9PiB7XG5cdGlmICghY291bnQpIHtcblx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXRyeUZhaWxFcnJvcj4oKS5yZWplY3QobmV3IEFwaVJldHJ5RmFpbEVycm9yKHByZXZpb3VzRXJyb3JzKSk7XG5cdH1cblxuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0dm9pZCBhcGlcblx0XHQucGFyc2UoLi4uYXJncylcblx0XHQudGhlbigocmVzcG9uc2U6IEFwaVBhcnNlUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yPzogRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG5cdFx0XHRpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnc3RhY2snIGluIGVycm9yKSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBlcnJvci5zdGFjaztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBTdHJpbmcoZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZVdpdGhSZXRyeShhcmdzLCAtLWNvdW50LCBwcmV2aW91c0Vycm9ycylcblx0XHRcdFx0LnRoZW4oKG5ld1Jlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShuZXdSZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgobmV3RXJyb3I/OiBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KG5ld0Vycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIGRlZmVycmVkO1xufTtcblxuY29uc3QgcGFyc2VXaWtpdGV4dCA9ICguLi5hcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+ID0+IHtcblx0cmV0dXJuIHBhcnNlV2l0aFJldHJ5KGFyZ3MpO1xufTtcblxuZXhwb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9O1xuIiwgImNvbnN0IFBPUlRMRVRfQ0xBU1M6IHN0cmluZyA9ICd4LW5vdGVUQS12aWV3ZXInO1xuXG5jb25zdCBXR19QQUdFX05BTUU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcbmNvbnN0IFdHX1NLSU46IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKTtcbmNvbnN0IFdHX1VTRVJfVkFSSUFOVDogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKTtcblxuZXhwb3J0IHtQT1JUTEVUX0NMQVNTLCBXR19QQUdFX05BTUUsIFdHX1NLSU4sIFdHX1VTRVJfVkFSSUFOVH07XG4iLCAiaW1wb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9IGZyb20gJy4vcGFyc2VXaWtpdGV4dCc7XG5pbXBvcnQge1dHX1BBR0VfTkFNRSwgV0dfVVNFUl9WQVJJQU5UfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7QXBpUmV0cnlGYWlsRXJyb3J9IGZyb20gJy4vdXRpbC9BcGlSZXRyeUZhaWxFcnJvcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnLi91dGlsL2Fzc2VydCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3ZpZXdlck1hcH0gZnJvbSAnLi9pbml0Vmlld01hcCc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBnZXRWaWV3ZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+LCBoYXNoOiBzdHJpbmcpOiB0eXBlb2Ygdmlld2VyID0+IHtcblx0aWYgKHZpZXdlck1hcC5oYXMoaGFzaCkpIHtcblx0XHRjb25zdCBzdG9yZWRWaWV3ZXIgPSB2aWV3ZXJNYXAuZ2V0KGhhc2gpO1xuXHRcdGFzc2VydChzdG9yZWRWaWV3ZXIsICd2aWV3ZXInKTtcblx0XHRyZXR1cm4gc3RvcmVkVmlld2VyO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldEVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYCNub3RlVEEtJHtoYXNofWApO1xuXHRpZiAoISR0YXJnZXRFbGVtZW50Lmxlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgZ2V0IEVsZW1lbnQgXCIjbm90ZVRBLSR7aGFzaH1cIi5gKTtcblx0fVxuXG5cdGNsYXNzIE5vdGVUQVZpZXdlciBleHRlbmRzIE9PLnVpLlByb2Nlc3NEaWFsb2cge1xuXHRcdHByaXZhdGUgZGF0YUlzTG9hZGVkOiBib29sZWFuO1xuXHRcdHByaXZhdGUgZXhlY3V0ZVByb21pc2U/OiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmRvRXhlY3V0ZT47XG5cdFx0cHJpdmF0ZSBtdXRhdGlvbk9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuXHRcdHByaXZhdGUgJHJlYWxDb250ZW50OiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSAkYm9keTogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXHRcdHByaXZhdGUgc3RhdGljIGxhc3RFcnJvcj86IE9PLnVpLkVycm9yO1xuXHRcdHByaXZhdGUgc3RhdGljIG5vdGVUQVBhcnNlVGV4dDogc3RyaW5nO1xuXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0c3VwZXIoe1xuXHRcdFx0XHRzaXplOiAnbGFyZ2VyJyxcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmRhdGFJc0xvYWRlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy4kcmVhbENvbnRlbnQgPSAkKDxkaXYgLz4pIGFzIEpRdWVyeTtcblxuXHRcdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy51cGRhdGVTaXplLmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy4kcmVhbENvbnRlbnQuZ2V0KDApIGFzIEhUTUxFbGVtZW50LCB7XG5cdFx0XHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRcdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdG92ZXJyaWRlIGluaXRpYWxpemUoKTogdGhpcyB7XG5cdFx0XHRzdXBlci5pbml0aWFsaXplKCk7XG5cblx0XHRcdGNvbnN0IHBhbmVsTGF5b3V0OiBPTy51aS5QYW5lbExheW91dCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmFwcGVuZFRvKHBhbmVsTGF5b3V0LiRlbGVtZW50KTtcblx0XHRcdHBhbmVsTGF5b3V0LiRlbGVtZW50LmFwcGVuZFRvKHRoaXMuJGJvZHkgYXMgSlF1ZXJ5KTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0b3ZlcnJpZGUgZ2V0U2V0dXBQcm9jZXNzKGRhdGE6IE9PLnVpLkRpYWxvZy5TZXR1cERhdGFNYXApOiBPTy51aS5Qcm9jZXNzIHtcblx0XHRcdHJldHVybiBzdXBlci5nZXRTZXR1cFByb2Nlc3MoZGF0YSkubmV4dCgoKSA9PiB7XG5cdFx0XHRcdHZvaWQgdGhpcy5kb0V4ZWN1dGVXcmFwKCk7XG5cdFx0XHRcdHZvaWQgdGhpcy5leGVjdXRlQWN0aW9uKCdtYWluJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRvdmVycmlkZSBnZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbj86IHN0cmluZyk6IE9PLnVpLlByb2Nlc3Mge1xuXHRcdFx0Y29uc3QgaXNNYWluQWN0aW9uOiBib29sZWFuID0gYWN0aW9uID09PSAnbWFpbic7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRzdXBlclxuXHRcdFx0XHRcdC5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbilcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNzAzMFxuXHRcdFx0XHRcdC5uZXh0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChpc01haW5BY3Rpb24pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuZG9FeGVjdXRlV3JhcCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Lm5leHQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGlzTWFpbkFjdGlvbiAmJiBOb3RlVEFWaWV3ZXIubGFzdEVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBOb3RlVEFWaWV3ZXIubGFzdEVycm9yO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHN1cGVyLmdldEFjdGlvblByb2Nlc3MoYWN0aW9uKS5leGVjdXRlKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0ZGVzdHJveSgpOiB2b2lkIHtcblx0XHRcdHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0fVxuXG5cdFx0c3RhdGljIGdldE5vdGVUQVBhcnNlVGV4dCgpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+IHtcblx0XHRcdGlmIChOb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0KSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkPHN0cmluZz4oKS5yZXNvbHZlKE5vdGVUQVZpZXdlci5ub3RlVEFQYXJzZVRleHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCAkbm90ZVRBdGl0bGU6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtdGl0bGUnKTtcblx0XHRcdGNvbnN0IGFjdHVhbFRpdGxlOiBzdHJpbmcgPSBXR19QQUdFX05BTUUucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdFx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHRcdFx0Y29uc3QgdGl0bGVEZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0XHRcdGlmICgkbm90ZVRBdGl0bGUubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlQ29udjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJG5vdGVUQXRpdGxlLmF0dHIoJ2RhdGEtbm90ZXRhLWNvZGUnKTtcblx0XHRcdFx0YXNzZXJ0KHRpdGxlQ29udiwgJ3RpdGxlQ29udicpO1xuXG5cdFx0XHRcdGxldCB0aXRsZURlc2M6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRub3RlVEF0aXRsZS5hdHRyKCdkYXRhLW5vdGV0YS1kZXNjJyk7XG5cdFx0XHRcdGlmICh0aXRsZURlc2MpIHtcblx0XHRcdFx0XHR0aXRsZURlc2MgPSBg77yIJHt0aXRsZURlc2N977yJYDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aXRsZURlc2MgPSAnJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGA8c3BhbiBzdHlsZT1cImZsb2F0OnJpZ2h0XCI+e3tlZGl0fCR7YWN0dWFsVGl0bGV9fHNlY3Rpb249MH19PC9zcGFuPlxcbmA7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9ICc7IOacrOaWh+S9v+eUqFtbSGVscDrlrZfor43ovazmjaLlpITnkIZ85qCH6aKY5omL5bel6L2s5o2iXV1cXG4nO1xuXHRcdFx0XHR3aWtpdGV4dCArPSBgKiDovazmjaLmoIfpopjkuLrvvJote0R8JHt0aXRsZUNvbnZ9fS0ke3RpdGxlRGVzY31cXG5gO1xuXHRcdFx0XHR3aWtpdGV4dCArPSBgKiDlrp7pmYXmoIfpopjkuLrvvJote1J8JHthY3R1YWxUaXRsZX19Le+8m+W9k+WJjeaYvuekuuS4uu+8mi17fCR7dGl0bGVDb252fX0tXFxuYDtcblxuXHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFyc2VXaWtpdGV4dChge3tub3RlVEEvbXVsdGl0aXRsZXwke2FjdHVhbFRpdGxlfX19YCwge1xuXHRcdFx0XHRcdHRpdGxlOiBhY3R1YWxUaXRsZSxcblx0XHRcdFx0XHR2YXJpYW50OiAnemgnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKChyZXN1bHRIdG1sKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCAkbXVsdGlUaXRsZTogSlF1ZXJ5ID0gJCgkLnBhcnNlSFRNTChyZXN1bHRIdG1sIGFzIEFwaVBhcnNlUmVzcG9uc2UpKS5maW5kKFxuXHRcdFx0XHRcdFx0XHQnLm5vdGVUQS1tdWx0aXRpdGxlJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGlmICgkbXVsdGlUaXRsZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paHW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzmoIfpopjlj6/og73nu4/ov4fovazmjaJdXVxcbiog6L2s5o2i5qCH6aKY5Li677yaJztcblxuXHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0VmFyaWFudDogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRUZXh0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudWxsPiA9IHt9O1xuXG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbXVsdGlUaXRsZS5jaGlsZHJlbigpKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtbXVsdGl0aXRsZS12YXJpYW50Jyk7XG5cdFx0XHRcdFx0XHRcdFx0YXNzZXJ0KHZhcmlhbnQsICd2YXJpYW50Jyk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0OiBzdHJpbmcgPSAkZWxlbWVudC50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRUZXh0W3ZhcmlhbnRdID0gdGV4dDtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHRWYXJpYW50QXJyYXk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gdGV4dFZhcmlhbnRbdGV4dF07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRleHRWYXJpYW50QXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHRWYXJpYW50QXJyYXlbdGV4dFZhcmlhbnRBcnJheS5sZW5ndGhdID0gdmFyaWFudDtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dFZhcmlhbnRbdGV4dF0gPSBbdmFyaWFudF07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgdGl0bGVDb252ZXJ0ZWQgPSB2YXJpYW50VGV4dFtXR19VU0VSX1ZBUklBTlQgYXMgc3RyaW5nXTtcblxuXHRcdFx0XHRcdFx0XHRjb25zdCBtdWx0aVRpdGxlOiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHRleHQgb2YgT2JqZWN0LnZhbHVlcyh2YXJpYW50VGV4dCkpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gdGV4dFZhcmlhbnRbdGV4dF07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCF2YXJpYW50cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50VGV4dFt2YXJpYW50XSA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudHNOYW1lOiBzdHJpbmcgPSB2YXJpYW50c1xuXHRcdFx0XHRcdFx0XHRcdFx0Lm1hcCgodmFyaWFudDogc3RyaW5nKTogc3RyaW5nID0+IGAte1J8e3tNZWRpYVdpa2k6VmFyaWFudG5hbWUtJHt2YXJpYW50fX19fS1gKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmpvaW4oJ+OAgScpO1xuXHRcdFx0XHRcdFx0XHRcdG11bHRpVGl0bGVbbXVsdGlUaXRsZS5sZW5ndGhdID0gYCR7dmFyaWFudHNOYW1lfe+8mi17Unwke3RleHR9fS1gO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gbXVsdGlUaXRsZS5qb2luKCfvvJsnKTtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYFxcbiog5a6e6ZmF5qCH6aKY5Li677yaLXtSfCR7YWN0dWFsVGl0bGV9fS3vvJvlvZPliY3mmL7npLrkuLrvvJote1J8JHt0aXRsZUNvbnZlcnRlZH19LVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblxuXHRcdFx0dGl0bGVEZWZlcnJlZFxuXHRcdFx0XHQudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWdyb3VwczogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS1ncm91cCA+ICpbZGF0YS1ub3RldGEtZ3JvdXBdJyk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRub3RlVEFncm91cHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0c3dpdGNoICgkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cC1zb3VyY2UnKSkge1xuXHRcdFx0XHRcdFx0XHRjYXNlICd0ZW1wbGF0ZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYHt7Q0dyb3VwLyR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ21vZHVsZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYHt7I2ludm9rZTpDR3JvdXBWaWV3ZXJ8ZGlhbG9nfCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ25vbmUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA7IOacrOaWh+S9v+eUqOeahOWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ3lsJrmnKrliJvlu7pcXG5gO1xuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIHt7ZWRpdHxNb2R1bGU6Q0dyb3VwLyR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX185Yib5bu65YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAnX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgOyDmnKrnn6XlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCd5p2l5rqQ4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cC1zb3VyY2UnKX3igJ1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0ICRub3RlVEFsb2NhbDogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS1sb2NhbCcpO1xuXHRcdFx0XHRcdGlmICgkbm90ZVRBbG9jYWwubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodFwiPnt7ZWRpdHwke2FjdHVhbFRpdGxlfXxzZWN0aW9uPTB9fTwvc3Bhbj5cXG5gO1xuXHRcdFx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paH5L2/55SoW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzlhajmlofmiYvlt6XovazmjaJdXVxcbic7XG5cblx0XHRcdFx0XHRcdGNvbnN0ICRub3RlVEFsb2NhbHMgPSAkbm90ZVRBbG9jYWwuY2hpbGRyZW4oJypbZGF0YS1ub3RldGEtY29kZV0nKTtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbm90ZVRBbG9jYWxzKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRcdGxldCBsb2NhbERlc2M6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWRlc2MnKTtcblx0XHRcdFx0XHRcdFx0aWYgKGxvY2FsRGVzYykge1xuXHRcdFx0XHRcdFx0XHRcdGxvY2FsRGVzYyA9IGDvvIgke2xvY2FsRGVzY33vvIlgO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGxvY2FsRGVzYyA9ICcnO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbG9jYWxDb252OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1jb2RlJyk7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIC17RHwke2xvY2FsQ29udn19LSR7bG9jYWxEZXNjfeW9k+WJjeaYvuekuuS4uu+8mi17JHtsb2NhbENvbnZ9fS1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICd7e25vdGVUQS9mb290ZXJ9fVxcbic7XG5cblx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0ID0gd2lraXRleHQ7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKHdpa2l0ZXh0KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fVxuXG5cdFx0ZG9FeGVjdXRlKCkge1xuXHRcdFx0aWYgKHRoaXMuZGF0YUlzTG9hZGVkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpLnJlc29sdmUoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuZW1wdHkoKS5hcHBlbmQoPHA+e2dldE1lc3NhZ2UoJ0xvYWRpbmcnKX08L3A+KTtcblxuXHRcdFx0cmV0dXJuIE5vdGVUQVZpZXdlci5nZXROb3RlVEFQYXJzZVRleHQoKVxuXHRcdFx0XHQudGhlbigod2lraXRleHQ6IEFwaVJlc3BvbnNlKSA9PlxuXHRcdFx0XHRcdHBhcnNlV2lraXRleHQod2lraXRleHQgYXMgQXBpUGFyc2VSZXNwb25zZSwge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdUZW1wbGF0ZTpDR3JvdXAvLScsXG5cdFx0XHRcdFx0XHR2YXJpYW50OiBXR19VU0VSX1ZBUklBTlQgYXMgc3RyaW5nLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdFx0LnRoZW4oKHBhcnNlZEh0bWw6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuZW1wdHkoKS5odG1sKHBhcnNlZEh0bWwgYXMgQXBpUGFyc2VSZXNwb25zZSk7XG5cdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuZmluZCgnLm13LWNvbGxhcHNpYmxlJykgYXMgSlF1ZXJ5ICYge21ha2VDb2xsYXBzaWJsZTogKCkgPT4gSlF1ZXJ5fVxuXHRcdFx0XHRcdCkubWFrZUNvbGxhcHNpYmxlKCk7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVTaXplKCk7XG5cblx0XHRcdFx0XHR0aGlzLmRhdGFJc0xvYWRlZCA9IHRydWU7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yIHwgRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBBcGlSZXRyeUZhaWxFcnJvcikge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE9PLnVpLkVycm9yKGVycm9yLnRvSlF1ZXJ5KCksIHtcblx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE9PLnVpLkVycm9yKFN0cmluZyhlcnJvciksIHtcblx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRkb0V4ZWN1dGVXcmFwKCkge1xuXHRcdFx0aWYgKHRoaXMuZXhlY3V0ZVByb21pc2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmV4ZWN1dGVQcm9taXNlID0gdGhpcy5kb0V4ZWN1dGUoKTtcblx0XHRcdFx0ZGVsZXRlIE5vdGVUQVZpZXdlci5sYXN0RXJyb3I7XG5cblx0XHRcdFx0Y29uc3QgZXhlY3V0ZURlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblx0XHRcdFx0dm9pZCAodGhpcy5leGVjdXRlUHJvbWlzZSBhcyBKUXVlcnkuUHJvbWlzZTxBcGlSZXNwb25zZT4pXG5cdFx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCBleGVjdXRlRGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yOiBFcnJvciB8IE9PLnVpLkVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBPTy51aS5FcnJvcikge1xuXHRcdFx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubGFzdEVycm9yID0gZXJyb3I7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2b2lkIGV4ZWN1dGVEZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFsd2F5cygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5leGVjdXRlUHJvbWlzZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gZXhlY3V0ZURlZmVycmVkO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cdFx0XHR2b2lkICh0aGlzLmV4ZWN1dGVQcm9taXNlIGFzIEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPilcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEVycm9yIHwgT08udWkuRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBPTy51aS5FcnJvcikge1xuXHRcdFx0XHRcdFx0Tm90ZVRBVmlld2VyLmxhc3RFcnJvciA9IGVycm9yO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5leGVjdXRlUHJvbWlzZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9XG5cdH1cblxuXHROb3RlVEFWaWV3ZXIuc3RhdGljID0ge1xuXHRcdC4uLk9PLnVpLlByb2Nlc3NEaWFsb2cuc3RhdGljLFxuXHR9O1xuXHROb3RlVEFWaWV3ZXIuc3RhdGljLm5hbWUgPSBgTm90ZVRBTG9hZGVyLSR7aGFzaH1gO1xuXHROb3RlVEFWaWV3ZXIuc3RhdGljLnRpdGxlID0gZ2V0TWVzc2FnZSgnVGl0bGUnKTtcblx0Tm90ZVRBVmlld2VyLnN0YXRpYy5hY3Rpb25zID0gW1xuXHRcdHtcblx0XHRcdGxhYmVsOiBtdy5tc2coJ29vdWktZGlhbG9nLXByb2Nlc3MtZGlzbWlzcycpLFxuXHRcdFx0ZmxhZ3M6ICdzYWZlJyxcblx0XHR9LFxuXHRdO1xuXG5cdGNvbnN0IHZpZXdlcjogTm90ZVRBVmlld2VyID0gbmV3IE5vdGVUQVZpZXdlcigpO1xuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW3ZpZXdlcl0pO1xuXHR2aWV3ZXJNYXAuc2V0KGhhc2gsIHZpZXdlcik7XG5cblx0cmV0dXJuIHZpZXdlcjtcbn07XG5cbmNvbnN0IHJlc2V0QWxsVmlld2VyID0gKCk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IHZpZXdlciBvZiB2aWV3ZXJNYXAudmFsdWVzKCkpIHtcblx0XHR2aWV3ZXIuZGVzdHJveSgpO1xuXHR9XG5cdHZpZXdlck1hcC5jbGVhcigpO1xuXHR2b2lkIHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG59O1xuXG5leHBvcnQge2dldFZpZXdlciwgcmVzZXRBbGxWaWV3ZXJ9O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5mdW5jdGlvbiBhc3NlcnQ8VD4odmFsdWU6IFQgfCB1bmRlZmluZWQsIHZhbHVlTmFtZTogc3RyaW5nKTogYXNzZXJ0cyB2YWx1ZSB7XG5cdGlmICghdmFsdWUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEFzc2VydCBGYWlsLCAke3ZhbHVlTmFtZX0gPT0gZmFsc2UuYCk7XG5cdH1cbn1cblxuZXhwb3J0IHthc3NlcnR9O1xuIiwgImltcG9ydCB7dHlwZSBnZXRWaWV3ZXJ9IGZyb20gJy4vdmlld2VyJztcblxuY29uc3Qgdmlld2VyTWFwID0gbmV3IE1hcDxzdHJpbmcsIFJldHVyblR5cGU8dHlwZW9mIGdldFZpZXdlcj4+KCk7XG5cbmV4cG9ydCB7dmlld2VyTWFwfTtcbiIsICJjb25zdCBpbml0V2luZG93TWFuYWdlciA9ICgpOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0+IHtcblx0cmV0dXJuIG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG59O1xuXG5jb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gaW5pdFdpbmRvd01hbmFnZXIoKTtcblxuZXhwb3J0IHt3aW5kb3dNYW5hZ2VyfTtcbiIsICJpbXBvcnQge1BPUlRMRVRfQ0xBU1MsIFdHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG5jb25zdCBnbG9iYWxNZXRob2RzOiB7XG5cdGluaXQoKTogdm9pZDtcblx0ZGVJbml0KCk6IHZvaWQ7XG5cdHBvcnRsZXRJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xufSA9IHtcblx0aW5pdCgpIHtcblx0XHQvKiBmYWtlICovXG5cdH0sXG5cdGRlSW5pdCgpIHtcblx0XHQvKiBmYWtlICovXG5cdH0sXG5cdHBvcnRsZXRJZDogdW5kZWZpbmVkLFxufTtcblxuY29uc3QgaW5pdEdsb2JhbE1ldGhvZHMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmIChXR19TS0lOID09PSAndmVjdG9yJykge1xuXHRcdGdsb2JhbE1ldGhvZHMucG9ydGxldElkID0gJ3Atbm90ZVRBJztcblx0XHRsZXQgJG5vdGVUQVRhYjogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXHRcdGdsb2JhbE1ldGhvZHMuaW5pdCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGlmICgkbm90ZVRBVGFiKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vLy8vLy8vLy8vLy8vLy8vLy9cblx0XHRcdC8qKlxuXHRcdFx0ICogQHRvZG8gcmVwbGFjZSB3aXRoIGBtdy51dGlsLmFkZFBvcnRsZXRgIGFmdGVyIHVwZ3JhZGUgdG8gTWVkaWFXaWtpIDEuNDErXG5cdFx0XHQgKiBAZXhhbXBsZVxuXHRcdFx0ICogY29uc3Qgbm90ZVRBVGFiOiBIVE1MRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXQoUE9SVExFVF9JRCk7XG5cdFx0XHQgKiBpZiAoIW5vdGVUQVRhYikge1xuXHRcdFx0ICogICAgIHJldHVybjtcblx0XHRcdCAqIH1cblx0XHRcdCAqICRub3RlVEFUYWIgPSAkKG5vdGVUQVRhYik7XG5cdFx0XHQgKiAkbm90ZVRBVGFiLnJlbW92ZUNsYXNzKGBtdy1wb3J0bGV0LSR7UE9SVExFVF9JRH1gKS5hZGRDbGFzcyhbYG13LXBvcnRsZXQtJHtQT1JUTEVUX0lELnJlcGxhY2UoJ3AtJywgJycpfWAsICd2ZWN0b3ItbWVudS10YWJzJ10pO1xuXHRcdFx0ICovXG5cdFx0XHRjb25zdCBub3RlVEFUYWIgPSAoXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9e1sndmVjdG9yLW1lbnUnLCAndmVjdG9yLW1lbnUtdGFicycsICd2ZWN0b3ItbWVudS10YWJzLWxlZ2FjeSddfVxuXHRcdFx0XHRcdGlkPXtnbG9iYWxNZXRob2RzLnBvcnRsZXRJZH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8dWwgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdFx0Ly8vLy8vLy8vLy8vLy8vLy8vL1xuXHRcdFx0JG5vdGVUQVRhYiA9ICQobm90ZVRBVGFiKSBhcyBKUXVlcnk7XG5cdFx0XHQkYm9keS5maW5kKCcjcC12YXJpYW50cycpLmFmdGVyKCRub3RlVEFUYWIpO1xuXHRcdH07XG5cdFx0Z2xvYmFsTWV0aG9kcy5kZUluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoISRub3RlVEFUYWIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0JG5vdGVUQVRhYi5maW5kKCd1bCcpLmVtcHR5KCk7XG5cdFx0XHRjb25zdCB7cG9ydGxldElkfSA9IGdsb2JhbE1ldGhvZHM7XG5cdFx0XHRpZiAocG9ydGxldElkKSB7XG5cdFx0XHRcdG13LnV0aWwuaGlkZVBvcnRsZXQocG9ydGxldElkKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9IGVsc2UgaWYgKFdHX1NLSU4gPT09ICd2ZWN0b3ItMjAyMicpIHtcblx0XHRnbG9iYWxNZXRob2RzLnBvcnRsZXRJZCA9ICdwLWFzc29jaWF0ZWQtcGFnZXMnO1xuXHRcdGdsb2JhbE1ldGhvZHMuZGVJbml0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0JGJvZHkuZmluZChQT1JUTEVUX0NMQVNTKS5yZW1vdmUoKTtcblx0XHR9O1xuXHR9XG59O1xuXG5leHBvcnQge2dsb2JhbE1ldGhvZHMsIGluaXRHbG9iYWxNZXRob2RzfTtcbiIsICJpbXBvcnQge2dldFZpZXdlciwgcmVzZXRBbGxWaWV3ZXJ9IGZyb20gJy4vbW9kdWxlcy92aWV3ZXInO1xuaW1wb3J0IHtnbG9iYWxNZXRob2RzLCBpbml0R2xvYmFsTWV0aG9kc30gZnJvbSAnLi9tb2R1bGVzL2luaXRHbG9iYWxNZXRob2RzJztcbmltcG9ydCB7ZmlsdGVyQWx0ZXJlZENsaWNrc30gZnJvbSAnZXh0LmdhZGdldC5GaWx0ZXJBbHRlcmVkQ2xpY2tzJztcbmltcG9ydCB7Z2VuZXJhdGVQb3J0bGV0TGlua30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVQb3J0bGV0TGluayc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlcic7XG5cbmxldCBpc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCgoJGNvbnRlbnQpOiB2b2lkID0+IHtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJGNvbnRlbnQucGFyZW50cygnYm9keScpO1xuXG5cdGlmICghaXNJbml0KSB7XG5cdFx0aXNJbml0ID0gdHJ1ZTtcblx0XHR3aW5kb3dNYW5hZ2VyLiRlbGVtZW50LmFwcGVuZFRvKCRib2R5KTtcblx0fVxuXG5cdHJlc2V0QWxsVmlld2VyKCk7XG5cblx0aW5pdEdsb2JhbE1ldGhvZHMoJGJvZHkpO1xuXHRnbG9iYWxNZXRob2RzLmRlSW5pdCgpO1xuXHRnbG9iYWxNZXRob2RzLmluaXQoKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZCgnLm13LWluZGljYXRvcltpZF49bXctaW5kaWNhdG9yLW5vdGVUQS1dJykpIHtcblx0XHRjb25zdCBoYXNoOiBzdHJpbmcgPSBlbGVtZW50LmlkLnJlcGxhY2UoL15tdy1pbmRpY2F0b3Itbm90ZVRBLS8sICcnKTtcblxuXHRcdGxldCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRpZiAoZ2xvYmFsTWV0aG9kcy5wb3J0bGV0SWQpIHtcblx0XHRcdCRlbGVtZW50LmhpZGUoKTtcblx0XHRcdCRlbGVtZW50ID0gZ2VuZXJhdGVQb3J0bGV0TGluayhoYXNoKSA/PyAkZWxlbWVudDtcblx0XHR9XG5cblx0XHQkZWxlbWVudC5vbihcblx0XHRcdCdjbGljaycsXG5cdFx0XHRmaWx0ZXJBbHRlcmVkQ2xpY2tzKChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Z2V0Vmlld2VyKCRib2R5LCBoYXNoKS5vcGVuKCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cbn0pO1xuIiwgImltcG9ydCB7UE9SVExFVF9DTEFTU30gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnbG9iYWxNZXRob2RzfSBmcm9tICcuLi9pbml0R2xvYmFsTWV0aG9kcyc7XG5cbmNvbnN0IGdlbmVyYXRlUG9ydGxldExpbmsgPSAoaGFzaDogc3RyaW5nKTogSlF1ZXJ5IHwgdW5kZWZpbmVkID0+IHtcblx0Y29uc3Qge3BvcnRsZXRJZH0gPSBnbG9iYWxNZXRob2RzO1xuXHRpZiAoIXBvcnRsZXRJZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRMaW5rOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICfmsYkv5ryiJywgYGNhLW5vdGVUQS0ke2hhc2h9YCk7XG5cdGlmICghcG9ydGxldExpbmspIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcblx0XHRoZWlnaHQ6ICc4NSUnLFxuXHRcdHBhZGRpbmc6ICcxcHggM3B4Jyxcblx0fTtcblxuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRjb25zdCAkcG9ydGxldExpbms6IEpRdWVyeSA9ICQocG9ydGxldExpbmspLmFkZENsYXNzKFBPUlRMRVRfQ0xBU1MpO1xuXHQkcG9ydGxldExpbmtcblx0XHQuZmluZCgnYScpXG5cdFx0LmVtcHR5KClcblx0XHQuYXBwZW5kKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Li4uc3R5bGUsXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2QzZTNmNCcsXG5cdFx0XHRcdFx0XHRjb2xvcjogJyMwMDAnLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7J+axiSd9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Li4uc3R5bGUsXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2U5ZTllOScsXG5cdFx0XHRcdFx0XHRjb2xvcjogJyM0MzQzNDMnLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7J+a8oid9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cblx0cmV0dXJuICRwb3J0bGV0TGluaztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVQb3J0bGV0TGlua307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0FsQixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsb0JBQUEsR0FBbUJGLGtCQUFBRyxVQUFTO01BQzNCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU0wsa0JBQUFHLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsUUFBQSxHQUFPTixrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1HLGVBQWVOLGdCQUFnQjtBQUVyQyxJQUFNTyxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRHZCQSxJQUFNUCxvQkFBTixjQUFnQ1EsTUFBTTtFQUM3QkM7RUFFUkMsWUFBWUQsUUFBa0I7QUFDN0IsVUFBQSxvQkFBQUUsT0FBMEJGLE9BQU9HLFFBQU0sb0JBQUEsQ0FBb0I7QUFDM0QsU0FBS0MsT0FBTztBQUNaLFNBQUtKLFNBQVNBO0VBQ2Y7RUFFQUssV0FBbUI7QUFDbEIsVUFBTUMsYUFBcUIsS0FBS04sT0FBT0c7QUFDdkMsVUFBTUksVUFDTHJCLG1DQUFBc0IsUUFBQUMsY0FBQyxPQUFBO01BQUlDLFdBQVU7SUFBQSxHQUNkeEIsbUNBQUFzQixRQUFBQyxjQUFDLEtBQUEsTUFBR1osV0FBVyxtQkFBbUIsRUFBRWMsUUFBUSxRQUFRTCxXQUFXTSxTQUFTLENBQUMsQ0FBRSxHQUMzRTFCLG1DQUFBc0IsUUFBQUMsY0FBQyxNQUFBLE1BQ0MsS0FBS1QsT0FBT2EsT0FDWixDQUFDYixRQUFRYyxPQUFPQyxVQUFVLENBQ3pCLEdBQUdmLFFBQ0hkLG1DQUFBc0IsUUFBQUMsY0FBQyxNQUFBO01BQUdYLEtBQUtpQjtJQUFBLEdBQ1BELE1BQ0NFLE1BQU0sSUFBSSxFQUNWSCxPQUNBLENBQUNJLGFBQWFDLE1BQU1DLFdBQVcsQ0FBQyxHQUFHRixhQUFhL0IsbUNBQUFzQixRQUFBQyxjQUFDLEtBQUE7TUFBRVgsS0FBS3FCO0lBQUEsR0FBU0QsSUFBSyxDQUFJLEdBQzFFLENBQUEsQ0FDRCxDQUNGLENBQUEsR0FFRCxDQUFBLENBQ0QsQ0FDRCxDQUNEO0FBR0QsV0FBT0UsRUFBRWIsT0FBTztFQUNqQjtBQUNEOztBRXJDQyxJQUFBYyxVQUFXOztBQ0FaLElBQUFDLHFCQUF3QmxDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTW1DLE9BQUEsR0FBY0QsbUJBQUFFLFdBQUEsVUFBQXRCLE9BQTRCbUIsT0FBTyxDQUFFOztBQ0t6RCxJQUFNSSxpQkFBaUJBLENBQ3RCQyxNQUNBQyxRQUFnQixHQUNoQkMsaUJBQTJCLENBQUEsTUFDTztBQUNsQyxNQUFJLENBQUNELE9BQU87QUFDWCxXQUFPUCxFQUFFUyxTQUE0QixFQUFFQyxPQUFPLElBQUl2QyxrQkFBa0JxQyxjQUFjLENBQUM7RUFDcEY7QUFFQSxRQUFNRyxXQUFXWCxFQUFFUyxTQUFzQjtBQUV6QyxPQUFLTixJQUNIUyxNQUFNLEdBQUdOLElBQUksRUFDYk8sS0FBTUMsY0FBcUM7QUFDM0MsU0FBS0gsU0FBU0ksUUFBUUQsUUFBUTtFQUMvQixDQUFDLEVBQ0FFLE1BQU90QixXQUFpQztBQUN4Q3VCLFlBQVF2QixNQUFNQSxLQUFLO0FBRW5CLFFBQUlBLFNBQVMsT0FBT0EsVUFBVSxZQUFZLFdBQVdBLE9BQU87QUFDM0RjLHFCQUFlQSxlQUFlekIsTUFBTSxJQUFJVyxNQUFNd0I7SUFDL0MsT0FBTztBQUNOVixxQkFBZUEsZUFBZXpCLE1BQU0sSUFBSW9DLE9BQU96QixLQUFLO0lBQ3JEO0FBRUFXLG1CQUFlQyxNQUFNLEVBQUVDLE9BQU9DLGNBQWMsRUFDMUNLLEtBQU1PLGlCQUFtQztBQUN6QyxXQUFLVCxTQUFTSSxRQUFRSyxXQUFXO0lBQ2xDLENBQUMsRUFDQUosTUFBT0ssY0FBb0M7QUFDM0MsV0FBS1YsU0FBU0QsT0FBT1csUUFBUTtJQUM5QixDQUFDO0VBQ0gsQ0FBQztBQUVGLFNBQU9WO0FBQ1I7QUFFQSxJQUFNVyxnQkFBZ0JBLElBQUloQixTQUEyRDtBQUNwRixTQUFPRCxlQUFlQyxJQUFJO0FBQzNCOztBQy9DQSxJQUFNaUIsZ0JBQXdCO0FBRTlCLElBQU1DLGVBQXVCQyxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7QUFDdkQsSUFBTUMsVUFBa0JILEdBQUdDLE9BQU9DLElBQUksTUFBTTtBQUM1QyxJQUFNRSxrQkFBaUNKLEdBQUdDLE9BQU9DLElBQUksZUFBZTs7QUNEcEUsSUFBQUcscUJBQWtCL0QsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDRmxCLFNBQVMrRCxPQUFVQyxPQUFzQkMsV0FBa0M7QUFDMUUsTUFBSSxDQUFDRCxPQUFPO0FBQ1gsVUFBTSxJQUFJckQsTUFBQSxnQkFBQUcsT0FBc0JtRCxXQUFTLFlBQUEsQ0FBWTtFQUN0RDtBQUNEOztBQ0hBLElBQU1DLFlBQVksb0JBQUlDLElBQTBDOztBQ0ZoRSxJQUFNQyxvQkFBb0JBLE1BQTJCO0FBQ3BELFNBQU8sSUFBSUMsR0FBR0MsR0FBR0MsY0FBYztBQUNoQztBQUVBLElBQU1DLGdCQUFxQ0osa0JBQWtCOztBSEs3RCxJQUFNSyxZQUFZQSxDQUFDQyxPQUFnQ0MsU0FBZ0M7QUFDbEYsTUFBSVQsVUFBVVUsSUFBSUQsSUFBSSxHQUFHO0FBQ3hCLFVBQU1FLGVBQWVYLFVBQVVQLElBQUlnQixJQUFJO0FBQ3ZDWixXQUFPYyxjQUFjLFFBQVE7QUFDN0IsV0FBT0E7RUFDUjtBQUVBLFFBQU1DLGlCQUF5QkosTUFBTUssS0FBQSxXQUFBakUsT0FBZ0I2RCxJQUFJLENBQUU7QUFDM0QsTUFBSSxDQUFDRyxlQUFlL0QsUUFBUTtBQUMzQixVQUFNLElBQUlKLE1BQUEsOEJBQUFHLE9BQW9DNkQsTUFBSSxJQUFBLENBQUk7RUFDdkQ7RUFFQSxNQUFNSyxxQkFBcUJYLEdBQUdDLEdBQUdXLGNBQWM7SUFDdENDO0lBQ0FDO0lBQ0FDO0lBQ0FDO0lBQ0FYO0lBQ1IsT0FBZVk7SUFDZixPQUFlQztJQUVSMUUsY0FBYztBQUNwQixZQUFNO1FBQ0wyRSxNQUFNO01BQ1AsQ0FBQztBQUVELFdBQUtOLGVBQWU7QUFDcEIsV0FBS0csZUFBZXJELEVBQUU4QixtQ0FBQTFDLFFBQUFDLGNBQUMsT0FBQSxJQUFJLENBQUU7QUFFN0IsV0FBSytELG1CQUFtQixJQUFJSyxpQkFBaUIsS0FBS0MsV0FBV0MsS0FBSyxJQUFJLENBQUM7QUFDdkUsV0FBS1AsaUJBQWlCUSxRQUFRLEtBQUtQLGFBQWExQixJQUFJLENBQUMsR0FBa0I7UUFDdEVrQyxXQUFXO1FBQ1hDLFNBQVM7TUFDVixDQUFDO0lBQ0Y7SUFFU0MsYUFBbUI7QUFDM0IsWUFBTUEsV0FBVztBQUVqQixZQUFNQyxjQUFpQyxJQUFJM0IsR0FBR0MsR0FBRzJCLFlBQVk7UUFDNURDLFVBQVU7UUFDVkMsUUFBUTtNQUNULENBQUM7QUFFRCxXQUFLZCxhQUFhZSxTQUFTSixZQUFZSyxRQUFRO0FBQy9DTCxrQkFBWUssU0FBU0QsU0FBUyxLQUFLMUIsS0FBZTtBQUVsRCxhQUFPO0lBQ1I7SUFFUzRCLGdCQUFnQkMsTUFBZ0Q7QUFDeEUsYUFBTyxNQUFNRCxnQkFBZ0JDLElBQUksRUFBRUMsS0FBSyxNQUFNO0FBQzdDLGFBQUssS0FBS0MsY0FBYztBQUN4QixhQUFLLEtBQUtDLGNBQWMsTUFBTTtNQUMvQixDQUFDO0lBQ0Y7SUFFU0MsaUJBQWlCQyxRQUFnQztBQUN6RCxZQUFNQyxlQUF3QkQsV0FBVztBQUN6QyxhQUNDLE1BQ0VELGlCQUFpQkMsTUFBTSxFQUV2QkosS0FBSyxNQUFNO0FBQ1gsWUFBSUssY0FBYztBQUNqQixpQkFBTyxLQUFLSixjQUFjO1FBQzNCO01BQ0QsQ0FBQyxFQUNBRCxLQUFLLE1BQU07QUFDWCxZQUFJSyxnQkFBZ0I3QixhQUFhTSxXQUFXO0FBQzNDLGlCQUFPTixhQUFhTTtRQUNyQjtBQUNBLGVBQU8sTUFBTXFCLGlCQUFpQkMsTUFBTSxFQUFFRSxRQUFRO01BQy9DLENBQUM7SUFFSjtJQUVBQyxVQUFnQjtBQUNmLFdBQUszQixpQkFBaUI0QixXQUFXO0lBQ2xDO0lBRUEsT0FBT0MscUJBQW1EO0FBQ3pELFVBQUlqQyxhQUFhTyxpQkFBaUI7QUFDakMsZUFBT3ZELEVBQUVTLFNBQWlCLEVBQUVNLFFBQVFpQyxhQUFhTyxlQUFlO01BQ2pFO0FBRUEsWUFBTTJCLGVBQXVCcEMsZUFBZUMsS0FBSyxlQUFlO0FBQ2hFLFlBQU1vQyxjQUFzQjNELGFBQWFqQyxRQUFRLE1BQU0sR0FBRztBQUMxRCxVQUFJNkYsV0FBbUI7QUFFdkIsWUFBTUMsZ0JBQWdCckYsRUFBRVMsU0FBc0I7QUFFOUMsVUFBSXlFLGFBQWFuRyxRQUFRO0FBQ3hCLGNBQU11RyxZQUFnQ0osYUFBYUssS0FBSyxrQkFBa0I7QUFDMUV4RCxlQUFPdUQsV0FBVyxXQUFXO0FBRTdCLFlBQUlFLFlBQWdDTixhQUFhSyxLQUFLLGtCQUFrQjtBQUN4RSxZQUFJQyxXQUFXO0FBQ2RBLHNCQUFBLElBQUExRyxPQUFnQjBHLFdBQVMsR0FBQTtRQUMxQixPQUFPO0FBQ05BLHNCQUFZO1FBQ2I7QUFFQUosb0JBQUEsb0NBQUF0RyxPQUFnRHFHLGFBQVcsdUJBQUE7QUFDM0RDLG9CQUFZO0FBQ1pBLG9CQUFBLGVBQUF0RyxPQUEyQndHLFdBQVMsSUFBQSxFQUFBeEcsT0FBSzBHLFdBQVMsSUFBQTtBQUNsREosb0JBQUEsZUFBQXRHLE9BQTJCcUcsYUFBVyxjQUFBLEVBQUFyRyxPQUFld0csV0FBUyxNQUFBO0FBRTlELGFBQUtELGNBQWN0RSxRQUFRO01BQzVCLE9BQU87QUFDTk8sc0JBQUEsdUJBQUF4QyxPQUFxQ3FHLGFBQVcsSUFBQSxHQUFNO1VBQ3JETSxPQUFPTjtVQUNQTyxTQUFTO1FBQ1YsQ0FBQyxFQUNDN0UsS0FBTThFLGdCQUFxQjtBQUMzQixnQkFBTUMsY0FBc0I1RixFQUFFQSxFQUFFNkYsVUFBVUYsVUFBOEIsQ0FBQyxFQUFFNUMsS0FDMUUsb0JBQ0Q7QUFDQSxjQUFJNkMsWUFBWTdHLFFBQVE7QUFDdkJxRyx3QkFBWTtBQUVaLGtCQUFNVSxjQUF3QyxDQUFDO0FBQy9DLGtCQUFNQyxjQUE2QyxDQUFDO0FBQUEsZ0JBQUFDLGFBQUFDLDJCQUU5QkwsWUFBWU0sU0FBUyxDQUFBLEdBQUFDO0FBQUEsZ0JBQUE7QUFBM0MsbUJBQUFILFdBQUFJLEVBQUEsR0FBQSxFQUFBRCxTQUFBSCxXQUFBSyxFQUFBLEdBQUFDLFFBQThDO0FBQUEsc0JBQW5DbkgsVUFBQWdILE9BQUFuRTtBQUNWLHNCQUFNcUMsV0FBV3JFLEVBQUViLE9BQU87QUFFMUIsc0JBQU11RyxVQUE4QnJCLFNBQVNrQixLQUFLLGdDQUFnQztBQUNsRnhELHVCQUFPMkQsU0FBUyxTQUFTO0FBRXpCLHNCQUFNYSxPQUFlbEMsU0FBU2tDLEtBQUssRUFBRUMsS0FBSztBQUMxQ1QsNEJBQVlMLE9BQU8sSUFBSWE7QUFFdkIsc0JBQU1FLG1CQUF5Q1gsWUFBWVMsSUFBSTtBQUMvRCxvQkFBSUUsa0JBQWtCO0FBQ3JCQSxtQ0FBaUJBLGlCQUFpQjFILE1BQU0sSUFBSTJHO2dCQUM3QyxPQUFPO0FBQ05JLDhCQUFZUyxJQUFJLElBQUksQ0FBQ2IsT0FBTztnQkFDN0I7Y0FDRDtZQUFBLFNBQUFnQixLQUFBO0FBQUFWLHlCQUFBVyxFQUFBRCxHQUFBO1lBQUEsVUFBQTtBQUFBVix5QkFBQVksRUFBQTtZQUFBO0FBRUEsa0JBQU1DLGlCQUFpQmQsWUFBWWxFLGVBQXlCO0FBRTVELGtCQUFNaUYsYUFBdUIsQ0FBQTtBQUM3QixxQkFBQUMsS0FBQSxHQUFBQyxpQkFBbUJDLE9BQU9DLE9BQU9uQixXQUFXLEdBQUFnQixLQUFBQyxlQUFBakksUUFBQWdJLE1BQUc7QUFBL0Msb0JBQVdSLE9BQUFTLGVBQUFELEVBQUE7QUFDVixrQkFBSVIsU0FBUyxNQUFNO0FBQ2xCO2NBQ0Q7QUFFQSxvQkFBTVksV0FBaUNyQixZQUFZUyxJQUFJO0FBQ3ZELGtCQUFJLENBQUNZLFVBQVU7QUFDZDtjQUNEO0FBQUEsa0JBQUFDLGFBQUFuQiwyQkFFc0JrQixRQUFBLEdBQUFFO0FBQUEsa0JBQUE7QUFBdEIscUJBQUFELFdBQUFoQixFQUFBLEdBQUEsRUFBQWlCLFNBQUFELFdBQUFmLEVBQUEsR0FBQUMsUUFBZ0M7QUFBQSx3QkFBckJaLFVBQUEyQixPQUFBckY7QUFDVitELDhCQUFZTCxPQUFPLElBQUk7Z0JBQ3hCO2NBQUEsU0FBQWdCLEtBQUE7QUFBQVUsMkJBQUFULEVBQUFELEdBQUE7Y0FBQSxVQUFBO0FBQUFVLDJCQUFBUixFQUFBO2NBQUE7QUFFQSxvQkFBTVUsZUFBdUJILFNBQzNCSSxJQUFLN0IsYUFBQSwrQkFBQTVHLE9BQTJENEcsU0FBTyxNQUFBLENBQU0sRUFDN0U4QixLQUFLLEdBQUc7QUFDVlYseUJBQVdBLFdBQVcvSCxNQUFNLElBQUEsR0FBQUQsT0FBT3dJLGNBQVksT0FBQSxFQUFBeEksT0FBUXlILE1BQUksSUFBQTtZQUM1RDtBQUVBbkIsd0JBQVkwQixXQUFXVSxLQUFLLEdBQUc7QUFDL0JwQyx3QkFBQSxpQkFBQXRHLE9BQTZCcUcsYUFBVyxlQUFBLEVBQUFyRyxPQUFnQitILGdCQUFjLE1BQUE7VUFDdkU7QUFFQSxlQUFLeEIsY0FBY3RFLFFBQVE7UUFDNUIsQ0FBQyxFQUNBQyxNQUFPdEIsV0FBbUM7QUFDMUMsZUFBSzJGLGNBQWMzRSxPQUFPaEIsS0FBSztRQUNoQyxDQUFDO01BQ0g7QUFFQSxZQUFNaUIsV0FBV1gsRUFBRVMsU0FBc0I7QUFFekM0RSxvQkFDRXhFLEtBQUssTUFBWTtBQUNqQixjQUFNNEcsZ0JBQXdCM0UsZUFBZUMsS0FBSyxzQ0FBc0M7QUFBQSxZQUFBMkUsYUFBQXpCLDJCQUNsRXdCLGFBQUEsR0FBQUU7QUFBQSxZQUFBO0FBQXRCLGVBQUFELFdBQUF0QixFQUFBLEdBQUEsRUFBQXVCLFNBQUFELFdBQUFyQixFQUFBLEdBQUFDLFFBQXFDO0FBQUEsa0JBQTFCbkgsVUFBQXdJLE9BQUEzRjtBQUNWLGtCQUFNcUMsV0FBbUJyRSxFQUFFYixPQUFPO0FBQ2xDLG9CQUFRa0YsU0FBU2tCLEtBQUssMEJBQTBCLEdBQUE7Y0FDL0MsS0FBSztBQUNKSCw0QkFBQSxZQUFBdEcsT0FBd0J1RixTQUFTa0IsS0FBSyxtQkFBbUIsR0FBQyxNQUFBO0FBQzFEO2NBQ0QsS0FBSztBQUNKSCw0QkFBQSxpQ0FBQXRHLE9BQTZDdUYsU0FBU2tCLEtBQUssbUJBQW1CLEdBQUMsTUFBQTtBQUMvRTtjQUNELEtBQUs7QUFDSkgsNEJBQUEsZ0JBQUF0RyxPQUE0QnVGLFNBQVNrQixLQUFLLG1CQUFtQixHQUFDLFNBQUE7QUFDOURILDRCQUFBLDBCQUFBdEcsT0FBc0N1RixTQUFTa0IsS0FBSyxtQkFBbUIsR0FBQyxXQUFBLEVBQUF6RyxPQUFZdUYsU0FBU2tCLEtBQUssbUJBQW1CLEdBQUMsT0FBQTtBQUN0SDtjQUNEO0FBQ0NILDRCQUFBLGFBQUF0RyxPQUF5QnVGLFNBQVNrQixLQUFLLG1CQUFtQixHQUFDLE1BQUEsRUFBQXpHLE9BQU91RixTQUFTa0IsS0FBSywwQkFBMEIsR0FBQyxLQUFBO1lBQzdHO1VBQ0Q7UUFBQSxTQUFBbUIsS0FBQTtBQUFBZ0IscUJBQUFmLEVBQUFELEdBQUE7UUFBQSxVQUFBO0FBQUFnQixxQkFBQWQsRUFBQTtRQUFBO0FBRUEsY0FBTWdCLGVBQXVCOUUsZUFBZUMsS0FBSyxlQUFlO0FBQ2hFLFlBQUk2RSxhQUFhN0ksUUFBUTtBQUN4QnFHLHNCQUFBLG9DQUFBdEcsT0FBZ0RxRyxhQUFXLHVCQUFBO0FBQzNEQyxzQkFBWTtBQUVaLGdCQUFNeUMsZ0JBQWdCRCxhQUFhMUIsU0FBUyxxQkFBcUI7QUFBQSxjQUFBNEIsYUFBQTdCLDJCQUMzQzRCLGFBQUEsR0FBQUU7QUFBQSxjQUFBO0FBQXRCLGlCQUFBRCxXQUFBMUIsRUFBQSxHQUFBLEVBQUEyQixTQUFBRCxXQUFBekIsRUFBQSxHQUFBQyxRQUFxQztBQUFBLG9CQUExQm5ILFVBQUE0SSxPQUFBL0Y7QUFDVixvQkFBTXFDLFdBQW1CckUsRUFBRWIsT0FBTztBQUVsQyxrQkFBSTZJLFlBQWdDM0QsU0FBU2tCLEtBQUssa0JBQWtCO0FBQ3BFLGtCQUFJeUMsV0FBVztBQUNkQSw0QkFBQSxJQUFBbEosT0FBZ0JrSixXQUFTLEdBQUE7Y0FDMUIsT0FBTztBQUNOQSw0QkFBWTtjQUNiO0FBRUEsb0JBQU1DLFlBQWdDNUQsU0FBU2tCLEtBQUssa0JBQWtCO0FBQ3RFSCwwQkFBQSxTQUFBdEcsT0FBcUJtSixXQUFTLElBQUEsRUFBQW5KLE9BQUtrSixXQUFTLFVBQUEsRUFBQWxKLE9BQVdtSixXQUFTLE1BQUE7WUFDakU7VUFBQSxTQUFBdkIsS0FBQTtBQUFBb0IsdUJBQUFuQixFQUFBRCxHQUFBO1VBQUEsVUFBQTtBQUFBb0IsdUJBQUFsQixFQUFBO1VBQUE7UUFDRDtBQUVBeEIsb0JBQVk7QUFFWnBDLHFCQUFhTyxrQkFBa0I2QjtBQUMvQixhQUFLekUsU0FBU0ksUUFBUXFFLFFBQVE7TUFDL0IsQ0FBQyxFQUNBcEUsTUFBT3RCLFdBQW1DO0FBQzFDLGFBQUtpQixTQUFTRCxPQUFPaEIsS0FBSztNQUMzQixDQUFDO0FBRUYsYUFBT2lCO0lBQ1I7SUFFQXVILFlBQVk7QUFDWCxVQUFJLEtBQUtoRixjQUFjO0FBQ3RCLGVBQU9sRCxFQUFFUyxTQUFzQixFQUFFTSxRQUFRO01BQzFDO0FBRUEsV0FBS3NDLGFBQWE4RSxNQUFNLEVBQUVDLE9BQU90RyxtQ0FBQTFDLFFBQUFDLGNBQUMsS0FBQSxNQUFHWixXQUFXLFNBQVMsQ0FBRSxDQUFJO0FBRS9ELGFBQU91RSxhQUFhaUMsbUJBQW1CLEVBQ3JDcEUsS0FBTXVFLGNBQ045RCxjQUFjOEQsVUFBOEI7UUFDM0NLLE9BQU87UUFDUEMsU0FBUzdEO01BQ1YsQ0FBQyxDQUNGLEVBQ0NoQixLQUFNd0gsZ0JBQWtDO0FBQ3hDLGFBQUtoRixhQUFhOEUsTUFBTSxFQUFFRyxLQUFLRCxVQUE4QjtBQUU1RCxhQUFLaEYsYUFBYU4sS0FBSyxpQkFBaUIsRUFDdkN3RixnQkFBZ0I7QUFDbEIsYUFBSzdFLFdBQVc7QUFFaEIsYUFBS1IsZUFBZTtNQUNyQixDQUFDLEVBQ0FsQyxNQUFPdEIsV0FBb0Q7QUFDM0QsWUFBSUEsaUJBQWlCdkIsbUJBQW1CO0FBQ3ZDLGdCQUFNLElBQUlrRSxHQUFHQyxHQUFHM0QsTUFBTWUsTUFBTVQsU0FBUyxHQUFHO1lBQ3ZDdUosYUFBYTtVQUNkLENBQUM7UUFDRixPQUFPO0FBQ04sZ0JBQU0sSUFBSW5HLEdBQUdDLEdBQUczRCxNQUFNd0MsT0FBT3pCLEtBQUssR0FBRztZQUNwQzhJLGFBQWE7VUFDZCxDQUFDO1FBQ0Y7TUFDRCxDQUFDO0lBQ0g7SUFFQS9ELGdCQUFnQjtBQUNmLFVBQUksS0FBS3RCLG1CQUFtQixRQUFXO0FBQ3RDLGFBQUtBLGlCQUFpQixLQUFLK0UsVUFBVTtBQUNyQyxlQUFPbEYsYUFBYU07QUFFcEIsY0FBTW1GLGtCQUFrQnpJLEVBQUVTLFNBQXNCO0FBQ2hELGFBQU0sS0FBSzBDLGVBQ1R0QyxLQUFNQyxjQUFnQztBQUN0QyxlQUFLMkgsZ0JBQWdCMUgsUUFBUUQsUUFBUTtRQUN0QyxDQUFDLEVBQ0FFLE1BQU90QixXQUE4QztBQUNyRCxjQUFJQSxpQkFBaUIyQyxHQUFHQyxHQUFHM0QsT0FBTztBQUNqQ3FFLHlCQUFhTSxZQUFZNUQ7VUFDMUIsT0FBTztBQUNOLGlCQUFLK0ksZ0JBQWdCL0gsT0FBT2hCLEtBQUs7VUFDbEM7UUFDRCxDQUFDLEVBQ0FnSixPQUFPLE1BQVk7QUFDbkIsaUJBQU8sS0FBS3ZGO1FBQ2IsQ0FBQztBQUVGLGVBQU9zRjtNQUNSO0FBRUEsWUFBTTlILFdBQVdYLEVBQUVTLFNBQXNCO0FBQ3pDLFdBQU0sS0FBSzBDLGVBQ1R0QyxLQUFNQyxjQUFnQztBQUN0QyxhQUFLSCxTQUFTSSxRQUFRRCxRQUFRO01BQy9CLENBQUMsRUFDQUUsTUFBT3RCLFdBQThDO0FBQ3JELFlBQUlBLGlCQUFpQjJDLEdBQUdDLEdBQUczRCxPQUFPO0FBQ2pDcUUsdUJBQWFNLFlBQVk1RDtRQUMxQixPQUFPO0FBQ04sZUFBS2lCLFNBQVNELE9BQU9oQixLQUFLO1FBQzNCO01BQ0QsQ0FBQyxFQUNBZ0osT0FBTyxNQUFZO0FBQ25CLGVBQU8sS0FBS3ZGO01BQ2IsQ0FBQztBQUVGLGFBQU94QztJQUNSO0VBQ0Q7QUFFQXFDLGVBQWEyRixTQUFTO0lBQ3JCLEdBQUd0RyxHQUFHQyxHQUFHVyxjQUFjMEY7RUFDeEI7QUFDQTNGLGVBQWEyRixPQUFPM0osT0FBQSxnQkFBQUYsT0FBdUI2RCxJQUFJO0FBQy9DSyxlQUFhMkYsT0FBT2xELFFBQVFoSCxXQUFXLE9BQU87QUFDOUN1RSxlQUFhMkYsT0FBT0MsVUFBVSxDQUM3QjtJQUNDQyxPQUFPcEgsR0FBR3FILElBQUksNkJBQTZCO0lBQzNDQyxPQUFPO0VBQ1IsQ0FBQTtBQUdELFFBQU1DLFNBQXVCLElBQUloRyxhQUFhO0FBQzlDUixnQkFBY3lHLFdBQVcsQ0FBQ0QsTUFBTSxDQUFDO0FBQ2pDOUcsWUFBVWdILElBQUl2RyxNQUFNcUcsTUFBTTtBQUUxQixTQUFPQTtBQUNSO0FBRUEsSUFBTUcsaUJBQWlCQSxNQUFZO0FBQUEsTUFBQUMsYUFBQW5ELDJCQUNiL0QsVUFBVWdGLE9BQU8sQ0FBQSxHQUFBbUM7QUFBQSxNQUFBO0FBQXRDLFNBQUFELFdBQUFoRCxFQUFBLEdBQUEsRUFBQWlELFNBQUFELFdBQUEvQyxFQUFBLEdBQUFDLFFBQXlDO0FBQUEsWUFBOUIwQyxTQUFBSyxPQUFBckg7QUFDVmdILGFBQU9qRSxRQUFRO0lBQ2hCO0VBQUEsU0FBQTJCLEtBQUE7QUFBQTBDLGVBQUF6QyxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBMEMsZUFBQXhDLEVBQUE7RUFBQTtBQUNBMUUsWUFBVW9ILE1BQU07QUFDaEIsT0FBSzlHLGNBQWMrRyxhQUFhO0FBQ2pDOztBSXhWQSxJQUFBQyxxQkFBa0J6TCxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTtBQUVsQixJQUFNeUwsZ0JBSUY7RUFDSEMsT0FBTztFQUVQO0VBQ0FDLFNBQVM7RUFFVDtFQUNBQyxXQUFXO0FBQ1o7QUFFQSxJQUFNQyxvQkFBcUJuSCxXQUF5QztBQUNuRSxNQUFJZCxZQUFZLFVBQVU7QUFDekI2SCxrQkFBY0csWUFBWTtBQUMxQixRQUFJRTtBQUNKTCxrQkFBY0MsT0FBTyxNQUFZO0FBQ2hDLFVBQUlJLFlBQVk7QUFDZjtNQUNEO0FBWUEsWUFBTUMsWUFDTFAsbUNBQUFwSyxRQUFBQyxjQUFDLE9BQUE7UUFDQUMsV0FBVyxDQUFDLGVBQWUsb0JBQW9CLHlCQUF5QjtRQUN4RTBLLElBQUlQLGNBQWNHO01BQUEsR0FFbEJKLG1DQUFBcEssUUFBQUMsY0FBQyxPQUFBLE1BQ0FtSyxtQ0FBQXBLLFFBQUFDLGNBQUMsTUFBQSxJQUFHLENBQ0wsQ0FDRDtBQUdEeUssbUJBQWE5SixFQUFFK0osU0FBUztBQUN4QnJILFlBQU1LLEtBQUssYUFBYSxFQUFFa0gsTUFBTUgsVUFBVTtJQUMzQztBQUNBTCxrQkFBY0UsU0FBUyxNQUFZO0FBQ2xDLFVBQUksQ0FBQ0csWUFBWTtBQUNoQjtNQUNEO0FBQ0FBLGlCQUFXL0csS0FBSyxJQUFJLEVBQUVvRixNQUFNO0FBQzVCLFlBQU07UUFBQ3lCO01BQVMsSUFBSUg7QUFDcEIsVUFBSUcsV0FBVztBQUNkbkksV0FBR3lJLEtBQUtDLFlBQVlQLFNBQVM7TUFDOUI7SUFDRDtFQUNELFdBQVdoSSxZQUFZLGVBQWU7QUFDckM2SCxrQkFBY0csWUFBWTtBQUMxQkgsa0JBQWNFLFNBQVMsTUFBWTtBQUNsQ2pILFlBQU1LLEtBQUt4QixhQUFhLEVBQUU2SSxPQUFPO0lBQ2xDO0VBQ0Q7QUFDRDs7QUNoRUEsSUFBQUMscUJBQWtDck0sUUFBQSxnQ0FBQTs7QUNEbEMsSUFBQXNNLHFCQUFrQnZNLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBO0FBR2xCLElBQU11TSxzQkFBdUI1SCxVQUFxQztBQUNqRSxRQUFNO0lBQUNpSDtFQUFTLElBQUlIO0FBQ3BCLE1BQUksQ0FBQ0csV0FBVztBQUNmO0VBQ0Q7QUFFQSxRQUFNWSxjQUFvQy9JLEdBQUd5SSxLQUFLTyxlQUFlYixXQUFXLEtBQUssT0FBQSxhQUFBOUssT0FBb0I2RCxJQUFJLENBQUU7QUFDM0csTUFBSSxDQUFDNkgsYUFBYTtBQUNqQjtFQUNEO0FBRUEsUUFBTUUsUUFBNkI7SUFDbENDLFFBQVE7SUFDUkMsU0FBUztFQUNWO0FBS0EsUUFBTUMsZUFBdUI3SyxFQUFFd0ssV0FBVyxFQUFFTSxTQUFTdkosYUFBYTtBQUNsRXNKLGVBQ0U5SCxLQUFLLEdBQUcsRUFDUm9GLE1BQU0sRUFDTkMsT0FDQWtDLG1DQUFBbEwsUUFBQUMsY0FBQyxPQUFBLE1BQ0FpTCxtQ0FBQWxMLFFBQUFDLGNBQUMsUUFBQTtJQUNBcUwsT0FBTztNQUNOLEdBQUdBO01BQ0hLLFlBQVk7TUFDWkMsT0FBTztJQUNSO0VBQUEsR0FFQyxHQUNGLEdBQ0FWLG1DQUFBbEwsUUFBQUMsY0FBQyxRQUFBO0lBQ0FxTCxPQUFPO01BQ04sR0FBR0E7TUFDSEssWUFBWTtNQUNaQyxPQUFPO0lBQ1I7RUFBQSxHQUVDLEdBQ0YsQ0FDRCxDQUNEO0FBRUQsU0FBT0g7QUFDUjs7QUQ3Q0EsSUFBSUksU0FBa0I7QUFFdEJ4SixHQUFHeUosS0FBSyxrQkFBa0IsRUFBRUMsSUFBS0MsY0FBbUI7QUFDbkQsUUFBTTFJLFFBQWlDMEksU0FBU0MsUUFBUSxNQUFNO0FBRTlELE1BQUksQ0FBQ0osUUFBUTtBQUNaQSxhQUFTO0FBQ1R6SSxrQkFBYzZCLFNBQVNELFNBQVMxQixLQUFLO0VBQ3RDO0FBRUF5RyxpQkFBZTtBQUVmVSxvQkFBa0JuSCxLQUFLO0FBQ3ZCK0csZ0JBQWNFLE9BQU87QUFDckJGLGdCQUFjQyxLQUFLO0FBQUEsTUFBQTRCLGFBQUFyRiwyQkFFR3ZELE1BQU1LLEtBQUsseUNBQXlDLENBQUEsR0FBQXdJO0FBQUEsTUFBQTtBQUExRSxTQUFBRCxXQUFBbEYsRUFBQSxHQUFBLEVBQUFtRixTQUFBRCxXQUFBakYsRUFBQSxHQUFBQyxRQUE2RTtBQUFBLFlBQWxFbkgsVUFBQW9NLE9BQUF2SjtBQUNWLFlBQU1XLE9BQWV4RCxRQUFRNkssR0FBR3pLLFFBQVEseUJBQXlCLEVBQUU7QUFFbkUsVUFBSThFLFdBQW1CckUsRUFBRWIsT0FBTztBQUNoQyxVQUFJc0ssY0FBY0csV0FBVztBQUFBLFlBQUE0QjtBQUM1Qm5ILGlCQUFTb0gsS0FBSztBQUNkcEgsb0JBQUFtSCx1QkFBV2pCLG9CQUFvQjVILElBQUksT0FBQSxRQUFBNkkseUJBQUEsU0FBQUEsdUJBQUtuSDtNQUN6QztBQUVBQSxlQUFTcUgsR0FDUixVQUFBLEdBQ0FyQixtQkFBQXNCLHFCQUFxQkMsV0FBbUM7QUFDdkRBLGNBQU1DLGVBQWU7QUFDckJwSixrQkFBVUMsT0FBT0MsSUFBSSxFQUFFbUosS0FBSztNQUM3QixDQUFDLENBQ0Y7SUFDRDtFQUFBLFNBQUFwRixLQUFBO0FBQUE0RSxlQUFBM0UsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQTRFLGVBQUExRSxFQUFBO0VBQUE7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJBcGlSZXRyeUZhaWxFcnJvciIsICJsb2NhbGl6ZSIsICJlbiIsICJMb2FkaW5nIiwgIlRpdGxlIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJFcnJvciIsICJlcnJvcnMiLCAiY29uc3RydWN0b3IiLCAiY29uY2F0IiwgImxlbmd0aCIsICJuYW1lIiwgInRvSlF1ZXJ5IiwgImVycm9yQ291bnQiLCAiZWxlbWVudCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInJlcGxhY2UiLCAidG9TdHJpbmciLCAicmVkdWNlIiwgImVycm9yIiwgImluZGV4IiwgInNwbGl0IiwgImFjY3VtdWxhdG9yIiwgImxpbmUiLCAibnVtYmVyIiwgIiQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJwYXJzZVdpdGhSZXRyeSIsICJhcmdzIiwgImNvdW50IiwgInByZXZpb3VzRXJyb3JzIiwgIkRlZmVycmVkIiwgInJlamVjdCIsICJkZWZlcnJlZCIsICJwYXJzZSIsICJ0aGVuIiwgInJlc3BvbnNlIiwgInJlc29sdmUiLCAiY2F0Y2giLCAiY29uc29sZSIsICJzdGFjayIsICJTdHJpbmciLCAibmV3UmVzcG9uc2UiLCAibmV3RXJyb3IiLCAicGFyc2VXaWtpdGV4dCIsICJQT1JUTEVUX0NMQVNTIiwgIldHX1BBR0VfTkFNRSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1NLSU4iLCAiV0dfVVNFUl9WQVJJQU5UIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhc3NlcnQiLCAidmFsdWUiLCAidmFsdWVOYW1lIiwgInZpZXdlck1hcCIsICJNYXAiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAiT08iLCAidWkiLCAiV2luZG93TWFuYWdlciIsICJ3aW5kb3dNYW5hZ2VyIiwgImdldFZpZXdlciIsICIkYm9keSIsICJoYXNoIiwgImhhcyIsICJzdG9yZWRWaWV3ZXIiLCAiJHRhcmdldEVsZW1lbnQiLCAiZmluZCIsICJOb3RlVEFWaWV3ZXIiLCAiUHJvY2Vzc0RpYWxvZyIsICJkYXRhSXNMb2FkZWQiLCAiZXhlY3V0ZVByb21pc2UiLCAibXV0YXRpb25PYnNlcnZlciIsICIkcmVhbENvbnRlbnQiLCAibGFzdEVycm9yIiwgIm5vdGVUQVBhcnNlVGV4dCIsICJzaXplIiwgIk11dGF0aW9uT2JzZXJ2ZXIiLCAidXBkYXRlU2l6ZSIsICJiaW5kIiwgIm9ic2VydmUiLCAiY2hpbGRMaXN0IiwgInN1YnRyZWUiLCAiaW5pdGlhbGl6ZSIsICJwYW5lbExheW91dCIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICJwYWRkZWQiLCAiYXBwZW5kVG8iLCAiJGVsZW1lbnQiLCAiZ2V0U2V0dXBQcm9jZXNzIiwgImRhdGEiLCAibmV4dCIsICJkb0V4ZWN1dGVXcmFwIiwgImV4ZWN1dGVBY3Rpb24iLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJhY3Rpb24iLCAiaXNNYWluQWN0aW9uIiwgImV4ZWN1dGUiLCAiZGVzdHJveSIsICJkaXNjb25uZWN0IiwgImdldE5vdGVUQVBhcnNlVGV4dCIsICIkbm90ZVRBdGl0bGUiLCAiYWN0dWFsVGl0bGUiLCAid2lraXRleHQiLCAidGl0bGVEZWZlcnJlZCIsICJ0aXRsZUNvbnYiLCAiYXR0ciIsICJ0aXRsZURlc2MiLCAidGl0bGUiLCAidmFyaWFudCIsICJyZXN1bHRIdG1sIiwgIiRtdWx0aVRpdGxlIiwgInBhcnNlSFRNTCIsICJ0ZXh0VmFyaWFudCIsICJ2YXJpYW50VGV4dCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImNoaWxkcmVuIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJ0ZXh0IiwgInRyaW0iLCAidGV4dFZhcmlhbnRBcnJheSIsICJlcnIiLCAiZSIsICJmIiwgInRpdGxlQ29udmVydGVkIiwgIm11bHRpVGl0bGUiLCAiX2kiLCAiX09iamVjdCR2YWx1ZXMiLCAiT2JqZWN0IiwgInZhbHVlcyIsICJ2YXJpYW50cyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJ2YXJpYW50c05hbWUiLCAibWFwIiwgImpvaW4iLCAiJG5vdGVUQWdyb3VwcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICIkbm90ZVRBbG9jYWwiLCAiJG5vdGVUQWxvY2FscyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJsb2NhbERlc2MiLCAibG9jYWxDb252IiwgImRvRXhlY3V0ZSIsICJlbXB0eSIsICJhcHBlbmQiLCAicGFyc2VkSHRtbCIsICJodG1sIiwgIm1ha2VDb2xsYXBzaWJsZSIsICJyZWNvdmVyYWJsZSIsICJleGVjdXRlRGVmZXJyZWQiLCAiYWx3YXlzIiwgInN0YXRpYyIsICJhY3Rpb25zIiwgImxhYmVsIiwgIm1zZyIsICJmbGFncyIsICJ2aWV3ZXIiLCAiYWRkV2luZG93cyIsICJzZXQiLCAicmVzZXRBbGxWaWV3ZXIiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiY2xlYXIiLCAiY2xlYXJXaW5kb3dzIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJnbG9iYWxNZXRob2RzIiwgImluaXQiLCAiZGVJbml0IiwgInBvcnRsZXRJZCIsICJpbml0R2xvYmFsTWV0aG9kcyIsICIkbm90ZVRBVGFiIiwgIm5vdGVUQVRhYiIsICJpZCIsICJhZnRlciIsICJ1dGlsIiwgImhpZGVQb3J0bGV0IiwgInJlbW92ZSIsICJpbXBvcnRfZXh0X2dhZGdldDciLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImdlbmVyYXRlUG9ydGxldExpbmsiLCAicG9ydGxldExpbmsiLCAiYWRkUG9ydGxldExpbmsiLCAic3R5bGUiLCAiaGVpZ2h0IiwgInBhZGRpbmciLCAiJHBvcnRsZXRMaW5rIiwgImFkZENsYXNzIiwgImJhY2tncm91bmQiLCAiY29sb3IiLCAiaXNJbml0IiwgImhvb2siLCAiYWRkIiwgIiRjb250ZW50IiwgInBhcmVudHMiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiX2dlbmVyYXRlUG9ydGxldExpbmsiLCAiaGlkZSIsICJvbiIsICJmaWx0ZXJBbHRlcmVkQ2xpY2tzIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgIm9wZW4iXQp9Cg==
