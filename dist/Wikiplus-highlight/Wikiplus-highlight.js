/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|title=Wikiplus-highlight|license=GPL-3.0-or-later}}'
 *
 * Wikiplus-highlight
 *
 * @base {@link https://github.com/bhsd-harry/Wikiplus-highlight/}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Wikiplus-highlight}
 * @author Bhsd <https://github.com/bhsd-harry>, 机智的小鱼君 <https://github.com/Dragon-Fish>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
 * Copyright (C) Bhsd <https://github.com/bhsd-harry>, 机智的小鱼君 <https://github.com/Dragon-Fish>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var getObject;
var isGlobal;
var init_dist = __esm({
  "node_modules/.pnpm/@bhsd+browser@2.3.0_culori@4.0.2/node_modules/@bhsd/browser/dist/index.js"() {
    getObject = (key) => JSON.parse(String(localStorage.getItem(key)));
    isGlobal = (prop) => Object.hasOwn(globalThis, prop);
  }
});
//! src/Wikiplus-highlight/src/core.ts
var EXTS;
var NAMESPACES;
var isDoc;
var getModeFromTitle;
var getModeFromValue;
var submit;
var submitMinor;
var escapeEdit;
var renderEditor;
var init_core = __esm({
  "src/Wikiplus-highlight/src/core.ts"() {
    "use strict";
    init_dist();
    EXTS = /* @__PURE__ */ new Map([["css", "css"], ["js", "javascript"], ["json", "json"]]);
    NAMESPACES = {
      828: "lua",
      274: "html"
    };
    isDoc = (title) => title.endsWith("/doc");
    getModeFromTitle = (title, pageName, nsid, contentmodel, id) => {
      var _ref, _EXTS$get, _t$getExtension$toLow, _t$getExtension;
      if (id && pageName === title) {
        return [contentmodel.toLowerCase(), nsid];
      }
      const t = new mw.Title(title), ns = t.getNamespaceId();
      if (ns % 2 || isDoc(title)) {
        return ["wikitext", ns];
      }
      const mode = (_ref = (_EXTS$get = EXTS.get((_t$getExtension$toLow = (_t$getExtension = t.getExtension()) === null || _t$getExtension === void 0 ? void 0 : _t$getExtension.toLowerCase()) !== null && _t$getExtension$toLow !== void 0 ? _t$getExtension$toLow : "")) !== null && _EXTS$get !== void 0 ? _EXTS$get : NAMESPACES[ns]) !== null && _ref !== void 0 ? _ref : "wikitext";
      return [mode === "css" && ![2, 8, 2300].includes(ns) ? "sanitized-css" : mode, ns];
    };
    getModeFromValue = /* @__PURE__ */ (function() {
      var _ref2 = _asyncToGenerator(function* (value) {
        const {
          wgPageName: pageName,
          wgNamespaceNumber: nsid,
          wgPageContentModel: contentmodel,
          wgArticleId: id
        } = mw.config.get();
        let WikiplusPages;
        if (typeof _WikiplusPages === "object" && isGlobal("_WikiplusPages")) {
          WikiplusPages = _WikiplusPages;
        } else if (typeof Pages === "object" && isGlobal("Pages")) {
          WikiplusPages = Pages;
        }
        if (WikiplusPages) {
          yield mw.loader.using("mediawiki.Title");
          const pages = Object.values(WikiplusPages).filter(({
            sectionCache
          }) => Object.values(sectionCache).includes(value)), l = pages.length;
          if (l) {
            const params = pages.map(({
              title
            }) => getModeFromTitle(title, pageName, nsid, contentmodel, id)), [mode, ns] = params[0];
            if (l === 1) {
              return [mode, {
                ns,
                page: pages[0].title
              }];
            } else if (new Set(params.map(([x]) => x)).size === 1) {
              return [mode, new Set(params.map(([, y]) => y)).size === 1 ? {
                ns
              } : void 0];
            }
          }
        }
        if (nsid !== 274 && contentmodel !== "Scribunto" || isDoc(pageName)) {
          return [contentmodel.toLowerCase(), contentmodel === "wikitext" ? void 0 : {
            ns: nsid
          }];
        }
        yield mw.loader.using("oojs-ui-windows");
        return (yield OO.ui.confirm(mw.msg("cm-mw-contentmodel"), {
          actions: [{
            label: nsid === 274 ? "Widget" : "Lua"
          }, {
            label: "Wikitext",
            action: "accept"
          }]
        })) ? ["wikitext"] : [nsid === 274 ? "html" : "lua"];
      });
      return function getModeFromValue2(_x) {
        return _ref2.apply(this, arguments);
      };
    })();
    submit = /** 提交编辑 */
    () => {
      document.getElementById("Wikiplus-Quickedit-Submit").dispatchEvent(new PointerEvent("click"));
      return true;
    };
    submitMinor = /** 提交小编辑 */
    () => {
      document.querySelector("#Wikiplus-Quickedit-MinorEdit").checked = true;
      return submit();
    };
    escapeEdit = /** 按下Esc键退出编辑 */
    () => {
      const settings = getObject("Wikiplus_Settings"), escToExitQuickEdit = settings && (settings["esc_to_exit_quickedit"] || settings["escToExitQuickEdit"]);
      if (escToExitQuickEdit === true || escToExitQuickEdit === "true") {
        document.getElementById("Wikiplus-Quickedit-Back").dispatchEvent(new PointerEvent("click"));
        return true;
      }
      return false;
    };
    renderEditor = /* @__PURE__ */ (function() {
      var _ref3 = _asyncToGenerator(function* (target, setting) {
        var _cm$view$dom, _cm$view;
        const cm = yield CodeMirror6.fromTextArea(target, ...setting ? ["json"] : yield getModeFromValue(target.value));
        ((_cm$view$dom = (_cm$view = cm.view) === null || _cm$view === void 0 ? void 0 : _cm$view.dom) !== null && _cm$view$dom !== void 0 ? _cm$view$dom : cm.editor.getDomNode()).id = "Wikiplus-CodeMirror";
        if (!setting) {
          if (cm.editor) {
            cm.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
              submit();
            });
            cm.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyS, () => {
              submitMinor();
            });
            cm.editor.addCommand(monaco.KeyCode.Escape, () => {
              escapeEdit();
            });
          } else {
            cm.extraKeys([{
              key: "Mod-S",
              run: submit
            }, {
              key: "Shift-Mod-S",
              run: submitMinor
            }, {
              key: "Esc",
              run: escapeEdit
            }]);
          }
        }
        const jump = document.querySelector("#Wikiplus-Quickedit-Jump > a");
        if (jump) {
          jump.href = "#Wikiplus-CodeMirror";
        }
      });
      return function renderEditor2(_x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    })();
  }
});
//! src/Wikiplus-highlight/src/main.ts
var main_exports = {};
var init_main = __esm({
  "src/Wikiplus-highlight/src/main.ts"() {
    "use strict";
    init_core();
    /**
     * @name Wikiplus-highlight Wikiplus编辑器的CodeMirror语法高亮扩展
     * @author Bhsd <https://github.com/bhsd-harry>
     * @license GPL-3.0-or-later
     */
    _asyncToGenerator(function* () {
      if (!mw.config.get("wgIsArticle") || mw.config.get("wgAction") !== "view") {
        return;
      }
      const {
        libs
      } = mediaWiki, {
        wphl
      } = libs;
      if (!(wphl !== null && wphl !== void 0 && wphl.version)) {
        const version = "3.6.0";
        libs.wphl = {
          version,
          ...wphl
        };
        const CM_CDN = "https://gitcdn.qiuwen.net.cn/InterfaceAdmin/codemirror-mediawiki/raw/branch/npm/dist/mw.min.js?date=20261031&version=95b13c2208";
        if (typeof CodeMirror6 !== "function") {
          yield $.ajax(CM_CDN, {
            dataType: "script",
            cache: true
          });
        }
        Object.assign(CodeMirror6, {
          monacoVersion: wphl === null || wphl === void 0 ? void 0 : wphl.monacoVersion
        });
        const observer = new MutationObserver((records) => {
          var _CodeMirror6$instance;
          const selector = "#Wikiplus-Quickedit, #Wikiplus-Setting-Input", [added] = $(records.flatMap(({
            addedNodes
          }) => [...addedNodes])).find(selector);
          if (added) {
            void renderEditor(added, added.id === "Wikiplus-Setting-Input");
          }
          const [removed] = $(records.flatMap(({
            removedNodes
          }) => [...removedNodes])).find(selector);
          (_CodeMirror6$instance = CodeMirror6.instances.get(removed)) === null || _CodeMirror6$instance === void 0 || _CodeMirror6$instance.destroy();
        });
        observer.observe(document.body, {
          childList: true
        });
      }
    })();
  }
});
//! src/Wikiplus-highlight/Wikiplus-highlight.ts
var import_ext_gadget = require("ext.gadget.Util");
(function WikiplusHighlight() {
  const {
    wgAction,
    wgIsArticle
  } = mw.config.get();
  if (wgAction !== "view" || !wgIsArticle) {
    return;
  }
  if ("ontouchstart" in document) {
    return;
  }
  const loader = /* @__PURE__ */ (function() {
    var _ref5 = _asyncToGenerator(function* () {
      yield (0, import_ext_gadget.checkDependencies)("Wikiplus");
      const {
        "visualeditor-enable": isVeEnable
      } = mw.user.options.get();
      if (isVeEnable) {
        yield mw.loader.using("ext.visualEditor.core");
      }
      yield Promise.resolve().then(() => (init_main(), main_exports));
    });
    return function loader2() {
      return _ref5.apply(this, arguments);
    };
  })();
  void loader();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL0BiaHNkK2Jyb3dzZXJAMi4zLjBfY3Vsb3JpQDQuMC4yL25vZGVfbW9kdWxlcy9AYmhzZC9icm93c2VyL2Rpc3QvaW5kZXguanMiLCAic3JjL1dpa2lwbHVzLWhpZ2hsaWdodC9zcmMvY29yZS50cyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L3NyYy9tYWluLnRzIiwgInNyYy9XaWtpcGx1cy1oaWdobGlnaHQvV2lraXBsdXMtaGlnaGxpZ2h0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ2YXIgZGVmaW5lX0xBTkdTX2RlZmF1bHQgPSBbXCJ6aC1oYW5zXCIsIFwiemgtaGFudFwiXTtcbmltcG9ydCB7IHJhd3VybGRlY29kZSB9IGZyb20gXCJAYmhzZC9jb21tb25cIjtcbmNvbnN0IENETiA9IFwiaHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0XCI7XG5jb25zdCB0ZXh0YXJlYSA9IC8qIEBfX1BVUkVfXyAqLyAoKCkgPT4gdHlwZW9mIGRvY3VtZW50ID09PSBcIm9iamVjdFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpIDogdm9pZCAwKSgpO1xuY29uc3QgZGVjb2RlSFRNTCA9IChzdHIpID0+IHtcbiAgdGV4dGFyZWEuaW5uZXJIVE1MID0gc3RyO1xuICByZXR1cm4gdGV4dGFyZWEudmFsdWU7XG59O1xuY29uc3Qgbm9ybWFsaXplVGl0bGUgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgZGVjb2RlZCA9IHJhd3VybGRlY29kZSh0aXRsZSk7XG4gIHJldHVybiAvWzw+W1xcXXx7fV0vdS50ZXN0KGRlY29kZWQpID8gZGVjb2RlZCA6IGRlY29kZUhUTUwoZGVjb2RlZCk7XG59O1xuY29uc3QgbG9hZGluZyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5jb25zdCBsb2FkU2NyaXB0ID0gKHNyYywgZ2xvYmFsQ29uc3QsIGFtZCwgZXNtKSA9PiB7XG4gIGlmIChsb2FkaW5nLmhhcyhzcmMpKSB7XG4gICAgcmV0dXJuIGxvYWRpbmcuZ2V0KHNyYyk7XG4gIH1cbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IC9eaHR0cHM/OlxcL1xcLy9pdS50ZXN0KHNyYykgPyBzcmMgOiBgJHtDRE59LyR7c3JjfWA7XG4gICAgbGV0IG9iaiA9IGdsb2JhbFRoaXM7XG4gICAgZm9yIChjb25zdCBwcm9wIG9mIGdsb2JhbENvbnN0LnNwbGl0KFwiLlwiKSkge1xuICAgICAgb2JqID0gb2JqID09PSBnbG9iYWxUaGlzID8gZ2V0R2xvYmFsKHByb3ApIDogb2JqPy5bcHJvcF07XG4gICAgfVxuICAgIGlmIChvYmopIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9IGVsc2UgaWYgKGFtZCAmJiB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgXCJhbWRcIiBpbiBkZWZpbmUpIHtcbiAgICAgIGNvbnN0IHJlcXVpcmVqcyA9IGdsb2JhbFRoaXMucmVxdWlyZTtcbiAgICAgIHJlcXVpcmVqcy5jb25maWcoeyBwYXRoczogeyBbZ2xvYmFsQ29uc3RdOiBwYXRoIH0gfSk7XG4gICAgICByZXF1aXJlanMoW2dsb2JhbENvbnN0XSwgKGV4cG9ydHMpID0+IHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7IFtnbG9iYWxDb25zdF06IGV4cG9ydHMgfSk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgc2NyaXB0LnNyYyA9IHBhdGg7XG4gICAgICBpZiAoZXNtKSB7XG4gICAgICAgIHNjcmlwdC50eXBlID0gXCJtb2R1bGVcIjtcbiAgICAgIH1cbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChzY3JpcHQpO1xuICAgIH1cbiAgfSk7XG4gIGxvYWRpbmcuc2V0KHNyYywgcHJvbWlzZSk7XG4gIHJldHVybiBwcm9taXNlO1xufTtcbmNvbnN0IGdldE9iamVjdCA9IChrZXkpID0+IEpTT04ucGFyc2UoU3RyaW5nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpKTtcbmNvbnN0IHNldE9iamVjdCA9IChrZXksIHZhbHVlKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbn07XG5jb25zdCBwYXJzZVZlcnNpb24gPSAodmVyc2lvbikgPT4gdmVyc2lvbi5zcGxpdChcIi5cIiwgMykubWFwKE51bWJlcik7XG5jb25zdCBjb21wYXJlVmVyc2lvbiA9ICh2ZXJzaW9uLCBiYXNlVmVyc2lvbikgPT4ge1xuICBjb25zdCBbbWFqb3IsIG1pbm9yID0gMCwgcGF0Y2ggPSAwXSA9IHBhcnNlVmVyc2lvbih2ZXJzaW9uKSwgW2Jhc2VNYWpvciwgYmFzZU1pbm9yID0gMCwgYmFzZVBhdGNoID0gMF0gPSBwYXJzZVZlcnNpb24oYmFzZVZlcnNpb24pO1xuICByZXR1cm4gbWFqb3IgPiBiYXNlTWFqb3IgfHwgbWFqb3IgPT09IGJhc2VNYWpvciAmJiBtaW5vciA+IGJhc2VNaW5vciB8fCBtYWpvciA9PT0gYmFzZU1ham9yICYmIG1pbm9yID09PSBiYXNlTWlub3IgJiYgcGF0Y2ggPj0gYmFzZVBhdGNoO1xufTtcbmNvbnN0IHNldEkxOE4gPSBhc3luYyAodXJsLCBjdXIsIGxhbmd1YWdlcywgYWNjZXB0YWJsZUxhbmdzLCBrZXksIGkxOG4gPSBnZXRPYmplY3Qoa2V5KSA/PyB7fSkgPT4ge1xuICBjb25zdCB7IHZlcnNpb24sIGxhbmcgfSA9IGkxOG4sIGxhbmdzID0gQXJyYXkuaXNBcnJheShsYW5ndWFnZXMpID8gbGFuZ3VhZ2VzIDogW2xhbmd1YWdlc107XG4gIGlmICh2ZXJzaW9uID09PSBjdXIgJiYgbGFuZ3MuaW5jbHVkZXMobGFuZykpIHtcbiAgICByZXR1cm4gaTE4bjtcbiAgfVxuICBmb3IgKGNvbnN0IGxhbmd1YWdlIG9mIGxhbmdzKSB7XG4gICAgY29uc3QgbCA9IGxhbmd1YWdlLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKCFhY2NlcHRhYmxlTGFuZ3MuaW5jbHVkZXMobCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dXJsfS8ke2x9Lmpzb25gKTtcbiAgICAgIE9iamVjdC5hc3NpZ24oaTE4biwgYXdhaXQgcmVzLmpzb24oKSwgeyB2ZXJzaW9uOiBjdXIsIGxhbmc6IGxhbmd1YWdlIH0pO1xuICAgICAgc2V0T2JqZWN0KGtleSwgaTE4bik7XG4gICAgICByZXR1cm4gaTE4bjtcbiAgICB9IGNhdGNoIHtcbiAgICB9XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggdGhlIGxvY2FsaXphdGlvbiBmb3IgJHtsYW5nc1swXX0uYCk7XG59O1xubGV0IGNvbmZpZ0xvYWRlZCA9IGZhbHNlLCBpMThuTG9hZGVkID0gZmFsc2U7XG5jb25zdCBnZXRXaWtpcGFyc2UgPSBhc3luYyAoeyBnZXRDb25maWcsIGxhbmdzLCBjZG4gfSA9IHt9KSA9PiB7XG4gIGNvbnN0IHJlcG8gPSBcIm5wbS93aWtpcGFyc2VyLW5vZGVcIiwgZGlyID0gXCJleHRlbnNpb25zL2Rpc3RcIjtcbiAgaWYgKGNkbiAmJiAvXFwuanNkZWxpdnJcXC5uZXRcXC8/JC9pdS50ZXN0KGNkbikpIHtcbiAgICBjZG4gKz0gKGNkbi5lbmRzV2l0aChcIi9cIikgPyBcIlwiIDogXCIvXCIpICsgcmVwbztcbiAgfVxuICBsZXQgc3JjID0gY2RuIHx8IGAke3JlcG99LyR7ZGlyfS9iYXNlLm1pbi5qc2A7XG4gIGlmICghc3JjLmVuZHNXaXRoKFwiLmpzXCIpKSB7XG4gICAgc3JjICs9IGAke3NyYy5lbmRzV2l0aChcIi9cIikgPyBcIlwiIDogXCIvXCJ9JHtkaXJ9L2Jhc2UuanNgO1xuICB9XG4gIGF3YWl0IGxvYWRTY3JpcHQoc3JjLCBcIndpa2lwYXJzZVwiKTtcbiAgYXdhaXQgbG9hZFNjcmlwdChgJHt3aWtpcGFyc2UuQ0ROfS8ke2Rpcn0vbHNwLmpzYCwgXCJ3aWtpcGFyc2UuTGFuZ3VhZ2VTZXJ2aWNlXCIpO1xuICBpZiAoIWNvbmZpZ0xvYWRlZCAmJiB0eXBlb2YgZ2V0Q29uZmlnID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25maWdMb2FkZWQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICB3aWtpcGFyc2Uuc2V0Q29uZmlnKGF3YWl0IGdldENvbmZpZygpKTtcbiAgICB9IGNhdGNoIHtcbiAgICB9XG4gIH1cbiAgaWYgKCFpMThuTG9hZGVkICYmIGxhbmdzKSB7XG4gICAgaTE4bkxvYWRlZCA9IHRydWU7XG4gICAgY29uc3Qga2V5ID0gXCJ3aWtpcGFyc2UtaTE4blwiLCB7IHZlcnNpb24gfSA9IHdpa2lwYXJzZTtcbiAgICB0cnkge1xuICAgICAgd2lraXBhcnNlLnNldEkxOE4oYXdhaXQgc2V0STE4TihgJHt3aWtpcGFyc2UuQ0ROfS9pMThuYCwgdmVyc2lvbiwgbGFuZ3MsIGRlZmluZV9MQU5HU19kZWZhdWx0LCBrZXkpKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHNldE9iamVjdChrZXksIHsgdmVyc2lvbiwgbGFuZzogXCJlblwiIH0pO1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IGxzcHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGdldExTUCA9IChvYmosIGluY2x1ZGUsIG9wdCkgPT4ge1xuICB2b2lkIGdldFdpa2lwYXJzZShvcHQpO1xuICBpZiAodHlwZW9mIHdpa2lwYXJzZSAhPT0gXCJvYmplY3RcIiB8fCAhaXNHbG9iYWwoXCJ3aWtpcGFyc2VcIikgfHwgIXdpa2lwYXJzZS5MYW5ndWFnZVNlcnZpY2UgfHwgbHNwcy5oYXMob2JqKSkge1xuICAgIHJldHVybiBsc3BzLmdldChvYmopO1xuICB9XG4gIGNvbnN0IGxzcCA9IG5ldyB3aWtpcGFyc2UuTGFuZ3VhZ2VTZXJ2aWNlKGluY2x1ZGUpO1xuICBsc3BzLnNldChvYmosIGxzcCk7XG4gIHJldHVybiBsc3A7XG59O1xuY29uc3QgaXNHbG9iYWwgPSAocHJvcCkgPT4gT2JqZWN0Lmhhc093bihnbG9iYWxUaGlzLCBwcm9wKTtcbmNvbnN0IGdldEdsb2JhbCA9IChwcm9wKSA9PiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGdsb2JhbFRoaXMsIHByb3ApPy52YWx1ZTtcbmV4cG9ydCB7XG4gIENETixcbiAgY29tcGFyZVZlcnNpb24sXG4gIGRlY29kZUhUTUwsXG4gIGdldEdsb2JhbCxcbiAgZ2V0TFNQLFxuICBnZXRPYmplY3QsXG4gIGdldFdpa2lwYXJzZSxcbiAgaXNHbG9iYWwsXG4gIGxvYWRTY3JpcHQsXG4gIG5vcm1hbGl6ZVRpdGxlLFxuICBzZXRJMThOLFxuICBzZXRPYmplY3Rcbn07XG4iLCAiaW1wb3J0IHtnZXRPYmplY3QsIGlzR2xvYmFsfSBmcm9tICdAYmhzZC9icm93c2VyJztcbmltcG9ydCB0eXBlIHtDb2RlTWlycm9yT3B0aW9uc30gZnJvbSAnQGJoc2QvY29kZW1pcnJvci1tZWRpYXdpa2kvbXdDb25maWcnO1xuXG5jb25zdCBFWFRTID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oW1xuXHRcdFsnY3NzJywgJ2NzcyddLFxuXHRcdFsnanMnLCAnamF2YXNjcmlwdCddLFxuXHRcdFsnanNvbicsICdqc29uJ10sXG5cdF0pLFxuXHROQU1FU1BBQ0VTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuXHRcdDgyODogJ2x1YScsXG5cdFx0Mjc0OiAnaHRtbCcsXG5cdH07XG5cbmNvbnN0IGlzRG9jID0gKHRpdGxlOiBzdHJpbmcpOiBib29sZWFuID0+IHRpdGxlLmVuZHNXaXRoKCcvZG9jJyk7XG5cbi8qKlxuICog5qC55o2u6aG16Z2i5qCH6aKY6I635Y+W6K+t6KiA5qih5Z6LXG4gKiBAcGFyYW0gdGl0bGUg6aG16Z2i5qCH6aKYXG4gKiBAcGFyYW0gcGFnZU5hbWUgd2dQYWdlTmFtZVxuICogQHBhcmFtIG5zaWQgd2dOYW1lc3BhY2VOdW1iZXJcbiAqIEBwYXJhbSBjb250ZW50bW9kZWwgd2dQYWdlQ29udGVudE1vZGVsXG4gKiBAcGFyYW0gaWQgd2dBcnRpY2xlSWRcbiAqL1xuY29uc3QgZ2V0TW9kZUZyb21UaXRsZSA9IChcblx0dGl0bGU6IHN0cmluZyxcblx0cGFnZU5hbWU6IHN0cmluZyxcblx0bnNpZDogbnVtYmVyLFxuXHRjb250ZW50bW9kZWw6IHN0cmluZyxcblx0aWQ6IG51bWJlclxuKTogW3N0cmluZywgbnVtYmVyXSA9PiB7XG5cdGlmIChpZCAmJiBwYWdlTmFtZSA9PT0gdGl0bGUpIHtcblx0XHRyZXR1cm4gW2NvbnRlbnRtb2RlbC50b0xvd2VyQ2FzZSgpLCBuc2lkXTtcblx0fVxuXHRjb25zdCB0ID0gbmV3IG13LlRpdGxlKHRpdGxlKSxcblx0XHRucyA9IHQuZ2V0TmFtZXNwYWNlSWQoKTtcblx0aWYgKG5zICUgMiB8fCBpc0RvYyh0aXRsZSkpIHtcblx0XHRyZXR1cm4gWyd3aWtpdGV4dCcsIG5zXTtcblx0fVxuXHRjb25zdCBtb2RlID0gRVhUUy5nZXQodC5nZXRFeHRlbnNpb24oKT8udG9Mb3dlckNhc2UoKSA/PyAnJykgPz8gTkFNRVNQQUNFU1tuc10gPz8gJ3dpa2l0ZXh0Jztcblx0cmV0dXJuIFttb2RlID09PSAnY3NzJyAmJiAhWzIsIDgsIDIzMDBdLmluY2x1ZGVzKG5zKSA/ICdzYW5pdGl6ZWQtY3NzJyA6IG1vZGUsIG5zXTtcbn07XG5cbi8qKlxuICog5qC55o2u6aG16Z2i5YaF5a656I635Y+W6K+t6KiA5qih5Z6LXG4gKiBAcGFyYW0gdmFsdWUg6aG16Z2i5YaF5a65XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRNb2RlRnJvbVZhbHVlID0gYXN5bmMgKHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPFtzdHJpbmcsIChDb2RlTWlycm9yT3B0aW9ucyB8IHVuZGVmaW5lZCk/XT4gPT4ge1xuXHRjb25zdCB7XG5cdFx0d2dQYWdlTmFtZTogcGFnZU5hbWUsXG5cdFx0d2dOYW1lc3BhY2VOdW1iZXI6IG5zaWQsXG5cdFx0d2dQYWdlQ29udGVudE1vZGVsOiBjb250ZW50bW9kZWwsXG5cdFx0d2dBcnRpY2xlSWQ6IGlkLFxuXHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRsZXQgV2lraXBsdXNQYWdlcztcblx0aWYgKHR5cGVvZiBfV2lraXBsdXNQYWdlcyA9PT0gJ29iamVjdCcgJiYgaXNHbG9iYWwoJ19XaWtpcGx1c1BhZ2VzJykpIHtcblx0XHRXaWtpcGx1c1BhZ2VzID0gX1dpa2lwbHVzUGFnZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIFBhZ2VzID09PSAnb2JqZWN0JyAmJiBpc0dsb2JhbCgnUGFnZXMnKSkge1xuXHRcdFdpa2lwbHVzUGFnZXMgPSBQYWdlcztcblx0fVxuXHRpZiAoV2lraXBsdXNQYWdlcykge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnbWVkaWF3aWtpLlRpdGxlJyk7XG5cdFx0Y29uc3QgcGFnZXMgPSBPYmplY3QudmFsdWVzKFdpa2lwbHVzUGFnZXMpLmZpbHRlcigoe3NlY3Rpb25DYWNoZX0pID0+XG5cdFx0XHRcdE9iamVjdC52YWx1ZXMoc2VjdGlvbkNhY2hlKS5pbmNsdWRlcyh2YWx1ZSlcblx0XHRcdCksXG5cdFx0XHRsID0gcGFnZXMubGVuZ3RoO1xuXHRcdGlmIChsKSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBwYWdlcy5tYXAoKHt0aXRsZX0pID0+IGdldE1vZGVGcm9tVGl0bGUodGl0bGUsIHBhZ2VOYW1lLCBuc2lkLCBjb250ZW50bW9kZWwsIGlkKSksXG5cdFx0XHRcdFttb2RlLCBuc10gPSBwYXJhbXNbMF0hO1xuXHRcdFx0aWYgKGwgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIFttb2RlLCB7bnMsIHBhZ2U6IHBhZ2VzWzBdIS50aXRsZX1dO1xuXHRcdFx0fSBlbHNlIGlmIChuZXcgU2V0KHBhcmFtcy5tYXAoKFt4XSkgPT4geCkpLnNpemUgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIFttb2RlLCBuZXcgU2V0KHBhcmFtcy5tYXAoKFssIHldKSA9PiB5KSkuc2l6ZSA9PT0gMSA/IHtuc30gOiB1bmRlZmluZWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRpZiAoKG5zaWQgIT09IDI3NCAmJiBjb250ZW50bW9kZWwgIT09ICdTY3JpYnVudG8nKSB8fCBpc0RvYyhwYWdlTmFtZSkpIHtcblx0XHRyZXR1cm4gW2NvbnRlbnRtb2RlbC50b0xvd2VyQ2FzZSgpLCBjb250ZW50bW9kZWwgPT09ICd3aWtpdGV4dCcgPyB1bmRlZmluZWQgOiB7bnM6IG5zaWR9XTtcblx0fVxuXHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ29vanMtdWktd2luZG93cycpO1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRyZXR1cm4gKGF3YWl0IE9PLnVpLmNvbmZpcm0obXcubXNnKCdjbS1tdy1jb250ZW50bW9kZWwnKSwge1xuXHRcdGFjdGlvbnM6IFt7bGFiZWw6IG5zaWQgPT09IDI3NCA/ICdXaWRnZXQnIDogJ0x1YSd9LCB7bGFiZWw6ICdXaWtpdGV4dCcsIGFjdGlvbjogJ2FjY2VwdCd9XSxcblx0fSkpXG5cdFx0PyBbJ3dpa2l0ZXh0J11cblx0XHQ6IFtuc2lkID09PSAyNzQgPyAnaHRtbCcgOiAnbHVhJ107XG59O1xuXG5jb25zdCBzdWJtaXQgPSAvKiog5o+Q5Lqk57yW6L6RICovICgpOiB0cnVlID0+IHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpIS5kaXNwYXRjaEV2ZW50KG5ldyBQb2ludGVyRXZlbnQoJ2NsaWNrJykpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHRzdWJtaXRNaW5vciA9IC8qKiDmj5DkuqTlsI/nvJbovpEgKi8gKCk6IHRydWUgPT4ge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0JykhLmNoZWNrZWQgPSB0cnVlO1xuXHRcdHJldHVybiBzdWJtaXQoKTtcblx0fSxcblx0ZXNjYXBlRWRpdCA9IC8qKiDmjInkuItFc2PplK7pgIDlh7rnvJbovpEgKi8gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdGNvbnN0IHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGwgPSBnZXRPYmplY3QoJ1dpa2lwbHVzX1NldHRpbmdzJyksXG5cdFx0XHRlc2NUb0V4aXRRdWlja0VkaXQgPSBzZXR0aW5ncyAmJiAoc2V0dGluZ3NbJ2VzY190b19leGl0X3F1aWNrZWRpdCddIHx8IHNldHRpbmdzWydlc2NUb0V4aXRRdWlja0VkaXQnXSk7XG5cdFx0aWYgKGVzY1RvRXhpdFF1aWNrRWRpdCA9PT0gdHJ1ZSB8fCBlc2NUb0V4aXRRdWlja0VkaXQgPT09ICd0cnVlJykge1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJykhLmRpc3BhdGNoRXZlbnQobmV3IFBvaW50ZXJFdmVudCgnY2xpY2snKSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG4vKipcbiAqIOa4suafk+e8lui+keWZqFxuICogQHBhcmFtIHRhcmdldCDnm67moIfnvJbovpHmoYZcbiAqIEBwYXJhbSBzZXR0aW5nIOaYr+WQpuaYr1dpa2lwbHVz6K6+572u77yI5L2/55SoanNvbuivreazle+8iVxuICovXG5leHBvcnQgY29uc3QgcmVuZGVyRWRpdG9yID0gYXN5bmMgKHRhcmdldDogSFRNTFRleHRBcmVhRWxlbWVudCwgc2V0dGluZzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBjbSA9IGF3YWl0IENvZGVNaXJyb3I2LmZyb21UZXh0QXJlYShcblx0XHR0YXJnZXQsXG5cdFx0Li4uKHNldHRpbmcgPyAoWydqc29uJ10gc2F0aXNmaWVzIFtzdHJpbmddKSA6IGF3YWl0IGdldE1vZGVGcm9tVmFsdWUodGFyZ2V0LnZhbHVlKSlcblx0KTtcblx0KGNtLnZpZXc/LmRvbSA/PyBjbS5lZGl0b3IhLmdldERvbU5vZGUoKSEpLmlkID0gJ1dpa2lwbHVzLUNvZGVNaXJyb3InO1xuXG5cdGlmICghc2V0dGluZykge1xuXHRcdC8vIOaZrumAmldpa2lwbHVz57yW6L6R5Yy6XG5cdFx0aWYgKGNtLmVkaXRvcikge1xuXHRcdFx0Y20uZWRpdG9yLmFkZENvbW1hbmQobW9uYWNvLktleU1vZC5DdHJsQ21kIHwgbW9uYWNvLktleUNvZGUuS2V5UywgKCkgPT4ge1xuXHRcdFx0XHRzdWJtaXQoKTtcblx0XHRcdH0pO1xuXHRcdFx0Y20uZWRpdG9yLmFkZENvbW1hbmQobW9uYWNvLktleU1vZC5DdHJsQ21kIHwgbW9uYWNvLktleU1vZC5TaGlmdCB8IG1vbmFjby5LZXlDb2RlLktleVMsICgpID0+IHtcblx0XHRcdFx0c3VibWl0TWlub3IoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRjbS5lZGl0b3IuYWRkQ29tbWFuZChtb25hY28uS2V5Q29kZS5Fc2NhcGUsICgpID0+IHtcblx0XHRcdFx0ZXNjYXBlRWRpdCgpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNtLmV4dHJhS2V5cyhbXG5cdFx0XHRcdHtrZXk6ICdNb2QtUycsIHJ1bjogc3VibWl0fSxcblx0XHRcdFx0e2tleTogJ1NoaWZ0LU1vZC1TJywgcnVuOiBzdWJtaXRNaW5vcn0sXG5cdFx0XHRcdHtrZXk6ICdFc2MnLCBydW46IGVzY2FwZUVkaXR9LFxuXHRcdFx0XSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QganVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEFuY2hvckVsZW1lbnQ+KCcjV2lraXBsdXMtUXVpY2tlZGl0LUp1bXAgPiBhJyk7XG5cdGlmIChqdW1wKSB7XG5cdFx0anVtcC5ocmVmID0gJyNXaWtpcGx1cy1Db2RlTWlycm9yJztcblx0fVxufTtcbiIsICIvKipcbiAqIEBuYW1lIFdpa2lwbHVzLWhpZ2hsaWdodCBXaWtpcGx1c+e8lui+keWZqOeahENvZGVNaXJyb3Lor63ms5Xpq5jkuq7mianlsZVcbiAqIEBhdXRob3IgQmhzZCA8aHR0cHM6Ly9naXRodWIuY29tL2Joc2QtaGFycnk+XG4gKiBAbGljZW5zZSBHUEwtMy4wLW9yLWxhdGVyXG4gKi9cbmltcG9ydCB7cmVuZGVyRWRpdG9yfSBmcm9tICcuL2NvcmUnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZVxuZGVjbGFyZSBuYW1lc3BhY2UgbWVkaWFXaWtpLmxpYnMge1xuXHRsZXQgd3BobDoge3ZlcnNpb24/OiBzdHJpbmc7IGNtVmVyc2lvbj86IHN0cmluZzsgbW9uYWNvVmVyc2lvbj86IHN0cmluZzsgQ0ROPzogc3RyaW5nfSB8IHVuZGVmaW5lZDtcbn1cblxuKGFzeW5jICgpID0+IHtcblx0aWYgKCFtdy5jb25maWcuZ2V0KCd3Z0lzQXJ0aWNsZScpIHx8IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykgIT09ICd2aWV3Jykge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCB7bGlic30gPSBtZWRpYVdpa2ksXG5cdFx0e3dwaGx9ID0gbGlicztcblx0aWYgKCF3cGhsPy52ZXJzaW9uKSB7XG5cdFx0Y29uc3QgdmVyc2lvbiA9ICczLjYuMCc7XG5cdFx0bGlicy53cGhsID0ge3ZlcnNpb24sIC4uLndwaGx9OyAvLyDlvIDlp4vliqDovb1cblxuXHRcdC8vIOi3r+W+hFxuXHRcdGNvbnN0IENNX0NETiA9XG5cdFx0XHQnaHR0cHM6Ly9naXRjZG4ucWl1d2VuLm5ldC5jbi9JbnRlcmZhY2VBZG1pbi9jb2RlbWlycm9yLW1lZGlhd2lraS9yYXcvYnJhbmNoL25wbS9kaXN0L213Lm1pbi5qcz9kYXRlPTIwMjYxMDMxJnZlcnNpb249OTViMTNjMjIwOCc7XG5cblx0XHRpZiAodHlwZW9mIENvZGVNaXJyb3I2ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRhd2FpdCAkLmFqYXgoQ01fQ0ROLCB7ZGF0YVR5cGU6ICdzY3JpcHQnLCBjYWNoZTogdHJ1ZX0pO1xuXHRcdH1cblx0XHRPYmplY3QuYXNzaWduKENvZGVNaXJyb3I2ISwge1xuXHRcdFx0bW9uYWNvVmVyc2lvbjogd3BobD8ubW9uYWNvVmVyc2lvbixcblx0XHR9KTtcblxuXHRcdC8vIOebkeinhiBXaWtpcGx1cyDnvJbovpHmoYZcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChyZWNvcmRzKSA9PiB7XG5cdFx0XHRjb25zdCBzZWxlY3RvciA9ICcjV2lraXBsdXMtUXVpY2tlZGl0LCAjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcsXG5cdFx0XHRcdFthZGRlZF0gPSAkKHJlY29yZHMuZmxhdE1hcCgoe2FkZGVkTm9kZXN9KSA9PiBbLi4uYWRkZWROb2Rlc10pKS5maW5kPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KHNlbGVjdG9yKTtcblx0XHRcdGlmIChhZGRlZCkge1xuXHRcdFx0XHR2b2lkIHJlbmRlckVkaXRvcihhZGRlZCwgYWRkZWQuaWQgPT09ICdXaWtpcGx1cy1TZXR0aW5nLUlucHV0Jyk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbcmVtb3ZlZF0gPSAkKHJlY29yZHMuZmxhdE1hcCgoe3JlbW92ZWROb2Rlc30pID0+IFsuLi5yZW1vdmVkTm9kZXNdKSkuZmluZDxIVE1MVGV4dEFyZWFFbGVtZW50Pihcblx0XHRcdFx0c2VsZWN0b3Jcblx0XHRcdCk7XG5cdFx0XHRDb2RlTWlycm9yNi5pbnN0YW5jZXMuZ2V0KHJlbW92ZWQhKT8uZGVzdHJveSgpO1xuXHRcdH0pO1xuXHRcdG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xuXHR9XG59KSgpO1xuXG5leHBvcnQge307XG4iLCAiaW1wb3J0ICcuL3N0eWxlLmxlc3MnO1xuaW1wb3J0IHtjaGVja0RlcGVuZGVuY2llc30gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuKGZ1bmN0aW9uIFdpa2lwbHVzSGlnaGxpZ2h0KCkge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnSXNBcnRpY2xlfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnSXNBcnRpY2xlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbG9hZGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGF3YWl0IGNoZWNrRGVwZW5kZW5jaWVzKCdXaWtpcGx1cycpO1xuXG5cdFx0Y29uc3Qgeyd2aXN1YWxlZGl0b3ItZW5hYmxlJzogaXNWZUVuYWJsZX0gPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCkgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cblx0XHQvKiBzZWUgPGh0dHBzOi8vZ2l0aHViLmNvbS9XaWtpcGx1cy9XaWtpcGx1cy9pc3N1ZXMvNjU+ICovXG5cdFx0aWYgKGlzVmVFbmFibGUpIHtcblx0XHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LnZpc3VhbEVkaXRvci5jb3JlJyk7XG5cdFx0fVxuXG5cdFx0YXdhaXQgaW1wb3J0KCcuL3NyYy9tYWluJyk7XG5cdH07XG5cblx0dm9pZCBsb2FkZXIoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQStDTUE7QUEvQ04sSUFtSE1DO0FBbkhOLElBQUFDLFlBQUFDLE1BQUE7RUFBQSxpR0FBQTtBQStDTUgsZ0JBQWFJLFNBQVFDLEtBQUtDLE1BQU1DLE9BQU9DLGFBQWFDLFFBQVFMLEdBQUcsQ0FBQyxDQUFDO0FBb0VqRUgsZUFBWVMsVUFBU0MsT0FBT0MsT0FBT0MsWUFBWUgsSUFBSTtFQUFBO0FBQUEsQ0FBQTs7QUNuSHpELElBR01JO0FBSE4sSUFRQ0M7QUFSRCxJQWFNQztBQWJOLElBdUJNQztBQXZCTixJQThDYUM7QUE5Q2IsSUF1Rk1DO0FBdkZOLElBMkZDQztBQTNGRCxJQStGQ0M7QUEvRkQsSUE4R2FDO0FBOUdiLElBQUFDLFlBQUFwQixNQUFBO0VBQUEsdUNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBR01ZLFdBQU8sb0JBQUlVLElBQW9CLENBQ25DLENBQUMsT0FBTyxLQUFLLEdBQ2IsQ0FBQyxNQUFNLFlBQVksR0FDbkIsQ0FBQyxRQUFRLE1BQU0sQ0FBQSxDQUNmO0FBQ0RULGlCQUFxQztNQUNwQyxLQUFLO01BQ0wsS0FBSztJQUNOO0FBRUtDLFlBQVNTLFdBQTJCQSxNQUFNQyxTQUFTLE1BQU07QUFVekRULHVCQUFtQkEsQ0FDeEJRLE9BQ0FFLFVBQ0FDLE1BQ0FDLGNBQ0FDLE9BQ3NCO0FBQUEsVUFBQUMsTUFBQUMsV0FBQUMsdUJBQUFDO0FBQ3RCLFVBQUlKLE1BQU1ILGFBQWFGLE9BQU87QUFDN0IsZUFBTyxDQUFDSSxhQUFhTSxZQUFZLEdBQUdQLElBQUk7TUFDekM7QUFDQSxZQUFNUSxJQUFJLElBQUlDLEdBQUdDLE1BQU1iLEtBQUssR0FDM0JjLEtBQUtILEVBQUVJLGVBQWU7QUFDdkIsVUFBSUQsS0FBSyxLQUFLdkIsTUFBTVMsS0FBSyxHQUFHO0FBQzNCLGVBQU8sQ0FBQyxZQUFZYyxFQUFFO01BQ3ZCO0FBQ0EsWUFBTUUsUUFBQVYsUUFBQUMsWUFBT2xCLEtBQUs0QixLQUFBVCx5QkFBQUMsa0JBQUlFLEVBQUVPLGFBQWEsT0FBQSxRQUFBVCxvQkFBQSxTQUFBLFNBQWZBLGdCQUFrQkMsWUFBWSxPQUFBLFFBQUFGLDBCQUFBLFNBQUFBLHdCQUFLLEVBQUUsT0FBQSxRQUFBRCxjQUFBLFNBQUFBLFlBQUtqQixXQUFXd0IsRUFBRSxPQUFBLFFBQUFSLFNBQUEsU0FBQUEsT0FBSztBQUNsRixhQUFPLENBQUNVLFNBQVMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRUcsU0FBU0wsRUFBRSxJQUFJLGtCQUFrQkUsTUFBTUYsRUFBRTtJQUNsRjtBQU1hckIsdUJBQUEsNEJBQUE7QUFBQSxVQUFBMkIsUUFBQUMsa0JBQW1CLFdBQU9DLE9BQXVFO0FBQzdHLGNBQU07VUFDTEMsWUFBWXJCO1VBQ1pzQixtQkFBbUJyQjtVQUNuQnNCLG9CQUFvQnJCO1VBQ3BCc0IsYUFBYXJCO1FBQ2QsSUFBSU8sR0FBR2UsT0FBT1YsSUFBSTtBQUNsQixZQUFJVztBQUNKLFlBQUksT0FBT0MsbUJBQW1CLFlBQVlyRCxTQUFTLGdCQUFnQixHQUFHO0FBQ3JFb0QsMEJBQWdCQztRQUNqQixXQUFXLE9BQU9DLFVBQVUsWUFBWXRELFNBQVMsT0FBTyxHQUFHO0FBQzFEb0QsMEJBQWdCRTtRQUNqQjtBQUNBLFlBQUlGLGVBQWU7QUFDbEIsZ0JBQU1oQixHQUFHbUIsT0FBT0MsTUFBTSxpQkFBaUI7QUFDdkMsZ0JBQU1DLFFBQVEvQyxPQUFPZ0QsT0FBT04sYUFBYSxFQUFFTyxPQUFPLENBQUM7WUFBQ0M7VUFBWSxNQUM5RGxELE9BQU9nRCxPQUFPRSxZQUFZLEVBQUVqQixTQUFTRyxLQUFLLENBQzNDLEdBQ0FlLElBQUlKLE1BQU1LO0FBQ1gsY0FBSUQsR0FBRztBQUNOLGtCQUFNRSxTQUFTTixNQUFNTyxJQUFJLENBQUM7Y0FBQ3hDO1lBQUssTUFBTVIsaUJBQWlCUSxPQUFPRSxVQUFVQyxNQUFNQyxjQUFjQyxFQUFFLENBQUMsR0FDOUYsQ0FBQ1csTUFBTUYsRUFBRSxJQUFJeUIsT0FBTyxDQUFDO0FBQ3RCLGdCQUFJRixNQUFNLEdBQUc7QUFDWixxQkFBTyxDQUFDckIsTUFBTTtnQkFBQ0Y7Z0JBQUkyQixNQUFNUixNQUFNLENBQUMsRUFBR2pDO2NBQUssQ0FBQztZQUMxQyxXQUFXLElBQUkwQyxJQUFJSCxPQUFPQyxJQUFJLENBQUMsQ0FBQ0csQ0FBQyxNQUFNQSxDQUFDLENBQUMsRUFBRUMsU0FBUyxHQUFHO0FBQ3RELHFCQUFPLENBQUM1QixNQUFNLElBQUkwQixJQUFJSCxPQUFPQyxJQUFJLENBQUMsQ0FBQSxFQUFHSyxDQUFDLE1BQU1BLENBQUMsQ0FBQyxFQUFFRCxTQUFTLElBQUk7Z0JBQUM5QjtjQUFFLElBQUksTUFBUztZQUM5RTtVQUNEO1FBQ0Q7QUFDQSxZQUFLWCxTQUFTLE9BQU9DLGlCQUFpQixlQUFnQmIsTUFBTVcsUUFBUSxHQUFHO0FBQ3RFLGlCQUFPLENBQUNFLGFBQWFNLFlBQVksR0FBR04saUJBQWlCLGFBQWEsU0FBWTtZQUFDVSxJQUFJWDtVQUFJLENBQUM7UUFDekY7QUFDQSxjQUFNUyxHQUFHbUIsT0FBT0MsTUFBTSxpQkFBaUI7QUFFdkMsZ0JBQVEsTUFBTWMsR0FBR0MsR0FBR0MsUUFBUXBDLEdBQUdxQyxJQUFJLG9CQUFvQixHQUFHO1VBQ3pEQyxTQUFTLENBQUM7WUFBQ0MsT0FBT2hELFNBQVMsTUFBTSxXQUFXO1VBQUssR0FBRztZQUFDZ0QsT0FBTztZQUFZQyxRQUFRO1VBQVEsQ0FBQztRQUMxRixDQUFDLEtBQ0UsQ0FBQyxVQUFVLElBQ1gsQ0FBQ2pELFNBQVMsTUFBTSxTQUFTLEtBQUs7TUFDbEMsQ0FBQTtBQUFBLGFBQUEsU0F2Q2FWLGtCQUFBNEQsSUFBQTtBQUFBLGVBQUFqQyxNQUFBa0MsTUFBQSxNQUFBQyxTQUFBO01BQUE7SUFBQSxHQUFBO0FBeUNQN0Q7SUFBcUJBLE1BQVk7QUFDckM4RCxlQUFTQyxlQUFlLDJCQUEyQixFQUFHQyxjQUFjLElBQUlDLGFBQWEsT0FBTyxDQUFDO0FBQzdGLGFBQU87SUFDUjtBQUNBaEU7SUFBMkJBLE1BQVk7QUFDdEM2RCxlQUFTSSxjQUFnQywrQkFBK0IsRUFBR0MsVUFBVTtBQUNyRixhQUFPbkUsT0FBTztJQUNmO0FBQ0FFO0lBQStCQSxNQUFlO0FBQzdDLFlBQU1rRSxXQUEyQ3ZGLFVBQVUsbUJBQW1CLEdBQzdFd0YscUJBQXFCRCxhQUFhQSxTQUFTLHVCQUF1QixLQUFLQSxTQUFTLG9CQUFvQjtBQUNyRyxVQUFJQyx1QkFBdUIsUUFBUUEsdUJBQXVCLFFBQVE7QUFDakVQLGlCQUFTQyxlQUFlLHlCQUF5QixFQUFHQyxjQUFjLElBQUlDLGFBQWEsT0FBTyxDQUFDO0FBQzNGLGVBQU87TUFDUjtBQUNBLGFBQU87SUFDUjtBQU9ZOUQsbUJBQUEsNEJBQUE7QUFBQSxVQUFBbUUsUUFBQTNDLGtCQUFlLFdBQU80QyxRQUE2QkMsU0FBb0M7QUFBQSxZQUFBQyxjQUFBQztBQUNuRyxjQUFNQyxLQUFBLE1BQVdDLFlBQVlDLGFBQzVCTixRQUNBLEdBQUlDLFVBQVcsQ0FBQyxNQUFNLElBQUEsTUFBOEJ6RSxpQkFBaUJ3RSxPQUFPM0MsS0FBSyxDQUNsRjtBQUNBLFVBQUE2QyxnQkFBQUMsV0FBQ0MsR0FBR0csVUFBQSxRQUFBSixhQUFBLFNBQUEsU0FBSEEsU0FBU0ssU0FBQSxRQUFBTixpQkFBQSxTQUFBQSxlQUFPRSxHQUFHSyxPQUFRQyxXQUFXLEdBQUl0RSxLQUFLO0FBRWhELFlBQUksQ0FBQzZELFNBQVM7QUFFYixjQUFJRyxHQUFHSyxRQUFRO0FBQ2RMLGVBQUdLLE9BQU9FLFdBQVdDLE9BQU9DLE9BQU9DLFVBQVVGLE9BQU9HLFFBQVFDLE1BQU0sTUFBTTtBQUN2RXZGLHFCQUFPO1lBQ1IsQ0FBQztBQUNEMkUsZUFBR0ssT0FBT0UsV0FBV0MsT0FBT0MsT0FBT0MsVUFBVUYsT0FBT0MsT0FBT0ksUUFBUUwsT0FBT0csUUFBUUMsTUFBTSxNQUFNO0FBQzdGdEYsMEJBQVk7WUFDYixDQUFDO0FBRUQwRSxlQUFHSyxPQUFPRSxXQUFXQyxPQUFPRyxRQUFRRyxRQUFRLE1BQU07QUFDakR2Rix5QkFBVztZQUNaLENBQUM7VUFDRixPQUFPO0FBQ055RSxlQUFHZSxVQUFVLENBQ1o7Y0FBQ3pHLEtBQUs7Y0FBUzBHLEtBQUszRjtZQUFNLEdBQzFCO2NBQUNmLEtBQUs7Y0FBZTBHLEtBQUsxRjtZQUFXLEdBQ3JDO2NBQUNoQixLQUFLO2NBQU8wRyxLQUFLekY7WUFBVSxDQUFBLENBQzVCO1VBQ0Y7UUFDRDtBQUVBLGNBQU0wRixPQUFPOUIsU0FBU0ksY0FBaUMsOEJBQThCO0FBQ3JGLFlBQUkwQixNQUFNO0FBQ1RBLGVBQUtDLE9BQU87UUFDYjtNQUNELENBQUE7QUFBQSxhQUFBLFNBakNhMUYsY0FBQTJGLEtBQUFDLEtBQUE7QUFBQSxlQUFBekIsTUFBQVYsTUFBQSxNQUFBQyxTQUFBO01BQUE7SUFBQSxHQUFBO0VBaUNiO0FBQUEsQ0FBQTs7QUMvSUEsSUFBQW1DLGVBQUEsQ0FBQTtBQUFBLElBQUFDLFlBQUFqSCxNQUFBO0VBQUEsdUNBQUE7QUFBQTtBQUtBb0IsY0FBQTtJQUxBOzs7OztBQVlBdUIsc0JBQUMsYUFBWTtBQUNaLFVBQUksQ0FBQ1QsR0FBR2UsT0FBT1YsSUFBSSxhQUFhLEtBQUtMLEdBQUdlLE9BQU9WLElBQUksVUFBVSxNQUFNLFFBQVE7QUFDMUU7TUFDRDtBQUNBLFlBQU07UUFBQzJFO01BQUksSUFBSUMsV0FDZDtRQUFDQztNQUFJLElBQUlGO0FBQ1YsVUFBSSxFQUFDRSxTQUFBLFFBQUFBLFNBQUEsVUFBQUEsS0FBTUMsVUFBUztBQUNuQixjQUFNQSxVQUFVO0FBQ2hCSCxhQUFLRSxPQUFPO1VBQUNDO1VBQVMsR0FBR0Q7UUFBSTtBQUc3QixjQUFNRSxTQUNMO0FBRUQsWUFBSSxPQUFPMUIsZ0JBQWdCLFlBQVk7QUFDdEMsZ0JBQU0yQixFQUFFQyxLQUFLRixRQUFRO1lBQUNHLFVBQVU7WUFBVUMsT0FBTztVQUFJLENBQUM7UUFDdkQ7QUFDQWxILGVBQU9tSCxPQUFPL0IsYUFBYztVQUMzQmdDLGVBQWVSLFNBQUEsUUFBQUEsU0FBQSxTQUFBLFNBQUFBLEtBQU1RO1FBQ3RCLENBQUM7QUFHRCxjQUFNQyxXQUFXLElBQUlDLGlCQUFrQkMsYUFBWTtBQUFBLGNBQUFDO0FBQ2xELGdCQUFNQyxXQUFXLGdEQUNoQixDQUFDQyxLQUFLLElBQUlYLEVBQUVRLFFBQVFJLFFBQVEsQ0FBQztZQUFDQztVQUFVLE1BQU0sQ0FBQyxHQUFHQSxVQUFVLENBQUMsQ0FBQyxFQUFFQyxLQUEwQkosUUFBUTtBQUNuRyxjQUFJQyxPQUFPO0FBQ1YsaUJBQUsvRyxhQUFhK0csT0FBT0EsTUFBTXZHLE9BQU8sd0JBQXdCO1VBQy9EO0FBQ0EsZ0JBQU0sQ0FBQzJHLE9BQU8sSUFBSWYsRUFBRVEsUUFBUUksUUFBUSxDQUFDO1lBQUNJO1VBQVksTUFBTSxDQUFDLEdBQUdBLFlBQVksQ0FBQyxDQUFDLEVBQUVGLEtBQzNFSixRQUNEO0FBQ0EsV0FBQUQsd0JBQUFwQyxZQUFZNEMsVUFBVWpHLElBQUkrRixPQUFRLE9BQUEsUUFBQU4sMEJBQUEsVUFBbENBLHNCQUFxQ1MsUUFBUTtRQUM5QyxDQUFDO0FBQ0RaLGlCQUFTYSxRQUFRNUQsU0FBUzZELE1BQU07VUFBQ0MsV0FBVztRQUFJLENBQUM7TUFDbEQ7SUFDRCxDQUFBLEVBQUc7RUFBQTtBQUFBLENBQUE7O0FDOUNILElBQUFDLG9CQUFnQ0MsUUFBQSxpQkFBQTtDQUUvQixTQUFTQyxvQkFBb0I7QUFDN0IsUUFBTTtJQUFDQztJQUFVQztFQUFXLElBQUkvRyxHQUFHZSxPQUFPVixJQUFJO0FBQzlDLE1BQUl5RyxhQUFhLFVBQVUsQ0FBQ0MsYUFBYTtBQUN4QztFQUNEO0FBRUEsTUFBSSxrQkFBa0JuRSxVQUFVO0FBQy9CO0VBQ0Q7QUFFQSxRQUFNekIsU0FBQSw0QkFBQTtBQUFBLFFBQUE2RixRQUFBdkcsa0JBQVMsYUFBMkI7QUFDekMsYUFBQSxHQUFNa0csa0JBQUFNLG1CQUFrQixVQUFVO0FBRWxDLFlBQU07UUFBQyx1QkFBdUJDO01BQVUsSUFBSWxILEdBQUdtSCxLQUFLQyxRQUFRL0csSUFBSTtBQUdoRSxVQUFJNkcsWUFBWTtBQUNmLGNBQU1sSCxHQUFHbUIsT0FBT0MsTUFBTSx1QkFBdUI7TUFDOUM7QUFFQSxZQUFNaUcsUUFBQUMsUUFBQSxFQUFBQyxLQUFBLE9BQUF4QyxVQUFBLEdBQUFELGFBQUE7SUFDUCxDQUFBO0FBQUEsV0FBQSxTQVhNM0QsVUFBQTtBQUFBLGFBQUE2RixNQUFBdEUsTUFBQSxNQUFBQyxTQUFBO0lBQUE7RUFBQSxHQUFBO0FBYU4sT0FBS3hCLE9BQU87QUFDYixHQUFHOyIsCiAgIm5hbWVzIjogWyJnZXRPYmplY3QiLCAiaXNHbG9iYWwiLCAiaW5pdF9kaXN0IiwgIl9fZXNtIiwgImtleSIsICJKU09OIiwgInBhcnNlIiwgIlN0cmluZyIsICJsb2NhbFN0b3JhZ2UiLCAiZ2V0SXRlbSIsICJwcm9wIiwgIk9iamVjdCIsICJoYXNPd24iLCAiZ2xvYmFsVGhpcyIsICJFWFRTIiwgIk5BTUVTUEFDRVMiLCAiaXNEb2MiLCAiZ2V0TW9kZUZyb21UaXRsZSIsICJnZXRNb2RlRnJvbVZhbHVlIiwgInN1Ym1pdCIsICJzdWJtaXRNaW5vciIsICJlc2NhcGVFZGl0IiwgInJlbmRlckVkaXRvciIsICJpbml0X2NvcmUiLCAiTWFwIiwgInRpdGxlIiwgImVuZHNXaXRoIiwgInBhZ2VOYW1lIiwgIm5zaWQiLCAiY29udGVudG1vZGVsIiwgImlkIiwgIl9yZWYiLCAiX0VYVFMkZ2V0IiwgIl90JGdldEV4dGVuc2lvbiR0b0xvdyIsICJfdCRnZXRFeHRlbnNpb24iLCAidG9Mb3dlckNhc2UiLCAidCIsICJtdyIsICJUaXRsZSIsICJucyIsICJnZXROYW1lc3BhY2VJZCIsICJtb2RlIiwgImdldCIsICJnZXRFeHRlbnNpb24iLCAiaW5jbHVkZXMiLCAiX3JlZjIiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidmFsdWUiLCAid2dQYWdlTmFtZSIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAid2dBcnRpY2xlSWQiLCAiY29uZmlnIiwgIldpa2lwbHVzUGFnZXMiLCAiX1dpa2lwbHVzUGFnZXMiLCAiUGFnZXMiLCAibG9hZGVyIiwgInVzaW5nIiwgInBhZ2VzIiwgInZhbHVlcyIsICJmaWx0ZXIiLCAic2VjdGlvbkNhY2hlIiwgImwiLCAibGVuZ3RoIiwgInBhcmFtcyIsICJtYXAiLCAicGFnZSIsICJTZXQiLCAieCIsICJzaXplIiwgInkiLCAiT08iLCAidWkiLCAiY29uZmlybSIsICJtc2ciLCAiYWN0aW9ucyIsICJsYWJlbCIsICJhY3Rpb24iLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImRvY3VtZW50IiwgImdldEVsZW1lbnRCeUlkIiwgImRpc3BhdGNoRXZlbnQiLCAiUG9pbnRlckV2ZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiY2hlY2tlZCIsICJzZXR0aW5ncyIsICJlc2NUb0V4aXRRdWlja0VkaXQiLCAiX3JlZjMiLCAidGFyZ2V0IiwgInNldHRpbmciLCAiX2NtJHZpZXckZG9tIiwgIl9jbSR2aWV3IiwgImNtIiwgIkNvZGVNaXJyb3I2IiwgImZyb21UZXh0QXJlYSIsICJ2aWV3IiwgImRvbSIsICJlZGl0b3IiLCAiZ2V0RG9tTm9kZSIsICJhZGRDb21tYW5kIiwgIm1vbmFjbyIsICJLZXlNb2QiLCAiQ3RybENtZCIsICJLZXlDb2RlIiwgIktleVMiLCAiU2hpZnQiLCAiRXNjYXBlIiwgImV4dHJhS2V5cyIsICJydW4iLCAianVtcCIsICJocmVmIiwgIl94MiIsICJfeDMiLCAibWFpbl9leHBvcnRzIiwgImluaXRfbWFpbiIsICJsaWJzIiwgIm1lZGlhV2lraSIsICJ3cGhsIiwgInZlcnNpb24iLCAiQ01fQ0ROIiwgIiQiLCAiYWpheCIsICJkYXRhVHlwZSIsICJjYWNoZSIsICJhc3NpZ24iLCAibW9uYWNvVmVyc2lvbiIsICJvYnNlcnZlciIsICJNdXRhdGlvbk9ic2VydmVyIiwgInJlY29yZHMiLCAiX0NvZGVNaXJyb3I2JGluc3RhbmNlIiwgInNlbGVjdG9yIiwgImFkZGVkIiwgImZsYXRNYXAiLCAiYWRkZWROb2RlcyIsICJmaW5kIiwgInJlbW92ZWQiLCAicmVtb3ZlZE5vZGVzIiwgImluc3RhbmNlcyIsICJkZXN0cm95IiwgIm9ic2VydmUiLCAiYm9keSIsICJjaGlsZExpc3QiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJXaWtpcGx1c0hpZ2hsaWdodCIsICJ3Z0FjdGlvbiIsICJ3Z0lzQXJ0aWNsZSIsICJfcmVmNSIsICJjaGVja0RlcGVuZGVuY2llcyIsICJpc1ZlRW5hYmxlIiwgInVzZXIiLCAib3B0aW9ucyIsICJQcm9taXNlIiwgInJlc29sdmUiLCAidGhlbiJdCn0K
