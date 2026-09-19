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
var oouiConfirm = /* @__PURE__ */ (function() {
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
})();
//! src/AjaxLogin/modules/util/checkValid.tsx
var import_ext_gadget5 = require("ext.gadget.Toastify");
var checkValid = /* @__PURE__ */ (function() {
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
})();
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
var oouiPrompt = /* @__PURE__ */ (function() {
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
})();
//! src/AjaxLogin/modules/util/queryLoginToken.ts
var import_ext_gadget8 = require("ext.gadget.Toastify");
var queryLoginToken = /* @__PURE__ */ (function() {
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
})();
//! src/AjaxLogin/modules/util/redirectOriginLoginPage.ts
var import_ext_gadget9 = require("ext.gadget.Util");
var redirectOriginLoginPage = /* @__PURE__ */ (function() {
  var _ref5 = _asyncToGenerator(function* () {
    yield windowManager.clearWindows();
    yield (0, import_ext_gadget9.delay)(3 * 1e3);
    location.href = mw.util.getUrl("Special:Userlogin");
  });
  return function redirectOriginLoginPage2() {
    return _ref5.apply(this, arguments);
  };
})();
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
  const _login = /* @__PURE__ */ (function() {
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
  })();
  const check = /* @__PURE__ */ (function() {
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
  })();
  pwdInput.on("enter", () => {
    void check();
  });
  messageDialog.getActionProcess = (action) => (
    // @ts-expect-error TS2304
    new OO.ui.Process(() => {
      if (action === "login") {
        void check();
      } else {
        toastifyInstance.hideToast();
        void windowManager.clearWindows();
      }
    })
  );
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FqYXhMb2dpbi9vcHRpb25zLmpzb24iLCAic3JjL0FqYXhMb2dpbi9BamF4TG9naW4udHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9hcGkudHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL2NoZWNrVmFsaWQudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlci50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpQ29uZmlybS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVsZW1lbnRzLnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpUHJvbXB0LnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL3F1ZXJ5TG9naW5Ub2tlbi50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZWRpcmVjdE9yaWdpbkxvZ2luUGFnZS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJsb2dpbkVsZW1lbnRTZWxlY3RvclwiOiBcImE6aGFzKC5hamF4bG9naW4tbW91bnQtcG9pbnQpLCNwdC1sb2dpbj5hLC52ZWN0b3ItdXNlci1tZW51LWxvZ2luPmEsI3VzZXItdG9vbHM+YVtocmVmKj1cXFwiU3BlY2lhbFxcXCJdLC5tYWlucGFnZS10b3AtbWVudT5saTpudGgtY2hpbGQoMikgYVwiLFxuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1BamF4TG9naW5fX0luaXRpYWxpemVkXCIsXG5cdFwidmVyc2lvblwiOiBcIjQuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2NoZWNrQTExeUNvbmZpcm1LZXksIGdldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvYWRkTGlzdGVuZXInO1xuaW1wb3J0IHthamF4TG9naW59IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBpbml0QXV0b0xvZ2luKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dVc2VyTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRsb2dpbkVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PihPUFRJT05TLmxvZ2luRWxlbWVudFNlbGVjdG9yKTtcblx0aWYgKCEkbG9naW5FbGVtZW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuYXBwZW5kVG8oJGJvZHkpO1xuXG5cdGNvbnN0IGZha2VUb2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdH07XG5cblx0Y29uc3QgZXZlbnRMaXN0ZW5lciA9IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KTogdm9pZCA9PiB7XG5cdFx0aWYgKCFjaGVja0ExMXlDb25maXJtS2V5KGV2ZW50KSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0YWpheExvZ2luKGZha2VUb2FzdGlmeUluc3RhbmNlKTtcblx0fTtcblx0YWRkTGlzdGVuZXIoJGxvZ2luRWxlbWVudCwgZXZlbnRMaXN0ZW5lcik7XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xufSk7XG4iLCAiaW1wb3J0IHtmaWx0ZXJBbHRlcmVkQ2xpY2tzfSBmcm9tICdleHQuZ2FkZ2V0LkZpbHRlckFsdGVyZWRDbGlja3MnO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9IChcblx0JGVsZW1lbnQ6IEpRdWVyeSxcblx0ZXZlbnRMaXN0ZW5lcjogKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpID0+IHZvaWRcbik6IHZvaWQgPT4ge1xuXHQkZWxlbWVudC5vbignY2xpY2snLCBmaWx0ZXJBbHRlcmVkQ2xpY2tzKGV2ZW50TGlzdGVuZXIpKTtcblx0JGVsZW1lbnQub24oJ2tleWRvd24nLCBldmVudExpc3RlbmVyKTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG50eXBlIENsaWVudExvZ2luUGFyYW1zID0gQXBpQ2xpZW50TG9naW5QYXJhbXMgJiB7XG5cdHVzZXJuYW1lPzogc3RyaW5nO1xuXHRwYXNzd29yZD86IHN0cmluZztcblx0cmVtZW1iZXJNZT86IGJvb2xlYW47XG5cdHJldHlwZT86IHN0cmluZztcblx0T0FUSFRva2VuPzogc3RyaW5nO1xufTtcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEFqYXhMb2dpbi8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHt0eXBlIENsaWVudExvZ2luUGFyYW1zLCBhcGl9O1xuIiwgImltcG9ydCB7dHlwZSBDbGllbnRMb2dpblBhcmFtcywgYXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtjaGVja1ZhbGlkfSBmcm9tICcuL3V0aWwvY2hlY2tWYWxpZCc7XG5pbXBvcnQge2dlbmVyYXRlRWxlbWVudHN9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUVsZW1lbnRzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7b291aVByb21wdH0gZnJvbSAnLi91dGlsL29vdWlQcm9tcHQnO1xuaW1wb3J0IHtxdWVyeUxvZ2luVG9rZW59IGZyb20gJy4vdXRpbC9xdWVyeUxvZ2luVG9rZW4nO1xuaW1wb3J0IHtyZWRpcmVjdE9yaWdpbkxvZ2luUGFnZX0gZnJvbSAnLi91dGlsL3JlZGlyZWN0T3JpZ2luTG9naW5QYWdlJztcbmltcG9ydCB7cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcn0gZnJvbSAnLi91dGlsL3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXInO1xuaW1wb3J0IHtzaG93RXJyb3J9IGZyb20gJy4vdXRpbC9zaG93RXJyb3InO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBhamF4TG9naW4gPSAodG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSwgaXNBZ3JlZVRvczogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCA9PiB7XG5cdGNvbnN0IHtcblx0XHQkYWdyZWVUb3MsXG5cdFx0JGZvcmdvdFBhc3N3b3JkLFxuXHRcdCRpbnB1dEJveCxcblx0XHQkcmVtZW1iZXJNZSxcblx0XHQkdG9zTGFiZWwsXG5cdFx0YWdyZWVUb3NDaGVja2JveCxcblx0XHRrZWVwTG9naW5DaGVja2JveCxcblx0XHRtZXNzYWdlRGlhbG9nLFxuXHRcdG5hbWVJbnB1dCxcblx0XHRwd2RJbnB1dCxcblx0fSA9IGdlbmVyYXRlRWxlbWVudHMoaXNBZ3JlZVRvcyk7XG5cblx0bGV0IGxvZ2luVG9rZW46IHN0cmluZyA9ICcnO1xuXHRjb25zdCBsb2dpbiA9IGFzeW5jICh7bG9naW5Db250aW51ZSA9IGZhbHNlLCByZXR5cGVQYXNzd29yZCA9IGZhbHNlfSA9IHt9KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghbG9naW5Db250aW51ZSkge1xuXHRcdFx0XHQoe2xvZ2luVG9rZW4sIHRvYXN0aWZ5SW5zdGFuY2V9ID0gYXdhaXQgcXVlcnlMb2dpblRva2VuKHRvYXN0aWZ5SW5zdGFuY2UpKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGFyYW1zOiBDbGllbnRMb2dpblBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnY2xpZW50bG9naW4nLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRsb2dpbnRva2VuOiBsb2dpblRva2VuLFxuXHRcdFx0XHRsb2dpbnJldHVybnVybDogbG9jYXRpb24uaHJlZixcblx0XHRcdFx0dXNlcm5hbWU6IG5hbWVJbnB1dC5nZXRWYWx1ZSgpLFxuXHRcdFx0XHRwYXNzd29yZDogcHdkSW5wdXQuZ2V0VmFsdWUoKSxcblx0XHRcdH07XG5cdFx0XHRpZiAoa2VlcExvZ2luQ2hlY2tib3guaXNTZWxlY3RlZCgpKSB7XG5cdFx0XHRcdHBhcmFtcy5yZW1lbWJlck1lID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChsb2dpbkNvbnRpbnVlIHx8IHJldHlwZVBhc3N3b3JkKSB7XG5cdFx0XHRcdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMubG9naW5yZXR1cm51cmw7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMudXNlcm5hbWU7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMucGFzc3dvcmQ7XG5cdFx0XHRcdHBhcmFtcy5sb2dpbmNvbnRpbnVlID0gdHJ1ZTtcblxuXHRcdFx0XHRjb25zdCB2YWx1ZTogc3RyaW5nIHwgbnVsbCA9IGF3YWl0IG9vdWlQcm9tcHQocmV0eXBlUGFzc3dvcmQpO1xuXG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2luIGNhbmNlbGxlZCcpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCdpbmZvJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09PSAnJykge1xuXHRcdFx0XHRcdGlmIChyZXR5cGVQYXNzd29yZCkge1xuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRW1wdHlQYXNzd29yZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdHJldHlwZVBhc3N3b3JkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0VtcHR5MkZBJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR2b2lkIGxvZ2luKHtcblx0XHRcdFx0XHRcdFx0bG9naW5Db250aW51ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXR5cGVQYXNzd29yZCkge1xuXHRcdFx0XHRcdHBhcmFtcy5wYXNzd29yZCA9IHZhbHVlO1xuXHRcdFx0XHRcdHBhcmFtcy5yZXR5cGUgPSB2YWx1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwYXJhbXMuT0FUSFRva2VuID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2dpbmcgaW4nKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2luZm8nXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IChhd2FpdCBhcGkucG9zdChwYXJhbXMpKSBhcyB7XG5cdFx0XHRcdGNsaWVudGxvZ2luOiB7XG5cdFx0XHRcdFx0c3RhdHVzPzogc3RyaW5nO1xuXHRcdFx0XHRcdG1lc3NhZ2Vjb2RlPzogc3RyaW5nO1xuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblxuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblxuXHRcdFx0aWYgKHJlc3BvbnNlWydjbGllbnRsb2dpbiddPy5zdGF0dXMgPT09ICdQQVNTJykge1xuXHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdMb2dpbiBzdWNjZWVkJyksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQnc3VjY2Vzcydcblx0XHRcdFx0KTtcblx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlWydjbGllbnRsb2dpbiddPy5tZXNzYWdlY29kZSkge1xuXHRcdFx0XHRjb25zdCB7bWVzc2FnZWNvZGV9ID0gcmVzcG9uc2VbJ2NsaWVudGxvZ2luJ107XG5cdFx0XHRcdHN3aXRjaCAobWVzc2FnZWNvZGUpIHtcblx0XHRcdFx0XHRjYXNlICdsb2dpbi10aHJvdHRsZWQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnVG9vRnJlcXVlbnQnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCdlcnJvcidcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdvYXRoYXV0aC1hdXRoLXVpJzpcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRsb2dpbkNvbnRpbnVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdvYXRoYXV0aC1sb2dpbi1mYWlsZWQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnSW52YWxpZCAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRsb2dpbkNvbnRpbnVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdyZXNldHBhc3MtdGVtcC1lbWFpbGVkJzpcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldyBwYXNzd29yZCBpcyByZXF1aXJlZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdHJldHlwZVBhc3N3b3JkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd3cm9uZ3Bhc3N3b3JkJzpcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0XHRcdFx0XHRhamF4TG9naW4odG9hc3RpZnlJbnN0YW5jZSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdVbmV4cGVjdGVkIEFQSSByZXNwb25zZScpLnJlcGxhY2UoJyQxJywgbWVzc2FnZWNvZGUpLFxuXHRcdFx0XHRcdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J2Vycm9yJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgcmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRzaG93RXJyb3IoZXJyb3IsIHRvYXN0aWZ5SW5zdGFuY2UpO1xuXHRcdFx0dm9pZCByZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSgpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBjaGVjayA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRpc1ZhbGlkLFxuXHRcdFx0aXNBZ3JlZVRvczogbGFzdElzQWdyZWVUb3MsXG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlOiBsYXN0VG9hc3RpZnlJbnN0YW5jZSxcblx0XHR9ID0gYXdhaXQgY2hlY2tWYWxpZChbYWdyZWVUb3NDaGVja2JveCwgbmFtZUlucHV0LCBwd2RJbnB1dF0sIHRvYXN0aWZ5SW5zdGFuY2UpO1xuXG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IGxhc3RUb2FzdGlmeUluc3RhbmNlO1xuXG5cdFx0aWYgKGlzVmFsaWQpIHtcblx0XHRcdHZvaWQgbG9naW4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YWpheExvZ2luKHRvYXN0aWZ5SW5zdGFuY2UsIGxhc3RJc0FncmVlVG9zKTtcblx0XHR9XG5cdH07XG5cblx0cHdkSW5wdXQub24oJ2VudGVyJywgKCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgY2hlY2soKTtcblx0fSk7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdG1lc3NhZ2VEaWFsb2cuZ2V0QWN0aW9uUHJvY2VzcyA9IChhY3Rpb246IHN0cmluZyk6IE9PLnVpLlByb2Nlc3MgPT5cblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdG5ldyBPTy51aS5Qcm9jZXNzKCgpOiB2b2lkID0+IHtcblx0XHRcdGlmIChhY3Rpb24gPT09ICdsb2dpbicpIHtcblx0XHRcdFx0dm9pZCBjaGVjaygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbbWVzc2FnZURpYWxvZ10pO1xuXHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhtZXNzYWdlRGlhbG9nLCB7XG5cdFx0YWN0aW9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdsb2dpbicsXG5cdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0bGFiZWw6ICQoPGI+e2dldE1lc3NhZ2UoJ0xvZ2luJyl9PC9iPiksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdjYW5jZWwnLFxuXHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKDxiPntnZXRNZXNzYWdlKCdDYW5jZWwnKX08L2I+KSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRtZXNzYWdlOiAkKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvby11aS13aW5kb3ctZm9vdFwiPntbJGlucHV0Qm94LCAkZm9yZ290UGFzc3dvcmQsICRyZW1lbWJlck1lLCAkYWdyZWVUb3MsICR0b3NMYWJlbF19PC9kaXY+XG5cdFx0KSxcblx0XHR0aXRsZTogJCg8YiBjbGFzc05hbWU9XCJvby11aS13aW5kb3ctaGVhZFwiPntnZXRNZXNzYWdlKCdMb2dpbicpfTwvYj4pLFxuXHRcdHNpemU6ICdzbWFsbCcsXG5cdH0pO1xuXHRyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyKCk7XG59O1xuXG5leHBvcnQge2FqYXhMb2dpbn07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge29vdWlDb25maXJtfSBmcm9tICcuL29vdWlDb25maXJtJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IGNoZWNrVmFsaWQgPSBhc3luYyAoXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFthZ3JlZVRvc0NoZWNrYm94LCBuYW1lSW5wdXQsIHB3ZElucHV0XTogW09PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQsIE9PLnVpLlRleHRJbnB1dFdpZGdldCwgT08udWkuVGV4dElucHV0V2lkZ2V0XSxcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZVxuKTogUHJvbWlzZTx7XG5cdGlzQWdyZWVUb3M6IGJvb2xlYW47XG5cdGlzVmFsaWQ6IGJvb2xlYW47XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG59PiA9PiB7XG5cdGxldCBpc0FncmVlVG9zOiBib29sZWFuID0gYWdyZWVUb3NDaGVja2JveC5pc1NlbGVjdGVkKCk7XG5cdGNvbnN0IGlzRmlsbDogYm9vbGVhbiA9ICFbbmFtZUlucHV0LmdldFZhbHVlKCkudHJpbSgpLCBwd2RJbnB1dC5nZXRWYWx1ZSgpLnRyaW0oKV0uaW5jbHVkZXMoJycpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cblx0aWYgKCFpc0FncmVlVG9zKSB7XG5cdFx0aXNBZ3JlZVRvcyA9IGF3YWl0IG9vdWlDb25maXJtKHtcblx0XHRcdG1lc3NhZ2U6ICQoPHNwYW4gaW5uZXJIVE1MPXtnZXRNZXNzYWdlKCdEb3VibGVDaGVja0FncmVlZE9yTm90Jyl9IC8+KSBhcyBKUXVlcnksXG5cdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsYWJlbDogJCg8Yj57Z2V0TWVzc2FnZSgnQ2FuY2VsJyl9PC9iPiksXG5cdFx0XHRcdFx0YWN0aW9uOiAnY2FuY2VsJyxcblx0XHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsYWJlbDogJCg8Yj57Z2V0TWVzc2FnZSgnSSBhZ3JlZScpfTwvYj4pLFxuXHRcdFx0XHRcdGFjdGlvbjogJ2FjY2VwdCcsXG5cdFx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9KTtcblxuXHRcdGlmICghaXNBZ3JlZVRvcykge1xuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnQWdyZWVkT3JOb3QnKSxcblx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdpbmZvJ1xuXHRcdFx0KTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoIWlzRmlsbCkge1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRW1wdHlVc2VybmFtZU9yUGFzc3dvcmQnKSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdpbmZvJ1xuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBpc1ZhbGlkOiBib29sZWFuID0gaXNBZ3JlZVRvcyAmJiBpc0ZpbGw7XG5cblx0cmV0dXJuIHtcblx0XHRpc0FncmVlVG9zLFxuXHRcdGlzVmFsaWQsXG5cdFx0dG9hc3RpZnlJbnN0YW5jZSxcblx0fTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tWYWxpZH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCc2LWRpZ2l0IG51bWJlcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnNi1kaWdpdCBudW1iZXInLFxuXHRcdFx0amE6ICc25qGB44Gu5pWw5a2XJyxcblx0XHRcdCd6aC1oYW5zJzogJzbkvY3mlbDlrZcnLFxuXHRcdFx0J3poLWhhbnQnOiAnNuS9jeaVuOWtlycsXG5cdFx0fSksXG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHR6aDogJ+WPlua2iCcsXG5cdFx0fSksXG5cdFx0J0VudGVyIHBhc3N3b3JkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFbnRlciBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICfor7fovpPlhaXlr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6Ly45YWl5a+G56K8Jyxcblx0XHR9KSxcblx0XHQnRW50ZXIgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcyRkEgdmVyaWZpY2F0aW9uIGNvZGUnLFxuXHRcdFx0amE6ICcyRkHoqo3oqLzjgrPjg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+36L6T5YWlMkZB6aqM6K+B56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+i8uOWFpTJGQempl+itieeivCcsXG5cdFx0fSksXG5cdFx0J0ZvcmdvdCBwYXNzd29yZD8nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZvcmdvdCBwYXNzd29yZD8nLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4njgpLjgYrlv5jjgozjgafjgZnjgYvvvJ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5b+Y6K6w5a+G56CB77yfJyxcblx0XHRcdCd6aC1oYW50JzogJ+W/mOiomOWvhueivO+8nycsXG5cdFx0fSksXG5cdFx0J0dldHRpbmcgbG9naW4gdG9rZW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0dldHRpbmcgbG9naW4gdG9rZW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7Pjg4jjg7zjgq/jg7PjgpLlj5blvpfjgZfjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo6I635Y+W55m75b2V5Luk54mMJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOeNsuWPlueZu+WFpeasiuadlicsXG5cdFx0fSksXG5cdFx0J2hlbHAgZm9yIEkgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1doZW4geW91IGxvZ2luLCBpdCBtZWFucyB0aGF0IHlvdSBoYXZlIGNhcmVmdWxseSByZWFkLCBmdWxseSB1bmRlcnN0b29kIGFuZCBhZ3JlZWQgdG8gY29tcGx5IHdpdGggb3VyIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwiVGVybXMgb2YgU2VydmljZVwiPlRlcm1zIG9mIFNlcnZpY2U8L2E+LCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCJQZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeVwiPlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5PC9hPiBhbmQgPGVtPnRoZSA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCJDb21tb24gUHJvZ3JhbVwiPkNvbW1vbiBQcm9ncmFtPC9hPjwvZW0+LicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+OCkuOBmeOCi+OBqOOAgeOBguOBquOBn+OBr+acrOOCteOCpOODiOOBruOAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwi5Yip55So6KaP57SEXCI+5Yip55So6KaP57SEPC9hPuOAj+OAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFBcIiB0aXRsZT1cIuWAi+S6uuaDheWgseS/neitt+aWuemHnVwiPuWAi+S6uuaDheWgseS/neitt+aWuemHnTwvYT7jgI/jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCLlhbHlkIzntrHpoJhcIj7lhbHlkIzntrHpoJg8L2E+44CP44KS5Y2B5YiG44Gr55CG6Kej44GX44CB5ZCM5oSP44GX44Gf44GT44Go44Gr44Gq44KK44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+eZu+W9leaXtu+8jOWNs+S7o+ihqOaCqOW3suS7lOe7humYheivu+OAgeWFheWIhuS6huino+W5tuWQjOaEj+mBteWuiOacrOe9keermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwi55So5oi35Y2P6K6uXCI+55So5oi35Y2P6K6uPC9hPuOAi+OAgeOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFBcIiB0aXRsZT1cIuS4quS6uuS/oeaBr+S/neaKpOaWuemSiFwiPuS4quS6uuS/oeaBr+S/neaKpOaWuemSiDwvYT7jgIvlj4rjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCLlhbHlkIznurLpooZcIj7lhbHlkIznurLpooY8L2E+44CL44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+eZu+mMhOaZgu+8jOWNs+S7o+ihqOaCqOW3suS7lOe0sOmWseiugOOAgeWFheWIhuS6huino+S4puWQjOaEj+mBteWuiOacrOe2suermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwi55So5oi25Y2U6K2wXCI+55So5oi25Y2U6K2wPC9hPuOAi+OAgeOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFBcIiB0aXRsZT1cIuWAi+S6uuS/oeaBr+S/neitt+aWuemHnVwiPuWAi+S6uuS/oeaBr+S/neitt+aWuemHnTwvYT7jgIvlj4rjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCLlhbHlkIzntrHpoJhcIj7lhbHlkIzntrHpoJg8L2E+44CL44CCJyxcblx0XHR9KSxcblx0XHQnSSBhZ3JlZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSSBhZ3JlZScsXG5cdFx0XHRqYTogJ+WQjOaEj+OBmeOCiycsXG5cdFx0XHR6aDogJ+aIkeWQjOaEjycsXG5cdFx0fSksXG5cdFx0J0kgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0kgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnLFxuXHRcdFx0amE6ICfplqLpgKPjgZnjgovopo/ntITjgpLoqq3jgb/jgIHlkIzmhI8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oiR5bey6ZiF6K+75bm25ZCM5oSP55u45YWz5p2h5qy+Jyxcblx0XHRcdCd6aC1oYW50JzogJ+aIkeW3sumWsuiugOS4puWQjOaEj+ebuOmXnOaineasvicsXG5cdFx0fSksXG5cdFx0J0ludmFsaWQgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbnZhbGlkIDJGQSB2ZXJpZmljYXRpb24gY29kZScsXG5cdFx0XHRqYTogJzJGQeiqjeiovOOCs+ODvOODieOBjOmWk+mBleOBo+OBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtaGFucyc6ICcyRkHpqozor4HnoIHplJnor68nLFxuXHRcdFx0J3poLWhhbnQnOiAnMkZB6amX6K2J56K86Yyv6KqkJyxcblx0XHR9KSxcblx0XHQnSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheWQjeOBvuOBn+OBr+ODkeOCueODr+ODvOODieOBjOmWk+mBleOBo+OBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtY24nOiAn55So5oi35ZCN5oiW5a+G56CB6ZSZ6K+vJyxcblx0XHRcdCd6aC1oayc6ICfnlKjmiLblkI3nqLHmiJblr4bnorzpjK/oqqQnLFxuXHRcdFx0J3poLXR3JzogJ+S9v+eUqOiAheWQjeeoseaIluWvhueivOmMr+iqpCcsXG5cdFx0fSksXG5cdFx0J0tlZXAgbWUgbG9nZ2VkIGluJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdLZWVwIG1lIGxvZ2dlZCBpbicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+eKtuaFi+OCkuS/neaMgScsXG5cdFx0XHQnemgtaGFucyc6ICforrDkvY/miJHnmoTnmbvlvZXnirbmgIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KiY5L2P5oiR55qE55m75YWl54uA5oWLJyxcblx0XHR9KSxcblx0XHQnTG9nZ2luZyBpbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9nZ2luZyBpbicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+OBl+OBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjnmbvlvZUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo55m75YWlJyxcblx0XHR9KSxcblx0XHRMb2dpbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODsycsXG5cdFx0XHQnemgtaGFucyc6ICfnmbvlvZUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55m75YWlJyxcblx0XHR9KSxcblx0XHQnTG9naW4gY2FuY2VsbGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbiBjYW5jZWxsZWQnLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7Pjgq3jg6Pjg7Pjgrvjg6snLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2V5Y+W5raIJyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpeWPlua2iCcsXG5cdFx0fSksXG5cdFx0J0xvZ2luIHN1Y2NlZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2luIHN1Y2NlZWQnLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7PjgavmiJDlip/jgZfjgb7jgZfjgZ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2V5oiQ5YqfJyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpeaIkOWKnycsXG5cdFx0fSksXG5cdFx0J0xvZ2luIHRva2VuIGdvdCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4gdG9rZW4gZ290Jyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44OI44O844Kv44Oz44Gu5Y+W5b6X44Gr5oiQ5Yqf44GX44G+44GX44GfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iOt+WPlueZu+W9leS7pOeJjOaIkOWKnycsXG5cdFx0XHQnemgtaGFudCc6ICfnjbLlj5bnmbvlhaXmrIrmnZbmiJDlip8nLFxuXHRcdH0pLFxuXHRcdCdOZXcgcGFzc3dvcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldyBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+aWsOOBl+OBhOODkeOCueODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICfmlrDlr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5paw5a+G56K8Jyxcblx0XHR9KSxcblx0XHQnTmV3IHBhc3N3b3JkIGlzIHJlcXVpcmVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXcgcGFzc3dvcmQgaXMgcmVxdWlyZWQnLFxuXHRcdFx0amE6ICfmlrDjgZfjgYTjg5Hjgrnjg6/jg7zjg4njgpLoqK3lrprjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6ZyA6KaB6K6+572u5paw5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+mcgOimgeioree9ruaWsOWvhueivCcsXG5cdFx0fSksXG5cdFx0UGFzc3dvcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGFzc3dvcmQnLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+WvhueivCcsXG5cdFx0fSksXG5cdFx0J1Jlc2V0IHBhc3N3b3JkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXNldCBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODieOCkuODquOCu+ODg+ODiCcsXG5cdFx0XHQnemgtaGFucyc6ICfph43nva7lr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6YeN5paw6Kit5a6a5a+G56K8Jyxcblx0XHR9KSxcblx0XHRVc2VybmFtZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdVc2VybmFtZScsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheWQjScsXG5cdFx0XHQnemgtY24nOiAn55So5oi35ZCNJyxcblx0XHRcdCd6aC1oayc6ICfnlKjmiLblkI3nqLEnLFxuXHRcdFx0J3poLXR3JzogJ+S9v+eUqOiAheWQjeeosScsXG5cdFx0fSksXG5cdFx0QWdyZWVkT3JOb3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGxlYXNlIHJlYWQgdGhlIHJlbGV2YW50IHRlcm1zLiBJZiB5b3UgYWdyZWUsIGNoZWNrIHRoZSBjaGVja2JveCB0byBjb25maXJtJyxcblx0XHRcdGphOiAn6Zai6YCj44GZ44KL6KaP57SE44KS44GK6Kqt44G/44GE44Gf44Gg44GN44CB5ZCM5oSP44GV44KM44KL5aC05ZCI44Gv44CB44OB44Kn44OD44Kv44Oc44OD44Kv44K544Gr44OB44Kn44OD44Kv44KS5YWl44KM44Gm56K66KqN44GX44Gm44GP44Gg44GV44GEJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+mYheivu+ebuOWFs+adoeasvuOAguiLpeWQjOaEj++8jOWLvumAieWkjemAieahhuS7peehruiupCcsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vplrLoroDnm7jpl5zmop3mrL7jgILoi6XlkIzmhI/vvIzli77pgbjopIfpgbjmoYbku6Xnorroqo0nLFxuXHRcdH0pLFxuXHRcdERvdWJsZUNoZWNrQWdyZWVkT3JOb3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgY2FyZWZ1bGx5IHJlYWQsIGZ1bGx5IHVuZGVyc3Rvb2QgYW5kIGFncmVlZCB0byBjb21wbHkgd2l0aCBvdXIgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCJUZXJtcyBvZiBTZXJ2aWNlXCI+VGVybXMgb2YgU2VydmljZTwvYT4sIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFBcIiB0aXRsZT1cIlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5XCI+UGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3k8L2E+IGFuZCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCJDb21tb24gUHJvZ3JhbVwiPkNvbW1vbiBQcm9ncmFtPC9hPi4nLFxuXHRcdFx0amE6ICfjgYLjgarjgZ/jga/mnKzjgrXjgqTjg4jjga7jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIuWIqeeUqOimj+e0hFwiPuWIqeeUqOimj+e0hDwvYT7jgI/jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCLlgIvkurrmg4XloLHkv53orbfmlrnph51cIj7lgIvkurrmg4XloLHkv53orbfmlrnph508L2E+44CP44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwi5YWx5ZCM57ax6aCYXCI+5YWx5ZCM57ax6aCYPC9hPuOAj+OCkuWNgeWIhuOBq+eQhuino+OBl+OAgeWQjOaEj+OBl+OBn+OBk+OBqOOBq+OBquOCiuOBvuOBmeOAgicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjlt7Lku5Tnu4bpmIXor7vjgIHlhYXliIbkuobop6PlubblkIzmhI/pgbXlrojmnKznvZHnq5nnmoTjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIueUqOaIt+WNj+iurlwiPueUqOaIt+WNj+iurjwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCLkuKrkurrkv6Hmga/kv53miqTmlrnpkohcIj7kuKrkurrkv6Hmga/kv53miqTmlrnpkog8L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwi5YWx5ZCM57qy6aKGXCI+5YWx5ZCM57qy6aKGPC9hPuOAi+OAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmgqjlt7Lku5TntLDplrHoroDjgIHlhYXliIbkuobop6PkuKblkIzmhI/pgbXlrojmnKzntrLnq5nnmoTjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIueUqOaItuWNlOitsFwiPueUqOaItuWNlOitsDwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQXCIgdGl0bGU9XCLlgIvkurrkv6Hmga/kv53orbfmlrnph51cIj7lgIvkurrkv6Hmga/kv53orbfmlrnph508L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwi5YWx5ZCM57ax6aCYXCI+5YWx5ZCM57ax6aCYPC9hPuOAi+OAgicsXG5cdFx0fSksXG5cdFx0RW1wdHkyRkE6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIDJGQSB2ZXJpZmljYXRpb24gY29kZSBjYW5ub3QgYmUgZW1wdHknLFxuXHRcdFx0amE6ICcyRkHoqo3oqLzjgrPjg7zjg4njgYzlhaXlipvjgZXjgozjgabjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWhhbnMnOiAnMkZB6aqM6K+B56CB5LiN6IO95Li656m6Jyxcblx0XHRcdCd6aC1oYW50JzogJzJGQempl+itieeivOS4jeiDveeIsuepuicsXG5cdFx0fSksXG5cdFx0RW1wdHlQYXNzd29yZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgcGFzc3dvcmQgY2Fubm90IGJlIGVtcHR5Jyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJ44GM5YWl5Yqb44GV44KM44Gm44GE44G+44Gb44KTJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvhueggeS4jeiDveS4uuepuicsXG5cdFx0XHQnemgtaGFudCc6ICflr4bnorzkuI3og73niLLnqbonLFxuXHRcdH0pLFxuXHRcdEVtcHR5VXNlcm5hbWVPclBhc3N3b3JkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSB1c2VybmFtZSBvciBwYXNzd29yZCBjYW5ub3QgYmUgZW1wdHknLFxuXHRcdFx0amE6ICfliKnnlKjogIXlkI3jgb7jgZ/jga/jg5Hjgrnjg6/jg7zjg4njgYzlhaXlipvjgZXjgozjgabjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+WQjeaIluWvhueggeS4jeiDveS4uuepuicsXG5cdFx0XHQnemgtaGsnOiAn55So5oi25ZCN56ix5oiW5a+G56K85LiN6IO954iy56m6Jyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXlkI3nqLHmiJblr4bnorzkuI3og73niLLnqbonLFxuXHRcdH0pLFxuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXR3b3JrIGVycm9yLiBSZWRpcmVjdGluZy4uLicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvOOAgeODquODgOOCpOODrOOCr+ODiOS4rS4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLjjgILph43lrprlkJHkuK3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi444CC6YeN5paw5bCO5ZCR5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0XHRTZWxlY3RlZE9yTm90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0tlZXAgbG9nZ2VkIGluIGZvciA2IG1vbnRocyBpZiBzZWxlY3RlZDsgb3RoZXJ3aXNlIHVudGlsIHRoZSBicm93c2VyIGNsb3Nlcy4nLFxuXHRcdFx0amE6ICfjg4Hjgqfjg4Pjgq/jgpLlhaXjgozjgovjgajjg63jgrDjgqTjg7PnirbmhYvjgYw244O25pyI6ZaT5L+d5oyB44GV44KM44CB5YWl44KM44Gq44GE5aC05ZCI44Gv44OW44Op44Km44K244KS6ZaJ44GY44KL44G+44Gn5L+d5oyB44GV44KM44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WLvumAieWImeS/neaMgeeZu+W9leeKtuaAgTbkuKrmnIjvvIzlkKbliJnlsIblnKjmtY/op4jlmajlhbPpl63ml7bpgIDlh7rnmbvlvZXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yu+6YG45YiZ5L+d5oyB55m75YWl54uA5oWLNuWAi+aciO+8jOWQpuWJh+Wwh+WcqOeAj+imveWZqOmXnOmWieaZgueZu+WHuuOAgicsXG5cdFx0fSksXG5cdFx0VG9vRnJlcXVlbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIHVzZXIgbG9naW4gaXMgdG9vIGZyZXF1ZW50LCBwbGVhc2UgdHJ5IGFnYWluIGluIGZpdmUgbWludXRlcycsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheOBjOmgu+e5geOBmeOBjuOCi+OBn+OCgeOAgTXliIblvozjgavlho3oqabooYzjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+eZu+W9lei/h+S6jumikee5ge+8jOivt+S6lOWIhumSn+WQjuWGjeivlScsXG5cdFx0XHQnemgtaGsnOiAn55So5oi255m75YWl6YGO5pa86aC757mB77yM6KuL5LqU5YiG6ZCY5b6M5YaN6KmmJyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXnmbvlhaXov4fkuo7popHnuYHvvIzor7fkupTliIbpkp/lkI7lho3or5UnLFxuXHRcdH0pLFxuXHRcdCdVbmV4cGVjdGVkIEFQSSByZXNwb25zZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVW5leHBlY3RlZCBBUEkgcmVzcG9uc2U6ICQxLiBSZWRpcmVjdGluZy4uLicsXG5cdFx0XHRqYTogJ+S6iOacn+OBm+OBrEFQSeOBruW/nOetlO+8miQx44CB44Oq44OA44Kk44Os44Kv44OI5LitLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aEj+WklueahEFQSeWTjeW6lO+8miQx44CC6YeN5a6a5ZCR5Lit4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+aEj+WklueahEFQSemfv+aHie+8miQx44CC6YeN5paw5bCO5ZCR5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIi8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5jb25zdCBpbml0V2luZG93TWFuYWdlciA9ICgpOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0+IHtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0cmV0dXJuIG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG59O1xuXG4vLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuY29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IGluaXRXaW5kb3dNYW5hZ2VyKCk7XG5cbmV4cG9ydCB7d2luZG93TWFuYWdlcn07XG4iLCAiaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9pbml0V2luZG93TWFuYWdlcic7XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5jb25zdCBvb3VpQ29uZmlybSA9IGFzeW5jIChvcHRpb25zOiBPTy51aS5NZXNzYWdlRGlhbG9nLlNldHVwRGF0YU1hcCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNCwgVFMyNTAzXG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRjb25zdCBpbnN0YW5jZTogT08udWkuV2luZG93SW5zdGFuY2UgPSB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3cobWVzc2FnZURpYWxvZywgb3B0aW9ucyk7XG5cblx0Y29uc3QgZGF0YTogdm9pZCA9IGF3YWl0IGluc3RhbmNlLmNsb3NlZDtcblx0Y29uc3QgX2RhdGEgPSBkYXRhIGFzIHthY3Rpb246IHN0cmluZ30gfCB2b2lkO1xuXG5cdHJldHVybiAhIShfZGF0YT8uYWN0aW9uID09PSAnYWNjZXB0Jyk7XG59O1xuXG5leHBvcnQge29vdWlDb25maXJtfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVFbGVtZW50cyA9IChpc0FncmVlVG9zOiBib29sZWFuKSA9PiB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdGNvbnN0IG5hbWVJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0aWNvbjogJ3VzZXJBdmF0YXInLFxuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdVc2VybmFtZScpLFxuXHRcdHZhbGlkYXRlOiAnbm9uLWVtcHR5Jyxcblx0fSk7XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0Y29uc3QgcHdkSW5wdXQ6IE9PLnVpLlRleHRJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdGljb246ICdrZXknLFxuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdQYXNzd29yZCcpLFxuXHRcdHR5cGU6ICdwYXNzd29yZCcsXG5cdFx0dmFsaWRhdGU6ICdub24tZW1wdHknLFxuXHR9KTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRjb25zdCBhZ3JlZVRvc0NoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBpc0FncmVlVG9zLFxuXHR9KTtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0Y29uc3QgYWdyZWVUb3NMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGFncmVlVG9zQ2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0kgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnKSxcblx0fSk7XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0Y29uc3Qga2VlcExvZ2luQ2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCgpO1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRjb25zdCBrZWVwTG9naW5MYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGtlZXBMb2dpbkNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGhlbHA6IGdldE1lc3NhZ2UoJ1NlbGVjdGVkT3JOb3QnKSxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnS2VlcCBtZSBsb2dnZWQgaW4nKSxcblx0fSk7XG5cblx0Y29uc3QgbGFiZWwgPSAoXG5cdFx0PGxhYmVsXG5cdFx0XHRjbGFzc05hbWU9e1snb28tdWktbGFiZWxXaWRnZXQnLCAnb28tdWktbGFiZWxFbGVtZW50LWxhYmVsJ119XG5cdFx0XHRzdHlsZT17e2ZvbnRTaXplOiAnOTAlJywgdGV4dEFsaWduOiAnanVzdGlmeSd9fVxuXHRcdC8+XG5cdCk7XG5cdGNvbnN0ICRsYWJlbCA9ICQobGFiZWwpIGFzIEpRdWVyeTtcblxuXHRjb25zdCAkYWdyZWVUb3M6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmFwcGVuZChhZ3JlZVRvc0xheW91dC4kZWxlbWVudCk7XG5cdGNvbnN0ICRmb3Jnb3RQYXNzd29yZDogSlF1ZXJ5ID0gJGxhYmVsXG5cdFx0LmNsb25lKClcblx0XHQuY3NzKCdmbG9hdCcsICdyaWdodCcpXG5cdFx0LmFwcGVuZChcblx0XHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOlBhc3N3b3JkUmVzZXQnKX0gdGl0bGU9e2dldE1lc3NhZ2UoJ1Jlc2V0IHBhc3N3b3JkJyl9PlxuXHRcdFx0XHR7Z2V0TWVzc2FnZSgnRm9yZ290IHBhc3N3b3JkPycpfVxuXHRcdFx0PC9hPlxuXHRcdCk7XG5cdGNvbnN0ICRpbnB1dEJveDogSlF1ZXJ5ID0gJGxhYmVsXG5cdFx0LmNsb25lKClcblx0XHQuY3NzKHtcblx0XHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0XHQnZm9udC1zaXplJzogJ2luaGVyaXQnLFxuXHRcdFx0cGFkZGluZzogJzZweCAwJyxcblx0XHR9KVxuXHRcdC5hcHBlbmQobmFtZUlucHV0LiRlbGVtZW50LmNzcygnbWFyZ2luLWJvdHRvbScsICc2cHgnKSwgcHdkSW5wdXQuJGVsZW1lbnQpO1xuXHRjb25zdCAkdG9zTGFiZWw6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmh0bWwoZ2V0TWVzc2FnZSgnaGVscCBmb3IgSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcycpKTtcblx0Y29uc3QgJHJlbWVtYmVyTWU6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmFwcGVuZChrZWVwTG9naW5MYXlvdXQuJGVsZW1lbnQuY3NzKCdtYXJnaW4tdG9wJywgJzZweCcpKTtcblxuXHRyZXR1cm4ge1xuXHRcdCRhZ3JlZVRvcyxcblx0XHQkZm9yZ290UGFzc3dvcmQsXG5cdFx0JGlucHV0Qm94LFxuXHRcdCRyZW1lbWJlck1lLFxuXHRcdCR0b3NMYWJlbCxcblx0XHRhZ3JlZVRvc0NoZWNrYm94LFxuXHRcdGtlZXBMb2dpbkNoZWNrYm94LFxuXHRcdG1lc3NhZ2VEaWFsb2csXG5cdFx0bmFtZUlucHV0LFxuXHRcdHB3ZElucHV0LFxuXHR9O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUVsZW1lbnRzfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcn0gZnJvbSAnLi9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBvb3VpUHJvbXB0ID0gYXN5bmMgKHJldHlwZVBhc3N3b3JkOiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdGNvbnN0IGNvZGVEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRjb25zdCBjb2RlSW5wdXQ6IE9PLnVpLlRleHRJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdGljb246ICdrZXknLFxuXHRcdHBsYWNlaG9sZGVyOiByZXR5cGVQYXNzd29yZCA/IGdldE1lc3NhZ2UoJ05ldyBwYXNzd29yZCcpIDogZ2V0TWVzc2FnZSgnNi1kaWdpdCBudW1iZXInKSxcblx0XHR2YWxpZGF0ZTogJ2ludGVnZXInLFxuXHR9KTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRjb25zdCBjb2RlTGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5UZXh0SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNvZGVJbnB1dCwge1xuXHRcdGFsaWduOiAndG9wJyxcblx0XHRsYWJlbDogJChcblx0XHRcdDxiIGNsYXNzTmFtZT17Wydvby11aS1tZXNzYWdlRGlhbG9nLXRpdGxlJywgJ29vLXVpLXdpbmRvdy1oZWFkJ119PlxuXHRcdFx0XHR7cmV0eXBlUGFzc3dvcmQgPyBnZXRNZXNzYWdlKCdFbnRlciBwYXNzd29yZCcpIDogZ2V0TWVzc2FnZSgnRW50ZXIgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJyl9XG5cdFx0XHQ8L2I+XG5cdFx0KSxcblx0fSk7XG5cblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtjb2RlRGlhbG9nXSk7XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0Y29uc3QgaW5zdGFuY2U6IE9PLnVpLldpbmRvd0luc3RhbmNlID0gd2luZG93TWFuYWdlci5vcGVuV2luZG93KGNvZGVEaWFsb2csIHtcblx0XHRtZXNzYWdlOiBjb2RlTGF5b3V0LiRlbGVtZW50LFxuXHR9KTtcblxuXHRyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyKCk7XG5cblx0dm9pZCBpbnN0YW5jZS5vcGVuZWQudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0Y29kZUlucHV0Lm9uKCdlbnRlcicsICgpOiB2b2lkID0+IHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0XHQod2luZG93TWFuYWdlci5nZXRDdXJyZW50V2luZG93KCkgYXMgT08udWkuV2luZG93KS5jbG9zZSh7XG5cdFx0XHRcdGFjdGlvbjogJ2FjY2VwdCcsXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRjb2RlSW5wdXQuZm9jdXMoKTtcblx0fSk7XG5cblx0Y29uc3QgZGF0YTogdm9pZCA9IGF3YWl0IGluc3RhbmNlLmNsb3NlZDtcblx0Y29uc3QgX2RhdGEgPSBkYXRhIGFzIHthY3Rpb246IHN0cmluZ30gfCB2b2lkO1xuXG5cdHJldHVybiBfZGF0YT8uYWN0aW9uID09PSAnYWNjZXB0JyA/IGNvZGVJbnB1dC5nZXRWYWx1ZSgpIDogbnVsbDtcbn07XG5cbmV4cG9ydCB7b291aVByb21wdH07XG4iLCAiaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IHJlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XG5cdCQod2luZG93KS5vZmYoe1xuXHRcdCdvcmllbnRhdGlvbmNoYW5nZSByZXNpemUnOiAod2luZG93TWFuYWdlciBhcyB1bmtub3duIGFzIHtvbldpbmRvd1Jlc2l6ZUhhbmRsZXI6ICgpID0+IHZvaWR9KVxuXHRcdFx0Lm9uV2luZG93UmVzaXplSGFuZGxlcixcblx0fSk7XG59O1xuXG5leHBvcnQge3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXJ9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBxdWVyeUxvZ2luVG9rZW4gPSBhc3luYyAoXG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2Vcbik6IFByb21pc2U8e1xuXHRsb2dpblRva2VuOiBzdHJpbmc7XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG59PiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeSh7XG5cdFx0dGV4dDogZ2V0TWVzc2FnZSgnR2V0dGluZyBsb2dpbiB0b2tlbicpLFxuXHR9KTtcblxuXHRjb25zdCBsb2dpblRva2VuOiBzdHJpbmcgPSBhd2FpdCBhcGkuZ2V0VG9rZW4oJ2xvZ2luJyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KHtcblx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdMb2dpbiB0b2tlbiBnb3QnKSxcblx0XHRkdXJhdGlvbjogLTEsXG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0bG9naW5Ub2tlbixcblx0XHR0b2FzdGlmeUluc3RhbmNlLFxuXHR9O1xufTtcblxuZXhwb3J0IHtxdWVyeUxvZ2luVG9rZW59O1xuIiwgImltcG9ydCB7ZGVsYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4uL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3QgcmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdGF3YWl0IGRlbGF5KDMgKiAxMDAwKTtcblx0bG9jYXRpb24uaHJlZiA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOlVzZXJsb2dpbicpO1xufTtcblxuZXhwb3J0IHtyZWRpcmVjdE9yaWdpbkxvZ2luUGFnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBzaG93RXJyb3IgPSAoZXJyb3I6IHVua25vd24sIHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UpOiB2b2lkID0+IHtcblx0Y29uc29sZS5lcnJvcignW0FqYXhMb2dpbl0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldHdvcmsgZXJyb3InKSxcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2Vycm9yJ1xuXHQpO1xu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QUM5QzlILFdBQVdBLE1BQU07SUFBQztFQUNuQjtBQUVBLFFBQU1oRSxnQkFBaUIrTCxXQUF5RDtBQUMvRSxRQUFJLEVBQUEsR0FBQ3BNLG9CQUFBcU0scUJBQW9CRCxLQUFLLEdBQUc7QUFDaEM7SUFDRDtBQUVBQSxVQUFNRSxlQUFlO0FBQ3JCNUMsY0FBVXlDLG9CQUFvQjtFQUMvQjtBQUNBaE0sY0FBWTRMLGVBQWUxTCxhQUFhO0FBR3hDMEcsS0FBRzZFLE9BQU9XLElBQVl6TSxXQUFXLElBQUk7QUFDdEMsQ0FBQzsiLAogICJuYW1lcyI6IFsibG9naW5FbGVtZW50U2VsZWN0b3IiLCAiY29uZmlnS2V5IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQxMyIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFkZExpc3RlbmVyIiwgIiRlbGVtZW50IiwgImV2ZW50TGlzdGVuZXIiLCAib24iLCAiZmlsdGVyQWx0ZXJlZENsaWNrcyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMSIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNhbmNlbCIsICJ6aCIsICJMb2dpbiIsICJQYXNzd29yZCIsICJVc2VybmFtZSIsICJBZ3JlZWRPck5vdCIsICJEb3VibGVDaGVja0FncmVlZE9yTm90IiwgIkVtcHR5MkZBIiwgIkVtcHR5UGFzc3dvcmQiLCAiRW1wdHlVc2VybmFtZU9yUGFzc3dvcmQiLCAiU2VsZWN0ZWRPck5vdCIsICJUb29GcmVxdWVudCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAiT08iLCAidWkiLCAiV2luZG93TWFuYWdlciIsICJ3aW5kb3dNYW5hZ2VyIiwgIm9vdWlDb25maXJtIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAib3B0aW9ucyIsICJtZXNzYWdlRGlhbG9nIiwgIk1lc3NhZ2VEaWFsb2ciLCAiYWRkV2luZG93cyIsICJpbnN0YW5jZSIsICJvcGVuV2luZG93IiwgImRhdGEiLCAiY2xvc2VkIiwgIl9kYXRhIiwgImFjdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImNoZWNrVmFsaWQiLCAiX3JlZjIiLCAiYWdyZWVUb3NDaGVja2JveCIsICJuYW1lSW5wdXQiLCAicHdkSW5wdXQiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJpc0FncmVlVG9zIiwgImlzU2VsZWN0ZWQiLCAiaXNGaWxsIiwgImdldFZhbHVlIiwgInRyaW0iLCAiaW5jbHVkZXMiLCAiaGlkZVRvYXN0IiwgImNsZWFyV2luZG93cyIsICJtZXNzYWdlIiwgIiQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJhY3Rpb25zIiwgImxhYmVsIiwgImZsYWdzIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAiaXNWYWxpZCIsICJfeDIiLCAiX3gzIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJnZW5lcmF0ZUVsZW1lbnRzIiwgIlRleHRJbnB1dFdpZGdldCIsICJpY29uIiwgInBsYWNlaG9sZGVyIiwgInZhbGlkYXRlIiwgInR5cGUiLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJzZWxlY3RlZCIsICJhZ3JlZVRvc0xheW91dCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJrZWVwTG9naW5DaGVja2JveCIsICJrZWVwTG9naW5MYXlvdXQiLCAiaGVscCIsICJjbGFzc05hbWUiLCAic3R5bGUiLCAiZm9udFNpemUiLCAidGV4dEFsaWduIiwgIiRsYWJlbCIsICIkYWdyZWVUb3MiLCAiY2xvbmUiLCAiYXBwZW5kIiwgIiRmb3Jnb3RQYXNzd29yZCIsICJjc3MiLCAiaHJlZiIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJ0aXRsZSIsICIkaW5wdXRCb3giLCAiZGlzcGxheSIsICJwYWRkaW5nIiwgIiR0b3NMYWJlbCIsICJodG1sIiwgIiRyZW1lbWJlck1lIiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyIiwgIndpbmRvdyIsICJvZmYiLCAib25XaW5kb3dSZXNpemVIYW5kbGVyIiwgIm9vdWlQcm9tcHQiLCAiX3JlZjMiLCAicmV0eXBlUGFzc3dvcmQiLCAiY29kZURpYWxvZyIsICJjb2RlSW5wdXQiLCAiY29kZUxheW91dCIsICJvcGVuZWQiLCAidGhlbiIsICJnZXRDdXJyZW50V2luZG93IiwgImNsb3NlIiwgImZvY3VzIiwgIl94NCIsICJpbXBvcnRfZXh0X2dhZGdldDgiLCAicXVlcnlMb2dpblRva2VuIiwgIl9yZWY0IiwgImxvZ2luVG9rZW4iLCAiZ2V0VG9rZW4iLCAiX3g1IiwgImltcG9ydF9leHRfZ2FkZ2V0OSIsICJyZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSIsICJfcmVmNSIsICJkZWxheSIsICJsb2NhdGlvbiIsICJpbXBvcnRfZXh0X2dhZGdldDEwIiwgInNob3dFcnJvciIsICJlcnJvciIsICJjb25zb2xlIiwgImltcG9ydF9leHRfZ2FkZ2V0MTIiLCAiYWpheExvZ2luIiwgImxvZ2luIiwgIl9yZWY2IiwgImxvZ2luQ29udGludWUiLCAiX3Jlc3BvbnNlJGNsaWVudGxvZ2luIiwgIl9yZXNwb25zZSRjbGllbnRsb2dpbjIiLCAicGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxvZ2ludG9rZW4iLCAibG9naW5yZXR1cm51cmwiLCAidXNlcm5hbWUiLCAicGFzc3dvcmQiLCAicmVtZW1iZXJNZSIsICJsb2dpbmNvbnRpbnVlIiwgInZhbHVlIiwgInJldHlwZSIsICJPQVRIVG9rZW4iLCAicmVzcG9uc2UiLCAicG9zdCIsICJzdGF0dXMiLCAicmVsb2FkIiwgIm1lc3NhZ2Vjb2RlIiwgInJlcGxhY2UiLCAiY2hlY2siLCAiX3JlZjciLCAibGFzdElzQWdyZWVUb3MiLCAibGFzdFRvYXN0aWZ5SW5zdGFuY2UiLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJQcm9jZXNzIiwgInNpemUiLCAiZ2V0Qm9keSIsICJpbml0QXV0b0xvZ2luIiwgIiRib2R5IiwgImNvbmZpZyIsICJnZXQiLCAid2dVc2VyTmFtZSIsICIkbG9naW5FbGVtZW50IiwgImZpbmQiLCAibGVuZ3RoIiwgImFwcGVuZFRvIiwgImZha2VUb2FzdGlmeUluc3RhbmNlIiwgImV2ZW50IiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAicHJldmVudERlZmF1bHQiLCAic2V0Il0KfQo=
