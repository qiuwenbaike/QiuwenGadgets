/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/AjaxLogin}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
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
//! src/AjaxLogin/modules/addListener.ts
var import_ext_gadget = require("ext.gadget.FilterAlteredClicks");
var addListener = ($element, eventListener) => {
  $element.on("click", (0, import_ext_gadget.filterAlteredClicks)(eventListener));
  $element.on("keydown", eventListener);
};
//! src/AjaxLogin/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("AjaxLogin/".concat(version));
//! src/AjaxLogin/modules/core.tsx
var import_ext_gadget11 = __toESM(require("ext.gadget.React"), 1);
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
      "zh-hans": '登录时，即代表您已仔细阅读、充分了解并同意遵守本网站的《<a rel="noopener" target="_blank" href="/wiki/QW:TOS" title="用户协议">用户协议</a>》、《<a rel="noopener" target="_blank" href="/wiki/QW:PIPP" title="个人信息保护方针">个人信息保护方针</a>》及《<a rel="noopener" target="_blank" href="/wiki/QW:GTGL" title="共同纲领">共同纲领</a>》。',
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
//! src/AjaxLogin/modules/initWindowManager.ts
var initWindowManager = () => {
  return new OO.ui.WindowManager();
};
var windowManager = initWindowManager();
//! src/AjaxLogin/modules/util/oouiConfirm.ts
var oouiConfirm = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (options) {
    const messageDialog = new OO.ui.MessageDialog();
    windowManager.addWindows([messageDialog]);
    const instance = windowManager.openWindow(messageDialog, options);
    const data = yield instance.closed;
    const _data = data;
    return !!((_data === null || _data === void 0 ? void 0 : _data.action) === "accept");
  });
  return function oouiConfirm2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/AjaxLogin/modules/util/checkValid.tsx
