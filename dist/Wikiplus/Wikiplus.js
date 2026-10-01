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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
//! src/Wikiplus/modules/wikiplus.less
var init_wikiplus = __esm({
  "src/Wikiplus/modules/wikiplus.less"() {
  }
});
//! src/Wikiplus/modules/utils/constants.ts
var Constants;
var constants_default;
var init_constants = __esm({
  "src/Wikiplus/modules/utils/constants.ts"() {
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
//! src/Wikiplus/modules/utils/i18n.ts
var I18n;
var i18n_default;
var init_i18n = __esm({
  "src/Wikiplus/modules/utils/i18n.ts"() {
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
          language = navigator.language.replace(/han[st]-?/i, "").toLowerCase();
        }
        this.language = language;
        try {
          const i18nCache = JSON.parse(localStorage.getItem("Wikiplus_i18nCache"));
          for (var _i = 0, _Object$keys = Object.keys(i18nCache); _i < _Object$keys.length; _i++) {
            const key = _Object$keys[_i];
            this.i18nData[key] = i18nCache[key];
          }
        } catch {
          localStorage.setItem("Wikiplus_i18nCache", "{}");
        }
      }
      translate(key, placeholders) {
        let result = "";
        placeholders || (placeholders = []);
        if (this.language in this.i18nData) {
          const i18nDataLang = this.i18nData[this.language];
          if (i18nDataLang && key in i18nDataLang) {
            result = i18nDataLang[key];
          } else {
            this.loadLanguage(this.language);
            if (this.i18nData["en-us"] && key in this.i18nData["en-us"]) {
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
//! src/Wikiplus/modules/utils/log.ts
var WikiplusError;
var Log;
var log_default;
var init_log = __esm({
  "src/Wikiplus/modules/utils/log.ts"() {
    "use strict";
    init_i18n();
    WikiplusError = class extends Error {
      code;
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
//! src/Wikiplus/modules/core/notification.ts
var Notification;
var notification_default;
var init_notification = __esm({
  "src/Wikiplus/modules/core/notification.ts"() {
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
        if (callback && typeof callback === "function") {
          callback($("#MoeNotification").find(".MoeNotification-notice").last());
        }
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
          if (f && typeof f === "function") {
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
      slideLeft(ele, speed = 150) {
        ele.css("position", "relative");
        ele.animate({
          left: "-200%"
        }, speed, function() {
          $(this).fadeOut("fast", function() {
            $(this).remove();
          });
        });
      }
    };
    notification_default = new Notification();
  }
});
//! src/Wikiplus/modules/utils/requests.ts
var Requests;
var requests_default;
var init_requests = __esm({
  "src/Wikiplus/modules/utils/requests.ts"() {
    "use strict";
    init_constants();
    Requests = {
      base: "".concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/api.php"),
      get(query) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          for (var _i2 = 0, _Object$keys2 = Object.keys(query); _i2 < _Object$keys2.length; _i2++) {
            const key = _Object$keys2[_i2];
            if (Array.isArray(query[key])) {
              url.searchParams.append(key, query[key].join("|"));
            } else {
              url.searchParams.append(key, query[key]);
            }
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
          for (var _i3 = 0, _Object$entries = Object.entries(payload); _i3 < _Object$entries.length; _i3++) {
            const [key, value] = _Object$entries[_i3];
            if (Array.isArray(value)) {
              form.append(key, value.join("|"));
            } else {
              form.append(key, value);
            }
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
//! src/Wikiplus/modules/services/wiki.ts
var Wiki;
var wiki_default;
var init_wiki = __esm({
  "src/Wikiplus/modules/services/wiki.ts"() {
    "use strict";
    init_log();
    init_i18n();
    init_requests();
    Wiki = class {
      pageInfoCache = {};
      /**
       * 获得 Edit Token
       * Get Edit Token
       *
       * @returns {Promise<string| void>}
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
          log_default.error("fail_to_get_edittoken");
        })();
      }
      /**
       * 获得页面上一版本时间戳
       * Get the timestamp of the last revision of page specified.
       *
       * @param {Object} param
       * @param {string} param.title 页面名 / Pagename
       * @param {number} param.revisionId 修订版本号 / Revision ID
       * @param {string} param.contentmodel 内容模型 / Content Model
       * @returns {Promise<{timestamp?: string; revisionId?: number; contentmodel: string;}>}
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
       * @param {Object} config
       * @param {number} config.revisionId 版本号
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
       * @param {Object} _config 设置
       * @return {Promise<string>} 解析结果 HTML
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      parseWikiText(_x3) {
        return _asyncToGenerator(function* (wikitext, title = "", _config = {}) {
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
       * @param {EditParams} param
       */
      edit(_x4) {
        return _asyncToGenerator(function* ({
          title,
          content,
          editToken,
          timestamp,
          config = {},
          additionalConfig = {}
        }) {
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
       * @param {string} title
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
//! src/Wikiplus/modules/core/page.ts
var Page;
var page_default;
var init_page = __esm({
  "src/Wikiplus/modules/core/page.ts"() {
    "use strict";
    init_log();
    init_wiki();
    Page = class {
      timestamp = "";
      editToken = "";
      title;
      revisionId;
      inited = false;
      isNewPage = false;
      contentmodel = "wikitext";
      sectionCache = {};
      /**
       * @param {Object} params
       * @param {string} params.title 页面标题 Page Name (optional)
       * @param {number} params.revisionId 页面修订编号 Revision Id
       */
      constructor({
        title,
        revisionId = 0
      }) {
        this.title = title;
        this.revisionId = revisionId;
        this.isNewPage = !revisionId;
      }
      /**
       * 初始化 获得页面EditToken和初始TimeStamp
       * Initialization.
       *
       * @param {Object} params
       * @param {string} params.editToken (optional) 如果提供了editToken，将不会再获取
       */
      init() {
        var _this4 = this;
        return _asyncToGenerator(function* ({
          editToken
        } = {
          editToken: ""
        }) {
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
       * @param {string|number} config.section
       * @param {string} config.revisionId
       */
      getWikiText() {
        var _this8 = this;
        return _asyncToGenerator(function* ({
          section = ""
        } = {}) {
          const sec = section === -1 ? 0 : section;
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
          return yield wiki_default.parseWikiText(wikitext, _this9.title);
        })();
      }
      /**
       * 编辑页面
       *
       * @param {ApiEditPageParams} payload
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
          return yield wiki_default.edit({
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
//! src/Wikiplus/modules/utils/settings.ts
var Settings;
var settings_default;
var init_settings = __esm({
  "src/Wikiplus/modules/utils/settings.ts"() {
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
//! src/Wikiplus/modules/utils/helpers.ts
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
  "src/Wikiplus/modules/utils/helpers.ts"() {
    "use strict";
  }
});
//! src/Wikiplus/modules/utils/sleep.ts
var sleep;
var sleep_default;
var init_sleep = __esm({
  "src/Wikiplus/modules/utils/sleep.ts"() {
    "use strict";
    sleep = (time) => {
      return new Promise((resolve) => {
        return setTimeout(resolve, time);
      });
    };
    sleep_default = sleep;
  }
});
//! src/Wikiplus/modules/core/ui.ts
var UI;
var ui_default;
var init_ui = __esm({
  "src/Wikiplus/modules/core/ui.ts"() {
    "use strict";
    init_log();
    init_constants();
    init_notification();
    init_i18n();
    init_helpers();
    init_sleep();
    UI = class {
      quickEditPanelVisible = false;
      scrollTop = 0;
      /**
       * 创建居中对话框
       *
       * @param {string} title 窗口标题
       * @param {string | JQuery<HTMLElement>} content 内容
       * @param {number} width 宽度
       * @param {() => void} callback 回调函数
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
          top: $(document).scrollTop() || 0 + clientHeight * 0.2,
          display: "none"
        }).append($("<div>").addClass("Wikiplus-InterBox-Header").html(title)).append($("<div>").addClass("Wikiplus-InterBox-Content").append(content)).append($("<span>").text("×").addClass("Wikiplus-InterBox-Close"));
        $("body").append(dialogBox);
        $(".Wikiplus-InterBox").width(dialogWidth);
        $(".Wikiplus-InterBox-Close").on("click", function() {
          $(this).parent().fadeOut("fast", () => {
            window.addEventListener("close", window.onbeforeunload = () => void 0);
            $(this).remove();
          });
        });
        const bindDragging = (element) => {
          element.on("mousedown", (e) => {
            var _element$parent$offse, _element$parent$offse2;
            const baseX = e.clientX;
            const baseY = e.clientY;
            const baseOffsetX = ((_element$parent$offse = element.parent().offset()) === null || _element$parent$offse === void 0 ? void 0 : _element$parent$offse.left) || 0;
            const baseOffsetY = ((_element$parent$offse2 = element.parent().offset()) === null || _element$parent$offse2 === void 0 ? void 0 : _element$parent$offse2.top) || 0;
            $(document).on("mousemove", (e2) => {
              element.parent().css({
                "margin-left": baseOffsetX + e2.clientX - baseX,
                top: baseOffsetY + e2.clientY - baseY
              });
            });
            $(document).on("mouseup", () => {
              element.off("mousedown");
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
       * @param {() => void} onClick
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
       * @param {() => void} onClick
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
       * @param {OnClick} onClick
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
          if (constants_default.skin === "minerva)") {
            $("#ca-edit").parent().after(topBtn);
          } else {
            $("#ca-edit").after(topBtn);
          }
        }
      }
      /**
       * 插入段落快速编辑按钮
       * Insert QuickEdit buttons for each section.
       *
       * @param {OnClick} onClick
       */
      insertSectionQuickEditEntries(onClick) {
        onClick || (onClick = () => {
        });
        const sectionBtn = constants_default.skin === "minerva" ? $("<span>").append($("<a>").addClass("Wikiplus-Edit-SectionBtn mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 edit-page mw-ui-icon-flush-right").css("margin-left", "0.75em").attr("href", "javascript:void(0)").attr("title", i18n_default.translate("quickedit_sectionbtn"))) : $("<span>").append($("<span>").addClass("mw-editsection-divider").text(" | ")).append($("<a>").addClass("Wikiplus-Edit-SectionBtn").attr("href", "javascript:void(0)").text(i18n_default.translate("quickedit_sectionbtn")));
        $(".mw-editsection").each(function() {
          try {
            const editURL = $(this).find("a[href*='action=edit']").first().attr("href") || "";
            const [, sectionLabel] = editURL.match(/&[ve]*section\=([^&]+)/);
            const sectionNumber = sectionLabel === null || sectionLabel === void 0 ? void 0 : sectionLabel.replace(/T-/gi, "");
            const [, sectionTargetLabel] = editURL.match(/title=(.+?)&/);
            const sectionTargetName = decodeURIComponent(sectionTargetLabel || "");
            const cloneNode = $(this).prev().clone();
            cloneNode.find(".mw-headline-number").remove();
            const sectionName = cloneNode.text().trim();
            const _sectionBtn = sectionBtn.clone();
            _sectionBtn.find(".Wikiplus-Edit-SectionBtn").on("click", () => {
              onClick({
                sectionNumber: Number.parseInt(sectionNumber, 10),
                sectionName,
                targetPageName: sectionTargetName
              });
            });
            if (constants_default.skin === "minerva") {
              $(this).append(_sectionBtn);
            } else {
              $(this).find(".mw-editsection-bracket").last().before(_sectionBtn);
            }
          } catch {
            log_default.error("fail_to_init_quickedit");
          }
        });
      }
      /**
       * 插入任意链接编辑入口
       *
       * @param {OnClick} onClick
       */
      insertLinkEditEntries(onClick) {
        onClick || (onClick = () => {
        });
        $("#mw-content-text a.external").each(function() {
          const url = $(this).attr("href") || "";
          const params = parseQuery(url);
          if (params["action"] === "edit" && params["title"] !== void 0 && params["section"] !== "new") {
            $(this).after($("<a>").attr({
              href: "javascript:void(0)",
              class: "Wikiplus-Edit-EveryWhereBtn"
            }).text("(".concat(i18n_default.translate("quickedit_sectionbtn"), ")")).on("click", () => {
              var _Number$parseInt;
              onClick({
                targetPageName: params["title"],
                sectionNumber: (_Number$parseInt = Number.parseInt(params["section"], 10)) !== null && _Number$parseInt !== void 0 ? _Number$parseInt : -1
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
        onParse = /* @__PURE__ */ _asyncToGenerator(function* () {
        }),
        onEdit = /* @__PURE__ */ _asyncToGenerator(function* () {
        }),
        escExit = false
      }) {
        const self = this;
        this.scrollTop = $(document).scrollTop() || 0;
        if (this.quickEditPanelVisible) {
          this.hideQuickEditPanel();
        }
        this.quickEditPanelVisible = true;
        window.addEventListener("close", window.onbeforeunload = () => "".concat(i18n_default.translate("onclose_confirm")));
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
            window.addEventListener("close", window.onbeforeunload = () => void 0);
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
        $(".Wikiplus-InterBox").fadeOut("fast", () => {
          window.addEventListener("close", window.onbeforeunload = () => void 0);
          $(this).remove();
        });
      }
      /**
       * 显示快速重定向弹窗
       *
       * @param {Object} param
       * @param {OnEdit} param.onEdit
       * @param {OnSuccess} param.onSuccess
       */
      showSimpleRedirectPanel({
        onEdit = /* @__PURE__ */ _asyncToGenerator(function* () {
        }),
        onSuccess = () => {
        }
      }) {
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
       * @param {JQuery<HTMLElement>} dialog
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
          if (localStorage["Wikiplus_Settings"]) {
            $("#Wikiplus-Setting-Input").val(localStorage["Wikiplus_Settings"]);
            try {
              const settings = JSON.parse(localStorage["Wikiplus_Settings"]);
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
        $("#toc").children("ul").find("a").each((i) => {
          $(this).on("mouseover", () => {
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
//! src/Wikiplus/modules/index.ts
var modules_exports = {};
var init_modules = __esm({
  "src/Wikiplus/modules/index.ts"() {
    "use strict";
    init_wikiplus();
    init_constants();
    init_log();
    init_notification();
    init_page();
    init_settings();
    init_ui();
    init_wiki();
    init_i18n();
    $(/* @__PURE__ */ _asyncToGenerator(function* () {
      var _constants_default$us, _constants_default$us2;
      const Pages = {};
      const isCurrentPageEmpty = $(".noarticletext").length > 0 && constants_default.articleId === 0;
      const getPage = /* @__PURE__ */ (function() {
        var _ref0 = _asyncToGenerator(function* ({
          revisionId: revisionId2 = 0,
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
        return function getPage2(_x5) {
          return _ref0.apply(this, arguments);
        };
      })();
      log_default.info("Wikiplus now loading. Version: ".concat(constants_default.version));
      if (!window.mw) {
        console.log("Mediawiki JavaScript not loaded or not a Mediawiki website.");
        return;
      }
      if (!((_constants_default$us = constants_default.userGroups) !== null && _constants_default$us !== void 0 && _constants_default$us.includes("autoconfirmed")) && !((_constants_default$us2 = constants_default.userGroups) !== null && _constants_default$us2 !== void 0 && _constants_default$us2.includes("confirmed"))) {
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
        var _ref1 = _asyncToGenerator(function* ({
          sectionNumber,
          sectionName,
          targetPageName
        }) {
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
              var _ref10 = _asyncToGenerator(function* ({
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
              return function onEdit(_x7) {
                return _ref10.apply(this, arguments);
              };
            })(),
            escExit: escToExit
          });
        });
        return function handleQuickEditButtonClicked2(_x6) {
          return _ref1.apply(this, arguments);
        };
      })();
      const handleSimpleRedirectButtonClicked = () => {
        ui_default.showSimpleRedirectPanel({
          onEdit: (function() {
            var _ref11 = _asyncToGenerator(function* ({
              title,
              summary,
              forceOverwrite = false
            }) {
              const page = yield getPage({
                title
              });
              const currentPageName2 = constants_default.currentPageName;
              const contentmodel = page.contentmodel;
              if (summary === "") {
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
            return function onEdit(_x8) {
              return _ref11.apply(this, arguments);
            };
          })(),
          onSuccess: ({
            title
          }) => {
            location.href = constants_default.articlePath.replace(/\$1/gi, title);
          }
        });
      };
      const handleSettingsButtonClicked = () => {
        ui_default.showSettingsPanel({
          onSubmit: ({
            settings
          }) => {
            JSON.parse(settings);
            localStorage.setItem("Wikiplus_Settings", settings);
          }
        });
      };
      const handlePreload = /* @__PURE__ */ (function() {
        var _ref12 = _asyncToGenerator(function* ({
          sectionNumber
        }) {
          yield currentPage.getWikiText({
            section: sectionNumber
          });
        });
        return function handlePreload2(_x9) {
          return _ref12.apply(this, arguments);
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
//! src/Wikiplus/Wikiplus.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/Wikiplus/resize.ts
var resizeWikiplus = ($body) => {
  $(window).on("resize", () => {
    const windowWidth = $(window).width();
    const $wikiplusInterbox = $body.find(".Wikiplus-InterBox");
    if ($wikiplusInterbox) {
      const clientWidth = window.innerWidth;
      const clientHeight = window.innerHeight;
      const dialogWidth = Math.min(clientWidth, 600);
      const scrollTop = $(document).scrollTop() || 0;
      $wikiplusInterbox.css("margin-left", clientWidth / 2 - dialogWidth / 2);
      $wikiplusInterbox.css("top", scrollTop + clientHeight * 0.2);
      $wikiplusInterbox.css("max-width", "calc(".concat(windowWidth, "px - 2em)"));
    }
  });
};
//! src/Wikiplus/Wikiplus.ts
void (0, import_ext_gadget.getBody)().then(/* @__PURE__ */ (function() {
  var _Wikiplus = _asyncToGenerator(function* ($body) {
    const {
      wgAction,
      wgIsArticle
    } = mw.config.get();
    if (wgAction !== "view" || !wgIsArticle) {
      return;
    }
    const {
      "visualeditor-enable": isVeEnable
    } = mw.user.options.get();
    if (isVeEnable) {
      yield mw.loader.using("ext.visualEditor.core");
    }
    yield Promise.resolve().then(() => (init_modules(), modules_exports));
    resizeWikiplus($body);
  });
  function Wikiplus(_x0) {
    return _Wikiplus.apply(this, arguments);
  }
  return Wikiplus;
})());

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzL21vZHVsZXMvd2lraXBsdXMubGVzcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9jb25zdGFudHMudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvaTE4bi50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9sb2cudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS9ub3RpZmljYXRpb24udHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvcmVxdWVzdHMudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvc2VydmljZXMvd2lraS50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL3BhZ2UudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvc2V0dGluZ3MudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvaGVscGVycy50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9zbGVlcC50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL3VpLnRzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2luZGV4LnRzIiwgInNyYy9XaWtpcGx1cy9XaWtpcGx1cy50cyIsICJzcmMvV2lraXBsdXMvcmVzaXplLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIuY2xlYXIge1xuICBjbGVhcjogYm90aDtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCB7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2tpbi12ZWN0b3IgI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCxcbiNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nOiByZXZlcnQ7XG59XG4jV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0IHtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogNXB4IDA7XG59XG4uV2lraXBsdXMtQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAzcHggNXB4O1xuICBwYWRkaW5nOiAzcHggMWVtO1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4ICNhYWE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLldpa2lwbHVzLUJ0biBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzAwMDtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB7XG4gIC0tZm9udHMtZGVmYXVsdDogJ0FyaWFsJywgJ1RhaG9tYScsICdNaWNyb3NvZnQgWWFIZWknLCAnSGlyYWdpbm8gU2FucyBHQicsICdNaWNyb3NvZnQgSmhlbmdIZWknLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICB6LWluZGV4OiAyMDA7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjEsIDE1NCwgMjIwLCAwLjQxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjlmNztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgdG9wOiAtOHB4O1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZjZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBjdXJzb3I6IG1vdmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtSW5wdXQge1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiA2MCU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogYXV0byAzcHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1CdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xufVxuLldpa2lwbHVzLUludGVyQm94LUNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDNweCA3cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggbGFiZWwge1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiB7XG4gIHRhYmxlLWxheW91dDogYXV0bztcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWFkZGVkbGluZSxcbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWRlbGV0ZWRsaW5lLFxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtbGluZW5vIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLW1hcmtlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uV2lraXBsdXMtQmFubmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxOTMsIDIyMiwgMjE0LCAwLjUxKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtc2FucywgdmFyKC0tZm9udHMtZGVmYXVsdCwgc2Fucy1zZXJpZikpO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Uge1xuICAtLWZvbnRzLWRlZmF1bHQ6ICdBcmlhbCcsICdUYWhvbWEnLCAnTWljcm9zb2Z0IFlhSGVpJywgJ0hpcmFnaW5vIFNhbnMgR0InLCAnTWljcm9zb2Z0IEpoZW5nSGVpJywgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDNweCA1cHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICB3aWR0aDogYXV0bztcbiAgYm94LXNoYWRvdzogMCAzcHggM3B4ICNhYWE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogM3B4IGF1dG8gM3B4IDNweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250cy1zYW5zLCB2YXIoLS1mb250cy1kZWZhdWx0LCBzYW5zLXNlcmlmKSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS1zdWNjZXNzIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOGRkYTkzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGEwMDtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXdhcm5pbmcge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmRmMDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiZDAwO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS1lcnJvciB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2U3MTcxNztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMDBlMDY7XG59XG4jTW9lTm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDcxMztcbiAgbWluLXdpZHRoOiAyMCU7XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuY2xhc3MgQ29uc3RhbnRzIHtcblx0dmVyc2lvbiA9ICc0LjEuMCc7XG5cdGdldCBpc0FydGljbGUoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0lzQXJ0aWNsZScpO1xuXHR9XG5cdGdldCBjdXJyZW50UGFnZU5hbWUoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvIC9nLCAnXycpO1xuXHR9XG5cdGdldCBhcnRpY2xlSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpO1xuXHR9XG5cdGdldCByZXZpc2lvbklkKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyk7XG5cdH1cblx0Z2V0IGxhdGVzdFJldmlzaW9uSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0N1clJldmlzaW9uSWQnKTtcblx0fVxuXHRnZXQgYXJ0aWNsZVBhdGgoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FydGljbGVQYXRoJyk7XG5cdH1cblx0Z2V0IHNjcmlwdFBhdGgoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1NjcmlwdFBhdGgnKTtcblx0fVxuXHRnZXQgYWN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcblx0fVxuXHRnZXQgc2tpbigpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3NraW4nKTtcblx0fVxuXHRnZXQgdXNlckdyb3VwcygpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpO1xuXHR9XG5cdGdldCB3aWtpSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuXHR9XG5cdHVzZXJBZ2VudCA9IGBRaXV3ZW4vMS4xIFdpa2lwbHVzLyR7dGhpcy52ZXJzaW9ufSAoJHt0aGlzLndpa2lJZH0pYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnN0YW50cygpO1xuIiwgImNsYXNzIEkxOG4ge1xuXHRsYW5ndWFnZTogc3RyaW5nO1xuXHRpMThuRGF0YTogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7fTtcblx0c2Vzc2lvblVwZGF0ZUxvZzogc3RyaW5nW10gPSBbXTtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGxhbmd1YWdlO1xuXHRcdHRyeSB7XG5cdFx0XHRsYW5ndWFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKVsnbGFuZ3VhZ2UnXSB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb3dlckNhc2UoKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdGxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlXG5cdFx0XHRcdC5yZXBsYWNlKC9oYW5bc3RdLT8vaSwgJycpIC8vIGZvciBsYW5ndWFnZXMgbGlrZSB6aC1IYW5zLUNOXG5cdFx0XHRcdC50b0xvd2VyQ2FzZSgpO1xuXHRcdH1cblx0XHR0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG5cdFx0Ly8gTWVyZ2Ugd2l0aCBsb2NhbFN0b3JhZ2UgaTE4biBjYWNoZVxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBpMThuQ2FjaGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdXaWtpcGx1c19pMThuQ2FjaGUnKSBhcyBzdHJpbmcpO1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoaTE4bkNhY2hlKSkge1xuXHRcdFx0XHR0aGlzLmkxOG5EYXRhW2tleV0gPSBpMThuQ2FjaGVba2V5XTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8vIEZhaWwgdG8gcGFyc2UgaTE4biBjYWNoZSwgcmVzZXRcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19pMThuQ2FjaGUnLCAne30nKTtcblx0XHR9XG5cdH1cblx0dHJhbnNsYXRlKGtleTogc3RyaW5nLCBwbGFjZWhvbGRlcnM/OiBzdHJpbmdbXSkge1xuXHRcdGxldCByZXN1bHQgPSAnJztcblx0XHRwbGFjZWhvbGRlcnMgfHw9IFtdO1xuXHRcdGlmICh0aGlzLmxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpIHtcblx0XHRcdGNvbnN0IGkxOG5EYXRhTGFuZyA9IHRoaXMuaTE4bkRhdGFbdGhpcy5sYW5ndWFnZV07XG5cdFx0XHRpZiAoaTE4bkRhdGFMYW5nICYmIGtleSBpbiBpMThuRGF0YUxhbmcpIHtcblx0XHRcdFx0cmVzdWx0ID0gaTE4bkRhdGFMYW5nW2tleV0gYXMgc3RyaW5nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gdHJ5IHVwZGF0ZSBsYW5ndWFnZSB2ZXJpc29uXG5cdFx0XHRcdHRoaXMubG9hZExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpO1xuXHRcdFx0XHRpZiAodGhpcy5pMThuRGF0YVsnZW4tdXMnXSAmJiBrZXkgaW4gdGhpcy5pMThuRGF0YVsnZW4tdXMnXSkge1xuXHRcdFx0XHRcdC8vIEZhbGxiYWNrIHRvIEVuZ2xpc2hcblx0XHRcdFx0XHRyZXN1bHQgPSB0aGlzLmkxOG5EYXRhWydlbi11cyddW2tleV0gYXMgc3RyaW5nO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc3VsdCA9IGtleTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxvYWRMYW5ndWFnZSh0aGlzLmxhbmd1YWdlKTtcblx0XHR9XG5cblx0XHRpZiAocGxhY2Vob2xkZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAoY29uc3QgW2luZGV4LCBwbGFjZWhvbGRlcl0gb2YgcGxhY2Vob2xkZXJzLmVudHJpZXMoKSkge1xuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShgJCR7aW5kZXggKyAxfWAsIHBsYWNlaG9sZGVyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRhc3luYyBsb2FkTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZykge1xuXHRcdGlmICh0aGlzLnNlc3Npb25VcGRhdGVMb2cuaW5jbHVkZXMobGFuZ3VhZ2UpKSB7XG5cdFx0XHQvLyBIYXMgYmVlbiB1cGRhdGVkIHRoaXMgc2Vzc2lvbi5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKFxuXHRcdFx0XHRhd2FpdCBmZXRjaChcblx0XHRcdFx0XHRgaHR0cHM6Ly9naXRjZG4ucWl1d2VuLm5ldC5jbi9JbnRlcmZhY2VBZG1pbi9XaWtpcGx1cy9yYXcvYnJhbmNoL2Rldi9sYW5ndWFnZXMvJHtsYW5ndWFnZX0uanNvbmBcblx0XHRcdFx0KVxuXHRcdFx0KS5qc29uKCk7XG5cdFx0XHRjb25zdCBub3dWZXJzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1dpa2lwbHVzX0xhbmd1YWdlVmVyc2lvbicpIHx8ICcwMDAnO1xuXHRcdFx0dGhpcy5zZXNzaW9uVXBkYXRlTG9nLnB1c2gobGFuZ3VhZ2UpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLl9fdmVyc2lvbiAhPT0gbm93VmVyc2lvbiB8fCAhKGxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpKSB7XG5cdFx0XHRcdC8vIExhbmd1YWdlIGdldCB1cGRhdGVkXG5cdFx0XHRcdGNvbnNvbGUuaW5mbyhgVXBkYXRlICR7bGFuZ3VhZ2V9IHN1cHBvcnQgdG8gdmVyc2lvbiAke3Jlc3BvbnNlLl9fdmVyc2lvbn1gKTtcblx0XHRcdFx0dGhpcy5pMThuRGF0YVtsYW5ndWFnZV0gPSByZXNwb25zZTtcblx0XHRcdFx0Ly8gVXBkYXRlIGxvY2FsU3RvcmFnZSBjYWNoZVxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5pMThuRGF0YSkpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0Ly8gVW5zdXBwb3J0ZWQgbGFuZ3VhZ2Vcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEkxOG4oKTtcbiIsICJpbXBvcnQgaTE4biBmcm9tICcuL2kxOG4nO1xuXG5jbGFzcyBXaWtpcGx1c0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRjb2RlOiBzdHJpbmcgfCBudWxsO1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IHN0cmluZykge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMuY29kZSA9IGNvZGU7XG5cdH1cbn1cblxuY29uc3QgTG9nID0ge1xuXHRkZWJ1ZyhtZXNzYWdlID0gJycpIHtcblx0XHRjb25zb2xlLmRlYnVnKGBbV2lraXBsdXMtREVCVUddICR7bWVzc2FnZX1gKTtcblx0fSxcblx0aW5mbyhtZXNzYWdlID0gJycpIHtcblx0XHRjb25zb2xlLmluZm8oYFtXaWtpcGx1cy1JTkZPXSAke21lc3NhZ2V9YCk7XG5cdH0sXG5cdGVycm9yKGVycm9yQ29kZTogc3RyaW5nLCBwYXlsb2Fkczogc3RyaW5nW10gPSBbXSkge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IGkxOG4udHJhbnNsYXRlKGVycm9yQ29kZSk7XG5cdFx0aWYgKHBheWxvYWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdC8vIEZpbGxcblx0XHRcdGZvciAoY29uc3QgW2ksIHZdIG9mIHBheWxvYWRzLmVudHJpZXMoKSkge1xuXHRcdFx0XHR0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXCR7aSArIDF9YCwgJ2lnJyksIHYpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zb2xlLmVycm9yKGBbV2lraXBsdXMtRVJST1JdICR7dGVtcGxhdGV9YCk7XG5cdFx0dGhyb3cgbmV3IFdpa2lwbHVzRXJyb3IoYCR7dGVtcGxhdGV9YCwgZXJyb3JDb2RlKTtcblx0fSxcbn07XG5cbmV4cG9ydCB7V2lraXBsdXNFcnJvcn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZztcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5jbGFzcyBOb3RpZmljYXRpb24ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXHRpbml0KCkge1xuXHRcdCQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgaWQ9XCJNb2VOb3RpZmljYXRpb25cIj48L2Rpdj4nKTtcblx0fVxuXHRkaXNwbGF5KHRleHQgPSAn5Za1ficsIHR5cGUgPSAnc3VjY2VzcycsIGNhbGxiYWNrOiAoZWxlPzogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4gdm9pZCA9ICgpID0+IHt9KTogdm9pZCB7XG5cdFx0JCgnI01vZU5vdGlmaWNhdGlvbicpLmFwcGVuZChcblx0XHRcdCQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdNb2VOb3RpZmljYXRpb24tbm90aWNlJylcblx0XHRcdFx0LmFkZENsYXNzKGBNb2VOb3RpZmljYXRpb24tbm90aWNlLSR7dHlwZX1gKVxuXHRcdFx0XHQuYXBwZW5kKGA8c3Bhbj4ke3RleHR9PC9zcGFuPmApXG5cdFx0KTtcblx0XHQkKCcjTW9lTm90aWZpY2F0aW9uJykuZmluZCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sYXN0KCkuZmFkZUluKDMwMCk7XG5cdFx0dGhpcy5iaW5kKCk7XG5cdFx0dGhpcy5jbGVhcigpO1xuXHRcdGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNhbGxiYWNrKCQoJyNNb2VOb3RpZmljYXRpb24nKS5maW5kKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmxhc3QoKSk7XG5cdFx0fVxuXHR9XG5cdGJpbmQoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0JCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZi5zbGlkZUxlZnQoJCh0aGlzKSk7XG5cdFx0fSk7XG5cdH1cblx0c3VjY2Vzcyh0ZXh0OiBzdHJpbmcsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnc3VjY2VzcycsIGNhbGxiYWNrKTtcblx0fVxuXHR3YXJuaW5nKHRleHQ6IHN0cmluZywgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XG5cdFx0dGhpcy5kaXNwbGF5KHRleHQsICd3YXJuaW5nJywgY2FsbGJhY2spO1xuXHR9XG5cdGVycm9yKHRleHQ6IHN0cmluZywgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XG5cdFx0dGhpcy5kaXNwbGF5KHRleHQsICdlcnJvcicsIGNhbGxiYWNrKTtcblx0fVxuXHRjbGVhcigpIHtcblx0XHRpZiAoJCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sZW5ndGggPj0gMTApIHtcblx0XHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKVxuXHRcdFx0XHQuY2hpbGRyZW4oKVxuXHRcdFx0XHQuZmlyc3QoKVxuXHRcdFx0XHQuZmFkZU91dCgxNTAsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdHNldFRpbWVvdXQodGhpcy5jbGVhciwgMzAwKTtcblx0XHR9XG5cdH1cblx0ZW1wdHkoZj86IChlbGU6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHZvaWQpIHtcblx0XHQkKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdGlmIChmICYmIHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnN0IGVsZSA9ICQodGhpcyk7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGYoZWxlKTtcblx0XHRcdFx0fSwgMjAwICogaSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0LmRlbGF5KGkgKiAyMDApXG5cdFx0XHRcdFx0LmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdHNsaWRlTGVmdChlbGU6IEpRdWVyeTxIVE1MRWxlbWVudD4sIHNwZWVkID0gMTUwKSB7XG5cdFx0ZWxlLmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcblx0XHRlbGUuYW5pbWF0ZShcblx0XHRcdHtcblx0XHRcdFx0bGVmdDogJy0yMDAlJyxcblx0XHRcdH0sXG5cdFx0XHRzcGVlZCxcblx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCh0aGlzKS5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE5vdGlmaWNhdGlvbigpO1xuIiwgImltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcblxuY29uc3QgUmVxdWVzdHMgPSB7XG5cdGJhc2U6IGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fSR7Q29uc3RhbnRzLnNjcmlwdFBhdGh9L2FwaS5waHBgLFxuXHRhc3luYyBnZXQocXVlcnk6IEFwaVF1ZXJ5UGFyYW1zIHwgQXBpUGFyc2VQYXJhbXMgfCBBcGlFZGl0UGFnZVBhcmFtcykge1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwoUmVxdWVzdHMuYmFzZSk7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocXVlcnkpKSB7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuXHRcdFx0XHR1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHF1ZXJ5W2tleV0uam9pbignfCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgcXVlcnlba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogQ29uc3RhbnRzLnVzZXJBZ2VudCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0fSxcblx0YXN5bmMgcG9zdChwYXlsb2FkOiBBcGlQYXJzZVBhcmFtcyB8IEFwaUVkaXRQYWdlUGFyYW1zKSB7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChSZXF1ZXN0cy5iYXNlKTtcblx0XHRjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGF5bG9hZCkpIHtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0XHRmb3JtLmFwcGVuZChrZXksIHZhbHVlLmpvaW4oJ3wnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3JtLmFwcGVuZChrZXksIHZhbHVlIGFzIHN0cmluZyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGJvZHk6IGZvcm0sXG5cdFx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogQ29uc3RhbnRzLnVzZXJBZ2VudCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RzO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBMb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcbmltcG9ydCBpMThuIGZyb20gJy4uL3V0aWxzL2kxOG4nO1xuaW1wb3J0IHJlcXVlc3RzIGZyb20gJy4uL3V0aWxzL3JlcXVlc3RzJztcblxuY2xhc3MgV2lraSB7XG5cdHBhZ2VJbmZvQ2FjaGU6IFJlY29yZDxzdHJpbmcsIFBhZ2VJbmZvQ2FjaGVJdGVtPiA9IHt9O1xuXHQvKipcblx0ICog6I635b6XIEVkaXQgVG9rZW5cblx0ICogR2V0IEVkaXQgVG9rZW5cblx0ICpcblx0ICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nfCB2b2lkPn1cblx0ICovXG5cdGFzeW5jIGdldEVkaXRUb2tlbigpOiBQcm9taXNlPHN0cmluZyB8IHZvaWQ+IHtcblx0XHQvLyDlsJ3or5Xku44gQVBJIOiOt+W+lyBFZGl0VG9rZW5cblx0XHQvLyBUcnkgdG8gZ2V0IEVkaXRUb2tlbiBmcm9tIEFQSVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fSk7XG5cdFx0aWYgKFxuXHRcdFx0cmVzcG9uc2UucXVlcnkgJiZcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5LnRva2VucyAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbiAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbiAhPT0gJytcXFxcJ1xuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0fVxuXHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfZWRpdHRva2VuJyk7XG5cdH1cblx0LyoqXG5cdCAqIOiOt+W+l+mhtemdouS4iuS4gOeJiOacrOaXtumXtOaIs1xuXHQgKiBHZXQgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbGFzdCByZXZpc2lvbiBvZiBwYWdlIHNwZWNpZmllZC5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHBhcmFtXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbS50aXRsZSDpobXpnaLlkI0gLyBQYWdlbmFtZVxuXHQgKiBAcGFyYW0ge251bWJlcn0gcGFyYW0ucmV2aXNpb25JZCDkv67orqLniYjmnKzlj7cgLyBSZXZpc2lvbiBJRFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0uY29udGVudG1vZGVsIOWGheWuueaooeWeiyAvIENvbnRlbnQgTW9kZWxcblx0ICogQHJldHVybnMge1Byb21pc2U8e3RpbWVzdGFtcD86IHN0cmluZzsgcmV2aXNpb25JZD86IG51bWJlcjsgY29udGVudG1vZGVsOiBzdHJpbmc7fT59XG5cdCAqL1xuXHRhc3luYyBnZXRQYWdlSW5mbyh7dGl0bGUsIHJldmlzaW9uSWR9OiB7dGl0bGU6IHN0cmluZzsgcmV2aXNpb25JZD86IG51bWJlcn0pOiBQcm9taXNlPFBhZ2VJbmZvIHwgdm9pZD4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zICYgQXBpUXVlcnlJbmZvUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnN8aW5mbycsXG5cdFx0XHRcdHJ2cHJvcDogJ3RpbWVzdGFtcHxpZHMnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAocmV2aXNpb25JZCkge1xuXHRcdFx0XHRwYXJhbXMucmV2aWRzID0gcmV2aXNpb25JZDtcblx0XHRcdH0gZWxzZSBpZiAodGl0bGUpIHtcblx0XHRcdFx0aWYgKHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0pIHtcblx0XHRcdFx0XHQvLyBIaXQgY2FjaGVcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dGltZXN0YW1wOiB0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdLnRpbWVzdGFtcCBhcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRyZXZpc2lvbklkOiB0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdLnJldmlkIGFzIG51bWJlcixcblx0XHRcdFx0XHRcdGNvbnRlbnRtb2RlbDogdGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS5jb250ZW50bW9kZWwsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwYXJhbXMudGl0bGVzID0gdGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnF1ZXJ5ICYmIHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnN0IHBhZ2VLZXkgPSBPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF07XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRtb2RlbCA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzW3BhZ2VLZXkgYXMgc3RyaW5nXS5jb250ZW50bW9kZWw7XG5cdFx0XHRcdGlmIChwYWdlS2V5ID09PSAnLTEnKSB7XG5cdFx0XHRcdFx0Ly8g5LiN5a2Y5Zyo6L+Z5LiA6aG16Z2iXG5cdFx0XHRcdFx0Ly8gUGFnZSBub3QgZm91bmQuXG5cdFx0XHRcdFx0dGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXSA9IHtjb250ZW50bW9kZWx9O1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRjb250ZW50bW9kZWwsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBwYWdlSW5mbyA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzW3BhZ2VLZXkgYXMgc3RyaW5nXS5yZXZpc2lvbnNbMF07XG5cdFx0XHRcdGlmICh0aXRsZSkge1xuXHRcdFx0XHRcdHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0gPSB7Li4ucGFnZUluZm8sIGNvbnRlbnRtb2RlbH07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0aW1lc3RhbXA6IHBhZ2VJbmZvLnRpbWVzdGFtcCxcblx0XHRcdFx0XHRyZXZpc2lvbklkOiBwYWdlSW5mby5yZXZpZCxcblx0XHRcdFx0XHRjb250ZW50bW9kZWwsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICog6I635b6X6aG16Z2i55qEIFdpa2l0ZXh0XG5cdCAqIEdldCB3aWtpdGV4dCBvZiB0aGUgcGFnZS5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge251bWJlcn0gY29uZmlnLnJldmlzaW9uSWQg54mI5pys5Y+3XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc2VjdGlvbiDmrrXokL3lj7dcblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSB3aWtpdGV4dOWGheWuuVxuXHQgKi9cblx0YXN5bmMgZ2V0V2lraVRleHQoe3NlY3Rpb24sIHJldmlzaW9uSWR9OiB7c2VjdGlvbjogc3RyaW5nIHwgbnVtYmVyOyByZXZpc2lvbklkOiBudW1iZXJ9KTogUHJvbWlzZTxzdHJpbmcgfCB2b2lkPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0cmV2aWRzOiByZXZpc2lvbklkLFxuXHRcdFx0fTtcblx0XHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHRcdHBhcmFtcy5yZXZpZHMgPSByZXZpc2lvbklkO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlY3Rpb24pIHtcblx0XHRcdFx0cGFyYW1zLnJ2c2VjdGlvbiA9IHNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnF1ZXJ5ICYmIHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGlmIChPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF0gPT09ICctMScpIHtcblx0XHRcdFx0XHQvLyDkuI3lrZjlnKjov5nkuIDpobXpnaJcblx0XHRcdFx0XHQvLyBQYWdlIG5vdCBmb3VuZC5cblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFnZUluZm8gPSByZXNwb25zZS5xdWVyeS5wYWdlc1tPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF0gYXMgc3RyaW5nXS5yZXZpc2lvbnNbMF07XG5cdFx0XHRcdHJldHVybiBwYWdlSW5mb1snKiddO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF93aWtpdGV4dCcpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICog6Kej5p6QIFdpa2l0ZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpdGV4dCB3aWtpdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUg6aG16Z2i5qCH6aKYXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBfY29uZmlnIOiuvue9rlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IOino+aekOe7k+aenCBIVE1MXG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdGFzeW5jIHBhcnNlV2lraVRleHQod2lraXRleHQ6IHN0cmluZywgdGl0bGU6IHN0cmluZyA9ICcnLCBfY29uZmlnOiBvYmplY3QgPSB7fSk6IFByb21pc2U8c3RyaW5nIHwgdm9pZD4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLnBvc3Qoe1xuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHBzdDogJ3RydWUnLFxuXHRcdFx0fSk7XG5cdFx0XHRpZiAocmVzcG9uc2UucGFyc2UgJiYgcmVzcG9uc2UucGFyc2UudGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UucGFyc2UudGV4dFsnKiddO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCdjYW50X3BhcnNlX3dpa2l0ZXh0Jyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOe8lui+kemhtemdolxuXHQgKlxuXHQgKiBAcGFyYW0ge0VkaXRQYXJhbXN9IHBhcmFtXG5cdCAqL1xuXHRhc3luYyBlZGl0KHtcblx0XHR0aXRsZSxcblx0XHRjb250ZW50LFxuXHRcdGVkaXRUb2tlbixcblx0XHR0aW1lc3RhbXAsXG5cdFx0Y29uZmlnID0ge30sXG5cdFx0YWRkaXRpb25hbENvbmZpZyA9IHt9LFxuXHR9OiBFZGl0UGFyYW1zKTogUHJvbWlzZTx0cnVlIHwgdm9pZD4ge1xuXHRcdGxldCByZXNwb25zZTtcblx0XHR0cnkge1xuXHRcdFx0cmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR0ZXh0OiBjb250ZW50LFxuXHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0dG9rZW46IGVkaXRUb2tlbixcblx0XHRcdFx0Li4uKHRpbWVzdGFtcCA/IHtiYXNldGltZXN0YW1wOiB0aW1lc3RhbXB9IDoge30pLFxuXHRcdFx0XHQuLi5jb25maWcsXG5cdFx0XHRcdC4uLmFkZGl0aW9uYWxDb25maWcsXG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignbmV0d29ya19lZGl0X2Vycm9yJyk7XG5cdFx0fVxuXHRcdGlmIChyZXNwb25zZS5lZGl0KSB7XG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LmNvZGUpIHtcblx0XHRcdFx0Ly8gQWJ1c2UgRmlsdGVyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgXG4gICAgICAgICAgICAgICAgICAgICAgICAke2kxOG4udHJhbnNsYXRlKCdoaXRfYWJ1c2VmaWx0ZXInKX06JHtyZXNwb25zZS5lZGl0LmluZm8ucmVwbGFjZSgnL0hpdCBBYnVzZUZpbHRlcjogL2lnJywgJycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogc21hbGxlcjtcIj4ke3Jlc3BvbnNlLmVkaXQud2FybmluZ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRMb2cuZXJyb3IoJ3Vua25vd25fZWRpdF9lcnJvcicpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAocmVzcG9uc2UuZXJyb3IgJiYgcmVzcG9uc2UuZXJyb3IuY29kZSkge1xuXHRcdFx0TG9nLmVycm9yKHJlc3BvbnNlLmVycm9yLmNvZGUpO1xuXHRcdH0gZWxzZSBpZiAocmVzcG9uc2UuY29kZSkge1xuXHRcdFx0TG9nLmVycm9yKHJlc3BvbnNlLmNvZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRMb2cuZXJyb3IoJ3Vua25vd25fZWRpdF9lcnJvcicpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpfmjIflrprpobXpnaLmnIDmlrDkv67orqLnvJblj7dcblx0ICogR2V0IGxhdGVzdCByZXZpc2lvbklkIG9mIGEgcGFnZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG5cdCAqL1xuXHRhc3luYyBnZXRMYXRlc3RSZXZpc2lvbklkRm9yUGFnZSh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcblx0XHRjb25zdCB7cmV2aXNpb25JZH0gPSAoYXdhaXQgdGhpcy5nZXRQYWdlSW5mbyh7dGl0bGV9KSkgYXMge1xuXHRcdFx0cmV2aXNpb25JZDogbnVtYmVyO1xuXHRcdH07XG5cdFx0cmV0dXJuIHJldmlzaW9uSWQ7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFdpa2koKTtcbiIsICJpbXBvcnQgTG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5pbXBvcnQgV2lraSBmcm9tICcuLi9zZXJ2aWNlcy93aWtpJztcblxuY2xhc3MgUGFnZSB7XG5cdHRpbWVzdGFtcDogc3RyaW5nID0gJyc7XG5cdGVkaXRUb2tlbjogc3RyaW5nID0gJyc7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHJldmlzaW9uSWQ6IG51bWJlcjtcblxuXHRpbml0ZWQgPSBmYWxzZTtcblx0aXNOZXdQYWdlID0gZmFsc2U7XG5cblx0Y29udGVudG1vZGVsID0gJ3dpa2l0ZXh0JztcblxuXHRzZWN0aW9uQ2FjaGU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnRpdGxlIOmhtemdouagh+mimCBQYWdlIE5hbWUgKG9wdGlvbmFsKVxuXHQgKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnJldmlzaW9uSWQg6aG16Z2i5L+u6K6i57yW5Y+3IFJldmlzaW9uIElkXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih7dGl0bGUsIHJldmlzaW9uSWQgPSAwfToge3RpdGxlOiBzdHJpbmc7IHJldmlzaW9uSWQ6IG51bWJlcn0pIHtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5yZXZpc2lvbklkID0gcmV2aXNpb25JZDtcblx0XHR0aGlzLmlzTmV3UGFnZSA9ICFyZXZpc2lvbklkO1xuXHR9XG5cblx0LyoqXG5cdCAqIOWIneWni+WMliDojrflvpfpobXpnaJFZGl0VG9rZW7lkozliJ3lp4tUaW1lU3RhbXBcblx0ICogSW5pdGlhbGl6YXRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5lZGl0VG9rZW4gKG9wdGlvbmFsKSDlpoLmnpzmj5DkvpvkuoZlZGl0VG9rZW7vvIzlsIbkuI3kvJrlho3ojrflj5Zcblx0ICovXG5cdGFzeW5jIGluaXQoe2VkaXRUb2tlbn06IHtlZGl0VG9rZW46IHN0cmluZ30gPSB7ZWRpdFRva2VuOiAnJ30pOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRjb25zdCBwcm9taXNlQXJyID0gW3RoaXMuZ2V0VGltZXN0YW1wKCksIHRoaXMuZ2V0Q29udGVudE1vZGVsKCldO1xuXHRcdGlmICghZWRpdFRva2VuKSB7XG5cdFx0XHRwcm9taXNlQXJyLnB1c2godGhpcy5nZXRFZGl0VG9rZW4oKSk7XG5cdFx0fVxuXHRcdGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VBcnIpO1xuXHRcdHRoaXMuaW5pdGVkID0gdHJ1ZTtcblx0XHRMb2cuaW5mbyhgUGFnZSBpbml0aWFsaXphdGlvbiBmb3IgJHt0aGlzLnRpdGxlfSMke3RoaXMucmV2aXNpb25JZH0gZmluaXNoZWQuYCk7XG5cdH1cblxuXHQvKipcblx0ICog6I635b6XIEVkaXRUb2tlblxuXHQgKiBHZXQgRWRpdFRva2VuXG5cdCAqL1xuXHRhc3luYyBnZXRFZGl0VG9rZW4oKTogUHJvbWlzZTxzdHJpbmcgfCB2b2lkPiB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdtZWRpYXdpa2kudXNlcicpO1xuXHRcdGlmIChtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpICYmIG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJykgIT09ICcrXFxcXCcpIHtcblx0XHRcdC8vIOWmguaenCBNZWRpYVdpa2kgSmF2YVNjcmlwdCBBUEkg5Y+v5Lul55u05o6l6I635b6XIEVkaXRUb2tlbiDliJnnm7TmjqXov5Tlm55cblx0XHRcdC8vIFJldHVybiBFZGl0VG9rZW4gcmV0cmlldmVkIGZyb20gTWVkaWFXaWtpIEphdmFTY3JpcHQgQVBJIGlmIGFjY2Vzc2libGVcblx0XHRcdHRoaXMuZWRpdFRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8g5LuOQVBJ6I635b6XRWRpdFRva2VuXG5cdFx0Ly8gR2V0IEVkaXRUb2tlbiBmcm9tIE1lZGlhV2lraSBBUElcblx0XHR0aGlzLmVkaXRUb2tlbiA9IChhd2FpdCBXaWtpLmdldEVkaXRUb2tlbigpKSBhcyBzdHJpbmc7XG5cdH1cblxuXHQvKipcblx0ICog6I635b6X57yW6L6R5Z+65YeG5pe26Ze05oizXG5cdCAqIEdldCBCYXNlIFRpbWVzdGFtcFxuXHQgKi9cblx0YXN5bmMgZ2V0VGltZXN0YW1wKCk6IFByb21pc2U8c3RyaW5nIHwgdm9pZD4ge1xuXHRcdGNvbnN0IHt0aW1lc3RhbXAsIHJldmlzaW9uSWR9ID0gKGF3YWl0IFdpa2kuZ2V0UGFnZUluZm8oe1xuXHRcdFx0cmV2aXNpb25JZDogdGhpcy5yZXZpc2lvbklkLFxuXHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0fSkpIGFzIFBhcnRpYWw8UGFnZUluZm8+O1xuXHRcdHRoaXMudGltZXN0YW1wID0gdGltZXN0YW1wIGFzIHN0cmluZztcblx0XHRpZiAocmV2aXNpb25JZCkge1xuXHRcdFx0dGhpcy5yZXZpc2lvbklkID0gcmV2aXNpb25JZDtcblx0XHRcdHRoaXMuaXNOZXdQYWdlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+l+mhtemdouWGheWuueaooeWei1xuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcucmV2aXNpb25JZFxuXHQgKi9cblx0YXN5bmMgZ2V0Q29udGVudE1vZGVsKCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdGNvbnN0IHtjb250ZW50bW9kZWx9ID0gKGF3YWl0IFdpa2kuZ2V0UGFnZUluZm8oe1xuXHRcdFx0cmV2aXNpb25JZDogdGhpcy5yZXZpc2lvbklkLFxuXHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0fSkpIGFzIFBhZ2VJbmZvO1xuXHRcdHRoaXMuY29udGVudG1vZGVsID0gY29udGVudG1vZGVsIHx8ICd3aWtpdGV4dCc7XG5cdH1cblxuXHQvKipcblx0ICog6I635b6XIFdpa2lUZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBjb25maWcuc2VjdGlvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnJldmlzaW9uSWRcblx0ICovXG5cdGFzeW5jIGdldFdpa2lUZXh0KHtzZWN0aW9uID0gJyd9OiB7c2VjdGlvbj86IG51bWJlciB8IHN0cmluZ30gPSB7fSk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0Y29uc3Qgc2VjID0gc2VjdGlvbiA9PT0gLTEgPyAwIDogc2VjdGlvbjtcblx0XHRpZiAodGhpcy5zZWN0aW9uQ2FjaGVbc2VjXSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2VjdGlvbkNhY2hlW3NlY107XG5cdFx0fVxuXHRcdGNvbnN0IHdpa2lUZXh0ID0gKGF3YWl0IFdpa2kuZ2V0V2lraVRleHQoe1xuXHRcdFx0c2VjdGlvbjogc2VjLFxuXHRcdFx0cmV2aXNpb25JZDogdGhpcy5yZXZpc2lvbklkLFxuXHRcdH0pKSBhcyBzdHJpbmc7XG5cdFx0TG9nLmluZm8oYFdpa2l0ZXh0IG9mICR7dGhpcy50aXRsZX0jJHtzZWN0aW9ufSBmZXRjaGVkLmApO1xuXHRcdHRoaXMuc2VjdGlvbkNhY2hlW3NlY10gPSB3aWtpVGV4dDtcblx0XHRyZXR1cm4gd2lraVRleHQ7XG5cdH1cblxuXHQvKipcblx0ICog6Kej5p6QIFdpa2lUZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpdGV4dFxuXHQgKi9cblx0YXN5bmMgcGFyc2VXaWtpVGV4dCh3aWtpdGV4dDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCB2b2lkPiB7XG5cdFx0cmV0dXJuIGF3YWl0IFdpa2kucGFyc2VXaWtpVGV4dCh3aWtpdGV4dCwgdGhpcy50aXRsZSk7XG5cdH1cblxuXHQvKipcblx0ICog57yW6L6R6aG16Z2iXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXBpRWRpdFBhZ2VQYXJhbXN9IHBheWxvYWRcblx0ICovXG5cdGFzeW5jIGVkaXQocGF5bG9hZDogQXBpRWRpdFBhZ2VQYXJhbXMpOiBQcm9taXNlPHRydWUgfCB2b2lkPiB7XG5cdFx0aWYgKCF0aGlzLmVkaXRUb2tlbikge1xuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF9lZGl0dG9rZW4nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLnRpbWVzdGFtcCAmJiAhdGhpcy5pc05ld1BhZ2UpIHtcblx0XHRcdC8vIOWmguaenOS4jeaYr+WIm+W7uuaWsOmhtemdoiDlj4jmsqHmnInln7rlh4bml7bpl7TmiLMg5YiZ5pyJ5Y+v6IO96YCg5oiQ57yW6L6R6KaG55uWIOS/nemZqei1t+ingeebtOaOpeaLkue7nVxuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF90aW1lc3RhbXAnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmV0dXJuIGF3YWl0IFdpa2kuZWRpdCh7XG5cdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcblx0XHRcdGVkaXRUb2tlbjogdGhpcy5lZGl0VG9rZW4sXG5cdFx0XHQuLi4odGhpcy50aW1lc3RhbXAgPyB7dGltZXN0YW1wOiB0aGlzLnRpbWVzdGFtcH0gOiB7fSksXG5cdFx0XHQuLi5wYXlsb2FkLFxuXHRcdFx0YWRkaXRpb25hbENvbmZpZzoge1xuXHRcdFx0XHQuLi4odGhpcy5pc05ld1BhZ2UgPyB7Y3JlYXRlb25seTogdGhpcy5pc05ld1BhZ2V9IDoge30pLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmNsYXNzIFNldHRpbmdzIHtcblx0Z2V0U2V0dGluZyhcblx0XHRrZXk6IHN0cmluZyxcblx0XHRvYmplY3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHN0cmluZ1tdIHwgbnVtYmVyIHwgYm9vbGVhbj4gPSB7fVxuXHQpOiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bWJlciB8IGJvb2xlYW4gfCB2b2lkIHtcblx0XHRjb25zdCB3ID0gb2JqZWN0O1xuXHRcdGxldCBzZXR0aW5ncztcblx0XHR0cnkge1xuXHRcdFx0c2V0dGluZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsnV2lraXBsdXNfU2V0dGluZ3MnXSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBjdXN0b21TZXR0aW5nRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oYHJldHVybiAke3NldHRpbmdzW2tleV19YCk7XG5cdFx0XHRpZiAodHlwZW9mIGN1c3RvbVNldHRpbmdGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmIChjdXN0b21TZXR0aW5nRnVuY3Rpb24oKSh3KSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY3VzdG9tU2V0dGluZ0Z1bmN0aW9uKCkodykgfHwgc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdHJldHVybiBzZXR0aW5nc1trZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3Nba2V5XTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxldCByZXN1bHQgPSBzZXR0aW5nc1trZXldO1xuXHRcdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoYFxcJHske2tleX19YCwgb2JqZWN0W2tleV0gYXMgc3RyaW5nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2V0dGluZ3MoKTtcbiIsICIvKipcbiAqIOino+aekFVSTOWPguaVsOWIl+ihqFxuICogUGFyc2UgVVJMIHF1ZXJ5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB1cmxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnkodXJsOiBzdHJpbmcpIHtcblx0Y29uc3QgcmVnID0gLygoW14/Jj1dKykoPzo9KFtePyY9XSopKSopL2c7XG5cdGNvbnN0IHBhcmFtczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXHRsZXQgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGw7XG5cdHdoaWxlICgobWF0Y2ggPSByZWcuZXhlYyh1cmwpKSkge1xuXHRcdHRyeSB7XG5cdFx0XHRwYXJhbXNbbWF0Y2hbMl0gYXMgc3RyaW5nXSA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSBhcyBzdHJpbmcpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cGFyYW1zW21hdGNoWzJdIGFzIHN0cmluZ10gPSBtYXRjaFszXSBhcyBzdHJpbmc7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBwYXJhbXM7XG59XG4iLCAiY29uc3Qgc2xlZXAgPSAodGltZTogbnVtYmVyKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpO1xuXHR9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBzbGVlcDtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgTG9nLCB7V2lraXBsdXNFcnJvcn0gZnJvbSAnLi4vdXRpbHMvbG9nJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi9ub3RpZmljYXRpb24nO1xuaW1wb3J0IGkxOG4gZnJvbSAnLi4vdXRpbHMvaTE4bic7XG5pbXBvcnQge3BhcnNlUXVlcnl9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnO1xuaW1wb3J0IHNsZWVwIGZyb20gJy4uL3V0aWxzL3NsZWVwJztcblxuY2xhc3MgVUkge1xuXHRxdWlja0VkaXRQYW5lbFZpc2libGUgPSBmYWxzZTtcblx0c2Nyb2xsVG9wID0gMDtcblxuXHQvKipcblx0ICog5Yib5bu65bGF5Lit5a+56K+d5qGGXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSDnqpflj6PmoIfpophcblx0ICogQHBhcmFtIHtzdHJpbmcgfCBKUXVlcnk8SFRNTEVsZW1lbnQ+fSBjb250ZW50IOWGheWuuVxuXHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGgg5a695bqmXG5cdCAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2sg5Zue6LCD5Ye95pWwXG5cdCAqL1xuXHRjcmVhdGVEaWFsb2dCb3goXG5cdFx0dGl0bGU6IHN0cmluZyA9ICdXaWtpcGx1cycsXG5cdFx0Y29udGVudDogc3RyaW5nIHwgSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICcnLFxuXHRcdHdpZHRoOiBudW1iZXIgPSA2MDAsXG5cdFx0Y2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7fVxuXHQpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcblx0XHRpZiAoJCgnLldpa2lwbHVzLUludGVyQm94JykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y29uc3QgY2xpZW50V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRjb25zdCBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0Y29uc3QgZGlhbG9nV2lkdGggPSBNYXRoLm1pbihjbGllbnRXaWR0aCwgd2lkdGgpO1xuXHRcdGNvbnN0IGRpYWxvZ0JveCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gnKVxuXHRcdFx0LmNzcyh7XG5cdFx0XHRcdCdtYXJnaW4tbGVmdCc6IGNsaWVudFdpZHRoIC8gMiAtIGRpYWxvZ1dpZHRoIC8gMixcblx0XHRcdFx0dG9wOiAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSB8fCAwICsgY2xpZW50SGVpZ2h0ICogMC4yLFxuXHRcdFx0XHRkaXNwbGF5OiAnbm9uZScsXG5cdFx0XHR9KVxuXHRcdFx0LmFwcGVuZCgkKCc8ZGl2PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1IZWFkZXInKS5odG1sKHRpdGxlKSlcblx0XHRcdC5hcHBlbmQoJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmFwcGVuZChjb250ZW50KSlcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dCgnw5cnKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKSk7XG5cdFx0JCgnYm9keScpLmFwcGVuZChkaWFsb2dCb3gpO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLndpZHRoKGRpYWxvZ1dpZHRoKTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHQkKHRoaXMpXG5cdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHQuZmFkZU91dCgnZmFzdCcsICgpID0+IHtcblx0XHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAod2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4gdW5kZWZpbmVkKSk7IC8vIOWPlua2iOmhtemdouWFs+mXreehruiupFxuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdC8vIOaLluabs1xuXHRcdGNvbnN0IGJpbmREcmFnZ2luZyA9IChlbGVtZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0XHRlbGVtZW50Lm9uKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0XHRjb25zdCBiYXNlWCA9IGUuY2xpZW50WDtcblx0XHRcdFx0Y29uc3QgYmFzZVkgPSBlLmNsaWVudFk7XG5cdFx0XHRcdGNvbnN0IGJhc2VPZmZzZXRYID0gZWxlbWVudC5wYXJlbnQoKS5vZmZzZXQoKT8ubGVmdCB8fCAwO1xuXHRcdFx0XHRjb25zdCBiYXNlT2Zmc2V0WSA9IGVsZW1lbnQucGFyZW50KCkub2Zmc2V0KCk/LnRvcCB8fCAwO1xuXHRcdFx0XHQkKGRvY3VtZW50KS5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcblx0XHRcdFx0XHRlbGVtZW50LnBhcmVudCgpLmNzcyh7XG5cdFx0XHRcdFx0XHQnbWFyZ2luLWxlZnQnOiBiYXNlT2Zmc2V0WCArIGUuY2xpZW50WCAtIGJhc2VYLFxuXHRcdFx0XHRcdFx0dG9wOiBiYXNlT2Zmc2V0WSArIGUuY2xpZW50WSAtIGJhc2VZLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0JChkb2N1bWVudCkub24oJ21vdXNldXAnLCAoKSA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC5vZmYoJ21vdXNlZG93bicpO1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9mZignbW91c2Vtb3ZlJyk7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdtb3VzZXVwJyk7XG5cdFx0XHRcdFx0YmluZERyYWdnaW5nKGVsZW1lbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0YmluZERyYWdnaW5nKCQoJy5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXInKSk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZmFkZUluKDUwMCk7XG5cdFx0Y2FsbGJhY2soKTtcblx0XHRyZXR1cm4gZGlhbG9nQm94O1xuXHR9XG5cblx0LyoqXG5cdCAqIOWcqOaQnOe0ouahhuW3puS+p+OAjOabtOWkmuOAjeiPnOWNleWGhea3u+WKoOaMiemSrlxuXHQgKiBBZGQgYSBidXR0b24gaW4gXCJNb3JlXCIgbWVudSAobGVmdCBvZiB0aGUgc2VhcmNoIGJhcilcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQg5oyJ6ZKu5ZCNIEJ1dHRvbiB0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpZCDmjInpkq5pZCBCdXR0b24gaWRcblx0ICogQHJldHVybiB7SlF1ZXJ5PEhUTUxFbGVtZW50Pn0gYnV0dG9uXG5cdCAqL1xuXHRhZGRGdW5jdGlvbkJ1dHRvbih0ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHwgdm9pZCB7XG5cdFx0bGV0IGJ1dHRvbjtcblx0XHRzd2l0Y2ggKENvbnN0YW50cy5za2luKSB7XG5cdFx0XHRjYXNlICdtaW5lcnZhJzpcblx0XHRcdFx0YnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgaWQpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0b2dnbGUtbGlzdC1pdGVtJylcblx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdtdy11aS1pY29uIG13LXVpLWljb24tYmVmb3JlIHRvZ2dsZS1saXN0LWl0ZW1fX2FuY2hvcicpXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCd0b2dnbGUtbGlzdC1pdGVtX19sYWJlbCcpXG5cdFx0XHRcdFx0XHRcdFx0XHQudGV4dCh0ZXh0KVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ21vZXNraW4nOlxuXHRcdFx0XHRidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLU1vcmUtRnVuY3Rpb24tQnV0dG9uJylcblx0XHRcdFx0XHQuYXR0cignaWQnLCBpZClcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpLnRleHQodGV4dCkpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdtdy1saXN0LWl0ZW0nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndmVjdG9yLXRhYi1ub2ljb24nKVxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIGlkKVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPGE+JykuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCk7JykudGV4dCh0ZXh0KSk7XG5cdFx0fVxuXHRcdGlmIChDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnICYmICQoJyNwLXRiJykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnI3AtdGInKS5hcHBlbmQoYnV0dG9uKTtcblx0XHRcdHJldHVybiAkKGAjJHtpZH1gKTtcblx0XHR9IGVsc2UgaWYgKENvbnN0YW50cy5za2luID09PSAnbW9lc2tpbicpIHtcblx0XHRcdCQoJy5tb3JlLWFjdGlvbnMtbGlzdCcpLmZpcnN0KCkuYXBwZW5kKGJ1dHRvbik7XG5cdFx0XHRyZXR1cm4gJChgIyR7aWR9YCk7XG5cdFx0fSBlbHNlIGlmICgkKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA+IDApIHtcblx0XHRcdCQoJyNwLWNhY3Rpb25zIHVsJykuYXBwZW5kKGJ1dHRvbik7XG5cdFx0XHRyZXR1cm4gJChgIyR7aWR9YCk7XG5cdFx0fVxuXHRcdExvZy5pbmZvKGkxOG4udHJhbnNsYXRlKCdjYW50X2FkZF9mdW5jYnRuJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeW/q+mAn+mHjeWumuWQkeaMiemSrlxuXHQgKlxuXHQgKiBAcGFyYW0geygpID0+IHZvaWR9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFNpbXBsZVJlZGlyZWN0QnV0dG9uKG9uQ2xpY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7fSk6IHZvaWQge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IHRoaXMuYWRkRnVuY3Rpb25CdXR0b24oaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X2Zyb20nKSwgJ1dpa2lwbHVzLVNSLUludHJvJyk7XG5cdFx0aWYgKGJ1dHRvbikge1xuXHRcdFx0YnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXorr7nva7pnaLmnb/mjInpkq5cblx0ICpcblx0ICogQHBhcmFtIHsoKSA9PiB2b2lkfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uKG9uQ2xpY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7fSk6IHZvaWQge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IHRoaXMuYWRkRnVuY3Rpb25CdXR0b24oaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzJyksICdXaWtpcGx1cy1TZXR0aW5ncy1JbnRybycpO1xuXHRcdGlmIChidXR0b24pIHtcblx0XHRcdGJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl6aG26YOo5b+r6YCf57yW6L6R5oyJ6ZKuXG5cdCAqIEluc2VydCBRdWlja0VkaXQgYnV0dG9uIGJlc2lkZXMgcGFnZSBlZGl0IGJ1dHRvbi5cblx0ICpcblx0ICogQHBhcmFtIHtPbkNsaWNrfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRUb3BRdWlja0VkaXRFbnRyeShvbkNsaWNrOiBPbkNsaWNrKSB7XG5cdFx0Y29uc3QgdG9wQnRuID0gJCgnPGxpPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLUVkaXQtVG9wQnRuJykuYXR0cignY2xhc3MnLCAnbXctbGlzdC1pdGVtJyk7XG5cdFx0Y29uc3QgdG9wQnRuTGluayA9ICQoJzxhPicpXG5cdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF90b3BidG4nKX1gKTtcblx0XHR0b3BCdG4uYXBwZW5kKHRvcEJ0bkxpbmspO1xuXHRcdHN3aXRjaCAoQ29uc3RhbnRzLnNraW4pIHtcblx0XHRcdGNhc2UgJ21pbmVydmEnOlxuXHRcdFx0XHR0b3BCdG4uY3NzKHsnYWxpZ24taXRlbXMnOiAnY2VudGVyJywgZGlzcGxheTogJ2ZsZXgnfSk7XG5cdFx0XHRcdHRvcEJ0bi5maW5kKCdzcGFuJykuYWRkQ2xhc3MoJ3BhZ2UtYWN0aW9ucy1tZW51X19saXN0LWl0ZW0nKTtcblx0XHRcdFx0dG9wQnRuXG5cdFx0XHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0XHRcdC5hZGRDbGFzcyhcblx0XHRcdFx0XHRcdCdtdy11aS1pY29uIG13LXVpLWljb24tZWxlbWVudCBtdy11aS1pY29uLXdpa2ltZWRpYS1lZGl0LWJhc2UyMCBtdy11aS1pY29uLXdpdGgtbGFiZWwtZGVza3RvcCdcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0LmNzcygndmVydGljYWwtYWxpZ24nLCAnbWlkZGxlJyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd2ZWN0b3ItMjAyMic6XG5cdFx0XHRcdHRvcEJ0bi5hZGRDbGFzcygndmVjdG9yLXRhYi1ub2ljb24nKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3ZlY3Rvcic6XG5cdFx0XHRcdHRvcEJ0bi5hcHBlbmQoJCgnPHNwYW4+JykuYXBwZW5kKHRvcEJ0bkxpbmspKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0fVxuXHRcdCQodG9wQnRuKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRvbkNsaWNrKHtcblx0XHRcdFx0c2VjdGlvbk51bWJlcjogLTEsXG5cdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBDb25zdGFudHMuY3VycmVudFBhZ2VOYW1lLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0aWYgKCQoJyNjYS1lZGl0JykubGVuZ3RoID4gMCAmJiAkKCcjV2lraXBsdXMtRWRpdC1Ub3BCdG4nKS5sZW5ndGggPT09IDApIHtcblx0XHRcdGlmIChDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEpJykge1xuXHRcdFx0XHQkKCcjY2EtZWRpdCcpLnBhcmVudCgpLmFmdGVyKHRvcEJ0bik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCcjY2EtZWRpdCcpLmFmdGVyKHRvcEJ0bik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeauteiQveW/q+mAn+e8lui+keaMiemSrlxuXHQgKiBJbnNlcnQgUXVpY2tFZGl0IGJ1dHRvbnMgZm9yIGVhY2ggc2VjdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtPbkNsaWNrfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyhvbkNsaWNrOiBPbkNsaWNrKTogdm9pZCB7XG5cdFx0b25DbGljayB8fD0gKCkgPT4ge307XG5cdFx0Y29uc3Qgc2VjdGlvbkJ0biA9XG5cdFx0XHRDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnXG5cdFx0XHRcdD8gJCgnPHNwYW4+JykuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKFxuXHRcdFx0XHRcdFx0XHRcdCdXaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4gbXctdWktaWNvbiBtdy11aS1pY29uLWVsZW1lbnQgbXctdWktaWNvbi13aWtpbWVkaWEtZWRpdC1iYXNlMjAgZWRpdC1wYWdlIG13LXVpLWljb24tZmx1c2gtcmlnaHQnXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0LmNzcygnbWFyZ2luLWxlZnQnLCAnMC43NWVtJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3RpdGxlJywgaTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF9zZWN0aW9uYnRuJykpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQ6ICQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLmFkZENsYXNzKCdtdy1lZGl0c2VjdGlvbi1kaXZpZGVyJykudGV4dCgnIHwgJykpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuJylcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpKVxuXHRcdFx0XHRcdFx0KTtcblx0XHQkKCcubXctZWRpdHNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGVkaXRVUkwgPSAkKHRoaXMpLmZpbmQoXCJhW2hyZWYqPSdhY3Rpb249ZWRpdCddXCIpLmZpcnN0KCkuYXR0cignaHJlZicpIHx8ICcnO1xuXHRcdFx0XHRjb25zdCBbLCBzZWN0aW9uTGFiZWxdID0gZWRpdFVSTC5tYXRjaCgvJlt2ZV0qc2VjdGlvblxcPShbXiZdKykvKSBhcyBSZWdFeHBFeGVjQXJyYXk7IC8vIGB2ZWAgZm9yIHZpc3VhbCBlZGl0b3Jcblx0XHRcdFx0Y29uc3Qgc2VjdGlvbk51bWJlciA9IHNlY3Rpb25MYWJlbD8ucmVwbGFjZSgvVC0vZ2ksICcnKTsgLy8gZW1iZWRkZWQgcGFnZXMgdXNlIFQtc2VyaWVzIHNlY3Rpb24gbnVtYmVyXG5cdFx0XHRcdGNvbnN0IFssIHNlY3Rpb25UYXJnZXRMYWJlbF0gPSBlZGl0VVJMLm1hdGNoKC90aXRsZT0oLis/KSYvKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25UYXJnZXROYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KHNlY3Rpb25UYXJnZXRMYWJlbCB8fCAnJyk7XG5cdFx0XHRcdGNvbnN0IGNsb25lTm9kZSA9ICQodGhpcykucHJldigpLmNsb25lKCk7XG5cdFx0XHRcdGNsb25lTm9kZS5maW5kKCcubXctaGVhZGxpbmUtbnVtYmVyJykucmVtb3ZlKCk7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25OYW1lID0gY2xvbmVOb2RlLnRleHQoKS50cmltKCk7XG5cdFx0XHRcdGNvbnN0IF9zZWN0aW9uQnRuID0gc2VjdGlvbkJ0bi5jbG9uZSgpO1xuXHRcdFx0XHRfc2VjdGlvbkJ0bi5maW5kKCcuV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuJykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcjogTnVtYmVyLnBhcnNlSW50KHNlY3Rpb25OdW1iZXIgYXMgc3RyaW5nLCAxMCksXG5cdFx0XHRcdFx0XHRzZWN0aW9uTmFtZSxcblx0XHRcdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBzZWN0aW9uVGFyZ2V0TmFtZSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5hcHBlbmQoX3NlY3Rpb25CdG4pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQodGhpcykuZmluZCgnLm13LWVkaXRzZWN0aW9uLWJyYWNrZXQnKS5sYXN0KCkuYmVmb3JlKF9zZWN0aW9uQnRuKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdExvZy5lcnJvcignZmFpbF90b19pbml0X3F1aWNrZWRpdCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeS7u+aEj+mTvuaOpee8lui+keWFpeWPo1xuXHQgKlxuXHQgKiBAcGFyYW0ge09uQ2xpY2t9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydExpbmtFZGl0RW50cmllcyhvbkNsaWNrOiBPbkNsaWNrKTogdm9pZCB7XG5cdFx0b25DbGljayB8fD0gKCkgPT4ge307XG5cdFx0JCgnI213LWNvbnRlbnQtdGV4dCBhLmV4dGVybmFsJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSB8fCAnJztcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHBhcnNlUXVlcnkodXJsKTtcblx0XHRcdGlmIChwYXJhbXNbJ2FjdGlvbiddID09PSAnZWRpdCcgJiYgcGFyYW1zWyd0aXRsZSddICE9PSB1bmRlZmluZWQgJiYgcGFyYW1zWydzZWN0aW9uJ10gIT09ICduZXcnKSB7XG5cdFx0XHRcdCQodGhpcykuYWZ0ZXIoXG5cdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJ2phdmFzY3JpcHQ6dm9pZCgwKScsXG5cdFx0XHRcdFx0XHRcdGNsYXNzOiAnV2lraXBsdXMtRWRpdC1FdmVyeVdoZXJlQnRuJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQudGV4dChgKCR7aTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF9zZWN0aW9uYnRuJyl9KWApXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkNsaWNrKHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRQYWdlTmFtZTogcGFyYW1zWyd0aXRsZSddIGFzIHN0cmluZyxcblx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uTnVtYmVyOiBOdW1iZXIucGFyc2VJbnQocGFyYW1zWydzZWN0aW9uJ10gYXMgc3RyaW5nLCAxMCkgPz8gLTEsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHNob3dRdWlja0VkaXRQYW5lbCh7XG5cdFx0dGl0bGUgPSAnJyxcblx0XHRjb250ZW50ID0gJycsXG5cdFx0c3VtbWFyeSA9ICcnLFxuXHRcdG9uQmFjayA9ICgpID0+IHt9LFxuXHRcdG9uUGFyc2UgPSBhc3luYyAoKSA9PiB7fSxcblx0XHRvbkVkaXQgPSBhc3luYyAoKSA9PiB7fSxcblx0XHRlc2NFeGl0ID0gZmFsc2UsXG5cdH06IHtcblx0XHR0aXRsZTogc3RyaW5nO1xuXHRcdGNvbnRlbnQ6IHN0cmluZztcblx0XHRzdW1tYXJ5OiBzdHJpbmc7XG5cdFx0b25CYWNrOiAoKSA9PiB2b2lkO1xuXHRcdG9uUGFyc2U6ICh3aWtpdGV4dDogc3RyaW5nKSA9PiBQcm9taXNlPHN0cmluZyB8IHZvaWQ+O1xuXHRcdG9uRWRpdDogKGFyZzA6IHtzdW1tYXJ5OiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZzsgaXNNaW5vckVkaXQ6IGJvb2xlYW59KSA9PiBQcm9taXNlPHZvaWQ+O1xuXHRcdGVzY0V4aXQ6IGJvb2xlYW47XG5cdH0pOiB2b2lkIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHR0aGlzLnNjcm9sbFRvcCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpIHx8IDA7XG5cdFx0aWYgKHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlKSB7XG5cdFx0XHR0aGlzLmhpZGVRdWlja0VkaXRQYW5lbCgpO1xuXHRcdH1cblx0XHR0aGlzLnF1aWNrRWRpdFBhbmVsVmlzaWJsZSA9IHRydWU7XG5cdFx0Ly8g6Ziy5q2i5omL5ruR5YWz6Zet6aG16Z2iXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IGAke2kxOG4udHJhbnNsYXRlKCdvbmNsb3NlX2NvbmZpcm0nKX1gKSk7XG5cdFx0Y29uc3QgaXNOZXdQYWdlID0gJCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggPiAwO1xuXHRcdC8vIERPTSDlrprkuYnlvIDlp4tcblx0XHRjb25zdCBiYWNrQnRuID0gJCgnPHNwYW4+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJ0bicpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnYmFjaycpfWApOyAvLyDov5Tlm57mjInpkq5cblx0XHRjb25zdCBqdW1wQnRuID0gJCgnPHNwYW4+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtSnVtcCcpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJ0bicpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJyNXaWtpcGx1cy1RdWlja2VkaXQnKVxuXHRcdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdnb3RvX2VkaXRib3gnKX1gKVxuXHRcdFx0KTsgLy8g5Yiw57yW6L6R5qGGXG5cdFx0Y29uc3QgaW5wdXRCb3ggPSAkKCc8dGV4dGFyZWE+JykuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0Jyk7IC8vIOS4u+e8lui+keahhlxuXHRcdGNvbnN0IHByZXZpZXdCb3ggPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpOyAvLyDpooTop4jovpPlh7pcblx0XHRjb25zdCBzdW1tYXJ5Qm94ID0gJCgnPGlucHV0PicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQnKVxuXHRcdFx0LmF0dHIoJ3BsYWNlaG9sZGVyJywgYCR7aTE4bi50cmFuc2xhdGUoJ3N1bW1hcnlfcGxhY2Vob2xkJyl9YCk7IC8vIOe8lui+keaRmOimgei+k+WFpVxuXHRcdGNvbnN0IGVkaXRTdWJtaXRCdG4gPSAkKCc8YnV0dG9uPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZShpc05ld1BhZ2UgPyAncHVibGlzaF9wYWdlJyA6ICdwdWJsaXNoX2NoYW5nZScpfShDdHJsK1MpYCk7IC8vIOaPkOS6pOaMiemSrlxuXHRcdGNvbnN0IHByZXZpZXdTdWJtaXRCdG4gPSAkKCc8YnV0dG9uPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0Jylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdwcmV2aWV3Jyl9YCk7IC8vIOmihOiniOaMiemSrlxuXHRcdGNvbnN0IGlzTWlub3JFZGl0ID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFwcGVuZCgkKCc8aW5wdXQ+JykuYXR0cih7dHlwZTogJ2NoZWNrYm94JywgaWQ6ICdXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0J30pKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGxhYmVsPicpXG5cdFx0XHRcdFx0LmF0dHIoJ2ZvcicsICdXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0Jylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnbWFya19taW5vcmVkaXQnKX0oQ3RybCtTaGlmdCtTKWApXG5cdFx0XHQpXG5cdFx0XHQuY3NzKHttYXJnaW46ICc1cHggNXB4IDVweCAtM3B4JywgZGlzcGxheTogJ2lubGluZSd9KTtcblx0XHQvLyBET03lrprkuYnnu5PmnZ9cblx0XHRjb25zdCBlZGl0Qm9keSA9ICQoJzxkaXY+JykuYXBwZW5kKFxuXHRcdFx0YmFja0J0bixcblx0XHRcdGp1bXBCdG4sXG5cdFx0XHRwcmV2aWV3Qm94LFxuXHRcdFx0aW5wdXRCb3gsXG5cdFx0XHRzdW1tYXJ5Qm94LFxuXHRcdFx0JCgnPGJyPicpLFxuXHRcdFx0aXNNaW5vckVkaXQsXG5cdFx0XHRlZGl0U3VibWl0QnRuLFxuXHRcdFx0cHJldmlld1N1Ym1pdEJ0blxuXHRcdCk7XG5cdFx0dGhpcy5jcmVhdGVEaWFsb2dCb3godGl0bGUsIGVkaXRCb2R5LCAxMDAwLCAoKSA9PiB7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKGNvbnRlbnQpO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0JykudmFsKHN1bW1hcnkpO1xuXHRcdH0pO1xuXHRcdC8vIEJhY2tcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKS5vbignY2xpY2snLCBvbkJhY2spO1xuXHRcdC8vIFByZXZpZXdcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0Jykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcHJlbG9hZEJhbm5lciA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnbG9hZGluZ19wcmV2aWV3Jyl9YCk7XG5cdFx0XHRjb25zdCB3aWtpVGV4dCA9ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQnKS52YWwoKTtcblx0XHRcdCQodGhpcykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KDEwMCwgKCkgPT4ge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuaHRtbCgnJykuYXBwZW5kKHByZWxvYWRCYW5uZXIpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZUluKDEwMCk7XG5cdFx0XHR9KTtcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHNlbGYuc2Nyb2xsVG9wfSwgMjAwKTsgLy/ov5Tlm57pobbpg6hcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9uUGFyc2Uod2lraVRleHQgYXMgc3RyaW5nKTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KCcxMDAnLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKGA8aHI+PGRpdiBjbGFzcz1cIm13LWJvZHktY29udGVudFwiPiR7cmVzdWx0fTwvZGl2Pjxocj5gKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbignMTAwJyk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdC8vIEVkaXRcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHRpbWVyID0gRGF0ZS5ub3coKTtcblx0XHRcdGNvbnN0IGVkaXRCYW5uZXIgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3N1Ym1pdHRpbmdfZWRpdCcpfWApO1xuXHRcdFx0Y29uc3QgcGF5bG9hZCA9IHtcblx0XHRcdFx0c3VtbWFyeTogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0JykudmFsKCkgYXMgc3RyaW5nLFxuXHRcdFx0XHRjb250ZW50OiAkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKCkgYXMgc3RyaW5nLFxuXHRcdFx0XHRpc01pbm9yRWRpdDogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKS5pcygnOmNoZWNrZWQnKSBhcyBib29sZWFuLFxuXHRcdFx0fTtcblx0XHRcdC8vIOWHhuWkh+e8lui+kSDnpoHnlKjmjInpkq4g5omn6KGM5Yqo55S7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCwjV2lraXBsdXMtUXVpY2tlZGl0LCNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5hdHRyKFxuXHRcdFx0XHQnZGlzYWJsZWQnLFxuXHRcdFx0XHQnZGlzYWJsZWQnXG5cdFx0XHQpO1xuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogc2VsZi5zY3JvbGxUb3B9LCAyMDApO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVPdXQoMTAwLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKCcnKS5hcHBlbmQoZWRpdEJhbm5lcik7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlSW4oMTAwKTtcblx0XHRcdH0pO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgb25FZGl0KHBheWxvYWQpO1xuXHRcdFx0XHRjb25zdCB1c2VUaW1lID0gRGF0ZS5ub3coKSAtIHRpbWVyO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0Jylcblx0XHRcdFx0XHQuZmluZCgnLldpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdFx0LmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDYsIDIzOSwgOTIsIDAuNDQpJyk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKVxuXHRcdFx0XHRcdC5maW5kKCcuV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnZWRpdF9zdWNjZXNzJywgW3VzZVRpbWUudG9TdHJpbmcoKV0pfWApO1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAod2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4gdW5kZWZpbmVkKSk7IC8vIOWPlua2iOmhtemdouWFs+mXreehruiupFxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDIxOCwgMTQyLCAxNjcsIDAuNjUpJyk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5odG1sKChlcnJvciBhcyBXaWtpcGx1c0Vycm9yKS5tZXNzYWdlKTtcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0LCNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLnByb3AoXG5cdFx0XHRcdFx0J2Rpc2FibGVkJyxcblx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vIEN0cmwrU+aPkOS6pCBDdHJsK1NoaWZ0K1PlsI/nvJbovpFcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LCNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCwjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpLm9uKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChlLmN0cmxLZXkgJiYgZS53aGljaCA9PT0gODMpIHtcblx0XHRcdFx0aWYgKGUuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly8gRXNj6YCA5Ye6XG5cdFx0aWYgKGVzY0V4aXQpIHtcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdFx0aWYgKGUud2hpY2ggPT09IDI3KSB7XG5cdFx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0aGlkZVF1aWNrRWRpdFBhbmVsKCkge1xuXHRcdHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gZmFsc2U7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZmFkZU91dCgnZmFzdCcsICgpID0+IHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB1bmRlZmluZWQpKTsgLy8g5Y+W5raI6aG16Z2i5YWz6Zet56Gu6K6kXG5cdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaYvuekuuW/q+mAn+mHjeWumuWQkeW8ueeql1xuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1cblx0ICogQHBhcmFtIHtPbkVkaXR9IHBhcmFtLm9uRWRpdFxuXHQgKiBAcGFyYW0ge09uU3VjY2Vzc30gcGFyYW0ub25TdWNjZXNzXG5cdCAqL1xuXHRzaG93U2ltcGxlUmVkaXJlY3RQYW5lbCh7b25FZGl0ID0gYXN5bmMgKCkgPT4ge30sIG9uU3VjY2VzcyA9ICgpID0+IHt9fToge29uRWRpdD86IE9uRWRpdDsgb25TdWNjZXNzPzogT25TdWNjZXNzfSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1JbnB1dCcpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLVRpdGxlJyk7XG5cdFx0Y29uc3Qgc3VtbWFyeUlucHV0VGl0bGUgPSAkKCc8cD4nKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zdW1tYXJ5X2Rlc2MnKSk7XG5cdFx0Y29uc3Qgc3VtbWFyeUlucHV0ID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1JbnB1dCcpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLVN1bW1hcnknKTtcblx0XHRjb25zdCBhcHBseUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1DYW5jZWwnKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ2NhbmNlbCcpKTtcblx0XHRjb25zdCBjb250aW51ZUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1Db250aW51ZScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY29udGludWUnKSk7XG5cdFx0Y29uc3QgY29udGVudCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hcHBlbmQoaW5wdXQpXG5cdFx0XHQuYXBwZW5kKHN1bW1hcnlJbnB1dFRpdGxlKVxuXHRcdFx0LmFwcGVuZChzdW1tYXJ5SW5wdXQpXG5cdFx0XHQuYXBwZW5kKCQoJzxocj4nKSlcblx0XHRcdC5hcHBlbmQoYXBwbHlCdG4pXG5cdFx0XHQuYXBwZW5kKGNhbmNlbEJ0bik7IC8vIOaLvOaOpVxuXHRcdGNvbnN0IGRpYWxvZyA9IHRoaXMuY3JlYXRlRGlhbG9nQm94KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9kZXNjJyksIGNvbnRlbnQsIDYwMCk7XG5cdFx0YXBwbHlCdG4ub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGUgPSAkKCcjV2lraXBsdXMtU1ItVGl0bGUnKS52YWwoKSBhcyBzdHJpbmc7XG5cdFx0XHRjb25zdCBzdW1tYXJ5ID0gJCgnI1dpa2lwbHVzLVNSLVN1bW1hcnknKS52YWwoKSBhcyBzdHJpbmc7XG5cdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoXG5cdFx0XHRcdGA8ZGl2IGNsYXNzPVwiV2lraXBsdXMtQmFubmVyXCI+JHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9PC9kaXY+YFxuXHRcdFx0KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IG9uRWRpdCh7XG5cdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogZmFsc2UsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dChpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3Rfc2F2ZWQnKSk7XG5cdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0b25TdWNjZXNzKHt0aXRsZX0pO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDIxOCwgMTQyLCAxNjcsIDAuNjUpJyk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KChlcnJvciBhcyBXaWtpcGx1c0Vycm9yKS5tZXNzYWdlKTtcblx0XHRcdFx0aWYgKChlcnJvciBhcyBXaWtpcGx1c0Vycm9yKS5jb2RlID09PSAnYXJ0aWNsZWV4aXN0cycpIHtcblx0XHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmFwcGVuZCgkKCc8aHI+JykpLmFwcGVuZChjb250aW51ZUJ0bikuYXBwZW5kKGNhbmNlbEJ0bik7XG5cdFx0XHRcdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb250aW51ZUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoXG5cdFx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwiV2lraXBsdXMtQmFubmVyXCI+JHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9PC9kaXY+YFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IG9uRWRpdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zYXZlZCcpKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRcdFx0XHRvblN1Y2Nlc3Moe3RpdGxlfSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoKGVycm9yIGFzIFdpa2lwbHVzRXJyb3IpLm1lc3NhZ2UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiDpmpDol4/lv6vpgJ/ph43lrprlkJHlvLnnqpdcblx0ICpcblx0ICogQHBhcmFtIHtKUXVlcnk8SFRNTEVsZW1lbnQ+fSBkaWFsb2dcblx0ICovXG5cdGhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZzogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICQoJ2JvZHknKSkge1xuXHRcdGRpYWxvZy5maW5kKCcuV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKS50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0c2hvd1NldHRpbmdzUGFuZWwoe1xuXHRcdG9uU3VibWl0ID0gKCkgPT4ge30sXG5cdH06IHtcblx0XHRvblN1Ym1pdD86IChhcmcwOiB7c2V0dGluZ3M6IHN0cmluZ30pID0+IHZvaWQ7XG5cdH0gPSB7fSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPHRleHRhcmVhPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS5hdHRyKCdyb3dzJywgJzEwJyk7XG5cdFx0Y29uc3QgYXBwbHlCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU2V0dGluZy1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TZXR0aW5nLUNhbmNlbCcpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY2FuY2VsJykpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSAkKCc8ZGl2PicpLmFwcGVuZChpbnB1dCkuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGFwcGx5QnRuKS5hcHBlbmQoY2FuY2VsQnRuKTsgLy8g5ou85o6lXG5cblx0XHRjb25zdCBkaWFsb2cgPSB0aGlzLmNyZWF0ZURpYWxvZ0JveChpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3NfZGVzYycpLCBjb250ZW50LCA2MDAsICgpID0+IHtcblx0XHRcdGlmIChsb2NhbFN0b3JhZ2VbJ1dpa2lwbHVzX1NldHRpbmdzJ10pIHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS52YWwobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKTtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbChKU09OLnN0cmluZ2lmeShzZXR0aW5ncywgbnVsbCwgMikpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvLyBpZ25vcmVcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS5hdHRyKCdwbGFjZWhvbGRlcicsIGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19wbGFjZWhvbGRlcicpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRhcHBseUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBzYXZlZEJhbm5lciA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJhbm5lcicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX3NhdmVkJykpO1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSAkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbCgpIGFzIHN0cmluZztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdG9uU3VibWl0KHtzZXR0aW5nc30pO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoJycpLmFwcGVuZChzYXZlZEJhbm5lcik7XG5cdFx0XHRcdGF3YWl0IHNsZWVwKDE1MDApO1xuXHRcdFx0XHR0aGlzLmhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Tm90aWZpY2F0aW9uLmVycm9yKGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19ncmFtbWFyX2Vycm9yJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNhbmNlbEJ0bi5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyk7XG5cdFx0fSk7XG5cdH1cblxuXHRoaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cgPSAkKCdib2R5JykpIHtcblx0XHRkaWFsb2cuZmluZCgnLldpa2lwbHVzLUludGVyQm94LUNsb3NlJykudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdGJpbmRQcmVsb2FkRXZlbnRzKG9uUHJlbG9hZDogeyhhcmcwOiB7c2VjdGlvbk51bWJlcjogbnVtYmVyfSk6IHZvaWR9KSB7XG5cdFx0JCgnI3RvYycpXG5cdFx0XHQuY2hpbGRyZW4oJ3VsJylcblx0XHRcdC5maW5kKCdhJylcblx0XHRcdC5lYWNoKChpKSA9PiB7XG5cdFx0XHRcdCQodGhpcykub24oJ21vdXNlb3ZlcicsICgpID0+IHtcblx0XHRcdFx0XHQkKHRoaXMpLm9mZignbW91c2VvdmVyJyk7XG5cdFx0XHRcdFx0b25QcmVsb2FkKHtcblx0XHRcdFx0XHRcdHNlY3Rpb25OdW1iZXI6IGkgKyAxLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVSSgpO1xuIiwgIi8qKlxuICogV2lraXBsdXNcbiAqIEVyaWRhbnVzIFNvcmEgPHNvcmFAc291bmQubW9lPlxuICovXG5pbXBvcnQgJy4vd2lraXBsdXMubGVzcyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCBMb2cgZnJvbSAnLi91dGlscy9sb2cnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL2NvcmUvbm90aWZpY2F0aW9uJztcbmltcG9ydCBQYWdlIGZyb20gJy4vY29yZS9wYWdlJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3V0aWxzL3NldHRpbmdzJztcbmltcG9ydCBVSSBmcm9tICcuL2NvcmUvdWknO1xuaW1wb3J0IFdpa2kgZnJvbSAnLi9zZXJ2aWNlcy93aWtpJztcbmltcG9ydCBpMThuIGZyb20gJy4vdXRpbHMvaTE4bic7XG5cbiQoYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBQYWdlczogUmVjb3JkPG51bWJlciwgUGFnZT4gPSB7fTtcblx0Y29uc3QgaXNDdXJyZW50UGFnZUVtcHR5ID0gJCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggPiAwICYmIENvbnN0YW50cy5hcnRpY2xlSWQgPT09IDA7XG5cblx0LyoqXG5cdCAqIEdldCBwYWdlIGluc3RhbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMucmV2aXNpb25JZCDpobXpnaLkv67orqLniYjmnKzlj7dcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy50aXRsZSDpobXpnaLmoIfpophcblx0ICovXG5cdGNvbnN0IGdldFBhZ2UgPSBhc3luYyAoe3JldmlzaW9uSWQgPSAwLCB0aXRsZX06IHtyZXZpc2lvbklkPzogbnVtYmVyOyB0aXRsZTogc3RyaW5nfSk6IFByb21pc2U8UGFnZT4gPT4ge1xuXHRcdGlmIChQYWdlc1tyZXZpc2lvbklkXSkge1xuXHRcdFx0cmV0dXJuIFBhZ2VzW3JldmlzaW9uSWRdO1xuXHRcdH1cblx0XHRjb25zdCBuZXdQYWdlID0gbmV3IFBhZ2Uoe1xuXHRcdFx0cmV2aXNpb25JZCxcblx0XHRcdHRpdGxlLFxuXHRcdH0pO1xuXHRcdGF3YWl0IG5ld1BhZ2UuaW5pdCgpO1xuXHRcdFBhZ2VzW3JldmlzaW9uSWRdID0gbmV3UGFnZTtcblx0XHRyZXR1cm4gUGFnZXNbcmV2aXNpb25JZF07XG5cdH07XG5cblx0TG9nLmluZm8oYFdpa2lwbHVzIG5vdyBsb2FkaW5nLiBWZXJzaW9uOiAke0NvbnN0YW50cy52ZXJzaW9ufWApO1xuXG5cdGlmICghd2luZG93Lm13KSB7XG5cdFx0Y29uc29sZS5sb2coJ01lZGlhd2lraSBKYXZhU2NyaXB0IG5vdCBsb2FkZWQgb3Igbm90IGEgTWVkaWF3aWtpIHdlYnNpdGUuJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmICghQ29uc3RhbnRzLnVzZXJHcm91cHM/LmluY2x1ZGVzKCdhdXRvY29uZmlybWVkJykgJiYgIUNvbnN0YW50cy51c2VyR3JvdXBzPy5pbmNsdWRlcygnY29uZmlybWVkJykpIHtcblx0XHROb3RpZmljYXRpb24uZXJyb3IoaTE4bi50cmFuc2xhdGUoJ25vdF9hdXRvY29uZmlybWVkX3VzZXInKSk7XG5cdFx0TG9nLmluZm8oaTE4bi50cmFuc2xhdGUoJ25vdF9hdXRvY29uZmlybWVkX3VzZXInKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFDb25zdGFudHMuaXNBcnRpY2xlIHx8IENvbnN0YW50cy5hY3Rpb24gIT09ICd2aWV3Jykge1xuXHRcdExvZy5pbmZvKCdOb3QgYW4gZWRpdGFibGUgcGFnZS4gU3RvcCBpbml0aWFsaXphdGlvbi4nKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBJbml0aWFsaXplIGN1cnJlbnQgcGFnZSDpu5jorqTliJ3lp4vljJblvZPliY3pobXpnaJcblx0d2luZG93Ll9XaWtpcGx1c1BhZ2VzID0gUGFnZXM7XG5cdGNvbnN0IGN1cnJlbnRQYWdlTmFtZSA9IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWU7XG5cdGNvbnN0IHJldmlzaW9uSWQgPSBDb25zdGFudHMucmV2aXNpb25JZDtcblx0Y29uc3QgY3VycmVudFBhZ2UgPSBhd2FpdCBnZXRQYWdlKHtcblx0XHRyZXZpc2lvbklkLFxuXHRcdHRpdGxlOiBjdXJyZW50UGFnZU5hbWUsXG5cdH0pO1xuXG5cdGNvbnN0IGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQgPSBhc3luYyAoe1xuXHRcdHNlY3Rpb25OdW1iZXIsXG5cdFx0c2VjdGlvbk5hbWUsXG5cdFx0dGFyZ2V0UGFnZU5hbWUsXG5cdH06IE9uQ2xpY2tQYXJhbXMpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCBpc090aGVyUGFnZSA9IHRhcmdldFBhZ2VOYW1lICE9PSBjdXJyZW50UGFnZU5hbWU7XG5cdFx0aWYgKGlzT3RoZXJQYWdlICYmIENvbnN0YW50cy5sYXRlc3RSZXZpc2lvbklkICE9PSBDb25zdGFudHMucmV2aXNpb25JZCkge1xuXHRcdFx0Ly8g5Zyo5Y6G5Y+y54mI5pys57yW6L6R5YW25LuW6aG16Z2i5pyJ6Zeu6aKYIOaaguaXtuS4jeaUr+aMgVxuXHRcdFx0TG9nLmVycm9yKCdjcm9zc19wYWdlX2hpc3RvcnlfcmV2aXNpb25fZWRpdF93YXJuaW5nJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHJldmlzaW9uSWQgPSBpc090aGVyUGFnZSA/IGF3YWl0IFdpa2kuZ2V0TGF0ZXN0UmV2aXNpb25JZEZvclBhZ2UodGFyZ2V0UGFnZU5hbWUpIDogQ29uc3RhbnRzLnJldmlzaW9uSWQ7XG5cblx0XHRjb25zdCBwYWdlID0gYXdhaXQgZ2V0UGFnZSh7cmV2aXNpb25JZCwgdGl0bGU6IHRhcmdldFBhZ2VOYW1lfSk7XG5cdFx0Y29uc3QgY3VzdG9tU3VtbWFyeSA9IFNldHRpbmdzLmdldFNldHRpbmcoJ2RlZmF1bHRTdW1tYXJ5Jywge1xuXHRcdFx0c2VjdGlvbk5hbWU6IHNlY3Rpb25OYW1lIGFzIHN0cmluZyxcblx0XHRcdHNlY3Rpb25OdW1iZXI6IHNlY3Rpb25OdW1iZXIgYXMgbnVtYmVyLFxuXHRcdFx0c2VjdGlvblRhcmdldE5hbWU6IHRhcmdldFBhZ2VOYW1lLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHN1bW1hcnkgPVxuXHRcdFx0Y3VzdG9tU3VtbWFyeSB8fFxuXHRcdFx0KHNlY3Rpb25OYW1lXG5cdFx0XHRcdD8gYC8qICR7c2VjdGlvbk5hbWV9ICovICR7aTE4bi50cmFuc2xhdGUoJ2RlZmF1bHRfc3VtbWFyeV9zdWZmaXgnKX1gXG5cdFx0XHRcdDogaTE4bi50cmFuc2xhdGUoJ2RlZmF1bHRfc3VtbWFyeV9zdWZmaXgnKSk7XG5cdFx0Y29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdE5vdGlmaWNhdGlvbi5zdWNjZXNzKGkxOG4udHJhbnNsYXRlKCdsb2FkaW5nJykpO1xuXHRcdH0sIDIwMCk7XG5cdFx0Y29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBhd2FpdCBwYWdlLmdldFdpa2lUZXh0KHtcblx0XHRcdHNlY3Rpb246IHNlY3Rpb25OdW1iZXIgYXMgbnVtYmVyLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGlzRWRpdEhpc3RvcnlSZXZpc2lvbiA9ICFpc090aGVyUGFnZSAmJiBDb25zdGFudHMubGF0ZXN0UmV2aXNpb25JZCAhPT0gQ29uc3RhbnRzLnJldmlzaW9uSWQ7XG5cdFx0Y29uc3QgZXNjVG9FeGl0ID1cblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY190b19leGl0X3F1aWNrZWRpdCcpID09PSB0cnVlIHx8IC8vIOWFvOWuueiAgeiuvue9rmtleVxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjX3RvX2V4aXRfcXVpY2tlZGl0JykgPT09ICd0cnVlJyB8fFxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjVG9FeGl0UXVpY2tFZGl0JykgPT09IHRydWUgfHxcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY1RvRXhpdFF1aWNrRWRpdCcpID09PSAndHJ1ZSc7XG5cdFx0Y29uc3QgY3VzdG9tRWRpdFRhZ3MgPSBTZXR0aW5ncy5nZXRTZXR0aW5nKCdjdXN0b21fZWRpdF90YWdzJykgYXMgc3RyaW5nW107XG5cdFx0Y29uc3QgZGVmYXVsdEVkaXRUYWdzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGNvbnN0IGVkaXRUYWdzID0gY3VzdG9tRWRpdFRhZ3M/Lmxlbmd0aCA/IGN1c3RvbUVkaXRUYWdzIDogZGVmYXVsdEVkaXRUYWdzO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0Tm90aWZpY2F0aW9uLmVtcHR5KCk7XG5cblx0XHRpZiAoaXNFZGl0SGlzdG9yeVJldmlzaW9uKSB7XG5cdFx0XHROb3RpZmljYXRpb24ud2FybmluZyhpMThuLnRyYW5zbGF0ZSgnaGlzdG9yeV9lZGl0X3dhcm5pbmcnKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2hvdWxkU2hvd0NyZWF0ZVBhZ2VUaXAgPSBpc090aGVyUGFnZSA/ICFyZXZpc2lvbklkIDogaXNDdXJyZW50UGFnZUVtcHR5O1xuXG5cdFx0VUkuc2hvd1F1aWNrRWRpdFBhbmVsKHtcblx0XHRcdHRpdGxlOiBgJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3RvcGJ0bicpfSR7XG5cdFx0XHRcdGlzRWRpdEhpc3RvcnlSZXZpc2lvbiA/IGkxOG4udHJhbnNsYXRlKCdoaXN0b3J5X2VkaXRfd2FybmluZycpIDogJydcblx0XHRcdH1gLFxuXHRcdFx0Y29udGVudDogc2hvdWxkU2hvd0NyZWF0ZVBhZ2VUaXAgPyBpMThuLnRyYW5zbGF0ZSgnY3JlYXRlX3BhZ2VfdGlwJykgOiBzZWN0aW9uQ29udGVudCxcblx0XHRcdHN1bW1hcnk6IHN1bW1hcnkgYXMgc3RyaW5nLFxuXHRcdFx0b25CYWNrOiBVSS5oaWRlUXVpY2tFZGl0UGFuZWwsXG5cdFx0XHRvblBhcnNlOiAod2lraVRleHQpID0+IHtcblx0XHRcdFx0cmV0dXJuIHBhZ2UucGFyc2VXaWtpVGV4dCh3aWtpVGV4dCk7XG5cdFx0XHR9LFxuXHRcdFx0b25FZGl0OiBhc3luYyAoe2NvbnRlbnQsIHN1bW1hcnksIGlzTWlub3JFZGl0fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBlZGl0UGF5bG9hZDogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0XHRcdFx0Y29udGVudCxcblx0XHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHQuLi4oc2VjdGlvbk51bWJlciA9PT0gLTEgPyB7fSA6IHtzZWN0aW9uOiBzZWN0aW9uTnVtYmVyfSksXG5cdFx0XHRcdFx0XHQuLi4oZWRpdFRhZ3MubGVuZ3RoID8ge3RhZ3M6IGVkaXRUYWdzLmpvaW4oJ3wnKX0gOiB7fSksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKGlzTWlub3JFZGl0KSB7XG5cdFx0XHRcdFx0ZWRpdFBheWxvYWQuY29uZmlnLm1pbm9yID0gJ3RydWUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVkaXRQYXlsb2FkLmNvbmZpZy5ub3RtaW5vciA9ICd0cnVlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBwYWdlLmVkaXQoZWRpdFBheWxvYWQpO1xuXHRcdFx0fSxcblx0XHRcdGVzY0V4aXQ6IGVzY1RvRXhpdCxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQgPSAoKTogdm9pZCA9PiB7XG5cdFx0VUkuc2hvd1NpbXBsZVJlZGlyZWN0UGFuZWwoe1xuXHRcdFx0b25FZGl0OiBhc3luYyAoe3RpdGxlLCBzdW1tYXJ5LCBmb3JjZU92ZXJ3cml0ZSA9IGZhbHNlfSkgPT4ge1xuXHRcdFx0XHRjb25zdCBwYWdlID0gYXdhaXQgZ2V0UGFnZSh7dGl0bGV9KTtcblx0XHRcdFx0Y29uc3QgY3VycmVudFBhZ2VOYW1lID0gQ29uc3RhbnRzLmN1cnJlbnRQYWdlTmFtZTtcblx0XHRcdFx0Y29uc3QgY29udGVudG1vZGVsID0gcGFnZS5jb250ZW50bW9kZWw7XG5cdFx0XHRcdGlmIChzdW1tYXJ5ID09PSAnJykge1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3RfZnJvbV9zdW1tYXJ5JywgW3RpdGxlLCBjdXJyZW50UGFnZU5hbWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBjb250ZW50ID0gKCgpID0+IHtcblx0XHRcdFx0XHRsZXQgY29udGVudDtcblx0XHRcdFx0XHRzd2l0Y2ggKGNvbnRlbnRtb2RlbCkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnamF2YXNjcmlwdCc6XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSBgLyogI1JFRElSRUNUICovbXcubG9hZGVyLmxvYWQoXCIke2xvY2F0aW9uLnByb3RvY29sfS8vJHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhdGlvbi5ob3N0XG5cdFx0XHRcdFx0XHRcdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9pbmRleC5waHA/dGl0bGU9JHttdy51dGlsLndpa2lVcmxlbmNvZGUoXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VOYW1lXG5cdFx0XHRcdFx0XHRcdCl9JmFjdGlvbj1yYXcmY3R5cGU9dGV4dC9qYXZhc2NyaXB0XCIpO2A7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnY3NzJzpcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IGAvKiAjUkVESVJFQ1QgKi9AaW1wb3J0IHVybCgke2xvY2F0aW9uLnByb3RvY29sfS8vJHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhdGlvbi5ob3N0XG5cdFx0XHRcdFx0XHRcdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9pbmRleC5waHA/dGl0bGU9JHttdy51dGlsLndpa2lVcmxlbmNvZGUoXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VOYW1lXG5cdFx0XHRcdFx0XHRcdCl9JmFjdGlvbj1yYXcmY3R5cGU9dGV4dC9jc3MpO2A7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnU2NyaWJ1bnRvJzpcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IGByZXR1cm4gcmVxdWlyZSBbWyR7Y3VycmVudFBhZ2VOYW1lfV1dYDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICd3aWtpdGV4dCc6XG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYCNSRURJUkVDVCBbWyR7Y3VycmVudFBhZ2VOYW1lfV1dYDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0XHR9KSgpO1xuXHRcdFx0XHRjb25zdCBwYXlsb2FkOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0XHRjb250ZW50LFxuXHRcdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAoIWZvcmNlT3ZlcndyaXRlKSB7XG5cdFx0XHRcdFx0cGF5bG9hZC5jb25maWcuY3JlYXRlb25seSA9ICd0cnVlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBwYWdlLmVkaXQocGF5bG9hZCk7XG5cdFx0XHR9LFxuXHRcdFx0b25TdWNjZXNzOiAoe3RpdGxlfSkgPT4ge1xuXHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gQ29uc3RhbnRzLmFydGljbGVQYXRoLnJlcGxhY2UoL1xcJDEvZ2ksIHRpdGxlKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkID0gKCk6IHZvaWQgPT4ge1xuXHRcdFVJLnNob3dTZXR0aW5nc1BhbmVsKHtcblx0XHRcdG9uU3VibWl0OiAoe3NldHRpbmdzfSkgPT4ge1xuXHRcdFx0XHRKU09OLnBhcnNlKHNldHRpbmdzKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1dpa2lwbHVzX1NldHRpbmdzJywgc2V0dGluZ3MpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVQcmVsb2FkID0gYXN5bmMgKHtzZWN0aW9uTnVtYmVyfToge3NlY3Rpb25OdW1iZXI6IG51bWJlcn0pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRhd2FpdCBjdXJyZW50UGFnZS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdH0pO1xuXHR9O1xuXG5cdFVJLmluc2VydFRvcFF1aWNrRWRpdEVudHJ5KGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyhoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0TGlua0VkaXRFbnRyaWVzKGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbihoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uKGhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmJpbmRQcmVsb2FkRXZlbnRzKGhhbmRsZVByZWxvYWQpO1xufSk7XG4iLCAiaW1wb3J0ICcuL1dpa2lwbHVzLmxlc3MnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtyZXNpemVXaWtpcGx1c30gZnJvbSAnLi9yZXNpemUnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGFzeW5jIGZ1bmN0aW9uIFdpa2lwbHVzKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnSXNBcnRpY2xlfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnSXNBcnRpY2xlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgeyd2aXN1YWxlZGl0b3ItZW5hYmxlJzogaXNWZUVuYWJsZX0gPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCkgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cblx0Lyogc2VlIDxodHRwczovL2dpdGh1Yi5jb20vV2lraXBsdXMvV2lraXBsdXMvaXNzdWVzLzY1PiAqL1xuXHRpZiAoaXNWZUVuYWJsZSkge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LnZpc3VhbEVkaXRvci5jb3JlJyk7XG5cdH1cblxuXHQvLyBpbXBvcnQgbWFpbiBmdW5jdGlvblxuXHRhd2FpdCBpbXBvcnQoJy4vbW9kdWxlcy9pbmRleCcpO1xuXG5cdC8vIHJlc2l6ZSBXaWtpcGx1cyB3aW5kb3dcblx0cmVzaXplV2lraXBsdXMoJGJvZHkpO1xufSk7XG4iLCAiY29uc3QgcmVzaXplV2lraXBsdXMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdCQod2luZG93KS5vbigncmVzaXplJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cdFx0Y29uc3QgJHdpa2lwbHVzSW50ZXJib3ggPSAkYm9keS5maW5kKCcuV2lraXBsdXMtSW50ZXJCb3gnKTtcblx0XHRpZiAoJHdpa2lwbHVzSW50ZXJib3gpIHtcblx0XHRcdGNvbnN0IGNsaWVudFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0XHRjb25zdCBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0XHRjb25zdCBkaWFsb2dXaWR0aCA9IE1hdGgubWluKGNsaWVudFdpZHRoLCA2MDApO1xuXHRcdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgfHwgMDtcblx0XHRcdCR3aWtpcGx1c0ludGVyYm94LmNzcygnbWFyZ2luLWxlZnQnLCBjbGllbnRXaWR0aCAvIDIgLSBkaWFsb2dXaWR0aCAvIDIpO1xuXHRcdFx0JHdpa2lwbHVzSW50ZXJib3guY3NzKCd0b3AnLCBzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQgKiAwLjIpO1xuXHRcdFx0JHdpa2lwbHVzSW50ZXJib3guY3NzKCdtYXgtd2lkdGgnLCBgY2FsYygke3dpbmRvd1dpZHRofXB4IC0gMmVtKWApO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQge3Jlc2l6ZVdpa2lwbHVzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZ0JBQUFDLE1BQUE7RUFBQSx1Q0FBQTtFQUFBO0FBQUEsQ0FBQTs7QUNBQSxJQUNNQztBQUROLElBdUNPQztBQXZDUCxJQUFBQyxpQkFBQUgsTUFBQTtFQUFBLDRDQUFBO0FBQUE7QUFDTUMsZ0JBQU4sTUFBZ0I7TUFDZkcsVUFBVTtNQUNWLElBQUlDLFlBQVk7QUFDZixlQUFPQyxPQUFPQyxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7TUFDMUM7TUFDQSxJQUFJQyxrQkFBa0I7QUFDckIsZUFBT0osT0FBT0MsR0FBR0MsT0FBT0MsSUFBSSxZQUFZLEVBQUVFLFFBQVEsTUFBTSxHQUFHO01BQzVEO01BQ0EsSUFBSUMsWUFBWTtBQUNmLGVBQU9OLE9BQU9DLEdB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QyxLQUFLO0VBQ3JCLENBQUM7QUFBQSxXQWxCa0NVLFNBQUFDLEtBQUE7QUFBQSxXQUFBTixVQUFBaFAsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxTQUFBb1A7QUFBQSxHQUFBLENBa0JsQzsiLAogICJuYW1lcyI6IFsiaW5pdF93aWtpcGx1cyIsICJfX2VzbSIsICJDb25zdGFudHMiLCAiY29uc3RhbnRzX2RlZmF1bHQiLCAiaW5pdF9jb25zdGFudHMiLCAidmVyc2lvbiIsICJpc0FydGljbGUiLCAid2luZG93IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY3VycmVudFBhZ2VOYW1lIiwgInJlcGxhY2UiLCAiYXJ0aWNsZUlkIiwgInJldmlzaW9uSWQiLCAibGF0ZXN0UmV2aXNpb25JZCIsICJhcnRpY2xlUGF0aCIsICJzY3JpcHRQYXRoIiwgImFjdGlvbiIsICJza2luIiwgInVzZXJHcm91cHMiLCAid2lraUlkIiwgInVzZXJBZ2VudCIsICJjb25jYXQiLCAiSTE4biIsICJpMThuX2RlZmF1bHQiLCAiaW5pdF9pMThuIiwgImxhbmd1YWdlIiwgImkxOG5EYXRhIiwgInNlc3Npb25VcGRhdGVMb2ciLCAiY29uc3RydWN0b3IiLCAiSlNPTiIsICJwYXJzZSIsICJsb2NhbFN0b3JhZ2UiLCAibmF2aWdhdG9yIiwgInRvTG93ZXJDYXNlIiwgImkxOG5DYWNoZSIsICJnZXRJdGVtIiwgIl9pIiwgIl9PYmplY3Qka2V5cyIsICJPYmplY3QiLCAia2V5cyIsICJsZW5ndGgiLCAia2V5IiwgInNldEl0ZW0iLCAidHJhbnNsYXRlIiwgInBsYWNlaG9sZGVycyIsICJyZXN1bHQiLCAiaTE4bkRhdGFMYW5nIiwgImxvYWRMYW5ndWFnZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZW50cmllcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJpbmRleCIsICJwbGFjZWhvbGRlciIsICJ2YWx1ZSIsICJlcnIiLCAiZSIsICJmIiwgIl90aGlzIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImluY2x1ZGVzIiwgInJlc3BvbnNlIiwgImZldGNoIiwgImpzb24iLCAibm93VmVyc2lvbiIsICJwdXNoIiwgIl9fdmVyc2lvbiIsICJjb25zb2xlIiwgImluZm8iLCAic3RyaW5naWZ5IiwgIldpa2lwbHVzRXJyb3IiLCAiTG9nIiwgImxvZ19kZWZhdWx0IiwgImluaXRfbG9nIiwgIkVycm9yIiwgImNvZGUiLCAibWVzc2FnZSIsICJkZWJ1ZyIsICJlcnJvciIsICJlcnJvckNvZGUiLCAicGF5bG9hZHMiLCAidGVtcGxhdGUiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiaSIsICJ2IiwgIlJlZ0V4cCIsICJOb3RpZmljYXRpb24iLCAibm90aWZpY2F0aW9uX2RlZmF1bHQiLCAiaW5pdF9ub3RpZmljYXRpb24iLCAiaW5pdCIsICIkIiwgImFwcGVuZCIsICJkaXNwbGF5IiwgInRleHQiLCAidHlwZSIsICJjYWxsYmFjayIsICJhZGRDbGFzcyIsICJmaW5kIiwgImxhc3QiLCAiZmFkZUluIiwgImJpbmQiLCAiY2xlYXIiLCAic2VsZiIsICJvbiIsICJzbGlkZUxlZnQiLCAic3VjY2VzcyIsICJ3YXJuaW5nIiwgImNoaWxkcmVuIiwgImZpcnN0IiwgImZhZGVPdXQiLCAicmVtb3ZlIiwgInNldFRpbWVvdXQiLCAiZW1wdHkiLCAiZWFjaCIsICJlbGUiLCAiZGVsYXkiLCAic3BlZWQiLCAiY3NzIiwgImFuaW1hdGUiLCAibGVmdCIsICJSZXF1ZXN0cyIsICJyZXF1ZXN0c19kZWZhdWx0IiwgImluaXRfcmVxdWVzdHMiLCAiYmFzZSIsICJsb2NhdGlvbiIsICJwcm90b2NvbCIsICJob3N0IiwgInF1ZXJ5IiwgInVybCIsICJVUkwiLCAiX2kyIiwgIl9PYmplY3Qka2V5czIiLCAiQXJyYXkiLCAiaXNBcnJheSIsICJzZWFyY2hQYXJhbXMiLCAiam9pbiIsICJjcmVkZW50aWFscyIsICJoZWFkZXJzIiwgInBvc3QiLCAicGF5bG9hZCIsICJmb3JtIiwgIkZvcm1EYXRhIiwgIl9pMyIsICJfT2JqZWN0JGVudHJpZXMiLCAibWV0aG9kIiwgImJvZHkiLCAiV2lraSIsICJ3aWtpX2RlZmF1bHQiLCAiaW5pdF93aWtpIiwgInBhZ2VJbmZvQ2FjaGUiLCAiZ2V0RWRpdFRva2VuIiwgIm1ldGEiLCAiZm9ybWF0IiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAiZ2V0UGFnZUluZm8iLCAiX3giLCAiX3RoaXMyIiwgInRpdGxlIiwgInBhcmFtcyIsICJwcm9wIiwgInJ2cHJvcCIsICJyZXZpZHMiLCAidGltZXN0YW1wIiwgInJldmlkIiwgImNvbnRlbnRtb2RlbCIsICJ0aXRsZXMiLCAicGFnZXMiLCAicGFnZUtleSIsICJwYWdlSW5mbyIsICJyZXZpc2lvbnMiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldFdpa2lUZXh0IiwgIl94MiIsICJzZWN0aW9uIiwgInJ2c2VjdGlvbiIsICJwYXJzZVdpa2lUZXh0IiwgIl94MyIsICJ3aWtpdGV4dCIsICJfY29uZmlnIiwgInBzdCIsICJlZGl0IiwgIl94NCIsICJjb250ZW50IiwgImVkaXRUb2tlbiIsICJhZGRpdGlvbmFsQ29uZmlnIiwgInRva2VuIiwgImJhc2V0aW1lc3RhbXAiLCAiZ2V0TGF0ZXN0UmV2aXNpb25JZEZvclBhZ2UiLCAiX3RoaXMzIiwgIlBhZ2UiLCAicGFnZV9kZWZhdWx0IiwgImluaXRfcGFnZSIsICJpbml0ZWQiLCAiaXNOZXdQYWdlIiwgInNlY3Rpb25DYWNoZSIsICJfdGhpczQiLCAicHJvbWlzZUFyciIsICJnZXRUaW1lc3RhbXAiLCAiZ2V0Q29udGVudE1vZGVsIiwgIlByb21pc2UiLCAiYWxsIiwgIl90aGlzNSIsICJsb2FkZXIiLCAidXNpbmciLCAidXNlciIsICJfdGhpczYiLCAiX3RoaXM3IiwgIl90aGlzOCIsICJzZWMiLCAid2lraVRleHQiLCAiX3RoaXM5IiwgIl90aGlzMCIsICJjcmVhdGVvbmx5IiwgIlNldHRpbmdzIiwgInNldHRpbmdzX2RlZmF1bHQiLCAiaW5pdF9zZXR0aW5ncyIsICJnZXRTZXR0aW5nIiwgIm9iamVjdCIsICJ3IiwgInNldHRpbmdzIiwgImN1c3RvbVNldHRpbmdGdW5jdGlvbiIsICJGdW5jdGlvbiIsICJfaTQiLCAiX09iamVjdCRrZXlzMyIsICJrZXkyIiwgInBhcnNlUXVlcnkiLCAicmVnIiwgIm1hdGNoIiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImluaXRfaGVscGVycyIsICJzbGVlcCIsICJzbGVlcF9kZWZhdWx0IiwgImluaXRfc2xlZXAiLCAidGltZSIsICJyZXNvbHZlIiwgIlVJIiwgInVpX2RlZmF1bHQiLCAiaW5pdF91aSIsICJxdWlja0VkaXRQYW5lbFZpc2libGUiLCAic2Nyb2xsVG9wIiwgImNyZWF0ZURpYWxvZ0JveCIsICJ3aWR0aCIsICJjbGllbnRXaWR0aCIsICJpbm5lcldpZHRoIiwgImNsaWVudEhlaWdodCIsICJpbm5lckhlaWdodCIsICJkaWFsb2dXaWR0aCIsICJNYXRoIiwgIm1pbiIsICJkaWFsb2dCb3giLCAidG9wIiwgImRvY3VtZW50IiwgImh0bWwiLCAicGFyZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAib25iZWZvcmV1bmxvYWQiLCAiYmluZERyYWdnaW5nIiwgImVsZW1lbnQiLCAiX2VsZW1lbnQkcGFyZW50JG9mZnNlIiwgIl9lbGVtZW50JHBhcmVudCRvZmZzZTIiLCAiYmFzZVgiLCAiY2xpZW50WCIsICJiYXNlWSIsICJjbGllbnRZIiwgImJhc2VPZmZzZXRYIiwgIm9mZnNldCIsICJiYXNlT2Zmc2V0WSIsICJlMiIsICJvZmYiLCAiYWRkRnVuY3Rpb25CdXR0b24iLCAiaWQiLCAiYnV0dG9uIiwgImF0dHIiLCAiaW5zZXJ0U2ltcGxlUmVkaXJlY3RCdXR0b24iLCAib25DbGljayIsICJpbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uIiwgImluc2VydFRvcFF1aWNrRWRpdEVudHJ5IiwgInRvcEJ0biIsICJ0b3BCdG5MaW5rIiwgInNlY3Rpb25OdW1iZXIiLCAidGFyZ2V0UGFnZU5hbWUiLCAiYWZ0ZXIiLCAiaW5zZXJ0U2VjdGlvblF1aWNrRWRpdEVudHJpZXMiLCAic2VjdGlvbkJ0biIsICJlZGl0VVJMIiwgInNlY3Rpb25MYWJlbCIsICJzZWN0aW9uVGFyZ2V0TGFiZWwiLCAic2VjdGlvblRhcmdldE5hbWUiLCAiY2xvbmVOb2RlIiwgInByZXYiLCAiY2xvbmUiLCAic2VjdGlvbk5hbWUiLCAidHJpbSIsICJfc2VjdGlvbkJ0biIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiYmVmb3JlIiwgImluc2VydExpbmtFZGl0RW50cmllcyIsICJocmVmIiwgImNsYXNzIiwgIl9OdW1iZXIkcGFyc2VJbnQiLCAic2hvd1F1aWNrRWRpdFBhbmVsIiwgInN1bW1hcnkiLCAib25CYWNrIiwgIm9uUGFyc2UiLCAib25FZGl0IiwgImVzY0V4aXQiLCAiaGlkZVF1aWNrRWRpdFBhbmVsIiwgImJhY2tCdG4iLCAianVtcEJ0biIsICJpbnB1dEJveCIsICJwcmV2aWV3Qm94IiwgInN1bW1hcnlCb3giLCAiZWRpdFN1Ym1pdEJ0biIsICJwcmV2aWV3U3VibWl0QnRuIiwgImlzTWlub3JFZGl0IiwgIm1hcmdpbiIsICJlZGl0Qm9keSIsICJ2YWwiLCAicHJlbG9hZEJhbm5lciIsICJ0aW1lciIsICJEYXRlIiwgIm5vdyIsICJlZGl0QmFubmVyIiwgImlzIiwgInVzZVRpbWUiLCAidG9TdHJpbmciLCAicmVsb2FkIiwgImxvZyIsICJjdHJsS2V5IiwgIndoaWNoIiwgInNoaWZ0S2V5IiwgInRyaWdnZXIiLCAicHJldmVudERlZmF1bHQiLCAic3RvcFByb3BhZ2F0aW9uIiwgInNob3dTaW1wbGVSZWRpcmVjdFBhbmVsIiwgIm9uU3VjY2VzcyIsICJfdGhpczEiLCAiaW5wdXQiLCAic3VtbWFyeUlucHV0VGl0bGUiLCAic3VtbWFyeUlucHV0IiwgImFwcGx5QnRuIiwgImNhbmNlbEJ0biIsICJjb250aW51ZUJ0biIsICJkaWFsb2ciLCAiZm9yY2VPdmVyd3JpdGUiLCAiaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwiLCAiZXJyb3IyIiwgInNob3dTZXR0aW5nc1BhbmVsIiwgIm9uU3VibWl0IiwgIl90aGlzMTAiLCAic2F2ZWRCYW5uZXIiLCAiaGlkZVNldHRpbmdzUGFuZWwiLCAiYmluZFByZWxvYWRFdmVudHMiLCAib25QcmVsb2FkIiwgIm1vZHVsZXNfZXhwb3J0cyIsICJpbml0X21vZHVsZXMiLCAiX2NvbnN0YW50c19kZWZhdWx0JHVzIiwgIl9jb25zdGFudHNfZGVmYXVsdCR1czIiLCAiUGFnZXMiLCAiaXNDdXJyZW50UGFnZUVtcHR5IiwgImdldFBhZ2UiLCAiX3JlZjAiLCAicmV2aXNpb25JZDIiLCAibmV3UGFnZSIsICJfeDUiLCAiX1dpa2lwbHVzUGFnZXMiLCAiY3VycmVudFBhZ2UiLCAiaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCIsICJfcmVmMSIsICJpc090aGVyUGFnZSIsICJwYWdlIiwgImN1c3RvbVN1bW1hcnkiLCAic2VjdGlvbkNvbnRlbnQiLCAiaXNFZGl0SGlzdG9yeVJldmlzaW9uIiwgImVzY1RvRXhpdCIsICJjdXN0b21FZGl0VGFncyIsICJkZWZhdWx0RWRpdFRhZ3MiLCAiZWRpdFRhZ3MiLCAiY2xlYXJUaW1lb3V0IiwgInNob3VsZFNob3dDcmVhdGVQYWdlVGlwIiwgIl9yZWYxMCIsICJzdW1tYXJ5MiIsICJlZGl0UGF5bG9hZCIsICJ0YWdzIiwgIm1pbm9yIiwgIm5vdG1pbm9yIiwgIl94NyIsICJfeDYiLCAiaGFuZGxlU2ltcGxlUmVkaXJlY3RCdXR0b25DbGlja2VkIiwgIl9yZWYxMSIsICJjdXJyZW50UGFnZU5hbWUyIiwgImNvbnRlbnQyIiwgInV0aWwiLCAid2lraVVybGVuY29kZSIsICJfeDgiLCAiaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkIiwgImhhbmRsZVByZWxvYWQiLCAiX3JlZjEyIiwgIl94OSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgInJlc2l6ZVdpa2lwbHVzIiwgIiRib2R5IiwgIndpbmRvd1dpZHRoIiwgIiR3aWtpcGx1c0ludGVyYm94IiwgImdldEJvZHkiLCAidGhlbiIsICJfV2lraXBsdXMiLCAid2dBY3Rpb24iLCAid2dJc0FydGljbGUiLCAiaXNWZUVuYWJsZSIsICJvcHRpb25zIiwgIldpa2lwbHVzIiwgIl94MCJdCn0K
