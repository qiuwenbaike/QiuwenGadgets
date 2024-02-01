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
    const $element = $(element);
    return $element;
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
            for (const key in variantText) {
              if (!Object.hasOwn(variantText, key)) {
                continue;
              }
              const text = variantText[key];
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
  NoteTAViewer.static.name = "NoteTAViewer-".concat(hash);
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
var portletId;
var initGlobalMethods = ($body) => {
  const globalMethods = {
    init() {
    },
    deInit() {
    }
  };
  if (WG_SKIN === "vector") {
    portletId = "p-noteTA";
    let $noteTATab;
    globalMethods.init = () => {
      if ($noteTATab) {
        return;
      }
      const noteTATab = /* @__PURE__ */ import_ext_gadget5.default.createElement("div", {
        className: ["vector-menu", "vector-menu-tabs", "vector-menu-tabs-legacy"],
        id: portletId
      }, /* @__PURE__ */ import_ext_gadget5.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget5.default.createElement("ul", null)));
      $noteTATab = $(noteTATab);
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
  } else if (WG_SKIN === "vector-2022") {
    portletId = "p-associated-pages";
    globalMethods.deInit = () => {
      $body.find(PORTLET_CLASS).remove();
    };
  }
  return globalMethods;
};
//! src/NoteTA/NoteTA.ts
var import_ext_gadget7 = require("ext.gadget.Util");
//! src/NoteTA/modules/util/generatePortletLink.tsx
var import_ext_gadget6 = __toESM(require("ext.gadget.React"), 1);
var generatePortletLink = (hash) => {
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
        event.preventDefault();
        if (!(0, import_ext_gadget7.checkA11yConfirmKey)(event)) {
          return;
        }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3IudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Ob3RlVEEvb3B0aW9ucy5qc29uIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9hcGkudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3BhcnNlV2lraXRleHQudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy92aWV3ZXIudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL2Fzc2VydC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdFZpZXdNYXAudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pbml0R2xvYmFsTWV0aG9kcy50c3giLCAic3JjL05vdGVUQS9Ob3RlVEEudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVQb3J0bGV0TGluay50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNsYXNzIEFwaVJldHJ5RmFpbEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRwcml2YXRlIGVycm9yczogc3RyaW5nW107XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKGVycm9yczogc3RyaW5nW10pIHtcblx0XHRzdXBlcihgQXBpIGNhbGxzIGZhaWxlZCAke2Vycm9ycy5sZW5ndGh9IHRpbWUocykgaW4gYSByb3cuYCk7XG5cdFx0dGhpcy5uYW1lID0gJ0FwaVJldHJ5RmFpbEVycm9yJztcblx0XHR0aGlzLmVycm9ycyA9IGVycm9ycztcblx0fVxuXG5cdHB1YmxpYyB0b0pRdWVyeSgpOiBKUXVlcnkge1xuXHRcdGNvbnN0IGVycm9yQ291bnQ6IG51bWJlciA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcblxuXHRcdGNvbnN0IGVsZW1lbnQgPSAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+XG5cdFx0XHRcdDxwPntnZXRNZXNzYWdlKCdBcGlSZXRyeUZhaWxFcnJvcicpLnJlcGxhY2UoL1xcJDEvZywgZXJyb3JDb3VudC50b1N0cmluZygpKX08L3A+XG5cdFx0XHRcdDxvbD5cblx0XHRcdFx0XHR7dGhpcy5lcnJvcnMucmVkdWNlKFxuXHRcdFx0XHRcdFx0KGVycm9ycywgZXJyb3IsIGluZGV4KSA9PiBbXG5cdFx0XHRcdFx0XHRcdC4uLmVycm9ycyxcblx0XHRcdFx0XHRcdFx0PGxpIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHRcdHtlcnJvclxuXHRcdFx0XHRcdFx0XHRcdFx0LnNwbGl0KCdcXG4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnJlZHVjZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0KGFjY3VtdWxhdG9yLCBsaW5lLCBudW1iZXIpID0+IFsuLi5hY2N1bXVsYXRvciwgPHAga2V5PXtudW1iZXJ9PntsaW5lfTwvcD5dLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbXSBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXVxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9saT4sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0W10gYXMgUmVhY3QuUmVhY3RFbGVtZW50W11cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L29sPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCkgYXMgSlF1ZXJ5O1xuXG5cdFx0cmV0dXJuICRlbGVtZW50O1xuXHR9XG59XG5cbmV4cG9ydCB7QXBpUmV0cnlGYWlsRXJyb3J9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBcGlSZXRyeUZhaWxFcnJvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcGkgY2FsbHMgZmFpbGVkICQxIHRpbWUocykgaW4gYSByb3cuIEVycm9yczogJyxcblx0XHRcdCd6aC1oYW5zJzogJ0FwaSDosIPnlKjov57nu63lpLHotKUgJDEg5qyh77yMJDEg5qyh6LCD55So55qE6ZSZ6K+v5YiG5Yir5Li677yaJyxcblx0XHRcdCd6aC1oYW50JzogJ0FwaSDoqr/nlKjpgKPnuozlpLHmlZcgJDEg5qyh77yMJDEg5qyh6Kq/55So55qE6Yyv6Kqk5YiG5Yil54K677yaJyxcblx0XHR9KSxcblx0XHRMb2FkaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yqg6L294oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOi8ieWFpeKApuKApicsXG5cdFx0fSksXG5cdFx0VGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90ZVRBJyxcblx0XHRcdCd6aC1oYW5zJzogJ+Wtl+ivjei9rOaNoicsXG5cdFx0XHQnemgtaGFudCc6ICflrZfoqZ7ovYnmj5snLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjEuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBOb3RlVEEvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxudHlwZSBBcGlQYXJzZSA9IG13LkFwaVsncGFyc2UnXTtcbnR5cGUgQXBpUGFyc2VQYXJhbWV0ZXJzID0gUGFyYW1ldGVyczxBcGlQYXJzZT47XG50eXBlIEFwaVBhcnNlUmVzcG9uc2UgPSBBd2FpdGVkPFJldHVyblR5cGU8QXBpUGFyc2U+PjtcbnR5cGUgQXBpUmVzcG9uc2UgPSBBcGlQYXJzZVJlc3BvbnNlIHwgQXBpUmV0cnlGYWlsRXJyb3I7XG5cbmNvbnN0IHBhcnNlV2l0aFJldHJ5ID0gKFxuXHRhcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMsXG5cdGNvdW50OiBudW1iZXIgPSAzLFxuXHRwcmV2aW91c0Vycm9yczogc3RyaW5nW10gPSBbXVxuKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiA9PiB7XG5cdGlmICghY291bnQpIHtcblx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXRyeUZhaWxFcnJvcj4oKS5yZWplY3QobmV3IEFwaVJldHJ5RmFpbEVycm9yKHByZXZpb3VzRXJyb3JzKSk7XG5cdH1cblxuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0dm9pZCBhcGlcblx0XHQucGFyc2UoLi4uYXJncylcblx0XHQudGhlbigocmVzcG9uc2U6IEFwaVBhcnNlUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yPzogRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG5cdFx0XHRpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnc3RhY2snIGluIGVycm9yKSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBlcnJvci5zdGFjaztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBTdHJpbmcoZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZVdpdGhSZXRyeShhcmdzLCAtLWNvdW50LCBwcmV2aW91c0Vycm9ycylcblx0XHRcdFx0LnRoZW4oKG5ld1Jlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShuZXdSZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgobmV3RXJyb3I/OiBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KG5ld0Vycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIGRlZmVycmVkO1xufTtcblxuY29uc3QgcGFyc2VXaWtpdGV4dCA9ICguLi5hcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+ID0+IHtcblx0cmV0dXJuIHBhcnNlV2l0aFJldHJ5KGFyZ3MpO1xufTtcblxuZXhwb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9O1xuIiwgImNvbnN0IFBPUlRMRVRfQ0xBU1M6IHN0cmluZyA9ICd4LW5vdGVUQS12aWV3ZXInO1xuXG5jb25zdCBXR19QQUdFX05BTUU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcbmNvbnN0IFdHX1NLSU46IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKTtcbmNvbnN0IFdHX1VTRVJfVkFSSUFOVDogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKTtcblxuZXhwb3J0IHtQT1JUTEVUX0NMQVNTLCBXR19QQUdFX05BTUUsIFdHX1NLSU4sIFdHX1VTRVJfVkFSSUFOVH07XG4iLCAiaW1wb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9IGZyb20gJy4vcGFyc2VXaWtpdGV4dCc7XG5pbXBvcnQge1BPUlRMRVRfQ0xBU1MsIFdHX1BBR0VfTkFNRSwgV0dfVVNFUl9WQVJJQU5UfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7QXBpUmV0cnlGYWlsRXJyb3J9IGZyb20gJy4vdXRpbC9BcGlSZXRyeUZhaWxFcnJvcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnLi91dGlsL2Fzc2VydCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3ZpZXdlck1hcH0gZnJvbSAnLi9pbml0Vmlld01hcCc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBnZXRWaWV3ZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+LCBoYXNoOiBzdHJpbmcpOiB0eXBlb2Ygdmlld2VyID0+IHtcblx0aWYgKHZpZXdlck1hcC5oYXMoaGFzaCkpIHtcblx0XHRjb25zdCBzdG9yZWRWaWV3ZXIgPSB2aWV3ZXJNYXAuZ2V0KGhhc2gpO1xuXHRcdGFzc2VydChzdG9yZWRWaWV3ZXIsICd2aWV3ZXInKTtcblxuXHRcdHJldHVybiBzdG9yZWRWaWV3ZXI7XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0RWxlbWVudDogSlF1ZXJ5ID0gJGJvZHkuZmluZChgI25vdGVUQS0ke2hhc2h9YCk7XG5cdGlmICghJHRhcmdldEVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBDYW4ndCBnZXQgRWxlbWVudCBcIiNub3RlVEEtJHtoYXNofVwiLmApO1xuXHR9XG5cblx0Y2xhc3MgTm90ZVRBVmlld2VyIGV4dGVuZHMgT08udWkuUHJvY2Vzc0RpYWxvZyB7XG5cdFx0cHJpdmF0ZSBkYXRhSXNMb2FkZWQ6IGJvb2xlYW47XG5cdFx0cHJpdmF0ZSBleGVjdXRlUHJvbWlzZT86IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZG9FeGVjdXRlPjtcblx0XHRwcml2YXRlIG11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG5cdFx0cHJpdmF0ZSAkcmVhbENvbnRlbnQ6IEpRdWVyeTtcblx0XHRwcml2YXRlICRib2R5OiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbGFzdEVycm9yPzogT08udWkuRXJyb3I7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbm90ZVRBUGFyc2VUZXh0OiBzdHJpbmc7XG5cblx0XHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcih7XG5cdFx0XHRcdHNpemU6ICdsYXJnZXInLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuZGF0YUlzTG9hZGVkID0gZmFsc2U7XG5cdFx0XHR0aGlzLiRyZWFsQ29udGVudCA9ICQoPGRpdiAvPikgYXMgSlF1ZXJ5O1xuXG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnVwZGF0ZVNpemUuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRyZWFsQ29udGVudC5nZXQoMCkgYXMgSFRNTEVsZW1lbnQsIHtcblx0XHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGluaXRpYWxpemUoKTogdGhpcyB7XG5cdFx0XHRzdXBlci5pbml0aWFsaXplKCk7XG5cblx0XHRcdGNvbnN0IHBhbmVsTGF5b3V0OiBPTy51aS5QYW5lbExheW91dCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmFwcGVuZFRvKHBhbmVsTGF5b3V0LiRlbGVtZW50KTtcblx0XHRcdHBhbmVsTGF5b3V0LiRlbGVtZW50LmFwcGVuZFRvKHRoaXMuJGJvZHkgYXMgSlF1ZXJ5KTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldFNldHVwUHJvY2VzcyhkYXRhOiBPTy51aS5EaWFsb2cuU2V0dXBEYXRhTWFwKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRyZXR1cm4gc3VwZXIuZ2V0U2V0dXBQcm9jZXNzKGRhdGEpLm5leHQoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR2b2lkIHRoaXMuZG9FeGVjdXRlV3JhcCgpO1xuXHRcdFx0XHR2b2lkIHRoaXMuZXhlY3V0ZUFjdGlvbignbWFpbicpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldEFjdGlvblByb2Nlc3MoYWN0aW9uPzogc3RyaW5nKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRjb25zdCBpc01haW5BY3Rpb246IGJvb2xlYW4gPSBhY3Rpb24gPT09ICdtYWluJztcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0c3VwZXJcblx0XHRcdFx0XHQuZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24pXG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzcwMzBcblx0XHRcdFx0XHQubmV4dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoaXNNYWluQWN0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmRvRXhlY3V0ZVdyYXAoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5uZXh0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChpc01haW5BY3Rpb24gJiYgTm90ZVRBVmlld2VyLmxhc3RFcnJvcikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gTm90ZVRBVmlld2VyLmxhc3RFcnJvcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBzdXBlci5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbikuZXhlY3V0ZSgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuXHRcdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBnZXROb3RlVEFQYXJzZVRleHQoKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiB7XG5cdFx0XHRpZiAoTm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZDxzdHJpbmc+KCkucmVzb2x2ZShOb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgJG5vdGVUQXRpdGxlOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLXRpdGxlJyk7XG5cdFx0XHRjb25zdCBhY3R1YWxUaXRsZTogc3RyaW5nID0gV0dfUEFHRV9OQU1FLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0XHRcdGNvbnN0IHRpdGxlRGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXG5cdFx0XHRpZiAoJG5vdGVUQXRpdGxlLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCB0aXRsZUNvbnY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRub3RlVEF0aXRsZS5hdHRyKCdkYXRhLW5vdGV0YS1jb2RlJyk7XG5cdFx0XHRcdGFzc2VydCh0aXRsZUNvbnYsICd0aXRsZUNvbnYnKTtcblxuXHRcdFx0XHRsZXQgdGl0bGVEZXNjOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkbm90ZVRBdGl0bGUuYXR0cignZGF0YS1ub3RldGEtZGVzYycpO1xuXHRcdFx0XHRpZiAodGl0bGVEZXNjKSB7XG5cdFx0XHRcdFx0dGl0bGVEZXNjID0gYO+8iCR7dGl0bGVEZXNjfe+8iWA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGl0bGVEZXNjID0gJyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aWtpdGV4dCArPSBgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodFwiPnt7ZWRpdHwke2FjdHVhbFRpdGxlfXxzZWN0aW9uPTB9fTwvc3Bhbj5cXG5gO1xuXHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlofkvb/nlKhbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOagh+mimOaJi+W3pei9rOaNol1dXFxuJztcblx0XHRcdFx0d2lraXRleHQgKz0gYCog6L2s5o2i5qCH6aKY5Li677yaLXtEfCR7dGl0bGVDb252fX0tJHt0aXRsZURlc2N9XFxuYDtcblx0XHRcdFx0d2lraXRleHQgKz0gYCog5a6e6ZmF5qCH6aKY5Li677yaLXtSfCR7YWN0dWFsVGl0bGV9fS3vvJvlvZPliY3mmL7npLrkuLrvvJote3wke3RpdGxlQ29udn19LVxcbmA7XG5cblx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlc29sdmUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhcnNlV2lraXRleHQoYHt7bm90ZVRBL211bHRpdGl0bGV8JHthY3R1YWxUaXRsZX19fWAsIHtcblx0XHRcdFx0XHR0aXRsZTogYWN0dWFsVGl0bGUsXG5cdFx0XHRcdFx0dmFyaWFudDogJ3poJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0XHQudGhlbigocmVzdWx0SHRtbDogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0ICRtdWx0aVRpdGxlOiBKUXVlcnkgPSAkKCQucGFyc2VIVE1MKHJlc3VsdEh0bWwgYXMgQXBpUGFyc2VSZXNwb25zZSkpLmZpbmQoXG5cdFx0XHRcdFx0XHRcdCcubm90ZVRBLW11bHRpdGl0bGUnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0aWYgKCRtdWx0aVRpdGxlLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlodbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOagh+mimOWPr+iDvee7j+i/h+i9rOaNol1dXFxuKiDovazmjaLmoIfpopjkuLrvvJonO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRleHRWYXJpYW50OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudFRleHQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bGw+ID0ge307XG5cblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRtdWx0aVRpdGxlLmNoaWxkcmVuKCkpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1tdWx0aXRpdGxlLXZhcmlhbnQnKTtcblx0XHRcdFx0XHRcdFx0XHRhc3NlcnQodmFyaWFudCwgJ3ZhcmlhbnQnKTtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHQ6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS50cmltKCk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudFRleHRbdmFyaWFudF0gPSB0ZXh0O1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dFZhcmlhbnRBcnJheTogc3RyaW5nW10gfCB1bmRlZmluZWQgPSB0ZXh0VmFyaWFudFt0ZXh0XTtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGV4dFZhcmlhbnRBcnJheSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dFZhcmlhbnRBcnJheVt0ZXh0VmFyaWFudEFycmF5Lmxlbmd0aF0gPSB2YXJpYW50O1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0VmFyaWFudFt0ZXh0XSA9IFt2YXJpYW50XTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZUNvbnZlcnRlZDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IHZhcmlhbnRUZXh0W1dHX1VTRVJfVkFSSUFOVCBhcyBzdHJpbmddO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IG11bHRpVGl0bGU6IHN0cmluZ1tdID0gW107XG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3Qga2V5IGluIHZhcmlhbnRUZXh0KSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHZhcmlhbnRUZXh0LCBrZXkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gdmFyaWFudFRleHRba2V5XTtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGV4dCA9PT0gbnVsbCB8fCB0ZXh0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IHRleHRWYXJpYW50W3RleHRdO1xuXHRcdFx0XHRcdFx0XHRcdGlmICghdmFyaWFudHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiB2YXJpYW50cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudFRleHRbdmFyaWFudF0gPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzTmFtZTogc3RyaW5nID0gdmFyaWFudHNcblx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKHZhcmlhbnQ6IHN0cmluZyk6IHN0cmluZyA9PiBgLXtSfHt7TWVkaWFXaWtpOlZhcmlhbnRuYW1lLSR7dmFyaWFudH19fX0tYClcblx0XHRcdFx0XHRcdFx0XHRcdC5qb2luKCfjgIEnKTtcblx0XHRcdFx0XHRcdFx0XHRtdWx0aVRpdGxlW211bHRpVGl0bGUubGVuZ3RoXSA9IGAke3ZhcmlhbnRzTmFtZX3vvJote1J8JHt0ZXh0fX0tYDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IG11bHRpVGl0bGUuam9pbign77ybJyk7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGBcXG4qIOWunumZheagh+mimOS4uu+8mi17Unwke2FjdHVhbFRpdGxlfX0t77yb5b2T5YmN5pi+56S65Li677yaLXtSfCR7dGl0bGVDb252ZXJ0ZWR9fS1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0XHRcdHRpdGxlRGVmZXJyZWRcblx0XHRcdFx0LnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGNvbnN0ICRub3RlVEFncm91cHM6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtZ3JvdXAgPiAqW2RhdGEtbm90ZXRhLWdyb3VwXScpO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbm90ZVRBZ3JvdXBzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRcdFx0XHRcdHN3aXRjaCAoJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAtc291cmNlJykpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAndGVtcGxhdGUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGB7e0NHcm91cC8keyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdtb2R1bGUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGB7eyNpbnZva2U6Q0dyb3VwVmlld2VyfGRpYWxvZ3wkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdub25lJzpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgOyDmnKzmlofkvb/nlKjnmoTlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCd5bCa5pyq5Yib5bu6XFxuYDtcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgKiB7e2VkaXR8TW9kdWxlOkNHcm91cC8keyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fOWIm+W7uuWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDsg5pyq55+l5YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAneadpea6kOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAtc291cmNlJyl94oCdXFxuYDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCAkbm90ZVRBbG9jYWw6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtbG9jYWwnKTtcblx0XHRcdFx0XHRpZiAoJG5vdGVUQWxvY2FsLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj57e2VkaXR8JHthY3R1YWxUaXRsZX18c2VjdGlvbj0wfX08L3NwYW4+XFxuYDtcblx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICc7IOacrOaWh+S9v+eUqFtbSGVscDrlrZfor43ovazmjaLlpITnkIZ85YWo5paH5omL5bel6L2s5o2iXV1cXG4nO1xuXG5cdFx0XHRcdFx0XHRjb25zdCAkbm90ZVRBbG9jYWxzID0gJG5vdGVUQWxvY2FsLmNoaWxkcmVuKCcqW2RhdGEtbm90ZXRhLWNvZGVdJyk7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJG5vdGVUQWxvY2Fscykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblxuXHRcdFx0XHRcdFx0XHRsZXQgbG9jYWxEZXNjOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1kZXNjJyk7XG5cdFx0XHRcdFx0XHRcdGlmIChsb2NhbERlc2MpIHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhbERlc2MgPSBg77yIJHtsb2NhbERlc2N977yJYDtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhbERlc2MgPSAnJztcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGxvY2FsQ29udjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtY29kZScpO1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgKiAte0R8JHtsb2NhbENvbnZ9fS0ke2xvY2FsRGVzY33lvZPliY3mmL7npLrkuLrvvJoteyR7bG9jYWxDb252fX0tXFxuYDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR3aWtpdGV4dCArPSAne3tub3RlVEEvZm9vdGVyfX1cXG4nO1xuXG5cdFx0XHRcdFx0Tm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCA9IHdpa2l0ZXh0O1xuXG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKHdpa2l0ZXh0KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBkb0V4ZWN1dGUoKSB7XG5cdFx0XHRpZiAodGhpcy5kYXRhSXNMb2FkZWQpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCkucmVzb2x2ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRyZWFsQ29udGVudC5lbXB0eSgpLmFwcGVuZCg8cD57Z2V0TWVzc2FnZSgnTG9hZGluZycpfTwvcD4pO1xuXG5cdFx0XHRyZXR1cm4gTm90ZVRBVmlld2VyLmdldE5vdGVUQVBhcnNlVGV4dCgpXG5cdFx0XHRcdC50aGVuKCh3aWtpdGV4dDogQXBpUmVzcG9uc2UpID0+XG5cdFx0XHRcdFx0cGFyc2VXaWtpdGV4dCh3aWtpdGV4dCBhcyBBcGlQYXJzZVJlc3BvbnNlLCB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ1RlbXBsYXRlOkNHcm91cC8tJyxcblx0XHRcdFx0XHRcdHZhcmlhbnQ6IFdHX1VTRVJfVkFSSUFOVCBhcyBzdHJpbmcsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHQudGhlbigocGFyc2VkSHRtbDogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHR0aGlzLiRyZWFsQ29udGVudFxuXHRcdFx0XHRcdFx0LmVtcHR5KClcblx0XHRcdFx0XHRcdC5odG1sKHBhcnNlZEh0bWwgYXMgQXBpUGFyc2VSZXNwb25zZSlcblx0XHRcdFx0XHRcdC5hZGRDbGFzcyhgJHtQT1JUTEVUX0NMQVNTfS1vdXRwdXRgKTtcblxuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmZpbmQoJy5tdy1jb2xsYXBzaWJsZScpIGFzIEpRdWVyeSAmIHttYWtlQ29sbGFwc2libGU6ICgpID0+IEpRdWVyeX1cblx0XHRcdFx0XHQpLm1ha2VDb2xsYXBzaWJsZSgpO1xuXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVTaXplKCk7XG5cdFx0XHRcdFx0dGhpcy5kYXRhSXNMb2FkZWQgPSB0cnVlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvciB8IEVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgQXBpUmV0cnlGYWlsRXJyb3IpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBPTy51aS5FcnJvcihlcnJvci50b0pRdWVyeSgpLCB7XG5cdFx0XHRcdFx0XHRcdHJlY292ZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBPTy51aS5FcnJvcihTdHJpbmcoZXJyb3IpLCB7XG5cdFx0XHRcdFx0XHRcdHJlY292ZXJhYmxlOiBmYWxzZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBkb0V4ZWN1dGVXcmFwKCkge1xuXHRcdFx0aWYgKHRoaXMuZXhlY3V0ZVByb21pc2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmV4ZWN1dGVQcm9taXNlID0gdGhpcy5kb0V4ZWN1dGUoKTtcblx0XHRcdFx0ZGVsZXRlIE5vdGVUQVZpZXdlci5sYXN0RXJyb3I7XG5cblx0XHRcdFx0Y29uc3QgZXhlY3V0ZURlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblx0XHRcdFx0dm9pZCAodGhpcy5leGVjdXRlUHJvbWlzZSBhcyBKUXVlcnkuUHJvbWlzZTxBcGlSZXNwb25zZT4pXG5cdFx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCBleGVjdXRlRGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yOiBFcnJvciB8IE9PLnVpLkVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBPTy51aS5FcnJvcikge1xuXHRcdFx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubGFzdEVycm9yID0gZXJyb3I7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2b2lkIGV4ZWN1dGVEZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFsd2F5cygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5leGVjdXRlUHJvbWlzZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gZXhlY3V0ZURlZmVycmVkO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cdFx0XHR2b2lkICh0aGlzLmV4ZWN1dGVQcm9taXNlIGFzIEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPilcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEVycm9yIHwgT08udWkuRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBPTy51aS5FcnJvcikge1xuXHRcdFx0XHRcdFx0Tm90ZVRBVmlld2VyLmxhc3RFcnJvciA9IGVycm9yO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5leGVjdXRlUHJvbWlzZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9XG5cdH1cblxuXHROb3RlVEFWaWV3ZXIuc3RhdGljID0ge1xuXHRcdC4uLk9PLnVpLlByb2Nlc3NEaWFsb2cuc3RhdGljLFxuXHR9O1xuXHROb3RlVEFWaWV3ZXIuc3RhdGljLm5hbWUgPSBgTm90ZVRBVmlld2VyLSR7aGFzaH1gO1xuXHROb3RlVEFWaWV3ZXIuc3RhdGljLnRpdGxlID0gZ2V0TWVzc2FnZSgnVGl0bGUnKTtcblx0Tm90ZVRBVmlld2VyLnN0YXRpYy5hY3Rpb25zID0gW1xuXHRcdHtcblx0XHRcdGxhYmVsOiBtdy5tc2coJ29vdWktZGlhbG9nLXByb2Nlc3MtZGlzbWlzcycpLFxuXHRcdFx0ZmxhZ3M6ICdzYWZlJyxcblx0XHR9LFxuXHRdO1xuXG5cdGNvbnN0IHZpZXdlcjogTm90ZVRBVmlld2VyID0gbmV3IE5vdGVUQVZpZXdlcigpO1xuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW3ZpZXdlcl0pO1xuXHR2aWV3ZXJNYXAuc2V0KGhhc2gsIHZpZXdlcik7XG5cblx0cmV0dXJuIHZpZXdlcjtcbn07XG5cbmNvbnN0IHJlc2V0QWxsVmlld2VyID0gKCk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IHZpZXdlciBvZiB2aWV3ZXJNYXAudmFsdWVzKCkpIHtcblx0XHR2aWV3ZXIuZGVzdHJveSgpO1xuXHR9XG5cdHZpZXdlck1hcC5jbGVhcigpO1xuXHR2b2lkIHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG59O1xuXG5leHBvcnQge2dldFZpZXdlciwgcmVzZXRBbGxWaWV3ZXJ9O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5mdW5jdGlvbiBhc3NlcnQ8VD4odmFsdWU6IFQgfCB1bmRlZmluZWQsIHZhbHVlTmFtZTogc3RyaW5nKTogYXNzZXJ0cyB2YWx1ZSB7XG5cdGlmICghdmFsdWUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEFzc2VydCBGYWlsLCAke3ZhbHVlTmFtZX0gPT0gZmFsc2UuYCk7XG5cdH1cbn1cblxuZXhwb3J0IHthc3NlcnR9O1xuIiwgImltcG9ydCB7dHlwZSBnZXRWaWV3ZXJ9IGZyb20gJy4vdmlld2VyJztcblxuY29uc3Qgdmlld2VyTWFwID0gbmV3IE1hcDxzdHJpbmcsIFJldHVyblR5cGU8dHlwZW9mIGdldFZpZXdlcj4+KCk7XG5cbmV4cG9ydCB7dmlld2VyTWFwfTtcbiIsICJjb25zdCBpbml0V2luZG93TWFuYWdlciA9ICgpOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0+IHtcblx0cmV0dXJuIG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG59O1xuXG5jb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gaW5pdFdpbmRvd01hbmFnZXIoKTtcblxuZXhwb3J0IHt3aW5kb3dNYW5hZ2VyfTtcbiIsICJpbXBvcnQge1BPUlRMRVRfQ0xBU1MsIFdHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG5sZXQgcG9ydGxldElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmNvbnN0IGluaXRHbG9iYWxNZXRob2RzID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHR5cGVvZiBnbG9iYWxNZXRob2RzID0+IHtcblx0Y29uc3QgZ2xvYmFsTWV0aG9kczoge1xuXHRcdGluaXQoKTogdm9pZDtcblx0XHRkZUluaXQoKTogdm9pZDtcblx0fSA9IHtcblx0XHRpbml0KCkge1xuXHRcdFx0LyogZmFrZSAqL1xuXHRcdH0sXG5cdFx0ZGVJbml0KCkge1xuXHRcdFx0LyogZmFrZSAqL1xuXHRcdH0sXG5cdH07XG5cblx0aWYgKFdHX1NLSU4gPT09ICd2ZWN0b3InKSB7XG5cdFx0cG9ydGxldElkID0gJ3Atbm90ZVRBJztcblxuXHRcdGxldCAkbm90ZVRBVGFiOiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cdFx0Z2xvYmFsTWV0aG9kcy5pbml0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCRub3RlVEFUYWIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8vLy8vLy8vLy8vLy8vLy8vL1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBAdG9kbyByZXBsYWNlIHdpdGggYG13LnV0aWwuYWRkUG9ydGxldGAgYWZ0ZXIgdXBncmFkZSB0byBNZWRpYVdpa2kgMS40MStcblx0XHRcdCAqIEBleGFtcGxlXG5cdFx0XHQgKiBjb25zdCBub3RlVEFUYWI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldChQT1JUTEVUX0lEKTtcblx0XHRcdCAqIGlmICghbm90ZVRBVGFiKSB7XG5cdFx0XHQgKiAgICAgcmV0dXJuO1xuXHRcdFx0ICogfVxuXHRcdFx0ICogJG5vdGVUQVRhYiA9ICQobm90ZVRBVGFiKTtcblx0XHRcdCAqICRub3RlVEFUYWIucmVtb3ZlQ2xhc3MoYG13LXBvcnRsZXQtJHtQT1JUTEVUX0lEfWApLmFkZENsYXNzKFtgbXctcG9ydGxldC0ke1BPUlRMRVRfSUQucmVwbGFjZSgncC0nLCAnJyl9YCwgJ3ZlY3Rvci1tZW51LXRhYnMnXSk7XG5cdFx0XHQgKi9cblx0XHRcdGNvbnN0IG5vdGVUQVRhYiA9IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1sndmVjdG9yLW1lbnUnLCAndmVjdG9yLW1lbnUtdGFicycsICd2ZWN0b3ItbWVudS10YWJzLWxlZ2FjeSddfSBpZD17cG9ydGxldElkfT5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PHVsIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHRcdC8vLy8vLy8vLy8vLy8vLy8vLy9cblx0XHRcdCRub3RlVEFUYWIgPSAkKG5vdGVUQVRhYikgYXMgSlF1ZXJ5O1xuXHRcdFx0JGJvZHkuZmluZCgnI3AtdmFyaWFudHMnKS5hZnRlcigkbm90ZVRBVGFiKTtcblx0XHR9O1xuXHRcdGdsb2JhbE1ldGhvZHMuZGVJbml0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCEkbm90ZVRBVGFiKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRub3RlVEFUYWIuZmluZCgndWwnKS5lbXB0eSgpO1xuXHRcdFx0aWYgKHBvcnRsZXRJZCkge1xuXHRcdFx0XHRtdy51dGlsLmhpZGVQb3J0bGV0KHBvcnRsZXRJZCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fSBlbHNlIGlmIChXR19TS0lOID09PSAndmVjdG9yLTIwMjInKSB7XG5cdFx0cG9ydGxldElkID0gJ3AtYXNzb2NpYXRlZC1wYWdlcyc7XG5cblx0XHRnbG9iYWxNZXRob2RzLmRlSW5pdCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdCRib2R5LmZpbmQoUE9SVExFVF9DTEFTUykucmVtb3ZlKCk7XG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBnbG9iYWxNZXRob2RzO1xufTtcblxuZXhwb3J0IHtwb3J0bGV0SWQsIGluaXRHbG9iYWxNZXRob2RzfTtcbiIsICJpbXBvcnQge2dldFZpZXdlciwgcmVzZXRBbGxWaWV3ZXJ9IGZyb20gJy4vbW9kdWxlcy92aWV3ZXInO1xuaW1wb3J0IHtpbml0R2xvYmFsTWV0aG9kcywgcG9ydGxldElkfSBmcm9tICcuL21vZHVsZXMvaW5pdEdsb2JhbE1ldGhvZHMnO1xuaW1wb3J0IHtjaGVja0ExMXlDb25maXJtS2V5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZW5lcmF0ZVBvcnRsZXRMaW5rfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVBvcnRsZXRMaW5rJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyJztcblxubGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKCgkY29udGVudCk6IHZvaWQgPT4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkY29udGVudC5wYXJlbnRzKCdib2R5Jyk7XG5cblx0aWYgKCFpc0luaXQpIHtcblx0XHRpc0luaXQgPSB0cnVlO1xuXHRcdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuYXBwZW5kVG8oJGJvZHkpO1xuXHR9XG5cblx0cmVzZXRBbGxWaWV3ZXIoKTtcblxuXHRjb25zdCBnbG9iYWxNZXRob2RzID0gaW5pdEdsb2JhbE1ldGhvZHMoJGJvZHkpO1xuXHRnbG9iYWxNZXRob2RzLmRlSW5pdCgpO1xuXHRnbG9iYWxNZXRob2RzLmluaXQoKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZCgnLm13LWluZGljYXRvcltpZF49bXctaW5kaWNhdG9yLW5vdGVUQS1dJykpIHtcblx0XHRjb25zdCBoYXNoOiBzdHJpbmcgPSBlbGVtZW50LmlkLnJlcGxhY2UoL15tdy1pbmRpY2F0b3Itbm90ZVRBLS8sICcnKTtcblxuXHRcdGxldCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRpZiAocG9ydGxldElkKSB7XG5cdFx0XHQkZWxlbWVudC5oaWRlKCk7XG5cblx0XHRcdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5IHwgdW5kZWZpbmVkID0gZ2VuZXJhdGVQb3J0bGV0TGluayhoYXNoKTtcblx0XHRcdGlmICghJHBvcnRsZXRMaW5rKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQkZWxlbWVudCA9ICRwb3J0bGV0TGluaztcblx0XHR9XG5cblx0XHRjb25zdCBvcGVuZXJMaXN0ZW5lciA9IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aWYgKCFjaGVja0ExMXlDb25maXJtS2V5KGV2ZW50KSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRnZXRWaWV3ZXIoJGJvZHksIGhhc2gpLm9wZW4oKTtcblx0XHR9O1xuXHRcdCRlbGVtZW50Lm9uKCdjbGljaycsIG9wZW5lckxpc3RlbmVyKTtcblx0XHQkZWxlbWVudC5vbigna2V5ZG93bicsIG9wZW5lckxpc3RlbmVyKTtcblx0fVxufSk7XG4iLCAiaW1wb3J0IHtQT1JUTEVUX0NMQVNTfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge3BvcnRsZXRJZH0gZnJvbSAnLi4vaW5pdEdsb2JhbE1ldGhvZHMnO1xuXG5jb25zdCBnZW5lcmF0ZVBvcnRsZXRMaW5rID0gKGhhc2g6IHN0cmluZyk6IEpRdWVyeSB8IHVuZGVmaW5lZCA9PiB7XG5cdGlmICghcG9ydGxldElkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgJ+axiS/mvKInLCBgY2Etbm90ZVRBLSR7aGFzaH1gKTtcblx0aWYgKCFwb3J0bGV0TGluaykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHN0eWxlID0ge1xuXHRcdGhlaWdodDogJzg1JScsXG5cdFx0cGFkZGluZzogJzFweCAzcHgnLFxuXHR9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuXG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5ID0gJChwb3J0bGV0TGluaykuYWRkQ2xhc3MoUE9SVExFVF9DTEFTUyk7XG5cdCRwb3J0bGV0TGlua1xuXHRcdC5maW5kKCdhJylcblx0XHQuZW1wdHkoKVxuXHRcdC5hcHBlbmQoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHQuLi5zdHlsZSxcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZDNlM2Y0Jyxcblx0XHRcdFx0XHRcdGNvbG9yOiAnIzAwMCcsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsn5rGJJ31cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHQuLi5zdHlsZSxcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZTllOWU5Jyxcblx0XHRcdFx0XHRcdGNvbG9yOiAnIzQzNDM0MycsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsn5ryiJ31cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblxuXHRyZXR1cm4gJHBvcnRsZXRMaW5rO1xufTtcblxu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RixFQUFBLEdBQUFDLFFBQTZFO0FBQUEsWUFBbEVuSCxVQUFBbU0sT0FBQXJKO0FBQ1YsWUFBTVcsT0FBZXpELFFBQVE2SyxHQUFHekssUUFBUSx5QkFBeUIsRUFBRTtBQUVuRSxVQUFJUyxXQUFtQkMsRUFBRWQsT0FBTztBQUNoQyxVQUFJc0ssV0FBVztBQUNkekosaUJBQVN1TCxLQUFLO0FBRWQsY0FBTVYsZUFBbUNOLG9CQUFvQjNILElBQUk7QUFDakUsWUFBSSxDQUFDaUksY0FBYztBQUNsQjtRQUNEO0FBRUE3SyxtQkFBVzZLO01BQ1o7QUFFQSxZQUFNVyxpQkFBa0JDLFdBQXlEO0FBQ2hGQSxjQUFNQyxlQUFlO0FBQ3JCLFlBQUksRUFBQSxHQUFDckIsbUJBQUFzQixxQkFBb0JGLEtBQUssR0FBRztBQUNoQztRQUNEO0FBQ0EvSSxrQkFBVUMsT0FBT0MsSUFBSSxFQUFFZ0osS0FBSztNQUM3QjtBQUNBNUwsZUFBUzZMLEdBQUcsU0FBU0wsY0FBYztBQUNuQ3hMLGVBQVM2TCxHQUFHLFdBQVdMLGNBQWM7SUFDdEM7RUFBQSxTQUFBOUUsS0FBQTtBQUFBMkUsZUFBQTFFLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUEyRSxlQUFBekUsRUFBQTtFQUFBO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQXBpUmV0cnlGYWlsRXJyb3IiLCAibG9jYWxpemUiLCAiZW4iLCAiTG9hZGluZyIsICJUaXRsZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiRXJyb3IiLCAiZXJyb3JzIiwgImNvbnN0cnVjdG9yIiwgImNvbmNhdCIsICJsZW5ndGgiLCAibmFtZSIsICJ0b0pRdWVyeSIsICJlcnJvckNvdW50IiwgImVsZW1lbnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJyZXBsYWNlIiwgInRvU3RyaW5nIiwgInJlZHVjZSIsICJlcnJvciIsICJpbmRleCIsICJzcGxpdCIsICJhY2N1bXVsYXRvciIsICJsaW5lIiwgIm51bWJlciIsICIkZWxlbWVudCIsICIkIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAicGFyc2VXaXRoUmV0cnkiLCAiYXJncyIsICJjb3VudCIsICJwcmV2aW91c0Vycm9ycyIsICJEZWZlcnJlZCIsICJyZWplY3QiLCAiZGVmZXJyZWQiLCAicGFyc2UiLCAidGhlbiIsICJyZXNwb25zZSIsICJyZXNvbHZlIiwgImNhdGNoIiwgImNvbnNvbGUiLCAic3RhY2siLCAiU3RyaW5nIiwgIm5ld1Jlc3BvbnNlIiwgIm5ld0Vycm9yIiwgInBhcnNlV2lraXRleHQiLCAiUE9SVExFVF9DTEFTUyIsICJXR19QQUdFX05BTUUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19TS0lOIiwgIldHX1VTRVJfVkFSSUFOVCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYXNzZXJ0IiwgInZhbHVlIiwgInZhbHVlTmFtZSIsICJ2aWV3ZXJNYXAiLCAiTWFwIiwgImluaXRXaW5kb3dNYW5hZ2VyIiwgIk9PIiwgInVpIiwgIldpbmRvd01hbmFnZXIiLCAid2luZG93TWFuYWdlciIsICJnZXRWaWV3ZXIiLCAiJGJvZHkiLCAiaGFzaCIsICJoYXMiLCAic3RvcmVkVmlld2VyIiwgIiR0YXJnZXRFbGVtZW50IiwgImZpbmQiLCAiTm90ZVRBVmlld2VyIiwgIlByb2Nlc3NEaWFsb2ciLCAiZGF0YUlzTG9hZGVkIiwgImV4ZWN1dGVQcm9taXNlIiwgIm11dGF0aW9uT2JzZXJ2ZXIiLCAiJHJlYWxDb250ZW50IiwgImxhc3RFcnJvciIsICJub3RlVEFQYXJzZVRleHQiLCAic2l6ZSIsICJNdXRhdGlvbk9ic2VydmVyIiwgInVwZGF0ZVNpemUiLCAiYmluZCIsICJvYnNlcnZlIiwgImNoaWxkTGlzdCIsICJzdWJ0cmVlIiwgImluaXRpYWxpemUiLCAicGFuZWxMYXlvdXQiLCAiUGFuZWxMYXlvdXQiLCAiZXhwYW5kZWQiLCAicGFkZGVkIiwgImFwcGVuZFRvIiwgImdldFNldHVwUHJvY2VzcyIsICJkYXRhIiwgIm5leHQiLCAiZG9FeGVjdXRlV3JhcCIsICJleGVjdXRlQWN0aW9uIiwgImdldEFjdGlvblByb2Nlc3MiLCAiYWN0aW9uIiwgImlzTWFpbkFjdGlvbiIsICJleGVjdXRlIiwgImRlc3Ryb3kiLCAiZGlzY29ubmVjdCIsICJnZXROb3RlVEFQYXJzZVRleHQiLCAiJG5vdGVUQXRpdGxlIiwgImFjdHVhbFRpdGxlIiwgIndpa2l0ZXh0IiwgInRpdGxlRGVmZXJyZWQiLCAidGl0bGVDb252IiwgImF0dHIiLCAidGl0bGVEZXNjIiwgInRpdGxlIiwgInZhcmlhbnQiLCAicmVzdWx0SHRtbCIsICIkbXVsdGlUaXRsZSIsICJwYXJzZUhUTUwiLCAidGV4dFZhcmlhbnQiLCAidmFyaWFudFRleHQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJjaGlsZHJlbiIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAidGV4dCIsICJ0cmltIiwgInRleHRWYXJpYW50QXJyYXkiLCAiZXJyIiwgImUiLCAiZiIsICJ0aXRsZUNvbnZlcnRlZCIsICJtdWx0aVRpdGxlIiwgIk9iamVjdCIsICJoYXNPd24iLCAidmFyaWFudHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAidmFyaWFudHNOYW1lIiwgIm1hcCIsICJqb2luIiwgIiRub3RlVEFncm91cHMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiJG5vdGVUQWxvY2FsIiwgIiRub3RlVEFsb2NhbHMiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAibG9jYWxEZXNjIiwgImxvY2FsQ29udiIsICJkb0V4ZWN1dGUiLCAiZW1wdHkiLCAiYXBwZW5kIiwgInBhcnNlZEh0bWwiLCAiaHRtbCIsICJhZGRDbGFzcyIsICJtYWtlQ29sbGFwc2libGUiLCAicmVjb3ZlcmFibGUiLCAiZXhlY3V0ZURlZmVycmVkIiwgImFsd2F5cyIsICJzdGF0aWMiLCAiYWN0aW9ucyIsICJsYWJlbCIsICJtc2ciLCAiZmxhZ3MiLCAidmlld2VyIiwgImFkZFdpbmRvd3MiLCAic2V0IiwgInJlc2V0QWxsVmlld2VyIiwgIl9pdGVyYXRvcjYiLCAidmFsdWVzIiwgIl9zdGVwNiIsICJjbGVhciIsICJjbGVhcldpbmRvd3MiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgInBvcnRsZXRJZCIsICJpbml0R2xvYmFsTWV0aG9kcyIsICJnbG9iYWxNZXRob2RzIiwgImluaXQiLCAiZGVJbml0IiwgIiRub3RlVEFUYWIiLCAibm90ZVRBVGFiIiwgImlkIiwgImFmdGVyIiwgInV0aWwiLCAiaGlkZVBvcnRsZXQiLCAicmVtb3ZlIiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAiZ2VuZXJhdGVQb3J0bGV0TGluayIsICJwb3J0bGV0TGluayIsICJhZGRQb3J0bGV0TGluayIsICJzdHlsZSIsICJoZWlnaHQiLCAicGFkZGluZyIsICIkcG9ydGxldExpbmsiLCAiYmFja2dyb3VuZCIsICJjb2xvciIsICJpc0luaXQiLCAiaG9vayIsICJhZGQiLCAiJGNvbnRlbnQiLCAicGFyZW50cyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJoaWRlIiwgIm9wZW5lckxpc3RlbmVyIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAib3BlbiIsICJvbiJdCn0K
