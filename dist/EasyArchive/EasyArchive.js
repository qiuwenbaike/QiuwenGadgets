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
  class: ["easy-archive-link", "easy-archive-link-".concat(dataActual, "-").concat(dataNominal)],
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
});
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
  const arc_sum = message("archive_summary");
  const del_sum = message("delete_summary");
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
        const nodes = document.querySelectorAll(".easy-archive-section-id-span-order-".concat(section_number));
        var _iterator2 = _createForOfIteratorHelper(nodes), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const node = _step2.value;
            const {
              parentNode
            } = node;
            var _iterator3 = _createForOfIteratorHelper(parentNode.querySelectorAll(".easy-archive-link")), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                const childNode = _step3.value;
                childNode.style.display = "none";
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            node.innerHTML = message(tag_section);
            node.style.display = "inline";
            node.style.color = "rgb(0 0 0/.5)";
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
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
    var _iterator4 = _createForOfIteratorHelper(blacklist), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const element = _step4.value;
        if (element.test(wgPageName)) {
          return true;
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
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
      const editSectionCollection = document.querySelectorAll(".mw-editsection");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9yZWFjdC50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiNC4wXCJcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9IChpZDogc3RyaW5nLCBpbm5lckVsZW1lbnQ6IFJlYWN0RWxlbWVudCkgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHNraW4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1sncGFnZS1pbmZvX19pdGVtJ119IGlkPXtpZH0+XG5cdFx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fSBlbHNlIGlmIChbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBpZD17aWR9Pntpbm5lckVsZW1lbnR9PC9saT47XG5cdH1cblx0cmV0dXJuIDxkaXYgaWQ9e2lkfT57aW5uZXJFbGVtZW50fTwvZGl2Pjtcbn07XG5cbmNvbnN0IGVtcHR5RWxlbWVudCA9ICguLi5pbm5lckVsZW1lbnQ6IFJlYWN0RWxlbWVudFtdKSA9PiA8PntbLi4uaW5uZXJFbGVtZW50XX08Lz47XG5cbmNvbnN0IGxpbmtXcmFwID0gKHRleHRDb250ZW50OiBzdHJpbmcsIGhyZWY6IHN0cmluZykgPT4gPGEgaHJlZj17aHJlZn0gdGV4dENvbnRlbnQ9e3RleHRDb250ZW50fSAvPjtcblxuY29uc3Qgb25DbGlja1dyYXAgPSAodGV4dENvbnRlbnQ6IHN0cmluZywgb25DbGljazogKCkgPT4gdm9pZCwgZGF0YUFjdHVhbD86IHN0cmluZywgZGF0YU5vbWluYWw/OiBzdHJpbmcpID0+IChcblx0PGFcblx0XHRjbGFzcz17WydlYXN5LWFyY2hpdmUtbGluaycsIGBlYXN5LWFyY2hpdmUtbGluay0ke2RhdGFBY3R1YWx9LSR7ZGF0YU5vbWluYWx9YF19XG5cdFx0b25DbGljaz17b25DbGlja31cblx0XHR0ZXh0Q29udGVudD17dGV4dENvbnRlbnR9XG5cdFx0ZGF0YS1hY3R1YWw9e2RhdGFBY3R1YWx9XG5cdFx0ZGF0YS1ub21pbmFsPXtkYXRhTm9taW5hbH1cblx0Lz5cbik7XG5cbmNvbnN0IHBpcGVFbGVtZW50ID0gKCkgPT4gPHNwYW4gY2xhc3M9XCJtdy1lZGl0c2VjdGlvbi1kaXZpZGVyXCIgdGV4dENvbnRlbnQ9eyd8J30gLz47XG5cbmNvbnN0IHNlY3Rpb25JZFNwYW5FbGVtZW50ID0gKGlkOiBzdHJpbmcpID0+IChcblx0PHNwYW5cblx0XHRjbGFzcz17WydlYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuJywgYGVhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4tb3JkZXItJHtpZH1gXX1cblx0XHRzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319XG5cdC8+XG4pO1xuXG5jb25zdCBzcGFuID0gKGlubmVySFRNTDogc3RyaW5nKSA9PiA8c3BhbiBpbm5lckhUTUw9e2lubmVySFRNTH0gLz47XG5cbmV4cG9ydCB7ZWxlbWVudFdyYXAsIGVtcHR5RWxlbWVudCwgbGlua1dyYXAsIG9uQ2xpY2tXcmFwLCBwaXBlRWxlbWVudCwgc2VjdGlvbklkU3BhbkVsZW1lbnQsIHNwYW59O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgRWFzeUFjaGl2ZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRkZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaQnLFxuXHRcdH0pLFxuXHRcdGFyY2hpdmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqUJyxcblx0XHR9KSxcblx0XHRzdXBwb3J0czogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgaXMgZW5hYmxlZCBvbiB0aGlzIHRhbGsgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfmnKzorqjorrrpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZlJyxcblx0XHR9KSxcblx0XHRvdGhlcnNfcGFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgaXMgbm90IGVuYWJsZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouaYr+S7luS6uueahOeUqOaIt+iuqOiuuumhtemdou+8jOWboOatpOS4jeaUr+aMgSBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdoueCuuS7luS6uueUqOaItuiojuirlumggemdou+8jOaVheS4jeaUr+aPtCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHR0b19lbmFibGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCB1c2luZyBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouayoeacieWQr+eUqCBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5pys6aCB5rKh5pyJ5ZWf55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0ZW5hYmxlX29uX2dlbmVyaWNfcGFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHlvdXIgdXNlciB0YWxrIHBhZ2UuIEhvd2V2ZXIgRWFzeSBBcmNoaXZlIHN0aWxsIGNhbiBiZSB1c2VkIGlmIG5lZWRlZC5UbyBlbmFibGUgaXQsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+atpOmhtemdouS4jeaYr+aCqOeahOeUqOaIt+iuqOiuuumhtemdouOAguS4jei/h++8jOiLpemcgOimge+8jOatpOmhtemdouWPr+S7peWQr+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6K+35Zyo6aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+atpOmggemdouS4jeaYr+aCqOeahOeUqOaItuiojuirlumggemdouOAguS4jemBju+8jOiLpemcgOimge+8jOatpOmggemdouWPr+S7peWVn+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6KuL5Zyo6aCB6Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn1944CCJyxcblx0XHR9KSxcblx0XHRwbGVhc2VfZW5hYmxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0byB0aGlzIHBhZ2UgdG8gc3RhcnQgdXNpbmcgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfor7flnKjmraTpobXpnaLliqDlhaUge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5Zyw5Z2AfX0g5p2l5ZCv55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vlnKjmraTpoIHpnaLliqDlhaUge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX0g5L6G5ZWf55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0cGxlYXNlX2VuYWJsZV9lbGFib3JhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiBcIllvdSBoYXZlIHRoZSBFYXN5IEFyY2hpdmUgZnVuY3Rpb25hbGl0eSBlbmFibGVkIGJ1dCB5b3VyIHRhbGsgcGFnZSBoYXNuJ3QgYmVlbiBjb25maWd1cmVkIHlldC4gVG8gdGFrZSBhZHZhbnRhZ2Ugb2YgRWFzeSBBcmNoaXZlLCBhZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdGVtcGxhdGUgdG8gdGhpcyBwYWdlLlwiLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo55qE6LSm5Y+35bey57uP5pSv5oyBIEVhc3kgQXJjaGl2Ze+8jOS9huaYr++8jOS4uuS6huW8gOWni+S9v+eUqOivpeWKn+iDve+8jOaCqOi/mOmcgOimgeWcqOiHquW3seeahOeUqOaIt+iuqOiuuumhtemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPkvY3nva59feOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmgqjnmoTos6zomZ/lt7LntpPmlK/mjIEgRWFzeSBBcmNoaXZl77yM5L2G5piv77yM54K65LqG6ZaL5aeL5L2/55So6Kmy5Yqf6IO977yM5oKo6YKE6ZyA6KaB5Zyo6Ieq5bex55qE55So5oi26KiO6KuW6aCB6Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn1944CCJyxcblx0XHR9KSxcblx0XHRsZWZ0X3Bhcl9zcGxpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0cmlnaHRfcGFyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyknLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdHBlcmlvZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcuJyxcblx0XHRcdHpoOiAn44CCJyxcblx0XHR9KSxcblx0XHRhcmNoaXZlX3BhdGhfY29sb25fc3BsaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2ZSBsb2NhdGlvbjogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+WcsOWdgO+8micsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpToh7PvvJonLFxuXHRcdH0pLFxuXHRcdGxvYWRpbmdfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcgc2VjdGlvbiAkMScsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjor7vlj5bnrKwgJDEg6IqC55qE5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOiugOWPluesrCAkMSDnr4DnmoTlhaflrrknLFxuXHRcdH0pLFxuXHRcdGRlbGV0aW5nX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdEZWxldGluZyBzZWN0aW9uICQxJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWIoOmZpOesrCAkMSDoioLnmoTlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo5Yiq6Zmk56ysICQxIOevgOeahOWFp+WuuScsXG5cdFx0fSksXG5cdFx0ZG9uZV9zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VjdGlvbiAkMSBoYXMgYmVlbiBhcmNoaXZlZCB0byAkMicsXG5cdFx0XHQnemgtaGFucyc6ICflt7Lnu4/lsIbnrKwgJDEg6IqC5a2Y5qGj5YiwICQyJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3sue2k+Wwh+esrCAkMSDnr4DlrZjmqpTliLAgJDInLFxuXHRcdH0pLFxuXHRcdGRvbmVfZGVsZXRpbmdfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlY3Rpb24gJDEgaGFzIGJlZW4gZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7Lnu4/lsIbnrKwgJDEg6IqC5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3sue2k+Wwh+esrCAkMSDnr4DliKrpmaQnLFxuXHRcdH0pLFxuXHRcdGJlaW5nX2FyY2hpdmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2JlaW5nIGFyY2hpdmVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+S4rScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTkuK0nLFxuXHRcdH0pLFxuXHRcdGJlaW5nX2RlbGV0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYmVpbmcgZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5LitJyxcblx0XHR9KSxcblx0XHRhbHJlYWR5X2FyY2hpdmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflt7LlrZjmqpQnLFxuXHRcdH0pLFxuXHRcdGFscmVhZHlfZGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICflt7LliKrpmaQnLFxuXHRcdH0pLFxuXHRcdG90aGVyc190YWxrX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46IFwiVGhpcyBwYWdlIGlzIGFub3RoZXIgdXNlcidzIHRhbGsgcGFnZS4gWW91IGNhbm5vdCBhcmNoaXZlIHRoZSB0b3BpY3Mgb24gdGhpcyBwYWdlIGZvciBoaW0vaGVyXCIsXG5cdFx0XHQnemgtaGFucyc6ICfov5nmmK/lj6bkuIDlkI3nlKjmiLfnmoTorqjorrrpobXpnaLvvIzmgqjkuI3og73ku6Pmm7/lj6bkuIDlkI3nlKjmiLflrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn6YCZ5piv5Y+m5LiA5ZCN55So5oi255qE6KiO6KuW6aCB6Z2i77yM5oKo5LiN6IO95Luj5pu/5Y+m5LiA5ZCN55So5oi25a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHRwYWdlX25vdF9zdXBwb3J0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdHBhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlc2UgcGFnZXMgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlOiBGaWxlLCBUZW1wbGF0ZSwgTW9kdWxlLCBNZWRpYVdpa2ksIENhdGVnb3J5LCBTcGVjaWFsLCBKYXZhU2NyaXB0LCBDU1MsIEpTT04uJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+i/meS6m+mhtemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77yaRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn6YCZ5Lqb6aCB6Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJpGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0fSksXG5cdFx0cHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlIGFyY2hpdmUgbG9jYXRpb24gb2YgdGhpcyBwYWdlLCBcIiQxXCIsIGlzIHVuZGVyIHRoZSBhcnRpY2xlIG5hbWVzcGFjZSwgd2hlcmUgYXJjaGl2ZXMgc2hvdWxkIG5vdCBiZSBub3JtYWxseSBkaXJlY3RlZCB0by4gUGxlYXNlIGNoZWNrIGlmIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGFyY2hpdmUgbG9jYXRpb24uJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+atpOmhtemdouebruWJjeeahOWtmOaho+WcsOWdgOaYr+KAnCQx4oCd77yM5Zyo5p2h55uu5ZCN56ew56m66Ze05LmL5LiL44CC5LiA6Iis6ICM6KiA5LiN5bqU5ZCR5p2h55uu5ZCN56ew56m66Ze06L+b6KGM5a2Y5qGj77yM6K+35qOA5p+l5a2Y5qGj5Zyw5Z2A44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+atpOmggemdoueVtuWJjeeahOWtmOaqlOWcsOWdgOaYr+OAjCQx44CN77yM5Zyo5qKd55uu5ZCN56ix56m66ZaT5LmL5LiL44CC5LiA6Iis6ICM6KiA5LiN5oeJ5ZCR5qKd55uu5ZCN56ix56m66ZaT6YCy6KGM5a2Y5qqU77yM6KuL5qqi5p+l5a2Y5qqU5Zyw5Z2A44CCJyxcblx0XHR9KSxcblx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZSBhcmNoaXZlIGxvY2F0aW9uIG9mIHRoaXMgcGFnZSwgXCIkMVwiLCBpcyB0aGlzIHBhZ2UgaXRzZWxmLCBFYXN5IGFyY2hpdmUgY2Fubm90IG9wZXJhdGUgbGlrZSB0aGlzLiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3vvIzlkozmraTpobXpnaLlkI3np7Dnm7jlkIzjgIJFYXN5IEFyY2hpdmUg5peg5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdoueVtuWJjeeahOWtmOaqlOWcsOWdgOaYr+OAjCQx44CN77yM5ZKM5q2k6aCB6Z2i5ZCN56ix55u45ZCM44CCRWFzeSBBcmNoaXZlIOeEoeazleaMieatpOWcsOWdgOWtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0YXJjaGl2ZV9zdW1tYXJ5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5q616JC9Jyxcblx0XHR9KSxcblx0XHRkZWxldGVfc3VtbWFyeTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5q616JC9Jyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9FYXN5QXJjaGl2ZS5sZXNzJztcblxuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1xuXHRlbGVtZW50V3JhcCxcblx0ZW1wdHlFbGVtZW50LFxuXHRsaW5rV3JhcCxcblx0b25DbGlja1dyYXAsXG5cdHBpcGVFbGVtZW50LFxuXHRzZWN0aW9uSWRTcGFuRWxlbWVudCxcblx0c3Bhbixcbn0gZnJvbSAnLi9tb2R1bGVzL3JlYWN0LnRzeCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG4oZnVuY3Rpb24gZWFzeUFyY2hpdmVXcmFwKCkge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWUsIHdnVXNlck5hbWUsIHdnQ3VyUmV2aXNpb25JZCwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPCAwIHx8IHdnUGFnZU5hbWUgPT09ICdRaXV3ZW466aaW6aG1Jykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIG1pbmlmaWVkIGNvZGUgZGVwZW5kZW5jeSBmdW5jdGlvbnNcblx0Y2xhc3MgUGFyZV9zdHIge1xuXHRcdGNvbnN0cnVjdG9yKHBhcmVfc3RyaW5nLCBjb25maWcpIHtcblx0XHRcdHRoaXMuc3RyID0gcGFyZV9zdHJpbmc7XG5cdFx0XHR0aGlzLmxlZnQgPSAnKCc7XG5cdFx0XHR0aGlzLmRlbGltID0gJzonO1xuXHRcdFx0dGhpcy5yaWdodCA9ICcpJztcblx0XHRcdGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRjb25maWcgPSBTdHJpbmcoY29uZmlnKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0cGFyZV9zdHJpbmcubGVuZ3RoID4gNiAmJlxuXHRcdFx0XHQvWyMlQF1bU3NdW0VlXVtUdF0vLnRlc3QocGFyZV9zdHJpbmcuc2xpY2UoMCwgNCkpICYmXG5cdFx0XHRcdCFjb25maWcuaW5jbHVkZXMoJ2lnbm9yZS1zZXQnKVxuXHRcdFx0KSB7XG5cdFx0XHRcdFssICwgLCAsIHRoaXMubGVmdCwgdGhpcy5kZWxpbSwgdGhpcy5yaWdodF0gPSBwYXJlX3N0cmluZztcblx0XHRcdFx0aWYgKHRoaXMubGVmdCA9PT0gdGhpcy5yaWdodCB8fCB0aGlzLmxlZnQgPT09IHRoaXMuZGVsaW0gfHwgdGhpcy5yaWdodCA9PT0gdGhpcy5kZWxpbSkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBTeW50YXhFcnJvcihcIlBvdW5kIHNldCBzdGF0ZW1lbnQgaGFzIHJlcGV0aXRpdmUgY2hhcmFjdGVycy4gRS5nLiAnI3NldHw6fCcgaXMgaWxsZWdhbC5cIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluZChsb29rdXBfa2V5KSB7XG5cdFx0XHRsb29rdXBfa2V5ID0gdGhpcy5sZWZ0ICsgbG9va3VwX2tleSArIHRoaXMuZGVsaW07XG5cdFx0XHRpZiAoIXRoaXMuc3RyLmluY2x1ZGVzKGxvb2t1cF9rZXkpKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuc3RyLnNwbGl0KGxvb2t1cF9rZXkpWzFdLnNwbGl0KHRoaXMucmlnaHQpWzBdO1xuXHRcdH1cblx0fVxuXG5cdC8vIGNvbW1vbiByZXBvLlxuXHRjb25zdCBleHBvc2UgPSAoKCkgPT4ge1xuXHRcdGNvbnN0IGFzeW5jUG9zdCA9IChwYXJhbSwgY2FsbGJhY2spID0+IHtcblx0XHRcdGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW0pLnRoZW4oY2FsbGJhY2spO1xuXHRcdH07XG5cdFx0Y29uc3QgZ2V0UGFnZSA9ICh0aXRsZSwgY2FsbGJhY2spID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHRcdHJ2cHJvcDogJ2lkc3xmbGFnc3x0aW1lc3RhbXB8dXNlcnx1c2VyaWR8c2l6ZXxjb21tZW50fHRhZ3N8Y29udGVudCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0XHR9O1xuXHRcdFx0YXN5bmNQb3N0KHBhcmFtLCBjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRjb25zdCBnZXRQYWdlU2VjdGlvbiA9ICh0aXRsZSwgc2VjdGlvbiwgY2FsbGJhY2spID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdFx0XHRydnNlY3Rpb246IHNlY3Rpb24sXG5cdFx0XHR9O1xuXHRcdFx0YXN5bmNQb3N0KHBhcmFtLCBjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRjb25zdCBwaWNrUGFnZUNvbnRlbnQgPSAoZGF0YSkgPT4ge1xuXHRcdFx0aWYgKGRhdGEucXVlcnkgJiYgZGF0YS5xdWVyeS5wYWdlcyAmJiBkYXRhLnF1ZXJ5LnBhZ2VzWzBdICYmIGRhdGEucXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdKSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5jb250ZW50O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0Y29uc3QgdGVsbFBhZ2VFeGlzdCA9IChkYXRhKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIGRhdGEgIT09ICdvYmplY3QnIHx8ICFkYXRhLnF1ZXJ5IHx8ICFkYXRhLnF1ZXJ5LnBhZ2VzIHx8IGRhdGEucXVlcnkucGFnZXNbMF0ubWlzc2luZykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdGNvbnN0IGVkaXQgPSAodGl0bGUsIHNlY3Rpb24sIHRleHQsIHN1bW1hcnksIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRjb25zdCBwYXJhbSA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHR0ZXh0LFxuXHRcdFx0fTtcblx0XHRcdGlmIChzZWN0aW9uKSB7XG5cdFx0XHRcdHBhcmFtLnNlY3Rpb24gPSBzZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0YXN5bmNQb3N0KHBhcmFtLCBjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRjb25zdCBlZGl0QXBwZW5kID0gKHBhZ2UsIGFkZGVkX2NvbnRlbnQsIHN1bW1hcnksIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRnZXRQYWdlKHBhZ2UsIChkYXRhKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsX2NvbnRlbnQgPSB0ZWxsUGFnZUV4aXN0KGRhdGEpID09PSBmYWxzZSA/ICcnIDogcGlja1BhZ2VDb250ZW50KGRhdGEpO1xuXHRcdFx0XHRlZGl0KHBhZ2UsIG51bGwsIFN0cmluZyhvcmlnaW5hbF9jb250ZW50KSArIGFkZGVkX2NvbnRlbnQsIHN1bW1hcnksIGNhbGxiYWNrKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0Y29uc3QgYXJjaGl2ZVNlY3Rpb24gPSAodGl0bGUsIHNlY3Rpb24sIHRhcmdldFRpdGxlLCBjYWxsYmFjaywgc3VtbWFyeSkgPT4ge1xuXHRcdFx0Z2V0UGFnZVNlY3Rpb24odGl0bGUsIHNlY3Rpb24sIChkYXRhKSA9PiB7XG5cdFx0XHRcdGVkaXRBcHBlbmQodGFyZ2V0VGl0bGUsIGBcXG5cXG4ke3BpY2tQYWdlQ29udGVudChkYXRhKX1gLCBzdW1tYXJ5KTtcblx0XHRcdFx0ZWRpdCh0aXRsZSwgc2VjdGlvbi50b1N0cmluZygpLCAnJywgc3VtbWFyeSwgY2FsbGJhY2spO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRjb25zdCBkZWxldGVTZWN0aW9uID0gKHRpdGxlLCBzZWN0aW9uLCBjYWxsYmFjaywgc3VtbWFyeSkgPT4ge1xuXHRcdFx0ZWRpdCh0aXRsZSwgc2VjdGlvbi50b1N0cmluZygpLCAnJywgc3VtbWFyeSwgY2FsbGJhY2spO1xuXHRcdH07XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFyY2hpdmVfc2VjdGlvbjogYXJjaGl2ZVNlY3Rpb24sXG5cdFx0XHRkZWxldGVfc2VjdGlvbjogZGVsZXRlU2VjdGlvbixcblx0XHR9O1xuXHR9KSgpO1xuXG5cdC8vIGRlZmF1bHQgc2V0dGluZ3M6XG5cdGxldCBzZXR0aW5nc19zdHJpbmcgPVxuXHRcdCcjc2V0JXw/XHRcdFx0XHRcdFx0XHRcdFx0XFxuJyArXG5cdFx0J2Rpc3BsYXkgc2VjdGlvbiBkZWxldGUgbGlua1x0JXNlYy1kZWx8MT9cdFxcbicgK1xuXHRcdCdkaXNwbGF5IHNlY3Rpb24gYXJjaGl2ZSBsaW5lXHQlc2VjLWFyY3wxP1x0XFxuJyArXG5cdFx0J2Rpc3BsYXkgY29udHJvbCBiYXIgYXQgdG9wXHQldG9wLWJhcnwwP1x0XFxuJyArXG5cdFx0J2FyY2hpdmUgbG9jYXRpb25cdFx0XHRcdCVhcmMtbG9jfD9cdFxcbicgK1xuXHRcdCdzdWJzZWN0aW9uIGVmZmVjdGl2ZW5lc3NcdFx0JXN1Yi1zZWN8Mj9cdFxcbicgK1xuXHRcdCdjb25maXJtIGFjdGlvblx0XHRcdFx0JWNvbmZpcm18MD9cdFxcbicgK1xuXHRcdCdpcyB0aGlzIGRhdGEgaW5pdGlhbGl6ZWRcdFx0JWRhdGEtaW5pdHwwPyBcXG4nO1xuXHRsZXQgc2V0dGluZ3MgPSBuZXcgUGFyZV9zdHIoc2V0dGluZ3Nfc3RyaW5nKTtcblx0Y29uc3QgbmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4ID0gW107XG5cdGNvbnN0IGRpc19zdXBwb3J0X3RoZXNlX3BhZ2VzX3JlZ2V4ID0gW1xuXHRcdC9eRmlsZTouKiQvLFxuXHRcdC9eTWVkaWFXaWtpOi4qJC8sXG5cdFx0L15Nb2R1bGU6LiokLyxcblx0XHQvXkNhdGVnb3J5Oi4qJC8sXG5cdFx0L15UZW1wbGF0ZTouKiQvLFxuXHRcdC9eU3BlY2lhbDouKiQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuY3NzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXHRdO1xuXHRjb25zdCBzZXR0aW5nc19zcGFuX2NvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWFzeV9hcmNoaXZlX2RhdGFfcG9pbnRfY29sbGVjdGlvbicpO1xuXHRjb25zdCBbc2V0dGluZ3Nfc3Bhbl0gPSBzZXR0aW5nc19zcGFuX2NvbGxlY3Rpb247XG5cdGNvbnN0IHBhZ2Vfc2V0dGluZ3MgPSBzZXR0aW5nc19zcGFuID8gbmV3IFBhcmVfc3RyKHNldHRpbmdzX3NwYW4uaW5uZXJIVE1MKSA6IG5ldyBQYXJlX3N0cignJyk7XG5cdGlmIChwYWdlX3NldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMScpIHtcblx0XHRzZXR0aW5nc19zdHJpbmcgPSBzZXR0aW5nc19zcGFuLmlubmVySFRNTDtcblx0XHRzZXR0aW5ncyA9IG5ldyBQYXJlX3N0cihzZXR0aW5nc19zdHJpbmcpO1xuXHR9XG5cdC8vIGlkZW50aWZ5IGlmIEVhc3kgQXJjaGl2ZSBjYW4gYmUgdXNlZCBvbiB0aGUgcGFnZSAtIGNvbXBhdGliaWxpdHlcblx0Y29uc3Qgb25fdXNlcl90YWxrID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDM7XG5cdGNvbnN0IG15X3VzZXJfdGFsayA9XG5cdFx0b25fdXNlcl90YWxrICYmXG5cdFx0KCgpID0+IHtcblx0XHRcdGxldCBwYWdlX25hbWUgPSB3Z1BhZ2VOYW1lLnNwbGl0KCc6Jyk7XG5cdFx0XHRwYWdlX25hbWVbMF0gPSAnJztcblx0XHRcdHBhZ2VfbmFtZSA9IHBhZ2VfbmFtZS5qb2luKCcnKTtcblx0XHRcdFtwYWdlX25hbWVdID0gcGFnZV9uYW1lLnNwbGl0KCcvJyk7XG5cdFx0XHRjb25zdCB1c2VyX25hbWUgPSB3Z1VzZXJOYW1lO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dXNlcl9uYW1lLnNwbGl0KCdfJykuam9pbignJykuc3BsaXQoJyAnKS5qb2luKCcnKSA9PT0gcGFnZV9uYW1lLnNwbGl0KCdfJykuam9pbignJykuc3BsaXQoJyAnKS5qb2luKCcnKVxuXHRcdFx0KTtcblx0XHR9KSgpO1xuXHRjb25zdCBoYXNfdGVtcGxhdGUgPSBwYWdlX3NldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMSc7XG5cdGNvbnN0IG90aGVyc191c2VyX3RhbGsgPSBteV91c2VyX3RhbGsgPT09IGZhbHNlICYmIG9uX3VzZXJfdGFsayA9PT0gdHJ1ZTtcblx0Y29uc3Qgb25fYXJ0aWNsZSA9IHdnTmFtZXNwYWNlTnVtYmVyID09PSAwO1xuXHRjb25zdCBvbl9oaXN0X3ZlcnNpb24gPSB3Z0N1clJldmlzaW9uSWQgLSB3Z1JldmlzaW9uSWQgIT09IDA7XG5cdGxldCBzZWN0aW9uX2NvdW50O1xuXHRjb25zdCBzYW5pdGl6ZV9odG1sID0gKHN0cmluZykgPT4ge1xuXHRcdHJldHVybiBzdHJpbmdcblx0XHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0XHQucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jylcblx0XHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cdH07XG5cdC8vIG11bHRpIGxhbmd1YWdlIHNlbGVjdG9yIGRlZmluaXRpb25cblx0Y29uc3QgbWVzc2FnZSA9ICh0YWcsIHBhcmFfbGlzdCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgY29udGVudCA9IGdldE1lc3NhZ2UodGFnKTtcblx0XHRcdGZvciAobGV0IGhhc191bmZ1bGZpbGxlZF9wYXJhID0gdHJ1ZSwgaSA9IDA7IGhhc191bmZ1bGZpbGxlZF9wYXJhOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgc2VhcmNoID0gYCQke2kgKyAxfWA7XG5cdFx0XHRcdGlmIChjb250ZW50LmluY2x1ZGVzKHNlYXJjaCkpIHtcblx0XHRcdFx0XHRjb250ZW50ID0gcGFyYV9saXN0W2ldID8gY29udGVudC5zcGxpdChzZWFyY2gpLmpvaW4ocGFyYV9saXN0W2ldKSA6IGNvbnRlbnQuc3BsaXQoc2VhcmNoKS5qb2luKCcnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRoYXNfdW5mdWxmaWxsZWRfcGFyYSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnKCEpIHVuZGVmaW5lZCBsYW5ndWFnZSBjb250ZW50Jztcblx0XHR9XG5cdH07XG5cdGNvbnN0IGFyY19zdW0gPSBtZXNzYWdlKCdhcmNoaXZlX3N1bW1hcnknKTtcblx0Y29uc3QgZGVsX3N1bSA9IG1lc3NhZ2UoJ2RlbGV0ZV9zdW1tYXJ5Jyk7XG5cdGNvbnN0IG5vbWluYWxfc2VjdGlvbnMgPSAoKGNvdW50KSA9PiB7XG5cdFx0Y29uc3QgYXJyID0gQXJyYXkuZnJvbSh7XG5cdFx0XHRsZW5ndGg6IGNvdW50LFxuXHRcdH0pO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHRcdFx0YXJyW2ldID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBhcnI7XG5cdH0pKHNlY3Rpb25fY291bnQpO1xuXHRjb25zdCBhY3R1YWxfc2VjdGlvbiA9IChub21pbmFsX3NlY3Rpb25fbnVtYmVyKSA9PiB7XG5cdFx0bGV0IGxlc3MgPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbm9taW5hbF9zZWN0aW9uX251bWJlcjsgaSsrKSB7XG5cdFx0XHRpZiAobm9taW5hbF9zZWN0aW9uc1tpXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRsZXNzKys7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBub21pbmFsX3NlY3Rpb25fbnVtYmVyIC0gbGVzcztcblx0fTtcblx0Ly8gLi4uIGludGVyZmFjZSBkb25lXG5cdC8vIGFyY2hpdmluZyBsb2dpYyBpbmplY3Rpb25cblx0Y29uc3QgcmVwb3J0X2RvbmVuZXNzX3VpID0gKHNlY3Rpb25fbnVtYmVyLCBkb25lbmVzc190eXBlLCB0bywgb25nb2luZ19vcl9kb25lKSA9PiB7XG5cdFx0bGV0IHRhZ19kaW5nO1xuXHRcdGxldCB0YWdfc2VjdGlvbjtcblx0XHRsZXQgZGluZ190eXBlO1xuXHRcdGxldCBkaW5nX2F1dG9oaWRlO1xuXHRcdGlmIChvbmdvaW5nX29yX2RvbmUgPT09ICdvbmdvaW5nJykge1xuXHRcdFx0ZGluZ190eXBlID0gJ2luZm8nO1xuXHRcdFx0ZGluZ19hdXRvaGlkZSA9IHRydWU7XG5cdFx0XHRpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2RlbGV0ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnZGVsZXRpbmdfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYmVpbmdfZGVsZXRlZCc7XG5cdFx0XHR9IGVsc2UgaWYgKGRvbmVuZXNzX3R5cGUgPT09ICdhcmNoaXZlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdsb2FkaW5nX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2JlaW5nX2FyY2hpdmVkJztcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG9uZ29pbmdfb3JfZG9uZSA9PT0gJ2RvbmUnKSB7XG5cdFx0XHRkaW5nX3R5cGUgPSAnc3VjY2Vzcyc7XG5cdFx0XHRkaW5nX2F1dG9oaWRlID0gZmFsc2U7XG5cdFx0XHRpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2RlbGV0ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnZG9uZV9kZWxldGluZ19zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdhbHJlYWR5X2RlbGV0ZWQnO1xuXHRcdFx0fSBlbHNlIGlmIChkb25lbmVzc190eXBlID09PSAnYXJjaGl2ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnZG9uZV9zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdhbHJlYWR5X2FyY2hpdmVkJztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgYWN0aW9ucyA9IHtcblx0XHRcdGRpbmc6ICgpID0+IHtcblx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogbWVzc2FnZSh0YWdfZGluZywgW3NlY3Rpb25fbnVtYmVyLnRvU3RyaW5nKCksIHRvXSksXG5cdFx0XHRcdFx0XHRjbG9zZTogIWRpbmdfYXV0b2hpZGUsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogZGluZ19hdXRvaGlkZSA/IDMwMDAgOiAtMSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGRpbmdfdHlwZVxuXHRcdFx0XHQpO1xuXHRcdFx0fSxcblx0XHRcdHNlY3Rpb25fbGluazogKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5lYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuLW9yZGVyLSR7c2VjdGlvbl9udW1iZXJ9YCk7XG5cdFx0XHRcdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuXHRcdFx0XHRcdGNvbnN0IHtwYXJlbnROb2RlfSA9IG5vZGU7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBjaGlsZE5vZGUgb2YgcGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuZWFzeS1hcmNoaXZlLWxpbmsnKSkge1xuXHRcdFx0XHRcdFx0Y2hpbGROb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5vZGUuaW5uZXJIVE1MID0gbWVzc2FnZSh0YWdfc2VjdGlvbik7XG5cdFx0XHRcdFx0bm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG5cdFx0XHRcdFx0bm9kZS5zdHlsZS5jb2xvciA9ICdyZ2IoMCAwIDAvLjUpJztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9O1xuXHRcdHJldHVybiBhY3Rpb25zO1xuXHR9O1xuXHRjb25zdCBkZWxldGVfc2VjdGlvbl9jb3JlID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdGNvbnN0IGFjdHVhbF9zZWN0aW9uX251bWJlciA9IGFjdHVhbF9zZWN0aW9uKHNlY3Rpb25fbnVtYmVyKTtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ29uZ29pbmcnKS5kaW5nKCk7XG5cdFx0ZXhwb3NlLmRlbGV0ZV9zZWN0aW9uKFxuXHRcdFx0d2dQYWdlTmFtZSxcblx0XHRcdGFjdHVhbF9zZWN0aW9uX251bWJlcixcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdkb25lJykuZGluZygpO1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ2RvbmUnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRcdFx0bm9taW5hbF9zZWN0aW9uc1tzZWN0aW9uX251bWJlcl0gPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGRlbF9zdW1cblx0XHQpO1xuXHR9O1xuXHRjb25zdCBkZWxldGVfc2VjdGlvbiA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ29uZ29pbmcnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRkZWxldGVfc2VjdGlvbl9jb3JlKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCk7XG5cdH07XG5cdGNvbnN0IGFyY2hpdmVfc2VjdGlvbl9jb3JlID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdGNvbnN0IGFjdHVhbF9zZWN0aW9uX251bWJlciA9IGFjdHVhbF9zZWN0aW9uKHNlY3Rpb25fbnVtYmVyKTtcblx0XHRjb25zdCB0byA9IHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKTtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdvbmdvaW5nJykuZGluZygpO1xuXHRcdGV4cG9zZS5hcmNoaXZlX3NlY3Rpb24oXG5cdFx0XHR3Z1BhZ2VOYW1lLFxuXHRcdFx0YWN0dWFsX3NlY3Rpb25fbnVtYmVyLFxuXHRcdFx0dG8sXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ2RvbmUnKS5kaW5nKCk7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ2RvbmUnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRcdFx0bm9taW5hbF9zZWN0aW9uc1tzZWN0aW9uX251bWJlcl0gPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGFyY19zdW1cblx0XHQpO1xuXHR9O1xuXHRjb25zdCBhcmNoaXZlX3NlY3Rpb24gPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0Y29uc3QgdG8gPSBzZXR0aW5ncy5maW5kKCdhcmMtbG9jJyk7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnb25nb2luZycpLnNlY3Rpb25fbGluaygpO1xuXHRcdGFyY2hpdmVfc2VjdGlvbl9jb3JlKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCk7XG5cdH07XG5cdGNvbnN0IGVsYWJvcmF0ZV9ub3RpY2UgPSAobm90aWNlX3RhZ19uYW1lKSA9PiB7XG5cdFx0Ly8gYWNyb255bSBzY2hlbWU6IHJlZmVyIHRvIHF3ZXJ0eSBrZXlib2FyZCBsYXlvdXQuIChwPTkpXG5cdFx0Y29uc3Qgbm90aWNlX3RhZ19kaWN0aW9uYXJ5ID0ge1xuXHRcdFx0cGxlYXNlX2VuYWJsZV9lbGFib3JhdGU6IFsncGxlYXNlX2VuYWJsZV9lbGFib3JhdGUnXSxcblx0XHRcdG90aGVyc190YWxrX2VsYWJvcmF0ZTogWydvdGhlcnNfdGFsa19lbGFib3JhdGUnXSxcblx0XHRcdGVuYWJsZV9vbl9nZW5lcmljX3BhZ2U6IFsnZW5hYmxlX29uX2dlbmVyaWNfcGFnZSddLFxuXHRcdFx0cHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZTogW1xuXHRcdFx0XHQncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZScsXG5cdFx0XHRcdCd3YXJuaW5nJyxcblx0XHRcdFx0J2xvbmcnLFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0W3Nhbml0aXplX2h0bWwoc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKV0sXG5cdFx0XHRdLFxuXHRcdFx0cHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlOiBbXG5cdFx0XHRcdCdwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2UnLFxuXHRcdFx0XHQnd2FybmluZycsXG5cdFx0XHRcdCdsb25nJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFtzYW5pdGl6ZV9odG1sKHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSldLFxuXHRcdFx0XSxcblx0XHRcdHBhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGU6IFsncGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZSddLFxuXHRcdH07XG5cdFx0Y29uc3Qgbm90aWNlX3NldCA9IG5vdGljZV90YWdfZGljdGlvbmFyeVtub3RpY2VfdGFnX25hbWVdIHx8IGZhbHNlO1xuXHRcdGlmIChub3RpY2Vfc2V0ICE9PSBmYWxzZSkge1xuXHRcdFx0Y29uc3QgW250YWcsIG50eXBlLCBudHRsLCBucGVyc2lzdCwgbnN1YnN0XSA9IG5vdGljZV9zZXQ7XG5cdFx0XHRjb25zdCB0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRub2RlOiBzcGFuKG1lc3NhZ2UobnRhZywgbnN1YnN0KSksXG5cdFx0XHRcdFx0Y2xvc2U6IG50dGwgPT09ICdsb25nJyxcblx0XHRcdFx0XHRkdXJhdGlvbjogbnR0bCA9PT0gJ2xvbmcnID8gLTEgOiBudHRsLFxuXHRcdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChucGVyc2lzdCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG50eXBlXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0Ly8gcmVhbCBkZWFsIGhlcmVcblx0Ly8gaW50ZXJmYWNlIGluamVjdGlvbiAtIHByZXBhcmVcblx0Y29uc3Qgc2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2luaGliaXQgPSBzZXR0aW5ncy5maW5kKCdzZWMtZGVsJykgPT09ICcwJyB8fCBzZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzAnO1xuXHRjb25zdCBzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQgPSBzZXR0aW5ncy5maW5kKCdzZWMtYXJjJykgPT09ICcwJyB8fCBzZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzAnO1xuXHRjb25zdCBzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2UgPSBlbXB0eUVsZW1lbnQoKTtcblx0Y29uc3Qgc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZSA9IGVtcHR5RWxlbWVudCgpO1xuXHRsZXQgZm9vdGVyX2luZm9fZWxlO1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcikubGVuZ3RoKSB7XG5cdFx0W2Zvb3Rlcl9pbmZvX2VsZV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblx0fSBlbHNlIHtcblx0XHRmb290ZXJfaW5mb19lbGUgPSBlbXB0eUVsZW1lbnQoKTtcblx0fVxuXHQvLyAuLi4gaW50ZXJmYWNlIGluamVjdGlvbiAtIGxvZ2ljXG5cdGNvbnN0IGlzX2luX2JsYWNrbGlzdCA9IChibGFja2xpc3QpID0+IHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYmxhY2tsaXN0KSB7XG5cdFx0XHRpZiAoZWxlbWVudC50ZXN0KHdnUGFnZU5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGlmIChvbl9hcnRpY2xlIHx8IG9uX2hpc3RfdmVyc2lvbikge1xuXHRcdHJldHVybjsgLy8gaW5zZXJ0IG5vIGludGVyZmFjZSBvbiBhbiBhcnRpY2xlIHBhZ2Ugb3IgYSBoaXN0b3J5IHZlcnNpb24uXG5cdH1cblx0aWYgKGlzX2luX2JsYWNrbGlzdChuZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXgpKSB7XG5cdFx0cmV0dXJuOyAvLyBpbnNlcnQgbm8gaW50ZXJmYWNlIGlmIHRoZSBwYWdlIG5hbWUgaXMgYmxhY2tsaXN0ZWQuXG5cdH1cblx0aWYgKGlzX2luX2JsYWNrbGlzdChkaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCkpIHtcblx0XHQvLyBpbnNlcnQgbm90IHN1cHBvcnRlZCBub3RpY2UgaWYgdGhlIHBhZ2UgbmFtZSBpbmRpY2F0ZXMgdGhhdCBpdCBpcyBub3Qgc3VwcG9ydGVkLlxuXHRcdGZvb3Rlcl9pbmZvX2VsZS5wcmVwZW5kKFxuXHRcdFx0ZWxlbWVudFdyYXAoXG5cdFx0XHRcdCdlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZScsXG5cdFx0XHRcdG9uQ2xpY2tXcmFwKG1lc3NhZ2UoJ3BhZ2Vfbm90X3N1cHBvcnRlZCcpLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ3BhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGUnKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHQpO1xuXHR9IGVsc2UgaWYgKHdnUGFnZU5hbWUgPT09IHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSkge1xuXHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZScpO1xuXHR9IGVsc2UgaWYgKGhhc190ZW1wbGF0ZSAmJiAhb3RoZXJzX3VzZXJfdGFsaykge1xuXHRcdC8vIGFueSBwYWdlIHRoYXQgaGFzIHRlbXBsYXRlIHRoYXQncyBub3Qgb3RoZXJzJyB0YWxrIHBhZ2UuIGZ1bmN0aW9uIG5vcm1hbGx5LlxuXHRcdC8vICEhIHRoZSBhcmNoaXZlIGxvY2F0aW9uIGluIG1haW4gc3BhY2UgYW5kIG5lZWRzIGF0dGVudGlvbiAhIVxuXHRcdGlmICgvLis6LisvLnRlc3Qoc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKSAhPT0gdHJ1ZSkge1xuXHRcdFx0ZWxhYm9yYXRlX25vdGljZSgncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZScpO1xuXHRcdH1cblx0XHRjb25zdCBub3JtYWxfZnVuY3Rpb25faW5qZWN0X2ludGVyZmFjZSA9ICgpID0+IHtcblx0XHRcdGxldCBpID0gMDtcblx0XHRcdGxldCBqID0gMDtcblx0XHRcdGNvbnN0IGVkaXRTZWN0aW9uQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGVkaXRTZWN0aW9uQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBlbGUgPSBlZGl0U2VjdGlvbkNvbGxlY3Rpb25baV07XG5cdFx0XHRcdGNvbnN0IHZlID0gL1smP112ZWFjdGlvbj1lZGl0Ly50ZXN0KGVsZS5jaGlsZE5vZGVzWzFdLmhyZWYpO1xuXHRcdFx0XHRjb25zdCBjaGlsZF9ub2RlX251bWJlciA9IHZlID8gMyA6IDE7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRlbGUucGFyZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdoMicgJiZcblx0XHRcdFx0XHRlbGUucGFyZW50Tm9kZS5pZCAhPT0gJ2ZpcnN0SGVhZGluZycgJiZcblx0XHRcdFx0XHRkZWNvZGVVUklDb21wb25lbnQoZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmhyZWYuc3BsaXQoL1smP110aXRsZT0vKVsxXS5zcGxpdCgnJicpWzBdKSA9PT1cblx0XHRcdFx0XHRcdHdnUGFnZU5hbWVcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsID0gTnVtYmVyLnBhcnNlSW50KFxuXHRcdFx0XHRcdFx0ZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmhyZWYuc3BsaXQoL1smP11zZWN0aW9uPS8pWzFdLnNwbGl0KCcmJylbMF0sXG5cdFx0XHRcdFx0XHQxMFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0Y29uc3Qgbm9taW5hbCA9IGkgLSBqICsgMTtcblx0XHRcdFx0XHRpZiAoIXNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9pbmhpYml0KSB7XG5cdFx0XHRcdFx0XHRzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2UuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRwaXBlRWxlbWVudCgpLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrV3JhcChcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlKCdkZWxldGUnKSxcblx0XHRcdFx0XHRcdFx0XHQoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB7dGFyZ2V0fSA9IGV2ZW50O1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGF0YUFjdHVhbCA9IHRhcmdldC5kYXRhc2V0LmFjdHVhbDtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRhdGFOb21pbmFsID0gdGFyZ2V0LmRhdGFzZXQubm9taW5hbDtcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZV9zZWN0aW9uKGRhdGFBY3R1YWwsIGRhdGFOb21pbmFsKTtcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdGFjdHVhbCxcblx0XHRcdFx0XHRcdFx0XHRub21pbmFsXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9pbmhpYml0KSB7XG5cdFx0XHRcdFx0XHRzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlLmFwcGVuZChcblx0XHRcdFx0XHRcdFx0cGlwZUVsZW1lbnQoKSxcblx0XHRcdFx0XHRcdFx0b25DbGlja1dyYXAoXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZSgnYXJjaGl2ZScpLFxuXHRcdFx0XHRcdFx0XHRcdChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHt0YXJnZXR9ID0gZXZlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkYXRhQWN0dWFsID0gdGFyZ2V0LmRhdGFzZXQuYWN0dWFsO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGF0YU5vbWluYWwgPSB0YXJnZXQuZGF0YXNldC5ub21pbmFsO1xuXHRcdFx0XHRcdFx0XHRcdFx0YXJjaGl2ZV9zZWN0aW9uKGRhdGFBY3R1YWwsIGRhdGFOb21pbmFsKTtcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdGFjdHVhbCxcblx0XHRcdFx0XHRcdFx0XHRub21pbmFsXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsZS5jaGlsZE5vZGVzW2NoaWxkX25vZGVfbnVtYmVyXS5hZnRlcihcblx0XHRcdFx0XHRcdHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZSxcblx0XHRcdFx0XHRcdHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2UsXG5cdFx0XHRcdFx0XHRzZWN0aW9uSWRTcGFuRWxlbWVudChub21pbmFsLnRvU3RyaW5nKCkpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRqKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNlY3Rpb25fY291bnQgPSBpIC0gaiArIDE7XG5cdFx0XHRjb25zdCBlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlID0gZW1wdHlFbGVtZW50KCk7XG5cdFx0XHRlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlLmFwcGVuZChcblx0XHRcdFx0bWVzc2FnZSgnc3VwcG9ydHMnKSxcblx0XHRcdFx0bWVzc2FnZSgnbGVmdF9wYXJfc3BsaXQnKSxcblx0XHRcdFx0bWVzc2FnZSgnYXJjaGl2ZV9wYXRoX2NvbG9uX3NwbGl0JyksXG5cdFx0XHRcdGxpbmtXcmFwKHNhbml0aXplX2h0bWwoc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKSwgYC93aWtpLyR7c2FuaXRpemVfaHRtbChzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpfWApLFxuXHRcdFx0XHRtZXNzYWdlKCdyaWdodF9wYXInKSxcblx0XHRcdFx0bWVzc2FnZSgncGVyaW9kJylcblx0XHRcdCk7XG5cdFx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChlbGVtZW50V3JhcCgnZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZScsIGVhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UpKTtcblx0XHR9O1xuXHRcdG5vcm1hbF9mdW5jdGlvbl9pbmplY3RfaW50ZXJmYWNlKCk7XG5cdH0gZWxzZSBpZiAob3RoZXJzX3VzZXJfdGFsayA9PT0gdHJ1ZSkge1xuXHRcdC8vIG90aGVycyB1c2VyIHRhbGsuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcCgnZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UnKSxcblx0XHRcdG9uQ2xpY2tXcmFwKG1lc3NhZ2UoJ290aGVyc19wYWdlJyksIChldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRlbGFib3JhdGVfbm90aWNlKCdvdGhlcnNfdGFsa19lbGFib3JhdGUnKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fSBlbHNlIGlmIChteV91c2VyX3RhbGsgPT09IGZhbHNlKSB7XG5cdFx0Ly8gYSBnZW5lcmljIHBhZ2UgdGhhdCBkaWQgbm90IGVuYWJsZSBlYXN5IGFyY2hpdmUuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcChcblx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyxcblx0XHRcdFx0b25DbGlja1dyYXAobWVzc2FnZSgndG9fZW5hYmxlJyksIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZWxhYm9yYXRlX25vdGljZSgnZW5hYmxlX29uX2dlbmVyaWNfcGFnZScpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gdGhlbiBhc3NlcnQ6IChteV91c2VyX3RhbGsgPT09IHRydWUpLCAoaGFzX3RlbXBsYXRlID09PSBmYWxzZSkuXG5cdFx0Ly8gbXkgdXNlciB0YWxrIC0tIGluc3RhbGxlZCBlYXN5IGFyY2hpdmUgYnV0IGxhY2tpbmcgdGVtcGxhdGUuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcChcblx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyxcblx0XHRcdFx0b25DbGlja1dyYXAobWVzc2FnZSgncGxlYXNlX2VuYWJsZScpLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ3BsZWFzZV9lbmFibGVfZWxhYm9yYXRlJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxxQkFBc0I7QUFDdEIsSUFBQUMsVUFBVzs7QUNGWixJQUFBQyxvQkFBa0NDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBO0FBRWxDLElBQU1DLGNBQWNBLENBQUNDLElBQVlDLGlCQUErQjtBQUMvRCxRQUFNO0lBQUNDO0VBQUksSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUU3QixNQUFJSCxTQUFTLFdBQVc7QUFDdkIsV0FDQ04sa0NBQUFVLFFBQUFDLGNBQUMsV0FBQTtNQUFRQyxXQUFXLENBQUMsaUJBQWlCO01BQUdSO0lBQUEsR0FDdkNDLFlBQ0Y7RUFFRixXQUFXLENBQUMsVUFBVSxlQUFlLFFBQVEsRUFBRVEsU0FBU1AsSUFBSSxLQUFLUSxTQUFTQyxjQUFjLGdCQUFnQixHQUFHO0FBQzFHLFdBQU9mLGtDQUFBVSxRQUFBQyxjQUFDLE1BQUE7TUFBR1A7SUFBQSxHQUFTQyxZQUFhO0VBQ2xDO0FBQ0EsU0FBT0wsa0NBQUFVLFFBQUFDLGNBQUMsT0FBQTtJQUFJUDtFQUFBLEdBQVNDLFlBQWE7QUFDbkM7QUFFQSxJQUFNVyxlQUFlQSxJQUFJWCxpQkFBaUNMLGtDQUFB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QUFBaEUsT0FBWTJILGNBQWNqQixTQUFTMUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFFLEdBQ3BHOEQsUUFBUSxXQUFXLEdBQ25CQSxRQUFRLFFBQVEsQ0FDakI7QUFDQW1FLHNCQUFnQk0sUUFBUTlOLFlBQVksZ0NBQWdDbVAsNEJBQTRCLENBQUM7SUFDbEc7QUFDQWxCLHFDQUFpQztFQUNsQyxXQUFXbkYscUJBQXFCLE1BQU07QUFFckMwRSxvQkFBZ0JNLFFBQ2Y5TixZQUFZLDRCQUE0QixHQUN4Q2tCLFlBQVltSSxRQUFRLGFBQWEsR0FBSTBFLFdBQVU7QUFDOUNBLFlBQU1DLGVBQWU7QUFDckJ2Qix1QkFBaUIsdUJBQXVCO0lBQ3pDLENBQUMsQ0FDRjtFQUNELFdBQVdoRSxpQkFBaUIsT0FBTztBQUVsQytFLG9CQUFnQk0sUUFDZjlOLFlBQ0MsOEJBQ0FrQixZQUFZbUksUUFBUSxXQUFXLEdBQUkwRSxXQUFVO0FBQzVDQSxZQUFNQyxlQUFlO0FBQ3JCdkIsdUJBQWlCLHdCQUF3QjtJQUMxQyxDQUFDLENBQ0YsQ0FDRDtFQUNELE9BQU87QUFHTmUsb0JBQWdCTSxRQUNmOU4sWUFDQyw4QkFDQWtCLFlBQVltSSxRQUFRLGVBQWUsR0FBSTBFLFdBQVU7QUFDaERBLFlBQU1DLGVBQWU7QUFDckJ2Qix1QkFBaUIseUJBQXlCO0lBQzNDLENBQUMsQ0FDRixDQUNEO0VBQ0Q7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJtb3VudFBvaW50U2VsZWN0b3IiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiZWxlbWVudFdyYXAiLCAiaWQiLCAiaW5uZXJFbGVtZW50IiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZW1wdHlFbGVtZW50IiwgIkZyYWdtZW50IiwgImxpbmtXcmFwIiwgInRleHRDb250ZW50IiwgImhyZWYiLCAib25DbGlja1dyYXAiLCAib25DbGljayIsICJkYXRhQWN0dWFsIiwgImRhdGFOb21pbmFsIiwgImNsYXNzIiwgImNvbmNhdCIsICJwaXBlRWxlbWVudCIsICJzZWN0aW9uSWRTcGFuRWxlbWVudCIsICJzdHlsZSIsICJkaXNwbGF5IiwgInNwYW4iLCAiaW5uZXJIVE1MIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRJMThuTWVzc2FnZXMiLCAiZGVsZXRlIiwgImxvY2FsaXplIiwgImVuIiwgImFyY2hpdmUiLCAic3VwcG9ydHMiLCAib3RoZXJzX3BhZ2UiLCAidG9fZW5hYmxlIiwgImVuYWJsZV9vbl9nZW5lcmljX3BhZ2UiLCAicGxlYXNlX2VuYWJsZSIsICJwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZSIsICJsZWZ0X3Bhcl9zcGxpdCIsICJ6aCIsICJyaWdodF9wYXIiLCAicGVyaW9kIiwgImFyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdCIsICJsb2FkaW5nX3NlY3Rpb25faSIsICJkZWxldGluZ19zZWN0aW9uX2kiLCAiZG9uZV9zZWN0aW9uX2kiLCAiZG9uZV9kZWxldGluZ19zZWN0aW9uX2kiLCAiYmVpbmdfYXJjaGl2ZWQiLCAiYmVpbmdfZGVsZXRlZCIsICJhbHJlYWR5X2FyY2hpdmVkIiwgImFscmVhZHlfZGVsZXRlZCIsICJvdGhlcnNfdGFsa19lbGFib3JhdGUiLCAicGFnZV9ub3Rfc3VwcG9ydGVkIiwgInBhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGUiLCAicHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZSIsICJwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2UiLCAiYXJjaGl2ZV9zdW1tYXJ5IiwgImRlbGV0ZV9zdW1tYXJ5IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZWFzeUFyY2hpdmVXcmFwIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dVc2VyTmFtZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dSZXZpc2lvbklkIiwgIlBhcmVfc3RyIiwgImNvbnN0cnVjdG9yIiwgInBhcmVfc3RyaW5nIiwgInN0ciIsICJsZWZ0IiwgImRlbGltIiwgInJpZ2h0IiwgIlN0cmluZyIsICJsZW5ndGgiLCAidGVzdCIsICJzbGljZSIsICJTeW50YXhFcnJvciIsICJmaW5kIiwgImxvb2t1cF9rZXkiLCAic3BsaXQiLCAiZXhwb3NlIiwgImFzeW5jUG9zdCIsICJwYXJhbSIsICJjYWxsYmFjayIsICJwb3N0V2l0aFRva2VuIiwgInRoZW4iLCAiZ2V0UGFnZSIsICJ0aXRsZSIsICJhY3Rpb24iLCAicHJvcCIsICJydnByb3AiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgImdldFBhZ2VTZWN0aW9uIiwgInNlY3Rpb24iLCAicnZzZWN0aW9uIiwgInBpY2tQYWdlQ29udGVudCIsICJkYXRhIiwgInF1ZXJ5IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJjb250ZW50IiwgInRlbGxQYWdlRXhpc3QiLCAibWlzc2luZyIsICJlZGl0IiwgInRleHQiLCAic3VtbWFyeSIsICJlZGl0QXBwZW5kIiwgInBhZ2UiLCAiYWRkZWRfY29udGVudCIsICJvcmlnaW5hbF9jb250ZW50IiwgImFyY2hpdmVTZWN0aW9uIiwgInRhcmdldFRpdGxlIiwgInRvU3RyaW5nIiwgImRlbGV0ZVNlY3Rpb24iLCAiYXJjaGl2ZV9zZWN0aW9uIiwgImRlbGV0ZV9zZWN0aW9uIiwgInNldHRpbmdzX3N0cmluZyIsICJzZXR0aW5ncyIsICJuZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXgiLCAiZGlzX3N1cHBvcnRfdGhlc2VfcGFnZXNfcmVnZXgiLCAic2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAic2V0dGluZ3Nfc3BhbiIsICJwYWdlX3NldHRpbmdzIiwgIm9uX3VzZXJfdGFsayIsICJteV91c2VyX3RhbGsiLCAicGFnZV9uYW1lIiwgImpvaW4iLCAidXNlcl9uYW1lIiwgImhhc190ZW1wbGF0ZSIsICJvdGhlcnNfdXNlcl90YWxrIiwgIm9uX2FydGljbGUiLCAib25faGlzdF92ZXJzaW9uIiwgInNlY3Rpb25fY291bnQiLCAic2FuaXRpemVfaHRtbCIsICJzdHJpbmciLCAicmVwbGFjZSIsICJtZXNzYWdlIiwgInRhZyIsICJwYXJhX2xpc3QiLCAiaGFzX3VuZnVsZmlsbGVkX3BhcmEiLCAiaSIsICJzZWFyY2giLCAiYXJjX3N1bSIsICJkZWxfc3VtIiwgIm5vbWluYWxfc2VjdGlvbnMiLCAiY291bnQiLCAiYXJyIiwgIkFycmF5IiwgImZyb20iLCAiYWN0dWFsX3NlY3Rpb24iLCAibm9taW5hbF9zZWN0aW9uX251bWJlciIsICJsZXNzIiwgInJlcG9ydF9kb25lbmVzc191aSIsICJzZWN0aW9uX251bWJlciIsICJkb25lbmVzc190eXBlIiwgInRvIiwgIm9uZ29pbmdfb3JfZG9uZSIsICJ0YWdfZGluZyIsICJ0YWdfc2VjdGlvbiIsICJkaW5nX3R5cGUiLCAiZGluZ19hdXRvaGlkZSIsICJhY3Rpb25zIiwgImRpbmciLCAidG9hc3RpZnkiLCAiY2xvc2UiLCAiZHVyYXRpb24iLCAic2VjdGlvbl9saW5rIiwgIm5vZGVzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIm5vZGUiLCAidmFsdWUiLCAicGFyZW50Tm9kZSIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJjaGlsZE5vZGUiLCAiZXJyIiwgImUiLCAiZiIsICJjb2xvciIsICJkZWxldGVfc2VjdGlvbl9jb3JlIiwgIl9ub21pbmFsIiwgImFjdHVhbF9zZWN0aW9uX251bWJlciIsICJhcmNoaXZlX3NlY3Rpb25fY29yZSIsICJlbGFib3JhdGVfbm90aWNlIiwgIm5vdGljZV90YWdfbmFtZSIsICJub3RpY2VfdGFnX2RpY3Rpb25hcnkiLCAibm90aWNlX3NldCIsICJudGFnIiwgIm50eXBlIiwgIm50dGwiLCAibnBlcnNpc3QiLCAibnN1YnN0IiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9pbmhpYml0IiwgInNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaW5oaWJpdCIsICJzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2UiLCAic2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZSIsICJmb290ZXJfaW5mb19lbGUiLCAiaXNfaW5fYmxhY2tsaXN0IiwgImJsYWNrbGlzdCIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJlbGVtZW50IiwgInByZXBlbmQiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAibm9ybWFsX2Z1bmN0aW9uX2luamVjdF9pbnRlcmZhY2UiLCAiaiIsICJlZGl0U2VjdGlvbkNvbGxlY3Rpb24iLCAiZWxlIiwgInZlIiwgImNoaWxkTm9kZXMiLCAiY2hpbGRfbm9kZV9udW1iZXIiLCAidGFnTmFtZSIsICJ0b0xvd2VyQ2FzZSIsICJkZWNvZGVVUklDb21wb25lbnQiLCAiYWN0dWFsIiwgIk51bWJlciIsICJwYXJzZUludCIsICJub21pbmFsIiwgImFwcGVuZCIsICJ0YXJnZXQiLCAiZGF0YXNldCIsICJhZnRlciIsICJlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlIl0KfQo=
