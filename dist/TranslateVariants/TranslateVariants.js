/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Xiplus/js/TranslateVariants}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/TranslateVariants}
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

// dist/TranslateVariants/TranslateVariants.js
//! src/TranslateVariants/TranslateVariants.ts
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
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/TranslateVariants/modules/constant.ts
var langs = ["zh", "zh-hans", "zh-cn", "zh-my", "zh-sg", "zh-hant", "zh-hk", "zh-mo", "zh-tw"];
var nameOfLangs = {
  zh: "原始",
  "zh-hans": "简体",
  "zh-cn": "中国大陆简体",
  "zh-my": "马来西亚简体",
  "zh-sg": "新加坡简体",
  "zh-hant": "繁體",
  "zh-hk": "中國香港繁體",
  "zh-mo": "中國澳門繁體",
  "zh-tw": "中國臺灣繁體"
};
//! src/TranslateVariants/modules/getLangQueue.ts
var getLangQueue = () => {
  const runLangs = prompt(window.wgULS("转换以下语言（以逗号隔开）：", "轉換以下語言（以逗號隔開）："), langs.join(","));
  const supportedLangs = new Set(langs);
  const langQueue = [...new Set((runLangs !== null && runLangs !== void 0 ? runLangs : langs.join(",")).split(",").map((lang) => lang.trim()).filter((lang) => supportedLangs.has(lang)))];
  return langQueue;
};
//! src/TranslateVariants/TranslateVariants.module.less
var noChanges = "TranslateVariants-module__noChanges_Yvm-lW__4100";
var publishChanges = "TranslateVariants-module__publishChanges_Yvm-lW__4100";
var submitAll = "TranslateVariants-module__submitAll_Yvm-lW__4100";
var warning = "TranslateVariants-module__warning_Yvm-lW__4100";
//! src/TranslateVariants/modules/util/notify.ts
var notify = (message, type = "error") => {
  void mw.notify(message, {
    tag: "TranslateVariants",
    type
  });
};
//! src/TranslateVariants/modules/components/getWrapper.ts
var getWrapper = () => {
  var _document$querySelect;
  const wrapper = document.createElement("div");
  wrapper.id = "TranslateVariants";
  (_document$querySelect = document.querySelector("#bodyContent")) === null || _document$querySelect === void 0 || _document$querySelect.prepend(wrapper);
  const submitAllButton = document.createElement("button");
  submitAllButton.classList.add("cdx-button", "cdx-button--action-progressive", "cdx-button--weight-primary");
  submitAllButton.textContent = window.wgULS("发布所有更改", "發佈所有變更");
  submitAllButton.addEventListener("click", () => {
    const buttons = wrapper.querySelectorAll("button.".concat(publishChanges));
    if (!buttons.length) {
      notify(window.wgULS("没有任何可以发布的更改", "沒有任何變更可發佈"));
      return;
    }
    if (!confirm(window.wgULS("发布$1个更改？", "發佈$1個變更？").replace("$1", "".concat(buttons.length)))) {
      notify(window.wgULS("已取消发布", "已取消發佈"), "warn");
      return;
    }
    var _iterator = _createForOfIteratorHelper(buttons), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const button = _step.value;
        button.click();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  const submitAllContainer = document.createElement("div");
  submitAllContainer.classList.add(submitAll);
  submitAllContainer.append(submitAllButton);
  const warningContainer = document.createElement("div");
  warningContainer.classList.add(warning);
  warningContainer.textContent = window.wgULS("提醒：TranslateVariants工具使用IT及MediaWiki转换组进行自动转换，请确认转换结果是否正确！", "提醒：TranslateVariants工具使用IT及MediaWiki轉換組進行自動轉換，請確認轉換結果是否正確！");
  wrapper.append(submitAllContainer, warningContainer);
  return wrapper;
};
//! src/TranslateVariants/options.json
var contentID = "TranslateVariants-content";
var translateVariantsSummary = "自动转换变体自[[$1]]（[[MediaWiki:Gadget-TranslateVariants.js|TranslateVariants]]）";
var version = "2.0";
//! src/TranslateVariants/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("TranslateVariants/".concat(version));
//! src/TranslateVariants/modules/preparePageContent.ts
var preparePageContent = (content) => content.replace(/[\s#&'*:<>[\]_{|}]/gim, (character) => "&#".concat(character.codePointAt(0), ";")).replace(/(&#91;&#91;)((?:(?!&#124;)(?!&#93;).)+?)(&#124;(?:(?!&#93;).)+?&#93;&#93;)/g, "$1-{$2}-$3").replace(/-&#123;(.+?)&#125;-/g, (match) => match.replace("-&#123;", "-{").replace("-&#123;", "-{").replace("&#125;-", "}-").replace(/&#124;/g, "|").replace(/&#32;/g, " ").replace(/&#61;/g, "=").replace(/&#62;/g, ">").replace(/&#58;/g, ":"));
//! src/TranslateVariants/modules/components/addPublishButton.ts
var addPublishButton = (tool, label, save, successMessage, errorMessage) => {
  const button = document.createElement("button");
  button.classList.add(publishChanges, "cdx-button");
  button.textContent = label;
  button.addEventListener("click", /* @__PURE__ */ _asyncToGenerator(function* () {
    button.remove();
    try {
      yield save();
      notify(successMessage, "success");
    } catch (error) {
      notify(errorMessage(error));
    }
  }));
  tool.append(button);
};
//! src/TranslateVariants/modules/processTranslate.ts
var processTranslate = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* ({
    pageContent,
    langQueue,
    basePageName,
    wrapper,
    summary
  }) {
    var _iterator2 = _createForOfIteratorHelper(langQueue), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const lang = _step2.value;
        const diffContainer = document.createElement("div");
        diffContainer.id = "TranslateVariants-diff-".concat(lang);
        wrapper.append(diffContainer, document.createElement("hr"));
        const targetTitle = lang === "zh" ? basePageName : "".concat(basePageName, "/").concat(lang);
        try {
          var _parsedContent$queryS, _parsedContent$queryS2;
          let content;
          try {
            content = yield api.parse('{{NoteTA|G1=IT|G2=MediaWiki}}<div id="'.concat(contentID, '">').concat(pageContent, "</div>"), {
              action: "parse",
              uselang: lang
            });
          } catch (error) {
            notify(window.wgULS("解析$1时发生错误：", "解析$1時發生錯誤：").replace("$1", lang) + error);
            continue;
          }
          const parsedContent = document.createElement("div");
          parsedContent.innerHTML = content;
          const newPageContent = (_parsedContent$queryS = (_parsedContent$queryS2 = parsedContent.querySelector("#".concat(contentID))) === null || _parsedContent$queryS2 === void 0 ? void 0 : _parsedContent$queryS2.textContent) !== null && _parsedContent$queryS !== void 0 ? _parsedContent$queryS : "";
          const queryDiffParams = {
            action: "query",
            format: "json",
            formatversion: "2",
            titles: targetTitle,
            prop: "revisions",
            rvdifftotext: newPageContent
          };
          let data;
          try {
            data = yield api.get(queryDiffParams);
          } catch (error) {
            notify(window.wgULS("获取$1差异时发生错误：", "取得$1差異時發生錯誤：").replace("$1", lang) + error);
            continue;
          }
          const tool = document.createElement("div");
          const pageLink = document.createElement("a");
          pageLink.href = mw.util.getUrl(targetTitle);
          pageLink.textContent = "".concat(lang, "（").concat(nameOfLangs[lang], "）");
          const editLink = document.createElement("a");
          editLink.href = mw.util.getUrl(targetTitle, {
            action: "edit"
          });
          editLink.textContent = window.wgULS("编", "編");
          tool.append(pageLink, document.createTextNode("（"), editLink, document.createTextNode("）"));
          diffContainer.append(tool);
          const [page] = data["query"].pages;
          if (page.missing) {
            addPublishButton(tool, window.wgULS("发布页面", "發佈頁面"), /* @__PURE__ */ _asyncToGenerator(function* () {
              yield api.create(targetTitle, {
                summary
              }, newPageContent);
            }), window.wgULS("已编辑 ", "已編輯 ") + targetTitle, (error) => window.wgULS("编辑", "編輯 ") + targetTitle + window.wgULS(" 发生错误：", " 發生錯誤：") + error);
            const preview = document.createElement("pre");
            preview.textContent = newPageContent;
            diffContainer.append(preview);
            continue;
          }
          const diff = page.revisions[0].diff.body;
          if (diff === "") {
            const noChangesIndicator = document.createElement("span");
            noChangesIndicator.classList.add(noChanges);
            noChangesIndicator.textContent = window.wgULS("无更改", "無變更");
            tool.append(noChangesIndicator);
          } else {
            addPublishButton(tool, window.wgULS("发布更改", "發佈變更"), /* @__PURE__ */ _asyncToGenerator(function* () {
              yield api.edit(targetTitle, () => ({
                summary,
                text: newPageContent,
                nocreate: false
              }));
            }), window.wgULS("已编辑", "已編輯 ") + targetTitle, (error) => window.wgULS("编辑$1发生错误：", "編輯$1發生錯誤：").replace("$1", targetTitle) + error);
            const diffTable = document.createElement("table");
            diffTable.classList.add("diff");
            diffTable.innerHTML = diff;
            const columnGroup = document.createElement("colgroup");
            for (var _i = 0, _arr = ["diff-marker", "diff-content", "diff-marker", "diff-content"]; _i < _arr.length; _i++) {
              const className = _arr[_i];
              const column = document.createElement("col");
              column.classList.add(className);
              columnGroup.append(column);
            }
            diffTable.prepend(columnGroup);
            diffContainer.append(diffTable);
          }
        } catch (error) {
          notify(window.wgULS("处理$1时发生错误：", "處理$1時發生錯誤：").replace("$1", lang) + error);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  return function processTranslate2(_x) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/TranslateVariants/modules/loadPageContent.ts
var loadPageContent = /* @__PURE__ */ (function() {
  var _ref5 = _asyncToGenerator(function* ({
    wgPageName,
    wrapper,
    langQueue
  }) {
    const summary = translateVariantsSummary.replace(/\$1/g, wgPageName);
    const basePageName = wgPageName.replace(/\/zh$/, "");
    const queryContentParams = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "revisions",
      titles: wgPageName,
      curtimestamp: true,
      rvprop: ["content", "timestamp"]
    };
    try {
      var _data$query;
      const data = yield api.get(queryContentParams);
      const pages = (_data$query = data["query"]) === null || _data$query === void 0 ? void 0 : _data$query.pages;
      if (!pages) {
        throw new Error("unknown");
      }
      const [page] = pages;
      if (page.invalid) {
        throw new Error("invalidtitle");
      }
      if (page.missing) {
        throw new Error("nocreate-missing");
      }
      const [{
        content
      }] = page.revisions;
      yield processTranslate({
        pageContent: preparePageContent(content),
        langQueue,
        basePageName,
        wrapper,
        summary
      });
    } catch (error) {
      notify(window.wgULS("获取页面内容时发生错误：", "取得頁面內容時發生錯誤：") + error);
    }
  });
  return function loadPageContent2(_x2) {
    return _ref5.apply(this, arguments);
  };
})();
//! src/TranslateVariants/modules/translateVariants.ts
var translateVariants = (wgPageName) => {
  const wrapper = getWrapper();
  const langQueue = getLangQueue();
  void loadPageContent({
    wgPageName,
    wrapper,
    langQueue
  });
};
//! src/TranslateVariants/TranslateVariants.ts
void (0, import_ext_gadget2.getBody)().then(($body) => {
  const {
    wgPageName
  } = mw.config.get();
  if (!/^MediaWiki:[^/]+(\/zh)?$/.test(wgPageName)) {
    return;
  }
  const portletId = $body.find("#p-cactions").length ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", window.wgULS("转换变体", "轉換變體"));
  element === null || element === void 0 || element.addEventListener("click", () => {
    element.remove();
    translateVariants(wgPageName);
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLnRzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9tb2R1bGVzL2dldExhbmdRdWV1ZS50cyIsICJzcmMvVHJhbnNsYXRlVmFyaWFudHMvVHJhbnNsYXRlVmFyaWFudHMubW9kdWxlLmxlc3MiLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvdXRpbC9ub3RpZnkudHMiLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvY29tcG9uZW50cy9nZXRXcmFwcGVyLnRzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9vcHRpb25zLmpzb24iLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvdXRpbC9hcGkudHMiLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL21vZHVsZXMvcHJlcGFyZVBhZ2VDb250ZW50LnRzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9tb2R1bGVzL2NvbXBvbmVudHMvYWRkUHVibGlzaEJ1dHRvbi50cyIsICJzcmMvVHJhbnNsYXRlVmFyaWFudHMvbW9kdWxlcy9wcm9jZXNzVHJhbnNsYXRlLnRzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9tb2R1bGVzL2xvYWRQYWdlQ29udGVudC50cyIsICJzcmMvVHJhbnNsYXRlVmFyaWFudHMvbW9kdWxlcy90cmFuc2xhdGVWYXJpYW50cy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt0cmFuc2xhdGVWYXJpYW50c30gZnJvbSAnLi9tb2R1bGVzL3RyYW5zbGF0ZVZhcmlhbnRzJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKCEvXk1lZGlhV2lraTpbXi9dKyhcXC96aCk/JC8udGVzdCh3Z1BhZ2VOYW1lKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gJGJvZHkuZmluZCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgd2luZG93LndnVUxTKCfovazmjaLlj5jkvZMnLCAn6L2J5o+b6K6K6auUJykpO1xuXG5cdGVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0dHJhbnNsYXRlVmFyaWFudHMod2dQYWdlTmFtZSk7XG5cdH0pO1xufSk7XG4iLCAidHlwZSBMYW5ncyA9ICd6aCcgfCAnemgtaGFucycgfCAnemgtY24nIHwgJ3poLW15JyB8ICd6aC1zZycgfCAnemgtaGFudCcgfCAnemgtaGsnIHwgJ3poLW1vJyB8ICd6aC10dyc7XG5jb25zdCBsYW5nczogTGFuZ3NbXSA9IFsnemgnLCAnemgtaGFucycsICd6aC1jbicsICd6aC1teScsICd6aC1zZycsICd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5jb25zdCBuYW1lT2ZMYW5ncyA9IHtcblx0emg6ICfljp/lp4snLFxuXHQnemgtaGFucyc6ICfnroDkvZMnLFxuXHQnemgtY24nOiAn5Lit5Zu95aSn6ZmG566A5L2TJyxcblx0J3poLW15JzogJ+mprOadpeilv+S6mueugOS9kycsXG5cdCd6aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHQnemgtaGFudCc6ICfnuYHpq5QnLFxuXHQnemgtaGsnOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0J3poLW1vJzogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdCd6aC10dyc6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPExhbmdzLCBzdHJpbmc+O1xuXG5leHBvcnQge3R5cGUgTGFuZ3MsIGxhbmdzLCBuYW1lT2ZMYW5nc307XG4iLCAiaW1wb3J0IHtMYW5ncywgbGFuZ3N9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBnZXRMYW5nUXVldWUgPSAoKTogTGFuZ3NbXSA9PiB7XG5cdGNvbnN0IHJ1bkxhbmdzID0gcHJvbXB0KFxuXHRcdHdpbmRvdy53Z1VMUygn6L2s5o2i5Lul5LiL6K+t6KiA77yI5Lul6YCX5Y+36ZqU5byA77yJ77yaJywgJ+i9ieaPm+S7peS4i+iqnuiogO+8iOS7pemAl+iZn+malOmWi++8ie+8micpLFxuXHRcdGxhbmdzLmpvaW4oJywnKVxuXHQpO1xuXG5cdGNvbnN0IHN1cHBvcnRlZExhbmdzID0gbmV3IFNldDxzdHJpbmc+KGxhbmdzKTtcblx0Y29uc3QgbGFuZ1F1ZXVlOiBMYW5nc1tdID0gW1xuXHRcdC4uLm5ldyBTZXQoXG5cdFx0XHQocnVuTGFuZ3MgPz8gbGFuZ3Muam9pbignLCcpKVxuXHRcdFx0XHQuc3BsaXQoJywnKVxuXHRcdFx0XHQubWFwKChsYW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4gbGFuZy50cmltKCkpXG5cdFx0XHRcdC5maWx0ZXIoKGxhbmc6IHN0cmluZyk6IGxhbmcgaXMgTGFuZ3MgPT4gc3VwcG9ydGVkTGFuZ3MuaGFzKGxhbmcpKVxuXHRcdCksXG5cdF07XG5cblx0cmV0dXJuIGxhbmdRdWV1ZTtcbn07XG5cbmV4cG9ydCB7Z2V0TGFuZ1F1ZXVlfTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3Qgbm9DaGFuZ2VzID0gXCJUcmFuc2xhdGVWYXJpYW50cy1tb2R1bGVfX25vQ2hhbmdlc19Zdm0tbFdfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCBwdWJsaXNoQ2hhbmdlcyA9IFwiVHJhbnNsYXRlVmFyaWFudHMtbW9kdWxlX19wdWJsaXNoQ2hhbmdlc19Zdm0tbFdfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCBzdWJtaXRBbGwgPSBcIlRyYW5zbGF0ZVZhcmlhbnRzLW1vZHVsZV9fc3VibWl0QWxsX1l2bS1sV19fNDEwMFwiO1xuZXhwb3J0IGNvbnN0IHdhcm5pbmcgPSBcIlRyYW5zbGF0ZVZhcmlhbnRzLW1vZHVsZV9fd2FybmluZ19Zdm0tbFdfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIm5vQ2hhbmdlc1wiOiBub0NoYW5nZXMsXG4gIFwicHVibGlzaENoYW5nZXNcIjogcHVibGlzaENoYW5nZXMsXG4gIFwic3VibWl0QWxsXCI6IHN1Ym1pdEFsbCxcbiAgXCJ3YXJuaW5nXCI6IHdhcm5pbmdcbn07XG4gICAgICAiLCAiY29uc3Qgbm90aWZ5ID0gKG1lc3NhZ2U6IHN0cmluZywgdHlwZTogJ2Vycm9yJyB8ICdzdWNjZXNzJyB8ICd3YXJuJyA9ICdlcnJvcicpOiB2b2lkID0+IHtcblx0dm9pZCBtdy5ub3RpZnkobWVzc2FnZSwge3RhZzogJ1RyYW5zbGF0ZVZhcmlhbnRzJywgdHlwZX0pO1xufTtcblxuZXhwb3J0IHtub3RpZnl9O1xuIiwgImltcG9ydCB7cHVibGlzaENoYW5nZXMsIHN1Ym1pdEFsbCwgd2FybmluZ30gZnJvbSAnLi4vLi4vVHJhbnNsYXRlVmFyaWFudHMubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtub3RpZnl9IGZyb20gJy4uL3V0aWwvbm90aWZ5JztcblxuY29uc3QgZ2V0V3JhcHBlciA9ICgpID0+IHtcblx0Y29uc3Qgd3JhcHBlcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0d3JhcHBlci5pZCA9ICdUcmFuc2xhdGVWYXJpYW50cyc7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2R5Q29udGVudCcpPy5wcmVwZW5kKHdyYXBwZXIpO1xuXG5cdGNvbnN0IHN1Ym1pdEFsbEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0c3VibWl0QWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NkeC1idXR0b24nLCAnY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5Jyk7XG5cdHN1Ym1pdEFsbEJ1dHRvbi50ZXh0Q29udGVudCA9IHdpbmRvdy53Z1VMUygn5Y+R5biD5omA5pyJ5pu05pS5JywgJ+eZvOS9iOaJgOacieiuiuabtCcpO1xuXHRzdWJtaXRBbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgYnV0dG9uczogTm9kZUxpc3RPZjxIVE1MQnV0dG9uRWxlbWVudD4gPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoYGJ1dHRvbi4ke3B1Ymxpc2hDaGFuZ2VzfWApO1xuXHRcdGlmICghYnV0dG9ucy5sZW5ndGgpIHtcblx0XHRcdG5vdGlmeSh3aW5kb3cud2dVTFMoJ+ayoeacieS7u+S9leWPr+S7peWPkeW4g+eahOabtOaUuScsICfmspLmnInku7vkvZXorormm7Tlj6/nmbzkvYgnKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFjb25maXJtKHdpbmRvdy53Z1VMUygn5Y+R5biDJDHkuKrmm7TmlLnvvJ8nLCAn55m85L2IJDHlgIvorormm7TvvJ8nKS5yZXBsYWNlKCckMScsIGAke2J1dHRvbnMubGVuZ3RofWApKSkge1xuXHRcdFx0bm90aWZ5KHdpbmRvdy53Z1VMUygn5bey5Y+W5raI5Y+R5biDJywgJ+W3suWPlua2iOeZvOS9iCcpLCAnd2FybicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgYnV0dG9uIG9mIGJ1dHRvbnMpIHtcblx0XHRcdGJ1dHRvbi5jbGljaygpO1xuXHRcdH1cblx0fSk7XG5cblx0Y29uc3Qgc3VibWl0QWxsQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRzdWJtaXRBbGxDb250YWluZXIuY2xhc3NMaXN0LmFkZChzdWJtaXRBbGwpO1xuXHRzdWJtaXRBbGxDb250YWluZXIuYXBwZW5kKHN1Ym1pdEFsbEJ1dHRvbik7XG5cblx0Y29uc3Qgd2FybmluZ0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0d2FybmluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHdhcm5pbmcpO1xuXHR3YXJuaW5nQ29udGFpbmVyLnRleHRDb250ZW50ID0gd2luZG93LndnVUxTKFxuXHRcdCfmj5DphpLvvJpUcmFuc2xhdGVWYXJpYW50c+W3peWFt+S9v+eUqElU5Y+KTWVkaWFXaWtp6L2s5o2i57uE6L+b6KGM6Ieq5Yqo6L2s5o2i77yM6K+356Gu6K6k6L2s5o2i57uT5p6c5piv5ZCm5q2j56Gu77yBJyxcblx0XHQn5o+Q6YaS77yaVHJhbnNsYXRlVmFyaWFudHPlt6Xlhbfkvb/nlKhJVOWPik1lZGlhV2lraei9ieaPm+e1hOmAsuihjOiHquWLlei9ieaPm++8jOiri+eiuuiqjei9ieaPm+e1kOaenOaYr+WQpuato+eiuu+8gSdcblx0KTtcblx0d3JhcHBlci5hcHBlbmQoc3VibWl0QWxsQ29udGFpbmVyLCB3YXJuaW5nQ29udGFpbmVyKTtcblxuXHRyZXR1cm4gd3JhcHBlcjtcbn07XG5cbmV4cG9ydCB7Z2V0V3JhcHBlcn07XG4iLCAie1xuXHRcImNvbnRlbnRJRFwiOiBcIlRyYW5zbGF0ZVZhcmlhbnRzLWNvbnRlbnRcIixcblx0XCJ0cmFuc2xhdGVWYXJpYW50c1N1bW1hcnlcIjogXCLoh6rliqjovazmjaLlj5jkvZPoh6pbWyQxXV3vvIhbW01lZGlhV2lraTpHYWRnZXQtVHJhbnNsYXRlVmFyaWFudHMuanN8VHJhbnNsYXRlVmFyaWFudHNdXe+8iVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgVHJhbnNsYXRlVmFyaWFudHMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJjb25zdCBwcmVwYXJlUGFnZUNvbnRlbnQgPSAoY29udGVudDogc3RyaW5nKTogc3RyaW5nID0+XG5cdGNvbnRlbnRcblx0XHQucmVwbGFjZSgvW1xccyMmJyo6PD5bXFxdX3t8fV0vZ2ltLCAoY2hhcmFjdGVyOiBzdHJpbmcpOiBzdHJpbmcgPT4gYCYjJHtjaGFyYWN0ZXIuY29kZVBvaW50QXQoMCl9O2ApXG5cdFx0LnJlcGxhY2UoLygmIzkxOyYjOTE7KSgoPzooPyEmIzEyNDspKD8hJiM5MzspLikrPykoJiMxMjQ7KD86KD8hJiM5MzspLikrPyYjOTM7JiM5MzspL2csICckMS17JDJ9LSQzJylcblx0XHQucmVwbGFjZSgvLSYjMTIzOyguKz8pJiMxMjU7LS9nLCAobWF0Y2g6IHN0cmluZyk6IHN0cmluZyA9PlxuXHRcdFx0bWF0Y2hcblx0XHRcdFx0LnJlcGxhY2UoJy0mIzEyMzsnLCAnLXsnKVxuXHRcdFx0XHQucmVwbGFjZSgnLSYjMTIzOycsICcteycpXG5cdFx0XHRcdC5yZXBsYWNlKCcmIzEyNTstJywgJ30tJylcblx0XHRcdFx0LnJlcGxhY2UoLyYjMTI0Oy9nLCAnfCcpXG5cdFx0XHRcdC5yZXBsYWNlKC8mIzMyOy9nLCAnICcpXG5cdFx0XHRcdC5yZXBsYWNlKC8mIzYxOy9nLCAnPScpXG5cdFx0XHRcdC5yZXBsYWNlKC8mIzYyOy9nLCAnPicpXG5cdFx0XHRcdC5yZXBsYWNlKC8mIzU4Oy9nLCAnOicpXG5cdFx0KTtcblxuZXhwb3J0IHtwcmVwYXJlUGFnZUNvbnRlbnR9O1xuIiwgImltcG9ydCB7bm90aWZ5fSBmcm9tICcuLi91dGlsL25vdGlmeSc7XG5pbXBvcnQge3B1Ymxpc2hDaGFuZ2VzfSBmcm9tICcuLi8uLi9UcmFuc2xhdGVWYXJpYW50cy5tb2R1bGUubGVzcyc7XG5cbmNvbnN0IGFkZFB1Ymxpc2hCdXR0b24gPSAoXG5cdHRvb2w6IEhUTUxEaXZFbGVtZW50LFxuXHRsYWJlbDogc3RyaW5nLFxuXHRzYXZlOiAoKSA9PiBQcm9taXNlPHZvaWQ+LFxuXHRzdWNjZXNzTWVzc2FnZTogc3RyaW5nLFxuXHRlcnJvck1lc3NhZ2U6IChlcnJvcjogdW5rbm93bikgPT4gc3RyaW5nXG4pOiB2b2lkID0+IHtcblx0Y29uc3QgYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRidXR0b24uY2xhc3NMaXN0LmFkZChwdWJsaXNoQ2hhbmdlcywgJ2NkeC1idXR0b24nKTtcblx0YnV0dG9uLnRleHRDb250ZW50ID0gbGFiZWw7XG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRidXR0b24ucmVtb3ZlKCk7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHNhdmUoKTtcblx0XHRcdG5vdGlmeShzdWNjZXNzTWVzc2FnZSwgJ3N1Y2Nlc3MnKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0bm90aWZ5KGVycm9yTWVzc2FnZShlcnJvcikpO1xuXHRcdH1cblx0fSk7XG5cdHRvb2wuYXBwZW5kKGJ1dHRvbik7XG59O1xuXG5leHBvcnQge2FkZFB1Ymxpc2hCdXR0b259O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7TGFuZ3MsIG5hbWVPZkxhbmdzfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7YWRkUHVibGlzaEJ1dHRvbn0gZnJvbSAnLi9jb21wb25lbnRzL2FkZFB1Ymxpc2hCdXR0b24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vdXRpbC9hcGknO1xuaW1wb3J0IHtub0NoYW5nZXN9IGZyb20gJy4uL1RyYW5zbGF0ZVZhcmlhbnRzLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7bm90aWZ5fSBmcm9tICcuL3V0aWwvbm90aWZ5JztcblxuY29uc3QgcHJvY2Vzc1RyYW5zbGF0ZSA9IGFzeW5jICh7XG5cdHBhZ2VDb250ZW50LFxuXHRsYW5nUXVldWUsXG5cdGJhc2VQYWdlTmFtZSxcblx0d3JhcHBlcixcblx0c3VtbWFyeSxcbn06IHtcblx0cGFnZUNvbnRlbnQ6IHN0cmluZztcblx0bGFuZ1F1ZXVlOiBMYW5nc1tdO1xuXHRiYXNlUGFnZU5hbWU6IHN0cmluZztcblx0d3JhcHBlcjogSFRNTEVsZW1lbnQ7XG5cdHN1bW1hcnk6IHN0cmluZztcbn0pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Zm9yIChjb25zdCBsYW5nIG9mIGxhbmdRdWV1ZSkge1xuXHRcdGNvbnN0IGRpZmZDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZGlmZkNvbnRhaW5lci5pZCA9IGBUcmFuc2xhdGVWYXJpYW50cy1kaWZmLSR7bGFuZ31gO1xuXHRcdHdyYXBwZXIuYXBwZW5kKGRpZmZDb250YWluZXIsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuXG5cdFx0Y29uc3QgdGFyZ2V0VGl0bGU6IHN0cmluZyA9IGxhbmcgPT09ICd6aCcgPyBiYXNlUGFnZU5hbWUgOiBgJHtiYXNlUGFnZU5hbWV9LyR7bGFuZ31gO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGxldCBjb250ZW50OiBzdHJpbmc7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb250ZW50ID0gYXdhaXQgYXBpLnBhcnNlKFxuXHRcdFx0XHRcdGB7e05vdGVUQXxHMT1JVHxHMj1NZWRpYVdpa2l9fTxkaXYgaWQ9XCIke09QVElPTlMuY29udGVudElEfVwiPiR7cGFnZUNvbnRlbnR9PC9kaXY+YCxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdFx0XHR1c2VsYW5nOiBsYW5nLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdG5vdGlmeSh3aW5kb3cud2dVTFMoJ+ino+aekCQx5pe25Y+R55Sf6ZSZ6K+v77yaJywgJ+ino+aekCQx5pmC55m855Sf6Yyv6Kqk77yaJykucmVwbGFjZSgnJDEnLCBsYW5nKSArIGVycm9yKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBhcnNlZENvbnRlbnQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRwYXJzZWRDb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG5cdFx0XHRjb25zdCBuZXdQYWdlQ29udGVudDogc3RyaW5nID0gcGFyc2VkQ29udGVudC5xdWVyeVNlbGVjdG9yKGAjJHtPUFRJT05TLmNvbnRlbnRJRH1gKT8udGV4dENvbnRlbnQgPz8gJyc7XG5cblx0XHRcdGNvbnN0IHF1ZXJ5RGlmZlBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGVzOiB0YXJnZXRUaXRsZSxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHJ2ZGlmZnRvdGV4dDogbmV3UGFnZUNvbnRlbnQsXG5cdFx0XHR9O1xuXG5cdFx0XHRsZXQgZGF0YTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBhcGkuZ2V0Pj47XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRkYXRhID0gYXdhaXQgYXBpLmdldChxdWVyeURpZmZQYXJhbXMpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0bm90aWZ5KHdpbmRvdy53Z1VMUygn6I635Y+WJDHlt67lvILml7blj5HnlJ/plJnor6/vvJonLCAn5Y+W5b6XJDHlt67nlbDmmYLnmbznlJ/pjK/oqqTvvJonKS5yZXBsYWNlKCckMScsIGxhbmcpICsgZXJyb3IpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdG9vbDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGNvbnN0IHBhZ2VMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdHBhZ2VMaW5rLmhyZWYgPSBtdy51dGlsLmdldFVybCh0YXJnZXRUaXRsZSk7XG5cdFx0XHRwYWdlTGluay50ZXh0Q29udGVudCA9IGAke2xhbmd977yIJHtuYW1lT2ZMYW5nc1tsYW5nXX3vvIlgO1xuXHRcdFx0Y29uc3QgZWRpdExpbms6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0ZWRpdExpbmsuaHJlZiA9IG13LnV0aWwuZ2V0VXJsKHRhcmdldFRpdGxlLCB7YWN0aW9uOiAnZWRpdCd9KTtcblx0XHRcdGVkaXRMaW5rLnRleHRDb250ZW50ID0gd2luZG93LndnVUxTKCfnvJYnLCAn57eoJyk7XG5cdFx0XHR0b29sLmFwcGVuZChwYWdlTGluaywgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ++8iCcpLCBlZGl0TGluaywgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ++8iScpKTtcblx0XHRcdGRpZmZDb250YWluZXIuYXBwZW5kKHRvb2wpO1xuXG5cdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhWydxdWVyeSddLnBhZ2VzO1xuXHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRhZGRQdWJsaXNoQnV0dG9uKFxuXHRcdFx0XHRcdHRvb2wsXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCflj5HluIPpobXpnaInLCAn55m85L2I6aCB6Z2iJyksXG5cdFx0XHRcdFx0YXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0XHRcdFx0YXdhaXQgYXBpLmNyZWF0ZShcblx0XHRcdFx0XHRcdFx0dGFyZ2V0VGl0bGUsXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRuZXdQYWdlQ29udGVudFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5bey57yW6L6RICcsICflt7Lnt6jovK8gJykgKyB0YXJnZXRUaXRsZSxcblx0XHRcdFx0XHQoZXJyb3I6IHVua25vd24pOiBzdHJpbmcgPT5cblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn57yW6L6RJywgJ+e3qOi8ryAnKSArIHRhcmdldFRpdGxlICsgd2luZG93LndnVUxTKCcg5Y+R55Sf6ZSZ6K+v77yaJywgJyDnmbznlJ/pjK/oqqTvvJonKSArIGVycm9yXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNvbnN0IHByZXZpZXc6IEhUTUxQcmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG5cdFx0XHRcdHByZXZpZXcudGV4dENvbnRlbnQgPSBuZXdQYWdlQ29udGVudDtcblx0XHRcdFx0ZGlmZkNvbnRhaW5lci5hcHBlbmQocHJldmlldyk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkaWZmOiBzdHJpbmcgPSBwYWdlLnJldmlzaW9uc1swXS5kaWZmLmJvZHk7XG5cdFx0XHRpZiAoZGlmZiA9PT0gJycpIHtcblx0XHRcdFx0Y29uc3Qgbm9DaGFuZ2VzSW5kaWNhdG9yOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdG5vQ2hhbmdlc0luZGljYXRvci5jbGFzc0xpc3QuYWRkKG5vQ2hhbmdlcyk7XG5cdFx0XHRcdG5vQ2hhbmdlc0luZGljYXRvci50ZXh0Q29udGVudCA9IHdpbmRvdy53Z1VMUygn5peg5pu05pS5JywgJ+eEoeiuiuabtCcpO1xuXHRcdFx0XHR0b29sLmFwcGVuZChub0NoYW5nZXNJbmRpY2F0b3IpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWRkUHVibGlzaEJ1dHRvbihcblx0XHRcdFx0XHR0b29sLFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5Y+R5biD5pu05pS5JywgJ+eZvOS9iOiuiuabtCcpLFxuXHRcdFx0XHRcdGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0XHRcdGF3YWl0IGFwaS5lZGl0KHRhcmdldFRpdGxlLCAoKSA9PiAoe1xuXHRcdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0XHR0ZXh0OiBuZXdQYWdlQ29udGVudCxcblx0XHRcdFx0XHRcdFx0bm9jcmVhdGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0fSkpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCflt7LnvJbovpEnLCAn5bey57eo6LyvICcpICsgdGFyZ2V0VGl0bGUsXG5cdFx0XHRcdFx0KGVycm9yOiB1bmtub3duKTogc3RyaW5nID0+XG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+e8lui+kSQx5Y+R55Sf6ZSZ6K+v77yaJywgJ+e3qOi8ryQx55m855Sf6Yyv6Kqk77yaJykucmVwbGFjZSgnJDEnLCB0YXJnZXRUaXRsZSkgKyBlcnJvclxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjb25zdCBkaWZmVGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuXHRcdFx0XHRkaWZmVGFibGUuY2xhc3NMaXN0LmFkZCgnZGlmZicpO1xuXHRcdFx0XHRkaWZmVGFibGUuaW5uZXJIVE1MID0gZGlmZjtcblx0XHRcdFx0Y29uc3QgY29sdW1uR3JvdXA6IEhUTUxUYWJsZUNvbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb2xncm91cCcpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiBbJ2RpZmYtbWFya2VyJywgJ2RpZmYtY29udGVudCcsICdkaWZmLW1hcmtlcicsICdkaWZmLWNvbnRlbnQnXSkge1xuXHRcdFx0XHRcdGNvbnN0IGNvbHVtbjogSFRNTFRhYmxlQ29sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbCcpO1xuXHRcdFx0XHRcdGNvbHVtbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0XHRcdFx0Y29sdW1uR3JvdXAuYXBwZW5kKGNvbHVtbik7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGlmZlRhYmxlLnByZXBlbmQoY29sdW1uR3JvdXApO1xuXHRcdFx0XHRkaWZmQ29udGFpbmVyLmFwcGVuZChkaWZmVGFibGUpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRub3RpZnkod2luZG93LndnVUxTKCflpITnkIYkMeaXtuWPkeeUn+mUmeivr++8micsICfomZXnkIYkMeaZgueZvOeUn+mMr+iqpO+8micpLnJlcGxhY2UoJyQxJywgbGFuZykgKyBlcnJvcik7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NUcmFuc2xhdGV9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7TGFuZ3N9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vdXRpbC9hcGknO1xuaW1wb3J0IHtub3RpZnl9IGZyb20gJy4vdXRpbC9ub3RpZnknO1xuaW1wb3J0IHtwcmVwYXJlUGFnZUNvbnRlbnR9IGZyb20gJy4vcHJlcGFyZVBhZ2VDb250ZW50JztcbmltcG9ydCB7cHJvY2Vzc1RyYW5zbGF0ZX0gZnJvbSAnLi9wcm9jZXNzVHJhbnNsYXRlJztcblxuY29uc3QgbG9hZFBhZ2VDb250ZW50ID0gYXN5bmMgKHtcblx0d2dQYWdlTmFtZSxcblx0d3JhcHBlcixcblx0bGFuZ1F1ZXVlLFxufToge1xuXHR3Z1BhZ2VOYW1lOiBzdHJpbmc7XG5cdHdyYXBwZXI6IEhUTUxFbGVtZW50O1xuXHRsYW5nUXVldWU6IExhbmdzW107XG59KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHN1bW1hcnk6IHN0cmluZyA9IE9QVElPTlMudHJhbnNsYXRlVmFyaWFudHNTdW1tYXJ5LnJlcGxhY2UoL1xcJDEvZywgd2dQYWdlTmFtZSk7XG5cdGNvbnN0IGJhc2VQYWdlTmFtZTogc3RyaW5nID0gd2dQYWdlTmFtZS5yZXBsYWNlKC9cXC96aCQvLCAnJyk7XG5cdGNvbnN0IHF1ZXJ5Q29udGVudFBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHRpdGxlczogd2dQYWdlTmFtZSxcblx0XHRjdXJ0aW1lc3RhbXA6IHRydWUsXG5cdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJ10sXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocXVlcnlDb250ZW50UGFyYW1zKTtcblx0XHRjb25zdCBwYWdlcyA9IGRhdGFbJ3F1ZXJ5J10/LnBhZ2VzO1xuXHRcdGlmICghcGFnZXMpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcigndW5rbm93bicpO1xuXHRcdH1cblxuXHRcdGNvbnN0IFtwYWdlXSA9IHBhZ2VzO1xuXHRcdGlmIChwYWdlLmludmFsaWQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZHRpdGxlJyk7XG5cdFx0fVxuXHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbm9jcmVhdGUtbWlzc2luZycpO1xuXHRcdH1cblxuXHRcdGNvbnN0IFt7Y29udGVudH1dID0gcGFnZS5yZXZpc2lvbnM7XG5cdFx0YXdhaXQgcHJvY2Vzc1RyYW5zbGF0ZSh7XG5cdFx0XHRwYWdlQ29udGVudDogcHJlcGFyZVBhZ2VDb250ZW50KGNvbnRlbnQgYXMgc3RyaW5nKSxcblx0XHRcdGxhbmdRdWV1ZSxcblx0XHRcdGJhc2VQYWdlTmFtZSxcblx0XHRcdHdyYXBwZXIsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdG5vdGlmeSh3aW5kb3cud2dVTFMoJ+iOt+WPlumhtemdouWGheWuueaXtuWPkeeUn+mUmeivr++8micsICflj5blvpfpoIHpnaLlhaflrrnmmYLnmbznlJ/pjK/oqqTvvJonKSArIGVycm9yKTtcblx0fVxufTtcblxuZXhwb3J0IHtsb2FkUGFnZUNvbnRlbnR9O1xuIiwgImltcG9ydCB7Z2V0TGFuZ1F1ZXVlfSBmcm9tICcuL2dldExhbmdRdWV1ZSc7XG5pbXBvcnQge2dldFdyYXBwZXJ9IGZyb20gJy4vY29tcG9uZW50cy9nZXRXcmFwcGVyJztcbmltcG9ydCB7bG9hZFBhZ2VDb250ZW50fSBmcm9tICcuL2xvYWRQYWdlQ29udGVudCc7XG5cbmNvbnN0IHRyYW5zbGF0ZVZhcmlhbnRzID0gKHdnUGFnZU5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCB3cmFwcGVyID0gZ2V0V3JhcHBlcigpO1xuXHRjb25zdCBsYW5nUXVldWUgPSBnZXRMYW5nUXVldWUoKTtcblxuXHR2b2lkIGxvYWRQYWdlQ29udGVudCh7d2dQYWdlTmFtZSwgd3JhcHBlciwgbGFuZ1F1ZXVlfSk7XG59O1xuXG5leHBvcnQge3RyYW5zbGF0ZVZhcmlhbnRzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNDdEIsSUFBTUMsUUFBaUIsQ0FBQyxNQUFNLFdBQVcsU0FBUyxTQUFTLFNBQVMsV0FBVyxTQUFTLFNBQVMsT0FBTztBQUN4RyxJQUFNQyxjQUFjO0VBQ25CQyxJQUFJO0VBQ0osV0FBVztFQUNYLFNBQVM7RUFDVCxTQUFTO0VBQ1QsU0FBUztFQUNULFdBQVc7RUFDWCxTQUFTO0VBQ1QsU0FBUztFQUNULFNBQVM7QUFDVjs7QUNWQSxJQUFNQyxlQUFlQSxNQUFlO0FBQ25DLFFBQU1DLFdBQVdDLE9BQ2hCQyxPQUFPQyxNQUFNLGtCQUFrQixnQkFBZ0IsR0FDL0NQLE1BQU1RLEtBQUssR0FBRyxDQUNmO0FBRUEsUUFBTUMsaUJBQWlCLElBQUlDLElBQVlWLEtBQUs7QUFDNUMsUUFBTVcsWUFBcUIsQ0FDMUIsR0FBRyxJQUFJRCxLQUNMTixhQUFBLFFBQUFBLGFBQUEsU0FBQUEsV0FBWUosTUFBTVEsS0FBSyxHQUFHLEdBQ3pCSSxNQUFNLEdBQUcsRUFDVEMsSUFBS0MsVUFBeUJBLEtBQUtDLEtBQUssQ0FBQyxFQUN6Q0MsT0FBUUYsVUFBZ0NMLGVBQWVRLElBQUlILElBQUksQ0FBQyxDQUNuRSxDQUFBO0FBR0QsU0FBT0g7QUFDUjs7QUNsQk8sSUFBTU8sWUFBWTtBQUNsQixJQUFNQyxpQkFBaUI7QUFDdkIsSUFBTUMsWUFBWTtBQUNsQixJQUFNQyxVQUFVOztBQ0p2QixJQUFNQyxTQUFTQSxDQUFDQyxTQUFpQkMsT0FBcUMsWUFBa0I7QUFDdkYsT0FBS0MsR0FBR0gsT0FBT0MsU0FBUztJQUFDRyxLQUFLO0lBQXFCRjtFQUFJLENBQUM7QUFDekQ7O0FDQ0EsSUFBTUcsYUFBYUEsTUFBTTtBQUFBLE1BQUFDO0FBQ3hCLFFBQU1DLFVBQTBCQyxTQUFTQyxjQUFjLEtBQUs7QUFDNURGLFVBQVFHLEtBQUs7QUFDYixHQUFBSix3QkFBQUUsU0FBU0csY0FBYyxjQUFjLE9BQUEsUUFBQUwsMEJBQUEsVUFBckNBLHNCQUF3Q00sUUFBUUwsT0FBTztBQUV2RCxRQUFNTSxrQkFBcUNMLFNBQVNDLGNBQWMsUUFBUTtBQUMxRUksa0JBQWdCQyxVQUFVQyxJQUFJLGNBQWMsa0NBQWtDLDRCQUE0QjtBQUMxR0Ysa0JBQWdCRyxjQUFjaEMsT0FBT0MsTUFBTSxVQUFVLFFBQVE7QUFDN0Q0QixrQkFBZ0JJLGlCQUFpQixTQUFTLE1BQVk7QUFDckQsVUFBTUMsVUFBeUNYLFFBQVFZLGlCQUFBLFVBQUFDLE9BQTJCdkIsY0FBYyxDQUFFO0FBQ2xHLFFBQUksQ0FBQ3FCLFFBQVFHLFFBQVE7QUFDcEJyQixhQUFPaEIsT0FBT0MsTUFBTSxlQUFlLFdBQVcsQ0FBQztBQUMvQztJQUNEO0FBRUEsUUFBSSxDQUFDcUMsUUFBUXRDLE9BQU9DLE1BQU0sWUFBWSxVQUFVLEVBQUVzQyxRQUFRLE1BQUEsR0FBQUgsT0FBU0YsUUFBUUcsTUFBTSxDQUFFLENBQUMsR0FBRztBQUN0RnJCLGFBQU9oQixPQUFPQyxNQUFNLFNBQVMsT0FBTyxHQUFHLE1BQU07QUFDN0M7SUFDRDtBQUFBLFFBQUF1QyxZQUFBQywyQkFFcUJQLE9BQUEsR0FBQVE7QUFBQSxRQUFBO0FBQXJCLFdBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQThCO0FBQUEsY0FBbkJDLFNBQUFKLE1BQUFLO0FBQ1ZELGVBQU9FLE1BQU07TUFDZDtJQUFBLFNBQUFDLEtBQUE7QUFBQVQsZ0JBQUFVLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUFULGdCQUFBVyxFQUFBO0lBQUE7RUFDRCxDQUFDO0FBRUQsUUFBTUMscUJBQXFDNUIsU0FBU0MsY0FBYyxLQUFLO0FBQ3ZFMkIscUJBQW1CdEIsVUFBVUMsSUFBSWpCLFNBQVM7QUFDMUNzQyxxQkFBbUJDLE9BQU94QixlQUFlO0FBRXpDLFFBQU15QixtQkFBbUM5QixTQUFTQyxjQUFjLEtBQUs7QUFDckU2QixtQkFBaUJ4QixVQUFVQyxJQUFJaEIsT0FBTztBQUN0Q3VDLG1CQUFpQnRCLGNBQWNoQyxPQUFPQyxNQUNyQyw4REFDQSw0REFDRDtBQUNBc0IsVUFBUThCLE9BQU9ELG9CQUFvQkUsZ0JBQWdCO0FBRW5ELFNBQU8vQjtBQUNSOztBQ3hDQyxJQUFBZ0MsWUFBYTtBQUNiLElBQUFDLDJCQUE0QjtBQUM1QixJQUFBQyxVQUFXOztBQ0ZaLElBQUFDLG9CQUF3QmpFLFFBQUEsaUJBQUE7QUFFeEIsSUFBTWtFLE9BQUEsR0FBY0Qsa0JBQUFFLFdBQUEscUJBQUF4QixPQUF1Q3FCLE9BQU8sQ0FBRTs7QUNIcEUsSUFBTUkscUJBQXNCQyxhQUMzQkEsUUFDRXZCLFFBQVEseUJBQTBCd0IsZUFBQSxLQUFBM0IsT0FBbUMyQixVQUFVQyxZQUFZLENBQUMsR0FBQyxHQUFBLENBQUcsRUFDaEd6QixRQUFRLCtFQUErRSxZQUFZLEVBQ25HQSxRQUFRLHdCQUF5QjBCLFdBQ2pDQSxNQUNFMUIsUUFBUSxXQUFXLElBQUksRUFDdkJBLFFBQVEsV0FBVyxJQUFJLEVBQ3ZCQSxRQUFRLFdBQVcsSUFBSSxFQUN2QkEsUUFBUSxXQUFXLEdBQUcsRUFDdEJBLFFBQVEsVUFBVSxHQUFHLEVBQ3JCQSxRQUFRLFVBQVUsR0FBRyxFQUNyQkEsUUFBUSxVQUFVLEdBQUcsRUFDckJBLFFBQVEsVUFBVSxHQUFHLENBQ3hCOztBQ1hGLElBQU0yQixtQkFBbUJBLENBQ3hCQyxNQUNBQyxPQUNBQyxNQUNBQyxnQkFDQUMsaUJBQ1U7QUFDVixRQUFNekIsU0FBNEJ0QixTQUFTQyxjQUFjLFFBQVE7QUFDakVxQixTQUFPaEIsVUFBVUMsSUFBSWxCLGdCQUFnQixZQUFZO0FBQ2pEaUMsU0FBT2QsY0FBY29DO0FBQ3JCdEIsU0FBT2IsaUJBQWlCLFNBQUF1QyxrQ0FBUyxhQUEyQjtBQUMzRDFCLFdBQU8yQixPQUFPO0FBQ2QsUUFBSTtBQUNILFlBQU1KLEtBQUs7QUFDWHJELGFBQU9zRCxnQkFBZ0IsU0FBUztJQUNqQyxTQUFTSSxPQUFPO0FBQ2YxRCxhQUFPdUQsYUFBYUcsS0FBSyxDQUFDO0lBQzNCO0VBQ0QsQ0FBQyxDQUFBO0FBQ0RQLE9BQUtkLE9BQU9QLE1BQU07QUFDbkI7O0FDaEJBLElBQU02QixtQkFBQSw0QkFBQTtBQUFBLE1BQUFDLFFBQUFKLGtCQUFtQixXQUFPO0lBQy9CSztJQUNBeEU7SUFDQXlFO0lBQ0F2RDtJQUNBd0Q7RUFDRCxHQU1xQjtBQUFBLFFBQUFDLGFBQUF2QywyQkFDRHBDLFNBQUEsR0FBQTRFO0FBQUEsUUFBQTtBQUFuQixXQUFBRCxXQUFBckMsRUFBQSxHQUFBLEVBQUFzQyxTQUFBRCxXQUFBcEMsRUFBQSxHQUFBQyxRQUE4QjtBQUFBLGNBQW5CckMsT0FBQXlFLE9BQUFsQztBQUNWLGNBQU1tQyxnQkFBZ0MxRCxTQUFTQyxjQUFjLEtBQUs7QUFDbEV5RCxzQkFBY3hELEtBQUEsMEJBQUFVLE9BQStCNUIsSUFBSTtBQUNqRGUsZ0JBQVE4QixPQUFPNkIsZUFBZTFELFNBQVNDLGNBQWMsSUFBSSxDQUFDO0FBRTFELGNBQU0wRCxjQUFzQjNFLFNBQVMsT0FBT3NFLGVBQUEsR0FBQTFDLE9BQWtCMEMsY0FBWSxHQUFBLEVBQUExQyxPQUFJNUIsSUFBSTtBQUVsRixZQUFJO0FBQUEsY0FBQTRFLHVCQUFBQztBQUNILGNBQUl2QjtBQUNKLGNBQUk7QUFDSEEsc0JBQUEsTUFBZ0JILElBQUkyQixNQUFBLHlDQUFBbEQsT0FDOEJtQixXQUFTLElBQUEsRUFBQW5CLE9BQUt5QyxhQUFXLFFBQUEsR0FDMUU7Y0FDQ1UsUUFBUTtjQUNSQyxTQUFTaEY7WUFDVixDQUNEO1VBQ0QsU0FBU2tFLE9BQU87QUFDZjFELG1CQUFPaEIsT0FBT0MsTUFBTSxjQUFjLFlBQVksRUFBRXNDLFFBQVEsTUFBTS9CLElBQUksSUFBSWtFLEtBQUs7QUFDM0U7VUFDRDtBQUVBLGdCQUFNZSxnQkFBZ0NqRSxTQUFTQyxjQUFjLEtBQUs7QUFDbEVnRSx3QkFBY0MsWUFBWTVCO0FBQzFCLGdCQUFNNkIsa0JBQUFQLHlCQUFBQyx5QkFBeUJJLGNBQWM5RCxjQUFBLElBQUFTLE9BQTBCbUIsU0FBUyxDQUFFLE9BQUEsUUFBQThCLDJCQUFBLFNBQUEsU0FBbkRBLHVCQUFzRHJELGlCQUFBLFFBQUFvRCwwQkFBQSxTQUFBQSx3QkFBZTtBQUVwRyxnQkFBTVEsa0JBQTJDO1lBQ2hETCxRQUFRO1lBQ1JNLFFBQVE7WUFDUkMsZUFBZTtZQUNmQyxRQUFRWjtZQUNSYSxNQUFNO1lBQ05DLGNBQWNOO1VBQ2Y7QUFFQSxjQUFJTztBQUNKLGNBQUk7QUFDSEEsbUJBQUEsTUFBYXZDLElBQUl3QyxJQUFJUCxlQUFlO1VBQ3JDLFNBQVNsQixPQUFPO0FBQ2YxRCxtQkFBT2hCLE9BQU9DLE1BQU0sZ0JBQWdCLGNBQWMsRUFBRXNDLFFBQVEsTUFBTS9CLElBQUksSUFBSWtFLEtBQUs7QUFDL0U7VUFDRDtBQUVBLGdCQUFNUCxPQUF1QjNDLFNBQVNDLGNBQWMsS0FBSztBQUN6RCxnQkFBTTJFLFdBQThCNUUsU0FBU0MsY0FBYyxHQUFHO0FBQzlEMkUsbUJBQVNDLE9BQU9sRixHQUFHbUYsS0FBS0MsT0FBT3BCLFdBQVc7QUFDMUNpQixtQkFBU3BFLGNBQUEsR0FBQUksT0FBaUI1QixNQUFJLEdBQUEsRUFBQTRCLE9BQUl6QyxZQUFZYSxJQUFJLEdBQUMsR0FBQTtBQUNuRCxnQkFBTWdHLFdBQThCaEYsU0FBU0MsY0FBYyxHQUFHO0FBQzlEK0UsbUJBQVNILE9BQU9sRixHQUFHbUYsS0FBS0MsT0FBT3BCLGFBQWE7WUFBQ0ksUUFBUTtVQUFNLENBQUM7QUFDNURpQixtQkFBU3hFLGNBQWNoQyxPQUFPQyxNQUFNLEtBQUssR0FBRztBQUM1Q2tFLGVBQUtkLE9BQU8rQyxVQUFVNUUsU0FBU2lGLGVBQWUsR0FBRyxHQUFHRCxVQUFVaEYsU0FBU2lGLGVBQWUsR0FBRyxDQUFDO0FBQzFGdkIsd0JBQWM3QixPQUFPYyxJQUFJO0FBRXpCLGdCQUFNLENBQUN1QyxJQUFJLElBQUlSLEtBQUssT0FBTyxFQUFFUztBQUM3QixjQUFJRCxLQUFLRSxTQUFTO0FBQ2pCMUMsNkJBQ0NDLE1BQ0FuRSxPQUFPQyxNQUFNLFFBQVEsTUFBTSxHQUFBdUUsa0NBQzNCLGFBQTJCO0FBQzFCLG9CQUFNYixJQUFJa0QsT0FDVDFCLGFBQ0E7Z0JBQ0NKO2NBQ0QsR0FDQVksY0FDRDtZQUNELENBQUEsR0FDQTNGLE9BQU9DLE1BQU0sUUFBUSxNQUFNLElBQUlrRixhQUM5QlQsV0FDQTFFLE9BQU9DLE1BQU0sTUFBTSxLQUFLLElBQUlrRixjQUFjbkYsT0FBT0MsTUFBTSxVQUFVLFFBQVEsSUFBSXlFLEtBQy9FO0FBQ0Esa0JBQU1vQyxVQUEwQnRGLFNBQVNDLGNBQWMsS0FBSztBQUM1RHFGLG9CQUFROUUsY0FBYzJEO0FBQ3RCVCwwQkFBYzdCLE9BQU95RCxPQUFPO0FBQzVCO1VBQ0Q7QUFFQSxnQkFBTUMsT0FBZUwsS0FBS00sVUFBVSxDQUFDLEVBQUVELEtBQUtFO0FBQzVDLGNBQUlGLFNBQVMsSUFBSTtBQUNoQixrQkFBTUcscUJBQXNDMUYsU0FBU0MsY0FBYyxNQUFNO0FBQ3pFeUYsK0JBQW1CcEYsVUFBVUMsSUFBSW5CLFNBQVM7QUFDMUNzRywrQkFBbUJsRixjQUFjaEMsT0FBT0MsTUFBTSxPQUFPLEtBQUs7QUFDMURrRSxpQkFBS2QsT0FBTzZELGtCQUFrQjtVQUMvQixPQUFPO0FBQ05oRCw2QkFDQ0MsTUFDQW5FLE9BQU9DLE1BQU0sUUFBUSxNQUFNLEdBQUF1RSxrQ0FDM0IsYUFBMkI7QUFDMUIsb0JBQU1iLElBQUl3RCxLQUFLaEMsYUFBYSxPQUFPO2dCQUNsQ0o7Z0JBQ0FxQyxNQUFNekI7Z0JBQ04wQixVQUFVO2NBQ1gsRUFBRTtZQUNILENBQUEsR0FDQXJILE9BQU9DLE1BQU0sT0FBTyxNQUFNLElBQUlrRixhQUM3QlQsV0FDQTFFLE9BQU9DLE1BQU0sYUFBYSxXQUFXLEVBQUVzQyxRQUFRLE1BQU00QyxXQUFXLElBQUlULEtBQ3RFO0FBQ0Esa0JBQU00QyxZQUE4QjlGLFNBQVNDLGNBQWMsT0FBTztBQUNsRTZGLHNCQUFVeEYsVUFBVUMsSUFBSSxNQUFNO0FBQzlCdUYsc0JBQVU1QixZQUFZcUI7QUFDdEIsa0JBQU1RLGNBQW1DL0YsU0FBU0MsY0FBYyxVQUFVO0FBQzFFLHFCQUFBK0YsS0FBQSxHQUFBQyxPQUF3QixDQUFDLGVBQWUsZ0JBQWdCLGVBQWUsY0FBYyxHQUFBRCxLQUFBQyxLQUFBcEYsUUFBQW1GLE1BQUc7QUFBeEYsb0JBQVdFLFlBQUFELEtBQUFELEVBQUE7QUFDVixvQkFBTUcsU0FBOEJuRyxTQUFTQyxjQUFjLEtBQUs7QUFDaEVrRyxxQkFBTzdGLFVBQVVDLElBQUkyRixTQUFTO0FBQzlCSCwwQkFBWWxFLE9BQU9zRSxNQUFNO1lBQzFCO0FBQ0FMLHNCQUFVMUYsUUFBUTJGLFdBQVc7QUFDN0JyQywwQkFBYzdCLE9BQU9pRSxTQUFTO1VBQy9CO1FBQ0QsU0FBUzVDLE9BQU87QUFDZjFELGlCQUFPaEIsT0FBT0MsTUFBTSxjQUFjLFlBQVksRUFBRXNDLFFBQVEsTUFBTS9CLElBQUksSUFBSWtFLEtBQUs7UUFDNUU7TUFDRDtJQUFBLFNBQUF6QixLQUFBO0FBQUErQixpQkFBQTlCLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUErQixpQkFBQTdCLEVBQUE7SUFBQTtFQUNELENBQUE7QUFBQSxTQUFBLFNBL0hNd0Isa0JBQUFpRCxJQUFBO0FBQUEsV0FBQWhELE1BQUFpRCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7O0FDQU4sSUFBTUMsa0JBQUEsNEJBQUE7QUFBQSxNQUFBQyxRQUFBeEQsa0JBQWtCLFdBQU87SUFDOUJ5RDtJQUNBMUc7SUFDQWxCO0VBQ0QsR0FJcUI7QUFDcEIsVUFBTTBFLFVBQTBCdkIseUJBQXlCakIsUUFBUSxRQUFRMEYsVUFBVTtBQUNuRixVQUFNbkQsZUFBdUJtRCxXQUFXMUYsUUFBUSxTQUFTLEVBQUU7QUFDM0QsVUFBTTJGLHFCQUFxQjtNQUMxQjNDLFFBQVE7TUFDUk0sUUFBUTtNQUNSQyxlQUFlO01BQ2ZFLE1BQU07TUFDTkQsUUFBUWtDO01BQ1JFLGNBQWM7TUFDZEMsUUFBUSxDQUFDLFdBQVcsV0FBVztJQUNoQztBQUVBLFFBQUk7QUFBQSxVQUFBQztBQUNILFlBQU1uQyxPQUFBLE1BQWF2QyxJQUFJd0MsSUFBSStCLGtCQUFrQjtBQUM3QyxZQUFNdkIsU0FBQTBCLGNBQVFuQyxLQUFLLE9BQU8sT0FBQSxRQUFBbUMsZ0JBQUEsU0FBQSxTQUFaQSxZQUFlMUI7QUFDN0IsVUFBSSxDQUFDQSxPQUFPO0FBQ1gsY0FBTSxJQUFJMkIsTUFBTSxTQUFTO01BQzFCO0FBRUEsWUFBTSxDQUFDNUIsSUFBSSxJQUFJQztBQUNmLFVBQUlELEtBQUs2QixTQUFTO0FBQ2pCLGNBQU0sSUFBSUQsTUFBTSxjQUFjO01BQy9CO0FBQ0EsVUFBSTVCLEtBQUtFLFNBQVM7QUFDakIsY0FBTSxJQUFJMEIsTUFBTSxrQkFBa0I7TUFDbkM7QUFFQSxZQUFNLENBQUM7UUFBQ3hFO01BQU8sQ0FBQyxJQUFJNEMsS0FBS007QUFDekIsWUFBTXJDLGlCQUFpQjtRQUN0QkUsYUFBYWhCLG1CQUFtQkMsT0FBaUI7UUFDakR6RDtRQUNBeUU7UUFDQXZEO1FBQ0F3RDtNQUNELENBQUM7SUFDRixTQUFTTCxPQUFPO0FBQ2YxRCxhQUFPaEIsT0FBT0MsTUFBTSxnQkFBZ0IsY0FBYyxJQUFJeUUsS0FBSztJQUM1RDtFQUNELENBQUE7QUFBQSxTQUFBLFNBL0NNcUQsaUJBQUFTLEtBQUE7QUFBQSxXQUFBUixNQUFBSCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7O0FDSE4sSUFBTVcsb0JBQXFCUixnQkFBNkI7QUFDdkQsUUFBTTFHLFVBQVVGLFdBQVc7QUFDM0IsUUFBTWhCLFlBQVlSLGFBQWE7QUFFL0IsT0FBS2tJLGdCQUFnQjtJQUFDRTtJQUFZMUc7SUFBU2xCO0VBQVMsQ0FBQztBQUN0RDs7QVpOQSxNQUFBLEdBQUtiLG1CQUFBa0osU0FBUSxFQUFFQyxLQUFNQyxXQUF5QztBQUM3RCxRQUFNO0lBQUNYO0VBQVUsSUFBSTlHLEdBQUcwSCxPQUFPMUMsSUFBSTtBQUNuQyxNQUFJLENBQUMsMkJBQTJCMkMsS0FBS2IsVUFBVSxHQUFHO0FBQ2pEO0VBQ0Q7QUFFQSxRQUFNYyxZQUFtQ0gsTUFBTUksS0FBSyxhQUFhLEVBQUUzRyxTQUFTLGVBQWU7QUFDM0YsUUFBTTRHLFVBQWdDOUgsR0FBR21GLEtBQUs0QyxlQUFlSCxXQUFXLEtBQUsvSSxPQUFPQyxNQUFNLFFBQVEsTUFBTSxDQUFDO0FBRXpHZ0osY0FBQSxRQUFBQSxZQUFBLFVBQUFBLFFBQVNoSCxpQkFBaUIsU0FBUyxNQUFZO0FBQzlDZ0gsWUFBUXhFLE9BQU87QUFDZmdFLHNCQUFrQlIsVUFBVTtFQUM3QixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAibGFuZ3MiLCAibmFtZU9mTGFuZ3MiLCAiemgiLCAiZ2V0TGFuZ1F1ZXVlIiwgInJ1bkxhbmdzIiwgInByb21wdCIsICJ3aW5kb3ciLCAid2dVTFMiLCAiam9pbiIsICJzdXBwb3J0ZWRMYW5ncyIsICJTZXQiLCAibGFuZ1F1ZXVlIiwgInNwbGl0IiwgIm1hcCIsICJsYW5nIiwgInRyaW0iLCAiZmlsdGVyIiwgImhhcyIsICJub0NoYW5nZXMiLCAicHVibGlzaENoYW5nZXMiLCAic3VibWl0QWxsIiwgIndhcm5pbmciLCAibm90aWZ5IiwgIm1lc3NhZ2UiLCAidHlwZSIsICJtdyIsICJ0YWciLCAiZ2V0V3JhcHBlciIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAid3JhcHBlciIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImlkIiwgInF1ZXJ5U2VsZWN0b3IiLCAicHJlcGVuZCIsICJzdWJtaXRBbGxCdXR0b24iLCAiY2xhc3NMaXN0IiwgImFkZCIsICJ0ZXh0Q29udGVudCIsICJhZGRFdmVudExpc3RlbmVyIiwgImJ1dHRvbnMiLCAicXVlcnlTZWxlY3RvckFsbCIsICJjb25jYXQiLCAibGVuZ3RoIiwgImNvbmZpcm0iLCAicmVwbGFjZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiYnV0dG9uIiwgInZhbHVlIiwgImNsaWNrIiwgImVyciIsICJlIiwgImYiLCAic3VibWl0QWxsQ29udGFpbmVyIiwgImFwcGVuZCIsICJ3YXJuaW5nQ29udGFpbmVyIiwgImNvbnRlbnRJRCIsICJ0cmFuc2xhdGVWYXJpYW50c1N1bW1hcnkiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgInByZXBhcmVQYWdlQ29udGVudCIsICJjb250ZW50IiwgImNoYXJhY3RlciIsICJjb2RlUG9pbnRBdCIsICJtYXRjaCIsICJhZGRQdWJsaXNoQnV0dG9uIiwgInRvb2wiLCAibGFiZWwiLCAic2F2ZSIsICJzdWNjZXNzTWVzc2FnZSIsICJlcnJvck1lc3NhZ2UiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicmVtb3ZlIiwgImVycm9yIiwgInByb2Nlc3NUcmFuc2xhdGUiLCAiX3JlZjIiLCAicGFnZUNvbnRlbnQiLCAiYmFzZVBhZ2VOYW1lIiwgInN1bW1hcnkiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZGlmZkNvbnRhaW5lciIsICJ0YXJnZXRUaXRsZSIsICJfcGFyc2VkQ29udGVudCRxdWVyeVMiLCAiX3BhcnNlZENvbnRlbnQkcXVlcnlTMiIsICJwYXJzZSIsICJhY3Rpb24iLCAidXNlbGFuZyIsICJwYXJzZWRDb250ZW50IiwgImlubmVySFRNTCIsICJuZXdQYWdlQ29udGVudCIsICJxdWVyeURpZmZQYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgInByb3AiLCAicnZkaWZmdG90ZXh0IiwgImRhdGEiLCAiZ2V0IiwgInBhZ2VMaW5rIiwgImhyZWYiLCAidXRpbCIsICJnZXRVcmwiLCAiZWRpdExpbmsiLCAiY3JlYXRlVGV4dE5vZGUiLCAicGFnZSIsICJwYWdlcyIsICJtaXNzaW5nIiwgImNyZWF0ZSIsICJwcmV2aWV3IiwgImRpZmYiLCAicmV2aXNpb25zIiwgImJvZHkiLCAibm9DaGFuZ2VzSW5kaWNhdG9yIiwgImVkaXQiLCAidGV4dCIsICJub2NyZWF0ZSIsICJkaWZmVGFibGUiLCAiY29sdW1uR3JvdXAiLCAiX2kiLCAiX2FyciIsICJjbGFzc05hbWUiLCAiY29sdW1uIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJsb2FkUGFnZUNvbnRlbnQiLCAiX3JlZjUiLCAid2dQYWdlTmFtZSIsICJxdWVyeUNvbnRlbnRQYXJhbXMiLCAiY3VydGltZXN0YW1wIiwgInJ2cHJvcCIsICJfZGF0YSRxdWVyeSIsICJFcnJvciIsICJpbnZhbGlkIiwgIl94MiIsICJ0cmFuc2xhdGVWYXJpYW50cyIsICJnZXRCb2R5IiwgInRoZW4iLCAiJGJvZHkiLCAiY29uZmlnIiwgInRlc3QiLCAicG9ydGxldElkIiwgImZpbmQiLCAiZWxlbWVudCIsICJhZGRQb3J0bGV0TGluayJdCn0K
