/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/AjaxLogin}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
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
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
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
var configKey = "gadget-AjaxLogin__Initialized";
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
var import_ext_gadget11 = __toESM(require("ext.gadget.JSX"), 1);
//! src/AjaxLogin/modules/util/checkValid.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.JSX"), 1);
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
    "Invalid username or password": (0, import_ext_gadget3.localize)({
      en: "Invalid username or password",
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
    "Login token got": (0, import_ext_gadget3.localize)({
      en: "Login token got",
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
      en: "Keep logged in for 6 months if selected; otherwise until the browser closes.",
      ja: "チェックを入れるとログイン状態が6ヶ月間保持され、入れない場合はブラウザを閉じるまで保持されます。",
      "zh-hans": "勾选则保持登录状态6个月，否则将在浏览器关闭时退出登录。",
      "zh-hant": "勾選则保持登入狀態6個月，否則將在瀏覽器關閉時登出。"
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
      isValid,
      toastifyInstance
    };
  });
  return function checkValid2(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/AjaxLogin/modules/util/generateElements.tsx
var import_ext_gadget6 = __toESM(require("ext.gadget.JSX"), 1);
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
var import_ext_gadget7 = __toESM(require("ext.gadget.JSX"), 1);
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
      text: getMessage("Login token got"),
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
  const _login = /* @__PURE__ */ function() {
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
              void _login({
                retypePassword: true
              });
            } else {
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("Empty2FA"),
                duration: -1
              }, "warning");
              void _login({
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
              void _login({
                loginContinue: true
              });
              break;
            case "oathauth-login-failed":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("Invalid 2FA verification code"),
                duration: -1
              }, "warning");
              void _login({
                loginContinue: true
              });
              break;
            case "resetpass-temp-emailed":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("New password is required"),
                duration: -1
              }, "warning");
              void _login({
                retypePassword: true
              });
              break;
            case "wrongpassword":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("Invalid username or password"),
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
    return function login() {
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
        void _login();
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
  if (mw.config.get(configKey)) {
    return;
  }
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
  mw.config.set(configKey, true);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FqYXhMb2dpbi9vcHRpb25zLmpzb24iLCAic3JjL0FqYXhMb2dpbi9BamF4TG9naW4udHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9hcGkudHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL2NoZWNrVmFsaWQudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlci50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpQ29uZmlybS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVsZW1lbnRzLnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpUHJvbXB0LnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL3F1ZXJ5TG9naW5Ub2tlbi50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZWRpcmVjdE9yaWdpbkxvZ2luUGFnZS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJsb2dpbkVsZW1lbnRTZWxlY3RvclwiOiBcImE6aGFzKC5hamF4bG9naW4tbW91bnQtcG9pbnQpLCNwdC1sb2dpbj5hLC52ZWN0b3ItdXNlci1tZW51LWxvZ2luPmEsI3VzZXItdG9vbHM+YVtocmVmKj1cXFwiU3BlY2lhbFxcXCJdLC5tYWlucGFnZS10b3AtbWVudT5saTpudGgtY2hpbGQoMikgYVwiLFxuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1BamF4TG9naW5fX0luaXRpYWxpemVkXCIsXG5cdFwidmVyc2lvblwiOiBcIjQuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2NoZWNrQTExeUNvbmZpcm1LZXksIGdldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvYWRkTGlzdGVuZXInO1xuaW1wb3J0IHthamF4TG9naW59IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBpbml0QXV0b0xvZ2luKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dVc2VyTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRsb2dpbkVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PihPUFRJT05TLmxvZ2luRWxlbWVudFNlbGVjdG9yKTtcblx0aWYgKCEkbG9naW5FbGVtZW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuYXBwZW5kVG8oJGJvZHkpO1xuXG5cdGNvbnN0IGZha2VUb2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdH07XG5cblx0Y29uc3QgZXZlbnRMaXN0ZW5lciA9IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KTogdm9pZCA9PiB7XG5cdFx0aWYgKCFjaGVja0ExMXlDb25maXJtS2V5KGV2ZW50KSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0YWpheExvZ2luKGZha2VUb2FzdGlmeUluc3RhbmNlKTtcblx0fTtcblx0YWRkTGlzdGVuZXIoJGxvZ2luRWxlbWVudCwgZXZlbnRMaXN0ZW5lcik7XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xufSk7XG4iLCAiaW1wb3J0IHtmaWx0ZXJBbHRlcmVkQ2xpY2tzfSBmcm9tICdleHQuZ2FkZ2V0LkZpbHRlckFsdGVyZWRDbGlja3MnO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9IChcblx0JGVsZW1lbnQ6IEpRdWVyeSxcblx0ZXZlbnRMaXN0ZW5lcjogKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpID0+IHZvaWRcbik6IHZvaWQgPT4ge1xuXHQkZWxlbWVudC5vbignY2xpY2snLCBmaWx0ZXJBbHRlcmVkQ2xpY2tzKGV2ZW50TGlzdGVuZXIpKTtcblx0JGVsZW1lbnQub24oJ2tleWRvd24nLCBldmVudExpc3RlbmVyKTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG50eXBlIENsaWVudExvZ2luUGFyYW1zID0gQXBpQ2xpZW50TG9naW5QYXJhbXMgJiB7XG5cdHVzZXJuYW1lPzogc3RyaW5nO1xuXHRwYXNzd29yZD86IHN0cmluZztcblx0cmVtZW1iZXJNZT86IGJvb2xlYW47XG5cdHJldHlwZT86IHN0cmluZztcblx0T0FUSFRva2VuPzogc3RyaW5nO1xufTtcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEFqYXhMb2dpbi8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHt0eXBlIENsaWVudExvZ2luUGFyYW1zLCBhcGl9O1xuIiwgImltcG9ydCB7dHlwZSBDbGllbnRMb2dpblBhcmFtcywgYXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtjaGVja1ZhbGlkfSBmcm9tICcuL3V0aWwvY2hlY2tWYWxpZCc7XG5pbXBvcnQge2dlbmVyYXRlRWxlbWVudHN9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUVsZW1lbnRzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7b291aVByb21wdH0gZnJvbSAnLi91dGlsL29vdWlQcm9tcHQnO1xuaW1wb3J0IHtxdWVyeUxvZ2luVG9rZW59IGZyb20gJy4vdXRpbC9xdWVyeUxvZ2luVG9rZW4nO1xuaW1wb3J0IHtyZWRpcmVjdE9yaWdpbkxvZ2luUGFnZX0gZnJvbSAnLi91dGlsL3JlZGlyZWN0T3JpZ2luTG9naW5QYWdlJztcbmltcG9ydCB7cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcn0gZnJvbSAnLi91dGlsL3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXInO1xuaW1wb3J0IHtzaG93RXJyb3J9IGZyb20gJy4vdXRpbC9zaG93RXJyb3InO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBhamF4TG9naW4gPSAodG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSwgaXNBZ3JlZVRvczogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCA9PiB7XG5cdGNvbnN0IHtcblx0XHQkYWdyZWVUb3MsXG5cdFx0JGZvcmdvdFBhc3N3b3JkLFxuXHRcdCRpbnB1dEJveCxcblx0XHQkcmVtZW1iZXJNZSxcblx0XHQkdG9zTGFiZWwsXG5cdFx0YWdyZWVUb3NDaGVja2JveCxcblx0XHRrZWVwTG9naW5DaGVja2JveCxcblx0XHRtZXNzYWdlRGlhbG9nLFxuXHRcdG5hbWVJbnB1dCxcblx0XHRwd2RJbnB1dCxcblx0fSA9IGdlbmVyYXRlRWxlbWVudHMoaXNBZ3JlZVRvcyk7XG5cblx0bGV0IGxvZ2luVG9rZW46IHN0cmluZyA9ICcnO1xuXHRjb25zdCBsb2dpbiA9IGFzeW5jICh7bG9naW5Db250aW51ZSA9IGZhbHNlLCByZXR5cGVQYXNzd29yZCA9IGZhbHNlfSA9IHt9KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghbG9naW5Db250aW51ZSkge1xuXHRcdFx0XHQoe2xvZ2luVG9rZW4sIHRvYXN0aWZ5SW5zdGFuY2V9ID0gYXdhaXQgcXVlcnlMb2dpblRva2VuKHRvYXN0aWZ5SW5zdGFuY2UpKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGFyYW1zOiBDbGllbnRMb2dpblBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnY2xpZW50bG9naW4nLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRsb2dpbnRva2VuOiBsb2dpblRva2VuLFxuXHRcdFx0XHRsb2dpbnJldHVybnVybDogbG9jYXRpb24uaHJlZixcblx0XHRcdFx0dXNlcm5hbWU6IG5hbWVJbnB1dC5nZXRWYWx1ZSgpLFxuXHRcdFx0XHRwYXNzd29yZDogcHdkSW5wdXQuZ2V0VmFsdWUoKSxcblx0XHRcdH07XG5cdFx0XHRpZiAoa2VlcExvZ2luQ2hlY2tib3guaXNTZWxlY3RlZCgpKSB7XG5cdFx0XHRcdHBhcmFtcy5yZW1lbWJlck1lID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChsb2dpbkNvbnRpbnVlIHx8IHJldHlwZVBhc3N3b3JkKSB7XG5cdFx0XHRcdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMubG9naW5yZXR1cm51cmw7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMudXNlcm5hbWU7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMucGFzc3dvcmQ7XG5cdFx0XHRcdHBhcmFtcy5sb2dpbmNvbnRpbnVlID0gdHJ1ZTtcblxuXHRcdFx0XHRjb25zdCB2YWx1ZTogc3RyaW5nIHwgbnVsbCA9IGF3YWl0IG9vdWlQcm9tcHQocmV0eXBlUGFzc3dvcmQpO1xuXG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2luIGNhbmNlbGxlZCcpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCdpbmZvJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09PSAnJykge1xuXHRcdFx0XHRcdGlmIChyZXR5cGVQYXNzd29yZCkge1xuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRW1wdHlQYXNzd29yZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdHJldHlwZVBhc3N3b3JkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0VtcHR5MkZBJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR2b2lkIGxvZ2luKHtcblx0XHRcdFx0XHRcdFx0bG9naW5Db250aW51ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXR5cGVQYXNzd29yZCkge1xuXHRcdFx0XHRcdHBhcmFtcy5wYXNzd29yZCA9IHZhbHVlO1xuXHRcdFx0XHRcdHBhcmFtcy5yZXR5cGUgPSB2YWx1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwYXJhbXMuT0FUSFRva2VuID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2dpbmcgaW4nKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2luZm8nXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IChhd2FpdCBhcGkucG9zdChwYXJhbXMpKSBhcyB7XG5cdFx0XHRcdGNsaWVudGxvZ2luOiB7XG5cdFx0XHRcdFx0c3RhdHVzPzogc3RyaW5nO1xuXHRcdFx0XHRcdG1lc3NhZ2Vjb2RlPzogc3RyaW5nO1xuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblxuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblxuXHRcdFx0aWYgKHJlc3BvbnNlWydjbGllbnRsb2dpbiddPy5zdGF0dXMgPT09ICdQQVNTJykge1xuXHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdMb2dpbiBzdWNjZWVkJyksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQnc3VjY2Vzcydcblx0XHRcdFx0KTtcblx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlWydjbGllbnRsb2dpbiddPy5tZXNzYWdlY29kZSkge1xuXHRcdFx0XHRjb25zdCB7bWVzc2FnZWNvZGV9ID0gcmVzcG9uc2VbJ2NsaWVudGxvZ2luJ107XG5cdFx0XHRcdHN3aXRjaCAobWVzc2FnZWNvZGUpIHtcblx0XHRcdFx0XHRjYXNlICdsb2dpbi10aHJvdHRsZWQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnVG9vRnJlcXVlbnQnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCdlcnJvcidcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdvYXRoYXV0aC1hdXRoLXVpJzpcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRsb2dpbkNvbnRpbnVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdvYXRoYXV0aC1sb2dpbi1mYWlsZWQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnSW52YWxpZCAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRsb2dpbkNvbnRpbnVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdyZXNldHBhc3MtdGVtcC1lbWFpbGVkJzpcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldyBwYXNzd29yZCBpcyByZXF1aXJlZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdHJldHlwZVBhc3N3b3JkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd3cm9uZ3Bhc3N3b3JkJzpcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0XHRcdFx0XHRhamF4TG9naW4odG9hc3RpZnlJbnN0YW5jZSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdVbmV4cGVjdGVkIEFQSSByZXNwb25zZScpLnJlcGxhY2UoJyQxJywgbWVzc2FnZWNvZGUpLFxuXHRcdFx0XHRcdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J2Vycm9yJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgcmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRzaG93RXJyb3IoZXJyb3IsIHRvYXN0aWZ5SW5zdGFuY2UpO1xuXHRcdFx0dm9pZCByZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSgpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBjaGVjayA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRpc1ZhbGlkLFxuXHRcdFx0aXNBZ3JlZVRvczogbGFzdElzQWdyZWVUb3MsXG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlOiBsYXN0VG9hc3RpZnlJbnN0YW5jZSxcblx0XHR9ID0gYXdhaXQgY2hlY2tWYWxpZChbYWdyZWVUb3NDaGVja2JveCwgbmFtZUlucHV0LCBwd2RJbnB1dF0sIHRvYXN0aWZ5SW5zdGFuY2UpO1xuXG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IGxhc3RUb2FzdGlmeUluc3RhbmNlO1xuXG5cdFx0aWYgKGlzVmFsaWQpIHtcblx0XHRcdHZvaWQgbG9naW4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YWpheExvZ2luKHRvYXN0aWZ5SW5zdGFuY2UsIGxhc3RJc0FncmVlVG9zKTtcblx0XHR9XG5cdH07XG5cblx0cHdkSW5wdXQub24oJ2VudGVyJywgKCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgY2hlY2soKTtcblx0fSk7XG5cdG1lc3NhZ2VEaWFsb2cuZ2V0QWN0aW9uUHJvY2VzcyA9IChhY3Rpb24pOiBPTy51aS5Qcm9jZXNzID0+XG5cdFx0bmV3IE9PLnVpLlByb2Nlc3MoKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ2xvZ2luJykge1xuXHRcdFx0XHR2b2lkIGNoZWNrKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHR2b2lkIHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFttZXNzYWdlRGlhbG9nXSk7XG5cdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIHtcblx0XHRhY3Rpb25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2xvZ2luJyxcblx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHRsYWJlbDogJCg8Yj57Z2V0TWVzc2FnZSgnTG9naW4nKX08L2I+KSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2NhbmNlbCcsXG5cdFx0XHRcdGZsYWdzOiBbJ3NhZmUnLCAnY2xvc2UnXSxcblx0XHRcdFx0bGFiZWw6ICQoPGI+e2dldE1lc3NhZ2UoJ0NhbmNlbCcpfTwvYj4pLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdG1lc3NhZ2U6ICQoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9vLXVpLXdpbmRvdy1mb290XCI+e1skaW5wdXRCb3gsICRmb3Jnb3RQYXNzd29yZCwgJHJlbWVtYmVyTWUsICRhZ3JlZVRvcywgJHRvc0xhYmVsXX08L2Rpdj5cblx0XHQpLFxuXHRcdHRpdGxlOiAkKDxiIGNsYXNzTmFtZT1cIm9vLXVpLXdpbmRvdy1oZWFkXCI+e2dldE1lc3NhZ2UoJ0xvZ2luJyl9PC9iPiksXG5cdFx0c2l6ZTogJ3NtYWxsJyxcblx0fSk7XG5cdHJlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIoKTtcbn07XG5cbmV4cG9ydCB7YWpheExvZ2lufTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7b291aUNvbmZpcm19IGZyb20gJy4vb291aUNvbmZpcm0nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4uL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3QgY2hlY2tWYWxpZCA9IGFzeW5jIChcblx0W2FncmVlVG9zQ2hlY2tib3gsIG5hbWVJbnB1dCwgcHdkSW5wdXRdOiBbT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCwgT08udWkuVGV4dElucHV0V2lkZ2V0LCBPTy51aS5UZXh0SW5wdXRXaWRnZXRdLFxuXHR0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlXG4pOiBQcm9taXNlPHtcblx0aXNBZ3JlZVRvczogYm9vbGVhbjtcblx0aXNWYWxpZDogYm9vbGVhbjtcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcbn0+ID0+IHtcblx0bGV0IGlzQWdyZWVUb3M6IGJvb2xlYW4gPSBhZ3JlZVRvc0NoZWNrYm94LmlzU2VsZWN0ZWQoKTtcblx0Y29uc3QgaXNGaWxsOiBib29sZWFuID0gIVtuYW1lSW5wdXQuZ2V0VmFsdWUoKS50cmltKCksIHB3ZElucHV0LmdldFZhbHVlKCkudHJpbSgpXS5pbmNsdWRlcygnJyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0YXdhaXQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblxuXHRpZiAoIWlzQWdyZWVUb3MpIHtcblx0XHRpc0FncmVlVG9zID0gYXdhaXQgb291aUNvbmZpcm0oe1xuXHRcdFx0bWVzc2FnZTogJCg8c3BhbiBpbm5lckhUTUw9e2dldE1lc3NhZ2UoJ0RvdWJsZUNoZWNrQWdyZWVkT3JOb3QnKX0gLz4pIGFzIEpRdWVyeSxcblx0XHRcdGFjdGlvbnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxhYmVsOiAkKDxiPntnZXRNZXNzYWdlKCdDYW5jZWwnKX08L2I+KSxcblx0XHRcdFx0XHRhY3Rpb246ICdjYW5jZWwnLFxuXHRcdFx0XHRcdGZsYWdzOiBbJ3NhZmUnLCAnY2xvc2UnXSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxhYmVsOiAkKDxiPntnZXRNZXNzYWdlKCdJIGFncmVlJyl9PC9iPiksXG5cdFx0XHRcdFx0YWN0aW9uOiAnYWNjZXB0Jyxcblx0XHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0pO1xuXG5cdFx0aWYgKCFpc0FncmVlVG9zKSB7XG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdBZ3JlZWRPck5vdCcpLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2luZm8nXG5cdFx0XHQpO1xuXHRcdH1cblx0fSBlbHNlIGlmICghaXNGaWxsKSB7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdFbXB0eVVzZXJuYW1lT3JQYXNzd29yZCcpLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IGlzVmFsaWQ6IGJvb2xlYW4gPSBpc0FncmVlVG9zICYmIGlzRmlsbDtcblxuXHRyZXR1cm4ge1xuXHRcdGlzQWdyZWVUb3MsXG5cdFx0aXNWYWxpZCxcblx0XHR0b2FzdGlmeUluc3RhbmNlLFxuXHR9O1xufTtcblxuZXhwb3J0IHtjaGVja1ZhbGlkfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0JzYtZGlnaXQgbnVtYmVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc2LWRpZ2l0IG51bWJlcicsXG5cdFx0XHRqYTogJzbmoYHjga7mlbDlrZcnLFxuXHRcdFx0J3poLWhhbnMnOiAnNuS9jeaVsOWtlycsXG5cdFx0XHQnemgtaGFudCc6ICc25L2N5pW45a2XJyxcblx0XHR9KSxcblx0XHRDYW5jZWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2FuY2VsJyxcblx0XHRcdGphOiAn44Kt44Oj44Oz44K744OrJyxcblx0XHRcdHpoOiAn5Y+W5raIJyxcblx0XHR9KSxcblx0XHQnRW50ZXIgcGFzc3dvcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VudGVyIHBhc3N3b3JkJyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+i+k+WFpeWvhueggScsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vovLjlhaXlr4bnorwnLFxuXHRcdH0pLFxuXHRcdCdFbnRlciAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzJGQSB2ZXJpZmljYXRpb24gY29kZScsXG5cdFx0XHRqYTogJzJGQeiqjeiovOOCs+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICfor7fovpPlhaUyRkHpqozor4HnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6Ly45YWlMkZB6amX6K2J56K8Jyxcblx0XHR9KSxcblx0XHQnRm9yZ290IHBhc3N3b3JkPyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRm9yZ290IHBhc3N3b3JkPycsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODieOCkuOBiuW/mOOCjOOBp+OBmeOBi++8nycsXG5cdFx0XHQnemgtaGFucyc6ICflv5jorrDlr4bnoIHvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5b+Y6KiY5a+G56K877yfJyxcblx0XHR9KSxcblx0XHQnR2V0dGluZyBsb2dpbiB0b2tlbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnR2V0dGluZyBsb2dpbiB0b2tlbicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+ODiOODvOOCr+ODs+OCkuWPluW+l+OBl+OBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjojrflj5bnmbvlvZXku6TniYwnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo542y5Y+W55m75YWl5qyK5p2WJyxcblx0XHR9KSxcblx0XHQnaGVscCBmb3IgSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2hlbiB5b3UgbG9naW4sIGl0IG1lYW5zIHRoYXQgeW91IGhhdmUgY2FyZWZ1bGx5IHJlYWQsIGZ1bGx5IHVuZGVyc3Rvb2QgYW5kIGFncmVlZCB0byBjb21wbHkgd2l0aCBvdXIgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCJUZXJtcyBvZiBTZXJ2aWNlXCI+VGVybXMgb2YgU2VydmljZTwvYT4sIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFBcIiB0aXRsZT1cIlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5XCI+UGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3k8L2E+IGFuZCA8ZW0+dGhlIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIkNvbW1vbiBQcm9ncmFtXCI+Q29tbW9uIFByb2dyYW08L2E+PC9lbT4uJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44KS44GZ44KL44Go44CB44GC44Gq44Gf44Gv5pys44K144Kk44OI44Gu44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCLliKnnlKjopo/ntIRcIj7liKnnlKjopo/ntIQ8L2E+44CP44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUFwiIHRpdGxlPVwi5YCL5Lq65oOF5aCx5L+d6K235pa56YedXCI+5YCL5Lq65oOF5aCx5L+d6K235pa56YedPC9hPuOAj+OAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIuWFseWQjOe2semgmFwiPuWFseWQjOe2semgmDwvYT7jgI/jgpLljYHliIbjgavnkIbop6PjgZfjgIHlkIzmhI/jgZfjgZ/jgZPjgajjgavjgarjgorjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn55m75b2V5pe277yM5Y2z5Luj6KGo5oKo5bey5LuU57uG6ZiF6K+744CB5YWF5YiG5LqG6Kej5bm25ZCM5oSP6YG15a6I5pys572R56uZ55qE44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCLnlKjmiLfljY/orq5cIj7nlKjmiLfljY/orq48L2E+44CL44CB44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUFwiIHRpdGxlPVwi5Liq5Lq65L+h5oGv5L+d5oqk5pa56ZKIXCI+5Liq5Lq65L+h5oGv5L+d5oqk5pa56ZKIPC9hPuOAi+WPiuOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIuWFseWQjOe6sumihlwiPuWFseWQjOe6sumihjwvYT7jgIvjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn55m76YyE5pmC77yM5Y2z5Luj6KGo5oKo5bey5LuU57Sw6Zax6K6A44CB5YWF5YiG5LqG6Kej5Lim5ZCM5oSP6YG15a6I5pys57ay56uZ55qE44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCLnlKjmiLbljZTorbBcIj7nlKjmiLbljZTorbA8L2E+44CL44CB44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUFwiIHRpdGxlPVwi5YCL5Lq65L+h5oGv5L+d6K235pa56YedXCI+5YCL5Lq65L+h5oGv5L+d6K235pa56YedPC9hPuOAi+WPiuOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIuWFseWQjOe2semgmFwiPuWFseWQjOe2semgmDwvYT7jgIvjgIInLFxuXHRcdH0pLFxuXHRcdCdJIGFncmVlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJIGFncmVlJyxcblx0XHRcdGphOiAn5ZCM5oSP44GZ44KLJyxcblx0XHRcdHpoOiAn5oiR5ZCM5oSPJyxcblx0XHR9KSxcblx0XHQnSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcycsXG5cdFx0XHRqYTogJ+mWoumAo+OBmeOCi+imj+e0hOOCkuiqreOBv+OAgeWQjOaEjycsXG5cdFx0XHQnemgtaGFucyc6ICfmiJHlt7LpmIXor7vlubblkIzmhI/nm7jlhbPmnaHmrL4nLFxuXHRcdFx0J3poLWhhbnQnOiAn5oiR5bey6Zay6K6A5Lim5ZCM5oSP55u46Zec5qKd5qy+Jyxcblx0XHR9KSxcblx0XHQnSW52YWxpZCAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludmFsaWQgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJyxcblx0XHRcdGphOiAnMkZB6KqN6Ki844Kz44O844OJ44GM6ZaT6YGV44Gj44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJzJGQemqjOivgeeggemUmeivrycsXG5cdFx0XHQnemgtaGFudCc6ICcyRkHpqZforYnnorzpjK/oqqQnLFxuXHRcdH0pLFxuXHRcdCdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkJyxcblx0XHRcdGphOiAn5Yip55So6ICF5ZCN44G+44Gf44Gv44OR44K544Ov44O844OJ44GM6ZaT6YGV44Gj44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1jbic6ICfnlKjmiLflkI3miJblr4bnoIHplJnor68nLFxuXHRcdFx0J3poLWhrJzogJ+eUqOaItuWQjeeoseaIluWvhueivOmMr+iqpCcsXG5cdFx0XHQnemgtdHcnOiAn5L2/55So6ICF5ZCN56ix5oiW5a+G56K86Yyv6KqkJyxcblx0XHR9KSxcblx0XHQnS2VlcCBtZSBsb2dnZWQgaW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0tlZXAgbWUgbG9nZ2VkIGluJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz54q25oWL44KS5L+d5oyBJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iusOS9j+aIkeeahOeZu+W9leeKtuaAgScsXG5cdFx0XHQnemgtaGFudCc6ICfoqJjkvY/miJHnmoTnmbvlhaXni4DmhYsnLFxuXHRcdH0pLFxuXHRcdCdMb2dnaW5nIGluJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dnaW5nIGluJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44GX44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOeZu+W9lScsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjnmbvlhaUnLFxuXHRcdH0pLFxuXHRcdExvZ2luOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2luJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44OzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eZu+W9lScsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlhaUnLFxuXHRcdH0pLFxuXHRcdCdMb2dpbiBjYW5jZWxsZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2luIGNhbmNlbGxlZCcsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHQnemgtaGFucyc6ICfnmbvlvZXlj5bmtognLFxuXHRcdFx0J3poLWhhbnQnOiAn55m75YWl5Y+W5raIJyxcblx0XHR9KSxcblx0XHQnTG9naW4gc3VjY2VlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4gc3VjY2VlZCcsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+OBq+aIkOWKn+OBl+OBvuOBl+OBnycsXG5cdFx0XHQnemgtaGFucyc6ICfnmbvlvZXmiJDlip8nLFxuXHRcdFx0J3poLWhhbnQnOiAn55m75YWl5oiQ5YqfJyxcblx0XHR9KSxcblx0XHQnTG9naW4gdG9rZW4gZ290JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbiB0b2tlbiBnb3QnLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7Pjg4jjg7zjgq/jg7Pjga7lj5blvpfjgavmiJDlip/jgZfjgb7jgZfjgZ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn6I635Y+W55m75b2V5Luk54mM5oiQ5YqfJyxcblx0XHRcdCd6aC1oYW50JzogJ+eNsuWPlueZu+WFpeasiuadluaIkOWKnycsXG5cdFx0fSksXG5cdFx0J05ldyBwYXNzd29yZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV3IHBhc3N3b3JkJyxcblx0XHRcdGphOiAn5paw44GX44GE44OR44K544Ov44O844OJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aWsOWvhueggScsXG5cdFx0XHQnemgtaGFudCc6ICfmlrDlr4bnorwnLFxuXHRcdH0pLFxuXHRcdCdOZXcgcGFzc3dvcmQgaXMgcmVxdWlyZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldyBwYXNzd29yZCBpcyByZXF1aXJlZCcsXG5cdFx0XHRqYTogJ+aWsOOBl+OBhOODkeOCueODr+ODvOODieOCkuioreWumuOBl+OBpuOBj+OBoOOBleOBhCcsXG5cdFx0XHQnemgtaGFucyc6ICfpnIDopoHorr7nva7mlrDlr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6ZyA6KaB6Kit572u5paw5a+G56K8Jyxcblx0XHR9KSxcblx0XHRQYXNzd29yZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXNzd29yZCcsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICflr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+G56K8Jyxcblx0XHR9KSxcblx0XHQnUmVzZXQgcGFzc3dvcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Jlc2V0IHBhc3N3b3JkJyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJ44KS44Oq44K744OD44OIJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mHjee9ruWvhueggScsXG5cdFx0XHQnemgtaGFudCc6ICfph43mlrDoqK3lrprlr4bnorwnLFxuXHRcdH0pLFxuXHRcdFVzZXJuYW1lOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1VzZXJuYW1lJyxcblx0XHRcdGphOiAn5Yip55So6ICF5ZCNJyxcblx0XHRcdCd6aC1jbic6ICfnlKjmiLflkI0nLFxuXHRcdFx0J3poLWhrJzogJ+eUqOaItuWQjeeosScsXG5cdFx0XHQnemgtdHcnOiAn5L2/55So6ICF5ZCN56ixJyxcblx0XHR9KSxcblx0XHRBZ3JlZWRPck5vdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQbGVhc2UgcmVhZCB0aGUgcmVsZXZhbnQgdGVybXMuIElmIHlvdSBhZ3JlZSwgY2hlY2sgdGhlIGNoZWNrYm94IHRvIGNvbmZpcm0nLFxuXHRcdFx0amE6ICfplqLpgKPjgZnjgovopo/ntITjgpLjgYroqq3jgb/jgYTjgZ/jgaDjgY3jgIHlkIzmhI/jgZXjgozjgovloLTlkIjjga/jgIHjg4Hjgqfjg4Pjgq/jg5zjg4Pjgq/jgrnjgavjg4Hjgqfjg4Pjgq/jgpLlhaXjgozjgabnorroqo3jgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+36ZiF6K+755u45YWz5p2h5qy+44CC6Iul5ZCM5oSP77yM5Yu+6YCJ5aSN6YCJ5qGG5Lul56Gu6K6kJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+mWsuiugOebuOmXnOaineasvuOAguiLpeWQjOaEj++8jOWLvumBuOikh+mBuOahhuS7peeiuuiqjScsXG5cdFx0fSksXG5cdFx0RG91YmxlQ2hlY2tBZ3JlZWRPck5vdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgaGF2ZSBjYXJlZnVsbHkgcmVhZCwgZnVsbHkgdW5kZXJzdG9vZCBhbmQgYWdyZWVkIHRvIGNvbXBseSB3aXRoIG91ciA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIlRlcm1zIG9mIFNlcnZpY2VcIj5UZXJtcyBvZiBTZXJ2aWNlPC9hPiwgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUFwiIHRpdGxlPVwiUGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3lcIj5QZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeTwvYT4gYW5kIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIkNvbW1vbiBQcm9ncmFtXCI+Q29tbW9uIFByb2dyYW08L2E+LicsXG5cdFx0XHRqYTogJ+OBguOBquOBn+OBr+acrOOCteOCpOODiOOBruOAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwi5Yip55So6KaP57SEXCI+5Yip55So6KaP57SEPC9hPuOAj+OAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFBcIiB0aXRsZT1cIuWAi+S6uuaDheWgseS/neitt+aWuemHnVwiPuWAi+S6uuaDheWgseS/neitt+aWuemHnTwvYT7jgI/jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCLlhbHlkIzntrHpoJhcIj7lhbHlkIzntrHpoJg8L2E+44CP44KS5Y2B5YiG44Gr55CG6Kej44GX44CB5ZCM5oSP44GX44Gf44GT44Go44Gr44Gq44KK44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOW3suS7lOe7humYheivu+OAgeWFheWIhuS6huino+W5tuWQjOaEj+mBteWuiOacrOe9keermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwi55So5oi35Y2P6K6uXCI+55So5oi35Y2P6K6uPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFBcIiB0aXRsZT1cIuS4quS6uuS/oeaBr+S/neaKpOaWuemSiFwiPuS4quS6uuS/oeaBr+S/neaKpOaWuemSiDwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCLlhbHlkIznurLpooZcIj7lhbHlkIznurLpooY8L2E+44CL44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOW3suS7lOe0sOmWseiugOOAgeWFheWIhuS6huino+S4puWQjOaEj+mBteWuiOacrOe2suermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwi55So5oi25Y2U6K2wXCI+55So5oi25Y2U6K2wPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFBcIiB0aXRsZT1cIuWAi+S6uuS/oeaBr+S/neitt+aWuemHnVwiPuWAi+S6uuS/oeaBr+S/neitt+aWuemHnTwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCLlhbHlkIzntrHpoJhcIj7lhbHlkIzntrHpoJg8L2E+44CL44CCJyxcblx0XHR9KSxcblx0XHRFbXB0eTJGQTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgMkZBIHZlcmlmaWNhdGlvbiBjb2RlIGNhbm5vdCBiZSBlbXB0eScsXG5cdFx0XHRqYTogJzJGQeiqjeiovOOCs+ODvOODieOBjOWFpeWKm+OBleOCjOOBpuOBhOOBvuOBm+OCkycsXG5cdFx0XHQnemgtaGFucyc6ICcyRkHpqozor4HnoIHkuI3og73kuLrnqbonLFxuXHRcdFx0J3poLWhhbnQnOiAnMkZB6amX6K2J56K85LiN6IO954iy56m6Jyxcblx0XHR9KSxcblx0XHRFbXB0eVBhc3N3b3JkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSBwYXNzd29yZCBjYW5ub3QgYmUgZW1wdHknLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4njgYzlhaXlipvjgZXjgozjgabjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a+G56CB5LiN6IO95Li656m6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WvhueivOS4jeiDveeIsuepuicsXG5cdFx0fSksXG5cdFx0RW1wdHlVc2VybmFtZU9yUGFzc3dvcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIHVzZXJuYW1lIG9yIHBhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eScsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheWQjeOBvuOBn+OBr+ODkeOCueODr+ODvOODieOBjOWFpeWKm+OBleOCjOOBpuOBhOOBvuOBm+OCkycsXG5cdFx0XHQnemgtY24nOiAn55So5oi35ZCN5oiW5a+G56CB5LiN6IO95Li656m6Jyxcblx0XHRcdCd6aC1oayc6ICfnlKjmiLblkI3nqLHmiJblr4bnorzkuI3og73niLLnqbonLFxuXHRcdFx0J3poLXR3JzogJ+S9v+eUqOiAheWQjeeoseaIluWvhueivOS4jeiDveeIsuepuicsXG5cdFx0fSksXG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3IuIFJlZGlyZWN0aW5nLi4uJyxcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O844CB44Oq44OA44Kk44Os44Kv44OI5LitLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uOOAgumHjeWumuWQkeS4reKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLjjgILph43mlrDlsI7lkJHkuK3igKbigKYnLFxuXHRcdH0pLFxuXHRcdFNlbGVjdGVkT3JOb3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnS2VlcCBsb2dnZWQgaW4gZm9yIDYgbW9udGhzIGlmIHNlbGVjdGVkOyBvdGhlcndpc2UgdW50aWwgdGhlIGJyb3dzZXIgY2xvc2VzLicsXG5cdFx0XHRqYTogJ+ODgeOCp+ODg+OCr+OCkuWFpeOCjOOCi+OBqOODreOCsOOCpOODs+eKtuaFi+OBjDbjg7bmnIjplpPkv53mjIHjgZXjgozjgIHlhaXjgozjgarjgYTloLTlkIjjga/jg5bjg6njgqbjgrbjgpLplonjgZjjgovjgb7jgafkv53mjIHjgZXjgozjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yu+6YCJ5YiZ5L+d5oyB55m75b2V54q25oCBNuS4quaciO+8jOWQpuWImeWwhuWcqOa1j+iniOWZqOWFs+mXreaXtumAgOWHuueZu+W9leOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfli77pgbjliJnkv53mjIHnmbvlhaXni4DmhYs25YCL5pyI77yM5ZCm5YmH5bCH5Zyo54CP6Ka95Zmo6Zec6ZaJ5pmC55m75Ye644CCJyxcblx0XHR9KSxcblx0XHRUb29GcmVxdWVudDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgdXNlciBsb2dpbiBpcyB0b28gZnJlcXVlbnQsIHBsZWFzZSB0cnkgYWdhaW4gaW4gZml2ZSBtaW51dGVzJyxcblx0XHRcdGphOiAn5Yip55So6ICF44GM6aC757mB44GZ44GO44KL44Gf44KB44CBNeWIhuW+jOOBq+WGjeippuihjOOBl+OBpuOBj+OBoOOBleOBhCcsXG5cdFx0XHQnemgtY24nOiAn55So5oi355m75b2V6L+H5LqO6aKR57mB77yM6K+35LqU5YiG6ZKf5ZCO5YaN6K+VJyxcblx0XHRcdCd6aC1oayc6ICfnlKjmiLbnmbvlhaXpgY7mlrzpoLvnuYHvvIzoq4vkupTliIbpkJjlvozlho3oqaYnLFxuXHRcdFx0J3poLXR3JzogJ+S9v+eUqOiAheeZu+WFpei/h+S6jumikee5ge+8jOivt+S6lOWIhumSn+WQjuWGjeivlScsXG5cdFx0fSksXG5cdFx0J1VuZXhwZWN0ZWQgQVBJIHJlc3BvbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdVbmV4cGVjdGVkIEFQSSByZXNwb25zZTogJDEuIFJlZGlyZWN0aW5nLi4uJyxcblx0XHRcdGphOiAn5LqI5pyf44Gb44GsQVBJ44Gu5b+c562U77yaJDHjgIHjg6rjg4DjgqTjg6zjgq/jg4jkuK0uLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oSP5aSW55qEQVBJ5ZON5bqU77yaJDHjgILph43lrprlkJHkuK3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5oSP5aSW55qEQVBJ6Z+/5oeJ77yaJDHjgILph43mlrDlsI7lkJHkuK3igKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3QgaW5pdFdpbmRvd01hbmFnZXIgPSAoKTogT08udWkuV2luZG93TWFuYWdlciA9PiB7XG5cdHJldHVybiBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xufTtcblxuY29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IGluaXRXaW5kb3dNYW5hZ2VyKCk7XG5cbmV4cG9ydCB7d2luZG93TWFuYWdlcn07XG4iLCAiaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IG9vdWlDb25maXJtID0gYXN5bmMgKG9wdGlvbnM6IE9PLnVpLk1lc3NhZ2VEaWFsb2cuU2V0dXBEYXRhTWFwKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblxuXHRjb25zdCBpbnN0YW5jZTogT08udWkuV2luZG93SW5zdGFuY2UgPSB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3cobWVzc2FnZURpYWxvZywgb3B0aW9ucyk7XG5cblx0Y29uc3QgZGF0YTogdm9pZCA9IGF3YWl0IGluc3RhbmNlLmNsb3NlZDtcblx0Y29uc3QgX2RhdGEgPSBkYXRhIGFzIHthY3Rpb246IHN0cmluZ30gfCB2b2lkO1xuXG5cdHJldHVybiAhIShfZGF0YT8uYWN0aW9uID09PSAnYWNjZXB0Jyk7XG59O1xuXG5leHBvcnQge29vdWlDb25maXJtfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVFbGVtZW50cyA9IChpc0FncmVlVG9zOiBib29sZWFuKSA9PiB7XG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXG5cdGNvbnN0IG5hbWVJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0aWNvbjogJ3VzZXJBdmF0YXInLFxuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdVc2VybmFtZScpLFxuXHRcdHZhbGlkYXRlOiAnbm9uLWVtcHR5Jyxcblx0fSk7XG5cblx0Y29uc3QgcHdkSW5wdXQ6IE9PLnVpLlRleHRJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdGljb246ICdrZXknLFxuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdQYXNzd29yZCcpLFxuXHRcdHR5cGU6ICdwYXNzd29yZCcsXG5cdFx0dmFsaWRhdGU6ICdub24tZW1wdHknLFxuXHR9KTtcblxuXHRjb25zdCBhZ3JlZVRvc0NoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBpc0FncmVlVG9zLFxuXHR9KTtcblx0Y29uc3QgYWdyZWVUb3NMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGFncmVlVG9zQ2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0kgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnKSxcblx0fSk7XG5cblx0Y29uc3Qga2VlcExvZ2luQ2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCgpO1xuXHRjb25zdCBrZWVwTG9naW5MYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGtlZXBMb2dpbkNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGhlbHA6IGdldE1lc3NhZ2UoJ1NlbGVjdGVkT3JOb3QnKSxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnS2VlcCBtZSBsb2dnZWQgaW4nKSxcblx0fSk7XG5cblx0Y29uc3QgbGFiZWwgPSAoXG5cdFx0PGxhYmVsXG5cdFx0XHRjbGFzc05hbWU9e1snb28tdWktbGFiZWxXaWRnZXQnLCAnb28tdWktbGFiZWxFbGVtZW50LWxhYmVsJ119XG5cdFx0XHRzdHlsZT17e2ZvbnRTaXplOiAnOTAlJywgdGV4dEFsaWduOiAnanVzdGlmeSd9fVxuXHRcdC8+XG5cdCk7XG5cdGNvbnN0ICRsYWJlbCA9ICQobGFiZWwpIGFzIEpRdWVyeTtcblxuXHRjb25zdCAkYWdyZWVUb3M6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmFwcGVuZChhZ3JlZVRvc0xheW91dC4kZWxlbWVudCk7XG5cdGNvbnN0ICRmb3Jnb3RQYXNzd29yZDogSlF1ZXJ5ID0gJGxhYmVsXG5cdFx0LmNsb25lKClcblx0XHQuY3NzKCdmbG9hdCcsICdyaWdodCcpXG5cdFx0LmFwcGVuZChcblx0XHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOlBhc3N3b3JkUmVzZXQnKX0gdGl0bGU9e2dldE1lc3NhZ2UoJ1Jlc2V0IHBhc3N3b3JkJyl9PlxuXHRcdFx0XHR7Z2V0TWVzc2FnZSgnRm9yZ290IHBhc3N3b3JkPycpfVxuXHRcdFx0PC9hPlxuXHRcdCk7XG5cdGNvbnN0ICRpbnB1dEJveDogSlF1ZXJ5ID0gJGxhYmVsXG5cdFx0LmNsb25lKClcblx0XHQuY3NzKHtcblx0XHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0XHQnZm9udC1zaXplJzogJ2luaGVyaXQnLFxuXHRcdFx0cGFkZGluZzogJzZweCAwJyxcblx0XHR9KVxuXHRcdC5hcHBlbmQobmFtZUlucHV0LiRlbGVtZW50LmNzcygnbWFyZ2luLWJvdHRvbScsICc2cHgnKSwgcHdkSW5wdXQuJGVsZW1lbnQpO1xuXHRjb25zdCAkdG9zTGFiZWw6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmh0bWwoZ2V0TWVzc2FnZSgnaGVscCBmb3IgSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcycpKTtcblx0Y29uc3QgJHJlbWVtYmVyTWU6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmFwcGVuZChrZWVwTG9naW5MYXlvdXQuJGVsZW1lbnQuY3NzKCdtYXJnaW4tdG9wJywgJzZweCcpKTtcblxuXHRyZXR1cm4ge1xuXHRcdCRhZ3JlZVRvcyxcblx0XHQkZm9yZ290UGFzc3dvcmQsXG5cdFx0JGlucHV0Qm94LFxuXHRcdCRyZW1lbWJlck1lLFxuXHRcdCR0b3NMYWJlbCxcblx0XHRhZ3JlZVRvc0NoZWNrYm94LFxuXHRcdGtlZXBMb2dpbkNoZWNrYm94LFxuXHRcdG1lc3NhZ2VEaWFsb2csXG5cdFx0bmFtZUlucHV0LFxuXHRcdHB3ZElucHV0LFxuXHR9O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUVsZW1lbnRzfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcn0gZnJvbSAnLi9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBvb3VpUHJvbXB0ID0gYXN5bmMgKHJldHlwZVBhc3N3b3JkOiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdGNvbnN0IGNvZGVEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHRjb25zdCBjb2RlSW5wdXQ6IE9PLnVpLlRleHRJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdGljb246ICdrZXknLFxuXHRcdHBsYWNlaG9sZGVyOiByZXR5cGVQYXNzd29yZCA/IGdldE1lc3NhZ2UoJ05ldyBwYXNzd29yZCcpIDogZ2V0TWVzc2FnZSgnNi1kaWdpdCBudW1iZXInKSxcblx0XHR2YWxpZGF0ZTogJ2ludGVnZXInLFxuXHR9KTtcblxuXHRjb25zdCBjb2RlTGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5UZXh0SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNvZGVJbnB1dCwge1xuXHRcdGFsaWduOiAndG9wJyxcblx0XHRsYWJlbDogJChcblx0XHRcdDxiIGNsYXNzTmFtZT17Wydvby11aS1tZXNzYWdlRGlhbG9nLXRpdGxlJywgJ29vLXVpLXdpbmRvdy1oZWFkJ119PlxuXHRcdFx0XHR7cmV0eXBlUGFzc3dvcmQgPyBnZXRNZXNzYWdlKCdFbnRlciBwYXNzd29yZCcpIDogZ2V0TWVzc2FnZSgnRW50ZXIgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJyl9XG5cdFx0XHQ8L2I+XG5cdFx0KSxcblx0fSk7XG5cblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtjb2RlRGlhbG9nXSk7XG5cblx0Y29uc3QgaW5zdGFuY2U6IE9PLnVpLldpbmRvd0luc3RhbmNlID0gd2luZG93TWFuYWdlci5vcGVuV2luZG93KGNvZGVEaWFsb2csIHtcblx0XHRtZXNzYWdlOiBjb2RlTGF5b3V0LiRlbGVtZW50LFxuXHR9KTtcblxuXHRyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyKCk7XG5cblx0dm9pZCBpbnN0YW5jZS5vcGVuZWQudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0Y29kZUlucHV0Lm9uKCdlbnRlcicsICgpOiB2b2lkID0+IHtcblx0XHRcdCh3aW5kb3dNYW5hZ2VyLmdldEN1cnJlbnRXaW5kb3coKSBhcyBPTy51aS5XaW5kb3cpLmNsb3NlKHtcblx0XHRcdFx0YWN0aW9uOiAnYWNjZXB0Jyxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdGNvZGVJbnB1dC5mb2N1cygpO1xuXHR9KTtcblxuXHRjb25zdCBkYXRhOiB2b2lkID0gYXdhaXQgaW5zdGFuY2UuY2xvc2VkO1xuXHRjb25zdCBfZGF0YSA9IGRhdGEgYXMge2FjdGlvbjogc3RyaW5nfSB8IHZvaWQ7XG5cblx0cmV0dXJuIF9kYXRhPy5hY3Rpb24gPT09ICdhY2NlcHQnID8gY29kZUlucHV0LmdldFZhbHVlKCkgOiBudWxsO1xufTtcblxuZXhwb3J0IHtvb3VpUHJvbXB0fTtcbiIsICJpbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4uL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3QgcmVtb3ZlV2luZG93UmVzaXplSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcblx0JCh3aW5kb3cpLm9mZih7XG5cdFx0J29yaWVudGF0aW9uY2hhbmdlIHJlc2l6ZSc6ICh3aW5kb3dNYW5hZ2VyIGFzIHVua25vd24gYXMge29uV2luZG93UmVzaXplSGFuZGxlcjogKCkgPT4gdm9pZH0pXG5cdFx0XHQub25XaW5kb3dSZXNpemVIYW5kbGVyLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcn07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHF1ZXJ5TG9naW5Ub2tlbiA9IGFzeW5jIChcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZVxuKTogUHJvbWlzZTx7XG5cdGxvZ2luVG9rZW46IHN0cmluZztcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcbn0+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KHtcblx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdHZXR0aW5nIGxvZ2luIHRva2VuJyksXG5cdH0pO1xuXG5cdGNvbnN0IGxvZ2luVG9rZW46IHN0cmluZyA9IGF3YWl0IGFwaS5nZXRUb2tlbignbG9naW4nKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoe1xuXHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2luIHRva2VuIGdvdCcpLFxuXHRcdGR1cmF0aW9uOiAtMSxcblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRsb2dpblRva2VuLFxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UsXG5cdH07XG59O1xuXG5leHBvcnQge3F1ZXJ5TG9naW5Ub2tlbn07XG4iLCAiaW1wb3J0IHtkZWxheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCByZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0YXdhaXQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0YXdhaXQgZGVsYXkoMyAqIDEwMDApO1xuXHRsb2NhdGlvbi5ocmVmID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6VXNlcmxvZ2luJyk7XG59O1xuXG5leHBvcnQge3JlZGlyZWN0T3JpZ2luTG9naW5QYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHNob3dFcnJvciA9IChlcnJvcjogdW5rbm93biwgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSk6IHZvaWQgPT4ge1xuXHRjb25zb2xlLmVycm9yKCdbQWpheExvZ2luXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnZXJyb3InXG5cdCk7XG59O1xuXG5leHBvcnQge3Nob3dFcnJvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLHVCQUF3QjtBQUN4QixJQUFBQyxZQUFhO0FBQ2IsSUFBQUMsVUFBVzs7QUNGWixJQUFBQyxzQkFBMkNDLFFBQUEsaUJBQUE7O0FDRDNDLElBQUFDLG9CQUFrQ0QsUUFBQSxnQ0FBQTtBQUVsQyxJQUFNRSxjQUFjQSxDQUNuQkMsVUFDQUMsa0JBQ1U7QUFDVkQsV0FBU0UsR0FBRyxVQUFBLEdBQVNKLGtCQUFBSyxxQkFBb0JGLGFBQWEsQ0FBQztBQUN2REQsV0FBU0UsR0FBRyxXQUFXRCxhQUFhO0FBQ3JDOztBQ1BBLElBQUFHLHFCQUF3QlAsUUFBQSxpQkFBQTtBQVV4QixJQUFNUSxPQUFBLEdBQWNELG1CQUFBRSxXQUFBLGFBQUFDLE9BQStCWixPQUFPLENBQUU7O0FDVjVELElBQUFhLHNCQUFrQkMsUUFBQVosUUFBQSxnQkFBQSxHQUFBLENBQUE7O0FDRGxCLElBQUFhLHFCQUFrQkQsUUFBQVosUUFBQSxnQkFBQSxHQUFBLENBQUE7O0FDQWxCLElBQUFjLHFCQUF1QmQsUUFBQSxp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STVFLEdBQUc2RSxPQUFPQyxJQUFZL0wsU0FBUyxHQUFHO0FBQ3JDO0VBQ0Q7QUFFQSxRQUFNO0lBQUNnTTtFQUFVLElBQUkvRSxHQUFHNkUsT0FBT0MsSUFBSTtBQUVuQyxNQUFJQyxZQUFZO0FBQ2Y7RUFDRDtBQUVBLFFBQU1DLGdCQUEyQ0osTUFBTUssS0FBZ0NuTSxvQkFBb0I7QUFDM0csTUFBSSxDQUFDa00sY0FBY0UsUUFBUTtBQUMxQjtFQUNEO0FBRUExSixnQkFBY25DLFNBQVM4TCxTQUFTUCxLQUFLO0FBRXJDLFFBQU1RLHVCQUF5QztJQUM5QzlILFdBQVdBLE1BQU07SUFBQztFQUNuQjtBQUVBLFFBQU1oRSxnQkFBaUIrTCxXQUF5RDtBQUMvRSxRQUFJLEVBQUEsR0FBQ3BNLG9CQUFBcU0scUJBQW9CRCxLQUFLLEdBQUc7QUFDaEM7SUFDRDtBQUVBQSxVQUFNRSxlQUFlO0FBQ3JCNUMsY0FBVXlDLG9CQUFvQjtFQUMvQjtBQUNBaE0sY0FBWTRMLGVBQWUxTCxhQUFhO0FBR3hDMEcsS0FBRzZFLE9BQU9XLElBQVl6TSxXQUFXLElBQUk7QUFDdEMsQ0FBQzsiLAogICJuYW1lcyI6IFsibG9naW5FbGVtZW50U2VsZWN0b3IiLCAiY29uZmlnS2V5IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQxMyIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFkZExpc3RlbmVyIiwgIiRlbGVtZW50IiwgImV2ZW50TGlzdGVuZXIiLCAib24iLCAiZmlsdGVyQWx0ZXJlZENsaWNrcyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMSIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNhbmNlbCIsICJ6aCIsICJMb2dpbiIsICJQYXNzd29yZCIsICJVc2VybmFtZSIsICJBZ3JlZWRPck5vdCIsICJEb3VibGVDaGVja0FncmVlZE9yTm90IiwgIkVtcHR5MkZBIiwgIkVtcHR5UGFzc3dvcmQiLCAiRW1wdHlVc2VybmFtZU9yUGFzc3dvcmQiLCAiU2VsZWN0ZWRPck5vdCIsICJUb29GcmVxdWVudCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAiT08iLCAidWkiLCAiV2luZG93TWFuYWdlciIsICJ3aW5kb3dNYW5hZ2VyIiwgIm9vdWlDb25maXJtIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAib3B0aW9ucyIsICJtZXNzYWdlRGlhbG9nIiwgIk1lc3NhZ2VEaWFsb2ciLCAiYWRkV2luZG93cyIsICJpbnN0YW5jZSIsICJvcGVuV2luZG93IiwgImRhdGEiLCAiY2xvc2VkIiwgIl9kYXRhIiwgImFjdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImNoZWNrVmFsaWQiLCAiX3JlZjIiLCAiYWdyZWVUb3NDaGVja2JveCIsICJuYW1lSW5wdXQiLCAicHdkSW5wdXQiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJpc0FncmVlVG9zIiwgImlzU2VsZWN0ZWQiLCAiaXNGaWxsIiwgImdldFZhbHVlIiwgInRyaW0iLCAiaW5jbHVkZXMiLCAiaGlkZVRvYXN0IiwgImNsZWFyV2luZG93cyIsICJtZXNzYWdlIiwgIiQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJhY3Rpb25zIiwgImxhYmVsIiwgImZsYWdzIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAiaXNWYWxpZCIsICJfeDIiLCAiX3gzIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJnZW5lcmF0ZUVsZW1lbnRzIiwgIlRleHRJbnB1dFdpZGdldCIsICJpY29uIiwgInBsYWNlaG9sZGVyIiwgInZhbGlkYXRlIiwgInR5cGUiLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJzZWxlY3RlZCIsICJhZ3JlZVRvc0xheW91dCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJrZWVwTG9naW5DaGVja2JveCIsICJrZWVwTG9naW5MYXlvdXQiLCAiaGVscCIsICJjbGFzc05hbWUiLCAic3R5bGUiLCAiZm9udFNpemUiLCAidGV4dEFsaWduIiwgIiRsYWJlbCIsICIkYWdyZWVUb3MiLCAiY2xvbmUiLCAiYXBwZW5kIiwgIiRmb3Jnb3RQYXNzd29yZCIsICJjc3MiLCAiaHJlZiIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJ0aXRsZSIsICIkaW5wdXRCb3giLCAiZGlzcGxheSIsICJwYWRkaW5nIiwgIiR0b3NMYWJlbCIsICJodG1sIiwgIiRyZW1lbWJlck1lIiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyIiwgIndpbmRvdyIsICJvZmYiLCAib25XaW5kb3dSZXNpemVIYW5kbGVyIiwgIm9vdWlQcm9tcHQiLCAiX3JlZjMiLCAicmV0eXBlUGFzc3dvcmQiLCAiY29kZURpYWxvZyIsICJjb2RlSW5wdXQiLCAiY29kZUxheW91dCIsICJvcGVuZWQiLCAidGhlbiIsICJnZXRDdXJyZW50V2luZG93IiwgImNsb3NlIiwgImZvY3VzIiwgIl94NCIsICJpbXBvcnRfZXh0X2dhZGdldDgiLCAicXVlcnlMb2dpblRva2VuIiwgIl9yZWY0IiwgImxvZ2luVG9rZW4iLCAiZ2V0VG9rZW4iLCAiX3g1IiwgImltcG9ydF9leHRfZ2FkZ2V0OSIsICJyZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSIsICJfcmVmNSIsICJkZWxheSIsICJsb2NhdGlvbiIsICJpbXBvcnRfZXh0X2dhZGdldDEwIiwgInNob3dFcnJvciIsICJlcnJvciIsICJjb25zb2xlIiwgImltcG9ydF9leHRfZ2FkZ2V0MTIiLCAiYWpheExvZ2luIiwgImxvZ2luIiwgIl9yZWY2IiwgImxvZ2luQ29udGludWUiLCAiX3Jlc3BvbnNlJGNsaWVudGxvZ2luIiwgIl9yZXNwb25zZSRjbGllbnRsb2dpbjIiLCAicGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxvZ2ludG9rZW4iLCAibG9naW5yZXR1cm51cmwiLCAidXNlcm5hbWUiLCAicGFzc3dvcmQiLCAicmVtZW1iZXJNZSIsICJsb2dpbmNvbnRpbnVlIiwgInZhbHVlIiwgInJldHlwZSIsICJPQVRIVG9rZW4iLCAicmVzcG9uc2UiLCAicG9zdCIsICJzdGF0dXMiLCAicmVsb2FkIiwgIm1lc3NhZ2Vjb2RlIiwgInJlcGxhY2UiLCAiY2hlY2siLCAiX3JlZjciLCAibGFzdElzQWdyZWVUb3MiLCAibGFzdFRvYXN0aWZ5SW5zdGFuY2UiLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJQcm9jZXNzIiwgInNpemUiLCAiZ2V0Qm9keSIsICJpbml0QXV0b0xvZ2luIiwgIiRib2R5IiwgImNvbmZpZyIsICJnZXQiLCAid2dVc2VyTmFtZSIsICIkbG9naW5FbGVtZW50IiwgImZpbmQiLCAibGVuZ3RoIiwgImFwcGVuZFRvIiwgImZha2VUb2FzdGlmeUluc3RhbmNlIiwgImV2ZW50IiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAicHJldmVudERlZmF1bHQiLCAic2V0Il0KfQo=
