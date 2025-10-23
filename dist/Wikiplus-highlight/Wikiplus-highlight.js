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
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
//! src/Wikiplus-highlight/modules/style.less
var init_style = __esm({
  "src/Wikiplus-highlight/modules/style.less"() {
  }
});
var CDN;
var getObject;
var init_dist = __esm({
  "node_modules/.pnpm/@bhsd+browser@0.0.1/node_modules/@bhsd/browser/dist/index.js"() {
    CDN = "https://testingcf.jsdelivr.net";
    getObject = (key) => JSON.parse(String(localStorage.getItem(key)));
  }
});
//! src/Wikiplus-highlight/modules/core.ts
var page;
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
  "src/Wikiplus-highlight/modules/core.ts"() {
    "use strict";
    init_dist();
    ({
      wgPageName: page,
      wgNamespaceNumber: ns,
      wgPageContentModel: contentmodel
    } = mw.config.get());
    CONTENTMODELS = {
      wikitext: "mediawiki"
    };
    EXTS = {
      css: "css",
      js: "javascript",
      json: "json"
    };
    NAMESPACES = {
      828: "lua",
      274: "html"
    };
    getPageMode = /* @__PURE__ */ function() {
      var _ref = _asyncToGenerator(function* (value) {
        let WikiplusPages;
        if (typeof _WikiplusPages === "object") {
          WikiplusPages = _WikiplusPages;
        } else if (typeof Pages === "object") {
          WikiplusPages = Pages;
        }
        if (WikiplusPages) {
          const pages = Object.values(WikiplusPages).filter(({
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
            var _EXTS, _t$getExtension$toLow, _t$getExtension;
            if (title.endsWith("/doc")) {
              return "template";
            }
            const t = new mw.Title(title), namespace = t.getNamespaceId();
            if (namespace % 2) {
              return "mediawiki";
            }
            const mode = (_EXTS = EXTS[(_t$getExtension$toLow = (_t$getExtension = t.getExtension()) === null || _t$getExtension === void 0 ? void 0 : _t$getExtension.toLowerCase()) !== null && _t$getExtension$toLow !== void 0 ? _t$getExtension$toLow : ""]) !== null && _EXTS !== void 0 ? _EXTS : NAMESPACES[namespace];
            switch (mode) {
              case "javascript":
                return namespace === 8 || namespace === 2300 ? "gadget" : mode;
              case "css":
                return namespace === 2 || namespace === 8 || namespace === 2300 ? mode : "sanitized-css";
              case void 0:
                return namespace === 10 || namespace === 2 ? "template" : "mediawiki";
              default:
                return mode;
            }
          }));
          if (modes.size === 1) {
            const [mode] = modes, title = pages.length === 1 ? pages[0].title : void 0;
            if (mode === "gadget") {
              return ["javascript", 8];
            }
            return mode === "template" ? ["mediawiki", 10, title] : [mode, void 0, title];
          } else if (modes.size === 2) {
            if (modes.has("javascript") && modes.has("gadget")) {
              return ["javascript"];
            } else if (modes.has("mediawiki") && modes.has("template")) {
              return ["mediawiki"];
            }
          }
        }
        if (ns !== 274 && contentmodel !== "Scribunto" || page.endsWith("/doc")) {
          var _CONTENTMODELS$conten;
          return [(_CONTENTMODELS$conten = CONTENTMODELS[contentmodel]) !== null && _CONTENTMODELS$conten !== void 0 ? _CONTENTMODELS$conten : contentmodel, contentmodel === "javascript" ? ns : void 0];
        }
        yield mw.loader.using("oojs-ui-windows");
        if (yield OO.ui.confirm(mw.message("cm-mw-contentmodel").parse(), {
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
    submit = /** 提交编辑 */
    () => {
      document.querySelector("#Wikiplus-Quickedit-Submit").dispatchEvent(new MouseEvent("click"));
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
        document.querySelector("#Wikiplus-Quickedit-Back").dispatchEvent(new MouseEvent("click"));
        return true;
      }
      return false;
    };
    renderEditor = /* @__PURE__ */ function() {
      var _ref2 = _asyncToGenerator(function* (target, setting) {
        var _cm$view$dom, _cm$view;
        const cm = yield CodeMirror6.fromTextArea(target, ...setting ? ["json"] : yield getPageMode(target.value));
        ((_cm$view$dom = (_cm$view = cm.view) === null || _cm$view === void 0 ? void 0 : _cm$view.dom) !== null && _cm$view$dom !== void 0 ? _cm$view$dom : cm.editor.getDomNode()).id = "Wikiplus-CodeMirror";
        if (!setting) {
          if (cm.editor) {
            cm.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, submit);
            cm.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyS, submitMinor);
            cm.editor.addCommand(monaco.KeyCode.Escape, escapeEdit);
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
    }();
  }
});
//! src/Wikiplus-highlight/modules/main.ts
var main_exports = {};
var init_main = __esm({
  "src/Wikiplus-highlight/modules/main.ts"() {
    "use strict";
    init_style();
    init_dist();
    init_core();
    /**!
     * @name Wikiplus-highlight Wikiplus编辑器的CodeMirror语法高亮扩展
     * @author Bhsd <https://github.com/bhsd-harry>
     * @license GPL-3.0
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
        var _libs$wphl$cmVersion;
        const version = "3.2.10";
        libs.wphl = {
          version,
          ...wphl
        };
        const MW_CDN = "npm/@bhsd/codemirror-mediawiki@".concat((_libs$wphl$cmVersion = libs.wphl.cmVersion) !== null && _libs$wphl$cmVersion !== void 0 ? _libs$wphl$cmVersion : "latest", "/dist/wiki.min.js");
        if (typeof CodeMirror6 !== "function") {
          yield $.ajax("".concat(CDN, "/").concat(MW_CDN), {
            dataType: "script",
            cache: true
          });
        }
        const observer = new MutationObserver((records) => {
          var _CodeMirror6$instance;
          const selector = "#Wikiplus-Quickedit, #Wikiplus-Setting-Input", [added] = $(records.flatMap(({
            addedNodes
          }) => {
            return [...addedNodes];
          })).find(selector);
          if (added) {
            void renderEditor(added, added.id === "Wikiplus-Setting-Input");
          }
          const [removed] = $(records.flatMap(({
            removedNodes
          }) => {
            return [...removedNodes];
          })).find(selector), cm = (_CodeMirror6$instance = CodeMirror6.instances) === null || _CodeMirror6$instance === void 0 ? void 0 : _CodeMirror6$instance.get(removed);
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
  const loader = /* @__PURE__ */ function() {
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
  }();
  void loader();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzLWhpZ2hsaWdodC9tb2R1bGVzL3N0eWxlLmxlc3MiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0BiaHNkK2Jyb3dzZXJAMC4wLjEvbm9kZV9tb2R1bGVzL0BiaHNkL2Jyb3dzZXIvZGlzdC9pbmRleC5qcyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L21vZHVsZXMvY29yZS50cyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L21vZHVsZXMvbWFpbi50cyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L1dpa2lwbHVzLWhpZ2hsaWdodC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiI1dpa2lwbHVzLUNvZGVNaXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjY2QxO1xuICBjbGVhcjogYm90aDtcbn1cbmRpdi5XaWtpcGx1cy1JbnRlckJveCB7XG4gIHotaW5kZXg6IDEwMDtcbn1cbiIsICIvLyA8ZGVmaW5lOiRMQU5HUz5cbnZhciBkZWZpbmVfTEFOR1NfZGVmYXVsdCA9IFtcInpoLWhhbnNcIiwgXCJ6aC1oYW50XCJdO1xuXG4vLyAuLi9jb21tb24vZGlzdC9pbmRleC5tanNcbnZhciByYXd1cmxkZWNvZGUgPSAoc3RyKSA9PiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnJlcGxhY2UoLyUoPyFbXFxkYS1mXXsyfSkvZ2l1LCBcIiUyNVwiKSk7XG5cbi8vIHNyYy9pbmRleC50c1xudmFyIENETiA9IFwiaHR0cHM6Ly90ZXN0aW5nY2YuanNkZWxpdnIubmV0XCI7XG52YXIgdGV4dGFyZWEgPSAvKiBAX19QVVJFX18gKi8gKCgpID0+IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJvYmplY3RcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKSA6IHZvaWQgMCkoKTtcbnZhciBkZWNvZGVIVE1MID0gKHN0cikgPT4ge1xuICB0ZXh0YXJlYS5pbm5lckhUTUwgPSBzdHI7XG4gIHJldHVybiB0ZXh0YXJlYS52YWx1ZTtcbn07XG52YXIgbm9ybWFsaXplVGl0bGUgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgZGVjb2RlZCA9IHJhd3VybGRlY29kZSh0aXRsZSk7XG4gIHJldHVybiAvWzw+W1xcXXx7fV0vdS50ZXN0KGRlY29kZWQpID8gZGVjb2RlZCA6IGRlY29kZUhUTUwoZGVjb2RlZCk7XG59O1xudmFyIGxvYWRpbmcgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGxvYWRTY3JpcHQgPSAoc3JjLCBnbG9iYWxDb25zdCwgYW1kKSA9PiB7XG4gIGlmIChsb2FkaW5nLmhhcyhzcmMpKSB7XG4gICAgcmV0dXJuIGxvYWRpbmcuZ2V0KHNyYyk7XG4gIH1cbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IC9eaHR0cHM/OlxcL1xcLy9pdS50ZXN0KHNyYykgPyBzcmMgOiBgJHtDRE59LyR7c3JjfWA7XG4gICAgbGV0IG9iaiA9IGdsb2JhbFRoaXM7XG4gICAgZm9yIChjb25zdCBwcm9wIG9mIGdsb2JhbENvbnN0LnNwbGl0KFwiLlwiKSkge1xuICAgICAgb2JqID0gb2JqPy5bcHJvcF07XG4gICAgfVxuICAgIGlmIChvYmopIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9IGVsc2UgaWYgKGFtZCAmJiB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgXCJhbWRcIiBpbiBkZWZpbmUpIHtcbiAgICAgIGNvbnN0IHJlcXVpcmVqcyA9IGdsb2JhbFRoaXMucmVxdWlyZTtcbiAgICAgIHJlcXVpcmVqcy5jb25maWcoeyBwYXRoczogeyBbZ2xvYmFsQ29uc3RdOiBwYXRoIH0gfSk7XG4gICAgICByZXF1aXJlanMoW2dsb2JhbENvbnN0XSwgKGV4cG9ydHMpID0+IHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7IFtnbG9iYWxDb25zdF06IGV4cG9ydHMgfSk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgc2NyaXB0LnNyYyA9IHBhdGg7XG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQoc2NyaXB0KTtcbiAgICB9XG4gIH0pO1xuICBsb2FkaW5nLnNldChzcmMsIHByb21pc2UpO1xuICByZXR1cm4gcHJvbWlzZTtcbn07XG52YXIgZ2V0T2JqZWN0ID0gKGtleSkgPT4gSlNPTi5wYXJzZShTdHJpbmcobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkpO1xudmFyIHNldE9iamVjdCA9IChrZXksIHZhbHVlKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbn07XG52YXIgcGFyc2VWZXJzaW9uID0gKHZlcnNpb24pID0+IHZlcnNpb24uc3BsaXQoXCIuXCIsIDMpLm1hcChOdW1iZXIpO1xudmFyIGNvbXBhcmVWZXJzaW9uID0gKHZlcnNpb24sIGJhc2VWZXJzaW9uKSA9PiB7XG4gIGNvbnN0IFttYWpvciwgbWlub3JdID0gcGFyc2VWZXJzaW9uKHZlcnNpb24pLCBbYmFzZU1ham9yLCBiYXNlTWlub3JdID0gcGFyc2VWZXJzaW9uKGJhc2VWZXJzaW9uKTtcbiAgcmV0dXJuIG1ham9yID4gYmFzZU1ham9yIHx8IG1ham9yID09PSBiYXNlTWFqb3IgJiYgbWlub3IgPj0gYmFzZU1pbm9yO1xufTtcbnZhciBzZXRJMThOID0gYXN5bmMgKHVybCwgY3VyLCBsYW5ndWFnZXMsIGFjY2VwdGFibGVMYW5ncywga2V5LCBpMThuID0gZ2V0T2JqZWN0KGtleSkgPz8ge30pID0+IHtcbiAgY29uc3QgeyB2ZXJzaW9uLCBsYW5nIH0gPSBpMThuLCBsYW5ncyA9IEFycmF5LmlzQXJyYXkobGFuZ3VhZ2VzKSA/IGxhbmd1YWdlcyA6IFtsYW5ndWFnZXNdO1xuICBpZiAodmVyc2lvbiA9PT0gY3VyICYmIGxhbmdzLmluY2x1ZGVzKGxhbmcpKSB7XG4gICAgcmV0dXJuIGkxOG47XG4gIH1cbiAgZm9yIChjb25zdCBsYW5ndWFnZSBvZiBsYW5ncykge1xuICAgIGNvbnN0IGwgPSBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICghYWNjZXB0YWJsZUxhbmdzLmluY2x1ZGVzKGwpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3VybH0vJHtsfS5qc29uYCk7XG4gICAgICBPYmplY3QuYXNzaWduKGkxOG4sIGF3YWl0IHJlcy5qc29uKCksIHsgdmVyc2lvbjogY3VyLCBsYW5nOiBsYW5ndWFnZSB9KTtcbiAgICAgIHNldE9iamVjdChrZXksIGkxOG4pO1xuICAgICAgcmV0dXJuIGkxOG47XG4gICAgfSBjYXRjaCB7XG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIHRoZSBsb2NhbGl6YXRpb24gZm9yICR7bGFuZ3NbMF19LmApO1xufTtcbnZhciBjb25maWdMb2FkZWQgPSBmYWxzZTtcbnZhciBpMThuTG9hZGVkID0gZmFsc2U7XG52YXIgZ2V0V2lraXBhcnNlID0gYXN5bmMgKGdldENvbmZpZywgbGFuZ3MsIGNkbikgPT4ge1xuICBjb25zdCBkaXIgPSBcImV4dGVuc2lvbnMvZGlzdFwiO1xuICBsZXQgc3JjID0gY2RuIHx8IGBucG0vd2lraXBhcnNlci1ub2RlLyR7ZGlyfS9iYXNlLm1pbi5qc2A7XG4gIGlmICghc3JjLmVuZHNXaXRoKFwiLmpzXCIpKSB7XG4gICAgc3JjID0gYCR7c3JjfSR7c3JjLmVuZHNXaXRoKFwiL1wiKSA/IFwiXCIgOiBcIi9cIn0ke2Rpcn0vYmFzZS5qc2A7XG4gIH1cbiAgYXdhaXQgbG9hZFNjcmlwdChzcmMsIFwid2lraXBhcnNlXCIpO1xuICBhd2FpdCBsb2FkU2NyaXB0KGAke3dpa2lwYXJzZS5DRE59LyR7ZGlyfS9sc3AuanNgLCBcIndpa2lwYXJzZS5MYW5ndWFnZVNlcnZpY2VcIik7XG4gIGlmICghY29uZmlnTG9hZGVkICYmIHR5cGVvZiBnZXRDb25maWcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbmZpZ0xvYWRlZCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHdpa2lwYXJzZS5zZXRDb25maWcoYXdhaXQgZ2V0Q29uZmlnKCkpO1xuICAgIH0gY2F0Y2gge1xuICAgIH1cbiAgfVxuICBpZiAoIWkxOG5Mb2FkZWQgJiYgbGFuZ3MpIHtcbiAgICBpMThuTG9hZGVkID0gdHJ1ZTtcbiAgICBjb25zdCBrZXkgPSBcIndpa2lwYXJzZS1pMThuXCIsIHsgdmVyc2lvbiB9ID0gd2lraXBhcnNlO1xuICAgIHRyeSB7XG4gICAgICB3aWtpcGFyc2Uuc2V0STE4Tihhd2FpdCBzZXRJMThOKGAke3dpa2lwYXJzZS5DRE59L2kxOG5gLCB2ZXJzaW9uLCBsYW5ncywgZGVmaW5lX0xBTkdTX2RlZmF1bHQsIGtleSkpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0T2JqZWN0KGtleSwgeyB2ZXJzaW9uLCBsYW5nOiBcImVuXCIgfSk7XG4gICAgfVxuICB9XG59O1xudmFyIGxzcHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBnZXRMU1AgPSAob2JqLCBpbmNsdWRlLCBnZXRDb25maWcsIGxhbmcpID0+IHtcbiAgdm9pZCBnZXRXaWtpcGFyc2UoZ2V0Q29uZmlnLCBsYW5nKTtcbiAgaWYgKHR5cGVvZiB3aWtpcGFyc2UgIT09IFwib2JqZWN0XCIgfHwgIXdpa2lwYXJzZS5MYW5ndWFnZVNlcnZpY2UgfHwgbHNwcy5oYXMob2JqKSkge1xuICAgIHJldHVybiBsc3BzLmdldChvYmopO1xuICB9XG4gIGNvbnN0IGxzcCA9IG5ldyB3aWtpcGFyc2UuTGFuZ3VhZ2VTZXJ2aWNlKGluY2x1ZGUpO1xuICBsc3BzLnNldChvYmosIGxzcCk7XG4gIHJldHVybiBsc3A7XG59O1xuZXhwb3J0IHtcbiAgQ0ROLFxuICBjb21wYXJlVmVyc2lvbixcbiAgZGVjb2RlSFRNTCxcbiAgZ2V0TFNQLFxuICBnZXRPYmplY3QsXG4gIGdldFdpa2lwYXJzZSxcbiAgbG9hZFNjcmlwdCxcbiAgbm9ybWFsaXplVGl0bGUsXG4gIHNldEkxOE4sXG4gIHNldE9iamVjdFxufTtcbiIsICJpbXBvcnQge2dldE9iamVjdH0gZnJvbSAnQGJoc2QvYnJvd3Nlcic7XG5cbmNvbnN0IHt3Z1BhZ2VOYW1lOiBwYWdlLCB3Z05hbWVzcGFjZU51bWJlcjogbnMsIHdnUGFnZUNvbnRlbnRNb2RlbDogY29udGVudG1vZGVsfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgQ09OVEVOVE1PREVMUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcblx0XHR3aWtpdGV4dDogJ21lZGlhd2lraScsXG5cdH0sXG5cdEVYVFM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG5cdFx0Y3NzOiAnY3NzJyxcblx0XHRqczogJ2phdmFzY3JpcHQnLFxuXHRcdGpzb246ICdqc29uJyxcblx0fSxcblx0TkFNRVNQQUNFUzogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHtcblx0XHQ4Mjg6ICdsdWEnLFxuXHRcdDI3NDogJ2h0bWwnLFxuXHR9O1xuXG4vKipcbiAqIOajgOafpemhtemdouivreiogOexu+Wei1xuICpcbiAqIEBwYXJhbSB2YWx1ZSDpobXpnaLlhoXlrrlcbiAqL1xuY29uc3QgZ2V0UGFnZU1vZGUgPSBhc3luYyAodmFsdWU6IHN0cmluZyk6IFByb21pc2U8W3N0cmluZywgKG51bWJlciB8IHVuZGVmaW5lZCk/LCAoc3RyaW5nIHwgdW5kZWZpbmVkKT9dPiA9PiB7XG5cdGxldCBXaWtpcGx1c1BhZ2VzO1xuXHRpZiAodHlwZW9mIF9XaWtpcGx1c1BhZ2VzID09PSAnb2JqZWN0Jykge1xuXHRcdFdpa2lwbHVzUGFnZXMgPSBfV2lraXBsdXNQYWdlcztcblx0fSBlbHNlIGlmICh0eXBlb2YgUGFnZXMgPT09ICdvYmplY3QnKSB7XG5cdFx0V2lraXBsdXNQYWdlcyA9IFBhZ2VzO1xuXHR9XG5cdGlmIChXaWtpcGx1c1BhZ2VzKSB7XG5cdFx0Y29uc3QgcGFnZXMgPSBPYmplY3QudmFsdWVzKFdpa2lwbHVzUGFnZXMpLmZpbHRlcigoe3NlY3Rpb25DYWNoZX0pID0+IHtcblx0XHRcdHJldHVybiBPYmplY3QudmFsdWVzKHNlY3Rpb25DYWNoZSkuaW5jbHVkZXModmFsdWUpO1xuXHRcdH0pO1xuXHRcdGlmIChcblx0XHRcdHBhZ2VzLnNvbWUoKHt0aXRsZX0pID0+IHtcblx0XHRcdFx0cmV0dXJuICF0aXRsZS5lbmRzV2l0aCgnL2RvYycpO1xuXHRcdFx0fSlcblx0XHQpIHtcblx0XHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnbWVkaWF3aWtpLlRpdGxlJyk7XG5cdFx0fVxuXHRcdGNvbnN0IG1vZGVzID0gbmV3IFNldChcblx0XHRcdHBhZ2VzLm1hcCgoe3RpdGxlfSkgPT4ge1xuXHRcdFx0XHRpZiAodGl0bGUuZW5kc1dpdGgoJy9kb2MnKSkge1xuXHRcdFx0XHRcdHJldHVybiAndGVtcGxhdGUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHQgPSBuZXcgbXcuVGl0bGUodGl0bGUpLFxuXHRcdFx0XHRcdG5hbWVzcGFjZSA9IHQuZ2V0TmFtZXNwYWNlSWQoKTtcblx0XHRcdFx0aWYgKG5hbWVzcGFjZSAlIDIpIHtcblx0XHRcdFx0XHRyZXR1cm4gJ21lZGlhd2lraSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgbW9kZSA9IEVYVFNbdC5nZXRFeHRlbnNpb24oKT8udG9Mb3dlckNhc2UoKSA/PyAnJ10gPz8gTkFNRVNQQUNFU1tuYW1lc3BhY2VdO1xuXHRcdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0XHRjYXNlICdqYXZhc2NyaXB0Jzpcblx0XHRcdFx0XHRcdHJldHVybiBuYW1lc3BhY2UgPT09IDggfHwgbmFtZXNwYWNlID09PSAyMzAwID8gJ2dhZGdldCcgOiBtb2RlO1xuXHRcdFx0XHRcdGNhc2UgJ2Nzcyc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmFtZXNwYWNlID09PSAyIHx8IG5hbWVzcGFjZSA9PT0gOCB8fCBuYW1lc3BhY2UgPT09IDIzMDAgPyBtb2RlIDogJ3Nhbml0aXplZC1jc3MnO1xuXHRcdFx0XHRcdGNhc2UgdW5kZWZpbmVkOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5hbWVzcGFjZSA9PT0gMTAgfHwgbmFtZXNwYWNlID09PSAyID8gJ3RlbXBsYXRlJyA6ICdtZWRpYXdpa2knO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbW9kZTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpO1xuXHRcdGlmIChtb2Rlcy5zaXplID09PSAxKSB7XG5cdFx0XHRjb25zdCBbbW9kZV0gPSBtb2Rlcyxcblx0XHRcdFx0dGl0bGUgPSBwYWdlcy5sZW5ndGggPT09IDEgPyBwYWdlc1swXSEudGl0bGUgOiB1bmRlZmluZWQ7XG5cdFx0XHRpZiAobW9kZSA9PT0gJ2dhZGdldCcpIHtcblx0XHRcdFx0cmV0dXJuIFsnamF2YXNjcmlwdCcsIDhdO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1vZGUgPT09ICd0ZW1wbGF0ZScgPyBbJ21lZGlhd2lraScsIDEwLCB0aXRsZV0gOiBbbW9kZSEsIHVuZGVmaW5lZCwgdGl0bGVdO1xuXHRcdH0gZWxzZSBpZiAobW9kZXMuc2l6ZSA9PT0gMikge1xuXHRcdFx0aWYgKG1vZGVzLmhhcygnamF2YXNjcmlwdCcpICYmIG1vZGVzLmhhcygnZ2FkZ2V0JykpIHtcblx0XHRcdFx0cmV0dXJuIFsnamF2YXNjcmlwdCddO1xuXHRcdFx0fSBlbHNlIGlmIChtb2Rlcy5oYXMoJ21lZGlhd2lraScpICYmIG1vZGVzLmhhcygndGVtcGxhdGUnKSkge1xuXHRcdFx0XHRyZXR1cm4gWydtZWRpYXdpa2knXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0aWYgKChucyAhPT0gMjc0ICYmIGNvbnRlbnRtb2RlbCAhPT0gJ1NjcmlidW50bycpIHx8IHBhZ2UuZW5kc1dpdGgoJy9kb2MnKSkge1xuXHRcdHJldHVybiBbQ09OVEVOVE1PREVMU1tjb250ZW50bW9kZWxdID8/IGNvbnRlbnRtb2RlbCwgY29udGVudG1vZGVsID09PSAnamF2YXNjcmlwdCcgPyBucyA6IHVuZGVmaW5lZF07XG5cdH1cblx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdvb2pzLXVpLXdpbmRvd3MnKTtcblx0aWYgKFxuXHRcdGF3YWl0IE9PLnVpLmNvbmZpcm0obXcubWVzc2FnZSgnY20tbXctY29udGVudG1vZGVsJykucGFyc2UoKSwge1xuXHRcdFx0YWN0aW9uczogW3tsYWJlbDogbnMgPT09IDI3NCA/ICdXaWRnZXQnIDogJ0x1YSd9LCB7bGFiZWw6ICdXaWtpdGV4dCcsIGFjdGlvbjogJ2FjY2VwdCd9XSxcblx0XHR9KVxuXHQpIHtcblx0XHRyZXR1cm4gWydtZWRpYXdpa2knXTtcblx0fVxuXHRyZXR1cm4gW25zID09PSAyNzQgPyAnaHRtbCcgOiAnbHVhJ107XG59O1xuXG5jb25zdCBzdWJtaXQgPSAvKiog5o+Q5Lqk57yW6L6RICovICgpOiB0cnVlID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpIS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KCdjbGljaycpKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0c3VibWl0TWlub3IgPSAvKiog5o+Q5Lqk5bCP57yW6L6RICovICgpOiB0cnVlID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpIS5jaGVja2VkID0gdHJ1ZTtcblx0XHRyZXR1cm4gc3VibWl0KCk7XG5cdH0sXG5cdGVzY2FwZUVkaXQgPSAvKiog5oyJ5LiLRXNj6ZSu6YCA5Ye657yW6L6RICovICgpOiBib29sZWFuID0+IHtcblx0XHRjb25zdCBzZXR0aW5nczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsID0gZ2V0T2JqZWN0KCdXaWtpcGx1c19TZXR0aW5ncycpLFxuXHRcdFx0ZXNjVG9FeGl0UXVpY2tFZGl0ID0gc2V0dGluZ3MgJiYgKHNldHRpbmdzWydlc2NfdG9fZXhpdF9xdWlja2VkaXQnXSB8fCBzZXR0aW5nc1snZXNjVG9FeGl0UXVpY2tFZGl0J10pO1xuXHRcdGlmIChlc2NUb0V4aXRRdWlja0VkaXQgPT09IHRydWUgfHwgZXNjVG9FeGl0UXVpY2tFZGl0ID09PSAndHJ1ZScpIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpIS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KCdjbGljaycpKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cbi8qKlxuICog5riy5p+T57yW6L6R5ZmoXG4gKlxuICogQHBhcmFtIHRhcmdldCDnm67moIfnvJbovpHmoYZcbiAqIEBwYXJhbSBzZXR0aW5nIOaYr+WQpuaYr1dpa2lwbHVz6K6+572u77yI5L2/55SoanNvbuivreazle+8iVxuICovXG5leHBvcnQgY29uc3QgcmVuZGVyRWRpdG9yID0gYXN5bmMgKHRhcmdldDogSFRNTFRleHRBcmVhRWxlbWVudCwgc2V0dGluZzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBjbSA9IGF3YWl0IENvZGVNaXJyb3I2LmZyb21UZXh0QXJlYShcblx0XHR0YXJnZXQsXG5cdFx0Li4uKHNldHRpbmcgPyAoWydqc29uJ10gc2F0aXNmaWVzIFtzdHJpbmddKSA6IGF3YWl0IGdldFBhZ2VNb2RlKHRhcmdldC52YWx1ZSkpXG5cdCk7XG5cdChjbS52aWV3Py5kb20gPz8gY20uZWRpdG9yIS5nZXREb21Ob2RlKCkhKS5pZCA9ICdXaWtpcGx1cy1Db2RlTWlycm9yJztcblxuXHRpZiAoIXNldHRpbmcpIHtcblx0XHQvLyDmma7pgJpXaWtpcGx1c+e8lui+keWMulxuXHRcdGlmIChjbS5lZGl0b3IpIHtcblx0XHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cblx0XHRcdGNtLmVkaXRvci5hZGRDb21tYW5kKG1vbmFjby5LZXlNb2QuQ3RybENtZCB8IG1vbmFjby5LZXlDb2RlLktleVMsIHN1Ym1pdCk7XG5cdFx0XHRjbS5lZGl0b3IuYWRkQ29tbWFuZChtb25hY28uS2V5TW9kLkN0cmxDbWQgfCBtb25hY28uS2V5TW9kLlNoaWZ0IHwgbW9uYWNvLktleUNvZGUuS2V5Uywgc3VibWl0TWlub3IpO1xuXHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1iaXR3aXNlICovXG5cdFx0XHRjbS5lZGl0b3IuYWRkQ29tbWFuZChtb25hY28uS2V5Q29kZS5Fc2NhcGUsIGVzY2FwZUVkaXQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbS5leHRyYUtleXMoW1xuXHRcdFx0XHR7a2V5OiAnTW9kLVMnLCBydW46IHN1Ym1pdH0sXG5cdFx0XHRcdHtrZXk6ICdTaGlmdC1Nb2QtUycsIHJ1bjogc3VibWl0TWlub3J9LFxuXHRcdFx0XHR7a2V5OiAnRXNjJywgcnVuOiBlc2NhcGVFZGl0fSxcblx0XHRcdF0pO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGp1bXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxBbmNob3JFbGVtZW50PignI1dpa2lwbHVzLVF1aWNrZWRpdC1KdW1wID4gYScpO1xuXHRpZiAoanVtcCkge1xuXHRcdGp1bXAuaHJlZiA9ICcjV2lraXBsdXMtQ29kZU1pcnJvcic7XG5cdH1cbn07XG4iLCAiLyoqIVxuICogQG5hbWUgV2lraXBsdXMtaGlnaGxpZ2h0IFdpa2lwbHVz57yW6L6R5Zmo55qEQ29kZU1pcnJvcuivreazlemrmOS6ruaJqeWxlVxuICogQGF1dGhvciBCaHNkIDxodHRwczovL2dpdGh1Yi5jb20vYmhzZC1oYXJyeT5cbiAqIEBsaWNlbnNlIEdQTC0zLjBcbiAqL1xuaW1wb3J0ICcuL3N0eWxlLmxlc3MnO1xuaW1wb3J0IHtDRE59IGZyb20gJ0BiaHNkL2Jyb3dzZXInO1xuaW1wb3J0IHtyZW5kZXJFZGl0b3J9IGZyb20gJy4vY29yZSc7XG5cbmRlY2xhcmUgbmFtZXNwYWNlIG1lZGlhV2lraS5saWJzIHtcblx0bGV0IHdwaGw6IHt2ZXJzaW9uPzogc3RyaW5nOyBjbVZlcnNpb24/OiBzdHJpbmd9IHwgdW5kZWZpbmVkO1xufVxuXG4oYXN5bmMgKCkgPT4ge1xuXHRpZiAoIW13LmNvbmZpZy5nZXQoJ3dnSXNBcnRpY2xlJykgfHwgbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSAhPT0gJ3ZpZXcnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHtsaWJzfSA9IG1lZGlhV2lraSxcblx0XHR7d3BobH0gPSBsaWJzO1xuXHRpZiAoIXdwaGw/LnZlcnNpb24pIHtcblx0XHRjb25zdCB2ZXJzaW9uID0gJzMuMi4xMCc7XG5cdFx0bGlicy53cGhsID0ge3ZlcnNpb24sIC4uLndwaGx9OyAvLyDlvIDlp4vliqDovb1cblxuXHRcdC8vIOi3r+W+hFxuXHRcdGNvbnN0IE1XX0NETiA9IGBucG0vQGJoc2QvY29kZW1pcnJvci1tZWRpYXdpa2lAJHtsaWJzLndwaGwuY21WZXJzaW9uID8/ICdsYXRlc3QnfS9kaXN0L3dpa2kubWluLmpzYDtcblxuXHRcdGlmICh0eXBlb2YgQ29kZU1pcnJvcjYgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGF3YWl0ICQuYWpheChgJHtDRE59LyR7TVdfQ0ROfWAsIHtkYXRhVHlwZTogJ3NjcmlwdCcsIGNhY2hlOiB0cnVlfSk7XG5cdFx0fVxuXG5cdFx0Ly8g55uR6KeGIFdpa2lwbHVzIOe8lui+keahhlxuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHJlY29yZHMpID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdG9yID0gJyNXaWtpcGx1cy1RdWlja2VkaXQsICNXaWtpcGx1cy1TZXR0aW5nLUlucHV0Jyxcblx0XHRcdFx0W2FkZGVkXSA9ICQoXG5cdFx0XHRcdFx0cmVjb3Jkcy5mbGF0TWFwKCh7YWRkZWROb2Rlc30pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBbLi4uYWRkZWROb2Rlc107XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KS5maW5kPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KHNlbGVjdG9yKTtcblx0XHRcdGlmIChhZGRlZCkge1xuXHRcdFx0XHR2b2lkIHJlbmRlckVkaXRvcihhZGRlZCwgYWRkZWQuaWQgPT09ICdXaWtpcGx1cy1TZXR0aW5nLUlucHV0Jyk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbcmVtb3ZlZF0gPSAkKFxuXHRcdFx0XHRcdHJlY29yZHMuZmxhdE1hcCgoe3JlbW92ZWROb2Rlc30pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBbLi4ucmVtb3ZlZE5vZGVzXTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpLmZpbmQ8SFRNTFRleHRBcmVhRWxlbWVudD4oc2VsZWN0b3IpLFxuXHRcdFx0XHRjbSA9IENvZGVNaXJyb3I2Lmluc3RhbmNlcz8uZ2V0KHJlbW92ZWQhKTtcblx0XHRcdGlmICh0eXBlb2YgY20/LmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y20uZGVzdHJveSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge2NoaWxkTGlzdDogdHJ1ZX0pO1xuXHR9XG59KSgpO1xuXG5leHBvcnQge307XG4iLCAiaW1wb3J0IHtjaGVja0RlcGVuZGVuY2llc30gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuKGZ1bmN0aW9uIFdpa2lwbHVzSGlnaGxpZ2h0KCkge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnSXNBcnRpY2xlfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnSXNBcnRpY2xlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbG9hZGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGF3YWl0IGNoZWNrRGVwZW5kZW5jaWVzKCdXaWtpcGx1cycpO1xuXG5cdFx0Y29uc3Qgeyd2aXN1YWxlZGl0b3ItZW5hYmxlJzogaXNWZUVuYWJsZX0gPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCkgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cblx0XHQvKiBzZWUgPGh0dHBzOi8vZ2l0aHViLmNvbS9XaWtpcGx1cy9XaWtpcGx1cy9pc3N1ZXMvNjU+ICovXG5cdFx0aWYgKGlzVmVFbmFibGUpIHtcblx0XHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LnZpc3VhbEVkaXRvci5jb3JlJyk7XG5cdFx0fVxuXG5cdFx0YXdhaXQgaW1wb3J0KCcuL21vZHVsZXMvbWFpbicpO1xuXHR9O1xuXG5cdHZvaWQgbG9hZGVyKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxhQUFBQyxNQUFBO0VBQUEsOENBQUE7RUFBQTtBQUFBLENBQUE7QUNBQSxJQU9JQztBQVBKLElBaURJQztBQWpESixJQUFBQyxZQUFBSCxNQUFBO0VBQUEsb0ZBQUE7QUFPSUMsVUFBTTtBQTBDTkMsZ0JBQWFFLFNBQVFDLEtBQUtDLE1BQU1DLE9BQU9DLGFBQWFDLFFBQVFMLEdBQUcsQ0FBQyxDQUFDO0VBQUE7QUFBQSxDQUFBOztBQ2pEckUsSUFFbUJNO0FBRm5CLElBRTRDQztBQUY1QyxJQUVvRUM7QUFGcEUsSUFJTUM7QUFKTixJQU9DQztBQVBELElBWUNDO0FBWkQsSUFzQk1DO0FBdEJOLElBNEZNQztBQTVGTixJQWdHQ0M7QUFoR0QsSUFvR0NDO0FBcEdELElBb0hhQztBQXBIYixJQUFBQyxZQUFBckIsTUFBQTtFQUFBLDJDQUFBO0FBQUE7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ZSIsICJfX2VzbSIsICJDRE4iLCAiZ2V0T2JqZWN0IiwgImluaXRfZGlzdCIsICJrZXkiLCAiSlNPTiIsICJwYXJzZSIsICJTdHJpbmciLCAibG9jYWxTdG9yYWdlIiwgImdldEl0ZW0iLCAicGFnZSIsICJucyIsICJjb250ZW50bW9kZWwiLCAiQ09OVEVOVE1PREVMUyIsICJFWFRTIiwgIk5BTUVTUEFDRVMiLCAiZ2V0UGFnZU1vZGUiLCAic3VibWl0IiwgInN1Ym1pdE1pbm9yIiwgImVzY2FwZUVkaXQiLCAicmVuZGVyRWRpdG9yIiwgImluaXRfY29yZSIsICJ3Z1BhZ2VOYW1lIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIndpa2l0ZXh0IiwgImNzcyIsICJqcyIsICJqc29uIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidmFsdWUiLCAiV2lraXBsdXNQYWdlcyIsICJfV2lraXBsdXNQYWdlcyIsICJQYWdlcyIsICJwYWdlcyIsICJPYmplY3QiLCAidmFsdWVzIiwgImZpbHRlciIsICJzZWN0aW9uQ2FjaGUiLCAiaW5jbHVkZXMiLCAic29tZSIsICJ0aXRsZSIsICJlbmRzV2l0aCIsICJsb2FkZXIiLCAidXNpbmciLCAibW9kZXMiLCAiU2V0IiwgIm1hcCIsICJfRVhUUyIsICJfdCRnZXRFeHRlbnNpb24kdG9Mb3ciLCAiX3QkZ2V0RXh0ZW5zaW9uIiwgInQiLCAiVGl0bGUiLCAibmFtZXNwYWNlIiwgImdldE5hbWVzcGFjZUlkIiwgIm1vZGUiLCAiZ2V0RXh0ZW5zaW9uIiwgInRvTG93ZXJDYXNlIiwgInNpemUiLCAibGVuZ3RoIiwgImhhcyIsICJfQ09OVEVOVE1PREVMUyRjb250ZW4iLCAiT08iLCAidWkiLCAiY29uZmlybSIsICJtZXNzYWdlIiwgImFjdGlvbnMiLCAibGFiZWwiLCAiYWN0aW9uIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImRpc3BhdGNoRXZlbnQiLCAiTW91c2VFdmVudCIsICJjaGVja2VkIiwgInNldHRpbmdzIiwgImVzY1RvRXhpdFF1aWNrRWRpdCIsICJfcmVmMiIsICJ0YXJnZXQiLCAic2V0dGluZyIsICJfY20kdmlldyRkb20iLCAiX2NtJHZpZXciLCAiY20iLCAiQ29kZU1pcnJvcjYiLCAiZnJvbVRleHRBcmVhIiwgInZpZXciLCAiZG9tIiwgImVkaXRvciIsICJnZXREb21Ob2RlIiwgImlkIiwgImFkZENvbW1hbmQiLCAibW9uYWNvIiwgIktleU1vZCIsICJDdHJsQ21kIiwgIktleUNvZGUiLCAiS2V5UyIsICJTaGlmdCIsICJFc2NhcGUiLCAiZXh0cmFLZXlzIiwgInJ1biIsICJqdW1wIiwgImhyZWYiLCAiX3gyIiwgIl94MyIsICJtYWluX2V4cG9ydHMiLCAiaW5pdF9tYWluIiwgImxpYnMiLCAibWVkaWFXaWtpIiwgIndwaGwiLCAidmVyc2lvbiIsICJfbGlicyR3cGhsJGNtVmVyc2lvbiIsICJNV19DRE4iLCAiY29uY2F0IiwgImNtVmVyc2lvbiIsICIkIiwgImFqYXgiLCAiZGF0YVR5cGUiLCAiY2FjaGUiLCAib2JzZXJ2ZXIiLCAiTXV0YXRpb25PYnNlcnZlciIsICJyZWNvcmRzIiwgIl9Db2RlTWlycm9yNiRpbnN0YW5jZSIsICJzZWxlY3RvciIsICJhZGRlZCIsICJmbGF0TWFwIiwgImFkZGVkTm9kZXMiLCAiZmluZCIsICJyZW1vdmVkIiwgInJlbW92ZWROb2RlcyIsICJpbnN0YW5jZXMiLCAiZGVzdHJveSIsICJvYnNlcnZlIiwgImJvZHkiLCAiY2hpbGRMaXN0IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiV2lraXBsdXNIaWdobGlnaHQiLCAid2dBY3Rpb24iLCAid2dJc0FydGljbGUiLCAiX3JlZjQiLCAiY2hlY2tEZXBlbmRlbmNpZXMiLCAiaXNWZUVuYWJsZSIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiUHJvbWlzZSIsICJyZXNvbHZlIiwgInRoZW4iXQp9Cg==
