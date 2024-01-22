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
    "I agree": (0, import_ext_gadget3.localize)({
      en: "I agree",
      ja: "同意する",
      zh: "我同意"
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
    AgreedOrNot: (0, import_ext_gadget3.localize)({
      en: "Please read the relevant terms. If you agree, check the checkbox to confirm",
      ja: "関連する規約をお読みいただき、同意される場合は、チェックボックスにチェックを入れて確認してください",
      "zh-hans": "请阅读相关条款。若同意，勾选复选框以确认",
      "zh-hant": "請閲讀相關條款。若同意，勾選複選框以確認"
    }),
    DoubleCheckAgreedOrNot: (0, import_ext_gadget3.localize)({
      en: 'You have carefully read, fully understood and agreed to comply with our <a rel="noopener" target="_blank" href="/wiki/QW:TOS" title="Terms of Service">Terms of Service</a>, <a rel="noopener" target="_blank" href="/wiki/QW:PIPP" title="Personal Information Protection Policy">Personal Information Protection Policy</a> and <a rel="noopener" target="_blank" href="/wiki/QW:GTGL" title="Common Program">Common Program</a>.',
      ja: 'あなたは本サイトの『<a rel="noopener" target="_blank" href="/wiki/QW:TOS" title="利用規約">利用規約</a>』『<a rel="noopener" target="_blank" href="/wiki/QW:PIPP" title="個人情報保護方針">個人情報保護方針</a>』『<a rel="noopener" target="_blank" href="/wiki/QW:GTGL" title="共同綱領">共同綱領</a>』を十分に理解し、同意したことになります。',
      "zh-hans": '您已仔细阅读、充分了解并同意遵守本网站的《<a rel="noopener" target="_blank" href="/wiki/QW:TOS" title="用户协议">用户协议</a>》《<a rel="noopener" target="_blank" href="/wiki/QW:PIPP" title="个人信息保护方针">个人信息保护方针</a>》《<a rel="noopener" target="_blank" href="/wiki/QW:GTGL" title="共同纲领">共同纲领</a>》。',
      "zh-hant": '您已仔細閱讀、充分了解並同意遵守本網站的《<a rel="noopener" target="_blank" href="/wiki/QW:TOS" title="用戶協議">用戶協議</a>》《<a rel="noopener" target="_blank" href="/wiki/QW:PIPP" title="個人信息保護方針">個人信息保護方針</a>》《<a rel="noopener" target="_blank" href="/wiki/QW:GTGL" title="共同綱領">共同綱領</a>》。'
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
//! src/AjaxLogin/modules/util/oouiConfirm.ts
var oouiConfirm = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (windowManager, options) {
    const messageDialog = new OO.ui.MessageDialog();
    windowManager.addWindows([messageDialog]);
    const instance = windowManager.openWindow(messageDialog, options);
    const data = yield instance.closed;
    const _data = data;
    return !!((_data === null || _data === void 0 ? void 0 : _data.action) === "accept");
  });
  return function oouiConfirm2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
//! src/AjaxLogin/modules/util/checkValid.tsx
var import_ext_gadget5 = require("ext.gadget.Toastify");
var checkValid = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* ([agreeTosCheckbox, nameInput, pwdInput], windowManager, toastifyInstance) {
    let isAgreeTos = agreeTosCheckbox.isSelected();
    const isFill = ![nameInput.getValue(), pwdInput.getValue()].includes("");
    toastifyInstance.hideToast();
    yield windowManager.clearWindows();
    if (!isAgreeTos) {
      isAgreeTos = yield oouiConfirm(windowManager, {
        message: $(/* @__PURE__ */ import_ext_gadget4.default.createElement("span", {
          innerHTML: getMessage("DoubleCheckAgreedOrNot")
        })),
        actions: [{
          label: $(/* @__PURE__ */ import_ext_gadget4.default.createElement("b", null, getMessage("Cancel"))),
          action: "cancel",
          flags: ["safe", "close"]
        }, {
          label: $(/* @__PURE__ */ import_ext_gadget4.default.createElement("b", null, getMessage("I agree"))),
          action: "accept",
          flags: ["primary", "progressive"]
        }]
      });
      if (!isAgreeTos) {
        toastifyInstance = (0, import_ext_gadget5.toastify)({
          text: getMessage("AgreedOrNot"),
          duration: -1
        }, "info");
      }
    } else if (!isFill) {
      toastifyInstance = (0, import_ext_gadget5.toastify)({
        text: getMessage("EmptyUsernameOrPassword"),
        duration: -1
      }, "info");
    }
    const isValid = isAgreeTos && isFill;
    return {
      isAgreeTos,
      isValid,
      toastifyInstance
    };
  });
  return function checkValid2(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/AjaxLogin/modules/core.tsx
var import_ext_gadget11 = __toESM(require("ext.gadget.React"), 1);
//! src/AjaxLogin/modules/util/generateElements.tsx
var import_ext_gadget6 = __toESM(require("ext.gadget.React"), 1);
var generateElements = (isAgreeTos) => {
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
  const agreeTosCheckbox = new OO.ui.CheckboxInputWidget({
    selected: isAgreeTos
  });
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
  var _ref3 = _asyncToGenerator(function* (windowManager, retypePassword) {
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
  return function oouiPrompt2(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/AjaxLogin/modules/util/queryLoginToken.ts
var import_ext_gadget8 = require("ext.gadget.Toastify");
var queryLoginToken = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (api2, toastifyInstance) {
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
  return function queryLoginToken2(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();
//! src/AjaxLogin/modules/util/redirectOriginLoginPage.ts
var import_ext_gadget9 = require("ext.gadget.Util");
var redirectOriginLoginPage = /* @__PURE__ */ function() {
  var _ref5 = _asyncToGenerator(function* (windowManager) {
    yield windowManager.clearWindows();
    yield (0, import_ext_gadget9.delay)(3 * 1e3);
    location.href = mw.util.getUrl("Special:Userlogin");
  });
  return function redirectOriginLoginPage2(_x10) {
    return _ref5.apply(this, arguments);
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
var ajaxLogin = (windowManager, toastifyInstance, isAgreeTos = false) => {
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
  } = generateElements(isAgreeTos);
  let loginToken = "";
  const login = /* @__PURE__ */ function() {
    var _ref6 = _asyncToGenerator(function* ({
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
      return _ref6.apply(this, arguments);
    };
  }();
  const needToCheckElements = [agreeTosCheckbox, nameInput, pwdInput];
  const check = /* @__PURE__ */ function() {
    var _ref7 = _asyncToGenerator(function* () {
      const {
        isValid,
        isAgreeTos: lastIsAgreeTos,
        toastifyInstance: lastToastifyInstance
      } = yield checkValid(needToCheckElements, windowManager, toastifyInstance);
      toastifyInstance = lastToastifyInstance;
      if (isValid) {
        void login();
      } else if (lastIsAgreeTos) {
        ajaxLogin(windowManager, toastifyInstance, lastIsAgreeTos);
      } else {
        void check();
      }
    });
    return function check2() {
      return _ref7.apply(this, arguments);
    };
  }();
  pwdInput.on("enter", () => {
    void check();
  });
  messageDialog.getActionProcess = (action) => new OO.ui.Process(() => {
    if (action === "login") {
      void check();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FqYXhMb2dpbi9vcHRpb25zLmpzb24iLCAic3JjL0FqYXhMb2dpbi9BamF4TG9naW4udHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9hZGRMaXN0ZW5lci50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvYXBpLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL2NoZWNrVmFsaWQudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL29vdWlDb25maXJtLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9jb3JlLnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVsZW1lbnRzLnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpUHJvbXB0LnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL3F1ZXJ5TG9naW5Ub2tlbi50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZWRpcmVjdE9yaWdpbkxvZ2luUGFnZS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibG9naW5FbGVtZW50U2VsZWN0b3JcIjogXCJhOmhhcyguYWpheGxvZ2luLW1vdW50LXBvaW50KSwjcHQtbG9naW4+YSwudmVjdG9yLXVzZXItbWVudS1sb2dpbj5hLCN1c2VyLXRvb2xzPmFbaHJlZio9XFxcIlNwZWNpYWxcXFwiXSwubWFpbnBhZ2UtdG9wLW1lbnU+bGk6bnRoLWNoaWxkKDIpIGFcIixcblx0XCJ2ZXJzaW9uXCI6IFwiNC4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleSwgZ2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7V0dfVVNFUl9OQU1FfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2FkZExpc3RlbmVyJztcbmltcG9ydCB7YWpheExvZ2lufSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2luaXRXaW5kb3dNYW5hZ2VyfSBmcm9tICcuL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXInO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGluaXRBdXRvTG9naW4oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGlmIChXR19VU0VSX05BTUUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkbG9naW5FbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oT1BUSU9OUy5sb2dpbkVsZW1lbnRTZWxlY3Rvcik7XG5cdGlmICghJGxvZ2luRWxlbWVudC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gaW5pdFdpbmRvd01hbmFnZXIoKTtcblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cblx0Y29uc3QgZmFrZVRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblxuXHRjb25zdCBldmVudExpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRhamF4TG9naW4od2luZG93TWFuYWdlciwgZmFrZVRvYXN0aWZ5SW5zdGFuY2UpO1xuXHR9O1xuXHRhZGRMaXN0ZW5lcigkbG9naW5FbGVtZW50LCBldmVudExpc3RlbmVyKTtcbn0pO1xuIiwgImNvbnN0IFdHX1VTRVJfTkFNRTogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKTtcblxuZXhwb3J0IHtXR19VU0VSX05BTUV9O1xuIiwgImltcG9ydCB7ZmlsdGVyQWx0ZXJlZENsaWNrc30gZnJvbSAnZXh0LmdhZGdldC5GaWx0ZXJBbHRlcmVkQ2xpY2tzJztcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAoXG5cdCRlbGVtZW50OiBKUXVlcnksXG5cdGV2ZW50TGlzdGVuZXI6IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KSA9PiB2b2lkXG4pOiB2b2lkID0+IHtcblx0JGVsZW1lbnQub24oXG5cdFx0J2NsaWNrJyxcblx0XHRmaWx0ZXJBbHRlcmVkQ2xpY2tzKChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGV2ZW50TGlzdGVuZXIoZXZlbnQpO1xuXHRcdH0pXG5cdCk7XG5cdCRlbGVtZW50Lm9uKCdrZXlkb3duJywgZXZlbnRMaXN0ZW5lcik7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudHlwZSBDbGllbnRMb2dpblBhcmFtcyA9IEFwaUNsaWVudExvZ2luUGFyYW1zICYge1xuXHRsb2dpbmNvbnRpbnVlPzogYm9vbGVhbjtcblx0bG9naW50b2tlbjogc3RyaW5nO1xuXHRsb2dpbnJldHVybnVybD86IHN0cmluZztcblx0dXNlcm5hbWU/OiBzdHJpbmc7XG5cdHBhc3N3b3JkPzogc3RyaW5nO1xuXHRyZW1lbWJlck1lPzogYm9vbGVhbjtcblx0cmV0eXBlPzogc3RyaW5nO1xuXHRPQVRIVG9rZW4/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQWpheExvZ2luLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge3R5cGUgQ2xpZW50TG9naW5QYXJhbXMsIGFwaX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7b291aUNvbmZpcm19IGZyb20gJy4vb291aUNvbmZpcm0nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbnR5cGUgTmVlZFRvQ2hlY2tFbGVtZW50cyA9IFtPTy51aS5DaGVja2JveElucHV0V2lkZ2V0LCBPTy51aS5UZXh0SW5wdXRXaWRnZXQsIE9PLnVpLlRleHRJbnB1dFdpZGdldF07XG5cbmNvbnN0IGNoZWNrVmFsaWQgPSBhc3luYyAoXG5cdFthZ3JlZVRvc0NoZWNrYm94LCBuYW1lSW5wdXQsIHB3ZElucHV0XTogTmVlZFRvQ2hlY2tFbGVtZW50cyxcblx0d2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlcixcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZVxuKTogUHJvbWlzZTx7XG5cdGlzQWdyZWVUb3M6IGJvb2xlYW47XG5cdGlzVmFsaWQ6IGJvb2xlYW47XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG59PiA9PiB7XG5cdGxldCBpc0FncmVlVG9zOiBib29sZWFuID0gYWdyZWVUb3NDaGVja2JveC5pc1NlbGVjdGVkKCk7XG5cdGNvbnN0IGlzRmlsbDogYm9vbGVhbiA9ICFbbmFtZUlucHV0LmdldFZhbHVlKCksIHB3ZElucHV0LmdldFZhbHVlKCldLmluY2x1ZGVzKCcnKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRhd2FpdCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXG5cdGlmICghaXNBZ3JlZVRvcykge1xuXHRcdGlzQWdyZWVUb3MgPSBhd2FpdCBvb3VpQ29uZmlybSh3aW5kb3dNYW5hZ2VyLCB7XG5cdFx0XHRtZXNzYWdlOiAkKDxzcGFuIGlubmVySFRNTD17Z2V0TWVzc2FnZSgnRG91YmxlQ2hlY2tBZ3JlZWRPck5vdCcpfSAvPikgYXMgSlF1ZXJ5LFxuXHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGFiZWw6ICQoPGI+e2dldE1lc3NhZ2UoJ0NhbmNlbCcpfTwvYj4pLFxuXHRcdFx0XHRcdGFjdGlvbjogJ2NhbmNlbCcsXG5cdFx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGFiZWw6ICQoPGI+e2dldE1lc3NhZ2UoJ0kgYWdyZWUnKX08L2I+KSxcblx0XHRcdFx0XHRhY3Rpb246ICdhY2NlcHQnLFxuXHRcdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSk7XG5cblx0XHRpZiAoIWlzQWdyZWVUb3MpIHtcblx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0FncmVlZE9yTm90JyksXG5cdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW5mbydcblx0XHRcdCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKCFpc0ZpbGwpIHtcblx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0VtcHR5VXNlcm5hbWVPclBhc3N3b3JkJyksXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnaW5mbydcblx0XHQpO1xuXHR9XG5cblx0Y29uc3QgaXNWYWxpZDogYm9vbGVhbiA9IGlzQWdyZWVUb3MgJiYgaXNGaWxsO1xuXG5cdHJldHVybiB7XG5cdFx0aXNBZ3JlZVRvcyxcblx0XHRpc1ZhbGlkLFxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UsXG5cdH07XG59O1xuXG5leHBvcnQge3R5cGUgTmVlZFRvQ2hlY2tFbGVtZW50cywgY2hlY2tWYWxpZH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCc2LWRpZ2l0IG51bWJlcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnNi1kaWdpdCBudW1iZXInLFxuXHRcdFx0amE6ICc25qGB44Gu5pWw5a2XJyxcblx0XHRcdCd6aC1oYW5zJzogJzbkvY3mlbDlrZcnLFxuXHRcdFx0J3poLWhhbnQnOiAnNuS9jeaVuOWtlycsXG5cdFx0fSksXG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHR6aDogJ+WPlua2iCcsXG5cdFx0fSksXG5cdFx0J0VudGVyIHBhc3N3b3JkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFbnRlciBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICfor7fovpPlhaXlr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6Ly45YWl5a+G56K8Jyxcblx0XHR9KSxcblx0XHQnRW50ZXIgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcyRkEgdmVyaWZpY2F0aW9uIGNvZGUnLFxuXHRcdFx0amE6ICcyRkHoqo3oqLzjgrPjg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+36L6T5YWlMkZB6aqM6K+B56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+i8uOWFpTJGQempl+itieeivCcsXG5cdFx0fSksXG5cdFx0J0ZvcmdvdCBwYXNzd29yZD8nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZvcmdvdCBwYXNzd29yZD8nLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4njgpLjgYrlv5jjgozjgafjgZnjgYvvvJ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5b+Y6K6w5a+G56CB77yfJyxcblx0XHRcdCd6aC1oYW50JzogJ+W/mOiomOWvhueivO+8nycsXG5cdFx0fSksXG5cdFx0J0dldHRpbmcgbG9naW4gdG9rZW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0dldHRpbmcgbG9naW4gdG9rZW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7Pjg4jjg7zjgq/jg7PjgpLlj5blvpfjgZfjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo6I635Y+W55m75b2V5Luk54mMJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOeNsuWPlueZu+WFpeasiuadlicsXG5cdFx0fSksXG5cdFx0J2hlbHAgZm9yIEkgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1doZW4geW91IGxvZ2luLCBpdCBtZWFucyB0aGF0IHlvdSBoYXZlIGNhcmVmdWxseSByZWFkLCBmdWxseSB1bmRlcnN0b29kIGFuZCBhZ3JlZWQgdG8gY29tcGx5IHdpdGggb3VyIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwiVGVybXMgb2YgU2VydmljZVwiPlRlcm1zIG9mIFNlcnZpY2U8L2E+LCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCJQZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeVwiPlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5PC9hPiBhbmQgPGVtPnRoZSA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCJDb21tb24gUHJvZ3JhbVwiPkNvbW1vbiBQcm9ncmFtPC9hPjwvZW0+LicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+OCkuOBmeOCi+OBqOOAgeOBguOBquOBn+OBr+acrOOCteOCpOODiOOBruOAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwi5Yip55So6KaP57SEXCI+5Yip55So6KaP57SEPC9hPuOAj+OAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFBcIiB0aXRsZT1cIuWAi+S6uuaDheWgseS/neitt+aWuemHnVwiPuWAi+S6uuaDheWgseS/neitt+aWuemHnTwvYT7jgI/jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCLlhbHlkIzntrHpoJhcIj7lhbHlkIzntrHpoJg8L2E+44CP44KS5Y2B5YiG44Gr55CG6Kej44GX44CB5ZCM5oSP44GX44Gf44GT44Go44Gr44Gq44KK44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+eZu+W9leaXtu+8jOWNs+S7o+ihqOaCqOW3suS7lOe7humYheivu+OAgeWFheWIhuS6huino+W5tuWQjOaEj+mBteWuiOacrOe9keermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwi55So5oi35Y2P6K6uXCI+55So5oi35Y2P6K6uPC9hPuOAi+OAgeOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFBcIiB0aXRsZT1cIuS4quS6uuS/oeaBr+S/neaKpOaWuemSiFwiPuS4quS6uuS/oeaBr+S/neaKpOaWuemSiDwvYT7jgIvlj4rjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCLlhbHlkIzntrHpoJhcIj7lhbHlkIzntrHpoJg8L2E+44CL44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+eZu+mMhOaZgu+8jOWNs+S7o+ihqOaCqOW3suS7lOe0sOmWseiugOOAgeWFheWIhuS6huino+S4puWQjOaEj+mBteWuiOacrOe2suermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwi55So5oi25Y2U6K2wXCI+55So5oi25Y2U6K2wPC9hPuOAi+OAgeOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFBcIiB0aXRsZT1cIuWAi+S6uuS/oeaBr+S/neitt+aWuemHnVwiPuWAi+S6uuS/oeaBr+S/neitt+aWuemHnTwvYT7jgIvlj4rjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCLlhbHlkIzntrHpoJhcIj7lhbHlkIzntrHpoJg8L2E+44CL44CCJyxcblx0XHR9KSxcblx0XHQnSSBhZ3JlZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSSBhZ3JlZScsXG5cdFx0XHRqYTogJ+WQjOaEj+OBmeOCiycsXG5cdFx0XHR6aDogJ+aIkeWQjOaEjycsXG5cdFx0fSksXG5cdFx0J0kgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0kgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnLFxuXHRcdFx0amE6ICfplqLpgKPjgZnjgovopo/ntITjgpLoqq3jgb/jgIHlkIzmhI8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oiR5bey6ZiF6K+75bm25ZCM5oSP55u45YWz5p2h5qy+Jyxcblx0XHRcdCd6aC1oYW50JzogJ+aIkeW3sumWsuiugOS4puWQjOaEj+ebuOmXnOaineasvicsXG5cdFx0fSksXG5cdFx0J0ludmFsaWQgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbnZhbGlkIDJGQSB2ZXJpZmljYXRpb24gY29kZScsXG5cdFx0XHRqYTogJzJGQeiqjeiovOOCs+ODvOODieOBjOmWk+mBleOBo+OBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtaGFucyc6ICcyRkHpqozor4HnoIHplJnor68nLFxuXHRcdFx0J3poLWhhbnQnOiAnMkZB6amX6K2J56K86Yyv6KqkJyxcblx0XHR9KSxcblx0XHQnSW52YWxpZCB1c2VydWFtZSBvciBwYXNzd29yZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW52YWxpZCB1c2VydWFtZSBvciBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheWQjeOBvuOBn+OBr+ODkeOCueODr+ODvOODieOBjOmWk+mBleOBo+OBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtY24nOiAn55So5oi35ZCN5oiW5a+G56CB6ZSZ6K+vJyxcblx0XHRcdCd6aC1oayc6ICfnlKjmiLblkI3nqLHmiJblr4bnorzpjK/oqqQnLFxuXHRcdFx0J3poLXR3JzogJ+S9v+eUqOiAheWQjeeoseaIluWvhueivOmMr+iqpCcsXG5cdFx0fSksXG5cdFx0J0tlZXAgbWUgbG9nZ2VkIGluJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdLZWVwIG1lIGxvZ2dlZCBpbicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+eKtuaFi+OCkuS/neaMgScsXG5cdFx0XHQnemgtaGFucyc6ICforrDkvY/miJHnmoTnmbvlvZXnirbmgIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KiY5L2P5oiR55qE55m75YWl54uA5oWLJyxcblx0XHR9KSxcblx0XHQnTG9nZ2luZyBpbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9nZ2luZyBpbicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+OBl+OBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjnmbvlvZUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo55m75YWlJyxcblx0XHR9KSxcblx0XHRMb2dpbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODsycsXG5cdFx0XHQnemgtaGFucyc6ICfnmbvlvZUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55m75YWlJyxcblx0XHR9KSxcblx0XHQnTG9naW4gY2FuY2VsbGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbiBjYW5jZWxsZWQnLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7Pjgq3jg6Pjg7Pjgrvjg6snLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2V5Y+W5raIJyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpeWPlua2iCcsXG5cdFx0fSksXG5cdFx0J0xvZ2luIHN1Y2NlZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2luIHN1Y2NlZWQnLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7PjgavmiJDlip/jgZfjgb7jgZfjgZ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2V5oiQ5YqfJyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpeaIkOWKnycsXG5cdFx0fSksXG5cdFx0J0xvZ2luIHRva2VuIGdldHRlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4gdG9rZW4gZ2V0dGVkJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44OI44O844Kv44Oz44Gu5Y+W5b6X44Gr5oiQ5Yqf44GX44G+44GX44GfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iOt+WPlueZu+W9leS7pOeJjOaIkOWKnycsXG5cdFx0XHQnemgtaGFudCc6ICfnjbLlj5bnmbvlhaXmrIrmnZbmiJDlip8nLFxuXHRcdH0pLFxuXHRcdCdOZXcgcGFzc3dvcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldyBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+aWsOOBl+OBhOODkeOCueODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICfmlrDlr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5paw5a+G56K8Jyxcblx0XHR9KSxcblx0XHQnTmV3IHBhc3N3b3JkIGlzIHJlcXVpcmVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXcgcGFzc3dvcmQgaXMgcmVxdWlyZWQnLFxuXHRcdFx0amE6ICfmlrDjgZfjgYTjg5Hjgrnjg6/jg7zjg4njgpLoqK3lrprjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6ZyA6KaB6K6+572u5paw5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+mcgOimgeioree9ruaWsOWvhueivCcsXG5cdFx0fSksXG5cdFx0UGFzc3dvcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGFzc3dvcmQnLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+WvhueivCcsXG5cdFx0fSksXG5cdFx0J1Jlc2V0IHBhc3N3b3JkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXNldCBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODieOCkuODquOCu+ODg+ODiCcsXG5cdFx0XHQnemgtaGFucyc6ICfph43nva7lr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6YeN5paw6Kit5a6a5a+G56K8Jyxcblx0XHR9KSxcblx0XHRVc2VybmFtZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdVc2VybmFtZScsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheWQjScsXG5cdFx0XHQnemgtY24nOiAn55So5oi35ZCNJyxcblx0XHRcdCd6aC1oayc6ICfnlKjmiLblkI3nqLEnLFxuXHRcdFx0J3poLXR3JzogJ+S9v+eUqOiAheWQjeeosScsXG5cdFx0fSksXG5cdFx0QWdyZWVkT3JOb3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGxlYXNlIHJlYWQgdGhlIHJlbGV2YW50IHRlcm1zLiBJZiB5b3UgYWdyZWUsIGNoZWNrIHRoZSBjaGVja2JveCB0byBjb25maXJtJyxcblx0XHRcdGphOiAn6Zai6YCj44GZ44KL6KaP57SE44KS44GK6Kqt44G/44GE44Gf44Gg44GN44CB5ZCM5oSP44GV44KM44KL5aC05ZCI44Gv44CB44OB44Kn44OD44Kv44Oc44OD44Kv44K544Gr44OB44Kn44OD44Kv44KS5YWl44KM44Gm56K66KqN44GX44Gm44GP44Gg44GV44GEJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+mYheivu+ebuOWFs+adoeasvuOAguiLpeWQjOaEj++8jOWLvumAieWkjemAieahhuS7peehruiupCcsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vplrLoroDnm7jpl5zmop3mrL7jgILoi6XlkIzmhI/vvIzli77pgbjopIfpgbjmoYbku6Xnorroqo0nLFxuXHRcdH0pLFxuXHRcdERvdWJsZUNoZWNrQWdyZWVkT3JOb3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgY2FyZWZ1bGx5IHJlYWQsIGZ1bGx5IHVuZGVyc3Rvb2QgYW5kIGFncmVlZCB0byBjb21wbHkgd2l0aCBvdXIgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCJUZXJtcyBvZiBTZXJ2aWNlXCI+VGVybXMgb2YgU2VydmljZTwvYT4sIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFBcIiB0aXRsZT1cIlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5XCI+UGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3k8L2E+IGFuZCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCJDb21tb24gUHJvZ3JhbVwiPkNvbW1vbiBQcm9ncmFtPC9hPi4nLFxuXHRcdFx0amE6ICfjgYLjgarjgZ/jga/mnKzjgrXjgqTjg4jjga7jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIuWIqeeUqOimj+e0hFwiPuWIqeeUqOimj+e0hDwvYT7jgI/jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCLlgIvkurrmg4XloLHkv53orbfmlrnph51cIj7lgIvkurrmg4XloLHkv53orbfmlrnph508L2E+44CP44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwi5YWx5ZCM57ax6aCYXCI+5YWx5ZCM57ax6aCYPC9hPuOAj+OCkuWNgeWIhuOBq+eQhuino+OBl+OAgeWQjOaEj+OBl+OBn+OBk+OBqOOBq+OBquOCiuOBvuOBmeOAgicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjlt7Lku5Tnu4bpmIXor7vjgIHlhYXliIbkuobop6PlubblkIzmhI/pgbXlrojmnKznvZHnq5nnmoTjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIueUqOaIt+WNj+iurlwiPueUqOaIt+WNj+iurjwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCLkuKrkurrkv6Hmga/kv53miqTmlrnpkohcIj7kuKrkurrkv6Hmga/kv53miqTmlrnpkog8L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwi5YWx5ZCM57qy6aKGXCI+5YWx5ZCM57qy6aKGPC9hPuOAi+OAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmgqjlt7Lku5TntLDplrHoroDjgIHlhYXliIbkuobop6PkuKblkIzmhI/pgbXlrojmnKzntrLnq5nnmoTjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIueUqOaItuWNlOitsFwiPueUqOaItuWNlOitsDwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCLlgIvkurrkv6Hmga/kv53orbfmlrnph51cIj7lgIvkurrkv6Hmga/kv53orbfmlrnph508L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwi5YWx5ZCM57ax6aCYXCI+5YWx5ZCM57ax6aCYPC9hPuOAi+OAgicsXG5cdFx0fSksXG5cdFx0RW1wdHkyRkE6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIDJGQSB2ZXJpZmljYXRpb24gY29kZSBjYW5ub3QgYmUgZW1wdHknLFxuXHRcdFx0amE6ICcyRkHoqo3oqLzjgrPjg7zjg4njgYzlhaXlipvjgZXjgozjgabjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWhhbnMnOiAnMkZB6aqM6K+B56CB5LiN6IO95Li656m6Jyxcblx0XHRcdCd6aC1oYW50JzogJzJGQempl+itieeivOS4jeiDveeIsuepuicsXG5cdFx0fSksXG5cdFx0RW1wdHlQYXNzd29yZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgcGFzc3dvcmQgY2Fubm90IGJlIGVtcHR5Jyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJ44GM5YWl5Yqb44GV44KM44Gm44GE44G+44Gb44KTJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvhueggeS4jeiDveS4uuepuicsXG5cdFx0XHQnemgtaGFudCc6ICflr4bnorzkuI3og73niLLnqbonLFxuXHRcdH0pLFxuXHRcdEVtcHR5VXNlcm5hbWVPclBhc3N3b3JkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSB1c2VybmFtZSBvciBwYXNzd29yZCBjYW5ub3QgYmUgZW1wdHknLFxuXHRcdFx0amE6ICfliKnnlKjogIXlkI3jgb7jgZ/jga/jg5Hjgrnjg6/jg7zjg4njgYzlhaXlipvjgZXjgozjgabjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+WQjeaIluWvhueggeS4jeiDveS4uuepuicsXG5cdFx0XHQnemgtaGsnOiAn55So5oi25ZCN56ix5oiW5a+G56K85LiN6IO954iy56m6Jyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXlkI3nqLHmiJblr4bnorzkuI3og73niLLnqbonLFxuXHRcdH0pLFxuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXR3b3JrIGVycm9yLiBSZWRpcmVjdGluZy4uLicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvOOAgeODquODgOOCpOODrOOCr+ODiOS4rS4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLjjgILph43lrprlkJHkuK3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi444CC6YeN5paw5bCO5ZCR5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0XHRTZWxlY3RlZE9yTm90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0lmIHNlbGVjdGVkLCB0aGUgbG9naW4gc3RhdHVzIHdpbGwgYmUga2VwdCBmb3IgNiBtb250aHMuIElmIG5vdCBzZWxlY3RlZCwgaXQgd2lsbCBiZSBrZXB0IGZvciAxIG1vbnRoLicsXG5cdFx0XHRqYTogJ+ODgeOCp+ODg+OCr+OCkuWFpeOCjOOCi+OBqOODreOCsOOCpOODs+eKtuaFi+OBjDbjg7bmnIjplpPkv53mjIHjgZXjgozjgIHlhaXjgozjgarjgYTloLTlkIjjga8x44O25pyI6ZaT5L+d5oyB44GV44KM44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WLvumAieWImeS/neaMgeeZu+W9leeKtuaAgTbkuKrmnIjvvIzkuI3li77pgInliJnkv53mjIEx5Liq5pyI44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+WLvumBuOWImeS/neaMgeeZu+WFpeeLgOaFizblgIvmnIjvvIzkuI3li77pgbjliYfkv53mjIEx5YCL5pyI44CCJyxcblx0XHR9KSxcblx0XHRUb29GcmVxdWVudDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgdXNlciBsb2dpbiBpcyB0b28gZnJlcXVlbnQsIHBsZWFzZSB0cnkgYWdhaW4gaW4gZml2ZSBtaW51dGVzJyxcblx0XHRcdGphOiAn5Yip55So6ICF44GM6aC757mB44GZ44GO44KL44Gf44KB44CBNeWIhuW+jOOBq+WGjeippuihjOOBl+OBpuOBj+OBoOOBleOBhCcsXG5cdFx0XHQnemgtY24nOiAn55So5oi355m75b2V6L+H5LqO6aKR57mB77yM6K+35LqU5YiG6ZKf5ZCO5YaN6K+VJyxcblx0XHRcdCd6aC1oayc6ICfnlKjmiLbnmbvlhaXpgY7mlrzpoLvnuYHvvIzoq4vkupTliIbpkJjlvozlho3oqaYnLFxuXHRcdFx0J3poLXR3JzogJ+S9v+eUqOiAheeZu+WFpei/h+S6jumikee5ge+8jOivt+S6lOWIhumSn+WQjuWGjeivlScsXG5cdFx0fSksXG5cdFx0J1VuZXhwZWN0ZWQgQVBJIHJlc3BvbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdVbmV4cGVjdGVkIEFQSSByZXNwb25zZTogJDEuIFJlZGlyZWN0aW5nLi4uJyxcblx0XHRcdGphOiAn5LqI5pyf44Gb44GsQVBJ44Gu5b+c562U77yaJDHjgIHjg6rjg4DjgqTjg6zjgq/jg4jkuK0uLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oSP5aSW55qEQVBJ5ZON5bqU77yaJDHjgILph43lrprlkJHkuK3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5oSP5aSW55qEQVBJ6Z+/5oeJ77yaJDHjgILph43mlrDlsI7lkJHkuK3igKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3Qgb291aUNvbmZpcm0gPSBhc3luYyAod2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciwgb3B0aW9uczogT08udWkuTWVzc2FnZURpYWxvZy5TZXR1cERhdGFNYXApID0+IHtcblx0Y29uc3QgbWVzc2FnZURpYWxvZzogT08udWkuTWVzc2FnZURpYWxvZyA9IG5ldyBPTy51aS5NZXNzYWdlRGlhbG9nKCk7XG5cdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbbWVzc2FnZURpYWxvZ10pO1xuXG5cdGNvbnN0IGluc3RhbmNlOiBPTy51aS5XaW5kb3dJbnN0YW5jZSA9IHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhtZXNzYWdlRGlhbG9nLCBvcHRpb25zKTtcblxuXHRjb25zdCBkYXRhOiB2b2lkID0gYXdhaXQgaW5zdGFuY2UuY2xvc2VkO1xuXHRjb25zdCBfZGF0YSA9IGRhdGEgYXMge2FjdGlvbjogc3RyaW5nfSB8IHZvaWQ7XG5cblx0cmV0dXJuICEhKF9kYXRhPy5hY3Rpb24gPT09ICdhY2NlcHQnKTtcbn07XG5cbmV4cG9ydCB7b291aUNvbmZpcm19O1xuIiwgImltcG9ydCB7dHlwZSBDbGllbnRMb2dpblBhcmFtcywgYXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3R5cGUgTmVlZFRvQ2hlY2tFbGVtZW50cywgY2hlY2tWYWxpZH0gZnJvbSAnLi91dGlsL2NoZWNrVmFsaWQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZW5lcmF0ZUVsZW1lbnRzfSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVFbGVtZW50cyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge29vdWlQcm9tcHR9IGZyb20gJy4vdXRpbC9vb3VpUHJvbXB0JztcbmltcG9ydCB7cXVlcnlMb2dpblRva2VufSBmcm9tICcuL3V0aWwvcXVlcnlMb2dpblRva2VuJztcbmltcG9ydCB7cmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2V9IGZyb20gJy4vdXRpbC9yZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSc7XG5pbXBvcnQge3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXJ9IGZyb20gJy4vdXRpbC9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyJztcbmltcG9ydCB7c2hvd0Vycm9yfSBmcm9tICcuL3V0aWwvc2hvd0Vycm9yJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBhamF4TG9naW4gPSAoXG5cdHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIsXG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UsXG5cdGlzQWdyZWVUb3M6IGJvb2xlYW4gPSBmYWxzZVxuKTogdm9pZCA9PiB7XG5cdGNvbnN0IHtcblx0XHQkYWdyZWVUb3MsXG5cdFx0JGZvcmdvdFBhc3N3b3JkLFxuXHRcdCRpbnB1dEJveCxcblx0XHQkcmVtZW1iZXJNZSxcblx0XHQkdG9zTGFiZWwsXG5cdFx0YWdyZWVUb3NDaGVja2JveCxcblx0XHRrZWVwTG9naW5DaGVja2JveCxcblx0XHRtZXNzYWdlRGlhbG9nLFxuXHRcdG5hbWVJbnB1dCxcblx0XHRwd2RJbnB1dCxcblx0fSA9IGdlbmVyYXRlRWxlbWVudHMoaXNBZ3JlZVRvcyk7XG5cblx0bGV0IGxvZ2luVG9rZW46IHN0cmluZyA9ICcnO1xuXHRjb25zdCBsb2dpbiA9IGFzeW5jICh7bG9naW5Db250aW51ZSA9IGZhbHNlLCByZXR5cGVQYXNzd29yZCA9IGZhbHNlfSA9IHt9KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghbG9naW5Db250aW51ZSkge1xuXHRcdFx0XHQoe2xvZ2luVG9rZW4sIHRvYXN0aWZ5SW5zdGFuY2V9ID0gYXdhaXQgcXVlcnlMb2dpblRva2VuKGFwaSwgdG9hc3RpZnlJbnN0YW5jZSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJhbXM6IENsaWVudExvZ2luUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdjbGllbnRsb2dpbicsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdGxvZ2ludG9rZW46IGxvZ2luVG9rZW4sXG5cdFx0XHRcdGxvZ2lucmV0dXJudXJsOiBsb2NhdGlvbi5ocmVmLFxuXHRcdFx0XHR1c2VybmFtZTogbmFtZUlucHV0LmdldFZhbHVlKCksXG5cdFx0XHRcdHBhc3N3b3JkOiBwd2RJbnB1dC5nZXRWYWx1ZSgpLFxuXHRcdFx0fTtcblx0XHRcdGlmIChrZWVwTG9naW5DaGVja2JveC5pc1NlbGVjdGVkKCkpIHtcblx0XHRcdFx0cGFyYW1zLnJlbWVtYmVyTWUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxvZ2luQ29udGludWUgfHwgcmV0eXBlUGFzc3dvcmQpIHtcblx0XHRcdFx0YXdhaXQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0XHRcdFx0ZGVsZXRlIHBhcmFtcy5sb2dpbnJldHVybnVybDtcblx0XHRcdFx0ZGVsZXRlIHBhcmFtcy51c2VybmFtZTtcblx0XHRcdFx0ZGVsZXRlIHBhcmFtcy5wYXNzd29yZDtcblx0XHRcdFx0cGFyYW1zLmxvZ2luY29udGludWUgPSB0cnVlO1xuXG5cdFx0XHRcdGNvbnN0IHZhbHVlOiBzdHJpbmcgfCBudWxsID0gYXdhaXQgb291aVByb21wdCh3aW5kb3dNYW5hZ2VyLCByZXR5cGVQYXNzd29yZCk7XG5cblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTG9naW4gY2FuY2VsbGVkJyksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J2luZm8nXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR2b2lkIHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT09ICcnKSB7XG5cdFx0XHRcdFx0aWYgKHJldHlwZVBhc3N3b3JkKSB7XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdFbXB0eVBhc3N3b3JkJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR2b2lkIGxvZ2luKHtcblx0XHRcdFx0XHRcdFx0cmV0eXBlUGFzc3dvcmQ6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRW1wdHkyRkEnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRsb2dpbkNvbnRpbnVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJldHlwZVBhc3N3b3JkKSB7XG5cdFx0XHRcdFx0cGFyYW1zLnBhc3N3b3JkID0gdmFsdWU7XG5cdFx0XHRcdFx0cGFyYW1zLnJldHlwZSA9IHZhbHVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBhcmFtcy5PQVRIVG9rZW4gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTG9nZ2luZyBpbicpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW5mbydcblx0XHRcdCk7XG5cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IGFwaS5wb3N0KHBhcmFtcykpIGFzIHtcblx0XHRcdFx0Y2xpZW50bG9naW46IHtcblx0XHRcdFx0XHRzdGF0dXM/OiBzdHJpbmc7XG5cdFx0XHRcdFx0bWVzc2FnZWNvZGU/OiBzdHJpbmc7XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXG5cdFx0XHRpZiAocmVzcG9uc2VbJ2NsaWVudGxvZ2luJ10/LnN0YXR1cyA9PT0gJ1BBU1MnKSB7XG5cdFx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2luIHN1Y2NlZWQnKSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdzdWNjZXNzJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdH0gZWxzZSBpZiAocmVzcG9uc2VbJ2NsaWVudGxvZ2luJ10/Lm1lc3NhZ2Vjb2RlKSB7XG5cdFx0XHRcdGNvbnN0IHttZXNzYWdlY29kZX0gPSByZXNwb25zZVsnY2xpZW50bG9naW4nXTtcblx0XHRcdFx0c3dpdGNoIChtZXNzYWdlY29kZSkge1xuXHRcdFx0XHRcdGNhc2UgJ2xvZ2luLXRocm90dGxlZCc6XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdUb29GcmVxdWVudCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J2Vycm9yJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ29hdGhhdXRoLWF1dGgtdWknOlxuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdGxvZ2luQ29udGludWU6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ29hdGhhdXRoLWxvZ2luLWZhaWxlZCc6XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdJbnZhbGlkIDJGQSB2ZXJpZmljYXRpb24gY29kZScpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdGxvZ2luQ29udGludWU6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3Jlc2V0cGFzcy10ZW1wLWVtYWlsZWQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV3IHBhc3N3b3JkIGlzIHJlcXVpcmVkJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR2b2lkIGxvZ2luKHtcblx0XHRcdFx0XHRcdFx0cmV0eXBlUGFzc3dvcmQ6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3dyb25ncGFzc3dvcmQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnSW52YWxpZCB1c2VydWFtZSBvciBwYXNzd29yZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0YXdhaXQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0XHRcdFx0XHRcdGFqYXhMb2dpbih3aW5kb3dNYW5hZ2VyLCB0b2FzdGlmeUluc3RhbmNlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1VuZXhwZWN0ZWQgQVBJIHJlc3BvbnNlJykucmVwbGFjZSgnJDEnLCBtZXNzYWdlY29kZSksXG5cdFx0XHRcdFx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnZXJyb3InXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCByZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSh3aW5kb3dNYW5hZ2VyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRzaG93RXJyb3IoZXJyb3IsIHRvYXN0aWZ5SW5zdGFuY2UpO1xuXHRcdFx0dm9pZCByZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSh3aW5kb3dNYW5hZ2VyKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgbmVlZFRvQ2hlY2tFbGVtZW50czogTmVlZFRvQ2hlY2tFbGVtZW50cyA9IFthZ3JlZVRvc0NoZWNrYm94LCBuYW1lSW5wdXQsIHB3ZElucHV0XTtcblx0Y29uc3QgY2hlY2sgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0aXNWYWxpZCxcblx0XHRcdGlzQWdyZWVUb3M6IGxhc3RJc0FncmVlVG9zLFxuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZTogbGFzdFRvYXN0aWZ5SW5zdGFuY2UsXG5cdFx0fSA9IGF3YWl0IGNoZWNrVmFsaWQobmVlZFRvQ2hlY2tFbGVtZW50cywgd2luZG93TWFuYWdlciwgdG9hc3RpZnlJbnN0YW5jZSk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IGxhc3RUb2FzdGlmeUluc3RhbmNlO1xuXHRcdGlmIChpc1ZhbGlkKSB7XG5cdFx0XHR2b2lkIGxvZ2luKCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0SXNBZ3JlZVRvcykge1xuXHRcdFx0YWpheExvZ2luKHdpbmRvd01hbmFnZXIsIHRvYXN0aWZ5SW5zdGFuY2UsIGxhc3RJc0FncmVlVG9zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dm9pZCBjaGVjaygpO1xuXHRcdH1cblx0fTtcblxuXHRwd2RJbnB1dC5vbignZW50ZXInLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCBjaGVjaygpO1xuXHR9KTtcblx0bWVzc2FnZURpYWxvZy5nZXRBY3Rpb25Qcm9jZXNzID0gKGFjdGlvbik6IE9PLnVpLlByb2Nlc3MgPT5cblx0XHRuZXcgT08udWkuUHJvY2VzcygoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAnbG9naW4nKSB7XG5cdFx0XHRcdHZvaWQgY2hlY2soKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0XHRcdHZvaWQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3cobWVzc2FnZURpYWxvZywge1xuXHRcdGFjdGlvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnbG9naW4nLFxuXHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKDxiPntnZXRNZXNzYWdlKCdMb2dpbicpfTwvYj4pLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnY2FuY2VsJyxcblx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHRsYWJlbDogJCg8Yj57Z2V0TWVzc2FnZSgnQ2FuY2VsJyl9PC9iPiksXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0bWVzc2FnZTogJChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib28tdWktd2luZG93LWZvb3RcIj57WyRpbnB1dEJveCwgJGZvcmdvdFBhc3N3b3JkLCAkcmVtZW1iZXJNZSwgJGFncmVlVG9zLCAkdG9zTGFiZWxdfTwvZGl2PlxuXHRcdCksXG5cdFx0dGl0bGU6ICQoPGIgY2xhc3NOYW1lPVwib28tdWktd2luZG93LWhlYWRcIj57Z2V0TWVzc2FnZSgnTG9naW4nKX08L2I+KSxcblx0XHRzaXplOiAnc21hbGwnLFxuXHR9KTtcblx0cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcih3aW5kb3dNYW5hZ2VyKTtcbn07XG5cbmV4cG9ydCB7YWpheExvZ2lufTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZW5lcmF0ZUVsZW1lbnRzID0gKGlzQWdyZWVUb3M6IGJvb2xlYW4pID0+IHtcblx0Y29uc3QgbWVzc2FnZURpYWxvZzogT08udWkuTWVzc2FnZURpYWxvZyA9IG5ldyBPTy51aS5NZXNzYWdlRGlhbG9nKCk7XG5cblx0Y29uc3QgbmFtZUlucHV0OiBPTy51aS5UZXh0SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRpY29uOiAndXNlckF2YXRhcicsXG5cdFx0cGxhY2Vob2xkZXI6IGdldE1lc3NhZ2UoJ1VzZXJuYW1lJyksXG5cdFx0dmFsaWRhdGU6ICdub24tZW1wdHknLFxuXHR9KTtcblxuXHRjb25zdCBwd2RJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0aWNvbjogJ2tleScsXG5cdFx0cGxhY2Vob2xkZXI6IGdldE1lc3NhZ2UoJ1Bhc3N3b3JkJyksXG5cdFx0dHlwZTogJ3Bhc3N3b3JkJyxcblx0XHR2YWxpZGF0ZTogJ25vbi1lbXB0eScsXG5cdH0pO1xuXG5cdGNvbnN0IGFncmVlVG9zQ2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IGlzQWdyZWVUb3MsXG5cdH0pO1xuXHRjb25zdCBhZ3JlZVRvc0xheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoYWdyZWVUb3NDaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcycpLFxuXHR9KTtcblxuXHRjb25zdCBrZWVwTG9naW5DaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KCk7XG5cdGNvbnN0IGtlZXBMb2dpbkxheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoa2VlcExvZ2luQ2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0aGVscDogZ2V0TWVzc2FnZSgnU2VsZWN0ZWRPck5vdCcpLFxuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdLZWVwIG1lIGxvZ2dlZCBpbicpLFxuXHR9KTtcblxuXHRjb25zdCBsYWJlbCA9IChcblx0XHQ8bGFiZWxcblx0XHRcdGNsYXNzTmFtZT17Wydvby11aS1sYWJlbFdpZGdldCcsICdvby11aS1sYWJlbEVsZW1lbnQtbGFiZWwnXX1cblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdGZvbnRTaXplOiAnOTAlJyxcblx0XHRcdFx0dGV4dEFsaWduOiAnanVzdGlmeScsXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG5cdGNvbnN0ICRsYWJlbCA9ICQobGFiZWwpIGFzIEpRdWVyeTtcblxuXHRjb25zdCAkYWdyZWVUb3M6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmFwcGVuZChhZ3JlZVRvc0xheW91dC4kZWxlbWVudCk7XG5cdGNvbnN0ICRmb3Jnb3RQYXNzd29yZDogSlF1ZXJ5ID0gJGxhYmVsXG5cdFx0LmNsb25lKClcblx0XHQuY3NzKCdmbG9hdCcsICdyaWdodCcpXG5cdFx0LmFwcGVuZChcblx0XHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOlBhc3N3b3JkUmVzZXQnKX0gdGl0bGU9e2dldE1lc3NhZ2UoJ1Jlc2V0IHBhc3N3b3JkJyl9PlxuXHRcdFx0XHR7Z2V0TWVzc2FnZSgnRm9yZ290IHBhc3N3b3JkPycpfVxuXHRcdFx0PC9hPlxuXHRcdCk7XG5cdGNvbnN0ICRpbnB1dEJveDogSlF1ZXJ5ID0gJGxhYmVsXG5cdFx0LmNsb25lKClcblx0XHQuY3NzKHtcblx0XHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0XHQnZm9udC1zaXplJzogJ2luaGVyaXQnLFxuXHRcdFx0cGFkZGluZzogJzZweCAwJyxcblx0XHR9KVxuXHRcdC5hcHBlbmQobmFtZUlucHV0LiRlbGVtZW50LmNzcygnbWFyZ2luLWJvdHRvbScsICc2cHgnKSwgcHdkSW5wdXQuJGVsZW1lbnQpO1xuXHRjb25zdCAkdG9zTGFiZWw6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmh0bWwoZ2V0TWVzc2FnZSgnaGVscCBmb3IgSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcycpKTtcblx0Y29uc3QgJHJlbWVtYmVyTWU6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmFwcGVuZChrZWVwTG9naW5MYXlvdXQuJGVsZW1lbnQuY3NzKCdtYXJnaW4tdG9wJywgJzZweCcpKTtcblxuXHRyZXR1cm4ge1xuXHRcdCRhZ3JlZVRvcyxcblx0XHQkZm9yZ290UGFzc3dvcmQsXG5cdFx0JGlucHV0Qm94LFxuXHRcdCRyZW1lbWJlck1lLFxuXHRcdCR0b3NMYWJlbCxcblx0XHRhZ3JlZVRvc0NoZWNrYm94LFxuXHRcdGtlZXBMb2dpbkNoZWNrYm94LFxuXHRcdG1lc3NhZ2VEaWFsb2csXG5cdFx0bmFtZUlucHV0LFxuXHRcdHB3ZElucHV0LFxuXHR9O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUVsZW1lbnRzfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyfSBmcm9tICcuL3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXInO1xuXG5jb25zdCBvb3VpUHJvbXB0ID0gYXN5bmMgKHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIsIHJldHlwZVBhc3N3b3JkOiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdGNvbnN0IGNvZGVEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHRjb25zdCBjb2RlSW5wdXQ6IE9PLnVpLlRleHRJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdGljb246ICdrZXknLFxuXHRcdHBsYWNlaG9sZGVyOiByZXR5cGVQYXNzd29yZCA/IGdldE1lc3NhZ2UoJ05ldyBwYXNzd29yZCcpIDogZ2V0TWVzc2FnZSgnNi1kaWdpdCBudW1iZXInKSxcblx0XHR2YWxpZGF0ZTogJ2ludGVnZXInLFxuXHR9KTtcblxuXHRjb25zdCBjb2RlTGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5UZXh0SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNvZGVJbnB1dCwge1xuXHRcdGFsaWduOiAndG9wJyxcblx0XHRsYWJlbDogJChcblx0XHRcdDxiIGNsYXNzTmFtZT17Wydvby11aS1tZXNzYWdlRGlhbG9nLXRpdGxlJywgJ29vLXVpLXdpbmRvdy1oZWFkJ119PlxuXHRcdFx0XHR7cmV0eXBlUGFzc3dvcmQgPyBnZXRNZXNzYWdlKCdFbnRlciBwYXNzd29yZCcpIDogZ2V0TWVzc2FnZSgnRW50ZXIgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJyl9XG5cdFx0XHQ8L2I+XG5cdFx0KSxcblx0fSk7XG5cblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtjb2RlRGlhbG9nXSk7XG5cblx0Y29uc3QgaW5zdGFuY2U6IE9PLnVpLldpbmRvd0luc3RhbmNlID0gd2luZG93TWFuYWdlci5vcGVuV2luZG93KGNvZGVEaWFsb2csIHtcblx0XHRtZXNzYWdlOiBjb2RlTGF5b3V0LiRlbGVtZW50LFxuXHR9KTtcblxuXHRyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyKHdpbmRvd01hbmFnZXIpO1xuXG5cdHZvaWQgaW5zdGFuY2Uub3BlbmVkLnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdGNvZGVJbnB1dC5vbignZW50ZXInLCAoKTogdm9pZCA9PiB7XG5cdFx0XHQod2luZG93TWFuYWdlci5nZXRDdXJyZW50V2luZG93KCkgYXMgT08udWkuV2luZG93KS5jbG9zZSh7XG5cdFx0XHRcdGFjdGlvbjogJ2FjY2VwdCcsXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRjb2RlSW5wdXQuZm9jdXMoKTtcblx0fSk7XG5cblx0Y29uc3QgZGF0YTogdm9pZCA9IGF3YWl0IGluc3RhbmNlLmNsb3NlZDtcblx0Y29uc3QgX2RhdGEgPSBkYXRhIGFzIHthY3Rpb246IHN0cmluZ30gfCB2b2lkO1xuXG5cdHJldHVybiBfZGF0YT8uYWN0aW9uID09PSAnYWNjZXB0JyA/IGNvZGVJbnB1dC5nZXRWYWx1ZSgpIDogbnVsbDtcbn07XG5cbmV4cG9ydCB7b291aVByb21wdH07XG4iLCAiY29uc3QgcmVtb3ZlV2luZG93UmVzaXplSGFuZGxlciA9ICh3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyKTogdm9pZCA9PiB7XG5cdCQod2luZG93KS5vZmYoe1xuXHRcdCdvcmllbnRhdGlvbmNoYW5nZSByZXNpemUnOiAod2luZG93TWFuYWdlciBhcyB1bmtub3duIGFzIHtvbldpbmRvd1Jlc2l6ZUhhbmRsZXI6ICgpID0+IHZvaWR9KVxuXHRcdFx0Lm9uV2luZG93UmVzaXplSGFuZGxlcixcblx0fSk7XG59O1xuXG5leHBvcnQge3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXJ9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgcXVlcnlMb2dpblRva2VuID0gYXN5bmMgKFxuXHRhcGk6IG13LkFwaSxcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZVxuKTogUHJvbWlzZTx7XG5cdGxvZ2luVG9rZW46IHN0cmluZztcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcbn0+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KHtcblx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdHZXR0aW5nIGxvZ2luIHRva2VuJyksXG5cdH0pO1xuXG5cdGNvbnN0IGxvZ2luVG9rZW46IHN0cmluZyA9IGF3YWl0IGFwaS5nZXRUb2tlbignbG9naW4nKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoe1xuXHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2luIHRva2VuIGdldHRlZCcpLFxuXHRcdGR1cmF0aW9uOiAtMSxcblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRsb2dpblRva2VuLFxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UsXG5cdH07XG59O1xuXG5leHBvcnQge3F1ZXJ5TG9naW5Ub2tlbn07XG4iLCAiaW1wb3J0IHtkZWxheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgcmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2UgPSBhc3luYyAod2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRhd2FpdCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXHRhd2FpdCBkZWxheSgzICogMTAwMCk7XG5cdGxvY2F0aW9uLmhyZWYgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpVc2VybG9naW4nKTtcbn07XG5cbmV4cG9ydCB7cmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qgc2hvd0Vycm9yID0gKGVycm9yOiB1bmtub3duLCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlKTogdm9pZCA9PiB7XG5cdGNvbnNvbGUuZXJyb3IoJ1tBamF4TG9naW5dIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdlcnJvcidcblx0KTtcbn07XG5cbmV4cG9ydCB7c2hvd0Vycm9yfTtcbiIsICJjb25zdCBpbml0V2luZG93TWFuYWdlciA9ICgpOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0+IHtcblx0Y29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cblx0cmV0dXJuIHdpbmRvd01hbmFnZXI7XG59O1xuXG5leHBvcnQge2luaXRXaW5kb3dNYW5hZ2VyfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLHVCQUF3QjtBQUN4QixJQUFBQyxVQUFXOztBQ0RaLElBQUFDLHNCQUEy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QUNaLG9CQUFBMk0scUJBQW9CL0wsS0FBSyxHQUFHO0FBQ2hDO0lBQ0Q7QUFFQUEsVUFBTWdNLGVBQWU7QUFDckIzQyxjQUFVdkgsZUFBZWdLLG9CQUFvQjtFQUM5QztBQUNBbk0sY0FBWStMLGVBQWU3TCxhQUFhO0FBQ3pDLENBQUM7IiwKICAibmFtZXMiOiBbImxvZ2luRWxlbWVudFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQxMyIsICJyZXF1aXJlIiwgIldHX1VTRVJfTkFNRSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFkZExpc3RlbmVyIiwgIiRlbGVtZW50IiwgImV2ZW50TGlzdGVuZXIiLCAib24iLCAiZmlsdGVyQWx0ZXJlZENsaWNrcyIsICJldmVudCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDYW5jZWwiLCAiemgiLCAiTG9naW4iLCAiUGFzc3dvcmQiLCAiVXNlcm5hbWUiLCAiQWdyZWVkT3JOb3QiLCAiRG91YmxlQ2hlY2tBZ3JlZWRPck5vdCIsICJFbXB0eTJGQSIsICJFbXB0eVBhc3N3b3JkIiwgIkVtcHR5VXNlcm5hbWVPclBhc3N3b3JkIiwgIlNlbGVjdGVkT3JOb3QiLCAiVG9vRnJlcXVlbnQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIm9vdWlDb25maXJtIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAid2luZG93TWFuYWdlciIsICJvcHRpb25zIiwgIm1lc3NhZ2VEaWFsb2ciLCAiT08iLCAidWkiLCAiTWVzc2FnZURpYWxvZyIsICJhZGRXaW5kb3dzIiwgImluc3RhbmNlIiwgIm9wZW5XaW5kb3ciLCAiZGF0YSIsICJjbG9zZWQiLCAiX2RhdGEiLCAiYWN0aW9uIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImNoZWNrVmFsaWQiLCAiX3JlZjIiLCAiYWdyZWVUb3NDaGVja2JveCIsICJuYW1lSW5wdXQiLCAicHdkSW5wdXQiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJpc0FncmVlVG9zIiwgImlzU2VsZWN0ZWQiLCAiaXNGaWxsIiwgImdldFZhbHVlIiwgImluY2x1ZGVzIiwgImhpZGVUb2FzdCIsICJjbGVhcldpbmRvd3MiLCAibWVzc2FnZSIsICIkIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpbm5lckhUTUwiLCAiYWN0aW9ucyIsICJsYWJlbCIsICJmbGFncyIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImlzVmFsaWQiLCAiX3gzIiwgIl94NCIsICJfeDUiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMSIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAiZ2VuZXJhdGVFbGVtZW50cyIsICJUZXh0SW5wdXRXaWRnZXQiLCAiaWNvbiIsICJwbGFjZWhvbGRlciIsICJ2YWxpZGF0ZSIsICJ0eXBlIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAiYWdyZWVUb3NMYXlvdXQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAia2VlcExvZ2luQ2hlY2tib3giLCAia2VlcExvZ2luTGF5b3V0IiwgImhlbHAiLCAiY2xhc3NOYW1lIiwgInN0eWxlIiwgImZvbnRTaXplIiwgInRleHRBbGlnbiIsICIkbGFiZWwiLCAiJGFncmVlVG9zIiwgImNsb25lIiwgImFwcGVuZCIsICIkZm9yZ290UGFzc3dvcmQiLCAiY3NzIiwgImhyZWYiLCAidXRpbCIsICJnZXRVcmwiLCAidGl0bGUiLCAiJGlucHV0Qm94IiwgImRpc3BsYXkiLCAicGFkZGluZyIsICIkdG9zTGFiZWwiLCAiaHRtbCIsICIkcmVtZW1iZXJNZSIsICJpbXBvcnRfZXh0X2dhZGdldDciLCAicmVtb3ZlV2luZG93UmVzaXplSGFuZGxlciIsICJ3aW5kb3ciLCAib2ZmIiwgIm9uV2luZG93UmVzaXplSGFuZGxlciIsICJvb3VpUHJvbXB0IiwgIl9yZWYzIiwgInJldHlwZVBhc3N3b3JkIiwgImNvZGVEaWFsb2ciLCAiY29kZUlucHV0IiwgImNvZGVMYXlvdXQiLCAib3BlbmVkIiwgInRoZW4iLCAiZ2V0Q3VycmVudFdpbmRvdyIsICJjbG9zZSIsICJmb2N1cyIsICJfeDYiLCAiX3g3IiwgImltcG9ydF9leHRfZ2FkZ2V0OCIsICJxdWVyeUxvZ2luVG9rZW4iLCAiX3JlZjQiLCAiYXBpMiIsICJsb2dpblRva2VuIiwgImdldFRva2VuIiwgIl94OCIsICJfeDkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ5IiwgInJlZGlyZWN0T3JpZ2luTG9naW5QYWdlIiwgIl9yZWY1IiwgImRlbGF5IiwgImxvY2F0aW9uIiwgIl94MTAiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMCIsICJzaG93RXJyb3IiLCAiZXJyb3IiLCAiY29uc29sZSIsICJpbXBvcnRfZXh0X2dhZGdldDEyIiwgImFqYXhMb2dpbiIsICJsb2dpbiIsICJfcmVmNiIsICJsb2dpbkNvbnRpbnVlIiwgIl9yZXNwb25zZSRjbGllbnRsb2dpbiIsICJfcmVzcG9uc2UkY2xpZW50bG9naW4yIiwgInBhcmFtcyIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsb2dpbnRva2VuIiwgImxvZ2lucmV0dXJudXJsIiwgInVzZXJuYW1lIiwgInBhc3N3b3JkIiwgInJlbWVtYmVyTWUiLCAibG9naW5jb250aW51ZSIsICJ2YWx1ZSIsICJyZXR5cGUiLCAiT0FUSFRva2VuIiwgInJlc3BvbnNlIiwgInBvc3QiLCAic3RhdHVzIiwgInJlbG9hZCIsICJtZXNzYWdlY29kZSIsICJyZXBsYWNlIiwgIm5lZWRUb0NoZWNrRWxlbWVudHMiLCAiY2hlY2siLCAiX3JlZjciLCAibGFzdElzQWdyZWVUb3MiLCAibGFzdFRvYXN0aWZ5SW5zdGFuY2UiLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJQcm9jZXNzIiwgInNpemUiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAiV2luZG93TWFuYWdlciIsICJnZXRCb2R5IiwgImluaXRBdXRvTG9naW4iLCAiJGJvZHkiLCAiJGxvZ2luRWxlbWVudCIsICJmaW5kIiwgImxlbmd0aCIsICJhcHBlbmRUbyIsICJmYWtlVG9hc3RpZnlJbnN0YW5jZSIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgInByZXZlbnREZWZhdWx0Il0KfQo=

})();

/* </nowiki> */
