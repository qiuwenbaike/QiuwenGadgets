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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzL21vZHVsZXMvd2lraXBsdXMubGVzcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9jb25zdGFudHMudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvaTE4bi50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9sb2cudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS9ub3RpZmljYXRpb24udHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvcmVxdWVzdHMudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvc2VydmljZXMvd2lraS50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL3BhZ2UudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvc2V0dGluZ3MudHMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvaGVscGVycy50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9zbGVlcC50cyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL3VpLnRzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2luZGV4LnRzIiwgInNyYy9XaWtpcGx1cy9XaWtpcGx1cy50cyIsICJzcmMvV2lraXBsdXMvcmVzaXplLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiEgV2lraXBsdXMgLSA0LjAuMTEgfCBFcmlkYW51cyBTb3JhICjlprnnqbrphbEpIHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG4jV2lraXBsdXMtUXVpY2tlZGl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4jV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQge1xuICB3aWR0aDogNTAlO1xufVxuLnNraW4tdmVjdG9yICNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQsXG4jV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogcmV2ZXJ0O1xufVxuI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDVweCAwO1xufVxuLldpa2lwbHVzLUJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogM3B4IDVweDtcbiAgcGFkZGluZzogM3B4IDFlbTtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjYWFhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1CdG4gYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMwMDA7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICB6LWluZGV4OiAyMDA7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjEsIDE1NCwgMjIwLCAwLjQxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjlmNztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgdG9wOiAtOHB4O1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZjZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBjdXJzb3I6IG1vdmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtSW5wdXQge1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiA2MCU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogYXV0byAzcHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1CdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xufVxuLldpa2lwbHVzLUludGVyQm94LUNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDNweCA3cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggbGFiZWwge1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiB7XG4gIHRhYmxlLWxheW91dDogYXV0bztcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWFkZGVkbGluZSxcbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWRlbGV0ZWRsaW5lLFxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtbGluZW5vIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLW1hcmtlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uV2lraXBsdXMtQmFubmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxOTMsIDIyMiwgMjE0LCAwLjUxKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtc2Fucywgc2Fucy1zZXJpZik7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAzcHggNXB4O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAjYWFhO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDNweCBhdXRvIDNweCAzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtc2Fucywgc2Fucy1zZXJpZik7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS1zdWNjZXNzIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOGRkYTkzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGEwMDtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXdhcm5pbmcge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmRmMDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiZDAwO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS1lcnJvciB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2U3MTcxNztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMDBlMDY7XG59XG4jTW9lTm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDcxMztcbiAgbWluLXdpZHRoOiAyMCU7XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuY2xhc3MgQ29uc3RhbnRzIHtcblx0dmVyc2lvbiA9ICc0LjEuMCc7XG5cdGdldCBpc0FydGljbGUoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0lzQXJ0aWNsZScpO1xuXHR9XG5cdGdldCBjdXJyZW50UGFnZU5hbWUoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvIC9nLCAnXycpO1xuXHR9XG5cdGdldCBhcnRpY2xlSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpO1xuXHR9XG5cdGdldCByZXZpc2lvbklkKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyk7XG5cdH1cblx0Z2V0IGxhdGVzdFJldmlzaW9uSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0N1clJldmlzaW9uSWQnKTtcblx0fVxuXHRnZXQgYXJ0aWNsZVBhdGgoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FydGljbGVQYXRoJyk7XG5cdH1cblx0Z2V0IHNjcmlwdFBhdGgoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1NjcmlwdFBhdGgnKTtcblx0fVxuXHRnZXQgYWN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcblx0fVxuXHRnZXQgc2tpbigpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3NraW4nKTtcblx0fVxuXHRnZXQgdXNlckdyb3VwcygpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpO1xuXHR9XG5cdGdldCB3aWtpSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuXHR9XG5cdHVzZXJBZ2VudCA9IGBRaXV3ZW4vMS4xIFdpa2lwbHVzLyR7dGhpcy52ZXJzaW9ufSAoJHt0aGlzLndpa2lJZH0pYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnN0YW50cygpO1xuIiwgImNsYXNzIEkxOG4ge1xuXHRsYW5ndWFnZTogc3RyaW5nO1xuXHRpMThuRGF0YTogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7fTtcblx0c2Vzc2lvblVwZGF0ZUxvZzogc3RyaW5nW10gPSBbXTtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGxhbmd1YWdlO1xuXHRcdHRyeSB7XG5cdFx0XHRsYW5ndWFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKVsnbGFuZ3VhZ2UnXSB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb3dlckNhc2UoKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdGxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlXG5cdFx0XHRcdC5yZXBsYWNlKC9oYW5bc3RdLT8vaSwgJycpIC8vIGZvciBsYW5ndWFnZXMgbGlrZSB6aC1IYW5zLUNOXG5cdFx0XHRcdC50b0xvd2VyQ2FzZSgpO1xuXHRcdH1cblx0XHR0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG5cdFx0Ly8gTWVyZ2Ugd2l0aCBsb2NhbFN0b3JhZ2UgaTE4biBjYWNoZVxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBpMThuQ2FjaGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdXaWtpcGx1c19pMThuQ2FjaGUnKSBhcyBzdHJpbmcpO1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoaTE4bkNhY2hlKSkge1xuXHRcdFx0XHR0aGlzLmkxOG5EYXRhW2tleV0gPSBpMThuQ2FjaGVba2V5XTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8vIEZhaWwgdG8gcGFyc2UgaTE4biBjYWNoZSwgcmVzZXRcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19pMThuQ2FjaGUnLCAne30nKTtcblx0XHR9XG5cdH1cblx0dHJhbnNsYXRlKGtleTogc3RyaW5nLCBwbGFjZWhvbGRlcnM/OiBzdHJpbmdbXSkge1xuXHRcdGxldCByZXN1bHQgPSAnJztcblx0XHRwbGFjZWhvbGRlcnMgfHw9IFtdO1xuXHRcdGlmICh0aGlzLmxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpIHtcblx0XHRcdGNvbnN0IGkxOG5EYXRhTGFuZyA9IHRoaXMuaTE4bkRhdGFbdGhpcy5sYW5ndWFnZV07XG5cdFx0XHRpZiAoaTE4bkRhdGFMYW5nICYmIGtleSBpbiBpMThuRGF0YUxhbmcpIHtcblx0XHRcdFx0cmVzdWx0ID0gaTE4bkRhdGFMYW5nW2tleV0gYXMgc3RyaW5nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gdHJ5IHVwZGF0ZSBsYW5ndWFnZSB2ZXJpc29uXG5cdFx0XHRcdHRoaXMubG9hZExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpO1xuXHRcdFx0XHRpZiAodGhpcy5pMThuRGF0YVsnZW4tdXMnXSAmJiBrZXkgaW4gdGhpcy5pMThuRGF0YVsnZW4tdXMnXSkge1xuXHRcdFx0XHRcdC8vIEZhbGxiYWNrIHRvIEVuZ2xpc2hcblx0XHRcdFx0XHRyZXN1bHQgPSB0aGlzLmkxOG5EYXRhWydlbi11cyddW2tleV0gYXMgc3RyaW5nO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc3VsdCA9IGtleTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxvYWRMYW5ndWFnZSh0aGlzLmxhbmd1YWdlKTtcblx0XHR9XG5cblx0XHRpZiAocGxhY2Vob2xkZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAoY29uc3QgW2luZGV4LCBwbGFjZWhvbGRlcl0gb2YgcGxhY2Vob2xkZXJzLmVudHJpZXMoKSkge1xuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShgJCR7aW5kZXggKyAxfWAsIHBsYWNlaG9sZGVyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRhc3luYyBsb2FkTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZykge1xuXHRcdGlmICh0aGlzLnNlc3Npb25VcGRhdGVMb2cuaW5jbHVkZXMobGFuZ3VhZ2UpKSB7XG5cdFx0XHQvLyBIYXMgYmVlbiB1cGRhdGVkIHRoaXMgc2Vzc2lvbi5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKFxuXHRcdFx0XHRhd2FpdCBmZXRjaChcblx0XHRcdFx0XHRgaHR0cHM6Ly9naXRjZG4ucWl1d2VuLm5ldC5jbi9JbnRlcmZhY2VBZG1pbi9XaWtpcGx1cy9yYXcvYnJhbmNoL2Rldi9sYW5ndWFnZXMvJHtsYW5ndWFnZX0uanNvbmBcblx0XHRcdFx0KVxuXHRcdFx0KS5qc29uKCk7XG5cdFx0XHRjb25zdCBub3dWZXJzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1dpa2lwbHVzX0xhbmd1YWdlVmVyc2lvbicpIHx8ICcwMDAnO1xuXHRcdFx0dGhpcy5zZXNzaW9uVXBkYXRlTG9nLnB1c2gobGFuZ3VhZ2UpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLl9fdmVyc2lvbiAhPT0gbm93VmVyc2lvbiB8fCAhKGxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpKSB7XG5cdFx0XHRcdC8vIExhbmd1YWdlIGdldCB1cGRhdGVkXG5cdFx0XHRcdGNvbnNvbGUuaW5mbyhgVXBkYXRlICR7bGFuZ3VhZ2V9IHN1cHBvcnQgdG8gdmVyc2lvbiAke3Jlc3BvbnNlLl9fdmVyc2lvbn1gKTtcblx0XHRcdFx0dGhpcy5pMThuRGF0YVtsYW5ndWFnZV0gPSByZXNwb25zZTtcblx0XHRcdFx0Ly8gVXBkYXRlIGxvY2FsU3RvcmFnZSBjYWNoZVxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5pMThuRGF0YSkpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0Ly8gVW5zdXBwb3J0ZWQgbGFuZ3VhZ2Vcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEkxOG4oKTtcbiIsICJpbXBvcnQgaTE4biBmcm9tICcuL2kxOG4nO1xuXG5jbGFzcyBXaWtpcGx1c0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRjb2RlOiBzdHJpbmcgfCBudWxsO1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IHN0cmluZykge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMuY29kZSA9IGNvZGU7XG5cdH1cbn1cblxuY29uc3QgTG9nID0ge1xuXHRkZWJ1ZyhtZXNzYWdlID0gJycpIHtcblx0XHRjb25zb2xlLmRlYnVnKGBbV2lraXBsdXMtREVCVUddICR7bWVzc2FnZX1gKTtcblx0fSxcblx0aW5mbyhtZXNzYWdlID0gJycpIHtcblx0XHRjb25zb2xlLmluZm8oYFtXaWtpcGx1cy1JTkZPXSAke21lc3NhZ2V9YCk7XG5cdH0sXG5cdGVycm9yKGVycm9yQ29kZTogc3RyaW5nLCBwYXlsb2Fkczogc3RyaW5nW10gPSBbXSkge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IGkxOG4udHJhbnNsYXRlKGVycm9yQ29kZSk7XG5cdFx0aWYgKHBheWxvYWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdC8vIEZpbGxcblx0XHRcdGZvciAoY29uc3QgW2ksIHZdIG9mIHBheWxvYWRzLmVudHJpZXMoKSkge1xuXHRcdFx0XHR0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXCR7aSArIDF9YCwgJ2lnJyksIHYpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zb2xlLmVycm9yKGBbV2lraXBsdXMtRVJST1JdICR7dGVtcGxhdGV9YCk7XG5cdFx0dGhyb3cgbmV3IFdpa2lwbHVzRXJyb3IoYCR7dGVtcGxhdGV9YCwgZXJyb3JDb2RlKTtcblx0fSxcbn07XG5cbmV4cG9ydCB7V2lraXBsdXNFcnJvcn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZztcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5jbGFzcyBOb3RpZmljYXRpb24ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXHRpbml0KCkge1xuXHRcdCQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgaWQ9XCJNb2VOb3RpZmljYXRpb25cIj48L2Rpdj4nKTtcblx0fVxuXHRkaXNwbGF5KHRleHQgPSAn5Za1ficsIHR5cGUgPSAnc3VjY2VzcycsIGNhbGxiYWNrOiAoZWxlPzogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4gdm9pZCA9ICgpID0+IHt9KTogdm9pZCB7XG5cdFx0JCgnI01vZU5vdGlmaWNhdGlvbicpLmFwcGVuZChcblx0XHRcdCQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdNb2VOb3RpZmljYXRpb24tbm90aWNlJylcblx0XHRcdFx0LmFkZENsYXNzKGBNb2VOb3RpZmljYXRpb24tbm90aWNlLSR7dHlwZX1gKVxuXHRcdFx0XHQuYXBwZW5kKGA8c3Bhbj4ke3RleHR9PC9zcGFuPmApXG5cdFx0KTtcblx0XHQkKCcjTW9lTm90aWZpY2F0aW9uJykuZmluZCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sYXN0KCkuZmFkZUluKDMwMCk7XG5cdFx0dGhpcy5iaW5kKCk7XG5cdFx0dGhpcy5jbGVhcigpO1xuXHRcdGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNhbGxiYWNrKCQoJyNNb2VOb3RpZmljYXRpb24nKS5maW5kKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmxhc3QoKSk7XG5cdFx0fVxuXHR9XG5cdGJpbmQoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0JCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZi5zbGlkZUxlZnQoJCh0aGlzKSk7XG5cdFx0fSk7XG5cdH1cblx0c3VjY2Vzcyh0ZXh0OiBzdHJpbmcsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnc3VjY2VzcycsIGNhbGxiYWNrKTtcblx0fVxuXHR3YXJuaW5nKHRleHQ6IHN0cmluZywgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XG5cdFx0dGhpcy5kaXNwbGF5KHRleHQsICd3YXJuaW5nJywgY2FsbGJhY2spO1xuXHR9XG5cdGVycm9yKHRleHQ6IHN0cmluZywgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XG5cdFx0dGhpcy5kaXNwbGF5KHRleHQsICdlcnJvcicsIGNhbGxiYWNrKTtcblx0fVxuXHRjbGVhcigpIHtcblx0XHRpZiAoJCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sZW5ndGggPj0gMTApIHtcblx0XHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKVxuXHRcdFx0XHQuY2hpbGRyZW4oKVxuXHRcdFx0XHQuZmlyc3QoKVxuXHRcdFx0XHQuZmFkZU91dCgxNTAsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdHNldFRpbWVvdXQodGhpcy5jbGVhciwgMzAwKTtcblx0XHR9XG5cdH1cblx0ZW1wdHkoZj86IChlbGU6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHZvaWQpIHtcblx0XHQkKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdGlmIChmICYmIHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnN0IGVsZSA9ICQodGhpcyk7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGYoZWxlKTtcblx0XHRcdFx0fSwgMjAwICogaSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0LmRlbGF5KGkgKiAyMDApXG5cdFx0XHRcdFx0LmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdHNsaWRlTGVmdChlbGU6IEpRdWVyeTxIVE1MRWxlbWVudD4sIHNwZWVkID0gMTUwKSB7XG5cdFx0ZWxlLmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcblx0XHRlbGUuYW5pbWF0ZShcblx0XHRcdHtcblx0XHRcdFx0bGVmdDogJy0yMDAlJyxcblx0XHRcdH0sXG5cdFx0XHRzcGVlZCxcblx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCh0aGlzKS5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE5vdGlmaWNhdGlvbigpO1xuIiwgImltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcblxuY29uc3QgUmVxdWVzdHMgPSB7XG5cdGJhc2U6IGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fSR7Q29uc3RhbnRzLnNjcmlwdFBhdGh9L2FwaS5waHBgLFxuXHRhc3luYyBnZXQocXVlcnk6IEFwaVF1ZXJ5UGFyYW1zIHwgQXBpUGFyc2VQYXJhbXMgfCBBcGlFZGl0UGFnZVBhcmFtcykge1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwoUmVxdWVzdHMuYmFzZSk7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocXVlcnkpKSB7XG5cdFx0XHR1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHF1ZXJ5W2tleV0pO1xuXHRcdH1cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IENvbnN0YW50cy51c2VyQWdlbnQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdH0sXG5cdGFzeW5jIHBvc3QocGF5bG9hZDogQXBpUGFyc2VQYXJhbXMgfCBBcGlFZGl0UGFnZVBhcmFtcykge1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwoUmVxdWVzdHMuYmFzZSk7XG5cdFx0Y29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBheWxvYWQpKSB7XG5cdFx0XHRmb3JtLmFwcGVuZChrZXksIHZhbHVlIGFzIHN0cmluZyk7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGJvZHk6IGZvcm0sXG5cdFx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogQ29uc3RhbnRzLnVzZXJBZ2VudCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RzO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBMb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcbmltcG9ydCBpMThuIGZyb20gJy4uL3V0aWxzL2kxOG4nO1xuaW1wb3J0IHJlcXVlc3RzIGZyb20gJy4uL3V0aWxzL3JlcXVlc3RzJztcblxuY2xhc3MgV2lraSB7XG5cdHBhZ2VJbmZvQ2FjaGU6IFJlY29yZDxzdHJpbmcsIHt0aW1lc3RhbXA/OiBzdHJpbmc7IHJldmlkPzogbnVtYmVyOyBjb250ZW50bW9kZWw6IHN0cmluZ30+ID0ge307XG5cdC8qKlxuXHQgKiDojrflvpcgRWRpdCBUb2tlblxuXHQgKiBHZXQgRWRpdCBUb2tlblxuXHQgKlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKi9cblx0YXN5bmMgZ2V0RWRpdFRva2VuKCkge1xuXHRcdC8vIOWwneivleS7jiBBUEkg6I635b6XIEVkaXRUb2tlblxuXHRcdC8vIFRyeSB0byBnZXQgRWRpdFRva2VuIGZyb20gQVBJXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5nZXQoe1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHR9KTtcblx0XHRpZiAoXG5cdFx0XHRyZXNwb25zZS5xdWVyeSAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zICYmXG5cdFx0XHRyZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuICYmXG5cdFx0XHRyZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuICE9PSAnK1xcXFwnXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHR9XG5cdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF9lZGl0dG9rZW4nKTtcblx0fVxuXHQvKipcblx0ICog6I635b6X6aG16Z2i5LiK5LiA54mI5pys5pe26Ze05oizXG5cdCAqIEdldCB0aGUgdGltZXN0YW1wIG9mIHRoZSBsYXN0IHJldmlzaW9uIG9mIHBhZ2Ugc3BlY2lmaWVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3BhcmFtcy5zdHJpbmd9IHRpdGxlIOmhtemdouWQjSAvIFBhZ2VuYW1lXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnJldmlzaW9uSWR9IHJldmlzaW9uSWQg5L+u6K6i54mI5pys5Y+3IC8gUmV2aXNpb24gSURcblx0ICogQHBhcmFtIHtwYXJhbXMuY29udGVudG1vZGVsfSBjb250ZW50bW9kZWwg5YaF5a655qih5Z6LIC8gQ29udGVudCBNb2RlbFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTx7dGltZXN0YW1wPzogc3RyaW5nOyByZXZpc2lvbklkPzogbnVtYmVyOyBjb250ZW50bW9kZWw6IHN0cmluZzt9Pn1cblx0ICovXG5cdGFzeW5jIGdldFBhZ2VJbmZvKHtcblx0XHR0aXRsZSxcblx0XHRyZXZpc2lvbklkLFxuXHR9OiB7XG5cdFx0dGl0bGU6IHN0cmluZztcblx0XHRyZXZpc2lvbklkPzogbnVtYmVyO1xuXHR9KTogUHJvbWlzZTx7dGltZXN0YW1wPzogc3RyaW5nOyByZXZpc2lvbklkPzogbnVtYmVyOyBjb250ZW50bW9kZWw6IHN0cmluZ30gfCB2b2lkPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgJiBBcGlRdWVyeUluZm9QYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9uc3xpbmZvJyxcblx0XHRcdFx0cnZwcm9wOiAndGltZXN0YW1wfGlkcycsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHRcdHBhcmFtcy5yZXZpZHMgPSByZXZpc2lvbklkO1xuXHRcdFx0fSBlbHNlIGlmICh0aXRsZSkge1xuXHRcdFx0XHRpZiAodGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXSkge1xuXHRcdFx0XHRcdC8vIEhpdCBjYWNoZVxuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0aW1lc3RhbXA6IHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0udGltZXN0YW1wIGFzIHN0cmluZyxcblx0XHRcdFx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0ucmV2aWQgYXMgbnVtYmVyLFxuXHRcdFx0XHRcdFx0Y29udGVudG1vZGVsOiB0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdLmNvbnRlbnRtb2RlbCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBhcmFtcy50aXRsZXMgPSB0aXRsZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAocmVzcG9uc2UucXVlcnkgJiYgcmVzcG9uc2UucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0Y29uc3QgcGFnZUtleSA9IE9iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXTtcblx0XHRcdFx0Y29uc3QgY29udGVudG1vZGVsID0gcmVzcG9uc2UucXVlcnkucGFnZXNbcGFnZUtleSBhcyBzdHJpbmddLmNvbnRlbnRtb2RlbDtcblx0XHRcdFx0aWYgKHBhZ2VLZXkgPT09ICctMScpIHtcblx0XHRcdFx0XHQvLyDkuI3lrZjlnKjov5nkuIDpobXpnaJcblx0XHRcdFx0XHQvLyBQYWdlIG5vdCBmb3VuZC5cblx0XHRcdFx0XHR0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdID0ge2NvbnRlbnRtb2RlbH07XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGNvbnRlbnRtb2RlbCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHBhZ2VJbmZvID0gcmVzcG9uc2UucXVlcnkucGFnZXNbcGFnZUtleSBhcyBzdHJpbmddLnJldmlzaW9uc1swXTtcblx0XHRcdFx0aWYgKHRpdGxlKSB7XG5cdFx0XHRcdFx0dGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXSA9IHsuLi5wYWdlSW5mbywgY29udGVudG1vZGVsfTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRpbWVzdGFtcDogcGFnZUluZm8udGltZXN0YW1wLFxuXHRcdFx0XHRcdHJldmlzaW9uSWQ6IHBhZ2VJbmZvLnJldmlkLFxuXHRcdFx0XHRcdGNvbnRlbnRtb2RlbCxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfZWRpdHRva2VuJyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiDojrflvpfpobXpnaLnmoQgV2lraXRleHRcblx0ICogR2V0IHdpa2l0ZXh0IG9mIHRoZSBwYWdlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjb25maWcucmV2aXNpb25JZCDniYjmnKzlj7dcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zZWN0aW9uIOauteiQveWPt1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IHdpa2l0ZXh05YaF5a65XG5cdCAqL1xuXHRhc3luYyBnZXRXaWtpVGV4dCh7c2VjdGlvbiwgcmV2aXNpb25JZH06IHtzZWN0aW9uOiBzdHJpbmcgfCBudW1iZXI7IHJldmlzaW9uSWQ6IG51bWJlcn0pIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRyZXZpZHM6IHJldmlzaW9uSWQsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHJldmlzaW9uSWQpIHtcblx0XHRcdFx0cGFyYW1zLnJldmlkcyA9IHJldmlzaW9uSWQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2VjdGlvbikge1xuXHRcdFx0XHRwYXJhbXMucnZzZWN0aW9uID0gc2VjdGlvbjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAocmVzcG9uc2UucXVlcnkgJiYgcmVzcG9uc2UucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0aWYgKE9iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXSA9PT0gJy0xJykge1xuXHRcdFx0XHRcdC8vIOS4jeWtmOWcqOi/meS4gOmhtemdolxuXHRcdFx0XHRcdC8vIFBhZ2Ugbm90IGZvdW5kLlxuXHRcdFx0XHRcdHJldHVybiAnJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBwYWdlSW5mbyA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzW09iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXSBhcyBzdHJpbmddLnJldmlzaW9uc1swXTtcblx0XHRcdFx0cmV0dXJuIHBhZ2VJbmZvWycqJ107XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X3dpa2l0ZXh0Jyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiDop6PmnpAgV2lraXRleHRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2l0ZXh0IHdpa2l0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSDpobXpnaLmoIfpophcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyDorr7nva5cblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSDop6PmnpDnu5PmnpwgSFRNTFxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuXHRhc3luYyBwYXJzZVdpa2lUZXh0KHdpa2l0ZXh0OiBzdHJpbmcsIHRpdGxlID0gJycsIF9jb25maWcgPSB7fSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLnBvc3Qoe1xuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHBzdDogJ3RydWUnLFxuXHRcdFx0fSk7XG5cdFx0XHRpZiAocmVzcG9uc2UucGFyc2UgJiYgcmVzcG9uc2UucGFyc2UudGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UucGFyc2UudGV4dFsnKiddO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCdjYW50X3BhcnNlX3dpa2l0ZXh0Jyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOe8lui+kemhtemdolxuXHQgKlxuXHQgKiBAcGFyYW0gcm9vdDBcblx0ICogQHBhcmFtIHJvb3QwLnRpdGxlXG5cdCAqIEBwYXJhbSByb290MC5jb250ZW50XG5cdCAqIEBwYXJhbSByb290MC5lZGl0VG9rZW5cblx0ICogQHBhcmFtIHJvb3QwLnRpbWVzdGFtcFxuXHQgKiBAcGFyYW0gcm9vdDAuY29uZmlnXG5cdCAqIEBwYXJhbSByb290MC5hZGRpdGlvbmFsQ29uZmlnXG5cdCAqL1xuXHRhc3luYyBlZGl0KHtcblx0XHR0aXRsZSxcblx0XHRjb250ZW50LFxuXHRcdGVkaXRUb2tlbixcblx0XHR0aW1lc3RhbXAsXG5cdFx0Y29uZmlnID0ge30sXG5cdFx0YWRkaXRpb25hbENvbmZpZyA9IHt9LFxuXHR9OiB7XG5cdFx0dGl0bGU6IHN0cmluZztcblx0XHRjb250ZW50OiBzdHJpbmc7XG5cdFx0ZWRpdFRva2VuOiBzdHJpbmc7XG5cdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0Y29uZmlnOiBQYXJ0aWFsPEFwaUVkaXRQYWdlUGFyYW1zPjtcblx0XHRhZGRpdGlvbmFsQ29uZmlnOiBQYXJ0aWFsPEFwaUVkaXRQYWdlUGFyYW1zPjtcblx0fSk6IFByb21pc2U8dHJ1ZSB8IHZvaWQ+IHtcblx0XHRsZXQgcmVzcG9uc2U7XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0dGV4dDogY29udGVudCxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHRva2VuOiBlZGl0VG9rZW4sXG5cdFx0XHRcdC4uLih0aW1lc3RhbXAgPyB7YmFzZXRpbWVzdGFtcDogdGltZXN0YW1wfSA6IHt9KSxcblx0XHRcdFx0Li4uY29uZmlnLFxuXHRcdFx0XHQuLi5hZGRpdGlvbmFsQ29uZmlnLFxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ25ldHdvcmtfZWRpdF9lcnJvcicpO1xuXHRcdH1cblx0XHRpZiAocmVzcG9uc2UuZWRpdCkge1xuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQucmVzdWx0ID09PSAnU3VjY2VzcycpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5jb2RlKSB7XG5cdFx0XHRcdC8vIEFidXNlIEZpbHRlclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpMThuLnRyYW5zbGF0ZSgnaGl0X2FidXNlZmlsdGVyJyl9OiR7cmVzcG9uc2UuZWRpdC5pbmZvLnJlcGxhY2UoJy9IaXQgQWJ1c2VGaWx0ZXI6IC9pZycsICcnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IHNtYWxsZXI7XCI+JHtyZXNwb25zZS5lZGl0Lndhcm5pbmd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0TG9nLmVycm9yKCd1bmtub3duX2VkaXRfZXJyb3InKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlLmVycm9yICYmIHJlc3BvbnNlLmVycm9yLmNvZGUpIHtcblx0XHRcdExvZy5lcnJvcihyZXNwb25zZS5lcnJvci5jb2RlKTtcblx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlLmNvZGUpIHtcblx0XHRcdExvZy5lcnJvcihyZXNwb25zZS5jb2RlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0TG9nLmVycm9yKCd1bmtub3duX2VkaXRfZXJyb3InKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog6I635b6X5oyH5a6a6aG16Z2i5pyA5paw5L+u6K6i57yW5Y+3XG5cdCAqIEdldCBsYXRlc3QgcmV2aXNpb25JZCBvZiBhIHBhZ2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gdGl0bGVcblx0ICovXG5cdGFzeW5jIGdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlKHRpdGxlOiBzdHJpbmcpIHtcblx0XHRjb25zdCB7cmV2aXNpb25JZH0gPSAoYXdhaXQgdGhpcy5nZXRQYWdlSW5mbyh7dGl0bGV9KSkgYXMge1xuXHRcdFx0cmV2aXNpb25JZDogbnVtYmVyO1xuXHRcdH07XG5cdFx0cmV0dXJuIHJldmlzaW9uSWQ7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFdpa2koKTtcbiIsICJpbXBvcnQgTG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5pbXBvcnQgV2lraSBmcm9tICcuLi9zZXJ2aWNlcy93aWtpJztcblxuY2xhc3MgUGFnZSB7XG5cdHRpbWVzdGFtcDogc3RyaW5nID0gJyc7XG5cdGVkaXRUb2tlbjogc3RyaW5nID0gJyc7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdHJldmlzaW9uSWQ6IG51bWJlcjtcblxuXHRpbml0ZWQgPSBmYWxzZTtcblx0aXNOZXdQYWdlID0gZmFsc2U7XG5cblx0Y29udGVudG1vZGVsID0gJ3dpa2l0ZXh0JztcblxuXHRzZWN0aW9uQ2FjaGU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtwYXJhbXMudGl0bGV9IOmhtemdouagh+mimCBQYWdlIE5hbWUgKG9wdGlvbmFsKVxuXHQgKiBAcGFyYW0ge3BhcmFtcy5yZXZpc2lvbklkfSDpobXpnaLkv67orqLnvJblj7cgUmV2aXNpb24gSWRcblx0ICogQHBhcmFtIHtwYXJhbXMuY29udGVudG1vZGVsfSDpobXpnaLlhoXlrrnmqKHlnosgQ29udGVudCBNb2RlbFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioe3RpdGxlLCByZXZpc2lvbklkID0gMH06IHt0aXRsZTogc3RyaW5nOyByZXZpc2lvbklkOiBudW1iZXJ9KSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMucmV2aXNpb25JZCA9IHJldmlzaW9uSWQ7XG5cdFx0dGhpcy5pc05ld1BhZ2UgPSAhcmV2aXNpb25JZDtcblx0fVxuXG5cdC8qKlxuXHQgKiDliJ3lp4vljJYg6I635b6X6aG16Z2iRWRpdFRva2Vu5ZKM5Yid5aeLVGltZVN0YW1wXG5cdCAqIEluaXRpYWxpemF0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZWRpdFRva2VuIChvcHRpb25hbCkg5aaC5p6c5o+Q5L6b5LqGZWRpdFRva2Vu77yM5bCG5LiN5Lya5YaN6I635Y+WXG5cdCAqL1xuXHRhc3luYyBpbml0KHtlZGl0VG9rZW59OiB7ZWRpdFRva2VuOiBzdHJpbmd9ID0ge2VkaXRUb2tlbjogJyd9KSB7XG5cdFx0Y29uc3QgcHJvbWlzZUFyciA9IFt0aGlzLmdldFRpbWVzdGFtcCgpLCB0aGlzLmdldENvbnRlbnRNb2RlbCgpXTtcblx0XHRpZiAoIWVkaXRUb2tlbikge1xuXHRcdFx0cHJvbWlzZUFyci5wdXNoKHRoaXMuZ2V0RWRpdFRva2VuKCkpO1xuXHRcdH1cblx0XHRhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlQXJyKTtcblx0XHR0aGlzLmluaXRlZCA9IHRydWU7XG5cdFx0TG9nLmluZm8oYFBhZ2UgaW5pdGlhbGl6YXRpb24gZm9yICR7dGhpcy50aXRsZX0jJHt0aGlzLnJldmlzaW9uSWR9IGZpbmlzaGVkLmApO1xuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+lyBFZGl0VG9rZW5cblx0ICogR2V0IEVkaXRUb2tlblxuXHQgKi9cblx0YXN5bmMgZ2V0RWRpdFRva2VuKCkge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnbWVkaWF3aWtpLnVzZXInKTtcblx0XHRpZiAobXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKSAmJiBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpICE9PSAnK1xcXFwnKSB7XG5cdFx0XHQvLyDlpoLmnpwgTWVkaWFXaWtpIEphdmFTY3JpcHQgQVBJIOWPr+S7peebtOaOpeiOt+W+lyBFZGl0VG9rZW4g5YiZ55u05o6l6L+U5ZueXG5cdFx0XHQvLyBSZXR1cm4gRWRpdFRva2VuIHJldHJpZXZlZCBmcm9tIE1lZGlhV2lraSBKYXZhU2NyaXB0IEFQSSBpZiBhY2Nlc3NpYmxlXG5cdFx0XHR0aGlzLmVkaXRUb2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIOS7jkFQSeiOt+W+l0VkaXRUb2tlblxuXHRcdC8vIEdldCBFZGl0VG9rZW4gZnJvbSBNZWRpYVdpa2kgQVBJXG5cdFx0dGhpcy5lZGl0VG9rZW4gPSBhd2FpdCBXaWtpLmdldEVkaXRUb2tlbigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+l+e8lui+keWfuuWHhuaXtumXtOaIs1xuXHQgKiBHZXQgQmFzZSBUaW1lc3RhbXBcblx0ICovXG5cdGFzeW5jIGdldFRpbWVzdGFtcCgpIHtcblx0XHRjb25zdCB7dGltZXN0YW1wLCByZXZpc2lvbklkfSA9IChhd2FpdCBXaWtpLmdldFBhZ2VJbmZvKHtcblx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucmV2aXNpb25JZCxcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdH0pKSBhcyB7XG5cdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdHJldmlzaW9uSWQ6IG51bWJlcjtcblx0XHR9O1xuXHRcdHRoaXMudGltZXN0YW1wID0gdGltZXN0YW1wO1xuXHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHR0aGlzLnJldmlzaW9uSWQgPSByZXZpc2lvbklkO1xuXHRcdFx0dGhpcy5pc05ld1BhZ2UgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog6I635b6X6aG16Z2i5YaF5a655qih5Z6LXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5yZXZpc2lvbklkXG5cdCAqL1xuXHRhc3luYyBnZXRDb250ZW50TW9kZWwoKSB7XG5cdFx0Y29uc3Qge2NvbnRlbnRtb2RlbH0gPSAoYXdhaXQgV2lraS5nZXRQYWdlSW5mbyh7XG5cdFx0XHRyZXZpc2lvbklkOiB0aGlzLnJldmlzaW9uSWQsXG5cdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcblx0XHR9KSkgYXMge3RpbWVzdGFtcD86IHN0cmluZzsgcmV2aXNpb25JZD86IG51bWJlcjsgY29udGVudG1vZGVsOiBzdHJpbmd9O1xuXHRcdHRoaXMuY29udGVudG1vZGVsID0gY29udGVudG1vZGVsIHx8ICd3aWtpdGV4dCc7XG5cdH1cblxuXHQvKipcblx0ICog6I635b6XIFdpa2lUZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBjb25maWcuc2VjdGlvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnJldmlzaW9uSWRcblx0ICovXG5cdGFzeW5jIGdldFdpa2lUZXh0KHtzZWN0aW9uID0gJyd9OiB7c2VjdGlvbj86IG51bWJlciB8IHN0cmluZ30gPSB7fSkge1xuXHRcdGNvbnN0IHNlYyA9IHNlY3Rpb24gPT09IC0xID8gMCA6IHNlY3Rpb247XG5cdFx0aWYgKHRoaXMuc2VjdGlvbkNhY2hlW3NlY10pIHtcblx0XHRcdHJldHVybiB0aGlzLnNlY3Rpb25DYWNoZVtzZWNdO1xuXHRcdH1cblx0XHRjb25zdCB3aWtpVGV4dCA9IGF3YWl0IFdpa2kuZ2V0V2lraVRleHQoe1xuXHRcdFx0c2VjdGlvbjogc2VjLFxuXHRcdFx0cmV2aXNpb25JZDogdGhpcy5yZXZpc2lvbklkLFxuXHRcdH0pO1xuXHRcdExvZy5pbmZvKGBXaWtpdGV4dCBvZiAke3RoaXMudGl0bGV9IyR7c2VjdGlvbn0gZmV0Y2hlZC5gKTtcblx0XHR0aGlzLnNlY3Rpb25DYWNoZVtzZWNdID0gd2lraVRleHQ7XG5cdFx0cmV0dXJuIHdpa2lUZXh0O1xuXHR9XG5cblx0LyoqXG5cdCAqIOino+aekCBXaWtpVGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHRcblx0ICovXG5cdGFzeW5jIHBhcnNlV2lraVRleHQod2lraXRleHQ6IHN0cmluZykge1xuXHRcdHJldHVybiBhd2FpdCBXaWtpLnBhcnNlV2lraVRleHQod2lraXRleHQsIHRoaXMudGl0bGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOe8lui+kemhtemdolxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge0FwaUVkaXRQYWdlUGFyYW1zfSBwYXlsb2FkXG5cdCAqL1xuXHRhc3luYyBlZGl0KHBheWxvYWQ6IEFwaUVkaXRQYWdlUGFyYW1zKSB7XG5cdFx0aWYgKCF0aGlzLmVkaXRUb2tlbikge1xuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF9lZGl0dG9rZW4nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLnRpbWVzdGFtcCAmJiAhdGhpcy5pc05ld1BhZ2UpIHtcblx0XHRcdC8vIOWmguaenOS4jeaYr+WIm+W7uuaWsOmhtemdoiDlj4jmsqHmnInln7rlh4bml7bpl7TmiLMg5YiZ5pyJ5Y+v6IO96YCg5oiQ57yW6L6R6KaG55uWIOS/nemZqei1t+ingeebtOaOpeaLkue7nVxuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF90aW1lc3RhbXAnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmV0dXJuIGF3YWl0IFdpa2kuZWRpdCh7XG5cdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcblx0XHRcdGVkaXRUb2tlbjogdGhpcy5lZGl0VG9rZW4sXG5cdFx0XHQuLi4odGhpcy50aW1lc3RhbXAgPyB7dGltZXN0YW1wOiB0aGlzLnRpbWVzdGFtcH0gOiB7fSksXG5cdFx0XHQuLi5wYXlsb2FkLFxuXHRcdFx0YWRkaXRpb25hbENvbmZpZzoge1xuXHRcdFx0XHQuLi4odGhpcy5pc05ld1BhZ2UgPyB7Y3JlYXRlb25seTogdGhpcy5pc05ld1BhZ2V9IDoge30pLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmNsYXNzIFNldHRpbmdzIHtcblx0Z2V0U2V0dGluZyhrZXk6IHN0cmluZywgb2JqZWN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+ID0ge30pIHtcblx0XHRjb25zdCB3ID0gb2JqZWN0O1xuXHRcdGxldCBzZXR0aW5ncztcblx0XHR0cnkge1xuXHRcdFx0c2V0dGluZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsnV2lraXBsdXNfU2V0dGluZ3MnXSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBjdXN0b21TZXR0aW5nRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oYHJldHVybiAke3NldHRpbmdzW2tleV19YCk7XG5cdFx0XHRpZiAodHlwZW9mIGN1c3RvbVNldHRpbmdGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmIChjdXN0b21TZXR0aW5nRnVuY3Rpb24oKSh3KSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY3VzdG9tU2V0dGluZ0Z1bmN0aW9uKCkodykgfHwgc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdHJldHVybiBzZXR0aW5nc1trZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3Nba2V5XTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxldCByZXN1bHQgPSBzZXR0aW5nc1trZXldO1xuXHRcdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoYFxcJHske2tleX19YCwgb2JqZWN0W2tleV0gYXMgc3RyaW5nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2V0dGluZ3MoKTtcbiIsICIvKipcbiAqIOino+aekFVSTOWPguaVsOWIl+ihqFxuICogUGFyc2UgVVJMIHF1ZXJ5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB1cmxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnkodXJsOiBzdHJpbmcpIHtcblx0Y29uc3QgcmVnID0gLygoW14/Jj1dKykoPzo9KFtePyY9XSopKSopL2c7XG5cdGNvbnN0IHBhcmFtczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXHRsZXQgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGw7XG5cdHdoaWxlICgobWF0Y2ggPSByZWcuZXhlYyh1cmwpKSkge1xuXHRcdHRyeSB7XG5cdFx0XHRwYXJhbXNbbWF0Y2hbMl0gYXMgc3RyaW5nXSA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSBhcyBzdHJpbmcpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cGFyYW1zW21hdGNoWzJdIGFzIHN0cmluZ10gPSBtYXRjaFszXSBhcyBzdHJpbmc7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBwYXJhbXM7XG59XG4iLCAiY29uc3Qgc2xlZXAgPSAodGltZTogbnVtYmVyKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpO1xuXHR9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBzbGVlcDtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgTG9nLCB7V2lraXBsdXNFcnJvcn0gZnJvbSAnLi4vdXRpbHMvbG9nJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi9ub3RpZmljYXRpb24nO1xuaW1wb3J0IGkxOG4gZnJvbSAnLi4vdXRpbHMvaTE4bic7XG5pbXBvcnQge3BhcnNlUXVlcnl9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnO1xuaW1wb3J0IHNsZWVwIGZyb20gJy4uL3V0aWxzL3NsZWVwJztcblxuY2xhc3MgVUkge1xuXHRxdWlja0VkaXRQYW5lbFZpc2libGUgPSBmYWxzZTtcblx0c2Nyb2xsVG9wID0gMDtcblxuXHQvKipcblx0ICog5Yib5bu65bGF5Lit5a+56K+d5qGGXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSDnqpflj6PmoIfpophcblx0ICogQHBhcmFtIHtzdHJpbmcgfCBKUXVlcnk8SFRNTEVsZW1lbnQ+fSBjb250ZW50IOWGheWuuVxuXHQgKiBAcGFyYW0geyp9IHdpZHRoIOWuveW6plxuXHQgKiBAcGFyYW0geyp9IGNhbGxiYWNrIOWbnuiwg+WHveaVsFxuXHQgKi9cblx0Y3JlYXRlRGlhbG9nQm94KFxuXHRcdHRpdGxlOiBzdHJpbmcgPSAnV2lraXBsdXMnLFxuXHRcdGNvbnRlbnQ6IHN0cmluZyB8IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAnJyxcblx0XHR3aWR0aDogbnVtYmVyID0gNjAwLFxuXHRcdGNhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge31cblx0KSB7XG5cdFx0aWYgKCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmxlbmd0aCA+IDApIHtcblx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGNvbnN0IGNsaWVudFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0Y29uc3QgY2xpZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdGNvbnN0IGRpYWxvZ1dpZHRoID0gTWF0aC5taW4oY2xpZW50V2lkdGgsIHdpZHRoKTtcblx0XHRjb25zdCBkaWFsb2dCb3ggPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94Jylcblx0XHRcdC5jc3Moe1xuXHRcdFx0XHQnbWFyZ2luLWxlZnQnOiBjbGllbnRXaWR0aCAvIDIgLSBkaWFsb2dXaWR0aCAvIDIsXG5cdFx0XHRcdHRvcDogJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgfHwgMCArIGNsaWVudEhlaWdodCAqIDAuMixcblx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdFx0fSlcblx0XHRcdC5hcHBlbmQoJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtSGVhZGVyJykuaHRtbCh0aXRsZSkpXG5cdFx0XHQuYXBwZW5kKCQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5hcHBlbmQoY29udGVudCkpXG5cdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQoJ8OXJykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUNsb3NlJykpO1xuXHRcdCQoJ2JvZHknKS5hcHBlbmQoZGlhbG9nQm94KTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS53aWR0aChkaWFsb2dXaWR0aCk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0JCh0aGlzKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmZhZGVPdXQoJ2Zhc3QnLCAoKSA9PiB7XG5cdFx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IHVuZGVmaW5lZCkpOyAvLyDlj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0XHQvLyDmi5bmm7Ncblx0XHRjb25zdCBiaW5kRHJhZ2dpbmcgPSAoZWxlbWVudDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4ge1xuXHRcdFx0ZWxlbWVudC5vbignbW91c2Vkb3duJywgKGUpID0+IHtcblx0XHRcdFx0Y29uc3QgYmFzZVggPSBlLmNsaWVudFg7XG5cdFx0XHRcdGNvbnN0IGJhc2VZID0gZS5jbGllbnRZO1xuXHRcdFx0XHRjb25zdCBiYXNlT2Zmc2V0WCA9IGVsZW1lbnQucGFyZW50KCkub2Zmc2V0KCk/LmxlZnQgfHwgMDtcblx0XHRcdFx0Y29uc3QgYmFzZU9mZnNldFkgPSBlbGVtZW50LnBhcmVudCgpLm9mZnNldCgpPy50b3AgfHwgMDtcblx0XHRcdFx0JChkb2N1bWVudCkub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC5wYXJlbnQoKS5jc3Moe1xuXHRcdFx0XHRcdFx0J21hcmdpbi1sZWZ0JzogYmFzZU9mZnNldFggKyBlLmNsaWVudFggLSBiYXNlWCxcblx0XHRcdFx0XHRcdHRvcDogYmFzZU9mZnNldFkgKyBlLmNsaWVudFkgLSBiYXNlWSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwJywgKCkgPT4ge1xuXHRcdFx0XHRcdGVsZW1lbnQudW5iaW5kKCdtb3VzZWRvd24nKTtcblx0XHRcdFx0XHQkKGRvY3VtZW50KS5vZmYoJ21vdXNlbW92ZScpO1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9mZignbW91c2V1cCcpO1xuXHRcdFx0XHRcdGJpbmREcmFnZ2luZyhlbGVtZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGJpbmREcmFnZ2luZygkKCcuV2lraXBsdXMtSW50ZXJCb3gtSGVhZGVyJykpO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmZhZGVJbig1MDApO1xuXHRcdGNhbGxiYWNrKCk7XG5cdFx0cmV0dXJuIGRpYWxvZ0JveDtcblx0fVxuXG5cdC8qKlxuXHQgKiDlnKjmkJzntKLmoYblt6bkvqfjgIzmm7TlpJrjgI3oj5zljZXlhoXmt7vliqDmjInpkq5cblx0ICogQWRkIGEgYnV0dG9uIGluIFwiTW9yZVwiIG1lbnUgKGxlZnQgb2YgdGhlIHNlYXJjaCBiYXIpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IOaMiemSruWQjSBCdXR0b24gdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaWQg5oyJ6ZKuaWQgQnV0dG9uIGlkXG5cdCAqIEByZXR1cm4ge0pRdWVyeTxIVE1MRWxlbWVudD59IGJ1dHRvblxuXHQgKi9cblx0YWRkRnVuY3Rpb25CdXR0b24odGV4dDogc3RyaW5nLCBpZDogc3RyaW5nKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB8IHZvaWQge1xuXHRcdGxldCBidXR0b247XG5cdFx0c3dpdGNoIChDb25zdGFudHMuc2tpbikge1xuXHRcdFx0Y2FzZSAnbWluZXJ2YSc6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIGlkKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndG9nZ2xlLWxpc3QtaXRlbScpXG5cdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnbXctdWktaWNvbiBtdy11aS1pY29uLWJlZm9yZSB0b2dnbGUtbGlzdC1pdGVtX19hbmNob3InKVxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCk7Jylcblx0XHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygndG9nZ2xlLWxpc3QtaXRlbV9fbGFiZWwnKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQodGV4dClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdtb2Vza2luJzpcblx0XHRcdFx0YnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1Nb3JlLUZ1bmN0aW9uLUJ1dHRvbicpXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgaWQpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8YT4nKS5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKS50ZXh0KHRleHQpKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnbXctbGlzdC1pdGVtJylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3ZlY3Rvci10YWItbm9pY29uJylcblx0XHRcdFx0XHQuYXR0cignaWQnLCBpZClcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpLnRleHQodGV4dCkpO1xuXHRcdH1cblx0XHRpZiAoQ29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJyAmJiAkKCcjcC10YicpLmxlbmd0aCA+IDApIHtcblx0XHRcdCQoJyNwLXRiJykuYXBwZW5kKGJ1dHRvbik7XG5cdFx0XHRyZXR1cm4gJChgIyR7aWR9YCk7XG5cdFx0fSBlbHNlIGlmIChDb25zdGFudHMuc2tpbiA9PT0gJ21vZXNraW4nKSB7XG5cdFx0XHQkKCcubW9yZS1hY3Rpb25zLWxpc3QnKS5maXJzdCgpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH0gZWxzZSBpZiAoJCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcjcC1jYWN0aW9ucyB1bCcpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH1cblx0XHRMb2cuaW5mbyhpMThuLnRyYW5zbGF0ZSgnY2FudF9hZGRfZnVuY2J0bicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXlv6vpgJ/ph43lrprlkJHmjInpkq5cblx0ICpcblx0ICogQHBhcmFtIHsqfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbihvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBidXR0b24gPSB0aGlzLmFkZEZ1bmN0aW9uQnV0dG9uKGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9mcm9tJyksICdXaWtpcGx1cy1TUi1JbnRybycpO1xuXHRcdGlmIChidXR0b24pIHtcblx0XHRcdGJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl6K6+572u6Z2i5p2/5oyJ6ZKuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2V0dGluZ3NQYW5lbEJ1dHRvbihvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBidXR0b24gPSB0aGlzLmFkZEZ1bmN0aW9uQnV0dG9uKGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5ncycpLCAnV2lraXBsdXMtU2V0dGluZ3MtSW50cm8nKTtcblx0XHRpZiAoYnV0dG9uKSB7XG5cdFx0XHRidXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpemhtumDqOW/q+mAn+e8lui+keaMiemSrlxuXHQgKiBJbnNlcnQgUXVpY2tFZGl0IGJ1dHRvbiBiZXNpZGVzIHBhZ2UgZWRpdCBidXR0b24uXG5cdCAqXG5cdCAqIEBwYXJhbSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRUb3BRdWlja0VkaXRFbnRyeShvbkNsaWNrOiB7XG5cdFx0KHtcblx0XHRcdHNlY3Rpb25OdW1iZXIsXG5cdFx0XHRzZWN0aW9uTmFtZSxcblx0XHRcdHRhcmdldFBhZ2VOYW1lLFxuXHRcdH06IHtcblx0XHRcdHNlY3Rpb25OdW1iZXI6IG51bWJlcjtcblx0XHRcdHNlY3Rpb25OYW1lPzogc3RyaW5nO1xuXHRcdFx0dGFyZ2V0UGFnZU5hbWU6IHN0cmluZztcblx0XHR9KTogdm9pZCB8IFByb21pc2U8dm9pZD47XG5cdH0pIHtcblx0XHRjb25zdCB0b3BCdG4gPSAkKCc8bGk+JykuYXR0cignaWQnLCAnV2lraXBsdXMtRWRpdC1Ub3BCdG4nKS5hdHRyKCdjbGFzcycsICdtdy1saXN0LWl0ZW0nKTtcblx0XHRjb25zdCB0b3BCdG5MaW5rID0gJCgnPGE+Jylcblx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3RvcGJ0bicpfWApO1xuXHRcdHRvcEJ0bi5hcHBlbmQodG9wQnRuTGluayk7XG5cdFx0c3dpdGNoIChDb25zdGFudHMuc2tpbikge1xuXHRcdFx0Y2FzZSAnbWluZXJ2YSc6XG5cdFx0XHRcdHRvcEJ0bi5jc3MoeydhbGlnbi1pdGVtcyc6ICdjZW50ZXInLCBkaXNwbGF5OiAnZmxleCd9KTtcblx0XHRcdFx0dG9wQnRuLmZpbmQoJ3NwYW4nKS5hZGRDbGFzcygncGFnZS1hY3Rpb25zLW1lbnVfX2xpc3QtaXRlbScpO1xuXHRcdFx0XHR0b3BCdG5cblx0XHRcdFx0XHQuZmluZCgnYScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKFxuXHRcdFx0XHRcdFx0J213LXVpLWljb24gbXctdWktaWNvbi1lbGVtZW50IG13LXVpLWljb24td2lraW1lZGlhLWVkaXQtYmFzZTIwIG13LXVpLWljb24td2l0aC1sYWJlbC1kZXNrdG9wJ1xuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQuY3NzKCd2ZXJ0aWNhbC1hbGlnbicsICdtaWRkbGUnKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3ZlY3Rvci0yMDIyJzpcblx0XHRcdFx0dG9wQnRuLmFkZENsYXNzKCd2ZWN0b3ItdGFiLW5vaWNvbicpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndmVjdG9yJzpcblx0XHRcdFx0dG9wQnRuLmFwcGVuZCgkKCc8c3Bhbj4nKS5hcHBlbmQodG9wQnRuTGluaykpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHR9XG5cdFx0JCh0b3BCdG4pLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRzZWN0aW9uTnVtYmVyOiAtMSxcblx0XHRcdFx0dGFyZ2V0UGFnZU5hbWU6IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWUsXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRpZiAoJCgnI2NhLWVkaXQnKS5sZW5ndGggPiAwICYmICQoJyNXaWtpcGx1cy1FZGl0LVRvcEJ0bicpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0aWYgKENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YSknKSB7XG5cdFx0XHRcdCQoJyNjYS1lZGl0JykucGFyZW50KCkuYWZ0ZXIodG9wQnRuKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJyNjYS1lZGl0JykuYWZ0ZXIodG9wQnRuKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl5q616JC95b+r6YCf57yW6L6R5oyJ6ZKuXG5cdCAqIEluc2VydCBRdWlja0VkaXQgYnV0dG9ucyBmb3IgZWFjaCBzZWN0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2VjdGlvblF1aWNrRWRpdEVudHJpZXMoXG5cdFx0b25DbGljazogKHtcblx0XHRcdHNlY3Rpb25OdW1iZXIsXG5cdFx0XHRzZWN0aW9uTmFtZSxcblx0XHRcdHRhcmdldFBhZ2VOYW1lLFxuXHRcdH06IHtcblx0XHRcdHNlY3Rpb25OdW1iZXI/OiBzdHJpbmcgfCBudW1iZXI7XG5cdFx0XHRzZWN0aW9uTmFtZT86IHN0cmluZztcblx0XHRcdHRhcmdldFBhZ2VOYW1lOiBzdHJpbmc7XG5cdFx0fSkgPT4gUHJvbWlzZTx2b2lkPiB8IHZvaWRcblx0KSB7XG5cdFx0b25DbGljayB8fD0gKCkgPT4ge307XG5cdFx0Y29uc3Qgc2VjdGlvbkJ0biA9XG5cdFx0XHRDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnXG5cdFx0XHRcdD8gJCgnPHNwYW4+JykuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKFxuXHRcdFx0XHRcdFx0XHRcdCdXaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4gbXctdWktaWNvbiBtdy11aS1pY29uLWVsZW1lbnQgbXctdWktaWNvbi13aWtpbWVkaWEtZWRpdC1iYXNlMjAgZWRpdC1wYWdlIG13LXVpLWljb24tZmx1c2gtcmlnaHQnXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0LmNzcygnbWFyZ2luLWxlZnQnLCAnMC43NWVtJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3RpdGxlJywgaTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF9zZWN0aW9uYnRuJykpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQ6ICQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLmFkZENsYXNzKCdtdy1lZGl0c2VjdGlvbi1kaXZpZGVyJykudGV4dCgnIHwgJykpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuJylcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpKVxuXHRcdFx0XHRcdFx0KTtcblx0XHQkKCcubXctZWRpdHNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGVkaXRVUkwgPSAkKHRoaXMpLmZpbmQoXCJhW2hyZWYqPSdhY3Rpb249ZWRpdCddXCIpLmZpcnN0KCkuYXR0cignaHJlZicpIHx8ICcnO1xuXHRcdFx0XHRjb25zdCBbLCBzZWN0aW9uTGFiZWxdID0gZWRpdFVSTC5tYXRjaCgvJlt2ZV0qc2VjdGlvblxcPShbXiZdKykvKSBhcyBSZWdFeHBFeGVjQXJyYXk7IC8vIGB2ZWAgZm9yIHZpc3VhbCBlZGl0b3Jcblx0XHRcdFx0Y29uc3Qgc2VjdGlvbk51bWJlciA9IHNlY3Rpb25MYWJlbD8ucmVwbGFjZSgvVC0vZ2ksICcnKTsgLy8gZW1iZWRkZWQgcGFnZXMgdXNlIFQtc2VyaWVzIHNlY3Rpb24gbnVtYmVyXG5cdFx0XHRcdGNvbnN0IFssIHNlY3Rpb25UYXJnZXRMYWJlbF0gPSBlZGl0VVJMLm1hdGNoKC90aXRsZT0oLis/KSYvKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25UYXJnZXROYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KHNlY3Rpb25UYXJnZXRMYWJlbCB8fCAnJyk7XG5cdFx0XHRcdGNvbnN0IGNsb25lTm9kZSA9ICQodGhpcykucHJldigpLmNsb25lKCk7XG5cdFx0XHRcdGNsb25lTm9kZS5maW5kKCcubXctaGVhZGxpbmUtbnVtYmVyJykucmVtb3ZlKCk7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25OYW1lID0gY2xvbmVOb2RlLnRleHQoKS50cmltKCk7XG5cdFx0XHRcdGNvbnN0IF9zZWN0aW9uQnRuID0gc2VjdGlvbkJ0bi5jbG9uZSgpO1xuXHRcdFx0XHRfc2VjdGlvbkJ0bi5maW5kKCcuV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuJykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcjogc2VjdGlvbk51bWJlciBhcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRzZWN0aW9uTmFtZSxcblx0XHRcdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBzZWN0aW9uVGFyZ2V0TmFtZSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5hcHBlbmQoX3NlY3Rpb25CdG4pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQodGhpcykuZmluZCgnLm13LWVkaXRzZWN0aW9uLWJyYWNrZXQnKS5sYXN0KCkuYmVmb3JlKF9zZWN0aW9uQnRuKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdExvZy5lcnJvcignZmFpbF90b19pbml0X3F1aWNrZWRpdCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeS7u+aEj+mTvuaOpee8lui+keWFpeWPo1xuXHQgKlxuXHQgKiBAcGFyYW0geyp9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydExpbmtFZGl0RW50cmllcyhcblx0XHRvbkNsaWNrOiAoe1xuXHRcdFx0c2VjdGlvbk51bWJlcixcblx0XHRcdHNlY3Rpb25OYW1lLFxuXHRcdFx0dGFyZ2V0UGFnZU5hbWUsXG5cdFx0fToge1xuXHRcdFx0c2VjdGlvbk51bWJlcj86IHN0cmluZyB8IG51bWJlcjtcblx0XHRcdHNlY3Rpb25OYW1lPzogc3RyaW5nO1xuXHRcdFx0dGFyZ2V0UGFnZU5hbWU6IHN0cmluZztcblx0XHR9KSA9PiBQcm9taXNlPHZvaWQ+IHwgdm9pZFxuXHQpIHtcblx0XHRvbkNsaWNrIHx8PSAoKSA9PiB7fTtcblx0XHQkKCcjbXctY29udGVudC10ZXh0IGEuZXh0ZXJuYWwnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpIHx8ICcnO1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeSh1cmwpO1xuXHRcdFx0aWYgKHBhcmFtc1snYWN0aW9uJ10gPT09ICdlZGl0JyAmJiBwYXJhbXNbJ3RpdGxlJ10gIT09IHVuZGVmaW5lZCAmJiBwYXJhbXNbJ3NlY3Rpb24nXSAhPT0gJ25ldycpIHtcblx0XHRcdFx0JCh0aGlzKS5hZnRlcihcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnamF2YXNjcmlwdDp2b2lkKDApJyxcblx0XHRcdFx0XHRcdFx0Y2xhc3M6ICdXaWtpcGx1cy1FZGl0LUV2ZXJ5V2hlcmVCdG4nLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC50ZXh0KGAoJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3NlY3Rpb25idG4nKX0pYClcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBwYXJhbXNbJ3RpdGxlJ10gYXMgc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdHNlY3Rpb25OdW1iZXI6IHBhcmFtc1snc2VjdGlvbiddID8/IC0xLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRzaG93UXVpY2tFZGl0UGFuZWwoe1xuXHRcdHRpdGxlID0gJycsXG5cdFx0Y29udGVudCA9ICcnLFxuXHRcdHN1bW1hcnkgPSAnJyxcblx0XHRvbkJhY2sgPSAoKSA9PiB7fSxcblx0XHRvblBhcnNlID0gYXN5bmMgKCkgPT4ge30sXG5cdFx0b25FZGl0ID0gYXN5bmMgKCkgPT4ge30sXG5cdFx0ZXNjRXhpdCA9IGZhbHNlLFxuXHR9OiB7XG5cdFx0dGl0bGU6IHN0cmluZztcblx0XHRjb250ZW50OiBzdHJpbmc7XG5cdFx0c3VtbWFyeTogc3RyaW5nO1xuXHRcdG9uQmFjazogKCkgPT4gdm9pZDtcblx0XHRvblBhcnNlOiAod2lraXRleHQ6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcblx0XHRvbkVkaXQ6IChhcmcwOiB7c3VtbWFyeTogc3RyaW5nOyBjb250ZW50OiBzdHJpbmc7IGlzTWlub3JFZGl0OiBib29sZWFufSkgPT4gUHJvbWlzZTx2b2lkPjtcblx0XHRlc2NFeGl0OiBib29sZWFuO1xuXHR9KSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5zY3JvbGxUb3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSB8fCAwO1xuXHRcdGlmICh0aGlzLnF1aWNrRWRpdFBhbmVsVmlzaWJsZSkge1xuXHRcdFx0dGhpcy5oaWRlUXVpY2tFZGl0UGFuZWwoKTtcblx0XHR9XG5cdFx0dGhpcy5xdWlja0VkaXRQYW5lbFZpc2libGUgPSB0cnVlO1xuXHRcdC8vIOmYsuatouaJi+a7keWFs+mXremhtemdolxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0J2Nsb3NlJyxcblx0XHRcdCh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiBgJHtpMThuLnRyYW5zbGF0ZSgnb25jbG9zZV9jb25maXJtJyl9YDtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHRjb25zdCBpc05ld1BhZ2UgPSAkKCcubm9hcnRpY2xldGV4dCcpLmxlbmd0aCA+IDA7XG5cdFx0Ly8gRE9NIOWumuS5ieW8gOWni1xuXHRcdGNvbnN0IGJhY2tCdG4gPSAkKCc8c3Bhbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQnRuJylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdiYWNrJyl9YCk7IC8vIOi/lOWbnuaMiemSrlxuXHRcdGNvbnN0IGp1bXBCdG4gPSAkKCc8c3Bhbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1KdW1wJylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQnRuJylcblx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnI1dpa2lwbHVzLVF1aWNrZWRpdCcpXG5cdFx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2dvdG9fZWRpdGJveCcpfWApXG5cdFx0XHQpOyAvLyDliLDnvJbovpHmoYZcblx0XHRjb25zdCBpbnB1dEJveCA9ICQoJzx0ZXh0YXJlYT4nKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQnKTsgLy8g5Li757yW6L6R5qGGXG5cdFx0Y29uc3QgcHJldmlld0JveCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0Jyk7IC8vIOmihOiniOi+k+WHulxuXHRcdGNvbnN0IHN1bW1hcnlCb3ggPSAkKCc8aW5wdXQ+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCcpXG5cdFx0XHQuYXR0cigncGxhY2Vob2xkZXInLCBgJHtpMThuLnRyYW5zbGF0ZSgnc3VtbWFyeV9wbGFjZWhvbGQnKX1gKTsgLy8g57yW6L6R5pGY6KaB6L6T5YWlXG5cdFx0Y29uc3QgZWRpdFN1Ym1pdEJ0biA9ICQoJzxidXR0b24+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0Jylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKGlzTmV3UGFnZSA/ICdwdWJsaXNoX3BhZ2UnIDogJ3B1Ymxpc2hfY2hhbmdlJyl9KEN0cmwrUylgKTsgLy8g5o+Q5Lqk5oyJ6ZKuXG5cdFx0Y29uc3QgcHJldmlld1N1Ym1pdEJ0biA9ICQoJzxidXR0b24+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3ByZXZpZXcnKX1gKTsgLy8g6aKE6KeI5oyJ6ZKuXG5cdFx0Y29uc3QgaXNNaW5vckVkaXQgPSAkKCc8ZGl2PicpXG5cdFx0XHQuYXBwZW5kKCQoJzxpbnB1dD4nKS5hdHRyKHt0eXBlOiAnY2hlY2tib3gnLCBpZDogJ1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnfSkpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8bGFiZWw+Jylcblx0XHRcdFx0XHQuYXR0cignZm9yJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKVxuXHRcdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdtYXJrX21pbm9yZWRpdCcpfShDdHJsK1NoaWZ0K1MpYClcblx0XHRcdClcblx0XHRcdC5jc3Moe21hcmdpbjogJzVweCA1cHggNXB4IC0zcHgnLCBkaXNwbGF5OiAnaW5saW5lJ30pO1xuXHRcdC8vIERPTeWumuS5iee7k+adn1xuXHRcdGNvbnN0IGVkaXRCb2R5ID0gJCgnPGRpdj4nKS5hcHBlbmQoXG5cdFx0XHRiYWNrQnRuLFxuXHRcdFx0anVtcEJ0bixcblx0XHRcdHByZXZpZXdCb3gsXG5cdFx0XHRpbnB1dEJveCxcblx0XHRcdHN1bW1hcnlCb3gsXG5cdFx0XHQkKCc8YnI+JyksXG5cdFx0XHRpc01pbm9yRWRpdCxcblx0XHRcdGVkaXRTdWJtaXRCdG4sXG5cdFx0XHRwcmV2aWV3U3VibWl0QnRuXG5cdFx0KTtcblx0XHR0aGlzLmNyZWF0ZURpYWxvZ0JveCh0aXRsZSwgZWRpdEJvZHksIDEwMDAsICgpID0+IHtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQnKS52YWwoY29udGVudCk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQnKS52YWwoc3VtbWFyeSk7XG5cdFx0fSk7XG5cdFx0Ly8gQmFja1xuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpLm9uKCdjbGljaycsIG9uQmFjayk7XG5cdFx0Ly8gUHJldmlld1xuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBwcmVsb2FkQmFubmVyID0gJCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdsb2FkaW5nX3ByZXZpZXcnKX1gKTtcblx0XHRcdGNvbnN0IHdpa2lUZXh0ID0gJCgnI1dpa2lwbHVzLVF1aWNrZWRpdCcpLnZhbCgpO1xuXHRcdFx0JCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVPdXQoMTAwLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKCcnKS5hcHBlbmQocHJlbG9hZEJhbm5lcik7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlSW4oMTAwKTtcblx0XHRcdH0pO1xuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogc2VsZi5zY3JvbGxUb3B9LCAyMDApOyAvL+i/lOWbnumhtumDqFxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgb25QYXJzZSh3aWtpVGV4dCBhcyBzdHJpbmcpO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVPdXQoJzEwMCcsICgpID0+IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmh0bWwoYDxocj48ZGl2IGNsYXNzPVwibXctYm9keS1jb250ZW50XCI+JHtyZXN1bHR9PC9kaXY+PGhyPmApO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZUluKCcxMDAnKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Ly8gRWRpdFxuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0Jykub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGltZXIgPSBEYXRlLm5vdygpO1xuXHRcdFx0Y29uc3QgZWRpdEJhbm5lciA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9YCk7XG5cdFx0XHRjb25zdCBwYXlsb2FkID0ge1xuXHRcdFx0XHRzdW1tYXJ5OiAkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQnKS52YWwoKSBhcyBzdHJpbmcsXG5cdFx0XHRcdGNvbnRlbnQ6ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQnKS52YWwoKSBhcyBzdHJpbmcsXG5cdFx0XHRcdGlzTWlub3JFZGl0OiAkKCcjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpLmlzKCc6Y2hlY2tlZCcpIGFzIGJvb2xlYW4sXG5cdFx0XHR9O1xuXHRcdFx0Ly8g5YeG5aSH57yW6L6RIOemgeeUqOaMiemSriDmiafooYzliqjnlLtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0LCNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLmF0dHIoXG5cdFx0XHRcdCdkaXNhYmxlZCcsXG5cdFx0XHRcdCdkaXNhYmxlZCdcblx0XHRcdCk7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzZWxmLnNjcm9sbFRvcH0sIDIwMCk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZU91dCgxMDAsICgpID0+IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmh0bWwoJycpLmFwcGVuZChlZGl0QmFubmVyKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbigxMDApO1xuXHRcdFx0fSk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBvbkVkaXQocGF5bG9hZCk7XG5cdFx0XHRcdGNvbnN0IHVzZVRpbWUgPSBEYXRlLm5vdygpIC0gdGltZXI7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKVxuXHRcdFx0XHRcdC5maW5kKCcuV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0XHQuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoNiwgMjM5LCA5MiwgMC40NCknKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5XaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdlZGl0X3N1Y2Nlc3MnLCBbdXNlVGltZS50b1N0cmluZygpXSl9YCk7XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB1bmRlZmluZWQpKTsgLy8g5Y+W5raI6aG16Z2i5YWz6Zet56Gu6K6kXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmh0bWwoKGVycm9yIGFzIFdpa2lwbHVzRXJyb3IpLm1lc3NhZ2UpO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQsI1dpa2lwbHVzLVF1aWNrZWRpdCwjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0JykucHJvcChcblx0XHRcdFx0XHQnZGlzYWJsZWQnLFxuXHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly8gQ3RybCtT5o+Q5LqkIEN0cmwrU2hpZnQrU+Wwj+e8lui+kVxuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0LCNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0Jykub24oJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUuY3RybEtleSAmJiBlLndoaWNoID09PSA4Mykge1xuXHRcdFx0XHRpZiAoZS5zaGlmdEtleSkge1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0JykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvLyBFc2PpgIDlh7pcblx0XHRpZiAoZXNjRXhpdCkge1xuXHRcdFx0JChkb2N1bWVudCkub24oJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS53aGljaCA9PT0gMjcpIHtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRoaWRlUXVpY2tFZGl0UGFuZWwoKSB7XG5cdFx0dGhpcy5xdWlja0VkaXRQYW5lbFZpc2libGUgPSBmYWxzZTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5mYWRlT3V0KCdmYXN0JywgKCkgPT4ge1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IHVuZGVmaW5lZCkpOyAvLyDlj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICog5pi+56S65b+r6YCf6YeN5a6a5ZCR5by556qXXG5cdCAqXG5cdCAqIEBwYXJhbSByb290MFxuXHQgKiBAcGFyYW0gcm9vdDAub25FZGl0XG5cdCAqIEBwYXJhbSByb290MC5vblN1Y2Nlc3Ncblx0ICovXG5cdHNob3dTaW1wbGVSZWRpcmVjdFBhbmVsKHtcblx0XHRvbkVkaXQgPSBhc3luYyAoKSA9PiB7fSxcblx0XHRvblN1Y2Nlc3MgPSAoKSA9PiB7fSxcblx0fToge1xuXHRcdG9uRWRpdD86IChhcmcwOiB7dGl0bGU6IHN0cmluZzsgc3VtbWFyeTogc3RyaW5nOyBmb3JjZU92ZXJ3cml0ZTogYm9vbGVhbn0pID0+IFByb21pc2U8dm9pZD47XG5cdFx0b25TdWNjZXNzPzogKGFyZzA6IHt0aXRsZTogc3RyaW5nfSkgPT4gdm9pZDtcblx0fSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1JbnB1dCcpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLVRpdGxlJyk7XG5cdFx0Y29uc3Qgc3VtbWFyeUlucHV0VGl0bGUgPSAkKCc8cD4nKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zdW1tYXJ5X2Rlc2MnKSk7XG5cdFx0Y29uc3Qgc3VtbWFyeUlucHV0ID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1JbnB1dCcpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLVN1bW1hcnknKTtcblx0XHRjb25zdCBhcHBseUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1DYW5jZWwnKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ2NhbmNlbCcpKTtcblx0XHRjb25zdCBjb250aW51ZUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1Db250aW51ZScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY29udGludWUnKSk7XG5cdFx0Y29uc3QgY29udGVudCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hcHBlbmQoaW5wdXQpXG5cdFx0XHQuYXBwZW5kKHN1bW1hcnlJbnB1dFRpdGxlKVxuXHRcdFx0LmFwcGVuZChzdW1tYXJ5SW5wdXQpXG5cdFx0XHQuYXBwZW5kKCQoJzxocj4nKSlcblx0XHRcdC5hcHBlbmQoYXBwbHlCdG4pXG5cdFx0XHQuYXBwZW5kKGNhbmNlbEJ0bik7IC8vIOaLvOaOpVxuXHRcdGNvbnN0IGRpYWxvZyA9IHRoaXMuY3JlYXRlRGlhbG9nQm94KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9kZXNjJyksIGNvbnRlbnQsIDYwMCk7XG5cdFx0YXBwbHlCdG4ub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGUgPSAkKCcjV2lraXBsdXMtU1ItVGl0bGUnKS52YWwoKSBhcyBzdHJpbmc7XG5cdFx0XHRjb25zdCBzdW1tYXJ5ID0gJCgnI1dpa2lwbHVzLVNSLVN1bW1hcnknKS52YWwoKSBhcyBzdHJpbmc7XG5cdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoXG5cdFx0XHRcdGA8ZGl2IGNsYXNzPVwiV2lraXBsdXMtQmFubmVyXCI+JHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9PC9kaXY+YFxuXHRcdFx0KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IG9uRWRpdCh7XG5cdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogZmFsc2UsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dChpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3Rfc2F2ZWQnKSk7XG5cdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0b25TdWNjZXNzKHt0aXRsZX0pO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDIxOCwgMTQyLCAxNjcsIDAuNjUpJyk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KChlcnJvciBhcyBXaWtpcGx1c0Vycm9yKS5tZXNzYWdlKTtcblx0XHRcdFx0aWYgKChlcnJvciBhcyBXaWtpcGx1c0Vycm9yKS5jb2RlID09PSAnYXJ0aWNsZWV4aXN0cycpIHtcblx0XHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmFwcGVuZCgkKCc8aHI+JykpLmFwcGVuZChjb250aW51ZUJ0bikuYXBwZW5kKGNhbmNlbEJ0bik7XG5cdFx0XHRcdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb250aW51ZUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoXG5cdFx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwiV2lraXBsdXMtQmFubmVyXCI+JHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9PC9kaXY+YFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IG9uRWRpdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zYXZlZCcpKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRcdFx0XHRvblN1Y2Nlc3Moe3RpdGxlfSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoKGVycm9yIGFzIFdpa2lwbHVzRXJyb3IpLm1lc3NhZ2UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiDpmpDol4/lv6vpgJ/ph43lrprlkJHlvLnnqpdcblx0ICpcblx0ICogQHBhcmFtIHsqfSBkaWFsb2dcblx0ICovXG5cdGhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyA9ICQoJ2JvZHknKSkge1xuXHRcdGRpYWxvZy5maW5kKCcuV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKS50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0c2hvd1NldHRpbmdzUGFuZWwoe1xuXHRcdG9uU3VibWl0ID0gKCkgPT4ge30sXG5cdH06IHtcblx0XHRvblN1Ym1pdD86IChhcmcwOiB7c2V0dGluZ3M6IHN0cmluZ30pID0+IHZvaWQ7XG5cdH0gPSB7fSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPHRleHRhcmVhPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS5hdHRyKCdyb3dzJywgJzEwJyk7XG5cdFx0Y29uc3QgYXBwbHlCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU2V0dGluZy1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TZXR0aW5nLUNhbmNlbCcpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY2FuY2VsJykpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSAkKCc8ZGl2PicpLmFwcGVuZChpbnB1dCkuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGFwcGx5QnRuKS5hcHBlbmQoY2FuY2VsQnRuKTsgLy8g5ou85o6lXG5cblx0XHRjb25zdCBkaWFsb2cgPSB0aGlzLmNyZWF0ZURpYWxvZ0JveChpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3NfZGVzYycpLCBjb250ZW50LCA2MDAsICgpID0+IHtcblx0XHRcdGlmIChsb2NhbFN0b3JhZ2VbJ1dpa2lwbHVzX1NldHRpbmdzJ10pIHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS52YWwobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKTtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbChKU09OLnN0cmluZ2lmeShzZXR0aW5ncywgbnVsbCwgMikpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvLyBpZ25vcmVcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS5hdHRyKCdwbGFjZWhvbGRlcicsIGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19wbGFjZWhvbGRlcicpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRhcHBseUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBzYXZlZEJhbm5lciA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJhbm5lcicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX3NhdmVkJykpO1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSAkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbCgpIGFzIHN0cmluZztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdG9uU3VibWl0KHtzZXR0aW5nc30pO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoJycpLmFwcGVuZChzYXZlZEJhbm5lcik7XG5cdFx0XHRcdGF3YWl0IHNsZWVwKDE1MDApO1xuXHRcdFx0XHR0aGlzLmhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Tm90aWZpY2F0aW9uLmVycm9yKGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19ncmFtbWFyX2Vycm9yJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNhbmNlbEJ0bi5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyk7XG5cdFx0fSk7XG5cdH1cblxuXHRoaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cgPSAkKCdib2R5JykpIHtcblx0XHRkaWFsb2cuZmluZCgnLldpa2lwbHVzLUludGVyQm94LUNsb3NlJykudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdGJpbmRQcmVsb2FkRXZlbnRzKG9uUHJlbG9hZDogeyhhcmcwOiB7c2VjdGlvbk51bWJlcjogbnVtYmVyfSk6IHZvaWR9KSB7XG5cdFx0JCgnI3RvYycpXG5cdFx0XHQuY2hpbGRyZW4oJ3VsJylcblx0XHRcdC5maW5kKCdhJylcblx0XHRcdC5lYWNoKChpKSA9PiB7XG5cdFx0XHRcdCQodGhpcykub24oJ21vdXNlb3ZlcicsICgpID0+IHtcblx0XHRcdFx0XHQkKHRoaXMpLm9mZignbW91c2VvdmVyJyk7XG5cdFx0XHRcdFx0b25QcmVsb2FkKHtcblx0XHRcdFx0XHRcdHNlY3Rpb25OdW1iZXI6IGkgKyAxLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVSSgpO1xuIiwgIi8qKlxuICogV2lraXBsdXNcbiAqIEVyaWRhbnVzIFNvcmEgPHNvcmFAc291bmQubW9lPlxuICovXG5pbXBvcnQgJy4vd2lraXBsdXMubGVzcyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCBMb2cgZnJvbSAnLi91dGlscy9sb2cnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL2NvcmUvbm90aWZpY2F0aW9uJztcbmltcG9ydCBQYWdlIGZyb20gJy4vY29yZS9wYWdlJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3V0aWxzL3NldHRpbmdzJztcbmltcG9ydCBVSSBmcm9tICcuL2NvcmUvdWknO1xuaW1wb3J0IFdpa2kgZnJvbSAnLi9zZXJ2aWNlcy93aWtpJztcbmltcG9ydCBpMThuIGZyb20gJy4vdXRpbHMvaTE4bic7XG5cbiQoYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBQYWdlczogUmVjb3JkPG51bWJlciwgUGFnZT4gPSB7fTtcblx0Y29uc3QgaXNDdXJyZW50UGFnZUVtcHR5ID0gJCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggPiAwICYmIENvbnN0YW50cy5hcnRpY2xlSWQgPT09IDA7XG5cblx0LyoqXG5cdCAqIEdldCBwYWdlIGluc3RhbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHBhcmFtc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnJldmlzaW9uSWQg6aG16Z2i5L+u6K6i54mI5pys5Y+3XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMudGl0bGUg6aG16Z2i5qCH6aKYXG5cdCAqL1xuXHRjb25zdCBnZXRQYWdlID0gYXN5bmMgKHtyZXZpc2lvbklkID0gMCwgdGl0bGV9OiB7cmV2aXNpb25JZD86IG51bWJlcjsgdGl0bGU6IHN0cmluZ30pID0+IHtcblx0XHRpZiAoUGFnZXNbcmV2aXNpb25JZF0pIHtcblx0XHRcdHJldHVybiBQYWdlc1tyZXZpc2lvbklkXTtcblx0XHR9XG5cdFx0Y29uc3QgbmV3UGFnZSA9IG5ldyBQYWdlKHtcblx0XHRcdHJldmlzaW9uSWQsXG5cdFx0XHR0aXRsZSxcblx0XHR9KTtcblx0XHRhd2FpdCBuZXdQYWdlLmluaXQoKTtcblx0XHRQYWdlc1tyZXZpc2lvbklkXSA9IG5ld1BhZ2U7XG5cdFx0cmV0dXJuIFBhZ2VzW3JldmlzaW9uSWRdO1xuXHR9O1xuXG5cdExvZy5pbmZvKGBXaWtpcGx1cyBub3cgbG9hZGluZy4gVmVyc2lvbjogJHtDb25zdGFudHMudmVyc2lvbn1gKTtcblxuXHRpZiAoIXdpbmRvdy5tdykge1xuXHRcdGNvbnNvbGUubG9nKCdNZWRpYXdpa2kgSmF2YVNjcmlwdCBub3QgbG9hZGVkIG9yIG5vdCBhIE1lZGlhd2lraSB3ZWJzaXRlLicpO1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoIUNvbnN0YW50cy51c2VyR3JvdXBzPy5pbmNsdWRlcygnYXV0b2NvbmZpcm1lZCcpICYmICFDb25zdGFudHMudXNlckdyb3Vwcz8uaW5jbHVkZXMoJ2NvbmZpcm1lZCcpKSB7XG5cdFx0Tm90aWZpY2F0aW9uLmVycm9yKGkxOG4udHJhbnNsYXRlKCdub3RfYXV0b2NvbmZpcm1lZF91c2VyJykpO1xuXHRcdExvZy5pbmZvKGkxOG4udHJhbnNsYXRlKCdub3RfYXV0b2NvbmZpcm1lZF91c2VyJykpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghQ29uc3RhbnRzLmlzQXJ0aWNsZSB8fCBDb25zdGFudHMuYWN0aW9uICE9PSAndmlldycpIHtcblx0XHRMb2cuaW5mbygnTm90IGFuIGVkaXRhYmxlIHBhZ2UuIFN0b3AgaW5pdGlhbGl6YXRpb24uJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gSW5pdGlhbGl6ZSBjdXJyZW50IHBhZ2Ug6buY6K6k5Yid5aeL5YyW5b2T5YmN6aG16Z2iXG5cdHdpbmRvdy5fV2lraXBsdXNQYWdlcyA9IFBhZ2VzO1xuXHRjb25zdCBjdXJyZW50UGFnZU5hbWUgPSBDb25zdGFudHMuY3VycmVudFBhZ2VOYW1lO1xuXHRjb25zdCByZXZpc2lvbklkID0gQ29uc3RhbnRzLnJldmlzaW9uSWQ7XG5cdGNvbnN0IGN1cnJlbnRQYWdlID0gYXdhaXQgZ2V0UGFnZSh7XG5cdFx0cmV2aXNpb25JZCxcblx0XHR0aXRsZTogY3VycmVudFBhZ2VOYW1lLFxuXHR9KTtcblxuXHRjb25zdCBoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkID0gYXN5bmMgKHtcblx0XHRzZWN0aW9uTnVtYmVyLFxuXHRcdHNlY3Rpb25OYW1lLFxuXHRcdHRhcmdldFBhZ2VOYW1lLFxuXHR9OiB7XG5cdFx0c2VjdGlvbk51bWJlcj86IHN0cmluZyB8IG51bWJlcjtcblx0XHRzZWN0aW9uTmFtZT86IHN0cmluZztcblx0XHR0YXJnZXRQYWdlTmFtZTogc3RyaW5nO1xuXHR9KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc3QgaXNPdGhlclBhZ2UgPSB0YXJnZXRQYWdlTmFtZSAhPT0gY3VycmVudFBhZ2VOYW1lO1xuXHRcdGlmIChpc090aGVyUGFnZSAmJiBDb25zdGFudHMubGF0ZXN0UmV2aXNpb25JZCAhPT0gQ29uc3RhbnRzLnJldmlzaW9uSWQpIHtcblx0XHRcdC8vIOWcqOWOhuWPsueJiOacrOe8lui+keWFtuS7lumhtemdouaciemXrumimCDmmoLml7bkuI3mlK/mjIFcblx0XHRcdExvZy5lcnJvcignY3Jvc3NfcGFnZV9oaXN0b3J5X3JldmlzaW9uX2VkaXRfd2FybmluZycpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZXZpc2lvbklkID0gaXNPdGhlclBhZ2UgPyBhd2FpdCBXaWtpLmdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlKHRhcmdldFBhZ2VOYW1lKSA6IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXG5cdFx0Y29uc3QgcGFnZSA9IGF3YWl0IGdldFBhZ2Uoe3JldmlzaW9uSWQsIHRpdGxlOiB0YXJnZXRQYWdlTmFtZX0pO1xuXHRcdGNvbnN0IGN1c3RvbVN1bW1hcnkgPSBTZXR0aW5ncy5nZXRTZXR0aW5nKCdkZWZhdWx0U3VtbWFyeScsIHtcblx0XHRcdHNlY3Rpb25OYW1lOiBzZWN0aW9uTmFtZSBhcyBzdHJpbmcsXG5cdFx0XHRzZWN0aW9uTnVtYmVyOiBzZWN0aW9uTnVtYmVyIGFzIG51bWJlcixcblx0XHRcdHNlY3Rpb25UYXJnZXROYW1lOiB0YXJnZXRQYWdlTmFtZSxcblx0XHR9KTtcblx0XHRjb25zdCBzdW1tYXJ5ID1cblx0XHRcdGN1c3RvbVN1bW1hcnkgfHxcblx0XHRcdChzZWN0aW9uTmFtZVxuXHRcdFx0XHQ/IGAvKiAke3NlY3Rpb25OYW1lfSAqLyAke2kxOG4udHJhbnNsYXRlKCdkZWZhdWx0X3N1bW1hcnlfc3VmZml4Jyl9YFxuXHRcdFx0XHQ6IGkxOG4udHJhbnNsYXRlKCdkZWZhdWx0X3N1bW1hcnlfc3VmZml4JykpO1xuXHRcdGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHROb3RpZmljYXRpb24uc3VjY2VzcyhpMThuLnRyYW5zbGF0ZSgnbG9hZGluZycpKTtcblx0XHR9LCAyMDApO1xuXHRcdGNvbnN0IHNlY3Rpb25Db250ZW50ID0gYXdhaXQgcGFnZS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyIGFzIG51bWJlcixcblx0XHR9KTtcblx0XHRjb25zdCBpc0VkaXRIaXN0b3J5UmV2aXNpb24gPSAhaXNPdGhlclBhZ2UgJiYgQ29uc3RhbnRzLmxhdGVzdFJldmlzaW9uSWQgIT09IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXHRcdGNvbnN0IGVzY1RvRXhpdCA9XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NfdG9fZXhpdF9xdWlja2VkaXQnKSA9PT0gdHJ1ZSB8fCAvLyDlhbzlrrnogIHorr7nva5rZXlcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY190b19leGl0X3F1aWNrZWRpdCcpID09PSAndHJ1ZScgfHxcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY1RvRXhpdFF1aWNrRWRpdCcpID09PSB0cnVlIHx8XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NUb0V4aXRRdWlja0VkaXQnKSA9PT0gJ3RydWUnO1xuXHRcdGNvbnN0IGN1c3RvbUVkaXRUYWdzID0gU2V0dGluZ3MuZ2V0U2V0dGluZygnY3VzdG9tX2VkaXRfdGFncycpO1xuXHRcdGNvbnN0IGRlZmF1bHRFZGl0VGFnczogc3RyaW5nW10gPSBbXTtcblx0XHRjb25zdCBlZGl0VGFncyA9IGN1c3RvbUVkaXRUYWdzPy5sZW5ndGggPyBjdXN0b21FZGl0VGFncyA6IGRlZmF1bHRFZGl0VGFncztcblx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHRcdE5vdGlmaWNhdGlvbi5lbXB0eSgpO1xuXG5cdFx0aWYgKGlzRWRpdEhpc3RvcnlSZXZpc2lvbikge1xuXHRcdFx0Tm90aWZpY2F0aW9uLndhcm5pbmcoaTE4bi50cmFuc2xhdGUoJ2hpc3RvcnlfZWRpdF93YXJuaW5nJykpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNob3VsZFNob3dDcmVhdGVQYWdlVGlwID0gaXNPdGhlclBhZ2UgPyAhcmV2aXNpb25JZCA6IGlzQ3VycmVudFBhZ2VFbXB0eTtcblxuXHRcdFVJLnNob3dRdWlja0VkaXRQYW5lbCh7XG5cdFx0XHR0aXRsZTogYCR7aTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF90b3BidG4nKX0ke1xuXHRcdFx0XHRpc0VkaXRIaXN0b3J5UmV2aXNpb24gPyBpMThuLnRyYW5zbGF0ZSgnaGlzdG9yeV9lZGl0X3dhcm5pbmcnKSA6ICcnXG5cdFx0XHR9YCxcblx0XHRcdGNvbnRlbnQ6IHNob3VsZFNob3dDcmVhdGVQYWdlVGlwID8gaTE4bi50cmFuc2xhdGUoJ2NyZWF0ZV9wYWdlX3RpcCcpIDogc2VjdGlvbkNvbnRlbnQsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdFx0b25CYWNrOiBVSS5oaWRlUXVpY2tFZGl0UGFuZWwsXG5cdFx0XHRvblBhcnNlOiAod2lraVRleHQpID0+IHtcblx0XHRcdFx0cmV0dXJuIHBhZ2UucGFyc2VXaWtpVGV4dCh3aWtpVGV4dCk7XG5cdFx0XHR9LFxuXHRcdFx0b25FZGl0OiBhc3luYyAoe2NvbnRlbnQsIHN1bW1hcnksIGlzTWlub3JFZGl0fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBlZGl0UGF5bG9hZDogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0XHRcdFx0Y29udGVudCxcblx0XHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHQuLi4oc2VjdGlvbk51bWJlciA9PT0gLTEgPyB7fSA6IHtzZWN0aW9uOiBzZWN0aW9uTnVtYmVyfSksXG5cdFx0XHRcdFx0XHQuLi4oZWRpdFRhZ3MubGVuZ3RoID8ge3RhZ3M6IGVkaXRUYWdzLmpvaW4oJ3wnKX0gOiB7fSksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKGlzTWlub3JFZGl0KSB7XG5cdFx0XHRcdFx0ZWRpdFBheWxvYWQuY29uZmlnLm1pbm9yID0gJ3RydWUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVkaXRQYXlsb2FkLmNvbmZpZy5ub3RtaW5vciA9ICd0cnVlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBwYWdlLmVkaXQoZWRpdFBheWxvYWQpO1xuXHRcdFx0fSxcblx0XHRcdGVzY0V4aXQ6IGVzY1RvRXhpdCxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQgPSAoKSA9PiB7XG5cdFx0VUkuc2hvd1NpbXBsZVJlZGlyZWN0UGFuZWwoe1xuXHRcdFx0b25FZGl0OiBhc3luYyAoe3RpdGxlLCBzdW1tYXJ5LCBmb3JjZU92ZXJ3cml0ZSA9IGZhbHNlfSkgPT4ge1xuXHRcdFx0XHRjb25zdCBwYWdlID0gYXdhaXQgZ2V0UGFnZSh7dGl0bGV9KTtcblx0XHRcdFx0Y29uc3QgY3VycmVudFBhZ2VOYW1lID0gQ29uc3RhbnRzLmN1cnJlbnRQYWdlTmFtZTtcblx0XHRcdFx0Y29uc3QgY29udGVudG1vZGVsID0gcGFnZS5jb250ZW50bW9kZWw7XG5cdFx0XHRcdGlmIChzdW1tYXJ5ID09PSAnJykge1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3RfZnJvbV9zdW1tYXJ5JywgW3RpdGxlLCBjdXJyZW50UGFnZU5hbWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBjb250ZW50ID0gKCgpID0+IHtcblx0XHRcdFx0XHRsZXQgY29udGVudDtcblx0XHRcdFx0XHRzd2l0Y2ggKGNvbnRlbnRtb2RlbCkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnamF2YXNjcmlwdCc6XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSBgLyogI1JFRElSRUNUICovbXcubG9hZGVyLmxvYWQoXCIke2xvY2F0aW9uLnByb3RvY29sfS8vJHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhdGlvbi5ob3N0XG5cdFx0XHRcdFx0XHRcdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9pbmRleC5waHA/dGl0bGU9JHttdy51dGlsLndpa2lVcmxlbmNvZGUoXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VOYW1lXG5cdFx0XHRcdFx0XHRcdCl9JmFjdGlvbj1yYXcmY3R5cGU9dGV4dC9qYXZhc2NyaXB0XCIpO2A7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnY3NzJzpcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IGAvKiAjUkVESVJFQ1QgKi9AaW1wb3J0IHVybCgke2xvY2F0aW9uLnByb3RvY29sfS8vJHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhdGlvbi5ob3N0XG5cdFx0XHRcdFx0XHRcdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9pbmRleC5waHA/dGl0bGU9JHttdy51dGlsLndpa2lVcmxlbmNvZGUoXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VOYW1lXG5cdFx0XHRcdFx0XHRcdCl9JmFjdGlvbj1yYXcmY3R5cGU9dGV4dC9jc3MpO2A7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnU2NyaWJ1bnRvJzpcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IGByZXR1cm4gcmVxdWlyZSBbWyR7Y3VycmVudFBhZ2VOYW1lfV1dYDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICd3aWtpdGV4dCc6XG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYCNSRURJUkVDVCBbWyR7Y3VycmVudFBhZ2VOYW1lfV1dYDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0XHR9KSgpO1xuXHRcdFx0XHRjb25zdCBwYXlsb2FkOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0XHRjb250ZW50LFxuXHRcdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAoIWZvcmNlT3ZlcndyaXRlKSB7XG5cdFx0XHRcdFx0cGF5bG9hZC5jb25maWcuY3JlYXRlb25seSA9ICd0cnVlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBwYWdlLmVkaXQocGF5bG9hZCk7XG5cdFx0XHR9LFxuXHRcdFx0b25TdWNjZXNzOiAoe3RpdGxlfSkgPT4ge1xuXHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gQ29uc3RhbnRzLmFydGljbGVQYXRoLnJlcGxhY2UoL1xcJDEvZ2ksIHRpdGxlKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkID0gKCkgPT4ge1xuXHRcdFVJLnNob3dTZXR0aW5nc1BhbmVsKHtcblx0XHRcdG9uU3VibWl0OiAoe3NldHRpbmdzfSkgPT4ge1xuXHRcdFx0XHRKU09OLnBhcnNlKHNldHRpbmdzKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1dpa2lwbHVzX1NldHRpbmdzJywgc2V0dGluZ3MpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVQcmVsb2FkID0gYXN5bmMgKHtzZWN0aW9uTnVtYmVyfToge3NlY3Rpb25OdW1iZXI6IG51bWJlcn0pID0+IHtcblx0XHRhd2FpdCBjdXJyZW50UGFnZS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdH0pO1xuXHR9O1xuXG5cdFVJLmluc2VydFRvcFF1aWNrRWRpdEVudHJ5KGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyhoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0TGlua0VkaXRFbnRyaWVzKGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbihoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uKGhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmJpbmRQcmVsb2FkRXZlbnRzKGhhbmRsZVByZWxvYWQpO1xufSk7XG5cbmV4cG9ydCB7fTtcbiIsICJpbXBvcnQgJy4vV2lraXBsdXMubGVzcyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Jlc2l6ZVdpa2lwbHVzfSBmcm9tICcuL3Jlc2l6ZSc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oYXN5bmMgZnVuY3Rpb24gV2lraXBsdXMoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dJc0FydGljbGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dJc0FydGljbGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7J3Zpc3VhbGVkaXRvci1lbmFibGUnOiBpc1ZlRW5hYmxlfSA9IG13LnVzZXIub3B0aW9ucy5nZXQoKSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcblxuXHQvKiBzZWUgPGh0dHBzOi8vZ2l0aHViLmNvbS9XaWtpcGx1cy9XaWtpcGx1cy9pc3N1ZXMvNjU+ICovXG5cdGlmIChpc1ZlRW5hYmxlKSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQudmlzdWFsRWRpdG9yLmNvcmUnKTtcblx0fVxuXG5cdC8vIGltcG9ydCBtYWluIGZ1bmN0aW9uXG5cdGF3YWl0IGltcG9ydCgnLi9tb2R1bGVzL2luZGV4Jyk7XG5cblx0Ly8gcmVzaXplIFdpa2lwbHVzIHdpbmRvd1xuXHRyZXNpemVXaWtpcGx1cygkYm9keSk7XG59KTtcbiIsICJjb25zdCByZXNpemVXaWtpcGx1cyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblx0XHRjb25zdCAkd2lraXBsdXNJbnRlcmJveCA9ICRib2R5LmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveCcpO1xuXHRcdGlmICgkd2lraXBsdXNJbnRlcmJveCkge1xuXHRcdFx0Y29uc3QgY2xpZW50V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRcdGNvbnN0IGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHRcdGNvbnN0IGRpYWxvZ1dpZHRoID0gTWF0aC5taW4oY2xpZW50V2lkdGgsIDYwMCk7XG5cdFx0XHRjb25zdCBzY3JvbGxUb3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSB8fCAwO1xuXHRcdFx0JHdpa2lwbHVzSW50ZXJib3guY3NzKCdtYXJnaW4tbGVmdCcsIGNsaWVudFdpZHRoIC8gMiAtIGRpYWxvZ1dpZHRoIC8gMik7XG5cdFx0XHQkd2lraXBsdXNJbnRlcmJveC5jc3MoJ3RvcCcsIHNjcm9sbFRvcCArIGNsaWVudEhlaWdodCAqIDAuMik7XG5cdFx0XHQkd2lraXBsdXNJbnRlcmJveC5jc3MoJ21heC13aWR0aCcsIGBjYWxjKCR7d2luZG93V2lkdGh9cHggLSAyZW0pYCk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cmVzaXplV2lraXBsdXN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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S0FBQSxPQUFBcEQsYUFBQSxHQUFBRCxnQkFBQTtBQUdOZ0QsbUJBQWVDLEtBQUs7RUFDckIsQ0FBQztBQUFBLFdBbEJrQ1UsU0FBQUMsS0FBQTtBQUFBLFdBQUFOLFVBQUFoUCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUFvUDtBQUFBLEdBQUEsQ0FrQmxDOyIsCiAgIm5hbWVzIjogWyJpbml0X3dpa2lwbHVzIiwgIl9fZXNtIiwgIkNvbnN0YW50cyIsICJjb25zdGFudHNfZGVmYXVsdCIsICJpbml0X2NvbnN0YW50cyIsICJ2ZXJzaW9uIiwgImlzQXJ0aWNsZSIsICJ3aW5kb3ciLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjdXJyZW50UGFnZU5hbWUiLCAicmVwbGFjZSIsICJhcnRpY2xlSWQiLCAicmV2aXNpb25JZCIsICJsYXRlc3RSZXZpc2lvbklkIiwgImFydGljbGVQYXRoIiwgInNjcmlwdFBhdGgiLCAiYWN0aW9uIiwgInNraW4iLCAidXNlckdyb3VwcyIsICJ3aWtpSWQiLCAidXNlckFnZW50IiwgImNvbmNhdCIsICJJMThuIiwgImkxOG5fZGVmYXVsdCIsICJpbml0X2kxOG4iLCAibGFuZ3VhZ2UiLCAiaTE4bkRhdGEiLCAic2Vzc2lvblVwZGF0ZUxvZyIsICJjb25zdHJ1Y3RvciIsICJKU09OIiwgInBhcnNlIiwgImxvY2FsU3RvcmFnZSIsICJuYXZpZ2F0b3IiLCAidG9Mb3dlckNhc2UiLCAiaTE4bkNhY2hlIiwgImdldEl0ZW0iLCAiX2kiLCAiX09iamVjdCRrZXlzIiwgIk9iamVjdCIsICJrZXlzIiwgImxlbmd0aCIsICJrZXkiLCAic2V0SXRlbSIsICJ0cmFuc2xhdGUiLCAicGxhY2Vob2xkZXJzIiwgInJlc3VsdCIsICJpMThuRGF0YUxhbmciLCAibG9hZExhbmd1YWdlIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJlbnRyaWVzIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImluZGV4IiwgInBsYWNlaG9sZGVyIiwgInZhbHVlIiwgImVyciIsICJlIiwgImYiLCAiX3RoaXMiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiaW5jbHVkZXMiLCAicmVzcG9uc2UiLCAiZmV0Y2giLCAianNvbiIsICJub3dWZXJzaW9uIiwgInB1c2giLCAiX192ZXJzaW9uIiwgImNvbnNvbGUiLCAiaW5mbyIsICJzdHJpbmdpZnkiLCAiV2lraXBsdXNFcnJvciIsICJMb2ciLCAibG9nX2RlZmF1bHQiLCAiaW5pdF9sb2ciLCAiRXJyb3IiLCAiY29kZSIsICJtZXNzYWdlIiwgImRlYnVnIiwgImVycm9yIiwgImVycm9yQ29kZSIsICJwYXlsb2FkcyIsICJ0ZW1wbGF0ZSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJpIiwgInYiLCAiUmVnRXhwIiwgIk5vdGlmaWNhdGlvbiIsICJub3RpZmljYXRpb25fZGVmYXVsdCIsICJpbml0X25vdGlmaWNhdGlvbiIsICJpbml0IiwgIiQiLCAiYXBwZW5kIiwgImRpc3BsYXkiLCAidGV4dCIsICJ0eXBlIiwgImNhbGxiYWNrIiwgImFkZENsYXNzIiwgImZpbmQiLCAibGFzdCIsICJmYWRlSW4iLCAiYmluZCIsICJjbGVhciIsICJzZWxmIiwgIm9uIiwgInNsaWRlTGVmdCIsICJzdWNjZXNzIiwgIndhcm5pbmciLCAiY2hpbGRyZW4iLCAiZmlyc3QiLCAiZmFkZU91dCIsICJyZW1vdmUiLCAic2V0VGltZW91dCIsICJlbXB0eSIsICJlYWNoIiwgImVsZSIsICJkZWxheSIsICJzcGVlZCIsICJjc3MiLCAiYW5pbWF0ZSIsICJsZWZ0IiwgIlJlcXVlc3RzIiwgInJlcXVlc3RzX2RlZmF1bHQiLCAiaW5pdF9yZXF1ZXN0cyIsICJiYXNlIiwgImxvY2F0aW9uIiwgInByb3RvY29sIiwgImhvc3QiLCAicXVlcnkiLCAidXJsIiwgIlVSTCIsICJfaTIiLCAiX09iamVjdCRrZXlzMiIsICJzZWFyY2hQYXJhbXMiLCAiY3JlZGVudGlhbHMiLCAiaGVhZGVycyIsICJwb3N0IiwgInBheWxvYWQiLCAiZm9ybSIsICJGb3JtRGF0YSIsICJfaTMiLCAiX09iamVjdCRlbnRyaWVzIiwgIm1ldGhvZCIsICJib2R5IiwgIldpa2kiLCAid2lraV9kZWZhdWx0IiwgImluaXRfd2lraSIsICJwYWdlSW5mb0NhY2hlIiwgImdldEVkaXRUb2tlbiIsICJtZXRhIiwgImZvcm1hdCIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgImdldFBhZ2VJbmZvIiwgIl94IiwgIl90aGlzMiIsICJ0aXRsZSIsICJwYXJhbXMiLCAicHJvcCIsICJydnByb3AiLCAicmV2aWRzIiwgInRpbWVzdGFtcCIsICJyZXZpZCIsICJjb250ZW50bW9kZWwiLCAidGl0bGVzIiwgInBhZ2VzIiwgInBhZ2VLZXkiLCAicGFnZUluZm8iLCAicmV2aXNpb25zIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRXaWtpVGV4dCIsICJfeDIiLCAic2VjdGlvbiIsICJydnNlY3Rpb24iLCAicGFyc2VXaWtpVGV4dCIsICJfeDMiLCAid2lraXRleHQiLCAiX2NvbmZpZyIsICJwc3QiLCAiZWRpdCIsICJfeDQiLCAiY29udGVudCIsICJlZGl0VG9rZW4iLCAiYWRkaXRpb25hbENvbmZpZyIsICJ0b2tlbiIsICJiYXNldGltZXN0YW1wIiwgImdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlIiwgIl90aGlzMyIsICJQYWdlIiwgInBhZ2VfZGVmYXVsdCIsICJpbml0X3BhZ2UiLCAiaW5pdGVkIiwgImlzTmV3UGFnZSIsICJzZWN0aW9uQ2FjaGUiLCAiX3RoaXM0IiwgInByb21pc2VBcnIiLCAiZ2V0VGltZXN0YW1wIiwgImdldENvbnRlbnRNb2RlbCIsICJQcm9taXNlIiwgImFsbCIsICJfdGhpczUiLCAibG9hZGVyIiwgInVzaW5nIiwgInVzZXIiLCAiX3RoaXM2IiwgIl90aGlzNyIsICJfdGhpczgiLCAic2VjIiwgIndpa2lUZXh0IiwgIl90aGlzOSIsICJfdGhpczAiLCAiY3JlYXRlb25seSIsICJTZXR0aW5ncyIsICJzZXR0aW5nc19kZWZhdWx0IiwgImluaXRfc2V0dGluZ3MiLCAiZ2V0U2V0dGluZyIsICJvYmplY3QiLCAidyIsICJzZXR0aW5ncyIsICJjdXN0b21TZXR0aW5nRnVuY3Rpb24iLCAiRnVuY3Rpb24iLCAiX2k0IiwgIl9PYmplY3Qka2V5czMiLCAia2V5MiIsICJwYXJzZVF1ZXJ5IiwgInJlZyIsICJtYXRjaCIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJpbml0X2hlbHBlcnMiLCAic2xlZXAiLCAic2xlZXBfZGVmYXVsdCIsICJpbml0X3NsZWVwIiwgInRpbWUiLCAicmVzb2x2ZSIsICJVSSIsICJ1aV9kZWZhdWx0IiwgImluaXRfdWkiLCAicXVpY2tFZGl0UGFuZWxWaXNpYmxlIiwgInNjcm9sbFRvcCIsICJjcmVhdGVEaWFsb2dCb3giLCAid2lkdGgiLCAiY2xpZW50V2lkdGgiLCAiaW5uZXJXaWR0aCIsICJjbGllbnRIZWlnaHQiLCAiaW5uZXJIZWlnaHQiLCAiZGlhbG9nV2lkdGgiLCAiTWF0aCIsICJtaW4iLCAiZGlhbG9nQm94IiwgInRvcCIsICJkb2N1bWVudCIsICJodG1sIiwgInBhcmVudCIsICJhZGRFdmVudExpc3RlbmVyIiwgIm9uYmVmb3JldW5sb2FkIiwgImJpbmREcmFnZ2luZyIsICJlbGVtZW50IiwgIl9lbGVtZW50JHBhcmVudCRvZmZzZSIsICJfZWxlbWVudCRwYXJlbnQkb2Zmc2UyIiwgImJhc2VYIiwgImNsaWVudFgiLCAiYmFzZVkiLCAiY2xpZW50WSIsICJiYXNlT2Zmc2V0WCIsICJvZmZzZXQiLCAiYmFzZU9mZnNldFkiLCAiZTIiLCAidW5iaW5kIiwgIm9mZiIsICJhZGRGdW5jdGlvbkJ1dHRvbiIsICJpZCIsICJidXR0b24iLCAiYXR0ciIsICJpbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbiIsICJvbkNsaWNrIiwgImluc2VydFNldHRpbmdzUGFuZWxCdXR0b24iLCAiaW5zZXJ0VG9wUXVpY2tFZGl0RW50cnkiLCAidG9wQnRuIiwgInRvcEJ0bkxpbmsiLCAic2VjdGlvbk51bWJlciIsICJ0YXJnZXRQYWdlTmFtZSIsICJhZnRlciIsICJpbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyIsICJzZWN0aW9uQnRuIiwgImVkaXRVUkwiLCAic2VjdGlvbkxhYmVsIiwgInNlY3Rpb25UYXJnZXRMYWJlbCIsICJzZWN0aW9uVGFyZ2V0TmFtZSIsICJjbG9uZU5vZGUiLCAicHJldiIsICJjbG9uZSIsICJzZWN0aW9uTmFtZSIsICJ0cmltIiwgIl9zZWN0aW9uQnRuIiwgImJlZm9yZSIsICJpbnNlcnRMaW5rRWRpdEVudHJpZXMiLCAiaHJlZiIsICJjbGFzcyIsICJfcGFyYW1zJHNlY3Rpb24iLCAic2hvd1F1aWNrRWRpdFBhbmVsIiwgInN1bW1hcnkiLCAib25CYWNrIiwgIm9uUGFyc2UiLCAib25FZGl0IiwgImVzY0V4aXQiLCAiaGlkZVF1aWNrRWRpdFBhbmVsIiwgImJhY2tCdG4iLCAianVtcEJ0biIsICJpbnB1dEJveCIsICJwcmV2aWV3Qm94IiwgInN1bW1hcnlCb3giLCAiZWRpdFN1Ym1pdEJ0biIsICJwcmV2aWV3U3VibWl0QnRuIiwgImlzTWlub3JFZGl0IiwgIm1hcmdpbiIsICJlZGl0Qm9keSIsICJ2YWwiLCAicHJlbG9hZEJhbm5lciIsICJ0aW1lciIsICJEYXRlIiwgIm5vdyIsICJlZGl0QmFubmVyIiwgImlzIiwgInVzZVRpbWUiLCAidG9TdHJpbmciLCAicmVsb2FkIiwgImxvZyIsICJjdHJsS2V5IiwgIndoaWNoIiwgInNoaWZ0S2V5IiwgInRyaWdnZXIiLCAicHJldmVudERlZmF1bHQiLCAic3RvcFByb3BhZ2F0aW9uIiwgInNob3dTaW1wbGVSZWRpcmVjdFBhbmVsIiwgIm9uU3VjY2VzcyIsICJfdGhpczEiLCAiaW5wdXQiLCAic3VtbWFyeUlucHV0VGl0bGUiLCAic3VtbWFyeUlucHV0IiwgImFwcGx5QnRuIiwgImNhbmNlbEJ0biIsICJjb250aW51ZUJ0biIsICJkaWFsb2ciLCAiZm9yY2VPdmVyd3JpdGUiLCAiaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwiLCAiZXJyb3IyIiwgInNob3dTZXR0aW5nc1BhbmVsIiwgIm9uU3VibWl0IiwgIl90aGlzMTAiLCAic2F2ZWRCYW5uZXIiLCAiaGlkZVNldHRpbmdzUGFuZWwiLCAiYmluZFByZWxvYWRFdmVudHMiLCAib25QcmVsb2FkIiwgIm1vZHVsZXNfZXhwb3J0cyIsICJpbml0X21vZHVsZXMiLCAiX2NvbnN0YW50c19kZWZhdWx0JHVzIiwgIl9jb25zdGFudHNfZGVmYXVsdCR1czIiLCAiUGFnZXMiLCAiaXNDdXJyZW50UGFnZUVtcHR5IiwgImdldFBhZ2UiLCAiX3JlZjAiLCAicmV2aXNpb25JZDIiLCAibmV3UGFnZSIsICJfeDUiLCAiX1dpa2lwbHVzUGFnZXMiLCAiY3VycmVudFBhZ2UiLCAiaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCIsICJfcmVmMSIsICJpc090aGVyUGFnZSIsICJwYWdlIiwgImN1c3RvbVN1bW1hcnkiLCAic2VjdGlvbkNvbnRlbnQiLCAiaXNFZGl0SGlzdG9yeVJldmlzaW9uIiwgImVzY1RvRXhpdCIsICJjdXN0b21FZGl0VGFncyIsICJkZWZhdWx0RWRpdFRhZ3MiLCAiZWRpdFRhZ3MiLCAiY2xlYXJUaW1lb3V0IiwgInNob3VsZFNob3dDcmVhdGVQYWdlVGlwIiwgIl9yZWYxMCIsICJzdW1tYXJ5MiIsICJlZGl0UGF5bG9hZCIsICJ0YWdzIiwgImpvaW4iLCAibWlub3IiLCAibm90bWlub3IiLCAiX3g3IiwgIl94NiIsICJoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQiLCAiX3JlZjExIiwgImN1cnJlbnRQYWdlTmFtZTIiLCAiY29udGVudDIiLCAidXRpbCIsICJ3aWtpVXJsZW5jb2RlIiwgIl94OCIsICJoYW5kbGVTZXR0aW5nc0J1dHRvbkNsaWNrZWQiLCAiaGFuZGxlUHJlbG9hZCIsICJfcmVmMTIiLCAiX3g5IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAicmVzaXplV2lraXBsdXMiLCAiJGJvZHkiLCAid2luZG93V2lkdGgiLCAiJHdpa2lwbHVzSW50ZXJib3giLCAiZ2V0Qm9keSIsICJ0aGVuIiwgIl9XaWtpcGx1cyIsICJ3Z0FjdGlvbiIsICJ3Z0lzQXJ0aWNsZSIsICJpc1ZlRW5hYmxlIiwgIm9wdGlvbnMiLCAiV2lraXBsdXMiLCAiX3gwIl0KfQo=
