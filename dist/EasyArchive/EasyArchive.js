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
//! src/EasyArchive/modules/pare_str.ts
var Pare_str = class {
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
//! src/EasyArchive/EasyArchive.jsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/EasyArchive/modules/constant.ts
var WG_SKIN = mw.config.get("skin");
//! src/EasyArchive/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var easy_archive_lang = () => {
  window.easy_archive.lang = {
    delete: (0, import_ext_gadget.localize)({
      en: "delete",
      "zh-hans": "删除",
      "zh-hant": "刪除"
    }),
    archive: (0, import_ext_gadget.localize)({
      en: "archive",
      "zh-hans": "存档",
      "zh-hant": "存檔"
    }),
    supports: (0, import_ext_gadget.localize)({
      en: "Easy Archive is enabled on this talk page",
      "zh-hans": "本讨论页面使用 Easy Archive 快速存档",
      "zh-hant": "此頁面使用 Easy Archive"
    }),
    others_page: (0, import_ext_gadget.localize)({
      en: "Easy Archive is not enabled.",
      "zh-hans": "此页面是他人的用户讨论页面，因此不支持 Easy Archive 快速存档。",
      "zh-hant": "此頁面為他人用戶討論頁面，故不支援 Easy Archive 快速存檔。"
    }),
    to_enable: (0, import_ext_gadget.localize)({
      en: "This page is not using Easy Archive.",
      "zh-hans": "此页面没有启用 Easy Archive。",
      "zh-hant": "本頁没有啟用 Easy Archive。"
    }),
    enable_on_generic_page: (0, import_ext_gadget.localize)({
      en: "This page is not your user talk page. However Easy Archive still can be used if needed.To enable it, add {{Easy Archive|to=[Archive location]}} template to this page.",
      "zh-hans": "此页面不是您的用户讨论页面。不过，若需要，此页面可以启用 Easy Archive。若要在此页面使用 Easy Archive，请在页面上添加模板 {{Easy Archive|to=存档位置}}。",
      "zh-hant": "此頁面不是您的用戶討論頁面。不過，若需要，此頁面可以啟用 Easy Archive。若要在此頁面使用 Easy Archive，請在頁面上添加模板 {{Easy Archive|to=存檔位置}}。"
    }),
    please_enable: (0, import_ext_gadget.localize)({
      en: "Add {{Easy Archive|to=[Archive location]}} to this page to start using Easy Archive.",
      "zh-hans": "请在此页面加入 {{Easy Archive|to=存档地址}} 来启用 Easy Archive。",
      "zh-hant": "請在此頁面加入 {{Easy Archive|to=存檔位置}} 來啟用 Easy Archive。"
    }),
    please_enable_elaborate: (0, import_ext_gadget.localize)({
      en: "You have the Easy Archive functionality enabled but your talk page hasn't been configured yet. To take advantage of Easy Archive, add {{Easy Archive|to=[Archive location]}} template to this page.",
      "zh-hans": "您的账号已经支持 Easy Archive，但是，为了开始使用该功能，您还需要在自己的用户讨论页面上添加模板 {{Easy Archive|to=存档位置}}。",
      "zh-hant": "您的賬號已經支持 Easy Archive，但是，為了開始使用該功能，您還需要在自己的用戶討論頁面上添加模板 {{Easy Archive|to=存檔位置}}。"
    }),
    left_par_split: (0, import_ext_gadget.localize)({
      en: " (",
      zh: "（"
    }),
    right_par: (0, import_ext_gadget.localize)({
      en: ")",
      zh: "）"
    }),
    period: (0, import_ext_gadget.localize)({
      en: ".",
      zh: "。"
    }),
    archive_path_colon_split: (0, import_ext_gadget.localize)({
      en: "Archive location: ",
      "zh-hans": "存档地址：",
      "zh-hant": "存檔至："
    }),
    loading_section_i: (0, import_ext_gadget.localize)({
      en: "Loading section $1",
      "zh-hans": "正在读取第 $1 节的内容",
      "zh-hant": "正在讀取第 $1 節的內容"
    }),
    deleting_section_i: (0, import_ext_gadget.localize)({
      en: "Deleting section $1",
      "zh-hans": "正在删除第 $1 节的内容",
      "zh-hant": "正在刪除第 $1 節的內容"
    }),
    done_section_i: (0, import_ext_gadget.localize)({
      en: "Section $1 has been archived to $2",
      "zh-hans": "已经将第 $1 节存档到 $2",
      "zh-hant": "已經將第 $1 節存檔到 $2"
    }),
    done_deleting_section_i: (0, import_ext_gadget.localize)({
      en: "Section $1 has been deleted",
      "zh-hans": "已经将第 $1 节删除",
      "zh-hant": "已經將第 $1 節刪除"
    }),
    being_archived: (0, import_ext_gadget.localize)({
      en: "being archived",
      "zh-hans": "存档中",
      "zh-hant": "存檔中"
    }),
    being_deleted: (0, import_ext_gadget.localize)({
      en: "being deleted",
      "zh-hans": "删除中",
      "zh-hant": "刪除中"
    }),
    already_archived: (0, import_ext_gadget.localize)({
      en: "archived",
      "zh-hans": "已存档",
      "zh-hant": "已存檔"
    }),
    already_deleted: (0, import_ext_gadget.localize)({
      en: "deleted",
      "zh-hans": "已删除",
      "zh-hant": "已刪除"
    }),
    others_talk_elaborate: (0, import_ext_gadget.localize)({
      en: "This page is another user's talk page. You cannot archive the topics on this page for him/her",
      "zh-hans": "这是另一名用户的讨论页面，您不能代替另一名用户存档。",
      "zh-hant": "這是另一名用戶的討論頁面，您不能代替另一名用戶存檔。"
    }),
    page_not_supported: (0, import_ext_gadget.localize)({
      en: "This page is not supported by Easy Archive.",
      "zh-hans": "此页面不支持 Easy Archive。",
      "zh-hant": "此頁面不支持 Easy Archive。"
    }),
    page_not_supported_elaborate: (0, import_ext_gadget.localize)({
      en: "These pages are not supported by Easy Archive: File, Template, Module, MediaWiki, Category, Special, JavaScript, CSS, JSON.",
      "zh-hans": "这些页面不受 Easy Archive 支持：File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。",
      "zh-hant": "這些頁面不受 Easy Archive 支持：File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。"
    }),
    problem_with_archive_location_main_space: (0, import_ext_gadget.localize)({
      en: 'Currently the archive location of this page, "$1", is under the article namespace, where archives should not be normally directed to. Please check if you have the correct archive location.',
      "zh-hans": "此页面目前的存档地址是“$1”，在条目名称空间之下。一般而言不应向条目名称空间进行存档，请检查存档地址。",
      "zh-hant": "此頁面當前的存檔地址是「$1」，在條目名稱空間之下。一般而言不應向條目名稱空間進行存檔，請檢查存檔地址。"
    }),
    problem_with_archive_location_same_page: (0, import_ext_gadget.localize)({
      en: 'Currently the archive location of this page, "$1", is this page itself, Easy archive cannot operate like this. ',
      "zh-hans": "此页面目前的存档地址是“$1”，和此页面名称相同。Easy Archive 无法按此地址存档。",
      "zh-hant": "此頁面當前的存檔地址是「$1」，和此頁面名稱相同。Easy Archive 無法按此地址存檔。"
    }),
    archive_summary: (0, import_ext_gadget.localize)({
      en: "archive section",
      "zh-hans": "存档段落",
      "zh-hant": "存檔段落"
    }),
    delete_summary: (0, import_ext_gadget.localize)({
      en: "delete section",
      "zh-hans": "删除段落",
      "zh-hant": "刪除段落"
    })
  };
};
//! src/EasyArchive/EasyArchive.jsx
var import_ext_gadget3 = require("ext.gadget.Util");
var import_ext_gadget4 = require("ext.gadget.Toastify");
(function easyArchive(_window$easy_archive, _window$easy_archive$, _window$easy_archive$2, _window$easy_archive$3) {
  if (mw.config.get("wgNamespaceNumber") < 0 || mw.config.get("wgPageName") === "Qiuwen:首页") {
    return;
  }
  if (!window.easy_archive) {
    window.easy_archive = {};
  }
  const expose = /* @__PURE__ */ (() => {
    const asyncPost = (param, callback) => {
      const api = (0, import_ext_gadget3.initMwApi)("EasyAchive/3.0");
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
  window.easy_archive.settings_string = "#set%|?									\ndisplay section delete link	%sec-del|1?	\ndisplay section archive line	%sec-arc|1?	\ndisplay control bar at top	%top-bar|0?	\narchive location				%arc-loc|?	\nsubsection effectiveness		%sub-sec|2?	\nconfirm action				%confirm|0?	\nis this data initialized		%data-init|0? \n";
  window.easy_archive.settings = new Pare_str(window.easy_archive.settings_string);
  window.easy_archive.my_user_talk = null;
  (_window$easy_archive$ = (_window$easy_archive = window.easy_archive).never_enable_on_these_pages_regex) !== null && _window$easy_archive$ !== void 0 ? _window$easy_archive$ : _window$easy_archive.never_enable_on_these_pages_regex = [];
  window.easy_archive.dis_support_these_pages_regex = [/^File:.*$/, /^MediaWiki:.*$/, /^Module:.*$/, /^Category:.*$/, /^Template:.*$/, /^Special:.*$/, /^User:.*\/?.*\.js$/, /^User:.*\/?.*\.css$/, /^User:.*\/?.*\.json$/];
  const settings_span_collection = document.querySelectorAll(".easy_archive_data_point_collection");
  const [settings_span] = settings_span_collection;
  const settings = settings_span ? new Pare_str(settings_span.innerHTML) : new Pare_str("");
  if (settings.find("data-init") === "1") {
    window.easy_archive.settings_string = settings_span.innerHTML;
    window.easy_archive.settings = new Pare_str(window.easy_archive.settings_string);
  }
  window.easy_archive.on_user_talk = mw.config.get("wgNamespaceNumber") === 3;
  window.easy_archive.my_user_talk = window.easy_archive.on_user_talk && (() => {
    let page_name = mw.config.get("wgPageName").split(":");
    page_name[0] = "";
    page_name = page_name.join("");
    [page_name] = page_name.split("/");
    const user_name = mw.config.get("wgUserName");
    return user_name.split("_").join("").split(" ").join("") === page_name.split("_").join("").split(" ").join("");
  })();
  window.easy_archive.has_template = settings.find("data-init") === "1";
  window.easy_archive.others_user_talk = window.easy_archive.my_user_talk === false && window.easy_archive.on_user_talk === true;
  window.easy_archive.on_article = mw.config.get("wgNamespaceNumber") === 0;
  window.easy_archive.on_hist_version = mw.config.get("wgCurRevisionId") - mw.config.get("wgRevisionId") !== 0;
  easy_archive_lang();
  const arc_sum = (_window$easy_archive$2 = window.easy_archive.user_custom_archive_summary) !== null && _window$easy_archive$2 !== void 0 ? _window$easy_archive$2 : null;
  const del_sum = (_window$easy_archive$3 = window.easy_archive.user_custom_delete_summary) !== null && _window$easy_archive$3 !== void 0 ? _window$easy_archive$3 : null;
  const sanitize_html = (string) => (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;")
  );
  const message = (tag, para_list) => {
    try {
      let content = window.easy_archive.lang[tag];
      for (let has_unfulfilled_para = true, _i = 0; has_unfulfilled_para; _i++) {
        const search = "$".concat(_i + 1);
        if (content.includes(search)) {
          content = para_list[_i] ? content.split(search).join(para_list[_i]) : content.split(search).join("");
        } else {
          has_unfulfilled_para = false;
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
        (0, import_ext_gadget4.toastify)({
          text: message(tag_ding, [section_number.toString(), to]),
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
    }, del_sum || message("delete_summary"));
  };
  window.easy_archive.delete_section = (section_number, _nominal) => {
    report_doneness_ui(_nominal, "delete", "", "ongoing").section_link();
    delete_section_core(section_number, _nominal);
  };
  const archive_section_core = (section_number, _nominal) => {
    const actual_section_number = actual_section(section_number);
    const to = window.easy_archive.settings.find("arc-loc");
    report_doneness_ui(_nominal, "archive", to, "ongoing").ding();
    expose.archive_section(mw.config.get("wgPageName"), actual_section_number, to, () => {
      report_doneness_ui(_nominal, "archive", to, "done").ding();
      report_doneness_ui(_nominal, "archive", to, "done").section_link();
      nominal_sections[section_number] = true;
    }, arc_sum || message("archive_summary"));
  };
  window.easy_archive.archive_section = (section_number, _nominal) => {
    const to = window.easy_archive.settings.find("arc-loc");
    report_doneness_ui(_nominal, "archive", to, "ongoing").section_link();
    archive_section_core(section_number, _nominal);
  };
  window.easy_archive.elaborate_notice = (notice_tag_name) => {
    const notice_tag_dictionary = {
      please_enable_elaborate: ["please_enable_elaborate"],
      others_talk_elaborate: ["others_talk_elaborate"],
      enable_on_generic_page: ["enable_on_generic_page"],
      problem_with_archive_location_main_space: ["problem_with_archive_location_main_space", "warning", "long", false, [sanitize_html(window.easy_archive.settings.find("arc-loc"))]],
      problem_with_archive_location_same_page: ["problem_with_archive_location_same_page", "warning", "long", false, [sanitize_html(window.easy_archive.settings.find("arc-loc"))]],
      page_not_supported_elaborate: ["page_not_supported_elaborate"]
    };
    const notice_set = notice_tag_dictionary[notice_tag_name] || false;
    if (notice_set !== false) {
      const [ntag, ntype, nttl, npersist, nsubst] = notice_set;
      const toastifyInstance = (0, import_ext_gadget4.toastify)({
        node: /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, message(ntag, nsubst)),
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
  const pipe_html = /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
    class: "mw-editsection-divider"
  }, " | ");
  const section_delete_interface_inhibit = window.easy_archive.settings.find("sec-del") === "0" || window.easy_archive.settings.find("data-init") === "0";
  const section_archive_interface_inhibit = window.easy_archive.settings.find("sec-arc") === "0" || window.easy_archive.settings.find("data-init") === "0";
  let section_delete_interface_html;
  let section_archive_interface_html;
  const section_id_span_html = (order_no) => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
    class: ["easy-archive-section-id-span", "easy-archive-section-id-span-order-".concat(order_no)],
    style: {
      display: "none"
    }
  }, "section");
  const footer_info_ele = document.querySelector("#footer-info") || document.querySelectorAll(".page-info")[0];
  if (!footer_info_ele) {
    return;
  }
  const is_in_blacklist = (blacklist) => {
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
  const element_wrap = (id, innerElement) => {
    if (WG_SKIN === "citizen") {
      return /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
        className: "page-info__item",
        id
      }, innerElement);
    } else if (["vector", "vector-2022", "gongbi"].includes(WG_SKIN) || document.querySelector("ul#footer-info")) {
      return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
        id
      }, innerElement);
    }
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
      id
    }, innerElement);
  };
  if (window.easy_archive.on_article || window.easy_archive.on_hist_version) {
  } else if (is_in_blacklist(window.easy_archive.never_enable_on_these_pages_regex)) {
  } else if (is_in_blacklist(window.easy_archive.dis_support_these_pages_regex)) {
    footer_info_ele.prepend(element_wrap("easy_archive_enable_notice", /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
      style: {
        color: "inherit"
      },
      onClick: (event) => {
        event.preventDefault();
        window.easy_archive.elaborate_notice("page_not_supported_elaborate");
      }
    }, message("page_not_supported"))));
  } else if (mw.config.get("wgPageName") === window.easy_archive.settings.find("arc-loc")) {
    window.easy_archive.elaborate_notice("problem_with_archive_location_same_page");
  } else if (window.easy_archive.has_template && !window.easy_archive.others_user_talk) {
    if (/.+:.+/.test(window.easy_archive.settings.find("arc-loc")) !== true) {
      window.easy_archive.elaborate_notice("problem_with_archive_location_main_space");
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
          section_delete_interface_html = section_delete_interface_inhibit ? /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null) : /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, pipe_html, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
            onClick: (event) => {
              event.preventDefault();
              window.easy_archive.delete_section(actual, nominal);
            }
          }, message("delete")));
          section_archive_interface_html = section_archive_interface_inhibit ? /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null) : /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, pipe_html, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
            onClick: (event) => {
              event.preventDefault();
              window.easy_archive.archive_section(actual, nominal);
            }
          }, message("archive")));
          ele.childNodes[child_node_number].after(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, section_delete_interface_html, section_archive_interface_html, section_id_span_html(nominal.toString())));
        } else {
          j++;
        }
      }
      window.easy_archive.section_count = i - j + 1;
      footer_info_ele.prepend(element_wrap("easy_archive_supports_notice", /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, message("supports"), message("left_par_split"), message("archive_path_colon_split"), /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
        href: "/wiki/".concat(sanitize_html(window.easy_archive.settings.find("arc-loc")))
      }, sanitize_html(window.easy_archive.settings.find("arc-loc"))), message("right_par"), message("period"))));
    };
    normal_function_inject_interface();
  } else if (window.easy_archive.others_user_talk === true) {
    footer_info_ele.prepend(element_wrap("easy_archive_enable_notice", /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
      style: {
        color: "inherit"
      },
      onClick: (event) => {
        event.preventDefault();
        window.easy_archive.elaborate_notice("others_talk_elaborate");
      }
    }, message("others_page"))));
  } else if (window.easy_archive.my_user_talk === false) {
    footer_info_ele.prepend(element_wrap("easy_archive_enable_notice", /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
      style: {
        color: "inherit"
      },
      onClick: (event) => {
        event.preventDefault();
        window.easy_archive.elaborate_notice("enable_on_generic_page");
      }
    }, message("to_enable"))));
  } else {
    footer_info_ele.prepend(element_wrap("easy_archive_enable_notice", /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
      style: {
        color: "inherit"
      },
      onClick: (event) => {
        event.preventDefault();
        window.easy_archive.elaborate_notice("please_enable_elaborate");
      }
    }, message("please_enable"))));
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvcGFyZV9zdHIudHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLmpzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9pMThuLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBtaW5pZmllZCBjb2RlIGRlcGVuZGVuY3kgZnVuY3Rpb25zXG5jbGFzcyBQYXJlX3N0ciB7XG5cdHN0cjogc3RyaW5nO1xuXHRsZWZ0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGRlbGltOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdHJpZ2h0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0Y29uc3RydWN0b3IocGFyZV9zdHJpbmc6IHN0cmluZywgY29uZmlnOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuXHRcdHRoaXMuc3RyID0gcGFyZV9zdHJpbmc7XG5cdFx0dGhpcy5sZWZ0ID0gJygnO1xuXHRcdHRoaXMuZGVsaW0gPSAnOic7XG5cdFx0dGhpcy5yaWdodCA9ICcpJztcblx0XHRpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdGNvbmZpZyA9IFN0cmluZyhjb25maWcpO1xuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHRwYXJlX3N0cmluZy5sZW5ndGggPiA2ICYmXG5cdFx0XHQvWyMlQF1bU3NdW0VlXVtUdF0vLnRlc3QocGFyZV9zdHJpbmcuc2xpY2UoMCwgNCkpICYmXG5cdFx0XHQhY29uZmlnLmluY2x1ZGVzKCdpZ25vcmUtc2V0Jylcblx0XHQpIHtcblx0XHRcdFssICwgLCAsIHRoaXMubGVmdCwgdGhpcy5kZWxpbSwgdGhpcy5yaWdodF0gPSBwYXJlX3N0cmluZztcblx0XHRcdGlmICh0aGlzLmxlZnQgPT09IHRoaXMucmlnaHQgfHwgdGhpcy5sZWZ0ID09PSB0aGlzLmRlbGltIHx8IHRoaXMucmlnaHQgPT09IHRoaXMuZGVsaW0pIHtcblx0XHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKFwiUG91bmQgc2V0IHN0YXRlbWVudCBoYXMgcmVwZXRpdGl2ZSBjaGFyYWN0ZXJzLiBFLmcuICcjc2V0fDp8JyBpcyBpbGxlZ2FsLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmaW5kKGtleTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG5cdFx0a2V5ID0gdGhpcy5sZWZ0ICsga2V5ICsgdGhpcy5kZWxpbTtcblx0XHRpZiAoIXRoaXMuc3RyLmluY2x1ZGVzKGtleSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5zdHIuc3BsaXQoa2V5KVsxXT8uc3BsaXQodGhpcy5yaWdodCBhcyBzdHJpbmcpWzBdO1xuXHR9XG59XG5cbmV4cG9ydCB7UGFyZV9zdHJ9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbCAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudCAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7UGFyZV9zdHJ9IGZyb20gJy4vbW9kdWxlcy9wYXJlX3N0cic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge1dHX1NLSU59IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2Vhc3lfYXJjaGl2ZV9sYW5nfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG4oZnVuY3Rpb24gZWFzeUFyY2hpdmUoKSB7XG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpIDwgMCB8fCBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykgPT09ICdRaXV3ZW466aaW6aG1Jykge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoIXdpbmRvdy5lYXN5X2FyY2hpdmUpIHtcblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlID0ge307XG5cdH1cblx0Ly8gY29tbW9uIHJlcG8uXG5cdGNvbnN0IGV4cG9zZSA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgYXN5bmNQb3N0ID0gKHBhcmFtLCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0Y29uc3QgYXBpID0gaW5pdE13QXBpKCdFYXN5QWNoaXZlLzMuMCcpO1xuXHRcdFx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtKS50aGVuKGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IGdldFBhZ2UgPSAodGl0bGUsIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRjb25zdCBwYXJhbSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiBbJ3JldmlzaW9ucyddLFxuXHRcdFx0XHRydnByb3A6IFsnaWRzJywgJ2ZsYWdzJywgJ3RpbWVzdGFtcCcsICd1c2VyJywgJ3VzZXJpZCcsICdzaXplJywgJ2NvbW1lbnQnLCAndGFncycsICdjb250ZW50J10sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0XHR9O1xuXHRcdFx0YXN5bmNQb3N0KHBhcmFtLCBjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRjb25zdCBnZXRQYWdlU2VjdGlvbiA9ICh0aXRsZSwgc2VjdGlvbiwgY2FsbGJhY2spID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHRcdHJ2cHJvcDogWydjb250ZW50J10sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0XHRcdHJ2c2VjdGlvbjogc2VjdGlvbixcblx0XHRcdH07XG5cdFx0XHRhc3luY1Bvc3QocGFyYW0sIGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IHBpY2tQYWdlQ29udGVudCA9IChkYXRhKSA9PiB7XG5cdFx0XHRpZiAoZGF0YS5xdWVyeSAmJiBkYXRhLnF1ZXJ5LnBhZ2VzICYmIGRhdGEucXVlcnkucGFnZXNbMF0gJiYgZGF0YS5xdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0pIHtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXG5cdFx0XHRcdHJldHVybiBkYXRhLnF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5jb250ZW50O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0Y29uc3QgdGVsbFBhZ2VFeGlzdCA9IChkYXRhKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIGRhdGEgIT09ICdvYmplY3QnIHx8ICFkYXRhLnF1ZXJ5IHx8ICFkYXRhLnF1ZXJ5LnBhZ2VzIHx8IGRhdGEucXVlcnkucGFnZXNbMF0ubWlzc2luZykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdGNvbnN0IGVkaXQgPSAodGl0bGUsIHNlY3Rpb24sIHRleHQsIHN1bW1hcnksIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRjb25zdCBwYXJhbSA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHR0ZXh0LFxuXHRcdFx0fTtcblx0XHRcdGlmIChzZWN0aW9uKSB7XG5cdFx0XHRcdHBhcmFtLnNlY3Rpb24gPSBzZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0YXN5bmNQb3N0KHBhcmFtLCBjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRjb25zdCBlZGl0QXBwZW5kID0gKHBhZ2UsIGFkZGVkX2NvbnRlbnQsIHN1bW1hcnksIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRnZXRQYWdlKHBhZ2UsIChkYXRhKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsX2NvbnRlbnQgPSB0ZWxsUGFnZUV4aXN0KGRhdGEpID09PSBmYWxzZSA/ICcnIDogcGlja1BhZ2VDb250ZW50KGRhdGEpO1xuXHRcdFx0XHRlZGl0KHBhZ2UsIG51bGwsIFN0cmluZyhvcmlnaW5hbF9jb250ZW50KSArIGFkZGVkX2NvbnRlbnQsIHN1bW1hcnksIGNhbGxiYWNrKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0Y29uc3QgYXJjaGl2ZVNlY3Rpb24gPSAodGl0bGUsIHNlY3Rpb24sIHRhcmdldFRpdGxlLCBjYWxsYmFjaywgc3VtbWFyeSkgPT4ge1xuXHRcdFx0Z2V0UGFnZVNlY3Rpb24odGl0bGUsIHNlY3Rpb24sIChkYXRhKSA9PiB7XG5cdFx0XHRcdGVkaXRBcHBlbmQodGFyZ2V0VGl0bGUsIGBcXG5cXG4ke3BpY2tQYWdlQ29udGVudChkYXRhKX1gLCBzdW1tYXJ5KTtcblx0XHRcdFx0ZWRpdCh0aXRsZSwgc2VjdGlvbi50b1N0cmluZygpLCAnJywgc3VtbWFyeSwgY2FsbGJhY2spO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRjb25zdCBkZWxldGVTZWN0aW9uID0gKHRpdGxlLCBzZWN0aW9uLCBjYWxsYmFjaywgc3VtbWFyeSkgPT4ge1xuXHRcdFx0ZWRpdCh0aXRsZSwgc2VjdGlvbi50b1N0cmluZygpLCAnJywgc3VtbWFyeSwgY2FsbGJhY2spO1xuXHRcdH07XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFyY2hpdmVfc2VjdGlvbjogYXJjaGl2ZVNlY3Rpb24sXG5cdFx0XHRkZWxldGVfc2VjdGlvbjogZGVsZXRlU2VjdGlvbixcblx0XHR9O1xuXHR9KSgpO1xuXHQvLyBkZWZhdWx0IHNldHRpbmdzOlxuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzX3N0cmluZyA9XG5cdFx0JyNzZXQlfD9cdFx0XHRcdFx0XHRcdFx0XHRcXG4nICtcblx0XHQnZGlzcGxheSBzZWN0aW9uIGRlbGV0ZSBsaW5rXHQlc2VjLWRlbHwxP1x0XFxuJyArXG5cdFx0J2Rpc3BsYXkgc2VjdGlvbiBhcmNoaXZlIGxpbmVcdCVzZWMtYXJjfDE/XHRcXG4nICtcblx0XHQnZGlzcGxheSBjb250cm9sIGJhciBhdCB0b3BcdCV0b3AtYmFyfDA/XHRcXG4nICtcblx0XHQnYXJjaGl2ZSBsb2NhdGlvblx0XHRcdFx0JWFyYy1sb2N8P1x0XFxuJyArXG5cdFx0J3N1YnNlY3Rpb24gZWZmZWN0aXZlbmVzc1x0XHQlc3ViLXNlY3wyP1x0XFxuJyArXG5cdFx0J2NvbmZpcm0gYWN0aW9uXHRcdFx0XHQlY29uZmlybXwwP1x0XFxuJyArXG5cdFx0J2lzIHRoaXMgZGF0YSBpbml0aWFsaXplZFx0XHQlZGF0YS1pbml0fDA/IFxcbic7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MgPSBuZXcgUGFyZV9zdHIod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5nc19zdHJpbmcpO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm15X3VzZXJfdGFsayA9IG51bGw7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUubmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4ID8/PSBbXTtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5kaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCA9IFtcblx0XHQvXkZpbGU6LiokLyxcblx0XHQvXk1lZGlhV2lraTouKiQvLFxuXHRcdC9eTW9kdWxlOi4qJC8sXG5cdFx0L15DYXRlZ29yeTouKiQvLFxuXHRcdC9eVGVtcGxhdGU6LiokLyxcblx0XHQvXlNwZWNpYWw6LiokLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmNzcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzb24kLyxcblx0XTtcblx0Y29uc3Qgc2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVhc3lfYXJjaGl2ZV9kYXRhX3BvaW50X2NvbGxlY3Rpb24nKTtcblx0Y29uc3QgW3NldHRpbmdzX3NwYW5dID0gc2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uO1xuXHRjb25zdCBzZXR0aW5ncyA9IHNldHRpbmdzX3NwYW4gPyBuZXcgUGFyZV9zdHIoc2V0dGluZ3Nfc3Bhbi5pbm5lckhUTUwpIDogbmV3IFBhcmVfc3RyKCcnKTtcblx0aWYgKHNldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMScpIHtcblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzX3N0cmluZyA9IHNldHRpbmdzX3NwYW4uaW5uZXJIVE1MO1xuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MgPSBuZXcgUGFyZV9zdHIod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5nc19zdHJpbmcpO1xuXHR9XG5cdC8vIGlkZW50aWZ5IGlmIEVhc3kgQXJjaGl2ZSBjYW4gYmUgdXNlZCBvbiB0aGUgcGFnZSAtIGNvbXBhdGliaWxpdHlcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5vbl91c2VyX3RhbGsgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSAzO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm15X3VzZXJfdGFsayA9XG5cdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5vbl91c2VyX3RhbGsgJiZcblx0XHQoKCkgPT4ge1xuXHRcdFx0bGV0IHBhZ2VfbmFtZSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5zcGxpdCgnOicpO1xuXHRcdFx0cGFnZV9uYW1lWzBdID0gJyc7XG5cdFx0XHRwYWdlX25hbWUgPSBwYWdlX25hbWUuam9pbignJyk7XG5cdFx0XHRbcGFnZV9uYW1lXSA9IHBhZ2VfbmFtZS5zcGxpdCgnLycpO1xuXHRcdFx0Y29uc3QgdXNlcl9uYW1lID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dXNlcl9uYW1lLnNwbGl0KCdfJykuam9pbignJykuc3BsaXQoJyAnKS5qb2luKCcnKSA9PT0gcGFnZV9uYW1lLnNwbGl0KCdfJykuam9pbignJykuc3BsaXQoJyAnKS5qb2luKCcnKVxuXHRcdFx0KTtcblx0XHR9KSgpO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLmhhc190ZW1wbGF0ZSA9IHNldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMSc7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUub3RoZXJzX3VzZXJfdGFsayA9XG5cdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5teV91c2VyX3RhbGsgPT09IGZhbHNlICYmIHdpbmRvdy5lYXN5X2FyY2hpdmUub25fdXNlcl90YWxrID09PSB0cnVlO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX2FydGljbGUgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSAwO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX2hpc3RfdmVyc2lvbiA9IG13LmNvbmZpZy5nZXQoJ3dnQ3VyUmV2aXNpb25JZCcpIC0gbXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJykgIT09IDA7XG5cdGVhc3lfYXJjaGl2ZV9sYW5nKCk7XG5cdGNvbnN0IGFyY19zdW0gPSB3aW5kb3cuZWFzeV9hcmNoaXZlLnVzZXJfY3VzdG9tX2FyY2hpdmVfc3VtbWFyeSA/PyBudWxsO1xuXHRjb25zdCBkZWxfc3VtID0gd2luZG93LmVhc3lfYXJjaGl2ZS51c2VyX2N1c3RvbV9kZWxldGVfc3VtbWFyeSA/PyBudWxsO1xuXHRjb25zdCBzYW5pdGl6ZV9odG1sID0gKHN0cmluZykgPT5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cblx0XHRzdHJpbmdcblx0XHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0XHQucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jylcblx0XHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cdC8vIG11bHRpIGxhbmd1YWdlIHNlbGVjdG9yIGRlZmluaXRpb25cblx0Y29uc3QgbWVzc2FnZSA9ICh0YWcsIHBhcmFfbGlzdCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgY29udGVudCA9IHdpbmRvdy5lYXN5X2FyY2hpdmUubGFuZ1t0YWddO1xuXHRcdFx0Zm9yIChsZXQgaGFzX3VuZnVsZmlsbGVkX3BhcmEgPSB0cnVlLCBfaSA9IDA7IGhhc191bmZ1bGZpbGxlZF9wYXJhOyBfaSsrKSB7XG5cdFx0XHRcdGNvbnN0IHNlYXJjaCA9IGAkJHtfaSArIDF9YDtcblx0XHRcdFx0aWYgKGNvbnRlbnQuaW5jbHVkZXMoc2VhcmNoKSkge1xuXHRcdFx0XHRcdGNvbnRlbnQgPSBwYXJhX2xpc3RbX2ldXG5cdFx0XHRcdFx0XHQ/IGNvbnRlbnQuc3BsaXQoc2VhcmNoKS5qb2luKHBhcmFfbGlzdFtfaV0pXG5cdFx0XHRcdFx0XHQ6IGNvbnRlbnQuc3BsaXQoc2VhcmNoKS5qb2luKCcnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRoYXNfdW5mdWxmaWxsZWRfcGFyYSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnKCEpIHVuZGVmaW5lZCBsYW5ndWFnZSBjb250ZW50Jztcblx0XHR9XG5cdH07XG5cdGNvbnN0IG5vbWluYWxfc2VjdGlvbnMgPSAoKGNvdW50KSA9PiB7XG5cdFx0Y29uc3QgYXJyID0gQXJyYXkuZnJvbSh7XG5cdFx0XHRsZW5ndGg6IGNvdW50LFxuXHRcdH0pO1xuXHRcdGZvciAobGV0IF9pID0gMDsgX2kgPCBjb3VudDsgX2krKykge1xuXHRcdFx0YXJyW19pXSA9IGZhbHNlO1xuXHRcdH1cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cblx0XHRyZXR1cm4gYXJyO1xuXHR9KSh3aW5kb3cuZWFzeV9hcmNoaXZlLnNlY3Rpb25fY291bnQpO1xuXHRjb25zdCBhY3R1YWxfc2VjdGlvbiA9IChub21pbmFsX3NlY3Rpb25fbnVtYmVyKSA9PiB7XG5cdFx0bGV0IGxlc3MgPSAwO1xuXHRcdGZvciAobGV0IF9pID0gMDsgX2kgPCBub21pbmFsX3NlY3Rpb25fbnVtYmVyOyBfaSsrKSB7XG5cdFx0XHRpZiAobm9taW5hbF9zZWN0aW9uc1tfaV0gPT09IHRydWUpIHtcblx0XHRcdFx0bGVzcysrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbm9taW5hbF9zZWN0aW9uX251bWJlciAtIGxlc3M7XG5cdH07XG5cdC8vIC4uLiBpbnRlcmZhY2UgZG9uZVxuXHQvLyBhcmNoaXZpbmcgbG9naWMgaW5qZWN0aW9uXG5cdGNvbnN0IHJlcG9ydF9kb25lbmVzc191aSA9IChzZWN0aW9uX251bWJlciwgZG9uZW5lc3NfdHlwZSwgdG8sIG9uZ29pbmdfb3JfZG9uZSkgPT4ge1xuXHRcdGxldCB0YWdfZGluZztcblx0XHRsZXQgdGFnX3NlY3Rpb247XG5cdFx0bGV0IGRpbmdfdHlwZTtcblx0XHRsZXQgZGluZ19hdXRvaGlkZTtcblx0XHRpZiAob25nb2luZ19vcl9kb25lID09PSAnb25nb2luZycpIHtcblx0XHRcdGRpbmdfdHlwZSA9ICdpbmZvJztcblx0XHRcdGRpbmdfYXV0b2hpZGUgPSB0cnVlO1xuXHRcdFx0aWYgKGRvbmVuZXNzX3R5cGUgPT09ICdkZWxldGUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2RlbGV0aW5nX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2JlaW5nX2RlbGV0ZWQnO1xuXHRcdFx0fSBlbHNlIGlmIChkb25lbmVzc190eXBlID09PSAnYXJjaGl2ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnbG9hZGluZ19zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdiZWluZ19hcmNoaXZlZCc7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChvbmdvaW5nX29yX2RvbmUgPT09ICdkb25lJykge1xuXHRcdFx0ZGluZ190eXBlID0gJ3N1Y2Nlc3MnO1xuXHRcdFx0ZGluZ19hdXRvaGlkZSA9IGZhbHNlO1xuXHRcdFx0aWYgKGRvbmVuZXNzX3R5cGUgPT09ICdkZWxldGUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2RvbmVfZGVsZXRpbmdfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYWxyZWFkeV9kZWxldGVkJztcblx0XHRcdH0gZWxzZSBpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2FyY2hpdmUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2RvbmVfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYWxyZWFkeV9hcmNoaXZlZCc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IGFjdGlvbnMgPSB7XG5cdFx0XHRkaW5nOiAoKSA9PiB7XG5cdFx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IG1lc3NhZ2UodGFnX2RpbmcsIFtzZWN0aW9uX251bWJlci50b1N0cmluZygpLCB0b10pLFxuXHRcdFx0XHRcdFx0Y2xvc2U6ICFkaW5nX2F1dG9oaWRlLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IGRpbmdfYXV0b2hpZGUgPyAzMDAwIDogLTEsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRkaW5nX3R5cGVcblx0XHRcdFx0KTtcblx0XHRcdH0sXG5cdFx0XHRzZWN0aW9uX2xpbms6ICgpID0+IHtcblx0XHRcdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuLW9yZGVyLSR7c2VjdGlvbl9udW1iZXJ9YCk7XG5cdFx0XHRcdGNvbnN0IHBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRcdFx0XHRmb3IgKGxldCBfaSA9IDE7IF9pIDwgcG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggLSAyOyBfaSsrKSB7XG5cdFx0XHRcdFx0cG5vZGUuY2hpbGROb2Rlc1tfaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRub2RlLmlubmVySFRNTCA9IG1lc3NhZ2UodGFnX3NlY3Rpb24pO1xuXHRcdFx0XHRub2RlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblx0XHRcdFx0bm9kZS5zdHlsZS5jb2xvciA9ICdyZ2IoMCAwIDAvLjUpJztcblx0XHRcdH0sXG5cdFx0fTtcblx0XHRyZXR1cm4gYWN0aW9ucztcblx0fTtcblx0Y29uc3QgZGVsZXRlX3NlY3Rpb25fY29yZSA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCBhY3R1YWxfc2VjdGlvbl9udW1iZXIgPSBhY3R1YWxfc2VjdGlvbihzZWN0aW9uX251bWJlcik7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdvbmdvaW5nJykuZGluZygpO1xuXHRcdGV4cG9zZS5kZWxldGVfc2VjdGlvbihcblx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdGFjdHVhbF9zZWN0aW9uX251bWJlcixcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdkb25lJykuZGluZygpO1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ2RvbmUnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRcdFx0bm9taW5hbF9zZWN0aW9uc1tzZWN0aW9uX251bWJlcl0gPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGRlbF9zdW0gfHwgbWVzc2FnZSgnZGVsZXRlX3N1bW1hcnknKVxuXHRcdCk7XG5cdH07XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuZGVsZXRlX3NlY3Rpb24gPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdvbmdvaW5nJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0ZGVsZXRlX3NlY3Rpb25fY29yZShzZWN0aW9uX251bWJlciwgX25vbWluYWwpO1xuXHR9O1xuXHRjb25zdCBhcmNoaXZlX3NlY3Rpb25fY29yZSA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCBhY3R1YWxfc2VjdGlvbl9udW1iZXIgPSBhY3R1YWxfc2VjdGlvbihzZWN0aW9uX251bWJlcik7XG5cdFx0Y29uc3QgdG8gPSB3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKTtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdvbmdvaW5nJykuZGluZygpO1xuXHRcdGV4cG9zZS5hcmNoaXZlX3NlY3Rpb24oXG5cdFx0XHRtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHRhY3R1YWxfc2VjdGlvbl9udW1iZXIsXG5cdFx0XHR0byxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnZG9uZScpLmRpbmcoKTtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnZG9uZScpLnNlY3Rpb25fbGluaygpO1xuXHRcdFx0XHRub21pbmFsX3NlY3Rpb25zW3NlY3Rpb25fbnVtYmVyXSA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0YXJjX3N1bSB8fCBtZXNzYWdlKCdhcmNoaXZlX3N1bW1hcnknKVxuXHRcdCk7XG5cdH07XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuYXJjaGl2ZV9zZWN0aW9uID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdGNvbnN0IHRvID0gd2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJyk7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnb25nb2luZycpLnNlY3Rpb25fbGluaygpO1xuXHRcdGFyY2hpdmVfc2VjdGlvbl9jb3JlKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCk7XG5cdH07XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSA9IChub3RpY2VfdGFnX25hbWUpID0+IHtcblx0XHQvLyBhY3JvbnltIHNjaGVtZTogcmVmZXIgdG8gcXdlcnR5IGtleWJvYXJkIGxheW91dC4gKHA9OSlcblx0XHRjb25zdCBub3RpY2VfdGFnX2RpY3Rpb25hcnkgPSB7XG5cdFx0XHRwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZTogWydwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZSddLFxuXHRcdFx0b3RoZXJzX3RhbGtfZWxhYm9yYXRlOiBbJ290aGVyc190YWxrX2VsYWJvcmF0ZSddLFxuXHRcdFx0ZW5hYmxlX29uX2dlbmVyaWNfcGFnZTogWydlbmFibGVfb25fZ2VuZXJpY19wYWdlJ10sXG5cdFx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlOiBbXG5cdFx0XHRcdCdwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlJyxcblx0XHRcdFx0J3dhcm5pbmcnLFxuXHRcdFx0XHQnbG9uZycsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRbc2FuaXRpemVfaHRtbCh3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSldLFxuXHRcdFx0XSxcblx0XHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZTogW1xuXHRcdFx0XHQncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlJyxcblx0XHRcdFx0J3dhcm5pbmcnLFxuXHRcdFx0XHQnbG9uZycsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRbc2FuaXRpemVfaHRtbCh3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSldLFxuXHRcdFx0XSxcblx0XHRcdHBhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGU6IFsncGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZSddLFxuXHRcdH07XG5cdFx0Y29uc3Qgbm90aWNlX3NldCA9IG5vdGljZV90YWdfZGljdGlvbmFyeVtub3RpY2VfdGFnX25hbWVdIHx8IGZhbHNlO1xuXHRcdGlmIChub3RpY2Vfc2V0ICE9PSBmYWxzZSkge1xuXHRcdFx0Y29uc3QgW250YWcsIG50eXBlLCBudHRsLCBucGVyc2lzdCwgbnN1YnN0XSA9IG5vdGljZV9zZXQ7XG5cdFx0XHRjb25zdCB0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRub2RlOiA8c3Bhbj57bWVzc2FnZShudGFnLCBuc3Vic3QpfTwvc3Bhbj4sXG5cdFx0XHRcdFx0Y2xvc2U6IG50dGwgPT09ICdsb25nJyxcblx0XHRcdFx0XHRkdXJhdGlvbjogbnR0bCA9PT0gJ2xvbmcnID8gLTEgOiBudHRsLFxuXHRcdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChucGVyc2lzdCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG50eXBlXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0Ly8gcmVhbCBkZWFsIGhlcmVcblx0Ly8gaW50ZXJmYWNlIGluamVjdGlvbiAtIHByZXBhcmVcblx0bGV0IGkgPSAwO1xuXHRsZXQgaiA9IDA7XG5cdGxldCBlbGU7XG5cdGxldCBub21pbmFsO1xuXHRsZXQgYWN0dWFsO1xuXHRjb25zdCBwaXBlX2h0bWwgPSA8c3BhbiBjbGFzcz1cIm13LWVkaXRzZWN0aW9uLWRpdmlkZXJcIj4gJiMxMjQ7IDwvc3Bhbj47XG5cdGNvbnN0IHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9pbmhpYml0ID1cblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ3NlYy1kZWwnKSA9PT0gJzAnIHx8IHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnZGF0YS1pbml0JykgPT09ICcwJztcblx0Y29uc3Qgc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9pbmhpYml0ID1cblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ3NlYy1hcmMnKSA9PT0gJzAnIHx8IHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnZGF0YS1pbml0JykgPT09ICcwJztcblx0bGV0IHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9odG1sO1xuXHRsZXQgc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9odG1sO1xuXHRjb25zdCBzZWN0aW9uX2lkX3NwYW5faHRtbCA9IChvcmRlcl9ubykgPT4gKFxuXHRcdDxzcGFuXG5cdFx0XHRjbGFzcz17WydlYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuJywgYGVhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4tb3JkZXItJHtvcmRlcl9ub31gXX1cblx0XHRcdHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX1cblx0XHQ+XG5cdFx0XHRzZWN0aW9uXG5cdFx0PC9zcGFuPlxuXHQpO1xuXHRjb25zdCBmb290ZXJfaW5mb19lbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vdGVyLWluZm8nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZS1pbmZvJylbMF07XG5cdGlmICghZm9vdGVyX2luZm9fZWxlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIC4uLiBpbnRlcmZhY2UgaW5qZWN0aW9uIC0gbG9naWNcblx0Y29uc3QgaXNfaW5fYmxhY2tsaXN0ID0gKGJsYWNrbGlzdCkgPT4ge1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja2xpc3QpIHtcblx0XHRcdGlmIChlbGVtZW50LnRlc3QobXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRjb25zdCBlbGVtZW50X3dyYXAgPSAoaWQsIGlubmVyRWxlbWVudCkgPT4ge1xuXHRcdGlmIChXR19TS0lOID09PSAnY2l0aXplbicpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17J3BhZ2UtaW5mb19faXRlbSd9IGlkPXtpZH0+XG5cdFx0XHRcdFx0e2lubmVyRWxlbWVudH1cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKFsndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJywgJ2dvbmdiaSddLmluY2x1ZGVzKFdHX1NLSU4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykpIHtcblx0XHRcdHJldHVybiA8bGkgaWQ9e2lkfT57aW5uZXJFbGVtZW50fTwvbGk+O1xuXHRcdH1cblx0XHRyZXR1cm4gPGRpdiBpZD17aWR9Pntpbm5lckVsZW1lbnR9PC9kaXY+O1xuXHR9O1xuXHRpZiAod2luZG93LmVhc3lfYXJjaGl2ZS5vbl9hcnRpY2xlIHx8IHdpbmRvdy5lYXN5X2FyY2hpdmUub25faGlzdF92ZXJzaW9uKSB7XG5cdFx0Ly8gaW5zZXJ0IG5vIGludGVyZmFjZSBvbiBhbiBhcnRpY2xlIHBhZ2Ugb3IgYSBoaXN0b3J5IHZlcnNpb24uXG5cdH0gZWxzZSBpZiAoaXNfaW5fYmxhY2tsaXN0KHdpbmRvdy5lYXN5X2FyY2hpdmUubmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4KSkge1xuXHRcdC8vIGluc2VydCBubyBpbnRlcmZhY2UgaWYgdGhlIHBhZ2UgbmFtZSBpcyBibGFja2xpc3RlZC5cblx0fSBlbHNlIGlmIChpc19pbl9ibGFja2xpc3Qod2luZG93LmVhc3lfYXJjaGl2ZS5kaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCkpIHtcblx0XHQvLyBpbnNlcnQgbm90IHN1cHBvcnRlZCBub3RpY2UgaWYgdGhlIHBhZ2UgbmFtZSBpbmRpY2F0ZXMgdGhhdCBpdCBpcyBub3Qgc3VwcG9ydGVkLlxuXHRcdGZvb3Rlcl9pbmZvX2VsZS5wcmVwZW5kKFxuXHRcdFx0ZWxlbWVudF93cmFwKFxuXHRcdFx0XHQnZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UnLFxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdHN0eWxlPXt7Y29sb3I6ICdpbmhlcml0J319XG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5lbGFib3JhdGVfbm90aWNlKCdwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlJyk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHttZXNzYWdlKCdwYWdlX25vdF9zdXBwb3J0ZWQnKX1cblx0XHRcdFx0PC9hPlxuXHRcdFx0KVxuXHRcdCk7XG5cdH0gZWxzZSBpZiAobXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpID09PSB3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSkge1xuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSgncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlJyk7XG5cdH0gZWxzZSBpZiAod2luZG93LmVhc3lfYXJjaGl2ZS5oYXNfdGVtcGxhdGUgJiYgIXdpbmRvdy5lYXN5X2FyY2hpdmUub3RoZXJzX3VzZXJfdGFsaykge1xuXHRcdC8vIGFueSBwYWdlIHRoYXQgaGFzIHRlbXBsYXRlIHRoYXQncyBub3Qgb3RoZXJzJyB0YWxrIHBhZ2UuIGZ1bmN0aW9uIG5vcm1hbGx5LlxuXHRcdC8vICEhIHRoZSBhcmNoaXZlIGxvY2F0aW9uIGluIG1haW4gc3BhY2UgYW5kIG5lZWRzIGF0dGVudGlvbiAhIVxuXHRcdGlmICgvLis6LisvLnRlc3Qod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpICE9PSB0cnVlKSB7XG5cdFx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLmVsYWJvcmF0ZV9ub3RpY2UoJ3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UnKTtcblx0XHR9XG5cdFx0Y29uc3Qgbm9ybWFsX2Z1bmN0aW9uX2luamVjdF9pbnRlcmZhY2UgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBlZGl0U2VjdGlvbkNvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXctZWRpdHNlY3Rpb24nKTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBlZGl0U2VjdGlvbkNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZWxlID0gZWRpdFNlY3Rpb25Db2xsZWN0aW9uW2ldO1xuXHRcdFx0XHRjb25zdCB2ZSA9IC9bJj9ddmVhY3Rpb249ZWRpdC8udGVzdChlbGUuY2hpbGROb2Rlc1sxXS5ocmVmKTtcblx0XHRcdFx0Y29uc3QgY2hpbGRfbm9kZV9udW1iZXIgPSB2ZSA/IDMgOiAxO1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0ZWxlLnBhcmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaDInICYmXG5cdFx0XHRcdFx0ZWxlLnBhcmVudE5vZGUuaWQgIT09ICdmaXJzdEhlYWRpbmcnICYmXG5cdFx0XHRcdFx0ZGVjb2RlVVJJQ29tcG9uZW50KGVsZS5jaGlsZE5vZGVzW2NoaWxkX25vZGVfbnVtYmVyXS5ocmVmLnNwbGl0KC9bJj9ddGl0bGU9LylbMV0uc3BsaXQoJyYnKVswXSkgPT09XG5cdFx0XHRcdFx0XHRtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0YWN0dWFsID0gTnVtYmVyLnBhcnNlSW50KFxuXHRcdFx0XHRcdFx0ZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmhyZWYuc3BsaXQoL1smP11zZWN0aW9uPS8pWzFdLnNwbGl0KCcmJylbMF0sXG5cdFx0XHRcdFx0XHQxMFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0bm9taW5hbCA9IGkgLSBqICsgMTtcblx0XHRcdFx0XHRzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaHRtbCA9IHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9pbmhpYml0ID8gKFxuXHRcdFx0XHRcdFx0PD48Lz5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0e3BpcGVfaHRtbH1cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5kZWxldGVfc2VjdGlvbihhY3R1YWwsIG5vbWluYWwpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7bWVzc2FnZSgnZGVsZXRlJyl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0c2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9odG1sID0gc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9pbmhpYml0ID8gKFxuXHRcdFx0XHRcdFx0PD48Lz5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0e3BpcGVfaHRtbH1cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5hcmNoaXZlX3NlY3Rpb24oYWN0dWFsLCBub21pbmFsKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e21lc3NhZ2UoJ2FyY2hpdmUnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRlbGUuY2hpbGROb2Rlc1tjaGlsZF9ub2RlX251bWJlcl0uYWZ0ZXIoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHR7c2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2h0bWx9XG5cdFx0XHRcdFx0XHRcdHtzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2h0bWx9XG5cdFx0XHRcdFx0XHRcdHtzZWN0aW9uX2lkX3NwYW5faHRtbChub21pbmFsLnRvU3RyaW5nKCkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRqKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2VjdGlvbl9jb3VudCA9IGkgLSBqICsgMTtcblx0XHRcdGZvb3Rlcl9pbmZvX2VsZS5wcmVwZW5kKFxuXHRcdFx0XHRlbGVtZW50X3dyYXAoXG5cdFx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UnLFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHR7bWVzc2FnZSgnc3VwcG9ydHMnKX1cblx0XHRcdFx0XHRcdHttZXNzYWdlKCdsZWZ0X3Bhcl9zcGxpdCcpfVxuXHRcdFx0XHRcdFx0e21lc3NhZ2UoJ2FyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdCcpfVxuXHRcdFx0XHRcdFx0PGEgaHJlZj17YC93aWtpLyR7c2FuaXRpemVfaHRtbCh3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSl9YH0+XG5cdFx0XHRcdFx0XHRcdHtzYW5pdGl6ZV9odG1sKHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKX1cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdHttZXNzYWdlKCdyaWdodF9wYXInKX1cblx0XHRcdFx0XHRcdHttZXNzYWdlKCdwZXJpb2QnKX1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9O1xuXHRcdG5vcm1hbF9mdW5jdGlvbl9pbmplY3RfaW50ZXJmYWNlKCk7XG5cdH0gZWxzZSBpZiAod2luZG93LmVhc3lfYXJjaGl2ZS5vdGhlcnNfdXNlcl90YWxrID09PSB0cnVlKSB7XG5cdFx0Ly8gb3RoZXJzIHVzZXIgdGFsay5cblx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChcblx0XHRcdGVsZW1lbnRfd3JhcChcblx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyxcblx0XHRcdFx0PGFcblx0XHRcdFx0XHRzdHlsZT17e2NvbG9yOiAnaW5oZXJpdCd9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSgnb3RoZXJzX3RhbGtfZWxhYm9yYXRlJyk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHttZXNzYWdlKCdvdGhlcnNfcGFnZScpfVxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQpXG5cdFx0KTtcblx0fSBlbHNlIGlmICh3aW5kb3cuZWFzeV9hcmNoaXZlLm15X3VzZXJfdGFsayA9PT0gZmFsc2UpIHtcblx0XHQvLyBhIGdlbmVyaWMgcGFnZSB0aGF0IGRpZCBub3QgZW5hYmxlIGVhc3kgYXJjaGl2ZS5cblx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChcblx0XHRcdGVsZW1lbnRfd3JhcChcblx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyxcblx0XHRcdFx0PGFcblx0XHRcdFx0XHRzdHlsZT17e2NvbG9yOiAnaW5oZXJpdCd9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSgnZW5hYmxlX29uX2dlbmVyaWNfcGFnZScpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7bWVzc2FnZSgndG9fZW5hYmxlJyl9XG5cdFx0XHRcdDwvYT5cblx0XHRcdClcblx0XHQpO1xuXHR9IGVsc2Uge1xuXHRcdGZvb3Rlcl9pbmZvX2VsZS5wcmVwZW5kKFxuXHRcdFx0ZWxlbWVudF93cmFwKFxuXHRcdFx0XHQnZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UnLFxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdHN0eWxlPXt7Y29sb3I6ICdpbmhlcml0J319XG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5lbGFib3JhdGVfbm90aWNlKCdwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZScpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7bWVzc2FnZSgncGxlYXNlX2VuYWJsZScpfVxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSkoKTtcbiIsICJjb25zdCBXR19TS0lOOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCdza2luJyk7XG5cbmV4cG9ydCB7V0dfU0tJTn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuZXhwb3J0IGNvbnN0IGVhc3lfYXJjaGl2ZV9sYW5nID0gKCkgPT4ge1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLmxhbmcgPSB7XG5cdFx0ZGVsZXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZScsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHRhcmNoaXZlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0c3VwcG9ydHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGlzIGVuYWJsZWQgb24gdGhpcyB0YWxrIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pys6K6o6K666aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2ZScsXG5cdFx0fSksXG5cdFx0b3RoZXJzX3BhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGlzIG5vdCBlbmFibGVkLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLmmK/ku5bkurrnmoTnlKjmiLforqjorrrpobXpnaLvvIzlm6DmraTkuI3mlK/mjIEgRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLngrrku5bkurrnlKjmiLboqI7oq5bpoIHpnaLvvIzmlYXkuI3mlK/mj7QgRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0dG9fZW5hYmxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3QgdXNpbmcgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLmsqHmnInlkK/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+acrOmggeayoeacieWVn+eUqCBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdGVuYWJsZV9vbl9nZW5lcmljX3BhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCB5b3VyIHVzZXIgdGFsayBwYWdlLiBIb3dldmVyIEVhc3kgQXJjaGl2ZSBzdGlsbCBjYW4gYmUgdXNlZCBpZiBuZWVkZWQuVG8gZW5hYmxlIGl0LCBhZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdGVtcGxhdGUgdG8gdGhpcyBwYWdlLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmraTpobXpnaLkuI3mmK/mgqjnmoTnlKjmiLforqjorrrpobXpnaLjgILkuI3ov4fvvIzoi6XpnIDopoHvvIzmraTpobXpnaLlj6/ku6XlkK/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOivt+WcqOmhtemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPkvY3nva59feOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmraTpoIHpnaLkuI3mmK/mgqjnmoTnlKjmiLboqI7oq5bpoIHpnaLjgILkuI3pgY7vvIzoi6XpnIDopoHvvIzmraTpoIHpnaLlj6/ku6XllZ/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOiri+WcqOmggemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59feOAgicsXG5cdFx0fSksXG5cdFx0cGxlYXNlX2VuYWJsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdG8gdGhpcyBwYWdlIHRvIHN0YXJ0IHVzaW5nIEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+35Zyo5q2k6aG16Z2i5Yqg5YWlIHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+WcsOWdgH19IOadpeWQr+eUqCBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL5Zyo5q2k6aCB6Z2i5Yqg5YWlIHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn19IOS+huWVn+eUqCBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdHBsZWFzZV9lbmFibGVfZWxhYm9yYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogXCJZb3UgaGF2ZSB0aGUgRWFzeSBBcmNoaXZlIGZ1bmN0aW9uYWxpdHkgZW5hYmxlZCBidXQgeW91ciB0YWxrIHBhZ2UgaGFzbid0IGJlZW4gY29uZmlndXJlZCB5ZXQuIFRvIHRha2UgYWR2YW50YWdlIG9mIEVhc3kgQXJjaGl2ZSwgYWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRlbXBsYXRlIHRvIHRoaXMgcGFnZS5cIixcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOeahOi0puWPt+W3sue7j+aUr+aMgSBFYXN5IEFyY2hpdmXvvIzkvYbmmK/vvIzkuLrkuoblvIDlp4vkvb/nlKjor6Xlip/og73vvIzmgqjov5jpnIDopoHlnKjoh6rlt7HnmoTnlKjmiLforqjorrrpobXpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5L2N572ufX3jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo55qE6LOs6Jmf5bey57aT5pSv5oyBIEVhc3kgQXJjaGl2Ze+8jOS9huaYr++8jOeCuuS6humWi+Wni+S9v+eUqOipsuWKn+iDve+8jOaCqOmChOmcgOimgeWcqOiHquW3seeahOeUqOaItuiojuirlumggemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59feOAgicsXG5cdFx0fSksXG5cdFx0bGVmdF9wYXJfc3BsaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnICgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdHJpZ2h0X3BhcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHRwZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdFx0YXJjaGl2ZV9wYXRoX2NvbG9uX3NwbGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmUgbG9jYXRpb246ICcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPlnLDlnYDvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU6Iez77yaJyxcblx0XHR9KSxcblx0XHRsb2FkaW5nX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nIHNlY3Rpb24gJDEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo6K+75Y+W56ysICQxIOiKgueahOWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjoroDlj5bnrKwgJDEg56+A55qE5YWn5a65Jyxcblx0XHR9KSxcblx0XHRkZWxldGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGVsZXRpbmcgc2VjdGlvbiAkMScsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjliKDpmaTnrKwgJDEg6IqC55qE5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOWIqumZpOesrCAkMSDnr4DnmoTlhaflrrknLFxuXHRcdH0pLFxuXHRcdGRvbmVfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlY3Rpb24gJDEgaGFzIGJlZW4gYXJjaGl2ZWQgdG8gJDInLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey57uP5bCG56ysICQxIOiKguWtmOaho+WIsCAkMicsXG5cdFx0XHQnemgtaGFudCc6ICflt7LntpPlsIfnrKwgJDEg56+A5a2Y5qqU5YiwICQyJyxcblx0XHR9KSxcblx0XHRkb25lX2RlbGV0aW5nX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZWN0aW9uICQxIGhhcyBiZWVuIGRlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey57uP5bCG56ysICQxIOiKguWIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICflt7LntpPlsIfnrKwgJDEg56+A5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHRiZWluZ19hcmNoaXZlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5LitJyxcblx0XHR9KSxcblx0XHRiZWluZ19kZWxldGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2JlaW5nIGRlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOS4rScsXG5cdFx0fSksXG5cdFx0YWxyZWFkeV9hcmNoaXZlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5a2Y5qqUJyxcblx0XHR9KSxcblx0XHRhbHJlYWR5X2RlbGV0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHRvdGhlcnNfdGFsa19lbGFib3JhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiBcIlRoaXMgcGFnZSBpcyBhbm90aGVyIHVzZXIncyB0YWxrIHBhZ2UuIFlvdSBjYW5ub3QgYXJjaGl2ZSB0aGUgdG9waWNzIG9uIHRoaXMgcGFnZSBmb3IgaGltL2hlclwiLFxuXHRcdFx0J3poLWhhbnMnOiAn6L+Z5piv5Y+m5LiA5ZCN55So5oi355qE6K6o6K666aG16Z2i77yM5oKo5LiN6IO95Luj5pu/5Y+m5LiA5ZCN55So5oi35a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+mAmeaYr+WPpuS4gOWQjeeUqOaItueahOiojuirlumggemdou+8jOaCqOS4jeiDveS7o+abv+WPpuS4gOWQjeeUqOaItuWtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0cGFnZV9ub3Rfc3VwcG9ydGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZXNlIHBhZ2VzIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZTogRmlsZSwgVGVtcGxhdGUsIE1vZHVsZSwgTWVkaWFXaWtpLCBDYXRlZ29yeSwgU3BlY2lhbCwgSmF2YVNjcmlwdCwgQ1NTLCBKU09OLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfov5nkupvpobXpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8mkZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+mAmeS6m+mggemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77yaRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdH0pLFxuXHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZSBhcmNoaXZlIGxvY2F0aW9uIG9mIHRoaXMgcGFnZSwgXCIkMVwiLCBpcyB1bmRlciB0aGUgYXJ0aWNsZSBuYW1lc3BhY2UsIHdoZXJlIGFyY2hpdmVzIHNob3VsZCBub3QgYmUgbm9ybWFsbHkgZGlyZWN0ZWQgdG8uIFBsZWFzZSBjaGVjayBpZiB5b3UgaGF2ZSB0aGUgY29ycmVjdCBhcmNoaXZlIGxvY2F0aW9uLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmraTpobXpnaLnm67liY3nmoTlrZjmoaPlnLDlnYDmmK/igJwkMeKAne+8jOWcqOadoeebruWQjeensOepuumXtOS5i+S4i+OAguS4gOiIrOiAjOiogOS4jeW6lOWQkeadoeebruWQjeensOepuumXtOi/m+ihjOWtmOaho++8jOivt+ajgOafpeWtmOaho+WcsOWdgOOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmraTpoIHpnaLnlbbliY3nmoTlrZjmqpTlnLDlnYDmmK/jgIwkMeOAje+8jOWcqOaineebruWQjeeoseepuumWk+S5i+S4i+OAguS4gOiIrOiAjOiogOS4jeaHieWQkeaineebruWQjeeoseepuumWk+mAsuihjOWtmOaqlO+8jOiri+aqouafpeWtmOaqlOWcsOWdgOOAgicsXG5cdFx0fSksXG5cdFx0cHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBvZiB0aGlzIHBhZ2UsIFwiJDFcIiwgaXMgdGhpcyBwYWdlIGl0c2VsZiwgRWFzeSBhcmNoaXZlIGNhbm5vdCBvcGVyYXRlIGxpa2UgdGhpcy4gJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouebruWJjeeahOWtmOaho+WcsOWdgOaYr+KAnCQx4oCd77yM5ZKM5q2k6aG16Z2i5ZCN56ew55u45ZCM44CCRWFzeSBBcmNoaXZlIOaXoOazleaMieatpOWcsOWdgOWtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLnlbbliY3nmoTlrZjmqpTlnLDlnYDmmK/jgIwkMeOAje+8jOWSjOatpOmggemdouWQjeeoseebuOWQjOOAgkVhc3kgQXJjaGl2ZSDnhKHms5XmjInmraTlnLDlnYDlrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdGFyY2hpdmVfc3VtbWFyeTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOauteiQvScsXG5cdFx0fSksXG5cdFx0ZGVsZXRlX3N1bW1hcnk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOauteiQvScsXG5cdFx0fSksXG5cdH07XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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cGFyZV9zdHJpbmciLCAiY29uZmlnIiwgIlN0cmluZyIsICJsZW5ndGgiLCAidGVzdCIsICJzbGljZSIsICJpbmNsdWRlcyIsICJTeW50YXhFcnJvciIsICJmaW5kIiwgImtleSIsICJfdGhpcyRzdHIkc3BsaXQkIiwgInNwbGl0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiV0dfU0tJTiIsICJtdyIsICJnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZWFzeV9hcmNoaXZlX2xhbmciLCAid2luZG93IiwgImVhc3lfYXJjaGl2ZSIsICJsYW5nIiwgImRlbGV0ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJhcmNoaXZlIiwgInN1cHBvcnRzIiwgIm90aGVyc19wYWdlIiwgInRvX2VuYWJsZSIsICJlbmFibGVfb25fZ2VuZXJpY19wYWdlIiwgInBsZWFzZV9lbmFibGUiLCAicGxlYXNlX2VuYWJsZV9lbGFib3JhdGUiLCAibGVmdF9wYXJfc3BsaXQiLCAiemgiLCAicmlnaHRfcGFyIiwgInBlcmlvZCIsICJhcmNoaXZlX3BhdGhfY29sb25fc3BsaXQiLCAibG9hZGluZ19zZWN0aW9uX2kiLCAiZGVsZXRpbmdfc2VjdGlvbl9pIiwgImRvbmVfc2VjdGlvbl9pIiwgImRvbmVfZGVsZXRpbmdfc2VjdGlvbl9pIiwgImJlaW5nX2FyY2hpdmVkIiwgImJlaW5nX2RlbGV0ZWQiLCAiYWxyZWFkeV9hcmNoaXZlZCIsICJhbHJlYWR5X2RlbGV0ZWQiLCAib3RoZXJzX3RhbGtfZWxhYm9yYXRlIiwgInBhZ2Vfbm90X3N1cHBvcnRlZCIsICJwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlIiwgInByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UiLCAicHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlIiwgImFyY2hpdmVfc3VtbWFyeSIsICJkZWxldGVfc3VtbWFyeSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImVhc3lBcmNoaXZlIiwgIl93aW5kb3ckZWFzeV9hcmNoaXZlIiwgIl93aW5kb3ckZWFzeV9hcmNoaXZlJCIsICJfd2luZG93JGVhc3lfYXJjaGl2ZSQyIiwgIl93aW5kb3ckZWFzeV9hcmNoaXZlJDMiLCAiZXhwb3NlIiwgImFzeW5jUG9zdCIsICJwYXJhbSIsICJjYWxsYmFjayIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBvc3RXaXRoVG9rZW4iLCAidGhlbiIsICJnZXRQYWdlIiwgInRpdGxlIiwgImFjdGlvbiIsICJwcm9wIiwgInJ2cHJvcCIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aXRsZXMiLCAiZ2V0UGFnZVNlY3Rpb24iLCAic2VjdGlvbiIsICJydnNlY3Rpb24iLCAicGlja1BhZ2VDb250ZW50IiwgImRhdGEiLCAicXVlcnkiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgImNvbnRlbnQiLCAidGVsbFBhZ2VFeGlzdCIsICJtaXNzaW5nIiwgImVkaXQiLCAidGV4dCIsICJzdW1tYXJ5IiwgImVkaXRBcHBlbmQiLCAicGFnZSIsICJhZGRlZF9jb250ZW50IiwgIm9yaWdpbmFsX2NvbnRlbnQiLCAiYXJjaGl2ZVNlY3Rpb24iLCAidGFyZ2V0VGl0bGUiLCAiY29uY2F0IiwgInRvU3RyaW5nIiwgImRlbGV0ZVNlY3Rpb24iLCAiYXJjaGl2ZV9zZWN0aW9uIiwgImRlbGV0ZV9zZWN0aW9uIiwgInNldHRpbmdzX3N0cmluZyIsICJzZXR0aW5ncyIsICJteV91c2VyX3RhbGsiLCAibmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4IiwgImRpc19zdXBwb3J0X3RoZXNlX3BhZ2VzX3JlZ2V4IiwgInNldHRpbmdzX3NwYW5fY29sbGVjdGlvbiIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInNldHRpbmdzX3NwYW4iLCAiaW5uZXJIVE1MIiwgIm9uX3VzZXJfdGFsayIsICJwYWdlX25hbWUiLCAiam9pbiIsICJ1c2VyX25hbWUiLCAiaGFzX3RlbXBsYXRlIiwgIm90aGVyc191c2VyX3RhbGsiLCAib25fYXJ0aWNsZSIsICJvbl9oaXN0X3ZlcnNpb24iLCAiYXJjX3N1bSIsICJ1c2VyX2N1c3RvbV9hcmNoaXZlX3N1bW1hcnkiLCAiZGVsX3N1bSIsICJ1c2VyX2N1c3RvbV9kZWxldGVfc3VtbWFyeSIsICJzYW5pdGl6ZV9odG1sIiwgInN0cmluZyIsICJyZXBsYWNlIiwgIm1lc3NhZ2UiLCAidGFnIiwgInBhcmFfbGlzdCIsICJoYXNfdW5mdWxmaWxsZWRfcGFyYSIsICJfaSIsICJzZWFyY2giLCAibm9taW5hbF9zZWN0aW9ucyIsICJjb3VudCIsICJhcnIiLCAiQXJyYXkiLCAiZnJvbSIsICJzZWN0aW9uX2NvdW50IiwgImFjdHVhbF9zZWN0aW9uIiwgIm5vbWluYWxfc2VjdGlvbl9udW1iZXIiLCAibGVzcyIsICJyZXBvcnRfZG9uZW5lc3NfdWkiLCAic2VjdGlvbl9udW1iZXIiLCAiZG9uZW5lc3NfdHlwZSIsICJ0byIsICJvbmdvaW5nX29yX2RvbmUiLCAidGFnX2RpbmciLCAidGFnX3NlY3Rpb24iLCAiZGluZ190eXBlIiwgImRpbmdfYXV0b2hpZGUiLCAiYWN0aW9ucyIsICJkaW5nIiwgInRvYXN0aWZ5IiwgImNsb3NlIiwgImR1cmF0aW9uIiwgInNlY3Rpb25fbGluayIsICJub2RlIiwgInF1ZXJ5U2VsZWN0b3IiLCAicG5vZGUiLCAicGFyZW50Tm9kZSIsICJjaGlsZE5vZGVzIiwgInN0eWxlIiwgImRpc3BsYXkiLCAiY29sb3IiLCAiZGVsZXRlX3NlY3Rpb25fY29yZSIsICJfbm9taW5hbCIsICJhY3R1YWxfc2VjdGlvbl9udW1iZXIiLCAiYXJjaGl2ZV9zZWN0aW9uX2NvcmUiLCAiZWxhYm9yYXRlX25vdGljZSIsICJub3RpY2VfdGFnX25hbWUiLCAibm90aWNlX3RhZ19kaWN0aW9uYXJ5IiwgIm5vdGljZV9zZXQiLCAibnRhZyIsICJudHlwZSIsICJudHRsIiwgIm5wZXJzaXN0IiwgIm5zdWJzdCIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJvbkNsaWNrIiwgImhpZGVUb2FzdCIsICJpIiwgImoiLCAiZWxlIiwgIm5vbWluYWwiLCAiYWN0dWFsIiwgInBpcGVfaHRtbCIsICJjbGFzcyIsICJzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaW5oaWJpdCIsICJzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQiLCAic2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2h0bWwiLCAic2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9odG1sIiwgInNlY3Rpb25faWRfc3Bhbl9odG1sIiwgIm9yZGVyX25vIiwgImZvb3Rlcl9pbmZvX2VsZSIsICJpc19pbl9ibGFja2xpc3QiLCAiYmxhY2tsaXN0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJlbGVtZW50X3dyYXAiLCAiaWQiLCAiaW5uZXJFbGVtZW50IiwgImNsYXNzTmFtZSIsICJwcmVwZW5kIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgIm5vcm1hbF9mdW5jdGlvbl9pbmplY3RfaW50ZXJmYWNlIiwgImVkaXRTZWN0aW9uQ29sbGVjdGlvbiIsICJ2ZSIsICJocmVmIiwgImNoaWxkX25vZGVfbnVtYmVyIiwgInRhZ05hbWUiLCAidG9Mb3dlckNhc2UiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgIk51bWJlciIsICJwYXJzZUludCIsICJGcmFnbWVudCIsICJhZnRlciJdCn0K
