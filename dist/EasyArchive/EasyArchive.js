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
var message = (tag, ...params) => {
  let content = getMessage(tag);
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
        (0, import_ext_gadget4.toastify)({
          text: message(tag_ding, [section_number.toString(), to]),
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
          ele.childNodes[child_node_number].after(section_delete_interface, section_archive_interface, sectionIdSpanElement(nominal.toString()));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9hcGkudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvZWRpdC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9leHBvc2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvcmVhY3QudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvc2FuaXRpemUudHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiNC4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEVhc3lBY2hpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBlZGl0ID0gKHtcblx0dGl0bGUsXG5cdHNlY3Rpb24sXG5cdHRleHQsXG5cdHN1bW1hcnksXG5cdGNhbGxiYWNrLFxufToge1xuXHR0aXRsZTogc3RyaW5nO1xuXHRzZWN0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdHRleHQ6IHN0cmluZztcblx0c3VtbWFyeTogc3RyaW5nO1xuXHRjYWxsYmFjazogKCkgPT4gdm9pZDtcbn0pID0+IHtcblx0Y29uc3QgcGFyYW06IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZSxcblx0XHRzdW1tYXJ5LFxuXHRcdHRleHQsXG5cdH07XG5cdGlmIChzZWN0aW9uKSB7XG5cdFx0cGFyYW0uc2VjdGlvbiA9IHNlY3Rpb247XG5cdH1cblx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtKS50aGVuKGNhbGxiYWNrKTtcbn07XG5cbmNvbnN0IGVkaXRBcHBlbmQgPSAoe1xuXHR0aXRsZSxcblx0YWRkZWRDb250ZW50LFxuXHRzdW1tYXJ5LFxuXHRjYWxsYmFjayxcbn06IHtcblx0dGl0bGU6IHN0cmluZztcblx0YWRkZWRDb250ZW50OiBzdHJpbmc7XG5cdHN1bW1hcnk6IHN0cmluZztcblx0Y2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xufSkgPT4ge1xuXHRjb25zdCBwYXJhbTogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0cnZwcm9wOiBbJ2lkcycsICdmbGFncycsICd0aW1lc3RhbXAnLCAndXNlcicsICd1c2VyaWQnLCAnc2l6ZScsICdjb21tZW50JywgJ3RhZ3MnLCAnY29udGVudCddLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHRpdGxlLFxuXHR9O1xuXG5cdHZvaWQgYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbSkudGhlbigoZGF0YSkgPT4ge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRjb25zdCBvcmlnaW5hbENvbnRlbnQgPSBkYXRhWydxdWVyeSddLnBhZ2VzWzBdLnJldmlzaW9uc1swXS5jb250ZW50ID8/ICcnO1xuXHRcdGVkaXQoe1xuXHRcdFx0dGl0bGUsXG5cdFx0XHRzZWN0aW9uOiB1bmRlZmluZWQsXG5cdFx0XHR0ZXh0OiBgJHtvcmlnaW5hbENvbnRlbnQgKyBhZGRlZENvbnRlbnR9YCxcblx0XHRcdHN1bW1hcnksXG5cdFx0XHRjYWxsYmFjazogY2FsbGJhY2sgPz8gKCgpID0+IHt9KSxcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2VkaXQsIGVkaXRBcHBlbmR9O1xuIiwgImltcG9ydCB7ZWRpdCwgZWRpdEFwcGVuZH0gZnJvbSAnLi9lZGl0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGFyY2hpdmVTZWN0aW9uQ2FsbGJhY2sgPSAoXG5cdHRpdGxlOiBzdHJpbmcsXG5cdHNlY3Rpb246IHN0cmluZyxcblx0dGFyZ2V0VGl0bGU6IHN0cmluZyxcblx0Y2FsbGJhY2s6ICgpID0+IHZvaWQgfCB1bmRlZmluZWQsXG5cdHN1bW1hcnk6IHN0cmluZ1xuKSA9PiB7XG5cdGNvbnN0IHBhcmFtOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRydnNlY3Rpb246IHNlY3Rpb24sXG5cdH07XG5cblx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0ZWRpdEFwcGVuZCh7XG5cdFx0XHR0aXRsZTogdGFyZ2V0VGl0bGUsXG5cdFx0XHRhZGRlZENvbnRlbnQ6IGBcXG5cXG4ke2RhdGFbJ3F1ZXJ5J10ucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQgPz8gZmFsc2V9YCxcblx0XHRcdHN1bW1hcnksXG5cdFx0fSk7XG5cdFx0ZWRpdCh7XG5cdFx0XHR0aXRsZSxcblx0XHRcdHNlY3Rpb246IGAke3NlY3Rpb259YCxcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdGNhbGxiYWNrOiBjYWxsYmFjayA/PyAoKCkgPT4ge30pLFxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbmNvbnN0IGRlbGV0ZVNlY3Rpb25DYWxsYmFjayA9ICh0aXRsZTogc3RyaW5nLCBzZWN0aW9uOiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkIHwgdW5kZWZpbmVkLCBzdW1tYXJ5OiBzdHJpbmcpID0+IHtcblx0ZWRpdCh7dGl0bGUsIHNlY3Rpb246IGAke3NlY3Rpb259YCwgdGV4dDogJycsIHN1bW1hcnksIGNhbGxiYWNrOiBjYWxsYmFjayA/PyAoKCkgPT4ge30pfSk7XG59O1xuXG5leHBvcnQge2FyY2hpdmVTZWN0aW9uQ2FsbGJhY2ssIGRlbGV0ZVNlY3Rpb25DYWxsYmFja307XG4iLCAiaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuY29uc3QgZWxlbWVudFdyYXAgPSAoaWQ6IHN0cmluZywgaW5uZXJFbGVtZW50OiBSZWFjdEVsZW1lbnQpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtbJ3BhZ2UtaW5mb19faXRlbSddfSBpZD17aWR9PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgaWQ9e2lkfT57aW5uZXJFbGVtZW50fTwvbGk+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGlkPXtpZH0+e2lubmVyRWxlbWVudH08L2Rpdj47XG59O1xuXG5jb25zdCBlbXB0eUVsZW1lbnQgPSAoLi4uaW5uZXJFbGVtZW50OiBSZWFjdEVsZW1lbnRbXSkgPT4gPD57Wy4uLmlubmVyRWxlbWVudF19PC8+O1xuXG5jb25zdCBsaW5rV3JhcCA9ICh0ZXh0Q29udGVudDogc3RyaW5nLCBocmVmOiBzdHJpbmcpID0+IDxhIGhyZWY9e2hyZWZ9IHRleHRDb250ZW50PXt0ZXh0Q29udGVudH0gLz47XG5cbmNvbnN0IG9uQ2xpY2tXcmFwID0gKHRleHRDb250ZW50OiBzdHJpbmcsIG9uQ2xpY2s6ICgpID0+IHZvaWQsIGRhdGFBY3R1YWw/OiBzdHJpbmcsIGRhdGFOb21pbmFsPzogc3RyaW5nKSA9PiAoXG5cdDxhXG5cdFx0Y2xhc3M9e1snZWFzeS1hcmNoaXZlLWxpbmsnLCBgZWFzeS1hcmNoaXZlLWxpbmstJHtkYXRhQWN0dWFsfS0ke2RhdGFOb21pbmFsfWBdfVxuXHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdFx0dGV4dENvbnRlbnQ9e3RleHRDb250ZW50fVxuXHRcdGRhdGEtYWN0dWFsPXtkYXRhQWN0dWFsfVxuXHRcdGRhdGEtbm9taW5hbD17ZGF0YU5vbWluYWx9XG5cdC8+XG4pO1xuXG5jb25zdCBwaXBlRWxlbWVudCA9ICgpID0+IDxzcGFuIGNsYXNzPVwibXctZWRpdHNlY3Rpb24tZGl2aWRlclwiIHRleHRDb250ZW50PXsnfCd9IC8+O1xuXG5jb25zdCBzZWN0aW9uSWRTcGFuRWxlbWVudCA9IChpZDogc3RyaW5nKSA9PiAoXG5cdDxzcGFuXG5cdFx0Y2xhc3M9e1snZWFzeS1hcmNoaXZlLXNlY3Rpb24taWQtc3BhbicsIGBlYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuLW9yZGVyLSR7aWR9YF19XG5cdFx0c3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fVxuXHQvPlxuKTtcblxuY29uc3Qgc3BhbiA9IChpbm5lckhUTUw6IHN0cmluZykgPT4gPHNwYW4gaW5uZXJIVE1MPXtpbm5lckhUTUx9IC8+O1xuXG5leHBvcnQge2VsZW1lbnRXcmFwLCBlbXB0eUVsZW1lbnQsIGxpbmtXcmFwLCBvbkNsaWNrV3JhcCwgcGlwZUVsZW1lbnQsIHNlY3Rpb25JZFNwYW5FbGVtZW50LCBzcGFufTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0ZGVsZXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZScsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHRhcmNoaXZlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0c3VwcG9ydHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGlzIGVuYWJsZWQgb24gdGhpcyB0YWxrIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pys6K6o6K666aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2ZScsXG5cdFx0fSksXG5cdFx0b3RoZXJzX3BhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGlzIG5vdCBlbmFibGVkLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLmmK/ku5bkurrnmoTnlKjmiLforqjorrrpobXpnaLvvIzlm6DmraTkuI3mlK/mjIEgRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLngrrku5bkurrnlKjmiLboqI7oq5bpoIHpnaLvvIzmlYXkuI3mlK/mj7QgRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0dG9fZW5hYmxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3QgdXNpbmcgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLmsqHmnInlkK/nlKggRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+acrOmggeayoeacieWVn+eUqCBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdGVuYWJsZV9vbl9nZW5lcmljX3BhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCB5b3VyIHVzZXIgdGFsayBwYWdlLiBIb3dldmVyIEVhc3kgQXJjaGl2ZSBzdGlsbCBjYW4gYmUgdXNlZCBpZiBuZWVkZWQuVG8gZW5hYmxlIGl0LCBhZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdGVtcGxhdGUgdG8gdGhpcyBwYWdlLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmraTpobXpnaLkuI3mmK/mgqjnmoTnlKjmiLforqjorrrpobXpnaLjgILkuI3ov4fvvIzoi6XpnIDopoHvvIzmraTpobXpnaLlj6/ku6XlkK/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOivt+WcqOmhtemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPkvY3nva59feOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmraTpoIHpnaLkuI3mmK/mgqjnmoTnlKjmiLboqI7oq5bpoIHpnaLjgILkuI3pgY7vvIzoi6XpnIDopoHvvIzmraTpoIHpnaLlj6/ku6XllZ/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOiri+WcqOmggemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59feOAgicsXG5cdFx0fSksXG5cdFx0cGxlYXNlX2VuYWJsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdG8gdGhpcyBwYWdlIHRvIHN0YXJ0IHVzaW5nIEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+35Zyo5q2k6aG16Z2i5Yqg5YWlIHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+WcsOWdgH19IOadpeWQr+eUqCBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL5Zyo5q2k6aCB6Z2i5Yqg5YWlIHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn19IOS+huWVn+eUqCBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdHBsZWFzZV9lbmFibGVfZWxhYm9yYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogXCJZb3UgaGF2ZSB0aGUgRWFzeSBBcmNoaXZlIGZ1bmN0aW9uYWxpdHkgZW5hYmxlZCBidXQgeW91ciB0YWxrIHBhZ2UgaGFzbid0IGJlZW4gY29uZmlndXJlZCB5ZXQuIFRvIHRha2UgYWR2YW50YWdlIG9mIEVhc3kgQXJjaGl2ZSwgYWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRlbXBsYXRlIHRvIHRoaXMgcGFnZS5cIixcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOeahOi0puWPt+W3sue7j+aUr+aMgSBFYXN5IEFyY2hpdmXvvIzkvYbmmK/vvIzkuLrkuoblvIDlp4vkvb/nlKjor6Xlip/og73vvIzmgqjov5jpnIDopoHlnKjoh6rlt7HnmoTnlKjmiLforqjorrrpobXpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5L2N572ufX3jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo55qE6LOs6Jmf5bey57aT5pSv5oyBIEVhc3kgQXJjaGl2Ze+8jOS9huaYr++8jOeCuuS6humWi+Wni+S9v+eUqOipsuWKn+iDve+8jOaCqOmChOmcgOimgeWcqOiHquW3seeahOeUqOaItuiojuirlumggemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59feOAgicsXG5cdFx0fSksXG5cdFx0bGVmdF9wYXJfc3BsaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnICgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdHJpZ2h0X3BhcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHRwZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdFx0YXJjaGl2ZV9wYXRoX2NvbG9uX3NwbGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmUgbG9jYXRpb246ICcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPlnLDlnYDvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU6Iez77yaJyxcblx0XHR9KSxcblx0XHRsb2FkaW5nX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nIHNlY3Rpb24gJDEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo6K+75Y+W56ysICQxIOiKgueahOWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjoroDlj5bnrKwgJDEg56+A55qE5YWn5a65Jyxcblx0XHR9KSxcblx0XHRkZWxldGluZ19zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGVsZXRpbmcgc2VjdGlvbiAkMScsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjliKDpmaTnrKwgJDEg6IqC55qE5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOWIqumZpOesrCAkMSDnr4DnmoTlhaflrrknLFxuXHRcdH0pLFxuXHRcdGRvbmVfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlY3Rpb24gJDEgaGFzIGJlZW4gYXJjaGl2ZWQgdG8gJDInLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey57uP5bCG56ysICQxIOiKguWtmOaho+WIsCAkMicsXG5cdFx0XHQnemgtaGFudCc6ICflt7LntpPlsIfnrKwgJDEg56+A5a2Y5qqU5YiwICQyJyxcblx0XHR9KSxcblx0XHRkb25lX2RlbGV0aW5nX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZWN0aW9uICQxIGhhcyBiZWVuIGRlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey57uP5bCG56ysICQxIOiKguWIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICflt7LntpPlsIfnrKwgJDEg56+A5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHRiZWluZ19hcmNoaXZlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5LitJyxcblx0XHR9KSxcblx0XHRiZWluZ19kZWxldGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2JlaW5nIGRlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOS4rScsXG5cdFx0fSksXG5cdFx0YWxyZWFkeV9hcmNoaXZlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5a2Y5qqUJyxcblx0XHR9KSxcblx0XHRhbHJlYWR5X2RlbGV0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHRvdGhlcnNfdGFsa19lbGFib3JhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiBcIlRoaXMgcGFnZSBpcyBhbm90aGVyIHVzZXIncyB0YWxrIHBhZ2UuIFlvdSBjYW5ub3QgYXJjaGl2ZSB0aGUgdG9waWNzIG9uIHRoaXMgcGFnZSBmb3IgaGltL2hlclwiLFxuXHRcdFx0J3poLWhhbnMnOiAn6L+Z5piv5Y+m5LiA5ZCN55So5oi355qE6K6o6K666aG16Z2i77yM5oKo5LiN6IO95Luj5pu/5Y+m5LiA5ZCN55So5oi35a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+mAmeaYr+WPpuS4gOWQjeeUqOaItueahOiojuirlumggemdou+8jOaCqOS4jeiDveS7o+abv+WPpuS4gOWQjeeUqOaItuWtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0cGFnZV9ub3Rfc3VwcG9ydGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHRwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZXNlIHBhZ2VzIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZTogRmlsZSwgVGVtcGxhdGUsIE1vZHVsZSwgTWVkaWFXaWtpLCBDYXRlZ29yeSwgU3BlY2lhbCwgSmF2YVNjcmlwdCwgQ1NTLCBKU09OLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfov5nkupvpobXpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8mkZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+mAmeS6m+mggemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77yaRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdH0pLFxuXHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZSBhcmNoaXZlIGxvY2F0aW9uIG9mIHRoaXMgcGFnZSwgXCIkMVwiLCBpcyB1bmRlciB0aGUgYXJ0aWNsZSBuYW1lc3BhY2UsIHdoZXJlIGFyY2hpdmVzIHNob3VsZCBub3QgYmUgbm9ybWFsbHkgZGlyZWN0ZWQgdG8uIFBsZWFzZSBjaGVjayBpZiB5b3UgaGF2ZSB0aGUgY29ycmVjdCBhcmNoaXZlIGxvY2F0aW9uLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmraTpobXpnaLnm67liY3nmoTlrZjmoaPlnLDlnYDmmK/igJwkMeKAne+8jOWcqOadoeebruWQjeensOepuumXtOS5i+S4i+OAguS4gOiIrOiAjOiogOS4jeW6lOWQkeadoeebruWQjeensOepuumXtOi/m+ihjOWtmOaho++8jOivt+ajgOafpeWtmOaho+WcsOWdgOOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmraTpoIHpnaLnlbbliY3nmoTlrZjmqpTlnLDlnYDmmK/jgIwkMeOAje+8jOWcqOaineebruWQjeeoseepuumWk+S5i+S4i+OAguS4gOiIrOiAjOiogOS4jeaHieWQkeaineebruWQjeeoseepuumWk+mAsuihjOWtmOaqlO+8jOiri+aqouafpeWtmOaqlOWcsOWdgOOAgicsXG5cdFx0fSksXG5cdFx0cHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBvZiB0aGlzIHBhZ2UsIFwiJDFcIiwgaXMgdGhpcyBwYWdlIGl0c2VsZiwgRWFzeSBhcmNoaXZlIGNhbm5vdCBvcGVyYXRlIGxpa2UgdGhpcy4gJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouebruWJjeeahOWtmOaho+WcsOWdgOaYr+KAnCQx4oCd77yM5ZKM5q2k6aG16Z2i5ZCN56ew55u45ZCM44CCRWFzeSBBcmNoaXZlIOaXoOazleaMieatpOWcsOWdgOWtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLnlbbliY3nmoTlrZjmqpTlnLDlnYDmmK/jgIwkMeOAje+8jOWSjOatpOmggemdouWQjeeoseebuOWQjOOAgkVhc3kgQXJjaGl2ZSDnhKHms5XmjInmraTlnLDlnYDlrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdGFyY2hpdmVfc3VtbWFyeTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOauteiQvScsXG5cdFx0fSksXG5cdFx0ZGVsZXRlX3N1bW1hcnk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOauteiQvScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5jb25zdCBtZXNzYWdlID0gKHRhZzoga2V5b2YgdHlwZW9mIGkxOG5NZXNzYWdlcywgLi4ucGFyYW1zOiBzdHJpbmdbXSkgPT4ge1xuXHRsZXQgY29udGVudCA9IGdldE1lc3NhZ2UodGFnKTtcblx0dHJ5IHtcblx0XHRmb3IgKGNvbnN0IFtpLCBlbGVtZW50XSBvZiBwYXJhbXMuZW50cmllcygpKSB7XG5cdFx0XHRjb25zdCBzZWFyY2ggPSBgJCR7aSArIDF9YDtcblx0XHRcdGlmIChjb250ZW50LmluY2x1ZGVzKHNlYXJjaCkpIHtcblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQucmVwbGFjZShzZWFyY2gsIGVsZW1lbnQgPz8gJycpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7fVxuXHRyZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCB7bWVzc2FnZX07XG4iLCAiY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIHN0cmluZ1xuXHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHQucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jylcblx0XHQucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufTtcblxuZXhwb3J0IHtzYW5pdGl6ZX07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9FYXN5QXJjaGl2ZS5sZXNzJztcblxuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FyY2hpdmVTZWN0aW9uQ2FsbGJhY2ssIGRlbGV0ZVNlY3Rpb25DYWxsYmFja30gZnJvbSAnLi9tb2R1bGVzL2V4cG9zZSc7XG5pbXBvcnQge1xuXHRlbGVtZW50V3JhcCxcblx0ZW1wdHlFbGVtZW50LFxuXHRsaW5rV3JhcCxcblx0b25DbGlja1dyYXAsXG5cdHBpcGVFbGVtZW50LFxuXHRzZWN0aW9uSWRTcGFuRWxlbWVudCxcblx0c3Bhbixcbn0gZnJvbSAnLi9tb2R1bGVzL3JlYWN0LnRzeCc7XG5pbXBvcnQge21lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7c2FuaXRpemV9IGZyb20gJy4vbW9kdWxlcy9zYW5pdGl6ZS50cyc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuKGZ1bmN0aW9uIGVhc3lBcmNoaXZlV3JhcCgpIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1VzZXJOYW1lLCB3Z0N1clJldmlzaW9uSWQsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCB8fCB3Z1BhZ2VOYW1lID09PSAnUWl1d2VuOummlumhtScpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBtaW5pZmllZCBjb2RlIGRlcGVuZGVuY3kgZnVuY3Rpb25zXG5cdGNsYXNzIFBhcmVfc3RyIHtcblx0XHRjb25zdHJ1Y3RvcihwYXJlX3N0cmluZywgY29uZmlnKSB7XG5cdFx0XHR0aGlzLnN0ciA9IHBhcmVfc3RyaW5nO1xuXHRcdFx0dGhpcy5sZWZ0ID0gJygnO1xuXHRcdFx0dGhpcy5kZWxpbSA9ICc6Jztcblx0XHRcdHRoaXMucmlnaHQgPSAnKSc7XG5cdFx0XHRpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Y29uZmlnID0gU3RyaW5nKGNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHBhcmVfc3RyaW5nLmxlbmd0aCA+IDYgJiZcblx0XHRcdFx0L1sjJUBdW1NzXVtFZV1bVHRdLy50ZXN0KHBhcmVfc3RyaW5nLnNsaWNlKDAsIDQpKSAmJlxuXHRcdFx0XHQhY29uZmlnLmluY2x1ZGVzKCdpZ25vcmUtc2V0Jylcblx0XHRcdCkge1xuXHRcdFx0XHRbLCAsICwgLCB0aGlzLmxlZnQsIHRoaXMuZGVsaW0sIHRoaXMucmlnaHRdID0gcGFyZV9zdHJpbmc7XG5cdFx0XHRcdGlmICh0aGlzLmxlZnQgPT09IHRoaXMucmlnaHQgfHwgdGhpcy5sZWZ0ID09PSB0aGlzLmRlbGltIHx8IHRoaXMucmlnaHQgPT09IHRoaXMuZGVsaW0pIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJQb3VuZCBzZXQgc3RhdGVtZW50IGhhcyByZXBldGl0aXZlIGNoYXJhY3RlcnMuIEUuZy4gJyNzZXR8OnwnIGlzIGlsbGVnYWwuXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmQobG9va3VwX2tleSkge1xuXHRcdFx0bG9va3VwX2tleSA9IHRoaXMubGVmdCArIGxvb2t1cF9rZXkgKyB0aGlzLmRlbGltO1xuXHRcdFx0aWYgKCF0aGlzLnN0ci5pbmNsdWRlcyhsb29rdXBfa2V5KSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnN0ci5zcGxpdChsb29rdXBfa2V5KVsxXS5zcGxpdCh0aGlzLnJpZ2h0KVswXTtcblx0XHR9XG5cdH1cblxuXHQvLyBkZWZhdWx0IHNldHRpbmdzOlxuXHRsZXQgc2V0dGluZ3Nfc3RyaW5nID1cblx0XHQnI3NldCV8P1x0XHRcdFx0XHRcdFx0XHRcdFxcbicgK1xuXHRcdCdkaXNwbGF5IHNlY3Rpb24gZGVsZXRlIGxpbmtcdCVzZWMtZGVsfDE/XHRcXG4nICtcblx0XHQnZGlzcGxheSBzZWN0aW9uIGFyY2hpdmUgbGluZVx0JXNlYy1hcmN8MT9cdFxcbicgK1xuXHRcdCdkaXNwbGF5IGNvbnRyb2wgYmFyIGF0IHRvcFx0JXRvcC1iYXJ8MD9cdFxcbicgK1xuXHRcdCdhcmNoaXZlIGxvY2F0aW9uXHRcdFx0XHQlYXJjLWxvY3w/XHRcXG4nICtcblx0XHQnc3Vic2VjdGlvbiBlZmZlY3RpdmVuZXNzXHRcdCVzdWItc2VjfDI/XHRcXG4nICtcblx0XHQnY29uZmlybSBhY3Rpb25cdFx0XHRcdCVjb25maXJtfDA/XHRcXG4nICtcblx0XHQnaXMgdGhpcyBkYXRhIGluaXRpYWxpemVkXHRcdCVkYXRhLWluaXR8MD8gXFxuJztcblx0bGV0IHNldHRpbmdzID0gbmV3IFBhcmVfc3RyKHNldHRpbmdzX3N0cmluZyk7XG5cdGNvbnN0IG5ldmVyX2VuYWJsZV9vbl90aGVzZV9wYWdlc19yZWdleCA9IFtdO1xuXHRjb25zdCBkaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCA9IFtcblx0XHQvXkZpbGU6LiokLyxcblx0XHQvXk1lZGlhV2lraTouKiQvLFxuXHRcdC9eTW9kdWxlOi4qJC8sXG5cdFx0L15DYXRlZ29yeTouKiQvLFxuXHRcdC9eVGVtcGxhdGU6LiokLyxcblx0XHQvXlNwZWNpYWw6LiokLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmNzcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzb24kLyxcblx0XTtcblx0Y29uc3Qgc2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVhc3lfYXJjaGl2ZV9kYXRhX3BvaW50X2NvbGxlY3Rpb24nKTtcblx0Y29uc3QgW3NldHRpbmdzX3NwYW5dID0gc2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uO1xuXHRjb25zdCBwYWdlX3NldHRpbmdzID0gc2V0dGluZ3Nfc3BhbiA/IG5ldyBQYXJlX3N0cihzZXR0aW5nc19zcGFuLmlubmVySFRNTCkgOiBuZXcgUGFyZV9zdHIoJycpO1xuXHRpZiAocGFnZV9zZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzEnKSB7XG5cdFx0c2V0dGluZ3Nfc3RyaW5nID0gc2V0dGluZ3Nfc3Bhbi5pbm5lckhUTUw7XG5cdFx0c2V0dGluZ3MgPSBuZXcgUGFyZV9zdHIoc2V0dGluZ3Nfc3RyaW5nKTtcblx0fVxuXHQvLyBpZGVudGlmeSBpZiBFYXN5IEFyY2hpdmUgY2FuIGJlIHVzZWQgb24gdGhlIHBhZ2UgLSBjb21wYXRpYmlsaXR5XG5cdGNvbnN0IG9uX3VzZXJfdGFsayA9IHdnTmFtZXNwYWNlTnVtYmVyID09PSAzO1xuXHRjb25zdCBteV91c2VyX3RhbGsgPVxuXHRcdG9uX3VzZXJfdGFsayAmJlxuXHRcdCgoKSA9PiB7XG5cdFx0XHRsZXQgcGFnZV9uYW1lID0gd2dQYWdlTmFtZS5zcGxpdCgnOicpO1xuXHRcdFx0cGFnZV9uYW1lWzBdID0gJyc7XG5cdFx0XHRwYWdlX25hbWUgPSBwYWdlX25hbWUuam9pbignJyk7XG5cdFx0XHRbcGFnZV9uYW1lXSA9IHBhZ2VfbmFtZS5zcGxpdCgnLycpO1xuXHRcdFx0Y29uc3QgdXNlcl9uYW1lID0gd2dVc2VyTmFtZTtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHVzZXJfbmFtZS5zcGxpdCgnXycpLmpvaW4oJycpLnNwbGl0KCcgJykuam9pbignJykgPT09IHBhZ2VfbmFtZS5zcGxpdCgnXycpLmpvaW4oJycpLnNwbGl0KCcgJykuam9pbignJylcblx0XHRcdCk7XG5cdFx0fSkoKTtcblx0Y29uc3QgaGFzX3RlbXBsYXRlID0gcGFnZV9zZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzEnO1xuXHRjb25zdCBvdGhlcnNfdXNlcl90YWxrID0gbXlfdXNlcl90YWxrID09PSBmYWxzZSAmJiBvbl91c2VyX3RhbGsgPT09IHRydWU7XG5cdGNvbnN0IG9uX2FydGljbGUgPSB3Z05hbWVzcGFjZU51bWJlciA9PT0gMDtcblx0Y29uc3Qgb25faGlzdF92ZXJzaW9uID0gd2dDdXJSZXZpc2lvbklkIC0gd2dSZXZpc2lvbklkICE9PSAwO1xuXHRsZXQgc2VjdGlvbl9jb3VudDtcblx0Y29uc3QgYXJjX3N1bSA9IG1lc3NhZ2UoJ2FyY2hpdmVfc3VtbWFyeScpO1xuXHRjb25zdCBkZWxfc3VtID0gbWVzc2FnZSgnZGVsZXRlX3N1bW1hcnknKTtcblx0Y29uc3Qgbm9taW5hbF9zZWN0aW9ucyA9ICgoY291bnQpID0+IHtcblx0XHRjb25zdCBhcnIgPSBBcnJheS5mcm9tKHtcblx0XHRcdGxlbmd0aDogY291bnQsXG5cdFx0fSk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdFx0XHRhcnJbaV0gPSBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIGFycjtcblx0fSkoc2VjdGlvbl9jb3VudCk7XG5cdGNvbnN0IGFjdHVhbF9zZWN0aW9uID0gKG5vbWluYWxfc2VjdGlvbl9udW1iZXIpID0+IHtcblx0XHRsZXQgbGVzcyA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBub21pbmFsX3NlY3Rpb25fbnVtYmVyOyBpKyspIHtcblx0XHRcdGlmIChub21pbmFsX3NlY3Rpb25zW2ldID09PSB0cnVlKSB7XG5cdFx0XHRcdGxlc3MrKztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG5vbWluYWxfc2VjdGlvbl9udW1iZXIgLSBsZXNzO1xuXHR9O1xuXHQvLyAuLi4gaW50ZXJmYWNlIGRvbmVcblx0Ly8gYXJjaGl2aW5nIGxvZ2ljIGluamVjdGlvblxuXHRjb25zdCByZXBvcnRfZG9uZW5lc3NfdWkgPSAoc2VjdGlvbl9udW1iZXIsIGRvbmVuZXNzX3R5cGUsIHRvLCBvbmdvaW5nX29yX2RvbmUpID0+IHtcblx0XHRsZXQgdGFnX2Rpbmc7XG5cdFx0bGV0IHRhZ19zZWN0aW9uO1xuXHRcdGxldCBkaW5nX3R5cGU7XG5cdFx0bGV0IGRpbmdfYXV0b2hpZGU7XG5cdFx0aWYgKG9uZ29pbmdfb3JfZG9uZSA9PT0gJ29uZ29pbmcnKSB7XG5cdFx0XHRkaW5nX3R5cGUgPSAnaW5mbyc7XG5cdFx0XHRkaW5nX2F1dG9oaWRlID0gdHJ1ZTtcblx0XHRcdGlmIChkb25lbmVzc190eXBlID09PSAnZGVsZXRlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdkZWxldGluZ19zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdiZWluZ19kZWxldGVkJztcblx0XHRcdH0gZWxzZSBpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2FyY2hpdmUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2xvYWRpbmdfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYmVpbmdfYXJjaGl2ZWQnO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAob25nb2luZ19vcl9kb25lID09PSAnZG9uZScpIHtcblx0XHRcdGRpbmdfdHlwZSA9ICdzdWNjZXNzJztcblx0XHRcdGRpbmdfYXV0b2hpZGUgPSBmYWxzZTtcblx0XHRcdGlmIChkb25lbmVzc190eXBlID09PSAnZGVsZXRlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdkb25lX2RlbGV0aW5nX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2FscmVhZHlfZGVsZXRlZCc7XG5cdFx0XHR9IGVsc2UgaWYgKGRvbmVuZXNzX3R5cGUgPT09ICdhcmNoaXZlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdkb25lX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2FscmVhZHlfYXJjaGl2ZWQnO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBhY3Rpb25zID0ge1xuXHRcdFx0ZGluZzogKCkgPT4ge1xuXHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBtZXNzYWdlKHRhZ19kaW5nLCBbc2VjdGlvbl9udW1iZXIudG9TdHJpbmcoKSwgdG9dKSxcblx0XHRcdFx0XHRcdGNsb3NlOiAhZGluZ19hdXRvaGlkZSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiBkaW5nX2F1dG9oaWRlID8gMzAwMCA6IC0xLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZGluZ190eXBlXG5cdFx0XHRcdCk7XG5cdFx0XHR9LFxuXHRcdFx0c2VjdGlvbl9saW5rOiAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmVhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4tb3JkZXItJHtzZWN0aW9uX251bWJlcn1gKTtcblx0XHRcdFx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG5cdFx0XHRcdFx0Y29uc3Qge3BhcmVudE5vZGV9ID0gbm9kZTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGNoaWxkTm9kZSBvZiBwYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lYXN5LWFyY2hpdmUtbGluaycpKSB7XG5cdFx0XHRcdFx0XHRjaGlsZE5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bm9kZS5pbm5lckhUTUwgPSBtZXNzYWdlKHRhZ19zZWN0aW9uKTtcblx0XHRcdFx0XHRub2RlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblx0XHRcdFx0XHRub2RlLnN0eWxlLmNvbG9yID0gJ3JnYigwIDAgMC8uNSknO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH07XG5cdFx0cmV0dXJuIGFjdGlvbnM7XG5cdH07XG5cdGNvbnN0IGRlbGV0ZVNlY3Rpb25Db3JlID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdGNvbnN0IGFjdHVhbF9zZWN0aW9uX251bWJlciA9IGFjdHVhbF9zZWN0aW9uKHNlY3Rpb25fbnVtYmVyKTtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ29uZ29pbmcnKS5kaW5nKCk7XG5cdFx0ZGVsZXRlU2VjdGlvbkNhbGxiYWNrKFxuXHRcdFx0d2dQYWdlTmFtZSxcblx0XHRcdGFjdHVhbF9zZWN0aW9uX251bWJlcixcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdkb25lJykuZGluZygpO1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ2RvbmUnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRcdFx0bm9taW5hbF9zZWN0aW9uc1tzZWN0aW9uX251bWJlcl0gPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGRlbF9zdW1cblx0XHQpO1xuXHR9O1xuXHRjb25zdCBkZWxldGVTZWN0aW9uID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2RlbGV0ZScsICcnLCAnb25nb2luZycpLnNlY3Rpb25fbGluaygpO1xuXHRcdGRlbGV0ZVNlY3Rpb25Db3JlKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCk7XG5cdH07XG5cdGNvbnN0IGFyY2hpdmVTZWN0aW9uQ29yZSA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCBhY3R1YWxfc2VjdGlvbl9udW1iZXIgPSBhY3R1YWxfc2VjdGlvbihzZWN0aW9uX251bWJlcik7XG5cdFx0Y29uc3QgdG8gPSBzZXR0aW5ncy5maW5kKCdhcmMtbG9jJyk7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnb25nb2luZycpLmRpbmcoKTtcblx0XHRhcmNoaXZlU2VjdGlvbkNhbGxiYWNrKFxuXHRcdFx0d2dQYWdlTmFtZSxcblx0XHRcdGFjdHVhbF9zZWN0aW9uX251bWJlcixcblx0XHRcdHRvLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdkb25lJykuZGluZygpO1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdkb25lJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0XHRcdG5vbWluYWxfc2VjdGlvbnNbc2VjdGlvbl9udW1iZXJdID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRhcmNfc3VtXG5cdFx0KTtcblx0fTtcblx0Y29uc3QgYXJjaGl2ZVNlY3Rpb24gPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0Y29uc3QgdG8gPSBzZXR0aW5ncy5maW5kKCdhcmMtbG9jJyk7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnb25nb2luZycpLnNlY3Rpb25fbGluaygpO1xuXHRcdGFyY2hpdmVTZWN0aW9uQ29yZShzZWN0aW9uX251bWJlciwgX25vbWluYWwpO1xuXHR9O1xuXHRjb25zdCBlbGFib3JhdGVfbm90aWNlID0gKG5vdGljZV90YWdfbmFtZSkgPT4ge1xuXHRcdC8vIGFjcm9ueW0gc2NoZW1lOiByZWZlciB0byBxd2VydHkga2V5Ym9hcmQgbGF5b3V0LiAocD05KVxuXHRcdGNvbnN0IG5vdGljZV90YWdfZGljdGlvbmFyeSA9IHtcblx0XHRcdHBsZWFzZV9lbmFibGVfZWxhYm9yYXRlOiBbJ3BsZWFzZV9lbmFibGVfZWxhYm9yYXRlJ10sXG5cdFx0XHRvdGhlcnNfdGFsa19lbGFib3JhdGU6IFsnb3RoZXJzX3RhbGtfZWxhYm9yYXRlJ10sXG5cdFx0XHRlbmFibGVfb25fZ2VuZXJpY19wYWdlOiBbJ2VuYWJsZV9vbl9nZW5lcmljX3BhZ2UnXSxcblx0XHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2U6IFtcblx0XHRcdFx0J3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UnLFxuXHRcdFx0XHQnd2FybmluZycsXG5cdFx0XHRcdCdsb25nJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFtzYW5pdGl6ZShzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpXSxcblx0XHRcdF0sXG5cdFx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2U6IFtcblx0XHRcdFx0J3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZScsXG5cdFx0XHRcdCd3YXJuaW5nJyxcblx0XHRcdFx0J2xvbmcnLFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0W3Nhbml0aXplKHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSldLFxuXHRcdFx0XSxcblx0XHRcdHBhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGU6IFsncGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZSddLFxuXHRcdH07XG5cdFx0Y29uc3Qgbm90aWNlX3NldCA9IG5vdGljZV90YWdfZGljdGlvbmFyeVtub3RpY2VfdGFnX25hbWVdIHx8IGZhbHNlO1xuXHRcdGlmIChub3RpY2Vfc2V0ICE9PSBmYWxzZSkge1xuXHRcdFx0Y29uc3QgW250YWcsIG50eXBlLCBudHRsLCBucGVyc2lzdCwgbnN1YnN0XSA9IG5vdGljZV9zZXQ7XG5cdFx0XHRjb25zdCB0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRub2RlOiBzcGFuKG1lc3NhZ2UobnRhZywgbnN1YnN0KSksXG5cdFx0XHRcdFx0Y2xvc2U6IG50dGwgPT09ICdsb25nJyxcblx0XHRcdFx0XHRkdXJhdGlvbjogbnR0bCA9PT0gJ2xvbmcnID8gLTEgOiBudHRsLFxuXHRcdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChucGVyc2lzdCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG50eXBlXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0Ly8gcmVhbCBkZWFsIGhlcmVcblx0Ly8gaW50ZXJmYWNlIGluamVjdGlvbiAtIHByZXBhcmVcblx0Y29uc3Qgc2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2luaGliaXQgPSBzZXR0aW5ncy5maW5kKCdzZWMtZGVsJykgPT09ICcwJyB8fCBzZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzAnO1xuXHRjb25zdCBzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQgPSBzZXR0aW5ncy5maW5kKCdzZWMtYXJjJykgPT09ICcwJyB8fCBzZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzAnO1xuXHRjb25zdCBzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2UgPSBlbXB0eUVsZW1lbnQoKTtcblx0Y29uc3Qgc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZSA9IGVtcHR5RWxlbWVudCgpO1xuXHRsZXQgZm9vdGVyX2luZm9fZWxlO1xuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcikubGVuZ3RoKSB7XG5cdFx0W2Zvb3Rlcl9pbmZvX2VsZV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblx0fSBlbHNlIHtcblx0XHRmb290ZXJfaW5mb19lbGUgPSBlbXB0eUVsZW1lbnQoKTtcblx0fVxuXHQvLyAuLi4gaW50ZXJmYWNlIGluamVjdGlvbiAtIGxvZ2ljXG5cdGNvbnN0IGlzX2luX2JsYWNrbGlzdCA9IChibGFja2xpc3QpID0+IHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYmxhY2tsaXN0KSB7XG5cdFx0XHRpZiAoZWxlbWVudC50ZXN0KHdnUGFnZU5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGlmIChvbl9hcnRpY2xlIHx8IG9uX2hpc3RfdmVyc2lvbikge1xuXHRcdHJldHVybjsgLy8gaW5zZXJ0IG5vIGludGVyZmFjZSBvbiBhbiBhcnRpY2xlIHBhZ2Ugb3IgYSBoaXN0b3J5IHZlcnNpb24uXG5cdH1cblx0aWYgKGlzX2luX2JsYWNrbGlzdChuZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXgpKSB7XG5cdFx0cmV0dXJuOyAvLyBpbnNlcnQgbm8gaW50ZXJmYWNlIGlmIHRoZSBwYWdlIG5hbWUgaXMgYmxhY2tsaXN0ZWQuXG5cdH1cblx0aWYgKGlzX2luX2JsYWNrbGlzdChkaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCkpIHtcblx0XHQvLyBpbnNlcnQgbm90IHN1cHBvcnRlZCBub3RpY2UgaWYgdGhlIHBhZ2UgbmFtZSBpbmRpY2F0ZXMgdGhhdCBpdCBpcyBub3Qgc3VwcG9ydGVkLlxuXHRcdGZvb3Rlcl9pbmZvX2VsZS5wcmVwZW5kKFxuXHRcdFx0ZWxlbWVudFdyYXAoXG5cdFx0XHRcdCdlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZScsXG5cdFx0XHRcdG9uQ2xpY2tXcmFwKG1lc3NhZ2UoJ3BhZ2Vfbm90X3N1cHBvcnRlZCcpLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ3BhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGUnKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHQpO1xuXHR9IGVsc2UgaWYgKHdnUGFnZU5hbWUgPT09IHNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSkge1xuXHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZScpO1xuXHR9IGVsc2UgaWYgKGhhc190ZW1wbGF0ZSAmJiAhb3RoZXJzX3VzZXJfdGFsaykge1xuXHRcdC8vIGFueSBwYWdlIHRoYXQgaGFzIHRlbXBsYXRlIHRoYXQncyBub3Qgb3RoZXJzJyB0YWxrIHBhZ2UuIGZ1bmN0aW9uIG5vcm1hbGx5LlxuXHRcdC8vICEhIHRoZSBhcmNoaXZlIGxvY2F0aW9uIGluIG1haW4gc3BhY2UgYW5kIG5lZWRzIGF0dGVudGlvbiAhIVxuXHRcdGlmICgvLis6LisvLnRlc3Qoc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKSAhPT0gdHJ1ZSkge1xuXHRcdFx0ZWxhYm9yYXRlX25vdGljZSgncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZScpO1xuXHRcdH1cblx0XHRjb25zdCBub3JtYWxfZnVuY3Rpb25faW5qZWN0X2ludGVyZmFjZSA9ICgpID0+IHtcblx0XHRcdGxldCBpID0gMDtcblx0XHRcdGxldCBqID0gMDtcblx0XHRcdGNvbnN0IGVkaXRTZWN0aW9uQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGVkaXRTZWN0aW9uQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBlbGUgPSBlZGl0U2VjdGlvbkNvbGxlY3Rpb25baV07XG5cdFx0XHRcdGNvbnN0IHZlID0gL1smP112ZWFjdGlvbj1lZGl0Ly50ZXN0KGVsZS5jaGlsZE5vZGVzWzFdLmhyZWYpO1xuXHRcdFx0XHRjb25zdCBjaGlsZF9ub2RlX251bWJlciA9IHZlID8gMyA6IDE7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRlbGUucGFyZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdoMicgJiZcblx0XHRcdFx0XHRlbGUucGFyZW50Tm9kZS5pZCAhPT0gJ2ZpcnN0SGVhZGluZycgJiZcblx0XHRcdFx0XHRkZWNvZGVVUklDb21wb25lbnQoZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmhyZWYuc3BsaXQoL1smP110aXRsZT0vKVsxXS5zcGxpdCgnJicpWzBdKSA9PT1cblx0XHRcdFx0XHRcdHdnUGFnZU5hbWVcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Y29uc3QgYWN0dWFsID0gTnVtYmVyLnBhcnNlSW50KFxuXHRcdFx0XHRcdFx0ZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmhyZWYuc3BsaXQoL1smP11zZWN0aW9uPS8pWzFdLnNwbGl0KCcmJylbMF0sXG5cdFx0XHRcdFx0XHQxMFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0Y29uc3Qgbm9taW5hbCA9IGkgLSBqICsgMTtcblx0XHRcdFx0XHRpZiAoIXNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9pbmhpYml0KSB7XG5cdFx0XHRcdFx0XHRzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2UuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRwaXBlRWxlbWVudCgpLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrV3JhcChcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlKCdkZWxldGUnKSxcblx0XHRcdFx0XHRcdFx0XHQoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB7dGFyZ2V0fSA9IGV2ZW50O1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGF0YUFjdHVhbCA9IHRhcmdldC5kYXRhc2V0LmFjdHVhbDtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRhdGFOb21pbmFsID0gdGFyZ2V0LmRhdGFzZXQubm9taW5hbDtcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZVNlY3Rpb24oZGF0YUFjdHVhbCwgZGF0YU5vbWluYWwpO1xuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0YWN0dWFsLFxuXHRcdFx0XHRcdFx0XHRcdG5vbWluYWxcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQpIHtcblx0XHRcdFx0XHRcdHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2UuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRwaXBlRWxlbWVudCgpLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrV3JhcChcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlKCdhcmNoaXZlJyksXG5cdFx0XHRcdFx0XHRcdFx0KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qge3RhcmdldH0gPSBldmVudDtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRhdGFBY3R1YWwgPSB0YXJnZXQuZGF0YXNldC5hY3R1YWw7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkYXRhTm9taW5hbCA9IHRhcmdldC5kYXRhc2V0Lm5vbWluYWw7XG5cdFx0XHRcdFx0XHRcdFx0XHRhcmNoaXZlU2VjdGlvbihkYXRhQWN0dWFsLCBkYXRhTm9taW5hbCk7XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRhY3R1YWwsXG5cdFx0XHRcdFx0XHRcdFx0bm9taW5hbFxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbGUuY2hpbGROb2Rlc1tjaGlsZF9ub2RlX251bWJlcl0uYWZ0ZXIoXG5cdFx0XHRcdFx0XHRzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2UsXG5cdFx0XHRcdFx0XHRzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlLFxuXHRcdFx0XHRcdFx0c2VjdGlvbklkU3BhbkVsZW1lbnQobm9taW5hbC50b1N0cmluZygpKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aisrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRzZWN0aW9uX2NvdW50ID0gaSAtIGogKyAxO1xuXHRcdFx0Y29uc3QgZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZSA9IGVtcHR5RWxlbWVudCgpO1xuXHRcdFx0ZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZS5hcHBlbmQoXG5cdFx0XHRcdG1lc3NhZ2UoJ3N1cHBvcnRzJyksXG5cdFx0XHRcdG1lc3NhZ2UoJ2xlZnRfcGFyX3NwbGl0JyksXG5cdFx0XHRcdG1lc3NhZ2UoJ2FyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdCcpLFxuXHRcdFx0XHRsaW5rV3JhcChzYW5pdGl6ZShzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpLCBgL3dpa2kvJHtzYW5pdGl6ZShzZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpfWApLFxuXHRcdFx0XHRtZXNzYWdlKCdyaWdodF9wYXInKSxcblx0XHRcdFx0bWVzc2FnZSgncGVyaW9kJylcblx0XHRcdCk7XG5cdFx0XHRmb290ZXJfaW5mb19lbGUucHJlcGVuZChlbGVtZW50V3JhcCgnZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZScsIGVhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UpKTtcblx0XHR9O1xuXHRcdG5vcm1hbF9mdW5jdGlvbl9pbmplY3RfaW50ZXJmYWNlKCk7XG5cdH0gZWxzZSBpZiAob3RoZXJzX3VzZXJfdGFsayA9PT0gdHJ1ZSkge1xuXHRcdC8vIG90aGVycyB1c2VyIHRhbGsuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcCgnZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UnKSxcblx0XHRcdG9uQ2xpY2tXcmFwKG1lc3NhZ2UoJ290aGVyc19wYWdlJyksIChldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRlbGFib3JhdGVfbm90aWNlKCdvdGhlcnNfdGFsa19lbGFib3JhdGUnKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fSBlbHNlIGlmIChteV91c2VyX3RhbGsgPT09IGZhbHNlKSB7XG5cdFx0Ly8gYSBnZW5lcmljIHBhZ2UgdGhhdCBkaWQgbm90IGVuYWJsZSBlYXN5IGFyY2hpdmUuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcChcblx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyxcblx0XHRcdFx0b25DbGlja1dyYXAobWVzc2FnZSgndG9fZW5hYmxlJyksIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZWxhYm9yYXRlX25vdGljZSgnZW5hYmxlX29uX2dlbmVyaWNfcGFnZScpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gdGhlbiBhc3NlcnQ6IChteV91c2VyX3RhbGsgPT09IHRydWUpLCAoaGFzX3RlbXBsYXRlID09PSBmYWxzZSkuXG5cdFx0Ly8gbXkgdXNlciB0YWxrIC0tIGluc3RhbGxlZCBlYXN5IGFyY2hpdmUgYnV0IGxhY2tpbmcgdGVtcGxhdGUuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLnByZXBlbmQoXG5cdFx0XHRlbGVtZW50V3JhcChcblx0XHRcdFx0J2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlJyxcblx0XHRcdFx0b25DbGlja1dyYXAobWVzc2FnZSgncGxlYXNlX2VuYWJsZScpLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGVsYWJvcmF0ZV9ub3RpY2UoJ3BsZWFzZV9lbmFibGVfZWxhYm9yYXRlJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxxQkFBc0I7QUFDdEIsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxjQUFBQyxPQUFnQ0wsT0FBTyxDQUFFOztBQ0Q3RCxJQUFNTSxPQUFPQSxDQUFDO0VBQ2JDO0VBQ0FDO0VBQ0FDO0VBQ0FDO0VBQ0FDO0FBQ0QsTUFNTTtBQUNMLFFBQU1DLFFBQTJCO0lBQ2hDQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsZUFBZTtJQUNmUjtJQUNBRztJQUNBRDtFQUNEO0FBQ0EsTUFBSUQsU0FBUztBQUNaSSxVQUFNSixVQUFVQTtFQUNqQjtBQUNBLE9BQUtMLElBQUlhLGNBQWMsUUFBUUosS0FBSyxFQUFFSyxLQUFLTixRQUFRO0FBQ3BEO0FBRUEsSUFBTU8sYUFBYUEsQ0FBQztFQUNuQlg7RUFDQVk7RUFDQVQ7RUFDQUM7QUFDRCxNQUtNO0FBQ0wsUUFBTUMsUUFBaUM7SUFDdENDLFFBQVE7SUFDUk8sTUFBTSxDQUFDLFdBQVc7SUFDbEJDLFFBQVEsQ0FBQyxPQUFPLFNBQVMsYUFBYSxRQUFRLFVBQVUsUUFBUSxXQUFXLFFBQVEsU0FBUztJ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b0gsc0JBQWdCSyxRQUFRekwsWUFBWSxnQ0FBZ0M4TSw0QkFBNEIsQ0FBQztJQUNsRztBQUNBbEIscUNBQWlDO0VBQ2xDLFdBQVdwRSxxQkFBcUIsTUFBTTtBQUVyQzRELG9CQUFnQkssUUFDZnpMLFlBQVksNEJBQTRCLEdBQ3hDa0IsWUFBWThDLFFBQVEsYUFBYSxHQUFJMEgsV0FBVTtBQUM5Q0EsWUFBTUMsZUFBZTtBQUNyQnRCLHVCQUFpQix1QkFBdUI7SUFDekMsQ0FBQyxDQUNGO0VBQ0QsV0FBV2xELGlCQUFpQixPQUFPO0FBRWxDaUUsb0JBQWdCSyxRQUNmekwsWUFDQyw4QkFDQWtCLFlBQVk4QyxRQUFRLFdBQVcsR0FBSTBILFdBQVU7QUFDNUNBLFlBQU1DLGVBQWU7QUFDckJ0Qix1QkFBaUIsd0JBQXdCO0lBQzFDLENBQUMsQ0FDRixDQUNEO0VBQ0QsT0FBTztBQUdOZSxvQkFBZ0JLLFFBQ2Z6TCxZQUNDLDhCQUNBa0IsWUFBWThDLFFBQVEsZUFBZSxHQUFJMEgsV0FBVTtBQUNoREEsWUFBTUMsZUFBZTtBQUNyQnRCLHVCQUFpQix5QkFBeUI7SUFDM0MsQ0FBQyxDQUNGLENBQ0Q7RUFDRDtBQUNELEdBQUc7IiwKICAibmFtZXMiOiBbIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiZWRpdCIsICJ0aXRsZSIsICJzZWN0aW9uIiwgInRleHQiLCAic3VtbWFyeSIsICJjYWxsYmFjayIsICJwYXJhbSIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicG9zdFdpdGhUb2tlbiIsICJ0aGVuIiwgImVkaXRBcHBlbmQiLCAiYWRkZWRDb250ZW50IiwgInByb3AiLCAicnZwcm9wIiwgInRpdGxlcyIsICJkYXRhIiwgIl9kYXRhJHF1ZXJ5JHBhZ2VzJDAkciIsICJvcmlnaW5hbENvbnRlbnQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgImNvbnRlbnQiLCAiYXJjaGl2ZVNlY3Rpb25DYWxsYmFjayIsICJ0YXJnZXRUaXRsZSIsICJydnNlY3Rpb24iLCAiX2RhdGEkcXVlcnkkcGFnZXMkMCRyMiIsICJkZWxldGVTZWN0aW9uQ2FsbGJhY2siLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAiZWxlbWVudFdyYXAiLCAiaWQiLCAiaW5uZXJFbGVtZW50IiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZW1wdHlFbGVtZW50IiwgIkZyYWdtZW50IiwgImxpbmtXcmFwIiwgInRleHRDb250ZW50IiwgImhyZWYiLCAib25DbGlja1dyYXAiLCAib25DbGljayIsICJkYXRhQWN0dWFsIiwgImRhdGFOb21pbmFsIiwgImNsYXNzIiwgInBpcGVFbGVtZW50IiwgInNlY3Rpb25JZFNwYW5FbGVtZW50IiwgInN0eWxlIiwgImRpc3BsYXkiLCAic3BhbiIsICJpbm5lckhUTUwiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldEkxOG5NZXNzYWdlcyIsICJkZWxldGUiLCAibG9jYWxpemUiLCAiZW4iLCAiYXJjaGl2ZSIsICJzdXBwb3J0cyIsICJvdGhlcnNfcGFnZSIsICJ0b19lbmFibGUiLCAiZW5hYmxlX29uX2dlbmVyaWNfcGFnZSIsICJwbGVhc2VfZW5hYmxlIiwgInBsZWFzZV9lbmFibGVfZWxhYm9yYXRlIiwgImxlZnRfcGFyX3NwbGl0IiwgInpoIiwgInJpZ2h0X3BhciIsICJwZXJpb2QiLCAiYXJjaGl2ZV9wYXRoX2NvbG9uX3NwbGl0IiwgImxvYWRpbmdfc2VjdGlvbl9pIiwgImRlbGV0aW5nX3NlY3Rpb25faSIsICJkb25lX3NlY3Rpb25faSIsICJkb25lX2RlbGV0aW5nX3NlY3Rpb25faSIsICJiZWluZ19hcmNoaXZlZCIsICJiZWluZ19kZWxldGVkIiwgImFscmVhZHlfYXJjaGl2ZWQiLCAiYWxyZWFkeV9kZWxldGVkIiwgIm90aGVyc190YWxrX2VsYWJvcmF0ZSIsICJwYWdlX25vdF9zdXBwb3J0ZWQiLCAicGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZSIsICJwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlIiwgInByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZSIsICJhcmNoaXZlX3N1bW1hcnkiLCAiZGVsZXRlX3N1bW1hcnkiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIm1lc3NhZ2UiLCAidGFnIiwgInBhcmFtcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImVudHJpZXMiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImkiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJzZWFyY2giLCAicmVwbGFjZSIsICJlcnIiLCAiZSIsICJmIiwgInNhbml0aXplIiwgInN0cmluZyIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZWFzeUFyY2hpdmVXcmFwIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dVc2VyTmFtZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dSZXZpc2lvbklkIiwgIlBhcmVfc3RyIiwgImNvbnN0cnVjdG9yIiwgInBhcmVfc3RyaW5nIiwgInN0ciIsICJsZWZ0IiwgImRlbGltIiwgInJpZ2h0IiwgIlN0cmluZyIsICJsZW5ndGgiLCAidGVzdCIsICJzbGljZSIsICJTeW50YXhFcnJvciIsICJmaW5kIiwgImxvb2t1cF9rZXkiLCAic3BsaXQiLCAic2V0dGluZ3Nfc3RyaW5nIiwgInNldHRpbmdzIiwgIm5ldmVyX2VuYWJsZV9vbl90aGVzZV9wYWdlc19yZWdleCIsICJkaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCIsICJzZXR0aW5nc19zcGFuX2NvbGxlY3Rpb24iLCAicXVlcnlTZWxlY3RvckFsbCIsICJzZXR0aW5nc19zcGFuIiwgInBhZ2Vfc2V0dGluZ3MiLCAib25fdXNlcl90YWxrIiwgIm15X3VzZXJfdGFsayIsICJwYWdlX25hbWUiLCAiam9pbiIsICJ1c2VyX25hbWUiLCAiaGFzX3RlbXBsYXRlIiwgIm90aGVyc191c2VyX3RhbGsiLCAib25fYXJ0aWNsZSIsICJvbl9oaXN0X3ZlcnNpb24iLCAic2VjdGlvbl9jb3VudCIsICJhcmNfc3VtIiwgImRlbF9zdW0iLCAibm9taW5hbF9zZWN0aW9ucyIsICJjb3VudCIsICJhcnIiLCAiQXJyYXkiLCAiZnJvbSIsICJhY3R1YWxfc2VjdGlvbiIsICJub21pbmFsX3NlY3Rpb25fbnVtYmVyIiwgImxlc3MiLCAicmVwb3J0X2RvbmVuZXNzX3VpIiwgInNlY3Rpb25fbnVtYmVyIiwgImRvbmVuZXNzX3R5cGUiLCAidG8iLCAib25nb2luZ19vcl9kb25lIiwgInRhZ19kaW5nIiwgInRhZ19zZWN0aW9uIiwgImRpbmdfdHlwZSIsICJkaW5nX2F1dG9oaWRlIiwgImFjdGlvbnMiLCAiZGluZyIsICJ0b2FzdGlmeSIsICJ0b1N0cmluZyIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJzZWN0aW9uX2xpbmsiLCAibm9kZXMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAibm9kZSIsICJwYXJlbnROb2RlIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImNoaWxkTm9kZSIsICJjb2xvciIsICJkZWxldGVTZWN0aW9uQ29yZSIsICJfbm9taW5hbCIsICJhY3R1YWxfc2VjdGlvbl9udW1iZXIiLCAiZGVsZXRlU2VjdGlvbiIsICJhcmNoaXZlU2VjdGlvbkNvcmUiLCAiYXJjaGl2ZVNlY3Rpb24iLCAiZWxhYm9yYXRlX25vdGljZSIsICJub3RpY2VfdGFnX25hbWUiLCAibm90aWNlX3RhZ19kaWN0aW9uYXJ5IiwgIm5vdGljZV9zZXQiLCAibnRhZyIsICJudHlwZSIsICJudHRsIiwgIm5wZXJzaXN0IiwgIm5zdWJzdCIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaW5oaWJpdCIsICJzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQiLCAic2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlIiwgInNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2UiLCAiZm9vdGVyX2luZm9fZWxlIiwgImlzX2luX2JsYWNrbGlzdCIsICJibGFja2xpc3QiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAicHJlcGVuZCIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJub3JtYWxfZnVuY3Rpb25faW5qZWN0X2ludGVyZmFjZSIsICJqIiwgImVkaXRTZWN0aW9uQ29sbGVjdGlvbiIsICJlbGUiLCAidmUiLCAiY2hpbGROb2RlcyIsICJjaGlsZF9ub2RlX251bWJlciIsICJ0YWdOYW1lIiwgInRvTG93ZXJDYXNlIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJhY3R1YWwiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgIm5vbWluYWwiLCAiYXBwZW5kIiwgInRhcmdldCIsICJkYXRhc2V0IiwgImFmdGVyIiwgImVhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UiXQp9Cg==
