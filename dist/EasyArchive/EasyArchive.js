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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9hcGkudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvZWRpdC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9leHBvc2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvcmVhY3QudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvc2FuaXRpemUudHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiNC4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEVhc3lBY2hpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBlZGl0ID0gKHtcblx0dGl0bGUsXG5cdHNlY3Rpb24sXG5cdHRleHQsXG5cdHN1bW1hcnksXG5cdGNhbGxiYWNrLFxufToge1xuXHR0aXRsZTogc3RyaW5nO1xuXHRzZWN0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdHRleHQ6IHN0cmluZztcblx0c3VtbWFyeTogc3RyaW5nO1xuXHRjYWxsYmFjazogKCkgPT4gdm9pZDtcbn0pID0+IHtcblx0Y29uc3QgcGFyYW06IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZSxcblx0XHRzdW1tYXJ5LFxuXHRcdHRleHQsXG5cdH07XG5cdGlmIChzZWN0aW9uKSB7XG5cdFx0cGFyYW0uc2VjdGlvbiA9IHNlY3Rpb247XG5cdH1cblx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtKS50aGVuKGNhbGxiYWNrKTtcbn07XG5cbmNvbnN0IGVkaXRBcHBlbmQgPSAoe1xuXHR0aXRsZSxcblx0YWRkZWRDb250ZW50LFxuXHRzdW1tYXJ5LFxuXHRjYWxsYmFjayxcbn06IHtcblx0dGl0bGU6IHN0cmluZztcblx0YWRkZWRDb250ZW50OiBzdHJpbmc7XG5cdHN1bW1hcnk6IHN0cmluZztcblx0Y2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xufSkgPT4ge1xuXHRjb25zdCBwYXJhbTogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0cnZwcm9wOiBbJ2lkcycsICdmbGFncycsICd0aW1lc3RhbXAnLCAndXNlcicsICd1c2VyaWQnLCAnc2l6ZScsICdjb21tZW50JywgJ3RhZ3MnLCAnY29udGVudCddLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHRpdGxlLFxuXHR9O1xuXG5cdHZvaWQgYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbSkudGhlbigoZGF0YSkgPT4ge1xuXHRcdGVkaXQoe1xuXHRcdFx0dGl0bGUsXG5cdFx0XHRzZWN0aW9uOiB1bmRlZmluZWQsXG5cdFx0XHR0ZXh0OiBgJHsoZGF0YVsncXVlcnknXS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uY29udGVudCA/PyAnJykgKyBhZGRlZENvbnRlbnR9YCxcblx0XHRcdHN1bW1hcnksXG5cdFx0XHRjYWxsYmFjazogY2FsbGJhY2sgPz8gKCgpID0+IHt9KSxcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2VkaXQsIGVkaXRBcHBlbmR9O1xuIiwgImltcG9ydCB7ZWRpdCwgZWRpdEFwcGVuZH0gZnJvbSAnLi9lZGl0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGFyY2hpdmVTZWN0aW9uQ2FsbGJhY2sgPSAoXG5cdHRpdGxlOiBzdHJpbmcsXG5cdHNlY3Rpb246IHN0cmluZyxcblx0dGFyZ2V0VGl0bGU6IHN0cmluZyxcblx0Y2FsbGJhY2s6ICgpID0+IHZvaWQgfCB1bmRlZmluZWQsXG5cdHN1bW1hcnk6IHN0cmluZ1xuKSA9PiB7XG5cdGNvbnN0IHBhcmFtOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRydnNlY3Rpb246IHNlY3Rpb24sXG5cdH07XG5cblx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0ZWRpdEFwcGVuZCh7XG5cdFx0XHR0aXRsZTogdGFyZ2V0VGl0bGUsXG5cdFx0XHRhZGRlZENvbnRlbnQ6IGBcXG5cXG4ke2RhdGFbJ3F1ZXJ5J10ucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQgPz8gZmFsc2V9YCxcblx0XHRcdHN1bW1hcnksXG5cdFx0fSk7XG5cdFx0ZWRpdCh7XG5cdFx0XHR0aXRsZSxcblx0XHRcdHNlY3Rpb246IGAke3NlY3Rpb259YCxcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdGNhbGxiYWNrOiBjYWxsYmFjayA/PyAoKCkgPT4ge30pLFxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbmNvbnN0IGRlbGV0ZVNlY3Rpb25DYWxsYmFjayA9ICh0aXRsZTogc3RyaW5nLCBzZWN0aW9uOiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkIHwgdW5kZWZpbmVkLCBzdW1tYXJ5OiBzdHJpbmcpID0+IHtcblx0ZWRpdCh7dGl0bGUsIHNlY3Rpb246IGAke3NlY3Rpb259YCwgdGV4dDogJycsIHN1bW1hcnksIGNhbGxiYWNrOiBjYWxsYmFjayA/PyAoKCkgPT4ge30pfSk7XG59O1xuXG5leHBvcnQge2FyY2hpdmVTZWN0aW9uQ2FsbGJhY2ssIGRlbGV0ZVNlY3Rpb25DYWxsYmFja307XG4iLCAiaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuY29uc3QgZWxlbWVudFdyYXAgPSAoaWQ6IHN0cmluZywgaW5uZXJFbGVtZW50OiBSZWFjdEVsZW1lbnQpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtbJ3BhZ2UtaW5mb19faXRlbSddfSBpZD17aWR9PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgaWQ9e2lkfT57aW5uZXJFbGVtZW50fTwvbGk+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGlkPXtpZH0+e2lubmVyRWxlbWVudH08L2Rpdj47XG59O1xuXG5jb25zdCBlbXB0eUVsZW1lbnQgPSAoKSA9PiA8PjwvPjtcblxuY29uc3QgbGlua1dyYXAgPSAodGV4dENvbnRlbnQ6IHN0cmluZywgaHJlZjogc3RyaW5nKSA9PiA8YSBocmVmPXtocmVmfSB0ZXh0Q29udGVudD17dGV4dENvbnRlbnR9IC8+O1xuXG5jb25zdCBvbkNsaWNrV3JhcCA9ICh0ZXh0Q29udGVudDogc3RyaW5nLCBvbkNsaWNrOiAoKSA9PiB2b2lkLCBkYXRhQWN0dWFsPzogc3RyaW5nLCBkYXRhTm9taW5hbD86IHN0cmluZykgPT4gKFxuXHQ8YVxuXHRcdGNsYXNzPXtbJ2Vhc3ktYXJjaGl2ZS1saW5rJywgYGVhc3ktYXJjaGl2ZS1saW5rLSR7ZGF0YUFjdHVhbH0tJHtkYXRhTm9taW5hbH1gXX1cblx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHRcdHRleHRDb250ZW50PXt0ZXh0Q29udGVudH1cblx0XHRkYXRhLWFjdHVhbD17ZGF0YUFjdHVhbH1cblx0XHRkYXRhLW5vbWluYWw9e2RhdGFOb21pbmFsfVxuXHQvPlxuKTtcblxuY29uc3QgcGlwZUVsZW1lbnQgPSAoKSA9PiA8c3BhbiBjbGFzcz1cIm13LWVkaXRzZWN0aW9uLWRpdmlkZXJcIiB0ZXh0Q29udGVudD17J3wnfSAvPjtcblxuY29uc3Qgc2VjdGlvbklkU3BhbkVsZW1lbnQgPSAoaWQ6IHN0cmluZykgPT4gKFxuXHQ8c3BhblxuXHRcdGNsYXNzPXtbJ2Vhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4nLCBgZWFzeS1hcmNoaXZlLXNlY3Rpb24taWQtc3Bhbi1vcmRlci0ke2lkfWBdfVxuXHRcdHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX1cblx0Lz5cbik7XG5cbmNvbnN0IHNwYW4gPSAoaW5uZXJIVE1MOiBzdHJpbmcpID0+IDxzcGFuIGlubmVySFRNTD17aW5uZXJIVE1MfSAvPjtcblxuZXhwb3J0IHtlbGVtZW50V3JhcCwgZW1wdHlFbGVtZW50LCBsaW5rV3JhcCwgb25DbGlja1dyYXAsIHBpcGVFbGVtZW50LCBzZWN0aW9uSWRTcGFuRWxlbWVudCwgc3Bhbn07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGRlbGV0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpCcsXG5cdFx0fSksXG5cdFx0YXJjaGl2ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpQnLFxuXHRcdH0pLFxuXHRcdHN1cHBvcnRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBlbmFibGVkIG9uIHRoaXMgdGFsayBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acrOiuqOiuuumhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUnLFxuXHRcdH0pLFxuXHRcdG90aGVyc19wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBub3QgZW5hYmxlZC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5piv5LuW5Lq655qE55So5oi36K6o6K666aG16Z2i77yM5Zug5q2k5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i54K65LuW5Lq655So5oi26KiO6KuW6aCB6Z2i77yM5pWF5LiN5pSv5o+0IEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdHRvX2VuYWJsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHVzaW5nIEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5rKh5pyJ5ZCv55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmnKzpoIHmsqHmnInllZ/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRlbmFibGVfb25fZ2VuZXJpY19wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3QgeW91ciB1c2VyIHRhbGsgcGFnZS4gSG93ZXZlciBFYXN5IEFyY2hpdmUgc3RpbGwgY2FuIGJlIHVzZWQgaWYgbmVlZGVkLlRvIGVuYWJsZSBpdCwgYWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRlbXBsYXRlIHRvIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5q2k6aG16Z2i5LiN5piv5oKo55qE55So5oi36K6o6K666aG16Z2i44CC5LiN6L+H77yM6Iul6ZyA6KaB77yM5q2k6aG16Z2i5Y+v5Lul5ZCv55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzor7flnKjpobXpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5L2N572ufX3jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5q2k6aCB6Z2i5LiN5piv5oKo55qE55So5oi26KiO6KuW6aCB6Z2i44CC5LiN6YGO77yM6Iul6ZyA6KaB77yM5q2k6aCB6Z2i5Y+v5Lul5ZWf55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzoq4vlnKjpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdHBsZWFzZV9lbmFibGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRvIHRoaXMgcGFnZSB0byBzdGFydCB1c2luZyBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+WcqOatpOmhtemdouWKoOWFpSB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPlnLDlnYB9fSDmnaXlkK/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+WcqOatpOmggemdouWKoOWFpSB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59fSDkvobllZ/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46IFwiWW91IGhhdmUgdGhlIEVhc3kgQXJjaGl2ZSBmdW5jdGlvbmFsaXR5IGVuYWJsZWQgYnV0IHlvdXIgdGFsayBwYWdlIGhhc24ndCBiZWVuIGNvbmZpZ3VyZWQgeWV0LiBUbyB0YWtlIGFkdmFudGFnZSBvZiBFYXN5IEFyY2hpdmUsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuXCIsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjnmoTotKblj7flt7Lnu4/mlK/mjIEgRWFzeSBBcmNoaXZl77yM5L2G5piv77yM5Li65LqG5byA5aeL5L2/55So6K+l5Yqf6IO977yM5oKo6L+Y6ZyA6KaB5Zyo6Ieq5bex55qE55So5oi36K6o6K666aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOeahOizrOiZn+W3sue2k+aUr+aMgSBFYXN5IEFyY2hpdmXvvIzkvYbmmK/vvIzngrrkuobplovlp4vkvb/nlKjoqbLlip/og73vvIzmgqjpgoTpnIDopoHlnKjoh6rlt7HnmoTnlKjmiLboqI7oq5bpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdGxlZnRfcGFyX3NwbGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHRyaWdodF9wYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKScsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0cGVyaW9kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHRcdGFyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlIGxvY2F0aW9uOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5Zyw5Z2A77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOiHs++8micsXG5cdFx0fSksXG5cdFx0bG9hZGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZyBzZWN0aW9uICQxJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOivu+WPluesrCAkMSDoioLnmoTlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo6K6A5Y+W56ysICQxIOevgOeahOWFp+WuuScsXG5cdFx0fSksXG5cdFx0ZGVsZXRpbmdfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RlbGV0aW5nIHNlY3Rpb24gJDEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yig6Zmk56ysICQxIOiKgueahOWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjliKrpmaTnrKwgJDEg56+A55qE5YWn5a65Jyxcblx0XHR9KSxcblx0XHRkb25lX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZWN0aW9uICQxIGhhcyBiZWVuIGFyY2hpdmVkIHRvICQyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3sue7j+WwhuesrCAkMSDoioLlrZjmoaPliLAgJDInLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey57aT5bCH56ysICQxIOevgOWtmOaqlOWIsCAkMicsXG5cdFx0fSksXG5cdFx0ZG9uZV9kZWxldGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VjdGlvbiAkMSBoYXMgYmVlbiBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3sue7j+WwhuesrCAkMSDoioLliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey57aT5bCH56ysICQxIOevgOWIqumZpCcsXG5cdFx0fSksXG5cdFx0YmVpbmdfYXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYmVpbmcgYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOS4rScsXG5cdFx0fSksXG5cdFx0YmVpbmdfZGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOS4rScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTkuK0nLFxuXHRcdH0pLFxuXHRcdGFscmVhZHlfYXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWtmOaqlCcsXG5cdFx0fSksXG5cdFx0YWxyZWFkeV9kZWxldGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWIqumZpCcsXG5cdFx0fSksXG5cdFx0b3RoZXJzX3RhbGtfZWxhYm9yYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogXCJUaGlzIHBhZ2UgaXMgYW5vdGhlciB1c2VyJ3MgdGFsayBwYWdlLiBZb3UgY2Fubm90IGFyY2hpdmUgdGhlIHRvcGljcyBvbiB0aGlzIHBhZ2UgZm9yIGhpbS9oZXJcIixcblx0XHRcdCd6aC1oYW5zJzogJ+i/meaYr+WPpuS4gOWQjeeUqOaIt+eahOiuqOiuuumhtemdou+8jOaCqOS4jeiDveS7o+abv+WPpuS4gOWQjeeUqOaIt+WtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfpgJnmmK/lj6bkuIDlkI3nlKjmiLbnmoToqI7oq5bpoIHpnaLvvIzmgqjkuI3og73ku6Pmm7/lj6bkuIDlkI3nlKjmiLblrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdHBhZ2Vfbm90X3N1cHBvcnRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0cGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGVzZSBwYWdlcyBhcmUgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmU6IEZpbGUsIFRlbXBsYXRlLCBNb2R1bGUsIE1lZGlhV2lraSwgQ2F0ZWdvcnksIFNwZWNpYWwsIEphdmFTY3JpcHQsIENTUywgSlNPTi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6L+Z5Lqb6aG16Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJpGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfpgJnkupvpoIHpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8mkZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHR9KSxcblx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBvZiB0aGlzIHBhZ2UsIFwiJDFcIiwgaXMgdW5kZXIgdGhlIGFydGljbGUgbmFtZXNwYWNlLCB3aGVyZSBhcmNoaXZlcyBzaG91bGQgbm90IGJlIG5vcm1hbGx5IGRpcmVjdGVkIHRvLiBQbGVhc2UgY2hlY2sgaWYgeW91IGhhdmUgdGhlIGNvcnJlY3QgYXJjaGl2ZSBsb2NhdGlvbi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3vvIzlnKjmnaHnm67lkI3np7Dnqbrpl7TkuYvkuIvjgILkuIDoiKzogIzoqIDkuI3lupTlkJHmnaHnm67lkI3np7Dnqbrpl7Tov5vooYzlrZjmoaPvvIzor7fmo4Dmn6XlrZjmoaPlnLDlnYDjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3vvIzlnKjmop3nm67lkI3nqLHnqbrplpPkuYvkuIvjgILkuIDoiKzogIzoqIDkuI3mh4nlkJHmop3nm67lkI3nqLHnqbrplpPpgLLooYzlrZjmqpTvvIzoq4vmqqLmn6XlrZjmqpTlnLDlnYDjgIInLFxuXHRcdH0pLFxuXHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlIGFyY2hpdmUgbG9jYXRpb24gb2YgdGhpcyBwYWdlLCBcIiQxXCIsIGlzIHRoaXMgcGFnZSBpdHNlbGYsIEVhc3kgYXJjaGl2ZSBjYW5ub3Qgb3BlcmF0ZSBsaWtlIHRoaXMuICcsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLnm67liY3nmoTlrZjmoaPlnLDlnYDmmK/igJwkMeKAne+8jOWSjOatpOmhtemdouWQjeensOebuOWQjOOAgkVhc3kgQXJjaGl2ZSDml6Dms5XmjInmraTlnLDlnYDlrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3vvIzlkozmraTpoIHpnaLlkI3nqLHnm7jlkIzjgIJFYXN5IEFyY2hpdmUg54Sh5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHRhcmNoaXZlX3N1bW1hcnk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+auteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdGRlbGV0ZV9zdW1tYXJ5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOauteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTmrrXokL0nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuY29uc3QgbWVzc2FnZSA9ICh0YWc6IGtleW9mIHR5cGVvZiBpMThuTWVzc2FnZXMsIC4uLnBhcmFtczogc3RyaW5nW10pID0+IHtcblx0bGV0IGNvbnRlbnQgPSBnZXRNZXNzYWdlKHRhZyk7XG5cdHBhcmFtcyA9IGdlbmVyYXRlQXJyYXkoLi4ucGFyYW1zKTtcblx0dHJ5IHtcblx0XHRmb3IgKGNvbnN0IFtpLCBlbGVtZW50XSBvZiBwYXJhbXMuZW50cmllcygpKSB7XG5cdFx0XHRjb25zdCBzZWFyY2ggPSBgJCR7aSArIDF9YDtcblx0XHRcdGlmIChjb250ZW50LmluY2x1ZGVzKHNlYXJjaCkpIHtcblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQucmVwbGFjZShzZWFyY2gsIGVsZW1lbnQgPz8gJycpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCB7bWVzc2FnZX07XG4iLCAiY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIHN0cmluZ1xuXHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHQucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jylcblx0XHQucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufTtcblxuZXhwb3J0IHtzYW5pdGl6ZX07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9FYXN5QXJjaGl2ZS5sZXNzJztcblxuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FyY2hpdmVTZWN0aW9uQ2FsbGJhY2ssIGRlbGV0ZVNlY3Rpb25DYWxsYmFja30gZnJvbSAnLi9tb2R1bGVzL2V4cG9zZSc7XG5pbXBvcnQge1xuXHRlbGVtZW50V3JhcCxcblx0ZW1wdHlFbGVtZW50LFxuXHRsaW5rV3JhcCxcblx0b25DbGlja1dyYXAsXG5cdHBpcGVFbGVtZW50LFxuXHRzZWN0aW9uSWRTcGFuRWxlbWVudCxcblx0c3Bhbixcbn0gZnJvbSAnLi9tb2R1bGVzL3JlYWN0LnRzeCc7XG5pbXBvcnQge21lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7c2FuaXRpemV9IGZyb20gJy4vbW9kdWxlcy9zYW5pdGl6ZS50cyc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuKGZ1bmN0aW9uIGVhc3lBcmNoaXZlV3JhcCgpIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1VzZXJOYW1lLCB3Z0N1clJldmlzaW9uSWQsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCB8fCB3Z1BhZ2VOYW1lID09PSAnUWl1d2VuOummlumhtScpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBtaW5pZmllZCBjb2RlIGRlcGVuZGVuY3kgZnVuY3Rpb25zXG5cdGNsYXNzIFBhcmVfc3RyIHtcblx0XHRjb25zdHJ1Y3RvcihwYXJlX3N0cmluZywgY29uZmlnKSB7XG5cdFx0XHR0aGlzLnN0ciA9IHBhcmVfc3RyaW5nO1xuXHRcdFx0dGhpcy5sZWZ0ID0gJygnO1xuXHRcdFx0dGhpcy5kZWxpbSA9ICc6Jztcblx0XHRcdHRoaXMucmlnaHQgPSAnKSc7XG5cdFx0XHRpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Y29uZmlnID0gU3RyaW5nKGNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHBhcmVfc3RyaW5nLmxlbmd0aCA+IDYgJiZcblx0XHRcdFx0L1sjJUBdW1NzXVtFZV1bVHRdLy50ZXN0KHBhcmVfc3RyaW5nLnNsaWNlKDAsIDQpKSAmJlxuXHRcdFx0XHQhY29uZmlnLmluY2x1ZGVzKCdpZ25vcmUtc2V0Jylcblx0XHRcdCkge1xuXHRcdFx0XHRbLCAsICwgLCB0aGlzLmxlZnQsIHRoaXMuZGVsaW0sIHRoaXMucmlnaHRdID0gcGFyZV9zdHJpbmc7XG5cdFx0XHRcdGlmICh0aGlzLmxlZnQgPT09IHRoaXMucmlnaHQgfHwgdGhpcy5sZWZ0ID09PSB0aGlzLmRlbGltIHx8IHRoaXMucmlnaHQgPT09IHRoaXMuZGVsaW0pIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJQb3VuZCBzZXQgc3RhdGVtZW50IGhhcyByZXBldGl0aXZlIGNoYXJhY3RlcnMuIEUuZy4gJyNzZXR8OnwnIGlzIGlsbGVnYWwuXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmQobG9va3VwX2tleSkge1xuXHRcdFx0bG9va3VwX2tleSA9IHRoaXMubGVmdCArIGxvb2t1cF9rZXkgKyB0aGlzLmRlbGltO1xuXHRcdFx0aWYgKCF0aGlzLnN0ci5pbmNsdWRlcyhsb29rdXBfa2V5KSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnN0ci5zcGxpdChsb29rdXBfa2V5KVsxXS5zcGxpdCh0aGlzLnJpZ2h0KVswXTtcblx0XHR9XG5cdH1cblxuXHQvLyBkZWZhdWx0IHNldHRpbmdzOlxuXHRsZXQgc2V0dGluZ3Nfc3RyaW5nID1cblx0XHQnI3NldCV8P1x0XHRcdFx0XHRcdFx0XHRcdFxcbicgK1xuXHRcdCdkaXNwbGF5IHNlY3Rpb24gZGVsZXRlIGxpbmtcdCVzZWMtZGVsfDE/XHRcXG4nICtcblx0XHQnZGlzcGxheSBzZWN0aW9uIGFyY2hpdmUgbGluZVx0JXNlYy1hcmN8MT9cdFxcbicgK1xuXHRcdCdkaXNwbGF5IGNvbnRyb2wgYmFyIGF0IHRvcFx0JXRvcC1iYXJ8MD9cdFxcbicgK1xuXHRcdCdhcmNoaXZlIGxvY2F0aW9uXHRcdFx0XHQlYXJjLWxvY3w/XHRcXG4nICtcblx0XHQnc3Vic2VjdGlvbiBlZmZlY3RpdmVuZXNzXHRcdCVzdWItc2VjfDI/XHRcXG4nICtcblx0XHQnY29uZmlybSBhY3Rpb25cdFx0XHRcdCVjb25maXJtfDA/XHRcXG4nICtcblx0XHQnaXMgdGhpcyBkYXRhIGluaXRpYWxpemVkXHRcdCVkYXRhLWluaXR8MD8gXFxuJztcblx0bGV0IHNldHRpbmdzID0gbmV3IFBhcmVfc3RyKHNldHRpbmdzX3N0cmluZyk7XG5cdGNvbnN0IG5ldmVyX2VuYWJsZV9vbl90aGVzZV9wYWdlc19yZWdleCA9IFtdO1xuXHRjb25zdCBkaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCA9IFtcblx0XHQvXkZpbGU6LiokLyxcblx0XHQvXk1lZGlhV2lraTouKiQvLFxuXHRcdC9eTW9kdWxlOi4qJC8sXG5cdFx0L15DYXRlZ29yeTouKiQvLFxuXHRcdC9eVGVtcGxhdGU6LiokLyxcblx0XHQvXlNwZWNpYWw6LiokLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmNzcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzb24kLyxcblx0XTtcblx0Y29uc3Qgc2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVhc3lfYXJjaGl2ZV9kYXRhX3BvaW50X2NvbGxlY3Rpb24nKTtcblx0Y29uc3QgW3NldHRpbmdzX3NwYW5dID0gc2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uO1xuXHRjb25zdCBwYWdlX3NldHRpbmdzID0gc2V0dGluZ3Nfc3BhbiA/IG5ldyBQYXJlX3N0cihzZXR0aW5nc19zcGFuLmlubmVySFRNTCkgOiBuZXcgUGFyZV9zdHIoJycpO1xuXHRpZiAocGFnZV9zZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzEnKSB7XG5cdFx0c2V0dGluZ3Nfc3RyaW5nID0gc2V0dGluZ3Nfc3Bhbi5pbm5lckhUTUw7XG5cdFx0c2V0dGluZ3MgPSBuZXcgUGFyZV9zdHIoc2V0dGluZ3Nfc3RyaW5nKTtcblx0fVxuXHQvLyBpZGVudGlmeSBpZiBFYXN5IEFyY2hpdmUgY2FuIGJlIHVzZWQgb24gdGhlIHBhZ2UgLSBjb21wYXRpYmlsaXR5XG5cdGNvbnN0IG9uX3VzZXJfdGFsayA9IHdnTmFtZXNwYWNlTnVtYmVyID09PSAzO1xuXHRjb25zdCBteV91c2VyX3RhbGsgPSBvbl91c2VyX3RhbGsgJiYgbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpLnRpdGxlID09PSBuZXcgbXcuVGl0bGUod2dVc2VyTmFtZSkudGl0bGU7XG5cdGNvbnN0IG90aGVyc191c2VyX3RhbGsgPSBvbl91c2VyX3RhbGsgJiYgIW15X3VzZXJfdGFsaztcblx0Y29uc3QgaGFzX3RlbXBsYXRlID0gcGFnZV9zZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzEnO1xuXHRjb25zdCBvbl9hcnRpY2xlID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDA7XG5cdGNvbnN0IG9uX2hpc3RfdmVyc2lvbiA9IHdnQ3VyUmV2aXNpb25JZCAtIHdnUmV2aXNpb25JZCAhPT0gMDtcblx0bGV0IHNlY3Rpb25fY291bnQ7XG5cdGNvbnN0IG5vbWluYWxfc2VjdGlvbnMgPSAoKGNvdW50KSA9PiB7XG5cdFx0Y29uc3QgYXJyID0gQXJyYXkuZnJvbSh7XG5cdFx0XHRsZW5ndGg6IGNvdW50LFxuXHRcdH0pO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXHRcdFx0YXJyW2ldID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBhcnI7XG5cdH0pKHNlY3Rpb25fY291bnQpO1xuXHRjb25zdCBhY3R1YWxfc2VjdGlvbiA9IChub21pbmFsX3NlY3Rpb25fbnVtYmVyKSA9PiB7XG5cdFx0bGV0IGxlc3MgPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbm9taW5hbF9zZWN0aW9uX251bWJlcjsgaSsrKSB7XG5cdFx0XHRpZiAobm9taW5hbF9zZWN0aW9uc1tpXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRsZXNzKys7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBub21pbmFsX3NlY3Rpb25fbnVtYmVyIC0gbGVzcztcblx0fTtcblx0Ly8gLi4uIGludGVyZmFjZSBkb25lXG5cdC8vIGFyY2hpdmluZyBsb2dpYyBpbmplY3Rpb25cblx0Y29uc3QgcmVwb3J0X2RvbmVuZXNzX3VpID0gKHNlY3Rpb25fbnVtYmVyLCBkb25lbmVzc190eXBlLCB0bywgb25nb2luZ19vcl9kb25lKSA9PiB7XG5cdFx0bGV0IHRhZ19kaW5nO1xuXHRcdGxldCB0YWdfc2VjdGlvbjtcblx0XHRsZXQgZGluZ190eXBlO1xuXHRcdGxldCBkaW5nX2F1dG9oaWRlO1xuXHRcdGlmIChvbmdvaW5nX29yX2RvbmUgPT09ICdvbmdvaW5nJykge1xuXHRcdFx0ZGluZ190eXBlID0gJ2luZm8nO1xuXHRcdFx0ZGluZ19hdXRvaGlkZSA9IHRydWU7XG5cdFx0XHRpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2RlbGV0ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnZGVsZXRpbmdfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYmVpbmdfZGVsZXRlZCc7XG5cdFx0XHR9IGVsc2UgaWYgKGRvbmVuZXNzX3R5cGUgPT09ICdhcmNoaXZlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdsb2FkaW5nX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2JlaW5nX2FyY2hpdmVkJztcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG9uZ29pbmdfb3JfZG9uZSA9PT0gJ2RvbmUnKSB7XG5cdFx0XHRkaW5nX3R5cGUgPSAnc3VjY2Vzcyc7XG5cdFx0XHRkaW5nX2F1dG9oaWRlID0gZmFsc2U7XG5cdFx0XHRpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2RlbGV0ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnZG9uZV9kZWxldGluZ19zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdhbHJlYWR5X2RlbGV0ZWQnO1xuXHRcdFx0fSBlbHNlIGlmIChkb25lbmVzc190eXBlID09PSAnYXJjaGl2ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnZG9uZV9zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdhbHJlYWR5X2FyY2hpdmVkJztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgYWN0aW9ucyA9IHtcblx0XHRcdGRpbmc6ICgpID0+IHtcblx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogbWVzc2FnZSh0YWdfZGluZywgYCR7c2VjdGlvbl9udW1iZXJ9YCwgdG8pLFxuXHRcdFx0XHRcdFx0Y2xvc2U6ICFkaW5nX2F1dG9oaWRlLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IGRpbmdfYXV0b2hpZGUgPyAzMDAwIDogLTEsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRkaW5nX3R5cGVcblx0XHRcdFx0KTtcblx0XHRcdH0sXG5cdFx0XHRzZWN0aW9uX2xpbms6ICgpID0+IHtcblx0XHRcdFx0Y29uc3Qgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZWFzeS1hcmNoaXZlLXNlY3Rpb24taWQtc3Bhbi1vcmRlci0ke3NlY3Rpb25fbnVtYmVyfWApO1xuXHRcdFx0XHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcblx0XHRcdFx0XHRjb25zdCB7cGFyZW50Tm9kZX0gPSBub2RlO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgY2hpbGROb2RlIG9mIHBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgnLmVhc3ktYXJjaGl2ZS1saW5rJykpIHtcblx0XHRcdFx0XHRcdGNoaWxkTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRub2RlLmlubmVySFRNTCA9IG1lc3NhZ2UodGFnX3NlY3Rpb24pO1xuXHRcdFx0XHRcdG5vZGUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXHRcdFx0XHRcdG5vZGUuc3R5bGUuY29sb3IgPSAncmdiKDAgMCAwLy41KSc7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fTtcblx0XHRyZXR1cm4gYWN0aW9ucztcblx0fTtcblx0Y29uc3QgZGVsZXRlU2VjdGlvbkNvcmUgPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0Y29uc3QgYWN0dWFsX3NlY3Rpb25fbnVtYmVyID0gYWN0dWFsX3NlY3Rpb24oc2VjdGlvbl9udW1iZXIpO1xuXHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2RlbGV0ZScsICcnLCAnb25nb2luZycpLmRpbmcoKTtcblx0XHRkZWxldGVTZWN0aW9uQ2FsbGJhY2soXG5cdFx0XHR3Z1BhZ2VOYW1lLFxuXHRcdFx0YWN0dWFsX3NlY3Rpb25fbnVtYmVyLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ2RvbmUnKS5kaW5nKCk7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2RlbGV0ZScsICcnLCAnZG9uZScpLnNlY3Rpb25fbGluaygpO1xuXHRcdFx0XHRub21pbmFsX3NlY3Rpb25zW3NlY3Rpb25fbnVtYmVyXSA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0bWVzc2FnZSgnZGVsZXRlX3N1bW1hcnknKVxuXHRcdCk7XG5cdH07XG5cdGNvbnN0IGRlbGV0ZVNlY3Rpb24gPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdvbmdvaW5nJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0ZGVsZXRlU2VjdGlvbkNvcmUoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKTtcblx0fTtcblx0Y29uc3QgYXJjaGl2ZVNlY3Rpb25Db3JlID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdGNvbnN0IGFjdHVhbF9zZWN0aW9uX251bWJlciA9IGFjdHVhbF9zZWN0aW9uKHNlY3Rpb25fbnVtYmVyKTtcblx0XHRjb25zdCB0byA9IHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKTtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdvbmdvaW5nJykuZGluZygpO1xuXHRcdGFyY2hpdmVTZWN0aW9uQ2FsbGJhY2soXG5cdFx0XHR3Z1BhZ2VOYW1lLFxuXHRcdFx0YWN0dWFsX3NlY3Rpb25fbnVtYmVyLFxuXHRcdFx0dG8sXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ2RvbmUnKS5kaW5nKCk7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ2RvbmUnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRcdFx0bm9taW5hbF9zZWN0aW9uc1tzZWN0aW9uX251bWJlcl0gPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdG1lc3NhZ2UoJ2FyY2hpdmVfc3VtbWFyeScpXG5cdFx0KTtcblx0fTtcblx0Y29uc3QgYXJjaGl2ZVNlY3Rpb24gPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0Y29uc3QgdG8gPSBzZXR0aW5ncy5maW5kKCdhcmMtbG9jJyk7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnb25nb2luZycpLnNlY3Rpb25fbGluaygpO1xuXHRcdGFyY2hpdmVTZWN0aW9uQ29yZShzZWN0aW9uX251bWJlciwgX25vbWluYWwpO1xuXHR9O1xuXHRjb25zdCBlbGFib3JhdGVfbm90aWNlID0gKG5vdGljZV90YWdfbmFtZSkgPT4ge1xuXHRcdC8vIGFjcm9ueW0gc2NoZW1lOiByZWZlciB0byBxd2VydHkga2V5Ym9hcmQgbGF5b3V0LiAocD05KVxuXHRcdGNvbnN0IG5vdGljZV90YWdfZGljdGlvbmFyeSA9IHtcblx0XHRcdHBsZWFzZV9lbmFibGVfZWxhYm9yYXRlOiBbJ3BsZWFzZV9lbmFibGVfZWxhYm9yYXRlJ10sXG5cdFx0XHRvdGhlcnNfdGFsa19lbGFib3JhdGU6IFsnb3RoZXJzX3RhbGtfZWxhYm9yYXRlJ10sXG5cdFx0XHRlbmFibGVfb25fZ2VuZXJpY19wYWdlOiBbJ2VuYWJsZV9vbl9nZW5lcmljX3BhZ2UnXSxcblx0XHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2U6IFtcblx0XHRcdFx0J3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UnLFxuXHRcdFx0XHQnd2FybmluZycsXG5cdFx0XHRcdCdsb25nJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFtzYW5pdGl6ZShzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpXSxcblx0XHRcdF0sXG5cdFx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2U6IFtcblx0XHRcdFx0J3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZScsXG5cdFx0XHRcdCd3YXJuaW5nJyxcblx0XHRcdFx0J2xvbmcnLFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0W3Nhbml0aXplKHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSldLFxuXHRcdFx0XSxcblx0XHRcdHBhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGU6IFsncGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZSddLFxuXHRcdH07XG5cdFx0Y29uc3Qgbm90aWNlX3NldCA9IG5vdGljZV90YWdfZGljdGlvbmFyeVtub3RpY2VfdGFnX25hbWVdIHx8IGZhbHNlO1xuXHRcdGlmIChub3RpY2Vfc2V0ICE9PSBmYWxzZSkge1xuXHRcdFx0Y29uc3QgW250YWcsIG50eXBlLCBudHRsLCBucGVyc2lzdCwgbnN1YnN0XSA9IG5vdGljZV9zZXQ7XG5cdFx0XHRjb25zdCB0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRub2RlOiBzcGFuKG1lc3NhZ2UobnRhZywgbnN1YnN0KSksXG5cdFx0XHRcdFx0Y2xvc2U6IG50dGwgPT09ICdsb25nJyxcblx0XHRcdFx0XHRkdXJhdGlvbjogbnR0bCA9PT0gJ2xvbmcnID8gLTEgOiBudHRsLFxuXHRcdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChucGVyc2lzdCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG50eXBlXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0Ly8gcmVhbCBkZWFsIGhlcmVcblx0Ly8gaW50ZXJmYWNlIGluamVjdGlvbiAtIHByZXBhcmVcblx0Y29uc3Qgc2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2luaGliaXQgPSBzZXR0aW5ncy5maW5kKCdzZWMtZGVsJykgPT09ICcwJyB8fCBzZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzAnO1xuXHRjb25zdCBzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQgPSBzZXR0aW5ncy5maW5kKCdzZWMtYXJjJykgPT09ICcwJyB8fCBzZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzAnO1xuXHRjb25zdCBzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2UgPSBlbXB0eUVsZW1lbnQoKTtcblx0Y29uc3Qgc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZSA9IGVtcHR5RWxlbWVudCgpO1xuXHRsZXQgZm9vdGVyX2luZm9fZWxlO1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcikubGVuZ3RoKSB7XG5cdFx0W2Zvb3Rlcl9pbmZvX2VsZV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblx0fSBlbHNlIHtcblx0XHRmb290ZXJfaW5mb19lbGUgPSBlbXB0eUVsZW1lbnQoKTtcblx0fVxuXHQvLyAuLi4gaW50ZXJmYWNlIGluamVjdGlvbiAtIGxvZ2ljXG5cdGNvbnN0IGlzX2luX2JsYWNrbGlzdCA9IChibGFja2xpc3QpID0+IHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYmxhY2tsaXN0KSB7XG5cdFx0XHRpZiAoZWxlbWVudC50ZXN0KHdnUGFnZU5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGlmIChvbl9hcnRpY2xlIHx8IG9uX2hpc3RfdmVyc2lvbikge1xuXHRcdHJldHVybjsgLy8gaW5zZXJ0IG5vIGludGVyZmFjZSBvbiBhbiBhcnRpY2xlIHBhZ2Ugb3IgYSBoaXN0b3J5IHZlcnNpb24uXG5cdH1cblx0aWYgKGlzX2luX2JsYWNrbGlzdChuZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXgpKSB7XG5cdFx0cmV0dXJuOyAvLyBpbnNlcnQgbm8gaW50ZXJmYWNlIGlmIHRoZSBwYWdlIG5hbWUgaXMgYmxhY2tsaXN0ZWQuXG5cdH1cblx0aWYgKGlzX2luX2JsYWNrbGlzdChkaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCkpIHtcblx0XHQvLyBpbnNlcnQgbm90IHN1cHBvcnRlZCBub3RpY2UgaWYgdGhlIHBhZ2UgbmFtZSBpbmRpY2F0ZXMgdGhhdCBpdCBpcyBub3Qgc3VwcG9ydGVkLlxuXHRcdGZvb3Rlcl9pbmZvX2VsZS5wcmVwZW5kKFxuXHRcdFx0ZWxlbWVudFdyYXAoXG5cdFx0XHRcdCdlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZScsXG5cdFx0XHRcdG9uQ2xpY2tXcmFwKG1lc3NhZ2UoJ3BhZ2Vfbm90X3N1cHBvcnRlZCcpLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ3BhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGUnKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHQpO1xuXHR9IGVsc2UgaWYgKHdnUGFnZU5hbWUgPT09IHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSkge1xuXHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZScpO1xuXHR9IGVsc2UgaWYgKGhhc190ZW1wbGF0ZSAmJiAhb3RoZXJzX3VzZXJfdGFsaykge1xuXHRcdC8vIGFueSBwYWdlIHRoYXQgaGFzIHRlbXBsYXRlIHRoYXQncyBub3Qgb3RoZXJzJyB0YWxrIHBhZ2UuIGZ1bmN0aW9uIG5vcm1hbGx5LlxuXHRcdC8vICEhIHRoZSBhcmNoaXZlIGxvY2F0aW9uIGluIG1haW4gc3BhY2UgYW5kIG5lZWRzIGF0dGVudGlvbiAhIVxuXHRcdGlmICgvLis6LisvLnRlc3Qoc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKSAhPT0gdHJ1ZSkge1xuXHRcdFx0ZWxhYm9yYXRlX25vdGljZSgncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZScpO1xuXHRcdH1cblx0XHRjb25zdCBub3JtYWxfZnVuY3Rpb25faW5qZWN0X2ludGVyZmFjZSA9ICgpID0+IHtcblx0XHRcdGxldCBpID0gMDtcblx0XHRcdGxldCBqID0gMDtcblx0XHRcdGNvbnN0IGVkaXRTZWN0aW9uQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGVkaXRTZWN0aW9uQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBlbGUgPSBlZGl0U2VjdGlvbkNvbGxlY3Rpb25baV07XG5cdFx0XHRcdGNvbnN0IHZlID0gL1smP112ZWFjdGlvbj1lZGl0Ly50ZXN0KGVsZS5jaGlsZE5vZGVzWzFdLmhyZWYpO1xuXHRcdFx0XHRjb25zdCBjaGlsZF9ub2RlX251bWJlciA9IHZlID8gMyA6IDE7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRlbGUucGFyZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdoMicgJiZcblx0XHRcdFx0XHRlbGUucGFyZW50Tm9kZS5pZCAhPT0gJ2ZpcnN0SGVhZGluZycgJiZcblx0XHRcdFx0XHRkZWNvZGVVUklDb21wb25lbnQoZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmhyZWYuc3BsaXQoL1smP110aXRsZT0vKVsxXS5zcGxpdCgnJicpWzBdKSA9PT1cblx0XHRcdFx0XHRcdHdnUGFnZU5hbWVcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsID0gTnVtYmVyLnBhcnNlSW50KFxuXHRcdFx0XHRcdFx0ZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmhyZWYuc3BsaXQoL1smP11zZWN0aW9uPS8pWzFdLnNwbGl0KCcmJylbMF0sXG5cdFx0XHRcdFx0XHQxMFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0Y29uc3Qgbm9taW5hbCA9IGkgLSBqICsgMTtcblx0XHRcdFx0XHRpZiAoIXNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9pbmhpYml0KSB7XG5cdFx0XHRcdFx0XHRzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2UuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRwaXBlRWxlbWVudCgpLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrV3JhcChcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlKCdkZWxldGUnKSxcblx0XHRcdFx0XHRcdFx0XHQoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB7dGFyZ2V0fSA9IGV2ZW50O1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGF0YUFjdHVhbCA9IHRhcmdldC5kYXRhc2V0LmFjdHVhbDtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRhdGFOb21pbmFsID0gdGFyZ2V0LmRhdGFzZXQubm9taW5hbDtcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZVNlY3Rpb24oZGF0YUFjdHVhbCwgZGF0YU5vbWluYWwpO1xuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0YWN0dWFsLFxuXHRcdFx0XHRcdFx0XHRcdG5vbWluYWxcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQpIHtcblx0XHRcdFx0XHRcdHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2UuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRwaXBlRWxlbWVudCgpLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrV3JhcChcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlKCdhcmNoaXZlJyksXG5cdFx0XHRcdFx0XHRcdFx0KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qge3RhcmdldH0gPSBldmVudDtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRhdGFBY3R1YWwgPSB0YXJnZXQuZGF0YXNldC5hY3R1YWw7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkYXRhTm9taW5hbCA9IHRhcmdldC5kYXRhc2V0Lm5vbWluYWw7XG5cdFx0XHRcdFx0XHRcdFx0XHRhcmNoaXZlU2VjdGlvbihkYXRhQWN0dWFsLCBkYXRhTm9taW5hbCk7XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRhY3R1YWwsXG5cdFx0XHRcdFx0XHRcdFx0bm9taW5hbFxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbGUuY2hpbGROb2Rlc1tjaGlsZF9ub2RlX251bWJlcl0uYWZ0ZXIoXG5cdFx0XHRcdFx0XHRzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2UsXG5cdFx0XHRcdFx0XHRzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlLFxuXHRcdFx0XHRcdFx0c2VjdGlvbklkU3BhbkVsZW1lbnQoYCR7bm9taW5hbH1gKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aisrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRzZWN0aW9uX2NvdW50ID0gaSAtIGogKyAxO1xuXHRcdFx0Y29uc3QgZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZSA9IGVtcHR5RWxlbWVudCgpO1xuXHRcdFx0ZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZS5hcHBlbmQoXG5cdFx0XHRcdG1lc3NhZ2UoJ3N1cHBvcnRzJyksXG5cdFx0XHRcdG1lc3NhZ2UoJ2xlZnRfcGFyX3NwbGl0JyksXG5cdFx0XHRcdG1lc3NhZ2UoJ2FyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdCcpLFxuXHRcdFx0XHRsaW5rV3JhcChzYW5pdGl6ZShzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpLCBgL3dpa2kvJHtzYW5pdGl6ZShzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpfWApLFxuXHRcdFx0XHRtZXNzYWdlKCdyaWdodF9wYXInKSxcblx0XHRcdFx0bWVzc2FnZSgncGVyaW9kJylcblx0XHRcdCk7XG5cdFx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChlbGVtZW50V3JhcCgnZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZScsIGVhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UpKTtcblx0XHR9O1xuXHRcdG5vcm1hbF9mdW5jdGlvbl9pbmplY3RfaW50ZXJmYWNlKCk7XG5cdH0gZWxzZSBpZiAob3RoZXJzX3VzZXJfdGFsayA9PT0gdHJ1ZSkge1xuXHRcdC8vIG90aGVycyB1c2VyIHRhbGsuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcCgnZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UnKSxcblx0XHRcdG9uQ2xpY2tXcmFwKG1lc3NhZ2UoJ290aGVyc19wYWdlJyksIChldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRlbGFib3JhdGVfbm90aWNlKCdvdGhlcnNfdGFsa19lbGFib3JhdGUnKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fSBlbHNlIGlmIChteV91c2VyX3RhbGsgPT09IGZhbHNlKSB7XG5cdFx0Ly8gYSBnZW5lcmljIHBhZ2UgdGhhdCBkaWQgbm90IGVuYWJsZSBlYXN5IGFyY2hpdmUuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcChcblx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyxcblx0XHRcdFx0b25DbGlja1dyYXAobWVzc2FnZSgndG9fZW5hYmxlJyksIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZWxhYm9yYXRlX25vdGljZSgnZW5hYmxlX29uX2dlbmVyaWNfcGFnZScpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gdGhlbiBhc3NlcnQ6IChteV91c2VyX3RhbGsgPT09IHRydWUpLCAoaGFzX3RlbXBsYXRlID09PSBmYWxzZSkuXG5cdFx0Ly8gbXkgdXNlciB0YWxrIC0tIGluc3RhbGxlZCBlYXN5IGFyY2hpdmUgYnV0IGxhY2tpbmcgdGVtcGxhdGUuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcChcblx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyxcblx0XHRcdFx0b25DbGlja1dyYXAobWVzc2FnZSgncGxlYXNlX2VuYWJsZScpLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ3BsZWFzZV9lbmFibGVfZWxhYm9yYXRlJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEscUJBQXNCO0FBQ3RCLElBQUFDLFVBQVc7O0FDRFosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsY0FBQUMsT0FBZ0NMLE9BQU8sQ0FBRTs7QUNEN0QsSUFBTU0sT0FBT0EsQ0FBQztFQUNiQztFQUNBQztFQUNBQztFQUNBQztFQUNBQztBQUNELE1BTU07QUFDTCxRQUFNQyxRQUEyQjtJQUNoQ0MsUUFBUTtJQUNSQyxRQUFRO0lBQ1JDLGVBQWU7SUFDZlI7SUFDQUc7SUFDQUQ7RUFDRDtBQUNBLE1BQUlELFNBQVM7QUFDWkksVUFBTUosVUFBVUE7RUFDakI7QUFDQSxPQUFLTCxJQUFJYSxjQUFjLFFBQVFKLEtBQUssRUFBRUssS0FBS04sUUFBUTtBQUNwRDtBQUVBLElBQU1PLGFBQWFBLENBQUM7RUFDbkJYO0VBQ0FZO0VBQ0FUO0VBQ0FDO0FBQ0QsTUFLTTtBQUNMLFFBQU1DLFFBQWlDO0lBQ3RDQyxRQUFRO0lBQ1JPLE1BQU0sQ0FBQyxXQUFXO0lBQ2xCQyxRQUFRLENBQUMsT0FBTyxTQUFTLGFBQWEsUUFBUSxVQUFVLFFBQVEsV0FBVyxRQUFRLFNBQVM7SUFDNUZQLFFBQVE7SUFDUkMsZUFBZTtJQUNmTyxRQUFRZjtFQUNUO0FBRUEsT0FBS0osSUFBSWEsY0FBYyxRQUFRSixLQUFLLEVBQUVLLEtBQU1NLFVBQVM7QUFBQSxRQUFBQztBQUNwRGxCLFNBQUs7TUFDSkM7TUFDQUMsU0FBUztNQUNUQyxNQUFBLEdBQUFKLFNBQU1tQix3QkFBSUQsS0FBSyxPQUFPLEVBQUVFLE1BQU0sQ0FBQyxFQUFFQyxVQUFVLENBQUMsRUFBRUMsYUFBQSxRQUFBSCwwQkFBQSxTQUFBQSx3QkFBVyxNQUFNTCxZQUFZO01BQzNFVDtNQUNBQyxVQUFVQSxhQUFBLFFBQUFBLGFBQUEsU0FBQUEsV0FBYSxNQUFNO01BQUM7SUFDL0IsQ0FBQztFQUNGLENBQUM7QUFDRjs7QUN2REEsSUFBTWlCLHlCQUF5QkEsQ0FDOUJyQixPQUNBQyxTQUNBcUIsYUFDQWxCLFVBQ0FELFlBQ0k7QUFDSixRQUFNRSxRQUFpQztJQUN0Q0MsUUFBUTtJQUNSTyxNQUFNLENBQUMsV0FBVztJQUNsQkMsUUFBUTtJQUNSUCxRQUFRO0lBQ1JDLGVBQWU7SUFDZk8sUUFBUWY7SUFDUnVCLFdBQVd0QjtFQUNaO0FBRUEsT0FBS0wsSUFBSWEsY0FBYyxRQUFRSixLQUFLLEVBQUVLLEtBQU1NLFVBQVM7QUFBQSxRQUFBUTtBQUNwRGIsZUFBVztNQUNWWCxPQUFPc0I7TUFDUFYsY0FBQSxPQUFBZCxRQUFBMEIseUJBQXFCUixLQUFLLE9BQU8sRUFBRUUsTUFBTSxDQUFDLEVBQUVDLFVBQVUsQ0FBQyxFQUFFQyxhQUFBLFFBQUFJLDJCQUFBLFNBQUFBLHlCQUFXLEtBQUs7TUFDekVyQjtJQUNELENBQUM7QUFDREosU0FBSztNQUNKQztNQUNBQyxTQUFBLEdBQUFILE9BQVlHLE9BQU87TUFDbkJDLE1BQU07TUFDTkM7TUFDQUMsVUFBVUEsYUFBQSxRQUFBQSxhQUFBLFNBQUFBLFdBQWEsTUFBTTtNQUFDO0lBQy9CLENBQUM7RUFDRixDQUFDO0FBQ0Y7QUFFQSxJQUFNcUIsd0JBQXdCQSxDQUFDekIsT0FBZUMsU0FBaUJHLFVBQWtDRCxZQUFvQjtBQUNwSEosT0FBSztJQUFDQztJQUFPQyxTQUFBLEdBQUFILE9BQVlHLE9BQU87SUFBSUMsTUFBTTtJQUFJQztJQUFTQyxVQUFVQSxhQUFBLFFBQUFBLGFBQUEsU0FBQUEsV0FBYSxNQUFNO0lBQUM7RUFBRSxDQUFDO0FBQ3pGOztBQ3RDQSxJQUFBc0IscUJBQWtDQyxRQUFBaEMsUUFBQSxrQkFBQSxHQUFBLENBQUE7QUFFbEMsSUFBTWlDLGNBQWNBLENBQUNDLElBQVlDLGlCQUErQjtBQUMvRCxRQUFNO0lBQUNDO0VBQUksSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUU3QixNQUFJSCxTQUFTLFdBQVc7QUFDdkIsV0FDQ0wsbUNBQUFTLFFBQUFDLGNBQUMsV0FBQTtNQUFRQyxXQUFXLENBQUMsaUJBQWlCO01BQUdSO0lBQUEsR0FDdkNDLFlBQ0Y7RUFFRixXQUFXLENBQUMsVUFBVSxlQUFlLFFBQVEsRUFBRVEsU0FBU1AsSUFBSSxLQUFLUSxTQUFTQyxjQUFjLGdCQUFnQixHQUFHO0FBQzFHLFdBQU9kLG1DQUFBUyxRQUFBQyxjQUFDLE1BQUE7TUFBR1A7SUFBQSxHQUFTQyxZQUFhO0VBQ2xDO0FBQ0EsU0FBT0osbUNBQUFTLFFBQUFDLGNBQUMsT0FBQTtJQUFJUDtFQUFBLEdBQVNDLFlBQWE7QUFDbkM7QUFFQSxJQUFNVyxlQUFlQSxNQUFNZixtQ0FBQVMsUUFBQUMsY0FBQVYsbUJBQUFTLFFBQUFPLFVBQUEsSUFBRTtBQUU3QixJQUFNQyxXQUFXQSxDQUFDQyxhQUFxQkMsU0FBaUJuQixtQ0FBQVMsUUFBQUMsY0FBQyxLQUFBO0VBQUVTO0VBQVlEO0FBQUEsQ0FBMEI7QUFFakcsSUFBTUUsY0FBY0EsQ0FBQ0YsYUFBcUJHLFNBQXFCQyxZQUFxQkMsZ0JBQ25GdkIsbUNBQUFTLFFBQUFDLGNBQUMsS0FBQTtFQUNBYyxPQUFPLENBQUMscUJBQUEscUJBQUFwRCxPQUEwQ2tELFlBQVUsR0FBQSxFQUFBbEQsT0FBSW1ELFdBQVcsQ0FBQTtFQUMzRUY7RUFDQUg7RUFDQSxlQUFhSTtFQUNiLGdCQUFjQztBQUFBLENBQ2Y7QUFHRCxJQUFNRSxjQUFjQSxNQUFNekIsbUNBQUFTLFFBQUFDLGNBQUMsUUFBQTtFQUFLYyxPQUFNO0VBQXlCTixhQUFhO0FBQUEsQ0FBSztBQUVqRixJQUFNUSx1QkFBd0J2QixRQUM3QkgsbUNBQUFTLFFBQUFDLGNBQUMsUUFBQTtFQUNBYyxPQUFPLENBQUMsZ0NBQUEsc0NBQUFwRCxPQUFzRStCLEVBQUUsQ0FBQTtFQUNoRndCLE9BQU87SUFBQ0MsU0FBUztFQUFNO0FBQUEsQ0FDeEI7QUFHRCxJQUFNQyxPQUFRQyxlQUFzQjlCLG1DQUFBUyxRQUFBQyxjQUFDLFFBQUE7RUFBS29CO0FBQUEsQ0FBc0I7O0FDeENoRSxJQUFBQyxxQkFBNEI5RCxRQUFBLGlCQUFBO0FBQzVCLElBQUErRCxxQkFBdUIvRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1nRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLG1CQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU0wsbUJBQUFHLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsV0FBQSxHQUFVTixtQkFBQUcsVUFBUztNQUNsQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxjQUFBLEdBQWFQLG1CQUFBRyxVQUFTO01BQ3JCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RJLFlBQUEsR0FBV1IsbUJBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREsseUJBQUEsR0FBd0JULG1CQUFBRyxVQUFTO01BQ2hDQyxJQUFJO01BQ0osV0FDQztNQUNELFdBQ0M7SUFDRixDQUFDO0lBQ0RNLGdCQUFBLEdBQWVWLG1CQUFBRyxVQUFTO01BQ3ZCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RPLDBCQUFBLEdBQXlCWCxtQkFBQUcsVUFBUztNQUNqQ0MsSUFBSTtNQUNKLFdBQ0M7TUFDRCxXQUNDO0lBQ0YsQ0FBQztJQUNEUSxpQkFBQSxHQUFnQlosbUJBQUFHLFVBQVM7TUFDeEJDLElBQUk7TUFDSlMsSUFBSTtJQUNMLENBQUM7SUFDREMsWUFBQSxHQUFXZCxtQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKUyxJQUFJO0lBQ0wsQ0FBQztJQUNERSxTQUFBLEdBQVFmLG1CQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pTLElBQUk7SUFDTCxDQUFDO0lBQ0RHLDJCQUFBLEdBQTBCaEIsbUJBQUFHLFVBQVM7TUFDbENDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRGEsb0JBQUEsR0FBbUJqQixtQkFBQUcsVUFBUztNQUMzQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEYyxxQkFBQSxHQUFvQmxCLG1CQUFBRyxVQUFTO01BQzVCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RlLGlCQUFBLEdBQWdCbkIsbUJBQUFHLFVBQVM7TUFDeEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRGdCLDBCQUFBLEdBQXlCcEIsbUJBQUFHLFVBQVM7TUFDakNDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRGlCLGlCQUFBLEdBQWdCckIsbUJBQUFHLFVBQVM7TUFDeEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRGtCLGdCQUFBLEdBQWV0QixtQkFBQUcsVUFBUztNQUN2QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEbUIsbUJBQUEsR0FBa0J2QixtQkFBQUcsVUFBUztNQUMxQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEb0Isa0JBQUEsR0FBaUJ4QixtQkFBQUcsVUFBUztNQUN6QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEcUIsd0JBQUEsR0FBdUJ6QixtQkFBQUcsVUFBUztNQUMvQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEc0IscUJBQUEsR0FBb0IxQixtQkFBQUcsVUFBUztNQUM1QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEdUIsK0JBQUEsR0FBOEIzQixtQkFBQUcsVUFBUztNQUN0Q0MsSUFBSTtNQUNKLFdBQ0M7TUFDRCxXQUNDO0lBQ0YsQ0FBQztJQUNEd0IsMkNBQUEsR0FBMEM1QixtQkFBQUcsVUFBUztNQUNsREMsSUFBSTtNQUNKLFdBQ0M7TUFDRCxXQUNDO0lBQ0YsQ0FBQztJQUNEeUIsMENBQUEsR0FBeUM3QixtQkFBQUcsVUFBUztNQUNqREMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEMEIsa0JBQUEsR0FBaUI5QixtQkFBQUcsVUFBUztNQUN6QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEMkIsaUJBQUEsR0FBZ0IvQixtQkFBQUcsVUFBUztNQUN4QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNNEIsZUFBZS9CLGdCQUFnQjtBQUVyQyxJQUFNZ0MsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3QjtBQUVBLElBQU1DLFVBQVVBLENBQUNDLFFBQW1DQyxXQUFxQjtBQUN4RSxNQUFJM0UsVUFBVXVFLFdBQVdHLEdBQUc7QUFDNUJDLFlBQUEsR0FBU3RDLG1CQUFBdUMsZUFBYyxHQUFHRCxNQUFNO0FBQ2hDLE1BQUk7QUFBQSxRQUFBRSxhQUFBQywyQkFDd0JILE9BQU9JLFFBQVEsQ0FBQSxHQUFBQztBQUFBLFFBQUE7QUFBMUMsV0FBQUgsV0FBQUksRUFBQSxHQUFBLEVBQUFELFNBQUFILFdBQUFLLEVBQUEsR0FBQUMsUUFBNkM7QUFBQSxjQUFsQyxDQUFDQyxHQUFHQyxPQUFPLElBQUFMLE9BQUFNO0FBQ3JCLGNBQU1DLFNBQUEsSUFBQTdHLE9BQWEwRyxJQUFJLENBQUM7QUFDeEIsWUFBSXBGLFFBQVFrQixTQUFTcUUsTUFBTSxHQUFHO0FBQzdCdkYsb0JBQVVBLFFBQVF3RixRQUFRRCxRQUFRRixZQUFBLFFBQUFBLFlBQUEsU0FBQUEsVUFBVyxFQUFFO1FBQ2hEO01BQ0Q7SUFBQSxTQUFBSSxLQUFBO0FBQUFaLGlCQUFBYSxFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBWixpQkFBQWMsRUFBQTtJQUFBO0VBQ0QsUUFBUTtFQUFDO0FBQ1QsU0FBTzNGO0FBQ1I7O0FDdEtBLElBQU00RixXQUFZQyxZQUFtQjtBQUNwQyxTQUFPQSxPQUNMTCxRQUFRLE1BQU0sT0FBTyxFQUNyQkEsUUFBUSxNQUFNLE1BQU0sRUFDcEJBLFFBQVEsTUFBTSxNQUFNLEVBQ3BCQSxRQUFRLE1BQU0sUUFBUSxFQUN0QkEsUUFBUSxNQUFNLFFBQVE7QUFDekI7O0FDVUEsSUFBQU0scUJBQXVCdkgsUUFBQSxxQkFBQTtDQUV0QixTQUFTd0gsa0JBQWtCO0FBQzNCLFFBQU07SUFBQ0M7SUFBbUJDO0lBQVlDO0lBQVlDO0lBQWlCQztFQUFZLElBQUl4RixHQUFHQyxPQUFPQyxJQUFJO0FBRWpHLE1BQUlrRixvQkFBb0IsS0FBS0MsZUFBZSxhQUFhO0FBQ3hEO0VBQ0Q7RUFHQSxNQUFNSSxTQUFTO0lBQ2RDLFlBQVlDLGFBQWExRixRQUFRO0FBQ2hDLFdBQUsyRixNQUFNRDtBQUNYLFdBQUtFLE9BQU87QUFDWixXQUFLQyxRQUFRO0FBQ2IsV0FBS0MsUUFBUTtBQUNiLFVBQUksT0FBTzlGLFdBQVcsVUFBVTtBQUMvQkEsaUJBQVMrRixPQUFPL0YsTUFBTTtNQUN2QjtBQUNBLFVBQ0MwRixZQUFZTSxTQUFTLEtBQ3JCLG9CQUFvQkMsS0FBS1AsWUFBWVEsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUNoRCxDQUFDbEcsT0FBT0ssU0FBUyxZQUFZLEdBQzVCO0FBQ0QsU0FBQSxFQUFBLEVBQUEsRUFBQSxFQUFTLEtBQUt1RixNQUFNLEtBQUtDLE9BQU8sS0FBS0MsS0FBSyxJQUFJSjtBQUM5QyxZQUFJLEtBQUtFLFNBQVMsS0FBS0UsU0FBUyxLQUFLRixTQUFTLEtBQUtDLFNBQVMsS0FBS0MsVUFBVSxLQUFLRCxPQUFPO0FBQ3RGLGdCQUFNLElBQUlNLFlBQVksMkVBQTJFO1FBQ2xHO01BQ0Q7SUFDRDtJQUNBQyxLQUFLQyxZQUFZO0FBQ2hCQSxtQkFBYSxLQUFLVCxPQUFPUyxhQUFhLEtBQUtSO0FBQzNDLFVBQUksQ0FBQyxLQUFLRixJQUFJdEYsU0FBU2dHLFVBQVUsR0FBRztBQUNuQyxlQUFPO01BQ1I7QUFDQSxhQUFPLEtBQUtWLElBQUlXLE1BQU1ELFVBQVUsRUFBRSxDQUFDLEVBQUVDLE1BQU0sS0FBS1IsS0FBSyxFQUFFLENBQUM7SUFDekQ7RUFDRDtBQUdBLE1BQUlTLGtCQUNIO0FBUUQsTUFBSUMsV0FBVyxJQUFJaEIsU0FBU2UsZUFBZTtBQUMzQyxRQUFNRSxvQ0FBb0MsQ0FBQTtBQUMxQyxRQUFNQyxnQ0FBZ0MsQ0FDckMsYUFDQSxrQkFDQSxlQUNBLGlCQUNBLGlCQUNBLGdCQUNBLHNCQUNBLHVCQUNBLHNCQUFBO0FBRUQsUUFBTUMsMkJBQTJCckcsU0FBU3NHLGlCQUFpQixxQ0FBcUM7QUFDaEcsUUFBTSxDQUFDQyxhQUFhLElBQUlGO0FBQ3hCLFFBQU1HLGdCQUFnQkQsZ0JBQWdCLElBQUlyQixTQUFTcUIsY0FBY3RGLFNBQVMsSUFBSSxJQUFJaUUsU0FBUyxFQUFFO0FBQzdGLE1BQUlzQixjQUFjVixLQUFLLFdBQVcsTUFBTSxLQUFLO0FBQzVDRyxzQkFBa0JNLGNBQWN0RjtBQUNoQ2lGLGVBQVcsSUFBSWhCLFNBQVNlLGVBQWU7RUFDeEM7QUFFQSxRQUFNUSxlQUFlNUIsc0JBQXNCO0FBQzNDLFFBQU02QixlQUFlRCxnQkFBZ0IsSUFBSWhILEdBQUdrSCxNQUFNN0IsVUFBVSxFQUFFckgsVUFBVSxJQUFJZ0MsR0FBR2tILE1BQU01QixVQUFVLEVBQUV0SDtBQUNqRyxRQUFNbUosbUJBQW1CSCxnQkFBZ0IsQ0FBQ0M7QUFDMUMsUUFBTUcsZUFBZUwsY0FBY1YsS0FBSyxXQUFXLE1BQU07QUFDekQsUUFBTWdCLGFBQWFqQyxzQkFBc0I7QUFDekMsUUFBTWtDLGtCQUFrQi9CLGtCQUFrQkMsaUJBQWlCO0FBQzNELE1BQUkrQjtBQUNKLFFBQU1DLG9CQUFxQkMsV0FBVTtBQUNwQyxVQUFNQyxNQUFNQyxNQUFNQyxLQUFLO01BQ3RCM0IsUUFBUXdCO0lBQ1QsQ0FBQztBQUNELGFBQVNqRCxJQUFJLEdBQUdBLElBQUlpRCxPQUFPakQsS0FBSztBQUMvQmtELFVBQUlsRCxDQUFDLElBQUk7SUFDVjtBQUNBLFdBQU9rRDtFQUNSLEdBQUdILGFBQWE7QUFDaEIsUUFBTU0saUJBQWtCQyw0QkFBMkI7QUFDbEQsUUFBSUMsT0FBTztBQUNYLGFBQVN2RCxJQUFJLEdBQUdBLElBQUlzRCx3QkFBd0J0RCxLQUFLO0FBQ2hELFVBQUlnRCxpQkFBaUJoRCxDQUFDLE1BQU0sTUFBTTtBQUNqQ3VEO01BQ0Q7SUFDRDtBQUNBLFdBQU9ELHlCQUF5QkM7RUFDakM7QUFHQSxRQUFNQyxxQkFBcUJBLENBQUNDLGdCQUFnQkMsZUFBZUMsSUFBSUMsb0JBQW9CO0FBQ2xGLFFBQUlDO0FBQ0osUUFBSUM7QUFDSixRQUFJQztBQUNKLFFBQUlDO0FBQ0osUUFBSUosb0JBQW9CLFdBQVc7QUFDbENHLGtCQUFZO0FBQ1pDLHNCQUFnQjtBQUNoQixVQUFJTixrQkFBa0IsVUFBVTtBQUMvQkcsbUJBQVc7QUFDWEMsc0JBQWM7TUFDZixXQUFXSixrQkFBa0IsV0FBVztBQUN2Q0csbUJBQVc7QUFDWEMsc0JBQWM7TUFDZjtJQUNELFdBQVdGLG9CQUFvQixRQUFRO0FBQ3RDRyxrQkFBWTtBQUNaQyxzQkFBZ0I7QUFDaEIsVUFBSU4sa0JBQWtCLFVBQVU7QUFDL0JHLG1CQUFXO0FBQ1hDLHNCQUFjO01BQ2YsV0FBV0osa0JBQWtCLFdBQVc7QUFDdkNHLG1CQUFXO0FBQ1hDLHNCQUFjO01BQ2Y7SUFDRDtBQUNBLFVBQU1HLFVBQVU7TUFDZkMsTUFBTUEsTUFBTTtBQUNYLFNBQUEsR0FBQXhELG1CQUFBeUQsVUFDQztVQUNDekssTUFBTTJGLFFBQVF3RSxVQUFBLEdBQUF2SyxPQUFhbUssY0FBYyxHQUFJRSxFQUFFO1VBQy9DUyxPQUFPLENBQUNKO1VBQ1JLLFVBQVVMLGdCQUFnQixNQUFPO1FBQ2xDLEdBQ0FELFNBQ0Q7TUFDRDtNQUNBTyxjQUFjQSxNQUFNO0FBQ25CLGNBQU1DLFFBQVF4SSxTQUFTc0csaUJBQUEsdUNBQUEvSSxPQUF3RG1LLGNBQWMsQ0FBRTtBQUFBLFlBQUFlLGFBQUE5RSwyQkFDNUU2RSxLQUFBLEdBQUFFO0FBQUEsWUFBQTtBQUFuQixlQUFBRCxXQUFBM0UsRUFBQSxHQUFBLEVBQUE0RSxTQUFBRCxXQUFBMUUsRUFBQSxHQUFBQyxRQUEwQjtBQUFBLGtCQUFmMkUsT0FBQUQsT0FBQXZFO0FBQ1Ysa0JBQU07Y0FBQ3lFO1lBQVUsSUFBSUQ7QUFBQSxnQkFBQUUsYUFBQWxGLDJCQUNHaUYsV0FBV3RDLGlCQUFpQixvQkFBb0IsQ0FBQSxHQUFBd0M7QUFBQSxnQkFBQTtBQUF4RSxtQkFBQUQsV0FBQS9FLEVBQUEsR0FBQSxFQUFBZ0YsU0FBQUQsV0FBQTlFLEVBQUEsR0FBQUMsUUFBMkU7QUFBQSxzQkFBaEUrRSxZQUFBRCxPQUFBM0U7QUFDVjRFLDBCQUFVakksTUFBTUMsVUFBVTtjQUMzQjtZQUFBLFNBQUF1RCxLQUFBO0FBQUF1RSx5QkFBQXRFLEVBQUFELEdBQUE7WUFBQSxVQUFBO0FBQUF1RSx5QkFBQXJFLEVBQUE7WUFBQTtBQUNBbUUsaUJBQUsxSCxZQUFZcUMsUUFBUXlFLFdBQVc7QUFDcENZLGlCQUFLN0gsTUFBTUMsVUFBVTtBQUNyQjRILGlCQUFLN0gsTUFBTWtJLFFBQVE7VUFDcEI7UUFBQSxTQUFBMUUsS0FBQTtBQUFBbUUscUJBQUFsRSxFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBbUUscUJBQUFqRSxFQUFBO1FBQUE7TUFDRDtJQUNEO0FBQ0EsV0FBTzBEO0VBQ1I7QUFDQSxRQUFNZSxvQkFBb0JBLENBQUN2QixnQkFBZ0J3QixhQUFhO0FBQ3ZELFVBQU1DLHdCQUF3QjdCLGVBQWVJLGNBQWM7QUFDM0RELHVCQUFtQnlCLFVBQVUsVUFBVSxJQUFJLFNBQVMsRUFBRWYsS0FBSztBQUMzRGpKLDBCQUNDNEYsWUFDQXFFLHVCQUNBLE1BQU07QUFDTDFCLHlCQUFtQnlCLFVBQVUsVUFBVSxJQUFJLE1BQU0sRUFBRWYsS0FBSztBQUN4RFYseUJBQW1CeUIsVUFBVSxVQUFVLElBQUksTUFBTSxFQUFFWCxhQUFhO0FBQ2hFdEIsdUJBQWlCUyxjQUFjLElBQUk7SUFDcEMsR0FDQXBFLFFBQVEsZ0JBQWdCLENBQ3pCO0VBQ0Q7QUFDQSxRQUFNOEYsZ0JBQWdCQSxDQUFDMUIsZ0JBQWdCd0IsYUFBYTtBQUNuRHpCLHVCQUFtQnlCLFVBQVUsVUFBVSxJQUFJLFNBQVMsRUFBRVgsYUFBYTtBQUNuRVUsc0JBQWtCdkIsZ0JBQWdCd0IsUUFBUTtFQUMzQztBQUNBLFFBQU1HLHFCQUFxQkEsQ0FBQzNCLGdCQUFnQndCLGFBQWE7QUFDeEQsVUFBTUMsd0JBQXdCN0IsZUFBZUksY0FBYztBQUMzRCxVQUFNRSxLQUFLMUIsU0FBU0osS0FBSyxTQUFTO0FBQ2xDMkIsdUJBQW1CeUIsVUFBVSxXQUFXdEIsSUFBSSxTQUFTLEVBQUVPLEtBQUs7QUFDNURySiwyQkFDQ2dHLFlBQ0FxRSx1QkFDQXZCLElBQ0EsTUFBTTtBQUNMSCx5QkFBbUJ5QixVQUFVLFdBQVd0QixJQUFJLE1BQU0sRUFBRU8sS0FBSztBQUN6RFYseUJBQW1CeUIsVUFBVSxXQUFXdEIsSUFBSSxNQUFNLEVBQUVXLGFBQWE7QUFDakV0Qix1QkFBaUJTLGNBQWMsSUFBSTtJQUNwQyxHQUNBcEUsUUFBUSxpQkFBaUIsQ0FDMUI7RUFDRDtBQUNBLFFBQU1nRyxpQkFBaUJBLENBQUM1QixnQkFBZ0J3QixhQUFhO0FBQ3BELFVBQU10QixLQUFLMUIsU0FBU0osS0FBSyxTQUFTO0FBQ2xDMkIsdUJBQW1CeUIsVUFBVSxXQUFXdEIsSUFBSSxTQUFTLEVBQUVXLGFBQWE7QUFDcEVjLHVCQUFtQjNCLGdCQUFnQndCLFFBQVE7RUFDNUM7QUFDQSxRQUFNSyxtQkFBb0JDLHFCQUFvQjtBQUU3QyxVQUFNQyx3QkFBd0I7TUFDN0IzSCx5QkFBeUIsQ0FBQyx5QkFBeUI7TUFDbkRjLHVCQUF1QixDQUFDLHVCQUF1QjtNQUMvQ2hCLHdCQUF3QixDQUFDLHdCQUF3QjtNQUNqRG1CLDBDQUEwQyxDQUN6Qyw0Q0FDQSxXQUNBLFFBQ0EsT0FDQSxDQUFDMEIsU0FBU3lCLFNBQVNKLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQTtNQUVwQzlDLHlDQUF5QyxDQUN4QywyQ0FDQSxXQUNBLFFBQ0EsT0FDQSxDQUFDeUIsU0FBU3lCLFNBQVNKLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQTtNQUVwQ2hELDhCQUE4QixDQUFDLDhCQUE4QjtJQUM5RDtBQUNBLFVBQU00RyxhQUFhRCxzQkFBc0JELGVBQWUsS0FBSztBQUM3RCxRQUFJRSxlQUFlLE9BQU87QUFDekIsWUFBTSxDQUFDQyxNQUFNQyxPQUFPQyxNQUFNQyxVQUFVQyxNQUFNLElBQUlMO0FBQzlDLFlBQU1NLG9CQUFBLEdBQW1CckYsbUJBQUF5RCxVQUN4QjtRQUNDTyxNQUFNM0gsS0FBS3NDLFFBQVFxRyxNQUFNSSxNQUFNLENBQUM7UUFDaEMxQixPQUFPd0IsU0FBUztRQUNoQnZCLFVBQVV1QixTQUFTLFNBQVMsS0FBS0E7UUFDakNySixTQUFTQSxNQUFNO0FBQ2QsY0FBSXNKLFVBQVU7QUFDYjtVQUNEO0FBQ0FFLDJCQUFpQkMsVUFBVTtRQUM1QjtNQUNELEdBQ0FMLEtBQ0Q7SUFDRDtFQUNEO0FBR0EsUUFBTU0sbUNBQW1DaEUsU0FBU0osS0FBSyxTQUFTLE1BQU0sT0FBT0ksU0FBU0osS0FBSyxXQUFXLE1BQU07QUFDNUcsUUFBTXFFLG9DQUFvQ2pFLFNBQVNKLEtBQUssU0FBUyxNQUFNLE9BQU9JLFNBQVNKLEtBQUssV0FBVyxNQUFNO0FBQzdHLFFBQU1zRSwyQkFBMkJsSyxhQUFhO0FBQzlDLFFBQU1tSyw0QkFBNEJuSyxhQUFhO0FBQy9DLE1BQUlvSztBQUNKLE1BQUl0SyxTQUFTc0csaUJBQXlCckosa0JBQWtCLEVBQUV5SSxRQUFRO0FBQ2pFLEtBQUM0RSxlQUFlLElBQUl0SyxTQUFTc0csaUJBQXlCckosa0JBQWtCO0VBQ3pFLE9BQU87QUFDTnFOLHNCQUFrQnBLLGFBQWE7RUFDaEM7QUFFQSxRQUFNcUssa0JBQW1CQyxlQUFjO0FBQUEsUUFBQUMsYUFBQTlHLDJCQUNoQjZHLFNBQUEsR0FBQUU7QUFBQSxRQUFBO0FBQXRCLFdBQUFELFdBQUEzRyxFQUFBLEdBQUEsRUFBQTRHLFNBQUFELFdBQUExRyxFQUFBLEdBQUFDLFFBQWlDO0FBQUEsY0FBdEJFLFVBQUF3RyxPQUFBdkc7QUFDVixZQUFJRCxRQUFReUIsS0FBS2IsVUFBVSxHQUFHO0FBQzdCLGlCQUFPO1FBQ1I7TUFDRDtJQUFBLFNBQUFSLEtBQUE7QUFBQW1HLGlCQUFBbEcsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQW1HLGlCQUFBakcsRUFBQTtJQUFBO0FBQ0EsV0FBTztFQUNSO0FBQ0EsTUFBSXNDLGNBQWNDLGlCQUFpQjtBQUNsQztFQUNEO0FBQ0EsTUFBSXdELGdCQUFnQnBFLGlDQUFpQyxHQUFHO0FBQ3ZEO0VBQ0Q7QUFDQSxNQUFJb0UsZ0JBQWdCbkUsNkJBQTZCLEdBQUc7QUFFbkRrRSxvQkFBZ0JLLFFBQ2Z0TCxZQUNDLDhCQUNBa0IsWUFBWStDLFFBQVEsb0JBQW9CLEdBQUlzSCxXQUFVO0FBQ3JEQSxZQUFNQyxlQUFlO0FBQ3JCdEIsdUJBQWlCLDhCQUE4QjtJQUNoRCxDQUFDLENBQ0YsQ0FDRDtFQUNELFdBQVd6RSxlQUFlb0IsU0FBU0osS0FBSyxTQUFTLEdBQUc7QUFDbkR5RCxxQkFBaUIseUNBQXlDO0VBQzNELFdBQVcxQyxnQkFBZ0IsQ0FBQ0Qsa0JBQWtCO0FBRzdDLFFBQUksUUFBUWpCLEtBQUtPLFNBQVNKLEtBQUssU0FBUyxDQUFDLE1BQU0sTUFBTTtBQUNwRHlELHVCQUFpQiwwQ0FBMEM7SUFDNUQ7QUFDQSxVQUFNdUIsbUNBQW1DQSxNQUFNO0FBQzlDLFVBQUk3RyxJQUFJO0FBQ1IsVUFBSThHLElBQUk7QUFDUixZQUFNQyx3QkFBd0JoTCxTQUFTc0csaUJBQWlCLGlCQUFpQjtBQUN6RSxXQUFLckMsSUFBSSxHQUFHQSxJQUFJK0csc0JBQXNCdEYsUUFBUXpCLEtBQUs7QUFDbEQsY0FBTWdILE1BQU1ELHNCQUFzQi9HLENBQUM7QUFDbkMsY0FBTWlILEtBQUssb0JBQW9CdkYsS0FBS3NGLElBQUlFLFdBQVcsQ0FBQyxFQUFFN0ssSUFBSTtBQUMxRCxjQUFNOEssb0JBQW9CRixLQUFLLElBQUk7QUFDbkMsWUFDQ0QsSUFBSXJDLFdBQVd5QyxRQUFRQyxZQUFZLE1BQU0sUUFDekNMLElBQUlyQyxXQUFXdEosT0FBTyxrQkFDdEJpTSxtQkFBbUJOLElBQUlFLFdBQVdDLGlCQUFpQixFQUFFOUssS0FBSzBGLE1BQU0sWUFBWSxFQUFFLENBQUMsRUFBRUEsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQzdGbEIsWUFDQTtBQUNELGdCQUFNMEcsU0FBU0MsT0FBT0MsU0FDckJULElBQUlFLFdBQVdDLGlCQUFpQixFQUFFOUssS0FBSzBGLE1BQU0sY0FBYyxFQUFFLENBQUMsRUFBRUEsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUM1RSxFQUNEO0FBQ0EsZ0JBQU0yRixVQUFVMUgsSUFBSThHLElBQUk7QUFDeEIsY0FBSSxDQUFDYixrQ0FBa0M7QUFDdENFLHFDQUF5QndCLE9BQ3hCaEwsWUFBWSxHQUNaTCxZQUNDK0MsUUFBUSxRQUFRLEdBQ2ZzSCxXQUFVO0FBQ1ZBLG9CQUFNQyxlQUFlO0FBQ3JCLG9CQUFNO2dCQUFDZ0I7Y0FBTSxJQUFJakI7QUFDakIsb0JBQU1uSyxhQUFhb0wsT0FBT0MsUUFBUU47QUFDbEMsb0JBQU05SyxjQUFjbUwsT0FBT0MsUUFBUUg7QUFDbkN2Qyw0QkFBYzNJLFlBQVlDLFdBQVc7WUFDdEMsR0FDQThLLFFBQ0FHLE9BQ0QsQ0FDRDtVQUNEO0FBQ0EsY0FBSSxDQUFDeEIsbUNBQW1DO0FBQ3ZDRSxzQ0FBMEJ1QixPQUN6QmhMLFlBQVksR0FDWkwsWUFDQytDLFFBQVEsU0FBUyxHQUNoQnNILFdBQVU7QUFDVkEsb0JBQU1DLGVBQWU7QUFDckIsb0JBQU07Z0JBQUNnQjtjQUFNLElBQUlqQjtBQUNqQixvQkFBTW5LLGFBQWFvTCxPQUFPQyxRQUFRTjtBQUNsQyxvQkFBTTlLLGNBQWNtTCxPQUFPQyxRQUFRSDtBQUNuQ3JDLDZCQUFlN0ksWUFBWUMsV0FBVztZQUN2QyxHQUNBOEssUUFDQUcsT0FDRCxDQUNEO1VBQ0Q7QUFDQVYsY0FBSUUsV0FBV0MsaUJBQWlCLEVBQUVXLE1BQ2pDM0IsMEJBQ0FDLDJCQUNBeEoscUJBQUEsR0FBQXRELE9BQXdCb08sT0FBTyxDQUFFLENBQ2xDO1FBQ0QsT0FBTztBQUNOWjtRQUNEO01BQ0Q7QUFDQS9ELHNCQUFnQi9DLElBQUk4RyxJQUFJO0FBQ3hCLFlBQU1pQiwrQkFBK0I5TCxhQUFhO0FBQ2xEOEwsbUNBQTZCSixPQUM1QnRJLFFBQVEsVUFBVSxHQUNsQkEsUUFBUSxnQkFBZ0IsR0FDeEJBLFFBQVEsMEJBQTBCLEdBQ2xDbEQsU0FBU3FFLFNBQVN5QixTQUFTSixLQUFLLFNBQVMsQ0FBQyxHQUFBLFNBQUF2SSxPQUFZa0gsU0FBU3lCLFNBQVNKLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBRSxHQUMxRnhDLFFBQVEsV0FBVyxHQUNuQkEsUUFBUSxRQUFRLENBQ2pCO0FBQ0FnSCxzQkFBZ0JLLFFBQVF0TCxZQUFZLGdDQUFnQzJNLDRCQUE0QixDQUFDO0lBQ2xHO0FBQ0FsQixxQ0FBaUM7RUFDbEMsV0FBV2xFLHFCQUFxQixNQUFNO0FBRXJDMEQsb0JBQWdCSyxRQUNmdEwsWUFBWSw0QkFBNEIsR0FDeENrQixZQUFZK0MsUUFBUSxhQUFhLEdBQUlzSCxXQUFVO0FBQzlDQSxZQUFNQyxlQUFlO0FBQ3JCdEIsdUJBQWlCLHVCQUF1QjtJQUN6QyxDQUFDLENBQ0Y7RUFDRCxXQUFXN0MsaUJBQWlCLE9BQU87QUFFbEM0RCxvQkFBZ0JLLFFBQ2Z0TCxZQUNDLDhCQUNBa0IsWUFBWStDLFFBQVEsV0FBVyxHQUFJc0gsV0FBVTtBQUM1Q0EsWUFBTUMsZUFBZTtBQUNyQnRCLHVCQUFpQix3QkFBd0I7SUFDMUMsQ0FBQyxDQUNGLENBQ0Q7RUFDRCxPQUFPO0FBR05lLG9CQUFnQkssUUFDZnRMLFlBQ0MsOEJBQ0FrQixZQUFZK0MsUUFBUSxlQUFlLEdBQUlzSCxXQUFVO0FBQ2hEQSxZQUFNQyxlQUFlO0FBQ3JCdEIsdUJBQWlCLHlCQUF5QjtJQUMzQyxDQUFDLENBQ0YsQ0FDRDtFQUNEO0FBQ0QsR0FBRzsiLAogICJuYW1lcyI6IFsibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJlZGl0IiwgInRpdGxlIiwgInNlY3Rpb24iLCAidGV4dCIsICJzdW1tYXJ5IiwgImNhbGxiYWNrIiwgInBhcmFtIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwb3N0V2l0aFRva2VuIiwgInRoZW4iLCAiZWRpdEFwcGVuZCIsICJhZGRlZENvbnRlbnQiLCAicHJvcCIsICJydnByb3AiLCAidGl0bGVzIiwgImRhdGEiLCAiX2RhdGEkcXVlcnkkcGFnZXMkMCRyIiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJjb250ZW50IiwgImFyY2hpdmVTZWN0aW9uQ2FsbGJhY2siLCAidGFyZ2V0VGl0bGUiLCAicnZzZWN0aW9uIiwgIl9kYXRhJHF1ZXJ5JHBhZ2VzJDAkcjIiLCAiZGVsZXRlU2VjdGlvbkNhbGxiYWNrIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgImVsZW1lbnRXcmFwIiwgImlkIiwgImlubmVyRWxlbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVtcHR5RWxlbWVudCIsICJGcmFnbWVudCIsICJsaW5rV3JhcCIsICJ0ZXh0Q29udGVudCIsICJocmVmIiwgIm9uQ2xpY2tXcmFwIiwgIm9uQ2xpY2siLCAiZGF0YUFjdHVhbCIsICJkYXRhTm9taW5hbCIsICJjbGFzcyIsICJwaXBlRWxlbWVudCIsICJzZWN0aW9uSWRTcGFuRWxlbWVudCIsICJzdHlsZSIsICJkaXNwbGF5IiwgInNwYW4iLCAiaW5uZXJIVE1MIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImRlbGV0ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJhcmNoaXZlIiwgInN1cHBvcnRzIiwgIm90aGVyc19wYWdlIiwgInRvX2VuYWJsZSIsICJlbmFibGVfb25fZ2VuZXJpY19wYWdlIiwgInBsZWFzZV9lbmFibGUiLCAicGxlYXNlX2VuYWJsZV9lbGFib3JhdGUiLCAibGVmdF9wYXJfc3BsaXQiLCAiemgiLCAicmlnaHRfcGFyIiwgInBlcmlvZCIsICJhcmNoaXZlX3BhdGhfY29sb25fc3BsaXQiLCAibG9hZGluZ19zZWN0aW9uX2kiLCAiZGVsZXRpbmdfc2VjdGlvbl9pIiwgImRvbmVfc2VjdGlvbl9pIiwgImRvbmVfZGVsZXRpbmdfc2VjdGlvbl9pIiwgImJlaW5nX2FyY2hpdmVkIiwgImJlaW5nX2RlbGV0ZWQiLCAiYWxyZWFkeV9hcmNoaXZlZCIsICJhbHJlYWR5X2RlbGV0ZWQiLCAib3RoZXJzX3RhbGtfZWxhYm9yYXRlIiwgInBhZ2Vfbm90X3N1cHBvcnRlZCIsICJwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlIiwgInByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UiLCAicHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlIiwgImFyY2hpdmVfc3VtbWFyeSIsICJkZWxldGVfc3VtbWFyeSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibWVzc2FnZSIsICJ0YWciLCAicGFyYW1zIiwgImdlbmVyYXRlQXJyYXkiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJlbnRyaWVzIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJpIiwgImVsZW1lbnQiLCAidmFsdWUiLCAic2VhcmNoIiwgInJlcGxhY2UiLCAiZXJyIiwgImUiLCAiZiIsICJzYW5pdGl6ZSIsICJzdHJpbmciLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImVhc3lBcmNoaXZlV3JhcCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnVXNlck5hbWUiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUmV2aXNpb25JZCIsICJQYXJlX3N0ciIsICJjb25zdHJ1Y3RvciIsICJwYXJlX3N0cmluZyIsICJzdHIiLCAibGVmdCIsICJkZWxpbSIsICJyaWdodCIsICJTdHJpbmciLCAibGVuZ3RoIiwgInRlc3QiLCAic2xpY2UiLCAiU3ludGF4RXJyb3IiLCAiZmluZCIsICJsb29rdXBfa2V5IiwgInNwbGl0IiwgInNldHRpbmdzX3N0cmluZyIsICJzZXR0aW5ncyIsICJuZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXgiLCAiZGlzX3N1cHBvcnRfdGhlc2VfcGFnZXNfcmVnZXgiLCAic2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAic2V0dGluZ3Nfc3BhbiIsICJwYWdlX3NldHRpbmdzIiwgIm9uX3VzZXJfdGFsayIsICJteV91c2VyX3RhbGsiLCAiVGl0bGUiLCAib3RoZXJzX3VzZXJfdGFsayIsICJoYXNfdGVtcGxhdGUiLCAib25fYXJ0aWNsZSIsICJvbl9oaXN0X3ZlcnNpb24iLCAic2VjdGlvbl9jb3VudCIsICJub21pbmFsX3NlY3Rpb25zIiwgImNvdW50IiwgImFyciIsICJBcnJheSIsICJmcm9tIiwgImFjdHVhbF9zZWN0aW9uIiwgIm5vbWluYWxfc2VjdGlvbl9udW1iZXIiLCAibGVzcyIsICJyZXBvcnRfZG9uZW5lc3NfdWkiLCAic2VjdGlvbl9udW1iZXIiLCAiZG9uZW5lc3NfdHlwZSIsICJ0byIsICJvbmdvaW5nX29yX2RvbmUiLCAidGFnX2RpbmciLCAidGFnX3NlY3Rpb24iLCAiZGluZ190eXBlIiwgImRpbmdfYXV0b2hpZGUiLCAiYWN0aW9ucyIsICJkaW5nIiwgInRvYXN0aWZ5IiwgImNsb3NlIiwgImR1cmF0aW9uIiwgInNlY3Rpb25fbGluayIsICJub2RlcyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJub2RlIiwgInBhcmVudE5vZGUiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiY2hpbGROb2RlIiwgImNvbG9yIiwgImRlbGV0ZVNlY3Rpb25Db3JlIiwgIl9ub21pbmFsIiwgImFjdHVhbF9zZWN0aW9uX251bWJlciIsICJkZWxldGVTZWN0aW9uIiwgImFyY2hpdmVTZWN0aW9uQ29yZSIsICJhcmNoaXZlU2VjdGlvbiIsICJlbGFib3JhdGVfbm90aWNlIiwgIm5vdGljZV90YWdfbmFtZSIsICJub3RpY2VfdGFnX2RpY3Rpb25hcnkiLCAibm90aWNlX3NldCIsICJudGFnIiwgIm50eXBlIiwgIm50dGwiLCAibnBlcnNpc3QiLCAibnN1YnN0IiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9pbmhpYml0IiwgInNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaW5oaWJpdCIsICJzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2UiLCAic2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZSIsICJmb290ZXJfaW5mb19lbGUiLCAiaXNfaW5fYmxhY2tsaXN0IiwgImJsYWNrbGlzdCIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJwcmVwZW5kIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgIm5vcm1hbF9mdW5jdGlvbl9pbmplY3RfaW50ZXJmYWNlIiwgImoiLCAiZWRpdFNlY3Rpb25Db2xsZWN0aW9uIiwgImVsZSIsICJ2ZSIsICJjaGlsZE5vZGVzIiwgImNoaWxkX25vZGVfbnVtYmVyIiwgInRhZ05hbWUiLCAidG9Mb3dlckNhc2UiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImFjdHVhbCIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAibm9taW5hbCIsICJhcHBlbmQiLCAidGFyZ2V0IiwgImRhdGFzZXQiLCAiYWZ0ZXIiLCAiZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZSJdCn0K
