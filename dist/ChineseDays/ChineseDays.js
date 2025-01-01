/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT|attribution=Yawei sun}}'
 *
 * @base {@link https://github.com/vsme/chinese-days}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ChineseDays}
 * @license MIT {@link https://github.com/vsme/chinese-days/blob/main/LICENSE}
 */

/**
 * MIT License
 *
 * Copyright (c) 2024 Yawei sun
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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

// dist/ChineseDays/ChineseDays.js
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F2 = function() {
      };
      return { s: F2, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F2 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u2 = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u2 = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u2) throw o;
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/ChineseDays/ChineseDays.ts
var ChineseDays_exports = {};
__export(ChineseDays_exports, {
  findWorkday: () => z,
  getDayDetail: () => U,
  getHolidaysInRange: () => W,
  getLunarDate: () => O,
  getLunarDatesInRange: () => E,
  getSolarDateFromLunar: () => R,
  getSolarTermDate: () => S,
  getSolarTerms: () => J,
  getSolarTermsInRange: () => K,
  getWorkdaysInRange: () => P,
  isHoliday: () => N,
  isInLieu: () => q,
  isWorkday: () => f
});
module.exports = __toCommonJS(ChineseDays_exports);
var x = Object.defineProperty;
var B = (r, t, e) => t in r ? x(r, t, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: e
}) : r[t] = e;
var c = (r, t, e) => B(r, typeof t != "symbol" ? t + "" : t, e);
var d = class d2 {
  constructor(t) {
    c(this, "_date");
    t instanceof d2 ? this._date = new Date(t.toDate()) : t instanceof Date ? this._date = new Date(t) : typeof t == "string" || typeof t == "number" ? (this._date = new Date(t), typeof t == "string" && isNaN(this._date.getTime()) && (this._date = new Date(t.replace(/-/g, "/")))) : this._date = /* @__PURE__ */ new Date();
  }
  toDate() {
    return this._date;
  }
  isValid() {
    return !isNaN(this._date.getTime());
  }
  diff(t, e = "day") {
    const a = new d2(t).toDate(), s = this._date.getTime() - a.getTime();
    switch (e) {
      case "year":
        return this._date.getFullYear() - a.getFullYear();
      case "month":
        return (this._date.getFullYear() - a.getFullYear()) * 12 + (this._date.getMonth() - a.getMonth());
      case "day":
      default:
        return Math.floor(s / (1e3 * 60 * 60 * 24));
    }
  }
  startOf(t) {
    const e = new Date(this._date);
    switch (t) {
      case "year":
        e.setMonth(0), e.setDate(1), e.setHours(0, 0, 0, 0);
        break;
      case "month":
        e.setDate(1), e.setHours(0, 0, 0, 0);
        break;
      case "day":
        e.setHours(0, 0, 0, 0);
        break;
    }
    return new d2(e);
  }
  endOf(t) {
    const e = new Date(this._date);
    switch (t) {
      case "year":
        e.setMonth(11), e.setDate(31), e.setHours(23, 59, 59, 999);
        break;
      case "month":
        e.setDate(new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate()), e.setHours(23, 59, 59, 999);
        break;
      case "day":
        e.setHours(23, 59, 59, 999);
        break;
    }
    return new d2(e);
  }
  add(t, e) {
    const a = new Date(this._date);
    switch (e) {
      case "year":
        a.setFullYear(a.getFullYear() + t);
        break;
      case "month":
        a.setMonth(a.getMonth() + t);
        break;
      case "day":
        a.setDate(a.getDate() + t);
        break;
    }
    return new d2(a);
  }
  subtract(t, e) {
    return this.add(-t, e);
  }
  format(t) {
    const e = {
      YYYY: this._date.getFullYear(),
      MM: (this._date.getMonth() + 1).toString().padStart(2, "0"),
      DD: this._date.getDate().toString().padStart(2, "0"),
      HH: this._date.getHours().toString().padStart(2, "0"),
      mm: this._date.getMinutes().toString().padStart(2, "0"),
      ss: this._date.getSeconds().toString().padStart(2, "0"),
      dddd: d2.daysOfWeek[this._date.getDay()]
    };
    return t.replace(/YYYY|MM|DD|HH|mm|ss|dddd/g, (a) => e[a].toString());
  }
  year(t) {
    if (t === void 0) return this._date.getFullYear();
    const e = new Date(this._date);
    return e.setFullYear(t), new d2(e);
  }
  month(t) {
    if (t === void 0) return this._date.getMonth();
    const e = new Date(this._date);
    return e.setMonth(t), new d2(e);
  }
  date(t) {
    if (t === void 0) return this._date.getDate();
    const e = new Date(this._date);
    return e.setDate(t), new d2(e);
  }
  day(t) {
    if (t === void 0) return this._date.getDay();
    {
      const e = this._date.getDay(), a = t - e, s = new Date(this._date);
      return s.setDate(this._date.getDate() + a), new d2(s);
    }
  }
  isBefore(t) {
    const e = new d2(t).toDate();
    return this._date.getTime() < e.getTime();
  }
  isAfter(t) {
    const e = new d2(t).toDate();
    return this._date.getTime() > e.getTime();
  }
  isSame(t, e = "day") {
    const a = new d2(t).toDate();
    switch (e) {
      case "year":
        return this._date.getFullYear() === a.getFullYear();
      case "month":
        return this._date.getFullYear() === a.getFullYear() && this._date.getMonth() === a.getMonth();
      case "day":
      default:
        return this._date.getFullYear() === a.getFullYear() && this._date.getMonth() === a.getMonth() && this._date.getDate() === a.getDate();
    }
  }
  isBetween(t, e, a) {
    const s = new d2(t).startOf(a).toDate(), i = new d2(e).endOf(a).toDate(), o = this.toDate();
    return o >= s && o <= i;
  }
};
c(d, "daysOfWeek", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
var M = d;
var h = (r) => new M(r);
var w = (r) => h(r).startOf("day");
var D = (r, t) => {
  r = w(r), t = w(t);
  const e = t.diff(r, "day");
  return Array.from({
    length: e + 1
  }, (a, s) => r.add(s, "day"));
};
var A = {
  // 1999 元旦 1 天、春节、劳动节、国庆节放假 3天
  1999: {
    "New Year's Day,元旦": 1,
    "Spring Festival,春节": 3,
    "Labour Day,劳动节": 3,
    "National Day,国庆节": 3
  },
  // 2008 劳动节改为 1 天，增加清明、端午、中秋各 1 天
  2008: {
    "Tomb-sweeping Day,清明": 1,
    "Labour Day,劳动节": 1,
    "Dragon Boat Festival,端午": 1,
    "Mid-autumn Festival,中秋": 1
  },
  // 2014 春节剔除除夕，改为初一、二、三，依旧 3 天
  // 2015 增加 中国人民抗日战争暨世界反法西斯战争胜利70周年纪念日 1 天
  2015: {
    "Anti-Fascist 70th Day,中国人民抗日战争暨世界反法西斯战争胜利70周年纪念日": 1
  },
  // 2025 春节和劳动节 各增加 1 天
  2025: {
    "Spring Festival,春节": 4,
    "Labour Day,劳动节": 2
  }
};
var C = class {
  constructor() {
    c(this, "dayDetails", {});
    c(this, "holidays", {});
    c(this, "workdays", {});
    c(this, "inLieuDays", {});
  }
  /** year at */
  y(t) {
    return this.dayDetails.year = t, this;
  }
  /** 查询某年 节假日天数 */
  getHolidayDays(t, e) {
    let a = 0;
    for (var _i = 0, _Object$entries = Object.entries(A); _i < _Object$entries.length; _i++) {
      const [s, i] = _Object$entries[_i];
      if (parseInt(s) > t) break;
      i[e] !== void 0 && (a = i[e]);
    }
    return a;
  }
  mark(t) {
    return this.dayDetails.holiday = t, this;
  }
  save(t, e, a) {
    if (!this.dayDetails.year) throw new Error("should set year before saving holiday");
    if (!this.dayDetails.holiday) throw new Error("should set holiday before saving holiday");
    this.dayDetails.month = t, this.dayDetails.day = e, this.dayDetails.dayType = a;
    const s = h("".concat(this.dayDetails.year, "-").concat(t, "-").concat(e)).format("YYYY-MM-DD"), i = this.getHolidayDays(this.dayDetails.year, this.dayDetails.holiday), o = "".concat(this.dayDetails.holiday, ",").concat(i);
    return a === 2 ? this.holidays[s] = o : a === 1 ? this.workdays[s] = o : a === 3 && (this.inLieuDays[s] = o), this;
  }
  to(t, e) {
    if (!this.dayDetails.holiday || !this.dayDetails.year || !this.dayDetails.month || !this.dayDetails.day) throw new Error("should set year/month/day before saving holiday range");
    const a = h("".concat(this.dayDetails.year, "-").concat(this.dayDetails.month, "-").concat(this.dayDetails.day)), s = h("".concat(this.dayDetails.year, "-").concat(t, "-").concat(e));
    if (s.isBefore(a) || s.isSame(a)) throw new Error("end date should be after start date");
    const i = this.getHolidayDays(this.dayDetails.year, this.dayDetails.holiday), o = "".concat(this.dayDetails.holiday, ",").concat(i), l = s.diff(a, "day");
    for (let n = 1; n <= l; n++) {
      const _ = a.add(n, "day").format("YYYY-MM-DD");
      this.dayDetails.dayType === 2 ? this.holidays[_] = o : this.dayDetails.dayType === 1 ? this.workdays[_] = o : this.dayDetails.dayType === 3 && (this.inLieuDays[_] = o);
    }
    return this;
  }
  /** work day */
  w(t, e) {
    return this.save(
      t,
      e,
      1
      /* Workday */
    );
  }
  /** rest */
  r(t, e) {
    return this.save(
      t,
      e,
      2
      /* Holiday */
    );
  }
  /** in-lieu */
  i(t, e) {
    return this.save(
      t,
      e,
      3
      /* InLieu */
    );
  }
  /** New Year's Day 元旦 */
  ny() {
    return this.mark(
      "New Year's Day,元旦"
      /* NY */
    );
  }
  /** Spring Festival 春节 */
  s() {
    return this.mark(
      "Spring Festival,春节"
      /* S */
    );
  }
  /** Tomb-sweeping Day 清明 */
  t() {
    return this.mark(
      "Tomb-sweeping Day,清明"
      /* T */
    );
  }
  /** Labour Day 五一 */
  l() {
    return this.mark(
      "Labour Day,劳动节"
      /* L */
    );
  }
  /** Dragon Boat Festival 端午 */
  d() {
    return this.mark(
      "Dragon Boat Festival,端午"
      /* D */
    );
  }
  /** National Day 国庆节 */
  n() {
    return this.mark(
      "National Day,国庆节"
      /* N */
    );
  }
  /** Mid-autumn Festival 中秋 */
  m() {
    return this.mark(
      "Mid-autumn Festival,中秋"
      /* M */
    );
  }
  /** Anti-Fascist 70th Day 中国人民抗日战争暨世界反法西斯战争胜利70周年纪念日 */
  a() {
    return this.mark(
      "Anti-Fascist 70th Day,中国人民抗日战争暨世界反法西斯战争胜利70周年纪念日"
      /* A */
    );
  }
};
var j = () => {
  const r = new C();
  return r.y(2025).ny().r(1, 1).s().r(1, 28).to(2, 4).w(1, 26).w(2, 8).i(2, 3).i(2, 4).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 27).i(5, 5).d().r(5, 31).to(6, 2).n().r(10, 1).to(10, 8).w(9, 28).w(10, 11).i(10, 7).i(10, 8).m().r(10, 6), r.y(2024).ny().r(1, 1).s().r(2, 10).to(2, 17).w(2, 4).w(2, 18).i(2, 15).to(2, 16).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(5, 1).to(5, 5).w(4, 28).w(5, 11).i(5, 2).to(5, 3).d().r(6, 10).m().r(9, 15).to(9, 17).w(9, 14).i(9, 16).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2023).ny().r(1, 1).to(1, 2).s().r(1, 21).to(1, 27).w(1, 28).to(1, 29).i(1, 26).to(1, 27).t().r(4, 5).l().r(4, 29).to(5, 3).w(4, 23).w(5, 6).i(5, 2).to(5, 3).d().r(6, 22).to(6, 24).w(6, 25).i(6, 23).m().r(9, 29).n().r(9, 30).to(10, 6).w(10, 7).to(10, 8).i(10, 5).to(10, 6), r.y(2022).ny().r(1, 1).to(1, 3).s().r(1, 31).to(2, 6).w(1, 29).w(1, 30).i(2, 3).to(2, 4).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 4).w(4, 24).w(5, 7).i(5, 3).to(5, 4).d().r(6, 3).to(6, 5).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).w(10, 9).i(10, 6).to(10, 7).ny().r(12, 31), r.y(2021).ny().r(1, 1).to(1, 3).s().r(2, 11).to(2, 17).w(2, 7).w(2, 20).i(2, 16).to(2, 17).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 5).w(4, 25).w(5, 8).i(5, 4).to(5, 5).d().r(6, 12).to(6, 14).m().r(9, 19).to(9, 21).w(9, 18).i(9, 20).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), r.y(2020).ny().r(1, 1).s().r(1, 24).to(2, 2).w(1, 19).i(1, 29).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 26).w(5, 9).i(5, 4).to(5, 5).d().r(6, 25).to(6, 27).w(6, 28).i(6, 26).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8), r.y(2019).ny().r(1, 1).s().r(2, 4).to(2, 10).w(2, 2).to(2, 3).i(2, 4).i(2, 8).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 4).w(4, 28).w(5, 5).i(5, 2).i(5, 3).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2018).ny().r(1, 1).s().r(2, 15).to(2, 21).w(2, 11).w(2, 24).i(2, 19).to(2, 21).t().r(4, 5).to(4, 7).w(4, 8).i(4, 6).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 18).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).m().r(9, 24).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), r.y(2017).ny().r(1, 1).to(1, 2).s().r(1, 27).to(2, 2).w(1, 22).w(2, 4).i(2, 1).to(2, 2).t().r(4, 2).to(4, 4).w(4, 1).i(4, 3).l().r(5, 1).d().r(5, 28).to(5, 30).w(5, 27).i(5, 29).n().r(10, 1).to(10, 8).w(9, 30).i(10, 6).m().r(10, 4), r.y(2016).ny().r(1, 1).s().r(2, 7).to(2, 13).w(2, 6).w(2, 14).i(2, 11).to(2, 12).t().r(4, 4).l().r(5, 1).to(5, 2).d().r(6, 9).to(6, 11).w(6, 12).i(6, 10).m().r(9, 15).to(9, 17).w(9, 18).i(9, 16).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), r.y(2015).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(2, 18).to(2, 24).w(2, 15).w(2, 28).i(2, 23).to(2, 24).t().r(4, 5).to(4, 6).l().r(5, 1).d().r(6, 20).r(6, 22).m().r(9, 27).n().r(10, 1).to(10, 7).w(10, 10).i(10, 7).a().r(9, 3).to(9, 4).w(9, 6).i(9, 4), r.y(2014).ny().r(1, 1).s().r(1, 31).to(2, 6).w(1, 26).w(2, 8).i(2, 5).to(2, 6).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 2).m().r(9, 8).n().r(10, 1).to(10, 7).w(9, 28).w(10, 11).i(10, 6).to(10, 7), r.y(2013).ny().r(1, 1).to(1, 3).w(1, 5).to(1, 6).i(1, 2).to(1, 3).s().r(2, 9).to(2, 15).w(2, 16).to(2, 17).i(2, 14).to(2, 15).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(4, 29).to(5, 1).w(4, 27).to(4, 28).i(4, 29).to(4, 30).d().r(6, 10).to(6, 12).w(6, 8).to(6, 9).i(6, 10).to(6, 11).m().r(9, 19).to(9, 21).w(9, 22).i(9, 20).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2012).ny().r(1, 1).to(1, 3).i(1, 3).s().r(1, 22).to(1, 28).w(1, 21).w(1, 29).i(1, 26).to(1, 27).t().r(4, 2).to(4, 4).w(3, 31).w(4, 1).i(4, 2).to(4, 3).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 22).r(6, 24).m().r(9, 30).n().r(10, 1).to(10, 7).w(9, 29).i(10, 5), r.y(2011).ny().r(1, 1).to(1, 3).s().r(2, 2).to(2, 8).w(1, 30).w(2, 12).i(2, 7).to(2, 8).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 2).d().r(6, 4).r(6, 6).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7).ny().w(12, 31), r.y(2010).ny().r(1, 1).to(1, 3).s().r(2, 13).to(2, 19).w(2, 20).to(2, 21).i(2, 18).to(2, 19).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 3).d().r(6, 14).to(6, 16).w(6, 12).to(6, 13).i(6, 14).to(6, 15).m().r(9, 22).to(9, 24).w(9, 19).w(9, 25).i(9, 23).to(9, 24).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), r.y(2009).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(1, 25).to(1, 31).w(1, 24).w(2, 1).i(1, 29).to(1, 30).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).d().r(5, 28).to(5, 30).w(5, 31).i(5, 29).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8).m().r(10, 3), r.y(2008).ny().r(1, 1).s().r(2, 6).to(2, 12).w(2, 2).to(2, 3).i(2, 11).to(2, 12).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(9, 29).to(10, 5).w(9, 27).to(9, 28).i(9, 29).to(9, 30), r.y(2007).ny().r(1, 1).to(1, 3).i(1, 2).to(1, 3).s().r(2, 18).to(2, 24).w(2, 17).w(2, 25).i(2, 22).to(2, 23).l().r(5, 1).to(5, 7).w(4, 28).to(4, 29).i(5, 4).i(5, 7).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), r.y(2006).ny().r(1, 1).to(1, 3).s().r(1, 29).to(2, 4).w(1, 28).w(2, 5).i(2, 2).to(2, 3).l().r(5, 1).to(5, 7).w(4, 29).to(4, 30).i(5, 4).to(5, 5).n().r(10, 1).to(10, 7).w(9, 30).w(10, 8).i(10, 5).to(10, 6).ny().w(12, 30).to(12, 31), r.y(2005).ny().r(1, 1).to(1, 3).s().r(2, 9).to(2, 15).w(2, 5).to(2, 6).i(2, 14).to(2, 15).l().r(5, 1).to(5, 7).w(4, 30).w(5, 8).i(5, 5).to(5, 6).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), r.y(2004).ny().r(1, 1).s().r(1, 22).to(1, 28).w(1, 17).to(1, 18).i(1, 27).to(1, 28).l().r(5, 1).to(5, 7).w(5, 8).to(5, 9).i(5, 6).to(5, 7).n().r(10, 1).to(10, 7).w(10, 9).to(10, 10).i(10, 6).to(10, 7), {
    holidays: r.holidays,
    workdays: r.workdays,
    inLieuDays: r.inLieuDays
  };
};
var {
  holidays: g,
  workdays: p,
  inLieuDays: I
} = j();
var u = (...r) => {
  if (r.length !== 1) return r.map((e) => u(e));
  const t = w(r[0]);
  if (!t.isValid()) throw new Error("unsupported type ".concat(typeof t, ", expected type is Date or Dayjs"));
  return t;
};
var N = (r) => !f(r);
var f = (r) => {
  const t = u(r), e = t.day(), a = t.format("YYYY-MM-DD");
  return !!(p[a] || e >= 1 && e <= 5 && !g[a]);
};
var q = (r) => (r = u(r), !!I[r.format("YYYY-MM-DD")]);
var U = (r) => {
  r = u(r);
  const t = r.format("YYYY-MM-DD");
  if (p[t]) return {
    date: t,
    work: true,
    name: p[t]
  };
  if (g[t]) return {
    date: t,
    work: false,
    name: g[t]
  };
  {
    const e = r.day();
    return {
      date: t,
      work: e !== 0 && e !== 6,
      name: r.format("dddd")
    };
  }
};
var W = (r, t, e = true) => (r = u(r), t = u(t), e ? D(r, t).filter(N).map((a) => a.format("YYYY-MM-DD")) : D(r, t).filter((a) => g[a.format("YYYY-MM-DD")]).map((a) => a.format("YYYY-MM-DD")));
var P = (r, t, e = true) => (r = u(r), t = u(t), e ? D(r, t).filter(f).map((a) => a.format("YYYY-MM-DD")) : D(r, t).filter((a) => f(a) && a.day() >= 1 && a.day() <= 5).map((a) => a.format("YYYY-MM-DD")));
var z = (r = 0, t = h()) => {
  if (t = w(t), r === 0) {
    if (f(t)) return t.format("YYYY-MM-DD");
    r = 1;
  }
  const e = r > 0 ? 1 : -1;
  let a = Math.abs(r);
  for (; a > 0; ) t = t.add(e, "day"), f(t) && a--;
  return t.format("YYYY-MM-DD");
};
var V = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  findWorkday: z,
  getDayDetail: U,
  getHolidaysInRange: W,
  getWorkdaysInRange: P,
  isHoliday: N,
  isInLieu: q,
  isWorkday: f
}, Symbol.toStringTag, {
  value: "Module"
}));
var Z = {
  the_beginning_of_spring: [4.6295, 3.87],
  rain_water: [19.4599, 18.73],
  the_waking_of_insects: [6.3926, 5.63],
  the_spring_equinox: [21.4155, 20.646],
  pure_brightness: [5.59, 4.81],
  grain_rain: [20.888, 20.1],
  the_beginning_of_summer: [6.318, 5.52],
  lesser_fullness_of_grain: [21.86, 21.04],
  grain_in_beard: [6.5, 5.678],
  the_summer_solstice: [22.2, 21.37],
  lesser_heat: [7.928, 7.108],
  greater_heat: [23.65, 22.83],
  the_beginning_of_autumn: [28.35, 7.5],
  the_end_of_heat: [23.95, 23.13],
  white_dew: [8.44, 7.646],
  the_autumn_equinox: [23.822, 23.042],
  code_dew: [9.098, 8.318],
  frost_descent: [24.218, 23.438],
  the_beginning_of_winter: [8.218, 7.438],
  lesser_snow: [23.08, 22.36],
  greater_snow: [7.9, 7.18],
  the_winter_solstice: [22.6, 21.94],
  lesser_cold: [6.11, 5.4055],
  greater_cold: [20.84, 20.12]
};
var T = {
  1: ["lesser_cold", "greater_cold"],
  2: ["the_beginning_of_spring", "rain_water"],
  3: ["the_waking_of_insects", "the_spring_equinox"],
  4: ["pure_brightness", "grain_rain"],
  5: ["the_beginning_of_summer", "lesser_fullness_of_grain"],
  6: ["grain_in_beard", "the_summer_solstice"],
  7: ["lesser_heat", "greater_heat"],
  8: ["the_beginning_of_autumn", "the_end_of_heat"],
  9: ["white_dew", "the_autumn_equinox"],
  10: ["code_dew", "frost_descent"],
  11: ["the_beginning_of_winter", "lesser_snow"],
  12: ["greater_snow", "the_winter_solstice"]
};
var G = {
  "2026_rain_water": -1,
  "2084_the_spring_equinox": 1,
  "1911_the_beginning_of_summer": 1,
  "2008_lesser_fullness_of_grain": 1,
  "1902_grain_in_beard": 1,
  "1928_the_summer_solstice": 1,
  "1925_lesser_heat": 1,
  "2016_lesser_heat": 1,
  "1922_greater_heat": 1,
  "2002_the_beginning_of_autumn": 1,
  "1927_white_dew": 1,
  "1942_the_autumn_equinox": 1,
  "2089_frost_descent": 1,
  "2089_the_beginning_of_winter": 1,
  "1978_lesser_snow": 1,
  "1954_greater_snow": 1,
  "1918_the_winter_solstice": -1,
  "2021_the_winter_solstice": -1,
  "1982_lesser_cold": 1,
  "2019_lesser_cold": -1,
  "2000_greater_cold": 1,
  "2082_greater_cold": 1
};
var v = {
  lesser_cold: "小寒",
  greater_cold: "大寒",
  the_beginning_of_spring: "立春",
  rain_water: "雨水",
  the_waking_of_insects: "惊蛰",
  the_spring_equinox: "春分",
  pure_brightness: "清明",
  grain_rain: "谷雨",
  the_beginning_of_summer: "立夏",
  lesser_fullness_of_grain: "小满",
  grain_in_beard: "芒种",
  the_summer_solstice: "夏至",
  lesser_heat: "小暑",
  greater_heat: "大暑",
  the_beginning_of_autumn: "立秋",
  the_end_of_heat: "处暑",
  white_dew: "白露",
  the_autumn_equinox: "秋分",
  code_dew: "寒露",
  frost_descent: "霜降",
  the_beginning_of_winter: "立冬",
  lesser_snow: "小雪",
  greater_snow: "大雪",
  the_winter_solstice: "冬至"
};
var S = (r, t, e) => {
  const a = r >= 2e3 ? 21 : 20, s = r % 100, i = 0.2422, o = Z[e][a === 21 ? 1 : 0];
  let l = Math.floor(s / 4);
  ["lesser_cold", "greater_cold", "the_beginning_of_spring", "rain_water"].includes(e) && (l = Math.floor((s - 1) / 4));
  let n = Math.floor(s * i + o) - l;
  const _ = G["".concat(r, "_").concat(e)];
  return _ && (n += _), h("".concat(r, "-").concat(t, "-").concat(n)).format("YYYY-MM-DD");
};
var J = (r, t) => {
  const e = [];
  let a = w(r);
  const s = w(t || r);
  for (; a.isBefore(s) || a.isSame(s); ) {
    const i = a.year(), o = a.month() + 1;
    T[o].forEach((l) => {
      const n = h(S(i, o, l));
      (n != null && n.isBefore(s) || n != null && n.isSame(s)) && (n != null && n.isAfter(a) || n != null && n.isSame(a)) && e.push({
        date: n.format("YYYY-MM-DD"),
        term: l,
        name: v[l],
        index: 1
      });
    }), o === 12 ? a = a.add(1, "year").startOf("year") : a = a.add(1, "month").startOf("month");
  }
  return e;
};
var K = (r, t) => {
  let e = w(r).subtract(1, "month");
  const a = w(t || r).add(1, "month"), s = [];
  for (; e.isBefore(a) || e.isSame(a); ) {
    const o = e.year(), l = e.month() + 1;
    T[l].forEach((n) => {
      const _ = h(S(o, l, n));
      s.push({
        term: n,
        date: _
      });
    }), e.month() === 11 ? e = e.add(1, "year").startOf("year") : e = e.add(1, "month").startOf("month");
  }
  const i = [];
  return s.forEach((o, l) => {
    for (let n = o.date; s[l + 1] && n.isBefore(s[l + 1].date); n = n.add(1, "day")) i.push({
      day: n,
      term: o.term,
      name: v[o.term],
      index: n.diff(o.date, "day") + 1
    });
  }), t || (t = r), i.filter((o) => o.day.isBetween(r, t, "day")).map((o) => ({
    date: o.day.format("YYYY-MM-DD"),
    term: o.term,
    name: o.name,
    index: o.index
  }));
};
var Q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getSolarTermDate: S,
  getSolarTerms: J,
  getSolarTermsInRange: K
}, Symbol.toStringTag, {
  value: "Module"
}));
var m = [
  19416,
  19168,
  42352,
  21717,
  53856,
  55632,
  91476,
  22176,
  39632,
  21970,
  //1900-1909
  19168,
  42422,
  42192,
  53840,
  119381,
  46400,
  54944,
  44450,
  38320,
  84343,
  //1910-1919
  18800,
  42160,
  46261,
  27216,
  27968,
  109396,
  11104,
  38256,
  21234,
  18800,
  //1920-1929
  25958,
  54432,
  59984,
  28309,
  23248,
  11104,
  100067,
  37600,
  116951,
  51536,
  //1930-1939
  54432,
  120998,
  46416,
  22176,
  107956,
  9680,
  37584,
  53938,
  43344,
  46423,
  //1940-1949
  27808,
  46416,
  86869,
  19872,
  42416,
  83315,
  21168,
  43432,
  59728,
  27296,
  //1950-1959
  44710,
  43856,
  19296,
  43748,
  42352,
  21088,
  62051,
  55632,
  23383,
  22176,
  //1960-1969
  38608,
  19925,
  19152,
  42192,
  54484,
  53840,
  54616,
  46400,
  46752,
  103846,
  //1970-1979
  38320,
  18864,
  43380,
  42160,
  45690,
  27216,
  27968,
  44870,
  43872,
  38256,
  //1980-1989
  19189,
  18800,
  25776,
  29859,
  59984,
  27480,
  21952,
  43872,
  38613,
  37600,
  //1990-1999
  51552,
  55636,
  54432,
  55888,
  30034,
  22176,
  43959,
  9680,
  37584,
  51893,
  //2000-2009
  43344,
  46240,
  47780,
  44368,
  21977,
  19360,
  42416,
  86390,
  21168,
  43312,
  //2010-2019
  31060,
  27296,
  44368,
  23378,
  19296,
  42726,
  42208,
  53856,
  60005,
  54576,
  //2020-2029
  23200,
  30371,
  38608,
  19195,
  19152,
  42192,
  118966,
  53840,
  54560,
  56645,
  //2030-2039
  46496,
  22224,
  21938,
  18864,
  42359,
  42160,
  43600,
  111189,
  27936,
  44448,
  //2040-2049
  84835,
  37744,
  18936,
  18800,
  25776,
  92326,
  59984,
  27424,
  108228,
  43744,
  //2050-2059
  41696,
  53987,
  51552,
  54615,
  54432,
  55888,
  23893,
  22176,
  42704,
  21972,
  //2060-2069
  21200,
  43448,
  43344,
  46240,
  46758,
  44368,
  21920,
  43940,
  42416,
  21168,
  //2070-2079
  45683,
  26928,
  29495,
  27296,
  44368,
  84821,
  19296,
  42352,
  21732,
  53600,
  //2080-2089
  59752,
  54560,
  55968,
  92838,
  22224,
  19168,
  43476,
  41680,
  53584,
  62034,
  //2090-2099
  54560
  //2100
];
var $ = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
var X = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"];
var tt = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
var et = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
var rt = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
var H = (r) => {
  let t = 348;
  for (let e = 32768; e > 8; e >>= 1) t += m[r - 1900] & e ? 1 : 0;
  return t + F(r);
};
var k = (r) => m[r - 1900] & 15;
var F = (r) => k(r) ? m[r - 1900] & 65536 ? 30 : 29 : 0;
var Y = (r) => tt[r % 10] + et[r % 12];
var b = (r, t) => m[r - 1900] & 65536 >> t ? 30 : 29;
var at = (r) => rt[(r - 4) % 12];
var ot = (r) => {
  const t = ["初", "十", "廿", "三十"];
  if (r === 10) return "初十";
  if (r === 20) return "二十";
  if (r === 30) return "三十";
  const e = Math.floor(r / 10), a = r % 10;
  return t[e] + (a ? $[a] : "");
};
var O = (r) => {
  const t = new Array(7).fill(0);
  let e = 0, a = 0;
  const s = h(new Date(1900, 0, 31)), i = h(r);
  let o = i.diff(s, "day");
  t[5] = o + 40, t[4] = 14;
  let l = 1900;
  for (; l < 2100 && o > 0; l++) e = H(l), o -= e, t[4] += 12;
  o < 0 && (o += e, l--, t[4] -= 12), t[0] = l, t[3] = l - 1864, a = k(l), t[6] = 0;
  for (let n = 1; n < 13 && o >= 0; n++) a > 0 && n === a + 1 && t[6] === 0 ? (--n, t[6] = 1, e = F(l)) : e = b(l, n), t[6] === 1 && n === a + 1 && (t[6] = 0), o -= e, t[6] === 0 && t[4]++, t[1] = n;
  return o === 0 && a > 0 && t[6] === 1 ? t[6] = 0 : o < 0 && (o += e, t[1]--, t[4]--), t[2] = o + 1, {
    date: i.format("YYYY-MM-DD"),
    // 公历日期
    lunarYear: t[0],
    // 农历年份
    lunarMon: t[1] + 1,
    // 农历月份
    lunarDay: t[2],
    // 农历日期
    isLeap: !!t[6],
    // 是否闰月
    zodiac: at(t[0]),
    // 生肖
    yearCyl: Y(t[3]),
    // 年柱
    monCyl: Y(t[4]),
    // 月柱
    dayCyl: Y(t[5]),
    // 日柱
    lunarYearCN: "".concat(t[0].toString().split("").map((n) => $[Number(n)]).join("")),
    // 农历年份中文表示
    lunarMonCN: "".concat(X[t[1]], "月"),
    // 农历月份中文表示
    lunarDayCN: ot(t[2])
    // 农历日期中文表示
  };
};
var E = (r, t) => {
  const e = h(r), a = h(t), s = [];
  for (let i = e; i.isBefore(a) || i.isSame(a, "day"); i = i.add(1, "day")) s.push(O(i));
  return s;
};
var R = (r) => {
  const t = h(r), e = t.year(), a = t.month() + 1, s = t.date();
  let i = 0;
  for (let y = 1900; y < e; y++) i += H(y);
  let o = k(e);
  for (let y = 1; y < a; y++) i += b(e, y), y === o && (i += F(e));
  i += s - 1;
  const l = h(new Date(1900, 0, 31)), n = l.add(i, "day").format("YYYY-MM-DD");
  let _ = i, L;
  return o === a && (_ += b(e, a), L = l.add(_, "day").format("YYYY-MM-DD")), {
    date: n,
    leapMonthDate: L
  };
};
var nt = {
  getLunarDate: O,
  getLunarDatesInRange: E,
  getSolarDateFromLunar: R
};
var st = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nt,
  getLunarDate: O,
  getLunarDatesInRange: E,
  getSolarDateFromLunar: R
}, Symbol.toStringTag, {
  value: "Module"
}));
var lt = {
  ...V,
  ...Q,
  ...st
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NoaW5lc2VEYXlzL0NoaW5lc2VEYXlzLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jaGluZXNlLWRheXNAMS40LjAvbm9kZV9tb2R1bGVzL2NoaW5lc2UtZGF5cy9kaXN0L2luZGV4LmVzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICdjaGluZXNlLWRheXMnO1xuIiwgInZhciB4ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIEIgPSAociwgdCwgZSkgPT4gdCBpbiByID8geChyLCB0LCB7IGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAsIHZhbHVlOiBlIH0pIDogclt0XSA9IGU7XG52YXIgYyA9IChyLCB0LCBlKSA9PiBCKHIsIHR5cGVvZiB0ICE9IFwic3ltYm9sXCIgPyB0ICsgXCJcIiA6IHQsIGUpO1xuY29uc3QgZCA9IGNsYXNzIGQge1xuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgYyh0aGlzLCBcIl9kYXRlXCIpO1xuICAgIHQgaW5zdGFuY2VvZiBkID8gdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQudG9EYXRlKCkpIDogdCBpbnN0YW5jZW9mIERhdGUgPyB0aGlzLl9kYXRlID0gbmV3IERhdGUodCkgOiB0eXBlb2YgdCA9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB0ID09IFwibnVtYmVyXCIgPyAodGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQpLCB0eXBlb2YgdCA9PSBcInN0cmluZ1wiICYmIGlzTmFOKHRoaXMuX2RhdGUuZ2V0VGltZSgpKSAmJiAodGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQucmVwbGFjZSgvLS9nLCBcIi9cIikpKSkgOiB0aGlzLl9kYXRlID0gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCk7XG4gIH1cbiAgdG9EYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICB9XG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuICFpc05hTih0aGlzLl9kYXRlLmdldFRpbWUoKSk7XG4gIH1cbiAgZGlmZih0LCBlID0gXCJkYXlcIikge1xuICAgIGNvbnN0IGEgPSBuZXcgZCh0KS50b0RhdGUoKSwgcyA9IHRoaXMuX2RhdGUuZ2V0VGltZSgpIC0gYS5nZXRUaW1lKCk7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpIC0gYS5nZXRGdWxsWWVhcigpO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIHJldHVybiAodGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpIC0gYS5nZXRGdWxsWWVhcigpKSAqIDEyICsgKHRoaXMuX2RhdGUuZ2V0TW9udGgoKSAtIGEuZ2V0TW9udGgoKSk7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihzIC8gKDFlMyAqIDYwICogNjAgKiAyNCkpO1xuICAgIH1cbiAgfVxuICBzdGFydE9mKHQpIHtcbiAgICBjb25zdCBlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICBlLnNldE1vbnRoKDApLCBlLnNldERhdGUoMSksIGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIGUuc2V0RGF0ZSgxKSwgZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICAgIGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGQoZSk7XG4gIH1cbiAgZW5kT2YodCkge1xuICAgIGNvbnN0IGUgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyXCI6XG4gICAgICAgIGUuc2V0TW9udGgoMTEpLCBlLnNldERhdGUoMzEpLCBlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIGUuc2V0RGF0ZShuZXcgRGF0ZShlLmdldEZ1bGxZZWFyKCksIGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKSksIGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICAgIGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuZXcgZChlKTtcbiAgfVxuICBhZGQodCwgZSkge1xuICAgIGNvbnN0IGEgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyXCI6XG4gICAgICAgIGEuc2V0RnVsbFllYXIoYS5nZXRGdWxsWWVhcigpICsgdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIGEuc2V0TW9udGgoYS5nZXRNb250aCgpICsgdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRheVwiOlxuICAgICAgICBhLnNldERhdGUoYS5nZXREYXRlKCkgKyB0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuZXcgZChhKTtcbiAgfVxuICBzdWJ0cmFjdCh0LCBlKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKC10LCBlKTtcbiAgfVxuICBmb3JtYXQodCkge1xuICAgIGNvbnN0IGUgPSB7XG4gICAgICBZWVlZOiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBNTTogKHRoaXMuX2RhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgREQ6IHRoaXMuX2RhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgSEg6IHRoaXMuX2RhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICAgIG1tOiB0aGlzLl9kYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICAgIHNzOiB0aGlzLl9kYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICAgIGRkZGQ6IGQuZGF5c09mV2Vla1t0aGlzLl9kYXRlLmdldERheSgpXVxuICAgIH07XG4gICAgcmV0dXJuIHQucmVwbGFjZSgvWVlZWXxNTXxERHxISHxtbXxzc3xkZGRkL2csIChhKSA9PiBlW2FdLnRvU3RyaW5nKCkpO1xuICB9XG4gIHllYXIodCkge1xuICAgIGlmICh0ID09PSB2b2lkIDApIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgIHJldHVybiBlLnNldEZ1bGxZZWFyKHQpLCBuZXcgZChlKTtcbiAgfVxuICBtb250aCh0KSB7XG4gICAgaWYgKHQgPT09IHZvaWQgMCkgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCBlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgcmV0dXJuIGUuc2V0TW9udGgodCksIG5ldyBkKGUpO1xuICB9XG4gIGRhdGUodCkge1xuICAgIGlmICh0ID09PSB2b2lkIDApIHJldHVybiB0aGlzLl9kYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCBlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgcmV0dXJuIGUuc2V0RGF0ZSh0KSwgbmV3IGQoZSk7XG4gIH1cbiAgZGF5KHQpIHtcbiAgICBpZiAodCA9PT0gdm9pZCAwKVxuICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RGF5KCk7XG4gICAge1xuICAgICAgY29uc3QgZSA9IHRoaXMuX2RhdGUuZ2V0RGF5KCksIGEgPSB0IC0gZSwgcyA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgICAgcmV0dXJuIHMuc2V0RGF0ZSh0aGlzLl9kYXRlLmdldERhdGUoKSArIGEpLCBuZXcgZChzKTtcbiAgICB9XG4gIH1cbiAgaXNCZWZvcmUodCkge1xuICAgIGNvbnN0IGUgPSBuZXcgZCh0KS50b0RhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRUaW1lKCkgPCBlLmdldFRpbWUoKTtcbiAgfVxuICBpc0FmdGVyKHQpIHtcbiAgICBjb25zdCBlID0gbmV3IGQodCkudG9EYXRlKCk7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0VGltZSgpID4gZS5nZXRUaW1lKCk7XG4gIH1cbiAgaXNTYW1lKHQsIGUgPSBcImRheVwiKSB7XG4gICAgY29uc3QgYSA9IG5ldyBkKHQpLnRvRGF0ZSgpO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBcInllYXJcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gYS5nZXRGdWxsWWVhcigpO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCkgPT09IGEuZ2V0RnVsbFllYXIoKSAmJiB0aGlzLl9kYXRlLmdldE1vbnRoKCkgPT09IGEuZ2V0TW9udGgoKTtcbiAgICAgIGNhc2UgXCJkYXlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCkgPT09IGEuZ2V0RnVsbFllYXIoKSAmJiB0aGlzLl9kYXRlLmdldE1vbnRoKCkgPT09IGEuZ2V0TW9udGgoKSAmJiB0aGlzLl9kYXRlLmdldERhdGUoKSA9PT0gYS5nZXREYXRlKCk7XG4gICAgfVxuICB9XG4gIGlzQmV0d2Vlbih0LCBlLCBhKSB7XG4gICAgY29uc3QgcyA9IG5ldyBkKHQpLnN0YXJ0T2YoYSkudG9EYXRlKCksIGkgPSBuZXcgZChlKS5lbmRPZihhKS50b0RhdGUoKSwgbyA9IHRoaXMudG9EYXRlKCk7XG4gICAgcmV0dXJuIG8gPj0gcyAmJiBvIDw9IGk7XG4gIH1cbn07XG5jKGQsIFwiZGF5c09mV2Vla1wiLCBbXG4gIFwiU3VuZGF5XCIsXG4gIFwiTW9uZGF5XCIsXG4gIFwiVHVlc2RheVwiLFxuICBcIldlZG5lc2RheVwiLFxuICBcIlRodXJzZGF5XCIsXG4gIFwiRnJpZGF5XCIsXG4gIFwiU2F0dXJkYXlcIlxuXSk7XG5sZXQgTSA9IGQ7XG5jb25zdCBoID0gKHIpID0+IG5ldyBNKHIpLCB3ID0gKHIpID0+IGgocikuc3RhcnRPZihcImRheVwiKSwgRCA9IChyLCB0KSA9PiB7XG4gIHIgPSB3KHIpLCB0ID0gdyh0KTtcbiAgY29uc3QgZSA9IHQuZGlmZihyLCBcImRheVwiKTtcbiAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IGUgKyAxIH0sIChhLCBzKSA9PiByLmFkZChzLCBcImRheVwiKSk7XG59LCBBID0ge1xuICAvLyAxOTk5IOWFg+aXpiAxIOWkqeOAgeaYpeiKguOAgeWKs+WKqOiKguOAgeWbveW6huiKguaUvuWBhyAz5aSpXG4gIDE5OTk6IHtcbiAgICBcIk5ldyBZZWFyJ3MgRGF5LOWFg+aXplwiOiAxLFxuICAgIFwiU3ByaW5nIEZlc3RpdmFsLOaYpeiKglwiOiAzLFxuICAgIFwiTGFib3VyIERheSzlirPliqjoioJcIjogMyxcbiAgICBcIk5hdGlvbmFsIERheSzlm73luoboioJcIjogM1xuICB9LFxuICAvLyAyMDA4IOWKs+WKqOiKguaUueS4uiAxIOWkqe+8jOWinuWKoOa4heaYjuOAgeerr+WNiOOAgeS4reeni+WQhCAxIOWkqVxuICAyMDA4OiB7XG4gICAgXCJUb21iLXN3ZWVwaW5nIERheSzmuIXmmI5cIjogMSxcbiAgICBcIkxhYm91ciBEYXks5Yqz5Yqo6IqCXCI6IDEsXG4gICAgXCJEcmFnb24gQm9hdCBGZXN0aXZhbCznq6/ljYhcIjogMSxcbiAgICBcIk1pZC1hdXR1bW4gRmVzdGl2YWws5Lit56eLXCI6IDFcbiAgfSxcbiAgLy8gMjAxNCDmmKXoioLliZTpmaTpmaTlpJXvvIzmlLnkuLrliJ3kuIDjgIHkuozjgIHkuInvvIzkvp3ml6cgMyDlpKlcbiAgLy8gMjAxNSDlop7liqAg5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6UgMSDlpKlcbiAgMjAxNToge1xuICAgIFwiQW50aS1GYXNjaXN0IDcwdGggRGF5LOS4reWbveS6uuawkeaKl+aXpeaImOS6ieaaqOS4lueVjOWPjeazleilv+aWr+aImOS6ieiDnOWIqTcw5ZGo5bm057qq5b+15pelXCI6IDFcbiAgfSxcbiAgLy8gMjAyNSDmmKXoioLlkozlirPliqjoioIg5ZCE5aKe5YqgIDEg5aSpXG4gIDIwMjU6IHtcbiAgICBcIlNwcmluZyBGZXN0aXZhbCzmmKXoioJcIjogNCxcbiAgICBcIkxhYm91ciBEYXks5Yqz5Yqo6IqCXCI6IDJcbiAgfVxufTtcbmNsYXNzIEMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjKHRoaXMsIFwiZGF5RGV0YWlsc1wiLCB7fSk7XG4gICAgYyh0aGlzLCBcImhvbGlkYXlzXCIsIHt9KTtcbiAgICBjKHRoaXMsIFwid29ya2RheXNcIiwge30pO1xuICAgIGModGhpcywgXCJpbkxpZXVEYXlzXCIsIHt9KTtcbiAgfVxuICAvKiogeWVhciBhdCAqL1xuICB5KHQpIHtcbiAgICByZXR1cm4gdGhpcy5kYXlEZXRhaWxzLnllYXIgPSB0LCB0aGlzO1xuICB9XG4gIC8qKiDmn6Xor6Lmn5DlubQg6IqC5YGH5pel5aSp5pWwICovXG4gIGdldEhvbGlkYXlEYXlzKHQsIGUpIHtcbiAgICBsZXQgYSA9IDA7XG4gICAgZm9yIChjb25zdCBbcywgaV0gb2YgT2JqZWN0LmVudHJpZXMoQSkpIHtcbiAgICAgIGlmIChwYXJzZUludChzKSA+IHQpIGJyZWFrO1xuICAgICAgaVtlXSAhPT0gdm9pZCAwICYmIChhID0gaVtlXSk7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG4gIG1hcmsodCkge1xuICAgIHJldHVybiB0aGlzLmRheURldGFpbHMuaG9saWRheSA9IHQsIHRoaXM7XG4gIH1cbiAgc2F2ZSh0LCBlLCBhKSB7XG4gICAgaWYgKCF0aGlzLmRheURldGFpbHMueWVhcilcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInNob3VsZCBzZXQgeWVhciBiZWZvcmUgc2F2aW5nIGhvbGlkYXlcIik7XG4gICAgaWYgKCF0aGlzLmRheURldGFpbHMuaG9saWRheSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInNob3VsZCBzZXQgaG9saWRheSBiZWZvcmUgc2F2aW5nIGhvbGlkYXlcIik7XG4gICAgdGhpcy5kYXlEZXRhaWxzLm1vbnRoID0gdCwgdGhpcy5kYXlEZXRhaWxzLmRheSA9IGUsIHRoaXMuZGF5RGV0YWlscy5kYXlUeXBlID0gYTtcbiAgICBjb25zdCBzID0gaChgJHt0aGlzLmRheURldGFpbHMueWVhcn0tJHt0fS0ke2V9YCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSwgaSA9IHRoaXMuZ2V0SG9saWRheURheXModGhpcy5kYXlEZXRhaWxzLnllYXIsIHRoaXMuZGF5RGV0YWlscy5ob2xpZGF5KSwgbyA9IGAke3RoaXMuZGF5RGV0YWlscy5ob2xpZGF5fSwke2l9YDtcbiAgICByZXR1cm4gYSA9PT0gMiA/IHRoaXMuaG9saWRheXNbc10gPSBvIDogYSA9PT0gMSA/IHRoaXMud29ya2RheXNbc10gPSBvIDogYSA9PT0gMyAmJiAodGhpcy5pbkxpZXVEYXlzW3NdID0gbyksIHRoaXM7XG4gIH1cbiAgdG8odCwgZSkge1xuICAgIGlmICghdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkgfHwgIXRoaXMuZGF5RGV0YWlscy55ZWFyIHx8ICF0aGlzLmRheURldGFpbHMubW9udGggfHwgIXRoaXMuZGF5RGV0YWlscy5kYXkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzaG91bGQgc2V0IHllYXIvbW9udGgvZGF5IGJlZm9yZSBzYXZpbmcgaG9saWRheSByYW5nZVwiKTtcbiAgICBjb25zdCBhID0gaChcbiAgICAgIGAke3RoaXMuZGF5RGV0YWlscy55ZWFyfS0ke3RoaXMuZGF5RGV0YWlscy5tb250aH0tJHt0aGlzLmRheURldGFpbHMuZGF5fWBcbiAgICApLCBzID0gaChgJHt0aGlzLmRheURldGFpbHMueWVhcn0tJHt0fS0ke2V9YCk7XG4gICAgaWYgKHMuaXNCZWZvcmUoYSkgfHwgcy5pc1NhbWUoYSkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbmQgZGF0ZSBzaG91bGQgYmUgYWZ0ZXIgc3RhcnQgZGF0ZVwiKTtcbiAgICBjb25zdCBpID0gdGhpcy5nZXRIb2xpZGF5RGF5cyh0aGlzLmRheURldGFpbHMueWVhciwgdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkpLCBvID0gYCR7dGhpcy5kYXlEZXRhaWxzLmhvbGlkYXl9LCR7aX1gLCBsID0gcy5kaWZmKGEsIFwiZGF5XCIpO1xuICAgIGZvciAobGV0IG4gPSAxOyBuIDw9IGw7IG4rKykge1xuICAgICAgY29uc3QgXyA9IGEuYWRkKG4sIFwiZGF5XCIpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgICB0aGlzLmRheURldGFpbHMuZGF5VHlwZSA9PT0gMiA/IHRoaXMuaG9saWRheXNbX10gPSBvIDogdGhpcy5kYXlEZXRhaWxzLmRheVR5cGUgPT09IDEgPyB0aGlzLndvcmtkYXlzW19dID0gbyA6IHRoaXMuZGF5RGV0YWlscy5kYXlUeXBlID09PSAzICYmICh0aGlzLmluTGlldURheXNbX10gPSBvKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqIHdvcmsgZGF5ICovXG4gIHcodCwgZSkge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgZSxcbiAgICAgIDFcbiAgICAgIC8qIFdvcmtkYXkgKi9cbiAgICApO1xuICB9XG4gIC8qKiByZXN0ICovXG4gIHIodCwgZSkge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgZSxcbiAgICAgIDJcbiAgICAgIC8qIEhvbGlkYXkgKi9cbiAgICApO1xuICB9XG4gIC8qKiBpbi1saWV1ICovXG4gIGkodCwgZSkge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgZSxcbiAgICAgIDNcbiAgICAgIC8qIEluTGlldSAqL1xuICAgICk7XG4gIH1cbiAgLyoqIE5ldyBZZWFyJ3MgRGF5IOWFg+aXpiAqL1xuICBueSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJOZXcgWWVhcidzIERheSzlhYPml6ZcIlxuICAgICAgLyogTlkgKi9cbiAgICApO1xuICB9XG4gIC8qKiBTcHJpbmcgRmVzdGl2YWwg5pil6IqCICovXG4gIHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiU3ByaW5nIEZlc3RpdmFsLOaYpeiKglwiXG4gICAgICAvKiBTICovXG4gICAgKTtcbiAgfVxuICAvKiogVG9tYi1zd2VlcGluZyBEYXkg5riF5piOICovXG4gIHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiVG9tYi1zd2VlcGluZyBEYXks5riF5piOXCJcbiAgICAgIC8qIFQgKi9cbiAgICApO1xuICB9XG4gIC8qKiBMYWJvdXIgRGF5IOS6lOS4gCAqL1xuICBsKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIkxhYm91ciBEYXks5Yqz5Yqo6IqCXCJcbiAgICAgIC8qIEwgKi9cbiAgICApO1xuICB9XG4gIC8qKiBEcmFnb24gQm9hdCBGZXN0aXZhbCDnq6/ljYggKi9cbiAgZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJEcmFnb24gQm9hdCBGZXN0aXZhbCznq6/ljYhcIlxuICAgICAgLyogRCAqL1xuICAgICk7XG4gIH1cbiAgLyoqIE5hdGlvbmFsIERheSDlm73luoboioIgKi9cbiAgbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJOYXRpb25hbCBEYXks5Zu95bqG6IqCXCJcbiAgICAgIC8qIE4gKi9cbiAgICApO1xuICB9XG4gIC8qKiBNaWQtYXV0dW1uIEZlc3RpdmFsIOS4reeniyAqL1xuICBtKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIk1pZC1hdXR1bW4gRmVzdGl2YWws5Lit56eLXCJcbiAgICAgIC8qIE0gKi9cbiAgICApO1xuICB9XG4gIC8qKiBBbnRpLUZhc2Npc3QgNzB0aCBEYXkg5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6UgKi9cbiAgYSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJBbnRpLUZhc2Npc3QgNzB0aCBEYXks5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6VcIlxuICAgICAgLyogQSAqL1xuICAgICk7XG4gIH1cbn1cbmNvbnN0IGogPSAoKSA9PiB7XG4gIGNvbnN0IHIgPSBuZXcgQygpO1xuICByZXR1cm4gci55KDIwMjUpLm55KCkucigxLCAxKS5zKCkucigxLCAyOCkudG8oMiwgNCkudygxLCAyNikudygyLCA4KS5pKDIsIDMpLmkoMiwgNCkudCgpLnIoNCwgNCkudG8oNCwgNikubCgpLnIoNSwgMSkudG8oNSwgNSkudyg0LCAyNykuaSg1LCA1KS5kKCkucig1LCAzMSkudG8oNiwgMikubigpLnIoMTAsIDEpLnRvKDEwLCA4KS53KDksIDI4KS53KDEwLCAxMSkuaSgxMCwgNykuaSgxMCwgOCkubSgpLnIoMTAsIDYpLCByLnkoMjAyNCkubnkoKS5yKDEsIDEpLnMoKS5yKDIsIDEwKS50bygyLCAxNykudygyLCA0KS53KDIsIDE4KS5pKDIsIDE1KS50bygyLCAxNikudCgpLnIoNCwgNCkudG8oNCwgNikudyg0LCA3KS5pKDQsIDUpLmwoKS5yKDUsIDEpLnRvKDUsIDUpLncoNCwgMjgpLncoNSwgMTEpLmkoNSwgMikudG8oNSwgMykuZCgpLnIoNiwgMTApLm0oKS5yKDksIDE1KS50byg5LCAxNykudyg5LCAxNCkuaSg5LCAxNikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIHIueSgyMDIzKS5ueSgpLnIoMSwgMSkudG8oMSwgMikucygpLnIoMSwgMjEpLnRvKDEsIDI3KS53KDEsIDI4KS50bygxLCAyOSkuaSgxLCAyNikudG8oMSwgMjcpLnQoKS5yKDQsIDUpLmwoKS5yKDQsIDI5KS50byg1LCAzKS53KDQsIDIzKS53KDUsIDYpLmkoNSwgMikudG8oNSwgMykuZCgpLnIoNiwgMjIpLnRvKDYsIDI0KS53KDYsIDI1KS5pKDYsIDIzKS5tKCkucig5LCAyOSkubigpLnIoOSwgMzApLnRvKDEwLCA2KS53KDEwLCA3KS50bygxMCwgOCkuaSgxMCwgNSkudG8oMTAsIDYpLCByLnkoMjAyMikubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDEsIDMxKS50bygyLCA2KS53KDEsIDI5KS53KDEsIDMwKS5pKDIsIDMpLnRvKDIsIDQpLnQoKS5yKDQsIDMpLnRvKDQsIDUpLncoNCwgMikuaSg0LCA0KS5sKCkucig0LCAzMCkudG8oNSwgNCkudyg0LCAyNCkudyg1LCA3KS5pKDUsIDMpLnRvKDUsIDQpLmQoKS5yKDYsIDMpLnRvKDYsIDUpLm0oKS5yKDksIDEwKS50byg5LCAxMikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA4KS53KDEwLCA5KS5pKDEwLCA2KS50bygxMCwgNykubnkoKS5yKDEyLCAzMSksIHIueSgyMDIxKS5ueSgpLnIoMSwgMSkudG8oMSwgMykucygpLnIoMiwgMTEpLnRvKDIsIDE3KS53KDIsIDcpLncoMiwgMjApLmkoMiwgMTYpLnRvKDIsIDE3KS50KCkucig0LCAzKS50byg0LCA1KS5sKCkucig1LCAxKS50byg1LCA1KS53KDQsIDI1KS53KDUsIDgpLmkoNSwgNCkudG8oNSwgNSkuZCgpLnIoNiwgMTIpLnRvKDYsIDE0KS5tKCkucig5LCAxOSkudG8oOSwgMjEpLncoOSwgMTgpLmkoOSwgMjApLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyNikudygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAyMCkubnkoKS5yKDEsIDEpLnMoKS5yKDEsIDI0KS50bygyLCAyKS53KDEsIDE5KS5pKDEsIDI5KS50KCkucig0LCA0KS50byg0LCA2KS5sKCkucig1LCAxKS50byg1LCA1KS53KDQsIDI2KS53KDUsIDkpLmkoNSwgNCkudG8oNSwgNSkuZCgpLnIoNiwgMjUpLnRvKDYsIDI3KS53KDYsIDI4KS5pKDYsIDI2KS5uKCkucigxMCwgMSkudG8oMTAsIDgpLncoOSwgMjcpLncoMTAsIDEwKS5pKDEwLCA3KS50bygxMCwgOCksIHIueSgyMDE5KS5ueSgpLnIoMSwgMSkucygpLnIoMiwgNCkudG8oMiwgMTApLncoMiwgMikudG8oMiwgMykuaSgyLCA0KS5pKDIsIDgpLnQoKS5yKDQsIDUpLnRvKDQsIDcpLmwoKS5yKDUsIDEpLnRvKDUsIDQpLncoNCwgMjgpLncoNSwgNSkuaSg1LCAyKS5pKDUsIDMpLmQoKS5yKDYsIDcpLnRvKDYsIDkpLm0oKS5yKDksIDEzKS50byg5LCAxNSkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIHIueSgyMDE4KS5ueSgpLnIoMSwgMSkucygpLnIoMiwgMTUpLnRvKDIsIDIxKS53KDIsIDExKS53KDIsIDI0KS5pKDIsIDE5KS50bygyLCAyMSkudCgpLnIoNCwgNSkudG8oNCwgNykudyg0LCA4KS5pKDQsIDYpLmwoKS5yKDQsIDI5KS50byg1LCAxKS53KDQsIDI4KS5pKDQsIDMwKS5kKCkucig2LCAxOCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS50byg5LCAzMCkuaSgxMCwgNCkudG8oMTAsIDUpLm0oKS5yKDksIDI0KS5ueSgpLnIoMTIsIDMwKS50bygxMiwgMzEpLncoMTIsIDI5KS5pKDEyLCAzMSksIHIueSgyMDE3KS5ueSgpLnIoMSwgMSkudG8oMSwgMikucygpLnIoMSwgMjcpLnRvKDIsIDIpLncoMSwgMjIpLncoMiwgNCkuaSgyLCAxKS50bygyLCAyKS50KCkucig0LCAyKS50byg0LCA0KS53KDQsIDEpLmkoNCwgMykubCgpLnIoNSwgMSkuZCgpLnIoNSwgMjgpLnRvKDUsIDMwKS53KDUsIDI3KS5pKDUsIDI5KS5uKCkucigxMCwgMSkudG8oMTAsIDgpLncoOSwgMzApLmkoMTAsIDYpLm0oKS5yKDEwLCA0KSwgci55KDIwMTYpLm55KCkucigxLCAxKS5zKCkucigyLCA3KS50bygyLCAxMykudygyLCA2KS53KDIsIDE0KS5pKDIsIDExKS50bygyLCAxMikudCgpLnIoNCwgNCkubCgpLnIoNSwgMSkudG8oNSwgMikuZCgpLnIoNiwgOSkudG8oNiwgMTEpLncoNiwgMTIpLmkoNiwgMTApLm0oKS5yKDksIDE1KS50byg5LCAxNykudyg5LCAxOCkuaSg5LCAxNikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA4KS50bygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAxNSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLncoMSwgNCkuaSgxLCAyKS5zKCkucigyLCAxOCkudG8oMiwgMjQpLncoMiwgMTUpLncoMiwgMjgpLmkoMiwgMjMpLnRvKDIsIDI0KS50KCkucig0LCA1KS50byg0LCA2KS5sKCkucig1LCAxKS5kKCkucig2LCAyMCkucig2LCAyMikubSgpLnIoOSwgMjcpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgMTApLmkoMTAsIDcpLmEoKS5yKDksIDMpLnRvKDksIDQpLncoOSwgNikuaSg5LCA0KSwgci55KDIwMTQpLm55KCkucigxLCAxKS5zKCkucigxLCAzMSkudG8oMiwgNikudygxLCAyNikudygyLCA4KS5pKDIsIDUpLnRvKDIsIDYpLnQoKS5yKDQsIDUpLnRvKDQsIDcpLmwoKS5yKDUsIDEpLnRvKDUsIDMpLncoNSwgNCkuaSg1LCAyKS5kKCkucig2LCAyKS5tKCkucig5LCA4KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjgpLncoMTAsIDExKS5pKDEwLCA2KS50bygxMCwgNyksIHIueSgyMDEzKS5ueSgpLnIoMSwgMSkudG8oMSwgMykudygxLCA1KS50bygxLCA2KS5pKDEsIDIpLnRvKDEsIDMpLnMoKS5yKDIsIDkpLnRvKDIsIDE1KS53KDIsIDE2KS50bygyLCAxNykuaSgyLCAxNCkudG8oMiwgMTUpLnQoKS5yKDQsIDQpLnRvKDQsIDYpLncoNCwgNykuaSg0LCA1KS5sKCkucig0LCAyOSkudG8oNSwgMSkudyg0LCAyNykudG8oNCwgMjgpLmkoNCwgMjkpLnRvKDQsIDMwKS5kKCkucig2LCAxMCkudG8oNiwgMTIpLncoNiwgOCkudG8oNiwgOSkuaSg2LCAxMCkudG8oNiwgMTEpLm0oKS5yKDksIDE5KS50byg5LCAyMSkudyg5LCAyMikuaSg5LCAyMCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIHIueSgyMDEyKS5ueSgpLnIoMSwgMSkudG8oMSwgMykuaSgxLCAzKS5zKCkucigxLCAyMikudG8oMSwgMjgpLncoMSwgMjEpLncoMSwgMjkpLmkoMSwgMjYpLnRvKDEsIDI3KS50KCkucig0LCAyKS50byg0LCA0KS53KDMsIDMxKS53KDQsIDEpLmkoNCwgMikudG8oNCwgMykubCgpLnIoNCwgMjkpLnRvKDUsIDEpLncoNCwgMjgpLmkoNCwgMzApLmQoKS5yKDYsIDIyKS5yKDYsIDI0KS5tKCkucig5LCAzMCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS5pKDEwLCA1KSwgci55KDIwMTEpLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCAyKS50bygyLCA4KS53KDEsIDMwKS53KDIsIDEyKS5pKDIsIDcpLnRvKDIsIDgpLnQoKS5yKDQsIDMpLnRvKDQsIDUpLncoNCwgMikuaSg0LCA0KS5sKCkucig0LCAzMCkudG8oNSwgMikuZCgpLnIoNiwgNCkucig2LCA2KS5tKCkucig5LCAxMCkudG8oOSwgMTIpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOCkudG8oMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KS5ueSgpLncoMTIsIDMxKSwgci55KDIwMTApLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCAxMykudG8oMiwgMTkpLncoMiwgMjApLnRvKDIsIDIxKS5pKDIsIDE4KS50bygyLCAxOSkudCgpLnIoNCwgMykudG8oNCwgNSkubCgpLnIoNSwgMSkudG8oNSwgMykuZCgpLnIoNiwgMTQpLnRvKDYsIDE2KS53KDYsIDEyKS50byg2LCAxMykuaSg2LCAxNCkudG8oNiwgMTUpLm0oKS5yKDksIDIyKS50byg5LCAyNCkudyg5LCAxOSkudyg5LCAyNSkuaSg5LCAyMykudG8oOSwgMjQpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyNikudygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAwOSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLncoMSwgNCkuaSgxLCAyKS5zKCkucigxLCAyNSkudG8oMSwgMzEpLncoMSwgMjQpLncoMiwgMSkuaSgxLCAyOSkudG8oMSwgMzApLnQoKS5yKDQsIDQpLnRvKDQsIDYpLmwoKS5yKDUsIDEpLnRvKDUsIDMpLmQoKS5yKDUsIDI4KS50byg1LCAzMCkudyg1LCAzMSkuaSg1LCAyOSkubigpLnIoMTAsIDEpLnRvKDEwLCA4KS53KDksIDI3KS53KDEwLCAxMCkuaSgxMCwgNykudG8oMTAsIDgpLm0oKS5yKDEwLCAzKSwgci55KDIwMDgpLm55KCkucigxLCAxKS5zKCkucigyLCA2KS50bygyLCAxMikudygyLCAyKS50bygyLCAzKS5pKDIsIDExKS50bygyLCAxMikudCgpLnIoNCwgNCkudG8oNCwgNikubCgpLnIoNSwgMSkudG8oNSwgMykudyg1LCA0KS5pKDUsIDIpLmQoKS5yKDYsIDcpLnRvKDYsIDkpLm0oKS5yKDksIDEzKS50byg5LCAxNSkubigpLnIoOSwgMjkpLnRvKDEwLCA1KS53KDksIDI3KS50byg5LCAyOCkuaSg5LCAyOSkudG8oOSwgMzApLCByLnkoMjAwNykubnkoKS5yKDEsIDEpLnRvKDEsIDMpLmkoMSwgMikudG8oMSwgMykucygpLnIoMiwgMTgpLnRvKDIsIDI0KS53KDIsIDE3KS53KDIsIDI1KS5pKDIsIDIyKS50bygyLCAyMykubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAyOCkudG8oNCwgMjkpLmkoNSwgNCkuaSg1LCA3KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjkpLnRvKDksIDMwKS5pKDEwLCA0KS50bygxMCwgNSkubnkoKS5yKDEyLCAzMCkudG8oMTIsIDMxKS53KDEyLCAyOSkuaSgxMiwgMzEpLCByLnkoMjAwNikubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDEsIDI5KS50bygyLCA0KS53KDEsIDI4KS53KDIsIDUpLmkoMiwgMikudG8oMiwgMykubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAyOSkudG8oNCwgMzApLmkoNSwgNCkudG8oNSwgNSkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDMwKS53KDEwLCA4KS5pKDEwLCA1KS50bygxMCwgNikubnkoKS53KDEyLCAzMCkudG8oMTIsIDMxKSwgci55KDIwMDUpLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCA5KS50bygyLCAxNSkudygyLCA1KS50bygyLCA2KS5pKDIsIDE0KS50bygyLCAxNSkubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAzMCkudyg1LCA4KS5pKDUsIDUpLnRvKDUsIDYpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOCkudG8oMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KSwgci55KDIwMDQpLm55KCkucigxLCAxKS5zKCkucigxLCAyMikudG8oMSwgMjgpLncoMSwgMTcpLnRvKDEsIDE4KS5pKDEsIDI3KS50bygxLCAyOCkubCgpLnIoNSwgMSkudG8oNSwgNykudyg1LCA4KS50byg1LCA5KS5pKDUsIDYpLnRvKDUsIDcpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOSkudG8oMTAsIDEwKS5pKDEwLCA2KS50bygxMCwgNyksIHtcbiAgICBob2xpZGF5czogci5ob2xpZGF5cyxcbiAgICB3b3JrZGF5czogci53b3JrZGF5cyxcbiAgICBpbkxpZXVEYXlzOiByLmluTGlldURheXNcbiAgfTtcbn0sIHsgaG9saWRheXM6IGcsIHdvcmtkYXlzOiBwLCBpbkxpZXVEYXlzOiBJIH0gPSBqKCksIHUgPSAoLi4ucikgPT4ge1xuICBpZiAoci5sZW5ndGggIT09IDEpXG4gICAgcmV0dXJuIHIubWFwKChlKSA9PiB1KGUpKTtcbiAgY29uc3QgdCA9IHcoclswXSk7XG4gIGlmICghdC5pc1ZhbGlkKCkpXG4gICAgdGhyb3cgbmV3IEVycm9yKGB1bnN1cHBvcnRlZCB0eXBlICR7dHlwZW9mIHR9LCBleHBlY3RlZCB0eXBlIGlzIERhdGUgb3IgRGF5anNgKTtcbiAgcmV0dXJuIHQ7XG59LCBOID0gKHIpID0+ICFmKHIpLCBmID0gKHIpID0+IHtcbiAgY29uc3QgdCA9IHUociksIGUgPSB0LmRheSgpLCBhID0gdC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICByZXR1cm4gISEocFthXSB8fCBlID49IDEgJiYgZSA8PSA1ICYmICFnW2FdKTtcbn0sIHEgPSAocikgPT4gKHIgPSB1KHIpLCAhIUlbci5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXSksIFUgPSAocikgPT4ge1xuICByID0gdShyKTtcbiAgY29uc3QgdCA9IHIuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgaWYgKHBbdF0pXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IHQsXG4gICAgICB3b3JrOiAhMCxcbiAgICAgIG5hbWU6IHBbdF1cbiAgICB9O1xuICBpZiAoZ1t0XSlcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogdCxcbiAgICAgIHdvcms6ICExLFxuICAgICAgbmFtZTogZ1t0XVxuICAgIH07XG4gIHtcbiAgICBjb25zdCBlID0gci5kYXkoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogdCxcbiAgICAgIHdvcms6IGUgIT09IDAgJiYgZSAhPT0gNixcbiAgICAgIG5hbWU6IHIuZm9ybWF0KFwiZGRkZFwiKVxuICAgIH07XG4gIH1cbn0sIFcgPSAociwgdCwgZSA9ICEwKSA9PiAociA9IHUociksIHQgPSB1KHQpLCBlID8gRChyLCB0KS5maWx0ZXIoTikubWFwKChhKSA9PiBhLmZvcm1hdChcIllZWVktTU0tRERcIikpIDogRChyLCB0KS5maWx0ZXIoKGEpID0+IGdbYS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXSkubWFwKChhKSA9PiBhLmZvcm1hdChcIllZWVktTU0tRERcIikpKSwgUCA9IChyLCB0LCBlID0gITApID0+IChyID0gdShyKSwgdCA9IHUodCksIGUgPyBEKHIsIHQpLmZpbHRlcihmKS5tYXAoKGEpID0+IGEuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSkgOiBEKHIsIHQpLmZpbHRlcigoYSkgPT4gZihhKSAmJiBhLmRheSgpID49IDEgJiYgYS5kYXkoKSA8PSA1KS5tYXAoKGEpID0+IGEuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSkpLCB6ID0gKHIgPSAwLCB0ID0gaCgpKSA9PiB7XG4gIGlmICh0ID0gdyh0KSwgciA9PT0gMCkge1xuICAgIGlmIChmKHQpKVxuICAgICAgcmV0dXJuIHQuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICByID0gMTtcbiAgfVxuICBjb25zdCBlID0gciA+IDAgPyAxIDogLTE7XG4gIGxldCBhID0gTWF0aC5hYnMocik7XG4gIGZvciAoOyBhID4gMDsgKVxuICAgIHQgPSB0LmFkZChlLCBcImRheVwiKSwgZih0KSAmJiBhLS07XG4gIHJldHVybiB0LmZvcm1hdChcIllZWVktTU0tRERcIik7XG59LCBWID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZmluZFdvcmtkYXk6IHosXG4gIGdldERheURldGFpbDogVSxcbiAgZ2V0SG9saWRheXNJblJhbmdlOiBXLFxuICBnZXRXb3JrZGF5c0luUmFuZ2U6IFAsXG4gIGlzSG9saWRheTogTixcbiAgaXNJbkxpZXU6IHEsXG4gIGlzV29ya2RheTogZlxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgWiA9IHtcbiAgdGhlX2JlZ2lubmluZ19vZl9zcHJpbmc6IFs0LjYyOTUsIDMuODddLFxuICByYWluX3dhdGVyOiBbMTkuNDU5OSwgMTguNzNdLFxuICB0aGVfd2FraW5nX29mX2luc2VjdHM6IFs2LjM5MjYsIDUuNjNdLFxuICB0aGVfc3ByaW5nX2VxdWlub3g6IFsyMS40MTU1LCAyMC42NDZdLFxuICBwdXJlX2JyaWdodG5lc3M6IFs1LjU5LCA0LjgxXSxcbiAgZ3JhaW5fcmFpbjogWzIwLjg4OCwgMjAuMV0sXG4gIHRoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyOiBbNi4zMTgsIDUuNTJdLFxuICBsZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW46IFsyMS44NiwgMjEuMDRdLFxuICBncmFpbl9pbl9iZWFyZDogWzYuNSwgNS42NzhdLFxuICB0aGVfc3VtbWVyX3NvbHN0aWNlOiBbMjIuMiwgMjEuMzddLFxuICBsZXNzZXJfaGVhdDogWzcuOTI4LCA3LjEwOF0sXG4gIGdyZWF0ZXJfaGVhdDogWzIzLjY1LCAyMi44M10sXG4gIHRoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uOiBbMjguMzUsIDcuNV0sXG4gIHRoZV9lbmRfb2ZfaGVhdDogWzIzLjk1LCAyMy4xM10sXG4gIHdoaXRlX2RldzogWzguNDQsIDcuNjQ2XSxcbiAgdGhlX2F1dHVtbl9lcXVpbm94OiBbMjMuODIyLCAyMy4wNDJdLFxuICBjb2RlX2RldzogWzkuMDk4LCA4LjMxOF0sXG4gIGZyb3N0X2Rlc2NlbnQ6IFsyNC4yMTgsIDIzLjQzOF0sXG4gIHRoZV9iZWdpbm5pbmdfb2Zfd2ludGVyOiBbOC4yMTgsIDcuNDM4XSxcbiAgbGVzc2VyX3Nub3c6IFsyMy4wOCwgMjIuMzZdLFxuICBncmVhdGVyX3Nub3c6IFs3LjksIDcuMThdLFxuICB0aGVfd2ludGVyX3NvbHN0aWNlOiBbMjIuNiwgMjEuOTRdLFxuICBsZXNzZXJfY29sZDogWzYuMTEsIDUuNDA1NV0sXG4gIGdyZWF0ZXJfY29sZDogWzIwLjg0LCAyMC4xMl1cbn0sIFQgPSB7XG4gIDE6IFtcImxlc3Nlcl9jb2xkXCIsIFwiZ3JlYXRlcl9jb2xkXCJdLFxuICAyOiBbXCJ0aGVfYmVnaW5uaW5nX29mX3NwcmluZ1wiLCBcInJhaW5fd2F0ZXJcIl0sXG4gIDM6IFtcInRoZV93YWtpbmdfb2ZfaW5zZWN0c1wiLCBcInRoZV9zcHJpbmdfZXF1aW5veFwiXSxcbiAgNDogW1wicHVyZV9icmlnaHRuZXNzXCIsIFwiZ3JhaW5fcmFpblwiXSxcbiAgNTogW1widGhlX2JlZ2lubmluZ19vZl9zdW1tZXJcIiwgXCJsZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW5cIl0sXG4gIDY6IFtcImdyYWluX2luX2JlYXJkXCIsIFwidGhlX3N1bW1lcl9zb2xzdGljZVwiXSxcbiAgNzogW1wibGVzc2VyX2hlYXRcIiwgXCJncmVhdGVyX2hlYXRcIl0sXG4gIDg6IFtcInRoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uXCIsIFwidGhlX2VuZF9vZl9oZWF0XCJdLFxuICA5OiBbXCJ3aGl0ZV9kZXdcIiwgXCJ0aGVfYXV0dW1uX2VxdWlub3hcIl0sXG4gIDEwOiBbXCJjb2RlX2Rld1wiLCBcImZyb3N0X2Rlc2NlbnRcIl0sXG4gIDExOiBbXCJ0aGVfYmVnaW5uaW5nX29mX3dpbnRlclwiLCBcImxlc3Nlcl9zbm93XCJdLFxuICAxMjogW1wiZ3JlYXRlcl9zbm93XCIsIFwidGhlX3dpbnRlcl9zb2xzdGljZVwiXVxufSwgRyA9IHtcbiAgXCIyMDI2X3JhaW5fd2F0ZXJcIjogLTEsXG4gIFwiMjA4NF90aGVfc3ByaW5nX2VxdWlub3hcIjogMSxcbiAgXCIxOTExX3RoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyXCI6IDEsXG4gIFwiMjAwOF9sZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW5cIjogMSxcbiAgXCIxOTAyX2dyYWluX2luX2JlYXJkXCI6IDEsXG4gIFwiMTkyOF90aGVfc3VtbWVyX3NvbHN0aWNlXCI6IDEsXG4gIFwiMTkyNV9sZXNzZXJfaGVhdFwiOiAxLFxuICBcIjIwMTZfbGVzc2VyX2hlYXRcIjogMSxcbiAgXCIxOTIyX2dyZWF0ZXJfaGVhdFwiOiAxLFxuICBcIjIwMDJfdGhlX2JlZ2lubmluZ19vZl9hdXR1bW5cIjogMSxcbiAgXCIxOTI3X3doaXRlX2Rld1wiOiAxLFxuICBcIjE5NDJfdGhlX2F1dHVtbl9lcXVpbm94XCI6IDEsXG4gIFwiMjA4OV9mcm9zdF9kZXNjZW50XCI6IDEsXG4gIFwiMjA4OV90aGVfYmVnaW5uaW5nX29mX3dpbnRlclwiOiAxLFxuICBcIjE5NzhfbGVzc2VyX3Nub3dcIjogMSxcbiAgXCIxOTU0X2dyZWF0ZXJfc25vd1wiOiAxLFxuICBcIjE5MThfdGhlX3dpbnRlcl9zb2xzdGljZVwiOiAtMSxcbiAgXCIyMDIxX3RoZV93aW50ZXJfc29sc3RpY2VcIjogLTEsXG4gIFwiMTk4Ml9sZXNzZXJfY29sZFwiOiAxLFxuICBcIjIwMTlfbGVzc2VyX2NvbGRcIjogLTEsXG4gIFwiMjAwMF9ncmVhdGVyX2NvbGRcIjogMSxcbiAgXCIyMDgyX2dyZWF0ZXJfY29sZFwiOiAxXG59LCB2ID0ge1xuICBsZXNzZXJfY29sZDogXCLlsI/lr5JcIixcbiAgZ3JlYXRlcl9jb2xkOiBcIuWkp+WvklwiLFxuICB0aGVfYmVnaW5uaW5nX29mX3NwcmluZzogXCLnq4vmmKVcIixcbiAgcmFpbl93YXRlcjogXCLpm6jmsLRcIixcbiAgdGhlX3dha2luZ19vZl9pbnNlY3RzOiBcIuaDiuibsFwiLFxuICB0aGVfc3ByaW5nX2VxdWlub3g6IFwi5pil5YiGXCIsXG4gIHB1cmVfYnJpZ2h0bmVzczogXCLmuIXmmI5cIixcbiAgZ3JhaW5fcmFpbjogXCLosLfpm6hcIixcbiAgdGhlX2JlZ2lubmluZ19vZl9zdW1tZXI6IFwi56uL5aSPXCIsXG4gIGxlc3Nlcl9mdWxsbmVzc19vZl9ncmFpbjogXCLlsI/mu6FcIixcbiAgZ3JhaW5faW5fYmVhcmQ6IFwi6IqS56eNXCIsXG4gIHRoZV9zdW1tZXJfc29sc3RpY2U6IFwi5aSP6IezXCIsXG4gIGxlc3Nlcl9oZWF0OiBcIuWwj+aakVwiLFxuICBncmVhdGVyX2hlYXQ6IFwi5aSn5pqRXCIsXG4gIHRoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uOiBcIueri+eni1wiLFxuICB0aGVfZW5kX29mX2hlYXQ6IFwi5aSE5pqRXCIsXG4gIHdoaXRlX2RldzogXCLnmb3pnLJcIixcbiAgdGhlX2F1dHVtbl9lcXVpbm94OiBcIueni+WIhlwiLFxuICBjb2RlX2RldzogXCLlr5LpnLJcIixcbiAgZnJvc3RfZGVzY2VudDogXCLpnJzpmY1cIixcbiAgdGhlX2JlZ2lubmluZ19vZl93aW50ZXI6IFwi56uL5YasXCIsXG4gIGxlc3Nlcl9zbm93OiBcIuWwj+mbqlwiLFxuICBncmVhdGVyX3Nub3c6IFwi5aSn6ZuqXCIsXG4gIHRoZV93aW50ZXJfc29sc3RpY2U6IFwi5Yas6IezXCJcbn0sIFMgPSAociwgdCwgZSkgPT4ge1xuICBjb25zdCBhID0gciA+PSAyZTMgPyAyMSA6IDIwLCBzID0gciAlIDEwMCwgaSA9IDAuMjQyMiwgbyA9IFpbZV1bYSA9PT0gMjEgPyAxIDogMF07XG4gIGxldCBsID0gTWF0aC5mbG9vcihzIC8gNCk7XG4gIFtcbiAgICBcImxlc3Nlcl9jb2xkXCIsXG4gICAgXCJncmVhdGVyX2NvbGRcIixcbiAgICBcInRoZV9iZWdpbm5pbmdfb2Zfc3ByaW5nXCIsXG4gICAgXCJyYWluX3dhdGVyXCJcbiAgXS5pbmNsdWRlcyhlKSAmJiAobCA9IE1hdGguZmxvb3IoKHMgLSAxKSAvIDQpKTtcbiAgbGV0IG4gPSBNYXRoLmZsb29yKHMgKiBpICsgbykgLSBsO1xuICBjb25zdCBfID0gR1tgJHtyfV8ke2V9YF07XG4gIHJldHVybiBfICYmIChuICs9IF8pLCBoKGAke3J9LSR7dH0tJHtufWApLmZvcm1hdChcIllZWVktTU0tRERcIik7XG59LCBKID0gKHIsIHQpID0+IHtcbiAgY29uc3QgZSA9IFtdO1xuICBsZXQgYSA9IHcocik7XG4gIGNvbnN0IHMgPSB3KHQgfHwgcik7XG4gIGZvciAoOyBhLmlzQmVmb3JlKHMpIHx8IGEuaXNTYW1lKHMpOyApIHtcbiAgICBjb25zdCBpID0gYS55ZWFyKCksIG8gPSBhLm1vbnRoKCkgKyAxO1xuICAgIFRbb10uZm9yRWFjaCgobCkgPT4ge1xuICAgICAgY29uc3QgbiA9IGgoUyhpLCBvLCBsKSk7XG4gICAgICAobiAhPSBudWxsICYmIG4uaXNCZWZvcmUocykgfHwgbiAhPSBudWxsICYmIG4uaXNTYW1lKHMpKSAmJiAobiAhPSBudWxsICYmIG4uaXNBZnRlcihhKSB8fCBuICE9IG51bGwgJiYgbi5pc1NhbWUoYSkpICYmIGUucHVzaCh7XG4gICAgICAgIGRhdGU6IG4uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgICAgdGVybTogbCxcbiAgICAgICAgbmFtZTogdltsXSxcbiAgICAgICAgaW5kZXg6IDFcbiAgICAgIH0pO1xuICAgIH0pLCBvID09PSAxMiA/IGEgPSBhLmFkZCgxLCBcInllYXJcIikuc3RhcnRPZihcInllYXJcIikgOiBhID0gYS5hZGQoMSwgXCJtb250aFwiKS5zdGFydE9mKFwibW9udGhcIik7XG4gIH1cbiAgcmV0dXJuIGU7XG59LCBLID0gKHIsIHQpID0+IHtcbiAgbGV0IGUgPSB3KHIpLnN1YnRyYWN0KDEsIFwibW9udGhcIik7XG4gIGNvbnN0IGEgPSB3KHQgfHwgcikuYWRkKDEsIFwibW9udGhcIiksIHMgPSBbXTtcbiAgZm9yICg7IGUuaXNCZWZvcmUoYSkgfHwgZS5pc1NhbWUoYSk7ICkge1xuICAgIGNvbnN0IG8gPSBlLnllYXIoKSwgbCA9IGUubW9udGgoKSArIDE7XG4gICAgVFtsXS5mb3JFYWNoKChuKSA9PiB7XG4gICAgICBjb25zdCBfID0gaChTKG8sIGwsIG4pKTtcbiAgICAgIHMucHVzaCh7IHRlcm06IG4sIGRhdGU6IF8gfSk7XG4gICAgfSksIGUubW9udGgoKSA9PT0gMTEgPyBlID0gZS5hZGQoMSwgXCJ5ZWFyXCIpLnN0YXJ0T2YoXCJ5ZWFyXCIpIDogZSA9IGUuYWRkKDEsIFwibW9udGhcIikuc3RhcnRPZihcIm1vbnRoXCIpO1xuICB9XG4gIGNvbnN0IGkgPSBbXTtcbiAgcmV0dXJuIHMuZm9yRWFjaCgobywgbCkgPT4ge1xuICAgIGZvciAobGV0IG4gPSBvLmRhdGU7IHNbbCArIDFdICYmIG4uaXNCZWZvcmUoc1tsICsgMV0uZGF0ZSk7IG4gPSBuLmFkZCgxLCBcImRheVwiKSlcbiAgICAgIGkucHVzaCh7IGRheTogbiwgdGVybTogby50ZXJtLCBuYW1lOiB2W28udGVybV0sIGluZGV4OiBuLmRpZmYoby5kYXRlLCBcImRheVwiKSArIDEgfSk7XG4gIH0pLCB0IHx8ICh0ID0gciksIGkuZmlsdGVyKChvKSA9PiBvLmRheS5pc0JldHdlZW4ociwgdCwgXCJkYXlcIikpLm1hcCgobykgPT4gKHtcbiAgICBkYXRlOiBvLmRheS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgIHRlcm06IG8udGVybSxcbiAgICBuYW1lOiBvLm5hbWUsXG4gICAgaW5kZXg6IG8uaW5kZXhcbiAgfSkpO1xufSwgUSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGdldFNvbGFyVGVybURhdGU6IFMsXG4gIGdldFNvbGFyVGVybXM6IEosXG4gIGdldFNvbGFyVGVybXNJblJhbmdlOiBLXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpLCBtID0gW1xuICAxOTQxNixcbiAgMTkxNjgsXG4gIDQyMzUyLFxuICAyMTcxNyxcbiAgNTM4NTYsXG4gIDU1NjMyLFxuICA5MTQ3NixcbiAgMjIxNzYsXG4gIDM5NjMyLFxuICAyMTk3MCxcbiAgLy8xOTAwLTE5MDlcbiAgMTkxNjgsXG4gIDQyNDIyLFxuICA0MjE5MixcbiAgNTM4NDAsXG4gIDExOTM4MSxcbiAgNDY0MDAsXG4gIDU0OTQ0LFxuICA0NDQ1MCxcbiAgMzgzMjAsXG4gIDg0MzQzLFxuICAvLzE5MTAtMTkxOVxuICAxODgwMCxcbiAgNDIxNjAsXG4gIDQ2MjYxLFxuICAyNzIxNixcbiAgMjc5NjgsXG4gIDEwOTM5NixcbiAgMTExMDQsXG4gIDM4MjU2LFxuICAyMTIzNCxcbiAgMTg4MDAsXG4gIC8vMTkyMC0xOTI5XG4gIDI1OTU4LFxuICA1NDQzMixcbiAgNTk5ODQsXG4gIDI4MzA5LFxuICAyMzI0OCxcbiAgMTExMDQsXG4gIDEwMDA2NyxcbiAgMzc2MDAsXG4gIDExNjk1MSxcbiAgNTE1MzYsXG4gIC8vMTkzMC0xOTM5XG4gIDU0NDMyLFxuICAxMjA5OTgsXG4gIDQ2NDE2LFxuICAyMjE3NixcbiAgMTA3OTU2LFxuICA5NjgwLFxuICAzNzU4NCxcbiAgNTM5MzgsXG4gIDQzMzQ0LFxuICA0NjQyMyxcbiAgLy8xOTQwLTE5NDlcbiAgMjc4MDgsXG4gIDQ2NDE2LFxuICA4Njg2OSxcbiAgMTk4NzIsXG4gIDQyNDE2LFxuICA4MzMxNSxcbiAgMjExNjgsXG4gIDQzNDMyLFxuICA1OTcyOCxcbiAgMjcyOTYsXG4gIC8vMTk1MC0xOTU5XG4gIDQ0NzEwLFxuICA0Mzg1NixcbiAgMTkyOTYsXG4gIDQzNzQ4LFxuICA0MjM1MixcbiAgMjEwODgsXG4gIDYyMDUxLFxuICA1NTYzMixcbiAgMjMzODMsXG4gIDIyMTc2LFxuICAvLzE5NjAtMTk2OVxuICAzODYwOCxcbiAgMTk5MjUsXG4gIDE5MTUyLFxuICA0MjE5MixcbiAgNTQ0ODQsXG4gIDUzODQwLFxuICA1NDYxNixcbiAgNDY0MDAsXG4gIDQ2NzUyLFxuICAxMDM4NDYsXG4gIC8vMTk3MC0xOTc5XG4gIDM4MzIwLFxuICAxODg2NCxcbiAgNDMzODAsXG4gIDQyMTYwLFxuICA0NTY5MCxcbiAgMjcyMTYsXG4gIDI3OTY4LFxuICA0NDg3MCxcbiAgNDM4NzIsXG4gIDM4MjU2LFxuICAvLzE5ODAtMTk4OVxuICAxOTE4OSxcbiAgMTg4MDAsXG4gIDI1Nzc2LFxuICAyOTg1OSxcbiAgNTk5ODQsXG4gIDI3NDgwLFxuICAyMTk1MixcbiAgNDM4NzIsXG4gIDM4NjEzLFxuICAzNzYwMCxcbiAgLy8xOTkwLTE5OTlcbiAgNTE1NTIsXG4gIDU1NjM2LFxuICA1NDQzMixcbiAgNTU4ODgsXG4gIDMwMDM0LFxuICAyMjE3NixcbiAgNDM5NTksXG4gIDk2ODAsXG4gIDM3NTg0LFxuICA1MTg5MyxcbiAgLy8yMDAwLTIwMDlcbiAgNDMzNDQsXG4gIDQ2MjQwLFxuICA0Nzc4MCxcbiAgNDQzNjgsXG4gIDIxOTc3LFxuICAxOTM2MCxcbiAgNDI0MTYsXG4gIDg2MzkwLFxuICAyMTE2OCxcbiAgNDMzMTIsXG4gIC8vMjAxMC0yMDE5XG4gIDMxMDYwLFxuICAyNzI5NixcbiAgNDQzNjgsXG4gIDIzMzc4LFxuICAxOTI5NixcbiAgNDI3MjYsXG4gIDQyMjA4LFxuICA1Mzg1NixcbiAgNjAwMDUsXG4gIDU0NTc2LFxuICAvLzIwMjAtMjAyOVxuICAyMzIwMCxcbiAgMzAzNzEsXG4gIDM4NjA4LFxuICAxOTE5NSxcbiAgMTkxNTIsXG4gIDQyMTkyLFxuICAxMTg5NjYsXG4gIDUzODQwLFxuICA1NDU2MCxcbiAgNTY2NDUsXG4gIC8vMjAzMC0yMDM5XG4gIDQ2NDk2LFxuICAyMjIyNCxcbiAgMjE5MzgsXG4gIDE4ODY0LFxuICA0MjM1OSxcbiAgNDIxNjAsXG4gIDQzNjAwLFxuICAxMTExODksXG4gIDI3OTM2LFxuICA0NDQ0OCxcbiAgLy8yMDQwLTIwNDlcbiAgODQ4MzUsXG4gIDM3NzQ0LFxuICAxODkzNixcbiAgMTg4MDAsXG4gIDI1Nzc2LFxuICA5MjMyNixcbiAgNTk5ODQsXG4gIDI3NDI0LFxuICAxMDgyMjgsXG4gIDQzNzQ0LFxuICAvLzIwNTAtMjA1OVxuICA0MTY5NixcbiAgNTM5ODcsXG4gIDUxNTUyLFxuICA1NDYxNSxcbiAgNTQ0MzIsXG4gIDU1ODg4LFxuICAyMzg5MyxcbiAgMjIxNzYsXG4gIDQyNzA0LFxuICAyMTk3MixcbiAgLy8yMDYwLTIwNjlcbiAgMjEyMDAsXG4gIDQzNDQ4LFxuICA0MzM0NCxcbiAgNDYyNDAsXG4gIDQ2NzU4LFxuICA0NDM2OCxcbiAgMjE5MjAsXG4gIDQzOTQwLFxuICA0MjQxNixcbiAgMjExNjgsXG4gIC8vMjA3MC0yMDc5XG4gIDQ1NjgzLFxuICAyNjkyOCxcbiAgMjk0OTUsXG4gIDI3Mjk2LFxuICA0NDM2OCxcbiAgODQ4MjEsXG4gIDE5Mjk2LFxuICA0MjM1MixcbiAgMjE3MzIsXG4gIDUzNjAwLFxuICAvLzIwODAtMjA4OVxuICA1OTc1MixcbiAgNTQ1NjAsXG4gIDU1OTY4LFxuICA5MjgzOCxcbiAgMjIyMjQsXG4gIDE5MTY4LFxuICA0MzQ3NixcbiAgNDE2ODAsXG4gIDUzNTg0LFxuICA2MjAzNCxcbiAgLy8yMDkwLTIwOTlcbiAgNTQ1NjBcbiAgLy8yMTAwXG5dLCAkID0gW1wi6Zu2XCIsIFwi5LiAXCIsIFwi5LqMXCIsIFwi5LiJXCIsIFwi5ZubXCIsIFwi5LqUXCIsIFwi5YWtXCIsIFwi5LiDXCIsIFwi5YWrXCIsIFwi5LmdXCJdLCBYID0gW1wi5q2jXCIsIFwi5LqMXCIsIFwi5LiJXCIsIFwi5ZubXCIsIFwi5LqUXCIsIFwi5YWtXCIsIFwi5LiDXCIsIFwi5YWrXCIsIFwi5LmdXCIsIFwi5Y2BXCIsIFwi5YasXCIsIFwi6IWKXCJdLCB0dCA9IFtcIueUslwiLCBcIuS5mVwiLCBcIuS4mVwiLCBcIuS4gVwiLCBcIuaIilwiLCBcIuW3sVwiLCBcIuW6mlwiLCBcIui+m1wiLCBcIuWjrFwiLCBcIueZuFwiXSwgZXQgPSBbXCLlrZBcIiwgXCLkuJFcIiwgXCLlr4VcIiwgXCLlja9cIiwgXCLovrBcIiwgXCLlt7NcIiwgXCLljYhcIiwgXCLmnKpcIiwgXCLnlLNcIiwgXCLphYlcIiwgXCLmiIxcIiwgXCLkuqVcIl0sIHJ0ID0gW1wi6bygXCIsIFwi54mbXCIsIFwi6JmOXCIsIFwi5YWUXCIsIFwi6b6ZXCIsIFwi6JuHXCIsIFwi6amsXCIsIFwi576KXCIsIFwi54y0XCIsIFwi6bihXCIsIFwi54uXXCIsIFwi54yqXCJdLCBIID0gKHIpID0+IHtcbiAgbGV0IHQgPSAzNDg7XG4gIGZvciAobGV0IGUgPSAzMjc2ODsgZSA+IDg7IGUgPj49IDEpXG4gICAgdCArPSBtW3IgLSAxOTAwXSAmIGUgPyAxIDogMDtcbiAgcmV0dXJuIHQgKyBGKHIpO1xufSwgayA9IChyKSA9PiBtW3IgLSAxOTAwXSAmIDE1LCBGID0gKHIpID0+IGsocikgPyBtW3IgLSAxOTAwXSAmIDY1NTM2ID8gMzAgOiAyOSA6IDAsIFkgPSAocikgPT4gdHRbciAlIDEwXSArIGV0W3IgJSAxMl0sIGIgPSAociwgdCkgPT4gbVtyIC0gMTkwMF0gJiA2NTUzNiA+PiB0ID8gMzAgOiAyOSwgYXQgPSAocikgPT4gcnRbKHIgLSA0KSAlIDEyXSwgb3QgPSAocikgPT4ge1xuICBjb25zdCB0ID0gW1wi5YidXCIsIFwi5Y2BXCIsIFwi5bu/XCIsIFwi5LiJ5Y2BXCJdO1xuICBpZiAociA9PT0gMTApIHJldHVybiBcIuWIneWNgVwiO1xuICBpZiAociA9PT0gMjApIHJldHVybiBcIuS6jOWNgVwiO1xuICBpZiAociA9PT0gMzApIHJldHVybiBcIuS4ieWNgVwiO1xuICBjb25zdCBlID0gTWF0aC5mbG9vcihyIC8gMTApLCBhID0gciAlIDEwO1xuICByZXR1cm4gdFtlXSArIChhID8gJFthXSA6IFwiXCIpO1xufSwgTyA9IChyKSA9PiB7XG4gIGNvbnN0IHQgPSBuZXcgQXJyYXkoNykuZmlsbCgwKTtcbiAgbGV0IGUgPSAwLCBhID0gMDtcbiAgY29uc3QgcyA9IGgobmV3IERhdGUoMTkwMCwgMCwgMzEpKSwgaSA9IGgocik7XG4gIGxldCBvID0gaS5kaWZmKHMsIFwiZGF5XCIpO1xuICB0WzVdID0gbyArIDQwLCB0WzRdID0gMTQ7XG4gIGxldCBsID0gMTkwMDtcbiAgZm9yICg7IGwgPCAyMTAwICYmIG8gPiAwOyBsKyspXG4gICAgZSA9IEgobCksIG8gLT0gZSwgdFs0XSArPSAxMjtcbiAgbyA8IDAgJiYgKG8gKz0gZSwgbC0tLCB0WzRdIC09IDEyKSwgdFswXSA9IGwsIHRbM10gPSBsIC0gMTg2NCwgYSA9IGsobCksIHRbNl0gPSAwO1xuICBmb3IgKGxldCBuID0gMTsgbiA8IDEzICYmIG8gPj0gMDsgbisrKVxuICAgIGEgPiAwICYmIG4gPT09IGEgKyAxICYmIHRbNl0gPT09IDAgPyAoLS1uLCB0WzZdID0gMSwgZSA9IEYobCkpIDogZSA9IGIobCwgbiksIHRbNl0gPT09IDEgJiYgbiA9PT0gYSArIDEgJiYgKHRbNl0gPSAwKSwgbyAtPSBlLCB0WzZdID09PSAwICYmIHRbNF0rKywgdFsxXSA9IG47XG4gIHJldHVybiBvID09PSAwICYmIGEgPiAwICYmIHRbNl0gPT09IDEgPyB0WzZdID0gMCA6IG8gPCAwICYmIChvICs9IGUsIHRbMV0tLSwgdFs0XS0tKSwgdFsyXSA9IG8gKyAxLCB7XG4gICAgZGF0ZTogaS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgIC8vIOWFrOWOhuaXpeacn1xuICAgIGx1bmFyWWVhcjogdFswXSxcbiAgICAvLyDlhpzljoblubTku71cbiAgICBsdW5hck1vbjogdFsxXSArIDEsXG4gICAgLy8g5Yac5Y6G5pyI5Lu9XG4gICAgbHVuYXJEYXk6IHRbMl0sXG4gICAgLy8g5Yac5Y6G5pel5pyfXG4gICAgaXNMZWFwOiAhIXRbNl0sXG4gICAgLy8g5piv5ZCm6Zew5pyIXG4gICAgem9kaWFjOiBhdCh0WzBdKSxcbiAgICAvLyDnlJ/ogpZcbiAgICB5ZWFyQ3lsOiBZKHRbM10pLFxuICAgIC8vIOW5tOafsVxuICAgIG1vbkN5bDogWSh0WzRdKSxcbiAgICAvLyDmnIjmn7FcbiAgICBkYXlDeWw6IFkodFs1XSksXG4gICAgLy8g5pel5p+xXG4gICAgbHVuYXJZZWFyQ046IGAke3RbMF0udG9TdHJpbmcoKS5zcGxpdChcIlwiKS5tYXAoKG4pID0+ICRbTnVtYmVyKG4pXSkuam9pbihcIlwiKX1gLFxuICAgIC8vIOWGnOWOhuW5tOS7veS4reaWh+ihqOekulxuICAgIGx1bmFyTW9uQ046IGAke1hbdFsxXV195pyIYCxcbiAgICAvLyDlhpzljobmnIjku73kuK3mlofooajnpLpcbiAgICBsdW5hckRheUNOOiBvdCh0WzJdKVxuICAgIC8vIOWGnOWOhuaXpeacn+S4reaWh+ihqOekulxuICB9O1xufSwgRSA9IChyLCB0KSA9PiB7XG4gIGNvbnN0IGUgPSBoKHIpLCBhID0gaCh0KSwgcyA9IFtdO1xuICBmb3IgKGxldCBpID0gZTsgaS5pc0JlZm9yZShhKSB8fCBpLmlzU2FtZShhLCBcImRheVwiKTsgaSA9IGkuYWRkKDEsIFwiZGF5XCIpKVxuICAgIHMucHVzaChPKGkpKTtcbiAgcmV0dXJuIHM7XG59LCBSID0gKHIpID0+IHtcbiAgY29uc3QgdCA9IGgociksIGUgPSB0LnllYXIoKSwgYSA9IHQubW9udGgoKSArIDEsIHMgPSB0LmRhdGUoKTtcbiAgbGV0IGkgPSAwO1xuICBmb3IgKGxldCB5ID0gMTkwMDsgeSA8IGU7IHkrKylcbiAgICBpICs9IEgoeSk7XG4gIGxldCBvID0gayhlKTtcbiAgZm9yIChsZXQgeSA9IDE7IHkgPCBhOyB5KyspXG4gICAgaSArPSBiKGUsIHkpLCB5ID09PSBvICYmIChpICs9IEYoZSkpO1xuICBpICs9IHMgLSAxO1xuICBjb25zdCBsID0gaChuZXcgRGF0ZSgxOTAwLCAwLCAzMSkpLCBuID0gbC5hZGQoaSwgXCJkYXlcIikuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgbGV0IF8gPSBpLCBMO1xuICByZXR1cm4gbyA9PT0gYSAmJiAoXyArPSBiKGUsIGEpLCBMID0gbC5hZGQoXywgXCJkYXlcIikuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSksIHtcbiAgICBkYXRlOiBuLFxuICAgIGxlYXBNb250aERhdGU6IExcbiAgfTtcbn0sIG50ID0ge1xuICBnZXRMdW5hckRhdGU6IE8sXG4gIGdldEx1bmFyRGF0ZXNJblJhbmdlOiBFLFxuICBnZXRTb2xhckRhdGVGcm9tTHVuYXI6IFJcbn0sIHN0ID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZGVmYXVsdDogbnQsXG4gIGdldEx1bmFyRGF0ZTogTyxcbiAgZ2V0THVuYXJEYXRlc0luUmFuZ2U6IEUsXG4gIGdldFNvbGFyRGF0ZUZyb21MdW5hcjogUlxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgbHQgPSB7XG4gIC4uLlYsXG4gIC4uLlEsXG4gIC4uLnN0XG59O1xuZXhwb3J0IHtcbiAgbHQgYXMgZGVmYXVsdCxcbiAgeiBhcyBmaW5kV29ya2RheSxcbiAgVSBhcyBnZXREYXlEZXRhaWwsXG4gIFcgYXMgZ2V0SG9saWRheXNJblJhbmdlLFxuICBPIGFzIGdldEx1bmFyRGF0ZSxcbiAgRSBhcyBnZXRMdW5hckRhdGVzSW5SYW5nZSxcbiAgUiBhcyBnZXRTb2xhckRhdGVGcm9tTHVuYXIsXG4gIFMgYXMgZ2V0U29sYXJUZXJtRGF0ZSxcbiAgSiBhcyBnZXRTb2xhclRlcm1zLFxuICBLIGFzIGdldFNvbGFyVGVybXNJblJhbmdlLFxuICBQIGFzIGdldFdvcmtkYXlzSW5SYW5nZSxcbiAgTiBhcyBpc0hvbGlkYXksXG4gIHEgYXMgaXNJbkxpZXUsXG4gIGYgYXMgaXNXb3JrZGF5XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsc0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCxxQkFBQTtFQUFBRSxhQUFBQSxNQUFBQztFQUFBQyxjQUFBQSxNQUFBQztFQUFBQyxvQkFBQUEsTUFBQUM7RUFBQUMsY0FBQUEsTUFBQUM7RUFBQUMsc0JBQUFBLE1BQUFDO0VBQUFDLHVCQUFBQSxNQUFBQztFQUFBQyxrQkFBQUEsTUFBQUM7RUFBQUMsZUFBQUEsTUFBQUM7RUFBQUMsc0JBQUFBLE1BQUFDO0VBQUFDLG9CQUFBQSxNQUFBQztFQUFBQyxXQUFBQSxNQUFBQztFQUFBQyxVQUFBQSxNQUFBQztFQUFBQyxXQUFBQSxNQUFBQztBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQTlCLG1CQUFBO0FDQUEsSUFBSStCLElBQUlDLE9BQU9DO0FBQ2YsSUFBSUMsSUFBSUEsQ0FBQ0MsR0FBR0MsR0FBR0MsTUFBTUQsS0FBS0QsSUFBSUosRUFBRUksR0FBR0MsR0FBRztFQUFFRSxZQUFZO0VBQUlDLGNBQWM7RUFBSUMsVUFBVTtFQUFJQyxPQUFPSjtBQUFFLENBQUMsSUFBSUYsRUFBRUMsQ0FBQyxJQUFJQztBQUM3RyxJQUFJSyxJQUFJQSxDQUFDUCxHQUFHQyxHQUFHQyxNQUFNSCxFQUFFQyxHQUFHLE9BQU9DLEtBQUssV0FBV0EsSUFBSSxLQUFLQSxHQUFHQyxDQUFDO0FBQzlELElBQU1NLElBQUksTUFBTUMsR0FBRTtFQUNoQkMsWUFBWVQsR0FBRztBQUNiTSxNQUFFLE1BQU0sT0FBTztBQUNmTixpQkFBYVEsS0FBSSxLQUFLRSxRQUFRLElBQUlDLEtBQUtYLEVBQUVZLE9BQU8sQ0FBQyxJQUFJWixhQUFhVyxPQUFPLEtBQUtELFFBQVEsSUFBSUMsS0FBS1gsQ0FBQyxJQUFJLE9BQU9BLEtBQUssWUFBWSxPQUFPQSxLQUFLLFlBQVksS0FBS1UsUUFBUSxJQUFJQyxLQUFLWCxDQUFDLEdBQUcsT0FBT0EsS0FBSyxZQUFZYSxNQUFNLEtBQUtILE1BQU1JLFFBQVEsQ0FBQyxNQUFNLEtBQUtKLFFBQVEsSUFBSUMsS0FBS1gsRUFBRWUsUUFBUSxNQUFNLEdBQUcsQ0FBQyxNQUFNLEtBQUtMLFFBQXdCLG9CQUFJQyxLQUFLO0VBQzlUO0VBQ0FDLFNBQVM7QUFDUCxXQUFPLEtBQUtGO0VBQ2Q7RUFDQU0sVUFBVTtBQUNSLFdBQU8sQ0FBQ0gsTUFBTSxLQUFLSCxNQUFNSSxRQUFRLENBQUM7RUFDcEM7RUFDQUcsS0FBS2pCLEdBQUdDLElBQUksT0FBTztBQUNqQixVQUFNaUIsSUFBSSxJQUFJVixHQUFFUixDQUFDLEVBQUVZLE9BQU8sR0FBR08sSUFBSSxLQUFLVCxNQUFNSSxRQUFRLElBQUlJLEVBQUVKLFFBQVE7QUFDbEUsWUFBUWIsR0FBQTtNQUNOLEtBQUs7QUFDSCxlQUFPLEtBQUtTLE1BQU1VLFlBQVksSUFBSUYsRUFBRUUsWUFBWTtNQUNsRCxLQUFLO0FBQ0gsZ0JBQVEsS0FBS1YsTUFBTVUsWUFBWSxJQUFJRixFQUFFRSxZQUFZLEtBQUssTUFBTSxLQUFLVixNQUFNVyxTQUFTLElBQUlILEVBQUVHLFNBQVM7TUFDakcsS0FBSztNQUNMO0FBQ0UsZUFBT0MsS0FBS0MsTUFBTUosS0FBSyxNQUFNLEtBQUssS0FBSyxHQUFHO0lBQzlDO0VBQ0Y7RUFDQUssUUFBUXhCLEdBQUc7QUFDVCxVQUFNQyxJQUFJLElBQUlVLEtBQUssS0FBS0QsS0FBSztBQUM3QixZQUFRVixHQUFBO01BQ04sS0FBSztBQUNIQyxVQUFFd0IsU0FBUyxDQUFDLEdBQUd4QixFQUFFeUIsUUFBUSxDQUFDLEdBQUd6QixFQUFFMEIsU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2xEO01BQ0YsS0FBSztBQUNIMUIsVUFBRXlCLFFBQVEsQ0FBQyxHQUFHekIsRUFBRTBCLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNuQztNQUNGLEtBQUs7QUFDSDFCLFVBQUUwQixTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDckI7SUFDSjtBQUNBLFdBQU8sSUFBSW5CLEdBQUVQLENBQUM7RUFDaEI7RUFDQTJCLE1BQU01QixHQUFHO0FBQ1AsVUFBTUMsSUFBSSxJQUFJVSxLQUFLLEtBQUtELEtBQUs7QUFDN0IsWUFBUVYsR0FBQTtNQUNOLEtBQUs7QUFDSEMsVUFBRXdCLFNBQVMsRUFBRSxHQUFHeEIsRUFBRXlCLFFBQVEsRUFBRSxHQUFHekIsRUFBRTBCLFNBQVMsSUFBSSxJQUFJLElBQUksR0FBRztBQUN6RDtNQUNGLEtBQUs7QUFDSDFCLFVBQUV5QixRQUFRLElBQUlmLEtBQUtWLEVBQUVtQixZQUFZLEdBQUduQixFQUFFb0IsU0FBUyxJQUFJLEdBQUcsQ0FBQyxFQUFFUSxRQUFRLENBQUMsR0FBRzVCLEVBQUUwQixTQUFTLElBQUksSUFBSSxJQUFJLEdBQUc7QUFDL0Y7TUFDRixLQUFLO0FBQ0gxQixVQUFFMEIsU0FBUyxJQUFJLElBQUksSUFBSSxHQUFHO0FBQzFCO0lBQ0o7QUFDQSxXQUFPLElBQUluQixHQUFFUCxDQUFDO0VBQ2hCO0VBQ0E2QixJQUFJOUIsR0FBR0MsR0FBRztBQUNSLFVBQU1pQixJQUFJLElBQUlQLEtBQUssS0FBS0QsS0FBSztBQUM3QixZQUFRVCxHQUFBO01BQ04sS0FBSztBQUNIaUIsVUFBRWEsWUFBWWIsRUFBRUUsWUFBWSxJQUFJcEIsQ0FBQztBQUNqQztNQUNGLEtBQUs7QUFDSGtCLFVBQUVPLFNBQVNQLEVBQUVHLFNBQVMsSUFBSXJCLENBQUM7QUFDM0I7TUFDRixLQUFLO0FBQ0hrQixVQUFFUSxRQUFRUixFQUFFVyxRQUFRLElBQUk3QixDQUFDO0FBQ3pCO0lBQ0o7QUFDQSxXQUFPLElBQUlRLEdBQUVVLENBQUM7RUFDaEI7RUFDQWMsU0FBU2hDLEdBQUdDLEdBQUc7QUFDYixXQUFPLEtBQUs2QixJQUFJLENBQUM5QixHQUFHQyxDQUFDO0VBQ3ZCO0VBQ0FnQyxPQUFPakMsR0FBRztBQUNSLFVBQU1DLElBQUk7TUFDUmlDLE1BQU0sS0FBS3hCLE1BQU1VLFlBQVk7TUFDN0JlLEtBQUssS0FBS3pCLE1BQU1XLFNBQVMsSUFBSSxHQUFHZSxTQUFTLEVBQUVDLFNBQVMsR0FBRyxHQUFHO01BQzFEQyxJQUFJLEtBQUs1QixNQUFNbUIsUUFBUSxFQUFFTyxTQUFTLEVBQUVDLFNBQVMsR0FBRyxHQUFHO01BQ25ERSxJQUFJLEtBQUs3QixNQUFNOEIsU0FBUyxFQUFFSixTQUFTLEVBQUVDLFNBQVMsR0FBRyxHQUFHO01BQ3BESSxJQUFJLEtBQUsvQixNQUFNZ0MsV0FBVyxFQUFFTixTQUFTLEVBQUVDLFNBQVMsR0FBRyxHQUFHO01BQ3RETSxJQUFJLEtBQUtqQyxNQUFNa0MsV0FBVyxFQUFFUixTQUFTLEVBQUVDLFNBQVMsR0FBRyxHQUFHO01BQ3REUSxNQUFNckMsR0FBRXNDLFdBQVcsS0FBS3BDLE1BQU1xQyxPQUFPLENBQUM7SUFDeEM7QUFDQSxXQUFPL0MsRUFBRWUsUUFBUSw2QkFBOEJHLE9BQU1qQixFQUFFaUIsQ0FBQyxFQUFFa0IsU0FBUyxDQUFDO0VBQ3RFO0VBQ0FZLEtBQUtoRCxHQUFHO0FBQ04sUUFBSUEsTUFBTSxPQUFRLFFBQU8sS0FBS1UsTUFBTVUsWUFBWTtBQUNoRCxVQUFNbkIsSUFBSSxJQUFJVSxLQUFLLEtBQUtELEtBQUs7QUFDN0IsV0FBT1QsRUFBRThCLFlBQVkvQixDQUFDLEdBQUcsSUFBSVEsR0FBRVAsQ0FBQztFQUNsQztFQUNBZ0QsTUFBTWpELEdBQUc7QUFDUCxRQUFJQSxNQUFNLE9BQVEsUUFBTyxLQUFLVSxNQUFNVyxTQUFTO0FBQzdDLFVBQU1wQixJQUFJLElBQUlVLEtBQUssS0FBS0QsS0FBSztBQUM3QixXQUFPVCxFQUFFd0IsU0FBU3pCLENBQUMsR0FBRyxJQUFJUSxHQUFFUCxDQUFDO0VBQy9CO0VBQ0FpRCxLQUFLbEQsR0FBRztBQUNOLFFBQUlBLE1BQU0sT0FBUSxRQUFPLEtBQUtVLE1BQU1tQixRQUFRO0FBQzVDLFVBQU01QixJQUFJLElBQUlVLEtBQUssS0FBS0QsS0FBSztBQUM3QixXQUFPVCxFQUFFeUIsUUFBUTFCLENBQUMsR0FBRyxJQUFJUSxHQUFFUCxDQUFDO0VBQzlCO0VBQ0FrRCxJQUFJbkQsR0FBRztBQUNMLFFBQUlBLE1BQU0sT0FDUixRQUFPLEtBQUtVLE1BQU1xQyxPQUFPO0FBQzNCO0FBQ0UsWUFBTTlDLElBQUksS0FBS1MsTUFBTXFDLE9BQU8sR0FBRzdCLElBQUlsQixJQUFJQyxHQUFHa0IsSUFBSSxJQUFJUixLQUFLLEtBQUtELEtBQUs7QUFDakUsYUFBT1MsRUFBRU8sUUFBUSxLQUFLaEIsTUFBTW1CLFFBQVEsSUFBSVgsQ0FBQyxHQUFHLElBQUlWLEdBQUVXLENBQUM7SUFDckQ7RUFDRjtFQUNBaUMsU0FBU3BELEdBQUc7QUFDVixVQUFNQyxJQUFJLElBQUlPLEdBQUVSLENBQUMsRUFBRVksT0FBTztBQUMxQixXQUFPLEtBQUtGLE1BQU1JLFFBQVEsSUFBSWIsRUFBRWEsUUFBUTtFQUMxQztFQUNBdUMsUUFBUXJELEdBQUc7QUFDVCxVQUFNQyxJQUFJLElBQUlPLEdBQUVSLENBQUMsRUFBRVksT0FBTztBQUMxQixXQUFPLEtBQUtGLE1BQU1JLFFBQVEsSUFBSWIsRUFBRWEsUUFBUTtFQUMxQztFQUNBd0MsT0FBT3RELEdBQUdDLElBQUksT0FBTztBQUNuQixVQUFNaUIsSUFBSSxJQUFJVixHQUFFUixDQUFDLEVBQUVZLE9BQU87QUFDMUIsWUFBUVgsR0FBQTtNQUNOLEtBQUs7QUFDSCxlQUFPLEtBQUtTLE1BQU1VLFlBQVksTUFBTUYsRUFBRUUsWUFBWTtNQUNwRCxLQUFLO0FBQ0gsZUFBTyxLQUFLVixNQUFNVSxZQUFZLE1BQU1GLEVBQUVFLFlBQVksS0FBSyxLQUFLVixNQUFNVyxTQUFTLE1BQU1ILEVBQUVHLFNBQVM7TUFDOUYsS0FBSztNQUNMO0FBQ0UsZUFBTyxLQUFLWCxNQUFNVSxZQUFZLE1BQU1GLEVBQUVFLFlBQVksS0FBSyxLQUFLVixNQUFNVyxTQUFTLE1BQU1ILEVBQUVHLFNBQVMsS0FBSyxLQUFLWCxNQUFNbUIsUUFBUSxNQUFNWCxFQUFFVyxRQUFRO0lBQ3hJO0VBQ0Y7RUFDQTBCLFVBQVV2RCxHQUFHQyxHQUFHaUIsR0FBRztBQUNqQixVQUFNQyxJQUFJLElBQUlYLEdBQUVSLENBQUMsRUFBRXdCLFFBQVFOLENBQUMsRUFBRU4sT0FBTyxHQUFHNEMsSUFBSSxJQUFJaEQsR0FBRVAsQ0FBQyxFQUFFMkIsTUFBTVYsQ0FBQyxFQUFFTixPQUFPLEdBQUc2QyxJQUFJLEtBQUs3QyxPQUFPO0FBQ3hGLFdBQU82QyxLQUFLdEMsS0FBS3NDLEtBQUtEO0VBQ3hCO0FBQ0Y7QUFDQWxELEVBQUVDLEdBQUcsY0FBYyxDQUNqQixVQUNBLFVBQ0EsV0FDQSxhQUNBLFlBQ0EsVUFDQSxVQUFBLENBQ0Q7QUFDRCxJQUFJbUQsSUFBSW5EO0FBQ1IsSUFBTW9ELElBQUs1RCxPQUFNLElBQUkyRCxFQUFFM0QsQ0FBQztBQUF4QixJQUEyQjZELElBQUs3RCxPQUFNNEQsRUFBRTVELENBQUMsRUFBRXlCLFFBQVEsS0FBSztBQUF4RCxJQUEyRHFDLElBQUlBLENBQUM5RCxHQUFHQyxNQUFNO0FBQ3ZFRCxNQUFJNkQsRUFBRTdELENBQUMsR0FBR0MsSUFBSTRELEVBQUU1RCxDQUFDO0FBQ2pCLFFBQU1DLElBQUlELEVBQUVpQixLQUFLbEIsR0FBRyxLQUFLO0FBQ3pCLFNBQU8rRCxNQUFNQyxLQUFLO0lBQUVDLFFBQVEvRCxJQUFJO0VBQUUsR0FBRyxDQUFDaUIsR0FBR0MsTUFBTXBCLEVBQUUrQixJQUFJWCxHQUFHLEtBQUssQ0FBQztBQUNoRTtBQUpBLElBSUc4QyxJQUFJOztFQUVMLE1BQU07SUFDSixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0VBRUEsTUFBTTtJQUNKLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLDBCQUEwQjtFQUM1Qjs7O0VBR0EsTUFBTTtJQUNKLG9EQUFvRDtFQUN0RDs7RUFFQSxNQUFNO0lBQ0osc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtBQUNGO0FBQ0EsSUFBTUMsSUFBTixNQUFRO0VBQ056RCxjQUFjO0FBQ1pILE1BQUUsTUFBTSxjQUFjLENBQUMsQ0FBQztBQUN4QkEsTUFBRSxNQUFNLFlBQVksQ0FBQyxDQUFDO0FBQ3RCQSxNQUFFLE1BQU0sWUFBWSxDQUFDLENBQUM7QUFDdEJBLE1BQUUsTUFBTSxjQUFjLENBQUMsQ0FBQztFQUMxQjs7RUFFQTZELEVBQUVuRSxHQUFHO0FBQ0gsV0FBTyxLQUFLb0UsV0FBV3BCLE9BQU9oRCxHQUFHO0VBQ25DOztFQUVBcUUsZUFBZXJFLEdBQUdDLEdBQUc7QUFDbkIsUUFBSWlCLElBQUk7QUFDUixhQUFBb0QsS0FBQSxHQUFBQyxrQkFBcUIzRSxPQUFPNEUsUUFBUVAsQ0FBQyxHQUFBSyxLQUFBQyxnQkFBQVAsUUFBQU0sTUFBRztBQUF4QyxZQUFXLENBQUNuRCxHQUFHcUMsQ0FBQyxJQUFBZSxnQkFBQUQsRUFBQTtBQUNkLFVBQUlHLFNBQVN0RCxDQUFDLElBQUluQixFQUFHO0FBQ3JCd0QsUUFBRXZELENBQUMsTUFBTSxXQUFXaUIsSUFBSXNDLEVBQUV2RCxDQUFDO0lBQzdCO0FBQ0EsV0FBT2lCO0VBQ1Q7RUFDQXdELEtBQUsxRSxHQUFHO0FBQ04sV0FBTyxLQUFLb0UsV0FBV08sVUFBVTNFLEdBQUc7RUFDdEM7RUFDQTRFLEtBQUs1RSxHQUFHQyxHQUFHaUIsR0FBRztBQUNaLFFBQUksQ0FBQyxLQUFLa0QsV0FBV3BCLEtBQ25CLE9BQU0sSUFBSTZCLE1BQU0sdUNBQXVDO0FBQ3pELFFBQUksQ0FBQyxLQUFLVCxXQUFXTyxRQUNuQixPQUFNLElBQUlFLE1BQU0sMENBQTBDO0FBQzVELFNBQUtULFdBQVduQixRQUFRakQsR0FBRyxLQUFLb0UsV0FBV2pCLE1BQU1sRCxHQUFHLEtBQUttRSxXQUFXVSxVQUFVNUQ7QUFDOUUsVUFBTUMsSUFBSXdDLEVBQUEsR0FBQW9CLE9BQUssS0FBS1gsV0FBV3BCLE1BQUksR0FBQSxFQUFBK0IsT0FBSS9FLEdBQUMsR0FBQSxFQUFBK0UsT0FBSTlFLENBQUMsQ0FBRSxFQUFFZ0MsT0FBTyxZQUFZLEdBQUd1QixJQUFJLEtBQUthLGVBQWUsS0FBS0QsV0FBV3BCLE1BQU0sS0FBS29CLFdBQVdPLE9BQU8sR0FBR2xCLElBQUEsR0FBQXNCLE9BQU8sS0FBS1gsV0FBV08sU0FBTyxHQUFBLEVBQUFJLE9BQUl2QixDQUFDO0FBQ2xMLFdBQU90QyxNQUFNLElBQUksS0FBSzhELFNBQVM3RCxDQUFDLElBQUlzQyxJQUFJdkMsTUFBTSxJQUFJLEtBQUsrRCxTQUFTOUQsQ0FBQyxJQUFJc0MsSUFBSXZDLE1BQU0sTUFBTSxLQUFLZ0UsV0FBVy9ELENBQUMsSUFBSXNDLElBQUk7RUFDaEg7RUFDQTBCLEdBQUduRixHQUFHQyxHQUFHO0FBQ1AsUUFBSSxDQUFDLEtBQUttRSxXQUFXTyxXQUFXLENBQUMsS0FBS1AsV0FBV3BCLFFBQVEsQ0FBQyxLQUFLb0IsV0FBV25CLFNBQVMsQ0FBQyxLQUFLbUIsV0FBV2pCLElBQ2xHLE9BQU0sSUFBSTBCLE1BQU0sdURBQXVEO0FBQ3pFLFVBQU0zRCxJQUFJeUMsRUFBQSxHQUFBb0IsT0FDTCxLQUFLWCxXQUFXcEIsTUFBSSxHQUFBLEVBQUErQixPQUFJLEtBQUtYLFdBQVduQixPQUFLLEdBQUEsRUFBQThCLE9BQUksS0FBS1gsV0FBV2pCLEdBQUcsQ0FDekUsR0FBR2hDLElBQUl3QyxFQUFBLEdBQUFvQixPQUFLLEtBQUtYLFdBQVdwQixNQUFJLEdBQUEsRUFBQStCLE9BQUkvRSxHQUFDLEdBQUEsRUFBQStFLE9BQUk5RSxDQUFDLENBQUU7QUFDNUMsUUFBSWtCLEVBQUVpQyxTQUFTbEMsQ0FBQyxLQUFLQyxFQUFFbUMsT0FBT3BDLENBQUMsRUFDN0IsT0FBTSxJQUFJMkQsTUFBTSxxQ0FBcUM7QUFDdkQsVUFBTXJCLElBQUksS0FBS2EsZUFBZSxLQUFLRCxXQUFXcEIsTUFBTSxLQUFLb0IsV0FBV08sT0FBTyxHQUFHbEIsSUFBQSxHQUFBc0IsT0FBTyxLQUFLWCxXQUFXTyxTQUFPLEdBQUEsRUFBQUksT0FBSXZCLENBQUMsR0FBSTRCLElBQUlqRSxFQUFFRixLQUFLQyxHQUFHLEtBQUs7QUFDeEksYUFBU21FLElBQUksR0FBR0EsS0FBS0QsR0FBR0MsS0FBSztBQUMzQixZQUFNQyxJQUFJcEUsRUFBRVksSUFBSXVELEdBQUcsS0FBSyxFQUFFcEQsT0FBTyxZQUFZO0FBQzdDLFdBQUttQyxXQUFXVSxZQUFZLElBQUksS0FBS0UsU0FBU00sQ0FBQyxJQUFJN0IsSUFBSSxLQUFLVyxXQUFXVSxZQUFZLElBQUksS0FBS0csU0FBU0ssQ0FBQyxJQUFJN0IsSUFBSSxLQUFLVyxXQUFXVSxZQUFZLE1BQU0sS0FBS0ksV0FBV0ksQ0FBQyxJQUFJN0I7SUFDdks7QUFDQSxXQUFPO0VBQ1Q7O0VBRUFHLEVBQUU1RCxHQUFHQyxHQUFHO0FBQ04sV0FBTyxLQUFLMkU7TUFDVjVFO01BQ0FDO01BQ0E7O0lBRUY7RUFDRjs7RUFFQUYsRUFBRUMsR0FBR0MsR0FBRztBQUNOLFdBQU8sS0FBSzJFO01BQ1Y1RTtNQUNBQztNQUNBOztJQUVGO0VBQ0Y7O0VBRUF1RCxFQUFFeEQsR0FBR0MsR0FBRztBQUNOLFdBQU8sS0FBSzJFO01BQ1Y1RTtNQUNBQztNQUNBOztJQUVGO0VBQ0Y7O0VBRUFzRixLQUFLO0FBQ0gsV0FBTyxLQUFLYjtNQUNWOztJQUVGO0VBQ0Y7O0VBRUF2RCxJQUFJO0FBQ0YsV0FBTyxLQUFLdUQ7TUFDVjs7SUFFRjtFQUNGOztFQUVBMUUsSUFBSTtBQUNGLFdBQU8sS0FBSzBFO01BQ1Y7O0lBRUY7RUFDRjs7RUFFQVUsSUFBSTtBQUNGLFdBQU8sS0FBS1Y7TUFDVjs7SUFFRjtFQUNGOztFQUVBbkUsSUFBSTtBQUNGLFdBQU8sS0FBS21FO01BQ1Y7O0lBRUY7RUFDRjs7RUFFQVcsSUFBSTtBQUNGLFdBQU8sS0FBS1g7TUFDVjs7SUFFRjtFQUNGOztFQUVBYyxJQUFJO0FBQ0YsV0FBTyxLQUFLZDtNQUNWOztJQUVGO0VBQ0Y7O0VBRUF4RCxJQUFJO0FBQ0YsV0FBTyxLQUFLd0Q7TUFDVjs7SUFFRjtFQUNGO0FBQ0Y7QUFDQSxJQUFNZSxJQUFJQSxNQUFNO0FBQ2QsUUFBTTFGLElBQUksSUFBSW1FLEVBQUU7QUFDaEIsU0FBT25FLEVBQUVvRSxFQUFFLElBQUksRUFBRW9CLEdBQUcsRUFBRXhGLEVBQUUsR0FBRyxDQUFDLEVBQUVvQixFQUFFLEVBQUVwQixFQUFFLEdBQUcsRUFBRSxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRXZCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVKLEVBQUUsR0FBRyxDQUFDLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUV4RCxFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVvRixHQUFHLEdBQUcsQ0FBQyxFQUFFQyxFQUFFLEVBQUVyRixFQUFFLEdBQUcsQ0FBQyxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRXZCLEVBQUUsR0FBRyxFQUFFLEVBQUVKLEVBQUUsR0FBRyxDQUFDLEVBQUVqRCxFQUFFLEVBQUVSLEVBQUUsR0FBRyxFQUFFLEVBQUVvRixHQUFHLEdBQUcsQ0FBQyxFQUFFRSxFQUFFLEVBQUV0RixFQUFFLElBQUksQ0FBQyxFQUFFb0YsR0FBRyxJQUFJLENBQUMsRUFBRXZCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsSUFBSSxFQUFFLEVBQUVKLEVBQUUsSUFBSSxDQUFDLEVBQUVBLEVBQUUsSUFBSSxDQUFDLEVBQUVnQyxFQUFFLEVBQUV6RixFQUFFLElBQUksQ0FBQyxHQUFHQSxFQUFFb0UsRUFBRSxJQUFJLEVBQUVvQixHQUFHLEVBQUV4RixFQUFFLEdBQUcsQ0FBQyxFQUFFb0IsRUFBRSxFQUFFcEIsRUFBRSxHQUFHLEVBQUUsRUFBRW9GLEdBQUcsR0FBRyxFQUFFLEVBQUV2QixFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUcsRUFBRSxFQUFFSixFQUFFLEdBQUcsRUFBRSxFQUFFMkIsR0FBRyxHQUFHLEVBQUUsRUFBRW5GLEVBQUUsRUFBRUQsRUFBRSxHQUFHLENBQUMsRUFBRW9GLEdBQUcsR0FBRyxDQUFDLEVBQUV2QixFQUFFLEdBQUcsQ0FBQyxFQUFFSixFQUFFLEdBQUcsQ0FBQyxFQUFFNEIsRUFBRSxFQUFFckYsRUFBRSxHQUFHLENBQUMsRUFBRW9GLEdBQUcsR0FBRyxDQUFDLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsRUFBRSxFQUFFSixFQUFFLEdBQUcsQ0FBQyxFQUFFMkIsR0FBRyxHQUFHLENBQUMsRUFBRTVFLEVBQUUsRUFBRVIsRUFBRSxHQUFHLEVBQUUsRUFBRXlGLEVBQUUsRUFBRXpGLEVBQUUsR0FBRyxFQUFFLEVBQUVvRixHQUFHLEdBQUcsRUFBRSxFQUFFdkIsRUFBRSxHQUFHLEVBQUUsRUFBRUosRUFBRSxHQUFHLEVBQUUsRUFBRTZCLEVBQUUsRUFBRXRGLEVBQUUsSUFBSSxDQUFDLEVBQUVvRixHQUFHLElBQUksQ0FBQyxFQUFFdkIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxJQUFJLEVBQUUsRUFBRUosRUFBRSxJQUFJLENBQUMsRUFBRUEsRUFBRSxJQUFJLENBQUMsR0FBR3pELEVBQUVvRSxFQUFFLElBQUksRUFBRW9CLEdBQUcsRUFBRXhGLEVBQUUsR0FBRyxDQUFDLEVBQUVvRixHQUFHLEdBQUcsQ0FBQyxFQUFFaEUsRUFBRSxFQUFFcEIsRUFBRSxHQUFHLEVBQUUsRUFBRW9GLEdBQUcsR0FBRyxFQUFFLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFdUIsR0FBRyxHQUFHLEVBQUUsRUFBRTNCLEVBQUUsR0FBRyxFQUFFLEVBQUUyQixHQUFHLEdBQUcsRUFBRSxFQUFFbkYsRUFBRSxFQUFFRCxFQUFFLEdBQUcsQ0FBQyxFQUFFcUYsRUFBRSxFQUFFckYsRUFBRSxHQUFHLEVBQUUsRUFBRW9GLEdBQUcsR0FBRyxDQUFDLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFSixFQUFFLEdBQUcsQ0FBQyxFQUFFMkIsR0FBRyxHQUFHLENBQUMsRUFBRTVFLEVBQUUsRUFBRVIsRUFBRSxHQUFHLEVBQUUsRUFBRW9GLEdBQUcsR0FBRyxFQUFFLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFSixFQUFFLEdBQUcsRUFBRSxFQUFFZ0MsRUFBRSxFQUFFekYsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEVBQUUsRUFBRXRGLEVBQUUsR0FBRyxFQUFFLEVBQUVvRixHQUFHLElBQUksQ0FBQyxFQUFFdkIsRUFBRSxJQUFJLENBQUMsRUFBRXVCLEdBQUcsSUFBSSxDQUFDLEVBQUUzQixFQUFFLElBQUksQ0FBQyxFQUFFMkIsR0FBRyxJQUFJLENBQUMsR0FBR3BGLEVBQUVvRSxFQUFFLElBQUksRUFBRW9CLEdBQUcsRUFBRXhGLEVBQUUsR0FBRyxDQUFDLEVBQUVvRixHQUFHLEdBQUcsQ0FBQyxFQUFFaEUsRUFBRSxFQUFFcEIsRUFBRSxHQUFHLEVBQUUsRUFBRW9GLEdBQUcsR0FBRyxDQUFDLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsRUFBRSxFQUFFSixFQUFFLEdBQUcsQ0FBQyxFQUFFMkIsR0FBRyxHQUFHLENBQUMsRUFBRW5GLEVBQUUsRUFBRUQsRUFBRSxHQUFHLENBQUMsRUFBRW9GLEdBQUcsR0FBRyxDQUFDLEVBQUV2QixFQUFFLEdBQUcsQ0FBQyxFQUFFSixFQUFFLEdBQUcsQ0FBQyxFQUFFNEIsRUFBRSxFQUFFckYsRUFBRSxHQUFHLEVBQUUsRUFBRW9GLEdBQUcsR0FBRyxDQUFDLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFSixFQUFFLEdBQUcsQ0FBQyxFQUFFMkIsR0FBRyxHQUFHLENBQUMsRUFBRTVFLEVBQUUsRUFBRVIsRUFBRSxHQUFHLENBQUMsRUFBRW9GLEdBQUcsR0FBRyxDQUFDLEVBQUVLLEVBQUUsRUFBRXpGLEVBQUUsR0FBRyxFQUFFLEVBQUVvRixHQUFHLEdBQUcsRUFBRSxFQUFFRSxFQUFFLEVBQUV0RixFQUFFLElBQUksQ0FBQyxFQUFFb0YsR0FBRyxJQUFJLENBQUMsRUFBRXZCLEVBQUUsSUFBSSxDQUFDLEVBQUVBLEVBQUUsSUFBSSxDQUFDLEVBQUVKLEVBQUUsSUFBSSxDQUFDLEVBQUUyQixHQUFHLElBQUksQ0FBQyxFQUFFSSxHQUFHLEVBQUV4RixFQUFFLElBQUksRUFBRSxHQUFHQSxFQUFFb0UsRUFBRSxJQUFJLEVBQUVvQixHQUFHLEVBQUV4RixFQUFFLEdBQUcsQ0FBQyxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRWhFLEVBQUUsRUFBRXBCLEVBQUUsR0FBRyxFQUFFLEVBQUVvRixHQUFHLEdBQUcsRUFBRSxFQUFFdkIsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHLEVBQUUsRUFBRUosRUFBRSxHQUFHLEVBQUUsRUFBRTJCLEdBQUcsR0FBRyxFQUFFLEVBQUVuRixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVvRixHQUFHLEdBQUcsQ0FBQyxFQUFFQyxFQUFFLEVBQUVyRixFQUFFLEdBQUcsQ0FBQyxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRXZCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVKLEVBQUUsR0FBRyxDQUFDLEVBQUUyQixHQUFHLEdBQUcsQ0FBQyxFQUFFNUUsRUFBRSxFQUFFUixFQUFFLEdBQUcsRUFBRSxFQUFFb0YsR0FBRyxHQUFHLEVBQUUsRUFBRUssRUFBRSxFQUFFekYsRUFBRSxHQUFHLEVBQUUsRUFBRW9GLEdBQUcsR0FBRyxFQUFFLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFSixFQUFFLEdBQUcsRUFBRSxFQUFFNkIsRUFBRSxFQUFFdEYsRUFBRSxJQUFJLENBQUMsRUFBRW9GLEdBQUcsSUFBSSxDQUFDLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLElBQUksQ0FBQyxFQUFFSixFQUFFLElBQUksQ0FBQyxFQUFFMkIsR0FBRyxJQUFJLENBQUMsR0FBR3BGLEVBQUVvRSxFQUFFLElBQUksRUFBRW9CLEdBQUcsRUFBRXhGLEVBQUUsR0FBRyxDQUFDLEVBQUVvQixFQUFFLEVBQUVwQixFQUFFLEdBQUcsRUFBRSxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRXZCLEVBQUUsR0FBRyxFQUFFLEVBQUVKLEVBQUUsR0FBRyxFQUFFLEVBQUV4RCxFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVvRixHQUFHLEdBQUcsQ0FBQyxFQUFFQyxFQUFFLEVBQUVyRixFQUFFLEdBQUcsQ0FBQyxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRXZCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVKLEVBQUUsR0FBRyxDQUFDLEVBQUUyQixHQUFHLEdBQUcsQ0FBQyxFQUFFNUUsRUFBRSxFQUFFUixFQUFFLEdBQUcsRUFBRSxFQUFFb0YsR0FBRyxHQUFHLEVBQUUsRUFBRXZCLEVBQUUsR0FBRyxFQUFFLEVBQUVKLEVBQUUsR0FBRyxFQUFFLEVBQUU2QixFQUFFLEVBQUV0RixFQUFFLElBQUksQ0FBQyxFQUFFb0YsR0FBRyxJQUFJLENBQUMsRUFBRXZCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsSUFBSSxFQUFFLEVBQUVKLEVBQUUsSUFBSSxDQUFDLEVBQUUyQixHQUFHLElBQUksQ0FBQyxHQUFHcEYsRUFBRW9FLEVBQUUsSUFBSSxFQUFFb0IsR0FBRyxFQUFFeEYsRUFBRSxHQUFHLENBQUMsRUFBRW9CLEVBQUUsRUFBRXBCLEVBQUUsR0FBRyxDQUFDLEVBQUVvRixHQUFHLEdBQUcsRUFBRSxFQUFFdkIsRUFBRSxHQUFHLENBQUMsRUFBRXVCLEdBQUcsR0FBRyxDQUFDLEVBQUUzQixFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFeEQsRUFBRSxFQUFFRCxFQUFFLEdBQUcsQ0FBQyxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRUMsRUFBRSxFQUFFckYsRUFBRSxHQUFHLENBQUMsRUFBRW9GLEdBQUcsR0FBRyxDQUFDLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFSixFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFakQsRUFBRSxFQUFFUixFQUFFLEdBQUcsQ0FBQyxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRUssRUFBRSxFQUFFekYsRUFBRSxHQUFHLEVBQUUsRUFBRW9GLEdBQUcsR0FBRyxFQUFFLEVBQUVFLEVBQUUsRUFBRXRGLEVBQUUsSUFBSSxDQUFDLEVBQUVvRixHQUFHLElBQUksQ0FBQyxFQUFFdkIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxJQUFJLEVBQUUsRUFBRUosRUFBRSxJQUFJLENBQUMsRUFBRUEsRUFBRSxJQUFJLENBQUMsR0FBR3pELEVBQUVvRSxFQUFFLElBQUksRUFBRW9CLEdBQUcsRUFBRXhGLEVBQUUsR0FBRyxDQUFDLEVBQUVvQixFQUFFLEVBQUVwQixFQUFFLEdBQUcsRUFBRSxFQUFFb0YsR0FBRyxHQUFHLEVBQUUsRUFBRXZCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxFQUFFLEVBQUVKLEVBQUUsR0FBRyxFQUFFLEVBQUUyQixHQUFHLEdBQUcsRUFBRSxFQUFFbkYsRUFBRSxFQUFFRCxFQUFFLEdBQUcsQ0FBQyxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRXZCLEVBQUUsR0FBRyxDQUFDLEVBQUVKLEVBQUUsR0FBRyxDQUFDLEVBQUU0QixFQUFFLEVBQUVyRixFQUFFLEdBQUcsRUFBRSxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRXZCLEVBQUUsR0FBRyxFQUFFLEVBQUVKLEVBQUUsR0FBRyxFQUFFLEVBQUVqRCxFQUFFLEVBQUVSLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixFQUFFLEVBQUV0RixFQUFFLElBQUksQ0FBQyxFQUFFb0YsR0FBRyxJQUFJLENBQUMsRUFBRXZCLEVBQUUsR0FBRyxFQUFFLEVBQUV1QixHQUFHLEdBQUcsRUFBRSxFQUFFM0IsRUFBRSxJQUFJLENBQUMsRUFBRTJCLEdBQUcsSUFBSSxDQUFDLEVBQUVLLEVBQUUsRUFBRXpGLEVBQUUsR0FBRyxFQUFFLEVBQUV3RixHQUFHLEVBQUV4RixFQUFFLElBQUksRUFBRSxFQUFFb0YsR0FBRyxJQUFJLEVBQUUsRUFBRXZCLEVBQUUsSUFBSSxFQUFFLEVBQUVKLEVBQUUsSUFBSSxFQUFFLEdBQUd6RCxFQUFFb0UsRUFBRSxJQUFJLEVBQUVvQixHQUFHLEVBQUV4RixFQUFFLEdBQUcsQ0FBQyxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRWhFLEVBQUUsRUFBRXBCLEVBQUUsR0FBRyxFQUFFLEVBQUVvRixHQUFHLEdBQUcsQ0FBQyxFQUFFdkIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxHQUFHLENBQUMsRUFBRUosRUFBRSxHQUFHLENBQUMsRUFBRTJCLEdBQUcsR0FBRyxDQUFDLEVBQUVuRixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVvRixHQUFHLEdBQUcsQ0FBQyxFQUFFdkIsRUFBRSxHQUFHLENBQUMsRUFBRUosRUFBRSxHQUFHLENBQUMsRUFBRTRCLEVBQUUsRUFBRXJGLEVBQUUsR0FBRyxDQUFDLEVBQUVRLEVBQUUsRUFBRVIsRUFBRSxHQUFHLEVBQUUsRUFBRW9GLEdBQUcsR0FBRyxFQUFFLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFSixFQUFFLEdBQUcsRUFBRSxFQUFFNkIsRUFBRSxFQUFFdEYsRUFBRSxJQUFJLENBQUMsRUFBRW9GLEdBQUcsSUFBSSxDQUFDLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFSixFQUFFLElBQUksQ0FBQyxFQUFFZ0MsRUFBRSxFQUFFekYsRUFBRSxJQUFJLENBQUMsR0FBR0EsRUFBRW9FLEVBQUUsSUFBSSxFQUFFb0IsR0FBRyxFQUFFeEYsRUFBRSxHQUFHLENBQUMsRUFBRW9CLEVBQUUsRUFBRXBCLEVBQUUsR0FBRyxDQUFDLEVBQUVvRixHQUFHLEdBQUcsRUFBRSxFQUFFdkIsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHLEVBQUUsRUFBRUosRUFBRSxHQUFHLEVBQUUsRUFBRTJCLEdBQUcsR0FBRyxFQUFFLEVBQUVuRixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVxRixFQUFFLEVBQUVyRixFQUFFLEdBQUcsQ0FBQyxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRTVFLEVBQUUsRUFBRVIsRUFBRSxHQUFHLENBQUMsRUFBRW9GLEdBQUcsR0FBRyxFQUFFLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFSixFQUFFLEdBQUcsRUFBRSxFQUFFZ0MsRUFBRSxFQUFFekYsRUFBRSxHQUFHLEVBQUUsRUFBRW9GLEdBQUcsR0FBRyxFQUFFLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFSixFQUFFLEdBQUcsRUFBRSxFQUFFNkIsRUFBRSxFQUFFdEYsRUFBRSxJQUFJLENBQUMsRUFBRW9GLEdBQUcsSUFBSSxDQUFDLEVBQUV2QixFQUFFLElBQUksQ0FBQyxFQUFFdUIsR0FBRyxJQUFJLENBQUMsRUFBRTNCLEVBQUUsSUFBSSxDQUFDLEVBQUUyQixHQUFHLElB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RixHQUFHLEdBQUcsRUFBRSxFQUFFdkIsRUFBRSxHQUFHLENBQUMsRUFBRXVCLEdBQUcsR0FBRyxDQUFDLEVBQUUzQixFQUFFLEdBQUcsRUFBRSxFQUFFMkIsR0FBRyxHQUFHLEVBQUUsRUFBRUssRUFBRSxFQUFFekYsRUFBRSxHQUFHLEVBQUUsRUFBRW9GLEdBQUcsR0FBRyxFQUFFLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFSixFQUFFLEdBQUcsRUFBRSxFQUFFNkIsRUFBRSxFQUFFdEYsRUFBRSxJQUFJLENBQUMsRUFBRW9GLEdBQUcsSUFBSSxDQUFDLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLElBQUksRUFBRSxFQUFFSixFQUFFLElBQUksQ0FBQyxFQUFFQSxFQUFFLElBQUksQ0FBQyxHQUFHekQsRUFBRW9FLEVBQUUsSUFBSSxFQUFFb0IsR0FBRyxFQUFFeEYsRUFBRSxHQUFHLENBQUMsRUFBRW9GLEdBQUcsR0FBRyxDQUFDLEVBQUUzQixFQUFFLEdBQUcsQ0FBQyxFQUFFckMsRUFBRSxFQUFFcEIsRUFBRSxHQUFHLEVBQUUsRUFBRW9GLEdBQUcsR0FBRyxFQUFFLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsRUFBRSxFQUFFSixFQUFFLEdBQUcsRUFBRSxFQUFFMkIsR0FBRyxHQUFHLEVBQUUsRUFBRW5GLEVBQUUsRUFBRUQsRUFBRSxHQUFHLENBQUMsRUFBRW9GLEdBQUcsR0FBRyxDQUFDLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFSixFQUFFLEdBQUcsQ0FBQyxFQUFFMkIsR0FBRyxHQUFHLENBQUMsRUFBRUMsRUFBRSxFQUFFckYsRUFBRSxHQUFHLEVBQUUsRUFBRW9GLEdBQUcsR0FBRyxDQUFDLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFSixFQUFFLEdBQUcsRUFBRSxFQUFFakQsRUFBRSxFQUFFUixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsRUFBRSxFQUFFeUYsRUFBRSxFQUFFekYs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RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VB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QUFHLEtBQUssRUFBRXZCLE9BQU8sWUFBWTtBQUMzRSxNQUFJcUQsSUFBSTlCLEdBQUc2RztBQUNYLFNBQU81RyxNQUFNdkMsTUFBTW9FLEtBQUs2RCxFQUFFbEosR0FBR2lCLENBQUMsR0FBR21KLElBQUlqRixFQUFFdEQsSUFBSXdELEdBQUcsS0FBSyxFQUFFckQsT0FBTyxZQUFZLElBQUk7SUFDMUVpQixNQUFNbUM7SUFDTmlGLGVBQWVEO0VBQ2pCO0FBQ0Y7QUE3ZUEsSUE2ZUdFLEtBQUs7RUFDTm5NLGNBQWNDO0VBQ2RDLHNCQUFzQkM7RUFDdEJDLHVCQUF1QkM7QUFDekI7QUFqZkEsSUFpZkcrTCxLQUFxQjVLLHVCQUFPd0csT0FBdUJ4Ryx1QkFBT0MsZUFBZTtFQUMxRXdHLFdBQVc7RUFDWG9FLFNBQVNGO0VBQ1RuTSxjQUFjQztFQUNkQyxzQkFBc0JDO0VBQ3RCQyx1QkFBdUJDO0FBQ3pCLEdBQUc2SCxPQUFPQyxhQUFhO0VBQUVsRyxPQUFPO0FBQVMsQ0FBQyxDQUFDO0FBdmYzQyxJQXVmOENxSyxLQUFLO0VBQ2pELEdBQUd2RTtFQUNILEdBQUdzQztFQUNILEdBQUcrQjtBQUNMOyIsCiAgIm5hbWVzIjogWyJDaGluZXNlRGF5c19leHBvcnRzIiwgIl9fZXhwb3J0IiwgImZpbmRXb3JrZGF5IiwgInoiLCAiZ2V0RGF5RGV0YWlsIiwgIlUiLCAiZ2V0SG9saWRheXNJblJhbmdlIiwgIlciLCAiZ2V0THVuYXJEYXRlIiwgIk8iLCAiZ2V0THVuYXJEYXRlc0luUmFuZ2UiLCAiRSIsICJnZXRTb2xhckRhdGVGcm9tTHVuYXIiLCAiUiIsICJnZXRTb2xhclRlcm1EYXRlIiwgIlMiLCAiZ2V0U29sYXJUZXJtcyIsICJKIiwgImdldFNvbGFyVGVybXNJblJhbmdlIiwgIksiLCAiZ2V0V29ya2RheXNJblJhbmdlIiwgIlAiLCAiaXNIb2xpZGF5IiwgIk4iLCAiaXNJbkxpZXUiLCAicSIsICJpc1dvcmtkYXkiLCAiZiIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAieCIsICJPYmplY3QiLCAiZGVmaW5lUHJvcGVydHkiLCAiQiIsICJyIiwgInQiLCAiZSIsICJlbnVtZXJhYmxlIiwgImNvbmZpZ3VyYWJsZSIsICJ3cml0YWJsZSIsICJ2YWx1ZSIsICJjIiwgImQiLCAiZDIiLCAiY29uc3RydWN0b3IiLCAiX2RhdGUiLCAiRGF0ZSIsICJ0b0RhdGUiLCAiaXNOYU4iLCAiZ2V0VGltZSIsICJyZXBsYWNlIiwgImlzVmFsaWQiLCAiZGlmZiIsICJhIiwgInMiLCAiZ2V0RnVsbFllYXIiLCAiZ2V0TW9udGgiLCAiTWF0aCIsICJmbG9vciIsICJzdGFydE9mIiwgInNldE1vbnRoIiwgInNldERhdGUiLCAic2V0SG91cnMiLCAiZW5kT2YiLCAiZ2V0RGF0ZSIsICJhZGQiLCAic2V0RnVsbFllYXIiLCAic3VidHJhY3QiLCAiZm9ybWF0IiwgIllZWVkiLCAiTU0iLCAidG9TdHJpbmciLCAicGFkU3RhcnQiLCAiREQiLCAiSEgiLCAiZ2V0SG91cnMiLCAibW0iLCAiZ2V0TWludXRlcyIsICJzcyIsICJnZXRTZWNvbmRzIiwgImRkZGQiLCAiZGF5c09mV2VlayIsICJnZXREYXkiLCAieWVhciIsICJtb250aCIsICJkYXRlIiwgImRheSIsICJpc0JlZm9yZSIsICJpc0FmdGVyIiwgImlzU2FtZSIsICJpc0JldHdlZW4iLCAiaSIsICJvIiwgIk0iLCAiaCIsICJ3IiwgIkQiLCAiQXJyYXkiLCAiZnJvbSIsICJsZW5ndGgiLCAiQSIsICJDIiwgInkiLCAiZGF5RGV0YWlscyIsICJnZXRIb2xpZGF5RGF5cyIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJwYXJzZUludCIsICJtYXJrIiwgImhvbGlkYXkiLCAic2F2ZSIsICJFcnJvciIsICJkYXlUeXBlIiwgImNvbmNhdCIsICJob2xpZGF5cyIsICJ3b3JrZGF5cyIsICJpbkxpZXVEYXlzIiwgInRvIiwgImwiLCAibiIsICJfIiwgIm55IiwgIm0iLCAiaiIsICJnIiwgInAiLCAiSSIsICJ1IiwgIm1hcCIsICJ3b3JrIiwgIm5hbWUiLCAiZmlsdGVyIiwgImFicyIsICJWIiwgImZyZWV6ZSIsICJfX3Byb3RvX18iLCAiU3ltYm9sIiwgInRvU3RyaW5nVGFnIiwgIloiLCAidGhlX2JlZ2lubmluZ19vZl9zcHJpbmciLCAicmFpbl93YXRlciIsICJ0aGVfd2FraW5nX29mX2luc2VjdHMiLCAidGhlX3NwcmluZ19lcXVpbm94IiwgInB1cmVfYnJpZ2h0bmVzcyIsICJncmFpbl9yYWluIiwgInRoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyIiwgImxlc3Nlcl9mdWxsbmVzc19vZl9ncmFpbiIsICJncmFpbl9pbl9iZWFyZCIsICJ0aGVfc3VtbWVyX3NvbHN0aWNlIiwgImxlc3Nlcl9oZWF0IiwgImdyZWF0ZXJfaGVhdCIsICJ0aGVfYmVnaW5uaW5nX29mX2F1dHVtbiIsICJ0aGVfZW5kX29mX2hlYXQiLCAid2hpdGVfZGV3IiwgInRoZV9hdXR1bW5fZXF1aW5veCIsICJjb2RlX2RldyIsICJmcm9zdF9kZXNjZW50IiwgInRoZV9iZWdpbm5pbmdfb2Zfd2ludGVyIiwgImxlc3Nlcl9zbm93IiwgImdyZWF0ZXJfc25vdyIsICJ0aGVfd2ludGVyX3NvbHN0aWNlIiwgImxlc3Nlcl9jb2xkIiwgImdyZWF0ZXJfY29sZCIsICJUIiwgIkciLCAidiIsICJpbmNsdWRlcyIsICJmb3JFYWNoIiwgInB1c2giLCAidGVybSIsICJpbmRleCIsICJRIiwgIiQiLCAiWCIsICJ0dCIsICJldCIsICJydCIsICJIIiwgIkYiLCAiayIsICJZIiwgImIiLCAiYXQiLCAib3QiLCAiZmlsbCIsICJsdW5hclllYXIiLCAibHVuYXJNb24iLCAibHVuYXJEYXkiLCAiaXNMZWFwIiwgInpvZGlhYyIsICJ5ZWFyQ3lsIiwgIm1vbkN5bCIsICJkYXlDeWwiLCAibHVuYXJZZWFyQ04iLCAic3BsaXQiLCAiTnVtYmVyIiwgImpvaW4iLCAibHVuYXJNb25DTiIsICJsdW5hckRheUNOIiwgIkwiLCAibGVhcE1vbnRoRGF0ZSIsICJudCIsICJzdCIsICJkZWZhdWx0IiwgImx0Il0KfQo=
