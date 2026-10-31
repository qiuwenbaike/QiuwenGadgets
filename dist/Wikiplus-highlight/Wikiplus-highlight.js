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
  "node_modules/.pnpm/@bhsd+browser@2.1.1_culori@4.0.2/node_modules/@bhsd/browser/dist/index.js"() {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL0BiaHNkK2Jyb3dzZXJAMi4xLjFfY3Vsb3JpQDQuMC4yL25vZGVfbW9kdWxlcy9AYmhzZC9icm93c2VyL2Rpc3QvaW5kZXguanMiLCAic3JjL1dpa2lwbHVzLWhpZ2hsaWdodC9zcmMvY29yZS50cyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L3NyYy9tYWluLnRzIiwgInNyYy9XaWtpcGx1cy1oaWdobGlnaHQvV2lraXBsdXMtaGlnaGxpZ2h0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ2YXIgZGVmaW5lX0xBTkdTX2RlZmF1bHQgPSBbXCJ6aC1oYW5zXCIsIFwiemgtaGFudFwiXTtcbmltcG9ydCB7IHJhd3VybGRlY29kZSB9IGZyb20gXCJAYmhzZC9jb21tb25cIjtcbmNvbnN0IENETiA9IFwiaHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0XCI7XG5jb25zdCB0ZXh0YXJlYSA9IC8qIEBfX1BVUkVfXyAqLyAoKCkgPT4gdHlwZW9mIGRvY3VtZW50ID09PSBcIm9iamVjdFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpIDogdm9pZCAwKSgpO1xuY29uc3QgZGVjb2RlSFRNTCA9IChzdHIpID0+IHtcbiAgdGV4dGFyZWEuaW5uZXJIVE1MID0gc3RyO1xuICByZXR1cm4gdGV4dGFyZWEudmFsdWU7XG59O1xuY29uc3Qgbm9ybWFsaXplVGl0bGUgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgZGVjb2RlZCA9IHJhd3VybGRlY29kZSh0aXRsZSk7XG4gIHJldHVybiAvWzw+W1xcXXx7fV0vdS50ZXN0KGRlY29kZWQpID8gZGVjb2RlZCA6IGRlY29kZUhUTUwoZGVjb2RlZCk7XG59O1xuY29uc3QgbG9hZGluZyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5jb25zdCBsb2FkU2NyaXB0ID0gKHNyYywgZ2xvYmFsQ29uc3QsIGFtZCkgPT4ge1xuICBpZiAobG9hZGluZy5oYXMoc3JjKSkge1xuICAgIHJldHVybiBsb2FkaW5nLmdldChzcmMpO1xuICB9XG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSAvXmh0dHBzPzpcXC9cXC8vaXUudGVzdChzcmMpID8gc3JjIDogYCR7Q0ROfS8ke3NyY31gO1xuICAgIGxldCBvYmogPSBnbG9iYWxUaGlzO1xuICAgIGZvciAoY29uc3QgcHJvcCBvZiBnbG9iYWxDb25zdC5zcGxpdChcIi5cIikpIHtcbiAgICAgIG9iaiA9IG9iaiA9PT0gZ2xvYmFsVGhpcyA/IGdldEdsb2JhbChwcm9wKSA6IG9iaj8uW3Byb3BdO1xuICAgIH1cbiAgICBpZiAob2JqKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSBlbHNlIGlmIChhbWQgJiYgdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIFwiYW1kXCIgaW4gZGVmaW5lKSB7XG4gICAgICBjb25zdCByZXF1aXJlanMgPSBnbG9iYWxUaGlzLnJlcXVpcmU7XG4gICAgICByZXF1aXJlanMuY29uZmlnKHsgcGF0aHM6IHsgW2dsb2JhbENvbnN0XTogcGF0aCB9IH0pO1xuICAgICAgcmVxdWlyZWpzKFtnbG9iYWxDb25zdF0sIChleHBvcnRzKSA9PiB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywgeyBbZ2xvYmFsQ29uc3RdOiBleHBvcnRzIH0pO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgIHNjcmlwdC5zcmMgPSBwYXRoO1xuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKHNjcmlwdCk7XG4gICAgfVxuICB9KTtcbiAgbG9hZGluZy5zZXQoc3JjLCBwcm9taXNlKTtcbiAgcmV0dXJuIHByb21pc2U7XG59O1xuY29uc3QgZ2V0T2JqZWN0ID0gKGtleSkgPT4gSlNPTi5wYXJzZShTdHJpbmcobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkpO1xuY29uc3Qgc2V0T2JqZWN0ID0gKGtleSwgdmFsdWUpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xufTtcbmNvbnN0IHBhcnNlVmVyc2lvbiA9ICh2ZXJzaW9uKSA9PiB2ZXJzaW9uLnNwbGl0KFwiLlwiLCAzKS5tYXAoTnVtYmVyKTtcbmNvbnN0IGNvbXBhcmVWZXJzaW9uID0gKHZlcnNpb24sIGJhc2VWZXJzaW9uKSA9PiB7XG4gIGNvbnN0IFttYWpvciwgbWlub3IgPSAwLCBwYXRjaCA9IDBdID0gcGFyc2VWZXJzaW9uKHZlcnNpb24pLCBbYmFzZU1ham9yLCBiYXNlTWlub3IgPSAwLCBiYXNlUGF0Y2ggPSAwXSA9IHBhcnNlVmVyc2lvbihiYXNlVmVyc2lvbik7XG4gIHJldHVybiBtYWpvciA+IGJhc2VNYWpvciB8fCBtYWpvciA9PT0gYmFzZU1ham9yICYmIG1pbm9yID4gYmFzZU1pbm9yIHx8IG1ham9yID09PSBiYXNlTWFqb3IgJiYgbWlub3IgPT09IGJhc2VNaW5vciAmJiBwYXRjaCA+PSBiYXNlUGF0Y2g7XG59O1xuY29uc3Qgc2V0STE4TiA9IGFzeW5jICh1cmwsIGN1ciwgbGFuZ3VhZ2VzLCBhY2NlcHRhYmxlTGFuZ3MsIGtleSwgaTE4biA9IGdldE9iamVjdChrZXkpID8/IHt9KSA9PiB7XG4gIGNvbnN0IHsgdmVyc2lvbiwgbGFuZyB9ID0gaTE4biwgbGFuZ3MgPSBBcnJheS5pc0FycmF5KGxhbmd1YWdlcykgPyBsYW5ndWFnZXMgOiBbbGFuZ3VhZ2VzXTtcbiAgaWYgKHZlcnNpb24gPT09IGN1ciAmJiBsYW5ncy5pbmNsdWRlcyhsYW5nKSkge1xuICAgIHJldHVybiBpMThuO1xuICB9XG4gIGZvciAoY29uc3QgbGFuZ3VhZ2Ugb2YgbGFuZ3MpIHtcbiAgICBjb25zdCBsID0gbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoIWFjY2VwdGFibGVMYW5ncy5pbmNsdWRlcyhsKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHt1cmx9LyR7bH0uanNvbmApO1xuICAgICAgT2JqZWN0LmFzc2lnbihpMThuLCBhd2FpdCByZXMuanNvbigpLCB7IHZlcnNpb246IGN1ciwgbGFuZzogbGFuZ3VhZ2UgfSk7XG4gICAgICBzZXRPYmplY3Qoa2V5LCBpMThuKTtcbiAgICAgIHJldHVybiBpMThuO1xuICAgIH0gY2F0Y2gge1xuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCB0aGUgbG9jYWxpemF0aW9uIGZvciAke2xhbmdzWzBdfS5gKTtcbn07XG5sZXQgY29uZmlnTG9hZGVkID0gZmFsc2UsIGkxOG5Mb2FkZWQgPSBmYWxzZTtcbmNvbnN0IGdldFdpa2lwYXJzZSA9IGFzeW5jICh7IGdldENvbmZpZywgbGFuZ3MsIGNkbiB9ID0ge30pID0+IHtcbiAgY29uc3QgcmVwbyA9IFwibnBtL3dpa2lwYXJzZXItbm9kZVwiLCBkaXIgPSBcImV4dGVuc2lvbnMvZGlzdFwiO1xuICBpZiAoY2RuICYmIC9cXC5qc2RlbGl2clxcLm5ldFxcLz8kL2l1LnRlc3QoY2RuKSkge1xuICAgIGNkbiArPSAoY2RuLmVuZHNXaXRoKFwiL1wiKSA/IFwiXCIgOiBcIi9cIikgKyByZXBvO1xuICB9XG4gIGxldCBzcmMgPSBjZG4gfHwgYCR7cmVwb30vJHtkaXJ9L2Jhc2UubWluLmpzYDtcbiAgaWYgKCFzcmMuZW5kc1dpdGgoXCIuanNcIikpIHtcbiAgICBzcmMgKz0gYCR7c3JjLmVuZHNXaXRoKFwiL1wiKSA/IFwiXCIgOiBcIi9cIn0ke2Rpcn0vYmFzZS5qc2A7XG4gIH1cbiAgYXdhaXQgbG9hZFNjcmlwdChzcmMsIFwid2lraXBhcnNlXCIpO1xuICBhd2FpdCBsb2FkU2NyaXB0KGAke3dpa2lwYXJzZS5DRE59LyR7ZGlyfS9sc3AuanNgLCBcIndpa2lwYXJzZS5MYW5ndWFnZVNlcnZpY2VcIik7XG4gIGlmICghY29uZmlnTG9hZGVkICYmIHR5cGVvZiBnZXRDb25maWcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbmZpZ0xvYWRlZCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHdpa2lwYXJzZS5zZXRDb25maWcoYXdhaXQgZ2V0Q29uZmlnKCkpO1xuICAgIH0gY2F0Y2gge1xuICAgIH1cbiAgfVxuICBpZiAoIWkxOG5Mb2FkZWQgJiYgbGFuZ3MpIHtcbiAgICBpMThuTG9hZGVkID0gdHJ1ZTtcbiAgICBjb25zdCBrZXkgPSBcIndpa2lwYXJzZS1pMThuXCIsIHsgdmVyc2lvbiB9ID0gd2lraXBhcnNlO1xuICAgIHRyeSB7XG4gICAgICB3aWtpcGFyc2Uuc2V0STE4Tihhd2FpdCBzZXRJMThOKGAke3dpa2lwYXJzZS5DRE59L2kxOG5gLCB2ZXJzaW9uLCBsYW5ncywgZGVmaW5lX0xBTkdTX2RlZmF1bHQsIGtleSkpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0T2JqZWN0KGtleSwgeyB2ZXJzaW9uLCBsYW5nOiBcImVuXCIgfSk7XG4gICAgfVxuICB9XG59O1xuY29uc3QgbHNwcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuY29uc3QgZ2V0TFNQID0gKG9iaiwgaW5jbHVkZSwgb3B0KSA9PiB7XG4gIHZvaWQgZ2V0V2lraXBhcnNlKG9wdCk7XG4gIGlmICh0eXBlb2Ygd2lraXBhcnNlICE9PSBcIm9iamVjdFwiIHx8ICFpc0dsb2JhbChcIndpa2lwYXJzZVwiKSB8fCAhd2lraXBhcnNlLkxhbmd1YWdlU2VydmljZSB8fCBsc3BzLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGxzcHMuZ2V0KG9iaik7XG4gIH1cbiAgY29uc3QgbHNwID0gbmV3IHdpa2lwYXJzZS5MYW5ndWFnZVNlcnZpY2UoaW5jbHVkZSk7XG4gIGxzcHMuc2V0KG9iaiwgbHNwKTtcbiAgcmV0dXJuIGxzcDtcbn07XG5jb25zdCBpc0dsb2JhbCA9IChwcm9wKSA9PiBPYmplY3QuaGFzT3duKGdsb2JhbFRoaXMsIHByb3ApO1xuY29uc3QgZ2V0R2xvYmFsID0gKHByb3ApID0+IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZ2xvYmFsVGhpcywgcHJvcCk/LnZhbHVlO1xuZXhwb3J0IHtcbiAgQ0ROLFxuICBjb21wYXJlVmVyc2lvbixcbiAgZGVjb2RlSFRNTCxcbiAgZ2V0R2xvYmFsLFxuICBnZXRMU1AsXG4gIGdldE9iamVjdCxcbiAgZ2V0V2lraXBhcnNlLFxuICBpc0dsb2JhbCxcbiAgbG9hZFNjcmlwdCxcbiAgbm9ybWFsaXplVGl0bGUsXG4gIHNldEkxOE4sXG4gIHNldE9iamVjdFxufTtcbiIsICJpbXBvcnQge2dldE9iamVjdCwgaXNHbG9iYWx9IGZyb20gJ0BiaHNkL2Jyb3dzZXInO1xuaW1wb3J0IHR5cGUge0NvZGVNaXJyb3JPcHRpb25zfSBmcm9tICdAYmhzZC9jb2RlbWlycm9yLW1lZGlhd2lraS9td0NvbmZpZyc7XG5cbmNvbnN0IEVYVFMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPihbXG5cdFx0Wydjc3MnLCAnY3NzJ10sXG5cdFx0WydqcycsICdqYXZhc2NyaXB0J10sXG5cdFx0Wydqc29uJywgJ2pzb24nXSxcblx0XSksXG5cdE5BTUVTUEFDRVM6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7XG5cdFx0ODI4OiAnbHVhJyxcblx0XHQyNzQ6ICdodG1sJyxcblx0fTtcblxuY29uc3QgaXNEb2MgPSAodGl0bGU6IHN0cmluZyk6IGJvb2xlYW4gPT4gdGl0bGUuZW5kc1dpdGgoJy9kb2MnKTtcblxuLyoqXG4gKiDmoLnmja7pobXpnaLmoIfpopjojrflj5bor63oqIDmqKHlnotcbiAqIEBwYXJhbSB0aXRsZSDpobXpnaLmoIfpophcbiAqIEBwYXJhbSBwYWdlTmFtZSB3Z1BhZ2VOYW1lXG4gKiBAcGFyYW0gbnNpZCB3Z05hbWVzcGFjZU51bWJlclxuICogQHBhcmFtIGNvbnRlbnRtb2RlbCB3Z1BhZ2VDb250ZW50TW9kZWxcbiAqIEBwYXJhbSBpZCB3Z0FydGljbGVJZFxuICovXG5jb25zdCBnZXRNb2RlRnJvbVRpdGxlID0gKFxuXHR0aXRsZTogc3RyaW5nLFxuXHRwYWdlTmFtZTogc3RyaW5nLFxuXHRuc2lkOiBudW1iZXIsXG5cdGNvbnRlbnRtb2RlbDogc3RyaW5nLFxuXHRpZDogbnVtYmVyXG4pOiBbc3RyaW5nLCBudW1iZXJdID0+IHtcblx0aWYgKGlkICYmIHBhZ2VOYW1lID09PSB0aXRsZSkge1xuXHRcdHJldHVybiBbY29udGVudG1vZGVsLnRvTG93ZXJDYXNlKCksIG5zaWRdO1xuXHR9XG5cdGNvbnN0IHQgPSBuZXcgbXcuVGl0bGUodGl0bGUpLFxuXHRcdG5zID0gdC5nZXROYW1lc3BhY2VJZCgpO1xuXHRpZiAobnMgJSAyIHx8IGlzRG9jKHRpdGxlKSkge1xuXHRcdHJldHVybiBbJ3dpa2l0ZXh0JywgbnNdO1xuXHR9XG5cdGNvbnN0IG1vZGUgPSBFWFRTLmdldCh0LmdldEV4dGVuc2lvbigpPy50b0xvd2VyQ2FzZSgpID8/ICcnKSA/PyBOQU1FU1BBQ0VTW25zXSA/PyAnd2lraXRleHQnO1xuXHRyZXR1cm4gW21vZGUgPT09ICdjc3MnICYmICFbMiwgOCwgMjMwMF0uaW5jbHVkZXMobnMpID8gJ3Nhbml0aXplZC1jc3MnIDogbW9kZSwgbnNdO1xufTtcblxuLyoqXG4gKiDmoLnmja7pobXpnaLlhoXlrrnojrflj5bor63oqIDmqKHlnotcbiAqIEBwYXJhbSB2YWx1ZSDpobXpnaLlhoXlrrlcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE1vZGVGcm9tVmFsdWUgPSBhc3luYyAodmFsdWU6IHN0cmluZyk6IFByb21pc2U8W3N0cmluZywgKENvZGVNaXJyb3JPcHRpb25zIHwgdW5kZWZpbmVkKT9dPiA9PiB7XG5cdGNvbnN0IHtcblx0XHR3Z1BhZ2VOYW1lOiBwYWdlTmFtZSxcblx0XHR3Z05hbWVzcGFjZU51bWJlcjogbnNpZCxcblx0XHR3Z1BhZ2VDb250ZW50TW9kZWw6IGNvbnRlbnRtb2RlbCxcblx0XHR3Z0FydGljbGVJZDogaWQsXG5cdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxldCBXaWtpcGx1c1BhZ2VzO1xuXHRpZiAodHlwZW9mIF9XaWtpcGx1c1BhZ2VzID09PSAnb2JqZWN0JyAmJiBpc0dsb2JhbCgnX1dpa2lwbHVzUGFnZXMnKSkge1xuXHRcdFdpa2lwbHVzUGFnZXMgPSBfV2lraXBsdXNQYWdlcztcblx0fSBlbHNlIGlmICh0eXBlb2YgUGFnZXMgPT09ICdvYmplY3QnICYmIGlzR2xvYmFsKCdQYWdlcycpKSB7XG5cdFx0V2lraXBsdXNQYWdlcyA9IFBhZ2VzO1xuXHR9XG5cdGlmIChXaWtpcGx1c1BhZ2VzKSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdtZWRpYXdpa2kuVGl0bGUnKTtcblx0XHRjb25zdCBwYWdlcyA9IE9iamVjdC52YWx1ZXMoV2lraXBsdXNQYWdlcykuZmlsdGVyKCh7c2VjdGlvbkNhY2hlfSkgPT5cblx0XHRcdFx0T2JqZWN0LnZhbHVlcyhzZWN0aW9uQ2FjaGUpLmluY2x1ZGVzKHZhbHVlKVxuXHRcdFx0KSxcblx0XHRcdGwgPSBwYWdlcy5sZW5ndGg7XG5cdFx0aWYgKGwpIHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHBhZ2VzLm1hcCgoe3RpdGxlfSkgPT4gZ2V0TW9kZUZyb21UaXRsZSh0aXRsZSwgcGFnZU5hbWUsIG5zaWQsIGNvbnRlbnRtb2RlbCwgaWQpKSxcblx0XHRcdFx0W21vZGUsIG5zXSA9IHBhcmFtc1swXSE7XG5cdFx0XHRpZiAobCA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gW21vZGUsIHtucywgcGFnZTogcGFnZXNbMF0hLnRpdGxlfV07XG5cdFx0XHR9IGVsc2UgaWYgKG5ldyBTZXQocGFyYW1zLm1hcCgoW3hdKSA9PiB4KSkuc2l6ZSA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gW21vZGUsIG5ldyBTZXQocGFyYW1zLm1hcCgoWywgeV0pID0+IHkpKS5zaXplID09PSAxID8ge25zfSA6IHVuZGVmaW5lZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGlmICgobnNpZCAhPT0gMjc0ICYmIGNvbnRlbnRtb2RlbCAhPT0gJ1NjcmlidW50bycpIHx8IGlzRG9jKHBhZ2VOYW1lKSkge1xuXHRcdHJldHVybiBbY29udGVudG1vZGVsLnRvTG93ZXJDYXNlKCksIGNvbnRlbnRtb2RlbCA9PT0gJ3dpa2l0ZXh0JyA/IHVuZGVmaW5lZCA6IHtuczogbnNpZH1dO1xuXHR9XG5cdGF3YWl0IG13LmxvYWRlci51c2luZygnb29qcy11aS13aW5kb3dzJyk7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdHJldHVybiAoYXdhaXQgT08udWkuY29uZmlybShtdy5tc2coJ2NtLW13LWNvbnRlbnRtb2RlbCcpLCB7XG5cdFx0YWN0aW9uczogW3tsYWJlbDogbnNpZCA9PT0gMjc0ID8gJ1dpZGdldCcgOiAnTHVhJ30sIHtsYWJlbDogJ1dpa2l0ZXh0JywgYWN0aW9uOiAnYWNjZXB0J31dLFxuXHR9KSlcblx0XHQ/IFsnd2lraXRleHQnXVxuXHRcdDogW25zaWQgPT09IDI3NCA/ICdodG1sJyA6ICdsdWEnXTtcbn07XG5cbmNvbnN0IHN1Ym1pdCA9IC8qKiDmj5DkuqTnvJbovpEgKi8gKCk6IHRydWUgPT4ge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0JykhLmRpc3BhdGNoRXZlbnQobmV3IFBvaW50ZXJFdmVudCgnY2xpY2snKSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdHN1Ym1pdE1pbm9yID0gLyoqIOaPkOS6pOWwj+e8lui+kSAqLyAoKTogdHJ1ZSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKSEuY2hlY2tlZCA9IHRydWU7XG5cdFx0cmV0dXJuIHN1Ym1pdCgpO1xuXHR9LFxuXHRlc2NhcGVFZGl0ID0gLyoqIOaMieS4i0VzY+mUrumAgOWHuue8lui+kSAqLyAoKTogYm9vbGVhbiA9PiB7XG5cdFx0Y29uc3Qgc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbCA9IGdldE9iamVjdCgnV2lraXBsdXNfU2V0dGluZ3MnKSxcblx0XHRcdGVzY1RvRXhpdFF1aWNrRWRpdCA9IHNldHRpbmdzICYmIChzZXR0aW5nc1snZXNjX3RvX2V4aXRfcXVpY2tlZGl0J10gfHwgc2V0dGluZ3NbJ2VzY1RvRXhpdFF1aWNrRWRpdCddKTtcblx0XHRpZiAoZXNjVG9FeGl0UXVpY2tFZGl0ID09PSB0cnVlIHx8IGVzY1RvRXhpdFF1aWNrRWRpdCA9PT0gJ3RydWUnKSB7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKSEuZGlzcGF0Y2hFdmVudChuZXcgUG9pbnRlckV2ZW50KCdjbGljaycpKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cbi8qKlxuICog5riy5p+T57yW6L6R5ZmoXG4gKiBAcGFyYW0gdGFyZ2V0IOebruagh+e8lui+keahhlxuICogQHBhcmFtIHNldHRpbmcg5piv5ZCm5pivV2lraXBsdXPorr7nva7vvIjkvb/nlKhqc29u6K+t5rOV77yJXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXJFZGl0b3IgPSBhc3luYyAodGFyZ2V0OiBIVE1MVGV4dEFyZWFFbGVtZW50LCBzZXR0aW5nOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IGNtID0gYXdhaXQgQ29kZU1pcnJvcjYuZnJvbVRleHRBcmVhKFxuXHRcdHRhcmdldCxcblx0XHQuLi4oc2V0dGluZyA/IChbJ2pzb24nXSBzYXRpc2ZpZXMgW3N0cmluZ10pIDogYXdhaXQgZ2V0TW9kZUZyb21WYWx1ZSh0YXJnZXQudmFsdWUpKVxuXHQpO1xuXHQoY20udmlldz8uZG9tID8/IGNtLmVkaXRvciEuZ2V0RG9tTm9kZSgpISkuaWQgPSAnV2lraXBsdXMtQ29kZU1pcnJvcic7XG5cblx0aWYgKCFzZXR0aW5nKSB7XG5cdFx0Ly8g5pmu6YCaV2lraXBsdXPnvJbovpHljLpcblx0XHRpZiAoY20uZWRpdG9yKSB7XG5cdFx0XHRjbS5lZGl0b3IuYWRkQ29tbWFuZChtb25hY28uS2V5TW9kLkN0cmxDbWQgfCBtb25hY28uS2V5Q29kZS5LZXlTLCAoKSA9PiB7XG5cdFx0XHRcdHN1Ym1pdCgpO1xuXHRcdFx0fSk7XG5cdFx0XHRjbS5lZGl0b3IuYWRkQ29tbWFuZChtb25hY28uS2V5TW9kLkN0cmxDbWQgfCBtb25hY28uS2V5TW9kLlNoaWZ0IHwgbW9uYWNvLktleUNvZGUuS2V5UywgKCkgPT4ge1xuXHRcdFx0XHRzdWJtaXRNaW5vcigpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGNtLmVkaXRvci5hZGRDb21tYW5kKG1vbmFjby5LZXlDb2RlLkVzY2FwZSwgKCkgPT4ge1xuXHRcdFx0XHRlc2NhcGVFZGl0KCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y20uZXh0cmFLZXlzKFtcblx0XHRcdFx0e2tleTogJ01vZC1TJywgcnVuOiBzdWJtaXR9LFxuXHRcdFx0XHR7a2V5OiAnU2hpZnQtTW9kLVMnLCBydW46IHN1Ym1pdE1pbm9yfSxcblx0XHRcdFx0e2tleTogJ0VzYycsIHJ1bjogZXNjYXBlRWRpdH0sXG5cdFx0XHRdKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBqdW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQW5jaG9yRWxlbWVudD4oJyNXaWtpcGx1cy1RdWlja2VkaXQtSnVtcCA+IGEnKTtcblx0aWYgKGp1bXApIHtcblx0XHRqdW1wLmhyZWYgPSAnI1dpa2lwbHVzLUNvZGVNaXJyb3InO1xuXHR9XG59O1xuIiwgIi8qKlxuICogQG5hbWUgV2lraXBsdXMtaGlnaGxpZ2h0IFdpa2lwbHVz57yW6L6R5Zmo55qEQ29kZU1pcnJvcuivreazlemrmOS6ruaJqeWxlVxuICogQGF1dGhvciBCaHNkIDxodHRwczovL2dpdGh1Yi5jb20vYmhzZC1oYXJyeT5cbiAqIEBsaWNlbnNlIEdQTC0zLjAtb3ItbGF0ZXJcbiAqL1xuaW1wb3J0IHtyZW5kZXJFZGl0b3J9IGZyb20gJy4vY29yZSc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbmFtZXNwYWNlXG5kZWNsYXJlIG5hbWVzcGFjZSBtZWRpYVdpa2kubGlicyB7XG5cdGxldCB3cGhsOiB7dmVyc2lvbj86IHN0cmluZzsgY21WZXJzaW9uPzogc3RyaW5nOyBtb25hY29WZXJzaW9uPzogc3RyaW5nOyBDRE4/OiBzdHJpbmd9IHwgdW5kZWZpbmVkO1xufVxuXG4oYXN5bmMgKCkgPT4ge1xuXHRpZiAoIW13LmNvbmZpZy5nZXQoJ3dnSXNBcnRpY2xlJykgfHwgbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSAhPT0gJ3ZpZXcnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHtsaWJzfSA9IG1lZGlhV2lraSxcblx0XHR7d3BobH0gPSBsaWJzO1xuXHRpZiAoIXdwaGw/LnZlcnNpb24pIHtcblx0XHRjb25zdCB2ZXJzaW9uID0gJzMuNi4wJztcblx0XHRsaWJzLndwaGwgPSB7dmVyc2lvbiwgLi4ud3BobH07IC8vIOW8gOWni+WKoOi9vVxuXG5cdFx0Ly8g6Lev5b6EXG5cdFx0Y29uc3QgQ01fQ0ROID1cblx0XHRcdCdodHRwczovL2dpdGNkbi5xaXV3ZW4ubmV0LmNuL0ludGVyZmFjZUFkbWluL2NvZGVtaXJyb3ItbWVkaWF3aWtpL3Jhdy9icmFuY2gvbnBtL2Rpc3QvbXcubWluLmpzP2RhdGU9MjAyNjEwMzEmdmVyc2lvbj05NWIxM2MyMjA4JztcblxuXHRcdGlmICh0eXBlb2YgQ29kZU1pcnJvcjYgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGF3YWl0ICQuYWpheChDTV9DRE4sIHtkYXRhVHlwZTogJ3NjcmlwdCcsIGNhY2hlOiB0cnVlfSk7XG5cdFx0fVxuXHRcdE9iamVjdC5hc3NpZ24oQ29kZU1pcnJvcjYhLCB7XG5cdFx0XHRtb25hY29WZXJzaW9uOiB3cGhsPy5tb25hY29WZXJzaW9uLFxuXHRcdH0pO1xuXG5cdFx0Ly8g55uR6KeGIFdpa2lwbHVzIOe8lui+keahhlxuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHJlY29yZHMpID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdG9yID0gJyNXaWtpcGx1cy1RdWlja2VkaXQsICNXaWtpcGx1cy1TZXR0aW5nLUlucHV0Jyxcblx0XHRcdFx0W2FkZGVkXSA9ICQocmVjb3Jkcy5mbGF0TWFwKCh7YWRkZWROb2Rlc30pID0+IFsuLi5hZGRlZE5vZGVzXSkpLmZpbmQ8SFRNTFRleHRBcmVhRWxlbWVudD4oc2VsZWN0b3IpO1xuXHRcdFx0aWYgKGFkZGVkKSB7XG5cdFx0XHRcdHZvaWQgcmVuZGVyRWRpdG9yKGFkZGVkLCBhZGRlZC5pZCA9PT0gJ1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFtyZW1vdmVkXSA9ICQocmVjb3Jkcy5mbGF0TWFwKCh7cmVtb3ZlZE5vZGVzfSkgPT4gWy4uLnJlbW92ZWROb2Rlc10pKS5maW5kPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFxuXHRcdFx0XHRzZWxlY3RvclxuXHRcdFx0KTtcblx0XHRcdENvZGVNaXJyb3I2Lmluc3RhbmNlcy5nZXQocmVtb3ZlZCEpPy5kZXN0cm95KCk7XG5cdFx0fSk7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7Y2hpbGRMaXN0OiB0cnVlfSk7XG5cdH1cbn0pKCk7XG5cbmV4cG9ydCB7fTtcbiIsICJpbXBvcnQgJy4vc3R5bGUubGVzcyc7XG5pbXBvcnQge2NoZWNrRGVwZW5kZW5jaWVzfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4oZnVuY3Rpb24gV2lraXBsdXNIaWdobGlnaHQoKSB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dJc0FydGljbGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dJc0FydGljbGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsb2FkZXIgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0YXdhaXQgY2hlY2tEZXBlbmRlbmNpZXMoJ1dpa2lwbHVzJyk7XG5cblx0XHRjb25zdCB7J3Zpc3VhbGVkaXRvci1lbmFibGUnOiBpc1ZlRW5hYmxlfSA9IG13LnVzZXIub3B0aW9ucy5nZXQoKSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcblxuXHRcdC8qIHNlZSA8aHR0cHM6Ly9naXRodWIuY29tL1dpa2lwbHVzL1dpa2lwbHVzL2lzc3Vlcy82NT4gKi9cblx0XHRpZiAoaXNWZUVuYWJsZSkge1xuXHRcdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQudmlzdWFsRWRpdG9yLmNvcmUnKTtcblx0XHR9XG5cblx0XHRhd2FpdCBpbXBvcnQoJy4vc3JjL21haW4nKTtcblx0fTtcblxuXHR2b2lkIGxvYWRlcigpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBNENNQTtBQTVDTixJQWdITUM7QUFoSE4sSUFBQUMsWUFBQUMsTUFBQTtFQUFBLGlHQUFBO0FBNENNSCxnQkFBYUksU0FBUUMsS0FBS0MsTUFBTUMsT0FBT0MsYUFBYUMsUUFBUUwsR0FBRyxDQUFDLENBQUM7QUFvRWpFSCxlQUFZUyxVQUFTQyxPQUFPQyxPQUFPQyxZQUFZSCxJQUFJO0VBQUE7QUFBQSxDQUFBOztBQ2hIekQsSUFHTUk7QUFITixJQVFDQztBQVJELElBYU1DO0FBYk4sSUF1Qk1DO0FBdkJOLElBOENhQztBQTlD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QUFNLENBQUMsR0FBR0EsWUFBWSxDQUFDLENBQUMsRUFBRUYsS0FDM0VKLFFBQ0Q7QUFDQSxXQUFBRCx3QkFBQXBDLFlBQVk0QyxVQUFVakcsSUFBSStGLE9BQVEsT0FBQSxRQUFBTiwwQkFBQSxVQUFsQ0Esc0JBQXFDUyxRQUFRO1FBQzlDLENBQUM7QUFDRFosaUJBQVNhLFFBQVE1RCxTQUFTNkQsTUFBTTtVQUFDQyxXQUFXO1FBQUksQ0FBQztNQUNsRDtJQUNELENBQUEsRUFBRztFQUFBO0FBQUEsQ0FBQTs7QUM5Q0gsSUFBQUMsb0JBQWdDQyxRQUFBLGlCQUFBO0NBRS9CLFNBQVNDLG9CQUFvQjtBQUM3QixRQUFNO0lBQUNDO0lBQVVDO0VBQVcsSUFBSS9HLEdBQUdlLE9BQU9WLElBQUk7QUFDOUMsTUFBSXlHLGFBQWEsVUFBVSxDQUFDQyxhQUFhO0FBQ3hDO0VBQ0Q7QUFFQSxNQUFJLGtCQUFrQm5FLFVBQVU7QUFDL0I7RUFDRDtBQUVBLFFBQU16QixTQUFBLDRCQUFBO0FBQUEsUUFBQTZGLFFBQUF2RyxrQkFBUyxhQUEyQjtBQUN6QyxhQUFBLEdBQU1rRyxrQkFBQU0sbUJBQWtCLFVBQVU7QUFFbEMsWUFBTTtRQUFDLHVCQUF1QkM7TUFBVSxJQUFJbEgsR0FBR21ILEtBQUtDLFFBQVEvRyxJQUFJO0FBR2hFLFVBQUk2RyxZQUFZO0FBQ2YsY0FBTWxILEdBQUdtQixPQUFPQyxNQUFNLHVCQUF1QjtNQUM5QztBQUVBLFlBQU1pRyxRQUFBQyxRQUFBLEVBQUFDLEtBQUEsT0FBQXhDLFVBQUEsR0FBQUQsYUFBQTtJQUNQLENBQUE7QUFBQSxXQUFBLFNBWE0zRCxVQUFBO0FBQUEsYUFBQTZGLE1BQUF0RSxNQUFBLE1BQUFDLFNBQUE7SUFBQTtFQUFBLEdBQUE7QUFhTixPQUFLeEIsT0FBTztBQUNiLEdBQUc7IiwKICAibmFtZXMiOiBbImdldE9iamVjdCIsICJpc0dsb2JhbCIsICJpbml0X2Rpc3QiLCAiX19lc20iLCAia2V5IiwgIkpTT04iLCAicGFyc2UiLCAiU3RyaW5nIiwgImxvY2FsU3RvcmFnZSIsICJnZXRJdGVtIiwgInByb3AiLCAiT2JqZWN0IiwgImhhc093biIsICJnbG9iYWxUaGlzIiwgIkVYVFMiLCAiTkFNRVNQQUNFUyIsICJpc0RvYyIsICJnZXRNb2RlRnJvbVRpdGxlIiwgImdldE1vZGVGcm9tVmFsdWUiLCAic3VibWl0IiwgInN1Ym1pdE1pbm9yIiwgImVzY2FwZUVkaXQiLCAicmVuZGVyRWRpdG9yIiwgImluaXRfY29yZSIsICJNYXAiLCAidGl0bGUiLCAiZW5kc1dpdGgiLCAicGFnZU5hbWUiLCAibnNpZCIsICJjb250ZW50bW9kZWwiLCAiaWQiLCAiX3JlZiIsICJfRVhUUyRnZXQiLCAiX3QkZ2V0RXh0ZW5zaW9uJHRvTG93IiwgIl90JGdldEV4dGVuc2lvbiIsICJ0b0xvd2VyQ2FzZSIsICJ0IiwgIm13IiwgIlRpdGxlIiwgIm5zIiwgImdldE5hbWVzcGFjZUlkIiwgIm1vZGUiLCAiZ2V0IiwgImdldEV4dGVuc2lvbiIsICJpbmNsdWRlcyIsICJfcmVmMiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ2YWx1ZSIsICJ3Z1BhZ2VOYW1lIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJ3Z0FydGljbGVJZCIsICJjb25maWciLCAiV2lraXBsdXNQYWdlcyIsICJfV2lraXBsdXNQYWdlcyIsICJQYWdlcyIsICJsb2FkZXIiLCAidXNpbmciLCAicGFnZXMiLCAidmFsdWVzIiwgImZpbHRlciIsICJzZWN0aW9uQ2FjaGUiLCAibCIsICJsZW5ndGgiLCAicGFyYW1zIiwgIm1hcCIsICJwYWdlIiwgIlNldCIsICJ4IiwgInNpemUiLCAieSIsICJPTyIsICJ1aSIsICJjb25maXJtIiwgIm1zZyIsICJhY3Rpb25zIiwgImxhYmVsIiwgImFjdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZG9jdW1lbnQiLCAiZ2V0RWxlbWVudEJ5SWQiLCAiZGlzcGF0Y2hFdmVudCIsICJQb2ludGVyRXZlbnQiLCAicXVlcnlTZWxlY3RvciIsICJjaGVja2VkIiwgInNldHRpbmdzIiwgImVzY1RvRXhpdFF1aWNrRWRpdCIsICJfcmVmMyIsICJ0YXJnZXQiLCAic2V0dGluZyIsICJfY20kdmlldyRkb20iLCAiX2NtJHZpZXciLCAiY20iLCAiQ29kZU1pcnJvcjYiLCAiZnJvbVRleHRBcmVhIiwgInZpZXciLCAiZG9tIiwgImVkaXRvciIsICJnZXREb21Ob2RlIiwgImFkZENvbW1hbmQiLCAibW9uYWNvIiwgIktleU1vZCIsICJDdHJsQ21kIiwgIktleUNvZGUiLCAiS2V5UyIsICJTaGlmdCIsICJFc2NhcGUiLCAiZXh0cmFLZXlzIiwgInJ1biIsICJqdW1wIiwgImhyZWYiLCAiX3gyIiwgIl94MyIsICJtYWluX2V4cG9ydHMiLCAiaW5pdF9tYWluIiwgImxpYnMiLCAibWVkaWFXaWtpIiwgIndwaGwiLCAidmVyc2lvbiIsICJDTV9DRE4iLCAiJCIsICJhamF4IiwgImRhdGFUeXBlIiwgImNhY2hlIiwgImFzc2lnbiIsICJtb25hY29WZXJzaW9uIiwgIm9ic2VydmVyIiwgIk11dGF0aW9uT2JzZXJ2ZXIiLCAicmVjb3JkcyIsICJfQ29kZU1pcnJvcjYkaW5zdGFuY2UiLCAic2VsZWN0b3IiLCAiYWRkZWQiLCAiZmxhdE1hcCIsICJhZGRlZE5vZGVzIiwgImZpbmQiLCAicmVtb3ZlZCIsICJyZW1vdmVkTm9kZXMiLCAiaW5zdGFuY2VzIiwgImRlc3Ryb3kiLCAib2JzZXJ2ZSIsICJib2R5IiwgImNoaWxkTGlzdCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIldpa2lwbHVzSGlnaGxpZ2h0IiwgIndnQWN0aW9uIiwgIndnSXNBcnRpY2xlIiwgIl9yZWY1IiwgImNoZWNrRGVwZW5kZW5jaWVzIiwgImlzVmVFbmFibGUiLCAidXNlciIsICJvcHRpb25zIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJ0aGVuIl0KfQo=
