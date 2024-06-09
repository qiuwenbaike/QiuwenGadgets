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
    if (!summary) {
      summary = pageTitle ? messages.summaryChanged.replace("$1", pageTitle) : messages.summaryOmitted;
    }
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
  isSamePage(title, link.description) ? (
    // [[B|A]] should be replaced with [[A]] rather than [[A|A]]
    newContent = link.description
  ) : newContent = "".concat(title, "|").concat(link.description);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvYXBpLnRzIiwgInNyYy9EaXNhbUFzc2lzdC9tb2R1bGVzL2NvbmZpZy50cyIsICJzcmMvRGlzYW1Bc3Npc3QvbW9kdWxlcy9tZXNzYWdlcy5qcyIsICJzcmMvRGlzYW1Bc3Npc3QvbW9kdWxlcy9jb3JlLmpzIiwgInNyYy9EaXNhbUFzc2lzdC9EaXNhbUFzc2lzdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdEaXNhbUFzc2lzdC8xLjEnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImNvbnN0IGNmZyA9IHtcblx0LyogQ2F0ZWdvcmllcyB3aGVyZSBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBhcmUgYWRkZWQgKHVzdWFsbHkgYnkgYSB0ZW1wbGF0ZSBsaWtlIHt7RGlzYW1iaWd1YXRpb259fSAqL1xuXHRkaXNhbUNhdGVnb3JpZXM6IFsn5YWo6YOo5raI5q2n5LmJ6aG16Z2iJ10sXG5cdC8qIFwiQ2Fub25pY2FsIG5hbWVzXCIgb2YgdGhlIHRlbXBsYXRlcyB0aGF0IG1heSBhcHBlYXIgYWZ0ZXIgYW1iaWd1b3VzIGxpbmtzIGFuZCB3aGljaCBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIGZpeGluZyB0aG9zZSBsaW5rcyAqL1xuXHRkaXNhbUxpbmtUZW1wbGF0ZXM6IFtcblx0XHQnRGlzYW1iaWd1YXRpb24gbmVlZGVkJyxcblx0XHQnQW1iaWd1b3VzIGxpbmsnLFxuXHRcdCdBbWJsaW5rJyxcblx0XHQnRGFiIG5lZWRlZCcsXG5cdFx0J0Rpc2FtYi1saW5rJyxcblx0XHQnRGlzYW1iaWcgbmVlZGVkJyxcblx0XHQnRGlzYW1iaWd1YXRlJyxcblx0XHQnRG4nLFxuXHRcdCdOZWVkZGFiJyxcblx0XSxcblx0LyogXCJDYW5vbmljYWwgbmFtZXNcIiBvZiB0aGUgdGVtcGxhdGVzIHRoYXQgZGVzaWduYXRlIGludGVudGlvbmFsIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzICovXG5cdGRpc2FtTGlua0lnbm9yZVRlbXBsYXRlczogWydSIGZyb20gYW1iaWd1b3VzIHBhZ2UnLCAnUiB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlJywgJ1IgZnJvbSBpbmNvbXBsZXRlIGRpc2FtYmlndWF0aW9uJ10sXG5cdC8qIEZvcm1hdCBzdHJpbmcgZm9yIFwiRm9vIChkaXNhbWJpZ3VhdGlvbilcIi1zdHlsZSBwYWdlcyAqL1xuXHRkaXNhbUZvcm1hdDogJyQx77yI5raI5q2n5LmJ77yJJyxcblx0LyogUmVndWxhciBleHByZXNzaW9uIG1hdGNoaW5nIHRoZSB0aXRsZXMgb2YgZGlzYW1iaWd1YXRpb24gcGFnZXMgKHdoZW4gdGhleSBhcmUgZGlmZmVyZW50IGZyb20gdGhlIHRpdGxlcyBvZiB0aGUgcHJpbWFyeSB0b3BpY3MpICovXG5cdGRpc2FtUmVnRXhwOiAnXiguKinvvIgo5raI5q2n5LmJfOa2iOatp+e+qSnvvIkkJyxcblx0LyogVGV4dCB0aGF0IHdpbGwgYmUgaW5zZXJ0ZWQgYWZ0ZXIgdGhlIGxpbmsgaWYgdGhlIHVzZXIgcmVxdWVzdHMgaGVscC4gSWYgdGhlIHZhbHVlIGlzIG51bGwsIHRoZSBvcHRpb24gdG8gcmVxdWVzdCBoZWxwIHdvbid0IGJlIG9mZmVyZWQgKi9cblx0ZGlzYW1OZWVkZWRUZXh0OiAne3tkbnxkYXRlPXt7Jy5jb25jYXQoJ3N1YnN0OicsICdDVVJSRU5UTU9OVEhOQU1FJywgJ319IHt7JywgJ3N1YnN0OicsICdDVVJSRU5UWUVBUn19fX0nKSxcblx0LyogQ29udGVudCBvZiB0aGUgXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiIHBhZ2VzIHRoYXQgd2lsbCBiZSBjcmVhdGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB1c2luZyBEaXNhbUFzc2lzdCBmcm9tIGEgXCJGb29cIiBwYWdlICovXG5cdHJlZGlyZWN0VG9EaXNhbTogJyPph43lrprlkJEgW1skMV1dJy5jb25jYXQoJ3t7UiB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlfX0nKSxcblx0LyogV2hldGhlciBpbnRlbnRpb25hbCBsaW5rcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBjYW4gYmUgZXhwbGljaXRseSBtYXJrZWQgYnkgYWRkaW5nIFwiIChkaXNhbWJpZ3VhdGlvbilcIiAqL1xuXHRpbnRlbnRpb25hbExpbmtPcHRpb246IGZhbHNlLFxuXHQvKiBOYW1lc3BhY2VzIHRoYXQgd2lsbCBiZSBzZWFyY2hlZCBmb3IgaW5jb21pbmcgbGlua3MgdG8gdGhlIGRpc2FtYmlndWF0aW9uIHBhZ2UgKHBhZ2VzIGluIG90aGVyIG5hbWVzcGFjZXMgd2lsbCBiZSBpZ25vcmVkKSAqL1xuXHR0YXJnZXROYW1lc3BhY2VzOiBbNiwgMTAsIDE0LCAxMTgsIDBdLFxuXHQvKiBOdW1iZXIgb2YgYmFja2xpbmtzIHRoYXQgd2lsbCBiZSBkb3dubG9hZGVkIGF0IG9uY2UgV2hlbiB1c2luZyBibHJlZGlyZWN0LCB0aGUgbWF4aW11bSBsaW1pdCBpcyBzdXBwb3NlZGx5IGhhbHZlZCAoc2VlIGh0dHA6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL0FQSTpCYWNrbGlua3MpICovXG5cdGJhY2tsaW5rTGltaXQ6IDI1MCxcblx0LyogTnVtYmVyIG9mIHRpdGxlcyB3ZSBjYW4gcXVlcnkgZm9yIGF0IG9uY2UgKi9cblx0cXVlcnlUaXRsZUxpbWl0OiA1MCxcblx0LyogTnVtYmVyIG9mIGNoYXJhY3RlcnMgYmVmb3JlIGFuZCBhZnRlciB0aGUgaW5jb21pbmcgbGluayB0aGF0IHdpbGwgYmUgZGlzcGxheWVkICovXG5cdHJhZGl1czogMzAwLFxuXHQvKiBIZWlnaHQgb2YgdGhlIGNvbnRleHQgYm94LCBpbiBsaW5lcyAqL1xuXHRudW1Db250ZXh0TGluZXM6IDQsXG5cdC8qIE51bWJlciBvZiBwYWdlcyB0aGF0IHdpbGwgYmUgc3RvcmVkIGJlZm9yZSBzYXZpbmcsIHNvIHRoYXQgY2hhbmdlcyB0byB0aGVtIGNhbiBiZSB1bmRvbmUgaWYgbmVlZCBiZSAqL1xuXHRoaXN0b3J5U2l6ZTogMixcblx0LyogTWluaW11bSB0aW1lIGluIHNlY29uZHMgc2luY2UgdGhlIGxhc3QgY2hhbmdlIHdhcyBzYXZlZCBiZWZvcmUgYSBuZXcgZWRpdCBjYW4gYmUgbWFkZS4gQSBuZWdhdGl2ZSB2YWx1ZSBvciAwIGRpc2FibGVzIHRoZSBjb29sZG93bi4gVXNlcnMgd2l0aCB0aGUgXCJib3RcIiByaWdodCB3b24ndCBiZSBhZmZlY3RlZCBieSB0aGUgY29vbGRvd24gKi9cblx0ZWRpdENvb2xkb3duOiAwLFxuXHQvKiBTcGVjaWZ5IGhvdyB0aGUgd2F0Y2hsaXN0IGlzIGFmZmVjdGVkIGJ5IERpc2FtQXNzaXN0IGVkaXRzLiBQb3NzaWJsZSB2YWx1ZXM6IFwid2F0Y2hcIiwgXCJ1bndhdGNoXCIsIFwicHJlZmVyZW5jZXNcIiwgXCJub2NoYW5nZVwiICovXG5cdHdhdGNoOiAnbm9jaGFuZ2UnLFxufTtcblxuZXhwb3J0IHtjZmd9O1xuIiwgImNvbnN0IG1lc3NhZ2VzID0ge1xuXHRzdGFydDogJ+S4uumTvuaOpea2iOatp+S5iScsXG5cdHN0YXJ0TWFpbjogJ+S4uumTvuiHs+S4u+adoeebrueahOmTvuaOpea2iOatp+S5iScsXG5cdHN0YXJ0U2FtZTogJ+S4uumTvuiHs+a2iOatp+S5iemhteeahOmTvuaOpea2iOatp+S5iScsXG5cdGNsb3NlOiAn5YWz6ZetJyxcblx0dW5kbzogJ+WkjeWOnycsXG5cdG9taXQ6ICfot7Pov4cnLFxuXHRyZWZyZXNoOiAn6YeN5paw5pW055CGJyxcblx0dGl0bGVBc1RleHQ6ICflhbblroPnm67moIcnLFxuXHRkaXNhbU5lZWRlZDogJ+agh+ekunt7ZG59fScsXG5cdGludGVudGlvbmFsTGluazogJ+acieaEj+mTvuWIsOa2iOatp+S5iemhteeahOmTvuaOpScsXG5cdHRpdGxlQXNUZXh0UHJvbXB0OiAn6K+36L6T5YWl5paw55qE6ZO+5o6l55uu5qCH77yaJyxcblx0cmVtb3ZlTGluazogJ+WOu+mZpOmTvuaOpScsXG5cdG9wdGlvbk1hcmtlcjogJyBb6ZO+5o6l5Yiw6L+Z6YeMXScsXG5cdHRhcmdldE9wdGlvbk1hcmtlcjogJyBb5b2T5YmN55uu5qCHXScsXG5cdHJlZGlyZWN0T3B0aW9uTWFya2VyOiAnIFvlvZPliY3nm67moIfvvIjph43lrprlkJHvvIldJyxcblx0cGFnZVRpdGxlTGluZTogJzxhIGhyZWY9XCIkMVwiPiQyPC9hPu+8micsXG5cdG5vTW9yZUxpbmtzOiAn5rKh5pyJ6ZyA6KaB5raI5q2n5LmJ55qE6ZO+5o6l5LqG44CCJyxcblx0cGVuZGluZ0VkaXRDb3VudGVyOiAn5bey5L+d5a2YJDHkuKrvvIzlt7LnvJbovpEkMuS4qicsXG5cdHBlbmRpbmdFZGl0Qm94OiAnRGlzYW1Bc3Npc3TmraPlnKjlgqjlrZjmgqjnmoTnvJbovpHvvIgkMe+8ieOAgicsXG5cdHBlbmRpbmdFZGl0Qm94VGltZUVzdGltYXRpb246ICckMe+8m+WJqeS9meaXtumXtO+8miQyJyxcblx0cGVuZGluZ0VkaXRCb3hMaW1pdGVkOlxuXHRcdCflnKjmiYDmnInmm7TmlLnkv53lrZjliY3vvIzor7fkuI3opoHlhbPpl63pobXpnaLvvJvkvaDlj6/ku6XlnKjlj6bkuIDkuKrpobXpnaLnvJbovpHmsYLpl7vnmb7np5HvvIzkvYbmmK/or7fli7/lkIzml7bkvb/nlKjlpJrkuKpEaXNhbUFzc2lzdOOAgicsXG5cdGVycm9yOiAn6ZSZ6K+v77yaJDEnLFxuXHRmZXRjaFJlZGlyZWN0c0Vycm9yOiAn6I635Y+W6YeN5a6a5ZCR5aSx6LSl77yaXCIkMVwiLicsXG5cdGdldEJhY2tsaW5rc0Vycm9yOiAn5LiL6L295Y+N5ZCR6ZO+5o6l5aSx6LSl77yaXCIkMVwiLicsXG5cdGZldGNoUmlnaHRzRXJyb3I6ICfojrflj5bnlKjmiLfmnYPpmZDlpLHotKXvvJpcIiQxXCIsJyxcblx0bG9hZFBhZ2VFcnJvcjogJ+WKoOi9vSQx5aSx6LSl77yaXCIkMlwiLicsXG5cdHNhdmVQYWdlRXJyb3I6ICfkv53lrZjoh7MkMeWksei0pe+8mlwiJDJcIi4nLFxuXHRkaXNtaXNzRXJyb3I6ICdEaXNtaXNzJyxcblx0cGVuZGluZzogJ0Rpc2FtQXNzaXN05bCa5pyJ5pyq5YKo5a2Y55qE57yW6L6R44CC5aaC5qyy5YKo5a2Y5LmL77yM6K+35oyJ4oCc5YWz6Zet4oCd44CCJyxcblx0ZWRpdEluUHJvZ3Jlc3M6ICdEaXNhbUFzc2lzdOato+WcqOi/m+ihjOe8lui+keOAguiLpeaCqOWwhuacrOWIhumhteWFs+mXre+8jOWPr+iDveS8muS4p+WkseaCqOeahOe8lui+keOAgicsXG5cdGVsbGlwc2lzOiAn4oCm4oCmJyxcblx0bm90aWZ5Q2hhcmFjdGVyOiAn4pyUJyxcblx0c3VtbWFyeTogJ+S9v+eUqFtbTWVkaWFXaWtpOkdhZGdldC1EaXNhbUFzc2lzdC5qc3xEaXNhbUFzc2lzdF1d5riF55CGW1tRVzpEQUJ85raI5q2n5LmJXV3pk77mjqXvvJpbWyQxXV3vvIgkMu+8ieOAgicsXG5cdHN1bW1hcnlDaGFuZ2VkOiAn5pS56ZO+5o6l6IezW1skMV1dJyxcblx0c3VtbWFyeU9taXR0ZWQ6ICfpk77mjqXlt7Lot7Pov4cnLFxuXHRzdW1tYXJ5UmVtb3ZlZDogJ+mTvuaOpeW3suenu+mZpCcsXG5cdHN1bW1hcnlJbnRlbnRpb25hbDogJ+WIu+aEj+mTvuaOpeiHs+a2iOatp+S5iemhtemdoicsXG5cdHN1bW1hcnlIZWxwTmVlZGVkOiAn6ZyA6KaB5biu5YqpJyxcblx0c3VtbWFyeVNlcGFyYXRvcjogJzsgJyxcblx0cmVkaXJlY3RTdW1tYXJ5OiAn5L2/55SoW1tNZWRpYVdpa2k6R2FkZ2V0LURpc2FtQXNzaXN0LmpzfERpc2FtQXNzaXN0XV3liJvlu7rnm67moIfkuLpbWyQxXV3nmoTph43lrprlkJHjgIInLFxufTtcblxuZXhwb3J0IHttZXNzYWdlc307XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2NmZ30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi9tZXNzYWdlcyc7XG5cbmxldCBzdGFydExpbms7XG5sZXQgdWk7XG5sZXQgbGlua3M7XG5sZXQgcGFnZUNoYW5nZXM7XG5sZXQgY3VycmVudFBhZ2VUaXRsZTtcbmxldCBjdXJyZW50UGFnZVBhcmFtZXRlcnM7XG5sZXQgY3VycmVudExpbms7XG5sZXQgcG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucztcbmxldCBmb3JjZVNhbWVQYWdlID0gZmFsc2U7XG5sZXQgcnVubmluZyA9IGZhbHNlO1xubGV0IGNob29zaW5nID0gZmFsc2U7XG5sZXQgY2FuTWFya0ludGVudGlvbmFsTGlua3MgPSBmYWxzZTtcbmxldCBkaXNwbGF5ZWRQYWdlcyA9IHt9O1xubGV0IGVkaXRDb3VudCA9IDA7XG5sZXQgZWRpdExpbWl0O1xuY29uc3QgcGVuZGluZ1NhdmVzID0gW107XG5sZXQgcGVuZGluZ0VkaXRCb3g7XG5sZXQgcGVuZGluZ0VkaXRCb3hUZXh0O1xubGV0IGxhc3RFZGl0TWlsbGlzID0gMDtcbmxldCBydW5uaW5nU2F2ZXMgPSBmYWxzZTtcblxuLyogRW50cnkgcG9pbnQuIENoZWNrIHdoZXRoZXIgd2UgYXJlIGluIGEgZGlzYW1iaWd1YXRpb24gcGFnZS4gSWYgc28sIGFkZCBhIGxpbmsgdG8gc3RhcnQgdGhlIHRvb2wgKi9cbmNvbnN0IGluc3RhbGwgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0FjdGlvbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8ICFpc0Rpc2FtKCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0JCgoKSA9PiB7XG5cdFx0Y29uc3QgcG9ydGxldElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0XHQvLyBUaGlzIGlzIGEgXCIgKGRpc2FtYmlndWF0aW9uKVwiIHBhZ2Vcblx0XHRpZiAobmV3IFJlZ0V4cChjZmcuZGlzYW1SZWdFeHApLnRlc3QoZ2V0VGl0bGUoKSkpIHtcblx0XHRcdGNvbnN0IHN0YXJ0TWFpbkxpbmsgPSAkKFxuXHRcdFx0XHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBtZXNzYWdlcy5zdGFydE1haW4sICdjYS1kaXNhbWFzc2lzdC1tYWluJylcblx0XHRcdCkub24oJ2NsaWNrJywgc3RhcnRNYWluKTtcblx0XHRcdGNvbnN0IHN0YXJ0U2FtZUxpbmsgPSAkKFxuXHRcdFx0XHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBtZXNzYWdlcy5zdGFydFNhbWUsICdjYS1kaXNhbWFzc2lzdC1zYW1lJylcblx0XHRcdCkub24oJ2NsaWNrJywgc3RhcnRTYW1lKTtcblx0XHRcdHN0YXJ0TGluayA9IHN0YXJ0TWFpbkxpbmsuYWRkKHN0YXJ0U2FtZUxpbmspO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdGFydExpbmsgPSAkKG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIG1lc3NhZ2VzLnN0YXJ0LCAnY2EtZGlzYW1hc3Npc3QtcGFnZScpKS5vbihcblx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0c3RhcnRcblx0XHRcdCk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbi8qIFN0YXJ0IHRoZSB0b29sLiBEaXNwbGF5IHRoZSBVSSBhbmQgYmVnaW4gbG9va2luZyBmb3IgbGlua3MgdG8gZml4ICovXG5jb25zdCBzdGFydCA9ICgpID0+IHtcblx0aWYgKHJ1bm5pbmcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRydW5uaW5nID0gdHJ1ZTtcblx0bGlua3MgPSBbXTtcblx0cGFnZUNoYW5nZXMgPSBbXTtcblx0ZGlzcGxheWVkUGFnZXMgPSB7fTtcblx0ZW5zdXJlREFCRXhpc3RzKCkudGhlbigoY2FuTWFyaykgPT4ge1xuXHRcdGNhbk1hcmtJbnRlbnRpb25hbExpbmtzID0gY2FuTWFyaztcblx0XHRjcmVhdGVVSSgpO1xuXHRcdGFkZFVubG9hZENvbmZpcm0oKTtcblx0XHRtYXJrRGlzYW1PcHRpb25zKCk7XG5cdFx0Y2hlY2tFZGl0TGltaXQoKS50aGVuKCgpID0+IHtcblx0XHRcdHRvZ2dsZVBlbmRpbmdFZGl0Qm94KGZhbHNlKTtcblx0XHRcdGRvUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8qIFN0YXJ0IERpc2FtQXNzaXN0LiBEaXNhbWJpZ3VhdGUgaW5jb21pbmcgbGlua3MgdG8gdGhlIGN1cnJlbnQgcGFnZSwgcmVnYXJkbGVzcyBvZiB0aGUgdGl0bGUuICovXG5jb25zdCBzdGFydFNhbWUgPSAoKSA9PiB7XG5cdGZvcmNlU2FtZVBhZ2UgPSB0cnVlO1xuXHRzdGFydCgpO1xufTtcblxuLyogU3RhcnQgRGlzYW1Bc3Npc3QuIElmIHRoZSBwYWdlIHRpdGxlIGVuZHMgd2l0aCBcIiAoZGlzYW1iaWd1YXRpb24pXCIsIGRpc2FtYmlndWF0ZSBsaW5rcyB0byB0aGUgcHJpbWFyeSB0b3BpYyBhcnRpY2xlLiBPdGhlcndpc2UsIGRpc2FtYmlndWF0ZSBsaW5rcyB0byB0aGUgY3VycmVudCBwYWdlLiAqL1xuY29uc3Qgc3RhcnRNYWluID0gKCkgPT4ge1xuXHRmb3JjZVNhbWVQYWdlID0gZmFsc2U7XG5cdHN0YXJ0KCk7XG59O1xuXG4vKiBDcmVhdGUgYW5kIHNob3cgdGhlIHVzZXIgaW50ZXJmYWNlLiAqL1xuY29uc3QgY3JlYXRlVUkgPSAoKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHR1aSA9IHtcblx0XHRkaXNwbGF5OiAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1ib3ggZGlzYW1hc3Npc3QtbWFpbmJveCcpLFxuXHRcdGZpbmlzaGVkTWVzc2FnZTogJCgnPGRpdj4nKS50ZXh0KG1lc3NhZ2VzLm5vTW9yZUxpbmtzKS5oaWRlKCksXG5cdFx0cGFnZVRpdGxlTGluZTogJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LXBhZ2V0aXRsZWxpbmUnKSxcblx0XHRwZW5kaW5nRWRpdENvdW50ZXI6ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWVkaXRjb3VudGVyJyksXG5cdFx0Y29udGV4dDogJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWNvbnRleHQnKSxcblx0XHR1bmRvQnV0dG9uOiBjcmVhdGVCdXR0b24obWVzc2FnZXMudW5kbywgdW5kbyksXG5cdFx0b21pdEJ1dHRvbjogY3JlYXRlQnV0dG9uKG1lc3NhZ2VzLm9taXQsIG9taXQpLFxuXHRcdGVuZEJ1dHRvbjogY3JlYXRlQnV0dG9uKG1lc3NhZ2VzLmNsb3NlLCBzYXZlQW5kRW5kKSxcblx0XHRyZWZyZXNoQnV0dG9uOiBjcmVhdGVCdXR0b24obWVzc2FnZXMucmVmcmVzaCwgcmVmcmVzaCksXG5cdFx0dGl0bGVBc1RleHRCdXR0b246IGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy50aXRsZUFzVGV4dCwgY2hvb3NlVGl0bGVGcm9tUHJvbXB0KSxcblx0XHRpbnRlbnRpb25hbExpbmtCdXR0b246IGNhbk1hcmtJbnRlbnRpb25hbExpbmtzXG5cdFx0XHQ/IGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy5pbnRlbnRpb25hbExpbmssIGNob29zZUludGVudGlvbmFsTGluaylcblx0XHRcdDogJCgnPHNwYW4+JyksXG5cdFx0ZGlzYW1OZWVkZWRCdXR0b246IGNmZy5kaXNhbU5lZWRlZFRleHQgPyBjcmVhdGVCdXR0b24obWVzc2FnZXMuZGlzYW1OZWVkZWQsIGNob29zZURpc2FtTmVlZGVkKSA6ICQoJzxzcGFuPicpLFxuXHRcdHJlbW92ZUxpbmtCdXR0b246IGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy5yZW1vdmVMaW5rLCBjaG9vc2VMaW5rUmVtb3ZhbCksXG5cdH07XG5cdGNvbnN0IHRvcCA9ICQoJzxkaXY+Jylcblx0XHQuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LXRvcCcpXG5cdFx0LmFwcGVuZChbdWkucGVuZGluZ0VkaXRDb3VudGVyLCB1aS5maW5pc2hlZE1lc3NhZ2UsIHVpLnBhZ2VUaXRsZUxpbmVdKTtcblx0Y29uc3QgbGVmdEJ1dHRvbnMgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdkaXNhbWFzc2lzdC1sZWZ0YnV0dG9ucycpXG5cdFx0LmFwcGVuZChbXG5cdFx0XHR1aS50aXRsZUFzVGV4dEJ1dHRvbixcblx0XHRcdHVpLnJlbW92ZUxpbmtCdXR0b24sXG5cdFx0XHR1aS5pbnRlbnRpb25hbExpbmtCdXR0b24sXG5cdFx0XHR1aS5kaXNhbU5lZWRlZEJ1dHRvbixcblx0XHRcdHVpLm9taXRCdXR0b24sXG5cdFx0XSk7XG5cdGNvbnN0IHJpZ2h0QnV0dG9ucyA9ICQoJzxkaXY+Jylcblx0XHQuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LXJpZ2h0YnV0dG9ucycpXG5cdFx0LmFwcGVuZChbdWkudW5kb0J1dHRvbiwgdWkucmVmcmVzaEJ1dHRvbiwgdWkuZW5kQnV0dG9uXSk7XG5cdGNvbnN0IGFsbEJ1dHRvbnMgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1hbGxidXR0b25zJykuYXBwZW5kKFtsZWZ0QnV0dG9ucywgcmlnaHRCdXR0b25zXSk7XG5cdHVpLmRpc3BsYXkuYXBwZW5kKFt0b3AsIHVpLmNvbnRleHQsIGFsbEJ1dHRvbnNdKTtcblx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0dG9nZ2xlQWN0aW9uQnV0dG9ucyhmYWxzZSk7XG5cdC8vIEluc2VydCB0aGUgVUkgaW4gdGhlIHBhZ2Vcblx0JGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCcpLmJlZm9yZSh1aS5kaXNwbGF5KTtcblx0dWkuZGlzcGxheS5oaWRlKCkuZmFkZUluKCk7XG59O1xuXG4vKiBJZiB0aGVyZSBhcmUgcGVuZGluZyBjaGFuZ2VzLCBzaG93IGEgY29uZmlybSBkaWFsb2cgYmVmb3JlIGNsb3NpbmcgKi9cbmNvbnN0IGFkZFVubG9hZENvbmZpcm0gPSAoKSA9PiB7XG5cdCQod2luZG93KS5vbignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuXHRcdGlmIChydW5uaW5nICYmIGNoZWNrQWN0dWFsQ2hhbmdlcygpKSB7XG5cdFx0XHRyZXR1cm4gbWVzc2FnZXMucGVuZGluZztcblx0XHR9IGVsc2UgaWYgKGVkaXRDb3VudCAhPT0gMCkge1xuXHRcdFx0cmV0dXJuIG1lc3NhZ2VzLmVkaXRJblByb2dyZXNzO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKiBNYXJrIHRoZSBkaXNhbWJpZ3VhdGlvbiBvcHRpb25zIGFzIHN1Y2ggKi9cbmNvbnN0IG1hcmtEaXNhbU9wdGlvbnMgPSAoKSA9PiB7XG5cdGNvbnN0IG9wdGlvblBhZ2VUaXRsZXMgPSBbXTtcblx0Y29uc3Qgb3B0aW9uTWFya2VycyA9IFtdO1xuXHRnZXREaXNhbU9wdGlvbnMoKS5lYWNoKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRjb25zdCBsaW5rID0gJChlbGVtZW50KTtcblx0XHRjb25zdCB0aXRsZSA9IGV4dHJhY3RQYWdlTmFtZShsaW5rKTtcblx0XHRjb25zdCBvcHRpb25NYXJrZXIgPSAkKCc8YT4nKVxuXHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHQuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LW9wdGlvbm1hcmtlcicpXG5cdFx0XHQudGV4dChtZXNzYWdlcy5vcHRpb25NYXJrZXIpXG5cdFx0XHQub24oJ2NsaWNrJywgKGV2KSA9PiB7XG5cdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGNob29zZVJlcGxhY2VtZW50KHRpdGxlKTtcblx0XHRcdH0pO1xuXHRcdGxpbmsuYWZ0ZXIob3B0aW9uTWFya2VyKTtcblx0XHRvcHRpb25NYXJrZXJzW29wdGlvbk1hcmtlcnMubGVuZ3RoXSA9IG9wdGlvbk1hcmtlcjtcblx0XHRvcHRpb25QYWdlVGl0bGVzW29wdGlvblBhZ2VUaXRsZXMubGVuZ3RoXSA9IHRpdGxlO1xuXHR9KTtcblx0Ly8gTm93IGNoZWNrIHRoZSBkaXNhbWJpZ3VhdGlvbiBvcHRpb25zIGFuZCBkaXNwbGF5IGEgZGlmZmVyZW50IG1lc3NhZ2UgZm9yIHRob3NlIHRoYXQgYXJlXG5cdC8vIGFjdHVhbGx5IHRoZSBzYW1lIGFzIHRoZSB0YXJnZXQgcGFnZSB3aGVyZSB0aGUgbGlua3MgZ28sIGFzIGNob29zaW5nIHRob3NlIG9wdGlvbnMgZG9lc24ndCByZWFsbHlcblx0Ly8gYWNjb21wbGlzaCBhbnl0aGluZyAoZXhjZXB0IGJ5cGFzc2luZyByZWRpcmVjdHMsIHdoaWNoIG1pZ2h0IGJlIHVzZWZ1bCBpbiBzb21lIGNhc2VzKVxuXHRjb25zdCB0YXJnZXRQYWdlID0gZ2V0VGFyZ2V0UGFnZSgpO1xuXHRmZXRjaFJlZGlyZWN0cyhbLi4ub3B0aW9uUGFnZVRpdGxlcywgLi4udGFyZ2V0UGFnZV0pXG5cdFx0LmRvbmUoKHJlZGlyZWN0cykgPT4ge1xuXHRcdFx0Y29uc3QgZW5kVGFyZ2V0UGFnZSA9IHJlc29sdmVSZWRpcmVjdCh0YXJnZXRQYWdlLCByZWRpcmVjdHMpO1xuXHRcdFx0Zm9yIChjb25zdCBbaWksIG9wdGlvblBhZ2VUaXRsZV0gb2Ygb3B0aW9uUGFnZVRpdGxlcy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0Y29uc3QgZW5kT3B0aW9uVGl0bGUgPSByZXNvbHZlUmVkaXJlY3Qob3B0aW9uUGFnZVRpdGxlLCByZWRpcmVjdHMpO1xuXHRcdFx0XHRpZiAoaXNTYW1lUGFnZShvcHRpb25QYWdlVGl0bGUsIHRhcmdldFBhZ2UpKSB7XG5cdFx0XHRcdFx0b3B0aW9uTWFya2Vyc1tpaV0udGV4dChtZXNzYWdlcy50YXJnZXRPcHRpb25NYXJrZXIpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1jdXJyb3B0aW9ubWFya2VyJyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNTYW1lUGFnZShlbmRPcHRpb25UaXRsZSwgZW5kVGFyZ2V0UGFnZSkpIHtcblx0XHRcdFx0XHRvcHRpb25NYXJrZXJzW2lpXS50ZXh0KG1lc3NhZ2VzLnJlZGlyZWN0T3B0aW9uTWFya2VyKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtY3Vycm9wdGlvbm1hcmtlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuZmFpbChlcnJvcik7XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIGludGVudGlvbmFsIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzIGNhbiBiZSBleHBsaWNpdGx5IG1hcmtlZC8qICogYXMgc3VjaCBpbiB0aGlzIHdpa2kuIElmIHNvLCBlbnN1cmUgdGhhdCBhIFwiRm9vIChkaXNhbWJpZ3VhdGlvbilcIiBwYWdlIGV4aXN0cy4vKiAqIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZSAqL1xuY29uc3QgZW5zdXJlREFCRXhpc3RzID0gKCkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcblx0Ly8gVGhhdCBjb25jZXB0IGRvZXNuJ3QgZXhpc3QgaW4gdGhpcyB3aWtpLlxuXHRpZiAoIWNmZy5pbnRlbnRpb25hbExpbmtPcHRpb24pIHtcblx0XHRkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcblx0XHQvLyBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgZXhpc3RzOiBpdCdzIHRoZSBjdXJyZW50IHBhZ2UuXG5cdH0gZWxzZSBpZiAobmV3IFJlZ0V4cChjZmcuZGlzYW1SZWdFeHApLmV4ZWModGl0bGUpKSB7XG5cdFx0ZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBkaXNhbVRpdGxlID0gY2ZnLmRpc2FtRm9ybWF0LnJlcGxhY2UoJyQxJywgdGl0bGUpO1xuXHRcdGxvYWRQYWdlKGRpc2FtVGl0bGUpXG5cdFx0XHQuZG9uZSgocGFnZSkgPT4ge1xuXHRcdFx0XHQvLyBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgZG9lc24ndCBleGlzdC5cblx0XHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRcdC8vIFdlIHRyeSB0byBjcmVhdGUgaXRcblx0XHRcdFx0XHRwYWdlLmNvbnRlbnQgPSBjZmcucmVkaXJlY3RUb0Rpc2FtLnJlcGxhY2UoJyQxJywgdGl0bGUpO1xuXHRcdFx0XHRcdGNvbnN0IHN1bW1hcnkgPSBtZXNzYWdlcy5yZWRpcmVjdFN1bW1hcnkucmVwbGFjZSgnJDEnLCB0aXRsZSk7XG5cdFx0XHRcdFx0c2F2ZVBhZ2UoZGlzYW1UaXRsZSwgcGFnZSwgc3VtbWFyeSwgZmFsc2UsIHRydWUpXG5cdFx0XHRcdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGVycm9yKGRlc2NyaXB0aW9uKTtcblx0XHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShmYWxzZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQvLyBJdCBkb2VzIGV4aXN0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5mYWlsKChkZXNjcmlwdGlvbikgPT4ge1xuXHRcdFx0XHRlcnJvcihkZXNjcmlwdGlvbik7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoZmFsc2UpO1xuXHRcdFx0fSk7XG5cdH1cblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIENoZWNrIHdoZXRoZXIgdGhlIGVkaXQgY29vbGRvd24gYXBwbGllcyBhbmQgc2V0cyBlZGl0TGltaXQgYWNjb3JkaW5nbHkuLyogKiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UgKi9cbmNvbnN0IGNoZWNrRWRpdExpbWl0ID0gKCkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGlmIChjZmcuZWRpdENvb2xkb3duIDw9IDApIHtcblx0XHRlZGl0TGltaXQgPSBmYWxzZTtcblx0XHRkZWZlcnJlZC5yZXNvbHZlKCk7XG5cdH0gZWxzZSB7XG5cdFx0ZmV0Y2hSaWdodHMoKVxuXHRcdFx0LmRvbmUoKHJpZ2h0cykgPT4ge1xuXHRcdFx0XHRlZGl0TGltaXQgPSAhcmlnaHRzLmluY2x1ZGVzKCdib3QnKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0ZXJyb3IoZGVzY3JpcHRpb24pO1xuXHRcdFx0XHRlZGl0TGltaXQgPSB0cnVlO1xuXHRcdFx0fSlcblx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0XHR9KTtcblx0fVxuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogRmluZCBhbmQgYXNrIHRoZSB1c2VyIHRvIGZpeCBhbGwgdGhlIGluY29taW5nIGxpbmtzIHRvIHRoZSBkaXNhbWJpZ3VhdGlvbiAoXCJ0YXJnZXRcIikvKiAqIHBhZ2UgZnJvbSBhIHNpbmdsZSBcIm9yaWdpblwiIHBhZ2UgKi9cbmNvbnN0IGRvUGFnZSA9ICgpID0+IHtcblx0aWYgKHBhZ2VDaGFuZ2VzLmxlbmd0aCA+IGNmZy5oaXN0b3J5U2l6ZSkge1xuXHRcdGFwcGx5Q2hhbmdlKHBhZ2VDaGFuZ2VzLnNoaWZ0KCkpO1xuXHR9XG5cdGlmIChsaW5rcy5sZW5ndGgpIHtcblx0XHRjdXJyZW50UGFnZVRpdGxlID0gbGlua3Muc2hpZnQoKTtcblx0XHRkaXNwbGF5ZWRQYWdlc1tjdXJyZW50UGFnZVRpdGxlXSA9IHRydWU7XG5cdFx0dG9nZ2xlQWN0aW9uQnV0dG9ucyhmYWxzZSk7XG5cdFx0bG9hZFBhZ2UoY3VycmVudFBhZ2VUaXRsZSlcblx0XHRcdC5kb25lKChkYXRhKSA9PiB7XG5cdFx0XHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycyA9IGRhdGE7XG5cdFx0XHRcdGN1cnJlbnRMaW5rID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRkb0xpbmsoKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbChlcnJvcik7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgdGFyZ2V0UGFnZSA9IGdldFRhcmdldFBhZ2UoKTtcblx0XHRnZXRCYWNrbGlua3ModGFyZ2V0UGFnZSlcblx0XHRcdC5kb25lKChiYWNrbGlua3MsIHBhZ2VUaXRsZXMpID0+IHtcblx0XHRcdFx0Y29uc3QgcGVuZGluZyA9IHt9O1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVsIG9mIHBlbmRpbmdTYXZlcykge1xuXHRcdFx0XHRcdHBlbmRpbmdbZWxbMF1dID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwb3NzaWJsZUJhY2tsaW5rRGVzdGluYXRpb25zID0gcGFnZVRpdGxlcy5maWx0ZXIoKHQpID0+IHtcblx0XHRcdFx0XHRpZiAodCA9PT0gdGFyZ2V0UGFnZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiByZW1vdmVEaXNhbSh0KSAhPT0gdGFyZ2V0UGFnZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIE9ubHkgaW5jb21pbmcgbGlua3MgZnJvbSBwYWdlcyB3ZSBoYXZlbid0IHNlZW4geWV0IGFuZCB3ZSBhcmVuJ3QgY3VycmVudGx5XG5cdFx0XHRcdC8vIHNhdmluZyAoZGlzcGxheWVkUGFnZXMgaXMgcmVzZXQgd2hlbiB0aGUgdG9vbCBpcyBjbG9zZWQgYW5kIG9wZW5lZCBhZ2Fpbixcblx0XHRcdFx0Ly8gd2hpbGUgdGhlIGxpc3Qgb2YgcGVuZGluZyBjaGFuZ2VzIGlzbid0OyBpZiB0aGUgZWRpdCBjb29sZG93biBpcyBkaXNhYmxlZCxcblx0XHRcdFx0Ly8gaXQgd2lsbCBiZSBlbXB0eSlcblx0XHRcdFx0bGlua3MgPSBiYWNrbGlua3MuZmlsdGVyKChlbCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAhZGlzcGxheWVkUGFnZXNbZWxdICYmICFwZW5kaW5nW2VsXTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChsaW5rcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRkb1BhZ2UoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR1cGRhdGVDb250ZXh0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuZmFpbChlcnJvcik7XG5cdH1cbn07XG5cbi8qIEZpbmQgYW5kIGFzayB0aGUgdXNlciB0byBmaXggYSBzaW5nbGUgaW5jb21pbmcgbGluayB0byB0aGUgZGlzYW1iaWd1YXRpb24gKFwidGFyZ2V0XCIpLyogKiBwYWdlICovXG5jb25zdCBkb0xpbmsgPSAoKSA9PiB7XG5cdGN1cnJlbnRMaW5rID0gZXh0cmFjdExpbmtUb1BhZ2UoXG5cdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQsXG5cdFx0cG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucyxcblx0XHRjdXJyZW50TGluayA/IGN1cnJlbnRMaW5rLmVuZCA6IDBcblx0KTtcblx0aWYgKGN1cnJlbnRMaW5rKSB7XG5cdFx0dXBkYXRlQ29udGV4dCgpO1xuXHR9IGVsc2Uge1xuXHRcdGRvUGFnZSgpO1xuXHR9XG59O1xuXG4vKiBSZXBsYWNlIHRoZSB0YXJnZXQgb2YgYSBsaW5rIHdpdGggYSBkaWZmZXJlbnQgb25lLyogKiBwYWdlVGl0bGU6IE5ldyBsaW5rIHRhcmdldC8qICogZXh0cmE6IEFkZGl0aW9uYWwgdGV4dCBhZnRlciB0aGUgbGluayAob3B0aW9uYWwpLyogKiBzdW1tYXJ5OiBDaGFuZ2Ugc3VtbWFyeSAob3B0aW9uYWwpICovXG5jb25zdCBjaG9vc2VSZXBsYWNlbWVudCA9IChwYWdlVGl0bGUsIGV4dHJhLCBzdW1tYXJ5KSA9PiB7XG5cdGlmIChjaG9vc2luZykge1xuXHRcdGNob29zaW5nID0gZmFsc2U7XG5cdFx0aWYgKCFzdW1tYXJ5KSB7XG5cdFx0XHRzdW1tYXJ5ID0gcGFnZVRpdGxlID8gbWVzc2FnZXMuc3VtbWFyeUNoYW5nZWQucmVwbGFjZSgnJDEnLCBwYWdlVGl0bGUpIDogbWVzc2FnZXMuc3VtbWFyeU9taXR0ZWQ7XG5cdFx0fVxuXHRcdGFkZENoYW5nZShjdXJyZW50UGFnZVRpdGxlLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluaywgc3VtbWFyeSk7XG5cdFx0aWYgKHBhZ2VUaXRsZSAmJiAocGFnZVRpdGxlICE9PSBnZXRUYXJnZXRQYWdlKCkgfHwgZXh0cmEpKSB7XG5cdFx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCA9IHJlcGxhY2VMaW5rKFxuXHRcdFx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCxcblx0XHRcdFx0cGFnZVRpdGxlLFxuXHRcdFx0XHRjdXJyZW50TGluayxcblx0XHRcdFx0ZXh0cmEgfHwgJydcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGRvTGluaygpO1xuXHR9XG59O1xuXG4vKiBSZXBsYWNlIHRoZSBsaW5rIHdpdGggYW4gZXhwbGljaXQgbGluayB0byB0aGUgZGlzYW1iaWd1YXRpb24gcGFnZSAqL1xuY29uc3QgY2hvb3NlSW50ZW50aW9uYWxMaW5rID0gKCkgPT4ge1xuXHRjb25zdCBkaXNhbVRpdGxlID0gY2ZnLmRpc2FtRm9ybWF0LnJlcGxhY2UoJyQxJywgZ2V0VGFyZ2V0UGFnZSgpKTtcblx0Y2hvb3NlUmVwbGFjZW1lbnQoZGlzYW1UaXRsZSwgJycsIG1lc3NhZ2VzLnN1bW1hcnlJbnRlbnRpb25hbCk7XG59O1xuXG4vKiBQcm9tcHQgZm9yIGFuIGFsdGVybmF0aXZlIGxpbmsgdGFyZ2V0IGFuZCB1c2UgaXQgYXMgYSByZXBsYWNlbWVudCAqL1xuY29uc3QgY2hvb3NlVGl0bGVGcm9tUHJvbXB0ID0gKCkgPT4ge1xuXHRjb25zdCB0aXRsZSA9IHByb21wdChtZXNzYWdlcy50aXRsZUFzVGV4dFByb21wdCk7XG5cdGlmICh0aXRsZSAhPT0gbnVsbCkge1xuXHRcdGNob29zZVJlcGxhY2VtZW50KHRpdGxlKTtcblx0fVxufTtcblxuLyogUmVtb3ZlIHRoZSBjdXJyZW50IGxpbmssIGxlYXZpbmcgdGhlIHRleHQgdW5jaGFuZ2VkICovXG5jb25zdCBjaG9vc2VMaW5rUmVtb3ZhbCA9ICgpID0+IHtcblx0aWYgKGNob29zaW5nKSB7XG5cdFx0Y29uc3Qgc3VtbWFyeSA9IG1lc3NhZ2VzLnN1bW1hcnlSZW1vdmVkO1xuXHRcdGFkZENoYW5nZShjdXJyZW50UGFnZVRpdGxlLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluaywgc3VtbWFyeSk7XG5cdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQgPSByZW1vdmVMaW5rKGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluayk7XG5cdFx0ZG9MaW5rKCk7XG5cdH1cbn07XG5cbi8qIEFkZCBhIFwiZGlzYW1iaWd1YXRpb24gbmVlZGVkXCIgdGVtcGxhdGUgYWZ0ZXIgdGhlIGxpbmsgKi9cbmNvbnN0IGNob29zZURpc2FtTmVlZGVkID0gKCkgPT4ge1xuXHRjaG9vc2VSZXBsYWNlbWVudChjdXJyZW50TGluay50aXRsZSwgY2ZnLmRpc2FtTmVlZGVkVGV4dCwgbWVzc2FnZXMuc3VtbWFyeUhlbHBOZWVkZWQpO1xufTtcblxuLyogVW5kbyB0aGUgbGFzdCBjaGFuZ2UgKi9cbmNvbnN0IHVuZG8gPSAoKSA9PiB7XG5cdGlmIChwYWdlQ2hhbmdlcy5sZW5ndGgpIHtcblx0XHRjb25zdCBsYXN0UGFnZSA9IHBhZ2VDaGFuZ2VzLmF0KC0xKTtcblx0XHRpZiAoY3VycmVudFBhZ2VUaXRsZSAhPT0gbGFzdFBhZ2UudGl0bGUpIHtcblx0XHRcdGxpbmtzLnVuc2hpZnQoY3VycmVudFBhZ2VUaXRsZSk7XG5cdFx0XHRjdXJyZW50UGFnZVRpdGxlID0gbGFzdFBhZ2UudGl0bGU7XG5cdFx0fVxuXHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycyA9IGxhc3RQYWdlLnBhZ2U7XG5cdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQgPSBsYXN0UGFnZS5jb250ZW50QmVmb3JlLnBvcCgpO1xuXHRcdGN1cnJlbnRMaW5rID0gbGFzdFBhZ2UubGlua3MucG9wKCk7XG5cdFx0bGFzdFBhZ2Uuc3VtbWFyeS5wb3AoKTtcblx0XHRpZiAoIWxhc3RQYWdlLmNvbnRlbnRCZWZvcmUubGVuZ3RoKSB7XG5cdFx0XHRwYWdlQ2hhbmdlcy5wb3AoKTtcblx0XHR9XG5cdFx0dXBkYXRlQ29udGV4dCgpO1xuXHR9XG59O1xuXG4vKiBPbWl0IHRoZSBjdXJyZW50IGxpbmsgd2l0aG91dCBtYWtpbmcgYSBjaGFuZ2UgKi9cbmNvbnN0IG9taXQgPSAoKSA9PiB7XG5cdGNob29zZVJlcGxhY2VtZW50KCk7XG59O1xuXG4vKiBTYXZlIGFsbCB0aGUgcGVuZGluZyBjaGFuZ2VzIGFuZCByZXN0YXJ0IHRoZSB0b29sLiAqL1xuY29uc3QgcmVmcmVzaCA9ICgpID0+IHtcblx0c2F2ZUFuZEVuZCgpO1xuXHRzdGFydCgpO1xufTtcblxuLyogRW5hYmxlIG9yIGRpc2FibGUgdGhlIGJ1dHRvbnMgdGhhdCBjYW4gcGVyZm9ybSBhY3Rpb25zIG9uIGEgcGFnZSBvciBjaGFuZ2UgdGhlIGN1cnJlbnQgbGluay4vKiAqIGVuYWJsZWQ6IFdoZXRoZXIgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJ1dHRvbnMgKi9cbmNvbnN0IHRvZ2dsZUFjdGlvbkJ1dHRvbnMgPSAoZW5hYmxlZCkgPT4ge1xuXHRjb25zdCBhZmZlY3RlZEJ1dHRvbnMgPSBbXG5cdFx0dWkub21pdEJ1dHRvbixcblx0XHR1aS50aXRsZUFzVGV4dEJ1dHRvbixcblx0XHR1aS5yZW1vdmVMaW5rQnV0dG9uLFxuXHRcdHVpLmludGVudGlvbmFsTGlua0J1dHRvbixcblx0XHR1aS5kaXNhbU5lZWRlZEJ1dHRvbixcblx0XHR1aS51bmRvQnV0dG9uLFxuXHRdO1xuXHRmb3IgKGNvbnN0IGJ1dHRvbiBvZiBhZmZlY3RlZEJ1dHRvbnMpIHtcblx0XHRidXR0b24ucHJvcCgnZGlzYWJsZWQnLCAhZW5hYmxlZCk7XG5cdH1cbn07XG5cbi8qIFNob3cgb3IgaGlkZSB0aGUgJ25vIG1vcmUgbGlua3MnIG1lc3NhZ2UvKiAqIHNob3c6IFdoZXRoZXIgdG8gc2hvdyBvciBoaWRlIHRoZSBtZXNzYWdlICovXG5jb25zdCB0b2dnbGVGaW5pc2hlZE1lc3NhZ2UgPSAoc2hvdykgPT4ge1xuXHR0b2dnbGVBY3Rpb25CdXR0b25zKCFzaG93KTtcblx0dWkudW5kb0J1dHRvbi5wcm9wKCdkaXNhYmxlZCcsICFwYWdlQ2hhbmdlcy5sZW5ndGgpO1xuXHR1aS5maW5pc2hlZE1lc3NhZ2UudG9nZ2xlKHNob3cpO1xuXHR1aS5wYWdlVGl0bGVMaW5lLnRvZ2dsZSghc2hvdyk7XG5cdHVpLmNvbnRleHQudG9nZ2xlKCFzaG93KTtcbn07XG5cbmNvbnN0IHRvZ2dsZVBlbmRpbmdFZGl0Qm94ID0gKHNob3cpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGlmICghcGVuZGluZ0VkaXRCb3gpIHtcblx0XHRwZW5kaW5nRWRpdEJveCA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWJveCBkaXNhbWFzc2lzdC1wZW5kaW5nZWRpdGJveCcpO1xuXHRcdHBlbmRpbmdFZGl0Qm94VGV4dCA9ICQoJzxkaXY+Jyk7XG5cdFx0cGVuZGluZ0VkaXRCb3guYXBwZW5kKHBlbmRpbmdFZGl0Qm94VGV4dCkuaGlkZSgpO1xuXHRcdGlmIChlZGl0TGltaXQpIHtcblx0XHRcdHBlbmRpbmdFZGl0Qm94LmFwcGVuZCgkKCc8ZGl2PicpLnRleHQobWVzc2FnZXMucGVuZGluZ0VkaXRCb3hMaW1pdGVkKS5hZGRDbGFzcygnZGlzYW1hc3Npc3Qtc3VidGl0bGUnKSk7XG5cdFx0fVxuXHRcdCRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKS5iZWZvcmUocGVuZGluZ0VkaXRCb3gpO1xuXHRcdHVwZGF0ZUVkaXRDb3VudGVyKCk7XG5cdH1cblx0aWYgKHNob3cpIHtcblx0XHRwZW5kaW5nRWRpdEJveC5mYWRlSW4oKTtcblx0fSBlbHNlIHtcblx0XHRwZW5kaW5nRWRpdEJveC5mYWRlT3V0KCk7XG5cdH1cbn07XG5cbmNvbnN0IG5vdGlmeUNvbXBsZXRpb24gPSAoKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRjb25zdCBvbGRUaXRsZSA9IGRvY3VtZW50LnRpdGxlO1xuXHRkb2N1bWVudC50aXRsZSA9IG1lc3NhZ2VzLm5vdGlmeUNoYXJhY3RlciArIGRvY3VtZW50LnRpdGxlO1xuXHQkYm9keS5vbmUoJ21vdXNlbW92ZScsICgpID0+IHtcblx0XHRkb2N1bWVudC50aXRsZSA9IG9sZFRpdGxlO1xuXHR9KTtcbn07XG5cbi8qIFVwZGF0ZSB0aGUgZGlzcGxheWVkIGluZm9ybWF0aW9uIHRvIG1hdGNoIHRoZSBjdXJyZW50IGxpbmsvKiAqIG9yIGxhY2sgdGhlcmVvZiAqL1xuY29uc3QgdXBkYXRlQ29udGV4dCA9ICgpID0+IHtcblx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0aWYgKGN1cnJlbnRMaW5rKSB7XG5cdFx0dWkucGFnZVRpdGxlTGluZS5odG1sKFxuXHRcdFx0bWVzc2FnZXMucGFnZVRpdGxlTGluZVxuXHRcdFx0XHQucmVwbGFjZShcblx0XHRcdFx0XHQnJDEnLFxuXHRcdFx0XHRcdG13LnV0aWwuZ2V0VXJsKGN1cnJlbnRQYWdlVGl0bGUsIHtcblx0XHRcdFx0XHRcdHJlZGlyZWN0OiAnbm8nLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdFx0LnJlcGxhY2UoJyQyJywgbXcuaHRtbC5lc2NhcGUoY3VycmVudFBhZ2VUaXRsZSkpXG5cdFx0KTtcblx0XHRjb25zdCBjb250ZXh0ID0gZXh0cmFjdENvbnRleHQoY3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQsIGN1cnJlbnRMaW5rKTtcblx0XHR1aS5jb250ZXh0XG5cdFx0XHQuZW1wdHkoKVxuXHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS50ZXh0KGNvbnRleHRbMF0pKVxuXHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS50ZXh0KGNvbnRleHRbMV0pLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1pbmNsaW5rJykpXG5cdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQoY29udGV4dFsyXSkpO1xuXHRcdGNvbnN0IG51bUxpbmVzID0gTWF0aC5jZWlsKHVpLmNvbnRleHQuaGVpZ2h0KCkgLyBOdW1iZXIucGFyc2VGbG9hdCh1aS5jb250ZXh0LmNzcygnbGluZS1oZWlnaHQnKSkpO1xuXHRcdGlmIChudW1MaW5lcyA8IGNmZy5udW1Db250ZXh0TGluZXMpIHtcblx0XHRcdC8vIEFkZCBjZmcubnVtQ29udGV4dExpbmVzIC0gbnVtTGluZXMgKyAxIGxpbmUgYnJlYWtzLCBzbyB0aGF0IHRoZSB0b3RhbCBudW1iZXJcblx0XHRcdC8vIG9mIGxpbmVzIGlzIGNmZy5udW1Db250ZXh0TGluZXNcblx0XHRcdHVpLmNvbnRleHQuYXBwZW5kKFxuXHRcdFx0XHRBcnJheS5mcm9tKHtcblx0XHRcdFx0XHRsZW5ndGg6IGNmZy5udW1Db250ZXh0TGluZXMgLSBudW1MaW5lcyArIDIsXG5cdFx0XHRcdH0pLmpvaW4oJzxicj4nKVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0dG9nZ2xlRmluaXNoZWRNZXNzYWdlKGZhbHNlKTtcblx0XHR1aS51bmRvQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgIXBhZ2VDaGFuZ2VzLmxlbmd0aCk7XG5cdFx0dWkucmVtb3ZlTGlua0J1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5yZWRpcmVjdCk7XG5cdFx0dWkuaW50ZW50aW9uYWxMaW5rQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLnJlZGlyZWN0KTtcblx0XHR1aS5kaXNhbU5lZWRlZEJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5yZWRpcmVjdCB8fCBjdXJyZW50TGluay5oYXNEaXNhbVRlbXBsYXRlKTtcblx0XHRjaG9vc2luZyA9IHRydWU7XG5cdH0gZWxzZSB7XG5cdFx0dG9nZ2xlRmluaXNoZWRNZXNzYWdlKHRydWUpO1xuXHR9XG59O1xuXG4vKiBVcGRhdGUgdGhlIGNvdW50IG9mIHBlbmRpbmcgY2hhbmdlcyAqL1xuY29uc3QgdXBkYXRlRWRpdENvdW50ZXIgPSAoKSA9PiB7XG5cdGlmICh1aS5wZW5kaW5nRWRpdENvdW50ZXIpIHtcblx0XHR1aS5wZW5kaW5nRWRpdENvdW50ZXIudGV4dChcblx0XHRcdG1lc3NhZ2VzLnBlbmRpbmdFZGl0Q291bnRlci5yZXBsYWNlKCckMScsIGVkaXRDb3VudCkucmVwbGFjZSgnJDInLCBjb3VudEFjdHVhbGx5Q2hhbmdlZEZ1bGx5Q2hlY2tlZFBhZ2VzKCkpXG5cdFx0KTtcblx0fVxuXHRpZiAocGVuZGluZ0VkaXRCb3gpIHtcblx0XHRpZiAoZWRpdENvdW50ID09PSAwICYmICFydW5uaW5nKSB7XG5cdFx0XHR0b2dnbGVQZW5kaW5nRWRpdEJveChmYWxzZSk7XG5cdFx0XHRub3RpZnlDb21wbGV0aW9uKCk7XG5cdFx0fVxuXHRcdGxldCB0ZXh0Q29udGVudCA9IGVkaXRDb3VudDtcblx0XHRpZiAoZWRpdExpbWl0KSB7XG5cdFx0XHR0ZXh0Q29udGVudCA9IG1lc3NhZ2VzLnBlbmRpbmdFZGl0Qm94VGltZUVzdGltYXRpb25cblx0XHRcdFx0LnJlcGxhY2UoJyQxJywgZWRpdENvdW50KVxuXHRcdFx0XHQucmVwbGFjZSgnJDInLCBzZWNvbmRzVG9ISE1NU1MoY2ZnLmVkaXRDb29sZG93biAqIGVkaXRDb3VudCkpO1xuXHRcdH1cblx0XHRwZW5kaW5nRWRpdEJveFRleHQudGV4dChtZXNzYWdlcy5wZW5kaW5nRWRpdEJveC5yZXBsYWNlKCckMScsIHRleHRDb250ZW50KSk7XG5cdH1cbn07XG5cbi8qIEFwcGx5IHRoZSBjaGFuZ2VzIG1hZGUgdG8gYW4gXCJvcmlnaW5cIiBwYWdlLyogKiBwYWdlQ2hhbmdlOiBDaGFuZ2UgdGhhdCB3aWxsIGJlIHNhdmVkICovXG5jb25zdCBhcHBseUNoYW5nZSA9IChwYWdlQ2hhbmdlKSA9PiB7XG5cdGlmIChwYWdlQ2hhbmdlLnBhZ2UuY29udGVudCAhPT0gcGFnZUNoYW5nZS5jb250ZW50QmVmb3JlWzBdKSB7XG5cdFx0ZWRpdENvdW50Kys7XG5cdFx0Y29uc3QgY2hhbmdlU3VtbWFyaWVzID0gcGFnZUNoYW5nZS5zdW1tYXJ5LmpvaW4obWVzc2FnZXMuc3VtbWFyeVNlcGFyYXRvcik7XG5cdFx0Y29uc3Qgc3VtbWFyeSA9IG1lc3NhZ2VzLnN1bW1hcnkucmVwbGFjZSgnJDEnLCBnZXRUYXJnZXRQYWdlKCkpLnJlcGxhY2UoJyQyJywgY2hhbmdlU3VtbWFyaWVzKTtcblx0XHRjb25zdCBzYXZlID0gZWRpdExpbWl0ID8gc2F2ZVdpdGhDb29sZG93biA6IHNhdmVQYWdlO1xuXHRcdHNhdmUocGFnZUNoYW5nZS50aXRsZSwgcGFnZUNoYW5nZS5wYWdlLCBzdW1tYXJ5LCB0cnVlLCB0cnVlKVxuXHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdGlmIChlZGl0Q291bnQgPiAwKSB7XG5cdFx0XHRcdFx0ZWRpdENvdW50LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbChlcnJvcik7XG5cdFx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0fVxufTtcblxuLyogU2F2ZSBhbGwgdGhlIHBlbmRpbmcgY2hhbmdlcyAqL1xuY29uc3QgYXBwbHlBbGxDaGFuZ2VzID0gKCkgPT4ge1xuXHRmb3IgKGNvbnN0IHBhZ2VDaGFuZ2Ugb2YgcGFnZUNoYW5nZXMpIHtcblx0XHRhcHBseUNoYW5nZShwYWdlQ2hhbmdlKTtcblx0fVxuXHRwYWdlQ2hhbmdlcyA9IFtdO1xufTtcblxuLyogUmVjb3JkIGEgbmV3IHBlbmRpbmcgY2hhbmdlLyogKiBwYWdlVGl0bGU6IFRpdGxlIG9mIHRoZSBwYWdlLyogKiBwYWdlOiBDb250ZW50IG9mIHRoZSBwYWdlLyogKiBvbGRDb250ZW50OiBDb250ZW50IG9mIHRoZSBwYWdlIGJlZm9yZSB0aGUgY2hhbmdlLyogKiBsaW5rOiBMaW5rIHRoYXQgaGFzIGJlZW4gY2hhbmdlZC8qICogc3VtbWFyeTogQ2hhbmdlIHN1bW1hcnkgKi9cbmNvbnN0IGFkZENoYW5nZSA9IChwYWdlVGl0bGUsIHBhZ2UsIG9sZENvbnRlbnQsIGxpbmssIHN1bW1hcnkpID0+IHtcblx0aWYgKCFwYWdlQ2hhbmdlcy5sZW5ndGggfHwgcGFnZUNoYW5nZXMuYXQoLTEpLnRpdGxlICE9PSBwYWdlVGl0bGUpIHtcblx0XHRwYWdlQ2hhbmdlc1twYWdlQ2hhbmdlcy5sZW5ndGhdID0ge1xuXHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdHBhZ2UsXG5cdFx0XHRjb250ZW50QmVmb3JlOiBbXSxcblx0XHRcdGxpbmtzOiBbXSxcblx0XHRcdHN1bW1hcnk6IFtdLFxuXHRcdH07XG5cdH1cblx0Y29uc3QgbGFzdFBhZ2VDaGFuZ2UgPSBwYWdlQ2hhbmdlcy5hdCgtMSk7XG5cdGxhc3RQYWdlQ2hhbmdlLmNvbnRlbnRCZWZvcmVbbGFzdFBhZ2VDaGFuZ2UuY29udGVudEJlZm9yZS5sZW5ndGhdID0gb2xkQ29udGVudDtcblx0bGFzdFBhZ2VDaGFuZ2UubGlua3NbbGFzdFBhZ2VDaGFuZ2UubGlua3MubGVuZ3RoXSA9IGxpbms7XG5cdGxhc3RQYWdlQ2hhbmdlLnN1bW1hcnlbbGFzdFBhZ2VDaGFuZ2Uuc3VtbWFyeS5sZW5ndGhdID0gc3VtbWFyeTtcbn07XG5cbi8qIENoZWNrIHdoZXRoZXIgYWN0dWFsIGNoYW5nZXMgYXJlIHN0b3JlZCBpbiB0aGUgaGlzdG9yeSBhcnJheSAqL1xuY29uc3QgY2hlY2tBY3R1YWxDaGFuZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4gY291bnRBY3R1YWxDaGFuZ2VzKCkgIT09IDA7XG59O1xuXG4vKiBSZXR1cm4gdGhlIG51bWJlciBvZiBlbnRyaWVzIGluIHRoZSBoaXN0b3J5IGFycmF5IHRoYXQgcmVwcmVzZW50IGFjdHVhbCBjaGFuZ2VzICovXG5jb25zdCBjb3VudEFjdHVhbENoYW5nZXMgPSAoKSA9PiB7XG5cdGxldCBjaGFuZ2VDb3VudCA9IDA7XG5cdGZvciAoY29uc3QgcGFnZUNoYW5nZSBvZiBwYWdlQ2hhbmdlcykge1xuXHRcdGlmIChwYWdlQ2hhbmdlLnBhZ2UuY29udGVudCAhPT0gcGFnZUNoYW5nZS5jb250ZW50QmVmb3JlWzBdKSB7XG5cdFx0XHRjaGFuZ2VDb3VudCsrO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2hhbmdlQ291bnQ7XG59O1xuXG4vKiBSZXR1cm4gdGhlIG51bWJlciBvZiBjaGFuZ2VkIHBhZ2VzIGluIHRoZSBoaXN0b3J5IGFycmF5LCBpZ25vcmluZyB0aGUgbGFzdCBlbnRyeS8qICogaWYgd2UgYXJlbid0IGRvbmUgd2l0aCB0aGF0IHBhZ2UgeWV0ICovXG5jb25zdCBjb3VudEFjdHVhbGx5Q2hhbmdlZEZ1bGx5Q2hlY2tlZFBhZ2VzID0gKCkgPT4ge1xuXHRsZXQgY2hhbmdlQ291bnQgPSBjb3VudEFjdHVhbENoYW5nZXMoKTtcblx0aWYgKHBhZ2VDaGFuZ2VzLmxlbmd0aCkge1xuXHRcdGNvbnN0IGxhc3RDaGFuZ2UgPSBwYWdlQ2hhbmdlcy5hdCgtMSk7XG5cdFx0aWYgKFxuXHRcdFx0bGFzdENoYW5nZS50aXRsZSA9PT0gY3VycmVudFBhZ2VUaXRsZSAmJlxuXHRcdFx0Y3VycmVudExpbmsgJiZcblx0XHRcdGxhc3RDaGFuZ2UucGFnZS5jb250ZW50ICE9PSBsYXN0Q2hhbmdlLmNvbnRlbnRCZWZvcmVbMF1cblx0XHQpIHtcblx0XHRcdGNoYW5nZUNvdW50LS07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBjaGFuZ2VDb3VudDtcbn07XG5cbi8qIEZpbmQgdGhlIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIG9wdGlvbnMgaW4gYSBkaXNhbWJpZ3VhdGlvbiBwYWdlICovXG5jb25zdCBnZXREaXNhbU9wdGlvbnMgPSAoKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRyZXR1cm4gJGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCBhJykuZmlsdGVyKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRyZXR1cm4gISFleHRyYWN0UGFnZU5hbWUoJChlbGVtZW50KSk7XG5cdH0pO1xufTtcblxuLyogU2F2ZSBhbGwgdGhlIHBlbmRpbmcgY2hhbmdlcyBhbmQgY2xvc2UgdGhlIHRvb2wgKi9cbmNvbnN0IHNhdmVBbmRFbmQgPSAoKSA9PiB7XG5cdGFwcGx5QWxsQ2hhbmdlcygpO1xuXHRlbmQoKTtcbn07XG5cbi8qIENsb3NlIHRoZSB0b29sICovXG5jb25zdCBlbmQgPSAoKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRjb25zdCBjdXJyZW50VG9vbFVJID0gdWkuZGlzcGxheTtcblx0Y2hvb3NpbmcgPSBmYWxzZTtcblx0cnVubmluZyA9IGZhbHNlO1xuXHRzdGFydExpbmsucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdCRib2R5LmZpbmQoJy5kaXNhbWFzc2lzdC1vcHRpb25tYXJrZXInKS5yZW1vdmUoKTtcblx0Y3VycmVudFRvb2xVSS5mYWRlT3V0KHtcblx0XHRjb21wbGV0ZSgpIHtcblx0XHRcdGN1cnJlbnRUb29sVUkucmVtb3ZlKCk7XG5cdFx0XHRpZiAoZWRpdENvdW50KSB7XG5cdFx0XHRcdHRvZ2dsZVBlbmRpbmdFZGl0Qm94KHRydWUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH0pO1xufTtcblxuLyogRGlzcGxheSBhbiBlcnJvciBtZXNzYWdlICovXG5jb25zdCBlcnJvciA9IChlcnJvckRlc2NyaXB0aW9uKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRjb25zdCBlcnJvckJveCA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWJveCBkaXNhbWFzc2lzdC1lcnJvcmJveCcpO1xuXHRlcnJvckJveC50ZXh0KG1lc3NhZ2VzLmVycm9yLnJlcGxhY2UoJyQxJywgZXJyb3JEZXNjcmlwdGlvbikpO1xuXHRlcnJvckJveC5hcHBlbmQoXG5cdFx0Y3JlYXRlQnV0dG9uKG1lc3NhZ2VzLmRpc21pc3NFcnJvciwgKCkgPT4ge1xuXHRcdFx0ZXJyb3JCb3guZmFkZU91dCgpO1xuXHRcdH0pLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1lcnJvcmJ1dHRvbicpXG5cdCk7XG5cdGNvbnN0IHVpSXNJblBsYWNlID0gdWkgJiYgJC5jb250YWlucyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHVpLmRpc3BsYXlbMF0pO1xuXHRjb25zdCBuZXh0RWxlbWVudCA9IHVpSXNJblBsYWNlID8gdWkuZGlzcGxheSA6ICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKTtcblx0bmV4dEVsZW1lbnQuYmVmb3JlKGVycm9yQm94KTtcblx0ZXJyb3JCb3guaGlkZSgpLmZhZGVJbigpO1xufTtcblxuLyogQ2hhbmdlIGEgbGluayBzbyB0aGF0IGl0IHBvaW50cyB0byB0aGUgdGl0bGUvKiAqIHRleHQ6IFRoZSB3aWtpdGV4dCBvZiB0aGUgd2hvbGUgcGFnZS8qICogdGl0bGU6IFRoZSBuZXcgZGVzdGluYXRpb24gb2YgdGhlIGxpbmsvKiAqIGxpbms6IFRoZSBsaW5rIHRoYXQgd2lsbCBiZSBtb2RpZmllZC8qICogZXh0cmE6IFRleHQgdGhhdCB3aWxsIGJlIGFkZGVkIGFmdGVyIHRoZSBsaW5rIChvcHRpb25hbCkgKi9cbmNvbnN0IHJlcGxhY2VMaW5rID0gKHRleHQsIHRpdGxlLCBsaW5rLCBleHRyYSkgPT4ge1xuXHRsZXQgbmV3Q29udGVudDtcblx0aXNTYW1lUGFnZSh0aXRsZSwgbGluay5kZXNjcmlwdGlvbilcblx0XHQ/IC8vIFtbQnxBXV0gc2hvdWxkIGJlIHJlcGxhY2VkIHdpdGggW1tBXV0gcmF0aGVyIHRoYW4gW1tBfEFdXVxuXHRcdFx0KG5ld0NvbnRlbnQgPSBsaW5rLmRlc2NyaXB0aW9uKVxuXHRcdDogKG5ld0NvbnRlbnQgPSBgJHt0aXRsZX18JHtsaW5rLmRlc2NyaXB0aW9ufWApO1xuXHRjb25zdCBsaW5rU3RhcnQgPSB0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIGxpbmsuc3RhcnQpKTtcblx0Y29uc3QgbGlua0VuZCA9IHRleHQuc2xpY2UoTWF0aC5tYXgoMCwgbGluay5lbmQpKTtcblx0cmV0dXJuIGAke2xpbmtTdGFydH1bWyR7bmV3Q29udGVudH1dXSR7bGluay5hZnRlckRlc2NyaXB0aW9ufSR7ZXh0cmEgfHwgJyd9JHtsaW5rRW5kfWA7XG59O1xuXG4vKiBSZW1vdmUgYSBsaW5rIGZyb20gdGhlIHRleHQvKiAqIHRleHQ6IFRoZSB3aWtpdGV4dCBvZiB0aGUgd2hvbGUgcGFnZS8qICogbGluazogVGhlIGxpbmsgdGhhdCB3aWxsIGJlIHJlbW92ZWQgKi9cbmNvbnN0IHJlbW92ZUxpbmsgPSAodGV4dCwgbGluaykgPT4ge1xuXHRjb25zdCBsaW5rU3RhcnQgPSB0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIGxpbmsuc3RhcnQpKTtcblx0Y29uc3QgbGlua0VuZCA9IHRleHQuc2xpY2UoTWF0aC5tYXgoMCwgbGluay5lbmQpKTtcblx0cmV0dXJuIGxpbmtTdGFydCArIGxpbmsuZGVzY3JpcHRpb24gKyBsaW5rLmFmdGVyRGVzY3JpcHRpb24gKyBsaW5rRW5kO1xufTtcblxuLyogRXh0cmFjdCBhIGxpbmsgZnJvbSBhIHN0cmluZyBpbiB3aWtpIGZvcm1hdCwvKiAqIHN0YXJ0aW5nIGZyb20gYSBnaXZlbiBpbmRleC4gUmV0dXJuIGEgbGluayBpZiBvbmUgY2FuIGJlIGZvdW5kLC8qICogb3RoZXJ3aXNlIHJldHVybiBudWxsLiBUaGUgXCJsaW5rXCIgaW5jbHVkZXMgXCJkaXNhbWJpZ3VhdGlvbiBuZWVkZWRcIi8qICogdGVtcGxhdGVzIGlubWVkaWF0ZWx5IGZvbGxvd2luZyB0aGUgbGluayBwcm9wZXIvKiAqIHRleHQ6IFRleHQgZnJvbSB3aGljaCB0aGUgbGluayB3aWxsIGJlIGV4dHJhY3RlZC8qICogbGFzdEluZGV4OiBJbmRleCBmcm9tIHdoaWNoIHRoZSBzZWFyY2ggd2lsbCBzdGFydCAqL1xuY29uc3QgZXh0cmFjdExpbmsgPSAodGV4dCwgbGFzdEluZGV4KSA9PiB7XG5cdC8vIEZJWE1FOiBOb3QgYW4gYWN0dWFsIHRpdGxlIHJlZ2V4IChsb3RzIG9mIGZhbHNlIHBvc2l0aXZlc1xuXHQvLyBhbmQgc29tZSBmYWxzZSBuZWdhdGl2ZXMpLCBidXQgaG9wZWZ1bGx5IGdvb2QgZW5vdWdoLlxuXHRjb25zdCB0aXRsZVJlZ2V4ID0gL1xcW1xcWyguKj8pKD86XFx8KC4qPykpP11dL2c7XG5cdC8vIERpdHRvIGZvciB0aGUgdGVtcGxhdGUgcmVnZXguIERpc2FtYmlndWF0aW9uIGxpbmsgdGVtcGxhdGVzXG5cdC8vIHNob3VsZCBiZSBzaW1wbGUgZW5vdWdoIGZvciB0aGlzIG5vdCB0byBtYXR0ZXIsIHRob3VnaC5cblx0Y29uc3QgdGVtcGxhdGVSZWdleCA9IC9eKFxcdypbXFxzISksLjo7P31dKil7e1xccyooW157fH1dKz8pXFxzKig/OlxcfFtee10qPyk/fX0vO1xuXHR0aXRsZVJlZ2V4Lmxhc3RJbmRleCA9IGxhc3RJbmRleDtcblx0Y29uc3QgbWF0Y2ggPSB0aXRsZVJlZ2V4LmV4ZWModGV4dCk7XG5cdGlmIChtYXRjaCAmJiBtYXRjaC5pbmRleCAhPT0gLTEpIHtcblx0XHRsZXQgcG9zc2libHlBbWJpZ3VvdXMgPSB0cnVlO1xuXHRcdGxldCBoYXNEaXNhbVRlbXBsYXRlID0gZmFsc2U7XG5cdFx0bGV0IF9lbmQgPSBtYXRjaC5pbmRleCArIDQgKyBtYXRjaFsxXS5sZW5ndGggKyAobWF0Y2hbMl0gPyAxICsgbWF0Y2hbMl0ubGVuZ3RoIDogMCk7XG5cdFx0bGV0IGFmdGVyRGVzY3JpcHRpb24gPSAnJztcblx0XHRjb25zdCByZXN0ID0gdGV4dC5zbGljZShNYXRoLm1heCgwLCBfZW5kKSk7XG5cdFx0Y29uc3QgdGVtcGxhdGVNYXRjaCA9IHRlbXBsYXRlUmVnZXguZXhlYyhyZXN0KTtcblx0XHRpZiAodGVtcGxhdGVNYXRjaCkge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVUaXRsZSA9IGdldENhbm9uaWNhbFRpdGxlKHRlbXBsYXRlTWF0Y2hbMl0pO1xuXHRcdFx0Y29uc3Qge2Rpc2FtTGlua1RlbXBsYXRlc30gPSBjZmc7XG5cdFx0XHRjb25zdCB7ZGlzYW1MaW5rSWdub3JlVGVtcGxhdGVzfSA9IGNmZztcblx0XHRcdGlmIChkaXNhbUxpbmtUZW1wbGF0ZXMuaW5jbHVkZXModGVtcGxhdGVUaXRsZSkpIHtcblx0XHRcdFx0X2VuZCArPSB0ZW1wbGF0ZU1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdFx0YWZ0ZXJEZXNjcmlwdGlvbiA9IHRlbXBsYXRlTWF0Y2hbMV0ucmVwbGFjZSgvXFxzJC8sICcnKTtcblx0XHRcdFx0aGFzRGlzYW1UZW1wbGF0ZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKGRpc2FtTGlua0lnbm9yZVRlbXBsYXRlcy5pbmNsdWRlcyh0ZW1wbGF0ZVRpdGxlKSkge1xuXHRcdFx0XHRwb3NzaWJseUFtYmlndW91cyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhcnQ6IG1hdGNoLmluZGV4LFxuXHRcdFx0ZW5kOiBfZW5kLFxuXHRcdFx0cG9zc2libHlBbWJpZ3VvdXMsXG5cdFx0XHRoYXNEaXNhbVRlbXBsYXRlLFxuXHRcdFx0dGl0bGU6IG1hdGNoWzFdLFxuXHRcdFx0ZGVzY3JpcHRpb246IG1hdGNoWzJdID8/IG1hdGNoWzFdLFxuXHRcdFx0YWZ0ZXJEZXNjcmlwdGlvbixcblx0XHR9O1xuXHR9XG59O1xuXG4vKiBFeHRyYWN0IGEgbGluayB0byBvbmUgb2YgYSBudW1iZXIgb2YgZGVzdGluYXRpb24gcGFnZXMgZnJvbSBhIHN0cmluZy8qICogKFwidGV4dFwiKSBpbiB3aWtpIGZvcm1hdCwgc3RhcnRpbmcgZnJvbSBhIGdpdmVuIGluZGV4IChcImxhc3RJbmRleFwiKS4vKiAqIFwiRGlzYW1iaWd1YXRpb24gbmVlZGVkXCIgdGVtcGxhdGVzIGFyZSBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSBsaW5rcy4vKiAqIHRleHQ6IFBhZ2UgaW4gd2lraSBmb3JtYXQvKiAqIGRlc3RpbmF0aW9uczogQXJyYXkgb2YgcGFnZSB0aXRsZXMgdG8gbG9vayBmb3IvKiAqIGxhc3RJbmRleDogSW5kZXggZnJvbSB3aGljaCB0aGUgc2VhcmNoIHdpbGwgc3RhcnQgKi9cbmNvbnN0IGV4dHJhY3RMaW5rVG9QYWdlID0gKHRleHQsIGRlc3RpbmF0aW9ucywgbGFzdEluZGV4KSA9PiB7XG5cdGxldCBsaW5rO1xuXHRsZXQgdGl0bGU7XG5cdGRvIHtcblx0XHRsaW5rID0gZXh0cmFjdExpbmsodGV4dCwgbGFzdEluZGV4KTtcblx0XHRpZiAobGluaykge1xuXHRcdFx0bGFzdEluZGV4ID0gbGluay5lbmQ7XG5cdFx0XHR0aXRsZSA9IGdldENhbm9uaWNhbFRpdGxlKGxpbmsudGl0bGUpO1xuXHRcdH1cblx0fSB3aGlsZSAobGluayAmJiAoIWxpbmsucG9zc2libHlBbWJpZ3VvdXMgfHwgIWRlc3RpbmF0aW9ucz8uaW5jbHVkZXModGl0bGUpKSk7XG5cdHJldHVybiBsaW5rO1xufTtcblxuLyogRmluZCB0aGUgXCJ0YXJnZXRcIiBwYWdlOiBlaXRoZXIgdGhlIG9uZSB3ZSBhcmUgaW4gb3IgdGhlIFwibWFpblwiIG9uZSBmb3VuZCBieSBleHRyYWN0aW5nLyogKiB0aGUgdGl0bGUgZnJvbSBcIi4qIChkaXNhbWJpZ3VhdGlvbilcIiBvciB3aGF0ZXZlciB0aGUgYXBwcm9waWF0ZSBsb2NhbCBmb3JtYXQgaXMgKi9cbmNvbnN0IGdldFRhcmdldFBhZ2UgPSAoKSA9PiB7XG5cdGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcblx0cmV0dXJuIGZvcmNlU2FtZVBhZ2UgPyB0aXRsZSA6IHJlbW92ZURpc2FtKHRpdGxlKTtcbn07XG5cbi8qIEdldCB0aGUgcGFnZSB0aXRsZSwgd2l0aCB0aGUgbmFtZXNwYWNlIHByZWZpeCBpZiBhbnkuICovXG5jb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRyZXR1cm4gd2dQYWdlTmFtZS5yZXBsYWNlKC9fL2csICcgJyk7XG59O1xuXG4vKiBFeHRyYWN0IGEgXCJtYWluXCIgdGl0bGUgZnJvbSBcIi4qIChkaXNhbWJpZ3VhdGlvbilcIiBvciB3aGF0ZXZlciB0aGUgYXBwcm9waWF0ZSBsb2NhbCBmb3JtYXQgaXMgKi9cbmNvbnN0IHJlbW92ZURpc2FtID0gKHRpdGxlKSA9PiB7XG5cdGNvbnN0IG1hdGNoID0gbmV3IFJlZ0V4cChjZmcuZGlzYW1SZWdFeHApLmV4ZWModGl0bGUpO1xuXHRyZXR1cm4gbWF0Y2g/LlsxXSA/PyB0aXRsZTtcbn07XG5cbi8qIENoZWNrIHdoZXRoZXIgdHdvIHBhZ2UgdGl0bGVzIGFyZSB0aGUgc2FtZSAqL1xuY29uc3QgaXNTYW1lUGFnZSA9ICh0aXRsZTEsIHRpdGxlMikgPT4ge1xuXHRyZXR1cm4gZ2V0Q2Fub25pY2FsVGl0bGUodGl0bGUxKSA9PT0gZ2V0Q2Fub25pY2FsVGl0bGUodGl0bGUyKTtcbn07XG5cbi8qIFJldHVybiB0aGUgJ2Nhbm9uaWNhbCB0aXRsZScgb2YgYSBwYWdlICovXG5jb25zdCBnZXRDYW5vbmljYWxUaXRsZSA9ICh0aXRsZSkgPT4ge1xuXHR0cnkge1xuXHRcdC8vIG13LlRpdGxlIHNlZW1zIHRvIGJlIGJ1Z2d5LCBhbmQgc29tZSB2YWxpZCB0aXRsZXMgYXJlIHJlamVjdGVkXG5cdFx0Ly8gRklYTUU6IFRoaXMgbWF5IGNhdXNlIGZhbHNlIG5lZ2F0aXZlc1xuXHRcdHRpdGxlID0gbmV3IG13LlRpdGxlKHRpdGxlKS5nZXRQcmVmaXhlZFRleHQoKTtcblx0fSBjYXRjaCB7XG5cdFx0LyogZW1wdHkgKi9cblx0fVxuXHRyZXR1cm4gdGl0bGU7XG59O1xuXG4vKiBFeHRyYWN0IHRoZSBjb250ZXh0IGFyb3VuZCBhIGdpdmVuIGxpbmsgaW4gYSB0ZXh0IHN0cmluZyAqL1xuY29uc3QgZXh0cmFjdENvbnRleHQgPSAodGV4dCwgbGluaykgPT4ge1xuXHRjb25zdCBjb250ZXh0U3RhcnQgPSBsaW5rLnN0YXJ0IC0gY2ZnLnJhZGl1cztcblx0Y29uc3QgY29udGV4dEVuZCA9IGxpbmsuZW5kICsgY2ZnLnJhZGl1cztcblx0bGV0IGNvbnRleHRQcmV2ID0gdGV4dC5zbGljZShjb250ZXh0U3RhcnQsIGxpbmsuc3RhcnQpO1xuXHRpZiAoY29udGV4dFN0YXJ0ID4gMCkge1xuXHRcdGNvbnRleHRQcmV2ID0gbWVzc2FnZXMuZWxsaXBzaXMgKyBjb250ZXh0UHJldjtcblx0fVxuXHRsZXQgY29udGV4dE5leHQgPSB0ZXh0LnNsaWNlKGxpbmsuZW5kLCBjb250ZXh0RW5kKTtcblx0aWYgKGNvbnRleHRFbmQgPCB0ZXh0Lmxlbmd0aCkge1xuXHRcdGNvbnRleHROZXh0ICs9IG1lc3NhZ2VzLmVsbGlwc2lzO1xuXHR9XG5cdHJldHVybiBbY29udGV4dFByZXYsIHRleHQuc2xpY2UobGluay5zdGFydCwgbGluay5lbmQpLCBjb250ZXh0TmV4dF07XG59O1xuXG4vKiBFeHRyYWN0IHRoZSBwcmVmaXhlZCBwYWdlIG5hbWUgZnJvbSBhIGxpbmsgKi9cbmNvbnN0IGV4dHJhY3RQYWdlTmFtZSA9IChsaW5rKSA9PiB7XG5cdGxldCBwYWdlTmFtZSA9IGV4dHJhY3RQYWdlTmFtZVJhdyhsaW5rKTtcblx0aWYgKHBhZ2VOYW1lKSB7XG5cdFx0Y29uc3Qgc2VjdGlvblBvcyA9IHBhZ2VOYW1lLmluZGV4T2YoJyMnKTtcblx0XHRsZXQgc2VjdGlvbiA9ICcnO1xuXHRcdGlmIChzZWN0aW9uUG9zICE9PSAtMSkge1xuXHRcdFx0c2VjdGlvbiA9IHBhZ2VOYW1lLnNsaWNlKE1hdGgubWF4KDAsIHNlY3Rpb25Qb3MpKTtcblx0XHRcdHBhZ2VOYW1lID0gcGFnZU5hbWUuc2xpY2UoMCwgTWF0aC5tYXgoMCwgc2VjdGlvblBvcykpO1xuXHRcdH1cblx0XHRyZXR1cm4gZ2V0Q2Fub25pY2FsVGl0bGUocGFnZU5hbWUpICsgc2VjdGlvbjtcblx0fVxufTtcblxuLyogRXh0cmFjdCB0aGUgcGFnZSBuYW1lIGZyb20gYSBsaW5rLCBhcyBpcyAqL1xuY29uc3QgZXh0cmFjdFBhZ2VOYW1lUmF3ID0gKGxpbmspID0+IHtcblx0Y29uc3Qge3dnU2NyaXB0LCB3Z0FydGljbGVQYXRofSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKCFsaW5rLmhhc0NsYXNzKCdpbWFnZScpKSB7XG5cdFx0Y29uc3QgaHJlZiA9IGxpbmsuYXR0cignaHJlZicpO1xuXHRcdGlmIChsaW5rLmhhc0NsYXNzKCduZXcnKSkge1xuXHRcdFx0Ly8gXCJSZWRcIiBsaW5rXG5cdFx0XHRpZiAoaHJlZi5pbmNsdWRlcyh3Z1NjcmlwdCkpIHtcblx0XHRcdFx0cmV0dXJuIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndGl0bGUnLCBocmVmKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcmVnZXggPSB3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJyguKiknKTtcblx0XHRcdGNvbnN0IHJlZ2V4UmVzdWx0ID0gbmV3IFJlZ0V4cChgXiR7cmVnZXh9JGApLmV4ZWMoaHJlZik7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShyZWdleFJlc3VsdCkgJiYgcmVnZXhSZXN1bHQubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVnZXhSZXN1bHRbMV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLyogQ2hlY2sgd2hldGhlciB0aGlzIGlzIGEgZGlzYW1iaWd1YXRpb24gcGFnZSAqL1xuY29uc3QgaXNEaXNhbSA9ICgpID0+IHtcblx0Y29uc3Qge3dnQ2F0ZWdvcmllc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGNhdGVnb3JpZXMgPSB3Z0NhdGVnb3JpZXMgPz8gW107XG5cdGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuXHRcdGNvbnN0IHtkaXNhbUNhdGVnb3JpZXN9ID0gY2ZnO1xuXHRcdGlmIChkaXNhbUNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3Qgc2Vjb25kc1RvSEhNTVNTID0gKHRvdGFsU2Vjb25kcykgPT4ge1xuXHRsZXQgaGhtbXNzID0gJyc7XG5cdGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyAzNjAwKTtcblx0Y29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsU2Vjb25kcyAlIDM2MDApIC8gNjApO1xuXHRjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgJSA2MCk7XG5cdGlmIChob3VycyA+PSAxKSB7XG5cdFx0aGhtbXNzID0gYCR7cGFkKGhvdXJzLCAnMCcsIDIpfTpgO1xuXHR9XG5cdGhobW1zcyArPSBgJHtwYWQobWludXRlcywgJzAnLCAyKX06JHtwYWQoc2Vjb25kcywgJzAnLCAyKX1gO1xuXHRyZXR1cm4gaGhtbXNzO1xufTtcblxuY29uc3QgcGFkID0gKHN0ciwgeiwgd2lkdGgpID0+IHtcblx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XG5cdGlmIChzdHIubGVuZ3RoID49IHdpZHRoKSB7XG5cdFx0cmV0dXJuIHN0cjtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdEFycmF5LmZyb20oe1xuXHRcdFx0bGVuZ3RoOiB3aWR0aCAtIHN0ci5sZW5ndGggKyAxLFxuXHRcdH0pLmpvaW4oeikgKyBzdHJcblx0KTtcbn07XG5cbi8qIENyZWF0ZSBhIG5ldyBidXR0b25cbiAqIHRleHQ6IFRleHQgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgYnV0dG9uXG4gKiBvbkNsaWNrOiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlXG4gKiBidXR0b24gaXMgY2xpY2tlZFxuICovXG5jb25zdCBjcmVhdGVCdXR0b24gPSAodGV4dCwgb25DbGljaykgPT4ge1xuXHRjb25zdCBidXR0b24gPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0dmFsdWU6IHRleHQsXG5cdH0pO1xuXHRidXR0b24uYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWJ1dHRvbicpLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRyZXR1cm4gYnV0dG9uO1xufTtcblxuLyogR2l2ZW4gYSBwYWdlIHRpdGxlIGFuZCBhbiBhcnJheSBvZiBwb3NzaWJsZSByZWRpcmVjdHMge2Zyb20sIHRvfSAoXCJjYW5vbmljYWwgdGl0bGVzXCIpLCBmaW5kIHRoZSBwYWdlLyogKiBhdCB0aGUgZW5kIG9mIHRoZSByZWRpcmVjdCBjaGFpbiwgaWYgdGhlcmUgaXMgb25lLiBPdGhlcndpc2UsIHJldHVybiB0aGUgcGFnZSB0aXRsZSB0aGF0IHdhcyBwYXNzZWQgKi9cbmNvbnN0IHJlc29sdmVSZWRpcmVjdCA9IChwYWdlVGl0bGUsIHBvc3NpYmxlUmVkaXJlY3RzKSA9PiB7XG5cdGxldCBhcHBsaWVkUmVkaXJlY3QgPSB0cnVlO1xuXHRjb25zdCB2aXNpdGVkUGFnZXMgPSB7fTtcblx0bGV0IGN1cnJlbnRQYWdlID0gZ2V0Q2Fub25pY2FsVGl0bGUocGFnZVRpdGxlKTtcblx0d2hpbGUgKGFwcGxpZWRSZWRpcmVjdCkge1xuXHRcdGFwcGxpZWRSZWRpcmVjdCA9IGZhbHNlO1xuXHRcdGZvciAoY29uc3QgcG9zc2libGVSZWRpcmVjdCBvZiBwb3NzaWJsZVJlZGlyZWN0cykge1xuXHRcdFx0aWYgKHBvc3NpYmxlUmVkaXJlY3QuZnJvbSA9PT0gY3VycmVudFBhZ2UpIHtcblx0XHRcdFx0aWYgKHZpc2l0ZWRQYWdlc1twb3NzaWJsZVJlZGlyZWN0LnRvXSkge1xuXHRcdFx0XHRcdC8vIFJlZGlyZWN0IGNoYWluIGRldGVjdGVkXG5cdFx0XHRcdFx0cmV0dXJuIHBhZ2VUaXRsZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2aXNpdGVkUGFnZXNbY3VycmVudFBhZ2VdID0gdHJ1ZTtcblx0XHRcdFx0YXBwbGllZFJlZGlyZWN0ID0gdHJ1ZTtcblx0XHRcdFx0Y3VycmVudFBhZ2UgPSBwb3NzaWJsZVJlZGlyZWN0LnRvO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvLyBObyByZWRpcmVjdCBydWxlcyBhcHBsaWVkIGZvciBhbiBpdGVyYXRpb24gb2YgdGhlIG91dGVyIGxvb3A6XG5cdC8vIG5vIG1vcmUgcmVkaXJlY3RzLiBXZSBhcmUgZG9uZVxuXHRyZXR1cm4gY3VycmVudFBhZ2U7XG59O1xuXG4vKiBGZXRjaCB0aGUgaW5jb21pbmcgbGlua3MgdG8gYSBwYWdlLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UvKiAqIChzdWNjZXNzIC0gYXJyYXkgb2YgdGl0bGVzIG9mIHBhZ2VzIHRoYXQgY29udGFpbiBsaW5rcyB0byB0aGUgdGFyZ2V0IHBhZ2UgYW5kLyogKiBhcnJheSBvZiBcImNhbm9uaWNhbCB0aXRsZXNcIiBvZiBwb3NzaWJsZSBkZXN0aW5hdGlvbnMgb2YgdGhlIGJhY2tsaW5rcyAoZWl0aGVyLyogKiB0aGUgdGFyZ2V0IHBhZ2Ugb3IgcmVkaXJlY3RzIHRvIHRoZSB0YXJnZXQgcGFnZSksIGZhaWx1cmUgLSBlcnJvciBkZXNjcmlwdGlvbikvKiAqIHBhZ2U6IFRhcmdldCBwYWdlICovXG5jb25zdCBnZXRCYWNrbGlua3MgPSAocGFnZSkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0bGlzdDogJ2JhY2tsaW5rcycsXG5cdFx0Ymx0aXRsZTogcGFnZSxcblx0XHRibHJlZGlyZWN0OiB0cnVlLFxuXHRcdGJsbGltaXQ6IGNmZy5iYWNrbGlua0xpbWl0LFxuXHRcdGJsbmFtZXNwYWNlOiBjZmcudGFyZ2V0TmFtZXNwYWNlcy5qb2luKCd8JyksXG5cdH07XG5cdGFwaS5nZXQocGFyYW1zKVxuXHRcdC5kb25lKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHQvLyBUaGVyZSBtaWdodCBiZSBkdXBsaWNhdGUgZW50cmllcyBpbiBzb21lIGNvcm5lciBjYXNlcy4gV2UgZG9uJ3QgY2FyZSxcblx0XHRcdC8vIHNpbmNlIHdlIGFyZSBnb2luZyB0byBjaGVjayBsYXRlciwgYW55d2F5XG5cdFx0XHRjb25zdCBiYWNrbGlua3MgPSBbXTtcblx0XHRcdGNvbnN0IGxpbmtUaXRsZXMgPSBbZ2V0Q2Fub25pY2FsVGl0bGUocGFnZSldO1xuXHRcdFx0Y29uc3QgYmFja2xpbmtzUXVlcnkgPSBxdWVyeS5iYWNrbGlua3M7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYmFja2xpbmtzUXVlcnkpIHtcblx0XHRcdFx0YmFja2xpbmtzW2JhY2tsaW5rcy5sZW5ndGhdID0gZWxlbWVudC50aXRsZTtcblx0XHRcdFx0aWYgKCFlbGVtZW50LnJlZGlybGlua3MpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaW5rVGl0bGVzW2xpbmtUaXRsZXMubGVuZ3RoXSA9IGVsZW1lbnQudGl0bGU7XG5cdFx0XHRcdGNvbnN0IHtyZWRpcmxpbmtzfSA9IGVsZW1lbnQ7XG5cdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiByZWRpcmxpbmtzKSB7XG5cdFx0XHRcdFx0YmFja2xpbmtzW2JhY2tsaW5rcy5sZW5ndGhdID0gdGl0bGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGRlZmVycmVkLnJlc29sdmUoYmFja2xpbmtzLCBsaW5rVGl0bGVzKTtcblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QobWVzc2FnZXMuZ2V0QmFja2xpbmtzRXJyb3IucmVwbGFjZSgnJDEnLCBjb2RlKSk7XG5cdFx0fSk7XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBEb3dubG9hZCBhIGxpc3Qgb2YgcmVkaXJlY3RzIGZvciBzb21lIHBhZ2VzLiBSZXR1cm5zIGEgalF1ZXJ5IGNhbGxiYWNrIChzdWNjZXNzIC0vKiAqIGFycmF5IG9mIHJlZGlyZWN0cyAoe2Zyb20sIHRvfSksIGZhaWx1cmUgLSBlcnJvciBkZXNjcmlwdGlvbiApLyogKiBwYWdlVGl0bGVzOiBBcnJheSBvZiBwYWdlIHRpdGxlcyAqL1xuY29uc3QgZmV0Y2hSZWRpcmVjdHMgPSAocGFnZVRpdGxlcykgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IGN1cnJlbnRUaXRsZXMgPSBwYWdlVGl0bGVzLnNsaWNlKDAsIGNmZy5xdWVyeVRpdGxlTGltaXQpO1xuXHRjb25zdCByZXN0VGl0bGVzID0gcGFnZVRpdGxlcy5zbGljZShjZmcucXVlcnlUaXRsZUxpbWl0KTtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHR0aXRsZXM6IGN1cnJlbnRUaXRsZXMuam9pbignfCcpLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0fTtcblx0YXBpLmdldChwYXJhbXMpXG5cdFx0LmRvbmUoKHtxdWVyeX0pID0+IHtcblx0XHRcdGNvbnN0IHRoZXNlUmVkaXJlY3RzID0gcXVlcnkucmVkaXJlY3RzID8/IFtdO1xuXHRcdFx0aWYgKHJlc3RUaXRsZXMubGVuZ3RoKSB7XG5cdFx0XHRcdGZldGNoUmVkaXJlY3RzKHJlc3RUaXRsZXMpXG5cdFx0XHRcdFx0LmRvbmUoKHJlZGlyZWN0cykgPT4ge1xuXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShbLi4udGhlc2VSZWRpcmVjdHMsIC4uLnJlZGlyZWN0c10pO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZGVzY3JpcHRpb24pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSh0aGVzZVJlZGlyZWN0cyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KG1lc3NhZ2VzLmZldGNoUmVkaXJlY3RzRXJyb3IucmVwbGFjZSgnJDEnLCBjb2RlKSk7XG5cdFx0fSk7XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBEb3dubG9hZCB0aGUgbGlzdCBvZiB1c2VyIHJpZ2h0cyBmb3IgdGhlIGN1cnJlbnQgdXNlci4gUmV0dXJucyBhLyogKiBqUXVlcnkgcHJvbWlzZSAoc3VjY2VzcyAtIGFycmF5IG9mIHJpZ2h0IG5hbWVzLCBlcnJvciAtIGVycm9yIGRlc2NyaXB0aW9uKSAqL1xuY29uc3QgZmV0Y2hSaWdodHMgPSAoKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdG1ldGE6ICd1c2VyaW5mbycsXG5cdFx0dWlwcm9wOiAncmlnaHRzJyxcblx0fTtcblx0YXBpLmdldChwYXJhbXMpXG5cdFx0LmRvbmUoKHtxdWVyeX0pID0+IHtcblx0XHRcdGRlZmVycmVkLnJlc29sdmUocXVlcnkudXNlcmluZm8ucmlnaHRzKTtcblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QobWVzc2FnZXMuZmV0Y2hSaWdodHNFcnJvci5yZXBsYWNlKCckMScsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIExvYWQgdGhlIHJhdyBwYWdlIHRleHQgZm9yIGEgZ2l2ZW4gdGl0bGUuIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZSAoc3VjY2VzcyAtIHBhZ2UvKiAqIGNvbnRlbnQsIGZhaWx1cmUgLSBlcnJvciBkZXNjcmlwdGlvbikvKiAqIHBhZ2VUaXRsZTogVGl0bGUgb2YgdGhlIHBhZ2UgKi9cbmNvbnN0IGxvYWRQYWdlID0gKHBhZ2VUaXRsZSkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHRpdGxlczogcGFnZVRpdGxlLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJ2cHJvcDogJ3RpbWVzdGFtcHxjb250ZW50Jyxcblx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHR0eXBlOiAnY3NyZicsXG5cdH07XG5cdGFwaS5nZXQocGFyYW1zKVxuXHRcdC5kb25lKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRjb25zdCBbcmF3UGFnZV0gPSBxdWVyeS5wYWdlcztcblx0XHRcdGNvbnN0IHBhZ2UgPSB7fTtcblx0XHRcdHBhZ2UucmVkaXJlY3QgPSByYXdQYWdlLnJlZGlyZWN0ICE9PSB1bmRlZmluZWQ7XG5cdFx0XHRwYWdlLm1pc3NpbmcgPSByYXdQYWdlLm1pc3NpbmcgIT09IHVuZGVmaW5lZDtcblx0XHRcdGlmIChyYXdQYWdlLnJldmlzaW9ucykge1xuXHRcdFx0XHRwYWdlLmNvbnRlbnQgPSByYXdQYWdlLnJldmlzaW9uc1swXS5jb250ZW50O1xuXHRcdFx0XHRwYWdlLmJhc2VUaW1lU3RhbXAgPSByYXdQYWdlLnJldmlzaW9uc1swXS50aW1lc3RhbXA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYWdlLmNvbnRlbnQgPSAnJztcblx0XHRcdFx0cGFnZS5iYXNlVGltZVN0YW1wID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdFx0cGFnZS5zdGFydFRpbWVTdGFtcCA9IHJhd1BhZ2Uuc3RhcnR0aW1lc3RhbXA7XG5cdFx0XHRwYWdlLmVkaXRUb2tlbiA9IHF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHBhZ2UpO1xuXHRcdH0pXG5cdFx0LmZhaWwoKGNvZGUpID0+IHtcblx0XHRcdGRlZmVycmVkLnJlamVjdChtZXNzYWdlcy5sb2FkUGFnZUVycm9yLnJlcGxhY2UoJyQxJywgcGFnZVRpdGxlKS5yZXBsYWNlKCckMicsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIFJlZ2lzdGVyIGNoYW5nZXMgdG8gYSBwYWdlLCB0byBiZSBzYXZlZCBsYXRlci4gUmV0dXJucyBhIGpRdWVyeSBwcm9taXNlLyogKiAoc3VjY2VzcyAtIG5vIHBhcmFtcywgZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uKS4gVGFrZXMgdGhlIHNhbWUgcGFyYW1ldGVycy8qICogYXMgc2F2ZVBhZ2UgKi9cbmNvbnN0IHNhdmVXaXRoQ29vbGRvd24gPSAoLi4uYXJncykgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdHBlbmRpbmdTYXZlc1twZW5kaW5nU2F2ZXMubGVuZ3RoXSA9IHtcblx0XHRhcmdzLFxuXHRcdGRmZDogZGVmZXJyZWQsXG5cdH07XG5cdGlmICghcnVubmluZ1NhdmVzKSB7XG5cdFx0Y2hlY2tBbmRTYXZlKCk7XG5cdH1cblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIFNhdmUgdGhlIGZpcnN0IHNldCBvZiBjaGFuZ2VzIGluIHRoZSBsaXN0IG9mIHBlbmRpbmcgY2hhbmdlcywgcHJvdmlkaW5nIHRoYXQvKiAqIGVub3VnaCB0aW1lIGhhcyBwYXNzZWQgc2luY2UgdGhlIGxhc3QgZWRpdCAqL1xuY29uc3QgY2hlY2tBbmRTYXZlID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIXBlbmRpbmdTYXZlcy5sZW5ndGgpIHtcblx0XHRydW5uaW5nU2F2ZXMgPSBmYWxzZTtcblx0XHRyZXR1cm47XG5cdH1cblx0cnVubmluZ1NhdmVzID0gdHJ1ZTtcblx0Y29uc3QgbWlsbGlzU2luY2VMYXN0ID0gRGF0ZS5ub3coKSAtIGxhc3RFZGl0TWlsbGlzO1xuXHRpZiAobWlsbGlzU2luY2VMYXN0IDwgY2ZnLmVkaXRDb29sZG93biAqIDEwMDApIHtcblx0XHRzZXRUaW1lb3V0KGNoZWNrQW5kU2F2ZSwgY2ZnLmVkaXRDb29sZG93biAqIDEwMDAgLSBtaWxsaXNTaW5jZUxhc3QpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFRoZSBsYXN0IGVkaXQgc3RhcnRlZCBhdCBsZWFzdCBjZmcuZWRpdENvb2xkb3duIHNlY29uZHMgYWdvXG5cdFx0Y29uc3Qgc2F2ZSA9IHBlbmRpbmdTYXZlcy5zaGlmdCgpO1xuXHRcdHNhdmVQYWdlXG5cdFx0XHQuYXBwbHkodGhpcywgc2F2ZS5hcmdzKVxuXHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRjaGVja0FuZFNhdmUoKTtcblx0XHRcdFx0c2F2ZS5kZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKChkZXNjcmlwdGlvbikgPT4ge1xuXHRcdFx0XHRjaGVja0FuZFNhdmUoKTtcblx0XHRcdFx0c2F2ZS5kZmQucmVqZWN0KGRlc2NyaXB0aW9uKTtcblx0XHRcdH0pO1xuXHRcdC8vIFdlJ2xsIHVzZSB0aGUgdGltZSBzaW5jZSB0aGUgbGFzdCBlZGl0IHN0YXJ0ZWRcblx0XHRsYXN0RWRpdE1pbGxpcyA9IERhdGUubm93KCk7XG5cdH1cbn07XG5cbi8qIFNhdmUgdGhlIGNoYW5nZXMgbWFkZSB0byBhIHBhZ2UuIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZSAoc3VjY2VzcyAtIG5vIHBhcmFtcywvKiAqIGZhaWx1cmUgLSBlcnJvciBkZXNjcmlwdGlvbikvKiAqIHBhZ2VUaXRsZTogVGl0bGUgb2YgdGhlIHBhZ2UvKiAqIHBhZ2U6IFBhZ2UgZGF0YS8qICogc3VtbWFyeTogU3VtbWFyeSBvZiB0aGUgY2hhbmdlcyBtYWRlIHRvIHRoZSBwYWdlLyogKiBtaW5vckVkaXQ6IFdoZXRoZXIgdG8gbWFyayB0aGUgZWRpdCBhcyAnbWlub3InLyogKiBib3RFZGl0OiBXaGV0aGVyIHRvIG1hcmsgdGhlIGVkaXQgYXMgJ2JvdCcgKi9cbmNvbnN0IHNhdmVQYWdlID0gKHBhZ2VUaXRsZSwge2VkaXRUb2tlbiwgY29udGVudCwgYmFzZVRpbWVTdGFtcCwgc3RhcnRUaW1lU3RhbXB9LCBzdW1tYXJ5LCBtaW5vckVkaXQsIGJvdEVkaXQpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHR0b2tlbjogZWRpdFRva2VuLFxuXHRcdHRleHQ6IGNvbnRlbnQsXG5cdFx0YmFzZXRpbWVzdGFtcDogYmFzZVRpbWVTdGFtcCxcblx0XHRzdGFydHRpbWVzdGFtcDogc3RhcnRUaW1lU3RhbXAsXG5cdFx0c3VtbWFyeSxcblx0XHR3YXRjaGxpc3Q6IGNmZy53YXRjaCxcblx0XHRtaW5vcjogbWlub3JFZGl0LFxuXHRcdGJvdDogYm90RWRpdCxcblx0fTtcblx0YXBpLnBvc3QocGFyYW1zKVxuXHRcdC5kb25lKCgpID0+IHtcblx0XHRcdGRlZmVycmVkLnJlc29sdmUoKTtcblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QobWVzc2FnZXMuc2F2ZVBhZ2VFcnJvci5yZXBsYWNlKCckMScsIHBhZ2VUaXRsZSkucmVwbGFjZSgnJDInLCBjb2RlKSk7XG5cdFx0fSk7XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG5leHBvcnQge2luc3RhbGx9O1xuIiwgIi8qKlxuICogRGlzYW1Bc3Npc3Q6IGEgdG9vbCBmb3IgcmVwYWlyaW5nIGxpbmtzIGZyb20gYXJ0aWNsZXMgdG8gZGlzYW1iaWd1YXRpb24gcGFnZXMuXG4gKiDnlLFRd2VydHl5dHJld3Fxd2VydHnmnIDliJ3orr7orqHvvJpDQyBCWS1TQSAzLjBcbiAqIOeUsUdaV0RlcuacrOWcsOWMlu+8mjIwMjAtMDgtMTkgQ0MgQlktU0EgMy4wXG4gKiDnlLHlkozlubPlpYvmlpfmlZHlnLDnkIPnqI3kvZznv7vor5EgMjAyMS0wNS0xNSBDQyBCWS1TQSAzLjBcbiAqIOaxgumXu+eZvuenkU5qemp6566A5L2T5YyWIDIwMjItMi0xNCBDQyBCWS1TQSA0LjBcbiAqL1xuaW1wb3J0ICcuL0Rpc2FtQXNzaXN0Lmxlc3MnO1xuXG5pbXBvcnQge2luc3RhbGx9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuJChpbnN0YWxsKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNiN0wsS0FBSyxNQUFNO0FBQ1htQixhQUFTRSxRQUFRO0VBQ2xCLENBQUMsRUFDQUgsS0FBTTBMLFVBQVM7QUFDZnpMLGFBQVMwTCxPQUFPeFYsU0FBUzJCLGNBQWN3SSxRQUFRLE1BQU00QixTQUFTLEVBQUU1QixRQUFRLE1BQU1vTCxJQUFJLENBQUM7RUFDcEYsQ0FBQztBQUNGLFNBQU96TCxTQUFTWSxRQUFRO0FBQ3pCOztBQ3JnQ0F4RyxFQUFFTixPQUFPOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY2ZnIiwgImRpc2FtQ2F0ZWdvcmllcyIsICJkaXNhbUxpbmtUZW1wbGF0ZXMiLCAiZGlzYW1MaW5rSWdub3JlVGVtcGxhdGVzIiwgImRpc2FtRm9ybWF0IiwgImRpc2FtUmVnRXhwIiwgImRpc2FtTmVlZGVkVGV4dCIsICJjb25jYXQiLCAicmVkaXJlY3RUb0Rpc2FtIiwgImludGVudGlvbmFsTGlua09wdGlvbiIsICJ0YXJnZXROYW1lc3BhY2VzIiwgImJhY2tsaW5rTGltaXQiLCAicXVlcnlUaXRsZUxpbWl0IiwgInJhZGl1cyIsICJudW1Db250ZXh0TGluZXMiLCAiaGlzdG9yeVNpemUiLCAiZWRpdENvb2xkb3duIiwgIndhdGNoIiwgIm1lc3NhZ2VzIiwgInN0YXJ0IiwgInN0YXJ0TWFpbiIsICJzdGFydFNhbWUiLCAiY2xvc2UiLCAidW5kbyIsICJvbWl0IiwgInJlZnJlc2giLCAidGl0bGVBc1RleHQiLCAiZGlzYW1OZWVkZWQiLCAiaW50ZW50aW9uYWxMaW5rIiwgInRpdGxlQXNUZXh0UHJvbXB0IiwgInJlbW92ZUxpbmsiLCAib3B0aW9uTWFya2VyIiwgInRhcmdldE9wdGlvbk1hcmtlciIsICJyZWRpcmVjdE9wdGlvbk1hcmtlciIsICJwYWdlVGl0bGVMaW5lIiwgIm5vTW9yZUxpbmtzIiwgInBlbmRpbmdFZGl0Q291bnRlciIsICJwZW5kaW5nRWRpdEJveCIsICJwZW5kaW5nRWRpdEJveFRpbWVFc3RpbWF0aW9uIiwgInBlbmRpbmdFZGl0Qm94TGltaXRlZCIsICJlcnJvciIsICJmZXRjaFJlZGlyZWN0c0Vycm9yIiwgImdldEJhY2tsaW5rc0Vycm9yIiwgImZldGNoUmlnaHRzRXJyb3IiLCAibG9hZFBhZ2VFcnJvciIsICJzYXZlUGFnZUVycm9yIiwgImRpc21pc3NFcnJvciIsICJwZW5kaW5nIiwgImVkaXRJblByb2dyZXNzIiwgImVsbGlwc2lzIiwgIm5vdGlmeUNoYXJhY3RlciIsICJzdW1tYXJ5IiwgInN1bW1hcnlDaGFuZ2VkIiwgInN1bW1hcnlPbWl0dGVkIiwgInN1bW1hcnlSZW1vdmVkIiwgInN1bW1hcnlJbnRlbnRpb25hbCIsICJzdW1tYXJ5SGVscE5lZWRlZCIsICJzdW1tYXJ5U2VwYXJhdG9yIiwgInJlZGlyZWN0U3VtbWFyeSIsICJzdGFydExpbmsiLCAidWkiLCAibGlua3MiLCAicGFnZUNoYW5nZXMiLCAiY3VycmVudFBhZ2VUaXRsZSIsICJjdXJyZW50UGFnZVBhcmFtZXRlcnMiLCAiY3VycmVudExpbmsiLCAicG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucyIsICJmb3JjZVNhbWVQYWdlIiwgInJ1bm5pbmciLCAiY2hvb3NpbmciLCAiY2FuTWFya0ludGVudGlvbmFsTGlua3MiLCAiZGlzcGxheWVkUGFnZXMiLCAiZWRpdENvdW50IiwgImVkaXRMaW1pdCIsICJwZW5kaW5nU2F2ZXMiLCAicGVuZGluZ0VkaXRCb3hUZXh0IiwgImxhc3RFZGl0TWlsbGlzIiwgInJ1bm5pbmdTYXZlcyIsICJpbnN0YWxsIiwgIndnQWN0aW9uIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaXNEaXNhbSIsICIkIiwgInBvcnRsZXRJZCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIlJlZ0V4cCIsICJ0ZXN0IiwgImdldFRpdGxlIiwgInN0YXJ0TWFpbkxpbmsiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJvbiIsICJzdGFydFNhbWVMaW5rIiwgImFkZCIsICJlbnN1cmVEQUJFeGlzdHMiLCAidGhlbiIsICJjYW5NYXJrIiwgImNyZWF0ZVVJIiwgImFkZFVubG9hZENvbmZpcm0iLCAibWFya0Rpc2FtT3B0aW9ucyIsICJjaGVja0VkaXRMaW1pdCIsICJ0b2dnbGVQZW5kaW5nRWRpdEJveCIsICJkb1BhZ2UiLCAiJGJvZHkiLCAiZGlzcGxheSIsICJhZGRDbGFzcyIsICJmaW5pc2hlZE1lc3NhZ2UiLCAidGV4dCIsICJoaWRlIiwgImNvbnRleHQiLCAidW5kb0J1dHRvbiIsICJjcmVhdGVCdXR0b24iLCAib21pdEJ1dHRvbiIsICJlbmRCdXR0b24iLCAic2F2ZUFuZEVuZCIsICJyZWZyZXNoQnV0dG9uIiwgInRpdGxlQXNUZXh0QnV0dG9uIiwgImNob29zZVRpdGxlRnJvbVByb21wdCIsICJpbnRlbnRpb25hbExpbmtCdXR0b24iLCAiY2hvb3NlSW50ZW50aW9uYWxMaW5rIiwgImRpc2FtTmVlZGVkQnV0dG9uIiwgImNob29zZURpc2FtTmVlZGVkIiwgInJlbW92ZUxpbmtCdXR0b24iLCAiY2hvb3NlTGlua1JlbW92YWwiLCAidG9wIiwgImFwcGVuZCIsICJsZWZ0QnV0dG9ucyIsICJyaWdodEJ1dHRvbnMiLCAiYWxsQnV0dG9ucyIsICJ1cGRhdGVFZGl0Q291bnRlciIsICJ0b2dnbGVBY3Rpb25CdXR0b25zIiwgImZpbmQiLCAiYmVmb3JlIiwgImZhZGVJbiIsICJ3aW5kb3ciLCAiY2hlY2tBY3R1YWxDaGFuZ2VzIiwgIm9wdGlvblBhZ2VUaXRsZXMiLCAib3B0aW9uTWFya2VycyIsICJnZXREaXNhbU9wdGlvbnMiLCAiZWFjaCIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJsaW5rIiwgInRpdGxlIiwgImV4dHJhY3RQYWdlTmFtZSIsICJhdHRyIiwgImV2IiwgInByZXZlbnREZWZhdWx0IiwgImNob29zZVJlcGxhY2VtZW50IiwgImFmdGVyIiwgImxlbmd0aCIsICJ0YXJnZXRQYWdlIiwgImdldFRhcmdldFBhZ2UiLCAiZmV0Y2hSZWRpcmVjdHMiLCAiZG9uZSIsICJyZWRpcmVjdHMiLCAiZW5kVGFyZ2V0UGFnZSIsICJyZXNvbHZlUmVkaXJlY3QiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImVudHJpZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImlpIiwgIm9wdGlvblBhZ2VUaXRsZSIsICJ2YWx1ZSIsICJlbmRPcHRpb25UaXRsZSIsICJpc1NhbWVQYWdlIiwgImVyciIsICJlIiwgImYiLCAiZmFpbCIsICJkZWZlcnJlZCIsICJEZWZlcnJlZCIsICJyZXNvbHZlIiwgImV4ZWMiLCAiZGlzYW1UaXRsZSIsICJyZXBsYWNlIiwgImxvYWRQYWdlIiwgInBhZ2UiLCAibWlzc2luZyIsICJjb250ZW50IiwgInNhdmVQYWdlIiwgImRlc2NyaXB0aW9uIiwgInByb21pc2UiLCAiZmV0Y2hSaWdodHMiLCAicmlnaHRzIiwgImluY2x1ZGVzIiwgImFsd2F5cyIsICJhcHBseUNoYW5nZSIsICJzaGlmdCIsICJkYXRhIiwgImRvTGluayIsICJnZXRCYWNrbGlua3MiLCAiYmFja2xpbmtzIiwgInBhZ2VUaXRsZXMiLCAiX2kiLCAiX3BlbmRpbmdTYXZlcyIsICJlbCIsICJmaWx0ZXIiLCAidCIsICJyZW1vdmVEaXNhbSIsICJ1cGRhdGVDb250ZXh0IiwgImV4dHJhY3RMaW5rVG9QYWdlIiwgImVuZCIsICJwYWdlVGl0bGUiLCAiZXh0cmEiLCAiYWRkQ2hhbmdlIiwgInJlcGxhY2VMaW5rIiwgInByb21wdCIsICJsYXN0UGFnZSIsICJhdCIsICJ1bnNoaWZ0IiwgImNvbnRlbnRCZWZvcmUiLCAicG9wIiwgImVuYWJsZWQiLCAiYWZmZWN0ZWRCdXR0b25zIiwgIl9pMiIsICJfYWZmZWN0ZWRCdXR0b25zIiwgImJ1dHRvbiIsICJwcm9wIiwgInRvZ2dsZUZpbmlzaGVkTWVzc2FnZSIsICJzaG93IiwgInRvZ2dsZSIsICJmYWRlT3V0IiwgIm5vdGlmeUNvbXBsZXRpb24iLCAib2xkVGl0bGUiLCAib25lIiwgImh0bWwiLCAiZ2V0VXJsIiwgInJlZGlyZWN0IiwgImVzY2FwZSIsICJleHRyYWN0Q29udGV4dCIsICJlbXB0eSIsICJudW1MaW5lcyIsICJNYXRoIiwgImNlaWwiLCAiaGVpZ2h0IiwgIk51bWJlciIsICJwYXJzZUZsb2F0IiwgImNzcyIsICJBcnJheSIsICJmcm9tIiwgImpvaW4iLCAiaGFzRGlzYW1UZW1wbGF0ZSIsICJjb3VudEFjdHVhbGx5Q2hhbmdlZEZ1bGx5Q2hlY2tlZFBhZ2VzIiwgInRleHRDb250ZW50IiwgInNlY29uZHNUb0hITU1TUyIsICJwYWdlQ2hhbmdlIiwgImNoYW5nZVN1bW1hcmllcyIsICJzYXZlIiwgInNhdmVXaXRoQ29vbGRvd24iLCAiYXBwbHlBbGxDaGFuZ2VzIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgIm9sZENvbnRlbnQiLCAibGFzdFBhZ2VDaGFuZ2UiLCAiY291bnRBY3R1YWxDaGFuZ2VzIiwgImNoYW5nZUNvdW50IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImxhc3RDaGFuZ2UiLCAiY3VycmVudFRvb2xVSSIsICJyZW1vdmVDbGFzcyIsICJyZW1vdmUiLCAiY29tcGxldGUiLCAiZXJyb3JEZXNjcmlwdGlvbiIsICJlcnJvckJveCIsICJ1aUlzSW5QbGFjZSIsICJjb250YWlucyIsICJkb2N1bWVudEVsZW1lbnQiLCAibmV4dEVsZW1lbnQiLCAibmV3Q29udGVudCIsICJsaW5rU3RhcnQiLCAic2xpY2UiLCAibWF4IiwgImxpbmtFbmQiLCAiYWZ0ZXJEZXNjcmlwdGlvbiIsICJleHRyYWN0TGluayIsICJsYXN0SW5kZXgiLCAidGl0bGVSZWdleCIsICJ0ZW1wbGF0ZVJlZ2V4IiwgIm1hdGNoIiwgImluZGV4IiwgIl9tYXRjaCQiLCAicG9zc2libHlBbWJpZ3VvdXMiLCAiX2VuZCIsICJyZXN0IiwgInRlbXBsYXRlTWF0Y2giLCAidGVtcGxhdGVUaXRsZSIsICJnZXRDYW5vbmljYWxUaXRsZSIsICJkZXN0aW5hdGlvbnMiLCAid2dQYWdlTmFtZSIsICJfbWF0Y2gkMiIsICJ0aXRsZTEiLCAidGl0bGUyIiwgIlRpdGxlIiwgImdldFByZWZpeGVkVGV4dCIsICJjb250ZXh0U3RhcnQiLCAiY29udGV4dEVuZCIsICJjb250ZXh0UHJldiIsICJjb250ZXh0TmV4dCIsICJwYWdlTmFtZSIsICJleHRyYWN0UGFnZU5hbWVSYXciLCAic2VjdGlvblBvcyIsICJpbmRleE9mIiwgInNlY3Rpb24iLCAid2dTY3JpcHQiLCAid2dBcnRpY2xlUGF0aCIsICJoYXNDbGFzcyIsICJocmVmIiwgImdldFBhcmFtVmFsdWUiLCAicmVnZXgiLCAicmVnZXhSZXN1bHQiLCAiaXNBcnJheSIsICJkZWNvZGVVUklDb21wb25lbnQiLCAid2dDYXRlZ29yaWVzIiwgImNhdGVnb3JpZXMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiY2F0ZWdvcnkiLCAidG90YWxTZWNvbmRzIiwgImhobW1zcyIsICJob3VycyIsICJmbG9vciIsICJtaW51dGVzIiwgInNlY29uZHMiLCAicGFkIiwgInN0ciIsICJ6IiwgIndpZHRoIiwgInRvU3RyaW5nIiwgIm9uQ2xpY2siLCAidHlwZSIsICJwb3NzaWJsZVJlZGlyZWN0cyIsICJhcHBsaWVkUmVkaXJlY3QiLCAidmlzaXRlZFBhZ2VzIiwgImN1cnJlbnRQYWdlIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgInBvc3NpYmxlUmVkaXJlY3QiLCAidG8iLCAicGFyYW1zIiwgImFjdGlvbiIsICJsaXN0IiwgImJsdGl0bGUiLCAiYmxyZWRpcmVjdCIsICJibGxpbWl0IiwgImJsbmFtZXNwYWNlIiwgInF1ZXJ5IiwgImxpbmtUaXRsZXMiLCAiYmFja2xpbmtzUXVlcnkiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAicmVkaXJsaW5rcyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJjb2RlIiwgInJlamVjdCIsICJjdXJyZW50VGl0bGVzIiwgInJlc3RUaXRsZXMiLCAidGl0bGVzIiwgIl9xdWVyeSRyZWRpcmVjdHMiLCAidGhlc2VSZWRpcmVjdHMiLCAibWV0YSIsICJ1aXByb3AiLCAidXNlcmluZm8iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicnZwcm9wIiwgInJhd1BhZ2UiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgImJhc2VUaW1lU3RhbXAiLCAidGltZXN0YW1wIiwgInN0YXJ0VGltZVN0YW1wIiwgInN0YXJ0dGltZXN0YW1wIiwgImVkaXRUb2tlbiIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgImFyZ3MiLCAiZGZkIiwgImNoZWNrQW5kU2F2ZSIsICJtaWxsaXNTaW5jZUxhc3QiLCAiRGF0ZSIsICJub3ciLCAic2V0VGltZW91dCIsICJhcHBseSIsICJtaW5vckVkaXQiLCAiYm90RWRpdCIsICJ0b2tlbiIsICJiYXNldGltZXN0YW1wIiwgIndhdGNobGlzdCIsICJtaW5vciIsICJib3QiLCAicG9zdCJdCn0K
