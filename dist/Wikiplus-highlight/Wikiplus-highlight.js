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
//! src/Wikiplus-highlight/modules/highlight.js
var highlight_exports = {};
var init_highlight = __esm({
  "src/Wikiplus-highlight/modules/highlight.js"() {
    "use strict";
    /*! Wikiplus-highlight | Bhsd, 机智的小鱼君 | GPL-3.0 <https://qwbk.cc/H:GPL-3.0> */
    (() => {
      if ("wphl" in mw.libs) {
        return;
      }
      const version = "3.0.2";
      mw.libs["wphl"] = {
        version
      };
      const CDN = "//testingcf.jsdelivr.net", MW_CDN = "npm/@bhsd/codemirror-mediawiki@2.4.5/dist/mw.min.js", REPO_CDN = "npm/wikiplus-highlight";
      const {
        wgPageName: page,
        wgNamespaceNumber: ns,
        wgPageContentModel: contentmodel
      } = mw.config.get();
      const CONTENTMODEL = {
        "sanitized-css": "css",
        wikitext: "mediawiki"
      };
      const getObject = mw.storage.getObject || ((key) => {
        return JSON.parse(String(localStorage.getItem(key)));
      });
      const init = () => {
        return "CodeMirror6" in window ? Promise.resolve() : new Promise((resolve) => {
          const script = document.createElement("script");
          script.addEventListener("load", () => {
            resolve();
          });
          script.type = "module";
          script.src = "".concat(CDN, "/").concat(MW_CDN);
          document.head.append(script);
        });
      };
      const getPageMode = /* @__PURE__ */ function() {
        var _ref = _asyncToGenerator(function* () {
          if (ns !== 274 && contentmodel !== "Scribunto" || page.endsWith("/doc")) {
            return CONTENTMODEL[contentmodel] || contentmodel;
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
            return "mediawiki";
          }
          return ns === 274 ? "html" : "lua";
        });
        return function getPageMode2() {
          return _ref.apply(this, arguments);
        };
      }();
      const renderEditor = /* @__PURE__ */ function() {
        var _ref2 = _asyncToGenerator(function* ($target, setting) {
          yield init();
          const cm = yield CodeMirror6.fromTextArea($target[0], setting ? "json" : yield getPageMode());
          cm.view.dom.id = "Wikiplus-CodeMirror";
          document.querySelector("#Wikiplus-Quickedit-Jump > a").href = "#Wikiplus-CodeMirror";
          if (!setting) {
            const settings = getObject("Wikiplus_Settings"), escToExitQuickEdit = settings && (settings["esc_to_exit_quickedit"] || settings["escToExitQuickEdit"]), submit = (
              /** 提交编辑 */
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
        return function renderEditor2(_x, _x2) {
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
      /*! Wikiplus-highlight | Bhsd, 机智的小鱼君 | GPL-3.0 <https://qwbk.cc/H:GPL-3.0> */
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzLWhpZ2hsaWdodC9tb2R1bGVzL2hpZ2hsaWdodC5qcyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L21vZHVsZXMvYXBpLnRzIiwgInNyYy9XaWtpcGx1cy1oaWdobGlnaHQvbW9kdWxlcy9jaGVja0RlcGVuZGVuY2llcy50cyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L1dpa2lwbHVzLWhpZ2hsaWdodC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbi8qISBXaWtpcGx1cy1oaWdobGlnaHQgfCBCaHNkLCDmnLrmmbrnmoTlsI/psbzlkJsgfCBHUEwtMy4wIDxodHRwczovL3F3YmsuY2MvSDpHUEwtMy4wPiAqL1xuKCgpID0+IHtcblx0aWYgKCd3cGhsJyBpbiBtdy5saWJzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHZlcnNpb24gPSAnMy4wLjInO1xuXHRtdy5saWJzWyd3cGhsJ10gPSB7dmVyc2lvbn07IC8vIOW8gOWni+WKoOi9vVxuXHQvLyDot6/lvoRcblx0Y29uc3QgQ0ROID0gJy8vdGVzdGluZ2NmLmpzZGVsaXZyLm5ldCcsXG5cdFx0TVdfQ0ROID0gJ25wbS9AYmhzZC9jb2RlbWlycm9yLW1lZGlhd2lraUAyLjQuNS9kaXN0L213Lm1pbi5qcycsXG5cdFx0UkVQT19DRE4gPSAnbnBtL3dpa2lwbHVzLWhpZ2hsaWdodCc7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lOiBwYWdlLCB3Z05hbWVzcGFjZU51bWJlcjogbnMsIHdnUGFnZUNvbnRlbnRNb2RlbDogY29udGVudG1vZGVsfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgQ09OVEVOVE1PREVMID0ge1xuXHRcdCdzYW5pdGl6ZWQtY3NzJzogJ2NzcycsXG5cdFx0d2lraXRleHQ6ICdtZWRpYXdpa2knLFxuXHR9O1xuXG5cdGNvbnN0IGdldE9iamVjdCA9XG5cdFx0bXcuc3RvcmFnZS5nZXRPYmplY3QgfHxcblx0XHQoKGtleSkgPT4ge1xuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoU3RyaW5nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpKTtcblx0XHR9KTtcblx0LyoqIOagueaNrumcgOimgeWKoOi9vUNvZGVNaXJyb3I2ICovXG5cdGNvbnN0IGluaXQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuICdDb2RlTWlycm9yNicgaW4gd2luZG93XG5cdFx0XHQ/IFByb21pc2UucmVzb2x2ZSgpXG5cdFx0XHQ6IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdFx0XHRcdFx0c2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c2NyaXB0LnR5cGUgPSAnbW9kdWxlJztcblx0XHRcdFx0XHRzY3JpcHQuc3JjID0gYCR7Q0ROfS8ke01XX0NETn1gO1xuXHRcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHNjcmlwdCk7XG5cdFx0XHRcdH0pO1xuXHR9O1xuXHQvKiog5qOA5p+l6aG16Z2i6K+t6KiA57G75Z6LICovXG5cdGNvbnN0IGdldFBhZ2VNb2RlID0gYXN5bmMgKCkgPT4ge1xuXHRcdGlmICgobnMgIT09IDI3NCAmJiBjb250ZW50bW9kZWwgIT09ICdTY3JpYnVudG8nKSB8fCBwYWdlLmVuZHNXaXRoKCcvZG9jJykpIHtcblx0XHRcdHJldHVybiBDT05URU5UTU9ERUxbY29udGVudG1vZGVsXSB8fCBjb250ZW50bW9kZWw7XG5cdFx0fVxuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnb29qcy11aS13aW5kb3dzJyk7XG5cdFx0aWYgKFxuXHRcdFx0YXdhaXQgT08udWkuY29uZmlybShtdy5tc2coJ2NtLW13LWNvbnRlbnRtb2RlbCcpLCB7XG5cdFx0XHRcdGFjdGlvbnM6IFt7bGFiZWw6IG5zID09PSAyNzQgPyAnV2lkZ2V0JyA6ICdMdWEnfSwge2xhYmVsOiAnV2lraXRleHQnLCBhY3Rpb246ICdhY2NlcHQnfV0sXG5cdFx0XHR9KVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuICdtZWRpYXdpa2knO1xuXHRcdH1cblx0XHRyZXR1cm4gbnMgPT09IDI3NCA/ICdodG1sJyA6ICdsdWEnO1xuXHR9O1xuXHQvKipcblx0ICog5riy5p+T57yW6L6R5ZmoXG5cdCAqXG5cdCAqIEBwYXJhbSB7SlF1ZXJ5fSAkdGFyZ2V0IOebruagh+e8lui+keahhlxuXHQgKiBAcGFyYW0ge0pTT059IHNldHRpbmcg5piv5ZCm5pivV2lraXBsdXPorr7nva7vvIjkvb/nlKhqc29u6K+t5rOV77yJXG5cdCAqL1xuXHRjb25zdCByZW5kZXJFZGl0b3IgPSBhc3luYyAoJHRhcmdldCwgc2V0dGluZykgPT4ge1xuXHRcdGF3YWl0IGluaXQoKTtcblx0XHRjb25zdCBjbSA9IGF3YWl0IENvZGVNaXJyb3I2LmZyb21UZXh0QXJlYSgkdGFyZ2V0WzBdLCBzZXR0aW5nID8gJ2pzb24nIDogYXdhaXQgZ2V0UGFnZU1vZGUoKSk7XG5cdFx0Y20udmlldy5kb20uaWQgPSAnV2lraXBsdXMtQ29kZU1pcnJvcic7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1dpa2lwbHVzLVF1aWNrZWRpdC1KdW1wID4gYScpLmhyZWYgPSAnI1dpa2lwbHVzLUNvZGVNaXJyb3InO1xuXHRcdGlmICghc2V0dGluZykge1xuXHRcdFx0Ly8g5pmu6YCaV2lraXBsdXPnvJbovpHljLpcblx0XHRcdGNvbnN0IHNldHRpbmdzID0gZ2V0T2JqZWN0KCdXaWtpcGx1c19TZXR0aW5ncycpLFxuXHRcdFx0XHRlc2NUb0V4aXRRdWlja0VkaXQgPSBzZXR0aW5ncyAmJiAoc2V0dGluZ3NbJ2VzY190b19leGl0X3F1aWNrZWRpdCddIHx8IHNldHRpbmdzWydlc2NUb0V4aXRRdWlja0VkaXQnXSksXG5cdFx0XHRcdHN1Ym1pdCA9IC8qKiDmj5DkuqTnvJbovpEgKi8gKCkgPT4ge1xuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0JykuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudCgnY2xpY2snKSk7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN1Ym1pdE1pbm9yID0gLyoqIOaPkOS6pOWwj+e8lui+kSAqLyAoKSA9PiB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKS5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRyZXR1cm4gc3VibWl0KCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVzY2FwZUVkaXQgPSAvKiog5oyJ5LiLRXNj6ZSu6YCA5Ye657yW6L6RICovICgpID0+IHtcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KCdjbGljaycpKTtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fTtcblx0XHRcdGNtLmV4dHJhS2V5cyhbXG5cdFx0XHRcdHtrZXk6ICdNb2QtUycsIHJ1bjogc3VibWl0fSxcblx0XHRcdFx0e2tleTogJ1NoaWZ0LU1vZC1TJywgcnVuOiBzdWJtaXRNaW5vcn0sXG5cdFx0XHRcdC4uLihlc2NUb0V4aXRRdWlja0VkaXQgPT09IHRydWUgfHwgZXNjVG9FeGl0UXVpY2tFZGl0ID09PSAndHJ1ZSdcblx0XHRcdFx0XHQ/IFt7a2V5OiAnRXNjJywgcnVuOiBlc2NhcGVFZGl0fV1cblx0XHRcdFx0XHQ6IFtdKSxcblx0XHRcdF0pO1xuXHRcdH1cblx0XHQvKiogQHRvZG8g5Lul5LiL6L+H5rih5Luj56CB5re75Yqg5LqOMjAyNC0wMi0wN++8jOWwhuS6juS4gOauteaXtumXtOWQjuW8g+eUqCAqL1xuXHRcdGNvbnN0IG9sZEtleSA9ICdXaWtpcGx1cy1oaWdobGlnaHQtYWRkb25zJyxcblx0XHRcdG9sZFByZWZzID0gZ2V0T2JqZWN0KG9sZEtleSksXG5cdFx0XHRtYXBwaW5nID0ge1xuXHRcdFx0XHRhY3RpdmVMaW5lOiAnaGlnaGxpZ2h0QWN0aXZlTGluZScsXG5cdFx0XHRcdHRyYWlsaW5nc3BhY2U6ICdoaWdobGlnaHRUcmFpbGluZ1doaXRlc3BhY2UnLFxuXHRcdFx0XHRtYXRjaEJyYWNrZXRzOiAnYnJhY2tldE1hdGNoaW5nJyxcblx0XHRcdFx0Y2xvc2VCcmFja2V0czogJ2Nsb3NlQnJhY2tldHMnLFxuXHRcdFx0XHRtYXRjaFRhZ3M6ICd0YWdNYXRjaGluZycsXG5cdFx0XHRcdGZvbGQ6ICdjb2RlRm9sZGluZycsXG5cdFx0XHRcdHdpa2lFZGl0b3I6ICd3aWtpRWRpdG9yJyxcblx0XHRcdFx0ZXNjYXBlOiAnZXNjYXBlJyxcblx0XHRcdFx0Y29udGV4dG1lbnU6ICdvcGVuTGlua3MnLFxuXHRcdFx0XHRsaW50OiAnbGludCcsXG5cdFx0XHR9O1xuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG9sZEtleSk7XG5cdFx0aWYgKG9sZFByZWZzKSB7XG5cdFx0XHRjb25zdCBvYmogPSB7fTtcblx0XHRcdGZvciAoY29uc3QgayBvZiBvbGRQcmVmcykge1xuXHRcdFx0XHRpZiAoayBpbiBtYXBwaW5nKSB7XG5cdFx0XHRcdFx0b2JqW21hcHBpbmdba11dID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y20ucHJlZmVyKG9iaik7XG5cdFx0fVxuXHR9O1xuXHQvLyDnm5Hop4YgV2lraXBsdXMg57yW6L6R5qGGXG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHJlY29yZHMpID0+IHtcblx0XHRjb25zdCAkZWRpdEFyZWEgPSAkKFxuXHRcdFx0cmVjb3Jkcy5mbGF0TWFwKCh7YWRkZWROb2Rlc30pID0+IHtcblx0XHRcdFx0cmV0dXJuIFsuLi5hZGRlZE5vZGVzXTtcblx0XHRcdH0pXG5cdFx0KS5maW5kKCcjV2lraXBsdXMtUXVpY2tlZGl0LCAjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpO1xuXHRcdGlmICgkZWRpdEFyZWEubGVuZ3RoID4gMCkge1xuXHRcdFx0dm9pZCByZW5kZXJFZGl0b3IoJGVkaXRBcmVhLCAkZWRpdEFyZWEuYXR0cignaWQnKSA9PT0gJ1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKTtcblx0XHR9XG5cdH0pO1xuXHRvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtjaGlsZExpc3Q6IHRydWV9KTtcblx0bXcubG9hZGVyLmxvYWQoYCR7Q0ROfS8ke1JFUE9fQ0ROfUAke3ZlcnNpb259L3N0eWxlcy5taW4uY3NzYCwgJ3RleHQvY3NzJyk7XG59KSgpO1xuXG5leHBvcnQge307XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdXaWtpcGx1cy1oaWdobGlnaHQvMi4wJyk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBjaGVja0RlcGVuZGVuY2llcyA9IGFzeW5jICgpID0+IHtcblx0aWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCdnYWRnZXQtV2lraXBsdXMnKSkge1xuXHRcdHZvaWQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHtcblx0XHRcdGFjdGlvbjogJ29wdGlvbnMnLFxuXHRcdFx0Y2hhbmdlOiAnZ2FkZ2V0LVdpa2lwbHVzPTEnLFxuXHRcdH0gYXMgQXBpT3B0aW9uc1BhcmFtcyk7XG5cblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5nYWRnZXQuV2lraXBsdXMnKTtcblx0fVxufTtcblxuZXhwb3J0IHtjaGVja0RlcGVuZGVuY2llc307XG4iLCAiaW1wb3J0ICcuL1dpa2lwbHVzLWhpZ2hsaWdodC5sZXNzJztcbmltcG9ydCB7Y2hlY2tEZXBlbmRlbmNpZXN9IGZyb20gJy4vbW9kdWxlcy9jaGVja0RlcGVuZGVuY2llcyc7XG5cbihhc3luYyBmdW5jdGlvbiBXaWtpcGx1c0hpZ2hsaWdodCgpIHtcblx0dm9pZCBjaGVja0RlcGVuZGVuY2llcygpO1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnSXNBcnRpY2xlfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnSXNBcnRpY2xlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgeyd2aXN1YWxlZGl0b3ItZW5hYmxlJzogaXNWZUVuYWJsZX0gPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCkgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cblx0Lyogc2VlIDxodHRwczovL2dpdGh1Yi5jb20vV2lraXBsdXMvV2lraXBsdXMvaXNzdWVzLzY1PiAqL1xuXHRpZiAoaXNWZUVuYWJsZSkge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LnZpc3VhbEVkaXRvci5jb3JlJyk7XG5cdH1cblxuXHRpZiAoISgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudCkpIHtcblx0XHQvKiEgV2lraXBsdXMtaGlnaGxpZ2h0IHwgQmhzZCwg5py65pm655qE5bCP6bG85ZCbIHwgR1BMLTMuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6R1BMLTMuMD4gKi9cblx0XHRhd2FpdCBpbXBvcnQoJy4vbW9kdWxlcy9oaWdobGlnaHQnKTtcblx0fVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBQyxpQkFBQUMs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akksR0FBRzJILEtBQUtDLFFBQVEvRyxJQUFJO0FBR2hFLFFBQUlvSCxZQUFZO0FBQ2YsWUFBTWpJLEdBQUd5QyxPQUFPQyxNQUFNLHVCQUF1QjtJQUM5QztBQUVBLFFBQUksRUFBRSxrQkFBa0JiLFdBQVc7TUFDbEM7QUFDQSxZQUFNSCxRQUFBQyxRQUFBLEVBQUF1RyxLQUFBLE9BQUFwSSxlQUFBLEdBQUFELGtCQUFBO0lBQ1A7RUFDRCxDQUFBO0FBQUEsV0FsQmdCc0ksb0JBQUE7QUFBQSxXQUFBQyxtQkFBQWxGLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQWdGO0FBQUEsR0FBQSxFQWtCYjsiLAogICJuYW1lcyI6IFsiaGlnaGxpZ2h0X2V4cG9ydHMiLCAiaW5pdF9oaWdobGlnaHQiLCAiX19lc20iLCAibXciLCAibGlicyIsICJ2ZXJzaW9uIiwgIkNETiIsICJNV19DRE4iLCAiUkVQT19DRE4iLCAid2dQYWdlTmFtZSIsICJwYWdlIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIm5zIiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJjb250ZW50bW9kZWwiLCAiY29uZmlnIiwgImdldCIsICJDT05URU5UTU9ERUwiLCAid2lraXRleHQiLCAiZ2V0T2JqZWN0IiwgInN0b3JhZ2UiLCAia2V5IiwgIkpTT04iLCAicGFyc2UiLCAiU3RyaW5nIiwgImxvY2FsU3RvcmFnZSIsICJnZXRJdGVtIiwgImluaXQiLCAid2luZG93IiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJzY3JpcHQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJhZGRFdmVudExpc3RlbmVyIiwgInR5cGUiLCAic3JjIiwgImNvbmNhdCIsICJoZWFkIiwgImFwcGVuZCIsICJnZXRQYWdlTW9kZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImVuZHNXaXRoIiwgImxvYWRlciIsICJ1c2luZyIsICJPTyIsICJ1aSIsICJjb25maXJtIiwgIm1zZyIsICJhY3Rpb25zIiwgImxhYmVsIiwgImFjdGlvbiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicmVuZGVyRWRpdG9yIiwgIl9yZWYyIiwgIiR0YXJnZXQiLCAic2V0dGluZyIsICJjbSIsICJDb2RlTWlycm9yNiIsICJmcm9tVGV4dEFyZWEiLCAidmlldyIsICJkb20iLCAiaWQiLCAicXVlcnlTZWxlY3RvciIsICJocmVmIiwgInNldHRpbmdzIiwgImVzY1RvRXhpdFF1aWNrRWRpdCIsICJzdWJtaXQiLCAiZGlzcGF0Y2hFdmVudCIsICJNb3VzZUV2ZW50IiwgInN1Ym1pdE1pbm9yIiwgImNoZWNrZWQiLCAiZXNjYXBlRWRpdCIsICJleHRyYUtleXMiLCAicnVuIiwgIm9sZEtleSIsICJvbGRQcmVmcyIsICJtYXBwaW5nIiwgImFjdGl2ZUxpbmUiLCAidHJhaWxpbmdzcGFjZSIsICJtYXRjaEJyYWNrZXRzIiwgImNsb3NlQnJhY2tldHMiLCAibWF0Y2hUYWdzIiwgImZvbGQiLCAid2lraUVkaXRvciIsICJlc2NhcGUiLCAiY29udGV4dG1lbnUiLCAibGludCIsICJyZW1vdmVJdGVtIiwgIm9iaiIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiayIsICJ2YWx1ZSIsICJlcnIiLCAiZSIsICJmIiwgInByZWZlciIsICJfeCIsICJfeDIiLCAib2JzZXJ2ZXIiLCAiTXV0YXRpb25PYnNlcnZlciIsICJyZWNvcmRzIiwgIiRlZGl0QXJlYSIsICIkIiwgImZsYXRNYXAiLCAiYWRkZWROb2RlcyIsICJmaW5kIiwgImxlbmd0aCIsICJhdHRyIiwgIm9ic2VydmUiLCAiYm9keSIsICJjaGlsZExpc3QiLCAibG9hZCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY2hlY2tEZXBlbmRlbmNpZXMiLCAiX3JlZjMiLCAidXNlciIsICJvcHRpb25zIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImNoYW5nZSIsICJ3Z0FjdGlvbiIsICJ3Z0lzQXJ0aWNsZSIsICJpc1ZlRW5hYmxlIiwgInRoZW4iLCAiV2lraXBsdXNIaWdobGlnaHQiLCAiX1dpa2lwbHVzSGlnaGxpZ2h0Il0KfQo=
