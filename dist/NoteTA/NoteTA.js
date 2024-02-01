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
            wikitext += "\n".concat(multiTitle.join("\n** "));
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
        if (!(0, import_ext_gadget7.checkA11yConfirmKey)(event)) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3IudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Ob3RlVEEvb3B0aW9ucy5qc29uIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9hcGkudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3BhcnNlV2lraXRleHQudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy92aWV3ZXIudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL2Fzc2VydC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdFZpZXdNYXAudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pbml0R2xvYmFsTWV0aG9kcy50c3giLCAic3JjL05vdGVUQS9Ob3RlVEEudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVQb3J0bGV0TGluay50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNsYXNzIEFwaVJldHJ5RmFpbEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRwcml2YXRlIGVycm9yczogc3RyaW5nW107XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKGVycm9yczogc3RyaW5nW10pIHtcblx0XHRzdXBlcihgQXBpIGNhbGxzIGZhaWxlZCAke2Vycm9ycy5sZW5ndGh9IHRpbWUocykgaW4gYSByb3cuYCk7XG5cdFx0dGhpcy5uYW1lID0gJ0FwaVJldHJ5RmFpbEVycm9yJztcblx0XHR0aGlzLmVycm9ycyA9IGVycm9ycztcblx0fVxuXG5cdHB1YmxpYyB0b0pRdWVyeSgpOiBKUXVlcnkge1xuXHRcdGNvbnN0IGVycm9yQ291bnQ6IG51bWJlciA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcblxuXHRcdGNvbnN0IGVsZW1lbnQgPSAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+XG5cdFx0XHRcdDxwPntnZXRNZXNzYWdlKCdBcGlSZXRyeUZhaWxFcnJvcicpLnJlcGxhY2UoL1xcJDEvZywgZXJyb3JDb3VudC50b1N0cmluZygpKX08L3A+XG5cdFx0XHRcdDxvbD5cblx0XHRcdFx0XHR7dGhpcy5lcnJvcnMucmVkdWNlKFxuXHRcdFx0XHRcdFx0KGVycm9ycywgZXJyb3IsIGluZGV4KSA9PiBbXG5cdFx0XHRcdFx0XHRcdC4uLmVycm9ycyxcblx0XHRcdFx0XHRcdFx0PGxpIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHRcdHtlcnJvclxuXHRcdFx0XHRcdFx0XHRcdFx0LnNwbGl0KCdcXG4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnJlZHVjZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0KGFjY3VtdWxhdG9yLCBsaW5lLCBudW1iZXIpID0+IFsuLi5hY2N1bXVsYXRvciwgPHAga2V5PXtudW1iZXJ9PntsaW5lfTwvcD5dLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbXSBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXVxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9saT4sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0W10gYXMgUmVhY3QuUmVhY3RFbGVtZW50W11cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L29sPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCkgYXMgSlF1ZXJ5O1xuXG5cdFx0cmV0dXJuICRlbGVtZW50O1xuXHR9XG59XG5cbmV4cG9ydCB7QXBpUmV0cnlGYWlsRXJyb3J9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBcGlSZXRyeUZhaWxFcnJvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcGkgY2FsbHMgZmFpbGVkICQxIHRpbWUocykgaW4gYSByb3cuIEVycm9yczogJyxcblx0XHRcdCd6aC1oYW5zJzogJ0FwaSDosIPnlKjov57nu63lpLHotKUgJDEg5qyh77yMJDEg5qyh6LCD55So55qE6ZSZ6K+v5YiG5Yir5Li677yaJyxcblx0XHRcdCd6aC1oYW50JzogJ0FwaSDoqr/nlKjpgKPnuozlpLHmlZcgJDEg5qyh77yMJDEg5qyh6Kq/55So55qE6Yyv6Kqk5YiG5Yil54K677yaJyxcblx0XHR9KSxcblx0XHRMb2FkaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yqg6L294oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOi8ieWFpeKApuKApicsXG5cdFx0fSksXG5cdFx0VGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90ZVRBJyxcblx0XHRcdCd6aC1oYW5zJzogJ+Wtl+ivjei9rOaNoicsXG5cdFx0XHQnemgtaGFudCc6ICflrZfoqZ7ovYnmj5snLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjEuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBOb3RlVEEvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxudHlwZSBBcGlQYXJzZSA9IG13LkFwaVsncGFyc2UnXTtcbnR5cGUgQXBpUGFyc2VQYXJhbWV0ZXJzID0gUGFyYW1ldGVyczxBcGlQYXJzZT47XG50eXBlIEFwaVBhcnNlUmVzcG9uc2UgPSBBd2FpdGVkPFJldHVyblR5cGU8QXBpUGFyc2U+PjtcbnR5cGUgQXBpUmVzcG9uc2UgPSBBcGlQYXJzZVJlc3BvbnNlIHwgQXBpUmV0cnlGYWlsRXJyb3I7XG5cbmNvbnN0IHBhcnNlV2l0aFJldHJ5ID0gKFxuXHRhcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMsXG5cdGNvdW50OiBudW1iZXIgPSAzLFxuXHRwcmV2aW91c0Vycm9yczogc3RyaW5nW10gPSBbXVxuKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiA9PiB7XG5cdGlmICghY291bnQpIHtcblx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXRyeUZhaWxFcnJvcj4oKS5yZWplY3QobmV3IEFwaVJldHJ5RmFpbEVycm9yKHByZXZpb3VzRXJyb3JzKSk7XG5cdH1cblxuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0dm9pZCBhcGlcblx0XHQucGFyc2UoLi4uYXJncylcblx0XHQudGhlbigocmVzcG9uc2U6IEFwaVBhcnNlUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yPzogRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG5cdFx0XHRpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnc3RhY2snIGluIGVycm9yKSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBlcnJvci5zdGFjaztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBTdHJpbmcoZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZVdpdGhSZXRyeShhcmdzLCAtLWNvdW50LCBwcmV2aW91c0Vycm9ycylcblx0XHRcdFx0LnRoZW4oKG5ld1Jlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShuZXdSZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgobmV3RXJyb3I/OiBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KG5ld0Vycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIGRlZmVycmVkO1xufTtcblxuY29uc3QgcGFyc2VXaWtpdGV4dCA9ICguLi5hcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+ID0+IHtcblx0cmV0dXJuIHBhcnNlV2l0aFJldHJ5KGFyZ3MpO1xufTtcblxuZXhwb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9O1xuIiwgImNvbnN0IFBPUlRMRVRfQ0xBU1M6IHN0cmluZyA9ICd4LW5vdGVUQS12aWV3ZXInO1xuXG5jb25zdCBXR19QQUdFX05BTUU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcbmNvbnN0IFdHX1NLSU46IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKTtcbmNvbnN0IFdHX1VTRVJfVkFSSUFOVDogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKTtcblxuZXhwb3J0IHtQT1JUTEVUX0NMQVNTLCBXR19QQUdFX05BTUUsIFdHX1NLSU4sIFdHX1VTRVJfVkFSSUFOVH07XG4iLCAiaW1wb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9IGZyb20gJy4vcGFyc2VXaWtpdGV4dCc7XG5pbXBvcnQge1BPUlRMRVRfQ0xBU1MsIFdHX1BBR0VfTkFNRSwgV0dfVVNFUl9WQVJJQU5UfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7QXBpUmV0cnlGYWlsRXJyb3J9IGZyb20gJy4vdXRpbC9BcGlSZXRyeUZhaWxFcnJvcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnLi91dGlsL2Fzc2VydCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3ZpZXdlck1hcH0gZnJvbSAnLi9pbml0Vmlld01hcCc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBnZXRWaWV3ZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+LCBoYXNoOiBzdHJpbmcpOiB0eXBlb2Ygdmlld2VyID0+IHtcblx0aWYgKHZpZXdlck1hcC5oYXMoaGFzaCkpIHtcblx0XHRjb25zdCBzdG9yZWRWaWV3ZXIgPSB2aWV3ZXJNYXAuZ2V0KGhhc2gpO1xuXHRcdGFzc2VydChzdG9yZWRWaWV3ZXIsICd2aWV3ZXInKTtcblxuXHRcdHJldHVybiBzdG9yZWRWaWV3ZXI7XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0RWxlbWVudDogSlF1ZXJ5ID0gJGJvZHkuZmluZChgI25vdGVUQS0ke2hhc2h9YCk7XG5cdGlmICghJHRhcmdldEVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBDYW4ndCBnZXQgRWxlbWVudCBcIiNub3RlVEEtJHtoYXNofVwiLmApO1xuXHR9XG5cblx0Y2xhc3MgTm90ZVRBVmlld2VyIGV4dGVuZHMgT08udWkuUHJvY2Vzc0RpYWxvZyB7XG5cdFx0cHJpdmF0ZSBkYXRhSXNMb2FkZWQ6IGJvb2xlYW47XG5cdFx0cHJpdmF0ZSBleGVjdXRlUHJvbWlzZT86IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZG9FeGVjdXRlPjtcblx0XHRwcml2YXRlIG11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG5cdFx0cHJpdmF0ZSAkcmVhbENvbnRlbnQ6IEpRdWVyeTtcblx0XHRwcml2YXRlICRib2R5OiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbGFzdEVycm9yPzogT08udWkuRXJyb3I7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbm90ZVRBUGFyc2VUZXh0OiBzdHJpbmc7XG5cblx0XHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcih7XG5cdFx0XHRcdHNpemU6ICdsYXJnZXInLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuZGF0YUlzTG9hZGVkID0gZmFsc2U7XG5cdFx0XHR0aGlzLiRyZWFsQ29udGVudCA9ICQoPGRpdiAvPikgYXMgSlF1ZXJ5O1xuXG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnVwZGF0ZVNpemUuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRyZWFsQ29udGVudC5nZXQoMCkgYXMgSFRNTEVsZW1lbnQsIHtcblx0XHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGluaXRpYWxpemUoKTogdGhpcyB7XG5cdFx0XHRzdXBlci5pbml0aWFsaXplKCk7XG5cblx0XHRcdGNvbnN0IHBhbmVsTGF5b3V0OiBPTy51aS5QYW5lbExheW91dCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmFwcGVuZFRvKHBhbmVsTGF5b3V0LiRlbGVtZW50KTtcblx0XHRcdHBhbmVsTGF5b3V0LiRlbGVtZW50LmFwcGVuZFRvKHRoaXMuJGJvZHkgYXMgSlF1ZXJ5KTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldFNldHVwUHJvY2VzcyhkYXRhOiBPTy51aS5EaWFsb2cuU2V0dXBEYXRhTWFwKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRyZXR1cm4gc3VwZXIuZ2V0U2V0dXBQcm9jZXNzKGRhdGEpLm5leHQoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR2b2lkIHRoaXMuZG9FeGVjdXRlV3JhcCgpO1xuXHRcdFx0XHR2b2lkIHRoaXMuZXhlY3V0ZUFjdGlvbignbWFpbicpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldEFjdGlvblByb2Nlc3MoYWN0aW9uPzogc3RyaW5nKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRjb25zdCBpc01haW5BY3Rpb246IGJvb2xlYW4gPSBhY3Rpb24gPT09ICdtYWluJztcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0c3VwZXJcblx0XHRcdFx0XHQuZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24pXG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzcwMzBcblx0XHRcdFx0XHQubmV4dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoaXNNYWluQWN0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmRvRXhlY3V0ZVdyYXAoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5uZXh0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChpc01haW5BY3Rpb24gJiYgTm90ZVRBVmlld2VyLmxhc3RFcnJvcikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gTm90ZVRBVmlld2VyLmxhc3RFcnJvcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBzdXBlci5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbikuZXhlY3V0ZSgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuXHRcdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBnZXROb3RlVEFQYXJzZVRleHQoKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiB7XG5cdFx0XHRpZiAoTm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZDxzdHJpbmc+KCkucmVzb2x2ZShOb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgJG5vdGVUQXRpdGxlOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLXRpdGxlJyk7XG5cdFx0XHRjb25zdCBhY3R1YWxUaXRsZTogc3RyaW5nID0gV0dfUEFHRV9OQU1FLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0XHRcdGNvbnN0IHRpdGxlRGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXG5cdFx0XHRpZiAoJG5vdGVUQXRpdGxlLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCB0aXRsZUNvbnY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRub3RlVEF0aXRsZS5hdHRyKCdkYXRhLW5vdGV0YS1jb2RlJyk7XG5cdFx0XHRcdGFzc2VydCh0aXRsZUNvbnYsICd0aXRsZUNvbnYnKTtcblxuXHRcdFx0XHRsZXQgdGl0bGVEZXNjOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkbm90ZVRBdGl0bGUuYXR0cignZGF0YS1ub3RldGEtZGVzYycpO1xuXHRcdFx0XHRpZiAodGl0bGVEZXNjKSB7XG5cdFx0XHRcdFx0dGl0bGVEZXNjID0gYO+8iCR7dGl0bGVEZXNjfe+8iWA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGl0bGVEZXNjID0gJyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aWtpdGV4dCArPSBgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodFwiPnt7ZWRpdHwke2FjdHVhbFRpdGxlfXxzZWN0aW9uPTB9fTwvc3Bhbj5cXG5gO1xuXHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlofkvb/nlKhbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOagh+mimOaJi+W3pei9rOaNol1dXFxuJztcblx0XHRcdFx0d2lraXRleHQgKz0gYCog6L2s5o2i5qCH6aKY5Li677yaLXtEfCR7dGl0bGVDb252fX0tJHt0aXRsZURlc2N9XFxuYDtcblx0XHRcdFx0d2lraXRleHQgKz0gYCog5a6e6ZmF5qCH6aKY5Li677yaLXtSfCR7YWN0dWFsVGl0bGV9fS3vvJvlvZPliY3mmL7npLrkuLrvvJote3wke3RpdGxlQ29udn19LVxcbmA7XG5cblx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlc29sdmUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhcnNlV2lraXRleHQoYHt7bm90ZVRBL211bHRpdGl0bGV8JHthY3R1YWxUaXRsZX19fWAsIHtcblx0XHRcdFx0XHR0aXRsZTogYWN0dWFsVGl0bGUsXG5cdFx0XHRcdFx0dmFyaWFudDogJ3poJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0XHQudGhlbigocmVzdWx0SHRtbDogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0ICRtdWx0aVRpdGxlOiBKUXVlcnkgPSAkKCQucGFyc2VIVE1MKHJlc3VsdEh0bWwgYXMgQXBpUGFyc2VSZXNwb25zZSkpLmZpbmQoXG5cdFx0XHRcdFx0XHRcdCcubm90ZVRBLW11bHRpdGl0bGUnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0aWYgKCRtdWx0aVRpdGxlLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlodbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOagh+mimOWPr+iDvee7j+i/h+i9rOaNol1dXFxuKiDovazmjaLmoIfpopjkuLrvvJonO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRleHRWYXJpYW50OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudFRleHQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bGw+ID0ge307XG5cblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRtdWx0aVRpdGxlLmNoaWxkcmVuKCkpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1tdWx0aXRpdGxlLXZhcmlhbnQnKTtcblx0XHRcdFx0XHRcdFx0XHRhc3NlcnQodmFyaWFudCwgJ3ZhcmlhbnQnKTtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHQ6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS50cmltKCk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudFRleHRbdmFyaWFudF0gPSB0ZXh0O1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dFZhcmlhbnRBcnJheTogc3RyaW5nW10gfCB1bmRlZmluZWQgPSB0ZXh0VmFyaWFudFt0ZXh0XTtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGV4dFZhcmlhbnRBcnJheSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dFZhcmlhbnRBcnJheVt0ZXh0VmFyaWFudEFycmF5Lmxlbmd0aF0gPSB2YXJpYW50O1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0VmFyaWFudFt0ZXh0XSA9IFt2YXJpYW50XTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZUNvbnZlcnRlZDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IHZhcmlhbnRUZXh0W1dHX1VTRVJfVkFSSUFOVCBhcyBzdHJpbmddO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IG11bHRpVGl0bGU6IHN0cmluZ1tdID0gW107XG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3Qga2V5IGluIHZhcmlhbnRUZXh0KSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHZhcmlhbnRUZXh0LCBrZXkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gdmFyaWFudFRleHRba2V5XTtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGV4dCA9PT0gbnVsbCB8fCB0ZXh0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IHRleHRWYXJpYW50W3RleHRdO1xuXHRcdFx0XHRcdFx0XHRcdGlmICghdmFyaWFudHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiB2YXJpYW50cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudFRleHRbdmFyaWFudF0gPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzTmFtZTogc3RyaW5nID0gdmFyaWFudHNcblx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKHZhcmlhbnQ6IHN0cmluZyk6IHN0cmluZyA9PiBgLXtSfHt7TWVkaWFXaWtpOlZhcmlhbnRuYW1lLSR7dmFyaWFudH19fX0tYClcblx0XHRcdFx0XHRcdFx0XHRcdC5qb2luKCfjgIEnKTtcblx0XHRcdFx0XHRcdFx0XHRtdWx0aVRpdGxlW211bHRpVGl0bGUubGVuZ3RoXSA9IGAke3ZhcmlhbnRzTmFtZX3vvJote1J8JHt0ZXh0fX0tYDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGBcXG4ke211bHRpVGl0bGUuam9pbignXFxuKiogJyl9YDtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYFxcbiog5a6e6ZmF5qCH6aKY5Li677yaLXtSfCR7YWN0dWFsVGl0bGV9fS3vvJvlvZPliY3mmL7npLrkuLrvvJote1J8JHt0aXRsZUNvbnZlcnRlZH19LVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblxuXHRcdFx0dGl0bGVEZWZlcnJlZFxuXHRcdFx0XHQudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWdyb3VwczogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS1ncm91cCA+ICpbZGF0YS1ub3RldGEtZ3JvdXBdJyk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRub3RlVEFncm91cHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0c3dpdGNoICgkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cC1zb3VyY2UnKSkge1xuXHRcdFx0XHRcdFx0XHRjYXNlICd0ZW1wbGF0ZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYHt7Q0dyb3VwLyR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ21vZHVsZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYHt7I2ludm9rZTpDR3JvdXBWaWV3ZXJ8ZGlhbG9nfCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ25vbmUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA7IOacrOaWh+S9v+eUqOeahOWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ3lsJrmnKrliJvlu7pcXG5gO1xuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIHt7ZWRpdHxNb2R1bGU6Q0dyb3VwLyR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX185Yib5bu65YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAnX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgOyDmnKrnn6XlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCd5p2l5rqQ4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cC1zb3VyY2UnKX3igJ1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0ICRub3RlVEFsb2NhbDogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS1sb2NhbCcpO1xuXHRcdFx0XHRcdGlmICgkbm90ZVRBbG9jYWwubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodFwiPnt7ZWRpdHwke2FjdHVhbFRpdGxlfXxzZWN0aW9uPTB9fTwvc3Bhbj5cXG5gO1xuXHRcdFx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paH5L2/55SoW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzlhajmlofmiYvlt6XovazmjaJdXVxcbic7XG5cblx0XHRcdFx0XHRcdGNvbnN0ICRub3RlVEFsb2NhbHMgPSAkbm90ZVRBbG9jYWwuY2hpbGRyZW4oJypbZGF0YS1ub3RldGEtY29kZV0nKTtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbm90ZVRBbG9jYWxzKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRcdGxldCBsb2NhbERlc2M6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWRlc2MnKTtcblx0XHRcdFx0XHRcdFx0aWYgKGxvY2FsRGVzYykge1xuXHRcdFx0XHRcdFx0XHRcdGxvY2FsRGVzYyA9IGDvvIgke2xvY2FsRGVzY33vvIlgO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGxvY2FsRGVzYyA9ICcnO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbG9jYWxDb252OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1jb2RlJyk7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIC17RHwke2xvY2FsQ29udn19LSR7bG9jYWxEZXNjfeW9k+WJjeaYvuekuuS4uu+8mi17JHtsb2NhbENvbnZ9fS1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICd7e25vdGVUQS9mb290ZXJ9fVxcbic7XG5cblx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0ID0gd2lraXRleHQ7XG5cblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUod2lraXRleHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvRXhlY3V0ZSgpIHtcblx0XHRcdGlmICh0aGlzLmRhdGFJc0xvYWRlZCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKS5yZXNvbHZlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmVtcHR5KCkuYXBwZW5kKDxwPntnZXRNZXNzYWdlKCdMb2FkaW5nJyl9PC9wPik7XG5cblx0XHRcdHJldHVybiBOb3RlVEFWaWV3ZXIuZ2V0Tm90ZVRBUGFyc2VUZXh0KClcblx0XHRcdFx0LnRoZW4oKHdpa2l0ZXh0OiBBcGlSZXNwb25zZSkgPT5cblx0XHRcdFx0XHRwYXJzZVdpa2l0ZXh0KHdpa2l0ZXh0IGFzIEFwaVBhcnNlUmVzcG9uc2UsIHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnVGVtcGxhdGU6Q0dyb3VwLy0nLFxuXHRcdFx0XHRcdFx0dmFyaWFudDogV0dfVVNFUl9WQVJJQU5UIGFzIHN0cmluZyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC50aGVuKChwYXJzZWRIdG1sOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdHRoaXMuJHJlYWxDb250ZW50XG5cdFx0XHRcdFx0XHQuZW1wdHkoKVxuXHRcdFx0XHRcdFx0Lmh0bWwocGFyc2VkSHRtbCBhcyBBcGlQYXJzZVJlc3BvbnNlKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKGAke1BPUlRMRVRfQ0xBU1N9LW91dHB1dGApO1xuXG5cdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuZmluZCgnLm13LWNvbGxhcHNpYmxlJykgYXMgSlF1ZXJ5ICYge21ha2VDb2xsYXBzaWJsZTogKCkgPT4gSlF1ZXJ5fVxuXHRcdFx0XHRcdCkubWFrZUNvbGxhcHNpYmxlKCk7XG5cblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVNpemUoKTtcblx0XHRcdFx0XHR0aGlzLmRhdGFJc0xvYWRlZCA9IHRydWU7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yIHwgRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBBcGlSZXRyeUZhaWxFcnJvcikge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE9PLnVpLkVycm9yKGVycm9yLnRvSlF1ZXJ5KCksIHtcblx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE9PLnVpLkVycm9yKFN0cmluZyhlcnJvciksIHtcblx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvRXhlY3V0ZVdyYXAoKSB7XG5cdFx0XHRpZiAodGhpcy5leGVjdXRlUHJvbWlzZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZXhlY3V0ZVByb21pc2UgPSB0aGlzLmRvRXhlY3V0ZSgpO1xuXHRcdFx0XHRkZWxldGUgTm90ZVRBVmlld2VyLmxhc3RFcnJvcjtcblxuXHRcdFx0XHRjb25zdCBleGVjdXRlRGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXHRcdFx0XHR2b2lkICh0aGlzLmV4ZWN1dGVQcm9taXNlIGFzIEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPilcblx0XHRcdFx0XHQudGhlbigocmVzcG9uc2U6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHR2b2lkIGV4ZWN1dGVEZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEVycm9yIHwgT08udWkuRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIE9PLnVpLkVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdE5vdGVUQVZpZXdlci5sYXN0RXJyb3IgPSBlcnJvcjtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZvaWQgZXhlY3V0ZURlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmV4ZWN1dGVQcm9taXNlO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiBleGVjdXRlRGVmZXJyZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblx0XHRcdHZvaWQgKHRoaXMuZXhlY3V0ZVByb21pc2UgYXMgSlF1ZXJ5LlByb21pc2U8QXBpUmVzcG9uc2U+KVxuXHRcdFx0XHQudGhlbigocmVzcG9uc2U6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnJvcjogRXJyb3IgfCBPTy51aS5FcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIE9PLnVpLkVycm9yKSB7XG5cdFx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubGFzdEVycm9yID0gZXJyb3I7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5hbHdheXMoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmV4ZWN1dGVQcm9taXNlO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH1cblx0fVxuXG5cdE5vdGVUQVZpZXdlci5zdGF0aWMgPSB7XG5cdFx0Li4uT08udWkuUHJvY2Vzc0RpYWxvZy5zdGF0aWMsXG5cdH07XG5cdE5vdGVUQVZpZXdlci5zdGF0aWMubmFtZSA9IGBOb3RlVEFWaWV3ZXItJHtoYXNofWA7XG5cdE5vdGVUQVZpZXdlci5zdGF0aWMudGl0bGUgPSBnZXRNZXNzYWdlKCdUaXRsZScpO1xuXHROb3RlVEFWaWV3ZXIuc3RhdGljLmFjdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0bGFiZWw6IG13Lm1zZygnb291aS1kaWFsb2ctcHJvY2Vzcy1kaXNtaXNzJyksXG5cdFx0XHRmbGFnczogJ3NhZmUnLFxuXHRcdH0sXG5cdF07XG5cblx0Y29uc3Qgdmlld2VyOiBOb3RlVEFWaWV3ZXIgPSBuZXcgTm90ZVRBVmlld2VyKCk7XG5cdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbdmlld2VyXSk7XG5cdHZpZXdlck1hcC5zZXQoaGFzaCwgdmlld2VyKTtcblxuXHRyZXR1cm4gdmlld2VyO1xufTtcblxuY29uc3QgcmVzZXRBbGxWaWV3ZXIgPSAoKTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3Qgdmlld2VyIG9mIHZpZXdlck1hcC52YWx1ZXMoKSkge1xuXHRcdHZpZXdlci5kZXN0cm95KCk7XG5cdH1cblx0dmlld2VyTWFwLmNsZWFyKCk7XG5cdHZvaWQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcbn07XG5cbmV4cG9ydCB7Z2V0Vmlld2VyLCByZXNldEFsbFZpZXdlcn07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmZ1bmN0aW9uIGFzc2VydDxUPih2YWx1ZTogVCB8IHVuZGVmaW5lZCwgdmFsdWVOYW1lOiBzdHJpbmcpOiBhc3NlcnRzIHZhbHVlIHtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgQXNzZXJ0IEZhaWwsICR7dmFsdWVOYW1lfSA9PSBmYWxzZS5gKTtcblx0fVxufVxuXG5leHBvcnQge2Fzc2VydH07XG4iLCAiaW1wb3J0IHt0eXBlIGdldFZpZXdlcn0gZnJvbSAnLi92aWV3ZXInO1xuXG5jb25zdCB2aWV3ZXJNYXAgPSBuZXcgTWFwPHN0cmluZywgUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Vmlld2VyPj4oKTtcblxuZXhwb3J0IHt2aWV3ZXJNYXB9O1xuIiwgImNvbnN0IGluaXRXaW5kb3dNYW5hZ2VyID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIgPT4ge1xuXHRyZXR1cm4gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcbn07XG5cbmNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXG5leHBvcnQge3dpbmRvd01hbmFnZXJ9O1xuIiwgImltcG9ydCB7UE9SVExFVF9DTEFTUywgV0dfU0tJTn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbmxldCBwb3J0bGV0SWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuY29uc3QgaW5pdEdsb2JhbE1ldGhvZHMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdHlwZW9mIGdsb2JhbE1ldGhvZHMgPT4ge1xuXHRjb25zdCBnbG9iYWxNZXRob2RzOiB7XG5cdFx0aW5pdCgpOiB2b2lkO1xuXHRcdGRlSW5pdCgpOiB2b2lkO1xuXHR9ID0ge1xuXHRcdGluaXQoKSB7XG5cdFx0XHQvKiBmYWtlICovXG5cdFx0fSxcblx0XHRkZUluaXQoKSB7XG5cdFx0XHQvKiBmYWtlICovXG5cdFx0fSxcblx0fTtcblxuXHRpZiAoV0dfU0tJTiA9PT0gJ3ZlY3RvcicpIHtcblx0XHRwb3J0bGV0SWQgPSAncC1ub3RlVEEnO1xuXG5cdFx0bGV0ICRub3RlVEFUYWI6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblx0XHRnbG9iYWxNZXRob2RzLmluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoJG5vdGVUQVRhYikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vXG5cdFx0XHQvKipcblx0XHRcdCAqIEB0b2RvIHJlcGxhY2Ugd2l0aCBgbXcudXRpbC5hZGRQb3J0bGV0YCBhZnRlciB1cGdyYWRlIHRvIE1lZGlhV2lraSAxLjQxK1xuXHRcdFx0ICogQGV4YW1wbGVcblx0XHRcdCAqIGNvbnN0IG5vdGVUQVRhYjogSFRNTEVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0KFBPUlRMRVRfSUQpO1xuXHRcdFx0ICogaWYgKCFub3RlVEFUYWIpIHtcblx0XHRcdCAqICAgICByZXR1cm47XG5cdFx0XHQgKiB9XG5cdFx0XHQgKiAkbm90ZVRBVGFiID0gJChub3RlVEFUYWIpO1xuXHRcdFx0ICogJG5vdGVUQVRhYi5yZW1vdmVDbGFzcyhgbXctcG9ydGxldC0ke1BPUlRMRVRfSUR9YCkuYWRkQ2xhc3MoW2Btdy1wb3J0bGV0LSR7UE9SVExFVF9JRC5yZXBsYWNlKCdwLScsICcnKX1gLCAndmVjdG9yLW1lbnUtdGFicyddKTtcblx0XHRcdCAqL1xuXHRcdFx0Y29uc3Qgbm90ZVRBVGFiID0gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Wyd2ZWN0b3ItbWVudScsICd2ZWN0b3ItbWVudS10YWJzJywgJ3ZlY3Rvci1tZW51LXRhYnMtbGVnYWN5J119IGlkPXtwb3J0bGV0SWR9PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8dWwgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdFx0Ly8vLy8vLy8vLy8vLy8vLy8vL1xuXHRcdFx0JG5vdGVUQVRhYiA9ICQobm90ZVRBVGFiKSBhcyBKUXVlcnk7XG5cdFx0XHQkYm9keS5maW5kKCcjcC12YXJpYW50cycpLmFmdGVyKCRub3RlVEFUYWIpO1xuXHRcdH07XG5cdFx0Z2xvYmFsTWV0aG9kcy5kZUluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoISRub3RlVEFUYWIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0JG5vdGVUQVRhYi5maW5kKCd1bCcpLmVtcHR5KCk7XG5cdFx0XHRpZiAocG9ydGxldElkKSB7XG5cdFx0XHRcdG13LnV0aWwuaGlkZVBvcnRsZXQocG9ydGxldElkKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9IGVsc2UgaWYgKFdHX1NLSU4gPT09ICd2ZWN0b3ItMjAyMicpIHtcblx0XHRwb3J0bGV0SWQgPSAncC1hc3NvY2lhdGVkLXBhZ2VzJztcblxuXHRcdGdsb2JhbE1ldGhvZHMuZGVJbml0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0JGJvZHkuZmluZChQT1JUTEVUX0NMQVNTKS5yZW1vdmUoKTtcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdsb2JhbE1ldGhvZHM7XG59O1xuXG5leHBvcnQge3BvcnRsZXRJZCwgaW5pdEdsb2JhbE1ldGhvZHN9O1xuIiwgImltcG9ydCB7Z2V0Vmlld2VyLCByZXNldEFsbFZpZXdlcn0gZnJvbSAnLi9tb2R1bGVzL3ZpZXdlcic7XG5pbXBvcnQge2luaXRHbG9iYWxNZXRob2RzLCBwb3J0bGV0SWR9IGZyb20gJy4vbW9kdWxlcy9pbml0R2xvYmFsTWV0aG9kcyc7XG5pbXBvcnQge2NoZWNrQTExeUNvbmZpcm1LZXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dlbmVyYXRlUG9ydGxldExpbmt9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dlbmVyYXRlUG9ydGxldExpbmsnO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXInO1xuXG5sZXQgaXNJbml0OiBib29sZWFuID0gZmFsc2U7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICRjb250ZW50LnBhcmVudHMoJ2JvZHknKTtcblxuXHRpZiAoIWlzSW5pdCkge1xuXHRcdGlzSW5pdCA9IHRydWU7XG5cdFx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cdH1cblxuXHRyZXNldEFsbFZpZXdlcigpO1xuXG5cdGNvbnN0IGdsb2JhbE1ldGhvZHMgPSBpbml0R2xvYmFsTWV0aG9kcygkYm9keSk7XG5cdGdsb2JhbE1ldGhvZHMuZGVJbml0KCk7XG5cdGdsb2JhbE1ldGhvZHMuaW5pdCgpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCcubXctaW5kaWNhdG9yW2lkXj1tdy1pbmRpY2F0b3Itbm90ZVRBLV0nKSkge1xuXHRcdGNvbnN0IGhhc2g6IHN0cmluZyA9IGVsZW1lbnQuaWQucmVwbGFjZSgvXm13LWluZGljYXRvci1ub3RlVEEtLywgJycpO1xuXG5cdFx0bGV0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChwb3J0bGV0SWQpIHtcblx0XHRcdCRlbGVtZW50LmhpZGUoKTtcblxuXHRcdFx0Y29uc3QgJHBvcnRsZXRMaW5rOiBKUXVlcnkgfCB1bmRlZmluZWQgPSBnZW5lcmF0ZVBvcnRsZXRMaW5rKGhhc2gpO1xuXHRcdFx0aWYgKCEkcG9ydGxldExpbmspIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdCRlbGVtZW50ID0gJHBvcnRsZXRMaW5rO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wZW5lckxpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGlmICghY2hlY2tBMTF5Q29uZmlybUtleShldmVudCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Z2V0Vmlld2VyKCRib2R5LCBoYXNoKS5vcGVuKCk7XG5cdFx0fTtcblx0XHQkZWxlbWVudC5vbignY2xpY2snLCBvcGVuZXJMaXN0ZW5lcik7XG5cdFx0JGVsZW1lbnQub24oJ2tleWRvd24nLCBvcGVuZXJMaXN0ZW5lcik7XG5cdH1cbn0pO1xuIiwgImltcG9ydCB7UE9SVExFVF9DTEFTU30gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtwb3J0bGV0SWR9IGZyb20gJy4uL2luaXRHbG9iYWxNZXRob2RzJztcblxuY29uc3QgZ2VuZXJhdGVQb3J0bGV0TGluayA9IChoYXNoOiBzdHJpbmcpOiBKUXVlcnkgfCB1bmRlZmluZWQgPT4ge1xuXHRpZiAoIXBvcnRsZXRJZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRMaW5rOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICfmsYkv5ryiJywgYGNhLW5vdGVUQS0ke2hhc2h9YCk7XG5cdGlmICghcG9ydGxldExpbmspIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzdHlsZSA9IHtcblx0XHRoZWlnaHQ6ICc4NSUnLFxuXHRcdHBhZGRpbmc6ICcxcHggM3B4Jyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVhY3QuQ1NTUHJvcGVydGllcztcblxuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRjb25zdCAkcG9ydGxldExpbms6IEpRdWVyeSA9ICQocG9ydGxldExpbmspLmFkZENsYXNzKFBPUlRMRVRfQ0xBU1MpO1xuXHQkcG9ydGxldExpbmtcblx0XHQuZmluZCgnYScpXG5cdFx0LmVtcHR5KClcblx0XHQuYXBwZW5kKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Li4uc3R5bGUsXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2QzZTNmNCcsXG5cdFx0XHRcdFx0XHRjb2xvcjogJyMwMDAnLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7J+axiSd9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Li4uc3R5bGUsXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2U5ZTllOScsXG5cdFx0XHRcdFx0XHRjb2xvcjogJyM0MzQzNDMnLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7J+a8oid9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cblx0cmV0dXJuICRwb3J0bGV0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akYsRUFBQSxHQUFBLEVBQUFrRixTQUFBRCxXQUFBaEYsRUFBQSxHQUFBQyxRQUE2RTtBQUFBLFlBQWxFbkgsVUFBQW1NLE9BQUFySjtBQUNWLFlBQU1XLE9BQWV6RCxRQUFRNkssR0FBR3pLLFFBQVEseUJBQXlCLEVBQUU7QUFFbkUsVUFBSVMsV0FBbUJDLEVBQUVkLE9BQU87QUFDaEMsVUFBSXNLLFdBQVc7QUFDZHpKLGlCQUFTdUwsS0FBSztBQUVkLGNBQU1WLGVBQW1DTixvQkFBb0IzSCxJQUFJO0FBQ2pFLFlBQUksQ0FBQ2lJLGNBQWM7QUFDbEI7UUFDRDtBQUVBN0ssbUJBQVc2SztNQUNaO0FBRUEsWUFBTVcsaUJBQWtCQyxXQUF5RDtBQUNoRixZQUFJLEVBQUEsR0FBQ3BCLG1CQUFBcUIscUJBQW9CRCxLQUFLLEdBQUc7QUFDaEM7UUFDRDtBQUVBQSxjQUFNRSxlQUFlO0FBQ3JCakosa0JBQVVDLE9BQU9DLElBQUksRUFBRWdKLEtBQUs7TUFDN0I7QUFDQTVMLGVBQVM2TCxHQUFHLFNBQVNMLGNBQWM7QUFDbkN4TCxlQUFTNkwsR0FBRyxXQUFXTCxjQUFjO0lBQ3RDO0VBQUEsU0FBQTlFLEtBQUE7QUFBQTJFLGVBQUExRSxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBMkUsZUFBQXpFLEVBQUE7RUFBQTtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFwaVJldHJ5RmFpbEVycm9yIiwgImxvY2FsaXplIiwgImVuIiwgIkxvYWRpbmciLCAiVGl0bGUiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkVycm9yIiwgImVycm9ycyIsICJjb25zdHJ1Y3RvciIsICJjb25jYXQiLCAibGVuZ3RoIiwgIm5hbWUiLCAidG9KUXVlcnkiLCAiZXJyb3JDb3VudCIsICJlbGVtZW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicmVwbGFjZSIsICJ0b1N0cmluZyIsICJyZWR1Y2UiLCAiZXJyb3IiLCAiaW5kZXgiLCAic3BsaXQiLCAiYWNjdW11bGF0b3IiLCAibGluZSIsICJudW1iZXIiLCAiJGVsZW1lbnQiLCAiJCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcnNlV2l0aFJldHJ5IiwgImFyZ3MiLCAiY291bnQiLCAicHJldmlvdXNFcnJvcnMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgImRlZmVycmVkIiwgInBhcnNlIiwgInRoZW4iLCAicmVzcG9uc2UiLCAicmVzb2x2ZSIsICJjYXRjaCIsICJjb25zb2xlIiwgInN0YWNrIiwgIlN0cmluZyIsICJuZXdSZXNwb25zZSIsICJuZXdFcnJvciIsICJwYXJzZVdpa2l0ZXh0IiwgIlBPUlRMRVRfQ0xBU1MiLCAiV0dfUEFHRV9OQU1FIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfU0tJTiIsICJXR19VU0VSX1ZBUklBTlQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFzc2VydCIsICJ2YWx1ZSIsICJ2YWx1ZU5hbWUiLCAidmlld2VyTWFwIiwgIk1hcCIsICJpbml0V2luZG93TWFuYWdlciIsICJPTyIsICJ1aSIsICJXaW5kb3dNYW5hZ2VyIiwgIndpbmRvd01hbmFnZXIiLCAiZ2V0Vmlld2VyIiwgIiRib2R5IiwgImhhc2giLCAiaGFzIiwgInN0b3JlZFZpZXdlciIsICIkdGFyZ2V0RWxlbWVudCIsICJmaW5kIiwgIk5vdGVUQVZpZXdlciIsICJQcm9jZXNzRGlhbG9nIiwgImRhdGFJc0xvYWRlZCIsICJleGVjdXRlUHJvbWlzZSIsICJtdXRhdGlvbk9ic2VydmVyIiwgIiRyZWFsQ29udGVudCIsICJsYXN0RXJyb3IiLCAibm90ZVRBUGFyc2VUZXh0IiwgInNpemUiLCAiTXV0YXRpb25PYnNlcnZlciIsICJ1cGRhdGVTaXplIiwgImJpbmQiLCAib2JzZXJ2ZSIsICJjaGlsZExpc3QiLCAic3VidHJlZSIsICJpbml0aWFsaXplIiwgInBhbmVsTGF5b3V0IiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgInBhZGRlZCIsICJhcHBlbmRUbyIsICJnZXRTZXR1cFByb2Nlc3MiLCAiZGF0YSIsICJuZXh0IiwgImRvRXhlY3V0ZVdyYXAiLCAiZXhlY3V0ZUFjdGlvbiIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImFjdGlvbiIsICJpc01haW5BY3Rpb24iLCAiZXhlY3V0ZSIsICJkZXN0cm95IiwgImRpc2Nvbm5lY3QiLCAiZ2V0Tm90ZVRBUGFyc2VUZXh0IiwgIiRub3RlVEF0aXRsZSIsICJhY3R1YWxUaXRsZSIsICJ3aWtpdGV4dCIsICJ0aXRsZURlZmVycmVkIiwgInRpdGxlQ29udiIsICJhdHRyIiwgInRpdGxlRGVzYyIsICJ0aXRsZSIsICJ2YXJpYW50IiwgInJlc3VsdEh0bWwiLCAiJG11bHRpVGl0bGUiLCAicGFyc2VIVE1MIiwgInRleHRWYXJpYW50IiwgInZhcmlhbnRUZXh0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiY2hpbGRyZW4iLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInRleHQiLCAidHJpbSIsICJ0ZXh0VmFyaWFudEFycmF5IiwgImVyciIsICJlIiwgImYiLCAidGl0bGVDb252ZXJ0ZWQiLCAibXVsdGlUaXRsZSIsICJPYmplY3QiLCAiaGFzT3duIiwgInZhcmlhbnRzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInZhcmlhbnRzTmFtZSIsICJtYXAiLCAiam9pbiIsICIkbm90ZVRBZ3JvdXBzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIiRub3RlVEFsb2NhbCIsICIkbm90ZVRBbG9jYWxzIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImxvY2FsRGVzYyIsICJsb2NhbENvbnYiLCAiZG9FeGVjdXRlIiwgImVtcHR5IiwgImFwcGVuZCIsICJwYXJzZWRIdG1sIiwgImh0bWwiLCAiYWRkQ2xhc3MiLCAibWFrZUNvbGxhcHNpYmxlIiwgInJlY292ZXJhYmxlIiwgImV4ZWN1dGVEZWZlcnJlZCIsICJhbHdheXMiLCAic3RhdGljIiwgImFjdGlvbnMiLCAibGFiZWwiLCAibXNnIiwgImZsYWdzIiwgInZpZXdlciIsICJhZGRXaW5kb3dzIiwgInNldCIsICJyZXNldEFsbFZpZXdlciIsICJfaXRlcmF0b3I2IiwgInZhbHVlcyIsICJfc3RlcDYiLCAiY2xlYXIiLCAiY2xlYXJXaW5kb3dzIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJwb3J0bGV0SWQiLCAiaW5pdEdsb2JhbE1ldGhvZHMiLCAiZ2xvYmFsTWV0aG9kcyIsICJpbml0IiwgImRlSW5pdCIsICIkbm90ZVRBVGFiIiwgIm5vdGVUQVRhYiIsICJpZCIsICJhZnRlciIsICJ1dGlsIiwgImhpZGVQb3J0bGV0IiwgInJlbW92ZSIsICJpbXBvcnRfZXh0X2dhZGdldDciLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImdlbmVyYXRlUG9ydGxldExpbmsiLCAicG9ydGxldExpbmsiLCAiYWRkUG9ydGxldExpbmsiLCAic3R5bGUiLCAiaGVpZ2h0IiwgInBhZGRpbmciLCAiJHBvcnRsZXRMaW5rIiwgImJhY2tncm91bmQiLCAiY29sb3IiLCAiaXNJbml0IiwgImhvb2siLCAiYWRkIiwgIiRjb250ZW50IiwgInBhcmVudHMiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiaGlkZSIsICJvcGVuZXJMaXN0ZW5lciIsICJldmVudCIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgInByZXZlbnREZWZhdWx0IiwgIm9wZW4iLCAib24iXQp9Cg==
