/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-easy-archive.js}
 * @base {@link https://meta.wikimedia.org/w/index.php?oldid=18915644}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EasyArchive}
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
//! src/EasyArchive/modules/i18n.js
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
//! src/EasyArchive/EasyArchive.js
var import_ext_gadget2 = require("ext.gadget.Util");
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
      const api = (0, import_ext_gadget2.initMwApi)("Qiuwen/1.1 (EasyAchive/3.0; ".concat(mw.config.get("wgWikiID"), ")"));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvaTE4bi5qcyIsICJzcmMvRWFzeUFyY2hpdmUvRWFzeUFyY2hpdmUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5leHBvcnQgY29uc3QgZWFzeV9hcmNoaXZlX2xhbmcgPSAoKSA9PiB7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUubGFuZyA9IHtcblx0XHRkZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaQnLFxuXHRcdH0pLFxuXHRcdGFyY2hpdmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqUJyxcblx0XHR9KSxcblx0XHRzdXBwb3J0czogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgaXMgZW5hYmxlZCBvbiB0aGlzIHRhbGsgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfmnKzorqjorrrpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZlJyxcblx0XHR9KSxcblx0XHRvdGhlcnNfcGFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgaXMgbm90IGVuYWJsZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouaYr+S7luS6uueahOeUqOaIt+iuqOiuuumhtemdou+8jOWboOatpOS4jeaUr+aMgSBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdoueCuuS7luS6uueUqOaItuiojuirlumggemdou+8jOaVheS4jeaUr+aPtCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHR0b19lbmFibGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCB1c2luZyBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouayoeacieWQr+eUqCBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5pys6aCB5rKh5pyJ5ZWf55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0ZW5hYmxlX29uX2dlbmVyaWNfcGFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHlvdXIgdXNlciB0YWxrIHBhZ2UuIEhvd2V2ZXIgRWFzeSBBcmNoaXZlIHN0aWxsIGNhbiBiZSB1c2VkIGlmIG5lZWRlZC5UbyBlbmFibGUgaXQsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+atpOmhtemdouS4jeaYr+aCqOeahOeUqOaIt+iuqOiuuumhtemdouOAguS4jei/h++8jOiLpemcgOimge+8jOatpOmhtemdouWPr+S7peWQr+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6K+35Zyo6aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+atpOmggemdouS4jeaYr+aCqOeahOeUqOaItuiojuirlumggemdouOAguS4jemBju+8jOiLpemcgOimge+8jOatpOmggemdouWPr+S7peWVn+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6KuL5Zyo6aCB6Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn1944CCJyxcblx0XHR9KSxcblx0XHRwbGVhc2VfZW5hYmxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0byB0aGlzIHBhZ2UgdG8gc3RhcnQgdXNpbmcgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfor7flnKjmraTpobXpnaLliqDlhaUge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5Zyw5Z2AfX0g5p2l5ZCv55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vlnKjmraTpoIHpnaLliqDlhaUge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX0g5L6G5ZWf55SoIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0cGxlYXNlX2VuYWJsZV9lbGFib3JhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiBcIllvdSBoYXZlIHRoZSBFYXN5IEFyY2hpdmUgZnVuY3Rpb25hbGl0eSBlbmFibGVkIGJ1dCB5b3VyIHRhbGsgcGFnZSBoYXNuJ3QgYmVlbiBjb25maWd1cmVkIHlldC4gVG8gdGFrZSBhZHZhbnRhZ2Ugb2YgRWFzeSBBcmNoaXZlLCBhZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdGVtcGxhdGUgdG8gdGhpcyBwYWdlLlwiLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo55qE6LSm5Y+35bey57uP5pSv5oyBIEVhc3kgQXJjaGl2Ze+8jOS9huaYr++8jOS4uuS6huW8gOWni+S9v+eUqOivpeWKn+iDve+8jOaCqOi/mOmcgOimgeWcqOiHquW3seeahOeUqOaIt+iuqOiuuumhtemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPkvY3nva59feOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmgqjnmoTos6zomZ/lt7LntpPmlK/mjIEgRWFzeSBBcmNoaXZl77yM5L2G5piv77yM54K65LqG6ZaL5aeL5L2/55So6Kmy5Yqf6IO977yM5oKo6YKE6ZyA6KaB5Zyo6Ieq5bex55qE55So5oi26KiO6KuW6aCB6Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn1944CCJyxcblx0XHR9KSxcblx0XHRsZWZ0X3Bhcl9zcGxpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0cmlnaHRfcGFyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyknLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdHBlcmlvZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcuJyxcblx0XHRcdHpoOiAn44CCJyxcblx0XHR9KSxcblx0XHRhcmNoaXZlX3BhdGhfY29sb25fc3BsaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2ZSBsb2NhdGlvbjogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+WcsOWdgO+8micsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpToh7PvvJonLFxuXHRcdH0pLFxuXHRcdGxvYWRpbmdfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcgc2VjdGlvbiAkMScsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjor7vlj5bnrKwgJDEg6IqC55qE5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOiugOWPluesrCAkMSDnr4DnmoTlhaflrrknLFxuXHRcdH0pLFxuXHRcdGRlbGV0aW5nX3NlY3Rpb25faTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdEZWxldGluZyBzZWN0aW9uICQxJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWIoOmZpOesrCAkMSDoioLnmoTlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo5Yiq6Zmk56ysICQxIOevgOeahOWFp+WuuScsXG5cdFx0fSksXG5cdFx0ZG9uZV9zZWN0aW9uX2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VjdGlvbiAkMSBoYXMgYmVlbiBhcmNoaXZlZCB0byAkMicsXG5cdFx0XHQnemgtaGFucyc6ICflt7Lnu4/lsIbnrKwgJDEg6IqC5a2Y5qGj5YiwICQyJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3sue2k+Wwh+esrCAkMSDnr4DlrZjmqpTliLAgJDInLFxuXHRcdH0pLFxuXHRcdGRvbmVfZGVsZXRpbmdfc2VjdGlvbl9pOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlY3Rpb24gJDEgaGFzIGJlZW4gZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7Lnu4/lsIbnrKwgJDEg6IqC5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3sue2k+Wwh+esrCAkMSDnr4DliKrpmaQnLFxuXHRcdH0pLFxuXHRcdGJlaW5nX2FyY2hpdmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2JlaW5nIGFyY2hpdmVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+S4rScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTkuK0nLFxuXHRcdH0pLFxuXHRcdGJlaW5nX2RlbGV0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYmVpbmcgZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5LitJyxcblx0XHR9KSxcblx0XHRhbHJlYWR5X2FyY2hpdmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflt7LlrZjmqpQnLFxuXHRcdH0pLFxuXHRcdGFscmVhZHlfZGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICflt7LliKrpmaQnLFxuXHRcdH0pLFxuXHRcdG90aGVyc190YWxrX2VsYWJvcmF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46IFwiVGhpcyBwYWdlIGlzIGFub3RoZXIgdXNlcidzIHRhbGsgcGFnZS4gWW91IGNhbm5vdCBhcmNoaXZlIHRoZSB0b3BpY3Mgb24gdGhpcyBwYWdlIGZvciBoaW0vaGVyXCIsXG5cdFx0XHQnemgtaGFucyc6ICfov5nmmK/lj6bkuIDlkI3nlKjmiLfnmoTorqjorrrpobXpnaLvvIzmgqjkuI3og73ku6Pmm7/lj6bkuIDlkI3nlKjmiLflrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn6YCZ5piv5Y+m5LiA5ZCN55So5oi255qE6KiO6KuW6aCB6Z2i77yM5oKo5LiN6IO95Luj5pu/5Y+m5LiA5ZCN55So5oi25a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHRwYWdlX25vdF9zdXBwb3J0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdHBhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlc2UgcGFnZXMgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlOiBGaWxlLCBUZW1wbGF0ZSwgTW9kdWxlLCBNZWRpYVdpa2ksIENhdGVnb3J5LCBTcGVjaWFsLCBKYXZhU2NyaXB0LCBDU1MsIEpTT04uJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+i/meS6m+mhtemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77yaRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn6YCZ5Lqb6aCB6Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJpGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0fSksXG5cdFx0cHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlIGFyY2hpdmUgbG9jYXRpb24gb2YgdGhpcyBwYWdlLCBcIiQxXCIsIGlzIHVuZGVyIHRoZSBhcnRpY2xlIG5hbWVzcGFjZSwgd2hlcmUgYXJjaGl2ZXMgc2hvdWxkIG5vdCBiZSBub3JtYWxseSBkaXJlY3RlZCB0by4gUGxlYXNlIGNoZWNrIGlmIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGFyY2hpdmUgbG9jYXRpb24uJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+atpOmhtemdouebruWJjeeahOWtmOaho+WcsOWdgOaYr+KAnCQx4oCd77yM5Zyo5p2h55uu5ZCN56ew56m66Ze05LmL5LiL44CC5LiA6Iis6ICM6KiA5LiN5bqU5ZCR5p2h55uu5ZCN56ew56m66Ze06L+b6KGM5a2Y5qGj77yM6K+35qOA5p+l5a2Y5qGj5Zyw5Z2A44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+atpOmggemdoueVtuWJjeeahOWtmOaqlOWcsOWdgOaYr+OAjCQx44CN77yM5Zyo5qKd55uu5ZCN56ix56m66ZaT5LmL5LiL44CC5LiA6Iis6ICM6KiA5LiN5oeJ5ZCR5qKd55uu5ZCN56ix56m66ZaT6YCy6KGM5a2Y5qqU77yM6KuL5qqi5p+l5a2Y5qqU5Zyw5Z2A44CCJyxcblx0XHR9KSxcblx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZSBhcmNoaXZlIGxvY2F0aW9uIG9mIHRoaXMgcGFnZSwgXCIkMVwiLCBpcyB0aGlzIHBhZ2UgaXRzZWxmLCBFYXN5IGFyY2hpdmUgY2Fubm90IG9wZXJhdGUgbGlrZSB0aGlzLiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3vvIzlkozmraTpobXpnaLlkI3np7Dnm7jlkIzjgIJFYXN5IEFyY2hpdmUg5peg5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdoueVtuWJjeeahOWtmOaqlOWcsOWdgOaYr+OAjCQx44CN77yM5ZKM5q2k6aCB6Z2i5ZCN56ix55u45ZCM44CCRWFzeSBBcmNoaXZlIOeEoeazleaMieatpOWcsOWdgOWtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0YXJjaGl2ZV9zdW1tYXJ5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5q616JC9Jyxcblx0XHR9KSxcblx0XHRkZWxldGVfc3VtbWFyeTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5q616JC9Jyxcblx0XHR9KSxcblx0fTtcbn07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7ZWFzeV9hcmNoaXZlX2xhbmd9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbihmdW5jdGlvbiBlYXN5QXJjaGl2ZSgpIHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPCAwIHx8IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSA9PT0gJ1FpdXdlbjrpppbpobUnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUgPz89IHt9O1xuXHQvLyBtaW5pZmllZCBjb2RlIGRlcGVuZGVuY3kgZnVuY3Rpb25zXG5cdGNsYXNzIFBhcmVfc3RyIHtcblx0XHRjb25zdHJ1Y3RvcihwYXJlX3N0cmluZywgY29uZmlnKSB7XG5cdFx0XHR0aGlzLnN0ciA9IHBhcmVfc3RyaW5nO1xuXHRcdFx0dGhpcy5sZWZ0ID0gJygnO1xuXHRcdFx0dGhpcy5kZWxpbSA9ICc6Jztcblx0XHRcdHRoaXMucmlnaHQgPSAnKSc7XG5cdFx0XHRpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Y29uZmlnID0gU3RyaW5nKGNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHBhcmVfc3RyaW5nLmxlbmd0aCA+IDYgJiZcblx0XHRcdFx0L1sjJUBdW1NzXVtFZV1bVHRdLy50ZXN0KHBhcmVfc3RyaW5nLnNsaWNlKDAsIDQpKSAmJlxuXHRcdFx0XHQhY29uZmlnLmluY2x1ZGVzKCdpZ25vcmUtc2V0Jylcblx0XHRcdCkge1xuXHRcdFx0XHRbLCAsICwgLCB0aGlzLmxlZnQsIHRoaXMuZGVsaW0sIHRoaXMucmlnaHRdID0gcGFyZV9zdHJpbmc7XG5cdFx0XHRcdGlmICh0aGlzLmxlZnQgPT09IHRoaXMucmlnaHQgfHwgdGhpcy5sZWZ0ID09PSB0aGlzLmRlbGltIHx8IHRoaXMucmlnaHQgPT09IHRoaXMuZGVsaW0pIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJQb3VuZCBzZXQgc3RhdGVtZW50IGhhcyByZXBldGl0aXZlIGNoYXJhY3RlcnMuIEUuZy4gJyNzZXR8OnwnIGlzIGlsbGVnYWwuXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZpbmQobG9va3VwX2tleSkge1xuXHRcdFx0bG9va3VwX2tleSA9IHRoaXMubGVmdCArIGxvb2t1cF9rZXkgKyB0aGlzLmRlbGltO1xuXHRcdFx0aWYgKCF0aGlzLnN0ci5pbmNsdWRlcyhsb29rdXBfa2V5KSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnN0ci5zcGxpdChsb29rdXBfa2V5KVsxXS5zcGxpdCh0aGlzLnJpZ2h0KVswXTtcblx0XHR9XG5cdH1cblx0Ly8gY29tbW9uIHJlcG8uXG5cdGNvbnN0IGV4cG9zZSA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgYXN5bmNQb3N0ID0gKHBhcmFtLCBjYWxsYmFjaykgPT4ge1xuXHRcdFx0Y29uc3QgYXBpID0gaW5pdE13QXBpKGBRaXV3ZW4vMS4xIChFYXN5QWNoaXZlLzMuMDsgJHttdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpfSlgKTtcblx0XHRcdGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW0pLnRoZW4oY2FsbGJhY2spO1xuXHRcdH07XG5cdFx0Y29uc3QgZ2V0UGFnZSA9ICh0aXRsZSwgY2FsbGJhY2spID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHRcdHJ2cHJvcDogJ2lkc3xmbGFnc3x0aW1lc3RhbXB8dXNlcnx1c2VyaWR8c2l6ZXxjb21tZW50fHRhZ3N8Y29udGVudCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0XHR9O1xuXHRcdFx0YXN5bmNQb3N0KHBhcmFtLCBjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRjb25zdCBnZXRQYWdlU2VjdGlvbiA9ICh0aXRsZSwgc2VjdGlvbiwgY2FsbGJhY2spID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdFx0XHRydnNlY3Rpb246IHNlY3Rpb24sXG5cdFx0XHR9O1xuXHRcdFx0YXN5bmNQb3N0KHBhcmFtLCBjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRjb25zdCBwaWNrUGFnZUNvbnRlbnQgPSAoZGF0YSkgPT4ge1xuXHRcdFx0aWYgKGRhdGEucXVlcnkgJiYgZGF0YS5xdWVyeS5wYWdlcyAmJiBkYXRhLnF1ZXJ5LnBhZ2VzWzBdICYmIGRhdGEucXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdKSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5jb250ZW50O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0Y29uc3QgdGVsbFBhZ2VFeGlzdCA9IChkYXRhKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIGRhdGEgIT09ICdvYmplY3QnIHx8ICFkYXRhLnF1ZXJ5IHx8ICFkYXRhLnF1ZXJ5LnBhZ2VzIHx8IGRhdGEucXVlcnkucGFnZXNbMF0ubWlzc2luZykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdGNvbnN0IGVkaXQgPSAodGl0bGUsIHNlY3Rpb24sIHRleHQsIHN1bW1hcnksIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRjb25zdCBwYXJhbSA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHR0ZXh0LFxuXHRcdFx0fTtcblx0XHRcdGlmIChzZWN0aW9uKSB7XG5cdFx0XHRcdHBhcmFtLnNlY3Rpb24gPSBzZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0YXN5bmNQb3N0KHBhcmFtLCBjYWxsYmFjayk7XG5cdFx0fTtcblx0XHRjb25zdCBlZGl0QXBwZW5kID0gKHBhZ2UsIGFkZGVkX2NvbnRlbnQsIHN1bW1hcnksIGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRnZXRQYWdlKHBhZ2UsIChkYXRhKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsX2NvbnRlbnQgPSB0ZWxsUGFnZUV4aXN0KGRhdGEpID09PSBmYWxzZSA/ICcnIDogcGlja1BhZ2VDb250ZW50KGRhdGEpO1xuXHRcdFx0XHRlZGl0KHBhZ2UsIG51bGwsIFN0cmluZyhvcmlnaW5hbF9jb250ZW50KSArIGFkZGVkX2NvbnRlbnQsIHN1bW1hcnksIGNhbGxiYWNrKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0Y29uc3QgYXJjaGl2ZVNlY3Rpb24gPSAodGl0bGUsIHNlY3Rpb24sIHRhcmdldFRpdGxlLCBjYWxsYmFjaywgc3VtbWFyeSkgPT4ge1xuXHRcdFx0Z2V0UGFnZVNlY3Rpb24odGl0bGUsIHNlY3Rpb24sIChkYXRhKSA9PiB7XG5cdFx0XHRcdGVkaXRBcHBlbmQodGFyZ2V0VGl0bGUsIGBcXG5cXG4ke3BpY2tQYWdlQ29udGVudChkYXRhKX1gLCBzdW1tYXJ5KTtcblx0XHRcdFx0ZWRpdCh0aXRsZSwgc2VjdGlvbi50b1N0cmluZygpLCAnJywgc3VtbWFyeSwgY2FsbGJhY2spO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRjb25zdCBkZWxldGVTZWN0aW9uID0gKHRpdGxlLCBzZWN0aW9uLCBjYWxsYmFjaywgc3VtbWFyeSkgPT4ge1xuXHRcdFx0ZWRpdCh0aXRsZSwgc2VjdGlvbi50b1N0cmluZygpLCAnJywgc3VtbWFyeSwgY2FsbGJhY2spO1xuXHRcdH07XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFyY2hpdmVfc2VjdGlvbjogYXJjaGl2ZVNlY3Rpb24sXG5cdFx0XHRkZWxldGVfc2VjdGlvbjogZGVsZXRlU2VjdGlvbixcblx0XHR9O1xuXHR9KSgpO1xuXHQvLyBkZWZhdWx0IHNldHRpbmdzOlxuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzX3N0cmluZyA9XG5cdFx0JyNzZXQlfD9cdFx0XHRcdFx0XHRcdFx0XHRcXG4nICtcblx0XHQnZGlzcGxheSBzZWN0aW9uIGRlbGV0ZSBsaW5rXHQlc2VjLWRlbHwxP1x0XFxuJyArXG5cdFx0J2Rpc3BsYXkgc2VjdGlvbiBhcmNoaXZlIGxpbmVcdCVzZWMtYXJjfDE/XHRcXG4nICtcblx0XHQnZGlzcGxheSBjb250cm9sIGJhciBhdCB0b3BcdCV0b3AtYmFyfDA/XHRcXG4nICtcblx0XHQnYXJjaGl2ZSBsb2NhdGlvblx0XHRcdFx0JWFyYy1sb2N8P1x0XFxuJyArXG5cdFx0J3N1YnNlY3Rpb24gZWZmZWN0aXZlbmVzc1x0XHQlc3ViLXNlY3wyP1x0XFxuJyArXG5cdFx0J2NvbmZpcm0gYWN0aW9uXHRcdFx0XHQlY29uZmlybXwwP1x0XFxuJyArXG5cdFx0J2lzIHRoaXMgZGF0YSBpbml0aWFsaXplZFx0XHQlZGF0YS1pbml0fDA/IFxcbic7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MgPSBuZXcgUGFyZV9zdHIod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5nc19zdHJpbmcpO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm15X3VzZXJfdGFsayA9IG51bGw7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUubmV2ZXJfZW5hYmxlX29uX3RoZXNlX3BhZ2VzX3JlZ2V4ID8/PSBbXTtcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5kaXNfc3VwcG9ydF90aGVzZV9wYWdlc19yZWdleCA9IFtcblx0XHQvXkZpbGU6LiokLyxcblx0XHQvXk1lZGlhV2lraTouKiQvLFxuXHRcdC9eTW9kdWxlOi4qJC8sXG5cdFx0L15DYXRlZ29yeTouKiQvLFxuXHRcdC9eVGVtcGxhdGU6LiokLyxcblx0XHQvXlNwZWNpYWw6LiokLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmNzcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzb24kLyxcblx0XTtcblx0Y29uc3Qgc2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVhc3lfYXJjaGl2ZV9kYXRhX3BvaW50X2NvbGxlY3Rpb24nKTtcblx0Y29uc3QgW3NldHRpbmdzX3NwYW5dID0gc2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uO1xuXHRjb25zdCBzZXR0aW5ncyA9IHNldHRpbmdzX3NwYW4gPyBuZXcgUGFyZV9zdHIoc2V0dGluZ3Nfc3Bhbi5pbm5lckhUTUwpIDogbmV3IFBhcmVfc3RyKCcnKTtcblx0aWYgKHNldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMScpIHtcblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzX3N0cmluZyA9IHNldHRpbmdzX3NwYW4uaW5uZXJIVE1MO1xuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MgPSBuZXcgUGFyZV9zdHIod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5nc19zdHJpbmcpO1xuXHR9XG5cdC8vIGlkZW50aWZ5IGlmIEVhc3kgQXJjaGl2ZSBjYW4gYmUgdXNlZCBvbiB0aGUgcGFnZSAtIGNvbXBhdGliaWxpdHlcblx0d2luZG93LmVhc3lfYXJjaGl2ZS5vbl91c2VyX3RhbGsgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSAzO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm15X3VzZXJfdGFsayA9XG5cdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5vbl91c2VyX3RhbGsgJiZcblx0XHQoKCkgPT4ge1xuXHRcdFx0bGV0IHBhZ2VfbmFtZSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5zcGxpdCgnOicpO1xuXHRcdFx0cGFnZV9uYW1lWzBdID0gJyc7XG5cdFx0XHRwYWdlX25hbWUgPSBwYWdlX25hbWUuam9pbignJyk7XG5cdFx0XHRbcGFnZV9uYW1lXSA9IHBhZ2VfbmFtZS5zcGxpdCgnLycpO1xuXHRcdFx0Y29uc3QgdXNlcl9uYW1lID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dXNlcl9uYW1lLnNwbGl0KCdfJykuam9pbignJykuc3BsaXQoJyAnKS5qb2luKCcnKSA9PT0gcGFnZV9uYW1lLnNwbGl0KCdfJykuam9pbignJykuc3BsaXQoJyAnKS5qb2luKCcnKVxuXHRcdFx0KTtcblx0XHR9KSgpO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLmhhc190ZW1wbGF0ZSA9IHNldHRpbmdzLmZpbmQoJ2RhdGEtaW5pdCcpID09PSAnMSc7XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUub3RoZXJzX3VzZXJfdGFsayA9XG5cdFx0d2luZG93LmVhc3lfYXJjaGl2ZS5teV91c2VyX3RhbGsgPT09IGZhbHNlICYmIHdpbmRvdy5lYXN5X2FyY2hpdmUub25fdXNlcl90YWxrID09PSB0cnVlO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX2FydGljbGUgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSAwO1xuXHR3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX2hpc3RfdmVyc2lvbiA9IG13LmNvbmZpZy5nZXQoJ3dnQ3VyUmV2aXNpb25JZCcpIC0gbXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJykgIT09IDA7XG5cdGVhc3lfYXJjaGl2ZV9sYW5nKCk7XG5cdGNvbnN0IGFyY19zdW0gPSB3aW5kb3cuZWFzeV9hcmNoaXZlLnVzZXJfY3VzdG9tX2FyY2hpdmVfc3VtbWFyeSA/PyBudWxsO1xuXHRjb25zdCBkZWxfc3VtID0gd2luZG93LmVhc3lfYXJjaGl2ZS51c2VyX2N1c3RvbV9kZWxldGVfc3VtbWFyeSA/PyBudWxsO1xuXHRjb25zdCBzYW5pdGl6ZV9odG1sID0gKHN0cmluZykgPT4ge1xuXHRcdHJldHVybiBzdHJpbmdcblx0XHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0XHQucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jylcblx0XHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cdH07XG5cdC8vIG11bHRpIGxhbmd1YWdlIHNlbGVjdG9yIGRlZmluaXRpb25cblx0Y29uc3QgbWVzc2FnZSA9ICh0YWcsIHBhcmFfbGlzdCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgY29udGVudCA9IHdpbmRvdy5lYXN5X2FyY2hpdmUubGFuZ1t0YWddO1xuXHRcdFx0Zm9yIChsZXQgaGFzX3VuZnVsZmlsbGVkX3BhcmEgPSB0cnVlLCBfaSA9IDA7IGhhc191bmZ1bGZpbGxlZF9wYXJhOyBfaSsrKSB7XG5cdFx0XHRcdGNvbnN0IHNlYXJjaCA9IGAkJHtfaSArIDF9YDtcblx0XHRcdFx0aWYgKGNvbnRlbnQuaW5jbHVkZXMoc2VhcmNoKSkge1xuXHRcdFx0XHRcdGNvbnRlbnQgPSBwYXJhX2xpc3RbX2ldXG5cdFx0XHRcdFx0XHQ/IGNvbnRlbnQuc3BsaXQoc2VhcmNoKS5qb2luKHBhcmFfbGlzdFtfaV0pXG5cdFx0XHRcdFx0XHQ6IGNvbnRlbnQuc3BsaXQoc2VhcmNoKS5qb2luKCcnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRoYXNfdW5mdWxmaWxsZWRfcGFyYSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnKCEpIHVuZGVmaW5lZCBsYW5ndWFnZSBjb250ZW50Jztcblx0XHR9XG5cdH07XG5cdGNvbnN0IG5vbWluYWxfc2VjdGlvbnMgPSAoKGNvdW50KSA9PiB7XG5cdFx0Y29uc3QgYXJyID0gQXJyYXkuZnJvbSh7XG5cdFx0XHRsZW5ndGg6IGNvdW50LFxuXHRcdH0pO1xuXHRcdGZvciAobGV0IF9pID0gMDsgX2kgPCBjb3VudDsgX2krKykge1xuXHRcdFx0YXJyW19pXSA9IGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gYXJyO1xuXHR9KSh3aW5kb3cuZWFzeV9hcmNoaXZlLnNlY3Rpb25fY291bnQpO1xuXHRjb25zdCBhY3R1YWxfc2VjdGlvbiA9IChub21pbmFsX3NlY3Rpb25fbnVtYmVyKSA9PiB7XG5cdFx0bGV0IGxlc3MgPSAwO1xuXHRcdGZvciAobGV0IF9pID0gMDsgX2kgPCBub21pbmFsX3NlY3Rpb25fbnVtYmVyOyBfaSsrKSB7XG5cdFx0XHRpZiAobm9taW5hbF9zZWN0aW9uc1tfaV0gPT09IHRydWUpIHtcblx0XHRcdFx0bGVzcysrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbm9taW5hbF9zZWN0aW9uX251bWJlciAtIGxlc3M7XG5cdH07XG5cdC8vIC4uLiBpbnRlcmZhY2UgZG9uZVxuXHQvLyBhcmNoaXZpbmcgbG9naWMgaW5qZWN0aW9uXG5cdGNvbnN0IHJlcG9ydF9kb25lbmVzc191aSA9IChzZWN0aW9uX251bWJlciwgZG9uZW5lc3NfdHlwZSwgdG8sIG9uZ29pbmdfb3JfZG9uZSkgPT4ge1xuXHRcdGxldCB0YWdfZGluZztcblx0XHRsZXQgdGFnX3NlY3Rpb247XG5cdFx0bGV0IGRpbmdfdHlwZTtcblx0XHRsZXQgZGluZ19hdXRvaGlkZTtcblx0XHRpZiAob25nb2luZ19vcl9kb25lID09PSAnb25nb2luZycpIHtcblx0XHRcdGRpbmdfdHlwZSA9ICdpbmZvJztcblx0XHRcdGRpbmdfYXV0b2hpZGUgPSB0cnVlO1xuXHRcdFx0aWYgKGRvbmVuZXNzX3R5cGUgPT09ICdkZWxldGUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2RlbGV0aW5nX3NlY3Rpb25faSc7XG5cdFx0XHRcdHRhZ19zZWN0aW9uID0gJ2JlaW5nX2RlbGV0ZWQnO1xuXHRcdFx0fSBlbHNlIGlmIChkb25lbmVzc190eXBlID09PSAnYXJjaGl2ZScpIHtcblx0XHRcdFx0dGFnX2RpbmcgPSAnbG9hZGluZ19zZWN0aW9uX2knO1xuXHRcdFx0XHR0YWdfc2VjdGlvbiA9ICdiZWluZ19hcmNoaXZlZCc7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChvbmdvaW5nX29yX2RvbmUgPT09ICdkb25lJykge1xuXHRcdFx0ZGluZ190eXBlID0gJ3N1Y2Nlc3MnO1xuXHRcdFx0ZGluZ19hdXRvaGlkZSA9IGZhbHNlO1xuXHRcdFx0aWYgKGRvbmVuZXNzX3R5cGUgPT09ICdkZWxldGUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2RvbmVfZGVsZXRpbmdfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYWxyZWFkeV9kZWxldGVkJztcblx0XHRcdH0gZWxzZSBpZiAoZG9uZW5lc3NfdHlwZSA9PT0gJ2FyY2hpdmUnKSB7XG5cdFx0XHRcdHRhZ19kaW5nID0gJ2RvbmVfc2VjdGlvbl9pJztcblx0XHRcdFx0dGFnX3NlY3Rpb24gPSAnYWxyZWFkeV9hcmNoaXZlZCc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IGFjdGlvbnMgPSB7XG5cdFx0XHRkaW5nOiAoKSA9PiB7XG5cdFx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IG1lc3NhZ2UodGFnX2RpbmcsIFtzZWN0aW9uX251bWJlci50b1N0cmluZygpLCB0b10pLFxuXHRcdFx0XHRcdFx0Y2xvc2U6ICFkaW5nX2F1dG9oaWRlLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IGRpbmdfYXV0b2hpZGUgPyAzMDAwIDogLTEsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRkaW5nX3R5cGVcblx0XHRcdFx0KTtcblx0XHRcdH0sXG5cdFx0XHRzZWN0aW9uX2xpbms6ICgpID0+IHtcblx0XHRcdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuLW9yZGVyLSR7c2VjdGlvbl9udW1iZXJ9YCk7XG5cdFx0XHRcdGNvbnN0IHBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRcdFx0XHRmb3IgKGxldCBfaSA9IDE7IF9pIDwgcG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggLSAyOyBfaSsrKSB7XG5cdFx0XHRcdFx0cG5vZGUuY2hpbGROb2Rlc1tfaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRub2RlLmlubmVySFRNTCA9IG1lc3NhZ2UodGFnX3NlY3Rpb24pO1xuXHRcdFx0XHRub2RlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblx0XHRcdFx0bm9kZS5zdHlsZS5jb2xvciA9ICdyZ2IoMCAwIDAvLjUpJztcblx0XHRcdH0sXG5cdFx0fTtcblx0XHRyZXR1cm4gYWN0aW9ucztcblx0fTtcblx0Y29uc3QgZGVsZXRlX3NlY3Rpb25fY29yZSA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCBhY3R1YWxfc2VjdGlvbl9udW1iZXIgPSBhY3R1YWxfc2VjdGlvbihzZWN0aW9uX251bWJlcik7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdvbmdvaW5nJykuZGluZygpO1xuXHRcdGV4cG9zZS5kZWxldGVfc2VjdGlvbihcblx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdGFjdHVhbF9zZWN0aW9uX251bWJlcixcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdkb25lJykuZGluZygpO1xuXHRcdFx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdkZWxldGUnLCAnJywgJ2RvbmUnKS5zZWN0aW9uX2xpbmsoKTtcblx0XHRcdFx0bm9taW5hbF9zZWN0aW9uc1tzZWN0aW9uX251bWJlcl0gPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGRlbF9zdW0gfHwgbWVzc2FnZSgnZGVsZXRlX3N1bW1hcnknKVxuXHRcdCk7XG5cdH07XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuZGVsZXRlX3NlY3Rpb24gPSAoc2VjdGlvbl9udW1iZXIsIF9ub21pbmFsKSA9PiB7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnZGVsZXRlJywgJycsICdvbmdvaW5nJykuc2VjdGlvbl9saW5rKCk7XG5cdFx0ZGVsZXRlX3NlY3Rpb25fY29yZShzZWN0aW9uX251bWJlciwgX25vbWluYWwpO1xuXHR9O1xuXHRjb25zdCBhcmNoaXZlX3NlY3Rpb25fY29yZSA9IChzZWN0aW9uX251bWJlciwgX25vbWluYWwpID0+IHtcblx0XHRjb25zdCBhY3R1YWxfc2VjdGlvbl9udW1iZXIgPSBhY3R1YWxfc2VjdGlvbihzZWN0aW9uX251bWJlcik7XG5cdFx0Y29uc3QgdG8gPSB3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKTtcblx0XHRyZXBvcnRfZG9uZW5lc3NfdWkoX25vbWluYWwsICdhcmNoaXZlJywgdG8sICdvbmdvaW5nJykuZGluZygpO1xuXHRcdGV4cG9zZS5hcmNoaXZlX3NlY3Rpb24oXG5cdFx0XHRtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHRhY3R1YWxfc2VjdGlvbl9udW1iZXIsXG5cdFx0XHR0byxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnZG9uZScpLmRpbmcoKTtcblx0XHRcdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnZG9uZScpLnNlY3Rpb25fbGluaygpO1xuXHRcdFx0XHRub21pbmFsX3NlY3Rpb25zW3NlY3Rpb25fbnVtYmVyXSA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0YXJjX3N1bSB8fCBtZXNzYWdlKCdhcmNoaXZlX3N1bW1hcnknKVxuXHRcdCk7XG5cdH07XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuYXJjaGl2ZV9zZWN0aW9uID0gKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCkgPT4ge1xuXHRcdGNvbnN0IHRvID0gd2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJyk7XG5cdFx0cmVwb3J0X2RvbmVuZXNzX3VpKF9ub21pbmFsLCAnYXJjaGl2ZScsIHRvLCAnb25nb2luZycpLnNlY3Rpb25fbGluaygpO1xuXHRcdGFyY2hpdmVfc2VjdGlvbl9jb3JlKHNlY3Rpb25fbnVtYmVyLCBfbm9taW5hbCk7XG5cdH07XG5cdHdpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSA9IChub3RpY2VfdGFnX25hbWUpID0+IHtcblx0XHQvLyBhY3JvbnltIHNjaGVtZTogcmVmZXIgdG8gcXdlcnR5IGtleWJvYXJkIGxheW91dC4gKHA9OSlcblx0XHRjb25zdCBub3RpY2VfdGFnX2RpY3Rpb25hcnkgPSB7XG5cdFx0XHRwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZTogWydwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZSddLFxuXHRcdFx0b3RoZXJzX3RhbGtfZWxhYm9yYXRlOiBbJ290aGVyc190YWxrX2VsYWJvcmF0ZSddLFxuXHRcdFx0ZW5hYmxlX29uX2dlbmVyaWNfcGFnZTogWydlbmFibGVfb25fZ2VuZXJpY19wYWdlJ10sXG5cdFx0XHRwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlOiBbXG5cdFx0XHRcdCdwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9tYWluX3NwYWNlJyxcblx0XHRcdFx0J3dhcm5pbmcnLFxuXHRcdFx0XHQnbG9uZycsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRbc2FuaXRpemVfaHRtbCh3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSldLFxuXHRcdFx0XSxcblx0XHRcdHByb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX3NhbWVfcGFnZTogW1xuXHRcdFx0XHQncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlJyxcblx0XHRcdFx0J3dhcm5pbmcnLFxuXHRcdFx0XHQnbG9uZycsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRbc2FuaXRpemVfaHRtbCh3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSldLFxuXHRcdFx0XSxcblx0XHRcdHBhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGU6IFsncGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZSddLFxuXHRcdH07XG5cdFx0Y29uc3Qgbm90aWNlX3NldCA9IG5vdGljZV90YWdfZGljdGlvbmFyeVtub3RpY2VfdGFnX25hbWVdIHx8IGZhbHNlO1xuXHRcdGlmIChub3RpY2Vfc2V0ICE9PSBmYWxzZSkge1xuXHRcdFx0Y29uc3QgW250YWcsIG50eXBlLCBudHRsLCBucGVyc2lzdCwgbnN1YnN0XSA9IG5vdGljZV9zZXQ7XG5cdFx0XHRjb25zdCB0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRub2RlOiAkKCc8c3Bhbj4nKS5hcHBlbmQobWVzc2FnZShudGFnLCBuc3Vic3QpKS5nZXQoMCksXG5cdFx0XHRcdFx0Y2xvc2U6IG50dGwgPT09ICdsb25nJyxcblx0XHRcdFx0XHRkdXJhdGlvbjogbnR0bCA9PT0gJ2xvbmcnID8gLTEgOiBudHRsLFxuXHRcdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChucGVyc2lzdCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG50eXBlXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0Ly8gcmVhbCBkZWFsIGhlcmVcblx0Ly8gaW50ZXJmYWNlIGluamVjdGlvbiAtIHByZXBhcmVcblx0bGV0IGkgPSAwO1xuXHRsZXQgaiA9IDA7XG5cdGxldCBlbGU7XG5cdGxldCBub21pbmFsO1xuXHRsZXQgYWN0dWFsO1xuXHRjb25zdCBwaXBlX2h0bWwgPSAnPHNwYW4gY2xhc3M9XCJtdy1lZGl0c2VjdGlvbi1kaXZpZGVyXCI+IHwgPC9zcGFuPic7XG5cdGNvbnN0IHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9pbmhpYml0ID1cblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ3NlYy1kZWwnKSA9PT0gJzAnIHx8IHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnZGF0YS1pbml0JykgPT09ICcwJztcblx0Y29uc3Qgc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9pbmhpYml0ID1cblx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ3NlYy1hcmMnKSA9PT0gJzAnIHx8IHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnZGF0YS1pbml0JykgPT09ICcwJztcblx0bGV0IHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9odG1sO1xuXHRsZXQgc2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9odG1sO1xuXHRjb25zdCBzZWN0aW9uX2lkX3NwYW5faHRtbCA9XG5cdFx0JzxzcGFuIGNsYXNzPVwiZWFzeS1hcmNoaXZlLXNlY3Rpb24taWQtc3BhbiBlYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuLW9yZGVyLUBAXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5zZWN0aW9uPC9zcGFuPic7XG5cdGxldCBmb290ZXJfaW5mb19lbGU7XG5cdGxldCBwb3NpdGlvbl9vZl9pbnNlcnRpb247XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vdGVyLWluZm8nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZS1pbmZvJykpIHtcblx0XHRmb290ZXJfaW5mb19lbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vdGVyLWluZm8nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZS1pbmZvJylbMF07XG5cdFx0cG9zaXRpb25fb2ZfaW5zZXJ0aW9uID0gJ2FmdGVyYmVnaW4nO1xuXHR9IGVsc2Uge1xuXHRcdGZvb3Rlcl9pbmZvX2VsZSA9IHtcblx0XHRcdGluc2VydEFkamFjZW50SFRNTDogKCkgPT4ge30sXG5cdFx0fTtcblx0XHRwb3NpdGlvbl9vZl9pbnNlcnRpb24gPSAnJztcblx0fVxuXHQvLyAuLi4gaW50ZXJmYWNlIGluamVjdGlvbiAtIGxvZ2ljXG5cdGNvbnN0IGlzX2luX2JsYWNrbGlzdCA9IChibGFja2xpc3QpID0+IHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYmxhY2tsaXN0KSB7XG5cdFx0XHRpZiAoZWxlbWVudC50ZXN0KG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0aWYgKHdpbmRvdy5lYXN5X2FyY2hpdmUub25fYXJ0aWNsZSB8fCB3aW5kb3cuZWFzeV9hcmNoaXZlLm9uX2hpc3RfdmVyc2lvbikge1xuXHRcdC8vIGluc2VydCBubyBpbnRlcmZhY2Ugb24gYW4gYXJ0aWNsZSBwYWdlIG9yIGEgaGlzdG9yeSB2ZXJzaW9uLlxuXHR9IGVsc2UgaWYgKGlzX2luX2JsYWNrbGlzdCh3aW5kb3cuZWFzeV9hcmNoaXZlLm5ldmVyX2VuYWJsZV9vbl90aGVzZV9wYWdlc19yZWdleCkpIHtcblx0XHQvLyBpbnNlcnQgbm8gaW50ZXJmYWNlIGlmIHRoZSBwYWdlIG5hbWUgaXMgYmxhY2tsaXN0ZWQuXG5cdH0gZWxzZSBpZiAoaXNfaW5fYmxhY2tsaXN0KHdpbmRvdy5lYXN5X2FyY2hpdmUuZGlzX3N1cHBvcnRfdGhlc2VfcGFnZXNfcmVnZXgpKSB7XG5cdFx0Ly8gaW5zZXJ0IG5vdCBzdXBwb3J0ZWQgbm90aWNlIGlmIHRoZSBwYWdlIG5hbWUgaW5kaWNhdGVzIHRoYXQgaXQgaXMgbm90IHN1cHBvcnRlZC5cblx0XHRmb290ZXJfaW5mb19lbGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuXHRcdFx0cG9zaXRpb25fb2ZfaW5zZXJ0aW9uLFxuXHRcdFx0YDxkaXYgaWQ9XCJlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZVwiPjxhIHN0eWxlPVwiY29sb3I6aW5oZXJpdFwiIGhyZWY9XCJqYXZhc2NyaXB0OndpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSgncGFnZV9ub3Rfc3VwcG9ydGVkX2VsYWJvcmF0ZScpXCI+JHttZXNzYWdlKFxuXHRcdFx0XHQncGFnZV9ub3Rfc3VwcG9ydGVkJ1xuXHRcdFx0KX08L2E+PC9kaXY+YFxuXHRcdCk7XG5cdH0gZWxzZSBpZiAobXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpID09PSB3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSkge1xuXHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSgncHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fc2FtZV9wYWdlJyk7XG5cdH0gZWxzZSBpZiAod2luZG93LmVhc3lfYXJjaGl2ZS5oYXNfdGVtcGxhdGUgJiYgIXdpbmRvdy5lYXN5X2FyY2hpdmUub3RoZXJzX3VzZXJfdGFsaykge1xuXHRcdC8vIGFueSBwYWdlIHRoYXQgaGFzIHRlbXBsYXRlIHRoYXQncyBub3Qgb3RoZXJzJyB0YWxrIHBhZ2UuIGZ1bmN0aW9uIG5vcm1hbGx5LlxuXHRcdC8vICEhIHRoZSBhcmNoaXZlIGxvY2F0aW9uIGluIG1haW4gc3BhY2UgYW5kIG5lZWRzIGF0dGVudGlvbiAhIVxuXHRcdGlmICgvLis6LisvLnRlc3Qod2luZG93LmVhc3lfYXJjaGl2ZS5zZXR0aW5ncy5maW5kKCdhcmMtbG9jJykpICE9PSB0cnVlKSB7XG5cdFx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLmVsYWJvcmF0ZV9ub3RpY2UoJ3Byb2JsZW1fd2l0aF9hcmNoaXZlX2xvY2F0aW9uX21haW5fc3BhY2UnKTtcblx0XHR9XG5cdFx0Y29uc3Qgbm9ybWFsX2Z1bmN0aW9uX2luamVjdF9pbnRlcmZhY2UgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBlZGl0U2VjdGlvbkNvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXctZWRpdHNlY3Rpb24nKTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBlZGl0U2VjdGlvbkNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZWxlID0gZWRpdFNlY3Rpb25Db2xsZWN0aW9uW2ldO1xuXHRcdFx0XHRjb25zdCB2ZSA9IC9bJj9ddmVhY3Rpb249ZWRpdC8udGVzdChlbGUuY2hpbGROb2Rlc1sxXS5ocmVmKTtcblx0XHRcdFx0Y29uc3QgY2hpbGRfbm9kZV9udW1iZXIgPSB2ZSA/IDMgOiAxO1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0ZWxlLnBhcmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaDInICYmXG5cdFx0XHRcdFx0ZWxlLnBhcmVudE5vZGUuaWQgIT09ICdmaXJzdEhlYWRpbmcnICYmXG5cdFx0XHRcdFx0ZGVjb2RlVVJJQ29tcG9uZW50KGVsZS5jaGlsZE5vZGVzW2NoaWxkX25vZGVfbnVtYmVyXS5ocmVmLnNwbGl0KC9bJj9ddGl0bGU9LylbMV0uc3BsaXQoJyYnKVswXSkgPT09XG5cdFx0XHRcdFx0XHRtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0YWN0dWFsID0gTnVtYmVyLnBhcnNlSW50KFxuXHRcdFx0XHRcdFx0ZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmhyZWYuc3BsaXQoL1smP11zZWN0aW9uPS8pWzFdLnNwbGl0KCcmJylbMF0sXG5cdFx0XHRcdFx0XHQxMFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0bm9taW5hbCA9IGkgLSBqICsgMTtcblx0XHRcdFx0XHRzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaHRtbCA9IHNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9pbmhpYml0XG5cdFx0XHRcdFx0XHQ/ICcnXG5cdFx0XHRcdFx0XHQ6IGAke3BpcGVfaHRtbH08YSBocmVmPVwiamF2YXNjcmlwdDp3aW5kb3cuZWFzeV9hcmNoaXZlLmRlbGV0ZV9zZWN0aW9uKCR7YWN0dWFsfSwgJHtub21pbmFsfSlcIj4ke21lc3NhZ2UoXG5cdFx0XHRcdFx0XHRcdFx0J2RlbGV0ZSdcblx0XHRcdFx0XHRcdFx0KX08L2E+YDtcblx0XHRcdFx0XHRzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2h0bWwgPSBzZWN0aW9uX2FyY2hpdmVfaW50ZXJmYWNlX2luaGliaXRcblx0XHRcdFx0XHRcdD8gJydcblx0XHRcdFx0XHRcdDogYCR7cGlwZV9odG1sfTxhIGhyZWY9XCJqYXZhc2NyaXB0OndpbmRvdy5lYXN5X2FyY2hpdmUuYXJjaGl2ZV9zZWN0aW9uKCR7YWN0dWFsfSwgJHtub21pbmFsfSlcIj4ke21lc3NhZ2UoXG5cdFx0XHRcdFx0XHRcdFx0J2FyY2hpdmUnXG5cdFx0XHRcdFx0XHRcdCl9PC9hPmA7XG5cdFx0XHRcdFx0ZWxlLmNoaWxkTm9kZXNbY2hpbGRfbm9kZV9udW1iZXJdLmluc2VydEFkamFjZW50SFRNTChcblx0XHRcdFx0XHRcdCdhZnRlcmVuZCcsXG5cdFx0XHRcdFx0XHRzZWN0aW9uX2RlbGV0ZV9pbnRlcmZhY2VfaHRtbCArXG5cdFx0XHRcdFx0XHRcdHNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaHRtbCArXG5cdFx0XHRcdFx0XHRcdHNlY3Rpb25faWRfc3Bhbl9odG1sLnJlcGxhY2UoJ0BAJywgbm9taW5hbC50b1N0cmluZygpKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aisrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR3aW5kb3cuZWFzeV9hcmNoaXZlLnNlY3Rpb25fY291bnQgPSBpIC0gaiArIDE7XG5cdFx0XHRmb290ZXJfaW5mb19lbGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuXHRcdFx0XHRwb3NpdGlvbl9vZl9pbnNlcnRpb24sXG5cdFx0XHRcdGA8ZGl2IGlkPVwiZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZVwiPiR7bWVzc2FnZSgnc3VwcG9ydHMnKX0ke21lc3NhZ2UoJ2xlZnRfcGFyX3NwbGl0Jyl9JHttZXNzYWdlKFxuXHRcdFx0XHRcdCdhcmNoaXZlX3BhdGhfY29sb25fc3BsaXQnXG5cdFx0XHRcdCl9PGEgaHJlZj1cIi93aWtpLyR7c2FuaXRpemVfaHRtbCh3aW5kb3cuZWFzeV9hcmNoaXZlLnNldHRpbmdzLmZpbmQoJ2FyYy1sb2MnKSl9XCI+JHtzYW5pdGl6ZV9odG1sKFxuXHRcdFx0XHRcdHdpbmRvdy5lYXN5X2FyY2hpdmUuc2V0dGluZ3MuZmluZCgnYXJjLWxvYycpXG5cdFx0XHRcdCl9PC9hPiR7bWVzc2FnZSgncmlnaHRfcGFyJyl9JHttZXNzYWdlKCdwZXJpb2QnKX08L2Rpdj5gXG5cdFx0XHQpO1xuXHRcdH07XG5cdFx0bm9ybWFsX2Z1bmN0aW9uX2luamVjdF9pbnRlcmZhY2UoKTtcblx0fSBlbHNlIGlmICh3aW5kb3cuZWFzeV9hcmNoaXZlLm90aGVyc191c2VyX3RhbGsgPT09IHRydWUpIHtcblx0XHQvLyBvdGhlcnMgdXNlciB0YWxrLlxuXHRcdGZvb3Rlcl9pbmZvX2VsZS5pbnNlcnRBZGphY2VudEhUTUwoXG5cdFx0XHRwb3NpdGlvbl9vZl9pbnNlcnRpb24sXG5cdFx0XHRgPGRpdiBpZD1cImVhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlXCI+PGEgc3R5bGU9XCJjb2xvcjppbmhlcml0XCIgaHJlZj1cImphdmFzY3JpcHQ6d2luZG93LmVhc3lfYXJjaGl2ZS5lbGFib3JhdGVfbm90aWNlKCdvdGhlcnNfdGFsa19lbGFib3JhdGUnKVwiPiR7bWVzc2FnZShcblx0XHRcdFx0J290aGVyc19wYWdlJ1xuXHRcdFx0KX08L2E+PC9kaXY+YFxuXHRcdCk7XG5cdH0gZWxzZSBpZiAod2luZG93LmVhc3lfYXJjaGl2ZS5teV91c2VyX3RhbGsgPT09IGZhbHNlKSB7XG5cdFx0Ly8gYSBnZW5lcmljIHBhZ2UgdGhhdCBkaWQgbm90IGVuYWJsZSBlYXN5IGFyY2hpdmUuXG5cdFx0Zm9vdGVyX2luZm9fZWxlLmluc2VydEFkamFjZW50SFRNTChcblx0XHRcdHBvc2l0aW9uX29mX2luc2VydGlvbixcblx0XHRcdGA8ZGl2IGlkPVwiZWFzeV9hcmNoaXZlX2VuYWJsZV9ub3RpY2VcIj48YSBzdHlsZT1cImNvbG9yOmluaGVyaXRcIiBocmVmPVwiamF2YXNjcmlwdDp3aW5kb3cuZWFzeV9hcmNoaXZlLmVsYWJvcmF0ZV9ub3RpY2UoJ2VuYWJsZV9vbl9nZW5lcmljX3BhZ2UnKVwiPiR7bWVzc2FnZShcblx0XHRcdFx0J3RvX2VuYWJsZSdcblx0XHRcdCl9PC9hPjwvZGl2PmBcblx0XHQpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIHRoZW4gYXNzZXJ0OiAod2luZG93LmVhc3lfYXJjaGl2ZS5teV91c2VyX3RhbGsgPT09IHRydWUpLCAod2luZG93LmVhc3lfYXJjaGl2ZS5oYXNfdGVtcGxhdGUgPT09IGZhbHNlKS5cblx0XHQvLyBteSB1c2VyIHRhbGsgLS0gaW5zdGFsbGVkIGVhc3kgYXJjaGl2ZSBidXQgbGFja2luZyB0ZW1wbGF0ZS5cblx0XHRmb290ZXJfaW5mb19lbGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuXHRcdFx0cG9zaXRpb25fb2ZfaW5zZXJ0aW9uLFxuXHRcdFx0YDxkaXYgaWQ9XCJlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZVwiPjxhIHN0eWxlPVwiY29sb3I6aW5oZXJpdFwiIGhyZWY9XCJqYXZhc2NyaXB0OndpbmRvdy5lYXN5X2FyY2hpdmUuZWxhYm9yYXRlX25vdGljZSgncGxlYXNlX2VuYWJsZV9lbGFib3JhdGUnKVwiPiR7bWVzc2FnZShcblx0XHRcdFx0J3BsZWFzZV9lbmFibGUnXG5cdFx0XHQpfTwvYT48L2Rpdj5gXG5cdFx0KTtcblx0fVxuXHRpZiAobXcuY29uZmlnLmdldCgnc2tpbicpID09PSAnY2l0aXplbicpIHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHQkYm9keVxuXHRcdFx0LmZpbmQoJyNlYXN5X2FyY2hpdmVfZW5hYmxlX25vdGljZSwgI2Vhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UsICNlYXN5X2FyY2hpdmVfc3RvcF9ub3RpY2UnKVxuXHRcdFx0LnJlcGxhY2VXaXRoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Y29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gJCgnPHNlY3Rpb24+JykuYWRkQ2xhc3MoJ3BhZ2UtaW5mb19faXRlbScpLmF0dHIoJ2lkJywgJHRoaXMuYXR0cignaWQnKSkuaHRtbCgkdGhpcy5odG1sKCkpO1xuXHRcdFx0fSk7XG5cdH1cblx0aWYgKFxuXHRcdFsndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJywgJ2dvbmdiaSddLmluY2x1ZGVzKG13LmNvbmZpZy5nZXQoJ3NraW4nKSkgfHxcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpXG5cdCkge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5XG5cdFx0XHQuZmluZCgnI2Vhc3lfYXJjaGl2ZV9lbmFibGVfbm90aWNlLCAjZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZSwgI2Vhc3lfYXJjaGl2ZV9zdG9wX25vdGljZScpXG5cdFx0XHQucmVwbGFjZVdpdGgoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRjb25zdCAkdGhpcyA9ICQodGhpcyk7XG5cdFx0XHRcdHJldHVybiAkKCc8bGk+JykuYXR0cignaWQnLCAkdGhpcy5hdHRyKCdpZCcpKS5odG1sKCR0aGlzLmh0bWwoKSk7XG5cdFx0XHR9KTtcblx0fVxufSkoKTtcbiJdLAogICJtYXBwaW5n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Q0FBQyxFQUFFQyxLQUFLSCxNQUFNRyxLQUFLLENBQUM7SUFDaEUsQ0FBQztFQUNIO0FBQ0QsR0FBRzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJlYXN5X2FyY2hpdmVfbGFuZyIsICJ3aW5kb3ciLCAiZWFzeV9hcmNoaXZlIiwgImxhbmciLCAiZGVsZXRlIiwgImxvY2FsaXplIiwgImVuIiwgImFyY2hpdmUiLCAic3VwcG9ydHMiLCAib3RoZXJzX3BhZ2UiLCAidG9fZW5hYmxlIiwgImVuYWJsZV9vbl9nZW5lcmljX3BhZ2UiLCAicGxlYXNlX2VuYWJsZSIsICJwbGVhc2VfZW5hYmxlX2VsYWJvcmF0ZSIsICJsZWZ0X3Bhcl9zcGxpdCIsICJ6aCIsICJyaWdodF9wYXIiLCAicGVyaW9kIiwgImFyY2hpdmVfcGF0aF9jb2xvbl9zcGxpdCIsICJsb2FkaW5nX3NlY3Rpb25faSIsICJkZWxldGluZ19zZWN0aW9uX2kiLCAiZG9uZV9zZWN0aW9uX2kiLCAiZG9uZV9kZWxldGluZ19zZWN0aW9uX2kiLCAiYmVpbmdfYXJjaGl2ZWQiLCAiYmVpbmdfZGVsZXRlZCIsICJhbHJlYWR5X2FyY2hpdmVkIiwgImFscmVhZHlfZGVsZXRlZCIsICJvdGhlcnNfdGFsa19lbGFib3JhdGUiLCAicGFnZV9ub3Rfc3VwcG9ydGVkIiwgInBhZ2Vfbm90X3N1cHBvcnRlZF9lbGFib3JhdGUiLCAicHJvYmxlbV93aXRoX2FyY2hpdmVfbG9jYXRpb25fbWFpbl9zcGFjZSIsICJwcm9ibGVtX3dpdGhfYXJjaGl2ZV9sb2NhdGlvbl9zYW1lX3BhZ2UiLCAiYXJjaGl2ZV9zdW1tYXJ5IiwgImRlbGV0ZV9zdW1tYXJ5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZWFzeUFyY2hpdmUiLCAiX3dpbmRvdyIsICJfd2luZG93JGVhc3lfYXJjaGl2ZSIsICJfd2luZG93JGVhc3lfYXJjaGl2ZTIiLCAiX3dpbmRvdyRlYXN5X2FyY2hpdmUzIiwgIl93aW5kb3ckZWFzeV9hcmNoaXZlJCIsICJfd2luZG93JGVhc3lfYXJjaGl2ZSQyIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiUGFyZV9zdHIiLCAiY29uc3RydWN0b3IiLCAicGFyZV9zdHJpbmciLCAic3RyIiwgImxlZnQiLCAiZGVsaW0iLCAicmlnaHQiLCAiU3RyaW5nIiwgImxlbmd0aCIsICJ0ZXN0IiwgInNsaWNlIiwgImluY2x1ZGVzIiwgIlN5bnRheEVycm9yIiwgImZpbmQiLCAibG9va3VwX2tleSIsICJzcGxpdCIsICJleHBvc2UiLCAiYXN5bmNQb3N0IiwgInBhcmFtIiwgImNhbGxiYWNrIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgInBvc3RXaXRoVG9rZW4iLCAidGhlbiIsICJnZXRQYWdlIiwgInRpdGxlIiwgImFjdGlvbiIsICJwcm9wIiwgInJ2cHJvcCIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aXRsZXMiLCAiZ2V0UGFnZVNlY3Rpb24iLCAic2VjdGlvbiIsICJydnNlY3Rpb24iLCAicGlja1BhZ2VDb250ZW50IiwgImRhdGEiLCAicXVlcnkiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgImNvbnRlbnQiLCAidGVsbFBhZ2VFeGlzdCIsICJtaXNzaW5nIiwgImVkaXQiLCAidGV4dCIsICJzdW1tYXJ5IiwgImVkaXRBcHBlbmQiLCAicGFnZSIsICJhZGRlZF9jb250ZW50IiwgIm9yaWdpbmFsX2NvbnRlbnQiLCAiYXJjaGl2ZVNlY3Rpb24iLCAidGFyZ2V0VGl0bGUiLCAidG9TdHJpbmciLCAiZGVsZXRlU2VjdGlvbiIsICJhcmNoaXZlX3NlY3Rpb24iLCAiZGVsZXRlX3NlY3Rpb24iLCAic2V0dGluZ3Nfc3RyaW5nIiwgInNldHRpbmdzIiwgIm15X3VzZXJfdGFsayIsICJuZXZlcl9lbmFibGVfb25fdGhlc2VfcGFnZXNfcmVnZXgiLCAiZGlzX3N1cHBvcnRfdGhlc2VfcGFnZXNfcmVnZXgiLCAic2V0dGluZ3Nfc3Bhbl9jb2xsZWN0aW9uIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAic2V0dGluZ3Nfc3BhbiIsICJpbm5lckhUTUwiLCAib25fdXNlcl90YWxrIiwgInBhZ2VfbmFtZSIsICJqb2luIiwgInVzZXJfbmFtZSIsICJoYXNfdGVtcGxhdGUiLCAib3RoZXJzX3VzZXJfdGFsayIsICJvbl9hcnRpY2xlIiwgIm9uX2hpc3RfdmVyc2lvbiIsICJhcmNfc3VtIiwgInVzZXJfY3VzdG9tX2FyY2hpdmVfc3VtbWFyeSIsICJkZWxfc3VtIiwgInVzZXJfY3VzdG9tX2RlbGV0ZV9zdW1tYXJ5IiwgInNhbml0aXplX2h0bWwiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAibWVzc2FnZSIsICJ0YWciLCAicGFyYV9saXN0IiwgImhhc191bmZ1bGZpbGxlZF9wYXJhIiwgIl9pIiwgInNlYXJjaCIsICJub21pbmFsX3NlY3Rpb25zIiwgImNvdW50IiwgImFyciIsICJBcnJheSIsICJmcm9tIiwgInNlY3Rpb25fY291bnQiLCAiYWN0dWFsX3NlY3Rpb24iLCAibm9taW5hbF9zZWN0aW9uX251bWJlciIsICJsZXNzIiwgInJlcG9ydF9kb25lbmVzc191aSIsICJzZWN0aW9uX251bWJlciIsICJkb25lbmVzc190eXBlIiwgInRvIiwgIm9uZ29pbmdfb3JfZG9uZSIsICJ0YWdfZGluZyIsICJ0YWdfc2VjdGlvbiIsICJkaW5nX3R5cGUiLCAiZGluZ19hdXRvaGlkZSIsICJhY3Rpb25zIiwgImRpbmciLCAidG9hc3RpZnkiLCAiY2xvc2UiLCAiZHVyYXRpb24iLCAic2VjdGlvbl9saW5rIiwgIm5vZGUiLCAicXVlcnlTZWxlY3RvciIsICJwbm9kZSIsICJwYXJlbnROb2RlIiwgImNoaWxkTm9kZXMiLCAic3R5bGUiLCAiZGlzcGxheSIsICJjb2xvciIsICJkZWxldGVfc2VjdGlvbl9jb3JlIiwgIl9ub21pbmFsIiwgImFjdHVhbF9zZWN0aW9uX251bWJlciIsICJhcmNoaXZlX3NlY3Rpb25fY29yZSIsICJlbGFib3JhdGVfbm90aWNlIiwgIm5vdGljZV90YWdfbmFtZSIsICJub3RpY2VfdGFnX2RpY3Rpb25hcnkiLCAibm90aWNlX3NldCIsICJudGFnIiwgIm50eXBlIiwgIm50dGwiLCAibnBlcnNpc3QiLCAibnN1YnN0IiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiJCIsICJhcHBlbmQiLCAib25DbGljayIsICJoaWRlVG9hc3QiLCAiaSIsICJqIiwgImVsZSIsICJub21pbmFsIiwgImFjdHVhbCIsICJwaXBlX2h0bWwiLCAic2VjdGlvbl9kZWxldGVfaW50ZXJmYWNlX2luaGliaXQiLCAic2VjdGlvbl9hcmNoaXZlX2ludGVyZmFjZV9pbmhpYml0IiwgInNlY3Rpb25fZGVsZXRlX2ludGVyZmFjZV9odG1sIiwgInNlY3Rpb25fYXJjaGl2ZV9pbnRlcmZhY2VfaHRtbCIsICJzZWN0aW9uX2lkX3NwYW5faHRtbCIsICJmb290ZXJfaW5mb19lbGUiLCAicG9zaXRpb25fb2ZfaW5zZXJ0aW9uIiwgImluc2VydEFkamFjZW50SFRNTCIsICJpc19pbl9ibGFja2xpc3QiLCAiYmxhY2tsaXN0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgImVyciIsICJlIiwgImYiLCAibm9ybWFsX2Z1bmN0aW9uX2luamVjdF9pbnRlcmZhY2UiLCAiZWRpdFNlY3Rpb25Db2xsZWN0aW9uIiwgInZlIiwgImhyZWYiLCAiY2hpbGRfbm9kZV9udW1iZXIiLCAidGFnTmFtZSIsICJ0b0xvd2VyQ2FzZSIsICJpZCIsICJkZWNvZGVVUklDb21wb25lbnQiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgIiRib2R5IiwgInJlcGxhY2VXaXRoIiwgIiR0aGlzIiwgImFkZENsYXNzIiwgImF0dHIiLCAiaHRtbCJdCn0K

})();

/* </nowiki> */
