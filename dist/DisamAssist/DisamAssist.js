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
//! src/DisamAssist/modules/messages.js
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
//! src/DisamAssist/modules/core.js
var startLink;
var ui;
var links;
var pageChanges;
var currentPageTitle;
var currentPageParameters;
var currentLink;
var possibleBacklinkDestinations;
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
  $(() => {
    const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
    if (new RegExp(cfg.disamRegExp).test(getTitle())) {
      const startMainLink = $(mw.util.addPortletLink(portletId, "#", messages.startMain, "ca-disamassist-main")).on("click", startMain);
      const startSameLink = $(mw.util.addPortletLink(portletId, "#", messages.startSame, "ca-disamassist-same")).on("click", startSame);
      startLink = startMainLink.add(startSameLink);
    } else {
      startLink = $(mw.util.addPortletLink(portletId, "#", messages.start, "ca-disamassist-page")).on("click", start);
    }
  });
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
    } else if (editCount !== 0) {
      return messages.editInProgress;
    }
  });
};
var markDisamOptions = () => {
  const optionPageTitles = [];
  const optionMarkers = [];
  getDisamOptions().each((_index, element) => {
    const link = $(element);
    const title = extractPageName(link);
    const optionMarker = $("<a>").attr("href", "#").addClass("disamassist-optionmarker").text(messages.optionMarker).on("click", (ev) => {
      ev.preventDefault();
      chooseReplacement(title);
    });
    link.after(optionMarker);
    optionMarkers[optionMarkers.length] = optionMarker;
    optionPageTitles[optionPageTitles.length] = title;
  });
  const targetPage = getTargetPage();
  fetchRedirects([...optionPageTitles, ...targetPage]).done((redirects) => {
    const endTargetPage = resolveRedirect(targetPage, redirects);
    var _iterator = _createForOfIteratorHelper(optionPageTitles.entries()), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const [ii, optionPageTitle] = _step.value;
        const endOptionTitle = resolveRedirect(optionPageTitle, redirects);
        if (isSamePage(optionPageTitle, targetPage)) {
          optionMarkers[ii].text(messages.targetOptionMarker).addClass("disamassist-curroptionmarker");
        } else if (isSamePage(endOptionTitle, endTargetPage)) {
          optionMarkers[ii].text(messages.redirectOptionMarker).addClass("disamassist-curroptionmarker");
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
  const deferred = new $.Deferred();
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
  const deferred = new $.Deferred();
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
    applyChange(pageChanges.shift());
  }
  if (links.length) {
    currentPageTitle = links.shift();
    displayedPages[currentPageTitle] = true;
    toggleActionButtons(false);
    loadPage(currentPageTitle).done((data) => {
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
        pending[el[0]] = true;
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
  if (choosing) {
    choosing = false;
    summary || (summary = pageTitle ? messages.summaryChanged.replace("$1", pageTitle) : messages.summaryOmitted);
    addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, summary);
    if (pageTitle && (pageTitle !== getTargetPage() || extra)) {
      currentPageParameters.content = replaceLink(currentPageParameters.content, pageTitle, currentLink, extra || "");
    }
    doLink();
  }
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
  if (choosing) {
    const summary = messages.summaryRemoved;
    addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, summary);
    currentPageParameters.content = removeLink(currentPageParameters.content, currentLink);
    doLink();
  }
};
var chooseDisamNeeded = () => {
  chooseReplacement(currentLink.title, cfg.disamNeededText, messages.summaryHelpNeeded);
};
var undo = () => {
  if (pageChanges.length) {
    const lastPage = pageChanges.at(-1);
    if (currentPageTitle !== lastPage.title) {
      links.unshift(currentPageTitle);
      currentPageTitle = lastPage.title;
    }
    currentPageParameters = lastPage.page;
    currentPageParameters.content = lastPage.contentBefore.pop();
    currentLink = lastPage.links.pop();
    lastPage.summary.pop();
    if (!lastPage.contentBefore.length) {
      pageChanges.pop();
    }
    updateContext();
  }
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
  if (!pendingEditBox) {
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
    ui.pageTitleLine.html(messages.pageTitleLine.replace("$1", mw.util.getUrl(currentPageTitle, {
      redirect: "no"
    })).replace("$2", mw.html.escape(currentPageTitle)));
    const context = extractContext(currentPageParameters.content, currentLink);
    ui.context.empty().append($("<span>").text(context[0])).append($("<span>").text(context[1]).addClass("disamassist-inclink")).append($("<span>").text(context[2]));
    const numLines = Math.ceil(ui.context.height() / Number.parseFloat(ui.context.css("line-height")));
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
    ui.pendingEditCounter.text(messages.pendingEditCounter.replace("$1", editCount).replace("$2", countActuallyChangedFullyCheckedPages()));
  }
  if (pendingEditBox) {
    if (editCount === 0 && !running) {
      togglePendingEditBox(false);
      notifyCompletion();
    }
    let textContent = editCount;
    if (editLimit) {
      textContent = messages.pendingEditBoxTimeEstimation.replace("$1", editCount).replace("$2", secondsToHHMMSS(cfg.editCooldown * editCount));
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
  var _iterator2 = _createForOfIteratorHelper(pageChanges), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const pageChange = _step2.value;
      applyChange(pageChange);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  pageChanges = [];
};
var addChange = (pageTitle, page, oldContent, link, summary) => {
  if (!pageChanges.length || pageChanges.at(-1).title !== pageTitle) {
    pageChanges[pageChanges.length] = {
      title: pageTitle,
      page,
      contentBefore: [],
      links: [],
      summary: []
    };
  }
  const lastPageChange = pageChanges.at(-1);
  lastPageChange.contentBefore[lastPageChange.contentBefore.length] = oldContent;
  lastPageChange.links[lastPageChange.links.length] = link;
  lastPageChange.summary[lastPageChange.summary.length] = summary;
};
var checkActualChanges = () => {
  return countActualChanges() !== 0;
};
var countActualChanges = () => {
  let changeCount = 0;
  var _iterator3 = _createForOfIteratorHelper(pageChanges), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const pageChange = _step3.value;
      if (pageChange.page.content !== pageChange.contentBefore[0]) {
        changeCount++;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return changeCount;
};
var countActuallyChangedFullyCheckedPages = () => {
  let changeCount = countActualChanges();
  if (pageChanges.length) {
    const lastChange = pageChanges.at(-1);
    if (lastChange.title === currentPageTitle && currentLink && lastChange.page.content !== lastChange.contentBefore[0]) {
      changeCount--;
    }
  }
  return changeCount;
};
var getDisamOptions = () => {
  const $body = $("body");
  return $body.find("#mw-content-text a").filter((_index, element) => {
    return !!extractPageName($(element));
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
  return "".concat(linkStart, "[[").concat(newContent, "]]").concat(link.afterDescription).concat(extra || "").concat(linkEnd);
};
var removeLink = (text, link) => {
  const linkStart = text.slice(0, Math.max(0, link.start));
  const linkEnd = text.slice(Math.max(0, link.end));
  return linkStart + link.description + link.afterDescription + linkEnd;
};
var extractLink = (text, lastIndex) => {
  const titleRegex = /\[\[(.*?)(?:\|(.*?))?]]/g;
  const templateRegex = /^(\w*[\s!),.:;?}]*){{\s*([^{|}]+?)\s*(?:\|[^{]*?)?}}/;
  titleRegex.lastIndex = lastIndex;
  const match = titleRegex.exec(text);
  if (match && match.index !== -1) {
    var _match$;
    let possiblyAmbiguous = true;
    let hasDisamTemplate = false;
    let _end = match.index + 4 + match[1].length + (match[2] ? 1 + match[2].length : 0);
    let afterDescription = "";
    const rest = text.slice(Math.max(0, _end));
    const templateMatch = templateRegex.exec(rest);
    if (templateMatch) {
      const templateTitle = getCanonicalTitle(templateMatch[2]);
      const {
        disamLinkTemplates
      } = cfg;
      const {
        disamLinkIgnoreTemplates
      } = cfg;
      if (disamLinkTemplates.includes(templateTitle)) {
        _end += templateMatch[0].length;
        afterDescription = templateMatch[1].replace(/\s$/, "");
        hasDisamTemplate = true;
      } else if (disamLinkIgnoreTemplates.includes(templateTitle)) {
        possiblyAmbiguous = false;
      }
    }
    return {
      start: match.index,
      end: _end,
      possiblyAmbiguous,
      hasDisamTemplate,
      title: match[1],
      description: (_match$ = match[2]) !== null && _match$ !== void 0 ? _match$ : match[1],
      afterDescription
    };
  }
};
var extractLinkToPage = (text, destinations, lastIndex) => {
  let link;
  let title;
  do {
    link = extractLink(text, lastIndex);
    if (link) {
      lastIndex = link.end;
      title = getCanonicalTitle(link.title);
    }
  } while (link && (!link.possiblyAmbiguous || !(destinations !== null && destinations !== void 0 && destinations.includes(title))));
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
  try {
    title = new mw.Title(title).getPrefixedText();
  } catch {
  }
  return title;
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
  let pageName = extractPageNameRaw(link);
  if (pageName) {
    const sectionPos = pageName.indexOf("#");
    let section = "";
    if (sectionPos !== -1) {
      section = pageName.slice(Math.max(0, sectionPos));
      pageName = pageName.slice(0, Math.max(0, sectionPos));
    }
    return getCanonicalTitle(pageName) + section;
  }
};
var extractPageNameRaw = (link) => {
  const {
    wgScript,
    wgArticlePath
  } = mw.config.get();
  if (!link.hasClass("image")) {
    const href = link.attr("href");
    if (link.hasClass("new")) {
      if (href.includes(wgScript)) {
        return mw.util.getParamValue("title", href);
      }
    } else {
      const regex = wgArticlePath.replace("$1", "(.*)");
      const regexResult = new RegExp("^".concat(regex, "$")).exec(href);
      if (Array.isArray(regexResult) && regexResult.length) {
        return decodeURIComponent(regexResult[1]);
      }
    }
  }
};
var isDisam = () => {
  const {
    wgCategories
  } = mw.config.get();
  const categories = wgCategories !== null && wgCategories !== void 0 ? wgCategories : [];
  var _iterator4 = _createForOfIteratorHelper(categories), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      const category = _step4.value;
      const {
        disamCategories
      } = cfg;
      if (disamCategories.includes(category)) {
        return true;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return false;
};
var secondsToHHMMSS = (totalSeconds) => {
  let hhmmss = "";
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  const seconds = Math.floor(totalSeconds % 3600 % 60);
  if (hours >= 1) {
    hhmmss = "".concat(pad(hours, "0", 2), ":");
  }
  hhmmss += "".concat(pad(minutes, "0", 2), ":").concat(pad(seconds, "0", 2));
  return hhmmss;
};
var pad = (str, z, width) => {
  str = str.toString();
  if (str.length >= width) {
    return str;
  }
  return Array.from({
    length: width - str.length + 1
  }).join(z) + str;
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
    var _iterator5 = _createForOfIteratorHelper(possibleRedirects), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const possibleRedirect = _step5.value;
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
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
  return currentPage;
};
var getBacklinks = (page) => {
  const deferred = new $.Deferred();
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
    var _iterator6 = _createForOfIteratorHelper(backlinksQuery), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        const element = _step6.value;
        backlinks[backlinks.length] = element.title;
        if (!element.redirlinks) {
          continue;
        }
        linkTitles[linkTitles.length] = element.title;
        const {
          redirlinks
        } = element;
        var _iterator7 = _createForOfIteratorHelper(redirlinks), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            const {
              title
            } = _step7.value;
            backlinks[backlinks.length] = title;
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    deferred.resolve(backlinks, linkTitles);
  }).fail((code) => {
    deferred.reject(messages.getBacklinksError.replace("$1", code));
  });
  return deferred.promise();
};
var fetchRedirects = (pageTitles) => {
  const deferred = new $.Deferred();
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
  const deferred = new $.Deferred();
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    titles: pageTitle,
    prop: "revisions",
    rvprop: "timestamp|content",
    meta: "tokens",
    type: "csrf"
  };
  api.get(params).done(({
    query
  }) => {
    const [rawPage] = query.pages;
    const page = {};
    page.redirect = rawPage.redirect !== void 0;
    page.missing = rawPage.missing !== void 0;
    if (rawPage.revisions) {
      page.content = rawPage.revisions[0].content;
      page.baseTimeStamp = rawPage.revisions[0].timestamp;
    } else {
      page.content = "";
      page.baseTimeStamp = void 0;
    }
    page.startTimeStamp = rawPage.starttimestamp;
    page.editToken = query.tokens.csrftoken;
    deferred.resolve(page);
  }).fail((code) => {
    deferred.reject(messages.loadPageError.replace("$1", pageTitle).replace("$2", code));
  });
  return deferred.promise();
};
var saveWithCooldown = (...args) => {
  const deferred = new $.Deferred();
  pendingSaves[pendingSaves.length] = {
    args,
    dfd: deferred
  };
  if (!runningSaves) {
    checkAndSave();
  }
  return deferred.promise();
};
var checkAndSave = function() {
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
    savePage.apply(this, save.args).done(() => {
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
  const deferred = new $.Deferred();
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
$(install);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvYXBpLnRzIiwgInNyYy9EaXNhbUFzc2lzdC9tb2R1bGVzL2NvbmZpZy50cyIsICJzcmMvRGlzYW1Bc3Npc3QvbW9kdWxlcy9tZXNzYWdlcy5qcyIsICJzcmMvRGlzYW1Bc3Npc3QvbW9kdWxlcy9jb3JlLmpzIiwgInNyYy9EaXNhbUFzc2lzdC9EaXNhbUFzc2lzdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdEaXNhbUFzc2lzdC8xLjEnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImNvbnN0IGNmZyA9IHtcblx0LyogQ2F0ZWdvcmllcyB3aGVyZSBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBhcmUgYWRkZWQgKHVzdWFsbHkgYnkgYSB0ZW1wbGF0ZSBsaWtlIHt7RGlzYW1iaWd1YXRpb259fSAqL1xuXHRkaXNhbUNhdGVnb3JpZXM6IFsn5YWo6YOo5raI5q2n5LmJ6aG16Z2iJ10sXG5cdC8qIFwiQ2Fub25pY2FsIG5hbWVzXCIgb2YgdGhlIHRlbXBsYXRlcyB0aGF0IG1heSBhcHBlYXIgYWZ0ZXIgYW1iaWd1b3VzIGxpbmtzIGFuZCB3aGljaCBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIGZpeGluZyB0aG9zZSBsaW5rcyAqL1xuXHRkaXNhbUxpbmtUZW1wbGF0ZXM6IFtcblx0XHQnRGlzYW1iaWd1YXRpb24gbmVlZGVkJyxcblx0XHQnQW1iaWd1b3VzIGxpbmsnLFxuXHRcdCdBbWJsaW5rJyxcblx0XHQnRGFiIG5lZWRlZCcsXG5cdFx0J0Rpc2FtYi1saW5rJyxcblx0XHQnRGlzYW1iaWcgbmVlZGVkJyxcblx0XHQnRGlzYW1iaWd1YXRlJyxcblx0XHQnRG4nLFxuXHRcdCdOZWVkZGFiJyxcblx0XSxcblx0LyogXCJDYW5vbmljYWwgbmFtZXNcIiBvZiB0aGUgdGVtcGxhdGVzIHRoYXQgZGVzaWduYXRlIGludGVudGlvbmFsIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzICovXG5cdGRpc2FtTGlua0lnbm9yZVRlbXBsYXRlczogWydSIGZyb20gYW1iaWd1b3VzIHBhZ2UnLCAnUiB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlJywgJ1IgZnJvbSBpbmNvbXBsZXRlIGRpc2FtYmlndWF0aW9uJ10sXG5cdC8qIEZvcm1hdCBzdHJpbmcgZm9yIFwiRm9vIChkaXNhbWJpZ3VhdGlvbilcIi1zdHlsZSBwYWdlcyAqL1xuXHRkaXNhbUZvcm1hdDogJyQx77yI5raI5q2n5LmJ77yJJyxcblx0LyogUmVndWxhciBleHByZXNzaW9uIG1hdGNoaW5nIHRoZSB0aXRsZXMgb2YgZGlzYW1iaWd1YXRpb24gcGFnZXMgKHdoZW4gdGhleSBhcmUgZGlmZmVyZW50IGZyb20gdGhlIHRpdGxlcyBvZiB0aGUgcHJpbWFyeSB0b3BpY3MpICovXG5cdGRpc2FtUmVnRXhwOiAnXiguKinvvIgo5raI5q2n5LmJfOa2iOatp+e+qSnvvIkkJyxcblx0LyogVGV4dCB0aGF0IHdpbGwgYmUgaW5zZXJ0ZWQgYWZ0ZXIgdGhlIGxpbmsgaWYgdGhlIHVzZXIgcmVxdWVzdHMgaGVscC4gSWYgdGhlIHZhbHVlIGlzIG51bGwsIHRoZSBvcHRpb24gdG8gcmVxdWVzdCBoZWxwIHdvbid0IGJlIG9mZmVyZWQgKi9cblx0ZGlzYW1OZWVkZWRUZXh0OiAne3tkbnxkYXRlPXt7Jy5jb25jYXQoJ3N1YnN0OicsICdDVVJSRU5UTU9OVEhOQU1FJywgJ319IHt7JywgJ3N1YnN0OicsICdDVVJSRU5UWUVBUn19fX0nKSxcblx0LyogQ29udGVudCBvZiB0aGUgXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiIHBhZ2VzIHRoYXQgd2lsbCBiZSBjcmVhdGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB1c2luZyBEaXNhbUFzc2lzdCBmcm9tIGEgXCJGb29cIiBwYWdlICovXG5cdHJlZGlyZWN0VG9EaXNhbTogJyPph43lrprlkJEgW1skMV1dJy5jb25jYXQoJ3t7UiB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlfX0nKSxcblx0LyogV2hldGhlciBpbnRlbnRpb25hbCBsaW5rcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBjYW4gYmUgZXhwbGljaXRseSBtYXJrZWQgYnkgYWRkaW5nIFwiIChkaXNhbWJpZ3VhdGlvbilcIiAqL1xuXHRpbnRlbnRpb25hbExpbmtPcHRpb246IGZhbHNlLFxuXHQvKiBOYW1lc3BhY2VzIHRoYXQgd2lsbCBiZSBzZWFyY2hlZCBmb3IgaW5jb21pbmcgbGlua3MgdG8gdGhlIGRpc2FtYmlndWF0aW9uIHBhZ2UgKHBhZ2VzIGluIG90aGVyIG5hbWVzcGFjZXMgd2lsbCBiZSBpZ25vcmVkKSAqL1xuXHR0YXJnZXROYW1lc3BhY2VzOiBbNiwgMTAsIDE0LCAxMTgsIDBdLFxuXHQvKiBOdW1iZXIgb2YgYmFja2xpbmtzIHRoYXQgd2lsbCBiZSBkb3dubG9hZGVkIGF0IG9uY2UgV2hlbiB1c2luZyBibHJlZGlyZWN0LCB0aGUgbWF4aW11bSBsaW1pdCBpcyBzdXBwb3NlZGx5IGhhbHZlZCAoc2VlIGh0dHA6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL0FQSTpCYWNrbGlua3MpICovXG5cdGJhY2tsaW5rTGltaXQ6IDI1MCxcblx0LyogTnVtYmVyIG9mIHRpdGxlcyB3ZSBjYW4gcXVlcnkgZm9yIGF0IG9uY2UgKi9cblx0cXVlcnlUaXRsZUxpbWl0OiA1MCxcblx0LyogTnVtYmVyIG9mIGNoYXJhY3RlcnMgYmVmb3JlIGFuZCBhZnRlciB0aGUgaW5jb21pbmcgbGluayB0aGF0IHdpbGwgYmUgZGlzcGxheWVkICovXG5cdHJhZGl1czogMzAwLFxuXHQvKiBIZWlnaHQgb2YgdGhlIGNvbnRleHQgYm94LCBpbiBsaW5lcyAqL1xuXHRudW1Db250ZXh0TGluZXM6IDQsXG5cdC8qIE51bWJlciBvZiBwYWdlcyB0aGF0IHdpbGwgYmUgc3RvcmVkIGJlZm9yZSBzYXZpbmcsIHNvIHRoYXQgY2hhbmdlcyB0byB0aGVtIGNhbiBiZSB1bmRvbmUgaWYgbmVlZCBiZSAqL1xuXHRoaXN0b3J5U2l6ZTogMixcblx0LyogTWluaW11bSB0aW1lIGluIHNlY29uZHMgc2luY2UgdGhlIGxhc3QgY2hhbmdlIHdhcyBzYXZlZCBiZWZvcmUgYSBuZXcgZWRpdCBjYW4gYmUgbWFkZS4gQSBuZWdhdGl2ZSB2YWx1ZSBvciAwIGRpc2FibGVzIHRoZSBjb29sZG93bi4gVXNlcnMgd2l0aCB0aGUgXCJib3RcIiByaWdodCB3b24ndCBiZSBhZmZlY3RlZCBieSB0aGUgY29vbGRvd24gKi9cblx0ZWRpdENvb2xkb3duOiAwLFxuXHQvKiBTcGVjaWZ5IGhvdyB0aGUgd2F0Y2hsaXN0IGlzIGFmZmVjdGVkIGJ5IERpc2FtQXNzaXN0IGVkaXRzLiBQb3NzaWJsZSB2YWx1ZXM6IFwid2F0Y2hcIiwgXCJ1bndhdGNoXCIsIFwicHJlZmVyZW5jZXNcIiwgXCJub2NoYW5nZVwiICovXG5cdHdhdGNoOiAnbm9jaGFuZ2UnLFxufTtcblxuZXhwb3J0IHtjZmd9O1xuIiwgImNvbnN0IG1lc3NhZ2VzID0ge1xuXHRzdGFydDogJ+S4uumTvuaOpea2iOatp+S5iScsXG5cdHN0YXJ0TWFpbjogJ+S4uumTvuiHs+S4u+adoeebrueahOmTvuaOpea2iOatp+S5iScsXG5cdHN0YXJ0U2FtZTogJ+S4uumTvuiHs+a2iOatp+S5iemhteeahOmTvuaOpea2iOatp+S5iScsXG5cdGNsb3NlOiAn5YWz6ZetJyxcblx0dW5kbzogJ+WkjeWOnycsXG5cdG9taXQ6ICfot7Pov4cnLFxuXHRyZWZyZXNoOiAn6YeN5paw5pW055CGJyxcblx0dGl0bGVBc1RleHQ6ICflhbblroPnm67moIcnLFxuXHRkaXNhbU5lZWRlZDogJ+agh+ekunt7ZG59fScsXG5cdGludGVudGlvbmFsTGluazogJ+acieaEj+mTvuWIsOa2iOatp+S5iemhteeahOmTvuaOpScsXG5cdHRpdGxlQXNUZXh0UHJvbXB0OiAn6K+36L6T5YWl5paw55qE6ZO+5o6l55uu5qCH77yaJyxcblx0cmVtb3ZlTGluazogJ+WOu+mZpOmTvuaOpScsXG5cdG9wdGlvbk1hcmtlcjogJyBb6ZO+5o6l5Yiw6L+Z6YeMXScsXG5cdHRhcmdldE9wdGlvbk1hcmtlcjogJyBb5b2T5YmN55uu5qCHXScsXG5cdHJlZGlyZWN0T3B0aW9uTWFya2VyOiAnIFvlvZPliY3nm67moIfvvIjph43lrprlkJHvvIldJyxcblx0cGFnZVRpdGxlTGluZTogJzxhIGhyZWY9XCIkMVwiPiQyPC9hPu+8micsXG5cdG5vTW9yZUxpbmtzOiAn5rKh5pyJ6ZyA6KaB5raI5q2n5LmJ55qE6ZO+5o6l5LqG44CCJyxcblx0cGVuZGluZ0VkaXRDb3VudGVyOiAn5bey5L+d5a2YJDHkuKrvvIzlt7LnvJbovpEkMuS4qicsXG5cdHBlbmRpbmdFZGl0Qm94OiAnRGlzYW1Bc3Npc3TmraPlnKjlgqjlrZjmgqjnmoTnvJbovpHvvIgkMe+8ieOAgicsXG5cdHBlbmRpbmdFZGl0Qm94VGltZUVzdGltYXRpb246ICckMe+8m+WJqeS9meaXtumXtO+8miQyJyxcblx0cGVuZGluZ0VkaXRCb3hMaW1pdGVkOlxuXHRcdCflnKjmiYDmnInmm7TmlLnkv53lrZjliY3vvIzor7fkuI3opoHlhbPpl63pobXpnaLvvJvkvaDlj6/ku6XlnKjlj6bkuIDkuKrpobXpnaLnvJbovpHmsYLpl7vnmb7np5HvvIzkvYbmmK/or7fli7/lkIzml7bkvb/nlKjlpJrkuKpEaXNhbUFzc2lzdOOAgicsXG5cdGVycm9yOiAn6ZSZ6K+v77yaJDEnLFxuXHRmZXRjaFJlZGlyZWN0c0Vycm9yOiAn6I635Y+W6YeN5a6a5ZCR5aSx6LSl77yaXCIkMVwiLicsXG5cdGdldEJhY2tsaW5rc0Vycm9yOiAn5LiL6L295Y+N5ZCR6ZO+5o6l5aSx6LSl77yaXCIkMVwiLicsXG5cdGZldGNoUmlnaHRzRXJyb3I6ICfojrflj5bnlKjmiLfmnYPpmZDlpLHotKXvvJpcIiQxXCIsJyxcblx0bG9hZFBhZ2VFcnJvcjogJ+WKoOi9vSQx5aSx6LSl77yaXCIkMlwiLicsXG5cdHNhdmVQYWdlRXJyb3I6ICfkv53lrZjoh7MkMeWksei0pe+8mlwiJDJcIi4nLFxuXHRkaXNtaXNzRXJyb3I6ICdEaXNtaXNzJyxcblx0cGVuZGluZzogJ0Rpc2FtQXNzaXN05bCa5pyJ5pyq5YKo5a2Y55qE57yW6L6R44CC5aaC5qyy5YKo5a2Y5LmL77yM6K+35oyJ4oCc5YWz6Zet4oCd44CCJyxcblx0ZWRpdEluUHJvZ3Jlc3M6ICdEaXNhbUFzc2lzdOato+WcqOi/m+ihjOe8lui+keOAguiLpeaCqOWwhuacrOWIhumhteWFs+mXre+8jOWPr+iDveS8muS4p+WkseaCqOeahOe8lui+keOAgicsXG5cdGVsbGlwc2lzOiAn4oCm4oCmJyxcblx0bm90aWZ5Q2hhcmFjdGVyOiAn4pyUJyxcblx0c3VtbWFyeTogJ+S9v+eUqFtbTWVkaWFXaWtpOkdhZGdldC1EaXNhbUFzc2lzdC5qc3xEaXNhbUFzc2lzdF1d5riF55CGW1tRVzpEQUJ85raI5q2n5LmJXV3pk77mjqXvvJpbWyQxXV3vvIgkMu+8ieOAgicsXG5cdHN1bW1hcnlDaGFuZ2VkOiAn5pS56ZO+5o6l6IezW1skMV1dJyxcblx0c3VtbWFyeU9taXR0ZWQ6ICfpk77mjqXlt7Lot7Pov4cnLFxuXHRzdW1tYXJ5UmVtb3ZlZDogJ+mTvuaOpeW3suenu+mZpCcsXG5cdHN1bW1hcnlJbnRlbnRpb25hbDogJ+WIu+aEj+mTvuaOpeiHs+a2iOatp+S5iemhtemdoicsXG5cdHN1bW1hcnlIZWxwTmVlZGVkOiAn6ZyA6KaB5biu5YqpJyxcblx0c3VtbWFyeVNlcGFyYXRvcjogJzsgJyxcblx0cmVkaXJlY3RTdW1tYXJ5OiAn5L2/55SoW1tNZWRpYVdpa2k6R2FkZ2V0LURpc2FtQXNzaXN0LmpzfERpc2FtQXNzaXN0XV3liJvlu7rnm67moIfkuLpbWyQxXV3nmoTph43lrprlkJHjgIInLFxufTtcblxuZXhwb3J0IHttZXNzYWdlc307XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2NmZ30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi9tZXNzYWdlcyc7XG5cbmxldCBzdGFydExpbms7XG5sZXQgdWk7XG5sZXQgbGlua3M7XG5sZXQgcGFnZUNoYW5nZXM7XG5sZXQgY3VycmVudFBhZ2VUaXRsZTtcbmxldCBjdXJyZW50UGFnZVBhcmFtZXRlcnM7XG5sZXQgY3VycmVudExpbms7XG5sZXQgcG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucztcbmxldCBmb3JjZVNhbWVQYWdlID0gZmFsc2U7XG5sZXQgcnVubmluZyA9IGZhbHNlO1xubGV0IGNob29zaW5nID0gZmFsc2U7XG5sZXQgY2FuTWFya0ludGVudGlvbmFsTGlua3MgPSBmYWxzZTtcbmxldCBkaXNwbGF5ZWRQYWdlcyA9IHt9O1xubGV0IGVkaXRDb3VudCA9IDA7XG5sZXQgZWRpdExpbWl0O1xuY29uc3QgcGVuZGluZ1NhdmVzID0gW107XG5sZXQgcGVuZGluZ0VkaXRCb3g7XG5sZXQgcGVuZGluZ0VkaXRCb3hUZXh0O1xubGV0IGxhc3RFZGl0TWlsbGlzID0gMDtcbmxldCBydW5uaW5nU2F2ZXMgPSBmYWxzZTtcblxuLyogRW50cnkgcG9pbnQuIENoZWNrIHdoZXRoZXIgd2UgYXJlIGluIGEgZGlzYW1iaWd1YXRpb24gcGFnZS4gSWYgc28sIGFkZCBhIGxpbmsgdG8gc3RhcnQgdGhlIHRvb2wgKi9cbmNvbnN0IGluc3RhbGwgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0FjdGlvbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8ICFpc0Rpc2FtKCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0JCgoKSA9PiB7XG5cdFx0Y29uc3QgcG9ydGxldElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0XHQvLyBUaGlzIGlzIGEgXCIgKGRpc2FtYmlndWF0aW9uKVwiIHBhZ2Vcblx0XHRpZiAobmV3IFJlZ0V4cChjZmcuZGlzYW1SZWdFeHApLnRlc3QoZ2V0VGl0bGUoKSkpIHtcblx0XHRcdGNvbnN0IHN0YXJ0TWFpbkxpbmsgPSAkKFxuXHRcdFx0XHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBtZXNzYWdlcy5zdGFydE1haW4sICdjYS1kaXNhbWFzc2lzdC1tYWluJylcblx0XHRcdCkub24oJ2NsaWNrJywgc3RhcnRNYWluKTtcblx0XHRcdGNvbnN0IHN0YXJ0U2FtZUxpbmsgPSAkKFxuXHRcdFx0XHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBtZXNzYWdlcy5zdGFydFNhbWUsICdjYS1kaXNhbWFzc2lzdC1zYW1lJylcblx0XHRcdCkub24oJ2NsaWNrJywgc3RhcnRTYW1lKTtcblx0XHRcdHN0YXJ0TGluayA9IHN0YXJ0TWFpbkxpbmsuYWRkKHN0YXJ0U2FtZUxpbmspO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdGFydExpbmsgPSAkKG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIG1lc3NhZ2VzLnN0YXJ0LCAnY2EtZGlzYW1hc3Npc3QtcGFnZScpKS5vbihcblx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0c3RhcnRcblx0XHRcdCk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbi8qIFN0YXJ0IHRoZSB0b29sLiBEaXNwbGF5IHRoZSBVSSBhbmQgYmVnaW4gbG9va2luZyBmb3IgbGlua3MgdG8gZml4ICovXG5jb25zdCBzdGFydCA9ICgpID0+IHtcblx0aWYgKHJ1bm5pbmcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRydW5uaW5nID0gdHJ1ZTtcblx0bGlua3MgPSBbXTtcblx0cGFnZUNoYW5nZXMgPSBbXTtcblx0ZGlzcGxheWVkUGFnZXMgPSB7fTtcblx0ZW5zdXJlREFCRXhpc3RzKCkudGhlbigoY2FuTWFyaykgPT4ge1xuXHRcdGNhbk1hcmtJbnRlbnRpb25hbExpbmtzID0gY2FuTWFyaztcblx0XHRjcmVhdGVVSSgpO1xuXHRcdGFkZFVubG9hZENvbmZpcm0oKTtcblx0XHRtYXJrRGlzYW1PcHRpb25zKCk7XG5cdFx0Y2hlY2tFZGl0TGltaXQoKS50aGVuKCgpID0+IHtcblx0XHRcdHRvZ2dsZVBlbmRpbmdFZGl0Qm94KGZhbHNlKTtcblx0XHRcdGRvUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8qIFN0YXJ0IERpc2FtQXNzaXN0LiBEaXNhbWJpZ3VhdGUgaW5jb21pbmcgbGlua3MgdG8gdGhlIGN1cnJlbnQgcGFnZSwgcmVnYXJkbGVzcyBvZiB0aGUgdGl0bGUuICovXG5jb25zdCBzdGFydFNhbWUgPSAoKSA9PiB7XG5cdGZvcmNlU2FtZVBhZ2UgPSB0cnVlO1xuXHRzdGFydCgpO1xufTtcblxuLyogU3RhcnQgRGlzYW1Bc3Npc3QuIElmIHRoZSBwYWdlIHRpdGxlIGVuZHMgd2l0aCBcIiAoZGlzYW1iaWd1YXRpb24pXCIsIGRpc2FtYmlndWF0ZSBsaW5rcyB0byB0aGUgcHJpbWFyeSB0b3BpYyBhcnRpY2xlLiBPdGhlcndpc2UsIGRpc2FtYmlndWF0ZSBsaW5rcyB0byB0aGUgY3VycmVudCBwYWdlLiAqL1xuY29uc3Qgc3RhcnRNYWluID0gKCkgPT4ge1xuXHRmb3JjZVNhbWVQYWdlID0gZmFsc2U7XG5cdHN0YXJ0KCk7XG59O1xuXG4vKiBDcmVhdGUgYW5kIHNob3cgdGhlIHVzZXIgaW50ZXJmYWNlLiAqL1xuY29uc3QgY3JlYXRlVUkgPSAoKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHR1aSA9IHtcblx0XHRkaXNwbGF5OiAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1ib3ggZGlzYW1hc3Npc3QtbWFpbmJveCcpLFxuXHRcdGZpbmlzaGVkTWVzc2FnZTogJCgnPGRpdj4nKS50ZXh0KG1lc3NhZ2VzLm5vTW9yZUxpbmtzKS5oaWRlKCksXG5cdFx0cGFnZVRpdGxlTGluZTogJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LXBhZ2V0aXRsZWxpbmUnKSxcblx0XHRwZW5kaW5nRWRpdENvdW50ZXI6ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWVkaXRjb3VudGVyJyksXG5cdFx0Y29udGV4dDogJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWNvbnRleHQnKSxcblx0XHR1bmRvQnV0dG9uOiBjcmVhdGVCdXR0b24obWVzc2FnZXMudW5kbywgdW5kbyksXG5cdFx0b21pdEJ1dHRvbjogY3JlYXRlQnV0dG9uKG1lc3NhZ2VzLm9taXQsIG9taXQpLFxuXHRcdGVuZEJ1dHRvbjogY3JlYXRlQnV0dG9uKG1lc3NhZ2VzLmNsb3NlLCBzYXZlQW5kRW5kKSxcblx0XHRyZWZyZXNoQnV0dG9uOiBjcmVhdGVCdXR0b24obWVzc2FnZXMucmVmcmVzaCwgcmVmcmVzaCksXG5cdFx0dGl0bGVBc1RleHRCdXR0b246IGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy50aXRsZUFzVGV4dCwgY2hvb3NlVGl0bGVGcm9tUHJvbXB0KSxcblx0XHRpbnRlbnRpb25hbExpbmtCdXR0b246IGNhbk1hcmtJbnRlbnRpb25hbExpbmtzXG5cdFx0XHQ/IGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy5pbnRlbnRpb25hbExpbmssIGNob29zZUludGVudGlvbmFsTGluaylcblx0XHRcdDogJCgnPHNwYW4+JyksXG5cdFx0ZGlzYW1OZWVkZWRCdXR0b246IGNmZy5kaXNhbU5lZWRlZFRleHQgPyBjcmVhdGVCdXR0b24obWVzc2FnZXMuZGlzYW1OZWVkZWQsIGNob29zZURpc2FtTmVlZGVkKSA6ICQoJzxzcGFuPicpLFxuXHRcdHJlbW92ZUxpbmtCdXR0b246IGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy5yZW1vdmVMaW5rLCBjaG9vc2VMaW5rUmVtb3ZhbCksXG5cdH07XG5cdGNvbnN0IHRvcCA9ICQoJzxkaXY+Jylcblx0XHQuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LXRvcCcpXG5cdFx0LmFwcGVuZChbdWkucGVuZGluZ0VkaXRDb3VudGVyLCB1aS5maW5pc2hlZE1lc3NhZ2UsIHVpLnBhZ2VUaXRsZUxpbmVdKTtcblx0Y29uc3QgbGVmdEJ1dHRvbnMgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdkaXNhbWFzc2lzdC1sZWZ0YnV0dG9ucycpXG5cdFx0LmFwcGVuZChbXG5cdFx0XHR1aS50aXRsZUFzVGV4dEJ1dHRvbixcblx0XHRcdHVpLnJlbW92ZUxpbmtCdXR0b24sXG5cdFx0XHR1aS5pbnRlbnRpb25hbExpbmtCdXR0b24sXG5cdFx0XHR1aS5kaXNhbU5lZWRlZEJ1dHRvbixcblx0XHRcdHVpLm9taXRCdXR0b24sXG5cdFx0XSk7XG5cdGNvbnN0IHJpZ2h0QnV0dG9ucyA9ICQoJzxkaXY+Jylcblx0XHQuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LXJpZ2h0YnV0dG9ucycpXG5cdFx0LmFwcGVuZChbdWkudW5kb0J1dHRvbiwgdWkucmVmcmVzaEJ1dHRvbiwgdWkuZW5kQnV0dG9uXSk7XG5cdGNvbnN0IGFsbEJ1dHRvbnMgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1hbGxidXR0b25zJykuYXBwZW5kKFtsZWZ0QnV0dG9ucywgcmlnaHRCdXR0b25zXSk7XG5cdHVpLmRpc3BsYXkuYXBwZW5kKFt0b3AsIHVpLmNvbnRleHQsIGFsbEJ1dHRvbnNdKTtcblx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0dG9nZ2xlQWN0aW9uQnV0dG9ucyhmYWxzZSk7XG5cdC8vIEluc2VydCB0aGUgVUkgaW4gdGhlIHBhZ2Vcblx0JGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCcpLmJlZm9yZSh1aS5kaXNwbGF5KTtcblx0dWkuZGlzcGxheS5oaWRlKCkuZmFkZUluKCk7XG59O1xuXG4vKiBJZiB0aGVyZSBhcmUgcGVuZGluZyBjaGFuZ2VzLCBzaG93IGEgY29uZmlybSBkaWFsb2cgYmVmb3JlIGNsb3NpbmcgKi9cbmNvbnN0IGFkZFVubG9hZENvbmZpcm0gPSAoKSA9PiB7XG5cdCQod2luZG93KS5vbignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuXHRcdGlmIChydW5uaW5nICYmIGNoZWNrQWN0dWFsQ2hhbmdlcygpKSB7XG5cdFx0XHRyZXR1cm4gbWVzc2FnZXMucGVuZGluZztcblx0XHR9IGVsc2UgaWYgKGVkaXRDb3VudCAhPT0gMCkge1xuXHRcdFx0cmV0dXJuIG1lc3NhZ2VzLmVkaXRJblByb2dyZXNzO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKiBNYXJrIHRoZSBkaXNhbWJpZ3VhdGlvbiBvcHRpb25zIGFzIHN1Y2ggKi9cbmNvbnN0IG1hcmtEaXNhbU9wdGlvbnMgPSAoKSA9PiB7XG5cdGNvbnN0IG9wdGlvblBhZ2VUaXRsZXMgPSBbXTtcblx0Y29uc3Qgb3B0aW9uTWFya2VycyA9IFtdO1xuXHRnZXREaXNhbU9wdGlvbnMoKS5lYWNoKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRjb25zdCBsaW5rID0gJChlbGVtZW50KTtcblx0XHRjb25zdCB0aXRsZSA9IGV4dHJhY3RQYWdlTmFtZShsaW5rKTtcblx0XHRjb25zdCBvcHRpb25NYXJrZXIgPSAkKCc8YT4nKVxuXHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHQuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LW9wdGlvbm1hcmtlcicpXG5cdFx0XHQudGV4dChtZXNzYWdlcy5vcHRpb25NYXJrZXIpXG5cdFx0XHQub24oJ2NsaWNrJywgKGV2KSA9PiB7XG5cdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGNob29zZVJlcGxhY2VtZW50KHRpdGxlKTtcblx0XHRcdH0pO1xuXHRcdGxpbmsuYWZ0ZXIob3B0aW9uTWFya2VyKTtcblx0XHRvcHRpb25NYXJrZXJzW29wdGlvbk1hcmtlcnMubGVuZ3RoXSA9IG9wdGlvbk1hcmtlcjtcblx0XHRvcHRpb25QYWdlVGl0bGVzW29wdGlvblBhZ2VUaXRsZXMubGVuZ3RoXSA9IHRpdGxlO1xuXHR9KTtcblx0Ly8gTm93IGNoZWNrIHRoZSBkaXNhbWJpZ3VhdGlvbiBvcHRpb25zIGFuZCBkaXNwbGF5IGEgZGlmZmVyZW50IG1lc3NhZ2UgZm9yIHRob3NlIHRoYXQgYXJlXG5cdC8vIGFjdHVhbGx5IHRoZSBzYW1lIGFzIHRoZSB0YXJnZXQgcGFnZSB3aGVyZSB0aGUgbGlua3MgZ28sIGFzIGNob29zaW5nIHRob3NlIG9wdGlvbnMgZG9lc24ndCByZWFsbHlcblx0Ly8gYWNjb21wbGlzaCBhbnl0aGluZyAoZXhjZXB0IGJ5cGFzc2luZyByZWRpcmVjdHMsIHdoaWNoIG1pZ2h0IGJlIHVzZWZ1bCBpbiBzb21lIGNhc2VzKVxuXHRjb25zdCB0YXJnZXRQYWdlID0gZ2V0VGFyZ2V0UGFnZSgpO1xuXHRmZXRjaFJlZGlyZWN0cyhbLi4ub3B0aW9uUGFnZVRpdGxlcywgLi4udGFyZ2V0UGFnZV0pXG5cdFx0LmRvbmUoKHJlZGlyZWN0cykgPT4ge1xuXHRcdFx0Y29uc3QgZW5kVGFyZ2V0UGFnZSA9IHJlc29sdmVSZWRpcmVjdCh0YXJnZXRQYWdlLCByZWRpcmVjdHMpO1xuXHRcdFx0Zm9yIChjb25zdCBbaWksIG9wdGlvblBhZ2VUaXRsZV0gb2Ygb3B0aW9uUGFnZVRpdGxlcy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0Y29uc3QgZW5kT3B0aW9uVGl0bGUgPSByZXNvbHZlUmVkaXJlY3Qob3B0aW9uUGFnZVRpdGxlLCByZWRpcmVjdHMpO1xuXHRcdFx0XHRpZiAoaXNTYW1lUGFnZShvcHRpb25QYWdlVGl0bGUsIHRhcmdldFBhZ2UpKSB7XG5cdFx0XHRcdFx0b3B0aW9uTWFya2Vyc1tpaV0udGV4dChtZXNzYWdlcy50YXJnZXRPcHRpb25NYXJrZXIpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1jdXJyb3B0aW9ubWFya2VyJyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNTYW1lUGFnZShlbmRPcHRpb25UaXRsZSwgZW5kVGFyZ2V0UGFnZSkpIHtcblx0XHRcdFx0XHRvcHRpb25NYXJrZXJzW2lpXS50ZXh0KG1lc3NhZ2VzLnJlZGlyZWN0T3B0aW9uTWFya2VyKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtY3Vycm9wdGlvbm1hcmtlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuZmFpbChlcnJvcik7XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIGludGVudGlvbmFsIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzIGNhbiBiZSBleHBsaWNpdGx5IG1hcmtlZC8qICogYXMgc3VjaCBpbiB0aGlzIHdpa2kuIElmIHNvLCBlbnN1cmUgdGhhdCBhIFwiRm9vIChkaXNhbWJpZ3VhdGlvbilcIiBwYWdlIGV4aXN0cy4vKiAqIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZSAqL1xuY29uc3QgZW5zdXJlREFCRXhpc3RzID0gKCkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcblx0Ly8gVGhhdCBjb25jZXB0IGRvZXNuJ3QgZXhpc3QgaW4gdGhpcyB3aWtpLlxuXHRpZiAoIWNmZy5pbnRlbnRpb25hbExpbmtPcHRpb24pIHtcblx0XHRkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcblx0XHQvLyBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgZXhpc3RzOiBpdCdzIHRoZSBjdXJyZW50IHBhZ2UuXG5cdH0gZWxzZSBpZiAobmV3IFJlZ0V4cChjZmcuZGlzYW1SZWdFeHApLmV4ZWModGl0bGUpKSB7XG5cdFx0ZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBkaXNhbVRpdGxlID0gY2ZnLmRpc2FtRm9ybWF0LnJlcGxhY2UoJyQxJywgdGl0bGUpO1xuXHRcdGxvYWRQYWdlKGRpc2FtVGl0bGUpXG5cdFx0XHQuZG9uZSgocGFnZSkgPT4ge1xuXHRcdFx0XHQvLyBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgZG9lc24ndCBleGlzdC5cblx0XHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRcdC8vIFdlIHRyeSB0byBjcmVhdGUgaXRcblx0XHRcdFx0XHRwYWdlLmNvbnRlbnQgPSBjZmcucmVkaXJlY3RUb0Rpc2FtLnJlcGxhY2UoJyQxJywgdGl0bGUpO1xuXHRcdFx0XHRcdGNvbnN0IHN1bW1hcnkgPSBtZXNzYWdlcy5yZWRpcmVjdFN1bW1hcnkucmVwbGFjZSgnJDEnLCB0aXRsZSk7XG5cdFx0XHRcdFx0c2F2ZVBhZ2UoZGlzYW1UaXRsZSwgcGFnZSwgc3VtbWFyeSwgZmFsc2UsIHRydWUpXG5cdFx0XHRcdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGVycm9yKGRlc2NyaXB0aW9uKTtcblx0XHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShmYWxzZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQvLyBJdCBkb2VzIGV4aXN0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5mYWlsKChkZXNjcmlwdGlvbikgPT4ge1xuXHRcdFx0XHRlcnJvcihkZXNjcmlwdGlvbik7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoZmFsc2UpO1xuXHRcdFx0fSk7XG5cdH1cblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIENoZWNrIHdoZXRoZXIgdGhlIGVkaXQgY29vbGRvd24gYXBwbGllcyBhbmQgc2V0cyBlZGl0TGltaXQgYWNjb3JkaW5nbHkuLyogKiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UgKi9cbmNvbnN0IGNoZWNrRWRpdExpbWl0ID0gKCkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGlmIChjZmcuZWRpdENvb2xkb3duIDw9IDApIHtcblx0XHRlZGl0TGltaXQgPSBmYWxzZTtcblx0XHRkZWZlcnJlZC5yZXNvbHZlKCk7XG5cdH0gZWxzZSB7XG5cdFx0ZmV0Y2hSaWdodHMoKVxuXHRcdFx0LmRvbmUoKHJpZ2h0cykgPT4ge1xuXHRcdFx0XHRlZGl0TGltaXQgPSAhcmlnaHRzLmluY2x1ZGVzKCdib3QnKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0ZXJyb3IoZGVzY3JpcHRpb24pO1xuXHRcdFx0XHRlZGl0TGltaXQgPSB0cnVlO1xuXHRcdFx0fSlcblx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0XHR9KTtcblx0fVxuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogRmluZCBhbmQgYXNrIHRoZSB1c2VyIHRvIGZpeCBhbGwgdGhlIGluY29taW5nIGxpbmtzIHRvIHRoZSBkaXNhbWJpZ3VhdGlvbiAoXCJ0YXJnZXRcIikvKiAqIHBhZ2UgZnJvbSBhIHNpbmdsZSBcIm9yaWdpblwiIHBhZ2UgKi9cbmNvbnN0IGRvUGFnZSA9ICgpID0+IHtcblx0aWYgKHBhZ2VDaGFuZ2VzLmxlbmd0aCA+IGNmZy5oaXN0b3J5U2l6ZSkge1xuXHRcdGFwcGx5Q2hhbmdlKHBhZ2VDaGFuZ2VzLnNoaWZ0KCkpO1xuXHR9XG5cdGlmIChsaW5rcy5sZW5ndGgpIHtcblx0XHRjdXJyZW50UGFnZVRpdGxlID0gbGlua3Muc2hpZnQoKTtcblx0XHRkaXNwbGF5ZWRQYWdlc1tjdXJyZW50UGFnZVRpdGxlXSA9IHRydWU7XG5cdFx0dG9nZ2xlQWN0aW9uQnV0dG9ucyhmYWxzZSk7XG5cdFx0bG9hZFBhZ2UoY3VycmVudFBhZ2VUaXRsZSlcblx0XHRcdC5kb25lKChkYXRhKSA9PiB7XG5cdFx0XHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycyA9IGRhdGE7XG5cdFx0XHRcdGN1cnJlbnRMaW5rID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRkb0xpbmsoKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbChlcnJvcik7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgdGFyZ2V0UGFnZSA9IGdldFRhcmdldFBhZ2UoKTtcblx0XHRnZXRCYWNrbGlua3ModGFyZ2V0UGFnZSlcblx0XHRcdC5kb25lKChiYWNrbGlua3MsIHBhZ2VUaXRsZXMpID0+IHtcblx0XHRcdFx0Y29uc3QgcGVuZGluZyA9IHt9O1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVsIG9mIHBlbmRpbmdTYXZlcykge1xuXHRcdFx0XHRcdHBlbmRpbmdbZWxbMF1dID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwb3NzaWJsZUJhY2tsaW5rRGVzdGluYXRpb25zID0gcGFnZVRpdGxlcy5maWx0ZXIoKHQpID0+IHtcblx0XHRcdFx0XHRpZiAodCA9PT0gdGFyZ2V0UGFnZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiByZW1vdmVEaXNhbSh0KSAhPT0gdGFyZ2V0UGFnZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIE9ubHkgaW5jb21pbmcgbGlua3MgZnJvbSBwYWdlcyB3ZSBoYXZlbid0IHNlZW4geWV0IGFuZCB3ZSBhcmVuJ3QgY3VycmVudGx5XG5cdFx0XHRcdC8vIHNhdmluZyAoZGlzcGxheWVkUGFnZXMgaXMgcmVzZXQgd2hlbiB0aGUgdG9vbCBpcyBjbG9zZWQgYW5kIG9wZW5lZCBhZ2Fpbixcblx0XHRcdFx0Ly8gd2hpbGUgdGhlIGxpc3Qgb2YgcGVuZGluZyBjaGFuZ2VzIGlzbid0OyBpZiB0aGUgZWRpdCBjb29sZG93biBpcyBkaXNhYmxlZCxcblx0XHRcdFx0Ly8gaXQgd2lsbCBiZSBlbXB0eSlcblx0XHRcdFx0bGlua3MgPSBiYWNrbGlua3MuZmlsdGVyKChlbCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAhZGlzcGxheWVkUGFnZXNbZWxdICYmICFwZW5kaW5nW2VsXTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChsaW5rcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRkb1BhZ2UoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR1cGRhdGVDb250ZXh0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuZmFpbChlcnJvcik7XG5cdH1cbn07XG5cbi8qIEZpbmQgYW5kIGFzayB0aGUgdXNlciB0byBmaXggYSBzaW5nbGUgaW5jb21pbmcgbGluayB0byB0aGUgZGlzYW1iaWd1YXRpb24gKFwidGFyZ2V0XCIpLyogKiBwYWdlICovXG5jb25zdCBkb0xpbmsgPSAoKSA9PiB7XG5cdGN1cnJlbnRMaW5rID0gZXh0cmFjdExpbmtUb1BhZ2UoXG5cdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQsXG5cdFx0cG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucyxcblx0XHRjdXJyZW50TGluayA/IGN1cnJlbnRMaW5rLmVuZCA6IDBcblx0KTtcblx0aWYgKGN1cnJlbnRMaW5rKSB7XG5cdFx0dXBkYXRlQ29udGV4dCgpO1xuXHR9IGVsc2Uge1xuXHRcdGRvUGFnZSgpO1xuXHR9XG59O1xuXG4vKiBSZXBsYWNlIHRoZSB0YXJnZXQgb2YgYSBsaW5rIHdpdGggYSBkaWZmZXJlbnQgb25lLyogKiBwYWdlVGl0bGU6IE5ldyBsaW5rIHRhcmdldC8qICogZXh0cmE6IEFkZGl0aW9uYWwgdGV4dCBhZnRlciB0aGUgbGluayAob3B0aW9uYWwpLyogKiBzdW1tYXJ5OiBDaGFuZ2Ugc3VtbWFyeSAob3B0aW9uYWwpICovXG5jb25zdCBjaG9vc2VSZXBsYWNlbWVudCA9IChwYWdlVGl0bGUsIGV4dHJhLCBzdW1tYXJ5KSA9PiB7XG5cdGlmIChjaG9vc2luZykge1xuXHRcdGNob29zaW5nID0gZmFsc2U7XG5cdFx0c3VtbWFyeSB8fD0gcGFnZVRpdGxlID8gbWVzc2FnZXMuc3VtbWFyeUNoYW5nZWQucmVwbGFjZSgnJDEnLCBwYWdlVGl0bGUpIDogbWVzc2FnZXMuc3VtbWFyeU9taXR0ZWQ7XG5cdFx0YWRkQ2hhbmdlKGN1cnJlbnRQYWdlVGl0bGUsIGN1cnJlbnRQYWdlUGFyYW1ldGVycywgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQsIGN1cnJlbnRMaW5rLCBzdW1tYXJ5KTtcblx0XHRpZiAocGFnZVRpdGxlICYmIChwYWdlVGl0bGUgIT09IGdldFRhcmdldFBhZ2UoKSB8fCBleHRyYSkpIHtcblx0XHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50ID0gcmVwbGFjZUxpbmsoXG5cdFx0XHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LFxuXHRcdFx0XHRwYWdlVGl0bGUsXG5cdFx0XHRcdGN1cnJlbnRMaW5rLFxuXHRcdFx0XHRleHRyYSB8fCAnJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0ZG9MaW5rKCk7XG5cdH1cbn07XG5cbi8qIFJlcGxhY2UgdGhlIGxpbmsgd2l0aCBhbiBleHBsaWNpdCBsaW5rIHRvIHRoZSBkaXNhbWJpZ3VhdGlvbiBwYWdlICovXG5jb25zdCBjaG9vc2VJbnRlbnRpb25hbExpbmsgPSAoKSA9PiB7XG5cdGNvbnN0IGRpc2FtVGl0bGUgPSBjZmcuZGlzYW1Gb3JtYXQucmVwbGFjZSgnJDEnLCBnZXRUYXJnZXRQYWdlKCkpO1xuXHRjaG9vc2VSZXBsYWNlbWVudChkaXNhbVRpdGxlLCAnJywgbWVzc2FnZXMuc3VtbWFyeUludGVudGlvbmFsKTtcbn07XG5cbi8qIFByb21wdCBmb3IgYW4gYWx0ZXJuYXRpdmUgbGluayB0YXJnZXQgYW5kIHVzZSBpdCBhcyBhIHJlcGxhY2VtZW50ICovXG5jb25zdCBjaG9vc2VUaXRsZUZyb21Qcm9tcHQgPSAoKSA9PiB7XG5cdGNvbnN0IHRpdGxlID0gcHJvbXB0KG1lc3NhZ2VzLnRpdGxlQXNUZXh0UHJvbXB0KTtcblx0aWYgKHRpdGxlICE9PSBudWxsKSB7XG5cdFx0Y2hvb3NlUmVwbGFjZW1lbnQodGl0bGUpO1xuXHR9XG59O1xuXG4vKiBSZW1vdmUgdGhlIGN1cnJlbnQgbGluaywgbGVhdmluZyB0aGUgdGV4dCB1bmNoYW5nZWQgKi9cbmNvbnN0IGNob29zZUxpbmtSZW1vdmFsID0gKCkgPT4ge1xuXHRpZiAoY2hvb3NpbmcpIHtcblx0XHRjb25zdCBzdW1tYXJ5ID0gbWVzc2FnZXMuc3VtbWFyeVJlbW92ZWQ7XG5cdFx0YWRkQ2hhbmdlKGN1cnJlbnRQYWdlVGl0bGUsIGN1cnJlbnRQYWdlUGFyYW1ldGVycywgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQsIGN1cnJlbnRMaW5rLCBzdW1tYXJ5KTtcblx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCA9IHJlbW92ZUxpbmsoY3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQsIGN1cnJlbnRMaW5rKTtcblx0XHRkb0xpbmsoKTtcblx0fVxufTtcblxuLyogQWRkIGEgXCJkaXNhbWJpZ3VhdGlvbiBuZWVkZWRcIiB0ZW1wbGF0ZSBhZnRlciB0aGUgbGluayAqL1xuY29uc3QgY2hvb3NlRGlzYW1OZWVkZWQgPSAoKSA9PiB7XG5cdGNob29zZVJlcGxhY2VtZW50KGN1cnJlbnRMaW5rLnRpdGxlLCBjZmcuZGlzYW1OZWVkZWRUZXh0LCBtZXNzYWdlcy5zdW1tYXJ5SGVscE5lZWRlZCk7XG59O1xuXG4vKiBVbmRvIHRoZSBsYXN0IGNoYW5nZSAqL1xuY29uc3QgdW5kbyA9ICgpID0+IHtcblx0aWYgKHBhZ2VDaGFuZ2VzLmxlbmd0aCkge1xuXHRcdGNvbnN0IGxhc3RQYWdlID0gcGFnZUNoYW5nZXMuYXQoLTEpO1xuXHRcdGlmIChjdXJyZW50UGFnZVRpdGxlICE9PSBsYXN0UGFnZS50aXRsZSkge1xuXHRcdFx0bGlua3MudW5zaGlmdChjdXJyZW50UGFnZVRpdGxlKTtcblx0XHRcdGN1cnJlbnRQYWdlVGl0bGUgPSBsYXN0UGFnZS50aXRsZTtcblx0XHR9XG5cdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzID0gbGFzdFBhZ2UucGFnZTtcblx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCA9IGxhc3RQYWdlLmNvbnRlbnRCZWZvcmUucG9wKCk7XG5cdFx0Y3VycmVudExpbmsgPSBsYXN0UGFnZS5saW5rcy5wb3AoKTtcblx0XHRsYXN0UGFnZS5zdW1tYXJ5LnBvcCgpO1xuXHRcdGlmICghbGFzdFBhZ2UuY29udGVudEJlZm9yZS5sZW5ndGgpIHtcblx0XHRcdHBhZ2VDaGFuZ2VzLnBvcCgpO1xuXHRcdH1cblx0XHR1cGRhdGVDb250ZXh0KCk7XG5cdH1cbn07XG5cbi8qIE9taXQgdGhlIGN1cnJlbnQgbGluayB3aXRob3V0IG1ha2luZyBhIGNoYW5nZSAqL1xuY29uc3Qgb21pdCA9ICgpID0+IHtcblx0Y2hvb3NlUmVwbGFjZW1lbnQoKTtcbn07XG5cbi8qIFNhdmUgYWxsIHRoZSBwZW5kaW5nIGNoYW5nZXMgYW5kIHJlc3RhcnQgdGhlIHRvb2wuICovXG5jb25zdCByZWZyZXNoID0gKCkgPT4ge1xuXHRzYXZlQW5kRW5kKCk7XG5cdHN0YXJ0KCk7XG59O1xuXG4vKiBFbmFibGUgb3IgZGlzYWJsZSB0aGUgYnV0dG9ucyB0aGF0IGNhbiBwZXJmb3JtIGFjdGlvbnMgb24gYSBwYWdlIG9yIGNoYW5nZSB0aGUgY3VycmVudCBsaW5rLi8qICogZW5hYmxlZDogV2hldGhlciB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYnV0dG9ucyAqL1xuY29uc3QgdG9nZ2xlQWN0aW9uQnV0dG9ucyA9IChlbmFibGVkKSA9PiB7XG5cdGNvbnN0IGFmZmVjdGVkQnV0dG9ucyA9IFtcblx0XHR1aS5vbWl0QnV0dG9uLFxuXHRcdHVpLnRpdGxlQXNUZXh0QnV0dG9uLFxuXHRcdHVpLnJlbW92ZUxpbmtCdXR0b24sXG5cdFx0dWkuaW50ZW50aW9uYWxMaW5rQnV0dG9uLFxuXHRcdHVpLmRpc2FtTmVlZGVkQnV0dG9uLFxuXHRcdHVpLnVuZG9CdXR0b24sXG5cdF07XG5cdGZvciAoY29uc3QgYnV0dG9uIG9mIGFmZmVjdGVkQnV0dG9ucykge1xuXHRcdGJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsICFlbmFibGVkKTtcblx0fVxufTtcblxuLyogU2hvdyBvciBoaWRlIHRoZSAnbm8gbW9yZSBsaW5rcycgbWVzc2FnZS8qICogc2hvdzogV2hldGhlciB0byBzaG93IG9yIGhpZGUgdGhlIG1lc3NhZ2UgKi9cbmNvbnN0IHRvZ2dsZUZpbmlzaGVkTWVzc2FnZSA9IChzaG93KSA9PiB7XG5cdHRvZ2dsZUFjdGlvbkJ1dHRvbnMoIXNob3cpO1xuXHR1aS51bmRvQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgIXBhZ2VDaGFuZ2VzLmxlbmd0aCk7XG5cdHVpLmZpbmlzaGVkTWVzc2FnZS50b2dnbGUoc2hvdyk7XG5cdHVpLnBhZ2VUaXRsZUxpbmUudG9nZ2xlKCFzaG93KTtcblx0dWkuY29udGV4dC50b2dnbGUoIXNob3cpO1xufTtcblxuY29uc3QgdG9nZ2xlUGVuZGluZ0VkaXRCb3ggPSAoc2hvdykgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0aWYgKCFwZW5kaW5nRWRpdEJveCkge1xuXHRcdHBlbmRpbmdFZGl0Qm94ID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYm94IGRpc2FtYXNzaXN0LXBlbmRpbmdlZGl0Ym94Jyk7XG5cdFx0cGVuZGluZ0VkaXRCb3hUZXh0ID0gJCgnPGRpdj4nKTtcblx0XHRwZW5kaW5nRWRpdEJveC5hcHBlbmQocGVuZGluZ0VkaXRCb3hUZXh0KS5oaWRlKCk7XG5cdFx0aWYgKGVkaXRMaW1pdCkge1xuXHRcdFx0cGVuZGluZ0VkaXRCb3guYXBwZW5kKCQoJzxkaXY+JykudGV4dChtZXNzYWdlcy5wZW5kaW5nRWRpdEJveExpbWl0ZWQpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1zdWJ0aXRsZScpKTtcblx0XHR9XG5cdFx0JGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCcpLmJlZm9yZShwZW5kaW5nRWRpdEJveCk7XG5cdFx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0fVxuXHRpZiAoc2hvdykge1xuXHRcdHBlbmRpbmdFZGl0Qm94LmZhZGVJbigpO1xuXHR9IGVsc2Uge1xuXHRcdHBlbmRpbmdFZGl0Qm94LmZhZGVPdXQoKTtcblx0fVxufTtcblxuY29uc3Qgbm90aWZ5Q29tcGxldGlvbiA9ICgpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGNvbnN0IG9sZFRpdGxlID0gZG9jdW1lbnQudGl0bGU7XG5cdGRvY3VtZW50LnRpdGxlID0gbWVzc2FnZXMubm90aWZ5Q2hhcmFjdGVyICsgZG9jdW1lbnQudGl0bGU7XG5cdCRib2R5Lm9uZSgnbW91c2Vtb3ZlJywgKCkgPT4ge1xuXHRcdGRvY3VtZW50LnRpdGxlID0gb2xkVGl0bGU7XG5cdH0pO1xufTtcblxuLyogVXBkYXRlIHRoZSBkaXNwbGF5ZWQgaW5mb3JtYXRpb24gdG8gbWF0Y2ggdGhlIGN1cnJlbnQgbGluay8qICogb3IgbGFjayB0aGVyZW9mICovXG5jb25zdCB1cGRhdGVDb250ZXh0ID0gKCkgPT4ge1xuXHR1cGRhdGVFZGl0Q291bnRlcigpO1xuXHRpZiAoY3VycmVudExpbmspIHtcblx0XHR1aS5wYWdlVGl0bGVMaW5lLmh0bWwoXG5cdFx0XHRtZXNzYWdlcy5wYWdlVGl0bGVMaW5lXG5cdFx0XHRcdC5yZXBsYWNlKFxuXHRcdFx0XHRcdCckMScsXG5cdFx0XHRcdFx0bXcudXRpbC5nZXRVcmwoY3VycmVudFBhZ2VUaXRsZSwge1xuXHRcdFx0XHRcdFx0cmVkaXJlY3Q6ICdubycsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHQucmVwbGFjZSgnJDInLCBtdy5odG1sLmVzY2FwZShjdXJyZW50UGFnZVRpdGxlKSlcblx0XHQpO1xuXHRcdGNvbnN0IGNvbnRleHQgPSBleHRyYWN0Q29udGV4dChjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCwgY3VycmVudExpbmspO1xuXHRcdHVpLmNvbnRleHRcblx0XHRcdC5lbXB0eSgpXG5cdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQoY29udGV4dFswXSkpXG5cdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQoY29udGV4dFsxXSkuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWluY2xpbmsnKSlcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dChjb250ZXh0WzJdKSk7XG5cdFx0Y29uc3QgbnVtTGluZXMgPSBNYXRoLmNlaWwodWkuY29udGV4dC5oZWlnaHQoKSAvIE51bWJlci5wYXJzZUZsb2F0KHVpLmNvbnRleHQuY3NzKCdsaW5lLWhlaWdodCcpKSk7XG5cdFx0aWYgKG51bUxpbmVzIDwgY2ZnLm51bUNvbnRleHRMaW5lcykge1xuXHRcdFx0Ly8gQWRkIGNmZy5udW1Db250ZXh0TGluZXMgLSBudW1MaW5lcyArIDEgbGluZSBicmVha3MsIHNvIHRoYXQgdGhlIHRvdGFsIG51bWJlclxuXHRcdFx0Ly8gb2YgbGluZXMgaXMgY2ZnLm51bUNvbnRleHRMaW5lc1xuXHRcdFx0dWkuY29udGV4dC5hcHBlbmQoXG5cdFx0XHRcdEFycmF5LmZyb20oe1xuXHRcdFx0XHRcdGxlbmd0aDogY2ZnLm51bUNvbnRleHRMaW5lcyAtIG51bUxpbmVzICsgMixcblx0XHRcdFx0fSkuam9pbignPGJyPicpXG5cdFx0XHQpO1xuXHRcdH1cblx0XHR0b2dnbGVGaW5pc2hlZE1lc3NhZ2UoZmFsc2UpO1xuXHRcdHVpLnVuZG9CdXR0b24ucHJvcCgnZGlzYWJsZWQnLCAhcGFnZUNoYW5nZXMubGVuZ3RoKTtcblx0XHR1aS5yZW1vdmVMaW5rQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLnJlZGlyZWN0KTtcblx0XHR1aS5pbnRlbnRpb25hbExpbmtCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMucmVkaXJlY3QpO1xuXHRcdHVpLmRpc2FtTmVlZGVkQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLnJlZGlyZWN0IHx8IGN1cnJlbnRMaW5rLmhhc0Rpc2FtVGVtcGxhdGUpO1xuXHRcdGNob29zaW5nID0gdHJ1ZTtcblx0fSBlbHNlIHtcblx0XHR0b2dnbGVGaW5pc2hlZE1lc3NhZ2UodHJ1ZSk7XG5cdH1cbn07XG5cbi8qIFVwZGF0ZSB0aGUgY291bnQgb2YgcGVuZGluZyBjaGFuZ2VzICovXG5jb25zdCB1cGRhdGVFZGl0Q291bnRlciA9ICgpID0+IHtcblx0aWYgKHVpLnBlbmRpbmdFZGl0Q291bnRlcikge1xuXHRcdHVpLnBlbmRpbmdFZGl0Q291bnRlci50ZXh0KFxuXHRcdFx0bWVzc2FnZXMucGVuZGluZ0VkaXRDb3VudGVyLnJlcGxhY2UoJyQxJywgZWRpdENvdW50KS5yZXBsYWNlKCckMicsIGNvdW50QWN0dWFsbHlDaGFuZ2VkRnVsbHlDaGVja2VkUGFnZXMoKSlcblx0XHQpO1xuXHR9XG5cdGlmIChwZW5kaW5nRWRpdEJveCkge1xuXHRcdGlmIChlZGl0Q291bnQgPT09IDAgJiYgIXJ1bm5pbmcpIHtcblx0XHRcdHRvZ2dsZVBlbmRpbmdFZGl0Qm94KGZhbHNlKTtcblx0XHRcdG5vdGlmeUNvbXBsZXRpb24oKTtcblx0XHR9XG5cdFx0bGV0IHRleHRDb250ZW50ID0gZWRpdENvdW50O1xuXHRcdGlmIChlZGl0TGltaXQpIHtcblx0XHRcdHRleHRDb250ZW50ID0gbWVzc2FnZXMucGVuZGluZ0VkaXRCb3hUaW1lRXN0aW1hdGlvblxuXHRcdFx0XHQucmVwbGFjZSgnJDEnLCBlZGl0Q291bnQpXG5cdFx0XHRcdC5yZXBsYWNlKCckMicsIHNlY29uZHNUb0hITU1TUyhjZmcuZWRpdENvb2xkb3duICogZWRpdENvdW50KSk7XG5cdFx0fVxuXHRcdHBlbmRpbmdFZGl0Qm94VGV4dC50ZXh0KG1lc3NhZ2VzLnBlbmRpbmdFZGl0Qm94LnJlcGxhY2UoJyQxJywgdGV4dENvbnRlbnQpKTtcblx0fVxufTtcblxuLyogQXBwbHkgdGhlIGNoYW5nZXMgbWFkZSB0byBhbiBcIm9yaWdpblwiIHBhZ2UvKiAqIHBhZ2VDaGFuZ2U6IENoYW5nZSB0aGF0IHdpbGwgYmUgc2F2ZWQgKi9cbmNvbnN0IGFwcGx5Q2hhbmdlID0gKHBhZ2VDaGFuZ2UpID0+IHtcblx0aWYgKHBhZ2VDaGFuZ2UucGFnZS5jb250ZW50ICE9PSBwYWdlQ2hhbmdlLmNvbnRlbnRCZWZvcmVbMF0pIHtcblx0XHRlZGl0Q291bnQrKztcblx0XHRjb25zdCBjaGFuZ2VTdW1tYXJpZXMgPSBwYWdlQ2hhbmdlLnN1bW1hcnkuam9pbihtZXNzYWdlcy5zdW1tYXJ5U2VwYXJhdG9yKTtcblx0XHRjb25zdCBzdW1tYXJ5ID0gbWVzc2FnZXMuc3VtbWFyeS5yZXBsYWNlKCckMScsIGdldFRhcmdldFBhZ2UoKSkucmVwbGFjZSgnJDInLCBjaGFuZ2VTdW1tYXJpZXMpO1xuXHRcdGNvbnN0IHNhdmUgPSBlZGl0TGltaXQgPyBzYXZlV2l0aENvb2xkb3duIDogc2F2ZVBhZ2U7XG5cdFx0c2F2ZShwYWdlQ2hhbmdlLnRpdGxlLCBwYWdlQ2hhbmdlLnBhZ2UsIHN1bW1hcnksIHRydWUsIHRydWUpXG5cdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0aWYgKGVkaXRDb3VudCA+IDApIHtcblx0XHRcdFx0XHRlZGl0Q291bnQtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHR1cGRhdGVFZGl0Q291bnRlcigpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKGVycm9yKTtcblx0XHR1cGRhdGVFZGl0Q291bnRlcigpO1xuXHR9XG59O1xuXG4vKiBTYXZlIGFsbCB0aGUgcGVuZGluZyBjaGFuZ2VzICovXG5jb25zdCBhcHBseUFsbENoYW5nZXMgPSAoKSA9PiB7XG5cdGZvciAoY29uc3QgcGFnZUNoYW5nZSBvZiBwYWdlQ2hhbmdlcykge1xuXHRcdGFwcGx5Q2hhbmdlKHBhZ2VDaGFuZ2UpO1xuXHR9XG5cdHBhZ2VDaGFuZ2VzID0gW107XG59O1xuXG4vKiBSZWNvcmQgYSBuZXcgcGVuZGluZyBjaGFuZ2UvKiAqIHBhZ2VUaXRsZTogVGl0bGUgb2YgdGhlIHBhZ2UvKiAqIHBhZ2U6IENvbnRlbnQgb2YgdGhlIHBhZ2UvKiAqIG9sZENvbnRlbnQ6IENvbnRlbnQgb2YgdGhlIHBhZ2UgYmVmb3JlIHRoZSBjaGFuZ2UvKiAqIGxpbms6IExpbmsgdGhhdCBoYXMgYmVlbiBjaGFuZ2VkLyogKiBzdW1tYXJ5OiBDaGFuZ2Ugc3VtbWFyeSAqL1xuY29uc3QgYWRkQ2hhbmdlID0gKHBhZ2VUaXRsZSwgcGFnZSwgb2xkQ29udGVudCwgbGluaywgc3VtbWFyeSkgPT4ge1xuXHRpZiAoIXBhZ2VDaGFuZ2VzLmxlbmd0aCB8fCBwYWdlQ2hhbmdlcy5hdCgtMSkudGl0bGUgIT09IHBhZ2VUaXRsZSkge1xuXHRcdHBhZ2VDaGFuZ2VzW3BhZ2VDaGFuZ2VzLmxlbmd0aF0gPSB7XG5cdFx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdFx0cGFnZSxcblx0XHRcdGNvbnRlbnRCZWZvcmU6IFtdLFxuXHRcdFx0bGlua3M6IFtdLFxuXHRcdFx0c3VtbWFyeTogW10sXG5cdFx0fTtcblx0fVxuXHRjb25zdCBsYXN0UGFnZUNoYW5nZSA9IHBhZ2VDaGFuZ2VzLmF0KC0xKTtcblx0bGFzdFBhZ2VDaGFuZ2UuY29udGVudEJlZm9yZVtsYXN0UGFnZUNoYW5nZS5jb250ZW50QmVmb3JlLmxlbmd0aF0gPSBvbGRDb250ZW50O1xuXHRsYXN0UGFnZUNoYW5nZS5saW5rc1tsYXN0UGFnZUNoYW5nZS5saW5rcy5sZW5ndGhdID0gbGluaztcblx0bGFzdFBhZ2VDaGFuZ2Uuc3VtbWFyeVtsYXN0UGFnZUNoYW5nZS5zdW1tYXJ5Lmxlbmd0aF0gPSBzdW1tYXJ5O1xufTtcblxuLyogQ2hlY2sgd2hldGhlciBhY3R1YWwgY2hhbmdlcyBhcmUgc3RvcmVkIGluIHRoZSBoaXN0b3J5IGFycmF5ICovXG5jb25zdCBjaGVja0FjdHVhbENoYW5nZXMgPSAoKSA9PiB7XG5cdHJldHVybiBjb3VudEFjdHVhbENoYW5nZXMoKSAhPT0gMDtcbn07XG5cbi8qIFJldHVybiB0aGUgbnVtYmVyIG9mIGVudHJpZXMgaW4gdGhlIGhpc3RvcnkgYXJyYXkgdGhhdCByZXByZXNlbnQgYWN0dWFsIGNoYW5nZXMgKi9cbmNvbnN0IGNvdW50QWN0dWFsQ2hhbmdlcyA9ICgpID0+IHtcblx0bGV0IGNoYW5nZUNvdW50ID0gMDtcblx0Zm9yIChjb25zdCBwYWdlQ2hhbmdlIG9mIHBhZ2VDaGFuZ2VzKSB7XG5cdFx0aWYgKHBhZ2VDaGFuZ2UucGFnZS5jb250ZW50ICE9PSBwYWdlQ2hhbmdlLmNvbnRlbnRCZWZvcmVbMF0pIHtcblx0XHRcdGNoYW5nZUNvdW50Kys7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBjaGFuZ2VDb3VudDtcbn07XG5cbi8qIFJldHVybiB0aGUgbnVtYmVyIG9mIGNoYW5nZWQgcGFnZXMgaW4gdGhlIGhpc3RvcnkgYXJyYXksIGlnbm9yaW5nIHRoZSBsYXN0IGVudHJ5LyogKiBpZiB3ZSBhcmVuJ3QgZG9uZSB3aXRoIHRoYXQgcGFnZSB5ZXQgKi9cbmNvbnN0IGNvdW50QWN0dWFsbHlDaGFuZ2VkRnVsbHlDaGVja2VkUGFnZXMgPSAoKSA9PiB7XG5cdGxldCBjaGFuZ2VDb3VudCA9IGNvdW50QWN0dWFsQ2hhbmdlcygpO1xuXHRpZiAocGFnZUNoYW5nZXMubGVuZ3RoKSB7XG5cdFx0Y29uc3QgbGFzdENoYW5nZSA9IHBhZ2VDaGFuZ2VzLmF0KC0xKTtcblx0XHRpZiAoXG5cdFx0XHRsYXN0Q2hhbmdlLnRpdGxlID09PSBjdXJyZW50UGFnZVRpdGxlICYmXG5cdFx0XHRjdXJyZW50TGluayAmJlxuXHRcdFx0bGFzdENoYW5nZS5wYWdlLmNvbnRlbnQgIT09IGxhc3RDaGFuZ2UuY29udGVudEJlZm9yZVswXVxuXHRcdCkge1xuXHRcdFx0Y2hhbmdlQ291bnQtLTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNoYW5nZUNvdW50O1xufTtcblxuLyogRmluZCB0aGUgbGlua3MgdG8gZGlzYW1iaWd1YXRpb24gb3B0aW9ucyBpbiBhIGRpc2FtYmlndWF0aW9uIHBhZ2UgKi9cbmNvbnN0IGdldERpc2FtT3B0aW9ucyA9ICgpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdHJldHVybiAkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0IGEnKS5maWx0ZXIoKF9pbmRleCwgZWxlbWVudCkgPT4ge1xuXHRcdHJldHVybiAhIWV4dHJhY3RQYWdlTmFtZSgkKGVsZW1lbnQpKTtcblx0fSk7XG59O1xuXG4vKiBTYXZlIGFsbCB0aGUgcGVuZGluZyBjaGFuZ2VzIGFuZCBjbG9zZSB0aGUgdG9vbCAqL1xuY29uc3Qgc2F2ZUFuZEVuZCA9ICgpID0+IHtcblx0YXBwbHlBbGxDaGFuZ2VzKCk7XG5cdGVuZCgpO1xufTtcblxuLyogQ2xvc2UgdGhlIHRvb2wgKi9cbmNvbnN0IGVuZCA9ICgpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGNvbnN0IGN1cnJlbnRUb29sVUkgPSB1aS5kaXNwbGF5O1xuXHRjaG9vc2luZyA9IGZhbHNlO1xuXHRydW5uaW5nID0gZmFsc2U7XG5cdHN0YXJ0TGluay5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblx0JGJvZHkuZmluZCgnLmRpc2FtYXNzaXN0LW9wdGlvbm1hcmtlcicpLnJlbW92ZSgpO1xuXHRjdXJyZW50VG9vbFVJLmZhZGVPdXQoe1xuXHRcdGNvbXBsZXRlKCkge1xuXHRcdFx0Y3VycmVudFRvb2xVSS5yZW1vdmUoKTtcblx0XHRcdGlmIChlZGl0Q291bnQpIHtcblx0XHRcdFx0dG9nZ2xlUGVuZGluZ0VkaXRCb3godHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0fSk7XG59O1xuXG4vKiBEaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UgKi9cbmNvbnN0IGVycm9yID0gKGVycm9yRGVzY3JpcHRpb24pID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGNvbnN0IGVycm9yQm94ID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYm94IGRpc2FtYXNzaXN0LWVycm9yYm94Jyk7XG5cdGVycm9yQm94LnRleHQobWVzc2FnZXMuZXJyb3IucmVwbGFjZSgnJDEnLCBlcnJvckRlc2NyaXB0aW9uKSk7XG5cdGVycm9yQm94LmFwcGVuZChcblx0XHRjcmVhdGVCdXR0b24obWVzc2FnZXMuZGlzbWlzc0Vycm9yLCAoKSA9PiB7XG5cdFx0XHRlcnJvckJveC5mYWRlT3V0KCk7XG5cdFx0fSkuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWVycm9yYnV0dG9uJylcblx0KTtcblx0Y29uc3QgdWlJc0luUGxhY2UgPSB1aSAmJiAkLmNvbnRhaW5zKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdWkuZGlzcGxheVswXSk7XG5cdGNvbnN0IG5leHRFbGVtZW50ID0gdWlJc0luUGxhY2UgPyB1aS5kaXNwbGF5IDogJGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCcpO1xuXHRuZXh0RWxlbWVudC5iZWZvcmUoZXJyb3JCb3gpO1xuXHRlcnJvckJveC5oaWRlKCkuZmFkZUluKCk7XG59O1xuXG4vKiBDaGFuZ2UgYSBsaW5rIHNvIHRoYXQgaXQgcG9pbnRzIHRvIHRoZSB0aXRsZS8qICogdGV4dDogVGhlIHdpa2l0ZXh0IG9mIHRoZSB3aG9sZSBwYWdlLyogKiB0aXRsZTogVGhlIG5ldyBkZXN0aW5hdGlvbiBvZiB0aGUgbGluay8qICogbGluazogVGhlIGxpbmsgdGhhdCB3aWxsIGJlIG1vZGlmaWVkLyogKiBleHRyYTogVGV4dCB0aGF0IHdpbGwgYmUgYWRkZWQgYWZ0ZXIgdGhlIGxpbmsgKG9wdGlvbmFsKSAqL1xuY29uc3QgcmVwbGFjZUxpbmsgPSAodGV4dCwgdGl0bGUsIGxpbmssIGV4dHJhKSA9PiB7XG5cdGxldCBuZXdDb250ZW50O1xuXHRpZiAoaXNTYW1lUGFnZSh0aXRsZSwgbGluay5kZXNjcmlwdGlvbikpIHtcblx0XHRuZXdDb250ZW50ID0gbGluay5kZXNjcmlwdGlvbjtcblx0fSBlbHNlIHtcblx0XHRuZXdDb250ZW50ID0gYCR7dGl0bGV9fCR7bGluay5kZXNjcmlwdGlvbn1gO1xuXHR9XG5cdGNvbnN0IGxpbmtTdGFydCA9IHRleHQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbGluay5zdGFydCkpO1xuXHRjb25zdCBsaW5rRW5kID0gdGV4dC5zbGljZShNYXRoLm1heCgwLCBsaW5rLmVuZCkpO1xuXHRyZXR1cm4gYCR7bGlua1N0YXJ0fVtbJHtuZXdDb250ZW50fV1dJHtsaW5rLmFmdGVyRGVzY3JpcHRpb259JHtleHRyYSB8fCAnJ30ke2xpbmtFbmR9YDtcbn07XG5cbi8qIFJlbW92ZSBhIGxpbmsgZnJvbSB0aGUgdGV4dC8qICogdGV4dDogVGhlIHdpa2l0ZXh0IG9mIHRoZSB3aG9sZSBwYWdlLyogKiBsaW5rOiBUaGUgbGluayB0aGF0IHdpbGwgYmUgcmVtb3ZlZCAqL1xuY29uc3QgcmVtb3ZlTGluayA9ICh0ZXh0LCBsaW5rKSA9PiB7XG5cdGNvbnN0IGxpbmtTdGFydCA9IHRleHQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbGluay5zdGFydCkpO1xuXHRjb25zdCBsaW5rRW5kID0gdGV4dC5zbGljZShNYXRoLm1heCgwLCBsaW5rLmVuZCkpO1xuXHRyZXR1cm4gbGlua1N0YXJ0ICsgbGluay5kZXNjcmlwdGlvbiArIGxpbmsuYWZ0ZXJEZXNjcmlwdGlvbiArIGxpbmtFbmQ7XG59O1xuXG4vKiBFeHRyYWN0IGEgbGluayBmcm9tIGEgc3RyaW5nIGluIHdpa2kgZm9ybWF0LC8qICogc3RhcnRpbmcgZnJvbSBhIGdpdmVuIGluZGV4LiBSZXR1cm4gYSBsaW5rIGlmIG9uZSBjYW4gYmUgZm91bmQsLyogKiBvdGhlcndpc2UgcmV0dXJuIG51bGwuIFRoZSBcImxpbmtcIiBpbmNsdWRlcyBcImRpc2FtYmlndWF0aW9uIG5lZWRlZFwiLyogKiB0ZW1wbGF0ZXMgaW5tZWRpYXRlbHkgZm9sbG93aW5nIHRoZSBsaW5rIHByb3Blci8qICogdGV4dDogVGV4dCBmcm9tIHdoaWNoIHRoZSBsaW5rIHdpbGwgYmUgZXh0cmFjdGVkLyogKiBsYXN0SW5kZXg6IEluZGV4IGZyb20gd2hpY2ggdGhlIHNlYXJjaCB3aWxsIHN0YXJ0ICovXG5jb25zdCBleHRyYWN0TGluayA9ICh0ZXh0LCBsYXN0SW5kZXgpID0+IHtcblx0Ly8gRklYTUU6IE5vdCBhbiBhY3R1YWwgdGl0bGUgcmVnZXggKGxvdHMgb2YgZmFsc2UgcG9zaXRpdmVzXG5cdC8vIGFuZCBzb21lIGZhbHNlIG5lZ2F0aXZlcyksIGJ1dCBob3BlZnVsbHkgZ29vZCBlbm91Z2guXG5cdGNvbnN0IHRpdGxlUmVnZXggPSAvXFxbXFxbKC4qPykoPzpcXHwoLio/KSk/XV0vZztcblx0Ly8gRGl0dG8gZm9yIHRoZSB0ZW1wbGF0ZSByZWdleC4gRGlzYW1iaWd1YXRpb24gbGluayB0ZW1wbGF0ZXNcblx0Ly8gc2hvdWxkIGJlIHNpbXBsZSBlbm91Z2ggZm9yIHRoaXMgbm90IHRvIG1hdHRlciwgdGhvdWdoLlxuXHRjb25zdCB0ZW1wbGF0ZVJlZ2V4ID0gL14oXFx3KltcXHMhKSwuOjs/fV0qKXt7XFxzKihbXnt8fV0rPylcXHMqKD86XFx8W157XSo/KT99fS87XG5cdHRpdGxlUmVnZXgubGFzdEluZGV4ID0gbGFzdEluZGV4O1xuXHRjb25zdCBtYXRjaCA9IHRpdGxlUmVnZXguZXhlYyh0ZXh0KTtcblx0aWYgKG1hdGNoICYmIG1hdGNoLmluZGV4ICE9PSAtMSkge1xuXHRcdGxldCBwb3NzaWJseUFtYmlndW91cyA9IHRydWU7XG5cdFx0bGV0IGhhc0Rpc2FtVGVtcGxhdGUgPSBmYWxzZTtcblx0XHRsZXQgX2VuZCA9IG1hdGNoLmluZGV4ICsgNCArIG1hdGNoWzFdLmxlbmd0aCArIChtYXRjaFsyXSA/IDEgKyBtYXRjaFsyXS5sZW5ndGggOiAwKTtcblx0XHRsZXQgYWZ0ZXJEZXNjcmlwdGlvbiA9ICcnO1xuXHRcdGNvbnN0IHJlc3QgPSB0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIF9lbmQpKTtcblx0XHRjb25zdCB0ZW1wbGF0ZU1hdGNoID0gdGVtcGxhdGVSZWdleC5leGVjKHJlc3QpO1xuXHRcdGlmICh0ZW1wbGF0ZU1hdGNoKSB7XG5cdFx0XHRjb25zdCB0ZW1wbGF0ZVRpdGxlID0gZ2V0Q2Fub25pY2FsVGl0bGUodGVtcGxhdGVNYXRjaFsyXSk7XG5cdFx0XHRjb25zdCB7ZGlzYW1MaW5rVGVtcGxhdGVzfSA9IGNmZztcblx0XHRcdGNvbnN0IHtkaXNhbUxpbmtJZ25vcmVUZW1wbGF0ZXN9ID0gY2ZnO1xuXHRcdFx0aWYgKGRpc2FtTGlua1RlbXBsYXRlcy5pbmNsdWRlcyh0ZW1wbGF0ZVRpdGxlKSkge1xuXHRcdFx0XHRfZW5kICs9IHRlbXBsYXRlTWF0Y2hbMF0ubGVuZ3RoO1xuXHRcdFx0XHRhZnRlckRlc2NyaXB0aW9uID0gdGVtcGxhdGVNYXRjaFsxXS5yZXBsYWNlKC9cXHMkLywgJycpO1xuXHRcdFx0XHRoYXNEaXNhbVRlbXBsYXRlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoZGlzYW1MaW5rSWdub3JlVGVtcGxhdGVzLmluY2x1ZGVzKHRlbXBsYXRlVGl0bGUpKSB7XG5cdFx0XHRcdHBvc3NpYmx5QW1iaWd1b3VzID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRzdGFydDogbWF0Y2guaW5kZXgsXG5cdFx0XHRlbmQ6IF9lbmQsXG5cdFx0XHRwb3NzaWJseUFtYmlndW91cyxcblx0XHRcdGhhc0Rpc2FtVGVtcGxhdGUsXG5cdFx0XHR0aXRsZTogbWF0Y2hbMV0sXG5cdFx0XHRkZXNjcmlwdGlvbjogbWF0Y2hbMl0gPz8gbWF0Y2hbMV0sXG5cdFx0XHRhZnRlckRlc2NyaXB0aW9uLFxuXHRcdH07XG5cdH1cbn07XG5cbi8qIEV4dHJhY3QgYSBsaW5rIHRvIG9uZSBvZiBhIG51bWJlciBvZiBkZXN0aW5hdGlvbiBwYWdlcyBmcm9tIGEgc3RyaW5nLyogKiAoXCJ0ZXh0XCIpIGluIHdpa2kgZm9ybWF0LCBzdGFydGluZyBmcm9tIGEgZ2l2ZW4gaW5kZXggKFwibGFzdEluZGV4XCIpLi8qICogXCJEaXNhbWJpZ3VhdGlvbiBuZWVkZWRcIiB0ZW1wbGF0ZXMgYXJlIGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIGxpbmtzLi8qICogdGV4dDogUGFnZSBpbiB3aWtpIGZvcm1hdC8qICogZGVzdGluYXRpb25zOiBBcnJheSBvZiBwYWdlIHRpdGxlcyB0byBsb29rIGZvci8qICogbGFzdEluZGV4OiBJbmRleCBmcm9tIHdoaWNoIHRoZSBzZWFyY2ggd2lsbCBzdGFydCAqL1xuY29uc3QgZXh0cmFjdExpbmtUb1BhZ2UgPSAodGV4dCwgZGVzdGluYXRpb25zLCBsYXN0SW5kZXgpID0+IHtcblx0bGV0IGxpbms7XG5cdGxldCB0aXRsZTtcblx0ZG8ge1xuXHRcdGxpbmsgPSBleHRyYWN0TGluayh0ZXh0LCBsYXN0SW5kZXgpO1xuXHRcdGlmIChsaW5rKSB7XG5cdFx0XHRsYXN0SW5kZXggPSBsaW5rLmVuZDtcblx0XHRcdHRpdGxlID0gZ2V0Q2Fub25pY2FsVGl0bGUobGluay50aXRsZSk7XG5cdFx0fVxuXHR9IHdoaWxlIChsaW5rICYmICghbGluay5wb3NzaWJseUFtYmlndW91cyB8fCAhZGVzdGluYXRpb25zPy5pbmNsdWRlcyh0aXRsZSkpKTtcblx0cmV0dXJuIGxpbms7XG59O1xuXG4vKiBGaW5kIHRoZSBcInRhcmdldFwiIHBhZ2U6IGVpdGhlciB0aGUgb25lIHdlIGFyZSBpbiBvciB0aGUgXCJtYWluXCIgb25lIGZvdW5kIGJ5IGV4dHJhY3RpbmcvKiAqIHRoZSB0aXRsZSBmcm9tIFwiLiogKGRpc2FtYmlndWF0aW9uKVwiIG9yIHdoYXRldmVyIHRoZSBhcHByb3BpYXRlIGxvY2FsIGZvcm1hdCBpcyAqL1xuY29uc3QgZ2V0VGFyZ2V0UGFnZSA9ICgpID0+IHtcblx0Y29uc3QgdGl0bGUgPSBnZXRUaXRsZSgpO1xuXHRyZXR1cm4gZm9yY2VTYW1lUGFnZSA/IHRpdGxlIDogcmVtb3ZlRGlzYW0odGl0bGUpO1xufTtcblxuLyogR2V0IHRoZSBwYWdlIHRpdGxlLCB3aXRoIHRoZSBuYW1lc3BhY2UgcHJlZml4IGlmIGFueS4gKi9cbmNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiB3Z1BhZ2VOYW1lLnJlcGxhY2UoL18vZywgJyAnKTtcbn07XG5cbi8qIEV4dHJhY3QgYSBcIm1haW5cIiB0aXRsZSBmcm9tIFwiLiogKGRpc2FtYmlndWF0aW9uKVwiIG9yIHdoYXRldmVyIHRoZSBhcHByb3BpYXRlIGxvY2FsIGZvcm1hdCBpcyAqL1xuY29uc3QgcmVtb3ZlRGlzYW0gPSAodGl0bGUpID0+IHtcblx0Y29uc3QgbWF0Y2ggPSBuZXcgUmVnRXhwKGNmZy5kaXNhbVJlZ0V4cCkuZXhlYyh0aXRsZSk7XG5cdHJldHVybiBtYXRjaD8uWzFdID8/IHRpdGxlO1xufTtcblxuLyogQ2hlY2sgd2hldGhlciB0d28gcGFnZSB0aXRsZXMgYXJlIHRoZSBzYW1lICovXG5jb25zdCBpc1NhbWVQYWdlID0gKHRpdGxlMSwgdGl0bGUyKSA9PiB7XG5cdHJldHVybiBnZXRDYW5vbmljYWxUaXRsZSh0aXRsZTEpID09PSBnZXRDYW5vbmljYWxUaXRsZSh0aXRsZTIpO1xufTtcblxuLyogUmV0dXJuIHRoZSAnY2Fub25pY2FsIHRpdGxlJyBvZiBhIHBhZ2UgKi9cbmNvbnN0IGdldENhbm9uaWNhbFRpdGxlID0gKHRpdGxlKSA9PiB7XG5cdHRyeSB7XG5cdFx0Ly8gbXcuVGl0bGUgc2VlbXMgdG8gYmUgYnVnZ3ksIGFuZCBzb21lIHZhbGlkIHRpdGxlcyBhcmUgcmVqZWN0ZWRcblx0XHQvLyBGSVhNRTogVGhpcyBtYXkgY2F1c2UgZmFsc2UgbmVnYXRpdmVzXG5cdFx0dGl0bGUgPSBuZXcgbXcuVGl0bGUodGl0bGUpLmdldFByZWZpeGVkVGV4dCgpO1xuXHR9IGNhdGNoIHtcblx0XHQvKiBlbXB0eSAqL1xuXHR9XG5cdHJldHVybiB0aXRsZTtcbn07XG5cbi8qIEV4dHJhY3QgdGhlIGNvbnRleHQgYXJvdW5kIGEgZ2l2ZW4gbGluayBpbiBhIHRleHQgc3RyaW5nICovXG5jb25zdCBleHRyYWN0Q29udGV4dCA9ICh0ZXh0LCBsaW5rKSA9PiB7XG5cdGNvbnN0IGNvbnRleHRTdGFydCA9IGxpbmsuc3RhcnQgLSBjZmcucmFkaXVzO1xuXHRjb25zdCBjb250ZXh0RW5kID0gbGluay5lbmQgKyBjZmcucmFkaXVzO1xuXHRsZXQgY29udGV4dFByZXYgPSB0ZXh0LnNsaWNlKGNvbnRleHRTdGFydCwgbGluay5zdGFydCk7XG5cdGlmIChjb250ZXh0U3RhcnQgPiAwKSB7XG5cdFx0Y29udGV4dFByZXYgPSBtZXNzYWdlcy5lbGxpcHNpcyArIGNvbnRleHRQcmV2O1xuXHR9XG5cdGxldCBjb250ZXh0TmV4dCA9IHRleHQuc2xpY2UobGluay5lbmQsIGNvbnRleHRFbmQpO1xuXHRpZiAoY29udGV4dEVuZCA8IHRleHQubGVuZ3RoKSB7XG5cdFx0Y29udGV4dE5leHQgKz0gbWVzc2FnZXMuZWxsaXBzaXM7XG5cdH1cblx0cmV0dXJuIFtjb250ZXh0UHJldiwgdGV4dC5zbGljZShsaW5rLnN0YXJ0LCBsaW5rLmVuZCksIGNvbnRleHROZXh0XTtcbn07XG5cbi8qIEV4dHJhY3QgdGhlIHByZWZpeGVkIHBhZ2UgbmFtZSBmcm9tIGEgbGluayAqL1xuY29uc3QgZXh0cmFjdFBhZ2VOYW1lID0gKGxpbmspID0+IHtcblx0bGV0IHBhZ2VOYW1lID0gZXh0cmFjdFBhZ2VOYW1lUmF3KGxpbmspO1xuXHRpZiAocGFnZU5hbWUpIHtcblx0XHRjb25zdCBzZWN0aW9uUG9zID0gcGFnZU5hbWUuaW5kZXhPZignIycpO1xuXHRcdGxldCBzZWN0aW9uID0gJyc7XG5cdFx0aWYgKHNlY3Rpb25Qb3MgIT09IC0xKSB7XG5cdFx0XHRzZWN0aW9uID0gcGFnZU5hbWUuc2xpY2UoTWF0aC5tYXgoMCwgc2VjdGlvblBvcykpO1xuXHRcdFx0cGFnZU5hbWUgPSBwYWdlTmFtZS5zbGljZSgwLCBNYXRoLm1heCgwLCBzZWN0aW9uUG9zKSk7XG5cdFx0fVxuXHRcdHJldHVybiBnZXRDYW5vbmljYWxUaXRsZShwYWdlTmFtZSkgKyBzZWN0aW9uO1xuXHR9XG59O1xuXG4vKiBFeHRyYWN0IHRoZSBwYWdlIG5hbWUgZnJvbSBhIGxpbmssIGFzIGlzICovXG5jb25zdCBleHRyYWN0UGFnZU5hbWVSYXcgPSAobGluaykgPT4ge1xuXHRjb25zdCB7d2dTY3JpcHQsIHdnQXJ0aWNsZVBhdGh9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoIWxpbmsuaGFzQ2xhc3MoJ2ltYWdlJykpIHtcblx0XHRjb25zdCBocmVmID0gbGluay5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKGxpbmsuaGFzQ2xhc3MoJ25ldycpKSB7XG5cdFx0XHQvLyBcIlJlZFwiIGxpbmtcblx0XHRcdGlmIChocmVmLmluY2x1ZGVzKHdnU2NyaXB0KSkge1xuXHRcdFx0XHRyZXR1cm4gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd0aXRsZScsIGhyZWYpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCByZWdleCA9IHdnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnKC4qKScpO1xuXHRcdFx0Y29uc3QgcmVnZXhSZXN1bHQgPSBuZXcgUmVnRXhwKGBeJHtyZWdleH0kYCkuZXhlYyhocmVmKTtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHJlZ2V4UmVzdWx0KSAmJiByZWdleFJlc3VsdC5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZWdleFJlc3VsdFsxXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIHRoaXMgaXMgYSBkaXNhbWJpZ3VhdGlvbiBwYWdlICovXG5jb25zdCBpc0Rpc2FtID0gKCkgPT4ge1xuXHRjb25zdCB7d2dDYXRlZ29yaWVzfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgY2F0ZWdvcmllcyA9IHdnQ2F0ZWdvcmllcyA/PyBbXTtcblx0Zm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG5cdFx0Y29uc3Qge2Rpc2FtQ2F0ZWdvcmllc30gPSBjZmc7XG5cdFx0aWYgKGRpc2FtQ2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzZWNvbmRzVG9ISE1NU1MgPSAodG90YWxTZWNvbmRzKSA9PiB7XG5cdGxldCBoaG1tc3MgPSAnJztcblx0Y29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDM2MDApO1xuXHRjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgLyA2MCk7XG5cdGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAlIDYwKTtcblx0aWYgKGhvdXJzID49IDEpIHtcblx0XHRoaG1tc3MgPSBgJHtwYWQoaG91cnMsICcwJywgMil9OmA7XG5cdH1cblx0aGhtbXNzICs9IGAke3BhZChtaW51dGVzLCAnMCcsIDIpfToke3BhZChzZWNvbmRzLCAnMCcsIDIpfWA7XG5cdHJldHVybiBoaG1tc3M7XG59O1xuXG5jb25zdCBwYWQgPSAoc3RyLCB6LCB3aWR0aCkgPT4ge1xuXHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0aWYgKHN0ci5sZW5ndGggPj0gd2lkdGgpIHtcblx0XHRyZXR1cm4gc3RyO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0QXJyYXkuZnJvbSh7XG5cdFx0XHRsZW5ndGg6IHdpZHRoIC0gc3RyLmxlbmd0aCArIDEsXG5cdFx0fSkuam9pbih6KSArIHN0clxuXHQpO1xufTtcblxuLyogQ3JlYXRlIGEgbmV3IGJ1dHRvblxuICogdGV4dDogVGV4dCB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIG9uIHRoZSBidXR0b25cbiAqIG9uQ2xpY2s6IEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGVcbiAqIGJ1dHRvbiBpcyBjbGlja2VkXG4gKi9cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICh0ZXh0LCBvbkNsaWNrKSA9PiB7XG5cdGNvbnN0IGJ1dHRvbiA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHR2YWx1ZTogdGV4dCxcblx0fSk7XG5cdGJ1dHRvbi5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYnV0dG9uJykub24oJ2NsaWNrJywgb25DbGljayk7XG5cdHJldHVybiBidXR0b247XG59O1xuXG4vKiBHaXZlbiBhIHBhZ2UgdGl0bGUgYW5kIGFuIGFycmF5IG9mIHBvc3NpYmxlIHJlZGlyZWN0cyB7ZnJvbSwgdG99IChcImNhbm9uaWNhbCB0aXRsZXNcIiksIGZpbmQgdGhlIHBhZ2UvKiAqIGF0IHRoZSBlbmQgb2YgdGhlIHJlZGlyZWN0IGNoYWluLCBpZiB0aGVyZSBpcyBvbmUuIE90aGVyd2lzZSwgcmV0dXJuIHRoZSBwYWdlIHRpdGxlIHRoYXQgd2FzIHBhc3NlZCAqL1xuY29uc3QgcmVzb2x2ZVJlZGlyZWN0ID0gKHBhZ2VUaXRsZSwgcG9zc2libGVSZWRpcmVjdHMpID0+IHtcblx0bGV0IGFwcGxpZWRSZWRpcmVjdCA9IHRydWU7XG5cdGNvbnN0IHZpc2l0ZWRQYWdlcyA9IHt9O1xuXHRsZXQgY3VycmVudFBhZ2UgPSBnZXRDYW5vbmljYWxUaXRsZShwYWdlVGl0bGUpO1xuXHR3aGlsZSAoYXBwbGllZFJlZGlyZWN0KSB7XG5cdFx0YXBwbGllZFJlZGlyZWN0ID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBwb3NzaWJsZVJlZGlyZWN0IG9mIHBvc3NpYmxlUmVkaXJlY3RzKSB7XG5cdFx0XHRpZiAocG9zc2libGVSZWRpcmVjdC5mcm9tID09PSBjdXJyZW50UGFnZSkge1xuXHRcdFx0XHRpZiAodmlzaXRlZFBhZ2VzW3Bvc3NpYmxlUmVkaXJlY3QudG9dKSB7XG5cdFx0XHRcdFx0Ly8gUmVkaXJlY3QgY2hhaW4gZGV0ZWN0ZWRcblx0XHRcdFx0XHRyZXR1cm4gcGFnZVRpdGxlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZpc2l0ZWRQYWdlc1tjdXJyZW50UGFnZV0gPSB0cnVlO1xuXHRcdFx0XHRhcHBsaWVkUmVkaXJlY3QgPSB0cnVlO1xuXHRcdFx0XHRjdXJyZW50UGFnZSA9IHBvc3NpYmxlUmVkaXJlY3QudG87XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIE5vIHJlZGlyZWN0IHJ1bGVzIGFwcGxpZWQgZm9yIGFuIGl0ZXJhdGlvbiBvZiB0aGUgb3V0ZXIgbG9vcDpcblx0Ly8gbm8gbW9yZSByZWRpcmVjdHMuIFdlIGFyZSBkb25lXG5cdHJldHVybiBjdXJyZW50UGFnZTtcbn07XG5cbi8qIEZldGNoIHRoZSBpbmNvbWluZyBsaW5rcyB0byBhIHBhZ2UuIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZS8qICogKHN1Y2Nlc3MgLSBhcnJheSBvZiB0aXRsZXMgb2YgcGFnZXMgdGhhdCBjb250YWluIGxpbmtzIHRvIHRoZSB0YXJnZXQgcGFnZSBhbmQvKiAqIGFycmF5IG9mIFwiY2Fub25pY2FsIHRpdGxlc1wiIG9mIHBvc3NpYmxlIGRlc3RpbmF0aW9ucyBvZiB0aGUgYmFja2xpbmtzIChlaXRoZXIvKiAqIHRoZSB0YXJnZXQgcGFnZSBvciByZWRpcmVjdHMgdG8gdGhlIHRhcmdldCBwYWdlKSwgZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uKS8qICogcGFnZTogVGFyZ2V0IHBhZ2UgKi9cbmNvbnN0IGdldEJhY2tsaW5rcyA9IChwYWdlKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRsaXN0OiAnYmFja2xpbmtzJyxcblx0XHRibHRpdGxlOiBwYWdlLFxuXHRcdGJscmVkaXJlY3Q6IHRydWUsXG5cdFx0YmxsaW1pdDogY2ZnLmJhY2tsaW5rTGltaXQsXG5cdFx0YmxuYW1lc3BhY2U6IGNmZy50YXJnZXROYW1lc3BhY2VzLmpvaW4oJ3wnKSxcblx0fTtcblx0YXBpLmdldChwYXJhbXMpXG5cdFx0LmRvbmUoKHtxdWVyeX0pID0+IHtcblx0XHRcdC8vIFRoZXJlIG1pZ2h0IGJlIGR1cGxpY2F0ZSBlbnRyaWVzIGluIHNvbWUgY29ybmVyIGNhc2VzLiBXZSBkb24ndCBjYXJlLFxuXHRcdFx0Ly8gc2luY2Ugd2UgYXJlIGdvaW5nIHRvIGNoZWNrIGxhdGVyLCBhbnl3YXlcblx0XHRcdGNvbnN0IGJhY2tsaW5rcyA9IFtdO1xuXHRcdFx0Y29uc3QgbGlua1RpdGxlcyA9IFtnZXRDYW5vbmljYWxUaXRsZShwYWdlKV07XG5cdFx0XHRjb25zdCBiYWNrbGlua3NRdWVyeSA9IHF1ZXJ5LmJhY2tsaW5rcztcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBiYWNrbGlua3NRdWVyeSkge1xuXHRcdFx0XHRiYWNrbGlua3NbYmFja2xpbmtzLmxlbmd0aF0gPSBlbGVtZW50LnRpdGxlO1xuXHRcdFx0XHRpZiAoIWVsZW1lbnQucmVkaXJsaW5rcykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpbmtUaXRsZXNbbGlua1RpdGxlcy5sZW5ndGhdID0gZWxlbWVudC50aXRsZTtcblx0XHRcdFx0Y29uc3Qge3JlZGlybGlua3N9ID0gZWxlbWVudDtcblx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGV9IG9mIHJlZGlybGlua3MpIHtcblx0XHRcdFx0XHRiYWNrbGlua3NbYmFja2xpbmtzLmxlbmd0aF0gPSB0aXRsZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShiYWNrbGlua3MsIGxpbmtUaXRsZXMpO1xuXHRcdH0pXG5cdFx0LmZhaWwoKGNvZGUpID0+IHtcblx0XHRcdGRlZmVycmVkLnJlamVjdChtZXNzYWdlcy5nZXRCYWNrbGlua3NFcnJvci5yZXBsYWNlKCckMScsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIERvd25sb2FkIGEgbGlzdCBvZiByZWRpcmVjdHMgZm9yIHNvbWUgcGFnZXMuIFJldHVybnMgYSBqUXVlcnkgY2FsbGJhY2sgKHN1Y2Nlc3MgLS8qICogYXJyYXkgb2YgcmVkaXJlY3RzICh7ZnJvbSwgdG99KSwgZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uICkvKiAqIHBhZ2VUaXRsZXM6IEFycmF5IG9mIHBhZ2UgdGl0bGVzICovXG5jb25zdCBmZXRjaFJlZGlyZWN0cyA9IChwYWdlVGl0bGVzKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgY3VycmVudFRpdGxlcyA9IHBhZ2VUaXRsZXMuc2xpY2UoMCwgY2ZnLnF1ZXJ5VGl0bGVMaW1pdCk7XG5cdGNvbnN0IHJlc3RUaXRsZXMgPSBwYWdlVGl0bGVzLnNsaWNlKGNmZy5xdWVyeVRpdGxlTGltaXQpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHRpdGxlczogY3VycmVudFRpdGxlcy5qb2luKCd8JyksXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRhcGkuZ2V0KHBhcmFtcylcblx0XHQuZG9uZSgoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0Y29uc3QgdGhlc2VSZWRpcmVjdHMgPSBxdWVyeS5yZWRpcmVjdHMgPz8gW107XG5cdFx0XHRpZiAocmVzdFRpdGxlcy5sZW5ndGgpIHtcblx0XHRcdFx0ZmV0Y2hSZWRpcmVjdHMocmVzdFRpdGxlcylcblx0XHRcdFx0XHQuZG9uZSgocmVkaXJlY3RzKSA9PiB7XG5cdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKFsuLi50aGVzZVJlZGlyZWN0cywgLi4ucmVkaXJlY3RzXSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChkZXNjcmlwdGlvbik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHRoZXNlUmVkaXJlY3RzKTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QobWVzc2FnZXMuZmV0Y2hSZWRpcmVjdHNFcnJvci5yZXBsYWNlKCckMScsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIERvd25sb2FkIHRoZSBsaXN0IG9mIHVzZXIgcmlnaHRzIGZvciB0aGUgY3VycmVudCB1c2VyLiBSZXR1cm5zIGEvKiAqIGpRdWVyeSBwcm9taXNlIChzdWNjZXNzIC0gYXJyYXkgb2YgcmlnaHQgbmFtZXMsIGVycm9yIC0gZXJyb3IgZGVzY3JpcHRpb24pICovXG5jb25zdCBmZXRjaFJpZ2h0cyA9ICgpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0bWV0YTogJ3VzZXJpbmZvJyxcblx0XHR1aXByb3A6ICdyaWdodHMnLFxuXHR9O1xuXHRhcGkuZ2V0KHBhcmFtcylcblx0XHQuZG9uZSgoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShxdWVyeS51c2VyaW5mby5yaWdodHMpO1xuXHRcdH0pXG5cdFx0LmZhaWwoKGNvZGUpID0+IHtcblx0XHRcdGRlZmVycmVkLnJlamVjdChtZXNzYWdlcy5mZXRjaFJpZ2h0c0Vycm9yLnJlcGxhY2UoJyQxJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogTG9hZCB0aGUgcmF3IHBhZ2UgdGV4dCBmb3IgYSBnaXZlbiB0aXRsZS4gUmV0dXJucyBhIGpRdWVyeSBwcm9taXNlIChzdWNjZXNzIC0gcGFnZS8qICogY29udGVudCwgZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uKS8qICogcGFnZVRpdGxlOiBUaXRsZSBvZiB0aGUgcGFnZSAqL1xuY29uc3QgbG9hZFBhZ2UgPSAocGFnZVRpdGxlKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzOiBwYWdlVGl0bGUsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0cnZwcm9wOiAndGltZXN0YW1wfGNvbnRlbnQnLFxuXHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdHR5cGU6ICdjc3JmJyxcblx0fTtcblx0YXBpLmdldChwYXJhbXMpXG5cdFx0LmRvbmUoKHtxdWVyeX0pID0+IHtcblx0XHRcdGNvbnN0IFtyYXdQYWdlXSA9IHF1ZXJ5LnBhZ2VzO1xuXHRcdFx0Y29uc3QgcGFnZSA9IHt9O1xuXHRcdFx0cGFnZS5yZWRpcmVjdCA9IHJhd1BhZ2UucmVkaXJlY3QgIT09IHVuZGVmaW5lZDtcblx0XHRcdHBhZ2UubWlzc2luZyA9IHJhd1BhZ2UubWlzc2luZyAhPT0gdW5kZWZpbmVkO1xuXHRcdFx0aWYgKHJhd1BhZ2UucmV2aXNpb25zKSB7XG5cdFx0XHRcdHBhZ2UuY29udGVudCA9IHJhd1BhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnQ7XG5cdFx0XHRcdHBhZ2UuYmFzZVRpbWVTdGFtcCA9IHJhd1BhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhZ2UuY29udGVudCA9ICcnO1xuXHRcdFx0XHRwYWdlLmJhc2VUaW1lU3RhbXAgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0XHRwYWdlLnN0YXJ0VGltZVN0YW1wID0gcmF3UGFnZS5zdGFydHRpbWVzdGFtcDtcblx0XHRcdHBhZ2UuZWRpdFRva2VuID0gcXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGRlZmVycmVkLnJlc29sdmUocGFnZSk7XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KG1lc3NhZ2VzLmxvYWRQYWdlRXJyb3IucmVwbGFjZSgnJDEnLCBwYWdlVGl0bGUpLnJlcGxhY2UoJyQyJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogUmVnaXN0ZXIgY2hhbmdlcyB0byBhIHBhZ2UsIHRvIGJlIHNhdmVkIGxhdGVyLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UvKiAqIChzdWNjZXNzIC0gbm8gcGFyYW1zLCBmYWlsdXJlIC0gZXJyb3IgZGVzY3JpcHRpb24pLiBUYWtlcyB0aGUgc2FtZSBwYXJhbWV0ZXJzLyogKiBhcyBzYXZlUGFnZSAqL1xuY29uc3Qgc2F2ZVdpdGhDb29sZG93biA9ICguLi5hcmdzKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0cGVuZGluZ1NhdmVzW3BlbmRpbmdTYXZlcy5sZW5ndGhdID0ge1xuXHRcdGFyZ3MsXG5cdFx0ZGZkOiBkZWZlcnJlZCxcblx0fTtcblx0aWYgKCFydW5uaW5nU2F2ZXMpIHtcblx0XHRjaGVja0FuZFNhdmUoKTtcblx0fVxuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogU2F2ZSB0aGUgZmlyc3Qgc2V0IG9mIGNoYW5nZXMgaW4gdGhlIGxpc3Qgb2YgcGVuZGluZyBjaGFuZ2VzLCBwcm92aWRpbmcgdGhhdC8qICogZW5vdWdoIHRpbWUgaGFzIHBhc3NlZCBzaW5jZSB0aGUgbGFzdCBlZGl0ICovXG5jb25zdCBjaGVja0FuZFNhdmUgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICghcGVuZGluZ1NhdmVzLmxlbmd0aCkge1xuXHRcdHJ1bm5pbmdTYXZlcyA9IGZhbHNlO1xuXHRcdHJldHVybjtcblx0fVxuXHRydW5uaW5nU2F2ZXMgPSB0cnVlO1xuXHRjb25zdCBtaWxsaXNTaW5jZUxhc3QgPSBEYXRlLm5vdygpIC0gbGFzdEVkaXRNaWxsaXM7XG5cdGlmIChtaWxsaXNTaW5jZUxhc3QgPCBjZmcuZWRpdENvb2xkb3duICogMTAwMCkge1xuXHRcdHNldFRpbWVvdXQoY2hlY2tBbmRTYXZlLCBjZmcuZWRpdENvb2xkb3duICogMTAwMCAtIG1pbGxpc1NpbmNlTGFzdCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gVGhlIGxhc3QgZWRpdCBzdGFydGVkIGF0IGxlYXN0IGNmZy5lZGl0Q29vbGRvd24gc2Vjb25kcyBhZ29cblx0XHRjb25zdCBzYXZlID0gcGVuZGluZ1NhdmVzLnNoaWZ0KCk7XG5cdFx0c2F2ZVBhZ2Vcblx0XHRcdC5hcHBseSh0aGlzLCBzYXZlLmFyZ3MpXG5cdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdGNoZWNrQW5kU2F2ZSgpO1xuXHRcdFx0XHRzYXZlLmRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdGNoZWNrQW5kU2F2ZSgpO1xuXHRcdFx0XHRzYXZlLmRmZC5yZWplY3QoZGVzY3JpcHRpb24pO1xuXHRcdFx0fSk7XG5cdFx0Ly8gV2UnbGwgdXNlIHRoZSB0aW1lIHNpbmNlIHRoZSBsYXN0IGVkaXQgc3RhcnRlZFxuXHRcdGxhc3RFZGl0TWlsbGlzID0gRGF0ZS5ub3coKTtcblx0fVxufTtcblxuLyogU2F2ZSB0aGUgY2hhbmdlcyBtYWRlIHRvIGEgcGFnZS4gUmV0dXJucyBhIGpRdWVyeSBwcm9taXNlIChzdWNjZXNzIC0gbm8gcGFyYW1zLC8qICogZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uKS8qICogcGFnZVRpdGxlOiBUaXRsZSBvZiB0aGUgcGFnZS8qICogcGFnZTogUGFnZSBkYXRhLyogKiBzdW1tYXJ5OiBTdW1tYXJ5IG9mIHRoZSBjaGFuZ2VzIG1hZGUgdG8gdGhlIHBhZ2UvKiAqIG1pbm9yRWRpdDogV2hldGhlciB0byBtYXJrIHRoZSBlZGl0IGFzICdtaW5vcicvKiAqIGJvdEVkaXQ6IFdoZXRoZXIgdG8gbWFyayB0aGUgZWRpdCBhcyAnYm90JyAqL1xuY29uc3Qgc2F2ZVBhZ2UgPSAocGFnZVRpdGxlLCB7ZWRpdFRva2VuLCBjb250ZW50LCBiYXNlVGltZVN0YW1wLCBzdGFydFRpbWVTdGFtcH0sIHN1bW1hcnksIG1pbm9yRWRpdCwgYm90RWRpdCkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdHRva2VuOiBlZGl0VG9rZW4sXG5cdFx0dGV4dDogY29udGVudCxcblx0XHRiYXNldGltZXN0YW1wOiBiYXNlVGltZVN0YW1wLFxuXHRcdHN0YXJ0dGltZXN0YW1wOiBzdGFydFRpbWVTdGFtcCxcblx0XHRzdW1tYXJ5LFxuXHRcdHdhdGNobGlzdDogY2ZnLndhdGNoLFxuXHRcdG1pbm9yOiBtaW5vckVkaXQsXG5cdFx0Ym90OiBib3RFZGl0LFxuXHR9O1xuXHRhcGkucG9zdChwYXJhbXMpXG5cdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdH0pXG5cdFx0LmZhaWwoKGNvZGUpID0+IHtcblx0XHRcdGRlZmVycmVkLnJlamVjdChtZXNzYWdlcy5zYXZlUGFnZUVycm9yLnJlcGxhY2UoJyQxJywgcGFnZVRpdGxlKS5yZXBsYWNlKCckMicsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbmV4cG9ydCB7aW5zdGFsbH07XG4iLCAiLyoqXG4gKiBEaXNhbUFzc2lzdDogYSB0b29sIGZvciByZXBhaXJpbmcgbGlua3MgZnJvbSBhcnRpY2xlcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcy5cbiAqIOeUsVF3ZXJ0eXl0cmV3cXF3ZXJ0eeacgOWIneiuvuiuoe+8mkNDIEJZLVNBIDMuMFxuICog55SxR1pXRGVy5pys5Zyw5YyW77yaMjAyMC0wOC0xOSBDQyBCWS1TQSAzLjBcbiAqIOeUseWSjOW5s+Wli+aWl+aVkeWcsOeQg+eojeS9nOe/u+ivkSAyMDIxLTA1LTE1IENDIEJZLVNBIDMuMFxuICog5rGC6Ze755m+56eRTmp6anrnroDkvZPljJYgMjAyMi0yLTE0IENDIEJZLVNBIDQuMFxuICovXG5pbXBvcnQgJy4vRGlzYW1Bc3Npc3QubGVzcyc7XG5cbmltcG9ydCB7aW5zdGFsbH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG4kKGluc3RhbGwpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9B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UzBMLE9BQU94VixTQUFTMkIsY0FBY3dJLFFBQVEsTUFBTTRCLFNBQVMsRUFBRTVCLFFBQVEsTUFBTW9MLElBQUksQ0FBQztFQUNwRixDQUFDO0FBQ0YsU0FBT3pMLFNBQVNZLFFBQVE7QUFDekI7O0FDcGdDQXhHLEVBQUVOLE9BQU87IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjZmciLCAiZGlzYW1DYXRlZ29yaWVzIiwgImRpc2FtTGlua1RlbXBsYXRlcyIsICJkaXNhbUxpbmtJZ25vcmVUZW1wbGF0ZXMiLCAiZGlzYW1Gb3JtYXQiLCAiZGlzYW1SZWdFeHAiLCAiZGlzYW1OZWVkZWRUZXh0IiwgImNvbmNhdCIsICJyZWRpcmVjdFRvRGlzYW0iLCAiaW50ZW50aW9uYWxMaW5rT3B0aW9uIiwgInRhcmdldE5hbWVzcGFjZXMiLCAiYmFja2xpbmtMaW1pdCIsICJxdWVyeVRpdGxlTGltaXQiLCAicmFkaXVzIiwgIm51bUNvbnRleHRMaW5lcyIsICJoaXN0b3J5U2l6ZSIsICJlZGl0Q29vbGRvd24iLCAid2F0Y2giLCAibWVzc2FnZXMiLCAic3RhcnQiLCAic3RhcnRNYWluIiwgInN0YXJ0U2FtZSIsICJjbG9zZSIsICJ1bmRvIiwgIm9taXQiLCAicmVmcmVzaCIsICJ0aXRsZUFzVGV4dCIsICJkaXNhbU5lZWRlZCIsICJpbnRlbnRpb25hbExpbmsiLCAidGl0bGVBc1RleHRQcm9tcHQiLCAicmVtb3ZlTGluayIsICJvcHRpb25NYXJrZXIiLCAidGFyZ2V0T3B0aW9uTWFya2VyIiwgInJlZGlyZWN0T3B0aW9uTWFya2VyIiwgInBhZ2VUaXRsZUxpbmUiLCAibm9Nb3JlTGlua3MiLCAicGVuZGluZ0VkaXRDb3VudGVyIiwgInBlbmRpbmdFZGl0Qm94IiwgInBlbmRpbmdFZGl0Qm94VGltZUVzdGltYXRpb24iLCAicGVuZGluZ0VkaXRCb3hMaW1pdGVkIiwgImVycm9yIiwgImZldGNoUmVkaXJlY3RzRXJyb3IiLCAiZ2V0QmFja2xpbmtzRXJyb3IiLCAiZmV0Y2hSaWdodHNFcnJvciIsICJsb2FkUGFnZUVycm9yIiwgInNhdmVQYWdlRXJyb3IiLCAiZGlzbWlzc0Vycm9yIiwgInBlbmRpbmciLCAiZWRpdEluUHJvZ3Jlc3MiLCAiZWxsaXBzaXMiLCAibm90aWZ5Q2hhcmFjdGVyIiwgInN1bW1hcnkiLCAic3VtbWFyeUNoYW5nZWQiLCAic3VtbWFyeU9taXR0ZWQiLCAic3VtbWFyeVJlbW92ZWQiLCAic3VtbWFyeUludGVudGlvbmFsIiwgInN1bW1hcnlIZWxwTmVlZGVkIiwgInN1bW1hcnlTZXBhcmF0b3IiLCAicmVkaXJlY3RTdW1tYXJ5IiwgInN0YXJ0TGluayIsICJ1aSIsICJsaW5rcyIsICJwYWdlQ2hhbmdlcyIsICJjdXJyZW50UGFnZVRpdGxlIiwgImN1cnJlbnRQYWdlUGFyYW1ldGVycyIsICJjdXJyZW50TGluayIsICJwb3NzaWJsZUJhY2tsaW5rRGVzdGluYXRpb25zIiwgImZvcmNlU2FtZVBhZ2UiLCAicnVubmluZyIsICJjaG9vc2luZyIsICJjYW5NYXJrSW50ZW50aW9uYWxMaW5rcyIsICJkaXNwbGF5ZWRQYWdlcyIsICJlZGl0Q291bnQiLCAiZWRpdExpbWl0IiwgInBlbmRpbmdTYXZlcyIsICJwZW5kaW5nRWRpdEJveFRleHQiLCAibGFzdEVkaXRNaWxsaXMiLCAicnVubmluZ1NhdmVzIiwgImluc3RhbGwiLCAid2dBY3Rpb24iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpc0Rpc2FtIiwgIiQiLCAicG9ydGxldElkIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiUmVnRXhwIiwgInRlc3QiLCAiZ2V0VGl0bGUiLCAic3RhcnRNYWluTGluayIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgIm9uIiwgInN0YXJ0U2FtZUxpbmsiLCAiYWRkIiwgImVuc3VyZURBQkV4aXN0cyIsICJ0aGVuIiwgImNhbk1hcmsiLCAiY3JlYXRlVUkiLCAiYWRkVW5sb2FkQ29uZmlybSIsICJtYXJrRGlzYW1PcHRpb25zIiwgImNoZWNrRWRpdExpbWl0IiwgInRvZ2dsZVBlbmRpbmdFZGl0Qm94IiwgImRvUGFnZSIsICIkYm9keSIsICJkaXNwbGF5IiwgImFkZENsYXNzIiwgImZpbmlzaGVkTWVzc2FnZSIsICJ0ZXh0IiwgImhpZGUiLCAiY29udGV4dCIsICJ1bmRvQnV0dG9uIiwgImNyZWF0ZUJ1dHRvbiIsICJvbWl0QnV0dG9uIiwgImVuZEJ1dHRvbiIsICJzYXZlQW5kRW5kIiwgInJlZnJlc2hCdXR0b24iLCAidGl0bGVBc1RleHRCdXR0b24iLCAiY2hvb3NlVGl0bGVGcm9tUHJvbXB0IiwgImludGVudGlvbmFsTGlua0J1dHRvbiIsICJjaG9vc2VJbnRlbnRpb25hbExpbmsiLCAiZGlzYW1OZWVkZWRCdXR0b24iLCAiY2hvb3NlRGlzYW1OZWVkZWQiLCAicmVtb3ZlTGlua0J1dHRvbiIsICJjaG9vc2VMaW5rUmVtb3ZhbCIsICJ0b3AiLCAiYXBwZW5kIiwgImxlZnRCdXR0b25zIiwgInJpZ2h0QnV0dG9ucyIsICJhbGxCdXR0b25zIiwgInVwZGF0ZUVkaXRDb3VudGVyIiwgInRvZ2dsZUFjdGlvbkJ1dHRvbnMiLCAiZmluZCIsICJiZWZvcmUiLCAiZmFkZUluIiwgIndpbmRvdyIsICJjaGVja0FjdHVhbENoYW5nZXMiLCAib3B0aW9uUGFnZVRpdGxlcyIsICJvcHRpb25NYXJrZXJzIiwgImdldERpc2FtT3B0aW9ucyIsICJlYWNoIiwgIl9pbmRleCIsICJlbGVtZW50IiwgImxpbmsiLCAidGl0bGUiLCAiZXh0cmFjdFBhZ2VOYW1lIiwgImF0dHIiLCAiZXYiLCAicHJldmVudERlZmF1bHQiLCAiY2hvb3NlUmVwbGFjZW1lbnQiLCAiYWZ0ZXIiLCAibGVuZ3RoIiwgInRhcmdldFBhZ2UiLCAiZ2V0VGFyZ2V0UGFnZSIsICJmZXRjaFJlZGlyZWN0cyIsICJkb25lIiwgInJlZGlyZWN0cyIsICJlbmRUYXJnZXRQYWdlIiwgInJlc29sdmVSZWRpcmVjdCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZW50cmllcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiaWkiLCAib3B0aW9uUGFnZVRpdGxlIiwgInZhbHVlIiwgImVuZE9wdGlvblRpdGxlIiwgImlzU2FtZVBhZ2UiLCAiZXJyIiwgImUiLCAiZiIsICJmYWlsIiwgImRlZmVycmVkIiwgIkRlZmVycmVkIiwgInJlc29sdmUiLCAiZXhlYyIsICJkaXNhbVRpdGxlIiwgInJlcGxhY2UiLCAibG9hZFBhZ2UiLCAicGFnZSIsICJtaXNzaW5nIiwgImNvbnRlbnQiLCAic2F2ZVBhZ2UiLCAiZGVzY3JpcHRpb24iLCAicHJvbWlzZSIsICJmZXRjaFJpZ2h0cyIsICJyaWdodHMiLCAiaW5jbHVkZXMiLCAiYWx3YXlzIiwgImFwcGx5Q2hhbmdlIiwgInNoaWZ0IiwgImRhdGEiLCAiZG9MaW5rIiwgImdldEJhY2tsaW5rcyIsICJiYWNrbGlua3MiLCAicGFnZVRpdGxlcyIsICJfaSIsICJfcGVuZGluZ1NhdmVzIiwgImVsIiwgImZpbHRlciIsICJ0IiwgInJlbW92ZURpc2FtIiwgInVwZGF0ZUNvbnRleHQiLCAiZXh0cmFjdExpbmtUb1BhZ2UiLCAiZW5kIiwgInBhZ2VUaXRsZSIsICJleHRyYSIsICJhZGRDaGFuZ2UiLCAicmVwbGFjZUxpbmsiLCAicHJvbXB0IiwgImxhc3RQYWdlIiwgImF0IiwgInVuc2hpZnQiLCAiY29udGVudEJlZm9yZSIsICJwb3AiLCAiZW5hYmxlZCIsICJhZmZlY3RlZEJ1dHRvbnMiLCAiX2kyIiwgIl9hZmZlY3RlZEJ1dHRvbnMiLCAiYnV0dG9uIiwgInByb3AiLCAidG9nZ2xlRmluaXNoZWRNZXNzYWdlIiwgInNob3ciLCAidG9nZ2xlIiwgImZhZGVPdXQiLCAibm90aWZ5Q29tcGxldGlvbiIsICJvbGRUaXRsZSIsICJvbmUiLCAiaHRtbCIsICJnZXRVcmwiLCAicmVkaXJlY3QiLCAiZXNjYXBlIiwgImV4dHJhY3RDb250ZXh0IiwgImVtcHR5IiwgIm51bUxpbmVzIiwgIk1hdGgiLCAiY2VpbCIsICJoZWlnaHQiLCAiTnVtYmVyIiwgInBhcnNlRmxvYXQiLCAiY3NzIiwgIkFycmF5IiwgImZyb20iLCAiam9pbiIsICJoYXNEaXNhbVRlbXBsYXRlIiwgImNvdW50QWN0dWFsbHlDaGFuZ2VkRnVsbHlDaGVja2VkUGFnZXMiLCAidGV4dENvbnRlbnQiLCAic2Vjb25kc1RvSEhNTVNTIiwgInBhZ2VDaGFuZ2UiLCAiY2hhbmdlU3VtbWFyaWVzIiwgInNhdmUiLCAic2F2ZVdpdGhDb29sZG93biIsICJhcHBseUFsbENoYW5nZXMiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAib2xkQ29udGVudCIsICJsYXN0UGFnZUNoYW5nZSIsICJjb3VudEFjdHVhbENoYW5nZXMiLCAiY2hhbmdlQ291bnQiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAibGFzdENoYW5nZSIsICJjdXJyZW50VG9vbFVJIiwgInJlbW92ZUNsYXNzIiwgInJlbW92ZSIsICJjb21wbGV0ZSIsICJlcnJvckRlc2NyaXB0aW9uIiwgImVycm9yQm94IiwgInVpSXNJblBsYWNlIiwgImNvbnRhaW5zIiwgImRvY3VtZW50RWxlbWVudCIsICJuZXh0RWxlbWVudCIsICJuZXdDb250ZW50IiwgImxpbmtTdGFydCIsICJzbGljZSIsICJtYXgiLCAibGlua0VuZCIsICJhZnRlckRlc2NyaXB0aW9uIiwgImV4dHJhY3RMaW5rIiwgImxhc3RJbmRleCIsICJ0aXRsZVJlZ2V4IiwgInRlbXBsYXRlUmVnZXgiLCAibWF0Y2giLCAiaW5kZXgiLCAiX21hdGNoJCIsICJwb3NzaWJseUFtYmlndW91cyIsICJfZW5kIiwgInJlc3QiLCAidGVtcGxhdGVNYXRjaCIsICJ0ZW1wbGF0ZVRpdGxlIiwgImdldENhbm9uaWNhbFRpdGxlIiwgImRlc3RpbmF0aW9ucyIsICJ3Z1BhZ2VOYW1lIiwgIl9tYXRjaCQyIiwgInRpdGxlMSIsICJ0aXRsZTIiLCAiVGl0bGUiLCAiZ2V0UHJlZml4ZWRUZXh0IiwgImNvbnRleHRTdGFydCIsICJjb250ZXh0RW5kIiwgImNvbnRleHRQcmV2IiwgImNvbnRleHROZXh0IiwgInBhZ2VOYW1lIiwgImV4dHJhY3RQYWdlTmFtZVJhdyIsICJzZWN0aW9uUG9zIiwgImluZGV4T2YiLCAic2VjdGlvbiIsICJ3Z1NjcmlwdCIsICJ3Z0FydGljbGVQYXRoIiwgImhhc0NsYXNzIiwgImhyZWYiLCAiZ2V0UGFyYW1WYWx1ZSIsICJyZWdleCIsICJyZWdleFJlc3VsdCIsICJpc0FycmF5IiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ3Z0NhdGVnb3JpZXMiLCAiY2F0ZWdvcmllcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJjYXRlZ29yeSIsICJ0b3RhbFNlY29uZHMiLCAiaGhtbXNzIiwgImhvdXJzIiwgImZsb29yIiwgIm1pbnV0ZXMiLCAic2Vjb25kcyIsICJwYWQiLCAic3RyIiwgInoiLCAid2lkdGgiLCAidG9TdHJpbmciLCAib25DbGljayIsICJ0eXBlIiwgInBvc3NpYmxlUmVkaXJlY3RzIiwgImFwcGxpZWRSZWRpcmVjdCIsICJ2aXNpdGVkUGFnZXMiLCAiY3VycmVudFBhZ2UiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAicG9zc2libGVSZWRpcmVjdCIsICJ0byIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImxpc3QiLCAiYmx0aXRsZSIsICJibHJlZGlyZWN0IiwgImJsbGltaXQiLCAiYmxuYW1lc3BhY2UiLCAicXVlcnkiLCAibGlua1RpdGxlcyIsICJiYWNrbGlua3NRdWVyeSIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJyZWRpcmxpbmtzIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgImNvZGUiLCAicmVqZWN0IiwgImN1cnJlbnRUaXRsZXMiLCAicmVzdFRpdGxlcyIsICJ0aXRsZXMiLCAiX3F1ZXJ5JHJlZGlyZWN0cyIsICJ0aGVzZVJlZGlyZWN0cyIsICJtZXRhIiwgInVpcHJvcCIsICJ1c2VyaW5mbyIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJydnByb3AiLCAicmF3UGFnZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAiYmFzZVRpbWVTdGFtcCIsICJ0aW1lc3RhbXAiLCAic3RhcnRUaW1lU3RhbXAiLCAic3RhcnR0aW1lc3RhbXAiLCAiZWRpdFRva2VuIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAiYXJncyIsICJkZmQiLCAiY2hlY2tBbmRTYXZlIiwgIm1pbGxpc1NpbmNlTGFzdCIsICJEYXRlIiwgIm5vdyIsICJzZXRUaW1lb3V0IiwgImFwcGx5IiwgIm1pbm9yRWRpdCIsICJib3RFZGl0IiwgInRva2VuIiwgImJhc2V0aW1lc3RhbXAiLCAid2F0Y2hsaXN0IiwgIm1pbm9yIiwgImJvdCIsICJwb3N0Il0KfQo=
