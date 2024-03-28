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
//! src/NoteTA/options.json
var version = "1.0";
var portletClass = "x-noteTA-viewer";
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
  const $portletLink = $(portletLink).addClass("".concat(portletClass));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9vcHRpb25zLmpzb24iLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3IudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9hcGkudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3BhcnNlV2lraXRleHQudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3ZpZXdlci50c3giLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvYXNzZXJ0LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pbml0Vmlld01hcC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXIudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2luaXRHbG9iYWxNZXRob2RzLnRzIiwgInNyYy9Ob3RlVEEvTm90ZVRBLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL2dlbmVyYXRlUG9ydGxldExpbmsudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidmVyc2lvblwiOiBcIjEuMFwiLFxuXHRcInBvcnRsZXRDbGFzc1wiOiBcIngtbm90ZVRBLXZpZXdlclwiXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY2xhc3MgQXBpUmV0cnlGYWlsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdHByaXZhdGUgZXJyb3JzOiBzdHJpbmdbXTtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoZXJyb3JzOiBzdHJpbmdbXSkge1xuXHRcdHN1cGVyKGBBcGkgY2FsbHMgZmFpbGVkICR7ZXJyb3JzLmxlbmd0aH0gdGltZShzKSBpbiBhIHJvdy5gKTtcblx0XHR0aGlzLm5hbWUgPSAnQXBpUmV0cnlGYWlsRXJyb3InO1xuXHRcdHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuXHR9XG5cblx0cHVibGljIHRvSlF1ZXJ5KCk6IEpRdWVyeSB7XG5cdFx0Y29uc3QgZXJyb3JDb3VudDogbnVtYmVyID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuXG5cdFx0Y29uc3QgZWxlbWVudCA9IChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cblx0XHRcdFx0PHA+e2dldE1lc3NhZ2UoJ0FwaVJldHJ5RmFpbEVycm9yJykucmVwbGFjZSgvXFwkMS9nLCBlcnJvckNvdW50LnRvU3RyaW5nKCkpfTwvcD5cblx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdHt0aGlzLmVycm9ycy5tYXA8UmVhY3QuUmVhY3RFbGVtZW50PigoZXJyb3IsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdHtlcnJvci5zcGxpdCgnXFxuJykubWFwPFJlYWN0LlJlYWN0RWxlbWVudD4oKGxpbmUsIG51bWJlcikgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxwIGtleT17bnVtYmVyfT57bGluZX08L3A+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9vbD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpIGFzIEpRdWVyeTtcblxuXHRcdHJldHVybiAkZWxlbWVudDtcblx0fVxufVxuXG5leHBvcnQge0FwaVJldHJ5RmFpbEVycm9yfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QXBpUmV0cnlGYWlsRXJyb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXBpIGNhbGxzIGZhaWxlZCAkMSB0aW1lKHMpIGluIGEgcm93LiBFcnJvcnM6ICcsXG5cdFx0XHQnemgtaGFucyc6ICdBcGkg6LCD55So6L+e57ut5aSx6LSlICQxIOasoe+8jCQxIOasoeiwg+eUqOeahOmUmeivr+WIhuWIq+S4uu+8micsXG5cdFx0XHQnemgtaGFudCc6ICdBcGkg6Kq/55So6YCj57qM5aSx5pWXICQxIOasoe+8jCQxIOasoeiqv+eUqOeahOmMr+iqpOWIhuWIpeeCuu+8micsXG5cdFx0fSksXG5cdFx0TG9hZGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWKoOi9veKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjovInlhaXigKbigKYnLFxuXHRcdH0pLFxuXHRcdFRpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05vdGVUQScsXG5cdFx0XHQnemgtaGFucyc6ICflrZfor43ovazmjaInLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2X6Kme6L2J5o+bJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBOb3RlVEEvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxudHlwZSBBcGlQYXJzZSA9IG13LkFwaVsncGFyc2UnXTtcbnR5cGUgQXBpUGFyc2VQYXJhbWV0ZXJzID0gUGFyYW1ldGVyczxBcGlQYXJzZT47XG50eXBlIEFwaVBhcnNlUmVzcG9uc2UgPSBBd2FpdGVkPFJldHVyblR5cGU8QXBpUGFyc2U+PjtcbnR5cGUgQXBpUmVzcG9uc2UgPSBBcGlQYXJzZVJlc3BvbnNlIHwgQXBpUmV0cnlGYWlsRXJyb3I7XG5cbmNvbnN0IHBhcnNlV2l0aFJldHJ5ID0gKFxuXHRhcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMsXG5cdGNvdW50OiBudW1iZXIgPSAzLFxuXHRwcmV2aW91c0Vycm9yczogc3RyaW5nW10gPSBbXVxuKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiA9PiB7XG5cdGlmICghY291bnQpIHtcblx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXRyeUZhaWxFcnJvcj4oKS5yZWplY3QobmV3IEFwaVJldHJ5RmFpbEVycm9yKHByZXZpb3VzRXJyb3JzKSk7XG5cdH1cblxuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0dm9pZCBhcGlcblx0XHQucGFyc2UoLi4uYXJncylcblx0XHQudGhlbigocmVzcG9uc2U6IEFwaVBhcnNlUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yPzogRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG5cdFx0XHRpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnc3RhY2snIGluIGVycm9yKSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBlcnJvci5zdGFjaztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBTdHJpbmcoZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZVdpdGhSZXRyeShhcmdzLCAtLWNvdW50LCBwcmV2aW91c0Vycm9ycylcblx0XHRcdFx0LnRoZW4oKG5ld1Jlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShuZXdSZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgobmV3RXJyb3I/OiBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KG5ld0Vycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIGRlZmVycmVkO1xufTtcblxuY29uc3QgcGFyc2VXaWtpdGV4dCA9ICguLi5hcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+ID0+IHtcblx0cmV0dXJuIHBhcnNlV2l0aFJldHJ5KGFyZ3MpO1xufTtcblxuZXhwb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7dHlwZSBBcGlQYXJzZVJlc3BvbnNlLCB0eXBlIEFwaVJlc3BvbnNlLCBwYXJzZVdpa2l0ZXh0fSBmcm9tICcuL3BhcnNlV2lraXRleHQnO1xuaW1wb3J0IHtBcGlSZXRyeUZhaWxFcnJvcn0gZnJvbSAnLi91dGlsL0FwaVJldHJ5RmFpbEVycm9yJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICcuL3V0aWwvYXNzZXJ0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dmlld2VyTWFwfSBmcm9tICcuL2luaXRWaWV3TWFwJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9pbml0V2luZG93TWFuYWdlcic7XG5cbnR5cGUgUGFyc2VQYXJhbXMgPSBPbWl0PEFwaVBhcnNlUGFyYW1zLCAnYWN0aW9uJyB8ICdmb3JtYXQnPjtcblxuY29uc3QgZ2V0Vmlld2VyID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiwgaGFzaDogc3RyaW5nKTogdHlwZW9mIHZpZXdlciA9PiB7XG5cdGlmICh2aWV3ZXJNYXAuaGFzKGhhc2gpKSB7XG5cdFx0Y29uc3Qgc3RvcmVkVmlld2VyID0gdmlld2VyTWFwLmdldChoYXNoKTtcblx0XHRhc3NlcnQoc3RvcmVkVmlld2VyLCAndmlld2VyJyk7XG5cblx0XHRyZXR1cm4gc3RvcmVkVmlld2VyO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldEVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYCNub3RlVEEtJHtoYXNofWApO1xuXHRpZiAoISR0YXJnZXRFbGVtZW50Lmxlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgZ2V0IEVsZW1lbnQgXCIjbm90ZVRBLSR7aGFzaH1cIi5gKTtcblx0fVxuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjbGFzcyBOb3RlVEFWaWV3ZXIgZXh0ZW5kcyBPTy51aS5Qcm9jZXNzRGlhbG9nIHtcblx0XHRwcml2YXRlIGRhdGFJc0xvYWRlZDogYm9vbGVhbjtcblx0XHRwcml2YXRlIGV4ZWN1dGVQcm9taXNlPzogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5kb0V4ZWN1dGU+O1xuXHRcdHByaXZhdGUgbXV0YXRpb25PYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcblx0XHRwcml2YXRlICRyZWFsQ29udGVudDogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgJGJvZHk6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblx0XHRwcml2YXRlIHN0YXRpYyBsYXN0RXJyb3I/OiBPTy51aS5FcnJvcjtcblx0XHRwcml2YXRlIHN0YXRpYyBub3RlVEFQYXJzZVRleHQ6IHN0cmluZztcblxuXHRcdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHN1cGVyKHtcblx0XHRcdFx0c2l6ZTogJ2xhcmdlcicsXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5kYXRhSXNMb2FkZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMuJHJlYWxDb250ZW50ID0gJCg8ZGl2IC8+KSBhcyBKUXVlcnk7XG5cblx0XHRcdHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMudXBkYXRlU2l6ZS5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuJHJlYWxDb250ZW50LmdldCgwKSBhcyBIVE1MRWxlbWVudCwge1xuXHRcdFx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0XHRcdHN1YnRyZWU6IHRydWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwdWJsaWMgb3ZlcnJpZGUgaW5pdGlhbGl6ZSgpOiB0aGlzIHtcblx0XHRcdHN1cGVyLmluaXRpYWxpemUoKTtcblxuXHRcdFx0Y29uc3QgcGFuZWxMYXlvdXQ6IE9PLnVpLlBhbmVsTGF5b3V0ID0gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuYXBwZW5kVG8ocGFuZWxMYXlvdXQuJGVsZW1lbnQpO1xuXHRcdFx0cGFuZWxMYXlvdXQuJGVsZW1lbnQuYXBwZW5kVG8odGhpcy4kYm9keSBhcyBKUXVlcnkpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRwdWJsaWMgb3ZlcnJpZGUgZ2V0U2V0dXBQcm9jZXNzKGRhdGE6IE9PLnVpLkRpYWxvZy5TZXR1cERhdGFNYXApOiBPTy51aS5Qcm9jZXNzIHtcblx0XHRcdHJldHVybiBzdXBlci5nZXRTZXR1cFByb2Nlc3MoZGF0YSkubmV4dCgoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHZvaWQgdGhpcy5kb0V4ZWN1dGVXcmFwKCk7XG5cdFx0XHRcdHZvaWQgdGhpcy5leGVjdXRlQWN0aW9uKCdtYWluJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwdWJsaWMgb3ZlcnJpZGUgZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24/OiBzdHJpbmcpOiBPTy51aS5Qcm9jZXNzIHtcblx0XHRcdGNvbnN0IGlzTWFpbkFjdGlvbjogYm9vbGVhbiA9IGFjdGlvbiA9PT0gJ21haW4nO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRzdXBlclxuXHRcdFx0XHRcdC5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbilcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNzAzMFxuXHRcdFx0XHRcdC5uZXh0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChpc01haW5BY3Rpb24pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuZG9FeGVjdXRlV3JhcCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Lm5leHQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGlzTWFpbkFjdGlvbiAmJiBOb3RlVEFWaWV3ZXIubGFzdEVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBOb3RlVEFWaWV3ZXIubGFzdEVycm9yO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHN1cGVyLmdldEFjdGlvblByb2Nlc3MoYWN0aW9uKS5leGVjdXRlKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGdldE5vdGVUQVBhcnNlVGV4dCgpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+IHtcblx0XHRcdGlmIChOb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0KSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkPHN0cmluZz4oKS5yZXNvbHZlKE5vdGVUQVZpZXdlci5ub3RlVEFQYXJzZVRleHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCAkbm90ZVRBdGl0bGU6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtdGl0bGUnKTtcblx0XHRcdGNvbnN0IGFjdHVhbFRpdGxlOiBzdHJpbmcgPSB3Z1BhZ2VOYW1lLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0XHRcdGNvbnN0IHRpdGxlRGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXG5cdFx0XHRpZiAoJG5vdGVUQXRpdGxlLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCB0aXRsZUNvbnY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRub3RlVEF0aXRsZS5hdHRyKCdkYXRhLW5vdGV0YS1jb2RlJyk7XG5cdFx0XHRcdGFzc2VydCh0aXRsZUNvbnYsICd0aXRsZUNvbnYnKTtcblxuXHRcdFx0XHRsZXQgdGl0bGVEZXNjOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkbm90ZVRBdGl0bGUuYXR0cignZGF0YS1ub3RldGEtZGVzYycpO1xuXHRcdFx0XHRpZiAodGl0bGVEZXNjKSB7XG5cdFx0XHRcdFx0dGl0bGVEZXNjID0gYO+8iCR7dGl0bGVEZXNjfe+8iWA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGl0bGVEZXNjID0gJyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aWtpdGV4dCArPSBgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodFwiPnt7ZWRpdHwke2FjdHVhbFRpdGxlfXxzZWN0aW9uPTB9fTwvc3Bhbj5cXG5gO1xuXHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlofkvb/nlKhbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOagh+mimOaJi+W3pei9rOaNol1dXFxuJztcblx0XHRcdFx0d2lraXRleHQgKz0gYCog6L2s5o2i5qCH6aKY5Li677yaLXtEfCR7dGl0bGVDb252fX0tJHt0aXRsZURlc2N9XFxuYDtcblx0XHRcdFx0d2lraXRleHQgKz0gYCog5a6e6ZmF5qCH6aKY5Li677yaLXtSfCR7YWN0dWFsVGl0bGV9fS3vvJvlvZPliY3mmL7npLrkuLrvvJote3wke3RpdGxlQ29udn19LVxcbmA7XG5cblx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlc29sdmUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhcnNlV2lraXRleHQoYHt7bm90ZVRBL211bHRpdGl0bGV8JHthY3R1YWxUaXRsZX19fWAsIHtcblx0XHRcdFx0XHR0aXRsZTogYWN0dWFsVGl0bGUsXG5cdFx0XHRcdFx0dmFyaWFudDogJ3poJyxcblx0XHRcdFx0fSBhcyBQYXJzZVBhcmFtcylcblx0XHRcdFx0XHQudGhlbigocmVzdWx0SHRtbDogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0ICRtdWx0aVRpdGxlOiBKUXVlcnkgPSAkKCQucGFyc2VIVE1MKHJlc3VsdEh0bWwgYXMgQXBpUGFyc2VSZXNwb25zZSkpLmZpbmQoXG5cdFx0XHRcdFx0XHRcdCcubm90ZVRBLW11bHRpdGl0bGUnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0aWYgKCRtdWx0aVRpdGxlLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlodbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOagh+mimOWPr+iDvee7j+i/h+i9rOaNol1dXFxuKiDovazmjaLmoIfpopjkuLrvvJonO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRleHRWYXJpYW50OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudFRleHQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bGw+ID0ge307XG5cblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRtdWx0aVRpdGxlLmNoaWxkcmVuKCkpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1tdWx0aXRpdGxlLXZhcmlhbnQnKTtcblx0XHRcdFx0XHRcdFx0XHRhc3NlcnQodmFyaWFudCwgJ3ZhcmlhbnQnKTtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHQ6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS50cmltKCk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudFRleHRbdmFyaWFudF0gPSB0ZXh0O1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dFZhcmlhbnRBcnJheTogc3RyaW5nW10gfCB1bmRlZmluZWQgPSB0ZXh0VmFyaWFudFt0ZXh0XTtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGV4dFZhcmlhbnRBcnJheSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dFZhcmlhbnRBcnJheVt0ZXh0VmFyaWFudEFycmF5Lmxlbmd0aF0gPSB2YXJpYW50O1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0VmFyaWFudFt0ZXh0XSA9IFt2YXJpYW50XTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZUNvbnZlcnRlZDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IHZhcmlhbnRUZXh0W3dnVXNlclZhcmlhbnQgYXMgc3RyaW5nXTtcblxuXHRcdFx0XHRcdFx0XHRjb25zdCBtdWx0aVRpdGxlOiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGtleSBpbiB2YXJpYW50VGV4dCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bih2YXJpYW50VGV4dCwga2V5KSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IHZhcmlhbnRUZXh0W2tleV07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRleHQgPT09IG51bGwgfHwgdGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50czogc3RyaW5nW10gfCB1bmRlZmluZWQgPSB0ZXh0VmFyaWFudFt0ZXh0XTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXZhcmlhbnRzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRUZXh0W3ZhcmlhbnRdID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50c05hbWU6IHN0cmluZyA9IHZhcmlhbnRzXG5cdFx0XHRcdFx0XHRcdFx0XHQubWFwKCh2YXJpYW50OiBzdHJpbmcpOiBzdHJpbmcgPT4gYC17Unx7e01lZGlhV2lraTpWYXJpYW50bmFtZS0ke3ZhcmlhbnR9fX19LWApXG5cdFx0XHRcdFx0XHRcdFx0XHQuam9pbign44CBJyk7XG5cdFx0XHRcdFx0XHRcdFx0bXVsdGlUaXRsZVttdWx0aVRpdGxlLmxlbmd0aF0gPSBgJHt2YXJpYW50c05hbWV977yaLXtSfCR7dGV4dH19LWA7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBzdWJJdGVtU2VwYXJhdG9yOiBzdHJpbmcgPSAnXFxuKiogJztcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYCR7c3ViSXRlbVNlcGFyYXRvcn0ke211bHRpVGl0bGUuam9pbihzdWJJdGVtU2VwYXJhdG9yKX1gO1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgXFxuKiDlrp7pmYXmoIfpopjkuLrvvJote1J8JHthY3R1YWxUaXRsZX19Le+8m+W9k+WJjeaYvuekuuS4uu+8mi17Unwke3RpdGxlQ29udmVydGVkfX0tXFxuYDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlc29sdmUoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXG5cdFx0XHR0aXRsZURlZmVycmVkXG5cdFx0XHRcdC50aGVuKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRjb25zdCAkbm90ZVRBZ3JvdXBzOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLWdyb3VwID4gKltkYXRhLW5vdGV0YS1ncm91cF0nKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJG5vdGVUQWdyb3Vwcykge1xuXHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKCRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwLXNvdXJjZScpKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ3RlbXBsYXRlJzpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBge3tDR3JvdXAvJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbW9kdWxlJzpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBge3sjaW52b2tlOkNHcm91cFZpZXdlcnxkaWFsb2d8JHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbm9uZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDsg5pys5paH5L2/55So55qE5YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAneWwmuacquWIm+W7ulxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYCoge3tlZGl0fE1vZHVsZTpDR3JvdXAvJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfXzliJvlu7rlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCdfX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA7IOacquefpeWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ3mnaXmupDigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwLXNvdXJjZScpfeKAnVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWxvY2FsOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLWxvY2FsJyk7XG5cdFx0XHRcdFx0aWYgKCRub3RlVEFsb2NhbC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA8c3BhbiBzdHlsZT1cImZsb2F0OnJpZ2h0XCI+e3tlZGl0fCR7YWN0dWFsVGl0bGV9fHNlY3Rpb249MH19PC9zcGFuPlxcbmA7XG5cdFx0XHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlofkvb/nlKhbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOWFqOaWh+aJi+W3pei9rOaNol1dXFxuJztcblxuXHRcdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWxvY2FscyA9ICRub3RlVEFsb2NhbC5jaGlsZHJlbignKltkYXRhLW5vdGV0YS1jb2RlXScpO1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRub3RlVEFsb2NhbHMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdFx0bGV0IGxvY2FsRGVzYzogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZGVzYycpO1xuXHRcdFx0XHRcdFx0XHRpZiAobG9jYWxEZXNjKSB7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYWxEZXNjID0gYO+8iCR7bG9jYWxEZXNjfe+8iWA7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYWxEZXNjID0gJyc7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBsb2NhbENvbnY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWNvZGUnKTtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYCogLXtEfCR7bG9jYWxDb252fX0tJHtsb2NhbERlc2N95b2T5YmN5pi+56S65Li677yaLXske2xvY2FsQ29udn19LVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0d2lraXRleHQgKz0gJ3t7bm90ZVRBL2Zvb3Rlcn19XFxuJztcblxuXHRcdFx0XHRcdE5vdGVUQVZpZXdlci5ub3RlVEFQYXJzZVRleHQgPSB3aWtpdGV4dDtcblxuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZSh3aWtpdGV4dCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZG9FeGVjdXRlKCkge1xuXHRcdFx0aWYgKHRoaXMuZGF0YUlzTG9hZGVkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpLnJlc29sdmUoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuZW1wdHkoKS5hcHBlbmQoPHA+e2dldE1lc3NhZ2UoJ0xvYWRpbmcnKX08L3A+KTtcblxuXHRcdFx0cmV0dXJuIE5vdGVUQVZpZXdlci5nZXROb3RlVEFQYXJzZVRleHQoKVxuXHRcdFx0XHQudGhlbigod2lraXRleHQ6IEFwaVJlc3BvbnNlKSA9PlxuXHRcdFx0XHRcdHBhcnNlV2lraXRleHQoXG5cdFx0XHRcdFx0XHR3aWtpdGV4dCBhcyBBcGlQYXJzZVJlc3BvbnNlLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ1RlbXBsYXRlOkNHcm91cC8tJyxcblx0XHRcdFx0XHRcdFx0dmFyaWFudDogd2dVc2VyVmFyaWFudCBhcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHR9IGFzIFBhcnNlUGFyYW1zXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC50aGVuKChwYXJzZWRIdG1sOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdHRoaXMuJHJlYWxDb250ZW50XG5cdFx0XHRcdFx0XHQuZW1wdHkoKVxuXHRcdFx0XHRcdFx0Lmh0bWwocGFyc2VkSHRtbCBhcyBBcGlQYXJzZVJlc3BvbnNlKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKGAke09QVElPTlMucG9ydGxldENsYXNzfS1vdXRwdXRgKTtcblxuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmZpbmQoJy5tdy1jb2xsYXBzaWJsZScpIGFzIEpRdWVyeSAmIHttYWtlQ29sbGFwc2libGU6ICgpID0+IEpRdWVyeX1cblx0XHRcdFx0XHQpLm1ha2VDb2xsYXBzaWJsZSgpO1xuXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVTaXplKCk7XG5cdFx0XHRcdFx0dGhpcy5kYXRhSXNMb2FkZWQgPSB0cnVlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvciB8IEVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgQXBpUmV0cnlGYWlsRXJyb3IpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBPTy51aS5FcnJvcihlcnJvci50b0pRdWVyeSgpLCB7XG5cdFx0XHRcdFx0XHRcdHJlY292ZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBPTy51aS5FcnJvcihTdHJpbmcoZXJyb3IpLCB7XG5cdFx0XHRcdFx0XHRcdHJlY292ZXJhYmxlOiBmYWxzZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBkb0V4ZWN1dGVXcmFwKCkge1xuXHRcdFx0aWYgKHRoaXMuZXhlY3V0ZVByb21pc2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmV4ZWN1dGVQcm9taXNlID0gdGhpcy5kb0V4ZWN1dGUoKTtcblx0XHRcdFx0ZGVsZXRlIE5vdGVUQVZpZXdlci5sYXN0RXJyb3I7XG5cblx0XHRcdFx0Y29uc3QgZXhlY3V0ZURlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblx0XHRcdFx0dm9pZCAodGhpcy5leGVjdXRlUHJvbWlzZSBhcyBKUXVlcnkuUHJvbWlzZTxBcGlSZXNwb25zZT4pXG5cdFx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCBleGVjdXRlRGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yOiBFcnJvciB8IE9PLnVpLkVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBPTy51aS5FcnJvcikge1xuXHRcdFx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubGFzdEVycm9yID0gZXJyb3I7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2b2lkIGV4ZWN1dGVEZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFsd2F5cygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5leGVjdXRlUHJvbWlzZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gZXhlY3V0ZURlZmVycmVkO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cdFx0XHR2b2lkICh0aGlzLmV4ZWN1dGVQcm9taXNlIGFzIEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPilcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEVycm9yIHwgT08udWkuRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBPTy51aS5FcnJvcikge1xuXHRcdFx0XHRcdFx0Tm90ZVRBVmlld2VyLmxhc3RFcnJvciA9IGVycm9yO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5leGVjdXRlUHJvbWlzZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9XG5cdH1cblxuXHROb3RlVEFWaWV3ZXIuc3RhdGljID0ge1xuXHRcdC4uLk9PLnVpLlByb2Nlc3NEaWFsb2cuc3RhdGljLFxuXHR9O1xuXHROb3RlVEFWaWV3ZXIuc3RhdGljLm5hbWUgPSBgTm90ZVRBVmlld2VyLSR7aGFzaH1gO1xuXHROb3RlVEFWaWV3ZXIuc3RhdGljLnRpdGxlID0gZ2V0TWVzc2FnZSgnVGl0bGUnKTtcblx0Tm90ZVRBVmlld2VyLnN0YXRpYy5hY3Rpb25zID0gW1xuXHRcdHtcblx0XHRcdGxhYmVsOiBtdy5tc2coJ29vdWktZGlhbG9nLXByb2Nlc3MtZGlzbWlzcycpLFxuXHRcdFx0ZmxhZ3M6ICdzYWZlJyxcblx0XHR9LFxuXHRdO1xuXG5cdGNvbnN0IHZpZXdlcjogTm90ZVRBVmlld2VyID0gbmV3IE5vdGVUQVZpZXdlcigpO1xuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW3ZpZXdlcl0pO1xuXHR2aWV3ZXJNYXAuc2V0KGhhc2gsIHZpZXdlcik7XG5cblx0cmV0dXJuIHZpZXdlcjtcbn07XG5cbmNvbnN0IHJlc2V0QWxsVmlld2VyID0gKCk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IHZpZXdlciBvZiB2aWV3ZXJNYXAudmFsdWVzKCkpIHtcblx0XHR2aWV3ZXIuZGVzdHJveSgpO1xuXHR9XG5cdHZpZXdlck1hcC5jbGVhcigpO1xuXHR2b2lkIHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG59O1xuXG5leHBvcnQge2dldFZpZXdlciwgcmVzZXRBbGxWaWV3ZXJ9O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5mdW5jdGlvbiBhc3NlcnQ8VD4odmFsdWU6IFQgfCB1bmRlZmluZWQsIHZhbHVlTmFtZTogc3RyaW5nKTogYXNzZXJ0cyB2YWx1ZSB7XG5cdGlmICghdmFsdWUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEFzc2VydCBGYWlsLCAke3ZhbHVlTmFtZX0gPT0gZmFsc2UuYCk7XG5cdH1cbn1cblxuZXhwb3J0IHthc3NlcnR9O1xuIiwgImltcG9ydCB7dHlwZSBnZXRWaWV3ZXJ9IGZyb20gJy4vdmlld2VyJztcblxuY29uc3Qgdmlld2VyTWFwID0gbmV3IE1hcDxzdHJpbmcsIFJldHVyblR5cGU8dHlwZW9mIGdldFZpZXdlcj4+KCk7XG5cbmV4cG9ydCB7dmlld2VyTWFwfTtcbiIsICJjb25zdCBpbml0V2luZG93TWFuYWdlciA9ICgpOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0+IHtcblx0cmV0dXJuIG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG59O1xuXG5jb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gaW5pdFdpbmRvd01hbmFnZXIoKTtcblxuZXhwb3J0IHt3aW5kb3dNYW5hZ2VyfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5cbmxldCBwb3J0bGV0SWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuY29uc3QgaW5pdEdsb2JhbE1ldGhvZHMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdHlwZW9mIGdsb2JhbE1ldGhvZHMgPT4ge1xuXHRjb25zdCBnbG9iYWxNZXRob2RzOiB7XG5cdFx0aW5pdCgpOiB2b2lkO1xuXHRcdGRlSW5pdCgpOiB2b2lkO1xuXHR9ID0ge1xuXHRcdGluaXQoKSB7XG5cdFx0XHQvKiBmYWtlICovXG5cdFx0fSxcblx0XHRkZUluaXQoKSB7XG5cdFx0XHQvKiBmYWtlICovXG5cdFx0fSxcblx0fTtcblxuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHNraW4gPT09ICd2ZWN0b3InKSB7XG5cdFx0cG9ydGxldElkID0gJ3Atbm90ZVRBJztcblxuXHRcdGxldCAkbm90ZVRBVGFiOiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cdFx0Z2xvYmFsTWV0aG9kcy5pbml0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCRub3RlVEFUYWIgfHwgIXBvcnRsZXRJZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBub3RlVEFUYWI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldChwb3J0bGV0SWQpO1xuXHRcdFx0aWYgKCFub3RlVEFUYWIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0JG5vdGVUQVRhYiA9ICQobm90ZVRBVGFiKTtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtZWRpYXdpa2kvY2xhc3MtZG9jXG5cdFx0XHQkbm90ZVRBVGFiXG5cdFx0XHRcdC5yZW1vdmVDbGFzcyhgbXctcG9ydGxldC0ke3BvcnRsZXRJZH1gKVxuXHRcdFx0XHQuYWRkQ2xhc3MoW2Btdy1wb3J0bGV0LSR7cG9ydGxldElkLnJlcGxhY2UoJ3AtJywgJycpfWAsICd2ZWN0b3ItbWVudS10YWJzJywgJ3ZlY3Rvci1tZW51LXRhYnMtbGVnYWN5J10pO1xuXHRcdFx0JGJvZHkuZmluZCgnI3AtdmFyaWFudHMnKS5hZnRlcigkbm90ZVRBVGFiKTtcblx0XHR9O1xuXHRcdGdsb2JhbE1ldGhvZHMuZGVJbml0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCEkbm90ZVRBVGFiKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRub3RlVEFUYWIuZmluZCgndWwnKS5lbXB0eSgpO1xuXHRcdFx0aWYgKHBvcnRsZXRJZCkge1xuXHRcdFx0XHRtdy51dGlsLmhpZGVQb3J0bGV0KHBvcnRsZXRJZCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fSBlbHNlIGlmIChza2luID09PSAndmVjdG9yLTIwMjInKSB7XG5cdFx0cG9ydGxldElkID0gJ3AtYXNzb2NpYXRlZC1wYWdlcyc7XG5cblx0XHRnbG9iYWxNZXRob2RzLmRlSW5pdCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdCRib2R5LmZpbmQoYC4ke09QVElPTlMucG9ydGxldENsYXNzfWApLnJlbW92ZSgpO1xuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gZ2xvYmFsTWV0aG9kcztcbn07XG5cbmV4cG9ydCB7cG9ydGxldElkLCBpbml0R2xvYmFsTWV0aG9kc307XG4iLCAiaW1wb3J0IHtnZXRWaWV3ZXIsIHJlc2V0QWxsVmlld2VyfSBmcm9tICcuL21vZHVsZXMvdmlld2VyJztcbmltcG9ydCB7aW5pdEdsb2JhbE1ldGhvZHMsIHBvcnRsZXRJZH0gZnJvbSAnLi9tb2R1bGVzL2luaXRHbG9iYWxNZXRob2RzJztcbmltcG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2VuZXJhdGVQb3J0bGV0TGlua30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVQb3J0bGV0TGluayc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlcic7XG5cbmxldCBpc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBub3RlVEEoJGNvbnRlbnQpOiB2b2lkIHtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJGNvbnRlbnQucGFyZW50cygnYm9keScpO1xuXG5cdGlmICghaXNJbml0KSB7XG5cdFx0aXNJbml0ID0gdHJ1ZTtcblx0XHR3aW5kb3dNYW5hZ2VyLiRlbGVtZW50LmFwcGVuZFRvKCRib2R5KTtcblx0fVxuXG5cdHJlc2V0QWxsVmlld2VyKCk7XG5cblx0Y29uc3QgZ2xvYmFsTWV0aG9kcyA9IGluaXRHbG9iYWxNZXRob2RzKCRib2R5KTtcblx0Z2xvYmFsTWV0aG9kcy5kZUluaXQoKTtcblx0Z2xvYmFsTWV0aG9kcy5pbml0KCk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoJy5tdy1pbmRpY2F0b3JbaWRePW13LWluZGljYXRvci1ub3RlVEEtXScpKSB7XG5cdFx0Y29uc3QgaGFzaDogc3RyaW5nID0gZWxlbWVudC5pZC5yZXBsYWNlKC9ebXctaW5kaWNhdG9yLW5vdGVUQS0vLCAnJyk7XG5cblx0XHRsZXQgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKHBvcnRsZXRJZCkge1xuXHRcdFx0JGVsZW1lbnQuaGlkZSgpO1xuXG5cdFx0XHRjb25zdCAkcG9ydGxldExpbms6IEpRdWVyeSB8IHVuZGVmaW5lZCA9IGdlbmVyYXRlUG9ydGxldExpbmsoaGFzaCk7XG5cdFx0XHRpZiAoISRwb3J0bGV0TGluaykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0JGVsZW1lbnQgPSAkcG9ydGxldExpbms7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3BlbmVyTGlzdGVuZXIgPSAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCFjaGVja0ExMXlDb25maXJtS2V5KGV2ZW50KSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRnZXRWaWV3ZXIoJGJvZHksIGhhc2gpLm9wZW4oKTtcblx0XHR9O1xuXHRcdCRlbGVtZW50Lm9uKCdjbGljaycsIG9wZW5lckxpc3RlbmVyKTtcblx0XHQkZWxlbWVudC5vbigna2V5ZG93bicsIG9wZW5lckxpc3RlbmVyKTtcblx0fVxufSk7XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtwb3J0bGV0SWR9IGZyb20gJy4uL2luaXRHbG9iYWxNZXRob2RzJztcblxuY29uc3QgZ2VuZXJhdGVQb3J0bGV0TGluayA9IChoYXNoOiBzdHJpbmcpOiBKUXVlcnkgfCB1bmRlZmluZWQgPT4ge1xuXHRpZiAoIXBvcnRsZXRJZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRMaW5rOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICfmsYkv5ryiJywgYGNhLW5vdGVUQS0ke2hhc2h9YCk7XG5cdGlmICghcG9ydGxldExpbmspIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzdHlsZSA9IHtcblx0XHRoZWlnaHQ6ICc4NSUnLFxuXHRcdHBhZGRpbmc6ICcxcHggM3B4Jyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVhY3QuQ1NTUHJvcGVydGllcztcblxuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRjb25zdCAkcG9ydGxldExpbms6IEpRdWVyeSA9ICQocG9ydGxldExpbmspLmFkZENsYXNzKGAke09QVElPTlMucG9ydGxldENsYXNzfWApO1xuXHQkcG9ydGxldExpbmtcblx0XHQuZmluZCgnYScpXG5cdFx0LmVtcHR5KClcblx0XHQuYXBwZW5kKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Li4uc3R5bGUsXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2QzZTNmNCcsXG5cdFx0XHRcdFx0XHRjb2xvcjogJyMwMDAnLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7J+axiSd9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Li4uc3R5bGUsXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2U5ZTllOScsXG5cdFx0XHRcdFx0XHRjb2xvcjogJyM0MzQzNDMnLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7J+a8oid9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cblx0cmV0dXJuICRwb3J0bGV0TGluaztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVQb3J0bGV0TGlua307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXO0FBQ1gsSUFBQUMsZUFBZ0I7O0FDRmpCLElBQUFDLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQWxCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxvQkFBQSxHQUFtQkYsa0JBQUFHLFVBQVM7TUFDM0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTTCxrQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxRQUFBLEdBQU9OLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNE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OyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgInBvcnRsZXRDbGFzcyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJBcGlSZXRyeUZhaWxFcnJvciIsICJsb2NhbGl6ZSIsICJlbiIsICJMb2FkaW5nIiwgIlRpdGxlIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJFcnJvciIsICJlcnJvcnMiLCAiY29uc3RydWN0b3IiLCAiY29uY2F0IiwgImxlbmd0aCIsICJuYW1lIiwgInRvSlF1ZXJ5IiwgImVycm9yQ291bnQiLCAiZWxlbWVudCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInJlcGxhY2UiLCAidG9TdHJpbmciLCAibWFwIiwgImVycm9yIiwgImluZGV4IiwgInNwbGl0IiwgImxpbmUiLCAibnVtYmVyIiwgIiRlbGVtZW50IiwgIiQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAicGFyc2VXaXRoUmV0cnkiLCAiYXJncyIsICJjb3VudCIsICJwcmV2aW91c0Vycm9ycyIsICJEZWZlcnJlZCIsICJyZWplY3QiLCAiZGVmZXJyZWQiLCAicGFyc2UiLCAidGhlbiIsICJyZXNwb25zZSIsICJyZXNvbHZlIiwgImNhdGNoIiwgImNvbnNvbGUiLCAic3RhY2siLCAiU3RyaW5nIiwgIm5ld1Jlc3BvbnNlIiwgIm5ld0Vycm9yIiwgInBhcnNlV2lraXRleHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFzc2VydCIsICJ2YWx1ZSIsICJ2YWx1ZU5hbWUiLCAidmlld2VyTWFwIiwgIk1hcCIsICJpbml0V2luZG93TWFuYWdlciIsICJPTyIsICJ1aSIsICJXaW5kb3dNYW5hZ2VyIiwgIndpbmRvd01hbmFnZXIiLCAiZ2V0Vmlld2VyIiwgIiRib2R5IiwgImhhc2giLCAiaGFzIiwgInN0b3JlZFZpZXdlciIsICJnZXQiLCAiJHRhcmdldEVsZW1lbnQiLCAiZmluZCIsICJ3Z1BhZ2VOYW1lIiwgIndnVXNlclZhcmlhbnQiLCAibXciLCAiY29uZmlnIiwgIk5vdGVUQVZpZXdlciIsICJQcm9jZXNzRGlhbG9nIiwgImRhdGFJc0xvYWRlZCIsICJleGVjdXRlUHJvbWlzZSIsICJtdXRhdGlvbk9ic2VydmVyIiwgIiRyZWFsQ29udGVudCIsICJsYXN0RXJyb3IiLCAibm90ZVRBUGFyc2VUZXh0IiwgInNpemUiLCAiTXV0YXRpb25PYnNlcnZlciIsICJ1cGRhdGVTaXplIiwgImJpbmQiLCAib2JzZXJ2ZSIsICJjaGlsZExpc3QiLCAic3VidHJlZSIsICJpbml0aWFsaXplIiwgInBhbmVsTGF5b3V0IiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgInBhZGRlZCIsICJhcHBlbmRUbyIsICJnZXRTZXR1cFByb2Nlc3MiLCAiZGF0YSIsICJuZXh0IiwgImRvRXhlY3V0ZVdyYXAiLCAiZXhlY3V0ZUFjdGlvbiIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImFjdGlvbiIsICJpc01haW5BY3Rpb24iLCAiZXhlY3V0ZSIsICJkZXN0cm95IiwgImRpc2Nvbm5lY3QiLCAiZ2V0Tm90ZVRBUGFyc2VUZXh0IiwgIiRub3RlVEF0aXRsZSIsICJhY3R1YWxUaXRsZSIsICJ3aWtpdGV4dCIsICJ0aXRsZURlZmVycmVkIiwgInRpdGxlQ29udiIsICJhdHRyIiwgInRpdGxlRGVzYyIsICJ0aXRsZSIsICJ2YXJpYW50IiwgInJlc3VsdEh0bWwiLCAiJG11bHRpVGl0bGUiLCAicGFyc2VIVE1MIiwgInRleHRWYXJpYW50IiwgInZhcmlhbnRUZXh0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiY2hpbGRyZW4iLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInRleHQiLCAidHJpbSIsICJ0ZXh0VmFyaWFudEFycmF5IiwgImVyciIsICJlIiwgImYiLCAidGl0bGVDb252ZXJ0ZWQiLCAibXVsdGlUaXRsZSIsICJPYmplY3QiLCAiaGFzT3duIiwgInZhcmlhbnRzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInZhcmlhbnRzTmFtZSIsICJqb2luIiwgInN1Ykl0ZW1TZXBhcmF0b3IiLCAiJG5vdGVUQWdyb3VwcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICIkbm90ZVRBbG9jYWwiLCAiJG5vdGVUQWxvY2FscyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJsb2NhbERlc2MiLCAibG9jYWxDb252IiwgImRvRXhlY3V0ZSIsICJlbXB0eSIsICJhcHBlbmQiLCAicGFyc2VkSHRtbCIsICJodG1sIiwgImFkZENsYXNzIiwgIm1ha2VDb2xsYXBzaWJsZSIsICJyZWNvdmVyYWJsZSIsICJleGVjdXRlRGVmZXJyZWQiLCAiYWx3YXlzIiwgInN0YXRpYyIsICJhY3Rpb25zIiwgImxhYmVsIiwgIm1zZyIsICJmbGFncyIsICJ2aWV3ZXIiLCAiYWRkV2luZG93cyIsICJzZXQiLCAicmVzZXRBbGxWaWV3ZXIiLCAiX2l0ZXJhdG9yNiIsICJ2YWx1ZXMiLCAiX3N0ZXA2IiwgImNsZWFyIiwgImNsZWFyV2luZG93cyIsICJwb3J0bGV0SWQiLCAiaW5pdEdsb2JhbE1ldGhvZHMiLCAiZ2xvYmFsTWV0aG9kcyIsICJpbml0IiwgImRlSW5pdCIsICJza2luIiwgIiRub3RlVEFUYWIiLCAibm90ZVRBVGFiIiwgInV0aWwiLCAiYWRkUG9ydGxldCIsICJyZW1vdmVDbGFzcyIsICJhZnRlciIsICJoaWRlUG9ydGxldCIsICJyZW1vdmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJnZW5lcmF0ZVBvcnRsZXRMaW5rIiwgInBvcnRsZXRMaW5rIiwgImFkZFBvcnRsZXRMaW5rIiwgInN0eWxlIiwgImhlaWdodCIsICJwYWRkaW5nIiwgIiRwb3J0bGV0TGluayIsICJiYWNrZ3JvdW5kIiwgImNvbG9yIiwgImlzSW5pdCIsICJob29rIiwgImFkZCIsICJub3RlVEEiLCAiJGNvbnRlbnQiLCAicGFyZW50cyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJpZCIsICJoaWRlIiwgIm9wZW5lckxpc3RlbmVyIiwgImV2ZW50IiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAicHJldmVudERlZmF1bHQiLCAib3BlbiIsICJvbiJdCn0K
