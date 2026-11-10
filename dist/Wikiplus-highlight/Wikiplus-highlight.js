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
      var _t$getExtension;
      if (id && pageName === title) {
        return [contentmodel.toLowerCase(), nsid];
      }
      const t = new mw.Title(title), ns = t.getNamespaceId();
      if (ns % 2 || isDoc(title)) {
        return ["wikitext", ns];
      }
      const mode = EXTS.get(((_t$getExtension = t.getExtension()) === null || _t$getExtension === void 0 ? void 0 : _t$getExtension.toLowerCase()) ?? "") ?? NAMESPACES[ns] ?? "wikitext";
      return [mode === "css" && ![2, 8, 2300].includes(ns) ? "sanitized-css" : mode, ns];
    };
    getModeFromValue = async (value) => {
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
        await mw.loader.using("mediawiki.Title");
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
      await mw.loader.using("oojs-ui-windows");
      return await OO.ui.confirm(mw.msg("cm-mw-contentmodel"), {
        actions: [{
          label: nsid === 274 ? "Widget" : "Lua"
        }, {
          label: "Wikitext",
          action: "accept"
        }]
      }) ? ["wikitext"] : [nsid === 274 ? "html" : "lua"];
    };
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
    renderEditor = async (target, setting) => {
      var _cm$view;
      const cm = await CodeMirror6.fromTextArea(target, ...setting ? ["json"] : await getModeFromValue(target.value));
      (((_cm$view = cm.view) === null || _cm$view === void 0 ? void 0 : _cm$view.dom) ?? cm.editor.getDomNode()).id = "Wikiplus-CodeMirror";
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
    };
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
    (async () => {
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
          await $.ajax(CM_CDN, {
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
  const loader = async () => {
    await (0, import_ext_gadget.checkDependencies)("Wikiplus");
    const {
      "visualeditor-enable": isVeEnable
    } = mw.user.options.get();
    if (isVeEnable) {
      await mw.loader.using("ext.visualEditor.core");
    }
    await Promise.resolve().then(() => (init_main(), main_exports));
  };
  void loader();
})();

})();

/* </nowiki> */

