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
(function easyArchiveWrap(_window$easy_archive, _window$easy_archive$, _window$easy_archive$2, _window$easy_archive$3) {
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
  window.easy_archive.on_user_talk = wgNamespaceNumber === 3;
  window.easy_archive.my_user_talk = window.easy_archive.on_user_talk && (() => {
    let page_name = wgPageName.split(":");
    page_name[0] = "";
    page_name = page_name.join("");
    [page_name] = page_name.split("/");
    const user_name = wgUserName;
    return user_name.split("_").join("").split(" ").join("") === page_name.split("_").join("").split(" ").join("");
  })();
  window.easy_archive.has_template = settings.find("data-init") === "1";
  window.easy_archive.others_user_talk = window.easy_archive.my_user_talk === false && window.easy_archive.on_user_talk === true;
  window.easy_archive.on_article = wgNamespaceNumber === 0;
  window.easy_archive.on_hist_version = wgCurRevisionId - wgRevisionId !== 0;
  const arc_sum = (_window$easy_archive$2 = window.easy_archive.user_custom_archive_summary) !== null && _window$easy_archive$2 !== void 0 ? _window$easy_archive$2 : null;
  const del_sum = (_window$easy_archive$3 = window.easy_archive.user_custom_delete_summary) !== null && _window$easy_archive$3 !== void 0 ? _window$easy_archive$3 : null;
  const sanitize_html = (string) => {
    return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
  };
  const message = (tag, para_list) => {
    try {
      let content = getMessage(tag);
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
    expose.delete_section(wgPageName, actual_section_number, () => {
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
    expose.archive_section(wgPageName, actual_section_number, to, () => {
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
  let i = 0;
  let j = 0;
  let ele;
  let nominal;
  let actual;
  const section_delete_interface_inhibit = window.easy_archive.settings.find("sec-del") === "0" || window.easy_archive.settings.find("data-init") === "0";
  const section_archive_interface_inhibit = window.easy_archive.settings.find("sec-arc") === "0" || window.easy_archive.settings.find("data-init") === "0";
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
  if (window.easy_archive.on_article || window.easy_archive.on_hist_version) {
    return;
  }
  if (is_in_blacklist(window.easy_archive.never_enable_on_these_pages_regex)) {
    return;
  }
  if (is_in_blacklist(window.easy_archive.dis_support_these_pages_regex)) {
    footer_info_ele.prepend(elementWrap("easy_archive_enable_notice", onClickWrap(message("page_not_supported"), (event) => {
      event.preventDefault();
      window.easy_archive.elaborate_notice("page_not_supported_elaborate");
    })));
  } else if (wgPageName === window.easy_archive.settings.find("arc-loc")) {
    window.easy_archive.elaborate_notice("problem_with_archive_location_same_page");
  } else if (window.easy_archive.has_template && !window.easy_archive.others_user_talk) {
    if (/.+:.+/.test(window.easy_archive.settings.find("arc-loc")) !== true) {
      window.easy_archive.elaborate_notice("problem_with_archive_location_main_space");
    }
    const normal_function_inject_interface = () => {
      const editSectionCollection = document.querySelectorAll(".mw-editsection:not(.mw-editsection-section-0)");
      for (i = 0; i < editSectionCollection.length; i++) {
        ele = editSectionCollection[i];
        const ve = /[&?]veaction=edit/.test(ele.childNodes[1].href);
        const child_node_number = ve ? 3 : 1;
        if (ele.parentNode.tagName.toLowerCase() === "h2" && ele.parentNode.id !== "firstHeading" && decodeURIComponent(ele.childNodes[child_node_number].href.split(/[&?]title=/)[1].split("&")[0]) === wgPageName) {
          actual = Number.parseInt(ele.childNodes[child_node_number].href.split(/[&?]section=/)[1].split("&")[0], 10);
          nominal = i - j + 1;
          if (!section_delete_interface_inhibit) {
            section_delete_interface.append(pipeElement(), onClickWrap(message("delete"), (event) => {
              event.preventDefault();
              const {
                target
              } = event;
              const dataActual = target.dataset.actual;
              const dataNominal = target.dataset.nominal;
              window.easy_archive.delete_section(dataActual, dataNominal);
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
              window.easy_archive.archive_section(dataActual, dataNominal);
            }, actual, nominal));
          }
          ele.childNodes[child_node_number].after(section_delete_interface, section_archive_interface, sectionIdSpanElement(nominal.toString()));
        } else {
          j++;
        }
      }
      window.easy_archive.section_count = i - j + 1;
      const easy_archive_supports_notice = emptyElement();
      easy_archive_supports_notice.append(message("supports"), message("left_par_split"), message("archive_path_colon_split"), linkWrap(sanitize_html(window.easy_archive.settings.find("arc-loc")), "/wiki/".concat(sanitize_html(window.easy_archive.settings.find("arc-loc")))), message("right_par"), message("period"));
      footer_info_ele.prepend(elementWrap("easy_archive_supports_notice", easy_archive_supports_notice));
    };
    normal_function_inject_interface();
  } else if (window.easy_archive.others_user_talk === true) {
    footer_info_ele.prepend(elementWrap("easy_archive_enable_notice"), onClickWrap(message("others_page"), (event) => {
      event.preventDefault();
      window.easy_archive.elaborate_notice("others_talk_elaborate");
    }));
  } else if (window.easy_archive.my_user_talk === false) {
    footer_info_ele.prepend(elementWrap("easy_archive_enable_notice", onClickWrap(message("to_enable"), (event) => {
      event.preventDefault();
      window.easy_archive.elaborate_notice("enable_on_generic_page");
    })));
  } else {
    footer_info_ele.prepend(elementWrap("easy_archive_enable_notice", onClickWrap(message("please_enable"), (event) => {
      event.preventDefault();
      window.easy_archive.elaborate_notice("please_enable_elaborate");
    })));
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9yZWFjdC50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiNC4wXCJcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9IChpZDogc3RyaW5nLCBpbm5lckVsZW1lbnQ6IFJlYWN0RWxlbWVudCkgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHNraW4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1sncGFnZS1pbmZvX19pdGVtJ119IGlkPXtpZH0+XG5cdFx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fSBlbHNlIGlmIChbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBpZD17aWR9Pntpbm5lckVsZW1lbnR9PC9saT47XG5cdH1cblx0cmV0dXJuIDxkaXYgaWQ9e2lkfT57aW5uZXJFbGVtZW50fTwvZGl2Pjtcbn07XG5cbmNvbnN0IGVtcHR5RWxlbWVudCA9ICguLi5pbm5lckVsZW1lbnQ6IFJlYWN0RWxlbWVudFtdKSA9PiA8PntbLi4uaW5uZXJFbGVtZW50XX08Lz47XG5cbmNvbnN0IGxpbmtXcmFwID0gKHRleHRDb250ZW50OiBzdHJpbmcsIGhyZWY6IHN0cmluZykgPT4gPGEgaHJlZj17aHJlZn0gdGV4dENvbnRlbnQ9e3RleHRDb250ZW50fSAvPjtcblxuY29uc3Qgb25DbGlja1dyYXAgPSAodGV4dENvbnRlbnQ6IHN0cmluZywgb25DbGljazogKCkgPT4gdm9pZCwgZGF0YUFjdHVhbD86IHN0cmluZywgZGF0YU5vbWluYWw/OiBzdHJpbmcpID0+IChcblx0PGEgb25DbGljaz17b25DbGlja30gdGV4dENvbnRlbnQ9e3RleHRDb250ZW50fSBkYXRhLWFjdHVhbD17ZGF0YUFjdHVhbH0gZGF0YS1ub21pbmFsPXtkYXRhTm9taW5hbH0gLz5cbik7XG5cbmNvbnN0IHBpcGVFbGVtZW50ID0gKCkgPT4gPHNwYW4gY2xhc3M9XCJtdy1lZGl0c2VjdGlvbi1kaXZpZGVyXCIgdGV4dENvbnRlbnQ9eyd8J30gLz47XG5cbmNvbnN0IHNlY3Rpb25JZFNwYW5FbGVtZW50ID0gKGlkOiBzdHJpbmcpID0+IChcblx0PHNwYW5cblx0XHRjbGFzcz17WydlYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuJywgYGVhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4tb3JkZXItJHtpZH1gXX1cblx0XHRzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319XG5cdD5cblx0XHRzZWN0aW9uXG5cdDwvc3Bhbj5cbik7XG5cbmNvbnN0IHNwYW4gPSAoaW5uZXJIVE1MOiBzdHJpbmcpID0+IDxzcGFuIGlubmVySFRNTD17aW5uZXJIVE1MfSAvPjtcblxuZXhwb3J0IHtlbGVtZW50V3JhcCwgZW1wdHlFbGVtZW50LCBsaW5rV3JhcCwgb25DbGlja1dyYXAsIHBpcGVFbGVtZW50LCBzZWN0aW9uSWRTcGFuRWxlbWVudCwgc3Bhbn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBFYXN5QWNoaXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGRlbGV0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpCcsXG5cdFx0fSksXG5cdFx0YXJjaGl2ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpQnLFxuXHRcdH0pLFxuXHRcdHN1cHBvcnRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBlbmFibGVkIG9uIHRoaXMgdGFsayBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acrOiuqOiuuumhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUnLFxuXHRcdH0pLFxuXHRcdG90aGVyc19wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBub3QgZW5hYmxlZC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5piv5LuW5Lq655qE55So5oi36K6o6K666aG16Z2i77yM5Zug5q2k5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i54K65LuW5Lq655So5oi26KiO6KuW6aCB6Z2i77yM5pWF5LiN5pSv5o+0IEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdHRvX2VuYWJsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHVzaW5nIEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5rKh5pyJ5ZCv55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmnKzpoIHmsqHmnInllZ/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRlbmFibGVfb25fZ2VuZXJpY19wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3QgeW91ciB1c2VyIHRhbGsgcGFnZS4gSG93ZXZlciBFYXN5IEFyY2hpdmUgc3RpbGwgY2FuIGJlIHVzZWQgaWYgbmVlZGVkLlRvIGVuYWJsZSBpdCwgYWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRlbXBsYXRlIHRvIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5q2k6aG16Z2i5LiN5piv5oKo55qE55So5oi36K6o6K666aG16Z2i44CC5LiN6L+H77yM6Iul6ZyA6KaB77yM5q2k6aG16Z2i5Y+v5Lul5ZCv55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzor7flnKjpobXpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5L2N572ufX3jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5q2k6aCB6Z2i5LiN5piv5oKo55qE55So5oi26KiO6KuW6aCB6Z2i44CC5LiN6YGO77yM6Iul6ZyA6KaB77yM5q2k6aCB6Z2i5Y+v5Lul5ZWf55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzoq4vlnKjpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdHBsZWFzZV9lbmFibGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRvIHRoaXMgcGFnZSB0byBzdGFydCB1c2luZyBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+WcqOatpOmhtemdouWKoOWFpSB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPlnLDlnYB9fSDmnaXlkK/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+WcqOatpOmggemdouWKoOWFpSB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59fSDkvobllZ/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46IFwiWW91IGhhdmUgdGhlIEVhc3kgQXJjaGl2ZSBmdW5jdGlvbmFsaXR5IGVuYWJsZWQgYnV0IHlvdXIgdGFsayBwYWdlIGhhc24ndCBiZWVuIGNvbmZpZ3VyZWQgeWV0LiBUbyB0YWtlIGFkdmFudGFnZSBvZiBFYXN5IEFyY2hpdmUsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuXCIsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjnmoTotKblj7flt7Lnu4/mlK/mjIEgRWFzeSBBcmNoaXZl77yM5L2G5piv77yM5Li65LqG5byA5aeL5L2/55So6K+l5Yqf6IO977yM5oKo6L+Y6ZyA6KaB5Zyo6Ieq5bex55qE55So5oi36K6o6K666aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOeahOizrOiZn+W3sue2k+aUr+aMgSBFYXN5IEFyY2hpdmXvvIzkvYbmmK/vvIzngrrkuobplovlp4vkvb/nlKjoqbLlip/og73vvIzmgqjpgoTpnIDopoHlnKjoh6rlt7HnmoTnlKjmiLboqI7oq5bpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdGxlZnRfcGFyX3NwbGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHRyaWdodF9wYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKScsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0cGVyaW9kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHRcdGFyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlIGxvY2F0aW9uOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5Zyw5Z2A77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOiHs++8micsXG5cdFx0fSksXG5cdFx0bG9hZGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZyBzZWN0aW9uICQxJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOivu+WPluesrCAkMSDoioLnmoTlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo6K6A5Y+W56ysICQxIOevgOeahOWFp+WuuScsXG5cdFx0fSksXG5cdFx0ZGVsZXRpbmdfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RlbGV0aW5nIHNlY3Rpb24gJDEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yig6Zmk56ysICQxIOiKgueahOWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjliKrpmaTnrKwgJDEg56+A55qE5YWn5a65Jyxcblx0XHR9KSxcblx0XHRkb25lX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZWN0aW9uICQxIGhhcyBiZWVuIGFyY2hpdmVkIHRvICQyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3sue7j+WwhuesrCAkMSDoioLlrZjmoaPliLAgJDInLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey57aT5bCH56ysICQxIOevgOWtmOaqlOWIsCAkMicsXG5cdFx0fSksXG5cdFx0ZG9uZV9kZWxldGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VjdGlvbiAkMSBoYXMgYmVlbiBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3sue7j+WwhuesrCAkMSDoioLliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey57aT5bCH56ysICQxIOevgOWIqumZpCcsXG5cdFx0fSksXG5cdFx0YmVpbmdfYXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYmVpbmcgYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOS4rScsXG5cdFx0fSksXG5cdFx0YmVpbmdfZGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOS4rScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTkuK0nLFxuXHRcdH0pLFxuXHRcdGFscmVhZHlfYXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWtmOaqlCcsXG5cdFx0fSksXG5cdFx0YWxyZWFkeV9kZWxldGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWIqumZpCcsXG5cdFx0fSksXG5cdFx0b3RoZXJzX3RhbGtfZWxhYm9yYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogXCJUaGlzIHBhZ2UgaXMgYW5vdGhlciB1c2VyJ3MgdGFsayBwYWdlLiBZb3UgY2Fubm90IGFyY2hpdmUgdGhlIHRvcGljcyBvbiB0aGlzIHBhZ2UgZm9yIGhpbS9oZXJcIixcblx0XHRcdCd6aC1oYW5zJzogJ+i/meaYr+WPpuS4gOWQjeeUqOaIt+eahOiuqOiuuumhtemdou+8jOaCqOS4jeiDveS7o+abv+WPpuS4gOWQjeeUqOaIt+WtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfpgJnmmK/lj6bkuIDlkI3nlKjmiLbnmoToqI7oq5bpoIHpnaLvvIzmgqjkuI3og73ku6Pmm7/lj6bkuIDlkI3nlKjmiLblrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdHBhZ2Vfbm90X3N1cHBvcnRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0cGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGVzZSBwYWdlcyBhcmUgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmU6IEZpbGUsIFRlbXBsYXRlLCBNb2R1bGUsIE1lZGlhV2lraSwgQ2F0ZWdvcnksIFNwZWNpYWwsIEphdmFTY3JpcHQsIENTUywgSlNPTi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6L+Z5Lqb6aG16Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJpGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfpgJnkupvpoIHpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8mkZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHR9KSxcblx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBvZiB0aGlzIHBhZ2UsIFwiJDFcIiwgaXMgdW5kZXIgdGhlIGFydGljbGUgbmFtZXNwYWNlLCB3aGVyZSBhcmNoaXZlcyBzaG91bGQgbm90IGJlIG5vcm1hbGx5IGRpcmVjdGVkIHRvLiBQbGVhc2UgY2hlY2sgaWYgeW91IGhhdmUgdGhlIGNvcnJlY3QgYXJjaGl2ZSBsb2NhdGlvbi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3vvIzlnKjmnaHnm67lkI3np7Dnqbrpl7TkuYvkuIvjgILkuIDoiKzogIzoqIDkuI3lupTlkJHmnaHnm67lkI3np7Dnqbrpl7Tov5vooYzlrZjmoaPvvIzor7fmo4Dmn6XlrZjmoaPlnLDlnYDjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3vvIzlnKjmop3nm67lkI3nqLHnqbrplpPkuYvkuIvjgILkuIDoiKzogIzoqIDkuI3mh4nlkJHmop3nm67lkI3nqLHnqbrplpPpgLLooYzlrZjmqpTvvIzoq4vmqqLmn6XlrZjmqpTlnLDlnYDjgIInLFxuXHRcdH0pLFxuXHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlIGFyY2hpdmUgbG9jYXRpb24gb2YgdGhpcyBwYWdlLCBcIiQxXCIsIGlzIHRoaXMgcGFnZSBpdHNlbGYsIEVhc3kgYXJjaGl2ZSBjYW5ub3Qgb3BlcmF0ZSBsaWtlIHRoaXMuICcsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLnm67liY3nmoTlrZjmoaPlnLDlnYDmmK/igJwkMeKAne+8jOWSjOatpOmhtemdouWQjeensOebuOWQjOOAgkVhc3kgQXJjaGl2ZSDml6Dms5XmjInmraTlnLDlnYDlrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3vvIzlkozmraTpoIHpnaLlkI3nqLHnm7jlkIzjgIJFYXN5IEFyY2hpdmUg54Sh5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHRhcmNoaXZlX3N1bW1hcnk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+auteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdGRlbGV0ZV9zdW1tYXJ5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOauteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTmrrXokL0nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICcuL0Vhc3lBcmNoaXZlLmxlc3MnO1xuXG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7XG5cdGVsZW1lbnRXcmFwLFxuXHRlbXB0eUVsZW1lbnQsXG5cdGxpbmtXcmFwLFxuXHRvbkNsaWNrV3JhcCxcblx0cGlwZUVsZW1lbnQsXG5cdHNlY3Rpb25JZFNwYW5FbGVtZW50LFxuXHRzcGFuLFxufSBmcm9tICcuL21vZHVsZXMvcmVhY3QudHN4JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL21vZHVsZXMvYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbihmdW5jdGlvbiBlYXN5QXJjaGl2ZVdyYXAoKSB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dVc2VyTmFtZSwgd2dDdXJSZXZpc2lvbklkLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDAgfHwgd2dQYWdlTmFtZSA9PT0gJ1FpdXdlbjrpppbpobUnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gbWluaWZpZWQgY29kZSBkZXBlbmRlbmN5IGZ1bmN0aW9uc1xuXHRjbGFzcyBQYXJlX3N0ciB7XG5cdFx0Y29uc3RydWN0b3IocGFyZV9zdHJpbmcsIGNvbmZpZykge1xuXHRcdFx0dGhpcy5zdHIgPSBwYXJlX3N0cmluZztcblx0XHRcdHRoaXMubGVmdCA9ICcoJztcblx0XHRcdHRoaXMuZGVsaW0gPSAnOic7XG5cdFx0XHR0aGlzLnJpZ2h0ID0gJyknO1xuXHRcdFx0aWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGNvbmZpZyA9IFN0cmluZyhjb25maWcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRwYXJlX3N0cmluZy5sZW5ndGggPiA2ICYmXG5cdFx0XHRcdC9bIyVAXVtTc11bRWVdW1R0XS8udGVzdChwYXJlX3N0cmluZy5zbGljZSgwLCA0KSkgJiZcblx0XHRcdFx0IWNvbmZpZy5pbmNsdWRlcygnaWdub3JlLXNldCcpXG5cdFx0XHQpIHtcblx0XHRcdFx0WywgLCAsICwgdGhpcy5sZWZ0LCB0aGlzLmRlbGltLCB0aGlzLnJpZ2h0XSA9IHBhcmVfc3RyaW5nO1xuXHRcdFx0XHRpZiAodGhpcy5sZWZ0ID09PSB0aGlzLnJpZ2h0IHx8IHRoaXMubGVmdCA9PT0gdGhpcy5kZWxpbSB8fCB0aGlzLnJpZ2h0ID09PSB0aGlzLmRlbGltKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKFwiUG91bmQgc2V0IHN0YXRlbWVudCBoYXMgcmVwZXRpdGl2ZSBjaGFyYWN0ZXJzLiBFLmcuICcjc2V0fDp8JyBpcyBpbGxlZ2FsLlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRmaW5kKGxvb2t1cF9rZXkpIHtcblx0XHRcdGxvb2t1cF9rZXkgPSB0aGlzLmxlZnQgKyBsb29rdXBfa2V5ICsgdGhpcy5kZWxpbTtcblx0XHRcdGlmICghdGhpcy5zdHIuaW5jbHVkZXMobG9va3VwX2tleSkpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5zdHIuc3BsaXQobG9va3VwX2tleSlbMV0uc3BsaXQodGhpcy5yaWdodClbMF07XG5cdFx0fVxuXHR9XG5cblx0Ly8gY29tbW9uIHJlcG8uXG5cdGNvbnN0IGV4cG9zZSA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgYXN5bmNQb3N0ID0gKHBhcmFtLCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0YXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbSkudGhlbihjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRjb25zdCBnZXRQYWdlID0gKHRpdGxlLCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW0gPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRcdFx0cnZwcm9wOiAnaWRzfGZsYWdzfHRpbWVzdGFtcHx1c2VyfHVzZXJpZHxzaXplfGNvbW1lbnR8dGFnc3xjb250ZW50Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdH07XG5cdFx0XHRhc3luY1Bvc3QocGFyYW0sIGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IGdldFBhZ2VTZWN0aW9uID0gKHRpdGxlLCBzZWN0aW9uLCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW0gPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0XHRcdHJ2c2VjdGlvbjogc2VjdGlvbixcblx0XHRcdH07XG5cdFx0XHRhc3luY1Bvc3QocGFyYW0sIGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IHBpY2tQYWdlQ29udGVudCA9IChkYXRhKSA9PiB7XG5cdFx0XHRpZiAoZGF0YS5xdWVyeSAmJiBkYXRhLnF1ZXJ5LnBhZ2VzICYmIGRhdGEucXVlcnkucGFnZXNbMF0gJiYgZGF0YS5xdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0pIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEucXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHRjb25zdCB0ZWxsUGFnZUV4aXN0ID0gKGRhdGEpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgfHwgIWRhdGEucXVlcnkgfHwgIWRhdGEucXVlcnkucGFnZXMgfHwgZGF0YS5xdWVyeS5wYWdlc1swXS5taXNzaW5nKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cdFx0Y29uc3QgZWRpdCA9ICh0aXRsZSwgc2VjdGlvbiwgdGV4dCwgc3VtbWFyeSwgY2FsbGJhY2spID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdHRleHQsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHNlY3Rpb24pIHtcblx0XHRcdFx0cGFyYW0uc2VjdGlvbiA9IHNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRhc3luY1Bvc3QocGFyYW0sIGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IGVkaXRBcHBlbmQgPSAocGFnZSwgYWRkZWRfY29udGVudCwgc3VtbWFyeSwgY2FsbGJhY2spID0+IHtcblx0XHRcdGdldFBhZ2UocGFnZSwgKGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxfY29udGVudCA9IHRlbGxQYWdlRXhpc3QoZGF0YSkgPT09IGZhbHNlID8gJycgOiBwaWNrUGFnZUNvbnRlbnQoZGF0YSk7XG5cdFx0XHRcdGVkaXQocGFnZSwgbnVsbCwgU3RyaW5nKG9yaWdpbmFsX2NvbnRlbnQpICsgYWRkZWRfY29udGVudCwgc3VtbWFyeSwgY2FsbGJhY2spO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRjb25zdCBhcmNoaXZlU2VjdGlvbiA9ICh0aXRsZSwgc2VjdGlvbiwgdGFyZ2V0VGl0bGUsIGNhbGxiYWNrLCBzdW1tYXJ5KSA9PiB7XG5cdFx0XHRnZXRQYWdlU2VjdGlvbih0aXRsZSwgc2VjdGlvbiwgKGRhdGEpID0+IHtcblx0XHRcdFx0ZWRpdEFwcGVuZCh0YXJnZXRUaXRsZSwgYFxcblxcbiR7cGlja1BhZ2VDb250ZW50KGRhdGEpfWAsIHN1bW1hcnkpO1xuXHRcdFx0XHRlZGl0KHRpdGxlLCBzZWN0aW9uLnRvU3RyaW5nKCksICcnLCBzdW1tYXJ5LCBjYWxsYmFjayk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGNvbnN0IGRlbGV0ZVNlY3Rpb24gPSAodGl0bGUsIHNlY3Rpb24sIGNhbGxiYWNrLCBzdW1tYXJ5KSA9PiB7XG5cdFx0XHRlZGl0KHRpdGxlLCBzZWN0aW9uLnRvU3RyaW5nKCksICcnLCBzdW1tYXJ5LCBjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXJjaGl2ZV9zZWN0aW9uOiBhcmNoaXZlU2VjdGlvbixcblx0XHRcdGRlbGV0ZV9zZWN0aW9uOiBkZWxldGVTZWN0aW9uLFxuXHRcdH07XG5cdH0pKCk7XG5cblx0Ly8gZGVmYXVsdCBzZXR0aW5nczpcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5nc19zdHJpbmcgPVxuXHRcdCcjc2V0JXw/XHRcdFx0XHRcdFx0XHRcdFx0XFxuJyArXG5cdFx0J2Rpc3BsYXkgc2VjdGlvbiBkZWxldGUgbGlua1x0JXNlYy1kZWx8MT9cdFxcbicgK1xuXHRcdCdkaXNwbGF5IHNlY3Rpb24gYXJjaGl2ZSBsaW5lXHQlc2VjLWFyY3wxP1x0XFxuJyArXG5cdFx0J2Rpc3BsYXkgY29udHJvbCBiYXIgYXQgdG9wXHQldG9wLWJhcnwwP1x0XFxuJyArXG5cdFx0J2FyY2hpdmUgbG9jYXRpb25cdFx0XHRcdCVhcmMtbG9jfD9cdFxcbicgK1xuXHRcdCdzdWJzZWN0aW9uIGVmZmVjdGl2ZW5lc3NcdFx0JXN1Yi1zZWN8Mj9cdFxcbicgK1xuXHRcdCdjb25maXJtIGFjdGlvblx0XHRcdFx0JWNvbmZpcm18MD9cdFxcbicgK1xuXHRcdCdpcyB0aGlzIGRhdGEgaW5pdGlhbGl6ZWRcdFx0JWRhdGEtaW5pdHwwPyBcXG4nO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzID0gbmV3IFBhcmVfc3RyKHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3Nfc3RyaW5nKTtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5teV91c2VyX3RhbGsgPSBudWxsO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm5ldmVyX2VuYWJsZV9vbl90aGVzZV9wYWdlc19yZWdleCA/Pz0gW107XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuZGlzX3N1cHBvcnRfdGhlc2VfcGFnZXNfcmVnZXggPSBbXG5cdFx0L15GaWxlOi4qJC8sXG5cdFx0L15NZWRpYVdpa2k6LiokLyxcblx0XHQvXk1vZHVsZTouKiQvLFxuXHRcdC9eQ2F0ZWdvcnk6LiokLyxcblx0XHQvXlRlbXBsYXRlOi4qJC8sXG5cdFx0L15TcGVjaWFsOi4qJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanMkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5jc3MkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qc29uJC8sXG5cdF07XG5cdGNvbnN0IHNldHRpbmdzX3NwYW5fY29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJyk7XG5cdGNvbnN0IFtzZXR0aW5nc19zcGFuXSA9IHNldHRpbmdzX3NwYW5fY29sbGVjdGlvbjtcblx0Y29uc3Qgc2V0dGluZ3MgPSBzZXR0aW5nc19zcGFuID8gbmV3IFBhcmVfc3RyKHNldHRpbmdzX3NwYW4uaW5uZXJIVE1MKSA6IG5ldyBQYXJlX3N0cignJyk7XG5cdGlmIChzZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzEnKSB7XG5cdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5nc19zdHJpbmcgPSBzZXR0aW5nc19zcGFuLmlubmVySFRNTDtcblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzID0gbmV3IFBhcmVfc3RyKHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3Nfc3RyaW5nKTtcblx0fVxuXHQvLyBpZGVudGlmeSBpZiBFYXN5IEFyY2hpdmUgY2FuIGJlIHVzZWQgb24gdGhlIHBhZ2UgLSBjb21wYXRpYmlsaXR5XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUub25fdXNlcl90YWxrID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDM7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUubXlfdXNlcl90YWxrID1cblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX3VzZXJfdGFsayAmJlxuXHRcdCgoKSA9PiB7XG5cdFx0XHRsZXQgcGFnZV9uYW1lID0gd2dQYWdlTmFtZS5zcGxpdCgnOicpO1xuXHRcdFx0cGFnZV9uYW1lWzBdID0gJyc7XG5cdFx0XHRwYWdlX25hbWUgPSBwYWdlX25hbWUuam9pbignJyk7XG5cdFx0XHRbcGFnZV9uYW1lXSA9IHBhZ2VfbmFtZS5zcGxpdCgnLycpO1xuXHRcdFx0Y29uc3QgdXNlcl9uYW1lID0gd2dVc2VyTmFtZTtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHVzZXJfbmFtZS5zcGxpdCgnXycpLmpvaW4oJycpLnNwbGl0KCcgJykuam9pbignJykgPT09IHBhZ2VfbmFtZS5zcGxpdCgnXycpLmpvaW4oJycpLnNwbGl0KCcgJykuam9pbignJylcblx0XHRcdCk7XG5cdFx0fSkoKTtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5oYXNfdGVtcGxhdGUgPSBzZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzEnO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm90aGVyc191c2VyX3RhbGsgPVxuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUubXlfdXNlcl90YWxrID09PSBmYWxzZSAmJiB3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX3VzZXJfdGFsayA9PT0gdHJ1ZTtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5vbl9hcnRpY2xlID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDA7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUub25faGlzdF92ZXJzaW9uID0gd2dDdXJSZXZpc2lvbklkIC0gd2dSZXZpc2lvbklkICE9PSAwO1xuXHRjb25zdCBhcmNfc3VtID0gd2luZG93LmVhc3lfYXJjaGl2ZS51c2VyX2N1c3RvbV9hcmNoaXZlX3N1bW1hcnkgPz8gbnVsbDtcblx0Y29uc3QgZGVsX3N1bSA9IHdpbmRvdy5lYXN5X2FyY2hpdmUudXNlcl9jdXN0b21fZGVsZXRlX3N1bW1hcnkgPz8gbnVsbDtcblx0Y29uc3Qgc2FuaXRpemVfaHRtbCA9IChzdHJpbmcpID0+IHtcblx0XHRyZXR1cm4gc3RyaW5nXG5cdFx0XHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuXHRcdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdFx0LnJlcGxhY2UoLycvZywgJyZhcG9zOycpXG5cdFx0XHQucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuXHR9O1xuXHQvLyBtdWx0aSBsYW5ndWFnZSBzZWxlY3RvciBkZWZpbml0aW9uXG5cdGNvbnN0IG1lc3NhZ2UgPSAodGFnLCBwYXJhX2xpc3QpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGNvbnRlbnQgPSBnZXRNZXNzYWdlKHRhZyk7XG5cdFx0XHRmb3IgKGxldCBoYXNfdW5mdWxmaWxsZWRfcGFyYSA9IHRydWUsIF9pID0gMDsgaGFzX3VuZnVsZmlsbGVkX3BhcmE7IF9pKyspIHtcblx0XHRcdFx0Y29uc3Qgc2VhcmNoID0gYCQke19pICsgMX1gO1xuXHRcdFx0XHRpZiAoY29udGVudC5pbmNsdWRlcyhzZWFyY2gpKSB7XG5cdFx0XHRcdFx0Y29udGVudCA9IHBhcmFfbGlzdFtfaV1cblx0XHRcdFx0XHRcdD8gY29udGVudC5zcGxpdChzZWFyY2gpLmpvaW4ocGFyYV9saXN0W19pXSlcblx0XHRcdFx0XHRcdDogY29udGVudC5zcGxpdChzZWFyY2gpLmpvaW4oJycpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGhhc191bmZ1bGZpbGxlZF9wYXJhID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICcoISkgdW5kZWZpbmVkIGxhbmd1YWdlIGNvbnRlbnQnO1xuXHRcdH1cblx0fTtcblx0Y29uc3Qgbm9taW5hbF9zZWN0aW9ucyA9ICgoY291bnQpID0+IHtcblx0XHRjb25zdCBhcnIgPSBBcnJheS5mcm9tKHtcblx0XHRcdGxlbmd0aDogY291bnQsXG5cdFx0fSk7XG5cdFx0Zm9yIChsZXQgX2kgPSAwOyBfaSA8IGNvdW50OyBfaSsrKSB7XG5cdFx0XHRhcnJbX2ldID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBhcnI7XG5cdH0pKHdpbmRvdy5lYXN5X2FyY2hpdmUuc2VjdGlvbl9jb3VudCk7XG5cdGNvbnN0IGFjdHVhbF9zZWN0aW9uID0gKG5vbWluYWxfc2VjdGlvbl9udW1iZXIpID0+IHtcblx0XHRsZXQgbGVzcyA9IDA7XG5cdFx0Zm9yIChsZXQgX2kgPSAwOyBfaSA8IG5vbWluYWxfc2VjdGlvbl9udW1iZXI7IF9pKyspIHtcblx0XHRcdGlmIChub21pbmFsX3NlY3Rpb25zW19pXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRsZXNzKys7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBub21pbmFsX3NlY3Rpb25fbnVtYmVyIC0gbGVzcztcblx0fTtcblx0Ly8gLi4uIGludGVyZmFjZSBkb25lXG5cdC8vIGFyY2hpdmluZyBsb2dpYyBpbmplY3Rpb25cblx0Y29uc3QgcmVwb3J0X2RvbmVuZXNzX3VpID0gKHNlY3Rpb25fbnVtYmVyLCBkb25lbmVzc190eXBlLCB0bywgb25nb2luZ19vcl9kb25lKSA9PiB7XG5cdFx0bGV0IHRhZ19kaW5nO1xuXHRcdGxldCB0YWdfc2VjdGlvbjtcblx0XHRsZXQgZGluZ190eXBlO1xuXHRcdGxldCBkaW5nX2F1dG9oaWRlO1xuXHRcdGlmIChvbmdvaW5nX29yX2RvbmUgPT09ICdvbmdvaW5nJykge1xuXHRcdFx0ZGluZ190eXBlID0gJ2luZm8nO1xuXHRcdFx0ZGluZ19hdXRvaGlkZSA9IHRydWU7XG5cdFx0XHRpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2RlbGV0ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnZGVsZXRpbmdfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYmVpbmdfZGVsZXRlZCc7XG5cdFx0XHR9IGVsc2UgaWYgKGRvbmVuZXNzX3R5cGUgPT09ICdhcmNoaXZlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdsb2FkaW5nX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2JlaW5nX2FyY2hpdmVkJztcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG9uZ29pbmdfb3JfZG9uZSA9PT0gJ2RvbmUnKSB7XG5cdFx0XHRkaW5nX3R5cGUgPSAnc3VjY2Vzcyc7XG5cdFx0XHRkaW5nX2F1dG9oaWRlID0gZmFsc2U7XG5cdFx0XHRpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2RlbGV0ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnZG9uZV9kZWxldGluZ19zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdhbHJlYWR5X2RlbGV0ZWQnO1xuXHRcdFx0fSBlbHNlIGlmIChkb25lbmVzc190eXBlID09PSAnYXJjaGl2ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnZG9uZV9zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdhbHJlYWR5X2FyY2hpdmVkJztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgYWN0aW9ucyA9IHtcblx0XHRcdGRpbmc6ICgpID0+IHtcblx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogbWVzc2FnZSh0YWdfZGluZywgW3NlY3Rpb25fbnVtYmVyLnRvU3RyaW5nKCksIHRvXSksXG5cdFx0XHRcdFx0XHRjbG9zZTogIWRpbmdfYXV0b2hpZGUsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogZGluZ19hdXRvaGlkZSA/IDMwMDAgOiAtMSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGRpbmdfdHlwZVxuXHRcdFx0XHQpO1xuXHRcdFx0fSxcblx0XHRcdHNlY3Rpb25fbGluazogKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4tb3JkZXItJHtzZWN0aW9uX251bWJlcn1gKTtcblx0XHRcdFx0Y29uc3QgcG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdFx0XHRcdGZvciAobGV0IF9pID0gMTsgX2kgPCBwbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAtIDI7IF9pKyspIHtcblx0XHRcdFx0XHRwbm9kZS5jaGlsZE5vZGVzW19pXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5vZGUuaW5uZXJIVE1MID0gbWVzc2FnZSh0YWdfc2VjdGlvbik7XG5cdFx0XHRcdG5vZGUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXHRcdFx0XHRub2RlLnN0eWxlLmNvbG9yID0gJ3JnYigwIDAgMC8uNSknO1xuXHRcdFx0fSxcblx0XHR9O1xuXHRcdHJldHVybiBhY3Rpb25zO1xuXHR9O1xuXHRjb25zdCBkZWxldGVfc2VjdGlvbl9jb3JlID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdGNvbnN0IGFjdHVhbF9zZWN0aW9uX251bWJlciA9IGFjdHVhbF9zZWN0aW9uKHNlY3Rpb25fbnVtYmVyKTtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ29uZ29pbmcnKS5kaW5nKCk7XG5cdFx0ZXhwb3NlLmRlbGV0ZV9zZWN0aW9uKFxuXHRcdFx0d2dQYWdlTmFtZSxcblx0XHRcdGFjdHVhbF9zZWN0aW9uX251bWJlcixcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdkb25lJykuZGluZygpO1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ2RvbmUnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRcdFx0bm9taW5hbF9zZWN0aW9uc1tzZWN0aW9uX251bWJlcl0gPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGRlbF9zdW0gfHwgbWVzc2FnZSgnZGVsZXRlX3N1bW1hcnknKVxuXHRcdCk7XG5cdH07XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuZGVsZXRlX3NlY3Rpb24gPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdvbmdvaW5nJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0ZGVsZXRlX3NlY3Rpb25fY29yZShzZWN0aW9uX251bWJlciwgX25vbWluYWwpO1xuXHR9O1xuXHRjb25zdCBhcmNoaXZlX3NlY3Rpb25fY29yZSA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCBhY3R1YWxfc2VjdGlvbl9udW1iZXIgPSBhY3R1YWxfc2VjdGlvbihzZWN0aW9uX251bWJlcik7XG5cdFx0Y29uc3QgdG8gPSB3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKTtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdvbmdvaW5nJykuZGluZygpO1xuXHRcdGV4cG9zZS5hcmNoaXZlX3NlY3Rpb24oXG5cdFx0XHR3Z1BhZ2VOYW1lLFxuXHRcdFx0YWN0dWFsX3NlY3Rpb25fbnVtYmVyLFxuXHRcdFx0dG8sXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ2RvbmUnKS5kaW5nKCk7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ2RvbmUnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRcdFx0bm9taW5hbF9zZWN0aW9uc1tzZWN0aW9uX251bWJlcl0gPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGFyY19zdW0gfHwgbWVzc2FnZSgnYXJjaGl2ZV9zdW1tYXJ5Jylcblx0XHQpO1xuXHR9O1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLmFyY2hpdmVfc2VjdGlvbiA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCB0byA9IHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpO1xuXHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ29uZ29pbmcnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRhcmNoaXZlX3NlY3Rpb25fY29yZShzZWN0aW9uX251bWJlciwgX25vbWluYWwpO1xuXHR9O1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLmVsYWJvcmF0ZV9ub3RpY2UgPSAobm90aWNlX3RhZ19uYW1lKSA9PiB7XG5cdFx0Ly8gYWNyb255bSBzY2hlbWU6IHJlZmVyIHRvIHF3ZXJ0eSBrZXlib2FyZCBsYXlvdXQuIChwPTkpXG5cdFx0Y29uc3Qgbm90aWNlX3RhZ19kaWN0aW9uYXJ5ID0ge1xuXHRcdFx0cGxlYXNlX2VuYWJsZV9lbGFib3JhdGU6IFsncGxlYXNlX2VuYWJsZV9lbGFib3JhdGUnXSxcblx0XHRcdG90aGVyc190YWxrX2VsYWJvcmF0ZTogWydvdGhlcnNfdGFsa19lbGFib3JhdGUnXSxcblx0XHRcdGVuYWJsZV9vbl9nZW5lcmljX3BhZ2U6IFsnZW5hYmxlX29uX2dlbmVyaWNfcGFnZSddLFxuXHRcdFx0cHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZTogW1xuXHRcdFx0XHQncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZScsXG5cdFx0XHRcdCd3YXJuaW5nJyxcblx0XHRcdFx0J2xvbmcnLFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0W3Nhbml0aXplX2h0bWwod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpXSxcblx0XHRcdF0sXG5cdFx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2U6IFtcblx0XHRcdFx0J3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZScsXG5cdFx0XHRcdCd3YXJuaW5nJyxcblx0XHRcdFx0J2xvbmcnLFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0W3Nhbml0aXplX2h0bWwod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpXSxcblx0XHRcdF0sXG5cdFx0XHRwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlOiBbJ3BhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGUnXSxcblx0XHR9O1xuXHRcdGNvbnN0IG5vdGljZV9zZXQgPSBub3RpY2VfdGFnX2RpY3Rpb25hcnlbbm90aWNlX3RhZ19uYW1lXSB8fCBmYWxzZTtcblx0XHRpZiAobm90aWNlX3NldCAhPT0gZmFsc2UpIHtcblx0XHRcdGNvbnN0IFtudGFnLCBudHlwZSwgbnR0bCwgbnBlcnNpc3QsIG5zdWJzdF0gPSBub3RpY2Vfc2V0O1xuXHRcdFx0Y29uc3QgdG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bm9kZTogc3BhbihtZXNzYWdlKG50YWcsIG5zdWJzdCkpLFxuXHRcdFx0XHRcdGNsb3NlOiBudHRsID09PSAnbG9uZycsXG5cdFx0XHRcdFx0ZHVyYXRpb246IG50dGwgPT09ICdsb25nJyA/IC0xIDogbnR0bCxcblx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAobnBlcnNpc3QpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRudHlwZVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdC8vIHJlYWwgZGVhbCBoZXJlXG5cdC8vIGludGVyZmFjZSBpbmplY3Rpb24gLSBwcmVwYXJlXG5cdGxldCBpID0gMDtcblx0bGV0IGogPSAwO1xuXHRsZXQgZWxlO1xuXHRsZXQgbm9taW5hbDtcblx0bGV0IGFjdHVhbDtcblx0Y29uc3Qgc2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2luaGliaXQgPVxuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnc2VjLWRlbCcpID09PSAnMCcgfHwgd2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzAnO1xuXHRjb25zdCBzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQgPVxuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnc2VjLWFyYycpID09PSAnMCcgfHwgd2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzAnO1xuXHRjb25zdCBzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2UgPSBlbXB0eUVsZW1lbnQoKTtcblx0Y29uc3Qgc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZSA9IGVtcHR5RWxlbWVudCgpO1xuXHRsZXQgZm9vdGVyX2luZm9fZWxlO1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcikubGVuZ3RoKSB7XG5cdFx0W2Zvb3Rlcl9pbmZvX2VsZV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblx0fSBlbHNlIHtcblx0XHRmb290ZXJfaW5mb19lbGUgPSBlbXB0eUVsZW1lbnQoKTtcblx0fVxuXHQvLyAuLi4gaW50ZXJmYWNlIGluamVjdGlvbiAtIGxvZ2ljXG5cdGNvbnN0IGlzX2luX2JsYWNrbGlzdCA9IChibGFja2xpc3QpID0+IHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYmxhY2tsaXN0KSB7XG5cdFx0XHRpZiAoZWxlbWVudC50ZXN0KHdnUGFnZU5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGlmICh3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX2FydGljbGUgfHwgd2luZG93LmVhc3lfYXJjaGl2ZS5vbl9oaXN0X3ZlcnNpb24pIHtcblx0XHRyZXR1cm47IC8vIGluc2VydCBubyBpbnRlcmZhY2Ugb24gYW4gYXJ0aWNsZSBwYWdlIG9yIGEgaGlzdG9yeSB2ZXJzaW9uLlxuXHR9XG5cdGlmIChpc19pbl9ibGFja2xpc3Qod2luZG93LmVhc3lfYXJjaGl2ZS5uZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXgpKSB7XG5cdFx0cmV0dXJuOyAvLyBpbnNlcnQgbm8gaW50ZXJmYWNlIGlmIHRoZSBwYWdlIG5hbWUgaXMgYmxhY2tsaXN0ZWQuXG5cdH1cblx0aWYgKGlzX2luX2JsYWNrbGlzdCh3aW5kb3cuZWFzeV9hcmNoaXZlLmRpc19zdXBwb3J0X3RoZXNlX3BhZ2VzX3JlZ2V4KSkge1xuXHRcdC8vIGluc2VydCBub3Qgc3VwcG9ydGVkIG5vdGljZSBpZiB0aGUgcGFnZSBuYW1lIGluZGljYXRlcyB0aGF0IGl0IGlzIG5vdCBzdXBwb3J0ZWQuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcChcblx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyxcblx0XHRcdFx0b25DbGlja1dyYXAobWVzc2FnZSgncGFnZV9ub3Rfc3VwcG9ydGVkJyksIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5lbGFib3JhdGVfbm90aWNlKCdwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fSBlbHNlIGlmICh3Z1BhZ2VOYW1lID09PSB3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSkge1xuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSgncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlJyk7XG5cdH0gZWxzZSBpZiAod2luZG93LmVhc3lfYXJjaGl2ZS5oYXNfdGVtcGxhdGUgJiYgIXdpbmRvdy5lYXN5X2FyY2hpdmUub3RoZXJzX3VzZXJfdGFsaykge1xuXHRcdC8vIGFueSBwYWdlIHRoYXQgaGFzIHRlbXBsYXRlIHRoYXQncyBub3Qgb3RoZXJzJyB0YWxrIHBhZ2UuIGZ1bmN0aW9uIG5vcm1hbGx5LlxuXHRcdC8vICEhIHRoZSBhcmNoaXZlIGxvY2F0aW9uIGluIG1haW4gc3BhY2UgYW5kIG5lZWRzIGF0dGVudGlvbiAhIVxuXHRcdGlmICgvLis6LisvLnRlc3Qod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpICE9PSB0cnVlKSB7XG5cdFx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLmVsYWJvcmF0ZV9ub3RpY2UoJ3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UnKTtcblx0XHR9XG5cdFx0Y29uc3Qgbm9ybWFsX2Z1bmN0aW9uX2luamVjdF9pbnRlcmZhY2UgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBlZGl0U2VjdGlvbkNvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXctZWRpdHNlY3Rpb246bm90KC5tdy1lZGl0c2VjdGlvbi1zZWN0aW9uLTApJyk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgZWRpdFNlY3Rpb25Db2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGVsZSA9IGVkaXRTZWN0aW9uQ29sbGVjdGlvbltpXTtcblx0XHRcdFx0Y29uc3QgdmUgPSAvWyY/XXZlYWN0aW9uPWVkaXQvLnRlc3QoZWxlLmNoaWxkTm9kZXNbMV0uaHJlZik7XG5cdFx0XHRcdGNvbnN0IGNoaWxkX25vZGVfbnVtYmVyID0gdmUgPyAzIDogMTtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGVsZS5wYXJlbnROb2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2gyJyAmJlxuXHRcdFx0XHRcdGVsZS5wYXJlbnROb2RlLmlkICE9PSAnZmlyc3RIZWFkaW5nJyAmJlxuXHRcdFx0XHRcdGRlY29kZVVSSUNvbXBvbmVudChlbGUuY2hpbGROb2Rlc1tjaGlsZF9ub2RlX251bWJlcl0uaHJlZi5zcGxpdCgvWyY/XXRpdGxlPS8pWzFdLnNwbGl0KCcmJylbMF0pID09PVxuXHRcdFx0XHRcdFx0d2dQYWdlTmFtZVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRhY3R1YWwgPSBOdW1iZXIucGFyc2VJbnQoXG5cdFx0XHRcdFx0XHRlbGUuY2hpbGROb2Rlc1tjaGlsZF9ub2RlX251bWJlcl0uaHJlZi5zcGxpdCgvWyY/XXNlY3Rpb249LylbMV0uc3BsaXQoJyYnKVswXSxcblx0XHRcdFx0XHRcdDEwXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRub21pbmFsID0gaSAtIGogKyAxO1xuXHRcdFx0XHRcdGlmICghc2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2luaGliaXQpIHtcblx0XHRcdFx0XHRcdHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZS5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdHBpcGVFbGVtZW50KCksXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2tXcmFwKFxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2UoJ2RlbGV0ZScpLFxuXHRcdFx0XHRcdFx0XHRcdChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHt0YXJnZXR9ID0gZXZlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkYXRhQWN0dWFsID0gdGFyZ2V0LmRhdGFzZXQuYWN0dWFsO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGF0YU5vbWluYWwgPSB0YXJnZXQuZGF0YXNldC5ub21pbmFsO1xuXHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5kZWxldGVfc2VjdGlvbihkYXRhQWN0dWFsLCBkYXRhTm9taW5hbCk7XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRhY3R1YWwsXG5cdFx0XHRcdFx0XHRcdFx0bm9taW5hbFxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIXNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaW5oaWJpdCkge1xuXHRcdFx0XHRcdFx0c2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZS5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdHBpcGVFbGVtZW50KCksXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2tXcmFwKFxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2UoJ2FyY2hpdmUnKSxcblx0XHRcdFx0XHRcdFx0XHQoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB7dGFyZ2V0fSA9IGV2ZW50O1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGF0YUFjdHVhbCA9IHRhcmdldC5kYXRhc2V0LmFjdHVhbDtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRhdGFOb21pbmFsID0gdGFyZ2V0LmRhdGFzZXQubm9taW5hbDtcblx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuYXJjaGl2ZV9zZWN0aW9uKGRhdGFBY3R1YWwsIGRhdGFOb21pbmFsKTtcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdGFjdHVhbCxcblx0XHRcdFx0XHRcdFx0XHRub21pbmFsXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsZS5jaGlsZE5vZGVzW2NoaWxkX25vZGVfbnVtYmVyXS5hZnRlcihcblx0XHRcdFx0XHRcdHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZSxcblx0XHRcdFx0XHRcdHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2UsXG5cdFx0XHRcdFx0XHRzZWN0aW9uSWRTcGFuRWxlbWVudChub21pbmFsLnRvU3RyaW5nKCkpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRqKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2VjdGlvbl9jb3VudCA9IGkgLSBqICsgMTtcblx0XHRcdGNvbnN0IGVhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UgPSBlbXB0eUVsZW1lbnQoKTtcblx0XHRcdGVhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UuYXBwZW5kKFxuXHRcdFx0XHRtZXNzYWdlKCdzdXBwb3J0cycpLFxuXHRcdFx0XHRtZXNzYWdlKCdsZWZ0X3Bhcl9zcGxpdCcpLFxuXHRcdFx0XHRtZXNzYWdlKCdhcmNoaXZlX3BhdGhfY29sb25fc3BsaXQnKSxcblx0XHRcdFx0bGlua1dyYXAoXG5cdFx0XHRcdFx0c2FuaXRpemVfaHRtbCh3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSksXG5cdFx0XHRcdFx0YC93aWtpLyR7c2FuaXRpemVfaHRtbCh3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSl9YFxuXHRcdFx0XHQpLFxuXHRcdFx0XHRtZXNzYWdlKCdyaWdodF9wYXInKSxcblx0XHRcdFx0bWVzc2FnZSgncGVyaW9kJylcblx0XHRcdCk7XG5cdFx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChlbGVtZW50V3JhcCgnZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZScsIGVhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UpKTtcblx0XHR9O1xuXHRcdG5vcm1hbF9mdW5jdGlvbl9pbmplY3RfaW50ZXJmYWNlKCk7XG5cdH0gZWxzZSBpZiAod2luZG93LmVhc3lfYXJjaGl2ZS5vdGhlcnNfdXNlcl90YWxrID09PSB0cnVlKSB7XG5cdFx0Ly8gb3RoZXJzIHVzZXIgdGFsay5cblx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChcblx0XHRcdGVsZW1lbnRXcmFwKCdlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZScpLFxuXHRcdFx0b25DbGlja1dyYXAobWVzc2FnZSgnb3RoZXJzX3BhZ2UnKSwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSgnb3RoZXJzX3RhbGtfZWxhYm9yYXRlJyk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0gZWxzZSBpZiAod2luZG93LmVhc3lfYXJjaGl2ZS5teV91c2VyX3RhbGsgPT09IGZhbHNlKSB7XG5cdFx0Ly8gYSBnZW5lcmljIHBhZ2UgdGhhdCBkaWQgbm90IGVuYWJsZSBlYXN5IGFyY2hpdmUuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcChcblx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyxcblx0XHRcdFx0b25DbGlja1dyYXAobWVzc2FnZSgndG9fZW5hYmxlJyksIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5lbGFib3JhdGVfbm90aWNlKCdlbmFibGVfb25fZ2VuZXJpY19wYWdlJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHQvLyB0aGVuIGFzc2VydDogKHdpbmRvdy5lYXN5X2FyY2hpdmUubXlfdXNlcl90YWxrID09PSB0cnVlKSwgKHdpbmRvdy5lYXN5X2FyY2hpdmUuaGFzX3RlbXBsYXRlID09PSBmYWxzZSkuXG5cdFx0Ly8gbXkgdXNlciB0YWxrIC0tIGluc3RhbGxlZCBlYXN5IGFyY2hpdmUgYnV0IGxhY2tpbmcgdGVtcGxhdGUuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcChcblx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyxcblx0XHRcdFx0b25DbGlja1dyYXAobWVzc2FnZSgncGxlYXNlX2VuYWJsZScpLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSgncGxlYXNlX2VuYWJsZV9lbGFib3JhdGUnKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLHFCQUFzQjtBQUN0QixJQUFBQyxVQUFXOztBQ0ZaLElBQUFDLG9CQUFrQ0MsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7QUFFbEMsSUFBTUMsY0FBY0EsQ0FBQ0MsSUFBWUMsaUJBQStCO0FBQy9ELFFBQU07SUFBQ0M7RUFBSSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRTdCLE1BQUlILFNBQVMsV0FBVztBQUN2QixXQUNDTixrQ0FBQVUsUUFBQUMsY0FBQyxXQUFBO01BQVFDLFdBQVcsQ0FBQyxpQkFBaUI7TUFBR1I7SUFBQSxHQUN2Q0MsWUFDRjtFQUVGLFdBQVcsQ0FBQyxVQUFVLGVBQWUsUUFBUSxFQUFFUSxTQUFTUCxJQUFJLEtBQUtRLFNBQVNDLGNBQWMs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QVU7QUFDNUNBLFlBQU1DLGVBQWU7QUFDckJwRyxhQUFPQyxhQUFhK0QsaUJBQWlCLHdCQUF3QjtJQUM5RCxDQUFDLENBQ0YsQ0FDRDtFQUNELE9BQU87QUFHTm9CLG9CQUFnQmMsUUFDZnRPLFlBQ0MsOEJBQ0FrQixZQUFZMkksUUFBUSxlQUFlLEdBQUkwRSxXQUFVO0FBQ2hEQSxZQUFNQyxlQUFlO0FBQ3JCcEcsYUFBT0MsYUFBYStELGlCQUFpQix5QkFBeUI7SUFDL0QsQ0FBQyxDQUNGLENBQ0Q7RUFDRDtBQUNELEdBQUc7IiwKICAibmFtZXMiOiBbIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJlbGVtZW50V3JhcCIsICJpZCIsICJpbm5lckVsZW1lbnQiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiaW5jbHVkZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJlbXB0eUVsZW1lbnQiLCAiRnJhZ21lbnQiLCAibGlua1dyYXAiLCAidGV4dENvbnRlbnQiLCAiaHJlZiIsICJvbkNsaWNrV3JhcCIsICJvbkNsaWNrIiwgImRhdGFBY3R1YWwiLCAiZGF0YU5vbWluYWwiLCAicGlwZUVsZW1lbnQiLCAiY2xhc3MiLCAic2VjdGlvbklkU3BhbkVsZW1lbnQiLCAiY29uY2F0IiwgInN0eWxlIiwgImRpc3BsYXkiLCAic3BhbiIsICJpbm5lckhUTUwiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldEkxOG5NZXNzYWdlcyIsICJkZWxldGUiLCAibG9jYWxpemUiLCAiZW4iLCAiYXJjaGl2ZSIsICJzdXBwb3J0cyIsICJvdGhlcnNfcGFnZSIsICJ0b19lbmFibGUiLCAiZW5hYmxlX29uX2dlbmVyaWNfcGFnZSIsICJwbGVhc2VfZW5hYmxlIiwgInBsZWFzZV9lbmFibGVfZWxhYm9yYXRlIiwgImxlZnRfcGFyX3NwbGl0IiwgInpoIiwgInJpZ2h0X3BhciIsICJwZXJpb2QiLCAiYXJjaGl2ZV9wYXRoX2NvbG9uX3NwbGl0IiwgImxvYWRpbmdfc2VjdGlvbl9pIiwgImRlbGV0aW5nX3NlY3Rpb25faSIsICJkb25lX3NlY3Rpb25faSIsICJkb25lX2RlbGV0aW5nX3NlY3Rpb25faSIsICJiZWluZ19hcmNoaXZlZCIsICJiZWluZ19kZWxldGVkIiwgImFscmVhZHlfYXJjaGl2ZWQiLCAiYWxyZWFkeV9kZWxldGVkIiwgIm90aGVyc190YWxrX2VsYWJvcmF0ZSIsICJwYWdlX25vdF9zdXBwb3J0ZWQiLCAicGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZSIsICJwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlIiwgInByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZSIsICJhcmNoaXZlX3N1bW1hcnkiLCAiZGVsZXRlX3N1bW1hcnkiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJlYXN5QXJjaGl2ZVdyYXAiLCAiX3dpbmRvdyRlYXN5X2FyY2hpdmUiLCAiX3dpbmRvdyRlYXN5X2FyY2hpdmUkIiwgIl93aW5kb3ckZWFzeV9hcmNoaXZlJDIiLCAiX3dpbmRvdyRlYXN5X2FyY2hpdmUkMyIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnVXNlck5hbWUiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUmV2aXNpb25JZCIsICJQYXJlX3N0ciIsICJjb25zdHJ1Y3RvciIsICJwYXJlX3N0cmluZyIsICJzdHIiLCAibGVmdCIsICJkZWxpbSIsICJyaWdodCIsICJTdHJpbmciLCAibGVuZ3RoIiwgInRlc3QiLCAic2xpY2UiLCAiU3ludGF4RXJyb3IiLCAiZmluZCIsICJsb29rdXBfa2V5IiwgInNwbGl0IiwgImV4cG9zZSIsICJhc3luY1Bvc3QiLCAicGFyYW0iLCAiY2FsbGJhY2siLCAicG9zdFdpdGhUb2tlbiIsICJ0aGVuIiwgImdldFBhZ2UiLCAidGl0bGUiLCAiYWN0aW9uIiwgInByb3AiLCAicnZwcm9wIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRpdGxlcyIsICJnZXRQYWdlU2VjdGlvbiIsICJzZWN0aW9uIiwgInJ2c2VjdGlvbiIsICJwaWNrUGFnZUNvbnRlbnQiLCAiZGF0YSIsICJxdWVyeSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAiY29udGVudCIsICJ0ZWxsUGFnZUV4aXN0IiwgIm1pc3NpbmciLCAiZWRpdCIsICJ0ZXh0IiwgInN1bW1hcnkiLCAiZWRpdEFwcGVuZCIsICJwYWdlIiwgImFkZGVkX2NvbnRlbnQiLCAib3JpZ2luYWxfY29udGVudCIsICJhcmNoaXZlU2VjdGlvbiIsICJ0YXJnZXRUaXRsZSIsICJ0b1N0cmluZyIsICJkZWxldGVTZWN0aW9uIiwgImFyY2hpdmVfc2VjdGlvbiIsICJkZWxldGVfc2VjdGlvbiIsICJ3aW5kb3ciLCAiZWFzeV9hcmNoaXZlIiwgInNldHRpbmdzX3N0cmluZyIsICJzZXR0aW5ncyIsICJteV91c2VyX3RhbGsiLCAibmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4IiwgImRpc19zdXBwb3J0X3RoZXNlX3BhZ2VzX3JlZ2V4IiwgInNldHRpbmdzX3NwYW5fY29sbGVjdGlvbiIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInNldHRpbmdzX3NwYW4iLCAib25fdXNlcl90YWxrIiwgInBhZ2VfbmFtZSIsICJqb2luIiwgInVzZXJfbmFtZSIsICJoYXNfdGVtcGxhdGUiLCAib3RoZXJzX3VzZXJfdGFsayIsICJvbl9hcnRpY2xlIiwgIm9uX2hpc3RfdmVyc2lvbiIsICJhcmNfc3VtIiwgInVzZXJfY3VzdG9tX2FyY2hpdmVfc3VtbWFyeSIsICJkZWxfc3VtIiwgInVzZXJfY3VzdG9tX2RlbGV0ZV9zdW1tYXJ5IiwgInNhbml0aXplX2h0bWwiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAibWVzc2FnZSIsICJ0YWciLCAicGFyYV9saXN0IiwgImhhc191bmZ1bGZpbGxlZF9wYXJhIiwgIl9pIiwgInNlYXJjaCIsICJub21pbmFsX3NlY3Rpb25zIiwgImNvdW50IiwgImFyciIsICJBcnJheSIsICJmcm9tIiwgInNlY3Rpb25fY291bnQiLCAiYWN0dWFsX3NlY3Rpb24iLCAibm9taW5hbF9zZWN0aW9uX251bWJlciIsICJsZXNzIiwgInJlcG9ydF9kb25lbmVzc191aSIsICJzZWN0aW9uX251bWJlciIsICJkb25lbmVzc190eXBlIiwgInRvIiwgIm9uZ29pbmdfb3JfZG9uZSIsICJ0YWdfZGluZyIsICJ0YWdfc2VjdGlvbiIsICJkaW5nX3R5cGUiLCAiZGluZ19hdXRvaGlkZSIsICJhY3Rpb25zIiwgImRpbmciLCAidG9hc3RpZnkiLCAiY2xvc2UiLCAiZHVyYXRpb24iLCAic2VjdGlvbl9saW5rIiwgIm5vZGUiLCAicG5vZGUiLCAicGFyZW50Tm9kZSIsICJjaGlsZE5vZGVzIiwgImNvbG9yIiwgImRlbGV0ZV9zZWN0aW9uX2NvcmUiLCAiX25vbWluYWwiLCAiYWN0dWFsX3NlY3Rpb25fbnVtYmVyIiwgImFyY2hpdmVfc2VjdGlvbl9jb3JlIiwgImVsYWJvcmF0ZV9ub3RpY2UiLCAibm90aWNlX3RhZ19uYW1lIiwgIm5vdGljZV90YWdfZGljdGlvbmFyeSIsICJub3RpY2Vfc2V0IiwgIm50YWciLCAibnR5cGUiLCAibnR0bCIsICJucGVyc2lzdCIsICJuc3Vic3QiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAiaSIsICJqIiwgImVsZSIsICJub21pbmFsIiwgImFjdHVhbCIsICJzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaW5oaWJpdCIsICJzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQiLCAic2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlIiwgInNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2UiLCAiZm9vdGVyX2luZm9fZWxlIiwgImlzX2luX2JsYWNrbGlzdCIsICJibGFja2xpc3QiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJlcnIiLCAiZSIsICJmIiwgInByZXBlbmQiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAibm9ybWFsX2Z1bmN0aW9uX2luamVjdF9pbnRlcmZhY2UiLCAiZWRpdFNlY3Rpb25Db2xsZWN0aW9uIiwgInZlIiwgImNoaWxkX25vZGVfbnVtYmVyIiwgInRhZ05hbWUiLCAidG9Mb3dlckNhc2UiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgIk51bWJlciIsICJwYXJzZUludCIsICJhcHBlbmQiLCAidGFyZ2V0IiwgImRhdGFzZXQiLCAiYWZ0ZXIiLCAiZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZSJdCn0K
