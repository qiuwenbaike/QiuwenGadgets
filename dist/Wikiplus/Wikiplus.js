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
          language = (navigator.language || navigator.browserLanguage).replace(/han[st]-?/i, "").toLowerCase();
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
          for (var _i3 = 0, _Object$entries = Object.entries(payload); _i3 < _Object$entries.length; _i3++) {
            const [key, value] = _Object$entries[_i3];
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
       * @param {Object} config 设置
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
       * @param root0
       * @param root0.title
       * @param root0.content
       * @param root0.editToken
       * @param root0.timestamp
       * @param root0.config
       * @param root0.additionalConfig
       */
      // @ts-expect-error TS7030
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
          top: $(document).scrollTop() || 0 + clientHeight * 0.2,
          display: "none"
        }).append($("<div>").addClass("Wikiplus-InterBox-Header").html(title)).append($("<div>").addClass("Wikiplus-InterBox-Content").append(content)).append($("<span>").text("×").addClass("Wikiplus-InterBox-Close"));
        $("body").append(dialogBox);
        $(".Wikiplus-InterBox").width(dialogWidth);
        $(".Wikiplus-InterBox-Close").on("click", function() {
          $(this).parent().fadeOut("fast", function() {
            window.addEventListener("close", () => {
              window.onbeforeunload = null;
            });
            $(this).remove();
          });
        });
        const bindDragging = function(element) {
          element.mousedown((e) => {
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
      // @ts-expect-error TS7030
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
       * @param onClick
       */
      insertSectionQuickEditEntries(onClick = () => {
      }) {
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
                sectionNumber,
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
       * @param {*} onClick
       */
      insertLinkEditEntries(onClick = () => {
      }) {
        $("#mw-content-text a.external").each(function() {
          const url = $(this).attr("href") || "";
          const params = parseQuery(url);
          if (params["action"] === "edit" && params["title"] !== void 0 && params["section"] !== "new") {
            $(this).after($("<a>").attr({
              href: "javascript:void(0)",
              class: "Wikiplus-Edit-EveryWhereBtn"
            }).text("(".concat(i18n_default.translate("quickedit_sectionbtn"), ")")).on("click", () => {
              var _params$section;
              onClick({
                targetPageName: params["title"],
                sectionNumber: (_params$section = params["section"]) !== null && _params$section !== void 0 ? _params$section : -1
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
            window.addEventListener("close", () => {
              window.onbeforeunload = null;
            });
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
          window.addEventListener("close", () => {
            window.onbeforeunload = null;
          });
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
          yield ui_default.showSimpleRedirectPanel({
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
          yield ui_default.showSettingsPanel({
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
  function Wikiplus(_x8) {
    return _Wikiplus.apply(this, arguments);
  }
  return Wikiplus;
})());

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzL21vZHVsZXMvd2lraXBsdXMubGVzcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9jb25zdGFudHMudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvaTE4bi50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9sb2cudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS9ub3RpZmljYXRpb24udHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvcmVxdWVzdHMudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvc2VydmljZXMvd2lraS50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL3BhZ2UudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvc2V0dGluZ3MudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvaGVscGVycy50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9zbGVlcC50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL3VpLnRzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2luZGV4LnRzIiwgInNyYy9XaWtpcGx1cy9XaWtpcGx1cy50cyIsICJzcmMvV2lraXBsdXMvcmVzaXplLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiEgV2lraXBsdXMgLSA0LjAuMTEgfCBFcmlkYW51cyBTb3JhICjlprnnqbrphbEpIHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG4jV2lraXBsdXMtUXVpY2tlZGl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4jV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQge1xuICB3aWR0aDogNTAlO1xufVxuLnNraW4tdmVjdG9yICNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQsXG4jV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogcmV2ZXJ0O1xufVxuI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDVweCAwO1xufVxuLldpa2lwbHVzLUJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogM3B4IDVweDtcbiAgcGFkZGluZzogM3B4IDFlbTtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjYWFhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1CdG4gYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMwMDA7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICB6LWluZGV4OiAyMDA7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjEsIDE1NCwgMjIwLCAwLjQxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjlmNztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgdG9wOiAtOHB4O1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZjZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBjdXJzb3I6IG1vdmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtSW5wdXQge1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiA2MCU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogYXV0byAzcHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1CdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xufVxuLldpa2lwbHVzLUludGVyQm94LUNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDNweCA3cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggbGFiZWwge1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiB7XG4gIHRhYmxlLWxheW91dDogYXV0bztcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWFkZGVkbGluZSxcbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWRlbGV0ZWRsaW5lLFxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtbGluZW5vIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLW1hcmtlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uV2lraXBsdXMtQmFubmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxOTMsIDIyMiwgMjE0LCAwLjUxKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtc2Fucywgc2Fucy1zZXJpZik7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAzcHggNXB4O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAjYWFhO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDNweCBhdXRvIDNweCAzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtc2Fucywgc2Fucy1zZXJpZik7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS1zdWNjZXNzIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOGRkYTkzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGEwMDtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXdhcm5pbmcge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmRmMDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiZDAwO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS1lcnJvciB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2U3MTcxNztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMDBlMDY7XG59XG4jTW9lTm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDcxMztcbiAgbWluLXdpZHRoOiAyMCU7XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuY2xhc3MgQ29uc3RhbnRzIHtcblx0dmVyc2lvbiA9ICc0LjEuMCc7XG5cdGdldCBpc0FydGljbGUoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0lzQXJ0aWNsZScpO1xuXHR9XG5cdGdldCBjdXJyZW50UGFnZU5hbWUoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvIC9nLCAnXycpO1xuXHR9XG5cdGdldCBhcnRpY2xlSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpO1xuXHR9XG5cdGdldCByZXZpc2lvbklkKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyk7XG5cdH1cblx0Z2V0IGxhdGVzdFJldmlzaW9uSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0N1clJldmlzaW9uSWQnKTtcblx0fVxuXHRnZXQgYXJ0aWNsZVBhdGgoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FydGljbGVQYXRoJyk7XG5cdH1cblx0Z2V0IHNjcmlwdFBhdGgoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1NjcmlwdFBhdGgnKTtcblx0fVxuXHRnZXQgYWN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcblx0fVxuXHRnZXQgc2tpbigpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3NraW4nKTtcblx0fVxuXHRnZXQgdXNlckdyb3VwcygpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpO1xuXHR9XG5cdGdldCB3aWtpSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuXHR9XG5cdHVzZXJBZ2VudCA9IGBRaXV3ZW4vMS4xIFdpa2lwbHVzLyR7dGhpcy52ZXJzaW9ufSAoJHt0aGlzLndpa2lJZH0pYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnN0YW50cygpO1xuIiwgImNsYXNzIEkxOG4ge1xuXHRsYW5ndWFnZTogc3RyaW5nO1xuXHRpMThuRGF0YTogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7fTtcblx0c2Vzc2lvblVwZGF0ZUxvZzogc3RyaW5nW10gPSBbXTtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGxhbmd1YWdlO1xuXHRcdHRyeSB7XG5cdFx0XHRsYW5ndWFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKVsnbGFuZ3VhZ2UnXSB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb3dlckNhc2UoKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzM5XG5cdFx0XHRsYW5ndWFnZSA9IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSlcblx0XHRcdFx0LnJlcGxhY2UoL2hhbltzdF0tPy9pLCAnJykgLy8gZm9yIGxhbmd1YWdlcyBsaWtlIHpoLUhhbnMtQ05cblx0XHRcdFx0LnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXHRcdHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcblx0XHQvLyBNZXJnZSB3aXRoIGxvY2FsU3RvcmFnZSBpMThuIGNhY2hlXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGkxOG5DYWNoZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1dpa2lwbHVzX2kxOG5DYWNoZScpIGFzIHN0cmluZyk7XG5cdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhpMThuQ2FjaGUpKSB7XG5cdFx0XHRcdHRoaXMuaTE4bkRhdGFba2V5XSA9IGkxOG5DYWNoZVtrZXldO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0Ly8gRmFpbCB0byBwYXJzZSBpMThuIGNhY2hlLCByZXNldFxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1dpa2lwbHVzX2kxOG5DYWNoZScsICd7fScpO1xuXHRcdH1cblx0fVxuXHR0cmFuc2xhdGUoa2V5OiBzdHJpbmcsIHBsYWNlaG9sZGVycz86IHN0cmluZ1tdKSB7XG5cdFx0bGV0IHJlc3VsdCA9ICcnO1xuXHRcdHBsYWNlaG9sZGVycyB8fD0gW107XG5cdFx0aWYgKHRoaXMubGFuZ3VhZ2UgaW4gdGhpcy5pMThuRGF0YSkge1xuXHRcdFx0Y29uc3QgaTE4bkRhdGFMYW5nID0gdGhpcy5pMThuRGF0YVt0aGlzLmxhbmd1YWdlXTtcblx0XHRcdGlmIChpMThuRGF0YUxhbmcgJiYga2V5IGluIGkxOG5EYXRhTGFuZykge1xuXHRcdFx0XHRyZXN1bHQgPSBpMThuRGF0YUxhbmdba2V5XSBhcyBzdHJpbmc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyB0cnkgdXBkYXRlIGxhbmd1YWdlIHZlcmlzb25cblx0XHRcdFx0dGhpcy5sb2FkTGFuZ3VhZ2UodGhpcy5sYW5ndWFnZSk7XG5cdFx0XHRcdGlmICh0aGlzLmkxOG5EYXRhWydlbi11cyddICYmIGtleSBpbiB0aGlzLmkxOG5EYXRhWydlbi11cyddKSB7XG5cdFx0XHRcdFx0Ly8gRmFsbGJhY2sgdG8gRW5nbGlzaFxuXHRcdFx0XHRcdHJlc3VsdCA9IHRoaXMuaTE4bkRhdGFbJ2VuLXVzJ11ba2V5XSBhcyBzdHJpbmc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0ga2V5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubG9hZExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpO1xuXHRcdH1cblxuXHRcdGlmIChwbGFjZWhvbGRlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yIChjb25zdCBbaW5kZXgsIHBsYWNlaG9sZGVyXSBvZiBwbGFjZWhvbGRlcnMuZW50cmllcygpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGAkJHtpbmRleCArIDF9YCwgcGxhY2Vob2xkZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdGFzeW5jIGxvYWRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKSB7XG5cdFx0aWYgKHRoaXMuc2Vzc2lvblVwZGF0ZUxvZy5pbmNsdWRlcyhsYW5ndWFnZSkpIHtcblx0XHRcdC8vIEhhcyBiZWVuIHVwZGF0ZWQgdGhpcyBzZXNzaW9uLlxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCAoXG5cdFx0XHRcdGF3YWl0IGZldGNoKFxuXHRcdFx0XHRcdGBodHRwczovL2dpdGNkbi5xaXV3ZW4ubmV0LmNuL0ludGVyZmFjZUFkbWluL1dpa2lwbHVzL3Jhdy9icmFuY2gvZGV2L2xhbmd1YWdlcy8ke2xhbmd1YWdlfS5qc29uYFxuXHRcdFx0XHQpXG5cdFx0XHQpLmpzb24oKTtcblx0XHRcdGNvbnN0IG5vd1ZlcnNpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnV2lraXBsdXNfTGFuZ3VhZ2VWZXJzaW9uJykgfHwgJzAwMCc7XG5cdFx0XHR0aGlzLnNlc3Npb25VcGRhdGVMb2cucHVzaChsYW5ndWFnZSk7XG5cdFx0XHRpZiAocmVzcG9uc2UuX192ZXJzaW9uICE9PSBub3dWZXJzaW9uIHx8ICEobGFuZ3VhZ2UgaW4gdGhpcy5pMThuRGF0YSkpIHtcblx0XHRcdFx0Ly8gTGFuZ3VhZ2UgZ2V0IHVwZGF0ZWRcblx0XHRcdFx0Y29uc29sZS5pbmZvKGBVcGRhdGUgJHtsYW5ndWFnZX0gc3VwcG9ydCB0byB2ZXJzaW9uICR7cmVzcG9uc2UuX192ZXJzaW9ufWApO1xuXHRcdFx0XHR0aGlzLmkxOG5EYXRhW2xhbmd1YWdlXSA9IHJlc3BvbnNlO1xuXHRcdFx0XHQvLyBVcGRhdGUgbG9jYWxTdG9yYWdlIGNhY2hlXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19pMThuQ2FjaGUnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmkxOG5EYXRhKSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHQvLyBVbnN1cHBvcnRlZCBsYW5ndWFnZVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgSTE4bigpO1xuIiwgImltcG9ydCBpMThuIGZyb20gJy4vaTE4bic7XG5cbmNsYXNzIFdpa2lwbHVzRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdGNvZGU6IHN0cmluZyB8IG51bGw7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgY29kZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0dGhpcy5jb2RlID0gY29kZTtcblx0fVxufVxuXG5jb25zdCBMb2cgPSB7XG5cdGRlYnVnKG1lc3NhZ2UgPSAnJykge1xuXHRcdGNvbnNvbGUuZGVidWcoYFtXaWtpcGx1cy1ERUJVR10gJHttZXNzYWdlfWApO1xuXHR9LFxuXHRpbmZvKG1lc3NhZ2UgPSAnJykge1xuXHRcdGNvbnNvbGUuaW5mbyhgW1dpa2lwbHVzLUlORk9dICR7bWVzc2FnZX1gKTtcblx0fSxcblx0ZXJyb3IoZXJyb3JDb2RlOiBzdHJpbmcsIHBheWxvYWRzOiBzdHJpbmdbXSA9IFtdKSB7XG5cdFx0bGV0IHRlbXBsYXRlID0gaTE4bi50cmFuc2xhdGUoZXJyb3JDb2RlKTtcblx0XHRpZiAocGF5bG9hZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Ly8gRmlsbFxuXHRcdFx0Zm9yIChjb25zdCBbaSwgdl0gb2YgcGF5bG9hZHMuZW50cmllcygpKSB7XG5cdFx0XHRcdHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxcJHtpICsgMX1gLCAnaWcnKSwgdik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnNvbGUuZXJyb3IoYFtXaWtpcGx1cy1FUlJPUl0gJHt0ZW1wbGF0ZX1gKTtcblx0XHR0aHJvdyBuZXcgV2lraXBsdXNFcnJvcihgJHt0ZW1wbGF0ZX1gLCBlcnJvckNvZGUpO1xuXHR9LFxufTtcblxuZXhwb3J0IHt0eXBlIFdpa2lwbHVzRXJyb3J9O1xuXG5leHBvcnQgZGVmYXVsdCBMb2c7XG4iLCAiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuY2xhc3MgTm90aWZpY2F0aW9uIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblx0aW5pdCgpIHtcblx0XHQkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGlkPVwiTW9lTm90aWZpY2F0aW9uXCI+PC9kaXY+Jyk7XG5cdH1cblx0ZGlzcGxheSh0ZXh0ID0gJ+WWtX4nLCB0eXBlID0gJ3N1Y2Nlc3MnLCBjYWxsYmFjazogKGVsZT86IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHZvaWQgPSAoKSA9PiB7fSk6IHZvaWQge1xuXHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKS5hcHBlbmQoXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnTW9lTm90aWZpY2F0aW9uLW5vdGljZScpXG5cdFx0XHRcdC5hZGRDbGFzcyhgTW9lTm90aWZpY2F0aW9uLW5vdGljZS0ke3R5cGV9YClcblx0XHRcdFx0LmFwcGVuZChgPHNwYW4+JHt0ZXh0fTwvc3Bhbj5gKVxuXHRcdCk7XG5cdFx0JCgnI01vZU5vdGlmaWNhdGlvbicpLmZpbmQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGFzdCgpLmZhZGVJbigzMDApO1xuXHRcdHRoaXMuYmluZCgpO1xuXHRcdHRoaXMuY2xlYXIoKTtcblx0XHRpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjYWxsYmFjaygkKCcjTW9lTm90aWZpY2F0aW9uJykuZmluZCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sYXN0KCkpO1xuXHRcdH1cblx0fVxuXHRiaW5kKCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGYuc2xpZGVMZWZ0KCQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG5cdHN1Y2Nlc3ModGV4dDogc3RyaW5nLCBjYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcblx0XHR0aGlzLmRpc3BsYXkodGV4dCwgJ3N1Y2Nlc3MnLCBjYWxsYmFjayk7XG5cdH1cblx0d2FybmluZyh0ZXh0OiBzdHJpbmcsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnd2FybmluZycsIGNhbGxiYWNrKTtcblx0fVxuXHRlcnJvcih0ZXh0OiBzdHJpbmcsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnZXJyb3InLCBjYWxsYmFjayk7XG5cdH1cblx0Y2xlYXIoKSB7XG5cdFx0aWYgKCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGVuZ3RoID49IDEwKSB7XG5cdFx0XHQkKCcjTW9lTm90aWZpY2F0aW9uJylcblx0XHRcdFx0LmNoaWxkcmVuKClcblx0XHRcdFx0LmZpcnN0KClcblx0XHRcdFx0LmZhZGVPdXQoMTUwLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRzZXRUaW1lb3V0KHRoaXMuY2xlYXIsIDMwMCk7XG5cdFx0fVxuXHR9XG5cdGVtcHR5KGY6IEpRdWVyeTxIVE1MRWxlbWVudD4gfCAoKGVsZTogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4gdm9pZCkpIHtcblx0XHQkKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25zdCBlbGUgPSAkKHRoaXMpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRmKGVsZSk7XG5cdFx0XHRcdH0sIDIwMCAqIGkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5kZWxheShpICogMjAwKVxuXHRcdFx0XHRcdC5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRzbGlkZUxlZnQoZWxlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+LCBzcGVlZCA9IDE1MCkge1xuXHRcdGVsZS5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG5cdFx0ZWxlLmFuaW1hdGUoXG5cdFx0XHR7XG5cdFx0XHRcdGxlZnQ6ICctMjAwJScsXG5cdFx0XHR9LFxuXHRcdFx0c3BlZWQsXG5cdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOb3RpZmljYXRpb24oKTtcbiIsICJpbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmNvbnN0IFJlcXVlc3RzID0ge1xuXHRiYXNlOiBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9hcGkucGhwYCxcblx0YXN5bmMgZ2V0KHF1ZXJ5OiBBcGlRdWVyeVBhcmFtcyB8IEFwaVBhcnNlUGFyYW1zIHwgQXBpRWRpdFBhZ2VQYXJhbXMpIHtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKFJlcXVlc3RzLmJhc2UpO1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHF1ZXJ5KSkge1xuXHRcdFx0dXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCBxdWVyeVtrZXldKTtcblx0XHR9XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiBDb25zdGFudHMudXNlckFnZW50LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHR9LFxuXHRhc3luYyBwb3N0KHBheWxvYWQ6IEFwaVF1ZXJ5UGFyYW1zIHwgQXBpUGFyc2VQYXJhbXMgfCBBcGlFZGl0UGFnZVBhcmFtcykge1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwoUmVxdWVzdHMuYmFzZSk7XG5cdFx0Y29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBheWxvYWQpKSB7XG5cdFx0XHRmb3JtLmFwcGVuZChrZXksIHZhbHVlIGFzIHN0cmluZyk7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGJvZHk6IGZvcm0sXG5cdFx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogQ29uc3RhbnRzLnVzZXJBZ2VudCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RzO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBMb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcbmltcG9ydCBpMThuIGZyb20gJy4uL3V0aWxzL2kxOG4nO1xuaW1wb3J0IHJlcXVlc3RzIGZyb20gJy4uL3V0aWxzL3JlcXVlc3RzJztcblxuY2xhc3MgV2lraSB7XG5cdHBhZ2VJbmZvQ2FjaGU6IFJlY29yZDxzdHJpbmcsIHt0aW1lc3RhbXA/OiBzdHJpbmc7IHJldmlkPzogbnVtYmVyOyBjb250ZW50bW9kZWw6IHN0cmluZ30+ID0ge307XG5cdC8qKlxuXHQgKiDojrflvpcgRWRpdCBUb2tlblxuXHQgKiBHZXQgRWRpdCBUb2tlblxuXHQgKlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKi9cblx0YXN5bmMgZ2V0RWRpdFRva2VuKCkge1xuXHRcdC8vIOWwneivleS7jiBBUEkg6I635b6XIEVkaXRUb2tlblxuXHRcdC8vIFRyeSB0byBnZXQgRWRpdFRva2VuIGZyb20gQVBJXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5nZXQoe1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHR9KTtcblx0XHRpZiAoXG5cdFx0XHRyZXNwb25zZS5xdWVyeSAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zICYmXG5cdFx0XHRyZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuICYmXG5cdFx0XHRyZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuICE9PSAnK1xcXFwnXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHR9XG5cdFx0cmV0dXJuIExvZy5lcnJvcignZmFpbF90b19nZXRfZWRpdHRva2VuJyk7XG5cdH1cblx0LyoqXG5cdCAqIOiOt+W+l+mhtemdouS4iuS4gOeJiOacrOaXtumXtOaIs1xuXHQgKiBHZXQgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbGFzdCByZXZpc2lvbiBvZiBwYWdlIHNwZWNpZmllZC5cblx0ICpcblx0ICogQHBhcmFtIHtwYXJhbXMuc3RyaW5nfSB0aXRsZSDpobXpnaLlkI0gLyBQYWdlbmFtZVxuXHQgKiBAcGFyYW0ge3BhcmFtcy5yZXZpc2lvbklkfSByZXZpc2lvbklkIOS/ruiuoueJiOacrOWPtyAvIFJldmlzaW9uIElEXG5cdCAqIEBwYXJhbSB7cGFyYW1zLmNvbnRlbnRtb2RlbH0gY29udGVudG1vZGVsIOWGheWuueaooeWeiyAvIENvbnRlbnQgTW9kZWxcblx0ICogQHJldHVybnMge1Byb21pc2U8e3RpbWVzdGFtcD86IHN0cmluZzsgcmV2aXNpb25JZD86IG51bWJlcjsgY29udGVudG1vZGVsOiBzdHJpbmc7fT59XG5cdCAqL1xuXHRhc3luYyBnZXRQYWdlSW5mbyh7XG5cdFx0dGl0bGUsXG5cdFx0cmV2aXNpb25JZCxcblx0fToge1xuXHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0cmV2aXNpb25JZD86IG51bWJlcjtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNzAzMFxuXHR9KTogUHJvbWlzZTx7dGltZXN0YW1wPzogc3RyaW5nOyByZXZpc2lvbklkPzogbnVtYmVyOyBjb250ZW50bW9kZWw6IHN0cmluZ30+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyAmIEFwaVF1ZXJ5SW5mb1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zfGluZm8nLFxuXHRcdFx0XHRydnByb3A6ICd0aW1lc3RhbXB8aWRzJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHJldmlzaW9uSWQpIHtcblx0XHRcdFx0cGFyYW1zLnJldmlkcyA9IHJldmlzaW9uSWQ7XG5cdFx0XHR9IGVsc2UgaWYgKHRpdGxlKSB7XG5cdFx0XHRcdGlmICh0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdKSB7XG5cdFx0XHRcdFx0Ly8gSGl0IGNhY2hlXG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogdGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS50aW1lc3RhbXAgYXMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0cmV2aXNpb25JZDogdGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS5yZXZpZCBhcyBudW1iZXIsXG5cdFx0XHRcdFx0XHRjb250ZW50bW9kZWw6IHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0uY29udGVudG1vZGVsLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFyYW1zLnRpdGxlcyA9IHRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5nZXQocGFyYW1zKTtcblx0XHRcdGlmIChyZXNwb25zZS5xdWVyeSAmJiByZXNwb25zZS5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRjb25zdCBwYWdlS2V5ID0gT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdO1xuXHRcdFx0XHRjb25zdCBjb250ZW50bW9kZWwgPSByZXNwb25zZS5xdWVyeS5wYWdlc1twYWdlS2V5IGFzIHN0cmluZ10uY29udGVudG1vZGVsO1xuXHRcdFx0XHRpZiAocGFnZUtleSA9PT0gJy0xJykge1xuXHRcdFx0XHRcdC8vIOS4jeWtmOWcqOi/meS4gOmhtemdolxuXHRcdFx0XHRcdC8vIFBhZ2Ugbm90IGZvdW5kLlxuXHRcdFx0XHRcdHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0gPSB7Y29udGVudG1vZGVsfTtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0Y29udGVudG1vZGVsLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFnZUluZm8gPSByZXNwb25zZS5xdWVyeS5wYWdlc1twYWdlS2V5IGFzIHN0cmluZ10ucmV2aXNpb25zWzBdO1xuXHRcdFx0XHRpZiAodGl0bGUpIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdID0gey4uLnBhZ2VJbmZvLCBjb250ZW50bW9kZWx9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dGltZXN0YW1wOiBwYWdlSW5mby50aW1lc3RhbXAsXG5cdFx0XHRcdFx0cmV2aXNpb25JZDogcGFnZUluZm8ucmV2aWQsXG5cdFx0XHRcdFx0Y29udGVudG1vZGVsLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF9lZGl0dG9rZW4nKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIOiOt+W+l+mhtemdoueahCBXaWtpdGV4dFxuXHQgKiBHZXQgd2lraXRleHQgb2YgdGhlIHBhZ2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNvbmZpZy5yZXZpc2lvbklkIOeJiOacrOWPt1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnNlY3Rpb24g5q616JC95Y+3XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gd2lraXRleHTlhoXlrrlcblx0ICovXG5cdGFzeW5jIGdldFdpa2lUZXh0KHtzZWN0aW9uLCByZXZpc2lvbklkfToge3NlY3Rpb246IHN0cmluZyB8IG51bWJlcjsgcmV2aXNpb25JZDogbnVtYmVyfSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdHJldmlkczogcmV2aXNpb25JZCxcblx0XHRcdH07XG5cdFx0XHRpZiAocmV2aXNpb25JZCkge1xuXHRcdFx0XHRwYXJhbXMucmV2aWRzID0gcmV2aXNpb25JZDtcblx0XHRcdH1cblx0XHRcdGlmIChzZWN0aW9uKSB7XG5cdFx0XHRcdHBhcmFtcy5ydnNlY3Rpb24gPSBzZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5nZXQocGFyYW1zKTtcblx0XHRcdGlmIChyZXNwb25zZS5xdWVyeSAmJiByZXNwb25zZS5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRpZiAoT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdID09PSAnLTEnKSB7XG5cdFx0XHRcdFx0Ly8g5LiN5a2Y5Zyo6L+Z5LiA6aG16Z2iXG5cdFx0XHRcdFx0Ly8gUGFnZSBub3QgZm91bmQuXG5cdFx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHBhZ2VJbmZvID0gcmVzcG9uc2UucXVlcnkucGFnZXNbT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdIGFzIHN0cmluZ10ucmV2aXNpb25zWzBdO1xuXHRcdFx0XHRyZXR1cm4gcGFnZUluZm9bJyonXTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfd2lraXRleHQnKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIOino+aekCBXaWtpdGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHQgd2lraXRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIOmhtemdouagh+mimFxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIOiuvue9rlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IOino+aekOe7k+aenCBIVE1MXG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdGFzeW5jIHBhcnNlV2lraVRleHQod2lraXRleHQ6IHN0cmluZywgdGl0bGUgPSAnJywgX2NvbmZpZyA9IHt9KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMucG9zdCh7XG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0cHN0OiAndHJ1ZScsXG5cdFx0XHR9KTtcblx0XHRcdGlmIChyZXNwb25zZS5wYXJzZSAmJiByZXNwb25zZS5wYXJzZS50ZXh0KSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5wYXJzZS50ZXh0WycqJ107XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ2NhbnRfcGFyc2Vfd2lraXRleHQnKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog57yW6L6R6aG16Z2iXG5cdCAqXG5cdCAqIEBwYXJhbSByb290MFxuXHQgKiBAcGFyYW0gcm9vdDAudGl0bGVcblx0ICogQHBhcmFtIHJvb3QwLmNvbnRlbnRcblx0ICogQHBhcmFtIHJvb3QwLmVkaXRUb2tlblxuXHQgKiBAcGFyYW0gcm9vdDAudGltZXN0YW1wXG5cdCAqIEBwYXJhbSByb290MC5jb25maWdcblx0ICogQHBhcmFtIHJvb3QwLmFkZGl0aW9uYWxDb25maWdcblx0ICovXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM3MDMwXG5cdGFzeW5jIGVkaXQoe3RpdGxlLCBjb250ZW50LCBlZGl0VG9rZW4sIHRpbWVzdGFtcCwgY29uZmlnID0ge30sIGFkZGl0aW9uYWxDb25maWcgPSB7fX0gPSB7fSkge1xuXHRcdGxldCByZXNwb25zZTtcblx0XHR0cnkge1xuXHRcdFx0cmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR0ZXh0OiBjb250ZW50LFxuXHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0dG9rZW46IGVkaXRUb2tlbixcblx0XHRcdFx0Li4uKHRpbWVzdGFtcCA/IHtiYXNldGltZXN0YW1wOiB0aW1lc3RhbXB9IDoge30pLFxuXHRcdFx0XHQuLi5jb25maWcsXG5cdFx0XHRcdC4uLmFkZGl0aW9uYWxDb25maWcsXG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignbmV0d29ya19lZGl0X2Vycm9yJyk7XG5cdFx0fVxuXHRcdGlmIChyZXNwb25zZS5lZGl0KSB7XG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LmNvZGUpIHtcblx0XHRcdFx0Ly8gQWJ1c2UgRmlsdGVyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgXG4gICAgICAgICAgICAgICAgICAgICAgICAke2kxOG4udHJhbnNsYXRlKCdoaXRfYWJ1c2VmaWx0ZXInKX06JHtyZXNwb25zZS5lZGl0LmluZm8ucmVwbGFjZSgnL0hpdCBBYnVzZUZpbHRlcjogL2lnJywgJycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogc21hbGxlcjtcIj4ke3Jlc3BvbnNlLmVkaXQud2FybmluZ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRMb2cuZXJyb3IoJ3Vua25vd25fZWRpdF9lcnJvcicpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAocmVzcG9uc2UuZXJyb3IgJiYgcmVzcG9uc2UuZXJyb3IuY29kZSkge1xuXHRcdFx0TG9nLmVycm9yKHJlc3BvbnNlLmVycm9yLmNvZGUpO1xuXHRcdH0gZWxzZSBpZiAocmVzcG9uc2UuY29kZSkge1xuXHRcdFx0TG9nLmVycm9yKHJlc3BvbnNlLmNvZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRMb2cuZXJyb3IoJ3Vua25vd25fZWRpdF9lcnJvcicpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpfmjIflrprpobXpnaLmnIDmlrDkv67orqLnvJblj7dcblx0ICogR2V0IGxhdGVzdCByZXZpc2lvbklkIG9mIGEgcGFnZS5cblx0ICpcblx0ICogQHBhcmFtIHsqfSB0aXRsZVxuXHQgKi9cblx0YXN5bmMgZ2V0TGF0ZXN0UmV2aXNpb25JZEZvclBhZ2UodGl0bGU6IHN0cmluZykge1xuXHRcdGNvbnN0IHtyZXZpc2lvbklkfSA9IGF3YWl0IHRoaXMuZ2V0UGFnZUluZm8oe3RpdGxlfSk7XG5cdFx0cmV0dXJuIHJldmlzaW9uSWQ7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFdpa2koKTtcbiIsICJpbXBvcnQgTG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5pbXBvcnQgV2lraSBmcm9tICcuLi9zZXJ2aWNlcy93aWtpJztcblxuY2xhc3MgUGFnZSB7XG5cdHRpbWVzdGFtcDogc3RyaW5nID0gJyc7XG5cdGVkaXRUb2tlbjogc3RyaW5nID0gJyc7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHJldmlzaW9uSWQ6IG51bWJlcjtcblxuXHRpbml0ZWQgPSBmYWxzZTtcblx0aXNOZXdQYWdlID0gZmFsc2U7XG5cblx0Y29udGVudG1vZGVsID0gJ3dpa2l0ZXh0JztcblxuXHRzZWN0aW9uQ2FjaGU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtwYXJhbXMudGl0bGV9IOmhtemdouagh+mimCBQYWdlIE5hbWUgKG9wdGlvbmFsKVxuXHQgKiBAcGFyYW0ge3BhcmFtcy5yZXZpc2lvbklkfSDpobXpnaLkv67orqLnvJblj7cgUmV2aXNpb24gSWRcblx0ICogQHBhcmFtIHtwYXJhbXMuY29udGVudG1vZGVsfSDpobXpnaLlhoXlrrnmqKHlnosgQ29udGVudCBNb2RlbFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioe3RpdGxlLCByZXZpc2lvbklkfToge3RpdGxlOiBzdHJpbmc7IHJldmlzaW9uSWQ6IG51bWJlcn0pIHtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5yZXZpc2lvbklkID0gcmV2aXNpb25JZDtcblx0XHR0aGlzLmlzTmV3UGFnZSA9ICFyZXZpc2lvbklkO1xuXHR9XG5cblx0LyoqXG5cdCAqIOWIneWni+WMliDojrflvpfpobXpnaJFZGl0VG9rZW7lkozliJ3lp4tUaW1lU3RhbXBcblx0ICogSW5pdGlhbGl6YXRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlZGl0VG9rZW4gKG9wdGlvbmFsKSDlpoLmnpzmj5DkvpvkuoZlZGl0VG9rZW7vvIzlsIbkuI3kvJrlho3ojrflj5Zcblx0ICovXG5cdGFzeW5jIGluaXQoe2VkaXRUb2tlbiA9ICcnfSA9IHt9KSB7XG5cdFx0Y29uc3QgcHJvbWlzZUFyciA9IFt0aGlzLmdldFRpbWVzdGFtcCgpLCB0aGlzLmdldENvbnRlbnRNb2RlbCgpXTtcblx0XHRpZiAoIWVkaXRUb2tlbikge1xuXHRcdFx0cHJvbWlzZUFyci5wdXNoKHRoaXMuZ2V0RWRpdFRva2VuKCkpO1xuXHRcdH1cblx0XHRhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlQXJyKTtcblx0XHR0aGlzLmluaXRlZCA9IHRydWU7XG5cdFx0TG9nLmluZm8oYFBhZ2UgaW5pdGlhbGl6YXRpb24gZm9yICR7dGhpcy50aXRsZX0jJHt0aGlzLnJldmlzaW9uSWR9IGZpbmlzaGVkLmApO1xuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+lyBFZGl0VG9rZW5cblx0ICogR2V0IEVkaXRUb2tlblxuXHQgKi9cblx0YXN5bmMgZ2V0RWRpdFRva2VuKCkge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnbWVkaWF3aWtpLnVzZXInKTtcblx0XHRpZiAobXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKSAmJiBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpICE9PSAnK1xcXFwnKSB7XG5cdFx0XHQvLyDlpoLmnpwgTWVkaWFXaWtpIEphdmFTY3JpcHQgQVBJIOWPr+S7peebtOaOpeiOt+W+lyBFZGl0VG9rZW4g5YiZ55u05o6l6L+U5ZueXG5cdFx0XHQvLyBSZXR1cm4gRWRpdFRva2VuIHJldHJpZXZlZCBmcm9tIE1lZGlhV2lraSBKYXZhU2NyaXB0IEFQSSBpZiBhY2Nlc3NpYmxlXG5cdFx0XHR0aGlzLmVkaXRUb2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIOS7jkFQSeiOt+W+l0VkaXRUb2tlblxuXHRcdC8vIEdldCBFZGl0VG9rZW4gZnJvbSBNZWRpYVdpa2kgQVBJXG5cdFx0dGhpcy5lZGl0VG9rZW4gPSBhd2FpdCBXaWtpLmdldEVkaXRUb2tlbigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+l+e8lui+keWfuuWHhuaXtumXtOaIs1xuXHQgKiBHZXQgQmFzZSBUaW1lc3RhbXBcblx0ICovXG5cdGFzeW5jIGdldFRpbWVzdGFtcCgpIHtcblx0XHRjb25zdCB7dGltZXN0YW1wLCByZXZpc2lvbklkfSA9IChhd2FpdCBXaWtpLmdldFBhZ2VJbmZvKHtcblx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucmV2aXNpb25JZCxcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdH0pKSBhcyB1bmtub3duIGFzIHtcblx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0cmV2aXNpb25JZDogbnVtYmVyO1xuXHRcdH07XG5cdFx0dGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XG5cdFx0aWYgKHJldmlzaW9uSWQpIHtcblx0XHRcdHRoaXMucmV2aXNpb25JZCA9IHJldmlzaW9uSWQ7XG5cdFx0XHR0aGlzLmlzTmV3UGFnZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpfpobXpnaLlhoXlrrnmqKHlnotcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnJldmlzaW9uSWRcblx0ICovXG5cdGFzeW5jIGdldENvbnRlbnRNb2RlbCgpIHtcblx0XHRjb25zdCB7Y29udGVudG1vZGVsfSA9IGF3YWl0IFdpa2kuZ2V0UGFnZUluZm8oe1xuXHRcdFx0cmV2aXNpb25JZDogdGhpcy5yZXZpc2lvbklkLFxuXHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0fSk7XG5cdFx0dGhpcy5jb250ZW50bW9kZWwgPSBjb250ZW50bW9kZWwgfHwgJ3dpa2l0ZXh0Jztcblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpcgV2lraVRleHRcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGNvbmZpZy5zZWN0aW9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcucmV2aXNpb25JZFxuXHQgKi9cblx0YXN5bmMgZ2V0V2lraVRleHQoe3NlY3Rpb24gPSAnJ306IHtzZWN0aW9uPzogbnVtYmVyIHwgJycgfCAtMX0gPSB7fSkge1xuXHRcdGNvbnN0IHNlYyA9IHNlY3Rpb24gPT09IC0xID8gMCA6IHNlY3Rpb247XG5cdFx0aWYgKHRoaXMuc2VjdGlvbkNhY2hlW3NlY10pIHtcblx0XHRcdHJldHVybiB0aGlzLnNlY3Rpb25DYWNoZVtzZWNdO1xuXHRcdH1cblx0XHRjb25zdCB3aWtpVGV4dCA9IGF3YWl0IFdpa2kuZ2V0V2lraVRleHQoe1xuXHRcdFx0c2VjdGlvbjogc2VjLFxuXHRcdFx0cmV2aXNpb25JZDogdGhpcy5yZXZpc2lvbklkLFxuXHRcdH0pO1xuXHRcdExvZy5pbmZvKGBXaWtpdGV4dCBvZiAke3RoaXMudGl0bGV9IyR7c2VjdGlvbn0gZmV0Y2hlZC5gKTtcblx0XHR0aGlzLnNlY3Rpb25DYWNoZVtzZWNdID0gd2lraVRleHQ7XG5cdFx0cmV0dXJuIHdpa2lUZXh0O1xuXHR9XG5cblx0LyoqXG5cdCAqIOino+aekCBXaWtpVGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHRcblx0ICovXG5cdGFzeW5jIHBhcnNlV2lraVRleHQod2lraXRleHQ6IHN0cmluZykge1xuXHRcdHJldHVybiBhd2FpdCBXaWtpLnBhcnNlV2lraVRleHQod2lraXRleHQsIHRoaXMudGl0bGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOe8lui+kemhtemdolxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGNvbmZpZ1xuXHQgKiBAcGFyYW0gcGF5bG9hZFxuXHQgKi9cblx0YXN5bmMgZWRpdChwYXlsb2FkOiBBcGlRdWVyeVBhcmFtcyB8IEFwaVBhcnNlUGFyYW1zIHwgQXBpRWRpdFBhZ2VQYXJhbXMpIHtcblx0XHRpZiAoIXRoaXMuZWRpdFRva2VuKSB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMudGltZXN0YW1wICYmICF0aGlzLmlzTmV3UGFnZSkge1xuXHRcdFx0Ly8g5aaC5p6c5LiN5piv5Yib5bu65paw6aG16Z2iIOWPiOayoeacieWfuuWHhuaXtumXtOaIsyDliJnmnInlj6/og73pgKDmiJDnvJbovpHopobnm5Yg5L+d6Zmp6LW36KeB55u05o6l5ouS57udXG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X3RpbWVzdGFtcCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXR1cm4gYXdhaXQgV2lraS5lZGl0KHtcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdFx0ZWRpdFRva2VuOiB0aGlzLmVkaXRUb2tlbixcblx0XHRcdC4uLih0aGlzLnRpbWVzdGFtcCA/IHt0aW1lc3RhbXA6IHRoaXMudGltZXN0YW1wfSA6IHt9KSxcblx0XHRcdC4uLnBheWxvYWQsXG5cdFx0XHRhZGRpdGlvbmFsQ29uZmlnOiB7XG5cdFx0XHRcdC4uLih0aGlzLmlzTmV3UGFnZSA/IHtjcmVhdGVvbmx5OiB0aGlzLmlzTmV3UGFnZX0gOiB7fSksXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iLCAiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuY2xhc3MgU2V0dGluZ3Mge1xuXHRnZXRTZXR0aW5nKGtleTogc3RyaW5nLCBvYmplY3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fSkge1xuXHRcdGNvbnN0IHcgPSBvYmplY3Q7XG5cdFx0bGV0IHNldHRpbmdzO1xuXHRcdHRyeSB7XG5cdFx0XHRzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGN1c3RvbVNldHRpbmdGdW5jdGlvbiA9IG5ldyBGdW5jdGlvbihgcmV0dXJuICR7c2V0dGluZ3Nba2V5XX1gKTtcblx0XHRcdGlmICh0eXBlb2YgY3VzdG9tU2V0dGluZ0Z1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYgKGN1c3RvbVNldHRpbmdGdW5jdGlvbigpKHcpID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBjdXN0b21TZXR0aW5nRnVuY3Rpb24oKSh3KSB8fCBzZXR0aW5nc1trZXldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldHRpbmdzW2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5nc1trZXldO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bGV0IHJlc3VsdCA9IHNldHRpbmdzW2tleV07XG5cdFx0XHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iamVjdCkpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShgXFwkeyR7a2V5fX1gLCBvYmplY3Rba2V5XSBhcyBzdHJpbmcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXR0aW5ncygpO1xuIiwgIi8qKlxuICog6Kej5p6QVVJM5Y+C5pWw5YiX6KGoXG4gKiBQYXJzZSBVUkwgcXVlcnkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHVybFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeSh1cmw6IHN0cmluZykge1xuXHRjb25zdCByZWcgPSAvKChbXj8mPV0rKSg/Oj0oW14/Jj1dKikpKikvZztcblx0Y29uc3QgcGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5cdGxldCBtYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbDtcblx0d2hpbGUgKChtYXRjaCA9IHJlZy5leGVjKHVybCkpKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHBhcmFtc1ttYXRjaFsyXSBhcyBzdHJpbmddID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdIGFzIHN0cmluZyk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRwYXJhbXNbbWF0Y2hbMl0gYXMgc3RyaW5nXSA9IG1hdGNoWzNdIGFzIHN0cmluZztcblx0XHR9XG5cdH1cblx0cmV0dXJuIHBhcmFtcztcbn1cbiIsICJjb25zdCBzbGVlcCA9ICh0aW1lOiBudW1iZXIpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0cmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG5cdH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHNsZWVwO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBMb2csIHtXaWtpcGx1c0Vycm9yfSBmcm9tICcuLi91dGlscy9sb2cnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgaTE4biBmcm9tICcuLi91dGlscy9pMThuJztcbmltcG9ydCB7cGFyc2VRdWVyeX0gZnJvbSAnLi4vdXRpbHMvaGVscGVycyc7XG5pbXBvcnQgc2xlZXAgZnJvbSAnLi4vdXRpbHMvc2xlZXAnO1xuXG5jbGFzcyBVSSB7XG5cdHF1aWNrRWRpdFBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuXHRzY3JvbGxUb3AgPSAwO1xuXG5cdC8qKlxuXHQgKiDliJvlu7rlsYXkuK3lr7nor53moYZcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIOeql+WPo+agh+mimFxuXHQgKiBAcGFyYW0ge3N0cmluZyB8IEpRdWVyeTxIVE1MRWxlbWVudD59IGNvbnRlbnQg5YaF5a65XG5cdCAqIEBwYXJhbSB7Kn0gd2lkdGgg5a695bqmXG5cdCAqIEBwYXJhbSB7Kn0gY2FsbGJhY2sg5Zue6LCD5Ye95pWwXG5cdCAqL1xuXHRjcmVhdGVEaWFsb2dCb3goXG5cdFx0dGl0bGU6IHN0cmluZyA9ICdXaWtpcGx1cycsXG5cdFx0Y29udGVudDogc3RyaW5nIHwgSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICcnLFxuXHRcdHdpZHRoOiBudW1iZXIgPSA2MDAsXG5cdFx0Y2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7fVxuXHQpIHtcblx0XHRpZiAoJCgnLldpa2lwbHVzLUludGVyQm94JykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y29uc3QgY2xpZW50V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRjb25zdCBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0Y29uc3QgZGlhbG9nV2lkdGggPSBNYXRoLm1pbihjbGllbnRXaWR0aCwgd2lkdGgpO1xuXHRcdGNvbnN0IGRpYWxvZ0JveCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gnKVxuXHRcdFx0LmNzcyh7XG5cdFx0XHRcdCdtYXJnaW4tbGVmdCc6IGNsaWVudFdpZHRoIC8gMiAtIGRpYWxvZ1dpZHRoIC8gMixcblx0XHRcdFx0dG9wOiAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSB8fCAwICsgY2xpZW50SGVpZ2h0ICogMC4yLFxuXHRcdFx0XHRkaXNwbGF5OiAnbm9uZScsXG5cdFx0XHR9KVxuXHRcdFx0LmFwcGVuZCgkKCc8ZGl2PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1IZWFkZXInKS5odG1sKHRpdGxlKSlcblx0XHRcdC5hcHBlbmQoJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmFwcGVuZChjb250ZW50KSlcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dCgnw5cnKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKSk7XG5cdFx0JCgnYm9keScpLmFwcGVuZChkaWFsb2dCb3gpO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLndpZHRoKGRpYWxvZ1dpZHRoKTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHQkKHRoaXMpXG5cdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHQuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHR3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBudWxsO1xuXHRcdFx0XHRcdH0pOyAvLyDlj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0XHQvLyDmi5bmm7Ncblx0XHRjb25zdCBiaW5kRHJhZ2dpbmcgPSBmdW5jdGlvbiAoZWxlbWVudDogSlF1ZXJ5PEhUTUxFbGVtZW50Pikge1xuXHRcdFx0ZWxlbWVudC5tb3VzZWRvd24oKGUpID0+IHtcblx0XHRcdFx0Y29uc3QgYmFzZVggPSBlLmNsaWVudFg7XG5cdFx0XHRcdGNvbnN0IGJhc2VZID0gZS5jbGllbnRZO1xuXHRcdFx0XHRjb25zdCBiYXNlT2Zmc2V0WCA9IGVsZW1lbnQucGFyZW50KCkub2Zmc2V0KCk/LmxlZnQgfHwgMDtcblx0XHRcdFx0Y29uc3QgYmFzZU9mZnNldFkgPSBlbGVtZW50LnBhcmVudCgpLm9mZnNldCgpPy50b3AgfHwgMDtcblx0XHRcdFx0JChkb2N1bWVudCkub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC5wYXJlbnQoKS5jc3Moe1xuXHRcdFx0XHRcdFx0J21hcmdpbi1sZWZ0JzogYmFzZU9mZnNldFggKyBlLmNsaWVudFggLSBiYXNlWCxcblx0XHRcdFx0XHRcdHRvcDogYmFzZU9mZnNldFkgKyBlLmNsaWVudFkgLSBiYXNlWSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwJywgKCkgPT4ge1xuXHRcdFx0XHRcdGVsZW1lbnQudW5iaW5kKCdtb3VzZWRvd24nKTtcblx0XHRcdFx0XHQkKGRvY3VtZW50KS5vZmYoJ21vdXNlbW92ZScpO1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9mZignbW91c2V1cCcpO1xuXHRcdFx0XHRcdGJpbmREcmFnZ2luZyhlbGVtZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGJpbmREcmFnZ2luZygkKCcuV2lraXBsdXMtSW50ZXJCb3gtSGVhZGVyJykpO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmZhZGVJbig1MDApO1xuXHRcdGNhbGxiYWNrKCk7XG5cdFx0cmV0dXJuIGRpYWxvZ0JveDtcblx0fVxuXG5cdC8qKlxuXHQgKiDlnKjmkJzntKLmoYblt6bkvqfjgIzmm7TlpJrjgI3oj5zljZXlhoXmt7vliqDmjInpkq5cblx0ICogQWRkIGEgYnV0dG9uIGluIFwiTW9yZVwiIG1lbnUgKGxlZnQgb2YgdGhlIHNlYXJjaCBiYXIpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IOaMiemSruWQjSBCdXR0b24gdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaWQg5oyJ6ZKuaWQgQnV0dG9uIGlkXG5cdCAqIEByZXR1cm4ge0pRdWVyeTxIVE1MRWxlbWVudD59IGJ1dHRvblxuXHQgKi9cblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzcwMzBcblx0YWRkRnVuY3Rpb25CdXR0b24odGV4dCwgaWQpIHtcblx0XHRsZXQgYnV0dG9uO1xuXHRcdHN3aXRjaCAoQ29uc3RhbnRzLnNraW4pIHtcblx0XHRcdGNhc2UgJ21pbmVydmEnOlxuXHRcdFx0XHRidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdFx0XHQuYXR0cignaWQnLCBpZClcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RvZ2dsZS1saXN0LWl0ZW0nKVxuXHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ213LXVpLWljb24gbXctdWktaWNvbi1iZWZvcmUgdG9nZ2xlLWxpc3QtaXRlbV9fYW5jaG9yJylcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RvZ2dsZS1saXN0LWl0ZW1fX2xhYmVsJylcblx0XHRcdFx0XHRcdFx0XHRcdC50ZXh0KHRleHQpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnbW9lc2tpbic6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtTW9yZS1GdW5jdGlvbi1CdXR0b24nKVxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIGlkKVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPGE+JykuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCk7JykudGV4dCh0ZXh0KSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ213LWxpc3QtaXRlbScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd2ZWN0b3ItdGFiLW5vaWNvbicpXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgaWQpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8YT4nKS5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKS50ZXh0KHRleHQpKTtcblx0XHR9XG5cdFx0aWYgKENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YScgJiYgJCgnI3AtdGInKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcjcC10YicpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH0gZWxzZSBpZiAoQ29uc3RhbnRzLnNraW4gPT09ICdtb2Vza2luJykge1xuXHRcdFx0JCgnLm1vcmUtYWN0aW9ucy1saXN0JykuZmlyc3QoKS5hcHBlbmQoYnV0dG9uKTtcblx0XHRcdHJldHVybiAkKGAjJHtpZH1gKTtcblx0XHR9IGVsc2UgaWYgKCQoJyNwLWNhY3Rpb25zJykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnI3AtY2FjdGlvbnMgdWwnKS5hcHBlbmQoYnV0dG9uKTtcblx0XHRcdHJldHVybiAkKGAjJHtpZH1gKTtcblx0XHR9XG5cdFx0TG9nLmluZm8oaTE4bi50cmFuc2xhdGUoJ2NhbnRfYWRkX2Z1bmNidG4nKSk7XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl5b+r6YCf6YeN5a6a5ZCR5oyJ6ZKuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2ltcGxlUmVkaXJlY3RCdXR0b24ob25DbGljayA9ICgpID0+IHt9KSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gdGhpcy5hZGRGdW5jdGlvbkJ1dHRvbihpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3RfZnJvbScpLCAnV2lraXBsdXMtU1ItSW50cm8nKTtcblx0XHRpZiAoYnV0dG9uKSB7XG5cdFx0XHRidXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeiuvue9rumdouadv+aMiemSrlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFNldHRpbmdzUGFuZWxCdXR0b24ob25DbGljayA9ICgpID0+IHt9KSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gdGhpcy5hZGRGdW5jdGlvbkJ1dHRvbihpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3MnKSwgJ1dpa2lwbHVzLVNldHRpbmdzLUludHJvJyk7XG5cdFx0aWYgKGJ1dHRvbikge1xuXHRcdFx0YnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXpobbpg6jlv6vpgJ/nvJbovpHmjInpkq5cblx0ICogSW5zZXJ0IFF1aWNrRWRpdCBidXR0b24gYmVzaWRlcyBwYWdlIGVkaXQgYnV0dG9uLlxuXHQgKlxuXHQgKiBAcGFyYW0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0VG9wUXVpY2tFZGl0RW50cnkob25DbGljazoge1xuXHRcdChhcmcwPzoge3NlY3Rpb25OdW1iZXI6IG51bWJlcjsgc2VjdGlvbk5hbWU6IHN0cmluZzsgdGFyZ2V0UGFnZU5hbWU6IHN0cmluZ30pOiBQcm9taXNlPHZvaWQ+O1xuXHRcdChhcmcwOiB7c2VjdGlvbk51bWJlcjogbnVtYmVyOyB0YXJnZXRQYWdlTmFtZTogc3RyaW5nfSk6IHZvaWQ7XG5cdH0pIHtcblx0XHRjb25zdCB0b3BCdG4gPSAkKCc8bGk+JykuYXR0cignaWQnLCAnV2lraXBsdXMtRWRpdC1Ub3BCdG4nKS5hdHRyKCdjbGFzcycsICdtdy1saXN0LWl0ZW0nKTtcblx0XHRjb25zdCB0b3BCdG5MaW5rID0gJCgnPGE+Jylcblx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3RvcGJ0bicpfWApO1xuXHRcdHRvcEJ0bi5hcHBlbmQodG9wQnRuTGluayk7XG5cdFx0c3dpdGNoIChDb25zdGFudHMuc2tpbikge1xuXHRcdFx0Y2FzZSAnbWluZXJ2YSc6XG5cdFx0XHRcdHRvcEJ0bi5jc3MoeydhbGlnbi1pdGVtcyc6ICdjZW50ZXInLCBkaXNwbGF5OiAnZmxleCd9KTtcblx0XHRcdFx0dG9wQnRuLmZpbmQoJ3NwYW4nKS5hZGRDbGFzcygncGFnZS1hY3Rpb25zLW1lbnVfX2xpc3QtaXRlbScpO1xuXHRcdFx0XHR0b3BCdG5cblx0XHRcdFx0XHQuZmluZCgnYScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKFxuXHRcdFx0XHRcdFx0J213LXVpLWljb24gbXctdWktaWNvbi1lbGVtZW50IG13LXVpLWljb24td2lraW1lZGlhLWVkaXQtYmFzZTIwIG13LXVpLWljb24td2l0aC1sYWJlbC1kZXNrdG9wJ1xuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQuY3NzKCd2ZXJ0aWNhbC1hbGlnbicsICdtaWRkbGUnKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3ZlY3Rvci0yMDIyJzpcblx0XHRcdFx0dG9wQnRuLmFkZENsYXNzKCd2ZWN0b3ItdGFiLW5vaWNvbicpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndmVjdG9yJzpcblx0XHRcdFx0dG9wQnRuLmFwcGVuZCgkKCc8c3Bhbj4nKS5hcHBlbmQodG9wQnRuTGluaykpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHR9XG5cdFx0JCh0b3BCdG4pLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRzZWN0aW9uTnVtYmVyOiAtMSxcblx0XHRcdFx0dGFyZ2V0UGFnZU5hbWU6IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWUsXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRpZiAoJCgnI2NhLWVkaXQnKS5sZW5ndGggPiAwICYmICQoJyNXaWtpcGx1cy1FZGl0LVRvcEJ0bicpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0aWYgKENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YSknKSB7XG5cdFx0XHRcdCQoJyNjYS1lZGl0JykucGFyZW50KCkuYWZ0ZXIodG9wQnRuKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJyNjYS1lZGl0JykuYWZ0ZXIodG9wQnRuKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl5q616JC95b+r6YCf57yW6L6R5oyJ6ZKuXG5cdCAqIEluc2VydCBRdWlja0VkaXQgYnV0dG9ucyBmb3IgZWFjaCBzZWN0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2VjdGlvblF1aWNrRWRpdEVudHJpZXMoXG5cdFx0b25DbGljazogKG9uQ2xpY2s/OiB7XG5cdFx0XHRzZWN0aW9uTnVtYmVyOiBzdHJpbmcgfCBudW1iZXI7XG5cdFx0XHRzZWN0aW9uTmFtZTogc3RyaW5nO1xuXHRcdFx0dGFyZ2V0UGFnZU5hbWU6IHN0cmluZztcblx0XHR9KSA9PiB2b2lkID0gKCkgPT4ge31cblx0KSB7XG5cdFx0Y29uc3Qgc2VjdGlvbkJ0biA9XG5cdFx0XHRDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnXG5cdFx0XHRcdD8gJCgnPHNwYW4+JykuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKFxuXHRcdFx0XHRcdFx0XHRcdCdXaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4gbXctdWktaWNvbiBtdy11aS1pY29uLWVsZW1lbnQgbXctdWktaWNvbi13aWtpbWVkaWEtZWRpdC1iYXNlMjAgZWRpdC1wYWdlIG13LXVpLWljb24tZmx1c2gtcmlnaHQnXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0LmNzcygnbWFyZ2luLWxlZnQnLCAnMC43NWVtJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3RpdGxlJywgaTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF9zZWN0aW9uYnRuJykpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQ6ICQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLmFkZENsYXNzKCdtdy1lZGl0c2VjdGlvbi1kaXZpZGVyJykudGV4dCgnIHwgJykpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuJylcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpKVxuXHRcdFx0XHRcdFx0KTtcblx0XHQkKCcubXctZWRpdHNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGVkaXRVUkwgPSAkKHRoaXMpLmZpbmQoXCJhW2hyZWYqPSdhY3Rpb249ZWRpdCddXCIpLmZpcnN0KCkuYXR0cignaHJlZicpIHx8ICcnO1xuXHRcdFx0XHRjb25zdCBbLCBzZWN0aW9uTGFiZWxdID0gZWRpdFVSTC5tYXRjaCgvJlt2ZV0qc2VjdGlvblxcPShbXiZdKykvKSBhcyBSZWdFeHBFeGVjQXJyYXk7IC8vIGB2ZWAgZm9yIHZpc3VhbCBlZGl0b3Jcblx0XHRcdFx0Y29uc3Qgc2VjdGlvbk51bWJlciA9IHNlY3Rpb25MYWJlbD8ucmVwbGFjZSgvVC0vZ2ksICcnKTsgLy8gZW1iZWRkZWQgcGFnZXMgdXNlIFQtc2VyaWVzIHNlY3Rpb24gbnVtYmVyXG5cdFx0XHRcdGNvbnN0IFssIHNlY3Rpb25UYXJnZXRMYWJlbF0gPSBlZGl0VVJMLm1hdGNoKC90aXRsZT0oLis/KSYvKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25UYXJnZXROYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KHNlY3Rpb25UYXJnZXRMYWJlbCB8fCAnJyk7XG5cdFx0XHRcdGNvbnN0IGNsb25lTm9kZSA9ICQodGhpcykucHJldigpLmNsb25lKCk7XG5cdFx0XHRcdGNsb25lTm9kZS5maW5kKCcubXctaGVhZGxpbmUtbnVtYmVyJykucmVtb3ZlKCk7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25OYW1lID0gY2xvbmVOb2RlLnRleHQoKS50cmltKCk7XG5cdFx0XHRcdGNvbnN0IF9zZWN0aW9uQnRuID0gc2VjdGlvbkJ0bi5jbG9uZSgpO1xuXHRcdFx0XHRfc2VjdGlvbkJ0bi5maW5kKCcuV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuJykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcjogc2VjdGlvbk51bWJlciBhcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRzZWN0aW9uTmFtZSxcblx0XHRcdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBzZWN0aW9uVGFyZ2V0TmFtZSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5hcHBlbmQoX3NlY3Rpb25CdG4pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQodGhpcykuZmluZCgnLm13LWVkaXRzZWN0aW9uLWJyYWNrZXQnKS5sYXN0KCkuYmVmb3JlKF9zZWN0aW9uQnRuKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdExvZy5lcnJvcignZmFpbF90b19pbml0X3F1aWNrZWRpdCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeS7u+aEj+mTvuaOpee8lui+keWFpeWPo1xuXHQgKlxuXHQgKiBAcGFyYW0geyp9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydExpbmtFZGl0RW50cmllcyhcblx0XHRvbkNsaWNrOiAoYXJnMDoge3RhcmdldFBhZ2VOYW1lOiBzdHJpbmc7IHNlY3Rpb25OdW1iZXI6IHN0cmluZyB8IG51bWJlcn0pID0+IHZvaWQgPSAoKSA9PiB7fVxuXHQpIHtcblx0XHQkKCcjbXctY29udGVudC10ZXh0IGEuZXh0ZXJuYWwnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpIHx8ICcnO1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeSh1cmwpO1xuXHRcdFx0aWYgKHBhcmFtc1snYWN0aW9uJ10gPT09ICdlZGl0JyAmJiBwYXJhbXNbJ3RpdGxlJ10gIT09IHVuZGVmaW5lZCAmJiBwYXJhbXNbJ3NlY3Rpb24nXSAhPT0gJ25ldycpIHtcblx0XHRcdFx0JCh0aGlzKS5hZnRlcihcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnamF2YXNjcmlwdDp2b2lkKDApJyxcblx0XHRcdFx0XHRcdFx0Y2xhc3M6ICdXaWtpcGx1cy1FZGl0LUV2ZXJ5V2hlcmVCdG4nLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC50ZXh0KGAoJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3NlY3Rpb25idG4nKX0pYClcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBwYXJhbXNbJ3RpdGxlJ10gYXMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdHNlY3Rpb25OdW1iZXI6IHBhcmFtc1snc2VjdGlvbiddID8/IC0xLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRzaG93UXVpY2tFZGl0UGFuZWwoe1xuXHRcdHRpdGxlID0gJycsXG5cdFx0Y29udGVudCA9ICcnLFxuXHRcdHN1bW1hcnkgPSAnJyxcblx0XHRvbkJhY2sgPSAoKSA9PiB7fSxcblx0XHRvblBhcnNlID0gKCkgPT4ge30sXG5cdFx0b25FZGl0ID0gKCkgPT4ge30sXG5cdFx0ZXNjRXhpdCA9IGZhbHNlLFxuXHR9OiB7XG5cdFx0dGl0bGU6IHN0cmluZztcblx0XHRjb250ZW50OiBzdHJpbmc7XG5cdFx0c3VtbWFyeTogc3RyaW5nO1xuXHRcdG9uQmFjazogKCkgPT4gdm9pZDtcblx0XHRvblBhcnNlOiAod2lraXRleHQ6IHN0cmluZykgPT4gdm9pZCB8IFByb21pc2U8dm9pZD47XG5cdFx0b25FZGl0OiAoYXJnMDoge3N1bW1hcnk6IHN0cmluZzsgY29udGVudDogc3RyaW5nOyBpc01pbm9yRWRpdDogYm9vbGVhbn0pID0+IHZvaWQ7XG5cdFx0ZXNjRXhpdDogYm9vbGVhbjtcblx0fSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuc2Nyb2xsVG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgfHwgMDtcblx0XHRpZiAodGhpcy5xdWlja0VkaXRQYW5lbFZpc2libGUpIHtcblx0XHRcdHRoaXMuaGlkZVF1aWNrRWRpdFBhbmVsKCk7XG5cdFx0fVxuXHRcdHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gdHJ1ZTtcblx0XHQvLyDpmLLmraLmiYvmu5HlhbPpl63pobXpnaJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdCdjbG9zZScsXG5cdFx0XHQod2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7aTE4bi50cmFuc2xhdGUoJ29uY2xvc2VfY29uZmlybScpfWA7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0Y29uc3QgaXNOZXdQYWdlID0gJCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggPiAwO1xuXHRcdC8vIERPTSDlrprkuYnlvIDlp4tcblx0XHRjb25zdCBiYWNrQnRuID0gJCgnPHNwYW4+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJ0bicpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnYmFjaycpfWApOyAvLyDov5Tlm57mjInpkq5cblx0XHRjb25zdCBqdW1wQnRuID0gJCgnPHNwYW4+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtSnVtcCcpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJ0bicpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJyNXaWtpcGx1cy1RdWlja2VkaXQnKVxuXHRcdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdnb3RvX2VkaXRib3gnKX1gKVxuXHRcdFx0KTsgLy8g5Yiw57yW6L6R5qGGXG5cdFx0Y29uc3QgaW5wdXRCb3ggPSAkKCc8dGV4dGFyZWE+JykuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0Jyk7IC8vIOS4u+e8lui+keahhlxuXHRcdGNvbnN0IHByZXZpZXdCb3ggPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpOyAvLyDpooTop4jovpPlh7pcblx0XHRjb25zdCBzdW1tYXJ5Qm94ID0gJCgnPGlucHV0PicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQnKVxuXHRcdFx0LmF0dHIoJ3BsYWNlaG9sZGVyJywgYCR7aTE4bi50cmFuc2xhdGUoJ3N1bW1hcnlfcGxhY2Vob2xkJyl9YCk7IC8vIOe8lui+keaRmOimgei+k+WFpVxuXHRcdGNvbnN0IGVkaXRTdWJtaXRCdG4gPSAkKCc8YnV0dG9uPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZShpc05ld1BhZ2UgPyAncHVibGlzaF9wYWdlJyA6ICdwdWJsaXNoX2NoYW5nZScpfShDdHJsK1MpYCk7IC8vIOaPkOS6pOaMiemSrlxuXHRcdGNvbnN0IHByZXZpZXdTdWJtaXRCdG4gPSAkKCc8YnV0dG9uPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0Jylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdwcmV2aWV3Jyl9YCk7IC8vIOmihOiniOaMiemSrlxuXHRcdGNvbnN0IGlzTWlub3JFZGl0ID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFwcGVuZCgkKCc8aW5wdXQ+JykuYXR0cih7dHlwZTogJ2NoZWNrYm94JywgaWQ6ICdXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0J30pKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGxhYmVsPicpXG5cdFx0XHRcdFx0LmF0dHIoJ2ZvcicsICdXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0Jylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnbWFya19taW5vcmVkaXQnKX0oQ3RybCtTaGlmdCtTKWApXG5cdFx0XHQpXG5cdFx0XHQuY3NzKHttYXJnaW46ICc1cHggNXB4IDVweCAtM3B4JywgZGlzcGxheTogJ2lubGluZSd9KTtcblx0XHQvLyBET03lrprkuYnnu5PmnZ9cblx0XHRjb25zdCBlZGl0Qm9keSA9ICQoJzxkaXY+JykuYXBwZW5kKFxuXHRcdFx0YmFja0J0bixcblx0XHRcdGp1bXBCdG4sXG5cdFx0XHRwcmV2aWV3Qm94LFxuXHRcdFx0aW5wdXRCb3gsXG5cdFx0XHRzdW1tYXJ5Qm94LFxuXHRcdFx0JCgnPGJyPicpLFxuXHRcdFx0aXNNaW5vckVkaXQsXG5cdFx0XHRlZGl0U3VibWl0QnRuLFxuXHRcdFx0cHJldmlld1N1Ym1pdEJ0blxuXHRcdCk7XG5cdFx0dGhpcy5jcmVhdGVEaWFsb2dCb3godGl0bGUsIGVkaXRCb2R5LCAxMDAwLCAoKSA9PiB7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKGNvbnRlbnQpO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0JykudmFsKHN1bW1hcnkpO1xuXHRcdH0pO1xuXHRcdC8vIEJhY2tcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKS5vbignY2xpY2snLCBvbkJhY2spO1xuXHRcdC8vIFByZXZpZXdcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0Jykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcHJlbG9hZEJhbm5lciA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnbG9hZGluZ19wcmV2aWV3Jyl9YCk7XG5cdFx0XHRjb25zdCB3aWtpVGV4dCA9ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQnKS52YWwoKTtcblx0XHRcdCQodGhpcykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KDEwMCwgKCkgPT4ge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuaHRtbCgnJykuYXBwZW5kKHByZWxvYWRCYW5uZXIpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZUluKDEwMCk7XG5cdFx0XHR9KTtcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHNlbGYuc2Nyb2xsVG9wfSwgMjAwKTsgLy/ov5Tlm57pobbpg6hcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9uUGFyc2Uod2lraVRleHQgYXMgc3RyaW5nKTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KCcxMDAnLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKGA8aHI+PGRpdiBjbGFzcz1cIm13LWJvZHktY29udGVudFwiPiR7cmVzdWx0fTwvZGl2Pjxocj5gKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbignMTAwJyk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdC8vIEVkaXRcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHRpbWVyID0gRGF0ZS5ub3coKTtcblx0XHRcdGNvbnN0IGVkaXRCYW5uZXIgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3N1Ym1pdHRpbmdfZWRpdCcpfWApO1xuXHRcdFx0Y29uc3QgcGF5bG9hZCA9IHtcblx0XHRcdFx0c3VtbWFyeTogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0JykudmFsKCkgYXMgc3RyaW5nLFxuXHRcdFx0XHRjb250ZW50OiAkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKCkgYXMgc3RyaW5nLFxuXHRcdFx0XHRpc01pbm9yRWRpdDogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKS5pcygnOmNoZWNrZWQnKSBhcyBib29sZWFuLFxuXHRcdFx0fTtcblx0XHRcdC8vIOWHhuWkh+e8lui+kSDnpoHnlKjmjInpkq4g5omn6KGM5Yqo55S7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCwjV2lraXBsdXMtUXVpY2tlZGl0LCNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5hdHRyKFxuXHRcdFx0XHQnZGlzYWJsZWQnLFxuXHRcdFx0XHQnZGlzYWJsZWQnXG5cdFx0XHQpO1xuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogc2VsZi5zY3JvbGxUb3B9LCAyMDApO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVPdXQoMTAwLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKCcnKS5hcHBlbmQoZWRpdEJhbm5lcik7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlSW4oMTAwKTtcblx0XHRcdH0pO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgb25FZGl0KHBheWxvYWQpO1xuXHRcdFx0XHRjb25zdCB1c2VUaW1lID0gRGF0ZS5ub3coKSAtIHRpbWVyO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0Jylcblx0XHRcdFx0XHQuZmluZCgnLldpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdFx0LmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDYsIDIzOSwgOTIsIDAuNDQpJyk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKVxuXHRcdFx0XHRcdC5maW5kKCcuV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnZWRpdF9zdWNjZXNzJywgW3VzZVRpbWUudG9TdHJpbmcoKV0pfWApO1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0d2luZG93Lm9uYmVmb3JldW5sb2FkID0gbnVsbDtcblx0XHRcdFx0fSk7IC8vIOWPlua2iOmhtemdouWFs+mXreehruiupFxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDIxOCwgMTQyLCAxNjcsIDAuNjUpJyk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5odG1sKChlcnJvciBhcyBXaWtpcGx1c0Vycm9yKS5tZXNzYWdlKTtcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0LCNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLnByb3AoXG5cdFx0XHRcdFx0J2Rpc2FibGVkJyxcblx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vIEN0cmwrU+aPkOS6pCBDdHJsK1NoaWZ0K1PlsI/nvJbovpFcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LCNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCwjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpLm9uKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChlLmN0cmxLZXkgJiYgZS53aGljaCA9PT0gODMpIHtcblx0XHRcdFx0aWYgKGUuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly8gRXNj6YCA5Ye6XG5cdFx0aWYgKGVzY0V4aXQpIHtcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdFx0aWYgKGUud2hpY2ggPT09IDI3KSB7XG5cdFx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0aGlkZVF1aWNrRWRpdFBhbmVsKCkge1xuXHRcdHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gZmFsc2U7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHtcblx0XHRcdFx0d2luZG93Lm9uYmVmb3JldW5sb2FkID0gbnVsbDtcblx0XHRcdH0pOyAvLyDlj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICog5pi+56S65b+r6YCf6YeN5a6a5ZCR5by556qXXG5cdCAqXG5cdCAqIEBwYXJhbSByb290MFxuXHQgKiBAcGFyYW0gcm9vdDAub25FZGl0XG5cdCAqIEBwYXJhbSByb290MC5vblN1Y2Nlc3Ncblx0ICovXG5cdHNob3dTaW1wbGVSZWRpcmVjdFBhbmVsKHtcblx0XHRvbkVkaXQgPSAoKSA9PiB7fSxcblx0XHRvblN1Y2Nlc3MgPSAoKSA9PiB7fSxcblx0fToge1xuXHRcdG9uRWRpdD86IChhcmcwOiB7dGl0bGU6IHN0cmluZzsgc3VtbWFyeTogc3RyaW5nOyBmb3JjZU92ZXJ3cml0ZTogYm9vbGVhbn0pID0+IHZvaWQ7XG5cdFx0b25TdWNjZXNzPzogKGFyZzA6IHt0aXRsZTogc3RyaW5nfSkgPT4gdm9pZDtcblx0fSA9IHt9KSB7XG5cdFx0Y29uc3QgaW5wdXQgPSAkKCc8aW5wdXQ+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUlucHV0JykuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItVGl0bGUnKTtcblx0XHRjb25zdCBzdW1tYXJ5SW5wdXRUaXRsZSA9ICQoJzxwPicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X3N1bW1hcnlfZGVzYycpKTtcblx0XHRjb25zdCBzdW1tYXJ5SW5wdXQgPSAkKCc8aW5wdXQ+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUlucHV0JykuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItU3VtbWFyeScpO1xuXHRcdGNvbnN0IGFwcGx5QnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLUFwcGx5Jylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdzdWJtaXQnKSk7XG5cdFx0Y29uc3QgY2FuY2VsQnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLUNhbmNlbCcpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY2FuY2VsJykpO1xuXHRcdGNvbnN0IGNvbnRpbnVlQnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLUNvbnRpbnVlJylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdjb250aW51ZScpKTtcblx0XHRjb25zdCBjb250ZW50ID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFwcGVuZChpbnB1dClcblx0XHRcdC5hcHBlbmQoc3VtbWFyeUlucHV0VGl0bGUpXG5cdFx0XHQuYXBwZW5kKHN1bW1hcnlJbnB1dClcblx0XHRcdC5hcHBlbmQoJCgnPGhyPicpKVxuXHRcdFx0LmFwcGVuZChhcHBseUJ0bilcblx0XHRcdC5hcHBlbmQoY2FuY2VsQnRuKTsgLy8g5ou85o6lXG5cdFx0Y29uc3QgZGlhbG9nID0gdGhpcy5jcmVhdGVEaWFsb2dCb3goaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X2Rlc2MnKSwgY29udGVudCwgNjAwKTtcblx0XHRhcHBseUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCB0aXRsZSA9ICQoJyNXaWtpcGx1cy1TUi1UaXRsZScpLnZhbCgpIGFzIHN0cmluZztcblx0XHRcdGNvbnN0IHN1bW1hcnkgPSAkKCcjV2lraXBsdXMtU1ItU3VtbWFyeScpLnZhbCgpIGFzIHN0cmluZztcblx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuaHRtbChcblx0XHRcdFx0YDxkaXYgY2xhc3M9XCJXaWtpcGx1cy1CYW5uZXJcIj4ke2kxOG4udHJhbnNsYXRlKCdzdWJtaXR0aW5nX2VkaXQnKX08L2Rpdj5gXG5cdFx0XHQpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgb25FZGl0KHtcblx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdGZvcmNlT3ZlcndyaXRlOiBmYWxzZSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zYXZlZCcpKTtcblx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRvblN1Y2Nlc3Moe3RpdGxlfSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoKGVycm9yIGFzIFdpa2lwbHVzRXJyb3IpLm1lc3NhZ2UpO1xuXHRcdFx0XHRpZiAoKGVycm9yIGFzIFdpa2lwbHVzRXJyb3IpLmNvZGUgPT09ICdhcnRpY2xlZXhpc3RzJykge1xuXHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGNvbnRpbnVlQnRuKS5hcHBlbmQoY2FuY2VsQnRuKTtcblx0XHRcdFx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlQnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuaHRtbChcblx0XHRcdFx0XHRcdFx0YDxkaXYgY2xhc3M9XCJXaWtpcGx1cy1CYW5uZXJcIj4ke2kxOG4udHJhbnNsYXRlKCdzdWJtaXR0aW5nX2VkaXQnKX08L2Rpdj5gXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgb25FZGl0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0XHRcdGZvcmNlT3ZlcndyaXRlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X3NhdmVkJykpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyk7XG5cdFx0XHRcdFx0XHRcdG9uU3VjY2Vzcyh7dGl0bGV9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSgyMTgsIDE0MiwgMTY3LCAwLjY1KScpO1xuXHRcdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dCgoZXJyb3IgYXMgV2lraXBsdXNFcnJvcikubWVzc2FnZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOmakOiXj+W/q+mAn+mHjeWumuWQkeW8ueeql1xuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGRpYWxvZ1xuXHQgKi9cblx0aGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nID0gJCgnYm9keScpKSB7XG5cdFx0ZGlhbG9nLmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRzaG93U2V0dGluZ3NQYW5lbCh7XG5cdFx0b25TdWJtaXQgPSAoKSA9PiB7fSxcblx0fToge1xuXHRcdG9uU3VibWl0PzogKGFyZzA6IHtzZXR0aW5nczogc3RyaW5nfSkgPT4gdm9pZDtcblx0fSA9IHt9KSB7XG5cdFx0Y29uc3QgaW5wdXQgPSAkKCc8dGV4dGFyZWE+JykuYXR0cignaWQnLCAnV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLmF0dHIoJ3Jvd3MnLCAnMTAnKTtcblx0XHRjb25zdCBhcHBseUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TZXR0aW5nLUFwcGx5Jylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdzdWJtaXQnKSk7XG5cdFx0Y29uc3QgY2FuY2VsQnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNldHRpbmctQ2FuY2VsJylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdjYW5jZWwnKSk7XG5cdFx0Y29uc3QgY29udGVudCA9ICQoJzxkaXY+JykuYXBwZW5kKGlucHV0KS5hcHBlbmQoJCgnPGhyPicpKS5hcHBlbmQoYXBwbHlCdG4pLmFwcGVuZChjYW5jZWxCdG4pOyAvLyDmi7zmjqVcblxuXHRcdGNvbnN0IGRpYWxvZyA9IHRoaXMuY3JlYXRlRGlhbG9nQm94KGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19kZXNjJyksIGNvbnRlbnQsIDYwMCwgKCkgPT4ge1xuXHRcdFx0aWYgKGxvY2FsU3RvcmFnZVsnV2lraXBsdXNfU2V0dGluZ3MnXSkge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbChsb2NhbFN0b3JhZ2VbJ1dpa2lwbHVzX1NldHRpbmdzJ10pO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbJ1dpa2lwbHVzX1NldHRpbmdzJ10pO1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKEpTT04uc3RyaW5naWZ5KHNldHRpbmdzLCBudWxsLCAyKSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8vIGlnbm9yZVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLmF0dHIoJ3BsYWNlaG9sZGVyJywgaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX3BsYWNlaG9sZGVyJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGFwcGx5QnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHNhdmVkQmFubmVyID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJykudGV4dChpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3Nfc2F2ZWQnKSk7XG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9ICQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKCkgYXMgc3RyaW5nO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0b25TdWJtaXQoe3NldHRpbmdzfSk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuaHRtbCgnJykuYXBwZW5kKHNhdmVkQmFubmVyKTtcblx0XHRcdFx0YXdhaXQgc2xlZXAoMTUwMCk7XG5cdFx0XHRcdHRoaXMuaGlkZVNldHRpbmdzUGFuZWwoZGlhbG9nKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHROb3RpZmljYXRpb24uZXJyb3IoaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX2dyYW1tYXJfZXJyb3InKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMuaGlkZVNldHRpbmdzUGFuZWwoZGlhbG9nKTtcblx0XHR9KTtcblx0fVxuXG5cdGhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyA9ICQoJ2JvZHknKSkge1xuXHRcdGRpYWxvZy5maW5kKCcuV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKS50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0YmluZFByZWxvYWRFdmVudHMob25QcmVsb2FkOiB7KGFyZzA6IHtzZWN0aW9uTnVtYmVyOiBudW1iZXJ9KTogdm9pZH0pIHtcblx0XHQkKCcjdG9jJylcblx0XHRcdC5jaGlsZHJlbigndWwnKVxuXHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0LmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0JCh0aGlzKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCQodGhpcykub2ZmKCdtb3VzZW92ZXInKTtcblx0XHRcdFx0XHRvblByZWxvYWQoe1xuXHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcjogaSArIDEsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVJKCk7XG4iLCAiLyoqXG4gKiBXaWtpcGx1c1xuICogRXJpZGFudXMgU29yYSA8c29yYUBzb3VuZC5tb2U+XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgJy4vd2lraXBsdXMubGVzcyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCBMb2cgZnJvbSAnLi91dGlscy9sb2cnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL2NvcmUvbm90aWZpY2F0aW9uJztcbmltcG9ydCBQYWdlIGZyb20gJy4vY29yZS9wYWdlJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3V0aWxzL3NldHRpbmdzJztcbmltcG9ydCBVSSBmcm9tICcuL2NvcmUvdWknO1xuaW1wb3J0IFdpa2kgZnJvbSAnLi9zZXJ2aWNlcy93aWtpJztcbmltcG9ydCBpMThuIGZyb20gJy4vdXRpbHMvaTE4bic7XG5cbiQoYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBQYWdlcyA9IHt9O1xuXHRjb25zdCBpc0N1cnJlbnRQYWdlRW1wdHkgPSAkKCcubm9hcnRpY2xldGV4dCcpLmxlbmd0aCA+IDAgJiYgQ29uc3RhbnRzLmFydGljbGVJZCA9PT0gMDtcblxuXHQvKipcblx0ICogR2V0IHBhZ2UgaW5zdGFuY2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMucmV2aXNpb25JZCDpobXpnaLkv67orqLniYjmnKzlj7dcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy50aXRsZSDpobXpnaLmoIfpophcblx0ICovXG5cdGNvbnN0IGdldFBhZ2UgPSBhc3luYyAoe3JldmlzaW9uSWQsIHRpdGxlfSkgPT4ge1xuXHRcdGlmIChQYWdlc1tyZXZpc2lvbklkXSkge1xuXHRcdFx0cmV0dXJuIFBhZ2VzW3JldmlzaW9uSWRdO1xuXHRcdH1cblx0XHRjb25zdCBuZXdQYWdlID0gbmV3IFBhZ2Uoe1xuXHRcdFx0cmV2aXNpb25JZCxcblx0XHRcdHRpdGxlLFxuXHRcdH0pO1xuXHRcdGF3YWl0IG5ld1BhZ2UuaW5pdCgpO1xuXHRcdFBhZ2VzW3JldmlzaW9uSWRdID0gbmV3UGFnZTtcblx0XHRyZXR1cm4gUGFnZXNbcmV2aXNpb25JZF07XG5cdH07XG5cblx0TG9nLmluZm8oYFdpa2lwbHVzIG5vdyBsb2FkaW5nLiBWZXJzaW9uOiAke0NvbnN0YW50cy52ZXJzaW9ufWApO1xuXG5cdGlmICghd2luZG93Lm13KSB7XG5cdFx0Y29uc29sZS5sb2coJ01lZGlhd2lraSBKYXZhU2NyaXB0IG5vdCBsb2FkZWQgb3Igbm90IGEgTWVkaWF3aWtpIHdlYnNpdGUuJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmICghQ29uc3RhbnRzLnVzZXJHcm91cHMuaW5jbHVkZXMoJ2F1dG9jb25maXJtZWQnKSAmJiAhQ29uc3RhbnRzLnVzZXJHcm91cHMuaW5jbHVkZXMoJ2NvbmZpcm1lZCcpKSB7XG5cdFx0Tm90aWZpY2F0aW9uLmVycm9yKGkxOG4udHJhbnNsYXRlKCdub3RfYXV0b2NvbmZpcm1lZF91c2VyJykpO1xuXHRcdExvZy5pbmZvKGkxOG4udHJhbnNsYXRlKCdub3RfYXV0b2NvbmZpcm1lZF91c2VyJykpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghQ29uc3RhbnRzLmlzQXJ0aWNsZSB8fCBDb25zdGFudHMuYWN0aW9uICE9PSAndmlldycpIHtcblx0XHRMb2cuaW5mbygnTm90IGFuIGVkaXRhYmxlIHBhZ2UuIFN0b3AgaW5pdGlhbGl6YXRpb24uJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gSW5pdGlhbGl6ZSBjdXJyZW50IHBhZ2Ug6buY6K6k5Yid5aeL5YyW5b2T5YmN6aG16Z2iXG5cdHdpbmRvdy5fV2lraXBsdXNQYWdlcyA9IFBhZ2VzO1xuXHRjb25zdCBjdXJyZW50UGFnZU5hbWUgPSBDb25zdGFudHMuY3VycmVudFBhZ2VOYW1lO1xuXHRjb25zdCByZXZpc2lvbklkID0gQ29uc3RhbnRzLnJldmlzaW9uSWQ7XG5cdGNvbnN0IGN1cnJlbnRQYWdlID0gYXdhaXQgZ2V0UGFnZSh7XG5cdFx0cmV2aXNpb25JZCxcblx0XHR0aXRsZTogY3VycmVudFBhZ2VOYW1lLFxuXHR9KTtcblxuXHRjb25zdCBoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkID0gYXN5bmMgKHtzZWN0aW9uTnVtYmVyLCBzZWN0aW9uTmFtZSwgdGFyZ2V0UGFnZU5hbWV9ID0ge30pID0+IHtcblx0XHRjb25zdCBpc090aGVyUGFnZSA9IHRhcmdldFBhZ2VOYW1lICE9PSBjdXJyZW50UGFnZU5hbWU7XG5cdFx0aWYgKGlzT3RoZXJQYWdlICYmIENvbnN0YW50cy5sYXRlc3RSZXZpc2lvbklkICE9PSBDb25zdGFudHMucmV2aXNpb25JZCkge1xuXHRcdFx0Ly8g5Zyo5Y6G5Y+y54mI5pys57yW6L6R5YW25LuW6aG16Z2i5pyJ6Zeu6aKYIOaaguaXtuS4jeaUr+aMgVxuXHRcdFx0TG9nLmVycm9yKCdjcm9zc19wYWdlX2hpc3RvcnlfcmV2aXNpb25fZWRpdF93YXJuaW5nJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHJldmlzaW9uSWQgPSBpc090aGVyUGFnZSA/IGF3YWl0IFdpa2kuZ2V0TGF0ZXN0UmV2aXNpb25JZEZvclBhZ2UodGFyZ2V0UGFnZU5hbWUpIDogQ29uc3RhbnRzLnJldmlzaW9uSWQ7XG5cblx0XHRjb25zdCBwYWdlID0gYXdhaXQgZ2V0UGFnZSh7cmV2aXNpb25JZCwgdGl0bGU6IHRhcmdldFBhZ2VOYW1lfSk7XG5cdFx0Y29uc3QgY3VzdG9tU3VtbWFyeSA9IFNldHRpbmdzLmdldFNldHRpbmcoJ2RlZmF1bHRTdW1tYXJ5Jywge1xuXHRcdFx0c2VjdGlvbk5hbWUsXG5cdFx0XHRzZWN0aW9uTnVtYmVyLFxuXHRcdFx0c2VjdGlvblRhcmdldE5hbWU6IHRhcmdldFBhZ2VOYW1lLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHN1bW1hcnkgPVxuXHRcdFx0Y3VzdG9tU3VtbWFyeSB8fFxuXHRcdFx0KHNlY3Rpb25OYW1lXG5cdFx0XHRcdD8gYC8qICR7c2VjdGlvbk5hbWV9ICovICR7aTE4bi50cmFuc2xhdGUoJ2RlZmF1bHRfc3VtbWFyeV9zdWZmaXgnKX1gXG5cdFx0XHRcdDogaTE4bi50cmFuc2xhdGUoJ2RlZmF1bHRfc3VtbWFyeV9zdWZmaXgnKSk7XG5cdFx0Y29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdE5vdGlmaWNhdGlvbi5zdWNjZXNzKGkxOG4udHJhbnNsYXRlKCdsb2FkaW5nJykpO1xuXHRcdH0sIDIwMCk7XG5cdFx0Y29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBhd2FpdCBwYWdlLmdldFdpa2lUZXh0KHtcblx0XHRcdHNlY3Rpb246IHNlY3Rpb25OdW1iZXIsXG5cdFx0fSk7XG5cdFx0Y29uc3QgaXNFZGl0SGlzdG9yeVJldmlzaW9uID0gIWlzT3RoZXJQYWdlICYmIENvbnN0YW50cy5sYXRlc3RSZXZpc2lvbklkICE9PSBDb25zdGFudHMucmV2aXNpb25JZDtcblx0XHRjb25zdCBlc2NUb0V4aXQgPVxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjX3RvX2V4aXRfcXVpY2tlZGl0JykgPT09IHRydWUgfHwgLy8g5YW85a656ICB6K6+572ua2V5XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NfdG9fZXhpdF9xdWlja2VkaXQnKSA9PT0gJ3RydWUnIHx8XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NUb0V4aXRRdWlja0VkaXQnKSA9PT0gdHJ1ZSB8fFxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjVG9FeGl0UXVpY2tFZGl0JykgPT09ICd0cnVlJztcblx0XHRjb25zdCBjdXN0b21FZGl0VGFncyA9IFNldHRpbmdzLmdldFNldHRpbmcoJ2N1c3RvbV9lZGl0X3RhZ3MnKTtcblx0XHRjb25zdCBkZWZhdWx0RWRpdFRhZ3MgPSBbXTtcblx0XHRjb25zdCBlZGl0VGFncyA9IGN1c3RvbUVkaXRUYWdzPy5sZW5ndGggPyBjdXN0b21FZGl0VGFncyA6IGRlZmF1bHRFZGl0VGFncztcblx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHRcdE5vdGlmaWNhdGlvbi5lbXB0eSgpO1xuXG5cdFx0aWYgKGlzRWRpdEhpc3RvcnlSZXZpc2lvbikge1xuXHRcdFx0Tm90aWZpY2F0aW9uLndhcm5pbmcoaTE4bi50cmFuc2xhdGUoJ2hpc3RvcnlfZWRpdF93YXJuaW5nJykpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNob3VsZFNob3dDcmVhdGVQYWdlVGlwID0gaXNPdGhlclBhZ2UgPyAhcmV2aXNpb25JZCA6IGlzQ3VycmVudFBhZ2VFbXB0eTtcblxuXHRcdFVJLnNob3dRdWlja0VkaXRQYW5lbCh7XG5cdFx0XHR0aXRsZTogYCR7aTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF90b3BidG4nKX0ke1xuXHRcdFx0XHRpc0VkaXRIaXN0b3J5UmV2aXNpb24gPyBpMThuLnRyYW5zbGF0ZSgnaGlzdG9yeV9lZGl0X3dhcm5pbmcnKSA6ICcnXG5cdFx0XHR9YCxcblx0XHRcdGNvbnRlbnQ6IHNob3VsZFNob3dDcmVhdGVQYWdlVGlwID8gaTE4bi50cmFuc2xhdGUoJ2NyZWF0ZV9wYWdlX3RpcCcpIDogc2VjdGlvbkNvbnRlbnQsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdFx0b25CYWNrOiBVSS5oaWRlUXVpY2tFZGl0UGFuZWwsXG5cdFx0XHRvblBhcnNlOiAod2lraVRleHQpID0+IHtcblx0XHRcdFx0cmV0dXJuIHBhZ2UucGFyc2VXaWtpVGV4dCh3aWtpVGV4dCk7XG5cdFx0XHR9LFxuXHRcdFx0b25FZGl0OiBhc3luYyAoe2NvbnRlbnQsIHN1bW1hcnksIGlzTWlub3JFZGl0fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBlZGl0UGF5bG9hZCA9IHtcblx0XHRcdFx0XHRjb250ZW50LFxuXHRcdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdC4uLihzZWN0aW9uTnVtYmVyID09PSAtMSA/IHt9IDoge3NlY3Rpb246IHNlY3Rpb25OdW1iZXJ9KSxcblx0XHRcdFx0XHRcdC4uLihlZGl0VGFncy5sZW5ndGggPyB7dGFnczogZWRpdFRhZ3Muam9pbignfCcpfSA6IHt9KSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAoaXNNaW5vckVkaXQpIHtcblx0XHRcdFx0XHRlZGl0UGF5bG9hZC5jb25maWcubWlub3IgPSAndHJ1ZSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWRpdFBheWxvYWQuY29uZmlnLm5vdG1pbm9yID0gJ3RydWUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF3YWl0IHBhZ2UuZWRpdChlZGl0UGF5bG9hZCk7XG5cdFx0XHR9LFxuXHRcdFx0ZXNjRXhpdDogZXNjVG9FeGl0LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVNpbXBsZVJlZGlyZWN0QnV0dG9uQ2xpY2tlZCA9IGFzeW5jICgpID0+IHtcblx0XHRhd2FpdCBVSS5zaG93U2ltcGxlUmVkaXJlY3RQYW5lbCh7XG5cdFx0XHRvbkVkaXQ6IGFzeW5jICh7dGl0bGUsIHN1bW1hcnksIGZvcmNlT3ZlcndyaXRlID0gZmFsc2V9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBhZ2UgPSBhd2FpdCBnZXRQYWdlKHt0aXRsZX0pO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50UGFnZU5hbWUgPSBDb25zdGFudHMuY3VycmVudFBhZ2VOYW1lO1xuXHRcdFx0XHRjb25zdCBjb250ZW50bW9kZWwgPSBwYWdlLmNvbnRlbnRtb2RlbDtcblx0XHRcdFx0aWYgKHN1bW1hcnkgPT09ICcnKSB7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9mcm9tX3N1bW1hcnknLCBbdGl0bGUsIGN1cnJlbnRQYWdlTmFtZV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnQgPSAoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBjb250ZW50O1xuXHRcdFx0XHRcdHN3aXRjaCAoY29udGVudG1vZGVsKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdqYXZhc2NyaXB0Jzpcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IGAvKiAjUkVESVJFQ1QgKi9tdy5sb2FkZXIubG9hZChcIiR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke1xuXHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uLmhvc3Rcblx0XHRcdFx0XHRcdFx0fSR7Q29uc3RhbnRzLnNjcmlwdFBhdGh9L2luZGV4LnBocD90aXRsZT0ke213LnV0aWwud2lraVVybGVuY29kZShcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZU5hbWVcblx0XHRcdFx0XHRcdFx0KX0mYWN0aW9uPXJhdyZjdHlwZT10ZXh0L2phdmFzY3JpcHRcIik7YDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdjc3MnOlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYC8qICNSRURJUkVDVCAqL0BpbXBvcnQgdXJsKCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke1xuXHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uLmhvc3Rcblx0XHRcdFx0XHRcdFx0fSR7Q29uc3RhbnRzLnNjcmlwdFBhdGh9L2luZGV4LnBocD90aXRsZT0ke213LnV0aWwud2lraVVybGVuY29kZShcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZU5hbWVcblx0XHRcdFx0XHRcdFx0KX0mYWN0aW9uPXJhdyZjdHlwZT10ZXh0L2Nzcyk7YDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdTY3JpYnVudG8nOlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYHJldHVybiByZXF1aXJlIFtbJHtjdXJyZW50UGFnZU5hbWV9XV1gO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3dpa2l0ZXh0Jzpcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSBgI1JFRElSRUNUIFtbJHtjdXJyZW50UGFnZU5hbWV9XV1gO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHRcdH0pKCk7XG5cdFx0XHRcdGNvbnN0IHBheWxvYWQgPSB7XG5cdFx0XHRcdFx0Y29udGVudCxcblx0XHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKCFmb3JjZU92ZXJ3cml0ZSkge1xuXHRcdFx0XHRcdHBheWxvYWQuY29uZmlnLmNyZWF0ZW9ubHkgPSAndHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXdhaXQgcGFnZS5lZGl0KHBheWxvYWQpO1xuXHRcdFx0fSxcblx0XHRcdG9uU3VjY2VzczogKHt0aXRsZX0pID0+IHtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IENvbnN0YW50cy5hcnRpY2xlUGF0aC5yZXBsYWNlKC9cXCQxL2dpLCB0aXRsZSk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCA9IGFzeW5jICgpID0+IHtcblx0XHRhd2FpdCBVSS5zaG93U2V0dGluZ3NQYW5lbCh7XG5cdFx0XHRvblN1Ym1pdDogKHtzZXR0aW5nc30pID0+IHtcblx0XHRcdFx0SlNPTi5wYXJzZShzZXR0aW5ncyk7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19TZXR0aW5ncycsIHNldHRpbmdzKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlUHJlbG9hZCA9IGFzeW5jICh7c2VjdGlvbk51bWJlcn0pID0+IHtcblx0XHRhd2FpdCBjdXJyZW50UGFnZS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdH0pO1xuXHR9O1xuXG5cdFVJLmluc2VydFRvcFF1aWNrRWRpdEVudHJ5KGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyhoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0TGlua0VkaXRFbnRyaWVzKGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbihoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uKGhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmJpbmRQcmVsb2FkRXZlbnRzKGhhbmRsZVByZWxvYWQpO1xufSk7XG5cbmV4cG9ydCB7fTtcbiIsICJpbXBvcnQgJy4vV2lraXBsdXMubGVzcyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Jlc2l6ZVdpa2lwbHVzfSBmcm9tICcuL3Jlc2l6ZSc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oYXN5bmMgZnVuY3Rpb24gV2lraXBsdXMoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dJc0FydGljbGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dJc0FydGljbGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7J3Zpc3VhbGVkaXRvci1lbmFibGUnOiBpc1ZlRW5hYmxlfSA9IG13LnVzZXIub3B0aW9ucy5nZXQoKSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcblxuXHQvKiBzZWUgPGh0dHBzOi8vZ2l0aHViLmNvbS9XaWtpcGx1cy9XaWtpcGx1cy9pc3N1ZXMvNjU+ICovXG5cdGlmIChpc1ZlRW5hYmxlKSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQudmlzdWFsRWRpdG9yLmNvcmUnKTtcblx0fVxuXG5cdC8vIGltcG9ydCBtYWluIGZ1bmN0aW9uXG5cdGF3YWl0IGltcG9ydCgnLi9tb2R1bGVzL2luZGV4Jyk7XG5cblx0Ly8gcmVzaXplIFdpa2lwbHVzIHdpbmRvd1xuXHRyZXNpemVXaWtpcGx1cygkYm9keSk7XG59KTtcbiIsICJjb25zdCByZXNpemVXaWtpcGx1cyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblx0XHRjb25zdCAkd2lraXBsdXNJbnRlcmJveCA9ICRib2R5LmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveCcpO1xuXHRcdGlmICgkd2lraXBsdXNJbnRlcmJveCkge1xuXHRcdFx0Y29uc3QgY2xpZW50V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRcdGNvbnN0IGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHRcdGNvbnN0IGRpYWxvZ1dpZHRoID0gTWF0aC5taW4oY2xpZW50V2lkdGgsIDYwMCk7XG5cdFx0XHRjb25zdCBzY3JvbGxUb3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSB8fCAwO1xuXHRcdFx0JHdpa2lwbHVzSW50ZXJib3guY3NzKCdtYXJnaW4tbGVmdCcsIGNsaWVudFdpZHRoIC8gMiAtIGRpYWxvZ1dpZHRoIC8gMik7XG5cdFx0XHQkd2lraXBsdXNJbnRlcmJveC5jc3MoJ3RvcCcsIHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCAqIDAuMik7XG5cdFx0XHQkd2lraXBsdXNJbnRlcmJveC5jc3MoJ21heC13aWR0aCcsIGBjYWxjKCR7d2luZG93V2lkdGh9cHggLSAyZW0pYCk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cmVzaXplV2lraXBsdXN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxnQkFBQUMsTUFBQTtFQUFBLHVDQUFBO0VBQUE7QUFBQSxDQUFBOztBQ0FBLElBQ01DO0FBRE4sSUF1Q09DO0FBdkNQLElBQUFDLGlCQUFBSCxNQUFBO0VBQUEsNENBQUE7QUFBQTtBQUNNQyxnQkFBTixNQUFnQjtNQUNmRyxVQUFVO01BQ1YsSUFBSUMsWUFBWTtBQUNmLGVBQU9DLE9BQU9DLEdBQUdDLE9BQU9DLElBQUksYUFBYTtNQUMxQztNQUNBLElBQUlDLGtCQUFrQjtBQUNyQixlQUFPSixPQUFPQyxHQUFHQyxPQUFPQyxJQUFJLFlBQVksRUFBRUUsUUFBUSxNQUFNLEdBQUc7TUFDNUQ7TUFDQSxJQUFJQyxZQUFZO0FBQ2YsZUFBT04sT0FBT0MsR0FBR0MsT0FBT0MsSUFBSSxhQUFhO01BQzFDO01BQ0EsSUFBSUksYUFBYTtBQUNoQixlQUFPUCxPQUFPQyxHQUFHQyxPQUFPQyxJQUFJLGNBQWM7TUFDM0M7TUFDQSxJQUFJSyxtQkFBbUI7QUFDdEIsZUFBT1IsT0FBT0MsR0FBR0MsT0FBT0MsSUFBSSxpQkFBaUI7TUFDOUM7TUFDQSxJQUFJTSxjQUFjO0FBQ2pCLGVBQU9ULE9BQU9DLEdBQUdDLE9BQU9DLElBQUksZUFBZTtNQUM1QztNQUNBLElBQUlPLGFBQWE7QUFDaEIsZUFBT1YsT0FBT0MsR0FBR0MsT0FBT0MsSUFBSSxjQUFjO01BQzNDO01BQ0EsSUFBSVEsU0FBUztBQUNaLGVBQU9YLE9BQU9DLEdBQUdDLE9BQU9DLElBQUksVUFBVTtNQUN2QztNQUNBLElBQUlT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SUFDbEU7RUFDRCxDQUFDO0FBQ0Y7O0FEVkEsTUFBQSxHQUFLSixrQkFBQU0sU0FBUSxFQUFFQyxLQUFBLDRCQUFBO0FBQUEsTUFBQUMsWUFBQTdWLGtCQUFLLFdBQXdCd1YsT0FBK0M7QUFDMUYsVUFBTTtNQUFDTTtNQUFVQztJQUFXLElBQUl4WixHQUFHQyxPQUFPQyxJQUFJO0FBQzlDLFFBQUlxWixhQUFhLFVBQVUsQ0FBQ0MsYUFBYTtBQUN4QztJQUNEO0FBRUEsVUFBTTtNQUFDLHVCQUF1QkM7SUFBVSxJQUFJelosR0FBR3lNLEtBQUtpTixRQUFReFosSUFBSTtBQUdoRSxRQUFJdVosWUFBWTtBQUNmLFlBQU16WixHQUFHdU0sT0FBT0MsTUFBTSx1QkFBdUI7SUFDOUM7QUFHQSxVQUFNSixRQUFBb0MsUUFBQSxFQUFBNkssS0FBQSxPQUFBbkQsYUFBQSxHQUFBRCxnQkFBQTtBQUdOK0MsbUJBQWVDLEtBQUs7RUFDckIsQ0FBQztBQUFBLFdBbEJrQ1UsU0FBQUMsS0FBQTtBQUFBLFdBQUFOLFVBQUEvTyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUFtUDtBQUFBLEdBQUEsQ0FrQmxDOyIsCiAgIm5hbWVzIjogWyJpbml0X3dpa2lwbHVzIiwgIl9fZXNtIiwgIkNvbnN0YW50cyIsICJjb25zdGFudHNfZGVmYXVsdCIsICJpbml0X2NvbnN0YW50cyIsICJ2ZXJzaW9uIiwgImlzQXJ0aWNsZSIsICJ3aW5kb3ciLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjdXJyZW50UGFnZU5hbWUiLCAicmVwbGFjZSIsICJhcnRpY2xlSWQiLCAicmV2aXNpb25JZCIsICJsYXRlc3RSZXZpc2lvbklkIiwgImFydGljbGVQYXRoIiwgInNjcmlwdFBhdGgiLCAiYWN0aW9uIiwgInNraW4iLCAidXNlckdyb3VwcyIsICJ3aWtpSWQiLCAidXNlckFnZW50IiwgImNvbmNhdCIsICJJMThuIiwgImkxOG5fZGVmYXVsdCIsICJpbml0X2kxOG4iLCAibGFuZ3VhZ2UiLCAiaTE4bkRhdGEiLCAic2Vzc2lvblVwZGF0ZUxvZyIsICJjb25zdHJ1Y3RvciIsICJKU09OIiwgInBhcnNlIiwgImxvY2FsU3RvcmFnZSIsICJuYXZpZ2F0b3IiLCAidG9Mb3dlckNhc2UiLCAiYnJvd3Nlckxhbmd1YWdlIiwgImkxOG5DYWNoZSIsICJnZXRJdGVtIiwgIl9pIiwgIl9PYmplY3Qka2V5cyIsICJPYmplY3QiLCAia2V5cyIsICJsZW5ndGgiLCAia2V5IiwgInNldEl0ZW0iLCAidHJhbnNsYXRlIiwgInBsYWNlaG9sZGVycyIsICJyZXN1bHQiLCAiaTE4bkRhdGFMYW5nIiwgImxvYWRMYW5ndWFnZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZW50cmllcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJpbmRleCIsICJwbGFjZWhvbGRlciIsICJ2YWx1ZSIsICJlcnIiLCAiZSIsICJmIiwgIl90aGlzIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImluY2x1ZGVzIiwgInJlc3BvbnNlIiwgImZldGNoIiwgImpzb24iLCAibm93VmVyc2lvbiIsICJwdXNoIiwgIl9fdmVyc2lvbiIsICJjb25zb2xlIiwgImluZm8iLCAic3RyaW5naWZ5IiwgIldpa2lwbHVzRXJyb3IiLCAiTG9nIiwgImxvZ19kZWZhdWx0IiwgImluaXRfbG9nIiwgIkVycm9yIiwgImNvZGUiLCAibWVzc2FnZSIsICJkZWJ1ZyIsICJlcnJvciIsICJlcnJvckNvZGUiLCAicGF5bG9hZHMiLCAidGVtcGxhdGUiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiaSIsICJ2IiwgIlJlZ0V4cCIsICJOb3RpZmljYXRpb24iLCAibm90aWZpY2F0aW9uX2RlZmF1bHQiLCAiaW5pdF9ub3RpZmljYXRpb24iLCAiaW5pdCIsICIkIiwgImFwcGVuZCIsICJkaXNwbGF5IiwgInRleHQiLCAidHlwZSIsICJjYWxsYmFjayIsICJhZGRDbGFzcyIsICJmaW5kIiwgImxhc3QiLCAiZmFkZUluIiwgImJpbmQiLCAiY2xlYXIiLCAic2VsZiIsICJvbiIsICJzbGlkZUxlZnQiLCAic3VjY2VzcyIsICJ3YXJuaW5nIiwgImNoaWxkcmVuIiwgImZpcnN0IiwgImZhZGVPdXQiLCAicmVtb3ZlIiwgInNldFRpbWVvdXQiLCAiZW1wdHkiLCAiZWFjaCIsICJlbGUiLCAiZGVsYXkiLCAic3BlZWQiLCAiY3NzIiwgImFuaW1hdGUiLCAibGVmdCIsICJSZXF1ZXN0cyIsICJyZXF1ZXN0c19kZWZhdWx0IiwgImluaXRfcmVxdWVzdHMiLCAiYmFzZSIsICJsb2NhdGlvbiIsICJwcm90b2NvbCIsICJob3N0IiwgInF1ZXJ5IiwgInVybCIsICJVUkwiLCAiX2kyIiwgIl9PYmplY3Qka2V5czIiLCAic2VhcmNoUGFyYW1zIiwgImNyZWRlbnRpYWxzIiwgImhlYWRlcnMiLCAicG9zdCIsICJwYXlsb2FkIiwgImZvcm0iLCAiRm9ybURhdGEiLCAiX2kzIiwgIl9PYmplY3QkZW50cmllcyIsICJtZXRob2QiLCAiYm9keSIsICJXaWtpIiwgIndpa2lfZGVmYXVsdCIsICJpbml0X3dpa2kiLCAicGFnZUluZm9DYWNoZSIsICJnZXRFZGl0VG9rZW4iLCAibWV0YSIsICJmb3JtYXQiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJnZXRQYWdlSW5mbyIsICJfeCIsICJfdGhpczIiLCAidGl0bGUiLCAicGFyYW1zIiwgInByb3AiLCAicnZwcm9wIiwgInJldmlkcyIsICJ0aW1lc3RhbXAiLCAicmV2aWQiLCAiY29udGVudG1vZGVsIiwgInRpdGxlcyIsICJwYWdlcyIsICJwYWdlS2V5IiwgInBhZ2VJbmZvIiwgInJldmlzaW9ucyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0V2lraVRleHQiLCAiX3gyIiwgInNlY3Rpb24iLCAicnZzZWN0aW9uIiwgInBhcnNlV2lraVRleHQiLCAiX3gzIiwgIndpa2l0ZXh0IiwgIl9jb25maWciLCAicHN0IiwgImVkaXQiLCAiY29udGVudCIsICJlZGl0VG9rZW4iLCAiYWRkaXRpb25hbENvbmZpZyIsICJ0b2tlbiIsICJiYXNldGltZXN0YW1wIiwgImdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlIiwgIl90aGlzMyIsICJQYWdlIiwgInBhZ2VfZGVmYXVsdCIsICJpbml0X3BhZ2UiLCAiaW5pdGVkIiwgImlzTmV3UGFnZSIsICJzZWN0aW9uQ2FjaGUiLCAiX3RoaXM0IiwgInByb21pc2VBcnIiLCAiZ2V0VGltZXN0YW1wIiwgImdldENvbnRlbnRNb2RlbCIsICJQcm9taXNlIiwgImFsbCIsICJfdGhpczUiLCAibG9hZGVyIiwgInVzaW5nIiwgInVzZXIiLCAiX3RoaXM2IiwgIl90aGlzNyIsICJfdGhpczgiLCAic2VjIiwgIndpa2lUZXh0IiwgIl90aGlzOSIsICJfdGhpczAiLCAiY3JlYXRlb25seSIsICJTZXR0aW5ncyIsICJzZXR0aW5nc19kZWZhdWx0IiwgImluaXRfc2V0dGluZ3MiLCAiZ2V0U2V0dGluZyIsICJvYmplY3QiLCAidyIsICJzZXR0aW5ncyIsICJjdXN0b21TZXR0aW5nRnVuY3Rpb24iLCAiRnVuY3Rpb24iLCAiX2k0IiwgIl9PYmplY3Qka2V5czMiLCAia2V5MiIsICJwYXJzZVF1ZXJ5IiwgInJlZyIsICJtYXRjaCIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJpbml0X2hlbHBlcnMiLCAic2xlZXAiLCAic2xlZXBfZGVmYXVsdCIsICJpbml0X3NsZWVwIiwgInRpbWUiLCAicmVzb2x2ZSIsICJVSSIsICJ1aV9kZWZhdWx0IiwgImluaXRfdWkiLCAicXVpY2tFZGl0UGFuZWxWaXNpYmxlIiwgInNjcm9sbFRvcCIsICJjcmVhdGVEaWFsb2dCb3giLCAid2lkdGgiLCAiY2xpZW50V2lkdGgiLCAiaW5uZXJXaWR0aCIsICJjbGllbnRIZWlnaHQiLCAiaW5uZXJIZWlnaHQiLCAiZGlhbG9nV2lkdGgiLCAiTWF0aCIsICJtaW4iLCAiZGlhbG9nQm94IiwgInRvcCIsICJkb2N1bWVudCIsICJodG1sIiwgInBhcmVudCIsICJhZGRFdmVudExpc3RlbmVyIiwgIm9uYmVmb3JldW5sb2FkIiwgImJpbmREcmFnZ2luZyIsICJlbGVtZW50IiwgIm1vdXNlZG93biIsICJfZWxlbWVudCRwYXJlbnQkb2Zmc2UiLCAiX2VsZW1lbnQkcGFyZW50JG9mZnNlMiIsICJiYXNlWCIsICJjbGllbnRYIiwgImJhc2VZIiwgImNsaWVudFkiLCAiYmFzZU9mZnNldFgiLCAib2Zmc2V0IiwgImJhc2VPZmZzZXRZIiwgImUyIiwgInVuYmluZCIsICJvZmYiLCAiYWRkRnVuY3Rpb25CdXR0b24iLCAiaWQiLCAiYnV0dG9uIiwgImF0dHIiLCAiaW5zZXJ0U2ltcGxlUmVkaXJlY3RCdXR0b24iLCAib25DbGljayIsICJpbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uIiwgImluc2VydFRvcFF1aWNrRWRpdEVudHJ5IiwgInRvcEJ0biIsICJ0b3BCdG5MaW5rIiwgInNlY3Rpb25OdW1iZXIiLCAidGFyZ2V0UGFnZU5hbWUiLCAiYWZ0ZXIiLCAiaW5zZXJ0U2VjdGlvblF1aWNrRWRpdEVudHJpZXMiLCAic2VjdGlvbkJ0biIsICJlZGl0VVJMIiwgInNlY3Rpb25MYWJlbCIsICJzZWN0aW9uVGFyZ2V0TGFiZWwiLCAic2VjdGlvblRhcmdldE5hbWUiLCAiY2xvbmVOb2RlIiwgInByZXYiLCAiY2xvbmUiLCAic2VjdGlvbk5hbWUiLCAidHJpbSIsICJfc2VjdGlvbkJ0biIsICJiZWZvcmUiLCAiaW5zZXJ0TGlua0VkaXRFbnRyaWVzIiwgImhyZWYiLCAiY2xhc3MiLCAiX3BhcmFtcyRzZWN0aW9uIiwgInNob3dRdWlja0VkaXRQYW5lbCIsICJzdW1tYXJ5IiwgIm9uQmFjayIsICJvblBhcnNlIiwgIm9uRWRpdCIsICJlc2NFeGl0IiwgImhpZGVRdWlja0VkaXRQYW5lbCIsICJiYWNrQnRuIiwgImp1bXBCdG4iLCAiaW5wdXRCb3giLCAicHJldmlld0JveCIsICJzdW1tYXJ5Qm94IiwgImVkaXRTdWJtaXRCdG4iLCAicHJldmlld1N1Ym1pdEJ0biIsICJpc01pbm9yRWRpdCIsICJtYXJnaW4iLCAiZWRpdEJvZHkiLCAidmFsIiwgInByZWxvYWRCYW5uZXIiLCAidGltZXIiLCAiRGF0ZSIsICJub3ciLCAiZWRpdEJhbm5lciIsICJpcyIsICJ1c2VUaW1lIiwgInRvU3RyaW5nIiwgInJlbG9hZCIsICJsb2ciLCAiY3RybEtleSIsICJ3aGljaCIsICJzaGlmdEtleSIsICJ0cmlnZ2VyIiwgInByZXZlbnREZWZhdWx0IiwgInN0b3BQcm9wYWdhdGlvbiIsICJzaG93U2ltcGxlUmVkaXJlY3RQYW5lbCIsICJvblN1Y2Nlc3MiLCAiX3RoaXMxIiwgImlucHV0IiwgInN1bW1hcnlJbnB1dFRpdGxlIiwgInN1bW1hcnlJbnB1dCIsICJhcHBseUJ0biIsICJjYW5jZWxCdG4iLCAiY29udGludWVCdG4iLCAiZGlhbG9nIiwgImZvcmNlT3ZlcndyaXRlIiwgImhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsIiwgImVycm9yMiIsICJzaG93U2V0dGluZ3NQYW5lbCIsICJvblN1Ym1pdCIsICJfdGhpczEwIiwgInNhdmVkQmFubmVyIiwgImhpZGVTZXR0aW5nc1BhbmVsIiwgImJpbmRQcmVsb2FkRXZlbnRzIiwgIm9uUHJlbG9hZCIsICJtb2R1bGVzX2V4cG9ydHMiLCAiaW5pdF9tb2R1bGVzIiwgIlBhZ2VzIiwgImlzQ3VycmVudFBhZ2VFbXB0eSIsICJnZXRQYWdlIiwgIl9yZWY3IiwgInJldmlzaW9uSWQyIiwgIm5ld1BhZ2UiLCAiX3g0IiwgIl9XaWtpcGx1c1BhZ2VzIiwgImN1cnJlbnRQYWdlIiwgImhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQiLCAiX3JlZjgiLCAiaXNPdGhlclBhZ2UiLCAicGFnZSIsICJjdXN0b21TdW1tYXJ5IiwgInNlY3Rpb25Db250ZW50IiwgImlzRWRpdEhpc3RvcnlSZXZpc2lvbiIsICJlc2NUb0V4aXQiLCAiY3VzdG9tRWRpdFRhZ3MiLCAiZGVmYXVsdEVkaXRUYWdzIiwgImVkaXRUYWdzIiwgImNsZWFyVGltZW91dCIsICJzaG91bGRTaG93Q3JlYXRlUGFnZVRpcCIsICJfcmVmOSIsICJzdW1tYXJ5MiIsICJlZGl0UGF5bG9hZCIsICJ0YWdzIiwgImpvaW4iLCAibWlub3IiLCAibm90bWlub3IiLCAiX3g1IiwgImhhbmRsZVNpbXBsZVJlZGlyZWN0QnV0dG9uQ2xpY2tlZCIsICJfcmVmMCIsICJfcmVmMSIsICJjdXJyZW50UGFnZU5hbWUyIiwgImNvbnRlbnQyIiwgInV0aWwiLCAid2lraVVybGVuY29kZSIsICJfeDYiLCAiaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkIiwgIl9yZWYxMCIsICJoYW5kbGVQcmVsb2FkIiwgIl9yZWYxMSIsICJfeDciLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJyZXNpemVXaWtpcGx1cyIsICIkYm9keSIsICJ3aW5kb3dXaWR0aCIsICIkd2lraXBsdXNJbnRlcmJveCIsICJnZXRCb2R5IiwgInRoZW4iLCAiX1dpa2lwbHVzIiwgIndnQWN0aW9uIiwgIndnSXNBcnRpY2xlIiwgImlzVmVFbmFibGUiLCAib3B0aW9ucyIsICJXaWtpcGx1cyIsICJfeDgiXQp9Cg==
