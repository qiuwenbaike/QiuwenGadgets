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
          section_delete_interface_html = section_delete_interface_inhibit ? "" : pipe_html.after(/* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
            onClick: () => {
              window.easy_archive.delete_section(actual, nominal);
            }
          }, message("delete")));
          section_archive_interface_html = section_archive_interface_inhibit ? "" : pipe_html.after(/* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
            onClick: () => {
              window.easy_archive.archive_section(actual, nominal);
            }
          }, message("archive")));
          ele.childNodes[child_node_number].insertAdjacentElement("afterend", /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, section_delete_interface_html, section_archive_interface_html, section_id_span_html(nominal.toString())));
        } else {
          j++;
        }
      }
      window.easy_archive.section_count = i - j + 1;
      footer_info_ele.insertAdjacentElement(position_of_insertion, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        id: "easy_archive_supports_notice"
      }, message("supports"), message("left_par_split"), message("archive_path_colon_split"), /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
        href: "/wiki/".concat(sanitize_html(window.easy_archive.settings.find("arc-loc")))
      }, sanitize_html(window.easy_archive.settings.find("arc-loc"))), message("right_par"), message("period")));
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
    }, message("others_page"))));
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
    }, message("to_enable"))));
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
    }, message("please_enable"))));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvcGFyZV9zdHIudHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLmpzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9pMThuLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBtaW5pZmllZCBjb2RlIGRlcGVuZGVuY3kgZnVuY3Rpb25zXG5jbGFzcyBQYXJlX3N0ciB7XG5cdHN0cjogc3RyaW5nO1xuXHRsZWZ0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGRlbGltOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdHJpZ2h0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0Y29uc3RydWN0b3IocGFyZV9zdHJpbmc6IHN0cmluZywgY29uZmlnOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuXHRcdHRoaXMuc3RyID0gcGFyZV9zdHJpbmc7XG5cdFx0dGhpcy5sZWZ0ID0gJygnO1xuXHRcdHRoaXMuZGVsaW0gPSAnOic7XG5cdFx0dGhpcy5yaWdodCA9ICcpJztcblx0XHRpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdGNvbmZpZyA9IFN0cmluZyhjb25maWcpO1xuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHRwYXJlX3N0cmluZy5sZW5ndGggPiA2ICYmXG5cdFx0XHQvWyMlQF1bU3NdW0VlXVtUdF0vLnRlc3QocGFyZV9zdHJpbmcuc2xpY2UoMCwgNCkpICYmXG5cdFx0XHQhY29uZmlnLmluY2x1ZGVzKCdpZ25vcmUtc2V0Jylcblx0XHQpIHtcblx0XHRcdFssICwgLCAsIHRoaXMubGVmdCwgdGhpcy5kZWxpbSwgdGhpcy5yaWdodF0gPSBwYXJlX3N0cmluZztcblx0XHRcdGlmICh0aGlzLmxlZnQgPT09IHRoaXMucmlnaHQgfHwgdGhpcy5sZWZ0ID09PSB0aGlzLmRlbGltIHx8IHRoaXMucmlnaHQgPT09IHRoaXMuZGVsaW0pIHtcblx0XHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKFwiUG91bmQgc2V0IHN0YXRlbWVudCBoYXMgcmVwZXRpdGl2ZSBjaGFyYWN0ZXJzLiBFLmcuICcjc2V0fDp8JyBpcyBpbGxlZ2FsLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmaW5kKGtleTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG5cdFx0a2V5ID0gdGhpcy5sZWZ0ICsga2V5ICsgdGhpcy5kZWxpbTtcblx0XHRpZiAoIXRoaXMuc3RyLmluY2x1ZGVzKGtleSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5zdHIuc3BsaXQoa2V5KVsxXT8uc3BsaXQodGhpcy5yaWdodCBhcyBzdHJpbmcpWzBdO1xuXHR9XG59XG5cbmV4cG9ydCB7UGFyZV9zdHJ9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbCAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudCAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7UGFyZV9zdHJ9IGZyb20gJy4vbW9kdWxlcy9wYXJlX3N0cic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2Vhc3lfYXJjaGl2ZV9sYW5nfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG4oZnVuY3Rpb24gZWFzeUFyY2hpdmUoKSB7XG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpIDwgMCB8fCBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykgPT09ICdRaXV3ZW466aaW6aG1Jykge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoIXdpbmRvdy5lYXN5X2FyY2hpdmUpIHtcblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlID0ge307XG5cdH1cblx0Ly8gY29tbW9uIHJlcG8uXG5cdGNvbnN0IGV4cG9zZSA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgYXN5bmNQb3N0ID0gKHBhcmFtLCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0Y29uc3QgYXBpID0gaW5pdE13QXBpKCdFYXN5QWNoaXZlLzMuMCcpO1xuXHRcdFx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtKS50aGVuKGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IGdldFBhZ2UgPSAodGl0bGUsIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRjb25zdCBwYXJhbSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiBbJ3JldmlzaW9ucyddLFxuXHRcdFx0XHRydnByb3A6IFsnaWRzJywgJ2ZsYWdzJywgJ3RpbWVzdGFtcCcsICd1c2VyJywgJ3VzZXJpZCcsICdzaXplJywgJ2NvbW1lbnQnLCAndGFncycsICdjb250ZW50J10sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0XHR9O1xuXHRcdFx0YXN5bmNQb3N0KHBhcmFtLCBjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRjb25zdCBnZXRQYWdlU2VjdGlvbiA9ICh0aXRsZSwgc2VjdGlvbiwgY2FsbGJhY2spID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHRcdHJ2cHJvcDogWydjb250ZW50J10sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0XHRcdHJ2c2VjdGlvbjogc2VjdGlvbixcblx0XHRcdH07XG5cdFx0XHRhc3luY1Bvc3QocGFyYW0sIGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IHBpY2tQYWdlQ29udGVudCA9IChkYXRhKSA9PiB7XG5cdFx0XHRpZiAoZGF0YS5xdWVyeSAmJiBkYXRhLnF1ZXJ5LnBhZ2VzICYmIGRhdGEucXVlcnkucGFnZXNbMF0gJiYgZGF0YS5xdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0pIHtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXG5cdFx0XHRcdHJldHVybiBkYXRhLnF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5jb250ZW50O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0Y29uc3QgdGVsbFBhZ2VFeGlzdCA9IChkYXRhKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIGRhdGEgIT09ICdvYmplY3QnIHx8ICFkYXRhLnF1ZXJ5IHx8ICFkYXRhLnF1ZXJ5LnBhZ2VzIHx8IGRhdGEucXVlcnkucGFnZXNbMF0ubWlzc2luZykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdGNvbnN0IGVkaXQgPSAodGl0bGUsIHNlY3Rpb24sIHRleHQsIHN1bW1hcnksIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRjb25zdCBwYXJhbSA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHR0ZXh0LFxuXHRcdFx0fTtcblx0XHRcdGlmIChzZWN0aW9uKSB7XG5cdFx0XHRcdHBhcmFtLnNlY3Rpb24gPSBzZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0YXN5bmNQb3N0KHBhcmFtLCBjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRjb25zdCBlZGl0QXBwZW5kID0gKHBhZ2UsIGFkZGVkX2NvbnRlbnQsIHN1bW1hcnksIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRnZXRQYWdlKHBhZ2UsIChkYXRhKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsX2NvbnRlbnQgPSB0ZWxsUGFnZUV4aXN0KGRhdGEpID09PSBmYWxzZSA/ICcnIDogcGlja1BhZ2VDb250ZW50KGRhdGEpO1xuXHRcdFx0XHRlZGl0KHBhZ2UsIG51bGwsIFN0cmluZyhvcmlnaW5hbF9jb250ZW50KSArIGFkZGVkX2NvbnRlbnQsIHN1bW1hcnksIGNhbGxiYWNrKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0Y29uc3QgYXJjaGl2ZVNlY3Rpb24gPSAodGl0bGUsIHNlY3Rpb24sIHRhcmdldFRpdGxlLCBjYWxsYmFjaywgc3VtbWFyeSkgPT4ge1xuXHRcdFx0Z2V0UGFnZVNlY3Rpb24odGl0bGUsIHNlY3Rpb24sIChkYXRhKSA9PiB7XG5cdFx0XHRcdGVkaXRBcHBlbmQodGFyZ2V0VGl0bGUsIGBcXG5cXG4ke3BpY2tQYWdlQ29udGVudChkYXRhKX1gLCBzdW1tYXJ5KTtcblx0XHRcdFx0ZWRpdCh0aXRsZSwgc2VjdGlvbi50b1N0cmluZygpLCAnJywgc3VtbWFyeSwgY2FsbGJhY2spO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRjb25zdCBkZWxldGVTZWN0aW9uID0gKHRpdGxlLCBzZWN0aW9uLCBjYWxsYmFjaywgc3VtbWFyeSkgPT4ge1xuXHRcdFx0ZWRpdCh0aXRsZSwgc2VjdGlvbi50b1N0cmluZygpLCAnJywgc3VtbWFyeSwgY2FsbGJhY2spO1xuXHRcdH07XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFyY2hpdmVfc2VjdGlvbjogYXJjaGl2ZVNlY3Rpb24sXG5cdFx0XHRkZWxldGVfc2VjdGlvbjogZGVsZXRlU2VjdGlvbixcblx0XHR9O1xuXHR9KSgpO1xuXHQvLyBkZWZhdWx0IHNldHRpbmdzOlxuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzX3N0cmluZyA9XG5cdFx0JyNzZXQlfD9cdFx0XHRcdFx0XHRcdFx0XHRcXG4nICtcblx0XHQnZGlzcGxheSBzZWN0aW9uIGRlbGV0ZSBsaW5rXHQlc2VjLWRlbHwxP1x0XFxuJyArXG5cdFx0J2Rpc3BsYXkgc2VjdGlvbiBhcmNoaXZlIGxpbmVcdCVzZWMtYXJjfDE/XHRcXG4nICtcblx0XHQnZGlzcGxheSBjb250cm9sIGJhciBhdCB0b3BcdCV0b3AtYmFyfDA/XHRcXG4nICtcblx0XHQnYXJjaGl2ZSBsb2NhdGlvblx0XHRcdFx0JWFyYy1sb2N8P1x0XFxuJyArXG5cdFx0J3N1YnNlY3Rpb24gZWZmZWN0aXZlbmVzc1x0XHQlc3ViLXNlY3wyP1x0XFxuJyArXG5cdFx0J2NvbmZpcm0gYWN0aW9uXHRcdFx0XHQlY29uZmlybXwwP1x0XFxuJyArXG5cdFx0J2lzIHRoaXMgZGF0YSBpbml0aWFsaXplZFx0XHQlZGF0YS1pbml0fDA/IFxcbic7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MgPSBuZXcgUGFyZV9zdHIod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5nc19zdHJpbmcpO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm15X3VzZXJfdGFsayA9IG51bGw7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUubmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4ID8/PSBbXTtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5kaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCA9IFtcblx0XHQvXkZpbGU6LiokLyxcblx0XHQvXk1lZGlhV2lraTouKiQvLFxuXHRcdC9eTW9kdWxlOi4qJC8sXG5cdFx0L15DYXRlZ29yeTouKiQvLFxuXHRcdC9eVGVtcGxhdGU6LiokLyxcblx0XHQvXlNwZWNpYWw6LiokLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmNzcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzb24kLyxcblx0XTtcblx0Y29uc3Qgc2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVhc3lfYXJjaGl2ZV9kYXRhX3BvaW50X2NvbGxlY3Rpb24nKTtcblx0Y29uc3QgW3NldHRpbmdzX3NwYW5dID0gc2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uO1xuXHRjb25zdCBzZXR0aW5ncyA9IHNldHRpbmdzX3NwYW4gPyBuZXcgUGFyZV9zdHIoc2V0dGluZ3Nfc3Bhbi5pbm5lckhUTUwpIDogbmV3IFBhcmVfc3RyKCcnKTtcblx0aWYgKHNldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMScpIHtcblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzX3N0cmluZyA9IHNldHRpbmdzX3NwYW4uaW5uZXJIVE1MO1xuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MgPSBuZXcgUGFyZV9zdHIod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5nc19zdHJpbmcpO1xuXHR9XG5cdC8vIGlkZW50aWZ5IGlmIEVhc3kgQXJjaGl2ZSBjYW4gYmUgdXNlZCBvbiB0aGUgcGFnZSAtIGNvbXBhdGliaWxpdHlcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5vbl91c2VyX3RhbGsgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSAzO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm15X3VzZXJfdGFsayA9XG5cdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5vbl91c2VyX3RhbGsgJiZcblx0XHQoKCkgPT4ge1xuXHRcdFx0bGV0IHBhZ2VfbmFtZSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5zcGxpdCgnOicpO1xuXHRcdFx0cGFnZV9uYW1lWzBdID0gJyc7XG5cdFx0XHRwYWdlX25hbWUgPSBwYWdlX25hbWUuam9pbignJyk7XG5cdFx0XHRbcGFnZV9uYW1lXSA9IHBhZ2VfbmFtZS5zcGxpdCgnLycpO1xuXHRcdFx0Y29uc3QgdXNlcl9uYW1lID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dXNlcl9uYW1lLnNwbGl0KCdfJykuam9pbignJykuc3BsaXQoJyAnKS5qb2luKCcnKSA9PT0gcGFnZV9uYW1lLnNwbGl0KCdfJykuam9pbignJykuc3BsaXQoJyAnKS5qb2luKCcnKVxuXHRcdFx0KTtcblx0XHR9KSgpO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLmhhc190ZW1wbGF0ZSA9IHNldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMSc7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUub3RoZXJzX3VzZXJfdGFsayA9XG5cdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5teV91c2VyX3RhbGsgPT09IGZhbHNlICYmIHdpbmRvdy5lYXN5X2FyY2hpdmUub25fdXNlcl90YWxrID09PSB0cnVlO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX2FydGljbGUgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSAwO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX2hpc3RfdmVyc2lvbiA9IG13LmNvbmZpZy5nZXQoJ3dnQ3VyUmV2aXNpb25JZCcpIC0gbXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJykgIT09IDA7XG5cdGVhc3lfYXJjaGl2ZV9sYW5nKCk7XG5cdGNvbnN0IGFyY19zdW0gPSB3aW5kb3cuZWFzeV9hcmNoaXZlLnVzZXJfY3VzdG9tX2FyY2hpdmVfc3VtbWFyeSA/PyBudWxsO1xuXHRjb25zdCBkZWxfc3VtID0gd2luZG93LmVhc3lfYXJjaGl2ZS51c2VyX2N1c3RvbV9kZWxldGVfc3VtbWFyeSA/PyBudWxsO1xuXHRjb25zdCBzYW5pdGl6ZV9odG1sID0gKHN0cmluZykgPT5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cblx0XHRzdHJpbmdcblx0XHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0XHQucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jylcblx0XHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cdC8vIG11bHRpIGxhbmd1YWdlIHNlbGVjdG9yIGRlZmluaXRpb25cblx0Y29uc3QgbWVzc2FnZSA9ICh0YWcsIHBhcmFfbGlzdCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgY29udGVudCA9IHdpbmRvdy5lYXN5X2FyY2hpdmUubGFuZ1t0YWddO1xuXHRcdFx0Zm9yIChsZXQgaGFzX3VuZnVsZmlsbGVkX3BhcmEgPSB0cnVlLCBfaSA9IDA7IGhhc191bmZ1bGZpbGxlZF9wYXJhOyBfaSsrKSB7XG5cdFx0XHRcdGNvbnN0IHNlYXJjaCA9IGAkJHtfaSArIDF9YDtcblx0XHRcdFx0aWYgKGNvbnRlbnQuaW5jbHVkZXMoc2VhcmNoKSkge1xuXHRcdFx0XHRcdGNvbnRlbnQgPSBwYXJhX2xpc3RbX2ldXG5cdFx0XHRcdFx0XHQ/IGNvbnRlbnQuc3BsaXQoc2VhcmNoKS5qb2luKHBhcmFfbGlzdFtfaV0pXG5cdFx0XHRcdFx0XHQ6IGNvbnRlbnQuc3BsaXQoc2VhcmNoKS5qb2luKCcnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRoYXNfdW5mdWxmaWxsZWRfcGFyYSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnKCEpIHVuZGVmaW5lZCBsYW5ndWFnZSBjb250ZW50Jztcblx0XHR9XG5cdH07XG5cdGNvbnN0IG5vbWluYWxfc2VjdGlvbnMgPSAoKGNvdW50KSA9PiB7XG5cdFx0Y29uc3QgYXJyID0gQXJyYXkuZnJvbSh7XG5cdFx0XHRsZW5ndGg6IGNvdW50LFxuXHRcdH0pO1xuXHRcdGZvciAobGV0IF9pID0gMDsgX2kgPCBjb3VudDsgX2krKykge1xuXHRcdFx0YXJyW19pXSA9IGZhbHNlO1xuXHRcdH1cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cblx0XHRyZXR1cm4gYXJyO1xuXHR9KSh3aW5kb3cuZWFzeV9hcmNoaXZlLnNlY3Rpb25fY291bnQpO1xuXHRjb25zdCBhY3R1YWxfc2VjdGlvbiA9IChub21pbmFsX3NlY3Rpb25fbnVtYmVyKSA9PiB7XG5cdFx0bGV0IGxlc3MgPSAwO1xuXHRcdGZvciAobGV0IF9pID0gMDsgX2kgPCBub21pbmFsX3NlY3Rpb25fbnVtYmVyOyBfaSsrKSB7XG5cdFx0XHRpZiAobm9taW5hbF9zZWN0aW9uc1tfaV0gPT09IHRydWUpIHtcblx0XHRcdFx0bGVzcysrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbm9taW5hbF9zZWN0aW9uX251bWJlciAtIGxlc3M7XG5cdH07XG5cdC8vIC4uLiBpbnRlcmZhY2UgZG9uZVxuXHQvLyBhcmNoaXZpbmcgbG9naWMgaW5qZWN0aW9uXG5cdGNvbnN0IHJlcG9ydF9kb25lbmVzc191aSA9IChzZWN0aW9uX251bWJlciwgZG9uZW5lc3NfdHlwZSwgdG8sIG9uZ29pbmdfb3JfZG9uZSkgPT4ge1xuXHRcdGxldCB0YWdfZGluZztcblx0XHRsZXQgdGFnX3NlY3Rpb247XG5cdFx0bGV0IGRpbmdfdHlwZTtcblx0XHRsZXQgZGluZ19hdXRvaGlkZTtcblx0XHRpZiAob25nb2luZ19vcl9kb25lID09PSAnb25nb2luZycpIHtcblx0XHRcdGRpbmdfdHlwZSA9ICdpbmZvJztcblx0XHRcdGRpbmdfYXV0b2hpZGUgPSB0cnVlO1xuXHRcdFx0aWYgKGRvbmVuZXNzX3R5cGUgPT09ICdkZWxldGUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2RlbGV0aW5nX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2JlaW5nX2RlbGV0ZWQnO1xuXHRcdFx0fSBlbHNlIGlmIChkb25lbmVzc190eXBlID09PSAnYXJjaGl2ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnbG9hZGluZ19zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdiZWluZ19hcmNoaXZlZCc7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChvbmdvaW5nX29yX2RvbmUgPT09ICdkb25lJykge1xuXHRcdFx0ZGluZ190eXBlID0gJ3N1Y2Nlc3MnO1xuXHRcdFx0ZGluZ19hdXRvaGlkZSA9IGZhbHNlO1xuXHRcdFx0aWYgKGRvbmVuZXNzX3R5cGUgPT09ICdkZWxldGUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2RvbmVfZGVsZXRpbmdfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYWxyZWFkeV9kZWxldGVkJztcblx0XHRcdH0gZWxzZSBpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2FyY2hpdmUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2RvbmVfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYWxyZWFkeV9hcmNoaXZlZCc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IGFjdGlvbnMgPSB7XG5cdFx0XHRkaW5nOiAoKSA9PiB7XG5cdFx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IG1lc3NhZ2UodGFnX2RpbmcsIFtzZWN0aW9uX251bWJlci50b1N0cmluZygpLCB0b10pLFxuXHRcdFx0XHRcdFx0Y2xvc2U6ICFkaW5nX2F1dG9oaWRlLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IGRpbmdfYXV0b2hpZGUgPyAzMDAwIDogLTEsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRkaW5nX3R5cGVcblx0XHRcdFx0KTtcblx0XHRcdH0sXG5cdFx0XHRzZWN0aW9uX2xpbms6ICgpID0+IHtcblx0XHRcdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuLW9yZGVyLSR7c2VjdGlvbl9udW1iZXJ9YCk7XG5cdFx0XHRcdGNvbnN0IHBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRcdFx0XHRmb3IgKGxldCBfaSA9IDE7IF9pIDwgcG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggLSAyOyBfaSsrKSB7XG5cdFx0XHRcdFx0cG5vZGUuY2hpbGROb2Rlc1tfaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRub2RlLmlubmVySFRNTCA9IG1lc3NhZ2UodGFnX3NlY3Rpb24pO1xuXHRcdFx0XHRub2RlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblx0XHRcdFx0bm9kZS5zdHlsZS5jb2xvciA9ICdyZ2IoMCAwIDAvLjUpJztcblx0XHRcdH0sXG5cdFx0fTtcblx0XHRyZXR1cm4gYWN0aW9ucztcblx0fTtcblx0Y29uc3QgZGVsZXRlX3NlY3Rpb25fY29yZSA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCBhY3R1YWxfc2VjdGlvbl9udW1iZXIgPSBhY3R1YWxfc2VjdGlvbihzZWN0aW9uX251bWJlcik7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdvbmdvaW5nJykuZGluZygpO1xuXHRcdGV4cG9zZS5kZWxldGVfc2VjdGlvbihcblx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdGFjdHVhbF9zZWN0aW9uX251bWJlcixcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdkb25lJykuZGluZygpO1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ2RvbmUnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRcdFx0bm9taW5hbF9zZWN0aW9uc1tzZWN0aW9uX251bWJlcl0gPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGRlbF9zdW0gfHwgbWVzc2FnZSgnZGVsZXRlX3N1bW1hcnknKVxuXHRcdCk7XG5cdH07XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuZGVsZXRlX3NlY3Rpb24gPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdvbmdvaW5nJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0ZGVsZXRlX3NlY3Rpb25fY29yZShzZWN0aW9uX251bWJlciwgX25vbWluYWwpO1xuXHR9O1xuXHRjb25zdCBhcmNoaXZlX3NlY3Rpb25fY29yZSA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCBhY3R1YWxfc2VjdGlvbl9udW1iZXIgPSBhY3R1YWxfc2VjdGlvbihzZWN0aW9uX251bWJlcik7XG5cdFx0Y29uc3QgdG8gPSB3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKTtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdvbmdvaW5nJykuZGluZygpO1xuXHRcdGV4cG9zZS5hcmNoaXZlX3NlY3Rpb24oXG5cdFx0XHRtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHRhY3R1YWxfc2VjdGlvbl9udW1iZXIsXG5cdFx0XHR0byxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnZG9uZScpLmRpbmcoKTtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnZG9uZScpLnNlY3Rpb25fbGluaygpO1xuXHRcdFx0XHRub21pbmFsX3NlY3Rpb25zW3NlY3Rpb25fbnVtYmVyXSA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0YXJjX3N1bSB8fCBtZXNzYWdlKCdhcmNoaXZlX3N1bW1hcnknKVxuXHRcdCk7XG5cdH07XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuYXJjaGl2ZV9zZWN0aW9uID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdGNvbnN0IHRvID0gd2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJyk7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnb25nb2luZycpLnNlY3Rpb25fbGluaygpO1xuXHRcdGFyY2hpdmVfc2VjdGlvbl9jb3JlKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCk7XG5cdH07XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSA9IChub3RpY2VfdGFnX25hbWUpID0+IHtcblx0XHQvLyBhY3JvbnltIHNjaGVtZTogcmVmZXIgdG8gcXdlcnR5IGtleWJvYXJkIGxheW91dC4gKHA9OSlcblx0XHRjb25zdCBub3RpY2VfdGFnX2RpY3Rpb25hcnkgPSB7XG5cdFx0XHRwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZTogWydwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZSddLFxuXHRcdFx0b3RoZXJzX3RhbGtfZWxhYm9yYXRlOiBbJ290aGVyc190YWxrX2VsYWJvcmF0ZSddLFxuXHRcdFx0ZW5hYmxlX29uX2dlbmVyaWNfcGFnZTogWydlbmFibGVfb25fZ2VuZXJpY19wYWdlJ10sXG5cdFx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlOiBbXG5cdFx0XHRcdCdwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlJyxcblx0XHRcdFx0J3dhcm5pbmcnLFxuXHRcdFx0XHQnbG9uZycsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRbc2FuaXRpemVfaHRtbCh3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSldLFxuXHRcdFx0XSxcblx0XHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZTogW1xuXHRcdFx0XHQncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlJyxcblx0XHRcdFx0J3dhcm5pbmcnLFxuXHRcdFx0XHQnbG9uZycsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRbc2FuaXRpemVfaHRtbCh3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSldLFxuXHRcdFx0XSxcblx0XHRcdHBhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGU6IFsncGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZSddLFxuXHRcdH07XG5cdFx0Y29uc3Qgbm90aWNlX3NldCA9IG5vdGljZV90YWdfZGljdGlvbmFyeVtub3RpY2VfdGFnX25hbWVdIHx8IGZhbHNlO1xuXHRcdGlmIChub3RpY2Vfc2V0ICE9PSBmYWxzZSkge1xuXHRcdFx0Y29uc3QgW250YWcsIG50eXBlLCBudHRsLCBucGVyc2lzdCwgbnN1YnN0XSA9IG5vdGljZV9zZXQ7XG5cdFx0XHRjb25zdCB0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRub2RlOiAkKCc8c3Bhbj4nKS5hcHBlbmQobWVzc2FnZShudGFnLCBuc3Vic3QpKS5nZXQoMCksXG5cdFx0XHRcdFx0Y2xvc2U6IG50dGwgPT09ICdsb25nJyxcblx0XHRcdFx0XHRkdXJhdGlvbjogbnR0bCA9PT0gJ2xvbmcnID8gLTEgOiBudHRsLFxuXHRcdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChucGVyc2lzdCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG50eXBlXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0Ly8gcmVhbCBkZWFsIGhlcmVcblx0Ly8gaW50ZXJmYWNlIGluamVjdGlvbiAtIHByZXBhcmVcblx0bGV0IGkgPSAwO1xuXHRsZXQgaiA9IDA7XG5cdGxldCBlbGU7XG5cdGxldCBub21pbmFsO1xuXHRsZXQgYWN0dWFsO1xuXHRjb25zdCBwaXBlX2h0bWwgPSA8c3BhbiBjbGFzcz1cIm13LWVkaXRzZWN0aW9uLWRpdmlkZXJcIj4gJiMxMjQ7IDwvc3Bhbj47XG5cdGNvbnN0IHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9pbmhpYml0ID1cblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ3NlYy1kZWwnKSA9PT0gJzAnIHx8IHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnZGF0YS1pbml0JykgPT09ICcwJztcblx0Y29uc3Qgc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9pbmhpYml0ID1cblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ3NlYy1hcmMnKSA9PT0gJzAnIHx8IHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnZGF0YS1pbml0JykgPT09ICcwJztcblx0bGV0IHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9odG1sO1xuXHRsZXQgc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9odG1sO1xuXHRjb25zdCBzZWN0aW9uX2lkX3NwYW5faHRtbCA9IChvcmRlcl9ubykgPT4gKFxuXHRcdDxzcGFuXG5cdFx0XHRjbGFzcz17WydlYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuJywgYGVhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4tb3JkZXItJHtvcmRlcl9ub31gXX1cblx0XHRcdHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX1cblx0XHQ+XG5cdFx0XHRzZWN0aW9uXG5cdFx0PC9zcGFuPlxuXHQpO1xuXHRsZXQgZm9vdGVyX2luZm9fZWxlO1xuXHRsZXQgcG9zaXRpb25fb2ZfaW5zZXJ0aW9uO1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvb3Rlci1pbmZvJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2UtaW5mbycpKSB7XG5cdFx0Zm9vdGVyX2luZm9fZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvb3Rlci1pbmZvJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2UtaW5mbycpWzBdO1xuXHRcdHBvc2l0aW9uX29mX2luc2VydGlvbiA9ICdhZnRlcmJlZ2luJztcblx0fSBlbHNlIHtcblx0XHRmb290ZXJfaW5mb19lbGUgPSA8PjwvPjtcblx0XHRwb3NpdGlvbl9vZl9pbnNlcnRpb24gPSAnJztcblx0fVxuXHQvLyAuLi4gaW50ZXJmYWNlIGluamVjdGlvbiAtIGxvZ2ljXG5cdGNvbnN0IGlzX2luX2JsYWNrbGlzdCA9IChibGFja2xpc3QpID0+IHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYmxhY2tsaXN0KSB7XG5cdFx0XHRpZiAoZWxlbWVudC50ZXN0KG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0aWYgKHdpbmRvdy5lYXN5X2FyY2hpdmUub25fYXJ0aWNsZSB8fCB3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX2hpc3RfdmVyc2lvbikge1xuXHRcdC8vIGluc2VydCBubyBpbnRlcmZhY2Ugb24gYW4gYXJ0aWNsZSBwYWdlIG9yIGEgaGlzdG9yeSB2ZXJzaW9uLlxuXHR9IGVsc2UgaWYgKGlzX2luX2JsYWNrbGlzdCh3aW5kb3cuZWFzeV9hcmNoaXZlLm5ldmVyX2VuYWJsZV9vbl90aGVzZV9wYWdlc19yZWdleCkpIHtcblx0XHQvLyBpbnNlcnQgbm8gaW50ZXJmYWNlIGlmIHRoZSBwYWdlIG5hbWUgaXMgYmxhY2tsaXN0ZWQuXG5cdH0gZWxzZSBpZiAoaXNfaW5fYmxhY2tsaXN0KHdpbmRvdy5lYXN5X2FyY2hpdmUuZGlzX3N1cHBvcnRfdGhlc2VfcGFnZXNfcmVnZXgpKSB7XG5cdFx0Ly8gaW5zZXJ0IG5vdCBzdXBwb3J0ZWQgbm90aWNlIGlmIHRoZSBwYWdlIG5hbWUgaW5kaWNhdGVzIHRoYXQgaXQgaXMgbm90IHN1cHBvcnRlZC5cblx0XHRmb290ZXJfaW5mb19lbGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuXHRcdFx0cG9zaXRpb25fb2ZfaW5zZXJ0aW9uLFxuXHRcdFx0PGRpdiBpZD1cImVhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlXCI+XG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdGNvbG9yOiAnaW5oZXJpdCcsXG5cdFx0XHRcdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSgncGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZScpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7bWVzc2FnZSgncGFnZV9ub3Rfc3VwcG9ydGVkJyl9XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAobXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpID09PSB3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSkge1xuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSgncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlJyk7XG5cdH0gZWxzZSBpZiAod2luZG93LmVhc3lfYXJjaGl2ZS5oYXNfdGVtcGxhdGUgJiYgIXdpbmRvdy5lYXN5X2FyY2hpdmUub3RoZXJzX3VzZXJfdGFsaykge1xuXHRcdC8vIGFueSBwYWdlIHRoYXQgaGFzIHRlbXBsYXRlIHRoYXQncyBub3Qgb3RoZXJzJyB0YWxrIHBhZ2UuIGZ1bmN0aW9uIG5vcm1hbGx5LlxuXHRcdC8vICEhIHRoZSBhcmNoaXZlIGxvY2F0aW9uIGluIG1haW4gc3BhY2UgYW5kIG5lZWRzIGF0dGVudGlvbiAhIVxuXHRcdGlmICgvLis6LisvLnRlc3Qod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpICE9PSB0cnVlKSB7XG5cdFx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLmVsYWJvcmF0ZV9ub3RpY2UoJ3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UnKTtcblx0XHR9XG5cdFx0Y29uc3Qgbm9ybWFsX2Z1bmN0aW9uX2luamVjdF9pbnRlcmZhY2UgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBlZGl0U2VjdGlvbkNvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXctZWRpdHNlY3Rpb24nKTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBlZGl0U2VjdGlvbkNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZWxlID0gZWRpdFNlY3Rpb25Db2xsZWN0aW9uW2ldO1xuXHRcdFx0XHRjb25zdCB2ZSA9IC9bJj9ddmVhY3Rpb249ZWRpdC8udGVzdChlbGUuY2hpbGROb2Rlc1sxXS5ocmVmKTtcblx0XHRcdFx0Y29uc3QgY2hpbGRfbm9kZV9udW1iZXIgPSB2ZSA/IDMgOiAxO1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0ZWxlLnBhcmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaDInICYmXG5cdFx0XHRcdFx0ZWxlLnBhcmVudE5vZGUuaWQgIT09ICdmaXJzdEhlYWRpbmcnICYmXG5cdFx0XHRcdFx0ZGVjb2RlVVJJQ29tcG9uZW50KGVsZS5jaGlsZE5vZGVzW2NoaWxkX25vZGVfbnVtYmVyXS5ocmVmLnNwbGl0KC9bJj9ddGl0bGU9LylbMV0uc3BsaXQoJyYnKVswXSkgPT09XG5cdFx0XHRcdFx0XHRtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0YWN0dWFsID0gTnVtYmVyLnBhcnNlSW50KFxuXHRcdFx0XHRcdFx0ZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmhyZWYuc3BsaXQoL1smP11zZWN0aW9uPS8pWzFdLnNwbGl0KCcmJylbMF0sXG5cdFx0XHRcdFx0XHQxMFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0bm9taW5hbCA9IGkgLSBqICsgMTtcblx0XHRcdFx0XHRzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaHRtbCA9IHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9pbmhpYml0XG5cdFx0XHRcdFx0XHQ/ICcnXG5cdFx0XHRcdFx0XHQ6IHBpcGVfaHRtbC5hZnRlcihcblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLmRlbGV0ZV9zZWN0aW9uKGFjdHVhbCwgbm9taW5hbCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHttZXNzYWdlKCdkZWxldGUnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0c2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9odG1sID0gc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9pbmhpYml0XG5cdFx0XHRcdFx0XHQ/ICcnXG5cdFx0XHRcdFx0XHQ6IHBpcGVfaHRtbC5hZnRlcihcblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLmFyY2hpdmVfc2VjdGlvbihhY3R1YWwsIG5vbWluYWwpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7bWVzc2FnZSgnYXJjaGl2ZScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRlbGUuY2hpbGROb2Rlc1tjaGlsZF9ub2RlX251bWJlcl0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2FmdGVyZW5kJyxcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdHtzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaHRtbH1cblx0XHRcdFx0XHRcdFx0e3NlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaHRtbH1cblx0XHRcdFx0XHRcdFx0e3NlY3Rpb25faWRfc3Bhbl9odG1sKG5vbWluYWwudG9TdHJpbmcoKSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGorKztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5zZWN0aW9uX2NvdW50ID0gaSAtIGogKyAxO1xuXHRcdFx0Zm9vdGVyX2luZm9fZWxlLmluc2VydEFkamFjZW50RWxlbWVudChcblx0XHRcdFx0cG9zaXRpb25fb2ZfaW5zZXJ0aW9uLFxuXHRcdFx0XHQ8ZGl2IGlkPVwiZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZVwiPlxuXHRcdFx0XHRcdHttZXNzYWdlKCdzdXBwb3J0cycpfVxuXHRcdFx0XHRcdHttZXNzYWdlKCdsZWZ0X3Bhcl9zcGxpdCcpfVxuXHRcdFx0XHRcdHttZXNzYWdlKCdhcmNoaXZlX3BhdGhfY29sb25fc3BsaXQnKX1cblx0XHRcdFx0XHQ8YSBocmVmPXtgL3dpa2kvJHtzYW5pdGl6ZV9odG1sKHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKX1gfT5cblx0XHRcdFx0XHRcdHtzYW5pdGl6ZV9odG1sKHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKX1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0e21lc3NhZ2UoJ3JpZ2h0X3BhcicpfVxuXHRcdFx0XHRcdHttZXNzYWdlKCdwZXJpb2QnKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cdFx0bm9ybWFsX2Z1bmN0aW9uX2luamVjdF9pbnRlcmZhY2UoKTtcblx0fSBlbHNlIGlmICh3aW5kb3cuZWFzeV9hcmNoaXZlLm90aGVyc191c2VyX3RhbGsgPT09IHRydWUpIHtcblx0XHQvLyBvdGhlcnMgdXNlciB0YWxrLlxuXHRcdGZvb3Rlcl9pbmZvX2VsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXG5cdFx0XHRwb3NpdGlvbl9vZl9pbnNlcnRpb24sXG5cdFx0XHQ8ZGl2IGlkPVwiZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2VcIj5cblx0XHRcdFx0PGFcblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Y29sb3I6ICdpbmhlcml0Jyxcblx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5lbGFib3JhdGVfbm90aWNlKCdvdGhlcnNfdGFsa19lbGFib3JhdGUnKTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e21lc3NhZ2UoJ290aGVyc19wYWdlJyl9XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAod2luZG93LmVhc3lfYXJjaGl2ZS5teV91c2VyX3RhbGsgPT09IGZhbHNlKSB7XG5cdFx0Ly8gYSBnZW5lcmljIHBhZ2UgdGhhdCBkaWQgbm90IGVuYWJsZSBlYXN5IGFyY2hpdmUuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLmluc2VydEFkamFjZW50RWxlbWVudChcblx0XHRcdHBvc2l0aW9uX29mX2luc2VydGlvbixcblx0XHRcdDxkaXYgaWQ9XCJlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZVwiPlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRjb2xvcjogJ2luaGVyaXQnLFxuXHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLmVsYWJvcmF0ZV9ub3RpY2UoJ2VuYWJsZV9vbl9nZW5lcmljX3BhZ2UnKTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e21lc3NhZ2UoJ3RvX2VuYWJsZScpfVxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9IGVsc2Uge1xuXHRcdGZvb3Rlcl9pbmZvX2VsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXG5cdFx0XHRwb3NpdGlvbl9vZl9pbnNlcnRpb24sXG5cdFx0XHQ8ZGl2IGlkPVwiZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2VcIj5cblx0XHRcdFx0PGFcblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Y29sb3I6ICdpbmhlcml0Jyxcblx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5lbGFib3JhdGVfbm90aWNlKCdwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZScpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7bWVzc2FnZSgncGxlYXNlX2VuYWJsZScpfVxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cdGlmIChtdy5jb25maWcuZ2V0KCdza2luJykgPT09ICdjaXRpemVuJykge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5XG5cdFx0XHQuZmluZCgnI2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlLCAjZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZSwgI2Vhc3lfYXJjaGl2ZV9zdG9wX25vdGljZScpXG5cdFx0XHQucmVwbGFjZVdpdGgoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRjb25zdCAkdGhpcyA9ICQodGhpcyk7XG5cdFx0XHRcdHJldHVybiAkKCc8c2VjdGlvbj4nKS5hZGRDbGFzcygncGFnZS1pbmZvX19pdGVtJykuYXR0cignaWQnLCAkdGhpcy5hdHRyKCdpZCcpKS5odG1sKCR0aGlzLmh0bWwoKSk7XG5cdFx0XHR9KTtcblx0fVxuXHRpZiAoXG5cdFx0Wyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMobXcuY29uZmlnLmdldCgnc2tpbicpKSB8fFxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJylcblx0KSB7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHlcblx0XHRcdC5maW5kKCcjZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UsICNlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlLCAjZWFzeV9hcmNoaXZlX3N0b3Bfbm90aWNlJylcblx0XHRcdC5yZXBsYWNlV2l0aChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcblx0XHRcdFx0cmV0dXJuICQoJzxsaT4nKS5hdHRyKCdpZCcsICR0aGlzLmF0dHIoJ2lkJykpLmh0bWwoJHRoaXMuaHRtbCgpKTtcblx0XHRcdH0pO1xuXHR9XG59KSgpO1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmV4cG9ydCBjb25zdCBlYXN5X2FyY2hpdmVfbGFuZyA9ICgpID0+IHtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5sYW5nID0ge1xuXHRcdGRlbGV0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpCcsXG5cdFx0fSksXG5cdFx0YXJjaGl2ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpQnLFxuXHRcdH0pLFxuXHRcdHN1cHBvcnRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBlbmFibGVkIG9uIHRoaXMgdGFsayBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acrOiuqOiuuumhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUnLFxuXHRcdH0pLFxuXHRcdG90aGVyc19wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBub3QgZW5hYmxlZC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5piv5LuW5Lq655qE55So5oi36K6o6K666aG16Z2i77yM5Zug5q2k5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i54K65LuW5Lq655So5oi26KiO6KuW6aCB6Z2i77yM5pWF5LiN5pSv5o+0IEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdHRvX2VuYWJsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHVzaW5nIEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5rKh5pyJ5ZCv55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmnKzpoIHmsqHmnInllZ/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRlbmFibGVfb25fZ2VuZXJpY19wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3QgeW91ciB1c2VyIHRhbGsgcGFnZS4gSG93ZXZlciBFYXN5IEFyY2hpdmUgc3RpbGwgY2FuIGJlIHVzZWQgaWYgbmVlZGVkLlRvIGVuYWJsZSBpdCwgYWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRlbXBsYXRlIHRvIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5q2k6aG16Z2i5LiN5piv5oKo55qE55So5oi36K6o6K666aG16Z2i44CC5LiN6L+H77yM6Iul6ZyA6KaB77yM5q2k6aG16Z2i5Y+v5Lul5ZCv55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzor7flnKjpobXpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5L2N572ufX3jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5q2k6aCB6Z2i5LiN5piv5oKo55qE55So5oi26KiO6KuW6aCB6Z2i44CC5LiN6YGO77yM6Iul6ZyA6KaB77yM5q2k6aCB6Z2i5Y+v5Lul5ZWf55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzoq4vlnKjpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdHBsZWFzZV9lbmFibGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRvIHRoaXMgcGFnZSB0byBzdGFydCB1c2luZyBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+WcqOatpOmhtemdouWKoOWFpSB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPlnLDlnYB9fSDmnaXlkK/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+WcqOatpOmggemdouWKoOWFpSB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59fSDkvobllZ/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46IFwiWW91IGhhdmUgdGhlIEVhc3kgQXJjaGl2ZSBmdW5jdGlvbmFsaXR5IGVuYWJsZWQgYnV0IHlvdXIgdGFsayBwYWdlIGhhc24ndCBiZWVuIGNvbmZpZ3VyZWQgeWV0LiBUbyB0YWtlIGFkdmFudGFnZSBvZiBFYXN5IEFyY2hpdmUsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuXCIsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjnmoTotKblj7flt7Lnu4/mlK/mjIEgRWFzeSBBcmNoaXZl77yM5L2G5piv77yM5Li65LqG5byA5aeL5L2/55So6K+l5Yqf6IO977yM5oKo6L+Y6ZyA6KaB5Zyo6Ieq5bex55qE55So5oi36K6o6K666aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOeahOizrOiZn+W3sue2k+aUr+aMgSBFYXN5IEFyY2hpdmXvvIzkvYbmmK/vvIzngrrkuobplovlp4vkvb/nlKjoqbLlip/og73vvIzmgqjpgoTpnIDopoHlnKjoh6rlt7HnmoTnlKjmiLboqI7oq5bpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdGxlZnRfcGFyX3NwbGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHRyaWdodF9wYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKScsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0cGVyaW9kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHRcdGFyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlIGxvY2F0aW9uOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5Zyw5Z2A77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOiHs++8micsXG5cdFx0fSksXG5cdFx0bG9hZGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZyBzZWN0aW9uICQxJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOivu+WPluesrCAkMSDoioLnmoTlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo6K6A5Y+W56ysICQxIOevgOeahOWFp+WuuScsXG5cdFx0fSksXG5cdFx0ZGVsZXRpbmdfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RlbGV0aW5nIHNlY3Rpb24gJDEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yig6Zmk56ysICQxIOiKgueahOWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjliKrpmaTnrKwgJDEg56+A55qE5YWn5a65Jyxcblx0XHR9KSxcblx0XHRkb25lX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZWN0aW9uICQxIGhhcyBiZWVuIGFyY2hpdmVkIHRvICQyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3sue7j+WwhuesrCAkMSDoioLlrZjmoaPliLAgJDInLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey57aT5bCH56ysICQxIOevgOWtmOaqlOWIsCAkMicsXG5cdFx0fSksXG5cdFx0ZG9uZV9kZWxldGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VjdGlvbiAkMSBoYXMgYmVlbiBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3sue7j+WwhuesrCAkMSDoioLliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey57aT5bCH56ysICQxIOevgOWIqumZpCcsXG5cdFx0fSksXG5cdFx0YmVpbmdfYXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYmVpbmcgYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOS4rScsXG5cdFx0fSksXG5cdFx0YmVpbmdfZGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOS4rScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTkuK0nLFxuXHRcdH0pLFxuXHRcdGFscmVhZHlfYXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWtmOaqlCcsXG5cdFx0fSksXG5cdFx0YWxyZWFkeV9kZWxldGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWIqumZpCcsXG5cdFx0fSksXG5cdFx0b3RoZXJzX3RhbGtfZWxhYm9yYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogXCJUaGlzIHBhZ2UgaXMgYW5vdGhlciB1c2VyJ3MgdGFsayBwYWdlLiBZb3UgY2Fubm90IGFyY2hpdmUgdGhlIHRvcGljcyBvbiB0aGlzIHBhZ2UgZm9yIGhpbS9oZXJcIixcblx0XHRcdCd6aC1oYW5zJzogJ+i/meaYr+WPpuS4gOWQjeeUqOaIt+eahOiuqOiuuumhtemdou+8jOaCqOS4jeiDveS7o+abv+WPpuS4gOWQjeeUqOaIt+WtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfpgJnmmK/lj6bkuIDlkI3nlKjmiLbnmoToqI7oq5bpoIHpnaLvvIzmgqjkuI3og73ku6Pmm7/lj6bkuIDlkI3nlKjmiLblrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdHBhZ2Vfbm90X3N1cHBvcnRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0cGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGVzZSBwYWdlcyBhcmUgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmU6IEZpbGUsIFRlbXBsYXRlLCBNb2R1bGUsIE1lZGlhV2lraSwgQ2F0ZWdvcnksIFNwZWNpYWwsIEphdmFTY3JpcHQsIENTUywgSlNPTi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6L+Z5Lqb6aG16Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJpGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfpgJnkupvpoIHpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8mkZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHR9KSxcblx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBvZiB0aGlzIHBhZ2UsIFwiJDFcIiwgaXMgdW5kZXIgdGhlIGFydGljbGUgbmFtZXNwYWNlLCB3aGVyZSBhcmNoaXZlcyBzaG91bGQgbm90IGJlIG5vcm1hbGx5IGRpcmVjdGVkIHRvLiBQbGVhc2UgY2hlY2sgaWYgeW91IGhhdmUgdGhlIGNvcnJlY3QgYXJjaGl2ZSBsb2NhdGlvbi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3vvIzlnKjmnaHnm67lkI3np7Dnqbrpl7TkuYvkuIvjgILkuIDoiKzogIzoqIDkuI3lupTlkJHmnaHnm67lkI3np7Dnqbrpl7Tov5vooYzlrZjmoaPvvIzor7fmo4Dmn6XlrZjmoaPlnLDlnYDjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3vvIzlnKjmop3nm67lkI3nqLHnqbrplpPkuYvkuIvjgILkuIDoiKzogIzoqIDkuI3mh4nlkJHmop3nm67lkI3nqLHnqbrplpPpgLLooYzlrZjmqpTvvIzoq4vmqqLmn6XlrZjmqpTlnLDlnYDjgIInLFxuXHRcdH0pLFxuXHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlIGFyY2hpdmUgbG9jYXRpb24gb2YgdGhpcyBwYWdlLCBcIiQxXCIsIGlzIHRoaXMgcGFnZSBpdHNlbGYsIEVhc3kgYXJjaGl2ZSBjYW5ub3Qgb3BlcmF0ZSBsaWtlIHRoaXMuICcsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLnm67liY3nmoTlrZjmoaPlnLDlnYDmmK/igJwkMeKAne+8jOWSjOatpOmhtemdouWQjeensOebuOWQjOOAgkVhc3kgQXJjaGl2ZSDml6Dms5XmjInmraTlnLDlnYDlrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3vvIzlkozmraTpoIHpnaLlkI3nqLHnm7jlkIzjgIJFYXN5IEFyY2hpdmUg54Sh5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHRhcmNoaXZlX3N1bW1hcnk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+auteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdGRlbGV0ZV9zdW1tYXJ5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOauteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTmrrXokL0nLFxuXHRcdH0pLFxuXHR9O1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxXQUFOLE1BQWU7RUFDZEM7RUFDQUM7RUFDQUM7RUFDQUM7RUFFQUMsWUFBWUMsYUFBcUJDLFFBQTJCO0FBQzNELFNBQUtOLE1BQU1LO0FBQ1gsU0FBS0osT0FBTztBQUNaLFNBQUtDLFFBQVE7QUFDYixTQUFLQyxRQUFRO0FBQ2IsUUFBSSxPQUFPRyxXQUFXLFVBQVU7QUFDL0JBLGVBQVNDLE9BQU9ELE1BQU07SUFDdkI7QUFDQSxRQUNDRCxZQUFZRyxTQUFTLEtBQ3JCLG9CQUFvQkMsS0FBS0osWUFBWUssTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUNoRCxDQUFDSixPQUFPSyxTQUFTLFlBQVksR0FDNUI7QUFDRCxPQUFBLEVBQUEsRUFBQSxFQUFBLEVBQVMs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QUFBK0ssUUFBQUMsY0FBQyxLQUFBO01BQ0E1QixPQUFPO1FBQ05FLE9BQU87UUFDUG9ELFFBQVE7TUFDVDtNQUNBbkMsU0FBU0EsTUFBTTtBQUNkbEssZUFBT0MsYUFBYXFKLGlCQUFpQix5QkFBeUI7TUFDL0Q7SUFBQSxHQUVDMUMsUUFBUSxlQUFlLENBQ3pCLENBQ0QsQ0FDRDtFQUNEO0FBQ0EsTUFBSXBFLEdBQUd4RCxPQUFPeUQsSUFBSSxNQUFNLE1BQU0sV0FBVztBQUN4QyxVQUFNd0ssUUFBUWpELEVBQUUsTUFBTTtBQUN0QmlELFVBQ0UxTixLQUFLLHVGQUF1RixFQUM1RjJOLFlBQVksV0FBWTtBQUN4QixZQUFNQyxRQUFRbkQsRUFBRSxJQUFJO0FBQ3BCLGFBQU9BLEVBQUUsV0FBVyxFQUFFb0QsU0FBUyxpQkFBaUIsRUFBRUMsS0FBSyxNQUFNRixNQUFNRSxLQUFLLElBQUksQ0FBQyxFQUFFQyxLQUFLSCxNQUFNRyxLQUFLLENBQUM7SUFDakcsQ0FBQztFQUNIO0FBQ0EsTUFDQyxDQUFDLFVBQVUsZUFBZSxRQUFRLEVBQUVqTyxTQUFTbUQsR0FBR3hELE9BQU95RCxJQUFJLE1BQU0sQ0FBQyxLQUNsRWdELFNBQVNrRCxjQUFjLGdCQUFnQixHQUN0QztBQUNELFVBQU1zRSxRQUFRakQsRUFBRSxNQUFNO0FBQ3RCaUQsVUFDRTFOLEtBQUssdUZBQXVGLEVBQzVGMk4sWUFBWSxXQUFZO0FBQ3hCLFlBQU1DLFFBQVFuRCxFQUFFLElBQUk7QUFDcEIsYUFBT0EsRUFBRSxNQUFNLEVBQUVxRCxLQUFLLE1BQU1GLE1BQU1FLEtBQUssSUFBSSxDQUFDLEVBQUVDLEtBQUtILE1BQU1HLEtBQUssQ0FBQztJQUNoRSxDQUFDO0VBQ0g7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJQYXJlX3N0ciIsICJzdHIiLCAibGVmdCIsICJkZWxpbSIsICJyaWdodCIsICJjb25zdHJ1Y3RvciIsICJwYXJlX3N0cmluZyIsICJjb25maWciLCAiU3RyaW5nIiwgImxlbmd0aCIsICJ0ZXN0IiwgInNsaWNlIiwgImluY2x1ZGVzIiwgIlN5bnRheEVycm9yIiwgImZpbmQiLCAia2V5IiwgIl90aGlzJHN0ciRzcGxpdCQiLCAic3BsaXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJlYXN5X2FyY2hpdmVfbGFuZyIsICJ3aW5kb3ciLCAiZWFzeV9hcmNoaXZlIiwgImxhbmciLCAiZGVsZXRlIiwgImxvY2FsaXplIiwgImVuIiwgImFyY2hpdmUiLCAic3VwcG9ydHMiLCAib3RoZXJzX3BhZ2UiLCAidG9fZW5hYmxlIiwgImVuYWJsZV9vbl9nZW5lcmljX3BhZ2UiLCAicGxlYXNlX2VuYWJsZSIsICJwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZSIsICJsZWZ0X3Bhcl9zcGxpdCIsICJ6aCIsICJyaWdodF9wYXIiLCAicGVyaW9kIiwgImFyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdCIsICJsb2FkaW5nX3NlY3Rpb25faSIsICJkZWxldGluZ19zZWN0aW9uX2kiLCAiZG9uZV9zZWN0aW9uX2kiLCAiZG9uZV9kZWxldGluZ19zZWN0aW9uX2kiLCAiYmVpbmdfYXJjaGl2ZWQiLCAiYmVpbmdfZGVsZXRlZCIsICJhbHJlYWR5X2FyY2hpdmVkIiwgImFscmVhZHlfZGVsZXRlZCIsICJvdGhlcnNfdGFsa19lbGFib3JhdGUiLCAicGFnZV9ub3Rfc3VwcG9ydGVkIiwgInBhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGUiLCAicHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZSIsICJwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2UiLCAiYXJjaGl2ZV9zdW1tYXJ5IiwgImRlbGV0ZV9zdW1tYXJ5IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZWFzeUFyY2hpdmUiLCAiX3dpbmRvdyRlYXN5X2FyY2hpdmUiLCAiX3dpbmRvdyRlYXN5X2FyY2hpdmUkIiwgIl93aW5kb3ckZWFzeV9hcmNoaXZlJDIiLCAiX3dpbmRvdyRlYXN5X2FyY2hpdmUkMyIsICJtdyIsICJnZXQiLCAiZXhwb3NlIiwgImFzeW5jUG9zdCIsICJwYXJhbSIsICJjYWxsYmFjayIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBvc3RXaXRoVG9rZW4iLCAidGhlbiIsICJnZXRQYWdlIiwgInRpdGxlIiwgImFjdGlvbiIsICJwcm9wIiwgInJ2cHJvcCIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aXRsZXMiLCAiZ2V0UGFnZVNlY3Rpb24iLCAic2VjdGlvbiIsICJydnNlY3Rpb24iLCAicGlja1BhZ2VDb250ZW50IiwgImRhdGEiLCAicXVlcnkiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgImNvbnRlbnQiLCAidGVsbFBhZ2VFeGlzdCIsICJtaXNzaW5nIiwgImVkaXQiLCAidGV4dCIsICJzdW1tYXJ5IiwgImVkaXRBcHBlbmQiLCAicGFnZSIsICJhZGRlZF9jb250ZW50IiwgIm9yaWdpbmFsX2NvbnRlbnQiLCAiYXJjaGl2ZVNlY3Rpb24iLCAidGFyZ2V0VGl0bGUiLCAiY29uY2F0IiwgInRvU3RyaW5nIiwgImRlbGV0ZVNlY3Rpb24iLCAiYXJjaGl2ZV9zZWN0aW9uIiwgImRlbGV0ZV9zZWN0aW9uIiwgInNldHRpbmdzX3N0cmluZyIsICJzZXR0aW5ncyIsICJteV91c2VyX3RhbGsiLCAibmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4IiwgImRpc19zdXBwb3J0X3RoZXNlX3BhZ2VzX3JlZ2V4IiwgInNldHRpbmdzX3NwYW5fY29sbGVjdGlvbiIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInNldHRpbmdzX3NwYW4iLCAiaW5uZXJIVE1MIiwgIm9uX3VzZXJfdGFsayIsICJwYWdlX25hbWUiLCAiam9pbiIsICJ1c2VyX25hbWUiLCAiaGFzX3RlbXBsYXRlIiwgIm90aGVyc191c2VyX3RhbGsiLCAib25fYXJ0aWNsZSIsICJvbl9oaXN0X3ZlcnNpb24iLCAiYXJjX3N1bSIsICJ1c2VyX2N1c3RvbV9hcmNoaXZlX3N1bW1hcnkiLCAiZGVsX3N1bSIsICJ1c2VyX2N1c3RvbV9kZWxldGVfc3VtbWFyeSIsICJzYW5pdGl6ZV9odG1sIiwgInN0cmluZyIsICJyZXBsYWNlIiwgIm1lc3NhZ2UiLCAidGFnIiwgInBhcmFfbGlzdCIsICJoYXNfdW5mdWxmaWxsZWRfcGFyYSIsICJfaSIsICJzZWFyY2giLCAibm9taW5hbF9zZWN0aW9ucyIsICJjb3VudCIsICJhcnIiLCAiQXJyYXkiLCAiZnJvbSIsICJzZWN0aW9uX2NvdW50IiwgImFjdHVhbF9zZWN0aW9uIiwgIm5vbWluYWxfc2VjdGlvbl9udW1iZXIiLCAibGVzcyIsICJyZXBvcnRfZG9uZW5lc3NfdWkiLCAic2VjdGlvbl9udW1iZXIiLCAiZG9uZW5lc3NfdHlwZSIsICJ0byIsICJvbmdvaW5nX29yX2RvbmUiLCAidGFnX2RpbmciLCAidGFnX3NlY3Rpb24iLCAiZGluZ190eXBlIiwgImRpbmdfYXV0b2hpZGUiLCAiYWN0aW9ucyIsICJkaW5nIiwgInRvYXN0aWZ5IiwgImNsb3NlIiwgImR1cmF0aW9uIiwgInNlY3Rpb25fbGluayIsICJub2RlIiwgInF1ZXJ5U2VsZWN0b3IiLCAicG5vZGUiLCAicGFyZW50Tm9kZSIsICJjaGlsZE5vZGVzIiwgInN0eWxlIiwgImRpc3BsYXkiLCAiY29sb3IiLCAiZGVsZXRlX3NlY3Rpb25fY29yZSIsICJfbm9taW5hbCIsICJhY3R1YWxfc2VjdGlvbl9udW1iZXIiLCAiYXJjaGl2ZV9zZWN0aW9uX2NvcmUiLCAiZWxhYm9yYXRlX25vdGljZSIsICJub3RpY2VfdGFnX25hbWUiLCAibm90aWNlX3RhZ19kaWN0aW9uYXJ5IiwgIm5vdGljZV9zZXQiLCAibnRhZyIsICJudHlwZSIsICJudHRsIiwgIm5wZXJzaXN0IiwgIm5zdWJzdCIsICJ0b2FzdGlmeUluc3RhbmNlIiwgIiQiLCAiYXBwZW5kIiwgIm9uQ2xpY2siLCAiaGlkZVRvYXN0IiwgImkiLCAiaiIsICJlbGUiLCAibm9taW5hbCIsICJhY3R1YWwiLCAicGlwZV9odG1sIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzcyIsICJzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaW5oaWJpdCIsICJzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQiLCAic2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2h0bWwiLCAic2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9odG1sIiwgInNlY3Rpb25faWRfc3Bhbl9odG1sIiwgIm9yZGVyX25vIiwgImZvb3Rlcl9pbmZvX2VsZSIsICJwb3NpdGlvbl9vZl9pbnNlcnRpb24iLCAiRnJhZ21lbnQiLCAiaXNfaW5fYmxhY2tsaXN0IiwgImJsYWNrbGlzdCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgImVyciIsICJlIiwgImYiLCAiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwgImlkIiwgImN1cnNvciIsICJub3JtYWxfZnVuY3Rpb25faW5qZWN0X2ludGVyZmFjZSIsICJlZGl0U2VjdGlvbkNvbGxlY3Rpb24iLCAidmUiLCAiaHJlZiIsICJjaGlsZF9ub2RlX251bWJlciIsICJ0YWdOYW1lIiwgInRvTG93ZXJDYXNlIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiYWZ0ZXIiLCAiJGJvZHkiLCAicmVwbGFjZVdpdGgiLCAiJHRoaXMiLCAiYWRkQ2xhc3MiLCAiYXR0ciIsICJodG1sIl0KfQo=
