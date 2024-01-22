/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/AjaxLogin}
 * @author 安忆 <i@anyi.in>
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

// dist/AjaxLogin/AjaxLogin.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
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
//! src/AjaxLogin/options.json
var loginElementSelector = 'a:has(.ajaxlogin-mount-point),#pt-login>a,.vector-user-menu-login>a,#user-tools>a[href*="Special"],.mainpage-top-menu>li:nth-child(2) a';
var version = "4.0";
//! src/AjaxLogin/AjaxLogin.ts
var import_ext_gadget13 = require("ext.gadget.Util");
//! src/AjaxLogin/modules/constant.ts
var WG_USER_NAME = mw.config.get("wgUserName");
//! src/AjaxLogin/modules/addListener.ts
var import_ext_gadget = require("ext.gadget.FilterAlteredClicks");
var addListener = ($element, eventListener) => {
  $element.on("click", (0, import_ext_gadget.filterAlteredClicks)((event) => {
    eventListener(event);
  }));
  $element.on("keydown", eventListener);
};
//! src/AjaxLogin/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("AjaxLogin/".concat(version));
//! src/AjaxLogin/modules/util/checkValid.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
//! src/AjaxLogin/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "6-digit number": (0, import_ext_gadget3.localize)({
      en: "6-digit number",
      ja: "6桁の数字",
      "zh-hans": "6位数字",
      "zh-hant": "6位數字"
    }),
    Cancel: (0, import_ext_gadget3.localize)({
      en: "Cancel",
      ja: "キャンセル",
      zh: "取消"
    }),
    "I agree": (0, import_ext_gadget3.localize)({
      en: "I agree",
      ja: "同意する",
      zh: "我同意"
    }),
    "Enter password": (0, import_ext_gadget3.localize)({
      en: "Enter password",
      ja: "パスワード",
      "zh-hans": "请输入密码",
      "zh-hant": "請輸入密碼"
    }),
    "Enter 2FA verification code": (0, import_ext_gadget3.localize)({
      en: "2FA verification code",
      ja: "2FA認証コード",
      "zh-hans": "请输入2FA验证码",
      "zh-hant": "請輸入2FA驗證碼"
    }),
    "Forgot password?": (0, import_ext_gadget3.localize)({
      en: "Forgot password?",
      ja: "パスワードをお忘れですか？",
      "zh-hans": "忘记密码？",
      "zh-hant": "忘記密碼？"
    }),
    "Getting login token": (0, import_ext_gadget3.localize)({
      en: "Getting login token",
      ja: "ログイントークンを取得しています",
      "zh-hans": "正在获取登录令牌",
      "zh-hant": "正在獲取登入權杖"
    }),
    "help for I agree with the relevant terms": (0, import_ext_gadget3.localize)({
      en: 'When you login, it means that you have carefully read, fully understood and agreed to comply with our <a rel="noopener" target="_blank" href="/wiki/QW:TOS" title="Terms of Service">Terms of Service</a>, <a rel="noopener" target="_blank" href="/wiki/QW:PIPP" title="Personal Information Protection Policy">Personal Information Protection Policy</a> and <em>the <a rel="noopener" target="_blank" href="/wiki/QW:GTGL" title="Common Program">Common Program</a></em>.',
      ja: 'ログインをすると、あなたは本サイトの『<a rel="noopener" target="_blank" href="/wiki/QW:TOS" title="利用規約">利用規約</a>』『<a rel="noopener" target="_blank" href="/wiki/QW:PIPP" title="個人情報保護方針">個人情報保護方針</a>』『<a rel="noopener" target="_blank" href="/wiki/QW:GTGL" title="共同綱領">共同綱領</a>』を十分に理解し、同意したことになります。',
      "zh-hans": '登录时，即代表您已仔细阅读、充分了解并同意遵守本网站的《<a rel="noopener" target="_blank" href="/wiki/QW:TOS" title="用户协议">用户协议</a>》、《<a rel="noopener" target="_blank" href="/wiki/QW:PIPP" title="个人信息保护方针">个人信息保护方针</a>》及《<a rel="noopener" target="_blank" href="/wiki/QW:GTGL" title="共同綱領">共同綱領</a>》。',
      "zh-hant": '登錄時，即代表您已仔細閱讀、充分了解並同意遵守本網站的《<a rel="noopener" target="_blank" href="/wiki/QW:TOS" title="用戶協議">用戶協議</a>》、《<a rel="noopener" target="_blank" href="/wiki/QW:PIPP" title="個人信息保護方針">個人信息保護方針</a>》及《<a rel="noopener" target="_blank" href="/wiki/QW:GTGL" title="共同綱領">共同綱領</a>》。'
    }),
    "I agree with the relevant terms": (0, import_ext_gadget3.localize)({
      en: "I agree with the relevant terms",
      ja: "関連する規約を読み、同意",
      "zh-hans": "我已阅读并同意相关条款",
      "zh-hant": "我已閲讀並同意相關條款"
    }),
    "Invalid 2FA verification code": (0, import_ext_gadget3.localize)({
      en: "Invalid 2FA verification code",
      ja: "2FA認証コードが間違っています",
      "zh-hans": "2FA验证码错误",
      "zh-hant": "2FA驗證碼錯誤"
    }),
    "Invalid useruame or password": (0, import_ext_gadget3.localize)({
      en: "Invalid useruame or password",
      ja: "利用者名またはパスワードが間違っています",
      "zh-cn": "用户名或密码错误",
      "zh-hk": "用戶名稱或密碼錯誤",
      "zh-tw": "使用者名稱或密碼錯誤"
    }),
    "Keep me logged in": (0, import_ext_gadget3.localize)({
      en: "Keep me logged in",
      ja: "ログイン状態を保持",
      "zh-hans": "记住我的登录状态",
      "zh-hant": "記住我的登入狀態"
    }),
    "Logging in": (0, import_ext_gadget3.localize)({
      en: "Logging in",
      ja: "ログインしています",
      "zh-hans": "正在登录",
      "zh-hant": "正在登入"
    }),
    Login: (0, import_ext_gadget3.localize)({
      en: "Login",
      ja: "ログイン",
      "zh-hans": "登录",
      "zh-hant": "登入"
    }),
    "Login cancelled": (0, import_ext_gadget3.localize)({
      en: "Login cancelled",
      ja: "ログインキャンセル",
      "zh-hans": "登录取消",
      "zh-hant": "登入取消"
    }),
    "Login succeed": (0, import_ext_gadget3.localize)({
      en: "Login succeed",
      ja: "ログインに成功しました",
      "zh-hans": "登录成功",
      "zh-hant": "登入成功"
    }),
    "Login token getted": (0, import_ext_gadget3.localize)({
      en: "Login token getted",
      ja: "ログイントークンの取得に成功しました",
      "zh-hans": "获取登录令牌成功",
      "zh-hant": "獲取登入權杖成功"
    }),
    "New password": (0, import_ext_gadget3.localize)({
      en: "New password",
      ja: "新しいパスワード",
      "zh-hans": "新密码",
      "zh-hant": "新密碼"
    }),
    "New password is required": (0, import_ext_gadget3.localize)({
      en: "New password is required",
      ja: "新しいパスワードを設定してください",
      "zh-hans": "需要设置新密码",
      "zh-hant": "需要設置新密碼"
    }),
    Password: (0, import_ext_gadget3.localize)({
      en: "Password",
      ja: "パスワード",
      "zh-hans": "密码",
      "zh-hant": "密碼"
    }),
    "Reset password": (0, import_ext_gadget3.localize)({
      en: "Reset password",
      ja: "パスワードをリセット",
      "zh-hans": "重置密码",
      "zh-hant": "重新設定密碼"
    }),
    Username: (0, import_ext_gadget3.localize)({
      en: "Username",
      ja: "利用者名",
      "zh-cn": "用户名",
      "zh-hk": "用戶名稱",
      "zh-tw": "使用者名稱"
    }),
    DoubleCheckAgreedOrNot: (0, import_ext_gadget3.localize)({
      en: 'You have carefully read, fully understood and agreed to comply with our <a rel="noopener" target="_blank" href="/wiki/QW:TOS" title="Terms of Service">Terms of Service</a>, <a rel="noopener" target="_blank" href="/wiki/QW:PIPP" title="Personal Information Protection Policy">Personal Information Protection Policy</a> and <a rel="noopener" target="_blank" href="/wiki/QW:GTGL" title="Common Program">Common Program</a>.',
      ja: 'あなたは本サイトの『<a rel="noopener" target="_blank" href="/wiki/QW:TOS" title="利用規約">利用規約</a>』『<a rel="noopener" target="_blank" href="/wiki/QW:PIPP" title="個人情報保護方針">個人情報保護方針</a>』『<a rel="noopener" target="_blank" href="/wiki/QW:GTGL" title="共同綱領">共同綱領</a>』を十分に理解し、同意したことになります。',
      "zh-hans": '您已仔细阅读、充分了解并同意遵守本网站的《<a rel="noopener" target="_blank" href="/wiki/QW:TOS" title="用户协议">用户协议</a>》《<a rel="noopener" target="_blank" href="/wiki/QW:PIPP" title="个人信息保护方针">个人信息保护方针</a>》《<a rel="noopener" target="_blank" href="/wiki/QW:GTGL" title="共同纲领">共同纲领</a>》。',
      "zh-hant": '您已仔細閱讀、充分了解並同意遵守本網站的《<a rel="noopener" target="_blank" href="/wiki/QW:TOS" title="用戶協議">用戶協議</a>》《<a rel="noopener" target="_blank" href="/wiki/QW:PIPP" title="個人信息保護方針">個人信息保護方針</a>》《<a rel="noopener" target="_blank" href="/wiki/QW:GTGL" title="共同綱領">共同綱領</a>》。'
    }),
    AgreedOrNot: (0, import_ext_gadget3.localize)({
      en: "Please read the relevant terms. If you agree, check the checkbox to confirm",
      ja: "関連する規約をお読みいただき、同意される場合は、チェックボックスにチェックを入れて確認してください",
      "zh-hans": "请阅读相关条款。若同意，勾选复选框以确认",
      "zh-hant": "請閲讀相關條款。若同意，勾選複選框以確認"
    }),
    Empty2FA: (0, import_ext_gadget3.localize)({
      en: "The 2FA verification code cannot be empty",
      ja: "2FA認証コードが入力されていません",
      "zh-hans": "2FA验证码不能为空",
      "zh-hant": "2FA驗證碼不能爲空"
    }),
    EmptyPassword: (0, import_ext_gadget3.localize)({
      en: "The password cannot be empty",
      ja: "パスワードが入力されていません",
      "zh-hans": "密码不能为空",
      "zh-hant": "密碼不能爲空"
    }),
    EmptyUsernameOrPassword: (0, import_ext_gadget3.localize)({
      en: "The username or password cannot be empty",
      ja: "利用者名またはパスワードが入力されていません",
      "zh-cn": "用户名或密码不能为空",
      "zh-hk": "用戶名稱或密碼不能爲空",
      "zh-tw": "使用者名稱或密碼不能爲空"
    }),
    "Network error": (0, import_ext_gadget3.localize)({
      en: "Network error. Redirecting...",
      ja: "ネットワークエラー、リダイレクト中...",
      "zh-hans": "网络异常。重定向中……",
      "zh-hant": "網路異常。重新導向中……"
    }),
    SelectedOrNot: (0, import_ext_gadget3.localize)({
      en: "If selected, the login status will be kept for 6 months. If not selected, it will be kept for 1 month.",
      ja: "チェックを入れるとログイン状態が6ヶ月間保持され、入れない場合は1ヶ月間保持されます。",
      "zh-hans": "勾选则保持登录状态6个月，不勾选则保持1个月。",
      "zh-hant": "勾選则保持登入狀態6個月，不勾選則保持1個月。"
    }),
    TooFrequent: (0, import_ext_gadget3.localize)({
      en: "The user login is too frequent, please try again in five minutes",
      ja: "利用者が頻繁すぎるため、5分後に再試行してください",
      "zh-cn": "用户登录过于频繁，请五分钟后再试",
      "zh-hk": "用戶登入過於頻繁，請五分鐘後再試",
      "zh-tw": "使用者登入过于频繁，请五分钟后再试"
    }),
    "Unexpected API response": (0, import_ext_gadget3.localize)({
      en: "Unexpected API response: $1. Redirecting...",
      ja: "予期せぬAPIの応答：$1、リダイレクト中...",
      "zh-hans": "意外的API响应：$1。重定向中……",
      "zh-hant": "意外的API響應：$1。重新導向中……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/AjaxLogin/modules/util/checkValid.tsx
var import_ext_gadget5 = require("ext.gadget.Toastify");
var checkValid = ([agreeTosCheckbox, nameInput, pwdInput], toastifyInstance) => {
  let isAgreeTos = agreeTosCheckbox.isSelected();
  const isFill = ![nameInput.getValue(), pwdInput.getValue()].includes("");
  toastifyInstance.hideToast();
  if (!isAgreeTos) {
    void OO.ui.confirm($(/* @__PURE__ */ import_ext_gadget4.default.createElement("span", null, getMessage("DoubleCheckAgreedOrNot"))), {
      actions: [{
        label: getMessage("Cancel"),
        action: "cancel",
        flags: ["safe", "close"]
      }, {
        label: getMessage("I agree"),
        action: "accept",
        flags: ["primary", "progressive"]
      }]
    }).then((confirmed) => {
      if (confirmed) {
        isAgreeTos = true;
        agreeTosCheckbox.setSelected(true);
      } else {
        isAgreeTos = false;
        toastifyInstance = (0, import_ext_gadget5.toastify)({
          text: getMessage("AgreedOrNot"),
          duration: -1
        }, "info");
      }
    });
  } else if (!isFill) {
    toastifyInstance = (0, import_ext_gadget5.toastify)({
      text: getMessage("EmptyUsernameOrPassword"),
      duration: -1
    }, "info");
  }
  const isValid = isAgreeTos && isFill;
  return {
    isValid,
    toastifyInstance
  };
};
//! src/AjaxLogin/modules/core.tsx
var import_ext_gadget11 = __toESM(require("ext.gadget.React"), 1);
//! src/AjaxLogin/modules/util/generateElements.tsx
var import_ext_gadget6 = __toESM(require("ext.gadget.React"), 1);
var generateElements = () => {
  const messageDialog = new OO.ui.MessageDialog();
  const nameInput = new OO.ui.TextInputWidget({
    icon: "userAvatar",
    placeholder: getMessage("Username"),
    validate: "non-empty"
  });
  const pwdInput = new OO.ui.TextInputWidget({
    icon: "key",
    placeholder: getMessage("Password"),
    type: "password",
    validate: "non-empty"
  });
  const agreeTosCheckbox = new OO.ui.CheckboxInputWidget();
  const agreeTosLayout = new OO.ui.FieldLayout(agreeTosCheckbox, {
    align: "inline",
    label: getMessage("I agree with the relevant terms")
  });
  const keepLoginCheckbox = new OO.ui.CheckboxInputWidget();
  const keepLoginLayout = new OO.ui.FieldLayout(keepLoginCheckbox, {
    align: "inline",
    help: getMessage("SelectedOrNot"),
    label: getMessage("Keep me logged in")
  });
  const label = /* @__PURE__ */ import_ext_gadget6.default.createElement("label", {
    className: ["oo-ui-labelWidget", "oo-ui-labelElement-label"],
    style: {
      fontSize: "90%",
      textAlign: "justify"
    }
  });
  const $label = $(label);
  const $agreeTos = $label.clone().append(agreeTosLayout.$element);
  const $forgotPassword = $label.clone().css("float", "right").append(/* @__PURE__ */ import_ext_gadget6.default.createElement("a", {
    href: mw.util.getUrl("Special:PasswordReset"),
    title: getMessage("Reset password")
  }, getMessage("Forgot password?")));
  const $inputBox = $label.clone().css({
    display: "block",
    "font-size": "inherit",
    padding: "6px 0"
  }).append(nameInput.$element.css("margin-bottom", "6px"), pwdInput.$element);
  const $tosLabel = $label.clone().html(getMessage("help for I agree with the relevant terms"));
  const $rememberMe = $label.clone().append(keepLoginLayout.$element.css("margin-top", "6px"));
  return {
    $agreeTos,
    $forgotPassword,
    $inputBox,
    $rememberMe,
    $tosLabel,
    agreeTosCheckbox,
    keepLoginCheckbox,
    messageDialog,
    nameInput,
    pwdInput
  };
};
//! src/AjaxLogin/modules/util/oouiPrompt.tsx
var import_ext_gadget7 = __toESM(require("ext.gadget.React"), 1);
//! src/AjaxLogin/modules/util/removeWindowResizeHandler.ts
var removeWindowResizeHandler = (windowManager) => {
  $(window).off({
    "orientationchange resize": windowManager.onWindowResizeHandler
  });
};
//! src/AjaxLogin/modules/util/oouiPrompt.tsx
var oouiPrompt = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (windowManager, retypePassword) {
    const codeDialog = new OO.ui.MessageDialog();
    const codeInput = new OO.ui.TextInputWidget({
      icon: "key",
      placeholder: retypePassword ? getMessage("New password") : getMessage("6-digit number"),
      validate: "integer"
    });
    const codeLayout = new OO.ui.FieldLayout(codeInput, {
      align: "top",
      label: $(/* @__PURE__ */ import_ext_gadget7.default.createElement("b", {
        className: ["oo-ui-messageDialog-title", "oo-ui-window-head"]
      }, retypePassword ? getMessage("Enter password") : getMessage("Enter 2FA verification code")))
    });
    windowManager.addWindows([codeDialog]);
    const instance = windowManager.openWindow(codeDialog, {
      message: codeLayout.$element
    });
    removeWindowResizeHandler(windowManager);
    void instance.opened.then(() => {
      codeInput.on("enter", () => {
        windowManager.getCurrentWindow().close({
          action: "accept"
        });
      });
      codeInput.focus();
    });
    const data = yield instance.closed;
    const _data = data;
    return (_data === null || _data === void 0 ? void 0 : _data.action) === "accept" ? codeInput.getValue() : null;
  });
  return function oouiPrompt2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
//! src/AjaxLogin/modules/util/queryLoginToken.ts
var import_ext_gadget8 = require("ext.gadget.Toastify");
var queryLoginToken = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (api2, toastifyInstance) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget8.toastify)({
      text: getMessage("Getting login token")
    });
    const loginToken = yield api2.getToken("login");
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget8.toastify)({
      text: getMessage("Login token getted"),
      duration: -1
    });
    return {
      loginToken,
      toastifyInstance
    };
  });
  return function queryLoginToken2(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/AjaxLogin/modules/util/redirectOriginLoginPage.ts
var import_ext_gadget9 = require("ext.gadget.Util");
var redirectOriginLoginPage = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (windowManager) {
    yield windowManager.clearWindows();
    yield (0, import_ext_gadget9.delay)(3 * 1e3);
    location.href = mw.util.getUrl("Special:Userlogin");
  });
  return function redirectOriginLoginPage2(_x5) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/AjaxLogin/modules/util/showError.ts
