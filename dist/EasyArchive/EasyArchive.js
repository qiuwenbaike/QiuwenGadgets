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
var version = "4.0";
//! src/EasyArchive/modules/react.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
var elementWrap = (id, innerElement) => {
  const {
    skin
  } = mw.config.get();
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("section", {
      className: ["page-info__item"],
      id
    }, innerElement);
  } else if (["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("li", {
      id
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    id
  }, innerElement);
};
var emptyElement = (...innerElement) => /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null, [...innerElement]);
var linkWrap = (textContent, href) => /* @__PURE__ */ import_ext_gadget.default.createElement("a", {
  href,
  textContent
});
var onClickWrap = (textContent, onClick, dataActual, dataNominal) => /* @__PURE__ */ import_ext_gadget.default.createElement("a", {
  onClick,
  textContent,
  "data-actual": dataActual,
  "data-nominal": dataNominal
});
var pipeElement = () => /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  class: "mw-editsection-divider",
  textContent: "|"
});
var sectionIdSpanElement = (id) => /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  class: ["easy-archive-section-id-span", "easy-archive-section-id-span-order-".concat(id)],
  style: {
    display: "none"
  }
}, "section");
var span = (innerHTML) => /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  innerHTML
});
//! src/EasyArchive/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("EasyAchive/".concat(version));
//! src/EasyArchive/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    delete: (0, import_ext_gadget3.localize)({
      en: "delete",
      "zh-hans": "删除",
      "zh-hant": "刪除"
    }),
    archive: (0, import_ext_gadget3.localize)({
      en: "archive",
      "zh-hans": "存档",
      "zh-hant": "存檔"
    }),
    supports: (0, import_ext_gadget3.localize)({
      en: "Easy Archive is enabled on this talk page",
      "zh-hans": "本讨论页面使用 Easy Archive 快速存档",
      "zh-hant": "此頁面使用 Easy Archive"
    }),
    others_page: (0, import_ext_gadget3.localize)({
      en: "Easy Archive is not enabled.",
      "zh-hans": "此页面是他人的用户讨论页面，因此不支持 Easy Archive 快速存档。",
      "zh-hant": "此頁面為他人用戶討論頁面，故不支援 Easy Archive 快速存檔。"
    }),
    to_enable: (0, import_ext_gadget3.localize)({
      en: "This page is not using Easy Archive.",
      "zh-hans": "此页面没有启用 Easy Archive。",
      "zh-hant": "本頁没有啟用 Easy Archive。"
    }),
    enable_on_generic_page: (0, import_ext_gadget3.localize)({
      en: "This page is not your user talk page. However Easy Archive still can be used if needed.To enable it, add {{Easy Archive|to=[Archive location]}} template to this page.",
      "zh-hans": "此页面不是您的用户讨论页面。不过，若需要，此页面可以启用 Easy Archive。若要在此页面使用 Easy Archive，请在页面上添加模板 {{Easy Archive|to=存档位置}}。",
      "zh-hant": "此頁面不是您的用戶討論頁面。不過，若需要，此頁面可以啟用 Easy Archive。若要在此頁面使用 Easy Archive，請在頁面上添加模板 {{Easy Archive|to=存檔位置}}。"
    }),
    please_enable: (0, import_ext_gadget3.localize)({
      en: "Add {{Easy Archive|to=[Archive location]}} to this page to start using Easy Archive.",
      "zh-hans": "请在此页面加入 {{Easy Archive|to=存档地址}} 来启用 Easy Archive。",
      "zh-hant": "請在此頁面加入 {{Easy Archive|to=存檔位置}} 來啟用 Easy Archive。"
    }),
    please_enable_elaborate: (0, import_ext_gadget3.localize)({
      en: "You have the Easy Archive functionality enabled but your talk page hasn't been configured yet. To take advantage of Easy Archive, add {{Easy Archive|to=[Archive location]}} template to this page.",
      "zh-hans": "您的账号已经支持 Easy Archive，但是，为了开始使用该功能，您还需要在自己的用户讨论页面上添加模板 {{Easy Archive|to=存档位置}}。",
      "zh-hant": "您的賬號已經支持 Easy Archive，但是，為了開始使用該功能，您還需要在自己的用戶討論頁面上添加模板 {{Easy Archive|to=存檔位置}}。"
    }),
    left_par_split: (0, import_ext_gadget3.localize)({
      en: " (",
      zh: "（"
    }),
    right_par: (0, import_ext_gadget3.localize)({
      en: ")",
      zh: "）"
    }),
    period: (0, import_ext_gadget3.localize)({
      en: ".",
      zh: "。"
    }),
    archive_path_colon_split: (0, import_ext_gadget3.localize)({
      en: "Archive location: ",
      "zh-hans": "存档地址：",
      "zh-hant": "存檔至："
    }),
    loading_section_i: (0, import_ext_gadget3.localize)({
      en: "Loading section $1",
      "zh-hans": "正在读取第 $1 节的内容",
      "zh-hant": "正在讀取第 $1 節的內容"
    }),
    deleting_section_i: (0, import_ext_gadget3.localize)({
      en: "Deleting section $1",
      "zh-hans": "正在删除第 $1 节的内容",
      "zh-hant": "正在刪除第 $1 節的內容"
    }),
    done_section_i: (0, import_ext_gadget3.localize)({
      en: "Section $1 has been archived to $2",
      "zh-hans": "已经将第 $1 节存档到 $2",
      "zh-hant": "已經將第 $1 節存檔到 $2"
    }),
    done_deleting_section_i: (0, import_ext_gadget3.localize)({
      en: "Section $1 has been deleted",
      "zh-hans": "已经将第 $1 节删除",
      "zh-hant": "已經將第 $1 節刪除"
    }),
    being_archived: (0, import_ext_gadget3.localize)({
      en: "being archived",
      "zh-hans": "存档中",
      "zh-hant": "存檔中"
    }),
    being_deleted: (0, import_ext_gadget3.localize)({
      en: "being deleted",
      "zh-hans": "删除中",
      "zh-hant": "刪除中"
    }),
    already_archived: (0, import_ext_gadget3.localize)({
      en: "archived",
      "zh-hans": "已存档",
      "zh-hant": "已存檔"
    }),
    already_deleted: (0, import_ext_gadget3.localize)({
      en: "deleted",
      "zh-hans": "已删除",
      "zh-hant": "已刪除"
    }),
    others_talk_elaborate: (0, import_ext_gadget3.localize)({
      en: "This page is another user's talk page. You cannot archive the topics on this page for him/her",
      "zh-hans": "这是另一名用户的讨论页面，您不能代替另一名用户存档。",
      "zh-hant": "這是另一名用戶的討論頁面，您不能代替另一名用戶存檔。"
    }),
    page_not_supported: (0, import_ext_gadget3.localize)({
      en: "This page is not supported by Easy Archive.",
      "zh-hans": "此页面不支持 Easy Archive。",
      "zh-hant": "此頁面不支持 Easy Archive。"
    }),
    page_not_supported_elaborate: (0, import_ext_gadget3.localize)({
      en: "These pages are not supported by Easy Archive: File, Template, Module, MediaWiki, Category, Special, JavaScript, CSS, JSON.",
      "zh-hans": "这些页面不受 Easy Archive 支持：File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。",
      "zh-hant": "這些頁面不受 Easy Archive 支持：File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。"
    }),
    problem_with_archive_location_main_space: (0, import_ext_gadget3.localize)({
      en: 'Currently the archive location of this page, "$1", is under the article namespace, where archives should not be normally directed to. Please check if you have the correct archive location.',
      "zh-hans": "此页面目前的存档地址是“$1”，在条目名称空间之下。一般而言不应向条目名称空间进行存档，请检查存档地址。",
      "zh-hant": "此頁面當前的存檔地址是「$1」，在條目名稱空間之下。一般而言不應向條目名稱空間進行存檔，請檢查存檔地址。"
    }),
    problem_with_archive_location_same_page: (0, import_ext_gadget3.localize)({
      en: 'Currently the archive location of this page, "$1", is this page itself, Easy archive cannot operate like this. ',
      "zh-hans": "此页面目前的存档地址是“$1”，和此页面名称相同。Easy Archive 无法按此地址存档。",
      "zh-hant": "此頁面當前的存檔地址是「$1」，和此頁面名稱相同。Easy Archive 無法按此地址存檔。"
    }),
    archive_summary: (0, import_ext_gadget3.localize)({
      en: "archive section",
      "zh-hans": "存档段落",
      "zh-hant": "存檔段落"
    }),
    delete_summary: (0, import_ext_gadget3.localize)({
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
//! src/EasyArchive/EasyArchive.js
var import_ext_gadget4 = require("ext.gadget.Toastify");
(function easyArchiveWrap() {
  const {
    wgNamespaceNumber,
    wgPageName,
    wgUserName,
    wgCurRevisionId,
    wgRevisionId
  } = mw.config.get();
  if (wgNamespaceNumber < 0 || wgPageName === "Qiuwen:首页") {
    return;
  }
  class Pare_str {
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
    find(lookup_key) {
      lookup_key = this.left + lookup_key + this.delim;
      if (!this.str.includes(lookup_key)) {
        return null;
      }
      return this.str.split(lookup_key)[1].split(this.right)[0];
    }
  }
  const expose = /* @__PURE__ */ (() => {
    const asyncPost = (param, callback) => {
      api.postWithToken("csrf", param).then(callback);
    };
    const getPage = (title, callback) => {
      const param = {
        action: "query",
        prop: ["revisions"],
        rvprop: "ids|flags|timestamp|user|userid|size|comment|tags|content",
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
        rvprop: "content",
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
  let settings = new Pare_str(settings_string);
  const never_enable_on_these_pages_regex = [];
  const dis_support_these_pages_regex = [/^File:.*$/, /^MediaWiki:.*$/, /^Module:.*$/, /^Category:.*$/, /^Template:.*$/, /^Special:.*$/, /^User:.*\/?.*\.js$/, /^User:.*\/?.*\.css$/, /^User:.*\/?.*\.json$/];
  const settings_span_collection = document.querySelectorAll(".easy_archive_data_point_collection");
  const [settings_span] = settings_span_collection;
  const page_settings = settings_span ? new Pare_str(settings_span.innerHTML) : new Pare_str("");
  if (page_settings.find("data-init") === "1") {
    settings_string = settings_span.innerHTML;
    settings = new Pare_str(settings_string);
  }
  const on_user_talk = wgNamespaceNumber === 3;
  const my_user_talk = on_user_talk && (() => {
    let page_name = wgPageName.split(":");
    page_name[0] = "";
    page_name = page_name.join("");
    [page_name] = page_name.split("/");
    const user_name = wgUserName;
    return user_name.split("_").join("").split(" ").join("") === page_name.split("_").join("").split(" ").join("");
  })();
  const has_template = page_settings.find("data-init") === "1";
  const others_user_talk = my_user_talk === false && on_user_talk === true;
  const on_article = wgNamespaceNumber === 0;
  const on_hist_version = wgCurRevisionId - wgRevisionId !== 0;
  const arc_sum = message("archive_summary");
  const del_sum = message("delete_summary");
  let section_count;
  const sanitize_html = (string) => {
    return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
  };
  const message = (tag, para_list) => {
    try {
      let content = getMessage(tag);
      for (let has_unfulfilled_para = true, i = 0; has_unfulfilled_para; i++) {
        const search = "$".concat(i + 1);
        if (content.includes(search)) {
          content = para_list[i] ? content.split(search).join(para_list[i]) : content.split(search).join("");
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
    for (let i = 0; i < count; i++) {
      arr[i] = false;
    }
    return arr;
  })(section_count);
  const actual_section = (nominal_section_number) => {
    let less = 0;
    for (let i = 0; i < nominal_section_number; i++) {
      if (nominal_sections[i] === true) {
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
        for (let i = 1; i < pnode.childNodes.length - 2; i++) {
          pnode.childNodes[i].style.display = "none";
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
    expose.delete_section(wgPageName, actual_section_number, () => {
      report_doneness_ui(_nominal, "delete", "", "done").ding();
      report_doneness_ui(_nominal, "delete", "", "done").section_link();
      nominal_sections[section_number] = true;
    }, del_sum);
  };
  const delete_section = (section_number, _nominal) => {
    report_doneness_ui(_nominal, "delete", "", "ongoing").section_link();
    delete_section_core(section_number, _nominal);
  };
  const archive_section_core = (section_number, _nominal) => {
    const actual_section_number = actual_section(section_number);
    const to = settings.find("arc-loc");
    report_doneness_ui(_nominal, "archive", to, "ongoing").ding();
    expose.archive_section(wgPageName, actual_section_number, to, () => {
      report_doneness_ui(_nominal, "archive", to, "done").ding();
      report_doneness_ui(_nominal, "archive", to, "done").section_link();
      nominal_sections[section_number] = true;
    }, arc_sum);
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
      const toastifyInstance = (0, import_ext_gadget4.toastify)({
        node: span(message(ntag, nsubst)),
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
  const section_delete_interface_inhibit = settings.find("sec-del") === "0" || settings.find("data-init") === "0";
  const section_archive_interface_inhibit = settings.find("sec-arc") === "0" || settings.find("data-init") === "0";
  const section_delete_interface = emptyElement();
  const section_archive_interface = emptyElement();
  let footer_info_ele;
  if (document.querySelectorAll(mountPointSelector).length) {
    [footer_info_ele] = document.querySelectorAll(mountPointSelector);
  } else {
    footer_info_ele = emptyElement();
  }
  const is_in_blacklist = (blacklist) => {
    var _iterator2 = _createForOfIteratorHelper(blacklist), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const element = _step2.value;
        if (element.test(wgPageName)) {
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
  if (on_article || on_hist_version) {
    return;
  }
  if (is_in_blacklist(never_enable_on_these_pages_regex)) {
    return;
  }
  if (is_in_blacklist(dis_support_these_pages_regex)) {
    footer_info_ele.prepend(elementWrap("easy_archive_enable_notice", onClickWrap(message("page_not_supported"), (event) => {
      event.preventDefault();
      elaborate_notice("page_not_supported_elaborate");
    })));
  } else if (wgPageName === settings.find("arc-loc")) {
    elaborate_notice("problem_with_archive_location_same_page");
  } else if (has_template && !others_user_talk) {
    if (/.+:.+/.test(settings.find("arc-loc")) !== true) {
      elaborate_notice("problem_with_archive_location_main_space");
    }
    const normal_function_inject_interface = () => {
      let i = 0;
      let j = 0;
      const editSectionCollection = document.querySelectorAll(".mw-editsection:not(.mw-editsection-section-0)");
      for (i = 0; i < editSectionCollection.length; i++) {
        const ele = editSectionCollection[i];
        const ve = /[&?]veaction=edit/.test(ele.childNodes[1].href);
        const child_node_number = ve ? 3 : 1;
        if (ele.parentNode.tagName.toLowerCase() === "h2" && ele.parentNode.id !== "firstHeading" && decodeURIComponent(ele.childNodes[child_node_number].href.split(/[&?]title=/)[1].split("&")[0]) === wgPageName) {
          const actual = Number.parseInt(ele.childNodes[child_node_number].href.split(/[&?]section=/)[1].split("&")[0], 10);
          const nominal = i - j + 1;
          if (!section_delete_interface_inhibit) {
            section_delete_interface.append(pipeElement(), onClickWrap(message("delete"), (event) => {
              event.preventDefault();
              const {
                target
              } = event;
              const dataActual = target.dataset.actual;
              const dataNominal = target.dataset.nominal;
              delete_section(dataActual, dataNominal);
            }, actual, nominal));
          }
          if (!section_archive_interface_inhibit) {
            section_archive_interface.append(pipeElement(), onClickWrap(message("archive"), (event) => {
              event.preventDefault();
              const {
                target
              } = event;
              const dataActual = target.dataset.actual;
              const dataNominal = target.dataset.nominal;
              archive_section(dataActual, dataNominal);
            }, actual, nominal));
          }
          ele.childNodes[child_node_number].after(section_delete_interface, section_archive_interface, sectionIdSpanElement(nominal.toString()));
        } else {
          j++;
        }
      }
      section_count = i - j + 1;
      const easy_archive_supports_notice = emptyElement();
      easy_archive_supports_notice.append(message("supports"), message("left_par_split"), message("archive_path_colon_split"), linkWrap(sanitize_html(settings.find("arc-loc")), "/wiki/".concat(sanitize_html(settings.find("arc-loc")))), message("right_par"), message("period"));
      footer_info_ele.prepend(elementWrap("easy_archive_supports_notice", easy_archive_supports_notice));
    };
    normal_function_inject_interface();
  } else if (others_user_talk === true) {
    footer_info_ele.prepend(elementWrap("easy_archive_enable_notice"), onClickWrap(message("others_page"), (event) => {
      event.preventDefault();
      elaborate_notice("others_talk_elaborate");
    }));
  } else if (my_user_talk === false) {
    footer_info_ele.prepend(elementWrap("easy_archive_enable_notice", onClickWrap(message("to_enable"), (event) => {
      event.preventDefault();
      elaborate_notice("enable_on_generic_page");
    })));
  } else {
    footer_info_ele.prepend(elementWrap("easy_archive_enable_notice", onClickWrap(message("please_enable"), (event) => {
      event.preventDefault();
      elaborate_notice("please_enable_elaborate");
    })));
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9yZWFjdC50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiNC4wXCJcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9IChpZDogc3RyaW5nLCBpbm5lckVsZW1lbnQ6IFJlYWN0RWxlbWVudCkgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHNraW4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1sncGFnZS1pbmZvX19pdGVtJ119IGlkPXtpZH0+XG5cdFx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fSBlbHNlIGlmIChbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBpZD17aWR9Pntpbm5lckVsZW1lbnR9PC9saT47XG5cdH1cblx0cmV0dXJuIDxkaXYgaWQ9e2lkfT57aW5uZXJFbGVtZW50fTwvZGl2Pjtcbn07XG5cbmNvbnN0IGVtcHR5RWxlbWVudCA9ICguLi5pbm5lckVsZW1lbnQ6IFJlYWN0RWxlbWVudFtdKSA9PiA8PntbLi4uaW5uZXJFbGVtZW50XX08Lz47XG5cbmNvbnN0IGxpbmtXcmFwID0gKHRleHRDb250ZW50OiBzdHJpbmcsIGhyZWY6IHN0cmluZykgPT4gPGEgaHJlZj17aHJlZn0gdGV4dENvbnRlbnQ9e3RleHRDb250ZW50fSAvPjtcblxuY29uc3Qgb25DbGlja1dyYXAgPSAodGV4dENvbnRlbnQ6IHN0cmluZywgb25DbGljazogKCkgPT4gdm9pZCwgZGF0YUFjdHVhbD86IHN0cmluZywgZGF0YU5vbWluYWw/OiBzdHJpbmcpID0+IChcblx0PGEgb25DbGljaz17b25DbGlja30gdGV4dENvbnRlbnQ9e3RleHRDb250ZW50fSBkYXRhLWFjdHVhbD17ZGF0YUFjdHVhbH0gZGF0YS1ub21pbmFsPXtkYXRhTm9taW5hbH0gLz5cbik7XG5cbmNvbnN0IHBpcGVFbGVtZW50ID0gKCkgPT4gPHNwYW4gY2xhc3M9XCJtdy1lZGl0c2VjdGlvbi1kaXZpZGVyXCIgdGV4dENvbnRlbnQ9eyd8J30gLz47XG5cbmNvbnN0IHNlY3Rpb25JZFNwYW5FbGVtZW50ID0gKGlkOiBzdHJpbmcpID0+IChcblx0PHNwYW5cblx0XHRjbGFzcz17WydlYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuJywgYGVhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4tb3JkZXItJHtpZH1gXX1cblx0XHRzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319XG5cdD5cblx0XHRzZWN0aW9uXG5cdDwvc3Bhbj5cbik7XG5cbmNvbnN0IHNwYW4gPSAoaW5uZXJIVE1MOiBzdHJpbmcpID0+IDxzcGFuIGlubmVySFRNTD17aW5uZXJIVE1MfSAvPjtcblxuZXhwb3J0IHtlbGVtZW50V3JhcCwgZW1wdHlFbGVtZW50LCBsaW5rV3JhcCwgb25DbGlja1dyYXAsIHBpcGVFbGVtZW50LCBzZWN0aW9uSWRTcGFuRWxlbWVudCwgc3Bhbn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBFYXN5QWNoaXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGRlbGV0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpCcsXG5cdFx0fSksXG5cdFx0YXJjaGl2ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpQnLFxuXHRcdH0pLFxuXHRcdHN1cHBvcnRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBlbmFibGVkIG9uIHRoaXMgdGFsayBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acrOiuqOiuuumhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUnLFxuXHRcdH0pLFxuXHRcdG90aGVyc19wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBub3QgZW5hYmxlZC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5piv5LuW5Lq655qE55So5oi36K6o6K666aG16Z2i77yM5Zug5q2k5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i54K65LuW5Lq655So5oi26KiO6KuW6aCB6Z2i77yM5pWF5LiN5pSv5o+0IEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdHRvX2VuYWJsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHVzaW5nIEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5rKh5pyJ5ZCv55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmnKzpoIHmsqHmnInllZ/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRlbmFibGVfb25fZ2VuZXJpY19wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3QgeW91ciB1c2VyIHRhbGsgcGFnZS4gSG93ZXZlciBFYXN5IEFyY2hpdmUgc3RpbGwgY2FuIGJlIHVzZWQgaWYgbmVlZGVkLlRvIGVuYWJsZSBpdCwgYWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRlbXBsYXRlIHRvIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5q2k6aG16Z2i5LiN5piv5oKo55qE55So5oi36K6o6K666aG16Z2i44CC5LiN6L+H77yM6Iul6ZyA6KaB77yM5q2k6aG16Z2i5Y+v5Lul5ZCv55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzor7flnKjpobXpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5L2N572ufX3jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5q2k6aCB6Z2i5LiN5piv5oKo55qE55So5oi26KiO6KuW6aCB6Z2i44CC5LiN6YGO77yM6Iul6ZyA6KaB77yM5q2k6aCB6Z2i5Y+v5Lul5ZWf55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzoq4vlnKjpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdHBsZWFzZV9lbmFibGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRvIHRoaXMgcGFnZSB0byBzdGFydCB1c2luZyBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+WcqOatpOmhtemdouWKoOWFpSB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPlnLDlnYB9fSDmnaXlkK/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+WcqOatpOmggemdouWKoOWFpSB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59fSDkvobllZ/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46IFwiWW91IGhhdmUgdGhlIEVhc3kgQXJjaGl2ZSBmdW5jdGlvbmFsaXR5IGVuYWJsZWQgYnV0IHlvdXIgdGFsayBwYWdlIGhhc24ndCBiZWVuIGNvbmZpZ3VyZWQgeWV0LiBUbyB0YWtlIGFkdmFudGFnZSBvZiBFYXN5IEFyY2hpdmUsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuXCIsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjnmoTotKblj7flt7Lnu4/mlK/mjIEgRWFzeSBBcmNoaXZl77yM5L2G5piv77yM5Li65LqG5byA5aeL5L2/55So6K+l5Yqf6IO977yM5oKo6L+Y6ZyA6KaB5Zyo6Ieq5bex55qE55So5oi36K6o6K666aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOeahOizrOiZn+W3sue2k+aUr+aMgSBFYXN5IEFyY2hpdmXvvIzkvYbmmK/vvIzngrrkuobplovlp4vkvb/nlKjoqbLlip/og73vvIzmgqjpgoTpnIDopoHlnKjoh6rlt7HnmoTnlKjmiLboqI7oq5bpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdGxlZnRfcGFyX3NwbGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHRyaWdodF9wYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKScsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0cGVyaW9kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHRcdGFyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlIGxvY2F0aW9uOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5Zyw5Z2A77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOiHs++8micsXG5cdFx0fSksXG5cdFx0bG9hZGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZyBzZWN0aW9uICQxJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOivu+WPluesrCAkMSDoioLnmoTlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo6K6A5Y+W56ysICQxIOevgOeahOWFp+WuuScsXG5cdFx0fSksXG5cdFx0ZGVsZXRpbmdfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RlbGV0aW5nIHNlY3Rpb24gJDEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yig6Zmk56ysICQxIOiKgueahOWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjliKrpmaTnrKwgJDEg56+A55qE5YWn5a65Jyxcblx0XHR9KSxcblx0XHRkb25lX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZWN0aW9uICQxIGhhcyBiZWVuIGFyY2hpdmVkIHRvICQyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3sue7j+WwhuesrCAkMSDoioLlrZjmoaPliLAgJDInLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey57aT5bCH56ysICQxIOevgOWtmOaqlOWIsCAkMicsXG5cdFx0fSksXG5cdFx0ZG9uZV9kZWxldGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VjdGlvbiAkMSBoYXMgYmVlbiBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3sue7j+WwhuesrCAkMSDoioLliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey57aT5bCH56ysICQxIOevgOWIqumZpCcsXG5cdFx0fSksXG5cdFx0YmVpbmdfYXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYmVpbmcgYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOS4rScsXG5cdFx0fSksXG5cdFx0YmVpbmdfZGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOS4rScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTkuK0nLFxuXHRcdH0pLFxuXHRcdGFscmVhZHlfYXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWtmOaqlCcsXG5cdFx0fSksXG5cdFx0YWxyZWFkeV9kZWxldGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWIqumZpCcsXG5cdFx0fSksXG5cdFx0b3RoZXJzX3RhbGtfZWxhYm9yYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogXCJUaGlzIHBhZ2UgaXMgYW5vdGhlciB1c2VyJ3MgdGFsayBwYWdlLiBZb3UgY2Fubm90IGFyY2hpdmUgdGhlIHRvcGljcyBvbiB0aGlzIHBhZ2UgZm9yIGhpbS9oZXJcIixcblx0XHRcdCd6aC1oYW5zJzogJ+i/meaYr+WPpuS4gOWQjeeUqOaIt+eahOiuqOiuuumhtemdou+8jOaCqOS4jeiDveS7o+abv+WPpuS4gOWQjeeUqOaIt+WtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfpgJnmmK/lj6bkuIDlkI3nlKjmiLbnmoToqI7oq5bpoIHpnaLvvIzmgqjkuI3og73ku6Pmm7/lj6bkuIDlkI3nlKjmiLblrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdHBhZ2Vfbm90X3N1cHBvcnRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0cGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGVzZSBwYWdlcyBhcmUgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmU6IEZpbGUsIFRlbXBsYXRlLCBNb2R1bGUsIE1lZGlhV2lraSwgQ2F0ZWdvcnksIFNwZWNpYWwsIEphdmFTY3JpcHQsIENTUywgSlNPTi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6L+Z5Lqb6aG16Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJpGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfpgJnkupvpoIHpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8mkZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHR9KSxcblx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBvZiB0aGlzIHBhZ2UsIFwiJDFcIiwgaXMgdW5kZXIgdGhlIGFydGljbGUgbmFtZXNwYWNlLCB3aGVyZSBhcmNoaXZlcyBzaG91bGQgbm90IGJlIG5vcm1hbGx5IGRpcmVjdGVkIHRvLiBQbGVhc2UgY2hlY2sgaWYgeW91IGhhdmUgdGhlIGNvcnJlY3QgYXJjaGl2ZSBsb2NhdGlvbi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3vvIzlnKjmnaHnm67lkI3np7Dnqbrpl7TkuYvkuIvjgILkuIDoiKzogIzoqIDkuI3lupTlkJHmnaHnm67lkI3np7Dnqbrpl7Tov5vooYzlrZjmoaPvvIzor7fmo4Dmn6XlrZjmoaPlnLDlnYDjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3vvIzlnKjmop3nm67lkI3nqLHnqbrplpPkuYvkuIvjgILkuIDoiKzogIzoqIDkuI3mh4nlkJHmop3nm67lkI3nqLHnqbrplpPpgLLooYzlrZjmqpTvvIzoq4vmqqLmn6XlrZjmqpTlnLDlnYDjgIInLFxuXHRcdH0pLFxuXHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlIGFyY2hpdmUgbG9jYXRpb24gb2YgdGhpcyBwYWdlLCBcIiQxXCIsIGlzIHRoaXMgcGFnZSBpdHNlbGYsIEVhc3kgYXJjaGl2ZSBjYW5ub3Qgb3BlcmF0ZSBsaWtlIHRoaXMuICcsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLnm67liY3nmoTlrZjmoaPlnLDlnYDmmK/igJwkMeKAne+8jOWSjOatpOmhtemdouWQjeensOebuOWQjOOAgkVhc3kgQXJjaGl2ZSDml6Dms5XmjInmraTlnLDlnYDlrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3vvIzlkozmraTpoIHpnaLlkI3nqLHnm7jlkIzjgIJFYXN5IEFyY2hpdmUg54Sh5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHRhcmNoaXZlX3N1bW1hcnk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+auteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdGRlbGV0ZV9zdW1tYXJ5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOauteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTmrrXokL0nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICcuL0Vhc3lBcmNoaXZlLmxlc3MnO1xuXG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7XG5cdGVsZW1lbnRXcmFwLFxuXHRlbXB0eUVsZW1lbnQsXG5cdGxpbmtXcmFwLFxuXHRvbkNsaWNrV3JhcCxcblx0cGlwZUVsZW1lbnQsXG5cdHNlY3Rpb25JZFNwYW5FbGVtZW50LFxuXHRzcGFuLFxufSBmcm9tICcuL21vZHVsZXMvcmVhY3QudHN4JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL21vZHVsZXMvYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbihmdW5jdGlvbiBlYXN5QXJjaGl2ZVdyYXAoKSB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dVc2VyTmFtZSwgd2dDdXJSZXZpc2lvbklkLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDAgfHwgd2dQYWdlTmFtZSA9PT0gJ1FpdXdlbjrpppbpobUnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gbWluaWZpZWQgY29kZSBkZXBlbmRlbmN5IGZ1bmN0aW9uc1xuXHRjbGFzcyBQYXJlX3N0ciB7XG5cdFx0Y29uc3RydWN0b3IocGFyZV9zdHJpbmcsIGNvbmZpZykge1xuXHRcdFx0dGhpcy5zdHIgPSBwYXJlX3N0cmluZztcblx0XHRcdHRoaXMubGVmdCA9ICcoJztcblx0XHRcdHRoaXMuZGVsaW0gPSAnOic7XG5cdFx0XHR0aGlzLnJpZ2h0ID0gJyknO1xuXHRcdFx0aWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGNvbmZpZyA9IFN0cmluZyhjb25maWcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRwYXJlX3N0cmluZy5sZW5ndGggPiA2ICYmXG5cdFx0XHRcdC9bIyVAXVtTc11bRWVdW1R0XS8udGVzdChwYXJlX3N0cmluZy5zbGljZSgwLCA0KSkgJiZcblx0XHRcdFx0IWNvbmZpZy5pbmNsdWRlcygnaWdub3JlLXNldCcpXG5cdFx0XHQpIHtcblx0XHRcdFx0WywgLCAsICwgdGhpcy5sZWZ0LCB0aGlzLmRlbGltLCB0aGlzLnJpZ2h0XSA9IHBhcmVfc3RyaW5nO1xuXHRcdFx0XHRpZiAodGhpcy5sZWZ0ID09PSB0aGlzLnJpZ2h0IHx8IHRoaXMubGVmdCA9PT0gdGhpcy5kZWxpbSB8fCB0aGlzLnJpZ2h0ID09PSB0aGlzLmRlbGltKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKFwiUG91bmQgc2V0IHN0YXRlbWVudCBoYXMgcmVwZXRpdGl2ZSBjaGFyYWN0ZXJzLiBFLmcuICcjc2V0fDp8JyBpcyBpbGxlZ2FsLlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5kKGxvb2t1cF9rZXkpIHtcblx0XHRcdGxvb2t1cF9rZXkgPSB0aGlzLmxlZnQgKyBsb29rdXBfa2V5ICsgdGhpcy5kZWxpbTtcblx0XHRcdGlmICghdGhpcy5zdHIuaW5jbHVkZXMobG9va3VwX2tleSkpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5zdHIuc3BsaXQobG9va3VwX2tleSlbMV0uc3BsaXQodGhpcy5yaWdodClbMF07XG5cdFx0fVxuXHR9XG5cblx0Ly8gY29tbW9uIHJlcG8uXG5cdGNvbnN0IGV4cG9zZSA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgYXN5bmNQb3N0ID0gKHBhcmFtLCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0YXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbSkudGhlbihjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRjb25zdCBnZXRQYWdlID0gKHRpdGxlLCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW0gPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRcdFx0cnZwcm9wOiAnaWRzfGZsYWdzfHRpbWVzdGFtcHx1c2VyfHVzZXJpZHxzaXplfGNvbW1lbnR8dGFnc3xjb250ZW50Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdH07XG5cdFx0XHRhc3luY1Bvc3QocGFyYW0sIGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IGdldFBhZ2VTZWN0aW9uID0gKHRpdGxlLCBzZWN0aW9uLCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW0gPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0XHRcdHJ2c2VjdGlvbjogc2VjdGlvbixcblx0XHRcdH07XG5cdFx0XHRhc3luY1Bvc3QocGFyYW0sIGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IHBpY2tQYWdlQ29udGVudCA9IChkYXRhKSA9PiB7XG5cdFx0XHRpZiAoZGF0YS5xdWVyeSAmJiBkYXRhLnF1ZXJ5LnBhZ2VzICYmIGRhdGEucXVlcnkucGFnZXNbMF0gJiYgZGF0YS5xdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0pIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEucXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHRjb25zdCB0ZWxsUGFnZUV4aXN0ID0gKGRhdGEpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgfHwgIWRhdGEucXVlcnkgfHwgIWRhdGEucXVlcnkucGFnZXMgfHwgZGF0YS5xdWVyeS5wYWdlc1swXS5taXNzaW5nKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cdFx0Y29uc3QgZWRpdCA9ICh0aXRsZSwgc2VjdGlvbiwgdGV4dCwgc3VtbWFyeSwgY2FsbGJhY2spID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdHRleHQsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHNlY3Rpb24pIHtcblx0XHRcdFx0cGFyYW0uc2VjdGlvbiA9IHNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRhc3luY1Bvc3QocGFyYW0sIGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IGVkaXRBcHBlbmQgPSAocGFnZSwgYWRkZWRfY29udGVudCwgc3VtbWFyeSwgY2FsbGJhY2spID0+IHtcblx0XHRcdGdldFBhZ2UocGFnZSwgKGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxfY29udGVudCA9IHRlbGxQYWdlRXhpc3QoZGF0YSkgPT09IGZhbHNlID8gJycgOiBwaWNrUGFnZUNvbnRlbnQoZGF0YSk7XG5cdFx0XHRcdGVkaXQocGFnZSwgbnVsbCwgU3RyaW5nKG9yaWdpbmFsX2NvbnRlbnQpICsgYWRkZWRfY29udGVudCwgc3VtbWFyeSwgY2FsbGJhY2spO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRjb25zdCBhcmNoaXZlU2VjdGlvbiA9ICh0aXRsZSwgc2VjdGlvbiwgdGFyZ2V0VGl0bGUsIGNhbGxiYWNrLCBzdW1tYXJ5KSA9PiB7XG5cdFx0XHRnZXRQYWdlU2VjdGlvbih0aXRsZSwgc2VjdGlvbiwgKGRhdGEpID0+IHtcblx0XHRcdFx0ZWRpdEFwcGVuZCh0YXJnZXRUaXRsZSwgYFxcblxcbiR7cGlja1BhZ2VDb250ZW50KGRhdGEpfWAsIHN1bW1hcnkpO1xuXHRcdFx0XHRlZGl0KHRpdGxlLCBzZWN0aW9uLnRvU3RyaW5nKCksICcnLCBzdW1tYXJ5LCBjYWxsYmFjayk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGNvbnN0IGRlbGV0ZVNlY3Rpb24gPSAodGl0bGUsIHNlY3Rpb24sIGNhbGxiYWNrLCBzdW1tYXJ5KSA9PiB7XG5cdFx0XHRlZGl0KHRpdGxlLCBzZWN0aW9uLnRvU3RyaW5nKCksICcnLCBzdW1tYXJ5LCBjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXJjaGl2ZV9zZWN0aW9uOiBhcmNoaXZlU2VjdGlvbixcblx0XHRcdGRlbGV0ZV9zZWN0aW9uOiBkZWxldGVTZWN0aW9uLFxuXHRcdH07XG5cdH0pKCk7XG5cblx0Ly8gZGVmYXVsdCBzZXR0aW5nczpcblx0bGV0IHNldHRpbmdzX3N0cmluZyA9XG5cdFx0JyNzZXQlfD9cdFx0XHRcdFx0XHRcdFx0XHRcXG4nICtcblx0XHQnZGlzcGxheSBzZWN0aW9uIGRlbGV0ZSBsaW5rXHQlc2VjLWRlbHwxP1x0XFxuJyArXG5cdFx0J2Rpc3BsYXkgc2VjdGlvbiBhcmNoaXZlIGxpbmVcdCVzZWMtYXJjfDE/XHRcXG4nICtcblx0XHQnZGlzcGxheSBjb250cm9sIGJhciBhdCB0b3BcdCV0b3AtYmFyfDA/XHRcXG4nICtcblx0XHQnYXJjaGl2ZSBsb2NhdGlvblx0XHRcdFx0JWFyYy1sb2N8P1x0XFxuJyArXG5cdFx0J3N1YnNlY3Rpb24gZWZmZWN0aXZlbmVzc1x0XHQlc3ViLXNlY3wyP1x0XFxuJyArXG5cdFx0J2NvbmZpcm0gYWN0aW9uXHRcdFx0XHQlY29uZmlybXwwP1x0XFxuJyArXG5cdFx0J2lzIHRoaXMgZGF0YSBpbml0aWFsaXplZFx0XHQlZGF0YS1pbml0fDA/IFxcbic7XG5cdGxldCBzZXR0aW5ncyA9IG5ldyBQYXJlX3N0cihzZXR0aW5nc19zdHJpbmcpO1xuXHRjb25zdCBuZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXggPSBbXTtcblx0Y29uc3QgZGlzX3N1cHBvcnRfdGhlc2VfcGFnZXNfcmVnZXggPSBbXG5cdFx0L15GaWxlOi4qJC8sXG5cdFx0L15NZWRpYVdpa2k6LiokLyxcblx0XHQvXk1vZHVsZTouKiQvLFxuXHRcdC9eQ2F0ZWdvcnk6LiokLyxcblx0XHQvXlRlbXBsYXRlOi4qJC8sXG5cdFx0L15TcGVjaWFsOi4qJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanMkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5jc3MkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qc29uJC8sXG5cdF07XG5cdGNvbnN0IHNldHRpbmdzX3NwYW5fY29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJyk7XG5cdGNvbnN0IFtzZXR0aW5nc19zcGFuXSA9IHNldHRpbmdzX3NwYW5fY29sbGVjdGlvbjtcblx0Y29uc3QgcGFnZV9zZXR0aW5ncyA9IHNldHRpbmdzX3NwYW4gPyBuZXcgUGFyZV9zdHIoc2V0dGluZ3Nfc3Bhbi5pbm5lckhUTUwpIDogbmV3IFBhcmVfc3RyKCcnKTtcblx0aWYgKHBhZ2Vfc2V0dGluZ3MuZmluZCgnZGF0YS1pbml0JykgPT09ICcxJykge1xuXHRcdHNldHRpbmdzX3N0cmluZyA9IHNldHRpbmdzX3NwYW4uaW5uZXJIVE1MO1xuXHRcdHNldHRpbmdzID0gbmV3IFBhcmVfc3RyKHNldHRpbmdzX3N0cmluZyk7XG5cdH1cblx0Ly8gaWRlbnRpZnkgaWYgRWFzeSBBcmNoaXZlIGNhbiBiZSB1c2VkIG9uIHRoZSBwYWdlIC0gY29tcGF0aWJpbGl0eVxuXHRjb25zdCBvbl91c2VyX3RhbGsgPSB3Z05hbWVzcGFjZU51bWJlciA9PT0gMztcblx0Y29uc3QgbXlfdXNlcl90YWxrID1cblx0XHRvbl91c2VyX3RhbGsgJiZcblx0XHQoKCkgPT4ge1xuXHRcdFx0bGV0IHBhZ2VfbmFtZSA9IHdnUGFnZU5hbWUuc3BsaXQoJzonKTtcblx0XHRcdHBhZ2VfbmFtZVswXSA9ICcnO1xuXHRcdFx0cGFnZV9uYW1lID0gcGFnZV9uYW1lLmpvaW4oJycpO1xuXHRcdFx0W3BhZ2VfbmFtZV0gPSBwYWdlX25hbWUuc3BsaXQoJy8nKTtcblx0XHRcdGNvbnN0IHVzZXJfbmFtZSA9IHdnVXNlck5hbWU7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHR1c2VyX25hbWUuc3BsaXQoJ18nKS5qb2luKCcnKS5zcGxpdCgnICcpLmpvaW4oJycpID09PSBwYWdlX25hbWUuc3BsaXQoJ18nKS5qb2luKCcnKS5zcGxpdCgnICcpLmpvaW4oJycpXG5cdFx0XHQpO1xuXHRcdH0pKCk7XG5cdGNvbnN0IGhhc190ZW1wbGF0ZSA9IHBhZ2Vfc2V0dGluZ3MuZmluZCgnZGF0YS1pbml0JykgPT09ICcxJztcblx0Y29uc3Qgb3RoZXJzX3VzZXJfdGFsayA9IG15X3VzZXJfdGFsayA9PT0gZmFsc2UgJiYgb25fdXNlcl90YWxrID09PSB0cnVlO1xuXHRjb25zdCBvbl9hcnRpY2xlID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDA7XG5cdGNvbnN0IG9uX2hpc3RfdmVyc2lvbiA9IHdnQ3VyUmV2aXNpb25JZCAtIHdnUmV2aXNpb25JZCAhPT0gMDtcblx0Y29uc3QgYXJjX3N1bSA9IG1lc3NhZ2UoJ2FyY2hpdmVfc3VtbWFyeScpO1xuXHRjb25zdCBkZWxfc3VtID0gbWVzc2FnZSgnZGVsZXRlX3N1bW1hcnknKTtcblx0bGV0IHNlY3Rpb25fY291bnQ7XG5cdGNvbnN0IHNhbml0aXplX2h0bWwgPSAoc3RyaW5nKSA9PiB7XG5cdFx0cmV0dXJuIHN0cmluZ1xuXHRcdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdFx0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcblx0fTtcblx0Ly8gbXVsdGkgbGFuZ3VhZ2Ugc2VsZWN0b3IgZGVmaW5pdGlvblxuXHRjb25zdCBtZXNzYWdlID0gKHRhZywgcGFyYV9saXN0KSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBjb250ZW50ID0gZ2V0TWVzc2FnZSh0YWcpO1xuXHRcdFx0Zm9yIChsZXQgaGFzX3VuZnVsZmlsbGVkX3BhcmEgPSB0cnVlLCBpID0gMDsgaGFzX3VuZnVsZmlsbGVkX3BhcmE7IGkrKykge1xuXHRcdFx0XHRjb25zdCBzZWFyY2ggPSBgJCR7aSArIDF9YDtcblx0XHRcdFx0aWYgKGNvbnRlbnQuaW5jbHVkZXMoc2VhcmNoKSkge1xuXHRcdFx0XHRcdGNvbnRlbnQgPSBwYXJhX2xpc3RbaV0gPyBjb250ZW50LnNwbGl0KHNlYXJjaCkuam9pbihwYXJhX2xpc3RbaV0pIDogY29udGVudC5zcGxpdChzZWFyY2gpLmpvaW4oJycpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGhhc191bmZ1bGZpbGxlZF9wYXJhID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICcoISkgdW5kZWZpbmVkIGxhbmd1YWdlIGNvbnRlbnQnO1xuXHRcdH1cblx0fTtcblx0Y29uc3Qgbm9taW5hbF9zZWN0aW9ucyA9ICgoY291bnQpID0+IHtcblx0XHRjb25zdCBhcnIgPSBBcnJheS5mcm9tKHtcblx0XHRcdGxlbmd0aDogY291bnQsXG5cdFx0fSk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdFx0XHRhcnJbaV0gPSBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIGFycjtcblx0fSkoc2VjdGlvbl9jb3VudCk7XG5cdGNvbnN0IGFjdHVhbF9zZWN0aW9uID0gKG5vbWluYWxfc2VjdGlvbl9udW1iZXIpID0+IHtcblx0XHRsZXQgbGVzcyA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBub21pbmFsX3NlY3Rpb25fbnVtYmVyOyBpKyspIHtcblx0XHRcdGlmIChub21pbmFsX3NlY3Rpb25zW2ldID09PSB0cnVlKSB7XG5cdFx0XHRcdGxlc3MrKztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG5vbWluYWxfc2VjdGlvbl9udW1iZXIgLSBsZXNzO1xuXHR9O1xuXHQvLyAuLi4gaW50ZXJmYWNlIGRvbmVcblx0Ly8gYXJjaGl2aW5nIGxvZ2ljIGluamVjdGlvblxuXHRjb25zdCByZXBvcnRfZG9uZW5lc3NfdWkgPSAoc2VjdGlvbl9udW1iZXIsIGRvbmVuZXNzX3R5cGUsIHRvLCBvbmdvaW5nX29yX2RvbmUpID0+IHtcblx0XHRsZXQgdGFnX2Rpbmc7XG5cdFx0bGV0IHRhZ19zZWN0aW9uO1xuXHRcdGxldCBkaW5nX3R5cGU7XG5cdFx0bGV0IGRpbmdfYXV0b2hpZGU7XG5cdFx0aWYgKG9uZ29pbmdfb3JfZG9uZSA9PT0gJ29uZ29pbmcnKSB7XG5cdFx0XHRkaW5nX3R5cGUgPSAnaW5mbyc7XG5cdFx0XHRkaW5nX2F1dG9oaWRlID0gdHJ1ZTtcblx0XHRcdGlmIChkb25lbmVzc190eXBlID09PSAnZGVsZXRlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdkZWxldGluZ19zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdiZWluZ19kZWxldGVkJztcblx0XHRcdH0gZWxzZSBpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2FyY2hpdmUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2xvYWRpbmdfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYmVpbmdfYXJjaGl2ZWQnO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAob25nb2luZ19vcl9kb25lID09PSAnZG9uZScpIHtcblx0XHRcdGRpbmdfdHlwZSA9ICdzdWNjZXNzJztcblx0XHRcdGRpbmdfYXV0b2hpZGUgPSBmYWxzZTtcblx0XHRcdGlmIChkb25lbmVzc190eXBlID09PSAnZGVsZXRlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdkb25lX2RlbGV0aW5nX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2FscmVhZHlfZGVsZXRlZCc7XG5cdFx0XHR9IGVsc2UgaWYgKGRvbmVuZXNzX3R5cGUgPT09ICdhcmNoaXZlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdkb25lX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2FscmVhZHlfYXJjaGl2ZWQnO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBhY3Rpb25zID0ge1xuXHRcdFx0ZGluZzogKCkgPT4ge1xuXHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBtZXNzYWdlKHRhZ19kaW5nLCBbc2VjdGlvbl9udW1iZXIudG9TdHJpbmcoKSwgdG9dKSxcblx0XHRcdFx0XHRcdGNsb3NlOiAhZGluZ19hdXRvaGlkZSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiBkaW5nX2F1dG9oaWRlID8gMzAwMCA6IC0xLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZGluZ190eXBlXG5cdFx0XHRcdCk7XG5cdFx0XHR9LFxuXHRcdFx0c2VjdGlvbl9saW5rOiAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWFzeS1hcmNoaXZlLXNlY3Rpb24taWQtc3Bhbi1vcmRlci0ke3NlY3Rpb25fbnVtYmVyfWApO1xuXHRcdFx0XHRjb25zdCBwbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAtIDI7IGkrKykge1xuXHRcdFx0XHRcdHBub2RlLmNoaWxkTm9kZXNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRub2RlLmlubmVySFRNTCA9IG1lc3NhZ2UodGFnX3NlY3Rpb24pO1xuXHRcdFx0XHRub2RlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblx0XHRcdFx0bm9kZS5zdHlsZS5jb2xvciA9ICdyZ2IoMCAwIDAvLjUpJztcblx0XHRcdH0sXG5cdFx0fTtcblx0XHRyZXR1cm4gYWN0aW9ucztcblx0fTtcblx0Y29uc3QgZGVsZXRlX3NlY3Rpb25fY29yZSA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCBhY3R1YWxfc2VjdGlvbl9udW1iZXIgPSBhY3R1YWxfc2VjdGlvbihzZWN0aW9uX251bWJlcik7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdvbmdvaW5nJykuZGluZygpO1xuXHRcdGV4cG9zZS5kZWxldGVfc2VjdGlvbihcblx0XHRcdHdnUGFnZU5hbWUsXG5cdFx0XHRhY3R1YWxfc2VjdGlvbl9udW1iZXIsXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2RlbGV0ZScsICcnLCAnZG9uZScpLmRpbmcoKTtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdkb25lJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0XHRcdG5vbWluYWxfc2VjdGlvbnNbc2VjdGlvbl9udW1iZXJdID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRkZWxfc3VtXG5cdFx0KTtcblx0fTtcblx0Y29uc3QgZGVsZXRlX3NlY3Rpb24gPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdvbmdvaW5nJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0ZGVsZXRlX3NlY3Rpb25fY29yZShzZWN0aW9uX251bWJlciwgX25vbWluYWwpO1xuXHR9O1xuXHRjb25zdCBhcmNoaXZlX3NlY3Rpb25fY29yZSA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCBhY3R1YWxfc2VjdGlvbl9udW1iZXIgPSBhY3R1YWxfc2VjdGlvbihzZWN0aW9uX251bWJlcik7XG5cdFx0Y29uc3QgdG8gPSBzZXR0aW5ncy5maW5kKCdhcmMtbG9jJyk7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnb25nb2luZycpLmRpbmcoKTtcblx0XHRleHBvc2UuYXJjaGl2ZV9zZWN0aW9uKFxuXHRcdFx0d2dQYWdlTmFtZSxcblx0XHRcdGFjdHVhbF9zZWN0aW9uX251bWJlcixcblx0XHRcdHRvLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdkb25lJykuZGluZygpO1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdkb25lJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0XHRcdG5vbWluYWxfc2VjdGlvbnNbc2VjdGlvbl9udW1iZXJdID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRhcmNfc3VtXG5cdFx0KTtcblx0fTtcblx0Y29uc3QgYXJjaGl2ZV9zZWN0aW9uID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdGNvbnN0IHRvID0gc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpO1xuXHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ29uZ29pbmcnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRhcmNoaXZlX3NlY3Rpb25fY29yZShzZWN0aW9uX251bWJlciwgX25vbWluYWwpO1xuXHR9O1xuXHRjb25zdCBlbGFib3JhdGVfbm90aWNlID0gKG5vdGljZV90YWdfbmFtZSkgPT4ge1xuXHRcdC8vIGFjcm9ueW0gc2NoZW1lOiByZWZlciB0byBxd2VydHkga2V5Ym9hcmQgbGF5b3V0LiAocD05KVxuXHRcdGNvbnN0IG5vdGljZV90YWdfZGljdGlvbmFyeSA9IHtcblx0XHRcdHBsZWFzZV9lbmFibGVfZWxhYm9yYXRlOiBbJ3BsZWFzZV9lbmFibGVfZWxhYm9yYXRlJ10sXG5cdFx0XHRvdGhlcnNfdGFsa19lbGFib3JhdGU6IFsnb3RoZXJzX3RhbGtfZWxhYm9yYXRlJ10sXG5cdFx0XHRlbmFibGVfb25fZ2VuZXJpY19wYWdlOiBbJ2VuYWJsZV9vbl9nZW5lcmljX3BhZ2UnXSxcblx0XHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2U6IFtcblx0XHRcdFx0J3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UnLFxuXHRcdFx0XHQnd2FybmluZycsXG5cdFx0XHRcdCdsb25nJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFtzYW5pdGl6ZV9odG1sKHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSldLFxuXHRcdFx0XSxcblx0XHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZTogW1xuXHRcdFx0XHQncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlJyxcblx0XHRcdFx0J3dhcm5pbmcnLFxuXHRcdFx0XHQnbG9uZycsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRbc2FuaXRpemVfaHRtbChzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpXSxcblx0XHRcdF0sXG5cdFx0XHRwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlOiBbJ3BhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGUnXSxcblx0XHR9O1xuXHRcdGNvbnN0IG5vdGljZV9zZXQgPSBub3RpY2VfdGFnX2RpY3Rpb25hcnlbbm90aWNlX3RhZ19uYW1lXSB8fCBmYWxzZTtcblx0XHRpZiAobm90aWNlX3NldCAhPT0gZmFsc2UpIHtcblx0XHRcdGNvbnN0IFtudGFnLCBudHlwZSwgbnR0bCwgbnBlcnNpc3QsIG5zdWJzdF0gPSBub3RpY2Vfc2V0O1xuXHRcdFx0Y29uc3QgdG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bm9kZTogc3BhbihtZXNzYWdlKG50YWcsIG5zdWJzdCkpLFxuXHRcdFx0XHRcdGNsb3NlOiBudHRsID09PSAnbG9uZycsXG5cdFx0XHRcdFx0ZHVyYXRpb246IG50dGwgPT09ICdsb25nJyA/IC0xIDogbnR0bCxcblx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAobnBlcnNpc3QpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRudHlwZVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdC8vIHJlYWwgZGVhbCBoZXJlXG5cdC8vIGludGVyZmFjZSBpbmplY3Rpb24gLSBwcmVwYXJlXG5cdGNvbnN0IHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9pbmhpYml0ID0gc2V0dGluZ3MuZmluZCgnc2VjLWRlbCcpID09PSAnMCcgfHwgc2V0dGluZ3MuZmluZCgnZGF0YS1pbml0JykgPT09ICcwJztcblx0Y29uc3Qgc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9pbmhpYml0ID0gc2V0dGluZ3MuZmluZCgnc2VjLWFyYycpID09PSAnMCcgfHwgc2V0dGluZ3MuZmluZCgnZGF0YS1pbml0JykgPT09ICcwJztcblx0Y29uc3Qgc2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlID0gZW1wdHlFbGVtZW50KCk7XG5cdGNvbnN0IHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2UgPSBlbXB0eUVsZW1lbnQoKTtcblx0bGV0IGZvb3Rlcl9pbmZvX2VsZTtcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpLmxlbmd0aCkge1xuXHRcdFtmb290ZXJfaW5mb19lbGVdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChPUFRJT05TLm1vdW50UG9pbnRTZWxlY3Rvcik7XG5cdH0gZWxzZSB7XG5cdFx0Zm9vdGVyX2luZm9fZWxlID0gZW1wdHlFbGVtZW50KCk7XG5cdH1cblx0Ly8gLi4uIGludGVyZmFjZSBpbmplY3Rpb24gLSBsb2dpY1xuXHRjb25zdCBpc19pbl9ibGFja2xpc3QgPSAoYmxhY2tsaXN0KSA9PiB7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGJsYWNrbGlzdCkge1xuXHRcdFx0aWYgKGVsZW1lbnQudGVzdCh3Z1BhZ2VOYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRpZiAob25fYXJ0aWNsZSB8fCBvbl9oaXN0X3ZlcnNpb24pIHtcblx0XHRyZXR1cm47IC8vIGluc2VydCBubyBpbnRlcmZhY2Ugb24gYW4gYXJ0aWNsZSBwYWdlIG9yIGEgaGlzdG9yeSB2ZXJzaW9uLlxuXHR9XG5cdGlmIChpc19pbl9ibGFja2xpc3QobmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4KSkge1xuXHRcdHJldHVybjsgLy8gaW5zZXJ0IG5vIGludGVyZmFjZSBpZiB0aGUgcGFnZSBuYW1lIGlzIGJsYWNrbGlzdGVkLlxuXHR9XG5cdGlmIChpc19pbl9ibGFja2xpc3QoZGlzX3N1cHBvcnRfdGhlc2VfcGFnZXNfcmVnZXgpKSB7XG5cdFx0Ly8gaW5zZXJ0IG5vdCBzdXBwb3J0ZWQgbm90aWNlIGlmIHRoZSBwYWdlIG5hbWUgaW5kaWNhdGVzIHRoYXQgaXQgaXMgbm90IHN1cHBvcnRlZC5cblx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChcblx0XHRcdGVsZW1lbnRXcmFwKFxuXHRcdFx0XHQnZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UnLFxuXHRcdFx0XHRvbkNsaWNrV3JhcChtZXNzYWdlKCdwYWdlX25vdF9zdXBwb3J0ZWQnKSwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRlbGFib3JhdGVfbm90aWNlKCdwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fSBlbHNlIGlmICh3Z1BhZ2VOYW1lID09PSBzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpIHtcblx0XHRlbGFib3JhdGVfbm90aWNlKCdwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2UnKTtcblx0fSBlbHNlIGlmIChoYXNfdGVtcGxhdGUgJiYgIW90aGVyc191c2VyX3RhbGspIHtcblx0XHQvLyBhbnkgcGFnZSB0aGF0IGhhcyB0ZW1wbGF0ZSB0aGF0J3Mgbm90IG90aGVycycgdGFsayBwYWdlLiBmdW5jdGlvbiBub3JtYWxseS5cblx0XHQvLyAhISB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBpbiBtYWluIHNwYWNlIGFuZCBuZWVkcyBhdHRlbnRpb24gISFcblx0XHRpZiAoLy4rOi4rLy50ZXN0KHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSkgIT09IHRydWUpIHtcblx0XHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UnKTtcblx0XHR9XG5cdFx0Y29uc3Qgbm9ybWFsX2Z1bmN0aW9uX2luamVjdF9pbnRlcmZhY2UgPSAoKSA9PiB7XG5cdFx0XHRsZXQgaSA9IDA7XG5cdFx0XHRsZXQgaiA9IDA7XG5cdFx0XHRjb25zdCBlZGl0U2VjdGlvbkNvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXctZWRpdHNlY3Rpb246bm90KC5tdy1lZGl0c2VjdGlvbi1zZWN0aW9uLTApJyk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgZWRpdFNlY3Rpb25Db2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGVsZSA9IGVkaXRTZWN0aW9uQ29sbGVjdGlvbltpXTtcblx0XHRcdFx0Y29uc3QgdmUgPSAvWyY/XXZlYWN0aW9uPWVkaXQvLnRlc3QoZWxlLmNoaWxkTm9kZXNbMV0uaHJlZik7XG5cdFx0XHRcdGNvbnN0IGNoaWxkX25vZGVfbnVtYmVyID0gdmUgPyAzIDogMTtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGVsZS5wYXJlbnROb2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2gyJyAmJlxuXHRcdFx0XHRcdGVsZS5wYXJlbnROb2RlLmlkICE9PSAnZmlyc3RIZWFkaW5nJyAmJlxuXHRcdFx0XHRcdGRlY29kZVVSSUNvbXBvbmVudChlbGUuY2hpbGROb2Rlc1tjaGlsZF9ub2RlX251bWJlcl0uaHJlZi5zcGxpdCgvWyY/XXRpdGxlPS8pWzFdLnNwbGl0KCcmJylbMF0pID09PVxuXHRcdFx0XHRcdFx0d2dQYWdlTmFtZVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWwgPSBOdW1iZXIucGFyc2VJbnQoXG5cdFx0XHRcdFx0XHRlbGUuY2hpbGROb2Rlc1tjaGlsZF9ub2RlX251bWJlcl0uaHJlZi5zcGxpdCgvWyY/XXNlY3Rpb249LylbMV0uc3BsaXQoJyYnKVswXSxcblx0XHRcdFx0XHRcdDEwXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjb25zdCBub21pbmFsID0gaSAtIGogKyAxO1xuXHRcdFx0XHRcdGlmICghc2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2luaGliaXQpIHtcblx0XHRcdFx0XHRcdHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZS5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdHBpcGVFbGVtZW50KCksXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2tXcmFwKFxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2UoJ2RlbGV0ZScpLFxuXHRcdFx0XHRcdFx0XHRcdChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHt0YXJnZXR9ID0gZXZlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkYXRhQWN0dWFsID0gdGFyZ2V0LmRhdGFzZXQuYWN0dWFsO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGF0YU5vbWluYWwgPSB0YXJnZXQuZGF0YXNldC5ub21pbmFsO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlX3NlY3Rpb24oZGF0YUFjdHVhbCwgZGF0YU5vbWluYWwpO1xuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0YWN0dWFsLFxuXHRcdFx0XHRcdFx0XHRcdG5vbWluYWxcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQpIHtcblx0XHRcdFx0XHRcdHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2UuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRwaXBlRWxlbWVudCgpLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrV3JhcChcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlKCdhcmNoaXZlJyksXG5cdFx0XHRcdFx0XHRcdFx0KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qge3RhcmdldH0gPSBldmVudDtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRhdGFBY3R1YWwgPSB0YXJnZXQuZGF0YXNldC5hY3R1YWw7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkYXRhTm9taW5hbCA9IHRhcmdldC5kYXRhc2V0Lm5vbWluYWw7XG5cdFx0XHRcdFx0XHRcdFx0XHRhcmNoaXZlX3NlY3Rpb24oZGF0YUFjdHVhbCwgZGF0YU5vbWluYWwpO1xuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0YWN0dWFsLFxuXHRcdFx0XHRcdFx0XHRcdG5vbWluYWxcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmFmdGVyKFxuXHRcdFx0XHRcdFx0c2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlLFxuXHRcdFx0XHRcdFx0c2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZSxcblx0XHRcdFx0XHRcdHNlY3Rpb25JZFNwYW5FbGVtZW50KG5vbWluYWwudG9TdHJpbmcoKSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGorKztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2VjdGlvbl9jb3VudCA9IGkgLSBqICsgMTtcblx0XHRcdGNvbnN0IGVhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UgPSBlbXB0eUVsZW1lbnQoKTtcblx0XHRcdGVhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UuYXBwZW5kKFxuXHRcdFx0XHRtZXNzYWdlKCdzdXBwb3J0cycpLFxuXHRcdFx0XHRtZXNzYWdlKCdsZWZ0X3Bhcl9zcGxpdCcpLFxuXHRcdFx0XHRtZXNzYWdlKCdhcmNoaXZlX3BhdGhfY29sb25fc3BsaXQnKSxcblx0XHRcdFx0bGlua1dyYXAoc2FuaXRpemVfaHRtbChzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpLCBgL3dpa2kvJHtzYW5pdGl6ZV9odG1sKHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSl9YCksXG5cdFx0XHRcdG1lc3NhZ2UoJ3JpZ2h0X3BhcicpLFxuXHRcdFx0XHRtZXNzYWdlKCdwZXJpb2QnKVxuXHRcdFx0KTtcblx0XHRcdGZvb3Rlcl9pbmZvX2VsZS5wcmVwZW5kKGVsZW1lbnRXcmFwKCdlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlJywgZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZSkpO1xuXHRcdH07XG5cdFx0bm9ybWFsX2Z1bmN0aW9uX2luamVjdF9pbnRlcmZhY2UoKTtcblx0fSBlbHNlIGlmIChvdGhlcnNfdXNlcl90YWxrID09PSB0cnVlKSB7XG5cdFx0Ly8gb3RoZXJzIHVzZXIgdGFsay5cblx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChcblx0XHRcdGVsZW1lbnRXcmFwKCdlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZScpLFxuXHRcdFx0b25DbGlja1dyYXAobWVzc2FnZSgnb3RoZXJzX3BhZ2UnKSwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ290aGVyc190YWxrX2VsYWJvcmF0ZScpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9IGVsc2UgaWYgKG15X3VzZXJfdGFsayA9PT0gZmFsc2UpIHtcblx0XHQvLyBhIGdlbmVyaWMgcGFnZSB0aGF0IGRpZCBub3QgZW5hYmxlIGVhc3kgYXJjaGl2ZS5cblx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChcblx0XHRcdGVsZW1lbnRXcmFwKFxuXHRcdFx0XHQnZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UnLFxuXHRcdFx0XHRvbkNsaWNrV3JhcChtZXNzYWdlKCd0b19lbmFibGUnKSwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRlbGFib3JhdGVfbm90aWNlKCdlbmFibGVfb25fZ2VuZXJpY19wYWdlJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHQvLyB0aGVuIGFzc2VydDogKG15X3VzZXJfdGFsayA9PT0gdHJ1ZSksIChoYXNfdGVtcGxhdGUgPT09IGZhbHNlKS5cblx0XHQvLyBteSB1c2VyIHRhbGsgLS0gaW5zdGFsbGVkIGVhc3kgYXJjaGl2ZSBidXQgbGFja2luZyB0ZW1wbGF0ZS5cblx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChcblx0XHRcdGVsZW1lbnRXcmFwKFxuXHRcdFx0XHQnZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UnLFxuXHRcdFx0XHRvbkNsaWNrV3JhcChtZXNzYWdlKCdwbGVhc2VfZW5hYmxlJyksIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZWxhYm9yYXRlX25vdGljZSgncGxlYXNlX2VuYWJsZV9lbGFib3JhdGUnKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLHFCQUFzQjtBQUN0QixJQUFBQyxVQUFXOztBQ0ZaLElBQUFDLG9CQUFrQ0MsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7QUFFbEMsSUFBTUMsY0FBY0EsQ0FBQ0MsSUFBWUMsaUJBQStCO0FBQy9ELFFBQU07SUFBQ0M7RUFBSSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRTdCLE1BQUlILFNBQVMsV0FBVztBQUN2QixXQUNDTixrQ0FBQVUsUUFBQUMsY0FBQyxXQUFBO01BQVFDLFdBQVcsQ0FBQyxpQkFBaUI7TUFBR1I7SUFBQSxHQUN2Q0MsWUFDRjtFQUVGLFdBQVcsQ0FBQyxVQUFVLGVBQWUsUUFBUSxFQUFFUSxTQUFTUCxJQUFJLEtBQUtRLFNBQVNDLGNBQWMsZ0JBQWdCLEdBQUc7QUFDMUcsV0FBT2Ysa0NBQUFVLFFBQUFDLGNBQUMsTUFBQTtNQUFHUDtJQUFBLEdBQVNDLFlBQWE7RUFDbEM7QUFDQSxTQUFPTCxrQ0FBQVUsUUFBQUMsY0FBQyxPQUFBO0lBQUlQO0VBQUEsR0FBU0MsWUFBYTtBQUNuQztBQUVBLElBQU1XLGVBQWVBLElBQUlYLGlCQUFpQ0wsa0NBQUFVLFFBQUFDLGNBQUFYLGtCQUFBVSxRQUFBTyxVQUFBLE1BQUcsQ0FBQyxHQUFHWixZQUFZLENBQUU7QUFFL0UsSUFBTWEsV0FBV0EsQ0FBQ0MsYUFBcUJDLFNBQWlCcEIsa0NBQUFVLFFBQUFDLGNBQUMsS0FBQTtFQUFFUztF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eUJBQXlCO0lBQzNDLENBQUMsQ0FDRixDQUNEO0VBQ0Q7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJtb3VudFBvaW50U2VsZWN0b3IiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiZWxlbWVudFdyYXAiLCAiaWQiLCAiaW5uZXJFbGVtZW50IiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZW1wdHlFbGVtZW50IiwgIkZyYWdtZW50IiwgImxpbmtXcmFwIiwgInRleHRDb250ZW50IiwgImhyZWYiLCAib25DbGlja1dyYXAiLCAib25DbGljayIsICJkYXRhQWN0dWFsIiwgImRhdGFOb21pbmFsIiwgInBpcGVFbGVtZW50IiwgImNsYXNzIiwgInNlY3Rpb25JZFNwYW5FbGVtZW50IiwgImNvbmNhdCIsICJzdHlsZSIsICJkaXNwbGF5IiwgInNwYW4iLCAiaW5uZXJIVE1MIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRJMThuTWVzc2FnZXMiLCAiZGVsZXRlIiwgImxvY2FsaXplIiwgImVuIiwgImFyY2hpdmUiLCAic3VwcG9ydHMiLCAib3RoZXJzX3BhZ2UiLCAidG9fZW5hYmxlIiwgImVuYWJsZV9vbl9nZW5lcmljX3BhZ2UiLCAicGxlYXNlX2VuYWJsZSIsICJwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZSIsICJsZWZ0X3Bhcl9zcGxpdCIsICJ6aCIsICJyaWdodF9wYXIiLCAicGVyaW9kIiwgImFyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdCIsICJsb2FkaW5nX3NlY3Rpb25faSIsICJkZWxldGluZ19zZWN0aW9uX2kiLCAiZG9uZV9zZWN0aW9uX2kiLCAiZG9uZV9kZWxldGluZ19zZWN0aW9uX2kiLCAiYmVpbmdfYXJjaGl2ZWQiLCAiYmVpbmdfZGVsZXRlZCIsICJhbHJlYWR5X2FyY2hpdmVkIiwgImFscmVhZHlfZGVsZXRlZCIsICJvdGhlcnNfdGFsa19lbGFib3JhdGUiLCAicGFnZV9ub3Rfc3VwcG9ydGVkIiwgInBhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGUiLCAicHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZSIsICJwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2UiLCAiYXJjaGl2ZV9zdW1tYXJ5IiwgImRlbGV0ZV9zdW1tYXJ5IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZWFzeUFyY2hpdmVXcmFwIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dVc2VyTmFtZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dSZXZpc2lvbklkIiwgIlBhcmVfc3RyIiwgImNvbnN0cnVjdG9yIiwgInBhcmVfc3RyaW5nIiwgInN0ciIsICJsZWZ0IiwgImRlbGltIiwgInJpZ2h0IiwgIlN0cmluZyIsICJsZW5ndGgiLCAidGVzdCIsICJzbGljZSIsICJTeW50YXhFcnJvciIsICJmaW5kIiwgImxvb2t1cF9rZXkiLCAic3BsaXQiLCAiZXhwb3NlIiwgImFzeW5jUG9zdCIsICJwYXJhbSIsICJjYWxsYmFjayIsICJwb3N0V2l0aFRva2VuIiwgInRoZW4iLCAiZ2V0UGFnZSIsICJ0aXRsZSIsICJhY3Rpb24iLCAicHJvcCIsICJydnByb3AiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgImdldFBhZ2VTZWN0aW9uIiwgInNlY3Rpb24iLCAicnZzZWN0aW9uIiwgInBpY2tQYWdlQ29udGVudCIsICJkYXRhIiwgInF1ZXJ5IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJjb250ZW50IiwgInRlbGxQYWdlRXhpc3QiLCAibWlzc2luZyIsICJlZGl0IiwgInRleHQiLCAic3VtbWFyeSIsICJlZGl0QXBwZW5kIiwgInBhZ2UiLCAiYWRkZWRfY29udGVudCIsICJvcmlnaW5hbF9jb250ZW50IiwgImFyY2hpdmVTZWN0aW9uIiwgInRhcmdldFRpdGxlIiwgInRvU3RyaW5nIiwgImRlbGV0ZVNlY3Rpb24iLCAiYXJjaGl2ZV9zZWN0aW9uIiwgImRlbGV0ZV9zZWN0aW9uIiwgInNldHRpbmdzX3N0cmluZyIsICJzZXR0aW5ncyIsICJuZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXgiLCAiZGlzX3N1cHBvcnRfdGhlc2VfcGFnZXNfcmVnZXgiLCAic2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAic2V0dGluZ3Nfc3BhbiIsICJwYWdlX3NldHRpbmdzIiwgIm9uX3VzZXJfdGFsayIsICJteV91c2VyX3RhbGsiLCAicGFnZV9uYW1lIiwgImpvaW4iLCAidXNlcl9uYW1lIiwgImhhc190ZW1wbGF0ZSIsICJvdGhlcnNfdXNlcl90YWxrIiwgIm9uX2FydGljbGUiLCAib25faGlzdF92ZXJzaW9uIiwgImFyY19zdW0iLCAibWVzc2FnZSIsICJkZWxfc3VtIiwgInNlY3Rpb25fY291bnQiLCAic2FuaXRpemVfaHRtbCIsICJzdHJpbmciLCAicmVwbGFjZSIsICJ0YWciLCAicGFyYV9saXN0IiwgImhhc191bmZ1bGZpbGxlZF9wYXJhIiwgImkiLCAic2VhcmNoIiwgIm5vbWluYWxfc2VjdGlvbnMiLCAiY291bnQiLCAiYXJyIiwgIkFycmF5IiwgImZyb20iLCAiYWN0dWFsX3NlY3Rpb24iLCAibm9taW5hbF9zZWN0aW9uX251bWJlciIsICJsZXNzIiwgInJlcG9ydF9kb25lbmVzc191aSIsICJzZWN0aW9uX251bWJlciIsICJkb25lbmVzc190eXBlIiwgInRvIiwgIm9uZ29pbmdfb3JfZG9uZSIsICJ0YWdfZGluZyIsICJ0YWdfc2VjdGlvbiIsICJkaW5nX3R5cGUiLCAiZGluZ19hdXRvaGlkZSIsICJhY3Rpb25zIiwgImRpbmciLCAidG9hc3RpZnkiLCAiY2xvc2UiLCAiZHVyYXRpb24iLCAic2VjdGlvbl9saW5rIiwgIm5vZGUiLCAicG5vZGUiLCAicGFyZW50Tm9kZSIsICJjaGlsZE5vZGVzIiwgImNvbG9yIiwgImRlbGV0ZV9zZWN0aW9uX2NvcmUiLCAiX25vbWluYWwiLCAiYWN0dWFsX3NlY3Rpb25fbnVtYmVyIiwgImFyY2hpdmVfc2VjdGlvbl9jb3JlIiwgImVsYWJvcmF0ZV9ub3RpY2UiLCAibm90aWNlX3RhZ19uYW1lIiwgIm5vdGljZV90YWdfZGljdGlvbmFyeSIsICJub3RpY2Vfc2V0IiwgIm50YWciLCAibnR5cGUiLCAibnR0bCIsICJucGVyc2lzdCIsICJuc3Vic3QiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAic2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2luaGliaXQiLCAic2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9pbmhpYml0IiwgInNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZSIsICJzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlIiwgImZvb3Rlcl9pbmZvX2VsZSIsICJpc19pbl9ibGFja2xpc3QiLCAiYmxhY2tsaXN0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJwcmVwZW5kIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgIm5vcm1hbF9mdW5jdGlvbl9pbmplY3RfaW50ZXJmYWNlIiwgImoiLCAiZWRpdFNlY3Rpb25Db2xsZWN0aW9uIiwgImVsZSIsICJ2ZSIsICJjaGlsZF9ub2RlX251bWJlciIsICJ0YWdOYW1lIiwgInRvTG93ZXJDYXNlIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJhY3R1YWwiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgIm5vbWluYWwiLCAiYXBwZW5kIiwgInRhcmdldCIsICJkYXRhc2V0IiwgImFmdGVyIiwgImVhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UiXQp9Cg==
