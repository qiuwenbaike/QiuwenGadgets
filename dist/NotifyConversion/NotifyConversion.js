/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/NotifyConversion}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license2=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-preserve-variant.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/NotifyConversion/modules/preserveVariant.ts}
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

// dist/NotifyConversion/NotifyConversion.js
//! src/NotifyConversion/modules/constant.ts
var _ref;
var GADGET_NAME = "ext.gadget.NotifyConversion";
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
var wgUserName = mw.config.get("wgUserName") || "";
var wgUserGroups = mw.config.get("wgUserGroups") || [];
var wgUserVariant = mw.config.get("wgUserVariant");
var GOOD_VARIANTS = ["zh-cn", "zh-my", "zh-sg", "zh-hk", "zh-mo", "zh-tw"];
//! src/NotifyConversion/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    dialogTitle: (0, import_ext_gadget.localize)({
      en: "For your better user experience",
      "zh-hans": "我们希望提供更好的阅读体验",
      "zh-hant": "我們希望提供更好的閱讀體驗"
    }),
    dialogDesc: (0, import_ext_gadget.localize)({
      en: "Which Chinese variants do you prefer?",
      "zh-hans": "为避免内容显示简繁混杂，请选择您偏好的中文变体。",
      "zh-hant": "為避免內容顯示簡繁混雜，請選擇您偏好的中文變體。"
    }),
    dialogDescExtend1: (0, import_ext_gadget.localize)({
      en: "To meet needs of readers, Qiuwen Baike utilizes a conversion mechanism for Chinese language variants.",
      "zh-hans": "为满足各地中文用户需求，求闻百科采用自动转换技术，提供不同中文变体。",
      "zh-hant": "為滿足各地中文使用者需求，求聞百科採用自動轉換技術，提供不同中文變體。"
    }),
    dialogDescExtend2: (0, import_ext_gadget.localize)({
      en: "For your better experience, we would appreciate it if you select your preferred Chinese language variant. We apologize for any inconvenience.",
      "zh-hans": "出于阅读体验之考量，我们建议您可以选择所偏好的中文语言变体。给您带来不便，敬请谅解！",
      "zh-hant": "出於閱讀體驗之考量，我們建議您可以選擇所偏好的中文語言變體。給您帶來不便，敬請諒解！"
    }),
    "variant-zh-cn": (0, import_ext_gadget.localize)({
      en: "Chinese Mainland (Simplified) (中国大陆简体)",
      zh: "中国大陆简体"
    }),
    "variant-zh-hk": (0, import_ext_gadget.localize)({
      en: "Hong Kong, China (Traditional) (中國香港繁體)",
      zh: "中國香港繁體"
    }),
    "variant-zh-mo": (0, import_ext_gadget.localize)({
      en: "Macau, China (Traditional) (中國澳門繁體)",
      zh: "中國澳門繁體"
    }),
    "variant-zh-my": (0, import_ext_gadget.localize)({
      en: "Malaysia (Simplified) (马来西亚简体)",
      zh: "马来西亚简体"
    }),
    "variant-zh-sg": (0, import_ext_gadget.localize)({
      en: "Singapore (Simplified) (马来西亚简体)",
      zh: "新加坡简体"
    }),
    "variant-zh-tw": (0, import_ext_gadget.localize)({
      en: "Taiwan, Province of China (Traditional) (中國臺灣繁體)",
      zh: "中國臺灣繁體"
    }),
    privacyNotice: (0, import_ext_gadget.localize)({
      en: "Your choices will be only stored in your browser only. We will not track your choices.",
      "zh-hans": "您的选择将仅存储在您的浏览器中，我们不会追踪您的选择。",
      "zh-hant": "您的選擇將僅存儲在您的瀏覽器中，我們不會追蹤您的選擇。"
    }),
    confirm: (0, import_ext_gadget.localize)({
      en: "Confirm",
      "zh-hans": "确认",
      "zh-hant": "確認"
    }),
    cancel: (0, import_ext_gadget.localize)({
      en: "cancel",
      zh: "取消"
    }),
    "Are you sure?": (0, import_ext_gadget.localize)({
      en: 'Are you sure to cancel? If you choose "cancel", you may find mixed traditional and simplified Chinese characters, which will affect your user experience.',
      "zh-hans": "您确定要取消吗？取消后，界面可能出现繁简混杂现象，影响用户体验。",
      "zh-hant": "您確定要取消嗎？取消後，介面可能出現繁簡混雜現象，影響使用者體驗。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/NotifyConversion/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var locationHref = location.href;
var api = (0, import_ext_gadget2.initMwApi)("Qiuwen/1.1 (NotifyConversion/2.0; ".concat(mw.config.get("wgWikiID"), ")"));
var isExperiencedUser = () => {
  if (!wgUserName || !wgUserGroups) {
    return false;
  }
  return ["sysop", "senioreditor", "steward", "qiuwen"].some((element) => {
    return wgUserGroups.includes(element);
  }) || SYSTEM_SCRIPT_LIST.includes(wgUserName) || WEBMASTER_LIST.includes(wgUserName);
};
var isLanguageSet = () => {
  if (mw.util.getParamValue("variant") || mw.util.getParamValue("uselang")) {
    return true;
  }
  return false;
};
var isWrongURL = () => {
  if (locationHref.includes("/zh/") || locationHref.includes("/zh-hans/") || locationHref.includes("/zh-hant/")) {
    return true;
  }
  return false;
};
var showDialog = () => {
  const dialogTitleIcon = new OO.ui.IconWidget({
    icon: "language",
    title: getMessage("dialogTitle")
  });
  const dialogTitle = new OO.ui.LabelWidget({
    label: getMessage("dialogTitle")
  });
  const generateButton = (variant) => {
    return new OO.ui.ButtonOptionWidget({
      data: variant,
      label: getMessage("variant-".concat(variant)),
      title: getMessage("variant-".concat(variant))
    });
  };
  const buttonSelect = new OO.ui.ButtonSelectWidget({
    items: [generateButton("zh-cn"), generateButton("zh-hk"), generateButton("zh-tw"), generateButton("zh-sg"), generateButton("zh-my"), generateButton("zh-mo")]
  });
  if (preferredVariant === null) {
    buttonSelect.selectItemByData("zh-cn");
  } else {
    buttonSelect.selectItemByData(preferredVariant);
  }
  const $dialogTitle = $("<span>").addClass("gadget-notify_conversion__title").append(dialogTitleIcon.$element, dialogTitle.$element);
  const $dialogMessage = $("<div>").addClass("gadget-notify_conversion__message").append($("<p>").text(getMessage("dialogDesc")), $("<p>").addClass("gadget-notify_conversion__message_extend").text(getMessage("dialogDescExtend1")), $("<p>").addClass("gadget-notify_conversion__message_extend").text(getMessage("dialogDescExtend2")), buttonSelect.$element.addClass("gadget-notify_conversion__selection"), $("<p>").addClass("gadget-notify_conversion__message_privacy-notice").text(getMessage("privacyNotice")));
  const windowManager = new OO.ui.WindowManager();
  windowManager.$element.appendTo($("body"));
  const messageDialog = new OO.ui.MessageDialog();
  const messageDialogProperty = {
    title: $dialogTitle,
    message: $dialogMessage,
    actions: [{
      action: "confirm",
      flags: ["primary", "progressive"],
      label: $("<b>").text(getMessage("confirm"))
    }, {
      action: "cancel",
      flags: ["safe", "close"],
      label: $("<b>").text(getMessage("cancel"))
    }],
    size: "medium"
  };
  windowManager.addWindows([messageDialog]);
  void windowManager.openWindow(messageDialog, messageDialogProperty);
  messageDialog.getActionProcess = (action) => {
    const clearWindows = (variant) => {
      mw.storage.set(GADGET_NAME, variant || "hide");
      void windowManager.clearWindows();
    };
    return new OO.ui.Process(() => {
      if (action === "confirm") {
        const URL_REGEX = /(\/\/[^/]+\/)([^/]+)(\/)/;
        const selectedItem = buttonSelect.findSelectedItem();
        const variant = selectedItem.getData();
        clearWindows(variant);
        if (mw.config.get("wgUserName")) {
          void api.saveOption("variant", variant).then(() => {
            location.href = locationHref.replace(URL_REGEX, "$1wiki$3");
          });
        } else {
          location.href = locationHref.replace(URL_REGEX, "$1".concat(variant, "$3"));
        }
      } else {
        void OO.ui.confirm(getMessage("Are you sure?")).then((confirmed) => {
          if (confirmed) {
            clearWindows();
          }
        });
      }
    });
  };
};
var preferredVariant = (_ref = mw.config.get("wgUserName") ? mw.user.options.get("variant") : mw.config.get("wgUserVariant")) !== null && _ref !== void 0 ? _ref : null;
var notifyConversion = () => {
  if (!wgUserVariant) {
    return;
  }
  if (isLanguageSet()) {
    return;
  }
  if (isExperiencedUser()) {
    return;
  }
  if (preferredVariant === null || ["zh", "zh-hans", "zh-hant"].includes(preferredVariant) || isWrongURL()) {
    showDialog();
  }
};
//! src/NotifyConversion/modules/preserveVariant.ts
var preserveVariant = () => {
  if (!wgUserVariant || !wgUserVariant.includes("zh-") || !(window.location.pathname.includes("/".concat(wgUserVariant, "/")) && mw.util.getParamValue("variant") !== wgUserVariant)) {
    return;
  }
  $(document).on("keydown mousedown touchstart", "a", function() {
    const self = this;
    const originalHref = $(self).attr("href");
    if (!originalHref) {
      return;
    }
    let uri;
    try {
      uri = new mw.Uri(originalHref);
    } catch {
      return;
    }
    if (!("variant" in uri.query)) {
      if (originalHref.includes("/wiki/")) {
        self.href = "/".concat(wgUserVariant).concat(originalHref.slice(5));
      } else if (originalHref.includes("/index.php?")) {
        self.href = uri.extend({
          variant: wgUserVariant
        }).getRelativePath();
      }
    }
  });
};
//! src/NotifyConversion/NotifyConversion.ts
(() => {
  if (mw.config.get("wgAction") !== "view") {
    return;
  }
  const preferredVariant2 = (mw.storage.get(GADGET_NAME) || "").toString();
  if (!["hide", ...GOOD_VARIANTS].includes(preferredVariant2)) {
    $(notifyConversion);
  } else if (!wgUserName) {
    $(preserveVariant);
  }
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGlmeUNvbnZlcnNpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTm90aWZ5Q29udmVyc2lvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL05vdGlmeUNvbnZlcnNpb24vbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9Ob3RpZnlDb252ZXJzaW9uL21vZHVsZXMvcHJlc2VydmVWYXJpYW50LnRzIiwgInNyYy9Ob3RpZnlDb252ZXJzaW9uL05vdGlmeUNvbnZlcnNpb24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IEdBREdFVF9OQU1FOiBzdHJpbmcgPSAnZXh0LmdhZGdldC5Ob3RpZnlDb252ZXJzaW9uJztcblxuY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5cbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnUWl1V2VuJywgJ1FpdVdlbiBmb3IgQWNjb3VudHMnLCAnUWl1d2VuU29jaWFsTWVkaWEnXTtcblxuY29uc3Qgd2dVc2VyTmFtZTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpIHx8ICcnO1xuY29uc3Qgd2dVc2VyR3JvdXBzOiBzdHJpbmdbXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpIHx8IFtdO1xuY29uc3Qgd2dVc2VyVmFyaWFudDogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKTtcblxuY29uc3QgR09PRF9WQVJJQU5UUzogc3RyaW5nW10gPSBbJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5cbmV4cG9ydCB7R0FER0VUX05BTUUsIFNZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1QsIHdnVXNlck5hbWUsIHdnVXNlckdyb3Vwcywgd2dVc2VyVmFyaWFudCwgR09PRF9WQVJJQU5UU307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGRpYWxvZ1RpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZvciB5b3VyIGJldHRlciB1c2VyIGV4cGVyaWVuY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5oiR5Lus5biM5pyb5o+Q5L6b5pu05aW955qE6ZiF6K+75L2T6aqMJyxcblx0XHRcdCd6aC1oYW50JzogJ+aIkeWAkeW4jOacm+aPkOS+m+abtOWlveeahOmWseiugOmrlOmplycsXG5cdFx0fSksXG5cdFx0ZGlhbG9nRGVzYzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXaGljaCBDaGluZXNlIHZhcmlhbnRzIGRvIHlvdSBwcmVmZXI/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4uumBv+WFjeWGheWuueaYvuekuueugOe5gea3t+adgu+8jOivt+mAieaLqeaCqOWBj+WlveeahOS4reaWh+WPmOS9k+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfngrrpgb/lhY3lhaflrrnpoa/npLrnsKHnuYHmt7fpm5zvvIzoq4vpgbjmk4fmgqjlgY/lpb3nmoTkuK3mlofororpq5TjgIInLFxuXHRcdH0pLFxuXHRcdGRpYWxvZ0Rlc2NFeHRlbmQxOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RvIG1lZXQgbmVlZHMgb2YgcmVhZGVycywgUWl1d2VuIEJhaWtlIHV0aWxpemVzIGEgY29udmVyc2lvbiBtZWNoYW5pc20gZm9yIENoaW5lc2UgbGFuZ3VhZ2UgdmFyaWFudHMuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4uua7oei2s+WQhOWcsOS4reaWh+eUqOaIt+mcgOaxgu+8jOaxgumXu+eZvuenkemHh+eUqOiHquWKqOi9rOaNouaKgOacr++8jOaPkOS+m+S4jeWQjOS4reaWh+WPmOS9k+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfngrrmu7/otrPlkITlnLDkuK3mlofkvb/nlKjogIXpnIDmsYLvvIzmsYLogZ7nmb7np5HmjqHnlKjoh6rli5XovYnmj5vmioDooZPvvIzmj5DkvpvkuI3lkIzkuK3mlofororpq5TjgIInLFxuXHRcdH0pLFxuXHRcdGRpYWxvZ0Rlc2NFeHRlbmQyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZvciB5b3VyIGJldHRlciBleHBlcmllbmNlLCB3ZSB3b3VsZCBhcHByZWNpYXRlIGl0IGlmIHlvdSBzZWxlY3QgeW91ciBwcmVmZXJyZWQgQ2hpbmVzZSBsYW5ndWFnZSB2YXJpYW50LiBXZSBhcG9sb2dpemUgZm9yIGFueSBpbmNvbnZlbmllbmNlLicsXG5cdFx0XHQnemgtaGFucyc6ICflh7rkuo7pmIXor7vkvZPpqozkuYvogIPph4/vvIzmiJHku6zlu7rorq7mgqjlj6/ku6XpgInmi6nmiYDlgY/lpb3nmoTkuK3mlofor63oqIDlj5jkvZPjgILnu5nmgqjluKbmnaXkuI3kvr/vvIzmlazor7fosIXop6PvvIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Ye65pa86Zax6K6A6auU6amX5LmL6ICD6YeP77yM5oiR5YCR5bu66K2w5oKo5Y+v5Lul6YG45pOH5omA5YGP5aW955qE5Lit5paH6Kqe6KiA6K6K6auU44CC57Wm5oKo5bi25L6G5LiN5L6/77yM5pWs6KuL6KuS6Kej77yBJyxcblx0XHR9KSxcblx0XHQndmFyaWFudC16aC1jbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2hpbmVzZSBNYWlubGFuZCAoU2ltcGxpZmllZCkgKOS4reWbveWkp+mZhueugOS9kyknLFxuXHRcdFx0emg6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLWhrJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdIb25nIEtvbmcsIENoaW5hIChUcmFkaXRpb25hbCkgKOS4reWci+mmmea4r+e5gemrlCknLFxuXHRcdFx0emg6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLW1vJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYWNhdSwgQ2hpbmEgKFRyYWRpdGlvbmFsKSAo5Lit5ZyL5r6z6ZaA57mB6auUKScsXG5cdFx0XHR6aDogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdFx0fSksXG5cdFx0J3ZhcmlhbnQtemgtbXknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ01hbGF5c2lhIChTaW1wbGlmaWVkKSAo6ams5p2l6KW/5Lqa566A5L2TKScsXG5cdFx0XHR6aDogJ+mprOadpeilv+S6mueugOS9kycsXG5cdFx0fSksXG5cdFx0J3ZhcmlhbnQtemgtc2cnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NpbmdhcG9yZSAoU2ltcGxpZmllZCkgKOmprOadpeilv+S6mueugOS9kyknLFxuXHRcdFx0emg6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLXR3JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUYWl3YW4sIFByb3ZpbmNlIG9mIENoaW5hIChUcmFkaXRpb25hbCkgKOS4reWci+iHuueBo+e5gemrlCknLFxuXHRcdFx0emg6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHRcdH0pLFxuXHRcdHByaXZhY3lOb3RpY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91ciBjaG9pY2VzIHdpbGwgYmUgb25seSBzdG9yZWQgaW4geW91ciBicm93c2VyIG9ubHkuIFdlIHdpbGwgbm90IHRyYWNrIHlvdXIgY2hvaWNlcy4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oKo55qE6YCJ5oup5bCG5LuF5a2Y5YKo5Zyo5oKo55qE5rWP6KeI5Zmo5Lit77yM5oiR5Lus5LiN5Lya6L+96Liq5oKo55qE6YCJ5oup44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOeahOmBuOaTh+Wwh+WDheWtmOWEsuWcqOaCqOeahOeAj+imveWZqOS4re+8jOaIkeWAkeS4jeacg+i/vei5pOaCqOeahOmBuOaTh+OAgicsXG5cdFx0fSksXG5cdFx0Y29uZmlybTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb25maXJtJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupCcsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo0nLFxuXHRcdH0pLFxuXHRcdGNhbmNlbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdjYW5jZWwnLFxuXHRcdFx0emg6ICflj5bmtognLFxuXHRcdH0pLFxuXHRcdCdBcmUgeW91IHN1cmU/JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmUgeW91IHN1cmUgdG8gY2FuY2VsPyBJZiB5b3UgY2hvb3NlIFwiY2FuY2VsXCIsIHlvdSBtYXkgZmluZCBtaXhlZCB0cmFkaXRpb25hbCBhbmQgc2ltcGxpZmllZCBDaGluZXNlIGNoYXJhY3RlcnMsIHdoaWNoIHdpbGwgYWZmZWN0IHlvdXIgdXNlciBleHBlcmllbmNlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjnoa7lrpropoHlj5bmtojlkJfvvJ/lj5bmtojlkI7vvIznlYzpnaLlj6/og73lh7rnjrDnuYHnroDmt7fmnYLnjrDosaHvvIzlvbHlk43nlKjmiLfkvZPpqozjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo56K65a6a6KaB5Y+W5raI5ZeO77yf5Y+W5raI5b6M77yM5LuL6Z2i5Y+v6IO95Ye654++57mB57Ch5re36Zuc54++6LGh77yM5b2x6Z+/5L2/55So6ICF6auU6amX44CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtHQURHRVRfTkFNRSwgU1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgd2dVc2VyR3JvdXBzLCB3Z1VzZXJOYW1lLCB3Z1VzZXJWYXJpYW50fSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBsb2NhdGlvbkhyZWY6IHN0cmluZyA9IGxvY2F0aW9uLmhyZWY7XG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUWl1d2VuLzEuMSAoTm90aWZ5Q29udmVyc2lvbi8yLjA7ICR7bXcuY29uZmlnLmdldCgnd2dXaWtpSUQnKX0pYCk7XG5cbmNvbnN0IGlzRXhwZXJpZW5jZWRVc2VyID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAoIXdnVXNlck5hbWUgfHwgIXdnVXNlckdyb3Vwcykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdFsnc3lzb3AnLCAnc2VuaW9yZWRpdG9yJywgJ3N0ZXdhcmQnLCAncWl1d2VuJ10uc29tZSgoZWxlbWVudDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRyZXR1cm4gd2dVc2VyR3JvdXBzLmluY2x1ZGVzKGVsZW1lbnQpO1xuXHRcdH0pIHx8XG5cdFx0U1lTVEVNX1NDUklQVF9MSVNULmluY2x1ZGVzKHdnVXNlck5hbWUpIHx8XG5cdFx0V0VCTUFTVEVSX0xJU1QuaW5jbHVkZXMod2dVc2VyTmFtZSlcblx0KTtcbn07XG5cbmNvbnN0IGlzTGFuZ3VhZ2VTZXQgPSAoKTogYm9vbGVhbiA9PiB7XG5cdGlmIChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3ZhcmlhbnQnKSB8fCBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3VzZWxhbmcnKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzV3JvbmdVUkwgPSAoKTogYm9vbGVhbiA9PiB7XG5cdGlmIChsb2NhdGlvbkhyZWYuaW5jbHVkZXMoJy96aC8nKSB8fCBsb2NhdGlvbkhyZWYuaW5jbHVkZXMoJy96aC1oYW5zLycpIHx8IGxvY2F0aW9uSHJlZi5pbmNsdWRlcygnL3poLWhhbnQvJykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzaG93RGlhbG9nID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBkaWFsb2dUaXRsZUljb246IE9PLnVpLkljb25XaWRnZXQgPSBuZXcgT08udWkuSWNvbldpZGdldCh7XG5cdFx0aWNvbjogJ2xhbmd1YWdlJyxcblx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnZGlhbG9nVGl0bGUnKSxcblx0fSk7XG5cdGNvbnN0IGRpYWxvZ1RpdGxlOiBPTy51aS5MYWJlbFdpZGdldCA9IG5ldyBPTy51aS5MYWJlbFdpZGdldCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ2RpYWxvZ1RpdGxlJyksXG5cdH0pO1xuXG5cdGNvbnN0IGdlbmVyYXRlQnV0dG9uID0gKFxuXHRcdHZhcmlhbnQ6ICd6aC1jbicgfCAnemgtaGsnIHwgJ3poLXR3JyB8ICd6aC1zZycgfCAnemgtbXknIHwgJ3poLW1vJ1xuXHQpOiBPTy51aS5CdXR0b25PcHRpb25XaWRnZXQgPT4ge1xuXHRcdHJldHVybiBuZXcgT08udWkuQnV0dG9uT3B0aW9uV2lkZ2V0KHtcblx0XHRcdGRhdGE6IHZhcmlhbnQsXG5cdFx0XHRsYWJlbDogZ2V0TWVzc2FnZShgdmFyaWFudC0ke3ZhcmlhbnR9YCksXG5cdFx0XHR0aXRsZTogZ2V0TWVzc2FnZShgdmFyaWFudC0ke3ZhcmlhbnR9YCksXG5cdFx0fSk7XG5cdH07XG5cdC8vIENyZWF0ZSBhIG5ldyBCdXR0b25TZWxlY3RXaWRnZXQgYW5kIGFkZCB0aGUgYnV0dG9uIG9wdGlvbnMgdG8gaXRcblx0Ly8gdmlhIHRoZSBCdXR0b25TZWxlY3RXaWRnZXQncyAnaXRlbXMnIGNvbmZpZyBvcHRpb24uXG5cdGNvbnN0IGJ1dHRvblNlbGVjdDogT08udWkuQnV0dG9uU2VsZWN0V2lkZ2V0ID0gbmV3IE9PLnVpLkJ1dHRvblNlbGVjdFdpZGdldCh7XG5cdFx0aXRlbXM6IFtcblx0XHRcdGdlbmVyYXRlQnV0dG9uKCd6aC1jbicpLFxuXHRcdFx0Z2VuZXJhdGVCdXR0b24oJ3poLWhrJyksXG5cdFx0XHRnZW5lcmF0ZUJ1dHRvbignemgtdHcnKSxcblx0XHRcdGdlbmVyYXRlQnV0dG9uKCd6aC1zZycpLFxuXHRcdFx0Z2VuZXJhdGVCdXR0b24oJ3poLW15JyksXG5cdFx0XHRnZW5lcmF0ZUJ1dHRvbignemgtbW8nKSxcblx0XHRdLFxuXHR9KTtcblxuXHRpZiAocHJlZmVycmVkVmFyaWFudCA9PT0gbnVsbCkge1xuXHRcdGJ1dHRvblNlbGVjdC5zZWxlY3RJdGVtQnlEYXRhKCd6aC1jbicpO1xuXHR9IGVsc2Uge1xuXHRcdGJ1dHRvblNlbGVjdC5zZWxlY3RJdGVtQnlEYXRhKHByZWZlcnJlZFZhcmlhbnQpO1xuXHR9XG5cblx0Y29uc3QgJGRpYWxvZ1RpdGxlOiBKUXVlcnkgPSAkKCc8c3Bhbj4nKVxuXHRcdC5hZGRDbGFzcygnZ2FkZ2V0LW5vdGlmeV9jb252ZXJzaW9uX190aXRsZScpXG5cdFx0LmFwcGVuZChkaWFsb2dUaXRsZUljb24uJGVsZW1lbnQsIGRpYWxvZ1RpdGxlLiRlbGVtZW50KTtcblx0Y29uc3QgJGRpYWxvZ01lc3NhZ2U6IEpRdWVyeSA9ICQoJzxkaXY+Jylcblx0XHQuYWRkQ2xhc3MoJ2dhZGdldC1ub3RpZnlfY29udmVyc2lvbl9fbWVzc2FnZScpXG5cdFx0LmFwcGVuZChcblx0XHRcdCQoJzxwPicpLnRleHQoZ2V0TWVzc2FnZSgnZGlhbG9nRGVzYycpKSxcblx0XHRcdCQoJzxwPicpLmFkZENsYXNzKCdnYWRnZXQtbm90aWZ5X2NvbnZlcnNpb25fX21lc3NhZ2VfZXh0ZW5kJykudGV4dChnZXRNZXNzYWdlKCdkaWFsb2dEZXNjRXh0ZW5kMScpKSxcblx0XHRcdCQoJzxwPicpLmFkZENsYXNzKCdnYWRnZXQtbm90aWZ5X2NvbnZlcnNpb25fX21lc3NhZ2VfZXh0ZW5kJykudGV4dChnZXRNZXNzYWdlKCdkaWFsb2dEZXNjRXh0ZW5kMicpKSxcblx0XHRcdGJ1dHRvblNlbGVjdC4kZWxlbWVudC5hZGRDbGFzcygnZ2FkZ2V0LW5vdGlmeV9jb252ZXJzaW9uX19zZWxlY3Rpb24nKSxcblx0XHRcdCQoJzxwPicpLmFkZENsYXNzKCdnYWRnZXQtbm90aWZ5X2NvbnZlcnNpb25fX21lc3NhZ2VfcHJpdmFjeS1ub3RpY2UnKS50ZXh0KGdldE1lc3NhZ2UoJ3ByaXZhY3lOb3RpY2UnKSlcblx0XHQpO1xuXG5cdGNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXHR3aW5kb3dNYW5hZ2VyLiRlbGVtZW50LmFwcGVuZFRvKCQoJ2JvZHknKSk7XG5cblx0Y29uc3QgbWVzc2FnZURpYWxvZzogT08udWkuTWVzc2FnZURpYWxvZyA9IG5ldyBPTy51aS5NZXNzYWdlRGlhbG9nKCk7XG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9IHtcblx0XHR0aXRsZTogJGRpYWxvZ1RpdGxlLFxuXHRcdG1lc3NhZ2U6ICRkaWFsb2dNZXNzYWdlLFxuXHRcdGFjdGlvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnY29uZmlybScsXG5cdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0bGFiZWw6ICQoJzxiPicpLnRleHQoZ2V0TWVzc2FnZSgnY29uZmlybScpKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2NhbmNlbCcsXG5cdFx0XHRcdGZsYWdzOiBbJ3NhZmUnLCAnY2xvc2UnXSxcblx0XHRcdFx0bGFiZWw6ICQoJzxiPicpLnRleHQoZ2V0TWVzc2FnZSgnY2FuY2VsJykpLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdHNpemU6ICdtZWRpdW0nLFxuXHR9O1xuXG5cdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbbWVzc2FnZURpYWxvZ10pO1xuXHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhtZXNzYWdlRGlhbG9nLCBtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xuXG5cdG1lc3NhZ2VEaWFsb2cuZ2V0QWN0aW9uUHJvY2VzcyA9IChhY3Rpb24pOiBPTy51aS5Qcm9jZXNzID0+IHtcblx0XHRjb25zdCBjbGVhcldpbmRvd3MgPSAodmFyaWFudD86IHN0cmluZykgPT4ge1xuXHRcdFx0bXcuc3RvcmFnZS5zZXQoR0FER0VUX05BTUUsIHZhcmlhbnQgfHwgJ2hpZGUnKTtcblx0XHRcdHZvaWQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIG5ldyBPTy51aS5Qcm9jZXNzKCgpOiB2b2lkID0+IHtcblx0XHRcdGlmIChhY3Rpb24gPT09ICdjb25maXJtJykge1xuXHRcdFx0XHRjb25zdCBVUkxfUkVHRVg6IFJlZ0V4cCA9IC8oXFwvXFwvW14vXStcXC8pKFteL10rKShcXC8pLztcblx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtOiBPTy51aS5PcHRpb25XaWRnZXQgPSBidXR0b25TZWxlY3QuZmluZFNlbGVjdGVkSXRlbSgpIGFzIE9PLnVpLk9wdGlvbldpZGdldDtcblx0XHRcdFx0Y29uc3QgdmFyaWFudDogc3RyaW5nID0gc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmc7XG5cdFx0XHRcdGNsZWFyV2luZG93cyh2YXJpYW50KTtcblx0XHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKSkge1xuXHRcdFx0XHRcdHZvaWQgYXBpLnNhdmVPcHRpb24oJ3ZhcmlhbnQnLCB2YXJpYW50KS50aGVuKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbkhyZWYucmVwbGFjZShVUkxfUkVHRVgsICckMXdpa2kkMycpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbkhyZWYucmVwbGFjZShVUkxfUkVHRVgsIGAkMSR7dmFyaWFudH0kM2ApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2b2lkIE9PLnVpLmNvbmZpcm0oZ2V0TWVzc2FnZSgnQXJlIHlvdSBzdXJlPycpKS50aGVuKChjb25maXJtZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoY29uZmlybWVkKSB7XG5cdFx0XHRcdFx0XHRjbGVhcldpbmRvd3MoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xufTtcblxuY29uc3QgcHJlZmVycmVkVmFyaWFudDogc3RyaW5nIHwgbnVsbCA9XG5cdCgobXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpID8gbXcudXNlci5vcHRpb25zLmdldCgndmFyaWFudCcpIDogbXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpKSBhcyBzdHJpbmcpID8/IG51bGw7XG5cbmV4cG9ydCBjb25zdCBub3RpZnlDb252ZXJzaW9uID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoIXdnVXNlclZhcmlhbnQpIHtcblx0XHRyZXR1cm47IC8vIG9uIFNwZWNpYWwgcGFnZXNcblx0fVxuXHRpZiAoaXNMYW5ndWFnZVNldCgpKSB7XG5cdFx0cmV0dXJuOyAvLyBzZXQgYHVzZWxhbmdgIG9yIGB2YXJpYW50YCBnZXQgcGFyYW1ldGVyc1xuXHR9XG5cdGlmIChpc0V4cGVyaWVuY2VkVXNlcigpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChwcmVmZXJyZWRWYXJpYW50ID09PSBudWxsIHx8IFsnemgnLCAnemgtaGFucycsICd6aC1oYW50J10uaW5jbHVkZXMocHJlZmVycmVkVmFyaWFudCkgfHwgaXNXcm9uZ1VSTCgpKSB7XG5cdFx0c2hvd0RpYWxvZygpO1xuXHR9XG59O1xuIiwgImltcG9ydCB7d2dVc2VyVmFyaWFudH0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmV4cG9ydCBjb25zdCBwcmVzZXJ2ZVZhcmlhbnQgPSAoKTogdm9pZCA9PiB7XG5cdGlmIChcblx0XHQhd2dVc2VyVmFyaWFudCB8fFxuXHRcdCF3Z1VzZXJWYXJpYW50LmluY2x1ZGVzKCd6aC0nKSB8fFxuXHRcdCEod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKGAvJHt3Z1VzZXJWYXJpYW50fS9gKSAmJiBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3ZhcmlhbnQnKSAhPT0gd2dVc2VyVmFyaWFudClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdCQoZG9jdW1lbnQpLm9uKCdrZXlkb3duIG1vdXNlZG93biB0b3VjaHN0YXJ0JywgJ2EnLCBmdW5jdGlvbiAoKTogdm9pZCB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG5cdFx0Y29uc3Qgb3JpZ2luYWxIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkKHNlbGYpLmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAoIW9yaWdpbmFsSHJlZikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgdXJpO1xuXHRcdHRyeSB7XG5cdFx0XHR1cmkgPSBuZXcgbXcuVXJpKG9yaWdpbmFsSHJlZik7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghKCd2YXJpYW50JyBpbiB1cmkucXVlcnkpKSB7XG5cdFx0XHRpZiAob3JpZ2luYWxIcmVmLmluY2x1ZGVzKCcvd2lraS8nKSkge1xuXHRcdFx0XHRzZWxmLmhyZWYgPSBgLyR7d2dVc2VyVmFyaWFudH0ke29yaWdpbmFsSHJlZi5zbGljZSg1KX1gO1xuXHRcdFx0fSBlbHNlIGlmIChvcmlnaW5hbEhyZWYuaW5jbHVkZXMoJy9pbmRleC5waHA/JykpIHtcblx0XHRcdFx0c2VsZi5ocmVmID0gdXJpXG5cdFx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0XHR2YXJpYW50OiB3Z1VzZXJWYXJpYW50LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmdldFJlbGF0aXZlUGF0aCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59O1xuIiwgImltcG9ydCB7R0FER0VUX05BTUUsIEdPT0RfVkFSSUFOVFMsIHdnVXNlck5hbWV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge25vdGlmeUNvbnZlcnNpb259IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7cHJlc2VydmVWYXJpYW50fSBmcm9tICcuL21vZHVsZXMvcHJlc2VydmVWYXJpYW50JztcblxuKCgpOiB2b2lkID0+IHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykgIT09ICd2aWV3Jykge1xuXHRcdHJldHVybjsgLy8g5Y+q5Zyo5rWP6KeI6aG16Z2i5pe25pi+56S6XG5cdH1cblx0Y29uc3QgcHJlZmVycmVkVmFyaWFudCA9IChtdy5zdG9yYWdlLmdldChHQURHRVRfTkFNRSkgfHwgJycpLnRvU3RyaW5nKCk7XG5cdGlmICghWydoaWRlJywgLi4uR09PRF9WQVJJQU5UU10uaW5jbHVkZXMocHJlZmVycmVkVmFyaWFudCkpIHtcblx0XHQvLyDmmK/lkKbngrnov4figJzkuI3lho3mj5DnpLrigJ3miJblrozmiJDov4forr7nva5cblx0XHQkKG5vdGlmeUNvbnZlcnNpb24pO1xuXHR9IGVsc2UgaWYgKCF3Z1VzZXJOYW1lKSB7XG5cdFx0JChwcmVzZXJ2ZVZhcmlhbnQpO1xuXHR9XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7QUFBQSxJQUFNQSxjQUFzQjtBQUU1QixJQUFNQyxxQkFBK0IsQ0FDcEMsU0FDQSxRQUNBLFVBQ0EsV0FDQSx5QkFDQSxzQkFD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QyxRQUFRLEdBQUd0RyxhQUFhLEVBQUUyQixTQUFTMEUsaUJBQWdCLEdBQUc7QUFFM0RsRCxNQUFFbUMsZ0JBQWdCO0VBQ25CLFdBQVcsQ0FBQzVGLFlBQVk7QUFDdkJ5RCxNQUFFb0MsZUFBZTtFQUNsQjtBQUNELEdBQUc7IiwKICAibmFtZXMiOiBbIkdBREdFVF9OQU1FIiwgIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJ3Z1VzZXJOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAid2dVc2VyR3JvdXBzIiwgIndnVXNlclZhcmlhbnQiLCAiR09PRF9WQVJJQU5UUyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJkaWFsb2dUaXRsZSIsICJsb2NhbGl6ZSIsICJlbiIsICJkaWFsb2dEZXNjIiwgImRpYWxvZ0Rlc2NFeHRlbmQxIiwgImRpYWxvZ0Rlc2NFeHRlbmQyIiwgInpoIiwgInByaXZhY3lOb3RpY2UiLCAiY29uZmlybSIsICJjYW5jZWwiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJsb2NhdGlvbkhyZWYiLCAibG9jYXRpb24iLCAiaHJlZiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpc0V4cGVyaWVuY2VkVXNlciIsICJzb21lIiwgImVsZW1lbnQiLCAiaW5jbHVkZXMiLCAiaXNMYW5ndWFnZVNldCIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiaXNXcm9uZ1VSTCIsICJzaG93RGlhbG9nIiwgImRpYWxvZ1RpdGxlSWNvbiIsICJPTyIsICJ1aSIsICJJY29uV2lkZ2V0IiwgImljb24iLCAidGl0bGUiLCAiTGFiZWxXaWRnZXQiLCAibGFiZWwiLCAiZ2VuZXJhdGVCdXR0b24iLCAidmFyaWFudCIsICJCdXR0b25PcHRpb25XaWRnZXQiLCAiZGF0YSIsICJidXR0b25TZWxlY3QiLCAiQnV0dG9uU2VsZWN0V2lkZ2V0IiwgIml0ZW1zIiwgInByZWZlcnJlZFZhcmlhbnQiLCAic2VsZWN0SXRlbUJ5RGF0YSIsICIkZGlhbG9nVGl0bGUiLCAiJCIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiJGVsZW1lbnQiLCAiJGRpYWxvZ01lc3NhZ2UiLCAidGV4dCIsICJ3aW5kb3dNYW5hZ2VyIiwgIldpbmRvd01hbmFnZXIiLCAiYXBwZW5kVG8iLCAibWVzc2FnZURpYWxvZyIsICJNZXNzYWdlRGlhbG9nIiwgIm1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSIsICJtZXNzYWdlIiwgImFjdGlvbnMiLCAiYWN0aW9uIiwgImZsYWdzIiwgInNpemUiLCAiYWRkV2luZG93cyIsICJvcGVuV2luZG93IiwgImdldEFjdGlvblByb2Nlc3MiLCAiY2xlYXJXaW5kb3dzIiwgInN0b3JhZ2UiLCAic2V0IiwgIlByb2Nlc3MiLCAiVVJMX1JFR0VYIiwgInNlbGVjdGVkSXRlbSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldERhdGEiLCAic2F2ZU9wdGlvbiIsICJ0aGVuIiwgInJlcGxhY2UiLCAiY29uZmlybWVkIiwgIl9yZWYiLCAidXNlciIsICJvcHRpb25zIiwgIm5vdGlmeUNvbnZlcnNpb24iLCAicHJlc2VydmVWYXJpYW50IiwgIndpbmRvdyIsICJwYXRobmFtZSIsICJkb2N1bWVudCIsICJvbiIsICJzZWxmIiwgIm9yaWdpbmFsSHJlZiIsICJhdHRyIiwgInVyaSIsICJVcmkiLCAicXVlcnkiLCAic2xpY2UiLCAiZXh0ZW5kIiwgImdldFJlbGF0aXZlUGF0aCIsICJwcmVmZXJyZWRWYXJpYW50MiIsICJ0b1N0cmluZyJdCn0K

})();

/* </nowiki> */
