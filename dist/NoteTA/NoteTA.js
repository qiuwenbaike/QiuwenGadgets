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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3IudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Ob3RlVEEvb3B0aW9ucy5qc29uIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9hcGkudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3BhcnNlV2lraXRleHQudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy92aWV3ZXIudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL2Fzc2VydC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdFZpZXdNYXAudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pbml0R2xvYmFsTWV0aG9kcy50cyIsICJzcmMvTm90ZVRBL05vdGVUQS50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVBvcnRsZXRMaW5rLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY2xhc3MgQXBpUmV0cnlGYWlsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdHByaXZhdGUgZXJyb3JzOiBzdHJpbmdbXTtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoZXJyb3JzOiBzdHJpbmdbXSkge1xuXHRcdHN1cGVyKGBBcGkgY2FsbHMgZmFpbGVkICR7ZXJyb3JzLmxlbmd0aH0gdGltZShzKSBpbiBhIHJvdy5gKTtcblx0XHR0aGlzLm5hbWUgPSAnQXBpUmV0cnlGYWlsRXJyb3InO1xuXHRcdHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuXHR9XG5cblx0cHVibGljIHRvSlF1ZXJ5KCk6IEpRdWVyeSB7XG5cdFx0Y29uc3QgZXJyb3JDb3VudDogbnVtYmVyID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuXG5cdFx0Y29uc3QgZWxlbWVudCA9IChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cblx0XHRcdFx0PHA+e2dldE1lc3NhZ2UoJ0FwaVJldHJ5RmFpbEVycm9yJykucmVwbGFjZSgvXFwkMS9nLCBlcnJvckNvdW50LnRvU3RyaW5nKCkpfTwvcD5cblx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdHt0aGlzLmVycm9ycy5yZWR1Y2UoXG5cdFx0XHRcdFx0XHQoZXJyb3JzLCBlcnJvciwgaW5kZXgpID0+IFtcblx0XHRcdFx0XHRcdFx0Li4uZXJyb3JzLFxuXHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0e2Vycm9yXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVkdWNlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoYWNjdW11bGF0b3IsIGxpbmUsIG51bWJlcikgPT4gWy4uLmFjY3VtdWxhdG9yLCA8cCBrZXk9e251bWJlcn0+e2xpbmV9PC9wPl0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtdIGFzIFJlYWN0LlJlYWN0RWxlbWVudFtdXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L2xpPixcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRbXSBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXVxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvb2w+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcdGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KSBhcyBKUXVlcnk7XG5cblx0XHRyZXR1cm4gJGVsZW1lbnQ7XG5cdH1cbn1cblxuZXhwb3J0IHtBcGlSZXRyeUZhaWxFcnJvcn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFwaVJldHJ5RmFpbEVycm9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FwaSBjYWxscyBmYWlsZWQgJDEgdGltZShzKSBpbiBhIHJvdy4gRXJyb3JzOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAnQXBpIOiwg+eUqOi/nue7reWksei0pSAkMSDmrKHvvIwkMSDmrKHosIPnlKjnmoTplJnor6/liIbliKvkuLrvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAnQXBpIOiqv+eUqOmAo+e6jOWkseaVlyAkMSDmrKHvvIwkMSDmrKHoqr/nlKjnmoTpjK/oqqTliIbliKXngrrvvJonLFxuXHRcdH0pLFxuXHRcdExvYWRpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZy4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjliqDovb3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo6LyJ5YWl4oCm4oCmJyxcblx0XHR9KSxcblx0XHRUaXRsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOb3RlVEEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2X6K+N6L2s5o2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wtl+ipnui9ieaPmycsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYE5vdGVUQS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7QXBpUmV0cnlGYWlsRXJyb3J9IGZyb20gJy4vdXRpbC9BcGlSZXRyeUZhaWxFcnJvcic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG50eXBlIEFwaVBhcnNlID0gbXcuQXBpWydwYXJzZSddO1xudHlwZSBBcGlQYXJzZVBhcmFtZXRlcnMgPSBQYXJhbWV0ZXJzPEFwaVBhcnNlPjtcbnR5cGUgQXBpUGFyc2VSZXNwb25zZSA9IEF3YWl0ZWQ8UmV0dXJuVHlwZTxBcGlQYXJzZT4+O1xudHlwZSBBcGlSZXNwb25zZSA9IEFwaVBhcnNlUmVzcG9uc2UgfCBBcGlSZXRyeUZhaWxFcnJvcjtcblxuY29uc3QgcGFyc2VXaXRoUmV0cnkgPSAoXG5cdGFyZ3M6IEFwaVBhcnNlUGFyYW1ldGVycyxcblx0Y291bnQ6IG51bWJlciA9IDMsXG5cdHByZXZpb3VzRXJyb3JzOiBzdHJpbmdbXSA9IFtdXG4pOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+ID0+IHtcblx0aWYgKCFjb3VudCkge1xuXHRcdHJldHVybiAkLkRlZmVycmVkPEFwaVJldHJ5RmFpbEVycm9yPigpLnJlamVjdChuZXcgQXBpUmV0cnlGYWlsRXJyb3IocHJldmlvdXNFcnJvcnMpKTtcblx0fVxuXG5cdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblxuXHR2b2lkIGFwaVxuXHRcdC5wYXJzZSguLi5hcmdzKVxuXHRcdC50aGVuKChyZXNwb25zZTogQXBpUGFyc2VSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3I/OiBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cblx0XHRcdGlmIChlcnJvciAmJiB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmICdzdGFjaycgaW4gZXJyb3IpIHtcblx0XHRcdFx0cHJldmlvdXNFcnJvcnNbcHJldmlvdXNFcnJvcnMubGVuZ3RoXSA9IGVycm9yLnN0YWNrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHJldmlvdXNFcnJvcnNbcHJldmlvdXNFcnJvcnMubGVuZ3RoXSA9IFN0cmluZyhlcnJvcik7XG5cdFx0XHR9XG5cblx0XHRcdHBhcnNlV2l0aFJldHJ5KGFyZ3MsIC0tY291bnQsIHByZXZpb3VzRXJyb3JzKVxuXHRcdFx0XHQudGhlbigobmV3UmVzcG9uc2U6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKG5ld1Jlc3BvbnNlKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChuZXdFcnJvcj86IEVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QobmV3RXJyb3IpO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblxuXHRyZXR1cm4gZGVmZXJyZWQ7XG59O1xuXG5jb25zdCBwYXJzZVdpa2l0ZXh0ID0gKC4uLmFyZ3M6IEFwaVBhcnNlUGFyYW1ldGVycyk6IEpRdWVyeS5EZWZlcnJlZDxBcGlSZXNwb25zZT4gPT4ge1xuXHRyZXR1cm4gcGFyc2VXaXRoUmV0cnkoYXJncyk7XG59O1xuXG5leHBvcnQge3R5cGUgQXBpUGFyc2VSZXNwb25zZSwgdHlwZSBBcGlSZXNwb25zZSwgcGFyc2VXaWtpdGV4dH07XG4iLCAiY29uc3QgUE9SVExFVF9DTEFTUzogc3RyaW5nID0gJ3gtbm90ZVRBLXZpZXdlcic7XG5cbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuY29uc3QgV0dfU0tJTjogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuY29uc3QgV0dfVVNFUl9WQVJJQU5UOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpO1xuXG5leHBvcnQge1BPUlRMRVRfQ0xBU1MsIFdHX1BBR0VfTkFNRSwgV0dfU0tJTiwgV0dfVVNFUl9WQVJJQU5UfTtcbiIsICJpbXBvcnQge3R5cGUgQXBpUGFyc2VSZXNwb25zZSwgdHlwZSBBcGlSZXNwb25zZSwgcGFyc2VXaWtpdGV4dH0gZnJvbSAnLi9wYXJzZVdpa2l0ZXh0JztcbmltcG9ydCB7UE9SVExFVF9DTEFTUywgV0dfUEFHRV9OQU1FLCBXR19VU0VSX1ZBUklBTlR9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtBcGlSZXRyeUZhaWxFcnJvcn0gZnJvbSAnLi91dGlsL0FwaVJldHJ5RmFpbEVycm9yJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICcuL3V0aWwvYXNzZXJ0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dmlld2VyTWFwfSBmcm9tICcuL2luaXRWaWV3TWFwJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9pbml0V2luZG93TWFuYWdlcic7XG5cbnR5cGUgUGFyc2VQYXJhbXMgPSBPbWl0PEFwaVBhcnNlUGFyYW1zLCAnYWN0aW9uJyB8ICdmb3JtYXQnPjtcblxuY29uc3QgZ2V0Vmlld2VyID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiwgaGFzaDogc3RyaW5nKTogdHlwZW9mIHZpZXdlciA9PiB7XG5cdGlmICh2aWV3ZXJNYXAuaGFzKGhhc2gpKSB7XG5cdFx0Y29uc3Qgc3RvcmVkVmlld2VyID0gdmlld2VyTWFwLmdldChoYXNoKTtcblx0XHRhc3NlcnQoc3RvcmVkVmlld2VyLCAndmlld2VyJyk7XG5cblx0XHRyZXR1cm4gc3RvcmVkVmlld2VyO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldEVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYCNub3RlVEEtJHtoYXNofWApO1xuXHRpZiAoISR0YXJnZXRFbGVtZW50Lmxlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgZ2V0IEVsZW1lbnQgXCIjbm90ZVRBLSR7aGFzaH1cIi5gKTtcblx0fVxuXG5cdGNsYXNzIE5vdGVUQVZpZXdlciBleHRlbmRzIE9PLnVpLlByb2Nlc3NEaWFsb2cge1xuXHRcdHByaXZhdGUgZGF0YUlzTG9hZGVkOiBib29sZWFuO1xuXHRcdHByaXZhdGUgZXhlY3V0ZVByb21pc2U/OiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmRvRXhlY3V0ZT47XG5cdFx0cHJpdmF0ZSBtdXRhdGlvbk9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuXHRcdHByaXZhdGUgJHJlYWxDb250ZW50OiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSAkYm9keTogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXHRcdHByaXZhdGUgc3RhdGljIGxhc3RFcnJvcj86IE9PLnVpLkVycm9yO1xuXHRcdHByaXZhdGUgc3RhdGljIG5vdGVUQVBhcnNlVGV4dDogc3RyaW5nO1xuXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0c3VwZXIoe1xuXHRcdFx0XHRzaXplOiAnbGFyZ2VyJyxcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmRhdGFJc0xvYWRlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy4kcmVhbENvbnRlbnQgPSAkKDxkaXYgLz4pIGFzIEpRdWVyeTtcblxuXHRcdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy51cGRhdGVTaXplLmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy4kcmVhbENvbnRlbnQuZ2V0KDApIGFzIEhUTUxFbGVtZW50LCB7XG5cdFx0XHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRcdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBvdmVycmlkZSBpbml0aWFsaXplKCk6IHRoaXMge1xuXHRcdFx0c3VwZXIuaW5pdGlhbGl6ZSgpO1xuXG5cdFx0XHRjb25zdCBwYW5lbExheW91dDogT08udWkuUGFuZWxMYXlvdXQgPSBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRcdHBhZGRlZDogdHJ1ZSxcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLiRyZWFsQ29udGVudC5hcHBlbmRUbyhwYW5lbExheW91dC4kZWxlbWVudCk7XG5cdFx0XHRwYW5lbExheW91dC4kZWxlbWVudC5hcHBlbmRUbyh0aGlzLiRib2R5IGFzIEpRdWVyeSk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBvdmVycmlkZSBnZXRTZXR1cFByb2Nlc3MoZGF0YTogT08udWkuRGlhbG9nLlNldHVwRGF0YU1hcCk6IE9PLnVpLlByb2Nlc3Mge1xuXHRcdFx0cmV0dXJuIHN1cGVyLmdldFNldHVwUHJvY2VzcyhkYXRhKS5uZXh0KCgpOiB2b2lkID0+IHtcblx0XHRcdFx0dm9pZCB0aGlzLmRvRXhlY3V0ZVdyYXAoKTtcblx0XHRcdFx0dm9pZCB0aGlzLmV4ZWN1dGVBY3Rpb24oJ21haW4nKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBvdmVycmlkZSBnZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbj86IHN0cmluZyk6IE9PLnVpLlByb2Nlc3Mge1xuXHRcdFx0Y29uc3QgaXNNYWluQWN0aW9uOiBib29sZWFuID0gYWN0aW9uID09PSAnbWFpbic7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHN1cGVyXG5cdFx0XHRcdFx0LmdldEFjdGlvblByb2Nlc3MoYWN0aW9uKVxuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM3MDMwXG5cdFx0XHRcdFx0Lm5leHQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGlzTWFpbkFjdGlvbikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5kb0V4ZWN1dGVXcmFwKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQubmV4dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoaXNNYWluQWN0aW9uICYmIE5vdGVUQVZpZXdlci5sYXN0RXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIE5vdGVUQVZpZXdlci5sYXN0RXJyb3I7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gc3VwZXIuZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24pLmV4ZWN1dGUoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcblx0XHRcdHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgZ2V0Tm90ZVRBUGFyc2VUZXh0KCk6IEpRdWVyeS5EZWZlcnJlZDxBcGlSZXNwb25zZT4ge1xuXHRcdFx0aWYgKE5vdGVUQVZpZXdlci5ub3RlVEFQYXJzZVRleHQpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQ8c3RyaW5nPigpLnJlc29sdmUoTm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0ICRub3RlVEF0aXRsZTogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS10aXRsZScpO1xuXHRcdFx0Y29uc3QgYWN0dWFsVGl0bGU6IHN0cmluZyA9IFdHX1BBR0VfTkFNRS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdFx0XHRjb25zdCB0aXRsZURlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblxuXHRcdFx0aWYgKCRub3RlVEF0aXRsZS5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgdGl0bGVDb252OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkbm90ZVRBdGl0bGUuYXR0cignZGF0YS1ub3RldGEtY29kZScpO1xuXHRcdFx0XHRhc3NlcnQodGl0bGVDb252LCAndGl0bGVDb252Jyk7XG5cblx0XHRcdFx0bGV0IHRpdGxlRGVzYzogc3RyaW5nIHwgdW5kZWZpbmVkID0gJG5vdGVUQXRpdGxlLmF0dHIoJ2RhdGEtbm90ZXRhLWRlc2MnKTtcblx0XHRcdFx0aWYgKHRpdGxlRGVzYykge1xuXHRcdFx0XHRcdHRpdGxlRGVzYyA9IGDvvIgke3RpdGxlRGVzY33vvIlgO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRpdGxlRGVzYyA9ICcnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2lraXRleHQgKz0gYDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj57e2VkaXR8JHthY3R1YWxUaXRsZX18c2VjdGlvbj0wfX08L3NwYW4+XFxuYDtcblx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paH5L2/55SoW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzmoIfpopjmiYvlt6XovazmjaJdXVxcbic7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIOi9rOaNouagh+mimOS4uu+8mi17RHwke3RpdGxlQ29udn19LSR7dGl0bGVEZXNjfVxcbmA7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIOWunumZheagh+mimOS4uu+8mi17Unwke2FjdHVhbFRpdGxlfX0t77yb5b2T5YmN5pi+56S65Li677yaLXt8JHt0aXRsZUNvbnZ9fS1cXG5gO1xuXG5cdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYXJzZVdpa2l0ZXh0KGB7e25vdGVUQS9tdWx0aXRpdGxlfCR7YWN0dWFsVGl0bGV9fX1gLCB7XG5cdFx0XHRcdFx0dGl0bGU6IGFjdHVhbFRpdGxlLFxuXHRcdFx0XHRcdHZhcmlhbnQ6ICd6aCcsXG5cdFx0XHRcdH0gYXMgUGFyc2VQYXJhbXMpXG5cdFx0XHRcdFx0LnRoZW4oKHJlc3VsdEh0bWw6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCAkbXVsdGlUaXRsZTogSlF1ZXJ5ID0gJCgkLnBhcnNlSFRNTChyZXN1bHRIdG1sIGFzIEFwaVBhcnNlUmVzcG9uc2UpKS5maW5kKFxuXHRcdFx0XHRcdFx0XHQnLm5vdGVUQS1tdWx0aXRpdGxlJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGlmICgkbXVsdGlUaXRsZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paHW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzmoIfpopjlj6/og73nu4/ov4fovazmjaJdXVxcbiog6L2s5o2i5qCH6aKY5Li677yaJztcblxuXHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0VmFyaWFudDogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRUZXh0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudWxsPiA9IHt9O1xuXG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbXVsdGlUaXRsZS5jaGlsZHJlbigpKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtbXVsdGl0aXRsZS12YXJpYW50Jyk7XG5cdFx0XHRcdFx0XHRcdFx0YXNzZXJ0KHZhcmlhbnQsICd2YXJpYW50Jyk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0OiBzdHJpbmcgPSAkZWxlbWVudC50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRUZXh0W3ZhcmlhbnRdID0gdGV4dDtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHRWYXJpYW50QXJyYXk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gdGV4dFZhcmlhbnRbdGV4dF07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRleHRWYXJpYW50QXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHRWYXJpYW50QXJyYXlbdGV4dFZhcmlhbnRBcnJheS5sZW5ndGhdID0gdmFyaWFudDtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dFZhcmlhbnRbdGV4dF0gPSBbdmFyaWFudF07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgdGl0bGVDb252ZXJ0ZWQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgPSB2YXJpYW50VGV4dFtXR19VU0VSX1ZBUklBTlQgYXMgc3RyaW5nXTtcblxuXHRcdFx0XHRcdFx0XHRjb25zdCBtdWx0aVRpdGxlOiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGtleSBpbiB2YXJpYW50VGV4dCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bih2YXJpYW50VGV4dCwga2V5KSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IHZhcmlhbnRUZXh0W2tleV07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRleHQgPT09IG51bGwgfHwgdGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50czogc3RyaW5nW10gfCB1bmRlZmluZWQgPSB0ZXh0VmFyaWFudFt0ZXh0XTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXZhcmlhbnRzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRUZXh0W3ZhcmlhbnRdID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50c05hbWU6IHN0cmluZyA9IHZhcmlhbnRzXG5cdFx0XHRcdFx0XHRcdFx0XHQubWFwKCh2YXJpYW50OiBzdHJpbmcpOiBzdHJpbmcgPT4gYC17Unx7e01lZGlhV2lraTpWYXJpYW50bmFtZS0ke3ZhcmlhbnR9fX19LWApXG5cdFx0XHRcdFx0XHRcdFx0XHQuam9pbign44CBJyk7XG5cdFx0XHRcdFx0XHRcdFx0bXVsdGlUaXRsZVttdWx0aVRpdGxlLmxlbmd0aF0gPSBgJHt2YXJpYW50c05hbWV977yaLXtSfCR7dGV4dH19LWA7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBzdWJJdGVtU2VwYXJhdG9yOiBzdHJpbmcgPSAnXFxuKiogJztcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYCR7c3ViSXRlbVNlcGFyYXRvcn0ke211bHRpVGl0bGUuam9pbihzdWJJdGVtU2VwYXJhdG9yKX1gO1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgXFxuKiDlrp7pmYXmoIfpopjkuLrvvJote1J8JHthY3R1YWxUaXRsZX19Le+8m+W9k+WJjeaYvuekuuS4uu+8mi17Unwke3RpdGxlQ29udmVydGVkfX0tXFxuYDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlc29sdmUoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXG5cdFx0XHR0aXRsZURlZmVycmVkXG5cdFx0XHRcdC50aGVuKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRjb25zdCAkbm90ZVRBZ3JvdXBzOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLWdyb3VwID4gKltkYXRhLW5vdGV0YS1ncm91cF0nKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJG5vdGVUQWdyb3Vwcykge1xuXHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKCRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwLXNvdXJjZScpKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ3RlbXBsYXRlJzpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBge3tDR3JvdXAvJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbW9kdWxlJzpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBge3sjaW52b2tlOkNHcm91cFZpZXdlcnxkaWFsb2d8JHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbm9uZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDsg5pys5paH5L2/55So55qE5YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAneWwmuacquWIm+W7ulxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYCoge3tlZGl0fE1vZHVsZTpDR3JvdXAvJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfXzliJvlu7rlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCdfX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA7IOacquefpeWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ3mnaXmupDigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwLXNvdXJjZScpfeKAnVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWxvY2FsOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLWxvY2FsJyk7XG5cdFx0XHRcdFx0aWYgKCRub3RlVEFsb2NhbC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA8c3BhbiBzdHlsZT1cImZsb2F0OnJpZ2h0XCI+e3tlZGl0fCR7YWN0dWFsVGl0bGV9fHNlY3Rpb249MH19PC9zcGFuPlxcbmA7XG5cdFx0XHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlofkvb/nlKhbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOWFqOaWh+aJi+W3pei9rOaNol1dXFxuJztcblxuXHRcdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWxvY2FscyA9ICRub3RlVEFsb2NhbC5jaGlsZHJlbignKltkYXRhLW5vdGV0YS1jb2RlXScpO1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRub3RlVEFsb2NhbHMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdFx0bGV0IGxvY2FsRGVzYzogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZGVzYycpO1xuXHRcdFx0XHRcdFx0XHRpZiAobG9jYWxEZXNjKSB7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYWxEZXNjID0gYO+8iCR7bG9jYWxEZXNjfe+8iWA7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYWxEZXNjID0gJyc7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBsb2NhbENvbnY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWNvZGUnKTtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYCogLXtEfCR7bG9jYWxDb252fX0tJHtsb2NhbERlc2N95b2T5YmN5pi+56S65Li677yaLXske2xvY2FsQ29udn19LVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0d2lraXRleHQgKz0gJ3t7bm90ZVRBL2Zvb3Rlcn19XFxuJztcblxuXHRcdFx0XHRcdE5vdGVUQVZpZXdlci5ub3RlVEFQYXJzZVRleHQgPSB3aWtpdGV4dDtcblxuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZSh3aWtpdGV4dCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZG9FeGVjdXRlKCkge1xuXHRcdFx0aWYgKHRoaXMuZGF0YUlzTG9hZGVkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpLnJlc29sdmUoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuZW1wdHkoKS5hcHBlbmQoPHA+e2dldE1lc3NhZ2UoJ0xvYWRpbmcnKX08L3A+KTtcblxuXHRcdFx0cmV0dXJuIE5vdGVUQVZpZXdlci5nZXROb3RlVEFQYXJzZVRleHQoKVxuXHRcdFx0XHQudGhlbigod2lraXRleHQ6IEFwaVJlc3BvbnNlKSA9PlxuXHRcdFx0XHRcdHBhcnNlV2lraXRleHQoXG5cdFx0XHRcdFx0XHR3aWtpdGV4dCBhcyBBcGlQYXJzZVJlc3BvbnNlLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ1RlbXBsYXRlOkNHcm91cC8tJyxcblx0XHRcdFx0XHRcdFx0dmFyaWFudDogV0dfVVNFUl9WQVJJQU5UIGFzIHN0cmluZyxcblx0XHRcdFx0XHRcdH0gYXMgUGFyc2VQYXJhbXNcblx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdFx0LnRoZW4oKHBhcnNlZEh0bWw6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0dGhpcy4kcmVhbENvbnRlbnRcblx0XHRcdFx0XHRcdC5lbXB0eSgpXG5cdFx0XHRcdFx0XHQuaHRtbChwYXJzZWRIdG1sIGFzIEFwaVBhcnNlUmVzcG9uc2UpXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoYCR7UE9SVExFVF9DTEFTU30tb3V0cHV0YCk7XG5cblx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHR0aGlzLiRyZWFsQ29udGVudC5maW5kKCcubXctY29sbGFwc2libGUnKSBhcyBKUXVlcnkgJiB7bWFrZUNvbGxhcHNpYmxlOiAoKSA9PiBKUXVlcnl9XG5cdFx0XHRcdFx0KS5tYWtlQ29sbGFwc2libGUoKTtcblxuXHRcdFx0XHRcdHRoaXMudXBkYXRlU2l6ZSgpO1xuXHRcdFx0XHRcdHRoaXMuZGF0YUlzTG9hZGVkID0gdHJ1ZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IgfCBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEFwaVJldHJ5RmFpbEVycm9yKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgT08udWkuRXJyb3IoZXJyb3IudG9KUXVlcnkoKSwge1xuXHRcdFx0XHRcdFx0XHRyZWNvdmVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgT08udWkuRXJyb3IoU3RyaW5nKGVycm9yKSwge1xuXHRcdFx0XHRcdFx0XHRyZWNvdmVyYWJsZTogZmFsc2UsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZG9FeGVjdXRlV3JhcCgpIHtcblx0XHRcdGlmICh0aGlzLmV4ZWN1dGVQcm9taXNlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5leGVjdXRlUHJvbWlzZSA9IHRoaXMuZG9FeGVjdXRlKCk7XG5cdFx0XHRcdGRlbGV0ZSBOb3RlVEFWaWV3ZXIubGFzdEVycm9yO1xuXG5cdFx0XHRcdGNvbnN0IGV4ZWN1dGVEZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cdFx0XHRcdHZvaWQgKHRoaXMuZXhlY3V0ZVByb21pc2UgYXMgSlF1ZXJ5LlByb21pc2U8QXBpUmVzcG9uc2U+KVxuXHRcdFx0XHRcdC50aGVuKChyZXNwb25zZTogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgZXhlY3V0ZURlZmVycmVkLnJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKChlcnJvcjogRXJyb3IgfCBPTy51aS5FcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgT08udWkuRXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Tm90ZVRBVmlld2VyLmxhc3RFcnJvciA9IGVycm9yO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dm9pZCBleGVjdXRlRGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5hbHdheXMoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZXhlY3V0ZVByb21pc2U7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIGV4ZWN1dGVEZWZlcnJlZDtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXHRcdFx0dm9pZCAodGhpcy5leGVjdXRlUHJvbWlzZSBhcyBKUXVlcnkuUHJvbWlzZTxBcGlSZXNwb25zZT4pXG5cdFx0XHRcdC50aGVuKChyZXNwb25zZTogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycm9yOiBFcnJvciB8IE9PLnVpLkVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgT08udWkuRXJyb3IpIHtcblx0XHRcdFx0XHRcdE5vdGVUQVZpZXdlci5sYXN0RXJyb3IgPSBlcnJvcjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LmFsd2F5cygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZXhlY3V0ZVByb21pc2U7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fVxuXHR9XG5cblx0Tm90ZVRBVmlld2VyLnN0YXRpYyA9IHtcblx0XHQuLi5PTy51aS5Qcm9jZXNzRGlhbG9nLnN0YXRpYyxcblx0fTtcblx0Tm90ZVRBVmlld2VyLnN0YXRpYy5uYW1lID0gYE5vdGVUQVZpZXdlci0ke2hhc2h9YDtcblx0Tm90ZVRBVmlld2VyLnN0YXRpYy50aXRsZSA9IGdldE1lc3NhZ2UoJ1RpdGxlJyk7XG5cdE5vdGVUQVZpZXdlci5zdGF0aWMuYWN0aW9ucyA9IFtcblx0XHR7XG5cdFx0XHRsYWJlbDogbXcubXNnKCdvb3VpLWRpYWxvZy1wcm9jZXNzLWRpc21pc3MnKSxcblx0XHRcdGZsYWdzOiAnc2FmZScsXG5cdFx0fSxcblx0XTtcblxuXHRjb25zdCB2aWV3ZXI6IE5vdGVUQVZpZXdlciA9IG5ldyBOb3RlVEFWaWV3ZXIoKTtcblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFt2aWV3ZXJdKTtcblx0dmlld2VyTWFwLnNldChoYXNoLCB2aWV3ZXIpO1xuXG5cdHJldHVybiB2aWV3ZXI7XG59O1xuXG5jb25zdCByZXNldEFsbFZpZXdlciA9ICgpOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCB2aWV3ZXIgb2Ygdmlld2VyTWFwLnZhbHVlcygpKSB7XG5cdFx0dmlld2VyLmRlc3Ryb3koKTtcblx0fVxuXHR2aWV3ZXJNYXAuY2xlYXIoKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xufTtcblxuZXhwb3J0IHtnZXRWaWV3ZXIsIHJlc2V0QWxsVmlld2VyfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZVxuZnVuY3Rpb24gYXNzZXJ0PFQ+KHZhbHVlOiBUIHwgdW5kZWZpbmVkLCB2YWx1ZU5hbWU6IHN0cmluZyk6IGFzc2VydHMgdmFsdWUge1xuXHRpZiAoIXZhbHVlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBBc3NlcnQgRmFpbCwgJHt2YWx1ZU5hbWV9ID09IGZhbHNlLmApO1xuXHR9XG59XG5cbmV4cG9ydCB7YXNzZXJ0fTtcbiIsICJpbXBvcnQge3R5cGUgZ2V0Vmlld2VyfSBmcm9tICcuL3ZpZXdlcic7XG5cbmNvbnN0IHZpZXdlck1hcCA9IG5ldyBNYXA8c3RyaW5nLCBSZXR1cm5UeXBlPHR5cGVvZiBnZXRWaWV3ZXI+PigpO1xuXG5leHBvcnQge3ZpZXdlck1hcH07XG4iLCAiY29uc3QgaW5pdFdpbmRvd01hbmFnZXIgPSAoKTogT08udWkuV2luZG93TWFuYWdlciA9PiB7XG5cdHJldHVybiBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xufTtcblxuY29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IGluaXRXaW5kb3dNYW5hZ2VyKCk7XG5cbmV4cG9ydCB7d2luZG93TWFuYWdlcn07XG4iLCAiaW1wb3J0IHtQT1JUTEVUX0NMQVNTLCBXR19TS0lOfSBmcm9tICcuL2NvbnN0YW50JztcblxubGV0IHBvcnRsZXRJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5jb25zdCBpbml0R2xvYmFsTWV0aG9kcyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB0eXBlb2YgZ2xvYmFsTWV0aG9kcyA9PiB7XG5cdGNvbnN0IGdsb2JhbE1ldGhvZHM6IHtcblx0XHRpbml0KCk6IHZvaWQ7XG5cdFx0ZGVJbml0KCk6IHZvaWQ7XG5cdH0gPSB7XG5cdFx0aW5pdCgpIHtcblx0XHRcdC8qIGZha2UgKi9cblx0XHR9LFxuXHRcdGRlSW5pdCgpIHtcblx0XHRcdC8qIGZha2UgKi9cblx0XHR9LFxuXHR9O1xuXG5cdGlmIChXR19TS0lOID09PSAndmVjdG9yJykge1xuXHRcdHBvcnRsZXRJZCA9ICdwLW5vdGVUQSc7XG5cblx0XHRsZXQgJG5vdGVUQVRhYjogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXHRcdGdsb2JhbE1ldGhvZHMuaW5pdCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGlmICgkbm90ZVRBVGFiIHx8ICFwb3J0bGV0SWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgbm90ZVRBVGFiOiBIVE1MRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXQocG9ydGxldElkKTtcblx0XHRcdGlmICghbm90ZVRBVGFiKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRub3RlVEFUYWIgPSAkKG5vdGVUQVRhYik7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWF3aWtpL2NsYXNzLWRvY1xuXHRcdFx0JG5vdGVUQVRhYlxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoYG13LXBvcnRsZXQtJHtwb3J0bGV0SWR9YClcblx0XHRcdFx0LmFkZENsYXNzKFtgbXctcG9ydGxldC0ke3BvcnRsZXRJZC5yZXBsYWNlKCdwLScsICcnKX1gLCAndmVjdG9yLW1lbnUtdGFicycsICd2ZWN0b3ItbWVudS10YWJzLWxlZ2FjeSddKTtcblx0XHRcdCRib2R5LmZpbmQoJyNwLXZhcmlhbnRzJykuYWZ0ZXIoJG5vdGVUQVRhYik7XG5cdFx0fTtcblx0XHRnbG9iYWxNZXRob2RzLmRlSW5pdCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGlmICghJG5vdGVUQVRhYikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQkbm90ZVRBVGFiLmZpbmQoJ3VsJykuZW1wdHkoKTtcblx0XHRcdGlmIChwb3J0bGV0SWQpIHtcblx0XHRcdFx0bXcudXRpbC5oaWRlUG9ydGxldChwb3J0bGV0SWQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0gZWxzZSBpZiAoV0dfU0tJTiA9PT0gJ3ZlY3Rvci0yMDIyJykge1xuXHRcdHBvcnRsZXRJZCA9ICdwLWFzc29jaWF0ZWQtcGFnZXMnO1xuXG5cdFx0Z2xvYmFsTWV0aG9kcy5kZUluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHQkYm9keS5maW5kKFBPUlRMRVRfQ0xBU1MpLnJlbW92ZSgpO1xuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gZ2xvYmFsTWV0aG9kcztcbn07XG5cbmV4cG9ydCB7cG9ydGxldElkLCBpbml0R2xvYmFsTWV0aG9kc307XG4iLCAiaW1wb3J0IHtnZXRWaWV3ZXIsIHJlc2V0QWxsVmlld2VyfSBmcm9tICcuL21vZHVsZXMvdmlld2VyJztcbmltcG9ydCB7aW5pdEdsb2JhbE1ldGhvZHMsIHBvcnRsZXRJZH0gZnJvbSAnLi9tb2R1bGVzL2luaXRHbG9iYWxNZXRob2RzJztcbmltcG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2VuZXJhdGVQb3J0bGV0TGlua30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVQb3J0bGV0TGluayc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlcic7XG5cbmxldCBpc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBub3RlVEEoJGNvbnRlbnQpOiB2b2lkIHtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJGNvbnRlbnQucGFyZW50cygnYm9keScpO1xuXG5cdGlmICghaXNJbml0KSB7XG5cdFx0aXNJbml0ID0gdHJ1ZTtcblx0XHR3aW5kb3dNYW5hZ2VyLiRlbGVtZW50LmFwcGVuZFRvKCRib2R5KTtcblx0fVxuXG5cdHJlc2V0QWxsVmlld2VyKCk7XG5cblx0Y29uc3QgZ2xvYmFsTWV0aG9kcyA9IGluaXRHbG9iYWxNZXRob2RzKCRib2R5KTtcblx0Z2xvYmFsTWV0aG9kcy5kZUluaXQoKTtcblx0Z2xvYmFsTWV0aG9kcy5pbml0KCk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoJy5tdy1pbmRpY2F0b3JbaWRePW13LWluZGljYXRvci1ub3RlVEEtXScpKSB7XG5cdFx0Y29uc3QgaGFzaDogc3RyaW5nID0gZWxlbWVudC5pZC5yZXBsYWNlKC9ebXctaW5kaWNhdG9yLW5vdGVUQS0vLCAnJyk7XG5cblx0XHRsZXQgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKHBvcnRsZXRJZCkge1xuXHRcdFx0JGVsZW1lbnQuaGlkZSgpO1xuXG5cdFx0XHRjb25zdCAkcG9ydGxldExpbms6IEpRdWVyeSB8IHVuZGVmaW5lZCA9IGdlbmVyYXRlUG9ydGxldExpbmsoaGFzaCk7XG5cdFx0XHRpZiAoISRwb3J0bGV0TGluaykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0JGVsZW1lbnQgPSAkcG9ydGxldExpbms7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3BlbmVyTGlzdGVuZXIgPSAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCFjaGVja0ExMXlDb25maXJtS2V5KGV2ZW50KSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRnZXRWaWV3ZXIoJGJvZHksIGhhc2gpLm9wZW4oKTtcblx0XHR9O1xuXHRcdCRlbGVtZW50Lm9uKCdjbGljaycsIG9wZW5lckxpc3RlbmVyKTtcblx0XHQkZWxlbWVudC5vbigna2V5ZG93bicsIG9wZW5lckxpc3RlbmVyKTtcblx0fVxufSk7XG4iLCAiaW1wb3J0IHtQT1JUTEVUX0NMQVNTfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge3BvcnRsZXRJZH0gZnJvbSAnLi4vaW5pdEdsb2JhbE1ldGhvZHMnO1xuXG5jb25zdCBnZW5lcmF0ZVBvcnRsZXRMaW5rID0gKGhhc2g6IHN0cmluZyk6IEpRdWVyeSB8IHVuZGVmaW5lZCA9PiB7XG5cdGlmICghcG9ydGxldElkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgJ+axiS/mvKInLCBgY2Etbm90ZVRBLSR7aGFzaH1gKTtcblx0aWYgKCFwb3J0bGV0TGluaykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHN0eWxlID0ge1xuXHRcdGhlaWdodDogJzg1JScsXG5cdFx0cGFkZGluZzogJzFweCAzcHgnLFxuXHR9IGFzIGNvbnN0IHNhdGlzZmllcyBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuXG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5ID0gJChwb3J0bGV0TGluaykuYWRkQ2xhc3MoUE9SVExFVF9DTEFTUyk7XG5cdCRwb3J0bGV0TGlua1xuXHRcdC5maW5kKCdhJylcblx0XHQuZW1wdHkoKVxuXHRcdC5hcHBlbmQoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHQuLi5zdHlsZSxcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZDNlM2Y0Jyxcblx0XHRcdFx0XHRcdGNvbG9yOiAnIzAwMCcsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsn5rGJJ31cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHQuLi5zdHlsZSxcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZTllOWU5Jyxcblx0XHRcdFx0XHRcdGNvbG9yOiAnIzQzNDM0MycsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsn5ryiJ31cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblxuXHRyZXR1cm4gJHBvcnRsZXRMaW5rO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVBvcnRsZXRMaW5rfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TSxHQUFHbE0sUUFBUSx5QkFBeUIsRUFBRTtBQUVuRSxVQUFJUyxXQUFtQkMsRUFBRWQsT0FBTztBQUNoQyxVQUFJc0ssV0FBVztBQUNkekosaUJBQVMwTCxLQUFLO0FBRWQsY0FBTVosZUFBbUNOLG9CQUFvQjVILElBQUk7QUFDakUsWUFBSSxDQUFDa0ksY0FBYztBQUNsQjtRQUNEO0FBRUE5SyxtQkFBVzhLO01BQ1o7QUFFQSxZQUFNYSxpQkFBa0JDLFdBQXlEO0FBQ2hGLFlBQUksRUFBQSxHQUFDdEIsbUJBQUF1QixxQkFBb0JELEtBQUssR0FBRztBQUNoQztRQUNEO0FBRUFBLGNBQU1FLGVBQWU7QUFDckJwSixrQkFBVUMsT0FBT0MsSUFBSSxFQUFFbUosS0FBSztNQUM3QjtBQUNBL0wsZUFBU2dNLEdBQUcsU0FBU0wsY0FBYztBQUNuQzNMLGVBQVNnTSxHQUFHLFdBQVdMLGNBQWM7SUFDdEM7RUFBQSxTQUFBakYsS0FBQTtBQUFBNkUsZUFBQTVFLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUE2RSxlQUFBM0UsRUFBQTtFQUFBO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQXBpUmV0cnlGYWlsRXJyb3IiLCAibG9jYWxpemUiLCAiZW4iLCAiTG9hZGluZyIsICJUaXRsZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiRXJyb3IiLCAiZXJyb3JzIiwgImNvbnN0cnVjdG9yIiwgImNvbmNhdCIsICJsZW5ndGgiLCAibmFtZSIsICJ0b0pRdWVyeSIsICJlcnJvckNvdW50IiwgImVsZW1lbnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJyZXBsYWNlIiwgInRvU3RyaW5nIiwgInJlZHVjZSIsICJlcnJvciIsICJpbmRleCIsICJzcGxpdCIsICJhY2N1bXVsYXRvciIsICJsaW5lIiwgIm51bWJlciIsICIkZWxlbWVudCIsICIkIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAicGFyc2VXaXRoUmV0cnkiLCAiYXJncyIsICJjb3VudCIsICJwcmV2aW91c0Vycm9ycyIsICJEZWZlcnJlZCIsICJyZWplY3QiLCAiZGVmZXJyZWQiLCAicGFyc2UiLCAidGhlbiIsICJyZXNwb25zZSIsICJyZXNvbHZlIiwgImNhdGNoIiwgImNvbnNvbGUiLCAic3RhY2siLCAiU3RyaW5nIiwgIm5ld1Jlc3BvbnNlIiwgIm5ld0Vycm9yIiwgInBhcnNlV2lraXRleHQiLCAiUE9SVExFVF9DTEFTUyIsICJXR19QQUdFX05BTUUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19TS0lOIiwgIldHX1VTRVJfVkFSSUFOVCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYXNzZXJ0IiwgInZhbHVlIiwgInZhbHVlTmFtZSIsICJ2aWV3ZXJNYXAiLCAiTWFwIiwgImluaXRXaW5kb3dNYW5hZ2VyIiwgIk9PIiwgInVpIiwgIldpbmRvd01hbmFnZXIiLCAid2luZG93TWFuYWdlciIsICJnZXRWaWV3ZXIiLCAiJGJvZHkiLCAiaGFzaCIsICJoYXMiLCAic3RvcmVkVmlld2VyIiwgIiR0YXJnZXRFbGVtZW50IiwgImZpbmQiLCAiTm90ZVRBVmlld2VyIiwgIlByb2Nlc3NEaWFsb2ciLCAiZGF0YUlzTG9hZGVkIiwgImV4ZWN1dGVQcm9taXNlIiwgIm11dGF0aW9uT2JzZXJ2ZXIiLCAiJHJlYWxDb250ZW50IiwgImxhc3RFcnJvciIsICJub3RlVEFQYXJzZVRleHQiLCAic2l6ZSIsICJNdXRhdGlvbk9ic2VydmVyIiwgInVwZGF0ZVNpemUiLCAiYmluZCIsICJvYnNlcnZlIiwgImNoaWxkTGlzdCIsICJzdWJ0cmVlIiwgImluaXRpYWxpemUiLCAicGFuZWxMYXlvdXQiLCAiUGFuZWxMYXlvdXQiLCAiZXhwYW5kZWQiLCAicGFkZGVkIiwgImFwcGVuZFRvIiwgImdldFNldHVwUHJvY2VzcyIsICJkYXRhIiwgIm5leHQiLCAiZG9FeGVjdXRlV3JhcCIsICJleGVjdXRlQWN0aW9uIiwgImdldEFjdGlvblByb2Nlc3MiLCAiYWN0aW9uIiwgImlzTWFpbkFjdGlvbiIsICJleGVjdXRlIiwgImRlc3Ryb3kiLCAiZGlzY29ubmVjdCIsICJnZXROb3RlVEFQYXJzZVRleHQiLCAiJG5vdGVUQXRpdGxlIiwgImFjdHVhbFRpdGxlIiwgIndpa2l0ZXh0IiwgInRpdGxlRGVmZXJyZWQiLCAidGl0bGVDb252IiwgImF0dHIiLCAidGl0bGVEZXNjIiwgInRpdGxlIiwgInZhcmlhbnQiLCAicmVzdWx0SHRtbCIsICIkbXVsdGlUaXRsZSIsICJwYXJzZUhUTUwiLCAidGV4dFZhcmlhbnQiLCAidmFyaWFudFRleHQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJjaGlsZHJlbiIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAidGV4dCIsICJ0cmltIiwgInRleHRWYXJpYW50QXJyYXkiLCAiZXJyIiwgImUiLCAiZiIsICJ0aXRsZUNvbnZlcnRlZCIsICJtdWx0aVRpdGxlIiwgIk9iamVjdCIsICJoYXNPd24iLCAidmFyaWFudHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAidmFyaWFudHNOYW1lIiwgIm1hcCIsICJqb2luIiwgInN1Ykl0ZW1TZXBhcmF0b3IiLCAiJG5vdGVUQWdyb3VwcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICIkbm90ZVRBbG9jYWwiLCAiJG5vdGVUQWxvY2FscyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJsb2NhbERlc2MiLCAibG9jYWxDb252IiwgImRvRXhlY3V0ZSIsICJlbXB0eSIsICJhcHBlbmQiLCAicGFyc2VkSHRtbCIsICJodG1sIiwgImFkZENsYXNzIiwgIm1ha2VDb2xsYXBzaWJsZSIsICJyZWNvdmVyYWJsZSIsICJleGVjdXRlRGVmZXJyZWQiLCAiYWx3YXlzIiwgInN0YXRpYyIsICJhY3Rpb25zIiwgImxhYmVsIiwgIm1zZyIsICJmbGFncyIsICJ2aWV3ZXIiLCAiYWRkV2luZG93cyIsICJzZXQiLCAicmVzZXRBbGxWaWV3ZXIiLCAiX2l0ZXJhdG9yNiIsICJ2YWx1ZXMiLCAiX3N0ZXA2IiwgImNsZWFyIiwgImNsZWFyV2luZG93cyIsICJwb3J0bGV0SWQiLCAiaW5pdEdsb2JhbE1ldGhvZHMiLCAiZ2xvYmFsTWV0aG9kcyIsICJpbml0IiwgImRlSW5pdCIsICIkbm90ZVRBVGFiIiwgIm5vdGVUQVRhYiIsICJ1dGlsIiwgImFkZFBvcnRsZXQiLCAicmVtb3ZlQ2xhc3MiLCAiYWZ0ZXIiLCAiaGlkZVBvcnRsZXQiLCAicmVtb3ZlIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiZ2VuZXJhdGVQb3J0bGV0TGluayIsICJwb3J0bGV0TGluayIsICJhZGRQb3J0bGV0TGluayIsICJzdHlsZSIsICJoZWlnaHQiLCAicGFkZGluZyIsICIkcG9ydGxldExpbmsiLCAiYmFja2dyb3VuZCIsICJjb2xvciIsICJpc0luaXQiLCAiaG9vayIsICJhZGQiLCAibm90ZVRBIiwgIiRjb250ZW50IiwgInBhcmVudHMiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiaWQiLCAiaGlkZSIsICJvcGVuZXJMaXN0ZW5lciIsICJldmVudCIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgInByZXZlbnREZWZhdWx0IiwgIm9wZW4iLCAib24iXQp9Cg==
