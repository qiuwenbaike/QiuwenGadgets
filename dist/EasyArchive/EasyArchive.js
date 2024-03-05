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
//! src/EasyArchive/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("EasyAchive/3.0");
//! src/EasyArchive/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var easy_archive_lang = () => {
  window.easy_archive.lang = {
    delete: (0, import_ext_gadget2.localize)({
      en: "delete",
      "zh-hans": "删除",
      "zh-hant": "刪除"
    }),
    archive: (0, import_ext_gadget2.localize)({
      en: "archive",
      "zh-hans": "存档",
      "zh-hant": "存檔"
    }),
    supports: (0, import_ext_gadget2.localize)({
      en: "Easy Archive is enabled on this talk page",
      "zh-hans": "本讨论页面使用 Easy Archive 快速存档",
      "zh-hant": "此頁面使用 Easy Archive"
    }),
    others_page: (0, import_ext_gadget2.localize)({
      en: "Easy Archive is not enabled.",
      "zh-hans": "此页面是他人的用户讨论页面，因此不支持 Easy Archive 快速存档。",
      "zh-hant": "此頁面為他人用戶討論頁面，故不支援 Easy Archive 快速存檔。"
    }),
    to_enable: (0, import_ext_gadget2.localize)({
      en: "This page is not using Easy Archive.",
      "zh-hans": "此页面没有启用 Easy Archive。",
      "zh-hant": "本頁没有啟用 Easy Archive。"
    }),
    enable_on_generic_page: (0, import_ext_gadget2.localize)({
      en: "This page is not your user talk page. However Easy Archive still can be used if needed.To enable it, add {{Easy Archive|to=[Archive location]}} template to this page.",
      "zh-hans": "此页面不是您的用户讨论页面。不过，若需要，此页面可以启用 Easy Archive。若要在此页面使用 Easy Archive，请在页面上添加模板 {{Easy Archive|to=存档位置}}。",
      "zh-hant": "此頁面不是您的用戶討論頁面。不過，若需要，此頁面可以啟用 Easy Archive。若要在此頁面使用 Easy Archive，請在頁面上添加模板 {{Easy Archive|to=存檔位置}}。"
    }),
    please_enable: (0, import_ext_gadget2.localize)({
      en: "Add {{Easy Archive|to=[Archive location]}} to this page to start using Easy Archive.",
      "zh-hans": "请在此页面加入 {{Easy Archive|to=存档地址}} 来启用 Easy Archive。",
      "zh-hant": "請在此頁面加入 {{Easy Archive|to=存檔位置}} 來啟用 Easy Archive。"
    }),
    please_enable_elaborate: (0, import_ext_gadget2.localize)({
      en: "You have the Easy Archive functionality enabled but your talk page hasn't been configured yet. To take advantage of Easy Archive, add {{Easy Archive|to=[Archive location]}} template to this page.",
      "zh-hans": "您的账号已经支持 Easy Archive，但是，为了开始使用该功能，您还需要在自己的用户讨论页面上添加模板 {{Easy Archive|to=存档位置}}。",
      "zh-hant": "您的賬號已經支持 Easy Archive，但是，為了開始使用該功能，您還需要在自己的用戶討論頁面上添加模板 {{Easy Archive|to=存檔位置}}。"
    }),
    left_par_split: (0, import_ext_gadget2.localize)({
      en: " (",
      zh: "（"
    }),
    right_par: (0, import_ext_gadget2.localize)({
      en: ")",
      zh: "）"
    }),
    period: (0, import_ext_gadget2.localize)({
      en: ".",
      zh: "。"
    }),
    archive_path_colon_split: (0, import_ext_gadget2.localize)({
      en: "Archive location: ",
      "zh-hans": "存档地址：",
      "zh-hant": "存檔至："
    }),
    loading_section_i: (0, import_ext_gadget2.localize)({
      en: "Loading section $1",
      "zh-hans": "正在读取第 $1 节的内容",
      "zh-hant": "正在讀取第 $1 節的內容"
    }),
    deleting_section_i: (0, import_ext_gadget2.localize)({
      en: "Deleting section $1",
      "zh-hans": "正在删除第 $1 节的内容",
      "zh-hant": "正在刪除第 $1 節的內容"
    }),
    done_section_i: (0, import_ext_gadget2.localize)({
      en: "Section $1 has been archived to $2",
      "zh-hans": "已经将第 $1 节存档到 $2",
      "zh-hant": "已經將第 $1 節存檔到 $2"
    }),
    done_deleting_section_i: (0, import_ext_gadget2.localize)({
      en: "Section $1 has been deleted",
      "zh-hans": "已经将第 $1 节删除",
      "zh-hant": "已經將第 $1 節刪除"
    }),
    being_archived: (0, import_ext_gadget2.localize)({
      en: "being archived",
      "zh-hans": "存档中",
      "zh-hant": "存檔中"
    }),
    being_deleted: (0, import_ext_gadget2.localize)({
      en: "being deleted",
      "zh-hans": "删除中",
      "zh-hant": "刪除中"
    }),
    already_archived: (0, import_ext_gadget2.localize)({
      en: "archived",
      "zh-hans": "已存档",
      "zh-hant": "已存檔"
    }),
    already_deleted: (0, import_ext_gadget2.localize)({
      en: "deleted",
      "zh-hans": "已删除",
      "zh-hant": "已刪除"
    }),
    others_talk_elaborate: (0, import_ext_gadget2.localize)({
      en: "This page is another user's talk page. You cannot archive the topics on this page for him/her",
      "zh-hans": "这是另一名用户的讨论页面，您不能代替另一名用户存档。",
      "zh-hant": "這是另一名用戶的討論頁面，您不能代替另一名用戶存檔。"
    }),
    page_not_supported: (0, import_ext_gadget2.localize)({
      en: "This page is not supported by Easy Archive.",
      "zh-hans": "此页面不支持 Easy Archive。",
      "zh-hant": "此頁面不支持 Easy Archive。"
    }),
    page_not_supported_elaborate: (0, import_ext_gadget2.localize)({
      en: "These pages are not supported by Easy Archive: File, Template, Module, MediaWiki, Category, Special, JavaScript, CSS, JSON.",
      "zh-hans": "这些页面不受 Easy Archive 支持：File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。",
      "zh-hant": "這些頁面不受 Easy Archive 支持：File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。"
    }),
    problem_with_archive_location_main_space: (0, import_ext_gadget2.localize)({
      en: 'Currently the archive location of this page, "$1", is under the article namespace, where archives should not be normally directed to. Please check if you have the correct archive location.',
      "zh-hans": "此页面目前的存档地址是“$1”，在条目名称空间之下。一般而言不应向条目名称空间进行存档，请检查存档地址。",
      "zh-hant": "此頁面當前的存檔地址是「$1」，在條目名稱空間之下。一般而言不應向條目名稱空間進行存檔，請檢查存檔地址。"
    }),
    problem_with_archive_location_same_page: (0, import_ext_gadget2.localize)({
      en: 'Currently the archive location of this page, "$1", is this page itself, Easy archive cannot operate like this. ',
      "zh-hans": "此页面目前的存档地址是“$1”，和此页面名称相同。Easy Archive 无法按此地址存档。",
      "zh-hant": "此頁面當前的存檔地址是「$1」，和此頁面名稱相同。Easy Archive 無法按此地址存檔。"
    }),
    archive_summary: (0, import_ext_gadget2.localize)({
      en: "archive section",
      "zh-hans": "存档段落",
      "zh-hant": "存檔段落"
    }),
    delete_summary: (0, import_ext_gadget2.localize)({
      en: "delete section",
      "zh-hans": "删除段落",
      "zh-hant": "刪除段落"
    })
  };
};
//! src/EasyArchive/EasyArchive.js
var import_ext_gadget3 = require("ext.gadget.Toastify");
(function easyArchive(_window, _window$easy_archive, _window$easy_archive2, _window$easy_archive3, _window$easy_archive$, _window$easy_archive$2) {
  if (mw.config.get("wgNamespaceNumber") < 0 || mw.config.get("wgPageName") === "Qiuwen:首页") {
    return;
  }
  (_window$easy_archive = (_window = window).easy_archive) !== null && _window$easy_archive !== void 0 ? _window$easy_archive : _window.easy_archive = {};
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
  (_window$easy_archive3 = (_window$easy_archive2 = window.easy_archive).never_enable_on_these_pages_regex) !== null && _window$easy_archive3 !== void 0 ? _window$easy_archive3 : _window$easy_archive2.never_enable_on_these_pages_regex = [];
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
  const arc_sum = (_window$easy_archive$ = window.easy_archive.user_custom_archive_summary) !== null && _window$easy_archive$ !== void 0 ? _window$easy_archive$ : null;
  const del_sum = (_window$easy_archive$2 = window.easy_archive.user_custom_delete_summary) !== null && _window$easy_archive$2 !== void 0 ? _window$easy_archive$2 : null;
  const sanitize_html = (string) => {
    return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
  };
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
        (0, import_ext_gadget3.toastify)({
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
      const toastifyInstance = (0, import_ext_gadget3.toastify)({
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
  const pipe_html = '<span class="mw-editsection-divider"> | </span>';
  const section_delete_interface_inhibit = window.easy_archive.settings.find("sec-del") === "0" || window.easy_archive.settings.find("data-init") === "0";
  const section_archive_interface_inhibit = window.easy_archive.settings.find("sec-arc") === "0" || window.easy_archive.settings.find("data-init") === "0";
  let section_delete_interface_html;
  let section_archive_interface_html;
  const section_id_span_html = '<span class="easy-archive-section-id-span easy-archive-section-id-span-order-@@" style="display:none">section</span>';
  let footer_info_ele;
  let position_of_insertion;
  if (document.querySelector("#footer-info") || document.querySelectorAll(".page-info")) {
    footer_info_ele = document.querySelector("#footer-info") || document.querySelectorAll(".page-info")[0];
    position_of_insertion = "afterbegin";
  } else {
    footer_info_ele = {
      insertAdjacentHTML: () => {
      }
    };
    position_of_insertion = "";
  }
  const is_in_blacklist = (blacklist) => {
    var _iterator = _createForOfIteratorHelper(blacklist), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const element = _step.value;
        if (element.test(mw.config.get("wgPageName"))) {
          return true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return false;
  };
  if (window.easy_archive.on_article || window.easy_archive.on_hist_version) {
  } else if (is_in_blacklist(window.easy_archive.never_enable_on_these_pages_regex)) {
  } else if (is_in_blacklist(window.easy_archive.dis_support_these_pages_regex)) {
    footer_info_ele.insertAdjacentHTML(position_of_insertion, `<div id="easy_archive_enable_notice"><a style="color:inherit" href="javascript:window.easy_archive.elaborate_notice('page_not_supported_elaborate')">`.concat(message("page_not_supported"), "</a></div>"));
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
          section_delete_interface_html = section_delete_interface_inhibit ? "" : "".concat(pipe_html, '<a href="javascript:window.easy_archive.delete_section(').concat(actual, ", ").concat(nominal, ')">').concat(message("delete"), "</a>");
          section_archive_interface_html = section_archive_interface_inhibit ? "" : "".concat(pipe_html, '<a href="javascript:window.easy_archive.archive_section(').concat(actual, ", ").concat(nominal, ')">').concat(message("archive"), "</a>");
          ele.childNodes[child_node_number].insertAdjacentHTML("afterend", section_delete_interface_html + section_archive_interface_html + section_id_span_html.replace("@@", nominal.toString()));
        } else {
          j++;
        }
      }
      window.easy_archive.section_count = i - j + 1;
      footer_info_ele.insertAdjacentHTML(position_of_insertion, '<div id="easy_archive_supports_notice">'.concat(message("supports")).concat(message("left_par_split")).concat(message("archive_path_colon_split"), '<a href="/wiki/').concat(sanitize_html(window.easy_archive.settings.find("arc-loc")), '">').concat(sanitize_html(window.easy_archive.settings.find("arc-loc")), "</a>").concat(message("right_par")).concat(message("period"), "</div>"));
    };
    normal_function_inject_interface();
  } else if (window.easy_archive.others_user_talk === true) {
    footer_info_ele.insertAdjacentHTML(position_of_insertion, `<div id="easy_archive_enable_notice"><a style="color:inherit" href="javascript:window.easy_archive.elaborate_notice('others_talk_elaborate')">`.concat(message("others_page"), "</a></div>"));
  } else if (window.easy_archive.my_user_talk === false) {
    footer_info_ele.insertAdjacentHTML(position_of_insertion, `<div id="easy_archive_enable_notice"><a style="color:inherit" href="javascript:window.easy_archive.elaborate_notice('enable_on_generic_page')">`.concat(message("to_enable"), "</a></div>"));
  } else {
    footer_info_ele.insertAdjacentHTML(position_of_insertion, `<div id="easy_archive_enable_notice"><a style="color:inherit" href="javascript:window.easy_archive.elaborate_notice('please_enable_elaborate')">`.concat(message("please_enable"), "</a></div>"));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ0Vhc3lBY2hpdmUvMy4wJyk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5leHBvcnQgY29uc3QgZWFzeV9hcmNoaXZlX2xhbmcgPSAoKSA9PiB7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUubGFuZyA9IHtcblx0XHRkZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaQnLFxuXHRcdH0pLFxuXHRcdGFyY2hpdmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqUJyxcblx0XHR9KSxcblx0XHRzdXBwb3J0czogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgaXMgZW5hYmxlZCBvbiB0aGlzIHRhbGsgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfmnKzorqjorrrpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZlJyxcblx0XHR9KSxcblx0XHRvdGhlcnNfcGFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgaXMgbm90IGVuYWJsZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouaYr+S7luS6uueahOeUqOaIt+iuqOiuuumhtemdou+8jOWboOatpOS4jeaUr+aMgSBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdoueCuuS7luS6uueUqOaItuiojuirlumggemdou+8jOaVheS4jeaUr+aPtCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHR0b19lbmFibGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCB1c2luZyBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouayoeacieWQr+eUqCBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5pys6aCB5rKh5pyJ5ZWf55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0ZW5hYmxlX29uX2dlbmVyaWNfcGFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHlvdXIgdXNlciB0YWxrIHBhZ2UuIEhvd2V2ZXIgRWFzeSBBcmNoaXZlIHN0aWxsIGNhbiBiZSB1c2VkIGlmIG5lZWRlZC5UbyBlbmFibGUgaXQsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+atpOmhtemdouS4jeaYr+aCqOeahOeUqOaIt+iuqOiuuumhtemdouOAguS4jei/h++8jOiLpemcgOimge+8jOatpOmhtemdouWPr+S7peWQr+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6K+35Zyo6aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+atpOmggemdouS4jeaYr+aCqOeahOeUqOaItuiojuirlumggemdouOAguS4jemBju+8jOiLpemcgOimge+8jOatpOmggemdouWPr+S7peWVn+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6KuL5Zyo6aCB6Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn1944CCJyxcblx0XHR9KSxcblx0XHRwbGVhc2VfZW5hYmxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0byB0aGlzIHBhZ2UgdG8gc3RhcnQgdXNpbmcgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfor7flnKjmraTpobXpnaLliqDlhaUge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5Zyw5Z2AfX0g5p2l5ZCv55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vlnKjmraTpoIHpnaLliqDlhaUge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX0g5L6G5ZWf55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0cGxlYXNlX2VuYWJsZV9lbGFib3JhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiBcIllvdSBoYXZlIHRoZSBFYXN5IEFyY2hpdmUgZnVuY3Rpb25hbGl0eSBlbmFibGVkIGJ1dCB5b3VyIHRhbGsgcGFnZSBoYXNuJ3QgYmVlbiBjb25maWd1cmVkIHlldC4gVG8gdGFrZSBhZHZhbnRhZ2Ugb2YgRWFzeSBBcmNoaXZlLCBhZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdGVtcGxhdGUgdG8gdGhpcyBwYWdlLlwiLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo55qE6LSm5Y+35bey57uP5pSv5oyBIEVhc3kgQXJjaGl2Ze+8jOS9huaYr++8jOS4uuS6huW8gOWni+S9v+eUqOivpeWKn+iDve+8jOaCqOi/mOmcgOimgeWcqOiHquW3seeahOeUqOaIt+iuqOiuuumhtemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPkvY3nva59feOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmgqjnmoTos6zomZ/lt7LntpPmlK/mjIEgRWFzeSBBcmNoaXZl77yM5L2G5piv77yM54K65LqG6ZaL5aeL5L2/55So6Kmy5Yqf6IO977yM5oKo6YKE6ZyA6KaB5Zyo6Ieq5bex55qE55So5oi26KiO6KuW6aCB6Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn1944CCJyxcblx0XHR9KSxcblx0XHRsZWZ0X3Bhcl9zcGxpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0cmlnaHRfcGFyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyknLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdHBlcmlvZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcuJyxcblx0XHRcdHpoOiAn44CCJyxcblx0XHR9KSxcblx0XHRhcmNoaXZlX3BhdGhfY29sb25fc3BsaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2ZSBsb2NhdGlvbjogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+WcsOWdgO+8micsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpToh7PvvJonLFxuXHRcdH0pLFxuXHRcdGxvYWRpbmdfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcgc2VjdGlvbiAkMScsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjor7vlj5bnrKwgJDEg6IqC55qE5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOiugOWPluesrCAkMSDnr4DnmoTlhaflrrknLFxuXHRcdH0pLFxuXHRcdGRlbGV0aW5nX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdEZWxldGluZyBzZWN0aW9uICQxJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWIoOmZpOesrCAkMSDoioLnmoTlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo5Yiq6Zmk56ysICQxIOevgOeahOWFp+WuuScsXG5cdFx0fSksXG5cdFx0ZG9uZV9zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VjdGlvbiAkMSBoYXMgYmVlbiBhcmNoaXZlZCB0byAkMicsXG5cdFx0XHQnemgtaGFucyc6ICflt7Lnu4/lsIbnrKwgJDEg6IqC5a2Y5qGj5YiwICQyJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3sue2k+Wwh+esrCAkMSDnr4DlrZjmqpTliLAgJDInLFxuXHRcdH0pLFxuXHRcdGRvbmVfZGVsZXRpbmdfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlY3Rpb24gJDEgaGFzIGJlZW4gZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7Lnu4/lsIbnrKwgJDEg6IqC5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3sue2k+Wwh+esrCAkMSDnr4DliKrpmaQnLFxuXHRcdH0pLFxuXHRcdGJlaW5nX2FyY2hpdmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2JlaW5nIGFyY2hpdmVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+S4rScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTkuK0nLFxuXHRcdH0pLFxuXHRcdGJlaW5nX2RlbGV0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYmVpbmcgZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5LitJyxcblx0XHR9KSxcblx0XHRhbHJlYWR5X2FyY2hpdmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflt7LlrZjmqpQnLFxuXHRcdH0pLFxuXHRcdGFscmVhZHlfZGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICflt7LliKrpmaQnLFxuXHRcdH0pLFxuXHRcdG90aGVyc190YWxrX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46IFwiVGhpcyBwYWdlIGlzIGFub3RoZXIgdXNlcidzIHRhbGsgcGFnZS4gWW91IGNhbm5vdCBhcmNoaXZlIHRoZSB0b3BpY3Mgb24gdGhpcyBwYWdlIGZvciBoaW0vaGVyXCIsXG5cdFx0XHQnemgtaGFucyc6ICfov5nmmK/lj6bkuIDlkI3nlKjmiLfnmoTorqjorrrpobXpnaLvvIzmgqjkuI3og73ku6Pmm7/lj6bkuIDlkI3nlKjmiLflrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn6YCZ5piv5Y+m5LiA5ZCN55So5oi255qE6KiO6KuW6aCB6Z2i77yM5oKo5LiN6IO95Luj5pu/5Y+m5LiA5ZCN55So5oi25a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHRwYWdlX25vdF9zdXBwb3J0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdHBhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlc2UgcGFnZXMgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlOiBGaWxlLCBUZW1wbGF0ZSwgTW9kdWxlLCBNZWRpYVdpa2ksIENhdGVnb3J5LCBTcGVjaWFsLCBKYXZhU2NyaXB0LCBDU1MsIEpTT04uJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+i/meS6m+mhtemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77yaRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn6YCZ5Lqb6aCB6Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJpGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0fSksXG5cdFx0cHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlIGFyY2hpdmUgbG9jYXRpb24gb2YgdGhpcyBwYWdlLCBcIiQxXCIsIGlzIHVuZGVyIHRoZSBhcnRpY2xlIG5hbWVzcGFjZSwgd2hlcmUgYXJjaGl2ZXMgc2hvdWxkIG5vdCBiZSBub3JtYWxseSBkaXJlY3RlZCB0by4gUGxlYXNlIGNoZWNrIGlmIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGFyY2hpdmUgbG9jYXRpb24uJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+atpOmhtemdouebruWJjeeahOWtmOaho+WcsOWdgOaYr+KAnCQx4oCd77yM5Zyo5p2h55uu5ZCN56ew56m66Ze05LmL5LiL44CC5LiA6Iis6ICM6KiA5LiN5bqU5ZCR5p2h55uu5ZCN56ew56m66Ze06L+b6KGM5a2Y5qGj77yM6K+35qOA5p+l5a2Y5qGj5Zyw5Z2A44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+atpOmggemdoueVtuWJjeeahOWtmOaqlOWcsOWdgOaYr+OAjCQx44CN77yM5Zyo5qKd55uu5ZCN56ix56m66ZaT5LmL5LiL44CC5LiA6Iis6ICM6KiA5LiN5oeJ5ZCR5qKd55uu5ZCN56ix56m66ZaT6YCy6KGM5a2Y5qqU77yM6KuL5qqi5p+l5a2Y5qqU5Zyw5Z2A44CCJyxcblx0XHR9KSxcblx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZSBhcmNoaXZlIGxvY2F0aW9uIG9mIHRoaXMgcGFnZSwgXCIkMVwiLCBpcyB0aGlzIHBhZ2UgaXRzZWxmLCBFYXN5IGFyY2hpdmUgY2Fubm90IG9wZXJhdGUgbGlrZSB0aGlzLiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3vvIzlkozmraTpobXpnaLlkI3np7Dnm7jlkIzjgIJFYXN5IEFyY2hpdmUg5peg5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdoueVtuWJjeeahOWtmOaqlOWcsOWdgOaYr+OAjCQx44CN77yM5ZKM5q2k6aCB6Z2i5ZCN56ix55u45ZCM44CCRWFzeSBBcmNoaXZlIOeEoeazleaMieatpOWcsOWdgOWtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0YXJjaGl2ZV9zdW1tYXJ5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5q616JC9Jyxcblx0XHR9KSxcblx0XHRkZWxldGVfc3VtbWFyeTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5q616JC9Jyxcblx0XHR9KSxcblx0fTtcbn07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9FYXN5QXJjaGl2ZS5sZXNzJztcblxuaW1wb3J0IHthcGl9IGZyb20gJy4vbW9kdWxlcy9hcGknO1xuaW1wb3J0IHtlYXN5X2FyY2hpdmVfbGFuZ30gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbihmdW5jdGlvbiBlYXN5QXJjaGl2ZSgpIHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPCAwIHx8IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSA9PT0gJ1FpdXdlbjrpppbpobUnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUgPz89IHt9O1xuXHQvLyBtaW5pZmllZCBjb2RlIGRlcGVuZGVuY3kgZnVuY3Rpb25zXG5cdGNsYXNzIFBhcmVfc3RyIHtcblx0XHRjb25zdHJ1Y3RvcihwYXJlX3N0cmluZywgY29uZmlnKSB7XG5cdFx0XHR0aGlzLnN0ciA9IHBhcmVfc3RyaW5nO1xuXHRcdFx0dGhpcy5sZWZ0ID0gJygnO1xuXHRcdFx0dGhpcy5kZWxpbSA9ICc6Jztcblx0XHRcdHRoaXMucmlnaHQgPSAnKSc7XG5cdFx0XHRpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Y29uZmlnID0gU3RyaW5nKGNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHBhcmVfc3RyaW5nLmxlbmd0aCA+IDYgJiZcblx0XHRcdFx0L1sjJUBdW1NzXVtFZV1bVHRdLy50ZXN0KHBhcmVfc3RyaW5nLnNsaWNlKDAsIDQpKSAmJlxuXHRcdFx0XHQhY29uZmlnLmluY2x1ZGVzKCdpZ25vcmUtc2V0Jylcblx0XHRcdCkge1xuXHRcdFx0XHRbLCAsICwgLCB0aGlzLmxlZnQsIHRoaXMuZGVsaW0sIHRoaXMucmlnaHRdID0gcGFyZV9zdHJpbmc7XG5cdFx0XHRcdGlmICh0aGlzLmxlZnQgPT09IHRoaXMucmlnaHQgfHwgdGhpcy5sZWZ0ID09PSB0aGlzLmRlbGltIHx8IHRoaXMucmlnaHQgPT09IHRoaXMuZGVsaW0pIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJQb3VuZCBzZXQgc3RhdGVtZW50IGhhcyByZXBldGl0aXZlIGNoYXJhY3RlcnMuIEUuZy4gJyNzZXR8OnwnIGlzIGlsbGVnYWwuXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmQobG9va3VwX2tleSkge1xuXHRcdFx0bG9va3VwX2tleSA9IHRoaXMubGVmdCArIGxvb2t1cF9rZXkgKyB0aGlzLmRlbGltO1xuXHRcdFx0aWYgKCF0aGlzLnN0ci5pbmNsdWRlcyhsb29rdXBfa2V5KSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnN0ci5zcGxpdChsb29rdXBfa2V5KVsxXS5zcGxpdCh0aGlzLnJpZ2h0KVswXTtcblx0XHR9XG5cdH1cblx0Ly8gY29tbW9uIHJlcG8uXG5cdGNvbnN0IGV4cG9zZSA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgYXN5bmNQb3N0ID0gKHBhcmFtLCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0YXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbSkudGhlbihjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRjb25zdCBnZXRQYWdlID0gKHRpdGxlLCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW0gPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRcdFx0cnZwcm9wOiAnaWRzfGZsYWdzfHRpbWVzdGFtcHx1c2VyfHVzZXJpZHxzaXplfGNvbW1lbnR8dGFnc3xjb250ZW50Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdH07XG5cdFx0XHRhc3luY1Bvc3QocGFyYW0sIGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IGdldFBhZ2VTZWN0aW9uID0gKHRpdGxlLCBzZWN0aW9uLCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW0gPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0XHRcdHJ2c2VjdGlvbjogc2VjdGlvbixcblx0XHRcdH07XG5cdFx0XHRhc3luY1Bvc3QocGFyYW0sIGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IHBpY2tQYWdlQ29udGVudCA9IChkYXRhKSA9PiB7XG5cdFx0XHRpZiAoZGF0YS5xdWVyeSAmJiBkYXRhLnF1ZXJ5LnBhZ2VzICYmIGRhdGEucXVlcnkucGFnZXNbMF0gJiYgZGF0YS5xdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0pIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEucXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHRjb25zdCB0ZWxsUGFnZUV4aXN0ID0gKGRhdGEpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgfHwgIWRhdGEucXVlcnkgfHwgIWRhdGEucXVlcnkucGFnZXMgfHwgZGF0YS5xdWVyeS5wYWdlc1swXS5taXNzaW5nKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cdFx0Y29uc3QgZWRpdCA9ICh0aXRsZSwgc2VjdGlvbiwgdGV4dCwgc3VtbWFyeSwgY2FsbGJhY2spID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdHRleHQsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHNlY3Rpb24pIHtcblx0XHRcdFx0cGFyYW0uc2VjdGlvbiA9IHNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRhc3luY1Bvc3QocGFyYW0sIGNhbGxiYWNrKTtcblx0XHR9O1xuXHRcdGNvbnN0IGVkaXRBcHBlbmQgPSAocGFnZSwgYWRkZWRfY29udGVudCwgc3VtbWFyeSwgY2FsbGJhY2spID0+IHtcblx0XHRcdGdldFBhZ2UocGFnZSwgKGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxfY29udGVudCA9IHRlbGxQYWdlRXhpc3QoZGF0YSkgPT09IGZhbHNlID8gJycgOiBwaWNrUGFnZUNvbnRlbnQoZGF0YSk7XG5cdFx0XHRcdGVkaXQocGFnZSwgbnVsbCwgU3RyaW5nKG9yaWdpbmFsX2NvbnRlbnQpICsgYWRkZWRfY29udGVudCwgc3VtbWFyeSwgY2FsbGJhY2spO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRjb25zdCBhcmNoaXZlU2VjdGlvbiA9ICh0aXRsZSwgc2VjdGlvbiwgdGFyZ2V0VGl0bGUsIGNhbGxiYWNrLCBzdW1tYXJ5KSA9PiB7XG5cdFx0XHRnZXRQYWdlU2VjdGlvbih0aXRsZSwgc2VjdGlvbiwgKGRhdGEpID0+IHtcblx0XHRcdFx0ZWRpdEFwcGVuZCh0YXJnZXRUaXRsZSwgYFxcblxcbiR7cGlja1BhZ2VDb250ZW50KGRhdGEpfWAsIHN1bW1hcnkpO1xuXHRcdFx0XHRlZGl0KHRpdGxlLCBzZWN0aW9uLnRvU3RyaW5nKCksICcnLCBzdW1tYXJ5LCBjYWxsYmFjayk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGNvbnN0IGRlbGV0ZVNlY3Rpb24gPSAodGl0bGUsIHNlY3Rpb24sIGNhbGxiYWNrLCBzdW1tYXJ5KSA9PiB7XG5cdFx0XHRlZGl0KHRpdGxlLCBzZWN0aW9uLnRvU3RyaW5nKCksICcnLCBzdW1tYXJ5LCBjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXJjaGl2ZV9zZWN0aW9uOiBhcmNoaXZlU2VjdGlvbixcblx0XHRcdGRlbGV0ZV9zZWN0aW9uOiBkZWxldGVTZWN0aW9uLFxuXHRcdH07XG5cdH0pKCk7XG5cdC8vIGRlZmF1bHQgc2V0dGluZ3M6XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3Nfc3RyaW5nID1cblx0XHQnI3NldCV8P1x0XHRcdFx0XHRcdFx0XHRcdFxcbicgK1xuXHRcdCdkaXNwbGF5IHNlY3Rpb24gZGVsZXRlIGxpbmtcdCVzZWMtZGVsfDE/XHRcXG4nICtcblx0XHQnZGlzcGxheSBzZWN0aW9uIGFyY2hpdmUgbGluZVx0JXNlYy1hcmN8MT9cdFxcbicgK1xuXHRcdCdkaXNwbGF5IGNvbnRyb2wgYmFyIGF0IHRvcFx0JXRvcC1iYXJ8MD9cdFxcbicgK1xuXHRcdCdhcmNoaXZlIGxvY2F0aW9uXHRcdFx0XHQlYXJjLWxvY3w/XHRcXG4nICtcblx0XHQnc3Vic2VjdGlvbiBlZmZlY3RpdmVuZXNzXHRcdCVzdWItc2VjfDI/XHRcXG4nICtcblx0XHQnY29uZmlybSBhY3Rpb25cdFx0XHRcdCVjb25maXJtfDA/XHRcXG4nICtcblx0XHQnaXMgdGhpcyBkYXRhIGluaXRpYWxpemVkXHRcdCVkYXRhLWluaXR8MD8gXFxuJztcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncyA9IG5ldyBQYXJlX3N0cih3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzX3N0cmluZyk7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUubXlfdXNlcl90YWxrID0gbnVsbDtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5uZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXggPz89IFtdO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLmRpc19zdXBwb3J0X3RoZXNlX3BhZ2VzX3JlZ2V4ID0gW1xuXHRcdC9eRmlsZTouKiQvLFxuXHRcdC9eTWVkaWFXaWtpOi4qJC8sXG5cdFx0L15Nb2R1bGU6LiokLyxcblx0XHQvXkNhdGVnb3J5Oi4qJC8sXG5cdFx0L15UZW1wbGF0ZTouKiQvLFxuXHRcdC9eU3BlY2lhbDouKiQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuY3NzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXHRdO1xuXHRjb25zdCBzZXR0aW5nc19zcGFuX2NvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWFzeV9hcmNoaXZlX2RhdGFfcG9pbnRfY29sbGVjdGlvbicpO1xuXHRjb25zdCBbc2V0dGluZ3Nfc3Bhbl0gPSBzZXR0aW5nc19zcGFuX2NvbGxlY3Rpb247XG5cdGNvbnN0IHNldHRpbmdzID0gc2V0dGluZ3Nfc3BhbiA/IG5ldyBQYXJlX3N0cihzZXR0aW5nc19zcGFuLmlubmVySFRNTCkgOiBuZXcgUGFyZV9zdHIoJycpO1xuXHRpZiAoc2V0dGluZ3MuZmluZCgnZGF0YS1pbml0JykgPT09ICcxJykge1xuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3Nfc3RyaW5nID0gc2V0dGluZ3Nfc3Bhbi5pbm5lckhUTUw7XG5cdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncyA9IG5ldyBQYXJlX3N0cih3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzX3N0cmluZyk7XG5cdH1cblx0Ly8gaWRlbnRpZnkgaWYgRWFzeSBBcmNoaXZlIGNhbiBiZSB1c2VkIG9uIHRoZSBwYWdlIC0gY29tcGF0aWJpbGl0eVxuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX3VzZXJfdGFsayA9IG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDM7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUubXlfdXNlcl90YWxrID1cblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX3VzZXJfdGFsayAmJlxuXHRcdCgoKSA9PiB7XG5cdFx0XHRsZXQgcGFnZV9uYW1lID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLnNwbGl0KCc6Jyk7XG5cdFx0XHRwYWdlX25hbWVbMF0gPSAnJztcblx0XHRcdHBhZ2VfbmFtZSA9IHBhZ2VfbmFtZS5qb2luKCcnKTtcblx0XHRcdFtwYWdlX25hbWVdID0gcGFnZV9uYW1lLnNwbGl0KCcvJyk7XG5cdFx0XHRjb25zdCB1c2VyX25hbWUgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyk7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHR1c2VyX25hbWUuc3BsaXQoJ18nKS5qb2luKCcnKS5zcGxpdCgnICcpLmpvaW4oJycpID09PSBwYWdlX25hbWUuc3BsaXQoJ18nKS5qb2luKCcnKS5zcGxpdCgnICcpLmpvaW4oJycpXG5cdFx0XHQpO1xuXHRcdH0pKCk7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuaGFzX3RlbXBsYXRlID0gc2V0dGluZ3MuZmluZCgnZGF0YS1pbml0JykgPT09ICcxJztcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5vdGhlcnNfdXNlcl90YWxrID1cblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLm15X3VzZXJfdGFsayA9PT0gZmFsc2UgJiYgd2luZG93LmVhc3lfYXJjaGl2ZS5vbl91c2VyX3RhbGsgPT09IHRydWU7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUub25fYXJ0aWNsZSA9IG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDA7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUub25faGlzdF92ZXJzaW9uID0gbXcuY29uZmlnLmdldCgnd2dDdXJSZXZpc2lvbklkJykgLSBtdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKSAhPT0gMDtcblx0ZWFzeV9hcmNoaXZlX2xhbmcoKTtcblx0Y29uc3QgYXJjX3N1bSA9IHdpbmRvdy5lYXN5X2FyY2hpdmUudXNlcl9jdXN0b21fYXJjaGl2ZV9zdW1tYXJ5ID8/IG51bGw7XG5cdGNvbnN0IGRlbF9zdW0gPSB3aW5kb3cuZWFzeV9hcmNoaXZlLnVzZXJfY3VzdG9tX2RlbGV0ZV9zdW1tYXJ5ID8/IG51bGw7XG5cdGNvbnN0IHNhbml0aXplX2h0bWwgPSAoc3RyaW5nKSA9PiB7XG5cdFx0cmV0dXJuIHN0cmluZ1xuXHRcdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdFx0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcblx0fTtcblx0Ly8gbXVsdGkgbGFuZ3VhZ2Ugc2VsZWN0b3IgZGVmaW5pdGlvblxuXHRjb25zdCBtZXNzYWdlID0gKHRhZywgcGFyYV9saXN0KSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBjb250ZW50ID0gd2luZG93LmVhc3lfYXJjaGl2ZS5sYW5nW3RhZ107XG5cdFx0XHRmb3IgKGxldCBoYXNfdW5mdWxmaWxsZWRfcGFyYSA9IHRydWUsIF9pID0gMDsgaGFzX3VuZnVsZmlsbGVkX3BhcmE7IF9pKyspIHtcblx0XHRcdFx0Y29uc3Qgc2VhcmNoID0gYCQke19pICsgMX1gO1xuXHRcdFx0XHRpZiAoY29udGVudC5pbmNsdWRlcyhzZWFyY2gpKSB7XG5cdFx0XHRcdFx0Y29udGVudCA9IHBhcmFfbGlzdFtfaV1cblx0XHRcdFx0XHRcdD8gY29udGVudC5zcGxpdChzZWFyY2gpLmpvaW4ocGFyYV9saXN0W19pXSlcblx0XHRcdFx0XHRcdDogY29udGVudC5zcGxpdChzZWFyY2gpLmpvaW4oJycpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGhhc191bmZ1bGZpbGxlZF9wYXJhID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICcoISkgdW5kZWZpbmVkIGxhbmd1YWdlIGNvbnRlbnQnO1xuXHRcdH1cblx0fTtcblx0Y29uc3Qgbm9taW5hbF9zZWN0aW9ucyA9ICgoY291bnQpID0+IHtcblx0XHRjb25zdCBhcnIgPSBBcnJheS5mcm9tKHtcblx0XHRcdGxlbmd0aDogY291bnQsXG5cdFx0fSk7XG5cdFx0Zm9yIChsZXQgX2kgPSAwOyBfaSA8IGNvdW50OyBfaSsrKSB7XG5cdFx0XHRhcnJbX2ldID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBhcnI7XG5cdH0pKHdpbmRvdy5lYXN5X2FyY2hpdmUuc2VjdGlvbl9jb3VudCk7XG5cdGNvbnN0IGFjdHVhbF9zZWN0aW9uID0gKG5vbWluYWxfc2VjdGlvbl9udW1iZXIpID0+IHtcblx0XHRsZXQgbGVzcyA9IDA7XG5cdFx0Zm9yIChsZXQgX2kgPSAwOyBfaSA8IG5vbWluYWxfc2VjdGlvbl9udW1iZXI7IF9pKyspIHtcblx0XHRcdGlmIChub21pbmFsX3NlY3Rpb25zW19pXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRsZXNzKys7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBub21pbmFsX3NlY3Rpb25fbnVtYmVyIC0gbGVzcztcblx0fTtcblx0Ly8gLi4uIGludGVyZmFjZSBkb25lXG5cdC8vIGFyY2hpdmluZyBsb2dpYyBpbmplY3Rpb25cblx0Y29uc3QgcmVwb3J0X2RvbmVuZXNzX3VpID0gKHNlY3Rpb25fbnVtYmVyLCBkb25lbmVzc190eXBlLCB0bywgb25nb2luZ19vcl9kb25lKSA9PiB7XG5cdFx0bGV0IHRhZ19kaW5nO1xuXHRcdGxldCB0YWdfc2VjdGlvbjtcblx0XHRsZXQgZGluZ190eXBlO1xuXHRcdGxldCBkaW5nX2F1dG9oaWRlO1xuXHRcdGlmIChvbmdvaW5nX29yX2RvbmUgPT09ICdvbmdvaW5nJykge1xuXHRcdFx0ZGluZ190eXBlID0gJ2luZm8nO1xuXHRcdFx0ZGluZ19hdXRvaGlkZSA9IHRydWU7XG5cdFx0XHRpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2RlbGV0ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnZGVsZXRpbmdfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYmVpbmdfZGVsZXRlZCc7XG5cdFx0XHR9IGVsc2UgaWYgKGRvbmVuZXNzX3R5cGUgPT09ICdhcmNoaXZlJykge1xuXHRcdFx0XHR0YWdfZGluZyA9ICdsb2FkaW5nX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2JlaW5nX2FyY2hpdmVkJztcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG9uZ29pbmdfb3JfZG9uZSA9PT0gJ2RvbmUnKSB7XG5cdFx0XHRkaW5nX3R5cGUgPSAnc3VjY2Vzcyc7XG5cdFx0XHRkaW5nX2F1dG9oaWRlID0gZmFsc2U7XG5cdFx0XHRpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2RlbGV0ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnZG9uZV9kZWxldGluZ19zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdhbHJlYWR5X2RlbGV0ZWQnO1xuXHRcdFx0fSBlbHNlIGlmIChkb25lbmVzc190eXBlID09PSAnYXJjaGl2ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnZG9uZV9zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdhbHJlYWR5X2FyY2hpdmVkJztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgYWN0aW9ucyA9IHtcblx0XHRcdGRpbmc6ICgpID0+IHtcblx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogbWVzc2FnZSh0YWdfZGluZywgW3NlY3Rpb25fbnVtYmVyLnRvU3RyaW5nKCksIHRvXSksXG5cdFx0XHRcdFx0XHRjbG9zZTogIWRpbmdfYXV0b2hpZGUsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogZGluZ19hdXRvaGlkZSA/IDMwMDAgOiAtMSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGRpbmdfdHlwZVxuXHRcdFx0XHQpO1xuXHRcdFx0fSxcblx0XHRcdHNlY3Rpb25fbGluazogKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4tb3JkZXItJHtzZWN0aW9uX251bWJlcn1gKTtcblx0XHRcdFx0Y29uc3QgcG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdFx0XHRcdGZvciAobGV0IF9pID0gMTsgX2kgPCBwbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAtIDI7IF9pKyspIHtcblx0XHRcdFx0XHRwbm9kZS5jaGlsZE5vZGVzW19pXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5vZGUuaW5uZXJIVE1MID0gbWVzc2FnZSh0YWdfc2VjdGlvbik7XG5cdFx0XHRcdG5vZGUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXHRcdFx0XHRub2RlLnN0eWxlLmNvbG9yID0gJ3JnYigwIDAgMC8uNSknO1xuXHRcdFx0fSxcblx0XHR9O1xuXHRcdHJldHVybiBhY3Rpb25zO1xuXHR9O1xuXHRjb25zdCBkZWxldGVfc2VjdGlvbl9jb3JlID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdGNvbnN0IGFjdHVhbF9zZWN0aW9uX251bWJlciA9IGFjdHVhbF9zZWN0aW9uKHNlY3Rpb25fbnVtYmVyKTtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ29uZ29pbmcnKS5kaW5nKCk7XG5cdFx0ZXhwb3NlLmRlbGV0ZV9zZWN0aW9uKFxuXHRcdFx0bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRcdFx0YWN0dWFsX3NlY3Rpb25fbnVtYmVyLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ2RvbmUnKS5kaW5nKCk7XG5cdFx0XHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2RlbGV0ZScsICcnLCAnZG9uZScpLnNlY3Rpb25fbGluaygpO1xuXHRcdFx0XHRub21pbmFsX3NlY3Rpb25zW3NlY3Rpb25fbnVtYmVyXSA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0ZGVsX3N1bSB8fCBtZXNzYWdlKCdkZWxldGVfc3VtbWFyeScpXG5cdFx0KTtcblx0fTtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5kZWxldGVfc2VjdGlvbiA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ29uZ29pbmcnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRkZWxldGVfc2VjdGlvbl9jb3JlKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCk7XG5cdH07XG5cdGNvbnN0IGFyY2hpdmVfc2VjdGlvbl9jb3JlID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdGNvbnN0IGFjdHVhbF9zZWN0aW9uX251bWJlciA9IGFjdHVhbF9zZWN0aW9uKHNlY3Rpb25fbnVtYmVyKTtcblx0XHRjb25zdCB0byA9IHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpO1xuXHRcdHJlcG9ydF9kb25lbmVzc191aShfbm9taW5hbCwgJ2FyY2hpdmUnLCB0bywgJ29uZ29pbmcnKS5kaW5nKCk7XG5cdFx0ZXhwb3NlLmFyY2hpdmVfc2VjdGlvbihcblx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdGFjdHVhbF9zZWN0aW9uX251bWJlcixcblx0XHRcdHRvLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdkb25lJykuZGluZygpO1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdkb25lJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0XHRcdG5vbWluYWxfc2VjdGlvbnNbc2VjdGlvbl9udW1iZXJdID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRhcmNfc3VtIHx8IG1lc3NhZ2UoJ2FyY2hpdmVfc3VtbWFyeScpXG5cdFx0KTtcblx0fTtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5hcmNoaXZlX3NlY3Rpb24gPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0Y29uc3QgdG8gPSB3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKTtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdvbmdvaW5nJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0YXJjaGl2ZV9zZWN0aW9uX2NvcmUoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKTtcblx0fTtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5lbGFib3JhdGVfbm90aWNlID0gKG5vdGljZV90YWdfbmFtZSkgPT4ge1xuXHRcdC8vIGFjcm9ueW0gc2NoZW1lOiByZWZlciB0byBxd2VydHkga2V5Ym9hcmQgbGF5b3V0LiAocD05KVxuXHRcdGNvbnN0IG5vdGljZV90YWdfZGljdGlvbmFyeSA9IHtcblx0XHRcdHBsZWFzZV9lbmFibGVfZWxhYm9yYXRlOiBbJ3BsZWFzZV9lbmFibGVfZWxhYm9yYXRlJ10sXG5cdFx0XHRvdGhlcnNfdGFsa19lbGFib3JhdGU6IFsnb3RoZXJzX3RhbGtfZWxhYm9yYXRlJ10sXG5cdFx0XHRlbmFibGVfb25fZ2VuZXJpY19wYWdlOiBbJ2VuYWJsZV9vbl9nZW5lcmljX3BhZ2UnXSxcblx0XHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2U6IFtcblx0XHRcdFx0J3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UnLFxuXHRcdFx0XHQnd2FybmluZycsXG5cdFx0XHRcdCdsb25nJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFtzYW5pdGl6ZV9odG1sKHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKV0sXG5cdFx0XHRdLFxuXHRcdFx0cHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlOiBbXG5cdFx0XHRcdCdwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2UnLFxuXHRcdFx0XHQnd2FybmluZycsXG5cdFx0XHRcdCdsb25nJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFtzYW5pdGl6ZV9odG1sKHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKV0sXG5cdFx0XHRdLFxuXHRcdFx0cGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZTogWydwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlJ10sXG5cdFx0fTtcblx0XHRjb25zdCBub3RpY2Vfc2V0ID0gbm90aWNlX3RhZ19kaWN0aW9uYXJ5W25vdGljZV90YWdfbmFtZV0gfHwgZmFsc2U7XG5cdFx0aWYgKG5vdGljZV9zZXQgIT09IGZhbHNlKSB7XG5cdFx0XHRjb25zdCBbbnRhZywgbnR5cGUsIG50dGwsIG5wZXJzaXN0LCBuc3Vic3RdID0gbm90aWNlX3NldDtcblx0XHRcdGNvbnN0IHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5vZGU6ICQoJzxzcGFuPicpLmFwcGVuZChtZXNzYWdlKG50YWcsIG5zdWJzdCkpLmdldCgwKSxcblx0XHRcdFx0XHRjbG9zZTogbnR0bCA9PT0gJ2xvbmcnLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiBudHRsID09PSAnbG9uZycgPyAtMSA6IG50dGwsXG5cdFx0XHRcdFx0b25DbGljazogKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKG5wZXJzaXN0KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0bnR5cGVcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHQvLyByZWFsIGRlYWwgaGVyZVxuXHQvLyBpbnRlcmZhY2UgaW5qZWN0aW9uIC0gcHJlcGFyZVxuXHRsZXQgaSA9IDA7XG5cdGxldCBqID0gMDtcblx0bGV0IGVsZTtcblx0bGV0IG5vbWluYWw7XG5cdGxldCBhY3R1YWw7XG5cdGNvbnN0IHBpcGVfaHRtbCA9ICc8c3BhbiBjbGFzcz1cIm13LWVkaXRzZWN0aW9uLWRpdmlkZXJcIj4gfCA8L3NwYW4+Jztcblx0Y29uc3Qgc2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2luaGliaXQgPVxuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnc2VjLWRlbCcpID09PSAnMCcgfHwgd2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzAnO1xuXHRjb25zdCBzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQgPVxuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnc2VjLWFyYycpID09PSAnMCcgfHwgd2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdkYXRhLWluaXQnKSA9PT0gJzAnO1xuXHRsZXQgc2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2h0bWw7XG5cdGxldCBzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2h0bWw7XG5cdGNvbnN0IHNlY3Rpb25faWRfc3Bhbl9odG1sID1cblx0XHQnPHNwYW4gY2xhc3M9XCJlYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuIGVhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4tb3JkZXItQEBcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPnNlY3Rpb248L3NwYW4+Jztcblx0bGV0IGZvb3Rlcl9pbmZvX2VsZTtcblx0bGV0IHBvc2l0aW9uX29mX2luc2VydGlvbjtcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb290ZXItaW5mbycpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlLWluZm8nKSkge1xuXHRcdGZvb3Rlcl9pbmZvX2VsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb290ZXItaW5mbycpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlLWluZm8nKVswXTtcblx0XHRwb3NpdGlvbl9vZl9pbnNlcnRpb24gPSAnYWZ0ZXJiZWdpbic7XG5cdH0gZWxzZSB7XG5cdFx0Zm9vdGVyX2luZm9fZWxlID0ge1xuXHRcdFx0aW5zZXJ0QWRqYWNlbnRIVE1MOiAoKSA9PiB7fSxcblx0XHR9O1xuXHRcdHBvc2l0aW9uX29mX2luc2VydGlvbiA9ICcnO1xuXHR9XG5cdC8vIC4uLiBpbnRlcmZhY2UgaW5qZWN0aW9uIC0gbG9naWNcblx0Y29uc3QgaXNfaW5fYmxhY2tsaXN0ID0gKGJsYWNrbGlzdCkgPT4ge1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja2xpc3QpIHtcblx0XHRcdGlmIChlbGVtZW50LnRlc3QobXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRpZiAod2luZG93LmVhc3lfYXJjaGl2ZS5vbl9hcnRpY2xlIHx8IHdpbmRvdy5lYXN5X2FyY2hpdmUub25faGlzdF92ZXJzaW9uKSB7XG5cdFx0Ly8gaW5zZXJ0IG5vIGludGVyZmFjZSBvbiBhbiBhcnRpY2xlIHBhZ2Ugb3IgYSBoaXN0b3J5IHZlcnNpb24uXG5cdH0gZWxzZSBpZiAoaXNfaW5fYmxhY2tsaXN0KHdpbmRvdy5lYXN5X2FyY2hpdmUubmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4KSkge1xuXHRcdC8vIGluc2VydCBubyBpbnRlcmZhY2UgaWYgdGhlIHBhZ2UgbmFtZSBpcyBibGFja2xpc3RlZC5cblx0fSBlbHNlIGlmIChpc19pbl9ibGFja2xpc3Qod2luZG93LmVhc3lfYXJjaGl2ZS5kaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCkpIHtcblx0XHQvLyBpbnNlcnQgbm90IHN1cHBvcnRlZCBub3RpY2UgaWYgdGhlIHBhZ2UgbmFtZSBpbmRpY2F0ZXMgdGhhdCBpdCBpcyBub3Qgc3VwcG9ydGVkLlxuXHRcdGZvb3Rlcl9pbmZvX2VsZS5pbnNlcnRBZGphY2VudEhUTUwoXG5cdFx0XHRwb3NpdGlvbl9vZl9pbnNlcnRpb24sXG5cdFx0XHRgPGRpdiBpZD1cImVhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlXCI+PGEgc3R5bGU9XCJjb2xvcjppbmhlcml0XCIgaHJlZj1cImphdmFzY3JpcHQ6d2luZG93LmVhc3lfYXJjaGl2ZS5lbGFib3JhdGVfbm90aWNlKCdwYWdlX25vdF9zdXBwb3J0ZWRfZWxhYm9yYXRlJylcIj4ke21lc3NhZ2UoXG5cdFx0XHRcdCdwYWdlX25vdF9zdXBwb3J0ZWQnXG5cdFx0XHQpfTwvYT48L2Rpdj5gXG5cdFx0KTtcblx0fSBlbHNlIGlmIChtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykgPT09IHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKSB7XG5cdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5lbGFib3JhdGVfbm90aWNlKCdwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2UnKTtcblx0fSBlbHNlIGlmICh3aW5kb3cuZWFzeV9hcmNoaXZlLmhhc190ZW1wbGF0ZSAmJiAhd2luZG93LmVhc3lfYXJjaGl2ZS5vdGhlcnNfdXNlcl90YWxrKSB7XG5cdFx0Ly8gYW55IHBhZ2UgdGhhdCBoYXMgdGVtcGxhdGUgdGhhdCdzIG5vdCBvdGhlcnMnIHRhbGsgcGFnZS4gZnVuY3Rpb24gbm9ybWFsbHkuXG5cdFx0Ly8gISEgdGhlIGFyY2hpdmUgbG9jYXRpb24gaW4gbWFpbiBzcGFjZSBhbmQgbmVlZHMgYXR0ZW50aW9uICEhXG5cdFx0aWYgKC8uKzouKy8udGVzdCh3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSkgIT09IHRydWUpIHtcblx0XHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSgncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZScpO1xuXHRcdH1cblx0XHRjb25zdCBub3JtYWxfZnVuY3Rpb25faW5qZWN0X2ludGVyZmFjZSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGVkaXRTZWN0aW9uQ29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGVkaXRTZWN0aW9uQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRlbGUgPSBlZGl0U2VjdGlvbkNvbGxlY3Rpb25baV07XG5cdFx0XHRcdGNvbnN0IHZlID0gL1smP112ZWFjdGlvbj1lZGl0Ly50ZXN0KGVsZS5jaGlsZE5vZGVzWzFdLmhyZWYpO1xuXHRcdFx0XHRjb25zdCBjaGlsZF9ub2RlX251bWJlciA9IHZlID8gMyA6IDE7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRlbGUucGFyZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdoMicgJiZcblx0XHRcdFx0XHRlbGUucGFyZW50Tm9kZS5pZCAhPT0gJ2ZpcnN0SGVhZGluZycgJiZcblx0XHRcdFx0XHRkZWNvZGVVUklDb21wb25lbnQoZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmhyZWYuc3BsaXQoL1smP110aXRsZT0vKVsxXS5zcGxpdCgnJicpWzBdKSA9PT1cblx0XHRcdFx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRhY3R1YWwgPSBOdW1iZXIucGFyc2VJbnQoXG5cdFx0XHRcdFx0XHRlbGUuY2hpbGROb2Rlc1tjaGlsZF9ub2RlX251bWJlcl0uaHJlZi5zcGxpdCgvWyY/XXNlY3Rpb249LylbMV0uc3BsaXQoJyYnKVswXSxcblx0XHRcdFx0XHRcdDEwXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRub21pbmFsID0gaSAtIGogKyAxO1xuXHRcdFx0XHRcdHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9odG1sID0gc2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2luaGliaXRcblx0XHRcdFx0XHRcdD8gJydcblx0XHRcdFx0XHRcdDogYCR7cGlwZV9odG1sfTxhIGhyZWY9XCJqYXZhc2NyaXB0OndpbmRvdy5lYXN5X2FyY2hpdmUuZGVsZXRlX3NlY3Rpb24oJHthY3R1YWx9LCAke25vbWluYWx9KVwiPiR7bWVzc2FnZShcblx0XHRcdFx0XHRcdFx0XHQnZGVsZXRlJ1xuXHRcdFx0XHRcdFx0XHQpfTwvYT5gO1xuXHRcdFx0XHRcdHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaHRtbCA9IHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaW5oaWJpdFxuXHRcdFx0XHRcdFx0PyAnJ1xuXHRcdFx0XHRcdFx0OiBgJHtwaXBlX2h0bWx9PGEgaHJlZj1cImphdmFzY3JpcHQ6d2luZG93LmVhc3lfYXJjaGl2ZS5hcmNoaXZlX3NlY3Rpb24oJHthY3R1YWx9LCAke25vbWluYWx9KVwiPiR7bWVzc2FnZShcblx0XHRcdFx0XHRcdFx0XHQnYXJjaGl2ZSdcblx0XHRcdFx0XHRcdFx0KX08L2E+YDtcblx0XHRcdFx0XHRlbGUuY2hpbGROb2Rlc1tjaGlsZF9ub2RlX251bWJlcl0uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuXHRcdFx0XHRcdFx0J2FmdGVyZW5kJyxcblx0XHRcdFx0XHRcdHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9odG1sICtcblx0XHRcdFx0XHRcdFx0c2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9odG1sICtcblx0XHRcdFx0XHRcdFx0c2VjdGlvbl9pZF9zcGFuX2h0bWwucmVwbGFjZSgnQEAnLCBub21pbmFsLnRvU3RyaW5nKCkpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRqKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2VjdGlvbl9jb3VudCA9IGkgLSBqICsgMTtcblx0XHRcdGZvb3Rlcl9pbmZvX2VsZS5pbnNlcnRBZGphY2VudEhUTUwoXG5cdFx0XHRcdHBvc2l0aW9uX29mX2luc2VydGlvbixcblx0XHRcdFx0YDxkaXYgaWQ9XCJlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlXCI+JHttZXNzYWdlKCdzdXBwb3J0cycpfSR7bWVzc2FnZSgnbGVmdF9wYXJfc3BsaXQnKX0ke21lc3NhZ2UoXG5cdFx0XHRcdFx0J2FyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdCdcblx0XHRcdFx0KX08YSBocmVmPVwiL3dpa2kvJHtzYW5pdGl6ZV9odG1sKHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpKX1cIj4ke3Nhbml0aXplX2h0bWwoXG5cdFx0XHRcdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJylcblx0XHRcdFx0KX08L2E+JHttZXNzYWdlKCdyaWdodF9wYXInKX0ke21lc3NhZ2UoJ3BlcmlvZCcpfTwvZGl2PmBcblx0XHRcdCk7XG5cdFx0fTtcblx0XHRub3JtYWxfZnVuY3Rpb25faW5qZWN0X2ludGVyZmFjZSgpO1xuXHR9IGVsc2UgaWYgKHdpbmRvdy5lYXN5X2FyY2hpdmUub3RoZXJzX3VzZXJfdGFsayA9PT0gdHJ1ZSkge1xuXHRcdC8vIG90aGVycyB1c2VyIHRhbGsuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLmluc2VydEFkamFjZW50SFRNTChcblx0XHRcdHBvc2l0aW9uX29mX2luc2VydGlvbixcblx0XHRcdGA8ZGl2IGlkPVwiZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2VcIj48YSBzdHlsZT1cImNvbG9yOmluaGVyaXRcIiBocmVmPVwiamF2YXNjcmlwdDp3aW5kb3cuZWFzeV9hcmNoaXZlLmVsYWJvcmF0ZV9ub3RpY2UoJ290aGVyc190YWxrX2VsYWJvcmF0ZScpXCI+JHttZXNzYWdlKFxuXHRcdFx0XHQnb3RoZXJzX3BhZ2UnXG5cdFx0XHQpfTwvYT48L2Rpdj5gXG5cdFx0KTtcblx0fSBlbHNlIGlmICh3aW5kb3cuZWFzeV9hcmNoaXZlLm15X3VzZXJfdGFsayA9PT0gZmFsc2UpIHtcblx0XHQvLyBhIGdlbmVyaWMgcGFnZSB0aGF0IGRpZCBub3QgZW5hYmxlIGVhc3kgYXJjaGl2ZS5cblx0XHRmb290ZXJfaW5mb19lbGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuXHRcdFx0cG9zaXRpb25fb2ZfaW5zZXJ0aW9uLFxuXHRcdFx0YDxkaXYgaWQ9XCJlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZVwiPjxhIHN0eWxlPVwiY29sb3I6aW5oZXJpdFwiIGhyZWY9XCJqYXZhc2NyaXB0OndpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSgnZW5hYmxlX29uX2dlbmVyaWNfcGFnZScpXCI+JHttZXNzYWdlKFxuXHRcdFx0XHQndG9fZW5hYmxlJ1xuXHRcdFx0KX08L2E+PC9kaXY+YFxuXHRcdCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gdGhlbiBhc3NlcnQ6ICh3aW5kb3cuZWFzeV9hcmNoaXZlLm15X3VzZXJfdGFsayA9PT0gdHJ1ZSksICh3aW5kb3cuZWFzeV9hcmNoaXZlLmhhc190ZW1wbGF0ZSA9PT0gZmFsc2UpLlxuXHRcdC8vIG15IHVzZXIgdGFsayAtLSBpbnN0YWxsZWQgZWFzeSBhcmNoaXZlIGJ1dCBsYWNraW5nIHRlbXBsYXRlLlxuXHRcdGZvb3Rlcl9pbmZvX2VsZS5pbnNlcnRBZGphY2VudEhUTUwoXG5cdFx0XHRwb3NpdGlvbl9vZl9pbnNlcnRpb24sXG5cdFx0XHRgPGRpdiBpZD1cImVhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlXCI+PGEgc3R5bGU9XCJjb2xvcjppbmhlcml0XCIgaHJlZj1cImphdmFzY3JpcHQ6d2luZG93LmVhc3lfYXJjaGl2ZS5lbGFib3JhdGVfbm90aWNlKCdwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZScpXCI+JHttZXNzYWdlKFxuXHRcdFx0XHQncGxlYXNlX2VuYWJsZSdcblx0XHRcdCl9PC9hPjwvZGl2PmBcblx0XHQpO1xuXHR9XG5cdGlmIChtdy5jb25maWcuZ2V0KCdza2luJykgPT09ICdjaXRpemVuJykge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5XG5cdFx0XHQuZmluZCgnI2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlLCAjZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZSwgI2Vhc3lfYXJjaGl2ZV9zdG9wX25vdGljZScpXG5cdFx0XHQucmVwbGFjZVdpdGgoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRjb25zdCAkdGhpcyA9ICQodGhpcyk7XG5cdFx0XHRcdHJldHVybiAkKCc8c2VjdGlvbj4nKS5hZGRDbGFzcygncGFnZS1pbmZvX19pdGVtJykuYXR0cignaWQnLCAkdGhpcy5hdHRyKCdpZCcpKS5odG1sKCR0aGlzLmh0bWwoKSk7XG5cdFx0XHR9KTtcblx0fVxuXHRpZiAoXG5cdFx0Wyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMobXcuY29uZmlnLmdldCgnc2tpbicpKSB8fFxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJylcblx0KSB7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHlcblx0XHRcdC5maW5kKCcjZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2UsICNlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlLCAjZWFzeV9hcmNoaXZlX3N0b3Bfbm90aWNlJylcblx0XHRcdC5yZXBsYWNlV2l0aChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcblx0XHRcdFx0cmV0dXJuICQoJzxsaT4nKS5hdHRyKCdpZCcsICR0aGlzLmF0dHIoJ2lkJykpLmh0bWwoJHRoaXMuaHRtbCgpKTtcblx0XHRcdH0pO1xuXHR9XG59KSgpO1xuIl0sCiAgIm1h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QU1HLEtBQUssQ0FBQztJQUNoRSxDQUFDO0VBQ0g7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImVhc3lfYXJjaGl2ZV9sYW5nIiwgIndpbmRvdyIsICJlYXN5X2FyY2hpdmUiLCAibGFuZyIsICJkZWxldGUiLCAibG9jYWxpemUiLCAiZW4iLCAiYXJjaGl2ZSIsICJzdXBwb3J0cyIsICJvdGhlcnNfcGFnZSIsICJ0b19lbmFibGUiLCAiZW5hYmxlX29uX2dlbmVyaWNfcGFnZSIsICJwbGVhc2VfZW5hYmxlIiwgInBsZWFzZV9lbmFibGVfZWxhYm9yYXRlIiwgImxlZnRfcGFyX3NwbGl0IiwgInpoIiwgInJpZ2h0X3BhciIsICJwZXJpb2QiLCAiYXJjaGl2ZV9wYXRoX2NvbG9uX3NwbGl0IiwgImxvYWRpbmdfc2VjdGlvbl9pIiwgImRlbGV0aW5nX3NlY3Rpb25faSIsICJkb25lX3NlY3Rpb25faSIsICJkb25lX2RlbGV0aW5nX3NlY3Rpb25faSIsICJiZWluZ19hcmNoaXZlZCIsICJiZWluZ19kZWxldGVkIiwgImFscmVhZHlfYXJjaGl2ZWQiLCAiYWxyZWFkeV9kZWxldGVkIiwgIm90aGVyc190YWxrX2VsYWJvcmF0ZSIsICJwYWdlX25vdF9zdXBwb3J0ZWQiLCAicGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZSIsICJwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlIiwgInByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZSIsICJhcmNoaXZlX3N1bW1hcnkiLCAiZGVsZXRlX3N1bW1hcnkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImVhc3lBcmNoaXZlIiwgIl93aW5kb3ciLCAiX3dpbmRvdyRlYXN5X2FyY2hpdmUiLCAiX3dpbmRvdyRlYXN5X2FyY2hpdmUyIiwgIl93aW5kb3ckZWFzeV9hcmNoaXZlMyIsICJfd2luZG93JGVhc3lfYXJjaGl2ZSQiLCAiX3dpbmRvdyRlYXN5X2FyY2hpdmUkMiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIlBhcmVfc3RyIiwgImNvbnN0cnVjdG9yIiwgInBhcmVfc3RyaW5nIiwgInN0ciIsICJsZWZ0IiwgImRlbGltIiwgInJpZ2h0IiwgIlN0cmluZyIsICJsZW5ndGgiLCAidGVzdCIsICJzbGljZSIsICJpbmNsdWRlcyIsICJTeW50YXhFcnJvciIsICJmaW5kIiwgImxvb2t1cF9rZXkiLCAic3BsaXQiLCAiZXhwb3NlIiwgImFzeW5jUG9zdCIsICJwYXJhbSIsICJjYWxsYmFjayIsICJwb3N0V2l0aFRva2VuIiwgInRoZW4iLCAiZ2V0UGFnZSIsICJ0aXRsZSIsICJhY3Rpb24iLCAicHJvcCIsICJydnByb3AiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgImdldFBhZ2VTZWN0aW9uIiwgInNlY3Rpb24iLCAicnZzZWN0aW9uIiwgInBpY2tQYWdlQ29udGVudCIsICJkYXRhIiwgInF1ZXJ5IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJjb250ZW50IiwgInRlbGxQYWdlRXhpc3QiLCAibWlzc2luZyIsICJlZGl0IiwgInRleHQiLCAic3VtbWFyeSIsICJlZGl0QXBwZW5kIiwgInBhZ2UiLCAiYWRkZWRfY29udGVudCIsICJvcmlnaW5hbF9jb250ZW50IiwgImFyY2hpdmVTZWN0aW9uIiwgInRhcmdldFRpdGxlIiwgImNvbmNhdCIsICJ0b1N0cmluZyIsICJkZWxldGVTZWN0aW9uIiwgImFyY2hpdmVfc2VjdGlvbiIsICJkZWxldGVfc2VjdGlvbiIsICJzZXR0aW5nc19zdHJpbmciLCAic2V0dGluZ3MiLCAibXlfdXNlcl90YWxrIiwgIm5ldmVyX2VuYWJsZV9vbl90aGVzZV9wYWdlc19yZWdleCIsICJkaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCIsICJzZXR0aW5nc19zcGFuX2NvbGxlY3Rpb24iLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJzZXR0aW5nc19zcGFuIiwgImlubmVySFRNTCIsICJvbl91c2VyX3RhbGsiLCAicGFnZV9uYW1lIiwgImpvaW4iLCAidXNlcl9uYW1lIiwgImhhc190ZW1wbGF0ZSIsICJvdGhlcnNfdXNlcl90YWxrIiwgIm9uX2FydGljbGUiLCAib25faGlzdF92ZXJzaW9uIiwgImFyY19zdW0iLCAidXNlcl9jdXN0b21fYXJjaGl2ZV9zdW1tYXJ5IiwgImRlbF9zdW0iLCAidXNlcl9jdXN0b21fZGVsZXRlX3N1bW1hcnkiLCAic2FuaXRpemVfaHRtbCIsICJzdHJpbmciLCAicmVwbGFjZSIsICJtZXNzYWdlIiwgInRhZyIsICJwYXJhX2xpc3QiLCAiaGFzX3VuZnVsZmlsbGVkX3BhcmEiLCAiX2kiLCAic2VhcmNoIiwgIm5vbWluYWxfc2VjdGlvbnMiLCAiY291bnQiLCAiYXJyIiwgIkFycmF5IiwgImZyb20iLCAic2VjdGlvbl9jb3VudCIsICJhY3R1YWxfc2VjdGlvbiIsICJub21pbmFsX3NlY3Rpb25fbnVtYmVyIiwgImxlc3MiLCAicmVwb3J0X2RvbmVuZXNzX3VpIiwgInNlY3Rpb25fbnVtYmVyIiwgImRvbmVuZXNzX3R5cGUiLCAidG8iLCAib25nb2luZ19vcl9kb25lIiwgInRhZ19kaW5nIiwgInRhZ19zZWN0aW9uIiwgImRpbmdfdHlwZSIsICJkaW5nX2F1dG9oaWRlIiwgImFjdGlvbnMiLCAiZGluZyIsICJ0b2FzdGlmeSIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJzZWN0aW9uX2xpbmsiLCAibm9kZSIsICJxdWVyeVNlbGVjdG9yIiwgInBub2RlIiwgInBhcmVudE5vZGUiLCAiY2hpbGROb2RlcyIsICJzdHlsZSIsICJkaXNwbGF5IiwgImNvbG9yIiwgImRlbGV0ZV9zZWN0aW9uX2NvcmUiLCAiX25vbWluYWwiLCAiYWN0dWFsX3NlY3Rpb25fbnVtYmVyIiwgImFyY2hpdmVfc2VjdGlvbl9jb3JlIiwgImVsYWJvcmF0ZV9ub3RpY2UiLCAibm90aWNlX3RhZ19uYW1lIiwgIm5vdGljZV90YWdfZGljdGlvbmFyeSIsICJub3RpY2Vfc2V0IiwgIm50YWciLCAibnR5cGUiLCAibnR0bCIsICJucGVyc2lzdCIsICJuc3Vic3QiLCAidG9hc3RpZnlJbnN0YW5jZSIsICIkIiwgImFwcGVuZCIsICJvbkNsaWNrIiwgImhpZGVUb2FzdCIsICJpIiwgImoiLCAiZWxlIiwgIm5vbWluYWwiLCAiYWN0dWFsIiwgInBpcGVfaHRtbCIsICJzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaW5oaWJpdCIsICJzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXQiLCAic2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2h0bWwiLCAic2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9odG1sIiwgInNlY3Rpb25faWRfc3Bhbl9odG1sIiwgImZvb3Rlcl9pbmZvX2VsZSIsICJwb3NpdGlvbl9vZl9pbnNlcnRpb24iLCAiaW5zZXJ0QWRqYWNlbnRIVE1MIiwgImlzX2luX2JsYWNrbGlzdCIsICJibGFja2xpc3QiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJub3JtYWxfZnVuY3Rpb25faW5qZWN0X2ludGVyZmFjZSIsICJlZGl0U2VjdGlvbkNvbGxlY3Rpb24iLCAidmUiLCAiaHJlZiIsICJjaGlsZF9ub2RlX251bWJlciIsICJ0YWdOYW1lIiwgInRvTG93ZXJDYXNlIiwgImlkIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiJGJvZHkiLCAicmVwbGFjZVdpdGgiLCAiJHRoaXMiLCAiYWRkQ2xhc3MiLCAiYXR0ciIsICJodG1sIl0KfQo=