var import_ext_gadget5 = require("ext.gadget.Toastify");
var checkValid = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* ([agreeTosCheckbox, nameInput, pwdInput], toastifyInstance) {
    let isAgreeTos = agreeTosCheckbox.isSelected();
    const isFill = ![nameInput.getValue().trim(), pwdInput.getValue().trim()].includes("");
    toastifyInstance.hideToast();
    yield windowManager.clearWindows();
    if (!isAgreeTos) {
      isAgreeTos = yield oouiConfirm({
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
      isValid
    };
  });
  return function checkValid2(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
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
var removeWindowResizeHandler = () => {
  $(window).off({
    "orientationchange resize": windowManager.onWindowResizeHandler
  });
};
//! src/AjaxLogin/modules/util/oouiPrompt.tsx
var oouiPrompt = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (retypePassword) {
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
    removeWindowResizeHandler();
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
  return function oouiPrompt2(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/AjaxLogin/modules/util/queryLoginToken.ts
var import_ext_gadget8 = require("ext.gadget.Toastify");
var queryLoginToken = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (toastifyInstance) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget8.toastify)({
      text: getMessage("Getting login token")
    });
    const loginToken = yield api.getToken("login");
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget8.toastify)({
      text: getMessage("Login token getted"),
      duration: -1
    });
    return loginToken;
  });
  return function queryLoginToken2(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
//! src/AjaxLogin/modules/util/redirectOriginLoginPage.ts
var import_ext_gadget9 = require("ext.gadget.Util");
var redirectOriginLoginPage = /* @__PURE__ */ function() {
  var _ref5 = _asyncToGenerator(function* () {
    yield windowManager.clearWindows();
    yield (0, import_ext_gadget9.delay)(3 * 1e3);
    location.href = mw.util.getUrl("Special:Userlogin");
  });
  return function redirectOriginLoginPage2() {
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
var ajaxLogin = (toastifyInstance, isAgreeTos = false) => {
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
          loginToken = yield queryLoginToken(toastifyInstance);
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
          const value = yield oouiPrompt(retypePassword);
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
              ajaxLogin(toastifyInstance);
              break;
            default:
              (0, import_ext_gadget12.toastify)({
                text: getMessage("Unexpected API response").replace("$1", messagecode),
                close: true,
                duration: -1
              }, "error");
              void redirectOriginLoginPage();
          }
        }
      } catch (error) {
        showError(error, toastifyInstance);
        void redirectOriginLoginPage();
      }
    });
    return function login2() {
      return _ref6.apply(this, arguments);
    };
  }();
  const check = /* @__PURE__ */ function() {
    var _ref7 = _asyncToGenerator(function* () {
      const {
        isValid,
        isAgreeTos: lastIsAgreeTos
      } = yield checkValid([agreeTosCheckbox, nameInput, pwdInput], toastifyInstance);
      if (isValid) {
        void login();
      } else {
        ajaxLogin(toastifyInstance, lastIsAgreeTos);
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
  removeWindowResizeHandler();
};
//! src/AjaxLogin/AjaxLogin.ts
void (0, import_ext_gadget13.getBody)().then(function initAutoLogin($body) {
  const {
    wgUserName
  } = mw.config.get();
  if (wgUserName) {
    return;
  }
  const $loginElement = $body.find(loginElementSelector);
  if (!$loginElement.length) {
    return;
  }
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
    ajaxLogin(fakeToastifyInstance);
  };
  addListener($loginElement, eventListener);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FqYXhMb2dpbi9vcHRpb25zLmpzb24iLCAic3JjL0FqYXhMb2dpbi9BamF4TG9naW4udHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9hcGkudHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL2NoZWNrVmFsaWQudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlci50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpQ29uZmlybS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVsZW1lbnRzLnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpUHJvbXB0LnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL3F1ZXJ5TG9naW5Ub2tlbi50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZWRpcmVjdE9yaWdpbkxvZ2luUGFnZS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJsb2dpbkVsZW1lbnRTZWxlY3RvclwiOiBcImE6aGFzKC5hamF4bG9naW4tbW91bnQtcG9pbnQpLCNwdC1sb2dpbj5hLC52ZWN0b3ItdXNlci1tZW51LWxvZ2luPmEsI3VzZXItdG9vbHM+YVtocmVmKj1cXFwiU3BlY2lhbFxcXCJdLC5tYWlucGFnZS10b3AtbWVudT5saTpudGgtY2hpbGQoMikgYVwiLFxuXHRcInZlcnNpb25cIjogXCI0LjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtjaGVja0ExMXlDb25maXJtS2V5LCBnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2FkZExpc3RlbmVyJztcbmltcG9ydCB7YWpheExvZ2lufSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlcic7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gaW5pdEF1dG9Mb2dpbigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z1VzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGxvZ2luRWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRib2R5LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KE9QVElPTlMubG9naW5FbGVtZW50U2VsZWN0b3IpO1xuXHRpZiAoISRsb2dpbkVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cblx0Y29uc3QgZmFrZVRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblxuXHRjb25zdCBldmVudExpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRhamF4TG9naW4oZmFrZVRvYXN0aWZ5SW5zdGFuY2UpO1xuXHR9O1xuXHRhZGRMaXN0ZW5lcigkbG9naW5FbGVtZW50LCBldmVudExpc3RlbmVyKTtcbn0pO1xuIiwgImltcG9ydCB7ZmlsdGVyQWx0ZXJlZENsaWNrc30gZnJvbSAnZXh0LmdhZGdldC5GaWx0ZXJBbHRlcmVkQ2xpY2tzJztcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAoXG5cdCRlbGVtZW50OiBKUXVlcnksXG5cdGV2ZW50TGlzdGVuZXI6IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KSA9PiB2b2lkXG4pOiB2b2lkID0+IHtcblx0JGVsZW1lbnQub24oJ2NsaWNrJywgZmlsdGVyQWx0ZXJlZENsaWNrcyhldmVudExpc3RlbmVyKSk7XG5cdCRlbGVtZW50Lm9uKCdrZXlkb3duJywgZXZlbnRMaXN0ZW5lcik7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudHlwZSBDbGllbnRMb2dpblBhcmFtcyA9IEFwaUNsaWVudExvZ2luUGFyYW1zICYge1xuXHR1c2VybmFtZT86IHN0cmluZztcblx0cGFzc3dvcmQ/OiBzdHJpbmc7XG5cdHJlbWVtYmVyTWU/OiBib29sZWFuO1xuXHRyZXR5cGU/OiBzdHJpbmc7XG5cdE9BVEhUb2tlbj86IHN0cmluZztcbn07XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBBamF4TG9naW4vJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7dHlwZSBDbGllbnRMb2dpblBhcmFtcywgYXBpfTtcbiIsICJpbXBvcnQge3R5cGUgQ2xpZW50TG9naW5QYXJhbXMsIGFwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtjaGVja1ZhbGlkfSBmcm9tICcuL3V0aWwvY2hlY2tWYWxpZCc7XG5pbXBvcnQge2dlbmVyYXRlRWxlbWVudHN9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUVsZW1lbnRzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7b291aVByb21wdH0gZnJvbSAnLi91dGlsL29vdWlQcm9tcHQnO1xuaW1wb3J0IHtxdWVyeUxvZ2luVG9rZW59IGZyb20gJy4vdXRpbC9xdWVyeUxvZ2luVG9rZW4nO1xuaW1wb3J0IHtyZWRpcmVjdE9yaWdpbkxvZ2luUGFnZX0gZnJvbSAnLi91dGlsL3JlZGlyZWN0T3JpZ2luTG9naW5QYWdlJztcbmltcG9ydCB7cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcn0gZnJvbSAnLi91dGlsL3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXInO1xuaW1wb3J0IHtzaG93RXJyb3J9IGZyb20gJy4vdXRpbC9zaG93RXJyb3InO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBhamF4TG9naW4gPSAodG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSwgaXNBZ3JlZVRvczogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCA9PiB7XG5cdGNvbnN0IHtcblx0XHQkYWdyZWVUb3MsXG5cdFx0JGZvcmdvdFBhc3N3b3JkLFxuXHRcdCRpbnB1dEJveCxcblx0XHQkcmVtZW1iZXJNZSxcblx0XHQkdG9zTGFiZWwsXG5cdFx0YWdyZWVUb3NDaGVja2JveCxcblx0XHRrZWVwTG9naW5DaGVja2JveCxcblx0XHRtZXNzYWdlRGlhbG9nLFxuXHRcdG5hbWVJbnB1dCxcblx0XHRwd2RJbnB1dCxcblx0fSA9IGdlbmVyYXRlRWxlbWVudHMoaXNBZ3JlZVRvcyk7XG5cblx0bGV0IGxvZ2luVG9rZW46IHN0cmluZyA9ICcnO1xuXHRjb25zdCBsb2dpbiA9IGFzeW5jICh7bG9naW5Db250aW51ZSA9IGZhbHNlLCByZXR5cGVQYXNzd29yZCA9IGZhbHNlfSA9IHt9KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghbG9naW5Db250aW51ZSkge1xuXHRcdFx0XHRsb2dpblRva2VuID0gYXdhaXQgcXVlcnlMb2dpblRva2VuKHRvYXN0aWZ5SW5zdGFuY2UpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJhbXM6IENsaWVudExvZ2luUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdjbGllbnRsb2dpbicsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdGxvZ2ludG9rZW46IGxvZ2luVG9rZW4sXG5cdFx0XHRcdGxvZ2lucmV0dXJudXJsOiBsb2NhdGlvbi5ocmVmLFxuXHRcdFx0XHR1c2VybmFtZTogbmFtZUlucHV0LmdldFZhbHVlKCksXG5cdFx0XHRcdHBhc3N3b3JkOiBwd2RJbnB1dC5nZXRWYWx1ZSgpLFxuXHRcdFx0fTtcblx0XHRcdGlmIChrZWVwTG9naW5DaGVja2JveC5pc1NlbGVjdGVkKCkpIHtcblx0XHRcdFx0cGFyYW1zLnJlbWVtYmVyTWUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxvZ2luQ29udGludWUgfHwgcmV0eXBlUGFzc3dvcmQpIHtcblx0XHRcdFx0YXdhaXQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0XHRcdFx0ZGVsZXRlIHBhcmFtcy5sb2dpbnJldHVybnVybDtcblx0XHRcdFx0ZGVsZXRlIHBhcmFtcy51c2VybmFtZTtcblx0XHRcdFx0ZGVsZXRlIHBhcmFtcy5wYXNzd29yZDtcblx0XHRcdFx0cGFyYW1zLmxvZ2luY29udGludWUgPSB0cnVlO1xuXG5cdFx0XHRcdGNvbnN0IHZhbHVlOiBzdHJpbmcgfCBudWxsID0gYXdhaXQgb291aVByb21wdChyZXR5cGVQYXNzd29yZCk7XG5cblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTG9naW4gY2FuY2VsbGVkJyksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J2luZm8nXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR2b2lkIHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT09ICcnKSB7XG5cdFx0XHRcdFx0aWYgKHJldHlwZVBhc3N3b3JkKSB7XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdFbXB0eVBhc3N3b3JkJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR2b2lkIGxvZ2luKHtcblx0XHRcdFx0XHRcdFx0cmV0eXBlUGFzc3dvcmQ6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRW1wdHkyRkEnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRsb2dpbkNvbnRpbnVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJldHlwZVBhc3N3b3JkKSB7XG5cdFx0XHRcdFx0cGFyYW1zLnBhc3N3b3JkID0gdmFsdWU7XG5cdFx0XHRcdFx0cGFyYW1zLnJldHlwZSA9IHZhbHVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBhcmFtcy5PQVRIVG9rZW4gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTG9nZ2luZyBpbicpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW5mbydcblx0XHRcdCk7XG5cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IGFwaS5wb3N0KHBhcmFtcykpIGFzIHtcblx0XHRcdFx0Y2xpZW50bG9naW46IHtcblx0XHRcdFx0XHRzdGF0dXM/OiBzdHJpbmc7XG5cdFx0XHRcdFx0bWVzc2FnZWNvZGU/OiBzdHJpbmc7XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXG5cdFx0XHRpZiAocmVzcG9uc2VbJ2NsaWVudGxvZ2luJ10/LnN0YXR1cyA9PT0gJ1BBU1MnKSB7XG5cdFx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2luIHN1Y2NlZWQnKSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdzdWNjZXNzJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdH0gZWxzZSBpZiAocmVzcG9uc2VbJ2NsaWVudGxvZ2luJ10/Lm1lc3NhZ2Vjb2RlKSB7XG5cdFx0XHRcdGNvbnN0IHttZXNzYWdlY29kZX0gPSByZXNwb25zZVsnY2xpZW50bG9naW4nXTtcblx0XHRcdFx0c3dpdGNoIChtZXNzYWdlY29kZSkge1xuXHRcdFx0XHRcdGNhc2UgJ2xvZ2luLXRocm90dGxlZCc6XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdUb29GcmVxdWVudCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J2Vycm9yJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ29hdGhhdXRoLWF1dGgtdWknOlxuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdGxvZ2luQ29udGludWU6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ29hdGhhdXRoLWxvZ2luLWZhaWxlZCc6XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdJbnZhbGlkIDJGQSB2ZXJpZmljYXRpb24gY29kZScpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdGxvZ2luQ29udGludWU6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3Jlc2V0cGFzcy10ZW1wLWVtYWlsZWQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV3IHBhc3N3b3JkIGlzIHJlcXVpcmVkJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR2b2lkIGxvZ2luKHtcblx0XHRcdFx0XHRcdFx0cmV0eXBlUGFzc3dvcmQ6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3dyb25ncGFzc3dvcmQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnSW52YWxpZCB1c2VydWFtZSBvciBwYXNzd29yZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0YXdhaXQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0XHRcdFx0XHRcdGFqYXhMb2dpbih0b2FzdGlmeUluc3RhbmNlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1VuZXhwZWN0ZWQgQVBJIHJlc3BvbnNlJykucmVwbGFjZSgnJDEnLCBtZXNzYWdlY29kZSksXG5cdFx0XHRcdFx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnZXJyb3InXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCByZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHNob3dFcnJvcihlcnJvciwgdG9hc3RpZnlJbnN0YW5jZSk7XG5cdFx0XHR2b2lkIHJlZGlyZWN0T3JpZ2luTG9naW5QYWdlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGNoZWNrID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGNvbnN0IHtpc1ZhbGlkLCBpc0FncmVlVG9zOiBsYXN0SXNBZ3JlZVRvc30gPSBhd2FpdCBjaGVja1ZhbGlkKFxuXHRcdFx0W2FncmVlVG9zQ2hlY2tib3gsIG5hbWVJbnB1dCwgcHdkSW5wdXRdLFxuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZVxuXHRcdCk7XG5cblx0XHRpZiAoaXNWYWxpZCkge1xuXHRcdFx0dm9pZCBsb2dpbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhamF4TG9naW4odG9hc3RpZnlJbnN0YW5jZSwgbGFzdElzQWdyZWVUb3MpO1xuXHRcdH1cblx0fTtcblxuXHRwd2RJbnB1dC5vbignZW50ZXInLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCBjaGVjaygpO1xuXHR9KTtcblx0bWVzc2FnZURpYWxvZy5nZXRBY3Rpb25Qcm9jZXNzID0gKGFjdGlvbik6IE9PLnVpLlByb2Nlc3MgPT5cblx0XHRuZXcgT08udWkuUHJvY2VzcygoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAnbG9naW4nKSB7XG5cdFx0XHRcdHZvaWQgY2hlY2soKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0XHRcdHZvaWQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3cobWVzc2FnZURpYWxvZywge1xuXHRcdGFjdGlvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnbG9naW4nLFxuXHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKDxiPntnZXRNZXNzYWdlKCdMb2dpbicpfTwvYj4pLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnY2FuY2VsJyxcblx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHRsYWJlbDogJCg8Yj57Z2V0TWVzc2FnZSgnQ2FuY2VsJyl9PC9iPiksXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0bWVzc2FnZTogJChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib28tdWktd2luZG93LWZvb3RcIj57WyRpbnB1dEJveCwgJGZvcmdvdFBhc3N3b3JkLCAkcmVtZW1iZXJNZSwgJGFncmVlVG9zLCAkdG9zTGFiZWxdfTwvZGl2PlxuXHRcdCksXG5cdFx0dGl0bGU6ICQoPGIgY2xhc3NOYW1lPVwib28tdWktd2luZG93LWhlYWRcIj57Z2V0TWVzc2FnZSgnTG9naW4nKX08L2I+KSxcblx0XHRzaXplOiAnc21hbGwnLFxuXHR9KTtcblx0cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcigpO1xufTtcblxuZXhwb3J0IHthamF4TG9naW59O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge29vdWlDb25maXJtfSBmcm9tICcuL29vdWlDb25maXJtJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IGNoZWNrVmFsaWQgPSBhc3luYyAoXG5cdFthZ3JlZVRvc0NoZWNrYm94LCBuYW1lSW5wdXQsIHB3ZElucHV0XTogW09PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQsIE9PLnVpLlRleHRJbnB1dFdpZGdldCwgT08udWkuVGV4dElucHV0V2lkZ2V0XSxcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZVxuKTogUHJvbWlzZTx7XG5cdGlzQWdyZWVUb3M6IGJvb2xlYW47XG5cdGlzVmFsaWQ6IGJvb2xlYW47XG59PiA9PiB7XG5cdGxldCBpc0FncmVlVG9zOiBib29sZWFuID0gYWdyZWVUb3NDaGVja2JveC5pc1NlbGVjdGVkKCk7XG5cdGNvbnN0IGlzRmlsbDogYm9vbGVhbiA9ICFbbmFtZUlucHV0LmdldFZhbHVlKCkudHJpbSgpLCBwd2RJbnB1dC5nZXRWYWx1ZSgpLnRyaW0oKV0uaW5jbHVkZXMoJycpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cblx0aWYgKCFpc0FncmVlVG9zKSB7XG5cdFx0aXNBZ3JlZVRvcyA9IGF3YWl0IG9vdWlDb25maXJtKHtcblx0XHRcdG1lc3NhZ2U6ICQoPHNwYW4gaW5uZXJIVE1MPXtnZXRNZXNzYWdlKCdEb3VibGVDaGVja0FncmVlZE9yTm90Jyl9IC8+KSBhcyBKUXVlcnksXG5cdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsYWJlbDogJCg8Yj57Z2V0TWVzc2FnZSgnQ2FuY2VsJyl9PC9iPiksXG5cdFx0XHRcdFx0YWN0aW9uOiAnY2FuY2VsJyxcblx0XHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsYWJlbDogJCg8Yj57Z2V0TWVzc2FnZSgnSSBhZ3JlZScpfTwvYj4pLFxuXHRcdFx0XHRcdGFjdGlvbjogJ2FjY2VwdCcsXG5cdFx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9KTtcblxuXHRcdGlmICghaXNBZ3JlZVRvcykge1xuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnQWdyZWVkT3JOb3QnKSxcblx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdpbmZvJ1xuXHRcdFx0KTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoIWlzRmlsbCkge1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRW1wdHlVc2VybmFtZU9yUGFzc3dvcmQnKSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdpbmZvJ1xuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBpc1ZhbGlkOiBib29sZWFuID0gaXNBZ3JlZVRvcyAmJiBpc0ZpbGw7XG5cblx0cmV0dXJuIHtcblx0XHRpc0FncmVlVG9zLFxuXHRcdGlzVmFsaWQsXG5cdH07XG59O1xuXG5leHBvcnQge2NoZWNrVmFsaWR9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnNi1kaWdpdCBudW1iZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzYtZGlnaXQgbnVtYmVyJyxcblx0XHRcdGphOiAnNuahgeOBruaVsOWtlycsXG5cdFx0XHQnemgtaGFucyc6ICc25L2N5pWw5a2XJyxcblx0XHRcdCd6aC1oYW50JzogJzbkvY3mlbjlrZcnLFxuXHRcdH0pLFxuXHRcdENhbmNlbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDYW5jZWwnLFxuXHRcdFx0amE6ICfjgq3jg6Pjg7Pjgrvjg6snLFxuXHRcdFx0emg6ICflj5bmtognLFxuXHRcdH0pLFxuXHRcdCdFbnRlciBwYXNzd29yZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRW50ZXIgcGFzc3dvcmQnLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+36L6T5YWl5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+i8uOWFpeWvhueivCcsXG5cdFx0fSksXG5cdFx0J0VudGVyIDJGQSB2ZXJpZmljYXRpb24gY29kZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnMkZBIHZlcmlmaWNhdGlvbiBjb2RlJyxcblx0XHRcdGphOiAnMkZB6KqN6Ki844Kz44O844OJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+i+k+WFpTJGQemqjOivgeeggScsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vovLjlhaUyRkHpqZforYnnorwnLFxuXHRcdH0pLFxuXHRcdCdGb3Jnb3QgcGFzc3dvcmQ/JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGb3Jnb3QgcGFzc3dvcmQ/Jyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJ44KS44GK5b+Y44KM44Gn44GZ44GL77yfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W/mOiusOWvhuegge+8nycsXG5cdFx0XHQnemgtaGFudCc6ICflv5joqJjlr4bnorzvvJ8nLFxuXHRcdH0pLFxuXHRcdCdHZXR0aW5nIGxvZ2luIHRva2VuJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHZXR0aW5nIGxvZ2luIHRva2VuJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44OI44O844Kv44Oz44KS5Y+W5b6X44GX44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOiOt+WPlueZu+W9leS7pOeJjCcsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjnjbLlj5bnmbvlhaXmrIrmnZYnLFxuXHRcdH0pLFxuXHRcdCdoZWxwIGZvciBJIGFncmVlIHdpdGggdGhlIHJlbGV2YW50IHRlcm1zJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXaGVuIHlvdSBsb2dpbiwgaXQgbWVhbnMgdGhhdCB5b3UgaGF2ZSBjYXJlZnVsbHkgcmVhZCwgZnVsbHkgdW5kZXJzdG9vZCBhbmQgYWdyZWVkIHRvIGNvbXBseSB3aXRoIG91ciA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIlRlcm1zIG9mIFNlcnZpY2VcIj5UZXJtcyBvZiBTZXJ2aWNlPC9hPiwgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUFwiIHRpdGxlPVwiUGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3lcIj5QZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeTwvYT4gYW5kIDxlbT50aGUgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwiQ29tbW9uIFByb2dyYW1cIj5Db21tb24gUHJvZ3JhbTwvYT48L2VtPi4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7PjgpLjgZnjgovjgajjgIHjgYLjgarjgZ/jga/mnKzjgrXjgqTjg4jjga7jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIuWIqeeUqOimj+e0hFwiPuWIqeeUqOimj+e0hDwvYT7jgI/jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCLlgIvkurrmg4XloLHkv53orbfmlrnph51cIj7lgIvkurrmg4XloLHkv53orbfmlrnph508L2E+44CP44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwi5YWx5ZCM57ax6aCYXCI+5YWx5ZCM57ax6aCYPC9hPuOAj+OCkuWNgeWIhuOBq+eQhuino+OBl+OAgeWQjOaEj+OBl+OBn+OBk+OBqOOBq+OBquOCiuOBvuOBmeOAgicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfnmbvlvZXml7bvvIzljbPku6Pooajmgqjlt7Lku5Tnu4bpmIXor7vjgIHlhYXliIbkuobop6PlubblkIzmhI/pgbXlrojmnKznvZHnq5nnmoTjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIueUqOaIt+WNj+iurlwiPueUqOaIt+WNj+iurjwvYT7jgIvjgIHjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCLkuKrkurrkv6Hmga/kv53miqTmlrnpkohcIj7kuKrkurrkv6Hmga/kv53miqTmlrnpkog8L2E+44CL5Y+K44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwi5YWx5ZCM57qy6aKGXCI+5YWx5ZCM57qy6aKGPC9hPuOAi+OAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfnmbvpjITmmYLvvIzljbPku6Pooajmgqjlt7Lku5TntLDplrHoroDjgIHlhYXliIbkuobop6PkuKblkIzmhI/pgbXlrojmnKzntrLnq5nnmoTjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIueUqOaItuWNlOitsFwiPueUqOaItuWNlOitsDwvYT7jgIvjgIHjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCLlgIvkurrkv6Hmga/kv53orbfmlrnph51cIj7lgIvkurrkv6Hmga/kv53orbfmlrnph508L2E+44CL5Y+K44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwi5YWx5ZCM57ax6aCYXCI+5YWx5ZCM57ax6aCYPC9hPuOAi+OAgicsXG5cdFx0fSksXG5cdFx0J0kgYWdyZWUnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0kgYWdyZWUnLFxuXHRcdFx0amE6ICflkIzmhI/jgZnjgosnLFxuXHRcdFx0emg6ICfmiJHlkIzmhI8nLFxuXHRcdH0pLFxuXHRcdCdJIGFncmVlIHdpdGggdGhlIHJlbGV2YW50IHRlcm1zJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJIGFncmVlIHdpdGggdGhlIHJlbGV2YW50IHRlcm1zJyxcblx0XHRcdGphOiAn6Zai6YCj44GZ44KL6KaP57SE44KS6Kqt44G/44CB5ZCM5oSPJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aIkeW3sumYheivu+W5tuWQjOaEj+ebuOWFs+adoeasvicsXG5cdFx0XHQnemgtaGFudCc6ICfmiJHlt7LplrLoroDkuKblkIzmhI/nm7jpl5zmop3mrL4nLFxuXHRcdH0pLFxuXHRcdCdJbnZhbGlkIDJGQSB2ZXJpZmljYXRpb24gY29kZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW52YWxpZCAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnLFxuXHRcdFx0amE6ICcyRkHoqo3oqLzjgrPjg7zjg4njgYzplpPpgZXjgaPjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAnMkZB6aqM6K+B56CB6ZSZ6K+vJyxcblx0XHRcdCd6aC1oYW50JzogJzJGQempl+itieeivOmMr+iqpCcsXG5cdFx0fSksXG5cdFx0J0ludmFsaWQgdXNlcnVhbWUgb3IgcGFzc3dvcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludmFsaWQgdXNlcnVhbWUgb3IgcGFzc3dvcmQnLFxuXHRcdFx0amE6ICfliKnnlKjogIXlkI3jgb7jgZ/jga/jg5Hjgrnjg6/jg7zjg4njgYzplpPpgZXjgaPjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+WQjeaIluWvhueggemUmeivrycsXG5cdFx0XHQnemgtaGsnOiAn55So5oi25ZCN56ix5oiW5a+G56K86Yyv6KqkJyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXlkI3nqLHmiJblr4bnorzpjK/oqqQnLFxuXHRcdH0pLFxuXHRcdCdLZWVwIG1lIGxvZ2dlZCBpbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnS2VlcCBtZSBsb2dnZWQgaW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7PnirbmhYvjgpLkv53mjIEnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K6w5L2P5oiR55qE55m75b2V54q25oCBJyxcblx0XHRcdCd6aC1oYW50JzogJ+iomOS9j+aIkeeahOeZu+WFpeeLgOaFiycsXG5cdFx0fSksXG5cdFx0J0xvZ2dpbmcgaW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2dpbmcgaW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7PjgZfjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo55m75b2VJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOeZu+WFpScsXG5cdFx0fSksXG5cdFx0TG9naW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7MnLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2VJyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpScsXG5cdFx0fSksXG5cdFx0J0xvZ2luIGNhbmNlbGxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4gY2FuY2VsbGVkJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44Kt44Oj44Oz44K744OrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eZu+W9leWPlua2iCcsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlhaXlj5bmtognLFxuXHRcdH0pLFxuXHRcdCdMb2dpbiBzdWNjZWVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbiBzdWNjZWVkJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44Gr5oiQ5Yqf44GX44G+44GX44GfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eZu+W9leaIkOWKnycsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlhaXmiJDlip8nLFxuXHRcdH0pLFxuXHRcdCdMb2dpbiB0b2tlbiBnZXR0ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2luIHRva2VuIGdldHRlZCcsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+ODiOODvOOCr+ODs+OBruWPluW+l+OBq+aIkOWKn+OBl+OBvuOBl+OBnycsXG5cdFx0XHQnemgtaGFucyc6ICfojrflj5bnmbvlvZXku6TniYzmiJDlip8nLFxuXHRcdFx0J3poLWhhbnQnOiAn542y5Y+W55m75YWl5qyK5p2W5oiQ5YqfJyxcblx0XHR9KSxcblx0XHQnTmV3IHBhc3N3b3JkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXcgcGFzc3dvcmQnLFxuXHRcdFx0amE6ICfmlrDjgZfjgYTjg5Hjgrnjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn5paw5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+aWsOWvhueivCcsXG5cdFx0fSksXG5cdFx0J05ldyBwYXNzd29yZCBpcyByZXF1aXJlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV3IHBhc3N3b3JkIGlzIHJlcXVpcmVkJyxcblx0XHRcdGphOiAn5paw44GX44GE44OR44K544Ov44O844OJ44KS6Kit5a6a44GX44Gm44GP44Gg44GV44GEJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mcgOimgeiuvue9ruaWsOWvhueggScsXG5cdFx0XHQnemgtaGFudCc6ICfpnIDopoHoqK3nva7mlrDlr4bnorwnLFxuXHRcdH0pLFxuXHRcdFBhc3N3b3JkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Bhc3N3b3JkJyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvhueggScsXG5cdFx0XHQnemgtaGFudCc6ICflr4bnorwnLFxuXHRcdH0pLFxuXHRcdCdSZXNldCBwYXNzd29yZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVzZXQgcGFzc3dvcmQnLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4njgpLjg6rjgrvjg4Pjg4gnLFxuXHRcdFx0J3poLWhhbnMnOiAn6YeN572u5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+mHjeaWsOioreWumuWvhueivCcsXG5cdFx0fSksXG5cdFx0VXNlcm5hbWU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVXNlcm5hbWUnLFxuXHRcdFx0amE6ICfliKnnlKjogIXlkI0nLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+WQjScsXG5cdFx0XHQnemgtaGsnOiAn55So5oi25ZCN56ixJyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXlkI3nqLEnLFxuXHRcdH0pLFxuXHRcdEFncmVlZE9yTm90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BsZWFzZSByZWFkIHRoZSByZWxldmFudCB0ZXJtcy4gSWYgeW91IGFncmVlLCBjaGVjayB0aGUgY2hlY2tib3ggdG8gY29uZmlybScsXG5cdFx0XHRqYTogJ+mWoumAo+OBmeOCi+imj+e0hOOCkuOBiuiqreOBv+OBhOOBn+OBoOOBjeOAgeWQjOaEj+OBleOCjOOCi+WgtOWQiOOBr+OAgeODgeOCp+ODg+OCr+ODnOODg+OCr+OCueOBq+ODgeOCp+ODg+OCr+OCkuWFpeOCjOOBpueiuuiqjeOBl+OBpuOBj+OBoOOBleOBhCcsXG5cdFx0XHQnemgtaGFucyc6ICfor7fpmIXor7vnm7jlhbPmnaHmrL7jgILoi6XlkIzmhI/vvIzli77pgInlpI3pgInmoYbku6Xnoa7orqQnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6Zay6K6A55u46Zec5qKd5qy+44CC6Iul5ZCM5oSP77yM5Yu+6YG46KSH6YG45qGG5Lul56K66KqNJyxcblx0XHR9KSxcblx0XHREb3VibGVDaGVja0FncmVlZE9yTm90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBoYXZlIGNhcmVmdWxseSByZWFkLCBmdWxseSB1bmRlcnN0b29kIGFuZCBhZ3JlZWQgdG8gY29tcGx5IHdpdGggb3VyIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwiVGVybXMgb2YgU2VydmljZVwiPlRlcm1zIG9mIFNlcnZpY2U8L2E+LCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCJQZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeVwiPlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5PC9hPiBhbmQgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwiQ29tbW9uIFByb2dyYW1cIj5Db21tb24gUHJvZ3JhbTwvYT4uJyxcblx0XHRcdGphOiAn44GC44Gq44Gf44Gv5pys44K144Kk44OI44Gu44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCLliKnnlKjopo/ntIRcIj7liKnnlKjopo/ntIQ8L2E+44CP44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUFwiIHRpdGxlPVwi5YCL5Lq65oOF5aCx5L+d6K235pa56YedXCI+5YCL5Lq65oOF5aCx5L+d6K235pa56YedPC9hPuOAj+OAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIuWFseWQjOe2semgmFwiPuWFseWQjOe2semgmDwvYT7jgI/jgpLljYHliIbjgavnkIbop6PjgZfjgIHlkIzmhI/jgZfjgZ/jgZPjgajjgavjgarjgorjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo5bey5LuU57uG6ZiF6K+744CB5YWF5YiG5LqG6Kej5bm25ZCM5oSP6YG15a6I5pys572R56uZ55qE44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCLnlKjmiLfljY/orq5cIj7nlKjmiLfljY/orq48L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUFwiIHRpdGxlPVwi5Liq5Lq65L+h5oGv5L+d5oqk5pa56ZKIXCI+5Liq5Lq65L+h5oGv5L+d5oqk5pa56ZKIPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIuWFseWQjOe6sumihlwiPuWFseWQjOe6sumihjwvYT7jgIvjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo5bey5LuU57Sw6Zax6K6A44CB5YWF5YiG5LqG6Kej5Lim5ZCM5oSP6YG15a6I5pys57ay56uZ55qE44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCLnlKjmiLbljZTorbBcIj7nlKjmiLbljZTorbA8L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUFwiIHRpdGxlPVwi5YCL5Lq65L+h5oGv5L+d6K235pa56YedXCI+5YCL5Lq65L+h5oGv5L+d6K235pa56YedPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIuWFseWQjOe2semgmFwiPuWFseWQjOe2semgmDwvYT7jgIvjgIInLFxuXHRcdH0pLFxuXHRcdEVtcHR5MkZBOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSAyRkEgdmVyaWZpY2F0aW9uIGNvZGUgY2Fubm90IGJlIGVtcHR5Jyxcblx0XHRcdGphOiAnMkZB6KqN6Ki844Kz44O844OJ44GM5YWl5Yqb44GV44KM44Gm44GE44G+44Gb44KTJyxcblx0XHRcdCd6aC1oYW5zJzogJzJGQemqjOivgeeggeS4jeiDveS4uuepuicsXG5cdFx0XHQnemgtaGFudCc6ICcyRkHpqZforYnnorzkuI3og73niLLnqbonLFxuXHRcdH0pLFxuXHRcdEVtcHR5UGFzc3dvcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIHBhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eScsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODieOBjOWFpeWKm+OBleOCjOOBpuOBhOOBvuOBm+OCkycsXG5cdFx0XHQnemgtaGFucyc6ICflr4bnoIHkuI3og73kuLrnqbonLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+G56K85LiN6IO954iy56m6Jyxcblx0XHR9KSxcblx0XHRFbXB0eVVzZXJuYW1lT3JQYXNzd29yZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgdXNlcm5hbWUgb3IgcGFzc3dvcmQgY2Fubm90IGJlIGVtcHR5Jyxcblx0XHRcdGphOiAn5Yip55So6ICF5ZCN44G+44Gf44Gv44OR44K544Ov44O844OJ44GM5YWl5Yqb44GV44KM44Gm44GE44G+44Gb44KTJyxcblx0XHRcdCd6aC1jbic6ICfnlKjmiLflkI3miJblr4bnoIHkuI3og73kuLrnqbonLFxuXHRcdFx0J3poLWhrJzogJ+eUqOaItuWQjeeoseaIluWvhueivOS4jeiDveeIsuepuicsXG5cdFx0XHQnemgtdHcnOiAn5L2/55So6ICF5ZCN56ix5oiW5a+G56K85LiN6IO954iy56m6Jyxcblx0XHR9KSxcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvci4gUmVkaXJlY3RpbmcuLi4nLFxuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7zjgIHjg6rjg4DjgqTjg6zjgq/jg4jkuK0uLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi444CC6YeN5a6a5ZCR5Lit4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uOOAgumHjeaWsOWwjuWQkeS4reKApuKApicsXG5cdFx0fSksXG5cdFx0U2VsZWN0ZWRPck5vdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJZiBzZWxlY3RlZCwgdGhlIGxvZ2luIHN0YXR1cyB3aWxsIGJlIGtlcHQgZm9yIDYgbW9udGhzLiBJZiBub3Qgc2VsZWN0ZWQsIGl0IHdpbGwgYmUga2VwdCBmb3IgMSBtb250aC4nLFxuXHRcdFx0amE6ICfjg4Hjgqfjg4Pjgq/jgpLlhaXjgozjgovjgajjg63jgrDjgqTjg7PnirbmhYvjgYw244O25pyI6ZaT5L+d5oyB44GV44KM44CB5YWl44KM44Gq44GE5aC05ZCI44GvMeODtuaciOmWk+S/neaMgeOBleOCjOOBvuOBmeOAgicsXG5cdFx0XHQnemgtaGFucyc6ICfli77pgInliJnkv53mjIHnmbvlvZXnirbmgIE25Liq5pyI77yM5LiN5Yu+6YCJ5YiZ5L+d5oyBMeS4quaciOOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfli77pgbjliJnkv53mjIHnmbvlhaXni4DmhYs25YCL5pyI77yM5LiN5Yu+6YG45YmH5L+d5oyBMeWAi+aciOOAgicsXG5cdFx0fSksXG5cdFx0VG9vRnJlcXVlbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIHVzZXIgbG9naW4gaXMgdG9vIGZyZXF1ZW50LCBwbGVhc2UgdHJ5IGFnYWluIGluIGZpdmUgbWludXRlcycsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheOBjOmgu+e5geOBmeOBjuOCi+OBn+OCgeOAgTXliIblvozjgavlho3oqabooYzjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+eZu+W9lei/h+S6jumikee5ge+8jOivt+S6lOWIhumSn+WQjuWGjeivlScsXG5cdFx0XHQnemgtaGsnOiAn55So5oi255m75YWl6YGO5pa86aC757mB77yM6KuL5LqU5YiG6ZCY5b6M5YaN6KmmJyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXnmbvlhaXov4fkuo7popHnuYHvvIzor7fkupTliIbpkp/lkI7lho3or5UnLFxuXHRcdH0pLFxuXHRcdCdVbmV4cGVjdGVkIEFQSSByZXNwb25zZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVW5leHBlY3RlZCBBUEkgcmVzcG9uc2U6ICQxLiBSZWRpcmVjdGluZy4uLicsXG5cdFx0XHRqYTogJ+S6iOacn+OBm+OBrEFQSeOBruW/nOetlO+8miQx44CB44Oq44OA44Kk44Os44Kv44OI5LitLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aEj+WklueahEFQSeWTjeW6lO+8miQx44CC6YeN5a6a5ZCR5Lit4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+aEj+WklueahEFQSemfv+aHie+8miQx44CC6YeN5paw5bCO5ZCR5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IGluaXRXaW5kb3dNYW5hZ2VyID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIgPT4ge1xuXHRyZXR1cm4gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcbn07XG5cbmNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXG5leHBvcnQge3dpbmRvd01hbmFnZXJ9O1xuIiwgImltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBvb3VpQ29uZmlybSA9IGFzeW5jIChvcHRpb25zOiBPTy51aS5NZXNzYWdlRGlhbG9nLlNldHVwRGF0YU1hcCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuXHRjb25zdCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFttZXNzYWdlRGlhbG9nXSk7XG5cblx0Y29uc3QgaW5zdGFuY2U6IE9PLnVpLldpbmRvd0luc3RhbmNlID0gd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIG9wdGlvbnMpO1xuXG5cdGNvbnN0IGRhdGE6IHZvaWQgPSBhd2FpdCBpbnN0YW5jZS5jbG9zZWQ7XG5cdGNvbnN0IF9kYXRhID0gZGF0YSBhcyB7YWN0aW9uOiBzdHJpbmd9IHwgdm9pZDtcblxuXHRyZXR1cm4gISEoX2RhdGE/LmFjdGlvbiA9PT0gJ2FjY2VwdCcpO1xufTtcblxuZXhwb3J0IHtvb3VpQ29uZmlybX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVFbGVtZW50cyA9IChpc0FncmVlVG9zOiBib29sZWFuKSA9PiB7XG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXG5cdGNvbnN0IG5hbWVJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0aWNvbjogJ3VzZXJBdmF0YXInLFxuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdVc2VybmFtZScpLFxuXHRcdHZhbGlkYXRlOiAnbm9uLWVtcHR5Jyxcblx0fSk7XG5cblx0Y29uc3QgcHdkSW5wdXQ6IE9PLnVpLlRleHRJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdGljb246ICdrZXknLFxuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdQYXNzd29yZCcpLFxuXHRcdHR5cGU6ICdwYXNzd29yZCcsXG5cdFx0dmFsaWRhdGU6ICdub24tZW1wdHknLFxuXHR9KTtcblxuXHRjb25zdCBhZ3JlZVRvc0NoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBpc0FncmVlVG9zLFxuXHR9KTtcblx0Y29uc3QgYWdyZWVUb3NMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGFncmVlVG9zQ2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0kgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnKSxcblx0fSk7XG5cblx0Y29uc3Qga2VlcExvZ2luQ2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCgpO1xuXHRjb25zdCBrZWVwTG9naW5MYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGtlZXBMb2dpbkNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGhlbHA6IGdldE1lc3NhZ2UoJ1NlbGVjdGVkT3JOb3QnKSxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnS2VlcCBtZSBsb2dnZWQgaW4nKSxcblx0fSk7XG5cblx0Y29uc3QgbGFiZWwgPSAoXG5cdFx0PGxhYmVsXG5cdFx0XHRjbGFzc05hbWU9e1snb28tdWktbGFiZWxXaWRnZXQnLCAnb28tdWktbGFiZWxFbGVtZW50LWxhYmVsJ119XG5cdFx0XHRzdHlsZT17e2ZvbnRTaXplOiAnOTAlJywgdGV4dEFsaWduOiAnanVzdGlmeSd9fVxuXHRcdC8+XG5cdCk7XG5cdGNvbnN0ICRsYWJlbCA9ICQobGFiZWwpIGFzIEpRdWVyeTtcblxuXHRjb25zdCAkYWdyZWVUb3M6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmFwcGVuZChhZ3JlZVRvc0xheW91dC4kZWxlbWVudCk7XG5cdGNvbnN0ICRmb3Jnb3RQYXNzd29yZDogSlF1ZXJ5ID0gJGxhYmVsXG5cdFx0LmNsb25lKClcblx0XHQuY3NzKCdmbG9hdCcsICdyaWdodCcpXG5cdFx0LmFwcGVuZChcblx0XHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOlBhc3N3b3JkUmVzZXQnKX0gdGl0bGU9e2dldE1lc3NhZ2UoJ1Jlc2V0IHBhc3N3b3JkJyl9PlxuXHRcdFx0XHR7Z2V0TWVzc2FnZSgnRm9yZ290IHBhc3N3b3JkPycpfVxuXHRcdFx0PC9hPlxuXHRcdCk7XG5cdGNvbnN0ICRpbnB1dEJveDogSlF1ZXJ5ID0gJGxhYmVsXG5cdFx0LmNsb25lKClcblx0XHQuY3NzKHtcblx0XHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0XHQnZm9udC1zaXplJzogJ2luaGVyaXQnLFxuXHRcdFx0cGFkZGluZzogJzZweCAwJyxcblx0XHR9KVxuXHRcdC5hcHBlbmQobmFtZUlucHV0LiRlbGVtZW50LmNzcygnbWFyZ2luLWJvdHRvbScsICc2cHgnKSwgcHdkSW5wdXQuJGVsZW1lbnQpO1xuXHRjb25zdCAkdG9zTGFiZWw6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmh0bWwoZ2V0TWVzc2FnZSgnaGVscCBmb3IgSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcycpKTtcblx0Y29uc3QgJHJlbWVtYmVyTWU6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmFwcGVuZChrZWVwTG9naW5MYXlvdXQuJGVsZW1lbnQuY3NzKCdtYXJnaW4tdG9wJywgJzZweCcpKTtcblxuXHRyZXR1cm4ge1xuXHRcdCRhZ3JlZVRvcyxcblx0XHQkZm9yZ290UGFzc3dvcmQsXG5cdFx0JGlucHV0Qm94LFxuXHRcdCRyZW1lbWJlck1lLFxuXHRcdCR0b3NMYWJlbCxcblx0XHRhZ3JlZVRvc0NoZWNrYm94LFxuXHRcdGtlZXBMb2dpbkNoZWNrYm94LFxuXHRcdG1lc3NhZ2VEaWFsb2csXG5cdFx0bmFtZUlucHV0LFxuXHRcdHB3ZElucHV0LFxuXHR9O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUVsZW1lbnRzfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyfSBmcm9tICcuL3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXInO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IG9vdWlQcm9tcHQgPSBhc3luYyAocmV0eXBlUGFzc3dvcmQ6IGJvb2xlYW4pOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcblx0Y29uc3QgY29kZURpYWxvZzogT08udWkuTWVzc2FnZURpYWxvZyA9IG5ldyBPTy51aS5NZXNzYWdlRGlhbG9nKCk7XG5cdGNvbnN0IGNvZGVJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0aWNvbjogJ2tleScsXG5cdFx0cGxhY2Vob2xkZXI6IHJldHlwZVBhc3N3b3JkID8gZ2V0TWVzc2FnZSgnTmV3IHBhc3N3b3JkJykgOiBnZXRNZXNzYWdlKCc2LWRpZ2l0IG51bWJlcicpLFxuXHRcdHZhbGlkYXRlOiAnaW50ZWdlcicsXG5cdH0pO1xuXG5cdGNvbnN0IGNvZGVMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLlRleHRJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY29kZUlucHV0LCB7XG5cdFx0YWxpZ246ICd0b3AnLFxuXHRcdGxhYmVsOiAkKFxuXHRcdFx0PGIgY2xhc3NOYW1lPXtbJ29vLXVpLW1lc3NhZ2VEaWFsb2ctdGl0bGUnLCAnb28tdWktd2luZG93LWhlYWQnXX0+XG5cdFx0XHRcdHtyZXR5cGVQYXNzd29yZCA/IGdldE1lc3NhZ2UoJ0VudGVyIHBhc3N3b3JkJykgOiBnZXRNZXNzYWdlKCdFbnRlciAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnKX1cblx0XHRcdDwvYj5cblx0XHQpLFxuXHR9KTtcblxuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW2NvZGVEaWFsb2ddKTtcblxuXHRjb25zdCBpbnN0YW5jZTogT08udWkuV2luZG93SW5zdGFuY2UgPSB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3coY29kZURpYWxvZywge1xuXHRcdG1lc3NhZ2U6IGNvZGVMYXlvdXQuJGVsZW1lbnQsXG5cdH0pO1xuXG5cdHJlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIoKTtcblxuXHR2b2lkIGluc3RhbmNlLm9wZW5lZC50aGVuKCgpOiB2b2lkID0+IHtcblx0XHRjb2RlSW5wdXQub24oJ2VudGVyJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0KHdpbmRvd01hbmFnZXIuZ2V0Q3VycmVudFdpbmRvdygpIGFzIE9PLnVpLldpbmRvdykuY2xvc2Uoe1xuXHRcdFx0XHRhY3Rpb246ICdhY2NlcHQnLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Y29kZUlucHV0LmZvY3VzKCk7XG5cdH0pO1xuXG5cdGNvbnN0IGRhdGE6IHZvaWQgPSBhd2FpdCBpbnN0YW5jZS5jbG9zZWQ7XG5cdGNvbnN0IF9kYXRhID0gZGF0YSBhcyB7YWN0aW9uOiBzdHJpbmd9IHwgdm9pZDtcblxuXHRyZXR1cm4gX2RhdGE/LmFjdGlvbiA9PT0gJ2FjY2VwdCcgPyBjb2RlSW5wdXQuZ2V0VmFsdWUoKSA6IG51bGw7XG59O1xuXG5leHBvcnQge29vdWlQcm9tcHR9O1xuIiwgImltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCByZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xuXHQkKHdpbmRvdykub2ZmKHtcblx0XHQnb3JpZW50YXRpb25jaGFuZ2UgcmVzaXplJzogKHdpbmRvd01hbmFnZXIgYXMgdW5rbm93biBhcyB7b25XaW5kb3dSZXNpemVIYW5kbGVyOiAoKSA9PiB2b2lkfSlcblx0XHRcdC5vbldpbmRvd1Jlc2l6ZUhhbmRsZXIsXG5cdH0pO1xufTtcblxuZXhwb3J0IHtyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgcXVlcnlMb2dpblRva2VuID0gYXN5bmMgKHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoe1xuXHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0dldHRpbmcgbG9naW4gdG9rZW4nKSxcblx0fSk7XG5cblx0Y29uc3QgbG9naW5Ub2tlbjogc3RyaW5nID0gYXdhaXQgYXBpLmdldFRva2VuKCdsb2dpbicpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeSh7XG5cdFx0dGV4dDogZ2V0TWVzc2FnZSgnTG9naW4gdG9rZW4gZ2V0dGVkJyksXG5cdFx0ZHVyYXRpb246IC0xLFxuXHR9KTtcblxuXHRyZXR1cm4gbG9naW5Ub2tlbjtcbn07XG5cbmV4cG9ydCB7cXVlcnlMb2dpblRva2VufTtcbiIsICJpbXBvcnQge2RlbGF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IHJlZGlyZWN0T3JpZ2luTG9naW5QYWdlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRhd2FpdCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXHRhd2FpdCBkZWxheSgzICogMTAwMCk7XG5cdGxvY2F0aW9uLmhyZWYgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpVc2VybG9naW4nKTtcbn07XG5cbmV4cG9ydCB7cmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qgc2hvd0Vycm9yID0gKGVycm9yOiB1bmtub3duLCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlKTogdm9pZCA9PiB7XG5cdGNvbnNvbGUuZXJyb3IoJ1tBamF4TG9naW5dIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdlcnJvcidcblx0KTtcbn07XG5cbmV4cG9ydCB7c2hvd0Vycm9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsdUJBQXdCO0FBQ3hCLElBQUFDLFVBQVc7O0FDRFosSUFBQUMs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QyxFQUNSNUQsb0NBQUE2RCxRQUFBQyxjQUFDLE9BQUE7TUFBSTBCLFdBQVU7SUFBQSxHQUFxQixDQUFDZSxXQUFXUCxpQkFBaUJZLGFBQWFmLFdBQVdhLFNBQVMsQ0FBRSxDQUNyRztJQUNBSixPQUFPMUMsRUFBRTVELG9DQUFBNkQsUUFBQUMsY0FBQyxLQUFBO01BQUUwQixXQUFVO0lBQUEsR0FBcUJuRSxXQUFXLE9BQU8sQ0FBRSxDQUFJO0lBQ25Fc0osTUFBTTtFQUNQLENBQUM7QUFDRDdELDRCQUEwQjtBQUMzQjs7QUgvT0EsTUFBQSxHQUFLMUgsb0JBQUF3TCxTQUFRLEVBQUVuRCxLQUFLLFNBQVNvRCxjQUFjQyxPQUFzQztBQUNoRixRQUFNO0lBQUNDO0VBQVUsSUFBSTVFLEdBQUc2RSxPQUFPQyxJQUFJO0FBRW5DLE1BQUlGLFlBQVk7QUFDZjtFQUNEO0FBRUEsUUFBTUcsZ0JBQTJDSixNQUFNSyxLQUFnQ2pNLG9CQUFvQjtBQUMzRyxNQUFJLENBQUNnTSxjQUFjRSxRQUFRO0FBQzFCO0VBQ0Q7QUFFQXpKLGdCQUFjbkMsU0FBUzZMLFNBQVNQLEtBQUs7QUFFckMsUUFBTVEsdUJBQXlDO0lBQzlDN0gsV0FBV0EsTUFBTTtJQUFDO0VBQ25CO0FBRUEsUUFBTWhFLGdCQUFpQjhMLFdBQXlEO0FBQy9FLFFBQUksRUFBQSxHQUFDbk0sb0JBQUFvTSxxQkFBb0JELEtBQUssR0FBRztBQUNoQztJQUNEO0FBRUFBLFVBQU1FLGVBQWU7QUFDckIzQyxjQUFVd0Msb0JBQW9CO0VBQy9CO0FBQ0EvTCxjQUFZMkwsZUFBZXpMLGFBQWE7QUFDekMsQ0FBQzsiLAogICJuYW1lcyI6IFsibG9naW5FbGVtZW50U2VsZWN0b3IiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDEzIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYWRkTGlzdGVuZXIiLCAiJGVsZW1lbnQiLCAiZXZlbnRMaXN0ZW5lciIsICJvbiIsICJmaWx0ZXJBbHRlcmVkQ2xpY2tzIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDExIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ2FuY2VsIiwgInpoIiwgIkxvZ2luIiwgIlBhc3N3b3JkIiwgIlVzZXJuYW1lIiwgIkFncmVlZE9yTm90IiwgIkRvdWJsZUNoZWNrQWdyZWVkT3JOb3QiLCAiRW1wdHkyRkEiLCAiRW1wdHlQYXNzd29yZCIsICJFbXB0eVVzZXJuYW1lT3JQYXNzd29yZCIsICJTZWxlY3RlZE9yTm90IiwgIlRvb0ZyZXF1ZW50IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbml0V2luZG93TWFuYWdlciIsICJPTyIsICJ1aSIsICJXaW5kb3dNYW5hZ2VyIiwgIndpbmRvd01hbmFnZXIiLCAib291aUNvbmZpcm0iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJvcHRpb25zIiwgIm1lc3NhZ2VEaWFsb2ciLCAiTWVzc2FnZURpYWxvZyIsICJhZGRXaW5kb3dzIiwgImluc3RhbmNlIiwgIm9wZW5XaW5kb3ciLCAiZGF0YSIsICJjbG9zZWQiLCAiX2RhdGEiLCAiYWN0aW9uIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiY2hlY2tWYWxpZCIsICJfcmVmMiIsICJhZ3JlZVRvc0NoZWNrYm94IiwgIm5hbWVJbnB1dCIsICJwd2RJbnB1dCIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImlzQWdyZWVUb3MiLCAiaXNTZWxlY3RlZCIsICJpc0ZpbGwiLCAiZ2V0VmFsdWUiLCAidHJpbSIsICJpbmNsdWRlcyIsICJoaWRlVG9hc3QiLCAiY2xlYXJXaW5kb3dzIiwgIm1lc3NhZ2UiLCAiJCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaW5uZXJIVE1MIiwgImFjdGlvbnMiLCAibGFiZWwiLCAiZmxhZ3MiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJpc1ZhbGlkIiwgIl94MiIsICJfeDMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImdlbmVyYXRlRWxlbWVudHMiLCAiVGV4dElucHV0V2lkZ2V0IiwgImljb24iLCAicGxhY2Vob2xkZXIiLCAidmFsaWRhdGUiLCAidHlwZSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgImFncmVlVG9zTGF5b3V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImtlZXBMb2dpbkNoZWNrYm94IiwgImtlZXBMb2dpbkxheW91dCIsICJoZWxwIiwgImNsYXNzTmFtZSIsICJzdHlsZSIsICJmb250U2l6ZSIsICJ0ZXh0QWxpZ24iLCAiJGxhYmVsIiwgIiRhZ3JlZVRvcyIsICJjbG9uZSIsICJhcHBlbmQiLCAiJGZvcmdvdFBhc3N3b3JkIiwgImNzcyIsICJocmVmIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgInRpdGxlIiwgIiRpbnB1dEJveCIsICJkaXNwbGF5IiwgInBhZGRpbmciLCAiJHRvc0xhYmVsIiwgImh0bWwiLCAiJHJlbWVtYmVyTWUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ3IiwgInJlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIiLCAid2luZG93IiwgIm9mZiIsICJvbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCAib291aVByb21wdCIsICJfcmVmMyIsICJyZXR5cGVQYXNzd29yZCIsICJjb2RlRGlhbG9nIiwgImNvZGVJbnB1dCIsICJjb2RlTGF5b3V0IiwgIm9wZW5lZCIsICJ0aGVuIiwgImdldEN1cnJlbnRXaW5kb3ciLCAiY2xvc2UiLCAiZm9jdXMiLCAiX3g0IiwgImltcG9ydF9leHRfZ2FkZ2V0OCIsICJxdWVyeUxvZ2luVG9rZW4iLCAiX3JlZjQiLCAibG9naW5Ub2tlbiIsICJnZXRUb2tlbiIsICJfeDUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ5IiwgInJlZGlyZWN0T3JpZ2luTG9naW5QYWdlIiwgIl9yZWY1IiwgImRlbGF5IiwgImxvY2F0aW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MTAiLCAic2hvd0Vycm9yIiwgImVycm9yIiwgImNvbnNvbGUiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMiIsICJhamF4TG9naW4iLCAibG9naW4iLCAiX3JlZjYiLCAibG9naW5Db250aW51ZSIsICJfcmVzcG9uc2UkY2xpZW50bG9naW4iLCAiX3Jlc3BvbnNlJGNsaWVudGxvZ2luMiIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibG9naW50b2tlbiIsICJsb2dpbnJldHVybnVybCIsICJ1c2VybmFtZSIsICJwYXNzd29yZCIsICJyZW1lbWJlck1lIiwgImxvZ2luY29udGludWUiLCAidmFsdWUiLCAicmV0eXBlIiwgIk9BVEhUb2tlbiIsICJyZXNwb25zZSIsICJwb3N0IiwgInN0YXR1cyIsICJyZWxvYWQiLCAibWVzc2FnZWNvZGUiLCAicmVwbGFjZSIsICJjaGVjayIsICJfcmVmNyIsICJsYXN0SXNBZ3JlZVRvcyIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgIlByb2Nlc3MiLCAic2l6ZSIsICJnZXRCb2R5IiwgImluaXRBdXRvTG9naW4iLCAiJGJvZHkiLCAid2dVc2VyTmFtZSIsICJjb25maWciLCAiZ2V0IiwgIiRsb2dpbkVsZW1lbnQiLCAiZmluZCIsICJsZW5ndGgiLCAiYXBwZW5kVG8iLCAiZmFrZVRvYXN0aWZ5SW5zdGFuY2UiLCAiZXZlbnQiLCAiY2hlY2tBMTF5Q29uZmlybUtleSIsICJwcmV2ZW50RGVmYXVsdCJdCn0K
