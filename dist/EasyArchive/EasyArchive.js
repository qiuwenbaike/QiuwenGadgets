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
    const originalContent = (_data$query$pages$0$r = data["query"].pages[0].revisions[0].content) !== null && _data$query$pages$0$r !== void 0 ? _data$query$pages$0$r : "";
    edit({
      title,
      section: void 0,
      text: "".concat(originalContent + addedContent),
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
    }, del_sum);
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
    }, arc_sum);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9hcGkudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvZWRpdC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9leHBvc2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvcmVhY3QudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvc2FuaXRpemUudHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiNC4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEVhc3lBY2hpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBlZGl0ID0gKHtcblx0dGl0bGUsXG5cdHNlY3Rpb24sXG5cdHRleHQsXG5cdHN1bW1hcnksXG5cdGNhbGxiYWNrLFxufToge1xuXHR0aXRsZTogc3RyaW5nO1xuXHRzZWN0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdHRleHQ6IHN0cmluZztcblx0c3VtbWFyeTogc3RyaW5nO1xuXHRjYWxsYmFjazogKCkgPT4gdm9pZDtcbn0pID0+IHtcblx0Y29uc3QgcGFyYW06IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZSxcblx0XHRzdW1tYXJ5LFxuXHRcdHRleHQsXG5cdH07XG5cdGlmIChzZWN0aW9uKSB7XG5cdFx0cGFyYW0uc2VjdGlvbiA9IHNlY3Rpb247XG5cdH1cblx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtKS50aGVuKGNhbGxiYWNrKTtcbn07XG5cbmNvbnN0IGVkaXRBcHBlbmQgPSAoe1xuXHR0aXRsZSxcblx0YWRkZWRDb250ZW50LFxuXHRzdW1tYXJ5LFxuXHRjYWxsYmFjayxcbn06IHtcblx0dGl0bGU6IHN0cmluZztcblx0YWRkZWRDb250ZW50OiBzdHJpbmc7XG5cdHN1bW1hcnk6IHN0cmluZztcblx0Y2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xufSkgPT4ge1xuXHRjb25zdCBwYXJhbTogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0cnZwcm9wOiBbJ2lkcycsICdmbGFncycsICd0aW1lc3RhbXAnLCAndXNlcicsICd1c2VyaWQnLCAnc2l6ZScsICdjb21tZW50JywgJ3RhZ3MnLCAnY29udGVudCddLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHRpdGxlLFxuXHR9O1xuXG5cdHZvaWQgYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbSkudGhlbigoZGF0YSkgPT4ge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRjb25zdCBvcmlnaW5hbENvbnRlbnQgPSBkYXRhWydxdWVyeSddLnBhZ2VzWzBdLnJldmlzaW9uc1swXS5jb250ZW50ID8/ICcnO1xuXHRcdGVkaXQoe1xuXHRcdFx0dGl0bGUsXG5cdFx0XHRzZWN0aW9uOiB1bmRlZmluZWQsXG5cdFx0XHR0ZXh0OiBgJHtvcmlnaW5hbENvbnRlbnQgKyBhZGRlZENvbnRlbnR9YCxcblx0XHRcdHN1bW1hcnksXG5cdFx0XHRjYWxsYmFjazogY2FsbGJhY2sgPz8gKCgpID0+IHt9KSxcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2VkaXQsIGVkaXRBcHBlbmR9O1xuIiwgImltcG9ydCB7ZWRpdCwgZWRpdEFwcGVuZH0gZnJvbSAnLi9lZGl0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGFyY2hpdmVTZWN0aW9uQ2FsbGJhY2sgPSAoXG5cdHRpdGxlOiBzdHJpbmcsXG5cdHNlY3Rpb246IHN0cmluZyxcblx0dGFyZ2V0VGl0bGU6IHN0cmluZyxcblx0Y2FsbGJhY2s6ICgpID0+IHZvaWQgfCB1bmRlZmluZWQsXG5cdHN1bW1hcnk6IHN0cmluZ1xuKSA9PiB7XG5cdGNvbnN0IHBhcmFtOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRydnNlY3Rpb246IHNlY3Rpb24sXG5cdH07XG5cblx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0ZWRpdEFwcGVuZCh7XG5cdFx0XHR0aXRsZTogdGFyZ2V0VGl0bGUsXG5cdFx0XHRhZGRlZENvbnRlbnQ6IGBcXG5cXG4ke2RhdGFbJ3F1ZXJ5J10ucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQgPz8gZmFsc2V9YCxcblx0XHRcdHN1bW1hcnksXG5cdFx0fSk7XG5cdFx0ZWRpdCh7XG5cdFx0XHR0aXRsZSxcblx0XHRcdHNlY3Rpb246IGAke3NlY3Rpb259YCxcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdGNhbGxiYWNrOiBjYWxsYmFjayA/PyAoKCkgPT4ge30pLFxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbmNvbnN0IGRlbGV0ZVNlY3Rpb25DYWxsYmFjayA9ICh0aXRsZTogc3RyaW5nLCBzZWN0aW9uOiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkIHwgdW5kZWZpbmVkLCBzdW1tYXJ5OiBzdHJpbmcpID0+IHtcblx0ZWRpdCh7dGl0bGUsIHNlY3Rpb246IGAke3NlY3Rpb259YCwgdGV4dDogJycsIHN1bW1hcnksIGNhbGxiYWNrOiBjYWxsYmFjayA/PyAoKCkgPT4ge30pfSk7XG59O1xuXG5leHBvcnQge2FyY2hpdmVTZWN0aW9uQ2FsbGJhY2ssIGRlbGV0ZVNlY3Rpb25DYWxsYmFja307XG4iLCAiaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuY29uc3QgZWxlbWVudFdyYXAgPSAoaWQ6IHN0cmluZywgaW5uZXJFbGVtZW50OiBSZWFjdEVsZW1lbnQpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtbJ3BhZ2UtaW5mb19faXRlbSddfSBpZD17aWR9PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgaWQ9e2lkfT57aW5uZXJFbGVtZW50fTwvbGk+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGlkPXtpZH0+e2lubmVyRWxlbWVudH08L2Rpdj47XG59O1xuXG5jb25zdCBlbXB0eUVsZW1lbnQgPSAoKSA9PiA8PjwvPjtcblxuY29uc3QgbGlua1dyYXAgPSAodGV4dENvbnRlbnQ6IHN0cmluZywgaHJlZjogc3RyaW5nKSA9PiA8YSBocmVmPXtocmVmfSB0ZXh0Q29udGVudD17dGV4dENvbnRlbnR9IC8+O1xuXG5jb25zdCBvbkNsaWNrV3JhcCA9ICh0ZXh0Q29udGVudDogc3RyaW5nLCBvbkNsaWNrOiAoKSA9PiB2b2lkLCBkYXRhQWN0dWFsPzogc3RyaW5nLCBkYXRhTm9taW5hbD86IHN0cmluZykgPT4gKFxuXHQ8YVxuXHRcdGNsYXNzPXtbJ2Vhc3ktYXJjaGl2ZS1saW5rJywgYGVhc3ktYXJjaGl2ZS1saW5rLSR7ZGF0YUFjdHVhbH0tJHtkYXRhTm9taW5hbH1gXX1cblx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHRcdHRleHRDb250ZW50PXt0ZXh0Q29udGVudH1cblx0XHRkYXRhLWFjdHVhbD17ZGF0YUFjdHVhbH1cblx0XHRkYXRhLW5vbWluYWw9e2RhdGFOb21pbmFsfVxuXHQvPlxuKTtcblxuY29uc3QgcGlwZUVsZW1lbnQgPSAoKSA9PiA8c3BhbiBjbGFzcz1cIm13LWVkaXRzZWN0aW9uLWRpdmlkZXJcIiB0ZXh0Q29udGVudD17J3wnfSAvPjtcblxuY29uc3Qgc2VjdGlvbklkU3BhbkVsZW1lbnQgPSAoaWQ6IHN0cmluZykgPT4gKFxuXHQ8c3BhblxuXHRcdGNsYXNzPXtbJ2Vhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4nLCBgZWFzeS1hcmNoaXZlLXNlY3Rpb24taWQtc3Bhbi1vcmRlci0ke2lkfWBdfVxuXHRcdHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX1cblx0Lz5cbik7XG5cbmNvbnN0IHNwYW4gPSAoaW5uZXJIVE1MOiBzdHJpbmcpID0+IDxzcGFuIGlubmVySFRNTD17aW5uZXJIVE1MfSAvPjtcblxuZXhwb3J0IHtlbGVtZW50V3JhcCwgZW1wdHlFbGVtZW50LCBsaW5rV3JhcCwgb25DbGlja1dyYXAsIHBpcGVFbGVtZW50LCBzZWN0aW9uSWRTcGFuRWxlbWVudCwgc3Bhbn07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGRlbGV0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpCcsXG5cdFx0fSksXG5cdFx0YXJjaGl2ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpQnLFxuXHRcdH0pLFxuXHRcdHN1cHBvcnRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBlbmFibGVkIG9uIHRoaXMgdGFsayBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acrOiuqOiuuumhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUnLFxuXHRcdH0pLFxuXHRcdG90aGVyc19wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBub3QgZW5hYmxlZC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5piv5LuW5Lq655qE55So5oi36K6o6K666aG16Z2i77yM5Zug5q2k5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i54K65LuW5Lq655So5oi26KiO6KuW6aCB6Z2i77yM5pWF5LiN5pSv5o+0IEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdHRvX2VuYWJsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHVzaW5nIEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5rKh5pyJ5ZCv55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmnKzpoIHmsqHmnInllZ/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRlbmFibGVfb25fZ2VuZXJpY19wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3QgeW91ciB1c2VyIHRhbGsgcGFnZS4gSG93ZXZlciBFYXN5IEFyY2hpdmUgc3RpbGwgY2FuIGJlIHVzZWQgaWYgbmVlZGVkLlRvIGVuYWJsZSBpdCwgYWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRlbXBsYXRlIHRvIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5q2k6aG16Z2i5LiN5piv5oKo55qE55So5oi36K6o6K666aG16Z2i44CC5LiN6L+H77yM6Iul6ZyA6KaB77yM5q2k6aG16Z2i5Y+v5Lul5ZCv55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzor7flnKjpobXpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5L2N572ufX3jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5q2k6aCB6Z2i5LiN5piv5oKo55qE55So5oi26KiO6KuW6aCB6Z2i44CC5LiN6YGO77yM6Iul6ZyA6KaB77yM5q2k6aCB6Z2i5Y+v5Lul5ZWf55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzoq4vlnKjpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdHBsZWFzZV9lbmFibGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRvIHRoaXMgcGFnZSB0byBzdGFydCB1c2luZyBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+WcqOatpOmhtemdouWKoOWFpSB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPlnLDlnYB9fSDmnaXlkK/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+WcqOatpOmggemdouWKoOWFpSB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59fSDkvobllZ/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46IFwiWW91IGhhdmUgdGhlIEVhc3kgQXJjaGl2ZSBmdW5jdGlvbmFsaXR5IGVuYWJsZWQgYnV0IHlvdXIgdGFsayBwYWdlIGhhc24ndCBiZWVuIGNvbmZpZ3VyZWQgeWV0LiBUbyB0YWtlIGFkdmFudGFnZSBvZiBFYXN5IEFyY2hpdmUsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuXCIsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjnmoTotKblj7flt7Lnu4/mlK/mjIEgRWFzeSBBcmNoaXZl77yM5L2G5piv77yM5Li65LqG5byA5aeL5L2/55So6K+l5Yqf6IO977yM5oKo6L+Y6ZyA6KaB5Zyo6Ieq5bex55qE55So5oi36K6o6K666aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOeahOizrOiZn+W3sue2k+aUr+aMgSBFYXN5IEFyY2hpdmXvvIzkvYbmmK/vvIzngrrkuobplovlp4vkvb/nlKjoqbLlip/og73vvIzmgqjpgoTpnIDopoHlnKjoh6rlt7HnmoTnlKjmiLboqI7oq5bpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdGxlZnRfcGFyX3NwbGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHRyaWdodF9wYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKScsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0cGVyaW9kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHRcdGFyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlIGxvY2F0aW9uOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5Zyw5Z2A77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOiHs++8micsXG5cdFx0fSksXG5cdFx0bG9hZGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZyBzZWN0aW9uICQxJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOivu+WPluesrCAkMSDoioLnmoTlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo6K6A5Y+W56ysICQxIOevgOeahOWFp+WuuScsXG5cdFx0fSksXG5cdFx0ZGVsZXRpbmdfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RlbGV0aW5nIHNlY3Rpb24gJDEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yig6Zmk56ysICQxIOiKgueahOWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjliKrpmaTnrKwgJDEg56+A55qE5YWn5a65Jyxcblx0XHR9KSxcblx0XHRkb25lX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZWN0aW9uICQxIGhhcyBiZWVuIGFyY2hpdmVkIHRvICQyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3sue7j+WwhuesrCAkMSDoioLlrZjmoaPliLAgJDInLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey57aT5bCH56ysICQxIOevgOWtmOaqlOWIsCAkMicsXG5cdFx0fSksXG5cdFx0ZG9uZV9kZWxldGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VjdGlvbiAkMSBoYXMgYmVlbiBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3sue7j+WwhuesrCAkMSDoioLliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey57aT5bCH56ysICQxIOevgOWIqumZpCcsXG5cdFx0fSksXG5cdFx0YmVpbmdfYXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYmVpbmcgYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOS4rScsXG5cdFx0fSksXG5cdFx0YmVpbmdfZGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOS4rScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTkuK0nLFxuXHRcdH0pLFxuXHRcdGFscmVhZHlfYXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWtmOaqlCcsXG5cdFx0fSksXG5cdFx0YWxyZWFkeV9kZWxldGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWIqumZpCcsXG5cdFx0fSksXG5cdFx0b3RoZXJzX3RhbGtfZWxhYm9yYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogXCJUaGlzIHBhZ2UgaXMgYW5vdGhlciB1c2VyJ3MgdGFsayBwYWdlLiBZb3UgY2Fubm90IGFyY2hpdmUgdGhlIHRvcGljcyBvbiB0aGlzIHBhZ2UgZm9yIGhpbS9oZXJcIixcblx0XHRcdCd6aC1oYW5zJzogJ+i/meaYr+WPpuS4gOWQjeeUqOaIt+eahOiuqOiuuumhtemdou+8jOaCqOS4jeiDveS7o+abv+WPpuS4gOWQjeeUqOaIt+WtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfpgJnmmK/lj6bkuIDlkI3nlKjmiLbnmoToqI7oq5bpoIHpnaLvvIzmgqjkuI3og73ku6Pmm7/lj6bkuIDlkI3nlKjmiLblrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdHBhZ2Vfbm90X3N1cHBvcnRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0cGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGVzZSBwYWdlcyBhcmUgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmU6IEZpbGUsIFRlbXBsYXRlLCBNb2R1bGUsIE1lZGlhV2lraSwgQ2F0ZWdvcnksIFNwZWNpYWwsIEphdmFTY3JpcHQsIENTUywgSlNPTi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6L+Z5Lqb6aG16Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJpGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfpgJnkupvpoIHpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8mkZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHR9KSxcblx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBvZiB0aGlzIHBhZ2UsIFwiJDFcIiwgaXMgdW5kZXIgdGhlIGFydGljbGUgbmFtZXNwYWNlLCB3aGVyZSBhcmNoaXZlcyBzaG91bGQgbm90IGJlIG5vcm1hbGx5IGRpcmVjdGVkIHRvLiBQbGVhc2UgY2hlY2sgaWYgeW91IGhhdmUgdGhlIGNvcnJlY3QgYXJjaGl2ZSBsb2NhdGlvbi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3vvIzlnKjmnaHnm67lkI3np7Dnqbrpl7TkuYvkuIvjgILkuIDoiKzogIzoqIDkuI3lupTlkJHmnaHnm67lkI3np7Dnqbrpl7Tov5vooYzlrZjmoaPvvIzor7fmo4Dmn6XlrZjmoaPlnLDlnYDjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3vvIzlnKjmop3nm67lkI3nqLHnqbrplpPkuYvkuIvjgILkuIDoiKzogIzoqIDkuI3mh4nlkJHmop3nm67lkI3nqLHnqbrplpPpgLLooYzlrZjmqpTvvIzoq4vmqqLmn6XlrZjmqpTlnLDlnYDjgIInLFxuXHRcdH0pLFxuXHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlIGFyY2hpdmUgbG9jYXRpb24gb2YgdGhpcyBwYWdlLCBcIiQxXCIsIGlzIHRoaXMgcGFnZSBpdHNlbGYsIEVhc3kgYXJjaGl2ZSBjYW5ub3Qgb3BlcmF0ZSBsaWtlIHRoaXMuICcsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLnm67liY3nmoTlrZjmoaPlnLDlnYDmmK/igJwkMeKAne+8jOWSjOatpOmhtemdouWQjeensOebuOWQjOOAgkVhc3kgQXJjaGl2ZSDml6Dms5XmjInmraTlnLDlnYDlrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3vvIzlkozmraTpoIHpnaLlkI3nqLHnm7jlkIzjgIJFYXN5IEFyY2hpdmUg54Sh5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHRhcmNoaXZlX3N1bW1hcnk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+auteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdGRlbGV0ZV9zdW1tYXJ5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOauteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTmrrXokL0nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuY29uc3QgbWVzc2FnZSA9ICh0YWc6IGtleW9mIHR5cGVvZiBpMThuTWVzc2FnZXMsIC4uLnBhcmFtczogc3RyaW5nW10pID0+IHtcblx0bGV0IGNvbnRlbnQgPSBnZXRNZXNzYWdlKHRhZyk7XG5cdHBhcmFtcyA9IGdlbmVyYXRlQXJyYXkoLi4ucGFyYW1zKTtcblx0dHJ5IHtcblx0XHRmb3IgKGNvbnN0IFtpLCBlbGVtZW50XSBvZiBwYXJhbXMuZW50cmllcygpKSB7XG5cdFx0XHRjb25zdCBzZWFyY2ggPSBgJCR7aSArIDF9YDtcblx0XHRcdGlmIChjb250ZW50LmluY2x1ZGVzKHNlYXJjaCkpIHtcblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQucmVwbGFjZShzZWFyY2gsIGVsZW1lbnQgPz8gJycpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCB7bWVzc2FnZX07XG4iLCAiY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIHN0cmluZ1xuXHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHQucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jylcblx0XHQucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufTtcblxuZXhwb3J0IHtzYW5pdGl6ZX07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9FYXN5QXJjaGl2ZS5sZXNzJztcblxuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FyY2hpdmVTZWN0aW9uQ2FsbGJhY2ssIGRlbGV0ZVNlY3Rpb25DYWxsYmFja30gZnJvbSAnLi9tb2R1bGVzL2V4cG9zZSc7XG5pbXBvcnQge1xuXHRlbGVtZW50V3JhcCxcblx0ZW1wdHlFbGVtZW50LFxuXHRsaW5rV3JhcCxcblx0b25DbGlja1dyYXAsXG5cdHBpcGVFbGVtZW50LFxuXHRzZWN0aW9uSWRTcGFuRWxlbWVudCxcblx0c3Bhbixcbn0gZnJvbSAnLi9tb2R1bGVzL3JlYWN0LnRzeCc7XG5pbXBvcnQge21lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7c2FuaXRpemV9IGZyb20gJy4vbW9kdWxlcy9zYW5pdGl6ZS50cyc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuKGZ1bmN0aW9uIGVhc3lBcmNoaXZlV3JhcCgpIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1VzZXJOYW1lLCB3Z0N1clJldmlzaW9uSWQsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCB8fCB3Z1BhZ2VOYW1lID09PSAnUWl1d2VuOummlumhtScpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBtaW5pZmllZCBjb2RlIGRlcGVuZGVuY3kgZnVuY3Rpb25zXG5cdGNsYXNzIFBhcmVfc3RyIHtcblx0XHRjb25zdHJ1Y3RvcihwYXJlX3N0cmluZywgY29uZmlnKSB7XG5cdFx0XHR0aGlzLnN0ciA9IHBhcmVfc3RyaW5nO1xuXHRcdFx0dGhpcy5sZWZ0ID0gJygnO1xuXHRcdFx0dGhpcy5kZWxpbSA9ICc6Jztcblx0XHRcdHRoaXMucmlnaHQgPSAnKSc7XG5cdFx0XHRpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Y29uZmlnID0gU3RyaW5nKGNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHBhcmVfc3RyaW5nLmxlbmd0aCA+IDYgJiZcblx0XHRcdFx0L1sjJUBdW1NzXVtFZV1bVHRdLy50ZXN0KHBhcmVfc3RyaW5nLnNsaWNlKDAsIDQpKSAmJlxuXHRcdFx0XHQhY29uZmlnLmluY2x1ZGVzKCdpZ25vcmUtc2V0Jylcblx0XHRcdCkge1xuXHRcdFx0XHRbLCAsICwgLCB0aGlzLmxlZnQsIHRoaXMuZGVsaW0sIHRoaXMucmlnaHRdID0gcGFyZV9zdHJpbmc7XG5cdFx0XHRcdGlmICh0aGlzLmxlZnQgPT09IHRoaXMucmlnaHQgfHwgdGhpcy5sZWZ0ID09PSB0aGlzLmRlbGltIHx8IHRoaXMucmlnaHQgPT09IHRoaXMuZGVsaW0pIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJQb3VuZCBzZXQgc3RhdGVtZW50IGhhcyByZXBldGl0aXZlIGNoYXJhY3RlcnMuIEUuZy4gJyNzZXR8OnwnIGlzIGlsbGVnYWwuXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmQobG9va3VwX2tleSkge1xuXHRcdFx0bG9va3VwX2tleSA9IHRoaXMubGVmdCArIGxvb2t1cF9rZXkgKyB0aGlzLmRlbGltO1xuXHRcdFx0aWYgKCF0aGlzLnN0ci5pbmNsdWRlcyhsb29rdXBfa2V5KSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnN0ci5zcGxpdChsb29rdXBfa2V5KVsxXS5zcGxpdCh0aGlzLnJpZ2h0KVswXTtcblx0XHR9XG5cdH1cblxuXHQvLyBkZWZhdWx0IHNldHRpbmdzOlxuXHRsZXQgc2V0dGluZ3Nfc3RyaW5nID1cblx0XHQnI3NldCV8P1x0XHRcdFx0XHRcdFx0XHRcdFxcbicgK1xuXHRcdCdkaXNwbGF5IHNlY3Rpb24gZGVsZXRlIGxpbmtcdCVzZWMtZGVsfDE/XHRcXG4nICtcblx0XHQnZGlzcGxheSBzZWN0aW9uIGFyY2hpdmUgbGluZVx0JXNlYy1hcmN8MT9cdFxcbicgK1xuXHRcdCdkaXNwbGF5IGNvbnRyb2wgYmFyIGF0IHRvcFx0JXRvcC1iYXJ8MD9cdFxcbicgK1xuXHRcdCdhcmNoaXZlIGxvY2F0aW9uXHRcdFx0XHQlYXJjLWxvY3w/XHRcXG4nICtcblx0XHQnc3Vic2VjdGlvbiBlZmZlY3RpdmVuZXNzXHRcdCVzdWItc2VjfDI/XHRcXG4nICtcblx0XHQnY29uZmlybSBhY3Rpb25cdFx0XHRcdCVjb25maXJtfDA/XHRcXG4nICtcblx0XHQnaXMgdGhpcyBkYXRhIGluaXRpYWxpemVkXHRcdCVkYXRhLWluaXR8MD8gXFxuJztcblx0bGV0IHNldHRpbmdzID0gbmV3IFBhcmVfc3RyKHNldHRpbmdzX3N0cmluZyk7XG5cdGNvbnN0IG5ldmVyX2VuYWJsZV9vbl90aGVzZV9wYWdlc19yZWdleCA9IFtdO1xuXHRjb25zdCBkaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCA9IFtcblx0XHQvXkZpbGU6LiokLyxcblx0XHQvXk1lZGlhV2lraTouKiQvLFxuXHRcdC9eTW9kdWxlOi4qJC8sXG5cdFx0L15DYXRlZ29yeTouKiQvLFxuXHRcdC9eVGVtcGxhdGU6LiokLyxcblx0XHQvXlNwZWNpYWw6LiokLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmNzcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzb24kLyxcblx0XTtcblx0Y29uc3Qgc2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVhc3lfYXJjaGl2ZV9kYXRhX3BvaW50X2NvbGxlY3Rpb24nKTtcblx0Y29uc3QgW3NldHRpbmdzX3NwYW5dID0gc2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uO1xuXHRjb25zdCBwYWdlX3NldHRpbmdzID0gc2V0dGluZ3Nfc3BhbiA/IG5ldyBQYXJlX3N0cihzZXR0aW5nc19zcGFuLmlubmVySFRNTCkgOiBuZXcgUGFyZV9zdHIoJycpO1xuXHRpZiAocGFnZV9zZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzEnKSB7XG5cdFx0c2V0dGluZ3Nfc3RyaW5nID0gc2V0dGluZ3Nfc3Bhbi5pbm5lckhUTUw7XG5cdFx0c2V0dGluZ3MgPSBuZXcgUGFyZV9zdHIoc2V0dGluZ3Nfc3RyaW5nKTtcblx0fVxuXHQvLyBpZGVudGlmeSBpZiBFYXN5IEFyY2hpdmUgY2FuIGJlIHVzZWQgb24gdGhlIHBhZ2UgLSBjb21wYXRpYmlsaXR5XG5cdGNvbnN0IG9uX3VzZXJfdGFsayA9IHdnTmFtZXNwYWNlTnVtYmVyID09PSAzO1xuXHRjb25zdCBteV91c2VyX3RhbGsgPVxuXHRcdG9uX3VzZXJfdGFsayAmJlxuXHRcdCgoKSA9PiB7XG5cdFx0XHRsZXQgcGFnZV9uYW1lID0gd2dQYWdlTmFtZS5zcGxpdCgnOicpO1xuXHRcdFx0cGFnZV9uYW1lWzBdID0gJyc7XG5cdFx0XHRwYWdlX25hbWUgPSBwYWdlX25hbWUuam9pbignJyk7XG5cdFx0XHRbcGFnZV9uYW1lXSA9IHBhZ2VfbmFtZS5zcGxpdCgnLycpO1xuXHRcdFx0Y29uc3QgdXNlcl9uYW1lID0gd2dVc2VyTmFtZTtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHVzZXJfbmFtZS5zcGxpdCgnXycpLmpvaW4oJycpLnNwbGl0KCcgJykuam9pbignJykgPT09IHBhZ2VfbmFtZS5zcGxpdCgnXycpLmpvaW4oJycpLnNwbGl0KCcgJykuam9pbignJylcblx0XHRcdCk7XG5cdFx0fSkoKTtcblx0Y29uc3QgaGFzX3RlbXBsYXRlID0gcGFnZV9zZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzEnO1xuXHRjb25zdCBvdGhlcnNfdXNlcl90YWxrID0gbXlfdXNlcl90YWxrID09PSBmYWxzZSAmJiBvbl91c2VyX3RhbGsgPT09IHRydWU7XG5cdGNvbnN0IG9uX2FydGljbGUgPSB3Z05hbWVzcGFjZU51bWJlciA9PT0gMDtcblx0Y29uc3Qgb25faGlzdF92ZXJzaW9uID0gd2dDdXJSZXZpc2lvbklkIC0gd2dSZXZpc2lvbklkICE9PSAwO1xuXHRsZXQgc2VjdGlvbl9jb3VudDtcblx0Y29uc3QgYXJjX3N1bSA9IG1lc3NhZ2UoJ2FyY2hpdmVfc3VtbWFyeScpO1xuXHRjb25zdCBkZWxfc3VtID0gbWVzc2FnZSgnZGVsZXRlX3N1bW1hcnknKTtcblx0Y29uc3Qgbm9taW5hbF9zZWN0aW9ucyA9ICgoY291bnQpID0+IHtcblx0XHRjb25zdCBhcnIgPSBBcnJheS5mcm9tKHtcblx0XHRcdGxlbmd0aDogY291bnQsXG5cdFx0fSk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdFx0XHRhcnJbaV0gPSBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIGFycjtcblx0fSkoc2VjdGlvbl9jb3VudCk7XG5cdGNvbnN0IGFjdHVhbF9zZWN0aW9uID0gKG5vbWluYWxfc2VjdGlvbl9udW1iZXIpID0+IHtcblx0XHRsZXQgbGVzcyA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBub21pbmFsX3NlY3Rpb25fbnVtYmVyOyBpKyspIHtcblx0XHRcdGlmIChub21pbmFsX3NlY3Rpb25zW2ldID09PSB0cnVlKSB7XG5cdFx0XHRcdGxlc3MrKztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG5vbWluYWxfc2VjdGlvbl9udW1iZXIgLSBsZXNzO1xuXHR9O1xuXHQvLyAuLi4gaW50ZXJmYWNlIGRvbmVcblx0Ly8gYXJjaGl2aW5nIGxvZ2ljIGluamVjdGlvblxuXHRjb25zdCByZXBvcnRfZG9uZW5lc3NfdWkgPSAoc2VjdGlvbl9udW1iZXIsIGRvbmVuZXNzX3R5cGUsIHRvLCBvbmdvaW5nX29yX2RvbmUpID0+IHtcblx0XHRsZXQgdGFnX2Rpbmc7XG5cdFx0bGV0IHRhZ19zZWN0aW9uO1xuXHRcdGxldCBkaW5nX3R5cGU7XG5cdFx0bGV0IGRpbmdfYXV0b2hpZGU7XG5cdFx0aWYgKG9uZ29pbmdfb3JfZG9uZSA9PT0gJ29uZ29pbmcnKSB7XG5cdFx0XHRkaW5nX3R5cGUgPSAnaW5mbyc7XG5cdFx0XHRkaW5nX2F1dG9oaWRlID0gdHJ1ZTtcblx0XHRcdGlmIChkb25lbmVzc190eXBlID09PSAnZGVsZXRlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdkZWxldGluZ19zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdiZWluZ19kZWxldGVkJztcblx0XHRcdH0gZWxzZSBpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2FyY2hpdmUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2xvYWRpbmdfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYmVpbmdfYXJjaGl2ZWQnO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAob25nb2luZ19vcl9kb25lID09PSAnZG9uZScpIHtcblx0XHRcdGRpbmdfdHlwZSA9ICdzdWNjZXNzJztcblx0XHRcdGRpbmdfYXV0b2hpZGUgPSBmYWxzZTtcblx0XHRcdGlmIChkb25lbmVzc190eXBlID09PSAnZGVsZXRlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdkb25lX2RlbGV0aW5nX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2FscmVhZHlfZGVsZXRlZCc7XG5cdFx0XHR9IGVsc2UgaWYgKGRvbmVuZXNzX3R5cGUgPT09ICdhcmNoaXZlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdkb25lX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2FscmVhZHlfYXJjaGl2ZWQnO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBhY3Rpb25zID0ge1xuXHRcdFx0ZGluZzogKCkgPT4ge1xuXHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBtZXNzYWdlKHRhZ19kaW5nLCBgJHtzZWN0aW9uX251bWJlcn1gLCB0byksXG5cdFx0XHRcdFx0XHRjbG9zZTogIWRpbmdfYXV0b2hpZGUsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogZGluZ19hdXRvaGlkZSA/IDMwMDAgOiAtMSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGRpbmdfdHlwZVxuXHRcdFx0XHQpO1xuXHRcdFx0fSxcblx0XHRcdHNlY3Rpb25fbGluazogKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5lYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuLW9yZGVyLSR7c2VjdGlvbl9udW1iZXJ9YCk7XG5cdFx0XHRcdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuXHRcdFx0XHRcdGNvbnN0IHtwYXJlbnROb2RlfSA9IG5vZGU7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBjaGlsZE5vZGUgb2YgcGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuZWFzeS1hcmNoaXZlLWxpbmsnKSkge1xuXHRcdFx0XHRcdFx0Y2hpbGROb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5vZGUuaW5uZXJIVE1MID0gbWVzc2FnZSh0YWdfc2VjdGlvbik7XG5cdFx0XHRcdFx0bm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG5cdFx0XHRcdFx0bm9kZS5zdHlsZS5jb2xvciA9ICdyZ2IoMCAwIDAvLjUpJztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9O1xuXHRcdHJldHVybiBhY3Rpb25zO1xuXHR9O1xuXHRjb25zdCBkZWxldGVTZWN0aW9uQ29yZSA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCBhY3R1YWxfc2VjdGlvbl9udW1iZXIgPSBhY3R1YWxfc2VjdGlvbihzZWN0aW9uX251bWJlcik7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdvbmdvaW5nJykuZGluZygpO1xuXHRcdGRlbGV0ZVNlY3Rpb25DYWxsYmFjayhcblx0XHRcdHdnUGFnZU5hbWUsXG5cdFx0XHRhY3R1YWxfc2VjdGlvbl9udW1iZXIsXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2RlbGV0ZScsICcnLCAnZG9uZScpLmRpbmcoKTtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdkb25lJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0XHRcdG5vbWluYWxfc2VjdGlvbnNbc2VjdGlvbl9udW1iZXJdID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRkZWxfc3VtXG5cdFx0KTtcblx0fTtcblx0Y29uc3QgZGVsZXRlU2VjdGlvbiA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ29uZ29pbmcnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRkZWxldGVTZWN0aW9uQ29yZShzZWN0aW9uX251bWJlciwgX25vbWluYWwpO1xuXHR9O1xuXHRjb25zdCBhcmNoaXZlU2VjdGlvbkNvcmUgPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0Y29uc3QgYWN0dWFsX3NlY3Rpb25fbnVtYmVyID0gYWN0dWFsX3NlY3Rpb24oc2VjdGlvbl9udW1iZXIpO1xuXHRcdGNvbnN0IHRvID0gc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpO1xuXHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ29uZ29pbmcnKS5kaW5nKCk7XG5cdFx0YXJjaGl2ZVNlY3Rpb25DYWxsYmFjayhcblx0XHRcdHdnUGFnZU5hbWUsXG5cdFx0XHRhY3R1YWxfc2VjdGlvbl9udW1iZXIsXG5cdFx0XHR0byxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnZG9uZScpLmRpbmcoKTtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnZG9uZScpLnNlY3Rpb25fbGluaygpO1xuXHRcdFx0XHRub21pbmFsX3NlY3Rpb25zW3NlY3Rpb25fbnVtYmVyXSA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0YXJjX3N1bVxuXHRcdCk7XG5cdH07XG5cdGNvbnN0IGFyY2hpdmVTZWN0aW9uID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdGNvbnN0IHRvID0gc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpO1xuXHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ29uZ29pbmcnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRhcmNoaXZlU2VjdGlvbkNvcmUoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKTtcblx0fTtcblx0Y29uc3QgZWxhYm9yYXRlX25vdGljZSA9IChub3RpY2VfdGFnX25hbWUpID0+IHtcblx0XHQvLyBhY3JvbnltIHNjaGVtZTogcmVmZXIgdG8gcXdlcnR5IGtleWJvYXJkIGxheW91dC4gKHA9OSlcblx0XHRjb25zdCBub3RpY2VfdGFnX2RpY3Rpb25hcnkgPSB7XG5cdFx0XHRwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZTogWydwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZSddLFxuXHRcdFx0b3RoZXJzX3RhbGtfZWxhYm9yYXRlOiBbJ290aGVyc190YWxrX2VsYWJvcmF0ZSddLFxuXHRcdFx0ZW5hYmxlX29uX2dlbmVyaWNfcGFnZTogWydlbmFibGVfb25fZ2VuZXJpY19wYWdlJ10sXG5cdFx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlOiBbXG5cdFx0XHRcdCdwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlJyxcblx0XHRcdFx0J3dhcm5pbmcnLFxuXHRcdFx0XHQnbG9uZycsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRbc2FuaXRpemUoc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKV0sXG5cdFx0XHRdLFxuXHRcdFx0cHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlOiBbXG5cdFx0XHRcdCdwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2UnLFxuXHRcdFx0XHQnd2FybmluZycsXG5cdFx0XHRcdCdsb25nJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFtzYW5pdGl6ZShzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpXSxcblx0XHRcdF0sXG5cdFx0XHRwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlOiBbJ3BhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGUnXSxcblx0XHR9O1xuXHRcdGNvbnN0IG5vdGljZV9zZXQgPSBub3RpY2VfdGFnX2RpY3Rpb25hcnlbbm90aWNlX3RhZ19uYW1lXSB8fCBmYWxzZTtcblx0XHRpZiAobm90aWNlX3NldCAhPT0gZmFsc2UpIHtcblx0XHRcdGNvbnN0IFtudGFnLCBudHlwZSwgbnR0bCwgbnBlcnNpc3QsIG5zdWJzdF0gPSBub3RpY2Vfc2V0O1xuXHRcdFx0Y29uc3QgdG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bm9kZTogc3BhbihtZXNzYWdlKG50YWcsIG5zdWJzdCkpLFxuXHRcdFx0XHRcdGNsb3NlOiBudHRsID09PSAnbG9uZycsXG5cdFx0XHRcdFx0ZHVyYXRpb246IG50dGwgPT09ICdsb25nJyA/IC0xIDogbnR0bCxcblx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAobnBlcnNpc3QpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRudHlwZVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdC8vIHJlYWwgZGVhbCBoZXJlXG5cdC8vIGludGVyZmFjZSBpbmplY3Rpb24gLSBwcmVwYXJlXG5cdGNvbnN0IHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9pbmhpYml0ID0gc2V0dGluZ3MuZmluZCgnc2VjLWRlbCcpID09PSAnMCcgfHwgc2V0dGluZ3MuZmluZCgnZGF0YS1pbml0JykgPT09ICcwJztcblx0Y29uc3Qgc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9pbmhpYml0ID0gc2V0dGluZ3MuZmluZCgnc2VjLWFyYycpID09PSAnMCcgfHwgc2V0dGluZ3MuZmluZCgnZGF0YS1pbml0JykgPT09ICcwJztcblx0Y29uc3Qgc2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlID0gZW1wdHlFbGVtZW50KCk7XG5cdGNvbnN0IHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2UgPSBlbXB0eUVsZW1lbnQoKTtcblx0bGV0IGZvb3Rlcl9pbmZvX2VsZTtcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpLmxlbmd0aCkge1xuXHRcdFtmb290ZXJfaW5mb19lbGVdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChPUFRJT05TLm1vdW50UG9pbnRTZWxlY3Rvcik7XG5cdH0gZWxzZSB7XG5cdFx0Zm9vdGVyX2luZm9fZWxlID0gZW1wdHlFbGVtZW50KCk7XG5cdH1cblx0Ly8gLi4uIGludGVyZmFjZSBpbmplY3Rpb24gLSBsb2dpY1xuXHRjb25zdCBpc19pbl9ibGFja2xpc3QgPSAoYmxhY2tsaXN0KSA9PiB7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGJsYWNrbGlzdCkge1xuXHRcdFx0aWYgKGVsZW1lbnQudGVzdCh3Z1BhZ2VOYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRpZiAob25fYXJ0aWNsZSB8fCBvbl9oaXN0X3ZlcnNpb24pIHtcblx0XHRyZXR1cm47IC8vIGluc2VydCBubyBpbnRlcmZhY2Ugb24gYW4gYXJ0aWNsZSBwYWdlIG9yIGEgaGlzdG9yeSB2ZXJzaW9uLlxuXHR9XG5cdGlmIChpc19pbl9ibGFja2xpc3QobmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4KSkge1xuXHRcdHJldHVybjsgLy8gaW5zZXJ0IG5vIGludGVyZmFjZSBpZiB0aGUgcGFnZSBuYW1lIGlzIGJsYWNrbGlzdGVkLlxuXHR9XG5cdGlmIChpc19pbl9ibGFja2xpc3QoZGlzX3N1cHBvcnRfdGhlc2VfcGFnZXNfcmVnZXgpKSB7XG5cdFx0Ly8gaW5zZXJ0IG5vdCBzdXBwb3J0ZWQgbm90aWNlIGlmIHRoZSBwYWdlIG5hbWUgaW5kaWNhdGVzIHRoYXQgaXQgaXMgbm90IHN1cHBvcnRlZC5cblx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChcblx0XHRcdGVsZW1lbnRXcmFwKFxuXHRcdFx0XHQnZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UnLFxuXHRcdFx0XHRvbkNsaWNrV3JhcChtZXNzYWdlKCdwYWdlX25vdF9zdXBwb3J0ZWQnKSwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRlbGFib3JhdGVfbm90aWNlKCdwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fSBlbHNlIGlmICh3Z1BhZ2VOYW1lID09PSBzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpIHtcblx0XHRlbGFib3JhdGVfbm90aWNlKCdwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2UnKTtcblx0fSBlbHNlIGlmIChoYXNfdGVtcGxhdGUgJiYgIW90aGVyc191c2VyX3RhbGspIHtcblx0XHQvLyBhbnkgcGFnZSB0aGF0IGhhcyB0ZW1wbGF0ZSB0aGF0J3Mgbm90IG90aGVycycgdGFsayBwYWdlLiBmdW5jdGlvbiBub3JtYWxseS5cblx0XHQvLyAhISB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBpbiBtYWluIHNwYWNlIGFuZCBuZWVkcyBhdHRlbnRpb24gISFcblx0XHRpZiAoLy4rOi4rLy50ZXN0KHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSkgIT09IHRydWUpIHtcblx0XHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UnKTtcblx0XHR9XG5cdFx0Y29uc3Qgbm9ybWFsX2Z1bmN0aW9uX2luamVjdF9pbnRlcmZhY2UgPSAoKSA9PiB7XG5cdFx0XHRsZXQgaSA9IDA7XG5cdFx0XHRsZXQgaiA9IDA7XG5cdFx0XHRjb25zdCBlZGl0U2VjdGlvbkNvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXctZWRpdHNlY3Rpb24nKTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBlZGl0U2VjdGlvbkNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgZWxlID0gZWRpdFNlY3Rpb25Db2xsZWN0aW9uW2ldO1xuXHRcdFx0XHRjb25zdCB2ZSA9IC9bJj9ddmVhY3Rpb249ZWRpdC8udGVzdChlbGUuY2hpbGROb2Rlc1sxXS5ocmVmKTtcblx0XHRcdFx0Y29uc3QgY2hpbGRfbm9kZV9udW1iZXIgPSB2ZSA/IDMgOiAxO1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0ZWxlLnBhcmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaDInICYmXG5cdFx0XHRcdFx0ZWxlLnBhcmVudE5vZGUuaWQgIT09ICdmaXJzdEhlYWRpbmcnICYmXG5cdFx0XHRcdFx0ZGVjb2RlVVJJQ29tcG9uZW50KGVsZS5jaGlsZE5vZGVzW2NoaWxkX25vZGVfbnVtYmVyXS5ocmVmLnNwbGl0KC9bJj9ddGl0bGU9LylbMV0uc3BsaXQoJyYnKVswXSkgPT09XG5cdFx0XHRcdFx0XHR3Z1BhZ2VOYW1lXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGNvbnN0IGFjdHVhbCA9IE51bWJlci5wYXJzZUludChcblx0XHRcdFx0XHRcdGVsZS5jaGlsZE5vZGVzW2NoaWxkX25vZGVfbnVtYmVyXS5ocmVmLnNwbGl0KC9bJj9dc2VjdGlvbj0vKVsxXS5zcGxpdCgnJicpWzBdLFxuXHRcdFx0XHRcdFx0MTBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGNvbnN0IG5vbWluYWwgPSBpIC0gaiArIDE7XG5cdFx0XHRcdFx0aWYgKCFzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaW5oaWJpdCkge1xuXHRcdFx0XHRcdFx0c2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlLmFwcGVuZChcblx0XHRcdFx0XHRcdFx0cGlwZUVsZW1lbnQoKSxcblx0XHRcdFx0XHRcdFx0b25DbGlja1dyYXAoXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZSgnZGVsZXRlJyksXG5cdFx0XHRcdFx0XHRcdFx0KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qge3RhcmdldH0gPSBldmVudDtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRhdGFBY3R1YWwgPSB0YXJnZXQuZGF0YXNldC5hY3R1YWw7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkYXRhTm9taW5hbCA9IHRhcmdldC5kYXRhc2V0Lm5vbWluYWw7XG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxldGVTZWN0aW9uKGRhdGFBY3R1YWwsIGRhdGFOb21pbmFsKTtcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdGFjdHVhbCxcblx0XHRcdFx0XHRcdFx0XHRub21pbmFsXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9pbmhpYml0KSB7XG5cdFx0XHRcdFx0XHRzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlLmFwcGVuZChcblx0XHRcdFx0XHRcdFx0cGlwZUVsZW1lbnQoKSxcblx0XHRcdFx0XHRcdFx0b25DbGlja1dyYXAoXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZSgnYXJjaGl2ZScpLFxuXHRcdFx0XHRcdFx0XHRcdChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHt0YXJnZXR9ID0gZXZlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkYXRhQWN0dWFsID0gdGFyZ2V0LmRhdGFzZXQuYWN0dWFsO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGF0YU5vbWluYWwgPSB0YXJnZXQuZGF0YXNldC5ub21pbmFsO1xuXHRcdFx0XHRcdFx0XHRcdFx0YXJjaGl2ZVNlY3Rpb24oZGF0YUFjdHVhbCwgZGF0YU5vbWluYWwpO1xuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0YWN0dWFsLFxuXHRcdFx0XHRcdFx0XHRcdG5vbWluYWxcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmFmdGVyKFxuXHRcdFx0XHRcdFx0c2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlLFxuXHRcdFx0XHRcdFx0c2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZSxcblx0XHRcdFx0XHRcdHNlY3Rpb25JZFNwYW5FbGVtZW50KGAke25vbWluYWx9YClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGorKztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2VjdGlvbl9jb3VudCA9IGkgLSBqICsgMTtcblx0XHRcdGNvbnN0IGVhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UgPSBlbXB0eUVsZW1lbnQoKTtcblx0XHRcdGVhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UuYXBwZW5kKFxuXHRcdFx0XHRtZXNzYWdlKCdzdXBwb3J0cycpLFxuXHRcdFx0XHRtZXNzYWdlKCdsZWZ0X3Bhcl9zcGxpdCcpLFxuXHRcdFx0XHRtZXNzYWdlKCdhcmNoaXZlX3BhdGhfY29sb25fc3BsaXQnKSxcblx0XHRcdFx0bGlua1dyYXAoc2FuaXRpemUoc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKSwgYC93aWtpLyR7c2FuaXRpemUoc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKX1gKSxcblx0XHRcdFx0bWVzc2FnZSgncmlnaHRfcGFyJyksXG5cdFx0XHRcdG1lc3NhZ2UoJ3BlcmlvZCcpXG5cdFx0XHQpO1xuXHRcdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoZWxlbWVudFdyYXAoJ2Vhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UnLCBlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlKSk7XG5cdFx0fTtcblx0XHRub3JtYWxfZnVuY3Rpb25faW5qZWN0X2ludGVyZmFjZSgpO1xuXHR9IGVsc2UgaWYgKG90aGVyc191c2VyX3RhbGsgPT09IHRydWUpIHtcblx0XHQvLyBvdGhlcnMgdXNlciB0YWxrLlxuXHRcdGZvb3Rlcl9pbmZvX2VsZS5wcmVwZW5kKFxuXHRcdFx0ZWxlbWVudFdyYXAoJ2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyksXG5cdFx0XHRvbkNsaWNrV3JhcChtZXNzYWdlKCdvdGhlcnNfcGFnZScpLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZWxhYm9yYXRlX25vdGljZSgnb3RoZXJzX3RhbGtfZWxhYm9yYXRlJyk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0gZWxzZSBpZiAobXlfdXNlcl90YWxrID09PSBmYWxzZSkge1xuXHRcdC8vIGEgZ2VuZXJpYyBwYWdlIHRoYXQgZGlkIG5vdCBlbmFibGUgZWFzeSBhcmNoaXZlLlxuXHRcdGZvb3Rlcl9pbmZvX2VsZS5wcmVwZW5kKFxuXHRcdFx0ZWxlbWVudFdyYXAoXG5cdFx0XHRcdCdlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZScsXG5cdFx0XHRcdG9uQ2xpY2tXcmFwKG1lc3NhZ2UoJ3RvX2VuYWJsZScpLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ2VuYWJsZV9vbl9nZW5lcmljX3BhZ2UnKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHQpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIHRoZW4gYXNzZXJ0OiAobXlfdXNlcl90YWxrID09PSB0cnVlKSwgKGhhc190ZW1wbGF0ZSA9PT0gZmFsc2UpLlxuXHRcdC8vIG15IHVzZXIgdGFsayAtLSBpbnN0YWxsZWQgZWFzeSBhcmNoaXZlIGJ1dCBsYWNraW5nIHRlbXBsYXRlLlxuXHRcdGZvb3Rlcl9pbmZvX2VsZS5wcmVwZW5kKFxuXHRcdFx0ZWxlbWVudFdyYXAoXG5cdFx0XHRcdCdlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZScsXG5cdFx0XHRcdG9uQ2xpY2tXcmFwKG1lc3NhZ2UoJ3BsZWFzZV9lbmFibGUnKSwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRlbGFib3JhdGVfbm90aWNlKCdwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZScpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEscUJBQXNCO0FBQ3RCLElBQUFDLFVBQVc7O0FDRFosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsY0FBQUMsT0FBZ0NMLE9BQU8sQ0FBRTs7QUNEN0QsSUFBTU0sT0FBT0EsQ0FBQztFQUNiQztFQUNBQztFQUNBQztFQUNBQztFQUNBQztBQUNELE1BTU07QUFDTCxRQUFNQyxRQUEyQjtJQUNoQ0MsUUFBUTtJQUNSQyxRQUFRO0lBQ1JDLGVBQWU7SUFDZlI7SUFDQUc7SUFDQUQ7RUFDRDtBQUNBLE1BQUlELFNBQVM7QUFDWkksVUFBTUosVUFBVUE7RUFDakI7QUFDQSxPQUFLTCxJQUFJYSxjQUFjLFFBQVFKLEtBQUssRUFBRUssS0FBS04sUUFBUTtBQUNwRDtBQUVBLElBQU1PLGFBQWFBLENBQUM7RUFDbkJYO0VBQ0FZO0VBQ0FUO0VBQ0FDO0FBQ0QsTUFLTTtBQUNMLFFBQU1DLFFBQWlDO0lBQ3RDQyxRQUFRO0lBQ1JPLE1BQU0sQ0FBQyxXQUFXO0lBQ2xCQyxRQUFRLENBQUMsT0FBTyxTQUFTLGFBQWEsUUFBUSxVQUFV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LFNBQVMsQ0FBQyxDQUFDLENBQUUsR0FDMUZ4QyxRQUFRLFdBQVcsR0FDbkJBLFFBQVEsUUFBUSxDQUNqQjtBQUNBb0gsc0JBQWdCSyxRQUFRMUwsWUFBWSxnQ0FBZ0MrTSw0QkFBNEIsQ0FBQztJQUNsRztBQUNBbEIscUNBQWlDO0VBQ2xDLFdBQVduRSxxQkFBcUIsTUFBTTtBQUVyQzJELG9CQUFnQkssUUFDZjFMLFlBQVksNEJBQTRCLEdBQ3hDa0IsWUFBWStDLFFBQVEsYUFBYSxHQUFJMEgsV0FBVTtBQUM5Q0EsWUFBTUMsZUFBZTtBQUNyQnRCLHVCQUFpQix1QkFBdUI7SUFDekMsQ0FBQyxDQUNGO0VBQ0QsV0FBV2pELGlCQUFpQixPQUFPO0FBRWxDZ0Usb0JBQWdCSyxRQUNmMUwsWUFDQyw4QkFDQWtCLFlBQVkrQyxRQUFRLFdBQVcsR0FBSTBILFdBQVU7QUFDNUNBLFlBQU1DLGVBQWU7QUFDckJ0Qix1QkFBaUIsd0JBQXdCO0lBQzFDLENBQUMsQ0FDRixDQUNEO0VBQ0QsT0FBTztBQUdOZSxvQkFBZ0JLLFFBQ2YxTCxZQUNDLDhCQUNBa0IsWUFBWStDLFFBQVEsZUFBZSxHQUFJMEgsV0FBVTtBQUNoREEsWUFBTUMsZUFBZTtBQUNyQnRCLHVCQUFpQix5QkFBeUI7SUFDM0MsQ0FBQyxDQUNGLENBQ0Q7RUFDRDtBQUNELEdBQUc7IiwKICAibmFtZXMiOiBbIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiZWRpdCIsICJ0aXRsZSIsICJzZWN0aW9uIiwgInRleHQiLCAic3VtbWFyeSIsICJjYWxsYmFjayIsICJwYXJhbSIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicG9zdFdpdGhUb2tlbiIsICJ0aGVuIiwgImVkaXRBcHBlbmQiLCAiYWRkZWRDb250ZW50IiwgInByb3AiLCAicnZwcm9wIiwgInRpdGxlcyIsICJkYXRhIiwgIl9kYXRhJHF1ZXJ5JHBhZ2VzJDAkciIsICJvcmlnaW5hbENvbnRlbnQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgImNvbnRlbnQiLCAiYXJjaGl2ZVNlY3Rpb25DYWxsYmFjayIsICJ0YXJnZXRUaXRsZSIsICJydnNlY3Rpb24iLCAiX2RhdGEkcXVlcnkkcGFnZXMkMCRyMiIsICJkZWxldGVTZWN0aW9uQ2FsbGJhY2siLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAiZWxlbWVudFdyYXAiLCAiaWQiLCAiaW5uZXJFbGVtZW50IiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZW1wdHlFbGVtZW50IiwgIkZyYWdtZW50IiwgImxpbmtXcmFwIiwgInRleHRDb250ZW50IiwgImhyZWYiLCAib25DbGlja1dyYXAiLCAib25DbGljayIsICJkYXRhQWN0dWFsIiwgImRhdGFOb21pbmFsIiwgImNsYXNzIiwgInBpcGVFbGVtZW50IiwgInNlY3Rpb25JZFNwYW5FbGVtZW50IiwgInN0eWxlIiwgImRpc3BsYXkiLCAic3BhbiIsICJpbm5lckhUTUwiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJnZXRJMThuTWVzc2FnZXMiLCAiZGVsZXRlIiwgImxvY2FsaXplIiwgImVuIiwgImFyY2hpdmUiLCAic3VwcG9ydHMiLCAib3RoZXJzX3BhZ2UiLCAidG9fZW5hYmxlIiwgImVuYWJsZV9vbl9nZW5lcmljX3BhZ2UiLCAicGxlYXNlX2VuYWJsZSIsICJwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZSIsICJsZWZ0X3Bhcl9zcGxpdCIsICJ6aCIsICJyaWdodF9wYXIiLCAicGVyaW9kIiwgImFyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdCIsICJsb2FkaW5nX3NlY3Rpb25faSIsICJkZWxldGluZ19zZWN0aW9uX2kiLCAiZG9uZV9zZWN0aW9uX2kiLCAiZG9uZV9kZWxldGluZ19zZWN0aW9uX2kiLCAiYmVpbmdfYXJjaGl2ZWQiLCAiYmVpbmdfZGVsZXRlZCIsICJhbHJlYWR5X2FyY2hpdmVkIiwgImFscmVhZHlfZGVsZXRlZCIsICJvdGhlcnNfdGFsa19lbGFib3JhdGUiLCAicGFnZV9ub3Rfc3VwcG9ydGVkIiwgInBhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGUiLCAicHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZSIsICJwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2UiLCAiYXJjaGl2ZV9zdW1tYXJ5IiwgImRlbGV0ZV9zdW1tYXJ5IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJtZXNzYWdlIiwgInRhZyIsICJwYXJhbXMiLCAiZ2VuZXJhdGVBcnJheSIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImVudHJpZXMiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImkiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJzZWFyY2giLCAicmVwbGFjZSIsICJlcnIiLCAiZSIsICJmIiwgInNhbml0aXplIiwgInN0cmluZyIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiZWFzeUFyY2hpdmVXcmFwIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dVc2VyTmFtZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dSZXZpc2lvbklkIiwgIlBhcmVfc3RyIiwgImNvbnN0cnVjdG9yIiwgInBhcmVfc3RyaW5nIiwgInN0ciIsICJsZWZ0IiwgImRlbGltIiwgInJpZ2h0IiwgIlN0cmluZyIsICJsZW5ndGgiLCAidGVzdCIsICJzbGljZSIsICJTeW50YXhFcnJvciIsICJmaW5kIiwgImxvb2t1cF9rZXkiLCAic3BsaXQiLCAic2V0dGluZ3Nfc3RyaW5nIiwgInNldHRpbmdzIiwgIm5ldmVyX2VuYWJsZV9vbl90aGVzZV9wYWdlc19yZWdleCIsICJkaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCIsICJzZXR0aW5nc19zcGFuX2NvbGxlY3Rpb24iLCAicXVlcnlTZWxlY3RvckFsbCIsICJzZXR0aW5nc19zcGFuIiwgInBhZ2Vfc2V0dGluZ3MiLCAib25fdXNlcl90YWxrIiwgIm15X3VzZXJfdGFsayIsICJwYWdlX25hbWUiLCAiam9pbiIsICJ1c2VyX25hbWUiLCAiaGFzX3RlbXBsYXRlIiwgIm90aGVyc191c2VyX3RhbGsiLCAib25fYXJ0aWNsZSIsICJvbl9oaXN0X3ZlcnNpb24iLCAic2VjdGlvbl9jb3VudCIsICJhcmNfc3VtIiwgImRlbF9zdW0iLCAibm9taW5hbF9zZWN0aW9ucyIsICJjb3VudCIsICJhcnIiLCAiQXJyYXkiLCAiZnJvbSIsICJhY3R1YWxfc2VjdGlvbiIsICJub21pbmFsX3NlY3Rpb25fbnVtYmVyIiwgImxlc3MiLCAicmVwb3J0X2RvbmVuZXNzX3VpIiwgInNlY3Rpb25fbnVtYmVyIiwgImRvbmVuZXNzX3R5cGUiLCAidG8iLCAib25nb2luZ19vcl9kb25lIiwgInRhZ19kaW5nIiwgInRhZ19zZWN0aW9uIiwgImRpbmdfdHlwZSIsICJkaW5nX2F1dG9oaWRlIiwgImFjdGlvbnMiLCAiZGluZyIsICJ0b2FzdGlmeSIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJzZWN0aW9uX2xpbmsiLCAibm9kZXMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAibm9kZSIsICJwYXJlbnROb2RlIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImNoaWxkTm9kZSIsICJjb2xvciIsICJkZWxldGVTZWN0aW9uQ29yZSIsICJfbm9taW5hbCIsICJhY3R1YWxfc2VjdGlvbl9udW1iZXIiLCAiZGVsZXRlU2VjdGlvbiIsICJhcmNoaXZlU2VjdGlvbkNvcmUiLCAiYXJjaGl2ZVNlY3Rpb24iLCAiZWxhYm9yYXRlX25vdGljZSIsICJub3RpY2VfdGFnX25hbWUiLCAibm90aWNlX3RhZ19kaWN0aW9uYXJ5IiwgIm5vdGljZV9zZXQiLCAibnRhZyIsICJudHlwZSIsICJudHRsIiwgIm5wZXJzaXN0IiwgIm5zdWJzdCIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaW5oaWJpdCIsICJzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQiLCAic2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlIiwgInNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2UiLCAiZm9vdGVyX2luZm9fZWxlIiwgImlzX2luX2JsYWNrbGlzdCIsICJibGFja2xpc3QiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAicHJlcGVuZCIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJub3JtYWxfZnVuY3Rpb25faW5qZWN0X2ludGVyZmFjZSIsICJqIiwgImVkaXRTZWN0aW9uQ29sbGVjdGlvbiIsICJlbGUiLCAidmUiLCAiY2hpbGROb2RlcyIsICJjaGlsZF9ub2RlX251bWJlciIsICJ0YWdOYW1lIiwgInRvTG93ZXJDYXNlIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJhY3R1YWwiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgIm5vbWluYWwiLCAiYXBwZW5kIiwgInRhcmdldCIsICJkYXRhc2V0IiwgImFmdGVyIiwgImVhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UiXQp9Cg==
