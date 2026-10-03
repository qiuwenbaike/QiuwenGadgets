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
var pageName;
var ns;
var contentmodel;
var CONTENTMODELS;
var EXTS;
var NAMESPACES;
var getPageMode;
var submit;
var submitMinor;
var escapeEdit;
var renderEditor;
var init_core = __esm({
  "src/Wikiplus-highlight/src/core.ts"() {
    "use strict";
    init_dist();
    ({
      wgPageName: pageName,
      wgNamespaceNumber: ns,
      wgPageContentModel: contentmodel
    } = mw.config.get());
    CONTENTMODELS = {
      wikitext: "mediawiki"
    };
    EXTS = /* @__PURE__ */ new Map([["css", "css"], ["js", "javascript"], ["json", "json"]]);
    NAMESPACES = {
      828: "lua",
      274: "html"
    };
    getPageMode = /* @__PURE__ */ (function() {
      var _ref = _asyncToGenerator(function* (value) {
        let WikiplusPages;
        if (typeof _WikiplusPages === "object" && isGlobal("_WikiplusPages")) {
          WikiplusPages = _WikiplusPages;
        } else if (typeof Pages === "object" && isGlobal("Pages")) {
          WikiplusPages = Pages;
        }
        if (WikiplusPages) {
          const pages = Object.values(WikiplusPages).filter(({
            sectionCache
          }) => Object.values(sectionCache).includes(value));
          if (pages.some(({
            title
          }) => !title.endsWith("/doc"))) {
            yield mw.loader.using("mediawiki.Title");
          }
          const modes = new Set(pages.map(({
            title
          }) => {
            var _EXTS$get, _t$getExtension$toLow, _t$getExtension;
            if (title.endsWith("/doc")) {
              return "template";
            }
            const t = new mw.Title(title), namespace = t.getNamespaceId();
            if (namespace % 2) {
              return "mediawiki";
            }
            const mode = (_EXTS$get = EXTS.get((_t$getExtension$toLow = (_t$getExtension = t.getExtension()) === null || _t$getExtension === void 0 ? void 0 : _t$getExtension.toLowerCase()) !== null && _t$getExtension$toLow !== void 0 ? _t$getExtension$toLow : "")) !== null && _EXTS$get !== void 0 ? _EXTS$get : NAMESPACES[namespace], isGadget = namespace === 8 || namespace === 2300;
            switch (mode) {
              case "javascript":
                return isGadget ? "gadget" : mode;
              case "css":
                return isGadget || namespace === 2 ? mode : "sanitized-css";
              case void 0:
                return namespace === 10 || namespace === 2 ? "template" : "mediawiki";
              default:
                return mode;
            }
          }));
          if (modes.size === 1) {
            const [mode] = modes;
            if (mode === "gadget") {
              return ["javascript", {
                ns: 8
              }];
            }
            const page = pages.length === 1 ? pages[0].title : void 0;
            return mode === "template" ? ["mediawiki", {
              ns: 10,
              page
            }] : [mode, {
              page
            }];
          } else if (modes.size === 2) {
            if (modes.has("javascript") && modes.has("gadget")) {
              return ["javascript"];
            } else if (modes.has("mediawiki") && modes.has("template")) {
              return ["mediawiki"];
            }
          }
        }
        if (ns !== 274 && contentmodel !== "Scribunto" || pageName.endsWith("/doc")) {
          var _CONTENTMODELS$conten;
          return [(_CONTENTMODELS$conten = CONTENTMODELS[contentmodel]) !== null && _CONTENTMODELS$conten !== void 0 ? _CONTENTMODELS$conten : contentmodel, contentmodel === "javascript" ? {
            ns
          } : void 0];
        }
        yield mw.loader.using("oojs-ui-windows");
        if (
          // @ts-expect-error TS2304
          yield OO.ui.confirm(mw.msg("cm-mw-contentmodel"), {
            actions: [{
              label: ns === 274 ? "Widget" : "Lua"
            }, {
              label: "Wikitext",
              action: "accept"
            }]
          })
        ) {
          return ["mediawiki"];
        }
        return [ns === 274 ? "html" : "lua"];
      });
      return function getPageMode2(_x) {
        return _ref.apply(this, arguments);
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
      var _ref2 = _asyncToGenerator(function* (target, setting) {
        var _cm$view$dom, _cm$view;
        const cm = yield CodeMirror6.fromTextArea(target, ...setting ? ["json"] : yield getPageMode(target.value));
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
        return _ref2.apply(this, arguments);
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
        const version = "3.5.0";
        libs.wphl = {
          version,
          ...wphl
        };
        const CM_CDN = "https://gitcdn.qiuwen.net.cn/InterfaceAdmin/codemirror-mediawiki/raw/branch/npm/dist/mw.min.js?date=20260809&version=f472cae890";
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
          }) => [...removedNodes])).find(selector), cm = (_CodeMirror6$instance = CodeMirror6.instances) === null || _CodeMirror6$instance === void 0 ? void 0 : _CodeMirror6$instance.get(removed);
          if (typeof (cm === null || cm === void 0 ? void 0 : cm.destroy) === "function") {
            cm.destroy();
          }
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
    var _ref4 = _asyncToGenerator(function* () {
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
      return _ref4.apply(this, arguments);
    };
  })();
  void loader();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL0BiaHNkK2Jyb3dzZXJAMi4xLjFfY3Vsb3JpQDQuMC4yL25vZGVfbW9kdWxlcy9AYmhzZC9icm93c2VyL2Rpc3QvaW5kZXguanMiLCAic3JjL1dpa2lwbHVzLWhpZ2hsaWdodC9zcmMvY29yZS50cyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L3NyYy9tYWluLnRzIiwgInNyYy9XaWtpcGx1cy1oaWdobGlnaHQvV2lraXBsdXMtaGlnaGxpZ2h0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ2YXIgZGVmaW5lX0xBTkdTX2RlZmF1bHQgPSBbXCJ6aC1oYW5zXCIsIFwiemgtaGFudFwiXTtcbmltcG9ydCB7IHJhd3VybGRlY29kZSB9IGZyb20gXCJAYmhzZC9jb21tb25cIjtcbmNvbnN0IENETiA9IFwiaHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0XCI7XG5jb25zdCB0ZXh0YXJlYSA9IC8qIEBfX1BVUkVfXyAqLyAoKCkgPT4gdHlwZW9mIGRvY3VtZW50ID09PSBcIm9iamVjdFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpIDogdm9pZCAwKSgpO1xuY29uc3QgZGVjb2RlSFRNTCA9IChzdHIpID0+IHtcbiAgdGV4dGFyZWEuaW5uZXJIVE1MID0gc3RyO1xuICByZXR1cm4gdGV4dGFyZWEudmFsdWU7XG59O1xuY29uc3Qgbm9ybWFsaXplVGl0bGUgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgZGVjb2RlZCA9IHJhd3VybGRlY29kZSh0aXRsZSk7XG4gIHJldHVybiAvWzw+W1xcXXx7fV0vdS50ZXN0KGRlY29kZWQpID8gZGVjb2RlZCA6IGRlY29kZUhUTUwoZGVjb2RlZCk7XG59O1xuY29uc3QgbG9hZGluZyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5jb25zdCBsb2FkU2NyaXB0ID0gKHNyYywgZ2xvYmFsQ29uc3QsIGFtZCkgPT4ge1xuICBpZiAobG9hZGluZy5oYXMoc3JjKSkge1xuICAgIHJldHVybiBsb2FkaW5nLmdldChzcmMpO1xuICB9XG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSAvXmh0dHBzPzpcXC9cXC8vaXUudGVzdChzcmMpID8gc3JjIDogYCR7Q0ROfS8ke3NyY31gO1xuICAgIGxldCBvYmogPSBnbG9iYWxUaGlzO1xuICAgIGZvciAoY29uc3QgcHJvcCBvZiBnbG9iYWxDb25zdC5zcGxpdChcIi5cIikpIHtcbiAgICAgIG9iaiA9IG9iaiA9PT0gZ2xvYmFsVGhpcyA/IGdldEdsb2JhbChwcm9wKSA6IG9iaj8uW3Byb3BdO1xuICAgIH1cbiAgICBpZiAob2JqKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSBlbHNlIGlmIChhbWQgJiYgdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIFwiYW1kXCIgaW4gZGVmaW5lKSB7XG4gICAgICBjb25zdCByZXF1aXJlanMgPSBnbG9iYWxUaGlzLnJlcXVpcmU7XG4gICAgICByZXF1aXJlanMuY29uZmlnKHsgcGF0aHM6IHsgW2dsb2JhbENvbnN0XTogcGF0aCB9IH0pO1xuICAgICAgcmVxdWlyZWpzKFtnbG9iYWxDb25zdF0sIChleHBvcnRzKSA9PiB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywgeyBbZ2xvYmFsQ29uc3RdOiBleHBvcnRzIH0pO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgIHNjcmlwdC5zcmMgPSBwYXRoO1xuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKHNjcmlwdCk7XG4gICAgfVxuICB9KTtcbiAgbG9hZGluZy5zZXQoc3JjLCBwcm9taXNlKTtcbiAgcmV0dXJuIHByb21pc2U7XG59O1xuY29uc3QgZ2V0T2JqZWN0ID0gKGtleSkgPT4gSlNPTi5wYXJzZShTdHJpbmcobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkpO1xuY29uc3Qgc2V0T2JqZWN0ID0gKGtleSwgdmFsdWUpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xufTtcbmNvbnN0IHBhcnNlVmVyc2lvbiA9ICh2ZXJzaW9uKSA9PiB2ZXJzaW9uLnNwbGl0KFwiLlwiLCAzKS5tYXAoTnVtYmVyKTtcbmNvbnN0IGNvbXBhcmVWZXJzaW9uID0gKHZlcnNpb24sIGJhc2VWZXJzaW9uKSA9PiB7XG4gIGNvbnN0IFttYWpvciwgbWlub3IgPSAwLCBwYXRjaCA9IDBdID0gcGFyc2VWZXJzaW9uKHZlcnNpb24pLCBbYmFzZU1ham9yLCBiYXNlTWlub3IgPSAwLCBiYXNlUGF0Y2ggPSAwXSA9IHBhcnNlVmVyc2lvbihiYXNlVmVyc2lvbik7XG4gIHJldHVybiBtYWpvciA+IGJhc2VNYWpvciB8fCBtYWpvciA9PT0gYmFzZU1ham9yICYmIG1pbm9yID4gYmFzZU1pbm9yIHx8IG1ham9yID09PSBiYXNlTWFqb3IgJiYgbWlub3IgPT09IGJhc2VNaW5vciAmJiBwYXRjaCA+PSBiYXNlUGF0Y2g7XG59O1xuY29uc3Qgc2V0STE4TiA9IGFzeW5jICh1cmwsIGN1ciwgbGFuZ3VhZ2VzLCBhY2NlcHRhYmxlTGFuZ3MsIGtleSwgaTE4biA9IGdldE9iamVjdChrZXkpID8/IHt9KSA9PiB7XG4gIGNvbnN0IHsgdmVyc2lvbiwgbGFuZyB9ID0gaTE4biwgbGFuZ3MgPSBBcnJheS5pc0FycmF5KGxhbmd1YWdlcykgPyBsYW5ndWFnZXMgOiBbbGFuZ3VhZ2VzXTtcbiAgaWYgKHZlcnNpb24gPT09IGN1ciAmJiBsYW5ncy5pbmNsdWRlcyhsYW5nKSkge1xuICAgIHJldHVybiBpMThuO1xuICB9XG4gIGZvciAoY29uc3QgbGFuZ3VhZ2Ugb2YgbGFuZ3MpIHtcbiAgICBjb25zdCBsID0gbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoIWFjY2VwdGFibGVMYW5ncy5pbmNsdWRlcyhsKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHt1cmx9LyR7bH0uanNvbmApO1xuICAgICAgT2JqZWN0LmFzc2lnbihpMThuLCBhd2FpdCByZXMuanNvbigpLCB7IHZlcnNpb246IGN1ciwgbGFuZzogbGFuZ3VhZ2UgfSk7XG4gICAgICBzZXRPYmplY3Qoa2V5LCBpMThuKTtcbiAgICAgIHJldHVybiBpMThuO1xuICAgIH0gY2F0Y2gge1xuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCB0aGUgbG9jYWxpemF0aW9uIGZvciAke2xhbmdzWzBdfS5gKTtcbn07XG5sZXQgY29uZmlnTG9hZGVkID0gZmFsc2UsIGkxOG5Mb2FkZWQgPSBmYWxzZTtcbmNvbnN0IGdldFdpa2lwYXJzZSA9IGFzeW5jICh7IGdldENvbmZpZywgbGFuZ3MsIGNkbiB9ID0ge30pID0+IHtcbiAgY29uc3QgcmVwbyA9IFwibnBtL3dpa2lwYXJzZXItbm9kZVwiLCBkaXIgPSBcImV4dGVuc2lvbnMvZGlzdFwiO1xuICBpZiAoY2RuICYmIC9cXC5qc2RlbGl2clxcLm5ldFxcLz8kL2l1LnRlc3QoY2RuKSkge1xuICAgIGNkbiArPSAoY2RuLmVuZHNXaXRoKFwiL1wiKSA/IFwiXCIgOiBcIi9cIikgKyByZXBvO1xuICB9XG4gIGxldCBzcmMgPSBjZG4gfHwgYCR7cmVwb30vJHtkaXJ9L2Jhc2UubWluLmpzYDtcbiAgaWYgKCFzcmMuZW5kc1dpdGgoXCIuanNcIikpIHtcbiAgICBzcmMgKz0gYCR7c3JjLmVuZHNXaXRoKFwiL1wiKSA/IFwiXCIgOiBcIi9cIn0ke2Rpcn0vYmFzZS5qc2A7XG4gIH1cbiAgYXdhaXQgbG9hZFNjcmlwdChzcmMsIFwid2lraXBhcnNlXCIpO1xuICBhd2FpdCBsb2FkU2NyaXB0KGAke3dpa2lwYXJzZS5DRE59LyR7ZGlyfS9sc3AuanNgLCBcIndpa2lwYXJzZS5MYW5ndWFnZVNlcnZpY2VcIik7XG4gIGlmICghY29uZmlnTG9hZGVkICYmIHR5cGVvZiBnZXRDb25maWcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbmZpZ0xvYWRlZCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHdpa2lwYXJzZS5zZXRDb25maWcoYXdhaXQgZ2V0Q29uZmlnKCkpO1xuICAgIH0gY2F0Y2gge1xuICAgIH1cbiAgfVxuICBpZiAoIWkxOG5Mb2FkZWQgJiYgbGFuZ3MpIHtcbiAgICBpMThuTG9hZGVkID0gdHJ1ZTtcbiAgICBjb25zdCBrZXkgPSBcIndpa2lwYXJzZS1pMThuXCIsIHsgdmVyc2lvbiB9ID0gd2lraXBhcnNlO1xuICAgIHRyeSB7XG4gICAgICB3aWtpcGFyc2Uuc2V0STE4Tihhd2FpdCBzZXRJMThOKGAke3dpa2lwYXJzZS5DRE59L2kxOG5gLCB2ZXJzaW9uLCBsYW5ncywgZGVmaW5lX0xBTkdTX2RlZmF1bHQsIGtleSkpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0T2JqZWN0KGtleSwgeyB2ZXJzaW9uLCBsYW5nOiBcImVuXCIgfSk7XG4gICAgfVxuICB9XG59O1xuY29uc3QgbHNwcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuY29uc3QgZ2V0TFNQID0gKG9iaiwgaW5jbHVkZSwgb3B0KSA9PiB7XG4gIHZvaWQgZ2V0V2lraXBhcnNlKG9wdCk7XG4gIGlmICh0eXBlb2Ygd2lraXBhcnNlICE9PSBcIm9iamVjdFwiIHx8ICFpc0dsb2JhbChcIndpa2lwYXJzZVwiKSB8fCAhd2lraXBhcnNlLkxhbmd1YWdlU2VydmljZSB8fCBsc3BzLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGxzcHMuZ2V0KG9iaik7XG4gIH1cbiAgY29uc3QgbHNwID0gbmV3IHdpa2lwYXJzZS5MYW5ndWFnZVNlcnZpY2UoaW5jbHVkZSk7XG4gIGxzcHMuc2V0KG9iaiwgbHNwKTtcbiAgcmV0dXJuIGxzcDtcbn07XG5jb25zdCBpc0dsb2JhbCA9IChwcm9wKSA9PiBPYmplY3QuaGFzT3duKGdsb2JhbFRoaXMsIHByb3ApO1xuY29uc3QgZ2V0R2xvYmFsID0gKHByb3ApID0+IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZ2xvYmFsVGhpcywgcHJvcCk/LnZhbHVlO1xuZXhwb3J0IHtcbiAgQ0ROLFxuICBjb21wYXJlVmVyc2lvbixcbiAgZGVjb2RlSFRNTCxcbiAgZ2V0R2xvYmFsLFxuICBnZXRMU1AsXG4gIGdldE9iamVjdCxcbiAgZ2V0V2lraXBhcnNlLFxuICBpc0dsb2JhbCxcbiAgbG9hZFNjcmlwdCxcbiAgbm9ybWFsaXplVGl0bGUsXG4gIHNldEkxOE4sXG4gIHNldE9iamVjdFxufTtcbiIsICJpbXBvcnQge2dldE9iamVjdCwgaXNHbG9iYWx9IGZyb20gJ0BiaHNkL2Jyb3dzZXInO1xuXG5jb25zdCB7d2dQYWdlTmFtZTogcGFnZU5hbWUsIHdnTmFtZXNwYWNlTnVtYmVyOiBucywgd2dQYWdlQ29udGVudE1vZGVsOiBjb250ZW50bW9kZWx9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBDT05URU5UTU9ERUxTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuXHRcdHdpa2l0ZXh0OiAnbWVkaWF3aWtpJyxcblx0fSxcblx0RVhUUyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KFtcblx0XHRbJ2NzcycsICdjc3MnXSxcblx0XHRbJ2pzJywgJ2phdmFzY3JpcHQnXSxcblx0XHRbJ2pzb24nLCAnanNvbiddLFxuXHRdKSxcblx0TkFNRVNQQUNFUzogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHtcblx0XHQ4Mjg6ICdsdWEnLFxuXHRcdDI3NDogJ2h0bWwnLFxuXHR9O1xuXG4vKipcbiAqIOajgOafpemhtemdouivreiogOexu+Wei1xuICogQHBhcmFtIHZhbHVlIOmhtemdouWGheWuuVxuICovXG5jb25zdCBnZXRQYWdlTW9kZSA9IGFzeW5jICh2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxbc3RyaW5nLCAoQ29kZU1pcnJvck9wdGlvbnMgfCB1bmRlZmluZWQpP10+ID0+IHtcblx0bGV0IFdpa2lwbHVzUGFnZXM7XG5cdGlmICh0eXBlb2YgX1dpa2lwbHVzUGFnZXMgPT09ICdvYmplY3QnICYmIGlzR2xvYmFsKCdfV2lraXBsdXNQYWdlcycpKSB7XG5cdFx0V2lraXBsdXNQYWdlcyA9IF9XaWtpcGx1c1BhZ2VzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBQYWdlcyA9PT0gJ29iamVjdCcgJiYgaXNHbG9iYWwoJ1BhZ2VzJykpIHtcblx0XHRXaWtpcGx1c1BhZ2VzID0gUGFnZXM7XG5cdH1cblx0aWYgKFdpa2lwbHVzUGFnZXMpIHtcblx0XHRjb25zdCBwYWdlcyA9IE9iamVjdC52YWx1ZXMoV2lraXBsdXNQYWdlcykuZmlsdGVyKCh7c2VjdGlvbkNhY2hlfSkgPT5cblx0XHRcdE9iamVjdC52YWx1ZXMoc2VjdGlvbkNhY2hlKS5pbmNsdWRlcyh2YWx1ZSlcblx0XHQpO1xuXHRcdGlmIChwYWdlcy5zb21lKCh7dGl0bGV9KSA9PiAhdGl0bGUuZW5kc1dpdGgoJy9kb2MnKSkpIHtcblx0XHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnbWVkaWF3aWtpLlRpdGxlJyk7XG5cdFx0fVxuXHRcdGNvbnN0IG1vZGVzID0gbmV3IFNldChcblx0XHRcdHBhZ2VzLm1hcCgoe3RpdGxlfSkgPT4ge1xuXHRcdFx0XHRpZiAodGl0bGUuZW5kc1dpdGgoJy9kb2MnKSkge1xuXHRcdFx0XHRcdHJldHVybiAndGVtcGxhdGUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHQgPSBuZXcgbXcuVGl0bGUodGl0bGUpLFxuXHRcdFx0XHRcdG5hbWVzcGFjZSA9IHQuZ2V0TmFtZXNwYWNlSWQoKTtcblx0XHRcdFx0aWYgKG5hbWVzcGFjZSAlIDIpIHtcblx0XHRcdFx0XHRyZXR1cm4gJ21lZGlhd2lraSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgbW9kZSA9IEVYVFMuZ2V0KHQuZ2V0RXh0ZW5zaW9uKCk/LnRvTG93ZXJDYXNlKCkgPz8gJycpID8/IE5BTUVTUEFDRVNbbmFtZXNwYWNlXSxcblx0XHRcdFx0XHRpc0dhZGdldCA9IG5hbWVzcGFjZSA9PT0gOCB8fCBuYW1lc3BhY2UgPT09IDIzMDA7XG5cdFx0XHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0XHRcdGNhc2UgJ2phdmFzY3JpcHQnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIGlzR2FkZ2V0ID8gJ2dhZGdldCcgOiBtb2RlO1xuXHRcdFx0XHRcdGNhc2UgJ2Nzcyc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gaXNHYWRnZXQgfHwgbmFtZXNwYWNlID09PSAyID8gbW9kZSA6ICdzYW5pdGl6ZWQtY3NzJztcblx0XHRcdFx0XHRjYXNlIHVuZGVmaW5lZDpcblx0XHRcdFx0XHRcdHJldHVybiBuYW1lc3BhY2UgPT09IDEwIHx8IG5hbWVzcGFjZSA9PT0gMiA/ICd0ZW1wbGF0ZScgOiAnbWVkaWF3aWtpJztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIG1vZGU7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KTtcblx0XHRpZiAobW9kZXMuc2l6ZSA9PT0gMSkge1xuXHRcdFx0Y29uc3QgW21vZGVdID0gbW9kZXM7XG5cdFx0XHRpZiAobW9kZSA9PT0gJ2dhZGdldCcpIHtcblx0XHRcdFx0cmV0dXJuIFsnamF2YXNjcmlwdCcsIHtuczogOH1dO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFnZSA9IHBhZ2VzLmxlbmd0aCA9PT0gMSA/IHBhZ2VzWzBdIS50aXRsZSA6IHVuZGVmaW5lZDtcblx0XHRcdHJldHVybiBtb2RlID09PSAndGVtcGxhdGUnID8gWydtZWRpYXdpa2knLCB7bnM6IDEwLCBwYWdlfV0gOiBbbW9kZSEsIHtwYWdlfV07XG5cdFx0fSBlbHNlIGlmIChtb2Rlcy5zaXplID09PSAyKSB7XG5cdFx0XHRpZiAobW9kZXMuaGFzKCdqYXZhc2NyaXB0JykgJiYgbW9kZXMuaGFzKCdnYWRnZXQnKSkge1xuXHRcdFx0XHRyZXR1cm4gWydqYXZhc2NyaXB0J107XG5cdFx0XHR9IGVsc2UgaWYgKG1vZGVzLmhhcygnbWVkaWF3aWtpJykgJiYgbW9kZXMuaGFzKCd0ZW1wbGF0ZScpKSB7XG5cdFx0XHRcdHJldHVybiBbJ21lZGlhd2lraSddO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRpZiAoKG5zICE9PSAyNzQgJiYgY29udGVudG1vZGVsICE9PSAnU2NyaWJ1bnRvJykgfHwgcGFnZU5hbWUuZW5kc1dpdGgoJy9kb2MnKSkge1xuXHRcdHJldHVybiBbQ09OVEVOVE1PREVMU1tjb250ZW50bW9kZWxdID8/IGNvbnRlbnRtb2RlbCwgY29udGVudG1vZGVsID09PSAnamF2YXNjcmlwdCcgPyB7bnN9IDogdW5kZWZpbmVkXTtcblx0fVxuXHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ29vanMtdWktd2luZG93cycpO1xuXHRpZiAoXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHRhd2FpdCBPTy51aS5jb25maXJtKG13Lm1zZygnY20tbXctY29udGVudG1vZGVsJyksIHtcblx0XHRcdGFjdGlvbnM6IFt7bGFiZWw6IG5zID09PSAyNzQgPyAnV2lkZ2V0JyA6ICdMdWEnfSwge2xhYmVsOiAnV2lraXRleHQnLCBhY3Rpb246ICdhY2NlcHQnfV0sXG5cdFx0fSlcblx0KSB7XG5cdFx0cmV0dXJuIFsnbWVkaWF3aWtpJ107XG5cdH1cblx0cmV0dXJuIFtucyA9PT0gMjc0ID8gJ2h0bWwnIDogJ2x1YSddO1xufTtcblxuY29uc3Qgc3VibWl0ID0gLyoqIOaPkOS6pOe8lui+kSAqLyAoKTogdHJ1ZSA9PiB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKSEuZGlzcGF0Y2hFdmVudChuZXcgUG9pbnRlckV2ZW50KCdjbGljaycpKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0c3VibWl0TWlub3IgPSAvKiog5o+Q5Lqk5bCP57yW6L6RICovICgpOiB0cnVlID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpIS5jaGVja2VkID0gdHJ1ZTtcblx0XHRyZXR1cm4gc3VibWl0KCk7XG5cdH0sXG5cdGVzY2FwZUVkaXQgPSAvKiog5oyJ5LiLRXNj6ZSu6YCA5Ye657yW6L6RICovICgpOiBib29sZWFuID0+IHtcblx0XHRjb25zdCBzZXR0aW5nczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsID0gZ2V0T2JqZWN0KCdXaWtpcGx1c19TZXR0aW5ncycpLFxuXHRcdFx0ZXNjVG9FeGl0UXVpY2tFZGl0ID0gc2V0dGluZ3MgJiYgKHNldHRpbmdzWydlc2NfdG9fZXhpdF9xdWlja2VkaXQnXSB8fCBzZXR0aW5nc1snZXNjVG9FeGl0UXVpY2tFZGl0J10pO1xuXHRcdGlmIChlc2NUb0V4aXRRdWlja0VkaXQgPT09IHRydWUgfHwgZXNjVG9FeGl0UXVpY2tFZGl0ID09PSAndHJ1ZScpIHtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpIS5kaXNwYXRjaEV2ZW50KG5ldyBQb2ludGVyRXZlbnQoJ2NsaWNrJykpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuLyoqXG4gKiDmuLLmn5PnvJbovpHlmahcbiAqIEBwYXJhbSB0YXJnZXQg55uu5qCH57yW6L6R5qGGXG4gKiBAcGFyYW0gc2V0dGluZyDmmK/lkKbmmK9XaWtpcGx1c+iuvue9ru+8iOS9v+eUqGpzb27or63ms5XvvIlcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlckVkaXRvciA9IGFzeW5jICh0YXJnZXQ6IEhUTUxUZXh0QXJlYUVsZW1lbnQsIHNldHRpbmc6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgY20gPSBhd2FpdCBDb2RlTWlycm9yNi5mcm9tVGV4dEFyZWEoXG5cdFx0dGFyZ2V0LFxuXHRcdC4uLihzZXR0aW5nID8gKFsnanNvbiddIHNhdGlzZmllcyBbc3RyaW5nXSkgOiBhd2FpdCBnZXRQYWdlTW9kZSh0YXJnZXQudmFsdWUpKVxuXHQpO1xuXHQoY20udmlldz8uZG9tID8/IGNtLmVkaXRvciEuZ2V0RG9tTm9kZSgpISkuaWQgPSAnV2lraXBsdXMtQ29kZU1pcnJvcic7XG5cblx0aWYgKCFzZXR0aW5nKSB7XG5cdFx0Ly8g5pmu6YCaV2lraXBsdXPnvJbovpHljLpcblx0XHRpZiAoY20uZWRpdG9yKSB7XG5cdFx0XHRjbS5lZGl0b3IuYWRkQ29tbWFuZChtb25hY28uS2V5TW9kLkN0cmxDbWQgfCBtb25hY28uS2V5Q29kZS5LZXlTLCAoKSA9PiB7XG5cdFx0XHRcdHN1Ym1pdCgpO1xuXHRcdFx0fSk7XG5cdFx0XHRjbS5lZGl0b3IuYWRkQ29tbWFuZChtb25hY28uS2V5TW9kLkN0cmxDbWQgfCBtb25hY28uS2V5TW9kLlNoaWZ0IHwgbW9uYWNvLktleUNvZGUuS2V5UywgKCkgPT4ge1xuXHRcdFx0XHRzdWJtaXRNaW5vcigpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGNtLmVkaXRvci5hZGRDb21tYW5kKG1vbmFjby5LZXlDb2RlLkVzY2FwZSwgKCkgPT4ge1xuXHRcdFx0XHRlc2NhcGVFZGl0KCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y20uZXh0cmFLZXlzKFtcblx0XHRcdFx0e2tleTogJ01vZC1TJywgcnVuOiBzdWJtaXR9LFxuXHRcdFx0XHR7a2V5OiAnU2hpZnQtTW9kLVMnLCBydW46IHN1Ym1pdE1pbm9yfSxcblx0XHRcdFx0e2tleTogJ0VzYycsIHJ1bjogZXNjYXBlRWRpdH0sXG5cdFx0XHRdKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBqdW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQW5jaG9yRWxlbWVudD4oJyNXaWtpcGx1cy1RdWlja2VkaXQtSnVtcCA+IGEnKTtcblx0aWYgKGp1bXApIHtcblx0XHRqdW1wLmhyZWYgPSAnI1dpa2lwbHVzLUNvZGVNaXJyb3InO1xuXHR9XG59O1xuIiwgIi8qKlxuICogQG5hbWUgV2lraXBsdXMtaGlnaGxpZ2h0IFdpa2lwbHVz57yW6L6R5Zmo55qEQ29kZU1pcnJvcuivreazlemrmOS6ruaJqeWxlVxuICogQGF1dGhvciBCaHNkIDxodHRwczovL2dpdGh1Yi5jb20vYmhzZC1oYXJyeT5cbiAqIEBsaWNlbnNlIEdQTC0zLjAtb3ItbGF0ZXJcbiAqL1xuaW1wb3J0IHtyZW5kZXJFZGl0b3J9IGZyb20gJy4vY29yZSc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbmFtZXNwYWNlXG5kZWNsYXJlIG5hbWVzcGFjZSBtZWRpYVdpa2kubGlicyB7XG5cdGxldCB3cGhsOiB7dmVyc2lvbj86IHN0cmluZzsgY21WZXJzaW9uPzogc3RyaW5nOyBtb25hY29WZXJzaW9uPzogc3RyaW5nOyBDRE4/OiBzdHJpbmd9IHwgdW5kZWZpbmVkO1xufVxuXG4oYXN5bmMgKCkgPT4ge1xuXHRpZiAoIW13LmNvbmZpZy5nZXQoJ3dnSXNBcnRpY2xlJykgfHwgbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSAhPT0gJ3ZpZXcnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHtsaWJzfSA9IG1lZGlhV2lraSxcblx0XHR7d3BobH0gPSBsaWJzO1xuXHRpZiAoIXdwaGw/LnZlcnNpb24pIHtcblx0XHRjb25zdCB2ZXJzaW9uID0gJzMuNS4wJztcblx0XHRsaWJzLndwaGwgPSB7dmVyc2lvbiwgLi4ud3BobH07IC8vIOW8gOWni+WKoOi9vVxuXG5cdFx0Ly8g6Lev5b6EXG5cdFx0Y29uc3QgQ01fQ0ROID1cblx0XHRcdCdodHRwczovL2dpdGNkbi5xaXV3ZW4ubmV0LmNuL0ludGVyZmFjZUFkbWluL2NvZGVtaXJyb3ItbWVkaWF3aWtpL3Jhdy9icmFuY2gvbnBtL2Rpc3QvbXcubWluLmpzP2RhdGU9MjAyNjA4MDkmdmVyc2lvbj1mNDcyY2FlODkwJztcblxuXHRcdGlmICh0eXBlb2YgQ29kZU1pcnJvcjYgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGF3YWl0ICQuYWpheChDTV9DRE4sIHtkYXRhVHlwZTogJ3NjcmlwdCcsIGNhY2hlOiB0cnVlfSk7XG5cdFx0fVxuXHRcdE9iamVjdC5hc3NpZ24oQ29kZU1pcnJvcjYhLCB7XG5cdFx0XHRtb25hY29WZXJzaW9uOiB3cGhsPy5tb25hY29WZXJzaW9uLFxuXHRcdH0pO1xuXG5cdFx0Ly8g55uR6KeGIFdpa2lwbHVzIOe8lui+keahhlxuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHJlY29yZHMpID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdG9yID0gJyNXaWtpcGx1cy1RdWlja2VkaXQsICNXaWtpcGx1cy1TZXR0aW5nLUlucHV0Jyxcblx0XHRcdFx0W2FkZGVkXSA9ICQocmVjb3Jkcy5mbGF0TWFwKCh7YWRkZWROb2Rlc30pID0+IFsuLi5hZGRlZE5vZGVzXSkpLmZpbmQ8SFRNTFRleHRBcmVhRWxlbWVudD4oc2VsZWN0b3IpO1xuXHRcdFx0aWYgKGFkZGVkKSB7XG5cdFx0XHRcdHZvaWQgcmVuZGVyRWRpdG9yKGFkZGVkLCBhZGRlZC5pZCA9PT0gJ1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFtyZW1vdmVkXSA9ICQocmVjb3Jkcy5mbGF0TWFwKCh7cmVtb3ZlZE5vZGVzfSkgPT4gWy4uLnJlbW92ZWROb2Rlc10pKS5maW5kPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFxuXHRcdFx0XHRcdHNlbGVjdG9yXG5cdFx0XHRcdCksXG5cdFx0XHRcdGNtID0gQ29kZU1pcnJvcjYuaW5zdGFuY2VzPy5nZXQocmVtb3ZlZCEpO1xuXHRcdFx0aWYgKHR5cGVvZiBjbT8uZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjbS5kZXN0cm95KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7Y2hpbGRMaXN0OiB0cnVlfSk7XG5cdH1cbn0pKCk7XG5cbmV4cG9ydCB7fTtcbiIsICJpbXBvcnQgJy4vc3R5bGUubGVzcyc7XG5pbXBvcnQge2NoZWNrRGVwZW5kZW5jaWVzfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4oZnVuY3Rpb24gV2lraXBsdXNIaWdobGlnaHQoKSB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dJc0FydGljbGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dJc0FydGljbGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsb2FkZXIgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0YXdhaXQgY2hlY2tEZXBlbmRlbmNpZXMoJ1dpa2lwbHVzJyk7XG5cblx0XHRjb25zdCB7J3Zpc3VhbGVkaXRvci1lbmFibGUnOiBpc1ZlRW5hYmxlfSA9IG13LnVzZXIub3B0aW9ucy5nZXQoKSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcblxuXHRcdC8qIHNlZSA8aHR0cHM6Ly9naXRodWIuY29tL1dpa2lwbHVzL1dpa2lwbHVzL2lzc3Vlcy82NT4gKi9cblx0XHRpZiAoaXNWZUVuYWJsZSkge1xuXHRcdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQudmlzdWFsRWRpdG9yLmNvcmUnKTtcblx0XHR9XG5cblx0XHRhd2FpdCBpbXBvcnQoJy4vc3JjL21haW4nKTtcblx0fTtcblxuXHR2b2lkIGxvYWRlcigpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBNENNQTtB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LFVBQVU7QUFDL0I7RUFDRDtBQUVBLFFBQU0vQixTQUFBLDRCQUFBO0FBQUEsUUFBQW9HLFFBQUFqSCxrQkFBUyxhQUEyQjtBQUN6QyxhQUFBLEdBQU00RyxrQkFBQU0sbUJBQWtCLFVBQVU7QUFFbEMsWUFBTTtRQUFDLHVCQUF1QkM7TUFBVSxJQUFJekgsR0FBRzBILEtBQUtDLFFBQVF6SCxJQUFJO0FBR2hFLFVBQUl1SCxZQUFZO0FBQ2YsY0FBTXpILEdBQUdtQixPQUFPQyxNQUFNLHVCQUF1QjtNQUM5QztBQUVBLFlBQU13RyxRQUFBQyxRQUFBLEVBQUFDLEtBQUEsT0FBQXhDLFVBQUEsR0FBQUQsYUFBQTtJQUNQLENBQUE7QUFBQSxXQUFBLFNBWE1sRSxVQUFBO0FBQUEsYUFBQW9HLE1BQUF2RSxNQUFBLE1BQUFDLFNBQUE7SUFBQTtFQUFBLEdBQUE7QUFhTixPQUFLOUIsT0FBTztBQUNiLEdBQUc7IiwKICAibmFtZXMiOiBbImdldE9iamVjdCIsICJpc0dsb2JhbCIsICJpbml0X2Rpc3QiLCAiX19lc20iLCAia2V5IiwgIkpTT04iLCAicGFyc2UiLCAiU3RyaW5nIiwgImxvY2FsU3RvcmFnZSIsICJnZXRJdGVtIiwgInByb3AiLCAiT2JqZWN0IiwgImhhc093biIsICJnbG9iYWxUaGlzIiwgInBhZ2VOYW1lIiwgIm5zIiwgImNvbnRlbnRtb2RlbCIsICJDT05URU5UTU9ERUxTIiwgIkVYVFMiLCAiTkFNRVNQQUNFUyIsICJnZXRQYWdlTW9kZSIsICJzdWJtaXQiLCAic3VibWl0TWlub3IiLCAiZXNjYXBlRWRpdCIsICJyZW5kZXJFZGl0b3IiLCAiaW5pdF9jb3JlIiwgIndnUGFnZU5hbWUiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlQ29udGVudE1vZGVsIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAid2lraXRleHQiLCAiTWFwIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidmFsdWUiLCAiV2lraXBsdXNQYWdlcyIsICJfV2lraXBsdXNQYWdlcyIsICJQYWdlcyIsICJwYWdlcyIsICJ2YWx1ZXMiLCAiZmlsdGVyIiwgInNlY3Rpb25DYWNoZSIsICJpbmNsdWRlcyIsICJzb21lIiwgInRpdGxlIiwgImVuZHNXaXRoIiwgImxvYWRlciIsICJ1c2luZyIsICJtb2RlcyIsICJTZXQiLCAibWFwIiwgIl9FWFRTJGdldCIsICJfdCRnZXRFeHRlbnNpb24kdG9Mb3ciLCAiX3QkZ2V0RXh0ZW5zaW9uIiwgInQiLCAiVGl0bGUiLCAibmFtZXNwYWNlIiwgImdldE5hbWVzcGFjZUlkIiwgIm1vZGUiLCAiZ2V0RXh0ZW5zaW9uIiwgInRvTG93ZXJDYXNlIiwgImlzR2FkZ2V0IiwgInNpemUiLCAicGFnZSIsICJsZW5ndGgiLCAiaGFzIiwgIl9DT05URU5UTU9ERUxTJGNvbnRlbiIsICJPTyIsICJ1aSIsICJjb25maXJtIiwgIm1zZyIsICJhY3Rpb25zIiwgImxhYmVsIiwgImFjdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZG9jdW1lbnQiLCAiZ2V0RWxlbWVudEJ5SWQiLCAiZGlzcGF0Y2hFdmVudCIsICJQb2ludGVyRXZlbnQiLCAicXVlcnlTZWxlY3RvciIsICJjaGVja2VkIiwgInNldHRpbmdzIiwgImVzY1RvRXhpdFF1aWNrRWRpdCIsICJfcmVmMiIsICJ0YXJnZXQiLCAic2V0dGluZyIsICJfY20kdmlldyRkb20iLCAiX2NtJHZpZXciLCAiY20iLCAiQ29kZU1pcnJvcjYiLCAiZnJvbVRleHRBcmVhIiwgInZpZXciLCAiZG9tIiwgImVkaXRvciIsICJnZXREb21Ob2RlIiwgImlkIiwgImFkZENvbW1hbmQiLCAibW9uYWNvIiwgIktleU1vZCIsICJDdHJsQ21kIiwgIktleUNvZGUiLCAiS2V5UyIsICJTaGlmdCIsICJFc2NhcGUiLCAiZXh0cmFLZXlzIiwgInJ1biIsICJqdW1wIiwgImhyZWYiLCAiX3gyIiwgIl94MyIsICJtYWluX2V4cG9ydHMiLCAiaW5pdF9tYWluIiwgImxpYnMiLCAibWVkaWFXaWtpIiwgIndwaGwiLCAidmVyc2lvbiIsICJDTV9DRE4iLCAiJCIsICJhamF4IiwgImRhdGFUeXBlIiwgImNhY2hlIiwgImFzc2lnbiIsICJtb25hY29WZXJzaW9uIiwgIm9ic2VydmVyIiwgIk11dGF0aW9uT2JzZXJ2ZXIiLCAicmVjb3JkcyIsICJfQ29kZU1pcnJvcjYkaW5zdGFuY2UiLCAic2VsZWN0b3IiLCAiYWRkZWQiLCAiZmxhdE1hcCIsICJhZGRlZE5vZGVzIiwgImZpbmQiLCAicmVtb3ZlZCIsICJyZW1vdmVkTm9kZXMiLCAiaW5zdGFuY2VzIiwgImRlc3Ryb3kiLCAib2JzZXJ2ZSIsICJib2R5IiwgImNoaWxkTGlzdCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIldpa2lwbHVzSGlnaGxpZ2h0IiwgIndnQWN0aW9uIiwgIndnSXNBcnRpY2xlIiwgIl9yZWY0IiwgImNoZWNrRGVwZW5kZW5jaWVzIiwgImlzVmVFbmFibGUiLCAidXNlciIsICJvcHRpb25zIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJ0aGVuIl0KfQo=
