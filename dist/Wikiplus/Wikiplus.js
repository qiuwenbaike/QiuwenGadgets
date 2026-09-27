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
       * @param {string} editToken (optional) 如果提供了editToken，将不会再获取
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzL21vZHVsZXMvd2lraXBsdXMubGVzcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9jb25zdGFudHMudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvaTE4bi50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9sb2cudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS9ub3RpZmljYXRpb24udHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvcmVxdWVzdHMudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvc2VydmljZXMvd2lraS50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL3BhZ2UudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvc2V0dGluZ3MudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvaGVscGVycy50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9zbGVlcC50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL3VpLnRzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2luZGV4LnRzIiwgInNyYy9XaWtpcGx1cy9XaWtpcGx1cy50cyIsICJzcmMvV2lraXBsdXMvcmVzaXplLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIuY2xlYXIge1xuICBjbGVhcjogYm90aDtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCB7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2tpbi12ZWN0b3IgI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCxcbiNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nOiByZXZlcnQ7XG59XG4jV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0IHtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogNXB4IDA7XG59XG4uV2lraXBsdXMtQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAzcHggNXB4O1xuICBwYWRkaW5nOiAzcHggMWVtO1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4ICNhYWE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLldpa2lwbHVzLUJ0biBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzAwMDtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB7XG4gIC0tZm9udHMtc2FuczogJ0FyaWFsJywgJ1RhaG9tYScsICdNaWNyb3NvZnQgWWFIZWknLCAnSGlyYWdpbm8gU2FucyBHQicsICdNaWNyb3NvZnQgSmhlbmdIZWknLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICB6LWluZGV4OiAyMDA7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjEsIDE1NCwgMjIwLCAwLjQxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjlmNztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgdG9wOiAtOHB4O1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZjZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBjdXJzb3I6IG1vdmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtSW5wdXQge1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiA2MCU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogYXV0byAzcHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1CdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xufVxuLldpa2lwbHVzLUludGVyQm94LUNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDNweCA3cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggbGFiZWwge1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiB7XG4gIHRhYmxlLWxheW91dDogYXV0bztcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWFkZGVkbGluZSxcbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWRlbGV0ZWRsaW5lLFxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtbGluZW5vIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLW1hcmtlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uV2lraXBsdXMtQmFubmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxOTMsIDIyMiwgMjE0LCAwLjUxKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtc2Fucywgc2Fucy1zZXJpZik7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZSB7XG4gIC0tZm9udHMtc2FuczogJ0FyaWFsJywgJ1RhaG9tYScsICdNaWNyb3NvZnQgWWFIZWknLCAnSGlyYWdpbm8gU2FucyBHQicsICdNaWNyb3NvZnQgSmhlbmdIZWknLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogM3B4IDVweDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDNweCAzcHggI2FhYTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Ugc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAzcHggYXV0byAzcHggM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnRzLXNhbnMsIHNhbnMtc2VyaWYpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utc3VjY2VzcyB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzhkZGE5MztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhhMDA7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS13YXJuaW5nIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZkZjAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YmQwMDtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXdhcm5pbmcgc3BhbiB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UtZXJyb3Ige1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlNzE3MTc7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjAwZTA2O1xufVxuI01vZU5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzMHB4O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA3MTM7XG4gIG1pbi13aWR0aDogMjAlO1xufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmNsYXNzIENvbnN0YW50cyB7XG5cdHZlcnNpb24gPSAnNC4xLjAnO1xuXHRnZXQgaXNBcnRpY2xlKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dJc0FydGljbGUnKTtcblx0fVxuXHRnZXQgY3VycmVudFBhZ2VOYW1lKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLnJlcGxhY2UoLyAvZywgJ18nKTtcblx0fVxuXHRnZXQgYXJ0aWNsZUlkKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dBcnRpY2xlSWQnKTtcblx0fVxuXHRnZXQgcmV2aXNpb25JZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpO1xuXHR9XG5cdGdldCBsYXRlc3RSZXZpc2lvbklkKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dDdXJSZXZpc2lvbklkJyk7XG5cdH1cblx0Z2V0IGFydGljbGVQYXRoKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dBcnRpY2xlUGF0aCcpO1xuXHR9XG5cdGdldCBzY3JpcHRQYXRoKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dTY3JpcHRQYXRoJyk7XG5cdH1cblx0Z2V0IGFjdGlvbigpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJyk7XG5cdH1cblx0Z2V0IHNraW4oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCdza2luJyk7XG5cdH1cblx0Z2V0IHVzZXJHcm91cHMoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKTtcblx0fVxuXHRnZXQgd2lraUlkKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dXaWtpSUQnKTtcblx0fVxuXHR1c2VyQWdlbnQgPSBgUWl1d2VuLzEuMSBXaWtpcGx1cy8ke3RoaXMudmVyc2lvbn0gKCR7dGhpcy53aWtpSWR9KWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDb25zdGFudHMoKTtcbiIsICJjbGFzcyBJMThuIHtcblx0bGFuZ3VhZ2U6IHN0cmluZztcblx0aTE4bkRhdGE6IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge307XG5cdHNlc3Npb25VcGRhdGVMb2c6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBsYW5ndWFnZTtcblx0XHR0cnkge1xuXHRcdFx0bGFuZ3VhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsnV2lraXBsdXNfU2V0dGluZ3MnXSlbJ2xhbmd1YWdlJ10gfHwgbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG93ZXJDYXNlKCk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRsYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZVxuXHRcdFx0XHQucmVwbGFjZSgvaGFuW3N0XS0/L2ksICcnKSAvLyBmb3IgbGFuZ3VhZ2VzIGxpa2UgemgtSGFucy1DTlxuXHRcdFx0XHQudG9Mb3dlckNhc2UoKTtcblx0XHR9XG5cdFx0dGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xuXHRcdC8vIE1lcmdlIHdpdGggbG9jYWxTdG9yYWdlIGkxOG4gY2FjaGVcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgaTE4bkNhY2hlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJykgYXMgc3RyaW5nKTtcblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGkxOG5DYWNoZSkpIHtcblx0XHRcdFx0dGhpcy5pMThuRGF0YVtrZXldID0gaTE4bkNhY2hlW2tleV07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHQvLyBGYWlsIHRvIHBhcnNlIGkxOG4gY2FjaGUsIHJlc2V0XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJywgJ3t9Jyk7XG5cdFx0fVxuXHR9XG5cdHRyYW5zbGF0ZShrZXk6IHN0cmluZywgcGxhY2Vob2xkZXJzPzogc3RyaW5nW10pIHtcblx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cdFx0cGxhY2Vob2xkZXJzIHx8PSBbXTtcblx0XHRpZiAodGhpcy5sYW5ndWFnZSBpbiB0aGlzLmkxOG5EYXRhKSB7XG5cdFx0XHRjb25zdCBpMThuRGF0YUxhbmcgPSB0aGlzLmkxOG5EYXRhW3RoaXMubGFuZ3VhZ2VdO1xuXHRcdFx0aWYgKGkxOG5EYXRhTGFuZyAmJiBrZXkgaW4gaTE4bkRhdGFMYW5nKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGkxOG5EYXRhTGFuZ1trZXldIGFzIHN0cmluZztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHRyeSB1cGRhdGUgbGFuZ3VhZ2UgdmVyaXNvblxuXHRcdFx0XHR0aGlzLmxvYWRMYW5ndWFnZSh0aGlzLmxhbmd1YWdlKTtcblx0XHRcdFx0aWYgKHRoaXMuaTE4bkRhdGFbJ2VuLXVzJ10gJiYga2V5IGluIHRoaXMuaTE4bkRhdGFbJ2VuLXVzJ10pIHtcblx0XHRcdFx0XHQvLyBGYWxsYmFjayB0byBFbmdsaXNoXG5cdFx0XHRcdFx0cmVzdWx0ID0gdGhpcy5pMThuRGF0YVsnZW4tdXMnXVtrZXldIGFzIHN0cmluZztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHQgPSBrZXk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5sb2FkTGFuZ3VhZ2UodGhpcy5sYW5ndWFnZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlaG9sZGVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKGNvbnN0IFtpbmRleCwgcGxhY2Vob2xkZXJdIG9mIHBsYWNlaG9sZGVycy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoYCQke2luZGV4ICsgMX1gLCBwbGFjZWhvbGRlcik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0YXN5bmMgbG9hZExhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpIHtcblx0XHRpZiAodGhpcy5zZXNzaW9uVXBkYXRlTG9nLmluY2x1ZGVzKGxhbmd1YWdlKSkge1xuXHRcdFx0Ly8gSGFzIGJlZW4gdXBkYXRlZCB0aGlzIHNlc3Npb24uXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IChcblx0XHRcdFx0YXdhaXQgZmV0Y2goXG5cdFx0XHRcdFx0YGh0dHBzOi8vZ2l0Y2RuLnFpdXdlbi5uZXQuY24vSW50ZXJmYWNlQWRtaW4vV2lraXBsdXMvcmF3L2JyYW5jaC9kZXYvbGFuZ3VhZ2VzLyR7bGFuZ3VhZ2V9Lmpzb25gXG5cdFx0XHRcdClcblx0XHRcdCkuanNvbigpO1xuXHRcdFx0Y29uc3Qgbm93VmVyc2lvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdXaWtpcGx1c19MYW5ndWFnZVZlcnNpb24nKSB8fCAnMDAwJztcblx0XHRcdHRoaXMuc2Vzc2lvblVwZGF0ZUxvZy5wdXNoKGxhbmd1YWdlKTtcblx0XHRcdGlmIChyZXNwb25zZS5fX3ZlcnNpb24gIT09IG5vd1ZlcnNpb24gfHwgIShsYW5ndWFnZSBpbiB0aGlzLmkxOG5EYXRhKSkge1xuXHRcdFx0XHQvLyBMYW5ndWFnZSBnZXQgdXBkYXRlZFxuXHRcdFx0XHRjb25zb2xlLmluZm8oYFVwZGF0ZSAke2xhbmd1YWdlfSBzdXBwb3J0IHRvIHZlcnNpb24gJHtyZXNwb25zZS5fX3ZlcnNpb259YCk7XG5cdFx0XHRcdHRoaXMuaTE4bkRhdGFbbGFuZ3VhZ2VdID0gcmVzcG9uc2U7XG5cdFx0XHRcdC8vIFVwZGF0ZSBsb2NhbFN0b3JhZ2UgY2FjaGVcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1dpa2lwbHVzX2kxOG5DYWNoZScsIEpTT04uc3RyaW5naWZ5KHRoaXMuaTE4bkRhdGEpKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8vIFVuc3VwcG9ydGVkIGxhbmd1YWdlXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBJMThuKCk7XG4iLCAiaW1wb3J0IGkxOG4gZnJvbSAnLi9pMThuJztcblxuY2xhc3MgV2lraXBsdXNFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29kZTogc3RyaW5nIHwgbnVsbDtcblx0Y29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBjb2RlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLmNvZGUgPSBjb2RlO1xuXHR9XG59XG5cbmNvbnN0IExvZyA9IHtcblx0ZGVidWcobWVzc2FnZSA9ICcnKSB7XG5cdFx0Y29uc29sZS5kZWJ1ZyhgW1dpa2lwbHVzLURFQlVHXSAke21lc3NhZ2V9YCk7XG5cdH0sXG5cdGluZm8obWVzc2FnZSA9ICcnKSB7XG5cdFx0Y29uc29sZS5pbmZvKGBbV2lraXBsdXMtSU5GT10gJHttZXNzYWdlfWApO1xuXHR9LFxuXHRlcnJvcihlcnJvckNvZGU6IHN0cmluZywgcGF5bG9hZHM6IHN0cmluZ1tdID0gW10pIHtcblx0XHRsZXQgdGVtcGxhdGUgPSBpMThuLnRyYW5zbGF0ZShlcnJvckNvZGUpO1xuXHRcdGlmIChwYXlsb2Fkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHQvLyBGaWxsXG5cdFx0XHRmb3IgKGNvbnN0IFtpLCB2XSBvZiBwYXlsb2Fkcy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYFxcXFwke2kgKyAxfWAsICdpZycpLCB2KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc29sZS5lcnJvcihgW1dpa2lwbHVzLUVSUk9SXSAke3RlbXBsYXRlfWApO1xuXHRcdHRocm93IG5ldyBXaWtpcGx1c0Vycm9yKGAke3RlbXBsYXRlfWAsIGVycm9yQ29kZSk7XG5cdH0sXG59O1xuXG5leHBvcnQge1dpa2lwbHVzRXJyb3J9O1xuXG5leHBvcnQgZGVmYXVsdCBMb2c7XG4iLCAiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuY2xhc3MgTm90aWZpY2F0aW9uIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblx0aW5pdCgpIHtcblx0XHQkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGlkPVwiTW9lTm90aWZpY2F0aW9uXCI+PC9kaXY+Jyk7XG5cdH1cblx0ZGlzcGxheSh0ZXh0ID0gJ+WWtX4nLCB0eXBlID0gJ3N1Y2Nlc3MnLCBjYWxsYmFjazogKGVsZT86IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHZvaWQgPSAoKSA9PiB7fSk6IHZvaWQge1xuXHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKS5hcHBlbmQoXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnTW9lTm90aWZpY2F0aW9uLW5vdGljZScpXG5cdFx0XHRcdC5hZGRDbGFzcyhgTW9lTm90aWZpY2F0aW9uLW5vdGljZS0ke3R5cGV9YClcblx0XHRcdFx0LmFwcGVuZChgPHNwYW4+JHt0ZXh0fTwvc3Bhbj5gKVxuXHRcdCk7XG5cdFx0JCgnI01vZU5vdGlmaWNhdGlvbicpLmZpbmQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGFzdCgpLmZhZGVJbigzMDApO1xuXHRcdHRoaXMuYmluZCgpO1xuXHRcdHRoaXMuY2xlYXIoKTtcblx0XHRpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjYWxsYmFjaygkKCcjTW9lTm90aWZpY2F0aW9uJykuZmluZCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sYXN0KCkpO1xuXHRcdH1cblx0fVxuXHRiaW5kKCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGYuc2xpZGVMZWZ0KCQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG5cdHN1Y2Nlc3ModGV4dDogc3RyaW5nLCBjYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcblx0XHR0aGlzLmRpc3BsYXkodGV4dCwgJ3N1Y2Nlc3MnLCBjYWxsYmFjayk7XG5cdH1cblx0d2FybmluZyh0ZXh0OiBzdHJpbmcsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnd2FybmluZycsIGNhbGxiYWNrKTtcblx0fVxuXHRlcnJvcih0ZXh0OiBzdHJpbmcsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnZXJyb3InLCBjYWxsYmFjayk7XG5cdH1cblx0Y2xlYXIoKSB7XG5cdFx0aWYgKCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGVuZ3RoID49IDEwKSB7XG5cdFx0XHQkKCcjTW9lTm90aWZpY2F0aW9uJylcblx0XHRcdFx0LmNoaWxkcmVuKClcblx0XHRcdFx0LmZpcnN0KClcblx0XHRcdFx0LmZhZGVPdXQoMTUwLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRzZXRUaW1lb3V0KHRoaXMuY2xlYXIsIDMwMCk7XG5cdFx0fVxuXHR9XG5cdGVtcHR5KGY/OiAoZWxlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSA9PiB2b2lkKSB7XG5cdFx0JCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRpZiAoZiAmJiB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25zdCBlbGUgPSAkKHRoaXMpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRmKGVsZSk7XG5cdFx0XHRcdH0sIDIwMCAqIGkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5kZWxheShpICogMjAwKVxuXHRcdFx0XHRcdC5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRzbGlkZUxlZnQoZWxlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+LCBzcGVlZCA9IDE1MCkge1xuXHRcdGVsZS5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG5cdFx0ZWxlLmFuaW1hdGUoXG5cdFx0XHR7XG5cdFx0XHRcdGxlZnQ6ICctMjAwJScsXG5cdFx0XHR9LFxuXHRcdFx0c3BlZWQsXG5cdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOb3RpZmljYXRpb24oKTtcbiIsICJpbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmNvbnN0IFJlcXVlc3RzID0ge1xuXHRiYXNlOiBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9hcGkucGhwYCxcblx0YXN5bmMgZ2V0KHF1ZXJ5OiBBcGlRdWVyeVBhcmFtcyB8IEFwaVBhcnNlUGFyYW1zIHwgQXBpRWRpdFBhZ2VQYXJhbXMpIHtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKFJlcXVlc3RzLmJhc2UpO1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHF1ZXJ5KSkge1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcblx0XHRcdFx0dXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCBxdWVyeVtrZXldLmpvaW4oJ3wnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHF1ZXJ5W2tleV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IENvbnN0YW50cy51c2VyQWdlbnQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdH0sXG5cdGFzeW5jIHBvc3QocGF5bG9hZDogQXBpUGFyc2VQYXJhbXMgfCBBcGlFZGl0UGFnZVBhcmFtcykge1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwoUmVxdWVzdHMuYmFzZSk7XG5cdFx0Y29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBheWxvYWQpKSB7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdFx0Zm9ybS5hcHBlbmQoa2V5LCB2YWx1ZS5qb2luKCd8JykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9ybS5hcHBlbmQoa2V5LCB2YWx1ZSBhcyBzdHJpbmcpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRib2R5OiBmb3JtLFxuXHRcdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IENvbnN0YW50cy51c2VyQWdlbnQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0cztcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgTG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5pbXBvcnQgaTE4biBmcm9tICcuLi91dGlscy9pMThuJztcbmltcG9ydCByZXF1ZXN0cyBmcm9tICcuLi91dGlscy9yZXF1ZXN0cyc7XG5cbmNsYXNzIFdpa2kge1xuXHRwYWdlSW5mb0NhY2hlOiBSZWNvcmQ8c3RyaW5nLCBQYWdlSW5mb0NhY2hlSXRlbT4gPSB7fTtcblx0LyoqXG5cdCAqIOiOt+W+lyBFZGl0IFRva2VuXG5cdCAqIEdldCBFZGl0IFRva2VuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ3wgdm9pZD59XG5cdCAqL1xuXHRhc3luYyBnZXRFZGl0VG9rZW4oKTogUHJvbWlzZTxzdHJpbmcgfCB2b2lkPiB7XG5cdFx0Ly8g5bCd6K+V5LuOIEFQSSDojrflvpcgRWRpdFRva2VuXG5cdFx0Ly8gVHJ5IHRvIGdldCBFZGl0VG9rZW4gZnJvbSBBUElcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldCh7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdH0pO1xuXHRcdGlmIChcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5ICYmXG5cdFx0XHRyZXNwb25zZS5xdWVyeS50b2tlbnMgJiZcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW4gJiZcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW4gIT09ICcrXFxcXCdcblx0XHQpIHtcblx0XHRcdHJldHVybiByZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdH1cblx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHR9XG5cdC8qKlxuXHQgKiDojrflvpfpobXpnaLkuIrkuIDniYjmnKzml7bpl7TmiLNcblx0ICogR2V0IHRoZSB0aW1lc3RhbXAgb2YgdGhlIGxhc3QgcmV2aXNpb24gb2YgcGFnZSBzcGVjaWZpZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0udGl0bGUg6aG16Z2i5ZCNIC8gUGFnZW5hbWVcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtLnJldmlzaW9uSWQg5L+u6K6i54mI5pys5Y+3IC8gUmV2aXNpb24gSURcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtLmNvbnRlbnRtb2RlbCDlhoXlrrnmqKHlnosgLyBDb250ZW50IE1vZGVsXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHt0aW1lc3RhbXA/OiBzdHJpbmc7IHJldmlzaW9uSWQ/OiBudW1iZXI7IGNvbnRlbnRtb2RlbDogc3RyaW5nO30+fVxuXHQgKi9cblx0YXN5bmMgZ2V0UGFnZUluZm8oe3RpdGxlLCByZXZpc2lvbklkfToge3RpdGxlOiBzdHJpbmc7IHJldmlzaW9uSWQ/OiBudW1iZXJ9KTogUHJvbWlzZTxQYWdlSW5mbyB8IHZvaWQ+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyAmIEFwaVF1ZXJ5SW5mb1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zfGluZm8nLFxuXHRcdFx0XHRydnByb3A6ICd0aW1lc3RhbXB8aWRzJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHJldmlzaW9uSWQpIHtcblx0XHRcdFx0cGFyYW1zLnJldmlkcyA9IHJldmlzaW9uSWQ7XG5cdFx0XHR9IGVsc2UgaWYgKHRpdGxlKSB7XG5cdFx0XHRcdGlmICh0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdKSB7XG5cdFx0XHRcdFx0Ly8gSGl0IGNhY2hlXG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogdGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS50aW1lc3RhbXAgYXMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0cmV2aXNpb25JZDogdGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS5yZXZpZCBhcyBudW1iZXIsXG5cdFx0XHRcdFx0XHRjb250ZW50bW9kZWw6IHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0uY29udGVudG1vZGVsLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFyYW1zLnRpdGxlcyA9IHRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5nZXQocGFyYW1zKTtcblx0XHRcdGlmIChyZXNwb25zZS5xdWVyeSAmJiByZXNwb25zZS5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRjb25zdCBwYWdlS2V5ID0gT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdO1xuXHRcdFx0XHRjb25zdCBjb250ZW50bW9kZWwgPSByZXNwb25zZS5xdWVyeS5wYWdlc1twYWdlS2V5IGFzIHN0cmluZ10uY29udGVudG1vZGVsO1xuXHRcdFx0XHRpZiAocGFnZUtleSA9PT0gJy0xJykge1xuXHRcdFx0XHRcdC8vIOS4jeWtmOWcqOi/meS4gOmhtemdolxuXHRcdFx0XHRcdC8vIFBhZ2Ugbm90IGZvdW5kLlxuXHRcdFx0XHRcdHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0gPSB7Y29udGVudG1vZGVsfTtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0Y29udGVudG1vZGVsLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFnZUluZm8gPSByZXNwb25zZS5xdWVyeS5wYWdlc1twYWdlS2V5IGFzIHN0cmluZ10ucmV2aXNpb25zWzBdO1xuXHRcdFx0XHRpZiAodGl0bGUpIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdID0gey4uLnBhZ2VJbmZvLCBjb250ZW50bW9kZWx9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dGltZXN0YW1wOiBwYWdlSW5mby50aW1lc3RhbXAsXG5cdFx0XHRcdFx0cmV2aXNpb25JZDogcGFnZUluZm8ucmV2aWQsXG5cdFx0XHRcdFx0Y29udGVudG1vZGVsLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF9lZGl0dG9rZW4nKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIOiOt+W+l+mhtemdoueahCBXaWtpdGV4dFxuXHQgKiBHZXQgd2lraXRleHQgb2YgdGhlIHBhZ2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNvbmZpZy5yZXZpc2lvbklkIOeJiOacrOWPt1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnNlY3Rpb24g5q616JC95Y+3XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gd2lraXRleHTlhoXlrrlcblx0ICovXG5cdGFzeW5jIGdldFdpa2lUZXh0KHtzZWN0aW9uLCByZXZpc2lvbklkfToge3NlY3Rpb246IHN0cmluZyB8IG51bWJlcjsgcmV2aXNpb25JZDogbnVtYmVyfSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdHJldmlkczogcmV2aXNpb25JZCxcblx0XHRcdH07XG5cdFx0XHRpZiAocmV2aXNpb25JZCkge1xuXHRcdFx0XHRwYXJhbXMucmV2aWRzID0gcmV2aXNpb25JZDtcblx0XHRcdH1cblx0XHRcdGlmIChzZWN0aW9uKSB7XG5cdFx0XHRcdHBhcmFtcy5ydnNlY3Rpb24gPSBzZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5nZXQocGFyYW1zKTtcblx0XHRcdGlmIChyZXNwb25zZS5xdWVyeSAmJiByZXNwb25zZS5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRpZiAoT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdID09PSAnLTEnKSB7XG5cdFx0XHRcdFx0Ly8g5LiN5a2Y5Zyo6L+Z5LiA6aG16Z2iXG5cdFx0XHRcdFx0Ly8gUGFnZSBub3QgZm91bmQuXG5cdFx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHBhZ2VJbmZvID0gcmVzcG9uc2UucXVlcnkucGFnZXNbT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdIGFzIHN0cmluZ10ucmV2aXNpb25zWzBdO1xuXHRcdFx0XHRyZXR1cm4gcGFnZUluZm9bJyonXTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfd2lraXRleHQnKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIOino+aekCBXaWtpdGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHQgd2lraXRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIOmhtemdouagh+mimFxuXHQgKiBAcGFyYW0ge09iamVjdH0gX2NvbmZpZyDorr7nva5cblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSDop6PmnpDnu5PmnpwgSFRNTFxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuXHRhc3luYyBwYXJzZVdpa2lUZXh0KHdpa2l0ZXh0OiBzdHJpbmcsIHRpdGxlID0gJycsIF9jb25maWcgPSB7fSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLnBvc3Qoe1xuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHBzdDogJ3RydWUnLFxuXHRcdFx0fSk7XG5cdFx0XHRpZiAocmVzcG9uc2UucGFyc2UgJiYgcmVzcG9uc2UucGFyc2UudGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UucGFyc2UudGV4dFsnKiddO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCdjYW50X3BhcnNlX3dpa2l0ZXh0Jyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOe8lui+kemhtemdolxuXHQgKlxuXHQgKiBAcGFyYW0ge0VkaXRQYXJhbXN9IHBhcmFtXG5cdCAqL1xuXHRhc3luYyBlZGl0KHtcblx0XHR0aXRsZSxcblx0XHRjb250ZW50LFxuXHRcdGVkaXRUb2tlbixcblx0XHR0aW1lc3RhbXAsXG5cdFx0Y29uZmlnID0ge30sXG5cdFx0YWRkaXRpb25hbENvbmZpZyA9IHt9LFxuXHR9OiBFZGl0UGFyYW1zKTogUHJvbWlzZTx0cnVlIHwgdm9pZD4ge1xuXHRcdGxldCByZXNwb25zZTtcblx0XHR0cnkge1xuXHRcdFx0cmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR0ZXh0OiBjb250ZW50LFxuXHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0dG9rZW46IGVkaXRUb2tlbixcblx0XHRcdFx0Li4uKHRpbWVzdGFtcCA/IHtiYXNldGltZXN0YW1wOiB0aW1lc3RhbXB9IDoge30pLFxuXHRcdFx0XHQuLi5jb25maWcsXG5cdFx0XHRcdC4uLmFkZGl0aW9uYWxDb25maWcsXG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignbmV0d29ya19lZGl0X2Vycm9yJyk7XG5cdFx0fVxuXHRcdGlmIChyZXNwb25zZS5lZGl0KSB7XG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LmNvZGUpIHtcblx0XHRcdFx0Ly8gQWJ1c2UgRmlsdGVyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgXG4gICAgICAgICAgICAgICAgICAgICAgICAke2kxOG4udHJhbnNsYXRlKCdoaXRfYWJ1c2VmaWx0ZXInKX06JHtyZXNwb25zZS5lZGl0LmluZm8ucmVwbGFjZSgnL0hpdCBBYnVzZUZpbHRlcjogL2lnJywgJycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogc21hbGxlcjtcIj4ke3Jlc3BvbnNlLmVkaXQud2FybmluZ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRMb2cuZXJyb3IoJ3Vua25vd25fZWRpdF9lcnJvcicpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAocmVzcG9uc2UuZXJyb3IgJiYgcmVzcG9uc2UuZXJyb3IuY29kZSkge1xuXHRcdFx0TG9nLmVycm9yKHJlc3BvbnNlLmVycm9yLmNvZGUpO1xuXHRcdH0gZWxzZSBpZiAocmVzcG9uc2UuY29kZSkge1xuXHRcdFx0TG9nLmVycm9yKHJlc3BvbnNlLmNvZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRMb2cuZXJyb3IoJ3Vua25vd25fZWRpdF9lcnJvcicpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpfmjIflrprpobXpnaLmnIDmlrDkv67orqLnvJblj7dcblx0ICogR2V0IGxhdGVzdCByZXZpc2lvbklkIG9mIGEgcGFnZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG5cdCAqL1xuXHRhc3luYyBnZXRMYXRlc3RSZXZpc2lvbklkRm9yUGFnZSh0aXRsZTogc3RyaW5nKSB7XG5cdFx0Y29uc3Qge3JldmlzaW9uSWR9ID0gKGF3YWl0IHRoaXMuZ2V0UGFnZUluZm8oe3RpdGxlfSkpIGFzIHtcblx0XHRcdHJldmlzaW9uSWQ6IG51bWJlcjtcblx0XHR9O1xuXHRcdHJldHVybiByZXZpc2lvbklkO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBXaWtpKCk7XG4iLCAiaW1wb3J0IExvZyBmcm9tICcuLi91dGlscy9sb2cnO1xuaW1wb3J0IFdpa2kgZnJvbSAnLi4vc2VydmljZXMvd2lraSc7XG5cbmNsYXNzIFBhZ2Uge1xuXHR0aW1lc3RhbXA6IHN0cmluZyA9ICcnO1xuXHRlZGl0VG9rZW46IHN0cmluZyA9ICcnO1xuXHR0aXRsZTogc3RyaW5nO1xuXHRyZXZpc2lvbklkOiBudW1iZXI7XG5cblx0aW5pdGVkID0gZmFsc2U7XG5cdGlzTmV3UGFnZSA9IGZhbHNlO1xuXG5cdGNvbnRlbnRtb2RlbCA9ICd3aWtpdGV4dCc7XG5cblx0c2VjdGlvbkNhY2hlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy50aXRsZSDpobXpnaLmoIfpopggUGFnZSBOYW1lIChvcHRpb25hbClcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5yZXZpc2lvbklkIOmhtemdouS/ruiuoue8luWPtyBSZXZpc2lvbiBJZFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioe3RpdGxlLCByZXZpc2lvbklkID0gMH06IHt0aXRsZTogc3RyaW5nOyByZXZpc2lvbklkOiBudW1iZXJ9KSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMucmV2aXNpb25JZCA9IHJldmlzaW9uSWQ7XG5cdFx0dGhpcy5pc05ld1BhZ2UgPSAhcmV2aXNpb25JZDtcblx0fVxuXG5cdC8qKlxuXHQgKiDliJ3lp4vljJYg6I635b6X6aG16Z2iRWRpdFRva2Vu5ZKM5Yid5aeLVGltZVN0YW1wXG5cdCAqIEluaXRpYWxpemF0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZWRpdFRva2VuIChvcHRpb25hbCkg5aaC5p6c5o+Q5L6b5LqGZWRpdFRva2Vu77yM5bCG5LiN5Lya5YaN6I635Y+WXG5cdCAqL1xuXHRhc3luYyBpbml0KHtlZGl0VG9rZW59OiB7ZWRpdFRva2VuOiBzdHJpbmd9ID0ge2VkaXRUb2tlbjogJyd9KSB7XG5cdFx0Y29uc3QgcHJvbWlzZUFyciA9IFt0aGlzLmdldFRpbWVzdGFtcCgpLCB0aGlzLmdldENvbnRlbnRNb2RlbCgpXTtcblx0XHRpZiAoIWVkaXRUb2tlbikge1xuXHRcdFx0cHJvbWlzZUFyci5wdXNoKHRoaXMuZ2V0RWRpdFRva2VuKCkpO1xuXHRcdH1cblx0XHRhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlQXJyKTtcblx0XHR0aGlzLmluaXRlZCA9IHRydWU7XG5cdFx0TG9nLmluZm8oYFBhZ2UgaW5pdGlhbGl6YXRpb24gZm9yICR7dGhpcy50aXRsZX0jJHt0aGlzLnJldmlzaW9uSWR9IGZpbmlzaGVkLmApO1xuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+lyBFZGl0VG9rZW5cblx0ICogR2V0IEVkaXRUb2tlblxuXHQgKi9cblx0YXN5bmMgZ2V0RWRpdFRva2VuKCkge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnbWVkaWF3aWtpLnVzZXInKTtcblx0XHRpZiAobXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKSAmJiBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpICE9PSAnK1xcXFwnKSB7XG5cdFx0XHQvLyDlpoLmnpwgTWVkaWFXaWtpIEphdmFTY3JpcHQgQVBJIOWPr+S7peebtOaOpeiOt+W+lyBFZGl0VG9rZW4g5YiZ55u05o6l6L+U5ZueXG5cdFx0XHQvLyBSZXR1cm4gRWRpdFRva2VuIHJldHJpZXZlZCBmcm9tIE1lZGlhV2lraSBKYXZhU2NyaXB0IEFQSSBpZiBhY2Nlc3NpYmxlXG5cdFx0XHR0aGlzLmVkaXRUb2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIOS7jkFQSeiOt+W+l0VkaXRUb2tlblxuXHRcdC8vIEdldCBFZGl0VG9rZW4gZnJvbSBNZWRpYVdpa2kgQVBJXG5cdFx0dGhpcy5lZGl0VG9rZW4gPSAoYXdhaXQgV2lraS5nZXRFZGl0VG9rZW4oKSkgYXMgc3RyaW5nO1xuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+l+e8lui+keWfuuWHhuaXtumXtOaIs1xuXHQgKiBHZXQgQmFzZSBUaW1lc3RhbXBcblx0ICovXG5cdGFzeW5jIGdldFRpbWVzdGFtcCgpIHtcblx0XHRjb25zdCB7dGltZXN0YW1wLCByZXZpc2lvbklkfSA9IChhd2FpdCBXaWtpLmdldFBhZ2VJbmZvKHtcblx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucmV2aXNpb25JZCxcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdH0pKSBhcyBQYXJ0aWFsPFBhZ2VJbmZvPjtcblx0XHR0aGlzLnRpbWVzdGFtcCA9IHRpbWVzdGFtcCBhcyBzdHJpbmc7XG5cdFx0aWYgKHJldmlzaW9uSWQpIHtcblx0XHRcdHRoaXMucmV2aXNpb25JZCA9IHJldmlzaW9uSWQ7XG5cdFx0XHR0aGlzLmlzTmV3UGFnZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpfpobXpnaLlhoXlrrnmqKHlnotcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnJldmlzaW9uSWRcblx0ICovXG5cdGFzeW5jIGdldENvbnRlbnRNb2RlbCgpIHtcblx0XHRjb25zdCB7Y29udGVudG1vZGVsfSA9IChhd2FpdCBXaWtpLmdldFBhZ2VJbmZvKHtcblx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucmV2aXNpb25JZCxcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdH0pKSBhcyBQYWdlSW5mbztcblx0XHR0aGlzLmNvbnRlbnRtb2RlbCA9IGNvbnRlbnRtb2RlbCB8fCAnd2lraXRleHQnO1xuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+lyBXaWtpVGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gY29uZmlnLnNlY3Rpb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5yZXZpc2lvbklkXG5cdCAqL1xuXHRhc3luYyBnZXRXaWtpVGV4dCh7c2VjdGlvbiA9ICcnfToge3NlY3Rpb24/OiBudW1iZXIgfCBzdHJpbmd9ID0ge30pIHtcblx0XHRjb25zdCBzZWMgPSBzZWN0aW9uID09PSAtMSA/IDAgOiBzZWN0aW9uO1xuXHRcdGlmICh0aGlzLnNlY3Rpb25DYWNoZVtzZWNdKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZWN0aW9uQ2FjaGVbc2VjXTtcblx0XHR9XG5cdFx0Y29uc3Qgd2lraVRleHQgPSBhd2FpdCBXaWtpLmdldFdpa2lUZXh0KHtcblx0XHRcdHNlY3Rpb246IHNlYyxcblx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucmV2aXNpb25JZCxcblx0XHR9KTtcblx0XHRMb2cuaW5mbyhgV2lraXRleHQgb2YgJHt0aGlzLnRpdGxlfSMke3NlY3Rpb259IGZldGNoZWQuYCk7XG5cdFx0dGhpcy5zZWN0aW9uQ2FjaGVbc2VjXSA9IHdpa2lUZXh0O1xuXHRcdHJldHVybiB3aWtpVGV4dDtcblx0fVxuXG5cdC8qKlxuXHQgKiDop6PmnpAgV2lraVRleHRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2l0ZXh0XG5cdCAqL1xuXHRhc3luYyBwYXJzZVdpa2lUZXh0KHdpa2l0ZXh0OiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gYXdhaXQgV2lraS5wYXJzZVdpa2lUZXh0KHdpa2l0ZXh0LCB0aGlzLnRpdGxlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDnvJbovpHpobXpnaJcblx0ICpcblx0ICogQHBhcmFtIHtBcGlFZGl0UGFnZVBhcmFtc30gcGF5bG9hZFxuXHQgKi9cblx0YXN5bmMgZWRpdChwYXlsb2FkOiBBcGlFZGl0UGFnZVBhcmFtcykge1xuXHRcdGlmICghdGhpcy5lZGl0VG9rZW4pIHtcblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfZWRpdHRva2VuJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghdGhpcy50aW1lc3RhbXAgJiYgIXRoaXMuaXNOZXdQYWdlKSB7XG5cdFx0XHQvLyDlpoLmnpzkuI3mmK/liJvlu7rmlrDpobXpnaIg5Y+I5rKh5pyJ5Z+65YeG5pe26Ze05oizIOWImeacieWPr+iDvemAoOaIkOe8lui+keimhuebliDkv53pmanotbfop4Hnm7TmjqXmi5Lnu51cblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfdGltZXN0YW1wJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJldHVybiBhd2FpdCBXaWtpLmVkaXQoe1xuXHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0XHRlZGl0VG9rZW46IHRoaXMuZWRpdFRva2VuLFxuXHRcdFx0Li4uKHRoaXMudGltZXN0YW1wID8ge3RpbWVzdGFtcDogdGhpcy50aW1lc3RhbXB9IDoge30pLFxuXHRcdFx0Li4ucGF5bG9hZCxcblx0XHRcdGFkZGl0aW9uYWxDb25maWc6IHtcblx0XHRcdFx0Li4uKHRoaXMuaXNOZXdQYWdlID8ge2NyZWF0ZW9ubHk6IHRoaXMuaXNOZXdQYWdlfSA6IHt9KSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5jbGFzcyBTZXR0aW5ncyB7XG5cdGdldFNldHRpbmcoa2V5OiBzdHJpbmcsIG9iamVjdDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbj4gPSB7fSkge1xuXHRcdGNvbnN0IHcgPSBvYmplY3Q7XG5cdFx0bGV0IHNldHRpbmdzO1xuXHRcdHRyeSB7XG5cdFx0XHRzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGN1c3RvbVNldHRpbmdGdW5jdGlvbiA9IG5ldyBGdW5jdGlvbihgcmV0dXJuICR7c2V0dGluZ3Nba2V5XX1gKTtcblx0XHRcdGlmICh0eXBlb2YgY3VzdG9tU2V0dGluZ0Z1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYgKGN1c3RvbVNldHRpbmdGdW5jdGlvbigpKHcpID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBjdXN0b21TZXR0aW5nRnVuY3Rpb24oKSh3KSB8fCBzZXR0aW5nc1trZXldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldHRpbmdzW2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5nc1trZXldO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bGV0IHJlc3VsdCA9IHNldHRpbmdzW2tleV07XG5cdFx0XHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iamVjdCkpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShgXFwkeyR7a2V5fX1gLCBvYmplY3Rba2V5XSBhcyBzdHJpbmcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXR0aW5ncygpO1xuIiwgIi8qKlxuICog6Kej5p6QVVJM5Y+C5pWw5YiX6KGoXG4gKiBQYXJzZSBVUkwgcXVlcnkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHVybFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeSh1cmw6IHN0cmluZykge1xuXHRjb25zdCByZWcgPSAvKChbXj8mPV0rKSg/Oj0oW14/Jj1dKikpKikvZztcblx0Y29uc3QgcGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5cdGxldCBtYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbDtcblx0d2hpbGUgKChtYXRjaCA9IHJlZy5leGVjKHVybCkpKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHBhcmFtc1ttYXRjaFsyXSBhcyBzdHJpbmddID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdIGFzIHN0cmluZyk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRwYXJhbXNbbWF0Y2hbMl0gYXMgc3RyaW5nXSA9IG1hdGNoWzNdIGFzIHN0cmluZztcblx0XHR9XG5cdH1cblx0cmV0dXJuIHBhcmFtcztcbn1cbiIsICJjb25zdCBzbGVlcCA9ICh0aW1lOiBudW1iZXIpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0cmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG5cdH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHNsZWVwO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBMb2csIHtXaWtpcGx1c0Vycm9yfSBmcm9tICcuLi91dGlscy9sb2cnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgaTE4biBmcm9tICcuLi91dGlscy9pMThuJztcbmltcG9ydCB7cGFyc2VRdWVyeX0gZnJvbSAnLi4vdXRpbHMvaGVscGVycyc7XG5pbXBvcnQgc2xlZXAgZnJvbSAnLi4vdXRpbHMvc2xlZXAnO1xuXG5jbGFzcyBVSSB7XG5cdHF1aWNrRWRpdFBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuXHRzY3JvbGxUb3AgPSAwO1xuXG5cdC8qKlxuXHQgKiDliJvlu7rlsYXkuK3lr7nor53moYZcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIOeql+WPo+agh+mimFxuXHQgKiBAcGFyYW0ge3N0cmluZyB8IEpRdWVyeTxIVE1MRWxlbWVudD59IGNvbnRlbnQg5YaF5a65XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCDlrr3luqZcblx0ICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjYWxsYmFjayDlm57osIPlh73mlbBcblx0ICovXG5cdGNyZWF0ZURpYWxvZ0JveChcblx0XHR0aXRsZTogc3RyaW5nID0gJ1dpa2lwbHVzJyxcblx0XHRjb250ZW50OiBzdHJpbmcgfCBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0gJycsXG5cdFx0d2lkdGg6IG51bWJlciA9IDYwMCxcblx0XHRjYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHt9XG5cdCkge1xuXHRcdGlmICgkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRjb25zdCBjbGllbnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdGNvbnN0IGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHRjb25zdCBkaWFsb2dXaWR0aCA9IE1hdGgubWluKGNsaWVudFdpZHRoLCB3aWR0aCk7XG5cdFx0Y29uc3QgZGlhbG9nQm94ID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveCcpXG5cdFx0XHQuY3NzKHtcblx0XHRcdFx0J21hcmdpbi1sZWZ0JzogY2xpZW50V2lkdGggLyAyIC0gZGlhbG9nV2lkdGggLyAyLFxuXHRcdFx0XHR0b3A6ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpIHx8IDAgKyBjbGllbnRIZWlnaHQgKiAwLjIsXG5cdFx0XHRcdGRpc3BsYXk6ICdub25lJyxcblx0XHRcdH0pXG5cdFx0XHQuYXBwZW5kKCQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUhlYWRlcicpLmh0bWwodGl0bGUpKVxuXHRcdFx0LmFwcGVuZCgkKCc8ZGl2PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuYXBwZW5kKGNvbnRlbnQpKVxuXHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS50ZXh0KCfDlycpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1DbG9zZScpKTtcblx0XHQkKCdib2R5JykuYXBwZW5kKGRpYWxvZ0JveCk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94Jykud2lkdGgoZGlhbG9nV2lkdGgpO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdCQodGhpcylcblx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdC5mYWRlT3V0KCdmYXN0JywgKCkgPT4ge1xuXHRcdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB1bmRlZmluZWQpKTsgLy8g5Y+W5raI6aG16Z2i5YWz6Zet56Gu6K6kXG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Ly8g5ouW5puzXG5cdFx0Y29uc3QgYmluZERyYWdnaW5nID0gKGVsZW1lbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHtcblx0XHRcdGVsZW1lbnQub24oJ21vdXNlZG93bicsIChlKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGJhc2VYID0gZS5jbGllbnRYO1xuXHRcdFx0XHRjb25zdCBiYXNlWSA9IGUuY2xpZW50WTtcblx0XHRcdFx0Y29uc3QgYmFzZU9mZnNldFggPSBlbGVtZW50LnBhcmVudCgpLm9mZnNldCgpPy5sZWZ0IHx8IDA7XG5cdFx0XHRcdGNvbnN0IGJhc2VPZmZzZXRZID0gZWxlbWVudC5wYXJlbnQoKS5vZmZzZXQoKT8udG9wIHx8IDA7XG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGVsZW1lbnQucGFyZW50KCkuY3NzKHtcblx0XHRcdFx0XHRcdCdtYXJnaW4tbGVmdCc6IGJhc2VPZmZzZXRYICsgZS5jbGllbnRYIC0gYmFzZVgsXG5cdFx0XHRcdFx0XHR0b3A6IGJhc2VPZmZzZXRZICsgZS5jbGllbnRZIC0gYmFzZVksXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKGRvY3VtZW50KS5vbignbW91c2V1cCcsICgpID0+IHtcblx0XHRcdFx0XHRlbGVtZW50LnVuYmluZCgnbW91c2Vkb3duJyk7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdtb3VzZW1vdmUnKTtcblx0XHRcdFx0XHQkKGRvY3VtZW50KS5vZmYoJ21vdXNldXAnKTtcblx0XHRcdFx0XHRiaW5kRHJhZ2dpbmcoZWxlbWVudCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRiaW5kRHJhZ2dpbmcoJCgnLldpa2lwbHVzLUludGVyQm94LUhlYWRlcicpKTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5mYWRlSW4oNTAwKTtcblx0XHRjYWxsYmFjaygpO1xuXHRcdHJldHVybiBkaWFsb2dCb3g7XG5cdH1cblxuXHQvKipcblx0ICog5Zyo5pCc57Si5qGG5bem5L6n44CM5pu05aSa44CN6I+c5Y2V5YaF5re75Yqg5oyJ6ZKuXG5cdCAqIEFkZCBhIGJ1dHRvbiBpbiBcIk1vcmVcIiBtZW51IChsZWZ0IG9mIHRoZSBzZWFyY2ggYmFyKVxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCDmjInpkq7lkI0gQnV0dG9uIHRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGlkIOaMiemSrmlkIEJ1dHRvbiBpZFxuXHQgKiBAcmV0dXJuIHtKUXVlcnk8SFRNTEVsZW1lbnQ+fSBidXR0b25cblx0ICovXG5cdGFkZEZ1bmN0aW9uQnV0dG9uKHRleHQ6IHN0cmluZywgaWQ6IHN0cmluZyk6IEpRdWVyeTxIVE1MRWxlbWVudD4gfCB2b2lkIHtcblx0XHRsZXQgYnV0dG9uO1xuXHRcdHN3aXRjaCAoQ29uc3RhbnRzLnNraW4pIHtcblx0XHRcdGNhc2UgJ21pbmVydmEnOlxuXHRcdFx0XHRidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdFx0XHQuYXR0cignaWQnLCBpZClcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RvZ2dsZS1saXN0LWl0ZW0nKVxuXHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ213LXVpLWljb24gbXctdWktaWNvbi1iZWZvcmUgdG9nZ2xlLWxpc3QtaXRlbV9fYW5jaG9yJylcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RvZ2dsZS1saXN0LWl0ZW1fX2xhYmVsJylcblx0XHRcdFx0XHRcdFx0XHRcdC50ZXh0KHRleHQpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnbW9lc2tpbic6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtTW9yZS1GdW5jdGlvbi1CdXR0b24nKVxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIGlkKVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPGE+JykuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCk7JykudGV4dCh0ZXh0KSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ213LWxpc3QtaXRlbScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd2ZWN0b3ItdGFiLW5vaWNvbicpXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgaWQpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8YT4nKS5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKS50ZXh0KHRleHQpKTtcblx0XHR9XG5cdFx0aWYgKENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YScgJiYgJCgnI3AtdGInKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcjcC10YicpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH0gZWxzZSBpZiAoQ29uc3RhbnRzLnNraW4gPT09ICdtb2Vza2luJykge1xuXHRcdFx0JCgnLm1vcmUtYWN0aW9ucy1saXN0JykuZmlyc3QoKS5hcHBlbmQoYnV0dG9uKTtcblx0XHRcdHJldHVybiAkKGAjJHtpZH1gKTtcblx0XHR9IGVsc2UgaWYgKCQoJyNwLWNhY3Rpb25zJykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnI3AtY2FjdGlvbnMgdWwnKS5hcHBlbmQoYnV0dG9uKTtcblx0XHRcdHJldHVybiAkKGAjJHtpZH1gKTtcblx0XHR9XG5cdFx0TG9nLmluZm8oaTE4bi50cmFuc2xhdGUoJ2NhbnRfYWRkX2Z1bmNidG4nKSk7XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl5b+r6YCf6YeN5a6a5ZCR5oyJ6ZKuXG5cdCAqXG5cdCAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2ltcGxlUmVkaXJlY3RCdXR0b24ob25DbGljazogKCkgPT4gdm9pZCA9ICgpID0+IHt9KSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gdGhpcy5hZGRGdW5jdGlvbkJ1dHRvbihpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3RfZnJvbScpLCAnV2lraXBsdXMtU1ItSW50cm8nKTtcblx0XHRpZiAoYnV0dG9uKSB7XG5cdFx0XHRidXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeiuvue9rumdouadv+aMiemSrlxuXHQgKlxuXHQgKiBAcGFyYW0geygpID0+IHZvaWR9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFNldHRpbmdzUGFuZWxCdXR0b24ob25DbGljazogKCkgPT4gdm9pZCA9ICgpID0+IHt9KSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gdGhpcy5hZGRGdW5jdGlvbkJ1dHRvbihpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3MnKSwgJ1dpa2lwbHVzLVNldHRpbmdzLUludHJvJyk7XG5cdFx0aWYgKGJ1dHRvbikge1xuXHRcdFx0YnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXpobbpg6jlv6vpgJ/nvJbovpHmjInpkq5cblx0ICogSW5zZXJ0IFF1aWNrRWRpdCBidXR0b24gYmVzaWRlcyBwYWdlIGVkaXQgYnV0dG9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09uQ2xpY2t9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFRvcFF1aWNrRWRpdEVudHJ5KG9uQ2xpY2s6IE9uQ2xpY2spIHtcblx0XHRjb25zdCB0b3BCdG4gPSAkKCc8bGk+JykuYXR0cignaWQnLCAnV2lraXBsdXMtRWRpdC1Ub3BCdG4nKS5hdHRyKCdjbGFzcycsICdtdy1saXN0LWl0ZW0nKTtcblx0XHRjb25zdCB0b3BCdG5MaW5rID0gJCgnPGE+Jylcblx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3RvcGJ0bicpfWApO1xuXHRcdHRvcEJ0bi5hcHBlbmQodG9wQnRuTGluayk7XG5cdFx0c3dpdGNoIChDb25zdGFudHMuc2tpbikge1xuXHRcdFx0Y2FzZSAnbWluZXJ2YSc6XG5cdFx0XHRcdHRvcEJ0bi5jc3MoeydhbGlnbi1pdGVtcyc6ICdjZW50ZXInLCBkaXNwbGF5OiAnZmxleCd9KTtcblx0XHRcdFx0dG9wQnRuLmZpbmQoJ3NwYW4nKS5hZGRDbGFzcygncGFnZS1hY3Rpb25zLW1lbnVfX2xpc3QtaXRlbScpO1xuXHRcdFx0XHR0b3BCdG5cblx0XHRcdFx0XHQuZmluZCgnYScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKFxuXHRcdFx0XHRcdFx0J213LXVpLWljb24gbXctdWktaWNvbi1lbGVtZW50IG13LXVpLWljb24td2lraW1lZGlhLWVkaXQtYmFzZTIwIG13LXVpLWljb24td2l0aC1sYWJlbC1kZXNrdG9wJ1xuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQuY3NzKCd2ZXJ0aWNhbC1hbGlnbicsICdtaWRkbGUnKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3ZlY3Rvci0yMDIyJzpcblx0XHRcdFx0dG9wQnRuLmFkZENsYXNzKCd2ZWN0b3ItdGFiLW5vaWNvbicpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndmVjdG9yJzpcblx0XHRcdFx0dG9wQnRuLmFwcGVuZCgkKCc8c3Bhbj4nKS5hcHBlbmQodG9wQnRuTGluaykpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHR9XG5cdFx0JCh0b3BCdG4pLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRzZWN0aW9uTnVtYmVyOiAtMSxcblx0XHRcdFx0dGFyZ2V0UGFnZU5hbWU6IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWUsXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRpZiAoJCgnI2NhLWVkaXQnKS5sZW5ndGggPiAwICYmICQoJyNXaWtpcGx1cy1FZGl0LVRvcEJ0bicpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0aWYgKENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YSknKSB7XG5cdFx0XHRcdCQoJyNjYS1lZGl0JykucGFyZW50KCkuYWZ0ZXIodG9wQnRuKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJyNjYS1lZGl0JykuYWZ0ZXIodG9wQnRuKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl5q616JC95b+r6YCf57yW6L6R5oyJ6ZKuXG5cdCAqIEluc2VydCBRdWlja0VkaXQgYnV0dG9ucyBmb3IgZWFjaCBzZWN0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09uQ2xpY2t9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFNlY3Rpb25RdWlja0VkaXRFbnRyaWVzKG9uQ2xpY2s6IE9uQ2xpY2spIHtcblx0XHRvbkNsaWNrIHx8PSAoKSA9PiB7fTtcblx0XHRjb25zdCBzZWN0aW9uQnRuID1cblx0XHRcdENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YSdcblx0XHRcdFx0PyAkKCc8c3Bhbj4nKS5hcHBlbmQoXG5cdFx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoXG5cdFx0XHRcdFx0XHRcdFx0J1dpa2lwbHVzLUVkaXQtU2VjdGlvbkJ0biBtdy11aS1pY29uIG13LXVpLWljb24tZWxlbWVudCBtdy11aS1pY29uLXdpa2ltZWRpYS1lZGl0LWJhc2UyMCBlZGl0LXBhZ2UgbXctdWktaWNvbi1mbHVzaC1yaWdodCdcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHQuY3NzKCdtYXJnaW4tbGVmdCcsICcwLjc1ZW0nKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0XHRcdFx0XHQuYXR0cigndGl0bGUnLCBpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3NlY3Rpb25idG4nKSlcblx0XHRcdFx0XHQpXG5cdFx0XHRcdDogJCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ213LWVkaXRzZWN0aW9uLWRpdmlkZXInKS50ZXh0KCcgfCAnKSlcblx0XHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF9zZWN0aW9uYnRuJykpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdCQoJy5tdy1lZGl0c2VjdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgZWRpdFVSTCA9ICQodGhpcykuZmluZChcImFbaHJlZio9J2FjdGlvbj1lZGl0J11cIikuZmlyc3QoKS5hdHRyKCdocmVmJykgfHwgJyc7XG5cdFx0XHRcdGNvbnN0IFssIHNlY3Rpb25MYWJlbF0gPSBlZGl0VVJMLm1hdGNoKC8mW3ZlXSpzZWN0aW9uXFw9KFteJl0rKS8pIGFzIFJlZ0V4cEV4ZWNBcnJheTsgLy8gYHZlYCBmb3IgdmlzdWFsIGVkaXRvclxuXHRcdFx0XHRjb25zdCBzZWN0aW9uTnVtYmVyID0gc2VjdGlvbkxhYmVsPy5yZXBsYWNlKC9ULS9naSwgJycpOyAvLyBlbWJlZGRlZCBwYWdlcyB1c2UgVC1zZXJpZXMgc2VjdGlvbiBudW1iZXJcblx0XHRcdFx0Y29uc3QgWywgc2VjdGlvblRhcmdldExhYmVsXSA9IGVkaXRVUkwubWF0Y2goL3RpdGxlPSguKz8pJi8pIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdFx0Y29uc3Qgc2VjdGlvblRhcmdldE5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoc2VjdGlvblRhcmdldExhYmVsIHx8ICcnKTtcblx0XHRcdFx0Y29uc3QgY2xvbmVOb2RlID0gJCh0aGlzKS5wcmV2KCkuY2xvbmUoKTtcblx0XHRcdFx0Y2xvbmVOb2RlLmZpbmQoJy5tdy1oZWFkbGluZS1udW1iZXInKS5yZW1vdmUoKTtcblx0XHRcdFx0Y29uc3Qgc2VjdGlvbk5hbWUgPSBjbG9uZU5vZGUudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0Y29uc3QgX3NlY3Rpb25CdG4gPSBzZWN0aW9uQnRuLmNsb25lKCk7XG5cdFx0XHRcdF9zZWN0aW9uQnRuLmZpbmQoJy5XaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4nKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0b25DbGljayh7XG5cdFx0XHRcdFx0XHRzZWN0aW9uTnVtYmVyOiBOdW1iZXIucGFyc2VJbnQoc2VjdGlvbk51bWJlciBhcyBzdHJpbmcsIDEwKSxcblx0XHRcdFx0XHRcdHNlY3Rpb25OYW1lLFxuXHRcdFx0XHRcdFx0dGFyZ2V0UGFnZU5hbWU6IHNlY3Rpb25UYXJnZXROYW1lLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YScpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmFwcGVuZChfc2VjdGlvbkJ0bik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5maW5kKCcubXctZWRpdHNlY3Rpb24tYnJhY2tldCcpLmxhc3QoKS5iZWZvcmUoX3NlY3Rpb25CdG4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2luaXRfcXVpY2tlZGl0Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl5Lu75oSP6ZO+5o6l57yW6L6R5YWl5Y+jXG5cdCAqXG5cdCAqIEBwYXJhbSB7T25DbGlja30gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0TGlua0VkaXRFbnRyaWVzKG9uQ2xpY2s6IE9uQ2xpY2spIHtcblx0XHRvbkNsaWNrIHx8PSAoKSA9PiB7fTtcblx0XHQkKCcjbXctY29udGVudC10ZXh0IGEuZXh0ZXJuYWwnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpIHx8ICcnO1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeSh1cmwpO1xuXHRcdFx0aWYgKHBhcmFtc1snYWN0aW9uJ10gPT09ICdlZGl0JyAmJiBwYXJhbXNbJ3RpdGxlJ10gIT09IHVuZGVmaW5lZCAmJiBwYXJhbXNbJ3NlY3Rpb24nXSAhPT0gJ25ldycpIHtcblx0XHRcdFx0JCh0aGlzKS5hZnRlcihcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnamF2YXNjcmlwdDp2b2lkKDApJyxcblx0XHRcdFx0XHRcdFx0Y2xhc3M6ICdXaWtpcGx1cy1FZGl0LUV2ZXJ5V2hlcmVCdG4nLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC50ZXh0KGAoJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3NlY3Rpb25idG4nKX0pYClcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBwYXJhbXNbJ3RpdGxlJ10gYXMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdHNlY3Rpb25OdW1iZXI6IE51bWJlci5wYXJzZUludChwYXJhbXNbJ3NlY3Rpb24nXSBhcyBzdHJpbmcsIDEwKSA/PyAtMSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c2hvd1F1aWNrRWRpdFBhbmVsKHtcblx0XHR0aXRsZSA9ICcnLFxuXHRcdGNvbnRlbnQgPSAnJyxcblx0XHRzdW1tYXJ5ID0gJycsXG5cdFx0b25CYWNrID0gKCkgPT4ge30sXG5cdFx0b25QYXJzZSA9IGFzeW5jICgpID0+IHt9LFxuXHRcdG9uRWRpdCA9IGFzeW5jICgpID0+IHt9LFxuXHRcdGVzY0V4aXQgPSBmYWxzZSxcblx0fToge1xuXHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0Y29udGVudDogc3RyaW5nO1xuXHRcdHN1bW1hcnk6IHN0cmluZztcblx0XHRvbkJhY2s6ICgpID0+IHZvaWQ7XG5cdFx0b25QYXJzZTogKHdpa2l0ZXh0OiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5cdFx0b25FZGl0OiAoYXJnMDoge3N1bW1hcnk6IHN0cmluZzsgY29udGVudDogc3RyaW5nOyBpc01pbm9yRWRpdDogYm9vbGVhbn0pID0+IFByb21pc2U8dm9pZD47XG5cdFx0ZXNjRXhpdDogYm9vbGVhbjtcblx0fSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuc2Nyb2xsVG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgfHwgMDtcblx0XHRpZiAodGhpcy5xdWlja0VkaXRQYW5lbFZpc2libGUpIHtcblx0XHRcdHRoaXMuaGlkZVF1aWNrRWRpdFBhbmVsKCk7XG5cdFx0fVxuXHRcdHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gdHJ1ZTtcblx0XHQvLyDpmLLmraLmiYvmu5HlhbPpl63pobXpnaJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdCdjbG9zZScsXG5cdFx0XHQod2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7aTE4bi50cmFuc2xhdGUoJ29uY2xvc2VfY29uZmlybScpfWA7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0Y29uc3QgaXNOZXdQYWdlID0gJCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggPiAwO1xuXHRcdC8vIERPTSDlrprkuYnlvIDlp4tcblx0XHRjb25zdCBiYWNrQnRuID0gJCgnPHNwYW4+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJ0bicpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnYmFjaycpfWApOyAvLyDov5Tlm57mjInpkq5cblx0XHRjb25zdCBqdW1wQnRuID0gJCgnPHNwYW4+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtSnVtcCcpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJ0bicpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJyNXaWtpcGx1cy1RdWlja2VkaXQnKVxuXHRcdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdnb3RvX2VkaXRib3gnKX1gKVxuXHRcdFx0KTsgLy8g5Yiw57yW6L6R5qGGXG5cdFx0Y29uc3QgaW5wdXRCb3ggPSAkKCc8dGV4dGFyZWE+JykuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0Jyk7IC8vIOS4u+e8lui+keahhlxuXHRcdGNvbnN0IHByZXZpZXdCb3ggPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpOyAvLyDpooTop4jovpPlh7pcblx0XHRjb25zdCBzdW1tYXJ5Qm94ID0gJCgnPGlucHV0PicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQnKVxuXHRcdFx0LmF0dHIoJ3BsYWNlaG9sZGVyJywgYCR7aTE4bi50cmFuc2xhdGUoJ3N1bW1hcnlfcGxhY2Vob2xkJyl9YCk7IC8vIOe8lui+keaRmOimgei+k+WFpVxuXHRcdGNvbnN0IGVkaXRTdWJtaXRCdG4gPSAkKCc8YnV0dG9uPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZShpc05ld1BhZ2UgPyAncHVibGlzaF9wYWdlJyA6ICdwdWJsaXNoX2NoYW5nZScpfShDdHJsK1MpYCk7IC8vIOaPkOS6pOaMiemSrlxuXHRcdGNvbnN0IHByZXZpZXdTdWJtaXRCdG4gPSAkKCc8YnV0dG9uPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0Jylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdwcmV2aWV3Jyl9YCk7IC8vIOmihOiniOaMiemSrlxuXHRcdGNvbnN0IGlzTWlub3JFZGl0ID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFwcGVuZCgkKCc8aW5wdXQ+JykuYXR0cih7dHlwZTogJ2NoZWNrYm94JywgaWQ6ICdXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0J30pKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGxhYmVsPicpXG5cdFx0XHRcdFx0LmF0dHIoJ2ZvcicsICdXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0Jylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnbWFya19taW5vcmVkaXQnKX0oQ3RybCtTaGlmdCtTKWApXG5cdFx0XHQpXG5cdFx0XHQuY3NzKHttYXJnaW46ICc1cHggNXB4IDVweCAtM3B4JywgZGlzcGxheTogJ2lubGluZSd9KTtcblx0XHQvLyBET03lrprkuYnnu5PmnZ9cblx0XHRjb25zdCBlZGl0Qm9keSA9ICQoJzxkaXY+JykuYXBwZW5kKFxuXHRcdFx0YmFja0J0bixcblx0XHRcdGp1bXBCdG4sXG5cdFx0XHRwcmV2aWV3Qm94LFxuXHRcdFx0aW5wdXRCb3gsXG5cdFx0XHRzdW1tYXJ5Qm94LFxuXHRcdFx0JCgnPGJyPicpLFxuXHRcdFx0aXNNaW5vckVkaXQsXG5cdFx0XHRlZGl0U3VibWl0QnRuLFxuXHRcdFx0cHJldmlld1N1Ym1pdEJ0blxuXHRcdCk7XG5cdFx0dGhpcy5jcmVhdGVEaWFsb2dCb3godGl0bGUsIGVkaXRCb2R5LCAxMDAwLCAoKSA9PiB7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKGNvbnRlbnQpO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0JykudmFsKHN1bW1hcnkpO1xuXHRcdH0pO1xuXHRcdC8vIEJhY2tcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKS5vbignY2xpY2snLCBvbkJhY2spO1xuXHRcdC8vIFByZXZpZXdcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0Jykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcHJlbG9hZEJhbm5lciA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnbG9hZGluZ19wcmV2aWV3Jyl9YCk7XG5cdFx0XHRjb25zdCB3aWtpVGV4dCA9ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQnKS52YWwoKTtcblx0XHRcdCQodGhpcykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KDEwMCwgKCkgPT4ge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuaHRtbCgnJykuYXBwZW5kKHByZWxvYWRCYW5uZXIpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZUluKDEwMCk7XG5cdFx0XHR9KTtcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHNlbGYuc2Nyb2xsVG9wfSwgMjAwKTsgLy/ov5Tlm57pobbpg6hcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9uUGFyc2Uod2lraVRleHQgYXMgc3RyaW5nKTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KCcxMDAnLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKGA8aHI+PGRpdiBjbGFzcz1cIm13LWJvZHktY29udGVudFwiPiR7cmVzdWx0fTwvZGl2Pjxocj5gKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbignMTAwJyk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdC8vIEVkaXRcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHRpbWVyID0gRGF0ZS5ub3coKTtcblx0XHRcdGNvbnN0IGVkaXRCYW5uZXIgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3N1Ym1pdHRpbmdfZWRpdCcpfWApO1xuXHRcdFx0Y29uc3QgcGF5bG9hZCA9IHtcblx0XHRcdFx0c3VtbWFyeTogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0JykudmFsKCkgYXMgc3RyaW5nLFxuXHRcdFx0XHRjb250ZW50OiAkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKCkgYXMgc3RyaW5nLFxuXHRcdFx0XHRpc01pbm9yRWRpdDogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKS5pcygnOmNoZWNrZWQnKSBhcyBib29sZWFuLFxuXHRcdFx0fTtcblx0XHRcdC8vIOWHhuWkh+e8lui+kSDnpoHnlKjmjInpkq4g5omn6KGM5Yqo55S7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCwjV2lraXBsdXMtUXVpY2tlZGl0LCNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5hdHRyKFxuXHRcdFx0XHQnZGlzYWJsZWQnLFxuXHRcdFx0XHQnZGlzYWJsZWQnXG5cdFx0XHQpO1xuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogc2VsZi5zY3JvbGxUb3B9LCAyMDApO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVPdXQoMTAwLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKCcnKS5hcHBlbmQoZWRpdEJhbm5lcik7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlSW4oMTAwKTtcblx0XHRcdH0pO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgb25FZGl0KHBheWxvYWQpO1xuXHRcdFx0XHRjb25zdCB1c2VUaW1lID0gRGF0ZS5ub3coKSAtIHRpbWVyO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0Jylcblx0XHRcdFx0XHQuZmluZCgnLldpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdFx0LmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDYsIDIzOSwgOTIsIDAuNDQpJyk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKVxuXHRcdFx0XHRcdC5maW5kKCcuV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnZWRpdF9zdWNjZXNzJywgW3VzZVRpbWUudG9TdHJpbmcoKV0pfWApO1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAod2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4gdW5kZWZpbmVkKSk7IC8vIOWPlua2iOmhtemdouWFs+mXreehruiupFxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDIxOCwgMTQyLCAxNjcsIDAuNjUpJyk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5odG1sKChlcnJvciBhcyBXaWtpcGx1c0Vycm9yKS5tZXNzYWdlKTtcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0LCNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLnByb3AoXG5cdFx0XHRcdFx0J2Rpc2FibGVkJyxcblx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vIEN0cmwrU+aPkOS6pCBDdHJsK1NoaWZ0K1PlsI/nvJbovpFcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LCNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCwjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpLm9uKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChlLmN0cmxLZXkgJiYgZS53aGljaCA9PT0gODMpIHtcblx0XHRcdFx0aWYgKGUuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly8gRXNj6YCA5Ye6XG5cdFx0aWYgKGVzY0V4aXQpIHtcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdFx0aWYgKGUud2hpY2ggPT09IDI3KSB7XG5cdFx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0aGlkZVF1aWNrRWRpdFBhbmVsKCkge1xuXHRcdHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gZmFsc2U7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZmFkZU91dCgnZmFzdCcsICgpID0+IHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB1bmRlZmluZWQpKTsgLy8g5Y+W5raI6aG16Z2i5YWz6Zet56Gu6K6kXG5cdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaYvuekuuW/q+mAn+mHjeWumuWQkeW8ueeql1xuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1cblx0ICogQHBhcmFtIHtPbkVkaXR9IHBhcmFtLm9uRWRpdFxuXHQgKiBAcGFyYW0ge09uU3VjY2Vzc30gcGFyYW0ub25TdWNjZXNzXG5cdCAqL1xuXHRzaG93U2ltcGxlUmVkaXJlY3RQYW5lbCh7b25FZGl0ID0gYXN5bmMgKCkgPT4ge30sIG9uU3VjY2VzcyA9ICgpID0+IHt9fToge29uRWRpdD86IE9uRWRpdDsgb25TdWNjZXNzPzogT25TdWNjZXNzfSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1JbnB1dCcpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLVRpdGxlJyk7XG5cdFx0Y29uc3Qgc3VtbWFyeUlucHV0VGl0bGUgPSAkKCc8cD4nKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zdW1tYXJ5X2Rlc2MnKSk7XG5cdFx0Y29uc3Qgc3VtbWFyeUlucHV0ID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1JbnB1dCcpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLVN1bW1hcnknKTtcblx0XHRjb25zdCBhcHBseUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1DYW5jZWwnKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ2NhbmNlbCcpKTtcblx0XHRjb25zdCBjb250aW51ZUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1Db250aW51ZScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY29udGludWUnKSk7XG5cdFx0Y29uc3QgY29udGVudCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hcHBlbmQoaW5wdXQpXG5cdFx0XHQuYXBwZW5kKHN1bW1hcnlJbnB1dFRpdGxlKVxuXHRcdFx0LmFwcGVuZChzdW1tYXJ5SW5wdXQpXG5cdFx0XHQuYXBwZW5kKCQoJzxocj4nKSlcblx0XHRcdC5hcHBlbmQoYXBwbHlCdG4pXG5cdFx0XHQuYXBwZW5kKGNhbmNlbEJ0bik7IC8vIOaLvOaOpVxuXHRcdGNvbnN0IGRpYWxvZyA9IHRoaXMuY3JlYXRlRGlhbG9nQm94KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9kZXNjJyksIGNvbnRlbnQsIDYwMCk7XG5cdFx0YXBwbHlCdG4ub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGUgPSAkKCcjV2lraXBsdXMtU1ItVGl0bGUnKS52YWwoKSBhcyBzdHJpbmc7XG5cdFx0XHRjb25zdCBzdW1tYXJ5ID0gJCgnI1dpa2lwbHVzLVNSLVN1bW1hcnknKS52YWwoKSBhcyBzdHJpbmc7XG5cdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoXG5cdFx0XHRcdGA8ZGl2IGNsYXNzPVwiV2lraXBsdXMtQmFubmVyXCI+JHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9PC9kaXY+YFxuXHRcdFx0KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IG9uRWRpdCh7XG5cdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogZmFsc2UsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dChpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3Rfc2F2ZWQnKSk7XG5cdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0b25TdWNjZXNzKHt0aXRsZX0pO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDIxOCwgMTQyLCAxNjcsIDAuNjUpJyk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KChlcnJvciBhcyBXaWtpcGx1c0Vycm9yKS5tZXNzYWdlKTtcblx0XHRcdFx0aWYgKChlcnJvciBhcyBXaWtpcGx1c0Vycm9yKS5jb2RlID09PSAnYXJ0aWNsZWV4aXN0cycpIHtcblx0XHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmFwcGVuZCgkKCc8aHI+JykpLmFwcGVuZChjb250aW51ZUJ0bikuYXBwZW5kKGNhbmNlbEJ0bik7XG5cdFx0XHRcdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb250aW51ZUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoXG5cdFx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwiV2lraXBsdXMtQmFubmVyXCI+JHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9PC9kaXY+YFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IG9uRWRpdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zYXZlZCcpKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRcdFx0XHRvblN1Y2Nlc3Moe3RpdGxlfSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoKGVycm9yIGFzIFdpa2lwbHVzRXJyb3IpLm1lc3NhZ2UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiDpmpDol4/lv6vpgJ/ph43lrprlkJHlvLnnqpdcblx0ICpcblx0ICogQHBhcmFtIHtKUXVlcnk8SFRNTEVsZW1lbnQ+fSBkaWFsb2dcblx0ICovXG5cdGhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZzogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICQoJ2JvZHknKSkge1xuXHRcdGRpYWxvZy5maW5kKCcuV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKS50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0c2hvd1NldHRpbmdzUGFuZWwoe1xuXHRcdG9uU3VibWl0ID0gKCkgPT4ge30sXG5cdH06IHtcblx0XHRvblN1Ym1pdD86IChhcmcwOiB7c2V0dGluZ3M6IHN0cmluZ30pID0+IHZvaWQ7XG5cdH0gPSB7fSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPHRleHRhcmVhPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS5hdHRyKCdyb3dzJywgJzEwJyk7XG5cdFx0Y29uc3QgYXBwbHlCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU2V0dGluZy1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TZXR0aW5nLUNhbmNlbCcpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY2FuY2VsJykpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSAkKCc8ZGl2PicpLmFwcGVuZChpbnB1dCkuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGFwcGx5QnRuKS5hcHBlbmQoY2FuY2VsQnRuKTsgLy8g5ou85o6lXG5cblx0XHRjb25zdCBkaWFsb2cgPSB0aGlzLmNyZWF0ZURpYWxvZ0JveChpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3NfZGVzYycpLCBjb250ZW50LCA2MDAsICgpID0+IHtcblx0XHRcdGlmIChsb2NhbFN0b3JhZ2VbJ1dpa2lwbHVzX1NldHRpbmdzJ10pIHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS52YWwobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKTtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbChKU09OLnN0cmluZ2lmeShzZXR0aW5ncywgbnVsbCwgMikpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvLyBpZ25vcmVcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS5hdHRyKCdwbGFjZWhvbGRlcicsIGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19wbGFjZWhvbGRlcicpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRhcHBseUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBzYXZlZEJhbm5lciA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJhbm5lcicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX3NhdmVkJykpO1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSAkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbCgpIGFzIHN0cmluZztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdG9uU3VibWl0KHtzZXR0aW5nc30pO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoJycpLmFwcGVuZChzYXZlZEJhbm5lcik7XG5cdFx0XHRcdGF3YWl0IHNsZWVwKDE1MDApO1xuXHRcdFx0XHR0aGlzLmhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Tm90aWZpY2F0aW9uLmVycm9yKGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19ncmFtbWFyX2Vycm9yJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNhbmNlbEJ0bi5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyk7XG5cdFx0fSk7XG5cdH1cblxuXHRoaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cgPSAkKCdib2R5JykpIHtcblx0XHRkaWFsb2cuZmluZCgnLldpa2lwbHVzLUludGVyQm94LUNsb3NlJykudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdGJpbmRQcmVsb2FkRXZlbnRzKG9uUHJlbG9hZDogeyhhcmcwOiB7c2VjdGlvbk51bWJlcjogbnVtYmVyfSk6IHZvaWR9KSB7XG5cdFx0JCgnI3RvYycpXG5cdFx0XHQuY2hpbGRyZW4oJ3VsJylcblx0XHRcdC5maW5kKCdhJylcblx0XHRcdC5lYWNoKChpKSA9PiB7XG5cdFx0XHRcdCQodGhpcykub24oJ21vdXNlb3ZlcicsICgpID0+IHtcblx0XHRcdFx0XHQkKHRoaXMpLm9mZignbW91c2VvdmVyJyk7XG5cdFx0XHRcdFx0b25QcmVsb2FkKHtcblx0XHRcdFx0XHRcdHNlY3Rpb25OdW1iZXI6IGkgKyAxLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVSSgpO1xuIiwgIi8qKlxuICogV2lraXBsdXNcbiAqIEVyaWRhbnVzIFNvcmEgPHNvcmFAc291bmQubW9lPlxuICovXG5pbXBvcnQgJy4vd2lraXBsdXMubGVzcyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCBMb2cgZnJvbSAnLi91dGlscy9sb2cnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL2NvcmUvbm90aWZpY2F0aW9uJztcbmltcG9ydCBQYWdlIGZyb20gJy4vY29yZS9wYWdlJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3V0aWxzL3NldHRpbmdzJztcbmltcG9ydCBVSSBmcm9tICcuL2NvcmUvdWknO1xuaW1wb3J0IFdpa2kgZnJvbSAnLi9zZXJ2aWNlcy93aWtpJztcbmltcG9ydCBpMThuIGZyb20gJy4vdXRpbHMvaTE4bic7XG5cbiQoYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBQYWdlczogUmVjb3JkPG51bWJlciwgUGFnZT4gPSB7fTtcblx0Y29uc3QgaXNDdXJyZW50UGFnZUVtcHR5ID0gJCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggPiAwICYmIENvbnN0YW50cy5hcnRpY2xlSWQgPT09IDA7XG5cblx0LyoqXG5cdCAqIEdldCBwYWdlIGluc3RhbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMucmV2aXNpb25JZCDpobXpnaLkv67orqLniYjmnKzlj7dcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy50aXRsZSDpobXpnaLmoIfpophcblx0ICovXG5cdGNvbnN0IGdldFBhZ2UgPSBhc3luYyAoe3JldmlzaW9uSWQgPSAwLCB0aXRsZX06IHtyZXZpc2lvbklkPzogbnVtYmVyOyB0aXRsZTogc3RyaW5nfSkgPT4ge1xuXHRcdGlmIChQYWdlc1tyZXZpc2lvbklkXSkge1xuXHRcdFx0cmV0dXJuIFBhZ2VzW3JldmlzaW9uSWRdO1xuXHRcdH1cblx0XHRjb25zdCBuZXdQYWdlID0gbmV3IFBhZ2Uoe1xuXHRcdFx0cmV2aXNpb25JZCxcblx0XHRcdHRpdGxlLFxuXHRcdH0pO1xuXHRcdGF3YWl0IG5ld1BhZ2UuaW5pdCgpO1xuXHRcdFBhZ2VzW3JldmlzaW9uSWRdID0gbmV3UGFnZTtcblx0XHRyZXR1cm4gUGFnZXNbcmV2aXNpb25JZF07XG5cdH07XG5cblx0TG9nLmluZm8oYFdpa2lwbHVzIG5vdyBsb2FkaW5nLiBWZXJzaW9uOiAke0NvbnN0YW50cy52ZXJzaW9ufWApO1xuXG5cdGlmICghd2luZG93Lm13KSB7XG5cdFx0Y29uc29sZS5sb2coJ01lZGlhd2lraSBKYXZhU2NyaXB0IG5vdCBsb2FkZWQgb3Igbm90IGEgTWVkaWF3aWtpIHdlYnNpdGUuJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmICghQ29uc3RhbnRzLnVzZXJHcm91cHM/LmluY2x1ZGVzKCdhdXRvY29uZmlybWVkJykgJiYgIUNvbnN0YW50cy51c2VyR3JvdXBzPy5pbmNsdWRlcygnY29uZmlybWVkJykpIHtcblx0XHROb3RpZmljYXRpb24uZXJyb3IoaTE4bi50cmFuc2xhdGUoJ25vdF9hdXRvY29uZmlybWVkX3VzZXInKSk7XG5cdFx0TG9nLmluZm8oaTE4bi50cmFuc2xhdGUoJ25vdF9hdXRvY29uZmlybWVkX3VzZXInKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFDb25zdGFudHMuaXNBcnRpY2xlIHx8IENvbnN0YW50cy5hY3Rpb24gIT09ICd2aWV3Jykge1xuXHRcdExvZy5pbmZvKCdOb3QgYW4gZWRpdGFibGUgcGFnZS4gU3RvcCBpbml0aWFsaXphdGlvbi4nKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBJbml0aWFsaXplIGN1cnJlbnQgcGFnZSDpu5jorqTliJ3lp4vljJblvZPliY3pobXpnaJcblx0d2luZG93Ll9XaWtpcGx1c1BhZ2VzID0gUGFnZXM7XG5cdGNvbnN0IGN1cnJlbnRQYWdlTmFtZSA9IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWU7XG5cdGNvbnN0IHJldmlzaW9uSWQgPSBDb25zdGFudHMucmV2aXNpb25JZDtcblx0Y29uc3QgY3VycmVudFBhZ2UgPSBhd2FpdCBnZXRQYWdlKHtcblx0XHRyZXZpc2lvbklkLFxuXHRcdHRpdGxlOiBjdXJyZW50UGFnZU5hbWUsXG5cdH0pO1xuXG5cdGNvbnN0IGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQgPSBhc3luYyAoe1xuXHRcdHNlY3Rpb25OdW1iZXIsXG5cdFx0c2VjdGlvbk5hbWUsXG5cdFx0dGFyZ2V0UGFnZU5hbWUsXG5cdH06IE9uQ2xpY2tQYXJhbXMpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCBpc090aGVyUGFnZSA9IHRhcmdldFBhZ2VOYW1lICE9PSBjdXJyZW50UGFnZU5hbWU7XG5cdFx0aWYgKGlzT3RoZXJQYWdlICYmIENvbnN0YW50cy5sYXRlc3RSZXZpc2lvbklkICE9PSBDb25zdGFudHMucmV2aXNpb25JZCkge1xuXHRcdFx0Ly8g5Zyo5Y6G5Y+y54mI5pys57yW6L6R5YW25LuW6aG16Z2i5pyJ6Zeu6aKYIOaaguaXtuS4jeaUr+aMgVxuXHRcdFx0TG9nLmVycm9yKCdjcm9zc19wYWdlX2hpc3RvcnlfcmV2aXNpb25fZWRpdF93YXJuaW5nJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHJldmlzaW9uSWQgPSBpc090aGVyUGFnZSA/IGF3YWl0IFdpa2kuZ2V0TGF0ZXN0UmV2aXNpb25JZEZvclBhZ2UodGFyZ2V0UGFnZU5hbWUpIDogQ29uc3RhbnRzLnJldmlzaW9uSWQ7XG5cblx0XHRjb25zdCBwYWdlID0gYXdhaXQgZ2V0UGFnZSh7cmV2aXNpb25JZCwgdGl0bGU6IHRhcmdldFBhZ2VOYW1lfSk7XG5cdFx0Y29uc3QgY3VzdG9tU3VtbWFyeSA9IFNldHRpbmdzLmdldFNldHRpbmcoJ2RlZmF1bHRTdW1tYXJ5Jywge1xuXHRcdFx0c2VjdGlvbk5hbWU6IHNlY3Rpb25OYW1lIGFzIHN0cmluZyxcblx0XHRcdHNlY3Rpb25OdW1iZXI6IHNlY3Rpb25OdW1iZXIgYXMgbnVtYmVyLFxuXHRcdFx0c2VjdGlvblRhcmdldE5hbWU6IHRhcmdldFBhZ2VOYW1lLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHN1bW1hcnkgPVxuXHRcdFx0Y3VzdG9tU3VtbWFyeSB8fFxuXHRcdFx0KHNlY3Rpb25OYW1lXG5cdFx0XHRcdD8gYC8qICR7c2VjdGlvbk5hbWV9ICovICR7aTE4bi50cmFuc2xhdGUoJ2RlZmF1bHRfc3VtbWFyeV9zdWZmaXgnKX1gXG5cdFx0XHRcdDogaTE4bi50cmFuc2xhdGUoJ2RlZmF1bHRfc3VtbWFyeV9zdWZmaXgnKSk7XG5cdFx0Y29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdE5vdGlmaWNhdGlvbi5zdWNjZXNzKGkxOG4udHJhbnNsYXRlKCdsb2FkaW5nJykpO1xuXHRcdH0sIDIwMCk7XG5cdFx0Y29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBhd2FpdCBwYWdlLmdldFdpa2lUZXh0KHtcblx0XHRcdHNlY3Rpb246IHNlY3Rpb25OdW1iZXIgYXMgbnVtYmVyLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGlzRWRpdEhpc3RvcnlSZXZpc2lvbiA9ICFpc090aGVyUGFnZSAmJiBDb25zdGFudHMubGF0ZXN0UmV2aXNpb25JZCAhPT0gQ29uc3RhbnRzLnJldmlzaW9uSWQ7XG5cdFx0Y29uc3QgZXNjVG9FeGl0ID1cblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY190b19leGl0X3F1aWNrZWRpdCcpID09PSB0cnVlIHx8IC8vIOWFvOWuueiAgeiuvue9rmtleVxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjX3RvX2V4aXRfcXVpY2tlZGl0JykgPT09ICd0cnVlJyB8fFxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjVG9FeGl0UXVpY2tFZGl0JykgPT09IHRydWUgfHxcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY1RvRXhpdFF1aWNrRWRpdCcpID09PSAndHJ1ZSc7XG5cdFx0Y29uc3QgY3VzdG9tRWRpdFRhZ3MgPSBTZXR0aW5ncy5nZXRTZXR0aW5nKCdjdXN0b21fZWRpdF90YWdzJyk7XG5cdFx0Y29uc3QgZGVmYXVsdEVkaXRUYWdzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGNvbnN0IGVkaXRUYWdzID0gY3VzdG9tRWRpdFRhZ3M/Lmxlbmd0aCA/IGN1c3RvbUVkaXRUYWdzIDogZGVmYXVsdEVkaXRUYWdzO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0Tm90aWZpY2F0aW9uLmVtcHR5KCk7XG5cblx0XHRpZiAoaXNFZGl0SGlzdG9yeVJldmlzaW9uKSB7XG5cdFx0XHROb3RpZmljYXRpb24ud2FybmluZyhpMThuLnRyYW5zbGF0ZSgnaGlzdG9yeV9lZGl0X3dhcm5pbmcnKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2hvdWxkU2hvd0NyZWF0ZVBhZ2VUaXAgPSBpc090aGVyUGFnZSA/ICFyZXZpc2lvbklkIDogaXNDdXJyZW50UGFnZUVtcHR5O1xuXG5cdFx0VUkuc2hvd1F1aWNrRWRpdFBhbmVsKHtcblx0XHRcdHRpdGxlOiBgJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3RvcGJ0bicpfSR7XG5cdFx0XHRcdGlzRWRpdEhpc3RvcnlSZXZpc2lvbiA/IGkxOG4udHJhbnNsYXRlKCdoaXN0b3J5X2VkaXRfd2FybmluZycpIDogJydcblx0XHRcdH1gLFxuXHRcdFx0Y29udGVudDogc2hvdWxkU2hvd0NyZWF0ZVBhZ2VUaXAgPyBpMThuLnRyYW5zbGF0ZSgnY3JlYXRlX3BhZ2VfdGlwJykgOiBzZWN0aW9uQ29udGVudCxcblx0XHRcdHN1bW1hcnksXG5cdFx0XHRvbkJhY2s6IFVJLmhpZGVRdWlja0VkaXRQYW5lbCxcblx0XHRcdG9uUGFyc2U6ICh3aWtpVGV4dCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcGFnZS5wYXJzZVdpa2lUZXh0KHdpa2lUZXh0KTtcblx0XHRcdH0sXG5cdFx0XHRvbkVkaXQ6IGFzeW5jICh7Y29udGVudCwgc3VtbWFyeSwgaXNNaW5vckVkaXR9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGVkaXRQYXlsb2FkOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0XHRjb250ZW50LFxuXHRcdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdC4uLihzZWN0aW9uTnVtYmVyID09PSAtMSA/IHt9IDoge3NlY3Rpb246IHNlY3Rpb25OdW1iZXJ9KSxcblx0XHRcdFx0XHRcdC4uLihlZGl0VGFncy5sZW5ndGggPyB7dGFnczogZWRpdFRhZ3Muam9pbignfCcpfSA6IHt9KSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAoaXNNaW5vckVkaXQpIHtcblx0XHRcdFx0XHRlZGl0UGF5bG9hZC5jb25maWcubWlub3IgPSAndHJ1ZSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWRpdFBheWxvYWQuY29uZmlnLm5vdG1pbm9yID0gJ3RydWUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF3YWl0IHBhZ2UuZWRpdChlZGl0UGF5bG9hZCk7XG5cdFx0XHR9LFxuXHRcdFx0ZXNjRXhpdDogZXNjVG9FeGl0LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVNpbXBsZVJlZGlyZWN0QnV0dG9uQ2xpY2tlZCA9ICgpID0+IHtcblx0XHRVSS5zaG93U2ltcGxlUmVkaXJlY3RQYW5lbCh7XG5cdFx0XHRvbkVkaXQ6IGFzeW5jICh7dGl0bGUsIHN1bW1hcnksIGZvcmNlT3ZlcndyaXRlID0gZmFsc2V9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBhZ2UgPSBhd2FpdCBnZXRQYWdlKHt0aXRsZX0pO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50UGFnZU5hbWUgPSBDb25zdGFudHMuY3VycmVudFBhZ2VOYW1lO1xuXHRcdFx0XHRjb25zdCBjb250ZW50bW9kZWwgPSBwYWdlLmNvbnRlbnRtb2RlbDtcblx0XHRcdFx0aWYgKHN1bW1hcnkgPT09ICcnKSB7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9mcm9tX3N1bW1hcnknLCBbdGl0bGUsIGN1cnJlbnRQYWdlTmFtZV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnQgPSAoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBjb250ZW50O1xuXHRcdFx0XHRcdHN3aXRjaCAoY29udGVudG1vZGVsKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdqYXZhc2NyaXB0Jzpcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IGAvKiAjUkVESVJFQ1QgKi9tdy5sb2FkZXIubG9hZChcIiR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke1xuXHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uLmhvc3Rcblx0XHRcdFx0XHRcdFx0fSR7Q29uc3RhbnRzLnNjcmlwdFBhdGh9L2luZGV4LnBocD90aXRsZT0ke213LnV0aWwud2lraVVybGVuY29kZShcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZU5hbWVcblx0XHRcdFx0XHRcdFx0KX0mYWN0aW9uPXJhdyZjdHlwZT10ZXh0L2phdmFzY3JpcHRcIik7YDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdjc3MnOlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYC8qICNSRURJUkVDVCAqL0BpbXBvcnQgdXJsKCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke1xuXHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uLmhvc3Rcblx0XHRcdFx0XHRcdFx0fSR7Q29uc3RhbnRzLnNjcmlwdFBhdGh9L2luZGV4LnBocD90aXRsZT0ke213LnV0aWwud2lraVVybGVuY29kZShcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZU5hbWVcblx0XHRcdFx0XHRcdFx0KX0mYWN0aW9uPXJhdyZjdHlwZT10ZXh0L2Nzcyk7YDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdTY3JpYnVudG8nOlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYHJldHVybiByZXF1aXJlIFtbJHtjdXJyZW50UGFnZU5hbWV9XV1gO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3dpa2l0ZXh0Jzpcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSBgI1JFRElSRUNUIFtbJHtjdXJyZW50UGFnZU5hbWV9XV1gO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHRcdH0pKCk7XG5cdFx0XHRcdGNvbnN0IHBheWxvYWQ6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdFx0XHRcdGNvbnRlbnQsXG5cdFx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmICghZm9yY2VPdmVyd3JpdGUpIHtcblx0XHRcdFx0XHRwYXlsb2FkLmNvbmZpZy5jcmVhdGVvbmx5ID0gJ3RydWUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF3YWl0IHBhZ2UuZWRpdChwYXlsb2FkKTtcblx0XHRcdH0sXG5cdFx0XHRvblN1Y2Nlc3M6ICh7dGl0bGV9KSA9PiB7XG5cdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBDb25zdGFudHMuYXJ0aWNsZVBhdGgucmVwbGFjZSgvXFwkMS9naSwgdGl0bGUpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTZXR0aW5nc0J1dHRvbkNsaWNrZWQgPSAoKSA9PiB7XG5cdFx0VUkuc2hvd1NldHRpbmdzUGFuZWwoe1xuXHRcdFx0b25TdWJtaXQ6ICh7c2V0dGluZ3N9KSA9PiB7XG5cdFx0XHRcdEpTT04ucGFyc2Uoc2V0dGluZ3MpO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfU2V0dGluZ3MnLCBzZXR0aW5ncyk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVByZWxvYWQgPSBhc3luYyAoe3NlY3Rpb25OdW1iZXJ9OiB7c2VjdGlvbk51bWJlcjogbnVtYmVyfSkgPT4ge1xuXHRcdGF3YWl0IGN1cnJlbnRQYWdlLmdldFdpa2lUZXh0KHtcblx0XHRcdHNlY3Rpb246IHNlY3Rpb25OdW1iZXIsXG5cdFx0fSk7XG5cdH07XG5cblx0VUkuaW5zZXJ0VG9wUXVpY2tFZGl0RW50cnkoaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmluc2VydFNlY3Rpb25RdWlja0VkaXRFbnRyaWVzKGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRMaW5rRWRpdEVudHJpZXMoaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmluc2VydFNpbXBsZVJlZGlyZWN0QnV0dG9uKGhhbmRsZVNpbXBsZVJlZGlyZWN0QnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmluc2VydFNldHRpbmdzUGFuZWxCdXR0b24oaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkKTtcblx0VUkuYmluZFByZWxvYWRFdmVudHMoaGFuZGxlUHJlbG9hZCk7XG59KTtcbiIsICJpbXBvcnQgJy4vV2lraXBsdXMubGVzcyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Jlc2l6ZVdpa2lwbHVzfSBmcm9tICcuL3Jlc2l6ZSc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oYXN5bmMgZnVuY3Rpb24gV2lraXBsdXMoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dJc0FydGljbGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dJc0FydGljbGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7J3Zpc3VhbGVkaXRvci1lbmFibGUnOiBpc1ZlRW5hYmxlfSA9IG13LnVzZXIub3B0aW9ucy5nZXQoKSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcblxuXHQvKiBzZWUgPGh0dHBzOi8vZ2l0aHViLmNvbS9XaWtpcGx1cy9XaWtpcGx1cy9pc3N1ZXMvNjU+ICovXG5cdGlmIChpc1ZlRW5hYmxlKSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQudmlzdWFsRWRpdG9yLmNvcmUnKTtcblx0fVxuXG5cdC8vIGltcG9ydCBtYWluIGZ1bmN0aW9uXG5cdGF3YWl0IGltcG9ydCgnLi9tb2R1bGVzL2luZGV4Jyk7XG5cblx0Ly8gcmVzaXplIFdpa2lwbHVzIHdpbmRvd1xuXHRyZXNpemVXaWtpcGx1cygkYm9keSk7XG59KTtcbiIsICJjb25zdCByZXNpemVXaWtpcGx1cyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblx0XHRjb25zdCAkd2lraXBsdXNJbnRlcmJveCA9ICRib2R5LmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveCcpO1xuXHRcdGlmICgkd2lraXBsdXNJbnRlcmJveCkge1xuXHRcdFx0Y29uc3QgY2xpZW50V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRcdGNvbnN0IGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHRcdGNvbnN0IGRpYWxvZ1dpZHRoID0gTWF0aC5taW4oY2xpZW50V2lkdGgsIDYwMCk7XG5cdFx0XHRjb25zdCBzY3JvbGxUb3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSB8fCAwO1xuXHRcdFx0JHdpa2lwbHVzSW50ZXJib3guY3NzKCdtYXJnaW4tbGVmdCcsIGNsaWVudFdpZHRoIC8gMiAtIGRpYWxvZ1dpZHRoIC8gMik7XG5cdFx0XHQkd2lraXBsdXNJbnRlcmJveC5jc3MoJ3RvcCcsIHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCAqIDAuMik7XG5cdFx0XHQkd2lraXBsdXNJbnRlcmJveC5jc3MoJ21heC13aWR0aCcsIGBjYWxjKCR7d2luZG93V2lkdGh9cHggLSAyZW0pYCk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cmVzaXplV2lraXBsdXN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7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UyxJQUFJLGFBQUEsUUFBQXBHLE9BQXFCdVksYUFBVyxXQUFBLENBQVc7SUFDbEU7RUFDRCxDQUFDO0FBQ0Y7O0FEVkEsTUFBQSxHQUFLSixrQkFBQU0sU0FBUSxFQUFFQyxLQUFBLDRCQUFBO0FBQUEsTUFBQUMsWUFBQWxXLGtCQUFLLFdBQXdCNlYsT0FBK0M7QUFDMUYsVUFBTTtNQUFDTTtNQUFVQztJQUFXLElBQUk1WixHQUFHQyxPQUFPQyxJQUFJO0FBQzlDLFFBQUl5WixhQUFhLFVBQVUsQ0FBQ0MsYUFBYTtBQUN4QztJQUNEO0FBRUEsVUFBTTtNQUFDLHVCQUF1QkM7SUFBVSxJQUFJN1osR0FBRzRNLEtBQUtrTixRQUFRNVosSUFBSTtBQUdoRSxRQUFJMlosWUFBWTtBQUNmLFlBQU03WixHQUFHME0sT0FBT0MsTUFBTSx1QkFBdUI7SUFDOUM7QUFHQSxVQUFNSixRQUFBb0MsUUFBQSxFQUFBOEssS0FBQSxPQUFBbkQsYUFBQSxHQUFBRCxnQkFBQTtBQUdOK0MsbUJBQWVDLEtBQUs7RUFDckIsQ0FBQztBQUFBLFdBbEJrQ1UsU0FBQUMsS0FBQTtBQUFBLFdBQUFOLFVBQUFqUCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUFxUDtBQUFBLEdBQUEsQ0FrQmxDOyIsCiAgIm5hbWVzIjogWyJpbml0X3dpa2lwbHVzIiwgIl9fZXNtIiwgIkNvbnN0YW50cyIsICJjb25zdGFudHNfZGVmYXVsdCIsICJpbml0X2NvbnN0YW50cyIsICJ2ZXJzaW9uIiwgImlzQXJ0aWNsZSIsICJ3aW5kb3ciLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjdXJyZW50UGFnZU5hbWUiLCAicmVwbGFjZSIsICJhcnRpY2xlSWQiLCAicmV2aXNpb25JZCIsICJsYXRlc3RSZXZpc2lvbklkIiwgImFydGljbGVQYXRoIiwgInNjcmlwdFBhdGgiLCAiYWN0aW9uIiwgInNraW4iLCAidXNlckdyb3VwcyIsICJ3aWtpSWQiLCAidXNlckFnZW50IiwgImNvbmNhdCIsICJJMThuIiwgImkxOG5fZGVmYXVsdCIsICJpbml0X2kxOG4iLCAibGFuZ3VhZ2UiLCAiaTE4bkRhdGEiLCAic2Vzc2lvblVwZGF0ZUxvZyIsICJjb25zdHJ1Y3RvciIsICJKU09OIiwgInBhcnNlIiwgImxvY2FsU3RvcmFnZSIsICJuYXZpZ2F0b3IiLCAidG9Mb3dlckNhc2UiLCAiaTE4bkNhY2hlIiwgImdldEl0ZW0iLCAiX2kiLCAiX09iamVjdCRrZXlzIiwgIk9iamVjdCIsICJrZXlzIiwgImxlbmd0aCIsICJrZXkiLCAic2V0SXRlbSIsICJ0cmFuc2xhdGUiLCAicGxhY2Vob2xkZXJzIiwgInJlc3VsdCIsICJpMThuRGF0YUxhbmciLCAibG9hZExhbmd1YWdlIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJlbnRyaWVzIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImluZGV4IiwgInBsYWNlaG9sZGVyIiwgInZhbHVlIiwgImVyciIsICJlIiwgImYiLCAiX3RoaXMiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiaW5jbHVkZXMiLCAicmVzcG9uc2UiLCAiZmV0Y2giLCAianNvbiIsICJub3dWZXJzaW9uIiwgInB1c2giLCAiX192ZXJzaW9uIiwgImNvbnNvbGUiLCAiaW5mbyIsICJzdHJpbmdpZnkiLCAiV2lraXBsdXNFcnJvciIsICJMb2ciLCAibG9nX2RlZmF1bHQiLCAiaW5pdF9sb2ciLCAiRXJyb3IiLCAiY29kZSIsICJtZXNzYWdlIiwgImRlYnVnIiwgImVycm9yIiwgImVycm9yQ29kZSIsICJwYXlsb2FkcyIsICJ0ZW1wbGF0ZSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJpIiwgInYiLCAiUmVnRXhwIiwgIk5vdGlmaWNhdGlvbiIsICJub3RpZmljYXRpb25fZGVmYXVsdCIsICJpbml0X25vdGlmaWNhdGlvbiIsICJpbml0IiwgIiQiLCAiYXBwZW5kIiwgImRpc3BsYXkiLCAidGV4dCIsICJ0eXBlIiwgImNhbGxiYWNrIiwgImFkZENsYXNzIiwgImZpbmQiLCAibGFzdCIsICJmYWRlSW4iLCAiYmluZCIsICJjbGVhciIsICJzZWxmIiwgIm9uIiwgInNsaWRlTGVmdCIsICJzdWNjZXNzIiwgIndhcm5pbmciLCAiY2hpbGRyZW4iLCAiZmlyc3QiLCAiZmFkZU91dCIsICJyZW1vdmUiLCAic2V0VGltZW91dCIsICJlbXB0eSIsICJlYWNoIiwgImVsZSIsICJkZWxheSIsICJzcGVlZCIsICJjc3MiLCAiYW5pbWF0ZSIsICJsZWZ0IiwgIlJlcXVlc3RzIiwgInJlcXVlc3RzX2RlZmF1bHQiLCAiaW5pdF9yZXF1ZXN0cyIsICJiYXNlIiwgImxvY2F0aW9uIiwgInByb3RvY29sIiwgImhvc3QiLCAicXVlcnkiLCAidXJsIiwgIlVSTCIsICJfaTIiLCAiX09iamVjdCRrZXlzMiIsICJBcnJheSIsICJpc0FycmF5IiwgInNlYXJjaFBhcmFtcyIsICJqb2luIiwgImNyZWRlbnRpYWxzIiwgImhlYWRlcnMiLCAicG9zdCIsICJwYXlsb2FkIiwgImZvcm0iLCAiRm9ybURhdGEiLCAiX2kzIiwgIl9PYmplY3QkZW50cmllcyIsICJtZXRob2QiLCAiYm9keSIsICJXaWtpIiwgIndpa2lfZGVmYXVsdCIsICJpbml0X3dpa2kiLCAicGFnZUluZm9DYWNoZSIsICJnZXRFZGl0VG9rZW4iLCAibWV0YSIsICJmb3JtYXQiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJnZXRQYWdlSW5mbyIsICJfeCIsICJfdGhpczIiLCAidGl0bGUiLCAicGFyYW1zIiwgInByb3AiLCAicnZwcm9wIiwgInJldmlkcyIsICJ0aW1lc3RhbXAiLCAicmV2aWQiLCAiY29udGVudG1vZGVsIiwgInRpdGxlcyIsICJwYWdlcyIsICJwYWdlS2V5IiwgInBhZ2VJbmZvIiwgInJldmlzaW9ucyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0V2lraVRleHQiLCAiX3gyIiwgInNlY3Rpb24iLCAicnZzZWN0aW9uIiwgInBhcnNlV2lraVRleHQiLCAiX3gzIiwgIndpa2l0ZXh0IiwgIl9jb25maWciLCAicHN0IiwgImVkaXQiLCAiX3g0IiwgImNvbnRlbnQiLCAiZWRpdFRva2VuIiwgImFkZGl0aW9uYWxDb25maWciLCAidG9rZW4iLCAiYmFzZXRpbWVzdGFtcCIsICJnZXRMYXRlc3RSZXZpc2lvbklkRm9yUGFnZSIsICJfdGhpczMiLCAiUGFnZSIsICJwYWdlX2RlZmF1bHQiLCAiaW5pdF9wYWdlIiwgImluaXRlZCIsICJpc05ld1BhZ2UiLCAic2VjdGlvbkNhY2hlIiwgIl90aGlzNCIsICJwcm9taXNlQXJyIiwgImdldFRpbWVzdGFtcCIsICJnZXRDb250ZW50TW9kZWwiLCAiUHJvbWlzZSIsICJhbGwiLCAiX3RoaXM1IiwgImxvYWRlciIsICJ1c2luZyIsICJ1c2VyIiwgIl90aGlzNiIsICJfdGhpczciLCAiX3RoaXM4IiwgInNlYyIsICJ3aWtpVGV4dCIsICJfdGhpczkiLCAiX3RoaXMwIiwgImNyZWF0ZW9ubHkiLCAiU2V0dGluZ3MiLCAic2V0dGluZ3NfZGVmYXVsdCIsICJpbml0X3NldHRpbmdzIiwgImdldFNldHRpbmciLCAib2JqZWN0IiwgInciLCAic2V0dGluZ3MiLCAiY3VzdG9tU2V0dGluZ0Z1bmN0aW9uIiwgIkZ1bmN0aW9uIiwgIl9pNCIsICJfT2JqZWN0JGtleXMzIiwgImtleTIiLCAicGFyc2VRdWVyeSIsICJyZWciLCAibWF0Y2giLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAiaW5pdF9oZWxwZXJzIiwgInNsZWVwIiwgInNsZWVwX2RlZmF1bHQiLCAiaW5pdF9zbGVlcCIsICJ0aW1lIiwgInJlc29sdmUiLCAiVUkiLCAidWlfZGVmYXVsdCIsICJpbml0X3VpIiwgInF1aWNrRWRpdFBhbmVsVmlzaWJsZSIsICJzY3JvbGxUb3AiLCAiY3JlYXRlRGlhbG9nQm94IiwgIndpZHRoIiwgImNsaWVudFdpZHRoIiwgImlubmVyV2lkdGgiLCAiY2xpZW50SGVpZ2h0IiwgImlubmVySGVpZ2h0IiwgImRpYWxvZ1dpZHRoIiwgIk1hdGgiLCAibWluIiwgImRpYWxvZ0JveCIsICJ0b3AiLCAiZG9jdW1lbnQiLCAiaHRtbCIsICJwYXJlbnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJvbmJlZm9yZXVubG9hZCIsICJiaW5kRHJhZ2dpbmciLCAiZWxlbWVudCIsICJfZWxlbWVudCRwYXJlbnQkb2Zmc2UiLCAiX2VsZW1lbnQkcGFyZW50JG9mZnNlMiIsICJiYXNlWCIsICJjbGllbnRYIiwgImJhc2VZIiwgImNsaWVudFkiLCAiYmFzZU9mZnNldFgiLCAib2Zmc2V0IiwgImJhc2VPZmZzZXRZIiwgImUyIiwgInVuYmluZCIsICJvZmYiLCAiYWRkRnVuY3Rpb25CdXR0b24iLCAiaWQiLCAiYnV0dG9uIiwgImF0dHIiLCAiaW5zZXJ0U2ltcGxlUmVkaXJlY3RCdXR0b24iLCAib25DbGljayIsICJpbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uIiwgImluc2VydFRvcFF1aWNrRWRpdEVudHJ5IiwgInRvcEJ0biIsICJ0b3BCdG5MaW5rIiwgInNlY3Rpb25OdW1iZXIiLCAidGFyZ2V0UGFnZU5hbWUiLCAiYWZ0ZXIiLCAiaW5zZXJ0U2VjdGlvblF1aWNrRWRpdEVudHJpZXMiLCAic2VjdGlvbkJ0biIsICJlZGl0VVJMIiwgInNlY3Rpb25MYWJlbCIsICJzZWN0aW9uVGFyZ2V0TGFiZWwiLCAic2VjdGlvblRhcmdldE5hbWUiLCAiY2xvbmVOb2RlIiwgInByZXYiLCAiY2xvbmUiLCAic2VjdGlvbk5hbWUiLCAidHJpbSIsICJfc2VjdGlvbkJ0biIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiYmVmb3JlIiwgImluc2VydExpbmtFZGl0RW50cmllcyIsICJocmVmIiwgImNsYXNzIiwgIl9OdW1iZXIkcGFyc2VJbnQiLCAic2hvd1F1aWNrRWRpdFBhbmVsIiwgInN1bW1hcnkiLCAib25CYWNrIiwgIm9uUGFyc2UiLCAib25FZGl0IiwgImVzY0V4aXQiLCAiaGlkZVF1aWNrRWRpdFBhbmVsIiwgImJhY2tCdG4iLCAianVtcEJ0biIsICJpbnB1dEJveCIsICJwcmV2aWV3Qm94IiwgInN1bW1hcnlCb3giLCAiZWRpdFN1Ym1pdEJ0biIsICJwcmV2aWV3U3VibWl0QnRuIiwgImlzTWlub3JFZGl0IiwgIm1hcmdpbiIsICJlZGl0Qm9keSIsICJ2YWwiLCAicHJlbG9hZEJhbm5lciIsICJ0aW1lciIsICJEYXRlIiwgIm5vdyIsICJlZGl0QmFubmVyIiwgImlzIiwgInVzZVRpbWUiLCAidG9TdHJpbmciLCAicmVsb2FkIiwgImxvZyIsICJjdHJsS2V5IiwgIndoaWNoIiwgInNoaWZ0S2V5IiwgInRyaWdnZXIiLCAicHJldmVudERlZmF1bHQiLCAic3RvcFByb3BhZ2F0aW9uIiwgInNob3dTaW1wbGVSZWRpcmVjdFBhbmVsIiwgIm9uU3VjY2VzcyIsICJfdGhpczEiLCAiaW5wdXQiLCAic3VtbWFyeUlucHV0VGl0bGUiLCAic3VtbWFyeUlucHV0IiwgImFwcGx5QnRuIiwgImNhbmNlbEJ0biIsICJjb250aW51ZUJ0biIsICJkaWFsb2ciLCAiZm9yY2VPdmVyd3JpdGUiLCAiaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwiLCAiZXJyb3IyIiwgInNob3dTZXR0aW5nc1BhbmVsIiwgIm9uU3VibWl0IiwgIl90aGlzMTAiLCAic2F2ZWRCYW5uZXIiLCAiaGlkZVNldHRpbmdzUGFuZWwiLCAiYmluZFByZWxvYWRFdmVudHMiLCAib25QcmVsb2FkIiwgIm1vZHVsZXNfZXhwb3J0cyIsICJpbml0X21vZHVsZXMiLCAiX2NvbnN0YW50c19kZWZhdWx0JHVzIiwgIl9jb25zdGFudHNfZGVmYXVsdCR1czIiLCAiUGFnZXMiLCAiaXNDdXJyZW50UGFnZUVtcHR5IiwgImdldFBhZ2UiLCAiX3JlZjAiLCAicmV2aXNpb25JZDIiLCAibmV3UGFnZSIsICJfeDUiLCAiX1dpa2lwbHVzUGFnZXMiLCAiY3VycmVudFBhZ2UiLCAiaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCIsICJfcmVmMSIsICJpc090aGVyUGFnZSIsICJwYWdlIiwgImN1c3RvbVN1bW1hcnkiLCAic2VjdGlvbkNvbnRlbnQiLCAiaXNFZGl0SGlzdG9yeVJldmlzaW9uIiwgImVzY1RvRXhpdCIsICJjdXN0b21FZGl0VGFncyIsICJkZWZhdWx0RWRpdFRhZ3MiLCAiZWRpdFRhZ3MiLCAiY2xlYXJUaW1lb3V0IiwgInNob3VsZFNob3dDcmVhdGVQYWdlVGlwIiwgIl9yZWYxMCIsICJzdW1tYXJ5MiIsICJlZGl0UGF5bG9hZCIsICJ0YWdzIiwgIm1pbm9yIiwgIm5vdG1pbm9yIiwgIl94NyIsICJfeDYiLCAiaGFuZGxlU2ltcGxlUmVkaXJlY3RCdXR0b25DbGlja2VkIiwgIl9yZWYxMSIsICJjdXJyZW50UGFnZU5hbWUyIiwgImNvbnRlbnQyIiwgInV0aWwiLCAid2lraVVybGVuY29kZSIsICJfeDgiLCAiaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkIiwgImhhbmRsZVByZWxvYWQiLCAiX3JlZjEyIiwgIl94OSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgInJlc2l6ZVdpa2lwbHVzIiwgIiRib2R5IiwgIndpbmRvd1dpZHRoIiwgIiR3aWtpcGx1c0ludGVyYm94IiwgImdldEJvZHkiLCAidGhlbiIsICJfV2lraXBsdXMiLCAid2dBY3Rpb24iLCAid2dJc0FydGljbGUiLCAiaXNWZUVuYWJsZSIsICJvcHRpb25zIiwgIldpa2lwbHVzIiwgIl94MCJdCn0K
