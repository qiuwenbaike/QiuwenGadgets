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
      userAgent = `Qiuwen/1.1 Wikiplus/${this.version} (${this.wikiId})`;
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
          for (const key of Object.keys(i18nCache)) {
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
          for (const [index, placeholder] of placeholders.entries()) {
            result = result.replace(`$${index + 1}`, placeholder);
          }
        }
        return result;
      }
      async loadLanguage(language) {
        if (this.sessionUpdateLog.includes(language)) {
          return;
        }
        try {
          const response = await (await fetch(`https://gitcdn.qiuwen.net.cn/InterfaceAdmin/Wikiplus/raw/branch/dev/languages/${language}.json`)).json();
          const nowVersion = localStorage.getItem("Wikiplus_LanguageVersion") || "000";
          this.sessionUpdateLog.push(language);
          if (response.__version !== nowVersion || !(language in this.i18nData)) {
            console.info(`Update ${language} support to version ${response.__version}`);
            this.i18nData[language] = response;
            localStorage.setItem("Wikiplus_i18nCache", JSON.stringify(this.i18nData));
          }
        } catch {
        }
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
        console.debug(`[Wikiplus-DEBUG] ${message}`);
      },
      info(message = "") {
        console.info(`[Wikiplus-INFO] ${message}`);
      },
      error(errorCode, payloads = []) {
        let template = i18n_default.translate(errorCode);
        if (payloads.length > 0) {
          for (const [i, v] of payloads.entries()) {
            template = template.replace(new RegExp(`\\${i + 1}`, "ig"), v);
          }
        }
        console.error(`[Wikiplus-ERROR] ${template}`);
        throw new WikiplusError(`${template}`, errorCode);
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
        $("#MoeNotification").append($("<div>").addClass("MoeNotification-notice").addClass(`MoeNotification-notice-${type}`).append(`<span>${text}</span>`));
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
      base: `${location.protocol}//${location.host}${constants_default.scriptPath}/api.php`,
      async get(query) {
        const url = new URL(Requests.base);
        for (const key of Object.keys(query)) {
          if (Array.isArray(query[key])) {
            url.searchParams.append(key, query[key].join("|"));
          } else {
            url.searchParams.append(key, query[key]);
          }
        }
        const response = await fetch(url, {
          credentials: "same-origin",
          headers: {
            "Api-User-Agent": constants_default.userAgent
          }
        });
        return await response.json();
      },
      async post(payload) {
        const url = new URL(Requests.base);
        const form = new FormData();
        for (const [key, value] of Object.entries(payload)) {
          if (Array.isArray(value)) {
            form.append(key, value.join("|"));
          } else {
            form.append(key, value);
          }
        }
        const response = await fetch(url, {
          method: "POST",
          body: form,
          credentials: "same-origin",
          headers: {
            "Api-User-Agent": constants_default.userAgent
          }
        });
        return await response.json();
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
      async getEditToken() {
        const response = await requests_default.get({
          action: "query",
          meta: "tokens",
          format: "json"
        });
        if (response.query && response.query.tokens && response.query.tokens.csrftoken && response.query.tokens.csrftoken !== "+\\") {
          return response.query.tokens.csrftoken;
        }
        log_default.error("fail_to_get_edittoken");
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
      async getPageInfo({
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
            if (this.pageInfoCache[title]) {
              return {
                timestamp: this.pageInfoCache[title].timestamp,
                revisionId: this.pageInfoCache[title].revid,
                contentmodel: this.pageInfoCache[title].contentmodel
              };
            }
            params.titles = title;
          }
          const response = await requests_default.get(params);
          if (response.query && response.query.pages) {
            const pageKey = Object.keys(response.query.pages)[0];
            const contentmodel = response.query.pages[pageKey].contentmodel;
            if (pageKey === "-1") {
              this.pageInfoCache[title] = {
                contentmodel
              };
              return {
                contentmodel
              };
            }
            const pageInfo = response.query.pages[pageKey].revisions[0];
            if (title) {
              this.pageInfoCache[title] = {
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
      async getWikiText({
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
          const response = await requests_default.get(params);
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
      }
      /**
       * 解析 Wikitext
       *
       * @param {string} wikitext wikitext
       * @param {string} title 页面标题
       * @param {Object} config 设置
       * @return {Promise<string>} 解析结果 HTML
       */
      async parseWikiText(wikitext, title = "", config = {}) {
        try {
          const response = await requests_default.post({
            format: "json",
            action: "parse",
            text: wikitext,
            title,
            pst: "true",
            ...config
          });
          if (response.parse && response.parse.text) {
            return response.parse.text["*"];
          }
        } catch {
          log_default.error("cant_parse_wikitext");
        }
      }
      /**
       * 编辑页面
       *
       * @param {EditParams} param
       */
      async edit({
        title,
        content,
        editToken,
        timestamp,
        config = {},
        additionalConfig = {}
      }) {
        let response;
        try {
          response = await requests_default.post({
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
            throw new Error(`
                        ${i18n_default.translate("hit_abusefilter")}:${response.edit.info.replace("/Hit AbuseFilter: /ig", "")}
                        <br>
                        <div style="font-size: smaller;">${response.edit.warning}</div>
                    `);
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
      }
      /**
       * 获得指定页面最新修订编号
       * Get latest revisionId of a page.
       *
       * @param {string} title
       */
      async getLatestRevisionIdForPage(title) {
        const {
          revisionId
        } = await this.getPageInfo({
          title
        });
        return revisionId;
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
      async init({
        editToken
      } = {
        editToken: ""
      }) {
        const promiseArr = [this.getTimestamp(), this.getContentModel()];
        if (!editToken) {
          promiseArr.push(this.getEditToken());
        }
        await Promise.all(promiseArr);
        this.inited = true;
        log_default.info(`Page initialization for ${this.title}#${this.revisionId} finished.`);
      }
      /**
       * 获得 EditToken
       * Get EditToken
       */
      async getEditToken() {
        await mw.loader.using("mediawiki.user");
        if (mw.user.tokens.get("csrfToken") && mw.user.tokens.get("csrfToken") !== "+\\") {
          this.editToken = mw.user.tokens.get("csrfToken");
          return;
        }
        this.editToken = await wiki_default.getEditToken();
      }
      /**
       * 获得编辑基准时间戳
       * Get Base Timestamp
       */
      async getTimestamp() {
        const {
          timestamp,
          revisionId
        } = await wiki_default.getPageInfo({
          revisionId: this.revisionId,
          title: this.title
        });
        this.timestamp = timestamp;
        if (revisionId) {
          this.revisionId = revisionId;
          this.isNewPage = false;
        }
      }
      /**
       * 获得页面内容模型
       *
       * @param {Object} config
       * @param {string} config.revisionId
       */
      async getContentModel() {
        const {
          contentmodel
        } = await wiki_default.getPageInfo({
          revisionId: this.revisionId,
          title: this.title
        });
        this.contentmodel = contentmodel || "wikitext";
      }
      /**
       * 获得 WikiText
       *
       * @param {Object} config
       * @param {string|number} config.section
       * @param {string} config.revisionId
       */
      async getWikiText({
        section = ""
      } = {}) {
        const sec = section === -1 ? 0 : section;
        if (this.sectionCache[sec]) {
          return this.sectionCache[sec];
        }
        const wikiText = await wiki_default.getWikiText({
          section: sec,
          revisionId: this.revisionId
        });
        log_default.info(`Wikitext of ${this.title}#${section} fetched.`);
        this.sectionCache[sec] = wikiText;
        return wikiText;
      }
      /**
       * 解析 WikiText
       *
       * @param {string} wikitext
       */
      async parseWikiText(wikitext) {
        return await wiki_default.parseWikiText(wikitext, this.title);
      }
      /**
       * 编辑页面
       *
       * @param {ApiEditPageParams} payload
       */
      async edit(payload) {
        if (!this.editToken) {
          log_default.error("fail_to_get_edittoken");
          return;
        }
        if (!this.timestamp && !this.isNewPage) {
          log_default.error("fail_to_get_timestamp");
          return;
        }
        return await wiki_default.edit({
          title: this.title,
          editToken: this.editToken,
          ...this.timestamp ? {
            timestamp: this.timestamp
          } : {},
          ...payload,
          additionalConfig: {
            ...this.isNewPage ? {
              createonly: this.isNewPage
            } : {}
          }
        });
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
          const customSettingFunction = new Function(`return ${settings[key]}`);
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
            for (const key2 of Object.keys(object)) {
              result = result.replace(`\${${key2}}`, object[key2]);
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
          return $(`#${id}`);
        } else if (constants_default.skin === "moeskin") {
          $(".more-actions-list").first().append(button);
          return $(`#${id}`);
        } else if ($("#p-cactions").length > 0) {
          $("#p-cactions ul").append(button);
          return $(`#${id}`);
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
        const topBtnLink = $("<a>").attr("href", "javascript:void(0)").text(`${i18n_default.translate("quickedit_topbtn")}`);
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
            }).text(`(${i18n_default.translate("quickedit_sectionbtn")})`).on("click", () => {
              onClick({
                targetPageName: params["title"],
                sectionNumber: Number.parseInt(params["section"], 10) ?? -1
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
        onParse = async () => {
        },
        onEdit = async () => {
        },
        escExit = false
      }) {
        const self = this;
        this.scrollTop = $(document).scrollTop() || 0;
        if (this.quickEditPanelVisible) {
          this.hideQuickEditPanel();
        }
        this.quickEditPanelVisible = true;
        window.addEventListener("close", window.onbeforeunload = () => `${i18n_default.translate("onclose_confirm")}`);
        const isNewPage = $(".noarticletext").length > 0;
        const backBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Back").addClass("Wikiplus-Btn").text(`${i18n_default.translate("back")}`);
        const jumpBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Jump").addClass("Wikiplus-Btn").append($("<a>").attr("href", "#Wikiplus-Quickedit").text(`${i18n_default.translate("goto_editbox")}`));
        const inputBox = $("<textarea>").attr("id", "Wikiplus-Quickedit");
        const previewBox = $("<div>").attr("id", "Wikiplus-Quickedit-Preview-Output");
        const summaryBox = $("<input>").attr("id", "Wikiplus-Quickedit-Summary-Input").attr("placeholder", `${i18n_default.translate("summary_placehold")}`);
        const editSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Submit").text(`${i18n_default.translate(isNewPage ? "publish_page" : "publish_change")}(Ctrl+S)`);
        const previewSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Preview-Submit").text(`${i18n_default.translate("preview")}`);
        const isMinorEdit = $("<div>").append($("<input>").attr({
          type: "checkbox",
          id: "Wikiplus-Quickedit-MinorEdit"
        })).append($("<label>").attr("for", "Wikiplus-Quickedit-MinorEdit").text(`${i18n_default.translate("mark_minoredit")}(Ctrl+Shift+S)`)).css({
          margin: "5px 5px 5px -3px",
          display: "inline"
        });
        const editBody = $("<div>").append(backBtn, jumpBtn, previewBox, inputBox, summaryBox, $("<br>"), isMinorEdit, editSubmitBtn, previewSubmitBtn);
        this.createDialogBox(title, editBody, 1e3, () => {
          $("#Wikiplus-Quickedit").val(content);
          $("#Wikiplus-Quickedit-Summary-Input").val(summary);
        });
        $("#Wikiplus-Quickedit-Back").on("click", onBack);
        $("#Wikiplus-Quickedit-Preview-Submit").on("click", async function() {
          const preloadBanner = $("<div>").addClass("Wikiplus-Banner").text(`${i18n_default.translate("loading_preview")}`);
          const wikiText = $("#Wikiplus-Quickedit").val();
          $(this).attr("disabled", "disabled");
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(preloadBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          $("html, body").animate({
            scrollTop: self.scrollTop
          }, 200);
          const result = await onParse(wikiText);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut("100", () => {
            $("#Wikiplus-Quickedit-Preview-Output").html(`<hr><div class="mw-body-content">${result}</div><hr>`);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn("100");
            $("#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          });
        });
        $("#Wikiplus-Quickedit-Submit").on("click", async () => {
          const timer = Date.now();
          const editBanner = $("<div>").addClass("Wikiplus-Banner").text(`${i18n_default.translate("submitting_edit")}`);
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
            await onEdit(payload);
            const useTime = Date.now() - timer;
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").css("background", "rgba(6, 239, 92, 0.44)");
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").text(`${i18n_default.translate("edit_success", [useTime.toString()])}`);
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
        });
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
        onEdit = async () => {
        },
        onSuccess = () => {
        }
      }) {
        const input = $("<input>").addClass("Wikiplus-InterBox-Input").attr("id", "Wikiplus-SR-Title");
        const summaryInputTitle = $("<p>").text(i18n_default.translate("redirect_summary_desc"));
        const summaryInput = $("<input>").addClass("Wikiplus-InterBox-Input").attr("id", "Wikiplus-SR-Summary");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Cancel").text(i18n_default.translate("cancel"));
        const continueBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Continue").text(i18n_default.translate("continue"));
        const content = $("<div>").append(input).append(summaryInputTitle).append(summaryInput).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("redirect_desc"), content, 600);
        applyBtn.on("click", async () => {
          const title = $("#Wikiplus-SR-Title").val();
          const summary = $("#Wikiplus-SR-Summary").val();
          $(".Wikiplus-InterBox-Content").html(`<div class="Wikiplus-Banner">${i18n_default.translate("submitting_edit")}</div>`);
          try {
            await onEdit({
              title,
              summary,
              forceOverwrite: false
            });
            $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
            this.hideSimpleRedirectPanel(dialog);
            onSuccess({
              title
            });
          } catch (error) {
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").text(error.message);
            if (error.code === "articleexists") {
              $(".Wikiplus-InterBox-Content").append($("<hr>")).append(continueBtn).append(cancelBtn);
              cancelBtn.on("click", () => {
                this.hideSimpleRedirectPanel(dialog);
              });
              continueBtn.on("click", async () => {
                $(".Wikiplus-InterBox-Content").html(`<div class="Wikiplus-Banner">${i18n_default.translate("submitting_edit")}</div>`);
                try {
                  await onEdit({
                    title,
                    summary,
                    forceOverwrite: true
                  });
                  $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
                  this.hideSimpleRedirectPanel(dialog);
                  onSuccess({
                    title
                  });
                } catch (error2) {
                  $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
                  $(".Wikiplus-Banner").text(error2.message);
                }
              });
            }
          }
        });
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
        applyBtn.on("click", async () => {
          const savedBanner = $("<div>").addClass("Wikiplus-Banner").text(i18n_default.translate("wikiplus_settings_saved"));
          const settings = $("#Wikiplus-Setting-Input").val();
          try {
            onSubmit({
              settings
            });
            $(".Wikiplus-InterBox-Content").html("").append(savedBanner);
            await sleep_default(1500);
            this.hideSettingsPanel(dialog);
          } catch {
            notification_default.error(i18n_default.translate("wikiplus_settings_grammar_error"));
          }
        });
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
    $(async () => {
      var _constants_default$us, _constants_default$us2;
      const Pages = {};
      const isCurrentPageEmpty = $(".noarticletext").length > 0 && constants_default.articleId === 0;
      const getPage = async ({
        revisionId: revisionId2 = 0,
        title
      }) => {
        if (Pages[revisionId2]) {
          return Pages[revisionId2];
        }
        const newPage = new page_default({
          revisionId: revisionId2,
          title
        });
        await newPage.init();
        Pages[revisionId2] = newPage;
        return Pages[revisionId2];
      };
      log_default.info(`Wikiplus now loading. Version: ${constants_default.version}`);
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
      const currentPage = await getPage({
        revisionId,
        title: currentPageName
      });
      const handleQuickEditButtonClicked = async ({
        sectionNumber,
        sectionName,
        targetPageName
      }) => {
        const isOtherPage = targetPageName !== currentPageName;
        if (isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId) {
          log_default.error("cross_page_history_revision_edit_warning");
          return;
        }
        const revisionId2 = isOtherPage ? await wiki_default.getLatestRevisionIdForPage(targetPageName) : constants_default.revisionId;
        const page = await getPage({
          revisionId: revisionId2,
          title: targetPageName
        });
        const customSummary = settings_default.getSetting("defaultSummary", {
          sectionName,
          sectionNumber,
          sectionTargetName: targetPageName
        });
        const summary = customSummary || (sectionName ? `/* ${sectionName} */ ${i18n_default.translate("default_summary_suffix")}` : i18n_default.translate("default_summary_suffix"));
        const timer = setTimeout(() => {
          notification_default.success(i18n_default.translate("loading"));
        }, 200);
        const sectionContent = await page.getWikiText({
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
          title: `${i18n_default.translate("quickedit_topbtn")}${isEditHistoryRevision ? i18n_default.translate("history_edit_warning") : ""}`,
          content: shouldShowCreatePageTip ? i18n_default.translate("create_page_tip") : sectionContent,
          summary,
          onBack: ui_default.hideQuickEditPanel,
          onParse: (wikiText) => {
            return page.parseWikiText(wikiText);
          },
          onEdit: async ({
            content,
            summary: summary2,
            isMinorEdit
          }) => {
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
            await page.edit(editPayload);
          },
          escExit: escToExit
        });
      };
      const handleSimpleRedirectButtonClicked = () => {
        ui_default.showSimpleRedirectPanel({
          onEdit: async ({
            title,
            summary,
            forceOverwrite = false
          }) => {
            const page = await getPage({
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
                  content2 = `/* #REDIRECT */mw.loader.load("${location.protocol}//${location.host}${constants_default.scriptPath}/index.php?title=${mw.util.wikiUrlencode(currentPageName2)}&action=raw&ctype=text/javascript");`;
                  break;
                case "css":
                  content2 = `/* #REDIRECT */@import url(${location.protocol}//${location.host}${constants_default.scriptPath}/index.php?title=${mw.util.wikiUrlencode(currentPageName2)}&action=raw&ctype=text/css);`;
                  break;
                case "Scribunto":
                  content2 = `return require [[${currentPageName2}]]`;
                  break;
                case "wikitext":
                default:
                  content2 = `#REDIRECT [[${currentPageName2}]]`;
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
            await page.edit(payload);
          },
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
      const handlePreload = async ({
        sectionNumber
      }) => {
        await currentPage.getWikiText({
          section: sectionNumber
        });
      };
      ui_default.insertTopQuickEditEntry(handleQuickEditButtonClicked);
      ui_default.insertSectionQuickEditEntries(handleQuickEditButtonClicked);
      ui_default.insertLinkEditEntries(handleQuickEditButtonClicked);
      ui_default.insertSimpleRedirectButton(handleSimpleRedirectButtonClicked);
      ui_default.insertSettingsPanelButton(handleSettingsButtonClicked);
      ui_default.bindPreloadEvents(handlePreload);
    });
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
      $wikiplusInterbox.css("max-width", `calc(${windowWidth}px - 2em)`);
    }
  });
};
//! src/Wikiplus/Wikiplus.ts
void (0, import_ext_gadget.getBody)().then(async function Wikiplus($body) {
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
    await mw.loader.using("ext.visualEditor.core");
  }
  await Promise.resolve().then(() => (init_modules(), modules_exports));
  resizeWikiplus($body);
});

})();

/* </nowiki> */

