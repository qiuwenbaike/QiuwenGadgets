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
    const isFill = ![nameInput.getValue(), pwdInput.getValue()].includes("");
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
      isValid,
      toastifyInstance
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
    return {
      loginToken,
      toastifyInstance
    };
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
          ({
            loginToken,
            toastifyInstance
          } = yield queryLoginToken(toastifyInstance));
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
        isAgreeTos: lastIsAgreeTos,
        toastifyInstance: lastToastifyInstance
      } = yield checkValid([agreeTosCheckbox, nameInput, pwdInput], toastifyInstance);
      toastifyInstance = lastToastifyInstance;
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
  if (WG_USER_NAME) {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FqYXhMb2dpbi9vcHRpb25zLmpzb24iLCAic3JjL0FqYXhMb2dpbi9BamF4TG9naW4udHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9hZGRMaXN0ZW5lci50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvYXBpLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9jb3JlLnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9jaGVja1ZhbGlkLnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvaTE4bi50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXIudHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL3V0aWwvb291aUNvbmZpcm0udHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVFbGVtZW50cy50c3giLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL3V0aWwvb291aVByb21wdC50c3giLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL3V0aWwvcmVtb3ZlV2luZG93UmVzaXplSGFuZGxlci50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9xdWVyeUxvZ2luVG9rZW4udHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL3V0aWwvcmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2UudHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL3V0aWwvc2hvd0Vycm9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibG9naW5FbGVtZW50U2VsZWN0b3JcIjogXCJhOmhhcyguYWpheGxvZ2luLW1vdW50LXBvaW50KSwjcHQtbG9naW4+YSwudmVjdG9yLXVzZXItbWVudS1sb2dpbj5hLCN1c2VyLXRvb2xzPmFbaHJlZio9XFxcIlNwZWNpYWxcXFwiXSwubWFpbnBhZ2UtdG9wLW1lbnU+bGk6bnRoLWNoaWxkKDIpIGFcIixcblx0XCJ2ZXJzaW9uXCI6IFwiNC4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleSwgZ2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7V0dfVVNFUl9OQU1FfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2FkZExpc3RlbmVyJztcbmltcG9ydCB7YWpheExvZ2lufSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlcic7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gaW5pdEF1dG9Mb2dpbigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0aWYgKFdHX1VTRVJfTkFNRSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRsb2dpbkVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PihPUFRJT05TLmxvZ2luRWxlbWVudFNlbGVjdG9yKTtcblx0aWYgKCEkbG9naW5FbGVtZW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuYXBwZW5kVG8oJGJvZHkpO1xuXG5cdGNvbnN0IGZha2VUb2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdH07XG5cblx0Y29uc3QgZXZlbnRMaXN0ZW5lciA9IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KTogdm9pZCA9PiB7XG5cdFx0aWYgKCFjaGVja0ExMXlDb25maXJtS2V5KGV2ZW50KSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0YWpheExvZ2luKGZha2VUb2FzdGlmeUluc3RhbmNlKTtcblx0fTtcblx0YWRkTGlzdGVuZXIoJGxvZ2luRWxlbWVudCwgZXZlbnRMaXN0ZW5lcik7XG59KTtcbiIsICJjb25zdCBXR19VU0VSX05BTUU6IHN0cmluZyB8IG51bGwgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyk7XG5cbmV4cG9ydCB7V0dfVVNFUl9OQU1FfTtcbiIsICJpbXBvcnQge2ZpbHRlckFsdGVyZWRDbGlja3N9IGZyb20gJ2V4dC5nYWRnZXQuRmlsdGVyQWx0ZXJlZENsaWNrcyc7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKFxuXHQkZWxlbWVudDogSlF1ZXJ5LFxuXHRldmVudExpc3RlbmVyOiAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCkgPT4gdm9pZFxuKTogdm9pZCA9PiB7XG5cdCRlbGVtZW50Lm9uKFxuXHRcdCdjbGljaycsXG5cdFx0ZmlsdGVyQWx0ZXJlZENsaWNrcygoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRldmVudExpc3RlbmVyKGV2ZW50KTtcblx0XHR9KVxuXHQpO1xuXHQkZWxlbWVudC5vbigna2V5ZG93bicsIGV2ZW50TGlzdGVuZXIpO1xufTtcblxuZXhwb3J0IHthZGRMaXN0ZW5lcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnR5cGUgQ2xpZW50TG9naW5QYXJhbXMgPSBBcGlDbGllbnRMb2dpblBhcmFtcyAmIHtcblx0bG9naW5jb250aW51ZT86IGJvb2xlYW47XG5cdGxvZ2ludG9rZW46IHN0cmluZztcblx0bG9naW5yZXR1cm51cmw/OiBzdHJpbmc7XG5cdHVzZXJuYW1lPzogc3RyaW5nO1xuXHRwYXNzd29yZD86IHN0cmluZztcblx0cmVtZW1iZXJNZT86IGJvb2xlYW47XG5cdHJldHlwZT86IHN0cmluZztcblx0T0FUSFRva2VuPzogc3RyaW5nO1xufTtcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEFqYXhMb2dpbi8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHt0eXBlIENsaWVudExvZ2luUGFyYW1zLCBhcGl9O1xuIiwgImltcG9ydCB7dHlwZSBDbGllbnRMb2dpblBhcmFtcywgYXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2NoZWNrVmFsaWR9IGZyb20gJy4vdXRpbC9jaGVja1ZhbGlkJztcbmltcG9ydCB7Z2VuZXJhdGVFbGVtZW50c30gZnJvbSAnLi91dGlsL2dlbmVyYXRlRWxlbWVudHMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtvb3VpUHJvbXB0fSBmcm9tICcuL3V0aWwvb291aVByb21wdCc7XG5pbXBvcnQge3F1ZXJ5TG9naW5Ub2tlbn0gZnJvbSAnLi91dGlsL3F1ZXJ5TG9naW5Ub2tlbic7XG5pbXBvcnQge3JlZGlyZWN0T3JpZ2luTG9naW5QYWdlfSBmcm9tICcuL3V0aWwvcmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2UnO1xuaW1wb3J0IHtyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyfSBmcm9tICcuL3V0aWwvcmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcic7XG5pbXBvcnQge3Nob3dFcnJvcn0gZnJvbSAnLi91dGlsL3Nob3dFcnJvcic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IGFqYXhMb2dpbiA9ICh0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlLCBpc0FncmVlVG9zOiBib29sZWFuID0gZmFsc2UpOiB2b2lkID0+IHtcblx0Y29uc3Qge1xuXHRcdCRhZ3JlZVRvcyxcblx0XHQkZm9yZ290UGFzc3dvcmQsXG5cdFx0JGlucHV0Qm94LFxuXHRcdCRyZW1lbWJlck1lLFxuXHRcdCR0b3NMYWJlbCxcblx0XHRhZ3JlZVRvc0NoZWNrYm94LFxuXHRcdGtlZXBMb2dpbkNoZWNrYm94LFxuXHRcdG1lc3NhZ2VEaWFsb2csXG5cdFx0bmFtZUlucHV0LFxuXHRcdHB3ZElucHV0LFxuXHR9ID0gZ2VuZXJhdGVFbGVtZW50cyhpc0FncmVlVG9zKTtcblxuXHRsZXQgbG9naW5Ub2tlbjogc3RyaW5nID0gJyc7XG5cdGNvbnN0IGxvZ2luID0gYXN5bmMgKHtsb2dpbkNvbnRpbnVlID0gZmFsc2UsIHJldHlwZVBhc3N3b3JkID0gZmFsc2V9ID0ge30pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKCFsb2dpbkNvbnRpbnVlKSB7XG5cdFx0XHRcdCh7bG9naW5Ub2tlbiwgdG9hc3RpZnlJbnN0YW5jZX0gPSBhd2FpdCBxdWVyeUxvZ2luVG9rZW4odG9hc3RpZnlJbnN0YW5jZSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJhbXM6IENsaWVudExvZ2luUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdjbGllbnRsb2dpbicsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdGxvZ2ludG9rZW46IGxvZ2luVG9rZW4sXG5cdFx0XHRcdGxvZ2lucmV0dXJudXJsOiBsb2NhdGlvbi5ocmVmLFxuXHRcdFx0XHR1c2VybmFtZTogbmFtZUlucHV0LmdldFZhbHVlKCksXG5cdFx0XHRcdHBhc3N3b3JkOiBwd2RJbnB1dC5nZXRWYWx1ZSgpLFxuXHRcdFx0fTtcblx0XHRcdGlmIChrZWVwTG9naW5DaGVja2JveC5pc1NlbGVjdGVkKCkpIHtcblx0XHRcdFx0cGFyYW1zLnJlbWVtYmVyTWUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxvZ2luQ29udGludWUgfHwgcmV0eXBlUGFzc3dvcmQpIHtcblx0XHRcdFx0YXdhaXQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0XHRcdFx0ZGVsZXRlIHBhcmFtcy5sb2dpbnJldHVybnVybDtcblx0XHRcdFx0ZGVsZXRlIHBhcmFtcy51c2VybmFtZTtcblx0XHRcdFx0ZGVsZXRlIHBhcmFtcy5wYXNzd29yZDtcblx0XHRcdFx0cGFyYW1zLmxvZ2luY29udGludWUgPSB0cnVlO1xuXG5cdFx0XHRcdGNvbnN0IHZhbHVlOiBzdHJpbmcgfCBudWxsID0gYXdhaXQgb291aVByb21wdChyZXR5cGVQYXNzd29yZCk7XG5cblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTG9naW4gY2FuY2VsbGVkJyksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J2luZm8nXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR2b2lkIHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT09ICcnKSB7XG5cdFx0XHRcdFx0aWYgKHJldHlwZVBhc3N3b3JkKSB7XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdFbXB0eVBhc3N3b3JkJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR2b2lkIGxvZ2luKHtcblx0XHRcdFx0XHRcdFx0cmV0eXBlUGFzc3dvcmQ6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRW1wdHkyRkEnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRsb2dpbkNvbnRpbnVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJldHlwZVBhc3N3b3JkKSB7XG5cdFx0XHRcdFx0cGFyYW1zLnBhc3N3b3JkID0gdmFsdWU7XG5cdFx0XHRcdFx0cGFyYW1zLnJldHlwZSA9IHZhbHVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBhcmFtcy5PQVRIVG9rZW4gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTG9nZ2luZyBpbicpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW5mbydcblx0XHRcdCk7XG5cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IGFwaS5wb3N0KHBhcmFtcykpIGFzIHtcblx0XHRcdFx0Y2xpZW50bG9naW46IHtcblx0XHRcdFx0XHRzdGF0dXM/OiBzdHJpbmc7XG5cdFx0XHRcdFx0bWVzc2FnZWNvZGU/OiBzdHJpbmc7XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXG5cdFx0XHRpZiAocmVzcG9uc2VbJ2NsaWVudGxvZ2luJ10/LnN0YXR1cyA9PT0gJ1BBU1MnKSB7XG5cdFx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2luIHN1Y2NlZWQnKSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdzdWNjZXNzJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdH0gZWxzZSBpZiAocmVzcG9uc2VbJ2NsaWVudGxvZ2luJ10/Lm1lc3NhZ2Vjb2RlKSB7XG5cdFx0XHRcdGNvbnN0IHttZXNzYWdlY29kZX0gPSByZXNwb25zZVsnY2xpZW50bG9naW4nXTtcblx0XHRcdFx0c3dpdGNoIChtZXNzYWdlY29kZSkge1xuXHRcdFx0XHRcdGNhc2UgJ2xvZ2luLXRocm90dGxlZCc6XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdUb29GcmVxdWVudCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J2Vycm9yJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ29hdGhhdXRoLWF1dGgtdWknOlxuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdGxvZ2luQ29udGludWU6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ29hdGhhdXRoLWxvZ2luLWZhaWxlZCc6XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdJbnZhbGlkIDJGQSB2ZXJpZmljYXRpb24gY29kZScpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdGxvZ2luQ29udGludWU6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3Jlc2V0cGFzcy10ZW1wLWVtYWlsZWQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV3IHBhc3N3b3JkIGlzIHJlcXVpcmVkJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR2b2lkIGxvZ2luKHtcblx0XHRcdFx0XHRcdFx0cmV0eXBlUGFzc3dvcmQ6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3dyb25ncGFzc3dvcmQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnSW52YWxpZCB1c2VydWFtZSBvciBwYXNzd29yZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0YXdhaXQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0XHRcdFx0XHRcdGFqYXhMb2dpbih0b2FzdGlmeUluc3RhbmNlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1VuZXhwZWN0ZWQgQVBJIHJlc3BvbnNlJykucmVwbGFjZSgnJDEnLCBtZXNzYWdlY29kZSksXG5cdFx0XHRcdFx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnZXJyb3InXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCByZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdHNob3dFcnJvcihlcnJvciwgdG9hc3RpZnlJbnN0YW5jZSk7XG5cdFx0XHR2b2lkIHJlZGlyZWN0T3JpZ2luTG9naW5QYWdlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGNoZWNrID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGlzVmFsaWQsXG5cdFx0XHRpc0FncmVlVG9zOiBsYXN0SXNBZ3JlZVRvcyxcblx0XHRcdHRvYXN0aWZ5SW5zdGFuY2U6IGxhc3RUb2FzdGlmeUluc3RhbmNlLFxuXHRcdH0gPSBhd2FpdCBjaGVja1ZhbGlkKFthZ3JlZVRvc0NoZWNrYm94LCBuYW1lSW5wdXQsIHB3ZElucHV0XSwgdG9hc3RpZnlJbnN0YW5jZSk7XG5cblx0XHR0b2FzdGlmeUluc3RhbmNlID0gbGFzdFRvYXN0aWZ5SW5zdGFuY2U7XG5cblx0XHRpZiAoaXNWYWxpZCkge1xuXHRcdFx0dm9pZCBsb2dpbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhamF4TG9naW4odG9hc3RpZnlJbnN0YW5jZSwgbGFzdElzQWdyZWVUb3MpO1xuXHRcdH1cblx0fTtcblxuXHRwd2RJbnB1dC5vbignZW50ZXInLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCBjaGVjaygpO1xuXHR9KTtcblx0bWVzc2FnZURpYWxvZy5nZXRBY3Rpb25Qcm9jZXNzID0gKGFjdGlvbik6IE9PLnVpLlByb2Nlc3MgPT5cblx0XHRuZXcgT08udWkuUHJvY2VzcygoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAnbG9naW4nKSB7XG5cdFx0XHRcdHZvaWQgY2hlY2soKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0XHRcdHZvaWQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3cobWVzc2FnZURpYWxvZywge1xuXHRcdGFjdGlvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnbG9naW4nLFxuXHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKDxiPntnZXRNZXNzYWdlKCdMb2dpbicpfTwvYj4pLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnY2FuY2VsJyxcblx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHRsYWJlbDogJCg8Yj57Z2V0TWVzc2FnZSgnQ2FuY2VsJyl9PC9iPiksXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0bWVzc2FnZTogJChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib28tdWktd2luZG93LWZvb3RcIj57WyRpbnB1dEJveCwgJGZvcmdvdFBhc3N3b3JkLCAkcmVtZW1iZXJNZSwgJGFncmVlVG9zLCAkdG9zTGFiZWxdfTwvZGl2PlxuXHRcdCksXG5cdFx0dGl0bGU6ICQoPGIgY2xhc3NOYW1lPVwib28tdWktd2luZG93LWhlYWRcIj57Z2V0TWVzc2FnZSgnTG9naW4nKX08L2I+KSxcblx0XHRzaXplOiAnc21hbGwnLFxuXHR9KTtcblx0cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcigpO1xufTtcblxuZXhwb3J0IHthamF4TG9naW59O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge29vdWlDb25maXJtfSBmcm9tICcuL29vdWlDb25maXJtJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IGNoZWNrVmFsaWQgPSBhc3luYyAoXG5cdFthZ3JlZVRvc0NoZWNrYm94LCBuYW1lSW5wdXQsIHB3ZElucHV0XTogW09PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQsIE9PLnVpLlRleHRJbnB1dFdpZGdldCwgT08udWkuVGV4dElucHV0V2lkZ2V0XSxcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZVxuKTogUHJvbWlzZTx7XG5cdGlzQWdyZWVUb3M6IGJvb2xlYW47XG5cdGlzVmFsaWQ6IGJvb2xlYW47XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG59PiA9PiB7XG5cdGxldCBpc0FncmVlVG9zOiBib29sZWFuID0gYWdyZWVUb3NDaGVja2JveC5pc1NlbGVjdGVkKCk7XG5cdGNvbnN0IGlzRmlsbDogYm9vbGVhbiA9ICFbbmFtZUlucHV0LmdldFZhbHVlKCksIHB3ZElucHV0LmdldFZhbHVlKCldLmluY2x1ZGVzKCcnKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRhd2FpdCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXG5cdGlmICghaXNBZ3JlZVRvcykge1xuXHRcdGlzQWdyZWVUb3MgPSBhd2FpdCBvb3VpQ29uZmlybSh7XG5cdFx0XHRtZXNzYWdlOiAkKDxzcGFuIGlubmVySFRNTD17Z2V0TWVzc2FnZSgnRG91YmxlQ2hlY2tBZ3JlZWRPck5vdCcpfSAvPikgYXMgSlF1ZXJ5LFxuXHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGFiZWw6ICQoPGI+e2dldE1lc3NhZ2UoJ0NhbmNlbCcpfTwvYj4pLFxuXHRcdFx0XHRcdGFjdGlvbjogJ2NhbmNlbCcsXG5cdFx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGFiZWw6ICQoPGI+e2dldE1lc3NhZ2UoJ0kgYWdyZWUnKX08L2I+KSxcblx0XHRcdFx0XHRhY3Rpb246ICdhY2NlcHQnLFxuXHRcdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSk7XG5cblx0XHRpZiAoIWlzQWdyZWVUb3MpIHtcblx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0FncmVlZE9yTm90JyksXG5cdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW5mbydcblx0XHRcdCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKCFpc0ZpbGwpIHtcblx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0VtcHR5VXNlcm5hbWVPclBhc3N3b3JkJyksXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnaW5mbydcblx0XHQpO1xuXHR9XG5cblx0Y29uc3QgaXNWYWxpZDogYm9vbGVhbiA9IGlzQWdyZWVUb3MgJiYgaXNGaWxsO1xuXG5cdHJldHVybiB7XG5cdFx0aXNBZ3JlZVRvcyxcblx0XHRpc1ZhbGlkLFxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UsXG5cdH07XG59O1xuXG5leHBvcnQge2NoZWNrVmFsaWR9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnNi1kaWdpdCBudW1iZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzYtZGlnaXQgbnVtYmVyJyxcblx0XHRcdGphOiAnNuahgeOBruaVsOWtlycsXG5cdFx0XHQnemgtaGFucyc6ICc25L2N5pWw5a2XJyxcblx0XHRcdCd6aC1oYW50JzogJzbkvY3mlbjlrZcnLFxuXHRcdH0pLFxuXHRcdENhbmNlbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDYW5jZWwnLFxuXHRcdFx0amE6ICfjgq3jg6Pjg7Pjgrvjg6snLFxuXHRcdFx0emg6ICflj5bmtognLFxuXHRcdH0pLFxuXHRcdCdFbnRlciBwYXNzd29yZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRW50ZXIgcGFzc3dvcmQnLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+36L6T5YWl5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+i8uOWFpeWvhueivCcsXG5cdFx0fSksXG5cdFx0J0VudGVyIDJGQSB2ZXJpZmljYXRpb24gY29kZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnMkZBIHZlcmlmaWNhdGlvbiBjb2RlJyxcblx0XHRcdGphOiAnMkZB6KqN6Ki844Kz44O844OJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+i+k+WFpTJGQemqjOivgeeggScsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vovLjlhaUyRkHpqZforYnnorwnLFxuXHRcdH0pLFxuXHRcdCdGb3Jnb3QgcGFzc3dvcmQ/JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGb3Jnb3QgcGFzc3dvcmQ/Jyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJ44KS44GK5b+Y44KM44Gn44GZ44GL77yfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W/mOiusOWvhuegge+8nycsXG5cdFx0XHQnemgtaGFudCc6ICflv5joqJjlr4bnorzvvJ8nLFxuXHRcdH0pLFxuXHRcdCdHZXR0aW5nIGxvZ2luIHRva2VuJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHZXR0aW5nIGxvZ2luIHRva2VuJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44OI44O844Kv44Oz44KS5Y+W5b6X44GX44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOiOt+WPlueZu+W9leS7pOeJjCcsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjnjbLlj5bnmbvlhaXmrIrmnZYnLFxuXHRcdH0pLFxuXHRcdCdoZWxwIGZvciBJIGFncmVlIHdpdGggdGhlIHJlbGV2YW50IHRlcm1zJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXaGVuIHlvdSBsb2dpbiwgaXQgbWVhbnMgdGhhdCB5b3UgaGF2ZSBjYXJlZnVsbHkgcmVhZCwgZnVsbHkgdW5kZXJzdG9vZCBhbmQgYWdyZWVkIHRvIGNvbXBseSB3aXRoIG91ciA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIlRlcm1zIG9mIFNlcnZpY2VcIj5UZXJtcyBvZiBTZXJ2aWNlPC9hPiwgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUFwiIHRpdGxlPVwiUGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3lcIj5QZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeTwvYT4gYW5kIDxlbT50aGUgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwiQ29tbW9uIFByb2dyYW1cIj5Db21tb24gUHJvZ3JhbTwvYT48L2VtPi4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7PjgpLjgZnjgovjgajjgIHjgYLjgarjgZ/jga/mnKzjgrXjgqTjg4jjga7jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIuWIqeeUqOimj+e0hFwiPuWIqeeUqOimj+e0hDwvYT7jgI/jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCLlgIvkurrmg4XloLHkv53orbfmlrnph51cIj7lgIvkurrmg4XloLHkv53orbfmlrnph508L2E+44CP44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwi5YWx5ZCM57ax6aCYXCI+5YWx5ZCM57ax6aCYPC9hPuOAj+OCkuWNgeWIhuOBq+eQhuino+OBl+OAgeWQjOaEj+OBl+OBn+OBk+OBqOOBq+OBquOCiuOBvuOBmeOAgicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfnmbvlvZXml7bvvIzljbPku6Pooajmgqjlt7Lku5Tnu4bpmIXor7vjgIHlhYXliIbkuobop6PlubblkIzmhI/pgbXlrojmnKznvZHnq5nnmoTjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIueUqOaIt+WNj+iurlwiPueUqOaIt+WNj+iurjwvYT7jgIvjgIHjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCLkuKrkurrkv6Hmga/kv53miqTmlrnpkohcIj7kuKrkurrkv6Hmga/kv53miqTmlrnpkog8L2E+44CL5Y+K44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwi5YWx5ZCM57ax6aCYXCI+5YWx5ZCM57ax6aCYPC9hPuOAi+OAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfnmbvpjITmmYLvvIzljbPku6Pooajmgqjlt7Lku5TntLDplrHoroDjgIHlhYXliIbkuobop6PkuKblkIzmhI/pgbXlrojmnKzntrLnq5nnmoTjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIueUqOaItuWNlOitsFwiPueUqOaItuWNlOitsDwvYT7jgIvjgIHjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCLlgIvkurrkv6Hmga/kv53orbfmlrnph51cIj7lgIvkurrkv6Hmga/kv53orbfmlrnph508L2E+44CL5Y+K44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwi5YWx5ZCM57ax6aCYXCI+5YWx5ZCM57ax6aCYPC9hPuOAi+OAgicsXG5cdFx0fSksXG5cdFx0J0kgYWdyZWUnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0kgYWdyZWUnLFxuXHRcdFx0amE6ICflkIzmhI/jgZnjgosnLFxuXHRcdFx0emg6ICfmiJHlkIzmhI8nLFxuXHRcdH0pLFxuXHRcdCdJIGFncmVlIHdpdGggdGhlIHJlbGV2YW50IHRlcm1zJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJIGFncmVlIHdpdGggdGhlIHJlbGV2YW50IHRlcm1zJyxcblx0XHRcdGphOiAn6Zai6YCj44GZ44KL6KaP57SE44KS6Kqt44G/44CB5ZCM5oSPJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aIkeW3sumYheivu+W5tuWQjOaEj+ebuOWFs+adoeasvicsXG5cdFx0XHQnemgtaGFudCc6ICfmiJHlt7LplrLoroDkuKblkIzmhI/nm7jpl5zmop3mrL4nLFxuXHRcdH0pLFxuXHRcdCdJbnZhbGlkIDJGQSB2ZXJpZmljYXRpb24gY29kZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW52YWxpZCAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnLFxuXHRcdFx0amE6ICcyRkHoqo3oqLzjgrPjg7zjg4njgYzplpPpgZXjgaPjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAnMkZB6aqM6K+B56CB6ZSZ6K+vJyxcblx0XHRcdCd6aC1oYW50JzogJzJGQempl+itieeivOmMr+iqpCcsXG5cdFx0fSksXG5cdFx0J0ludmFsaWQgdXNlcnVhbWUgb3IgcGFzc3dvcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludmFsaWQgdXNlcnVhbWUgb3IgcGFzc3dvcmQnLFxuXHRcdFx0amE6ICfliKnnlKjogIXlkI3jgb7jgZ/jga/jg5Hjgrnjg6/jg7zjg4njgYzplpPpgZXjgaPjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+WQjeaIluWvhueggemUmeivrycsXG5cdFx0XHQnemgtaGsnOiAn55So5oi25ZCN56ix5oiW5a+G56K86Yyv6KqkJyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXlkI3nqLHmiJblr4bnorzpjK/oqqQnLFxuXHRcdH0pLFxuXHRcdCdLZWVwIG1lIGxvZ2dlZCBpbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnS2VlcCBtZSBsb2dnZWQgaW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7PnirbmhYvjgpLkv53mjIEnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K6w5L2P5oiR55qE55m75b2V54q25oCBJyxcblx0XHRcdCd6aC1oYW50JzogJ+iomOS9j+aIkeeahOeZu+WFpeeLgOaFiycsXG5cdFx0fSksXG5cdFx0J0xvZ2dpbmcgaW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2dpbmcgaW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7PjgZfjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo55m75b2VJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOeZu+WFpScsXG5cdFx0fSksXG5cdFx0TG9naW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7MnLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2VJyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpScsXG5cdFx0fSksXG5cdFx0J0xvZ2luIGNhbmNlbGxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4gY2FuY2VsbGVkJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44Kt44Oj44Oz44K744OrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eZu+W9leWPlua2iCcsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlhaXlj5bmtognLFxuXHRcdH0pLFxuXHRcdCdMb2dpbiBzdWNjZWVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbiBzdWNjZWVkJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44Gr5oiQ5Yqf44GX44G+44GX44GfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eZu+W9leaIkOWKnycsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlhaXmiJDlip8nLFxuXHRcdH0pLFxuXHRcdCdMb2dpbiB0b2tlbiBnZXR0ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2luIHRva2VuIGdldHRlZCcsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+ODiOODvOOCr+ODs+OBruWPluW+l+OBq+aIkOWKn+OBl+OBvuOBl+OBnycsXG5cdFx0XHQnemgtaGFucyc6ICfojrflj5bnmbvlvZXku6TniYzmiJDlip8nLFxuXHRcdFx0J3poLWhhbnQnOiAn542y5Y+W55m75YWl5qyK5p2W5oiQ5YqfJyxcblx0XHR9KSxcblx0XHQnTmV3IHBhc3N3b3JkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXcgcGFzc3dvcmQnLFxuXHRcdFx0amE6ICfmlrDjgZfjgYTjg5Hjgrnjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn5paw5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+aWsOWvhueivCcsXG5cdFx0fSksXG5cdFx0J05ldyBwYXNzd29yZCBpcyByZXF1aXJlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV3IHBhc3N3b3JkIGlzIHJlcXVpcmVkJyxcblx0XHRcdGphOiAn5paw44GX44GE44OR44K544Ov44O844OJ44KS6Kit5a6a44GX44Gm44GP44Gg44GV44GEJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mcgOimgeiuvue9ruaWsOWvhueggScsXG5cdFx0XHQnemgtaGFudCc6ICfpnIDopoHoqK3nva7mlrDlr4bnorwnLFxuXHRcdH0pLFxuXHRcdFBhc3N3b3JkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Bhc3N3b3JkJyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvhueggScsXG5cdFx0XHQnemgtaGFudCc6ICflr4bnorwnLFxuXHRcdH0pLFxuXHRcdCdSZXNldCBwYXNzd29yZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVzZXQgcGFzc3dvcmQnLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4njgpLjg6rjgrvjg4Pjg4gnLFxuXHRcdFx0J3poLWhhbnMnOiAn6YeN572u5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+mHjeaWsOioreWumuWvhueivCcsXG5cdFx0fSksXG5cdFx0VXNlcm5hbWU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVXNlcm5hbWUnLFxuXHRcdFx0amE6ICfliKnnlKjogIXlkI0nLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+WQjScsXG5cdFx0XHQnemgtaGsnOiAn55So5oi25ZCN56ixJyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXlkI3nqLEnLFxuXHRcdH0pLFxuXHRcdEFncmVlZE9yTm90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BsZWFzZSByZWFkIHRoZSByZWxldmFudCB0ZXJtcy4gSWYgeW91IGFncmVlLCBjaGVjayB0aGUgY2hlY2tib3ggdG8gY29uZmlybScsXG5cdFx0XHRqYTogJ+mWoumAo+OBmeOCi+imj+e0hOOCkuOBiuiqreOBv+OBhOOBn+OBoOOBjeOAgeWQjOaEj+OBleOCjOOCi+WgtOWQiOOBr+OAgeODgeOCp+ODg+OCr+ODnOODg+OCr+OCueOBq+ODgeOCp+ODg+OCr+OCkuWFpeOCjOOBpueiuuiqjeOBl+OBpuOBj+OBoOOBleOBhCcsXG5cdFx0XHQnemgtaGFucyc6ICfor7fpmIXor7vnm7jlhbPmnaHmrL7jgILoi6XlkIzmhI/vvIzli77pgInlpI3pgInmoYbku6Xnoa7orqQnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6Zay6K6A55u46Zec5qKd5qy+44CC6Iul5ZCM5oSP77yM5Yu+6YG46KSH6YG45qGG5Lul56K66KqNJyxcblx0XHR9KSxcblx0XHREb3VibGVDaGVja0FncmVlZE9yTm90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBoYXZlIGNhcmVmdWxseSByZWFkLCBmdWxseSB1bmRlcnN0b29kIGFuZCBhZ3JlZWQgdG8gY29tcGx5IHdpdGggb3VyIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwiVGVybXMgb2YgU2VydmljZVwiPlRlcm1zIG9mIFNlcnZpY2U8L2E+LCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCJQZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeVwiPlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5PC9hPiBhbmQgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwiQ29tbW9uIFByb2dyYW1cIj5Db21tb24gUHJvZ3JhbTwvYT4uJyxcblx0XHRcdGphOiAn44GC44Gq44Gf44Gv5pys44K144Kk44OI44Gu44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCLliKnnlKjopo/ntIRcIj7liKnnlKjopo/ntIQ8L2E+44CP44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUFwiIHRpdGxlPVwi5YCL5Lq65oOF5aCx5L+d6K235pa56YedXCI+5YCL5Lq65oOF5aCx5L+d6K235pa56YedPC9hPuOAj+OAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIuWFseWQjOe2semgmFwiPuWFseWQjOe2semgmDwvYT7jgI/jgpLljYHliIbjgavnkIbop6PjgZfjgIHlkIzmhI/jgZfjgZ/jgZPjgajjgavjgarjgorjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo5bey5LuU57uG6ZiF6K+744CB5YWF5YiG5LqG6Kej5bm25ZCM5oSP6YG15a6I5pys572R56uZ55qE44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCLnlKjmiLfljY/orq5cIj7nlKjmiLfljY/orq48L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUFwiIHRpdGxlPVwi5Liq5Lq65L+h5oGv5L+d5oqk5pa56ZKIXCI+5Liq5Lq65L+h5oGv5L+d5oqk5pa56ZKIPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIuWFseWQjOe6sumihlwiPuWFseWQjOe6sumihjwvYT7jgIvjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo5bey5LuU57Sw6Zax6K6A44CB5YWF5YiG5LqG6Kej5Lim5ZCM5oSP6YG15a6I5pys57ay56uZ55qE44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCLnlKjmiLbljZTorbBcIj7nlKjmiLbljZTorbA8L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUFwiIHRpdGxlPVwi5YCL5Lq65L+h5oGv5L+d6K235pa56YedXCI+5YCL5Lq65L+h5oGv5L+d6K235pa56YedPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIuWFseWQjOe2semgmFwiPuWFseWQjOe2semgmDwvYT7jgIvjgIInLFxuXHRcdH0pLFxuXHRcdEVtcHR5MkZBOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSAyRkEgdmVyaWZpY2F0aW9uIGNvZGUgY2Fubm90IGJlIGVtcHR5Jyxcblx0XHRcdGphOiAnMkZB6KqN6Ki844Kz44O844OJ44GM5YWl5Yqb44GV44KM44Gm44GE44G+44Gb44KTJyxcblx0XHRcdCd6aC1oYW5zJzogJzJGQemqjOivgeeggeS4jeiDveS4uuepuicsXG5cdFx0XHQnemgtaGFudCc6ICcyRkHpqZforYnnorzkuI3og73niLLnqbonLFxuXHRcdH0pLFxuXHRcdEVtcHR5UGFzc3dvcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIHBhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eScsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODieOBjOWFpeWKm+OBleOCjOOBpuOBhOOBvuOBm+OCkycsXG5cdFx0XHQnemgtaGFucyc6ICflr4bnoIHkuI3og73kuLrnqbonLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+G56K85LiN6IO954iy56m6Jyxcblx0XHR9KSxcblx0XHRFbXB0eVVzZXJuYW1lT3JQYXNzd29yZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgdXNlcm5hbWUgb3IgcGFzc3dvcmQgY2Fubm90IGJlIGVtcHR5Jyxcblx0XHRcdGphOiAn5Yip55So6ICF5ZCN44G+44Gf44Gv44OR44K544Ov44O844OJ44GM5YWl5Yqb44GV44KM44Gm44GE44G+44Gb44KTJyxcblx0XHRcdCd6aC1jbic6ICfnlKjmiLflkI3miJblr4bnoIHkuI3og73kuLrnqbonLFxuXHRcdFx0J3poLWhrJzogJ+eUqOaItuWQjeeoseaIluWvhueivOS4jeiDveeIsuepuicsXG5cdFx0XHQnemgtdHcnOiAn5L2/55So6ICF5ZCN56ix5oiW5a+G56K85LiN6IO954iy56m6Jyxcblx0XHR9KSxcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvci4gUmVkaXJlY3RpbmcuLi4nLFxuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7zjgIHjg6rjg4DjgqTjg6zjgq/jg4jkuK0uLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi444CC6YeN5a6a5ZCR5Lit4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uOOAgumHjeaWsOWwjuWQkeS4reKApuKApicsXG5cdFx0fSksXG5cdFx0U2VsZWN0ZWRPck5vdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJZiBzZWxlY3RlZCwgdGhlIGxvZ2luIHN0YXR1cyB3aWxsIGJlIGtlcHQgZm9yIDYgbW9udGhzLiBJZiBub3Qgc2VsZWN0ZWQsIGl0IHdpbGwgYmUga2VwdCBmb3IgMSBtb250aC4nLFxuXHRcdFx0amE6ICfjg4Hjgqfjg4Pjgq/jgpLlhaXjgozjgovjgajjg63jgrDjgqTjg7PnirbmhYvjgYw244O25pyI6ZaT5L+d5oyB44GV44KM44CB5YWl44KM44Gq44GE5aC05ZCI44GvMeODtuaciOmWk+S/neaMgeOBleOCjOOBvuOBmeOAgicsXG5cdFx0XHQnemgtaGFucyc6ICfli77pgInliJnkv53mjIHnmbvlvZXnirbmgIE25Liq5pyI77yM5LiN5Yu+6YCJ5YiZ5L+d5oyBMeS4quaciOOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfli77pgbjliJnkv53mjIHnmbvlhaXni4DmhYs25YCL5pyI77yM5LiN5Yu+6YG45YmH5L+d5oyBMeWAi+aciOOAgicsXG5cdFx0fSksXG5cdFx0VG9vRnJlcXVlbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIHVzZXIgbG9naW4gaXMgdG9vIGZyZXF1ZW50LCBwbGVhc2UgdHJ5IGFnYWluIGluIGZpdmUgbWludXRlcycsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheOBjOmgu+e5geOBmeOBjuOCi+OBn+OCgeOAgTXliIblvozjgavlho3oqabooYzjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+eZu+W9lei/h+S6jumikee5ge+8jOivt+S6lOWIhumSn+WQjuWGjeivlScsXG5cdFx0XHQnemgtaGsnOiAn55So5oi255m75YWl6YGO5pa86aC757mB77yM6KuL5LqU5YiG6ZCY5b6M5YaN6KmmJyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXnmbvlhaXov4fkuo7popHnuYHvvIzor7fkupTliIbpkp/lkI7lho3or5UnLFxuXHRcdH0pLFxuXHRcdCdVbmV4cGVjdGVkIEFQSSByZXNwb25zZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVW5leHBlY3RlZCBBUEkgcmVzcG9uc2U6ICQxLiBSZWRpcmVjdGluZy4uLicsXG5cdFx0XHRqYTogJ+S6iOacn+OBm+OBrEFQSeOBruW/nOetlO+8miQx44CB44Oq44OA44Kk44Os44Kv44OI5LitLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aEj+WklueahEFQSeWTjeW6lO+8miQx44CC6YeN5a6a5ZCR5Lit4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+aEj+WklueahEFQSemfv+aHie+8miQx44CC6YeN5paw5bCO5ZCR5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IGluaXRXaW5kb3dNYW5hZ2VyID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIgPT4ge1xuXHRyZXR1cm4gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcbn07XG5cbmNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXG5leHBvcnQge3dpbmRvd01hbmFnZXJ9O1xuIiwgImltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBvb3VpQ29uZmlybSA9IGFzeW5jIChvcHRpb25zOiBPTy51aS5NZXNzYWdlRGlhbG9nLlNldHVwRGF0YU1hcCkgPT4ge1xuXHRjb25zdCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFttZXNzYWdlRGlhbG9nXSk7XG5cblx0Y29uc3QgaW5zdGFuY2U6IE9PLnVpLldpbmRvd0luc3RhbmNlID0gd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIG9wdGlvbnMpO1xuXG5cdGNvbnN0IGRhdGE6IHZvaWQgPSBhd2FpdCBpbnN0YW5jZS5jbG9zZWQ7XG5cdGNvbnN0IF9kYXRhID0gZGF0YSBhcyB7YWN0aW9uOiBzdHJpbmd9IHwgdm9pZDtcblxuXHRyZXR1cm4gISEoX2RhdGE/LmFjdGlvbiA9PT0gJ2FjY2VwdCcpO1xufTtcblxuZXhwb3J0IHtvb3VpQ29uZmlybX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVFbGVtZW50cyA9IChpc0FncmVlVG9zOiBib29sZWFuKSA9PiB7XG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXG5cdGNvbnN0IG5hbWVJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0aWNvbjogJ3VzZXJBdmF0YXInLFxuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdVc2VybmFtZScpLFxuXHRcdHZhbGlkYXRlOiAnbm9uLWVtcHR5Jyxcblx0fSk7XG5cblx0Y29uc3QgcHdkSW5wdXQ6IE9PLnVpLlRleHRJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdGljb246ICdrZXknLFxuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdQYXNzd29yZCcpLFxuXHRcdHR5cGU6ICdwYXNzd29yZCcsXG5cdFx0dmFsaWRhdGU6ICdub24tZW1wdHknLFxuXHR9KTtcblxuXHRjb25zdCBhZ3JlZVRvc0NoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBpc0FncmVlVG9zLFxuXHR9KTtcblx0Y29uc3QgYWdyZWVUb3NMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGFncmVlVG9zQ2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0kgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnKSxcblx0fSk7XG5cblx0Y29uc3Qga2VlcExvZ2luQ2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCgpO1xuXHRjb25zdCBrZWVwTG9naW5MYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGtlZXBMb2dpbkNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGhlbHA6IGdldE1lc3NhZ2UoJ1NlbGVjdGVkT3JOb3QnKSxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnS2VlcCBtZSBsb2dnZWQgaW4nKSxcblx0fSk7XG5cblx0Y29uc3QgbGFiZWwgPSAoXG5cdFx0PGxhYmVsXG5cdFx0XHRjbGFzc05hbWU9e1snb28tdWktbGFiZWxXaWRnZXQnLCAnb28tdWktbGFiZWxFbGVtZW50LWxhYmVsJ119XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRmb250U2l6ZTogJzkwJScsXG5cdFx0XHRcdHRleHRBbGlnbjogJ2p1c3RpZnknLFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xuXHRjb25zdCAkbGFiZWwgPSAkKGxhYmVsKSBhcyBKUXVlcnk7XG5cblx0Y29uc3QgJGFncmVlVG9zOiBKUXVlcnkgPSAkbGFiZWwuY2xvbmUoKS5hcHBlbmQoYWdyZWVUb3NMYXlvdXQuJGVsZW1lbnQpO1xuXHRjb25zdCAkZm9yZ290UGFzc3dvcmQ6IEpRdWVyeSA9ICRsYWJlbFxuXHRcdC5jbG9uZSgpXG5cdFx0LmNzcygnZmxvYXQnLCAncmlnaHQnKVxuXHRcdC5hcHBlbmQoXG5cdFx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybCgnU3BlY2lhbDpQYXNzd29yZFJlc2V0Jyl9IHRpdGxlPXtnZXRNZXNzYWdlKCdSZXNldCBwYXNzd29yZCcpfT5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ0ZvcmdvdCBwYXNzd29yZD8nKX1cblx0XHRcdDwvYT5cblx0XHQpO1xuXHRjb25zdCAkaW5wdXRCb3g6IEpRdWVyeSA9ICRsYWJlbFxuXHRcdC5jbG9uZSgpXG5cdFx0LmNzcyh7XG5cdFx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdFx0J2ZvbnQtc2l6ZSc6ICdpbmhlcml0Jyxcblx0XHRcdHBhZGRpbmc6ICc2cHggMCcsXG5cdFx0fSlcblx0XHQuYXBwZW5kKG5hbWVJbnB1dC4kZWxlbWVudC5jc3MoJ21hcmdpbi1ib3R0b20nLCAnNnB4JyksIHB3ZElucHV0LiRlbGVtZW50KTtcblx0Y29uc3QgJHRvc0xhYmVsOiBKUXVlcnkgPSAkbGFiZWwuY2xvbmUoKS5odG1sKGdldE1lc3NhZ2UoJ2hlbHAgZm9yIEkgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnKSk7XG5cdGNvbnN0ICRyZW1lbWJlck1lOiBKUXVlcnkgPSAkbGFiZWwuY2xvbmUoKS5hcHBlbmQoa2VlcExvZ2luTGF5b3V0LiRlbGVtZW50LmNzcygnbWFyZ2luLXRvcCcsICc2cHgnKSk7XG5cblx0cmV0dXJuIHtcblx0XHQkYWdyZWVUb3MsXG5cdFx0JGZvcmdvdFBhc3N3b3JkLFxuXHRcdCRpbnB1dEJveCxcblx0XHQkcmVtZW1iZXJNZSxcblx0XHQkdG9zTGFiZWwsXG5cdFx0YWdyZWVUb3NDaGVja2JveCxcblx0XHRrZWVwTG9naW5DaGVja2JveCxcblx0XHRtZXNzYWdlRGlhbG9nLFxuXHRcdG5hbWVJbnB1dCxcblx0XHRwd2RJbnB1dCxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVFbGVtZW50c307XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcn0gZnJvbSAnLi9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBvb3VpUHJvbXB0ID0gYXN5bmMgKHJldHlwZVBhc3N3b3JkOiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdGNvbnN0IGNvZGVEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHRjb25zdCBjb2RlSW5wdXQ6IE9PLnVpLlRleHRJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdGljb246ICdrZXknLFxuXHRcdHBsYWNlaG9sZGVyOiByZXR5cGVQYXNzd29yZCA/IGdldE1lc3NhZ2UoJ05ldyBwYXNzd29yZCcpIDogZ2V0TWVzc2FnZSgnNi1kaWdpdCBudW1iZXInKSxcblx0XHR2YWxpZGF0ZTogJ2ludGVnZXInLFxuXHR9KTtcblxuXHRjb25zdCBjb2RlTGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5UZXh0SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNvZGVJbnB1dCwge1xuXHRcdGFsaWduOiAndG9wJyxcblx0XHRsYWJlbDogJChcblx0XHRcdDxiIGNsYXNzTmFtZT17Wydvby11aS1tZXNzYWdlRGlhbG9nLXRpdGxlJywgJ29vLXVpLXdpbmRvdy1oZWFkJ119PlxuXHRcdFx0XHR7cmV0eXBlUGFzc3dvcmQgPyBnZXRNZXNzYWdlKCdFbnRlciBwYXNzd29yZCcpIDogZ2V0TWVzc2FnZSgnRW50ZXIgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJyl9XG5cdFx0XHQ8L2I+XG5cdFx0KSxcblx0fSk7XG5cblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtjb2RlRGlhbG9nXSk7XG5cblx0Y29uc3QgaW5zdGFuY2U6IE9PLnVpLldpbmRvd0luc3RhbmNlID0gd2luZG93TWFuYWdlci5vcGVuV2luZG93KGNvZGVEaWFsb2csIHtcblx0XHRtZXNzYWdlOiBjb2RlTGF5b3V0LiRlbGVtZW50LFxuXHR9KTtcblxuXHRyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyKCk7XG5cblx0dm9pZCBpbnN0YW5jZS5vcGVuZWQudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0Y29kZUlucHV0Lm9uKCdlbnRlcicsICgpOiB2b2lkID0+IHtcblx0XHRcdCh3aW5kb3dNYW5hZ2VyLmdldEN1cnJlbnRXaW5kb3coKSBhcyBPTy51aS5XaW5kb3cpLmNsb3NlKHtcblx0XHRcdFx0YWN0aW9uOiAnYWNjZXB0Jyxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdGNvZGVJbnB1dC5mb2N1cygpO1xuXHR9KTtcblxuXHRjb25zdCBkYXRhOiB2b2lkID0gYXdhaXQgaW5zdGFuY2UuY2xvc2VkO1xuXHRjb25zdCBfZGF0YSA9IGRhdGEgYXMge2FjdGlvbjogc3RyaW5nfSB8IHZvaWQ7XG5cblx0cmV0dXJuIF9kYXRhPy5hY3Rpb24gPT09ICdhY2NlcHQnID8gY29kZUlucHV0LmdldFZhbHVlKCkgOiBudWxsO1xufTtcblxuZXhwb3J0IHtvb3VpUHJvbXB0fTtcbiIsICJpbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4uL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3QgcmVtb3ZlV2luZG93UmVzaXplSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcblx0JCh3aW5kb3cpLm9mZih7XG5cdFx0J29yaWVudGF0aW9uY2hhbmdlIHJlc2l6ZSc6ICh3aW5kb3dNYW5hZ2VyIGFzIHVua25vd24gYXMge29uV2luZG93UmVzaXplSGFuZGxlcjogKCkgPT4gdm9pZH0pXG5cdFx0XHQub25XaW5kb3dSZXNpemVIYW5kbGVyLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcn07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHF1ZXJ5TG9naW5Ub2tlbiA9IGFzeW5jIChcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZVxuKTogUHJvbWlzZTx7XG5cdGxvZ2luVG9rZW46IHN0cmluZztcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcbn0+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KHtcblx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdHZXR0aW5nIGxvZ2luIHRva2VuJyksXG5cdH0pO1xuXG5cdGNvbnN0IGxvZ2luVG9rZW46IHN0cmluZyA9IGF3YWl0IGFwaS5nZXRUb2tlbignbG9naW4nKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoe1xuXHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2luIHRva2VuIGdldHRlZCcpLFxuXHRcdGR1cmF0aW9uOiAtMSxcblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRsb2dpblRva2VuLFxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UsXG5cdH07XG59O1xuXG5leHBvcnQge3F1ZXJ5TG9naW5Ub2tlbn07XG4iLCAiaW1wb3J0IHtkZWxheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCByZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0YXdhaXQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0YXdhaXQgZGVsYXkoMyAqIDEwMDApO1xuXHRsb2NhdGlvbi5ocmVmID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6VXNlcmxvZ2luJyk7XG59O1xuXG5leHBvcnQge3JlZGlyZWN0T3JpZ2luTG9naW5QYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHNob3dFcnJvciA9IChlcnJvcjogdW5rbm93biwgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSk6IHZvaWQgPT4ge1xuXHRjb25zb2xlLmVycm9yKCdbQWpheExvZ2luXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnZXJyb3InXG5cdCk7XG59O1xuXG5leHBvcnQge3Nob3dFcnJvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSx1QkFBd0I7QUFDeEIsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxzQkFBMkNDLFFBQUEsaUJBQUE7O0FDRDNDLElBQU1DLGVBQThCQyxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7O0FDQTlELElBQUFDLG9CQUFrQ0wsUUFBQSxnQ0FBQTtBQUVsQyxJQUFNTSxjQUFjQSxDQUNuQkMsVUFDQUMsa0JBQ1U7QUFDVkQsV0FBU0UsR0FDUixVQUFBLEdBQ0FKLGtCQUFBSyxxQkFBcUJDLFdBQW1DO0FBQ3ZESCxrQkFBY0csS0FBSztFQUNwQixDQUFDLENBQ0Y7QUFDQUosV0FBU0UsR0FBRyxXQUFXRCxhQUFhO0FBQ3JDOztBQ1pBLElBQUFJLHFCQUF3QlosUUFBQSxpQkFBQTtBQWF4QixJQUFNYSxPQUFBLEdBQWNELG1CQUFBRSxXQUFBLGFBQUFDLE9BQStCakIsT0FBTyxDQUFFOztBQ2I1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LE1BQU07RUFDUCxDQUFDO0FBQ0Q5RCw0QkFBMEI7QUFDM0I7O0FKalBBLE1BQUEsR0FBSzdILG9CQUFBNEwsU0FBUSxFQUFFcEQsS0FBSyxTQUFTcUQsY0FBY0MsT0FBc0M7QUFDaEYsTUFBSTVMLGNBQWM7QUFDakI7RUFDRDtBQUVBLFFBQU02TCxnQkFBMkNELE1BQU1FLEtBQWdDbE0sb0JBQW9CO0FBQzNHLE1BQUksQ0FBQ2lNLGNBQWNFLFFBQVE7QUFDMUI7RUFDRDtBQUVBckosZ0JBQWNwQyxTQUFTMEwsU0FBU0osS0FBSztBQUVyQyxRQUFNSyx1QkFBeUM7SUFDOUMxSCxXQUFXQSxNQUFNO0lBQUM7RUFDbkI7QUFFQSxRQUFNaEUsZ0JBQWlCRyxXQUF5RDtBQUMvRSxRQUFJLEVBQUEsR0FBQ1osb0JBQUFvTSxxQkFBb0J4TCxLQUFLLEdBQUc7QUFDaEM7SUFDRDtBQUVBQSxVQUFNeUwsZUFBZTtBQUNyQnhDLGNBQVVzQyxvQkFBb0I7RUFDL0I7QUFDQTVMLGNBQVl3TCxlQUFldEwsYUFBYTtBQUN6QyxDQUFDOyIsCiAgIm5hbWVzIjogWyJsb2dpbkVsZW1lbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MTMiLCAicmVxdWlyZSIsICJXR19VU0VSX05BTUUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhZGRMaXN0ZW5lciIsICIkZWxlbWVudCIsICJldmVudExpc3RlbmVyIiwgIm9uIiwgImZpbHRlckFsdGVyZWRDbGlja3MiLCAiZXZlbnQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MTEiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDYW5jZWwiLCAiemgiLCAiTG9naW4iLCAiUGFzc3dvcmQiLCAiVXNlcm5hbWUiLCAiQWdyZWVkT3JOb3QiLCAiRG91YmxlQ2hlY2tBZ3JlZWRPck5vdCIsICJFbXB0eTJGQSIsICJFbXB0eVBhc3N3b3JkIiwgIkVtcHR5VXNlcm5hbWVPclBhc3N3b3JkIiwgIlNlbGVjdGVkT3JOb3QiLCAiVG9vRnJlcXVlbnQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImluaXRXaW5kb3dNYW5hZ2VyIiwgIk9PIiwgInVpIiwgIldpbmRvd01hbmFnZXIiLCAid2luZG93TWFuYWdlciIsICJvb3VpQ29uZmlybSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIm9wdGlvbnMiLCAibWVzc2FnZURpYWxvZyIsICJNZXNzYWdlRGlhbG9nIiwgImFkZFdpbmRvd3MiLCAiaW5zdGFuY2UiLCAib3BlbldpbmRvdyIsICJkYXRhIiwgImNsb3NlZCIsICJfZGF0YSIsICJhY3Rpb24iLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJjaGVja1ZhbGlkIiwgIl9yZWYyIiwgImFncmVlVG9zQ2hlY2tib3giLCAibmFtZUlucHV0IiwgInB3ZElucHV0IiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaXNBZ3JlZVRvcyIsICJpc1NlbGVjdGVkIiwgImlzRmlsbCIsICJnZXRWYWx1ZSIsICJpbmNsdWRlcyIsICJoaWRlVG9hc3QiLCAiY2xlYXJXaW5kb3dzIiwgIm1lc3NhZ2UiLCAiJCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaW5uZXJIVE1MIiwgImFjdGlvbnMiLCAibGFiZWwiLCAiZmxhZ3MiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJpc1ZhbGlkIiwgIl94MiIsICJfeDMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImdlbmVyYXRlRWxlbWVudHMiLCAiVGV4dElucHV0V2lkZ2V0IiwgImljb24iLCAicGxhY2Vob2xkZXIiLCAidmFsaWRhdGUiLCAidHlwZSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgImFncmVlVG9zTGF5b3V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImtlZXBMb2dpbkNoZWNrYm94IiwgImtlZXBMb2dpbkxheW91dCIsICJoZWxwIiwgImNsYXNzTmFtZSIsICJzdHlsZSIsICJmb250U2l6ZSIsICJ0ZXh0QWxpZ24iLCAiJGxhYmVsIiwgIiRhZ3JlZVRvcyIsICJjbG9uZSIsICJhcHBlbmQiLCAiJGZvcmdvdFBhc3N3b3JkIiwgImNzcyIsICJocmVmIiwgInV0aWwiLCAiZ2V0VXJsIiwgInRpdGxlIiwgIiRpbnB1dEJveCIsICJkaXNwbGF5IiwgInBhZGRpbmciLCAiJHRvc0xhYmVsIiwgImh0bWwiLCAiJHJlbWVtYmVyTWUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ3IiwgInJlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIiLCAid2luZG93IiwgIm9mZiIsICJvbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCAib291aVByb21wdCIsICJfcmVmMyIsICJyZXR5cGVQYXNzd29yZCIsICJjb2RlRGlhbG9nIiwgImNvZGVJbnB1dCIsICJjb2RlTGF5b3V0IiwgIm9wZW5lZCIsICJ0aGVuIiwgImdldEN1cnJlbnRXaW5kb3ciLCAiY2xvc2UiLCAiZm9jdXMiLCAiX3g0IiwgImltcG9ydF9leHRfZ2FkZ2V0OCIsICJxdWVyeUxvZ2luVG9rZW4iLCAiX3JlZjQiLCAibG9naW5Ub2tlbiIsICJnZXRUb2tlbiIsICJfeDUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ5IiwgInJlZGlyZWN0T3JpZ2luTG9naW5QYWdlIiwgIl9yZWY1IiwgImRlbGF5IiwgImxvY2F0aW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MTAiLCAic2hvd0Vycm9yIiwgImVycm9yIiwgImNvbnNvbGUiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMiIsICJhamF4TG9naW4iLCAibG9naW4iLCAiX3JlZjYiLCAibG9naW5Db250aW51ZSIsICJfcmVzcG9uc2UkY2xpZW50bG9naW4iLCAiX3Jlc3BvbnNlJGNsaWVudGxvZ2luMiIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibG9naW50b2tlbiIsICJsb2dpbnJldHVybnVybCIsICJ1c2VybmFtZSIsICJwYXNzd29yZCIsICJyZW1lbWJlck1lIiwgImxvZ2luY29udGludWUiLCAidmFsdWUiLCAicmV0eXBlIiwgIk9BVEhUb2tlbiIsICJyZXNwb25zZSIsICJwb3N0IiwgInN0YXR1cyIsICJyZWxvYWQiLCAibWVzc2FnZWNvZGUiLCAicmVwbGFjZSIsICJjaGVjayIsICJfcmVmNyIsICJsYXN0SXNBZ3JlZVRvcyIsICJsYXN0VG9hc3RpZnlJbnN0YW5jZSIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgIlByb2Nlc3MiLCAic2l6ZSIsICJnZXRCb2R5IiwgImluaXRBdXRvTG9naW4iLCAiJGJvZHkiLCAiJGxvZ2luRWxlbWVudCIsICJmaW5kIiwgImxlbmd0aCIsICJhcHBlbmRUbyIsICJmYWtlVG9hc3RpZnlJbnN0YW5jZSIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgInByZXZlbnREZWZhdWx0Il0KfQo=

})();

/* </nowiki> */
