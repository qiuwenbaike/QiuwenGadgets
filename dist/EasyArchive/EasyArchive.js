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
  const sanitize_html = (string) => string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
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
        node: $("<span>").append(message(ntag, nsubst)).get(0),
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
  let footer_info_ele;
  let position_of_insertion;
  if (document.querySelector("#footer-info") || document.querySelectorAll(".page-info")) {
    footer_info_ele = document.querySelector("#footer-info") || document.querySelectorAll(".page-info")[0];
    position_of_insertion = "afterbegin";
  } else {
    footer_info_ele = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null);
    position_of_insertion = "";
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
  if (window.easy_archive.on_article || window.easy_archive.on_hist_version) {
  } else if (is_in_blacklist(window.easy_archive.never_enable_on_these_pages_regex)) {
  } else if (is_in_blacklist(window.easy_archive.dis_support_these_pages_regex)) {
    footer_info_ele.insertAdjacentElement(position_of_insertion, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
      id: "easy_archive_enable_notice"
    }, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
      style: {
        color: "inherit",
        cursor: "pointer"
      },
      onClick: () => {
        window.easy_archive.elaborate_notice("page_not_supported_elaborate");
      }
    }, "$", message("page_not_supported"))));
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
          section_delete_interface_html = section_delete_interface_inhibit ? "" : pipe_html.after(/* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
            onClick: () => {
              window.easy_archive.delete_section(actual, nominal);
            }
          }, "$", message("delete")));
          section_archive_interface_html = section_archive_interface_inhibit ? "" : pipe_html.after(/* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
            onClick: () => {
              window.easy_archive.archive_section(actual, nominal);
            }
          }, "$", message("archive")));
          ele.childNodes[child_node_number].insertAdjacentElement("afterend", /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, section_delete_interface_html, section_archive_interface_html, section_id_span_html(nominal.toString())));
        } else {
          j++;
        }
      }
      window.easy_archive.section_count = i - j + 1;
      footer_info_ele.insertAdjacentElement(position_of_insertion, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        id: "easy_archive_supports_notice"
      }, "$", message("supports"), "$", message("left_par_split"), "$", message("archive_path_colon_split"), /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
        href: "/wiki/".concat(sanitize_html(window.easy_archive.settings.find("arc-loc")))
      }, "$", sanitize_html(window.easy_archive.settings.find("arc-loc"))), "$", message("right_par"), "$", message("period")));
    };
    normal_function_inject_interface();
  } else if (window.easy_archive.others_user_talk === true) {
    footer_info_ele.insertAdjacentElement(position_of_insertion, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
      id: "easy_archive_enable_notice"
    }, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
      style: {
        color: "inherit",
        cursor: "pointer"
      },
      onClick: () => {
        window.easy_archive.elaborate_notice("others_talk_elaborate");
      }
    }, "$", message("others_page"))));
  } else if (window.easy_archive.my_user_talk === false) {
    footer_info_ele.insertAdjacentElement(position_of_insertion, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
      id: "easy_archive_enable_notice"
    }, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
      style: {
        color: "inherit",
        cursor: "pointer"
      },
      onClick: () => {
        window.easy_archive.elaborate_notice("enable_on_generic_page");
      }
    }, "$", message("to_enable"))));
  } else {
    footer_info_ele.insertAdjacentElement(position_of_insertion, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
      id: "easy_archive_enable_notice"
    }, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
      style: {
        color: "inherit",
        cursor: "pointer"
      },
      onClick: () => {
        window.easy_archive.elaborate_notice("please_enable_elaborate");
      }
    }, "$", message("please_enable"))));
  }
  if (mw.config.get("skin") === "citizen") {
    const $body = $("body");
    $body.find("#easy_archive_enable_notice, #easy_archive_supports_notice, #easy_archive_stop_notice").replaceWith(function() {
      const $this = $(this);
      return $("<section>").addClass("page-info__item").attr("id", $this.attr("id")).html($this.html());
    });
  }
  if (["vector", "vector-2022", "gongbi"].includes(mw.config.get("skin")) || document.querySelector("ul#footer-info")) {
    const $body = $("body");
    $body.find("#easy_archive_enable_notice, #easy_archive_supports_notice, #easy_archive_stop_notice").replaceWith(function() {
      const $this = $(this);
      return $("<li>").attr("id", $this.attr("id")).html($this.html());
    });
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvcGFyZV9zdHIudHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLmpzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9pMThuLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBtaW5pZmllZCBjb2RlIGRlcGVuZGVuY3kgZnVuY3Rpb25zXG5jbGFzcyBQYXJlX3N0ciB7XG5cdHN0cjogc3RyaW5nO1xuXHRsZWZ0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGRlbGltOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdHJpZ2h0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0Y29uc3RydWN0b3IocGFyZV9zdHJpbmc6IHN0cmluZywgY29uZmlnOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuXHRcdHRoaXMuc3RyID0gcGFyZV9zdHJpbmc7XG5cdFx0dGhpcy5sZWZ0ID0gJygnO1xuXHRcdHRoaXMuZGVsaW0gPSAnOic7XG5cdFx0dGhpcy5yaWdodCA9ICcpJztcblx0XHRpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdGNvbmZpZyA9IFN0cmluZyhjb25maWcpO1xuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHRwYXJlX3N0cmluZy5sZW5ndGggPiA2ICYmXG5cdFx0XHQvWyMlQF1bU3NdW0VlXVtUdF0vLnRlc3QocGFyZV9zdHJpbmcuc2xpY2UoMCwgNCkpICYmXG5cdFx0XHQhY29uZmlnLmluY2x1ZGVzKCdpZ25vcmUtc2V0Jylcblx0XHQpIHtcblx0XHRcdFssICwgLCAsIHRoaXMubGVmdCwgdGhpcy5kZWxpbSwgdGhpcy5yaWdodF0gPSBwYXJlX3N0cmluZztcblx0XHRcdGlmICh0aGlzLmxlZnQgPT09IHRoaXMucmlnaHQgfHwgdGhpcy5sZWZ0ID09PSB0aGlzLmRlbGltIHx8IHRoaXMucmlnaHQgPT09IHRoaXMuZGVsaW0pIHtcblx0XHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKFwiUG91bmQgc2V0IHN0YXRlbWVudCBoYXMgcmVwZXRpdGl2ZSBjaGFyYWN0ZXJzLiBFLmcuICcjc2V0fDp8JyBpcyBpbGxlZ2FsLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmaW5kKGtleTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG5cdFx0a2V5ID0gdGhpcy5sZWZ0ICsga2V5ICsgdGhpcy5kZWxpbTtcblx0XHRpZiAoIXRoaXMuc3RyLmluY2x1ZGVzKGtleSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5zdHIuc3BsaXQoa2V5KVsxXT8uc3BsaXQodGhpcy5yaWdodCBhcyBzdHJpbmcpWzBdO1xuXHR9XG59XG5cbmV4cG9ydCB7UGFyZV9zdHJ9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIG5vLWxvb3AtZnVuYyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbCAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudCAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7UGFyZV9zdHJ9IGZyb20gJy4vbW9kdWxlcy9wYXJlX3N0cic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2Vhc3lfYXJjaGl2ZV9sYW5nfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG4oZnVuY3Rpb24gZWFzeUFyY2hpdmUoKSB7XG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpIDwgMCB8fCBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykgPT09ICdRaXV3ZW466aaW6aG1Jykge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoIXdpbmRvdy5lYXN5X2FyY2hpdmUpIHtcblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlID0ge307XG5cdH1cblx0Ly8gY29tbW9uIHJlcG8uXG5cdGNvbnN0IGV4cG9zZSA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgYXN5bmNQb3N0ID0gKHBhcmFtLCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0Y29uc3QgYXBpID0gaW5pdE13QXBpKCdFYXN5QWNoaXZlLzMuMCcpO1xuXHRcdFx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtKS50aGVuKGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IGdldFBhZ2UgPSAodGl0bGUsIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRjb25zdCBwYXJhbSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiBbJ3JldmlzaW9ucyddLFxuXHRcdFx0XHRydnByb3A6IFsnaWRzJywgJ2ZsYWdzJywgJ3RpbWVzdGFtcCcsICd1c2VyJywgJ3VzZXJpZCcsICdzaXplJywgJ2NvbW1lbnQnLCAndGFncycsICdjb250ZW50J10sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0XHR9O1xuXHRcdFx0YXN5bmNQb3N0KHBhcmFtLCBjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRjb25zdCBnZXRQYWdlU2VjdGlvbiA9ICh0aXRsZSwgc2VjdGlvbiwgY2FsbGJhY2spID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHRcdHJ2cHJvcDogWydjb250ZW50J10sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0XHRcdHJ2c2VjdGlvbjogc2VjdGlvbixcblx0XHRcdH07XG5cdFx0XHRhc3luY1Bvc3QocGFyYW0sIGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IHBpY2tQYWdlQ29udGVudCA9IChkYXRhKSA9PiB7XG5cdFx0XHRpZiAoZGF0YS5xdWVyeSAmJiBkYXRhLnF1ZXJ5LnBhZ2VzICYmIGRhdGEucXVlcnkucGFnZXNbMF0gJiYgZGF0YS5xdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0pIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEucXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHRjb25zdCB0ZWxsUGFnZUV4aXN0ID0gKGRhdGEpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgfHwgIWRhdGEucXVlcnkgfHwgIWRhdGEucXVlcnkucGFnZXMgfHwgZGF0YS5xdWVyeS5wYWdlc1swXS5taXNzaW5nKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cdFx0Y29uc3QgZWRpdCA9ICh0aXRsZSwgc2VjdGlvbiwgdGV4dCwgc3VtbWFyeSwgY2FsbGJhY2spID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdHRleHQsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHNlY3Rpb24pIHtcblx0XHRcdFx0cGFyYW0uc2VjdGlvbiA9IHNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRhc3luY1Bvc3QocGFyYW0sIGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IGVkaXRBcHBlbmQgPSAocGFnZSwgYWRkZWRfY29udGVudCwgc3VtbWFyeSwgY2FsbGJhY2spID0+IHtcblx0XHRcdGdldFBhZ2UocGFnZSwgKGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxfY29udGVudCA9IHRlbGxQYWdlRXhpc3QoZGF0YSkgPT09IGZhbHNlID8gJycgOiBwaWNrUGFnZUNvbnRlbnQoZGF0YSk7XG5cdFx0XHRcdGVkaXQocGFnZSwgbnVsbCwgU3RyaW5nKG9yaWdpbmFsX2NvbnRlbnQpICsgYWRkZWRfY29udGVudCwgc3VtbWFyeSwgY2FsbGJhY2spO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRjb25zdCBhcmNoaXZlU2VjdGlvbiA9ICh0aXRsZSwgc2VjdGlvbiwgdGFyZ2V0VGl0bGUsIGNhbGxiYWNrLCBzdW1tYXJ5KSA9PiB7XG5cdFx0XHRnZXRQYWdlU2VjdGlvbih0aXRsZSwgc2VjdGlvbiwgKGRhdGEpID0+IHtcblx0XHRcdFx0ZWRpdEFwcGVuZCh0YXJnZXRUaXRsZSwgYFxcblxcbiR7cGlja1BhZ2VDb250ZW50KGRhdGEpfWAsIHN1bW1hcnkpO1xuXHRcdFx0XHRlZGl0KHRpdGxlLCBzZWN0aW9uLnRvU3RyaW5nKCksICcnLCBzdW1tYXJ5LCBjYWxsYmFjayk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGNvbnN0IGRlbGV0ZVNlY3Rpb24gPSAodGl0bGUsIHNlY3Rpb24sIGNhbGxiYWNrLCBzdW1tYXJ5KSA9PiB7XG5cdFx0XHRlZGl0KHRpdGxlLCBzZWN0aW9uLnRvU3RyaW5nKCksICcnLCBzdW1tYXJ5LCBjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXJjaGl2ZV9zZWN0aW9uOiBhcmNoaXZlU2VjdGlvbixcblx0XHRcdGRlbGV0ZV9zZWN0aW9uOiBkZWxldGVTZWN0aW9uLFxuXHRcdH07XG5cdH0pKCk7XG5cdC8vIGRlZmF1bHQgc2V0dGluZ3M6XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3Nfc3RyaW5nID1cblx0XHQnI3NldCV8P1x0XHRcdFx0XHRcdFx0XHRcdFxcbicgK1xuXHRcdCdkaXNwbGF5IHNlY3Rpb24gZGVsZXRlIGxpbmtcdCVzZWMtZGVsfDE/XHRcXG4nICtcblx0XHQnZGlzcGxheSBzZWN0aW9uIGFyY2hpdmUgbGluZVx0JXNlYy1hcmN8MT9cdFxcbicgK1xuXHRcdCdkaXNwbGF5IGNvbnRyb2wgYmFyIGF0IHRvcFx0JXRvcC1iYXJ8MD9cdFxcbicgK1xuXHRcdCdhcmNoaXZlIGxvY2F0aW9uXHRcdFx0XHQlYXJjLWxvY3w/XHRcXG4nICtcblx0XHQnc3Vic2VjdGlvbiBlZmZlY3RpdmVuZXNzXHRcdCVzdWItc2VjfDI/XHRcXG4nICtcblx0XHQnY29uZmlybSBhY3Rpb25cdFx0XHRcdCVjb25maXJtfDA/XHRcXG4nICtcblx0XHQnaXMgdGhpcyBkYXRhIGluaXRpYWxpemVkXHRcdCVkYXRhLWluaXR8MD8gXFxuJztcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncyA9IG5ldyBQYXJlX3N0cih3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzX3N0cmluZyk7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUubXlfdXNlcl90YWxrID0gbnVsbDtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5uZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXggPz89IFtdO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLmRpc19zdXBwb3J0X3RoZXNlX3BhZ2VzX3JlZ2V4ID0gW1xuXHRcdC9eRmlsZTouKiQvLFxuXHRcdC9eTWVkaWFXaWtpOi4qJC8sXG5cdFx0L15Nb2R1bGU6LiokLyxcblx0XHQvXkNhdGVnb3J5Oi4qJC8sXG5cdFx0L15UZW1wbGF0ZTouKiQvLFxuXHRcdC9eU3BlY2lhbDouKiQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuY3NzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXHRdO1xuXHRjb25zdCBzZXR0aW5nc19zcGFuX2NvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWFzeV9hcmNoaXZlX2RhdGFfcG9pbnRfY29sbGVjdGlvbicpO1xuXHRjb25zdCBbc2V0dGluZ3Nfc3Bhbl0gPSBzZXR0aW5nc19zcGFuX2NvbGxlY3Rpb247XG5cdGNvbnN0IHNldHRpbmdzID0gc2V0dGluZ3Nfc3BhbiA/IG5ldyBQYXJlX3N0cihzZXR0aW5nc19zcGFuLmlubmVySFRNTCkgOiBuZXcgUGFyZV9zdHIoJycpO1xuXHRpZiAoc2V0dGluZ3MuZmluZCgnZGF0YS1pbml0JykgPT09ICcxJykge1xuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3Nfc3RyaW5nID0gc2V0dGluZ3Nfc3Bhbi5pbm5lckhUTUw7XG5cdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncyA9IG5ldyBQYXJlX3N0cih3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzX3N0cmluZyk7XG5cdH1cblx0Ly8gaWRlbnRpZnkgaWYgRWFzeSBBcmNoaXZlIGNhbiBiZSB1c2VkIG9uIHRoZSBwYWdlIC0gY29tcGF0aWJpbGl0eVxuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX3VzZXJfdGFsayA9IG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDM7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUubXlfdXNlcl90YWxrID1cblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX3VzZXJfdGFsayAmJlxuXHRcdCgoKSA9PiB7XG5cdFx0XHRsZXQgcGFnZV9uYW1lID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLnNwbGl0KCc6Jyk7XG5cdFx0XHRwYWdlX25hbWVbMF0gPSAnJztcblx0XHRcdHBhZ2VfbmFtZSA9IHBhZ2VfbmFtZS5qb2luKCcnKTtcblx0XHRcdFtwYWdlX25hbWVdID0gcGFnZV9uYW1lLnNwbGl0KCcvJyk7XG5cdFx0XHRjb25zdCB1c2VyX25hbWUgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyk7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHR1c2VyX25hbWUuc3BsaXQoJ18nKS5qb2luKCcnKS5zcGxpdCgnICcpLmpvaW4oJycpID09PSBwYWdlX25hbWUuc3BsaXQoJ18nKS5qb2luKCcnKS5zcGxpdCgnICcpLmpvaW4oJycpXG5cdFx0XHQpO1xuXHRcdH0pKCk7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuaGFzX3RlbXBsYXRlID0gc2V0dGluZ3MuZmluZCgnZGF0YS1pbml0JykgPT09ICcxJztcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5vdGhlcnNfdXNlcl90YWxrID1cblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLm15X3VzZXJfdGFsayA9PT0gZmFsc2UgJiYgd2luZG93LmVhc3lfYXJjaGl2ZS5vbl91c2VyX3RhbGsgPT09IHRydWU7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUub25fYXJ0aWNsZSA9IG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDA7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUub25faGlzdF92ZXJzaW9uID0gbXcuY29uZmlnLmdldCgnd2dDdXJSZXZpc2lvbklkJykgLSBtdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKSAhPT0gMDtcblx0ZWFzeV9hcmNoaXZlX2xhbmcoKTtcblx0Y29uc3QgYXJjX3N1bSA9IHdpbmRvdy5lYXN5X2FyY2hpdmUudXNlcl9jdXN0b21fYXJjaGl2ZV9zdW1tYXJ5ID8/IG51bGw7XG5cdGNvbnN0IGRlbF9zdW0gPSB3aW5kb3cuZWFzeV9hcmNoaXZlLnVzZXJfY3VzdG9tX2RlbGV0ZV9zdW1tYXJ5ID8/IG51bGw7XG5cdGNvbnN0IHNhbml0aXplX2h0bWwgPSAoc3RyaW5nKSA9PlxuXHRcdHN0cmluZ1xuXHRcdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdFx0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcblx0Ly8gbXVsdGkgbGFuZ3VhZ2Ugc2VsZWN0b3IgZGVmaW5pdGlvblxuXHRjb25zdCBtZXNzYWdlID0gKHRhZywgcGFyYV9saXN0KSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBjb250ZW50ID0gd2luZG93LmVhc3lfYXJjaGl2ZS5sYW5nW3RhZ107XG5cdFx0XHRmb3IgKGxldCBoYXNfdW5mdWxmaWxsZWRfcGFyYSA9IHRydWUsIF9pID0gMDsgaGFzX3VuZnVsZmlsbGVkX3BhcmE7IF9pKyspIHtcblx0XHRcdFx0Y29uc3Qgc2VhcmNoID0gYCQke19pICsgMX1gO1xuXHRcdFx0XHRpZiAoY29udGVudC5pbmNsdWRlcyhzZWFyY2gpKSB7XG5cdFx0XHRcdFx0Y29udGVudCA9IHBhcmFfbGlzdFtfaV1cblx0XHRcdFx0XHRcdD8gY29udGVudC5zcGxpdChzZWFyY2gpLmpvaW4ocGFyYV9saXN0W19pXSlcblx0XHRcdFx0XHRcdDogY29udGVudC5zcGxpdChzZWFyY2gpLmpvaW4oJycpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGhhc191bmZ1bGZpbGxlZF9wYXJhID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICcoISkgdW5kZWZpbmVkIGxhbmd1YWdlIGNvbnRlbnQnO1xuXHRcdH1cblx0fTtcblx0Y29uc3Qgbm9taW5hbF9zZWN0aW9ucyA9ICgoY291bnQpID0+IHtcblx0XHRjb25zdCBhcnIgPSBBcnJheS5mcm9tKHtcblx0XHRcdGxlbmd0aDogY291bnQsXG5cdFx0fSk7XG5cdFx0Zm9yIChsZXQgX2kgPSAwOyBfaSA8IGNvdW50OyBfaSsrKSB7XG5cdFx0XHRhcnJbX2ldID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBhcnI7XG5cdH0pKHdpbmRvdy5lYXN5X2FyY2hpdmUuc2VjdGlvbl9jb3VudCk7XG5cdGNvbnN0IGFjdHVhbF9zZWN0aW9uID0gKG5vbWluYWxfc2VjdGlvbl9udW1iZXIpID0+IHtcblx0XHRsZXQgbGVzcyA9IDA7XG5cdFx0Zm9yIChsZXQgX2kgPSAwOyBfaSA8IG5vbWluYWxfc2VjdGlvbl9udW1iZXI7IF9pKyspIHtcblx0XHRcdGlmIChub21pbmFsX3NlY3Rpb25zW19pXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRsZXNzKys7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBub21pbmFsX3NlY3Rpb25fbnVtYmVyIC0gbGVzcztcblx0fTtcblx0Ly8gLi4uIGludGVyZmFjZSBkb25lXG5cdC8vIGFyY2hpdmluZyBsb2dpYyBpbmplY3Rpb25cblx0Y29uc3QgcmVwb3J0X2RvbmVuZXNzX3VpID0gKHNlY3Rpb25fbnVtYmVyLCBkb25lbmVzc190eXBlLCB0bywgb25nb2luZ19vcl9kb25lKSA9PiB7XG5cdFx0bGV0IHRhZ19kaW5nO1xuXHRcdGxldCB0YWdfc2VjdGlvbjtcblx0XHRsZXQgZGluZ190eXBlO1xuXHRcdGxldCBkaW5nX2F1dG9oaWRlO1xuXHRcdGlmIChvbmdvaW5nX29yX2RvbmUgPT09ICdvbmdvaW5nJykge1xuXHRcdFx0ZGluZ190eXBlID0gJ2luZm8nO1xuXHRcdFx0ZGluZ19hdXRvaGlkZSA9IHRydWU7XG5cdFx0XHRpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2RlbGV0ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnZGVsZXRpbmdfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYmVpbmdfZGVsZXRlZCc7XG5cdFx0XHR9IGVsc2UgaWYgKGRvbmVuZXNzX3R5cGUgPT09ICdhcmNoaXZlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdsb2FkaW5nX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2JlaW5nX2FyY2hpdmVkJztcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG9uZ29pbmdfb3JfZG9uZSA9PT0gJ2RvbmUnKSB7XG5cdFx0XHRkaW5nX3R5cGUgPSAnc3VjY2Vzcyc7XG5cdFx0XHRkaW5nX2F1dG9oaWRlID0gZmFsc2U7XG5cdFx0XHRpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2RlbGV0ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnZG9uZV9kZWxldGluZ19zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdhbHJlYWR5X2RlbGV0ZWQnO1xuXHRcdFx0fSBlbHNlIGlmIChkb25lbmVzc190eXBlID09PSAnYXJjaGl2ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnZG9uZV9zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdhbHJlYWR5X2FyY2hpdmVkJztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgYWN0aW9ucyA9IHtcblx0XHRcdGRpbmc6ICgpID0+IHtcblx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogbWVzc2FnZSh0YWdfZGluZywgW3NlY3Rpb25fbnVtYmVyLnRvU3RyaW5nKCksIHRvXSksXG5cdFx0XHRcdFx0XHRjbG9zZTogIWRpbmdfYXV0b2hpZGUsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogZGluZ19hdXRvaGlkZSA/IDMwMDAgOiAtMSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGRpbmdfdHlwZVxuXHRcdFx0XHQpO1xuXHRcdFx0fSxcblx0XHRcdHNlY3Rpb25fbGluazogKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4tb3JkZXItJHtzZWN0aW9uX251bWJlcn1gKTtcblx0XHRcdFx0Y29uc3QgcG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdFx0XHRcdGZvciAobGV0IF9pID0gMTsgX2kgPCBwbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAtIDI7IF9pKyspIHtcblx0XHRcdFx0XHRwbm9kZS5jaGlsZE5vZGVzW19pXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5vZGUuaW5uZXJIVE1MID0gbWVzc2FnZSh0YWdfc2VjdGlvbik7XG5cdFx0XHRcdG5vZGUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXHRcdFx0XHRub2RlLnN0eWxlLmNvbG9yID0gJ3JnYigwIDAgMC8uNSknO1xuXHRcdFx0fSxcblx0XHR9O1xuXHRcdHJldHVybiBhY3Rpb25zO1xuXHR9O1xuXHRjb25zdCBkZWxldGVfc2VjdGlvbl9jb3JlID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdGNvbnN0IGFjdHVhbF9zZWN0aW9uX251bWJlciA9IGFjdHVhbF9zZWN0aW9uKHNlY3Rpb25fbnVtYmVyKTtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ29uZ29pbmcnKS5kaW5nKCk7XG5cdFx0ZXhwb3NlLmRlbGV0ZV9zZWN0aW9uKFxuXHRcdFx0bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRcdFx0YWN0dWFsX3NlY3Rpb25fbnVtYmVyLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ2RvbmUnKS5kaW5nKCk7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2RlbGV0ZScsICcnLCAnZG9uZScpLnNlY3Rpb25fbGluaygpO1xuXHRcdFx0XHRub21pbmFsX3NlY3Rpb25zW3NlY3Rpb25fbnVtYmVyXSA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0ZGVsX3N1bSB8fCBtZXNzYWdlKCdkZWxldGVfc3VtbWFyeScpXG5cdFx0KTtcblx0fTtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5kZWxldGVfc2VjdGlvbiA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ29uZ29pbmcnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRkZWxldGVfc2VjdGlvbl9jb3JlKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCk7XG5cdH07XG5cdGNvbnN0IGFyY2hpdmVfc2VjdGlvbl9jb3JlID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdGNvbnN0IGFjdHVhbF9zZWN0aW9uX251bWJlciA9IGFjdHVhbF9zZWN0aW9uKHNlY3Rpb25fbnVtYmVyKTtcblx0XHRjb25zdCB0byA9IHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpO1xuXHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ29uZ29pbmcnKS5kaW5nKCk7XG5cdFx0ZXhwb3NlLmFyY2hpdmVfc2VjdGlvbihcblx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdGFjdHVhbF9zZWN0aW9uX251bWJlcixcblx0XHRcdHRvLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdkb25lJykuZGluZygpO1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdkb25lJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0XHRcdG5vbWluYWxfc2VjdGlvbnNbc2VjdGlvbl9udW1iZXJdID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRhcmNfc3VtIHx8IG1lc3NhZ2UoJ2FyY2hpdmVfc3VtbWFyeScpXG5cdFx0KTtcblx0fTtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5hcmNoaXZlX3NlY3Rpb24gPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0Y29uc3QgdG8gPSB3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKTtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdvbmdvaW5nJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0YXJjaGl2ZV9zZWN0aW9uX2NvcmUoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKTtcblx0fTtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5lbGFib3JhdGVfbm90aWNlID0gKG5vdGljZV90YWdfbmFtZSkgPT4ge1xuXHRcdC8vIGFjcm9ueW0gc2NoZW1lOiByZWZlciB0byBxd2VydHkga2V5Ym9hcmQgbGF5b3V0LiAocD05KVxuXHRcdGNvbnN0IG5vdGljZV90YWdfZGljdGlvbmFyeSA9IHtcblx0XHRcdHBsZWFzZV9lbmFibGVfZWxhYm9yYXRlOiBbJ3BsZWFzZV9lbmFibGVfZWxhYm9yYXRlJ10sXG5cdFx0XHRvdGhlcnNfdGFsa19lbGFib3JhdGU6IFsnb3RoZXJzX3RhbGtfZWxhYm9yYXRlJ10sXG5cdFx0XHRlbmFibGVfb25fZ2VuZXJpY19wYWdlOiBbJ2VuYWJsZV9vbl9nZW5lcmljX3BhZ2UnXSxcblx0XHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2U6IFtcblx0XHRcdFx0J3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UnLFxuXHRcdFx0XHQnd2FybmluZycsXG5cdFx0XHRcdCdsb25nJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFtzYW5pdGl6ZV9odG1sKHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKV0sXG5cdFx0XHRdLFxuXHRcdFx0cHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlOiBbXG5cdFx0XHRcdCdwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2UnLFxuXHRcdFx0XHQnd2FybmluZycsXG5cdFx0XHRcdCdsb25nJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFtzYW5pdGl6ZV9odG1sKHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKV0sXG5cdFx0XHRdLFxuXHRcdFx0cGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZTogWydwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlJ10sXG5cdFx0fTtcblx0XHRjb25zdCBub3RpY2Vfc2V0ID0gbm90aWNlX3RhZ19kaWN0aW9uYXJ5W25vdGljZV90YWdfbmFtZV0gfHwgZmFsc2U7XG5cdFx0aWYgKG5vdGljZV9zZXQgIT09IGZhbHNlKSB7XG5cdFx0XHRjb25zdCBbbnRhZywgbnR5cGUsIG50dGwsIG5wZXJzaXN0LCBuc3Vic3RdID0gbm90aWNlX3NldDtcblx0XHRcdGNvbnN0IHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5vZGU6ICQoJzxzcGFuPicpLmFwcGVuZChtZXNzYWdlKG50YWcsIG5zdWJzdCkpLmdldCgwKSxcblx0XHRcdFx0XHRjbG9zZTogbnR0bCA9PT0gJ2xvbmcnLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiBudHRsID09PSAnbG9uZycgPyAtMSA6IG50dGwsXG5cdFx0XHRcdFx0b25DbGljazogKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKG5wZXJzaXN0KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0bnR5cGVcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHQvLyByZWFsIGRlYWwgaGVyZVxuXHQvLyBpbnRlcmZhY2UgaW5qZWN0aW9uIC0gcHJlcGFyZVxuXHRsZXQgaSA9IDA7XG5cdGxldCBqID0gMDtcblx0bGV0IGVsZTtcblx0bGV0IG5vbWluYWw7XG5cdGxldCBhY3R1YWw7XG5cdGNvbnN0IHBpcGVfaHRtbCA9IDxzcGFuIGNsYXNzPVwibXctZWRpdHNlY3Rpb24tZGl2aWRlclwiPiAmIzEyNDsgPC9zcGFuPjtcblx0Y29uc3Qgc2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2luaGliaXQgPVxuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnc2VjLWRlbCcpID09PSAnMCcgfHwgd2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzAnO1xuXHRjb25zdCBzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQgPVxuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnc2VjLWFyYycpID09PSAnMCcgfHwgd2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzAnO1xuXHRsZXQgc2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2h0bWw7XG5cdGxldCBzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2h0bWw7XG5cdGNvbnN0IHNlY3Rpb25faWRfc3Bhbl9odG1sID0gKG9yZGVyX25vKSA9PiAoXG5cdFx0PHNwYW5cblx0XHRcdGNsYXNzPXtbJ2Vhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4nLCBgZWFzeS1hcmNoaXZlLXNlY3Rpb24taWQtc3Bhbi1vcmRlci0ke29yZGVyX25vfWBdfVxuXHRcdFx0c3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fVxuXHRcdD5cblx0XHRcdHNlY3Rpb25cblx0XHQ8L3NwYW4+XG5cdCk7XG5cdGxldCBmb290ZXJfaW5mb19lbGU7XG5cdGxldCBwb3NpdGlvbl9vZl9pbnNlcnRpb247XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vdGVyLWluZm8nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZS1pbmZvJykpIHtcblx0XHRmb290ZXJfaW5mb19lbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vdGVyLWluZm8nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZS1pbmZvJylbMF07XG5cdFx0cG9zaXRpb25fb2ZfaW5zZXJ0aW9uID0gJ2FmdGVyYmVnaW4nO1xuXHR9IGVsc2Uge1xuXHRcdGZvb3Rlcl9pbmZvX2VsZSA9IDw+PC8+O1xuXHRcdHBvc2l0aW9uX29mX2luc2VydGlvbiA9ICcnO1xuXHR9XG5cdC8vIC4uLiBpbnRlcmZhY2UgaW5qZWN0aW9uIC0gbG9naWNcblx0Y29uc3QgaXNfaW5fYmxhY2tsaXN0ID0gKGJsYWNrbGlzdCkgPT4ge1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja2xpc3QpIHtcblx0XHRcdGlmIChlbGVtZW50LnRlc3QobXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRpZiAod2luZG93LmVhc3lfYXJjaGl2ZS5vbl9hcnRpY2xlIHx8IHdpbmRvdy5lYXN5X2FyY2hpdmUub25faGlzdF92ZXJzaW9uKSB7XG5cdFx0Ly8gaW5zZXJ0IG5vIGludGVyZmFjZSBvbiBhbiBhcnRpY2xlIHBhZ2Ugb3IgYSBoaXN0b3J5IHZlcnNpb24uXG5cdH0gZWxzZSBpZiAoaXNfaW5fYmxhY2tsaXN0KHdpbmRvdy5lYXN5X2FyY2hpdmUubmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4KSkge1xuXHRcdC8vIGluc2VydCBubyBpbnRlcmZhY2UgaWYgdGhlIHBhZ2UgbmFtZSBpcyBibGFja2xpc3RlZC5cblx0fSBlbHNlIGlmIChpc19pbl9ibGFja2xpc3Qod2luZG93LmVhc3lfYXJjaGl2ZS5kaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCkpIHtcblx0XHQvLyBpbnNlcnQgbm90IHN1cHBvcnRlZCBub3RpY2UgaWYgdGhlIHBhZ2UgbmFtZSBpbmRpY2F0ZXMgdGhhdCBpdCBpcyBub3Qgc3VwcG9ydGVkLlxuXHRcdGZvb3Rlcl9pbmZvX2VsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXG5cdFx0XHRwb3NpdGlvbl9vZl9pbnNlcnRpb24sXG5cdFx0XHQ8ZGl2IGlkPVwiZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2VcIj5cblx0XHRcdFx0PGFcblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Y29sb3I6ICdpbmhlcml0Jyxcblx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5lbGFib3JhdGVfbm90aWNlKCdwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlJyk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdCR7bWVzc2FnZSgncGFnZV9ub3Rfc3VwcG9ydGVkJyl9XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAobXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpID09PSB3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSkge1xuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSgncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlJyk7XG5cdH0gZWxzZSBpZiAod2luZG93LmVhc3lfYXJjaGl2ZS5oYXNfdGVtcGxhdGUgJiYgIXdpbmRvdy5lYXN5X2FyY2hpdmUub3RoZXJzX3VzZXJfdGFsaykge1xuXHRcdC8vIGFueSBwYWdlIHRoYXQgaGFzIHRlbXBsYXRlIHRoYXQncyBub3Qgb3RoZXJzJyB0YWxrIHBhZ2UuIGZ1bmN0aW9uIG5vcm1hbGx5LlxuXHRcdC8vICEhIHRoZSBhcmNoaXZlIGxvY2F0aW9uIGluIG1haW4gc3BhY2UgYW5kIG5lZWRzIGF0dGVudGlvbiAhIVxuXHRcdGlmICgvLis6LisvLnRlc3Qod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpICE9PSB0cnVlKSB7XG5cdFx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLmVsYWJvcmF0ZV9ub3RpY2UoJ3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UnKTtcblx0XHR9XG5cdFx0Y29uc3Qgbm9ybWFsX2Z1bmN0aW9uX2luamVjdF9pbnRlcmZhY2UgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBlZGl0U2VjdGlvbkNvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXctZWRpdHNlY3Rpb24nKTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBlZGl0U2VjdGlvbkNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZWxlID0gZWRpdFNlY3Rpb25Db2xsZWN0aW9uW2ldO1xuXHRcdFx0XHRjb25zdCB2ZSA9IC9bJj9ddmVhY3Rpb249ZWRpdC8udGVzdChlbGUuY2hpbGROb2Rlc1sxXS5ocmVmKTtcblx0XHRcdFx0Y29uc3QgY2hpbGRfbm9kZV9udW1iZXIgPSB2ZSA/IDMgOiAxO1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0ZWxlLnBhcmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaDInICYmXG5cdFx0XHRcdFx0ZWxlLnBhcmVudE5vZGUuaWQgIT09ICdmaXJzdEhlYWRpbmcnICYmXG5cdFx0XHRcdFx0ZGVjb2RlVVJJQ29tcG9uZW50KGVsZS5jaGlsZE5vZGVzW2NoaWxkX25vZGVfbnVtYmVyXS5ocmVmLnNwbGl0KC9bJj9ddGl0bGU9LylbMV0uc3BsaXQoJyYnKVswXSkgPT09XG5cdFx0XHRcdFx0XHRtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0YWN0dWFsID0gTnVtYmVyLnBhcnNlSW50KFxuXHRcdFx0XHRcdFx0ZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmhyZWYuc3BsaXQoL1smP11zZWN0aW9uPS8pWzFdLnNwbGl0KCcmJylbMF0sXG5cdFx0XHRcdFx0XHQxMFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0bm9taW5hbCA9IGkgLSBqICsgMTtcblx0XHRcdFx0XHRzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaHRtbCA9IHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9pbmhpYml0XG5cdFx0XHRcdFx0XHQ/ICcnXG5cdFx0XHRcdFx0XHQ6IHBpcGVfaHRtbC5hZnRlcihcblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLmRlbGV0ZV9zZWN0aW9uKGFjdHVhbCwgbm9taW5hbCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdCR7bWVzc2FnZSgnZGVsZXRlJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaHRtbCA9IHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaW5oaWJpdFxuXHRcdFx0XHRcdFx0PyAnJ1xuXHRcdFx0XHRcdFx0OiBwaXBlX2h0bWwuYWZ0ZXIoXG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5hcmNoaXZlX3NlY3Rpb24oYWN0dWFsLCBub21pbmFsKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0JHttZXNzYWdlKCdhcmNoaXZlJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGVsZS5jaGlsZE5vZGVzW2NoaWxkX25vZGVfbnVtYmVyXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXG5cdFx0XHRcdFx0XHQnYWZ0ZXJlbmQnLFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0e3NlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9odG1sfVxuXHRcdFx0XHRcdFx0XHR7c2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9odG1sfVxuXHRcdFx0XHRcdFx0XHR7c2VjdGlvbl9pZF9zcGFuX2h0bWwobm9taW5hbC50b1N0cmluZygpKX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aisrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNlY3Rpb25fY291bnQgPSBpIC0gaiArIDE7XG5cdFx0XHRmb290ZXJfaW5mb19lbGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuXHRcdFx0XHRwb3NpdGlvbl9vZl9pbnNlcnRpb24sXG5cdFx0XHRcdDxkaXYgaWQ9XCJlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlXCI+XG5cdFx0XHRcdFx0JHttZXNzYWdlKCdzdXBwb3J0cycpfSR7bWVzc2FnZSgnbGVmdF9wYXJfc3BsaXQnKX0ke21lc3NhZ2UoJ2FyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdCcpfVxuXHRcdFx0XHRcdDxhIGhyZWY9e2Avd2lraS8ke3Nhbml0aXplX2h0bWwod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpfWB9PlxuXHRcdFx0XHRcdFx0JHtzYW5pdGl6ZV9odG1sKHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKX1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0JHttZXNzYWdlKCdyaWdodF9wYXInKX0ke21lc3NhZ2UoJ3BlcmlvZCcpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblx0XHRub3JtYWxfZnVuY3Rpb25faW5qZWN0X2ludGVyZmFjZSgpO1xuXHR9IGVsc2UgaWYgKHdpbmRvdy5lYXN5X2FyY2hpdmUub3RoZXJzX3VzZXJfdGFsayA9PT0gdHJ1ZSkge1xuXHRcdC8vIG90aGVycyB1c2VyIHRhbGsuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLmluc2VydEFkamFjZW50RWxlbWVudChcblx0XHRcdHBvc2l0aW9uX29mX2luc2VydGlvbixcblx0XHRcdDxkaXYgaWQ9XCJlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZVwiPlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRjb2xvcjogJ2luaGVyaXQnLFxuXHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLmVsYWJvcmF0ZV9ub3RpY2UoJ290aGVyc190YWxrX2VsYWJvcmF0ZScpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQke21lc3NhZ2UoJ290aGVyc19wYWdlJyl9XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAod2luZG93LmVhc3lfYXJjaGl2ZS5teV91c2VyX3RhbGsgPT09IGZhbHNlKSB7XG5cdFx0Ly8gYSBnZW5lcmljIHBhZ2UgdGhhdCBkaWQgbm90IGVuYWJsZSBlYXN5IGFyY2hpdmUuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLmluc2VydEFkamFjZW50RWxlbWVudChcblx0XHRcdHBvc2l0aW9uX29mX2luc2VydGlvbixcblx0XHRcdDxkaXYgaWQ9XCJlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZVwiPlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRjb2xvcjogJ2luaGVyaXQnLFxuXHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLmVsYWJvcmF0ZV9ub3RpY2UoJ2VuYWJsZV9vbl9nZW5lcmljX3BhZ2UnKTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0JHttZXNzYWdlKCd0b19lbmFibGUnKX1cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHRmb290ZXJfaW5mb19lbGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuXHRcdFx0cG9zaXRpb25fb2ZfaW5zZXJ0aW9uLFxuXHRcdFx0PGRpdiBpZD1cImVhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlXCI+XG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdGNvbG9yOiAnaW5oZXJpdCcsXG5cdFx0XHRcdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSgncGxlYXNlX2VuYWJsZV9lbGFib3JhdGUnKTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0JHttZXNzYWdlKCdwbGVhc2VfZW5hYmxlJyl9XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblx0aWYgKG13LmNvbmZpZy5nZXQoJ3NraW4nKSA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHlcblx0XHRcdC5maW5kKCcjZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UsICNlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlLCAjZWFzeV9hcmNoaXZlX3N0b3Bfbm90aWNlJylcblx0XHRcdC5yZXBsYWNlV2l0aChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcblx0XHRcdFx0cmV0dXJuICQoJzxzZWN0aW9uPicpLmFkZENsYXNzKCdwYWdlLWluZm9fX2l0ZW0nKS5hdHRyKCdpZCcsICR0aGlzLmF0dHIoJ2lkJykpLmh0bWwoJHRoaXMuaHRtbCgpKTtcblx0XHRcdH0pO1xuXHR9XG5cdGlmIChcblx0XHRbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhtdy5jb25maWcuZ2V0KCdza2luJykpIHx8XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKVxuXHQpIHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHQkYm9keVxuXHRcdFx0LmZpbmQoJyNlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZSwgI2Vhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UsICNlYXN5X2FyY2hpdmVfc3RvcF9ub3RpY2UnKVxuXHRcdFx0LnJlcGxhY2VXaXRoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Y29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gJCgnPGxpPicpLmF0dHIoJ2lkJywgJHRoaXMuYXR0cignaWQnKSkuaHRtbCgkdGhpcy5odG1sKCkpO1xuXHRcdFx0fSk7XG5cdH1cbn0pKCk7XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuZXhwb3J0IGNvbnN0IGVhc3lfYXJjaGl2ZV9sYW5nID0gKCkgPT4ge1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLmxhbmcgPSB7XG5cdFx0ZGVsZXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZScsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHRhcmNoaXZlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0c3VwcG9ydHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGlzIGVuYWJsZWQgb24gdGhpcyB0YWxrIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pys6K6o6K666aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2ZScsXG5cdFx0fSksXG5cdFx0b3RoZXJzX3BhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGlzIG5vdCBlbmFibGVkLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLmmK/ku5bkurrnmoTnlKjmiLforqjorrrpobXpnaLvvIzlm6DmraTkuI3mlK/mjIEgRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLngrrku5bkurrnlKjmiLboqI7oq5bpoIHpnaLvvIzmlYXkuI3mlK/mj7QgRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0dG9fZW5hYmxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3QgdXNpbmcgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLmsqHmnInlkK/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+acrOmggeayoeacieWVn+eUqCBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdGVuYWJsZV9vbl9nZW5lcmljX3BhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCB5b3VyIHVzZXIgdGFsayBwYWdlLiBIb3dldmVyIEVhc3kgQXJjaGl2ZSBzdGlsbCBjYW4gYmUgdXNlZCBpZiBuZWVkZWQuVG8gZW5hYmxlIGl0LCBhZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdGVtcGxhdGUgdG8gdGhpcyBwYWdlLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmraTpobXpnaLkuI3mmK/mgqjnmoTnlKjmiLforqjorrrpobXpnaLjgILkuI3ov4fvvIzoi6XpnIDopoHvvIzmraTpobXpnaLlj6/ku6XlkK/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOivt+WcqOmhtemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPkvY3nva59feOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmraTpoIHpnaLkuI3mmK/mgqjnmoTnlKjmiLboqI7oq5bpoIHpnaLjgILkuI3pgY7vvIzoi6XpnIDopoHvvIzmraTpoIHpnaLlj6/ku6XllZ/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOiri+WcqOmggemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59feOAgicsXG5cdFx0fSksXG5cdFx0cGxlYXNlX2VuYWJsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdG8gdGhpcyBwYWdlIHRvIHN0YXJ0IHVzaW5nIEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+35Zyo5q2k6aG16Z2i5Yqg5YWlIHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+WcsOWdgH19IOadpeWQr+eUqCBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL5Zyo5q2k6aCB6Z2i5Yqg5YWlIHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn19IOS+huWVn+eUqCBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdHBsZWFzZV9lbmFibGVfZWxhYm9yYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogXCJZb3UgaGF2ZSB0aGUgRWFzeSBBcmNoaXZlIGZ1bmN0aW9uYWxpdHkgZW5hYmxlZCBidXQgeW91ciB0YWxrIHBhZ2UgaGFzbid0IGJlZW4gY29uZmlndXJlZCB5ZXQuIFRvIHRha2UgYWR2YW50YWdlIG9mIEVhc3kgQXJjaGl2ZSwgYWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRlbXBsYXRlIHRvIHRoaXMgcGFnZS5cIixcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOeahOi0puWPt+W3sue7j+aUr+aMgSBFYXN5IEFyY2hpdmXvvIzkvYbmmK/vvIzkuLrkuoblvIDlp4vkvb/nlKjor6Xlip/og73vvIzmgqjov5jpnIDopoHlnKjoh6rlt7HnmoTnlKjmiLforqjorrrpobXpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5L2N572ufX3jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo55qE6LOs6Jmf5bey57aT5pSv5oyBIEVhc3kgQXJjaGl2Ze+8jOS9huaYr++8jOeCuuS6humWi+Wni+S9v+eUqOipsuWKn+iDve+8jOaCqOmChOmcgOimgeWcqOiHquW3seeahOeUqOaItuiojuirlumggemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59feOAgicsXG5cdFx0fSksXG5cdFx0bGVmdF9wYXJfc3BsaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnICgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdHJpZ2h0X3BhcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHRwZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdFx0YXJjaGl2ZV9wYXRoX2NvbG9uX3NwbGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmUgbG9jYXRpb246ICcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPlnLDlnYDvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU6Iez77yaJyxcblx0XHR9KSxcblx0XHRsb2FkaW5nX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nIHNlY3Rpb24gJDEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo6K+75Y+W56ysICQxIOiKgueahOWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjoroDlj5bnrKwgJDEg56+A55qE5YWn5a65Jyxcblx0XHR9KSxcblx0XHRkZWxldGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGVsZXRpbmcgc2VjdGlvbiAkMScsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjliKDpmaTnrKwgJDEg6IqC55qE5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOWIqumZpOesrCAkMSDnr4DnmoTlhaflrrknLFxuXHRcdH0pLFxuXHRcdGRvbmVfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlY3Rpb24gJDEgaGFzIGJlZW4gYXJjaGl2ZWQgdG8gJDInLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey57uP5bCG56ysICQxIOiKguWtmOaho+WIsCAkMicsXG5cdFx0XHQnemgtaGFudCc6ICflt7LntpPlsIfnrKwgJDEg56+A5a2Y5qqU5YiwICQyJyxcblx0XHR9KSxcblx0XHRkb25lX2RlbGV0aW5nX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZWN0aW9uICQxIGhhcyBiZWVuIGRlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey57uP5bCG56ysICQxIOiKguWIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICflt7LntpPlsIfnrKwgJDEg56+A5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHRiZWluZ19hcmNoaXZlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5LitJyxcblx0XHR9KSxcblx0XHRiZWluZ19kZWxldGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2JlaW5nIGRlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOS4rScsXG5cdFx0fSksXG5cdFx0YWxyZWFkeV9hcmNoaXZlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5a2Y5qqUJyxcblx0XHR9KSxcblx0XHRhbHJlYWR5X2RlbGV0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHRvdGhlcnNfdGFsa19lbGFib3JhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiBcIlRoaXMgcGFnZSBpcyBhbm90aGVyIHVzZXIncyB0YWxrIHBhZ2UuIFlvdSBjYW5ub3QgYXJjaGl2ZSB0aGUgdG9waWNzIG9uIHRoaXMgcGFnZSBmb3IgaGltL2hlclwiLFxuXHRcdFx0J3poLWhhbnMnOiAn6L+Z5piv5Y+m5LiA5ZCN55So5oi355qE6K6o6K666aG16Z2i77yM5oKo5LiN6IO95Luj5pu/5Y+m5LiA5ZCN55So5oi35a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+mAmeaYr+WPpuS4gOWQjeeUqOaItueahOiojuirlumggemdou+8jOaCqOS4jeiDveS7o+abv+WPpuS4gOWQjeeUqOaItuWtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0cGFnZV9ub3Rfc3VwcG9ydGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZXNlIHBhZ2VzIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZTogRmlsZSwgVGVtcGxhdGUsIE1vZHVsZSwgTWVkaWFXaWtpLCBDYXRlZ29yeSwgU3BlY2lhbCwgSmF2YVNjcmlwdCwgQ1NTLCBKU09OLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfov5nkupvpobXpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8mkZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+mAmeS6m+mggemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77yaRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdH0pLFxuXHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZSBhcmNoaXZlIGxvY2F0aW9uIG9mIHRoaXMgcGFnZSwgXCIkMVwiLCBpcyB1bmRlciB0aGUgYXJ0aWNsZSBuYW1lc3BhY2UsIHdoZXJlIGFyY2hpdmVzIHNob3VsZCBub3QgYmUgbm9ybWFsbHkgZGlyZWN0ZWQgdG8uIFBsZWFzZSBjaGVjayBpZiB5b3UgaGF2ZSB0aGUgY29ycmVjdCBhcmNoaXZlIGxvY2F0aW9uLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmraTpobXpnaLnm67liY3nmoTlrZjmoaPlnLDlnYDmmK/igJwkMeKAne+8jOWcqOadoeebruWQjeensOepuumXtOS5i+S4i+OAguS4gOiIrOiAjOiogOS4jeW6lOWQkeadoeebruWQjeensOepuumXtOi/m+ihjOWtmOaho++8jOivt+ajgOafpeWtmOaho+WcsOWdgOOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmraTpoIHpnaLnlbbliY3nmoTlrZjmqpTlnLDlnYDmmK/jgIwkMeOAje+8jOWcqOaineebruWQjeeoseepuumWk+S5i+S4i+OAguS4gOiIrOiAjOiogOS4jeaHieWQkeaineebruWQjeeoseepuumWk+mAsuihjOWtmOaqlO+8jOiri+aqouafpeWtmOaqlOWcsOWdgOOAgicsXG5cdFx0fSksXG5cdFx0cHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBvZiB0aGlzIHBhZ2UsIFwiJDFcIiwgaXMgdGhpcyBwYWdlIGl0c2VsZiwgRWFzeSBhcmNoaXZlIGNhbm5vdCBvcGVyYXRlIGxpa2UgdGhpcy4gJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouebruWJjeeahOWtmOaho+WcsOWdgOaYr+KAnCQx4oCd77yM5ZKM5q2k6aG16Z2i5ZCN56ew55u45ZCM44CCRWFzeSBBcmNoaXZlIOaXoOazleaMieatpOWcsOWdgOWtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLnlbbliY3nmoTlrZjmqpTlnLDlnYDmmK/jgIwkMeOAje+8jOWSjOatpOmggemdouWQjeeoseebuOWQjOOAgkVhc3kgQXJjaGl2ZSDnhKHms5XmjInmraTlnLDlnYDlrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdGFyY2hpdmVfc3VtbWFyeTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOauteiQvScsXG5cdFx0fSksXG5cdFx0ZGVsZXRlX3N1bW1hcnk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOauteiQvScsXG5cdFx0fSksXG5cdH07XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLFdBQU4sTUFBZTtFQUNkQztFQUNBQztFQUNBQztFQUNBQztFQUVBQyxZQUFZQyxhQUFxQkMsUUFBMkI7QUFDM0QsU0FBS04sTUFBTUs7QUFDWCxTQUFLSixPQUFPO0FBQ1osU0FBS0MsUUFBUTtBQUNiLFNBQUtDLFFBQVE7QUFDYixRQUFJLE9BQU9HLFdBQVcsVUFBVTtBQUMvQkEsZUFBU0MsT0FBT0QsTUFBTTtJQUN2QjtBQUNBLFFBQ0NELFlBQVlHLFNBQVMsS0FDckIsb0JBQW9CQyxLQUFLSixZQUFZSyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQ2hELENBQUNKLE9BQU9LLFNBQVMsWUFBWSxHQUM1QjtBQUNELE9BQUEsRUFBQSxFQUFBLEVBQUEsRUFBUyxLQUFLVixNQUFNLEtBQUtDLE9BQU8sS0FBS0MsS0FBSyxJQUFJRTtBQUM5QyxVQUFJLEtBQUtKLFNBQVMsS0FBS0UsU0FBUyxLQUFLRixTQUFTLEtBQUtDLFNBQVMsS0FBS0MsVUFBVSxLQUFLRCxPQUFPO0FBQ3RGLGNBQU0sSUFBSVUsWUFBWSwyRUFBMkU7TUFDbEc7SUFDRDtFQUNEO0VBRUFDLEtBQUtDLEtBQXdDO0FBQUEsUUFBQUM7QUFDNUNELFVBQU0sS0FBS2IsT0FBT2EsTUFBTSxLQUFLWjtBQUM3QixRQUFJLENBQUMsS0FBS0YsSUFBSVcsU0FBU0csR0FBRyxHQUFHO0FBQzVCLGFBQU87SUFDUjtBQUNBLFlBQUFDLG1CQUFPLEtBQUtmLElBQUlnQixNQUFNRixHQUFHLEVBQUUsQ0FBQyxPQUFBLFFBQUFDLHFCQUFBLFNBQUEsU0FBckJBLGlCQUF3QkMsTUFBTSxLQUFLYixLQUFlLEVBQUUsQ0FBQztFQUM3RDtBQUNEOztBQzNCQSxJQUFBYyxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ1BsQixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFaEIsSUFBTUUsb0JBQW9CQSxNQUFNO0FBQ3RDQyxTQUFPQyxhQUFhQyxPQUFPO0lBQzFCQyxTQUFBLEdBQVFMLGtCQUFBTSxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU1Isa0JBQUFNLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsV0FBQSxHQUFVVCxrQkFBQU0sVUFBUztNQUNsQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxjQUFBLEdBQWFWLGtCQUFBTSxVQUFTO01BQ3JCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RJLFlBQUEsR0FBV1gsa0JBQUFNLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREsseUJBQUEsR0FBd0JaLGtCQUFBTSxVQUFTO01BQ2hDQyxJQUFJO01BQ0osV0FDQztNQUNELFdBQ0M7SUFDRixDQUFDO0lBQ0RNLGdCQUFBLEdBQWViLGtCQUFBTSxVQUFTO01BQ3ZCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RPLDBCQUFBLEdBQXlCZCxrQkFBQU0sVUFBUztNQUNqQ0MsSUFBSTtNQUNKLFdBQ0M7TUFDRCxXQUNDO0lBQ0YsQ0FBQztJQUNEUSxpQkFBQSxHQUFnQmYsa0JBQUFNLFVBQVM7TUFDeEJDLElBQUk7TUFDSlMsSUFBSTtJQUNMLENBQUM7SUFDREMsWUFBQSxHQUFXakIsa0JBQUFNLFVBQVM7TUFDbkJDLElBQUk7TUFDSlMsSUFBSTtJQUNMLENBQUM7SUFDREUsU0FBQSxHQUFRbEIsa0JBQUFNLFVBQVM7TUFDaEJDLElBQUk7TUFDSlMsSUFBSTtJQUNMLENBQUM7SUFDREcsMkJBQUEsR0FBMEJuQixrQkFBQU0sVUFBUztNQUNsQ0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEYSxvQkFBQSxHQUFtQnBCLGtCQUFBTSxVQUFTO01BQzNCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RjLHFCQUFBLEdBQW9CckIsa0JBQUFNLFVBQVM7TUFDNUJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRGUsaUJBQUEsR0FBZ0J0QixrQkFBQU0sVUFBUztNQUN4QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEZ0IsMEJBQUEsR0FBeUJ2QixrQkFBQU0sVUFBUztNQUNqQ0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEaUIsaUJBQUEsR0FBZ0J4QixrQkFBQU0sVUFBUztNQUN4QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEa0IsZ0JBQUEsR0FBZXpCLGtCQUFBTSxVQUFTO01BQ3ZCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RtQixtQkFBQSxHQUFrQjFCLGtCQUFBTSxVQUFTO01BQzFCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RvQixrQkFBQSxHQUFpQjNCLGtCQUFBTSxVQUFTO01BQ3pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RxQix3QkFBQSxHQUF1QjVCLGtCQUFBTSxVQUFTO01BQy9CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RzQixxQkFBQSxHQUFvQjdCLGtCQUFBTSxVQUFTO01BQzVCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0R1QiwrQkFBQSxHQUE4QjlCLGtCQUFBTSxVQUFTO01BQ3RDQyxJQUFJO01BQ0osV0FDQztNQUNELFdBQ0M7SUFDRixDQUFDO0lBQ0R3QiwyQ0FBQSxHQUEwQy9CLGtCQUFBTSxVQUFTO01BQ2xEQyxJQUFJO01BQ0osV0FDQztNQUNELFdBQ0M7SUFDRixDQUFDO0lBQ0R5QiwwQ0FBQSxHQUF5Q2hDLGtCQUFBTSxVQUFTO01BQ2pEQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QwQixrQkFBQSxHQUFpQmpDLGtCQUFBTSxVQUFTO01BQ3pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QyQixpQkFBQSxHQUFnQmxDLGtCQUFBTSxVQUFTO01BQ3hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDs7QUR4SUEsSUFBQTRCLHFCQUF3QnBDLFFBQUEsaUJBQUE7QUFDeEIsSUFBQXFDLHFCQUF1QnJDLFFBQUEscUJBQUE7Q0FFdEIsU0FBU3NDLFlBQUFDLHNCQUFBQyx1QkFBQUMsd0JBQUFDLHdCQUFjO0FBQ3ZCLE1BQUlDLEdBQUd4RCxPQUFPeUQsSUFBSSxtQkFBbUIsSUFBSSxLQUFLRCxHQUFHeEQsT0FBT3lELElBQUksWUFBWSxNQUFNLGFBQWE7QUFDMUY7RUFDRDtBQUNBLE1BQUksQ0FBQ3pDLE9BQU9DLGNBQWM7QUFDekJELFdBQU9DLGVBQWUsQ0FBQztFQUN4QjtBQUVBLFFBQU15QyxTQUFVLHVCQUFNO0FBQ3JCLFVBQU1DLFlBQVlBLENBQUNDLE9BQU9DLGFBQWE7QUFDdEMsWUFBTUMsT0FBQSxHQUFNYixtQkFBQWMsV0FBVSxnQkFBZ0I7QUFDdEMsV0FBS0QsSUFBSUUsY0FBYyxRQUFRSixLQUFLLEVBQUVLLEtBQUtKLFFBQVE7SUFDcEQ7QUFDQSxVQUFNSyxVQUFVQSxDQUFDQyxPQUFPTixhQUFhO0FBQ3BDLFlBQU1ELFFBQVE7UUFDYlEsUUFBUTtRQUNSQyxNQUFNLENBQUMsV0FBVztRQUNsQkMsUUFBUSxDQUFDLE9BQU8sU0FBUyxhQUFhLFFBQVEsVUFBVSxRQUFRLFdBQVcsUUFBUSxTQUFTO1FBQzVGQyxRQUFRO1FBQ1JDLGVBQWU7UUFDZkMsUUFBUU47TUFDVDtBQUNBUixnQkFBVUMsT0FBT0MsUUFBUTtJQUMxQjtBQUNBLFVBQU1hLGlCQUFpQkEsQ0FBQ1AsT0FBT1EsU0FBU2QsYUFBYTtBQUNwRCxZQUFNRCxRQUFRO1FBQ2JRLFFBQVE7UUFDUkMsTUFBTSxDQUFDLFdBQVc7UUFDbEJDLFFBQVEsQ0FBQyxTQUFTO1FBQ2xCQyxRQUFRO1FBQ1JDLGVBQWU7UUFDZkMsUUFBUU47UUFDUlMsV0FBV0Q7TUFDWjtBQUNBaEIsZ0JBQVVDLE9BQU9DLFFBQVE7SUFDMUI7QUFDQSxVQUFNZ0Isa0JBQW1CQyxVQUFTO0FBQ2pDLFVBQUlBLEtBQUtDLFNBQVNELEtBQUtDLE1BQU1DLFNBQVNGLEtBQUtDLE1BQU1DLE1BQU0sQ0FBQyxLQUFLRixLQUFLQyxNQUFNQyxNQUFNLENBQUMsRUFBRUMsVUFBVSxDQUFDLEdBQUc7QUFDOUYsZUFBT0gsS0FBS0MsTUFBTUMsTUFBTSxDQUFDLEVBQUVDLFVBQVUsQ0FBQyxFQUFFQztNQUN6QztBQUNBLGFBQU87SUFDUjtBQUNBLFVBQU1DLGdCQUFpQkwsVUFBUztBQUMvQixVQUFJLE9BQU9BLFNBQVMsWUFBWSxDQUFDQSxLQUFLQyxTQUFTLENBQUNELEtBQUtDLE1BQU1DLFNBQVNGLEtBQUtDLE1BQU1DLE1BQU0sQ0FBQyxFQUFFSSxTQUFTO0FBQ2hHLGVBQU87TUFDUjtBQUNBLGFBQU87SUFDUjtBQUNBLFVBQU1DLE9BQU9BLENBQUNsQixPQUFPUSxTQUFTVyxNQUFNQyxTQUFTMUIsYUFBYTtBQUN6RCxZQUFNRCxRQUFRO1FBQ2JRLFFBQVE7UUFDUkcsUUFBUTtRQUNSQyxlQUFlO1FBQ2ZMO1FBQ0FvQjtRQUNBRDtNQUNEO0FBQ0EsVUFBSVgsU0FBUztBQUNaZixjQUFNZSxVQUFVQTtNQUNqQjtBQUNBaEIsZ0JBQVVDLE9BQU9DLFFBQVE7SUFDMUI7QUFDQSxVQUFNMkIsYUFBYUEsQ0FBQ0MsTUFBTUMsZUFBZUgsU0FBUzFCLGFBQWE7QUFDOURLLGNBQVF1QixNQUFPWCxVQUFTO0FBQ3ZCLGNBQU1hLG1CQUFtQlIsY0FBY0wsSUFBSSxNQUFNLFFBQVEsS0FBS0QsZ0JBQWdCQyxJQUFJO0FBQ2xGTyxhQUFLSSxNQUFNLE1BQU14RixPQUFPMEYsZ0JBQWdCLElBQUlELGVBQWVILFNBQVMxQixRQUFRO01BQzdFLENBQUM7SUFDRjtBQUNBLFVBQU0rQixpQkFBaUJBLENBQUN6QixPQUFPUSxTQUFTa0IsYUFBYWhDLFVBQVUwQixZQUFZO0FBQzFFYixxQkFBZVAsT0FBT1EsU0FBVUcsVUFBUztBQUN4Q1UsbUJBQVdLLGFBQUEsT0FBQUMsT0FBb0JqQixnQkFBZ0JDLElBQUksQ0FBQyxHQUFJUyxPQUFPO0FBQy9ERixhQUFLbEIsT0FBT1EsUUFBUW9CLFNBQVMsR0FBRyxJQUFJUixTQUFTMUIsUUFBUTtNQUN0RCxDQUFDO0lBQ0Y7QUFDQSxVQUFNbUMsZ0JBQWdCQSxDQUFDN0IsT0FBT1EsU0FBU2QsVUFBVTBCLFlBQVk7QUFDNURGLFdBQUtsQixPQUFPUSxRQUFRb0IsU0FBUyxHQUFHLElBQUlSLFNBQVMxQixRQUFRO0lBQ3REO0FBQ0EsV0FBTztNQUNOb0MsaUJBQWlCTDtNQUNqQk0sZ0JBQWdCRjtJQUNqQjtFQUNELEdBQUc7QUFFSGhGLFNBQU9DLGFBQWFrRixrQkFDbkI7QUFRRG5GLFNBQU9DLGFBQWFtRixXQUFXLElBQUkzRyxTQUFTdUIsT0FBT0MsYUFBYWtGLGVBQWU7QUFDL0VuRixTQUFPQyxhQUFhb0YsZUFBZTtBQUNuQyxHQUFBaEQseUJBQUFELHVCQUFBcEMsT0FBT0MsY0FBYXFGLHVDQUFBLFFBQUFqRCwwQkFBQSxTQUFBQSx3QkFBcEJELHFCQUFvQmtELG9DQUFzQyxDQUFBO0FBQzFEdEYsU0FBT0MsYUFBYXNGLGdDQUFnQyxDQUNuRCxhQUNBLGtCQUNBLGVBQ0EsaUJBQ0EsaUJBQ0EsZ0JBQ0Esc0JBQ0EsdUJBQ0Esc0JBQUE7QUFFRCxRQUFNQywyQkFBMkJDLFNBQVNDLGlCQUFpQixxQ0FBcUM7QUFDaEcsUUFBTSxDQUFDQyxhQUFhLElBQUlIO0FBQ3hCLFFBQU1KLFdBQVdPLGdCQUFnQixJQUFJbEgsU0FBU2tILGNBQWNDLFNBQVMsSUFBSSxJQUFJbkgsU0FBUyxFQUFFO0FBQ3hGLE1BQUkyRyxTQUFTN0YsS0FBSyxXQUFXLE1BQU0sS0FBSztBQUN2Q1MsV0FBT0MsYUFBYWtGLGtCQUFrQlEsY0FBY0M7QUFDcEQ1RixXQUFPQyxhQUFhbUYsV0FBVyxJQUFJM0csU0FBU3VCLE9BQU9DLGFBQWFrRixlQUFlO0VBQ2hGO0FBRUFuRixTQUFPQyxhQUFhNEYsZUFBZXJELEdBQUd4RCxPQUFPeUQsSUFBSSxtQkFBbUIsTUFBTTtBQUMxRXpDLFNBQU9DLGFBQWFvRixlQUNuQnJGLE9BQU9DLGFBQWE0RixpQkFDbkIsTUFBTTtBQUNOLFFBQUlDLFlBQVl0RCxHQUFHeEQsT0FBT3lELElBQUksWUFBWSxFQUFFL0MsTUFBTSxHQUFHO0FBQ3JEb0csY0FBVSxDQUFDLElBQUk7QUFDZkEsZ0JBQVlBLFVBQVVDLEtBQUssRUFBRTtBQUM3QixLQUFDRCxTQUFTLElBQUlBLFVBQVVwRyxNQUFNLEdBQUc7QUFDakMsVUFBTXNHLFlBQVl4RCxHQUFHeEQsT0FBT3lELElBQUksWUFBWTtBQUM1QyxXQUNDdUQsVUFBVXRHLE1BQU0sR0FBRyxFQUFFcUcsS0FBSyxFQUFFLEVBQUVyRyxNQUFNLEdBQUcsRUFBRXFHLEtBQUssRUFBRSxNQUFNRCxVQUFVcEcsTUFBTSxHQUFHLEVBQUVxRyxLQUFLLEVBQUUsRUFBRXJHLE1BQU0sR0FBRyxFQUFFcUcsS0FBSyxFQUFFO0VBRXhHLEdBQUc7QUFDSi9GLFNBQU9DLGFBQWFnRyxlQUFlYixTQUFTN0YsS0FBSyxXQUFXLE1BQU07QUFDbEVTLFNBQU9DLGFBQWFpRyxtQkFDbkJsRyxPQUFPQyxhQUFhb0YsaUJBQWlCLFNBQVNyRixPQUFPQyxhQUFhNEYsaUJBQWlCO0FBQ3BGN0YsU0FBT0MsYUFBYWtHLGFBQWEzRCxHQUFHeEQsT0FBT3lELElBQUksbUJBQW1CLE1BQU07QUFDeEV6QyxTQUFPQyxhQUFhbUcsa0JBQWtCNUQsR0FBR3hELE9BQU95RCxJQUFJLGlCQUFpQixJQUFJRCxHQUFHeEQsT0FBT3lELElBQUksY0FBYyxNQUFNO0FBQzNHMUMsb0JBQWtCO0FBQ2xCLFFBQU1zRyxXQUFBL0QseUJBQVV0QyxPQUFPQyxhQUFhcUcsaUNBQUEsUUFBQWhFLDJCQUFBLFNBQUFBLHlCQUErQjtBQUNuRSxRQUFNaUUsV0FBQWhFLHlCQUFVdkMsT0FBT0MsYUFBYXVHLGdDQUFBLFFBQUFqRSwyQkFBQSxTQUFBQSx5QkFBOEI7QUFDbEUsUUFBTWtFLGdCQUFpQkMsWUFDdEJBLE9BQ0VDLFFBQVEsTUFBTSxPQUFPLEVBQ3JCQSxRQUFRLE1BQU0sTUFBTSxFQUNwQkEsUUFBUSxNQUFNLE1BQU0sRUFDcEJBLFFBQVEsTUFBTSxRQUFRLEVBQ3RCQSxRQUFRLE1BQU0sUUFBUTtBQUV6QixRQUFNQyxVQUFVQSxDQUFDQyxLQUFLQyxjQUFjO0FBQ25DLFFBQUk7QUFDSCxVQUFJNUMsVUFBVWxFLE9BQU9DLGFBQWFDLEtBQUsyRyxHQUFHO0FBQzFDLGVBQVNFLHVCQUF1QixNQUFNQyxLQUFLLEdBQUdELHNCQUFzQkMsTUFBTTtBQUN6RSxjQUFNQyxTQUFBLElBQUFuQyxPQUFha0MsS0FBSyxDQUFDO0FBQ3pCLFlBQUk5QyxRQUFRN0UsU0FBUzRILE1BQU0sR0FBRztBQUM3Qi9DLG9CQUFVNEMsVUFBVUUsRUFBRSxJQUNuQjlDLFFBQVF4RSxNQUFNdUgsTUFBTSxFQUFFbEIsS0FBS2UsVUFBVUUsRUFBRSxDQUFDLElBQ3hDOUMsUUFBUXhFLE1BQU11SCxNQUFNLEVBQUVsQixLQUFLLEVBQUU7UUFDakMsT0FBTztBQUNOZ0IsaUNBQXVCO1FBQ3hCO01BQ0Q7QUFDQSxhQUFPN0M7SUFDUixRQUFRO0FBQ1AsYUFBTztJQUNSO0VBQ0Q7QUFDQSxRQUFNZ0Qsb0JBQXFCQyxXQUFVO0FBQ3BDLFVBQU1DLE1BQU1DLE1BQU1DLEtBQUs7TUFDdEJwSSxRQUFRaUk7SUFDVCxDQUFDO0FBQ0QsYUFBU0gsS0FBSyxHQUFHQSxLQUFLRyxPQUFPSCxNQUFNO0FBQ2xDSSxVQUFJSixFQUFFLElBQUk7SUFDWDtBQUNBLFdBQU9JO0VBQ1IsR0FBR3BILE9BQU9DLGFBQWFzSCxhQUFhO0FBQ3BDLFFBQU1DLGlCQUFrQkMsNEJBQTJCO0FBQ2xELFFBQUlDLE9BQU87QUFDWCxhQUFTVixLQUFLLEdBQUdBLEtBQUtTLHdCQUF3QlQsTUFBTTtBQUNuRCxVQUFJRSxpQkFBaUJGLEVBQUUsTUFBTSxNQUFNO0FBQ2xDVTtNQUNEO0lBQ0Q7QUFDQSxXQUFPRCx5QkFBeUJDO0VBQ2pDO0FBR0EsUUFBTUMscUJBQXFCQSxDQUFDQyxnQkFBZ0JDLGVBQWVDLElBQUlDLG9CQUFvQjtBQUNsRixRQUFJQztBQUNKLFFBQUlDO0FBQ0osUUFBSUM7QUFDSixRQUFJQztBQUNKLFFBQUlKLG9CQUFvQixXQUFXO0FBQ2xDRyxrQkFBWTtBQUNaQyxzQkFBZ0I7QUFDaEIsVUFBSU4sa0JBQWtCLFVBQVU7QUFDL0JHLG1CQUFXO0FBQ1hDLHNCQUFjO01BQ2YsV0FBV0osa0JBQWtCLFdBQVc7QUFDdkNHLG1CQUFXO0FBQ1hDLHNCQUFjO01BQ2Y7SUFDRCxXQUFXRixvQkFBb0IsUUFBUTtBQUN0Q0csa0JBQVk7QUFDWkMsc0JBQWdCO0FBQ2hCLFVBQUlOLGtCQUFrQixVQUFVO0FBQy9CRyxtQkFBVztBQUNYQyxzQkFBYztNQUNmLFdBQVdKLGtCQUFrQixXQUFXO0FBQ3ZDRyxtQkFBVztBQUNYQyxzQkFBYztNQUNmO0lBQ0Q7QUFDQSxVQUFNRyxVQUFVO01BQ2ZDLE1BQU1BLE1BQU07QUFDWCxTQUFBLEdBQUFuRyxtQkFBQW9HLFVBQ0M7VUFDQ2hFLE1BQU1zQyxRQUFRb0IsVUFBVSxDQUFDSixlQUFlN0MsU0FBUyxHQUFHK0MsRUFBRSxDQUFDO1VBQ3ZEUyxPQUFPLENBQUNKO1VBQ1JLLFVBQVVMLGdCQUFnQixNQUFPO1FBQ2xDLEdBQ0FELFNBQ0Q7TUFDRDtNQUNBTyxjQUFjQSxNQUFNO0FBQ25CLGNBQU1DLE9BQU9qRCxTQUFTa0QsY0FBQSx1Q0FBQTdELE9BQXFEOEMsY0FBYyxDQUFFO0FBQzNGLGNBQU1nQixRQUFRRixLQUFLRztBQUNuQixpQkFBUzdCLEtBQUssR0FBR0EsS0FBSzRCLE1BQU1FLFdBQVc1SixTQUFTLEdBQUc4SCxNQUFNO0FBQ3hENEIsZ0JBQU1FLFdBQVc5QixFQUFFLEVBQUUrQixNQUFNQyxVQUFVO1FBQ3RDO0FBQ0FOLGFBQUs5QyxZQUFZZ0IsUUFBUXFCLFdBQVc7QUFDcENTLGFBQUtLLE1BQU1DLFVBQVU7QUFDckJOLGFBQUtLLE1BQU1FLFFBQVE7TUFDcEI7SUFDRDtBQUNBLFdBQU9iO0VBQ1I7QUFDQSxRQUFNYyxzQkFBc0JBLENBQUN0QixnQkFBZ0J1QixhQUFhO0FBQ3pELFVBQU1DLHdCQUF3QjVCLGVBQWVJLGNBQWM7QUFDM0RELHVCQUFtQndCLFVBQVUsVUFBVSxJQUFJLFNBQVMsRUFBRWQsS0FBSztBQUMzRDNGLFdBQU93QyxlQUNOMUMsR0FBR3hELE9BQU95RCxJQUFJLFlBQVksR0FDMUIyRyx1QkFDQSxNQUFNO0FBQ0x6Qix5QkFBbUJ3QixVQUFVLFVBQVUsSUFBSSxNQUFNLEVBQUVkLEtBQUs7QUFDeERWLHlCQUFtQndCLFVBQVUsVUFBVSxJQUFJLE1BQU0sRUFBRVYsYUFBYTtBQUNoRXZCLHVCQUFpQlUsY0FBYyxJQUFJO0lBQ3BDLEdBQ0FyQixXQUFXSyxRQUFRLGdCQUFnQixDQUNwQztFQUNEO0FBQ0E1RyxTQUFPQyxhQUFhaUYsaUJBQWlCLENBQUMwQyxnQkFBZ0J1QixhQUFhO0FBQ2xFeEIsdUJBQW1Cd0IsVUFBVSxVQUFVLElBQUksU0FBUyxFQUFFVixhQUFhO0FBQ25FUyx3QkFBb0J0QixnQkFBZ0J1QixRQUFRO0VBQzdDO0FBQ0EsUUFBTUUsdUJBQXVCQSxDQUFDekIsZ0JBQWdCdUIsYUFBYTtBQUMxRCxVQUFNQyx3QkFBd0I1QixlQUFlSSxjQUFjO0FBQzNELFVBQU1FLEtBQUs5SCxPQUFPQyxhQUFhbUYsU0FBUzdGLEtBQUssU0FBUztBQUN0RG9JLHVCQUFtQndCLFVBQVUsV0FBV3JCLElBQUksU0FBUyxFQUFFTyxLQUFLO0FBQzVEM0YsV0FBT3VDLGdCQUNOekMsR0FBR3hELE9BQU95RCxJQUFJLFlBQVksR0FDMUIyRyx1QkFDQXRCLElBQ0EsTUFBTTtBQUNMSCx5QkFBbUJ3QixVQUFVLFdBQVdyQixJQUFJLE1BQU0sRUFBRU8sS0FBSztBQUN6RFYseUJBQW1Cd0IsVUFBVSxXQUFXckIsSUFBSSxNQUFNLEVBQUVXLGFBQWE7QUFDakV2Qix1QkFBaUJVLGNBQWMsSUFBSTtJQUNwQyxHQUNBdkIsV0FBV08sUUFBUSxpQkFBaUIsQ0FDckM7RUFDRDtBQUNBNUcsU0FBT0MsYUFBYWdGLGtCQUFrQixDQUFDMkMsZ0JBQWdCdUIsYUFBYTtBQUNuRSxVQUFNckIsS0FBSzlILE9BQU9DLGFBQWFtRixTQUFTN0YsS0FBSyxTQUFTO0FBQ3REb0ksdUJBQW1Cd0IsVUFBVSxXQUFXckIsSUFBSSxTQUFTLEVBQUVXLGFBQWE7QUFDcEVZLHlCQUFxQnpCLGdCQUFnQnVCLFFBQVE7RUFDOUM7QUFDQW5KLFNBQU9DLGFBQWFxSixtQkFBb0JDLHFCQUFvQjtBQUUzRCxVQUFNQyx3QkFBd0I7TUFDN0I1SSx5QkFBeUIsQ0FBQyx5QkFBeUI7TUFDbkRjLHVCQUF1QixDQUFDLHVCQUF1QjtNQUMvQ2hCLHdCQUF3QixDQUFDLHdCQUF3QjtNQUNqRG1CLDBDQUEwQyxDQUN6Qyw0Q0FDQSxXQUNBLFFBQ0EsT0FDQSxDQUFDNEUsY0FBY3pHLE9BQU9DLGFBQWFtRixTQUFTN0YsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFBO01BRTdEdUMseUNBQXlDLENBQ3hDLDJDQUNBLFdBQ0EsUUFDQSxPQUNBLENBQUMyRSxjQUFjekcsT0FBT0MsYUFBYW1GLFNBQVM3RixLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUE7TUFFN0RxQyw4QkFBOEIsQ0FBQyw4QkFBOEI7SUFDOUQ7QUFDQSxVQUFNNkgsYUFBYUQsc0JBQXNCRCxlQUFlLEtBQUs7QUFDN0QsUUFBSUUsZUFBZSxPQUFPO0FBQ3pCLFlBQU0sQ0FBQ0MsTUFBTUMsT0FBT0MsTUFBTUMsVUFBVUMsTUFBTSxJQUFJTDtBQUM5QyxZQUFNTSxvQkFBQSxHQUFtQjdILG1CQUFBb0csVUFDeEI7UUFDQ0ksTUFBTXNCLEVBQUUsUUFBUSxFQUFFQyxPQUFPckQsUUFBUThDLE1BQU1JLE1BQU0sQ0FBQyxFQUFFckgsSUFBSSxDQUFDO1FBQ3JEOEYsT0FBT3FCLFNBQVM7UUFDaEJwQixVQUFVb0IsU0FBUyxTQUFTLEtBQUtBO1FBQ2pDTSxTQUFTQSxNQUFNO0FBQ2QsY0FBSUwsVUFBVTtBQUNiO1VBQ0Q7QUFDQUUsMkJBQWlCSSxVQUFVO1FBQzVCO01BQ0QsR0FDQVIsS0FDRDtJQUNEO0VBQ0Q7QUFHQSxNQUFJUyxJQUFJO0FBQ1IsTUFBSUMsSUFBSTtBQUNSLE1BQUlDO0FBQ0osTUFBSUM7QUFDSixNQUFJQztBQUNKLFFBQU1DLFlBQVk5SyxtQ0FBQStLLFFBQUFDLGNBQUMsUUFBQTtJQUFLQyxPQUFNO0VBQUEsR0FBeUIsS0FBUTtBQUMvRCxRQUFNQyxtQ0FDTDdLLE9BQU9DLGFBQWFtRixTQUFTN0YsS0FBSyxTQUFTLE1BQU0sT0FBT1MsT0FBT0MsYUFBYW1GLFNBQVM3RixLQUFLLFdBQVcsTUFBTTtBQUM1RyxRQUFNdUwsb0NBQ0w5SyxPQUFPQyxhQUFhbUYsU0FBUzdGLEtBQUssU0FBUyxNQUFNLE9BQU9TLE9BQU9DLGFBQWFtRixTQUFTN0YsS0FBSyxXQUFXLE1BQU07QUFDNUcsTUFBSXdMO0FBQ0osTUFBSUM7QUFDSixRQUFNQyx1QkFBd0JDLGNBQzdCdkwsbUNBQUErSyxRQUFBQyxjQUFDLFFBQUE7SUFDQUMsT0FBTyxDQUFDLGdDQUFBLHNDQUFBOUYsT0FBc0VvRyxRQUFRLENBQUE7SUFDdEZuQyxPQUFPO01BQUNDLFNBQVM7SUFBTTtFQUFBLEdBQ3ZCLFNBRUQ7QUFFRCxNQUFJbUM7QUFDSixNQUFJQztBQUNKLE1BQUkzRixTQUFTa0QsY0FBYyxjQUFjLEtBQUtsRCxTQUFTQyxpQkFBaUIsWUFBWSxHQUFHO0FBQ3RGeUYsc0JBQWtCMUYsU0FBU2tELGNBQWMsY0FBYyxLQUFLbEQsU0FBU0MsaUJBQWlCLFlBQVksRUFBRSxDQUFDO0FBQ3JHMEYsNEJBQXdCO0VBQ3pCLE9BQU87QUFDTkQsc0JBQWtCeEwsbUNBQUErSyxRQUFBQyxjQUFBaEwsbUJBQUErSyxRQUFBVyxVQUFBLElBQUU7QUFDcEJELDRCQUF3QjtFQUN6QjtBQUVBLFFBQU1FLGtCQUFtQkMsZUFBYztBQUFBLFFBQUFDLGFBQUFDLDJCQUNoQkYsU0FBQSxHQUFBRztBQUFBLFFBQUE7QUFBdEIsV0FBQUYsV0FBQUcsRUFBQSxHQUFBLEVBQUFELFNBQUFGLFdBQUFJLEVBQUEsR0FBQUMsUUFBaUM7QUFBQSxjQUF0QkMsVUFBQUosT0FBQUs7QUFDVixZQUFJRCxRQUFRM00sS0FBS3FELEdBQUd4RCxPQUFPeUQsSUFBSSxZQUFZLENBQUMsR0FBRztBQUM5QyxpQkFBTztRQUNSO01BQ0Q7SUFBQSxTQUFBdUosS0FBQTtBQUFBUixpQkFBQVMsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQVIsaUJBQUFVLEVBQUE7SUFBQTtBQUNBLFdBQU87RUFDUjtBQUNBLE1BQUlsTSxPQUFPQyxhQUFha0csY0FBY25HLE9BQU9DLGFBQWFtRyxpQkFBaUI7RUFFM0UsV0FBV2tGLGdCQUFnQnRMLE9BQU9DLGFBQWFxRixpQ0FBaUMsR0FBRztFQUVuRixXQUFXZ0csZ0JBQWdCdEwsT0FBT0MsYUFBYXNGLDZCQUE2QixHQUFHO0FBRTlFNEYsb0JBQWdCZ0Isc0JBQ2ZmLHVCQUNBekwsbUNBQUErSyxRQUFBQyxjQUFDLE9BQUE7TUFBSXlCLElBQUc7SUFBQSxHQUNQek0sbUNBQUErSyxRQUFBQyxjQUFDLEtBQUE7TUFDQTVCLE9BQU87UUFDTkUsT0FBTztRQUNQb0QsUUFBUTtNQUNUO01BQ0FuQyxTQUFTQSxNQUFNO0FBQ2RsSyxlQUFPQyxhQUFhcUosaUJBQWlCLDhCQUE4QjtNQUNwRTtJQUFBLEdBQ0EsS0FDRTFDLFFBQVEsb0JBQW9CLENBQy9CLENBQ0QsQ0FDRDtFQUNELFdBQVdwRSxHQUFHeEQsT0FBT3lELElBQUksWUFBWSxNQUFNekMsT0FBT0MsYUFBYW1GLFNBQVM3RixLQUFLLFNBQVMsR0FBRztBQUN4RlMsV0FBT0MsYUFBYXFKLGlCQUFpQix5Q0FBeUM7RUFDL0UsV0FBV3RKLE9BQU9DLGFBQWFnRyxnQkFBZ0IsQ0FBQ2pHLE9BQU9DLGFBQWFpRyxrQkFBa0I7QUFHckYsUUFBSSxRQUFRL0csS0FBS2EsT0FBT0MsYUFBYW1GLFNBQVM3RixLQUFLLFNBQVMsQ0FBQyxNQUFNLE1BQU07QUFDeEVTLGFBQU9DLGFBQWFxSixpQkFBaUIsMENBQTBDO0lBQ2hGO0FBQ0EsVUFBTWdELG1DQUFtQ0EsTUFBTTtBQUM5QyxZQUFNQyx3QkFBd0I5RyxTQUFTQyxpQkFBaUIsaUJBQWlCO0FBQ3pFLFdBQUswRSxJQUFJLEdBQUdBLElBQUltQyxzQkFBc0JyTixRQUFRa0wsS0FBSztBQUNsREUsY0FBTWlDLHNCQUFzQm5DLENBQUM7QUFDN0IsY0FBTW9DLEtBQUssb0JBQW9Cck4sS0FBS21MLElBQUl4QixXQUFXLENBQUMsRUFBRTJELElBQUk7QUFDMUQsY0FBTUMsb0JBQW9CRixLQUFLLElBQUk7QUFDbkMsWUFDQ2xDLElBQUl6QixXQUFXOEQsUUFBUUMsWUFBWSxNQUFNLFFBQ3pDdEMsSUFBSXpCLFdBQVd1RCxPQUFPLGtCQUN0QlMsbUJBQW1CdkMsSUFBSXhCLFdBQVc0RCxpQkFBaUIsRUFBRUQsS0FBSy9NLE1BQU0sWUFBWSxFQUFFLENBQUMsRUFBRUEsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQzdGOEMsR0FBR3hELE9BQU95RCxJQUFJLFlBQVksR0FDMUI7QUFDRCtILG1CQUFTc0MsT0FBT0MsU0FDZnpDLElBQUl4QixXQUFXNEQsaUJBQWlCLEVBQUVELEtBQUsvTSxNQUFNLGNBQWMsRUFBRSxDQUFDLEVBQUVBLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FDNUUsRUFDRDtBQUNBNkssb0JBQVVILElBQUlDLElBQUk7QUFDbEJVLDBDQUFnQ0YsbUNBQzdCLEtBQ0FKLFVBQVV1QyxNQUNWck4sbUNBQUErSyxRQUFBQyxjQUFDLEtBQUE7WUFDQVQsU0FBU0EsTUFBTTtBQUNkbEsscUJBQU9DLGFBQWFpRixlQUFlc0YsUUFBUUQsT0FBTztZQUNuRDtVQUFBLEdBQ0EsS0FDRTNELFFBQVEsUUFBUSxDQUNuQixDQUNEO0FBQ0ZvRSwyQ0FBaUNGLG9DQUM5QixLQUNBTCxVQUFVdUMsTUFDVnJOLG1DQUFBK0ssUUFBQUMsY0FBQyxLQUFBO1lBQ0FULFNBQVNBLE1BQU07QUFDZGxLLHFCQUFPQyxhQUFhZ0YsZ0JBQWdCdUYsUUFBUUQsT0FBTztZQUNwRDtVQUFBLEdBQ0EsS0FDRTNELFFBQVEsU0FBUyxDQUNwQixDQUNEO0FBQ0YwRCxjQUFJeEIsV0FBVzRELGlCQUFpQixFQUFFUCxzQkFDakMsWUFDQXhNLG1DQUFBK0ssUUFBQUMsY0FBQWhMLG1CQUFBK0ssUUFBQVcsVUFBQSxNQUNFTiwrQkFDQUMsZ0NBQ0FDLHFCQUFxQlYsUUFBUXhGLFNBQVMsQ0FBQyxDQUN6QyxDQUNEO1FBQ0QsT0FBTztBQUNOc0Y7UUFDRDtNQUNEO0FBQ0FySyxhQUFPQyxhQUFhc0gsZ0JBQWdCNkMsSUFBSUMsSUFBSTtBQUM1Q2Msc0JBQWdCZ0Isc0JBQ2ZmLHVCQUNBekwsbUNBQUErSyxRQUFBQyxjQUFDLE9BQUE7UUFBSXlCLElBQUc7TUFBQSxHQUErQixLQUNwQ3hGLFFBQVEsVUFBVSxHQUFFLEtBQUVBLFFBQVEsZ0JBQWdCLEdBQUUsS0FBRUEsUUFBUSwwQkFBMEIsR0FDdEZqSCxtQ0FBQStLLFFBQUFDLGNBQUMsS0FBQTtRQUFFOEIsTUFBQSxTQUFBM0gsT0FBZTJCLGNBQWN6RyxPQUFPQyxhQUFhbUYsU0FBUzdGLEtBQUssU0FBUyxDQUFDLENBQUM7TUFBQSxHQUFJLEtBQzlFa0gsY0FBY3pHLE9BQU9DLGFBQWFtRixTQUFTN0YsS0FBSyxTQUFTLENBQUMsQ0FDN0QsR0FBSSxLQUNGcUgsUUFBUSxXQUFXLEdBQUUsS0FBRUEsUUFBUSxRQUFRLENBQzFDLENBQ0Q7SUFDRDtBQUNBMEYscUNBQWlDO0VBQ2xDLFdBQVd0TSxPQUFPQyxhQUFhaUcscUJBQXFCLE1BQU07QUFFekRpRixvQkFBZ0JnQixzQkFDZmYsdUJBQ0F6TCxtQ0FBQStLLFFBQUFDLGNBQUMsT0FBQTtNQUFJeUIsSUFBRztJQUFBLEdBQ1B6TSxtQ0FBQStLLFFBQUFDLGNBQUMsS0FBQTtNQUNBNUIsT0FBTztRQUNORSxPQUFPO1FBQ1BvRCxRQUFRO01BQ1Q7TUFDQW5DLFNBQVNBLE1BQU07QUFDZGxLLGVBQU9DLGFBQWFxSixpQkFBaUIsdUJBQXVCO01BQzdEO0lBQUEsR0FDQSxLQUNFMUMsUUFBUSxhQUFhLENBQ3hCLENBQ0QsQ0FDRDtFQUNELFdBQVc1RyxPQUFPQyxhQUFhb0YsaUJBQWlCLE9BQU87QUFFdEQ4RixvQkFBZ0JnQixzQkFDZmYsdUJBQ0F6TCxtQ0FBQStLLFFBQUFDLGNBQUMsT0FBQTtNQUFJeUIsSUFBRztJQUFBLEdBQ1B6TSxtQ0FBQStLLFFBQUFDLGNBQUMsS0FBQTtNQUNBNUIsT0FBTztRQUNORSxPQUFPO1FBQ1BvRCxRQUFRO01BQ1Q7TUFDQW5DLFNBQVNBLE1BQU07QUFDZGxLLGVBQU9DLGFBQWFxSixpQkFBaUIsd0JBQXdCO01BQzlEO0lBQUEsR0FDQSxLQUNFMUMsUUFBUSxXQUFXLENBQ3RCLENBQ0QsQ0FDRDtFQUNELE9BQU87QUFDTnVFLG9CQUFnQmdCLHNCQUNmZix1QkFDQXpMLG1DQUFBK0ssUUFBQUMsY0FBQyxPQUFBO01BQUl5QixJQUFHO0lBQUEsR0FDUHpNLG1DQUFBK0ssUUFBQUMsY0FBQyxLQUFBO01BQ0E1QixPQUFPO1FBQ05FLE9BQU87UUFDUG9ELFFBQVE7TUFDVDtNQUNBbkMsU0FBU0EsTUFBTTtBQUNkbEssZUFBT0MsYUFBYXFKLGlCQUFpQix5QkFBeUI7TUFDL0Q7SUFBQSxHQUNBLEtBQ0UxQyxRQUFRLGVBQWUsQ0FDMUIsQ0FDRCxDQUNEO0VBQ0Q7QUFDQSxNQUFJcEUsR0FBR3hELE9BQU95RCxJQUFJLE1BQU0sTUFBTSxXQUFXO0FBQ3hDLFVBQU13SyxRQUFRakQsRUFBRSxNQUFNO0FBQ3RCaUQsVUFDRTFOLEtBQUssdUZBQXVGLEVBQzVGMk4sWUFBWSxXQUFZO0FBQ3hCLFlBQU1DLFFBQVFuRCxFQUFFLElBQUk7QUFDcEIsYUFBT0EsRUFBRSxXQUFXLEVBQUVvRCxTQUFTLGlCQUFpQixFQUFFQyxLQUFLLE1BQU1GLE1BQU1FLEtBQUssSUFBSSxDQUFDLEVBQUVDLEtBQUtILE1BQU1HLEtBQUssQ0FBQztJQUNqRyxDQUFDO0VBQ0g7QUFDQSxNQUNDLENBQUMsVUFBVSxlQUFlLFFBQVEsRUFBRWpPLFNBQVNtRCxHQUFHeEQsT0FBT3lELElBQUksTUFBTSxDQUFDLEtBQ2xFZ0QsU0FBU2tELGNBQWMsZ0JBQWdCLEdBQ3RDO0FBQ0QsVUFBTXNFLFFBQVFqRCxFQUFFLE1BQU07QUFDdEJpRCxVQUNFMU4sS0FBSyx1RkFBdUYsRUFDNUYyTixZQUFZLFdBQVk7QUFDeEIsWUFBTUMsUUFBUW5ELEVBQUUsSUFBSTtBQUNwQixhQUFPQSxFQUFFLE1BQU0sRUFBRXFELEtBQUssTUFBTUYsTUFBTUUsS0FBSyxJQUFJLENBQUMsRUFBRUMsS0FBS0gsTUFBTUcsS0FBSyxDQUFDO0lBQ2hFLENBQUM7RUFDSDtBQUNELEdBQUc7IiwKICAibmFtZXMiOiBbIlBhcmVfc3RyIiwgInN0ciIsICJsZWZ0IiwgImRlbGltIiwgInJpZ2h0IiwgImNvbnN0cnVjdG9yIiwgInBhcmVfc3RyaW5nIiwgImNvbmZpZyIsICJTdHJpbmciLCAibGVuZ3RoIiwgInRlc3QiLCAic2xpY2UiLCAiaW5jbHVkZXMiLCAiU3ludGF4RXJyb3IiLCAiZmluZCIsICJrZXkiLCAiX3RoaXMkc3RyJHNwbGl0JCIsICJzcGxpdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImVhc3lfYXJjaGl2ZV9sYW5nIiwgIndpbmRvdyIsICJlYXN5X2FyY2hpdmUiLCAibGFuZyIsICJkZWxldGUiLCAibG9jYWxpemUiLCAiZW4iLCAiYXJjaGl2ZSIsICJzdXBwb3J0cyIsICJvdGhlcnNfcGFnZSIsICJ0b19lbmFibGUiLCAiZW5hYmxlX29uX2dlbmVyaWNfcGFnZSIsICJwbGVhc2VfZW5hYmxlIiwgInBsZWFzZV9lbmFibGVfZWxhYm9yYXRlIiwgImxlZnRfcGFyX3NwbGl0IiwgInpoIiwgInJpZ2h0X3BhciIsICJwZXJpb2QiLCAiYXJjaGl2ZV9wYXRoX2NvbG9uX3NwbGl0IiwgImxvYWRpbmdfc2VjdGlvbl9pIiwgImRlbGV0aW5nX3NlY3Rpb25faSIsICJkb25lX3NlY3Rpb25faSIsICJkb25lX2RlbGV0aW5nX3NlY3Rpb25faSIsICJiZWluZ19hcmNoaXZlZCIsICJiZWluZ19kZWxldGVkIiwgImFscmVhZHlfYXJjaGl2ZWQiLCAiYWxyZWFkeV9kZWxldGVkIiwgIm90aGVyc190YWxrX2VsYWJvcmF0ZSIsICJwYWdlX25vdF9zdXBwb3J0ZWQiLCAicGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZSIsICJwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlIiwgInByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZSIsICJhcmNoaXZlX3N1bW1hcnkiLCAiZGVsZXRlX3N1bW1hcnkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJlYXN5QXJjaGl2ZSIsICJfd2luZG93JGVhc3lfYXJjaGl2ZSIsICJfd2luZG93JGVhc3lfYXJjaGl2ZSQiLCAiX3dpbmRvdyRlYXN5X2FyY2hpdmUkMiIsICJfd2luZG93JGVhc3lfYXJjaGl2ZSQzIiwgIm13IiwgImdldCIsICJleHBvc2UiLCAiYXN5bmNQb3N0IiwgInBhcmFtIiwgImNhbGxiYWNrIiwgImFwaSIsICJpbml0TXdBcGkiLCAicG9zdFdpdGhUb2tlbiIsICJ0aGVuIiwgImdldFBhZ2UiLCAidGl0bGUiLCAiYWN0aW9uIiwgInByb3AiLCAicnZwcm9wIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRpdGxlcyIsICJnZXRQYWdlU2VjdGlvbiIsICJzZWN0aW9uIiwgInJ2c2VjdGlvbiIsICJwaWNrUGFnZUNvbnRlbnQiLCAiZGF0YSIsICJxdWVyeSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAiY29udGVudCIsICJ0ZWxsUGFnZUV4aXN0IiwgIm1pc3NpbmciLCAiZWRpdCIsICJ0ZXh0IiwgInN1bW1hcnkiLCAiZWRpdEFwcGVuZCIsICJwYWdlIiwgImFkZGVkX2NvbnRlbnQiLCAib3JpZ2luYWxfY29udGVudCIsICJhcmNoaXZlU2VjdGlvbiIsICJ0YXJnZXRUaXRsZSIsICJjb25jYXQiLCAidG9TdHJpbmciLCAiZGVsZXRlU2VjdGlvbiIsICJhcmNoaXZlX3NlY3Rpb24iLCAiZGVsZXRlX3NlY3Rpb24iLCAic2V0dGluZ3Nfc3RyaW5nIiwgInNldHRpbmdzIiwgIm15X3VzZXJfdGFsayIsICJuZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXgiLCAiZGlzX3N1cHBvcnRfdGhlc2VfcGFnZXNfcmVnZXgiLCAic2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAic2V0dGluZ3Nfc3BhbiIsICJpbm5lckhUTUwiLCAib25fdXNlcl90YWxrIiwgInBhZ2VfbmFtZSIsICJqb2luIiwgInVzZXJfbmFtZSIsICJoYXNfdGVtcGxhdGUiLCAib3RoZXJzX3VzZXJfdGFsayIsICJvbl9hcnRpY2xlIiwgIm9uX2hpc3RfdmVyc2lvbiIsICJhcmNfc3VtIiwgInVzZXJfY3VzdG9tX2FyY2hpdmVfc3VtbWFyeSIsICJkZWxfc3VtIiwgInVzZXJfY3VzdG9tX2RlbGV0ZV9zdW1tYXJ5IiwgInNhbml0aXplX2h0bWwiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAibWVzc2FnZSIsICJ0YWciLCAicGFyYV9saXN0IiwgImhhc191bmZ1bGZpbGxlZF9wYXJhIiwgIl9pIiwgInNlYXJjaCIsICJub21pbmFsX3NlY3Rpb25zIiwgImNvdW50IiwgImFyciIsICJBcnJheSIsICJmcm9tIiwgInNlY3Rpb25fY291bnQiLCAiYWN0dWFsX3NlY3Rpb24iLCAibm9taW5hbF9zZWN0aW9uX251bWJlciIsICJsZXNzIiwgInJlcG9ydF9kb25lbmVzc191aSIsICJzZWN0aW9uX251bWJlciIsICJkb25lbmVzc190eXBlIiwgInRvIiwgIm9uZ29pbmdfb3JfZG9uZSIsICJ0YWdfZGluZyIsICJ0YWdfc2VjdGlvbiIsICJkaW5nX3R5cGUiLCAiZGluZ19hdXRvaGlkZSIsICJhY3Rpb25zIiwgImRpbmciLCAidG9hc3RpZnkiLCAiY2xvc2UiLCAiZHVyYXRpb24iLCAic2VjdGlvbl9saW5rIiwgIm5vZGUiLCAicXVlcnlTZWxlY3RvciIsICJwbm9kZSIsICJwYXJlbnROb2RlIiwgImNoaWxkTm9kZXMiLCAic3R5bGUiLCAiZGlzcGxheSIsICJjb2xvciIsICJkZWxldGVfc2VjdGlvbl9jb3JlIiwgIl9ub21pbmFsIiwgImFjdHVhbF9zZWN0aW9uX251bWJlciIsICJhcmNoaXZlX3NlY3Rpb25fY29yZSIsICJlbGFib3JhdGVfbm90aWNlIiwgIm5vdGljZV90YWdfbmFtZSIsICJub3RpY2VfdGFnX2RpY3Rpb25hcnkiLCAibm90aWNlX3NldCIsICJudGFnIiwgIm50eXBlIiwgIm50dGwiLCAibnBlcnNpc3QiLCAibnN1YnN0IiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiJCIsICJhcHBlbmQiLCAib25DbGljayIsICJoaWRlVG9hc3QiLCAiaSIsICJqIiwgImVsZSIsICJub21pbmFsIiwgImFjdHVhbCIsICJwaXBlX2h0bWwiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzIiwgInNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9pbmhpYml0IiwgInNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaW5oaWJpdCIsICJzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaHRtbCIsICJzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2h0bWwiLCAic2VjdGlvbl9pZF9zcGFuX2h0bWwiLCAib3JkZXJfbm8iLCAiZm9vdGVyX2luZm9fZWxlIiwgInBvc2l0aW9uX29mX2luc2VydGlvbiIsICJGcmFnbWVudCIsICJpc19pbl9ibGFja2xpc3QiLCAiYmxhY2tsaXN0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCAiaWQiLCAiY3Vyc29yIiwgIm5vcm1hbF9mdW5jdGlvbl9pbmplY3RfaW50ZXJmYWNlIiwgImVkaXRTZWN0aW9uQ29sbGVjdGlvbiIsICJ2ZSIsICJocmVmIiwgImNoaWxkX25vZGVfbnVtYmVyIiwgInRhZ05hbWUiLCAidG9Mb3dlckNhc2UiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgIk51bWJlciIsICJwYXJzZUludCIsICJhZnRlciIsICIkYm9keSIsICJyZXBsYWNlV2l0aCIsICIkdGhpcyIsICJhZGRDbGFzcyIsICJhdHRyIiwgImh0bWwiXQp9Cg==
