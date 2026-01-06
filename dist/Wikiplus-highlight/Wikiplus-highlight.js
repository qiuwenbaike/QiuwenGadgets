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
  "node_modules/.pnpm/@bhsd+browser@0.2.1/node_modules/@bhsd/browser/dist/index.js"() {
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
      document.querySelector("#Wikiplus-Quickedit-Submit").dispatchEvent(new PointerEvent("click"));
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
        document.querySelector("#Wikiplus-Quickedit-Back").dispatchEvent(new PointerEvent("click"));
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
        const version = "3.3.1";
        libs.wphl = {
          version,
          ...wphl
        };
        const MW_CDN = "npm/@bhsd/codemirror-mediawiki@".concat((_libs$wphl$cmVersion = libs.wphl.cmVersion) !== null && _libs$wphl$cmVersion !== void 0 ? _libs$wphl$cmVersion : "latest", "/dist/wiki.min.js");
        if (typeof CodeMirror6 !== "function") {
          yield $.ajax("".concat((wphl === null || wphl === void 0 ? void 0 : wphl.CDN) || CDN, "/").concat(MW_CDN), {
            dataType: "script",
            cache: true
          });
        }
        Object.assign(CodeMirror6, {
          CDN: wphl === null || wphl === void 0 ? void 0 : wphl.CDN,
          monacoVersion: wphl === null || wphl === void 0 ? void 0 : wphl.monacoVersion
        });
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzLWhpZ2hsaWdodC9tb2R1bGVzL3N0eWxlLmxlc3MiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0BiaHNkK2Jyb3dzZXJAMC4yLjEvbm9kZV9tb2R1bGVzL0BiaHNkL2Jyb3dzZXIvZGlzdC9pbmRleC5qcyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L21vZHVsZXMvY29yZS50cyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L21vZHVsZXMvbWFpbi50cyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L1dpa2lwbHVzLWhpZ2hsaWdodC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiI1dpa2lwbHVzLUNvZGVNaXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjY2QxO1xuICBjbGVhcjogYm90aDtcbn1cbmRpdi5XaWtpcGx1cy1JbnRlckJveCB7XG4gIHotaW5kZXg6IDEwMDtcbn1cbiIsICIvLyA8ZGVmaW5lOiRMQU5HUz5cbnZhciBkZWZpbmVfTEFOR1NfZGVmYXVsdCA9IFtcInpoLWhhbnNcIiwgXCJ6aC1oYW50XCJdO1xuXG4vLyAuLi9jb21tb24vZGlzdC9pbmRleC5tanNcbnZhciByYXd1cmxkZWNvZGUgPSAoc3RyKSA9PiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnJlcGxhY2UoLyUoPyFbXFxkYS1mXXsyfSkvZ2l1LCBcIiUyNVwiKSk7XG5cbi8vIHNyYy9pbmRleC50c1xudmFyIENETiA9IFwiaHR0cHM6Ly90ZXN0aW5nY2YuanNkZWxpdnIubmV0XCI7XG52YXIgdGV4dGFyZWEgPSAvKiBAX19QVVJFX18gKi8gKCgpID0+IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJvYmplY3RcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKSA6IHZvaWQgMCkoKTtcbnZhciBkZWNvZGVIVE1MID0gKHN0cikgPT4ge1xuICB0ZXh0YXJlYS5pbm5lckhUTUwgPSBzdHI7XG4gIHJldHVybiB0ZXh0YXJlYS52YWx1ZTtcbn07XG52YXIgbm9ybWFsaXplVGl0bGUgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgZGVjb2RlZCA9IHJhd3VybGRlY29kZSh0aXRsZSk7XG4gIHJldHVybiAvWzw+W1xcXXx7fV0vdS50ZXN0KGRlY29kZWQpID8gZGVjb2RlZCA6IGRlY29kZUhUTUwoZGVjb2RlZCk7XG59O1xudmFyIGxvYWRpbmcgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGxvYWRTY3JpcHQgPSAoc3JjLCBnbG9iYWxDb25zdCwgYW1kKSA9PiB7XG4gIGlmIChsb2FkaW5nLmhhcyhzcmMpKSB7XG4gICAgcmV0dXJuIGxvYWRpbmcuZ2V0KHNyYyk7XG4gIH1cbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IC9eaHR0cHM/OlxcL1xcLy9pdS50ZXN0KHNyYykgPyBzcmMgOiBgJHtDRE59LyR7c3JjfWA7XG4gICAgbGV0IG9iaiA9IGdsb2JhbFRoaXM7XG4gICAgZm9yIChjb25zdCBwcm9wIG9mIGdsb2JhbENvbnN0LnNwbGl0KFwiLlwiKSkge1xuICAgICAgb2JqID0gb2JqPy5bcHJvcF07XG4gICAgfVxuICAgIGlmIChvYmopIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9IGVsc2UgaWYgKGFtZCAmJiB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgXCJhbWRcIiBpbiBkZWZpbmUpIHtcbiAgICAgIGNvbnN0IHJlcXVpcmVqcyA9IGdsb2JhbFRoaXMucmVxdWlyZTtcbiAgICAgIHJlcXVpcmVqcy5jb25maWcoeyBwYXRoczogeyBbZ2xvYmFsQ29uc3RdOiBwYXRoIH0gfSk7XG4gICAgICByZXF1aXJlanMoW2dsb2JhbENvbnN0XSwgKGV4cG9ydHMpID0+IHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7IFtnbG9iYWxDb25zdF06IGV4cG9ydHMgfSk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgc2NyaXB0LnNyYyA9IHBhdGg7XG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQoc2NyaXB0KTtcbiAgICB9XG4gIH0pO1xuICBsb2FkaW5nLnNldChzcmMsIHByb21pc2UpO1xuICByZXR1cm4gcHJvbWlzZTtcbn07XG52YXIgZ2V0T2JqZWN0ID0gKGtleSkgPT4gSlNPTi5wYXJzZShTdHJpbmcobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkpO1xudmFyIHNldE9iamVjdCA9IChrZXksIHZhbHVlKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbn07XG52YXIgcGFyc2VWZXJzaW9uID0gKHZlcnNpb24pID0+IHZlcnNpb24uc3BsaXQoXCIuXCIsIDMpLm1hcChOdW1iZXIpO1xudmFyIGNvbXBhcmVWZXJzaW9uID0gKHZlcnNpb24sIGJhc2VWZXJzaW9uKSA9PiB7XG4gIGNvbnN0IFttYWpvciwgbWlub3JdID0gcGFyc2VWZXJzaW9uKHZlcnNpb24pLCBbYmFzZU1ham9yLCBiYXNlTWlub3JdID0gcGFyc2VWZXJzaW9uKGJhc2VWZXJzaW9uKTtcbiAgcmV0dXJuIG1ham9yID4gYmFzZU1ham9yIHx8IG1ham9yID09PSBiYXNlTWFqb3IgJiYgbWlub3IgPj0gYmFzZU1pbm9yO1xufTtcbnZhciBzZXRJMThOID0gYXN5bmMgKHVybCwgY3VyLCBsYW5ndWFnZXMsIGFjY2VwdGFibGVMYW5ncywga2V5LCBpMThuID0gZ2V0T2JqZWN0KGtleSkgPz8ge30pID0+IHtcbiAgY29uc3QgeyB2ZXJzaW9uLCBsYW5nIH0gPSBpMThuLCBsYW5ncyA9IEFycmF5LmlzQXJyYXkobGFuZ3VhZ2VzKSA/IGxhbmd1YWdlcyA6IFtsYW5ndWFnZXNdO1xuICBpZiAodmVyc2lvbiA9PT0gY3VyICYmIGxhbmdzLmluY2x1ZGVzKGxhbmcpKSB7XG4gICAgcmV0dXJuIGkxOG47XG4gIH1cbiAgZm9yIChjb25zdCBsYW5ndWFnZSBvZiBsYW5ncykge1xuICAgIGNvbnN0IGwgPSBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICghYWNjZXB0YWJsZUxhbmdzLmluY2x1ZGVzKGwpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3VybH0vJHtsfS5qc29uYCk7XG4gICAgICBPYmplY3QuYXNzaWduKGkxOG4sIGF3YWl0IHJlcy5qc29uKCksIHsgdmVyc2lvbjogY3VyLCBsYW5nOiBsYW5ndWFnZSB9KTtcbiAgICAgIHNldE9iamVjdChrZXksIGkxOG4pO1xuICAgICAgcmV0dXJuIGkxOG47XG4gICAgfSBjYXRjaCB7XG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIHRoZSBsb2NhbGl6YXRpb24gZm9yICR7bGFuZ3NbMF19LmApO1xufTtcbnZhciBjb25maWdMb2FkZWQgPSBmYWxzZTtcbnZhciBpMThuTG9hZGVkID0gZmFsc2U7XG52YXIgZ2V0V2lraXBhcnNlID0gYXN5bmMgKGdldENvbmZpZywgbGFuZ3MsIGNkbikgPT4ge1xuICBjb25zdCByZXBvID0gXCJucG0vd2lraXBhcnNlci1ub2RlXCIsIGRpciA9IFwiZXh0ZW5zaW9ucy9kaXN0XCI7XG4gIGlmIChjZG4gJiYgL1xcLmpzZGVsaXZyXFwubmV0XFwvPyQvaXUudGVzdChjZG4pKSB7XG4gICAgY2RuICs9IChjZG4uZW5kc1dpdGgoXCIvXCIpID8gXCJcIiA6IFwiL1wiKSArIHJlcG87XG4gIH1cbiAgbGV0IHNyYyA9IGNkbiB8fCBgJHtyZXBvfS8ke2Rpcn0vYmFzZS5taW4uanNgO1xuICBpZiAoIXNyYy5lbmRzV2l0aChcIi5qc1wiKSkge1xuICAgIHNyYyA9IGAke3NyY30ke3NyYy5lbmRzV2l0aChcIi9cIikgPyBcIlwiIDogXCIvXCJ9JHtkaXJ9L2Jhc2UuanNgO1xuICB9XG4gIGF3YWl0IGxvYWRTY3JpcHQoc3JjLCBcIndpa2lwYXJzZVwiKTtcbiAgYXdhaXQgbG9hZFNjcmlwdChgJHt3aWtpcGFyc2UuQ0ROfS8ke2Rpcn0vbHNwLmpzYCwgXCJ3aWtpcGFyc2UuTGFuZ3VhZ2VTZXJ2aWNlXCIpO1xuICBpZiAoIWNvbmZpZ0xvYWRlZCAmJiB0eXBlb2YgZ2V0Q29uZmlnID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25maWdMb2FkZWQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICB3aWtpcGFyc2Uuc2V0Q29uZmlnKGF3YWl0IGdldENvbmZpZygpKTtcbiAgICB9IGNhdGNoIHtcbiAgICB9XG4gIH1cbiAgaWYgKCFpMThuTG9hZGVkICYmIGxhbmdzKSB7XG4gICAgaTE4bkxvYWRlZCA9IHRydWU7XG4gICAgY29uc3Qga2V5ID0gXCJ3aWtpcGFyc2UtaTE4blwiLCB7IHZlcnNpb24gfSA9IHdpa2lwYXJzZTtcbiAgICB0cnkge1xuICAgICAgd2lraXBhcnNlLnNldEkxOE4oYXdhaXQgc2V0STE4TihgJHt3aWtpcGFyc2UuQ0ROfS9pMThuYCwgdmVyc2lvbiwgbGFuZ3MsIGRlZmluZV9MQU5HU19kZWZhdWx0LCBrZXkpKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHNldE9iamVjdChrZXksIHsgdmVyc2lvbiwgbGFuZzogXCJlblwiIH0pO1xuICAgIH1cbiAgfVxufTtcbnZhciBsc3BzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgZ2V0TFNQID0gKG9iaiwgaW5jbHVkZSwgZ2V0Q29uZmlnLCBjZG4sIGxhbmcpID0+IHtcbiAgdm9pZCBnZXRXaWtpcGFyc2UoZ2V0Q29uZmlnLCBsYW5nLCBjZG4pO1xuICBpZiAodHlwZW9mIHdpa2lwYXJzZSAhPT0gXCJvYmplY3RcIiB8fCAhd2lraXBhcnNlLkxhbmd1YWdlU2VydmljZSB8fCBsc3BzLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGxzcHMuZ2V0KG9iaik7XG4gIH1cbiAgY29uc3QgbHNwID0gbmV3IHdpa2lwYXJzZS5MYW5ndWFnZVNlcnZpY2UoaW5jbHVkZSk7XG4gIGxzcHMuc2V0KG9iaiwgbHNwKTtcbiAgcmV0dXJuIGxzcDtcbn07XG5leHBvcnQge1xuICBDRE4sXG4gIGNvbXBhcmVWZXJzaW9uLFxuICBkZWNvZGVIVE1MLFxuICBnZXRMU1AsXG4gIGdldE9iamVjdCxcbiAgZ2V0V2lraXBhcnNlLFxuICBsb2FkU2NyaXB0LFxuICBub3JtYWxpemVUaXRsZSxcbiAgc2V0STE4TixcbiAgc2V0T2JqZWN0XG59O1xuIiwgImltcG9ydCB7Z2V0T2JqZWN0fSBmcm9tICdAYmhzZC9icm93c2VyJztcblxuY29uc3Qge3dnUGFnZU5hbWU6IHBhZ2UsIHdnTmFtZXNwYWNlTnVtYmVyOiBucywgd2dQYWdlQ29udGVudE1vZGVsOiBjb250ZW50bW9kZWx9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBDT05URU5UTU9ERUxTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuXHRcdHdpa2l0ZXh0OiAnbWVkaWF3aWtpJyxcblx0fSxcblx0RVhUUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcblx0XHRjc3M6ICdjc3MnLFxuXHRcdGpzOiAnamF2YXNjcmlwdCcsXG5cdFx0anNvbjogJ2pzb24nLFxuXHR9LFxuXHROQU1FU1BBQ0VTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuXHRcdDgyODogJ2x1YScsXG5cdFx0Mjc0OiAnaHRtbCcsXG5cdH07XG5cbi8qKlxuICog5qOA5p+l6aG16Z2i6K+t6KiA57G75Z6LXG4gKlxuICogQHBhcmFtIHZhbHVlIOmhtemdouWGheWuuVxuICovXG5jb25zdCBnZXRQYWdlTW9kZSA9IGFzeW5jICh2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxbc3RyaW5nLCAobnVtYmVyIHwgdW5kZWZpbmVkKT8sIChzdHJpbmcgfCB1bmRlZmluZWQpP10+ID0+IHtcblx0bGV0IFdpa2lwbHVzUGFnZXM7XG5cdGlmICh0eXBlb2YgX1dpa2lwbHVzUGFnZXMgPT09ICdvYmplY3QnKSB7XG5cdFx0V2lraXBsdXNQYWdlcyA9IF9XaWtpcGx1c1BhZ2VzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBQYWdlcyA9PT0gJ29iamVjdCcpIHtcblx0XHRXaWtpcGx1c1BhZ2VzID0gUGFnZXM7XG5cdH1cblx0aWYgKFdpa2lwbHVzUGFnZXMpIHtcblx0XHRjb25zdCBwYWdlcyA9IE9iamVjdC52YWx1ZXMoV2lraXBsdXNQYWdlcykuZmlsdGVyKCh7c2VjdGlvbkNhY2hlfSkgPT4ge1xuXHRcdFx0cmV0dXJuIE9iamVjdC52YWx1ZXMoc2VjdGlvbkNhY2hlKS5pbmNsdWRlcyh2YWx1ZSk7XG5cdFx0fSk7XG5cdFx0aWYgKFxuXHRcdFx0cGFnZXMuc29tZSgoe3RpdGxlfSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gIXRpdGxlLmVuZHNXaXRoKCcvZG9jJyk7XG5cdFx0XHR9KVxuXHRcdCkge1xuXHRcdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdtZWRpYXdpa2kuVGl0bGUnKTtcblx0XHR9XG5cdFx0Y29uc3QgbW9kZXMgPSBuZXcgU2V0KFxuXHRcdFx0cGFnZXMubWFwKCh7dGl0bGV9KSA9PiB7XG5cdFx0XHRcdGlmICh0aXRsZS5lbmRzV2l0aCgnL2RvYycpKSB7XG5cdFx0XHRcdFx0cmV0dXJuICd0ZW1wbGF0ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdCA9IG5ldyBtdy5UaXRsZSh0aXRsZSksXG5cdFx0XHRcdFx0bmFtZXNwYWNlID0gdC5nZXROYW1lc3BhY2VJZCgpO1xuXHRcdFx0XHRpZiAobmFtZXNwYWNlICUgMikge1xuXHRcdFx0XHRcdHJldHVybiAnbWVkaWF3aWtpJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBtb2RlID0gRVhUU1t0LmdldEV4dGVuc2lvbigpPy50b0xvd2VyQ2FzZSgpID8/ICcnXSA/PyBOQU1FU1BBQ0VTW25hbWVzcGFjZV07XG5cdFx0XHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0XHRcdGNhc2UgJ2phdmFzY3JpcHQnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5hbWVzcGFjZSA9PT0gOCB8fCBuYW1lc3BhY2UgPT09IDIzMDAgPyAnZ2FkZ2V0JyA6IG1vZGU7XG5cdFx0XHRcdFx0Y2FzZSAnY3NzJzpcblx0XHRcdFx0XHRcdHJldHVybiBuYW1lc3BhY2UgPT09IDIgfHwgbmFtZXNwYWNlID09PSA4IHx8IG5hbWVzcGFjZSA9PT0gMjMwMCA/IG1vZGUgOiAnc2FuaXRpemVkLWNzcyc7XG5cdFx0XHRcdFx0Y2FzZSB1bmRlZmluZWQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmFtZXNwYWNlID09PSAxMCB8fCBuYW1lc3BhY2UgPT09IDIgPyAndGVtcGxhdGUnIDogJ21lZGlhd2lraSc7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHJldHVybiBtb2RlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0aWYgKG1vZGVzLnNpemUgPT09IDEpIHtcblx0XHRcdGNvbnN0IFttb2RlXSA9IG1vZGVzLFxuXHRcdFx0XHR0aXRsZSA9IHBhZ2VzLmxlbmd0aCA9PT0gMSA/IHBhZ2VzWzBdIS50aXRsZSA6IHVuZGVmaW5lZDtcblx0XHRcdGlmIChtb2RlID09PSAnZ2FkZ2V0Jykge1xuXHRcdFx0XHRyZXR1cm4gWydqYXZhc2NyaXB0JywgOF07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbW9kZSA9PT0gJ3RlbXBsYXRlJyA/IFsnbWVkaWF3aWtpJywgMTAsIHRpdGxlXSA6IFttb2RlISwgdW5kZWZpbmVkLCB0aXRsZV07XG5cdFx0fSBlbHNlIGlmIChtb2Rlcy5zaXplID09PSAyKSB7XG5cdFx0XHRpZiAobW9kZXMuaGFzKCdqYXZhc2NyaXB0JykgJiYgbW9kZXMuaGFzKCdnYWRnZXQnKSkge1xuXHRcdFx0XHRyZXR1cm4gWydqYXZhc2NyaXB0J107XG5cdFx0XHR9IGVsc2UgaWYgKG1vZGVzLmhhcygnbWVkaWF3aWtpJykgJiYgbW9kZXMuaGFzKCd0ZW1wbGF0ZScpKSB7XG5cdFx0XHRcdHJldHVybiBbJ21lZGlhd2lraSddO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRpZiAoKG5zICE9PSAyNzQgJiYgY29udGVudG1vZGVsICE9PSAnU2NyaWJ1bnRvJykgfHwgcGFnZS5lbmRzV2l0aCgnL2RvYycpKSB7XG5cdFx0cmV0dXJuIFtDT05URU5UTU9ERUxTW2NvbnRlbnRtb2RlbF0gPz8gY29udGVudG1vZGVsLCBjb250ZW50bW9kZWwgPT09ICdqYXZhc2NyaXB0JyA/IG5zIDogdW5kZWZpbmVkXTtcblx0fVxuXHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ29vanMtdWktd2luZG93cycpO1xuXHRpZiAoXG5cdFx0YXdhaXQgT08udWkuY29uZmlybShtdy5tZXNzYWdlKCdjbS1tdy1jb250ZW50bW9kZWwnKS5wYXJzZSgpLCB7XG5cdFx0XHRhY3Rpb25zOiBbe2xhYmVsOiBucyA9PT0gMjc0ID8gJ1dpZGdldCcgOiAnTHVhJ30sIHtsYWJlbDogJ1dpa2l0ZXh0JywgYWN0aW9uOiAnYWNjZXB0J31dLFxuXHRcdH0pXG5cdCkge1xuXHRcdHJldHVybiBbJ21lZGlhd2lraSddO1xuXHR9XG5cdHJldHVybiBbbnMgPT09IDI3NCA/ICdodG1sJyA6ICdsdWEnXTtcbn07XG5cbmNvbnN0IHN1Ym1pdCA9IC8qKiDmj5DkuqTnvJbovpEgKi8gKCk6IHRydWUgPT4ge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0JykhLmRpc3BhdGNoRXZlbnQobmV3IFBvaW50ZXJFdmVudCgnY2xpY2snKSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdHN1Ym1pdE1pbm9yID0gLyoqIOaPkOS6pOWwj+e8lui+kSAqLyAoKTogdHJ1ZSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKSEuY2hlY2tlZCA9IHRydWU7XG5cdFx0cmV0dXJuIHN1Ym1pdCgpO1xuXHR9LFxuXHRlc2NhcGVFZGl0ID0gLyoqIOaMieS4i0VzY+mUrumAgOWHuue8lui+kSAqLyAoKTogYm9vbGVhbiA9PiB7XG5cdFx0Y29uc3Qgc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbCA9IGdldE9iamVjdCgnV2lraXBsdXNfU2V0dGluZ3MnKSxcblx0XHRcdGVzY1RvRXhpdFF1aWNrRWRpdCA9IHNldHRpbmdzICYmIChzZXR0aW5nc1snZXNjX3RvX2V4aXRfcXVpY2tlZGl0J10gfHwgc2V0dGluZ3NbJ2VzY1RvRXhpdFF1aWNrRWRpdCddKTtcblx0XHRpZiAoZXNjVG9FeGl0UXVpY2tFZGl0ID09PSB0cnVlIHx8IGVzY1RvRXhpdFF1aWNrRWRpdCA9PT0gJ3RydWUnKSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKSEuZGlzcGF0Y2hFdmVudChuZXcgUG9pbnRlckV2ZW50KCdjbGljaycpKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cbi8qKlxuICog5riy5p+T57yW6L6R5ZmoXG4gKlxuICogQHBhcmFtIHRhcmdldCDnm67moIfnvJbovpHmoYZcbiAqIEBwYXJhbSBzZXR0aW5nIOaYr+WQpuaYr1dpa2lwbHVz6K6+572u77yI5L2/55SoanNvbuivreazle+8iVxuICovXG5leHBvcnQgY29uc3QgcmVuZGVyRWRpdG9yID0gYXN5bmMgKHRhcmdldDogSFRNTFRleHRBcmVhRWxlbWVudCwgc2V0dGluZzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBjbSA9IGF3YWl0IENvZGVNaXJyb3I2LmZyb21UZXh0QXJlYShcblx0XHR0YXJnZXQsXG5cdFx0Li4uKHNldHRpbmcgPyAoWydqc29uJ10gc2F0aXNmaWVzIFtzdHJpbmddKSA6IGF3YWl0IGdldFBhZ2VNb2RlKHRhcmdldC52YWx1ZSkpXG5cdCk7XG5cdChjbS52aWV3Py5kb20gPz8gY20uZWRpdG9yIS5nZXREb21Ob2RlKCkhKS5pZCA9ICdXaWtpcGx1cy1Db2RlTWlycm9yJztcblxuXHRpZiAoIXNldHRpbmcpIHtcblx0XHQvLyDmma7pgJpXaWtpcGx1c+e8lui+keWMulxuXHRcdGlmIChjbS5lZGl0b3IpIHtcblx0XHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cblx0XHRcdGNtLmVkaXRvci5hZGRDb21tYW5kKG1vbmFjby5LZXlNb2QuQ3RybENtZCB8IG1vbmFjby5LZXlDb2RlLktleVMsIHN1Ym1pdCk7XG5cdFx0XHRjbS5lZGl0b3IuYWRkQ29tbWFuZChtb25hY28uS2V5TW9kLkN0cmxDbWQgfCBtb25hY28uS2V5TW9kLlNoaWZ0IHwgbW9uYWNvLktleUNvZGUuS2V5Uywgc3VibWl0TWlub3IpO1xuXHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1iaXR3aXNlICovXG5cdFx0XHRjbS5lZGl0b3IuYWRkQ29tbWFuZChtb25hY28uS2V5Q29kZS5Fc2NhcGUsIGVzY2FwZUVkaXQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbS5leHRyYUtleXMoW1xuXHRcdFx0XHR7a2V5OiAnTW9kLVMnLCBydW46IHN1Ym1pdH0sXG5cdFx0XHRcdHtrZXk6ICdTaGlmdC1Nb2QtUycsIHJ1bjogc3VibWl0TWlub3J9LFxuXHRcdFx0XHR7a2V5OiAnRXNjJywgcnVuOiBlc2NhcGVFZGl0fSxcblx0XHRcdF0pO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGp1bXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxBbmNob3JFbGVtZW50PignI1dpa2lwbHVzLVF1aWNrZWRpdC1KdW1wID4gYScpO1xuXHRpZiAoanVtcCkge1xuXHRcdGp1bXAuaHJlZiA9ICcjV2lraXBsdXMtQ29kZU1pcnJvcic7XG5cdH1cbn07XG4iLCAiLyoqIVxuICogQG5hbWUgV2lraXBsdXMtaGlnaGxpZ2h0IFdpa2lwbHVz57yW6L6R5Zmo55qEQ29kZU1pcnJvcuivreazlemrmOS6ruaJqeWxlVxuICogQGF1dGhvciBCaHNkIDxodHRwczovL2dpdGh1Yi5jb20vYmhzZC1oYXJyeT5cbiAqIEBsaWNlbnNlIEdQTC0zLjBcbiAqL1xuaW1wb3J0ICcuL3N0eWxlLmxlc3MnO1xuaW1wb3J0IHtDRE59IGZyb20gJ0BiaHNkL2Jyb3dzZXInO1xuaW1wb3J0IHtyZW5kZXJFZGl0b3J9IGZyb20gJy4vY29yZSc7XG5cbmRlY2xhcmUgbmFtZXNwYWNlIG1lZGlhV2lraS5saWJzIHtcblx0bGV0IHdwaGw6IHt2ZXJzaW9uPzogc3RyaW5nOyBjbVZlcnNpb24/OiBzdHJpbmc7IG1vbmFjb1ZlcnNpb24/OiBzdHJpbmc7IENETj86IHN0cmluZ30gfCB1bmRlZmluZWQ7XG59XG5cbihhc3luYyAoKSA9PiB7XG5cdGlmICghbXcuY29uZmlnLmdldCgnd2dJc0FydGljbGUnKSB8fCBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpICE9PSAndmlldycpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3Qge2xpYnN9ID0gbWVkaWFXaWtpLFxuXHRcdHt3cGhsfSA9IGxpYnM7XG5cdGlmICghd3BobD8udmVyc2lvbikge1xuXHRcdGNvbnN0IHZlcnNpb24gPSAnMy4zLjEnO1xuXHRcdGxpYnMud3BobCA9IHt2ZXJzaW9uLCAuLi53cGhsfTsgLy8g5byA5aeL5Yqg6L29XG5cblx0XHQvLyDot6/lvoRcblx0XHRjb25zdCBNV19DRE4gPSBgbnBtL0BiaHNkL2NvZGVtaXJyb3ItbWVkaWF3aWtpQCR7bGlicy53cGhsLmNtVmVyc2lvbiA/PyAnbGF0ZXN0J30vZGlzdC93aWtpLm1pbi5qc2A7XG5cblx0XHRpZiAodHlwZW9mIENvZGVNaXJyb3I2ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRhd2FpdCAkLmFqYXgoYCR7d3BobD8uQ0ROIHx8IENETn0vJHtNV19DRE59YCwge2RhdGFUeXBlOiAnc2NyaXB0JywgY2FjaGU6IHRydWV9KTtcblx0XHR9XG5cdFx0T2JqZWN0LmFzc2lnbihDb2RlTWlycm9yNiEsIHtcblx0XHRcdENETjogd3BobD8uQ0ROLFxuXHRcdFx0bW9uYWNvVmVyc2lvbjogd3BobD8ubW9uYWNvVmVyc2lvbixcblx0XHR9KTtcblxuXHRcdC8vIOebkeinhiBXaWtpcGx1cyDnvJbovpHmoYZcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChyZWNvcmRzKSA9PiB7XG5cdFx0XHRjb25zdCBzZWxlY3RvciA9ICcjV2lraXBsdXMtUXVpY2tlZGl0LCAjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcsXG5cdFx0XHRcdFthZGRlZF0gPSAkKFxuXHRcdFx0XHRcdHJlY29yZHMuZmxhdE1hcCgoe2FkZGVkTm9kZXN9KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gWy4uLmFkZGVkTm9kZXNdO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCkuZmluZDxIVE1MVGV4dEFyZWFFbGVtZW50PihzZWxlY3Rvcik7XG5cdFx0XHRpZiAoYWRkZWQpIHtcblx0XHRcdFx0dm9pZCByZW5kZXJFZGl0b3IoYWRkZWQsIGFkZGVkLmlkID09PSAnV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgW3JlbW92ZWRdID0gJChcblx0XHRcdFx0XHRyZWNvcmRzLmZsYXRNYXAoKHtyZW1vdmVkTm9kZXN9KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlbW92ZWROb2Rlc107XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KS5maW5kPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KHNlbGVjdG9yKSxcblx0XHRcdFx0Y20gPSBDb2RlTWlycm9yNi5pbnN0YW5jZXM/LmdldChyZW1vdmVkISk7XG5cdFx0XHRpZiAodHlwZW9mIGNtPy5kZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNtLmRlc3Ryb3koKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtjaGlsZExpc3Q6IHRydWV9KTtcblx0fVxufSkoKTtcblxuZXhwb3J0IHt9O1xuIiwgImltcG9ydCB7Y2hlY2tEZXBlbmRlbmNpZXN9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbihmdW5jdGlvbiBXaWtpcGx1c0hpZ2hsaWdodCgpIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0lzQXJ0aWNsZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8ICF3Z0lzQXJ0aWNsZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGxvYWRlciA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRhd2FpdCBjaGVja0RlcGVuZGVuY2llcygnV2lraXBsdXMnKTtcblxuXHRcdGNvbnN0IHsndmlzdWFsZWRpdG9yLWVuYWJsZSc6IGlzVmVFbmFibGV9ID0gbXcudXNlci5vcHRpb25zLmdldCgpIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuXG5cdFx0Lyogc2VlIDxodHRwczovL2dpdGh1Yi5jb20vV2lraXBsdXMvV2lraXBsdXMvaXNzdWVzLzY1PiAqL1xuXHRcdGlmIChpc1ZlRW5hYmxlKSB7XG5cdFx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC52aXN1YWxFZGl0b3IuY29yZScpO1xuXHRcdH1cblxuXHRcdGF3YWl0IGltcG9ydCgnLi9tb2R1bGVzL21haW4nKTtcblx0fTtcblxuXHR2b2lkIGxvYWRlcigpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsYUFBQUMsTUFBQTtFQUFBLDhDQUFBO0VBQUE7QUFBQSxDQUFBO0FDQUEsSUFPSUM7QUFQSixJ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OUMsTUFBSXNILGFBQWEsVUFBVSxDQUFDQyxhQUFhO0FBQ3hDO0VBQ0Q7QUFFQSxNQUFJLGtCQUFrQnRFLFVBQVU7QUFDL0I7RUFDRDtBQUVBLFFBQU03QixTQUFBLDJCQUFBO0FBQUEsUUFBQW9HLFFBQUFsSCxrQkFBUyxhQUEyQjtBQUN6QyxhQUFBLEdBQU02RyxrQkFBQU0sbUJBQWtCLFVBQVU7QUFFbEMsWUFBTTtRQUFDLHVCQUF1QkM7TUFBVSxJQUFJNUgsR0FBRzZILEtBQUtDLFFBQVE1SCxJQUFJO0FBR2hFLFVBQUkwSCxZQUFZO0FBQ2YsY0FBTTVILEdBQUdzQixPQUFPQyxNQUFNLHVCQUF1QjtNQUM5QztBQUVBLFlBQU13RyxRQUFBQyxRQUFBLEVBQUFDLEtBQUEsT0FBQTNDLFVBQUEsR0FBQUQsYUFBQTtJQUNQLENBQUE7QUFBQSxXQUFBLFNBWE0vRCxVQUFBO0FBQUEsYUFBQW9HLE1BQUF6RSxNQUFBLE1BQUFDLFNBQUE7SUFBQTtFQUFBLEVBQUE7QUFhTixPQUFLNUIsT0FBTztBQUNiLEdBQUc7IiwKICAibmFtZXMiOiBbImluaXRfc3R5bGUiLCAiX19lc20iLCAiQ0ROIiwgImdldE9iamVjdCIsICJpbml0X2Rpc3QiLCAia2V5IiwgIkpTT04iLCAicGFyc2UiLCAiU3RyaW5nIiwgImxvY2FsU3RvcmFnZSIsICJnZXRJdGVtIiwgInBhZ2UiLCAibnMiLCAiY29udGVudG1vZGVsIiwgIkNPTlRFTlRNT0RFTFMiLCAiRVhUUyIsICJOQU1FU1BBQ0VTIiwgImdldFBhZ2VNb2RlIiwgInN1Ym1pdCIsICJzdWJtaXRNaW5vciIsICJlc2NhcGVFZGl0IiwgInJlbmRlckVkaXRvciIsICJpbml0X2NvcmUiLCAid2dQYWdlTmFtZSIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ3aWtpdGV4dCIsICJjc3MiLCAianMiLCAianNvbiIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInZhbHVlIiwgIldpa2lwbHVzUGFnZXMiLCAiX1dpa2lwbHVzUGFnZXMiLCAiUGFnZXMiLCAicGFnZXMiLCAiT2JqZWN0IiwgInZhbHVlcyIsICJmaWx0ZXIiLCAic2VjdGlvbkNhY2hlIiwgImluY2x1ZGVzIiwgInNvbWUiLCAidGl0bGUiLCAiZW5kc1dpdGgiLCAibG9hZGVyIiwgInVzaW5nIiwgIm1vZGVzIiwgIlNldCIsICJtYXAiLCAiX0VYVFMiLCAiX3QkZ2V0RXh0ZW5zaW9uJHRvTG93IiwgIl90JGdldEV4dGVuc2lvbiIsICJ0IiwgIlRpdGxlIiwgIm5hbWVzcGFjZSIsICJnZXROYW1lc3BhY2VJZCIsICJtb2RlIiwgImdldEV4dGVuc2lvbiIsICJ0b0xvd2VyQ2FzZSIsICJzaXplIiwgImxlbmd0aCIsICJoYXMiLCAiX0NPTlRFTlRNT0RFTFMkY29udGVuIiwgIk9PIiwgInVpIiwgImNvbmZpcm0iLCAibWVzc2FnZSIsICJhY3Rpb25zIiwgImxhYmVsIiwgImFjdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJkaXNwYXRjaEV2ZW50IiwgIlBvaW50ZXJFdmVudCIsICJjaGVja2VkIiwgInNldHRpbmdzIiwgImVzY1RvRXhpdFF1aWNrRWRpdCIsICJfcmVmMiIsICJ0YXJnZXQiLCAic2V0dGluZyIsICJfY20kdmlldyRkb20iLCAiX2NtJHZpZXciLCAiY20iLCAiQ29kZU1pcnJvcjYiLCAiZnJvbVRleHRBcmVhIiwgInZpZXciLCAiZG9tIiwgImVkaXRvciIsICJnZXREb21Ob2RlIiwgImlkIiwgImFkZENvbW1hbmQiLCAibW9uYWNvIiwgIktleU1vZCIsICJDdHJsQ21kIiwgIktleUNvZGUiLCAiS2V5UyIsICJTaGlmdCIsICJFc2NhcGUiLCAiZXh0cmFLZXlzIiwgInJ1biIsICJqdW1wIiwgImhyZWYiLCAiX3gyIiwgIl94MyIsICJtYWluX2V4cG9ydHMiLCAiaW5pdF9tYWluIiwgImxpYnMiLCAibWVkaWFXaWtpIiwgIndwaGwiLCAidmVyc2lvbiIsICJfbGlicyR3cGhsJGNtVmVyc2lvbiIsICJNV19DRE4iLCAiY29uY2F0IiwgImNtVmVyc2lvbiIsICIkIiwgImFqYXgiLCAiZGF0YVR5cGUiLCAiY2FjaGUiLCAiYXNzaWduIiwgIm1vbmFjb1ZlcnNpb24iLCAib2JzZXJ2ZXIiLCAiTXV0YXRpb25PYnNlcnZlciIsICJyZWNvcmRzIiwgIl9Db2RlTWlycm9yNiRpbnN0YW5jZSIsICJzZWxlY3RvciIsICJhZGRlZCIsICJmbGF0TWFwIiwgImFkZGVkTm9kZXMiLCAiZmluZCIsICJyZW1vdmVkIiwgInJlbW92ZWROb2RlcyIsICJpbnN0YW5jZXMiLCAiZGVzdHJveSIsICJvYnNlcnZlIiwgImJvZHkiLCAiY2hpbGRMaXN0IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiV2lraXBsdXNIaWdobGlnaHQiLCAid2dBY3Rpb24iLCAid2dJc0FydGljbGUiLCAiX3JlZjQiLCAiY2hlY2tEZXBlbmRlbmNpZXMiLCAiaXNWZUVuYWJsZSIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiUHJvbWlzZSIsICJyZXNvbHZlIiwgInRoZW4iXQp9Cg==
