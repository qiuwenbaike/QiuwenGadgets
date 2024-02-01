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
  const noteTATab = /* @__PURE__ */ import_ext_gadget5.default.createElement("div", {
    className: ["vector-menu", "vector-menu-tabs"],
    id: PORTLET_ID
  }, /* @__PURE__ */ import_ext_gadget5.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget5.default.createElement("ul", null)));
  if (WG_SKIN === "vector-2022") {
    $body.find("#p-associated-pages").after(noteTATab);
  } else {
    noteTATab.classList.add("vector-menu-tabs-legacy");
    $body.find("#p-variants").after(noteTATab);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL0FwaVJldHJ5RmFpbEVycm9yLnRzeCIsICJzcmMvTm90ZVRBL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTm90ZVRBL29wdGlvbnMuanNvbiIsICJzcmMvTm90ZVRBL21vZHVsZXMvYXBpLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9wYXJzZVdpa2l0ZXh0LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy92aWV3ZXIudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL2Fzc2VydC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdFZpZXdNYXAudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9wcm9jZXNzVmVjdG9yLnRzeCIsICJzcmMvTm90ZVRBL05vdGVUQS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5jb25zdCBXR19TS0lOOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCdza2luJyk7XG5jb25zdCBXR19VU0VSX1ZBUklBTlQ6IHN0cmluZyB8IG51bGwgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJWYXJpYW50Jyk7XG5cbmNvbnN0IElTX1ZFQ1RPUjogYm9vbGVhbiA9IFsndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJ10uaW5jbHVkZXMoV0dfU0tJTik7XG5jb25zdCBQT1JUTEVUX0lEOiBzdHJpbmcgPSAncC1ub3RlVEEnO1xuXG5leHBvcnQge0lTX1ZFQ1RPUiwgUE9SVExFVF9JRCwgV0dfUEFHRV9OQU1FLCBXR19TS0lOLCBXR19VU0VSX1ZBUklBTlR9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNsYXNzIEFwaVJldHJ5RmFpbEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRwcml2YXRlIGVycm9yczogc3RyaW5nW107XG5cblx0Y29uc3RydWN0b3IoZXJyb3JzOiBzdHJpbmdbXSkge1xuXHRcdHN1cGVyKGBBcGkgY2FsbHMgZmFpbGVkICR7ZXJyb3JzLmxlbmd0aH0gdGltZShzKSBpbiBhIHJvdy5gKTtcblx0XHR0aGlzLm5hbWUgPSAnQXBpUmV0cnlGYWlsRXJyb3InO1xuXHRcdHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuXHR9XG5cblx0dG9KUXVlcnkoKTogSlF1ZXJ5IHtcblx0XHRjb25zdCBlcnJvckNvdW50OiBudW1iZXIgPSB0aGlzLmVycm9ycy5sZW5ndGg7XG5cdFx0Y29uc3QgZWxlbWVudCA9IChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cblx0XHRcdFx0PHA+e2dldE1lc3NhZ2UoJ0FwaVJldHJ5RmFpbEVycm9yJykucmVwbGFjZSgvXFwkMS9nLCBlcnJvckNvdW50LnRvU3RyaW5nKCkpfTwvcD5cblx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdHt0aGlzLmVycm9ycy5yZWR1Y2UoXG5cdFx0XHRcdFx0XHQoZXJyb3JzLCBlcnJvciwgaW5kZXgpID0+IFtcblx0XHRcdFx0XHRcdFx0Li4uZXJyb3JzLFxuXHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0e2Vycm9yXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVkdWNlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoYWNjdW11bGF0b3IsIGxpbmUsIG51bWJlcikgPT4gWy4uLmFjY3VtdWxhdG9yLCA8cCBrZXk9e251bWJlcn0+e2xpbmV9PC9wPl0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtdIGFzIFJlYWN0LlJlYWN0RWxlbWVudFtdXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L2xpPixcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRbXSBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXVxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvb2w+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXG5cdFx0cmV0dXJuICQoZWxlbWVudCkgYXMgSlF1ZXJ5O1xuXHR9XG59XG5cbmV4cG9ydCB7QXBpUmV0cnlGYWlsRXJyb3J9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBcGlSZXRyeUZhaWxFcnJvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcGkgY2FsbHMgZmFpbGVkICQxIHRpbWUocykgaW4gYSByb3cuIEVycm9yczogJyxcblx0XHRcdCd6aC1oYW5zJzogJ0FwaSDosIPnlKjov57nu63lpLHotKUgJDEg5qyh77yMJDEg5qyh6LCD55So55qE6ZSZ6K+v5YiG5Yir5Li677yaJyxcblx0XHRcdCd6aC1oYW50JzogJ0FwaSDoqr/nlKjpgKPnuozlpLHmlZcgJDEg5qyh77yMJDEg5qyh6Kq/55So55qE6Yyv6Kqk5YiG5Yil54K677yaJyxcblx0XHR9KSxcblx0XHRMb2FkaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yqg6L294oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOi8ieWFpeKApuKApicsXG5cdFx0fSksXG5cdFx0VGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90ZVRBJyxcblx0XHRcdCd6aC1oYW5zJzogJ+Wtl+ivjei9rOaNoicsXG5cdFx0XHQnemgtaGFudCc6ICflrZfoqZ7ovYnmj5snLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjEuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBOb3RlVEEvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxudHlwZSBBcGlQYXJzZSA9IG13LkFwaVsncGFyc2UnXTtcbnR5cGUgQXBpUGFyc2VQYXJhbWV0ZXJzID0gUGFyYW1ldGVyczxBcGlQYXJzZT47XG50eXBlIEFwaVBhcnNlUmVzcG9uc2UgPSBBd2FpdGVkPFJldHVyblR5cGU8QXBpUGFyc2U+PjtcbnR5cGUgQXBpUmVzcG9uc2UgPSBBcGlQYXJzZVJlc3BvbnNlIHwgQXBpUmV0cnlGYWlsRXJyb3I7XG5cbmNvbnN0IHBhcnNlV2l0aFJldHJ5ID0gKFxuXHRhcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMsXG5cdGNvdW50OiBudW1iZXIgPSAzLFxuXHRwcmV2aW91c0Vycm9yczogc3RyaW5nW10gPSBbXVxuKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiA9PiB7XG5cdGlmICghY291bnQpIHtcblx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXRyeUZhaWxFcnJvcj4oKS5yZWplY3QobmV3IEFwaVJldHJ5RmFpbEVycm9yKHByZXZpb3VzRXJyb3JzKSk7XG5cdH1cblxuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0dm9pZCBhcGlcblx0XHQucGFyc2UoLi4uYXJncylcblx0XHQudGhlbigocmVzcG9uc2U6IEFwaVBhcnNlUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yPzogRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG5cdFx0XHRpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnc3RhY2snIGluIGVycm9yKSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBlcnJvci5zdGFjaztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBTdHJpbmcoZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZVdpdGhSZXRyeShhcmdzLCAtLWNvdW50LCBwcmV2aW91c0Vycm9ycylcblx0XHRcdFx0LnRoZW4oKG5ld1Jlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShuZXdSZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgobmV3RXJyb3I/OiBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KG5ld0Vycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIGRlZmVycmVkO1xufTtcblxuY29uc3QgcGFyc2VXaWtpdGV4dCA9ICguLi5hcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+ID0+IHtcblx0cmV0dXJuIHBhcnNlV2l0aFJldHJ5KGFyZ3MpO1xufTtcblxuZXhwb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9O1xuIiwgImltcG9ydCB7dHlwZSBBcGlQYXJzZVJlc3BvbnNlLCB0eXBlIEFwaVJlc3BvbnNlLCBwYXJzZVdpa2l0ZXh0fSBmcm9tICcuL3BhcnNlV2lraXRleHQnO1xuaW1wb3J0IHtXR19QQUdFX05BTUUsIFdHX1VTRVJfVkFSSUFOVH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJy4vdXRpbC9hc3NlcnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt2aWV3ZXJNYXB9IGZyb20gJy4vaW5pdFZpZXdNYXAnO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3QgZ2V0Vmlld2VyID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiwgaGFzaDogc3RyaW5nKTogT08udWkuUHJvY2Vzc0RpYWxvZyA9PiB7XG5cdGlmICh2aWV3ZXJNYXAuaGFzKGhhc2gpKSB7XG5cdFx0Y29uc3Qgc3RvcmVkVmlld2VyID0gdmlld2VyTWFwLmdldChoYXNoKTtcblx0XHRhc3NlcnQoc3RvcmVkVmlld2VyLCAndmlld2VyJyk7XG5cdFx0cmV0dXJuIHN0b3JlZFZpZXdlcjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXRFbGVtZW50OiBKUXVlcnkgPSAkYm9keS5maW5kKGAjbm90ZVRBLSR7aGFzaH1gKTtcblx0aWYgKCEkdGFyZ2V0RWxlbWVudC5sZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYENhbid0IGdldCBFbGVtZW50IFwiI25vdGVUQS0ke2hhc2h9XCIuYCk7XG5cdH1cblxuXHRjbGFzcyBOb3RlVEFWaWV3ZXIgZXh0ZW5kcyBPTy51aS5Qcm9jZXNzRGlhbG9nIHtcblx0XHRwcml2YXRlIGRhdGFJc0xvYWRlZDogYm9vbGVhbjtcblx0XHRwcml2YXRlIGV4ZWN1dGVQcm9taXNlPzogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5kb0V4ZWN1dGU+O1xuXHRcdHByaXZhdGUgJHJlYWxDb250ZW50OiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSAkYm9keTogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXHRcdHByaXZhdGUgc3RhdGljIGxhc3RFcnJvcj86IE9PLnVpLkVycm9yO1xuXHRcdHByaXZhdGUgc3RhdGljIG5vdGVUQVBhcnNlVGV4dDogc3RyaW5nO1xuXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0c3VwZXIoe1xuXHRcdFx0XHRzaXplOiAnbGFyZ2VyJyxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5kYXRhSXNMb2FkZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMuJHJlYWxDb250ZW50ID0gJCg8ZGl2IC8+KSBhcyBKUXVlcnk7XG5cdFx0fVxuXG5cdFx0b3ZlcnJpZGUgaW5pdGlhbGl6ZSgpOiB0aGlzIHtcblx0XHRcdHN1cGVyLmluaXRpYWxpemUoKTtcblxuXHRcdFx0Y29uc3QgcGFuZWxMYXlvdXQ6IE9PLnVpLlBhbmVsTGF5b3V0ID0gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuYXBwZW5kVG8ocGFuZWxMYXlvdXQuJGVsZW1lbnQpO1xuXHRcdFx0cGFuZWxMYXlvdXQuJGVsZW1lbnQuYXBwZW5kVG8odGhpcy4kYm9keSBhcyBKUXVlcnkpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRvdmVycmlkZSBnZXRTZXR1cFByb2Nlc3MoZGF0YTogT08udWkuRGlhbG9nLlNldHVwRGF0YU1hcCk6IE9PLnVpLlByb2Nlc3Mge1xuXHRcdFx0cmV0dXJuIHN1cGVyLmdldFNldHVwUHJvY2VzcyhkYXRhKS5uZXh0KCgpID0+IHtcblx0XHRcdFx0dm9pZCB0aGlzLmRvRXhlY3V0ZVdyYXAoKTtcblx0XHRcdFx0dm9pZCB0aGlzLmV4ZWN1dGVBY3Rpb24oJ21haW4nKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdG92ZXJyaWRlIGdldEFjdGlvblByb2Nlc3MoYWN0aW9uPzogc3RyaW5nKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRjb25zdCBpc01haW5BY3Rpb246IGJvb2xlYW4gPSBhY3Rpb24gPT09ICdtYWluJztcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHN1cGVyXG5cdFx0XHRcdFx0LmdldEFjdGlvblByb2Nlc3MoYWN0aW9uKVxuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM3MDMwXG5cdFx0XHRcdFx0Lm5leHQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGlzTWFpbkFjdGlvbikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5kb0V4ZWN1dGVXcmFwKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQubmV4dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoaXNNYWluQWN0aW9uICYmIE5vdGVUQVZpZXdlci5sYXN0RXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIE5vdGVUQVZpZXdlci5sYXN0RXJyb3I7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gc3VwZXIuZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24pLmV4ZWN1dGUoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRzdGF0aWMgZ2V0Tm90ZVRBUGFyc2VUZXh0KCk6IEpRdWVyeS5EZWZlcnJlZDxBcGlSZXNwb25zZT4ge1xuXHRcdFx0aWYgKE5vdGVUQVZpZXdlci5ub3RlVEFQYXJzZVRleHQpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQ8c3RyaW5nPigpLnJlc29sdmUoTm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0ICRub3RlVEF0aXRsZTogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS10aXRsZScpO1xuXHRcdFx0Y29uc3QgYWN0dWFsVGl0bGU6IHN0cmluZyA9IFdHX1BBR0VfTkFNRS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdFx0XHRjb25zdCB0aXRsZURlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblxuXHRcdFx0aWYgKCRub3RlVEF0aXRsZS5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgdGl0bGVDb252OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkbm90ZVRBdGl0bGUuYXR0cignZGF0YS1ub3RldGEtY29kZScpO1xuXHRcdFx0XHRhc3NlcnQodGl0bGVDb252LCAndGl0bGVDb252Jyk7XG5cblx0XHRcdFx0bGV0IHRpdGxlRGVzYzogc3RyaW5nIHwgdW5kZWZpbmVkID0gJG5vdGVUQXRpdGxlLmF0dHIoJ2RhdGEtbm90ZXRhLWRlc2MnKTtcblx0XHRcdFx0aWYgKHRpdGxlRGVzYykge1xuXHRcdFx0XHRcdHRpdGxlRGVzYyA9IGDvvIgke3RpdGxlRGVzY33vvIlgO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRpdGxlRGVzYyA9ICcnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2lraXRleHQgKz0gYDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj57e2VkaXR8JHthY3R1YWxUaXRsZX18c2VjdGlvbj0wfX08L3NwYW4+XFxuYDtcblx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paH5L2/55SoW1tIZWxwOuS4reaWh+e7tOWfuueZvuenkeeahOe5geeugOOAgeWcsOWMuuivjeWkhOeQhiPmop3nm67mqJnpoYx85qCH6aKY5omL5bel6L2s5o2iXV1cXG4nO1xuXHRcdFx0XHR3aWtpdGV4dCArPSBgKiDovazmjaLmoIfpopjkuLrvvJote0R8JHt0aXRsZUNvbnZ9fS0ke3RpdGxlRGVzY31cXG5gO1xuXHRcdFx0XHR3aWtpdGV4dCArPSBgKiDlrp7pmYXmoIfpopjkuLrvvJote1J8JHthY3R1YWxUaXRsZX19Le+8m+W9k+WJjeaYvuekuuS4uu+8mi17fCR7dGl0bGVDb252fX0tXFxuYDtcblxuXHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFyc2VXaWtpdGV4dChge3tub3RlVEEvbXVsdGl0aXRsZXwke2FjdHVhbFRpdGxlfX19YCwge1xuXHRcdFx0XHRcdHRpdGxlOiBhY3R1YWxUaXRsZSxcblx0XHRcdFx0XHR2YXJpYW50OiAnemgnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKChyZXN1bHRIdG1sKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCAkbXVsdGlUaXRsZTogSlF1ZXJ5ID0gJCgkLnBhcnNlSFRNTChyZXN1bHRIdG1sIGFzIEFwaVBhcnNlUmVzcG9uc2UpKS5maW5kKFxuXHRcdFx0XHRcdFx0XHQnLm5vdGVUQS1tdWx0aXRpdGxlJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGlmICgkbXVsdGlUaXRsZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paHW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzmoIfpopjlj6/og73nu4/ov4fovazmjaJdXVxcbiog6L2s5o2i5qCH6aKY5Li677yaJztcblxuXHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0VmFyaWFudDogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRUZXh0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudWxsPiA9IHt9O1xuXG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbXVsdGlUaXRsZS5jaGlsZHJlbigpKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtbXVsdGl0aXRsZS12YXJpYW50Jyk7XG5cdFx0XHRcdFx0XHRcdFx0YXNzZXJ0KHZhcmlhbnQsICd2YXJpYW50Jyk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0OiBzdHJpbmcgPSAkZWxlbWVudC50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRUZXh0W3ZhcmlhbnRdID0gdGV4dDtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHRWYXJpYW50QXJyYXk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gdGV4dFZhcmlhbnRbdGV4dF07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRleHRWYXJpYW50QXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHRWYXJpYW50QXJyYXlbdGV4dFZhcmlhbnRBcnJheS5sZW5ndGhdID0gdmFyaWFudDtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dFZhcmlhbnRbdGV4dF0gPSBbdmFyaWFudF07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbXVsdGlUaXRsZTogc3RyaW5nW10gPSBbXTtcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCB0ZXh0IG9mIE9iamVjdC52YWx1ZXModmFyaWFudFRleHQpKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRleHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IHRleHRWYXJpYW50W3RleHRdO1xuXHRcdFx0XHRcdFx0XHRcdGlmICghdmFyaWFudHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiB2YXJpYW50cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudFRleHRbdmFyaWFudF0gPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzTmFtZTogc3RyaW5nID0gdmFyaWFudHNcblx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKHZhcmlhbnQ6IHN0cmluZyk6IHN0cmluZyA9PiBgLXtSfHt7TWVkaWFXaWtpOlZhcmlhbnRuYW1lLSR7dmFyaWFudH19fX0tYClcblx0XHRcdFx0XHRcdFx0XHRcdC5qb2luKCfjgIEnKTtcblx0XHRcdFx0XHRcdFx0XHRtdWx0aVRpdGxlW211bHRpVGl0bGUubGVuZ3RoXSA9IGAke3ZhcmlhbnRzTmFtZX3vvJote1J8JHt0ZXh0fX0tYDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBtdWx0aVRpdGxlLmpvaW4oJ++8mycpO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlQ29udmVydGVkID0gdmFyaWFudFRleHRbV0dfVVNFUl9WQVJJQU5UIGFzIHN0cmluZ107XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGBcXG4qIOWunumZheagh+mimOS4uu+8mi17Unwke2FjdHVhbFRpdGxlfX0t77yb5b2T5YmN5pi+56S65Li677yaLXtSfCR7dGl0bGVDb252ZXJ0ZWR9fS1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0XHRcdHRpdGxlRGVmZXJyZWRcblx0XHRcdFx0LnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGNvbnN0ICRub3RlVEFncm91cHM6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtZ3JvdXAgPiAqW2RhdGEtbm90ZXRhLWdyb3VwXScpO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbm90ZVRBZ3JvdXBzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRcdFx0XHRcdHN3aXRjaCAoJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAtc291cmNlJykpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAndGVtcGxhdGUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGB7e0NHcm91cC8keyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdtb2R1bGUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGB7eyNpbnZva2U6Q0dyb3VwVmlld2VyfGRpYWxvZ3wkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdub25lJzpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgOyDmnKzmlofkvb/nlKjnmoTlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCd5bCa5pyq5Yib5bu6XFxuYDtcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgKiB7e2VkaXR8TW9kdWxlOkNHcm91cC8keyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fOWIm+W7uuWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDsg5pyq55+l5YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAneadpea6kOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAtc291cmNlJyl94oCdXFxuYDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCAkbm90ZVRBbG9jYWw6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtbG9jYWwnKTtcblx0XHRcdFx0XHRpZiAoJG5vdGVUQWxvY2FsLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj57e2VkaXR8JHthY3R1YWxUaXRsZX18c2VjdGlvbj0wfX08L3NwYW4+XFxuYDtcblx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICc7IOacrOaWh+S9v+eUqFtbSGVscDrlrZfor43ovazmjaLlpITnkIZ85YWo5paH5omL5bel6L2s5o2iXV1cXG4nO1xuXG5cdFx0XHRcdFx0XHRjb25zdCAkbm90ZVRBbG9jYWxzID0gJG5vdGVUQWxvY2FsLmNoaWxkcmVuKCcqW2RhdGEtbm90ZXRhLWNvZGVdJyk7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJG5vdGVUQWxvY2Fscykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblxuXHRcdFx0XHRcdFx0XHRsZXQgbG9jYWxEZXNjOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1kZXNjJyk7XG5cdFx0XHRcdFx0XHRcdGlmIChsb2NhbERlc2MpIHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhbERlc2MgPSBg77yIJHtsb2NhbERlc2N977yJYDtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhbERlc2MgPSAnJztcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGxvY2FsQ29udjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtY29kZScpO1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgKiAte0R8JHtsb2NhbENvbnZ9fS0ke2xvY2FsRGVzY33lvZPliY3mmL7npLrkuLrvvJoteyR7bG9jYWxDb252fX0tXFxuYDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR3aWtpdGV4dCArPSAne3tub3RlVEEvZm9vdGVyfX1cXG4nO1xuXG5cdFx0XHRcdFx0Tm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCA9IHdpa2l0ZXh0O1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZSh3aWtpdGV4dCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH1cblxuXHRcdGRvRXhlY3V0ZSgpIHtcblx0XHRcdGlmICh0aGlzLmRhdGFJc0xvYWRlZCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKS5yZXNvbHZlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmVtcHR5KCkuYXBwZW5kKDxwPntnZXRNZXNzYWdlKCdMb2FkaW5nJyl9PC9wPik7XG5cblx0XHRcdHJldHVybiBOb3RlVEFWaWV3ZXIuZ2V0Tm90ZVRBUGFyc2VUZXh0KClcblx0XHRcdFx0LnRoZW4oKHdpa2l0ZXh0OiBBcGlSZXNwb25zZSkgPT5cblx0XHRcdFx0XHRwYXJzZVdpa2l0ZXh0KHdpa2l0ZXh0IGFzIEFwaVBhcnNlUmVzcG9uc2UsIHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnVGVtcGxhdGU6Q0dyb3VwLy0nLFxuXHRcdFx0XHRcdFx0dmFyaWFudDogV0dfVVNFUl9WQVJJQU5UIGFzIHN0cmluZyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC50aGVuKChwYXJzZWRIdG1sOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZGF0YUlzTG9hZGVkID0gdHJ1ZTtcblxuXHRcdFx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmVtcHR5KCkuaHRtbChwYXJzZWRIdG1sIGFzIEFwaVBhcnNlUmVzcG9uc2UpO1xuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmZpbmQoJy5tdy1jb2xsYXBzaWJsZScpIGFzIEpRdWVyeSAmIHttYWtlQ29sbGFwc2libGU6ICgpID0+IEpRdWVyeX1cblx0XHRcdFx0XHQpLm1ha2VDb2xsYXBzaWJsZSgpO1xuXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVTaXplKCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yIHwgRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBBcGlSZXRyeUZhaWxFcnJvcikge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE9PLnVpLkVycm9yKGVycm9yLnRvSlF1ZXJ5KCksIHtcblx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE9PLnVpLkVycm9yKFN0cmluZyhlcnJvciksIHtcblx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRkb0V4ZWN1dGVXcmFwKCkge1xuXHRcdFx0aWYgKHRoaXMuZXhlY3V0ZVByb21pc2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmV4ZWN1dGVQcm9taXNlID0gdGhpcy5kb0V4ZWN1dGUoKTtcblx0XHRcdFx0ZGVsZXRlIE5vdGVUQVZpZXdlci5sYXN0RXJyb3I7XG5cblx0XHRcdFx0Y29uc3QgZXhlY3V0ZURlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblx0XHRcdFx0dm9pZCAodGhpcy5leGVjdXRlUHJvbWlzZSBhcyBKUXVlcnkuUHJvbWlzZTxBcGlSZXNwb25zZT4pXG5cdFx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCBleGVjdXRlRGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yOiBFcnJvciB8IE9PLnVpLkVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBPTy51aS5FcnJvcikge1xuXHRcdFx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubGFzdEVycm9yID0gZXJyb3I7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2b2lkIGV4ZWN1dGVEZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFsd2F5cygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5leGVjdXRlUHJvbWlzZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gZXhlY3V0ZURlZmVycmVkO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cdFx0XHR2b2lkICh0aGlzLmV4ZWN1dGVQcm9taXNlIGFzIEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPilcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEVycm9yIHwgT08udWkuRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBPTy51aS5FcnJvcikge1xuXHRcdFx0XHRcdFx0Tm90ZVRBVmlld2VyLmxhc3RFcnJvciA9IGVycm9yO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5leGVjdXRlUHJvbWlzZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9XG5cdH1cblxuXHRpZiAoIU5vdGVUQVZpZXdlci5zdGF0aWMgfHwgTm90ZVRBVmlld2VyLnN0YXRpYyA9PT0gT08udWkuUHJvY2Vzc0RpYWxvZy5zdGF0aWMpIHtcblx0XHROb3RlVEFWaWV3ZXIuc3RhdGljID0ge1xuXHRcdFx0Li4uT08udWkuUHJvY2Vzc0RpYWxvZy5zdGF0aWMsXG5cdFx0fTtcblx0fVxuXG5cdE5vdGVUQVZpZXdlci5zdGF0aWMubmFtZSA9IGBOb3RlVEFMb2FkZXItJHtoYXNofWA7XG5cdE5vdGVUQVZpZXdlci5zdGF0aWMudGl0bGUgPSBnZXRNZXNzYWdlKCdUaXRsZScpO1xuXHROb3RlVEFWaWV3ZXIuc3RhdGljLmFjdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0bGFiZWw6IG13Lm1zZygnb291aS1kaWFsb2ctcHJvY2Vzcy1kaXNtaXNzJyksXG5cdFx0XHRmbGFnczogJ3NhZmUnLFxuXHRcdH0sXG5cdF07XG5cblx0Y29uc3Qgdmlld2VyOiBPTy51aS5Qcm9jZXNzRGlhbG9nID0gbmV3IE5vdGVUQVZpZXdlcigpO1xuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW3ZpZXdlcl0pO1xuXHR2aWV3ZXJNYXAuc2V0KGhhc2gsIHZpZXdlcik7XG5cblx0cmV0dXJuIHZpZXdlcjtcbn07XG5cbmNvbnN0IHJlc2V0QWxsVmlld2VyID0gKCk6IHZvaWQgPT4ge1xuXHR2aWV3ZXJNYXAuY2xlYXIoKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xufTtcblxuZXhwb3J0IHtnZXRWaWV3ZXIsIHJlc2V0QWxsVmlld2VyfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZVxuZnVuY3Rpb24gYXNzZXJ0KHZhbHVlOiBzdHJpbmcgfCBPTy51aS5Qcm9jZXNzRGlhbG9nIHwgdW5kZWZpbmVkLCB2YWx1ZU5hbWU6IHN0cmluZyk6IGFzc2VydHMgdmFsdWUge1xuXHRpZiAoIXZhbHVlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBBc3NlcnQgRmFpbCwgJHt2YWx1ZU5hbWV9ID09IG51bGwuYCk7XG5cdH1cbn1cblxuZXhwb3J0IHthc3NlcnR9O1xuIiwgImNvbnN0IHZpZXdlck1hcDogTWFwPHN0cmluZywgT08udWkuUHJvY2Vzc0RpYWxvZz4gPSBuZXcgTWFwPHN0cmluZywgT08udWkuUHJvY2Vzc0RpYWxvZz4oKTtcblxuZXhwb3J0IHt2aWV3ZXJNYXB9O1xuIiwgImNvbnN0IGluaXRXaW5kb3dNYW5hZ2VyID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIgPT4ge1xuXHRyZXR1cm4gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcbn07XG5cbmNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXG5leHBvcnQge3dpbmRvd01hbmFnZXJ9O1xuIiwgImltcG9ydCB7UE9SVExFVF9JRCwgV0dfU0tJTn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbmxldCAkbm90ZVRBVGFiOiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5jb25zdCB2ZWN0b3JJbml0ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAoJG5vdGVUQVRhYikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy9cblx0LyoqXG5cdCAqIEB0b2RvIHJlcGxhY2Ugd2l0aCBgbXcudXRpbC5hZGRQb3J0bGV0YCBhZnRlciB1cGdyYWRlIHRvIE1lZGlhV2lraSAxLjQxK1xuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCBub3RlVEFUYWI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldChQT1JUTEVUX0lEKTtcblx0ICogaWYgKCFub3RlVEFUYWIpIHtcblx0ICogICAgIHJldHVybjtcblx0ICogfVxuXHQgKiAkbm90ZVRBVGFiID0gJChub3RlVEFUYWIpO1xuXHQgKiAkbm90ZVRBVGFiLnJlbW92ZUNsYXNzKGBtdy1wb3J0bGV0LSR7UE9SVExFVF9JRH1gKS5hZGRDbGFzcyhbYG13LXBvcnRsZXQtJHtQT1JUTEVUX0lELnJlcGxhY2UoJ3AtJywgJycpfWAsICd2ZWN0b3ItbWVudS10YWJzJ10pO1xuXHQgKi9cblx0Y29uc3Qgbm90ZVRBVGFiID0gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtbJ3ZlY3Rvci1tZW51JywgJ3ZlY3Rvci1tZW51LXRhYnMnXX0gaWQ9e1BPUlRMRVRfSUR9PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHVsIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcblx0Ly8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cdGlmIChXR19TS0lOID09PSAndmVjdG9yLTIwMjInKSB7XG5cdFx0JGJvZHkuZmluZCgnI3AtYXNzb2NpYXRlZC1wYWdlcycpLmFmdGVyKG5vdGVUQVRhYik7XG5cdH0gZWxzZSB7XG5cdFx0bm90ZVRBVGFiLmNsYXNzTGlzdC5hZGQoJ3ZlY3Rvci1tZW51LXRhYnMtbGVnYWN5Jyk7XG5cdFx0JGJvZHkuZmluZCgnI3AtdmFyaWFudHMnKS5hZnRlcihub3RlVEFUYWIpO1xuXHR9XG59O1xuXG5jb25zdCB2ZWN0b3JBZGRJdGVtID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiwgaGFzaDogc3RyaW5nKTogSlF1ZXJ5IHwgdW5kZWZpbmVkID0+IHtcblx0dmVjdG9ySW5pdCgkYm9keSk7XG5cblx0Y29uc3QgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhQT1JUTEVUX0lELCAnIycsICfmsYkv5ryiJywgYGNhLW5vdGVUQS0ke2hhc2h9YCk7XG5cdGlmICghcG9ydGxldExpbmspIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcblx0XHRoZWlnaHQ6ICc4NSUnLFxuXHRcdHBhZGRpbmc6ICcxcHggM3B4Jyxcblx0fTtcblxuXHRjb25zdCAkcG9ydGxldExpbmsgPSAkKHBvcnRsZXRMaW5rKS5maW5kKCdhJyk7XG5cdCRwb3J0bGV0TGluay5lbXB0eSgpLmFwcGVuZChcblx0XHQ8ZGl2PlxuXHRcdFx0PHNwYW5cblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHQuLi5zdHlsZSxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2QzZTNmNCcsXG5cdFx0XHRcdFx0Y29sb3I6ICcjMDAwJyxcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0eyfmsYknfVxuXHRcdFx0PC9zcGFuPlxuXHRcdFx0PHNwYW5cblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHQuLi5zdHlsZSxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2U5ZTllOScsXG5cdFx0XHRcdFx0Y29sb3I6ICcjNDM0MzQzJyxcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0eyfmvKInfVxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQpO1xuXG5cdHJldHVybiAkcG9ydGxldExpbms7XG59O1xuXG5leHBvcnQge3ZlY3RvckluaXQsIHZlY3RvckFkZEl0ZW19O1xuIiwgImltcG9ydCB7SVNfVkVDVE9SLCBQT1JUTEVUX0lEfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRWaWV3ZXIsIHJlc2V0QWxsVmlld2VyfSBmcm9tICcuL21vZHVsZXMvdmlld2VyJztcbmltcG9ydCB7dmVjdG9yQWRkSXRlbSwgdmVjdG9ySW5pdH0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWZWN0b3InO1xuaW1wb3J0IHtmaWx0ZXJBbHRlcmVkQ2xpY2tzfSBmcm9tICdleHQuZ2FkZ2V0LkZpbHRlckFsdGVyZWRDbGlja3MnO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXInO1xuXG5sZXQgaXNJbml0OiBib29sZWFuID0gZmFsc2U7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICRjb250ZW50LnBhcmVudHMoJ2JvZHknKTtcblxuXHRpZiAoIWlzSW5pdCkge1xuXHRcdGlzSW5pdCA9IHRydWU7XG5cdFx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cdH1cblxuXHRyZXNldEFsbFZpZXdlcigpO1xuXG5cdGlmIChJU19WRUNUT1IpIHtcblx0XHR2ZWN0b3JJbml0KCRib2R5KTtcblx0XHRtdy51dGlsLmhpZGVQb3J0bGV0KFBPUlRMRVRfSUQpO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoJy5tdy1pbmRpY2F0b3JbaWRePW13LWluZGljYXRvci1ub3RlVEEtXScpKSB7XG5cdFx0Y29uc3QgaGFzaDogc3RyaW5nID0gZWxlbWVudC5pZC5yZXBsYWNlKC9ebXctaW5kaWNhdG9yLW5vdGVUQS0vLCAnJyk7XG5cblx0XHRsZXQgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKElTX1ZFQ1RPUikge1xuXHRcdFx0JGVsZW1lbnQuaGlkZSgpO1xuXHRcdFx0JGVsZW1lbnQgPSB2ZWN0b3JBZGRJdGVtKCRib2R5LCBoYXNoKSA/PyAkZWxlbWVudDtcblx0XHR9XG5cblx0XHQkZWxlbWVudC5vbihcblx0XHRcdCdjbGljaycsXG5cdFx0XHRmaWx0ZXJBbHRlcmVkQ2xpY2tzKChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Z2V0Vmlld2VyKCRib2R5LCBoYXNoKS5vcGVuKCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZUFBdUJDLEdBQUdDLE9BQU9DLElBQUksWUFBWTtBQUN2RCxJQUFNQyxVQUFrQkgsR0FBR0MsT0FBT0MsSUFBSSxNQUFNO0FBQzVDLElBQU1FLGtCQUFpQ0osR0FBR0MsT0FBT0MsSUFBSSxlQUFlO0FBRXBFLElBQU1HLFlBQXFCLENBQUMsVUFBVSxhQUFhLEVBQUVDLFNBQVNILE9BQU87QUFDckUsSUFBTUksYUFBcUI7O0FDTDNCLElBQUFDLHFCQUFrQkMsUUFBQUMs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VixtQkFBQVcscUJBQXFCQyxXQUFtQztBQUN2REEsY0FBTUMsZUFBZTtBQUNyQnBJLGtCQUFVQyxPQUFPQyxJQUFJLEVBQUVtSSxLQUFLO01BQzdCLENBQUMsQ0FDRjtJQUNEO0VBQUEsU0FBQTdFLEtBQUE7QUFBQXFFLGVBQUFwRSxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBcUUsZUFBQW5FLEVBQUE7RUFBQTtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbIldHX1BBR0VfTkFNRSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1NLSU4iLCAiV0dfVVNFUl9WQVJJQU5UIiwgIklTX1ZFQ1RPUiIsICJpbmNsdWRlcyIsICJQT1JUTEVUX0lEIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFwaVJldHJ5RmFpbEVycm9yIiwgImxvY2FsaXplIiwgImVuIiwgIkxvYWRpbmciLCAiVGl0bGUiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkVycm9yIiwgImVycm9ycyIsICJjb25zdHJ1Y3RvciIsICJjb25jYXQiLCAibGVuZ3RoIiwgIm5hbWUiLCAidG9KUXVlcnkiLCAiZXJyb3JDb3VudCIsICJlbGVtZW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicmVwbGFjZSIsICJ0b1N0cmluZyIsICJyZWR1Y2UiLCAiZXJyb3IiLCAiaW5kZXgiLCAic3BsaXQiLCAiYWNjdW11bGF0b3IiLCAibGluZSIsICJudW1iZXIiLCAiJCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcnNlV2l0aFJldHJ5IiwgImFyZ3MiLCAiY291bnQiLCAicHJldmlvdXNFcnJvcnMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgImRlZmVycmVkIiwgInBhcnNlIiwgInRoZW4iLCAicmVzcG9uc2UiLCAicmVzb2x2ZSIsICJjYXRjaCIsICJjb25zb2xlIiwgInN0YWNrIiwgIlN0cmluZyIsICJuZXdSZXNwb25zZSIsICJuZXdFcnJvciIsICJwYXJzZVdpa2l0ZXh0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhc3NlcnQiLCAidmFsdWUiLCAidmFsdWVOYW1lIiwgInZpZXdlck1hcCIsICJNYXAiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAiT08iLCAidWkiLCAiV2luZG93TWFuYWdlciIsICJ3aW5kb3dNYW5hZ2VyIiwgImdldFZpZXdlciIsICIkYm9keSIsICJoYXNoIiwgImhhcyIsICJzdG9yZWRWaWV3ZXIiLCAiJHRhcmdldEVsZW1lbnQiLCAiZmluZCIsICJOb3RlVEFWaWV3ZXIiLCAiUHJvY2Vzc0RpYWxvZyIsICJkYXRhSXNMb2FkZWQiLCAiZXhlY3V0ZVByb21pc2UiLCAiJHJlYWxDb250ZW50IiwgImxhc3RFcnJvciIsICJub3RlVEFQYXJzZVRleHQiLCAic2l6ZSIsICJpbml0aWFsaXplIiwgInBhbmVsTGF5b3V0IiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgInBhZGRlZCIsICJhcHBlbmRUbyIsICIkZWxlbWVudCIsICJnZXRTZXR1cFByb2Nlc3MiLCAiZGF0YSIsICJuZXh0IiwgImRvRXhlY3V0ZVdyYXAiLCAiZXhlY3V0ZUFjdGlvbiIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImFjdGlvbiIsICJpc01haW5BY3Rpb24iLCAiZXhlY3V0ZSIsICJnZXROb3RlVEFQYXJzZVRleHQiLCAiJG5vdGVUQXRpdGxlIiwgImFjdHVhbFRpdGxlIiwgIndpa2l0ZXh0IiwgInRpdGxlRGVmZXJyZWQiLCAidGl0bGVDb252IiwgImF0dHIiLCAidGl0bGVEZXNjIiwgInRpdGxlIiwgInZhcmlhbnQiLCAicmVzdWx0SHRtbCIsICIkbXVsdGlUaXRsZSIsICJwYXJzZUhUTUwiLCAidGV4dFZhcmlhbnQiLCAidmFyaWFudFRleHQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJjaGlsZHJlbiIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAidGV4dCIsICJ0cmltIiwgInRleHRWYXJpYW50QXJyYXkiLCAiZXJyIiwgImUiLCAiZiIsICJtdWx0aVRpdGxlIiwgIl9pIiwgIl9PYmplY3QkdmFsdWVzIiwgIk9iamVjdCIsICJ2YWx1ZXMiLCAidmFyaWFudHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAidmFyaWFudHNOYW1lIiwgIm1hcCIsICJqb2luIiwgInRpdGxlQ29udmVydGVkIiwgIiRub3RlVEFncm91cHMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiJG5vdGVUQWxvY2FsIiwgIiRub3RlVEFsb2NhbHMiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAibG9jYWxEZXNjIiwgImxvY2FsQ29udiIsICJkb0V4ZWN1dGUiLCAiZW1wdHkiLCAiYXBwZW5kIiwgInBhcnNlZEh0bWwiLCAiaHRtbCIsICJtYWtlQ29sbGFwc2libGUiLCAidXBkYXRlU2l6ZSIsICJyZWNvdmVyYWJsZSIsICJleGVjdXRlRGVmZXJyZWQiLCAiYWx3YXlzIiwgInN0YXRpYyIsICJhY3Rpb25zIiwgImxhYmVsIiwgIm1zZyIsICJmbGFncyIsICJ2aWV3ZXIiLCAiYWRkV2luZG93cyIsICJzZXQiLCAicmVzZXRBbGxWaWV3ZXIiLCAiY2xlYXIiLCAiY2xlYXJXaW5kb3dzIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICIkbm90ZVRBVGFiIiwgInZlY3RvckluaXQiLCAibm90ZVRBVGFiIiwgImlkIiwgImFmdGVyIiwgImNsYXNzTGlzdCIsICJhZGQiLCAidmVjdG9yQWRkSXRlbSIsICJwb3J0bGV0TGluayIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgInN0eWxlIiwgImhlaWdodCIsICJwYWRkaW5nIiwgIiRwb3J0bGV0TGluayIsICJiYWNrZ3JvdW5kIiwgImNvbG9yIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJpc0luaXQiLCAiaG9vayIsICIkY29udGVudCIsICJwYXJlbnRzIiwgImhpZGVQb3J0bGV0IiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgIl92ZWN0b3JBZGRJdGVtIiwgImhpZGUiLCAib24iLCAiZmlsdGVyQWx0ZXJlZENsaWNrcyIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJvcGVuIl0KfQo=
