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
    }, /* @__PURE__ */ import_ext_gadget2.default.createElement("p", null, getMessage("ApiRetryFailError").replace(/\$1/g, errorCount.toString())), /* @__PURE__ */ import_ext_gadget2.default.createElement("ol", null, this.errors.map((error, index) => /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      key: index
    }, error.split("\n").map((line, number) => /* @__PURE__ */ import_ext_gadget2.default.createElement("p", {
      key: number
    }, line))))));
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
//! src/NoteTA/modules/initGlobalMethods.ts
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
  } else if (WG_SKIN === "vector-2022") {
    portletId = "p-associated-pages";
    globalMethods.deInit = () => {
      $body.find(PORTLET_CLASS).remove();
    };
  }
  return globalMethods;
};
//! src/NoteTA/NoteTA.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/NoteTA/modules/util/generatePortletLink.tsx
var import_ext_gadget5 = __toESM(require("ext.gadget.React"), 1);
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
  $portletLink.find("a").empty().append(/* @__PURE__ */ import_ext_gadget5.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget5.default.createElement("span", {
    style: {
      ...style,
      background: "#d3e3f4",
      color: "#000"
    }
  }, "汉"), /* @__PURE__ */ import_ext_gadget5.default.createElement("span", {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3IudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Ob3RlVEEvb3B0aW9ucy5qc29uIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9hcGkudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3BhcnNlV2lraXRleHQudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy92aWV3ZXIudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL2Fzc2VydC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdFZpZXdNYXAudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pbml0R2xvYmFsTWV0aG9kcy50cyIsICJzcmMvTm90ZVRBL05vdGVUQS50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVBvcnRsZXRMaW5rLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY2xhc3MgQXBpUmV0cnlGYWlsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdHByaXZhdGUgZXJyb3JzOiBzdHJpbmdbXTtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoZXJyb3JzOiBzdHJpbmdbXSkge1xuXHRcdHN1cGVyKGBBcGkgY2FsbHMgZmFpbGVkICR7ZXJyb3JzLmxlbmd0aH0gdGltZShzKSBpbiBhIHJvdy5gKTtcblx0XHR0aGlzLm5hbWUgPSAnQXBpUmV0cnlGYWlsRXJyb3InO1xuXHRcdHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuXHR9XG5cblx0cHVibGljIHRvSlF1ZXJ5KCk6IEpRdWVyeSB7XG5cdFx0Y29uc3QgZXJyb3JDb3VudDogbnVtYmVyID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuXG5cdFx0Y29uc3QgZWxlbWVudCA9IChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cblx0XHRcdFx0PHA+e2dldE1lc3NhZ2UoJ0FwaVJldHJ5RmFpbEVycm9yJykucmVwbGFjZSgvXFwkMS9nLCBlcnJvckNvdW50LnRvU3RyaW5nKCkpfTwvcD5cblx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdHt0aGlzLmVycm9ycy5tYXA8UmVhY3QuUmVhY3RFbGVtZW50PigoZXJyb3IsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdHtlcnJvci5zcGxpdCgnXFxuJykubWFwPFJlYWN0LlJlYWN0RWxlbWVudD4oKGxpbmUsIG51bWJlcikgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxwIGtleT17bnVtYmVyfT57bGluZX08L3A+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9vbD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpIGFzIEpRdWVyeTtcblxuXHRcdHJldHVybiAkZWxlbWVudDtcblx0fVxufVxuXG5leHBvcnQge0FwaVJldHJ5RmFpbEVycm9yfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QXBpUmV0cnlGYWlsRXJyb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXBpIGNhbGxzIGZhaWxlZCAkMSB0aW1lKHMpIGluIGEgcm93LiBFcnJvcnM6ICcsXG5cdFx0XHQnemgtaGFucyc6ICdBcGkg6LCD55So6L+e57ut5aSx6LSlICQxIOasoe+8jCQxIOasoeiwg+eUqOeahOmUmeivr+WIhuWIq+S4uu+8micsXG5cdFx0XHQnemgtaGFudCc6ICdBcGkg6Kq/55So6YCj57qM5aSx5pWXICQxIOasoe+8jCQxIOasoeiqv+eUqOeahOmMr+iqpOWIhuWIpeeCuu+8micsXG5cdFx0fSksXG5cdFx0TG9hZGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWKoOi9veKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjovInlhaXigKbigKYnLFxuXHRcdH0pLFxuXHRcdFRpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05vdGVUQScsXG5cdFx0XHQnemgtaGFucyc6ICflrZfor43ovazmjaInLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2X6Kme6L2J5o+bJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTm90ZVRBLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtBcGlSZXRyeUZhaWxFcnJvcn0gZnJvbSAnLi91dGlsL0FwaVJldHJ5RmFpbEVycm9yJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbnR5cGUgQXBpUGFyc2UgPSBtdy5BcGlbJ3BhcnNlJ107XG50eXBlIEFwaVBhcnNlUGFyYW1ldGVycyA9IFBhcmFtZXRlcnM8QXBpUGFyc2U+O1xudHlwZSBBcGlQYXJzZVJlc3BvbnNlID0gQXdhaXRlZDxSZXR1cm5UeXBlPEFwaVBhcnNlPj47XG50eXBlIEFwaVJlc3BvbnNlID0gQXBpUGFyc2VSZXNwb25zZSB8IEFwaVJldHJ5RmFpbEVycm9yO1xuXG5jb25zdCBwYXJzZVdpdGhSZXRyeSA9IChcblx0YXJnczogQXBpUGFyc2VQYXJhbWV0ZXJzLFxuXHRjb3VudDogbnVtYmVyID0gMyxcblx0cHJldmlvdXNFcnJvcnM6IHN0cmluZ1tdID0gW11cbik6IEpRdWVyeS5EZWZlcnJlZDxBcGlSZXNwb25zZT4gPT4ge1xuXHRpZiAoIWNvdW50KSB7XG5cdFx0cmV0dXJuICQuRGVmZXJyZWQ8QXBpUmV0cnlGYWlsRXJyb3I+KCkucmVqZWN0KG5ldyBBcGlSZXRyeUZhaWxFcnJvcihwcmV2aW91c0Vycm9ycykpO1xuXHR9XG5cblx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXG5cdHZvaWQgYXBpXG5cdFx0LnBhcnNlKC4uLmFyZ3MpXG5cdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlQYXJzZVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUocmVzcG9uc2UpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnJvcj86IEVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblxuXHRcdFx0aWYgKGVycm9yICYmIHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgJiYgJ3N0YWNrJyBpbiBlcnJvcikge1xuXHRcdFx0XHRwcmV2aW91c0Vycm9yc1twcmV2aW91c0Vycm9ycy5sZW5ndGhdID0gZXJyb3Iuc3RhY2s7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwcmV2aW91c0Vycm9yc1twcmV2aW91c0Vycm9ycy5sZW5ndGhdID0gU3RyaW5nKGVycm9yKTtcblx0XHRcdH1cblxuXHRcdFx0cGFyc2VXaXRoUmV0cnkoYXJncywgLS1jb3VudCwgcHJldmlvdXNFcnJvcnMpXG5cdFx0XHRcdC50aGVuKChuZXdSZXNwb25zZTogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUobmV3UmVzcG9uc2UpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKG5ld0Vycm9yPzogRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChuZXdFcnJvcik7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdHJldHVybiBkZWZlcnJlZDtcbn07XG5cbmNvbnN0IHBhcnNlV2lraXRleHQgPSAoLi4uYXJnczogQXBpUGFyc2VQYXJhbWV0ZXJzKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiA9PiB7XG5cdHJldHVybiBwYXJzZVdpdGhSZXRyeShhcmdzKTtcbn07XG5cbmV4cG9ydCB7dHlwZSBBcGlQYXJzZVJlc3BvbnNlLCB0eXBlIEFwaVJlc3BvbnNlLCBwYXJzZVdpa2l0ZXh0fTtcbiIsICJjb25zdCBQT1JUTEVUX0NMQVNTOiBzdHJpbmcgPSAneC1ub3RlVEEtdmlld2VyJztcblxuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5jb25zdCBXR19TS0lOOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCdza2luJyk7XG5jb25zdCBXR19VU0VSX1ZBUklBTlQ6IHN0cmluZyB8IG51bGwgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJWYXJpYW50Jyk7XG5cbmV4cG9ydCB7UE9SVExFVF9DTEFTUywgV0dfUEFHRV9OQU1FLCBXR19TS0lOLCBXR19VU0VSX1ZBUklBTlR9O1xuIiwgImltcG9ydCB7dHlwZSBBcGlQYXJzZVJlc3BvbnNlLCB0eXBlIEFwaVJlc3BvbnNlLCBwYXJzZVdpa2l0ZXh0fSBmcm9tICcuL3BhcnNlV2lraXRleHQnO1xuaW1wb3J0IHtQT1JUTEVUX0NMQVNTLCBXR19QQUdFX05BTUUsIFdHX1VTRVJfVkFSSUFOVH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJy4vdXRpbC9hc3NlcnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt2aWV3ZXJNYXB9IGZyb20gJy4vaW5pdFZpZXdNYXAnO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuL2luaXRXaW5kb3dNYW5hZ2VyJztcblxudHlwZSBQYXJzZVBhcmFtcyA9IE9taXQ8QXBpUGFyc2VQYXJhbXMsICdhY3Rpb24nIHwgJ2Zvcm1hdCc+O1xuXG5jb25zdCBnZXRWaWV3ZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+LCBoYXNoOiBzdHJpbmcpOiB0eXBlb2Ygdmlld2VyID0+IHtcblx0aWYgKHZpZXdlck1hcC5oYXMoaGFzaCkpIHtcblx0XHRjb25zdCBzdG9yZWRWaWV3ZXIgPSB2aWV3ZXJNYXAuZ2V0KGhhc2gpO1xuXHRcdGFzc2VydChzdG9yZWRWaWV3ZXIsICd2aWV3ZXInKTtcblxuXHRcdHJldHVybiBzdG9yZWRWaWV3ZXI7XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0RWxlbWVudDogSlF1ZXJ5ID0gJGJvZHkuZmluZChgI25vdGVUQS0ke2hhc2h9YCk7XG5cdGlmICghJHRhcmdldEVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBDYW4ndCBnZXQgRWxlbWVudCBcIiNub3RlVEEtJHtoYXNofVwiLmApO1xuXHR9XG5cblx0Y2xhc3MgTm90ZVRBVmlld2VyIGV4dGVuZHMgT08udWkuUHJvY2Vzc0RpYWxvZyB7XG5cdFx0cHJpdmF0ZSBkYXRhSXNMb2FkZWQ6IGJvb2xlYW47XG5cdFx0cHJpdmF0ZSBleGVjdXRlUHJvbWlzZT86IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZG9FeGVjdXRlPjtcblx0XHRwcml2YXRlIG11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG5cdFx0cHJpdmF0ZSAkcmVhbENvbnRlbnQ6IEpRdWVyeTtcblx0XHRwcml2YXRlICRib2R5OiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbGFzdEVycm9yPzogT08udWkuRXJyb3I7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbm90ZVRBUGFyc2VUZXh0OiBzdHJpbmc7XG5cblx0XHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcih7XG5cdFx0XHRcdHNpemU6ICdsYXJnZXInLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuZGF0YUlzTG9hZGVkID0gZmFsc2U7XG5cdFx0XHR0aGlzLiRyZWFsQ29udGVudCA9ICQoPGRpdiAvPikgYXMgSlF1ZXJ5O1xuXG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnVwZGF0ZVNpemUuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRyZWFsQ29udGVudC5nZXQoMCkgYXMgSFRNTEVsZW1lbnQsIHtcblx0XHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGluaXRpYWxpemUoKTogdGhpcyB7XG5cdFx0XHRzdXBlci5pbml0aWFsaXplKCk7XG5cblx0XHRcdGNvbnN0IHBhbmVsTGF5b3V0OiBPTy51aS5QYW5lbExheW91dCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmFwcGVuZFRvKHBhbmVsTGF5b3V0LiRlbGVtZW50KTtcblx0XHRcdHBhbmVsTGF5b3V0LiRlbGVtZW50LmFwcGVuZFRvKHRoaXMuJGJvZHkgYXMgSlF1ZXJ5KTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldFNldHVwUHJvY2VzcyhkYXRhOiBPTy51aS5EaWFsb2cuU2V0dXBEYXRhTWFwKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRyZXR1cm4gc3VwZXIuZ2V0U2V0dXBQcm9jZXNzKGRhdGEpLm5leHQoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR2b2lkIHRoaXMuZG9FeGVjdXRlV3JhcCgpO1xuXHRcdFx0XHR2b2lkIHRoaXMuZXhlY3V0ZUFjdGlvbignbWFpbicpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldEFjdGlvblByb2Nlc3MoYWN0aW9uPzogc3RyaW5nKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRjb25zdCBpc01haW5BY3Rpb246IGJvb2xlYW4gPSBhY3Rpb24gPT09ICdtYWluJztcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0c3VwZXJcblx0XHRcdFx0XHQuZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24pXG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzcwMzBcblx0XHRcdFx0XHQubmV4dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoaXNNYWluQWN0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmRvRXhlY3V0ZVdyYXAoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5uZXh0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChpc01haW5BY3Rpb24gJiYgTm90ZVRBVmlld2VyLmxhc3RFcnJvcikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gTm90ZVRBVmlld2VyLmxhc3RFcnJvcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBzdXBlci5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbikuZXhlY3V0ZSgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuXHRcdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBnZXROb3RlVEFQYXJzZVRleHQoKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiB7XG5cdFx0XHRpZiAoTm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZDxzdHJpbmc+KCkucmVzb2x2ZShOb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgJG5vdGVUQXRpdGxlOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLXRpdGxlJyk7XG5cdFx0XHRjb25zdCBhY3R1YWxUaXRsZTogc3RyaW5nID0gV0dfUEFHRV9OQU1FLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0XHRcdGNvbnN0IHRpdGxlRGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXG5cdFx0XHRpZiAoJG5vdGVUQXRpdGxlLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCB0aXRsZUNvbnY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRub3RlVEF0aXRsZS5hdHRyKCdkYXRhLW5vdGV0YS1jb2RlJyk7XG5cdFx0XHRcdGFzc2VydCh0aXRsZUNvbnYsICd0aXRsZUNvbnYnKTtcblxuXHRcdFx0XHRsZXQgdGl0bGVEZXNjOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkbm90ZVRBdGl0bGUuYXR0cignZGF0YS1ub3RldGEtZGVzYycpO1xuXHRcdFx0XHRpZiAodGl0bGVEZXNjKSB7XG5cdFx0XHRcdFx0dGl0bGVEZXNjID0gYO+8iCR7dGl0bGVEZXNjfe+8iWA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGl0bGVEZXNjID0gJyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aWtpdGV4dCArPSBgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodFwiPnt7ZWRpdHwke2FjdHVhbFRpdGxlfXxzZWN0aW9uPTB9fTwvc3Bhbj5cXG5gO1xuXHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlofkvb/nlKhbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOagh+mimOaJi+W3pei9rOaNol1dXFxuJztcblx0XHRcdFx0d2lraXRleHQgKz0gYCog6L2s5o2i5qCH6aKY5Li677yaLXtEfCR7dGl0bGVDb252fX0tJHt0aXRsZURlc2N9XFxuYDtcblx0XHRcdFx0d2lraXRleHQgKz0gYCog5a6e6ZmF5qCH6aKY5Li677yaLXtSfCR7YWN0dWFsVGl0bGV9fS3vvJvlvZPliY3mmL7npLrkuLrvvJote3wke3RpdGxlQ29udn19LVxcbmA7XG5cblx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlc29sdmUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhcnNlV2lraXRleHQoYHt7bm90ZVRBL211bHRpdGl0bGV8JHthY3R1YWxUaXRsZX19fWAsIHtcblx0XHRcdFx0XHR0aXRsZTogYWN0dWFsVGl0bGUsXG5cdFx0XHRcdFx0dmFyaWFudDogJ3poJyxcblx0XHRcdFx0fSBhcyBQYXJzZVBhcmFtcylcblx0XHRcdFx0XHQudGhlbigocmVzdWx0SHRtbDogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0ICRtdWx0aVRpdGxlOiBKUXVlcnkgPSAkKCQucGFyc2VIVE1MKHJlc3VsdEh0bWwgYXMgQXBpUGFyc2VSZXNwb25zZSkpLmZpbmQoXG5cdFx0XHRcdFx0XHRcdCcubm90ZVRBLW11bHRpdGl0bGUnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0aWYgKCRtdWx0aVRpdGxlLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlodbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOagh+mimOWPr+iDvee7j+i/h+i9rOaNol1dXFxuKiDovazmjaLmoIfpopjkuLrvvJonO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRleHRWYXJpYW50OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudFRleHQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bGw+ID0ge307XG5cblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRtdWx0aVRpdGxlLmNoaWxkcmVuKCkpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1tdWx0aXRpdGxlLXZhcmlhbnQnKTtcblx0XHRcdFx0XHRcdFx0XHRhc3NlcnQodmFyaWFudCwgJ3ZhcmlhbnQnKTtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHQ6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS50cmltKCk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudFRleHRbdmFyaWFudF0gPSB0ZXh0O1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dFZhcmlhbnRBcnJheTogc3RyaW5nW10gfCB1bmRlZmluZWQgPSB0ZXh0VmFyaWFudFt0ZXh0XTtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGV4dFZhcmlhbnRBcnJheSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dFZhcmlhbnRBcnJheVt0ZXh0VmFyaWFudEFycmF5Lmxlbmd0aF0gPSB2YXJpYW50O1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0VmFyaWFudFt0ZXh0XSA9IFt2YXJpYW50XTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZUNvbnZlcnRlZDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IHZhcmlhbnRUZXh0W1dHX1VTRVJfVkFSSUFOVCBhcyBzdHJpbmddO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IG11bHRpVGl0bGU6IHN0cmluZ1tdID0gW107XG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3Qga2V5IGluIHZhcmlhbnRUZXh0KSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHZhcmlhbnRUZXh0LCBrZXkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gdmFyaWFudFRleHRba2V5XTtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGV4dCA9PT0gbnVsbCB8fCB0ZXh0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IHRleHRWYXJpYW50W3RleHRdO1xuXHRcdFx0XHRcdFx0XHRcdGlmICghdmFyaWFudHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiB2YXJpYW50cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudFRleHRbdmFyaWFudF0gPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzTmFtZTogc3RyaW5nID0gdmFyaWFudHNcblx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKHZhcmlhbnQ6IHN0cmluZyk6IHN0cmluZyA9PiBgLXtSfHt7TWVkaWFXaWtpOlZhcmlhbnRuYW1lLSR7dmFyaWFudH19fX0tYClcblx0XHRcdFx0XHRcdFx0XHRcdC5qb2luKCfjgIEnKTtcblx0XHRcdFx0XHRcdFx0XHRtdWx0aVRpdGxlW211bHRpVGl0bGUubGVuZ3RoXSA9IGAke3ZhcmlhbnRzTmFtZX3vvJote1J8JHt0ZXh0fX0tYDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHN1Ykl0ZW1TZXBhcmF0b3I6IHN0cmluZyA9ICdcXG4qKiAnO1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgJHtzdWJJdGVtU2VwYXJhdG9yfSR7bXVsdGlUaXRsZS5qb2luKHN1Ykl0ZW1TZXBhcmF0b3IpfWA7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGBcXG4qIOWunumZheagh+mimOS4uu+8mi17Unwke2FjdHVhbFRpdGxlfX0t77yb5b2T5YmN5pi+56S65Li677yaLXtSfCR7dGl0bGVDb252ZXJ0ZWR9fS1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0XHRcdHRpdGxlRGVmZXJyZWRcblx0XHRcdFx0LnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGNvbnN0ICRub3RlVEFncm91cHM6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtZ3JvdXAgPiAqW2RhdGEtbm90ZXRhLWdyb3VwXScpO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbm90ZVRBZ3JvdXBzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRcdFx0XHRcdHN3aXRjaCAoJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAtc291cmNlJykpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAndGVtcGxhdGUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGB7e0NHcm91cC8keyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdtb2R1bGUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGB7eyNpbnZva2U6Q0dyb3VwVmlld2VyfGRpYWxvZ3wkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdub25lJzpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgOyDmnKzmlofkvb/nlKjnmoTlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCd5bCa5pyq5Yib5bu6XFxuYDtcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgKiB7e2VkaXR8TW9kdWxlOkNHcm91cC8keyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fOWIm+W7uuWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDsg5pyq55+l5YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAneadpea6kOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAtc291cmNlJyl94oCdXFxuYDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCAkbm90ZVRBbG9jYWw6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtbG9jYWwnKTtcblx0XHRcdFx0XHRpZiAoJG5vdGVUQWxvY2FsLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj57e2VkaXR8JHthY3R1YWxUaXRsZX18c2VjdGlvbj0wfX08L3NwYW4+XFxuYDtcblx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICc7IOacrOaWh+S9v+eUqFtbSGVscDrlrZfor43ovazmjaLlpITnkIZ85YWo5paH5omL5bel6L2s5o2iXV1cXG4nO1xuXG5cdFx0XHRcdFx0XHRjb25zdCAkbm90ZVRBbG9jYWxzID0gJG5vdGVUQWxvY2FsLmNoaWxkcmVuKCcqW2RhdGEtbm90ZXRhLWNvZGVdJyk7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJG5vdGVUQWxvY2Fscykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblxuXHRcdFx0XHRcdFx0XHRsZXQgbG9jYWxEZXNjOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1kZXNjJyk7XG5cdFx0XHRcdFx0XHRcdGlmIChsb2NhbERlc2MpIHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhbERlc2MgPSBg77yIJHtsb2NhbERlc2N977yJYDtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhbERlc2MgPSAnJztcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGxvY2FsQ29udjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtY29kZScpO1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgKiAte0R8JHtsb2NhbENvbnZ9fS0ke2xvY2FsRGVzY33lvZPliY3mmL7npLrkuLrvvJoteyR7bG9jYWxDb252fX0tXFxuYDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR3aWtpdGV4dCArPSAne3tub3RlVEEvZm9vdGVyfX1cXG4nO1xuXG5cdFx0XHRcdFx0Tm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCA9IHdpa2l0ZXh0O1xuXG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKHdpa2l0ZXh0KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBkb0V4ZWN1dGUoKSB7XG5cdFx0XHRpZiAodGhpcy5kYXRhSXNMb2FkZWQpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCkucmVzb2x2ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRyZWFsQ29udGVudC5lbXB0eSgpLmFwcGVuZCg8cD57Z2V0TWVzc2FnZSgnTG9hZGluZycpfTwvcD4pO1xuXG5cdFx0XHRyZXR1cm4gTm90ZVRBVmlld2VyLmdldE5vdGVUQVBhcnNlVGV4dCgpXG5cdFx0XHRcdC50aGVuKCh3aWtpdGV4dDogQXBpUmVzcG9uc2UpID0+XG5cdFx0XHRcdFx0cGFyc2VXaWtpdGV4dChcblx0XHRcdFx0XHRcdHdpa2l0ZXh0IGFzIEFwaVBhcnNlUmVzcG9uc2UsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnVGVtcGxhdGU6Q0dyb3VwLy0nLFxuXHRcdFx0XHRcdFx0XHR2YXJpYW50OiBXR19VU0VSX1ZBUklBTlQgYXMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0fSBhcyBQYXJzZVBhcmFtc1xuXHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0XHQudGhlbigocGFyc2VkSHRtbDogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHR0aGlzLiRyZWFsQ29udGVudFxuXHRcdFx0XHRcdFx0LmVtcHR5KClcblx0XHRcdFx0XHRcdC5odG1sKHBhcnNlZEh0bWwgYXMgQXBpUGFyc2VSZXNwb25zZSlcblx0XHRcdFx0XHRcdC5hZGRDbGFzcyhgJHtQT1JUTEVUX0NMQVNTfS1vdXRwdXRgKTtcblxuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmZpbmQoJy5tdy1jb2xsYXBzaWJsZScpIGFzIEpRdWVyeSAmIHttYWtlQ29sbGFwc2libGU6ICgpID0+IEpRdWVyeX1cblx0XHRcdFx0XHQpLm1ha2VDb2xsYXBzaWJsZSgpO1xuXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVTaXplKCk7XG5cdFx0XHRcdFx0dGhpcy5kYXRhSXNMb2FkZWQgPSB0cnVlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvciB8IEVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgQXBpUmV0cnlGYWlsRXJyb3IpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBPTy51aS5FcnJvcihlcnJvci50b0pRdWVyeSgpLCB7XG5cdFx0XHRcdFx0XHRcdHJlY292ZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBPTy51aS5FcnJvcihTdHJpbmcoZXJyb3IpLCB7XG5cdFx0XHRcdFx0XHRcdHJlY292ZXJhYmxlOiBmYWxzZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBkb0V4ZWN1dGVXcmFwKCkge1xuXHRcdFx0aWYgKHRoaXMuZXhlY3V0ZVByb21pc2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmV4ZWN1dGVQcm9taXNlID0gdGhpcy5kb0V4ZWN1dGUoKTtcblx0XHRcdFx0ZGVsZXRlIE5vdGVUQVZpZXdlci5sYXN0RXJyb3I7XG5cblx0XHRcdFx0Y29uc3QgZXhlY3V0ZURlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblx0XHRcdFx0dm9pZCAodGhpcy5leGVjdXRlUHJvbWlzZSBhcyBKUXVlcnkuUHJvbWlzZTxBcGlSZXNwb25zZT4pXG5cdFx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCBleGVjdXRlRGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yOiBFcnJvciB8IE9PLnVpLkVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBPTy51aS5FcnJvcikge1xuXHRcdFx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubGFzdEVycm9yID0gZXJyb3I7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2b2lkIGV4ZWN1dGVEZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFsd2F5cygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5leGVjdXRlUHJvbWlzZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gZXhlY3V0ZURlZmVycmVkO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cdFx0XHR2b2lkICh0aGlzLmV4ZWN1dGVQcm9taXNlIGFzIEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPilcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEVycm9yIHwgT08udWkuRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBPTy51aS5FcnJvcikge1xuXHRcdFx0XHRcdFx0Tm90ZVRBVmlld2VyLmxhc3RFcnJvciA9IGVycm9yO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5leGVjdXRlUHJvbWlzZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9XG5cdH1cblxuXHROb3RlVEFWaWV3ZXIuc3RhdGljID0ge1xuXHRcdC4uLk9PLnVpLlByb2Nlc3NEaWFsb2cuc3RhdGljLFxuXHR9O1xuXHROb3RlVEFWaWV3ZXIuc3RhdGljLm5hbWUgPSBgTm90ZVRBVmlld2VyLSR7aGFzaH1gO1xuXHROb3RlVEFWaWV3ZXIuc3RhdGljLnRpdGxlID0gZ2V0TWVzc2FnZSgnVGl0bGUnKTtcblx0Tm90ZVRBVmlld2VyLnN0YXRpYy5hY3Rpb25zID0gW1xuXHRcdHtcblx0XHRcdGxhYmVsOiBtdy5tc2coJ29vdWktZGlhbG9nLXByb2Nlc3MtZGlzbWlzcycpLFxuXHRcdFx0ZmxhZ3M6ICdzYWZlJyxcblx0XHR9LFxuXHRdO1xuXG5cdGNvbnN0IHZpZXdlcjogTm90ZVRBVmlld2VyID0gbmV3IE5vdGVUQVZpZXdlcigpO1xuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW3ZpZXdlcl0pO1xuXHR2aWV3ZXJNYXAuc2V0KGhhc2gsIHZpZXdlcik7XG5cblx0cmV0dXJuIHZpZXdlcjtcbn07XG5cbmNvbnN0IHJlc2V0QWxsVmlld2VyID0gKCk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IHZpZXdlciBvZiB2aWV3ZXJNYXAudmFsdWVzKCkpIHtcblx0XHR2aWV3ZXIuZGVzdHJveSgpO1xuXHR9XG5cdHZpZXdlck1hcC5jbGVhcigpO1xuXHR2b2lkIHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG59O1xuXG5leHBvcnQge2dldFZpZXdlciwgcmVzZXRBbGxWaWV3ZXJ9O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5mdW5jdGlvbiBhc3NlcnQ8VD4odmFsdWU6IFQgfCB1bmRlZmluZWQsIHZhbHVlTmFtZTogc3RyaW5nKTogYXNzZXJ0cyB2YWx1ZSB7XG5cdGlmICghdmFsdWUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEFzc2VydCBGYWlsLCAke3ZhbHVlTmFtZX0gPT0gZmFsc2UuYCk7XG5cdH1cbn1cblxuZXhwb3J0IHthc3NlcnR9O1xuIiwgImltcG9ydCB7dHlwZSBnZXRWaWV3ZXJ9IGZyb20gJy4vdmlld2VyJztcblxuY29uc3Qgdmlld2VyTWFwID0gbmV3IE1hcDxzdHJpbmcsIFJldHVyblR5cGU8dHlwZW9mIGdldFZpZXdlcj4+KCk7XG5cbmV4cG9ydCB7dmlld2VyTWFwfTtcbiIsICJjb25zdCBpbml0V2luZG93TWFuYWdlciA9ICgpOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0+IHtcblx0cmV0dXJuIG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG59O1xuXG5jb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gaW5pdFdpbmRvd01hbmFnZXIoKTtcblxuZXhwb3J0IHt3aW5kb3dNYW5hZ2VyfTtcbiIsICJpbXBvcnQge1BPUlRMRVRfQ0xBU1MsIFdHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuXG5sZXQgcG9ydGxldElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmNvbnN0IGluaXRHbG9iYWxNZXRob2RzID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHR5cGVvZiBnbG9iYWxNZXRob2RzID0+IHtcblx0Y29uc3QgZ2xvYmFsTWV0aG9kczoge1xuXHRcdGluaXQoKTogdm9pZDtcblx0XHRkZUluaXQoKTogdm9pZDtcblx0fSA9IHtcblx0XHRpbml0KCkge1xuXHRcdFx0LyogZmFrZSAqL1xuXHRcdH0sXG5cdFx0ZGVJbml0KCkge1xuXHRcdFx0LyogZmFrZSAqL1xuXHRcdH0sXG5cdH07XG5cblx0aWYgKFdHX1NLSU4gPT09ICd2ZWN0b3InKSB7XG5cdFx0cG9ydGxldElkID0gJ3Atbm90ZVRBJztcblxuXHRcdGxldCAkbm90ZVRBVGFiOiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cdFx0Z2xvYmFsTWV0aG9kcy5pbml0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCRub3RlVEFUYWIgfHwgIXBvcnRsZXRJZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBub3RlVEFUYWI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldChwb3J0bGV0SWQpO1xuXHRcdFx0aWYgKCFub3RlVEFUYWIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0JG5vdGVUQVRhYiA9ICQobm90ZVRBVGFiKTtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtZWRpYXdpa2kvY2xhc3MtZG9jXG5cdFx0XHQkbm90ZVRBVGFiXG5cdFx0XHRcdC5yZW1vdmVDbGFzcyhgbXctcG9ydGxldC0ke3BvcnRsZXRJZH1gKVxuXHRcdFx0XHQuYWRkQ2xhc3MoW2Btdy1wb3J0bGV0LSR7cG9ydGxldElkLnJlcGxhY2UoJ3AtJywgJycpfWAsICd2ZWN0b3ItbWVudS10YWJzJywgJ3ZlY3Rvci1tZW51LXRhYnMtbGVnYWN5J10pO1xuXHRcdFx0JGJvZHkuZmluZCgnI3AtdmFyaWFudHMnKS5hZnRlcigkbm90ZVRBVGFiKTtcblx0XHR9O1xuXHRcdGdsb2JhbE1ldGhvZHMuZGVJbml0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCEkbm90ZVRBVGFiKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRub3RlVEFUYWIuZmluZCgndWwnKS5lbXB0eSgpO1xuXHRcdFx0aWYgKHBvcnRsZXRJZCkge1xuXHRcdFx0XHRtdy51dGlsLmhpZGVQb3J0bGV0KHBvcnRsZXRJZCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fSBlbHNlIGlmIChXR19TS0lOID09PSAndmVjdG9yLTIwMjInKSB7XG5cdFx0cG9ydGxldElkID0gJ3AtYXNzb2NpYXRlZC1wYWdlcyc7XG5cblx0XHRnbG9iYWxNZXRob2RzLmRlSW5pdCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdCRib2R5LmZpbmQoUE9SVExFVF9DTEFTUykucmVtb3ZlKCk7XG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBnbG9iYWxNZXRob2RzO1xufTtcblxuZXhwb3J0IHtwb3J0bGV0SWQsIGluaXRHbG9iYWxNZXRob2RzfTtcbiIsICJpbXBvcnQge2dldFZpZXdlciwgcmVzZXRBbGxWaWV3ZXJ9IGZyb20gJy4vbW9kdWxlcy92aWV3ZXInO1xuaW1wb3J0IHtpbml0R2xvYmFsTWV0aG9kcywgcG9ydGxldElkfSBmcm9tICcuL21vZHVsZXMvaW5pdEdsb2JhbE1ldGhvZHMnO1xuaW1wb3J0IHtjaGVja0ExMXlDb25maXJtS2V5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZW5lcmF0ZVBvcnRsZXRMaW5rfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVBvcnRsZXRMaW5rJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyJztcblxubGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG5vdGVUQSgkY29udGVudCk6IHZvaWQge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkY29udGVudC5wYXJlbnRzKCdib2R5Jyk7XG5cblx0aWYgKCFpc0luaXQpIHtcblx0XHRpc0luaXQgPSB0cnVlO1xuXHRcdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuYXBwZW5kVG8oJGJvZHkpO1xuXHR9XG5cblx0cmVzZXRBbGxWaWV3ZXIoKTtcblxuXHRjb25zdCBnbG9iYWxNZXRob2RzID0gaW5pdEdsb2JhbE1ldGhvZHMoJGJvZHkpO1xuXHRnbG9iYWxNZXRob2RzLmRlSW5pdCgpO1xuXHRnbG9iYWxNZXRob2RzLmluaXQoKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZCgnLm13LWluZGljYXRvcltpZF49bXctaW5kaWNhdG9yLW5vdGVUQS1dJykpIHtcblx0XHRjb25zdCBoYXNoOiBzdHJpbmcgPSBlbGVtZW50LmlkLnJlcGxhY2UoL15tdy1pbmRpY2F0b3Itbm90ZVRBLS8sICcnKTtcblxuXHRcdGxldCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRpZiAocG9ydGxldElkKSB7XG5cdFx0XHQkZWxlbWVudC5oaWRlKCk7XG5cblx0XHRcdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5IHwgdW5kZWZpbmVkID0gZ2VuZXJhdGVQb3J0bGV0TGluayhoYXNoKTtcblx0XHRcdGlmICghJHBvcnRsZXRMaW5rKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQkZWxlbWVudCA9ICRwb3J0bGV0TGluaztcblx0XHR9XG5cblx0XHRjb25zdCBvcGVuZXJMaXN0ZW5lciA9IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGdldFZpZXdlcigkYm9keSwgaGFzaCkub3BlbigpO1xuXHRcdH07XG5cdFx0JGVsZW1lbnQub24oJ2NsaWNrJywgb3BlbmVyTGlzdGVuZXIpO1xuXHRcdCRlbGVtZW50Lm9uKCdrZXlkb3duJywgb3BlbmVyTGlzdGVuZXIpO1xuXHR9XG59KTtcbiIsICJpbXBvcnQge1BPUlRMRVRfQ0xBU1N9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7cG9ydGxldElkfSBmcm9tICcuLi9pbml0R2xvYmFsTWV0aG9kcyc7XG5cbmNvbnN0IGdlbmVyYXRlUG9ydGxldExpbmsgPSAoaGFzaDogc3RyaW5nKTogSlF1ZXJ5IHwgdW5kZWZpbmVkID0+IHtcblx0aWYgKCFwb3J0bGV0SWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0TGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCAn5rGJL+a8oicsIGBjYS1ub3RlVEEtJHtoYXNofWApO1xuXHRpZiAoIXBvcnRsZXRMaW5rKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc3R5bGUgPSB7XG5cdFx0aGVpZ2h0OiAnODUlJyxcblx0XHRwYWRkaW5nOiAnMXB4IDNweCcsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlYWN0LkNTU1Byb3BlcnRpZXM7XG5cblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0Y29uc3QgJHBvcnRsZXRMaW5rOiBKUXVlcnkgPSAkKHBvcnRsZXRMaW5rKS5hZGRDbGFzcyhQT1JUTEVUX0NMQVNTKTtcblx0JHBvcnRsZXRMaW5rXG5cdFx0LmZpbmQoJ2EnKVxuXHRcdC5lbXB0eSgpXG5cdFx0LmFwcGVuZChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdC4uLnN0eWxlLFxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNkM2UzZjQnLFxuXHRcdFx0XHRcdFx0Y29sb3I6ICcjMDAwJyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyfmsYknfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdC4uLnN0eWxlLFxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNlOWU5ZTknLFxuXHRcdFx0XHRcdFx0Y29sb3I6ICcjNDM0MzQzJyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyfmvKInfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXG5cdHJldHVybiAkcG9ydGxldExpbms7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlUG9ydGxldExpbmt9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNBbEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLG9CQUFBLEdBQW1CRixrQkFBQUcsVUFBUztNQUMzQkMsSUFBSTtNQUNK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QUFNRSxlQUFlO0FBQ3JCbkosa0JBQVVDLE9BQU9DLElBQUksRUFBRWtKLEtBQUs7TUFDN0I7QUFDQTlMLGVBQVMrTCxHQUFHLFNBQVNMLGNBQWM7QUFDbkMxTCxlQUFTK0wsR0FBRyxXQUFXTCxjQUFjO0lBQ3RDO0VBQUEsU0FBQWhGLEtBQUE7QUFBQTRFLGVBQUEzRSxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBNEUsZUFBQTFFLEVBQUE7RUFBQTtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFwaVJldHJ5RmFpbEVycm9yIiwgImxvY2FsaXplIiwgImVuIiwgIkxvYWRpbmciLCAiVGl0bGUiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkVycm9yIiwgImVycm9ycyIsICJjb25zdHJ1Y3RvciIsICJjb25jYXQiLCAibGVuZ3RoIiwgIm5hbWUiLCAidG9KUXVlcnkiLCAiZXJyb3JDb3VudCIsICJlbGVtZW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicmVwbGFjZSIsICJ0b1N0cmluZyIsICJtYXAiLCAiZXJyb3IiLCAiaW5kZXgiLCAic3BsaXQiLCAibGluZSIsICJudW1iZXIiLCAiJGVsZW1lbnQiLCAiJCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcnNlV2l0aFJldHJ5IiwgImFyZ3MiLCAiY291bnQiLCAicHJldmlvdXNFcnJvcnMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgImRlZmVycmVkIiwgInBhcnNlIiwgInRoZW4iLCAicmVzcG9uc2UiLCAicmVzb2x2ZSIsICJjYXRjaCIsICJjb25zb2xlIiwgInN0YWNrIiwgIlN0cmluZyIsICJuZXdSZXNwb25zZSIsICJuZXdFcnJvciIsICJwYXJzZVdpa2l0ZXh0IiwgIlBPUlRMRVRfQ0xBU1MiLCAiV0dfUEFHRV9OQU1FIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfU0tJTiIsICJXR19VU0VSX1ZBUklBTlQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFzc2VydCIsICJ2YWx1ZSIsICJ2YWx1ZU5hbWUiLCAidmlld2VyTWFwIiwgIk1hcCIsICJpbml0V2luZG93TWFuYWdlciIsICJPTyIsICJ1aSIsICJXaW5kb3dNYW5hZ2VyIiwgIndpbmRvd01hbmFnZXIiLCAiZ2V0Vmlld2VyIiwgIiRib2R5IiwgImhhc2giLCAiaGFzIiwgInN0b3JlZFZpZXdlciIsICIkdGFyZ2V0RWxlbWVudCIsICJmaW5kIiwgIk5vdGVUQVZpZXdlciIsICJQcm9jZXNzRGlhbG9nIiwgImRhdGFJc0xvYWRlZCIsICJleGVjdXRlUHJvbWlzZSIsICJtdXRhdGlvbk9ic2VydmVyIiwgIiRyZWFsQ29udGVudCIsICJsYXN0RXJyb3IiLCAibm90ZVRBUGFyc2VUZXh0IiwgInNpemUiLCAiTXV0YXRpb25PYnNlcnZlciIsICJ1cGRhdGVTaXplIiwgImJpbmQiLCAib2JzZXJ2ZSIsICJjaGlsZExpc3QiLCAic3VidHJlZSIsICJpbml0aWFsaXplIiwgInBhbmVsTGF5b3V0IiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgInBhZGRlZCIsICJhcHBlbmRUbyIsICJnZXRTZXR1cFByb2Nlc3MiLCAiZGF0YSIsICJuZXh0IiwgImRvRXhlY3V0ZVdyYXAiLCAiZXhlY3V0ZUFjdGlvbiIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImFjdGlvbiIsICJpc01haW5BY3Rpb24iLCAiZXhlY3V0ZSIsICJkZXN0cm95IiwgImRpc2Nvbm5lY3QiLCAiZ2V0Tm90ZVRBUGFyc2VUZXh0IiwgIiRub3RlVEF0aXRsZSIsICJhY3R1YWxUaXRsZSIsICJ3aWtpdGV4dCIsICJ0aXRsZURlZmVycmVkIiwgInRpdGxlQ29udiIsICJhdHRyIiwgInRpdGxlRGVzYyIsICJ0aXRsZSIsICJ2YXJpYW50IiwgInJlc3VsdEh0bWwiLCAiJG11bHRpVGl0bGUiLCAicGFyc2VIVE1MIiwgInRleHRWYXJpYW50IiwgInZhcmlhbnRUZXh0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiY2hpbGRyZW4iLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInRleHQiLCAidHJpbSIsICJ0ZXh0VmFyaWFudEFycmF5IiwgImVyciIsICJlIiwgImYiLCAidGl0bGVDb252ZXJ0ZWQiLCAibXVsdGlUaXRsZSIsICJPYmplY3QiLCAiaGFzT3duIiwgInZhcmlhbnRzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInZhcmlhbnRzTmFtZSIsICJqb2luIiwgInN1Ykl0ZW1TZXBhcmF0b3IiLCAiJG5vdGVUQWdyb3VwcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICIkbm90ZVRBbG9jYWwiLCAiJG5vdGVUQWxvY2FscyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJsb2NhbERlc2MiLCAibG9jYWxDb252IiwgImRvRXhlY3V0ZSIsICJlbXB0eSIsICJhcHBlbmQiLCAicGFyc2VkSHRtbCIsICJodG1sIiwgImFkZENsYXNzIiwgIm1ha2VDb2xsYXBzaWJsZSIsICJyZWNvdmVyYWJsZSIsICJleGVjdXRlRGVmZXJyZWQiLCAiYWx3YXlzIiwgInN0YXRpYyIsICJhY3Rpb25zIiwgImxhYmVsIiwgIm1zZyIsICJmbGFncyIsICJ2aWV3ZXIiLCAiYWRkV2luZG93cyIsICJzZXQiLCAicmVzZXRBbGxWaWV3ZXIiLCAiX2l0ZXJhdG9yNiIsICJ2YWx1ZXMiLCAiX3N0ZXA2IiwgImNsZWFyIiwgImNsZWFyV2luZG93cyIsICJwb3J0bGV0SWQiLCAiaW5pdEdsb2JhbE1ldGhvZHMiLCAiZ2xvYmFsTWV0aG9kcyIsICJpbml0IiwgImRlSW5pdCIsICIkbm90ZVRBVGFiIiwgIm5vdGVUQVRhYiIsICJ1dGlsIiwgImFkZFBvcnRsZXQiLCAicmVtb3ZlQ2xhc3MiLCAiYWZ0ZXIiLCAiaGlkZVBvcnRsZXQiLCAicmVtb3ZlIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiZ2VuZXJhdGVQb3J0bGV0TGluayIsICJwb3J0bGV0TGluayIsICJhZGRQb3J0bGV0TGluayIsICJzdHlsZSIsICJoZWlnaHQiLCAicGFkZGluZyIsICIkcG9ydGxldExpbmsiLCAiYmFja2dyb3VuZCIsICJjb2xvciIsICJpc0luaXQiLCAiaG9vayIsICJhZGQiLCAibm90ZVRBIiwgIiRjb250ZW50IiwgInBhcmVudHMiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiaWQiLCAiaGlkZSIsICJvcGVuZXJMaXN0ZW5lciIsICJldmVudCIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgInByZXZlbnREZWZhdWx0IiwgIm9wZW4iLCAib24iXQp9Cg==
