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
//! src/NoteTA/modules/constant.ts
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_SKIN = mw.config.get("skin");
var WG_USER_VARIANT = mw.config.get("wgUserVariant");
var IS_VECTOR = ["vector", "vector-2022"].includes(WG_SKIN);
var PORTLET_ID = "p-noteTA";
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
//! src/NoteTA/modules/viewer.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
//! src/NoteTA/modules/util/assert.ts
function assert(value, valueName) {
  if (!value) {
    throw new Error("Assert Fail, ".concat(valueName, " == null."));
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
        wikitext += "; 本文使用[[Help:中文维基百科的繁简、地区词处理#條目標題|标题手工转换]]\n";
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
            const titleConverted = variantText[WG_USER_VARIANT];
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
        this.dataIsLoaded = true;
        this.$realContent.empty().html(parsedHtml);
        this.$realContent.find(".mw-collapsible").makeCollapsible();
        this.updateSize();
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
  if (!NoteTAViewer.static || NoteTAViewer.static === OO.ui.ProcessDialog.static) {
    NoteTAViewer.static = {
      ...OO.ui.ProcessDialog.static
    };
  }
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
  viewerMap.clear();
  void windowManager.clearWindows();
};
//! src/NoteTA/modules/processVector.tsx
var import_ext_gadget5 = __toESM(require("ext.gadget.React"), 1);
var $noteTATab;
var vectorInit = ($body) => {
  if ($noteTATab) {
    return;
  }
  const noteTATab = mw.util.addPortlet(PORTLET_ID);
  if (!noteTATab) {
    return;
  }
  $noteTATab = $(noteTATab);
  $noteTATab.removeClass("mw-portlet-p-noteTA").addClass(["mw-portlet-noteTA", "vector-menu-tabs"]);
  $noteTATab.find("ul").empty();
  if (WG_SKIN === "vector-2022") {
    $body.find("#p-associated-pages").after($noteTATab);
  } else {
    $noteTATab.addClass("vector-menu-tabs-legacy");
    $body.find("#p-variants").after($noteTATab);
  }
};
var vectorAddItem = ($body, hash) => {
  vectorInit($body);
  const portletLink = mw.util.addPortletLink(PORTLET_ID, "#", "汉/漢", "ca-noteTA-".concat(hash));
  if (!portletLink) {
    return;
  }
  const style = {
    height: "85%",
    padding: "1px 3px"
  };
  const $portletLink = $(portletLink).find("a");
  $portletLink.empty().append(/* @__PURE__ */ import_ext_gadget5.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget5.default.createElement("span", {
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
var import_ext_gadget6 = require("ext.gadget.FilterAlteredClicks");
var isInit = false;
mw.hook("wikipage.content").add(($content) => {
  const $body = $content.parents("body");
  if (!isInit) {
    isInit = true;
    windowManager.$element.appendTo($body);
  }
  resetAllViewer();
  if (IS_VECTOR) {
    vectorInit($body);
    mw.util.hidePortlet(PORTLET_ID);
  }
  var _iterator6 = _createForOfIteratorHelper($body.find(".mw-indicator[id^=mw-indicator-noteTA-]")), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      const element = _step6.value;
      const hash = element.id.replace(/^mw-indicator-noteTA-/, "");
      let $element = $(element);
      if (IS_VECTOR) {
        var _vectorAddItem;
        $element.hide();
        $element = (_vectorAddItem = vectorAddItem($body, hash)) !== null && _vectorAddItem !== void 0 ? _vectorAddItem : $element;
      }
      $element.on("click", (0, import_ext_gadget6.filterAlteredClicks)((event) => {
        event.preventDefault();
        getViewer($body, hash).open();
      }));
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL0FwaVJldHJ5RmFpbEVycm9yLnRzeCIsICJzcmMvTm90ZVRBL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTm90ZVRBL29wdGlvbnMuanNvbiIsICJzcmMvTm90ZVRBL21vZHVsZXMvYXBpLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9wYXJzZVdpa2l0ZXh0LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy92aWV3ZXIudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL2Fzc2VydC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdFZpZXdNYXAudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9wcm9jZXNzVmVjdG9yLnRzeCIsICJzcmMvTm90ZVRBL05vdGVUQS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5jb25zdCBXR19TS0lOOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCdza2luJyk7XG5jb25zdCBXR19VU0VSX1ZBUklBTlQ6IHN0cmluZyB8IG51bGwgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJWYXJpYW50Jyk7XG5cbmNvbnN0IElTX1ZFQ1RPUjogYm9vbGVhbiA9IFsndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJ10uaW5jbHVkZXMoV0dfU0tJTik7XG5jb25zdCBQT1JUTEVUX0lEOiBzdHJpbmcgPSAncC1ub3RlVEEnO1xuXG5leHBvcnQge0lTX1ZFQ1RPUiwgUE9SVExFVF9JRCwgV0dfUEFHRV9OQU1FLCBXR19TS0lOLCBXR19VU0VSX1ZBUklBTlR9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNsYXNzIEFwaVJldHJ5RmFpbEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRwcml2YXRlIGVycm9yczogc3RyaW5nW107XG5cblx0Y29uc3RydWN0b3IoZXJyb3JzOiBzdHJpbmdbXSkge1xuXHRcdHN1cGVyKGBBcGkgY2FsbHMgZmFpbGVkICR7ZXJyb3JzLmxlbmd0aH0gdGltZShzKSBpbiBhIHJvdy5gKTtcblx0XHR0aGlzLm5hbWUgPSAnQXBpUmV0cnlGYWlsRXJyb3InO1xuXHRcdHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuXHR9XG5cblx0dG9KUXVlcnkoKTogSlF1ZXJ5IHtcblx0XHRjb25zdCBlcnJvckNvdW50OiBudW1iZXIgPSB0aGlzLmVycm9ycy5sZW5ndGg7XG5cdFx0Y29uc3QgZWxlbWVudCA9IChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cblx0XHRcdFx0PHA+e2dldE1lc3NhZ2UoJ0FwaVJldHJ5RmFpbEVycm9yJykucmVwbGFjZSgvXFwkMS9nLCBlcnJvckNvdW50LnRvU3RyaW5nKCkpfTwvcD5cblx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdHt0aGlzLmVycm9ycy5yZWR1Y2UoXG5cdFx0XHRcdFx0XHQoZXJyb3JzLCBlcnJvciwgaW5kZXgpID0+IFtcblx0XHRcdFx0XHRcdFx0Li4uZXJyb3JzLFxuXHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0e2Vycm9yXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVkdWNlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoYWNjdW11bGF0b3IsIGxpbmUsIG51bWJlcikgPT4gWy4uLmFjY3VtdWxhdG9yLCA8cCBrZXk9e251bWJlcn0+e2xpbmV9PC9wPl0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtdIGFzIFJlYWN0LlJlYWN0RWxlbWVudFtdXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L2xpPixcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRbXSBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXVxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvb2w+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXG5cdFx0cmV0dXJuICQoZWxlbWVudCkgYXMgSlF1ZXJ5O1xuXHR9XG59XG5cbmV4cG9ydCB7QXBpUmV0cnlGYWlsRXJyb3J9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBcGlSZXRyeUZhaWxFcnJvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcGkgY2FsbHMgZmFpbGVkICQxIHRpbWUocykgaW4gYSByb3cuIEVycm9yczogJyxcblx0XHRcdCd6aC1oYW5zJzogJ0FwaSDosIPnlKjov57nu63lpLHotKUgJDEg5qyh77yMJDEg5qyh6LCD55So55qE6ZSZ6K+v5YiG5Yir5Li677yaJyxcblx0XHRcdCd6aC1oYW50JzogJ0FwaSDoqr/nlKjpgKPnuozlpLHmlZcgJDEg5qyh77yMJDEg5qyh6Kq/55So55qE6Yyv6Kqk5YiG5Yil54K677yaJyxcblx0XHR9KSxcblx0XHRMb2FkaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yqg6L294oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOi8ieWFpeKApuKApicsXG5cdFx0fSksXG5cdFx0VGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90ZVRBJyxcblx0XHRcdCd6aC1oYW5zJzogJ+Wtl+ivjei9rOaNoicsXG5cdFx0XHQnemgtaGFudCc6ICflrZfoqZ7ovYnmj5snLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjEuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBOb3RlVEEvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxudHlwZSBBcGlQYXJzZSA9IG13LkFwaVsncGFyc2UnXTtcbnR5cGUgQXBpUGFyc2VQYXJhbWV0ZXJzID0gUGFyYW1ldGVyczxBcGlQYXJzZT47XG50eXBlIEFwaVBhcnNlUmVzcG9uc2UgPSBBd2FpdGVkPFJldHVyblR5cGU8QXBpUGFyc2U+PjtcbnR5cGUgQXBpUmVzcG9uc2UgPSBBcGlQYXJzZVJlc3BvbnNlIHwgQXBpUmV0cnlGYWlsRXJyb3I7XG5cbmNvbnN0IHBhcnNlV2l0aFJldHJ5ID0gKFxuXHRhcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMsXG5cdGNvdW50OiBudW1iZXIgPSAzLFxuXHRwcmV2aW91c0Vycm9yczogc3RyaW5nW10gPSBbXVxuKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiA9PiB7XG5cdGlmICghY291bnQpIHtcblx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXRyeUZhaWxFcnJvcj4oKS5yZWplY3QobmV3IEFwaVJldHJ5RmFpbEVycm9yKHByZXZpb3VzRXJyb3JzKSk7XG5cdH1cblxuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0dm9pZCBhcGlcblx0XHQucGFyc2UoLi4uYXJncylcblx0XHQudGhlbigocmVzcG9uc2U6IEFwaVBhcnNlUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yPzogRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG5cdFx0XHRpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnc3RhY2snIGluIGVycm9yKSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBlcnJvci5zdGFjaztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBTdHJpbmcoZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZVdpdGhSZXRyeShhcmdzLCAtLWNvdW50LCBwcmV2aW91c0Vycm9ycylcblx0XHRcdFx0LnRoZW4oKG5ld1Jlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShuZXdSZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgobmV3RXJyb3I/OiBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KG5ld0Vycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIGRlZmVycmVkO1xufTtcblxuY29uc3QgcGFyc2VXaWtpdGV4dCA9ICguLi5hcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+ID0+IHtcblx0cmV0dXJuIHBhcnNlV2l0aFJldHJ5KGFyZ3MpO1xufTtcblxuZXhwb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9O1xuIiwgImltcG9ydCB7dHlwZSBBcGlQYXJzZVJlc3BvbnNlLCB0eXBlIEFwaVJlc3BvbnNlLCBwYXJzZVdpa2l0ZXh0fSBmcm9tICcuL3BhcnNlV2lraXRleHQnO1xuaW1wb3J0IHtXR19QQUdFX05BTUUsIFdHX1VTRVJfVkFSSUFOVH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJy4vdXRpbC9hc3NlcnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt2aWV3ZXJNYXB9IGZyb20gJy4vaW5pdFZpZXdNYXAnO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3QgZ2V0Vmlld2VyID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiwgaGFzaDogc3RyaW5nKTogT08udWkuUHJvY2Vzc0RpYWxvZyA9PiB7XG5cdGlmICh2aWV3ZXJNYXAuaGFzKGhhc2gpKSB7XG5cdFx0Y29uc3Qgc3RvcmVkVmlld2VyID0gdmlld2VyTWFwLmdldChoYXNoKTtcblx0XHRhc3NlcnQoc3RvcmVkVmlld2VyLCAndmlld2VyJyk7XG5cdFx0cmV0dXJuIHN0b3JlZFZpZXdlcjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXRFbGVtZW50OiBKUXVlcnkgPSAkYm9keS5maW5kKGAjbm90ZVRBLSR7aGFzaH1gKTtcblx0aWYgKCEkdGFyZ2V0RWxlbWVudC5sZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYENhbid0IGdldCBFbGVtZW50IFwiI25vdGVUQS0ke2hhc2h9XCIuYCk7XG5cdH1cblxuXHRjbGFzcyBOb3RlVEFWaWV3ZXIgZXh0ZW5kcyBPTy51aS5Qcm9jZXNzRGlhbG9nIHtcblx0XHRwcml2YXRlIGRhdGFJc0xvYWRlZDogYm9vbGVhbjtcblx0XHRwcml2YXRlIGV4ZWN1dGVQcm9taXNlPzogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5kb0V4ZWN1dGU+O1xuXHRcdHByaXZhdGUgJHJlYWxDb250ZW50OiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSAkYm9keTogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXHRcdHByaXZhdGUgc3RhdGljIGxhc3RFcnJvcj86IE9PLnVpLkVycm9yO1xuXHRcdHByaXZhdGUgc3RhdGljIG5vdGVUQVBhcnNlVGV4dDogc3RyaW5nO1xuXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0c3VwZXIoe1xuXHRcdFx0XHRzaXplOiAnbGFyZ2VyJyxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5kYXRhSXNMb2FkZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMuJHJlYWxDb250ZW50ID0gJCg8ZGl2IC8+KSBhcyBKUXVlcnk7XG5cdFx0fVxuXG5cdFx0b3ZlcnJpZGUgaW5pdGlhbGl6ZSgpOiB0aGlzIHtcblx0XHRcdHN1cGVyLmluaXRpYWxpemUoKTtcblxuXHRcdFx0Y29uc3QgcGFuZWxMYXlvdXQ6IE9PLnVpLlBhbmVsTGF5b3V0ID0gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuYXBwZW5kVG8ocGFuZWxMYXlvdXQuJGVsZW1lbnQpO1xuXHRcdFx0cGFuZWxMYXlvdXQuJGVsZW1lbnQuYXBwZW5kVG8odGhpcy4kYm9keSBhcyBKUXVlcnkpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRvdmVycmlkZSBnZXRTZXR1cFByb2Nlc3MoZGF0YTogT08udWkuRGlhbG9nLlNldHVwRGF0YU1hcCk6IE9PLnVpLlByb2Nlc3Mge1xuXHRcdFx0cmV0dXJuIHN1cGVyLmdldFNldHVwUHJvY2VzcyhkYXRhKS5uZXh0KCgpID0+IHtcblx0XHRcdFx0dm9pZCB0aGlzLmRvRXhlY3V0ZVdyYXAoKTtcblx0XHRcdFx0dm9pZCB0aGlzLmV4ZWN1dGVBY3Rpb24oJ21haW4nKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdG92ZXJyaWRlIGdldEFjdGlvblByb2Nlc3MoYWN0aW9uPzogc3RyaW5nKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRjb25zdCBpc01haW5BY3Rpb246IGJvb2xlYW4gPSBhY3Rpb24gPT09ICdtYWluJztcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHN1cGVyXG5cdFx0XHRcdFx0LmdldEFjdGlvblByb2Nlc3MoYWN0aW9uKVxuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM3MDMwXG5cdFx0XHRcdFx0Lm5leHQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGlzTWFpbkFjdGlvbikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5kb0V4ZWN1dGVXcmFwKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQubmV4dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoaXNNYWluQWN0aW9uICYmIE5vdGVUQVZpZXdlci5sYXN0RXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIE5vdGVUQVZpZXdlci5sYXN0RXJyb3I7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gc3VwZXIuZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24pLmV4ZWN1dGUoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRzdGF0aWMgZ2V0Tm90ZVRBUGFyc2VUZXh0KCk6IEpRdWVyeS5EZWZlcnJlZDxBcGlSZXNwb25zZT4ge1xuXHRcdFx0aWYgKE5vdGVUQVZpZXdlci5ub3RlVEFQYXJzZVRleHQpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQ8c3RyaW5nPigpLnJlc29sdmUoTm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0ICRub3RlVEF0aXRsZTogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS10aXRsZScpO1xuXHRcdFx0Y29uc3QgYWN0dWFsVGl0bGU6IHN0cmluZyA9IFdHX1BBR0VfTkFNRS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdFx0XHRjb25zdCB0aXRsZURlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblxuXHRcdFx0aWYgKCRub3RlVEF0aXRsZS5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgdGl0bGVDb252OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkbm90ZVRBdGl0bGUuYXR0cignZGF0YS1ub3RldGEtY29kZScpO1xuXHRcdFx0XHRhc3NlcnQodGl0bGVDb252LCAndGl0bGVDb252Jyk7XG5cblx0XHRcdFx0bGV0IHRpdGxlRGVzYzogc3RyaW5nIHwgdW5kZWZpbmVkID0gJG5vdGVUQXRpdGxlLmF0dHIoJ2RhdGEtbm90ZXRhLWRlc2MnKTtcblx0XHRcdFx0aWYgKHRpdGxlRGVzYykge1xuXHRcdFx0XHRcdHRpdGxlRGVzYyA9IGDvvIgke3RpdGxlRGVzY33vvIlgO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRpdGxlRGVzYyA9ICcnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2lraXRleHQgKz0gYDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj57e2VkaXR8JHthY3R1YWxUaXRsZX18c2VjdGlvbj0wfX08L3NwYW4+XFxuYDtcblx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paH5L2/55SoW1tIZWxwOuS4reaWh+e7tOWfuueZvuenkeeahOe5geeugOOAgeWcsOWMuuivjeWkhOeQhiPmop3nm67mqJnpoYx85qCH6aKY5omL5bel6L2s5o2iXV1cXG4nO1xuXHRcdFx0XHR3aWtpdGV4dCArPSBgKiDovazmjaLmoIfpopjkuLrvvJote0R8JHt0aXRsZUNvbnZ9fS0ke3RpdGxlRGVzY31cXG5gO1xuXHRcdFx0XHR3aWtpdGV4dCArPSBgKiDlrp7pmYXmoIfpopjkuLrvvJote1J8JHthY3R1YWxUaXRsZX19Le+8m+W9k+WJjeaYvuekuuS4uu+8mi17fCR7dGl0bGVDb252fX0tXFxuYDtcblxuXHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFyc2VXaWtpdGV4dChge3tub3RlVEEvbXVsdGl0aXRsZXwke2FjdHVhbFRpdGxlfX19YCwge1xuXHRcdFx0XHRcdHRpdGxlOiBhY3R1YWxUaXRsZSxcblx0XHRcdFx0XHR2YXJpYW50OiAnemgnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKChyZXN1bHRIdG1sKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCAkbXVsdGlUaXRsZTogSlF1ZXJ5ID0gJCgkLnBhcnNlSFRNTChyZXN1bHRIdG1sIGFzIEFwaVBhcnNlUmVzcG9uc2UpKS5maW5kKFxuXHRcdFx0XHRcdFx0XHQnLm5vdGVUQS1tdWx0aXRpdGxlJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGlmICgkbXVsdGlUaXRsZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paHW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzmoIfpopjlj6/og73nu4/ov4fovazmjaJdXVxcbiog6L2s5o2i5qCH6aKY5Li677yaJztcblxuXHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0VmFyaWFudDogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRUZXh0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudWxsPiA9IHt9O1xuXG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbXVsdGlUaXRsZS5jaGlsZHJlbigpKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtbXVsdGl0aXRsZS12YXJpYW50Jyk7XG5cdFx0XHRcdFx0XHRcdFx0YXNzZXJ0KHZhcmlhbnQsICd2YXJpYW50Jyk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0OiBzdHJpbmcgPSAkZWxlbWVudC50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRUZXh0W3ZhcmlhbnRdID0gdGV4dDtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHRWYXJpYW50QXJyYXk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gdGV4dFZhcmlhbnRbdGV4dF07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRleHRWYXJpYW50QXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHRWYXJpYW50QXJyYXlbdGV4dFZhcmlhbnRBcnJheS5sZW5ndGhdID0gdmFyaWFudDtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dFZhcmlhbnRbdGV4dF0gPSBbdmFyaWFudF07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbXVsdGlUaXRsZTogc3RyaW5nW10gPSBbXTtcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCB0ZXh0IG9mIE9iamVjdC52YWx1ZXModmFyaWFudFRleHQpKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRleHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IHRleHRWYXJpYW50W3RleHRdO1xuXHRcdFx0XHRcdFx0XHRcdGlmICghdmFyaWFudHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiB2YXJpYW50cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudFRleHRbdmFyaWFudF0gPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzTmFtZTogc3RyaW5nID0gdmFyaWFudHNcblx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKHZhcmlhbnQ6IHN0cmluZyk6IHN0cmluZyA9PiBgLXtSfHt7TWVkaWFXaWtpOlZhcmlhbnRuYW1lLSR7dmFyaWFudH19fX0tYClcblx0XHRcdFx0XHRcdFx0XHRcdC5qb2luKCfjgIEnKTtcblx0XHRcdFx0XHRcdFx0XHRtdWx0aVRpdGxlW211bHRpVGl0bGUubGVuZ3RoXSA9IGAke3ZhcmlhbnRzTmFtZX3vvJote1J8JHt0ZXh0fX0tYDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBtdWx0aVRpdGxlLmpvaW4oJ++8mycpO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlQ29udmVydGVkID0gdmFyaWFudFRleHRbV0dfVVNFUl9WQVJJQU5UIGFzIHN0cmluZ107XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGBcXG4qIOWunumZheagh+mimOS4uu+8mi17Unwke2FjdHVhbFRpdGxlfX0t77yb5b2T5YmN5pi+56S65Li677yaLXtSfCR7dGl0bGVDb252ZXJ0ZWR9fS1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0XHRcdHRpdGxlRGVmZXJyZWRcblx0XHRcdFx0LnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGNvbnN0ICRub3RlVEFncm91cHM6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtZ3JvdXAgPiAqW2RhdGEtbm90ZXRhLWdyb3VwXScpO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbm90ZVRBZ3JvdXBzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRcdFx0XHRcdHN3aXRjaCAoJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAtc291cmNlJykpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAndGVtcGxhdGUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGB7e0NHcm91cC8keyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdtb2R1bGUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGB7eyNpbnZva2U6Q0dyb3VwVmlld2VyfGRpYWxvZ3wkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdub25lJzpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgOyDmnKzmlofkvb/nlKjnmoTlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCd5bCa5pyq5Yib5bu6XFxuYDtcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgKiB7e2VkaXR8TW9kdWxlOkNHcm91cC8keyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fOWIm+W7uuWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDsg5pyq55+l5YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAneadpea6kOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAtc291cmNlJyl94oCdXFxuYDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCAkbm90ZVRBbG9jYWw6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtbG9jYWwnKTtcblx0XHRcdFx0XHRpZiAoJG5vdGVUQWxvY2FsLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj57e2VkaXR8JHthY3R1YWxUaXRsZX18c2VjdGlvbj0wfX08L3NwYW4+XFxuYDtcblx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICc7IOacrOaWh+S9v+eUqFtbSGVscDrlrZfor43ovazmjaLlpITnkIZ85YWo5paH5omL5bel6L2s5o2iXV1cXG4nO1xuXG5cdFx0XHRcdFx0XHRjb25zdCAkbm90ZVRBbG9jYWxzID0gJG5vdGVUQWxvY2FsLmNoaWxkcmVuKCcqW2RhdGEtbm90ZXRhLWNvZGVdJyk7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJG5vdGVUQWxvY2Fscykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblxuXHRcdFx0XHRcdFx0XHRsZXQgbG9jYWxEZXNjOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1kZXNjJyk7XG5cdFx0XHRcdFx0XHRcdGlmIChsb2NhbERlc2MpIHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhbERlc2MgPSBg77yIJHtsb2NhbERlc2N977yJYDtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhbERlc2MgPSAnJztcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGxvY2FsQ29udjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtY29kZScpO1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgKiAte0R8JHtsb2NhbENvbnZ9fS0ke2xvY2FsRGVzY33lvZPliY3mmL7npLrkuLrvvJoteyR7bG9jYWxDb252fX0tXFxuYDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR3aWtpdGV4dCArPSAne3tub3RlVEEvZm9vdGVyfX1cXG4nO1xuXG5cdFx0XHRcdFx0Tm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCA9IHdpa2l0ZXh0O1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZSh3aWtpdGV4dCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH1cblxuXHRcdGRvRXhlY3V0ZSgpIHtcblx0XHRcdGlmICh0aGlzLmRhdGFJc0xvYWRlZCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKS5yZXNvbHZlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmVtcHR5KCkuYXBwZW5kKDxwPntnZXRNZXNzYWdlKCdMb2FkaW5nJyl9PC9wPik7XG5cblx0XHRcdHJldHVybiBOb3RlVEFWaWV3ZXIuZ2V0Tm90ZVRBUGFyc2VUZXh0KClcblx0XHRcdFx0LnRoZW4oKHdpa2l0ZXh0OiBBcGlSZXNwb25zZSkgPT5cblx0XHRcdFx0XHRwYXJzZVdpa2l0ZXh0KHdpa2l0ZXh0IGFzIEFwaVBhcnNlUmVzcG9uc2UsIHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnVGVtcGxhdGU6Q0dyb3VwLy0nLFxuXHRcdFx0XHRcdFx0dmFyaWFudDogV0dfVVNFUl9WQVJJQU5UIGFzIHN0cmluZyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC50aGVuKChwYXJzZWRIdG1sOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZGF0YUlzTG9hZGVkID0gdHJ1ZTtcblxuXHRcdFx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmVtcHR5KCkuaHRtbChwYXJzZWRIdG1sIGFzIEFwaVBhcnNlUmVzcG9uc2UpO1xuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmZpbmQoJy5tdy1jb2xsYXBzaWJsZScpIGFzIEpRdWVyeSAmIHttYWtlQ29sbGFwc2libGU6ICgpID0+IEpRdWVyeX1cblx0XHRcdFx0XHQpLm1ha2VDb2xsYXBzaWJsZSgpO1xuXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVTaXplKCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yIHwgRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBBcGlSZXRyeUZhaWxFcnJvcikge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE9PLnVpLkVycm9yKGVycm9yLnRvSlF1ZXJ5KCksIHtcblx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE9PLnVpLkVycm9yKFN0cmluZyhlcnJvciksIHtcblx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRkb0V4ZWN1dGVXcmFwKCkge1xuXHRcdFx0aWYgKHRoaXMuZXhlY3V0ZVByb21pc2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmV4ZWN1dGVQcm9taXNlID0gdGhpcy5kb0V4ZWN1dGUoKTtcblx0XHRcdFx0ZGVsZXRlIE5vdGVUQVZpZXdlci5sYXN0RXJyb3I7XG5cblx0XHRcdFx0Y29uc3QgZXhlY3V0ZURlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblx0XHRcdFx0dm9pZCAodGhpcy5leGVjdXRlUHJvbWlzZSBhcyBKUXVlcnkuUHJvbWlzZTxBcGlSZXNwb25zZT4pXG5cdFx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCBleGVjdXRlRGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yOiBFcnJvciB8IE9PLnVpLkVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBPTy51aS5FcnJvcikge1xuXHRcdFx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubGFzdEVycm9yID0gZXJyb3I7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2b2lkIGV4ZWN1dGVEZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFsd2F5cygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5leGVjdXRlUHJvbWlzZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gZXhlY3V0ZURlZmVycmVkO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cdFx0XHR2b2lkICh0aGlzLmV4ZWN1dGVQcm9taXNlIGFzIEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPilcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEVycm9yIHwgT08udWkuRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBPTy51aS5FcnJvcikge1xuXHRcdFx0XHRcdFx0Tm90ZVRBVmlld2VyLmxhc3RFcnJvciA9IGVycm9yO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5leGVjdXRlUHJvbWlzZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9XG5cdH1cblxuXHRpZiAoIU5vdGVUQVZpZXdlci5zdGF0aWMgfHwgTm90ZVRBVmlld2VyLnN0YXRpYyA9PT0gT08udWkuUHJvY2Vzc0RpYWxvZy5zdGF0aWMpIHtcblx0XHROb3RlVEFWaWV3ZXIuc3RhdGljID0ge1xuXHRcdFx0Li4uT08udWkuUHJvY2Vzc0RpYWxvZy5zdGF0aWMsXG5cdFx0fTtcblx0fVxuXG5cdE5vdGVUQVZpZXdlci5zdGF0aWMubmFtZSA9IGBOb3RlVEFMb2FkZXItJHtoYXNofWA7XG5cdE5vdGVUQVZpZXdlci5zdGF0aWMudGl0bGUgPSBnZXRNZXNzYWdlKCdUaXRsZScpO1xuXHROb3RlVEFWaWV3ZXIuc3RhdGljLmFjdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0bGFiZWw6IG13Lm1zZygnb291aS1kaWFsb2ctcHJvY2Vzcy1kaXNtaXNzJyksXG5cdFx0XHRmbGFnczogJ3NhZmUnLFxuXHRcdH0sXG5cdF07XG5cblx0Y29uc3Qgdmlld2VyOiBPTy51aS5Qcm9jZXNzRGlhbG9nID0gbmV3IE5vdGVUQVZpZXdlcigpO1xuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW3ZpZXdlcl0pO1xuXHR2aWV3ZXJNYXAuc2V0KGhhc2gsIHZpZXdlcik7XG5cblx0cmV0dXJuIHZpZXdlcjtcbn07XG5cbmNvbnN0IHJlc2V0QWxsVmlld2VyID0gKCk6IHZvaWQgPT4ge1xuXHR2aWV3ZXJNYXAuY2xlYXIoKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xufTtcblxuZXhwb3J0IHtnZXRWaWV3ZXIsIHJlc2V0QWxsVmlld2VyfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZVxuZnVuY3Rpb24gYXNzZXJ0KHZhbHVlOiBzdHJpbmcgfCBPTy51aS5Qcm9jZXNzRGlhbG9nIHwgdW5kZWZpbmVkLCB2YWx1ZU5hbWU6IHN0cmluZyk6IGFzc2VydHMgdmFsdWUge1xuXHRpZiAoIXZhbHVlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBBc3NlcnQgRmFpbCwgJHt2YWx1ZU5hbWV9ID09IG51bGwuYCk7XG5cdH1cbn1cblxuZXhwb3J0IHthc3NlcnR9O1xuIiwgImNvbnN0IHZpZXdlck1hcDogTWFwPHN0cmluZywgT08udWkuUHJvY2Vzc0RpYWxvZz4gPSBuZXcgTWFwPHN0cmluZywgT08udWkuUHJvY2Vzc0RpYWxvZz4oKTtcblxuZXhwb3J0IHt2aWV3ZXJNYXB9O1xuIiwgImNvbnN0IGluaXRXaW5kb3dNYW5hZ2VyID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIgPT4ge1xuXHRyZXR1cm4gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcbn07XG5cbmNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXG5leHBvcnQge3dpbmRvd01hbmFnZXJ9O1xuIiwgImltcG9ydCB7UE9SVExFVF9JRCwgV0dfU0tJTn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbmxldCAkbm90ZVRBVGFiOiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5jb25zdCB2ZWN0b3JJbml0ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAoJG5vdGVUQVRhYikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG5vdGVUQVRhYjogSFRNTEVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0KFBPUlRMRVRfSUQpO1xuXHRpZiAoIW5vdGVUQVRhYikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdCRub3RlVEFUYWIgPSAkKG5vdGVUQVRhYik7XG5cdCRub3RlVEFUYWIucmVtb3ZlQ2xhc3MoJ213LXBvcnRsZXQtcC1ub3RlVEEnKS5hZGRDbGFzcyhbJ213LXBvcnRsZXQtbm90ZVRBJywgJ3ZlY3Rvci1tZW51LXRhYnMnXSk7XG5cdCRub3RlVEFUYWIuZmluZCgndWwnKS5lbXB0eSgpO1xuXG5cdGlmIChXR19TS0lOID09PSAndmVjdG9yLTIwMjInKSB7XG5cdFx0JGJvZHkuZmluZCgnI3AtYXNzb2NpYXRlZC1wYWdlcycpLmFmdGVyKCRub3RlVEFUYWIpO1xuXHR9IGVsc2Uge1xuXHRcdCRub3RlVEFUYWIuYWRkQ2xhc3MoJ3ZlY3Rvci1tZW51LXRhYnMtbGVnYWN5Jyk7XG5cdFx0JGJvZHkuZmluZCgnI3AtdmFyaWFudHMnKS5hZnRlcigkbm90ZVRBVGFiKTtcblx0fVxufTtcblxuY29uc3QgdmVjdG9yQWRkSXRlbSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4sIGhhc2g6IHN0cmluZyk6IEpRdWVyeSB8IHVuZGVmaW5lZCA9PiB7XG5cdHZlY3RvckluaXQoJGJvZHkpO1xuXG5cdGNvbnN0IHBvcnRsZXRMaW5rOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoUE9SVExFVF9JRCwgJyMnLCAn5rGJL+a8oicsIGBjYS1ub3RlVEEtJHtoYXNofWApO1xuXHRpZiAoIXBvcnRsZXRMaW5rKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG5cdFx0aGVpZ2h0OiAnODUlJyxcblx0XHRwYWRkaW5nOiAnMXB4IDNweCcsXG5cdH07XG5cblx0Y29uc3QgJHBvcnRsZXRMaW5rID0gJChwb3J0bGV0TGluaykuZmluZCgnYScpO1xuXHQkcG9ydGxldExpbmsuZW1wdHkoKS5hcHBlbmQoXG5cdFx0PGRpdj5cblx0XHRcdDxzcGFuXG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0Li4uc3R5bGUsXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJyNkM2UzZjQnLFxuXHRcdFx0XHRcdGNvbG9yOiAnIzAwMCcsXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdHsn5rGJJ31cblx0XHRcdDwvc3Bhbj5cblx0XHRcdDxzcGFuXG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0Li4uc3R5bGUsXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJyNlOWU5ZTknLFxuXHRcdFx0XHRcdGNvbG9yOiAnIzQzNDM0MycsXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdHsn5ryiJ31cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0KTtcblxuXHRyZXR1cm4gJHBvcnRsZXRMaW5rO1xufTtcblxuZXhwb3J0IHt2ZWN0b3JJbml0LCB2ZWN0b3JBZGRJdGVtfTtcbiIsICJpbXBvcnQge0lTX1ZFQ1RPUiwgUE9SVExFVF9JRH0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0Vmlld2VyLCByZXNldEFsbFZpZXdlcn0gZnJvbSAnLi9tb2R1bGVzL3ZpZXdlcic7XG5pbXBvcnQge3ZlY3RvckFkZEl0ZW0sIHZlY3RvckluaXR9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmVjdG9yJztcbmltcG9ydCB7ZmlsdGVyQWx0ZXJlZENsaWNrc30gZnJvbSAnZXh0LmdhZGdldC5GaWx0ZXJBbHRlcmVkQ2xpY2tzJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyJztcblxubGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKCgkY29udGVudCk6IHZvaWQgPT4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkY29udGVudC5wYXJlbnRzKCdib2R5Jyk7XG5cblx0aWYgKCFpc0luaXQpIHtcblx0XHRpc0luaXQgPSB0cnVlO1xuXHRcdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuYXBwZW5kVG8oJGJvZHkpO1xuXHR9XG5cblx0cmVzZXRBbGxWaWV3ZXIoKTtcblxuXHRpZiAoSVNfVkVDVE9SKSB7XG5cdFx0dmVjdG9ySW5pdCgkYm9keSk7XG5cdFx0bXcudXRpbC5oaWRlUG9ydGxldChQT1JUTEVUX0lEKTtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCcubXctaW5kaWNhdG9yW2lkXj1tdy1pbmRpY2F0b3Itbm90ZVRBLV0nKSkge1xuXHRcdGNvbnN0IGhhc2g6IHN0cmluZyA9IGVsZW1lbnQuaWQucmVwbGFjZSgvXm13LWluZGljYXRvci1ub3RlVEEtLywgJycpO1xuXG5cdFx0bGV0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChJU19WRUNUT1IpIHtcblx0XHRcdCRlbGVtZW50LmhpZGUoKTtcblx0XHRcdCRlbGVtZW50ID0gdmVjdG9yQWRkSXRlbSgkYm9keSwgaGFzaCkgPz8gJGVsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0JGVsZW1lbnQub24oXG5cdFx0XHQnY2xpY2snLFxuXHRcdFx0ZmlsdGVyQWx0ZXJlZENsaWNrcygoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGdldFZpZXdlcigkYm9keSwgaGFzaCkub3BlbigpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGVBQXVCQyxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7QUFDdkQsSUFBTUMsVUFBa0JILEdBQUdDLE9BQU9DLElBQUksTUFBTTtBQUM1QyxJQUFNRSxrQkFBaUNKLEdBQUdDLE9BQU9DLElBQUksZUFBZTtBQUVwRSxJQUFNRyxZQUFxQixDQUFDLFVBQVUsYUFBYSxFQUFFQyxTQUFTSCxPQUFPO0FBQ3JFLElBQU1JLGFBQXFCOztBQ0wzQixJQUFBQyxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0FsQixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsb0JBQUEsR0FBbUJGLGtCQUFBRyxVQUFTO01BQzNCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU0wsa0JBQUFHLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsUUFBQSxHQUFPTixrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1HLGVBQWVO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bUI7QUFDbkQsUUFBTTFILFFBQWlDMEgsU0FBU0MsUUFBUSxNQUFNO0FBRTlELE1BQUksQ0FBQ0osUUFBUTtBQUNaQSxhQUFTO0FBQ1R6SCxrQkFBY3NCLFNBQVNELFNBQVNuQixLQUFLO0VBQ3RDO0FBRUFpRyxpQkFBZTtBQUVmLE1BQUl6SyxXQUFXO0FBQ2Q4SyxlQUFXdEcsS0FBSztBQUNoQjdFLE9BQUdxTCxLQUFLb0IsWUFBWWxNLFVBQVU7RUFDL0I7QUFBQSxNQUFBbU0sYUFBQS9FLDJCQUVzQjlDLE1BQU1LLEtBQUsseUNBQXlDLENBQUEsR0FBQXlIO0FBQUEsTUFBQTtBQUExRSxTQUFBRCxXQUFBNUUsRUFBQSxHQUFBLEVBQUE2RSxTQUFBRCxXQUFBM0UsRUFBQSxHQUFBQyxRQUE2RTtBQUFBLFlBQWxFbkcsVUFBQThLLE9BQUF4STtBQUNWLFlBQU1XLE9BQWVqRCxRQUFRK0ssR0FBRzNLLFFBQVEseUJBQXlCLEVBQUU7QUFFbkUsVUFBSWdFLFdBQW1CdkQsRUFBRWIsT0FBTztBQUNoQyxVQUFJeEIsV0FBVztBQUFBLFlBQUF3TTtBQUNkNUcsaUJBQVM2RyxLQUFLO0FBQ2Q3RyxvQkFBQTRHLGlCQUFXbkIsY0FBYzdHLE9BQU9DLElBQUksT0FBQSxRQUFBK0gsbUJBQUEsU0FBQUEsaUJBQUs1RztNQUMxQztBQUVBQSxlQUFTOEcsR0FDUixVQUFBLEdBQ0FaLG1CQUFBYSxxQkFBcUJDLFdBQW1DO0FBQ3ZEQSxjQUFNQyxlQUFlO0FBQ3JCdEksa0JBQVVDLE9BQU9DLElBQUksRUFBRXFJLEtBQUs7TUFDN0IsQ0FBQyxDQUNGO0lBQ0Q7RUFBQSxTQUFBL0UsS0FBQTtBQUFBc0UsZUFBQXJFLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFzRSxlQUFBcEUsRUFBQTtFQUFBO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiV0dfUEFHRV9OQU1FIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfU0tJTiIsICJXR19VU0VSX1ZBUklBTlQiLCAiSVNfVkVDVE9SIiwgImluY2x1ZGVzIiwgIlBPUlRMRVRfSUQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQXBpUmV0cnlGYWlsRXJyb3IiLCAibG9jYWxpemUiLCAiZW4iLCAiTG9hZGluZyIsICJUaXRsZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiRXJyb3IiLCAiZXJyb3JzIiwgImNvbnN0cnVjdG9yIiwgImNvbmNhdCIsICJsZW5ndGgiLCAibmFtZSIsICJ0b0pRdWVyeSIsICJlcnJvckNvdW50IiwgImVsZW1lbnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJyZXBsYWNlIiwgInRvU3RyaW5nIiwgInJlZHVjZSIsICJlcnJvciIsICJpbmRleCIsICJzcGxpdCIsICJhY2N1bXVsYXRvciIsICJsaW5lIiwgIm51bWJlciIsICIkIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAicGFyc2VXaXRoUmV0cnkiLCAiYXJncyIsICJjb3VudCIsICJwcmV2aW91c0Vycm9ycyIsICJEZWZlcnJlZCIsICJyZWplY3QiLCAiZGVmZXJyZWQiLCAicGFyc2UiLCAidGhlbiIsICJyZXNwb25zZSIsICJyZXNvbHZlIiwgImNhdGNoIiwgImNvbnNvbGUiLCAic3RhY2siLCAiU3RyaW5nIiwgIm5ld1Jlc3BvbnNlIiwgIm5ld0Vycm9yIiwgInBhcnNlV2lraXRleHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFzc2VydCIsICJ2YWx1ZSIsICJ2YWx1ZU5hbWUiLCAidmlld2VyTWFwIiwgIk1hcCIsICJpbml0V2luZG93TWFuYWdlciIsICJPTyIsICJ1aSIsICJXaW5kb3dNYW5hZ2VyIiwgIndpbmRvd01hbmFnZXIiLCAiZ2V0Vmlld2VyIiwgIiRib2R5IiwgImhhc2giLCAiaGFzIiwgInN0b3JlZFZpZXdlciIsICIkdGFyZ2V0RWxlbWVudCIsICJmaW5kIiwgIk5vdGVUQVZpZXdlciIsICJQcm9jZXNzRGlhbG9nIiwgImRhdGFJc0xvYWRlZCIsICJleGVjdXRlUHJvbWlzZSIsICIkcmVhbENvbnRlbnQiLCAibGFzdEVycm9yIiwgIm5vdGVUQVBhcnNlVGV4dCIsICJzaXplIiwgImluaXRpYWxpemUiLCAicGFuZWxMYXlvdXQiLCAiUGFuZWxMYXlvdXQiLCAiZXhwYW5kZWQiLCAicGFkZGVkIiwgImFwcGVuZFRvIiwgIiRlbGVtZW50IiwgImdldFNldHVwUHJvY2VzcyIsICJkYXRhIiwgIm5leHQiLCAiZG9FeGVjdXRlV3JhcCIsICJleGVjdXRlQWN0aW9uIiwgImdldEFjdGlvblByb2Nlc3MiLCAiYWN0aW9uIiwgImlzTWFpbkFjdGlvbiIsICJleGVjdXRlIiwgImdldE5vdGVUQVBhcnNlVGV4dCIsICIkbm90ZVRBdGl0bGUiLCAiYWN0dWFsVGl0bGUiLCAid2lraXRleHQiLCAidGl0bGVEZWZlcnJlZCIsICJ0aXRsZUNvbnYiLCAiYXR0ciIsICJ0aXRsZURlc2MiLCAidGl0bGUiLCAidmFyaWFudCIsICJyZXN1bHRIdG1sIiwgIiRtdWx0aVRpdGxlIiwgInBhcnNlSFRNTCIsICJ0ZXh0VmFyaWFudCIsICJ2YXJpYW50VGV4dCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImNoaWxkcmVuIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJ0ZXh0IiwgInRyaW0iLCAidGV4dFZhcmlhbnRBcnJheSIsICJlcnIiLCAiZSIsICJmIiwgIm11bHRpVGl0bGUiLCAiX2kiLCAiX09iamVjdCR2YWx1ZXMiLCAiT2JqZWN0IiwgInZhbHVlcyIsICJ2YXJpYW50cyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJ2YXJpYW50c05hbWUiLCAibWFwIiwgImpvaW4iLCAidGl0bGVDb252ZXJ0ZWQiLCAiJG5vdGVUQWdyb3VwcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICIkbm90ZVRBbG9jYWwiLCAiJG5vdGVUQWxvY2FscyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJsb2NhbERlc2MiLCAibG9jYWxDb252IiwgImRvRXhlY3V0ZSIsICJlbXB0eSIsICJhcHBlbmQiLCAicGFyc2VkSHRtbCIsICJodG1sIiwgIm1ha2VDb2xsYXBzaWJsZSIsICJ1cGRhdGVTaXplIiwgInJlY292ZXJhYmxlIiwgImV4ZWN1dGVEZWZlcnJlZCIsICJhbHdheXMiLCAic3RhdGljIiwgImFjdGlvbnMiLCAibGFiZWwiLCAibXNnIiwgImZsYWdzIiwgInZpZXdlciIsICJhZGRXaW5kb3dzIiwgInNldCIsICJyZXNldEFsbFZpZXdlciIsICJjbGVhciIsICJjbGVhcldpbmRvd3MiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgIiRub3RlVEFUYWIiLCAidmVjdG9ySW5pdCIsICJub3RlVEFUYWIiLCAidXRpbCIsICJhZGRQb3J0bGV0IiwgInJlbW92ZUNsYXNzIiwgImFkZENsYXNzIiwgImFmdGVyIiwgInZlY3RvckFkZEl0ZW0iLCAicG9ydGxldExpbmsiLCAiYWRkUG9ydGxldExpbmsiLCAic3R5bGUiLCAiaGVpZ2h0IiwgInBhZGRpbmciLCAiJHBvcnRsZXRMaW5rIiwgImJhY2tncm91bmQiLCAiY29sb3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImlzSW5pdCIsICJob29rIiwgImFkZCIsICIkY29udGVudCIsICJwYXJlbnRzIiwgImhpZGVQb3J0bGV0IiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImlkIiwgIl92ZWN0b3JBZGRJdGVtIiwgImhpZGUiLCAib24iLCAiZmlsdGVyQWx0ZXJlZENsaWNrcyIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJvcGVuIl0KfQo=
