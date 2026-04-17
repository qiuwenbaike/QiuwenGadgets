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
var CDN;
var getObject;
var init_dist = __esm({
  "node_modules/.pnpm/@bhsd+browser@0.3.0/node_modules/@bhsd/browser/dist/index.js"() {
    CDN = "https://fastly.jsdelivr.net";
    getObject = (key) => JSON.parse(String(localStorage.getItem(key)));
  }
});
//! src/Wikiplus-highlight/src/core.ts
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
  "src/Wikiplus-highlight/src/core.ts"() {
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
    EXTS = /* @__PURE__ */ new Map([["css", "css"], ["js", "javascript"], ["json", "json"]]);
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
            var _EXTS$get, _t$getExtension$toLow, _t$getExtension;
            if (title.endsWith("/doc")) {
              return "template";
            }
            const t = new mw.Title(title), namespace = t.getNamespaceId();
            if (namespace % 2) {
              return "mediawiki";
            }
            const mode = (_EXTS$get = EXTS.get((_t$getExtension$toLow = (_t$getExtension = t.getExtension()) === null || _t$getExtension === void 0 ? void 0 : _t$getExtension.toLowerCase()) !== null && _t$getExtension$toLow !== void 0 ? _t$getExtension$toLow : "")) !== null && _EXTS$get !== void 0 ? _EXTS$get : NAMESPACES[namespace];
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
    }();
  }
});
//! src/Wikiplus-highlight/src/main.ts
var main_exports = {};
var init_main = __esm({
  "src/Wikiplus-highlight/src/main.ts"() {
    "use strict";
    init_dist();
    init_core();
    /**!
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
        var _libs$wphl$cmVersion;
        const version = "3.4.1";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL0BiaHNkK2Jyb3dzZXJAMC4zLjAvbm9kZV9tb2R1bGVzL0BiaHNkL2Jyb3dzZXIvZGlzdC9pbmRleC5qcyIsICJzcmMvV2lraXBsdXMtaGlnaGxpZ2h0L3NyYy9jb3JlLnRzIiwgInNyYy9XaWtpcGx1cy1oaWdobGlnaHQvc3JjL21haW4udHMiLCAic3JjL1dpa2lwbHVzLWhpZ2hsaWdodC9XaWtpcGx1cy1oaWdobGlnaHQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIDxkZWZpbmU6JExBTkdTPlxudmFyIGRlZmluZV9MQU5HU19kZWZhdWx0ID0gW1wiemgtaGFuc1wiLCBcInpoLWhhbnRcIl07XG5cbi8vIC4uL2NvbW1vbi9kaXN0L2luZGV4Lm1qc1xudmFyIHJhd3VybGRlY29kZSA9IChzdHIpID0+IGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvJSg/IVtcXGRhLWZdezJ9KS9naXUsIFwiJTI1XCIpKTtcblxuLy8gc3JjL2luZGV4LnRzXG52YXIgQ0ROID0gXCJodHRwczovL2Zhc3RseS5qc2RlbGl2ci5uZXRcIjtcbnZhciB0ZXh0YXJlYSA9IC8qIEBfX1BVUkVfXyAqLyAoKCkgPT4gdHlwZW9mIGRvY3VtZW50ID09PSBcIm9iamVjdFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpIDogdm9pZCAwKSgpO1xudmFyIGRlY29kZUhUTUwgPSAoc3RyKSA9PiB7XG4gIHRleHRhcmVhLmlubmVySFRNTCA9IHN0cjtcbiAgcmV0dXJuIHRleHRhcmVhLnZhbHVlO1xufTtcbnZhciBub3JtYWxpemVUaXRsZSA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCBkZWNvZGVkID0gcmF3dXJsZGVjb2RlKHRpdGxlKTtcbiAgcmV0dXJuIC9bPD5bXFxdfHt9XS91LnRlc3QoZGVjb2RlZCkgPyBkZWNvZGVkIDogZGVjb2RlSFRNTChkZWNvZGVkKTtcbn07XG52YXIgbG9hZGluZyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgbG9hZFNjcmlwdCA9IChzcmMsIGdsb2JhbENvbnN0LCBhbWQpID0+IHtcbiAgaWYgKGxvYWRpbmcuaGFzKHNyYykpIHtcbiAgICByZXR1cm4gbG9hZGluZy5nZXQoc3JjKTtcbiAgfVxuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBwYXRoID0gL15odHRwcz86XFwvXFwvL2l1LnRlc3Qoc3JjKSA/IHNyYyA6IGAke0NETn0vJHtzcmN9YDtcbiAgICBsZXQgb2JqID0gZ2xvYmFsVGhpcztcbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgZ2xvYmFsQ29uc3Quc3BsaXQoXCIuXCIpKSB7XG4gICAgICBvYmogPSBvYmo/Lltwcm9wXTtcbiAgICB9XG4gICAgaWYgKG9iaikge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0gZWxzZSBpZiAoYW1kICYmIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBcImFtZFwiIGluIGRlZmluZSkge1xuICAgICAgY29uc3QgcmVxdWlyZWpzID0gZ2xvYmFsVGhpcy5yZXF1aXJlO1xuICAgICAgcmVxdWlyZWpzLmNvbmZpZyh7IHBhdGhzOiB7IFtnbG9iYWxDb25zdF06IHBhdGggfSB9KTtcbiAgICAgIHJlcXVpcmVqcyhbZ2xvYmFsQ29uc3RdLCAoZXhwb3J0cykgPT4ge1xuICAgICAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHsgW2dsb2JhbENvbnN0XTogZXhwb3J0cyB9KTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICBzY3JpcHQuc3JjID0gcGF0aDtcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChzY3JpcHQpO1xuICAgIH1cbiAgfSk7XG4gIGxvYWRpbmcuc2V0KHNyYywgcHJvbWlzZSk7XG4gIHJldHVybiBwcm9taXNlO1xufTtcbnZhciBnZXRPYmplY3QgPSAoa2V5KSA9PiBKU09OLnBhcnNlKFN0cmluZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSk7XG52YXIgc2V0T2JqZWN0ID0gKGtleSwgdmFsdWUpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xufTtcbnZhciBwYXJzZVZlcnNpb24gPSAodmVyc2lvbikgPT4gdmVyc2lvbi5zcGxpdChcIi5cIiwgMykubWFwKE51bWJlcik7XG52YXIgY29tcGFyZVZlcnNpb24gPSAodmVyc2lvbiwgYmFzZVZlcnNpb24pID0+IHtcbiAgY29uc3QgW21ham9yLCBtaW5vcl0gPSBwYXJzZVZlcnNpb24odmVyc2lvbiksIFtiYXNlTWFqb3IsIGJhc2VNaW5vcl0gPSBwYXJzZVZlcnNpb24oYmFzZVZlcnNpb24pO1xuICByZXR1cm4gbWFqb3IgPiBiYXNlTWFqb3IgfHwgbWFqb3IgPT09IGJhc2VNYWpvciAmJiBtaW5vciA+PSBiYXNlTWlub3I7XG59O1xudmFyIHNldEkxOE4gPSBhc3luYyAodXJsLCBjdXIsIGxhbmd1YWdlcywgYWNjZXB0YWJsZUxhbmdzLCBrZXksIGkxOG4gPSBnZXRPYmplY3Qoa2V5KSA/PyB7fSkgPT4ge1xuICBjb25zdCB7IHZlcnNpb24sIGxhbmcgfSA9IGkxOG4sIGxhbmdzID0gQXJyYXkuaXNBcnJheShsYW5ndWFnZXMpID8gbGFuZ3VhZ2VzIDogW2xhbmd1YWdlc107XG4gIGlmICh2ZXJzaW9uID09PSBjdXIgJiYgbGFuZ3MuaW5jbHVkZXMobGFuZykpIHtcbiAgICByZXR1cm4gaTE4bjtcbiAgfVxuICBmb3IgKGNvbnN0IGxhbmd1YWdlIG9mIGxhbmdzKSB7XG4gICAgY29uc3QgbCA9IGxhbmd1YWdlLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKCFhY2NlcHRhYmxlTGFuZ3MuaW5jbHVkZXMobCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dXJsfS8ke2x9Lmpzb25gKTtcbiAgICAgIE9iamVjdC5hc3NpZ24oaTE4biwgYXdhaXQgcmVzLmpzb24oKSwgeyB2ZXJzaW9uOiBjdXIsIGxhbmc6IGxhbmd1YWdlIH0pO1xuICAgICAgc2V0T2JqZWN0KGtleSwgaTE4bik7XG4gICAgICByZXR1cm4gaTE4bjtcbiAgICB9IGNhdGNoIHtcbiAgICB9XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggdGhlIGxvY2FsaXphdGlvbiBmb3IgJHtsYW5nc1swXX0uYCk7XG59O1xudmFyIGNvbmZpZ0xvYWRlZCA9IGZhbHNlO1xudmFyIGkxOG5Mb2FkZWQgPSBmYWxzZTtcbnZhciBnZXRXaWtpcGFyc2UgPSBhc3luYyAoZ2V0Q29uZmlnLCBsYW5ncywgY2RuKSA9PiB7XG4gIGNvbnN0IHJlcG8gPSBcIm5wbS93aWtpcGFyc2VyLW5vZGVcIiwgZGlyID0gXCJleHRlbnNpb25zL2Rpc3RcIjtcbiAgaWYgKGNkbiAmJiAvXFwuanNkZWxpdnJcXC5uZXRcXC8/JC9pdS50ZXN0KGNkbikpIHtcbiAgICBjZG4gKz0gKGNkbi5lbmRzV2l0aChcIi9cIikgPyBcIlwiIDogXCIvXCIpICsgcmVwbztcbiAgfVxuICBsZXQgc3JjID0gY2RuIHx8IGAke3JlcG99LyR7ZGlyfS9iYXNlLm1pbi5qc2A7XG4gIGlmICghc3JjLmVuZHNXaXRoKFwiLmpzXCIpKSB7XG4gICAgc3JjID0gYCR7c3JjfSR7c3JjLmVuZHNXaXRoKFwiL1wiKSA/IFwiXCIgOiBcIi9cIn0ke2Rpcn0vYmFzZS5qc2A7XG4gIH1cbiAgYXdhaXQgbG9hZFNjcmlwdChzcmMsIFwid2lraXBhcnNlXCIpO1xuICBhd2FpdCBsb2FkU2NyaXB0KGAke3dpa2lwYXJzZS5DRE59LyR7ZGlyfS9sc3AuanNgLCBcIndpa2lwYXJzZS5MYW5ndWFnZVNlcnZpY2VcIik7XG4gIGlmICghY29uZmlnTG9hZGVkICYmIHR5cGVvZiBnZXRDb25maWcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbmZpZ0xvYWRlZCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHdpa2lwYXJzZS5zZXRDb25maWcoYXdhaXQgZ2V0Q29uZmlnKCkpO1xuICAgIH0gY2F0Y2gge1xuICAgIH1cbiAgfVxuICBpZiAoIWkxOG5Mb2FkZWQgJiYgbGFuZ3MpIHtcbiAgICBpMThuTG9hZGVkID0gdHJ1ZTtcbiAgICBjb25zdCBrZXkgPSBcIndpa2lwYXJzZS1pMThuXCIsIHsgdmVyc2lvbiB9ID0gd2lraXBhcnNlO1xuICAgIHRyeSB7XG4gICAgICB3aWtpcGFyc2Uuc2V0STE4Tihhd2FpdCBzZXRJMThOKGAke3dpa2lwYXJzZS5DRE59L2kxOG5gLCB2ZXJzaW9uLCBsYW5ncywgZGVmaW5lX0xBTkdTX2RlZmF1bHQsIGtleSkpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0T2JqZWN0KGtleSwgeyB2ZXJzaW9uLCBsYW5nOiBcImVuXCIgfSk7XG4gICAgfVxuICB9XG59O1xudmFyIGxzcHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBnZXRMU1AgPSAob2JqLCBpbmNsdWRlLCBnZXRDb25maWcsIGNkbiwgbGFuZykgPT4ge1xuICB2b2lkIGdldFdpa2lwYXJzZShnZXRDb25maWcsIGxhbmcsIGNkbik7XG4gIGlmICh0eXBlb2Ygd2lraXBhcnNlICE9PSBcIm9iamVjdFwiIHx8ICF3aWtpcGFyc2UuTGFuZ3VhZ2VTZXJ2aWNlIHx8IGxzcHMuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gbHNwcy5nZXQob2JqKTtcbiAgfVxuICBjb25zdCBsc3AgPSBuZXcgd2lraXBhcnNlLkxhbmd1YWdlU2VydmljZShpbmNsdWRlKTtcbiAgbHNwcy5zZXQob2JqLCBsc3ApO1xuICByZXR1cm4gbHNwO1xufTtcbmV4cG9ydCB7XG4gIENETixcbiAgY29tcGFyZVZlcnNpb24sXG4gIGRlY29kZUhUTUwsXG4gIGdldExTUCxcbiAgZ2V0T2JqZWN0LFxuICBnZXRXaWtpcGFyc2UsXG4gIGxvYWRTY3JpcHQsXG4gIG5vcm1hbGl6ZVRpdGxlLFxuICBzZXRJMThOLFxuICBzZXRPYmplY3Rcbn07XG4iLCAiaW1wb3J0IHtnZXRPYmplY3R9IGZyb20gJ0BiaHNkL2Jyb3dzZXInO1xuXG5jb25zdCB7d2dQYWdlTmFtZTogcGFnZSwgd2dOYW1lc3BhY2VOdW1iZXI6IG5zLCB3Z1BhZ2VDb250ZW50TW9kZWw6IGNvbnRlbnRtb2RlbH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IENPTlRFTlRNT0RFTFM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG5cdFx0d2lraXRleHQ6ICdtZWRpYXdpa2knLFxuXHR9LFxuXHRFWFRTID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oW1xuXHRcdFsnY3NzJywgJ2NzcyddLFxuXHRcdFsnanMnLCAnamF2YXNjcmlwdCddLFxuXHRcdFsnanNvbicsICdqc29uJ10sXG5cdF0pLFxuXHROQU1FU1BBQ0VTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuXHRcdDgyODogJ2x1YScsXG5cdFx0Mjc0OiAnaHRtbCcsXG5cdH07XG5cbi8qKlxuICog5qOA5p+l6aG16Z2i6K+t6KiA57G75Z6LXG4gKlxuICogQHBhcmFtIHZhbHVlIOmhtemdouWGheWuuVxuICovXG5jb25zdCBnZXRQYWdlTW9kZSA9IGFzeW5jICh2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxbc3RyaW5nLCAobnVtYmVyIHwgdW5kZWZpbmVkKT8sIChzdHJpbmcgfCB1bmRlZmluZWQpP10+ID0+IHtcblx0bGV0IFdpa2lwbHVzUGFnZXM7XG5cdGlmICh0eXBlb2YgX1dpa2lwbHVzUGFnZXMgPT09ICdvYmplY3QnKSB7XG5cdFx0V2lraXBsdXNQYWdlcyA9IF9XaWtpcGx1c1BhZ2VzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBQYWdlcyA9PT0gJ29iamVjdCcpIHtcblx0XHRXaWtpcGx1c1BhZ2VzID0gUGFnZXM7XG5cdH1cblx0aWYgKFdpa2lwbHVzUGFnZXMpIHtcblx0XHRjb25zdCBwYWdlcyA9IE9iamVjdC52YWx1ZXMoV2lraXBsdXNQYWdlcykuZmlsdGVyKCh7c2VjdGlvbkNhY2hlfSkgPT4ge1xuXHRcdFx0cmV0dXJuIE9iamVjdC52YWx1ZXMoc2VjdGlvbkNhY2hlKS5pbmNsdWRlcyh2YWx1ZSk7XG5cdFx0fSk7XG5cdFx0aWYgKFxuXHRcdFx0cGFnZXMuc29tZSgoe3RpdGxlfSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gIXRpdGxlLmVuZHNXaXRoKCcvZG9jJyk7XG5cdFx0XHR9KVxuXHRcdCkge1xuXHRcdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdtZWRpYXdpa2kuVGl0bGUnKTtcblx0XHR9XG5cdFx0Y29uc3QgbW9kZXMgPSBuZXcgU2V0KFxuXHRcdFx0cGFnZXMubWFwKCh7dGl0bGV9KSA9PiB7XG5cdFx0XHRcdGlmICh0aXRsZS5lbmRzV2l0aCgnL2RvYycpKSB7XG5cdFx0XHRcdFx0cmV0dXJuICd0ZW1wbGF0ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdCA9IG5ldyBtdy5UaXRsZSh0aXRsZSksXG5cdFx0XHRcdFx0bmFtZXNwYWNlID0gdC5nZXROYW1lc3BhY2VJZCgpO1xuXHRcdFx0XHRpZiAobmFtZXNwYWNlICUgMikge1xuXHRcdFx0XHRcdHJldHVybiAnbWVkaWF3aWtpJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBtb2RlID0gRVhUUy5nZXQodC5nZXRFeHRlbnNpb24oKT8udG9Mb3dlckNhc2UoKSA/PyAnJykgPz8gTkFNRVNQQUNFU1tuYW1lc3BhY2VdO1xuXHRcdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0XHRjYXNlICdqYXZhc2NyaXB0Jzpcblx0XHRcdFx0XHRcdHJldHVybiBuYW1lc3BhY2UgPT09IDggfHwgbmFtZXNwYWNlID09PSAyMzAwID8gJ2dhZGdldCcgOiBtb2RlO1xuXHRcdFx0XHRcdGNhc2UgJ2Nzcyc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmFtZXNwYWNlID09PSAyIHx8IG5hbWVzcGFjZSA9PT0gOCB8fCBuYW1lc3BhY2UgPT09IDIzMDAgPyBtb2RlIDogJ3Nhbml0aXplZC1jc3MnO1xuXHRcdFx0XHRcdGNhc2UgdW5kZWZpbmVkOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5hbWVzcGFjZSA9PT0gMTAgfHwgbmFtZXNwYWNlID09PSAyID8gJ3RlbXBsYXRlJyA6ICdtZWRpYXdpa2knO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbW9kZTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpO1xuXHRcdGlmIChtb2Rlcy5zaXplID09PSAxKSB7XG5cdFx0XHRjb25zdCBbbW9kZV0gPSBtb2Rlcyxcblx0XHRcdFx0dGl0bGUgPSBwYWdlcy5sZW5ndGggPT09IDEgPyBwYWdlc1swXSEudGl0bGUgOiB1bmRlZmluZWQ7XG5cdFx0XHRpZiAobW9kZSA9PT0gJ2dhZGdldCcpIHtcblx0XHRcdFx0cmV0dXJuIFsnamF2YXNjcmlwdCcsIDhdO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1vZGUgPT09ICd0ZW1wbGF0ZScgPyBbJ21lZGlhd2lraScsIDEwLCB0aXRsZV0gOiBbbW9kZSEsIHVuZGVmaW5lZCwgdGl0bGVdO1xuXHRcdH0gZWxzZSBpZiAobW9kZXMuc2l6ZSA9PT0gMikge1xuXHRcdFx0aWYgKG1vZGVzLmhhcygnamF2YXNjcmlwdCcpICYmIG1vZGVzLmhhcygnZ2FkZ2V0JykpIHtcblx0XHRcdFx0cmV0dXJuIFsnamF2YXNjcmlwdCddO1xuXHRcdFx0fSBlbHNlIGlmIChtb2Rlcy5oYXMoJ21lZGlhd2lraScpICYmIG1vZGVzLmhhcygndGVtcGxhdGUnKSkge1xuXHRcdFx0XHRyZXR1cm4gWydtZWRpYXdpa2knXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0aWYgKChucyAhPT0gMjc0ICYmIGNvbnRlbnRtb2RlbCAhPT0gJ1NjcmlidW50bycpIHx8IHBhZ2UuZW5kc1dpdGgoJy9kb2MnKSkge1xuXHRcdHJldHVybiBbQ09OVEVOVE1PREVMU1tjb250ZW50bW9kZWxdID8/IGNvbnRlbnRtb2RlbCwgY29udGVudG1vZGVsID09PSAnamF2YXNjcmlwdCcgPyBucyA6IHVuZGVmaW5lZF07XG5cdH1cblx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdvb2pzLXVpLXdpbmRvd3MnKTtcblx0aWYgKFxuXHRcdGF3YWl0IE9PLnVpLmNvbmZpcm0obXcubWVzc2FnZSgnY20tbXctY29udGVudG1vZGVsJykucGFyc2UoKSwge1xuXHRcdFx0YWN0aW9uczogW3tsYWJlbDogbnMgPT09IDI3NCA/ICdXaWRnZXQnIDogJ0x1YSd9LCB7bGFiZWw6ICdXaWtpdGV4dCcsIGFjdGlvbjogJ2FjY2VwdCd9XSxcblx0XHR9KVxuXHQpIHtcblx0XHRyZXR1cm4gWydtZWRpYXdpa2knXTtcblx0fVxuXHRyZXR1cm4gW25zID09PSAyNzQgPyAnaHRtbCcgOiAnbHVhJ107XG59O1xuXG5jb25zdCBzdWJtaXQgPSAvKiog5o+Q5Lqk57yW6L6RICovICgpOiB0cnVlID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpIS5kaXNwYXRjaEV2ZW50KG5ldyBQb2ludGVyRXZlbnQoJ2NsaWNrJykpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHRzdWJtaXRNaW5vciA9IC8qKiDmj5DkuqTlsI/nvJbovpEgKi8gKCk6IHRydWUgPT4ge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0JykhLmNoZWNrZWQgPSB0cnVlO1xuXHRcdHJldHVybiBzdWJtaXQoKTtcblx0fSxcblx0ZXNjYXBlRWRpdCA9IC8qKiDmjInkuItFc2PplK7pgIDlh7rnvJbovpEgKi8gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdGNvbnN0IHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGwgPSBnZXRPYmplY3QoJ1dpa2lwbHVzX1NldHRpbmdzJyksXG5cdFx0XHRlc2NUb0V4aXRRdWlja0VkaXQgPSBzZXR0aW5ncyAmJiAoc2V0dGluZ3NbJ2VzY190b19leGl0X3F1aWNrZWRpdCddIHx8IHNldHRpbmdzWydlc2NUb0V4aXRRdWlja0VkaXQnXSk7XG5cdFx0aWYgKGVzY1RvRXhpdFF1aWNrRWRpdCA9PT0gdHJ1ZSB8fCBlc2NUb0V4aXRRdWlja0VkaXQgPT09ICd0cnVlJykge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJykhLmRpc3BhdGNoRXZlbnQobmV3IFBvaW50ZXJFdmVudCgnY2xpY2snKSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG4vKipcbiAqIOa4suafk+e8lui+keWZqFxuICpcbiAqIEBwYXJhbSB0YXJnZXQg55uu5qCH57yW6L6R5qGGXG4gKiBAcGFyYW0gc2V0dGluZyDmmK/lkKbmmK9XaWtpcGx1c+iuvue9ru+8iOS9v+eUqGpzb27or63ms5XvvIlcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlckVkaXRvciA9IGFzeW5jICh0YXJnZXQ6IEhUTUxUZXh0QXJlYUVsZW1lbnQsIHNldHRpbmc6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgY20gPSBhd2FpdCBDb2RlTWlycm9yNi5mcm9tVGV4dEFyZWEoXG5cdFx0dGFyZ2V0LFxuXHRcdC4uLihzZXR0aW5nID8gKFsnanNvbiddIHNhdGlzZmllcyBbc3RyaW5nXSkgOiBhd2FpdCBnZXRQYWdlTW9kZSh0YXJnZXQudmFsdWUpKVxuXHQpO1xuXHQoY20udmlldz8uZG9tID8/IGNtLmVkaXRvciEuZ2V0RG9tTm9kZSgpISkuaWQgPSAnV2lraXBsdXMtQ29kZU1pcnJvcic7XG5cblx0aWYgKCFzZXR0aW5nKSB7XG5cdFx0Ly8g5pmu6YCaV2lraXBsdXPnvJbovpHljLpcblx0XHRpZiAoY20uZWRpdG9yKSB7XG5cdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovXG5cdFx0XHRjbS5lZGl0b3IuYWRkQ29tbWFuZChtb25hY28uS2V5TW9kLkN0cmxDbWQgfCBtb25hY28uS2V5Q29kZS5LZXlTLCAoKSA9PiB7XG5cdFx0XHRcdHN1Ym1pdCgpO1xuXHRcdFx0fSk7XG5cdFx0XHRjbS5lZGl0b3IuYWRkQ29tbWFuZChtb25hY28uS2V5TW9kLkN0cmxDbWQgfCBtb25hY28uS2V5TW9kLlNoaWZ0IHwgbW9uYWNvLktleUNvZGUuS2V5UywgKCkgPT4ge1xuXHRcdFx0XHRzdWJtaXRNaW5vcigpO1xuXHRcdFx0fSk7XG5cdFx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWJpdHdpc2UgKi9cblx0XHRcdGNtLmVkaXRvci5hZGRDb21tYW5kKG1vbmFjby5LZXlDb2RlLkVzY2FwZSwgKCkgPT4ge1xuXHRcdFx0XHRlc2NhcGVFZGl0KCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y20uZXh0cmFLZXlzKFtcblx0XHRcdFx0e2tleTogJ01vZC1TJywgcnVuOiBzdWJtaXR9LFxuXHRcdFx0XHR7a2V5OiAnU2hpZnQtTW9kLVMnLCBydW46IHN1Ym1pdE1pbm9yfSxcblx0XHRcdFx0e2tleTogJ0VzYycsIHJ1bjogZXNjYXBlRWRpdH0sXG5cdFx0XHRdKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBqdW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQW5jaG9yRWxlbWVudD4oJyNXaWtpcGx1cy1RdWlja2VkaXQtSnVtcCA+IGEnKTtcblx0aWYgKGp1bXApIHtcblx0XHRqdW1wLmhyZWYgPSAnI1dpa2lwbHVzLUNvZGVNaXJyb3InO1xuXHR9XG59O1xuIiwgIi8qKiFcbiAqIEBuYW1lIFdpa2lwbHVzLWhpZ2hsaWdodCBXaWtpcGx1c+e8lui+keWZqOeahENvZGVNaXJyb3Lor63ms5Xpq5jkuq7mianlsZVcbiAqIEBhdXRob3IgQmhzZCA8aHR0cHM6Ly9naXRodWIuY29tL2Joc2QtaGFycnk+XG4gKiBAbGljZW5zZSBHUEwtMy4wLW9yLWxhdGVyXG4gKi9cbmltcG9ydCB7Q0ROfSBmcm9tICdAYmhzZC9icm93c2VyJztcbmltcG9ydCB7cmVuZGVyRWRpdG9yfSBmcm9tICcuL2NvcmUnO1xuXG5kZWNsYXJlIG5hbWVzcGFjZSBtZWRpYVdpa2kubGlicyB7XG5cdGxldCB3cGhsOiB7dmVyc2lvbj86IHN0cmluZzsgY21WZXJzaW9uPzogc3RyaW5nOyBtb25hY29WZXJzaW9uPzogc3RyaW5nOyBDRE4/OiBzdHJpbmd9IHwgdW5kZWZpbmVkO1xufVxuXG4oYXN5bmMgKCkgPT4ge1xuXHRpZiAoIW13LmNvbmZpZy5nZXQoJ3dnSXNBcnRpY2xlJykgfHwgbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSAhPT0gJ3ZpZXcnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHtsaWJzfSA9IG1lZGlhV2lraSxcblx0XHR7d3BobH0gPSBsaWJzO1xuXHRpZiAoIXdwaGw/LnZlcnNpb24pIHtcblx0XHRjb25zdCB2ZXJzaW9uID0gJzMuNC4xJztcblx0XHRsaWJzLndwaGwgPSB7dmVyc2lvbiwgLi4ud3BobH07IC8vIOW8gOWni+WKoOi9vVxuXG5cdFx0Ly8g6Lev5b6EXG5cdFx0Y29uc3QgTVdfQ0ROID0gYG5wbS9AYmhzZC9jb2RlbWlycm9yLW1lZGlhd2lraUAke2xpYnMud3BobC5jbVZlcnNpb24gPz8gJ2xhdGVzdCd9L2Rpc3Qvd2lraS5taW4uanNgO1xuXG5cdFx0aWYgKHR5cGVvZiBDb2RlTWlycm9yNiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0YXdhaXQgJC5hamF4KGAke3dwaGw/LkNETiB8fCBDRE59LyR7TVdfQ0ROfWAsIHtkYXRhVHlwZTogJ3NjcmlwdCcsIGNhY2hlOiB0cnVlfSk7XG5cdFx0fVxuXHRcdE9iamVjdC5hc3NpZ24oQ29kZU1pcnJvcjYhLCB7XG5cdFx0XHRDRE46IHdwaGw/LkNETixcblx0XHRcdG1vbmFjb1ZlcnNpb246IHdwaGw/Lm1vbmFjb1ZlcnNpb24sXG5cdFx0fSk7XG5cblx0XHQvLyDnm5Hop4YgV2lraXBsdXMg57yW6L6R5qGGXG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigocmVjb3JkcykgPT4ge1xuXHRcdFx0Y29uc3Qgc2VsZWN0b3IgPSAnI1dpa2lwbHVzLVF1aWNrZWRpdCwgI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnLFxuXHRcdFx0XHRbYWRkZWRdID0gJChcblx0XHRcdFx0XHRyZWNvcmRzLmZsYXRNYXAoKHthZGRlZE5vZGVzfSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFsuLi5hZGRlZE5vZGVzXTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpLmZpbmQ8SFRNTFRleHRBcmVhRWxlbWVudD4oc2VsZWN0b3IpO1xuXHRcdFx0aWYgKGFkZGVkKSB7XG5cdFx0XHRcdHZvaWQgcmVuZGVyRWRpdG9yKGFkZGVkLCBhZGRlZC5pZCA9PT0gJ1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFtyZW1vdmVkXSA9ICQoXG5cdFx0XHRcdFx0cmVjb3Jkcy5mbGF0TWFwKCh7cmVtb3ZlZE5vZGVzfSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFsuLi5yZW1vdmVkTm9kZXNdO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCkuZmluZDxIVE1MVGV4dEFyZWFFbGVtZW50PihzZWxlY3RvciksXG5cdFx0XHRcdGNtID0gQ29kZU1pcnJvcjYuaW5zdGFuY2VzPy5nZXQocmVtb3ZlZCEpO1xuXHRcdFx0aWYgKHR5cGVvZiBjbT8uZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjbS5kZXN0cm95KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7Y2hpbGRMaXN0OiB0cnVlfSk7XG5cdH1cbn0pKCk7XG5cbmV4cG9ydCB7fTtcbiIsICJpbXBvcnQgJy4vc3R5bGUubGVzcyc7XG5pbXBvcnQge2NoZWNrRGVwZW5kZW5jaWVzfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4oZnVuY3Rpb24gV2lraXBsdXNIaWdobGlnaHQoKSB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dJc0FydGljbGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dJc0FydGljbGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsb2FkZXIgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0YXdhaXQgY2hlY2tEZXBlbmRlbmNpZXMoJ1dpa2lwbHVzJyk7XG5cblx0XHRjb25zdCB7J3Zpc3VhbGVkaXRvci1lbmFibGUnOiBpc1ZlRW5hYmxlfSA9IG13LnVzZXIub3B0aW9ucy5nZXQoKSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcblxuXHRcdC8qIHNlZSA8aHR0cHM6Ly9naXRodWIuY29tL1dpa2lwbHVzL1dpa2lwbHVzL2lzc3Vlcy82NT4gKi9cblx0XHRpZiAoaXNWZUVuYWJsZSkge1xuXHRcdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQudmlzdWFsRWRpdG9yLmNvcmUnKTtcblx0XHR9XG5cblx0XHRhd2FpdCBpbXBvcnQoJy4vc3JjL21haW4nKTtcblx0fTtcblxuXHR2b2lkIGxvYWRlcigpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQU9JQTtBQVBKLElBaURJQztBQWpESixJQUFBQyxZQUFBQyxNQUFBO0VBQUEsb0ZBQUE7QUFPSUgsVUFBTTtBQTBDTkMsZ0JBQWFHLFNBQVFDLEtBQUtDLE1BQU1DLE9BQU9DLGFBQWFDLFFBQVFMLEdBQUcsQ0FBQyxDQUFDO0VB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QVUsQ0FBQ0MsYUFBYTtBQUN4QztFQUNEO0FBRUEsTUFBSSxrQkFBa0J0RSxVQUFVO0FBQy9CO0VBQ0Q7QUFFQSxRQUFNN0IsU0FBQSwyQkFBQTtBQUFBLFFBQUFvRyxRQUFBbEgsa0JBQVMsYUFBMkI7QUFDekMsYUFBQSxHQUFNNkcsa0JBQUFNLG1CQUFrQixVQUFVO0FBRWxDLFlBQU07UUFBQyx1QkFBdUJDO01BQVUsSUFBSTFILEdBQUcySCxLQUFLQyxRQUFRMUgsSUFBSTtBQUdoRSxVQUFJd0gsWUFBWTtBQUNmLGNBQU0xSCxHQUFHb0IsT0FBT0MsTUFBTSx1QkFBdUI7TUFDOUM7QUFFQSxZQUFNd0csUUFBQUMsUUFBQSxFQUFBQyxLQUFBLE9BQUEzQyxVQUFBLEdBQUFELGFBQUE7SUFDUCxDQUFBO0FBQUEsV0FBQSxTQVhNL0QsVUFBQTtBQUFBLGFBQUFvRyxNQUFBekUsTUFBQSxNQUFBQyxTQUFBO0lBQUE7RUFBQSxFQUFBO0FBYU4sT0FBSzVCLE9BQU87QUFDYixHQUFHOyIsCiAgIm5hbWVzIjogWyJDRE4iLCAiZ2V0T2JqZWN0IiwgImluaXRfZGlzdCIsICJfX2VzbSIsICJrZXkiLCAiSlNPTiIsICJwYXJzZSIsICJTdHJpbmciLCAibG9jYWxTdG9yYWdlIiwgImdldEl0ZW0iLCAicGFnZSIsICJucyIsICJjb250ZW50bW9kZWwiLCAiQ09OVEVOVE1PREVMUyIsICJFWFRTIiwgIk5BTUVTUEFDRVMiLCAiZ2V0UGFnZU1vZGUiLCAic3VibWl0IiwgInN1Ym1pdE1pbm9yIiwgImVzY2FwZUVkaXQiLCAicmVuZGVyRWRpdG9yIiwgImluaXRfY29yZSIsICJ3Z1BhZ2VOYW1lIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIndpa2l0ZXh0IiwgIk1hcCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInZhbHVlIiwgIldpa2lwbHVzUGFnZXMiLCAiX1dpa2lwbHVzUGFnZXMiLCAiUGFnZXMiLCAicGFnZXMiLCAiT2JqZWN0IiwgInZhbHVlcyIsICJmaWx0ZXIiLCAic2VjdGlvbkNhY2hlIiwgImluY2x1ZGVzIiwgInNvbWUiLCAidGl0bGUiLCAiZW5kc1dpdGgiLCAibG9hZGVyIiwgInVzaW5nIiwgIm1vZGVzIiwgIlNldCIsICJtYXAiLCAiX0VYVFMkZ2V0IiwgIl90JGdldEV4dGVuc2lvbiR0b0xvdyIsICJfdCRnZXRFeHRlbnNpb24iLCAidCIsICJUaXRsZSIsICJuYW1lc3BhY2UiLCAiZ2V0TmFtZXNwYWNlSWQiLCAibW9kZSIsICJnZXRFeHRlbnNpb24iLCAidG9Mb3dlckNhc2UiLCAic2l6ZSIsICJsZW5ndGgiLCAiaGFzIiwgIl9DT05URU5UTU9ERUxTJGNvbnRlbiIsICJPTyIsICJ1aSIsICJjb25maXJtIiwgIm1lc3NhZ2UiLCAiYWN0aW9ucyIsICJsYWJlbCIsICJhY3Rpb24iLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZGlzcGF0Y2hFdmVudCIsICJQb2ludGVyRXZlbnQiLCAiY2hlY2tlZCIsICJzZXR0aW5ncyIsICJlc2NUb0V4aXRRdWlja0VkaXQiLCAiX3JlZjIiLCAidGFyZ2V0IiwgInNldHRpbmciLCAiX2NtJHZpZXckZG9tIiwgIl9jbSR2aWV3IiwgImNtIiwgIkNvZGVNaXJyb3I2IiwgImZyb21UZXh0QXJlYSIsICJ2aWV3IiwgImRvbSIsICJlZGl0b3IiLCAiZ2V0RG9tTm9kZSIsICJpZCIsICJhZGRDb21tYW5kIiwgIm1vbmFjbyIsICJLZXlNb2QiLCAiQ3RybENtZCIsICJLZXlDb2RlIiwgIktleVMiLCAiU2hpZnQiLCAiRXNjYXBlIiwgImV4dHJhS2V5cyIsICJydW4iLCAianVtcCIsICJocmVmIiwgIl94MiIsICJfeDMiLCAibWFpbl9leHBvcnRzIiwgImluaXRfbWFpbiIsICJsaWJzIiwgIm1lZGlhV2lraSIsICJ3cGhsIiwgInZlcnNpb24iLCAiX2xpYnMkd3BobCRjbVZlcnNpb24iLCAiTVdfQ0ROIiwgImNvbmNhdCIsICJjbVZlcnNpb24iLCAiJCIsICJhamF4IiwgImRhdGFUeXBlIiwgImNhY2hlIiwgImFzc2lnbiIsICJtb25hY29WZXJzaW9uIiwgIm9ic2VydmVyIiwgIk11dGF0aW9uT2JzZXJ2ZXIiLCAicmVjb3JkcyIsICJfQ29kZU1pcnJvcjYkaW5zdGFuY2UiLCAic2VsZWN0b3IiLCAiYWRkZWQiLCAiZmxhdE1hcCIsICJhZGRlZE5vZGVzIiwgImZpbmQiLCAicmVtb3ZlZCIsICJyZW1vdmVkTm9kZXMiLCAiaW5zdGFuY2VzIiwgImRlc3Ryb3kiLCAib2JzZXJ2ZSIsICJib2R5IiwgImNoaWxkTGlzdCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIldpa2lwbHVzSGlnaGxpZ2h0IiwgIndnQWN0aW9uIiwgIndnSXNBcnRpY2xlIiwgIl9yZWY0IiwgImNoZWNrRGVwZW5kZW5jaWVzIiwgImlzVmVFbmFibGUiLCAidXNlciIsICJvcHRpb25zIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJ0aGVuIl0KfQo=
