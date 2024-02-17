/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-easy-archive.js}
 * @base {@link https://meta.wikimedia.org/w/index.php?oldid=18915644}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EasyArchive}
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

// dist/EasyArchive/EasyArchive.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/EasyArchive/options.json
var mountPointSelector = "#footer-info,.page-info";
var collectionPointSelector = ".easy_archive_data_point_collection";
var version = "3.0";
//! src/EasyArchive/modules/constant.ts
var WG_SKIN = mw.config.get("skin");
var DIS_SUPPORT_PAGES_REGEX = [/^File:.*$/, /^MediaWiki:.*$/, /^Module:.*$/, /^Category:.*$/, /^Template:.*$/, /^Special:.*$/, /^User:.*\/?.*\.js$/, /^User:.*\/?.*\.css$/, /^User:.*\/?.*\.json$/];
//! src/EasyArchive/modules/PareStr.ts
var PareStr = class {
  str;
  left;
  delim;
  right;
  constructor(pare_string, config) {
    this.str = pare_string;
    this.left = "(";
    this.delim = ":";
    this.right = ")";
    if (typeof config !== "string") {
      config = String(config);
    }
    if (pare_string.length > 6 && /[#%@][Ss][Ee][Tt]/.test(pare_string.slice(0, 4)) && !config.includes("ignore-set")) {
      [, , , , this.left, this.delim, this.right] = pare_string;
      if (this.left === this.right || this.left === this.delim || this.right === this.delim) {
        throw new SyntaxError("Pound set statement has repetitive characters. E.g. '#set|:|' is illegal.");
      }
    }
  }
  find(key) {
    var _this$str$split$;
    key = this.left + key + this.delim;
    if (!this.str.includes(key)) {
      return null;
    }
    return (_this$str$split$ = this.str.split(key)[1]) === null || _this$str$split$ === void 0 ? void 0 : _this$str$split$.split(this.right)[0];
  }
};
//! src/EasyArchive/modules/core.jsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
//! src/EasyArchive/modules/elementWrap.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
var elementWrap = (id, innerElement) => {
  if (WG_SKIN === "citizen") {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("section", {
      className: "page-info__item",
      id
    }, innerElement);
  } else if (["vector", "vector-2022", "gongbi"].includes(WG_SKIN) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("li", {
      id
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    id
  }, innerElement);
};
//! src/EasyArchive/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    delete: (0, import_ext_gadget2.localize)({
      en: "delete",
      "zh-hans": "删除",
      "zh-hant": "刪除"
    }),
    archive: (0, import_ext_gadget2.localize)({
      en: "archive",
      "zh-hans": "存档",
      "zh-hant": "存檔"
    }),
    supports: (0, import_ext_gadget2.localize)({
      en: "Easy Archive is enabled on this talk page",
      "zh-hans": "本讨论页面使用 Easy Archive 快速存档",
      "zh-hant": "此頁面使用 Easy Archive"
    }),
    others_page: (0, import_ext_gadget2.localize)({
      en: "Easy Archive is not enabled.",
      "zh-hans": "此页面是他人的用户讨论页面，因此不支持 Easy Archive 快速存档。",
      "zh-hant": "此頁面為他人用戶討論頁面，故不支援 Easy Archive 快速存檔。"
    }),
    to_enable: (0, import_ext_gadget2.localize)({
      en: "This page is not using Easy Archive.",
      "zh-hans": "此页面没有启用 Easy Archive。",
      "zh-hant": "本頁没有啟用 Easy Archive。"
    }),
    enable_on_generic_page: (0, import_ext_gadget2.localize)({
      en: "This page is not your user talk page. However Easy Archive still can be used if needed.To enable it, add {{Easy Archive|to=[Archive location]}} template to this page.",
      "zh-hans": "此页面不是您的用户讨论页面。不过，若需要，此页面可以启用 Easy Archive。若要在此页面使用 Easy Archive，请在页面上添加模板 {{Easy Archive|to=存档位置}}。",
      "zh-hant": "此頁面不是您的用戶討論頁面。不過，若需要，此頁面可以啟用 Easy Archive。若要在此頁面使用 Easy Archive，請在頁面上添加模板 {{Easy Archive|to=存檔位置}}。"
    }),
    please_enable: (0, import_ext_gadget2.localize)({
      en: "Add {{Easy Archive|to=[Archive location]}} to this page to start using Easy Archive.",
      "zh-hans": "请在此页面加入 {{Easy Archive|to=存档地址}} 来启用 Easy Archive。",
      "zh-hant": "請在此頁面加入 {{Easy Archive|to=存檔位置}} 來啟用 Easy Archive。"
    }),
    please_enable_elaborate: (0, import_ext_gadget2.localize)({
      en: "You have the Easy Archive functionality enabled but your talk page hasn't been configured yet. To take advantage of Easy Archive, add {{Easy Archive|to=[Archive location]}} template to this page.",
      "zh-hans": "您的账号已经支持 Easy Archive，但是，为了开始使用该功能，您还需要在自己的用户讨论页面上添加模板 {{Easy Archive|to=存档位置}}。",
      "zh-hant": "您的賬號已經支持 Easy Archive，但是，為了開始使用該功能，您還需要在自己的用戶討論頁面上添加模板 {{Easy Archive|to=存檔位置}}。"
    }),
    left_par_split: (0, import_ext_gadget2.localize)({
      en: " (",
      zh: "（"
    }),
    right_par: (0, import_ext_gadget2.localize)({
      en: ")",
      zh: "）"
    }),
    period: (0, import_ext_gadget2.localize)({
      en: ".",
      zh: "。"
    }),
    archive_path_colon_split: (0, import_ext_gadget2.localize)({
      en: "Archive location: ",
      "zh-hans": "存档地址：",
      "zh-hant": "存檔至："
    }),
    loading_section_i: (0, import_ext_gadget2.localize)({
      en: "Loading section $1",
      "zh-hans": "正在读取第 $1 节的内容",
      "zh-hant": "正在讀取第 $1 節的內容"
    }),
    deleting_section_i: (0, import_ext_gadget2.localize)({
      en: "Deleting section $1",
      "zh-hans": "正在删除第 $1 节的内容",
      "zh-hant": "正在刪除第 $1 節的內容"
    }),
    done_section_i: (0, import_ext_gadget2.localize)({
      en: "Section $1 has been archived to $2",
      "zh-hans": "已经将第 $1 节存档到 $2",
      "zh-hant": "已經將第 $1 節存檔到 $2"
    }),
    done_deleting_section_i: (0, import_ext_gadget2.localize)({
      en: "Section $1 has been deleted",
      "zh-hans": "已经将第 $1 节删除",
      "zh-hant": "已經將第 $1 節刪除"
    }),
    being_archived: (0, import_ext_gadget2.localize)({
      en: "being archived",
      "zh-hans": "存档中",
      "zh-hant": "存檔中"
    }),
    being_deleted: (0, import_ext_gadget2.localize)({
      en: "being deleted",
      "zh-hans": "删除中",
      "zh-hant": "刪除中"
    }),
    already_archived: (0, import_ext_gadget2.localize)({
      en: "archived",
      "zh-hans": "已存档",
      "zh-hant": "已存檔"
    }),
    already_deleted: (0, import_ext_gadget2.localize)({
      en: "deleted",
      "zh-hans": "已删除",
      "zh-hant": "已刪除"
    }),
    others_talk_elaborate: (0, import_ext_gadget2.localize)({
      en: "This page is another user's talk page. You cannot archive the topics on this page for him/her",
      "zh-hans": "这是另一名用户的讨论页面，您不能代替另一名用户存档。",
      "zh-hant": "這是另一名用戶的討論頁面，您不能代替另一名用戶存檔。"
    }),
    page_not_supported: (0, import_ext_gadget2.localize)({
      en: "This page is not supported by Easy Archive.",
      "zh-hans": "此页面不支持 Easy Archive。",
      "zh-hant": "此頁面不支持 Easy Archive。"
    }),
    page_not_supported_elaborate: (0, import_ext_gadget2.localize)({
      en: "These pages are not supported by Easy Archive: File, Template, Module, MediaWiki, Category, Special, JavaScript, CSS, JSON.",
      "zh-hans": "这些页面不受 Easy Archive 支持：File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。",
      "zh-hant": "這些頁面不受 Easy Archive 支持：File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。"
    }),
    problem_with_archive_location_main_space: (0, import_ext_gadget2.localize)({
      en: 'Currently the archive location of this page, "$1", is under the article namespace, where archives should not be normally directed to. Please check if you have the correct archive location.',
      "zh-hans": "此页面目前的存档地址是“$1”，在条目名称空间之下。一般而言不应向条目名称空间进行存档，请检查存档地址。",
      "zh-hant": "此頁面當前的存檔地址是「$1」，在條目名稱空間之下。一般而言不應向條目名稱空間進行存檔，請檢查存檔地址。"
    }),
    problem_with_archive_location_same_page: (0, import_ext_gadget2.localize)({
      en: 'Currently the archive location of this page, "$1", is this page itself, Easy archive cannot operate like this. ',
      "zh-hans": "此页面目前的存档地址是“$1”，和此页面名称相同。Easy Archive 无法按此地址存档。",
      "zh-hant": "此頁面當前的存檔地址是「$1」，和此頁面名稱相同。Easy Archive 無法按此地址存檔。"
    }),
    archive_summary: (0, import_ext_gadget2.localize)({
      en: "archive section",
      "zh-hans": "存档段落",
      "zh-hant": "存檔段落"
    }),
    delete_summary: (0, import_ext_gadget2.localize)({
      en: "delete section",
      "zh-hans": "删除段落",
      "zh-hant": "刪除段落"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EasyArchive/modules/core.jsx
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/EasyArchive/modules/isInBlacklist.ts
var isInBlacklist = (blacklist) => {
  var _iterator2 = _createForOfIteratorHelper(blacklist), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const element = _step2.value;
      if (element.test(mw.config.get("wgPageName"))) {
        return true;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return false;
};
//! src/EasyArchive/modules/core.jsx
var import_ext_gadget5 = require("ext.gadget.Toastify");
var easyArchive = () => {
  var _window$easy_archive$, _settings_span$innerH;
  const expose = /* @__PURE__ */ (() => {
    const asyncPost = (param, callback) => {
      const api = (0, import_ext_gadget4.initMwApi)("EasyAchive/".concat(version));
      void api.postWithToken("csrf", param).then(callback);
    };
    const getPage = (title, callback) => {
      const param = {
        action: "query",
        prop: ["revisions"],
        rvprop: ["ids", "flags", "timestamp", "user", "userid", "size", "comment", "tags", "content"],
        format: "json",
        formatversion: "2",
        titles: title
      };
      asyncPost(param, callback);
    };
    const getPageSection = (title, section, callback) => {
      const param = {
        action: "query",
        prop: ["revisions"],
        rvprop: ["content"],
        format: "json",
        formatversion: "2",
        titles: title,
        rvsection: section
      };
      asyncPost(param, callback);
    };
    const pickPageContent = (data) => {
      if (data.query && data.query.pages && data.query.pages[0] && data.query.pages[0].revisions[0]) {
        return data.query.pages[0].revisions[0].content;
      }
      return false;
    };
    const tellPageExist = (data) => {
      if (typeof data !== "object" || !data.query || !data.query.pages || data.query.pages[0].missing) {
        return false;
      }
      return true;
    };
    const edit = (title, section, text, summary, callback) => {
      const param = {
        action: "edit",
        format: "json",
        formatversion: "2",
        title,
        summary,
        text
      };
      if (section) {
        param.section = section;
      }
      asyncPost(param, callback);
    };
    const editAppend = (page, added_content, summary, callback) => {
      getPage(page, (data) => {
        const original_content = tellPageExist(data) === false ? "" : pickPageContent(data);
        edit(page, null, String(original_content) + added_content, summary, callback);
      });
    };
    const archiveSection = (title, section, targetTitle, callback, summary) => {
      getPageSection(title, section, (data) => {
        editAppend(targetTitle, "\n\n".concat(pickPageContent(data)), summary);
        edit(title, section.toString(), "", summary, callback);
      });
    };
    const deleteSection = (title, section, callback, summary) => {
      edit(title, section.toString(), "", summary, callback);
    };
    return {
      archive_section: archiveSection,
      delete_section: deleteSection
    };
  })();
  let settings_string = "#set%|?									\ndisplay section delete link	%sec-del|1?	\ndisplay section archive line	%sec-arc|1?	\ndisplay control bar at top	%top-bar|0?	\narchive location				%arc-loc|?	\nsubsection effectiveness		%sub-sec|2?	\nconfirm action				%confirm|0?	\nis this data initialized		%data-init|0? \n";
  let settings = new PareStr(settings_string);
  let my_user_talk = null;
  const never_enable_on_these_pages_regex = (_window$easy_archive$ = window.easy_archive.never_enable_on_these_pages_regex) !== null && _window$easy_archive$ !== void 0 ? _window$easy_archive$ : [];
  const [settings_span] = document.querySelectorAll(collectionPointSelector);
  const settings_in_page = new PareStr((_settings_span$innerH = settings_span === null || settings_span === void 0 ? void 0 : settings_span.innerHTML) !== null && _settings_span$innerH !== void 0 ? _settings_span$innerH : "");
  if (settings_in_page.find("data-init") === "1") {
    settings_string = settings_span.innerHTML;
    settings = new PareStr(settings_string);
  }
  const on_user_talk = mw.config.get("wgNamespaceNumber") === 3;
  my_user_talk = on_user_talk && (() => {
    let page_name = mw.config.get("wgPageName").split(":");
    page_name[0] = "";
    page_name = page_name.join("");
    [page_name] = page_name.split("/");
    const user_name = mw.config.get("wgUserName");
    return user_name.split("_").join("").split(" ").join("") === page_name.split("_").join("").split(" ").join("");
  })();
  const has_template = settings_in_page.find("data-init") === "1";
  const others_user_talk = my_user_talk === false && on_user_talk === true;
  const on_article = mw.config.get("wgNamespaceNumber") === 0;
  const on_hist_version = mw.config.get("wgCurRevisionId") - mw.config.get("wgRevisionId") !== 0;
  const sanitize_html = (string) => (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;")
  );
  const message = (tag, ...para_list) => {
    try {
      let content = getMessage(tag);
      if (para_list && para_list.length > 0) {
        var _iterator3 = _createForOfIteratorHelper(para_list.entries()), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const [_i, element] = _step3.value;
            content = content.replace("$".concat(_i + 1), element);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return content;
    } catch {
      return "(!) undefined language content";
    }
  };
  const nominal_sections = ((count) => {
    const arr = Array.from({
      length: count
    });
    for (let _i = 0; _i < count; _i++) {
      arr[_i] = false;
    }
    return arr;
  })(window.easy_archive.section_count);
  const actual_section = (nominal_section_number) => {
    let less = 0;
    for (let _i = 0; _i < nominal_section_number; _i++) {
      if (nominal_sections[_i] === true) {
        less++;
      }
    }
    return nominal_section_number - less;
  };
  const report_doneness_ui = (section_number, doneness_type, to, ongoing_or_done) => {
    let tag_ding;
    let tag_section;
    let ding_type;
    let ding_autohide;
    if (ongoing_or_done === "ongoing") {
      ding_type = "info";
      ding_autohide = true;
      if (doneness_type === "delete") {
        tag_ding = "deleting_section_i";
        tag_section = "being_deleted";
      } else if (doneness_type === "archive") {
        tag_ding = "loading_section_i";
        tag_section = "being_archived";
      }
    } else if (ongoing_or_done === "done") {
      ding_type = "success";
      ding_autohide = false;
      if (doneness_type === "delete") {
        tag_ding = "done_deleting_section_i";
        tag_section = "already_deleted";
      } else if (doneness_type === "archive") {
        tag_ding = "done_section_i";
        tag_section = "already_archived";
      }
    }
    const actions = {
      ding: () => {
        (0, import_ext_gadget5.toastify)({
          text: message(tag_ding, section_number.toString(), to),
          close: !ding_autohide,
          duration: ding_autohide ? 3e3 : -1
        }, ding_type);
      },
      section_link: () => {
        const node = document.querySelector(".easy-archive-section-id-span-order-".concat(section_number));
        const pnode = node.parentNode;
        for (let _i = 1; _i < pnode.childNodes.length - 2; _i++) {
          pnode.childNodes[_i].style.display = "none";
        }
        node.innerHTML = message(tag_section);
        node.style.display = "inline";
        node.style.color = "rgb(0 0 0/.5)";
      }
    };
    return actions;
  };
  const delete_section_core = (section_number, _nominal) => {
    const actual_section_number = actual_section(section_number);
    report_doneness_ui(_nominal, "delete", "", "ongoing").ding();
    expose.delete_section(mw.config.get("wgPageName"), actual_section_number, () => {
      report_doneness_ui(_nominal, "delete", "", "done").ding();
      report_doneness_ui(_nominal, "delete", "", "done").section_link();
      nominal_sections[section_number] = true;
    }, message("delete_summary"));
  };
  const delete_section = (section_number, _nominal) => {
    report_doneness_ui(_nominal, "delete", "", "ongoing").section_link();
    delete_section_core(section_number, _nominal);
  };
  const archive_section_core = (section_number, _nominal) => {
    const actual_section_number = actual_section(section_number);
    const to = settings.find("arc-loc");
    report_doneness_ui(_nominal, "archive", to, "ongoing").ding();
    expose.archive_section(mw.config.get("wgPageName"), actual_section_number, to, () => {
      report_doneness_ui(_nominal, "archive", to, "done").ding();
      report_doneness_ui(_nominal, "archive", to, "done").section_link();
      nominal_sections[section_number] = true;
    }, message("archive_summary"));
  };
  const archive_section = (section_number, _nominal) => {
    const to = settings.find("arc-loc");
    report_doneness_ui(_nominal, "archive", to, "ongoing").section_link();
    archive_section_core(section_number, _nominal);
  };
  const elaborate_notice = (notice_tag_name) => {
    const notice_tag_dictionary = {
      please_enable_elaborate: ["please_enable_elaborate"],
      others_talk_elaborate: ["others_talk_elaborate"],
      enable_on_generic_page: ["enable_on_generic_page"],
      problem_with_archive_location_main_space: ["problem_with_archive_location_main_space", "warning", "long", false, [sanitize_html(settings.find("arc-loc"))]],
      problem_with_archive_location_same_page: ["problem_with_archive_location_same_page", "warning", "long", false, [sanitize_html(settings.find("arc-loc"))]],
      page_not_supported_elaborate: ["page_not_supported_elaborate"]
    };
    const notice_set = notice_tag_dictionary[notice_tag_name] || false;
    if (notice_set !== false) {
      const [ntag, ntype, nttl, npersist, nsubst] = notice_set;
      const toastifyInstance = (0, import_ext_gadget5.toastify)({
        node: /* @__PURE__ */ import_ext_gadget3.default.createElement("span", null, message(ntag, ...nsubst)),
        close: nttl === "long",
        duration: nttl === "long" ? -1 : nttl,
        onClick: () => {
          if (npersist) {
            return;
          }
          toastifyInstance.hideToast();
        }
      }, ntype);
    }
  };
  let i = 0;
  let j = 0;
  let ele;
  let nominal;
  let actual;
  const pipe_html = /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
    class: "mw-editsection-divider"
  }, " | ");
  const section_delete_interface_inhibit = settings.find("sec-del") === "0" || settings.find("data-init") === "0";
  const section_archive_interface_inhibit = settings.find("sec-arc") === "0" || settings.find("data-init") === "0";
  let section_delete_interface_html;
  let section_archive_interface_html;
  const section_id_span_html = (order_no) => /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
    class: ["easy-archive-section-id-span", "easy-archive-section-id-span-order-".concat(order_no)],
    style: {
      display: "none"
    }
  }, "section");
  const [footer_info_ele] = document.querySelectorAll(mountPointSelector);
  if (!footer_info_ele) {
    return;
  }
  if (on_article || on_hist_version || isInBlacklist(never_enable_on_these_pages_regex)) {
  } else if (isInBlacklist(DIS_SUPPORT_PAGES_REGEX)) {
    footer_info_ele.prepend(elementWrap("easy_archive_enable_notice", /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
      style: {
        color: "inherit"
      },
      onClick: (event) => {
        event.preventDefault();
        elaborate_notice("page_not_supported_elaborate");
      }
    }, message("page_not_supported"))));
  } else if (mw.config.get("wgPageName") === settings.find("arc-loc")) {
    elaborate_notice("problem_with_archive_location_same_page");
  } else if (has_template && !others_user_talk) {
    if (/.+:.+/.test(settings.find("arc-loc")) !== true) {
      elaborate_notice("problem_with_archive_location_main_space");
    }
    const normal_function_inject_interface = () => {
      const editSectionCollection = document.querySelectorAll(".mw-editsection");
      for (i = 0; i < editSectionCollection.length; i++) {
        ele = editSectionCollection[i];
        const ve = /[&?]veaction=edit/.test(ele.childNodes[1].href);
        const child_node_number = ve ? 3 : 1;
        if (ele.parentNode.tagName.toLowerCase() === "h2" && ele.parentNode.id !== "firstHeading" && decodeURIComponent(ele.childNodes[child_node_number].href.split(/[&?]title=/)[1].split("&")[0]) === mw.config.get("wgPageName")) {
          actual = Number.parseInt(ele.childNodes[child_node_number].href.split(/[&?]section=/)[1].split("&")[0], 10);
          nominal = i - j + 1;
          section_delete_interface_html = section_delete_interface_inhibit ? /* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null) : /* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, pipe_html, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
            onClick: (event) => {
              event.preventDefault();
              delete_section(actual, nominal);
            }
          }, message("delete")));
          section_archive_interface_html = section_archive_interface_inhibit ? /* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null) : /* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, pipe_html, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
            onClick: (event) => {
              event.preventDefault();
              archive_section(actual, nominal);
            }
          }, message("archive")));
          ele.childNodes[child_node_number].after(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, section_delete_interface_html, section_archive_interface_html, section_id_span_html(nominal.toString())));
        } else {
          j++;
        }
      }
      window.easy_archive.section_count = i - j + 1;
      footer_info_ele.prepend(elementWrap("easy_archive_supports_notice", /* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, message("supports"), message("left_par_split"), message("archive_path_colon_split"), /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
        href: "/wiki/".concat(sanitize_html(settings.find("arc-loc")))
      }, sanitize_html(settings.find("arc-loc"))), message("right_par"), message("period"))));
    };
    normal_function_inject_interface();
  } else if (others_user_talk === true) {
    footer_info_ele.prepend(elementWrap("easy_archive_enable_notice", /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
      style: {
        color: "inherit"
      },
      onClick: (event) => {
        event.preventDefault();
        elaborate_notice("others_talk_elaborate");
      }
    }, message("others_page"))));
  } else if (my_user_talk === false) {
    footer_info_ele.prepend(elementWrap("easy_archive_enable_notice", /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
      style: {
        color: "inherit"
      },
      onClick: (event) => {
        event.preventDefault();
        elaborate_notice("enable_on_generic_page");
      }
    }, message("to_enable"))));
  } else {
    footer_info_ele.prepend(elementWrap("easy_archive_enable_notice", /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
      style: {
        color: "inherit"
      },
      onClick: (event) => {
        event.preventDefault();
        elaborate_notice("please_enable_elaborate");
      }
    }, message("please_enable"))));
  }
};
//! src/EasyArchive/EasyArchive.tsx
(function easyArchiveLoad() {
  if (mw.config.get("wgNamespaceNumber") < 0 || mw.config.get("wgPageName") === "Qiuwen:首页" || !document.querySelectorAll(mountPointSelector).length) {
    return;
  }
  if (!window.easy_archive) {
    window.easy_archive = {
      never_enable_on_these_pages_regex: [],
      section_count: null
    };
  }
  easyArchive();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9QYXJlU3RyLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2NvcmUuanN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2VsZW1lbnRXcmFwLnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2lzSW5CbGFja2xpc3QudHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwiY29sbGVjdGlvblBvaW50U2VsZWN0b3JcIjogXCIuZWFzeV9hcmNoaXZlX2RhdGFfcG9pbnRfY29sbGVjdGlvblwiLFxuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImNvbnN0IFdHX1NLSU46IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKTtcbmNvbnN0IERJU19TVVBQT1JUX1BBR0VTX1JFR0VYID0gW1xuXHQvXkZpbGU6LiokLyxcblx0L15NZWRpYVdpa2k6LiokLyxcblx0L15Nb2R1bGU6LiokLyxcblx0L15DYXRlZ29yeTouKiQvLFxuXHQvXlRlbXBsYXRlOi4qJC8sXG5cdC9eU3BlY2lhbDouKiQvLFxuXHQvXlVzZXI6LipcXC8/LipcXC5qcyQvLFxuXHQvXlVzZXI6LipcXC8/LipcXC5jc3MkLyxcblx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXTtcblxuZXhwb3J0IHtXR19TS0lOLCBESVNfU1VQUE9SVF9QQUdFU19SRUdFWH07XG4iLCAiLy8gbWluaWZpZWQgY29kZSBkZXBlbmRlbmN5IGZ1bmN0aW9uc1xuY2xhc3MgUGFyZVN0ciB7XG5cdHN0cjogc3RyaW5nO1xuXHRsZWZ0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGRlbGltOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdHJpZ2h0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0Y29uc3RydWN0b3IocGFyZV9zdHJpbmc6IHN0cmluZywgY29uZmlnOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuXHRcdHRoaXMuc3RyID0gcGFyZV9zdHJpbmc7XG5cdFx0dGhpcy5sZWZ0ID0gJygnO1xuXHRcdHRoaXMuZGVsaW0gPSAnOic7XG5cdFx0dGhpcy5yaWdodCA9ICcpJztcblx0XHRpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdGNvbmZpZyA9IFN0cmluZyhjb25maWcpO1xuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHRwYXJlX3N0cmluZy5sZW5ndGggPiA2ICYmXG5cdFx0XHQvWyMlQF1bU3NdW0VlXVtUdF0vLnRlc3QocGFyZV9zdHJpbmcuc2xpY2UoMCwgNCkpICYmXG5cdFx0XHQhY29uZmlnLmluY2x1ZGVzKCdpZ25vcmUtc2V0Jylcblx0XHQpIHtcblx0XHRcdFssICwgLCAsIHRoaXMubGVmdCwgdGhpcy5kZWxpbSwgdGhpcy5yaWdodF0gPSBwYXJlX3N0cmluZztcblx0XHRcdGlmICh0aGlzLmxlZnQgPT09IHRoaXMucmlnaHQgfHwgdGhpcy5sZWZ0ID09PSB0aGlzLmRlbGltIHx8IHRoaXMucmlnaHQgPT09IHRoaXMuZGVsaW0pIHtcblx0XHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKFwiUG91bmQgc2V0IHN0YXRlbWVudCBoYXMgcmVwZXRpdGl2ZSBjaGFyYWN0ZXJzLiBFLmcuICcjc2V0fDp8JyBpcyBpbGxlZ2FsLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmaW5kKGtleTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG5cdFx0a2V5ID0gdGhpcy5sZWZ0ICsga2V5ICsgdGhpcy5kZWxpbTtcblx0XHRpZiAoIXRoaXMuc3RyLmluY2x1ZGVzKGtleSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5zdHIuc3BsaXQoa2V5KVsxXT8uc3BsaXQodGhpcy5yaWdodCBhcyBzdHJpbmcpWzBdO1xuXHR9XG59XG5cbmV4cG9ydCB7UGFyZVN0cn07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50ICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtESVNfU1VQUE9SVF9QQUdFU19SRUdFWH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge1BhcmVTdHJ9IGZyb20gJy4vUGFyZVN0cic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2VsZW1lbnRXcmFwfSBmcm9tICcuL2VsZW1lbnRXcmFwJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtpc0luQmxhY2tsaXN0fSBmcm9tICcuL2lzSW5CbGFja2xpc3QnO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IGVhc3lBcmNoaXZlID0gKCkgPT4ge1xuXHQvLyBjb21tb24gcmVwby5cblx0Y29uc3QgZXhwb3NlID0gKCgpID0+IHtcblx0XHRjb25zdCBhc3luY1Bvc3QgPSAocGFyYW0sIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRjb25zdCBhcGkgPSBpbml0TXdBcGkoYEVhc3lBY2hpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cdFx0XHR2b2lkIGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW0pLnRoZW4oY2FsbGJhY2spO1xuXHRcdH07XG5cdFx0Y29uc3QgZ2V0UGFnZSA9ICh0aXRsZSwgY2FsbGJhY2spID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHRcdHJ2cHJvcDogWydpZHMnLCAnZmxhZ3MnLCAndGltZXN0YW1wJywgJ3VzZXInLCAndXNlcmlkJywgJ3NpemUnLCAnY29tbWVudCcsICd0YWdzJywgJ2NvbnRlbnQnXSxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdH07XG5cdFx0XHRhc3luY1Bvc3QocGFyYW0sIGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IGdldFBhZ2VTZWN0aW9uID0gKHRpdGxlLCBzZWN0aW9uLCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW0gPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRcdFx0cnZwcm9wOiBbJ2NvbnRlbnQnXSxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdFx0cnZzZWN0aW9uOiBzZWN0aW9uLFxuXHRcdFx0fTtcblx0XHRcdGFzeW5jUG9zdChwYXJhbSwgY2FsbGJhY2spO1xuXHRcdH07XG5cdFx0Y29uc3QgcGlja1BhZ2VDb250ZW50ID0gKGRhdGEpID0+IHtcblx0XHRcdGlmIChkYXRhLnF1ZXJ5ICYmIGRhdGEucXVlcnkucGFnZXMgJiYgZGF0YS5xdWVyeS5wYWdlc1swXSAmJiBkYXRhLnF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXSkge1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cblx0XHRcdFx0cmV0dXJuIGRhdGEucXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHRjb25zdCB0ZWxsUGFnZUV4aXN0ID0gKGRhdGEpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgfHwgIWRhdGEucXVlcnkgfHwgIWRhdGEucXVlcnkucGFnZXMgfHwgZGF0YS5xdWVyeS5wYWdlc1swXS5taXNzaW5nKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cdFx0Y29uc3QgZWRpdCA9ICh0aXRsZSwgc2VjdGlvbiwgdGV4dCwgc3VtbWFyeSwgY2FsbGJhY2spID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdHRleHQsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHNlY3Rpb24pIHtcblx0XHRcdFx0cGFyYW0uc2VjdGlvbiA9IHNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRhc3luY1Bvc3QocGFyYW0sIGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IGVkaXRBcHBlbmQgPSAocGFnZSwgYWRkZWRfY29udGVudCwgc3VtbWFyeSwgY2FsbGJhY2spID0+IHtcblx0XHRcdGdldFBhZ2UocGFnZSwgKGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxfY29udGVudCA9IHRlbGxQYWdlRXhpc3QoZGF0YSkgPT09IGZhbHNlID8gJycgOiBwaWNrUGFnZUNvbnRlbnQoZGF0YSk7XG5cdFx0XHRcdGVkaXQocGFnZSwgbnVsbCwgU3RyaW5nKG9yaWdpbmFsX2NvbnRlbnQpICsgYWRkZWRfY29udGVudCwgc3VtbWFyeSwgY2FsbGJhY2spO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRjb25zdCBhcmNoaXZlU2VjdGlvbiA9ICh0aXRsZSwgc2VjdGlvbiwgdGFyZ2V0VGl0bGUsIGNhbGxiYWNrLCBzdW1tYXJ5KSA9PiB7XG5cdFx0XHRnZXRQYWdlU2VjdGlvbih0aXRsZSwgc2VjdGlvbiwgKGRhdGEpID0+IHtcblx0XHRcdFx0ZWRpdEFwcGVuZCh0YXJnZXRUaXRsZSwgYFxcblxcbiR7cGlja1BhZ2VDb250ZW50KGRhdGEpfWAsIHN1bW1hcnkpO1xuXHRcdFx0XHRlZGl0KHRpdGxlLCBzZWN0aW9uLnRvU3RyaW5nKCksICcnLCBzdW1tYXJ5LCBjYWxsYmFjayk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGNvbnN0IGRlbGV0ZVNlY3Rpb24gPSAodGl0bGUsIHNlY3Rpb24sIGNhbGxiYWNrLCBzdW1tYXJ5KSA9PiB7XG5cdFx0XHRlZGl0KHRpdGxlLCBzZWN0aW9uLnRvU3RyaW5nKCksICcnLCBzdW1tYXJ5LCBjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXJjaGl2ZV9zZWN0aW9uOiBhcmNoaXZlU2VjdGlvbixcblx0XHRcdGRlbGV0ZV9zZWN0aW9uOiBkZWxldGVTZWN0aW9uLFxuXHRcdH07XG5cdH0pKCk7XG5cdC8vIGRlZmF1bHQgc2V0dGluZ3M6XG5cdGxldCBzZXR0aW5nc19zdHJpbmcgPVxuXHRcdCcjc2V0JXw/XHRcdFx0XHRcdFx0XHRcdFx0XFxuJyArXG5cdFx0J2Rpc3BsYXkgc2VjdGlvbiBkZWxldGUgbGlua1x0JXNlYy1kZWx8MT9cdFxcbicgK1xuXHRcdCdkaXNwbGF5IHNlY3Rpb24gYXJjaGl2ZSBsaW5lXHQlc2VjLWFyY3wxP1x0XFxuJyArXG5cdFx0J2Rpc3BsYXkgY29udHJvbCBiYXIgYXQgdG9wXHQldG9wLWJhcnwwP1x0XFxuJyArXG5cdFx0J2FyY2hpdmUgbG9jYXRpb25cdFx0XHRcdCVhcmMtbG9jfD9cdFxcbicgK1xuXHRcdCdzdWJzZWN0aW9uIGVmZmVjdGl2ZW5lc3NcdFx0JXN1Yi1zZWN8Mj9cdFxcbicgK1xuXHRcdCdjb25maXJtIGFjdGlvblx0XHRcdFx0JWNvbmZpcm18MD9cdFxcbicgK1xuXHRcdCdpcyB0aGlzIGRhdGEgaW5pdGlhbGl6ZWRcdFx0JWRhdGEtaW5pdHwwPyBcXG4nO1xuXHRsZXQgc2V0dGluZ3MgPSBuZXcgUGFyZVN0cihzZXR0aW5nc19zdHJpbmcpO1xuXHRsZXQgbXlfdXNlcl90YWxrID0gbnVsbDtcblx0Y29uc3QgbmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4ID0gd2luZG93LmVhc3lfYXJjaGl2ZS5uZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXggPz8gW107XG5cdGNvbnN0IFtzZXR0aW5nc19zcGFuXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoT1BUSU9OUy5jb2xsZWN0aW9uUG9pbnRTZWxlY3Rvcik7XG5cdGNvbnN0IHNldHRpbmdzX2luX3BhZ2UgPSBuZXcgUGFyZVN0cihzZXR0aW5nc19zcGFuPy5pbm5lckhUTUwgPz8gJycpO1xuXHRpZiAoc2V0dGluZ3NfaW5fcGFnZS5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzEnKSB7XG5cdFx0c2V0dGluZ3Nfc3RyaW5nID0gc2V0dGluZ3Nfc3Bhbi5pbm5lckhUTUw7XG5cdFx0c2V0dGluZ3MgPSBuZXcgUGFyZVN0cihzZXR0aW5nc19zdHJpbmcpO1xuXHR9XG5cdC8vIGlkZW50aWZ5IGlmIEVhc3kgQXJjaGl2ZSBjYW4gYmUgdXNlZCBvbiB0aGUgcGFnZSAtIGNvbXBhdGliaWxpdHlcblx0Y29uc3Qgb25fdXNlcl90YWxrID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gMztcblx0bXlfdXNlcl90YWxrID1cblx0XHRvbl91c2VyX3RhbGsgJiZcblx0XHQoKCkgPT4ge1xuXHRcdFx0bGV0IHBhZ2VfbmFtZSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5zcGxpdCgnOicpO1xuXHRcdFx0cGFnZV9uYW1lWzBdID0gJyc7XG5cdFx0XHRwYWdlX25hbWUgPSBwYWdlX25hbWUuam9pbignJyk7XG5cdFx0XHRbcGFnZV9uYW1lXSA9IHBhZ2VfbmFtZS5zcGxpdCgnLycpO1xuXHRcdFx0Y29uc3QgdXNlcl9uYW1lID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dXNlcl9uYW1lLnNwbGl0KCdfJykuam9pbignJykuc3BsaXQoJyAnKS5qb2luKCcnKSA9PT0gcGFnZV9uYW1lLnNwbGl0KCdfJykuam9pbignJykuc3BsaXQoJyAnKS5qb2luKCcnKVxuXHRcdFx0KTtcblx0XHR9KSgpO1xuXHRjb25zdCBoYXNfdGVtcGxhdGUgPSBzZXR0aW5nc19pbl9wYWdlLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMSc7XG5cdGNvbnN0IG90aGVyc191c2VyX3RhbGsgPSBteV91c2VyX3RhbGsgPT09IGZhbHNlICYmIG9uX3VzZXJfdGFsayA9PT0gdHJ1ZTtcblx0Y29uc3Qgb25fYXJ0aWNsZSA9IG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDA7XG5cdGNvbnN0IG9uX2hpc3RfdmVyc2lvbiA9IG13LmNvbmZpZy5nZXQoJ3dnQ3VyUmV2aXNpb25JZCcpIC0gbXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJykgIT09IDA7XG5cdGNvbnN0IHNhbml0aXplX2h0bWwgPSAoc3RyaW5nKSA9PlxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVyblxuXHRcdHN0cmluZ1xuXHRcdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdFx0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcblx0Ly8gbXVsdGkgbGFuZ3VhZ2Ugc2VsZWN0b3IgZGVmaW5pdGlvblxuXHRjb25zdCBtZXNzYWdlID0gKHRhZywgLi4ucGFyYV9saXN0KSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBjb250ZW50ID0gZ2V0TWVzc2FnZSh0YWcpO1xuXHRcdFx0aWYgKHBhcmFfbGlzdCAmJiBwYXJhX2xpc3QubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IFtfaSwgZWxlbWVudF0gb2YgcGFyYV9saXN0LmVudHJpZXMoKSkge1xuXHRcdFx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoYCQke19pICsgMX1gLCBlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnKCEpIHVuZGVmaW5lZCBsYW5ndWFnZSBjb250ZW50Jztcblx0XHR9XG5cdH07XG5cdGNvbnN0IG5vbWluYWxfc2VjdGlvbnMgPSAoKGNvdW50KSA9PiB7XG5cdFx0Y29uc3QgYXJyID0gQXJyYXkuZnJvbSh7XG5cdFx0XHRsZW5ndGg6IGNvdW50LFxuXHRcdH0pO1xuXHRcdGZvciAobGV0IF9pID0gMDsgX2kgPCBjb3VudDsgX2krKykge1xuXHRcdFx0YXJyW19pXSA9IGZhbHNlO1xuXHRcdH1cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cblx0XHRyZXR1cm4gYXJyO1xuXHR9KSh3aW5kb3cuZWFzeV9hcmNoaXZlLnNlY3Rpb25fY291bnQpO1xuXHRjb25zdCBhY3R1YWxfc2VjdGlvbiA9IChub21pbmFsX3NlY3Rpb25fbnVtYmVyKSA9PiB7XG5cdFx0bGV0IGxlc3MgPSAwO1xuXHRcdGZvciAobGV0IF9pID0gMDsgX2kgPCBub21pbmFsX3NlY3Rpb25fbnVtYmVyOyBfaSsrKSB7XG5cdFx0XHRpZiAobm9taW5hbF9zZWN0aW9uc1tfaV0gPT09IHRydWUpIHtcblx0XHRcdFx0bGVzcysrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbm9taW5hbF9zZWN0aW9uX251bWJlciAtIGxlc3M7XG5cdH07XG5cdC8vIC4uLiBpbnRlcmZhY2UgZG9uZVxuXHQvLyBhcmNoaXZpbmcgbG9naWMgaW5qZWN0aW9uXG5cdGNvbnN0IHJlcG9ydF9kb25lbmVzc191aSA9IChzZWN0aW9uX251bWJlciwgZG9uZW5lc3NfdHlwZSwgdG8sIG9uZ29pbmdfb3JfZG9uZSkgPT4ge1xuXHRcdGxldCB0YWdfZGluZztcblx0XHRsZXQgdGFnX3NlY3Rpb247XG5cdFx0bGV0IGRpbmdfdHlwZTtcblx0XHRsZXQgZGluZ19hdXRvaGlkZTtcblx0XHRpZiAob25nb2luZ19vcl9kb25lID09PSAnb25nb2luZycpIHtcblx0XHRcdGRpbmdfdHlwZSA9ICdpbmZvJztcblx0XHRcdGRpbmdfYXV0b2hpZGUgPSB0cnVlO1xuXHRcdFx0aWYgKGRvbmVuZXNzX3R5cGUgPT09ICdkZWxldGUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2RlbGV0aW5nX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2JlaW5nX2RlbGV0ZWQnO1xuXHRcdFx0fSBlbHNlIGlmIChkb25lbmVzc190eXBlID09PSAnYXJjaGl2ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnbG9hZGluZ19zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdiZWluZ19hcmNoaXZlZCc7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChvbmdvaW5nX29yX2RvbmUgPT09ICdkb25lJykge1xuXHRcdFx0ZGluZ190eXBlID0gJ3N1Y2Nlc3MnO1xuXHRcdFx0ZGluZ19hdXRvaGlkZSA9IGZhbHNlO1xuXHRcdFx0aWYgKGRvbmVuZXNzX3R5cGUgPT09ICdkZWxldGUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2RvbmVfZGVsZXRpbmdfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYWxyZWFkeV9kZWxldGVkJztcblx0XHRcdH0gZWxzZSBpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2FyY2hpdmUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2RvbmVfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYWxyZWFkeV9hcmNoaXZlZCc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IGFjdGlvbnMgPSB7XG5cdFx0XHRkaW5nOiAoKSA9PiB7XG5cdFx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IG1lc3NhZ2UodGFnX2RpbmcsIHNlY3Rpb25fbnVtYmVyLnRvU3RyaW5nKCksIHRvKSxcblx0XHRcdFx0XHRcdGNsb3NlOiAhZGluZ19hdXRvaGlkZSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiBkaW5nX2F1dG9oaWRlID8gMzAwMCA6IC0xLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZGluZ190eXBlXG5cdFx0XHRcdCk7XG5cdFx0XHR9LFxuXHRcdFx0c2VjdGlvbl9saW5rOiAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWFzeS1hcmNoaXZlLXNlY3Rpb24taWQtc3Bhbi1vcmRlci0ke3NlY3Rpb25fbnVtYmVyfWApO1xuXHRcdFx0XHRjb25zdCBwbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0XHRcdFx0Zm9yIChsZXQgX2kgPSAxOyBfaSA8IHBub2RlLmNoaWxkTm9kZXMubGVuZ3RoIC0gMjsgX2krKykge1xuXHRcdFx0XHRcdHBub2RlLmNoaWxkTm9kZXNbX2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bm9kZS5pbm5lckhUTUwgPSBtZXNzYWdlKHRhZ19zZWN0aW9uKTtcblx0XHRcdFx0bm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG5cdFx0XHRcdG5vZGUuc3R5bGUuY29sb3IgPSAncmdiKDAgMCAwLy41KSc7XG5cdFx0XHR9LFxuXHRcdH07XG5cdFx0cmV0dXJuIGFjdGlvbnM7XG5cdH07XG5cdGNvbnN0IGRlbGV0ZV9zZWN0aW9uX2NvcmUgPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0Y29uc3QgYWN0dWFsX3NlY3Rpb25fbnVtYmVyID0gYWN0dWFsX3NlY3Rpb24oc2VjdGlvbl9udW1iZXIpO1xuXHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2RlbGV0ZScsICcnLCAnb25nb2luZycpLmRpbmcoKTtcblx0XHRleHBvc2UuZGVsZXRlX3NlY3Rpb24oXG5cdFx0XHRtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHRhY3R1YWxfc2VjdGlvbl9udW1iZXIsXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2RlbGV0ZScsICcnLCAnZG9uZScpLmRpbmcoKTtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdkb25lJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0XHRcdG5vbWluYWxfc2VjdGlvbnNbc2VjdGlvbl9udW1iZXJdID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRtZXNzYWdlKCdkZWxldGVfc3VtbWFyeScpXG5cdFx0KTtcblx0fTtcblx0Y29uc3QgZGVsZXRlX3NlY3Rpb24gPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdvbmdvaW5nJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0ZGVsZXRlX3NlY3Rpb25fY29yZShzZWN0aW9uX251bWJlciwgX25vbWluYWwpO1xuXHR9O1xuXHRjb25zdCBhcmNoaXZlX3NlY3Rpb25fY29yZSA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCBhY3R1YWxfc2VjdGlvbl9udW1iZXIgPSBhY3R1YWxfc2VjdGlvbihzZWN0aW9uX251bWJlcik7XG5cdFx0Y29uc3QgdG8gPSBzZXR0aW5ncy5maW5kKCdhcmMtbG9jJyk7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnb25nb2luZycpLmRpbmcoKTtcblx0XHRleHBvc2UuYXJjaGl2ZV9zZWN0aW9uKFxuXHRcdFx0bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRcdFx0YWN0dWFsX3NlY3Rpb25fbnVtYmVyLFxuXHRcdFx0dG8sXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ2RvbmUnKS5kaW5nKCk7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ2RvbmUnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRcdFx0bm9taW5hbF9zZWN0aW9uc1tzZWN0aW9uX251bWJlcl0gPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdG1lc3NhZ2UoJ2FyY2hpdmVfc3VtbWFyeScpXG5cdFx0KTtcblx0fTtcblx0Y29uc3QgYXJjaGl2ZV9zZWN0aW9uID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdGNvbnN0IHRvID0gc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpO1xuXHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ29uZ29pbmcnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRhcmNoaXZlX3NlY3Rpb25fY29yZShzZWN0aW9uX251bWJlciwgX25vbWluYWwpO1xuXHR9O1xuXHRjb25zdCBlbGFib3JhdGVfbm90aWNlID0gKG5vdGljZV90YWdfbmFtZSkgPT4ge1xuXHRcdC8vIGFjcm9ueW0gc2NoZW1lOiByZWZlciB0byBxd2VydHkga2V5Ym9hcmQgbGF5b3V0LiAocD05KVxuXHRcdGNvbnN0IG5vdGljZV90YWdfZGljdGlvbmFyeSA9IHtcblx0XHRcdHBsZWFzZV9lbmFibGVfZWxhYm9yYXRlOiBbJ3BsZWFzZV9lbmFibGVfZWxhYm9yYXRlJ10sXG5cdFx0XHRvdGhlcnNfdGFsa19lbGFib3JhdGU6IFsnb3RoZXJzX3RhbGtfZWxhYm9yYXRlJ10sXG5cdFx0XHRlbmFibGVfb25fZ2VuZXJpY19wYWdlOiBbJ2VuYWJsZV9vbl9nZW5lcmljX3BhZ2UnXSxcblx0XHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2U6IFtcblx0XHRcdFx0J3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UnLFxuXHRcdFx0XHQnd2FybmluZycsXG5cdFx0XHRcdCdsb25nJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFtzYW5pdGl6ZV9odG1sKHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSldLFxuXHRcdFx0XSxcblx0XHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZTogW1xuXHRcdFx0XHQncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlJyxcblx0XHRcdFx0J3dhcm5pbmcnLFxuXHRcdFx0XHQnbG9uZycsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRbc2FuaXRpemVfaHRtbChzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpXSxcblx0XHRcdF0sXG5cdFx0XHRwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlOiBbJ3BhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGUnXSxcblx0XHR9O1xuXHRcdGNvbnN0IG5vdGljZV9zZXQgPSBub3RpY2VfdGFnX2RpY3Rpb25hcnlbbm90aWNlX3RhZ19uYW1lXSB8fCBmYWxzZTtcblx0XHRpZiAobm90aWNlX3NldCAhPT0gZmFsc2UpIHtcblx0XHRcdGNvbnN0IFtudGFnLCBudHlwZSwgbnR0bCwgbnBlcnNpc3QsIG5zdWJzdF0gPSBub3RpY2Vfc2V0O1xuXHRcdFx0Y29uc3QgdG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bm9kZTogPHNwYW4+e21lc3NhZ2UobnRhZywgLi4ubnN1YnN0KX08L3NwYW4+LFxuXHRcdFx0XHRcdGNsb3NlOiBudHRsID09PSAnbG9uZycsXG5cdFx0XHRcdFx0ZHVyYXRpb246IG50dGwgPT09ICdsb25nJyA/IC0xIDogbnR0bCxcblx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAobnBlcnNpc3QpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRudHlwZVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdC8vIHJlYWwgZGVhbCBoZXJlXG5cdC8vIGludGVyZmFjZSBpbmplY3Rpb24gLSBwcmVwYXJlXG5cdGxldCBpID0gMDtcblx0bGV0IGogPSAwO1xuXHRsZXQgZWxlO1xuXHRsZXQgbm9taW5hbDtcblx0bGV0IGFjdHVhbDtcblx0Y29uc3QgcGlwZV9odG1sID0gPHNwYW4gY2xhc3M9XCJtdy1lZGl0c2VjdGlvbi1kaXZpZGVyXCI+ICYjMTI0OyA8L3NwYW4+O1xuXHRjb25zdCBzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaW5oaWJpdCA9IHNldHRpbmdzLmZpbmQoJ3NlYy1kZWwnKSA9PT0gJzAnIHx8IHNldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMCc7XG5cdGNvbnN0IHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaW5oaWJpdCA9IHNldHRpbmdzLmZpbmQoJ3NlYy1hcmMnKSA9PT0gJzAnIHx8IHNldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMCc7XG5cdGxldCBzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaHRtbDtcblx0bGV0IHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaHRtbDtcblx0Y29uc3Qgc2VjdGlvbl9pZF9zcGFuX2h0bWwgPSAob3JkZXJfbm8pID0+IChcblx0XHQ8c3BhblxuXHRcdFx0Y2xhc3M9e1snZWFzeS1hcmNoaXZlLXNlY3Rpb24taWQtc3BhbicsIGBlYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuLW9yZGVyLSR7b3JkZXJfbm99YF19XG5cdFx0XHRzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319XG5cdFx0PlxuXHRcdFx0c2VjdGlvblxuXHRcdDwvc3Bhbj5cblx0KTtcblx0Y29uc3QgW2Zvb3Rlcl9pbmZvX2VsZV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblx0aWYgKCFmb290ZXJfaW5mb19lbGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKG9uX2FydGljbGUgfHwgb25faGlzdF92ZXJzaW9uIHx8IGlzSW5CbGFja2xpc3QobmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4KSkge1xuXHRcdC8vIGluc2VydCBubyBpbnRlcmZhY2Ugb24gYW4gYXJ0aWNsZSBwYWdlIG9yIGEgaGlzdG9yeSB2ZXJzaW9uLlxuXHRcdC8vIGluc2VydCBubyBpbnRlcmZhY2UgaWYgdGhlIHBhZ2UgbmFtZSBpcyBibGFja2xpc3RlZC5cblx0fSBlbHNlIGlmIChpc0luQmxhY2tsaXN0KERJU19TVVBQT1JUX1BBR0VTX1JFR0VYKSkge1xuXHRcdC8vIGluc2VydCBub3Qgc3VwcG9ydGVkIG5vdGljZSBpZiB0aGUgcGFnZSBuYW1lIGluZGljYXRlcyB0aGF0IGl0IGlzIG5vdCBzdXBwb3J0ZWQuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcChcblx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyxcblx0XHRcdFx0PGFcblx0XHRcdFx0XHRzdHlsZT17e2NvbG9yOiAnaW5oZXJpdCd9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ3BhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGUnKTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e21lc3NhZ2UoJ3BhZ2Vfbm90X3N1cHBvcnRlZCcpfVxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQpXG5cdFx0KTtcblx0fSBlbHNlIGlmIChtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykgPT09IHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSkge1xuXHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZScpO1xuXHR9IGVsc2UgaWYgKGhhc190ZW1wbGF0ZSAmJiAhb3RoZXJzX3VzZXJfdGFsaykge1xuXHRcdC8vIGFueSBwYWdlIHRoYXQgaGFzIHRlbXBsYXRlIHRoYXQncyBub3Qgb3RoZXJzJyB0YWxrIHBhZ2UuIGZ1bmN0aW9uIG5vcm1hbGx5LlxuXHRcdC8vICEhIHRoZSBhcmNoaXZlIGxvY2F0aW9uIGluIG1haW4gc3BhY2UgYW5kIG5lZWRzIGF0dGVudGlvbiAhIVxuXHRcdGlmICgvLis6LisvLnRlc3Qoc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKSAhPT0gdHJ1ZSkge1xuXHRcdFx0ZWxhYm9yYXRlX25vdGljZSgncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZScpO1xuXHRcdH1cblx0XHRjb25zdCBub3JtYWxfZnVuY3Rpb25faW5qZWN0X2ludGVyZmFjZSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGVkaXRTZWN0aW9uQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGVkaXRTZWN0aW9uQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRlbGUgPSBlZGl0U2VjdGlvbkNvbGxlY3Rpb25baV07XG5cdFx0XHRcdGNvbnN0IHZlID0gL1smP112ZWFjdGlvbj1lZGl0Ly50ZXN0KGVsZS5jaGlsZE5vZGVzWzFdLmhyZWYpO1xuXHRcdFx0XHRjb25zdCBjaGlsZF9ub2RlX251bWJlciA9IHZlID8gMyA6IDE7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRlbGUucGFyZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdoMicgJiZcblx0XHRcdFx0XHRlbGUucGFyZW50Tm9kZS5pZCAhPT0gJ2ZpcnN0SGVhZGluZycgJiZcblx0XHRcdFx0XHRkZWNvZGVVUklDb21wb25lbnQoZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmhyZWYuc3BsaXQoL1smP110aXRsZT0vKVsxXS5zcGxpdCgnJicpWzBdKSA9PT1cblx0XHRcdFx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRhY3R1YWwgPSBOdW1iZXIucGFyc2VJbnQoXG5cdFx0XHRcdFx0XHRlbGUuY2hpbGROb2Rlc1tjaGlsZF9ub2RlX251bWJlcl0uaHJlZi5zcGxpdCgvWyY/XXNlY3Rpb249LylbMV0uc3BsaXQoJyYnKVswXSxcblx0XHRcdFx0XHRcdDEwXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRub21pbmFsID0gaSAtIGogKyAxO1xuXHRcdFx0XHRcdHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9odG1sID0gc2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2luaGliaXQgPyAoXG5cdFx0XHRcdFx0XHQ8PjwvPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHR7cGlwZV9odG1sfVxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxldGVfc2VjdGlvbihhY3R1YWwsIG5vbWluYWwpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7bWVzc2FnZSgnZGVsZXRlJyl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0c2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9odG1sID0gc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9pbmhpYml0ID8gKFxuXHRcdFx0XHRcdFx0PD48Lz5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0e3BpcGVfaHRtbH1cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0YXJjaGl2ZV9zZWN0aW9uKGFjdHVhbCwgbm9taW5hbCk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHttZXNzYWdlKCdhcmNoaXZlJyl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0ZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmFmdGVyKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0e3NlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9odG1sfVxuXHRcdFx0XHRcdFx0XHR7c2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9odG1sfVxuXHRcdFx0XHRcdFx0XHR7c2VjdGlvbl9pZF9zcGFuX2h0bWwobm9taW5hbC50b1N0cmluZygpKX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aisrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNlY3Rpb25fY291bnQgPSBpIC0gaiArIDE7XG5cdFx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChcblx0XHRcdFx0ZWxlbWVudFdyYXAoXG5cdFx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UnLFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHR7bWVzc2FnZSgnc3VwcG9ydHMnKX1cblx0XHRcdFx0XHRcdHttZXNzYWdlKCdsZWZ0X3Bhcl9zcGxpdCcpfVxuXHRcdFx0XHRcdFx0e21lc3NhZ2UoJ2FyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdCcpfVxuXHRcdFx0XHRcdFx0PGEgaHJlZj17YC93aWtpLyR7c2FuaXRpemVfaHRtbChzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpfWB9PlxuXHRcdFx0XHRcdFx0XHR7c2FuaXRpemVfaHRtbChzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpfVxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0e21lc3NhZ2UoJ3JpZ2h0X3BhcicpfVxuXHRcdFx0XHRcdFx0e21lc3NhZ2UoJ3BlcmlvZCcpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH07XG5cdFx0bm9ybWFsX2Z1bmN0aW9uX2luamVjdF9pbnRlcmZhY2UoKTtcblx0fSBlbHNlIGlmIChvdGhlcnNfdXNlcl90YWxrID09PSB0cnVlKSB7XG5cdFx0Ly8gb3RoZXJzIHVzZXIgdGFsay5cblx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChcblx0XHRcdGVsZW1lbnRXcmFwKFxuXHRcdFx0XHQnZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UnLFxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdHN0eWxlPXt7Y29sb3I6ICdpbmhlcml0J319XG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0ZWxhYm9yYXRlX25vdGljZSgnb3RoZXJzX3RhbGtfZWxhYm9yYXRlJyk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHttZXNzYWdlKCdvdGhlcnNfcGFnZScpfVxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQpXG5cdFx0KTtcblx0fSBlbHNlIGlmIChteV91c2VyX3RhbGsgPT09IGZhbHNlKSB7XG5cdFx0Ly8gYSBnZW5lcmljIHBhZ2UgdGhhdCBkaWQgbm90IGVuYWJsZSBlYXN5IGFyY2hpdmUuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcChcblx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyxcblx0XHRcdFx0PGFcblx0XHRcdFx0XHRzdHlsZT17e2NvbG9yOiAnaW5oZXJpdCd9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ2VuYWJsZV9vbl9nZW5lcmljX3BhZ2UnKTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e21lc3NhZ2UoJ3RvX2VuYWJsZScpfVxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQpXG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChcblx0XHRcdGVsZW1lbnRXcmFwKFxuXHRcdFx0XHQnZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UnLFxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdHN0eWxlPXt7Y29sb3I6ICdpbmhlcml0J319XG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0ZWxhYm9yYXRlX25vdGljZSgncGxlYXNlX2VuYWJsZV9lbGFib3JhdGUnKTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e21lc3NhZ2UoJ3BsZWFzZV9lbmFibGUnKX1cblx0XHRcdFx0PC9hPlxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZWFzeUFyY2hpdmV9O1xuIiwgImltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge1dHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9IChpZDogc3RyaW5nLCBpbm5lckVsZW1lbnQ6IFJlYWN0RWxlbWVudCkgPT4ge1xuXHRpZiAoV0dfU0tJTiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17J3BhZ2UtaW5mb19faXRlbSd9IGlkPXtpZH0+XG5cdFx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fSBlbHNlIGlmIChbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhXR19TS0lOKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBpZD17aWR9Pntpbm5lckVsZW1lbnR9PC9saT47XG5cdH1cblx0cmV0dXJuIDxkaXYgaWQ9e2lkfT57aW5uZXJFbGVtZW50fTwvZGl2Pjtcbn07XG5cbmV4cG9ydCB7ZWxlbWVudFdyYXB9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRkZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaQnLFxuXHRcdH0pLFxuXHRcdGFyY2hpdmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqUJyxcblx0XHR9KSxcblx0XHRzdXBwb3J0czogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgaXMgZW5hYmxlZCBvbiB0aGlzIHRhbGsgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfmnKzorqjorrrpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZlJyxcblx0XHR9KSxcblx0XHRvdGhlcnNfcGFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgaXMgbm90IGVuYWJsZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouaYr+S7luS6uueahOeUqOaIt+iuqOiuuumhtemdou+8jOWboOatpOS4jeaUr+aMgSBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdoueCuuS7luS6uueUqOaItuiojuirlumggemdou+8jOaVheS4jeaUr+aPtCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHR0b19lbmFibGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCB1c2luZyBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouayoeacieWQr+eUqCBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5pys6aCB5rKh5pyJ5ZWf55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0ZW5hYmxlX29uX2dlbmVyaWNfcGFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHlvdXIgdXNlciB0YWxrIHBhZ2UuIEhvd2V2ZXIgRWFzeSBBcmNoaXZlIHN0aWxsIGNhbiBiZSB1c2VkIGlmIG5lZWRlZC5UbyBlbmFibGUgaXQsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+atpOmhtemdouS4jeaYr+aCqOeahOeUqOaIt+iuqOiuuumhtemdouOAguS4jei/h++8jOiLpemcgOimge+8jOatpOmhtemdouWPr+S7peWQr+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6K+35Zyo6aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+atpOmggemdouS4jeaYr+aCqOeahOeUqOaItuiojuirlumggemdouOAguS4jemBju+8jOiLpemcgOimge+8jOatpOmggemdouWPr+S7peWVn+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6KuL5Zyo6aCB6Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn1944CCJyxcblx0XHR9KSxcblx0XHRwbGVhc2VfZW5hYmxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0byB0aGlzIHBhZ2UgdG8gc3RhcnQgdXNpbmcgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfor7flnKjmraTpobXpnaLliqDlhaUge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5Zyw5Z2AfX0g5p2l5ZCv55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vlnKjmraTpoIHpnaLliqDlhaUge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX0g5L6G5ZWf55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0cGxlYXNlX2VuYWJsZV9lbGFib3JhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiBcIllvdSBoYXZlIHRoZSBFYXN5IEFyY2hpdmUgZnVuY3Rpb25hbGl0eSBlbmFibGVkIGJ1dCB5b3VyIHRhbGsgcGFnZSBoYXNuJ3QgYmVlbiBjb25maWd1cmVkIHlldC4gVG8gdGFrZSBhZHZhbnRhZ2Ugb2YgRWFzeSBBcmNoaXZlLCBhZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdGVtcGxhdGUgdG8gdGhpcyBwYWdlLlwiLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo55qE6LSm5Y+35bey57uP5pSv5oyBIEVhc3kgQXJjaGl2Ze+8jOS9huaYr++8jOS4uuS6huW8gOWni+S9v+eUqOivpeWKn+iDve+8jOaCqOi/mOmcgOimgeWcqOiHquW3seeahOeUqOaIt+iuqOiuuumhtemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPkvY3nva59feOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmgqjnmoTos6zomZ/lt7LntpPmlK/mjIEgRWFzeSBBcmNoaXZl77yM5L2G5piv77yM54K65LqG6ZaL5aeL5L2/55So6Kmy5Yqf6IO977yM5oKo6YKE6ZyA6KaB5Zyo6Ieq5bex55qE55So5oi26KiO6KuW6aCB6Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn1944CCJyxcblx0XHR9KSxcblx0XHRsZWZ0X3Bhcl9zcGxpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0cmlnaHRfcGFyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyknLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdHBlcmlvZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcuJyxcblx0XHRcdHpoOiAn44CCJyxcblx0XHR9KSxcblx0XHRhcmNoaXZlX3BhdGhfY29sb25fc3BsaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2ZSBsb2NhdGlvbjogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+WcsOWdgO+8micsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpToh7PvvJonLFxuXHRcdH0pLFxuXHRcdGxvYWRpbmdfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcgc2VjdGlvbiAkMScsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjor7vlj5bnrKwgJDEg6IqC55qE5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOiugOWPluesrCAkMSDnr4DnmoTlhaflrrknLFxuXHRcdH0pLFxuXHRcdGRlbGV0aW5nX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdEZWxldGluZyBzZWN0aW9uICQxJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWIoOmZpOesrCAkMSDoioLnmoTlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo5Yiq6Zmk56ysICQxIOevgOeahOWFp+WuuScsXG5cdFx0fSksXG5cdFx0ZG9uZV9zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VjdGlvbiAkMSBoYXMgYmVlbiBhcmNoaXZlZCB0byAkMicsXG5cdFx0XHQnemgtaGFucyc6ICflt7Lnu4/lsIbnrKwgJDEg6IqC5a2Y5qGj5YiwICQyJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3sue2k+Wwh+esrCAkMSDnr4DlrZjmqpTliLAgJDInLFxuXHRcdH0pLFxuXHRcdGRvbmVfZGVsZXRpbmdfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlY3Rpb24gJDEgaGFzIGJlZW4gZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7Lnu4/lsIbnrKwgJDEg6IqC5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3sue2k+Wwh+esrCAkMSDnr4DliKrpmaQnLFxuXHRcdH0pLFxuXHRcdGJlaW5nX2FyY2hpdmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2JlaW5nIGFyY2hpdmVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+S4rScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTkuK0nLFxuXHRcdH0pLFxuXHRcdGJlaW5nX2RlbGV0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYmVpbmcgZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5LitJyxcblx0XHR9KSxcblx0XHRhbHJlYWR5X2FyY2hpdmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflt7LlrZjmqpQnLFxuXHRcdH0pLFxuXHRcdGFscmVhZHlfZGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICflt7LliKrpmaQnLFxuXHRcdH0pLFxuXHRcdG90aGVyc190YWxrX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46IFwiVGhpcyBwYWdlIGlzIGFub3RoZXIgdXNlcidzIHRhbGsgcGFnZS4gWW91IGNhbm5vdCBhcmNoaXZlIHRoZSB0b3BpY3Mgb24gdGhpcyBwYWdlIGZvciBoaW0vaGVyXCIsXG5cdFx0XHQnemgtaGFucyc6ICfov5nmmK/lj6bkuIDlkI3nlKjmiLfnmoTorqjorrrpobXpnaLvvIzmgqjkuI3og73ku6Pmm7/lj6bkuIDlkI3nlKjmiLflrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn6YCZ5piv5Y+m5LiA5ZCN55So5oi255qE6KiO6KuW6aCB6Z2i77yM5oKo5LiN6IO95Luj5pu/5Y+m5LiA5ZCN55So5oi25a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHRwYWdlX25vdF9zdXBwb3J0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdHBhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlc2UgcGFnZXMgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlOiBGaWxlLCBUZW1wbGF0ZSwgTW9kdWxlLCBNZWRpYVdpa2ksIENhdGVnb3J5LCBTcGVjaWFsLCBKYXZhU2NyaXB0LCBDU1MsIEpTT04uJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+i/meS6m+mhtemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77yaRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn6YCZ5Lqb6aCB6Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJpGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0fSksXG5cdFx0cHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlIGFyY2hpdmUgbG9jYXRpb24gb2YgdGhpcyBwYWdlLCBcIiQxXCIsIGlzIHVuZGVyIHRoZSBhcnRpY2xlIG5hbWVzcGFjZSwgd2hlcmUgYXJjaGl2ZXMgc2hvdWxkIG5vdCBiZSBub3JtYWxseSBkaXJlY3RlZCB0by4gUGxlYXNlIGNoZWNrIGlmIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGFyY2hpdmUgbG9jYXRpb24uJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+atpOmhtemdouebruWJjeeahOWtmOaho+WcsOWdgOaYr+KAnCQx4oCd77yM5Zyo5p2h55uu5ZCN56ew56m66Ze05LmL5LiL44CC5LiA6Iis6ICM6KiA5LiN5bqU5ZCR5p2h55uu5ZCN56ew56m66Ze06L+b6KGM5a2Y5qGj77yM6K+35qOA5p+l5a2Y5qGj5Zyw5Z2A44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+atpOmggemdoueVtuWJjeeahOWtmOaqlOWcsOWdgOaYr+OAjCQx44CN77yM5Zyo5qKd55uu5ZCN56ix56m66ZaT5LmL5LiL44CC5LiA6Iis6ICM6KiA5LiN5oeJ5ZCR5qKd55uu5ZCN56ix56m66ZaT6YCy6KGM5a2Y5qqU77yM6KuL5qqi5p+l5a2Y5qqU5Zyw5Z2A44CCJyxcblx0XHR9KSxcblx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZSBhcmNoaXZlIGxvY2F0aW9uIG9mIHRoaXMgcGFnZSwgXCIkMVwiLCBpcyB0aGlzIHBhZ2UgaXRzZWxmLCBFYXN5IGFyY2hpdmUgY2Fubm90IG9wZXJhdGUgbGlrZSB0aGlzLiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3vvIzlkozmraTpobXpnaLlkI3np7Dnm7jlkIzjgIJFYXN5IEFyY2hpdmUg5peg5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdoueVtuWJjeeahOWtmOaqlOWcsOWdgOaYr+OAjCQx44CN77yM5ZKM5q2k6aCB6Z2i5ZCN56ix55u45ZCM44CCRWFzeSBBcmNoaXZlIOeEoeazleaMieatpOWcsOWdgOWtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0YXJjaGl2ZV9zdW1tYXJ5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5q616JC9Jyxcblx0XHR9KSxcblx0XHRkZWxldGVfc3VtbWFyeTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5q616JC9Jyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIi8vIC4uLiBpbnRlcmZhY2UgaW5qZWN0aW9uIC0gbG9naWNcbmNvbnN0IGlzSW5CbGFja2xpc3QgPSAoYmxhY2tsaXN0OiBSZWdFeHBbXSkgPT4ge1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYmxhY2tsaXN0KSB7XG5cdFx0aWYgKGVsZW1lbnQudGVzdChtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHtpc0luQmxhY2tsaXN0fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7ZWFzeUFyY2hpdmV9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuKGZ1bmN0aW9uIGVhc3lBcmNoaXZlTG9hZCgpIHtcblx0aWYgKFxuXHRcdG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPCAwIHx8XG5cdFx0bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpID09PSAnUWl1d2VuOummlumhtScgfHxcblx0XHQhZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcikubGVuZ3RoXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoIXdpbmRvdy5lYXN5X2FyY2hpdmUpIHtcblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlID0ge1xuXHRcdFx0bmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4OiBbXSxcblx0XHRcdHNlY3Rpb25fY291bnQ6IG51bGwsXG5cdFx0fTtcblx0fVxuXHRlYXN5QXJjaGl2ZSgpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxxQkFBc0I7QUFDdEIsSUFBQUMsMEJBQTJCO0FBQzNCLElBQUFDLFVBQVc7O0FDSFosSUFBTUMsVUFBa0JDLEdBQUdDLE9BQU9DLElBQUksTUFBTTtBQUM1QyxJQUFNQywwQkFBMEIsQ0FDL0IsYUFDQSxrQkFDQSxlQUNBLGlCQUNBLGlCQUNBLGdCQUNBLHNCQUNBLHVCQUNBLHNCQUFBOztBQ1RELElBQU1DLFVBQU4sTUFBYztFQUNiQztFQUNBQztFQUNBQztFQUNBQztFQUVBQyxZ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TUFBSSxDQUFDc0gsT0FBT0MsY0FBYztBQUN6QkQsV0FBT0MsZUFBZTtNQUNyQkYsbUNBQW1DLENBQUE7TUFDbkM4QixlQUFlO0lBQ2hCO0VBQ0Q7QUFDQTdFLGNBQVk7QUFDYixHQUFHOyIsCiAgIm5hbWVzIjogWyJtb3VudFBvaW50U2VsZWN0b3IiLCAiY29sbGVjdGlvblBvaW50U2VsZWN0b3IiLCAidmVyc2lvbiIsICJXR19TS0lOIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiRElTX1NVUFBPUlRfUEFHRVNfUkVHRVgiLCAiUGFyZVN0ciIsICJzdHIiLCAibGVmdCIsICJkZWxpbSIsICJyaWdodCIsICJjb25zdHJ1Y3RvciIsICJwYXJlX3N0cmluZyIsICJTdHJpbmciLCAibGVuZ3RoIiwgInRlc3QiLCAic2xpY2UiLCAiaW5jbHVkZXMiLCAiU3ludGF4RXJyb3IiLCAiZmluZCIsICJrZXkiLCAiX3RoaXMkc3RyJHNwbGl0JCIsICJzcGxpdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImVsZW1lbnRXcmFwIiwgImlkIiwgImlubmVyRWxlbWVudCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJkZWxldGUiLCAibG9jYWxpemUiLCAiZW4iLCAiYXJjaGl2ZSIsICJzdXBwb3J0cyIsICJvdGhlcnNfcGFnZSIsICJ0b19lbmFibGUiLCAiZW5hYmxlX29uX2dlbmVyaWNfcGFnZSIsICJwbGVhc2VfZW5hYmxlIiwgInBsZWFzZV9lbmFibGVfZWxhYm9yYXRlIiwgImxlZnRfcGFyX3NwbGl0IiwgInpoIiwgInJpZ2h0X3BhciIsICJwZXJpb2QiLCAiYXJjaGl2ZV9wYXRoX2NvbG9uX3NwbGl0IiwgImxvYWRpbmdfc2VjdGlvbl9pIiwgImRlbGV0aW5nX3NlY3Rpb25faSIsICJkb25lX3NlY3Rpb25faSIsICJkb25lX2RlbGV0aW5nX3NlY3Rpb25faSIsICJiZWluZ19hcmNoaXZlZCIsICJiZWluZ19kZWxldGVkIiwgImFscmVhZHlfYXJjaGl2ZWQiLCAiYWxyZWFkeV9kZWxldGVkIiwgIm90aGVyc190YWxrX2VsYWJvcmF0ZSIsICJwYWdlX25vdF9zdXBwb3J0ZWQiLCAicGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZSIsICJwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlIiwgInByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZSIsICJhcmNoaXZlX3N1bW1hcnkiLCAiZGVsZXRlX3N1bW1hcnkiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImlzSW5CbGFja2xpc3QiLCAiYmxhY2tsaXN0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiZWFzeUFyY2hpdmUiLCAiX3dpbmRvdyRlYXN5X2FyY2hpdmUkIiwgIl9zZXR0aW5nc19zcGFuJGlubmVySCIsICJleHBvc2UiLCAiYXN5bmNQb3N0IiwgInBhcmFtIiwgImNhbGxiYWNrIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgInBvc3RXaXRoVG9rZW4iLCAidGhlbiIsICJnZXRQYWdlIiwgInRpdGxlIiwgImFjdGlvbiIsICJwcm9wIiwgInJ2cHJvcCIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aXRsZXMiLCAiZ2V0UGFnZVNlY3Rpb24iLCAic2VjdGlvbiIsICJydnNlY3Rpb24iLCAicGlja1BhZ2VDb250ZW50IiwgImRhdGEiLCAicXVlcnkiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgImNvbnRlbnQiLCAidGVsbFBhZ2VFeGlzdCIsICJtaXNzaW5nIiwgImVkaXQiLCAidGV4dCIsICJzdW1tYXJ5IiwgImVkaXRBcHBlbmQiLCAicGFnZSIsICJhZGRlZF9jb250ZW50IiwgIm9yaWdpbmFsX2NvbnRlbnQiLCAiYXJjaGl2ZVNlY3Rpb24iLCAidGFyZ2V0VGl0bGUiLCAidG9TdHJpbmciLCAiZGVsZXRlU2VjdGlvbiIsICJhcmNoaXZlX3NlY3Rpb24iLCAiZGVsZXRlX3NlY3Rpb24iLCAic2V0dGluZ3Nfc3RyaW5nIiwgInNldHRpbmdzIiwgIm15X3VzZXJfdGFsayIsICJuZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXgiLCAid2luZG93IiwgImVhc3lfYXJjaGl2ZSIsICJzZXR0aW5nc19zcGFuIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAic2V0dGluZ3NfaW5fcGFnZSIsICJpbm5lckhUTUwiLCAib25fdXNlcl90YWxrIiwgInBhZ2VfbmFtZSIsICJqb2luIiwgInVzZXJfbmFtZSIsICJoYXNfdGVtcGxhdGUiLCAib3RoZXJzX3VzZXJfdGFsayIsICJvbl9hcnRpY2xlIiwgIm9uX2hpc3RfdmVyc2lvbiIsICJzYW5pdGl6ZV9odG1sIiwgInN0cmluZyIsICJyZXBsYWNlIiwgIm1lc3NhZ2UiLCAidGFnIiwgInBhcmFfbGlzdCIsICJfaXRlcmF0b3IzIiwgImVudHJpZXMiLCAiX3N0ZXAzIiwgIl9pIiwgIm5vbWluYWxfc2VjdGlvbnMiLCAiY291bnQiLCAiYXJyIiwgIkFycmF5IiwgImZyb20iLCAic2VjdGlvbl9jb3VudCIsICJhY3R1YWxfc2VjdGlvbiIsICJub21pbmFsX3NlY3Rpb25fbnVtYmVyIiwgImxlc3MiLCAicmVwb3J0X2RvbmVuZXNzX3VpIiwgInNlY3Rpb25fbnVtYmVyIiwgImRvbmVuZXNzX3R5cGUiLCAidG8iLCAib25nb2luZ19vcl9kb25lIiwgInRhZ19kaW5nIiwgInRhZ19zZWN0aW9uIiwgImRpbmdfdHlwZSIsICJkaW5nX2F1dG9oaWRlIiwgImFjdGlvbnMiLCAiZGluZyIsICJ0b2FzdGlmeSIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJzZWN0aW9uX2xpbmsiLCAibm9kZSIsICJwbm9kZSIsICJwYXJlbnROb2RlIiwgImNoaWxkTm9kZXMiLCAic3R5bGUiLCAiZGlzcGxheSIsICJjb2xvciIsICJkZWxldGVfc2VjdGlvbl9jb3JlIiwgIl9ub21pbmFsIiwgImFjdHVhbF9zZWN0aW9uX251bWJlciIsICJhcmNoaXZlX3NlY3Rpb25fY29yZSIsICJlbGFib3JhdGVfbm90aWNlIiwgIm5vdGljZV90YWdfbmFtZSIsICJub3RpY2VfdGFnX2RpY3Rpb25hcnkiLCAibm90aWNlX3NldCIsICJudGFnIiwgIm50eXBlIiwgIm50dGwiLCAibnBlcnNpc3QiLCAibnN1YnN0IiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAib25DbGljayIsICJoaWRlVG9hc3QiLCAiaSIsICJqIiwgImVsZSIsICJub21pbmFsIiwgImFjdHVhbCIsICJwaXBlX2h0bWwiLCAiY2xhc3MiLCAic2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2luaGliaXQiLCAic2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9pbmhpYml0IiwgInNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9odG1sIiwgInNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaHRtbCIsICJzZWN0aW9uX2lkX3NwYW5faHRtbCIsICJvcmRlcl9ubyIsICJmb290ZXJfaW5mb19lbGUiLCAicHJlcGVuZCIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJub3JtYWxfZnVuY3Rpb25faW5qZWN0X2ludGVyZmFjZSIsICJlZGl0U2VjdGlvbkNvbGxlY3Rpb24iLCAidmUiLCAiaHJlZiIsICJjaGlsZF9ub2RlX251bWJlciIsICJ0YWdOYW1lIiwgInRvTG93ZXJDYXNlIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiRnJhZ21lbnQiLCAiYWZ0ZXIiLCAiZWFzeUFyY2hpdmVMb2FkIl0KfQo=
