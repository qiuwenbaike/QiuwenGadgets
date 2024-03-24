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
var emptyElement = (...innerElement) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, [...innerElement]);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9hcGkudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvZWRpdC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9leHBvc2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvcmVhY3QudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvc2FuaXRpemUudHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiNC4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEVhc3lBY2hpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBlZGl0ID0gKHtcblx0dGl0bGUsXG5cdHNlY3Rpb24sXG5cdHRleHQsXG5cdHN1bW1hcnksXG5cdGNhbGxiYWNrLFxufToge1xuXHR0aXRsZTogc3RyaW5nO1xuXHRzZWN0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdHRleHQ6IHN0cmluZztcblx0c3VtbWFyeTogc3RyaW5nO1xuXHRjYWxsYmFjazogKCkgPT4gdm9pZDtcbn0pID0+IHtcblx0Y29uc3QgcGFyYW06IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZSxcblx0XHRzdW1tYXJ5LFxuXHRcdHRleHQsXG5cdH07XG5cdGlmIChzZWN0aW9uKSB7XG5cdFx0cGFyYW0uc2VjdGlvbiA9IHNlY3Rpb247XG5cdH1cblx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtKS50aGVuKGNhbGxiYWNrKTtcbn07XG5cbmNvbnN0IGVkaXRBcHBlbmQgPSAoe1xuXHR0aXRsZSxcblx0YWRkZWRDb250ZW50LFxuXHRzdW1tYXJ5LFxuXHRjYWxsYmFjayxcbn06IHtcblx0dGl0bGU6IHN0cmluZztcblx0YWRkZWRDb250ZW50OiBzdHJpbmc7XG5cdHN1bW1hcnk6IHN0cmluZztcblx0Y2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xufSkgPT4ge1xuXHRjb25zdCBwYXJhbTogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0cnZwcm9wOiBbJ2lkcycsICdmbGFncycsICd0aW1lc3RhbXAnLCAndXNlcicsICd1c2VyaWQnLCAnc2l6ZScsICdjb21tZW50JywgJ3RhZ3MnLCAnY29udGVudCddLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHRpdGxlLFxuXHR9O1xuXG5cdHZvaWQgYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbSkudGhlbigoZGF0YSkgPT4ge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRjb25zdCBvcmlnaW5hbENvbnRlbnQgPSBkYXRhWydxdWVyeSddLnBhZ2VzWzBdLnJldmlzaW9uc1swXS5jb250ZW50ID8/ICcnO1xuXHRcdGVkaXQoe1xuXHRcdFx0dGl0bGUsXG5cdFx0XHRzZWN0aW9uOiB1bmRlZmluZWQsXG5cdFx0XHR0ZXh0OiBgJHtvcmlnaW5hbENvbnRlbnQgKyBhZGRlZENvbnRlbnR9YCxcblx0XHRcdHN1bW1hcnksXG5cdFx0XHRjYWxsYmFjazogY2FsbGJhY2sgPz8gKCgpID0+IHt9KSxcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2VkaXQsIGVkaXRBcHBlbmR9O1xuIiwgImltcG9ydCB7ZWRpdCwgZWRpdEFwcGVuZH0gZnJvbSAnLi9lZGl0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGFyY2hpdmVTZWN0aW9uQ2FsbGJhY2sgPSAoXG5cdHRpdGxlOiBzdHJpbmcsXG5cdHNlY3Rpb246IHN0cmluZyxcblx0dGFyZ2V0VGl0bGU6IHN0cmluZyxcblx0Y2FsbGJhY2s6ICgpID0+IHZvaWQgfCB1bmRlZmluZWQsXG5cdHN1bW1hcnk6IHN0cmluZ1xuKSA9PiB7XG5cdGNvbnN0IHBhcmFtOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRydnNlY3Rpb246IHNlY3Rpb24sXG5cdH07XG5cblx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0ZWRpdEFwcGVuZCh7XG5cdFx0XHR0aXRsZTogdGFyZ2V0VGl0bGUsXG5cdFx0XHRhZGRlZENvbnRlbnQ6IGBcXG5cXG4ke2RhdGFbJ3F1ZXJ5J10ucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQgPz8gZmFsc2V9YCxcblx0XHRcdHN1bW1hcnksXG5cdFx0fSk7XG5cdFx0ZWRpdCh7XG5cdFx0XHR0aXRsZSxcblx0XHRcdHNlY3Rpb246IGAke3NlY3Rpb259YCxcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdGNhbGxiYWNrOiBjYWxsYmFjayA/PyAoKCkgPT4ge30pLFxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbmNvbnN0IGRlbGV0ZVNlY3Rpb25DYWxsYmFjayA9ICh0aXRsZTogc3RyaW5nLCBzZWN0aW9uOiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkIHwgdW5kZWZpbmVkLCBzdW1tYXJ5OiBzdHJpbmcpID0+IHtcblx0ZWRpdCh7dGl0bGUsIHNlY3Rpb246IGAke3NlY3Rpb259YCwgdGV4dDogJycsIHN1bW1hcnksIGNhbGxiYWNrOiBjYWxsYmFjayA/PyAoKCkgPT4ge30pfSk7XG59O1xuXG5leHBvcnQge2FyY2hpdmVTZWN0aW9uQ2FsbGJhY2ssIGRlbGV0ZVNlY3Rpb25DYWxsYmFja307XG4iLCAiaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuY29uc3QgZWxlbWVudFdyYXAgPSAoaWQ6IHN0cmluZywgaW5uZXJFbGVtZW50OiBSZWFjdEVsZW1lbnQpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtbJ3BhZ2UtaW5mb19faXRlbSddfSBpZD17aWR9PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgaWQ9e2lkfT57aW5uZXJFbGVtZW50fTwvbGk+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGlkPXtpZH0+e2lubmVyRWxlbWVudH08L2Rpdj47XG59O1xuXG5jb25zdCBlbXB0eUVsZW1lbnQgPSAoLi4uaW5uZXJFbGVtZW50OiBSZWFjdEVsZW1lbnRbXSkgPT4gPD57Wy4uLmlubmVyRWxlbWVudF19PC8+O1xuXG5jb25zdCBsaW5rV3JhcCA9ICh0ZXh0Q29udGVudDogc3RyaW5nLCBocmVmOiBzdHJpbmcpID0+IDxhIGhyZWY9e2hyZWZ9IHRleHRDb250ZW50PXt0ZXh0Q29udGVudH0gLz47XG5cbmNvbnN0IG9uQ2xpY2tXcmFwID0gKHRleHRDb250ZW50OiBzdHJpbmcsIG9uQ2xpY2s6ICgpID0+IHZvaWQsIGRhdGFBY3R1YWw/OiBzdHJpbmcsIGRhdGFOb21pbmFsPzogc3RyaW5nKSA9PiAoXG5cdDxhXG5cdFx0Y2xhc3M9e1snZWFzeS1hcmNoaXZlLWxpbmsnLCBgZWFzeS1hcmNoaXZlLWxpbmstJHtkYXRhQWN0dWFsfS0ke2RhdGFOb21pbmFsfWBdfVxuXHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdFx0dGV4dENvbnRlbnQ9e3RleHRDb250ZW50fVxuXHRcdGRhdGEtYWN0dWFsPXtkYXRhQWN0dWFsfVxuXHRcdGRhdGEtbm9taW5hbD17ZGF0YU5vbWluYWx9XG5cdC8+XG4pO1xuXG5jb25zdCBwaXBlRWxlbWVudCA9ICgpID0+IDxzcGFuIGNsYXNzPVwibXctZWRpdHNlY3Rpb24tZGl2aWRlclwiIHRleHRDb250ZW50PXsnfCd9IC8+O1xuXG5jb25zdCBzZWN0aW9uSWRTcGFuRWxlbWVudCA9IChpZDogc3RyaW5nKSA9PiAoXG5cdDxzcGFuXG5cdFx0Y2xhc3M9e1snZWFzeS1hcmNoaXZlLXNlY3Rpb24taWQtc3BhbicsIGBlYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuLW9yZGVyLSR7aWR9YF19XG5cdFx0c3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fVxuXHQvPlxuKTtcblxuY29uc3Qgc3BhbiA9IChpbm5lckhUTUw6IHN0cmluZykgPT4gPHNwYW4gaW5uZXJIVE1MPXtpbm5lckhUTUx9IC8+O1xuXG5leHBvcnQge2VsZW1lbnRXcmFwLCBlbXB0eUVsZW1lbnQsIGxpbmtXcmFwLCBvbkNsaWNrV3JhcCwgcGlwZUVsZW1lbnQsIHNlY3Rpb25JZFNwYW5FbGVtZW50LCBzcGFufTtcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0ZGVsZXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZScsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHRhcmNoaXZlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0c3VwcG9ydHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGlzIGVuYWJsZWQgb24gdGhpcyB0YWxrIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pys6K6o6K666aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2ZScsXG5cdFx0fSksXG5cdFx0b3RoZXJzX3BhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGlzIG5vdCBlbmFibGVkLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLmmK/ku5bkurrnmoTnlKjmiLforqjorrrpobXpnaLvvIzlm6DmraTkuI3mlK/mjIEgRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLngrrku5bkurrnlKjmiLboqI7oq5bpoIHpnaLvvIzmlYXkuI3mlK/mj7QgRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0dG9fZW5hYmxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3QgdXNpbmcgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLmsqHmnInlkK/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+acrOmggeayoeacieWVn+eUqCBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdGVuYWJsZV9vbl9nZW5lcmljX3BhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCB5b3VyIHVzZXIgdGFsayBwYWdlLiBIb3dldmVyIEVhc3kgQXJjaGl2ZSBzdGlsbCBjYW4gYmUgdXNlZCBpZiBuZWVkZWQuVG8gZW5hYmxlIGl0LCBhZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdGVtcGxhdGUgdG8gdGhpcyBwYWdlLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmraTpobXpnaLkuI3mmK/mgqjnmoTnlKjmiLforqjorrrpobXpnaLjgILkuI3ov4fvvIzoi6XpnIDopoHvvIzmraTpobXpnaLlj6/ku6XlkK/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOivt+WcqOmhtemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPkvY3nva59feOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmraTpoIHpnaLkuI3mmK/mgqjnmoTnlKjmiLboqI7oq5bpoIHpnaLjgILkuI3pgY7vvIzoi6XpnIDopoHvvIzmraTpoIHpnaLlj6/ku6XllZ/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOiri+WcqOmggemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59feOAgicsXG5cdFx0fSksXG5cdFx0cGxlYXNlX2VuYWJsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdG8gdGhpcyBwYWdlIHRvIHN0YXJ0IHVzaW5nIEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+35Zyo5q2k6aG16Z2i5Yqg5YWlIHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+WcsOWdgH19IOadpeWQr+eUqCBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL5Zyo5q2k6aCB6Z2i5Yqg5YWlIHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn19IOS+huWVn+eUqCBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdHBsZWFzZV9lbmFibGVfZWxhYm9yYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogXCJZb3UgaGF2ZSB0aGUgRWFzeSBBcmNoaXZlIGZ1bmN0aW9uYWxpdHkgZW5hYmxlZCBidXQgeW91ciB0YWxrIHBhZ2UgaGFzbid0IGJlZW4gY29uZmlndXJlZCB5ZXQuIFRvIHRha2UgYWR2YW50YWdlIG9mIEVhc3kgQXJjaGl2ZSwgYWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRlbXBsYXRlIHRvIHRoaXMgcGFnZS5cIixcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOeahOi0puWPt+W3sue7j+aUr+aMgSBFYXN5IEFyY2hpdmXvvIzkvYbmmK/vvIzkuLrkuoblvIDlp4vkvb/nlKjor6Xlip/og73vvIzmgqjov5jpnIDopoHlnKjoh6rlt7HnmoTnlKjmiLforqjorrrpobXpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5L2N572ufX3jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo55qE6LOs6Jmf5bey57aT5pSv5oyBIEVhc3kgQXJjaGl2Ze+8jOS9huaYr++8jOeCuuS6humWi+Wni+S9v+eUqOipsuWKn+iDve+8jOaCqOmChOmcgOimgeWcqOiHquW3seeahOeUqOaItuiojuirlumggemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59feOAgicsXG5cdFx0fSksXG5cdFx0bGVmdF9wYXJfc3BsaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnICgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdHJpZ2h0X3BhcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHRwZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdFx0YXJjaGl2ZV9wYXRoX2NvbG9uX3NwbGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmUgbG9jYXRpb246ICcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPlnLDlnYDvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU6Iez77yaJyxcblx0XHR9KSxcblx0XHRsb2FkaW5nX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nIHNlY3Rpb24gJDEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo6K+75Y+W56ysICQxIOiKgueahOWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjoroDlj5bnrKwgJDEg56+A55qE5YWn5a65Jyxcblx0XHR9KSxcblx0XHRkZWxldGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGVsZXRpbmcgc2VjdGlvbiAkMScsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjliKDpmaTnrKwgJDEg6IqC55qE5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOWIqumZpOesrCAkMSDnr4DnmoTlhaflrrknLFxuXHRcdH0pLFxuXHRcdGRvbmVfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlY3Rpb24gJDEgaGFzIGJlZW4gYXJjaGl2ZWQgdG8gJDInLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey57uP5bCG56ysICQxIOiKguWtmOaho+WIsCAkMicsXG5cdFx0XHQnemgtaGFudCc6ICflt7LntpPlsIfnrKwgJDEg56+A5a2Y5qqU5YiwICQyJyxcblx0XHR9KSxcblx0XHRkb25lX2RlbGV0aW5nX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZWN0aW9uICQxIGhhcyBiZWVuIGRlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey57uP5bCG56ysICQxIOiKguWIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICflt7LntpPlsIfnrKwgJDEg56+A5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHRiZWluZ19hcmNoaXZlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5LitJyxcblx0XHR9KSxcblx0XHRiZWluZ19kZWxldGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2JlaW5nIGRlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOS4rScsXG5cdFx0fSksXG5cdFx0YWxyZWFkeV9hcmNoaXZlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5a2Y5qqUJyxcblx0XHR9KSxcblx0XHRhbHJlYWR5X2RlbGV0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHRvdGhlcnNfdGFsa19lbGFib3JhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiBcIlRoaXMgcGFnZSBpcyBhbm90aGVyIHVzZXIncyB0YWxrIHBhZ2UuIFlvdSBjYW5ub3QgYXJjaGl2ZSB0aGUgdG9waWNzIG9uIHRoaXMgcGFnZSBmb3IgaGltL2hlclwiLFxuXHRcdFx0J3poLWhhbnMnOiAn6L+Z5piv5Y+m5LiA5ZCN55So5oi355qE6K6o6K666aG16Z2i77yM5oKo5LiN6IO95Luj5pu/5Y+m5LiA5ZCN55So5oi35a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+mAmeaYr+WPpuS4gOWQjeeUqOaItueahOiojuirlumggemdou+8jOaCqOS4jeiDveS7o+abv+WPpuS4gOWQjeeUqOaItuWtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0cGFnZV9ub3Rfc3VwcG9ydGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZXNlIHBhZ2VzIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZTogRmlsZSwgVGVtcGxhdGUsIE1vZHVsZSwgTWVkaWFXaWtpLCBDYXRlZ29yeSwgU3BlY2lhbCwgSmF2YVNjcmlwdCwgQ1NTLCBKU09OLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfov5nkupvpobXpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8mkZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+mAmeS6m+mggemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77yaRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdH0pLFxuXHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZSBhcmNoaXZlIGxvY2F0aW9uIG9mIHRoaXMgcGFnZSwgXCIkMVwiLCBpcyB1bmRlciB0aGUgYXJ0aWNsZSBuYW1lc3BhY2UsIHdoZXJlIGFyY2hpdmVzIHNob3VsZCBub3QgYmUgbm9ybWFsbHkgZGlyZWN0ZWQgdG8uIFBsZWFzZSBjaGVjayBpZiB5b3UgaGF2ZSB0aGUgY29ycmVjdCBhcmNoaXZlIGxvY2F0aW9uLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmraTpobXpnaLnm67liY3nmoTlrZjmoaPlnLDlnYDmmK/igJwkMeKAne+8jOWcqOadoeebruWQjeensOepuumXtOS5i+S4i+OAguS4gOiIrOiAjOiogOS4jeW6lOWQkeadoeebruWQjeensOepuumXtOi/m+ihjOWtmOaho++8jOivt+ajgOafpeWtmOaho+WcsOWdgOOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmraTpoIHpnaLnlbbliY3nmoTlrZjmqpTlnLDlnYDmmK/jgIwkMeOAje+8jOWcqOaineebruWQjeeoseepuumWk+S5i+S4i+OAguS4gOiIrOiAjOiogOS4jeaHieWQkeaineebruWQjeeoseepuumWk+mAsuihjOWtmOaqlO+8jOiri+aqouafpeWtmOaqlOWcsOWdgOOAgicsXG5cdFx0fSksXG5cdFx0cHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBvZiB0aGlzIHBhZ2UsIFwiJDFcIiwgaXMgdGhpcyBwYWdlIGl0c2VsZiwgRWFzeSBhcmNoaXZlIGNhbm5vdCBvcGVyYXRlIGxpa2UgdGhpcy4gJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouebruWJjeeahOWtmOaho+WcsOWdgOaYr+KAnCQx4oCd77yM5ZKM5q2k6aG16Z2i5ZCN56ew55u45ZCM44CCRWFzeSBBcmNoaXZlIOaXoOazleaMieatpOWcsOWdgOWtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLnlbbliY3nmoTlrZjmqpTlnLDlnYDmmK/jgIwkMeOAje+8jOWSjOatpOmggemdouWQjeeoseebuOWQjOOAgkVhc3kgQXJjaGl2ZSDnhKHms5XmjInmraTlnLDlnYDlrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdGFyY2hpdmVfc3VtbWFyeTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOauteiQvScsXG5cdFx0fSksXG5cdFx0ZGVsZXRlX3N1bW1hcnk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOauteiQvScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5jb25zdCBtZXNzYWdlID0gKHRhZzoga2V5b2YgdHlwZW9mIGkxOG5NZXNzYWdlcywgLi4ucGFyYW1zOiBzdHJpbmdbXSkgPT4ge1xuXHRsZXQgY29udGVudCA9IGdldE1lc3NhZ2UodGFnKTtcblx0cGFyYW1zID0gZ2VuZXJhdGVBcnJheSguLi5wYXJhbXMpO1xuXHR0cnkge1xuXHRcdGZvciAoY29uc3QgW2ksIGVsZW1lbnRdIG9mIHBhcmFtcy5lbnRyaWVzKCkpIHtcblx0XHRcdGNvbnN0IHNlYXJjaCA9IGAkJHtpICsgMX1gO1xuXHRcdFx0aWYgKGNvbnRlbnQuaW5jbHVkZXMoc2VhcmNoKSkge1xuXHRcdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKHNlYXJjaCwgZWxlbWVudCA/PyAnJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cdHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IHttZXNzYWdlfTtcbiIsICJjb25zdCBzYW5pdGl6ZSA9IChzdHJpbmc6IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gc3RyaW5nXG5cdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59O1xuXG5leHBvcnQge3Nhbml0aXplfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICcuL0Vhc3lBcmNoaXZlLmxlc3MnO1xuXG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXJjaGl2ZVNlY3Rpb25DYWxsYmFjaywgZGVsZXRlU2VjdGlvbkNhbGxiYWNrfSBmcm9tICcuL21vZHVsZXMvZXhwb3NlJztcbmltcG9ydCB7XG5cdGVsZW1lbnRXcmFwLFxuXHRlbXB0eUVsZW1lbnQsXG5cdGxpbmtXcmFwLFxuXHRvbkNsaWNrV3JhcCxcblx0cGlwZUVsZW1lbnQsXG5cdHNlY3Rpb25JZFNwYW5FbGVtZW50LFxuXHRzcGFuLFxufSBmcm9tICcuL21vZHVsZXMvcmVhY3QudHN4JztcbmltcG9ydCB7bWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtzYW5pdGl6ZX0gZnJvbSAnLi9tb2R1bGVzL3Nhbml0aXplLnRzJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG4oZnVuY3Rpb24gZWFzeUFyY2hpdmVXcmFwKCkge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWUsIHdnVXNlck5hbWUsIHdnQ3VyUmV2aXNpb25JZCwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPCAwIHx8IHdnUGFnZU5hbWUgPT09ICdRaXV3ZW466aaW6aG1Jykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIG1pbmlmaWVkIGNvZGUgZGVwZW5kZW5jeSBmdW5jdGlvbnNcblx0Y2xhc3MgUGFyZV9zdHIge1xuXHRcdGNvbnN0cnVjdG9yKHBhcmVfc3RyaW5nLCBjb25maWcpIHtcblx0XHRcdHRoaXMuc3RyID0gcGFyZV9zdHJpbmc7XG5cdFx0XHR0aGlzLmxlZnQgPSAnKCc7XG5cdFx0XHR0aGlzLmRlbGltID0gJzonO1xuXHRcdFx0dGhpcy5yaWdodCA9ICcpJztcblx0XHRcdGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRjb25maWcgPSBTdHJpbmcoY29uZmlnKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0cGFyZV9zdHJpbmcubGVuZ3RoID4gNiAmJlxuXHRcdFx0XHQvWyMlQF1bU3NdW0VlXVtUdF0vLnRlc3QocGFyZV9zdHJpbmcuc2xpY2UoMCwgNCkpICYmXG5cdFx0XHRcdCFjb25maWcuaW5jbHVkZXMoJ2lnbm9yZS1zZXQnKVxuXHRcdFx0KSB7XG5cdFx0XHRcdFssICwgLCAsIHRoaXMubGVmdCwgdGhpcy5kZWxpbSwgdGhpcy5yaWdodF0gPSBwYXJlX3N0cmluZztcblx0XHRcdFx0aWYgKHRoaXMubGVmdCA9PT0gdGhpcy5yaWdodCB8fCB0aGlzLmxlZnQgPT09IHRoaXMuZGVsaW0gfHwgdGhpcy5yaWdodCA9PT0gdGhpcy5kZWxpbSkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBTeW50YXhFcnJvcihcIlBvdW5kIHNldCBzdGF0ZW1lbnQgaGFzIHJlcGV0aXRpdmUgY2hhcmFjdGVycy4gRS5nLiAnI3NldHw6fCcgaXMgaWxsZWdhbC5cIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZmluZChsb29rdXBfa2V5KSB7XG5cdFx0XHRsb29rdXBfa2V5ID0gdGhpcy5sZWZ0ICsgbG9va3VwX2tleSArIHRoaXMuZGVsaW07XG5cdFx0XHRpZiAoIXRoaXMuc3RyLmluY2x1ZGVzKGxvb2t1cF9rZXkpKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuc3RyLnNwbGl0KGxvb2t1cF9rZXkpWzFdLnNwbGl0KHRoaXMucmlnaHQpWzBdO1xuXHRcdH1cblx0fVxuXG5cdC8vIGRlZmF1bHQgc2V0dGluZ3M6XG5cdGxldCBzZXR0aW5nc19zdHJpbmcgPVxuXHRcdCcjc2V0JXw/XHRcdFx0XHRcdFx0XHRcdFx0XFxuJyArXG5cdFx0J2Rpc3BsYXkgc2VjdGlvbiBkZWxldGUgbGlua1x0JXNlYy1kZWx8MT9cdFxcbicgK1xuXHRcdCdkaXNwbGF5IHNlY3Rpb24gYXJjaGl2ZSBsaW5lXHQlc2VjLWFyY3wxP1x0XFxuJyArXG5cdFx0J2Rpc3BsYXkgY29udHJvbCBiYXIgYXQgdG9wXHQldG9wLWJhcnwwP1x0XFxuJyArXG5cdFx0J2FyY2hpdmUgbG9jYXRpb25cdFx0XHRcdCVhcmMtbG9jfD9cdFxcbicgK1xuXHRcdCdzdWJzZWN0aW9uIGVmZmVjdGl2ZW5lc3NcdFx0JXN1Yi1zZWN8Mj9cdFxcbicgK1xuXHRcdCdjb25maXJtIGFjdGlvblx0XHRcdFx0JWNvbmZpcm18MD9cdFxcbicgK1xuXHRcdCdpcyB0aGlzIGRhdGEgaW5pdGlhbGl6ZWRcdFx0JWRhdGEtaW5pdHwwPyBcXG4nO1xuXHRsZXQgc2V0dGluZ3MgPSBuZXcgUGFyZV9zdHIoc2V0dGluZ3Nfc3RyaW5nKTtcblx0Y29uc3QgbmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4ID0gW107XG5cdGNvbnN0IGRpc19zdXBwb3J0X3RoZXNlX3BhZ2VzX3JlZ2V4ID0gW1xuXHRcdC9eRmlsZTouKiQvLFxuXHRcdC9eTWVkaWFXaWtpOi4qJC8sXG5cdFx0L15Nb2R1bGU6LiokLyxcblx0XHQvXkNhdGVnb3J5Oi4qJC8sXG5cdFx0L15UZW1wbGF0ZTouKiQvLFxuXHRcdC9eU3BlY2lhbDouKiQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuY3NzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXHRdO1xuXHRjb25zdCBzZXR0aW5nc19zcGFuX2NvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWFzeV9hcmNoaXZlX2RhdGFfcG9pbnRfY29sbGVjdGlvbicpO1xuXHRjb25zdCBbc2V0dGluZ3Nfc3Bhbl0gPSBzZXR0aW5nc19zcGFuX2NvbGxlY3Rpb247XG5cdGNvbnN0IHBhZ2Vfc2V0dGluZ3MgPSBzZXR0aW5nc19zcGFuID8gbmV3IFBhcmVfc3RyKHNldHRpbmdzX3NwYW4uaW5uZXJIVE1MKSA6IG5ldyBQYXJlX3N0cignJyk7XG5cdGlmIChwYWdlX3NldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMScpIHtcblx0XHRzZXR0aW5nc19zdHJpbmcgPSBzZXR0aW5nc19zcGFuLmlubmVySFRNTDtcblx0XHRzZXR0aW5ncyA9IG5ldyBQYXJlX3N0cihzZXR0aW5nc19zdHJpbmcpO1xuXHR9XG5cdC8vIGlkZW50aWZ5IGlmIEVhc3kgQXJjaGl2ZSBjYW4gYmUgdXNlZCBvbiB0aGUgcGFnZSAtIGNvbXBhdGliaWxpdHlcblx0Y29uc3Qgb25fdXNlcl90YWxrID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDM7XG5cdGNvbnN0IG15X3VzZXJfdGFsayA9XG5cdFx0b25fdXNlcl90YWxrICYmXG5cdFx0KCgpID0+IHtcblx0XHRcdGxldCBwYWdlX25hbWUgPSB3Z1BhZ2VOYW1lLnNwbGl0KCc6Jyk7XG5cdFx0XHRwYWdlX25hbWVbMF0gPSAnJztcblx0XHRcdHBhZ2VfbmFtZSA9IHBhZ2VfbmFtZS5qb2luKCcnKTtcblx0XHRcdFtwYWdlX25hbWVdID0gcGFnZV9uYW1lLnNwbGl0KCcvJyk7XG5cdFx0XHRjb25zdCB1c2VyX25hbWUgPSB3Z1VzZXJOYW1lO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dXNlcl9uYW1lLnNwbGl0KCdfJykuam9pbignJykuc3BsaXQoJyAnKS5qb2luKCcnKSA9PT0gcGFnZV9uYW1lLnNwbGl0KCdfJykuam9pbignJykuc3BsaXQoJyAnKS5qb2luKCcnKVxuXHRcdFx0KTtcblx0XHR9KSgpO1xuXHRjb25zdCBoYXNfdGVtcGxhdGUgPSBwYWdlX3NldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMSc7XG5cdGNvbnN0IG90aGVyc191c2VyX3RhbGsgPSBteV91c2VyX3RhbGsgPT09IGZhbHNlICYmIG9uX3VzZXJfdGFsayA9PT0gdHJ1ZTtcblx0Y29uc3Qgb25fYXJ0aWNsZSA9IHdnTmFtZXNwYWNlTnVtYmVyID09PSAwO1xuXHRjb25zdCBvbl9oaXN0X3ZlcnNpb24gPSB3Z0N1clJldmlzaW9uSWQgLSB3Z1JldmlzaW9uSWQgIT09IDA7XG5cdGxldCBzZWN0aW9uX2NvdW50O1xuXHRjb25zdCBhcmNfc3VtID0gbWVzc2FnZSgnYXJjaGl2ZV9zdW1tYXJ5Jyk7XG5cdGNvbnN0IGRlbF9zdW0gPSBtZXNzYWdlKCdkZWxldGVfc3VtbWFyeScpO1xuXHRjb25zdCBub21pbmFsX3NlY3Rpb25zID0gKChjb3VudCkgPT4ge1xuXHRcdGNvbnN0IGFyciA9IEFycmF5LmZyb20oe1xuXHRcdFx0bGVuZ3RoOiBjb3VudCxcblx0XHR9KTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblx0XHRcdGFycltpXSA9IGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gYXJyO1xuXHR9KShzZWN0aW9uX2NvdW50KTtcblx0Y29uc3QgYWN0dWFsX3NlY3Rpb24gPSAobm9taW5hbF9zZWN0aW9uX251bWJlcikgPT4ge1xuXHRcdGxldCBsZXNzID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5vbWluYWxfc2VjdGlvbl9udW1iZXI7IGkrKykge1xuXHRcdFx0aWYgKG5vbWluYWxfc2VjdGlvbnNbaV0gPT09IHRydWUpIHtcblx0XHRcdFx0bGVzcysrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbm9taW5hbF9zZWN0aW9uX251bWJlciAtIGxlc3M7XG5cdH07XG5cdC8vIC4uLiBpbnRlcmZhY2UgZG9uZVxuXHQvLyBhcmNoaXZpbmcgbG9naWMgaW5qZWN0aW9uXG5cdGNvbnN0IHJlcG9ydF9kb25lbmVzc191aSA9IChzZWN0aW9uX251bWJlciwgZG9uZW5lc3NfdHlwZSwgdG8sIG9uZ29pbmdfb3JfZG9uZSkgPT4ge1xuXHRcdGxldCB0YWdfZGluZztcblx0XHRsZXQgdGFnX3NlY3Rpb247XG5cdFx0bGV0IGRpbmdfdHlwZTtcblx0XHRsZXQgZGluZ19hdXRvaGlkZTtcblx0XHRpZiAob25nb2luZ19vcl9kb25lID09PSAnb25nb2luZycpIHtcblx0XHRcdGRpbmdfdHlwZSA9ICdpbmZvJztcblx0XHRcdGRpbmdfYXV0b2hpZGUgPSB0cnVlO1xuXHRcdFx0aWYgKGRvbmVuZXNzX3R5cGUgPT09ICdkZWxldGUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2RlbGV0aW5nX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2JlaW5nX2RlbGV0ZWQnO1xuXHRcdFx0fSBlbHNlIGlmIChkb25lbmVzc190eXBlID09PSAnYXJjaGl2ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnbG9hZGluZ19zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdiZWluZ19hcmNoaXZlZCc7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChvbmdvaW5nX29yX2RvbmUgPT09ICdkb25lJykge1xuXHRcdFx0ZGluZ190eXBlID0gJ3N1Y2Nlc3MnO1xuXHRcdFx0ZGluZ19hdXRvaGlkZSA9IGZhbHNlO1xuXHRcdFx0aWYgKGRvbmVuZXNzX3R5cGUgPT09ICdkZWxldGUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2RvbmVfZGVsZXRpbmdfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYWxyZWFkeV9kZWxldGVkJztcblx0XHRcdH0gZWxzZSBpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2FyY2hpdmUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2RvbmVfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYWxyZWFkeV9hcmNoaXZlZCc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IGFjdGlvbnMgPSB7XG5cdFx0XHRkaW5nOiAoKSA9PiB7XG5cdFx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IG1lc3NhZ2UodGFnX2RpbmcsIGAke3NlY3Rpb25fbnVtYmVyfWAsIHRvKSxcblx0XHRcdFx0XHRcdGNsb3NlOiAhZGluZ19hdXRvaGlkZSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiBkaW5nX2F1dG9oaWRlID8gMzAwMCA6IC0xLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZGluZ190eXBlXG5cdFx0XHRcdCk7XG5cdFx0XHR9LFxuXHRcdFx0c2VjdGlvbl9saW5rOiAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmVhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4tb3JkZXItJHtzZWN0aW9uX251bWJlcn1gKTtcblx0XHRcdFx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG5cdFx0XHRcdFx0Y29uc3Qge3BhcmVudE5vZGV9ID0gbm9kZTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGNoaWxkTm9kZSBvZiBwYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lYXN5LWFyY2hpdmUtbGluaycpKSB7XG5cdFx0XHRcdFx0XHRjaGlsZE5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bm9kZS5pbm5lckhUTUwgPSBtZXNzYWdlKHRhZ19zZWN0aW9uKTtcblx0XHRcdFx0XHRub2RlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblx0XHRcdFx0XHRub2RlLnN0eWxlLmNvbG9yID0gJ3JnYigwIDAgMC8uNSknO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH07XG5cdFx0cmV0dXJuIGFjdGlvbnM7XG5cdH07XG5cdGNvbnN0IGRlbGV0ZVNlY3Rpb25Db3JlID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdGNvbnN0IGFjdHVhbF9zZWN0aW9uX251bWJlciA9IGFjdHVhbF9zZWN0aW9uKHNlY3Rpb25fbnVtYmVyKTtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ29uZ29pbmcnKS5kaW5nKCk7XG5cdFx0ZGVsZXRlU2VjdGlvbkNhbGxiYWNrKFxuXHRcdFx0d2dQYWdlTmFtZSxcblx0XHRcdGFjdHVhbF9zZWN0aW9uX251bWJlcixcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdkb25lJykuZGluZygpO1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ2RvbmUnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRcdFx0bm9taW5hbF9zZWN0aW9uc1tzZWN0aW9uX251bWJlcl0gPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGRlbF9zdW1cblx0XHQpO1xuXHR9O1xuXHRjb25zdCBkZWxldGVTZWN0aW9uID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2RlbGV0ZScsICcnLCAnb25nb2luZycpLnNlY3Rpb25fbGluaygpO1xuXHRcdGRlbGV0ZVNlY3Rpb25Db3JlKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCk7XG5cdH07XG5cdGNvbnN0IGFyY2hpdmVTZWN0aW9uQ29yZSA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCBhY3R1YWxfc2VjdGlvbl9udW1iZXIgPSBhY3R1YWxfc2VjdGlvbihzZWN0aW9uX251bWJlcik7XG5cdFx0Y29uc3QgdG8gPSBzZXR0aW5ncy5maW5kKCdhcmMtbG9jJyk7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnb25nb2luZycpLmRpbmcoKTtcblx0XHRhcmNoaXZlU2VjdGlvbkNhbGxiYWNrKFxuXHRcdFx0d2dQYWdlTmFtZSxcblx0XHRcdGFjdHVhbF9zZWN0aW9uX251bWJlcixcblx0XHRcdHRvLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdkb25lJykuZGluZygpO1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdkb25lJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0XHRcdG5vbWluYWxfc2VjdGlvbnNbc2VjdGlvbl9udW1iZXJdID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRhcmNfc3VtXG5cdFx0KTtcblx0fTtcblx0Y29uc3QgYXJjaGl2ZVNlY3Rpb24gPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0Y29uc3QgdG8gPSBzZXR0aW5ncy5maW5kKCdhcmMtbG9jJyk7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnb25nb2luZycpLnNlY3Rpb25fbGluaygpO1xuXHRcdGFyY2hpdmVTZWN0aW9uQ29yZShzZWN0aW9uX251bWJlciwgX25vbWluYWwpO1xuXHR9O1xuXHRjb25zdCBlbGFib3JhdGVfbm90aWNlID0gKG5vdGljZV90YWdfbmFtZSkgPT4ge1xuXHRcdC8vIGFjcm9ueW0gc2NoZW1lOiByZWZlciB0byBxd2VydHkga2V5Ym9hcmQgbGF5b3V0LiAocD05KVxuXHRcdGNvbnN0IG5vdGljZV90YWdfZGljdGlvbmFyeSA9IHtcblx0XHRcdHBsZWFzZV9lbmFibGVfZWxhYm9yYXRlOiBbJ3BsZWFzZV9lbmFibGVfZWxhYm9yYXRlJ10sXG5cdFx0XHRvdGhlcnNfdGFsa19lbGFib3JhdGU6IFsnb3RoZXJzX3RhbGtfZWxhYm9yYXRlJ10sXG5cdFx0XHRlbmFibGVfb25fZ2VuZXJpY19wYWdlOiBbJ2VuYWJsZV9vbl9nZW5lcmljX3BhZ2UnXSxcblx0XHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2U6IFtcblx0XHRcdFx0J3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UnLFxuXHRcdFx0XHQnd2FybmluZycsXG5cdFx0XHRcdCdsb25nJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFtzYW5pdGl6ZShzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpXSxcblx0XHRcdF0sXG5cdFx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2U6IFtcblx0XHRcdFx0J3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZScsXG5cdFx0XHRcdCd3YXJuaW5nJyxcblx0XHRcdFx0J2xvbmcnLFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0W3Nhbml0aXplKHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSldLFxuXHRcdFx0XSxcblx0XHRcdHBhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGU6IFsncGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZSddLFxuXHRcdH07XG5cdFx0Y29uc3Qgbm90aWNlX3NldCA9IG5vdGljZV90YWdfZGljdGlvbmFyeVtub3RpY2VfdGFnX25hbWVdIHx8IGZhbHNlO1xuXHRcdGlmIChub3RpY2Vfc2V0ICE9PSBmYWxzZSkge1xuXHRcdFx0Y29uc3QgW250YWcsIG50eXBlLCBudHRsLCBucGVyc2lzdCwgbnN1YnN0XSA9IG5vdGljZV9zZXQ7XG5cdFx0XHRjb25zdCB0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRub2RlOiBzcGFuKG1lc3NhZ2UobnRhZywgbnN1YnN0KSksXG5cdFx0XHRcdFx0Y2xvc2U6IG50dGwgPT09ICdsb25nJyxcblx0XHRcdFx0XHRkdXJhdGlvbjogbnR0bCA9PT0gJ2xvbmcnID8gLTEgOiBudHRsLFxuXHRcdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChucGVyc2lzdCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG50eXBlXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0Ly8gcmVhbCBkZWFsIGhlcmVcblx0Ly8gaW50ZXJmYWNlIGluamVjdGlvbiAtIHByZXBhcmVcblx0Y29uc3Qgc2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2luaGliaXQgPSBzZXR0aW5ncy5maW5kKCdzZWMtZGVsJykgPT09ICcwJyB8fCBzZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzAnO1xuXHRjb25zdCBzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQgPSBzZXR0aW5ncy5maW5kKCdzZWMtYXJjJykgPT09ICcwJyB8fCBzZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzAnO1xuXHRjb25zdCBzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2UgPSBlbXB0eUVsZW1lbnQoKTtcblx0Y29uc3Qgc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZSA9IGVtcHR5RWxlbWVudCgpO1xuXHRsZXQgZm9vdGVyX2luZm9fZWxlO1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcikubGVuZ3RoKSB7XG5cdFx0W2Zvb3Rlcl9pbmZvX2VsZV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblx0fSBlbHNlIHtcblx0XHRmb290ZXJfaW5mb19lbGUgPSBlbXB0eUVsZW1lbnQoKTtcblx0fVxuXHQvLyAuLi4gaW50ZXJmYWNlIGluamVjdGlvbiAtIGxvZ2ljXG5cdGNvbnN0IGlzX2luX2JsYWNrbGlzdCA9IChibGFja2xpc3QpID0+IHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYmxhY2tsaXN0KSB7XG5cdFx0XHRpZiAoZWxlbWVudC50ZXN0KHdnUGFnZU5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGlmIChvbl9hcnRpY2xlIHx8IG9uX2hpc3RfdmVyc2lvbikge1xuXHRcdHJldHVybjsgLy8gaW5zZXJ0IG5vIGludGVyZmFjZSBvbiBhbiBhcnRpY2xlIHBhZ2Ugb3IgYSBoaXN0b3J5IHZlcnNpb24uXG5cdH1cblx0aWYgKGlzX2luX2JsYWNrbGlzdChuZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXgpKSB7XG5cdFx0cmV0dXJuOyAvLyBpbnNlcnQgbm8gaW50ZXJmYWNlIGlmIHRoZSBwYWdlIG5hbWUgaXMgYmxhY2tsaXN0ZWQuXG5cdH1cblx0aWYgKGlzX2luX2JsYWNrbGlzdChkaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCkpIHtcblx0XHQvLyBpbnNlcnQgbm90IHN1cHBvcnRlZCBub3RpY2UgaWYgdGhlIHBhZ2UgbmFtZSBpbmRpY2F0ZXMgdGhhdCBpdCBpcyBub3Qgc3VwcG9ydGVkLlxuXHRcdGZvb3Rlcl9pbmZvX2VsZS5wcmVwZW5kKFxuXHRcdFx0ZWxlbWVudFdyYXAoXG5cdFx0XHRcdCdlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZScsXG5cdFx0XHRcdG9uQ2xpY2tXcmFwKG1lc3NhZ2UoJ3BhZ2Vfbm90X3N1cHBvcnRlZCcpLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ3BhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGUnKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHQpO1xuXHR9IGVsc2UgaWYgKHdnUGFnZU5hbWUgPT09IHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSkge1xuXHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZScpO1xuXHR9IGVsc2UgaWYgKGhhc190ZW1wbGF0ZSAmJiAhb3RoZXJzX3VzZXJfdGFsaykge1xuXHRcdC8vIGFueSBwYWdlIHRoYXQgaGFzIHRlbXBsYXRlIHRoYXQncyBub3Qgb3RoZXJzJyB0YWxrIHBhZ2UuIGZ1bmN0aW9uIG5vcm1hbGx5LlxuXHRcdC8vICEhIHRoZSBhcmNoaXZlIGxvY2F0aW9uIGluIG1haW4gc3BhY2UgYW5kIG5lZWRzIGF0dGVudGlvbiAhIVxuXHRcdGlmICgvLis6LisvLnRlc3Qoc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKSAhPT0gdHJ1ZSkge1xuXHRcdFx0ZWxhYm9yYXRlX25vdGljZSgncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZScpO1xuXHRcdH1cblx0XHRjb25zdCBub3JtYWxfZnVuY3Rpb25faW5qZWN0X2ludGVyZmFjZSA9ICgpID0+IHtcblx0XHRcdGxldCBpID0gMDtcblx0XHRcdGxldCBqID0gMDtcblx0XHRcdGNvbnN0IGVkaXRTZWN0aW9uQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGVkaXRTZWN0aW9uQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBlbGUgPSBlZGl0U2VjdGlvbkNvbGxlY3Rpb25baV07XG5cdFx0XHRcdGNvbnN0IHZlID0gL1smP112ZWFjdGlvbj1lZGl0Ly50ZXN0KGVsZS5jaGlsZE5vZGVzWzFdLmhyZWYpO1xuXHRcdFx0XHRjb25zdCBjaGlsZF9ub2RlX251bWJlciA9IHZlID8gMyA6IDE7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRlbGUucGFyZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdoMicgJiZcblx0XHRcdFx0XHRlbGUucGFyZW50Tm9kZS5pZCAhPT0gJ2ZpcnN0SGVhZGluZycgJiZcblx0XHRcdFx0XHRkZWNvZGVVUklDb21wb25lbnQoZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmhyZWYuc3BsaXQoL1smP110aXRsZT0vKVsxXS5zcGxpdCgnJicpWzBdKSA9PT1cblx0XHRcdFx0XHRcdHdnUGFnZU5hbWVcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsID0gTnVtYmVyLnBhcnNlSW50KFxuXHRcdFx0XHRcdFx0ZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmhyZWYuc3BsaXQoL1smP11zZWN0aW9uPS8pWzFdLnNwbGl0KCcmJylbMF0sXG5cdFx0XHRcdFx0XHQxMFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0Y29uc3Qgbm9taW5hbCA9IGkgLSBqICsgMTtcblx0XHRcdFx0XHRpZiAoIXNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9pbmhpYml0KSB7XG5cdFx0XHRcdFx0XHRzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2UuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRwaXBlRWxlbWVudCgpLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrV3JhcChcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlKCdkZWxldGUnKSxcblx0XHRcdFx0XHRcdFx0XHQoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB7dGFyZ2V0fSA9IGV2ZW50O1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGF0YUFjdHVhbCA9IHRhcmdldC5kYXRhc2V0LmFjdHVhbDtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRhdGFOb21pbmFsID0gdGFyZ2V0LmRhdGFzZXQubm9taW5hbDtcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZVNlY3Rpb24oZGF0YUFjdHVhbCwgZGF0YU5vbWluYWwpO1xuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0YWN0dWFsLFxuXHRcdFx0XHRcdFx0XHRcdG5vbWluYWxcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQpIHtcblx0XHRcdFx0XHRcdHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2UuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRwaXBlRWxlbWVudCgpLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrV3JhcChcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlKCdhcmNoaXZlJyksXG5cdFx0XHRcdFx0XHRcdFx0KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qge3RhcmdldH0gPSBldmVudDtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRhdGFBY3R1YWwgPSB0YXJnZXQuZGF0YXNldC5hY3R1YWw7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkYXRhTm9taW5hbCA9IHRhcmdldC5kYXRhc2V0Lm5vbWluYWw7XG5cdFx0XHRcdFx0XHRcdFx0XHRhcmNoaXZlU2VjdGlvbihkYXRhQWN0dWFsLCBkYXRhTm9taW5hbCk7XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRhY3R1YWwsXG5cdFx0XHRcdFx0XHRcdFx0bm9taW5hbFxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbGUuY2hpbGROb2Rlc1tjaGlsZF9ub2RlX251bWJlcl0uYWZ0ZXIoXG5cdFx0XHRcdFx0XHRzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2UsXG5cdFx0XHRcdFx0XHRzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlLFxuXHRcdFx0XHRcdFx0c2VjdGlvbklkU3BhbkVsZW1lbnQoYCR7bm9taW5hbH1gKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aisrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRzZWN0aW9uX2NvdW50ID0gaSAtIGogKyAxO1xuXHRcdFx0Y29uc3QgZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZSA9IGVtcHR5RWxlbWVudCgpO1xuXHRcdFx0ZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZS5hcHBlbmQoXG5cdFx0XHRcdG1lc3NhZ2UoJ3N1cHBvcnRzJyksXG5cdFx0XHRcdG1lc3NhZ2UoJ2xlZnRfcGFyX3NwbGl0JyksXG5cdFx0XHRcdG1lc3NhZ2UoJ2FyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdCcpLFxuXHRcdFx0XHRsaW5rV3JhcChzYW5pdGl6ZShzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpLCBgL3dpa2kvJHtzYW5pdGl6ZShzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpfWApLFxuXHRcdFx0XHRtZXNzYWdlKCdyaWdodF9wYXInKSxcblx0XHRcdFx0bWVzc2FnZSgncGVyaW9kJylcblx0XHRcdCk7XG5cdFx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChlbGVtZW50V3JhcCgnZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZScsIGVhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UpKTtcblx0XHR9O1xuXHRcdG5vcm1hbF9mdW5jdGlvbl9pbmplY3RfaW50ZXJmYWNlKCk7XG5cdH0gZWxzZSBpZiAob3RoZXJzX3VzZXJfdGFsayA9PT0gdHJ1ZSkge1xuXHRcdC8vIG90aGVycyB1c2VyIHRhbGsuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcCgnZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UnKSxcblx0XHRcdG9uQ2xpY2tXcmFwKG1lc3NhZ2UoJ290aGVyc19wYWdlJyksIChldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRlbGFib3JhdGVfbm90aWNlKCdvdGhlcnNfdGFsa19lbGFib3JhdGUnKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fSBlbHNlIGlmIChteV91c2VyX3RhbGsgPT09IGZhbHNlKSB7XG5cdFx0Ly8gYSBnZW5lcmljIHBhZ2UgdGhhdCBkaWQgbm90IGVuYWJsZSBlYXN5IGFyY2hpdmUuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcChcblx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyxcblx0XHRcdFx0b25DbGlja1dyYXAobWVzc2FnZSgndG9fZW5hYmxlJyksIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZWxhYm9yYXRlX25vdGljZSgnZW5hYmxlX29uX2dlbmVyaWNfcGFnZScpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gdGhlbiBhc3NlcnQ6IChteV91c2VyX3RhbGsgPT09IHRydWUpLCAoaGFzX3RlbXBsYXRlID09PSBmYWxzZSkuXG5cdFx0Ly8gbXkgdXNlciB0YWxrIC0tIGluc3RhbGxlZCBlYXN5IGFyY2hpdmUgYnV0IGxhY2tpbmcgdGVtcGxhdGUuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcChcblx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyxcblx0XHRcdFx0b25DbGlja1dyYXAobWVzc2FnZSgncGxlYXNlX2VuYWJsZScpLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ3BsZWFzZV9lbmFibGVfZWxhYm9yYXRlJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxxQkFBc0I7QUFDdEIsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxjQUFBQyxPQUFnQ0wsT0FBTyxDQUFFOztBQ0Q3RCxJQUFNTSxPQUFPQSxDQUFDO0VBQ2JDO0VBQ0FDO0VBQ0FDO0VBQ0FDO0VBQ0FDO0FBQ0QsTUFNTTtBQUNMLFFBQU1DLFFBQTJCO0lBQ2hDQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsZUFBZTtJQUNmUjtJQUNBRztJQUNBRDtFQUNEO0FBQ0EsTUFBSUQsU0FBUztBQUNaSSxVQUFNSixVQUFVQTtFQUNqQjtBQUNBLE9BQUtMLElBQUlhLGNBQWMsUUFBUUosS0FBSyxFQUFFSyxLQUFLTixRQUFRO0FBQ3BEO0FBRUEsSUFBTU8sYUFBYUEsQ0FBQztFQUNuQlg7RUFDQVk7RUFDQVQ7RUFDQUM7QUFDRCxNQUtNO0FBQ0wsUUFBTUMsUUFBaUM7SUFDdENDLFFBQVE7SUFDUk8sTUFBTSxD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R0FDbENsRCxTQUFTcUUsU0FBU3lCLFNBQVNKLEtBQUssU0FBUyxDQUFDLEdBQUEsU0FBQXhJLE9BQVltSCxTQUFTeUIsU0FBU0osS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFFLEdBQzFGeEMsUUFBUSxXQUFXLEdBQ25CQSxRQUFRLFFBQVEsQ0FDakI7QUFDQW9ILHNCQUFnQkssUUFBUTFMLFlBQVksZ0NBQWdDK00sNEJBQTRCLENBQUM7SUFDbEc7QUFDQWxCLHFDQUFpQztFQUNsQyxXQUFXbkUscUJBQXFCLE1BQU07QUFFckMyRCxvQkFBZ0JLLFFBQ2YxTCxZQUFZLDRCQUE0QixHQUN4Q2tCLFlBQVkrQyxRQUFRLGFBQWEsR0FBSTBILFdBQVU7QUFDOUNBLFlBQU1DLGVBQWU7QUFDckJ0Qix1QkFBaUIsdUJBQXVCO0lBQ3pDLENBQUMsQ0FDRjtFQUNELFdBQVdqRCxpQkFBaUIsT0FBTztBQUVsQ2dFLG9CQUFnQkssUUFDZjFMLFlBQ0MsOEJBQ0FrQixZQUFZK0MsUUFBUSxXQUFXLEdBQUkwSCxXQUFVO0FBQzVDQSxZQUFNQyxlQUFlO0FBQ3JCdEIsdUJBQWlCLHdCQUF3QjtJQUMxQyxDQUFDLENBQ0YsQ0FDRDtFQUNELE9BQU87QUFHTmUsb0JBQWdCSyxRQUNmMUwsWUFDQyw4QkFDQWtCLFlBQVkrQyxRQUFRLGVBQWUsR0FBSTBILFdBQVU7QUFDaERBLFlBQU1DLGVBQWU7QUFDckJ0Qix1QkFBaUIseUJBQXlCO0lBQzNDLENBQUMsQ0FDRixDQUNEO0VBQ0Q7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJtb3VudFBvaW50U2VsZWN0b3IiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImVkaXQiLCAidGl0bGUiLCAic2VjdGlvbiIsICJ0ZXh0IiwgInN1bW1hcnkiLCAiY2FsbGJhY2siLCAicGFyYW0iLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInBvc3RXaXRoVG9rZW4iLCAidGhlbiIsICJlZGl0QXBwZW5kIiwgImFkZGVkQ29udGVudCIsICJwcm9wIiwgInJ2cHJvcCIsICJ0aXRsZXMiLCAiZGF0YSIsICJfZGF0YSRxdWVyeSRwYWdlcyQwJHIiLCAib3JpZ2luYWxDb250ZW50IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJjb250ZW50IiwgImFyY2hpdmVTZWN0aW9uQ2FsbGJhY2siLCAidGFyZ2V0VGl0bGUiLCAicnZzZWN0aW9uIiwgIl9kYXRhJHF1ZXJ5JHBhZ2VzJDAkcjIiLCAiZGVsZXRlU2VjdGlvbkNhbGxiYWNrIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgImVsZW1lbnRXcmFwIiwgImlkIiwgImlubmVyRWxlbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVtcHR5RWxlbWVudCIsICJGcmFnbWVudCIsICJsaW5rV3JhcCIsICJ0ZXh0Q29udGVudCIsICJocmVmIiwgIm9uQ2xpY2tXcmFwIiwgIm9uQ2xpY2siLCAiZGF0YUFjdHVhbCIsICJkYXRhTm9taW5hbCIsICJjbGFzcyIsICJwaXBlRWxlbWVudCIsICJzZWN0aW9uSWRTcGFuRWxlbWVudCIsICJzdHlsZSIsICJkaXNwbGF5IiwgInNwYW4iLCAiaW5uZXJIVE1MIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImRlbGV0ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJhcmNoaXZlIiwgInN1cHBvcnRzIiwgIm90aGVyc19wYWdlIiwgInRvX2VuYWJsZSIsICJlbmFibGVfb25fZ2VuZXJpY19wYWdlIiwgInBsZWFzZV9lbmFibGUiLCAicGxlYXNlX2VuYWJsZV9lbGFib3JhdGUiLCAibGVmdF9wYXJfc3BsaXQiLCAiemgiLCAicmlnaHRfcGFyIiwgInBlcmlvZCIsICJhcmNoaXZlX3BhdGhfY29sb25fc3BsaXQiLCAibG9hZGluZ19zZWN0aW9uX2kiLCAiZGVsZXRpbmdfc2VjdGlvbl9pIiwgImRvbmVfc2VjdGlvbl9pIiwgImRvbmVfZGVsZXRpbmdfc2VjdGlvbl9pIiwgImJlaW5nX2FyY2hpdmVkIiwgImJlaW5nX2RlbGV0ZWQiLCAiYWxyZWFkeV9hcmNoaXZlZCIsICJhbHJlYWR5X2RlbGV0ZWQiLCAib3RoZXJzX3RhbGtfZWxhYm9yYXRlIiwgInBhZ2Vfbm90X3N1cHBvcnRlZCIsICJwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlIiwgInByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UiLCAicHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlIiwgImFyY2hpdmVfc3VtbWFyeSIsICJkZWxldGVfc3VtbWFyeSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibWVzc2FnZSIsICJ0YWciLCAicGFyYW1zIiwgImdlbmVyYXRlQXJyYXkiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJlbnRyaWVzIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJpIiwgImVsZW1lbnQiLCAidmFsdWUiLCAic2VhcmNoIiwgInJlcGxhY2UiLCAiZXJyIiwgImUiLCAiZiIsICJzYW5pdGl6ZSIsICJzdHJpbmciLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImVhc3lBcmNoaXZlV3JhcCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnVXNlck5hbWUiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUmV2aXNpb25JZCIsICJQYXJlX3N0ciIsICJjb25zdHJ1Y3RvciIsICJwYXJlX3N0cmluZyIsICJzdHIiLCAibGVmdCIsICJkZWxpbSIsICJyaWdodCIsICJTdHJpbmciLCAibGVuZ3RoIiwgInRlc3QiLCAic2xpY2UiLCAiU3ludGF4RXJyb3IiLCAiZmluZCIsICJsb29rdXBfa2V5IiwgInNwbGl0IiwgInNldHRpbmdzX3N0cmluZyIsICJzZXR0aW5ncyIsICJuZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXgiLCAiZGlzX3N1cHBvcnRfdGhlc2VfcGFnZXNfcmVnZXgiLCAic2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAic2V0dGluZ3Nfc3BhbiIsICJwYWdlX3NldHRpbmdzIiwgIm9uX3VzZXJfdGFsayIsICJteV91c2VyX3RhbGsiLCAicGFnZV9uYW1lIiwgImpvaW4iLCAidXNlcl9uYW1lIiwgImhhc190ZW1wbGF0ZSIsICJvdGhlcnNfdXNlcl90YWxrIiwgIm9uX2FydGljbGUiLCAib25faGlzdF92ZXJzaW9uIiwgInNlY3Rpb25fY291bnQiLCAiYXJjX3N1bSIsICJkZWxfc3VtIiwgIm5vbWluYWxfc2VjdGlvbnMiLCAiY291bnQiLCAiYXJyIiwgIkFycmF5IiwgImZyb20iLCAiYWN0dWFsX3NlY3Rpb24iLCAibm9taW5hbF9zZWN0aW9uX251bWJlciIsICJsZXNzIiwgInJlcG9ydF9kb25lbmVzc191aSIsICJzZWN0aW9uX251bWJlciIsICJkb25lbmVzc190eXBlIiwgInRvIiwgIm9uZ29pbmdfb3JfZG9uZSIsICJ0YWdfZGluZyIsICJ0YWdfc2VjdGlvbiIsICJkaW5nX3R5cGUiLCAiZGluZ19hdXRvaGlkZSIsICJhY3Rpb25zIiwgImRpbmciLCAidG9hc3RpZnkiLCAiY2xvc2UiLCAiZHVyYXRpb24iLCAic2VjdGlvbl9saW5rIiwgIm5vZGVzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIm5vZGUiLCAicGFyZW50Tm9kZSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJjaGlsZE5vZGUiLCAiY29sb3IiLCAiZGVsZXRlU2VjdGlvbkNvcmUiLCAiX25vbWluYWwiLCAiYWN0dWFsX3NlY3Rpb25fbnVtYmVyIiwgImRlbGV0ZVNlY3Rpb24iLCAiYXJjaGl2ZVNlY3Rpb25Db3JlIiwgImFyY2hpdmVTZWN0aW9uIiwgImVsYWJvcmF0ZV9ub3RpY2UiLCAibm90aWNlX3RhZ19uYW1lIiwgIm5vdGljZV90YWdfZGljdGlvbmFyeSIsICJub3RpY2Vfc2V0IiwgIm50YWciLCAibnR5cGUiLCAibnR0bCIsICJucGVyc2lzdCIsICJuc3Vic3QiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAic2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2luaGliaXQiLCAic2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9pbmhpYml0IiwgInNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZSIsICJzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlIiwgImZvb3Rlcl9pbmZvX2VsZSIsICJpc19pbl9ibGFja2xpc3QiLCAiYmxhY2tsaXN0IiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgInByZXBlbmQiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAibm9ybWFsX2Z1bmN0aW9uX2luamVjdF9pbnRlcmZhY2UiLCAiaiIsICJlZGl0U2VjdGlvbkNvbGxlY3Rpb24iLCAiZWxlIiwgInZlIiwgImNoaWxkTm9kZXMiLCAiY2hpbGRfbm9kZV9udW1iZXIiLCAidGFnTmFtZSIsICJ0b0xvd2VyQ2FzZSIsICJkZWNvZGVVUklDb21wb25lbnQiLCAiYWN0dWFsIiwgIk51bWJlciIsICJwYXJzZUludCIsICJub21pbmFsIiwgImFwcGVuZCIsICJ0YXJnZXQiLCAiZGF0YXNldCIsICJhZnRlciIsICJlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlIl0KfQo=
