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
          action: "parse",
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
        action: "parse",
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
  portletLink.classList.add("ca-noteTA");
  const $portletLink = $(portletLink).addClass("".concat(portletClass));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9vcHRpb25zLmpzb24iLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3IudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9hcGkudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3BhcnNlV2lraXRleHQudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3ZpZXdlci50c3giLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvYXNzZXJ0LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pbml0Vmlld01hcC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXIudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2luaXRHbG9iYWxNZXRob2RzLnRzIiwgInNyYy9Ob3RlVEEvTm90ZVRBLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL2dlbmVyYXRlUG9ydGxldExpbmsudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidmVyc2lvblwiOiBcIjEuMFwiLFxuXHRcInBvcnRsZXRDbGFzc1wiOiBcIngtbm90ZVRBLXZpZXdlclwiXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY2xhc3MgQXBpUmV0cnlGYWlsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdHByaXZhdGUgZXJyb3JzOiBzdHJpbmdbXTtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoZXJyb3JzOiBzdHJpbmdbXSkge1xuXHRcdHN1cGVyKGBBcGkgY2FsbHMgZmFpbGVkICR7ZXJyb3JzLmxlbmd0aH0gdGltZShzKSBpbiBhIHJvdy5gKTtcblx0XHR0aGlzLm5hbWUgPSAnQXBpUmV0cnlGYWlsRXJyb3InO1xuXHRcdHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuXHR9XG5cblx0cHVibGljIHRvSlF1ZXJ5KCk6IEpRdWVyeSB7XG5cdFx0Y29uc3QgZXJyb3JDb3VudDogbnVtYmVyID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuXG5cdFx0Y29uc3QgZWxlbWVudCA9IChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cblx0XHRcdFx0PHA+e2dldE1lc3NhZ2UoJ0FwaVJldHJ5RmFpbEVycm9yJykucmVwbGFjZSgvXFwkMS9nLCBlcnJvckNvdW50LnRvU3RyaW5nKCkpfTwvcD5cblx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdHt0aGlzLmVycm9ycy5tYXA8UmVhY3QuUmVhY3RFbGVtZW50PigoZXJyb3IsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdHtlcnJvci5zcGxpdCgnXFxuJykubWFwPFJlYWN0LlJlYWN0RWxlbWVudD4oKGxpbmUsIG51bWJlcikgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxwIGtleT17bnVtYmVyfT57bGluZX08L3A+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9vbD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpIGFzIEpRdWVyeTtcblxuXHRcdHJldHVybiAkZWxlbWVudDtcblx0fVxufVxuXG5leHBvcnQge0FwaVJldHJ5RmFpbEVycm9yfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QXBpUmV0cnlGYWlsRXJyb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXBpIGNhbGxzIGZhaWxlZCAkMSB0aW1lKHMpIGluIGEgcm93LiBFcnJvcnM6ICcsXG5cdFx0XHQnemgtaGFucyc6ICdBcGkg6LCD55So6L+e57ut5aSx6LSlICQxIOasoe+8jCQxIOasoeiwg+eUqOeahOmUmeivr+WIhuWIq+S4uu+8micsXG5cdFx0XHQnemgtaGFudCc6ICdBcGkg6Kq/55So6YCj57qM5aSx5pWXICQxIOasoe+8jCQxIOasoeiqv+eUqOeahOmMr+iqpOWIhuWIpeeCuu+8micsXG5cdFx0fSksXG5cdFx0TG9hZGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWKoOi9veKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjovInlhaXigKbigKYnLFxuXHRcdH0pLFxuXHRcdFRpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05vdGVUQScsXG5cdFx0XHQnemgtaGFucyc6ICflrZfor43ovazmjaInLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2X6Kme6L2J5o+bJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBOb3RlVEEvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxudHlwZSBBcGlQYXJzZSA9IG13LkFwaVsncGFyc2UnXTtcbnR5cGUgQXBpUGFyc2VQYXJhbWV0ZXJzID0gUGFyYW1ldGVyczxBcGlQYXJzZT47XG50eXBlIEFwaVBhcnNlUmVzcG9uc2UgPSBBd2FpdGVkPFJldHVyblR5cGU8QXBpUGFyc2U+PjtcbnR5cGUgQXBpUmVzcG9uc2UgPSBBcGlQYXJzZVJlc3BvbnNlIHwgQXBpUmV0cnlGYWlsRXJyb3I7XG5cbmNvbnN0IHBhcnNlV2l0aFJldHJ5ID0gKFxuXHRhcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMsXG5cdGNvdW50OiBudW1iZXIgPSAzLFxuXHRwcmV2aW91c0Vycm9yczogc3RyaW5nW10gPSBbXVxuKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiA9PiB7XG5cdGlmICghY291bnQpIHtcblx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXRyeUZhaWxFcnJvcj4oKS5yZWplY3QobmV3IEFwaVJldHJ5RmFpbEVycm9yKHByZXZpb3VzRXJyb3JzKSk7XG5cdH1cblxuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0dm9pZCBhcGlcblx0XHQucGFyc2UoLi4uYXJncylcblx0XHQudGhlbigocmVzcG9uc2U6IEFwaVBhcnNlUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yPzogRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG5cdFx0XHRpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnc3RhY2snIGluIGVycm9yKSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBlcnJvci5zdGFjaztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBTdHJpbmcoZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZVdpdGhSZXRyeShhcmdzLCAtLWNvdW50LCBwcmV2aW91c0Vycm9ycylcblx0XHRcdFx0LnRoZW4oKG5ld1Jlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShuZXdSZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgobmV3RXJyb3I/OiBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KG5ld0Vycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIGRlZmVycmVkO1xufTtcblxuY29uc3QgcGFyc2VXaWtpdGV4dCA9ICguLi5hcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+ID0+IHtcblx0cmV0dXJuIHBhcnNlV2l0aFJldHJ5KGFyZ3MpO1xufTtcblxuZXhwb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7dHlwZSBBcGlQYXJzZVJlc3BvbnNlLCB0eXBlIEFwaVJlc3BvbnNlLCBwYXJzZVdpa2l0ZXh0fSBmcm9tICcuL3BhcnNlV2lraXRleHQnO1xuaW1wb3J0IHtBcGlSZXRyeUZhaWxFcnJvcn0gZnJvbSAnLi91dGlsL0FwaVJldHJ5RmFpbEVycm9yJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICcuL3V0aWwvYXNzZXJ0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dmlld2VyTWFwfSBmcm9tICcuL2luaXRWaWV3TWFwJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IGdldFZpZXdlciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4sIGhhc2g6IHN0cmluZyk6IHR5cGVvZiB2aWV3ZXIgPT4ge1xuXHRpZiAodmlld2VyTWFwLmhhcyhoYXNoKSkge1xuXHRcdGNvbnN0IHN0b3JlZFZpZXdlciA9IHZpZXdlck1hcC5nZXQoaGFzaCk7XG5cdFx0YXNzZXJ0KHN0b3JlZFZpZXdlciwgJ3ZpZXdlcicpO1xuXG5cdFx0cmV0dXJuIHN0b3JlZFZpZXdlcjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXRFbGVtZW50OiBKUXVlcnkgPSAkYm9keS5maW5kKGAjbm90ZVRBLSR7aGFzaH1gKTtcblx0aWYgKCEkdGFyZ2V0RWxlbWVudC5sZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYENhbid0IGdldCBFbGVtZW50IFwiI25vdGVUQS0ke2hhc2h9XCIuYCk7XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlTmFtZSwgd2dVc2VyVmFyaWFudH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y2xhc3MgTm90ZVRBVmlld2VyIGV4dGVuZHMgT08udWkuUHJvY2Vzc0RpYWxvZyB7XG5cdFx0cHJpdmF0ZSBkYXRhSXNMb2FkZWQ6IGJvb2xlYW47XG5cdFx0cHJpdmF0ZSBleGVjdXRlUHJvbWlzZT86IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZG9FeGVjdXRlPjtcblx0XHRwcml2YXRlIG11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG5cdFx0cHJpdmF0ZSAkcmVhbENvbnRlbnQ6IEpRdWVyeTtcblx0XHRwcml2YXRlICRib2R5OiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbGFzdEVycm9yPzogT08udWkuRXJyb3I7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbm90ZVRBUGFyc2VUZXh0OiBzdHJpbmc7XG5cblx0XHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcih7XG5cdFx0XHRcdHNpemU6ICdsYXJnZXInLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuZGF0YUlzTG9hZGVkID0gZmFsc2U7XG5cdFx0XHR0aGlzLiRyZWFsQ29udGVudCA9ICQoPGRpdiAvPikgYXMgSlF1ZXJ5O1xuXG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnVwZGF0ZVNpemUuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRyZWFsQ29udGVudC5nZXQoMCkgYXMgSFRNTEVsZW1lbnQsIHtcblx0XHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGluaXRpYWxpemUoKTogdGhpcyB7XG5cdFx0XHRzdXBlci5pbml0aWFsaXplKCk7XG5cblx0XHRcdGNvbnN0IHBhbmVsTGF5b3V0OiBPTy51aS5QYW5lbExheW91dCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmFwcGVuZFRvKHBhbmVsTGF5b3V0LiRlbGVtZW50KTtcblx0XHRcdHBhbmVsTGF5b3V0LiRlbGVtZW50LmFwcGVuZFRvKHRoaXMuJGJvZHkgYXMgSlF1ZXJ5KTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldFNldHVwUHJvY2VzcyhkYXRhOiBPTy51aS5EaWFsb2cuU2V0dXBEYXRhTWFwKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRyZXR1cm4gc3VwZXIuZ2V0U2V0dXBQcm9jZXNzKGRhdGEpLm5leHQoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR2b2lkIHRoaXMuZG9FeGVjdXRlV3JhcCgpO1xuXHRcdFx0XHR2b2lkIHRoaXMuZXhlY3V0ZUFjdGlvbignbWFpbicpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldEFjdGlvblByb2Nlc3MoYWN0aW9uPzogc3RyaW5nKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRjb25zdCBpc01haW5BY3Rpb246IGJvb2xlYW4gPSBhY3Rpb24gPT09ICdtYWluJztcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0c3VwZXJcblx0XHRcdFx0XHQuZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24pXG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzcwMzBcblx0XHRcdFx0XHQubmV4dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoaXNNYWluQWN0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmRvRXhlY3V0ZVdyYXAoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5uZXh0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChpc01haW5BY3Rpb24gJiYgTm90ZVRBVmlld2VyLmxhc3RFcnJvcikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gTm90ZVRBVmlld2VyLmxhc3RFcnJvcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBzdXBlci5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbikuZXhlY3V0ZSgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuXHRcdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBnZXROb3RlVEFQYXJzZVRleHQoKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiB7XG5cdFx0XHRpZiAoTm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZDxzdHJpbmc+KCkucmVzb2x2ZShOb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgJG5vdGVUQXRpdGxlOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLXRpdGxlJyk7XG5cdFx0XHRjb25zdCBhY3R1YWxUaXRsZTogc3RyaW5nID0gd2dQYWdlTmFtZS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdFx0XHRjb25zdCB0aXRsZURlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblxuXHRcdFx0aWYgKCRub3RlVEF0aXRsZS5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgdGl0bGVDb252OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkbm90ZVRBdGl0bGUuYXR0cignZGF0YS1ub3RldGEtY29kZScpO1xuXHRcdFx0XHRhc3NlcnQodGl0bGVDb252LCAndGl0bGVDb252Jyk7XG5cblx0XHRcdFx0bGV0IHRpdGxlRGVzYzogc3RyaW5nIHwgdW5kZWZpbmVkID0gJG5vdGVUQXRpdGxlLmF0dHIoJ2RhdGEtbm90ZXRhLWRlc2MnKTtcblx0XHRcdFx0aWYgKHRpdGxlRGVzYykge1xuXHRcdFx0XHRcdHRpdGxlRGVzYyA9IGDvvIgke3RpdGxlRGVzY33vvIlgO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRpdGxlRGVzYyA9ICcnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2lraXRleHQgKz0gYDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj57e2VkaXR8JHthY3R1YWxUaXRsZX18c2VjdGlvbj0wfX08L3NwYW4+XFxuYDtcblx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paH5L2/55SoW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzmoIfpopjmiYvlt6XovazmjaJdXVxcbic7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIOi9rOaNouagh+mimOS4uu+8mi17RHwke3RpdGxlQ29udn19LSR7dGl0bGVEZXNjfVxcbmA7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIOWunumZheagh+mimOS4uu+8mi17Unwke2FjdHVhbFRpdGxlfX0t77yb5b2T5YmN5pi+56S65Li677yaLXt8JHt0aXRsZUNvbnZ9fS1cXG5gO1xuXG5cdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYXJzZVdpa2l0ZXh0KGB7e25vdGVUQS9tdWx0aXRpdGxlfCR7YWN0dWFsVGl0bGV9fX1gLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRcdHRpdGxlOiBhY3R1YWxUaXRsZSxcblx0XHRcdFx0XHR2YXJpYW50OiAnemgnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKChyZXN1bHRIdG1sOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgJG11bHRpVGl0bGU6IEpRdWVyeSA9ICQoJC5wYXJzZUhUTUwocmVzdWx0SHRtbCBhcyBBcGlQYXJzZVJlc3BvbnNlKSkuZmluZChcblx0XHRcdFx0XHRcdFx0Jy5ub3RlVEEtbXVsdGl0aXRsZSdcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRpZiAoJG11bHRpVGl0bGUubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICc7IOacrOaWh1tbSGVscDrlrZfor43ovazmjaLlpITnkIZ85qCH6aKY5Y+v6IO957uP6L+H6L2s5o2iXV1cXG4qIOi9rOaNouagh+mimOS4uu+8mic7XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dFZhcmlhbnQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50VGV4dDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVsbD4gPSB7fTtcblxuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJG11bHRpVGl0bGUuY2hpbGRyZW4oKSkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLW11bHRpdGl0bGUtdmFyaWFudCcpO1xuXHRcdFx0XHRcdFx0XHRcdGFzc2VydCh2YXJpYW50LCAndmFyaWFudCcpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dDogc3RyaW5nID0gJGVsZW1lbnQudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50VGV4dFt2YXJpYW50XSA9IHRleHQ7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0VmFyaWFudEFycmF5OiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IHRleHRWYXJpYW50W3RleHRdO1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0ZXh0VmFyaWFudEFycmF5KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0VmFyaWFudEFycmF5W3RleHRWYXJpYW50QXJyYXkubGVuZ3RoXSA9IHZhcmlhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHRWYXJpYW50W3RleHRdID0gW3ZhcmlhbnRdO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlQ29udmVydGVkOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gdmFyaWFudFRleHRbd2dVc2VyVmFyaWFudCBhcyBzdHJpbmddO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IG11bHRpVGl0bGU6IHN0cmluZ1tdID0gW107XG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3Qga2V5IGluIHZhcmlhbnRUZXh0KSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHZhcmlhbnRUZXh0LCBrZXkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gdmFyaWFudFRleHRba2V5XTtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGV4dCA9PT0gbnVsbCB8fCB0ZXh0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IHRleHRWYXJpYW50W3RleHRdO1xuXHRcdFx0XHRcdFx0XHRcdGlmICghdmFyaWFudHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiB2YXJpYW50cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudFRleHRbdmFyaWFudF0gPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzTmFtZTogc3RyaW5nID0gdmFyaWFudHNcblx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKHZhcmlhbnQ6IHN0cmluZyk6IHN0cmluZyA9PiBgLXtSfHt7TWVkaWFXaWtpOlZhcmlhbnRuYW1lLSR7dmFyaWFudH19fX0tYClcblx0XHRcdFx0XHRcdFx0XHRcdC5qb2luKCfjgIEnKTtcblx0XHRcdFx0XHRcdFx0XHRtdWx0aVRpdGxlW211bHRpVGl0bGUubGVuZ3RoXSA9IGAke3ZhcmlhbnRzTmFtZX3vvJote1J8JHt0ZXh0fX0tYDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHN1Ykl0ZW1TZXBhcmF0b3I6IHN0cmluZyA9ICdcXG4qKiAnO1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgJHtzdWJJdGVtU2VwYXJhdG9yfSR7bXVsdGlUaXRsZS5qb2luKHN1Ykl0ZW1TZXBhcmF0b3IpfWA7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGBcXG4qIOWunumZheagh+mimOS4uu+8mi17Unwke2FjdHVhbFRpdGxlfX0t77yb5b2T5YmN5pi+56S65Li677yaLXtSfCR7dGl0bGVDb252ZXJ0ZWR9fS1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0XHRcdHRpdGxlRGVmZXJyZWRcblx0XHRcdFx0LnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGNvbnN0ICRub3RlVEFncm91cHM6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtZ3JvdXAgPiAqW2RhdGEtbm90ZXRhLWdyb3VwXScpO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbm90ZVRBZ3JvdXBzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRcdFx0XHRcdHN3aXRjaCAoJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAtc291cmNlJykpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAndGVtcGxhdGUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGB7e0NHcm91cC8keyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdtb2R1bGUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGB7eyNpbnZva2U6Q0dyb3VwVmlld2VyfGRpYWxvZ3wkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdub25lJzpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgOyDmnKzmlofkvb/nlKjnmoTlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCd5bCa5pyq5Yib5bu6XFxuYDtcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgKiB7e2VkaXR8TW9kdWxlOkNHcm91cC8keyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fOWIm+W7uuWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDsg5pyq55+l5YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAneadpea6kOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAtc291cmNlJyl94oCdXFxuYDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCAkbm90ZVRBbG9jYWw6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtbG9jYWwnKTtcblx0XHRcdFx0XHRpZiAoJG5vdGVUQWxvY2FsLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj57e2VkaXR8JHthY3R1YWxUaXRsZX18c2VjdGlvbj0wfX08L3NwYW4+XFxuYDtcblx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICc7IOacrOaWh+S9v+eUqFtbSGVscDrlrZfor43ovazmjaLlpITnkIZ85YWo5paH5omL5bel6L2s5o2iXV1cXG4nO1xuXG5cdFx0XHRcdFx0XHRjb25zdCAkbm90ZVRBbG9jYWxzID0gJG5vdGVUQWxvY2FsLmNoaWxkcmVuKCcqW2RhdGEtbm90ZXRhLWNvZGVdJyk7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJG5vdGVUQWxvY2Fscykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblxuXHRcdFx0XHRcdFx0XHRsZXQgbG9jYWxEZXNjOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1kZXNjJyk7XG5cdFx0XHRcdFx0XHRcdGlmIChsb2NhbERlc2MpIHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhbERlc2MgPSBg77yIJHtsb2NhbERlc2N977yJYDtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhbERlc2MgPSAnJztcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGxvY2FsQ29udjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtY29kZScpO1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgKiAte0R8JHtsb2NhbENvbnZ9fS0ke2xvY2FsRGVzY33lvZPliY3mmL7npLrkuLrvvJoteyR7bG9jYWxDb252fX0tXFxuYDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR3aWtpdGV4dCArPSAne3tub3RlVEEvZm9vdGVyfX1cXG4nO1xuXG5cdFx0XHRcdFx0Tm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCA9IHdpa2l0ZXh0O1xuXG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKHdpa2l0ZXh0KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBkb0V4ZWN1dGUoKSB7XG5cdFx0XHRpZiAodGhpcy5kYXRhSXNMb2FkZWQpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCkucmVzb2x2ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRyZWFsQ29udGVudC5lbXB0eSgpLmFwcGVuZCg8cD57Z2V0TWVzc2FnZSgnTG9hZGluZycpfTwvcD4pO1xuXG5cdFx0XHRyZXR1cm4gTm90ZVRBVmlld2VyLmdldE5vdGVUQVBhcnNlVGV4dCgpXG5cdFx0XHRcdC50aGVuKCh3aWtpdGV4dDogQXBpUmVzcG9uc2UpID0+XG5cdFx0XHRcdFx0cGFyc2VXaWtpdGV4dCh3aWtpdGV4dCBhcyBBcGlQYXJzZVJlc3BvbnNlLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdFx0XHR0aXRsZTogJ1RlbXBsYXRlOkNHcm91cC8tJyxcblx0XHRcdFx0XHRcdHZhcmlhbnQ6IHdnVXNlclZhcmlhbnQgYXMgc3RyaW5nLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdFx0LnRoZW4oKHBhcnNlZEh0bWw6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0dGhpcy4kcmVhbENvbnRlbnRcblx0XHRcdFx0XHRcdC5lbXB0eSgpXG5cdFx0XHRcdFx0XHQuaHRtbChwYXJzZWRIdG1sIGFzIEFwaVBhcnNlUmVzcG9uc2UpXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoYCR7T1BUSU9OUy5wb3J0bGV0Q2xhc3N9LW91dHB1dGApO1xuXG5cdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuZmluZCgnLm13LWNvbGxhcHNpYmxlJykgYXMgSlF1ZXJ5ICYge21ha2VDb2xsYXBzaWJsZTogKCkgPT4gSlF1ZXJ5fVxuXHRcdFx0XHRcdCkubWFrZUNvbGxhcHNpYmxlKCk7XG5cblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVNpemUoKTtcblx0XHRcdFx0XHR0aGlzLmRhdGFJc0xvYWRlZCA9IHRydWU7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yIHwgRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBBcGlSZXRyeUZhaWxFcnJvcikge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE9PLnVpLkVycm9yKGVycm9yLnRvSlF1ZXJ5KCksIHtcblx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE9PLnVpLkVycm9yKFN0cmluZyhlcnJvciksIHtcblx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvRXhlY3V0ZVdyYXAoKSB7XG5cdFx0XHRpZiAodGhpcy5leGVjdXRlUHJvbWlzZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZXhlY3V0ZVByb21pc2UgPSB0aGlzLmRvRXhlY3V0ZSgpO1xuXHRcdFx0XHRkZWxldGUgTm90ZVRBVmlld2VyLmxhc3RFcnJvcjtcblxuXHRcdFx0XHRjb25zdCBleGVjdXRlRGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXHRcdFx0XHR2b2lkICh0aGlzLmV4ZWN1dGVQcm9taXNlIGFzIEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPilcblx0XHRcdFx0XHQudGhlbigocmVzcG9uc2U6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHR2b2lkIGV4ZWN1dGVEZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEVycm9yIHwgT08udWkuRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIE9PLnVpLkVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdE5vdGVUQVZpZXdlci5sYXN0RXJyb3IgPSBlcnJvcjtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZvaWQgZXhlY3V0ZURlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmV4ZWN1dGVQcm9taXNlO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiBleGVjdXRlRGVmZXJyZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblx0XHRcdHZvaWQgKHRoaXMuZXhlY3V0ZVByb21pc2UgYXMgSlF1ZXJ5LlByb21pc2U8QXBpUmVzcG9uc2U+KVxuXHRcdFx0XHQudGhlbigocmVzcG9uc2U6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnJvcjogRXJyb3IgfCBPTy51aS5FcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIE9PLnVpLkVycm9yKSB7XG5cdFx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubGFzdEVycm9yID0gZXJyb3I7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5hbHdheXMoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmV4ZWN1dGVQcm9taXNlO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH1cblx0fVxuXG5cdE5vdGVUQVZpZXdlci5zdGF0aWMgPSB7XG5cdFx0Li4uT08udWkuUHJvY2Vzc0RpYWxvZy5zdGF0aWMsXG5cdH07XG5cdE5vdGVUQVZpZXdlci5zdGF0aWMubmFtZSA9IGBOb3RlVEFWaWV3ZXItJHtoYXNofWA7XG5cdE5vdGVUQVZpZXdlci5zdGF0aWMudGl0bGUgPSBnZXRNZXNzYWdlKCdUaXRsZScpO1xuXHROb3RlVEFWaWV3ZXIuc3RhdGljLmFjdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0bGFiZWw6IG13Lm1zZygnb291aS1kaWFsb2ctcHJvY2Vzcy1kaXNtaXNzJyksXG5cdFx0XHRmbGFnczogJ3NhZmUnLFxuXHRcdH0sXG5cdF07XG5cblx0Y29uc3Qgdmlld2VyOiBOb3RlVEFWaWV3ZXIgPSBuZXcgTm90ZVRBVmlld2VyKCk7XG5cdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbdmlld2VyXSk7XG5cdHZpZXdlck1hcC5zZXQoaGFzaCwgdmlld2VyKTtcblxuXHRyZXR1cm4gdmlld2VyO1xufTtcblxuY29uc3QgcmVzZXRBbGxWaWV3ZXIgPSAoKTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3Qgdmlld2VyIG9mIHZpZXdlck1hcC52YWx1ZXMoKSkge1xuXHRcdHZpZXdlci5kZXN0cm95KCk7XG5cdH1cblx0dmlld2VyTWFwLmNsZWFyKCk7XG5cdHZvaWQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcbn07XG5cbmV4cG9ydCB7Z2V0Vmlld2VyLCByZXNldEFsbFZpZXdlcn07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmZ1bmN0aW9uIGFzc2VydDxUPih2YWx1ZTogVCB8IHVuZGVmaW5lZCwgdmFsdWVOYW1lOiBzdHJpbmcpOiBhc3NlcnRzIHZhbHVlIHtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgQXNzZXJ0IEZhaWwsICR7dmFsdWVOYW1lfSA9PSBmYWxzZS5gKTtcblx0fVxufVxuXG5leHBvcnQge2Fzc2VydH07XG4iLCAiaW1wb3J0IHt0eXBlIGdldFZpZXdlcn0gZnJvbSAnLi92aWV3ZXInO1xuXG5jb25zdCB2aWV3ZXJNYXAgPSBuZXcgTWFwPHN0cmluZywgUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Vmlld2VyPj4oKTtcblxuZXhwb3J0IHt2aWV3ZXJNYXB9O1xuIiwgImNvbnN0IGluaXRXaW5kb3dNYW5hZ2VyID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIgPT4ge1xuXHRyZXR1cm4gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcbn07XG5cbmNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXG5leHBvcnQge3dpbmRvd01hbmFnZXJ9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcblxubGV0IHBvcnRsZXRJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5jb25zdCBpbml0R2xvYmFsTWV0aG9kcyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB0eXBlb2YgZ2xvYmFsTWV0aG9kcyA9PiB7XG5cdGNvbnN0IGdsb2JhbE1ldGhvZHM6IHtcblx0XHRpbml0KCk6IHZvaWQ7XG5cdFx0ZGVJbml0KCk6IHZvaWQ7XG5cdH0gPSB7XG5cdFx0aW5pdCgpIHtcblx0XHRcdC8qIGZha2UgKi9cblx0XHR9LFxuXHRcdGRlSW5pdCgpIHtcblx0XHRcdC8qIGZha2UgKi9cblx0XHR9LFxuXHR9O1xuXG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoc2tpbiA9PT0gJ3ZlY3RvcicpIHtcblx0XHRwb3J0bGV0SWQgPSAncC1ub3RlVEEnO1xuXG5cdFx0bGV0ICRub3RlVEFUYWI6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblx0XHRnbG9iYWxNZXRob2RzLmluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoJG5vdGVUQVRhYiB8fCAhcG9ydGxldElkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5vdGVUQVRhYjogSFRNTEVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0KHBvcnRsZXRJZCk7XG5cdFx0XHRpZiAoIW5vdGVUQVRhYikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQkbm90ZVRBVGFiID0gJChub3RlVEFUYWIpO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0XHRcdCRub3RlVEFUYWJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKGBtdy1wb3J0bGV0LSR7cG9ydGxldElkfWApXG5cdFx0XHRcdC5hZGRDbGFzcyhbYG13LXBvcnRsZXQtJHtwb3J0bGV0SWQucmVwbGFjZSgncC0nLCAnJyl9YCwgJ3ZlY3Rvci1tZW51LXRhYnMnLCAndmVjdG9yLW1lbnUtdGFicy1sZWdhY3knXSk7XG5cdFx0XHQkYm9keS5maW5kKCcjcC12YXJpYW50cycpLmFmdGVyKCRub3RlVEFUYWIpO1xuXHRcdH07XG5cdFx0Z2xvYmFsTWV0aG9kcy5kZUluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoISRub3RlVEFUYWIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0JG5vdGVUQVRhYi5maW5kKCd1bCcpLmVtcHR5KCk7XG5cdFx0XHRpZiAocG9ydGxldElkKSB7XG5cdFx0XHRcdG13LnV0aWwuaGlkZVBvcnRsZXQocG9ydGxldElkKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9IGVsc2UgaWYgKHNraW4gPT09ICd2ZWN0b3ItMjAyMicpIHtcblx0XHRwb3J0bGV0SWQgPSAncC1hc3NvY2lhdGVkLXBhZ2VzJztcblxuXHRcdGdsb2JhbE1ldGhvZHMuZGVJbml0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0JGJvZHkuZmluZChgLiR7T1BUSU9OUy5wb3J0bGV0Q2xhc3N9YCkucmVtb3ZlKCk7XG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBnbG9iYWxNZXRob2RzO1xufTtcblxuZXhwb3J0IHtwb3J0bGV0SWQsIGluaXRHbG9iYWxNZXRob2RzfTtcbiIsICJpbXBvcnQge2dldFZpZXdlciwgcmVzZXRBbGxWaWV3ZXJ9IGZyb20gJy4vbW9kdWxlcy92aWV3ZXInO1xuaW1wb3J0IHtpbml0R2xvYmFsTWV0aG9kcywgcG9ydGxldElkfSBmcm9tICcuL21vZHVsZXMvaW5pdEdsb2JhbE1ldGhvZHMnO1xuaW1wb3J0IHtjaGVja0ExMXlDb25maXJtS2V5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZW5lcmF0ZVBvcnRsZXRMaW5rfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVBvcnRsZXRMaW5rJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyJztcblxubGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG5vdGVUQSgkY29udGVudCk6IHZvaWQge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkY29udGVudC5wYXJlbnRzKCdib2R5Jyk7XG5cblx0aWYgKCFpc0luaXQpIHtcblx0XHRpc0luaXQgPSB0cnVlO1xuXHRcdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuYXBwZW5kVG8oJGJvZHkpO1xuXHR9XG5cblx0cmVzZXRBbGxWaWV3ZXIoKTtcblxuXHRjb25zdCBnbG9iYWxNZXRob2RzID0gaW5pdEdsb2JhbE1ldGhvZHMoJGJvZHkpO1xuXHRnbG9iYWxNZXRob2RzLmRlSW5pdCgpO1xuXHRnbG9iYWxNZXRob2RzLmluaXQoKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZCgnLm13LWluZGljYXRvcltpZF49bXctaW5kaWNhdG9yLW5vdGVUQS1dJykpIHtcblx0XHRjb25zdCBoYXNoOiBzdHJpbmcgPSBlbGVtZW50LmlkLnJlcGxhY2UoL15tdy1pbmRpY2F0b3Itbm90ZVRBLS8sICcnKTtcblxuXHRcdGxldCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRpZiAocG9ydGxldElkKSB7XG5cdFx0XHQkZWxlbWVudC5oaWRlKCk7XG5cblx0XHRcdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5IHwgdW5kZWZpbmVkID0gZ2VuZXJhdGVQb3J0bGV0TGluayhoYXNoKTtcblx0XHRcdGlmICghJHBvcnRsZXRMaW5rKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQkZWxlbWVudCA9ICRwb3J0bGV0TGluaztcblx0XHR9XG5cblx0XHRjb25zdCBvcGVuZXJMaXN0ZW5lciA9IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGdldFZpZXdlcigkYm9keSwgaGFzaCkub3BlbigpO1xuXHRcdH07XG5cdFx0JGVsZW1lbnQub24oJ2NsaWNrJywgb3BlbmVyTGlzdGVuZXIpO1xuXHRcdCRlbGVtZW50Lm9uKCdrZXlkb3duJywgb3BlbmVyTGlzdGVuZXIpO1xuXHR9XG59KTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge3BvcnRsZXRJZH0gZnJvbSAnLi4vaW5pdEdsb2JhbE1ldGhvZHMnO1xuXG5jb25zdCBnZW5lcmF0ZVBvcnRsZXRMaW5rID0gKGhhc2g6IHN0cmluZyk6IEpRdWVyeSB8IHVuZGVmaW5lZCA9PiB7XG5cdGlmICghcG9ydGxldElkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgJ+axiS/mvKInLCBgY2Etbm90ZVRBLSR7aGFzaH1gKTtcblx0aWYgKCFwb3J0bGV0TGluaykge1xuXHRcdHJldHVybjtcblx0fVxuXHRwb3J0bGV0TGluay5jbGFzc0xpc3QuYWRkKCdjYS1ub3RlVEEnKTtcblxuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRjb25zdCAkcG9ydGxldExpbms6IEpRdWVyeSA9ICQocG9ydGxldExpbmspLmFkZENsYXNzKGAke09QVElPTlMucG9ydGxldENsYXNzfWApO1xuXHQkcG9ydGxldExpbmtcblx0XHQuZmluZCgnYScpXG5cdFx0LmVtcHR5KClcblx0XHQuYXBwZW5kKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbYCR7T1BUSU9OUy5wb3J0bGV0Q2xhc3N9X19sYWJlbGAsIGAke09QVElPTlMucG9ydGxldENsYXNzfV9fbGFiZWwtaGFuc2BdfT5cblx0XHRcdFx0XHR7J+axiSd9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbYCR7T1BUSU9OUy5wb3J0bGV0Q2xhc3N9X19sYWJlbGAsIGAke09QVElPTlMucG9ydGxldENsYXNzfV9fbGFiZWwtaGFudGBdfT5cblx0XHRcdFx0XHR7J+a8oid9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cblx0cmV0dXJuICRwb3J0bGV0TGluaztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVQb3J0bGV0TGlua307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXO0FBQ1gsSUFBQUMsZUFBZ0I7O0FDRmpCLElBQUFDLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQWxCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxvQkFBQSxHQUFtQkYsa0JBQUFHLFVBQVM7TUFDM0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTTCxrQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxRQUFBLEdBQU9OLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUcsZUFBZU4sZ0JBQWdCO0FBRXJDLElBQU1PLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEdkJBLElBQU1QLG9CQUFOLGNBQWdDUSxNQUFNO0VBQzdCQztFQUVEQyxZQUFZRCxRQUFrQjtBQUNwQyxVQUFBLG9CQUFBRSxPQUEwQkYsT0FBT0csUUFBTSxvQkFBQSxDQUFvQjtBQUMzRCxTQUFLQyxPQUFPO0FBQ1osU0FBS0osU0FBU0E7RUFDZjtFQUVPSyxXQUFtQjtBQUN6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Z0JELGtCQUFrQm5ILEtBQUs7QUFDN0NvSCxnQkFBY0UsT0FBTztBQUNyQkYsZ0JBQWNDLEtBQUs7QUFBQSxNQUFBd0IsYUFBQWxGLDJCQUVHM0QsTUFBTU0sS0FBSyx5Q0FBeUMsQ0FBQSxHQUFBd0k7QUFBQSxNQUFBO0FBQTFFLFNBQUFELFdBQUEvRSxFQUFBLEdBQUEsRUFBQWdGLFNBQUFELFdBQUE5RSxFQUFBLEdBQUFDLFFBQTZFO0FBQUEsWUFBbEUvRyxVQUFBNkwsT0FBQXhKO0FBQ1YsWUFBTVcsT0FBZWhELFFBQVE4TCxHQUFHMUwsUUFBUSx5QkFBeUIsRUFBRTtBQUVuRSxVQUFJUSxXQUFtQkMsRUFBRWIsT0FBTztBQUNoQyxVQUFJaUssV0FBVztBQUNkckosaUJBQVNtTCxLQUFLO0FBRWQsY0FBTVQsZUFBbUNMLG9CQUFvQmpJLElBQUk7QUFDakUsWUFBSSxDQUFDc0ksY0FBYztBQUNsQjtRQUNEO0FBRUExSyxtQkFBVzBLO01BQ1o7QUFFQSxZQUFNVSxpQkFBa0JDLFdBQXlEO0FBQ2hGLFlBQUksRUFBQSxHQUFDbEIsbUJBQUFtQixxQkFBb0JELEtBQUssR0FBRztBQUNoQztRQUNEO0FBRUFBLGNBQU1FLGVBQWU7QUFDckJySixrQkFBVUMsT0FBT0MsSUFBSSxFQUFFb0osS0FBSztNQUM3QjtBQUNBeEwsZUFBU3lMLEdBQUcsU0FBU0wsY0FBYztBQUNuQ3BMLGVBQVN5TCxHQUFHLFdBQVdMLGNBQWM7SUFDdEM7RUFBQSxTQUFBN0UsS0FBQTtBQUFBeUUsZUFBQXhFLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUF5RSxlQUFBdkUsRUFBQTtFQUFBO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsidmVyc2lvbiIsICJwb3J0bGV0Q2xhc3MiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQXBpUmV0cnlGYWlsRXJyb3IiLCAibG9jYWxpemUiLCAiZW4iLCAiTG9hZGluZyIsICJUaXRsZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiRXJyb3IiLCAiZXJyb3JzIiwgImNvbnN0cnVjdG9yIiwgImNvbmNhdCIsICJsZW5ndGgiLCAibmFtZSIsICJ0b0pRdWVyeSIsICJlcnJvckNvdW50IiwgImVsZW1lbnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJyZXBsYWNlIiwgInRvU3RyaW5nIiwgIm1hcCIsICJlcnJvciIsICJpbmRleCIsICJzcGxpdCIsICJsaW5lIiwgIm51bWJlciIsICIkZWxlbWVudCIsICIkIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcnNlV2l0aFJldHJ5IiwgImFyZ3MiLCAiY291bnQiLCAicHJldmlvdXNFcnJvcnMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgImRlZmVycmVkIiwgInBhcnNlIiwgInRoZW4iLCAicmVzcG9uc2UiLCAicmVzb2x2ZSIsICJjYXRjaCIsICJjb25zb2xlIiwgInN0YWNrIiwgIlN0cmluZyIsICJuZXdSZXNwb25zZSIsICJuZXdFcnJvciIsICJwYXJzZVdpa2l0ZXh0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhc3NlcnQiLCAidmFsdWUiLCAidmFsdWVOYW1lIiwgInZpZXdlck1hcCIsICJNYXAiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAiT08iLCAidWkiLCAiV2luZG93TWFuYWdlciIsICJ3aW5kb3dNYW5hZ2VyIiwgImdldFZpZXdlciIsICIkYm9keSIsICJoYXNoIiwgImhhcyIsICJzdG9yZWRWaWV3ZXIiLCAiZ2V0IiwgIiR0YXJnZXRFbGVtZW50IiwgImZpbmQiLCAid2dQYWdlTmFtZSIsICJ3Z1VzZXJWYXJpYW50IiwgIm13IiwgImNvbmZpZyIsICJOb3RlVEFWaWV3ZXIiLCAiUHJvY2Vzc0RpYWxvZyIsICJkYXRhSXNMb2FkZWQiLCAiZXhlY3V0ZVByb21pc2UiLCAibXV0YXRpb25PYnNlcnZlciIsICIkcmVhbENvbnRlbnQiLCAibGFzdEVycm9yIiwgIm5vdGVUQVBhcnNlVGV4dCIsICJzaXplIiwgIk11dGF0aW9uT2JzZXJ2ZXIiLCAidXBkYXRlU2l6ZSIsICJiaW5kIiwgIm9ic2VydmUiLCAiY2hpbGRMaXN0IiwgInN1YnRyZWUiLCAiaW5pdGlhbGl6ZSIsICJwYW5lbExheW91dCIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICJwYWRkZWQiLCAiYXBwZW5kVG8iLCAiZ2V0U2V0dXBQcm9jZXNzIiwgImRhdGEiLCAibmV4dCIsICJkb0V4ZWN1dGVXcmFwIiwgImV4ZWN1dGVBY3Rpb24iLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJhY3Rpb24iLCAiaXNNYWluQWN0aW9uIiwgImV4ZWN1dGUiLCAiZGVzdHJveSIsICJkaXNjb25uZWN0IiwgImdldE5vdGVUQVBhcnNlVGV4dCIsICIkbm90ZVRBdGl0bGUiLCAiYWN0dWFsVGl0bGUiLCAid2lraXRleHQiLCAidGl0bGVEZWZlcnJlZCIsICJ0aXRsZUNvbnYiLCAiYXR0ciIsICJ0aXRsZURlc2MiLCAidGl0bGUiLCAidmFyaWFudCIsICJyZXN1bHRIdG1sIiwgIiRtdWx0aVRpdGxlIiwgInBhcnNlSFRNTCIsICJ0ZXh0VmFyaWFudCIsICJ2YXJpYW50VGV4dCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImNoaWxkcmVuIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJ0ZXh0IiwgInRyaW0iLCAidGV4dFZhcmlhbnRBcnJheSIsICJlcnIiLCAiZSIsICJmIiwgInRpdGxlQ29udmVydGVkIiwgIm11bHRpVGl0bGUiLCAiT2JqZWN0IiwgImhhc093biIsICJ2YXJpYW50cyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJ2YXJpYW50c05hbWUiLCAiam9pbiIsICJzdWJJdGVtU2VwYXJhdG9yIiwgIiRub3RlVEFncm91cHMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiJG5vdGVUQWxvY2FsIiwgIiRub3RlVEFsb2NhbHMiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAibG9jYWxEZXNjIiwgImxvY2FsQ29udiIsICJkb0V4ZWN1dGUiLCAiZW1wdHkiLCAiYXBwZW5kIiwgInBhcnNlZEh0bWwiLCAiaHRtbCIsICJhZGRDbGFzcyIsICJtYWtlQ29sbGFwc2libGUiLCAicmVjb3ZlcmFibGUiLCAiZXhlY3V0ZURlZmVycmVkIiwgImFsd2F5cyIsICJzdGF0aWMiLCAiYWN0aW9ucyIsICJsYWJlbCIsICJtc2ciLCAiZmxhZ3MiLCAidmlld2VyIiwgImFkZFdpbmRvd3MiLCAic2V0IiwgInJlc2V0QWxsVmlld2VyIiwgIl9pdGVyYXRvcjYiLCAidmFsdWVzIiwgIl9zdGVwNiIsICJjbGVhciIsICJjbGVhcldpbmRvd3MiLCAicG9ydGxldElkIiwgImluaXRHbG9iYWxNZXRob2RzIiwgImdsb2JhbE1ldGhvZHMiLCAiaW5pdCIsICJkZUluaXQiLCAic2tpbiIsICIkbm90ZVRBVGFiIiwgIm5vdGVUQVRhYiIsICJ1dGlsIiwgImFkZFBvcnRsZXQiLCAicmVtb3ZlQ2xhc3MiLCAiYWZ0ZXIiLCAiaGlkZVBvcnRsZXQiLCAicmVtb3ZlIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiZ2VuZXJhdGVQb3J0bGV0TGluayIsICJwb3J0bGV0TGluayIsICJhZGRQb3J0bGV0TGluayIsICJjbGFzc0xpc3QiLCAiYWRkIiwgIiRwb3J0bGV0TGluayIsICJpc0luaXQiLCAiaG9vayIsICJub3RlVEEiLCAiJGNvbnRlbnQiLCAicGFyZW50cyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJpZCIsICJoaWRlIiwgIm9wZW5lckxpc3RlbmVyIiwgImV2ZW50IiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAicHJldmVudERlZmF1bHQiLCAib3BlbiIsICJvbiJdCn0K
