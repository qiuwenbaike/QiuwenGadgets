/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/NotifyConversion}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-notifyConversion.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/NotifyConversion/NotifyConversion.less}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license2=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-preserve-variant.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/NotifyConversion/modules/preserveVariant.ts}
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

// dist/NotifyConversion/NotifyConversion.js
var _ref;
//! src/NotifyConversion/modules/constant.ts
var GADGET_NAME = "ext.gadget.NotifyConversion";
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
var WG_USER_NAME = mw.config.get("wgUserName") || "";
var WG_USER_GROUPS = mw.config.get("wgUserGroups") || [];
var WG_USER_VARIANT = mw.config.get("wgUserVariant");
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
    privacyNoticeNotLoggedIn: (0, import_ext_gadget.localize)({
      en: "Your choices will be only stored in your browser only. We will not track your choices.",
      "zh-hans": "您的选择将仅存储在您的浏览器中，我们不会追踪您的选择。",
      "zh-hant": "您的選擇將僅存儲在您的瀏覽器中，我們不會追蹤您的選擇。"
    }),
    privacyNoticeLoggedIn: (0, import_ext_gadget.localize)({
      en: "Your choices will be stored in your browser and your user preferences. However, We will not track your choices.",
      "zh-hans": "您的选择将存储在您的浏览器及用户参数设置中；但是，我们不会追踪您的选择。",
      "zh-hant": "您的選擇將存儲在您的瀏覽器及使用者偏好設定中；但是，我們不會追蹤您的選擇。"
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
var api = (0, import_ext_gadget2.initMwApi)("NotifyConversion/2.0");
var isExperiencedUser = () => {
  if (!WG_USER_NAME || !WG_USER_GROUPS) {
    return false;
  }
  return ["sysop", "senioreditor", "steward", "qiuwen"].some((element) => {
    return WG_USER_GROUPS.includes(element);
  }) || SYSTEM_SCRIPT_LIST.includes(WG_USER_NAME) || WEBMASTER_LIST.includes(WG_USER_NAME);
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
  const $dialogMessage = $("<div>").addClass("gadget-notify_conversion__message").append($("<p>").text(getMessage("dialogDesc")), $("<p>").addClass("gadget-notify_conversion__message_extend").text(getMessage("dialogDescExtend1")), $("<p>").addClass("gadget-notify_conversion__message_extend").text(getMessage("dialogDescExtend2")), buttonSelect.$element.addClass("gadget-notify_conversion__selection"), $("<p>").addClass("gadget-notify_conversion__message_privacy-notice").text(WG_USER_NAME ? getMessage("privacyNoticeLoggedIn") : getMessage("privacyNoticeNotLoggedIn")));
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
        if (WG_USER_NAME) {
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
var preferredVariant = (_ref = WG_USER_NAME ? mw.user.options.get("variant") : WG_USER_VARIANT) !== null && _ref !== void 0 ? _ref : null;
var notifyConversion = () => {
  if (!WG_USER_VARIANT) {
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
  if (!WG_USER_VARIANT || !WG_USER_VARIANT.includes("zh-") || !(window.location.pathname.includes("/".concat(WG_USER_VARIANT, "/")) && mw.util.getParamValue("variant") !== WG_USER_VARIANT)) {
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
        self.href = "/".concat(WG_USER_VARIANT).concat(originalHref.slice(5));
      } else if (originalHref.includes("/index.php?")) {
        self.href = uri.extend({
          variant: WG_USER_VARIANT
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
  } else if (!WG_USER_NAME) {
    $(preserveVariant);
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGlmeUNvbnZlcnNpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTm90aWZ5Q29udmVyc2lvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL05vdGlmeUNvbnZlcnNpb24vbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9Ob3RpZnlDb252ZXJzaW9uL21vZHVsZXMvcHJlc2VydmVWYXJpYW50LnRzIiwgInNyYy9Ob3RpZnlDb252ZXJzaW9uL05vdGlmeUNvbnZlcnNpb24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IEdBREdFVF9OQU1FOiBzdHJpbmcgPSAnZXh0LmdhZGdldC5Ob3RpZnlDb252ZXJzaW9uJztcblxuY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5cbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnUWl1V2VuJywgJ1FpdVdlbiBmb3IgQWNjb3VudHMnLCAnUWl1d2VuU29jaWFsTWVkaWEnXTtcblxuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykgfHwgJyc7XG5jb25zdCBXR19VU0VSX0dST1VQUzogc3RyaW5nW10gPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKSB8fCBbXTtcbmNvbnN0IFdHX1VTRVJfVkFSSUFOVDogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKTtcblxuY29uc3QgR09PRF9WQVJJQU5UUzogc3RyaW5nW10gPSBbJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5cbmV4cG9ydCB7R0FER0VUX05BTUUsIFNZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1QsIFdHX1VTRVJfTkFNRSwgV0dfVVNFUl9HUk9VUFMsIFdHX1VTRVJfVkFSSUFOVCwgR09PRF9WQVJJQU5UU307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGRpYWxvZ1RpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZvciB5b3VyIGJldHRlciB1c2VyIGV4cGVyaWVuY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5oiR5Lus5biM5pyb5o+Q5L6b5pu05aW955qE6ZiF6K+75L2T6aqMJyxcblx0XHRcdCd6aC1oYW50JzogJ+aIkeWAkeW4jOacm+aPkOS+m+abtOWlveeahOmWseiugOmrlOmplycsXG5cdFx0fSksXG5cdFx0ZGlhbG9nRGVzYzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXaGljaCBDaGluZXNlIHZhcmlhbnRzIGRvIHlvdSBwcmVmZXI/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4uumBv+WFjeWGheWuueaYvuekuueugOe5gea3t+adgu+8jOivt+mAieaLqeaCqOWBj+WlveeahOS4reaWh+WPmOS9k+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfngrrpgb/lhY3lhaflrrnpoa/npLrnsKHnuYHmt7fpm5zvvIzoq4vpgbjmk4fmgqjlgY/lpb3nmoTkuK3mlofororpq5TjgIInLFxuXHRcdH0pLFxuXHRcdGRpYWxvZ0Rlc2NFeHRlbmQxOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RvIG1lZXQgbmVlZHMgb2YgcmVhZGVycywgUWl1d2VuIEJhaWtlIHV0aWxpemVzIGEgY29udmVyc2lvbiBtZWNoYW5pc20gZm9yIENoaW5lc2UgbGFuZ3VhZ2UgdmFyaWFudHMuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4uua7oei2s+WQhOWcsOS4reaWh+eUqOaIt+mcgOaxgu+8jOaxgumXu+eZvuenkemHh+eUqOiHquWKqOi9rOaNouaKgOacr++8jOaPkOS+m+S4jeWQjOS4reaWh+WPmOS9k+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfngrrmu7/otrPlkITlnLDkuK3mlofkvb/nlKjogIXpnIDmsYLvvIzmsYLogZ7nmb7np5HmjqHnlKjoh6rli5XovYnmj5vmioDooZPvvIzmj5DkvpvkuI3lkIzkuK3mlofororpq5TjgIInLFxuXHRcdH0pLFxuXHRcdGRpYWxvZ0Rlc2NFeHRlbmQyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZvciB5b3VyIGJldHRlciBleHBlcmllbmNlLCB3ZSB3b3VsZCBhcHByZWNpYXRlIGl0IGlmIHlvdSBzZWxlY3QgeW91ciBwcmVmZXJyZWQgQ2hpbmVzZSBsYW5ndWFnZSB2YXJpYW50LiBXZSBhcG9sb2dpemUgZm9yIGFueSBpbmNvbnZlbmllbmNlLicsXG5cdFx0XHQnemgtaGFucyc6ICflh7rkuo7pmIXor7vkvZPpqozkuYvogIPph4/vvIzmiJHku6zlu7rorq7mgqjlj6/ku6XpgInmi6nmiYDlgY/lpb3nmoTkuK3mlofor63oqIDlj5jkvZPjgILnu5nmgqjluKbmnaXkuI3kvr/vvIzmlazor7fosIXop6PvvIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Ye65pa86Zax6K6A6auU6amX5LmL6ICD6YeP77yM5oiR5YCR5bu66K2w5oKo5Y+v5Lul6YG45pOH5omA5YGP5aW955qE5Lit5paH6Kqe6KiA6K6K6auU44CC57Wm5oKo5bi25L6G5LiN5L6/77yM5pWs6KuL6KuS6Kej77yBJyxcblx0XHR9KSxcblx0XHQndmFyaWFudC16aC1jbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2hpbmVzZSBNYWlubGFuZCAoU2ltcGxpZmllZCkgKOS4reWbveWkp+mZhueugOS9kyknLFxuXHRcdFx0emg6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLWhrJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdIb25nIEtvbmcsIENoaW5hIChUcmFkaXRpb25hbCkgKOS4reWci+mmmea4r+e5gemrlCknLFxuXHRcdFx0emg6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLW1vJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYWNhdSwgQ2hpbmEgKFRyYWRpdGlvbmFsKSAo5Lit5ZyL5r6z6ZaA57mB6auUKScsXG5cdFx0XHR6aDogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdFx0fSksXG5cdFx0J3ZhcmlhbnQtemgtbXknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ01hbGF5c2lhIChTaW1wbGlmaWVkKSAo6ams5p2l6KW/5Lqa566A5L2TKScsXG5cdFx0XHR6aDogJ+mprOadpeilv+S6mueugOS9kycsXG5cdFx0fSksXG5cdFx0J3ZhcmlhbnQtemgtc2cnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NpbmdhcG9yZSAoU2ltcGxpZmllZCkgKOmprOadpeilv+S6mueugOS9kyknLFxuXHRcdFx0emg6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdH0pLFxuXHRcdCd2YXJpYW50LXpoLXR3JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUYWl3YW4sIFByb3ZpbmNlIG9mIENoaW5hIChUcmFkaXRpb25hbCkgKOS4reWci+iHuueBo+e5gemrlCknLFxuXHRcdFx0emg6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHRcdH0pLFxuXHRcdHByaXZhY3lOb3RpY2VOb3RMb2dnZWRJbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3VyIGNob2ljZXMgd2lsbCBiZSBvbmx5IHN0b3JlZCBpbiB5b3VyIGJyb3dzZXIgb25seS4gV2Ugd2lsbCBub3QgdHJhY2sgeW91ciBjaG9pY2VzLicsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjnmoTpgInmi6nlsIbku4XlrZjlgqjlnKjmgqjnmoTmtY/op4jlmajkuK3vvIzmiJHku6zkuI3kvJrov73ouKrmgqjnmoTpgInmi6njgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo55qE6YG45pOH5bCH5YOF5a2Y5YSy5Zyo5oKo55qE54CP6Ka95Zmo5Lit77yM5oiR5YCR5LiN5pyD6L+96Lmk5oKo55qE6YG45pOH44CCJyxcblx0XHR9KSxcblx0XHRwcml2YWN5Tm90aWNlTG9nZ2VkSW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91ciBjaG9pY2VzIHdpbGwgYmUgc3RvcmVkIGluIHlvdXIgYnJvd3NlciBhbmQgeW91ciB1c2VyIHByZWZlcmVuY2VzLiBIb3dldmVyLCBXZSB3aWxsIG5vdCB0cmFjayB5b3VyIGNob2ljZXMuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOeahOmAieaLqeWwhuWtmOWCqOWcqOaCqOeahOa1j+iniOWZqOWPiueUqOaIt+WPguaVsOiuvue9ruS4re+8m+S9huaYr++8jOaIkeS7rOS4jeS8mui/vei4quaCqOeahOmAieaLqeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjnmoTpgbjmk4flsIflrZjlhLLlnKjmgqjnmoTngI/opr3lmajlj4rkvb/nlKjogIXlgY/lpb3oqK3lrprkuK3vvJvkvYbmmK/vvIzmiJHlgJHkuI3mnIPov73ouaTmgqjnmoTpgbjmk4fjgIInLFxuXHRcdH0pLFxuXHRcdGNvbmZpcm06IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybScsXG5cdFx0XHQnemgtaGFucyc6ICfnoa7orqQnLFxuXHRcdFx0J3poLWhhbnQnOiAn56K66KqNJyxcblx0XHR9KSxcblx0XHRjYW5jZWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnY2FuY2VsJyxcblx0XHRcdHpoOiAn5Y+W5raIJyxcblx0XHR9KSxcblx0XHQnQXJlIHlvdSBzdXJlPyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJlIHlvdSBzdXJlIHRvIGNhbmNlbD8gSWYgeW91IGNob29zZSBcImNhbmNlbFwiLCB5b3UgbWF5IGZpbmQgbWl4ZWQgdHJhZGl0aW9uYWwgYW5kIHNpbXBsaWZpZWQgQ2hpbmVzZSBjaGFyYWN0ZXJzLCB3aGljaCB3aWxsIGFmZmVjdCB5b3VyIHVzZXIgZXhwZXJpZW5jZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oKo56Gu5a6a6KaB5Y+W5raI5ZCX77yf5Y+W5raI5ZCO77yM55WM6Z2i5Y+v6IO95Ye6546w57mB566A5re35p2C546w6LGh77yM5b2x5ZON55So5oi35L2T6aqM44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOeiuuWumuimgeWPlua2iOWXju+8n+WPlua2iOW+jO+8jOS7i+mdouWPr+iDveWHuuePvue5geewoea3t+mbnOePvuixoe+8jOW9semfv+S9v+eUqOiAhemrlOmpl+OAgicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7XG5cdEdBREdFVF9OQU1FLFxuXHRTWVNURU1fU0NSSVBUX0xJU1QsXG5cdFdFQk1BU1RFUl9MSVNULFxuXHRXR19VU0VSX0dST1VQUyxcblx0V0dfVVNFUl9OQU1FLFxuXHRXR19VU0VSX1ZBUklBTlQsXG59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGxvY2F0aW9uSHJlZjogc3RyaW5nID0gbG9jYXRpb24uaHJlZjtcbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdOb3RpZnlDb252ZXJzaW9uLzIuMCcpO1xuXG5jb25zdCBpc0V4cGVyaWVuY2VkVXNlciA9ICgpOiBib29sZWFuID0+IHtcblx0aWYgKCFXR19VU0VSX05BTUUgfHwgIVdHX1VTRVJfR1JPVVBTKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0WydzeXNvcCcsICdzZW5pb3JlZGl0b3InLCAnc3Rld2FyZCcsICdxaXV3ZW4nXS5zb21lKChlbGVtZW50OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRcdHJldHVybiBXR19VU0VSX0dST1VQUy5pbmNsdWRlcyhlbGVtZW50KTtcblx0XHR9KSB8fFxuXHRcdFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyhXR19VU0VSX05BTUUpIHx8XG5cdFx0V0VCTUFTVEVSX0xJU1QuaW5jbHVkZXMoV0dfVVNFUl9OQU1FKVxuXHQpO1xufTtcblxuY29uc3QgaXNMYW5ndWFnZVNldCA9ICgpOiBib29sZWFuID0+IHtcblx0aWYgKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndmFyaWFudCcpIHx8IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlbGFuZycpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNXcm9uZ1VSTCA9ICgpOiBib29sZWFuID0+IHtcblx0aWYgKGxvY2F0aW9uSHJlZi5pbmNsdWRlcygnL3poLycpIHx8IGxvY2F0aW9uSHJlZi5pbmNsdWRlcygnL3poLWhhbnMvJykgfHwgbG9jYXRpb25IcmVmLmluY2x1ZGVzKCcvemgtaGFudC8nKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHNob3dEaWFsb2cgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IGRpYWxvZ1RpdGxlSWNvbjogT08udWkuSWNvbldpZGdldCA9IG5ldyBPTy51aS5JY29uV2lkZ2V0KHtcblx0XHRpY29uOiAnbGFuZ3VhZ2UnLFxuXHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdkaWFsb2dUaXRsZScpLFxuXHR9KTtcblx0Y29uc3QgZGlhbG9nVGl0bGU6IE9PLnVpLkxhYmVsV2lkZ2V0ID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnZGlhbG9nVGl0bGUnKSxcblx0fSk7XG5cblx0Y29uc3QgZ2VuZXJhdGVCdXR0b24gPSAoXG5cdFx0dmFyaWFudDogJ3poLWNuJyB8ICd6aC1oaycgfCAnemgtdHcnIHwgJ3poLXNnJyB8ICd6aC1teScgfCAnemgtbW8nXG5cdCk6IE9PLnVpLkJ1dHRvbk9wdGlvbldpZGdldCA9PiB7XG5cdFx0cmV0dXJuIG5ldyBPTy51aS5CdXR0b25PcHRpb25XaWRnZXQoe1xuXHRcdFx0ZGF0YTogdmFyaWFudCxcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKGB2YXJpYW50LSR7dmFyaWFudH1gKSxcblx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKGB2YXJpYW50LSR7dmFyaWFudH1gKSxcblx0XHR9KTtcblx0fTtcblx0Ly8gQ3JlYXRlIGEgbmV3IEJ1dHRvblNlbGVjdFdpZGdldCBhbmQgYWRkIHRoZSBidXR0b24gb3B0aW9ucyB0byBpdFxuXHQvLyB2aWEgdGhlIEJ1dHRvblNlbGVjdFdpZGdldCdzICdpdGVtcycgY29uZmlnIG9wdGlvbi5cblx0Y29uc3QgYnV0dG9uU2VsZWN0OiBPTy51aS5CdXR0b25TZWxlY3RXaWRnZXQgPSBuZXcgT08udWkuQnV0dG9uU2VsZWN0V2lkZ2V0KHtcblx0XHRpdGVtczogW1xuXHRcdFx0Z2VuZXJhdGVCdXR0b24oJ3poLWNuJyksXG5cdFx0XHRnZW5lcmF0ZUJ1dHRvbignemgtaGsnKSxcblx0XHRcdGdlbmVyYXRlQnV0dG9uKCd6aC10dycpLFxuXHRcdFx0Z2VuZXJhdGVCdXR0b24oJ3poLXNnJyksXG5cdFx0XHRnZW5lcmF0ZUJ1dHRvbignemgtbXknKSxcblx0XHRcdGdlbmVyYXRlQnV0dG9uKCd6aC1tbycpLFxuXHRcdF0sXG5cdH0pO1xuXG5cdGlmIChwcmVmZXJyZWRWYXJpYW50ID09PSBudWxsKSB7XG5cdFx0YnV0dG9uU2VsZWN0LnNlbGVjdEl0ZW1CeURhdGEoJ3poLWNuJyk7XG5cdH0gZWxzZSB7XG5cdFx0YnV0dG9uU2VsZWN0LnNlbGVjdEl0ZW1CeURhdGEocHJlZmVycmVkVmFyaWFudCk7XG5cdH1cblxuXHRjb25zdCAkZGlhbG9nVGl0bGU6IEpRdWVyeSA9ICQoJzxzcGFuPicpXG5cdFx0LmFkZENsYXNzKCdnYWRnZXQtbm90aWZ5X2NvbnZlcnNpb25fX3RpdGxlJylcblx0XHQuYXBwZW5kKGRpYWxvZ1RpdGxlSWNvbi4kZWxlbWVudCwgZGlhbG9nVGl0bGUuJGVsZW1lbnQpO1xuXHRjb25zdCAkZGlhbG9nTWVzc2FnZTogSlF1ZXJ5ID0gJCgnPGRpdj4nKVxuXHRcdC5hZGRDbGFzcygnZ2FkZ2V0LW5vdGlmeV9jb252ZXJzaW9uX19tZXNzYWdlJylcblx0XHQuYXBwZW5kKFxuXHRcdFx0JCgnPHA+JykudGV4dChnZXRNZXNzYWdlKCdkaWFsb2dEZXNjJykpLFxuXHRcdFx0JCgnPHA+JykuYWRkQ2xhc3MoJ2dhZGdldC1ub3RpZnlfY29udmVyc2lvbl9fbWVzc2FnZV9leHRlbmQnKS50ZXh0KGdldE1lc3NhZ2UoJ2RpYWxvZ0Rlc2NFeHRlbmQxJykpLFxuXHRcdFx0JCgnPHA+JykuYWRkQ2xhc3MoJ2dhZGdldC1ub3RpZnlfY29udmVyc2lvbl9fbWVzc2FnZV9leHRlbmQnKS50ZXh0KGdldE1lc3NhZ2UoJ2RpYWxvZ0Rlc2NFeHRlbmQyJykpLFxuXHRcdFx0YnV0dG9uU2VsZWN0LiRlbGVtZW50LmFkZENsYXNzKCdnYWRnZXQtbm90aWZ5X2NvbnZlcnNpb25fX3NlbGVjdGlvbicpLFxuXHRcdFx0JCgnPHA+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdnYWRnZXQtbm90aWZ5X2NvbnZlcnNpb25fX21lc3NhZ2VfcHJpdmFjeS1ub3RpY2UnKVxuXHRcdFx0XHQudGV4dChXR19VU0VSX05BTUUgPyBnZXRNZXNzYWdlKCdwcml2YWN5Tm90aWNlTG9nZ2VkSW4nKSA6IGdldE1lc3NhZ2UoJ3ByaXZhY3lOb3RpY2VOb3RMb2dnZWRJbicpKVxuXHRcdCk7XG5cblx0Y29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuYXBwZW5kVG8oJCgnYm9keScpKTtcblxuXHRjb25zdCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0Y29uc3QgbWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0ge1xuXHRcdHRpdGxlOiAkZGlhbG9nVGl0bGUsXG5cdFx0bWVzc2FnZTogJGRpYWxvZ01lc3NhZ2UsXG5cdFx0YWN0aW9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdjb25maXJtJyxcblx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdjb25maXJtJykpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnY2FuY2VsJyxcblx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdjYW5jZWwnKSksXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0c2l6ZTogJ21lZGl1bScsXG5cdH07XG5cblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFttZXNzYWdlRGlhbG9nXSk7XG5cdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG5cblx0bWVzc2FnZURpYWxvZy5nZXRBY3Rpb25Qcm9jZXNzID0gKGFjdGlvbik6IE9PLnVpLlByb2Nlc3MgPT4ge1xuXHRcdGNvbnN0IGNsZWFyV2luZG93cyA9ICh2YXJpYW50Pzogc3RyaW5nKSA9PiB7XG5cdFx0XHRtdy5zdG9yYWdlLnNldChHQURHRVRfTkFNRSwgdmFyaWFudCB8fCAnaGlkZScpO1xuXHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gbmV3IE9PLnVpLlByb2Nlc3MoKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ2NvbmZpcm0nKSB7XG5cdFx0XHRcdGNvbnN0IFVSTF9SRUdFWDogUmVnRXhwID0gLyhcXC9cXC9bXi9dK1xcLykoW14vXSspKFxcLykvO1xuXHRcdFx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCA9IGJ1dHRvblNlbGVjdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0O1xuXHRcdFx0XHRjb25zdCB2YXJpYW50OiBzdHJpbmcgPSBzZWxlY3RlZEl0ZW0uZ2V0RGF0YSgpIGFzIHN0cmluZztcblx0XHRcdFx0Y2xlYXJXaW5kb3dzKHZhcmlhbnQpO1xuXHRcdFx0XHRpZiAoV0dfVVNFUl9OQU1FKSB7XG5cdFx0XHRcdFx0dm9pZCBhcGkuc2F2ZU9wdGlvbigndmFyaWFudCcsIHZhcmlhbnQpLnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uSHJlZi5yZXBsYWNlKFVSTF9SRUdFWCwgJyQxd2lraSQzJyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uSHJlZi5yZXBsYWNlKFVSTF9SRUdFWCwgYCQxJHt2YXJpYW50fSQzYCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZvaWQgT08udWkuY29uZmlybShnZXRNZXNzYWdlKCdBcmUgeW91IHN1cmU/JykpLnRoZW4oKGNvbmZpcm1lZDogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmIChjb25maXJtZWQpIHtcblx0XHRcdFx0XHRcdGNsZWFyV2luZG93cygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG59O1xuXG5jb25zdCBwcmVmZXJyZWRWYXJpYW50OiBzdHJpbmcgfCBudWxsID1cblx0KChXR19VU0VSX05BTUUgPyBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykgOiBXR19VU0VSX1ZBUklBTlQpIGFzIHN0cmluZykgPz8gbnVsbDtcblxuZXhwb3J0IGNvbnN0IG5vdGlmeUNvbnZlcnNpb24gPSAoKTogdm9pZCA9PiB7XG5cdGlmICghV0dfVVNFUl9WQVJJQU5UKSB7XG5cdFx0cmV0dXJuOyAvLyBvbiBTcGVjaWFsIHBhZ2VzXG5cdH1cblx0aWYgKGlzTGFuZ3VhZ2VTZXQoKSkge1xuXHRcdHJldHVybjsgLy8gc2V0IGB1c2VsYW5nYCBvciBgdmFyaWFudGAgZ2V0IHBhcmFtZXRlcnNcblx0fVxuXHRpZiAoaXNFeHBlcmllbmNlZFVzZXIoKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAocHJlZmVycmVkVmFyaWFudCA9PT0gbnVsbCB8fCBbJ3poJywgJ3poLWhhbnMnLCAnemgtaGFudCddLmluY2x1ZGVzKHByZWZlcnJlZFZhcmlhbnQpIHx8IGlzV3JvbmdVUkwoKSkge1xuXHRcdHNob3dEaWFsb2coKTtcblx0fVxufTtcbiIsICJpbXBvcnQge1dHX1VTRVJfVkFSSUFOVH0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmV4cG9ydCBjb25zdCBwcmVzZXJ2ZVZhcmlhbnQgPSAoKTogdm9pZCA9PiB7XG5cdGlmIChcblx0XHQhV0dfVVNFUl9WQVJJQU5UIHx8XG5cdFx0IVdHX1VTRVJfVkFSSUFOVC5pbmNsdWRlcygnemgtJykgfHxcblx0XHQhKFxuXHRcdFx0d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKGAvJHtXR19VU0VSX1ZBUklBTlR9L2ApICYmXG5cdFx0XHRtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3ZhcmlhbnQnKSAhPT0gV0dfVVNFUl9WQVJJQU5UXG5cdFx0KVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0JChkb2N1bWVudCkub24oJ2tleWRvd24gbW91c2Vkb3duIHRvdWNoc3RhcnQnLCAnYScsIGZ1bmN0aW9uICgpOiB2b2lkIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcyBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblx0XHRjb25zdCBvcmlnaW5hbEhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICQoc2VsZikuYXR0cignaHJlZicpO1xuXHRcdGlmICghb3JpZ2luYWxIcmVmKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCB1cmk7XG5cdFx0dHJ5IHtcblx0XHRcdHVyaSA9IG5ldyBtdy5Vcmkob3JpZ2luYWxIcmVmKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCEoJ3ZhcmlhbnQnIGluIHVyaS5xdWVyeSkpIHtcblx0XHRcdGlmIChvcmlnaW5hbEhyZWYuaW5jbHVkZXMoJy93aWtpLycpKSB7XG5cdFx0XHRcdHNlbGYuaHJlZiA9IGAvJHtXR19VU0VSX1ZBUklBTlR9JHtvcmlnaW5hbEhyZWYuc2xpY2UoNSl9YDtcblx0XHRcdH0gZWxzZSBpZiAob3JpZ2luYWxIcmVmLmluY2x1ZGVzKCcvaW5kZXgucGhwPycpKSB7XG5cdFx0XHRcdHNlbGYuaHJlZiA9IHVyaVxuXHRcdFx0XHRcdC5leHRlbmQoe1xuXHRcdFx0XHRcdFx0dmFyaWFudDogV0dfVVNFUl9WQVJJQU5ULFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmdldFJlbGF0aXZlUGF0aCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59O1xuIiwgImltcG9ydCAnLi9Ob3RpZnlDb252ZXJzaW9uLmxlc3MnO1xuaW1wb3J0IHtHQURHRVRfTkFNRSwgR09PRF9WQVJJQU5UUywgV0dfVVNFUl9OQU1FfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtub3RpZnlDb252ZXJzaW9ufSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge3ByZXNlcnZlVmFyaWFudH0gZnJvbSAnLi9tb2R1bGVzL3ByZXNlcnZlVmFyaWFudCc7XG5cbigoKTogdm9pZCA9PiB7XG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpICE9PSAndmlldycpIHtcblx0XHRyZXR1cm47IC8vIOWPquWcqOa1j+iniOmhtemdouaXtuaYvuekulxuXHR9XG5cdGNvbnN0IHByZWZlcnJlZFZhcmlhbnQgPSAobXcuc3RvcmFnZS5nZXQoR0FER0VUX05BTUUpIHx8ICcnKS50b1N0cmluZygpO1xuXHRpZiAoIVsnaGlkZScsIC4uLkdPT0RfVkFSSUFOVFNdLmluY2x1ZGVzKHByZWZlcnJlZFZhcmlhbnQpKSB7XG5cdFx0Ly8g5piv5ZCm54K56L+H4oCc5LiN5YaN5o+Q56S64oCd5oiW5a6M5oiQ6L+H6K6+572uXG5cdFx0JChub3RpZnlDb252ZXJzaW9uKTtcblx0fSBlbHNlIGlmICghV0dfVVNFUl9OQU1FKSB7XG5cdFx0JChwcmVzZXJ2ZVZhcmlhbnQpO1xuXHR9XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxjQUFzQjtBQUU1QixJQUFNQyxxQkFBK0IsQ0FDcEMsU0FDQSxRQUNBLFVBQ0EsV0FDQSx5QkFDQSxzQkFDQSxxQkFDQSw4QkFDQSxlQUFBO0FBR0QsSUFBTUMsaUJBQTJCLENBQUMsVUFBVSx1QkFBdUIsbUJBQW1CO0FBRXRGLElBQU1DLGVBQXVCQyxHQUFHQyxPQUFPQyxJQUFJLFlBQVksS0FBSztBQUM1RCxJQUFNQyxpQkFBMkJILEdBQUdDLE9BQU9DLElBQUksY0FBYyxLQUFLLENBQUE7QUFDbEUsSUFBTUUsa0JBQWlDSixHQUFHQyxPQUFPQyxJQUFJLGVBQWU7QUFFcEUsSUFBTUcsZ0JBQTBCLENBQUMsU0FBUyxTQUFTLFNBQVMsU0FBUyxTQUFTLE9BQU87O0FDcEJyRixJQUFBQyxvQkFBdUJDLFFBQUEsaUJBQUE7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QUFHLGdDQUFnQyxLQUFLLFdBQWtCO0FBQ3JFLFVBQU1DLE9BQU87QUFDYixVQUFNQyxlQUFtQzFDLEVBQUV5QyxJQUFJLEVBQUVFLEtBQUssTUFBTTtBQUM1RCxRQUFJLENBQUNELGNBQWM7QUFDbEI7SUFDRDtBQUNBLFFBQUlFO0FBQ0osUUFBSTtBQUNIQSxZQUFNLElBQUlyRyxHQUFHc0csSUFBSUgsWUFBWTtJQUM5QixRQUFRO0FBQ1A7SUFDRDtBQUNBLFFBQUksRUFBRSxhQUFhRSxJQUFJRSxRQUFRO0FBQzlCLFVBQUlKLGFBQWFuRSxTQUFTLFFBQVEsR0FBRztBQUNwQ2tFLGFBQUt4RSxPQUFBLElBQUF3QixPQUFXOUMsZUFBZSxFQUFBOEMsT0FBR2lELGFBQWFLLE1BQU0sQ0FBQyxDQUFDO01BQ3hELFdBQVdMLGFBQWFuRSxTQUFTLGFBQWEsR0FBRztBQUNoRGtFLGFBQUt4RSxPQUFPMkUsSUFDVkksT0FBTztVQUNQMUQsU0FBUzNDO1FBQ1YsQ0FBQyxFQUNBc0csZ0JBQWdCO01BQ25CO0lBQ0Q7RUFDRCxDQUFDO0FBQ0Y7O0NDaENDLE1BQVk7QUFDWixNQUFJMUcsR0FBR0MsT0FBT0MsSUFBSSxVQUFVLE1BQU0sUUFBUTtBQUN6QztFQUNEO0FBQ0EsUUFBTXlHLHFCQUFvQjNHLEdBQUc4RSxRQUFRNUUsSUFBSU4sV0FBVyxLQUFLLElBQUlnSCxTQUFTO0FBQ3RFLE1BQUksQ0FBQyxDQUFDLFFBQVEsR0FBR3ZHLGFBQWEsRUFBRTJCLFNBQVMyRSxpQkFBZ0IsR0FBRztBQUUzRGxELE1BQUVtQyxnQkFBZ0I7RUFDbkIsV0FBVyxDQUFDN0YsY0FBYztBQUN6QjBELE1BQUVvQyxlQUFlO0VBQ2xCO0FBQ0QsR0FBRzsiLAogICJuYW1lcyI6IFsiR0FER0VUX05BTUUiLCAiU1lTVEVNX1NDUklQVF9MSVNUIiwgIldFQk1BU1RFUl9MSVNUIiwgIldHX1VTRVJfTkFNRSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1VTRVJfR1JPVVBTIiwgIldHX1VTRVJfVkFSSUFOVCIsICJHT09EX1ZBUklBTlRTIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImRpYWxvZ1RpdGxlIiwgImxvY2FsaXplIiwgImVuIiwgImRpYWxvZ0Rlc2MiLCAiZGlhbG9nRGVzY0V4dGVuZDEiLCAiZGlhbG9nRGVzY0V4dGVuZDIiLCAiemgiLCAicHJpdmFjeU5vdGljZU5vdExvZ2dlZEluIiwgInByaXZhY3lOb3RpY2VMb2dnZWRJbiIsICJjb25maXJtIiwgImNhbmNlbCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImxvY2F0aW9uSHJlZiIsICJsb2NhdGlvbiIsICJocmVmIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaXNFeHBlcmllbmNlZFVzZXIiLCAic29tZSIsICJlbGVtZW50IiwgImluY2x1ZGVzIiwgImlzTGFuZ3VhZ2VTZXQiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImlzV3JvbmdVUkwiLCAic2hvd0RpYWxvZyIsICJkaWFsb2dUaXRsZUljb24iLCAiT08iLCAidWkiLCAiSWNvbldpZGdldCIsICJpY29uIiwgInRpdGxlIiwgIkxhYmVsV2lkZ2V0IiwgImxhYmVsIiwgImdlbmVyYXRlQnV0dG9uIiwgInZhcmlhbnQiLCAiQnV0dG9uT3B0aW9uV2lkZ2V0IiwgImRhdGEiLCAiY29uY2F0IiwgImJ1dHRvblNlbGVjdCIsICJCdXR0b25TZWxlY3RXaWRnZXQiLCAiaXRlbXMiLCAicHJlZmVycmVkVmFyaWFudCIsICJzZWxlY3RJdGVtQnlEYXRhIiwgIiRkaWFsb2dUaXRsZSIsICIkIiwgImFkZENsYXNzIiwgImFwcGVuZCIsICIkZWxlbWVudCIsICIkZGlhbG9nTWVzc2FnZSIsICJ0ZXh0IiwgIndpbmRvd01hbmFnZXIiLCAiV2luZG93TWFuYWdlciIsICJhcHBlbmRUbyIsICJtZXNzYWdlRGlhbG9nIiwgIk1lc3NhZ2VEaWFsb2ciLCAibWVzc2FnZURpYWxvZ1Byb3BlcnR5IiwgIm1lc3NhZ2UiLCAiYWN0aW9ucyIsICJhY3Rpb24iLCAiZmxhZ3MiLCAic2l6ZSIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJjbGVhcldpbmRvd3MiLCAic3RvcmFnZSIsICJzZXQiLCAiUHJvY2VzcyIsICJVUkxfUkVHRVgiLCAic2VsZWN0ZWRJdGVtIiwgImZpbmRTZWxlY3RlZEl0ZW0iLCAiZ2V0RGF0YSIsICJzYXZlT3B0aW9uIiwgInRoZW4iLCAicmVwbGFjZSIsICJjb25maXJtZWQiLCAiX3JlZiIsICJ1c2VyIiwgIm9wdGlvbnMiLCAibm90aWZ5Q29udmVyc2lvbiIsICJwcmVzZXJ2ZVZhcmlhbnQiLCAid2luZG93IiwgInBhdGhuYW1lIiwgImRvY3VtZW50IiwgIm9uIiwgInNlbGYiLCAib3JpZ2luYWxIcmVmIiwgImF0dHIiLCAidXJpIiwgIlVyaSIsICJxdWVyeSIsICJzbGljZSIsICJleHRlbmQiLCAiZ2V0UmVsYXRpdmVQYXRoIiwgInByZWZlcnJlZFZhcmlhbnQyIiwgInRvU3RyaW5nIl0KfQo=
