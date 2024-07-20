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
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
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
//! src/EasyArchive/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("EasyAchive/".concat(version));
//! src/EasyArchive/modules/edit.ts
var edit = ({
  title,
  section,
  text,
  summary,
  callback
}) => {
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
  void api.postWithToken("csrf", param).then(callback);
};
var editAppend = ({
  title,
  addedContent,
  summary,
  callback
}) => {
  const param = {
    action: "query",
    prop: ["revisions"],
    rvprop: ["ids", "flags", "timestamp", "user", "userid", "size", "comment", "tags", "content"],
    format: "json",
    formatversion: "2",
    titles: title
  };
  void api.postWithToken("csrf", param).then((data) => {
    var _data$query$pages$0$r;
    edit({
      title,
      section: void 0,
      text: "".concat(((_data$query$pages$0$r = data["query"].pages[0].revisions[0].content) !== null && _data$query$pages$0$r !== void 0 ? _data$query$pages$0$r : "") + addedContent),
      summary,
      callback: callback !== null && callback !== void 0 ? callback : () => {
      }
    });
  });
};
//! src/EasyArchive/modules/expose.ts
var archiveSectionCallback = (title, section, targetTitle, callback, summary) => {
  const param = {
    action: "query",
    prop: ["revisions"],
    rvprop: "content",
    format: "json",
    formatversion: "2",
    titles: title,
    rvsection: section
  };
  void api.postWithToken("csrf", param).then((data) => {
    var _data$query$pages$0$r2;
    editAppend({
      title: targetTitle,
      addedContent: "\n\n".concat((_data$query$pages$0$r2 = data["query"].pages[0].revisions[0].content) !== null && _data$query$pages$0$r2 !== void 0 ? _data$query$pages$0$r2 : false),
      summary
    });
    edit({
      title,
      section: "".concat(section),
      text: "",
      summary,
      callback: callback !== null && callback !== void 0 ? callback : () => {
      }
    });
  });
};
var deleteSectionCallback = (title, section, callback, summary) => {
  edit({
    title,
    section: "".concat(section),
    text: "",
    summary,
    callback: callback !== null && callback !== void 0 ? callback : () => {
    }
  });
};
//! src/EasyArchive/modules/react.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
var elementWrap = (id, innerElement) => {
  const {
    skin
  } = mw.config.get();
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
      className: ["page-info__item"],
      id
    }, innerElement);
  } else if (["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      id
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id
  }, innerElement);
};
var emptyElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null);
var linkWrap = (textContent, href) => /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  href,
  textContent
});
var onClickWrap = (textContent, onClick, dataActual, dataNominal) => /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  class: ["easy-archive-link", "easy-archive-link-".concat(dataActual, "-").concat(dataNominal)],
  onClick,
  textContent,
  "data-actual": dataActual,
  "data-nominal": dataNominal
});
var pipeElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  class: "mw-editsection-divider",
  textContent: "|"
});
var sectionIdSpanElement = (id) => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  class: ["easy-archive-section-id-span", "easy-archive-section-id-span-order-".concat(id)],
  style: {
    display: "none"
  }
});
var span = (innerHTML) => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  innerHTML
});
//! src/EasyArchive/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var import_ext_gadget4 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    delete: (0, import_ext_gadget4.localize)({
      en: "delete",
      "zh-hans": "删除",
      "zh-hant": "刪除"
    }),
    archive: (0, import_ext_gadget4.localize)({
      en: "archive",
      "zh-hans": "存档",
      "zh-hant": "存檔"
    }),
    supports: (0, import_ext_gadget4.localize)({
      en: "Easy Archive is enabled on this talk page",
      "zh-hans": "本讨论页面使用 Easy Archive 快速存档",
      "zh-hant": "此頁面使用 Easy Archive"
    }),
    others_page: (0, import_ext_gadget4.localize)({
      en: "Easy Archive is not enabled.",
      "zh-hans": "此页面是他人的用户讨论页面，因此不支持 Easy Archive 快速存档。",
      "zh-hant": "此頁面為他人用戶討論頁面，故不支援 Easy Archive 快速存檔。"
    }),
    to_enable: (0, import_ext_gadget4.localize)({
      en: "This page is not using Easy Archive.",
      "zh-hans": "此页面没有启用 Easy Archive。",
      "zh-hant": "本頁没有啟用 Easy Archive。"
    }),
    enable_on_generic_page: (0, import_ext_gadget4.localize)({
      en: "This page is not your user talk page. However Easy Archive still can be used if needed.To enable it, add {{Easy Archive|to=[Archive location]}} template to this page.",
      "zh-hans": "此页面不是您的用户讨论页面。不过，若需要，此页面可以启用 Easy Archive。若要在此页面使用 Easy Archive，请在页面上添加模板 {{Easy Archive|to=存档位置}}。",
      "zh-hant": "此頁面不是您的用戶討論頁面。不過，若需要，此頁面可以啟用 Easy Archive。若要在此頁面使用 Easy Archive，請在頁面上添加模板 {{Easy Archive|to=存檔位置}}。"
    }),
    please_enable: (0, import_ext_gadget4.localize)({
      en: "Add {{Easy Archive|to=[Archive location]}} to this page to start using Easy Archive.",
      "zh-hans": "请在此页面加入 {{Easy Archive|to=存档地址}} 来启用 Easy Archive。",
      "zh-hant": "請在此頁面加入 {{Easy Archive|to=存檔位置}} 來啟用 Easy Archive。"
    }),
    please_enable_elaborate: (0, import_ext_gadget4.localize)({
      en: "You have the Easy Archive functionality enabled but your talk page hasn't been configured yet. To take advantage of Easy Archive, add {{Easy Archive|to=[Archive location]}} template to this page.",
      "zh-hans": "您的账号已经支持 Easy Archive，但是，为了开始使用该功能，您还需要在自己的用户讨论页面上添加模板 {{Easy Archive|to=存档位置}}。",
      "zh-hant": "您的賬號已經支持 Easy Archive，但是，為了開始使用該功能，您還需要在自己的用戶討論頁面上添加模板 {{Easy Archive|to=存檔位置}}。"
    }),
    left_par_split: (0, import_ext_gadget4.localize)({
      en: " (",
      zh: "（"
    }),
    right_par: (0, import_ext_gadget4.localize)({
      en: ")",
      zh: "）"
    }),
    period: (0, import_ext_gadget4.localize)({
      en: ".",
      zh: "。"
    }),
    archive_path_colon_split: (0, import_ext_gadget4.localize)({
      en: "Archive location: ",
      "zh-hans": "存档地址：",
      "zh-hant": "存檔至："
    }),
    loading_section_i: (0, import_ext_gadget4.localize)({
      en: "Loading section $1",
      "zh-hans": "正在读取第 $1 节的内容",
      "zh-hant": "正在讀取第 $1 節的內容"
    }),
    deleting_section_i: (0, import_ext_gadget4.localize)({
      en: "Deleting section $1",
      "zh-hans": "正在删除第 $1 节的内容",
      "zh-hant": "正在刪除第 $1 節的內容"
    }),
    done_section_i: (0, import_ext_gadget4.localize)({
      en: "Section $1 has been archived to $2",
      "zh-hans": "已经将第 $1 节存档到 $2",
      "zh-hant": "已經將第 $1 節存檔到 $2"
    }),
    done_deleting_section_i: (0, import_ext_gadget4.localize)({
      en: "Section $1 has been deleted",
      "zh-hans": "已经将第 $1 节删除",
      "zh-hant": "已經將第 $1 節刪除"
    }),
    being_archived: (0, import_ext_gadget4.localize)({
      en: "being archived",
      "zh-hans": "存档中",
      "zh-hant": "存檔中"
    }),
    being_deleted: (0, import_ext_gadget4.localize)({
      en: "being deleted",
      "zh-hans": "删除中",
      "zh-hant": "刪除中"
    }),
    already_archived: (0, import_ext_gadget4.localize)({
      en: "archived",
      "zh-hans": "已存档",
      "zh-hant": "已存檔"
    }),
    already_deleted: (0, import_ext_gadget4.localize)({
      en: "deleted",
      "zh-hans": "已删除",
      "zh-hant": "已刪除"
    }),
    others_talk_elaborate: (0, import_ext_gadget4.localize)({
      en: "This page is another user's talk page. You cannot archive the topics on this page for him/her",
      "zh-hans": "这是另一名用户的讨论页面，您不能代替另一名用户存档。",
      "zh-hant": "這是另一名用戶的討論頁面，您不能代替另一名用戶存檔。"
    }),
    page_not_supported: (0, import_ext_gadget4.localize)({
      en: "This page is not supported by Easy Archive.",
      "zh-hans": "此页面不支持 Easy Archive。",
      "zh-hant": "此頁面不支持 Easy Archive。"
    }),
    page_not_supported_elaborate: (0, import_ext_gadget4.localize)({
      en: "These pages are not supported by Easy Archive: File, Template, Module, MediaWiki, Category, Special, JavaScript, CSS, JSON.",
      "zh-hans": "这些页面不受 Easy Archive 支持：File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。",
      "zh-hant": "這些頁面不受 Easy Archive 支持：File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。"
    }),
    problem_with_archive_location_main_space: (0, import_ext_gadget4.localize)({
      en: 'Currently the archive location of this page, "$1", is under the article namespace, where archives should not be normally directed to. Please check if you have the correct archive location.',
      "zh-hans": "此页面目前的存档地址是“$1”，在条目名称空间之下。一般而言不应向条目名称空间进行存档，请检查存档地址。",
      "zh-hant": "此頁面當前的存檔地址是「$1」，在條目名稱空間之下。一般而言不應向條目名稱空間進行存檔，請檢查存檔地址。"
    }),
    problem_with_archive_location_same_page: (0, import_ext_gadget4.localize)({
      en: 'Currently the archive location of this page, "$1", is this page itself, Easy archive cannot operate like this. ',
      "zh-hans": "此页面目前的存档地址是“$1”，和此页面名称相同。Easy Archive 无法按此地址存档。",
      "zh-hant": "此頁面當前的存檔地址是「$1」，和此頁面名稱相同。Easy Archive 無法按此地址存檔。"
    }),
    archive_summary: (0, import_ext_gadget4.localize)({
      en: "archive section",
      "zh-hans": "存档段落",
      "zh-hant": "存檔段落"
    }),
    delete_summary: (0, import_ext_gadget4.localize)({
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
var message = (tag, ...params) => {
  let content = getMessage(tag);
  params = (0, import_ext_gadget3.generateArray)(...params);
  try {
    var _iterator2 = _createForOfIteratorHelper(params.entries()), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const [i, element] = _step2.value;
        const search = "$".concat(i + 1);
        if (content.includes(search)) {
          content = content.replace(search, element !== null && element !== void 0 ? element : "");
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  } catch {
  }
  return content;
};
//! src/EasyArchive/modules/sanitize.ts
var sanitize = (string) => {
  return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
};
//! src/EasyArchive/EasyArchive.js
var import_ext_gadget5 = require("ext.gadget.Toastify");
(function easyArchiveWrap() {
  const {
    wgNamespaceNumber,
    wgPageName,
    wgIsMainPage,
    wgUserName,
    wgCurRevisionId,
    wgRevisionId
  } = mw.config.get();
  if (wgNamespaceNumber < 0 || wgIsMainPage) {
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
  const my_user_talk = on_user_talk && new mw.Title(wgPageName).title === new mw.Title(wgUserName).title;
  const others_user_talk = on_user_talk && !my_user_talk;
  const has_template = page_settings.find("data-init") === "1";
  const on_article = wgNamespaceNumber === 0;
  const on_hist_version = wgCurRevisionId - wgRevisionId !== 0;
  let section_count;
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
        (0, import_ext_gadget5.toastify)({
          text: message(tag_ding, "".concat(section_number), to),
          close: !ding_autohide,
          duration: ding_autohide ? 3e3 : -1
        }, ding_type);
      },
      section_link: () => {
        const nodes = document.querySelectorAll(".easy-archive-section-id-span-order-".concat(section_number));
        var _iterator3 = _createForOfIteratorHelper(nodes), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const node = _step3.value;
            const {
              parentNode
            } = node;
            var _iterator4 = _createForOfIteratorHelper(parentNode.querySelectorAll(".easy-archive-link")), _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                const childNode = _step4.value;
                childNode.style.display = "none";
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            node.innerHTML = message(tag_section);
            node.style.display = "inline";
            node.style.color = "rgb(0 0 0/.5)";
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    };
    return actions;
  };
  const deleteSectionCore = (section_number, _nominal) => {
    const actual_section_number = actual_section(section_number);
    report_doneness_ui(_nominal, "delete", "", "ongoing").ding();
    deleteSectionCallback(wgPageName, actual_section_number, () => {
      report_doneness_ui(_nominal, "delete", "", "done").ding();
      report_doneness_ui(_nominal, "delete", "", "done").section_link();
      nominal_sections[section_number] = true;
    }, message("delete_summary"));
  };
  const deleteSection = (section_number, _nominal) => {
    report_doneness_ui(_nominal, "delete", "", "ongoing").section_link();
    deleteSectionCore(section_number, _nominal);
  };
  const archiveSectionCore = (section_number, _nominal) => {
    const actual_section_number = actual_section(section_number);
    const to = settings.find("arc-loc");
    report_doneness_ui(_nominal, "archive", to, "ongoing").ding();
    archiveSectionCallback(wgPageName, actual_section_number, to, () => {
      report_doneness_ui(_nominal, "archive", to, "done").ding();
      report_doneness_ui(_nominal, "archive", to, "done").section_link();
      nominal_sections[section_number] = true;
    }, message("archive_summary"));
  };
  const archiveSection = (section_number, _nominal) => {
    const to = settings.find("arc-loc");
    report_doneness_ui(_nominal, "archive", to, "ongoing").section_link();
    archiveSectionCore(section_number, _nominal);
  };
  const elaborate_notice = (notice_tag_name) => {
    const notice_tag_dictionary = {
      please_enable_elaborate: ["please_enable_elaborate"],
      others_talk_elaborate: ["others_talk_elaborate"],
      enable_on_generic_page: ["enable_on_generic_page"],
      problem_with_archive_location_main_space: ["problem_with_archive_location_main_space", "warning", "long", false, [sanitize(settings.find("arc-loc"))]],
      problem_with_archive_location_same_page: ["problem_with_archive_location_same_page", "warning", "long", false, [sanitize(settings.find("arc-loc"))]],
      page_not_supported_elaborate: ["page_not_supported_elaborate"]
    };
    const notice_set = notice_tag_dictionary[notice_tag_name] || false;
    if (notice_set !== false) {
      const [ntag, ntype, nttl, npersist, nsubst] = notice_set;
      const toastifyInstance = (0, import_ext_gadget5.toastify)({
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
    var _iterator5 = _createForOfIteratorHelper(blacklist), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const element = _step5.value;
        if (element.test(wgPageName)) {
          return true;
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
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
              deleteSection(dataActual, dataNominal);
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
              archiveSection(dataActual, dataNominal);
            }, actual, nominal));
          }
          ele.childNodes[child_node_number].after(section_delete_interface, section_archive_interface, sectionIdSpanElement("".concat(nominal)));
        } else {
          j++;
        }
      }
      section_count = i - j + 1;
      const easy_archive_supports_notice = emptyElement();
      easy_archive_supports_notice.append(message("supports"), message("left_par_split"), message("archive_path_colon_split"), linkWrap(sanitize(settings.find("arc-loc")), "/wiki/".concat(sanitize(settings.find("arc-loc")))), message("right_par"), message("period"));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9hcGkudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvZWRpdC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9leHBvc2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvcmVhY3QudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvc2FuaXRpemUudHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiNC4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEVhc3lBY2hpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBlZGl0ID0gKHtcblx0dGl0bGUsXG5cdHNlY3Rpb24sXG5cdHRleHQsXG5cdHN1bW1hcnksXG5cdGNhbGxiYWNrLFxufToge1xuXHR0aXRsZTogc3RyaW5nO1xuXHRzZWN0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdHRleHQ6IHN0cmluZztcblx0c3VtbWFyeTogc3RyaW5nO1xuXHRjYWxsYmFjazogKCkgPT4gdm9pZDtcbn0pID0+IHtcblx0Y29uc3QgcGFyYW06IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZSxcblx0XHRzdW1tYXJ5LFxuXHRcdHRleHQsXG5cdH07XG5cdGlmIChzZWN0aW9uKSB7XG5cdFx0cGFyYW0uc2VjdGlvbiA9IHNlY3Rpb247XG5cdH1cblx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtKS50aGVuKGNhbGxiYWNrKTtcbn07XG5cbmNvbnN0IGVkaXRBcHBlbmQgPSAoe1xuXHR0aXRsZSxcblx0YWRkZWRDb250ZW50LFxuXHRzdW1tYXJ5LFxuXHRjYWxsYmFjayxcbn06IHtcblx0dGl0bGU6IHN0cmluZztcblx0YWRkZWRDb250ZW50OiBzdHJpbmc7XG5cdHN1bW1hcnk6IHN0cmluZztcblx0Y2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xufSkgPT4ge1xuXHRjb25zdCBwYXJhbTogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0cnZwcm9wOiBbJ2lkcycsICdmbGFncycsICd0aW1lc3RhbXAnLCAndXNlcicsICd1c2VyaWQnLCAnc2l6ZScsICdjb21tZW50JywgJ3RhZ3MnLCAnY29udGVudCddLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHRpdGxlLFxuXHR9O1xuXG5cdHZvaWQgYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbSkudGhlbigoZGF0YSkgPT4ge1xuXHRcdGVkaXQoe1xuXHRcdFx0dGl0bGUsXG5cdFx0XHRzZWN0aW9uOiB1bmRlZmluZWQsXG5cdFx0XHR0ZXh0OiBgJHsoZGF0YVsncXVlcnknXS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uY29udGVudCA/PyAnJykgKyBhZGRlZENvbnRlbnR9YCxcblx0XHRcdHN1bW1hcnksXG5cdFx0XHRjYWxsYmFjazogY2FsbGJhY2sgPz8gKCgpID0+IHt9KSxcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2VkaXQsIGVkaXRBcHBlbmR9O1xuIiwgImltcG9ydCB7ZWRpdCwgZWRpdEFwcGVuZH0gZnJvbSAnLi9lZGl0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGFyY2hpdmVTZWN0aW9uQ2FsbGJhY2sgPSAoXG5cdHRpdGxlOiBzdHJpbmcsXG5cdHNlY3Rpb246IHN0cmluZyxcblx0dGFyZ2V0VGl0bGU6IHN0cmluZyxcblx0Y2FsbGJhY2s6ICgpID0+IHZvaWQgfCB1bmRlZmluZWQsXG5cdHN1bW1hcnk6IHN0cmluZ1xuKSA9PiB7XG5cdGNvbnN0IHBhcmFtOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRydnNlY3Rpb246IHNlY3Rpb24sXG5cdH07XG5cblx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0ZWRpdEFwcGVuZCh7XG5cdFx0XHR0aXRsZTogdGFyZ2V0VGl0bGUsXG5cdFx0XHRhZGRlZENvbnRlbnQ6IGBcXG5cXG4ke2RhdGFbJ3F1ZXJ5J10ucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQgPz8gZmFsc2V9YCxcblx0XHRcdHN1bW1hcnksXG5cdFx0fSk7XG5cdFx0ZWRpdCh7XG5cdFx0XHR0aXRsZSxcblx0XHRcdHNlY3Rpb246IGAke3NlY3Rpb259YCxcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdGNhbGxiYWNrOiBjYWxsYmFjayA/PyAoKCkgPT4ge30pLFxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbmNvbnN0IGRlbGV0ZVNlY3Rpb25DYWxsYmFjayA9ICh0aXRsZTogc3RyaW5nLCBzZWN0aW9uOiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkIHwgdW5kZWZpbmVkLCBzdW1tYXJ5OiBzdHJpbmcpID0+IHtcblx0ZWRpdCh7dGl0bGUsIHNlY3Rpb246IGAke3NlY3Rpb259YCwgdGV4dDogJycsIHN1bW1hcnksIGNhbGxiYWNrOiBjYWxsYmFjayA/PyAoKCkgPT4ge30pfSk7XG59O1xuXG5leHBvcnQge2FyY2hpdmVTZWN0aW9uQ2FsbGJhY2ssIGRlbGV0ZVNlY3Rpb25DYWxsYmFja307XG4iLCAiaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuY29uc3QgZWxlbWVudFdyYXAgPSAoaWQ6IHN0cmluZywgaW5uZXJFbGVtZW50OiBSZWFjdEVsZW1lbnQpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtbJ3BhZ2UtaW5mb19faXRlbSddfSBpZD17aWR9PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgaWQ9e2lkfT57aW5uZXJFbGVtZW50fTwvbGk+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGlkPXtpZH0+e2lubmVyRWxlbWVudH08L2Rpdj47XG59O1xuXG5jb25zdCBlbXB0eUVsZW1lbnQgPSAoKSA9PiA8PjwvPjtcblxuY29uc3QgbGlua1dyYXAgPSAodGV4dENvbnRlbnQ6IHN0cmluZywgaHJlZjogc3RyaW5nKSA9PiA8YSBocmVmPXtocmVmfSB0ZXh0Q29udGVudD17dGV4dENvbnRlbnR9IC8+O1xuXG5jb25zdCBvbkNsaWNrV3JhcCA9ICh0ZXh0Q29udGVudDogc3RyaW5nLCBvbkNsaWNrOiAoKSA9PiB2b2lkLCBkYXRhQWN0dWFsPzogc3RyaW5nLCBkYXRhTm9taW5hbD86IHN0cmluZykgPT4gKFxuXHQ8YVxuXHRcdGNsYXNzPXtbJ2Vhc3ktYXJjaGl2ZS1saW5rJywgYGVhc3ktYXJjaGl2ZS1saW5rLSR7ZGF0YUFjdHVhbH0tJHtkYXRhTm9taW5hbH1gXX1cblx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHRcdHRleHRDb250ZW50PXt0ZXh0Q29udGVudH1cblx0XHRkYXRhLWFjdHVhbD17ZGF0YUFjdHVhbH1cblx0XHRkYXRhLW5vbWluYWw9e2RhdGFOb21pbmFsfVxuXHQvPlxuKTtcblxuY29uc3QgcGlwZUVsZW1lbnQgPSAoKSA9PiA8c3BhbiBjbGFzcz1cIm13LWVkaXRzZWN0aW9uLWRpdmlkZXJcIiB0ZXh0Q29udGVudD17J3wnfSAvPjtcblxuY29uc3Qgc2VjdGlvbklkU3BhbkVsZW1lbnQgPSAoaWQ6IHN0cmluZykgPT4gKFxuXHQ8c3BhblxuXHRcdGNsYXNzPXtbJ2Vhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4nLCBgZWFzeS1hcmNoaXZlLXNlY3Rpb24taWQtc3Bhbi1vcmRlci0ke2lkfWBdfVxuXHRcdHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX1cblx0Lz5cbik7XG5cbmNvbnN0IHNwYW4gPSAoaW5uZXJIVE1MOiBzdHJpbmcpID0+IDxzcGFuIGlubmVySFRNTD17aW5uZXJIVE1MfSAvPjtcblxuZXhwb3J0IHtlbGVtZW50V3JhcCwgZW1wdHlFbGVtZW50LCBsaW5rV3JhcCwgb25DbGlja1dyYXAsIHBpcGVFbGVtZW50LCBzZWN0aW9uSWRTcGFuRWxlbWVudCwgc3Bhbn07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGRlbGV0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpCcsXG5cdFx0fSksXG5cdFx0YXJjaGl2ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpQnLFxuXHRcdH0pLFxuXHRcdHN1cHBvcnRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBlbmFibGVkIG9uIHRoaXMgdGFsayBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acrOiuqOiuuumhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUnLFxuXHRcdH0pLFxuXHRcdG90aGVyc19wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBub3QgZW5hYmxlZC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5piv5LuW5Lq655qE55So5oi36K6o6K666aG16Z2i77yM5Zug5q2k5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i54K65LuW5Lq655So5oi26KiO6KuW6aCB6Z2i77yM5pWF5LiN5pSv5o+0IEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdHRvX2VuYWJsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHVzaW5nIEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5rKh5pyJ5ZCv55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmnKzpoIHmsqHmnInllZ/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRlbmFibGVfb25fZ2VuZXJpY19wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3QgeW91ciB1c2VyIHRhbGsgcGFnZS4gSG93ZXZlciBFYXN5IEFyY2hpdmUgc3RpbGwgY2FuIGJlIHVzZWQgaWYgbmVlZGVkLlRvIGVuYWJsZSBpdCwgYWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRlbXBsYXRlIHRvIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5q2k6aG16Z2i5LiN5piv5oKo55qE55So5oi36K6o6K666aG16Z2i44CC5LiN6L+H77yM6Iul6ZyA6KaB77yM5q2k6aG16Z2i5Y+v5Lul5ZCv55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzor7flnKjpobXpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5L2N572ufX3jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5q2k6aCB6Z2i5LiN5piv5oKo55qE55So5oi26KiO6KuW6aCB6Z2i44CC5LiN6YGO77yM6Iul6ZyA6KaB77yM5q2k6aCB6Z2i5Y+v5Lul5ZWf55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzoq4vlnKjpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdHBsZWFzZV9lbmFibGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRvIHRoaXMgcGFnZSB0byBzdGFydCB1c2luZyBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+WcqOatpOmhtemdouWKoOWFpSB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPlnLDlnYB9fSDmnaXlkK/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+WcqOatpOmggemdouWKoOWFpSB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59fSDkvobllZ/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46IFwiWW91IGhhdmUgdGhlIEVhc3kgQXJjaGl2ZSBmdW5jdGlvbmFsaXR5IGVuYWJsZWQgYnV0IHlvdXIgdGFsayBwYWdlIGhhc24ndCBiZWVuIGNvbmZpZ3VyZWQgeWV0LiBUbyB0YWtlIGFkdmFudGFnZSBvZiBFYXN5IEFyY2hpdmUsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuXCIsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjnmoTotKblj7flt7Lnu4/mlK/mjIEgRWFzeSBBcmNoaXZl77yM5L2G5piv77yM5Li65LqG5byA5aeL5L2/55So6K+l5Yqf6IO977yM5oKo6L+Y6ZyA6KaB5Zyo6Ieq5bex55qE55So5oi36K6o6K666aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOeahOizrOiZn+W3sue2k+aUr+aMgSBFYXN5IEFyY2hpdmXvvIzkvYbmmK/vvIzngrrkuobplovlp4vkvb/nlKjoqbLlip/og73vvIzmgqjpgoTpnIDopoHlnKjoh6rlt7HnmoTnlKjmiLboqI7oq5bpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdGxlZnRfcGFyX3NwbGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHRyaWdodF9wYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKScsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0cGVyaW9kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHRcdGFyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlIGxvY2F0aW9uOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5Zyw5Z2A77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOiHs++8micsXG5cdFx0fSksXG5cdFx0bG9hZGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZyBzZWN0aW9uICQxJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOivu+WPluesrCAkMSDoioLnmoTlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo6K6A5Y+W56ysICQxIOevgOeahOWFp+WuuScsXG5cdFx0fSksXG5cdFx0ZGVsZXRpbmdfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RlbGV0aW5nIHNlY3Rpb24gJDEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yig6Zmk56ysICQxIOiKgueahOWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjliKrpmaTnrKwgJDEg56+A55qE5YWn5a65Jyxcblx0XHR9KSxcblx0XHRkb25lX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZWN0aW9uICQxIGhhcyBiZWVuIGFyY2hpdmVkIHRvICQyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3sue7j+WwhuesrCAkMSDoioLlrZjmoaPliLAgJDInLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey57aT5bCH56ysICQxIOevgOWtmOaqlOWIsCAkMicsXG5cdFx0fSksXG5cdFx0ZG9uZV9kZWxldGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VjdGlvbiAkMSBoYXMgYmVlbiBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3sue7j+WwhuesrCAkMSDoioLliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey57aT5bCH56ysICQxIOevgOWIqumZpCcsXG5cdFx0fSksXG5cdFx0YmVpbmdfYXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYmVpbmcgYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOS4rScsXG5cdFx0fSksXG5cdFx0YmVpbmdfZGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOS4rScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTkuK0nLFxuXHRcdH0pLFxuXHRcdGFscmVhZHlfYXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWtmOaqlCcsXG5cdFx0fSksXG5cdFx0YWxyZWFkeV9kZWxldGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWIqumZpCcsXG5cdFx0fSksXG5cdFx0b3RoZXJzX3RhbGtfZWxhYm9yYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogXCJUaGlzIHBhZ2UgaXMgYW5vdGhlciB1c2VyJ3MgdGFsayBwYWdlLiBZb3UgY2Fubm90IGFyY2hpdmUgdGhlIHRvcGljcyBvbiB0aGlzIHBhZ2UgZm9yIGhpbS9oZXJcIixcblx0XHRcdCd6aC1oYW5zJzogJ+i/meaYr+WPpuS4gOWQjeeUqOaIt+eahOiuqOiuuumhtemdou+8jOaCqOS4jeiDveS7o+abv+WPpuS4gOWQjeeUqOaIt+WtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfpgJnmmK/lj6bkuIDlkI3nlKjmiLbnmoToqI7oq5bpoIHpnaLvvIzmgqjkuI3og73ku6Pmm7/lj6bkuIDlkI3nlKjmiLblrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdHBhZ2Vfbm90X3N1cHBvcnRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0cGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGVzZSBwYWdlcyBhcmUgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmU6IEZpbGUsIFRlbXBsYXRlLCBNb2R1bGUsIE1lZGlhV2lraSwgQ2F0ZWdvcnksIFNwZWNpYWwsIEphdmFTY3JpcHQsIENTUywgSlNPTi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6L+Z5Lqb6aG16Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJpGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfpgJnkupvpoIHpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8mkZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHR9KSxcblx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBvZiB0aGlzIHBhZ2UsIFwiJDFcIiwgaXMgdW5kZXIgdGhlIGFydGljbGUgbmFtZXNwYWNlLCB3aGVyZSBhcmNoaXZlcyBzaG91bGQgbm90IGJlIG5vcm1hbGx5IGRpcmVjdGVkIHRvLiBQbGVhc2UgY2hlY2sgaWYgeW91IGhhdmUgdGhlIGNvcnJlY3QgYXJjaGl2ZSBsb2NhdGlvbi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3vvIzlnKjmnaHnm67lkI3np7Dnqbrpl7TkuYvkuIvjgILkuIDoiKzogIzoqIDkuI3lupTlkJHmnaHnm67lkI3np7Dnqbrpl7Tov5vooYzlrZjmoaPvvIzor7fmo4Dmn6XlrZjmoaPlnLDlnYDjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3vvIzlnKjmop3nm67lkI3nqLHnqbrplpPkuYvkuIvjgILkuIDoiKzogIzoqIDkuI3mh4nlkJHmop3nm67lkI3nqLHnqbrplpPpgLLooYzlrZjmqpTvvIzoq4vmqqLmn6XlrZjmqpTlnLDlnYDjgIInLFxuXHRcdH0pLFxuXHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlIGFyY2hpdmUgbG9jYXRpb24gb2YgdGhpcyBwYWdlLCBcIiQxXCIsIGlzIHRoaXMgcGFnZSBpdHNlbGYsIEVhc3kgYXJjaGl2ZSBjYW5ub3Qgb3BlcmF0ZSBsaWtlIHRoaXMuICcsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLnm67liY3nmoTlrZjmoaPlnLDlnYDmmK/igJwkMeKAne+8jOWSjOatpOmhtemdouWQjeensOebuOWQjOOAgkVhc3kgQXJjaGl2ZSDml6Dms5XmjInmraTlnLDlnYDlrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3vvIzlkozmraTpoIHpnaLlkI3nqLHnm7jlkIzjgIJFYXN5IEFyY2hpdmUg54Sh5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHRhcmNoaXZlX3N1bW1hcnk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+auteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdGRlbGV0ZV9zdW1tYXJ5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOauteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTmrrXokL0nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuY29uc3QgbWVzc2FnZSA9ICh0YWc6IGtleW9mIHR5cGVvZiBpMThuTWVzc2FnZXMsIC4uLnBhcmFtczogc3RyaW5nW10pID0+IHtcblx0bGV0IGNvbnRlbnQgPSBnZXRNZXNzYWdlKHRhZyk7XG5cdHBhcmFtcyA9IGdlbmVyYXRlQXJyYXkoLi4ucGFyYW1zKTtcblx0dHJ5IHtcblx0XHRmb3IgKGNvbnN0IFtpLCBlbGVtZW50XSBvZiBwYXJhbXMuZW50cmllcygpKSB7XG5cdFx0XHRjb25zdCBzZWFyY2ggPSBgJCR7aSArIDF9YDtcblx0XHRcdGlmIChjb250ZW50LmluY2x1ZGVzKHNlYXJjaCkpIHtcblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQucmVwbGFjZShzZWFyY2gsIGVsZW1lbnQgPz8gJycpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCB7bWVzc2FnZX07XG4iLCAiY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIHN0cmluZ1xuXHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHQucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jylcblx0XHQucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufTtcblxuZXhwb3J0IHtzYW5pdGl6ZX07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9FYXN5QXJjaGl2ZS5sZXNzJztcblxuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FyY2hpdmVTZWN0aW9uQ2FsbGJhY2ssIGRlbGV0ZVNlY3Rpb25DYWxsYmFja30gZnJvbSAnLi9tb2R1bGVzL2V4cG9zZSc7XG5pbXBvcnQge1xuXHRlbGVtZW50V3JhcCxcblx0ZW1wdHlFbGVtZW50LFxuXHRsaW5rV3JhcCxcblx0b25DbGlja1dyYXAsXG5cdHBpcGVFbGVtZW50LFxuXHRzZWN0aW9uSWRTcGFuRWxlbWVudCxcblx0c3Bhbixcbn0gZnJvbSAnLi9tb2R1bGVzL3JlYWN0LnRzeCc7XG5pbXBvcnQge21lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7c2FuaXRpemV9IGZyb20gJy4vbW9kdWxlcy9zYW5pdGl6ZS50cyc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuKGZ1bmN0aW9uIGVhc3lBcmNoaXZlV3JhcCgpIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z0lzTWFpblBhZ2UsIHdnVXNlck5hbWUsIHdnQ3VyUmV2aXNpb25JZCwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPCAwIHx8IHdnSXNNYWluUGFnZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIG1pbmlmaWVkIGNvZGUgZGVwZW5kZW5jeSBmdW5jdGlvbnNcblx0Y2xhc3MgUGFyZV9zdHIge1xuXHRcdGNvbnN0cnVjdG9yKHBhcmVfc3RyaW5nLCBjb25maWcpIHtcblx0XHRcdHRoaXMuc3RyID0gcGFyZV9zdHJpbmc7XG5cdFx0XHR0aGlzLmxlZnQgPSAnKCc7XG5cdFx0XHR0aGlzLmRlbGltID0gJzonO1xuXHRcdFx0dGhpcy5yaWdodCA9ICcpJztcblx0XHRcdGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRjb25maWcgPSBTdHJpbmcoY29uZmlnKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0cGFyZV9zdHJpbmcubGVuZ3RoID4gNiAmJlxuXHRcdFx0XHQvWyMlQF1bU3NdW0VlXVtUdF0vLnRlc3QocGFyZV9zdHJpbmcuc2xpY2UoMCwgNCkpICYmXG5cdFx0XHRcdCFjb25maWcuaW5jbHVkZXMoJ2lnbm9yZS1zZXQnKVxuXHRcdFx0KSB7XG5cdFx0XHRcdFssICwgLCAsIHRoaXMubGVmdCwgdGhpcy5kZWxpbSwgdGhpcy5yaWdodF0gPSBwYXJlX3N0cmluZztcblx0XHRcdFx0aWYgKHRoaXMubGVmdCA9PT0gdGhpcy5yaWdodCB8fCB0aGlzLmxlZnQgPT09IHRoaXMuZGVsaW0gfHwgdGhpcy5yaWdodCA9PT0gdGhpcy5kZWxpbSkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBTeW50YXhFcnJvcihcIlBvdW5kIHNldCBzdGF0ZW1lbnQgaGFzIHJlcGV0aXRpdmUgY2hhcmFjdGVycy4gRS5nLiAnI3NldHw6fCcgaXMgaWxsZWdhbC5cIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluZChsb29rdXBfa2V5KSB7XG5cdFx0XHRsb29rdXBfa2V5ID0gdGhpcy5sZWZ0ICsgbG9va3VwX2tleSArIHRoaXMuZGVsaW07XG5cdFx0XHRpZiAoIXRoaXMuc3RyLmluY2x1ZGVzKGxvb2t1cF9rZXkpKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuc3RyLnNwbGl0KGxvb2t1cF9rZXkpWzFdLnNwbGl0KHRoaXMucmlnaHQpWzBdO1xuXHRcdH1cblx0fVxuXG5cdC8vIGRlZmF1bHQgc2V0dGluZ3M6XG5cdGxldCBzZXR0aW5nc19zdHJpbmcgPVxuXHRcdCcjc2V0JXw/XHRcdFx0XHRcdFx0XHRcdFx0XFxuJyArXG5cdFx0J2Rpc3BsYXkgc2VjdGlvbiBkZWxldGUgbGlua1x0JXNlYy1kZWx8MT9cdFxcbicgK1xuXHRcdCdkaXNwbGF5IHNlY3Rpb24gYXJjaGl2ZSBsaW5lXHQlc2VjLWFyY3wxP1x0XFxuJyArXG5cdFx0J2Rpc3BsYXkgY29udHJvbCBiYXIgYXQgdG9wXHQldG9wLWJhcnwwP1x0XFxuJyArXG5cdFx0J2FyY2hpdmUgbG9jYXRpb25cdFx0XHRcdCVhcmMtbG9jfD9cdFxcbicgK1xuXHRcdCdzdWJzZWN0aW9uIGVmZmVjdGl2ZW5lc3NcdFx0JXN1Yi1zZWN8Mj9cdFxcbicgK1xuXHRcdCdjb25maXJtIGFjdGlvblx0XHRcdFx0JWNvbmZpcm18MD9cdFxcbicgK1xuXHRcdCdpcyB0aGlzIGRhdGEgaW5pdGlhbGl6ZWRcdFx0JWRhdGEtaW5pdHwwPyBcXG4nO1xuXHRsZXQgc2V0dGluZ3MgPSBuZXcgUGFyZV9zdHIoc2V0dGluZ3Nfc3RyaW5nKTtcblx0Y29uc3QgbmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4ID0gW107XG5cdGNvbnN0IGRpc19zdXBwb3J0X3RoZXNlX3BhZ2VzX3JlZ2V4ID0gW1xuXHRcdC9eRmlsZTouKiQvLFxuXHRcdC9eTWVkaWFXaWtpOi4qJC8sXG5cdFx0L15Nb2R1bGU6LiokLyxcblx0XHQvXkNhdGVnb3J5Oi4qJC8sXG5cdFx0L15UZW1wbGF0ZTouKiQvLFxuXHRcdC9eU3BlY2lhbDouKiQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuY3NzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXHRdO1xuXHRjb25zdCBzZXR0aW5nc19zcGFuX2NvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWFzeV9hcmNoaXZlX2RhdGFfcG9pbnRfY29sbGVjdGlvbicpO1xuXHRjb25zdCBbc2V0dGluZ3Nfc3Bhbl0gPSBzZXR0aW5nc19zcGFuX2NvbGxlY3Rpb247XG5cdGNvbnN0IHBhZ2Vfc2V0dGluZ3MgPSBzZXR0aW5nc19zcGFuID8gbmV3IFBhcmVfc3RyKHNldHRpbmdzX3NwYW4uaW5uZXJIVE1MKSA6IG5ldyBQYXJlX3N0cignJyk7XG5cdGlmIChwYWdlX3NldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMScpIHtcblx0XHRzZXR0aW5nc19zdHJpbmcgPSBzZXR0aW5nc19zcGFuLmlubmVySFRNTDtcblx0XHRzZXR0aW5ncyA9IG5ldyBQYXJlX3N0cihzZXR0aW5nc19zdHJpbmcpO1xuXHR9XG5cdC8vIGlkZW50aWZ5IGlmIEVhc3kgQXJjaGl2ZSBjYW4gYmUgdXNlZCBvbiB0aGUgcGFnZSAtIGNvbXBhdGliaWxpdHlcblx0Y29uc3Qgb25fdXNlcl90YWxrID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDM7XG5cdGNvbnN0IG15X3VzZXJfdGFsayA9IG9uX3VzZXJfdGFsayAmJiBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSkudGl0bGUgPT09IG5ldyBtdy5UaXRsZSh3Z1VzZXJOYW1lKS50aXRsZTtcblx0Y29uc3Qgb3RoZXJzX3VzZXJfdGFsayA9IG9uX3VzZXJfdGFsayAmJiAhbXlfdXNlcl90YWxrO1xuXHRjb25zdCBoYXNfdGVtcGxhdGUgPSBwYWdlX3NldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMSc7XG5cdGNvbnN0IG9uX2FydGljbGUgPSB3Z05hbWVzcGFjZU51bWJlciA9PT0gMDtcblx0Y29uc3Qgb25faGlzdF92ZXJzaW9uID0gd2dDdXJSZXZpc2lvbklkIC0gd2dSZXZpc2lvbklkICE9PSAwO1xuXHRsZXQgc2VjdGlvbl9jb3VudDtcblx0Y29uc3Qgbm9taW5hbF9zZWN0aW9ucyA9ICgoY291bnQpID0+IHtcblx0XHRjb25zdCBhcnIgPSBBcnJheS5mcm9tKHtcblx0XHRcdGxlbmd0aDogY291bnQsXG5cdFx0fSk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdFx0XHRhcnJbaV0gPSBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIGFycjtcblx0fSkoc2VjdGlvbl9jb3VudCk7XG5cdGNvbnN0IGFjdHVhbF9zZWN0aW9uID0gKG5vbWluYWxfc2VjdGlvbl9udW1iZXIpID0+IHtcblx0XHRsZXQgbGVzcyA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBub21pbmFsX3NlY3Rpb25fbnVtYmVyOyBpKyspIHtcblx0XHRcdGlmIChub21pbmFsX3NlY3Rpb25zW2ldID09PSB0cnVlKSB7XG5cdFx0XHRcdGxlc3MrKztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG5vbWluYWxfc2VjdGlvbl9udW1iZXIgLSBsZXNzO1xuXHR9O1xuXHQvLyAuLi4gaW50ZXJmYWNlIGRvbmVcblx0Ly8gYXJjaGl2aW5nIGxvZ2ljIGluamVjdGlvblxuXHRjb25zdCByZXBvcnRfZG9uZW5lc3NfdWkgPSAoc2VjdGlvbl9udW1iZXIsIGRvbmVuZXNzX3R5cGUsIHRvLCBvbmdvaW5nX29yX2RvbmUpID0+IHtcblx0XHRsZXQgdGFnX2Rpbmc7XG5cdFx0bGV0IHRhZ19zZWN0aW9uO1xuXHRcdGxldCBkaW5nX3R5cGU7XG5cdFx0bGV0IGRpbmdfYXV0b2hpZGU7XG5cdFx0aWYgKG9uZ29pbmdfb3JfZG9uZSA9PT0gJ29uZ29pbmcnKSB7XG5cdFx0XHRkaW5nX3R5cGUgPSAnaW5mbyc7XG5cdFx0XHRkaW5nX2F1dG9oaWRlID0gdHJ1ZTtcblx0XHRcdGlmIChkb25lbmVzc190eXBlID09PSAnZGVsZXRlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdkZWxldGluZ19zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdiZWluZ19kZWxldGVkJztcblx0XHRcdH0gZWxzZSBpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2FyY2hpdmUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2xvYWRpbmdfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYmVpbmdfYXJjaGl2ZWQnO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAob25nb2luZ19vcl9kb25lID09PSAnZG9uZScpIHtcblx0XHRcdGRpbmdfdHlwZSA9ICdzdWNjZXNzJztcblx0XHRcdGRpbmdfYXV0b2hpZGUgPSBmYWxzZTtcblx0XHRcdGlmIChkb25lbmVzc190eXBlID09PSAnZGVsZXRlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdkb25lX2RlbGV0aW5nX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2FscmVhZHlfZGVsZXRlZCc7XG5cdFx0XHR9IGVsc2UgaWYgKGRvbmVuZXNzX3R5cGUgPT09ICdhcmNoaXZlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdkb25lX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2FscmVhZHlfYXJjaGl2ZWQnO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBhY3Rpb25zID0ge1xuXHRcdFx0ZGluZzogKCkgPT4ge1xuXHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBtZXNzYWdlKHRhZ19kaW5nLCBgJHtzZWN0aW9uX251bWJlcn1gLCB0byksXG5cdFx0XHRcdFx0XHRjbG9zZTogIWRpbmdfYXV0b2hpZGUsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogZGluZ19hdXRvaGlkZSA/IDMwMDAgOiAtMSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGRpbmdfdHlwZVxuXHRcdFx0XHQpO1xuXHRcdFx0fSxcblx0XHRcdHNlY3Rpb25fbGluazogKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5lYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuLW9yZGVyLSR7c2VjdGlvbl9udW1iZXJ9YCk7XG5cdFx0XHRcdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuXHRcdFx0XHRcdGNvbnN0IHtwYXJlbnROb2RlfSA9IG5vZGU7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBjaGlsZE5vZGUgb2YgcGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuZWFzeS1hcmNoaXZlLWxpbmsnKSkge1xuXHRcdFx0XHRcdFx0Y2hpbGROb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5vZGUuaW5uZXJIVE1MID0gbWVzc2FnZSh0YWdfc2VjdGlvbik7XG5cdFx0XHRcdFx0bm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG5cdFx0XHRcdFx0bm9kZS5zdHlsZS5jb2xvciA9ICdyZ2IoMCAwIDAvLjUpJztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9O1xuXHRcdHJldHVybiBhY3Rpb25zO1xuXHR9O1xuXHRjb25zdCBkZWxldGVTZWN0aW9uQ29yZSA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCBhY3R1YWxfc2VjdGlvbl9udW1iZXIgPSBhY3R1YWxfc2VjdGlvbihzZWN0aW9uX251bWJlcik7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdvbmdvaW5nJykuZGluZygpO1xuXHRcdGRlbGV0ZVNlY3Rpb25DYWxsYmFjayhcblx0XHRcdHdnUGFnZU5hbWUsXG5cdFx0XHRhY3R1YWxfc2VjdGlvbl9udW1iZXIsXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2RlbGV0ZScsICcnLCAnZG9uZScpLmRpbmcoKTtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdkb25lJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0XHRcdG5vbWluYWxfc2VjdGlvbnNbc2VjdGlvbl9udW1iZXJdID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRtZXNzYWdlKCdkZWxldGVfc3VtbWFyeScpXG5cdFx0KTtcblx0fTtcblx0Y29uc3QgZGVsZXRlU2VjdGlvbiA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ29uZ29pbmcnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRkZWxldGVTZWN0aW9uQ29yZShzZWN0aW9uX251bWJlciwgX25vbWluYWwpO1xuXHR9O1xuXHRjb25zdCBhcmNoaXZlU2VjdGlvbkNvcmUgPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0Y29uc3QgYWN0dWFsX3NlY3Rpb25fbnVtYmVyID0gYWN0dWFsX3NlY3Rpb24oc2VjdGlvbl9udW1iZXIpO1xuXHRcdGNvbnN0IHRvID0gc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpO1xuXHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ29uZ29pbmcnKS5kaW5nKCk7XG5cdFx0YXJjaGl2ZVNlY3Rpb25DYWxsYmFjayhcblx0XHRcdHdnUGFnZU5hbWUsXG5cdFx0XHRhY3R1YWxfc2VjdGlvbl9udW1iZXIsXG5cdFx0XHR0byxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnZG9uZScpLmRpbmcoKTtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnZG9uZScpLnNlY3Rpb25fbGluaygpO1xuXHRcdFx0XHRub21pbmFsX3NlY3Rpb25zW3NlY3Rpb25fbnVtYmVyXSA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0bWVzc2FnZSgnYXJjaGl2ZV9zdW1tYXJ5Jylcblx0XHQpO1xuXHR9O1xuXHRjb25zdCBhcmNoaXZlU2VjdGlvbiA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCB0byA9IHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKTtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdvbmdvaW5nJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0YXJjaGl2ZVNlY3Rpb25Db3JlKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCk7XG5cdH07XG5cdGNvbnN0IGVsYWJvcmF0ZV9ub3RpY2UgPSAobm90aWNlX3RhZ19uYW1lKSA9PiB7XG5cdFx0Ly8gYWNyb255bSBzY2hlbWU6IHJlZmVyIHRvIHF3ZXJ0eSBrZXlib2FyZCBsYXlvdXQuIChwPTkpXG5cdFx0Y29uc3Qgbm90aWNlX3RhZ19kaWN0aW9uYXJ5ID0ge1xuXHRcdFx0cGxlYXNlX2VuYWJsZV9lbGFib3JhdGU6IFsncGxlYXNlX2VuYWJsZV9lbGFib3JhdGUnXSxcblx0XHRcdG90aGVyc190YWxrX2VsYWJvcmF0ZTogWydvdGhlcnNfdGFsa19lbGFib3JhdGUnXSxcblx0XHRcdGVuYWJsZV9vbl9nZW5lcmljX3BhZ2U6IFsnZW5hYmxlX29uX2dlbmVyaWNfcGFnZSddLFxuXHRcdFx0cHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZTogW1xuXHRcdFx0XHQncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZScsXG5cdFx0XHRcdCd3YXJuaW5nJyxcblx0XHRcdFx0J2xvbmcnLFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0W3Nhbml0aXplKHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSldLFxuXHRcdFx0XSxcblx0XHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZTogW1xuXHRcdFx0XHQncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlJyxcblx0XHRcdFx0J3dhcm5pbmcnLFxuXHRcdFx0XHQnbG9uZycsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRbc2FuaXRpemUoc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKV0sXG5cdFx0XHRdLFxuXHRcdFx0cGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZTogWydwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlJ10sXG5cdFx0fTtcblx0XHRjb25zdCBub3RpY2Vfc2V0ID0gbm90aWNlX3RhZ19kaWN0aW9uYXJ5W25vdGljZV90YWdfbmFtZV0gfHwgZmFsc2U7XG5cdFx0aWYgKG5vdGljZV9zZXQgIT09IGZhbHNlKSB7XG5cdFx0XHRjb25zdCBbbnRhZywgbnR5cGUsIG50dGwsIG5wZXJzaXN0LCBuc3Vic3RdID0gbm90aWNlX3NldDtcblx0XHRcdGNvbnN0IHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5vZGU6IHNwYW4obWVzc2FnZShudGFnLCBuc3Vic3QpKSxcblx0XHRcdFx0XHRjbG9zZTogbnR0bCA9PT0gJ2xvbmcnLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiBudHRsID09PSAnbG9uZycgPyAtMSA6IG50dGwsXG5cdFx0XHRcdFx0b25DbGljazogKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKG5wZXJzaXN0KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0bnR5cGVcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHQvLyByZWFsIGRlYWwgaGVyZVxuXHQvLyBpbnRlcmZhY2UgaW5qZWN0aW9uIC0gcHJlcGFyZVxuXHRjb25zdCBzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaW5oaWJpdCA9IHNldHRpbmdzLmZpbmQoJ3NlYy1kZWwnKSA9PT0gJzAnIHx8IHNldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMCc7XG5cdGNvbnN0IHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaW5oaWJpdCA9IHNldHRpbmdzLmZpbmQoJ3NlYy1hcmMnKSA9PT0gJzAnIHx8IHNldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMCc7XG5cdGNvbnN0IHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZSA9IGVtcHR5RWxlbWVudCgpO1xuXHRjb25zdCBzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlID0gZW1wdHlFbGVtZW50KCk7XG5cdGxldCBmb290ZXJfaW5mb19lbGU7XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKS5sZW5ndGgpIHtcblx0XHRbZm9vdGVyX2luZm9fZWxlXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHR9IGVsc2Uge1xuXHRcdGZvb3Rlcl9pbmZvX2VsZSA9IGVtcHR5RWxlbWVudCgpO1xuXHR9XG5cdC8vIC4uLiBpbnRlcmZhY2UgaW5qZWN0aW9uIC0gbG9naWNcblx0Y29uc3QgaXNfaW5fYmxhY2tsaXN0ID0gKGJsYWNrbGlzdCkgPT4ge1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja2xpc3QpIHtcblx0XHRcdGlmIChlbGVtZW50LnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0aWYgKG9uX2FydGljbGUgfHwgb25faGlzdF92ZXJzaW9uKSB7XG5cdFx0cmV0dXJuOyAvLyBpbnNlcnQgbm8gaW50ZXJmYWNlIG9uIGFuIGFydGljbGUgcGFnZSBvciBhIGhpc3RvcnkgdmVyc2lvbi5cblx0fVxuXHRpZiAoaXNfaW5fYmxhY2tsaXN0KG5ldmVyX2VuYWJsZV9vbl90aGVzZV9wYWdlc19yZWdleCkpIHtcblx0XHRyZXR1cm47IC8vIGluc2VydCBubyBpbnRlcmZhY2UgaWYgdGhlIHBhZ2UgbmFtZSBpcyBibGFja2xpc3RlZC5cblx0fVxuXHRpZiAoaXNfaW5fYmxhY2tsaXN0KGRpc19zdXBwb3J0X3RoZXNlX3BhZ2VzX3JlZ2V4KSkge1xuXHRcdC8vIGluc2VydCBub3Qgc3VwcG9ydGVkIG5vdGljZSBpZiB0aGUgcGFnZSBuYW1lIGluZGljYXRlcyB0aGF0IGl0IGlzIG5vdCBzdXBwb3J0ZWQuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcChcblx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyxcblx0XHRcdFx0b25DbGlja1dyYXAobWVzc2FnZSgncGFnZV9ub3Rfc3VwcG9ydGVkJyksIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZWxhYm9yYXRlX25vdGljZSgncGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZScpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0gZWxzZSBpZiAod2dQYWdlTmFtZSA9PT0gc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKSB7XG5cdFx0ZWxhYm9yYXRlX25vdGljZSgncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlJyk7XG5cdH0gZWxzZSBpZiAoaGFzX3RlbXBsYXRlICYmICFvdGhlcnNfdXNlcl90YWxrKSB7XG5cdFx0Ly8gYW55IHBhZ2UgdGhhdCBoYXMgdGVtcGxhdGUgdGhhdCdzIG5vdCBvdGhlcnMnIHRhbGsgcGFnZS4gZnVuY3Rpb24gbm9ybWFsbHkuXG5cdFx0Ly8gISEgdGhlIGFyY2hpdmUgbG9jYXRpb24gaW4gbWFpbiBzcGFjZSBhbmQgbmVlZHMgYXR0ZW50aW9uICEhXG5cdFx0aWYgKC8uKzouKy8udGVzdChzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpICE9PSB0cnVlKSB7XG5cdFx0XHRlbGFib3JhdGVfbm90aWNlKCdwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlJyk7XG5cdFx0fVxuXHRcdGNvbnN0IG5vcm1hbF9mdW5jdGlvbl9pbmplY3RfaW50ZXJmYWNlID0gKCkgPT4ge1xuXHRcdFx0bGV0IGkgPSAwO1xuXHRcdFx0bGV0IGogPSAwO1xuXHRcdFx0Y29uc3QgZWRpdFNlY3Rpb25Db2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm13LWVkaXRzZWN0aW9uJyk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgZWRpdFNlY3Rpb25Db2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGVsZSA9IGVkaXRTZWN0aW9uQ29sbGVjdGlvbltpXTtcblx0XHRcdFx0Y29uc3QgdmUgPSAvWyY/XXZlYWN0aW9uPWVkaXQvLnRlc3QoZWxlLmNoaWxkTm9kZXNbMV0uaHJlZik7XG5cdFx0XHRcdGNvbnN0IGNoaWxkX25vZGVfbnVtYmVyID0gdmUgPyAzIDogMTtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGVsZS5wYXJlbnROb2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2gyJyAmJlxuXHRcdFx0XHRcdGVsZS5wYXJlbnROb2RlLmlkICE9PSAnZmlyc3RIZWFkaW5nJyAmJlxuXHRcdFx0XHRcdGRlY29kZVVSSUNvbXBvbmVudChlbGUuY2hpbGROb2Rlc1tjaGlsZF9ub2RlX251bWJlcl0uaHJlZi5zcGxpdCgvWyY/XXRpdGxlPS8pWzFdLnNwbGl0KCcmJylbMF0pID09PVxuXHRcdFx0XHRcdFx0d2dQYWdlTmFtZVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjb25zdCBhY3R1YWwgPSBOdW1iZXIucGFyc2VJbnQoXG5cdFx0XHRcdFx0XHRlbGUuY2hpbGROb2Rlc1tjaGlsZF9ub2RlX251bWJlcl0uaHJlZi5zcGxpdCgvWyY/XXNlY3Rpb249LylbMV0uc3BsaXQoJyYnKVswXSxcblx0XHRcdFx0XHRcdDEwXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjb25zdCBub21pbmFsID0gaSAtIGogKyAxO1xuXHRcdFx0XHRcdGlmICghc2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2luaGliaXQpIHtcblx0XHRcdFx0XHRcdHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZS5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdHBpcGVFbGVtZW50KCksXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2tXcmFwKFxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2UoJ2RlbGV0ZScpLFxuXHRcdFx0XHRcdFx0XHRcdChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHt0YXJnZXR9ID0gZXZlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkYXRhQWN0dWFsID0gdGFyZ2V0LmRhdGFzZXQuYWN0dWFsO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGF0YU5vbWluYWwgPSB0YXJnZXQuZGF0YXNldC5ub21pbmFsO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlU2VjdGlvbihkYXRhQWN0dWFsLCBkYXRhTm9taW5hbCk7XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRhY3R1YWwsXG5cdFx0XHRcdFx0XHRcdFx0bm9taW5hbFxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIXNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaW5oaWJpdCkge1xuXHRcdFx0XHRcdFx0c2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZS5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdHBpcGVFbGVtZW50KCksXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2tXcmFwKFxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2UoJ2FyY2hpdmUnKSxcblx0XHRcdFx0XHRcdFx0XHQoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB7dGFyZ2V0fSA9IGV2ZW50O1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGF0YUFjdHVhbCA9IHRhcmdldC5kYXRhc2V0LmFjdHVhbDtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRhdGFOb21pbmFsID0gdGFyZ2V0LmRhdGFzZXQubm9taW5hbDtcblx0XHRcdFx0XHRcdFx0XHRcdGFyY2hpdmVTZWN0aW9uKGRhdGFBY3R1YWwsIGRhdGFOb21pbmFsKTtcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdGFjdHVhbCxcblx0XHRcdFx0XHRcdFx0XHRub21pbmFsXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsZS5jaGlsZE5vZGVzW2NoaWxkX25vZGVfbnVtYmVyXS5hZnRlcihcblx0XHRcdFx0XHRcdHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZSxcblx0XHRcdFx0XHRcdHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2UsXG5cdFx0XHRcdFx0XHRzZWN0aW9uSWRTcGFuRWxlbWVudChgJHtub21pbmFsfWApXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRqKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNlY3Rpb25fY291bnQgPSBpIC0gaiArIDE7XG5cdFx0XHRjb25zdCBlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlID0gZW1wdHlFbGVtZW50KCk7XG5cdFx0XHRlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlLmFwcGVuZChcblx0XHRcdFx0bWVzc2FnZSgnc3VwcG9ydHMnKSxcblx0XHRcdFx0bWVzc2FnZSgnbGVmdF9wYXJfc3BsaXQnKSxcblx0XHRcdFx0bWVzc2FnZSgnYXJjaGl2ZV9wYXRoX2NvbG9uX3NwbGl0JyksXG5cdFx0XHRcdGxpbmtXcmFwKHNhbml0aXplKHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSksIGAvd2lraS8ke3Nhbml0aXplKHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSl9YCksXG5cdFx0XHRcdG1lc3NhZ2UoJ3JpZ2h0X3BhcicpLFxuXHRcdFx0XHRtZXNzYWdlKCdwZXJpb2QnKVxuXHRcdFx0KTtcblx0XHRcdGZvb3Rlcl9pbmZvX2VsZS5wcmVwZW5kKGVsZW1lbnRXcmFwKCdlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlJywgZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZSkpO1xuXHRcdH07XG5cdFx0bm9ybWFsX2Z1bmN0aW9uX2luamVjdF9pbnRlcmZhY2UoKTtcblx0fSBlbHNlIGlmIChvdGhlcnNfdXNlcl90YWxrID09PSB0cnVlKSB7XG5cdFx0Ly8gb3RoZXJzIHVzZXIgdGFsay5cblx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChcblx0XHRcdGVsZW1lbnRXcmFwKCdlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZScpLFxuXHRcdFx0b25DbGlja1dyYXAobWVzc2FnZSgnb3RoZXJzX3BhZ2UnKSwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ290aGVyc190YWxrX2VsYWJvcmF0ZScpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9IGVsc2UgaWYgKG15X3VzZXJfdGFsayA9PT0gZmFsc2UpIHtcblx0XHQvLyBhIGdlbmVyaWMgcGFnZSB0aGF0IGRpZCBub3QgZW5hYmxlIGVhc3kgYXJjaGl2ZS5cblx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChcblx0XHRcdGVsZW1lbnRXcmFwKFxuXHRcdFx0XHQnZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UnLFxuXHRcdFx0XHRvbkNsaWNrV3JhcChtZXNzYWdlKCd0b19lbmFibGUnKSwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRlbGFib3JhdGVfbm90aWNlKCdlbmFibGVfb25fZ2VuZXJpY19wYWdlJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHQvLyB0aGVuIGFzc2VydDogKG15X3VzZXJfdGFsayA9PT0gdHJ1ZSksIChoYXNfdGVtcGxhdGUgPT09IGZhbHNlKS5cblx0XHQvLyBteSB1c2VyIHRhbGsgLS0gaW5zdGFsbGVkIGVhc3kgYXJjaGl2ZSBidXQgbGFja2luZyB0ZW1wbGF0ZS5cblx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChcblx0XHRcdGVsZW1lbnRXcmFwKFxuXHRcdFx0XHQnZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UnLFxuXHRcdFx0XHRvbkNsaWNrV3JhcChtZXNzYWdlKCdwbGVhc2VfZW5hYmxlJyksIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZWxhYm9yYXRlX25vdGljZSgncGxlYXNlX2VuYWJsZV9lbGFib3JhdGUnKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxxQkFBc0I7QUFDdEIsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxjQUFBQyxPQUFn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R0FDeEJBLFFBQVEsMEJBQTBCLEdBQ2xDbEQsU0FBU3FFLFNBQVMwQixTQUFTSixLQUFLLFNBQVMsQ0FBQyxHQUFBLFNBQUF4SSxPQUFZa0gsU0FBUzBCLFNBQVNKLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBRSxHQUMxRnpDLFFBQVEsV0FBVyxHQUNuQkEsUUFBUSxRQUFRLENBQ2pCO0FBQ0FpSCxzQkFBZ0JLLFFBQVF2TCxZQUFZLGdDQUFnQzRNLDRCQUE0QixDQUFDO0lBQ2xHO0FBQ0FsQixxQ0FBaUM7RUFDbEMsV0FBV2xFLHFCQUFxQixNQUFNO0FBRXJDMEQsb0JBQWdCSyxRQUNmdkwsWUFBWSw0QkFBNEIsR0FDeENrQixZQUFZK0MsUUFBUSxhQUFhLEdBQUl1SCxXQUFVO0FBQzlDQSxZQUFNQyxlQUFlO0FBQ3JCdEIsdUJBQWlCLHVCQUF1QjtJQUN6QyxDQUFDLENBQ0Y7RUFDRCxXQUFXN0MsaUJBQWlCLE9BQU87QUFFbEM0RCxvQkFBZ0JLLFFBQ2Z2TCxZQUNDLDhCQUNBa0IsWUFBWStDLFFBQVEsV0FBVyxHQUFJdUgsV0FBVTtBQUM1Q0EsWUFBTUMsZUFBZTtBQUNyQnRCLHVCQUFpQix3QkFBd0I7SUFDMUMsQ0FBQyxDQUNGLENBQ0Q7RUFDRCxPQUFPO0FBR05lLG9CQUFnQkssUUFDZnZMLFlBQ0MsOEJBQ0FrQixZQUFZK0MsUUFBUSxlQUFlLEdBQUl1SCxXQUFVO0FBQ2hEQSxZQUFNQyxlQUFlO0FBQ3JCdEIsdUJBQWlCLHlCQUF5QjtJQUMzQyxDQUFDLENBQ0YsQ0FDRDtFQUNEO0FBQ0QsR0FBRzsiLAogICJuYW1lcyI6IFsibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJlZGl0IiwgInRpdGxlIiwgInNlY3Rpb24iLCAidGV4dCIsICJzdW1tYXJ5IiwgImNhbGxiYWNrIiwgInBhcmFtIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwb3N0V2l0aFRva2VuIiwgInRoZW4iLCAiZWRpdEFwcGVuZCIsICJhZGRlZENvbnRlbnQiLCAicHJvcCIsICJydnByb3AiLCAidGl0bGVzIiwgImRhdGEiLCAiX2RhdGEkcXVlcnkkcGFnZXMkMCRyIiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJjb250ZW50IiwgImFyY2hpdmVTZWN0aW9uQ2FsbGJhY2siLCAidGFyZ2V0VGl0bGUiLCAicnZzZWN0aW9uIiwgIl9kYXRhJHF1ZXJ5JHBhZ2VzJDAkcjIiLCAiZGVsZXRlU2VjdGlvbkNhbGxiYWNrIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgImVsZW1lbnRXcmFwIiwgImlkIiwgImlubmVyRWxlbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVtcHR5RWxlbWVudCIsICJGcmFnbWVudCIsICJsaW5rV3JhcCIsICJ0ZXh0Q29udGVudCIsICJocmVmIiwgIm9uQ2xpY2tXcmFwIiwgIm9uQ2xpY2siLCAiZGF0YUFjdHVhbCIsICJkYXRhTm9taW5hbCIsICJjbGFzcyIsICJwaXBlRWxlbWVudCIsICJzZWN0aW9uSWRTcGFuRWxlbWVudCIsICJzdHlsZSIsICJkaXNwbGF5IiwgInNwYW4iLCAiaW5uZXJIVE1MIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImRlbGV0ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJhcmNoaXZlIiwgInN1cHBvcnRzIiwgIm90aGVyc19wYWdlIiwgInRvX2VuYWJsZSIsICJlbmFibGVfb25fZ2VuZXJpY19wYWdlIiwgInBsZWFzZV9lbmFibGUiLCAicGxlYXNlX2VuYWJsZV9lbGFib3JhdGUiLCAibGVmdF9wYXJfc3BsaXQiLCAiemgiLCAicmlnaHRfcGFyIiwgInBlcmlvZCIsICJhcmNoaXZlX3BhdGhfY29sb25fc3BsaXQiLCAibG9hZGluZ19zZWN0aW9uX2kiLCAiZGVsZXRpbmdfc2VjdGlvbl9pIiwgImRvbmVfc2VjdGlvbl9pIiwgImRvbmVfZGVsZXRpbmdfc2VjdGlvbl9pIiwgImJlaW5nX2FyY2hpdmVkIiwgImJlaW5nX2RlbGV0ZWQiLCAiYWxyZWFkeV9hcmNoaXZlZCIsICJhbHJlYWR5X2RlbGV0ZWQiLCAib3RoZXJzX3RhbGtfZWxhYm9yYXRlIiwgInBhZ2Vfbm90X3N1cHBvcnRlZCIsICJwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlIiwgInByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UiLCAicHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlIiwgImFyY2hpdmVfc3VtbWFyeSIsICJkZWxldGVfc3VtbWFyeSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibWVzc2FnZSIsICJ0YWciLCAicGFyYW1zIiwgImdlbmVyYXRlQXJyYXkiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJlbnRyaWVzIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJpIiwgImVsZW1lbnQiLCAidmFsdWUiLCAic2VhcmNoIiwgInJlcGxhY2UiLCAiZXJyIiwgImUiLCAiZiIsICJzYW5pdGl6ZSIsICJzdHJpbmciLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImVhc3lBcmNoaXZlV3JhcCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnSXNNYWluUGFnZSIsICJ3Z1VzZXJOYW1lIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1JldmlzaW9uSWQiLCAiUGFyZV9zdHIiLCAiY29uc3RydWN0b3IiLCAicGFyZV9zdHJpbmciLCAic3RyIiwgImxlZnQiLCAiZGVsaW0iLCAicmlnaHQiLCAiU3RyaW5nIiwgImxlbmd0aCIsICJ0ZXN0IiwgInNsaWNlIiwgIlN5bnRheEVycm9yIiwgImZpbmQiLCAibG9va3VwX2tleSIsICJzcGxpdCIsICJzZXR0aW5nc19zdHJpbmciLCAic2V0dGluZ3MiLCAibmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4IiwgImRpc19zdXBwb3J0X3RoZXNlX3BhZ2VzX3JlZ2V4IiwgInNldHRpbmdzX3NwYW5fY29sbGVjdGlvbiIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInNldHRpbmdzX3NwYW4iLCAicGFnZV9zZXR0aW5ncyIsICJvbl91c2VyX3RhbGsiLCAibXlfdXNlcl90YWxrIiwgIlRpdGxlIiwgIm90aGVyc191c2VyX3RhbGsiLCAiaGFzX3RlbXBsYXRlIiwgIm9uX2FydGljbGUiLCAib25faGlzdF92ZXJzaW9uIiwgInNlY3Rpb25fY291bnQiLCAibm9taW5hbF9zZWN0aW9ucyIsICJjb3VudCIsICJhcnIiLCAiQXJyYXkiLCAiZnJvbSIsICJhY3R1YWxfc2VjdGlvbiIsICJub21pbmFsX3NlY3Rpb25fbnVtYmVyIiwgImxlc3MiLCAicmVwb3J0X2RvbmVuZXNzX3VpIiwgInNlY3Rpb25fbnVtYmVyIiwgImRvbmVuZXNzX3R5cGUiLCAidG8iLCAib25nb2luZ19vcl9kb25lIiwgInRhZ19kaW5nIiwgInRhZ19zZWN0aW9uIiwgImRpbmdfdHlwZSIsICJkaW5nX2F1dG9oaWRlIiwgImFjdGlvbnMiLCAiZGluZyIsICJ0b2FzdGlmeSIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJzZWN0aW9uX2xpbmsiLCAibm9kZXMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAibm9kZSIsICJwYXJlbnROb2RlIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImNoaWxkTm9kZSIsICJjb2xvciIsICJkZWxldGVTZWN0aW9uQ29yZSIsICJfbm9taW5hbCIsICJhY3R1YWxfc2VjdGlvbl9udW1iZXIiLCAiZGVsZXRlU2VjdGlvbiIsICJhcmNoaXZlU2VjdGlvbkNvcmUiLCAiYXJjaGl2ZVNlY3Rpb24iLCAiZWxhYm9yYXRlX25vdGljZSIsICJub3RpY2VfdGFnX25hbWUiLCAibm90aWNlX3RhZ19kaWN0aW9uYXJ5IiwgIm5vdGljZV9zZXQiLCAibnRhZyIsICJudHlwZSIsICJudHRsIiwgIm5wZXJzaXN0IiwgIm5zdWJzdCIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaW5oaWJpdCIsICJzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQiLCAic2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlIiwgInNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2UiLCAiZm9vdGVyX2luZm9fZWxlIiwgImlzX2luX2JsYWNrbGlzdCIsICJibGFja2xpc3QiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAicHJlcGVuZCIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJub3JtYWxfZnVuY3Rpb25faW5qZWN0X2ludGVyZmFjZSIsICJqIiwgImVkaXRTZWN0aW9uQ29sbGVjdGlvbiIsICJlbGUiLCAidmUiLCAiY2hpbGROb2RlcyIsICJjaGlsZF9ub2RlX251bWJlciIsICJ0YWdOYW1lIiwgInRvTG93ZXJDYXNlIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJhY3R1YWwiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgIm5vbWluYWwiLCAiYXBwZW5kIiwgInRhcmdldCIsICJkYXRhc2V0IiwgImFmdGVyIiwgImVhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UiXQp9Cg==
