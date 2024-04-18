/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|title=Wikiplus-highlight|license=GPL-3.0-or-later}}'
 *
 * Wikiplus-highlight
 *
 * @base {@link https://github.com/bhsd-harry/Wikiplus-highlight/blob/main/main.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Wikiplus-highlight}
 * @author Bhsd <https://github.com/bhsd-harry>, 机智的小鱼君 <https://github.com/Dragon-Fish>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
 * SPDX-License-Identifier: MIT
 *
 * settings Icon (ltr) from OOjs UI
 *
 * @base {@link https://github.com/wikimedia/oojs-ui/blob/e17952e413cfc00c15cfd861d47463c29062afe7/src/themes/wikimediaui/images/icons/globe.svg}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Wikiplus-highlight/images}
 * @license MIT {@link https://github.com/wikimedia/oojs-ui/blob/master/LICENSE-MIT}
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

// dist/Wikiplus-highlight/Wikiplus-highlight.js
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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
//! src/Wikiplus-highlight/modules/highlight.ts
var highlight_exports = {};
var init_highlight = __esm({
  "src/Wikiplus-highlight/modules/highlight.ts"() {
    "use strict";
    /**
     * @name Wikiplus-highlight Wikiplus编辑器的CodeMirror语法高亮扩展
     * @author Bhsd <https://github.com/bhsd-harry>
     * @license GPL-3.0
     */
    ((_window) => {
      const {
        libs
      } = mw, {
        wphl
      } = libs;
      if (wphl !== null && wphl !== void 0 && wphl.version) {
        return;
      }
      const version = "3.0.7";
      libs["wphl"] = {
        version,
        cmVersion: "2.9",
        ...wphl
      };
      const CDN = "//testingcf.jsdelivr.net", MW_CDN = "npm/@bhsd/codemirror-mediawiki@".concat(libs["wphl"].cmVersion || "latest", "/dist/mw.min.js"), REPO_CDN = "npm/wikiplus-highlight";
      (_window = window).CodeMirror6 || (_window.CodeMirror6 = new Promise((resolve) => {
        const script = document.createElement("script");
        script.addEventListener("load", () => {
          resolve(CodeMirror6);
        });
        script.type = "module";
        script.src = "".concat(CDN, "/").concat(MW_CDN);
        document.head.append(script);
      }));
      const {
        wgPageName: page,
        wgNamespaceNumber: ns,
        wgPageContentModel: contentmodel
      } = mw.config.get();
      const CONTENTMODELS = {
        "sanitized-css": "css",
        wikitext: "mediawiki"
      }, EXTS = {
        css: "css",
        js: "javascript",
        json: "json"
      }, NAMESPACES = {
        828: "lua",
        274: "html"
      };
      const getObject = (key) => {
        return JSON.parse(String(localStorage.getItem(key)));
      };
      const getPageMode = /* @__PURE__ */ function() {
        var _ref = _asyncToGenerator(function* (value) {
          if (typeof _WikiplusPages === "object") {
            const pages = Object.values(_WikiplusPages).filter(({
              sectionCache
            }) => {
              return Object.values(sectionCache).includes(value);
            });
            if (pages.some(({
              title
            }) => {
              return !title.endsWith("/doc");
            })) {
              yield mw.loader.using("mediawiki.Title");
            }
            const modes = new Set(pages.map(({
              title
            }) => {
              var _t$getExtension;
              if (title.endsWith("/doc")) {
                return "template";
              }
              const t = new mw.Title(title), namespace = t.getNamespaceId();
              if (namespace % 2) {
                return "mediawiki";
              }
              const mode = EXTS[((_t$getExtension = t.getExtension()) === null || _t$getExtension === void 0 ? void 0 : _t$getExtension.toLowerCase()) || ""] || NAMESPACES[namespace];
              if (mode) {
                return mode === "javascript" && (namespace === 8 || namespace === 2300) ? "gadget" : mode;
              }
              return namespace === 10 || namespace === 2 ? "template" : "mediawiki";
            }));
            if (modes.size === 1) {
              const [mode] = modes;
              if (mode === "gadget") {
                return ["javascript", 8];
              }
              return mode === "template" ? ["mediawiki", 10] : [mode];
            } else if (modes.size === 2) {
              if (modes.has("javascript") && modes.has("gadget")) {
                return ["javascript"];
              } else if (modes.has("mediawiki") && modes.has("template")) {
                return ["mediawiki"];
              }
            }
          }
          if (ns !== 274 && contentmodel !== "Scribunto" || page.endsWith("/doc")) {
            return [CONTENTMODELS[contentmodel] || contentmodel, contentmodel === "javascript" ? ns : void 0];
          }
          yield mw.loader.using("oojs-ui-windows");
          if (yield OO.ui.confirm(mw.msg("cm-mw-contentmodel"), {
            actions: [{
              label: ns === 274 ? "Widget" : "Lua"
            }, {
              label: "Wikitext",
              action: "accept"
            }]
          })) {
            return ["mediawiki"];
          }
          return [ns === 274 ? "html" : "lua"];
        });
        return function getPageMode2(_x) {
          return _ref.apply(this, arguments);
        };
      }();
      const renderEditor = /* @__PURE__ */ function() {
        var _ref2 = _asyncToGenerator(function* ($target, setting) {
          const cm = yield (yield CodeMirror6).fromTextArea($target[0], ...setting ? ["json"] : yield getPageMode($target.val()));
          cm.view.dom.id = "Wikiplus-CodeMirror";
          document.querySelector("#Wikiplus-Quickedit-Jump > a").href = "#Wikiplus-CodeMirror";
          if (!setting) {
            const settings = getObject("Wikiplus_Settings"), escToExitQuickEdit = settings && (settings["esc_to_exit_quickedit"] || settings["escToExitQuickEdit"]), submit = (
              /** 提交编辑 @return true */
              () => {
                document.querySelector("#Wikiplus-Quickedit-Submit").dispatchEvent(new MouseEvent("click"));
                return true;
              }
            ), submitMinor = (
              /** 提交小编辑 */
              () => {
                document.querySelector("#Wikiplus-Quickedit-MinorEdit").checked = true;
                return submit();
              }
            ), escapeEdit = (
              /** 按下Esc键退出编辑 */
              () => {
                document.querySelector("#Wikiplus-Quickedit-Back").dispatchEvent(new MouseEvent("click"));
                return true;
              }
            );
            cm.extraKeys([{
              key: "Mod-S",
              run: submit
            }, {
              key: "Shift-Mod-S",
              run: submitMinor
            }, ...escToExitQuickEdit === true || escToExitQuickEdit === "true" ? [{
              key: "Esc",
              run: escapeEdit
            }] : []]);
          }
          const oldKey = "Wikiplus-highlight-addons", oldPrefs = getObject(oldKey), mapping = {
            activeLine: "highlightActiveLine",
            trailingspace: "highlightTrailingWhitespace",
            matchBrackets: "bracketMatching",
            closeBrackets: "closeBrackets",
            matchTags: "tagMatching",
            fold: "codeFolding",
            wikiEditor: "wikiEditor",
            escape: "escape",
            contextmenu: "openLinks",
            lint: "lint"
          };
          localStorage.removeItem(oldKey);
          if (oldPrefs) {
            const obj = {};
            var _iterator = _createForOfIteratorHelper(oldPrefs), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                const k = _step.value;
                if (k in mapping) {
                  obj[mapping[k]] = true;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            cm.prefer(obj);
          }
        });
        return function renderEditor2(_x2, _x3) {
          return _ref2.apply(this, arguments);
        };
      }();
      const observer = new MutationObserver((records) => {
        const $editArea = $(records.flatMap(({
          addedNodes
        }) => {
          return [...addedNodes];
        })).find("#Wikiplus-Quickedit, #Wikiplus-Setting-Input");
        if ($editArea.length > 0) {
          void renderEditor($editArea, $editArea.attr("id") === "Wikiplus-Setting-Input");
        }
      });
      observer.observe(document.body, {
        childList: true
      });
      mw.loader.load("".concat(CDN, "/").concat(REPO_CDN, "@").concat(version, "/styles.min.css"), "text/css");
    })();
  }
});
//! src/Wikiplus-highlight/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("Wikiplus-highlight/2.0");
//! src/Wikiplus-highlight/modules/checkDependencies.ts
var checkDependencies = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* () {
    if (!mw.user.options.get("gadget-Wikiplus")) {
      void api.postWithEditToken({
        action: "options",
        change: "gadget-Wikiplus=1"
      });
      yield mw.loader.using("ext.gadget.Wikiplus");
    }
  });
  return function checkDependencies2() {
    return _ref3.apply(this, arguments);
  };
}();
//! src/Wikiplus-highlight/Wikiplus-highlight.ts
(function() {
  var _WikiplusHighlight = _asyncToGenerator(function* () {
    void checkDependencies();
    const {
      wgAction,
      wgIsArticle
    } = mw.config.get();
    if (wgAction !== "view" || !wgIsArticle) {
      return;
    }
    const {
      "visualeditor-enable": isVeEnable
    } = mw.user.options.get();
    if (isVeEnable) {
      yield mw.loader.using("ext.visualEditor.core");
    }
    if (!("ontouchstart" in document)) {
      yield Promise.resolve().then(() => (init_highlight(), highlight_exports));
    }
  });
  function WikiplusHighlight() {
    return _WikiplusHighlight.apply(this, arguments);
  }
  return WikiplusHighlight;
})()();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzLWhpZ2hsaWdodC9tb2R1bGVzL2hpZ2hsaWdodC50cyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L21vZHVsZXMvYXBpLnRzIiwgInNyYy9XaWtpcGx1cy1oaWdobGlnaHQvbW9kdWxlcy9jaGVja0RlcGVuZGVuY2llcy50cyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L1dpa2lwbHVzLWhpZ2hsaWdodC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBAbmFtZSBXaWtpcGx1cy1oaWdobGlnaHQgV2lraXBsdXPnvJbovpHlmajnmoRDb2RlTWlycm9y6K+t5rOV6auY5Lqu5omp5bGVXG4gKiBAYXV0aG9yIEJoc2QgPGh0dHBzOi8vZ2l0aHViLmNvbS9iaHNkLWhhcnJ5PlxuICogQGxpY2Vuc2UgR1BMLTMuMFxuICovXG5cbigoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHtsaWJzfSA9IG13LFxuXHRcdHt3cGhsfSA9IGxpYnM7XG5cdGlmICh3cGhsPy52ZXJzaW9uKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHZlcnNpb24gPSAnMy4wLjcnO1xuXHRsaWJzWyd3cGhsJ10gPSB7dmVyc2lvbiwgY21WZXJzaW9uOiAnMi45JywgLi4ud3BobH07IC8vIOW8gOWni+WKoOi9vVxuXG5cdC8vIOi3r+W+hFxuXHRjb25zdCBDRE4gPSAnLy90ZXN0aW5nY2YuanNkZWxpdnIubmV0Jyxcblx0XHRNV19DRE4gPSBgbnBtL0BiaHNkL2NvZGVtaXJyb3ItbWVkaWF3aWtpQCR7bGlic1snd3BobCddLmNtVmVyc2lvbiB8fCAnbGF0ZXN0J30vZGlzdC9tdy5taW4uanNgLFxuXHRcdFJFUE9fQ0ROID0gJ25wbS93aWtpcGx1cy1oaWdobGlnaHQnO1xuXG5cdHdpbmRvdy5Db2RlTWlycm9yNiB8fD0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcblx0XHRcdHJlc29sdmUoQ29kZU1pcnJvcjYpO1xuXHRcdH0pO1xuXHRcdHNjcmlwdC50eXBlID0gJ21vZHVsZSc7XG5cdFx0c2NyaXB0LnNyYyA9IGAke0NETn0vJHtNV19DRE59YDtcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChzY3JpcHQpO1xuXHR9KTtcblxuXHRjb25zdCB7d2dQYWdlTmFtZTogcGFnZSwgd2dOYW1lc3BhY2VOdW1iZXI6IG5zLCB3Z1BhZ2VDb250ZW50TW9kZWw6IGNvbnRlbnRtb2RlbH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgQ09OVEVOVE1PREVMUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcblx0XHRcdCdzYW5pdGl6ZWQtY3NzJzogJ2NzcycsXG5cdFx0XHR3aWtpdGV4dDogJ21lZGlhd2lraScsXG5cdFx0fSxcblx0XHRFWFRTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuXHRcdFx0Y3NzOiAnY3NzJyxcblx0XHRcdGpzOiAnamF2YXNjcmlwdCcsXG5cdFx0XHRqc29uOiAnanNvbicsXG5cdFx0fSxcblx0XHROQU1FU1BBQ0VTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuXHRcdFx0ODI4OiAnbHVhJyxcblx0XHRcdDI3NDogJ2h0bWwnLFxuXHRcdH07XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0Y29uc3QgZ2V0T2JqZWN0ID0gKGtleTogc3RyaW5nKTogYW55ID0+IHtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShTdHJpbmcobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiDmo4Dmn6XpobXpnaLor63oqIDnsbvlnotcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIOmhtemdouWGheWuuVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlfVxuXHQgKi9cblx0Y29uc3QgZ2V0UGFnZU1vZGUgPSBhc3luYyAodmFsdWU6IHN0cmluZyk6IFByb21pc2U8W3N0cmluZywgKG51bWJlciB8IHVuZGVmaW5lZCk/XT4gPT4ge1xuXHRcdGlmICh0eXBlb2YgX1dpa2lwbHVzUGFnZXMgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRjb25zdCBwYWdlcyA9IE9iamVjdC52YWx1ZXMoX1dpa2lwbHVzUGFnZXMpLmZpbHRlcigoe3NlY3Rpb25DYWNoZX0pID0+IHtcblx0XHRcdFx0cmV0dXJuIE9iamVjdC52YWx1ZXMoc2VjdGlvbkNhY2hlKS5pbmNsdWRlcyh2YWx1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdGlmIChcblx0XHRcdFx0cGFnZXMuc29tZSgoe3RpdGxlfSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAhdGl0bGUuZW5kc1dpdGgoJy9kb2MnKTtcblx0XHRcdFx0fSlcblx0XHRcdCkge1xuXHRcdFx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ21lZGlhd2lraS5UaXRsZScpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbW9kZXMgPSBuZXcgU2V0KFxuXHRcdFx0XHRwYWdlcy5tYXAoKHt0aXRsZX0pID0+IHtcblx0XHRcdFx0XHRpZiAodGl0bGUuZW5kc1dpdGgoJy9kb2MnKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICd0ZW1wbGF0ZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IHQgPSBuZXcgbXcuVGl0bGUodGl0bGUpLFxuXHRcdFx0XHRcdFx0bmFtZXNwYWNlID0gdC5nZXROYW1lc3BhY2VJZCgpO1xuXHRcdFx0XHRcdGlmIChuYW1lc3BhY2UgJSAyKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ21lZGlhd2lraSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IG1vZGUgPSBFWFRTW3QuZ2V0RXh0ZW5zaW9uKCk/LnRvTG93ZXJDYXNlKCkgfHwgJyddIHx8IE5BTUVTUEFDRVNbbmFtZXNwYWNlXTtcblx0XHRcdFx0XHRpZiAobW9kZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG1vZGUgPT09ICdqYXZhc2NyaXB0JyAmJiAobmFtZXNwYWNlID09PSA4IHx8IG5hbWVzcGFjZSA9PT0gMjMwMCkgPyAnZ2FkZ2V0JyA6IG1vZGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBuYW1lc3BhY2UgPT09IDEwIHx8IG5hbWVzcGFjZSA9PT0gMiA/ICd0ZW1wbGF0ZScgOiAnbWVkaWF3aWtpJztcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0XHRpZiAobW9kZXMuc2l6ZSA9PT0gMSkge1xuXHRcdFx0XHRjb25zdCBbbW9kZV0gPSBtb2Rlcztcblx0XHRcdFx0aWYgKG1vZGUgPT09ICdnYWRnZXQnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFsnamF2YXNjcmlwdCcsIDhdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtb2RlID09PSAndGVtcGxhdGUnID8gWydtZWRpYXdpa2knLCAxMF0gOiBbbW9kZSFdO1xuXHRcdFx0fSBlbHNlIGlmIChtb2Rlcy5zaXplID09PSAyKSB7XG5cdFx0XHRcdGlmIChtb2Rlcy5oYXMoJ2phdmFzY3JpcHQnKSAmJiBtb2Rlcy5oYXMoJ2dhZGdldCcpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFsnamF2YXNjcmlwdCddO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG1vZGVzLmhhcygnbWVkaWF3aWtpJykgJiYgbW9kZXMuaGFzKCd0ZW1wbGF0ZScpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFsnbWVkaWF3aWtpJ107XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKChucyAhPT0gMjc0ICYmIGNvbnRlbnRtb2RlbCAhPT0gJ1NjcmlidW50bycpIHx8IHBhZ2UuZW5kc1dpdGgoJy9kb2MnKSkge1xuXHRcdFx0cmV0dXJuIFtDT05URU5UTU9ERUxTW2NvbnRlbnRtb2RlbF0gfHwgY29udGVudG1vZGVsLCBjb250ZW50bW9kZWwgPT09ICdqYXZhc2NyaXB0JyA/IG5zIDogdW5kZWZpbmVkXTtcblx0XHR9XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdvb2pzLXVpLXdpbmRvd3MnKTtcblx0XHRpZiAoXG5cdFx0XHRhd2FpdCBPTy51aS5jb25maXJtKG13Lm1zZygnY20tbXctY29udGVudG1vZGVsJyksIHtcblx0XHRcdFx0YWN0aW9uczogW3tsYWJlbDogbnMgPT09IDI3NCA/ICdXaWRnZXQnIDogJ0x1YSd9LCB7bGFiZWw6ICdXaWtpdGV4dCcsIGFjdGlvbjogJ2FjY2VwdCd9XSxcblx0XHRcdH0pXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gWydtZWRpYXdpa2knXTtcblx0XHR9XG5cdFx0cmV0dXJuIFtucyA9PT0gMjc0ID8gJ2h0bWwnIDogJ2x1YSddO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiDmuLLmn5PnvJbovpHlmahcblx0ICpcblx0ICogQHBhcmFtIHtKUXVlcnk8SFRNTFRleHRBcmVhRWxlbWVudD59ICR0YXJnZXQg55uu5qCH57yW6L6R5qGGXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gc2V0dGluZyDmmK/lkKbmmK9XaWtpcGx1c+iuvue9ru+8iOS9v+eUqGpzb27or63ms5XvvIlcblx0ICovXG5cdGNvbnN0IHJlbmRlckVkaXRvciA9IGFzeW5jICgkdGFyZ2V0OiBKUXVlcnk8SFRNTFRleHRBcmVhRWxlbWVudD4sIHNldHRpbmc6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCBjbSA9IGF3YWl0IChcblx0XHRcdGF3YWl0IENvZGVNaXJyb3I2XG5cdFx0KS5mcm9tVGV4dEFyZWEoJHRhcmdldFswXSEsIC4uLihzZXR0aW5nID8gKFsnanNvbiddIGFzIFtzdHJpbmddKSA6IGF3YWl0IGdldFBhZ2VNb2RlKCR0YXJnZXQudmFsKCkhKSkpO1xuXHRcdGNtLnZpZXcuZG9tLmlkID0gJ1dpa2lwbHVzLUNvZGVNaXJyb3InO1xuXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQW5jaG9yRWxlbWVudD4oJyNXaWtpcGx1cy1RdWlja2VkaXQtSnVtcCA+IGEnKSEuaHJlZiA9ICcjV2lraXBsdXMtQ29kZU1pcnJvcic7XG5cblx0XHRpZiAoIXNldHRpbmcpIHtcblx0XHRcdC8vIOaZrumAmldpa2lwbHVz57yW6L6R5Yy6XG5cdFx0XHRjb25zdCBzZXR0aW5nczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsID0gZ2V0T2JqZWN0KCdXaWtpcGx1c19TZXR0aW5ncycpLFxuXHRcdFx0XHRlc2NUb0V4aXRRdWlja0VkaXQgPSBzZXR0aW5ncyAmJiAoc2V0dGluZ3NbJ2VzY190b19leGl0X3F1aWNrZWRpdCddIHx8IHNldHRpbmdzWydlc2NUb0V4aXRRdWlja0VkaXQnXSksXG5cdFx0XHRcdHN1Ym1pdCA9IC8qKiDmj5DkuqTnvJbovpEgQHJldHVybiB0cnVlICovICgpOiB0cnVlID0+IHtcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpIS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KCdjbGljaycpKTtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c3VibWl0TWlub3IgPSAvKiog5o+Q5Lqk5bCP57yW6L6RICovICgpOiB0cnVlID0+IHtcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpIS5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRyZXR1cm4gc3VibWl0KCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVzY2FwZUVkaXQgPSAvKiog5oyJ5LiLRXNj6ZSu6YCA5Ye657yW6L6RICovICgpOiB0cnVlID0+IHtcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKSEuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudCgnY2xpY2snKSk7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH07XG5cdFx0XHRjbS5leHRyYUtleXMoW1xuXHRcdFx0XHR7a2V5OiAnTW9kLVMnLCBydW46IHN1Ym1pdH0sXG5cdFx0XHRcdHtrZXk6ICdTaGlmdC1Nb2QtUycsIHJ1bjogc3VibWl0TWlub3J9LFxuXHRcdFx0XHQuLi4oZXNjVG9FeGl0UXVpY2tFZGl0ID09PSB0cnVlIHx8IGVzY1RvRXhpdFF1aWNrRWRpdCA9PT0gJ3RydWUnXG5cdFx0XHRcdFx0PyBbe2tleTogJ0VzYycsIHJ1bjogZXNjYXBlRWRpdH1dXG5cdFx0XHRcdFx0OiBbXSksXG5cdFx0XHRdKTtcblx0XHR9XG5cblx0XHQvKiogQHRvZG8g5Lul5LiL6L+H5rih5Luj56CB5re75Yqg5LqOMjAyNC0wMi0wN++8jOWwhuS6juS4gOauteaXtumXtOWQjuW8g+eUqCAqL1xuXHRcdGNvbnN0IG9sZEtleSA9ICdXaWtpcGx1cy1oaWdobGlnaHQtYWRkb25zJyxcblx0XHRcdG9sZFByZWZzOiBzdHJpbmdbXSB8IG51bGwgPSBnZXRPYmplY3Qob2xkS2V5KSxcblx0XHRcdG1hcHBpbmc6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG5cdFx0XHRcdGFjdGl2ZUxpbmU6ICdoaWdobGlnaHRBY3RpdmVMaW5lJyxcblx0XHRcdFx0dHJhaWxpbmdzcGFjZTogJ2hpZ2hsaWdodFRyYWlsaW5nV2hpdGVzcGFjZScsXG5cdFx0XHRcdG1hdGNoQnJhY2tldHM6ICdicmFja2V0TWF0Y2hpbmcnLFxuXHRcdFx0XHRjbG9zZUJyYWNrZXRzOiAnY2xvc2VCcmFja2V0cycsXG5cdFx0XHRcdG1hdGNoVGFnczogJ3RhZ01hdGNoaW5nJyxcblx0XHRcdFx0Zm9sZDogJ2NvZGVGb2xkaW5nJyxcblx0XHRcdFx0d2lraUVkaXRvcjogJ3dpa2lFZGl0b3InLFxuXHRcdFx0XHRlc2NhcGU6ICdlc2NhcGUnLFxuXHRcdFx0XHRjb250ZXh0bWVudTogJ29wZW5MaW5rcycsXG5cdFx0XHRcdGxpbnQ6ICdsaW50Jyxcblx0XHRcdH07XG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ob2xkS2V5KTtcblx0XHRpZiAob2xkUHJlZnMpIHtcblx0XHRcdGNvbnN0IG9iajogUmVjb3JkPHN0cmluZywgdHJ1ZT4gPSB7fTtcblx0XHRcdGZvciAoY29uc3QgayBvZiBvbGRQcmVmcykge1xuXHRcdFx0XHRpZiAoayBpbiBtYXBwaW5nKSB7XG5cdFx0XHRcdFx0b2JqW21hcHBpbmdba10hXSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y20ucHJlZmVyKG9iaik7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIOebkeinhiBXaWtpcGx1cyDnvJbovpHmoYZcblx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigocmVjb3JkcykgPT4ge1xuXHRcdGNvbnN0ICRlZGl0QXJlYSA9ICQoXG5cdFx0XHRyZWNvcmRzLmZsYXRNYXAoKHthZGRlZE5vZGVzfSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gWy4uLmFkZGVkTm9kZXNdO1xuXHRcdFx0fSlcblx0XHQpLmZpbmQ8SFRNTFRleHRBcmVhRWxlbWVudD4oJyNXaWtpcGx1cy1RdWlja2VkaXQsICNXaWtpcGx1cy1TZXR0aW5nLUlucHV0Jyk7XG5cdFx0aWYgKCRlZGl0QXJlYS5sZW5ndGggPiAwKSB7XG5cdFx0XHR2b2lkIHJlbmRlckVkaXRvcigkZWRpdEFyZWEsICRlZGl0QXJlYS5hdHRyKCdpZCcpID09PSAnV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpO1xuXHRcdH1cblx0fSk7XG5cdG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xuXG5cdG13LmxvYWRlci5sb2FkKGAke0NETn0vJHtSRVBPX0NETn1AJHt2ZXJzaW9ufS9zdHlsZXMubWluLmNzc2AsICd0ZXh0L2NzcycpO1xufSkoKTtcblxuZXhwb3J0IHt9O1xuIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnV2lraXBsdXMtaGlnaGxpZ2h0LzIuMCcpO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgY2hlY2tEZXBlbmRlbmNpZXMgPSBhc3luYyAoKSA9PiB7XG5cdGlmICghbXcudXNlci5vcHRpb25zLmdldCgnZ2FkZ2V0LVdpa2lwbHVzJykpIHtcblx0XHR2b2lkIGFwaS5wb3N0V2l0aEVkaXRUb2tlbih7XG5cdFx0XHRhY3Rpb246ICdvcHRpb25zJyxcblx0XHRcdGNoYW5nZTogJ2dhZGdldC1XaWtpcGx1cz0xJyxcblx0XHR9IGFzIEFwaU9wdGlvbnNQYXJhbXMpO1xuXG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuZ2FkZ2V0Lldpa2lwbHVzJyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y2hlY2tEZXBlbmRlbmNpZXN9O1xuIiwgImltcG9ydCAnLi9XaWtpcGx1cy1oaWdobGlnaHQubGVzcyc7XG5pbXBvcnQge2NoZWNrRGVwZW5kZW5jaWVzfSBmcm9tICcuL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMnO1xuXG4oYXN5bmMgZnVuY3Rpb24gV2lraXBsdXNIaWdobGlnaHQoKSB7XG5cdHZvaWQgY2hlY2tEZXBlbmRlbmNpZXMoKTtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0lzQXJ0aWNsZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8ICF3Z0lzQXJ0aWNsZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHsndmlzdWFsZWRpdG9yLWVuYWJsZSc6IGlzVmVFbmFibGV9ID0gbXcudXNlci5vcHRpb25zLmdldCgpIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuXG5cdC8qIHNlZSA8aHR0cHM6Ly9naXRodWIuY29tL1dpa2lwbHVzL1dpa2lwbHVzL2lzc3Vlcy82NT4gKi9cblx0aWYgKGlzVmVFbmFibGUpIHtcblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC52aXN1YWxFZGl0b3IuY29yZScpO1xuXHR9XG5cblx0aWYgKCEoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQpKSB7XG5cdFx0YXdhaXQgaW1wb3J0KCcuL21vZHVsZXMvaGlnaGxpZ2h0Jyk7XG5cdH1cbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQUMsaUJBQUFDLE1BQUE7RUFBQSxnREFBQTtBQUFBO0lBQUE7Ozs7O0FBTUEsS0FBQ0MsYUFBWTtBQUNaLFlBQU07UUFBQ0M7TUFBSSxJQUFJQyxJQUNkO1FBQUNDO01BQUksSUFBSUY7QUFDVixVQUFJRSxTQUFBLFFBQUFBLFNBQUEsVUFBQUEsS0FBTUMsU0FBUztBQUNsQjtNQUNEO0FBQ0EsWUFBTUEsVUFBVTtBQUNoQkgsV0FBSyxNQUFNLElBQUk7UUFBQ0c7UUFBU0MsV0FBVztRQUFPLEdBQUdGO01BQUk7QUFHbEQsWUFBTUcsTUFBTSw0QkFDWEMsU0FBQSxrQ0FBQUMsT0FBMkNQLEtBQUssTUFBTSxFQUFFSSxhQUFhLFVBQVEsaUJBQUEsR0FDN0VJLFdBQVc7QUFFWixPQUFBVCxVQUFBVSxRQUFPQyxnQkFBUFgsUUFBT1csY0FBZ0IsSUFBSUMsUUFBU0MsYUFBWTtBQUMvQyxjQUFNQyxTQUFTQyxTQUFTQyxjQUFjLFFBQVE7QUFDOUNGLGVBQU9HLGlCQUFpQixRQUFRLE1BQU07QUFDckNKLGtCQUFRRixXQUFXO1FBQ3BCLENBQUM7QUFDREcsZUFBT0ksT0FBTztBQUNkSixlQUFPSyxNQUFBLEdBQUFYLE9BQVNGLEtBQUcsR0FBQSxFQUFBRSxPQUFJRCxNQUFNO0FBQzdCUSxpQkFBU0ssS0FBS0MsT0FBT1AsTUFBTTtN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WUFBTTdKLEdBQUd3RCxPQUFPQyxNQUFNLHVCQUF1QjtJQUM5QztBQUVBLFFBQUksRUFBRSxrQkFBa0I1QyxXQUFXO0FBQ2xDLFlBQU1ILFFBQUFDLFFBQUEsRUFBQW1KLEtBQUEsT0FBQWxLLGVBQUEsR0FBQUQsa0JBQUE7SUFDUDtFQUNELENBQUE7QUFBQSxXQWpCZ0JvSyxvQkFBQTtBQUFBLFdBQUFDLG1CQUFBakYsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxTQUFBK0U7QUFBQSxHQUFBLEVBaUJiOyIsCiAgIm5hbWVzIjogWyJoaWdobGlnaHRfZXhwb3J0cyIsICJpbml0X2hpZ2hsaWdodCIsICJfX2VzbSIsICJfd2luZG93IiwgImxpYnMiLCAibXciLCAid3BobCIsICJ2ZXJzaW9uIiwgImNtVmVyc2lvbiIsICJDRE4iLCAiTVdfQ0ROIiwgImNvbmNhdCIsICJSRVBPX0NETiIsICJ3aW5kb3ciLCAiQ29kZU1pcnJvcjYiLCAiUHJvbWlzZSIsICJyZXNvbHZlIiwgInNjcmlwdCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAidHlwZSIsICJzcmMiLCAiaGVhZCIsICJhcHBlbmQiLCAid2dQYWdlTmFtZSIsICJwYWdlIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIm5zIiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJjb250ZW50bW9kZWwiLCAiY29uZmlnIiwgImdldCIsICJDT05URU5UTU9ERUxTIiwgIndpa2l0ZXh0IiwgIkVYVFMiLCAiY3NzIiwgImpzIiwgImpzb24iLCAiTkFNRVNQQUNFUyIsICJnZXRPYmplY3QiLCAia2V5IiwgIkpTT04iLCAicGFyc2UiLCAiU3RyaW5nIiwgImxvY2FsU3RvcmFnZSIsICJnZXRJdGVtIiwgImdldFBhZ2VNb2RlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidmFsdWUiLCAiX1dpa2lwbHVzUGFnZXMiLCAicGFnZXMiLCAiT2JqZWN0IiwgInZhbHVlcyIsICJmaWx0ZXIiLCAic2VjdGlvbkNhY2hlIiwgImluY2x1ZGVzIiwgInNvbWUiLCAidGl0bGUiLCAiZW5kc1dpdGgiLCAibG9hZGVyIiwgInVzaW5nIiwgIm1vZGVzIiwgIlNldCIsICJtYXAiLCAiX3QkZ2V0RXh0ZW5zaW9uIiwgInQiLCAiVGl0bGUiLCAibmFtZXNwYWNlIiwgImdldE5hbWVzcGFjZUlkIiwgIm1vZGUiLCAiZ2V0RXh0ZW5zaW9uIiwgInRvTG93ZXJDYXNlIiwgInNpemUiLCAiaGFzIiwgIk9PIiwgInVpIiwgImNvbmZpcm0iLCAibXNnIiwgImFjdGlvbnMiLCAibGFiZWwiLCAiYWN0aW9uIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJyZW5kZXJFZGl0b3IiLCAiX3JlZjIiLCAiJHRhcmdldCIsICJzZXR0aW5nIiwgImNtIiwgImZyb21UZXh0QXJlYSIsICJ2YWwiLCAidmlldyIsICJkb20iLCAiaWQiLCAicXVlcnlTZWxlY3RvciIsICJocmVmIiwgInNldHRpbmdzIiwgImVzY1RvRXhpdFF1aWNrRWRpdCIsICJzdWJtaXQiLCAiZGlzcGF0Y2hFdmVudCIsICJNb3VzZUV2ZW50IiwgInN1Ym1pdE1pbm9yIiwgImNoZWNrZWQiLCAiZXNjYXBlRWRpdCIsICJleHRyYUtleXMiLCAicnVuIiwgIm9sZEtleSIsICJvbGRQcmVmcyIsICJtYXBwaW5nIiwgImFjdGl2ZUxpbmUiLCAidHJhaWxpbmdzcGFjZSIsICJtYXRjaEJyYWNrZXRzIiwgImNsb3NlQnJhY2tldHMiLCAibWF0Y2hUYWdzIiwgImZvbGQiLCAid2lraUVkaXRvciIsICJlc2NhcGUiLCAiY29udGV4dG1lbnUiLCAibGludCIsICJyZW1vdmVJdGVtIiwgIm9iaiIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiayIsICJlcnIiLCAiZSIsICJmIiwgInByZWZlciIsICJfeDIiLCAiX3gzIiwgIm9ic2VydmVyIiwgIk11dGF0aW9uT2JzZXJ2ZXIiLCAicmVjb3JkcyIsICIkZWRpdEFyZWEiLCAiJCIsICJmbGF0TWFwIiwgImFkZGVkTm9kZXMiLCAiZmluZCIsICJsZW5ndGgiLCAiYXR0ciIsICJvYnNlcnZlIiwgImJvZHkiLCAiY2hpbGRMaXN0IiwgImxvYWQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNoZWNrRGVwZW5kZW5jaWVzIiwgIl9yZWYzIiwgInVzZXIiLCAib3B0aW9ucyIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJjaGFuZ2UiLCAid2dBY3Rpb24iLCAid2dJc0FydGljbGUiLCAiaXNWZUVuYWJsZSIsICJ0aGVuIiwgIldpa2lwbHVzSGlnaGxpZ2h0IiwgIl9XaWtpcGx1c0hpZ2hsaWdodCJdCn0K
