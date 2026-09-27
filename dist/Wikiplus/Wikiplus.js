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
          log_default.error("fail_to_get_edittoken");
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
       * @param {*} config
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
          $(this).parent().fadeOut("fast", () => {
            window.addEventListener("close", () => {
              window.onbeforeunload = () => {
              };
            });
            $(this).remove();
          });
        });
        const bindDragging = (element) => {
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
            window.addEventListener("close", () => {
              window.onbeforeunload = () => {
              };
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
        $(".Wikiplus-InterBox").fadeOut("fast", () => {
          window.addEventListener("close", () => {
            window.onbeforeunload = () => {
            };
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzL21vZHVsZXMvd2lraXBsdXMubGVzcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9jb25zdGFudHMudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvaTE4bi50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9sb2cudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS9ub3RpZmljYXRpb24udHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvcmVxdWVzdHMudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvc2VydmljZXMvd2lraS50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL3BhZ2UudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvc2V0dGluZ3MudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvaGVscGVycy50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9zbGVlcC50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL3VpLnRzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2luZGV4LnRzIiwgInNyYy9XaWtpcGx1cy9XaWtpcGx1cy50cyIsICJzcmMvV2lraXBsdXMvcmVzaXplLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiEgV2lraXBsdXMgLSA0LjAuMTEgfCBFcmlkYW51cyBTb3JhICjlprnnqbrphbEpIHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG4jV2lraXBsdXMtUXVpY2tlZGl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4jV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQge1xuICB3aWR0aDogNTAlO1xufVxuLnNraW4tdmVjdG9yICNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQsXG4jV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogcmV2ZXJ0O1xufVxuI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDVweCAwO1xufVxuLldpa2lwbHVzLUJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogM3B4IDVweDtcbiAgcGFkZGluZzogM3B4IDFlbTtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjYWFhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1CdG4gYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMwMDA7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICB6LWluZGV4OiAyMDA7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjEsIDE1NCwgMjIwLCAwLjQxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjlmNztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgdG9wOiAtOHB4O1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZjZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBjdXJzb3I6IG1vdmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtSW5wdXQge1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiA2MCU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogYXV0byAzcHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1CdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xufVxuLldpa2lwbHVzLUludGVyQm94LUNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDNweCA3cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggbGFiZWwge1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiB7XG4gIHRhYmxlLWxheW91dDogYXV0bztcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWFkZGVkbGluZSxcbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWRlbGV0ZWRsaW5lLFxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtbGluZW5vIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLW1hcmtlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uV2lraXBsdXMtQmFubmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxOTMsIDIyMiwgMjE0LCAwLjUxKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtc2Fucywgc2Fucy1zZXJpZik7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAzcHggNXB4O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAjYWFhO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDNweCBhdXRvIDNweCAzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtc2Fucywgc2Fucy1zZXJpZik7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS1zdWNjZXNzIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOGRkYTkzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGEwMDtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXdhcm5pbmcge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmRmMDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiZDAwO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS1lcnJvciB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2U3MTcxNztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMDBlMDY7XG59XG4jTW9lTm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDcxMztcbiAgbWluLXdpZHRoOiAyMCU7XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuY2xhc3MgQ29uc3RhbnRzIHtcblx0dmVyc2lvbiA9ICc0LjEuMCc7XG5cdGdldCBpc0FydGljbGUoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0lzQXJ0aWNsZScpO1xuXHR9XG5cdGdldCBjdXJyZW50UGFnZU5hbWUoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvIC9nLCAnXycpO1xuXHR9XG5cdGdldCBhcnRpY2xlSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpO1xuXHR9XG5cdGdldCByZXZpc2lvbklkKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyk7XG5cdH1cblx0Z2V0IGxhdGVzdFJldmlzaW9uSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0N1clJldmlzaW9uSWQnKTtcblx0fVxuXHRnZXQgYXJ0aWNsZVBhdGgoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FydGljbGVQYXRoJyk7XG5cdH1cblx0Z2V0IHNjcmlwdFBhdGgoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1NjcmlwdFBhdGgnKTtcblx0fVxuXHRnZXQgYWN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcblx0fVxuXHRnZXQgc2tpbigpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3NraW4nKTtcblx0fVxuXHRnZXQgdXNlckdyb3VwcygpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpO1xuXHR9XG5cdGdldCB3aWtpSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuXHR9XG5cdHVzZXJBZ2VudCA9IGBRaXV3ZW4vMS4xIFdpa2lwbHVzLyR7dGhpcy52ZXJzaW9ufSAoJHt0aGlzLndpa2lJZH0pYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnN0YW50cygpO1xuIiwgImNsYXNzIEkxOG4ge1xuXHRsYW5ndWFnZTogc3RyaW5nO1xuXHRpMThuRGF0YTogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7fTtcblx0c2Vzc2lvblVwZGF0ZUxvZzogc3RyaW5nW10gPSBbXTtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGxhbmd1YWdlO1xuXHRcdHRyeSB7XG5cdFx0XHRsYW5ndWFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKVsnbGFuZ3VhZ2UnXSB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb3dlckNhc2UoKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdGxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlXG5cdFx0XHRcdC5yZXBsYWNlKC9oYW5bc3RdLT8vaSwgJycpIC8vIGZvciBsYW5ndWFnZXMgbGlrZSB6aC1IYW5zLUNOXG5cdFx0XHRcdC50b0xvd2VyQ2FzZSgpO1xuXHRcdH1cblx0XHR0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG5cdFx0Ly8gTWVyZ2Ugd2l0aCBsb2NhbFN0b3JhZ2UgaTE4biBjYWNoZVxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBpMThuQ2FjaGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdXaWtpcGx1c19pMThuQ2FjaGUnKSBhcyBzdHJpbmcpO1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoaTE4bkNhY2hlKSkge1xuXHRcdFx0XHR0aGlzLmkxOG5EYXRhW2tleV0gPSBpMThuQ2FjaGVba2V5XTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8vIEZhaWwgdG8gcGFyc2UgaTE4biBjYWNoZSwgcmVzZXRcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19pMThuQ2FjaGUnLCAne30nKTtcblx0XHR9XG5cdH1cblx0dHJhbnNsYXRlKGtleTogc3RyaW5nLCBwbGFjZWhvbGRlcnM/OiBzdHJpbmdbXSkge1xuXHRcdGxldCByZXN1bHQgPSAnJztcblx0XHRwbGFjZWhvbGRlcnMgfHw9IFtdO1xuXHRcdGlmICh0aGlzLmxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpIHtcblx0XHRcdGNvbnN0IGkxOG5EYXRhTGFuZyA9IHRoaXMuaTE4bkRhdGFbdGhpcy5sYW5ndWFnZV07XG5cdFx0XHRpZiAoaTE4bkRhdGFMYW5nICYmIGtleSBpbiBpMThuRGF0YUxhbmcpIHtcblx0XHRcdFx0cmVzdWx0ID0gaTE4bkRhdGFMYW5nW2tleV0gYXMgc3RyaW5nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gdHJ5IHVwZGF0ZSBsYW5ndWFnZSB2ZXJpc29uXG5cdFx0XHRcdHRoaXMubG9hZExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpO1xuXHRcdFx0XHRpZiAodGhpcy5pMThuRGF0YVsnZW4tdXMnXSAmJiBrZXkgaW4gdGhpcy5pMThuRGF0YVsnZW4tdXMnXSkge1xuXHRcdFx0XHRcdC8vIEZhbGxiYWNrIHRvIEVuZ2xpc2hcblx0XHRcdFx0XHRyZXN1bHQgPSB0aGlzLmkxOG5EYXRhWydlbi11cyddW2tleV0gYXMgc3RyaW5nO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc3VsdCA9IGtleTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxvYWRMYW5ndWFnZSh0aGlzLmxhbmd1YWdlKTtcblx0XHR9XG5cblx0XHRpZiAocGxhY2Vob2xkZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAoY29uc3QgW2luZGV4LCBwbGFjZWhvbGRlcl0gb2YgcGxhY2Vob2xkZXJzLmVudHJpZXMoKSkge1xuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShgJCR7aW5kZXggKyAxfWAsIHBsYWNlaG9sZGVyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRhc3luYyBsb2FkTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZykge1xuXHRcdGlmICh0aGlzLnNlc3Npb25VcGRhdGVMb2cuaW5jbHVkZXMobGFuZ3VhZ2UpKSB7XG5cdFx0XHQvLyBIYXMgYmVlbiB1cGRhdGVkIHRoaXMgc2Vzc2lvbi5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKFxuXHRcdFx0XHRhd2FpdCBmZXRjaChcblx0XHRcdFx0XHRgaHR0cHM6Ly9naXRjZG4ucWl1d2VuLm5ldC5jbi9JbnRlcmZhY2VBZG1pbi9XaWtpcGx1cy9yYXcvYnJhbmNoL2Rldi9sYW5ndWFnZXMvJHtsYW5ndWFnZX0uanNvbmBcblx0XHRcdFx0KVxuXHRcdFx0KS5qc29uKCk7XG5cdFx0XHRjb25zdCBub3dWZXJzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1dpa2lwbHVzX0xhbmd1YWdlVmVyc2lvbicpIHx8ICcwMDAnO1xuXHRcdFx0dGhpcy5zZXNzaW9uVXBkYXRlTG9nLnB1c2gobGFuZ3VhZ2UpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLl9fdmVyc2lvbiAhPT0gbm93VmVyc2lvbiB8fCAhKGxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpKSB7XG5cdFx0XHRcdC8vIExhbmd1YWdlIGdldCB1cGRhdGVkXG5cdFx0XHRcdGNvbnNvbGUuaW5mbyhgVXBkYXRlICR7bGFuZ3VhZ2V9IHN1cHBvcnQgdG8gdmVyc2lvbiAke3Jlc3BvbnNlLl9fdmVyc2lvbn1gKTtcblx0XHRcdFx0dGhpcy5pMThuRGF0YVtsYW5ndWFnZV0gPSByZXNwb25zZTtcblx0XHRcdFx0Ly8gVXBkYXRlIGxvY2FsU3RvcmFnZSBjYWNoZVxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5pMThuRGF0YSkpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0Ly8gVW5zdXBwb3J0ZWQgbGFuZ3VhZ2Vcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEkxOG4oKTtcbiIsICJpbXBvcnQgaTE4biBmcm9tICcuL2kxOG4nO1xuXG5jbGFzcyBXaWtpcGx1c0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRjb2RlOiBzdHJpbmcgfCBudWxsO1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IHN0cmluZykge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMuY29kZSA9IGNvZGU7XG5cdH1cbn1cblxuY29uc3QgTG9nID0ge1xuXHRkZWJ1ZyhtZXNzYWdlID0gJycpIHtcblx0XHRjb25zb2xlLmRlYnVnKGBbV2lraXBsdXMtREVCVUddICR7bWVzc2FnZX1gKTtcblx0fSxcblx0aW5mbyhtZXNzYWdlID0gJycpIHtcblx0XHRjb25zb2xlLmluZm8oYFtXaWtpcGx1cy1JTkZPXSAke21lc3NhZ2V9YCk7XG5cdH0sXG5cdGVycm9yKGVycm9yQ29kZTogc3RyaW5nLCBwYXlsb2Fkczogc3RyaW5nW10gPSBbXSkge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IGkxOG4udHJhbnNsYXRlKGVycm9yQ29kZSk7XG5cdFx0aWYgKHBheWxvYWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdC8vIEZpbGxcblx0XHRcdGZvciAoY29uc3QgW2ksIHZdIG9mIHBheWxvYWRzLmVudHJpZXMoKSkge1xuXHRcdFx0XHR0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXCR7aSArIDF9YCwgJ2lnJyksIHYpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zb2xlLmVycm9yKGBbV2lraXBsdXMtRVJST1JdICR7dGVtcGxhdGV9YCk7XG5cdFx0dGhyb3cgbmV3IFdpa2lwbHVzRXJyb3IoYCR7dGVtcGxhdGV9YCwgZXJyb3JDb2RlKTtcblx0fSxcbn07XG5cbmV4cG9ydCB7dHlwZSBXaWtpcGx1c0Vycm9yfTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmNsYXNzIE5vdGlmaWNhdGlvbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cdGluaXQoKSB7XG5cdFx0JCgnYm9keScpLmFwcGVuZCgnPGRpdiBpZD1cIk1vZU5vdGlmaWNhdGlvblwiPjwvZGl2PicpO1xuXHR9XG5cdGRpc3BsYXkodGV4dCA9ICfllrV+JywgdHlwZSA9ICdzdWNjZXNzJywgY2FsbGJhY2s6IChlbGU/OiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSA9PiB2b2lkID0gKCkgPT4ge30pOiB2b2lkIHtcblx0XHQkKCcjTW9lTm90aWZpY2F0aW9uJykuYXBwZW5kKFxuXHRcdFx0JCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ01vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKVxuXHRcdFx0XHQuYWRkQ2xhc3MoYE1vZU5vdGlmaWNhdGlvbi1ub3RpY2UtJHt0eXBlfWApXG5cdFx0XHRcdC5hcHBlbmQoYDxzcGFuPiR7dGV4dH08L3NwYW4+YClcblx0XHQpO1xuXHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKS5maW5kKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmxhc3QoKS5mYWRlSW4oMzAwKTtcblx0XHR0aGlzLmJpbmQoKTtcblx0XHR0aGlzLmNsZWFyKCk7XG5cdFx0aWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y2FsbGJhY2soJCgnI01vZU5vdGlmaWNhdGlvbicpLmZpbmQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGFzdCgpKTtcblx0XHR9XG5cdH1cblx0YmluZCgpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHQkKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxmLnNsaWRlTGVmdCgkKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXHRzdWNjZXNzKHRleHQ6IHN0cmluZywgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XG5cdFx0dGhpcy5kaXNwbGF5KHRleHQsICdzdWNjZXNzJywgY2FsbGJhY2spO1xuXHR9XG5cdHdhcm5pbmcodGV4dDogc3RyaW5nLCBjYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcblx0XHR0aGlzLmRpc3BsYXkodGV4dCwgJ3dhcm5pbmcnLCBjYWxsYmFjayk7XG5cdH1cblx0ZXJyb3IodGV4dDogc3RyaW5nLCBjYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcblx0XHR0aGlzLmRpc3BsYXkodGV4dCwgJ2Vycm9yJywgY2FsbGJhY2spO1xuXHR9XG5cdGNsZWFyKCkge1xuXHRcdGlmICgkKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmxlbmd0aCA+PSAxMCkge1xuXHRcdFx0JCgnI01vZU5vdGlmaWNhdGlvbicpXG5cdFx0XHRcdC5jaGlsZHJlbigpXG5cdFx0XHRcdC5maXJzdCgpXG5cdFx0XHRcdC5mYWRlT3V0KDE1MCwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0c2V0VGltZW91dCh0aGlzLmNsZWFyLCAzMDApO1xuXHRcdH1cblx0fVxuXHRlbXB0eShmPzogKGVsZTogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4gdm9pZCkge1xuXHRcdCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0aWYgKGYgJiYgdHlwZW9mIGYgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgZWxlID0gJCh0aGlzKTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0ZihlbGUpO1xuXHRcdFx0XHR9LCAyMDAgKiBpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHQuZGVsYXkoaSAqIDIwMClcblx0XHRcdFx0XHQuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0c2xpZGVMZWZ0KGVsZTogSlF1ZXJ5PEhUTUxFbGVtZW50Piwgc3BlZWQgPSAxNTApIHtcblx0XHRlbGUuY3NzKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuXHRcdGVsZS5hbmltYXRlKFxuXHRcdFx0e1xuXHRcdFx0XHRsZWZ0OiAnLTIwMCUnLFxuXHRcdFx0fSxcblx0XHRcdHNwZWVkLFxuXHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKHRoaXMpLmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTm90aWZpY2F0aW9uKCk7XG4iLCAiaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuXG5jb25zdCBSZXF1ZXN0cyA9IHtcblx0YmFzZTogYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9JHtDb25zdGFudHMuc2NyaXB0UGF0aH0vYXBpLnBocGAsXG5cdGFzeW5jIGdldChxdWVyeTogQXBpUXVlcnlQYXJhbXMgfCBBcGlQYXJzZVBhcmFtcyB8IEFwaUVkaXRQYWdlUGFyYW1zKSB7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChSZXF1ZXN0cy5iYXNlKTtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhxdWVyeSkpIHtcblx0XHRcdHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgcXVlcnlba2V5XSk7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogQ29uc3RhbnRzLnVzZXJBZ2VudCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0fSxcblx0YXN5bmMgcG9zdChwYXlsb2FkOiBBcGlRdWVyeVBhcmFtcyB8IEFwaVBhcnNlUGFyYW1zIHwgQXBpRWRpdFBhZ2VQYXJhbXMpIHtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKFJlcXVlc3RzLmJhc2UpO1xuXHRcdGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwYXlsb2FkKSkge1xuXHRcdFx0Zm9ybS5hcHBlbmQoa2V5LCB2YWx1ZSBhcyBzdHJpbmcpO1xuXHRcdH1cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRib2R5OiBmb3JtLFxuXHRcdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IENvbnN0YW50cy51c2VyQWdlbnQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0cztcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgTG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5pbXBvcnQgaTE4biBmcm9tICcuLi91dGlscy9pMThuJztcbmltcG9ydCByZXF1ZXN0cyBmcm9tICcuLi91dGlscy9yZXF1ZXN0cyc7XG5cbmNsYXNzIFdpa2kge1xuXHRwYWdlSW5mb0NhY2hlOiBSZWNvcmQ8c3RyaW5nLCB7dGltZXN0YW1wPzogc3RyaW5nOyByZXZpZD86IG51bWJlcjsgY29udGVudG1vZGVsOiBzdHJpbmd9PiA9IHt9O1xuXHQvKipcblx0ICog6I635b6XIEVkaXQgVG9rZW5cblx0ICogR2V0IEVkaXQgVG9rZW5cblx0ICpcblx0ICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdGFzeW5jIGdldEVkaXRUb2tlbigpIHtcblx0XHQvLyDlsJ3or5Xku44gQVBJIOiOt+W+lyBFZGl0VG9rZW5cblx0XHQvLyBUcnkgdG8gZ2V0IEVkaXRUb2tlbiBmcm9tIEFQSVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fSk7XG5cdFx0aWYgKFxuXHRcdFx0cmVzcG9uc2UucXVlcnkgJiZcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5LnRva2VucyAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbiAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbiAhPT0gJytcXFxcJ1xuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0fVxuXHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfZWRpdHRva2VuJyk7XG5cdH1cblx0LyoqXG5cdCAqIOiOt+W+l+mhtemdouS4iuS4gOeJiOacrOaXtumXtOaIs1xuXHQgKiBHZXQgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbGFzdCByZXZpc2lvbiBvZiBwYWdlIHNwZWNpZmllZC5cblx0ICpcblx0ICogQHBhcmFtIHtwYXJhbXMuc3RyaW5nfSB0aXRsZSDpobXpnaLlkI0gLyBQYWdlbmFtZVxuXHQgKiBAcGFyYW0ge3BhcmFtcy5yZXZpc2lvbklkfSByZXZpc2lvbklkIOS/ruiuoueJiOacrOWPtyAvIFJldmlzaW9uIElEXG5cdCAqIEBwYXJhbSB7cGFyYW1zLmNvbnRlbnRtb2RlbH0gY29udGVudG1vZGVsIOWGheWuueaooeWeiyAvIENvbnRlbnQgTW9kZWxcblx0ICogQHJldHVybnMge1Byb21pc2U8e3RpbWVzdGFtcD86IHN0cmluZzsgcmV2aXNpb25JZD86IG51bWJlcjsgY29udGVudG1vZGVsOiBzdHJpbmc7fT59XG5cdCAqL1xuXHRhc3luYyBnZXRQYWdlSW5mbyh7XG5cdFx0dGl0bGUsXG5cdFx0cmV2aXNpb25JZCxcblx0fToge1xuXHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0cmV2aXNpb25JZD86IG51bWJlcjtcblx0fSk6IFByb21pc2U8e3RpbWVzdGFtcD86IHN0cmluZzsgcmV2aXNpb25JZD86IG51bWJlcjsgY29udGVudG1vZGVsOiBzdHJpbmd9IHwgdm9pZD4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zICYgQXBpUXVlcnlJbmZvUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnN8aW5mbycsXG5cdFx0XHRcdHJ2cHJvcDogJ3RpbWVzdGFtcHxpZHMnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAocmV2aXNpb25JZCkge1xuXHRcdFx0XHRwYXJhbXMucmV2aWRzID0gcmV2aXNpb25JZDtcblx0XHRcdH0gZWxzZSBpZiAodGl0bGUpIHtcblx0XHRcdFx0aWYgKHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0pIHtcblx0XHRcdFx0XHQvLyBIaXQgY2FjaGVcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dGltZXN0YW1wOiB0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdLnRpbWVzdGFtcCBhcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRyZXZpc2lvbklkOiB0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdLnJldmlkIGFzIG51bWJlcixcblx0XHRcdFx0XHRcdGNvbnRlbnRtb2RlbDogdGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS5jb250ZW50bW9kZWwsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwYXJhbXMudGl0bGVzID0gdGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnF1ZXJ5ICYmIHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnN0IHBhZ2VLZXkgPSBPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF07XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRtb2RlbCA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzW3BhZ2VLZXkgYXMgc3RyaW5nXS5jb250ZW50bW9kZWw7XG5cdFx0XHRcdGlmIChwYWdlS2V5ID09PSAnLTEnKSB7XG5cdFx0XHRcdFx0Ly8g5LiN5a2Y5Zyo6L+Z5LiA6aG16Z2iXG5cdFx0XHRcdFx0Ly8gUGFnZSBub3QgZm91bmQuXG5cdFx0XHRcdFx0dGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXSA9IHtjb250ZW50bW9kZWx9O1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRjb250ZW50bW9kZWwsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBwYWdlSW5mbyA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzW3BhZ2VLZXkgYXMgc3RyaW5nXS5yZXZpc2lvbnNbMF07XG5cdFx0XHRcdGlmICh0aXRsZSkge1xuXHRcdFx0XHRcdHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0gPSB7Li4ucGFnZUluZm8sIGNvbnRlbnRtb2RlbH07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0aW1lc3RhbXA6IHBhZ2VJbmZvLnRpbWVzdGFtcCxcblx0XHRcdFx0XHRyZXZpc2lvbklkOiBwYWdlSW5mby5yZXZpZCxcblx0XHRcdFx0XHRjb250ZW50bW9kZWwsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICog6I635b6X6aG16Z2i55qEIFdpa2l0ZXh0XG5cdCAqIEdldCB3aWtpdGV4dCBvZiB0aGUgcGFnZS5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge251bWJlcn0gY29uZmlnLnJldmlzaW9uSWQg54mI5pys5Y+3XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc2VjdGlvbiDmrrXokL3lj7dcblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSB3aWtpdGV4dOWGheWuuVxuXHQgKi9cblx0YXN5bmMgZ2V0V2lraVRleHQoe3NlY3Rpb24sIHJldmlzaW9uSWR9OiB7c2VjdGlvbjogc3RyaW5nIHwgbnVtYmVyOyByZXZpc2lvbklkOiBudW1iZXJ9KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0cmV2aWRzOiByZXZpc2lvbklkLFxuXHRcdFx0fTtcblx0XHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHRcdHBhcmFtcy5yZXZpZHMgPSByZXZpc2lvbklkO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlY3Rpb24pIHtcblx0XHRcdFx0cGFyYW1zLnJ2c2VjdGlvbiA9IHNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnF1ZXJ5ICYmIHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGlmIChPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF0gPT09ICctMScpIHtcblx0XHRcdFx0XHQvLyDkuI3lrZjlnKjov5nkuIDpobXpnaJcblx0XHRcdFx0XHQvLyBQYWdlIG5vdCBmb3VuZC5cblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFnZUluZm8gPSByZXNwb25zZS5xdWVyeS5wYWdlc1tPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF0gYXMgc3RyaW5nXS5yZXZpc2lvbnNbMF07XG5cdFx0XHRcdHJldHVybiBwYWdlSW5mb1snKiddO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF93aWtpdGV4dCcpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICog6Kej5p6QIFdpa2l0ZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpdGV4dCB3aWtpdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUg6aG16Z2i5qCH6aKYXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcg6K6+572uXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0g6Kej5p6Q57uT5p6cIEhUTUxcblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0YXN5bmMgcGFyc2VXaWtpVGV4dCh3aWtpdGV4dDogc3RyaW5nLCB0aXRsZSA9ICcnLCBfY29uZmlnID0ge30pIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5wb3N0KHtcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRwc3Q6ICd0cnVlJyxcblx0XHRcdH0pO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnBhcnNlICYmIHJlc3BvbnNlLnBhcnNlLnRleHQpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLnBhcnNlLnRleHRbJyonXTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignY2FudF9wYXJzZV93aWtpdGV4dCcpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDnvJbovpHpobXpnaJcblx0ICpcblx0ICogQHBhcmFtIHJvb3QwXG5cdCAqIEBwYXJhbSByb290MC50aXRsZVxuXHQgKiBAcGFyYW0gcm9vdDAuY29udGVudFxuXHQgKiBAcGFyYW0gcm9vdDAuZWRpdFRva2VuXG5cdCAqIEBwYXJhbSByb290MC50aW1lc3RhbXBcblx0ICogQHBhcmFtIHJvb3QwLmNvbmZpZ1xuXHQgKiBAcGFyYW0gcm9vdDAuYWRkaXRpb25hbENvbmZpZ1xuXHQgKi9cblx0YXN5bmMgZWRpdCh7XG5cdFx0dGl0bGUsXG5cdFx0Y29udGVudCxcblx0XHRlZGl0VG9rZW4sXG5cdFx0dGltZXN0YW1wLFxuXHRcdGNvbmZpZyA9IHt9LFxuXHRcdGFkZGl0aW9uYWxDb25maWcgPSB7fSxcblx0fToge1xuXHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0Y29udGVudDogc3RyaW5nO1xuXHRcdGVkaXRUb2tlbjogc3RyaW5nO1xuXHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdGNvbmZpZzogUGFydGlhbDxBcGlFZGl0UGFnZVBhcmFtcz47XG5cdFx0YWRkaXRpb25hbENvbmZpZzogUGFydGlhbDxBcGlFZGl0UGFnZVBhcmFtcz47XG5cdH0pOiBQcm9taXNlPHRydWUgfCB2b2lkPiB7XG5cdFx0bGV0IHJlc3BvbnNlO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdHRleHQ6IGNvbnRlbnQsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHR0b2tlbjogZWRpdFRva2VuLFxuXHRcdFx0XHQuLi4odGltZXN0YW1wID8ge2Jhc2V0aW1lc3RhbXA6IHRpbWVzdGFtcH0gOiB7fSksXG5cdFx0XHRcdC4uLmNvbmZpZyxcblx0XHRcdFx0Li4uYWRkaXRpb25hbENvbmZpZyxcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCduZXR3b3JrX2VkaXRfZXJyb3InKTtcblx0XHR9XG5cdFx0aWYgKHJlc3BvbnNlLmVkaXQpIHtcblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LnJlc3VsdCA9PT0gJ1N1Y2Nlc3MnKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQuY29kZSkge1xuXHRcdFx0XHQvLyBBYnVzZSBGaWx0ZXJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aTE4bi50cmFuc2xhdGUoJ2hpdF9hYnVzZWZpbHRlcicpfToke3Jlc3BvbnNlLmVkaXQuaW5mby5yZXBsYWNlKCcvSGl0IEFidXNlRmlsdGVyOiAvaWcnLCAnJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiBzbWFsbGVyO1wiPiR7cmVzcG9uc2UuZWRpdC53YXJuaW5nfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdExvZy5lcnJvcigndW5rbm93bl9lZGl0X2Vycm9yJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChyZXNwb25zZS5lcnJvciAmJiByZXNwb25zZS5lcnJvci5jb2RlKSB7XG5cdFx0XHRMb2cuZXJyb3IocmVzcG9uc2UuZXJyb3IuY29kZSk7XG5cdFx0fSBlbHNlIGlmIChyZXNwb25zZS5jb2RlKSB7XG5cdFx0XHRMb2cuZXJyb3IocmVzcG9uc2UuY29kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdExvZy5lcnJvcigndW5rbm93bl9lZGl0X2Vycm9yJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+l+aMh+WumumhtemdouacgOaWsOS/ruiuoue8luWPt1xuXHQgKiBHZXQgbGF0ZXN0IHJldmlzaW9uSWQgb2YgYSBwYWdlLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHRpdGxlXG5cdCAqL1xuXHRhc3luYyBnZXRMYXRlc3RSZXZpc2lvbklkRm9yUGFnZSh0aXRsZTogc3RyaW5nKSB7XG5cdFx0Y29uc3Qge3JldmlzaW9uSWR9ID0gKGF3YWl0IHRoaXMuZ2V0UGFnZUluZm8oe3RpdGxlfSkpIGFzIHtcblx0XHRcdHJldmlzaW9uSWQ6IG51bWJlcjtcblx0XHR9O1xuXHRcdHJldHVybiByZXZpc2lvbklkO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBXaWtpKCk7XG4iLCAiaW1wb3J0IExvZyBmcm9tICcuLi91dGlscy9sb2cnO1xuaW1wb3J0IFdpa2kgZnJvbSAnLi4vc2VydmljZXMvd2lraSc7XG5cbmNsYXNzIFBhZ2Uge1xuXHR0aW1lc3RhbXA6IHN0cmluZyA9ICcnO1xuXHRlZGl0VG9rZW46IHN0cmluZyA9ICcnO1xuXHR0aXRsZTogc3RyaW5nO1xuXHRyZXZpc2lvbklkOiBudW1iZXI7XG5cblx0aW5pdGVkID0gZmFsc2U7XG5cdGlzTmV3UGFnZSA9IGZhbHNlO1xuXG5cdGNvbnRlbnRtb2RlbCA9ICd3aWtpdGV4dCc7XG5cblx0c2VjdGlvbkNhY2hlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnRpdGxlfSDpobXpnaLmoIfpopggUGFnZSBOYW1lIChvcHRpb25hbClcblx0ICogQHBhcmFtIHtwYXJhbXMucmV2aXNpb25JZH0g6aG16Z2i5L+u6K6i57yW5Y+3IFJldmlzaW9uIElkXG5cdCAqIEBwYXJhbSB7cGFyYW1zLmNvbnRlbnRtb2RlbH0g6aG16Z2i5YaF5a655qih5Z6LIENvbnRlbnQgTW9kZWxcblx0ICovXG5cdGNvbnN0cnVjdG9yKHt0aXRsZSwgcmV2aXNpb25JZCA9IDB9OiB7dGl0bGU6IHN0cmluZzsgcmV2aXNpb25JZDogbnVtYmVyfSkge1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLnJldmlzaW9uSWQgPSByZXZpc2lvbklkO1xuXHRcdHRoaXMuaXNOZXdQYWdlID0gIXJldmlzaW9uSWQ7XG5cdH1cblxuXHQvKipcblx0ICog5Yid5aeL5YyWIOiOt+W+l+mhtemdokVkaXRUb2tlbuWSjOWIneWni1RpbWVTdGFtcFxuXHQgKiBJbml0aWFsaXphdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGVkaXRUb2tlbiAob3B0aW9uYWwpIOWmguaenOaPkOS+m+S6hmVkaXRUb2tlbu+8jOWwhuS4jeS8muWGjeiOt+WPllxuXHQgKi9cblx0YXN5bmMgaW5pdCh7ZWRpdFRva2VufToge2VkaXRUb2tlbjogc3RyaW5nfSA9IHtlZGl0VG9rZW46ICcnfSkge1xuXHRcdGNvbnN0IHByb21pc2VBcnIgPSBbdGhpcy5nZXRUaW1lc3RhbXAoKSwgdGhpcy5nZXRDb250ZW50TW9kZWwoKV07XG5cdFx0aWYgKCFlZGl0VG9rZW4pIHtcblx0XHRcdHByb21pc2VBcnIucHVzaCh0aGlzLmdldEVkaXRUb2tlbigpKTtcblx0XHR9XG5cdFx0YXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZUFycik7XG5cdFx0dGhpcy5pbml0ZWQgPSB0cnVlO1xuXHRcdExvZy5pbmZvKGBQYWdlIGluaXRpYWxpemF0aW9uIGZvciAke3RoaXMudGl0bGV9IyR7dGhpcy5yZXZpc2lvbklkfSBmaW5pc2hlZC5gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpcgRWRpdFRva2VuXG5cdCAqIEdldCBFZGl0VG9rZW5cblx0ICovXG5cdGFzeW5jIGdldEVkaXRUb2tlbigpIHtcblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ21lZGlhd2lraS51c2VyJyk7XG5cdFx0aWYgKG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJykgJiYgbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKSAhPT0gJytcXFxcJykge1xuXHRcdFx0Ly8g5aaC5p6cIE1lZGlhV2lraSBKYXZhU2NyaXB0IEFQSSDlj6/ku6Xnm7TmjqXojrflvpcgRWRpdFRva2VuIOWImeebtOaOpei/lOWbnlxuXHRcdFx0Ly8gUmV0dXJuIEVkaXRUb2tlbiByZXRyaWV2ZWQgZnJvbSBNZWRpYVdpa2kgSmF2YVNjcmlwdCBBUEkgaWYgYWNjZXNzaWJsZVxuXHRcdFx0dGhpcy5lZGl0VG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyDku45BUEnojrflvpdFZGl0VG9rZW5cblx0XHQvLyBHZXQgRWRpdFRva2VuIGZyb20gTWVkaWFXaWtpIEFQSVxuXHRcdHRoaXMuZWRpdFRva2VuID0gYXdhaXQgV2lraS5nZXRFZGl0VG9rZW4oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpfnvJbovpHln7rlh4bml7bpl7TmiLNcblx0ICogR2V0IEJhc2UgVGltZXN0YW1wXG5cdCAqL1xuXHRhc3luYyBnZXRUaW1lc3RhbXAoKSB7XG5cdFx0Y29uc3Qge3RpbWVzdGFtcCwgcmV2aXNpb25JZH0gPSAoYXdhaXQgV2lraS5nZXRQYWdlSW5mbyh7XG5cdFx0XHRyZXZpc2lvbklkOiB0aGlzLnJldmlzaW9uSWQsXG5cdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcblx0XHR9KSkgYXMgdW5rbm93biBhcyB7XG5cdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdHJldmlzaW9uSWQ6IG51bWJlcjtcblx0XHR9O1xuXHRcdHRoaXMudGltZXN0YW1wID0gdGltZXN0YW1wO1xuXHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHR0aGlzLnJldmlzaW9uSWQgPSByZXZpc2lvbklkO1xuXHRcdFx0dGhpcy5pc05ld1BhZ2UgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog6I635b6X6aG16Z2i5YaF5a655qih5Z6LXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5yZXZpc2lvbklkXG5cdCAqL1xuXHRhc3luYyBnZXRDb250ZW50TW9kZWwoKSB7XG5cdFx0Y29uc3Qge2NvbnRlbnRtb2RlbH0gPSAoYXdhaXQgV2lraS5nZXRQYWdlSW5mbyh7XG5cdFx0XHRyZXZpc2lvbklkOiB0aGlzLnJldmlzaW9uSWQsXG5cdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcblx0XHR9KSkgYXMge2NvbnRlbnRtb2RlbDogc3RyaW5nfTtcblx0XHR0aGlzLmNvbnRlbnRtb2RlbCA9IGNvbnRlbnRtb2RlbCB8fCAnd2lraXRleHQnO1xuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+lyBXaWtpVGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gY29uZmlnLnNlY3Rpb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5yZXZpc2lvbklkXG5cdCAqL1xuXHRhc3luYyBnZXRXaWtpVGV4dCh7c2VjdGlvbiA9ICcnfToge3NlY3Rpb24/OiBudW1iZXIgfCBzdHJpbmd9ID0ge30pIHtcblx0XHRjb25zdCBzZWMgPSBzZWN0aW9uID09PSAtMSA/IDAgOiBzZWN0aW9uO1xuXHRcdGlmICh0aGlzLnNlY3Rpb25DYWNoZVtzZWNdKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZWN0aW9uQ2FjaGVbc2VjXTtcblx0XHR9XG5cdFx0Y29uc3Qgd2lraVRleHQgPSBhd2FpdCBXaWtpLmdldFdpa2lUZXh0KHtcblx0XHRcdHNlY3Rpb246IHNlYyxcblx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucmV2aXNpb25JZCxcblx0XHR9KTtcblx0XHRMb2cuaW5mbyhgV2lraXRleHQgb2YgJHt0aGlzLnRpdGxlfSMke3NlY3Rpb259IGZldGNoZWQuYCk7XG5cdFx0dGhpcy5zZWN0aW9uQ2FjaGVbc2VjXSA9IHdpa2lUZXh0O1xuXHRcdHJldHVybiB3aWtpVGV4dDtcblx0fVxuXG5cdC8qKlxuXHQgKiDop6PmnpAgV2lraVRleHRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2l0ZXh0XG5cdCAqL1xuXHRhc3luYyBwYXJzZVdpa2lUZXh0KHdpa2l0ZXh0OiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gYXdhaXQgV2lraS5wYXJzZVdpa2lUZXh0KHdpa2l0ZXh0LCB0aGlzLnRpdGxlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDnvJbovpHpobXpnaJcblx0ICpcblx0ICogQHBhcmFtIHsqfSBjb25maWdcblx0ICogQHBhcmFtIHtBcGlFZGl0UGFnZVBhcmFtc30gcGF5bG9hZFxuXHQgKi9cblx0YXN5bmMgZWRpdChwYXlsb2FkOiBBcGlFZGl0UGFnZVBhcmFtcykge1xuXHRcdGlmICghdGhpcy5lZGl0VG9rZW4pIHtcblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfZWRpdHRva2VuJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghdGhpcy50aW1lc3RhbXAgJiYgIXRoaXMuaXNOZXdQYWdlKSB7XG5cdFx0XHQvLyDlpoLmnpzkuI3mmK/liJvlu7rmlrDpobXpnaIg5Y+I5rKh5pyJ5Z+65YeG5pe26Ze05oizIOWImeacieWPr+iDvemAoOaIkOe8lui+keimhuebliDkv53pmanotbfop4Hnm7TmjqXmi5Lnu51cblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfdGltZXN0YW1wJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJldHVybiBhd2FpdCBXaWtpLmVkaXQoe1xuXHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0XHRlZGl0VG9rZW46IHRoaXMuZWRpdFRva2VuLFxuXHRcdFx0Li4uKHRoaXMudGltZXN0YW1wID8ge3RpbWVzdGFtcDogdGhpcy50aW1lc3RhbXB9IDoge30pLFxuXHRcdFx0Li4ucGF5bG9hZCxcblx0XHRcdGFkZGl0aW9uYWxDb25maWc6IHtcblx0XHRcdFx0Li4uKHRoaXMuaXNOZXdQYWdlID8ge2NyZWF0ZW9ubHk6IHRoaXMuaXNOZXdQYWdlfSA6IHt9KSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5jbGFzcyBTZXR0aW5ncyB7XG5cdGdldFNldHRpbmcoa2V5OiBzdHJpbmcsIG9iamVjdDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPiA9IHt9KSB7XG5cdFx0Y29uc3QgdyA9IG9iamVjdDtcblx0XHRsZXQgc2V0dGluZ3M7XG5cdFx0dHJ5IHtcblx0XHRcdHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbJ1dpa2lwbHVzX1NldHRpbmdzJ10pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgY3VzdG9tU2V0dGluZ0Z1bmN0aW9uID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gJHtzZXR0aW5nc1trZXldfWApO1xuXHRcdFx0aWYgKHR5cGVvZiBjdXN0b21TZXR0aW5nRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoY3VzdG9tU2V0dGluZ0Z1bmN0aW9uKCkodykgPT09IHRydWUpIHtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGN1c3RvbVNldHRpbmdGdW5jdGlvbigpKHcpIHx8IHNldHRpbmdzW2tleV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHNldHRpbmdzW2tleV07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGBcXCR7JHtrZXl9fWAsIG9iamVjdFtrZXldIGFzIHN0cmluZyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNldHRpbmdzKCk7XG4iLCAiLyoqXG4gKiDop6PmnpBVUkzlj4LmlbDliJfooahcbiAqIFBhcnNlIFVSTCBxdWVyeS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0gdXJsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5KHVybDogc3RyaW5nKSB7XG5cdGNvbnN0IHJlZyA9IC8oKFtePyY9XSspKD86PShbXj8mPV0qKSkqKS9nO1xuXHRjb25zdCBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblx0bGV0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsO1xuXHR3aGlsZSAoKG1hdGNoID0gcmVnLmV4ZWModXJsKSkpIHtcblx0XHR0cnkge1xuXHRcdFx0cGFyYW1zW21hdGNoWzJdIGFzIHN0cmluZ10gPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10gYXMgc3RyaW5nKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHBhcmFtc1ttYXRjaFsyXSBhcyBzdHJpbmddID0gbWF0Y2hbM10gYXMgc3RyaW5nO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcGFyYW1zO1xufVxuIiwgImNvbnN0IHNsZWVwID0gKHRpbWU6IG51bWJlcikgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRyZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTtcblx0fSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgc2xlZXA7XG4iLCAiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IExvZywge1dpa2lwbHVzRXJyb3J9IGZyb20gJy4uL3V0aWxzL2xvZyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vbm90aWZpY2F0aW9uJztcbmltcG9ydCBpMThuIGZyb20gJy4uL3V0aWxzL2kxOG4nO1xuaW1wb3J0IHtwYXJzZVF1ZXJ5fSBmcm9tICcuLi91dGlscy9oZWxwZXJzJztcbmltcG9ydCBzbGVlcCBmcm9tICcuLi91dGlscy9zbGVlcCc7XG5cbmNsYXNzIFVJIHtcblx0cXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gZmFsc2U7XG5cdHNjcm9sbFRvcCA9IDA7XG5cblx0LyoqXG5cdCAqIOWIm+W7uuWxheS4reWvueivneahhlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUg56qX5Y+j5qCH6aKYXG5cdCAqIEBwYXJhbSB7c3RyaW5nIHwgSlF1ZXJ5PEhUTUxFbGVtZW50Pn0gY29udGVudCDlhoXlrrlcblx0ICogQHBhcmFtIHsqfSB3aWR0aCDlrr3luqZcblx0ICogQHBhcmFtIHsqfSBjYWxsYmFjayDlm57osIPlh73mlbBcblx0ICovXG5cdGNyZWF0ZURpYWxvZ0JveChcblx0XHR0aXRsZTogc3RyaW5nID0gJ1dpa2lwbHVzJyxcblx0XHRjb250ZW50OiBzdHJpbmcgfCBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0gJycsXG5cdFx0d2lkdGg6IG51bWJlciA9IDYwMCxcblx0XHRjYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHt9XG5cdCkge1xuXHRcdGlmICgkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRjb25zdCBjbGllbnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdGNvbnN0IGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHRjb25zdCBkaWFsb2dXaWR0aCA9IE1hdGgubWluKGNsaWVudFdpZHRoLCB3aWR0aCk7XG5cdFx0Y29uc3QgZGlhbG9nQm94ID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveCcpXG5cdFx0XHQuY3NzKHtcblx0XHRcdFx0J21hcmdpbi1sZWZ0JzogY2xpZW50V2lkdGggLyAyIC0gZGlhbG9nV2lkdGggLyAyLFxuXHRcdFx0XHR0b3A6ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpIHx8IDAgKyBjbGllbnRIZWlnaHQgKiAwLjIsXG5cdFx0XHRcdGRpc3BsYXk6ICdub25lJyxcblx0XHRcdH0pXG5cdFx0XHQuYXBwZW5kKCQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUhlYWRlcicpLmh0bWwodGl0bGUpKVxuXHRcdFx0LmFwcGVuZCgkKCc8ZGl2PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuYXBwZW5kKGNvbnRlbnQpKVxuXHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS50ZXh0KCfDlycpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1DbG9zZScpKTtcblx0XHQkKCdib2R5JykuYXBwZW5kKGRpYWxvZ0JveCk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94Jykud2lkdGgoZGlhbG9nV2lkdGgpO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdCQodGhpcylcblx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdC5mYWRlT3V0KCdmYXN0JywgKCkgPT4ge1xuXHRcdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHtcblx0XHRcdFx0XHRcdHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IHt9O1xuXHRcdFx0XHRcdH0pOyAvLyDlj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0XHQvLyDmi5bmm7Ncblx0XHRjb25zdCBiaW5kRHJhZ2dpbmcgPSAoZWxlbWVudDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4ge1xuXHRcdFx0ZWxlbWVudC5tb3VzZWRvd24oKGUpID0+IHtcblx0XHRcdFx0Y29uc3QgYmFzZVggPSBlLmNsaWVudFg7XG5cdFx0XHRcdGNvbnN0IGJhc2VZID0gZS5jbGllbnRZO1xuXHRcdFx0XHRjb25zdCBiYXNlT2Zmc2V0WCA9IGVsZW1lbnQucGFyZW50KCkub2Zmc2V0KCk/LmxlZnQgfHwgMDtcblx0XHRcdFx0Y29uc3QgYmFzZU9mZnNldFkgPSBlbGVtZW50LnBhcmVudCgpLm9mZnNldCgpPy50b3AgfHwgMDtcblx0XHRcdFx0JChkb2N1bWVudCkub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC5wYXJlbnQoKS5jc3Moe1xuXHRcdFx0XHRcdFx0J21hcmdpbi1sZWZ0JzogYmFzZU9mZnNldFggKyBlLmNsaWVudFggLSBiYXNlWCxcblx0XHRcdFx0XHRcdHRvcDogYmFzZU9mZnNldFkgKyBlLmNsaWVudFkgLSBiYXNlWSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwJywgKCkgPT4ge1xuXHRcdFx0XHRcdGVsZW1lbnQudW5iaW5kKCdtb3VzZWRvd24nKTtcblx0XHRcdFx0XHQkKGRvY3VtZW50KS5vZmYoJ21vdXNlbW92ZScpO1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9mZignbW91c2V1cCcpO1xuXHRcdFx0XHRcdGJpbmREcmFnZ2luZyhlbGVtZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGJpbmREcmFnZ2luZygkKCcuV2lraXBsdXMtSW50ZXJCb3gtSGVhZGVyJykpO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmZhZGVJbig1MDApO1xuXHRcdGNhbGxiYWNrKCk7XG5cdFx0cmV0dXJuIGRpYWxvZ0JveDtcblx0fVxuXG5cdC8qKlxuXHQgKiDlnKjmkJzntKLmoYblt6bkvqfjgIzmm7TlpJrjgI3oj5zljZXlhoXmt7vliqDmjInpkq5cblx0ICogQWRkIGEgYnV0dG9uIGluIFwiTW9yZVwiIG1lbnUgKGxlZnQgb2YgdGhlIHNlYXJjaCBiYXIpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IOaMiemSruWQjSBCdXR0b24gdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaWQg5oyJ6ZKuaWQgQnV0dG9uIGlkXG5cdCAqIEByZXR1cm4ge0pRdWVyeTxIVE1MRWxlbWVudD59IGJ1dHRvblxuXHQgKi9cblx0YWRkRnVuY3Rpb25CdXR0b24odGV4dDogc3RyaW5nLCBpZDogc3RyaW5nKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB8IHZvaWQge1xuXHRcdGxldCBidXR0b247XG5cdFx0c3dpdGNoIChDb25zdGFudHMuc2tpbikge1xuXHRcdFx0Y2FzZSAnbWluZXJ2YSc6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIGlkKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndG9nZ2xlLWxpc3QtaXRlbScpXG5cdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnbXctdWktaWNvbiBtdy11aS1pY29uLWJlZm9yZSB0b2dnbGUtbGlzdC1pdGVtX19hbmNob3InKVxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCk7Jylcblx0XHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygndG9nZ2xlLWxpc3QtaXRlbV9fbGFiZWwnKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQodGV4dClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdtb2Vza2luJzpcblx0XHRcdFx0YnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1Nb3JlLUZ1bmN0aW9uLUJ1dHRvbicpXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgaWQpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8YT4nKS5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKS50ZXh0KHRleHQpKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnbXctbGlzdC1pdGVtJylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3ZlY3Rvci10YWItbm9pY29uJylcblx0XHRcdFx0XHQuYXR0cignaWQnLCBpZClcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpLnRleHQodGV4dCkpO1xuXHRcdH1cblx0XHRpZiAoQ29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJyAmJiAkKCcjcC10YicpLmxlbmd0aCA+IDApIHtcblx0XHRcdCQoJyNwLXRiJykuYXBwZW5kKGJ1dHRvbik7XG5cdFx0XHRyZXR1cm4gJChgIyR7aWR9YCk7XG5cdFx0fSBlbHNlIGlmIChDb25zdGFudHMuc2tpbiA9PT0gJ21vZXNraW4nKSB7XG5cdFx0XHQkKCcubW9yZS1hY3Rpb25zLWxpc3QnKS5maXJzdCgpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH0gZWxzZSBpZiAoJCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcjcC1jYWN0aW9ucyB1bCcpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH1cblx0XHRMb2cuaW5mbyhpMThuLnRyYW5zbGF0ZSgnY2FudF9hZGRfZnVuY2J0bicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXlv6vpgJ/ph43lrprlkJHmjInpkq5cblx0ICpcblx0ICogQHBhcmFtIHsqfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbihvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBidXR0b24gPSB0aGlzLmFkZEZ1bmN0aW9uQnV0dG9uKGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9mcm9tJyksICdXaWtpcGx1cy1TUi1JbnRybycpO1xuXHRcdGlmIChidXR0b24pIHtcblx0XHRcdGJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl6K6+572u6Z2i5p2/5oyJ6ZKuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2V0dGluZ3NQYW5lbEJ1dHRvbihvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBidXR0b24gPSB0aGlzLmFkZEZ1bmN0aW9uQnV0dG9uKGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5ncycpLCAnV2lraXBsdXMtU2V0dGluZ3MtSW50cm8nKTtcblx0XHRpZiAoYnV0dG9uKSB7XG5cdFx0XHRidXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpemhtumDqOW/q+mAn+e8lui+keaMiemSrlxuXHQgKiBJbnNlcnQgUXVpY2tFZGl0IGJ1dHRvbiBiZXNpZGVzIHBhZ2UgZWRpdCBidXR0b24uXG5cdCAqXG5cdCAqIEBwYXJhbSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRUb3BRdWlja0VkaXRFbnRyeShvbkNsaWNrOiB7XG5cdFx0KHtcblx0XHRcdHNlY3Rpb25OdW1iZXIsXG5cdFx0XHRzZWN0aW9uTmFtZSxcblx0XHRcdHRhcmdldFBhZ2VOYW1lLFxuXHRcdH06IHtcblx0XHRcdHNlY3Rpb25OdW1iZXI6IG51bWJlcjtcblx0XHRcdHNlY3Rpb25OYW1lPzogc3RyaW5nO1xuXHRcdFx0dGFyZ2V0UGFnZU5hbWU6IHN0cmluZztcblx0XHR9KTogdm9pZCB8IFByb21pc2U8dm9pZD47XG5cdH0pIHtcblx0XHRjb25zdCB0b3BCdG4gPSAkKCc8bGk+JykuYXR0cignaWQnLCAnV2lraXBsdXMtRWRpdC1Ub3BCdG4nKS5hdHRyKCdjbGFzcycsICdtdy1saXN0LWl0ZW0nKTtcblx0XHRjb25zdCB0b3BCdG5MaW5rID0gJCgnPGE+Jylcblx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3RvcGJ0bicpfWApO1xuXHRcdHRvcEJ0bi5hcHBlbmQodG9wQnRuTGluayk7XG5cdFx0c3dpdGNoIChDb25zdGFudHMuc2tpbikge1xuXHRcdFx0Y2FzZSAnbWluZXJ2YSc6XG5cdFx0XHRcdHRvcEJ0bi5jc3MoeydhbGlnbi1pdGVtcyc6ICdjZW50ZXInLCBkaXNwbGF5OiAnZmxleCd9KTtcblx0XHRcdFx0dG9wQnRuLmZpbmQoJ3NwYW4nKS5hZGRDbGFzcygncGFnZS1hY3Rpb25zLW1lbnVfX2xpc3QtaXRlbScpO1xuXHRcdFx0XHR0b3BCdG5cblx0XHRcdFx0XHQuZmluZCgnYScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKFxuXHRcdFx0XHRcdFx0J213LXVpLWljb24gbXctdWktaWNvbi1lbGVtZW50IG13LXVpLWljb24td2lraW1lZGlhLWVkaXQtYmFzZTIwIG13LXVpLWljb24td2l0aC1sYWJlbC1kZXNrdG9wJ1xuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQuY3NzKCd2ZXJ0aWNhbC1hbGlnbicsICdtaWRkbGUnKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3ZlY3Rvci0yMDIyJzpcblx0XHRcdFx0dG9wQnRuLmFkZENsYXNzKCd2ZWN0b3ItdGFiLW5vaWNvbicpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndmVjdG9yJzpcblx0XHRcdFx0dG9wQnRuLmFwcGVuZCgkKCc8c3Bhbj4nKS5hcHBlbmQodG9wQnRuTGluaykpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHR9XG5cdFx0JCh0b3BCdG4pLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRzZWN0aW9uTnVtYmVyOiAtMSxcblx0XHRcdFx0dGFyZ2V0UGFnZU5hbWU6IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWUsXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRpZiAoJCgnI2NhLWVkaXQnKS5sZW5ndGggPiAwICYmICQoJyNXaWtpcGx1cy1FZGl0LVRvcEJ0bicpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0aWYgKENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YSknKSB7XG5cdFx0XHRcdCQoJyNjYS1lZGl0JykucGFyZW50KCkuYWZ0ZXIodG9wQnRuKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJyNjYS1lZGl0JykuYWZ0ZXIodG9wQnRuKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl5q616JC95b+r6YCf57yW6L6R5oyJ6ZKuXG5cdCAqIEluc2VydCBRdWlja0VkaXQgYnV0dG9ucyBmb3IgZWFjaCBzZWN0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2VjdGlvblF1aWNrRWRpdEVudHJpZXMoXG5cdFx0b25DbGljazogKHtcblx0XHRcdHNlY3Rpb25OdW1iZXIsXG5cdFx0XHRzZWN0aW9uTmFtZSxcblx0XHRcdHRhcmdldFBhZ2VOYW1lLFxuXHRcdH06IHtcblx0XHRcdHNlY3Rpb25OdW1iZXI/OiBzdHJpbmcgfCBudW1iZXI7XG5cdFx0XHRzZWN0aW9uTmFtZT86IHN0cmluZztcblx0XHRcdHRhcmdldFBhZ2VOYW1lOiBzdHJpbmc7XG5cdFx0fSkgPT4gUHJvbWlzZTx2b2lkPiB8IHZvaWRcblx0KSB7XG5cdFx0b25DbGljayB8fD0gKCkgPT4ge307XG5cdFx0Y29uc3Qgc2VjdGlvbkJ0biA9XG5cdFx0XHRDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnXG5cdFx0XHRcdD8gJCgnPHNwYW4+JykuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKFxuXHRcdFx0XHRcdFx0XHRcdCdXaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4gbXctdWktaWNvbiBtdy11aS1pY29uLWVsZW1lbnQgbXctdWktaWNvbi13aWtpbWVkaWEtZWRpdC1iYXNlMjAgZWRpdC1wYWdlIG13LXVpLWljb24tZmx1c2gtcmlnaHQnXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0LmNzcygnbWFyZ2luLWxlZnQnLCAnMC43NWVtJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3RpdGxlJywgaTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF9zZWN0aW9uYnRuJykpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQ6ICQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLmFkZENsYXNzKCdtdy1lZGl0c2VjdGlvbi1kaXZpZGVyJykudGV4dCgnIHwgJykpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuJylcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpKVxuXHRcdFx0XHRcdFx0KTtcblx0XHQkKCcubXctZWRpdHNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGVkaXRVUkwgPSAkKHRoaXMpLmZpbmQoXCJhW2hyZWYqPSdhY3Rpb249ZWRpdCddXCIpLmZpcnN0KCkuYXR0cignaHJlZicpIHx8ICcnO1xuXHRcdFx0XHRjb25zdCBbLCBzZWN0aW9uTGFiZWxdID0gZWRpdFVSTC5tYXRjaCgvJlt2ZV0qc2VjdGlvblxcPShbXiZdKykvKSBhcyBSZWdFeHBFeGVjQXJyYXk7IC8vIGB2ZWAgZm9yIHZpc3VhbCBlZGl0b3Jcblx0XHRcdFx0Y29uc3Qgc2VjdGlvbk51bWJlciA9IHNlY3Rpb25MYWJlbD8ucmVwbGFjZSgvVC0vZ2ksICcnKTsgLy8gZW1iZWRkZWQgcGFnZXMgdXNlIFQtc2VyaWVzIHNlY3Rpb24gbnVtYmVyXG5cdFx0XHRcdGNvbnN0IFssIHNlY3Rpb25UYXJnZXRMYWJlbF0gPSBlZGl0VVJMLm1hdGNoKC90aXRsZT0oLis/KSYvKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25UYXJnZXROYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KHNlY3Rpb25UYXJnZXRMYWJlbCB8fCAnJyk7XG5cdFx0XHRcdGNvbnN0IGNsb25lTm9kZSA9ICQodGhpcykucHJldigpLmNsb25lKCk7XG5cdFx0XHRcdGNsb25lTm9kZS5maW5kKCcubXctaGVhZGxpbmUtbnVtYmVyJykucmVtb3ZlKCk7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25OYW1lID0gY2xvbmVOb2RlLnRleHQoKS50cmltKCk7XG5cdFx0XHRcdGNvbnN0IF9zZWN0aW9uQnRuID0gc2VjdGlvbkJ0bi5jbG9uZSgpO1xuXHRcdFx0XHRfc2VjdGlvbkJ0bi5maW5kKCcuV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuJykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcjogc2VjdGlvbk51bWJlciBhcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRzZWN0aW9uTmFtZSxcblx0XHRcdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBzZWN0aW9uVGFyZ2V0TmFtZSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5hcHBlbmQoX3NlY3Rpb25CdG4pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQodGhpcykuZmluZCgnLm13LWVkaXRzZWN0aW9uLWJyYWNrZXQnKS5sYXN0KCkuYmVmb3JlKF9zZWN0aW9uQnRuKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdExvZy5lcnJvcignZmFpbF90b19pbml0X3F1aWNrZWRpdCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeS7u+aEj+mTvuaOpee8lui+keWFpeWPo1xuXHQgKlxuXHQgKiBAcGFyYW0geyp9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydExpbmtFZGl0RW50cmllcyhcblx0XHRvbkNsaWNrOiAoe1xuXHRcdFx0c2VjdGlvbk51bWJlcixcblx0XHRcdHNlY3Rpb25OYW1lLFxuXHRcdFx0dGFyZ2V0UGFnZU5hbWUsXG5cdFx0fToge1xuXHRcdFx0c2VjdGlvbk51bWJlcj86IHN0cmluZyB8IG51bWJlcjtcblx0XHRcdHNlY3Rpb25OYW1lPzogc3RyaW5nO1xuXHRcdFx0dGFyZ2V0UGFnZU5hbWU6IHN0cmluZztcblx0XHR9KSA9PiBQcm9taXNlPHZvaWQ+IHwgdm9pZFxuXHQpIHtcblx0XHRvbkNsaWNrIHx8PSAoKSA9PiB7fTtcblx0XHQkKCcjbXctY29udGVudC10ZXh0IGEuZXh0ZXJuYWwnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpIHx8ICcnO1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeSh1cmwpO1xuXHRcdFx0aWYgKHBhcmFtc1snYWN0aW9uJ10gPT09ICdlZGl0JyAmJiBwYXJhbXNbJ3RpdGxlJ10gIT09IHVuZGVmaW5lZCAmJiBwYXJhbXNbJ3NlY3Rpb24nXSAhPT0gJ25ldycpIHtcblx0XHRcdFx0JCh0aGlzKS5hZnRlcihcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnamF2YXNjcmlwdDp2b2lkKDApJyxcblx0XHRcdFx0XHRcdFx0Y2xhc3M6ICdXaWtpcGx1cy1FZGl0LUV2ZXJ5V2hlcmVCdG4nLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC50ZXh0KGAoJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3NlY3Rpb25idG4nKX0pYClcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBwYXJhbXNbJ3RpdGxlJ10gYXMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdHNlY3Rpb25OdW1iZXI6IHBhcmFtc1snc2VjdGlvbiddID8/IC0xLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRzaG93UXVpY2tFZGl0UGFuZWwoe1xuXHRcdHRpdGxlID0gJycsXG5cdFx0Y29udGVudCA9ICcnLFxuXHRcdHN1bW1hcnkgPSAnJyxcblx0XHRvbkJhY2sgPSAoKSA9PiB7fSxcblx0XHRvblBhcnNlID0gYXN5bmMgKCkgPT4ge30sXG5cdFx0b25FZGl0ID0gYXN5bmMgKCkgPT4ge30sXG5cdFx0ZXNjRXhpdCA9IGZhbHNlLFxuXHR9OiB7XG5cdFx0dGl0bGU6IHN0cmluZztcblx0XHRjb250ZW50OiBzdHJpbmc7XG5cdFx0c3VtbWFyeTogc3RyaW5nO1xuXHRcdG9uQmFjazogKCkgPT4gdm9pZDtcblx0XHRvblBhcnNlOiAod2lraXRleHQ6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcblx0XHRvbkVkaXQ6IChhcmcwOiB7c3VtbWFyeTogc3RyaW5nOyBjb250ZW50OiBzdHJpbmc7IGlzTWlub3JFZGl0OiBib29sZWFufSkgPT4gUHJvbWlzZTx2b2lkPjtcblx0XHRlc2NFeGl0OiBib29sZWFuO1xuXHR9KSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5zY3JvbGxUb3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSB8fCAwO1xuXHRcdGlmICh0aGlzLnF1aWNrRWRpdFBhbmVsVmlzaWJsZSkge1xuXHRcdFx0dGhpcy5oaWRlUXVpY2tFZGl0UGFuZWwoKTtcblx0XHR9XG5cdFx0dGhpcy5xdWlja0VkaXRQYW5lbFZpc2libGUgPSB0cnVlO1xuXHRcdC8vIOmYsuatouaJi+a7keWFs+mXremhtemdolxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiBgJHtpMThuLnRyYW5zbGF0ZSgnb25jbG9zZV9jb25maXJtJyl9YCkpO1xuXHRcdGNvbnN0IGlzTmV3UGFnZSA9ICQoJy5ub2FydGljbGV0ZXh0JykubGVuZ3RoID4gMDtcblx0XHQvLyBET00g5a6a5LmJ5byA5aeLXG5cdFx0Y29uc3QgYmFja0J0biA9ICQoJzxzcGFuPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CdG4nKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2JhY2snKX1gKTsgLy8g6L+U5Zue5oyJ6ZKuXG5cdFx0Y29uc3QganVtcEJ0biA9ICQoJzxzcGFuPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LUp1bXAnKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CdG4nKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjV2lraXBsdXMtUXVpY2tlZGl0Jylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnZ290b19lZGl0Ym94Jyl9YClcblx0XHRcdCk7IC8vIOWIsOe8lui+keahhlxuXHRcdGNvbnN0IGlucHV0Qm94ID0gJCgnPHRleHRhcmVhPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdCcpOyAvLyDkuLvnvJbovpHmoYZcblx0XHRjb25zdCBwcmV2aWV3Qm94ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKTsgLy8g6aKE6KeI6L6T5Ye6XG5cdFx0Y29uc3Qgc3VtbWFyeUJveCA9ICQoJzxpbnB1dD4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0Jylcblx0XHRcdC5hdHRyKCdwbGFjZWhvbGRlcicsIGAke2kxOG4udHJhbnNsYXRlKCdzdW1tYXJ5X3BsYWNlaG9sZCcpfWApOyAvLyDnvJbovpHmkZjopoHovpPlhaVcblx0XHRjb25zdCBlZGl0U3VibWl0QnRuID0gJCgnPGJ1dHRvbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoaXNOZXdQYWdlID8gJ3B1Ymxpc2hfcGFnZScgOiAncHVibGlzaF9jaGFuZ2UnKX0oQ3RybCtTKWApOyAvLyDmj5DkuqTmjInpkq5cblx0XHRjb25zdCBwcmV2aWV3U3VibWl0QnRuID0gJCgnPGJ1dHRvbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgncHJldmlldycpfWApOyAvLyDpooTop4jmjInpkq5cblx0XHRjb25zdCBpc01pbm9yRWRpdCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hcHBlbmQoJCgnPGlucHV0PicpLmF0dHIoe3R5cGU6ICdjaGVja2JveCcsIGlkOiAnV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCd9KSlcblx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdCQoJzxsYWJlbD4nKVxuXHRcdFx0XHRcdC5hdHRyKCdmb3InLCAnV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpXG5cdFx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ21hcmtfbWlub3JlZGl0Jyl9KEN0cmwrU2hpZnQrUylgKVxuXHRcdFx0KVxuXHRcdFx0LmNzcyh7bWFyZ2luOiAnNXB4IDVweCA1cHggLTNweCcsIGRpc3BsYXk6ICdpbmxpbmUnfSk7XG5cdFx0Ly8gRE9N5a6a5LmJ57uT5p2fXG5cdFx0Y29uc3QgZWRpdEJvZHkgPSAkKCc8ZGl2PicpLmFwcGVuZChcblx0XHRcdGJhY2tCdG4sXG5cdFx0XHRqdW1wQnRuLFxuXHRcdFx0cHJldmlld0JveCxcblx0XHRcdGlucHV0Qm94LFxuXHRcdFx0c3VtbWFyeUJveCxcblx0XHRcdCQoJzxicj4nKSxcblx0XHRcdGlzTWlub3JFZGl0LFxuXHRcdFx0ZWRpdFN1Ym1pdEJ0bixcblx0XHRcdHByZXZpZXdTdWJtaXRCdG5cblx0XHQpO1xuXHRcdHRoaXMuY3JlYXRlRGlhbG9nQm94KHRpdGxlLCBlZGl0Qm9keSwgMTAwMCwgKCkgPT4ge1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdCcpLnZhbChjb250ZW50KTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCcpLnZhbChzdW1tYXJ5KTtcblx0XHR9KTtcblx0XHQvLyBCYWNrXG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJykub24oJ2NsaWNrJywgb25CYWNrKTtcblx0XHQvLyBQcmV2aWV3XG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHByZWxvYWRCYW5uZXIgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2xvYWRpbmdfcHJldmlldycpfWApO1xuXHRcdFx0Y29uc3Qgd2lraVRleHQgPSAkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKCk7XG5cdFx0XHQkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZU91dCgxMDAsICgpID0+IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmh0bWwoJycpLmFwcGVuZChwcmVsb2FkQmFubmVyKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbigxMDApO1xuXHRcdFx0fSk7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzZWxmLnNjcm9sbFRvcH0sIDIwMCk7IC8v6L+U5Zue6aG26YOoXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBvblBhcnNlKHdpa2lUZXh0IGFzIHN0cmluZyk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZU91dCgnMTAwJywgKCkgPT4ge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuaHRtbChgPGhyPjxkaXYgY2xhc3M9XCJtdy1ib2R5LWNvbnRlbnRcIj4ke3Jlc3VsdH08L2Rpdj48aHI+YCk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlSW4oJzEwMCcpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0JykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHQvLyBFZGl0XG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKS5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCB0aW1lciA9IERhdGUubm93KCk7XG5cdFx0XHRjb25zdCBlZGl0QmFubmVyID0gJCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdzdWJtaXR0aW5nX2VkaXQnKX1gKTtcblx0XHRcdGNvbnN0IHBheWxvYWQgPSB7XG5cdFx0XHRcdHN1bW1hcnk6ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCcpLnZhbCgpIGFzIHN0cmluZyxcblx0XHRcdFx0Y29udGVudDogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdCcpLnZhbCgpIGFzIHN0cmluZyxcblx0XHRcdFx0aXNNaW5vckVkaXQ6ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0JykuaXMoJzpjaGVja2VkJykgYXMgYm9vbGVhbixcblx0XHRcdH07XG5cdFx0XHQvLyDlh4blpIfnvJbovpEg56aB55So5oyJ6ZKuIOaJp+ihjOWKqOeUu1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQsI1dpa2lwbHVzLVF1aWNrZWRpdCwjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0JykuYXR0cihcblx0XHRcdFx0J2Rpc2FibGVkJyxcblx0XHRcdFx0J2Rpc2FibGVkJ1xuXHRcdFx0KTtcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHNlbGYuc2Nyb2xsVG9wfSwgMjAwKTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KDEwMCwgKCkgPT4ge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuaHRtbCgnJykuYXBwZW5kKGVkaXRCYW5uZXIpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZUluKDEwMCk7XG5cdFx0XHR9KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IG9uRWRpdChwYXlsb2FkKTtcblx0XHRcdFx0Y29uc3QgdXNlVGltZSA9IERhdGUubm93KCkgLSB0aW1lcjtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5XaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHRcdC5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSg2LCAyMzksIDkyLCAwLjQ0KScpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0Jylcblx0XHRcdFx0XHQuZmluZCgnLldpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2VkaXRfc3VjY2VzcycsIFt1c2VUaW1lLnRvU3RyaW5nKCldKX1gKTtcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4ge1xuXHRcdFx0XHRcdHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IHt9O1xuXHRcdFx0XHR9KTsgLy8g5Y+W5raI6aG16Z2i5YWz6Zet56Gu6K6kXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmh0bWwoKGVycm9yIGFzIFdpa2lwbHVzRXJyb3IpLm1lc3NhZ2UpO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQsI1dpa2lwbHVzLVF1aWNrZWRpdCwjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0JykucHJvcChcblx0XHRcdFx0XHQnZGlzYWJsZWQnLFxuXHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly8gQ3RybCtT5o+Q5LqkIEN0cmwrU2hpZnQrU+Wwj+e8lui+kVxuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0LCNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0Jykub24oJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUuY3RybEtleSAmJiBlLndoaWNoID09PSA4Mykge1xuXHRcdFx0XHRpZiAoZS5zaGlmdEtleSkge1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0JykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvLyBFc2PpgIDlh7pcblx0XHRpZiAoZXNjRXhpdCkge1xuXHRcdFx0JChkb2N1bWVudCkub24oJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS53aGljaCA9PT0gMjcpIHtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRoaWRlUXVpY2tFZGl0UGFuZWwoKSB7XG5cdFx0dGhpcy5xdWlja0VkaXRQYW5lbFZpc2libGUgPSBmYWxzZTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5mYWRlT3V0KCdmYXN0JywgKCkgPT4ge1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4ge1xuXHRcdFx0XHR3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB7fTtcblx0XHRcdH0pOyAvLyDlj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICog5pi+56S65b+r6YCf6YeN5a6a5ZCR5by556qXXG5cdCAqXG5cdCAqIEBwYXJhbSByb290MFxuXHQgKiBAcGFyYW0gcm9vdDAub25FZGl0XG5cdCAqIEBwYXJhbSByb290MC5vblN1Y2Nlc3Ncblx0ICovXG5cdHNob3dTaW1wbGVSZWRpcmVjdFBhbmVsKHtcblx0XHRvbkVkaXQgPSBhc3luYyAoKSA9PiB7fSxcblx0XHRvblN1Y2Nlc3MgPSAoKSA9PiB7fSxcblx0fToge1xuXHRcdG9uRWRpdD86IChhcmcwOiB7dGl0bGU6IHN0cmluZzsgc3VtbWFyeTogc3RyaW5nOyBmb3JjZU92ZXJ3cml0ZTogYm9vbGVhbn0pID0+IFByb21pc2U8dm9pZD47XG5cdFx0b25TdWNjZXNzPzogKGFyZzA6IHt0aXRsZTogc3RyaW5nfSkgPT4gdm9pZDtcblx0fSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1JbnB1dCcpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLVRpdGxlJyk7XG5cdFx0Y29uc3Qgc3VtbWFyeUlucHV0VGl0bGUgPSAkKCc8cD4nKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zdW1tYXJ5X2Rlc2MnKSk7XG5cdFx0Y29uc3Qgc3VtbWFyeUlucHV0ID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1JbnB1dCcpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLVN1bW1hcnknKTtcblx0XHRjb25zdCBhcHBseUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1DYW5jZWwnKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ2NhbmNlbCcpKTtcblx0XHRjb25zdCBjb250aW51ZUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1Db250aW51ZScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY29udGludWUnKSk7XG5cdFx0Y29uc3QgY29udGVudCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hcHBlbmQoaW5wdXQpXG5cdFx0XHQuYXBwZW5kKHN1bW1hcnlJbnB1dFRpdGxlKVxuXHRcdFx0LmFwcGVuZChzdW1tYXJ5SW5wdXQpXG5cdFx0XHQuYXBwZW5kKCQoJzxocj4nKSlcblx0XHRcdC5hcHBlbmQoYXBwbHlCdG4pXG5cdFx0XHQuYXBwZW5kKGNhbmNlbEJ0bik7IC8vIOaLvOaOpVxuXHRcdGNvbnN0IGRpYWxvZyA9IHRoaXMuY3JlYXRlRGlhbG9nQm94KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9kZXNjJyksIGNvbnRlbnQsIDYwMCk7XG5cdFx0YXBwbHlCdG4ub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGUgPSAkKCcjV2lraXBsdXMtU1ItVGl0bGUnKS52YWwoKSBhcyBzdHJpbmc7XG5cdFx0XHRjb25zdCBzdW1tYXJ5ID0gJCgnI1dpa2lwbHVzLVNSLVN1bW1hcnknKS52YWwoKSBhcyBzdHJpbmc7XG5cdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoXG5cdFx0XHRcdGA8ZGl2IGNsYXNzPVwiV2lraXBsdXMtQmFubmVyXCI+JHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9PC9kaXY+YFxuXHRcdFx0KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IG9uRWRpdCh7XG5cdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogZmFsc2UsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dChpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3Rfc2F2ZWQnKSk7XG5cdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0b25TdWNjZXNzKHt0aXRsZX0pO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDIxOCwgMTQyLCAxNjcsIDAuNjUpJyk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KChlcnJvciBhcyBXaWtpcGx1c0Vycm9yKS5tZXNzYWdlKTtcblx0XHRcdFx0aWYgKChlcnJvciBhcyBXaWtpcGx1c0Vycm9yKS5jb2RlID09PSAnYXJ0aWNsZWV4aXN0cycpIHtcblx0XHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmFwcGVuZCgkKCc8aHI+JykpLmFwcGVuZChjb250aW51ZUJ0bikuYXBwZW5kKGNhbmNlbEJ0bik7XG5cdFx0XHRcdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb250aW51ZUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoXG5cdFx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwiV2lraXBsdXMtQmFubmVyXCI+JHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9PC9kaXY+YFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IG9uRWRpdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zYXZlZCcpKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRcdFx0XHRvblN1Y2Nlc3Moe3RpdGxlfSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoKGVycm9yIGFzIFdpa2lwbHVzRXJyb3IpLm1lc3NhZ2UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiDpmpDol4/lv6vpgJ/ph43lrprlkJHlvLnnqpdcblx0ICpcblx0ICogQHBhcmFtIHsqfSBkaWFsb2dcblx0ICovXG5cdGhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyA9ICQoJ2JvZHknKSkge1xuXHRcdGRpYWxvZy5maW5kKCcuV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKS50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0c2hvd1NldHRpbmdzUGFuZWwoe1xuXHRcdG9uU3VibWl0ID0gKCkgPT4ge30sXG5cdH06IHtcblx0XHRvblN1Ym1pdD86IChhcmcwOiB7c2V0dGluZ3M6IHN0cmluZ30pID0+IHZvaWQ7XG5cdH0gPSB7fSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPHRleHRhcmVhPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS5hdHRyKCdyb3dzJywgJzEwJyk7XG5cdFx0Y29uc3QgYXBwbHlCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU2V0dGluZy1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TZXR0aW5nLUNhbmNlbCcpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY2FuY2VsJykpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSAkKCc8ZGl2PicpLmFwcGVuZChpbnB1dCkuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGFwcGx5QnRuKS5hcHBlbmQoY2FuY2VsQnRuKTsgLy8g5ou85o6lXG5cblx0XHRjb25zdCBkaWFsb2cgPSB0aGlzLmNyZWF0ZURpYWxvZ0JveChpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3NfZGVzYycpLCBjb250ZW50LCA2MDAsICgpID0+IHtcblx0XHRcdGlmIChsb2NhbFN0b3JhZ2VbJ1dpa2lwbHVzX1NldHRpbmdzJ10pIHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS52YWwobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKTtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbChKU09OLnN0cmluZ2lmeShzZXR0aW5ncywgbnVsbCwgMikpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvLyBpZ25vcmVcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS5hdHRyKCdwbGFjZWhvbGRlcicsIGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19wbGFjZWhvbGRlcicpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRhcHBseUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBzYXZlZEJhbm5lciA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJhbm5lcicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX3NhdmVkJykpO1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSAkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbCgpIGFzIHN0cmluZztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdG9uU3VibWl0KHtzZXR0aW5nc30pO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoJycpLmFwcGVuZChzYXZlZEJhbm5lcik7XG5cdFx0XHRcdGF3YWl0IHNsZWVwKDE1MDApO1xuXHRcdFx0XHR0aGlzLmhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Tm90aWZpY2F0aW9uLmVycm9yKGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19ncmFtbWFyX2Vycm9yJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNhbmNlbEJ0bi5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyk7XG5cdFx0fSk7XG5cdH1cblxuXHRoaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cgPSAkKCdib2R5JykpIHtcblx0XHRkaWFsb2cuZmluZCgnLldpa2lwbHVzLUludGVyQm94LUNsb3NlJykudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdGJpbmRQcmVsb2FkRXZlbnRzKG9uUHJlbG9hZDogeyhhcmcwOiB7c2VjdGlvbk51bWJlcjogbnVtYmVyfSk6IHZvaWR9KSB7XG5cdFx0JCgnI3RvYycpXG5cdFx0XHQuY2hpbGRyZW4oJ3VsJylcblx0XHRcdC5maW5kKCdhJylcblx0XHRcdC5lYWNoKChpKSA9PiB7XG5cdFx0XHRcdCQodGhpcykub24oJ21vdXNlb3ZlcicsICgpID0+IHtcblx0XHRcdFx0XHQkKHRoaXMpLm9mZignbW91c2VvdmVyJyk7XG5cdFx0XHRcdFx0b25QcmVsb2FkKHtcblx0XHRcdFx0XHRcdHNlY3Rpb25OdW1iZXI6IGkgKyAxLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVSSgpO1xuIiwgIi8qKlxuICogV2lraXBsdXNcbiAqIEVyaWRhbnVzIFNvcmEgPHNvcmFAc291bmQubW9lPlxuICovXG5pbXBvcnQgJy4vd2lraXBsdXMubGVzcyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCBMb2cgZnJvbSAnLi91dGlscy9sb2cnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL2NvcmUvbm90aWZpY2F0aW9uJztcbmltcG9ydCBQYWdlIGZyb20gJy4vY29yZS9wYWdlJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3V0aWxzL3NldHRpbmdzJztcbmltcG9ydCBVSSBmcm9tICcuL2NvcmUvdWknO1xuaW1wb3J0IFdpa2kgZnJvbSAnLi9zZXJ2aWNlcy93aWtpJztcbmltcG9ydCBpMThuIGZyb20gJy4vdXRpbHMvaTE4bic7XG5cbiQoYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBQYWdlczogUmVjb3JkPG51bWJlciwgUGFnZT4gPSB7fTtcblx0Y29uc3QgaXNDdXJyZW50UGFnZUVtcHR5ID0gJCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggPiAwICYmIENvbnN0YW50cy5hcnRpY2xlSWQgPT09IDA7XG5cblx0LyoqXG5cdCAqIEdldCBwYWdlIGluc3RhbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHBhcmFtc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnJldmlzaW9uSWQg6aG16Z2i5L+u6K6i54mI5pys5Y+3XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMudGl0bGUg6aG16Z2i5qCH6aKYXG5cdCAqL1xuXHRjb25zdCBnZXRQYWdlID0gYXN5bmMgKHtyZXZpc2lvbklkID0gMCwgdGl0bGV9OiB7cmV2aXNpb25JZD86IG51bWJlcjsgdGl0bGU6IHN0cmluZ30pID0+IHtcblx0XHRpZiAoUGFnZXNbcmV2aXNpb25JZF0pIHtcblx0XHRcdHJldHVybiBQYWdlc1tyZXZpc2lvbklkXTtcblx0XHR9XG5cdFx0Y29uc3QgbmV3UGFnZSA9IG5ldyBQYWdlKHtcblx0XHRcdHJldmlzaW9uSWQsXG5cdFx0XHR0aXRsZSxcblx0XHR9KTtcblx0XHRhd2FpdCBuZXdQYWdlLmluaXQoKTtcblx0XHRQYWdlc1tyZXZpc2lvbklkXSA9IG5ld1BhZ2U7XG5cdFx0cmV0dXJuIFBhZ2VzW3JldmlzaW9uSWRdO1xuXHR9O1xuXG5cdExvZy5pbmZvKGBXaWtpcGx1cyBub3cgbG9hZGluZy4gVmVyc2lvbjogJHtDb25zdGFudHMudmVyc2lvbn1gKTtcblxuXHRpZiAoIXdpbmRvdy5tdykge1xuXHRcdGNvbnNvbGUubG9nKCdNZWRpYXdpa2kgSmF2YVNjcmlwdCBub3QgbG9hZGVkIG9yIG5vdCBhIE1lZGlhd2lraSB3ZWJzaXRlLicpO1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoIUNvbnN0YW50cy51c2VyR3JvdXBzPy5pbmNsdWRlcygnYXV0b2NvbmZpcm1lZCcpICYmICFDb25zdGFudHMudXNlckdyb3Vwcz8uaW5jbHVkZXMoJ2NvbmZpcm1lZCcpKSB7XG5cdFx0Tm90aWZpY2F0aW9uLmVycm9yKGkxOG4udHJhbnNsYXRlKCdub3RfYXV0b2NvbmZpcm1lZF91c2VyJykpO1xuXHRcdExvZy5pbmZvKGkxOG4udHJhbnNsYXRlKCdub3RfYXV0b2NvbmZpcm1lZF91c2VyJykpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghQ29uc3RhbnRzLmlzQXJ0aWNsZSB8fCBDb25zdGFudHMuYWN0aW9uICE9PSAndmlldycpIHtcblx0XHRMb2cuaW5mbygnTm90IGFuIGVkaXRhYmxlIHBhZ2UuIFN0b3AgaW5pdGlhbGl6YXRpb24uJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gSW5pdGlhbGl6ZSBjdXJyZW50IHBhZ2Ug6buY6K6k5Yid5aeL5YyW5b2T5YmN6aG16Z2iXG5cdHdpbmRvdy5fV2lraXBsdXNQYWdlcyA9IFBhZ2VzO1xuXHRjb25zdCBjdXJyZW50UGFnZU5hbWUgPSBDb25zdGFudHMuY3VycmVudFBhZ2VOYW1lO1xuXHRjb25zdCByZXZpc2lvbklkID0gQ29uc3RhbnRzLnJldmlzaW9uSWQ7XG5cdGNvbnN0IGN1cnJlbnRQYWdlID0gYXdhaXQgZ2V0UGFnZSh7XG5cdFx0cmV2aXNpb25JZCxcblx0XHR0aXRsZTogY3VycmVudFBhZ2VOYW1lLFxuXHR9KTtcblxuXHRjb25zdCBoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkID0gYXN5bmMgKHtcblx0XHRzZWN0aW9uTnVtYmVyLFxuXHRcdHNlY3Rpb25OYW1lLFxuXHRcdHRhcmdldFBhZ2VOYW1lLFxuXHR9OiB7XG5cdFx0c2VjdGlvbk51bWJlcj86IHN0cmluZyB8IG51bWJlcjtcblx0XHRzZWN0aW9uTmFtZT86IHN0cmluZztcblx0XHR0YXJnZXRQYWdlTmFtZTogc3RyaW5nO1xuXHR9KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc3QgaXNPdGhlclBhZ2UgPSB0YXJnZXRQYWdlTmFtZSAhPT0gY3VycmVudFBhZ2VOYW1lO1xuXHRcdGlmIChpc090aGVyUGFnZSAmJiBDb25zdGFudHMubGF0ZXN0UmV2aXNpb25JZCAhPT0gQ29uc3RhbnRzLnJldmlzaW9uSWQpIHtcblx0XHRcdC8vIOWcqOWOhuWPsueJiOacrOe8lui+keWFtuS7lumhtemdouaciemXrumimCDmmoLml7bkuI3mlK/mjIFcblx0XHRcdExvZy5lcnJvcignY3Jvc3NfcGFnZV9oaXN0b3J5X3JldmlzaW9uX2VkaXRfd2FybmluZycpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZXZpc2lvbklkID0gaXNPdGhlclBhZ2UgPyBhd2FpdCBXaWtpLmdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlKHRhcmdldFBhZ2VOYW1lKSA6IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXG5cdFx0Y29uc3QgcGFnZSA9IGF3YWl0IGdldFBhZ2Uoe3JldmlzaW9uSWQsIHRpdGxlOiB0YXJnZXRQYWdlTmFtZX0pO1xuXHRcdGNvbnN0IGN1c3RvbVN1bW1hcnkgPSBTZXR0aW5ncy5nZXRTZXR0aW5nKCdkZWZhdWx0U3VtbWFyeScsIHtcblx0XHRcdHNlY3Rpb25OYW1lOiBzZWN0aW9uTmFtZSBhcyBzdHJpbmcsXG5cdFx0XHRzZWN0aW9uTnVtYmVyOiBzZWN0aW9uTnVtYmVyIGFzIG51bWJlcixcblx0XHRcdHNlY3Rpb25UYXJnZXROYW1lOiB0YXJnZXRQYWdlTmFtZSxcblx0XHR9KTtcblx0XHRjb25zdCBzdW1tYXJ5ID1cblx0XHRcdGN1c3RvbVN1bW1hcnkgfHxcblx0XHRcdChzZWN0aW9uTmFtZVxuXHRcdFx0XHQ/IGAvKiAke3NlY3Rpb25OYW1lfSAqLyAke2kxOG4udHJhbnNsYXRlKCdkZWZhdWx0X3N1bW1hcnlfc3VmZml4Jyl9YFxuXHRcdFx0XHQ6IGkxOG4udHJhbnNsYXRlKCdkZWZhdWx0X3N1bW1hcnlfc3VmZml4JykpO1xuXHRcdGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHROb3RpZmljYXRpb24uc3VjY2VzcyhpMThuLnRyYW5zbGF0ZSgnbG9hZGluZycpKTtcblx0XHR9LCAyMDApO1xuXHRcdGNvbnN0IHNlY3Rpb25Db250ZW50ID0gYXdhaXQgcGFnZS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyIGFzIG51bWJlcixcblx0XHR9KTtcblx0XHRjb25zdCBpc0VkaXRIaXN0b3J5UmV2aXNpb24gPSAhaXNPdGhlclBhZ2UgJiYgQ29uc3RhbnRzLmxhdGVzdFJldmlzaW9uSWQgIT09IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXHRcdGNvbnN0IGVzY1RvRXhpdCA9XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NfdG9fZXhpdF9xdWlja2VkaXQnKSA9PT0gdHJ1ZSB8fCAvLyDlhbzlrrnogIHorr7nva5rZXlcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY190b19leGl0X3F1aWNrZWRpdCcpID09PSAndHJ1ZScgfHxcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY1RvRXhpdFF1aWNrRWRpdCcpID09PSB0cnVlIHx8XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NUb0V4aXRRdWlja0VkaXQnKSA9PT0gJ3RydWUnO1xuXHRcdGNvbnN0IGN1c3RvbUVkaXRUYWdzID0gU2V0dGluZ3MuZ2V0U2V0dGluZygnY3VzdG9tX2VkaXRfdGFncycpO1xuXHRcdGNvbnN0IGRlZmF1bHRFZGl0VGFnczogc3RyaW5nW10gPSBbXTtcblx0XHRjb25zdCBlZGl0VGFncyA9IGN1c3RvbUVkaXRUYWdzPy5sZW5ndGggPyBjdXN0b21FZGl0VGFncyA6IGRlZmF1bHRFZGl0VGFncztcblx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHRcdE5vdGlmaWNhdGlvbi5lbXB0eSgpO1xuXG5cdFx0aWYgKGlzRWRpdEhpc3RvcnlSZXZpc2lvbikge1xuXHRcdFx0Tm90aWZpY2F0aW9uLndhcm5pbmcoaTE4bi50cmFuc2xhdGUoJ2hpc3RvcnlfZWRpdF93YXJuaW5nJykpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNob3VsZFNob3dDcmVhdGVQYWdlVGlwID0gaXNPdGhlclBhZ2UgPyAhcmV2aXNpb25JZCA6IGlzQ3VycmVudFBhZ2VFbXB0eTtcblxuXHRcdFVJLnNob3dRdWlja0VkaXRQYW5lbCh7XG5cdFx0XHR0aXRsZTogYCR7aTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF90b3BidG4nKX0ke1xuXHRcdFx0XHRpc0VkaXRIaXN0b3J5UmV2aXNpb24gPyBpMThuLnRyYW5zbGF0ZSgnaGlzdG9yeV9lZGl0X3dhcm5pbmcnKSA6ICcnXG5cdFx0XHR9YCxcblx0XHRcdGNvbnRlbnQ6IHNob3VsZFNob3dDcmVhdGVQYWdlVGlwID8gaTE4bi50cmFuc2xhdGUoJ2NyZWF0ZV9wYWdlX3RpcCcpIDogc2VjdGlvbkNvbnRlbnQsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdFx0b25CYWNrOiBVSS5oaWRlUXVpY2tFZGl0UGFuZWwsXG5cdFx0XHRvblBhcnNlOiAod2lraVRleHQpID0+IHtcblx0XHRcdFx0cmV0dXJuIHBhZ2UucGFyc2VXaWtpVGV4dCh3aWtpVGV4dCk7XG5cdFx0XHR9LFxuXHRcdFx0b25FZGl0OiBhc3luYyAoe2NvbnRlbnQsIHN1bW1hcnksIGlzTWlub3JFZGl0fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBlZGl0UGF5bG9hZDogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0XHRcdFx0Y29udGVudCxcblx0XHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHQuLi4oc2VjdGlvbk51bWJlciA9PT0gLTEgPyB7fSA6IHtzZWN0aW9uOiBzZWN0aW9uTnVtYmVyfSksXG5cdFx0XHRcdFx0XHQuLi4oZWRpdFRhZ3MubGVuZ3RoID8ge3RhZ3M6IGVkaXRUYWdzLmpvaW4oJ3wnKX0gOiB7fSksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKGlzTWlub3JFZGl0KSB7XG5cdFx0XHRcdFx0ZWRpdFBheWxvYWQuY29uZmlnLm1pbm9yID0gJ3RydWUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVkaXRQYXlsb2FkLmNvbmZpZy5ub3RtaW5vciA9ICd0cnVlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBwYWdlLmVkaXQoZWRpdFBheWxvYWQpO1xuXHRcdFx0fSxcblx0XHRcdGVzY0V4aXQ6IGVzY1RvRXhpdCxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQgPSAoKSA9PiB7XG5cdFx0VUkuc2hvd1NpbXBsZVJlZGlyZWN0UGFuZWwoe1xuXHRcdFx0b25FZGl0OiBhc3luYyAoe3RpdGxlLCBzdW1tYXJ5LCBmb3JjZU92ZXJ3cml0ZSA9IGZhbHNlfSkgPT4ge1xuXHRcdFx0XHRjb25zdCBwYWdlID0gYXdhaXQgZ2V0UGFnZSh7dGl0bGV9KTtcblx0XHRcdFx0Y29uc3QgY3VycmVudFBhZ2VOYW1lID0gQ29uc3RhbnRzLmN1cnJlbnRQYWdlTmFtZTtcblx0XHRcdFx0Y29uc3QgY29udGVudG1vZGVsID0gcGFnZS5jb250ZW50bW9kZWw7XG5cdFx0XHRcdGlmIChzdW1tYXJ5ID09PSAnJykge1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3RfZnJvbV9zdW1tYXJ5JywgW3RpdGxlLCBjdXJyZW50UGFnZU5hbWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBjb250ZW50ID0gKCgpID0+IHtcblx0XHRcdFx0XHRsZXQgY29udGVudDtcblx0XHRcdFx0XHRzd2l0Y2ggKGNvbnRlbnRtb2RlbCkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnamF2YXNjcmlwdCc6XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSBgLyogI1JFRElSRUNUICovbXcubG9hZGVyLmxvYWQoXCIke2xvY2F0aW9uLnByb3RvY29sfS8vJHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhdGlvbi5ob3N0XG5cdFx0XHRcdFx0XHRcdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9pbmRleC5waHA/dGl0bGU9JHttdy51dGlsLndpa2lVcmxlbmNvZGUoXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VOYW1lXG5cdFx0XHRcdFx0XHRcdCl9JmFjdGlvbj1yYXcmY3R5cGU9dGV4dC9qYXZhc2NyaXB0XCIpO2A7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnY3NzJzpcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IGAvKiAjUkVESVJFQ1QgKi9AaW1wb3J0IHVybCgke2xvY2F0aW9uLnByb3RvY29sfS8vJHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhdGlvbi5ob3N0XG5cdFx0XHRcdFx0XHRcdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9pbmRleC5waHA/dGl0bGU9JHttdy51dGlsLndpa2lVcmxlbmNvZGUoXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VOYW1lXG5cdFx0XHRcdFx0XHRcdCl9JmFjdGlvbj1yYXcmY3R5cGU9dGV4dC9jc3MpO2A7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnU2NyaWJ1bnRvJzpcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IGByZXR1cm4gcmVxdWlyZSBbWyR7Y3VycmVudFBhZ2VOYW1lfV1dYDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICd3aWtpdGV4dCc6XG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYCNSRURJUkVDVCBbWyR7Y3VycmVudFBhZ2VOYW1lfV1dYDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0XHR9KSgpO1xuXHRcdFx0XHRjb25zdCBwYXlsb2FkOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0XHRjb250ZW50LFxuXHRcdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAoIWZvcmNlT3ZlcndyaXRlKSB7XG5cdFx0XHRcdFx0cGF5bG9hZC5jb25maWcuY3JlYXRlb25seSA9ICd0cnVlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBwYWdlLmVkaXQocGF5bG9hZCk7XG5cdFx0XHR9LFxuXHRcdFx0b25TdWNjZXNzOiAoe3RpdGxlfSkgPT4ge1xuXHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gQ29uc3RhbnRzLmFydGljbGVQYXRoLnJlcGxhY2UoL1xcJDEvZ2ksIHRpdGxlKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkID0gKCkgPT4ge1xuXHRcdFVJLnNob3dTZXR0aW5nc1BhbmVsKHtcblx0XHRcdG9uU3VibWl0OiAoe3NldHRpbmdzfSkgPT4ge1xuXHRcdFx0XHRKU09OLnBhcnNlKHNldHRpbmdzKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1dpa2lwbHVzX1NldHRpbmdzJywgc2V0dGluZ3MpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVQcmVsb2FkID0gYXN5bmMgKHtzZWN0aW9uTnVtYmVyfToge3NlY3Rpb25OdW1iZXI6IG51bWJlcn0pID0+IHtcblx0XHRhd2FpdCBjdXJyZW50UGFnZS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdH0pO1xuXHR9O1xuXG5cdFVJLmluc2VydFRvcFF1aWNrRWRpdEVudHJ5KGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyhoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0TGlua0VkaXRFbnRyaWVzKGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbihoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uKGhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmJpbmRQcmVsb2FkRXZlbnRzKGhhbmRsZVByZWxvYWQpO1xufSk7XG5cbmV4cG9ydCB7fTtcbiIsICJpbXBvcnQgJy4vV2lraXBsdXMubGVzcyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Jlc2l6ZVdpa2lwbHVzfSBmcm9tICcuL3Jlc2l6ZSc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oYXN5bmMgZnVuY3Rpb24gV2lraXBsdXMoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dJc0FydGljbGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dJc0FydGljbGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7J3Zpc3VhbGVkaXRvci1lbmFibGUnOiBpc1ZlRW5hYmxlfSA9IG13LnVzZXIub3B0aW9ucy5nZXQoKSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcblxuXHQvKiBzZWUgPGh0dHBzOi8vZ2l0aHViLmNvbS9XaWtpcGx1cy9XaWtpcGx1cy9pc3N1ZXMvNjU+ICovXG5cdGlmIChpc1ZlRW5hYmxlKSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQudmlzdWFsRWRpdG9yLmNvcmUnKTtcblx0fVxuXG5cdC8vIGltcG9ydCBtYWluIGZ1bmN0aW9uXG5cdGF3YWl0IGltcG9ydCgnLi9tb2R1bGVzL2luZGV4Jyk7XG5cblx0Ly8gcmVzaXplIFdpa2lwbHVzIHdpbmRvd1xuXHRyZXNpemVXaWtpcGx1cygkYm9keSk7XG59KTtcbiIsICJjb25zdCByZXNpemVXaWtpcGx1cyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblx0XHRjb25zdCAkd2lraXBsdXNJbnRlcmJveCA9ICRib2R5LmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveCcpO1xuXHRcdGlmICgkd2lraXBsdXNJbnRlcmJveCkge1xuXHRcdFx0Y29uc3QgY2xpZW50V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRcdGNvbnN0IGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHRcdGNvbnN0IGRpYWxvZ1dpZHRoID0gTWF0aC5taW4oY2xpZW50V2lkdGgsIDYwMCk7XG5cdFx0XHRjb25zdCBzY3JvbGxUb3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSB8fCAwO1xuXHRcdFx0JHdpa2lwbHVzSW50ZXJib3guY3NzKCdtYXJnaW4tbGVmdCcsIGNsaWVudFdpZHRoIC8gMiAtIGRpYWxvZ1dpZHRoIC8gMik7XG5cdFx0XHQkd2lraXBsdXNJbnRlcmJveC5jc3MoJ3RvcCcsIHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCAqIDAuMik7XG5cdFx0XHQkd2lraXBsdXNJbnRlcmJveC5jc3MoJ21heC13aWR0aCcsIGBjYWxjKCR7d2luZG93V2lkdGh9cHggLSAyZW0pYCk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cmVzaXplV2lraXBsdXN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUF1QjtJQUM5QztBQUdBLFVBQU1KLFFBQUFvQyxRQUFBLEVBQUE4SyxLQUFBLE9BQUFwRCxhQUFBLEdBQUFELGdCQUFBO0FBR05nRCxtQkFBZUMsS0FBSztFQUNyQixDQUFDO0FBQUEsV0FsQmtDVSxTQUFBQyxLQUFBO0FBQUEsV0FBQU4sVUFBQWpQLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQXFQO0FBQUEsR0FBQSxDQWtCbEM7IiwKICAibmFtZXMiOiBbImluaXRfd2lraXBsdXMiLCAiX19lc20iLCAiQ29uc3RhbnRzIiwgImNvbnN0YW50c19kZWZhdWx0IiwgImluaXRfY29uc3RhbnRzIiwgInZlcnNpb24iLCAiaXNBcnRpY2xlIiwgIndpbmRvdyIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImN1cnJlbnRQYWdlTmFtZSIsICJyZXBsYWNlIiwgImFydGljbGVJZCIsICJyZXZpc2lvbklkIiwgImxhdGVzdFJldmlzaW9uSWQiLCAiYXJ0aWNsZVBhdGgiLCAic2NyaXB0UGF0aCIsICJhY3Rpb24iLCAic2tpbiIsICJ1c2VyR3JvdXBzIiwgIndpa2lJZCIsICJ1c2VyQWdlbnQiLCAiY29uY2F0IiwgIkkxOG4iLCAiaTE4bl9kZWZhdWx0IiwgImluaXRfaTE4biIsICJsYW5ndWFnZSIsICJpMThuRGF0YSIsICJzZXNzaW9uVXBkYXRlTG9nIiwgImNvbnN0cnVjdG9yIiwgIkpTT04iLCAicGFyc2UiLCAibG9jYWxTdG9yYWdlIiwgIm5hdmlnYXRvciIsICJ0b0xvd2VyQ2FzZSIsICJpMThuQ2FjaGUiLCAiZ2V0SXRlbSIsICJfaSIsICJfT2JqZWN0JGtleXMiLCAiT2JqZWN0IiwgImtleXMiLCAibGVuZ3RoIiwgImtleSIsICJzZXRJdGVtIiwgInRyYW5zbGF0ZSIsICJwbGFjZWhvbGRlcnMiLCAicmVzdWx0IiwgImkxOG5EYXRhTGFuZyIsICJsb2FkTGFuZ3VhZ2UiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImVudHJpZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiaW5kZXgiLCAicGxhY2Vob2xkZXIiLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJfdGhpcyIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJpbmNsdWRlcyIsICJyZXNwb25zZSIsICJmZXRjaCIsICJqc29uIiwgIm5vd1ZlcnNpb24iLCAicHVzaCIsICJfX3ZlcnNpb24iLCAiY29uc29sZSIsICJpbmZvIiwgInN0cmluZ2lmeSIsICJXaWtpcGx1c0Vycm9yIiwgIkxvZyIsICJsb2dfZGVmYXVsdCIsICJpbml0X2xvZyIsICJFcnJvciIsICJjb2RlIiwgIm1lc3NhZ2UiLCAiZGVidWciLCAiZXJyb3IiLCAiZXJyb3JDb2RlIiwgInBheWxvYWRzIiwgInRlbXBsYXRlIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImkiLCAidiIsICJSZWdFeHAiLCAiTm90aWZpY2F0aW9uIiwgIm5vdGlmaWNhdGlvbl9kZWZhdWx0IiwgImluaXRfbm90aWZpY2F0aW9uIiwgImluaXQiLCAiJCIsICJhcHBlbmQiLCAiZGlzcGxheSIsICJ0ZXh0IiwgInR5cGUiLCAiY2FsbGJhY2siLCAiYWRkQ2xhc3MiLCAiZmluZCIsICJsYXN0IiwgImZhZGVJbiIsICJiaW5kIiwgImNsZWFyIiwgInNlbGYiLCAib24iLCAic2xpZGVMZWZ0IiwgInN1Y2Nlc3MiLCAid2FybmluZyIsICJjaGlsZHJlbiIsICJmaXJzdCIsICJmYWRlT3V0IiwgInJlbW92ZSIsICJzZXRUaW1lb3V0IiwgImVtcHR5IiwgImVhY2giLCAiZWxlIiwgImRlbGF5IiwgInNwZWVkIiwgImNzcyIsICJhbmltYXRlIiwgImxlZnQiLCAiUmVxdWVzdHMiLCAicmVxdWVzdHNfZGVmYXVsdCIsICJpbml0X3JlcXVlc3RzIiwgImJhc2UiLCAibG9jYXRpb24iLCAicHJvdG9jb2wiLCAiaG9zdCIsICJxdWVyeSIsICJ1cmwiLCAiVVJMIiwgIl9pMiIsICJfT2JqZWN0JGtleXMyIiwgInNlYXJjaFBhcmFtcyIsICJjcmVkZW50aWFscyIsICJoZWFkZXJzIiwgInBvc3QiLCAicGF5bG9hZCIsICJmb3JtIiwgIkZvcm1EYXRhIiwgIl9pMyIsICJfT2JqZWN0JGVudHJpZXMiLCAibWV0aG9kIiwgImJvZHkiLCAiV2lraSIsICJ3aWtpX2RlZmF1bHQiLCAiaW5pdF93aWtpIiwgInBhZ2VJbmZvQ2FjaGUiLCAiZ2V0RWRpdFRva2VuIiwgIm1ldGEiLCAiZm9ybWF0IiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAiZ2V0UGFnZUluZm8iLCAiX3giLCAiX3RoaXMyIiwgInRpdGxlIiwgInBhcmFtcyIsICJwcm9wIiwgInJ2cHJvcCIsICJyZXZpZHMiLCAidGltZXN0YW1wIiwgInJldmlkIiwgImNvbnRlbnRtb2RlbCIsICJ0aXRsZXMiLCAicGFnZXMiLCAicGFnZUtleSIsICJwYWdlSW5mbyIsICJyZXZpc2lvbnMiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldFdpa2lUZXh0IiwgIl94MiIsICJzZWN0aW9uIiwgInJ2c2VjdGlvbiIsICJwYXJzZVdpa2lUZXh0IiwgIl94MyIsICJ3aWtpdGV4dCIsICJfY29uZmlnIiwgInBzdCIsICJlZGl0IiwgIl94NCIsICJjb250ZW50IiwgImVkaXRUb2tlbiIsICJhZGRpdGlvbmFsQ29uZmlnIiwgInRva2VuIiwgImJhc2V0aW1lc3RhbXAiLCAiZ2V0TGF0ZXN0UmV2aXNpb25JZEZvclBhZ2UiLCAiX3RoaXMzIiwgIlBhZ2UiLCAicGFnZV9kZWZhdWx0IiwgImluaXRfcGFnZSIsICJpbml0ZWQiLCAiaXNOZXdQYWdlIiwgInNlY3Rpb25DYWNoZSIsICJfdGhpczQiLCAicHJvbWlzZUFyciIsICJnZXRUaW1lc3RhbXAiLCAiZ2V0Q29udGVudE1vZGVsIiwgIlByb21pc2UiLCAiYWxsIiwgIl90aGlzNSIsICJsb2FkZXIiLCAidXNpbmciLCAidXNlciIsICJfdGhpczYiLCAiX3RoaXM3IiwgIl90aGlzOCIsICJzZWMiLCAid2lraVRleHQiLCAiX3RoaXM5IiwgIl90aGlzMCIsICJjcmVhdGVvbmx5IiwgIlNldHRpbmdzIiwgInNldHRpbmdzX2RlZmF1bHQiLCAiaW5pdF9zZXR0aW5ncyIsICJnZXRTZXR0aW5nIiwgIm9iamVjdCIsICJ3IiwgInNldHRpbmdzIiwgImN1c3RvbVNldHRpbmdGdW5jdGlvbiIsICJGdW5jdGlvbiIsICJfaTQiLCAiX09iamVjdCRrZXlzMyIsICJrZXkyIiwgInBhcnNlUXVlcnkiLCAicmVnIiwgIm1hdGNoIiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImluaXRfaGVscGVycyIsICJzbGVlcCIsICJzbGVlcF9kZWZhdWx0IiwgImluaXRfc2xlZXAiLCAidGltZSIsICJyZXNvbHZlIiwgIlVJIiwgInVpX2RlZmF1bHQiLCAiaW5pdF91aSIsICJxdWlja0VkaXRQYW5lbFZpc2libGUiLCAic2Nyb2xsVG9wIiwgImNyZWF0ZURpYWxvZ0JveCIsICJ3aWR0aCIsICJjbGllbnRXaWR0aCIsICJpbm5lcldpZHRoIiwgImNsaWVudEhlaWdodCIsICJpbm5lckhlaWdodCIsICJkaWFsb2dXaWR0aCIsICJNYXRoIiwgIm1pbiIsICJkaWFsb2dCb3giLCAidG9wIiwgImRvY3VtZW50IiwgImh0bWwiLCAicGFyZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAib25iZWZvcmV1bmxvYWQiLCAiYmluZERyYWdnaW5nIiwgImVsZW1lbnQiLCAibW91c2Vkb3duIiwgIl9lbGVtZW50JHBhcmVudCRvZmZzZSIsICJfZWxlbWVudCRwYXJlbnQkb2Zmc2UyIiwgImJhc2VYIiwgImNsaWVudFgiLCAiYmFzZVkiLCAiY2xpZW50WSIsICJiYXNlT2Zmc2V0WCIsICJvZmZzZXQiLCAiYmFzZU9mZnNldFkiLCAiZTIiLCAidW5iaW5kIiwgIm9mZiIsICJhZGRGdW5jdGlvbkJ1dHRvbiIsICJpZCIsICJidXR0b24iLCAiYXR0ciIsICJpbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbiIsICJvbkNsaWNrIiwgImluc2VydFNldHRpbmdzUGFuZWxCdXR0b24iLCAiaW5zZXJ0VG9wUXVpY2tFZGl0RW50cnkiLCAidG9wQnRuIiwgInRvcEJ0bkxpbmsiLCAic2VjdGlvbk51bWJlciIsICJ0YXJnZXRQYWdlTmFtZSIsICJhZnRlciIsICJpbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyIsICJzZWN0aW9uQnRuIiwgImVkaXRVUkwiLCAic2VjdGlvbkxhYmVsIiwgInNlY3Rpb25UYXJnZXRMYWJlbCIsICJzZWN0aW9uVGFyZ2V0TmFtZSIsICJjbG9uZU5vZGUiLCAicHJldiIsICJjbG9uZSIsICJzZWN0aW9uTmFtZSIsICJ0cmltIiwgIl9zZWN0aW9uQnRuIiwgImJlZm9yZSIsICJpbnNlcnRMaW5rRWRpdEVudHJpZXMiLCAiaHJlZiIsICJjbGFzcyIsICJfcGFyYW1zJHNlY3Rpb24iLCAic2hvd1F1aWNrRWRpdFBhbmVsIiwgInN1bW1hcnkiLCAib25CYWNrIiwgIm9uUGFyc2UiLCAib25FZGl0IiwgImVzY0V4aXQiLCAiaGlkZVF1aWNrRWRpdFBhbmVsIiwgImJhY2tCdG4iLCAianVtcEJ0biIsICJpbnB1dEJveCIsICJwcmV2aWV3Qm94IiwgInN1bW1hcnlCb3giLCAiZWRpdFN1Ym1pdEJ0biIsICJwcmV2aWV3U3VibWl0QnRuIiwgImlzTWlub3JFZGl0IiwgIm1hcmdpbiIsICJlZGl0Qm9keSIsICJ2YWwiLCAicHJlbG9hZEJhbm5lciIsICJ0aW1lciIsICJEYXRlIiwgIm5vdyIsICJlZGl0QmFubmVyIiwgImlzIiwgInVzZVRpbWUiLCAidG9TdHJpbmciLCAicmVsb2FkIiwgImxvZyIsICJjdHJsS2V5IiwgIndoaWNoIiwgInNoaWZ0S2V5IiwgInRyaWdnZXIiLCAicHJldmVudERlZmF1bHQiLCAic3RvcFByb3BhZ2F0aW9uIiwgInNob3dTaW1wbGVSZWRpcmVjdFBhbmVsIiwgIm9uU3VjY2VzcyIsICJfdGhpczEiLCAiaW5wdXQiLCAic3VtbWFyeUlucHV0VGl0bGUiLCAic3VtbWFyeUlucHV0IiwgImFwcGx5QnRuIiwgImNhbmNlbEJ0biIsICJjb250aW51ZUJ0biIsICJkaWFsb2ciLCAiZm9yY2VPdmVyd3JpdGUiLCAiaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwiLCAiZXJyb3IyIiwgInNob3dTZXR0aW5nc1BhbmVsIiwgIm9uU3VibWl0IiwgIl90aGlzMTAiLCAic2F2ZWRCYW5uZXIiLCAiaGlkZVNldHRpbmdzUGFuZWwiLCAiYmluZFByZWxvYWRFdmVudHMiLCAib25QcmVsb2FkIiwgIm1vZHVsZXNfZXhwb3J0cyIsICJpbml0X21vZHVsZXMiLCAiX2NvbnN0YW50c19kZWZhdWx0JHVzIiwgIl9jb25zdGFudHNfZGVmYXVsdCR1czIiLCAiUGFnZXMiLCAiaXNDdXJyZW50UGFnZUVtcHR5IiwgImdldFBhZ2UiLCAiX3JlZjAiLCAicmV2aXNpb25JZDIiLCAibmV3UGFnZSIsICJfeDUiLCAiX1dpa2lwbHVzUGFnZXMiLCAiY3VycmVudFBhZ2UiLCAiaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCIsICJfcmVmMSIsICJpc090aGVyUGFnZSIsICJwYWdlIiwgImN1c3RvbVN1bW1hcnkiLCAic2VjdGlvbkNvbnRlbnQiLCAiaXNFZGl0SGlzdG9yeVJldmlzaW9uIiwgImVzY1RvRXhpdCIsICJjdXN0b21FZGl0VGFncyIsICJkZWZhdWx0RWRpdFRhZ3MiLCAiZWRpdFRhZ3MiLCAiY2xlYXJUaW1lb3V0IiwgInNob3VsZFNob3dDcmVhdGVQYWdlVGlwIiwgIl9yZWYxMCIsICJzdW1tYXJ5MiIsICJlZGl0UGF5bG9hZCIsICJ0YWdzIiwgImpvaW4iLCAibWlub3IiLCAibm90bWlub3IiLCAiX3g3IiwgIl94NiIsICJoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQiLCAiX3JlZjExIiwgImN1cnJlbnRQYWdlTmFtZTIiLCAiY29udGVudDIiLCAidXRpbCIsICJ3aWtpVXJsZW5jb2RlIiwgIl94OCIsICJoYW5kbGVTZXR0aW5nc0J1dHRvbkNsaWNrZWQiLCAiaGFuZGxlUHJlbG9hZCIsICJfcmVmMTIiLCAiX3g5IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAicmVzaXplV2lraXBsdXMiLCAiJGJvZHkiLCAid2luZG93V2lkdGgiLCAiJHdpa2lwbHVzSW50ZXJib3giLCAiZ2V0Qm9keSIsICJ0aGVuIiwgIl9XaWtpcGx1cyIsICJ3Z0FjdGlvbiIsICJ3Z0lzQXJ0aWNsZSIsICJpc1ZlRW5hYmxlIiwgIm9wdGlvbnMiLCAiV2lraXBsdXMiLCAiX3gwIl0KfQo=
