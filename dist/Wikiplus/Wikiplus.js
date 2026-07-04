/**
 * SPDX-License-Identifier: CC-BY-SA-4.0 OR Apache-2.0
 * _addText: '{{Gadget Header|title=Wikiplus|license=CC-BY-SA-4.0|license2=Apache-2.0}}'
 *
 * Wikiplus
 *
 * @base {@link https://github.com/Wikiplus/Wikiplus}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/Wikiplus}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Wikiplus/}
 * @author Eridanus Sora (妹空酱)
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0} OR Apache-2.0 {@link http://www.apache.org/licenses/LICENSE-2.0}
 */

/**
 * Copyright 2014-2024 Eridanus Sora (妹空酱)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
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

// dist/Wikiplus/Wikiplus.js
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
//! src/Wikiplus/modules/utils/constants.js
var Constants;
var constants_default;
var init_constants = __esm({
  "src/Wikiplus/modules/utils/constants.js"() {
    "use strict";
    Constants = class {
      version = "4.1.0";
      get isArticle() {
        return window.mw.config.get("wgIsArticle");
      }
      get currentPageName() {
        return window.mw.config.get("wgPageName").replace(/ /g, "_");
      }
      get articleId() {
        return window.mw.config.get("wgArticleId");
      }
      get revisionId() {
        return window.mw.config.get("wgRevisionId");
      }
      get latestRevisionId() {
        return window.mw.config.get("wgCurRevisionId");
      }
      get articlePath() {
        return window.mw.config.get("wgArticlePath");
      }
      get scriptPath() {
        return window.mw.config.get("wgScriptPath");
      }
      get action() {
        return window.mw.config.get("wgAction");
      }
      get skin() {
        return window.mw.config.get("skin");
      }
      get userGroups() {
        return window.mw.config.get("wgUserGroups");
      }
      get wikiId() {
        return window.mw.config.get("wgWikiID");
      }
      userAgent = "Qiuwen/1.1 Wikiplus/".concat(this.version, " (").concat(this.wikiId, ")");
    };
    constants_default = new Constants();
  }
});
//! src/Wikiplus/modules/utils/requests.js
var Requests;
var requests_default;
var init_requests = __esm({
  "src/Wikiplus/modules/utils/requests.js"() {
    "use strict";
    init_constants();
    Requests = {
      base: "".concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/api.php"),
      get(query) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          for (var _i = 0, _Object$keys = Object.keys(query); _i < _Object$keys.length; _i++) {
            const key = _Object$keys[_i];
            url.searchParams.append(key, query[key]);
          }
          const response = yield fetch(url, {
            credentials: "same-origin",
            headers: {
              "Api-User-Agent": constants_default.userAgent
            }
          });
          return yield response.json();
        })();
      },
      post(payload) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          const form = new FormData();
          for (var _i2 = 0, _Object$entries = Object.entries(payload); _i2 < _Object$entries.length; _i2++) {
            const [key, value] = _Object$entries[_i2];
            form.append(key, value);
          }
          const response = yield fetch(url, {
            method: "POST",
            body: form,
            credentials: "same-origin",
            headers: {
              "Api-User-Agent": constants_default.userAgent
            }
          });
          return yield response.json();
        })();
      }
    };
    requests_default = Requests;
  }
});
//! src/Wikiplus/modules/utils/i18n.js
var I18n;
var i18n_default;
var init_i18n = __esm({
  "src/Wikiplus/modules/utils/i18n.js"() {
    "use strict";
    I18n = class {
      language;
      i18nData = {};
      sessionUpdateLog = [];
      constructor() {
        let language;
        try {
          language = JSON.parse(localStorage["Wikiplus_Settings"])["language"] || navigator.language.toLowerCase();
        } catch {
          language = (navigator.language || navigator.browserLanguage).replace(/han[st]-?/i, "").toLowerCase();
        }
        this.language = language;
        try {
          const i18nCache = JSON.parse(localStorage.getItem("Wikiplus_i18nCache"));
          for (var _i3 = 0, _Object$keys2 = Object.keys(i18nCache); _i3 < _Object$keys2.length; _i3++) {
            const key = _Object$keys2[_i3];
            this.i18nData[key] = i18nCache[key];
          }
        } catch {
          localStorage.setItem("Wikiplus_i18nCache", "{}");
        }
      }
      translate(key, placeholders = []) {
        let result = "";
        if (this.language in this.i18nData) {
          if (key in this.i18nData[this.language]) {
            result = this.i18nData[this.language][key];
          } else {
            this.loadLanguage(this.language);
            if (key in this.i18nData["en-us"]) {
              result = this.i18nData["en-us"][key];
            } else {
              result = key;
            }
          }
        } else {
          this.loadLanguage(this.language);
        }
        if (placeholders.length > 0) {
          var _iterator = _createForOfIteratorHelper(placeholders.entries()), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              const [index, placeholder] = _step.value;
              result = result.replace("$".concat(index + 1), placeholder);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return result;
      }
      loadLanguage(language) {
        var _this = this;
        return _asyncToGenerator(function* () {
          if (_this.sessionUpdateLog.includes(language)) {
            return;
          }
          try {
            const response = yield (yield fetch("https://gitcdn.qiuwen.net.cn/InterfaceAdmin/Wikiplus/raw/branch/dev/languages/".concat(language, ".json"))).json();
            const nowVersion = localStorage.getItem("Wikiplus_LanguageVersion") || "000";
            _this.sessionUpdateLog.push(language);
            if (response.__version !== nowVersion || !(language in _this.i18nData)) {
              console.info("Update ".concat(language, " support to version ").concat(response.__version));
              _this.i18nData[language] = response;
              localStorage.setItem("Wikiplus_i18nCache", JSON.stringify(_this.i18nData));
            }
          } catch {
          }
        })();
      }
    };
    i18n_default = new I18n();
  }
});
//! src/Wikiplus/modules/utils/log.js
var WikiplusError;
var Log;
var log_default;
var init_log = __esm({
  "src/Wikiplus/modules/utils/log.js"() {
    "use strict";
    init_i18n();
    WikiplusError = class extends Error {
      constructor(message, code) {
        super(message);
        this.code = code;
      }
    };
    Log = {
      debug(message = "") {
        console.debug("[Wikiplus-DEBUG] ".concat(message));
      },
      info(message = "") {
        console.info("[Wikiplus-INFO] ".concat(message));
      },
      error(errorCode, payloads = []) {
        let template = i18n_default.translate(errorCode);
        if (payloads.length > 0) {
          var _iterator2 = _createForOfIteratorHelper(payloads.entries()), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const [i, v] = _step2.value;
              template = template.replace(new RegExp("\\".concat(i + 1), "ig"), v);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        console.error("[Wikiplus-ERROR] ".concat(template));
        throw new WikiplusError("".concat(template), errorCode);
      }
    };
    log_default = Log;
  }
});
//! src/Wikiplus/modules/services/wiki.js
var Wiki;
var wiki_default;
var init_wiki = __esm({
  "src/Wikiplus/modules/services/wiki.js"() {
    "use strict";
    init_requests();
    init_log();
    init_i18n();
    Wiki = class {
      pageInfoCache = {};
      /**
       * 获得 Edit Token
       * Get Edit Token
       *
       * @returns {Promise<string>}
       */
      getEditToken() {
        return _asyncToGenerator(function* () {
          const response = yield requests_default.get({
            action: "query",
            meta: "tokens",
            format: "json"
          });
          if (response.query && response.query.tokens && response.query.tokens.csrftoken && response.query.tokens.csrftoken !== "+\\") {
            return response.query.tokens.csrftoken;
          }
          return log_default.error("fail_to_get_edittoken");
        })();
      }
      /**
       * 获得页面上一版本时间戳
       * Get the timestamp of the last revision of page specified.
       *
       * @param {params.string} title 页面名 / Pagename
       * @param {params.revisionId} revisionId 修订版本号 / Revision ID
       * @param {params.contentmodel} contentmodel 内容模型 / Content Model
       * @returns {Promise<string>}
       */
      getPageInfo(_x) {
        var _this2 = this;
        return _asyncToGenerator(function* ({
          title,
          revisionId
        }) {
          try {
            const params = {
              action: "query",
              prop: "revisions|info",
              rvprop: "timestamp|ids",
              format: "json"
            };
            if (revisionId) {
              params.revids = revisionId;
            } else if (title) {
              if (_this2.pageInfoCache[title]) {
                return {
                  timestamp: _this2.pageInfoCache[title].timestamp,
                  revisionId: _this2.pageInfoCache[title].revid,
                  contentmodel: _this2.pageInfoCache[title].contentmodel
                };
              }
              params.titles = title;
            }
            const response = yield requests_default.get(params);
            if (response.query && response.query.pages) {
              const pageKey = Object.keys(response.query.pages)[0];
              const contentmodel = response.query.pages[pageKey].contentmodel;
              if (pageKey === "-1") {
                _this2.pageInfoCache[title] = {
                  contentmodel
                };
                return {
                  contentmodel
                };
              }
              const pageInfo = response.query.pages[pageKey].revisions[0];
              if (title) {
                _this2.pageInfoCache[title] = {
                  ...pageInfo,
                  contentmodel
                };
              }
              return {
                timestamp: pageInfo.timestamp,
                revisionId: pageInfo.revid,
                contentmodel
              };
            }
          } catch {
            log_default.error("fail_to_get_edittoken");
          }
        }).apply(this, arguments);
      }
      /**
       * 获得页面的 Wikitext
       * Get wikitext of the page.
       *
       * @param {string} title title
       * @param {Object} config
       * @param {string} config.revisionId 版本号
       * @param {string} config.section 段落号
       * @return {Promise<string>} wikitext内容
       */
      getWikiText(_x2) {
        return _asyncToGenerator(function* ({
          section,
          revisionId
        }) {
          try {
            const params = {
              action: "query",
              prop: "revisions",
              rvprop: "content",
              format: "json",
              revids: revisionId
            };
            if (revisionId) {
              params.revids = revisionId;
            }
            if (section) {
              params.rvsection = section;
            }
            const response = yield requests_default.get(params);
            if (response.query && response.query.pages) {
              if (Object.keys(response.query.pages)[0] === "-1") {
                return "";
              }
              const pageInfo = response.query.pages[Object.keys(response.query.pages)[0]].revisions[0];
              return pageInfo["*"];
            }
          } catch {
            log_default.error("fail_to_get_wikitext");
          }
        }).apply(this, arguments);
      }
      /**
       * 解析 Wikitext
       *
       * @param {string} wikitext wikitext
       * @param {string} title 页面标题
       * @param {Object} config 设置
       * @return {Promise<string>} 解析结果 HTML
       */
      parseWikiText(_x3) {
        return _asyncToGenerator(function* (wikitext, title = "", config = {}) {
          try {
            const response = yield requests_default.post({
              format: "json",
              action: "parse",
              text: wikitext,
              title,
              pst: "true"
            });
            if (response.parse && response.parse.text) {
              return response.parse.text["*"];
            }
          } catch {
            log_default.error("cant_parse_wikitext");
          }
        }).apply(this, arguments);
      }
      /**
       * 编辑页面
       *
       * @param root0
       * @param root0.title
       * @param root0.content
       * @param root0.editToken
       * @param root0.timestamp
       * @param root0.config
       * @param root0.additionalConfig
       */
      edit() {
        return _asyncToGenerator(function* ({
          title,
          content,
          editToken,
          timestamp,
          config = {},
          additionalConfig = {}
        } = {}) {
          let response;
          try {
            response = yield requests_default.post({
              action: "edit",
              format: "json",
              text: content,
              title,
              token: editToken,
              ...timestamp ? {
                basetimestamp: timestamp
              } : {},
              ...config,
              ...additionalConfig
            });
          } catch {
            log_default.error("network_edit_error");
          }
          if (response.edit) {
            if (response.edit.result === "Success") {
              return true;
            }
            if (response.edit.code) {
              throw new Error("\n                        ".concat(i18n_default.translate("hit_abusefilter"), ":").concat(response.edit.info.replace("/Hit AbuseFilter: /ig", ""), '\n                        <br>\n                        <div style="font-size: smaller;">').concat(response.edit.warning, "</div>\n                    "));
            } else {
              log_default.error("unknown_edit_error");
            }
          } else if (response.error && response.error.code) {
            log_default.error(response.error.code);
          } else if (response.code) {
            log_default.error(response.code);
          } else {
            log_default.error("unknown_edit_error");
          }
        }).apply(this, arguments);
      }
      /**
       * 获得指定页面最新修订编号
       * Get latest revisionId of a page.
       *
       * @param {*} title
       */
      getLatestRevisionIdForPage(title) {
        var _this3 = this;
        return _asyncToGenerator(function* () {
          const {
            revisionId
          } = yield _this3.getPageInfo({
            title
          });
          return revisionId;
        })();
      }
    };
    wiki_default = new Wiki();
  }
});
//! src/Wikiplus/modules/core/page.js
var Page;
var page_default;
var init_page = __esm({
  "src/Wikiplus/modules/core/page.js"() {
    "use strict";
    init_wiki();
    init_log();
    Page = class {
      timestamp;
      editToken;
      title;
      revisionId;
      inited = false;
      isNewPage = false;
      contentmodel = "wikitext";
      sectionCache = {};
      /**
       * @param {params.title} 页面标题 Page Name (optional)
       * @param {params.revisionId} 页面修订编号 Revision Id
       * @param {params.contentmodel} 页面内容模型 Content Model
       */
      constructor({
        title,
        revisionId
      }) {
        this.title = title;
        this.revisionId = revisionId;
        this.isNewPage = !revisionId;
      }
      /**
       * 初始化 获得页面EditToken和初始TimeStamp
       * Initialization.
       *
       * @param {string} editToken (optional) 如果提供了editToken，将不会再获取
       */
      init() {
        var _this4 = this;
        return _asyncToGenerator(function* ({
          editToken = ""
        } = {}) {
          const promiseArr = [_this4.getTimestamp(), _this4.getContentModel()];
          if (!editToken) {
            promiseArr.push(_this4.getEditToken());
          }
          yield Promise.all(promiseArr);
          _this4.inited = true;
          log_default.info("Page initialization for ".concat(_this4.title, "#").concat(_this4.revisionId, " finished."));
        }).apply(this, arguments);
      }
      /**
       * 获得 EditToken
       * Get EditToken
       */
      getEditToken() {
        var _this5 = this;
        return _asyncToGenerator(function* () {
          yield mw.loader.using("mediawiki.user");
          if (mw.user.tokens.get("csrfToken") && mw.user.tokens.get("csrfToken") !== "+\\") {
            _this5.editToken = mw.user.tokens.get("csrfToken");
            return;
          }
          _this5.editToken = yield wiki_default.getEditToken();
        })();
      }
      /**
       * 获得编辑基准时间戳
       * Get Base Timestamp
       */
      getTimestamp() {
        var _this6 = this;
        return _asyncToGenerator(function* () {
          const {
            timestamp,
            revisionId
          } = yield wiki_default.getPageInfo({
            revisionId: _this6.revisionId,
            title: _this6.title
          });
          _this6.timestamp = timestamp;
          if (revisionId) {
            _this6.revisionId = revisionId;
            _this6.isNewPage = false;
          }
        })();
      }
      /**
       * 获得页面内容模型
       *
       * @param {Object} config
       * @param {string} config.revisionId
       */
      getContentModel() {
        var _this7 = this;
        return _asyncToGenerator(function* () {
          const {
            contentmodel
          } = yield wiki_default.getPageInfo({
            revisionId: _this7.revisionId,
            title: _this7.title
          });
          _this7.contentmodel = contentmodel || "wikitext";
        })();
      }
      /**
       * 获得 WikiText
       *
       * @param {Object} config
       * @param {string} config.section
       * @param {string} config.revisionId
       */
      getWikiText() {
        var _this8 = this;
        return _asyncToGenerator(function* ({
          section = ""
        } = {}) {
          const sec = section === -1 ? "" : section;
          if (_this8.sectionCache[sec]) {
            return _this8.sectionCache[sec];
          }
          const wikiText = yield wiki_default.getWikiText({
            section: sec,
            revisionId: _this8.revisionId
          });
          log_default.info("Wikitext of ".concat(_this8.title, "#").concat(section, " fetched."));
          _this8.sectionCache[sec] = wikiText;
          return wikiText;
        }).apply(this, arguments);
      }
      /**
       * 解析 WikiText
       *
       * @param {string} wikitext
       */
      parseWikiText(wikitext) {
        var _this9 = this;
        return _asyncToGenerator(function* () {
          return wiki_default.parseWikiText(wikitext, _this9.title);
        })();
      }
      /**
       * 编辑页面
       *
       * @param {*} config
       * @param payload
       */
      edit(payload) {
        var _this0 = this;
        return _asyncToGenerator(function* () {
          if (!_this0.editToken) {
            log_default.error("fail_to_get_edittoken");
            return;
          }
          if (!_this0.timestamp && !_this0.isNewPage) {
            log_default.error("fail_to_get_timestamp");
            return;
          }
          return wiki_default.edit({
            title: _this0.title,
            editToken: _this0.editToken,
            ..._this0.timestamp ? {
              timestamp: _this0.timestamp
            } : {},
            ...payload,
            additionalConfig: {
              ..._this0.isNewPage ? {
                createonly: _this0.isNewPage
              } : {}
            }
          });
        })();
      }
    };
    page_default = Page;
  }
});
//! src/Wikiplus/modules/core/notification.js
var Notification;
var notification_default;
var init_notification = __esm({
  "src/Wikiplus/modules/core/notification.js"() {
    "use strict";
    Notification = class {
      constructor() {
        this.init();
      }
      init() {
        $("body").append('<div id="MoeNotification"></div>');
      }
      display(text = "喵~", type = "success", callback = () => {
      }) {
        $("#MoeNotification").append($("<div>").addClass("MoeNotification-notice").addClass("MoeNotification-notice-".concat(type)).append("<span>".concat(text, "</span>")));
        $("#MoeNotification").find(".MoeNotification-notice").last().fadeIn(300);
        this.bind();
        this.clear();
        callback($("#MoeNotification").find(".MoeNotification-notice").last());
      }
      bind() {
        const self = this;
        $(".MoeNotification-notice").on("mouseover", function() {
          self.slideLeft($(this));
        });
      }
      success(text, callback) {
        this.display(text, "success", callback);
      }
      warning(text, callback) {
        this.display(text, "warning", callback);
      }
      error(text, callback) {
        this.display(text, "error", callback);
      }
      clear() {
        if ($(".MoeNotification-notice").length >= 10) {
          $("#MoeNotification").children().first().fadeOut(150, function() {
            $(this).remove();
          });
          setTimeout(this.clear, 300);
        }
      }
      empty(f) {
        $(".MoeNotification-notice").each(function(i) {
          if (typeof f === "function") {
            const ele = $(this);
            setTimeout(() => {
              f(ele);
            }, 200 * i);
          } else {
            $(this).delay(i * 200).fadeOut("fast", function() {
              $(this).remove();
            });
          }
        });
      }
      slideLeft(ele, speed) {
        ele.css("position", "relative");
        ele.animate({
          left: "-200%"
        }, speed || 150, function() {
          $(this).fadeOut("fast", function() {
            $(this).remove();
          });
        });
      }
    };
    notification_default = new Notification();
  }
});
//! src/Wikiplus/modules/utils/sleep.js
var sleep;
var sleep_default;
var init_sleep = __esm({
  "src/Wikiplus/modules/utils/sleep.js"() {
    "use strict";
    sleep = (time) => {
      return new Promise((resolve) => {
        return setTimeout(resolve, time);
      });
    };
    sleep_default = sleep;
  }
});
//! src/Wikiplus/modules/utils/helpers.js
function parseQuery(url) {
  const reg = /(([^?&=]+)(?:=([^?&=]*))*)/g;
  const params = {};
  let match;
  while (match = reg.exec(url)) {
    try {
      params[match[2]] = decodeURIComponent(match[3]);
    } catch {
      params[match[2]] = match[3];
    }
  }
  return params;
}
var init_helpers = __esm({
  "src/Wikiplus/modules/utils/helpers.js"() {
    "use strict";
  }
});
//! src/Wikiplus/modules/core/ui.js
var UI;
var ui_default;
var init_ui = __esm({
  "src/Wikiplus/modules/core/ui.js"() {
    "use strict";
    init_constants();
    init_notification();
    init_i18n();
    init_log();
    init_sleep();
    init_helpers();
    UI = class {
      quickEditPanelVisible = false;
      scrollTop = 0;
      /**
       * 创建居中对话框
       *
       * @param {string} title 窗口标题
       * @param {string | JQuery<HTMLElement>} content 内容
       * @param {*} width 宽度
       * @param {*} callback 回调函数
       */
      createDialogBox(title = "Wikiplus", content = "", width = 600, callback = () => {
      }) {
        if ($(".Wikiplus-InterBox").length > 0) {
          $(".Wikiplus-InterBox").each(function() {
            $(this).remove();
          });
        }
        const clientWidth = window.innerWidth;
        const clientHeight = window.innerHeight;
        const dialogWidth = Math.min(clientWidth, width);
        const dialogBox = $("<div>").addClass("Wikiplus-InterBox").css({
          "margin-left": clientWidth / 2 - dialogWidth / 2,
          top: $(document).scrollTop() + clientHeight * 0.2,
          display: "none"
        }).append($("<div>").addClass("Wikiplus-InterBox-Header").html(title)).append($("<div>").addClass("Wikiplus-InterBox-Content").append(content)).append($("<span>").text("×").addClass("Wikiplus-InterBox-Close"));
        $("body").append(dialogBox);
        $(".Wikiplus-InterBox").width(dialogWidth);
        $(".Wikiplus-InterBox-Close").on("click", function() {
          $(this).parent().fadeOut("fast", function() {
            window.addEventListener("close", window.onbeforeunload = void 0);
            $(this).remove();
          });
        });
        const bindDragging = function(element) {
          element.mousedown((e) => {
            const baseX = e.clientX;
            const baseY = e.clientY;
            const baseOffsetX = element.parent().offset().left;
            const baseOffsetY = element.parent().offset().top;
            $(document).on("mousemove", (e2) => {
              element.parent().css({
                "margin-left": baseOffsetX + e2.clientX - baseX,
                top: baseOffsetY + e2.clientY - baseY
              });
            });
            $(document).on("mouseup", () => {
              element.unbind("mousedown");
              $(document).off("mousemove");
              $(document).off("mouseup");
              bindDragging(element);
            });
          });
        };
        bindDragging($(".Wikiplus-InterBox-Header"));
        $(".Wikiplus-InterBox").fadeIn(500);
        callback();
        return dialogBox;
      }
      /**
       * 在搜索框左侧「更多」菜单内添加按钮
       * Add a button in "More" menu (left of the search bar)
       *
       * @param {string} text 按钮名 Button text
       * @param {string} id 按钮id Button id
       * @return {JQuery<HTMLElement>} button
       */
      addFunctionButton(text, id) {
        let button;
        switch (constants_default.skin) {
          case "minerva":
            button = $("<li>").attr("id", id).addClass("toggle-list-item").append($("<a>").addClass("mw-ui-icon mw-ui-icon-before toggle-list-item__anchor").append($("<span>").attr("href", "javascript:void(0);").addClass("toggle-list-item__label").text(text)));
            break;
          case "moeskin":
            button = $("<li>").addClass("Wikiplus-More-Function-Button").attr("id", id).append($("<a>").attr("href", "javascript:void(0);").text(text));
            break;
          default:
            button = $("<li>").addClass("mw-list-item").addClass("vector-tab-noicon").attr("id", id).append($("<a>").attr("href", "javascript:void(0);").text(text));
        }
        if (constants_default.skin === "minerva" && $("#p-tb").length > 0) {
          $("#p-tb").append(button);
          return $("#".concat(id));
        } else if (constants_default.skin === "moeskin") {
          $(".more-actions-list").first().append(button);
          return $("#".concat(id));
        } else if ($("#p-cactions").length > 0) {
          $("#p-cactions ul").append(button);
          return $("#".concat(id));
        }
        log_default.info(i18n_default.translate("cant_add_funcbtn"));
      }
      /**
       * 插入快速重定向按钮
       *
       * @param {*} onClick
       */
      insertSimpleRedirectButton(onClick = () => {
      }) {
        const button = this.addFunctionButton(i18n_default.translate("redirect_from"), "Wikiplus-SR-Intro");
        if (button) {
          button.on("click", onClick);
        }
      }
      /**
       * 插入设置面板按钮
       *
       * @param {*} onClick
       */
      insertSettingsPanelButton(onClick = () => {
      }) {
        const button = this.addFunctionButton(i18n_default.translate("wikiplus_settings"), "Wikiplus-Settings-Intro");
        if (button) {
          button.on("click", onClick);
        }
      }
      /**
       * 插入顶部快速编辑按钮
       * Insert QuickEdit button besides page edit button.
       *
       * @param onClick
       */
      insertTopQuickEditEntry(onClick) {
        const topBtn = $("<li>").attr("id", "Wikiplus-Edit-TopBtn").attr("class", "mw-list-item");
        const topBtnLink = $("<a>").attr("href", "javascript:void(0)").text("".concat(i18n_default.translate("quickedit_topbtn")));
        topBtn.append(topBtnLink);
        switch (constants_default.skin) {
          case "minerva":
            topBtn.css({
              "align-items": "center",
              display: "flex"
            });
            topBtn.find("span").addClass("page-actions-menu__list-item");
            topBtn.find("a").addClass("mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 mw-ui-icon-with-label-desktop").css("vertical-align", "middle");
            break;
          case "vector-2022":
            topBtn.addClass("vector-tab-noicon");
            break;
          case "vector":
            topBtn.append($("<span>").append(topBtnLink));
            break;
          default:
        }
        $(topBtn).on("click", () => {
          onClick({
            sectionNumber: -1,
            targetPageName: constants_default.currentPageName
          });
        });
        if ($("#ca-edit").length > 0 && $("#Wikiplus-Edit-TopBtn").length === 0) {
          constants_default.skin === "minerva" ? $("#ca-edit").parent().after(topBtn) : $("#ca-edit").after(topBtn);
        }
      }
      /**
       * 插入段落快速编辑按钮
       * Insert QuickEdit buttons for each section.
       *
       * @param onClick
       */
      insertSectionQuickEditEntries(onClick = () => {
      }) {
        const sectionBtn = constants_default.skin === "minerva" ? $("<span>").append($("<a>").addClass("Wikiplus-Edit-SectionBtn mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 edit-page mw-ui-icon-flush-right").css("margin-left", "0.75em").attr("href", "javascript:void(0)").attr("title", i18n_default.translate("quickedit_sectionbtn"))) : $("<span>").append($("<span>").addClass("mw-editsection-divider").text(" | ")).append($("<a>").addClass("Wikiplus-Edit-SectionBtn").attr("href", "javascript:void(0)").text(i18n_default.translate("quickedit_sectionbtn")));
        $(".mw-editsection").each(function(i) {
          try {
            const editURL = $(this).find("a[href*='action=edit']").first().attr("href");
            const sectionNumber = editURL.match(/&[ve]*section\=([^&]+)/)[1].replace(/T-/gi, "");
            const sectionTargetName = decodeURIComponent(editURL.match(/title=(.+?)&/)[1]);
            const cloneNode = $(this).prev().clone();
            cloneNode.find(".mw-headline-number").remove();
            const sectionName = cloneNode.text().trim();
            const _sectionBtn = sectionBtn.clone();
            _sectionBtn.find(".Wikiplus-Edit-SectionBtn").on("click", () => {
              onClick({
                sectionNumber,
                sectionName,
                targetPageName: sectionTargetName
              });
            });
            constants_default.skin === "minerva" ? $(this).append(_sectionBtn) : $(this).find(".mw-editsection-bracket").last().before(_sectionBtn);
          } catch {
            log_default.error("fail_to_init_quickedit");
          }
        });
      }
      /**
       * 插入任意链接编辑入口
       *
       * @param {*} onClick
       */
      insertLinkEditEntries(onClick = () => {
      }) {
        $("#mw-content-text a.external").each(function(i) {
          const url = $(this).attr("href");
          const params = parseQuery(url);
          if (params.action === "edit" && params.title !== void 0 && params.section !== "new") {
            $(this).after($("<a>").attr({
              href: "javascript:void(0)",
              class: "Wikiplus-Edit-EveryWhereBtn"
            }).text("(".concat(i18n_default.translate("quickedit_sectionbtn"), ")")).on("click", () => {
              var _params$section;
              onClick({
                targetPageName: params.title,
                sectionNumber: (_params$section = params.section) !== null && _params$section !== void 0 ? _params$section : -1
              });
            }));
          }
        });
      }
      showQuickEditPanel({
        title = "",
        content = "",
        summary = "",
        onBack = () => {
        },
        onParse = () => {
        },
        onEdit = () => {
        },
        escExit = false
      }) {
        const self = this;
        this.scrollTop = $(document).scrollTop();
        if (this.quickEditPanelVisible) {
          this.hideQuickEditPanel();
        }
        this.quickEditPanelVisible = true;
        window.addEventListener("close", window.onbeforeunload = function() {
          return "".concat(i18n_default.translate("onclose_confirm"));
        });
        const isNewPage = $(".noarticletext").length > 0;
        const backBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Back").addClass("Wikiplus-Btn").text("".concat(i18n_default.translate("back")));
        const jumpBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Jump").addClass("Wikiplus-Btn").append($("<a>").attr("href", "#Wikiplus-Quickedit").text("".concat(i18n_default.translate("goto_editbox"))));
        const inputBox = $("<textarea>").attr("id", "Wikiplus-Quickedit");
        const previewBox = $("<div>").attr("id", "Wikiplus-Quickedit-Preview-Output");
        const summaryBox = $("<input>").attr("id", "Wikiplus-Quickedit-Summary-Input").attr("placeholder", "".concat(i18n_default.translate("summary_placehold")));
        const editSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Submit").text("".concat(i18n_default.translate(isNewPage ? "publish_page" : "publish_change"), "(Ctrl+S)"));
        const previewSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Preview-Submit").text("".concat(i18n_default.translate("preview")));
        const isMinorEdit = $("<div>").append($("<input>").attr({
          type: "checkbox",
          id: "Wikiplus-Quickedit-MinorEdit"
        })).append($("<label>").attr("for", "Wikiplus-Quickedit-MinorEdit").text("".concat(i18n_default.translate("mark_minoredit"), "(Ctrl+Shift+S)"))).css({
          margin: "5px 5px 5px -3px",
          display: "inline"
        });
        const editBody = $("<div>").append(backBtn, jumpBtn, previewBox, inputBox, summaryBox, $("<br>"), isMinorEdit, editSubmitBtn, previewSubmitBtn);
        this.createDialogBox(title, editBody, 1e3, () => {
          $("#Wikiplus-Quickedit").val(content);
          $("#Wikiplus-Quickedit-Summary-Input").val(summary);
        });
        $("#Wikiplus-Quickedit-Back").on("click", onBack);
        $("#Wikiplus-Quickedit-Preview-Submit").on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const preloadBanner = $("<div>").addClass("Wikiplus-Banner").text("".concat(i18n_default.translate("loading_preview")));
          const wikiText = $("#Wikiplus-Quickedit").val();
          $(this).attr("disabled", "disabled");
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(preloadBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          $("html, body").animate({
            scrollTop: self.scrollTop
          }, 200);
          const result = yield onParse(wikiText);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut("100", () => {
            $("#Wikiplus-Quickedit-Preview-Output").html('<hr><div class="mw-body-content">'.concat(result, "</div><hr>"));
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn("100");
            $("#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          });
        }));
        $("#Wikiplus-Quickedit-Submit").on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const timer = Date.now();
          const editBanner = $("<div>").addClass("Wikiplus-Banner").text("".concat(i18n_default.translate("submitting_edit")));
          const payload = {
            summary: $("#Wikiplus-Quickedit-Summary-Input").val(),
            content: $("#Wikiplus-Quickedit").val(),
            isMinorEdit: $("#Wikiplus-Quickedit-MinorEdit").is(":checked")
          };
          $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").attr("disabled", "disabled");
          $("html, body").animate({
            scrollTop: self.scrollTop
          }, 200);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(editBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          try {
            yield onEdit(payload);
            const useTime = Date.now() - timer;
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").css("background", "rgba(6, 239, 92, 0.44)");
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").text("".concat(i18n_default.translate("edit_success", [useTime.toString()])));
            window.addEventListener("close", window.onbeforeunload = void 0);
            setTimeout(() => {
              location.reload();
            }, 500);
          } catch (error) {
            console.log(error);
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").html(error.message);
          } finally {
            $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          }
        }));
        $("#Wikiplus-Quickedit,#Wikiplus-Quickedit-Summary-Input,#Wikiplus-Quickedit-MinorEdit").on("keydown", (e) => {
          if (e.ctrlKey && e.which === 83) {
            if (e.shiftKey) {
              $("#Wikiplus-Quickedit-MinorEdit").trigger("click");
            }
            $("#Wikiplus-Quickedit-Submit").trigger("click");
            e.preventDefault();
            e.stopPropagation();
          }
        });
        if (escExit) {
          $(document).on("keydown", (e) => {
            if (e.which === 27) {
              $("#Wikiplus-Quickedit-Back").trigger("click");
            }
          });
        }
      }
      hideQuickEditPanel() {
        this.quickEditPanelVisible = false;
        $(".Wikiplus-InterBox").fadeOut("fast", function() {
          window.addEventListener("close", window.onbeforeunload = void 0);
          $(this).remove();
        });
      }
      /**
       * 显示快速重定向弹窗
       *
       * @param root0
       * @param root0.onEdit
       * @param root0.onSuccess
       */
      showSimpleRedirectPanel({
        onEdit = () => {
        },
        onSuccess = () => {
        }
      } = {}) {
        var _this1 = this;
        const input = $("<input>").addClass("Wikiplus-InterBox-Input").attr("id", "Wikiplus-SR-Title");
        const summaryInputTitle = $("<p>").text(i18n_default.translate("redirect_summary_desc"));
        const summaryInput = $("<input>").addClass("Wikiplus-InterBox-Input").attr("id", "Wikiplus-SR-Summary");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Cancel").text(i18n_default.translate("cancel"));
        const continueBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Continue").text(i18n_default.translate("continue"));
        const content = $("<div>").append(input).append(summaryInputTitle).append(summaryInput).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("redirect_desc"), content, 600);
        applyBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const title = $("#Wikiplus-SR-Title").val();
          const summary = $("#Wikiplus-SR-Summary").val();
          $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(i18n_default.translate("submitting_edit"), "</div>"));
          try {
            yield onEdit({
              title,
              summary,
              forceOverwrite: false
            });
            $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
            _this1.hideSimpleRedirectPanel(dialog);
            onSuccess({
              title
            });
          } catch (error) {
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").text(error.message);
            if (error.code === "articleexists") {
              $(".Wikiplus-InterBox-Content").append($("<hr>")).append(continueBtn).append(cancelBtn);
              cancelBtn.on("click", () => {
                _this1.hideSimpleRedirectPanel(dialog);
              });
              continueBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
                $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(i18n_default.translate("submitting_edit"), "</div>"));
                try {
                  yield onEdit({
                    title,
                    summary,
                    forceOverwrite: true
                  });
                  $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
                  _this1.hideSimpleRedirectPanel(dialog);
                  onSuccess({
                    title
                  });
                } catch (error2) {
                  $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
                  $(".Wikiplus-Banner").text(error2.message);
                }
              }));
            }
          }
        }));
        cancelBtn.on("click", () => {
          this.hideSimpleRedirectPanel(dialog);
        });
      }
      /**
       * 隐藏快速重定向弹窗
       *
       * @param {*} dialog
       */
      hideSimpleRedirectPanel(dialog = $("body")) {
        dialog.find(".Wikiplus-InterBox-Close").trigger("click");
      }
      showSettingsPanel({
        onSubmit = () => {
        }
      } = {}) {
        var _this10 = this;
        const input = $("<textarea>").attr("id", "Wikiplus-Setting-Input").attr("rows", "10");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Cancel").text(i18n_default.translate("cancel"));
        const content = $("<div>").append(input).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("wikiplus_settings_desc"), content, 600, () => {
          if (localStorage.Wikiplus_Settings) {
            $("#Wikiplus-Setting-Input").val(localStorage.Wikiplus_Settings);
            try {
              const settings = JSON.parse(localStorage.Wikiplus_Settings);
              $("#Wikiplus-Setting-Input").val(JSON.stringify(settings, null, 2));
            } catch {
            }
          } else {
            $("#Wikiplus-Setting-Input").attr("placeholder", i18n_default.translate("wikiplus_settings_placeholder"));
          }
        });
        applyBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const savedBanner = $("<div>").addClass("Wikiplus-Banner").text(i18n_default.translate("wikiplus_settings_saved"));
          const settings = $("#Wikiplus-Setting-Input").val();
          try {
            onSubmit({
              settings
            });
            $(".Wikiplus-InterBox-Content").html("").append(savedBanner);
            yield sleep_default(1500);
            _this10.hideSettingsPanel(dialog);
          } catch {
            notification_default.error(i18n_default.translate("wikiplus_settings_grammar_error"));
          }
        }));
        cancelBtn.on("click", () => {
          this.hideSettingsPanel(dialog);
        });
      }
      hideSettingsPanel(dialog = $("body")) {
        dialog.find(".Wikiplus-InterBox-Close").trigger("click");
      }
      bindPreloadEvents(onPreload) {
        $("#toc").children("ul").find("a").each(function(i) {
          $(this).on("mouseover", function() {
            $(this).off("mouseover");
            onPreload({
              sectionNumber: i + 1
            });
          });
        });
      }
    };
    ui_default = new UI();
  }
});
//! src/Wikiplus/modules/utils/settings.js
var Settings;
var settings_default;
var init_settings = __esm({
  "src/Wikiplus/modules/utils/settings.js"() {
    "use strict";
    Settings = class {
      getSetting(key, object = {}) {
        const w = object;
        let settings;
        try {
          settings = JSON.parse(localStorage["Wikiplus_Settings"]);
        } catch {
          return;
        }
        try {
          const customSettingFunction = new Function("return ".concat(settings[key]));
          if (typeof customSettingFunction === "function") {
            try {
              if (customSettingFunction()(w) === true) {
              } else {
                return customSettingFunction()(w) || settings[key];
              }
            } catch {
              return settings[key];
            }
          } else {
            return settings[key];
          }
        } catch {
          try {
            let result = settings[key];
            for (var _i4 = 0, _Object$keys3 = Object.keys(object); _i4 < _Object$keys3.length; _i4++) {
              const key2 = _Object$keys3[_i4];
              result = result.replace("${".concat(key2, "}"), object[key2]);
            }
            return result;
          } catch {
          }
        }
      }
    };
    settings_default = new Settings();
  }
});
//! src/Wikiplus/modules/wikiplus.less
var init_wikiplus = __esm({
  "src/Wikiplus/modules/wikiplus.less"() {
  }
});
//! src/Wikiplus/modules/index.js
var modules_exports = {};
var init_modules = __esm({
  "src/Wikiplus/modules/index.js"() {
    "use strict";
    init_page();
    init_ui();
    init_notification();
    init_wiki();
    init_settings();
    init_log();
    init_constants();
    init_i18n();
    init_wikiplus();
    $(/* @__PURE__ */ _asyncToGenerator(function* () {
      const Pages = {};
      const isCurrentPageEmpty = $(".noarticletext").length > 0 && constants_default.articleId === 0;
      const getPage = /* @__PURE__ */ (function() {
        var _ref7 = _asyncToGenerator(function* ({
          revisionId: revisionId2,
          title
        }) {
          if (Pages[revisionId2]) {
            return Pages[revisionId2];
          }
          const newPage = new page_default({
            revisionId: revisionId2,
            title
          });
          yield newPage.init();
          Pages[revisionId2] = newPage;
          return Pages[revisionId2];
        });
        return function getPage2(_x4) {
          return _ref7.apply(this, arguments);
        };
      })();
      log_default.info("Wikiplus now loading. Version: ".concat(constants_default.version));
      if (!window.mw) {
        console.log("Mediawiki JavaScript not loaded or not a Mediawiki website.");
        return;
      }
      if (!constants_default.userGroups.includes("autoconfirmed") && !constants_default.userGroups.includes("confirmed")) {
        notification_default.error(i18n_default.translate("not_autoconfirmed_user"));
        log_default.info(i18n_default.translate("not_autoconfirmed_user"));
        return;
      }
      if (!constants_default.isArticle || constants_default.action !== "view") {
        log_default.info("Not an editable page. Stop initialization.");
        return;
      }
      window._WikiplusPages = Pages;
      const currentPageName = constants_default.currentPageName;
      const revisionId = constants_default.revisionId;
      const currentPage = yield getPage({
        revisionId,
        title: currentPageName
      });
      const handleQuickEditButtonClicked = /* @__PURE__ */ (function() {
        var _ref8 = _asyncToGenerator(function* ({
          sectionNumber,
          sectionName,
          targetPageName
        } = {}) {
          const isOtherPage = targetPageName !== currentPageName;
          if (isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId) {
            log_default.error("cross_page_history_revision_edit_warning");
            return;
          }
          const revisionId2 = isOtherPage ? yield wiki_default.getLatestRevisionIdForPage(targetPageName) : constants_default.revisionId;
          const page = yield getPage({
            revisionId: revisionId2,
            title: targetPageName
          });
          const customSummary = settings_default.getSetting("defaultSummary", {
            sectionName,
            sectionNumber,
            sectionTargetName: targetPageName
          });
          const summary = customSummary || (sectionName ? "/* ".concat(sectionName, " */ ").concat(i18n_default.translate("default_summary_suffix")) : i18n_default.translate("default_summary_suffix"));
          const timer = setTimeout(() => {
            notification_default.success(i18n_default.translate("loading"));
          }, 200);
          const sectionContent = yield page.getWikiText({
            section: sectionNumber
          });
          const isEditHistoryRevision = !isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId;
          const escToExit = settings_default.getSetting("esc_to_exit_quickedit") === true || // 兼容老设置key
          settings_default.getSetting("esc_to_exit_quickedit") === "true" || settings_default.getSetting("escToExitQuickEdit") === true || settings_default.getSetting("escToExitQuickEdit") === "true";
          const customEditTags = settings_default.getSetting("custom_edit_tags");
          const defaultEditTags = [];
          const editTags = customEditTags !== null && customEditTags !== void 0 && customEditTags.length ? customEditTags : defaultEditTags;
          clearTimeout(timer);
          notification_default.empty();
          if (isEditHistoryRevision) {
            notification_default.warning(i18n_default.translate("history_edit_warning"));
          }
          const shouldShowCreatePageTip = isOtherPage ? !revisionId2 : isCurrentPageEmpty;
          ui_default.showQuickEditPanel({
            title: "".concat(i18n_default.translate("quickedit_topbtn")).concat(isEditHistoryRevision ? i18n_default.translate("history_edit_warning") : ""),
            content: shouldShowCreatePageTip ? i18n_default.translate("create_page_tip") : sectionContent,
            summary,
            onBack: ui_default.hideQuickEditPanel,
            onParse: (wikiText) => {
              return page.parseWikiText(wikiText);
            },
            onEdit: (function() {
              var _ref9 = _asyncToGenerator(function* ({
                content,
                summary: summary2,
                isMinorEdit
              }) {
                const editPayload = {
                  content,
                  config: {
                    summary: summary2,
                    ...sectionNumber === -1 ? {} : {
                      section: sectionNumber
                    },
                    ...editTags.length ? {
                      tags: editTags.join("|")
                    } : {}
                  }
                };
                if (isMinorEdit) {
                  editPayload.config.minor = "true";
                } else {
                  editPayload.config.notminor = "true";
                }
                yield page.edit(editPayload);
              });
              return function onEdit(_x5) {
                return _ref9.apply(this, arguments);
              };
            })(),
            escExit: escToExit
          });
        });
        return function handleQuickEditButtonClicked2() {
          return _ref8.apply(this, arguments);
        };
      })();
      const handleSimpleRedirectButtonClicked = /* @__PURE__ */ (function() {
        var _ref0 = _asyncToGenerator(function* () {
          ui_default.showSimpleRedirectPanel({
            onEdit: (function() {
              var _ref1 = _asyncToGenerator(function* ({
                title,
                summary,
                forceOverwrite = false
              }) {
                const page = yield getPage({
                  title
                });
                const currentPageName2 = constants_default.currentPageName;
                const contentmodel = page.contentmodel;
                if (summary == "") {
                  summary = i18n_default.translate("redirect_from_summary", [title, currentPageName2]);
                }
                const content = (() => {
                  let content2;
                  switch (contentmodel) {
                    case "javascript":
                      content2 = '/* #REDIRECT */mw.loader.load("'.concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/index.php?title=").concat(mw.util.wikiUrlencode(currentPageName2), '&action=raw&ctype=text/javascript");');
                      break;
                    case "css":
                      content2 = "/* #REDIRECT */@import url(".concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/index.php?title=").concat(mw.util.wikiUrlencode(currentPageName2), "&action=raw&ctype=text/css);");
                      break;
                    case "Scribunto":
                      content2 = "return require [[".concat(currentPageName2, "]]");
                      break;
                    case "wikitext":
                    default:
                      content2 = "#REDIRECT [[".concat(currentPageName2, "]]");
                      break;
                  }
                  return content2;
                })();
                const payload = {
                  content,
                  config: {
                    summary
                  }
                };
                if (!forceOverwrite) {
                  payload.config.createonly = "true";
                }
                yield page.edit(payload);
              });
              return function onEdit(_x6) {
                return _ref1.apply(this, arguments);
              };
            })(),
            onSuccess: ({
              title
            }) => {
              location.href = constants_default.articlePath.replace(/\$1/gi, title);
            }
          });
        });
        return function handleSimpleRedirectButtonClicked2() {
          return _ref0.apply(this, arguments);
        };
      })();
      const handleSettingsButtonClicked = /* @__PURE__ */ (function() {
        var _ref10 = _asyncToGenerator(function* () {
          ui_default.showSettingsPanel({
            onSubmit: ({
              settings
            }) => {
              JSON.parse(settings);
              localStorage.setItem("Wikiplus_Settings", settings);
            }
          });
        });
        return function handleSettingsButtonClicked2() {
          return _ref10.apply(this, arguments);
        };
      })();
      const handlePreload = /* @__PURE__ */ (function() {
        var _ref11 = _asyncToGenerator(function* ({
          sectionNumber
        }) {
          yield currentPage.getWikiText({
            section: sectionNumber
          });
        });
        return function handlePreload2(_x7) {
          return _ref11.apply(this, arguments);
        };
      })();
      ui_default.insertTopQuickEditEntry(handleQuickEditButtonClicked);
      ui_default.insertSectionQuickEditEntries(handleQuickEditButtonClicked);
      ui_default.insertLinkEditEntries(handleQuickEditButtonClicked);
      ui_default.insertSimpleRedirectButton(handleSimpleRedirectButtonClicked);
      ui_default.insertSettingsPanelButton(handleSettingsButtonClicked);
      ui_default.bindPreloadEvents(handlePreload);
    }));
  }
});
//! src/Wikiplus/resize.ts
var resize_exports = {};
var import_ext_gadget;
var init_resize = __esm({
  "src/Wikiplus/resize.ts"() {
    "use strict";
    import_ext_gadget = require("ext.gadget.Util");
    void (0, import_ext_gadget.getBody)().then(($body) => {
      $(window).on("resize", () => {
        const windowWidth = $(window).width();
        const $wikiplusInterbox = $body.find(".Wikiplus-InterBox");
        if ($wikiplusInterbox) {
          $wikiplusInterbox.css("max-width", "calc(".concat(windowWidth, "px - 2em)"));
        }
      });
    });
  }
});
//! src/Wikiplus/Wikiplus.ts
(function Wikiplus() {
  const {
    wgAction,
    wgIsArticle
  } = mw.config.get();
  if (wgAction !== "view" || !wgIsArticle) {
    return;
  }
  const loader = /* @__PURE__ */ (function() {
    var _ref12 = _asyncToGenerator(function* () {
      const {
        "visualeditor-enable": isVeEnable
      } = mw.user.options.get();
      if (isVeEnable) {
        yield mw.loader.using("ext.visualEditor.core");
      }
      yield Promise.resolve().then(() => (init_modules(), modules_exports));
      yield Promise.resolve().then(() => (init_resize(), resize_exports));
    });
    return function loader2() {
      return _ref12.apply(this, arguments);
    };
  })();
  void loader();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvY29uc3RhbnRzLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL3JlcXVlc3RzLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2kxOG4uanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvbG9nLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3NlcnZpY2VzL3dpa2kuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS9wYWdlLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2NvcmUvbm90aWZpY2F0aW9uLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL3NsZWVwLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2hlbHBlcnMuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS91aS5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9zZXR0aW5ncy5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy93aWtpcGx1cy5sZXNzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2luZGV4LmpzIiwgInNyYy9XaWtpcGx1cy9yZXNpemUudHMiLCAic3JjL1dpa2lwbHVzL1dpa2lwbHVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjbGFzcyBDb25zdGFudHMge1xuXHR2ZXJzaW9uID0gJzQuMS4wJztcblx0Z2V0IGlzQXJ0aWNsZSgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnSXNBcnRpY2xlJyk7XG5cdH1cblx0Z2V0IGN1cnJlbnRQYWdlTmFtZSgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC8gL2csICdfJyk7XG5cdH1cblx0Z2V0IGFydGljbGVJZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyk7XG5cdH1cblx0Z2V0IHJldmlzaW9uSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKTtcblx0fVxuXHRnZXQgbGF0ZXN0UmV2aXNpb25JZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQ3VyUmV2aXNpb25JZCcpO1xuXHR9XG5cdGdldCBhcnRpY2xlUGF0aCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZVBhdGgnKTtcblx0fVxuXHRnZXQgc2NyaXB0UGF0aCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpO1xuXHR9XG5cdGdldCBhY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuXHR9XG5cdGdldCBza2luKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnc2tpbicpO1xuXHR9XG5cdGdldCB1c2VyR3JvdXBzKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJyk7XG5cdH1cblx0Z2V0IHdpa2lJZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyk7XG5cdH1cblx0dXNlckFnZW50ID0gYFFpdXdlbi8xLjEgV2lraXBsdXMvJHt0aGlzLnZlcnNpb259ICgke3RoaXMud2lraUlkfSlgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29uc3RhbnRzKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcblxuY29uc3QgUmVxdWVzdHMgPSB7XG5cdGJhc2U6IGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fSR7Q29uc3RhbnRzLnNjcmlwdFBhdGh9L2FwaS5waHBgLFxuXHRhc3luYyBnZXQocXVlcnkpIHtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKFJlcXVlc3RzLmJhc2UpO1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHF1ZXJ5KSkge1xuXHRcdFx0dXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCBxdWVyeVtrZXldKTtcblx0XHR9XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiBDb25zdGFudHMudXNlckFnZW50LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHR9LFxuXHRhc3luYyBwb3N0KHBheWxvYWQpIHtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKFJlcXVlc3RzLmJhc2UpO1xuXHRcdGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwYXlsb2FkKSkge1xuXHRcdFx0Zm9ybS5hcHBlbmQoa2V5LCB2YWx1ZSk7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGJvZHk6IGZvcm0sXG5cdFx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogQ29uc3RhbnRzLnVzZXJBZ2VudCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RzO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5jbGFzcyBJMThuIHtcblx0bGFuZ3VhZ2U7XG5cdGkxOG5EYXRhID0ge307XG5cdHNlc3Npb25VcGRhdGVMb2cgPSBbXTtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGxhbmd1YWdlO1xuXHRcdHRyeSB7XG5cdFx0XHRsYW5ndWFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKVsnbGFuZ3VhZ2UnXSB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb3dlckNhc2UoKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdGxhbmd1YWdlID0gKG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3IuYnJvd3Nlckxhbmd1YWdlKVxuXHRcdFx0XHQucmVwbGFjZSgvaGFuW3N0XS0/L2ksICcnKSAvLyBmb3IgbGFuZ3VhZ2VzIGxpa2UgemgtSGFucy1DTlxuXHRcdFx0XHQudG9Mb3dlckNhc2UoKTtcblx0XHR9XG5cdFx0dGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xuXHRcdC8vIE1lcmdlIHdpdGggbG9jYWxTdG9yYWdlIGkxOG4gY2FjaGVcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgaTE4bkNhY2hlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJykpO1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoaTE4bkNhY2hlKSkge1xuXHRcdFx0XHR0aGlzLmkxOG5EYXRhW2tleV0gPSBpMThuQ2FjaGVba2V5XTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8vIEZhaWwgdG8gcGFyc2UgaTE4biBjYWNoZSwgcmVzZXRcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19pMThuQ2FjaGUnLCAne30nKTtcblx0XHR9XG5cdH1cblx0dHJhbnNsYXRlKGtleSwgcGxhY2Vob2xkZXJzID0gW10pIHtcblx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cdFx0aWYgKHRoaXMubGFuZ3VhZ2UgaW4gdGhpcy5pMThuRGF0YSkge1xuXHRcdFx0aWYgKGtleSBpbiB0aGlzLmkxOG5EYXRhW3RoaXMubGFuZ3VhZ2VdKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHRoaXMuaTE4bkRhdGFbdGhpcy5sYW5ndWFnZV1ba2V5XTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHRyeSB1cGRhdGUgbGFuZ3VhZ2UgdmVyaXNvblxuXHRcdFx0XHR0aGlzLmxvYWRMYW5ndWFnZSh0aGlzLmxhbmd1YWdlKTtcblx0XHRcdFx0aWYgKGtleSBpbiB0aGlzLmkxOG5EYXRhWydlbi11cyddKSB7XG5cdFx0XHRcdFx0Ly8gRmFsbGJhY2sgdG8gRW5nbGlzaFxuXHRcdFx0XHRcdHJlc3VsdCA9IHRoaXMuaTE4bkRhdGFbJ2VuLXVzJ11ba2V5XTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHQgPSBrZXk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5sb2FkTGFuZ3VhZ2UodGhpcy5sYW5ndWFnZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlaG9sZGVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKGNvbnN0IFtpbmRleCwgcGxhY2Vob2xkZXJdIG9mIHBsYWNlaG9sZGVycy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoYCQke2luZGV4ICsgMX1gLCBwbGFjZWhvbGRlcik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0YXN5bmMgbG9hZExhbmd1YWdlKGxhbmd1YWdlKSB7XG5cdFx0aWYgKHRoaXMuc2Vzc2lvblVwZGF0ZUxvZy5pbmNsdWRlcyhsYW5ndWFnZSkpIHtcblx0XHRcdC8vIEhhcyBiZWVuIHVwZGF0ZWQgdGhpcyBzZXNzaW9uLlxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCAoXG5cdFx0XHRcdGF3YWl0IGZldGNoKFxuXHRcdFx0XHRcdGBodHRwczovL2dpdGNkbi5xaXV3ZW4ubmV0LmNuL0ludGVyZmFjZUFkbWluL1dpa2lwbHVzL3Jhdy9icmFuY2gvZGV2L2xhbmd1YWdlcy8ke2xhbmd1YWdlfS5qc29uYFxuXHRcdFx0XHQpXG5cdFx0XHQpLmpzb24oKTtcblx0XHRcdGNvbnN0IG5vd1ZlcnNpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnV2lraXBsdXNfTGFuZ3VhZ2VWZXJzaW9uJykgfHwgJzAwMCc7XG5cdFx0XHR0aGlzLnNlc3Npb25VcGRhdGVMb2cucHVzaChsYW5ndWFnZSk7XG5cdFx0XHRpZiAocmVzcG9uc2UuX192ZXJzaW9uICE9PSBub3dWZXJzaW9uIHx8ICEobGFuZ3VhZ2UgaW4gdGhpcy5pMThuRGF0YSkpIHtcblx0XHRcdFx0Ly8gTGFuZ3VhZ2UgZ2V0IHVwZGF0ZWRcblx0XHRcdFx0Y29uc29sZS5pbmZvKGBVcGRhdGUgJHtsYW5ndWFnZX0gc3VwcG9ydCB0byB2ZXJzaW9uICR7cmVzcG9uc2UuX192ZXJzaW9ufWApO1xuXHRcdFx0XHR0aGlzLmkxOG5EYXRhW2xhbmd1YWdlXSA9IHJlc3BvbnNlO1xuXHRcdFx0XHQvLyBVcGRhdGUgbG9jYWxTdG9yYWdlIGNhY2hlXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19pMThuQ2FjaGUnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmkxOG5EYXRhKSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHQvLyBVbnN1cHBvcnRlZCBsYW5ndWFnZVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgSTE4bigpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgaTE4biBmcm9tICcuL2kxOG4nO1xuXG5jbGFzcyBXaWtpcGx1c0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlLCBjb2RlKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0dGhpcy5jb2RlID0gY29kZTtcblx0fVxufVxuXG5jb25zdCBMb2cgPSB7XG5cdGRlYnVnKG1lc3NhZ2UgPSAnJykge1xuXHRcdGNvbnNvbGUuZGVidWcoYFtXaWtpcGx1cy1ERUJVR10gJHttZXNzYWdlfWApO1xuXHR9LFxuXHRpbmZvKG1lc3NhZ2UgPSAnJykge1xuXHRcdGNvbnNvbGUuaW5mbyhgW1dpa2lwbHVzLUlORk9dICR7bWVzc2FnZX1gKTtcblx0fSxcblx0ZXJyb3IoZXJyb3JDb2RlLCBwYXlsb2FkcyA9IFtdKSB7XG5cdFx0bGV0IHRlbXBsYXRlID0gaTE4bi50cmFuc2xhdGUoZXJyb3JDb2RlKTtcblx0XHRpZiAocGF5bG9hZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Ly8gRmlsbFxuXHRcdFx0Zm9yIChjb25zdCBbaSwgdl0gb2YgcGF5bG9hZHMuZW50cmllcygpKSB7XG5cdFx0XHRcdHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxcJHtpICsgMX1gLCAnaWcnKSwgdik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnNvbGUuZXJyb3IoYFtXaWtpcGx1cy1FUlJPUl0gJHt0ZW1wbGF0ZX1gKTtcblx0XHR0aHJvdyBuZXcgV2lraXBsdXNFcnJvcihgJHt0ZW1wbGF0ZX1gLCBlcnJvckNvZGUpO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgcmVxdWVzdHMgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdHMnO1xuaW1wb3J0IExvZyBmcm9tICcuLi91dGlscy9sb2cnO1xuaW1wb3J0IGkxOG4gZnJvbSAnLi4vdXRpbHMvaTE4bic7XG5cbmNsYXNzIFdpa2kge1xuXHRwYWdlSW5mb0NhY2hlID0ge307XG5cdC8qKlxuXHQgKiDojrflvpcgRWRpdCBUb2tlblxuXHQgKiBHZXQgRWRpdCBUb2tlblxuXHQgKlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKi9cblx0YXN5bmMgZ2V0RWRpdFRva2VuKCkge1xuXHRcdC8vIOWwneivleS7jiBBUEkg6I635b6XIEVkaXRUb2tlblxuXHRcdC8vIFRyeSB0byBnZXQgRWRpdFRva2VuIGZyb20gQVBJXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5nZXQoe1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHR9KTtcblx0XHRpZiAoXG5cdFx0XHRyZXNwb25zZS5xdWVyeSAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zICYmXG5cdFx0XHRyZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuICYmXG5cdFx0XHRyZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuICE9PSAnK1xcXFwnXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHR9XG5cdFx0cmV0dXJuIExvZy5lcnJvcignZmFpbF90b19nZXRfZWRpdHRva2VuJyk7XG5cdH1cblx0LyoqXG5cdCAqIOiOt+W+l+mhtemdouS4iuS4gOeJiOacrOaXtumXtOaIs1xuXHQgKiBHZXQgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbGFzdCByZXZpc2lvbiBvZiBwYWdlIHNwZWNpZmllZC5cblx0ICpcblx0ICogQHBhcmFtIHtwYXJhbXMuc3RyaW5nfSB0aXRsZSDpobXpnaLlkI0gLyBQYWdlbmFtZVxuXHQgKiBAcGFyYW0ge3BhcmFtcy5yZXZpc2lvbklkfSByZXZpc2lvbklkIOS/ruiuoueJiOacrOWPtyAvIFJldmlzaW9uIElEXG5cdCAqIEBwYXJhbSB7cGFyYW1zLmNvbnRlbnRtb2RlbH0gY29udGVudG1vZGVsIOWGheWuueaooeWeiyAvIENvbnRlbnQgTW9kZWxcblx0ICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdGFzeW5jIGdldFBhZ2VJbmZvKHt0aXRsZSwgcmV2aXNpb25JZH0pIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnN8aW5mbycsXG5cdFx0XHRcdHJ2cHJvcDogJ3RpbWVzdGFtcHxpZHMnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAocmV2aXNpb25JZCkge1xuXHRcdFx0XHRwYXJhbXMucmV2aWRzID0gcmV2aXNpb25JZDtcblx0XHRcdH0gZWxzZSBpZiAodGl0bGUpIHtcblx0XHRcdFx0aWYgKHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0pIHtcblx0XHRcdFx0XHQvLyBIaXQgY2FjaGVcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dGltZXN0YW1wOiB0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdLnRpbWVzdGFtcCxcblx0XHRcdFx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0ucmV2aWQsXG5cdFx0XHRcdFx0XHRjb250ZW50bW9kZWw6IHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0uY29udGVudG1vZGVsLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFyYW1zLnRpdGxlcyA9IHRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5nZXQocGFyYW1zKTtcblx0XHRcdGlmIChyZXNwb25zZS5xdWVyeSAmJiByZXNwb25zZS5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRjb25zdCBwYWdlS2V5ID0gT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdO1xuXHRcdFx0XHRjb25zdCBjb250ZW50bW9kZWwgPSByZXNwb25zZS5xdWVyeS5wYWdlc1twYWdlS2V5XS5jb250ZW50bW9kZWw7XG5cdFx0XHRcdGlmIChwYWdlS2V5ID09PSAnLTEnKSB7XG5cdFx0XHRcdFx0Ly8g5LiN5a2Y5Zyo6L+Z5LiA6aG16Z2iXG5cdFx0XHRcdFx0Ly8gUGFnZSBub3QgZm91bmQuXG5cdFx0XHRcdFx0dGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXSA9IHtjb250ZW50bW9kZWx9O1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRjb250ZW50bW9kZWw6IGNvbnRlbnRtb2RlbCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHBhZ2VJbmZvID0gcmVzcG9uc2UucXVlcnkucGFnZXNbcGFnZUtleV0ucmV2aXNpb25zWzBdO1xuXHRcdFx0XHRpZiAodGl0bGUpIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdID0gey4uLnBhZ2VJbmZvLCBjb250ZW50bW9kZWx9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dGltZXN0YW1wOiBwYWdlSW5mby50aW1lc3RhbXAsXG5cdFx0XHRcdFx0cmV2aXNpb25JZDogcGFnZUluZm8ucmV2aWQsXG5cdFx0XHRcdFx0Y29udGVudG1vZGVsOiBjb250ZW50bW9kZWwsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICog6I635b6X6aG16Z2i55qEIFdpa2l0ZXh0XG5cdCAqIEdldCB3aWtpdGV4dCBvZiB0aGUgcGFnZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIHRpdGxlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5yZXZpc2lvbklkIOeJiOacrOWPt1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnNlY3Rpb24g5q616JC95Y+3XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gd2lraXRleHTlhoXlrrlcblx0ICovXG5cdGFzeW5jIGdldFdpa2lUZXh0KHtzZWN0aW9uLCByZXZpc2lvbklkfSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0cmV2aWRzOiByZXZpc2lvbklkLFxuXHRcdFx0fTtcblx0XHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHRcdHBhcmFtcy5yZXZpZHMgPSByZXZpc2lvbklkO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlY3Rpb24pIHtcblx0XHRcdFx0cGFyYW1zLnJ2c2VjdGlvbiA9IHNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnF1ZXJ5ICYmIHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGlmIChPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF0gPT09ICctMScpIHtcblx0XHRcdFx0XHQvLyDkuI3lrZjlnKjov5nkuIDpobXpnaJcblx0XHRcdFx0XHQvLyBQYWdlIG5vdCBmb3VuZC5cblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFnZUluZm8gPSByZXNwb25zZS5xdWVyeS5wYWdlc1tPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF1dLnJldmlzaW9uc1swXTtcblx0XHRcdFx0cmV0dXJuIHBhZ2VJbmZvWycqJ107XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X3dpa2l0ZXh0Jyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiDop6PmnpAgV2lraXRleHRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2l0ZXh0IHdpa2l0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSDpobXpnaLmoIfpophcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyDorr7nva5cblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSDop6PmnpDnu5PmnpwgSFRNTFxuXHQgKi9cblx0YXN5bmMgcGFyc2VXaWtpVGV4dCh3aWtpdGV4dCwgdGl0bGUgPSAnJywgY29uZmlnID0ge30pIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5wb3N0KHtcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRwc3Q6ICd0cnVlJyxcblx0XHRcdH0pO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnBhcnNlICYmIHJlc3BvbnNlLnBhcnNlLnRleHQpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLnBhcnNlLnRleHRbJyonXTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignY2FudF9wYXJzZV93aWtpdGV4dCcpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDnvJbovpHpobXpnaJcblx0ICpcblx0ICogQHBhcmFtIHJvb3QwXG5cdCAqIEBwYXJhbSByb290MC50aXRsZVxuXHQgKiBAcGFyYW0gcm9vdDAuY29udGVudFxuXHQgKiBAcGFyYW0gcm9vdDAuZWRpdFRva2VuXG5cdCAqIEBwYXJhbSByb290MC50aW1lc3RhbXBcblx0ICogQHBhcmFtIHJvb3QwLmNvbmZpZ1xuXHQgKiBAcGFyYW0gcm9vdDAuYWRkaXRpb25hbENvbmZpZ1xuXHQgKi9cblx0YXN5bmMgZWRpdCh7dGl0bGUsIGNvbnRlbnQsIGVkaXRUb2tlbiwgdGltZXN0YW1wLCBjb25maWcgPSB7fSwgYWRkaXRpb25hbENvbmZpZyA9IHt9fSA9IHt9KSB7XG5cdFx0bGV0IHJlc3BvbnNlO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdHRleHQ6IGNvbnRlbnQsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHR0b2tlbjogZWRpdFRva2VuLFxuXHRcdFx0XHQuLi4odGltZXN0YW1wID8ge2Jhc2V0aW1lc3RhbXA6IHRpbWVzdGFtcH0gOiB7fSksXG5cdFx0XHRcdC4uLmNvbmZpZyxcblx0XHRcdFx0Li4uYWRkaXRpb25hbENvbmZpZyxcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCduZXR3b3JrX2VkaXRfZXJyb3InKTtcblx0XHR9XG5cdFx0aWYgKHJlc3BvbnNlLmVkaXQpIHtcblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LnJlc3VsdCA9PT0gJ1N1Y2Nlc3MnKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQuY29kZSkge1xuXHRcdFx0XHQvLyBBYnVzZSBGaWx0ZXJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aTE4bi50cmFuc2xhdGUoJ2hpdF9hYnVzZWZpbHRlcicpfToke3Jlc3BvbnNlLmVkaXQuaW5mby5yZXBsYWNlKCcvSGl0IEFidXNlRmlsdGVyOiAvaWcnLCAnJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiBzbWFsbGVyO1wiPiR7cmVzcG9uc2UuZWRpdC53YXJuaW5nfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdExvZy5lcnJvcigndW5rbm93bl9lZGl0X2Vycm9yJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChyZXNwb25zZS5lcnJvciAmJiByZXNwb25zZS5lcnJvci5jb2RlKSB7XG5cdFx0XHRMb2cuZXJyb3IocmVzcG9uc2UuZXJyb3IuY29kZSk7XG5cdFx0fSBlbHNlIGlmIChyZXNwb25zZS5jb2RlKSB7XG5cdFx0XHRMb2cuZXJyb3IocmVzcG9uc2UuY29kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdExvZy5lcnJvcigndW5rbm93bl9lZGl0X2Vycm9yJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+l+aMh+WumumhtemdouacgOaWsOS/ruiuoue8luWPt1xuXHQgKiBHZXQgbGF0ZXN0IHJldmlzaW9uSWQgb2YgYSBwYWdlLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHRpdGxlXG5cdCAqL1xuXHRhc3luYyBnZXRMYXRlc3RSZXZpc2lvbklkRm9yUGFnZSh0aXRsZSkge1xuXHRcdGNvbnN0IHtyZXZpc2lvbklkfSA9IGF3YWl0IHRoaXMuZ2V0UGFnZUluZm8oe3RpdGxlfSk7XG5cdFx0cmV0dXJuIHJldmlzaW9uSWQ7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFdpa2koKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IFdpa2kgZnJvbSAnLi4vc2VydmljZXMvd2lraSc7XG5pbXBvcnQgTG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5cbmNsYXNzIFBhZ2Uge1xuXHR0aW1lc3RhbXA7XG5cdGVkaXRUb2tlbjtcblx0dGl0bGU7XG5cdHJldmlzaW9uSWQ7XG5cblx0aW5pdGVkID0gZmFsc2U7XG5cdGlzTmV3UGFnZSA9IGZhbHNlO1xuXG5cdGNvbnRlbnRtb2RlbCA9ICd3aWtpdGV4dCc7XG5cblx0c2VjdGlvbkNhY2hlID0ge307XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnRpdGxlfSDpobXpnaLmoIfpopggUGFnZSBOYW1lIChvcHRpb25hbClcblx0ICogQHBhcmFtIHtwYXJhbXMucmV2aXNpb25JZH0g6aG16Z2i5L+u6K6i57yW5Y+3IFJldmlzaW9uIElkXG5cdCAqIEBwYXJhbSB7cGFyYW1zLmNvbnRlbnRtb2RlbH0g6aG16Z2i5YaF5a655qih5Z6LIENvbnRlbnQgTW9kZWxcblx0ICovXG5cdGNvbnN0cnVjdG9yKHt0aXRsZSwgcmV2aXNpb25JZH0pIHtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5yZXZpc2lvbklkID0gcmV2aXNpb25JZDtcblx0XHR0aGlzLmlzTmV3UGFnZSA9ICFyZXZpc2lvbklkO1xuXHR9XG5cblx0LyoqXG5cdCAqIOWIneWni+WMliDojrflvpfpobXpnaJFZGl0VG9rZW7lkozliJ3lp4tUaW1lU3RhbXBcblx0ICogSW5pdGlhbGl6YXRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlZGl0VG9rZW4gKG9wdGlvbmFsKSDlpoLmnpzmj5DkvpvkuoZlZGl0VG9rZW7vvIzlsIbkuI3kvJrlho3ojrflj5Zcblx0ICovXG5cdGFzeW5jIGluaXQoe2VkaXRUb2tlbiA9ICcnfSA9IHt9KSB7XG5cdFx0Y29uc3QgcHJvbWlzZUFyciA9IFt0aGlzLmdldFRpbWVzdGFtcCgpLCB0aGlzLmdldENvbnRlbnRNb2RlbCgpXTtcblx0XHRpZiAoIWVkaXRUb2tlbikge1xuXHRcdFx0cHJvbWlzZUFyci5wdXNoKHRoaXMuZ2V0RWRpdFRva2VuKCkpO1xuXHRcdH1cblx0XHRhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlQXJyKTtcblx0XHR0aGlzLmluaXRlZCA9IHRydWU7XG5cdFx0TG9nLmluZm8oYFBhZ2UgaW5pdGlhbGl6YXRpb24gZm9yICR7dGhpcy50aXRsZX0jJHt0aGlzLnJldmlzaW9uSWR9IGZpbmlzaGVkLmApO1xuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+lyBFZGl0VG9rZW5cblx0ICogR2V0IEVkaXRUb2tlblxuXHQgKi9cblx0YXN5bmMgZ2V0RWRpdFRva2VuKCkge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnbWVkaWF3aWtpLnVzZXInKTtcblx0XHRpZiAobXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKSAmJiBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpICE9PSAnK1xcXFwnKSB7XG5cdFx0XHQvLyDlpoLmnpwgTWVkaWFXaWtpIEphdmFTY3JpcHQgQVBJIOWPr+S7peebtOaOpeiOt+W+lyBFZGl0VG9rZW4g5YiZ55u05o6l6L+U5ZueXG5cdFx0XHQvLyBSZXR1cm4gRWRpdFRva2VuIHJldHJpZXZlZCBmcm9tIE1lZGlhV2lraSBKYXZhU2NyaXB0IEFQSSBpZiBhY2Nlc3NpYmxlXG5cdFx0XHR0aGlzLmVkaXRUb2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIOS7jkFQSeiOt+W+l0VkaXRUb2tlblxuXHRcdC8vIEdldCBFZGl0VG9rZW4gZnJvbSBNZWRpYVdpa2kgQVBJXG5cdFx0dGhpcy5lZGl0VG9rZW4gPSBhd2FpdCBXaWtpLmdldEVkaXRUb2tlbigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+l+e8lui+keWfuuWHhuaXtumXtOaIs1xuXHQgKiBHZXQgQmFzZSBUaW1lc3RhbXBcblx0ICovXG5cdGFzeW5jIGdldFRpbWVzdGFtcCgpIHtcblx0XHRjb25zdCB7dGltZXN0YW1wLCByZXZpc2lvbklkfSA9IGF3YWl0IFdpa2kuZ2V0UGFnZUluZm8oe1xuXHRcdFx0cmV2aXNpb25JZDogdGhpcy5yZXZpc2lvbklkLFxuXHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0fSk7XG5cdFx0dGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XG5cdFx0aWYgKHJldmlzaW9uSWQpIHtcblx0XHRcdHRoaXMucmV2aXNpb25JZCA9IHJldmlzaW9uSWQ7XG5cdFx0XHR0aGlzLmlzTmV3UGFnZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpfpobXpnaLlhoXlrrnmqKHlnotcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnJldmlzaW9uSWRcblx0ICovXG5cdGFzeW5jIGdldENvbnRlbnRNb2RlbCgpIHtcblx0XHRjb25zdCB7Y29udGVudG1vZGVsfSA9IGF3YWl0IFdpa2kuZ2V0UGFnZUluZm8oe1xuXHRcdFx0cmV2aXNpb25JZDogdGhpcy5yZXZpc2lvbklkLFxuXHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0fSk7XG5cdFx0dGhpcy5jb250ZW50bW9kZWwgPSBjb250ZW50bW9kZWwgfHwgJ3dpa2l0ZXh0Jztcblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpcgV2lraVRleHRcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnNlY3Rpb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5yZXZpc2lvbklkXG5cdCAqL1xuXHRhc3luYyBnZXRXaWtpVGV4dCh7c2VjdGlvbiA9ICcnfSA9IHt9KSB7XG5cdFx0Y29uc3Qgc2VjID0gc2VjdGlvbiA9PT0gLTEgPyAnJyA6IHNlY3Rpb247XG5cdFx0aWYgKHRoaXMuc2VjdGlvbkNhY2hlW3NlY10pIHtcblx0XHRcdHJldHVybiB0aGlzLnNlY3Rpb25DYWNoZVtzZWNdO1xuXHRcdH1cblx0XHRjb25zdCB3aWtpVGV4dCA9IGF3YWl0IFdpa2kuZ2V0V2lraVRleHQoe1xuXHRcdFx0c2VjdGlvbjogc2VjLFxuXHRcdFx0cmV2aXNpb25JZDogdGhpcy5yZXZpc2lvbklkLFxuXHRcdH0pO1xuXHRcdExvZy5pbmZvKGBXaWtpdGV4dCBvZiAke3RoaXMudGl0bGV9IyR7c2VjdGlvbn0gZmV0Y2hlZC5gKTtcblx0XHR0aGlzLnNlY3Rpb25DYWNoZVtzZWNdID0gd2lraVRleHQ7XG5cdFx0cmV0dXJuIHdpa2lUZXh0O1xuXHR9XG5cblx0LyoqXG5cdCAqIOino+aekCBXaWtpVGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHRcblx0ICovXG5cdGFzeW5jIHBhcnNlV2lraVRleHQod2lraXRleHQpIHtcblx0XHRyZXR1cm4gV2lraS5wYXJzZVdpa2lUZXh0KHdpa2l0ZXh0LCB0aGlzLnRpdGxlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDnvJbovpHpobXpnaJcblx0ICpcblx0ICogQHBhcmFtIHsqfSBjb25maWdcblx0ICogQHBhcmFtIHBheWxvYWRcblx0ICovXG5cdGFzeW5jIGVkaXQocGF5bG9hZCkge1xuXHRcdGlmICghdGhpcy5lZGl0VG9rZW4pIHtcblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfZWRpdHRva2VuJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghdGhpcy50aW1lc3RhbXAgJiYgIXRoaXMuaXNOZXdQYWdlKSB7XG5cdFx0XHQvLyDlpoLmnpzkuI3mmK/liJvlu7rmlrDpobXpnaIg5Y+I5rKh5pyJ5Z+65YeG5pe26Ze05oizIOWImeacieWPr+iDvemAoOaIkOe8lui+keimhuebliDkv53pmanotbfop4Hnm7TmjqXmi5Lnu51cblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfdGltZXN0YW1wJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJldHVybiBXaWtpLmVkaXQoe1xuXHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0XHRlZGl0VG9rZW46IHRoaXMuZWRpdFRva2VuLFxuXHRcdFx0Li4uKHRoaXMudGltZXN0YW1wID8ge3RpbWVzdGFtcDogdGhpcy50aW1lc3RhbXB9IDoge30pLFxuXHRcdFx0Li4ucGF5bG9hZCxcblx0XHRcdGFkZGl0aW9uYWxDb25maWc6IHtcblx0XHRcdFx0Li4uKHRoaXMuaXNOZXdQYWdlID8ge2NyZWF0ZW9ubHk6IHRoaXMuaXNOZXdQYWdlfSA6IHt9KSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY2xhc3MgTm90aWZpY2F0aW9uIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblx0aW5pdCgpIHtcblx0XHQkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGlkPVwiTW9lTm90aWZpY2F0aW9uXCI+PC9kaXY+Jyk7XG5cdH1cblx0ZGlzcGxheSh0ZXh0ID0gJ+WWtX4nLCB0eXBlID0gJ3N1Y2Nlc3MnLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG5cdFx0JCgnI01vZU5vdGlmaWNhdGlvbicpLmFwcGVuZChcblx0XHRcdCQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdNb2VOb3RpZmljYXRpb24tbm90aWNlJylcblx0XHRcdFx0LmFkZENsYXNzKGBNb2VOb3RpZmljYXRpb24tbm90aWNlLSR7dHlwZX1gKVxuXHRcdFx0XHQuYXBwZW5kKGA8c3Bhbj4ke3RleHR9PC9zcGFuPmApXG5cdFx0KTtcblx0XHQkKCcjTW9lTm90aWZpY2F0aW9uJykuZmluZCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sYXN0KCkuZmFkZUluKDMwMCk7XG5cdFx0dGhpcy5iaW5kKCk7XG5cdFx0dGhpcy5jbGVhcigpO1xuXHRcdGNhbGxiYWNrKCQoJyNNb2VOb3RpZmljYXRpb24nKS5maW5kKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmxhc3QoKSk7XG5cdH1cblx0YmluZCgpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHQkKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxmLnNsaWRlTGVmdCgkKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXHRzdWNjZXNzKHRleHQsIGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5kaXNwbGF5KHRleHQsICdzdWNjZXNzJywgY2FsbGJhY2spO1xuXHR9XG5cdHdhcm5pbmcodGV4dCwgY2FsbGJhY2spIHtcblx0XHR0aGlzLmRpc3BsYXkodGV4dCwgJ3dhcm5pbmcnLCBjYWxsYmFjayk7XG5cdH1cblx0ZXJyb3IodGV4dCwgY2FsbGJhY2spIHtcblx0XHR0aGlzLmRpc3BsYXkodGV4dCwgJ2Vycm9yJywgY2FsbGJhY2spO1xuXHR9XG5cdGNsZWFyKCkge1xuXHRcdGlmICgkKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmxlbmd0aCA+PSAxMCkge1xuXHRcdFx0JCgnI01vZU5vdGlmaWNhdGlvbicpXG5cdFx0XHRcdC5jaGlsZHJlbigpXG5cdFx0XHRcdC5maXJzdCgpXG5cdFx0XHRcdC5mYWRlT3V0KDE1MCwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0c2V0VGltZW91dCh0aGlzLmNsZWFyLCAzMDApO1xuXHRcdH1cblx0fVxuXHRlbXB0eShmKSB7XG5cdFx0JCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRpZiAodHlwZW9mIGYgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgZWxlID0gJCh0aGlzKTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0ZihlbGUpO1xuXHRcdFx0XHR9LCAyMDAgKiBpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHQuZGVsYXkoaSAqIDIwMClcblx0XHRcdFx0XHQuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0c2xpZGVMZWZ0KGVsZSwgc3BlZWQpIHtcblx0XHRlbGUuY3NzKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuXHRcdGVsZS5hbmltYXRlKFxuXHRcdFx0e1xuXHRcdFx0XHRsZWZ0OiAnLTIwMCUnLFxuXHRcdFx0fSxcblx0XHRcdHNwZWVkIHx8IDE1MCxcblx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCh0aGlzKS5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE5vdGlmaWNhdGlvbigpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5jb25zdCBzbGVlcCA9ICh0aW1lKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpO1xuXHR9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBzbGVlcDtcbiIsICIvKipcbiAqIOino+aekFVSTOWPguaVsOWIl+ihqFxuICogUGFyc2UgVVJMIHF1ZXJ5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB1cmxcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5KHVybCkge1xuXHRjb25zdCByZWcgPSAvKChbXj8mPV0rKSg/Oj0oW14/Jj1dKikpKikvZztcblx0Y29uc3QgcGFyYW1zID0ge307XG5cdGxldCBtYXRjaDtcblx0d2hpbGUgKChtYXRjaCA9IHJlZy5leGVjKHVybCkpKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHBhcmFtc1ttYXRjaFsyXV0gPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cGFyYW1zW21hdGNoWzJdXSA9IG1hdGNoWzNdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcGFyYW1zO1xufVxuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vbm90aWZpY2F0aW9uJztcbmltcG9ydCBpMThuIGZyb20gJy4uL3V0aWxzL2kxOG4nO1xuaW1wb3J0IExvZyBmcm9tICcuLi91dGlscy9sb2cnO1xuaW1wb3J0IHNsZWVwIGZyb20gJy4uL3V0aWxzL3NsZWVwJztcbmltcG9ydCB7cGFyc2VRdWVyeX0gZnJvbSAnLi4vdXRpbHMvaGVscGVycyc7XG5cbmNsYXNzIFVJIHtcblx0cXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gZmFsc2U7XG5cdHNjcm9sbFRvcCA9IDA7XG5cblx0LyoqXG5cdCAqIOWIm+W7uuWxheS4reWvueivneahhlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUg56qX5Y+j5qCH6aKYXG5cdCAqIEBwYXJhbSB7c3RyaW5nIHwgSlF1ZXJ5PEhUTUxFbGVtZW50Pn0gY29udGVudCDlhoXlrrlcblx0ICogQHBhcmFtIHsqfSB3aWR0aCDlrr3luqZcblx0ICogQHBhcmFtIHsqfSBjYWxsYmFjayDlm57osIPlh73mlbBcblx0ICovXG5cdGNyZWF0ZURpYWxvZ0JveCh0aXRsZSA9ICdXaWtpcGx1cycsIGNvbnRlbnQgPSAnJywgd2lkdGggPSA2MDAsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcblx0XHRpZiAoJCgnLldpa2lwbHVzLUludGVyQm94JykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y29uc3QgY2xpZW50V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRjb25zdCBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0Y29uc3QgZGlhbG9nV2lkdGggPSBNYXRoLm1pbihjbGllbnRXaWR0aCwgd2lkdGgpO1xuXHRcdGNvbnN0IGRpYWxvZ0JveCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gnKVxuXHRcdFx0LmNzcyh7XG5cdFx0XHRcdCdtYXJnaW4tbGVmdCc6IGNsaWVudFdpZHRoIC8gMiAtIGRpYWxvZ1dpZHRoIC8gMixcblx0XHRcdFx0dG9wOiAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIGNsaWVudEhlaWdodCAqIDAuMixcblx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdFx0fSlcblx0XHRcdC5hcHBlbmQoJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtSGVhZGVyJykuaHRtbCh0aXRsZSkpXG5cdFx0XHQuYXBwZW5kKCQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5hcHBlbmQoY29udGVudCkpXG5cdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQoJ8OXJykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUNsb3NlJykpO1xuXHRcdCQoJ2JvZHknKS5hcHBlbmQoZGlhbG9nQm94KTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS53aWR0aChkaWFsb2dXaWR0aCk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0JCh0aGlzKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IHVuZGVmaW5lZCkpOyAvLyDlj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0XHQvL+aLluabs1xuXHRcdGNvbnN0IGJpbmREcmFnZ2luZyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRlbGVtZW50Lm1vdXNlZG93bigoZSkgPT4ge1xuXHRcdFx0XHRjb25zdCBiYXNlWCA9IGUuY2xpZW50WDtcblx0XHRcdFx0Y29uc3QgYmFzZVkgPSBlLmNsaWVudFk7XG5cdFx0XHRcdGNvbnN0IGJhc2VPZmZzZXRYID0gZWxlbWVudC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0O1xuXHRcdFx0XHRjb25zdCBiYXNlT2Zmc2V0WSA9IGVsZW1lbnQucGFyZW50KCkub2Zmc2V0KCkudG9wO1xuXHRcdFx0XHQkKGRvY3VtZW50KS5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcblx0XHRcdFx0XHRlbGVtZW50LnBhcmVudCgpLmNzcyh7XG5cdFx0XHRcdFx0XHQnbWFyZ2luLWxlZnQnOiBiYXNlT2Zmc2V0WCArIGUuY2xpZW50WCAtIGJhc2VYLFxuXHRcdFx0XHRcdFx0dG9wOiBiYXNlT2Zmc2V0WSArIGUuY2xpZW50WSAtIGJhc2VZLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0JChkb2N1bWVudCkub24oJ21vdXNldXAnLCAoKSA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC51bmJpbmQoJ21vdXNlZG93bicpO1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9mZignbW91c2Vtb3ZlJyk7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdtb3VzZXVwJyk7XG5cdFx0XHRcdFx0YmluZERyYWdnaW5nKGVsZW1lbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0YmluZERyYWdnaW5nKCQoJy5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXInKSk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZmFkZUluKDUwMCk7XG5cdFx0Y2FsbGJhY2soKTtcblx0XHRyZXR1cm4gZGlhbG9nQm94O1xuXHR9XG5cblx0LyoqXG5cdCAqIOWcqOaQnOe0ouahhuW3puS+p+OAjOabtOWkmuOAjeiPnOWNleWGhea3u+WKoOaMiemSrlxuXHQgKiBBZGQgYSBidXR0b24gaW4gXCJNb3JlXCIgbWVudSAobGVmdCBvZiB0aGUgc2VhcmNoIGJhcilcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQg5oyJ6ZKu5ZCNIEJ1dHRvbiB0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpZCDmjInpkq5pZCBCdXR0b24gaWRcblx0ICogQHJldHVybiB7SlF1ZXJ5PEhUTUxFbGVtZW50Pn0gYnV0dG9uXG5cdCAqL1xuXHRhZGRGdW5jdGlvbkJ1dHRvbih0ZXh0LCBpZCkge1xuXHRcdGxldCBidXR0b247XG5cdFx0c3dpdGNoIChDb25zdGFudHMuc2tpbikge1xuXHRcdFx0Y2FzZSAnbWluZXJ2YSc6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIGlkKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndG9nZ2xlLWxpc3QtaXRlbScpXG5cdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnbXctdWktaWNvbiBtdy11aS1pY29uLWJlZm9yZSB0b2dnbGUtbGlzdC1pdGVtX19hbmNob3InKVxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCk7Jylcblx0XHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygndG9nZ2xlLWxpc3QtaXRlbV9fbGFiZWwnKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQodGV4dClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdtb2Vza2luJzpcblx0XHRcdFx0YnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1Nb3JlLUZ1bmN0aW9uLUJ1dHRvbicpXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgaWQpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8YT4nKS5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKS50ZXh0KHRleHQpKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnbXctbGlzdC1pdGVtJylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3ZlY3Rvci10YWItbm9pY29uJylcblx0XHRcdFx0XHQuYXR0cignaWQnLCBpZClcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpLnRleHQodGV4dCkpO1xuXHRcdH1cblx0XHRpZiAoQ29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJyAmJiAkKCcjcC10YicpLmxlbmd0aCA+IDApIHtcblx0XHRcdCQoJyNwLXRiJykuYXBwZW5kKGJ1dHRvbik7XG5cdFx0XHRyZXR1cm4gJChgIyR7aWR9YCk7XG5cdFx0fSBlbHNlIGlmIChDb25zdGFudHMuc2tpbiA9PT0gJ21vZXNraW4nKSB7XG5cdFx0XHQkKCcubW9yZS1hY3Rpb25zLWxpc3QnKS5maXJzdCgpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH0gZWxzZSBpZiAoJCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcjcC1jYWN0aW9ucyB1bCcpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH1cblx0XHRMb2cuaW5mbyhpMThuLnRyYW5zbGF0ZSgnY2FudF9hZGRfZnVuY2J0bicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXlv6vpgJ/ph43lrprlkJHmjInpkq5cblx0ICpcblx0ICogQHBhcmFtIHsqfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbihvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBidXR0b24gPSB0aGlzLmFkZEZ1bmN0aW9uQnV0dG9uKGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9mcm9tJyksICdXaWtpcGx1cy1TUi1JbnRybycpO1xuXHRcdGlmIChidXR0b24pIHtcblx0XHRcdGJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl6K6+572u6Z2i5p2/5oyJ6ZKuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2V0dGluZ3NQYW5lbEJ1dHRvbihvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBidXR0b24gPSB0aGlzLmFkZEZ1bmN0aW9uQnV0dG9uKGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5ncycpLCAnV2lraXBsdXMtU2V0dGluZ3MtSW50cm8nKTtcblx0XHRpZiAoYnV0dG9uKSB7XG5cdFx0XHRidXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpemhtumDqOW/q+mAn+e8lui+keaMiemSrlxuXHQgKiBJbnNlcnQgUXVpY2tFZGl0IGJ1dHRvbiBiZXNpZGVzIHBhZ2UgZWRpdCBidXR0b24uXG5cdCAqXG5cdCAqIEBwYXJhbSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRUb3BRdWlja0VkaXRFbnRyeShvbkNsaWNrKSB7XG5cdFx0Y29uc3QgdG9wQnRuID0gJCgnPGxpPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLUVkaXQtVG9wQnRuJykuYXR0cignY2xhc3MnLCAnbXctbGlzdC1pdGVtJyk7XG5cdFx0Y29uc3QgdG9wQnRuTGluayA9ICQoJzxhPicpXG5cdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF90b3BidG4nKX1gKTtcblx0XHR0b3BCdG4uYXBwZW5kKHRvcEJ0bkxpbmspO1xuXHRcdHN3aXRjaCAoQ29uc3RhbnRzLnNraW4pIHtcblx0XHRcdGNhc2UgJ21pbmVydmEnOlxuXHRcdFx0XHR0b3BCdG4uY3NzKHsnYWxpZ24taXRlbXMnOiAnY2VudGVyJywgZGlzcGxheTogJ2ZsZXgnfSk7XG5cdFx0XHRcdHRvcEJ0bi5maW5kKCdzcGFuJykuYWRkQ2xhc3MoJ3BhZ2UtYWN0aW9ucy1tZW51X19saXN0LWl0ZW0nKTtcblx0XHRcdFx0dG9wQnRuXG5cdFx0XHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0XHRcdC5hZGRDbGFzcyhcblx0XHRcdFx0XHRcdCdtdy11aS1pY29uIG13LXVpLWljb24tZWxlbWVudCBtdy11aS1pY29uLXdpa2ltZWRpYS1lZGl0LWJhc2UyMCBtdy11aS1pY29uLXdpdGgtbGFiZWwtZGVza3RvcCdcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0LmNzcygndmVydGljYWwtYWxpZ24nLCAnbWlkZGxlJyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd2ZWN0b3ItMjAyMic6XG5cdFx0XHRcdHRvcEJ0bi5hZGRDbGFzcygndmVjdG9yLXRhYi1ub2ljb24nKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3ZlY3Rvcic6XG5cdFx0XHRcdHRvcEJ0bi5hcHBlbmQoJCgnPHNwYW4+JykuYXBwZW5kKHRvcEJ0bkxpbmspKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0fVxuXHRcdCQodG9wQnRuKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRvbkNsaWNrKHtcblx0XHRcdFx0c2VjdGlvbk51bWJlcjogLTEsXG5cdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBDb25zdGFudHMuY3VycmVudFBhZ2VOYW1lLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0aWYgKCQoJyNjYS1lZGl0JykubGVuZ3RoID4gMCAmJiAkKCcjV2lraXBsdXMtRWRpdC1Ub3BCdG4nKS5sZW5ndGggPT09IDApIHtcblx0XHRcdENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YScgPyAkKCcjY2EtZWRpdCcpLnBhcmVudCgpLmFmdGVyKHRvcEJ0bikgOiAkKCcjY2EtZWRpdCcpLmFmdGVyKHRvcEJ0bik7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeauteiQveW/q+mAn+e8lui+keaMiemSrlxuXHQgKiBJbnNlcnQgUXVpY2tFZGl0IGJ1dHRvbnMgZm9yIGVhY2ggc2VjdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFNlY3Rpb25RdWlja0VkaXRFbnRyaWVzKG9uQ2xpY2sgPSAoKSA9PiB7fSkge1xuXHRcdGNvbnN0IHNlY3Rpb25CdG4gPVxuXHRcdFx0Q29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJ1xuXHRcdFx0XHQ/ICQoJzxzcGFuPicpLmFwcGVuZChcblx0XHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcyhcblx0XHRcdFx0XHRcdFx0XHQnV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuIG13LXVpLWljb24gbXctdWktaWNvbi1lbGVtZW50IG13LXVpLWljb24td2lraW1lZGlhLWVkaXQtYmFzZTIwIGVkaXQtcGFnZSBtdy11aS1pY29uLWZsdXNoLXJpZ2h0J1xuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdC5jc3MoJ21hcmdpbi1sZWZ0JywgJzAuNzVlbScpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCd0aXRsZScsIGkxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0OiAkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcygnbXctZWRpdHNlY3Rpb24tZGl2aWRlcicpLnRleHQoJyB8ICcpKVxuXHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUVkaXQtU2VjdGlvbkJ0bicpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApJylcblx0XHRcdFx0XHRcdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3NlY3Rpb25idG4nKSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0JCgnLm13LWVkaXRzZWN0aW9uJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgZWRpdFVSTCA9ICQodGhpcykuZmluZChcImFbaHJlZio9J2FjdGlvbj1lZGl0J11cIikuZmlyc3QoKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25OdW1iZXIgPSBlZGl0VVJMXG5cdFx0XHRcdFx0Lm1hdGNoKC8mW3ZlXSpzZWN0aW9uXFw9KFteJl0rKS8pWzFdIC8vIGB2ZWAgZm9yIHZpc3VhbCBlZGl0b3Jcblx0XHRcdFx0XHQucmVwbGFjZSgvVC0vZ2ksICcnKTsgLy8gZW1iZWRkZWQgcGFnZXMgdXNlIFQtc2VyaWVzIHNlY3Rpb24gbnVtYmVyXG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25UYXJnZXROYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGVkaXRVUkwubWF0Y2goL3RpdGxlPSguKz8pJi8pWzFdKTtcblx0XHRcdFx0Y29uc3QgY2xvbmVOb2RlID0gJCh0aGlzKS5wcmV2KCkuY2xvbmUoKTtcblx0XHRcdFx0Y2xvbmVOb2RlLmZpbmQoJy5tdy1oZWFkbGluZS1udW1iZXInKS5yZW1vdmUoKTtcblx0XHRcdFx0Y29uc3Qgc2VjdGlvbk5hbWUgPSBjbG9uZU5vZGUudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0Y29uc3QgX3NlY3Rpb25CdG4gPSBzZWN0aW9uQnRuLmNsb25lKCk7XG5cdFx0XHRcdF9zZWN0aW9uQnRuLmZpbmQoJy5XaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4nKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0b25DbGljayh7XG5cdFx0XHRcdFx0XHRzZWN0aW9uTnVtYmVyLFxuXHRcdFx0XHRcdFx0c2VjdGlvbk5hbWUsXG5cdFx0XHRcdFx0XHR0YXJnZXRQYWdlTmFtZTogc2VjdGlvblRhcmdldE5hbWUsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnXG5cdFx0XHRcdFx0PyAkKHRoaXMpLmFwcGVuZChfc2VjdGlvbkJ0bilcblx0XHRcdFx0XHQ6ICQodGhpcykuZmluZCgnLm13LWVkaXRzZWN0aW9uLWJyYWNrZXQnKS5sYXN0KCkuYmVmb3JlKF9zZWN0aW9uQnRuKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9faW5pdF9xdWlja2VkaXQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXku7vmhI/pk77mjqXnvJbovpHlhaXlj6Ncblx0ICpcblx0ICogQHBhcmFtIHsqfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRMaW5rRWRpdEVudHJpZXMob25DbGljayA9ICgpID0+IHt9KSB7XG5cdFx0JCgnI213LWNvbnRlbnQtdGV4dCBhLmV4dGVybmFsJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0Y29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBwYXJzZVF1ZXJ5KHVybCk7XG5cdFx0XHRpZiAocGFyYW1zLmFjdGlvbiA9PT0gJ2VkaXQnICYmIHBhcmFtcy50aXRsZSAhPT0gdW5kZWZpbmVkICYmIHBhcmFtcy5zZWN0aW9uICE9PSAnbmV3Jykge1xuXHRcdFx0XHQkKHRoaXMpLmFmdGVyKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICdqYXZhc2NyaXB0OnZvaWQoMCknLFxuXHRcdFx0XHRcdFx0XHRjbGFzczogJ1dpa2lwbHVzLUVkaXQtRXZlcnlXaGVyZUJ0bicsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnRleHQoYCgke2kxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpfSlgKVxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0b25DbGljayh7XG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0UGFnZU5hbWU6IHBhcmFtcy50aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uTnVtYmVyOiBwYXJhbXMuc2VjdGlvbiA/PyAtMSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c2hvd1F1aWNrRWRpdFBhbmVsKHtcblx0XHR0aXRsZSA9ICcnLFxuXHRcdGNvbnRlbnQgPSAnJyxcblx0XHRzdW1tYXJ5ID0gJycsXG5cdFx0b25CYWNrID0gKCkgPT4ge30sXG5cdFx0b25QYXJzZSA9ICgpID0+IHt9LFxuXHRcdG9uRWRpdCA9ICgpID0+IHt9LFxuXHRcdGVzY0V4aXQgPSBmYWxzZSxcblx0fSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuc2Nyb2xsVG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG5cdFx0aWYgKHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlKSB7XG5cdFx0XHR0aGlzLmhpZGVRdWlja0VkaXRQYW5lbCgpO1xuXHRcdH1cblx0XHR0aGlzLnF1aWNrRWRpdFBhbmVsVmlzaWJsZSA9IHRydWU7XG5cdFx0Ly8g6Ziy5q2i5omL5ruR5YWz6Zet6aG16Z2iXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHQnY2xvc2UnLFxuXHRcdFx0KHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIGAke2kxOG4udHJhbnNsYXRlKCdvbmNsb3NlX2NvbmZpcm0nKX1gO1xuXHRcdFx0fSlcblx0XHQpO1xuXHRcdGNvbnN0IGlzTmV3UGFnZSA9ICQoJy5ub2FydGljbGV0ZXh0JykubGVuZ3RoID4gMDtcblx0XHQvLyBET00g5a6a5LmJ5byA5aeLXG5cdFx0Y29uc3QgYmFja0J0biA9ICQoJzxzcGFuPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CdG4nKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2JhY2snKX1gKTsgLy8g6L+U5Zue5oyJ6ZKuXG5cdFx0Y29uc3QganVtcEJ0biA9ICQoJzxzcGFuPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LUp1bXAnKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CdG4nKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjV2lraXBsdXMtUXVpY2tlZGl0Jylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnZ290b19lZGl0Ym94Jyl9YClcblx0XHRcdCk7IC8vIOWIsOe8lui+keahhlxuXHRcdGNvbnN0IGlucHV0Qm94ID0gJCgnPHRleHRhcmVhPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdCcpOyAvLyDkuLvnvJbovpHmoYZcblx0XHRjb25zdCBwcmV2aWV3Qm94ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKTsgLy8g6aKE6KeI6L6T5Ye6XG5cdFx0Y29uc3Qgc3VtbWFyeUJveCA9ICQoJzxpbnB1dD4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0Jylcblx0XHRcdC5hdHRyKCdwbGFjZWhvbGRlcicsIGAke2kxOG4udHJhbnNsYXRlKCdzdW1tYXJ5X3BsYWNlaG9sZCcpfWApOyAvLyDnvJbovpHmkZjopoHovpPlhaVcblx0XHRjb25zdCBlZGl0U3VibWl0QnRuID0gJCgnPGJ1dHRvbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoaXNOZXdQYWdlID8gJ3B1Ymxpc2hfcGFnZScgOiAncHVibGlzaF9jaGFuZ2UnKX0oQ3RybCtTKWApOyAvLyDmj5DkuqTmjInpkq5cblx0XHRjb25zdCBwcmV2aWV3U3VibWl0QnRuID0gJCgnPGJ1dHRvbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgncHJldmlldycpfWApOyAvLyDpooTop4jmjInpkq5cblx0XHRjb25zdCBpc01pbm9yRWRpdCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hcHBlbmQoJCgnPGlucHV0PicpLmF0dHIoe3R5cGU6ICdjaGVja2JveCcsIGlkOiAnV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCd9KSlcblx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdCQoJzxsYWJlbD4nKVxuXHRcdFx0XHRcdC5hdHRyKCdmb3InLCAnV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpXG5cdFx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ21hcmtfbWlub3JlZGl0Jyl9KEN0cmwrU2hpZnQrUylgKVxuXHRcdFx0KVxuXHRcdFx0LmNzcyh7bWFyZ2luOiAnNXB4IDVweCA1cHggLTNweCcsIGRpc3BsYXk6ICdpbmxpbmUnfSk7XG5cdFx0Ly8gRE9N5a6a5LmJ57uT5p2fXG5cdFx0Y29uc3QgZWRpdEJvZHkgPSAkKCc8ZGl2PicpLmFwcGVuZChcblx0XHRcdGJhY2tCdG4sXG5cdFx0XHRqdW1wQnRuLFxuXHRcdFx0cHJldmlld0JveCxcblx0XHRcdGlucHV0Qm94LFxuXHRcdFx0c3VtbWFyeUJveCxcblx0XHRcdCQoJzxicj4nKSxcblx0XHRcdGlzTWlub3JFZGl0LFxuXHRcdFx0ZWRpdFN1Ym1pdEJ0bixcblx0XHRcdHByZXZpZXdTdWJtaXRCdG5cblx0XHQpO1xuXHRcdHRoaXMuY3JlYXRlRGlhbG9nQm94KHRpdGxlLCBlZGl0Qm9keSwgMTAwMCwgKCkgPT4ge1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdCcpLnZhbChjb250ZW50KTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCcpLnZhbChzdW1tYXJ5KTtcblx0XHR9KTtcblx0XHQvLyBCYWNrXG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJykub24oJ2NsaWNrJywgb25CYWNrKTtcblx0XHQvLyBQcmV2aWV3XG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHByZWxvYWRCYW5uZXIgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2xvYWRpbmdfcHJldmlldycpfWApO1xuXHRcdFx0Y29uc3Qgd2lraVRleHQgPSAkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKCk7XG5cdFx0XHQkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZU91dCgxMDAsICgpID0+IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmh0bWwoJycpLmFwcGVuZChwcmVsb2FkQmFubmVyKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbigxMDApO1xuXHRcdFx0fSk7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzZWxmLnNjcm9sbFRvcH0sIDIwMCk7IC8v6L+U5Zue6aG26YOoXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBvblBhcnNlKHdpa2lUZXh0KTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KCcxMDAnLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKGA8aHI+PGRpdiBjbGFzcz1cIm13LWJvZHktY29udGVudFwiPiR7cmVzdWx0fTwvZGl2Pjxocj5gKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbignMTAwJyk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdC8vIEVkaXRcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHRpbWVyID0gRGF0ZS5ub3coKTtcblx0XHRcdGNvbnN0IGVkaXRCYW5uZXIgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3N1Ym1pdHRpbmdfZWRpdCcpfWApO1xuXHRcdFx0Y29uc3QgcGF5bG9hZCA9IHtcblx0XHRcdFx0c3VtbWFyeTogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0JykudmFsKCksXG5cdFx0XHRcdGNvbnRlbnQ6ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQnKS52YWwoKSxcblx0XHRcdFx0aXNNaW5vckVkaXQ6ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0JykuaXMoJzpjaGVja2VkJyksXG5cdFx0XHR9O1xuXHRcdFx0Ly8g5YeG5aSH57yW6L6RIOemgeeUqOaMiemSriDmiafooYzliqjnlLtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0LCNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLmF0dHIoXG5cdFx0XHRcdCdkaXNhYmxlZCcsXG5cdFx0XHRcdCdkaXNhYmxlZCdcblx0XHRcdCk7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzZWxmLnNjcm9sbFRvcH0sIDIwMCk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZU91dCgxMDAsICgpID0+IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmh0bWwoJycpLmFwcGVuZChlZGl0QmFubmVyKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbigxMDApO1xuXHRcdFx0fSk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBvbkVkaXQocGF5bG9hZCk7XG5cdFx0XHRcdGNvbnN0IHVzZVRpbWUgPSBEYXRlLm5vdygpIC0gdGltZXI7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKVxuXHRcdFx0XHRcdC5maW5kKCcuV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0XHQuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoNiwgMjM5LCA5MiwgMC40NCknKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5XaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdlZGl0X3N1Y2Nlc3MnLCBbdXNlVGltZS50b1N0cmluZygpXSl9YCk7XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSB1bmRlZmluZWQpKTsgLy/lj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSgyMTgsIDE0MiwgMTY3LCAwLjY1KScpO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuaHRtbChlcnJvci5tZXNzYWdlKTtcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0LCNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLnByb3AoXG5cdFx0XHRcdFx0J2Rpc2FibGVkJyxcblx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vQ3RybCtT5o+Q5LqkIEN0cmwrU2hpZnQrU+Wwj+e8lui+kVxuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0LCNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0Jykub24oJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUuY3RybEtleSAmJiBlLndoaWNoID09PSA4Mykge1xuXHRcdFx0XHRpZiAoZS5zaGlmdEtleSkge1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0JykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvL0VzY+mAgOWHulxuXHRcdGlmIChlc2NFeGl0KSB7XG5cdFx0XHQkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIChlKSA9PiB7XG5cdFx0XHRcdGlmIChlLndoaWNoID09PSAyNykge1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGhpZGVRdWlja0VkaXRQYW5lbCgpIHtcblx0XHR0aGlzLnF1aWNrRWRpdFBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAod2luZG93Lm9uYmVmb3JldW5sb2FkID0gdW5kZWZpbmVkKSk7IC8v5Y+W5raI6aG16Z2i5YWz6Zet56Gu6K6kXG5cdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaYvuekuuW/q+mAn+mHjeWumuWQkeW8ueeql1xuXHQgKlxuXHQgKiBAcGFyYW0gcm9vdDBcblx0ICogQHBhcmFtIHJvb3QwLm9uRWRpdFxuXHQgKiBAcGFyYW0gcm9vdDAub25TdWNjZXNzXG5cdCAqL1xuXHRzaG93U2ltcGxlUmVkaXJlY3RQYW5lbCh7b25FZGl0ID0gKCkgPT4ge30sIG9uU3VjY2VzcyA9ICgpID0+IHt9fSA9IHt9KSB7XG5cdFx0Y29uc3QgaW5wdXQgPSAkKCc8aW5wdXQ+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUlucHV0JykuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItVGl0bGUnKTtcblx0XHRjb25zdCBzdW1tYXJ5SW5wdXRUaXRsZSA9ICQoJzxwPicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X3N1bW1hcnlfZGVzYycpKTtcblx0XHRjb25zdCBzdW1tYXJ5SW5wdXQgPSAkKCc8aW5wdXQ+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUlucHV0JykuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItU3VtbWFyeScpO1xuXHRcdGNvbnN0IGFwcGx5QnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLUFwcGx5Jylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdzdWJtaXQnKSk7XG5cdFx0Y29uc3QgY2FuY2VsQnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLUNhbmNlbCcpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY2FuY2VsJykpO1xuXHRcdGNvbnN0IGNvbnRpbnVlQnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLUNvbnRpbnVlJylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdjb250aW51ZScpKTtcblx0XHRjb25zdCBjb250ZW50ID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFwcGVuZChpbnB1dClcblx0XHRcdC5hcHBlbmQoc3VtbWFyeUlucHV0VGl0bGUpXG5cdFx0XHQuYXBwZW5kKHN1bW1hcnlJbnB1dClcblx0XHRcdC5hcHBlbmQoJCgnPGhyPicpKVxuXHRcdFx0LmFwcGVuZChhcHBseUJ0bilcblx0XHRcdC5hcHBlbmQoY2FuY2VsQnRuKTsgLy/mi7zmjqVcblx0XHRjb25zdCBkaWFsb2cgPSB0aGlzLmNyZWF0ZURpYWxvZ0JveChpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3RfZGVzYycpLCBjb250ZW50LCA2MDApO1xuXHRcdGFwcGx5QnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHRpdGxlID0gJCgnI1dpa2lwbHVzLVNSLVRpdGxlJykudmFsKCk7XG5cdFx0XHRjb25zdCBzdW1tYXJ5ID0gJCgnI1dpa2lwbHVzLVNSLVN1bW1hcnknKS52YWwoKTtcblx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuaHRtbChcblx0XHRcdFx0YDxkaXYgY2xhc3M9XCJXaWtpcGx1cy1CYW5uZXJcIj4ke2kxOG4udHJhbnNsYXRlKCdzdWJtaXR0aW5nX2VkaXQnKX08L2Rpdj5gXG5cdFx0XHQpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgb25FZGl0KHtcblx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdGZvcmNlT3ZlcndyaXRlOiBmYWxzZSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zYXZlZCcpKTtcblx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRvblN1Y2Nlc3Moe3RpdGxlfSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoZXJyb3IubWVzc2FnZSk7XG5cdFx0XHRcdGlmIChlcnJvci5jb2RlID09PSAnYXJ0aWNsZWV4aXN0cycpIHtcblx0XHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmFwcGVuZCgkKCc8aHI+JykpLmFwcGVuZChjb250aW51ZUJ0bikuYXBwZW5kKGNhbmNlbEJ0bik7XG5cdFx0XHRcdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb250aW51ZUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoXG5cdFx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwiV2lraXBsdXMtQmFubmVyXCI+JHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9PC9kaXY+YFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IG9uRWRpdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zYXZlZCcpKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRcdFx0XHRvblN1Y2Nlc3Moe3RpdGxlfSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoZXJyb3IubWVzc2FnZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOmakOiXj+W/q+mAn+mHjeWumuWQkeW8ueeql1xuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGRpYWxvZ1xuXHQgKi9cblx0aGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nID0gJCgnYm9keScpKSB7XG5cdFx0ZGlhbG9nLmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRzaG93U2V0dGluZ3NQYW5lbCh7b25TdWJtaXQgPSAoKSA9PiB7fX0gPSB7fSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPHRleHRhcmVhPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS5hdHRyKCdyb3dzJywgJzEwJyk7XG5cdFx0Y29uc3QgYXBwbHlCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU2V0dGluZy1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TZXR0aW5nLUNhbmNlbCcpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY2FuY2VsJykpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSAkKCc8ZGl2PicpLmFwcGVuZChpbnB1dCkuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGFwcGx5QnRuKS5hcHBlbmQoY2FuY2VsQnRuKTsgLy/mi7zmjqVcblxuXHRcdGNvbnN0IGRpYWxvZyA9IHRoaXMuY3JlYXRlRGlhbG9nQm94KGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19kZXNjJyksIGNvbnRlbnQsIDYwMCwgKCkgPT4ge1xuXHRcdFx0aWYgKGxvY2FsU3RvcmFnZS5XaWtpcGx1c19TZXR0aW5ncykge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbChsb2NhbFN0b3JhZ2UuV2lraXBsdXNfU2V0dGluZ3MpO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuV2lraXBsdXNfU2V0dGluZ3MpO1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKEpTT04uc3RyaW5naWZ5KHNldHRpbmdzLCBudWxsLCAyKSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8vIGlnbm9yZVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLmF0dHIoJ3BsYWNlaG9sZGVyJywgaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX3BsYWNlaG9sZGVyJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGFwcGx5QnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHNhdmVkQmFubmVyID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJykudGV4dChpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3Nfc2F2ZWQnKSk7XG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9ICQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKCk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRvblN1Ym1pdCh7c2V0dGluZ3N9KTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5odG1sKCcnKS5hcHBlbmQoc2F2ZWRCYW5uZXIpO1xuXHRcdFx0XHRhd2FpdCBzbGVlcCgxNTAwKTtcblx0XHRcdFx0dGhpcy5oaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cpO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdE5vdGlmaWNhdGlvbi5lcnJvcihpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3NfZ3JhbW1hcl9lcnJvcicpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5oaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cpO1xuXHRcdH0pO1xuXHR9XG5cblx0aGlkZVNldHRpbmdzUGFuZWwoZGlhbG9nID0gJCgnYm9keScpKSB7XG5cdFx0ZGlhbG9nLmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRiaW5kUHJlbG9hZEV2ZW50cyhvblByZWxvYWQpIHtcblx0XHQkKCcjdG9jJylcblx0XHRcdC5jaGlsZHJlbigndWwnKVxuXHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0LmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0JCh0aGlzKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCQodGhpcykub2ZmKCdtb3VzZW92ZXInKTtcblx0XHRcdFx0XHRvblByZWxvYWQoe1xuXHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcjogaSArIDEsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVJKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNsYXNzIFNldHRpbmdzIHtcblx0Z2V0U2V0dGluZyhrZXksIG9iamVjdCA9IHt9KSB7XG5cdFx0Y29uc3QgdyA9IG9iamVjdDtcblx0XHRsZXQgc2V0dGluZ3M7XG5cdFx0dHJ5IHtcblx0XHRcdHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbJ1dpa2lwbHVzX1NldHRpbmdzJ10pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgY3VzdG9tU2V0dGluZ0Z1bmN0aW9uID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gJHtzZXR0aW5nc1trZXldfWApO1xuXHRcdFx0aWYgKHR5cGVvZiBjdXN0b21TZXR0aW5nRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoY3VzdG9tU2V0dGluZ0Z1bmN0aW9uKCkodykgPT09IHRydWUpIHtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGN1c3RvbVNldHRpbmdGdW5jdGlvbigpKHcpIHx8IHNldHRpbmdzW2tleV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHNldHRpbmdzW2tleV07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGBcXCR7JHtrZXl9fWAsIG9iamVjdFtrZXldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2V0dGluZ3MoKTtcbiIsICIvKiEgV2lraXBsdXMgLSA0LjAuMTEgfCBFcmlkYW51cyBTb3JhICjlprnnqbrphbEpIHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG4jV2lraXBsdXMtUXVpY2tlZGl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4jV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQge1xuICB3aWR0aDogNTAlO1xufVxuLnNraW4tdmVjdG9yICNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQsXG4jV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogcmV2ZXJ0O1xufVxuI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDVweCAwO1xufVxuLldpa2lwbHVzLUJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogM3B4IDVweDtcbiAgcGFkZGluZzogM3B4IDFlbTtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjYWFhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1CdG4gYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMwMDA7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICB6LWluZGV4OiAyMDA7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjEsIDE1NCwgMjIwLCAwLjQxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjlmNztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgdG9wOiAtOHB4O1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZjZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBjdXJzb3I6IG1vdmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtSW5wdXQge1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiA2MCU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogYXV0byAzcHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1CdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xufVxuLldpa2lwbHVzLUludGVyQm94LUNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDNweCA3cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggbGFiZWwge1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiB7XG4gIHRhYmxlLWxheW91dDogYXV0bztcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWFkZGVkbGluZSxcbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWRlbGV0ZWRsaW5lLFxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtbGluZW5vIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLW1hcmtlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uV2lraXBsdXMtQmFubmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxOTMsIDIyMiwgMjE0LCAwLjUxKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtc2Fucywgc2Fucy1zZXJpZik7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAzcHggNXB4O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAjYWFhO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDNweCBhdXRvIDNweCAzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtc2Fucywgc2Fucy1zZXJpZik7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS1zdWNjZXNzIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOGRkYTkzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGEwMDtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXdhcm5pbmcge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmRmMDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiZDAwO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS1lcnJvciB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2U3MTcxNztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMDBlMDY7XG59XG4jTW9lTm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDcxMztcbiAgbWluLXdpZHRoOiAyMCU7XG59XG4iLCAiLyoqXG4gKiBXaWtpcGx1c1xuICogRXJpZGFudXMgU29yYSA8c29yYUBzb3VuZC5tb2U+XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgUGFnZSBmcm9tICcuL2NvcmUvcGFnZSc7XG5pbXBvcnQgVUkgZnJvbSAnLi9jb3JlL3VpJztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi9jb3JlL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgV2lraSBmcm9tICcuL3NlcnZpY2VzL3dpa2knO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vdXRpbHMvc2V0dGluZ3MnO1xuaW1wb3J0IExvZyBmcm9tICcuL3V0aWxzL2xvZyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCBpMThuIGZyb20gJy4vdXRpbHMvaTE4bic7XG5pbXBvcnQgJy4vd2lraXBsdXMubGVzcyc7XG5cbiQoYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBQYWdlcyA9IHt9O1xuXHRjb25zdCBpc0N1cnJlbnRQYWdlRW1wdHkgPSAkKCcubm9hcnRpY2xldGV4dCcpLmxlbmd0aCA+IDAgJiYgQ29uc3RhbnRzLmFydGljbGVJZCA9PT0gMDtcblxuXHQvKipcblx0ICogR2V0IHBhZ2UgaW5zdGFuY2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMucmV2aXNpb25JZCDpobXpnaLkv67orqLniYjmnKzlj7dcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy50aXRsZSDpobXpnaLmoIfpophcblx0ICovXG5cdGNvbnN0IGdldFBhZ2UgPSBhc3luYyAoe3JldmlzaW9uSWQsIHRpdGxlfSkgPT4ge1xuXHRcdGlmIChQYWdlc1tyZXZpc2lvbklkXSkge1xuXHRcdFx0cmV0dXJuIFBhZ2VzW3JldmlzaW9uSWRdO1xuXHRcdH1cblx0XHRjb25zdCBuZXdQYWdlID0gbmV3IFBhZ2Uoe1xuXHRcdFx0cmV2aXNpb25JZCxcblx0XHRcdHRpdGxlLFxuXHRcdH0pO1xuXHRcdGF3YWl0IG5ld1BhZ2UuaW5pdCgpO1xuXHRcdFBhZ2VzW3JldmlzaW9uSWRdID0gbmV3UGFnZTtcblx0XHRyZXR1cm4gUGFnZXNbcmV2aXNpb25JZF07XG5cdH07XG5cblx0TG9nLmluZm8oYFdpa2lwbHVzIG5vdyBsb2FkaW5nLiBWZXJzaW9uOiAke0NvbnN0YW50cy52ZXJzaW9ufWApO1xuXG5cdGlmICghd2luZG93Lm13KSB7XG5cdFx0Y29uc29sZS5sb2coJ01lZGlhd2lraSBKYXZhU2NyaXB0IG5vdCBsb2FkZWQgb3Igbm90IGEgTWVkaWF3aWtpIHdlYnNpdGUuJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmICghQ29uc3RhbnRzLnVzZXJHcm91cHMuaW5jbHVkZXMoJ2F1dG9jb25maXJtZWQnKSAmJiAhQ29uc3RhbnRzLnVzZXJHcm91cHMuaW5jbHVkZXMoJ2NvbmZpcm1lZCcpKSB7XG5cdFx0Tm90aWZpY2F0aW9uLmVycm9yKGkxOG4udHJhbnNsYXRlKCdub3RfYXV0b2NvbmZpcm1lZF91c2VyJykpO1xuXHRcdExvZy5pbmZvKGkxOG4udHJhbnNsYXRlKCdub3RfYXV0b2NvbmZpcm1lZF91c2VyJykpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghQ29uc3RhbnRzLmlzQXJ0aWNsZSB8fCBDb25zdGFudHMuYWN0aW9uICE9PSAndmlldycpIHtcblx0XHRMb2cuaW5mbygnTm90IGFuIGVkaXRhYmxlIHBhZ2UuIFN0b3AgaW5pdGlhbGl6YXRpb24uJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gSW5pdGlhbGl6ZSBjdXJyZW50IHBhZ2Ug6buY6K6k5Yid5aeL5YyW5b2T5YmN6aG16Z2iXG5cdHdpbmRvdy5fV2lraXBsdXNQYWdlcyA9IFBhZ2VzO1xuXHRjb25zdCBjdXJyZW50UGFnZU5hbWUgPSBDb25zdGFudHMuY3VycmVudFBhZ2VOYW1lO1xuXHRjb25zdCByZXZpc2lvbklkID0gQ29uc3RhbnRzLnJldmlzaW9uSWQ7XG5cdGNvbnN0IGN1cnJlbnRQYWdlID0gYXdhaXQgZ2V0UGFnZSh7XG5cdFx0cmV2aXNpb25JZCxcblx0XHR0aXRsZTogY3VycmVudFBhZ2VOYW1lLFxuXHR9KTtcblxuXHRjb25zdCBoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkID0gYXN5bmMgKHtzZWN0aW9uTnVtYmVyLCBzZWN0aW9uTmFtZSwgdGFyZ2V0UGFnZU5hbWV9ID0ge30pID0+IHtcblx0XHRjb25zdCBpc090aGVyUGFnZSA9IHRhcmdldFBhZ2VOYW1lICE9PSBjdXJyZW50UGFnZU5hbWU7XG5cdFx0aWYgKGlzT3RoZXJQYWdlICYmIENvbnN0YW50cy5sYXRlc3RSZXZpc2lvbklkICE9PSBDb25zdGFudHMucmV2aXNpb25JZCkge1xuXHRcdFx0Ly8g5Zyo5Y6G5Y+y54mI5pys57yW6L6R5YW25LuW6aG16Z2i5pyJ6Zeu6aKYIOaaguaXtuS4jeaUr+aMgVxuXHRcdFx0TG9nLmVycm9yKCdjcm9zc19wYWdlX2hpc3RvcnlfcmV2aXNpb25fZWRpdF93YXJuaW5nJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHJldmlzaW9uSWQgPSBpc090aGVyUGFnZSA/IGF3YWl0IFdpa2kuZ2V0TGF0ZXN0UmV2aXNpb25JZEZvclBhZ2UodGFyZ2V0UGFnZU5hbWUpIDogQ29uc3RhbnRzLnJldmlzaW9uSWQ7XG5cblx0XHRjb25zdCBwYWdlID0gYXdhaXQgZ2V0UGFnZSh7cmV2aXNpb25JZCwgdGl0bGU6IHRhcmdldFBhZ2VOYW1lfSk7XG5cdFx0Y29uc3QgY3VzdG9tU3VtbWFyeSA9IFNldHRpbmdzLmdldFNldHRpbmcoJ2RlZmF1bHRTdW1tYXJ5Jywge1xuXHRcdFx0c2VjdGlvbk5hbWUsXG5cdFx0XHRzZWN0aW9uTnVtYmVyLFxuXHRcdFx0c2VjdGlvblRhcmdldE5hbWU6IHRhcmdldFBhZ2VOYW1lLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHN1bW1hcnkgPVxuXHRcdFx0Y3VzdG9tU3VtbWFyeSB8fFxuXHRcdFx0KHNlY3Rpb25OYW1lXG5cdFx0XHRcdD8gYC8qICR7c2VjdGlvbk5hbWV9ICovICR7aTE4bi50cmFuc2xhdGUoJ2RlZmF1bHRfc3VtbWFyeV9zdWZmaXgnKX1gXG5cdFx0XHRcdDogaTE4bi50cmFuc2xhdGUoJ2RlZmF1bHRfc3VtbWFyeV9zdWZmaXgnKSk7XG5cdFx0Y29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdE5vdGlmaWNhdGlvbi5zdWNjZXNzKGkxOG4udHJhbnNsYXRlKCdsb2FkaW5nJykpO1xuXHRcdH0sIDIwMCk7XG5cdFx0Y29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBhd2FpdCBwYWdlLmdldFdpa2lUZXh0KHtcblx0XHRcdHNlY3Rpb246IHNlY3Rpb25OdW1iZXIsXG5cdFx0fSk7XG5cdFx0Y29uc3QgaXNFZGl0SGlzdG9yeVJldmlzaW9uID0gIWlzT3RoZXJQYWdlICYmIENvbnN0YW50cy5sYXRlc3RSZXZpc2lvbklkICE9PSBDb25zdGFudHMucmV2aXNpb25JZDtcblx0XHRjb25zdCBlc2NUb0V4aXQgPVxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjX3RvX2V4aXRfcXVpY2tlZGl0JykgPT09IHRydWUgfHwgLy8g5YW85a656ICB6K6+572ua2V5XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NfdG9fZXhpdF9xdWlja2VkaXQnKSA9PT0gJ3RydWUnIHx8XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NUb0V4aXRRdWlja0VkaXQnKSA9PT0gdHJ1ZSB8fFxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjVG9FeGl0UXVpY2tFZGl0JykgPT09ICd0cnVlJztcblx0XHRjb25zdCBjdXN0b21FZGl0VGFncyA9IFNldHRpbmdzLmdldFNldHRpbmcoJ2N1c3RvbV9lZGl0X3RhZ3MnKTtcblx0XHRjb25zdCBkZWZhdWx0RWRpdFRhZ3MgPSBbXTtcblx0XHRjb25zdCBlZGl0VGFncyA9IGN1c3RvbUVkaXRUYWdzPy5sZW5ndGggPyBjdXN0b21FZGl0VGFncyA6IGRlZmF1bHRFZGl0VGFncztcblx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHRcdE5vdGlmaWNhdGlvbi5lbXB0eSgpO1xuXG5cdFx0aWYgKGlzRWRpdEhpc3RvcnlSZXZpc2lvbikge1xuXHRcdFx0Tm90aWZpY2F0aW9uLndhcm5pbmcoaTE4bi50cmFuc2xhdGUoJ2hpc3RvcnlfZWRpdF93YXJuaW5nJykpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNob3VsZFNob3dDcmVhdGVQYWdlVGlwID0gaXNPdGhlclBhZ2UgPyAhcmV2aXNpb25JZCA6IGlzQ3VycmVudFBhZ2VFbXB0eTtcblxuXHRcdFVJLnNob3dRdWlja0VkaXRQYW5lbCh7XG5cdFx0XHR0aXRsZTogYCR7aTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF90b3BidG4nKX0ke1xuXHRcdFx0XHRpc0VkaXRIaXN0b3J5UmV2aXNpb24gPyBpMThuLnRyYW5zbGF0ZSgnaGlzdG9yeV9lZGl0X3dhcm5pbmcnKSA6ICcnXG5cdFx0XHR9YCxcblx0XHRcdGNvbnRlbnQ6IHNob3VsZFNob3dDcmVhdGVQYWdlVGlwID8gaTE4bi50cmFuc2xhdGUoJ2NyZWF0ZV9wYWdlX3RpcCcpIDogc2VjdGlvbkNvbnRlbnQsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdFx0b25CYWNrOiBVSS5oaWRlUXVpY2tFZGl0UGFuZWwsXG5cdFx0XHRvblBhcnNlOiAod2lraVRleHQpID0+IHtcblx0XHRcdFx0cmV0dXJuIHBhZ2UucGFyc2VXaWtpVGV4dCh3aWtpVGV4dCk7XG5cdFx0XHR9LFxuXHRcdFx0b25FZGl0OiBhc3luYyAoe2NvbnRlbnQsIHN1bW1hcnksIGlzTWlub3JFZGl0fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBlZGl0UGF5bG9hZCA9IHtcblx0XHRcdFx0XHRjb250ZW50LFxuXHRcdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdC4uLihzZWN0aW9uTnVtYmVyID09PSAtMSA/IHt9IDoge3NlY3Rpb246IHNlY3Rpb25OdW1iZXJ9KSxcblx0XHRcdFx0XHRcdC4uLihlZGl0VGFncy5sZW5ndGggPyB7dGFnczogZWRpdFRhZ3Muam9pbignfCcpfSA6IHt9KSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAoaXNNaW5vckVkaXQpIHtcblx0XHRcdFx0XHRlZGl0UGF5bG9hZC5jb25maWcubWlub3IgPSAndHJ1ZSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWRpdFBheWxvYWQuY29uZmlnLm5vdG1pbm9yID0gJ3RydWUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF3YWl0IHBhZ2UuZWRpdChlZGl0UGF5bG9hZCk7XG5cdFx0XHR9LFxuXHRcdFx0ZXNjRXhpdDogZXNjVG9FeGl0LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVNpbXBsZVJlZGlyZWN0QnV0dG9uQ2xpY2tlZCA9IGFzeW5jICgpID0+IHtcblx0XHRVSS5zaG93U2ltcGxlUmVkaXJlY3RQYW5lbCh7XG5cdFx0XHRvbkVkaXQ6IGFzeW5jICh7dGl0bGUsIHN1bW1hcnksIGZvcmNlT3ZlcndyaXRlID0gZmFsc2V9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBhZ2UgPSBhd2FpdCBnZXRQYWdlKHt0aXRsZX0pO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50UGFnZU5hbWUgPSBDb25zdGFudHMuY3VycmVudFBhZ2VOYW1lO1xuXHRcdFx0XHRjb25zdCBjb250ZW50bW9kZWwgPSBwYWdlLmNvbnRlbnRtb2RlbDtcblx0XHRcdFx0aWYgKHN1bW1hcnkgPT0gJycpIHtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X2Zyb21fc3VtbWFyeScsIFt0aXRsZSwgY3VycmVudFBhZ2VOYW1lXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgY29udGVudCA9ICgoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGNvbnRlbnQ7XG5cdFx0XHRcdFx0c3dpdGNoIChjb250ZW50bW9kZWwpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ2phdmFzY3JpcHQnOlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYC8qICNSRURJUkVDVCAqL213LmxvYWRlci5sb2FkKFwiJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYXRpb24uaG9zdFxuXHRcdFx0XHRcdFx0XHR9JHtDb25zdGFudHMuc2NyaXB0UGF0aH0vaW5kZXgucGhwP3RpdGxlPSR7bXcudXRpbC53aWtpVXJsZW5jb2RlKFxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlTmFtZVxuXHRcdFx0XHRcdFx0XHQpfSZhY3Rpb249cmF3JmN0eXBlPXRleHQvamF2YXNjcmlwdFwiKTtgO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ2Nzcyc6XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSBgLyogI1JFRElSRUNUICovQGltcG9ydCB1cmwoJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYXRpb24uaG9zdFxuXHRcdFx0XHRcdFx0XHR9JHtDb25zdGFudHMuc2NyaXB0UGF0aH0vaW5kZXgucGhwP3RpdGxlPSR7bXcudXRpbC53aWtpVXJsZW5jb2RlKFxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlTmFtZVxuXHRcdFx0XHRcdFx0XHQpfSZhY3Rpb249cmF3JmN0eXBlPXRleHQvY3NzKTtgO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ1NjcmlidW50byc6XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSBgcmV0dXJuIHJlcXVpcmUgW1ske2N1cnJlbnRQYWdlTmFtZX1dXWA7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnd2lraXRleHQnOlxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IGAjUkVESVJFQ1QgW1ske2N1cnJlbnRQYWdlTmFtZX1dXWA7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdFx0fSkoKTtcblx0XHRcdFx0Y29uc3QgcGF5bG9hZCA9IHtcblx0XHRcdFx0XHRjb250ZW50OiBjb250ZW50LFxuXHRcdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAoIWZvcmNlT3ZlcndyaXRlKSB7XG5cdFx0XHRcdFx0cGF5bG9hZC5jb25maWcuY3JlYXRlb25seSA9ICd0cnVlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBwYWdlLmVkaXQocGF5bG9hZCk7XG5cdFx0XHR9LFxuXHRcdFx0b25TdWNjZXNzOiAoe3RpdGxlfSkgPT4ge1xuXHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gQ29uc3RhbnRzLmFydGljbGVQYXRoLnJlcGxhY2UoL1xcJDEvZ2ksIHRpdGxlKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkID0gYXN5bmMgKCkgPT4ge1xuXHRcdFVJLnNob3dTZXR0aW5nc1BhbmVsKHtcblx0XHRcdG9uU3VibWl0OiAoe3NldHRpbmdzfSkgPT4ge1xuXHRcdFx0XHRKU09OLnBhcnNlKHNldHRpbmdzKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1dpa2lwbHVzX1NldHRpbmdzJywgc2V0dGluZ3MpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVQcmVsb2FkID0gYXN5bmMgKHtzZWN0aW9uTnVtYmVyfSkgPT4ge1xuXHRcdGF3YWl0IGN1cnJlbnRQYWdlLmdldFdpa2lUZXh0KHtcblx0XHRcdHNlY3Rpb246IHNlY3Rpb25OdW1iZXIsXG5cdFx0fSk7XG5cdH07XG5cblx0VUkuaW5zZXJ0VG9wUXVpY2tFZGl0RW50cnkoaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmluc2VydFNlY3Rpb25RdWlja0VkaXRFbnRyaWVzKGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRMaW5rRWRpdEVudHJpZXMoaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmluc2VydFNpbXBsZVJlZGlyZWN0QnV0dG9uKGhhbmRsZVNpbXBsZVJlZGlyZWN0QnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmluc2VydFNldHRpbmdzUGFuZWxCdXR0b24oaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkKTtcblx0VUkuYmluZFByZWxvYWRFdmVudHMoaGFuZGxlUHJlbG9hZCk7XG59KTtcblxuZXhwb3J0IHt9O1xuIiwgImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdCQod2luZG93KS5vbigncmVzaXplJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cdFx0Y29uc3QgJHdpa2lwbHVzSW50ZXJib3ggPSAkYm9keS5maW5kKCcuV2lraXBsdXMtSW50ZXJCb3gnKTtcblx0XHRpZiAoJHdpa2lwbHVzSW50ZXJib3gpIHtcblx0XHRcdCR3aWtpcGx1c0ludGVyYm94LmNzcygnbWF4LXdpZHRoJywgYGNhbGMoJHt3aW5kb3dXaWR0aH1weCAtIDJlbSlgKTtcblx0XHR9XG5cdH0pO1xufSk7XG4iLCAiaW1wb3J0ICcuL1dpa2lwbHVzLmxlc3MnO1xuXG4oZnVuY3Rpb24gV2lraXBsdXMoKTogdm9pZCB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dJc0FydGljbGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dJc0FydGljbGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsb2FkZXIgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc3Qgeyd2aXN1YWxlZGl0b3ItZW5hYmxlJzogaXNWZUVuYWJsZX0gPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCkgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cblx0XHQvKiBzZWUgPGh0dHBzOi8vZ2l0aHViLmNvbS9XaWtpcGx1cy9XaWtpcGx1cy9pc3N1ZXMvNjU+ICovXG5cdFx0aWYgKGlzVmVFbmFibGUpIHtcblx0XHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LnZpc3VhbEVkaXRvci5jb3JlJyk7XG5cdFx0fVxuXG5cdFx0YXdhaXQgaW1wb3J0KCcuL21vZHVsZXMvaW5kZXgnKTtcblx0XHRhd2FpdCBpbXBvcnQoJy4vcmVzaXplJyk7XG5cdH07XG5cblx0dm9pZCBsb2FkZXIoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BO0FBQU4sSUFzQ09DO0FBdENQLElBQUFDLGlCQUFBQyxNQUFBO0VBQUEsNENBQUE7QUFBQTtBQUFNSCxnQkFBTixNQUFnQjtNQUNmSSxVQUFVO01BQ1YsSUFBSUMsWUFBWTtBQUNmLGVBQU9DLE9BQU9DLEdBQUdDLE9BQU9DLElBQUksYUFBYTtNQUMxQztNQUNBLElBQUlDLGtCQUFrQjtBQUNyQixlQUFPSixPQUFPQyxHQUFHQyxPQUFPQyxJQUFJLFlBQVksRUFBRUUsUUFBUSxNQUFNLEdBQUc7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O0FBQ3hDO0VBQ0Q7QUFFQSxRQUFNOU8sU0FBQSw0QkFBQTtBQUFBLFFBQUErTyxTQUFBOVgsa0JBQVMsYUFBMkI7QUFDekMsWUFBTTtRQUFDLHVCQUF1QitYO01BQVUsSUFBSXZaLEdBQUd5SyxLQUFLK08sUUFBUXRaLElBQUk7QUFHaEUsVUFBSXFaLFlBQVk7QUFDZixjQUFNdlosR0FBR3VLLE9BQU9DLE1BQU0sdUJBQXVCO01BQzlDO0FBRUEsWUFBTUosUUFBQWdELFFBQUEsRUFBQTJMLEtBQUEsT0FBQWpELGFBQUEsR0FBQUQsZ0JBQUE7QUFDTixZQUFNekwsUUFBQWdELFFBQUEsRUFBQTJMLEtBQUEsT0FBQUgsWUFBQSxHQUFBRixlQUFBO0lBQ1AsQ0FBQTtBQUFBLFdBQUEsU0FWTW5PLFVBQUE7QUFBQSxhQUFBK08sT0FBQWpSLE1BQUEsTUFBQUMsU0FBQTtJQUFBO0VBQUEsR0FBQTtBQVlOLE9BQUtpQyxPQUFPO0FBQ2IsR0FBRzsiLAogICJuYW1lcyI6IFsiQ29uc3RhbnRzIiwgImNvbnN0YW50c19kZWZhdWx0IiwgImluaXRfY29uc3RhbnRzIiwgIl9fZXNtIiwgInZlcnNpb24iLCAiaXNBcnRpY2xlIiwgIndpbmRvdyIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImN1cnJlbnRQYWdlTmFtZSIsICJyZXBsYWNlIiwgImFydGljbGVJZCIsICJyZXZpc2lvbklkIiwgImxhdGVzdFJldmlzaW9uSWQiLCAiYXJ0aWNsZVBhdGgiLCAic2NyaXB0UGF0aCIsICJhY3Rpb24iLCAic2tpbiIsICJ1c2VyR3JvdXBzIiwgIndpa2lJZCIsICJ1c2VyQWdlbnQiLCAiY29uY2F0IiwgIlJlcXVlc3RzIiwgInJlcXVlc3RzX2RlZmF1bHQiLCAiaW5pdF9yZXF1ZXN0cyIsICJiYXNlIiwgImxvY2F0aW9uIiwgInByb3RvY29sIiwgImhvc3QiLCAicXVlcnkiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidXJsIiwgIlVSTCIsICJfaSIsICJfT2JqZWN0JGtleXMiLCAiT2JqZWN0IiwgImtleXMiLCAibGVuZ3RoIiwgImtleSIsICJzZWFyY2hQYXJhbXMiLCAiYXBwZW5kIiwgInJlc3BvbnNlIiwgImZldGNoIiwgImNyZWRlbnRpYWxzIiwgImhlYWRlcnMiLCAianNvbiIsICJwb3N0IiwgInBheWxvYWQiLCAiZm9ybSIsICJGb3JtRGF0YSIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzIiwgImVudHJpZXMiLCAidmFsdWUiLCAibWV0aG9kIiwgImJvZHkiLCAiSTE4biIsICJpMThuX2RlZmF1bHQiLCAiaW5pdF9pMThuIiwgImxhbmd1YWdlIiwgImkxOG5EYXRhIiwgInNlc3Npb25VcGRhdGVMb2ciLCAiY29uc3RydWN0b3IiLCAiSlNPTiIsICJwYXJzZSIsICJsb2NhbFN0b3JhZ2UiLCAibmF2aWdhdG9yIiwgInRvTG93ZXJDYXNlIiwgImJyb3dzZXJMYW5ndWFnZSIsICJpMThuQ2FjaGUiLCAiZ2V0SXRlbSIsICJfaTMiLCAiX09iamVjdCRrZXlzMiIsICJzZXRJdGVtIiwgInRyYW5zbGF0ZSIsICJwbGFjZWhvbGRlcnMiLCAicmVzdWx0IiwgImxvYWRMYW5ndWFnZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiaW5kZXgiLCAicGxhY2Vob2xkZXIiLCAiZXJyIiwgImUiLCAiZiIsICJfdGhpcyIsICJpbmNsdWRlcyIsICJub3dWZXJzaW9uIiwgInB1c2giLCAiX192ZXJzaW9uIiwgImNvbnNvbGUiLCAiaW5mbyIsICJzdHJpbmdpZnkiLCAiV2lraXBsdXNFcnJvciIsICJMb2ciLCAibG9nX2RlZmF1bHQiLCAiaW5pdF9sb2ciLCAiRXJyb3IiLCAibWVzc2FnZSIsICJjb2RlIiwgImRlYnVnIiwgImVycm9yIiwgImVycm9yQ29kZSIsICJwYXlsb2FkcyIsICJ0ZW1wbGF0ZSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJpIiwgInYiLCAiUmVnRXhwIiwgIldpa2kiLCAid2lraV9kZWZhdWx0IiwgImluaXRfd2lraSIsICJwYWdlSW5mb0NhY2hlIiwgImdldEVkaXRUb2tlbiIsICJtZXRhIiwgImZvcm1hdCIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgImdldFBhZ2VJbmZvIiwgIl94IiwgIl90aGlzMiIsICJ0aXRsZSIsICJwYXJhbXMiLCAicHJvcCIsICJydnByb3AiLCAicmV2aWRzIiwgInRpbWVzdGFtcCIsICJyZXZpZCIsICJjb250ZW50bW9kZWwiLCAidGl0bGVzIiwgInBhZ2VzIiwgInBhZ2VLZXkiLCAicGFnZUluZm8iLCAicmV2aXNpb25zIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRXaWtpVGV4dCIsICJfeDIiLCAic2VjdGlvbiIsICJydnNlY3Rpb24iLCAicGFyc2VXaWtpVGV4dCIsICJfeDMiLCAid2lraXRleHQiLCAidGV4dCIsICJwc3QiLCAiZWRpdCIsICJjb250ZW50IiwgImVkaXRUb2tlbiIsICJhZGRpdGlvbmFsQ29uZmlnIiwgInRva2VuIiwgImJhc2V0aW1lc3RhbXAiLCAid2FybmluZyIsICJnZXRMYXRlc3RSZXZpc2lvbklkRm9yUGFnZSIsICJfdGhpczMiLCAiUGFnZSIsICJwYWdlX2RlZmF1bHQiLCAiaW5pdF9wYWdlIiwgImluaXRlZCIsICJpc05ld1BhZ2UiLCAic2VjdGlvbkNhY2hlIiwgImluaXQiLCAiX3RoaXM0IiwgInByb21pc2VBcnIiLCAiZ2V0VGltZXN0YW1wIiwgImdldENvbnRlbnRNb2RlbCIsICJQcm9taXNlIiwgImFsbCIsICJfdGhpczUiLCAibG9hZGVyIiwgInVzaW5nIiwgInVzZXIiLCAiX3RoaXM2IiwgIl90aGlzNyIsICJfdGhpczgiLCAic2VjIiwgIndpa2lUZXh0IiwgIl90aGlzOSIsICJfdGhpczAiLCAiY3JlYXRlb25seSIsICJOb3RpZmljYXRpb24iLCAibm90aWZpY2F0aW9uX2RlZmF1bHQiLCAiaW5pdF9ub3RpZmljYXRpb24iLCAiJCIsICJkaXNwbGF5IiwgInR5cGUiLCAiY2FsbGJhY2siLCAiYWRkQ2xhc3MiLCAiZmluZCIsICJsYXN0IiwgImZhZGVJbiIsICJiaW5kIiwgImNsZWFyIiwgInNlbGYiLCAib24iLCAic2xpZGVMZWZ0IiwgInN1Y2Nlc3MiLCAiY2hpbGRyZW4iLCAiZmlyc3QiLCAiZmFkZU91dCIsICJyZW1vdmUiLCAic2V0VGltZW91dCIsICJlbXB0eSIsICJlYWNoIiwgImVsZSIsICJkZWxheSIsICJzcGVlZCIsICJjc3MiLCAiYW5pbWF0ZSIsICJsZWZ0IiwgInNsZWVwIiwgInNsZWVwX2RlZmF1bHQiLCAiaW5pdF9zbGVlcCIsICJ0aW1lIiwgInJlc29sdmUiLCAicGFyc2VRdWVyeSIsICJyZWciLCAibWF0Y2giLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAiaW5pdF9oZWxwZXJzIiwgIlVJIiwgInVpX2RlZmF1bHQiLCAiaW5pdF91aSIsICJxdWlja0VkaXRQYW5lbFZpc2libGUiLCAic2Nyb2xsVG9wIiwgImNyZWF0ZURpYWxvZ0JveCIsICJ3aWR0aCIsICJjbGllbnRXaWR0aCIsICJpbm5lcldpZHRoIiwgImNsaWVudEhlaWdodCIsICJpbm5lckhlaWdodCIsICJkaWFsb2dXaWR0aCIsICJNYXRoIiwgIm1pbiIsICJkaWFsb2dCb3giLCAidG9wIiwgImRvY3VtZW50IiwgImh0bWwiLCAicGFyZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAib25iZWZvcmV1bmxvYWQiLCAiYmluZERyYWdnaW5nIiwgImVsZW1lbnQiLCAibW91c2Vkb3duIiwgImJhc2VYIiwgImNsaWVudFgiLCAiYmFzZVkiLCAiY2xpZW50WSIsICJiYXNlT2Zmc2V0WCIsICJvZmZzZXQiLCAiYmFzZU9mZnNldFkiLCAiZTIiLCAidW5iaW5kIiwgIm9mZiIsICJhZGRGdW5jdGlvbkJ1dHRvbiIsICJpZCIsICJidXR0b24iLCAiYXR0ciIsICJpbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbiIsICJvbkNsaWNrIiwgImluc2VydFNldHRpbmdzUGFuZWxCdXR0b24iLCAiaW5zZXJ0VG9wUXVpY2tFZGl0RW50cnkiLCAidG9wQnRuIiwgInRvcEJ0bkxpbmsiLCAic2VjdGlvbk51bWJlciIsICJ0YXJnZXRQYWdlTmFtZSIsICJhZnRlciIsICJpbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyIsICJzZWN0aW9uQnRuIiwgImVkaXRVUkwiLCAic2VjdGlvblRhcmdldE5hbWUiLCAiY2xvbmVOb2RlIiwgInByZXYiLCAiY2xvbmUiLCAic2VjdGlvbk5hbWUiLCAidHJpbSIsICJfc2VjdGlvbkJ0biIsICJiZWZvcmUiLCAiaW5zZXJ0TGlua0VkaXRFbnRyaWVzIiwgImhyZWYiLCAiY2xhc3MiLCAiX3BhcmFtcyRzZWN0aW9uIiwgInNob3dRdWlja0VkaXRQYW5lbCIsICJzdW1tYXJ5IiwgIm9uQmFjayIsICJvblBhcnNlIiwgIm9uRWRpdCIsICJlc2NFeGl0IiwgImhpZGVRdWlja0VkaXRQYW5lbCIsICJiYWNrQnRuIiwgImp1bXBCdG4iLCAiaW5wdXRCb3giLCAicHJldmlld0JveCIsICJzdW1tYXJ5Qm94IiwgImVkaXRTdWJtaXRCdG4iLCAicHJldmlld1N1Ym1pdEJ0biIsICJpc01pbm9yRWRpdCIsICJtYXJnaW4iLCAiZWRpdEJvZHkiLCAidmFsIiwgInByZWxvYWRCYW5uZXIiLCAidGltZXIiLCAiRGF0ZSIsICJub3ciLCAiZWRpdEJhbm5lciIsICJpcyIsICJ1c2VUaW1lIiwgInRvU3RyaW5nIiwgInJlbG9hZCIsICJsb2ciLCAiY3RybEtleSIsICJ3aGljaCIsICJzaGlmdEtleSIsICJ0cmlnZ2VyIiwgInByZXZlbnREZWZhdWx0IiwgInN0b3BQcm9wYWdhdGlvbiIsICJzaG93U2ltcGxlUmVkaXJlY3RQYW5lbCIsICJvblN1Y2Nlc3MiLCAiX3RoaXMxIiwgImlucHV0IiwgInN1bW1hcnlJbnB1dFRpdGxlIiwgInN1bW1hcnlJbnB1dCIsICJhcHBseUJ0biIsICJjYW5jZWxCdG4iLCAiY29udGludWVCdG4iLCAiZGlhbG9nIiwgImZvcmNlT3ZlcndyaXRlIiwgImhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsIiwgImVycm9yMiIsICJzaG93U2V0dGluZ3NQYW5lbCIsICJvblN1Ym1pdCIsICJfdGhpczEwIiwgIldpa2lwbHVzX1NldHRpbmdzIiwgInNldHRpbmdzIiwgInNhdmVkQmFubmVyIiwgImhpZGVTZXR0aW5nc1BhbmVsIiwgImJpbmRQcmVsb2FkRXZlbnRzIiwgIm9uUHJlbG9hZCIsICJTZXR0aW5ncyIsICJzZXR0aW5nc19kZWZhdWx0IiwgImluaXRfc2V0dGluZ3MiLCAiZ2V0U2V0dGluZyIsICJvYmplY3QiLCAidyIsICJjdXN0b21TZXR0aW5nRnVuY3Rpb24iLCAiRnVuY3Rpb24iLCAiX2k0IiwgIl9PYmplY3Qka2V5czMiLCAia2V5MiIsICJpbml0X3dpa2lwbHVzIiwgIm1vZHVsZXNfZXhwb3J0cyIsICJpbml0X21vZHVsZXMiLCAiUGFnZXMiLCAiaXNDdXJyZW50UGFnZUVtcHR5IiwgImdldFBhZ2UiLCAiX3JlZjciLCAicmV2aXNpb25JZDIiLCAibmV3UGFnZSIsICJfeDQiLCAiX1dpa2lwbHVzUGFnZXMiLCAiY3VycmVudFBhZ2UiLCAiaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCIsICJfcmVmOCIsICJpc090aGVyUGFnZSIsICJwYWdlIiwgImN1c3RvbVN1bW1hcnkiLCAic2VjdGlvbkNvbnRlbnQiLCAiaXNFZGl0SGlzdG9yeVJldmlzaW9uIiwgImVzY1RvRXhpdCIsICJjdXN0b21FZGl0VGFncyIsICJkZWZhdWx0RWRpdFRhZ3MiLCAiZWRpdFRhZ3MiLCAiY2xlYXJUaW1lb3V0IiwgInNob3VsZFNob3dDcmVhdGVQYWdlVGlwIiwgIl9yZWY5IiwgInN1bW1hcnkyIiwgImVkaXRQYXlsb2FkIiwgInRhZ3MiLCAiam9pbiIsICJtaW5vciIsICJub3RtaW5vciIsICJfeDUiLCAiaGFuZGxlU2ltcGxlUmVkaXJlY3RCdXR0b25DbGlja2VkIiwgIl9yZWYwIiwgIl9yZWYxIiwgImN1cnJlbnRQYWdlTmFtZTIiLCAiY29udGVudDIiLCAidXRpbCIsICJ3aWtpVXJsZW5jb2RlIiwgIl94NiIsICJoYW5kbGVTZXR0aW5nc0J1dHRvbkNsaWNrZWQiLCAiX3JlZjEwIiwgImhhbmRsZVByZWxvYWQiLCAiX3JlZjExIiwgIl94NyIsICJyZXNpemVfZXhwb3J0cyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbml0X3Jlc2l6ZSIsICJyZXF1aXJlIiwgImdldEJvZHkiLCAidGhlbiIsICIkYm9keSIsICJ3aW5kb3dXaWR0aCIsICIkd2lraXBsdXNJbnRlcmJveCIsICJXaWtpcGx1cyIsICJ3Z0FjdGlvbiIsICJ3Z0lzQXJ0aWNsZSIsICJfcmVmMTIiLCAiaXNWZUVuYWJsZSIsICJvcHRpb25zIl0KfQo=
