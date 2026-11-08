/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Peacearth/DisamAssist.js}
 * @base {@link https://es.wikipedia.org/wiki/Usuario:Qwertyytrewqqwerty/DisamAssist.js}
 * @base {@link https://es.wikipedia.org/wiki/Usuario:Qwertyytrewqqwerty/DisamAssist.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/DisamAssist}
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

// dist/DisamAssist/DisamAssist.js
//! src/DisamAssist/DisamAssist.ts
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
//! src/DisamAssist/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("DisamAssist/1.1");
//! src/DisamAssist/modules/config.ts
var cfg = {
  /* Categories where disambiguation pages are added (usually by a template like {{Disambiguation}} */
  disamCategories: ["全部消歧义页面"],
  /* "Canonical names" of the templates that may appear after ambiguous links and which should be removed when fixing those links */
  disamLinkTemplates: ["Disambiguation needed", "Ambiguous link", "Amblink", "Dab needed", "Disamb-link", "Disambig needed", "Disambiguate", "Dn", "Needdab"],
  /* "Canonical names" of the templates that designate intentional links to disambiguation pages */
  disamLinkIgnoreTemplates: ["R from ambiguous page", "R to disambiguation page", "R from incomplete disambiguation"],
  /* Format string for "Foo (disambiguation)"-style pages */
  disamFormat: "$1（消歧义）",
  /* Regular expression matching the titles of disambiguation pages (when they are different from the titles of the primary topics) */
  disamRegExp: "^(.*)（(消歧义|消歧義)）$",
  /* Text that will be inserted after the link if the user requests help. If the value is null, the option to request help won't be offered */
  disamNeededText: "{{dn|date={{".concat("subst:", "CURRENTMONTHNAME", "}} {{", "subst:", "CURRENTYEAR}}}}"),
  /* Content of the "Foo (disambiguation)" pages that will be created automatically when using DisamAssist from a "Foo" page */
  redirectToDisam: "#重定向 [[$1]]".concat("{{R to disambiguation page}}"),
  /* Whether intentional links to disambiguation pages can be explicitly marked by adding " (disambiguation)" */
  intentionalLinkOption: false,
  /* Namespaces that will be searched for incoming links to the disambiguation page (pages in other namespaces will be ignored) */
  targetNamespaces: [6, 10, 14, 118, 0],
  /* Number of backlinks that will be downloaded at once When using blredirect, the maximum limit is supposedly halved (see http://www.mediawiki.org/wiki/API:Backlinks) */
  backlinkLimit: 250,
  /* Number of titles we can query for at once */
  queryTitleLimit: 50,
  /* Number of characters before and after the incoming link that will be displayed */
  radius: 300,
  /* Height of the context box, in lines */
  numContextLines: 4,
  /* Number of pages that will be stored before saving, so that changes to them can be undone if need be */
  historySize: 2,
  /* Minimum time in seconds since the last change was saved before a new edit can be made. A negative value or 0 disables the cooldown. Users with the "bot" right won't be affected by the cooldown */
  editCooldown: 0,
  /* Specify how the watchlist is affected by DisamAssist edits. Possible values: "watch", "unwatch", "preferences", "nochange" */
  watch: "nochange"
};
//! src/DisamAssist/modules/messages.ts
var messages = {
  start: "为链接消歧义",
  startMain: "为链至主条目的链接消歧义",
  startSame: "为链至消歧义页的链接消歧义",
  close: "关闭",
  undo: "复原",
  omit: "跳过",
  refresh: "重新整理",
  titleAsText: "其它目标",
  disamNeeded: "标示{{dn}}",
  intentionalLink: "有意链到消歧义页的链接",
  titleAsTextPrompt: "请输入新的链接目标：",
  removeLink: "去除链接",
  optionMarker: " [链接到这里]",
  targetOptionMarker: " [当前目标]",
  redirectOptionMarker: " [当前目标（重定向）]",
  pageTitleLine: '<a href="$1">$2</a>：',
  noMoreLinks: "没有需要消歧义的链接了。",
  pendingEditCounter: "已保存$1个，已编辑$2个",
  pendingEditBox: "DisamAssist正在储存您的编辑（$1）。",
  pendingEditBoxTimeEstimation: "$1；剩余时间：$2",
  pendingEditBoxLimited: "在所有更改保存前，请不要关闭页面；你可以在另一个页面编辑求闻百科，但是请勿同时使用多个DisamAssist。",
  error: "错误：$1",
  fetchRedirectsError: '获取重定向失败："$1".',
  getBacklinksError: '下载反向链接失败："$1".',
  fetchRightsError: '获取用户权限失败："$1",',
  loadPageError: '加载$1失败："$2".',
  savePageError: '保存至$1失败："$2".',
  dismissError: "Dismiss",
  pending: "DisamAssist尚有未储存的编辑。如欲储存之，请按“关闭”。",
  editInProgress: "DisamAssist正在进行编辑。若您将本分页关闭，可能会丧失您的编辑。",
  ellipsis: "……",
  notifyCharacter: "✔",
  summary: "使用[[MediaWiki:Gadget-DisamAssist.js|DisamAssist]]清理[[QW:DAB|消歧义]]链接：[[$1]]（$2）。",
  summaryChanged: "改链接至[[$1]]",
  summaryOmitted: "链接已跳过",
  summaryRemoved: "链接已移除",
  summaryIntentional: "刻意链接至消歧义页面",
  summaryHelpNeeded: "需要帮助",
  summarySeparator: "; ",
  redirectSummary: "使用[[MediaWiki:Gadget-DisamAssist.js|DisamAssist]]创建目标为[[$1]]的重定向。"
};
//! src/DisamAssist/modules/core.ts
var startLink;
var ui;
var links = [];
var pageChanges = [];
var currentPageTitle;
var currentPageParameters;
var currentLink;
var possibleBacklinkDestinations = [];
var forceSamePage = false;
var running = false;
var choosing = false;
var canMarkIntentionalLinks = false;
var displayedPages = {};
var editCount = 0;
var editLimit;
var pendingSaves = [];
var pendingEditBox;
var pendingEditBoxText;
var lastEditMillis = 0;
var runningSaves = false;
var install = () => {
  const {
    wgAction
  } = mw.config.get();
  if (wgAction !== "view" || !isDisam()) {
    return;
  }
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  if (new RegExp(cfg.disamRegExp).test(getTitle())) {
    const startMainLink = $(mw.util.addPortletLink(portletId, "#", messages.startMain, "ca-disamassist-main")).on("click", startMain);
    const startSameLink = $(mw.util.addPortletLink(portletId, "#", messages.startSame, "ca-disamassist-same")).on("click", startSame);
    startLink = startMainLink.add(startSameLink);
  } else {
    startLink = $(mw.util.addPortletLink(portletId, "#", messages.start, "ca-disamassist-page")).on("click", start);
  }
};
var start = () => {
  if (running) {
    return;
  }
  running = true;
  links = [];
  pageChanges = [];
  displayedPages = {};
  ensureDABExists().then((canMark) => {
    canMarkIntentionalLinks = canMark;
    createUI();
    addUnloadConfirm();
    markDisamOptions();
    checkEditLimit().then(() => {
      togglePendingEditBox(false);
      doPage();
    });
  });
};
var startSame = () => {
  forceSamePage = true;
  start();
};
var startMain = () => {
  forceSamePage = false;
  start();
};
var createUI = () => {
  const $body = $("body");
  ui = {
    display: $("<div>").addClass("disamassist-box disamassist-mainbox"),
    finishedMessage: $("<div>").text(messages.noMoreLinks).hide(),
    pageTitleLine: $("<span>").addClass("disamassist-pagetitleline"),
    pendingEditCounter: $("<div>").addClass("disamassist-editcounter"),
    context: $("<span>").addClass("disamassist-context"),
    undoButton: createButton(messages.undo, undo),
    omitButton: createButton(messages.omit, omit),
    endButton: createButton(messages.close, saveAndEnd),
    refreshButton: createButton(messages.refresh, refresh),
    titleAsTextButton: createButton(messages.titleAsText, chooseTitleFromPrompt),
    intentionalLinkButton: canMarkIntentionalLinks ? createButton(messages.intentionalLink, chooseIntentionalLink) : $("<span>"),
    disamNeededButton: cfg.disamNeededText ? createButton(messages.disamNeeded, chooseDisamNeeded) : $("<span>"),
    removeLinkButton: createButton(messages.removeLink, chooseLinkRemoval)
  };
  const top = $("<div>").addClass("disamassist-top").append([ui.pendingEditCounter, ui.finishedMessage, ui.pageTitleLine]);
  const leftButtons = $("<div>").addClass("disamassist-leftbuttons").append([ui.titleAsTextButton, ui.removeLinkButton, ui.intentionalLinkButton, ui.disamNeededButton, ui.omitButton]);
  const rightButtons = $("<div>").addClass("disamassist-rightbuttons").append([ui.undoButton, ui.refreshButton, ui.endButton]);
  const allButtons = $("<div>").addClass("disamassist-allbuttons").append([leftButtons, rightButtons]);
  ui.display.append([top, ui.context, allButtons]);
  updateEditCounter();
  toggleActionButtons(false);
  $body.find("#mw-content-text").before(ui.display);
  ui.display.hide().fadeIn();
};
var addUnloadConfirm = () => {
  $(window).on("beforeunload", () => {
    if (running && checkActualChanges()) {
      return messages.pending;
    }
    if (editCount !== 0) {
      return messages.editInProgress;
    }
    return void 0;
  });
};
var markDisamOptions = () => {
  const optionPageTitles = [];
  const optionMarkers = [];
  getDisamOptions().each((_index, element) => {
    const link = $(element);
    const title = extractPageName(link);
    if (!title) {
      return;
    }
    const optionMarker = $("<a>").attr("href", "#").addClass("disamassist-optionmarker").text(messages.optionMarker).on("click", (ev) => {
      ev.preventDefault();
      chooseReplacement(title);
    });
    link.after(optionMarker);
    optionMarkers.push(optionMarker);
    optionPageTitles.push(title);
  });
  const targetPage = getTargetPage();
  fetchRedirects([...optionPageTitles, targetPage]).done((redirects) => {
    const endTargetPage = resolveRedirect(targetPage, redirects);
    var _iterator = _createForOfIteratorHelper(optionPageTitles.entries()), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const [ii, optionPageTitle] = _step.value;
        const endOptionTitle = resolveRedirect(optionPageTitle, redirects);
        if (isSamePage(optionPageTitle, targetPage)) {
          var _optionMarkers$ii;
          (_optionMarkers$ii = optionMarkers[ii]) === null || _optionMarkers$ii === void 0 || _optionMarkers$ii.text(messages.targetOptionMarker).addClass("disamassist-curroptionmarker");
        } else if (isSamePage(endOptionTitle, endTargetPage)) {
          var _optionMarkers$ii2;
          (_optionMarkers$ii2 = optionMarkers[ii]) === null || _optionMarkers$ii2 === void 0 || _optionMarkers$ii2.text(messages.redirectOptionMarker).addClass("disamassist-curroptionmarker");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }).fail(error);
};
var ensureDABExists = () => {
  const deferred = $.Deferred();
  const title = getTitle();
  if (!cfg.intentionalLinkOption) {
    deferred.resolve(false);
  } else if (new RegExp(cfg.disamRegExp).exec(title)) {
    deferred.resolve(true);
  } else {
    const disamTitle = cfg.disamFormat.replace("$1", title);
    loadPage(disamTitle).done((page) => {
      if (page.missing) {
        page.content = cfg.redirectToDisam.replace("$1", title);
        const summary = messages.redirectSummary.replace("$1", title);
        savePage(disamTitle, page, summary, false, true).done(() => {
          deferred.resolve(true);
        }).fail((description) => {
          error(description);
          deferred.resolve(false);
        });
      } else {
        deferred.resolve(true);
      }
    }).fail((description) => {
      error(description);
      deferred.resolve(false);
    });
  }
  return deferred.promise();
};
var checkEditLimit = () => {
  const deferred = $.Deferred();
  if (cfg.editCooldown <= 0) {
    editLimit = false;
    deferred.resolve();
  } else {
    fetchRights().done((rights) => {
      editLimit = !rights.includes("bot");
    }).fail((description) => {
      error(description);
      editLimit = true;
    }).always(() => {
      deferred.resolve();
    });
  }
  return deferred.promise();
};
var doPage = () => {
  if (pageChanges.length > cfg.historySize) {
    const oldestChange = pageChanges.shift();
    if (oldestChange) {
      applyChange(oldestChange);
    }
  }
  const pageTitle = links.shift();
  if (pageTitle) {
    currentPageTitle = pageTitle;
    displayedPages[pageTitle] = true;
    toggleActionButtons(false);
    loadPage(pageTitle).done((data) => {
      currentPageParameters = data;
      currentLink = void 0;
      doLink();
    }).fail(error);
  } else {
    const targetPage = getTargetPage();
    getBacklinks(targetPage).done((backlinks, pageTitles) => {
      const pending = {};
      for (var _i = 0, _pendingSaves = pendingSaves; _i < _pendingSaves.length; _i++) {
        const el = _pendingSaves[_i];
        pending[el.args[0]] = true;
      }
      possibleBacklinkDestinations = pageTitles.filter((t) => {
        if (t === targetPage) {
          return true;
        }
        return removeDisam(t) !== targetPage;
      });
      links = backlinks.filter((el) => {
        return !displayedPages[el] && !pending[el];
      });
      if (links.length) {
        doPage();
      } else {
        updateContext();
      }
    }).fail(error);
  }
};
var doLink = () => {
  currentLink = extractLinkToPage(currentPageParameters.content, possibleBacklinkDestinations, currentLink ? currentLink.end : 0);
  if (currentLink) {
    updateContext();
  } else {
    doPage();
  }
};
var chooseReplacement = (pageTitle, extra, summary) => {
  if (!choosing || !currentLink) {
    return;
  }
  choosing = false;
  const changeSummary = summary || (pageTitle ? messages.summaryChanged.replace("$1", pageTitle) : messages.summaryOmitted);
  addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, changeSummary);
  if (pageTitle && (pageTitle !== getTargetPage() || extra)) {
    currentPageParameters.content = replaceLink(currentPageParameters.content, pageTitle, currentLink, extra !== null && extra !== void 0 ? extra : "");
  }
  doLink();
};
var chooseIntentionalLink = () => {
  const disamTitle = cfg.disamFormat.replace("$1", getTargetPage());
  chooseReplacement(disamTitle, "", messages.summaryIntentional);
};
var chooseTitleFromPrompt = () => {
  const title = prompt(messages.titleAsTextPrompt);
  if (title !== null) {
    chooseReplacement(title);
  }
};
var chooseLinkRemoval = () => {
  if (choosing && currentLink) {
    const summary = messages.summaryRemoved;
    addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, summary);
    currentPageParameters.content = removeLinkText(currentPageParameters.content, currentLink);
    doLink();
  }
};
var chooseDisamNeeded = () => {
  if (currentLink) {
    chooseReplacement(currentLink.title, cfg.disamNeededText, messages.summaryHelpNeeded);
  }
};
var undo = () => {
  const lastPage = pageChanges.at(-1);
  if (!lastPage) {
    return;
  }
  if (currentPageTitle !== lastPage.title) {
    links.unshift(currentPageTitle);
    currentPageTitle = lastPage.title;
  }
  currentPageParameters = lastPage.page;
  const contentBefore = lastPage.contentBefore.pop();
  if (contentBefore !== void 0) {
    currentPageParameters.content = contentBefore;
  }
  currentLink = lastPage.links.pop();
  lastPage.summary.pop();
  if (!lastPage.contentBefore.length) {
    pageChanges.pop();
  }
  updateContext();
};
var omit = () => {
  chooseReplacement();
};
var refresh = () => {
  saveAndEnd();
  start();
};
var toggleActionButtons = (enabled) => {
  const affectedButtons = [ui.omitButton, ui.titleAsTextButton, ui.removeLinkButton, ui.intentionalLinkButton, ui.disamNeededButton, ui.undoButton];
  for (var _i2 = 0, _affectedButtons = affectedButtons; _i2 < _affectedButtons.length; _i2++) {
    const button = _affectedButtons[_i2];
    button.prop("disabled", !enabled);
  }
};
var toggleFinishedMessage = (show) => {
  toggleActionButtons(!show);
  ui.undoButton.prop("disabled", !pageChanges.length);
  ui.finishedMessage.toggle(show);
  ui.pageTitleLine.toggle(!show);
  ui.context.toggle(!show);
};
var togglePendingEditBox = (show) => {
  const $body = $("body");
  if (!pendingEditBox || !pendingEditBoxText) {
    pendingEditBox = $("<div>").addClass("disamassist-box disamassist-pendingeditbox");
    pendingEditBoxText = $("<div>");
    pendingEditBox.append(pendingEditBoxText).hide();
    if (editLimit) {
      pendingEditBox.append($("<div>").text(messages.pendingEditBoxLimited).addClass("disamassist-subtitle"));
    }
    $body.find("#mw-content-text").before(pendingEditBox);
    updateEditCounter();
  }
  if (show) {
    pendingEditBox.fadeIn();
  } else {
    pendingEditBox.fadeOut();
  }
};
var notifyCompletion = () => {
  const $body = $("body");
  const oldTitle = document.title;
  document.title = messages.notifyCharacter + document.title;
  $body.one("mousemove", () => {
    document.title = oldTitle;
  });
};
var updateContext = () => {
  updateEditCounter();
  if (currentLink) {
    var _ui$context$height;
    ui.pageTitleLine.html(messages.pageTitleLine.replace("$1", mw.util.getUrl(currentPageTitle, {
      redirect: "no"
    })).replace("$2", mw.html.escape(currentPageTitle)));
    const context = extractContext(currentPageParameters.content, currentLink);
    ui.context.empty().append($("<span>").text(context[0])).append($("<span>").text(context[1]).addClass("disamassist-inclink")).append($("<span>").text(context[2]));
    const numLines = Math.ceil(((_ui$context$height = ui.context.height()) !== null && _ui$context$height !== void 0 ? _ui$context$height : 0) / Number.parseFloat(ui.context.css("line-height")));
    if (numLines < cfg.numContextLines) {
      ui.context.append(Array.from({
        length: cfg.numContextLines - numLines + 2
      }).join("<br>"));
    }
    toggleFinishedMessage(false);
    ui.undoButton.prop("disabled", !pageChanges.length);
    ui.removeLinkButton.prop("disabled", currentPageParameters.redirect);
    ui.intentionalLinkButton.prop("disabled", currentPageParameters.redirect);
    ui.disamNeededButton.prop("disabled", currentPageParameters.redirect || currentLink.hasDisamTemplate);
    choosing = true;
  } else {
    toggleFinishedMessage(true);
  }
};
var updateEditCounter = () => {
  if (ui.pendingEditCounter) {
    ui.pendingEditCounter.text(messages.pendingEditCounter.replace("$1", editCount.toString()).replace("$2", countActuallyChangedFullyCheckedPages().toString()));
  }
  if (pendingEditBox && pendingEditBoxText) {
    if (editCount === 0 && !running) {
      togglePendingEditBox(false);
      notifyCompletion();
    }
    let textContent = editCount.toString();
    if (editLimit) {
      textContent = messages.pendingEditBoxTimeEstimation.replace("$1", textContent).replace("$2", secondsToHHMMSS(cfg.editCooldown * editCount));
    }
    pendingEditBoxText.text(messages.pendingEditBox.replace("$1", textContent));
  }
};
var applyChange = (pageChange) => {
  if (pageChange.page.content !== pageChange.contentBefore[0]) {
    editCount++;
    const changeSummaries = pageChange.summary.join(messages.summarySeparator);
    const summary = messages.summary.replace("$1", getTargetPage()).replace("$2", changeSummaries);
    const save = editLimit ? saveWithCooldown : savePage;
    save(pageChange.title, pageChange.page, summary, true, true).always(() => {
      if (editCount > 0) {
        editCount--;
      }
      updateEditCounter();
    }).fail(error);
    updateEditCounter();
  }
};
var applyAllChanges = () => {
  for (var _i3 = 0, _pageChanges = pageChanges; _i3 < _pageChanges.length; _i3++) {
    const pageChange = _pageChanges[_i3];
    applyChange(pageChange);
  }
  pageChanges = [];
};
var addChange = (pageTitle, page, oldContent, link, summary) => {
  var _pageChanges$at;
  if (!pageChanges.length || ((_pageChanges$at = pageChanges.at(-1)) === null || _pageChanges$at === void 0 ? void 0 : _pageChanges$at.title) !== pageTitle) {
    pageChanges.push({
      title: pageTitle,
      page,
      contentBefore: [],
      links: [],
      summary: []
    });
  }
  const lastPageChange = pageChanges.at(-1);
  if (!lastPageChange) {
    return;
  }
  lastPageChange.contentBefore.push(oldContent);
  lastPageChange.links.push(link);
  lastPageChange.summary.push(summary);
};
var checkActualChanges = () => {
  return countActualChanges() !== 0;
};
var countActualChanges = () => {
  let changeCount = 0;
  for (var _i4 = 0, _pageChanges2 = pageChanges; _i4 < _pageChanges2.length; _i4++) {
    const pageChange = _pageChanges2[_i4];
    if (pageChange.page.content !== pageChange.contentBefore[0]) {
      changeCount++;
    }
  }
  return changeCount;
};
var countActuallyChangedFullyCheckedPages = () => {
  let changeCount = countActualChanges();
  const lastChange = pageChanges.at(-1);
  if (lastChange && lastChange.title === currentPageTitle && currentLink && lastChange.page.content !== lastChange.contentBefore[0]) {
    changeCount--;
  }
  return changeCount;
};
var getDisamOptions = () => {
  const $body = $("body");
  return $body.find("#mw-content-text a").filter((_index, element) => {
    return Boolean(extractPageName($(element)));
  });
};
var saveAndEnd = () => {
  applyAllChanges();
  end();
};
var end = () => {
  const $body = $("body");
  const currentToolUI = ui.display;
  choosing = false;
  running = false;
  startLink.removeClass("selected");
  $body.find(".disamassist-optionmarker").remove();
  currentToolUI.fadeOut({
    complete() {
      currentToolUI.remove();
      if (editCount) {
        togglePendingEditBox(true);
      }
    }
  });
};
var error = (errorDescription) => {
  const $body = $("body");
  const errorBox = $("<div>").addClass("disamassist-box disamassist-errorbox");
  errorBox.text(messages.error.replace("$1", errorDescription));
  errorBox.append(createButton(messages.dismissError, () => {
    errorBox.fadeOut();
  }).addClass("disamassist-errorbutton"));
  const uiIsInPlace = ui && $.contains(document.documentElement, ui.display[0]);
  const nextElement = uiIsInPlace ? ui.display : $body.find("#mw-content-text");
  nextElement.before(errorBox);
  errorBox.hide().fadeIn();
};
var replaceLink = (text, title, link, extra) => {
  let newContent;
  if (isSamePage(title, link.description)) {
    newContent = link.description;
  } else {
    newContent = "".concat(title, "|").concat(link.description);
  }
  const linkStart = text.slice(0, Math.max(0, link.start));
  const linkEnd = text.slice(Math.max(0, link.end));
  return "".concat(linkStart, "[[").concat(newContent, "]]").concat(link.afterDescription).concat(extra).concat(linkEnd);
};
var removeLinkText = (text, link) => {
  const linkStart = text.slice(0, Math.max(0, link.start));
  const linkEnd = text.slice(Math.max(0, link.end));
  return linkStart + link.description + link.afterDescription + linkEnd;
};
var extractLink = (text, lastIndex) => {
  var _match$;
  const titleRegex = /\[\[(.*?)(?:\|(.*?))?]]/g;
  const templateRegex = /^(\w*[\s!),.:;?}]*){{\s*([^{|}]+?)\s*(?:\|[^{]*?)?}}/;
  titleRegex.lastIndex = lastIndex;
  const match = titleRegex.exec(text);
  if (!match) {
    return;
  }
  const matchTitle = (_match$ = match[1]) !== null && _match$ !== void 0 ? _match$ : "";
  const matchDescription = match[2];
  let end2 = match.index + 4 + matchTitle.length + (matchDescription ? 1 + matchDescription.length : 0);
  let afterDescription = "";
  let possiblyAmbiguous = true;
  let hasDisamTemplate = false;
  const rest = text.slice(Math.max(0, end2));
  const templateMatch = templateRegex.exec(rest);
  if (templateMatch) {
    var _templateMatch$;
    const templateTitle = getCanonicalTitle((_templateMatch$ = templateMatch[2]) !== null && _templateMatch$ !== void 0 ? _templateMatch$ : "");
    const {
      disamLinkTemplates,
      disamLinkIgnoreTemplates
    } = cfg;
    if (disamLinkTemplates.includes(templateTitle)) {
      var _templateMatch$2;
      end2 += templateMatch[0].length;
      afterDescription = ((_templateMatch$2 = templateMatch[1]) !== null && _templateMatch$2 !== void 0 ? _templateMatch$2 : "").replace(/\s$/, "");
      hasDisamTemplate = true;
    } else if (disamLinkIgnoreTemplates.includes(templateTitle)) {
      possiblyAmbiguous = false;
    }
  }
  return {
    start: match.index,
    end: end2,
    possiblyAmbiguous,
    hasDisamTemplate,
    title: matchTitle,
    description: matchDescription !== null && matchDescription !== void 0 ? matchDescription : matchTitle,
    afterDescription
  };
};
var extractLinkToPage = (text, destinations, lastIndex) => {
  let link;
  do {
    link = extractLink(text, lastIndex);
    if (link) {
      lastIndex = link.end;
    }
  } while (link && (!link.possiblyAmbiguous || !destinations.includes(getCanonicalTitle(link.title))));
  return link;
};
var getTargetPage = () => {
  const title = getTitle();
  return forceSamePage ? title : removeDisam(title);
};
var getTitle = () => {
  const {
    wgPageName
  } = mw.config.get();
  return wgPageName.replace(/_/g, " ");
};
var removeDisam = (title) => {
  var _match$2;
  const match = new RegExp(cfg.disamRegExp).exec(title);
  return (_match$2 = match === null || match === void 0 ? void 0 : match[1]) !== null && _match$2 !== void 0 ? _match$2 : title;
};
var isSamePage = (title1, title2) => {
  return getCanonicalTitle(title1) === getCanonicalTitle(title2);
};
var getCanonicalTitle = (title) => {
  let canonicalTitle = title;
  try {
    canonicalTitle = new mw.Title(title).getPrefixedText();
  } catch {
  }
  return canonicalTitle;
};
var extractContext = (text, link) => {
  const contextStart = link.start - cfg.radius;
  const contextEnd = link.end + cfg.radius;
  let contextPrev = text.slice(contextStart, link.start);
  if (contextStart > 0) {
    contextPrev = messages.ellipsis + contextPrev;
  }
  let contextNext = text.slice(link.end, contextEnd);
  if (contextEnd < text.length) {
    contextNext += messages.ellipsis;
  }
  return [contextPrev, text.slice(link.start, link.end), contextNext];
};
var extractPageName = (link) => {
  const pageName = extractPageNameRaw(link);
  if (!pageName) {
    return;
  }
  const sectionPos = pageName.indexOf("#");
  let section = "";
  let title = pageName;
  if (sectionPos !== -1) {
    section = pageName.slice(Math.max(0, sectionPos));
    title = pageName.slice(0, Math.max(0, sectionPos));
  }
  return getCanonicalTitle(title) + section;
};
var extractPageNameRaw = (link) => {
  const {
    wgScript,
    wgArticlePath
  } = mw.config.get();
  if (link.hasClass("image")) {
    return;
  }
  const href = link.attr("href");
  if (link.hasClass("new")) {
    if (href && href.includes(wgScript)) {
      return mw.util.getParamValue("title", href);
    }
    return;
  }
  if (!href) {
    return;
  }
  const regex = wgArticlePath.replace("$1", "(.*)");
  const regexResult = new RegExp("^".concat(regex, "$")).exec(href);
  const pageName = regexResult === null || regexResult === void 0 ? void 0 : regexResult[1];
  if (pageName === void 0) {
    return;
  }
  return decodeURIComponent(pageName);
};
var isDisam = () => {
  const {
    wgCategories
  } = mw.config.get();
  return cfg.disamCategories.some((category) => {
    return wgCategories.includes(category);
  });
};
var secondsToHHMMSS = (totalSeconds) => {
  let hhmmss = "";
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  const seconds = Math.floor(totalSeconds % 3600 % 60);
  if (hours >= 1) {
    hhmmss = "".concat(pad(hours, 2), ":");
  }
  hhmmss += "".concat(pad(minutes, 2), ":").concat(pad(seconds, 2));
  return hhmmss;
};
var pad = (value, width) => {
  const text = value.toString();
  if (text.length >= width) {
    return text;
  }
  return Array.from({
    length: width - text.length + 1
  }).join("0") + text;
};
var createButton = (text, onClick) => {
  const button = $("<input>").attr({
    type: "button",
    value: text
  });
  button.addClass("disamassist-button").on("click", onClick);
  return button;
};
var resolveRedirect = (pageTitle, possibleRedirects) => {
  let appliedRedirect = true;
  const visitedPages = {};
  let currentPage = getCanonicalTitle(pageTitle);
  while (appliedRedirect) {
    appliedRedirect = false;
    var _iterator2 = _createForOfIteratorHelper(possibleRedirects), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const possibleRedirect = _step2.value;
        if (possibleRedirect.from === currentPage) {
          if (visitedPages[possibleRedirect.to]) {
            return pageTitle;
          }
          visitedPages[currentPage] = true;
          appliedRedirect = true;
          currentPage = possibleRedirect.to;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  return currentPage;
};
var getBacklinks = (page) => {
  const deferred = $.Deferred();
  const params = {
    action: "query",
    list: "backlinks",
    bltitle: page,
    blredirect: true,
    bllimit: cfg.backlinkLimit,
    blnamespace: cfg.targetNamespaces.join("|")
  };
  api.get(params).done(({
    query
  }) => {
    const backlinks = [];
    const linkTitles = [getCanonicalTitle(page)];
    const backlinksQuery = query.backlinks;
    var _iterator3 = _createForOfIteratorHelper(backlinksQuery), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const element = _step3.value;
        backlinks.push(element.title);
        if (!element.redirlinks) {
          continue;
        }
        linkTitles.push(element.title);
        const {
          redirlinks
        } = element;
        var _iterator4 = _createForOfIteratorHelper(redirlinks), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            const {
              title
            } = _step4.value;
            backlinks.push(title);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    deferred.resolve(backlinks, linkTitles);
  }).fail((code) => {
    deferred.reject(messages.getBacklinksError.replace("$1", code));
  });
  return deferred.promise();
};
var fetchRedirects = (pageTitles) => {
  const deferred = $.Deferred();
  const currentTitles = pageTitles.slice(0, cfg.queryTitleLimit);
  const restTitles = pageTitles.slice(cfg.queryTitleLimit);
  const params = {
    action: "query",
    titles: currentTitles.join("|"),
    redirects: true
  };
  api.get(params).done(({
    query
  }) => {
    var _query$redirects;
    const theseRedirects = (_query$redirects = query.redirects) !== null && _query$redirects !== void 0 ? _query$redirects : [];
    if (restTitles.length) {
      fetchRedirects(restTitles).done((redirects) => {
        deferred.resolve([...theseRedirects, ...redirects]);
      }).fail((description) => {
        deferred.reject(description);
      });
    } else {
      deferred.resolve(theseRedirects);
    }
  }).fail((code) => {
    deferred.reject(messages.fetchRedirectsError.replace("$1", code));
  });
  return deferred.promise();
};
var fetchRights = () => {
  const deferred = $.Deferred();
  const params = {
    action: "query",
    meta: "userinfo",
    uiprop: "rights"
  };
  api.get(params).done(({
    query
  }) => {
    deferred.resolve(query.userinfo.rights);
  }).fail((code) => {
    deferred.reject(messages.fetchRightsError.replace("$1", code));
  });
  return deferred.promise();
};
var loadPage = (pageTitle) => {
  const deferred = $.Deferred();
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    titles: pageTitle,
    prop: "revisions",
    rvprop: ["timestamp", "content"],
    rvslots: "main",
    meta: "tokens",
    type: "csrf"
  };
  api.get(params).done(({
    query
  }) => {
    const [rawPage] = query.pages;
    const page = {
      content: "",
      baseTimeStamp: void 0,
      startTimeStamp: void 0,
      editToken: query.tokens.csrftoken,
      redirect: rawPage.redirect !== void 0,
      missing: rawPage.missing !== void 0
    };
    if (rawPage.revisions) {
      page.content = rawPage.revisions[0].slots.main.content;
      page.baseTimeStamp = rawPage.revisions[0].timestamp;
    }
    page.startTimeStamp = rawPage.starttimestamp;
    deferred.resolve(page);
  }).fail((code) => {
    deferred.reject(messages.loadPageError.replace("$1", pageTitle).replace("$2", code));
  });
  return deferred.promise();
};
var saveWithCooldown = (...args) => {
  const deferred = $.Deferred();
  pendingSaves.push({
    args,
    dfd: deferred
  });
  if (!runningSaves) {
    checkAndSave();
  }
  return deferred.promise();
};
var checkAndSave = () => {
  if (!pendingSaves.length) {
    runningSaves = false;
    return;
  }
  runningSaves = true;
  const millisSinceLast = Date.now() - lastEditMillis;
  if (millisSinceLast < cfg.editCooldown * 1e3) {
    setTimeout(checkAndSave, cfg.editCooldown * 1e3 - millisSinceLast);
  } else {
    const save = pendingSaves.shift();
    if (!save) {
      return;
    }
    savePage(...save.args).done(() => {
      checkAndSave();
      save.dfd.resolve();
    }).fail((description) => {
      checkAndSave();
      save.dfd.reject(description);
    });
    lastEditMillis = Date.now();
  }
};
var savePage = (pageTitle, {
  editToken,
  content,
  baseTimeStamp,
  startTimeStamp
}, summary, minorEdit, botEdit) => {
  const deferred = $.Deferred();
  const params = {
    action: "edit",
    title: pageTitle,
    token: editToken,
    text: content,
    basetimestamp: baseTimeStamp,
    starttimestamp: startTimeStamp,
    summary,
    watchlist: cfg.watch,
    minor: minorEdit,
    bot: botEdit
  };
  api.post(params).done(() => {
    deferred.resolve();
  }).fail((code) => {
    deferred.reject(messages.savePageError.replace("$1", pageTitle).replace("$2", code));
  });
  return deferred.promise();
};
//! src/DisamAssist/DisamAssist.ts
void (0, import_ext_gadget2.getBody)().then(function disamAssist() {
  install();
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Rpc2FtQXNzaXN0L0Rpc2FtQXNzaXN0LnRzIiwgInNyYy9EaXNhbUFzc2lzdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvRGlzYW1Bc3Npc3QvbW9kdWxlcy9jb25maWcudHMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvbWVzc2FnZXMudHMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvY29yZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICcuL0Rpc2FtQXNzaXN0Lmxlc3MnO1xuLyoqXG4gKiBEaXNhbUFzc2lzdDogYSB0b29sIGZvciByZXBhaXJpbmcgbGlua3MgZnJvbSBhcnRpY2xlcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcy5cbiAqIOeUsVF3ZXJ0eXl0cmV3cXF3ZXJ0eeacgOWIneiuvuiuoe+8mkNDIEJZLVNBIDMuMFxuICog55SxR1pXRGVy5pys5Zyw5YyW77yaMjAyMC0wOC0xOSBDQyBCWS1TQSAzLjBcbiAqIOeUseWSjOW5s+Wli+aWl+aVkeWcsOeQg+eojeS9nOe/u+ivkSAyMDIxLTA1LTE1IENDIEJZLVNBIDMuMFxuICog5rGC6Ze755m+56eRTmp6anrnroDkvZPljJYgMjAyMi0yLTE0IENDIEJZLVNBIDQuMFxuICovXG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2luc3RhbGx9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBkaXNhbUFzc2lzdCgpIHtcblx0aW5zdGFsbCgpO1xufSk7XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdEaXNhbUFzc2lzdC8xLjEnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImNvbnN0IGNmZyA9IHtcblx0LyogQ2F0ZWdvcmllcyB3aGVyZSBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBhcmUgYWRkZWQgKHVzdWFsbHkgYnkgYSB0ZW1wbGF0ZSBsaWtlIHt7RGlzYW1iaWd1YXRpb259fSAqL1xuXHRkaXNhbUNhdGVnb3JpZXM6IFsn5YWo6YOo5raI5q2n5LmJ6aG16Z2iJ10sXG5cdC8qIFwiQ2Fub25pY2FsIG5hbWVzXCIgb2YgdGhlIHRlbXBsYXRlcyB0aGF0IG1heSBhcHBlYXIgYWZ0ZXIgYW1iaWd1b3VzIGxpbmtzIGFuZCB3aGljaCBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIGZpeGluZyB0aG9zZSBsaW5rcyAqL1xuXHRkaXNhbUxpbmtUZW1wbGF0ZXM6IFtcblx0XHQnRGlzYW1iaWd1YXRpb24gbmVlZGVkJyxcblx0XHQnQW1iaWd1b3VzIGxpbmsnLFxuXHRcdCdBbWJsaW5rJyxcblx0XHQnRGFiIG5lZWRlZCcsXG5cdFx0J0Rpc2FtYi1saW5rJyxcblx0XHQnRGlzYW1iaWcgbmVlZGVkJyxcblx0XHQnRGlzYW1iaWd1YXRlJyxcblx0XHQnRG4nLFxuXHRcdCdOZWVkZGFiJyxcblx0XSxcblx0LyogXCJDYW5vbmljYWwgbmFtZXNcIiBvZiB0aGUgdGVtcGxhdGVzIHRoYXQgZGVzaWduYXRlIGludGVudGlvbmFsIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzICovXG5cdGRpc2FtTGlua0lnbm9yZVRlbXBsYXRlczogWydSIGZyb20gYW1iaWd1b3VzIHBhZ2UnLCAnUiB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlJywgJ1IgZnJvbSBpbmNvbXBsZXRlIGRpc2FtYmlndWF0aW9uJ10sXG5cdC8qIEZvcm1hdCBzdHJpbmcgZm9yIFwiRm9vIChkaXNhbWJpZ3VhdGlvbilcIi1zdHlsZSBwYWdlcyAqL1xuXHRkaXNhbUZvcm1hdDogJyQx77yI5raI5q2n5LmJ77yJJyxcblx0LyogUmVndWxhciBleHByZXNzaW9uIG1hdGNoaW5nIHRoZSB0aXRsZXMgb2YgZGlzYW1iaWd1YXRpb24gcGFnZXMgKHdoZW4gdGhleSBhcmUgZGlmZmVyZW50IGZyb20gdGhlIHRpdGxlcyBvZiB0aGUgcHJpbWFyeSB0b3BpY3MpICovXG5cdGRpc2FtUmVnRXhwOiAnXiguKinvvIgo5raI5q2n5LmJfOa2iOatp+e+qSnvvIkkJyxcblx0LyogVGV4dCB0aGF0IHdpbGwgYmUgaW5zZXJ0ZWQgYWZ0ZXIgdGhlIGxpbmsgaWYgdGhlIHVzZXIgcmVxdWVzdHMgaGVscC4gSWYgdGhlIHZhbHVlIGlzIG51bGwsIHRoZSBvcHRpb24gdG8gcmVxdWVzdCBoZWxwIHdvbid0IGJlIG9mZmVyZWQgKi9cblx0ZGlzYW1OZWVkZWRUZXh0OiAne3tkbnxkYXRlPXt7Jy5jb25jYXQoJ3N1YnN0OicsICdDVVJSRU5UTU9OVEhOQU1FJywgJ319IHt7JywgJ3N1YnN0OicsICdDVVJSRU5UWUVBUn19fX0nKSxcblx0LyogQ29udGVudCBvZiB0aGUgXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiIHBhZ2VzIHRoYXQgd2lsbCBiZSBjcmVhdGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB1c2luZyBEaXNhbUFzc2lzdCBmcm9tIGEgXCJGb29cIiBwYWdlICovXG5cdHJlZGlyZWN0VG9EaXNhbTogJyPph43lrprlkJEgW1skMV1dJy5jb25jYXQoJ3t7UiB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlfX0nKSxcblx0LyogV2hldGhlciBpbnRlbnRpb25hbCBsaW5rcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBjYW4gYmUgZXhwbGljaXRseSBtYXJrZWQgYnkgYWRkaW5nIFwiIChkaXNhbWJpZ3VhdGlvbilcIiAqL1xuXHRpbnRlbnRpb25hbExpbmtPcHRpb246IGZhbHNlLFxuXHQvKiBOYW1lc3BhY2VzIHRoYXQgd2lsbCBiZSBzZWFyY2hlZCBmb3IgaW5jb21pbmcgbGlua3MgdG8gdGhlIGRpc2FtYmlndWF0aW9uIHBhZ2UgKHBhZ2VzIGluIG90aGVyIG5hbWVzcGFjZXMgd2lsbCBiZSBpZ25vcmVkKSAqL1xuXHR0YXJnZXROYW1lc3BhY2VzOiBbNiwgMTAsIDE0LCAxMTgsIDBdLFxuXHQvKiBOdW1iZXIgb2YgYmFja2xpbmtzIHRoYXQgd2lsbCBiZSBkb3dubG9hZGVkIGF0IG9uY2UgV2hlbiB1c2luZyBibHJlZGlyZWN0LCB0aGUgbWF4aW11bSBsaW1pdCBpcyBzdXBwb3NlZGx5IGhhbHZlZCAoc2VlIGh0dHA6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL0FQSTpCYWNrbGlua3MpICovXG5cdGJhY2tsaW5rTGltaXQ6IDI1MCxcblx0LyogTnVtYmVyIG9mIHRpdGxlcyB3ZSBjYW4gcXVlcnkgZm9yIGF0IG9uY2UgKi9cblx0cXVlcnlUaXRsZUxpbWl0OiA1MCxcblx0LyogTnVtYmVyIG9mIGNoYXJhY3RlcnMgYmVmb3JlIGFuZCBhZnRlciB0aGUgaW5jb21pbmcgbGluayB0aGF0IHdpbGwgYmUgZGlzcGxheWVkICovXG5cdHJhZGl1czogMzAwLFxuXHQvKiBIZWlnaHQgb2YgdGhlIGNvbnRleHQgYm94LCBpbiBsaW5lcyAqL1xuXHRudW1Db250ZXh0TGluZXM6IDQsXG5cdC8qIE51bWJlciBvZiBwYWdlcyB0aGF0IHdpbGwgYmUgc3RvcmVkIGJlZm9yZSBzYXZpbmcsIHNvIHRoYXQgY2hhbmdlcyB0byB0aGVtIGNhbiBiZSB1bmRvbmUgaWYgbmVlZCBiZSAqL1xuXHRoaXN0b3J5U2l6ZTogMixcblx0LyogTWluaW11bSB0aW1lIGluIHNlY29uZHMgc2luY2UgdGhlIGxhc3QgY2hhbmdlIHdhcyBzYXZlZCBiZWZvcmUgYSBuZXcgZWRpdCBjYW4gYmUgbWFkZS4gQSBuZWdhdGl2ZSB2YWx1ZSBvciAwIGRpc2FibGVzIHRoZSBjb29sZG93bi4gVXNlcnMgd2l0aCB0aGUgXCJib3RcIiByaWdodCB3b24ndCBiZSBhZmZlY3RlZCBieSB0aGUgY29vbGRvd24gKi9cblx0ZWRpdENvb2xkb3duOiAwLFxuXHQvKiBTcGVjaWZ5IGhvdyB0aGUgd2F0Y2hsaXN0IGlzIGFmZmVjdGVkIGJ5IERpc2FtQXNzaXN0IGVkaXRzLiBQb3NzaWJsZSB2YWx1ZXM6IFwid2F0Y2hcIiwgXCJ1bndhdGNoXCIsIFwicHJlZmVyZW5jZXNcIiwgXCJub2NoYW5nZVwiICovXG5cdHdhdGNoOiAnbm9jaGFuZ2UnLFxufTtcblxuZXhwb3J0IHtjZmd9O1xuIiwgImltcG9ydCB0eXBlIHtNZXNzYWdlc30gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IG1lc3NhZ2VzOiBNZXNzYWdlcyA9IHtcblx0c3RhcnQ6ICfkuLrpk77mjqXmtojmrafkuYknLFxuXHRzdGFydE1haW46ICfkuLrpk77oh7PkuLvmnaHnm67nmoTpk77mjqXmtojmrafkuYknLFxuXHRzdGFydFNhbWU6ICfkuLrpk77oh7PmtojmrafkuYnpobXnmoTpk77mjqXmtojmrafkuYknLFxuXHRjbG9zZTogJ+WFs+mXrScsXG5cdHVuZG86ICflpI3ljp8nLFxuXHRvbWl0OiAn6Lez6L+HJyxcblx0cmVmcmVzaDogJ+mHjeaWsOaVtOeQhicsXG5cdHRpdGxlQXNUZXh0OiAn5YW25a6D55uu5qCHJyxcblx0ZGlzYW1OZWVkZWQ6ICfmoIfnpLp7e2RufX0nLFxuXHRpbnRlbnRpb25hbExpbms6ICfmnInmhI/pk77liLDmtojmrafkuYnpobXnmoTpk77mjqUnLFxuXHR0aXRsZUFzVGV4dFByb21wdDogJ+ivt+i+k+WFpeaWsOeahOmTvuaOpeebruagh++8micsXG5cdHJlbW92ZUxpbms6ICfljrvpmaTpk77mjqUnLFxuXHRvcHRpb25NYXJrZXI6ICcgW+mTvuaOpeWIsOi/memHjF0nLFxuXHR0YXJnZXRPcHRpb25NYXJrZXI6ICcgW+W9k+WJjeebruagh10nLFxuXHRyZWRpcmVjdE9wdGlvbk1hcmtlcjogJyBb5b2T5YmN55uu5qCH77yI6YeN5a6a5ZCR77yJXScsXG5cdHBhZ2VUaXRsZUxpbmU6ICc8YSBocmVmPVwiJDFcIj4kMjwvYT7vvJonLFxuXHRub01vcmVMaW5rczogJ+ayoeaciemcgOimgea2iOatp+S5ieeahOmTvuaOpeS6huOAgicsXG5cdHBlbmRpbmdFZGl0Q291bnRlcjogJ+W3suS/neWtmCQx5Liq77yM5bey57yW6L6RJDLkuKonLFxuXHRwZW5kaW5nRWRpdEJveDogJ0Rpc2FtQXNzaXN05q2j5Zyo5YKo5a2Y5oKo55qE57yW6L6R77yIJDHvvInjgIInLFxuXHRwZW5kaW5nRWRpdEJveFRpbWVFc3RpbWF0aW9uOiAnJDHvvJvliankvZnml7bpl7TvvJokMicsXG5cdHBlbmRpbmdFZGl0Qm94TGltaXRlZDpcblx0XHQn5Zyo5omA5pyJ5pu05pS55L+d5a2Y5YmN77yM6K+35LiN6KaB5YWz6Zet6aG16Z2i77yb5L2g5Y+v5Lul5Zyo5Y+m5LiA5Liq6aG16Z2i57yW6L6R5rGC6Ze755m+56eR77yM5L2G5piv6K+35Yu/5ZCM5pe25L2/55So5aSa5LiqRGlzYW1Bc3Npc3TjgIInLFxuXHRlcnJvcjogJ+mUmeivr++8miQxJyxcblx0ZmV0Y2hSZWRpcmVjdHNFcnJvcjogJ+iOt+WPlumHjeWumuWQkeWksei0pe+8mlwiJDFcIi4nLFxuXHRnZXRCYWNrbGlua3NFcnJvcjogJ+S4i+i9veWPjeWQkemTvuaOpeWksei0pe+8mlwiJDFcIi4nLFxuXHRmZXRjaFJpZ2h0c0Vycm9yOiAn6I635Y+W55So5oi35p2D6ZmQ5aSx6LSl77yaXCIkMVwiLCcsXG5cdGxvYWRQYWdlRXJyb3I6ICfliqDovb0kMeWksei0pe+8mlwiJDJcIi4nLFxuXHRzYXZlUGFnZUVycm9yOiAn5L+d5a2Y6IezJDHlpLHotKXvvJpcIiQyXCIuJyxcblx0ZGlzbWlzc0Vycm9yOiAnRGlzbWlzcycsXG5cdHBlbmRpbmc6ICdEaXNhbUFzc2lzdOWwmuacieacquWCqOWtmOeahOe8lui+keOAguWmguassuWCqOWtmOS5i++8jOivt+aMieKAnOWFs+mXreKAneOAgicsXG5cdGVkaXRJblByb2dyZXNzOiAnRGlzYW1Bc3Npc3TmraPlnKjov5vooYznvJbovpHjgILoi6XmgqjlsIbmnKzliIbpobXlhbPpl63vvIzlj6/og73kvJrkuKflpLHmgqjnmoTnvJbovpHjgIInLFxuXHRlbGxpcHNpczogJ+KApuKApicsXG5cdG5vdGlmeUNoYXJhY3RlcjogJ+KclCcsXG5cdHN1bW1hcnk6ICfkvb/nlKhbW01lZGlhV2lraTpHYWRnZXQtRGlzYW1Bc3Npc3QuanN8RGlzYW1Bc3Npc3RdXea4heeQhltbUVc6REFCfOa2iOatp+S5iV1d6ZO+5o6l77yaW1skMV1d77yIJDLvvInjgIInLFxuXHRzdW1tYXJ5Q2hhbmdlZDogJ+aUuemTvuaOpeiHs1tbJDFdXScsXG5cdHN1bW1hcnlPbWl0dGVkOiAn6ZO+5o6l5bey6Lez6L+HJyxcblx0c3VtbWFyeVJlbW92ZWQ6ICfpk77mjqXlt7Lnp7vpmaQnLFxuXHRzdW1tYXJ5SW50ZW50aW9uYWw6ICfliLvmhI/pk77mjqXoh7PmtojmrafkuYnpobXpnaInLFxuXHRzdW1tYXJ5SGVscE5lZWRlZDogJ+mcgOimgeW4ruWKqScsXG5cdHN1bW1hcnlTZXBhcmF0b3I6ICc7ICcsXG5cdHJlZGlyZWN0U3VtbWFyeTogJ+S9v+eUqFtbTWVkaWFXaWtpOkdhZGdldC1EaXNhbUFzc2lzdC5qc3xEaXNhbUFzc2lzdF1d5Yib5bu655uu5qCH5Li6W1skMV1d55qE6YeN5a6a5ZCR44CCJyxcbn07XG5cbmV4cG9ydCB7bWVzc2FnZXN9O1xuIiwgImltcG9ydCB7RGlzYW1Bc3Npc3RVSSwgTGluaywgUGFnZUNoYW5nZSwgUGFnZURhdGEsIFBlbmRpbmdTYXZlLCBSZWRpcmVjdCwgU2F2ZUFyZ3MsIFNhdmVGdW5jdGlvbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtjZmd9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7bWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuXG5sZXQgc3RhcnRMaW5rITogSlF1ZXJ5PEhUTUxFbGVtZW50PjtcbmxldCB1aSE6IERpc2FtQXNzaXN0VUk7XG5sZXQgbGlua3M6IHN0cmluZ1tdID0gW107XG5sZXQgcGFnZUNoYW5nZXM6IFBhZ2VDaGFuZ2VbXSA9IFtdO1xubGV0IGN1cnJlbnRQYWdlVGl0bGU6IHN0cmluZztcbmxldCBjdXJyZW50UGFnZVBhcmFtZXRlcnM6IFBhZ2VEYXRhO1xubGV0IGN1cnJlbnRMaW5rOiBMaW5rIHwgdW5kZWZpbmVkO1xubGV0IHBvc3NpYmxlQmFja2xpbmtEZXN0aW5hdGlvbnM6IHN0cmluZ1tdID0gW107XG5sZXQgZm9yY2VTYW1lUGFnZSA9IGZhbHNlO1xubGV0IHJ1bm5pbmcgPSBmYWxzZTtcbmxldCBjaG9vc2luZyA9IGZhbHNlO1xubGV0IGNhbk1hcmtJbnRlbnRpb25hbExpbmtzID0gZmFsc2U7XG5sZXQgZGlzcGxheWVkUGFnZXM6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge307XG5sZXQgZWRpdENvdW50ID0gMDtcbmxldCBlZGl0TGltaXQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5jb25zdCBwZW5kaW5nU2F2ZXM6IFBlbmRpbmdTYXZlW10gPSBbXTtcbmxldCBwZW5kaW5nRWRpdEJveDogSlF1ZXJ5PEhUTUxFbGVtZW50PiB8IHVuZGVmaW5lZDtcbmxldCBwZW5kaW5nRWRpdEJveFRleHQ6IEpRdWVyeTxIVE1MRWxlbWVudD4gfCB1bmRlZmluZWQ7XG5sZXQgbGFzdEVkaXRNaWxsaXMgPSAwO1xubGV0IHJ1bm5pbmdTYXZlcyA9IGZhbHNlO1xuXG4vKiBFbnRyeSBwb2ludC4gQ2hlY2sgd2hldGhlciB3ZSBhcmUgaW4gYSBkaXNhbWJpZ3VhdGlvbiBwYWdlLiBJZiBzbywgYWRkIGEgbGluayB0byBzdGFydCB0aGUgdG9vbCAqL1xuY29uc3QgaW5zdGFsbCA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnQWN0aW9ufSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIWlzRGlzYW0oKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBwb3J0bGV0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHQvLyBUaGlzIGlzIGEgXCIgKGRpc2FtYmlndWF0aW9uKVwiIHBhZ2Vcblx0aWYgKG5ldyBSZWdFeHAoY2ZnLmRpc2FtUmVnRXhwKS50ZXN0KGdldFRpdGxlKCkpKSB7XG5cdFx0Y29uc3Qgc3RhcnRNYWluTGluayA9ICQobXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgbWVzc2FnZXMuc3RhcnRNYWluLCAnY2EtZGlzYW1hc3Npc3QtbWFpbicpISkub24oXG5cdFx0XHQnY2xpY2snLFxuXHRcdFx0c3RhcnRNYWluXG5cdFx0KTtcblx0XHRjb25zdCBzdGFydFNhbWVMaW5rID0gJChtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBtZXNzYWdlcy5zdGFydFNhbWUsICdjYS1kaXNhbWFzc2lzdC1zYW1lJykhKS5vbihcblx0XHRcdCdjbGljaycsXG5cdFx0XHRzdGFydFNhbWVcblx0XHQpO1xuXHRcdHN0YXJ0TGluayA9IHN0YXJ0TWFpbkxpbmsuYWRkKHN0YXJ0U2FtZUxpbmspO1xuXHR9IGVsc2Uge1xuXHRcdHN0YXJ0TGluayA9ICQobXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgbWVzc2FnZXMuc3RhcnQsICdjYS1kaXNhbWFzc2lzdC1wYWdlJykhKS5vbihcblx0XHRcdCdjbGljaycsXG5cdFx0XHRzdGFydFxuXHRcdCk7XG5cdH1cbn07XG5cbi8qIFN0YXJ0IHRoZSB0b29sLiBEaXNwbGF5IHRoZSBVSSBhbmQgYmVnaW4gbG9va2luZyBmb3IgbGlua3MgdG8gZml4ICovXG5jb25zdCBzdGFydCA9ICgpOiB2b2lkID0+IHtcblx0aWYgKHJ1bm5pbmcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRydW5uaW5nID0gdHJ1ZTtcblx0bGlua3MgPSBbXTtcblx0cGFnZUNoYW5nZXMgPSBbXTtcblx0ZGlzcGxheWVkUGFnZXMgPSB7fTtcblx0ZW5zdXJlREFCRXhpc3RzKCkudGhlbigoY2FuTWFyaykgPT4ge1xuXHRcdGNhbk1hcmtJbnRlbnRpb25hbExpbmtzID0gY2FuTWFyaztcblx0XHRjcmVhdGVVSSgpO1xuXHRcdGFkZFVubG9hZENvbmZpcm0oKTtcblx0XHRtYXJrRGlzYW1PcHRpb25zKCk7XG5cdFx0Y2hlY2tFZGl0TGltaXQoKS50aGVuKCgpID0+IHtcblx0XHRcdHRvZ2dsZVBlbmRpbmdFZGl0Qm94KGZhbHNlKTtcblx0XHRcdGRvUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8qIFN0YXJ0IERpc2FtQXNzaXN0LiBEaXNhbWJpZ3VhdGUgaW5jb21pbmcgbGlua3MgdG8gdGhlIGN1cnJlbnQgcGFnZSwgcmVnYXJkbGVzcyBvZiB0aGUgdGl0bGUuICovXG5jb25zdCBzdGFydFNhbWUgPSAoKTogdm9pZCA9PiB7XG5cdGZvcmNlU2FtZVBhZ2UgPSB0cnVlO1xuXHRzdGFydCgpO1xufTtcblxuLyogU3RhcnQgRGlzYW1Bc3Npc3QuIElmIHRoZSBwYWdlIHRpdGxlIGVuZHMgd2l0aCBcIiAoZGlzYW1iaWd1YXRpb24pXCIsIGRpc2FtYmlndWF0ZSBsaW5rcyB0byB0aGUgcHJpbWFyeSB0b3BpYyBhcnRpY2xlLiBPdGhlcndpc2UsIGRpc2FtYmlndWF0ZSBsaW5rcyB0byB0aGUgY3VycmVudCBwYWdlLiAqL1xuY29uc3Qgc3RhcnRNYWluID0gKCk6IHZvaWQgPT4ge1xuXHRmb3JjZVNhbWVQYWdlID0gZmFsc2U7XG5cdHN0YXJ0KCk7XG59O1xuXG4vKiBDcmVhdGUgYW5kIHNob3cgdGhlIHVzZXIgaW50ZXJmYWNlLiAqL1xuY29uc3QgY3JlYXRlVUkgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHR1aSA9IHtcblx0XHRkaXNwbGF5OiAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1ib3ggZGlzYW1hc3Npc3QtbWFpbmJveCcpLFxuXHRcdGZpbmlzaGVkTWVzc2FnZTogJCgnPGRpdj4nKS50ZXh0KG1lc3NhZ2VzLm5vTW9yZUxpbmtzKS5oaWRlKCksXG5cdFx0cGFnZVRpdGxlTGluZTogJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LXBhZ2V0aXRsZWxpbmUnKSxcblx0XHRwZW5kaW5nRWRpdENvdW50ZXI6ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWVkaXRjb3VudGVyJyksXG5cdFx0Y29udGV4dDogJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWNvbnRleHQnKSxcblx0XHR1bmRvQnV0dG9uOiBjcmVhdGVCdXR0b24obWVzc2FnZXMudW5kbywgdW5kbyksXG5cdFx0b21pdEJ1dHRvbjogY3JlYXRlQnV0dG9uKG1lc3NhZ2VzLm9taXQsIG9taXQpLFxuXHRcdGVuZEJ1dHRvbjogY3JlYXRlQnV0dG9uKG1lc3NhZ2VzLmNsb3NlLCBzYXZlQW5kRW5kKSxcblx0XHRyZWZyZXNoQnV0dG9uOiBjcmVhdGVCdXR0b24obWVzc2FnZXMucmVmcmVzaCwgcmVmcmVzaCksXG5cdFx0dGl0bGVBc1RleHRCdXR0b246IGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy50aXRsZUFzVGV4dCwgY2hvb3NlVGl0bGVGcm9tUHJvbXB0KSxcblx0XHRpbnRlbnRpb25hbExpbmtCdXR0b246IGNhbk1hcmtJbnRlbnRpb25hbExpbmtzXG5cdFx0XHQ/IGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy5pbnRlbnRpb25hbExpbmssIGNob29zZUludGVudGlvbmFsTGluaylcblx0XHRcdDogJCgnPHNwYW4+JyksXG5cdFx0ZGlzYW1OZWVkZWRCdXR0b246IGNmZy5kaXNhbU5lZWRlZFRleHQgPyBjcmVhdGVCdXR0b24obWVzc2FnZXMuZGlzYW1OZWVkZWQsIGNob29zZURpc2FtTmVlZGVkKSA6ICQoJzxzcGFuPicpLFxuXHRcdHJlbW92ZUxpbmtCdXR0b246IGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy5yZW1vdmVMaW5rLCBjaG9vc2VMaW5rUmVtb3ZhbCksXG5cdH07XG5cdGNvbnN0IHRvcCA9ICQoJzxkaXY+Jylcblx0XHQuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LXRvcCcpXG5cdFx0LmFwcGVuZChbdWkucGVuZGluZ0VkaXRDb3VudGVyLCB1aS5maW5pc2hlZE1lc3NhZ2UsIHVpLnBhZ2VUaXRsZUxpbmVdKTtcblx0Y29uc3QgbGVmdEJ1dHRvbnMgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdkaXNhbWFzc2lzdC1sZWZ0YnV0dG9ucycpXG5cdFx0LmFwcGVuZChbXG5cdFx0XHR1aS50aXRsZUFzVGV4dEJ1dHRvbixcblx0XHRcdHVpLnJlbW92ZUxpbmtCdXR0b24sXG5cdFx0XHR1aS5pbnRlbnRpb25hbExpbmtCdXR0b24sXG5cdFx0XHR1aS5kaXNhbU5lZWRlZEJ1dHRvbixcblx0XHRcdHVpLm9taXRCdXR0b24sXG5cdFx0XSk7XG5cdGNvbnN0IHJpZ2h0QnV0dG9ucyA9ICQoJzxkaXY+Jylcblx0XHQuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LXJpZ2h0YnV0dG9ucycpXG5cdFx0LmFwcGVuZChbdWkudW5kb0J1dHRvbiwgdWkucmVmcmVzaEJ1dHRvbiwgdWkuZW5kQnV0dG9uXSk7XG5cdGNvbnN0IGFsbEJ1dHRvbnMgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1hbGxidXR0b25zJykuYXBwZW5kKFtsZWZ0QnV0dG9ucywgcmlnaHRCdXR0b25zXSk7XG5cdHVpLmRpc3BsYXkuYXBwZW5kKFt0b3AsIHVpLmNvbnRleHQsIGFsbEJ1dHRvbnNdKTtcblx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0dG9nZ2xlQWN0aW9uQnV0dG9ucyhmYWxzZSk7XG5cdC8vIEluc2VydCB0aGUgVUkgaW4gdGhlIHBhZ2Vcblx0JGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCcpLmJlZm9yZSh1aS5kaXNwbGF5KTtcblx0dWkuZGlzcGxheS5oaWRlKCkuZmFkZUluKCk7XG59O1xuXG4vKiBJZiB0aGVyZSBhcmUgcGVuZGluZyBjaGFuZ2VzLCBzaG93IGEgY29uZmlybSBkaWFsb2cgYmVmb3JlIGNsb3NpbmcgKi9cbmNvbnN0IGFkZFVubG9hZENvbmZpcm0gPSAoKTogdm9pZCA9PiB7XG5cdCQod2luZG93KS5vbignYmVmb3JldW5sb2FkJywgKCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0aWYgKHJ1bm5pbmcgJiYgY2hlY2tBY3R1YWxDaGFuZ2VzKCkpIHtcblx0XHRcdHJldHVybiBtZXNzYWdlcy5wZW5kaW5nO1xuXHRcdH1cblx0XHRpZiAoZWRpdENvdW50ICE9PSAwKSB7XG5cdFx0XHRyZXR1cm4gbWVzc2FnZXMuZWRpdEluUHJvZ3Jlc3M7XG5cdFx0fVxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH0pO1xufTtcblxuLyogTWFyayB0aGUgZGlzYW1iaWd1YXRpb24gb3B0aW9ucyBhcyBzdWNoICovXG5jb25zdCBtYXJrRGlzYW1PcHRpb25zID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBvcHRpb25QYWdlVGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCBvcHRpb25NYXJrZXJzOiBKUXVlcnk8SFRNTEVsZW1lbnQ+W10gPSBbXTtcblx0Z2V0RGlzYW1PcHRpb25zKCkuZWFjaCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgbGluayA9ICQoZWxlbWVudCk7XG5cdFx0Y29uc3QgdGl0bGUgPSBleHRyYWN0UGFnZU5hbWUobGluayk7XG5cdFx0aWYgKCF0aXRsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBvcHRpb25NYXJrZXIgPSAkKCc8YT4nKVxuXHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHQuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LW9wdGlvbm1hcmtlcicpXG5cdFx0XHQudGV4dChtZXNzYWdlcy5vcHRpb25NYXJrZXIpXG5cdFx0XHQub24oJ2NsaWNrJywgKGV2KSA9PiB7XG5cdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGNob29zZVJlcGxhY2VtZW50KHRpdGxlKTtcblx0XHRcdH0pO1xuXHRcdGxpbmsuYWZ0ZXIob3B0aW9uTWFya2VyKTtcblx0XHRvcHRpb25NYXJrZXJzLnB1c2gob3B0aW9uTWFya2VyKTtcblx0XHRvcHRpb25QYWdlVGl0bGVzLnB1c2godGl0bGUpO1xuXHR9KTtcblx0Ly8gTm93IGNoZWNrIHRoZSBkaXNhbWJpZ3VhdGlvbiBvcHRpb25zIGFuZCBkaXNwbGF5IGEgZGlmZmVyZW50IG1lc3NhZ2UgZm9yIHRob3NlIHRoYXQgYXJlXG5cdC8vIGFjdHVhbGx5IHRoZSBzYW1lIGFzIHRoZSB0YXJnZXQgcGFnZSB3aGVyZSB0aGUgbGlua3MgZ28sIGFzIGNob29zaW5nIHRob3NlIG9wdGlvbnMgZG9lc24ndCByZWFsbHlcblx0Ly8gYWNjb21wbGlzaCBhbnl0aGluZyAoZXhjZXB0IGJ5cGFzc2luZyByZWRpcmVjdHMsIHdoaWNoIG1pZ2h0IGJlIHVzZWZ1bCBpbiBzb21lIGNhc2VzKVxuXHRjb25zdCB0YXJnZXRQYWdlID0gZ2V0VGFyZ2V0UGFnZSgpO1xuXHRmZXRjaFJlZGlyZWN0cyhbLi4ub3B0aW9uUGFnZVRpdGxlcywgdGFyZ2V0UGFnZV0pXG5cdFx0LmRvbmUoKHJlZGlyZWN0cykgPT4ge1xuXHRcdFx0Y29uc3QgZW5kVGFyZ2V0UGFnZSA9IHJlc29sdmVSZWRpcmVjdCh0YXJnZXRQYWdlLCByZWRpcmVjdHMpO1xuXHRcdFx0Zm9yIChjb25zdCBbaWksIG9wdGlvblBhZ2VUaXRsZV0gb2Ygb3B0aW9uUGFnZVRpdGxlcy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0Y29uc3QgZW5kT3B0aW9uVGl0bGUgPSByZXNvbHZlUmVkaXJlY3Qob3B0aW9uUGFnZVRpdGxlLCByZWRpcmVjdHMpO1xuXHRcdFx0XHRpZiAoaXNTYW1lUGFnZShvcHRpb25QYWdlVGl0bGUsIHRhcmdldFBhZ2UpKSB7XG5cdFx0XHRcdFx0b3B0aW9uTWFya2Vyc1tpaV0/LnRleHQobWVzc2FnZXMudGFyZ2V0T3B0aW9uTWFya2VyKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtY3Vycm9wdGlvbm1hcmtlcicpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGlzU2FtZVBhZ2UoZW5kT3B0aW9uVGl0bGUsIGVuZFRhcmdldFBhZ2UpKSB7XG5cdFx0XHRcdFx0b3B0aW9uTWFya2Vyc1tpaV0/LnRleHQobWVzc2FnZXMucmVkaXJlY3RPcHRpb25NYXJrZXIpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1jdXJyb3B0aW9ubWFya2VyJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXHRcdC5mYWlsKGVycm9yKTtcbn07XG5cbi8qIENoZWNrIHdoZXRoZXIgaW50ZW50aW9uYWwgbGlua3MgdG8gZGlzYW1iaWd1YXRpb24gcGFnZXMgY2FuIGJlIGV4cGxpY2l0bHkgbWFya2VkIGFzIHN1Y2ggaW4gdGhpcyB3aWtpLiBJZiBzbywgZW5zdXJlIHRoYXQgYSBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgcGFnZSBleGlzdHMuIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZSAqL1xuY29uc3QgZW5zdXJlREFCRXhpc3RzID0gKCk6IEpRdWVyeS5Qcm9taXNlPGJvb2xlYW4+ID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkPGJvb2xlYW4+KCk7XG5cdGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcblx0Ly8gVGhhdCBjb25jZXB0IGRvZXNuJ3QgZXhpc3QgaW4gdGhpcyB3aWtpLlxuXHRpZiAoIWNmZy5pbnRlbnRpb25hbExpbmtPcHRpb24pIHtcblx0XHRkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcblx0XHQvLyBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgZXhpc3RzOiBpdCdzIHRoZSBjdXJyZW50IHBhZ2UuXG5cdH0gZWxzZSBpZiAobmV3IFJlZ0V4cChjZmcuZGlzYW1SZWdFeHApLmV4ZWModGl0bGUpKSB7XG5cdFx0ZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBkaXNhbVRpdGxlID0gY2ZnLmRpc2FtRm9ybWF0LnJlcGxhY2UoJyQxJywgdGl0bGUpO1xuXHRcdGxvYWRQYWdlKGRpc2FtVGl0bGUpXG5cdFx0XHQuZG9uZSgocGFnZSkgPT4ge1xuXHRcdFx0XHQvLyBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgZG9lc24ndCBleGlzdC5cblx0XHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRcdC8vIFdlIHRyeSB0byBjcmVhdGUgaXRcblx0XHRcdFx0XHRwYWdlLmNvbnRlbnQgPSBjZmcucmVkaXJlY3RUb0Rpc2FtLnJlcGxhY2UoJyQxJywgdGl0bGUpO1xuXHRcdFx0XHRcdGNvbnN0IHN1bW1hcnkgPSBtZXNzYWdlcy5yZWRpcmVjdFN1bW1hcnkucmVwbGFjZSgnJDEnLCB0aXRsZSk7XG5cdFx0XHRcdFx0c2F2ZVBhZ2UoZGlzYW1UaXRsZSwgcGFnZSwgc3VtbWFyeSwgZmFsc2UsIHRydWUpXG5cdFx0XHRcdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGVycm9yKGRlc2NyaXB0aW9uKTtcblx0XHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShmYWxzZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQvLyBJdCBkb2VzIGV4aXN0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5mYWlsKChkZXNjcmlwdGlvbikgPT4ge1xuXHRcdFx0XHRlcnJvcihkZXNjcmlwdGlvbik7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoZmFsc2UpO1xuXHRcdFx0fSk7XG5cdH1cblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIENoZWNrIHdoZXRoZXIgdGhlIGVkaXQgY29vbGRvd24gYXBwbGllcyBhbmQgc2V0cyBlZGl0TGltaXQgYWNjb3JkaW5nbHkuIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZSAqL1xuY29uc3QgY2hlY2tFZGl0TGltaXQgPSAoKTogSlF1ZXJ5LlByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8dm9pZD4oKTtcblx0aWYgKGNmZy5lZGl0Q29vbGRvd24gPD0gMCkge1xuXHRcdGVkaXRMaW1pdCA9IGZhbHNlO1xuXHRcdGRlZmVycmVkLnJlc29sdmUoKTtcblx0fSBlbHNlIHtcblx0XHRmZXRjaFJpZ2h0cygpXG5cdFx0XHQuZG9uZSgocmlnaHRzKSA9PiB7XG5cdFx0XHRcdGVkaXRMaW1pdCA9ICFyaWdodHMuaW5jbHVkZXMoJ2JvdCcpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKChkZXNjcmlwdGlvbikgPT4ge1xuXHRcdFx0XHRlcnJvcihkZXNjcmlwdGlvbik7XG5cdFx0XHRcdGVkaXRMaW1pdCA9IHRydWU7XG5cdFx0XHR9KVxuXHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoKTtcblx0XHRcdH0pO1xuXHR9XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBGaW5kIGFuZCBhc2sgdGhlIHVzZXIgdG8gZml4IGFsbCB0aGUgaW5jb21pbmcgbGlua3MgdG8gdGhlIGRpc2FtYmlndWF0aW9uIChcInRhcmdldFwiKSBwYWdlIGZyb20gYSBzaW5nbGUgXCJvcmlnaW5cIiBwYWdlICovXG5jb25zdCBkb1BhZ2UgPSAoKTogdm9pZCA9PiB7XG5cdGlmIChwYWdlQ2hhbmdlcy5sZW5ndGggPiBjZmcuaGlzdG9yeVNpemUpIHtcblx0XHRjb25zdCBvbGRlc3RDaGFuZ2UgPSBwYWdlQ2hhbmdlcy5zaGlmdCgpO1xuXHRcdGlmIChvbGRlc3RDaGFuZ2UpIHtcblx0XHRcdGFwcGx5Q2hhbmdlKG9sZGVzdENoYW5nZSk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0IHBhZ2VUaXRsZSA9IGxpbmtzLnNoaWZ0KCk7XG5cdGlmIChwYWdlVGl0bGUpIHtcblx0XHRjdXJyZW50UGFnZVRpdGxlID0gcGFnZVRpdGxlO1xuXHRcdGRpc3BsYXllZFBhZ2VzW3BhZ2VUaXRsZV0gPSB0cnVlO1xuXHRcdHRvZ2dsZUFjdGlvbkJ1dHRvbnMoZmFsc2UpO1xuXHRcdGxvYWRQYWdlKHBhZ2VUaXRsZSlcblx0XHRcdC5kb25lKChkYXRhKSA9PiB7XG5cdFx0XHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycyA9IGRhdGE7XG5cdFx0XHRcdGN1cnJlbnRMaW5rID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRkb0xpbmsoKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbChlcnJvcik7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgdGFyZ2V0UGFnZSA9IGdldFRhcmdldFBhZ2UoKTtcblx0XHRnZXRCYWNrbGlua3ModGFyZ2V0UGFnZSlcblx0XHRcdC5kb25lKChiYWNrbGlua3MsIHBhZ2VUaXRsZXMpID0+IHtcblx0XHRcdFx0Y29uc3QgcGVuZGluZzogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4gPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCBlbCBvZiBwZW5kaW5nU2F2ZXMpIHtcblx0XHRcdFx0XHRwZW5kaW5nW2VsLmFyZ3NbMF1dID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwb3NzaWJsZUJhY2tsaW5rRGVzdGluYXRpb25zID0gcGFnZVRpdGxlcy5maWx0ZXIoKHQpID0+IHtcblx0XHRcdFx0XHRpZiAodCA9PT0gdGFyZ2V0UGFnZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiByZW1vdmVEaXNhbSh0KSAhPT0gdGFyZ2V0UGFnZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIE9ubHkgaW5jb21pbmcgbGlua3MgZnJvbSBwYWdlcyB3ZSBoYXZlbid0IHNlZW4geWV0IGFuZCB3ZSBhcmVuJ3QgY3VycmVudGx5XG5cdFx0XHRcdC8vIHNhdmluZyAoZGlzcGxheWVkUGFnZXMgaXMgcmVzZXQgd2hlbiB0aGUgdG9vbCBpcyBjbG9zZWQgYW5kIG9wZW5lZCBhZ2Fpbixcblx0XHRcdFx0Ly8gd2hpbGUgdGhlIGxpc3Qgb2YgcGVuZGluZyBjaGFuZ2VzIGlzbid0OyBpZiB0aGUgZWRpdCBjb29sZG93biBpcyBkaXNhYmxlZCxcblx0XHRcdFx0Ly8gaXQgd2lsbCBiZSBlbXB0eSlcblx0XHRcdFx0bGlua3MgPSBiYWNrbGlua3MuZmlsdGVyKChlbCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAhZGlzcGxheWVkUGFnZXNbZWxdICYmICFwZW5kaW5nW2VsXTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChsaW5rcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRkb1BhZ2UoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR1cGRhdGVDb250ZXh0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuZmFpbChlcnJvcik7XG5cdH1cbn07XG5cbi8qIEZpbmQgYW5kIGFzayB0aGUgdXNlciB0byBmaXggYSBzaW5nbGUgaW5jb21pbmcgbGluayB0byB0aGUgZGlzYW1iaWd1YXRpb24gKFwidGFyZ2V0XCIpIHBhZ2UgKi9cbmNvbnN0IGRvTGluayA9ICgpOiB2b2lkID0+IHtcblx0Y3VycmVudExpbmsgPSBleHRyYWN0TGlua1RvUGFnZShcblx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCxcblx0XHRwb3NzaWJsZUJhY2tsaW5rRGVzdGluYXRpb25zLFxuXHRcdGN1cnJlbnRMaW5rID8gY3VycmVudExpbmsuZW5kIDogMFxuXHQpO1xuXHRpZiAoY3VycmVudExpbmspIHtcblx0XHR1cGRhdGVDb250ZXh0KCk7XG5cdH0gZWxzZSB7XG5cdFx0ZG9QYWdlKCk7XG5cdH1cbn07XG5cbi8qIFJlcGxhY2UgdGhlIHRhcmdldCBvZiBhIGxpbmsgd2l0aCBhIGRpZmZlcmVudCBvbmVcbiAqIHBhZ2VUaXRsZTogTmV3IGxpbmsgdGFyZ2V0XG4gKiBleHRyYTogQWRkaXRpb25hbCB0ZXh0IGFmdGVyIHRoZSBsaW5rIChvcHRpb25hbClcbiAqIHN1bW1hcnk6IENoYW5nZSBzdW1tYXJ5IChvcHRpb25hbClcbiAqL1xuY29uc3QgY2hvb3NlUmVwbGFjZW1lbnQgPSAocGFnZVRpdGxlPzogc3RyaW5nLCBleHRyYT86IHN0cmluZywgc3VtbWFyeT86IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRpZiAoIWNob29zaW5nIHx8ICFjdXJyZW50TGluaykge1xuXHRcdHJldHVybjtcblx0fVxuXHRjaG9vc2luZyA9IGZhbHNlO1xuXHRjb25zdCBjaGFuZ2VTdW1tYXJ5ID1cblx0XHRzdW1tYXJ5IHx8IChwYWdlVGl0bGUgPyBtZXNzYWdlcy5zdW1tYXJ5Q2hhbmdlZC5yZXBsYWNlKCckMScsIHBhZ2VUaXRsZSkgOiBtZXNzYWdlcy5zdW1tYXJ5T21pdHRlZCk7XG5cdGFkZENoYW5nZShjdXJyZW50UGFnZVRpdGxlLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluaywgY2hhbmdlU3VtbWFyeSk7XG5cdGlmIChwYWdlVGl0bGUgJiYgKHBhZ2VUaXRsZSAhPT0gZ2V0VGFyZ2V0UGFnZSgpIHx8IGV4dHJhKSkge1xuXHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50ID0gcmVwbGFjZUxpbmsoY3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQsIHBhZ2VUaXRsZSwgY3VycmVudExpbmssIGV4dHJhID8/ICcnKTtcblx0fVxuXHRkb0xpbmsoKTtcbn07XG5cbi8qIFJlcGxhY2UgdGhlIGxpbmsgd2l0aCBhbiBleHBsaWNpdCBsaW5rIHRvIHRoZSBkaXNhbWJpZ3VhdGlvbiBwYWdlICovXG5jb25zdCBjaG9vc2VJbnRlbnRpb25hbExpbmsgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IGRpc2FtVGl0bGUgPSBjZmcuZGlzYW1Gb3JtYXQucmVwbGFjZSgnJDEnLCBnZXRUYXJnZXRQYWdlKCkpO1xuXHRjaG9vc2VSZXBsYWNlbWVudChkaXNhbVRpdGxlLCAnJywgbWVzc2FnZXMuc3VtbWFyeUludGVudGlvbmFsKTtcbn07XG5cbi8qIFByb21wdCBmb3IgYW4gYWx0ZXJuYXRpdmUgbGluayB0YXJnZXQgYW5kIHVzZSBpdCBhcyBhIHJlcGxhY2VtZW50ICovXG5jb25zdCBjaG9vc2VUaXRsZUZyb21Qcm9tcHQgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHRpdGxlID0gcHJvbXB0KG1lc3NhZ2VzLnRpdGxlQXNUZXh0UHJvbXB0KTtcblx0aWYgKHRpdGxlICE9PSBudWxsKSB7XG5cdFx0Y2hvb3NlUmVwbGFjZW1lbnQodGl0bGUpO1xuXHR9XG59O1xuXG4vKiBSZW1vdmUgdGhlIGN1cnJlbnQgbGluaywgbGVhdmluZyB0aGUgdGV4dCB1bmNoYW5nZWQgKi9cbmNvbnN0IGNob29zZUxpbmtSZW1vdmFsID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoY2hvb3NpbmcgJiYgY3VycmVudExpbmspIHtcblx0XHRjb25zdCBzdW1tYXJ5ID0gbWVzc2FnZXMuc3VtbWFyeVJlbW92ZWQ7XG5cdFx0YWRkQ2hhbmdlKGN1cnJlbnRQYWdlVGl0bGUsIGN1cnJlbnRQYWdlUGFyYW1ldGVycywgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQsIGN1cnJlbnRMaW5rLCBzdW1tYXJ5KTtcblx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCA9IHJlbW92ZUxpbmtUZXh0KGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluayk7XG5cdFx0ZG9MaW5rKCk7XG5cdH1cbn07XG5cbi8qIEFkZCBhIFwiZGlzYW1iaWd1YXRpb24gbmVlZGVkXCIgdGVtcGxhdGUgYWZ0ZXIgdGhlIGxpbmsgKi9cbmNvbnN0IGNob29zZURpc2FtTmVlZGVkID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoY3VycmVudExpbmspIHtcblx0XHRjaG9vc2VSZXBsYWNlbWVudChjdXJyZW50TGluay50aXRsZSwgY2ZnLmRpc2FtTmVlZGVkVGV4dCwgbWVzc2FnZXMuc3VtbWFyeUhlbHBOZWVkZWQpO1xuXHR9XG59O1xuXG4vKiBVbmRvIHRoZSBsYXN0IGNoYW5nZSAqL1xuY29uc3QgdW5kbyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3QgbGFzdFBhZ2UgPSBwYWdlQ2hhbmdlcy5hdCgtMSk7XG5cdGlmICghbGFzdFBhZ2UpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGN1cnJlbnRQYWdlVGl0bGUgIT09IGxhc3RQYWdlLnRpdGxlKSB7XG5cdFx0bGlua3MudW5zaGlmdChjdXJyZW50UGFnZVRpdGxlKTtcblx0XHRjdXJyZW50UGFnZVRpdGxlID0gbGFzdFBhZ2UudGl0bGU7XG5cdH1cblx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzID0gbGFzdFBhZ2UucGFnZTtcblx0Y29uc3QgY29udGVudEJlZm9yZSA9IGxhc3RQYWdlLmNvbnRlbnRCZWZvcmUucG9wKCk7XG5cdGlmIChjb250ZW50QmVmb3JlICE9PSB1bmRlZmluZWQpIHtcblx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCA9IGNvbnRlbnRCZWZvcmU7XG5cdH1cblx0Y3VycmVudExpbmsgPSBsYXN0UGFnZS5saW5rcy5wb3AoKTtcblx0bGFzdFBhZ2Uuc3VtbWFyeS5wb3AoKTtcblx0aWYgKCFsYXN0UGFnZS5jb250ZW50QmVmb3JlLmxlbmd0aCkge1xuXHRcdHBhZ2VDaGFuZ2VzLnBvcCgpO1xuXHR9XG5cdHVwZGF0ZUNvbnRleHQoKTtcbn07XG5cbi8qIE9taXQgdGhlIGN1cnJlbnQgbGluayB3aXRob3V0IG1ha2luZyBhIGNoYW5nZSAqL1xuY29uc3Qgb21pdCA9ICgpOiB2b2lkID0+IHtcblx0Y2hvb3NlUmVwbGFjZW1lbnQoKTtcbn07XG5cbi8qIFNhdmUgYWxsIHRoZSBwZW5kaW5nIGNoYW5nZXMgYW5kIHJlc3RhcnQgdGhlIHRvb2wuICovXG5jb25zdCByZWZyZXNoID0gKCk6IHZvaWQgPT4ge1xuXHRzYXZlQW5kRW5kKCk7XG5cdHN0YXJ0KCk7XG59O1xuXG4vKiBFbmFibGUgb3IgZGlzYWJsZSB0aGUgYnV0dG9ucyB0aGF0IGNhbiBwZXJmb3JtIGFjdGlvbnMgb24gYSBwYWdlIG9yIGNoYW5nZSB0aGUgY3VycmVudCBsaW5rLlxuICogZW5hYmxlZDogV2hldGhlciB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYnV0dG9uc1xuICovXG5jb25zdCB0b2dnbGVBY3Rpb25CdXR0b25zID0gKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0Y29uc3QgYWZmZWN0ZWRCdXR0b25zID0gW1xuXHRcdHVpLm9taXRCdXR0b24sXG5cdFx0dWkudGl0bGVBc1RleHRCdXR0b24sXG5cdFx0dWkucmVtb3ZlTGlua0J1dHRvbixcblx0XHR1aS5pbnRlbnRpb25hbExpbmtCdXR0b24sXG5cdFx0dWkuZGlzYW1OZWVkZWRCdXR0b24sXG5cdFx0dWkudW5kb0J1dHRvbixcblx0XTtcblx0Zm9yIChjb25zdCBidXR0b24gb2YgYWZmZWN0ZWRCdXR0b25zKSB7XG5cdFx0YnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgIWVuYWJsZWQpO1xuXHR9XG59O1xuXG4vKiBTaG93IG9yIGhpZGUgdGhlICdubyBtb3JlIGxpbmtzJyBtZXNzYWdlXG4gKiBzaG93OiBXaGV0aGVyIHRvIHNob3cgb3IgaGlkZSB0aGUgbWVzc2FnZVxuICovXG5jb25zdCB0b2dnbGVGaW5pc2hlZE1lc3NhZ2UgPSAoc2hvdzogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHR0b2dnbGVBY3Rpb25CdXR0b25zKCFzaG93KTtcblx0dWkudW5kb0J1dHRvbi5wcm9wKCdkaXNhYmxlZCcsICFwYWdlQ2hhbmdlcy5sZW5ndGgpO1xuXHR1aS5maW5pc2hlZE1lc3NhZ2UudG9nZ2xlKHNob3cpO1xuXHR1aS5wYWdlVGl0bGVMaW5lLnRvZ2dsZSghc2hvdyk7XG5cdHVpLmNvbnRleHQudG9nZ2xlKCFzaG93KTtcbn07XG5cbmNvbnN0IHRvZ2dsZVBlbmRpbmdFZGl0Qm94ID0gKHNob3c6IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGlmICghcGVuZGluZ0VkaXRCb3ggfHwgIXBlbmRpbmdFZGl0Qm94VGV4dCkge1xuXHRcdHBlbmRpbmdFZGl0Qm94ID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYm94IGRpc2FtYXNzaXN0LXBlbmRpbmdlZGl0Ym94Jyk7XG5cdFx0cGVuZGluZ0VkaXRCb3hUZXh0ID0gJCgnPGRpdj4nKTtcblx0XHRwZW5kaW5nRWRpdEJveC5hcHBlbmQocGVuZGluZ0VkaXRCb3hUZXh0KS5oaWRlKCk7XG5cdFx0aWYgKGVkaXRMaW1pdCkge1xuXHRcdFx0cGVuZGluZ0VkaXRCb3guYXBwZW5kKCQoJzxkaXY+JykudGV4dChtZXNzYWdlcy5wZW5kaW5nRWRpdEJveExpbWl0ZWQpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1zdWJ0aXRsZScpKTtcblx0XHR9XG5cdFx0JGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCcpLmJlZm9yZShwZW5kaW5nRWRpdEJveCk7XG5cdFx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0fVxuXHRpZiAoc2hvdykge1xuXHRcdHBlbmRpbmdFZGl0Qm94LmZhZGVJbigpO1xuXHR9IGVsc2Uge1xuXHRcdHBlbmRpbmdFZGl0Qm94LmZhZGVPdXQoKTtcblx0fVxufTtcblxuY29uc3Qgbm90aWZ5Q29tcGxldGlvbiA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGNvbnN0IG9sZFRpdGxlID0gZG9jdW1lbnQudGl0bGU7XG5cdGRvY3VtZW50LnRpdGxlID0gbWVzc2FnZXMubm90aWZ5Q2hhcmFjdGVyICsgZG9jdW1lbnQudGl0bGU7XG5cdCRib2R5Lm9uZSgnbW91c2Vtb3ZlJywgKCkgPT4ge1xuXHRcdGRvY3VtZW50LnRpdGxlID0gb2xkVGl0bGU7XG5cdH0pO1xufTtcblxuLyogVXBkYXRlIHRoZSBkaXNwbGF5ZWQgaW5mb3JtYXRpb24gdG8gbWF0Y2ggdGhlIGN1cnJlbnQgbGluayBvciBsYWNrIHRoZXJlb2YgKi9cbmNvbnN0IHVwZGF0ZUNvbnRleHQgPSAoKTogdm9pZCA9PiB7XG5cdHVwZGF0ZUVkaXRDb3VudGVyKCk7XG5cdGlmIChjdXJyZW50TGluaykge1xuXHRcdHVpLnBhZ2VUaXRsZUxpbmUuaHRtbChcblx0XHRcdG1lc3NhZ2VzLnBhZ2VUaXRsZUxpbmVcblx0XHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdFx0JyQxJyxcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybChjdXJyZW50UGFnZVRpdGxlLCB7XG5cdFx0XHRcdFx0XHRyZWRpcmVjdDogJ25vJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5yZXBsYWNlKCckMicsIG13Lmh0bWwuZXNjYXBlKGN1cnJlbnRQYWdlVGl0bGUpKVxuXHRcdCk7XG5cdFx0Y29uc3QgY29udGV4dCA9IGV4dHJhY3RDb250ZXh0KGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluayk7XG5cdFx0dWkuY29udGV4dFxuXHRcdFx0LmVtcHR5KClcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dChjb250ZXh0WzBdKSlcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dChjb250ZXh0WzFdKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtaW5jbGluaycpKVxuXHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS50ZXh0KGNvbnRleHRbMl0pKTtcblx0XHRjb25zdCBudW1MaW5lcyA9IE1hdGguY2VpbCgodWkuY29udGV4dC5oZWlnaHQoKSA/PyAwKSAvIE51bWJlci5wYXJzZUZsb2F0KHVpLmNvbnRleHQuY3NzKCdsaW5lLWhlaWdodCcpKSk7XG5cdFx0aWYgKG51bUxpbmVzIDwgY2ZnLm51bUNvbnRleHRMaW5lcykge1xuXHRcdFx0Ly8gQWRkIGNmZy5udW1Db250ZXh0TGluZXMgLSBudW1MaW5lcyArIDEgbGluZSBicmVha3MsIHNvIHRoYXQgdGhlIHRvdGFsIG51bWJlclxuXHRcdFx0Ly8gb2YgbGluZXMgaXMgY2ZnLm51bUNvbnRleHRMaW5lc1xuXHRcdFx0dWkuY29udGV4dC5hcHBlbmQoXG5cdFx0XHRcdEFycmF5LmZyb20oe1xuXHRcdFx0XHRcdGxlbmd0aDogY2ZnLm51bUNvbnRleHRMaW5lcyAtIG51bUxpbmVzICsgMixcblx0XHRcdFx0fSkuam9pbignPGJyPicpXG5cdFx0XHQpO1xuXHRcdH1cblx0XHR0b2dnbGVGaW5pc2hlZE1lc3NhZ2UoZmFsc2UpO1xuXHRcdHVpLnVuZG9CdXR0b24ucHJvcCgnZGlzYWJsZWQnLCAhcGFnZUNoYW5nZXMubGVuZ3RoKTtcblx0XHR1aS5yZW1vdmVMaW5rQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLnJlZGlyZWN0KTtcblx0XHR1aS5pbnRlbnRpb25hbExpbmtCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMucmVkaXJlY3QpO1xuXHRcdHVpLmRpc2FtTmVlZGVkQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLnJlZGlyZWN0IHx8IGN1cnJlbnRMaW5rLmhhc0Rpc2FtVGVtcGxhdGUpO1xuXHRcdGNob29zaW5nID0gdHJ1ZTtcblx0fSBlbHNlIHtcblx0XHR0b2dnbGVGaW5pc2hlZE1lc3NhZ2UodHJ1ZSk7XG5cdH1cbn07XG5cbi8qIFVwZGF0ZSB0aGUgY291bnQgb2YgcGVuZGluZyBjaGFuZ2VzICovXG5jb25zdCB1cGRhdGVFZGl0Q291bnRlciA9ICgpOiB2b2lkID0+IHtcblx0aWYgKHVpLnBlbmRpbmdFZGl0Q291bnRlcikge1xuXHRcdHVpLnBlbmRpbmdFZGl0Q291bnRlci50ZXh0KFxuXHRcdFx0bWVzc2FnZXMucGVuZGluZ0VkaXRDb3VudGVyXG5cdFx0XHRcdC5yZXBsYWNlKCckMScsIGVkaXRDb3VudC50b1N0cmluZygpKVxuXHRcdFx0XHQucmVwbGFjZSgnJDInLCBjb3VudEFjdHVhbGx5Q2hhbmdlZEZ1bGx5Q2hlY2tlZFBhZ2VzKCkudG9TdHJpbmcoKSlcblx0XHQpO1xuXHR9XG5cdGlmIChwZW5kaW5nRWRpdEJveCAmJiBwZW5kaW5nRWRpdEJveFRleHQpIHtcblx0XHRpZiAoZWRpdENvdW50ID09PSAwICYmICFydW5uaW5nKSB7XG5cdFx0XHR0b2dnbGVQZW5kaW5nRWRpdEJveChmYWxzZSk7XG5cdFx0XHRub3RpZnlDb21wbGV0aW9uKCk7XG5cdFx0fVxuXHRcdGxldCB0ZXh0Q29udGVudCA9IGVkaXRDb3VudC50b1N0cmluZygpO1xuXHRcdGlmIChlZGl0TGltaXQpIHtcblx0XHRcdHRleHRDb250ZW50ID0gbWVzc2FnZXMucGVuZGluZ0VkaXRCb3hUaW1lRXN0aW1hdGlvblxuXHRcdFx0XHQucmVwbGFjZSgnJDEnLCB0ZXh0Q29udGVudClcblx0XHRcdFx0LnJlcGxhY2UoJyQyJywgc2Vjb25kc1RvSEhNTVNTKGNmZy5lZGl0Q29vbGRvd24gKiBlZGl0Q291bnQpKTtcblx0XHR9XG5cdFx0cGVuZGluZ0VkaXRCb3hUZXh0LnRleHQobWVzc2FnZXMucGVuZGluZ0VkaXRCb3gucmVwbGFjZSgnJDEnLCB0ZXh0Q29udGVudCkpO1xuXHR9XG59O1xuXG4vKiBBcHBseSB0aGUgY2hhbmdlcyBtYWRlIHRvIGFuIFwib3JpZ2luXCIgcGFnZVxuICogcGFnZUNoYW5nZTogQ2hhbmdlIHRoYXQgd2lsbCBiZSBzYXZlZFxuICovXG5jb25zdCBhcHBseUNoYW5nZSA9IChwYWdlQ2hhbmdlOiBQYWdlQ2hhbmdlKTogdm9pZCA9PiB7XG5cdGlmIChwYWdlQ2hhbmdlLnBhZ2UuY29udGVudCAhPT0gcGFnZUNoYW5nZS5jb250ZW50QmVmb3JlWzBdKSB7XG5cdFx0ZWRpdENvdW50Kys7XG5cdFx0Y29uc3QgY2hhbmdlU3VtbWFyaWVzID0gcGFnZUNoYW5nZS5zdW1tYXJ5LmpvaW4obWVzc2FnZXMuc3VtbWFyeVNlcGFyYXRvcik7XG5cdFx0Y29uc3Qgc3VtbWFyeSA9IG1lc3NhZ2VzLnN1bW1hcnkucmVwbGFjZSgnJDEnLCBnZXRUYXJnZXRQYWdlKCkpLnJlcGxhY2UoJyQyJywgY2hhbmdlU3VtbWFyaWVzKTtcblx0XHRjb25zdCBzYXZlOiBTYXZlRnVuY3Rpb24gPSBlZGl0TGltaXQgPyBzYXZlV2l0aENvb2xkb3duIDogc2F2ZVBhZ2U7XG5cdFx0c2F2ZShwYWdlQ2hhbmdlLnRpdGxlLCBwYWdlQ2hhbmdlLnBhZ2UsIHN1bW1hcnksIHRydWUsIHRydWUpXG5cdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0aWYgKGVkaXRDb3VudCA+IDApIHtcblx0XHRcdFx0XHRlZGl0Q291bnQtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHR1cGRhdGVFZGl0Q291bnRlcigpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKGVycm9yKTtcblx0XHR1cGRhdGVFZGl0Q291bnRlcigpO1xuXHR9XG59O1xuXG4vKiBTYXZlIGFsbCB0aGUgcGVuZGluZyBjaGFuZ2VzICovXG5jb25zdCBhcHBseUFsbENoYW5nZXMgPSAoKTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3QgcGFnZUNoYW5nZSBvZiBwYWdlQ2hhbmdlcykge1xuXHRcdGFwcGx5Q2hhbmdlKHBhZ2VDaGFuZ2UpO1xuXHR9XG5cdHBhZ2VDaGFuZ2VzID0gW107XG59O1xuXG4vKiBSZWNvcmQgYSBuZXcgcGVuZGluZyBjaGFuZ2VcbiAqIHBhZ2VUaXRsZTogVGl0bGUgb2YgdGhlIHBhZ2VcbiAqIHBhZ2U6IENvbnRlbnQgb2YgdGhlIHBhZ2VcbiAqIG9sZENvbnRlbnQ6IENvbnRlbnQgb2YgdGhlIHBhZ2UgYmVmb3JlIHRoZSBjaGFuZ2VcbiAqIGxpbms6IExpbmsgdGhhdCBoYXMgYmVlbiBjaGFuZ2VkXG4gKiBzdW1tYXJ5OiBDaGFuZ2Ugc3VtbWFyeVxuICovXG5jb25zdCBhZGRDaGFuZ2UgPSAocGFnZVRpdGxlOiBzdHJpbmcsIHBhZ2U6IFBhZ2VEYXRhLCBvbGRDb250ZW50OiBzdHJpbmcsIGxpbms6IExpbmssIHN1bW1hcnk6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRpZiAoIXBhZ2VDaGFuZ2VzLmxlbmd0aCB8fCBwYWdlQ2hhbmdlcy5hdCgtMSk/LnRpdGxlICE9PSBwYWdlVGl0bGUpIHtcblx0XHRwYWdlQ2hhbmdlcy5wdXNoKHtcblx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHRwYWdlLFxuXHRcdFx0Y29udGVudEJlZm9yZTogW10sXG5cdFx0XHRsaW5rczogW10sXG5cdFx0XHRzdW1tYXJ5OiBbXSxcblx0XHR9KTtcblx0fVxuXHRjb25zdCBsYXN0UGFnZUNoYW5nZSA9IHBhZ2VDaGFuZ2VzLmF0KC0xKTtcblx0aWYgKCFsYXN0UGFnZUNoYW5nZSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRsYXN0UGFnZUNoYW5nZS5jb250ZW50QmVmb3JlLnB1c2gob2xkQ29udGVudCk7XG5cdGxhc3RQYWdlQ2hhbmdlLmxpbmtzLnB1c2gobGluayk7XG5cdGxhc3RQYWdlQ2hhbmdlLnN1bW1hcnkucHVzaChzdW1tYXJ5KTtcbn07XG5cbi8qIENoZWNrIHdoZXRoZXIgYWN0dWFsIGNoYW5nZXMgYXJlIHN0b3JlZCBpbiB0aGUgaGlzdG9yeSBhcnJheSAqL1xuY29uc3QgY2hlY2tBY3R1YWxDaGFuZ2VzID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gY291bnRBY3R1YWxDaGFuZ2VzKCkgIT09IDA7XG59O1xuXG4vKiBSZXR1cm4gdGhlIG51bWJlciBvZiBlbnRyaWVzIGluIHRoZSBoaXN0b3J5IGFycmF5IHRoYXQgcmVwcmVzZW50IGFjdHVhbCBjaGFuZ2VzICovXG5jb25zdCBjb3VudEFjdHVhbENoYW5nZXMgPSAoKTogbnVtYmVyID0+IHtcblx0bGV0IGNoYW5nZUNvdW50ID0gMDtcblx0Zm9yIChjb25zdCBwYWdlQ2hhbmdlIG9mIHBhZ2VDaGFuZ2VzKSB7XG5cdFx0aWYgKHBhZ2VDaGFuZ2UucGFnZS5jb250ZW50ICE9PSBwYWdlQ2hhbmdlLmNvbnRlbnRCZWZvcmVbMF0pIHtcblx0XHRcdGNoYW5nZUNvdW50Kys7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBjaGFuZ2VDb3VudDtcbn07XG5cbi8qIFJldHVybiB0aGUgbnVtYmVyIG9mIGNoYW5nZWQgcGFnZXMgaW4gdGhlIGhpc3RvcnkgYXJyYXksIGlnbm9yaW5nIHRoZSBsYXN0IGVudHJ5IGlmIHdlIGFyZW4ndCBkb25lIHdpdGggdGhhdCBwYWdlIHlldCAqL1xuY29uc3QgY291bnRBY3R1YWxseUNoYW5nZWRGdWxseUNoZWNrZWRQYWdlcyA9ICgpOiBudW1iZXIgPT4ge1xuXHRsZXQgY2hhbmdlQ291bnQgPSBjb3VudEFjdHVhbENoYW5nZXMoKTtcblx0Y29uc3QgbGFzdENoYW5nZSA9IHBhZ2VDaGFuZ2VzLmF0KC0xKTtcblx0aWYgKFxuXHRcdGxhc3RDaGFuZ2UgJiZcblx0XHRsYXN0Q2hhbmdlLnRpdGxlID09PSBjdXJyZW50UGFnZVRpdGxlICYmXG5cdFx0Y3VycmVudExpbmsgJiZcblx0XHRsYXN0Q2hhbmdlLnBhZ2UuY29udGVudCAhPT0gbGFzdENoYW5nZS5jb250ZW50QmVmb3JlWzBdXG5cdCkge1xuXHRcdGNoYW5nZUNvdW50LS07XG5cdH1cblx0cmV0dXJuIGNoYW5nZUNvdW50O1xufTtcblxuLyogRmluZCB0aGUgbGlua3MgdG8gZGlzYW1iaWd1YXRpb24gb3B0aW9ucyBpbiBhIGRpc2FtYmlndWF0aW9uIHBhZ2UgKi9cbmNvbnN0IGdldERpc2FtT3B0aW9ucyA9ICgpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdHJldHVybiAkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0IGEnKS5maWx0ZXIoKF9pbmRleCwgZWxlbWVudCkgPT4ge1xuXHRcdHJldHVybiBCb29sZWFuKGV4dHJhY3RQYWdlTmFtZSgkKGVsZW1lbnQpKSk7XG5cdH0pO1xufTtcblxuLyogU2F2ZSBhbGwgdGhlIHBlbmRpbmcgY2hhbmdlcyBhbmQgY2xvc2UgdGhlIHRvb2wgKi9cbmNvbnN0IHNhdmVBbmRFbmQgPSAoKTogdm9pZCA9PiB7XG5cdGFwcGx5QWxsQ2hhbmdlcygpO1xuXHRlbmQoKTtcbn07XG5cbi8qIENsb3NlIHRoZSB0b29sICovXG5jb25zdCBlbmQgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRjb25zdCBjdXJyZW50VG9vbFVJID0gdWkuZGlzcGxheTtcblx0Y2hvb3NpbmcgPSBmYWxzZTtcblx0cnVubmluZyA9IGZhbHNlO1xuXHRzdGFydExpbmsucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdCRib2R5LmZpbmQoJy5kaXNhbWFzc2lzdC1vcHRpb25tYXJrZXInKS5yZW1vdmUoKTtcblx0Y3VycmVudFRvb2xVSS5mYWRlT3V0KHtcblx0XHRjb21wbGV0ZSgpIHtcblx0XHRcdGN1cnJlbnRUb29sVUkucmVtb3ZlKCk7XG5cdFx0XHRpZiAoZWRpdENvdW50KSB7XG5cdFx0XHRcdHRvZ2dsZVBlbmRpbmdFZGl0Qm94KHRydWUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH0pO1xufTtcblxuLyogRGlzcGxheSBhbiBlcnJvciBtZXNzYWdlICovXG5jb25zdCBlcnJvciA9IChlcnJvckRlc2NyaXB0aW9uOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGNvbnN0IGVycm9yQm94ID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYm94IGRpc2FtYXNzaXN0LWVycm9yYm94Jyk7XG5cdGVycm9yQm94LnRleHQobWVzc2FnZXMuZXJyb3IucmVwbGFjZSgnJDEnLCBlcnJvckRlc2NyaXB0aW9uKSk7XG5cdGVycm9yQm94LmFwcGVuZChcblx0XHRjcmVhdGVCdXR0b24obWVzc2FnZXMuZGlzbWlzc0Vycm9yLCAoKSA9PiB7XG5cdFx0XHRlcnJvckJveC5mYWRlT3V0KCk7XG5cdFx0fSkuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWVycm9yYnV0dG9uJylcblx0KTtcblx0Y29uc3QgdWlJc0luUGxhY2UgPSB1aSAmJiAkLmNvbnRhaW5zKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdWkuZGlzcGxheVswXSEpO1xuXHRjb25zdCBuZXh0RWxlbWVudCA9IHVpSXNJblBsYWNlID8gdWkuZGlzcGxheSA6ICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKTtcblx0bmV4dEVsZW1lbnQuYmVmb3JlKGVycm9yQm94KTtcblx0ZXJyb3JCb3guaGlkZSgpLmZhZGVJbigpO1xufTtcblxuLyogQ2hhbmdlIGEgbGluayBzbyB0aGF0IGl0IHBvaW50cyB0byB0aGUgdGl0bGVcbiAqIHRleHQ6IFRoZSB3aWtpdGV4dCBvZiB0aGUgd2hvbGUgcGFnZVxuICogdGl0bGU6IFRoZSBuZXcgZGVzdGluYXRpb24gb2YgdGhlIGxpbmtcbiAqIGxpbms6IFRoZSBsaW5rIHRoYXQgd2lsbCBiZSBtb2RpZmllZFxuICogZXh0cmE6IFRleHQgdGhhdCB3aWxsIGJlIGFkZGVkIGFmdGVyIHRoZSBsaW5rIChvcHRpb25hbClcbiAqL1xuY29uc3QgcmVwbGFjZUxpbmsgPSAodGV4dDogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBsaW5rOiBMaW5rLCBleHRyYTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IG5ld0NvbnRlbnQ7XG5cdGlmIChpc1NhbWVQYWdlKHRpdGxlLCBsaW5rLmRlc2NyaXB0aW9uKSkge1xuXHRcdG5ld0NvbnRlbnQgPSBsaW5rLmRlc2NyaXB0aW9uO1xuXHR9IGVsc2Uge1xuXHRcdG5ld0NvbnRlbnQgPSBgJHt0aXRsZX18JHtsaW5rLmRlc2NyaXB0aW9ufWA7XG5cdH1cblx0Y29uc3QgbGlua1N0YXJ0ID0gdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBsaW5rLnN0YXJ0KSk7XG5cdGNvbnN0IGxpbmtFbmQgPSB0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIGxpbmsuZW5kKSk7XG5cdHJldHVybiBgJHtsaW5rU3RhcnR9W1ske25ld0NvbnRlbnR9XV0ke2xpbmsuYWZ0ZXJEZXNjcmlwdGlvbn0ke2V4dHJhfSR7bGlua0VuZH1gO1xufTtcblxuLyogUmVtb3ZlIGEgbGluayBmcm9tIHRoZSB0ZXh0XG4gKiB0ZXh0OiBUaGUgd2lraXRleHQgb2YgdGhlIHdob2xlIHBhZ2VcbiAqIGxpbms6IFRoZSBsaW5rIHRoYXQgd2lsbCBiZSByZW1vdmVkXG4gKi9cbmNvbnN0IHJlbW92ZUxpbmtUZXh0ID0gKHRleHQ6IHN0cmluZywgbGluazogTGluayk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGxpbmtTdGFydCA9IHRleHQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbGluay5zdGFydCkpO1xuXHRjb25zdCBsaW5rRW5kID0gdGV4dC5zbGljZShNYXRoLm1heCgwLCBsaW5rLmVuZCkpO1xuXHRyZXR1cm4gbGlua1N0YXJ0ICsgbGluay5kZXNjcmlwdGlvbiArIGxpbmsuYWZ0ZXJEZXNjcmlwdGlvbiArIGxpbmtFbmQ7XG59O1xuXG4vKiBFeHRyYWN0IGEgbGluayBmcm9tIGEgc3RyaW5nIGluIHdpa2kgZm9ybWF0LCBzdGFydGluZyBmcm9tIGEgZ2l2ZW4gaW5kZXguIFJldHVybiBhIGxpbmsgaWYgb25lIGNhbiBiZSBmb3VuZCwgb3RoZXJ3aXNlIHJldHVybiBudWxsLiBUaGUgXCJsaW5rXCIgaW5jbHVkZXMgXCJkaXNhbWJpZ3VhdGlvbiBuZWVkZWRcIiB0ZW1wbGF0ZXMgaW5tZWRpYXRlbHkgZm9sbG93aW5nIHRoZSBsaW5rIHByb3BlclxuICogdGV4dDogVGV4dCBmcm9tIHdoaWNoIHRoZSBsaW5rIHdpbGwgYmUgZXh0cmFjdGVkXG4gKiBsYXN0SW5kZXg6IEluZGV4IGZyb20gd2hpY2ggdGhlIHNlYXJjaCB3aWxsIHN0YXJ0XG4gKi9cbmNvbnN0IGV4dHJhY3RMaW5rID0gKHRleHQ6IHN0cmluZywgbGFzdEluZGV4OiBudW1iZXIpOiBMaW5rIHwgdW5kZWZpbmVkID0+IHtcblx0Ly8gRklYTUU6IE5vdCBhbiBhY3R1YWwgdGl0bGUgcmVnZXggKGxvdHMgb2YgZmFsc2UgcG9zaXRpdmVzXG5cdC8vIGFuZCBzb21lIGZhbHNlIG5lZ2F0aXZlcyksIGJ1dCBob3BlZnVsbHkgZ29vZCBlbm91Z2guXG5cdGNvbnN0IHRpdGxlUmVnZXggPSAvXFxbXFxbKC4qPykoPzpcXHwoLio/KSk/XV0vZztcblx0Ly8gRGl0dG8gZm9yIHRoZSB0ZW1wbGF0ZSByZWdleC4gRGlzYW1iaWd1YXRpb24gbGluayB0ZW1wbGF0ZXNcblx0Ly8gc2hvdWxkIGJlIHNpbXBsZSBlbm91Z2ggZm9yIHRoaXMgbm90IHRvIG1hdHRlciwgdGhvdWdoLlxuXHRjb25zdCB0ZW1wbGF0ZVJlZ2V4ID0gL14oXFx3KltcXHMhKSwuOjs/fV0qKXt7XFxzKihbXnt8fV0rPylcXHMqKD86XFx8W157XSo/KT99fS87XG5cdHRpdGxlUmVnZXgubGFzdEluZGV4ID0gbGFzdEluZGV4O1xuXHRjb25zdCBtYXRjaCA9IHRpdGxlUmVnZXguZXhlYyh0ZXh0KTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBtYXRjaFRpdGxlID0gbWF0Y2hbMV0gPz8gJyc7XG5cdGNvbnN0IG1hdGNoRGVzY3JpcHRpb24gPSBtYXRjaFsyXTtcblx0bGV0IGVuZCA9IG1hdGNoLmluZGV4ICsgNCArIG1hdGNoVGl0bGUubGVuZ3RoICsgKG1hdGNoRGVzY3JpcHRpb24gPyAxICsgbWF0Y2hEZXNjcmlwdGlvbi5sZW5ndGggOiAwKTtcblx0bGV0IGFmdGVyRGVzY3JpcHRpb24gPSAnJztcblx0bGV0IHBvc3NpYmx5QW1iaWd1b3VzID0gdHJ1ZTtcblx0bGV0IGhhc0Rpc2FtVGVtcGxhdGUgPSBmYWxzZTtcblx0Y29uc3QgcmVzdCA9IHRleHQuc2xpY2UoTWF0aC5tYXgoMCwgZW5kKSk7XG5cdGNvbnN0IHRlbXBsYXRlTWF0Y2ggPSB0ZW1wbGF0ZVJlZ2V4LmV4ZWMocmVzdCk7XG5cdGlmICh0ZW1wbGF0ZU1hdGNoKSB7XG5cdFx0Y29uc3QgdGVtcGxhdGVUaXRsZSA9IGdldENhbm9uaWNhbFRpdGxlKHRlbXBsYXRlTWF0Y2hbMl0gPz8gJycpO1xuXHRcdGNvbnN0IHtkaXNhbUxpbmtUZW1wbGF0ZXMsIGRpc2FtTGlua0lnbm9yZVRlbXBsYXRlc30gPSBjZmc7XG5cdFx0aWYgKGRpc2FtTGlua1RlbXBsYXRlcy5pbmNsdWRlcyh0ZW1wbGF0ZVRpdGxlKSkge1xuXHRcdFx0ZW5kICs9IHRlbXBsYXRlTWF0Y2hbMF0ubGVuZ3RoO1xuXHRcdFx0YWZ0ZXJEZXNjcmlwdGlvbiA9ICh0ZW1wbGF0ZU1hdGNoWzFdID8/ICcnKS5yZXBsYWNlKC9cXHMkLywgJycpO1xuXHRcdFx0aGFzRGlzYW1UZW1wbGF0ZSA9IHRydWU7XG5cdFx0fSBlbHNlIGlmIChkaXNhbUxpbmtJZ25vcmVUZW1wbGF0ZXMuaW5jbHVkZXModGVtcGxhdGVUaXRsZSkpIHtcblx0XHRcdHBvc3NpYmx5QW1iaWd1b3VzID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB7XG5cdFx0c3RhcnQ6IG1hdGNoLmluZGV4LFxuXHRcdGVuZCxcblx0XHRwb3NzaWJseUFtYmlndW91cyxcblx0XHRoYXNEaXNhbVRlbXBsYXRlLFxuXHRcdHRpdGxlOiBtYXRjaFRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uOiBtYXRjaERlc2NyaXB0aW9uID8/IG1hdGNoVGl0bGUsXG5cdFx0YWZ0ZXJEZXNjcmlwdGlvbixcblx0fTtcbn07XG5cbi8qIEV4dHJhY3QgYSBsaW5rIHRvIG9uZSBvZiBhIG51bWJlciBvZiBkZXN0aW5hdGlvbiBwYWdlcyBmcm9tIGEgc3RyaW5nIChcInRleHRcIikgaW4gd2lraSBmb3JtYXQsIHN0YXJ0aW5nIGZyb20gYSBnaXZlbiBpbmRleCAoXCJsYXN0SW5kZXhcIikuIFwiRGlzYW1iaWd1YXRpb24gbmVlZGVkXCIgdGVtcGxhdGVzIGFyZSBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSBsaW5rcy5cbiAqIHRleHQ6IFBhZ2UgaW4gd2lraSBmb3JtYXRcbiAqIGRlc3RpbmF0aW9uczogQXJyYXkgb2YgcGFnZSB0aXRsZXMgdG8gbG9vayBmb3JcbiAqIGxhc3RJbmRleDogSW5kZXggZnJvbSB3aGljaCB0aGUgc2VhcmNoIHdpbGwgc3RhcnRcbiAqL1xuY29uc3QgZXh0cmFjdExpbmtUb1BhZ2UgPSAodGV4dDogc3RyaW5nLCBkZXN0aW5hdGlvbnM6IHN0cmluZ1tdLCBsYXN0SW5kZXg6IG51bWJlcik6IExpbmsgfCB1bmRlZmluZWQgPT4ge1xuXHRsZXQgbGluazogTGluayB8IHVuZGVmaW5lZDtcblx0ZG8ge1xuXHRcdGxpbmsgPSBleHRyYWN0TGluayh0ZXh0LCBsYXN0SW5kZXgpO1xuXHRcdGlmIChsaW5rKSB7XG5cdFx0XHRsYXN0SW5kZXggPSBsaW5rLmVuZDtcblx0XHR9XG5cdH0gd2hpbGUgKGxpbmsgJiYgKCFsaW5rLnBvc3NpYmx5QW1iaWd1b3VzIHx8ICFkZXN0aW5hdGlvbnMuaW5jbHVkZXMoZ2V0Q2Fub25pY2FsVGl0bGUobGluay50aXRsZSkpKSk7XG5cdHJldHVybiBsaW5rO1xufTtcblxuLyogRmluZCB0aGUgXCJ0YXJnZXRcIiBwYWdlOiBlaXRoZXIgdGhlIG9uZSB3ZSBhcmUgaW4gb3IgdGhlIFwibWFpblwiIG9uZSBmb3VuZCBieSBleHRyYWN0aW5nIHRoZSB0aXRsZSBmcm9tIFwiLiogKGRpc2FtYmlndWF0aW9uKVwiIG9yIHdoYXRldmVyIHRoZSBhcHByb3BpYXRlIGxvY2FsIGZvcm1hdCBpcyAqL1xuY29uc3QgZ2V0VGFyZ2V0UGFnZSA9ICgpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCB0aXRsZSA9IGdldFRpdGxlKCk7XG5cdHJldHVybiBmb3JjZVNhbWVQYWdlID8gdGl0bGUgOiByZW1vdmVEaXNhbSh0aXRsZSk7XG59O1xuXG4vKiBHZXQgdGhlIHBhZ2UgdGl0bGUsIHdpdGggdGhlIG5hbWVzcGFjZSBwcmVmaXggaWYgYW55LiAqL1xuY29uc3QgZ2V0VGl0bGUgPSAoKTogc3RyaW5nID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRyZXR1cm4gd2dQYWdlTmFtZS5yZXBsYWNlKC9fL2csICcgJyk7XG59O1xuXG4vKiBFeHRyYWN0IGEgXCJtYWluXCIgdGl0bGUgZnJvbSBcIi4qIChkaXNhbWJpZ3VhdGlvbilcIiBvciB3aGF0ZXZlciB0aGUgYXBwcm9waWF0ZSBsb2NhbCBmb3JtYXQgaXMgKi9cbmNvbnN0IHJlbW92ZURpc2FtID0gKHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBtYXRjaCA9IG5ldyBSZWdFeHAoY2ZnLmRpc2FtUmVnRXhwKS5leGVjKHRpdGxlKTtcblx0cmV0dXJuIG1hdGNoPy5bMV0gPz8gdGl0bGU7XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIHR3byBwYWdlIHRpdGxlcyBhcmUgdGhlIHNhbWUgKi9cbmNvbnN0IGlzU2FtZVBhZ2UgPSAodGl0bGUxOiBzdHJpbmcsIHRpdGxlMjogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiBnZXRDYW5vbmljYWxUaXRsZSh0aXRsZTEpID09PSBnZXRDYW5vbmljYWxUaXRsZSh0aXRsZTIpO1xufTtcblxuLyogUmV0dXJuIHRoZSAnY2Fub25pY2FsIHRpdGxlJyBvZiBhIHBhZ2UgKi9cbmNvbnN0IGdldENhbm9uaWNhbFRpdGxlID0gKHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgY2Fub25pY2FsVGl0bGUgPSB0aXRsZTtcblx0dHJ5IHtcblx0XHQvLyBtdy5UaXRsZSBzZWVtcyB0byBiZSBidWdneSwgYW5kIHNvbWUgdmFsaWQgdGl0bGVzIGFyZSByZWplY3RlZFxuXHRcdC8vIEZJWE1FOiBUaGlzIG1heSBjYXVzZSBmYWxzZSBuZWdhdGl2ZXNcblx0XHRjYW5vbmljYWxUaXRsZSA9IG5ldyBtdy5UaXRsZSh0aXRsZSkuZ2V0UHJlZml4ZWRUZXh0KCk7XG5cdH0gY2F0Y2gge1xuXHRcdC8qIGVtcHR5ICovXG5cdH1cblx0cmV0dXJuIGNhbm9uaWNhbFRpdGxlO1xufTtcblxuLyogRXh0cmFjdCB0aGUgY29udGV4dCBhcm91bmQgYSBnaXZlbiBsaW5rIGluIGEgdGV4dCBzdHJpbmcgKi9cbmNvbnN0IGV4dHJhY3RDb250ZXh0ID0gKHRleHQ6IHN0cmluZywgbGluazogTGluayk6IFtzdHJpbmcsIHN0cmluZywgc3RyaW5nXSA9PiB7XG5cdGNvbnN0IGNvbnRleHRTdGFydCA9IGxpbmsuc3RhcnQgLSBjZmcucmFkaXVzO1xuXHRjb25zdCBjb250ZXh0RW5kID0gbGluay5lbmQgKyBjZmcucmFkaXVzO1xuXHRsZXQgY29udGV4dFByZXYgPSB0ZXh0LnNsaWNlKGNvbnRleHRTdGFydCwgbGluay5zdGFydCk7XG5cdGlmIChjb250ZXh0U3RhcnQgPiAwKSB7XG5cdFx0Y29udGV4dFByZXYgPSBtZXNzYWdlcy5lbGxpcHNpcyArIGNvbnRleHRQcmV2O1xuXHR9XG5cdGxldCBjb250ZXh0TmV4dCA9IHRleHQuc2xpY2UobGluay5lbmQsIGNvbnRleHRFbmQpO1xuXHRpZiAoY29udGV4dEVuZCA8IHRleHQubGVuZ3RoKSB7XG5cdFx0Y29udGV4dE5leHQgKz0gbWVzc2FnZXMuZWxsaXBzaXM7XG5cdH1cblx0cmV0dXJuIFtjb250ZXh0UHJldiwgdGV4dC5zbGljZShsaW5rLnN0YXJ0LCBsaW5rLmVuZCksIGNvbnRleHROZXh0XTtcbn07XG5cbi8qIEV4dHJhY3QgdGhlIHByZWZpeGVkIHBhZ2UgbmFtZSBmcm9tIGEgbGluayAqL1xuY29uc3QgZXh0cmFjdFBhZ2VOYW1lID0gKGxpbms6IEpRdWVyeTxIVE1MRWxlbWVudD4pOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRjb25zdCBwYWdlTmFtZSA9IGV4dHJhY3RQYWdlTmFtZVJhdyhsaW5rKTtcblx0aWYgKCFwYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBzZWN0aW9uUG9zID0gcGFnZU5hbWUuaW5kZXhPZignIycpO1xuXHRsZXQgc2VjdGlvbiA9ICcnO1xuXHRsZXQgdGl0bGUgPSBwYWdlTmFtZTtcblx0aWYgKHNlY3Rpb25Qb3MgIT09IC0xKSB7XG5cdFx0c2VjdGlvbiA9IHBhZ2VOYW1lLnNsaWNlKE1hdGgubWF4KDAsIHNlY3Rpb25Qb3MpKTtcblx0XHR0aXRsZSA9IHBhZ2VOYW1lLnNsaWNlKDAsIE1hdGgubWF4KDAsIHNlY3Rpb25Qb3MpKTtcblx0fVxuXHRyZXR1cm4gZ2V0Q2Fub25pY2FsVGl0bGUodGl0bGUpICsgc2VjdGlvbjtcbn07XG5cbi8qIEV4dHJhY3QgdGhlIHBhZ2UgbmFtZSBmcm9tIGEgbGluaywgYXMgaXMgKi9cbmNvbnN0IGV4dHJhY3RQYWdlTmFtZVJhdyA9IChsaW5rOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9PiB7XG5cdGNvbnN0IHt3Z1NjcmlwdCwgd2dBcnRpY2xlUGF0aH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChsaW5rLmhhc0NsYXNzKCdpbWFnZScpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGhyZWYgPSBsaW5rLmF0dHIoJ2hyZWYnKTtcblx0aWYgKGxpbmsuaGFzQ2xhc3MoJ25ldycpKSB7XG5cdFx0Ly8gXCJSZWRcIiBsaW5rXG5cdFx0aWYgKGhyZWYgJiYgaHJlZi5pbmNsdWRlcyh3Z1NjcmlwdCkpIHtcblx0XHRcdHJldHVybiBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3RpdGxlJywgaHJlZik7XG5cdFx0fVxuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoIWhyZWYpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgcmVnZXggPSB3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJyguKiknKTtcblx0Y29uc3QgcmVnZXhSZXN1bHQgPSBuZXcgUmVnRXhwKGBeJHtyZWdleH0kYCkuZXhlYyhocmVmKTtcblx0Y29uc3QgcGFnZU5hbWUgPSByZWdleFJlc3VsdD8uWzFdO1xuXHRpZiAocGFnZU5hbWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhZ2VOYW1lKTtcbn07XG5cbi8qIENoZWNrIHdoZXRoZXIgdGhpcyBpcyBhIGRpc2FtYmlndWF0aW9uIHBhZ2UgKi9cbmNvbnN0IGlzRGlzYW0gPSAoKTogYm9vbGVhbiA9PiB7XG5cdGNvbnN0IHt3Z0NhdGVnb3JpZXN9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRyZXR1cm4gY2ZnLmRpc2FtQ2F0ZWdvcmllcy5zb21lKChjYXRlZ29yeSkgPT4ge1xuXHRcdHJldHVybiB3Z0NhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpO1xuXHR9KTtcbn07XG5cbmNvbnN0IHNlY29uZHNUb0hITU1TUyA9ICh0b3RhbFNlY29uZHM6IG51bWJlcik6IHN0cmluZyA9PiB7XG5cdGxldCBoaG1tc3MgPSAnJztcblx0Y29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDM2MDApO1xuXHRjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgLyA2MCk7XG5cdGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAlIDYwKTtcblx0aWYgKGhvdXJzID49IDEpIHtcblx0XHRoaG1tc3MgPSBgJHtwYWQoaG91cnMsIDIpfTpgO1xuXHR9XG5cdGhobW1zcyArPSBgJHtwYWQobWludXRlcywgMil9OiR7cGFkKHNlY29uZHMsIDIpfWA7XG5cdHJldHVybiBoaG1tc3M7XG59O1xuXG5jb25zdCBwYWQgPSAodmFsdWU6IG51bWJlciwgd2lkdGg6IG51bWJlcik6IHN0cmluZyA9PiB7XG5cdGNvbnN0IHRleHQgPSB2YWx1ZS50b1N0cmluZygpO1xuXHRpZiAodGV4dC5sZW5ndGggPj0gd2lkdGgpIHtcblx0XHRyZXR1cm4gdGV4dDtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdEFycmF5LmZyb20oe1xuXHRcdFx0bGVuZ3RoOiB3aWR0aCAtIHRleHQubGVuZ3RoICsgMSxcblx0XHR9KS5qb2luKCcwJykgKyB0ZXh0XG5cdCk7XG59O1xuXG4vKiBDcmVhdGUgYSBuZXcgYnV0dG9uXG4gKiB0ZXh0OiBUZXh0IHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdGhlIGJ1dHRvblxuICogb25DbGljazogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZFxuICovXG5jb25zdCBjcmVhdGVCdXR0b24gPSAodGV4dDogc3RyaW5nLCBvbkNsaWNrOiAoKSA9PiB2b2lkKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9PiB7XG5cdGNvbnN0IGJ1dHRvbiA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHR2YWx1ZTogdGV4dCxcblx0fSk7XG5cdGJ1dHRvbi5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYnV0dG9uJykub24oJ2NsaWNrJywgb25DbGljayk7XG5cdHJldHVybiBidXR0b247XG59O1xuXG4vKiBHaXZlbiBhIHBhZ2UgdGl0bGUgYW5kIGFuIGFycmF5IG9mIHBvc3NpYmxlIHJlZGlyZWN0cyB7ZnJvbSwgdG99IChcImNhbm9uaWNhbCB0aXRsZXNcIiksIGZpbmQgdGhlIHBhZ2UgYXQgdGhlIGVuZCBvZiB0aGUgcmVkaXJlY3QgY2hhaW4sIGlmIHRoZXJlIGlzIG9uZS4gT3RoZXJ3aXNlLCByZXR1cm4gdGhlIHBhZ2UgdGl0bGUgdGhhdCB3YXMgcGFzc2VkICovXG5jb25zdCByZXNvbHZlUmVkaXJlY3QgPSAocGFnZVRpdGxlOiBzdHJpbmcsIHBvc3NpYmxlUmVkaXJlY3RzOiBSZWRpcmVjdFtdKTogc3RyaW5nID0+IHtcblx0bGV0IGFwcGxpZWRSZWRpcmVjdCA9IHRydWU7XG5cdGNvbnN0IHZpc2l0ZWRQYWdlczogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4gPSB7fTtcblx0bGV0IGN1cnJlbnRQYWdlID0gZ2V0Q2Fub25pY2FsVGl0bGUocGFnZVRpdGxlKTtcblx0d2hpbGUgKGFwcGxpZWRSZWRpcmVjdCkge1xuXHRcdGFwcGxpZWRSZWRpcmVjdCA9IGZhbHNlO1xuXHRcdGZvciAoY29uc3QgcG9zc2libGVSZWRpcmVjdCBvZiBwb3NzaWJsZVJlZGlyZWN0cykge1xuXHRcdFx0aWYgKHBvc3NpYmxlUmVkaXJlY3QuZnJvbSA9PT0gY3VycmVudFBhZ2UpIHtcblx0XHRcdFx0aWYgKHZpc2l0ZWRQYWdlc1twb3NzaWJsZVJlZGlyZWN0LnRvXSkge1xuXHRcdFx0XHRcdC8vIFJlZGlyZWN0IGNoYWluIGRldGVjdGVkXG5cdFx0XHRcdFx0cmV0dXJuIHBhZ2VUaXRsZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2aXNpdGVkUGFnZXNbY3VycmVudFBhZ2VdID0gdHJ1ZTtcblx0XHRcdFx0YXBwbGllZFJlZGlyZWN0ID0gdHJ1ZTtcblx0XHRcdFx0Y3VycmVudFBhZ2UgPSBwb3NzaWJsZVJlZGlyZWN0LnRvO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvLyBObyByZWRpcmVjdCBydWxlcyBhcHBsaWVkIGZvciBhbiBpdGVyYXRpb24gb2YgdGhlIG91dGVyIGxvb3A6XG5cdC8vIG5vIG1vcmUgcmVkaXJlY3RzLiBXZSBhcmUgZG9uZVxuXHRyZXR1cm4gY3VycmVudFBhZ2U7XG59O1xuXG4vKiBGZXRjaCB0aGUgaW5jb21pbmcgbGlua3MgdG8gYSBwYWdlLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UgKHN1Y2Nlc3MgLSBhcnJheSBvZiB0aXRsZXMgb2YgcGFnZXMgdGhhdCBjb250YWluIGxpbmtzIHRvIHRoZSB0YXJnZXQgcGFnZSBhbmQgYXJyYXkgb2YgXCJjYW5vbmljYWwgdGl0bGVzXCIgb2YgcG9zc2libGUgZGVzdGluYXRpb25zIG9mIHRoZSBiYWNrbGlua3MgKGVpdGhlciB0aGUgdGFyZ2V0IHBhZ2Ugb3IgcmVkaXJlY3RzIHRvIHRoZSB0YXJnZXQgcGFnZSksIGZhaWx1cmUgLSBlcnJvciBkZXNjcmlwdGlvbilcbiAqIHBhZ2U6IFRhcmdldCBwYWdlXG4gKi9cbmNvbnN0IGdldEJhY2tsaW5rcyA9IChwYWdlOiBzdHJpbmcpOiBKUXVlcnkuUHJvbWlzZTxzdHJpbmdbXT4gPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8c3RyaW5nW10+KCk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0bGlzdDogJ2JhY2tsaW5rcycsXG5cdFx0Ymx0aXRsZTogcGFnZSxcblx0XHRibHJlZGlyZWN0OiB0cnVlLFxuXHRcdGJsbGltaXQ6IGNmZy5iYWNrbGlua0xpbWl0LFxuXHRcdGJsbmFtZXNwYWNlOiBjZmcudGFyZ2V0TmFtZXNwYWNlcy5qb2luKCd8JyksXG5cdH07XG5cdGFwaS5nZXQocGFyYW1zKVxuXHRcdC5kb25lKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHQvLyBUaGVyZSBtaWdodCBiZSBkdXBsaWNhdGUgZW50cmllcyBpbiBzb21lIGNvcm5lciBjYXNlcy4gV2UgZG9uJ3QgY2FyZSxcblx0XHRcdC8vIHNpbmNlIHdlIGFyZSBnb2luZyB0byBjaGVjayBsYXRlciwgYW55d2F5XG5cdFx0XHRjb25zdCBiYWNrbGlua3M6IHN0cmluZ1tdID0gW107XG5cdFx0XHRjb25zdCBsaW5rVGl0bGVzOiBzdHJpbmdbXSA9IFtnZXRDYW5vbmljYWxUaXRsZShwYWdlKV07XG5cdFx0XHRjb25zdCBiYWNrbGlua3NRdWVyeSA9IHF1ZXJ5LmJhY2tsaW5rcztcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBiYWNrbGlua3NRdWVyeSkge1xuXHRcdFx0XHRiYWNrbGlua3MucHVzaChlbGVtZW50LnRpdGxlIGFzIHN0cmluZyk7XG5cdFx0XHRcdGlmICghZWxlbWVudC5yZWRpcmxpbmtzKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlua1RpdGxlcy5wdXNoKGVsZW1lbnQudGl0bGUgYXMgc3RyaW5nKTtcblx0XHRcdFx0Y29uc3Qge3JlZGlybGlua3N9ID0gZWxlbWVudDtcblx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGV9IG9mIHJlZGlybGlua3MpIHtcblx0XHRcdFx0XHRiYWNrbGlua3MucHVzaCh0aXRsZSBhcyBzdHJpbmcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGJhY2tsaW5rcywgbGlua1RpdGxlcyk7XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KG1lc3NhZ2VzLmdldEJhY2tsaW5rc0Vycm9yLnJlcGxhY2UoJyQxJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogRG93bmxvYWQgYSBsaXN0IG9mIHJlZGlyZWN0cyBmb3Igc29tZSBwYWdlcy4gUmV0dXJucyBhIGpRdWVyeSBjYWxsYmFjayAoc3VjY2VzcyAtIGFycmF5IG9mIHJlZGlyZWN0cyAoe2Zyb20sIHRvfSksIGZhaWx1cmUgLSBlcnJvciBkZXNjcmlwdGlvbilcbiAqIHBhZ2VUaXRsZXM6IEFycmF5IG9mIHBhZ2UgdGl0bGVzXG4gKi9cbmNvbnN0IGZldGNoUmVkaXJlY3RzID0gKHBhZ2VUaXRsZXM6IHN0cmluZ1tdKTogSlF1ZXJ5LlByb21pc2U8UmVkaXJlY3RbXT4gPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8UmVkaXJlY3RbXT4oKTtcblx0Y29uc3QgY3VycmVudFRpdGxlcyA9IHBhZ2VUaXRsZXMuc2xpY2UoMCwgY2ZnLnF1ZXJ5VGl0bGVMaW1pdCk7XG5cdGNvbnN0IHJlc3RUaXRsZXMgPSBwYWdlVGl0bGVzLnNsaWNlKGNmZy5xdWVyeVRpdGxlTGltaXQpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHRpdGxlczogY3VycmVudFRpdGxlcy5qb2luKCd8JyksXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRhcGkuZ2V0KHBhcmFtcylcblx0XHQuZG9uZSgoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0Y29uc3QgdGhlc2VSZWRpcmVjdHM6IFJlZGlyZWN0W10gPSBxdWVyeS5yZWRpcmVjdHMgPz8gW107XG5cdFx0XHRpZiAocmVzdFRpdGxlcy5sZW5ndGgpIHtcblx0XHRcdFx0ZmV0Y2hSZWRpcmVjdHMocmVzdFRpdGxlcylcblx0XHRcdFx0XHQuZG9uZSgocmVkaXJlY3RzKSA9PiB7XG5cdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKFsuLi50aGVzZVJlZGlyZWN0cywgLi4ucmVkaXJlY3RzXSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChkZXNjcmlwdGlvbik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHRoZXNlUmVkaXJlY3RzKTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QobWVzc2FnZXMuZmV0Y2hSZWRpcmVjdHNFcnJvci5yZXBsYWNlKCckMScsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIERvd25sb2FkIHRoZSBsaXN0IG9mIHVzZXIgcmlnaHRzIGZvciB0aGUgY3VycmVudCB1c2VyLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UgKHN1Y2Nlc3MgLSBhcnJheSBvZiByaWdodCBuYW1lcywgZXJyb3IgLSBlcnJvciBkZXNjcmlwdGlvbikgKi9cbmNvbnN0IGZldGNoUmlnaHRzID0gKCk6IEpRdWVyeS5Qcm9taXNlPHN0cmluZ1tdPiA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZDxzdHJpbmdbXT4oKTtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRtZXRhOiAndXNlcmluZm8nLFxuXHRcdHVpcHJvcDogJ3JpZ2h0cycsXG5cdH07XG5cdGFwaS5nZXQocGFyYW1zKVxuXHRcdC5kb25lKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHF1ZXJ5LnVzZXJpbmZvLnJpZ2h0cyk7XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KG1lc3NhZ2VzLmZldGNoUmlnaHRzRXJyb3IucmVwbGFjZSgnJDEnLCBjb2RlKSk7XG5cdFx0fSk7XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBMb2FkIHRoZSByYXcgcGFnZSB0ZXh0IGZvciBhIGdpdmVuIHRpdGxlLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UgKHN1Y2Nlc3MgLSBwYWdlIGNvbnRlbnQsIGZhaWx1cmUgLSBlcnJvciBkZXNjcmlwdGlvbilcbiAqIHBhZ2VUaXRsZTogVGl0bGUgb2YgdGhlIHBhZ2VcbiAqL1xuY29uc3QgbG9hZFBhZ2UgPSAocGFnZVRpdGxlOiBzdHJpbmcpOiBKUXVlcnkuUHJvbWlzZTxQYWdlRGF0YT4gPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8UGFnZURhdGE+KCk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHRpdGxlczogcGFnZVRpdGxlLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJ2cHJvcDogWyd0aW1lc3RhbXAnLCAnY29udGVudCddLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHR0eXBlOiAnY3NyZicsXG5cdH07XG5cdGFwaS5nZXQocGFyYW1zKVxuXHRcdC5kb25lKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRjb25zdCBbcmF3UGFnZV0gPSBxdWVyeS5wYWdlcztcblx0XHRcdGNvbnN0IHBhZ2U6IFBhZ2VEYXRhID0ge1xuXHRcdFx0XHRjb250ZW50OiAnJyxcblx0XHRcdFx0YmFzZVRpbWVTdGFtcDogdW5kZWZpbmVkLFxuXHRcdFx0XHRzdGFydFRpbWVTdGFtcDogdW5kZWZpbmVkLFxuXHRcdFx0XHRlZGl0VG9rZW46IHF1ZXJ5LnRva2Vucy5jc3JmdG9rZW4sXG5cdFx0XHRcdHJlZGlyZWN0OiByYXdQYWdlLnJlZGlyZWN0ICE9PSB1bmRlZmluZWQsXG5cdFx0XHRcdG1pc3Npbmc6IHJhd1BhZ2UubWlzc2luZyAhPT0gdW5kZWZpbmVkLFxuXHRcdFx0fTtcblx0XHRcdGlmIChyYXdQYWdlLnJldmlzaW9ucykge1xuXHRcdFx0XHRwYWdlLmNvbnRlbnQgPSByYXdQYWdlLnJldmlzaW9uc1swXS5zbG90cy5tYWluLmNvbnRlbnQ7XG5cdFx0XHRcdHBhZ2UuYmFzZVRpbWVTdGFtcCA9IHJhd1BhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcDtcblx0XHRcdH1cblx0XHRcdHBhZ2Uuc3RhcnRUaW1lU3RhbXAgPSByYXdQYWdlLnN0YXJ0dGltZXN0YW1wO1xuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShwYWdlKTtcblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QobWVzc2FnZXMubG9hZFBhZ2VFcnJvci5yZXBsYWNlKCckMScsIHBhZ2VUaXRsZSkucmVwbGFjZSgnJDInLCBjb2RlKSk7XG5cdFx0fSk7XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBSZWdpc3RlciBjaGFuZ2VzIHRvIGEgcGFnZSwgdG8gYmUgc2F2ZWQgbGF0ZXIuIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZSAoc3VjY2VzcyAtIG5vIHBhcmFtcywgZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uKS4gVGFrZXMgdGhlIHNhbWUgcGFyYW1ldGVycyBhcyBzYXZlUGFnZSAqL1xuY29uc3Qgc2F2ZVdpdGhDb29sZG93biA9ICguLi5hcmdzOiBTYXZlQXJncyk6IEpRdWVyeS5Qcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkPHZvaWQ+KCk7XG5cdHBlbmRpbmdTYXZlcy5wdXNoKHtcblx0XHRhcmdzLFxuXHRcdGRmZDogZGVmZXJyZWQsXG5cdH0pO1xuXHRpZiAoIXJ1bm5pbmdTYXZlcykge1xuXHRcdGNoZWNrQW5kU2F2ZSgpO1xuXHR9XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBTYXZlIHRoZSBmaXJzdCBzZXQgb2YgY2hhbmdlcyBpbiB0aGUgbGlzdCBvZiBwZW5kaW5nIGNoYW5nZXMsIHByb3ZpZGluZyB0aGF0IGVub3VnaCB0aW1lIGhhcyBwYXNzZWQgc2luY2UgdGhlIGxhc3QgZWRpdCAqL1xuY29uc3QgY2hlY2tBbmRTYXZlID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoIXBlbmRpbmdTYXZlcy5sZW5ndGgpIHtcblx0XHRydW5uaW5nU2F2ZXMgPSBmYWxzZTtcblx0XHRyZXR1cm47XG5cdH1cblx0cnVubmluZ1NhdmVzID0gdHJ1ZTtcblx0Y29uc3QgbWlsbGlzU2luY2VMYXN0ID0gRGF0ZS5ub3coKSAtIGxhc3RFZGl0TWlsbGlzO1xuXHRpZiAobWlsbGlzU2luY2VMYXN0IDwgY2ZnLmVkaXRDb29sZG93biAqIDEwMDApIHtcblx0XHRzZXRUaW1lb3V0KGNoZWNrQW5kU2F2ZSwgY2ZnLmVkaXRDb29sZG93biAqIDEwMDAgLSBtaWxsaXNTaW5jZUxhc3QpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFRoZSBsYXN0IGVkaXQgc3RhcnRlZCBhdCBsZWFzdCBjZmcuZWRpdENvb2xkb3duIHNlY29uZHMgYWdvXG5cdFx0Y29uc3Qgc2F2ZSA9IHBlbmRpbmdTYXZlcy5zaGlmdCgpO1xuXHRcdGlmICghc2F2ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzYXZlUGFnZSguLi5zYXZlLmFyZ3MpXG5cdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdGNoZWNrQW5kU2F2ZSgpO1xuXHRcdFx0XHRzYXZlLmRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdGNoZWNrQW5kU2F2ZSgpO1xuXHRcdFx0XHRzYXZlLmRmZC5yZWplY3QoZGVzY3JpcHRpb24pO1xuXHRcdFx0fSk7XG5cdFx0Ly8gV2UnbGwgdXNlIHRoZSB0aW1lIHNpbmNlIHRoZSBsYXN0IGVkaXQgc3RhcnRlZFxuXHRcdGxhc3RFZGl0TWlsbGlzID0gRGF0ZS5ub3coKTtcblx0fVxufTtcblxuLyogU2F2ZSB0aGUgY2hhbmdlcyBtYWRlIHRvIGEgcGFnZS4gUmV0dXJucyBhIGpRdWVyeSBwcm9taXNlIChzdWNjZXNzIC0gbm8gcGFyYW1zLCBmYWlsdXJlIC0gZXJyb3IgZGVzY3JpcHRpb24pXG4gKiBwYWdlVGl0bGU6IFRpdGxlIG9mIHRoZSBwYWdlXG4gKiBwYWdlOiBQYWdlIGRhdGFcbiAqIHN1bW1hcnk6IFN1bW1hcnkgb2YgdGhlIGNoYW5nZXMgbWFkZSB0byB0aGUgcGFnZVxuICogbWlub3JFZGl0OiBXaGV0aGVyIHRvIG1hcmsgdGhlIGVkaXQgYXMgJ21pbm9yJ1xuICogYm90RWRpdDogV2hldGhlciB0byBtYXJrIHRoZSBlZGl0IGFzICdib3QnXG4gKi9cbmNvbnN0IHNhdmVQYWdlID0gKFxuXHRwYWdlVGl0bGU6IHN0cmluZyxcblx0e2VkaXRUb2tlbiwgY29udGVudCwgYmFzZVRpbWVTdGFtcCwgc3RhcnRUaW1lU3RhbXB9OiBQYWdlRGF0YSxcblx0c3VtbWFyeTogc3RyaW5nLFxuXHRtaW5vckVkaXQ6IGJvb2xlYW4sXG5cdGJvdEVkaXQ6IGJvb2xlYW5cbik6IEpRdWVyeS5Qcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkPHZvaWQ+KCk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdHRva2VuOiBlZGl0VG9rZW4sXG5cdFx0dGV4dDogY29udGVudCxcblx0XHRiYXNldGltZXN0YW1wOiBiYXNlVGltZVN0YW1wLFxuXHRcdHN0YXJ0dGltZXN0YW1wOiBzdGFydFRpbWVTdGFtcCxcblx0XHRzdW1tYXJ5LFxuXHRcdHdhdGNobGlzdDogY2ZnLndhdGNoLFxuXHRcdG1pbm9yOiBtaW5vckVkaXQsXG5cdFx0Ym90OiBib3RFZGl0LFxuXHR9O1xuXHRhcGkucG9zdChwYXJhbXMpXG5cdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdH0pXG5cdFx0LmZhaWwoKGNvZGUpID0+IHtcblx0XHRcdGRlZmVycmVkLnJlamVjdChtZXNzYWdlcy5zYXZlUGFnZUVycm9yLnJlcGxhY2UoJyQxJywgcGFnZVRpdGxlKS5yZXBsYWNlKCckMicsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbmV4cG9ydCB7aW5zdGFsbH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7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QUNQOE0sT0FBT2hCO0lBQ1B2UixNQUFNNkU7SUFDTjJOLGVBQWVuQjtJQUNmUyxnQkFBZ0JSO0lBQ2hCalY7SUFDQW9XLFdBQVd2WixJQUFJaUI7SUFDZnVZLE9BQU9MO0lBQ1BNLEtBQUtMO0VBQ047QUFDQXRaLE1BQUk0WixLQUFLdEQsTUFBTSxFQUNidk0sS0FBSyxNQUFNO0FBQ1hxQixhQUFTRSxRQUFRO0VBQ2xCLENBQUMsRUFDQUgsS0FBTWtNLFVBQVM7QUFDZmpNLGFBQVNrTSxPQUFPbFcsU0FBUzJCLGNBQWMwSSxRQUFRLE1BQU1nQixTQUFTLEVBQUVoQixRQUFRLE1BQU00TCxJQUFJLENBQUM7RUFDcEYsQ0FBQztBQUNGLFNBQU9qTSxTQUFTWSxRQUFRO0FBQ3pCOztBSjNrQ0EsTUFBQSxHQUFLbk0sbUJBQUFnYSxTQUFRLEVBQUV6VCxLQUFLLFNBQVMwVCxjQUFjO0FBQzFDOVUsVUFBUTtBQUNULENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY2ZnIiwgImRpc2FtQ2F0ZWdvcmllcyIsICJkaXNhbUxpbmtUZW1wbGF0ZXMiLCAiZGlzYW1MaW5rSWdub3JlVGVtcGxhdGVzIiwgImRpc2FtRm9ybWF0IiwgImRpc2FtUmVnRXhwIiwgImRpc2FtTmVlZGVkVGV4dCIsICJjb25jYXQiLCAicmVkaXJlY3RUb0Rpc2FtIiwgImludGVudGlvbmFsTGlua09wdGlvbiIsICJ0YXJnZXROYW1lc3BhY2VzIiwgImJhY2tsaW5rTGltaXQiLCAicXVlcnlUaXRsZUxpbWl0IiwgInJhZGl1cyIsICJudW1Db250ZXh0TGluZXMiLCAiaGlzdG9yeVNpemUiLCAiZWRpdENvb2xkb3duIiwgIndhdGNoIiwgIm1lc3NhZ2VzIiwgInN0YXJ0IiwgInN0YXJ0TWFpbiIsICJzdGFydFNhbWUiLCAiY2xvc2UiLCAidW5kbyIsICJvbWl0IiwgInJlZnJlc2giLCAidGl0bGVBc1RleHQiLCAiZGlzYW1OZWVkZWQiLCAiaW50ZW50aW9uYWxMaW5rIiwgInRpdGxlQXNUZXh0UHJvbXB0IiwgInJlbW92ZUxpbmsiLCAib3B0aW9uTWFya2VyIiwgInRhcmdldE9wdGlvbk1hcmtlciIsICJyZWRpcmVjdE9wdGlvbk1hcmtlciIsICJwYWdlVGl0bGVMaW5lIiwgIm5vTW9yZUxpbmtzIiwgInBlbmRpbmdFZGl0Q291bnRlciIsICJwZW5kaW5nRWRpdEJveCIsICJwZW5kaW5nRWRpdEJveFRpbWVFc3RpbWF0aW9uIiwgInBlbmRpbmdFZGl0Qm94TGltaXRlZCIsICJlcnJvciIsICJmZXRjaFJlZGlyZWN0c0Vycm9yIiwgImdldEJhY2tsaW5rc0Vycm9yIiwgImZldGNoUmlnaHRzRXJyb3IiLCAibG9hZFBhZ2VFcnJvciIsICJzYXZlUGFnZUVycm9yIiwgImRpc21pc3NFcnJvciIsICJwZW5kaW5nIiwgImVkaXRJblByb2dyZXNzIiwgImVsbGlwc2lzIiwgIm5vdGlmeUNoYXJhY3RlciIsICJzdW1tYXJ5IiwgInN1bW1hcnlDaGFuZ2VkIiwgInN1bW1hcnlPbWl0dGVkIiwgInN1bW1hcnlSZW1vdmVkIiwgInN1bW1hcnlJbnRlbnRpb25hbCIsICJzdW1tYXJ5SGVscE5lZWRlZCIsICJzdW1tYXJ5U2VwYXJhdG9yIiwgInJlZGlyZWN0U3VtbWFyeSIsICJzdGFydExpbmsiLCAidWkiLCAibGlua3MiLCAicGFnZUNoYW5nZXMiLCAiY3VycmVudFBhZ2VUaXRsZSIsICJjdXJyZW50UGFnZVBhcmFtZXRlcnMiLCAiY3VycmVudExpbmsiLCAicG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucyIsICJmb3JjZVNhbWVQYWdlIiwgInJ1bm5pbmciLCAiY2hvb3NpbmciLCAiY2FuTWFya0ludGVudGlvbmFsTGlua3MiLCAiZGlzcGxheWVkUGFnZXMiLCAiZWRpdENvdW50IiwgImVkaXRMaW1pdCIsICJwZW5kaW5nU2F2ZXMiLCAicGVuZGluZ0VkaXRCb3hUZXh0IiwgImxhc3RFZGl0TWlsbGlzIiwgInJ1bm5pbmdTYXZlcyIsICJpbnN0YWxsIiwgIndnQWN0aW9uIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaXNEaXNhbSIsICJwb3J0bGV0SWQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJSZWdFeHAiLCAidGVzdCIsICJnZXRUaXRsZSIsICJzdGFydE1haW5MaW5rIiwgIiQiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJvbiIsICJzdGFydFNhbWVMaW5rIiwgImFkZCIsICJlbnN1cmVEQUJFeGlzdHMiLCAidGhlbiIsICJjYW5NYXJrIiwgImNyZWF0ZVVJIiwgImFkZFVubG9hZENvbmZpcm0iLCAibWFya0Rpc2FtT3B0aW9ucyIsICJjaGVja0VkaXRMaW1pdCIsICJ0b2dnbGVQZW5kaW5nRWRpdEJveCIsICJkb1BhZ2UiLCAiJGJvZHkiLCAiZGlzcGxheSIsICJhZGRDbGFzcyIsICJmaW5pc2hlZE1lc3NhZ2UiLCAidGV4dCIsICJoaWRlIiwgImNvbnRleHQiLCAidW5kb0J1dHRvbiIsICJjcmVhdGVCdXR0b24iLCAib21pdEJ1dHRvbiIsICJlbmRCdXR0b24iLCAic2F2ZUFuZEVuZCIsICJyZWZyZXNoQnV0dG9uIiwgInRpdGxlQXNUZXh0QnV0dG9uIiwgImNob29zZVRpdGxlRnJvbVByb21wdCIsICJpbnRlbnRpb25hbExpbmtCdXR0b24iLCAiY2hvb3NlSW50ZW50aW9uYWxMaW5rIiwgImRpc2FtTmVlZGVkQnV0dG9uIiwgImNob29zZURpc2FtTmVlZGVkIiwgInJlbW92ZUxpbmtCdXR0b24iLCAiY2hvb3NlTGlua1JlbW92YWwiLCAidG9wIiwgImFwcGVuZCIsICJsZWZ0QnV0dG9ucyIsICJyaWdodEJ1dHRvbnMiLCAiYWxsQnV0dG9ucyIsICJ1cGRhdGVFZGl0Q291bnRlciIsICJ0b2dnbGVBY3Rpb25CdXR0b25zIiwgImZpbmQiLCAiYmVmb3JlIiwgImZhZGVJbiIsICJ3aW5kb3ciLCAiY2hlY2tBY3R1YWxDaGFuZ2VzIiwgIm9wdGlvblBhZ2VUaXRsZXMiLCAib3B0aW9uTWFya2VycyIsICJnZXREaXNhbU9wdGlvbnMiLCAiZWFjaCIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJsaW5rIiwgInRpdGxlIiwgImV4dHJhY3RQYWdlTmFtZSIsICJhdHRyIiwgImV2IiwgInByZXZlbnREZWZhdWx0IiwgImNob29zZVJlcGxhY2VtZW50IiwgImFmdGVyIiwgInB1c2giLCAidGFyZ2V0UGFnZSIsICJnZXRUYXJnZXRQYWdlIiwgImZldGNoUmVkaXJlY3RzIiwgImRvbmUiLCAicmVkaXJlY3RzIiwgImVuZFRhcmdldFBhZ2UiLCAicmVzb2x2ZVJlZGlyZWN0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJlbnRyaWVzIiwgIl9zdGVwIiwgInMiLCAibiIsICJpaSIsICJvcHRpb25QYWdlVGl0bGUiLCAidmFsdWUiLCAiZW5kT3B0aW9uVGl0bGUiLCAiaXNTYW1lUGFnZSIsICJfb3B0aW9uTWFya2VycyRpaSIsICJfb3B0aW9uTWFya2VycyRpaTIiLCAiZXJyIiwgImUiLCAiZiIsICJmYWlsIiwgImRlZmVycmVkIiwgIkRlZmVycmVkIiwgInJlc29sdmUiLCAiZXhlYyIsICJkaXNhbVRpdGxlIiwgInJlcGxhY2UiLCAibG9hZFBhZ2UiLCAicGFnZSIsICJtaXNzaW5nIiwgImNvbnRlbnQiLCAic2F2ZVBhZ2UiLCAiZGVzY3JpcHRpb24iLCAicHJvbWlzZSIsICJmZXRjaFJpZ2h0cyIsICJyaWdodHMiLCAiaW5jbHVkZXMiLCAiYWx3YXlzIiwgImxlbmd0aCIsICJvbGRlc3RDaGFuZ2UiLCAic2hpZnQiLCAiYXBwbHlDaGFuZ2UiLCAicGFnZVRpdGxlIiwgImRhdGEiLCAiZG9MaW5rIiwgImdldEJhY2tsaW5rcyIsICJiYWNrbGlua3MiLCAicGFnZVRpdGxlcyIsICJfaSIsICJfcGVuZGluZ1NhdmVzIiwgImVsIiwgImFyZ3MiLCAiZmlsdGVyIiwgInQiLCAicmVtb3ZlRGlzYW0iLCAidXBkYXRlQ29udGV4dCIsICJleHRyYWN0TGlua1RvUGFnZSIsICJlbmQiLCAiZXh0cmEiLCAiY2hhbmdlU3VtbWFyeSIsICJhZGRDaGFuZ2UiLCAicmVwbGFjZUxpbmsiLCAicHJvbXB0IiwgInJlbW92ZUxpbmtUZXh0IiwgImxhc3RQYWdlIiwgImF0IiwgInVuc2hpZnQiLCAiY29udGVudEJlZm9yZSIsICJwb3AiLCAiZW5hYmxlZCIsICJhZmZlY3RlZEJ1dHRvbnMiLCAiX2kyIiwgIl9hZmZlY3RlZEJ1dHRvbnMiLCAiYnV0dG9uIiwgInByb3AiLCAidG9nZ2xlRmluaXNoZWRNZXNzYWdlIiwgInNob3ciLCAidG9nZ2xlIiwgImZhZGVPdXQiLCAibm90aWZ5Q29tcGxldGlvbiIsICJvbGRUaXRsZSIsICJvbmUiLCAiX3VpJGNvbnRleHQkaGVpZ2h0IiwgImh0bWwiLCAiZ2V0VXJsIiwgInJlZGlyZWN0IiwgImVzY2FwZSIsICJleHRyYWN0Q29udGV4dCIsICJlbXB0eSIsICJudW1MaW5lcyIsICJNYXRoIiwgImNlaWwiLCAiaGVpZ2h0IiwgIk51bWJlciIsICJwYXJzZUZsb2F0IiwgImNzcyIsICJBcnJheSIsICJmcm9tIiwgImpvaW4iLCAiaGFzRGlzYW1UZW1wbGF0ZSIsICJ0b1N0cmluZyIsICJjb3VudEFjdHVhbGx5Q2hhbmdlZEZ1bGx5Q2hlY2tlZFBhZ2VzIiwgInRleHRDb250ZW50IiwgInNlY29uZHNUb0hITU1TUyIsICJwYWdlQ2hhbmdlIiwgImNoYW5nZVN1bW1hcmllcyIsICJzYXZlIiwgInNhdmVXaXRoQ29vbGRvd24iLCAiYXBwbHlBbGxDaGFuZ2VzIiwgIl9pMyIsICJfcGFnZUNoYW5nZXMiLCAib2xkQ29udGVudCIsICJfcGFnZUNoYW5nZXMkYXQiLCAibGFzdFBhZ2VDaGFuZ2UiLCAiY291bnRBY3R1YWxDaGFuZ2VzIiwgImNoYW5nZUNvdW50IiwgIl9pNCIsICJfcGFnZUNoYW5nZXMyIiwgImxhc3RDaGFuZ2UiLCAiQm9vbGVhbiIsICJjdXJyZW50VG9vbFVJIiwgInJlbW92ZUNsYXNzIiwgInJlbW92ZSIsICJjb21wbGV0ZSIsICJlcnJvckRlc2NyaXB0aW9uIiwgImVycm9yQm94IiwgInVpSXNJblBsYWNlIiwgImNvbnRhaW5zIiwgImRvY3VtZW50RWxlbWVudCIsICJuZXh0RWxlbWVudCIsICJuZXdDb250ZW50IiwgImxpbmtTdGFydCIsICJzbGljZSIsICJtYXgiLCAibGlua0VuZCIsICJhZnRlckRlc2NyaXB0aW9uIiwgImV4dHJhY3RMaW5rIiwgImxhc3RJbmRleCIsICJfbWF0Y2gkIiwgInRpdGxlUmVnZXgiLCAidGVtcGxhdGVSZWdleCIsICJtYXRjaCIsICJtYXRjaFRpdGxlIiwgIm1hdGNoRGVzY3JpcHRpb24iLCAiZW5kMiIsICJpbmRleCIsICJwb3NzaWJseUFtYmlndW91cyIsICJyZXN0IiwgInRlbXBsYXRlTWF0Y2giLCAiX3RlbXBsYXRlTWF0Y2gkIiwgInRlbXBsYXRlVGl0bGUiLCAiZ2V0Q2Fub25pY2FsVGl0bGUiLCAiX3RlbXBsYXRlTWF0Y2gkMiIsICJkZXN0aW5hdGlvbnMiLCAid2dQYWdlTmFtZSIsICJfbWF0Y2gkMiIsICJ0aXRsZTEiLCAidGl0bGUyIiwgImNhbm9uaWNhbFRpdGxlIiwgIlRpdGxlIiwgImdldFByZWZpeGVkVGV4dCIsICJjb250ZXh0U3RhcnQiLCAiY29udGV4dEVuZCIsICJjb250ZXh0UHJldiIsICJjb250ZXh0TmV4dCIsICJwYWdlTmFtZSIsICJleHRyYWN0UGFnZU5hbWVSYXciLCAic2VjdGlvblBvcyIsICJpbmRleE9mIiwgInNlY3Rpb24iLCAid2dTY3JpcHQiLCAid2dBcnRpY2xlUGF0aCIsICJoYXNDbGFzcyIsICJocmVmIiwgImdldFBhcmFtVmFsdWUiLCAicmVnZXgiLCAicmVnZXhSZXN1bHQiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgIndnQ2F0ZWdvcmllcyIsICJzb21lIiwgImNhdGVnb3J5IiwgInRvdGFsU2Vjb25kcyIsICJoaG1tc3MiLCAiaG91cnMiLCAiZmxvb3IiLCAibWludXRlcyIsICJzZWNvbmRzIiwgInBhZCIsICJ3aWR0aCIsICJvbkNsaWNrIiwgInR5cGUiLCAicG9zc2libGVSZWRpcmVjdHMiLCAiYXBwbGllZFJlZGlyZWN0IiwgInZpc2l0ZWRQYWdlcyIsICJjdXJyZW50UGFnZSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJwb3NzaWJsZVJlZGlyZWN0IiwgInRvIiwgInBhcmFtcyIsICJhY3Rpb24iLCAibGlzdCIsICJibHRpdGxlIiwgImJscmVkaXJlY3QiLCAiYmxsaW1pdCIsICJibG5hbWVzcGFjZSIsICJxdWVyeSIsICJsaW5rVGl0bGVzIiwgImJhY2tsaW5rc1F1ZXJ5IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInJlZGlybGlua3MiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiY29kZSIsICJyZWplY3QiLCAiY3VycmVudFRpdGxlcyIsICJyZXN0VGl0bGVzIiwgInRpdGxlcyIsICJfcXVlcnkkcmVkaXJlY3RzIiwgInRoZXNlUmVkaXJlY3RzIiwgIm1ldGEiLCAidWlwcm9wIiwgInVzZXJpbmZvIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInJhd1BhZ2UiLCAicGFnZXMiLCAiYmFzZVRpbWVTdGFtcCIsICJzdGFydFRpbWVTdGFtcCIsICJlZGl0VG9rZW4iLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJ0aW1lc3RhbXAiLCAic3RhcnR0aW1lc3RhbXAiLCAiZGZkIiwgImNoZWNrQW5kU2F2ZSIsICJtaWxsaXNTaW5jZUxhc3QiLCAiRGF0ZSIsICJub3ciLCAic2V0VGltZW91dCIsICJtaW5vckVkaXQiLCAiYm90RWRpdCIsICJ0b2tlbiIsICJiYXNldGltZXN0YW1wIiwgIndhdGNobGlzdCIsICJtaW5vciIsICJib3QiLCAicG9zdCIsICJnZXRCb2R5IiwgImRpc2FtQXNzaXN0Il0KfQo=
