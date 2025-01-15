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
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
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
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
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
            for (var _i = 0, _Object$values = Object.values(variantText); _i < _Object$values.length; _i++) {
              const text = _Object$values[_i];
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
  portletLink.classList.add("ca-noteTA");
  const $portletLink = $(portletLink).addClass(portletClass);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9vcHRpb25zLmpzb24iLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3IudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9hcGkudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3BhcnNlV2lraXRleHQudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3ZpZXdlci50c3giLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvYXNzZXJ0LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pbml0Vmlld01hcC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXIudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2luaXRHbG9iYWxNZXRob2RzLnRzIiwgInNyYy9Ob3RlVEEvTm90ZVRBLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL2dlbmVyYXRlUG9ydGxldExpbmsudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidmVyc2lvblwiOiBcIjEuMFwiLFxuXHRcInBvcnRsZXRDbGFzc1wiOiBcIngtbm90ZVRBLXZpZXdlclwiXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY2xhc3MgQXBpUmV0cnlGYWlsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdHByaXZhdGUgZXJyb3JzOiBzdHJpbmdbXTtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoZXJyb3JzOiBzdHJpbmdbXSkge1xuXHRcdHN1cGVyKGBBcGkgY2FsbHMgZmFpbGVkICR7ZXJyb3JzLmxlbmd0aH0gdGltZShzKSBpbiBhIHJvdy5gKTtcblx0XHR0aGlzLm5hbWUgPSAnQXBpUmV0cnlGYWlsRXJyb3InO1xuXHRcdHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuXHR9XG5cblx0cHVibGljIHRvSlF1ZXJ5KCk6IEpRdWVyeSB7XG5cdFx0Y29uc3QgZXJyb3JDb3VudDogbnVtYmVyID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuXG5cdFx0Y29uc3QgZWxlbWVudCA9IChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cblx0XHRcdFx0PHA+e2dldE1lc3NhZ2UoJ0FwaVJldHJ5RmFpbEVycm9yJykucmVwbGFjZSgvXFwkMS9nLCBlcnJvckNvdW50LnRvU3RyaW5nKCkpfTwvcD5cblx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdHt0aGlzLmVycm9ycy5tYXA8UmVhY3QuUmVhY3RFbGVtZW50PigoZXJyb3IsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdHtlcnJvci5zcGxpdCgnXFxuJykubWFwPFJlYWN0LlJlYWN0RWxlbWVudD4oKGxpbmUsIG51bWJlcikgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxwIGtleT17bnVtYmVyfT57bGluZX08L3A+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9vbD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpIGFzIEpRdWVyeTtcblxuXHRcdHJldHVybiAkZWxlbWVudDtcblx0fVxufVxuXG5leHBvcnQge0FwaVJldHJ5RmFpbEVycm9yfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QXBpUmV0cnlGYWlsRXJyb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXBpIGNhbGxzIGZhaWxlZCAkMSB0aW1lKHMpIGluIGEgcm93LiBFcnJvcnM6ICcsXG5cdFx0XHQnemgtaGFucyc6ICdBcGkg6LCD55So6L+e57ut5aSx6LSlICQxIOasoe+8jCQxIOasoeiwg+eUqOeahOmUmeivr+WIhuWIq+S4uu+8micsXG5cdFx0XHQnemgtaGFudCc6ICdBcGkg6Kq/55So6YCj57qM5aSx5pWXICQxIOasoe+8jCQxIOasoeiqv+eUqOeahOmMr+iqpOWIhuWIpeeCuu+8micsXG5cdFx0fSksXG5cdFx0TG9hZGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWKoOi9veKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjovInlhaXigKbigKYnLFxuXHRcdH0pLFxuXHRcdFRpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05vdGVUQScsXG5cdFx0XHQnemgtaGFucyc6ICflrZfor43ovazmjaInLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2X6Kme6L2J5o+bJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBOb3RlVEEvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxudHlwZSBBcGlQYXJzZSA9IG13LkFwaVsncGFyc2UnXTtcbnR5cGUgQXBpUGFyc2VQYXJhbWV0ZXJzID0gUGFyYW1ldGVyczxBcGlQYXJzZT47XG50eXBlIEFwaVBhcnNlUmVzcG9uc2UgPSBBd2FpdGVkPFJldHVyblR5cGU8QXBpUGFyc2U+PjtcbnR5cGUgQXBpUmVzcG9uc2UgPSBBcGlQYXJzZVJlc3BvbnNlIHwgQXBpUmV0cnlGYWlsRXJyb3I7XG5cbmNvbnN0IHBhcnNlV2l0aFJldHJ5ID0gKFxuXHRhcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMsXG5cdGNvdW50OiBudW1iZXIgPSAzLFxuXHRwcmV2aW91c0Vycm9yczogc3RyaW5nW10gPSBbXVxuKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiA9PiB7XG5cdGlmICghY291bnQpIHtcblx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXRyeUZhaWxFcnJvcj4oKS5yZWplY3QobmV3IEFwaVJldHJ5RmFpbEVycm9yKHByZXZpb3VzRXJyb3JzKSk7XG5cdH1cblxuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0dm9pZCBhcGlcblx0XHQucGFyc2UoLi4uYXJncylcblx0XHQudGhlbigocmVzcG9uc2U6IEFwaVBhcnNlUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yPzogRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG5cdFx0XHRpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnc3RhY2snIGluIGVycm9yKSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBlcnJvci5zdGFjaztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBTdHJpbmcoZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZVdpdGhSZXRyeShhcmdzLCAtLWNvdW50LCBwcmV2aW91c0Vycm9ycylcblx0XHRcdFx0LnRoZW4oKG5ld1Jlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShuZXdSZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgobmV3RXJyb3I/OiBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KG5ld0Vycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIGRlZmVycmVkO1xufTtcblxuY29uc3QgcGFyc2VXaWtpdGV4dCA9ICguLi5hcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+ID0+IHtcblx0cmV0dXJuIHBhcnNlV2l0aFJldHJ5KGFyZ3MpO1xufTtcblxuZXhwb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7dHlwZSBBcGlQYXJzZVJlc3BvbnNlLCB0eXBlIEFwaVJlc3BvbnNlLCBwYXJzZVdpa2l0ZXh0fSBmcm9tICcuL3BhcnNlV2lraXRleHQnO1xuaW1wb3J0IHtBcGlSZXRyeUZhaWxFcnJvcn0gZnJvbSAnLi91dGlsL0FwaVJldHJ5RmFpbEVycm9yJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICcuL3V0aWwvYXNzZXJ0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dmlld2VyTWFwfSBmcm9tICcuL2luaXRWaWV3TWFwJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IGdldFZpZXdlciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4sIGhhc2g6IHN0cmluZyk6IHR5cGVvZiB2aWV3ZXIgPT4ge1xuXHRpZiAodmlld2VyTWFwLmhhcyhoYXNoKSkge1xuXHRcdGNvbnN0IHN0b3JlZFZpZXdlciA9IHZpZXdlck1hcC5nZXQoaGFzaCk7XG5cdFx0YXNzZXJ0KHN0b3JlZFZpZXdlciwgJ3ZpZXdlcicpO1xuXG5cdFx0cmV0dXJuIHN0b3JlZFZpZXdlcjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXRFbGVtZW50OiBKUXVlcnkgPSAkYm9keS5maW5kKGAjbm90ZVRBLSR7aGFzaH1gKTtcblx0aWYgKCEkdGFyZ2V0RWxlbWVudC5sZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYENhbid0IGdldCBFbGVtZW50IFwiI25vdGVUQS0ke2hhc2h9XCIuYCk7XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlTmFtZSwgd2dVc2VyVmFyaWFudH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y2xhc3MgTm90ZVRBVmlld2VyIGV4dGVuZHMgT08udWkuUHJvY2Vzc0RpYWxvZyB7XG5cdFx0cHJpdmF0ZSBkYXRhSXNMb2FkZWQ6IGJvb2xlYW47XG5cdFx0cHJpdmF0ZSBleGVjdXRlUHJvbWlzZT86IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZG9FeGVjdXRlPjtcblx0XHRwcml2YXRlIG11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG5cdFx0cHJpdmF0ZSAkcmVhbENvbnRlbnQ6IEpRdWVyeTtcblx0XHRwcml2YXRlICRib2R5OiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbGFzdEVycm9yPzogT08udWkuRXJyb3I7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbm90ZVRBUGFyc2VUZXh0OiBzdHJpbmc7XG5cblx0XHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcih7XG5cdFx0XHRcdHNpemU6ICdsYXJnZXInLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuZGF0YUlzTG9hZGVkID0gZmFsc2U7XG5cdFx0XHR0aGlzLiRyZWFsQ29udGVudCA9ICQoPGRpdiAvPikgYXMgSlF1ZXJ5O1xuXG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnVwZGF0ZVNpemUuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRyZWFsQ29udGVudC5nZXQoMCkgYXMgSFRNTEVsZW1lbnQsIHtcblx0XHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGluaXRpYWxpemUoKTogdGhpcyB7XG5cdFx0XHRzdXBlci5pbml0aWFsaXplKCk7XG5cblx0XHRcdGNvbnN0IHBhbmVsTGF5b3V0OiBPTy51aS5QYW5lbExheW91dCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmFwcGVuZFRvKHBhbmVsTGF5b3V0LiRlbGVtZW50KTtcblx0XHRcdHBhbmVsTGF5b3V0LiRlbGVtZW50LmFwcGVuZFRvKHRoaXMuJGJvZHkgYXMgSlF1ZXJ5KTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldFNldHVwUHJvY2VzcyhkYXRhOiBPTy51aS5EaWFsb2cuU2V0dXBEYXRhTWFwKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRyZXR1cm4gc3VwZXIuZ2V0U2V0dXBQcm9jZXNzKGRhdGEpLm5leHQoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR2b2lkIHRoaXMuZG9FeGVjdXRlV3JhcCgpO1xuXHRcdFx0XHR2b2lkIHRoaXMuZXhlY3V0ZUFjdGlvbignbWFpbicpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldEFjdGlvblByb2Nlc3MoYWN0aW9uPzogc3RyaW5nKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRjb25zdCBpc01haW5BY3Rpb246IGJvb2xlYW4gPSBhY3Rpb24gPT09ICdtYWluJztcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0c3VwZXJcblx0XHRcdFx0XHQuZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24pXG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzcwMzBcblx0XHRcdFx0XHQubmV4dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoaXNNYWluQWN0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmRvRXhlY3V0ZVdyYXAoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5uZXh0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChpc01haW5BY3Rpb24gJiYgTm90ZVRBVmlld2VyLmxhc3RFcnJvcikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gTm90ZVRBVmlld2VyLmxhc3RFcnJvcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBzdXBlci5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbikuZXhlY3V0ZSgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuXHRcdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBnZXROb3RlVEFQYXJzZVRleHQoKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiB7XG5cdFx0XHRpZiAoTm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZDxzdHJpbmc+KCkucmVzb2x2ZShOb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgJG5vdGVUQXRpdGxlOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLXRpdGxlJyk7XG5cdFx0XHRjb25zdCBhY3R1YWxUaXRsZTogc3RyaW5nID0gd2dQYWdlTmFtZS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdFx0XHRjb25zdCB0aXRsZURlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblxuXHRcdFx0aWYgKCRub3RlVEF0aXRsZS5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgdGl0bGVDb252OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkbm90ZVRBdGl0bGUuYXR0cignZGF0YS1ub3RldGEtY29kZScpO1xuXHRcdFx0XHRhc3NlcnQodGl0bGVDb252LCAndGl0bGVDb252Jyk7XG5cblx0XHRcdFx0bGV0IHRpdGxlRGVzYzogc3RyaW5nIHwgdW5kZWZpbmVkID0gJG5vdGVUQXRpdGxlLmF0dHIoJ2RhdGEtbm90ZXRhLWRlc2MnKTtcblx0XHRcdFx0aWYgKHRpdGxlRGVzYykge1xuXHRcdFx0XHRcdHRpdGxlRGVzYyA9IGDvvIgke3RpdGxlRGVzY33vvIlgO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRpdGxlRGVzYyA9ICcnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2lraXRleHQgKz0gYDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj57e2VkaXR8JHthY3R1YWxUaXRsZX18c2VjdGlvbj0wfX08L3NwYW4+XFxuYDtcblx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paH5L2/55SoW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzmoIfpopjmiYvlt6XovazmjaJdXVxcbic7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIOi9rOaNouagh+mimOS4uu+8mi17RHwke3RpdGxlQ29udn19LSR7dGl0bGVEZXNjfVxcbmA7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIOWunumZheagh+mimOS4uu+8mi17Unwke2FjdHVhbFRpdGxlfX0t77yb5b2T5YmN5pi+56S65Li677yaLXt8JHt0aXRsZUNvbnZ9fS1cXG5gO1xuXG5cdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYXJzZVdpa2l0ZXh0KGB7e25vdGVUQS9tdWx0aXRpdGxlfCR7YWN0dWFsVGl0bGV9fX1gLCB7XG5cdFx0XHRcdFx0dGl0bGU6IGFjdHVhbFRpdGxlLFxuXHRcdFx0XHRcdHZhcmlhbnQ6ICd6aCcsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnRoZW4oKHJlc3VsdEh0bWw6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCAkbXVsdGlUaXRsZTogSlF1ZXJ5ID0gJCgkLnBhcnNlSFRNTChyZXN1bHRIdG1sIGFzIEFwaVBhcnNlUmVzcG9uc2UpKS5maW5kKFxuXHRcdFx0XHRcdFx0XHQnLm5vdGVUQS1tdWx0aXRpdGxlJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGlmICgkbXVsdGlUaXRsZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paHW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzmoIfpopjlj6/og73nu4/ov4fovazmjaJdXVxcbiog6L2s5o2i5qCH6aKY5Li677yaJztcblxuXHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0VmFyaWFudDogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRUZXh0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudWxsPiA9IHt9O1xuXG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbXVsdGlUaXRsZS5jaGlsZHJlbigpKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtbXVsdGl0aXRsZS12YXJpYW50Jyk7XG5cdFx0XHRcdFx0XHRcdFx0YXNzZXJ0KHZhcmlhbnQsICd2YXJpYW50Jyk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0OiBzdHJpbmcgPSAkZWxlbWVudC50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRUZXh0W3ZhcmlhbnRdID0gdGV4dDtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHRWYXJpYW50QXJyYXk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gdGV4dFZhcmlhbnRbdGV4dF07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRleHRWYXJpYW50QXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHRWYXJpYW50QXJyYXlbdGV4dFZhcmlhbnRBcnJheS5sZW5ndGhdID0gdmFyaWFudDtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dFZhcmlhbnRbdGV4dF0gPSBbdmFyaWFudF07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgdGl0bGVDb252ZXJ0ZWQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgPSB2YXJpYW50VGV4dFt3Z1VzZXJWYXJpYW50IGFzIHN0cmluZ107XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbXVsdGlUaXRsZTogc3RyaW5nW10gPSBbXTtcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCB0ZXh0IG9mIE9iamVjdC52YWx1ZXModmFyaWFudFRleHQpKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRleHQgPT09IG51bGwgfHwgdGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50czogc3RyaW5nW10gfCB1bmRlZmluZWQgPSB0ZXh0VmFyaWFudFt0ZXh0XTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXZhcmlhbnRzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRUZXh0W3ZhcmlhbnRdID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50c05hbWU6IHN0cmluZyA9IHZhcmlhbnRzXG5cdFx0XHRcdFx0XHRcdFx0XHQubWFwKCh2YXJpYW50OiBzdHJpbmcpOiBzdHJpbmcgPT4gYC17Unx7e01lZGlhV2lraTpWYXJpYW50bmFtZS0ke3ZhcmlhbnR9fX19LWApXG5cdFx0XHRcdFx0XHRcdFx0XHQuam9pbign44CBJyk7XG5cdFx0XHRcdFx0XHRcdFx0bXVsdGlUaXRsZVttdWx0aVRpdGxlLmxlbmd0aF0gPSBgJHt2YXJpYW50c05hbWV977yaLXtSfCR7dGV4dH19LWA7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBzdWJJdGVtU2VwYXJhdG9yOiBzdHJpbmcgPSAnXFxuKiogJztcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYCR7c3ViSXRlbVNlcGFyYXRvcn0ke211bHRpVGl0bGUuam9pbihzdWJJdGVtU2VwYXJhdG9yKX1gO1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgXFxuKiDlrp7pmYXmoIfpopjkuLrvvJote1J8JHthY3R1YWxUaXRsZX19Le+8m+W9k+WJjeaYvuekuuS4uu+8mi17Unwke3RpdGxlQ29udmVydGVkfX0tXFxuYDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlc29sdmUoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXG5cdFx0XHR0aXRsZURlZmVycmVkXG5cdFx0XHRcdC50aGVuKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRjb25zdCAkbm90ZVRBZ3JvdXBzOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLWdyb3VwID4gKltkYXRhLW5vdGV0YS1ncm91cF0nKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJG5vdGVUQWdyb3Vwcykge1xuXHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKCRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwLXNvdXJjZScpKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ3RlbXBsYXRlJzpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBge3tDR3JvdXAvJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbW9kdWxlJzpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBge3sjaW52b2tlOkNHcm91cFZpZXdlcnxkaWFsb2d8JHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbm9uZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDsg5pys5paH5L2/55So55qE5YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAneWwmuacquWIm+W7ulxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYCoge3tlZGl0fE1vZHVsZTpDR3JvdXAvJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfXzliJvlu7rlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCdfX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA7IOacquefpeWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ3mnaXmupDigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwLXNvdXJjZScpfeKAnVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWxvY2FsOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLWxvY2FsJyk7XG5cdFx0XHRcdFx0aWYgKCRub3RlVEFsb2NhbC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA8c3BhbiBzdHlsZT1cImZsb2F0OnJpZ2h0XCI+e3tlZGl0fCR7YWN0dWFsVGl0bGV9fHNlY3Rpb249MH19PC9zcGFuPlxcbmA7XG5cdFx0XHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlofkvb/nlKhbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOWFqOaWh+aJi+W3pei9rOaNol1dXFxuJztcblxuXHRcdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWxvY2FscyA9ICRub3RlVEFsb2NhbC5jaGlsZHJlbignKltkYXRhLW5vdGV0YS1jb2RlXScpO1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRub3RlVEFsb2NhbHMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdFx0bGV0IGxvY2FsRGVzYzogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZGVzYycpO1xuXHRcdFx0XHRcdFx0XHRpZiAobG9jYWxEZXNjKSB7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYWxEZXNjID0gYO+8iCR7bG9jYWxEZXNjfe+8iWA7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYWxEZXNjID0gJyc7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBsb2NhbENvbnY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWNvZGUnKTtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYCogLXtEfCR7bG9jYWxDb252fX0tJHtsb2NhbERlc2N95b2T5YmN5pi+56S65Li677yaLXske2xvY2FsQ29udn19LVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0d2lraXRleHQgKz0gJ3t7bm90ZVRBL2Zvb3Rlcn19XFxuJztcblxuXHRcdFx0XHRcdE5vdGVUQVZpZXdlci5ub3RlVEFQYXJzZVRleHQgPSB3aWtpdGV4dDtcblxuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZSh3aWtpdGV4dCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZG9FeGVjdXRlKCkge1xuXHRcdFx0aWYgKHRoaXMuZGF0YUlzTG9hZGVkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpLnJlc29sdmUoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuZW1wdHkoKS5hcHBlbmQoPHA+e2dldE1lc3NhZ2UoJ0xvYWRpbmcnKX08L3A+KTtcblxuXHRcdFx0cmV0dXJuIE5vdGVUQVZpZXdlci5nZXROb3RlVEFQYXJzZVRleHQoKVxuXHRcdFx0XHQudGhlbigod2lraXRleHQ6IEFwaVJlc3BvbnNlKSA9PlxuXHRcdFx0XHRcdHBhcnNlV2lraXRleHQod2lraXRleHQgYXMgQXBpUGFyc2VSZXNwb25zZSwge1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdUZW1wbGF0ZTpDR3JvdXAvLScsXG5cdFx0XHRcdFx0XHR2YXJpYW50OiB3Z1VzZXJWYXJpYW50IGFzIHN0cmluZyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC50aGVuKChwYXJzZWRIdG1sOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdHRoaXMuJHJlYWxDb250ZW50XG5cdFx0XHRcdFx0XHQuZW1wdHkoKVxuXHRcdFx0XHRcdFx0Lmh0bWwocGFyc2VkSHRtbCBhcyBBcGlQYXJzZVJlc3BvbnNlKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKGAke09QVElPTlMucG9ydGxldENsYXNzfS1vdXRwdXRgKTtcblxuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmZpbmQoJy5tdy1jb2xsYXBzaWJsZScpIGFzIEpRdWVyeSAmIHttYWtlQ29sbGFwc2libGU6ICgpID0+IEpRdWVyeX1cblx0XHRcdFx0XHQpLm1ha2VDb2xsYXBzaWJsZSgpO1xuXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVTaXplKCk7XG5cdFx0XHRcdFx0dGhpcy5kYXRhSXNMb2FkZWQgPSB0cnVlO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvciB8IEVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgQXBpUmV0cnlGYWlsRXJyb3IpIHtcblx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvb25seS10aHJvdy1lcnJvclxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IE9PLnVpLkVycm9yKGVycm9yLnRvSlF1ZXJ5KCksIHtcblx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9vbmx5LXRocm93LWVycm9yXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgT08udWkuRXJyb3IoU3RyaW5nKGVycm9yKSwge1xuXHRcdFx0XHRcdFx0XHRyZWNvdmVyYWJsZTogZmFsc2UsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZG9FeGVjdXRlV3JhcCgpIHtcblx0XHRcdGlmICh0aGlzLmV4ZWN1dGVQcm9taXNlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5leGVjdXRlUHJvbWlzZSA9IHRoaXMuZG9FeGVjdXRlKCk7XG5cdFx0XHRcdGRlbGV0ZSBOb3RlVEFWaWV3ZXIubGFzdEVycm9yO1xuXG5cdFx0XHRcdGNvbnN0IGV4ZWN1dGVEZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cdFx0XHRcdHZvaWQgKHRoaXMuZXhlY3V0ZVByb21pc2UgYXMgSlF1ZXJ5LlByb21pc2U8QXBpUmVzcG9uc2U+KVxuXHRcdFx0XHRcdC50aGVuKChyZXNwb25zZTogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgZXhlY3V0ZURlZmVycmVkLnJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKChlcnJvcjogRXJyb3IgfCBPTy51aS5FcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgT08udWkuRXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Tm90ZVRBVmlld2VyLmxhc3RFcnJvciA9IGVycm9yO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dm9pZCBleGVjdXRlRGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5hbHdheXMoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZXhlY3V0ZVByb21pc2U7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIGV4ZWN1dGVEZWZlcnJlZDtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXHRcdFx0dm9pZCAodGhpcy5leGVjdXRlUHJvbWlzZSBhcyBKUXVlcnkuUHJvbWlzZTxBcGlSZXNwb25zZT4pXG5cdFx0XHRcdC50aGVuKChyZXNwb25zZTogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycm9yOiBFcnJvciB8IE9PLnVpLkVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgT08udWkuRXJyb3IpIHtcblx0XHRcdFx0XHRcdE5vdGVUQVZpZXdlci5sYXN0RXJyb3IgPSBlcnJvcjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LmFsd2F5cygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZXhlY3V0ZVByb21pc2U7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fVxuXHR9XG5cblx0Tm90ZVRBVmlld2VyLnN0YXRpYyA9IHtcblx0XHQuLi5PTy51aS5Qcm9jZXNzRGlhbG9nLnN0YXRpYyxcblx0fTtcblx0Tm90ZVRBVmlld2VyLnN0YXRpYy5uYW1lID0gYE5vdGVUQVZpZXdlci0ke2hhc2h9YDtcblx0Tm90ZVRBVmlld2VyLnN0YXRpYy50aXRsZSA9IGdldE1lc3NhZ2UoJ1RpdGxlJyk7XG5cdE5vdGVUQVZpZXdlci5zdGF0aWMuYWN0aW9ucyA9IFtcblx0XHR7XG5cdFx0XHRsYWJlbDogbXcubXNnKCdvb3VpLWRpYWxvZy1wcm9jZXNzLWRpc21pc3MnKSxcblx0XHRcdGZsYWdzOiAnc2FmZScsXG5cdFx0fSxcblx0XTtcblxuXHRjb25zdCB2aWV3ZXI6IE5vdGVUQVZpZXdlciA9IG5ldyBOb3RlVEFWaWV3ZXIoKTtcblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFt2aWV3ZXJdKTtcblx0dmlld2VyTWFwLnNldChoYXNoLCB2aWV3ZXIpO1xuXG5cdHJldHVybiB2aWV3ZXI7XG59O1xuXG5jb25zdCByZXNldEFsbFZpZXdlciA9ICgpOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCB2aWV3ZXIgb2Ygdmlld2VyTWFwLnZhbHVlcygpKSB7XG5cdFx0dmlld2VyLmRlc3Ryb3koKTtcblx0fVxuXHR2aWV3ZXJNYXAuY2xlYXIoKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xufTtcblxuZXhwb3J0IHtnZXRWaWV3ZXIsIHJlc2V0QWxsVmlld2VyfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZVxuZnVuY3Rpb24gYXNzZXJ0PFQ+KHZhbHVlOiBUIHwgdW5kZWZpbmVkLCB2YWx1ZU5hbWU6IHN0cmluZyk6IGFzc2VydHMgdmFsdWUge1xuXHRpZiAoIXZhbHVlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBBc3NlcnQgRmFpbCwgJHt2YWx1ZU5hbWV9ID09IGZhbHNlLmApO1xuXHR9XG59XG5cbmV4cG9ydCB7YXNzZXJ0fTtcbiIsICJpbXBvcnQge3R5cGUgZ2V0Vmlld2VyfSBmcm9tICcuL3ZpZXdlcic7XG5cbmNvbnN0IHZpZXdlck1hcCA9IG5ldyBNYXA8c3RyaW5nLCBSZXR1cm5UeXBlPHR5cGVvZiBnZXRWaWV3ZXI+PigpO1xuXG5leHBvcnQge3ZpZXdlck1hcH07XG4iLCAiY29uc3QgaW5pdFdpbmRvd01hbmFnZXIgPSAoKTogT08udWkuV2luZG93TWFuYWdlciA9PiB7XG5cdHJldHVybiBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xufTtcblxuY29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IGluaXRXaW5kb3dNYW5hZ2VyKCk7XG5cbmV4cG9ydCB7d2luZG93TWFuYWdlcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuXG5sZXQgcG9ydGxldElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmNvbnN0IGluaXRHbG9iYWxNZXRob2RzID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHR5cGVvZiBnbG9iYWxNZXRob2RzID0+IHtcblx0Y29uc3QgZ2xvYmFsTWV0aG9kczoge1xuXHRcdGluaXQoKTogdm9pZDtcblx0XHRkZUluaXQoKTogdm9pZDtcblx0fSA9IHtcblx0XHRpbml0KCkge1xuXHRcdFx0LyogZmFrZSAqL1xuXHRcdH0sXG5cdFx0ZGVJbml0KCkge1xuXHRcdFx0LyogZmFrZSAqL1xuXHRcdH0sXG5cdH07XG5cblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChza2luID09PSAndmVjdG9yJykge1xuXHRcdHBvcnRsZXRJZCA9ICdwLW5vdGVUQSc7XG5cblx0XHRsZXQgJG5vdGVUQVRhYjogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXHRcdGdsb2JhbE1ldGhvZHMuaW5pdCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGlmICgkbm90ZVRBVGFiIHx8ICFwb3J0bGV0SWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgbm90ZVRBVGFiOiBIVE1MRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXQocG9ydGxldElkKTtcblx0XHRcdGlmICghbm90ZVRBVGFiKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRub3RlVEFUYWIgPSAkKG5vdGVUQVRhYik7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWF3aWtpL2NsYXNzLWRvY1xuXHRcdFx0JG5vdGVUQVRhYlxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoYG13LXBvcnRsZXQtJHtwb3J0bGV0SWR9YClcblx0XHRcdFx0LmFkZENsYXNzKFtgbXctcG9ydGxldC0ke3BvcnRsZXRJZC5yZXBsYWNlKCdwLScsICcnKX1gLCAndmVjdG9yLW1lbnUtdGFicycsICd2ZWN0b3ItbWVudS10YWJzLWxlZ2FjeSddKTtcblx0XHRcdCRib2R5LmZpbmQoJyNwLXZhcmlhbnRzJykuYWZ0ZXIoJG5vdGVUQVRhYik7XG5cdFx0fTtcblx0XHRnbG9iYWxNZXRob2RzLmRlSW5pdCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGlmICghJG5vdGVUQVRhYikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQkbm90ZVRBVGFiLmZpbmQoJ3VsJykuZW1wdHkoKTtcblx0XHRcdGlmIChwb3J0bGV0SWQpIHtcblx0XHRcdFx0bXcudXRpbC5oaWRlUG9ydGxldChwb3J0bGV0SWQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0gZWxzZSBpZiAoc2tpbiA9PT0gJ3ZlY3Rvci0yMDIyJykge1xuXHRcdHBvcnRsZXRJZCA9ICdwLWFzc29jaWF0ZWQtcGFnZXMnO1xuXG5cdFx0Z2xvYmFsTWV0aG9kcy5kZUluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHQkYm9keS5maW5kKGAuJHtPUFRJT05TLnBvcnRsZXRDbGFzc31gKS5yZW1vdmUoKTtcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdsb2JhbE1ldGhvZHM7XG59O1xuXG5leHBvcnQge3BvcnRsZXRJZCwgaW5pdEdsb2JhbE1ldGhvZHN9O1xuIiwgImltcG9ydCB7Z2V0Vmlld2VyLCByZXNldEFsbFZpZXdlcn0gZnJvbSAnLi9tb2R1bGVzL3ZpZXdlcic7XG5pbXBvcnQge2luaXRHbG9iYWxNZXRob2RzLCBwb3J0bGV0SWR9IGZyb20gJy4vbW9kdWxlcy9pbml0R2xvYmFsTWV0aG9kcyc7XG5pbXBvcnQge2NoZWNrQTExeUNvbmZpcm1LZXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dlbmVyYXRlUG9ydGxldExpbmt9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dlbmVyYXRlUG9ydGxldExpbmsnO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXInO1xuXG5sZXQgaXNJbml0OiBib29sZWFuID0gZmFsc2U7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbm90ZVRBKCRjb250ZW50KTogdm9pZCB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICRjb250ZW50LnBhcmVudHMoJ2JvZHknKTtcblxuXHRpZiAoIWlzSW5pdCkge1xuXHRcdGlzSW5pdCA9IHRydWU7XG5cdFx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cdH1cblxuXHRyZXNldEFsbFZpZXdlcigpO1xuXG5cdGNvbnN0IGdsb2JhbE1ldGhvZHMgPSBpbml0R2xvYmFsTWV0aG9kcygkYm9keSk7XG5cdGdsb2JhbE1ldGhvZHMuZGVJbml0KCk7XG5cdGdsb2JhbE1ldGhvZHMuaW5pdCgpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCcubXctaW5kaWNhdG9yW2lkXj1tdy1pbmRpY2F0b3Itbm90ZVRBLV0nKSkge1xuXHRcdGNvbnN0IGhhc2g6IHN0cmluZyA9IGVsZW1lbnQuaWQucmVwbGFjZSgvXm13LWluZGljYXRvci1ub3RlVEEtLywgJycpO1xuXG5cdFx0bGV0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChwb3J0bGV0SWQpIHtcblx0XHRcdCRlbGVtZW50LmhpZGUoKTtcblxuXHRcdFx0Y29uc3QgJHBvcnRsZXRMaW5rOiBKUXVlcnkgfCB1bmRlZmluZWQgPSBnZW5lcmF0ZVBvcnRsZXRMaW5rKGhhc2gpO1xuXHRcdFx0aWYgKCEkcG9ydGxldExpbmspIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdCRlbGVtZW50ID0gJHBvcnRsZXRMaW5rO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wZW5lckxpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGlmICghY2hlY2tBMTF5Q29uZmlybUtleShldmVudCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Z2V0Vmlld2VyKCRib2R5LCBoYXNoKS5vcGVuKCk7XG5cdFx0fTtcblx0XHQkZWxlbWVudC5vbignY2xpY2snLCBvcGVuZXJMaXN0ZW5lcik7XG5cdFx0JGVsZW1lbnQub24oJ2tleWRvd24nLCBvcGVuZXJMaXN0ZW5lcik7XG5cdH1cbn0pO1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7cG9ydGxldElkfSBmcm9tICcuLi9pbml0R2xvYmFsTWV0aG9kcyc7XG5cbmNvbnN0IGdlbmVyYXRlUG9ydGxldExpbmsgPSAoaGFzaDogc3RyaW5nKTogSlF1ZXJ5IHwgdW5kZWZpbmVkID0+IHtcblx0aWYgKCFwb3J0bGV0SWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0TGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCAn5rGJL+a8oicsIGBjYS1ub3RlVEEtJHtoYXNofWApO1xuXHRpZiAoIXBvcnRsZXRMaW5rKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHBvcnRsZXRMaW5rLmNsYXNzTGlzdC5hZGQoJ2NhLW5vdGVUQScpO1xuXG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5ID0gJChwb3J0bGV0TGluaykuYWRkQ2xhc3MoT1BUSU9OUy5wb3J0bGV0Q2xhc3MpO1xuXHQkcG9ydGxldExpbmtcblx0XHQuZmluZCgnYScpXG5cdFx0LmVtcHR5KClcblx0XHQuYXBwZW5kKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbYCR7T1BUSU9OUy5wb3J0bGV0Q2xhc3N9X19sYWJlbGAsIGAke09QVElPTlMucG9ydGxldENsYXNzfV9fbGFiZWwtaGFuc2BdfT5cblx0XHRcdFx0XHR7J+axiSd9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbYCR7T1BUSU9OUy5wb3J0bGV0Q2xhc3N9X19sYWJlbGAsIGAke09QVElPTlMucG9ydGxldENsYXNzfV9fbGFiZWwtaGFudGBdfT5cblx0XHRcdFx0XHR7J+a8oid9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cblx0cmV0dXJuICRwb3J0bGV0TGluaztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVQb3J0bGV0TGlua307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsVUFBVztBQUNYLElBQUFDLGVBQWdCOztBQ0ZqQixJQUFBQyxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0FsQixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsb0JBQUEsR0FBbUJGLGtCQUFBRyxVQUFTO01BQzNCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU0wsa0JBQUFHLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsUUFBQSxHQUFPTixrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1HLGVBQWVOLGdCQUFnQjtBQUVyQyxJQUFNTyxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRHZCQSxJQUFNUCxvQkFBTixjQUFnQ1EsTUFBTTtFQUM3QkM7RUFFREMsWUFBWUQsUUFBa0I7QUFDcEMsVUFBQSxvQkFBQUUsT0FBMEJGLE9BQU9HLFFBQU0sb0JBQUEsQ0FBb0I7QUFDM0QsU0FBS0MsT0FBTztBQUNaLFNBQUtKLFNBQVNBO0VBQ2Y7RUFFT0ssV0FBbUI7QUFDekIsVUFBTUMsYUFBcUIsS0FBS04sT0FBT0c7QUFFdkMsVUFBTUksVUFDTHJCLG1DQUFBc0IsUUFBQUMsY0FBQyxPQUFBO01BQUlDLFdBQVU7SUFBQSxHQUNkeEIs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QUFELFdBQUFoRixFQUFBLEdBQUEsRUFBQWlGLFNBQUFELFdBQUEvRSxFQUFBLEdBQUFDLFFBQTZFO0FBQUEsWUFBbEUvRyxVQUFBOEwsT0FBQXpKO0FBQ1YsWUFBTVcsT0FBZWhELFFBQVErTCxHQUFHM0wsUUFBUSx5QkFBeUIsRUFBRTtBQUVuRSxVQUFJUSxXQUFtQkMsRUFBRWIsT0FBTztBQUNoQyxVQUFJa0ssV0FBVztBQUNkdEosaUJBQVNvTCxLQUFLO0FBRWQsY0FBTVQsZUFBbUNMLG9CQUFvQmxJLElBQUk7QUFDakUsWUFBSSxDQUFDdUksY0FBYztBQUNsQjtRQUNEO0FBRUEzSyxtQkFBVzJLO01BQ1o7QUFFQSxZQUFNVSxpQkFBa0JDLFdBQXlEO0FBQ2hGLFlBQUksRUFBQSxHQUFDbEIsbUJBQUFtQixxQkFBb0JELEtBQUssR0FBRztBQUNoQztRQUNEO0FBRUFBLGNBQU1FLGVBQWU7QUFDckJ0SixrQkFBVUMsT0FBT0MsSUFBSSxFQUFFcUosS0FBSztNQUM3QjtBQUNBekwsZUFBUzBMLEdBQUcsU0FBU0wsY0FBYztBQUNuQ3JMLGVBQVMwTCxHQUFHLFdBQVdMLGNBQWM7SUFDdEM7RUFBQSxTQUFBOUUsS0FBQTtBQUFBMEUsZUFBQXpFLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUEwRSxlQUFBeEUsRUFBQTtFQUFBO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsidmVyc2lvbiIsICJwb3J0bGV0Q2xhc3MiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQXBpUmV0cnlGYWlsRXJyb3IiLCAibG9jYWxpemUiLCAiZW4iLCAiTG9hZGluZyIsICJUaXRsZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiRXJyb3IiLCAiZXJyb3JzIiwgImNvbnN0cnVjdG9yIiwgImNvbmNhdCIsICJsZW5ndGgiLCAibmFtZSIsICJ0b0pRdWVyeSIsICJlcnJvckNvdW50IiwgImVsZW1lbnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJyZXBsYWNlIiwgInRvU3RyaW5nIiwgIm1hcCIsICJlcnJvciIsICJpbmRleCIsICJzcGxpdCIsICJsaW5lIiwgIm51bWJlciIsICIkZWxlbWVudCIsICIkIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcnNlV2l0aFJldHJ5IiwgImFyZ3MiLCAiY291bnQiLCAicHJldmlvdXNFcnJvcnMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgImRlZmVycmVkIiwgInBhcnNlIiwgInRoZW4iLCAicmVzcG9uc2UiLCAicmVzb2x2ZSIsICJjYXRjaCIsICJjb25zb2xlIiwgInN0YWNrIiwgIlN0cmluZyIsICJuZXdSZXNwb25zZSIsICJuZXdFcnJvciIsICJwYXJzZVdpa2l0ZXh0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhc3NlcnQiLCAidmFsdWUiLCAidmFsdWVOYW1lIiwgInZpZXdlck1hcCIsICJNYXAiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAiT08iLCAidWkiLCAiV2luZG93TWFuYWdlciIsICJ3aW5kb3dNYW5hZ2VyIiwgImdldFZpZXdlciIsICIkYm9keSIsICJoYXNoIiwgImhhcyIsICJzdG9yZWRWaWV3ZXIiLCAiZ2V0IiwgIiR0YXJnZXRFbGVtZW50IiwgImZpbmQiLCAid2dQYWdlTmFtZSIsICJ3Z1VzZXJWYXJpYW50IiwgIm13IiwgImNvbmZpZyIsICJOb3RlVEFWaWV3ZXIiLCAiUHJvY2Vzc0RpYWxvZyIsICJkYXRhSXNMb2FkZWQiLCAiZXhlY3V0ZVByb21pc2UiLCAibXV0YXRpb25PYnNlcnZlciIsICIkcmVhbENvbnRlbnQiLCAibGFzdEVycm9yIiwgIm5vdGVUQVBhcnNlVGV4dCIsICJzaXplIiwgIk11dGF0aW9uT2JzZXJ2ZXIiLCAidXBkYXRlU2l6ZSIsICJiaW5kIiwgIm9ic2VydmUiLCAiY2hpbGRMaXN0IiwgInN1YnRyZWUiLCAiaW5pdGlhbGl6ZSIsICJwYW5lbExheW91dCIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICJwYWRkZWQiLCAiYXBwZW5kVG8iLCAiZ2V0U2V0dXBQcm9jZXNzIiwgImRhdGEiLCAibmV4dCIsICJkb0V4ZWN1dGVXcmFwIiwgImV4ZWN1dGVBY3Rpb24iLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJhY3Rpb24iLCAiaXNNYWluQWN0aW9uIiwgImV4ZWN1dGUiLCAiZGVzdHJveSIsICJkaXNjb25uZWN0IiwgImdldE5vdGVUQVBhcnNlVGV4dCIsICIkbm90ZVRBdGl0bGUiLCAiYWN0dWFsVGl0bGUiLCAid2lraXRleHQiLCAidGl0bGVEZWZlcnJlZCIsICJ0aXRsZUNvbnYiLCAiYXR0ciIsICJ0aXRsZURlc2MiLCAidGl0bGUiLCAidmFyaWFudCIsICJyZXN1bHRIdG1sIiwgIiRtdWx0aVRpdGxlIiwgInBhcnNlSFRNTCIsICJ0ZXh0VmFyaWFudCIsICJ2YXJpYW50VGV4dCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImNoaWxkcmVuIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJ0ZXh0IiwgInRyaW0iLCAidGV4dFZhcmlhbnRBcnJheSIsICJlcnIiLCAiZSIsICJmIiwgInRpdGxlQ29udmVydGVkIiwgIm11bHRpVGl0bGUiLCAiX2kiLCAiX09iamVjdCR2YWx1ZXMiLCAiT2JqZWN0IiwgInZhbHVlcyIsICJ2YXJpYW50cyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJ2YXJpYW50c05hbWUiLCAiam9pbiIsICJzdWJJdGVtU2VwYXJhdG9yIiwgIiRub3RlVEFncm91cHMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiJG5vdGVUQWxvY2FsIiwgIiRub3RlVEFsb2NhbHMiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAibG9jYWxEZXNjIiwgImxvY2FsQ29udiIsICJkb0V4ZWN1dGUiLCAiZW1wdHkiLCAiYXBwZW5kIiwgInBhcnNlZEh0bWwiLCAiaHRtbCIsICJhZGRDbGFzcyIsICJtYWtlQ29sbGFwc2libGUiLCAicmVjb3ZlcmFibGUiLCAiZXhlY3V0ZURlZmVycmVkIiwgImFsd2F5cyIsICJzdGF0aWMiLCAiYWN0aW9ucyIsICJsYWJlbCIsICJtc2ciLCAiZmxhZ3MiLCAidmlld2VyIiwgImFkZFdpbmRvd3MiLCAic2V0IiwgInJlc2V0QWxsVmlld2VyIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImNsZWFyIiwgImNsZWFyV2luZG93cyIsICJwb3J0bGV0SWQiLCAiaW5pdEdsb2JhbE1ldGhvZHMiLCAiZ2xvYmFsTWV0aG9kcyIsICJpbml0IiwgImRlSW5pdCIsICJza2luIiwgIiRub3RlVEFUYWIiLCAibm90ZVRBVGFiIiwgInV0aWwiLCAiYWRkUG9ydGxldCIsICJyZW1vdmVDbGFzcyIsICJhZnRlciIsICJoaWRlUG9ydGxldCIsICJyZW1vdmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJnZW5lcmF0ZVBvcnRsZXRMaW5rIiwgInBvcnRsZXRMaW5rIiwgImFkZFBvcnRsZXRMaW5rIiwgImNsYXNzTGlzdCIsICJhZGQiLCAiJHBvcnRsZXRMaW5rIiwgImlzSW5pdCIsICJob29rIiwgIm5vdGVUQSIsICIkY29udGVudCIsICJwYXJlbnRzIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgImlkIiwgImhpZGUiLCAib3BlbmVyTGlzdGVuZXIiLCAiZXZlbnQiLCAiY2hlY2tBMTF5Q29uZmlybUtleSIsICJwcmV2ZW50RGVmYXVsdCIsICJvcGVuIiwgIm9uIl0KfQo=