var import_ext_gadget10 = require("ext.gadget.Toastify");
var showError = (error, toastifyInstance) => {
  console.error("[AjaxLogin] Ajax error:", error);
  toastifyInstance.hideToast();
  (0, import_ext_gadget10.toastify)({
    text: getMessage("Network error"),
    close: true,
    duration: -1
  }, "error");
};
//! src/AjaxLogin/modules/core.tsx
var import_ext_gadget12 = require("ext.gadget.Toastify");
var ajaxLogin = (windowManager, toastifyInstance) => {
  const {
    $agreeTos,
    $forgotPassword,
    $inputBox,
    $rememberMe,
    $tosLabel,
    agreeTosCheckbox,
    keepLoginCheckbox,
    messageDialog,
    nameInput,
    pwdInput
  } = generateElements();
  let loginToken = "";
  const login = /* @__PURE__ */ function() {
    var _ref4 = _asyncToGenerator(function* ({
      loginContinue = false,
      retypePassword = false
    } = {}) {
      try {
        var _response$clientlogin, _response$clientlogin2;
        if (!loginContinue) {
          ({
            loginToken,
            toastifyInstance
          } = yield queryLoginToken(api, toastifyInstance));
        }
        const params = {
          action: "clientlogin",
          format: "json",
          formatversion: "2",
          logintoken: loginToken,
          loginreturnurl: location.href,
          username: nameInput.getValue(),
          password: pwdInput.getValue()
        };
        if (keepLoginCheckbox.isSelected()) {
          params.rememberMe = true;
        }
        if (loginContinue || retypePassword) {
          yield windowManager.clearWindows();
          delete params.loginreturnurl;
          delete params.username;
          delete params.password;
          params.logincontinue = true;
          const value = yield oouiPrompt(windowManager, retypePassword);
          toastifyInstance.hideToast();
          if (value === null) {
            (0, import_ext_gadget12.toastify)({
              text: getMessage("Login cancelled")
            }, "info");
            void windowManager.clearWindows();
            return;
          } else if (value === "") {
            if (retypePassword) {
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("EmptyPassword"),
                duration: -1
              }, "warning");
              void login({
                retypePassword: true
              });
            } else {
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("Empty2FA"),
                duration: -1
              }, "warning");
              void login({
                loginContinue: true
              });
            }
            return;
          }
          if (retypePassword) {
            params.password = value;
            params.retype = value;
          } else {
            params.OATHToken = value;
          }
        }
        toastifyInstance.hideToast();
        toastifyInstance = (0, import_ext_gadget12.toastify)({
          text: getMessage("Logging in")
        }, "info");
        const response = yield api.post(params);
        toastifyInstance.hideToast();
        if (((_response$clientlogin = response["clientlogin"]) === null || _response$clientlogin === void 0 ? void 0 : _response$clientlogin.status) === "PASS") {
          (0, import_ext_gadget12.toastify)({
            text: getMessage("Login succeed")
          }, "success");
          location.reload();
        } else if ((_response$clientlogin2 = response["clientlogin"]) !== null && _response$clientlogin2 !== void 0 && _response$clientlogin2.messagecode) {
          const {
            messagecode
          } = response["clientlogin"];
          switch (messagecode) {
            case "login-throttled":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("TooFrequent"),
                duration: -1
              }, "error");
              break;
            case "oathauth-auth-ui":
              void login({
                loginContinue: true
              });
              break;
            case "oathauth-login-failed":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("Invalid 2FA verification code"),
                duration: -1
              }, "warning");
              void login({
                loginContinue: true
              });
              break;
            case "resetpass-temp-emailed":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("New password is required"),
                duration: -1
              }, "warning");
              void login({
                retypePassword: true
              });
              break;
            case "wrongpassword":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("Invalid useruame or password"),
                duration: -1
              }, "warning");
              yield windowManager.clearWindows();
              ajaxLogin(windowManager, toastifyInstance);
              break;
            default:
              (0, import_ext_gadget12.toastify)({
                text: getMessage("Unexpected API response").replace("$1", messagecode),
                close: true,
                duration: -1
              }, "error");
              void redirectOriginLoginPage(windowManager);
          }
        }
      } catch (error) {
        showError(error, toastifyInstance);
        void redirectOriginLoginPage(windowManager);
      }
    });
    return function login2() {
      return _ref4.apply(this, arguments);
    };
  }();
  const needToCheckElements = [agreeTosCheckbox, nameInput, pwdInput];
  pwdInput.on("enter", () => {
    const {
      isValid,
      toastifyInstance: lastToastifyInstance
    } = checkValid(needToCheckElements, toastifyInstance);
    toastifyInstance = lastToastifyInstance;
    if (isValid) {
      void login();
    }
  });
  messageDialog.getActionProcess = (action) => new OO.ui.Process(() => {
    if (action === "login") {
      const {
        isValid,
        toastifyInstance: lastToastifyInstance
      } = checkValid(needToCheckElements, toastifyInstance);
      toastifyInstance = lastToastifyInstance;
      if (isValid) {
        void login();
      }
    } else {
      toastifyInstance.hideToast();
      void windowManager.clearWindows();
    }
  });
  windowManager.addWindows([messageDialog]);
  void windowManager.openWindow(messageDialog, {
    actions: [{
      action: "login",
      flags: ["primary", "progressive"],
      label: $(/* @__PURE__ */ import_ext_gadget11.default.createElement("b", null, getMessage("Login")))
    }, {
      action: "cancel",
      flags: ["safe", "close"],
      label: $(/* @__PURE__ */ import_ext_gadget11.default.createElement("b", null, getMessage("Cancel")))
    }],
    message: $(/* @__PURE__ */ import_ext_gadget11.default.createElement("div", {
      className: "oo-ui-window-foot"
    }, [$inputBox, $forgotPassword, $rememberMe, $agreeTos, $tosLabel])),
    title: $(/* @__PURE__ */ import_ext_gadget11.default.createElement("b", {
      className: "oo-ui-window-head"
    }, getMessage("Login"))),
    size: "small"
  });
  removeWindowResizeHandler(windowManager);
};
//! src/AjaxLogin/modules/initWindowManager.ts
var initWindowManager = () => {
  const windowManager = new OO.ui.WindowManager();
  return windowManager;
};
//! src/AjaxLogin/AjaxLogin.ts
void (0, import_ext_gadget13.getBody)().then(function initAutoLogin($body) {
  if (WG_USER_NAME) {
    return;
  }
  const $loginElement = $body.find(loginElementSelector);
  if (!$loginElement.length) {
    return;
  }
  const windowManager = initWindowManager();
  windowManager.$element.appendTo($body);
  const fakeToastifyInstance = {
    hideToast: () => {
    }
  };
  const eventListener = (event) => {
    if (!(0, import_ext_gadget13.checkA11yConfirmKey)(event)) {
      return;
    }
    event.preventDefault();
    ajaxLogin(windowManager, fakeToastifyInstance);
  };
  addListener($loginElement, eventListener);
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FqYXhMb2dpbi9vcHRpb25zLmpzb24iLCAic3JjL0FqYXhMb2dpbi9BamF4TG9naW4udHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9hZGRMaXN0ZW5lci50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvYXBpLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL2NoZWNrVmFsaWQudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9jb3JlLnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVsZW1lbnRzLnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpUHJvbXB0LnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL3F1ZXJ5TG9naW5Ub2tlbi50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZWRpcmVjdE9yaWdpbkxvZ2luUGFnZS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibG9naW5FbGVtZW50U2VsZWN0b3JcIjogXCJhOmhhcyguYWpheGxvZ2luLW1vdW50LXBvaW50KSwjcHQtbG9naW4+YSwudmVjdG9yLXVzZXItbWVudS1sb2dpbj5hLCN1c2VyLXRvb2xzPmFbaHJlZio9XFxcIlNwZWNpYWxcXFwiXSwubWFpbnBhZ2UtdG9wLW1lbnU+bGk6bnRoLWNoaWxkKDIpIGFcIixcblx0XCJ2ZXJzaW9uXCI6IFwiNC4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleSwgZ2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7V0dfVVNFUl9OQU1FfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2FkZExpc3RlbmVyJztcbmltcG9ydCB7YWpheExvZ2lufSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2luaXRXaW5kb3dNYW5hZ2VyfSBmcm9tICcuL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXInO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGluaXRBdXRvTG9naW4oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGlmIChXR19VU0VSX05BTUUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkbG9naW5FbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oT1BUSU9OUy5sb2dpbkVsZW1lbnRTZWxlY3Rvcik7XG5cdGlmICghJGxvZ2luRWxlbWVudC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gaW5pdFdpbmRvd01hbmFnZXIoKTtcblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cblx0Y29uc3QgZmFrZVRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblxuXHRjb25zdCBldmVudExpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRhamF4TG9naW4od2luZG93TWFuYWdlciwgZmFrZVRvYXN0aWZ5SW5zdGFuY2UpO1xuXHR9O1xuXHRhZGRMaXN0ZW5lcigkbG9naW5FbGVtZW50LCBldmVudExpc3RlbmVyKTtcbn0pO1xuIiwgImNvbnN0IFdHX1VTRVJfTkFNRTogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKTtcblxuZXhwb3J0IHtXR19VU0VSX05BTUV9O1xuIiwgImltcG9ydCB7ZmlsdGVyQWx0ZXJlZENsaWNrc30gZnJvbSAnZXh0LmdhZGdldC5GaWx0ZXJBbHRlcmVkQ2xpY2tzJztcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAoXG5cdCRlbGVtZW50OiBKUXVlcnksXG5cdGV2ZW50TGlzdGVuZXI6IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KSA9PiB2b2lkXG4pOiB2b2lkID0+IHtcblx0JGVsZW1lbnQub24oXG5cdFx0J2NsaWNrJyxcblx0XHRmaWx0ZXJBbHRlcmVkQ2xpY2tzKChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGV2ZW50TGlzdGVuZXIoZXZlbnQpO1xuXHRcdH0pXG5cdCk7XG5cdCRlbGVtZW50Lm9uKCdrZXlkb3duJywgZXZlbnRMaXN0ZW5lcik7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudHlwZSBDbGllbnRMb2dpblBhcmFtcyA9IEFwaUNsaWVudExvZ2luUGFyYW1zICYge1xuXHRsb2dpbmNvbnRpbnVlPzogYm9vbGVhbjtcblx0bG9naW50b2tlbjogc3RyaW5nO1xuXHRsb2dpbnJldHVybnVybD86IHN0cmluZztcblx0dXNlcm5hbWU/OiBzdHJpbmc7XG5cdHBhc3N3b3JkPzogc3RyaW5nO1xuXHRyZW1lbWJlck1lPzogYm9vbGVhbjtcblx0cmV0eXBlPzogc3RyaW5nO1xuXHRPQVRIVG9rZW4/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQWpheExvZ2luLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge3R5cGUgQ2xpZW50TG9naW5QYXJhbXMsIGFwaX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIE5lZWRUb0NoZWNrRWxlbWVudHMgPSBbT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCwgT08udWkuVGV4dElucHV0V2lkZ2V0LCBPTy51aS5UZXh0SW5wdXRXaWRnZXRdO1xuXG5jb25zdCBjaGVja1ZhbGlkID0gKFxuXHRbYWdyZWVUb3NDaGVja2JveCwgbmFtZUlucHV0LCBwd2RJbnB1dF06IE5lZWRUb0NoZWNrRWxlbWVudHMsXG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2Vcbik6IHtcblx0aXNWYWxpZDogYm9vbGVhbjtcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcbn0gPT4ge1xuXHRsZXQgaXNBZ3JlZVRvczogYm9vbGVhbiA9IGFncmVlVG9zQ2hlY2tib3guaXNTZWxlY3RlZCgpO1xuXHRjb25zdCBpc0ZpbGw6IGJvb2xlYW4gPSAhW25hbWVJbnB1dC5nZXRWYWx1ZSgpLCBwd2RJbnB1dC5nZXRWYWx1ZSgpXS5pbmNsdWRlcygnJyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblxuXHRpZiAoIWlzQWdyZWVUb3MpIHtcblx0XHR2b2lkIE9PLnVpXG5cdFx0XHQuY29uZmlybSgkKCg8c3Bhbj57Z2V0TWVzc2FnZSgnRG91YmxlQ2hlY2tBZ3JlZWRPck5vdCcpfTwvc3Bhbj4pIGFzIEhUTUxFbGVtZW50KSwge1xuXHRcdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdFx0e2xhYmVsOiBnZXRNZXNzYWdlKCdDYW5jZWwnKSwgYWN0aW9uOiAnY2FuY2VsJywgZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddfSxcblx0XHRcdFx0XHR7bGFiZWw6IGdldE1lc3NhZ2UoJ0kgYWdyZWUnKSwgYWN0aW9uOiAnYWNjZXB0JywgZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddfSxcblx0XHRcdFx0XSxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoY29uZmlybWVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdGlmIChjb25maXJtZWQpIHtcblx0XHRcdFx0XHRpc0FncmVlVG9zID0gdHJ1ZTtcblx0XHRcdFx0XHRhZ3JlZVRvc0NoZWNrYm94LnNldFNlbGVjdGVkKHRydWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlzQWdyZWVUb3MgPSBmYWxzZTtcblx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0FncmVlZE9yTm90JyksXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQnaW5mbydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fSBlbHNlIGlmICghaXNGaWxsKSB7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdFbXB0eVVzZXJuYW1lT3JQYXNzd29yZCcpLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IGlzVmFsaWQ6IGJvb2xlYW4gPSBpc0FncmVlVG9zICYmIGlzRmlsbDtcblxuXHRyZXR1cm4ge1xuXHRcdGlzVmFsaWQsXG5cdFx0dG9hc3RpZnlJbnN0YW5jZSxcblx0fTtcbn07XG5cbmV4cG9ydCB7dHlwZSBOZWVkVG9DaGVja0VsZW1lbnRzLCBjaGVja1ZhbGlkfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0JzYtZGlnaXQgbnVtYmVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc2LWRpZ2l0IG51bWJlcicsXG5cdFx0XHRqYTogJzbmoYHjga7mlbDlrZcnLFxuXHRcdFx0J3poLWhhbnMnOiAnNuS9jeaVsOWtlycsXG5cdFx0XHQnemgtaGFudCc6ICc25L2N5pW45a2XJyxcblx0XHR9KSxcblx0XHRDYW5jZWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2FuY2VsJyxcblx0XHRcdGphOiAn44Kt44Oj44Oz44K744OrJyxcblx0XHRcdHpoOiAn5Y+W5raIJyxcblx0XHR9KSxcblx0XHQnSSBhZ3JlZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSSBhZ3JlZScsXG5cdFx0XHRqYTogJ+WQjOaEj+OBmeOCiycsXG5cdFx0XHR6aDogJ+aIkeWQjOaEjycsXG5cdFx0fSksXG5cdFx0J0VudGVyIHBhc3N3b3JkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFbnRlciBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICfor7fovpPlhaXlr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6Ly45YWl5a+G56K8Jyxcblx0XHR9KSxcblx0XHQnRW50ZXIgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcyRkEgdmVyaWZpY2F0aW9uIGNvZGUnLFxuXHRcdFx0amE6ICcyRkHoqo3oqLzjgrPjg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+36L6T5YWlMkZB6aqM6K+B56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+i8uOWFpTJGQempl+itieeivCcsXG5cdFx0fSksXG5cdFx0J0ZvcmdvdCBwYXNzd29yZD8nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZvcmdvdCBwYXNzd29yZD8nLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4njgpLjgYrlv5jjgozjgafjgZnjgYvvvJ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5b+Y6K6w5a+G56CB77yfJyxcblx0XHRcdCd6aC1oYW50JzogJ+W/mOiomOWvhueivO+8nycsXG5cdFx0fSksXG5cdFx0J0dldHRpbmcgbG9naW4gdG9rZW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0dldHRpbmcgbG9naW4gdG9rZW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7Pjg4jjg7zjgq/jg7PjgpLlj5blvpfjgZfjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo6I635Y+W55m75b2V5Luk54mMJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOeNsuWPlueZu+WFpeasiuadlicsXG5cdFx0fSksXG5cdFx0J2hlbHAgZm9yIEkgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1doZW4geW91IGxvZ2luLCBpdCBtZWFucyB0aGF0IHlvdSBoYXZlIGNhcmVmdWxseSByZWFkLCBmdWxseSB1bmRlcnN0b29kIGFuZCBhZ3JlZWQgdG8gY29tcGx5IHdpdGggb3VyIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwiVGVybXMgb2YgU2VydmljZVwiPlRlcm1zIG9mIFNlcnZpY2U8L2E+LCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCJQZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeVwiPlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5PC9hPiBhbmQgPGVtPnRoZSA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCJDb21tb24gUHJvZ3JhbVwiPkNvbW1vbiBQcm9ncmFtPC9hPjwvZW0+LicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+OCkuOBmeOCi+OBqOOAgeOBguOBquOBn+OBr+acrOOCteOCpOODiOOBruOAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwi5Yip55So6KaP57SEXCI+5Yip55So6KaP57SEPC9hPuOAj+OAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFBcIiB0aXRsZT1cIuWAi+S6uuaDheWgseS/neitt+aWuemHnVwiPuWAi+S6uuaDheWgseS/neitt+aWuemHnTwvYT7jgI/jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCLlhbHlkIzntrHpoJhcIj7lhbHlkIzntrHpoJg8L2E+44CP44KS5Y2B5YiG44Gr55CG6Kej44GX44CB5ZCM5oSP44GX44Gf44GT44Go44Gr44Gq44KK44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+eZu+W9leaXtu+8jOWNs+S7o+ihqOaCqOW3suS7lOe7humYheivu+OAgeWFheWIhuS6huino+W5tuWQjOaEj+mBteWuiOacrOe9keermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwi55So5oi35Y2P6K6uXCI+55So5oi35Y2P6K6uPC9hPuOAi+OAgeOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFBcIiB0aXRsZT1cIuS4quS6uuS/oeaBr+S/neaKpOaWuemSiFwiPuS4quS6uuS/oeaBr+S/neaKpOaWuemSiDwvYT7jgIvlj4rjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCLlhbHlkIzntrHpoJhcIj7lhbHlkIzntrHpoJg8L2E+44CL44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+eZu+mMhOaZgu+8jOWNs+S7o+ihqOaCqOW3suS7lOe0sOmWseiugOOAgeWFheWIhuS6huino+S4puWQjOaEj+mBteWuiOacrOe2suermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwi55So5oi25Y2U6K2wXCI+55So5oi25Y2U6K2wPC9hPuOAi+OAgeOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFBcIiB0aXRsZT1cIuWAi+S6uuS/oeaBr+S/neitt+aWuemHnVwiPuWAi+S6uuS/oeaBr+S/neitt+aWuemHnTwvYT7jgIvlj4rjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCLlhbHlkIzntrHpoJhcIj7lhbHlkIzntrHpoJg8L2E+44CL44CCJyxcblx0XHR9KSxcblx0XHQnSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcycsXG5cdFx0XHRqYTogJ+mWoumAo+OBmeOCi+imj+e0hOOCkuiqreOBv+OAgeWQjOaEjycsXG5cdFx0XHQnemgtaGFucyc6ICfmiJHlt7LpmIXor7vlubblkIzmhI/nm7jlhbPmnaHmrL4nLFxuXHRcdFx0J3poLWhhbnQnOiAn5oiR5bey6Zay6K6A5Lim5ZCM5oSP55u46Zec5qKd5qy+Jyxcblx0XHR9KSxcblx0XHQnSW52YWxpZCAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludmFsaWQgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJyxcblx0XHRcdGphOiAnMkZB6KqN6Ki844Kz44O844OJ44GM6ZaT6YGV44Gj44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJzJGQemqjOivgeeggemUmeivrycsXG5cdFx0XHQnemgtaGFudCc6ICcyRkHpqZforYnnorzpjK/oqqQnLFxuXHRcdH0pLFxuXHRcdCdJbnZhbGlkIHVzZXJ1YW1lIG9yIHBhc3N3b3JkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbnZhbGlkIHVzZXJ1YW1lIG9yIHBhc3N3b3JkJyxcblx0XHRcdGphOiAn5Yip55So6ICF5ZCN44G+44Gf44Gv44OR44K544Ov44O844OJ44GM6ZaT6YGV44Gj44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1jbic6ICfnlKjmiLflkI3miJblr4bnoIHplJnor68nLFxuXHRcdFx0J3poLWhrJzogJ+eUqOaItuWQjeeoseaIluWvhueivOmMr+iqpCcsXG5cdFx0XHQnemgtdHcnOiAn5L2/55So6ICF5ZCN56ix5oiW5a+G56K86Yyv6KqkJyxcblx0XHR9KSxcblx0XHQnS2VlcCBtZSBsb2dnZWQgaW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0tlZXAgbWUgbG9nZ2VkIGluJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz54q25oWL44KS5L+d5oyBJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iusOS9j+aIkeeahOeZu+W9leeKtuaAgScsXG5cdFx0XHQnemgtaGFudCc6ICfoqJjkvY/miJHnmoTnmbvlhaXni4DmhYsnLFxuXHRcdH0pLFxuXHRcdCdMb2dnaW5nIGluJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dnaW5nIGluJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44GX44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOeZu+W9lScsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjnmbvlhaUnLFxuXHRcdH0pLFxuXHRcdExvZ2luOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2luJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44OzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eZu+W9lScsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlhaUnLFxuXHRcdH0pLFxuXHRcdCdMb2dpbiBjYW5jZWxsZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2luIGNhbmNlbGxlZCcsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHQnemgtaGFucyc6ICfnmbvlvZXlj5bmtognLFxuXHRcdFx0J3poLWhhbnQnOiAn55m75YWl5Y+W5raIJyxcblx0XHR9KSxcblx0XHQnTG9naW4gc3VjY2VlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4gc3VjY2VlZCcsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+OBq+aIkOWKn+OBl+OBvuOBl+OBnycsXG5cdFx0XHQnemgtaGFucyc6ICfnmbvlvZXmiJDlip8nLFxuXHRcdFx0J3poLWhhbnQnOiAn55m75YWl5oiQ5YqfJyxcblx0XHR9KSxcblx0XHQnTG9naW4gdG9rZW4gZ2V0dGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbiB0b2tlbiBnZXR0ZWQnLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7Pjg4jjg7zjgq/jg7Pjga7lj5blvpfjgavmiJDlip/jgZfjgb7jgZfjgZ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn6I635Y+W55m75b2V5Luk54mM5oiQ5YqfJyxcblx0XHRcdCd6aC1oYW50JzogJ+eNsuWPlueZu+WFpeasiuadluaIkOWKnycsXG5cdFx0fSksXG5cdFx0J05ldyBwYXNzd29yZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV3IHBhc3N3b3JkJyxcblx0XHRcdGphOiAn5paw44GX44GE44OR44K544Ov44O844OJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aWsOWvhueggScsXG5cdFx0XHQnemgtaGFudCc6ICfmlrDlr4bnorwnLFxuXHRcdH0pLFxuXHRcdCdOZXcgcGFzc3dvcmQgaXMgcmVxdWlyZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldyBwYXNzd29yZCBpcyByZXF1aXJlZCcsXG5cdFx0XHRqYTogJ+aWsOOBl+OBhOODkeOCueODr+ODvOODieOCkuioreWumuOBl+OBpuOBj+OBoOOBleOBhCcsXG5cdFx0XHQnemgtaGFucyc6ICfpnIDopoHorr7nva7mlrDlr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6ZyA6KaB6Kit572u5paw5a+G56K8Jyxcblx0XHR9KSxcblx0XHRQYXNzd29yZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXNzd29yZCcsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICflr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+G56K8Jyxcblx0XHR9KSxcblx0XHQnUmVzZXQgcGFzc3dvcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Jlc2V0IHBhc3N3b3JkJyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJ44KS44Oq44K744OD44OIJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mHjee9ruWvhueggScsXG5cdFx0XHQnemgtaGFudCc6ICfph43mlrDoqK3lrprlr4bnorwnLFxuXHRcdH0pLFxuXHRcdFVzZXJuYW1lOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1VzZXJuYW1lJyxcblx0XHRcdGphOiAn5Yip55So6ICF5ZCNJyxcblx0XHRcdCd6aC1jbic6ICfnlKjmiLflkI0nLFxuXHRcdFx0J3poLWhrJzogJ+eUqOaItuWQjeeosScsXG5cdFx0XHQnemgtdHcnOiAn5L2/55So6ICF5ZCN56ixJyxcblx0XHR9KSxcblx0XHREb3VibGVDaGVja0FncmVlZE9yTm90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBoYXZlIGNhcmVmdWxseSByZWFkLCBmdWxseSB1bmRlcnN0b29kIGFuZCBhZ3JlZWQgdG8gY29tcGx5IHdpdGggb3VyIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwiVGVybXMgb2YgU2VydmljZVwiPlRlcm1zIG9mIFNlcnZpY2U8L2E+LCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCJQZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeVwiPlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5PC9hPiBhbmQgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwiQ29tbW9uIFByb2dyYW1cIj5Db21tb24gUHJvZ3JhbTwvYT4uJyxcblx0XHRcdGphOiAn44GC44Gq44Gf44Gv5pys44K144Kk44OI44Gu44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCLliKnnlKjopo/ntIRcIj7liKnnlKjopo/ntIQ8L2E+44CP44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUFwiIHRpdGxlPVwi5YCL5Lq65oOF5aCx5L+d6K235pa56YedXCI+5YCL5Lq65oOF5aCx5L+d6K235pa56YedPC9hPuOAj+OAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIuWFseWQjOe2semgmFwiPuWFseWQjOe2semgmDwvYT7jgI/jgpLljYHliIbjgavnkIbop6PjgZfjgIHlkIzmhI/jgZfjgZ/jgZPjgajjgavjgarjgorjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo5bey5LuU57uG6ZiF6K+744CB5YWF5YiG5LqG6Kej5bm25ZCM5oSP6YG15a6I5pys572R56uZ55qE44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCLnlKjmiLfljY/orq5cIj7nlKjmiLfljY/orq48L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUFwiIHRpdGxlPVwi5Liq5Lq65L+h5oGv5L+d5oqk5pa56ZKIXCI+5Liq5Lq65L+h5oGv5L+d5oqk5pa56ZKIPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIuWFseWQjOe6sumihlwiPuWFseWQjOe6sumihjwvYT7jgIvjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo5bey5LuU57Sw6Zax6K6A44CB5YWF5YiG5LqG6Kej5Lim5ZCM5oSP6YG15a6I5pys57ay56uZ55qE44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCLnlKjmiLbljZTorbBcIj7nlKjmiLbljZTorbA8L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUFwiIHRpdGxlPVwi5YCL5Lq65L+h5oGv5L+d6K235pa56YedXCI+5YCL5Lq65L+h5oGv5L+d6K235pa56YedPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIuWFseWQjOe2semgmFwiPuWFseWQjOe2semgmDwvYT7jgIvjgIInLFxuXHRcdH0pLFxuXHRcdEFncmVlZE9yTm90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BsZWFzZSByZWFkIHRoZSByZWxldmFudCB0ZXJtcy4gSWYgeW91IGFncmVlLCBjaGVjayB0aGUgY2hlY2tib3ggdG8gY29uZmlybScsXG5cdFx0XHRqYTogJ+mWoumAo+OBmeOCi+imj+e0hOOCkuOBiuiqreOBv+OBhOOBn+OBoOOBjeOAgeWQjOaEj+OBleOCjOOCi+WgtOWQiOOBr+OAgeODgeOCp+ODg+OCr+ODnOODg+OCr+OCueOBq+ODgeOCp+ODg+OCr+OCkuWFpeOCjOOBpueiuuiqjeOBl+OBpuOBj+OBoOOBleOBhCcsXG5cdFx0XHQnemgtaGFucyc6ICfor7fpmIXor7vnm7jlhbPmnaHmrL7jgILoi6XlkIzmhI/vvIzli77pgInlpI3pgInmoYbku6Xnoa7orqQnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6Zay6K6A55u46Zec5qKd5qy+44CC6Iul5ZCM5oSP77yM5Yu+6YG46KSH6YG45qGG5Lul56K66KqNJyxcblx0XHR9KSxcblx0XHRFbXB0eTJGQTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgMkZBIHZlcmlmaWNhdGlvbiBjb2RlIGNhbm5vdCBiZSBlbXB0eScsXG5cdFx0XHRqYTogJzJGQeiqjeiovOOCs+ODvOODieOBjOWFpeWKm+OBleOCjOOBpuOBhOOBvuOBm+OCkycsXG5cdFx0XHQnemgtaGFucyc6ICcyRkHpqozor4HnoIHkuI3og73kuLrnqbonLFxuXHRcdFx0J3poLWhhbnQnOiAnMkZB6amX6K2J56K85LiN6IO954iy56m6Jyxcblx0XHR9KSxcblx0XHRFbXB0eVBhc3N3b3JkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSBwYXNzd29yZCBjYW5ub3QgYmUgZW1wdHknLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4njgYzlhaXlipvjgZXjgozjgabjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a+G56CB5LiN6IO95Li656m6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WvhueivOS4jeiDveeIsuepuicsXG5cdFx0fSksXG5cdFx0RW1wdHlVc2VybmFtZU9yUGFzc3dvcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIHVzZXJuYW1lIG9yIHBhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eScsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheWQjeOBvuOBn+OBr+ODkeOCueODr+ODvOODieOBjOWFpeWKm+OBleOCjOOBpuOBhOOBvuOBm+OCkycsXG5cdFx0XHQnemgtY24nOiAn55So5oi35ZCN5oiW5a+G56CB5LiN6IO95Li656m6Jyxcblx0XHRcdCd6aC1oayc6ICfnlKjmiLblkI3nqLHmiJblr4bnorzkuI3og73niLLnqbonLFxuXHRcdFx0J3poLXR3JzogJ+S9v+eUqOiAheWQjeeoseaIluWvhueivOS4jeiDveeIsuepuicsXG5cdFx0fSksXG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3IuIFJlZGlyZWN0aW5nLi4uJyxcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O844CB44Oq44OA44Kk44Os44Kv44OI5LitLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uOOAgumHjeWumuWQkeS4reKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLjjgILph43mlrDlsI7lkJHkuK3igKbigKYnLFxuXHRcdH0pLFxuXHRcdFNlbGVjdGVkT3JOb3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSWYgc2VsZWN0ZWQsIHRoZSBsb2dpbiBzdGF0dXMgd2lsbCBiZSBrZXB0IGZvciA2IG1vbnRocy4gSWYgbm90IHNlbGVjdGVkLCBpdCB3aWxsIGJlIGtlcHQgZm9yIDEgbW9udGguJyxcblx0XHRcdGphOiAn44OB44Kn44OD44Kv44KS5YWl44KM44KL44Go44Ot44Kw44Kk44Oz54q25oWL44GMNuODtuaciOmWk+S/neaMgeOBleOCjOOAgeWFpeOCjOOBquOBhOWgtOWQiOOBrzHjg7bmnIjplpPkv53mjIHjgZXjgozjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yu+6YCJ5YiZ5L+d5oyB55m75b2V54q25oCBNuS4quaciO+8jOS4jeWLvumAieWImeS/neaMgTHkuKrmnIjjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yu+6YG45YiZ5L+d5oyB55m75YWl54uA5oWLNuWAi+aciO+8jOS4jeWLvumBuOWJh+S/neaMgTHlgIvmnIjjgIInLFxuXHRcdH0pLFxuXHRcdFRvb0ZyZXF1ZW50OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSB1c2VyIGxvZ2luIGlzIHRvbyBmcmVxdWVudCwgcGxlYXNlIHRyeSBhZ2FpbiBpbiBmaXZlIG1pbnV0ZXMnLFxuXHRcdFx0amE6ICfliKnnlKjogIXjgYzpoLvnuYHjgZnjgY7jgovjgZ/jgoHjgIE15YiG5b6M44Gr5YaN6Kmm6KGM44GX44Gm44GP44Gg44GV44GEJyxcblx0XHRcdCd6aC1jbic6ICfnlKjmiLfnmbvlvZXov4fkuo7popHnuYHvvIzor7fkupTliIbpkp/lkI7lho3or5UnLFxuXHRcdFx0J3poLWhrJzogJ+eUqOaItueZu+WFpemBjuaWvOmgu+e5ge+8jOiri+S6lOWIhumQmOW+jOWGjeippicsXG5cdFx0XHQnemgtdHcnOiAn5L2/55So6ICF55m75YWl6L+H5LqO6aKR57mB77yM6K+35LqU5YiG6ZKf5ZCO5YaN6K+VJyxcblx0XHR9KSxcblx0XHQnVW5leHBlY3RlZCBBUEkgcmVzcG9uc2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1VuZXhwZWN0ZWQgQVBJIHJlc3BvbnNlOiAkMS4gUmVkaXJlY3RpbmcuLi4nLFxuXHRcdFx0amE6ICfkuojmnJ/jgZvjgaxBUEnjga7lv5znrZTvvJokMeOAgeODquODgOOCpOODrOOCr+ODiOS4rS4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfmhI/lpJbnmoRBUEnlk43lupTvvJokMeOAgumHjeWumuWQkeS4reKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfmhI/lpJbnmoRBUEnpn7/mh4nvvJokMeOAgumHjeaWsOWwjuWQkeS4reKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge3R5cGUgQ2xpZW50TG9naW5QYXJhbXMsIGFwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt0eXBlIE5lZWRUb0NoZWNrRWxlbWVudHMsIGNoZWNrVmFsaWR9IGZyb20gJy4vdXRpbC9jaGVja1ZhbGlkJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2VuZXJhdGVFbGVtZW50c30gZnJvbSAnLi91dGlsL2dlbmVyYXRlRWxlbWVudHMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtvb3VpUHJvbXB0fSBmcm9tICcuL3V0aWwvb291aVByb21wdCc7XG5pbXBvcnQge3F1ZXJ5TG9naW5Ub2tlbn0gZnJvbSAnLi91dGlsL3F1ZXJ5TG9naW5Ub2tlbic7XG5pbXBvcnQge3JlZGlyZWN0T3JpZ2luTG9naW5QYWdlfSBmcm9tICcuL3V0aWwvcmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2UnO1xuaW1wb3J0IHtyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyfSBmcm9tICcuL3V0aWwvcmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcic7XG5pbXBvcnQge3Nob3dFcnJvcn0gZnJvbSAnLi91dGlsL3Nob3dFcnJvcic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgYWpheExvZ2luID0gKHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIsIHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UpOiB2b2lkID0+IHtcblx0Y29uc3Qge1xuXHRcdCRhZ3JlZVRvcyxcblx0XHQkZm9yZ290UGFzc3dvcmQsXG5cdFx0JGlucHV0Qm94LFxuXHRcdCRyZW1lbWJlck1lLFxuXHRcdCR0b3NMYWJlbCxcblx0XHRhZ3JlZVRvc0NoZWNrYm94LFxuXHRcdGtlZXBMb2dpbkNoZWNrYm94LFxuXHRcdG1lc3NhZ2VEaWFsb2csXG5cdFx0bmFtZUlucHV0LFxuXHRcdHB3ZElucHV0LFxuXHR9ID0gZ2VuZXJhdGVFbGVtZW50cygpO1xuXG5cdGxldCBsb2dpblRva2VuOiBzdHJpbmcgPSAnJztcblx0Y29uc3QgbG9naW4gPSBhc3luYyAoe2xvZ2luQ29udGludWUgPSBmYWxzZSwgcmV0eXBlUGFzc3dvcmQgPSBmYWxzZX0gPSB7fSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoIWxvZ2luQ29udGludWUpIHtcblx0XHRcdFx0KHtsb2dpblRva2VuLCB0b2FzdGlmeUluc3RhbmNlfSA9IGF3YWl0IHF1ZXJ5TG9naW5Ub2tlbihhcGksIHRvYXN0aWZ5SW5zdGFuY2UpKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGFyYW1zOiBDbGllbnRMb2dpblBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnY2xpZW50bG9naW4nLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRsb2dpbnRva2VuOiBsb2dpblRva2VuLFxuXHRcdFx0XHRsb2dpbnJldHVybnVybDogbG9jYXRpb24uaHJlZixcblx0XHRcdFx0dXNlcm5hbWU6IG5hbWVJbnB1dC5nZXRWYWx1ZSgpLFxuXHRcdFx0XHRwYXNzd29yZDogcHdkSW5wdXQuZ2V0VmFsdWUoKSxcblx0XHRcdH07XG5cdFx0XHRpZiAoa2VlcExvZ2luQ2hlY2tib3guaXNTZWxlY3RlZCgpKSB7XG5cdFx0XHRcdHBhcmFtcy5yZW1lbWJlck1lID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChsb2dpbkNvbnRpbnVlIHx8IHJldHlwZVBhc3N3b3JkKSB7XG5cdFx0XHRcdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMubG9naW5yZXR1cm51cmw7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMudXNlcm5hbWU7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMucGFzc3dvcmQ7XG5cdFx0XHRcdHBhcmFtcy5sb2dpbmNvbnRpbnVlID0gdHJ1ZTtcblxuXHRcdFx0XHRjb25zdCB2YWx1ZTogc3RyaW5nIHwgbnVsbCA9IGF3YWl0IG9vdWlQcm9tcHQod2luZG93TWFuYWdlciwgcmV0eXBlUGFzc3dvcmQpO1xuXG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2luIGNhbmNlbGxlZCcpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCdpbmZvJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09PSAnJykge1xuXHRcdFx0XHRcdGlmIChyZXR5cGVQYXNzd29yZCkge1xuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRW1wdHlQYXNzd29yZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdHJldHlwZVBhc3N3b3JkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0VtcHR5MkZBJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR2b2lkIGxvZ2luKHtcblx0XHRcdFx0XHRcdFx0bG9naW5Db250aW51ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXR5cGVQYXNzd29yZCkge1xuXHRcdFx0XHRcdHBhcmFtcy5wYXNzd29yZCA9IHZhbHVlO1xuXHRcdFx0XHRcdHBhcmFtcy5yZXR5cGUgPSB2YWx1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwYXJhbXMuT0FUSFRva2VuID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2dpbmcgaW4nKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2luZm8nXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IChhd2FpdCBhcGkucG9zdChwYXJhbXMpKSBhcyB7XG5cdFx0XHRcdGNsaWVudGxvZ2luOiB7XG5cdFx0XHRcdFx0c3RhdHVzPzogc3RyaW5nO1xuXHRcdFx0XHRcdG1lc3NhZ2Vjb2RlPzogc3RyaW5nO1xuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblxuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblxuXHRcdFx0aWYgKHJlc3BvbnNlWydjbGllbnRsb2dpbiddPy5zdGF0dXMgPT09ICdQQVNTJykge1xuXHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdMb2dpbiBzdWNjZWVkJyksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQnc3VjY2Vzcydcblx0XHRcdFx0KTtcblx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlWydjbGllbnRsb2dpbiddPy5tZXNzYWdlY29kZSkge1xuXHRcdFx0XHRjb25zdCB7bWVzc2FnZWNvZGV9ID0gcmVzcG9uc2VbJ2NsaWVudGxvZ2luJ107XG5cdFx0XHRcdHN3aXRjaCAobWVzc2FnZWNvZGUpIHtcblx0XHRcdFx0XHRjYXNlICdsb2dpbi10aHJvdHRsZWQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnVG9vRnJlcXVlbnQnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCdlcnJvcidcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdvYXRoYXV0aC1hdXRoLXVpJzpcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRsb2dpbkNvbnRpbnVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdvYXRoYXV0aC1sb2dpbi1mYWlsZWQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnSW52YWxpZCAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRsb2dpbkNvbnRpbnVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdyZXNldHBhc3MtdGVtcC1lbWFpbGVkJzpcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldyBwYXNzd29yZCBpcyByZXF1aXJlZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdHJldHlwZVBhc3N3b3JkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd3cm9uZ3Bhc3N3b3JkJzpcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0ludmFsaWQgdXNlcnVhbWUgb3IgcGFzc3dvcmQnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0XHRcdFx0XHRhamF4TG9naW4od2luZG93TWFuYWdlciwgdG9hc3RpZnlJbnN0YW5jZSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdVbmV4cGVjdGVkIEFQSSByZXNwb25zZScpLnJlcGxhY2UoJyQxJywgbWVzc2FnZWNvZGUpLFxuXHRcdFx0XHRcdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J2Vycm9yJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgcmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2Uod2luZG93TWFuYWdlcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0c2hvd0Vycm9yKGVycm9yLCB0b2FzdGlmeUluc3RhbmNlKTtcblx0XHRcdHZvaWQgcmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2Uod2luZG93TWFuYWdlcik7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IG5lZWRUb0NoZWNrRWxlbWVudHM6IE5lZWRUb0NoZWNrRWxlbWVudHMgPSBbYWdyZWVUb3NDaGVja2JveCwgbmFtZUlucHV0LCBwd2RJbnB1dF07XG5cblx0cHdkSW5wdXQub24oJ2VudGVyJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHtpc1ZhbGlkLCB0b2FzdGlmeUluc3RhbmNlOiBsYXN0VG9hc3RpZnlJbnN0YW5jZX0gPSBjaGVja1ZhbGlkKG5lZWRUb0NoZWNrRWxlbWVudHMsIHRvYXN0aWZ5SW5zdGFuY2UpO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSBsYXN0VG9hc3RpZnlJbnN0YW5jZTtcblx0XHRpZiAoaXNWYWxpZCkge1xuXHRcdFx0dm9pZCBsb2dpbigpO1xuXHRcdH1cblx0fSk7XG5cdG1lc3NhZ2VEaWFsb2cuZ2V0QWN0aW9uUHJvY2VzcyA9IChhY3Rpb24pOiBPTy51aS5Qcm9jZXNzID0+XG5cdFx0bmV3IE9PLnVpLlByb2Nlc3MoKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ2xvZ2luJykge1xuXHRcdFx0XHRjb25zdCB7aXNWYWxpZCwgdG9hc3RpZnlJbnN0YW5jZTogbGFzdFRvYXN0aWZ5SW5zdGFuY2V9ID0gY2hlY2tWYWxpZChcblx0XHRcdFx0XHRuZWVkVG9DaGVja0VsZW1lbnRzLFxuXHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2Vcblx0XHRcdFx0KTtcblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IGxhc3RUb2FzdGlmeUluc3RhbmNlO1xuXHRcdFx0XHRpZiAoaXNWYWxpZCkge1xuXHRcdFx0XHRcdHZvaWQgbG9naW4oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbbWVzc2FnZURpYWxvZ10pO1xuXHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhtZXNzYWdlRGlhbG9nLCB7XG5cdFx0YWN0aW9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdsb2dpbicsXG5cdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0bGFiZWw6ICQoPGI+e2dldE1lc3NhZ2UoJ0xvZ2luJyl9PC9iPiksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdjYW5jZWwnLFxuXHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKDxiPntnZXRNZXNzYWdlKCdDYW5jZWwnKX08L2I+KSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRtZXNzYWdlOiAkKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvby11aS13aW5kb3ctZm9vdFwiPntbJGlucHV0Qm94LCAkZm9yZ290UGFzc3dvcmQsICRyZW1lbWJlck1lLCAkYWdyZWVUb3MsICR0b3NMYWJlbF19PC9kaXY+XG5cdFx0KSxcblx0XHR0aXRsZTogJCg8YiBjbGFzc05hbWU9XCJvby11aS13aW5kb3ctaGVhZFwiPntnZXRNZXNzYWdlKCdMb2dpbicpfTwvYj4pLFxuXHRcdHNpemU6ICdzbWFsbCcsXG5cdH0pO1xuXHRyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyKHdpbmRvd01hbmFnZXIpO1xufTtcblxuZXhwb3J0IHthamF4TG9naW59O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdlbmVyYXRlRWxlbWVudHMgPSAoKSA9PiB7XG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXG5cdGNvbnN0IG5hbWVJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0aWNvbjogJ3VzZXJBdmF0YXInLFxuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdVc2VybmFtZScpLFxuXHRcdHZhbGlkYXRlOiAnbm9uLWVtcHR5Jyxcblx0fSk7XG5cblx0Y29uc3QgcHdkSW5wdXQ6IE9PLnVpLlRleHRJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdGljb246ICdrZXknLFxuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdQYXNzd29yZCcpLFxuXHRcdHR5cGU6ICdwYXNzd29yZCcsXG5cdFx0dmFsaWRhdGU6ICdub24tZW1wdHknLFxuXHR9KTtcblxuXHRjb25zdCBhZ3JlZVRvc0NoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoKTtcblx0Y29uc3QgYWdyZWVUb3NMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGFncmVlVG9zQ2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0kgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnKSxcblx0fSk7XG5cblx0Y29uc3Qga2VlcExvZ2luQ2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCgpO1xuXHRjb25zdCBrZWVwTG9naW5MYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGtlZXBMb2dpbkNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGhlbHA6IGdldE1lc3NhZ2UoJ1NlbGVjdGVkT3JOb3QnKSxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnS2VlcCBtZSBsb2dnZWQgaW4nKSxcblx0fSk7XG5cblx0Y29uc3QgbGFiZWwgPSAoXG5cdFx0PGxhYmVsXG5cdFx0XHRjbGFzc05hbWU9e1snb28tdWktbGFiZWxXaWRnZXQnLCAnb28tdWktbGFiZWxFbGVtZW50LWxhYmVsJ119XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRmb250U2l6ZTogJzkwJScsXG5cdFx0XHRcdHRleHRBbGlnbjogJ2p1c3RpZnknLFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xuXHRjb25zdCAkbGFiZWwgPSAkKGxhYmVsKSBhcyBKUXVlcnk7XG5cblx0Y29uc3QgJGFncmVlVG9zOiBKUXVlcnkgPSAkbGFiZWwuY2xvbmUoKS5hcHBlbmQoYWdyZWVUb3NMYXlvdXQuJGVsZW1lbnQpO1xuXHRjb25zdCAkZm9yZ290UGFzc3dvcmQ6IEpRdWVyeSA9ICRsYWJlbFxuXHRcdC5jbG9uZSgpXG5cdFx0LmNzcygnZmxvYXQnLCAncmlnaHQnKVxuXHRcdC5hcHBlbmQoXG5cdFx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybCgnU3BlY2lhbDpQYXNzd29yZFJlc2V0Jyl9IHRpdGxlPXtnZXRNZXNzYWdlKCdSZXNldCBwYXNzd29yZCcpfT5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ0ZvcmdvdCBwYXNzd29yZD8nKX1cblx0XHRcdDwvYT5cblx0XHQpO1xuXHRjb25zdCAkaW5wdXRCb3g6IEpRdWVyeSA9ICRsYWJlbFxuXHRcdC5jbG9uZSgpXG5cdFx0LmNzcyh7XG5cdFx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdFx0J2ZvbnQtc2l6ZSc6ICdpbmhlcml0Jyxcblx0XHRcdHBhZGRpbmc6ICc2cHggMCcsXG5cdFx0fSlcblx0XHQuYXBwZW5kKG5hbWVJbnB1dC4kZWxlbWVudC5jc3MoJ21hcmdpbi1ib3R0b20nLCAnNnB4JyksIHB3ZElucHV0LiRlbGVtZW50KTtcblx0Y29uc3QgJHRvc0xhYmVsOiBKUXVlcnkgPSAkbGFiZWwuY2xvbmUoKS5odG1sKGdldE1lc3NhZ2UoJ2hlbHAgZm9yIEkgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnKSk7XG5cdGNvbnN0ICRyZW1lbWJlck1lOiBKUXVlcnkgPSAkbGFiZWwuY2xvbmUoKS5hcHBlbmQoa2VlcExvZ2luTGF5b3V0LiRlbGVtZW50LmNzcygnbWFyZ2luLXRvcCcsICc2cHgnKSk7XG5cblx0cmV0dXJuIHtcblx0XHQkYWdyZWVUb3MsXG5cdFx0JGZvcmdvdFBhc3N3b3JkLFxuXHRcdCRpbnB1dEJveCxcblx0XHQkcmVtZW1iZXJNZSxcblx0XHQkdG9zTGFiZWwsXG5cdFx0YWdyZWVUb3NDaGVja2JveCxcblx0XHRrZWVwTG9naW5DaGVja2JveCxcblx0XHRtZXNzYWdlRGlhbG9nLFxuXHRcdG5hbWVJbnB1dCxcblx0XHRwd2RJbnB1dCxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVFbGVtZW50c307XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcn0gZnJvbSAnLi9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyJztcblxuY29uc3Qgb291aVByb21wdCA9IGFzeW5jICh3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyLCByZXR5cGVQYXNzd29yZDogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuXHRjb25zdCBjb2RlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0Y29uc3QgY29kZUlucHV0OiBPTy51aS5UZXh0SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRpY29uOiAna2V5Jyxcblx0XHRwbGFjZWhvbGRlcjogcmV0eXBlUGFzc3dvcmQgPyBnZXRNZXNzYWdlKCdOZXcgcGFzc3dvcmQnKSA6IGdldE1lc3NhZ2UoJzYtZGlnaXQgbnVtYmVyJyksXG5cdFx0dmFsaWRhdGU6ICdpbnRlZ2VyJyxcblx0fSk7XG5cblx0Y29uc3QgY29kZUxheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuVGV4dElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjb2RlSW5wdXQsIHtcblx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0bGFiZWw6ICQoXG5cdFx0XHQ8YiBjbGFzc05hbWU9e1snb28tdWktbWVzc2FnZURpYWxvZy10aXRsZScsICdvby11aS13aW5kb3ctaGVhZCddfT5cblx0XHRcdFx0e3JldHlwZVBhc3N3b3JkID8gZ2V0TWVzc2FnZSgnRW50ZXIgcGFzc3dvcmQnKSA6IGdldE1lc3NhZ2UoJ0VudGVyIDJGQSB2ZXJpZmljYXRpb24gY29kZScpfVxuXHRcdFx0PC9iPlxuXHRcdCksXG5cdH0pO1xuXG5cdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbY29kZURpYWxvZ10pO1xuXG5cdGNvbnN0IGluc3RhbmNlOiBPTy51aS5XaW5kb3dJbnN0YW5jZSA9IHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhjb2RlRGlhbG9nLCB7XG5cdFx0bWVzc2FnZTogY29kZUxheW91dC4kZWxlbWVudCxcblx0fSk7XG5cblx0cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcih3aW5kb3dNYW5hZ2VyKTtcblxuXHR2b2lkIGluc3RhbmNlLm9wZW5lZC50aGVuKCgpOiB2b2lkID0+IHtcblx0XHRjb2RlSW5wdXQub24oJ2VudGVyJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0KHdpbmRvd01hbmFnZXIuZ2V0Q3VycmVudFdpbmRvdygpIGFzIE9PLnVpLldpbmRvdykuY2xvc2Uoe1xuXHRcdFx0XHRhY3Rpb246ICdhY2NlcHQnLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Y29kZUlucHV0LmZvY3VzKCk7XG5cdH0pO1xuXG5cdGNvbnN0IGRhdGE6IHZvaWQgPSBhd2FpdCBpbnN0YW5jZS5jbG9zZWQ7XG5cdGNvbnN0IF9kYXRhID0gZGF0YSBhcyB7YWN0aW9uOiBzdHJpbmd9IHwgdm9pZDtcblxuXHRyZXR1cm4gX2RhdGE/LmFjdGlvbiA9PT0gJ2FjY2VwdCcgPyBjb2RlSW5wdXQuZ2V0VmFsdWUoKSA6IG51bGw7XG59O1xuXG5leHBvcnQge29vdWlQcm9tcHR9O1xuIiwgImNvbnN0IHJlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSAod2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlcik6IHZvaWQgPT4ge1xuXHQkKHdpbmRvdykub2ZmKHtcblx0XHQnb3JpZW50YXRpb25jaGFuZ2UgcmVzaXplJzogKHdpbmRvd01hbmFnZXIgYXMgdW5rbm93biBhcyB7b25XaW5kb3dSZXNpemVIYW5kbGVyOiAoKSA9PiB2b2lkfSlcblx0XHRcdC5vbldpbmRvd1Jlc2l6ZUhhbmRsZXIsXG5cdH0pO1xufTtcblxuZXhwb3J0IHtyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHF1ZXJ5TG9naW5Ub2tlbiA9IGFzeW5jIChcblx0YXBpOiBtdy5BcGksXG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2Vcbik6IFByb21pc2U8e1xuXHRsb2dpblRva2VuOiBzdHJpbmc7XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG59PiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeSh7XG5cdFx0dGV4dDogZ2V0TWVzc2FnZSgnR2V0dGluZyBsb2dpbiB0b2tlbicpLFxuXHR9KTtcblxuXHRjb25zdCBsb2dpblRva2VuOiBzdHJpbmcgPSBhd2FpdCBhcGkuZ2V0VG9rZW4oJ2xvZ2luJyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KHtcblx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdMb2dpbiB0b2tlbiBnZXR0ZWQnKSxcblx0XHRkdXJhdGlvbjogLTEsXG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0bG9naW5Ub2tlbixcblx0XHR0b2FzdGlmeUluc3RhbmNlLFxuXHR9O1xufTtcblxuZXhwb3J0IHtxdWVyeUxvZ2luVG9rZW59O1xuIiwgImltcG9ydCB7ZGVsYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHJlZGlyZWN0T3JpZ2luTG9naW5QYWdlID0gYXN5bmMgKHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0YXdhaXQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0YXdhaXQgZGVsYXkoMyAqIDEwMDApO1xuXHRsb2NhdGlvbi5ocmVmID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6VXNlcmxvZ2luJyk7XG59O1xuXG5leHBvcnQge3JlZGlyZWN0T3JpZ2luTG9naW5QYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHNob3dFcnJvciA9IChlcnJvcjogdW5rbm93biwgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSk6IHZvaWQgPT4ge1xuXHRjb25zb2xlLmVycm9yKCdbQWpheExvZ2luXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnZXJyb3InXG5cdCk7XG59O1xuXG5leHBvcnQge3Nob3dFcnJvcn07XG4iLCAiY29uc3QgaW5pdFdpbmRvd01hbmFnZXIgPSAoKTogT08udWkuV2luZG93TWFuYWdlciA9PiB7XG5cdGNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXG5cdHJldHVybiB3aW5kb3dNYW5hZ2VyO1xufTtcblxuZXhwb3J0IHtpbml0V2luZG93TWFuYWdlcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQzNHLE1BQUksQ0FBQzZMLGNBQWNFLFFBQVE7QUFDMUI7RUFDRDtBQUVBLFFBQU1sRixnQkFBcUMyRSxrQkFBa0I7QUFDN0QzRSxnQkFBY25HLFNBQVNzTCxTQUFTSixLQUFLO0FBRXJDLFFBQU1LLHVCQUF5QztJQUM5QzdJLFdBQVdBLE1BQU07SUFBQztFQUNuQjtBQUVBLFFBQU16QyxnQkFBaUJHLFdBQXlEO0FBQy9FLFFBQUksRUFBQSxHQUFDWixvQkFBQWdNLHFCQUFvQnBMLEtBQUssR0FBRztBQUNoQztJQUNEO0FBRUFBLFVBQU1xTCxlQUFlO0FBQ3JCeEMsY0FBVTlDLGVBQWVvRixvQkFBb0I7RUFDOUM7QUFDQXhMLGNBQVlvTCxlQUFlbEwsYUFBYTtBQUN6QyxDQUFDOyIsCiAgIm5hbWVzIjogWyJsb2dpbkVsZW1lbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MTMiLCAicmVxdWlyZSIsICJXR19VU0VSX05BTUUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhZGRMaXN0ZW5lciIsICIkZWxlbWVudCIsICJldmVudExpc3RlbmVyIiwgIm9uIiwgImZpbHRlckFsdGVyZWRDbGlja3MiLCAiZXZlbnQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ2FuY2VsIiwgInpoIiwgIkxvZ2luIiwgIlBhc3N3b3JkIiwgIlVzZXJuYW1lIiwgIkRvdWJsZUNoZWNrQWdyZWVkT3JOb3QiLCAiQWdyZWVkT3JOb3QiLCAiRW1wdHkyRkEiLCAiRW1wdHlQYXNzd29yZCIsICJFbXB0eVVzZXJuYW1lT3JQYXNzd29yZCIsICJTZWxlY3RlZE9yTm90IiwgIlRvb0ZyZXF1ZW50IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiY2hlY2tWYWxpZCIsICJhZ3JlZVRvc0NoZWNrYm94IiwgIm5hbWVJbnB1dCIsICJwd2RJbnB1dCIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImlzQWdyZWVUb3MiLCAiaXNTZWxlY3RlZCIsICJpc0ZpbGwiLCAiZ2V0VmFsdWUiLCAiaW5jbHVkZXMiLCAiaGlkZVRvYXN0IiwgIk9PIiwgInVpIiwgImNvbmZpcm0iLCAiJCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiYWN0aW9ucyIsICJsYWJlbCIsICJhY3Rpb24iLCAiZmxhZ3MiLCAidGhlbiIsICJjb25maXJtZWQiLCAic2V0U2VsZWN0ZWQiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJpc1ZhbGlkIiwgImltcG9ydF9leHRfZ2FkZ2V0MTEiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImdlbmVyYXRlRWxlbWVudHMiLCAibWVzc2FnZURpYWxvZyIsICJNZXNzYWdlRGlhbG9nIiwgIlRleHRJbnB1dFdpZGdldCIsICJpY29uIiwgInBsYWNlaG9sZGVyIiwgInZhbGlkYXRlIiwgInR5cGUiLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJhZ3JlZVRvc0xheW91dCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJrZWVwTG9naW5DaGVja2JveCIsICJrZWVwTG9naW5MYXlvdXQiLCAiaGVscCIsICJjbGFzc05hbWUiLCAic3R5bGUiLCAiZm9udFNpemUiLCAidGV4dEFsaWduIiwgIiRsYWJlbCIsICIkYWdyZWVUb3MiLCAiY2xvbmUiLCAiYXBwZW5kIiwgIiRmb3Jnb3RQYXNzd29yZCIsICJjc3MiLCAiaHJlZiIsICJ1dGlsIiwgImdldFVybCIsICJ0aXRsZSIsICIkaW5wdXRCb3giLCAiZGlzcGxheSIsICJwYWRkaW5nIiwgIiR0b3NMYWJlbCIsICJodG1sIiwgIiRyZW1lbWJlck1lIiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyIiwgIndpbmRvd01hbmFnZXIiLCAid2luZG93IiwgIm9mZiIsICJvbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCAib291aVByb21wdCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInJldHlwZVBhc3N3b3JkIiwgImNvZGVEaWFsb2ciLCAiY29kZUlucHV0IiwgImNvZGVMYXlvdXQiLCAiYWRkV2luZG93cyIsICJpbnN0YW5jZSIsICJvcGVuV2luZG93IiwgIm1lc3NhZ2UiLCAib3BlbmVkIiwgImdldEN1cnJlbnRXaW5kb3ciLCAiY2xvc2UiLCAiZm9jdXMiLCAiZGF0YSIsICJjbG9zZWQiLCAiX2RhdGEiLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJpbXBvcnRfZXh0X2dhZGdldDgiLCAicXVlcnlMb2dpblRva2VuIiwgIl9yZWYyIiwgImFwaTIiLCAibG9naW5Ub2tlbiIsICJnZXRUb2tlbiIsICJfeDMiLCAiX3g0IiwgImltcG9ydF9leHRfZ2FkZ2V0OSIsICJyZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSIsICJfcmVmMyIsICJjbGVhcldpbmRvd3MiLCAiZGVsYXkiLCAibG9jYXRpb24iLCAiX3g1IiwgImltcG9ydF9leHRfZ2FkZ2V0MTAiLCAic2hvd0Vycm9yIiwgImVycm9yIiwgImNvbnNvbGUiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMiIsICJhamF4TG9naW4iLCAibG9naW4iLCAiX3JlZjQiLCAibG9naW5Db250aW51ZSIsICJfcmVzcG9uc2UkY2xpZW50bG9naW4iLCAiX3Jlc3BvbnNlJGNsaWVudGxvZ2luMiIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibG9naW50b2tlbiIsICJsb2dpbnJldHVybnVybCIsICJ1c2VybmFtZSIsICJwYXNzd29yZCIsICJyZW1lbWJlck1lIiwgImxvZ2luY29udGludWUiLCAidmFsdWUiLCAicmV0eXBlIiwgIk9BVEhUb2tlbiIsICJyZXNwb25zZSIsICJwb3N0IiwgInN0YXR1cyIsICJyZWxvYWQiLCAibWVzc2FnZWNvZGUiLCAicmVwbGFjZSIsICJuZWVkVG9DaGVja0VsZW1lbnRzIiwgImxhc3RUb2FzdGlmeUluc3RhbmNlIiwgImdldEFjdGlvblByb2Nlc3MiLCAiUHJvY2VzcyIsICJzaXplIiwgImluaXRXaW5kb3dNYW5hZ2VyIiwgIldpbmRvd01hbmFnZXIiLCAiZ2V0Qm9keSIsICJpbml0QXV0b0xvZ2luIiwgIiRib2R5IiwgIiRsb2dpbkVsZW1lbnQiLCAiZmluZCIsICJsZW5ndGgiLCAiYXBwZW5kVG8iLCAiZmFrZVRvYXN0aWZ5SW5zdGFuY2UiLCAiY2hlY2tBMTF5Q29uZmlybUtleSIsICJwcmV2ZW50RGVmYXVsdCJdCn0K

})();

/* </nowiki> */
