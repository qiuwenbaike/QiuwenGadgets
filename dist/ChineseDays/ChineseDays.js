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
  findWorkday: () => X,
  getDayDetail: () => J,
  getHolidaysInRange: () => K,
  getLunarDate: () => m,
  getLunarDatesInRange: () => j,
  getLunarFestivals: () => q,
  getLunarYears: () => R,
  getSolarDateFromLunar: () => I,
  getSolarTermDate: () => L,
  getSolarTerms: () => at,
  getSolarTermsInRange: () => $,
  getWorkdaysInRange: () => Q,
  getYearLeapMonth: () => C,
  isHoliday: () => O,
  isInLieu: () => G,
  isWorkday: () => f,
  monthDays: () => D
});
module.exports = __toCommonJS(ChineseDays_exports);
var P = Object.defineProperty;
var U = (r, t, e) => t in r ? P(r, t, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: e
}) : r[t] = e;
var w = (r, t, e) => U(r, typeof t != "symbol" ? t + "" : t, e);
var l = class l2 {
  constructor(t) {
    w(this, "_date");
    t instanceof l2 ? this._date = new Date(t.toDate()) : t instanceof Date ? this._date = new Date(t) : typeof t == "string" || typeof t == "number" ? (this._date = new Date(t), typeof t == "string" && isNaN(this._date.getTime()) && (this._date = new Date(t.replace(/-/g, "/")))) : this._date = /* @__PURE__ */ new Date();
  }
  toDate() {
    return this._date;
  }
  isValid() {
    return !isNaN(this._date.getTime());
  }
  diff(t, e = "day") {
    const a = new l2(t).toDate(), o = this._date.getTime() - a.getTime();
    switch (e) {
      case "year":
        return this._date.getFullYear() - a.getFullYear();
      case "month":
        return (this._date.getFullYear() - a.getFullYear()) * 12 + (this._date.getMonth() - a.getMonth());
      case "day":
      default:
        return Math.floor(o / (1e3 * 60 * 60 * 24));
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
    return new l2(e);
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
    return new l2(e);
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
    return new l2(a);
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
      dddd: l2.daysOfWeek[this._date.getDay()]
    };
    return t.replace(/YYYY|MM|DD|HH|mm|ss|dddd/g, (a) => e[a].toString());
  }
  year(t) {
    if (t === void 0) return this._date.getFullYear();
    const e = new Date(this._date);
    return e.setFullYear(t), new l2(e);
  }
  month(t) {
    if (t === void 0) return this._date.getMonth();
    const e = new Date(this._date);
    return e.setMonth(t), new l2(e);
  }
  date(t) {
    if (t === void 0) return this._date.getDate();
    const e = new Date(this._date);
    return e.setDate(t), new l2(e);
  }
  day(t) {
    if (t === void 0) return this._date.getDay();
    {
      const e = this._date.getDay(), a = t - e, o = new Date(this._date);
      return o.setDate(this._date.getDate() + a), new l2(o);
    }
  }
  isBefore(t) {
    const e = new l2(t).toDate();
    return this._date.getTime() < e.getTime();
  }
  isAfter(t) {
    const e = new l2(t).toDate();
    return this._date.getTime() > e.getTime();
  }
  isSame(t, e = "day") {
    const a = new l2(t).toDate();
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
    const o = new l2(t).startOf(a).toDate(), s = new l2(e).endOf(a).toDate(), n = this.toDate();
    return n >= o && n <= s;
  }
};
w(l, "daysOfWeek", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
var S = l;
var h = (r) => new S(r);
var u = (r) => h(r).startOf("day");
var Y = (r, t) => {
  r = u(r), t = u(t);
  const e = t.diff(r, "day");
  return Array.from({
    length: e + 1
  }, (a, o) => r.add(o, "day"));
};
var W = {
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
var z = class {
  constructor() {
    w(this, "dayDetails", {});
    w(this, "holidays", {});
    w(this, "workdays", {});
    w(this, "inLieuDays", {});
  }
  /** year at */
  y(t) {
    return this.dayDetails.year = t, this;
  }
  /** 查询某年 节假日天数 */
  getHolidayDays(t, e) {
    let a = 0;
    for (var _i = 0, _Object$entries = Object.entries(W); _i < _Object$entries.length; _i++) {
      const [o, s] = _Object$entries[_i];
      if (parseInt(o) > t) break;
      s[e] !== void 0 && (a = s[e]);
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
    const o = h("".concat(this.dayDetails.year, "-").concat(t, "-").concat(e)).format("YYYY-MM-DD"), s = this.getHolidayDays(this.dayDetails.year, this.dayDetails.holiday), n = "".concat(this.dayDetails.holiday, ",").concat(s);
    return a === 2 ? this.holidays[o] = n : a === 1 ? this.workdays[o] = n : a === 3 && (this.inLieuDays[o] = n), this;
  }
  to(t, e) {
    if (!this.dayDetails.holiday || !this.dayDetails.year || !this.dayDetails.month || !this.dayDetails.day) throw new Error("should set year/month/day before saving holiday range");
    const a = h("".concat(this.dayDetails.year, "-").concat(this.dayDetails.month, "-").concat(this.dayDetails.day)), o = h("".concat(this.dayDetails.year, "-").concat(t, "-").concat(e));
    if (o.isBefore(a) || o.isSame(a)) throw new Error("end date should be after start date");
    const s = this.getHolidayDays(this.dayDetails.year, this.dayDetails.holiday), n = "".concat(this.dayDetails.holiday, ",").concat(s), d = o.diff(a, "day");
    for (let i = 1; i <= d; i++) {
      const _ = a.add(i, "day").format("YYYY-MM-DD");
      this.dayDetails.dayType === 2 ? this.holidays[_] = n : this.dayDetails.dayType === 1 ? this.workdays[_] = n : this.dayDetails.dayType === 3 && (this.inLieuDays[_] = n);
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
var V = () => {
  const r = new z();
  return r.y(2025).ny().r(1, 1).s().r(1, 28).to(2, 4).w(1, 26).w(2, 8).i(2, 3).i(2, 4).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 27).i(5, 5).d().r(5, 31).to(6, 2).n().r(10, 1).to(10, 8).w(9, 28).w(10, 11).i(10, 7).i(10, 8).m().r(10, 6), r.y(2024).ny().r(1, 1).s().r(2, 10).to(2, 17).w(2, 4).w(2, 18).i(2, 15).to(2, 16).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(5, 1).to(5, 5).w(4, 28).w(5, 11).i(5, 2).to(5, 3).d().r(6, 10).m().r(9, 15).to(9, 17).w(9, 14).i(9, 16).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2023).ny().r(1, 1).to(1, 2).s().r(1, 21).to(1, 27).w(1, 28).to(1, 29).i(1, 26).to(1, 27).t().r(4, 5).l().r(4, 29).to(5, 3).w(4, 23).w(5, 6).i(5, 2).to(5, 3).d().r(6, 22).to(6, 24).w(6, 25).i(6, 23).m().r(9, 29).n().r(9, 30).to(10, 6).w(10, 7).to(10, 8).i(10, 5).to(10, 6), r.y(2022).ny().r(1, 1).to(1, 3).s().r(1, 31).to(2, 6).w(1, 29).w(1, 30).i(2, 3).to(2, 4).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 4).w(4, 24).w(5, 7).i(5, 3).to(5, 4).d().r(6, 3).to(6, 5).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).w(10, 9).i(10, 6).to(10, 7).ny().r(12, 31), r.y(2021).ny().r(1, 1).to(1, 3).s().r(2, 11).to(2, 17).w(2, 7).w(2, 20).i(2, 16).to(2, 17).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 5).w(4, 25).w(5, 8).i(5, 4).to(5, 5).d().r(6, 12).to(6, 14).m().r(9, 19).to(9, 21).w(9, 18).i(9, 20).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), r.y(2020).ny().r(1, 1).s().r(1, 24).to(2, 2).w(1, 19).i(1, 29).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 26).w(5, 9).i(5, 4).to(5, 5).d().r(6, 25).to(6, 27).w(6, 28).i(6, 26).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8), r.y(2019).ny().r(1, 1).s().r(2, 4).to(2, 10).w(2, 2).to(2, 3).i(2, 4).i(2, 8).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 4).w(4, 28).w(5, 5).i(5, 2).i(5, 3).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2018).ny().r(1, 1).s().r(2, 15).to(2, 21).w(2, 11).w(2, 24).i(2, 19).to(2, 21).t().r(4, 5).to(4, 7).w(4, 8).i(4, 6).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 18).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).m().r(9, 24).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), r.y(2017).ny().r(1, 1).to(1, 2).s().r(1, 27).to(2, 2).w(1, 22).w(2, 4).i(2, 1).to(2, 2).t().r(4, 2).to(4, 4).w(4, 1).i(4, 3).l().r(5, 1).d().r(5, 28).to(5, 30).w(5, 27).i(5, 29).n().r(10, 1).to(10, 8).w(9, 30).i(10, 6).m().r(10, 4), r.y(2016).ny().r(1, 1).s().r(2, 7).to(2, 13).w(2, 6).w(2, 14).i(2, 11).to(2, 12).t().r(4, 4).l().r(5, 1).to(5, 2).d().r(6, 9).to(6, 11).w(6, 12).i(6, 10).m().r(9, 15).to(9, 17).w(9, 18).i(9, 16).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), r.y(2015).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(2, 18).to(2, 24).w(2, 15).w(2, 28).i(2, 23).to(2, 24).t().r(4, 5).to(4, 6).l().r(5, 1).d().r(6, 20).r(6, 22).m().r(9, 27).n().r(10, 1).to(10, 7).w(10, 10).i(10, 7).a().r(9, 3).to(9, 4).w(9, 6).i(9, 4), r.y(2014).ny().r(1, 1).s().r(1, 31).to(2, 6).w(1, 26).w(2, 8).i(2, 5).to(2, 6).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 2).m().r(9, 8).n().r(10, 1).to(10, 7).w(9, 28).w(10, 11).i(10, 6).to(10, 7), r.y(2013).ny().r(1, 1).to(1, 3).w(1, 5).to(1, 6).i(1, 2).to(1, 3).s().r(2, 9).to(2, 15).w(2, 16).to(2, 17).i(2, 14).to(2, 15).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(4, 29).to(5, 1).w(4, 27).to(4, 28).i(4, 29).to(4, 30).d().r(6, 10).to(6, 12).w(6, 8).to(6, 9).i(6, 10).to(6, 11).m().r(9, 19).to(9, 21).w(9, 22).i(9, 20).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2012).ny().r(1, 1).to(1, 3).i(1, 3).s().r(1, 22).to(1, 28).w(1, 21).w(1, 29).i(1, 26).to(1, 27).t().r(4, 2).to(4, 4).w(3, 31).w(4, 1).i(4, 2).to(4, 3).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 22).r(6, 24).m().r(9, 30).n().r(10, 1).to(10, 7).w(9, 29).i(10, 5), r.y(2011).ny().r(1, 1).to(1, 3).s().r(2, 2).to(2, 8).w(1, 30).w(2, 12).i(2, 7).to(2, 8).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 2).d().r(6, 4).r(6, 6).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7).ny().w(12, 31), r.y(2010).ny().r(1, 1).to(1, 3).s().r(2, 13).to(2, 19).w(2, 20).to(2, 21).i(2, 18).to(2, 19).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 3).d().r(6, 14).to(6, 16).w(6, 12).to(6, 13).i(6, 14).to(6, 15).m().r(9, 22).to(9, 24).w(9, 19).w(9, 25).i(9, 23).to(9, 24).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), r.y(2009).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(1, 25).to(1, 31).w(1, 24).w(2, 1).i(1, 29).to(1, 30).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).d().r(5, 28).to(5, 30).w(5, 31).i(5, 29).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8).m().r(10, 3), r.y(2008).ny().r(1, 1).s().r(2, 6).to(2, 12).w(2, 2).to(2, 3).i(2, 11).to(2, 12).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(9, 29).to(10, 5).w(9, 27).to(9, 28).i(9, 29).to(9, 30), r.y(2007).ny().r(1, 1).to(1, 3).i(1, 2).to(1, 3).s().r(2, 18).to(2, 24).w(2, 17).w(2, 25).i(2, 22).to(2, 23).l().r(5, 1).to(5, 7).w(4, 28).to(4, 29).i(5, 4).i(5, 7).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), r.y(2006).ny().r(1, 1).to(1, 3).s().r(1, 29).to(2, 4).w(1, 28).w(2, 5).i(2, 2).to(2, 3).l().r(5, 1).to(5, 7).w(4, 29).to(4, 30).i(5, 4).to(5, 5).n().r(10, 1).to(10, 7).w(9, 30).w(10, 8).i(10, 5).to(10, 6).ny().w(12, 30).to(12, 31), r.y(2005).ny().r(1, 1).to(1, 3).s().r(2, 9).to(2, 15).w(2, 5).to(2, 6).i(2, 14).to(2, 15).l().r(5, 1).to(5, 7).w(4, 30).w(5, 8).i(5, 5).to(5, 6).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), r.y(2004).ny().r(1, 1).s().r(1, 22).to(1, 28).w(1, 17).to(1, 18).i(1, 27).to(1, 28).l().r(5, 1).to(5, 7).w(5, 8).to(5, 9).i(5, 6).to(5, 7).n().r(10, 1).to(10, 7).w(10, 9).to(10, 10).i(10, 6).to(10, 7), {
    holidays: r.holidays,
    workdays: r.workdays,
    inLieuDays: r.inLieuDays
  };
};
var {
  holidays: M,
  workdays: k,
  inLieuDays: Z
} = V();
var c = (r) => {
  const t = u(r);
  if (!t.isValid()) throw new Error("unsupported type ".concat(typeof r, ", expected type is Date or Dayjs"));
  return t;
};
var O = (r) => !f(r);
var f = (r) => {
  const t = c(r), e = t.day(), a = t.format("YYYY-MM-DD");
  return !!(k[a] || e >= 1 && e <= 5 && !M[a]);
};
var G = (r) => {
  const t = c(r);
  return !!Z[t.format("YYYY-MM-DD")];
};
var J = (r) => {
  const t = c(r), e = t.format("YYYY-MM-DD");
  if (k[e]) return {
    date: e,
    work: true,
    name: k[e]
  };
  if (M[e]) return {
    date: e,
    work: false,
    name: M[e]
  };
  {
    const a = t.day();
    return {
      date: e,
      work: a !== 0 && a !== 6,
      name: t.format("dddd")
    };
  }
};
var K = (r, t, e = true) => {
  const a = c(r), o = c(t);
  return e ? Y(a, o).filter(O).map((s) => s.format("YYYY-MM-DD")) : Y(a, o).filter((s) => M[s.format("YYYY-MM-DD")]).map((s) => s.format("YYYY-MM-DD"));
};
var Q = (r, t, e = true) => {
  const a = c(r), o = c(t);
  return e ? Y(a, o).filter(f).map((s) => s.format("YYYY-MM-DD")) : Y(a, o).filter((s) => f(s) && s.day() >= 1 && s.day() <= 5).map((s) => s.format("YYYY-MM-DD"));
};
var X = (r = 0, t = h()) => {
  if (t = u(t), r === 0) {
    if (f(t)) return t.format("YYYY-MM-DD");
    r = 1;
  }
  const e = r > 0 ? 1 : -1;
  let a = Math.abs(r);
  for (; a > 0; ) t = t.add(e, "day"), f(t) && a--;
  return t.format("YYYY-MM-DD");
};
var tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  findWorkday: X,
  getDayDetail: J,
  getHolidaysInRange: K,
  getWorkdaysInRange: Q,
  isHoliday: O,
  isInLieu: G,
  isWorkday: f
}, Symbol.toStringTag, {
  value: "Module"
}));
var et = {
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
var rt = {
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
var E = {
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
var L = (r, t, e) => {
  const a = r >= 2e3 ? 21 : 20, o = r % 100, s = 0.2422, n = et[e][a === 21 ? 1 : 0];
  let d = Math.floor(o / 4);
  ["lesser_cold", "greater_cold", "the_beginning_of_spring", "rain_water"].includes(e) && (d = Math.floor((o - 1) / 4));
  let i = Math.floor(o * s + n) - d;
  const _ = rt["".concat(r, "_").concat(e)];
  return _ && (i += _), h("".concat(r, "-").concat(t, "-").concat(i)).format("YYYY-MM-DD");
};
var at = (r, t) => {
  const e = [];
  let a = u(r);
  const o = u(t || r);
  for (; a.isBefore(o) || a.isSame(o); ) {
    const s = a.year(), n = a.month() + 1;
    T[n].forEach((d) => {
      const i = h(L(s, n, d));
      (i != null && i.isBefore(o) || i != null && i.isSame(o)) && (i != null && i.isAfter(a) || i != null && i.isSame(a)) && e.push({
        date: i.format("YYYY-MM-DD"),
        term: d,
        name: E[d],
        index: 1
      });
    }), a = n === 12 ? a.add(1, "year").startOf("year") : a.add(1, "month").startOf("month");
  }
  return e;
};
var $ = (r, t) => {
  let e = u(r).subtract(1, "month");
  const a = u(t || r).add(1, "month"), o = [];
  for (; e.isBefore(a) || e.isSame(a); ) {
    const n = e.year(), d = e.month() + 1;
    T[d].forEach((i) => {
      const _ = h(L(n, d, i));
      o.push({
        term: i,
        date: _
      });
    }), e.month() === 11 ? e = e.add(1, "year").startOf("year") : e = e.add(1, "month").startOf("month");
  }
  const s = [];
  return o.forEach((n, d) => {
    for (let i = n.date; o[d + 1] && i.isBefore(o[d + 1].date); i = i.add(1, "day")) s.push({
      day: i,
      term: n.term,
      name: E[n.term],
      index: i.diff(n.date, "day") + 1
    });
  }), t || (t = r), s.filter((n) => n.day.isBetween(r, t, "day")).map((n) => ({
    date: n.day.format("YYYY-MM-DD"),
    term: n.term,
    name: n.name,
    index: n.index
  }));
};
var ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getSolarTermDate: L,
  getSolarTerms: at,
  getSolarTermsInRange: $
}, Symbol.toStringTag, {
  value: "Module"
}));
var g = [
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
var F = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
var A = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"];
var H = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
var B = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
var nt = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
var x = (r) => {
  let t = 348;
  for (let e = 32768; e > 8; e >>= 1) t += g[r - 1900] & e ? 1 : 0;
  return t + v(r);
};
var p = (r) => g[r - 1900] & 15;
var v = (r) => p(r) ? g[r - 1900] & 65536 ? 30 : 29 : 0;
var b = (r) => H[r % 10] + B[r % 12];
var D = (r, t) => g[r - 1900] & 65536 >> t ? 30 : 29;
var st = (r) => nt[(r - 4) % 12];
var it = (r) => {
  const t = ["初", "十", "廿", "三十"];
  if (r === 10) return "初十";
  if (r === 20) return "二十";
  if (r === 30) return "三十";
  const e = Math.floor(r / 10), a = r % 10;
  return t[e] + F[a];
};
var dt = (r) => "".concat(H[(r - 4) % 10]).concat(B[(r - 4) % 12], "年");
var R = (r, t) => {
  const e = [];
  for (let a = r; a <= t; a++) e.push({
    year: a,
    lunarYear: dt(a),
    lunarYearCN: a.toString().split("").map((o) => F[Number(o)]).join("")
  });
  return e;
};
var C = (r) => {
  const t = p(r);
  return {
    year: r,
    leapMonth: t || void 0,
    leapMonthCN: t ? "闰".concat(A[t - 1], "月") : void 0,
    days: t ? g[r - 1900] & 65536 ? 30 : 29 : 0
  };
};
var m = (r) => {
  const t = new Array(7).fill(0);
  let e = 0, a = 0;
  const o = h(new Date(1900, 0, 31)), s = h(r);
  let n = s.diff(o, "day");
  t[5] = n + 40, t[4] = 14;
  let d = 1900;
  for (; d < 2100 && n > 0; d++) e = x(d), n -= e, t[4] += 12;
  n < 0 && (n += e, d--, t[4] -= 12), t[0] = d, t[3] = d - 1864, a = p(d), t[6] = 0;
  for (let i = 1; i < 13 && n >= 0; i++) a > 0 && i === a + 1 && t[6] === 0 ? (--i, t[6] = 1, e = v(d)) : e = D(d, i), t[6] === 1 && i === a + 1 && (t[6] = 0), n -= e, t[6] === 0 && t[4]++, t[1] = i;
  return n < 0 && (n += e, t[1]--, t[4]--), t[2] = n + 1, {
    date: s.format("YYYY-MM-DD"),
    // 公历日期
    lunarYear: t[0],
    // 农历年份
    lunarMon: t[1] + 1,
    // 农历月份
    lunarDay: t[2],
    // 农历日期
    isLeap: !!t[6],
    // 是否闰月
    zodiac: st(t[0]),
    // 生肖
    yearCyl: b(t[3]),
    // 年柱
    monCyl: b(t[4]),
    // 月柱
    dayCyl: b(t[5]),
    // 日柱
    lunarYearCN: "".concat(t[0].toString().split("").map((i) => F[Number(i)]).join("")),
    // 农历年份中文表示
    lunarMonCN: "".concat(A[t[1]], "月"),
    // 农历月份中文表示
    lunarDayCN: it(t[2])
    // 农历日期中文表示
  };
};
var j = (r, t) => {
  const e = h(r), a = h(t), o = [];
  for (let s = e; s.isBefore(a) || s.isSame(a, "day"); s = s.add(1, "day")) o.push(m(s));
  return o;
};
var I = (r) => {
  const t = h(r), e = t.year(), a = t.month() + 1, o = t.date();
  let s = 0;
  for (let y = 1900; y < e; y++) s += x(y);
  const n = p(e);
  for (let y = 1; y < a; y++) s += D(e, y), y === n && (s += v(e));
  s += o - 1;
  const d = h(new Date(1900, 0, 31)), i = d.add(s, "day").format("YYYY-MM-DD");
  let _ = s, N;
  return n === a && (_ += D(e, a), N = d.add(_, "day").format("YYYY-MM-DD")), {
    date: i,
    leapMonthDate: N
  };
};
var lt = {
  getLunarYears: R,
  getYearLeapMonth: C,
  getLunarDate: m,
  getLunarDatesInRange: j,
  getSolarDateFromLunar: I
};
var ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lt,
  getLunarDate: m,
  getLunarDatesInRange: j,
  getLunarYears: R,
  getSolarDateFromLunar: I,
  getYearLeapMonth: C,
  monthDays: D
}, Symbol.toStringTag, {
  value: "Module"
}));
var _t = {
  1: {
    // 正月
    1: ["春节", "鸡日", "元始天尊诞辰"],
    2: ["犬日"],
    3: ["猪日", "小年朝"],
    4: ["羊日", "孙天医诞辰"],
    5: ["牛日", "破五日", "开市", "路神诞辰"],
    6: ["马日"],
    7: ["人日", "送火神"],
    8: ["谷日", "阎王诞辰"],
    9: ["天日", "玉皇诞辰"],
    10: ["地日", "石头生日"],
    13: ["上(试)灯日", "关公升天日"],
    15: ["元宵节", "上元节", "正灯日", "天官诞辰"],
    18: ["落灯日"],
    25: ["天仓(填仓)节"]
  },
  2: {
    // 二月
    1: ["太阳生日"],
    2: ["春龙节", "土地公生日", "济公活佛生日"],
    3: ["文昌帝君诞辰"],
    12: ["百花生日(花朝节)"],
    15: ["九天玄女诞辰", "太上老君诞辰", "精忠岳王诞辰"],
    19: ["观音菩萨诞辰"],
    21: ["普贤菩萨诞辰"]
  },
  3: {
    3: ["上巳节"],
    15: ["赵公元帅诞辰", "泰山老母诞辰"]
  },
  4: {
    1: ["祭雹神"],
    4: ["文殊菩萨诞辰"],
    8: ["浴佛节(龙华会)"],
    12: ["蛇王诞辰"],
    14: ["吕洞宾诞辰"],
    18: ["华佗诞辰"],
    28: ["药王(神农)诞辰"]
  },
  5: {
    5: ["端午节"],
    13: ["雨节", "黄帝诞辰"]
  },
  6: {
    1: ["半年节"],
    6: ["晒衣节"],
    19: ["观音菩萨得道"],
    24: ["雷神诞辰", "荷花生日", "关公诞辰"]
  },
  7: {
    1: ["祭海神"],
    7: ["乞巧节"],
    15: ["中元(鬼)节", "地官诞辰(孟兰盆会)"],
    18: ["西王母诞辰"],
    20: ["棉花生日"],
    23: ["诸葛亮诞辰"],
    30: ["地藏菩萨诞辰"]
  },
  8: {
    1: ["天医节"],
    3: ["灶君生日"],
    8: ["瑶池大会"],
    15: ["中秋节"],
    20: ["水稻生日"],
    28: ["孔子诞辰"]
  },
  9: {
    9: ["重阳节"],
    19: ["观音菩萨出家"]
  },
  10: {
    1: ["十月朝", "寒衣节"],
    15: ["下元节", "水官诞辰"]
  },
  12: {
    8: ["腊八节"],
    23: ["官家送灶"],
    24: ["民间送灶"],
    25: ["接玉皇"]
  }
};
var yt = [
  // 处理寒食节（清明前一日）
  (r, t) => {
    const e = r.add(1, "day");
    $(e).find((o) => o.term === "pure_brightness") && t.push({
      date: r.format("YYYY-MM-DD"),
      name: "寒食节",
      type: "solar_term"
    });
  },
  // 处理除夕（农历腊月最后一日）
  (r, t) => {
    const e = m(r);
    if (e.lunarMon === 12 && e.lunarDay === D(e.lunarYear, 12)) {
      const a = r.format("YYYY-MM-DD");
      ["除夕", "封井", "祭井神", "贴春联", "迎财神"].forEach((o) => {
        t.push({
          date: a,
          name: o,
          type: "lunar"
        });
      });
    }
  }
];
var q = (r, t) => {
  var s;
  const e = [];
  let a = h(r);
  const o = h(t || r);
  for (; a.isBefore(o) || a.isSame(o); ) {
    const n = m(a);
    n.isLeap || (((s = _t[n.lunarMon]) == null ? void 0 : s[n.lunarDay]) || []).forEach((i) => {
      e.push({
        date: a.format("YYYY-MM-DD"),
        name: i,
        type: "lunar"
      });
    }), yt.forEach((d) => d(a, e)), a = a.add(1, "day");
  }
  return e.reduce((n, d) => {
    const i = n.find((_) => _.date === d.date);
    return i ? i.name.push(d.name) : n.push({
      date: d.date,
      name: [d.name]
    }), n;
  }, []);
};
var ut = {
  getLunarFestivals: q
};
var wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ut,
  getLunarFestivals: q
}, Symbol.toStringTag, {
  value: "Module"
}));
var ft = {
  ...tt,
  ...ot,
  ...ht,
  ...wt
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NoaW5lc2VEYXlzL0NoaW5lc2VEYXlzLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jaGluZXNlLWRheXNAMS41LjMvbm9kZV9tb2R1bGVzL2NoaW5lc2UtZGF5cy9kaXN0L2luZGV4LmVzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICdjaGluZXNlLWRheXMnO1xuIiwgInZhciBQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIFUgPSAociwgdCwgZSkgPT4gdCBpbiByID8gUChyLCB0LCB7IGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAsIHZhbHVlOiBlIH0pIDogclt0XSA9IGU7XG52YXIgdyA9IChyLCB0LCBlKSA9PiBVKHIsIHR5cGVvZiB0ICE9IFwic3ltYm9sXCIgPyB0ICsgXCJcIiA6IHQsIGUpO1xuY29uc3QgbCA9IGNsYXNzIGwge1xuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgdyh0aGlzLCBcIl9kYXRlXCIpO1xuICAgIHQgaW5zdGFuY2VvZiBsID8gdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQudG9EYXRlKCkpIDogdCBpbnN0YW5jZW9mIERhdGUgPyB0aGlzLl9kYXRlID0gbmV3IERhdGUodCkgOiB0eXBlb2YgdCA9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB0ID09IFwibnVtYmVyXCIgPyAodGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQpLCB0eXBlb2YgdCA9PSBcInN0cmluZ1wiICYmIGlzTmFOKHRoaXMuX2RhdGUuZ2V0VGltZSgpKSAmJiAodGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQucmVwbGFjZSgvLS9nLCBcIi9cIikpKSkgOiB0aGlzLl9kYXRlID0gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCk7XG4gIH1cbiAgdG9EYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICB9XG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuICFpc05hTih0aGlzLl9kYXRlLmdldFRpbWUoKSk7XG4gIH1cbiAgZGlmZih0LCBlID0gXCJkYXlcIikge1xuICAgIGNvbnN0IGEgPSBuZXcgbCh0KS50b0RhdGUoKSwgbyA9IHRoaXMuX2RhdGUuZ2V0VGltZSgpIC0gYS5nZXRUaW1lKCk7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpIC0gYS5nZXRGdWxsWWVhcigpO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIHJldHVybiAodGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpIC0gYS5nZXRGdWxsWWVhcigpKSAqIDEyICsgKHRoaXMuX2RhdGUuZ2V0TW9udGgoKSAtIGEuZ2V0TW9udGgoKSk7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihvIC8gKDFlMyAqIDYwICogNjAgKiAyNCkpO1xuICAgIH1cbiAgfVxuICBzdGFydE9mKHQpIHtcbiAgICBjb25zdCBlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICBlLnNldE1vbnRoKDApLCBlLnNldERhdGUoMSksIGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIGUuc2V0RGF0ZSgxKSwgZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICAgIGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGwoZSk7XG4gIH1cbiAgZW5kT2YodCkge1xuICAgIGNvbnN0IGUgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyXCI6XG4gICAgICAgIGUuc2V0TW9udGgoMTEpLCBlLnNldERhdGUoMzEpLCBlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIGUuc2V0RGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZShlLmdldEZ1bGxZZWFyKCksIGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKVxuICAgICAgICApLCBlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRheVwiOlxuICAgICAgICBlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGwoZSk7XG4gIH1cbiAgYWRkKHQsIGUpIHtcbiAgICBjb25zdCBhID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICBhLnNldEZ1bGxZZWFyKGEuZ2V0RnVsbFllYXIoKSArIHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtb250aFwiOlxuICAgICAgICBhLnNldE1vbnRoKGEuZ2V0TW9udGgoKSArIHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkYXlcIjpcbiAgICAgICAgYS5zZXREYXRlKGEuZ2V0RGF0ZSgpICsgdCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGwoYSk7XG4gIH1cbiAgc3VidHJhY3QodCwgZSkge1xuICAgIHJldHVybiB0aGlzLmFkZCgtdCwgZSk7XG4gIH1cbiAgZm9ybWF0KHQpIHtcbiAgICBjb25zdCBlID0ge1xuICAgICAgWVlZWTogdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgTU06ICh0aGlzLl9kYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICAgIEREOiB0aGlzLl9kYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICAgIEhIOiB0aGlzLl9kYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIiksXG4gICAgICBtbTogdGhpcy5fZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIiksXG4gICAgICBzczogdGhpcy5fZGF0ZS5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIiksXG4gICAgICBkZGRkOiBsLmRheXNPZldlZWtbdGhpcy5fZGF0ZS5nZXREYXkoKV1cbiAgICB9O1xuICAgIHJldHVybiB0LnJlcGxhY2UoL1lZWVl8TU18RER8SEh8bW18c3N8ZGRkZC9nLCAoYSkgPT4gZVthXS50b1N0cmluZygpKTtcbiAgfVxuICB5ZWFyKHQpIHtcbiAgICBpZiAodCA9PT0gdm9pZCAwKSByZXR1cm4gdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IGUgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICByZXR1cm4gZS5zZXRGdWxsWWVhcih0KSwgbmV3IGwoZSk7XG4gIH1cbiAgbW9udGgodCkge1xuICAgIGlmICh0ID09PSB2b2lkIDApIHJldHVybiB0aGlzLl9kYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgIHJldHVybiBlLnNldE1vbnRoKHQpLCBuZXcgbChlKTtcbiAgfVxuICBkYXRlKHQpIHtcbiAgICBpZiAodCA9PT0gdm9pZCAwKSByZXR1cm4gdGhpcy5fZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgIHJldHVybiBlLnNldERhdGUodCksIG5ldyBsKGUpO1xuICB9XG4gIGRheSh0KSB7XG4gICAgaWYgKHQgPT09IHZvaWQgMClcbiAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldERheSgpO1xuICAgIHtcbiAgICAgIGNvbnN0IGUgPSB0aGlzLl9kYXRlLmdldERheSgpLCBhID0gdCAtIGUsIG8gPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICAgIHJldHVybiBvLnNldERhdGUodGhpcy5fZGF0ZS5nZXREYXRlKCkgKyBhKSwgbmV3IGwobyk7XG4gICAgfVxuICB9XG4gIGlzQmVmb3JlKHQpIHtcbiAgICBjb25zdCBlID0gbmV3IGwodCkudG9EYXRlKCk7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0VGltZSgpIDwgZS5nZXRUaW1lKCk7XG4gIH1cbiAgaXNBZnRlcih0KSB7XG4gICAgY29uc3QgZSA9IG5ldyBsKHQpLnRvRGF0ZSgpO1xuICAgIHJldHVybiB0aGlzLl9kYXRlLmdldFRpbWUoKSA+IGUuZ2V0VGltZSgpO1xuICB9XG4gIGlzU2FtZSh0LCBlID0gXCJkYXlcIikge1xuICAgIGNvbnN0IGEgPSBuZXcgbCh0KS50b0RhdGUoKTtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyXCI6XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCkgPT09IGEuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNhc2UgXCJtb250aFwiOlxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpID09PSBhLmdldEZ1bGxZZWFyKCkgJiYgdGhpcy5fZGF0ZS5nZXRNb250aCgpID09PSBhLmdldE1vbnRoKCk7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpID09PSBhLmdldEZ1bGxZZWFyKCkgJiYgdGhpcy5fZGF0ZS5nZXRNb250aCgpID09PSBhLmdldE1vbnRoKCkgJiYgdGhpcy5fZGF0ZS5nZXREYXRlKCkgPT09IGEuZ2V0RGF0ZSgpO1xuICAgIH1cbiAgfVxuICBpc0JldHdlZW4odCwgZSwgYSkge1xuICAgIGNvbnN0IG8gPSBuZXcgbCh0KS5zdGFydE9mKGEpLnRvRGF0ZSgpLCBzID0gbmV3IGwoZSkuZW5kT2YoYSkudG9EYXRlKCksIG4gPSB0aGlzLnRvRGF0ZSgpO1xuICAgIHJldHVybiBuID49IG8gJiYgbiA8PSBzO1xuICB9XG59O1xudyhsLCBcImRheXNPZldlZWtcIiwgW1xuICBcIlN1bmRheVwiLFxuICBcIk1vbmRheVwiLFxuICBcIlR1ZXNkYXlcIixcbiAgXCJXZWRuZXNkYXlcIixcbiAgXCJUaHVyc2RheVwiLFxuICBcIkZyaWRheVwiLFxuICBcIlNhdHVyZGF5XCJcbl0pO1xubGV0IFMgPSBsO1xuY29uc3QgaCA9IChyKSA9PiBuZXcgUyhyKSwgdSA9IChyKSA9PiBoKHIpLnN0YXJ0T2YoXCJkYXlcIiksIFkgPSAociwgdCkgPT4ge1xuICByID0gdShyKSwgdCA9IHUodCk7XG4gIGNvbnN0IGUgPSB0LmRpZmYociwgXCJkYXlcIik7XG4gIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBlICsgMSB9LCAoYSwgbykgPT4gci5hZGQobywgXCJkYXlcIikpO1xufSwgVyA9IHtcbiAgLy8gMTk5OSDlhYPml6YgMSDlpKnjgIHmmKXoioLjgIHlirPliqjoioLjgIHlm73luoboioLmlL7lgYcgM+WkqVxuICAxOTk5OiB7XG4gICAgXCJOZXcgWWVhcidzIERheSzlhYPml6ZcIjogMSxcbiAgICBcIlNwcmluZyBGZXN0aXZhbCzmmKXoioJcIjogMyxcbiAgICBcIkxhYm91ciBEYXks5Yqz5Yqo6IqCXCI6IDMsXG4gICAgXCJOYXRpb25hbCBEYXks5Zu95bqG6IqCXCI6IDNcbiAgfSxcbiAgLy8gMjAwOCDlirPliqjoioLmlLnkuLogMSDlpKnvvIzlop7liqDmuIXmmI7jgIHnq6/ljYjjgIHkuK3np4vlkIQgMSDlpKlcbiAgMjAwODoge1xuICAgIFwiVG9tYi1zd2VlcGluZyBEYXks5riF5piOXCI6IDEsXG4gICAgXCJMYWJvdXIgRGF5LOWKs+WKqOiKglwiOiAxLFxuICAgIFwiRHJhZ29uIEJvYXQgRmVzdGl2YWws56uv5Y2IXCI6IDEsXG4gICAgXCJNaWQtYXV0dW1uIEZlc3RpdmFsLOS4reeni1wiOiAxXG4gIH0sXG4gIC8vIDIwMTQg5pil6IqC5YmU6Zmk6Zmk5aSV77yM5pS55Li65Yid5LiA44CB5LqM44CB5LiJ77yM5L6d5penIDMg5aSpXG4gIC8vIDIwMTUg5aKe5YqgIOS4reWbveS6uuawkeaKl+aXpeaImOS6ieaaqOS4lueVjOWPjeazleilv+aWr+aImOS6ieiDnOWIqTcw5ZGo5bm057qq5b+15pelIDEg5aSpXG4gIDIwMTU6IHtcbiAgICBcIkFudGktRmFzY2lzdCA3MHRoIERheSzkuK3lm73kurrmsJHmipfml6XmiJjkuonmmqjkuJbnlYzlj43ms5Xopb/mlq/miJjkuonog5zliKk3MOWRqOW5tOe6quW/teaXpVwiOiAxXG4gIH0sXG4gIC8vIDIwMjUg5pil6IqC5ZKM5Yqz5Yqo6IqCIOWQhOWinuWKoCAxIOWkqVxuICAyMDI1OiB7XG4gICAgXCJTcHJpbmcgRmVzdGl2YWws5pil6IqCXCI6IDQsXG4gICAgXCJMYWJvdXIgRGF5LOWKs+WKqOiKglwiOiAyXG4gIH1cbn07XG5jbGFzcyB6IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdyh0aGlzLCBcImRheURldGFpbHNcIiwge30pO1xuICAgIHcodGhpcywgXCJob2xpZGF5c1wiLCB7fSk7XG4gICAgdyh0aGlzLCBcIndvcmtkYXlzXCIsIHt9KTtcbiAgICB3KHRoaXMsIFwiaW5MaWV1RGF5c1wiLCB7fSk7XG4gIH1cbiAgLyoqIHllYXIgYXQgKi9cbiAgeSh0KSB7XG4gICAgcmV0dXJuIHRoaXMuZGF5RGV0YWlscy55ZWFyID0gdCwgdGhpcztcbiAgfVxuICAvKiog5p+l6K+i5p+Q5bm0IOiKguWBh+aXpeWkqeaVsCAqL1xuICBnZXRIb2xpZGF5RGF5cyh0LCBlKSB7XG4gICAgbGV0IGEgPSAwO1xuICAgIGZvciAoY29uc3QgW28sIHNdIG9mIE9iamVjdC5lbnRyaWVzKFcpKSB7XG4gICAgICBpZiAocGFyc2VJbnQobykgPiB0KSBicmVhaztcbiAgICAgIHNbZV0gIT09IHZvaWQgMCAmJiAoYSA9IHNbZV0pO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfVxuICBtYXJrKHQpIHtcbiAgICByZXR1cm4gdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkgPSB0LCB0aGlzO1xuICB9XG4gIHNhdmUodCwgZSwgYSkge1xuICAgIGlmICghdGhpcy5kYXlEZXRhaWxzLnllYXIpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzaG91bGQgc2V0IHllYXIgYmVmb3JlIHNhdmluZyBob2xpZGF5XCIpO1xuICAgIGlmICghdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzaG91bGQgc2V0IGhvbGlkYXkgYmVmb3JlIHNhdmluZyBob2xpZGF5XCIpO1xuICAgIHRoaXMuZGF5RGV0YWlscy5tb250aCA9IHQsIHRoaXMuZGF5RGV0YWlscy5kYXkgPSBlLCB0aGlzLmRheURldGFpbHMuZGF5VHlwZSA9IGE7XG4gICAgY29uc3QgbyA9IGgoYCR7dGhpcy5kYXlEZXRhaWxzLnllYXJ9LSR7dH0tJHtlfWApLmZvcm1hdChcbiAgICAgIFwiWVlZWS1NTS1ERFwiXG4gICAgKSwgcyA9IHRoaXMuZ2V0SG9saWRheURheXMoXG4gICAgICB0aGlzLmRheURldGFpbHMueWVhcixcbiAgICAgIHRoaXMuZGF5RGV0YWlscy5ob2xpZGF5XG4gICAgKSwgbiA9IGAke3RoaXMuZGF5RGV0YWlscy5ob2xpZGF5fSwke3N9YDtcbiAgICByZXR1cm4gYSA9PT0gMiA/IHRoaXMuaG9saWRheXNbb10gPSBuIDogYSA9PT0gMSA/IHRoaXMud29ya2RheXNbb10gPSBuIDogYSA9PT0gMyAmJiAodGhpcy5pbkxpZXVEYXlzW29dID0gbiksIHRoaXM7XG4gIH1cbiAgdG8odCwgZSkge1xuICAgIGlmICghdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkgfHwgIXRoaXMuZGF5RGV0YWlscy55ZWFyIHx8ICF0aGlzLmRheURldGFpbHMubW9udGggfHwgIXRoaXMuZGF5RGV0YWlscy5kYXkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzaG91bGQgc2V0IHllYXIvbW9udGgvZGF5IGJlZm9yZSBzYXZpbmcgaG9saWRheSByYW5nZVwiKTtcbiAgICBjb25zdCBhID0gaChcbiAgICAgIGAke3RoaXMuZGF5RGV0YWlscy55ZWFyfS0ke3RoaXMuZGF5RGV0YWlscy5tb250aH0tJHt0aGlzLmRheURldGFpbHMuZGF5fWBcbiAgICApLCBvID0gaChgJHt0aGlzLmRheURldGFpbHMueWVhcn0tJHt0fS0ke2V9YCk7XG4gICAgaWYgKG8uaXNCZWZvcmUoYSkgfHwgby5pc1NhbWUoYSkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbmQgZGF0ZSBzaG91bGQgYmUgYWZ0ZXIgc3RhcnQgZGF0ZVwiKTtcbiAgICBjb25zdCBzID0gdGhpcy5nZXRIb2xpZGF5RGF5cyhcbiAgICAgIHRoaXMuZGF5RGV0YWlscy55ZWFyLFxuICAgICAgdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXlcbiAgICApLCBuID0gYCR7dGhpcy5kYXlEZXRhaWxzLmhvbGlkYXl9LCR7c31gLCBkID0gby5kaWZmKGEsIFwiZGF5XCIpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGQ7IGkrKykge1xuICAgICAgY29uc3QgXyA9IGEuYWRkKGksIFwiZGF5XCIpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgICB0aGlzLmRheURldGFpbHMuZGF5VHlwZSA9PT0gMiA/IHRoaXMuaG9saWRheXNbX10gPSBuIDogdGhpcy5kYXlEZXRhaWxzLmRheVR5cGUgPT09IDEgPyB0aGlzLndvcmtkYXlzW19dID0gbiA6IHRoaXMuZGF5RGV0YWlscy5kYXlUeXBlID09PSAzICYmICh0aGlzLmluTGlldURheXNbX10gPSBuKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqIHdvcmsgZGF5ICovXG4gIHcodCwgZSkge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgZSxcbiAgICAgIDFcbiAgICAgIC8qIFdvcmtkYXkgKi9cbiAgICApO1xuICB9XG4gIC8qKiByZXN0ICovXG4gIHIodCwgZSkge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgZSxcbiAgICAgIDJcbiAgICAgIC8qIEhvbGlkYXkgKi9cbiAgICApO1xuICB9XG4gIC8qKiBpbi1saWV1ICovXG4gIGkodCwgZSkge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgZSxcbiAgICAgIDNcbiAgICAgIC8qIEluTGlldSAqL1xuICAgICk7XG4gIH1cbiAgLyoqIE5ldyBZZWFyJ3MgRGF5IOWFg+aXpiAqL1xuICBueSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJOZXcgWWVhcidzIERheSzlhYPml6ZcIlxuICAgICAgLyogTlkgKi9cbiAgICApO1xuICB9XG4gIC8qKiBTcHJpbmcgRmVzdGl2YWwg5pil6IqCICovXG4gIHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiU3ByaW5nIEZlc3RpdmFsLOaYpeiKglwiXG4gICAgICAvKiBTICovXG4gICAgKTtcbiAgfVxuICAvKiogVG9tYi1zd2VlcGluZyBEYXkg5riF5piOICovXG4gIHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiVG9tYi1zd2VlcGluZyBEYXks5riF5piOXCJcbiAgICAgIC8qIFQgKi9cbiAgICApO1xuICB9XG4gIC8qKiBMYWJvdXIgRGF5IOS6lOS4gCAqL1xuICBsKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIkxhYm91ciBEYXks5Yqz5Yqo6IqCXCJcbiAgICAgIC8qIEwgKi9cbiAgICApO1xuICB9XG4gIC8qKiBEcmFnb24gQm9hdCBGZXN0aXZhbCDnq6/ljYggKi9cbiAgZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJEcmFnb24gQm9hdCBGZXN0aXZhbCznq6/ljYhcIlxuICAgICAgLyogRCAqL1xuICAgICk7XG4gIH1cbiAgLyoqIE5hdGlvbmFsIERheSDlm73luoboioIgKi9cbiAgbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJOYXRpb25hbCBEYXks5Zu95bqG6IqCXCJcbiAgICAgIC8qIE4gKi9cbiAgICApO1xuICB9XG4gIC8qKiBNaWQtYXV0dW1uIEZlc3RpdmFsIOS4reeniyAqL1xuICBtKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIk1pZC1hdXR1bW4gRmVzdGl2YWws5Lit56eLXCJcbiAgICAgIC8qIE0gKi9cbiAgICApO1xuICB9XG4gIC8qKiBBbnRpLUZhc2Npc3QgNzB0aCBEYXkg5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6UgKi9cbiAgYSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJBbnRpLUZhc2Npc3QgNzB0aCBEYXks5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6VcIlxuICAgICAgLyogQSAqL1xuICAgICk7XG4gIH1cbn1cbmNvbnN0IFYgPSAoKSA9PiB7XG4gIGNvbnN0IHIgPSBuZXcgeigpO1xuICByZXR1cm4gci55KDIwMjUpLm55KCkucigxLCAxKS5zKCkucigxLCAyOCkudG8oMiwgNCkudygxLCAyNikudygyLCA4KS5pKDIsIDMpLmkoMiwgNCkudCgpLnIoNCwgNCkudG8oNCwgNikubCgpLnIoNSwgMSkudG8oNSwgNSkudyg0LCAyNykuaSg1LCA1KS5kKCkucig1LCAzMSkudG8oNiwgMikubigpLnIoMTAsIDEpLnRvKDEwLCA4KS53KDksIDI4KS53KDEwLCAxMSkuaSgxMCwgNykuaSgxMCwgOCkubSgpLnIoMTAsIDYpLCByLnkoMjAyNCkubnkoKS5yKDEsIDEpLnMoKS5yKDIsIDEwKS50bygyLCAxNykudygyLCA0KS53KDIsIDE4KS5pKDIsIDE1KS50bygyLCAxNikudCgpLnIoNCwgNCkudG8oNCwgNikudyg0LCA3KS5pKDQsIDUpLmwoKS5yKDUsIDEpLnRvKDUsIDUpLncoNCwgMjgpLncoNSwgMTEpLmkoNSwgMikudG8oNSwgMykuZCgpLnIoNiwgMTApLm0oKS5yKDksIDE1KS50byg5LCAxNykudyg5LCAxNCkuaSg5LCAxNikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIHIueSgyMDIzKS5ueSgpLnIoMSwgMSkudG8oMSwgMikucygpLnIoMSwgMjEpLnRvKDEsIDI3KS53KDEsIDI4KS50bygxLCAyOSkuaSgxLCAyNikudG8oMSwgMjcpLnQoKS5yKDQsIDUpLmwoKS5yKDQsIDI5KS50byg1LCAzKS53KDQsIDIzKS53KDUsIDYpLmkoNSwgMikudG8oNSwgMykuZCgpLnIoNiwgMjIpLnRvKDYsIDI0KS53KDYsIDI1KS5pKDYsIDIzKS5tKCkucig5LCAyOSkubigpLnIoOSwgMzApLnRvKDEwLCA2KS53KDEwLCA3KS50bygxMCwgOCkuaSgxMCwgNSkudG8oMTAsIDYpLCByLnkoMjAyMikubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDEsIDMxKS50bygyLCA2KS53KDEsIDI5KS53KDEsIDMwKS5pKDIsIDMpLnRvKDIsIDQpLnQoKS5yKDQsIDMpLnRvKDQsIDUpLncoNCwgMikuaSg0LCA0KS5sKCkucig0LCAzMCkudG8oNSwgNCkudyg0LCAyNCkudyg1LCA3KS5pKDUsIDMpLnRvKDUsIDQpLmQoKS5yKDYsIDMpLnRvKDYsIDUpLm0oKS5yKDksIDEwKS50byg5LCAxMikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA4KS53KDEwLCA5KS5pKDEwLCA2KS50bygxMCwgNykubnkoKS5yKDEyLCAzMSksIHIueSgyMDIxKS5ueSgpLnIoMSwgMSkudG8oMSwgMykucygpLnIoMiwgMTEpLnRvKDIsIDE3KS53KDIsIDcpLncoMiwgMjApLmkoMiwgMTYpLnRvKDIsIDE3KS50KCkucig0LCAzKS50byg0LCA1KS5sKCkucig1LCAxKS50byg1LCA1KS53KDQsIDI1KS53KDUsIDgpLmkoNSwgNCkudG8oNSwgNSkuZCgpLnIoNiwgMTIpLnRvKDYsIDE0KS5tKCkucig5LCAxOSkudG8oOSwgMjEpLncoOSwgMTgpLmkoOSwgMjApLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyNikudygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAyMCkubnkoKS5yKDEsIDEpLnMoKS5yKDEsIDI0KS50bygyLCAyKS53KDEsIDE5KS5pKDEsIDI5KS50KCkucig0LCA0KS50byg0LCA2KS5sKCkucig1LCAxKS50byg1LCA1KS53KDQsIDI2KS53KDUsIDkpLmkoNSwgNCkudG8oNSwgNSkuZCgpLnIoNiwgMjUpLnRvKDYsIDI3KS53KDYsIDI4KS5pKDYsIDI2KS5uKCkucigxMCwgMSkudG8oMTAsIDgpLncoOSwgMjcpLncoMTAsIDEwKS5pKDEwLCA3KS50bygxMCwgOCksIHIueSgyMDE5KS5ueSgpLnIoMSwgMSkucygpLnIoMiwgNCkudG8oMiwgMTApLncoMiwgMikudG8oMiwgMykuaSgyLCA0KS5pKDIsIDgpLnQoKS5yKDQsIDUpLnRvKDQsIDcpLmwoKS5yKDUsIDEpLnRvKDUsIDQpLncoNCwgMjgpLncoNSwgNSkuaSg1LCAyKS5pKDUsIDMpLmQoKS5yKDYsIDcpLnRvKDYsIDkpLm0oKS5yKDksIDEzKS50byg5LCAxNSkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIHIueSgyMDE4KS5ueSgpLnIoMSwgMSkucygpLnIoMiwgMTUpLnRvKDIsIDIxKS53KDIsIDExKS53KDIsIDI0KS5pKDIsIDE5KS50bygyLCAyMSkudCgpLnIoNCwgNSkudG8oNCwgNykudyg0LCA4KS5pKDQsIDYpLmwoKS5yKDQsIDI5KS50byg1LCAxKS53KDQsIDI4KS5pKDQsIDMwKS5kKCkucig2LCAxOCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS50byg5LCAzMCkuaSgxMCwgNCkudG8oMTAsIDUpLm0oKS5yKDksIDI0KS5ueSgpLnIoMTIsIDMwKS50bygxMiwgMzEpLncoMTIsIDI5KS5pKDEyLCAzMSksIHIueSgyMDE3KS5ueSgpLnIoMSwgMSkudG8oMSwgMikucygpLnIoMSwgMjcpLnRvKDIsIDIpLncoMSwgMjIpLncoMiwgNCkuaSgyLCAxKS50bygyLCAyKS50KCkucig0LCAyKS50byg0LCA0KS53KDQsIDEpLmkoNCwgMykubCgpLnIoNSwgMSkuZCgpLnIoNSwgMjgpLnRvKDUsIDMwKS53KDUsIDI3KS5pKDUsIDI5KS5uKCkucigxMCwgMSkudG8oMTAsIDgpLncoOSwgMzApLmkoMTAsIDYpLm0oKS5yKDEwLCA0KSwgci55KDIwMTYpLm55KCkucigxLCAxKS5zKCkucigyLCA3KS50bygyLCAxMykudygyLCA2KS53KDIsIDE0KS5pKDIsIDExKS50bygyLCAxMikudCgpLnIoNCwgNCkubCgpLnIoNSwgMSkudG8oNSwgMikuZCgpLnIoNiwgOSkudG8oNiwgMTEpLncoNiwgMTIpLmkoNiwgMTApLm0oKS5yKDksIDE1KS50byg5LCAxNykudyg5LCAxOCkuaSg5LCAxNikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA4KS50bygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAxNSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLncoMSwgNCkuaSgxLCAyKS5zKCkucigyLCAxOCkudG8oMiwgMjQpLncoMiwgMTUpLncoMiwgMjgpLmkoMiwgMjMpLnRvKDIsIDI0KS50KCkucig0LCA1KS50byg0LCA2KS5sKCkucig1LCAxKS5kKCkucig2LCAyMCkucig2LCAyMikubSgpLnIoOSwgMjcpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgMTApLmkoMTAsIDcpLmEoKS5yKDksIDMpLnRvKDksIDQpLncoOSwgNikuaSg5LCA0KSwgci55KDIwMTQpLm55KCkucigxLCAxKS5zKCkucigxLCAzMSkudG8oMiwgNikudygxLCAyNikudygyLCA4KS5pKDIsIDUpLnRvKDIsIDYpLnQoKS5yKDQsIDUpLnRvKDQsIDcpLmwoKS5yKDUsIDEpLnRvKDUsIDMpLncoNSwgNCkuaSg1LCAyKS5kKCkucig2LCAyKS5tKCkucig5LCA4KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjgpLncoMTAsIDExKS5pKDEwLCA2KS50bygxMCwgNyksIHIueSgyMDEzKS5ueSgpLnIoMSwgMSkudG8oMSwgMykudygxLCA1KS50bygxLCA2KS5pKDEsIDIpLnRvKDEsIDMpLnMoKS5yKDIsIDkpLnRvKDIsIDE1KS53KDIsIDE2KS50bygyLCAxNykuaSgyLCAxNCkudG8oMiwgMTUpLnQoKS5yKDQsIDQpLnRvKDQsIDYpLncoNCwgNykuaSg0LCA1KS5sKCkucig0LCAyOSkudG8oNSwgMSkudyg0LCAyNykudG8oNCwgMjgpLmkoNCwgMjkpLnRvKDQsIDMwKS5kKCkucig2LCAxMCkudG8oNiwgMTIpLncoNiwgOCkudG8oNiwgOSkuaSg2LCAxMCkudG8oNiwgMTEpLm0oKS5yKDksIDE5KS50byg5LCAyMSkudyg5LCAyMikuaSg5LCAyMCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIHIueSgyMDEyKS5ueSgpLnIoMSwgMSkudG8oMSwgMykuaSgxLCAzKS5zKCkucigxLCAyMikudG8oMSwgMjgpLncoMSwgMjEpLncoMSwgMjkpLmkoMSwgMjYpLnRvKDEsIDI3KS50KCkucig0LCAyKS50byg0LCA0KS53KDMsIDMxKS53KDQsIDEpLmkoNCwgMikudG8oNCwgMykubCgpLnIoNCwgMjkpLnRvKDUsIDEpLncoNCwgMjgpLmkoNCwgMzApLmQoKS5yKDYsIDIyKS5yKDYsIDI0KS5tKCkucig5LCAzMCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS5pKDEwLCA1KSwgci55KDIwMTEpLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCAyKS50bygyLCA4KS53KDEsIDMwKS53KDIsIDEyKS5pKDIsIDcpLnRvKDIsIDgpLnQoKS5yKDQsIDMpLnRvKDQsIDUpLncoNCwgMikuaSg0LCA0KS5sKCkucig0LCAzMCkudG8oNSwgMikuZCgpLnIoNiwgNCkucig2LCA2KS5tKCkucig5LCAxMCkudG8oOSwgMTIpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOCkudG8oMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KS5ueSgpLncoMTIsIDMxKSwgci55KDIwMTApLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCAxMykudG8oMiwgMTkpLncoMiwgMjApLnRvKDIsIDIxKS5pKDIsIDE4KS50bygyLCAxOSkudCgpLnIoNCwgMykudG8oNCwgNSkubCgpLnIoNSwgMSkudG8oNSwgMykuZCgpLnIoNiwgMTQpLnRvKDYsIDE2KS53KDYsIDEyKS50byg2LCAxMykuaSg2LCAxNCkudG8oNiwgMTUpLm0oKS5yKDksIDIyKS50byg5LCAyNCkudyg5LCAxOSkudyg5LCAyNSkuaSg5LCAyMykudG8oOSwgMjQpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyNikudygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAwOSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLncoMSwgNCkuaSgxLCAyKS5zKCkucigxLCAyNSkudG8oMSwgMzEpLncoMSwgMjQpLncoMiwgMSkuaSgxLCAyOSkudG8oMSwgMzApLnQoKS5yKDQsIDQpLnRvKDQsIDYpLmwoKS5yKDUsIDEpLnRvKDUsIDMpLmQoKS5yKDUsIDI4KS50byg1LCAzMCkudyg1LCAzMSkuaSg1LCAyOSkubigpLnIoMTAsIDEpLnRvKDEwLCA4KS53KDksIDI3KS53KDEwLCAxMCkuaSgxMCwgNykudG8oMTAsIDgpLm0oKS5yKDEwLCAzKSwgci55KDIwMDgpLm55KCkucigxLCAxKS5zKCkucigyLCA2KS50bygyLCAxMikudygyLCAyKS50bygyLCAzKS5pKDIsIDExKS50bygyLCAxMikudCgpLnIoNCwgNCkudG8oNCwgNikubCgpLnIoNSwgMSkudG8oNSwgMykudyg1LCA0KS5pKDUsIDIpLmQoKS5yKDYsIDcpLnRvKDYsIDkpLm0oKS5yKDksIDEzKS50byg5LCAxNSkubigpLnIoOSwgMjkpLnRvKDEwLCA1KS53KDksIDI3KS50byg5LCAyOCkuaSg5LCAyOSkudG8oOSwgMzApLCByLnkoMjAwNykubnkoKS5yKDEsIDEpLnRvKDEsIDMpLmkoMSwgMikudG8oMSwgMykucygpLnIoMiwgMTgpLnRvKDIsIDI0KS53KDIsIDE3KS53KDIsIDI1KS5pKDIsIDIyKS50bygyLCAyMykubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAyOCkudG8oNCwgMjkpLmkoNSwgNCkuaSg1LCA3KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjkpLnRvKDksIDMwKS5pKDEwLCA0KS50bygxMCwgNSkubnkoKS5yKDEyLCAzMCkudG8oMTIsIDMxKS53KDEyLCAyOSkuaSgxMiwgMzEpLCByLnkoMjAwNikubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDEsIDI5KS50bygyLCA0KS53KDEsIDI4KS53KDIsIDUpLmkoMiwgMikudG8oMiwgMykubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAyOSkudG8oNCwgMzApLmkoNSwgNCkudG8oNSwgNSkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDMwKS53KDEwLCA4KS5pKDEwLCA1KS50bygxMCwgNikubnkoKS53KDEyLCAzMCkudG8oMTIsIDMxKSwgci55KDIwMDUpLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCA5KS50bygyLCAxNSkudygyLCA1KS50bygyLCA2KS5pKDIsIDE0KS50bygyLCAxNSkubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAzMCkudyg1LCA4KS5pKDUsIDUpLnRvKDUsIDYpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOCkudG8oMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KSwgci55KDIwMDQpLm55KCkucigxLCAxKS5zKCkucigxLCAyMikudG8oMSwgMjgpLncoMSwgMTcpLnRvKDEsIDE4KS5pKDEsIDI3KS50bygxLCAyOCkubCgpLnIoNSwgMSkudG8oNSwgNykudyg1LCA4KS50byg1LCA5KS5pKDUsIDYpLnRvKDUsIDcpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOSkudG8oMTAsIDEwKS5pKDEwLCA2KS50bygxMCwgNyksIHtcbiAgICBob2xpZGF5czogci5ob2xpZGF5cyxcbiAgICB3b3JrZGF5czogci53b3JrZGF5cyxcbiAgICBpbkxpZXVEYXlzOiByLmluTGlldURheXNcbiAgfTtcbn0sIHsgaG9saWRheXM6IE0sIHdvcmtkYXlzOiBrLCBpbkxpZXVEYXlzOiBaIH0gPSBWKCksIGMgPSAocikgPT4ge1xuICBjb25zdCB0ID0gdShyKTtcbiAgaWYgKCF0LmlzVmFsaWQoKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgdW5zdXBwb3J0ZWQgdHlwZSAke3R5cGVvZiByfSwgZXhwZWN0ZWQgdHlwZSBpcyBEYXRlIG9yIERheWpzYFxuICAgICk7XG4gIHJldHVybiB0O1xufSwgTyA9IChyKSA9PiAhZihyKSwgZiA9IChyKSA9PiB7XG4gIGNvbnN0IHQgPSBjKHIpLCBlID0gdC5kYXkoKSwgYSA9IHQuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgcmV0dXJuICEhKGtbYV0gfHwgZSA+PSAxICYmIGUgPD0gNSAmJiAhTVthXSk7XG59LCBHID0gKHIpID0+IHtcbiAgY29uc3QgdCA9IGMocik7XG4gIHJldHVybiAhIVpbdC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXTtcbn0sIEogPSAocikgPT4ge1xuICBjb25zdCB0ID0gYyhyKSwgZSA9IHQuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgaWYgKGtbZV0pXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IGUsXG4gICAgICB3b3JrOiAhMCxcbiAgICAgIG5hbWU6IGtbZV1cbiAgICB9O1xuICBpZiAoTVtlXSlcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogZSxcbiAgICAgIHdvcms6ICExLFxuICAgICAgbmFtZTogTVtlXVxuICAgIH07XG4gIHtcbiAgICBjb25zdCBhID0gdC5kYXkoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogZSxcbiAgICAgIHdvcms6IGEgIT09IDAgJiYgYSAhPT0gNixcbiAgICAgIG5hbWU6IHQuZm9ybWF0KFwiZGRkZFwiKVxuICAgIH07XG4gIH1cbn0sIEsgPSAociwgdCwgZSA9ICEwKSA9PiB7XG4gIGNvbnN0IGEgPSBjKHIpLCBvID0gYyh0KTtcbiAgcmV0dXJuIGUgPyBZKGEsIG8pLmZpbHRlcihPKS5tYXAoKHMpID0+IHMuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSkgOiBZKGEsIG8pLmZpbHRlcigocykgPT4gTVtzLmZvcm1hdChcIllZWVktTU0tRERcIildKS5tYXAoKHMpID0+IHMuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSk7XG59LCBRID0gKHIsIHQsIGUgPSAhMCkgPT4ge1xuICBjb25zdCBhID0gYyhyKSwgbyA9IGModCk7XG4gIHJldHVybiBlID8gWShhLCBvKS5maWx0ZXIoZikubWFwKChzKSA9PiBzLmZvcm1hdChcIllZWVktTU0tRERcIikpIDogWShhLCBvKS5maWx0ZXIoKHMpID0+IGYocykgJiYgcy5kYXkoKSA+PSAxICYmIHMuZGF5KCkgPD0gNSkubWFwKChzKSA9PiBzLmZvcm1hdChcIllZWVktTU0tRERcIikpO1xufSwgWCA9IChyID0gMCwgdCA9IGgoKSkgPT4ge1xuICBpZiAodCA9IHUodCksIHIgPT09IDApIHtcbiAgICBpZiAoZih0KSlcbiAgICAgIHJldHVybiB0LmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgciA9IDE7XG4gIH1cbiAgY29uc3QgZSA9IHIgPiAwID8gMSA6IC0xO1xuICBsZXQgYSA9IE1hdGguYWJzKHIpO1xuICBmb3IgKDsgYSA+IDA7IClcbiAgICB0ID0gdC5hZGQoZSwgXCJkYXlcIiksIGYodCkgJiYgYS0tO1xuICByZXR1cm4gdC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xufSwgdHQgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBmaW5kV29ya2RheTogWCxcbiAgZ2V0RGF5RGV0YWlsOiBKLFxuICBnZXRIb2xpZGF5c0luUmFuZ2U6IEssXG4gIGdldFdvcmtkYXlzSW5SYW5nZTogUSxcbiAgaXNIb2xpZGF5OiBPLFxuICBpc0luTGlldTogRyxcbiAgaXNXb3JrZGF5OiBmXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpLCBldCA9IHtcbiAgdGhlX2JlZ2lubmluZ19vZl9zcHJpbmc6IFs0LjYyOTUsIDMuODddLFxuICByYWluX3dhdGVyOiBbMTkuNDU5OSwgMTguNzNdLFxuICB0aGVfd2FraW5nX29mX2luc2VjdHM6IFs2LjM5MjYsIDUuNjNdLFxuICB0aGVfc3ByaW5nX2VxdWlub3g6IFsyMS40MTU1LCAyMC42NDZdLFxuICBwdXJlX2JyaWdodG5lc3M6IFs1LjU5LCA0LjgxXSxcbiAgZ3JhaW5fcmFpbjogWzIwLjg4OCwgMjAuMV0sXG4gIHRoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyOiBbNi4zMTgsIDUuNTJdLFxuICBsZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW46IFsyMS44NiwgMjEuMDRdLFxuICBncmFpbl9pbl9iZWFyZDogWzYuNSwgNS42NzhdLFxuICB0aGVfc3VtbWVyX3NvbHN0aWNlOiBbMjIuMiwgMjEuMzddLFxuICBsZXNzZXJfaGVhdDogWzcuOTI4LCA3LjEwOF0sXG4gIGdyZWF0ZXJfaGVhdDogWzIzLjY1LCAyMi44M10sXG4gIHRoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uOiBbMjguMzUsIDcuNV0sXG4gIHRoZV9lbmRfb2ZfaGVhdDogWzIzLjk1LCAyMy4xM10sXG4gIHdoaXRlX2RldzogWzguNDQsIDcuNjQ2XSxcbiAgdGhlX2F1dHVtbl9lcXVpbm94OiBbMjMuODIyLCAyMy4wNDJdLFxuICBjb2RlX2RldzogWzkuMDk4LCA4LjMxOF0sXG4gIGZyb3N0X2Rlc2NlbnQ6IFsyNC4yMTgsIDIzLjQzOF0sXG4gIHRoZV9iZWdpbm5pbmdfb2Zfd2ludGVyOiBbOC4yMTgsIDcuNDM4XSxcbiAgbGVzc2VyX3Nub3c6IFsyMy4wOCwgMjIuMzZdLFxuICBncmVhdGVyX3Nub3c6IFs3LjksIDcuMThdLFxuICB0aGVfd2ludGVyX3NvbHN0aWNlOiBbMjIuNiwgMjEuOTRdLFxuICBsZXNzZXJfY29sZDogWzYuMTEsIDUuNDA1NV0sXG4gIGdyZWF0ZXJfY29sZDogWzIwLjg0LCAyMC4xMl1cbn0sIFQgPSB7XG4gIDE6IFtcImxlc3Nlcl9jb2xkXCIsIFwiZ3JlYXRlcl9jb2xkXCJdLFxuICAyOiBbXCJ0aGVfYmVnaW5uaW5nX29mX3NwcmluZ1wiLCBcInJhaW5fd2F0ZXJcIl0sXG4gIDM6IFtcInRoZV93YWtpbmdfb2ZfaW5zZWN0c1wiLCBcInRoZV9zcHJpbmdfZXF1aW5veFwiXSxcbiAgNDogW1wicHVyZV9icmlnaHRuZXNzXCIsIFwiZ3JhaW5fcmFpblwiXSxcbiAgNTogW1widGhlX2JlZ2lubmluZ19vZl9zdW1tZXJcIiwgXCJsZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW5cIl0sXG4gIDY6IFtcImdyYWluX2luX2JlYXJkXCIsIFwidGhlX3N1bW1lcl9zb2xzdGljZVwiXSxcbiAgNzogW1wibGVzc2VyX2hlYXRcIiwgXCJncmVhdGVyX2hlYXRcIl0sXG4gIDg6IFtcInRoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uXCIsIFwidGhlX2VuZF9vZl9oZWF0XCJdLFxuICA5OiBbXCJ3aGl0ZV9kZXdcIiwgXCJ0aGVfYXV0dW1uX2VxdWlub3hcIl0sXG4gIDEwOiBbXCJjb2RlX2Rld1wiLCBcImZyb3N0X2Rlc2NlbnRcIl0sXG4gIDExOiBbXCJ0aGVfYmVnaW5uaW5nX29mX3dpbnRlclwiLCBcImxlc3Nlcl9zbm93XCJdLFxuICAxMjogW1wiZ3JlYXRlcl9zbm93XCIsIFwidGhlX3dpbnRlcl9zb2xzdGljZVwiXVxufSwgcnQgPSB7XG4gIFwiMjAyNl9yYWluX3dhdGVyXCI6IC0xLFxuICBcIjIwODRfdGhlX3NwcmluZ19lcXVpbm94XCI6IDEsXG4gIFwiMTkxMV90aGVfYmVnaW5uaW5nX29mX3N1bW1lclwiOiAxLFxuICBcIjIwMDhfbGVzc2VyX2Z1bGxuZXNzX29mX2dyYWluXCI6IDEsXG4gIFwiMTkwMl9ncmFpbl9pbl9iZWFyZFwiOiAxLFxuICBcIjE5MjhfdGhlX3N1bW1lcl9zb2xzdGljZVwiOiAxLFxuICBcIjE5MjVfbGVzc2VyX2hlYXRcIjogMSxcbiAgXCIyMDE2X2xlc3Nlcl9oZWF0XCI6IDEsXG4gIFwiMTkyMl9ncmVhdGVyX2hlYXRcIjogMSxcbiAgXCIyMDAyX3RoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uXCI6IDEsXG4gIFwiMTkyN193aGl0ZV9kZXdcIjogMSxcbiAgXCIxOTQyX3RoZV9hdXR1bW5fZXF1aW5veFwiOiAxLFxuICBcIjIwODlfZnJvc3RfZGVzY2VudFwiOiAxLFxuICBcIjIwODlfdGhlX2JlZ2lubmluZ19vZl93aW50ZXJcIjogMSxcbiAgXCIxOTc4X2xlc3Nlcl9zbm93XCI6IDEsXG4gIFwiMTk1NF9ncmVhdGVyX3Nub3dcIjogMSxcbiAgXCIxOTE4X3RoZV93aW50ZXJfc29sc3RpY2VcIjogLTEsXG4gIFwiMjAyMV90aGVfd2ludGVyX3NvbHN0aWNlXCI6IC0xLFxuICBcIjE5ODJfbGVzc2VyX2NvbGRcIjogMSxcbiAgXCIyMDE5X2xlc3Nlcl9jb2xkXCI6IC0xLFxuICBcIjIwMDBfZ3JlYXRlcl9jb2xkXCI6IDEsXG4gIFwiMjA4Ml9ncmVhdGVyX2NvbGRcIjogMVxufSwgRSA9IHtcbiAgbGVzc2VyX2NvbGQ6IFwi5bCP5a+SXCIsXG4gIGdyZWF0ZXJfY29sZDogXCLlpKflr5JcIixcbiAgdGhlX2JlZ2lubmluZ19vZl9zcHJpbmc6IFwi56uL5pilXCIsXG4gIHJhaW5fd2F0ZXI6IFwi6Zuo5rC0XCIsXG4gIHRoZV93YWtpbmdfb2ZfaW5zZWN0czogXCLmg4rom7BcIixcbiAgdGhlX3NwcmluZ19lcXVpbm94OiBcIuaYpeWIhlwiLFxuICBwdXJlX2JyaWdodG5lc3M6IFwi5riF5piOXCIsXG4gIGdyYWluX3JhaW46IFwi6LC36ZuoXCIsXG4gIHRoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyOiBcIueri+Wkj1wiLFxuICBsZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW46IFwi5bCP5ruhXCIsXG4gIGdyYWluX2luX2JlYXJkOiBcIuiKkuenjVwiLFxuICB0aGVfc3VtbWVyX3NvbHN0aWNlOiBcIuWkj+iHs1wiLFxuICBsZXNzZXJfaGVhdDogXCLlsI/mmpFcIixcbiAgZ3JlYXRlcl9oZWF0OiBcIuWkp+aakVwiLFxuICB0aGVfYmVnaW5uaW5nX29mX2F1dHVtbjogXCLnq4vnp4tcIixcbiAgdGhlX2VuZF9vZl9oZWF0OiBcIuWkhOaakVwiLFxuICB3aGl0ZV9kZXc6IFwi55m96ZyyXCIsXG4gIHRoZV9hdXR1bW5fZXF1aW5veDogXCLnp4vliIZcIixcbiAgY29kZV9kZXc6IFwi5a+S6ZyyXCIsXG4gIGZyb3N0X2Rlc2NlbnQ6IFwi6Zyc6ZmNXCIsXG4gIHRoZV9iZWdpbm5pbmdfb2Zfd2ludGVyOiBcIueri+WGrFwiLFxuICBsZXNzZXJfc25vdzogXCLlsI/pm6pcIixcbiAgZ3JlYXRlcl9zbm93OiBcIuWkp+mbqlwiLFxuICB0aGVfd2ludGVyX3NvbHN0aWNlOiBcIuWGrOiHs1wiXG59LCBMID0gKHIsIHQsIGUpID0+IHtcbiAgY29uc3QgYSA9IHIgPj0gMmUzID8gMjEgOiAyMCwgbyA9IHIgJSAxMDAsIHMgPSAwLjI0MjIsIG4gPSBldFtlXVthID09PSAyMSA/IDEgOiAwXTtcbiAgbGV0IGQgPSBNYXRoLmZsb29yKG8gLyA0KTtcbiAgW1xuICAgIFwibGVzc2VyX2NvbGRcIixcbiAgICBcImdyZWF0ZXJfY29sZFwiLFxuICAgIFwidGhlX2JlZ2lubmluZ19vZl9zcHJpbmdcIixcbiAgICBcInJhaW5fd2F0ZXJcIlxuICBdLmluY2x1ZGVzKGUpICYmIChkID0gTWF0aC5mbG9vcigobyAtIDEpIC8gNCkpO1xuICBsZXQgaSA9IE1hdGguZmxvb3IobyAqIHMgKyBuKSAtIGQ7XG4gIGNvbnN0IF8gPSBydFtgJHtyfV8ke2V9YF07XG4gIHJldHVybiBfICYmIChpICs9IF8pLCBoKGAke3J9LSR7dH0tJHtpfWApLmZvcm1hdChcIllZWVktTU0tRERcIik7XG59LCBhdCA9IChyLCB0KSA9PiB7XG4gIGNvbnN0IGUgPSBbXTtcbiAgbGV0IGEgPSB1KHIpO1xuICBjb25zdCBvID0gdSh0IHx8IHIpO1xuICBmb3IgKDsgYS5pc0JlZm9yZShvKSB8fCBhLmlzU2FtZShvKTsgKSB7XG4gICAgY29uc3QgcyA9IGEueWVhcigpLCBuID0gYS5tb250aCgpICsgMTtcbiAgICBUW25dLmZvckVhY2goKGQpID0+IHtcbiAgICAgIGNvbnN0IGkgPSBoKEwocywgbiwgZCkpO1xuICAgICAgKGkgIT0gbnVsbCAmJiBpLmlzQmVmb3JlKG8pIHx8IGkgIT0gbnVsbCAmJiBpLmlzU2FtZShvKSkgJiYgKGkgIT0gbnVsbCAmJiBpLmlzQWZ0ZXIoYSkgfHwgaSAhPSBudWxsICYmIGkuaXNTYW1lKGEpKSAmJiBlLnB1c2goe1xuICAgICAgICBkYXRlOiBpLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgICAgIHRlcm06IGQsXG4gICAgICAgIG5hbWU6IEVbZF0sXG4gICAgICAgIGluZGV4OiAxXG4gICAgICB9KTtcbiAgICB9KSwgYSA9IG4gPT09IDEyID8gYS5hZGQoMSwgXCJ5ZWFyXCIpLnN0YXJ0T2YoXCJ5ZWFyXCIpIDogYS5hZGQoMSwgXCJtb250aFwiKS5zdGFydE9mKFwibW9udGhcIik7XG4gIH1cbiAgcmV0dXJuIGU7XG59LCAkID0gKHIsIHQpID0+IHtcbiAgbGV0IGUgPSB1KHIpLnN1YnRyYWN0KDEsIFwibW9udGhcIik7XG4gIGNvbnN0IGEgPSB1KHQgfHwgcikuYWRkKDEsIFwibW9udGhcIiksIG8gPSBbXTtcbiAgZm9yICg7IGUuaXNCZWZvcmUoYSkgfHwgZS5pc1NhbWUoYSk7ICkge1xuICAgIGNvbnN0IG4gPSBlLnllYXIoKSwgZCA9IGUubW9udGgoKSArIDE7XG4gICAgVFtkXS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBjb25zdCBfID0gaChMKG4sIGQsIGkpKTtcbiAgICAgIG8ucHVzaCh7IHRlcm06IGksIGRhdGU6IF8gfSk7XG4gICAgfSksIGUubW9udGgoKSA9PT0gMTEgPyBlID0gZS5hZGQoMSwgXCJ5ZWFyXCIpLnN0YXJ0T2YoXCJ5ZWFyXCIpIDogZSA9IGUuYWRkKDEsIFwibW9udGhcIikuc3RhcnRPZihcIm1vbnRoXCIpO1xuICB9XG4gIGNvbnN0IHMgPSBbXTtcbiAgcmV0dXJuIG8uZm9yRWFjaCgobiwgZCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSBuLmRhdGU7IG9bZCArIDFdICYmIGkuaXNCZWZvcmUob1tkICsgMV0uZGF0ZSk7IGkgPSBpLmFkZCgxLCBcImRheVwiKSlcbiAgICAgIHMucHVzaCh7XG4gICAgICAgIGRheTogaSxcbiAgICAgICAgdGVybTogbi50ZXJtLFxuICAgICAgICBuYW1lOiBFW24udGVybV0sXG4gICAgICAgIGluZGV4OiBpLmRpZmYobi5kYXRlLCBcImRheVwiKSArIDFcbiAgICAgIH0pO1xuICB9KSwgdCB8fCAodCA9IHIpLCBzLmZpbHRlcigobikgPT4gbi5kYXkuaXNCZXR3ZWVuKHIsIHQsIFwiZGF5XCIpKS5tYXAoKG4pID0+ICh7XG4gICAgZGF0ZTogbi5kYXkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICB0ZXJtOiBuLnRlcm0sXG4gICAgbmFtZTogbi5uYW1lLFxuICAgIGluZGV4OiBuLmluZGV4XG4gIH0pKTtcbn0sIG90ID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZ2V0U29sYXJUZXJtRGF0ZTogTCxcbiAgZ2V0U29sYXJUZXJtczogYXQsXG4gIGdldFNvbGFyVGVybXNJblJhbmdlOiAkXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpLCBnID0gW1xuICAxOTQxNixcbiAgMTkxNjgsXG4gIDQyMzUyLFxuICAyMTcxNyxcbiAgNTM4NTYsXG4gIDU1NjMyLFxuICA5MTQ3NixcbiAgMjIxNzYsXG4gIDM5NjMyLFxuICAyMTk3MCxcbiAgLy8xOTAwLTE5MDlcbiAgMTkxNjgsXG4gIDQyNDIyLFxuICA0MjE5MixcbiAgNTM4NDAsXG4gIDExOTM4MSxcbiAgNDY0MDAsXG4gIDU0OTQ0LFxuICA0NDQ1MCxcbiAgMzgzMjAsXG4gIDg0MzQzLFxuICAvLzE5MTAtMTkxOVxuICAxODgwMCxcbiAgNDIxNjAsXG4gIDQ2MjYxLFxuICAyNzIxNixcbiAgMjc5NjgsXG4gIDEwOTM5NixcbiAgMTExMDQsXG4gIDM4MjU2LFxuICAyMTIzNCxcbiAgMTg4MDAsXG4gIC8vMTkyMC0xOTI5XG4gIDI1OTU4LFxuICA1NDQzMixcbiAgNTk5ODQsXG4gIDI4MzA5LFxuICAyMzI0OCxcbiAgMTExMDQsXG4gIDEwMDA2NyxcbiAgMzc2MDAsXG4gIDExNjk1MSxcbiAgNTE1MzYsXG4gIC8vMTkzMC0xOTM5XG4gIDU0NDMyLFxuICAxMjA5OTgsXG4gIDQ2NDE2LFxuICAyMjE3NixcbiAgMTA3OTU2LFxuICA5NjgwLFxuICAzNzU4NCxcbiAgNTM5MzgsXG4gIDQzMzQ0LFxuICA0NjQyMyxcbiAgLy8xOTQwLTE5NDlcbiAgMjc4MDgsXG4gIDQ2NDE2LFxuICA4Njg2OSxcbiAgMTk4NzIsXG4gIDQyNDE2LFxuICA4MzMxNSxcbiAgMjExNjgsXG4gIDQzNDMyLFxuICA1OTcyOCxcbiAgMjcyOTYsXG4gIC8vMTk1MC0xOTU5XG4gIDQ0NzEwLFxuICA0Mzg1NixcbiAgMTkyOTYsXG4gIDQzNzQ4LFxuICA0MjM1MixcbiAgMjEwODgsXG4gIDYyMDUxLFxuICA1NTYzMixcbiAgMjMzODMsXG4gIDIyMTc2LFxuICAvLzE5NjAtMTk2OVxuICAzODYwOCxcbiAgMTk5MjUsXG4gIDE5MTUyLFxuICA0MjE5MixcbiAgNTQ0ODQsXG4gIDUzODQwLFxuICA1NDYxNixcbiAgNDY0MDAsXG4gIDQ2NzUyLFxuICAxMDM4NDYsXG4gIC8vMTk3MC0xOTc5XG4gIDM4MzIwLFxuICAxODg2NCxcbiAgNDMzODAsXG4gIDQyMTYwLFxuICA0NTY5MCxcbiAgMjcyMTYsXG4gIDI3OTY4LFxuICA0NDg3MCxcbiAgNDM4NzIsXG4gIDM4MjU2LFxuICAvLzE5ODAtMTk4OVxuICAxOTE4OSxcbiAgMTg4MDAsXG4gIDI1Nzc2LFxuICAyOTg1OSxcbiAgNTk5ODQsXG4gIDI3NDgwLFxuICAyMTk1MixcbiAgNDM4NzIsXG4gIDM4NjEzLFxuICAzNzYwMCxcbiAgLy8xOTkwLTE5OTlcbiAgNTE1NTIsXG4gIDU1NjM2LFxuICA1NDQzMixcbiAgNTU4ODgsXG4gIDMwMDM0LFxuICAyMjE3NixcbiAgNDM5NTksXG4gIDk2ODAsXG4gIDM3NTg0LFxuICA1MTg5MyxcbiAgLy8yMDAwLTIwMDlcbiAgNDMzNDQsXG4gIDQ2MjQwLFxuICA0Nzc4MCxcbiAgNDQzNjgsXG4gIDIxOTc3LFxuICAxOTM2MCxcbiAgNDI0MTYsXG4gIDg2MzkwLFxuICAyMTE2OCxcbiAgNDMzMTIsXG4gIC8vMjAxMC0yMDE5XG4gIDMxMDYwLFxuICAyNzI5NixcbiAgNDQzNjgsXG4gIDIzMzc4LFxuICAxOTI5NixcbiAgNDI3MjYsXG4gIDQyMjA4LFxuICA1Mzg1NixcbiAgNjAwMDUsXG4gIDU0NTc2LFxuICAvLzIwMjAtMjAyOVxuICAyMzIwMCxcbiAgMzAzNzEsXG4gIDM4NjA4LFxuICAxOTE5NSxcbiAgMTkxNTIsXG4gIDQyMTkyLFxuICAxMTg5NjYsXG4gIDUzODQwLFxuICA1NDU2MCxcbiAgNTY2NDUsXG4gIC8vMjAzMC0yMDM5XG4gIDQ2NDk2LFxuICAyMjIyNCxcbiAgMjE5MzgsXG4gIDE4ODY0LFxuICA0MjM1OSxcbiAgNDIxNjAsXG4gIDQzNjAwLFxuICAxMTExODksXG4gIDI3OTM2LFxuICA0NDQ0OCxcbiAgLy8yMDQwLTIwNDlcbiAgODQ4MzUsXG4gIDM3NzQ0LFxuICAxODkzNixcbiAgMTg4MDAsXG4gIDI1Nzc2LFxuICA5MjMyNixcbiAgNTk5ODQsXG4gIDI3NDI0LFxuICAxMDgyMjgsXG4gIDQzNzQ0LFxuICAvLzIwNTAtMjA1OVxuICA0MTY5NixcbiAgNTM5ODcsXG4gIDUxNTUyLFxuICA1NDYxNSxcbiAgNTQ0MzIsXG4gIDU1ODg4LFxuICAyMzg5MyxcbiAgMjIxNzYsXG4gIDQyNzA0LFxuICAyMTk3MixcbiAgLy8yMDYwLTIwNjlcbiAgMjEyMDAsXG4gIDQzNDQ4LFxuICA0MzM0NCxcbiAgNDYyNDAsXG4gIDQ2NzU4LFxuICA0NDM2OCxcbiAgMjE5MjAsXG4gIDQzOTQwLFxuICA0MjQxNixcbiAgMjExNjgsXG4gIC8vMjA3MC0yMDc5XG4gIDQ1NjgzLFxuICAyNjkyOCxcbiAgMjk0OTUsXG4gIDI3Mjk2LFxuICA0NDM2OCxcbiAgODQ4MjEsXG4gIDE5Mjk2LFxuICA0MjM1MixcbiAgMjE3MzIsXG4gIDUzNjAwLFxuICAvLzIwODAtMjA4OVxuICA1OTc1MixcbiAgNTQ1NjAsXG4gIDU1OTY4LFxuICA5MjgzOCxcbiAgMjIyMjQsXG4gIDE5MTY4LFxuICA0MzQ3NixcbiAgNDE2ODAsXG4gIDUzNTg0LFxuICA2MjAzNCxcbiAgLy8yMDkwLTIwOTlcbiAgNTQ1NjBcbiAgLy8yMTAwXG5dLCBGID0gW1xuICBcIumbtlwiLFxuICBcIuS4gFwiLFxuICBcIuS6jFwiLFxuICBcIuS4iVwiLFxuICBcIuWbm1wiLFxuICBcIuS6lFwiLFxuICBcIuWFrVwiLFxuICBcIuS4g1wiLFxuICBcIuWFq1wiLFxuICBcIuS5nVwiXG5dLCBBID0gW1xuICBcIuato1wiLFxuICBcIuS6jFwiLFxuICBcIuS4iVwiLFxuICBcIuWbm1wiLFxuICBcIuS6lFwiLFxuICBcIuWFrVwiLFxuICBcIuS4g1wiLFxuICBcIuWFq1wiLFxuICBcIuS5nVwiLFxuICBcIuWNgVwiLFxuICBcIuWGrFwiLFxuICBcIuiFilwiXG5dLCBIID0gW1xuICBcIueUslwiLFxuICBcIuS5mVwiLFxuICBcIuS4mVwiLFxuICBcIuS4gVwiLFxuICBcIuaIilwiLFxuICBcIuW3sVwiLFxuICBcIuW6mlwiLFxuICBcIui+m1wiLFxuICBcIuWjrFwiLFxuICBcIueZuFwiXG5dLCBCID0gW1xuICBcIuWtkFwiLFxuICBcIuS4kVwiLFxuICBcIuWvhVwiLFxuICBcIuWNr1wiLFxuICBcIui+sFwiLFxuICBcIuW3s1wiLFxuICBcIuWNiFwiLFxuICBcIuacqlwiLFxuICBcIueUs1wiLFxuICBcIumFiVwiLFxuICBcIuaIjFwiLFxuICBcIuS6pVwiXG5dLCBudCA9IFtcbiAgXCLpvKBcIixcbiAgXCLniZtcIixcbiAgXCLomY5cIixcbiAgXCLlhZRcIixcbiAgXCLpvplcIixcbiAgXCLom4dcIixcbiAgXCLpqaxcIixcbiAgXCLnvopcIixcbiAgXCLnjLRcIixcbiAgXCLpuKFcIixcbiAgXCLni5dcIixcbiAgXCLnjKpcIlxuXSwgeCA9IChyKSA9PiB7XG4gIGxldCB0ID0gMzQ4O1xuICBmb3IgKGxldCBlID0gMzI3Njg7IGUgPiA4OyBlID4+PSAxKVxuICAgIHQgKz0gZ1tyIC0gMTkwMF0gJiBlID8gMSA6IDA7XG4gIHJldHVybiB0ICsgdihyKTtcbn0sIHAgPSAocikgPT4gZ1tyIC0gMTkwMF0gJiAxNSwgdiA9IChyKSA9PiBwKHIpID8gZ1tyIC0gMTkwMF0gJiA2NTUzNiA/IDMwIDogMjkgOiAwLCBiID0gKHIpID0+IEhbciAlIDEwXSArIEJbciAlIDEyXSwgRCA9IChyLCB0KSA9PiBnW3IgLSAxOTAwXSAmIDY1NTM2ID4+IHQgPyAzMCA6IDI5LCBzdCA9IChyKSA9PiBudFsociAtIDQpICUgMTJdLCBpdCA9IChyKSA9PiB7XG4gIGNvbnN0IHQgPSBbXCLliJ1cIiwgXCLljYFcIiwgXCLlu79cIiwgXCLkuInljYFcIl07XG4gIGlmIChyID09PSAxMCkgcmV0dXJuIFwi5Yid5Y2BXCI7XG4gIGlmIChyID09PSAyMCkgcmV0dXJuIFwi5LqM5Y2BXCI7XG4gIGlmIChyID09PSAzMCkgcmV0dXJuIFwi5LiJ5Y2BXCI7XG4gIGNvbnN0IGUgPSBNYXRoLmZsb29yKHIgLyAxMCksIGEgPSByICUgMTA7XG4gIHJldHVybiB0W2VdICsgRlthXTtcbn0sIGR0ID0gKHIpID0+IGAke0hbKHIgLSA0KSAlIDEwXX0ke0JbKHIgLSA0KSAlIDEyXX3lubRgLCBSID0gKHIsIHQpID0+IHtcbiAgY29uc3QgZSA9IFtdO1xuICBmb3IgKGxldCBhID0gcjsgYSA8PSB0OyBhKyspXG4gICAgZS5wdXNoKHtcbiAgICAgIHllYXI6IGEsXG4gICAgICBsdW5hclllYXI6IGR0KGEpLFxuICAgICAgbHVuYXJZZWFyQ046IGEudG9TdHJpbmcoKS5zcGxpdChcIlwiKS5tYXAoKG8pID0+IEZbTnVtYmVyKG8pXSkuam9pbihcIlwiKVxuICAgIH0pO1xuICByZXR1cm4gZTtcbn0sIEMgPSAocikgPT4ge1xuICBjb25zdCB0ID0gcChyKTtcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiByLFxuICAgIGxlYXBNb250aDogdCB8fCB2b2lkIDAsXG4gICAgbGVhcE1vbnRoQ046IHQgPyBg6ZewJHtBW3QgLSAxXX3mnIhgIDogdm9pZCAwLFxuICAgIGRheXM6IHQgPyBnW3IgLSAxOTAwXSAmIDY1NTM2ID8gMzAgOiAyOSA6IDBcbiAgfTtcbn0sIG0gPSAocikgPT4ge1xuICBjb25zdCB0ID0gbmV3IEFycmF5KDcpLmZpbGwoMCk7XG4gIGxldCBlID0gMCwgYSA9IDA7XG4gIGNvbnN0IG8gPSBoKG5ldyBEYXRlKDE5MDAsIDAsIDMxKSksIHMgPSBoKHIpO1xuICBsZXQgbiA9IHMuZGlmZihvLCBcImRheVwiKTtcbiAgdFs1XSA9IG4gKyA0MCwgdFs0XSA9IDE0O1xuICBsZXQgZCA9IDE5MDA7XG4gIGZvciAoOyBkIDwgMjEwMCAmJiBuID4gMDsgZCsrKVxuICAgIGUgPSB4KGQpLCBuIC09IGUsIHRbNF0gKz0gMTI7XG4gIG4gPCAwICYmIChuICs9IGUsIGQtLSwgdFs0XSAtPSAxMiksIHRbMF0gPSBkLCB0WzNdID0gZCAtIDE4NjQsIGEgPSBwKGQpLCB0WzZdID0gMDtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMyAmJiBuID49IDA7IGkrKylcbiAgICBhID4gMCAmJiBpID09PSBhICsgMSAmJiB0WzZdID09PSAwID8gKC0taSwgdFs2XSA9IDEsIGUgPSB2KGQpKSA6IGUgPSBEKGQsIGkpLCB0WzZdID09PSAxICYmIGkgPT09IGEgKyAxICYmICh0WzZdID0gMCksIG4gLT0gZSwgdFs2XSA9PT0gMCAmJiB0WzRdKyssIHRbMV0gPSBpO1xuICByZXR1cm4gbiA8IDAgJiYgKG4gKz0gZSwgdFsxXS0tLCB0WzRdLS0pLCB0WzJdID0gbiArIDEsIHtcbiAgICBkYXRlOiBzLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgLy8g5YWs5Y6G5pel5pyfXG4gICAgbHVuYXJZZWFyOiB0WzBdLFxuICAgIC8vIOWGnOWOhuW5tOS7vVxuICAgIGx1bmFyTW9uOiB0WzFdICsgMSxcbiAgICAvLyDlhpzljobmnIjku71cbiAgICBsdW5hckRheTogdFsyXSxcbiAgICAvLyDlhpzljobml6XmnJ9cbiAgICBpc0xlYXA6ICEhdFs2XSxcbiAgICAvLyDmmK/lkKbpl7DmnIhcbiAgICB6b2RpYWM6IHN0KHRbMF0pLFxuICAgIC8vIOeUn+iCllxuICAgIHllYXJDeWw6IGIodFszXSksXG4gICAgLy8g5bm05p+xXG4gICAgbW9uQ3lsOiBiKHRbNF0pLFxuICAgIC8vIOaciOafsVxuICAgIGRheUN5bDogYih0WzVdKSxcbiAgICAvLyDml6Xmn7FcbiAgICBsdW5hclllYXJDTjogYCR7dFswXS50b1N0cmluZygpLnNwbGl0KFwiXCIpLm1hcCgoaSkgPT4gRltOdW1iZXIoaSldKS5qb2luKFwiXCIpfWAsXG4gICAgLy8g5Yac5Y6G5bm05Lu95Lit5paH6KGo56S6XG4gICAgbHVuYXJNb25DTjogYCR7QVt0WzFdXX3mnIhgLFxuICAgIC8vIOWGnOWOhuaciOS7veS4reaWh+ihqOekulxuICAgIGx1bmFyRGF5Q046IGl0KHRbMl0pXG4gICAgLy8g5Yac5Y6G5pel5pyf5Lit5paH6KGo56S6XG4gIH07XG59LCBqID0gKHIsIHQpID0+IHtcbiAgY29uc3QgZSA9IGgociksIGEgPSBoKHQpLCBvID0gW107XG4gIGZvciAobGV0IHMgPSBlOyBzLmlzQmVmb3JlKGEpIHx8IHMuaXNTYW1lKGEsIFwiZGF5XCIpOyBzID0gcy5hZGQoMSwgXCJkYXlcIikpXG4gICAgby5wdXNoKG0ocykpO1xuICByZXR1cm4gbztcbn0sIEkgPSAocikgPT4ge1xuICBjb25zdCB0ID0gaChyKSwgZSA9IHQueWVhcigpLCBhID0gdC5tb250aCgpICsgMSwgbyA9IHQuZGF0ZSgpO1xuICBsZXQgcyA9IDA7XG4gIGZvciAobGV0IHkgPSAxOTAwOyB5IDwgZTsgeSsrKVxuICAgIHMgKz0geCh5KTtcbiAgY29uc3QgbiA9IHAoZSk7XG4gIGZvciAobGV0IHkgPSAxOyB5IDwgYTsgeSsrKVxuICAgIHMgKz0gRChlLCB5KSwgeSA9PT0gbiAmJiAocyArPSB2KGUpKTtcbiAgcyArPSBvIC0gMTtcbiAgY29uc3QgZCA9IGgobmV3IERhdGUoMTkwMCwgMCwgMzEpKSwgaSA9IGQuYWRkKHMsIFwiZGF5XCIpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gIGxldCBfID0gcywgTjtcbiAgcmV0dXJuIG4gPT09IGEgJiYgKF8gKz0gRChlLCBhKSwgTiA9IGQuYWRkKF8sIFwiZGF5XCIpLmZvcm1hdChcIllZWVktTU0tRERcIikpLCB7XG4gICAgZGF0ZTogaSxcbiAgICBsZWFwTW9udGhEYXRlOiBOXG4gIH07XG59LCBsdCA9IHtcbiAgZ2V0THVuYXJZZWFyczogUixcbiAgZ2V0WWVhckxlYXBNb250aDogQyxcbiAgZ2V0THVuYXJEYXRlOiBtLFxuICBnZXRMdW5hckRhdGVzSW5SYW5nZTogaixcbiAgZ2V0U29sYXJEYXRlRnJvbUx1bmFyOiBJXG59LCBodCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IGx0LFxuICBnZXRMdW5hckRhdGU6IG0sXG4gIGdldEx1bmFyRGF0ZXNJblJhbmdlOiBqLFxuICBnZXRMdW5hclllYXJzOiBSLFxuICBnZXRTb2xhckRhdGVGcm9tTHVuYXI6IEksXG4gIGdldFllYXJMZWFwTW9udGg6IEMsXG4gIG1vbnRoRGF5czogRFxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgX3QgPSB7XG4gIDE6IHtcbiAgICAvLyDmraPmnIhcbiAgICAxOiBbXCLmmKXoioJcIiwgXCLpuKHml6VcIiwgXCLlhYPlp4vlpKnlsIror57ovrBcIl0sXG4gICAgMjogW1wi54qs5pelXCJdLFxuICAgIDM6IFtcIueMquaXpVwiLCBcIuWwj+W5tOacnVwiXSxcbiAgICA0OiBbXCLnvorml6VcIiwgXCLlrZnlpKnljLvor57ovrBcIl0sXG4gICAgNTogW1wi54mb5pelXCIsIFwi56C05LqU5pelXCIsIFwi5byA5biCXCIsIFwi6Lev56We6K+e6L6wXCJdLFxuICAgIDY6IFtcIumprOaXpVwiXSxcbiAgICA3OiBbXCLkurrml6VcIiwgXCLpgIHngavnpZ5cIl0sXG4gICAgODogW1wi6LC35pelXCIsIFwi6ZiO546L6K+e6L6wXCJdLFxuICAgIDk6IFtcIuWkqeaXpVwiLCBcIueOieeah+ivnui+sFwiXSxcbiAgICAxMDogW1wi5Zyw5pelXCIsIFwi55+z5aS055Sf5pelXCJdLFxuICAgIDEzOiBbXCLkuIoo6K+VKeeBr+aXpVwiLCBcIuWFs+WFrOWNh+WkqeaXpVwiXSxcbiAgICAxNTogW1wi5YWD5a616IqCXCIsIFwi5LiK5YWD6IqCXCIsIFwi5q2j54Gv5pelXCIsIFwi5aSp5a6Y6K+e6L6wXCJdLFxuICAgIDE4OiBbXCLokL3nga/ml6VcIl0sXG4gICAgMjU6IFtcIuWkqeS7kyjloavku5Mp6IqCXCJdXG4gIH0sXG4gIDI6IHtcbiAgICAvLyDkuozmnIhcbiAgICAxOiBbXCLlpKrpmLPnlJ/ml6VcIl0sXG4gICAgMjogW1wi5pil6b6Z6IqCXCIsIFwi5Zyf5Zyw5YWs55Sf5pelXCIsIFwi5rWO5YWs5rS75L2b55Sf5pelXCJdLFxuICAgIDM6IFtcIuaWh+aYjOW4neWQm+ivnui+sFwiXSxcbiAgICAxMjogW1wi55m+6Iqx55Sf5pelKOiKseacneiKgilcIl0sXG4gICAgMTU6IFtcIuS5neWkqeeOhOWls+ivnui+sFwiLCBcIuWkquS4iuiAgeWQm+ivnui+sFwiLCBcIueyvuW/oOWys+eOi+ivnui+sFwiXSxcbiAgICAxOTogW1wi6KeC6Z+z6I+p6JCo6K+e6L6wXCJdLFxuICAgIDIxOiBbXCLmma7otKToj6nokKjor57ovrBcIl1cbiAgfSxcbiAgMzoge1xuICAgIDM6IFtcIuS4iuW3s+iKglwiXSxcbiAgICAxNTogW1wi6LW15YWs5YWD5biF6K+e6L6wXCIsIFwi5rOw5bGx6ICB5q+N6K+e6L6wXCJdXG4gIH0sXG4gIDQ6IHtcbiAgICAxOiBbXCLnpa3pm7nnpZ5cIl0sXG4gICAgNDogW1wi5paH5q6K6I+p6JCo6K+e6L6wXCJdLFxuICAgIDg6IFtcIua1tOS9m+iKgijpvpnljY7kvJopXCJdLFxuICAgIDEyOiBbXCLom4fnjovor57ovrBcIl0sXG4gICAgMTQ6IFtcIuWQlea0nuWuvuivnui+sFwiXSxcbiAgICAxODogW1wi5Y2O5L2X6K+e6L6wXCJdLFxuICAgIDI4OiBbXCLoja/njoso56We5YacKeivnui+sFwiXVxuICB9LFxuICA1OiB7XG4gICAgNTogW1wi56uv5Y2I6IqCXCJdLFxuICAgIDEzOiBbXCLpm6joioJcIiwgXCLpu4TluJ3or57ovrBcIl1cbiAgfSxcbiAgNjoge1xuICAgIDE6IFtcIuWNiuW5tOiKglwiXSxcbiAgICA2OiBbXCLmmZLooaPoioJcIl0sXG4gICAgMTk6IFtcIuingumfs+iPqeiQqOW+l+mBk1wiXSxcbiAgICAyNDogW1wi6Zu356We6K+e6L6wXCIsIFwi6I236Iqx55Sf5pelXCIsIFwi5YWz5YWs6K+e6L6wXCJdXG4gIH0sXG4gIDc6IHtcbiAgICAxOiBbXCLnpa3mtbfnpZ5cIl0sXG4gICAgNzogW1wi5Lme5ben6IqCXCJdLFxuICAgIDE1OiBbXCLkuK3lhYMo6ay8KeiKglwiLCBcIuWcsOWumOivnui+sCjlrZ/lhbDnm4bkvJopXCJdLFxuICAgIDE4OiBbXCLopb/njovmr43or57ovrBcIl0sXG4gICAgMjA6IFtcIuajieiKseeUn+aXpVwiXSxcbiAgICAyMzogW1wi6K+46JGb5Lqu6K+e6L6wXCJdLFxuICAgIDMwOiBbXCLlnLDol4/oj6nokKjor57ovrBcIl1cbiAgfSxcbiAgODoge1xuICAgIDE6IFtcIuWkqeWMu+iKglwiXSxcbiAgICAzOiBbXCLngbblkJvnlJ/ml6VcIl0sXG4gICAgODogW1wi55G25rGg5aSn5LyaXCJdLFxuICAgIDE1OiBbXCLkuK3np4voioJcIl0sXG4gICAgMjA6IFtcIuawtOeou+eUn+aXpVwiXSxcbiAgICAyODogW1wi5a2U5a2Q6K+e6L6wXCJdXG4gIH0sXG4gIDk6IHtcbiAgICA5OiBbXCLph43pmLPoioJcIl0sXG4gICAgMTk6IFtcIuingumfs+iPqeiQqOWHuuWutlwiXVxuICB9LFxuICAxMDoge1xuICAgIDE6IFtcIuWNgeaciOacnVwiLCBcIuWvkuiho+iKglwiXSxcbiAgICAxNTogW1wi5LiL5YWD6IqCXCIsIFwi5rC05a6Y6K+e6L6wXCJdXG4gIH0sXG4gIDEyOiB7XG4gICAgODogW1wi6IWK5YWr6IqCXCJdLFxuICAgIDIzOiBbXCLlrpjlrrbpgIHngbZcIl0sXG4gICAgMjQ6IFtcIuawkemXtOmAgeeBtlwiXSxcbiAgICAyNTogW1wi5o6l546J55qHXCJdXG4gIH1cbn0sIHl0ID0gW1xuICAvLyDlpITnkIblr5Lpo5/oioLvvIjmuIXmmI7liY3kuIDml6XvvIlcbiAgKHIsIHQpID0+IHtcbiAgICBjb25zdCBlID0gci5hZGQoMSwgXCJkYXlcIik7XG4gICAgJChlKS5maW5kKFxuICAgICAgKG8pID0+IG8udGVybSA9PT0gXCJwdXJlX2JyaWdodG5lc3NcIlxuICAgICkgJiYgdC5wdXNoKHtcbiAgICAgIGRhdGU6IHIuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgIG5hbWU6IFwi5a+S6aOf6IqCXCIsXG4gICAgICB0eXBlOiBcInNvbGFyX3Rlcm1cIlxuICAgIH0pO1xuICB9LFxuICAvLyDlpITnkIbpmaTlpJXvvIjlhpzljobohYrmnIjmnIDlkI7kuIDml6XvvIlcbiAgKHIsIHQpID0+IHtcbiAgICBjb25zdCBlID0gbShyKTtcbiAgICBpZiAoZS5sdW5hck1vbiA9PT0gMTIgJiYgZS5sdW5hckRheSA9PT0gRChlLmx1bmFyWWVhciwgMTIpKSB7XG4gICAgICBjb25zdCBhID0gci5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgICAgW1wi6Zmk5aSVXCIsIFwi5bCB5LqVXCIsIFwi56Wt5LqV56WeXCIsIFwi6LS05pil6IGUXCIsIFwi6L+O6LSi56WeXCJdLmZvckVhY2goKG8pID0+IHtcbiAgICAgICAgdC5wdXNoKHtcbiAgICAgICAgICBkYXRlOiBhLFxuICAgICAgICAgIG5hbWU6IG8sXG4gICAgICAgICAgdHlwZTogXCJsdW5hclwiXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5dLCBxID0gKHIsIHQpID0+IHtcbiAgdmFyIHM7XG4gIGNvbnN0IGUgPSBbXTtcbiAgbGV0IGEgPSBoKHIpO1xuICBjb25zdCBvID0gaCh0IHx8IHIpO1xuICBmb3IgKDsgYS5pc0JlZm9yZShvKSB8fCBhLmlzU2FtZShvKTsgKSB7XG4gICAgY29uc3QgbiA9IG0oYSk7XG4gICAgbi5pc0xlYXAgfHwgKCgocyA9IF90W24ubHVuYXJNb25dKSA9PSBudWxsID8gdm9pZCAwIDogc1tuLmx1bmFyRGF5XSkgfHwgW10pLmZvckVhY2goKGkpID0+IHtcbiAgICAgIGUucHVzaCh7XG4gICAgICAgIGRhdGU6IGEuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgICAgbmFtZTogaSxcbiAgICAgICAgdHlwZTogXCJsdW5hclwiXG4gICAgICB9KTtcbiAgICB9KSwgeXQuZm9yRWFjaCgoZCkgPT4gZChhLCBlKSksIGEgPSBhLmFkZCgxLCBcImRheVwiKTtcbiAgfVxuICByZXR1cm4gZS5yZWR1Y2UoKG4sIGQpID0+IHtcbiAgICBjb25zdCBpID0gbi5maW5kKChfKSA9PiBfLmRhdGUgPT09IGQuZGF0ZSk7XG4gICAgcmV0dXJuIGkgPyBpLm5hbWUucHVzaChkLm5hbWUpIDogbi5wdXNoKHsgZGF0ZTogZC5kYXRlLCBuYW1lOiBbZC5uYW1lXSB9KSwgbjtcbiAgfSwgW10pO1xufSwgdXQgPSB7XG4gIGdldEx1bmFyRmVzdGl2YWxzOiBxXG59LCB3dCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IHV0LFxuICBnZXRMdW5hckZlc3RpdmFsczogcVxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgZnQgPSB7XG4gIC4uLnR0LFxuICAuLi5vdCxcbiAgLi4uaHQsXG4gIC4uLnd0XG59O1xuZXhwb3J0IHtcbiAgZnQgYXMgZGVmYXVsdCxcbiAgWCBhcyBmaW5kV29ya2RheSxcbiAgSiBhcyBnZXREYXlEZXRhaWwsXG4gIEsgYXMgZ2V0SG9saWRheXNJblJhbmdlLFxuICBtIGFzIGdldEx1bmFyRGF0ZSxcbiAgaiBhcyBnZXRMdW5hckRhdGVzSW5SYW5nZSxcbiAgcSBhcyBnZXRMdW5hckZlc3RpdmFscyxcbiAgUiBhcyBnZXRMdW5hclllYXJzLFxuICBJIGFzIGdldFNvbGFyRGF0ZUZyb21MdW5hcixcbiAgTCBhcyBnZXRTb2xhclRlcm1EYXRlLFxuICBhdCBhcyBnZXRTb2xhclRlcm1zLFxuICAkIGFzIGdldFNvbGFyVGVybXNJblJhbmdlLFxuICBRIGFzIGdldFdvcmtkYXlzSW5SYW5nZSxcbiAgQyBhcyBnZXRZZWFyTGVhcE1vbnRoLFxuICBPIGFzIGlzSG9saWRheSxcbiAgRyBhcyBpc0luTGlldSxcbiAgZiBhcyBpc1dvcmtkYXksXG4gIEQgYXMgbW9udGhEYXlzXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RSxHQUFHLENBQUMsRUFBRW9GLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEVBQUUsRUFBRXJGLEVBQUUsR0FBRyxDQUFDLEVBQUVvRixHQUFHLEdBQUcsRUFBRSxFQUFFN0UsRUFBRSxHQUFHLEVBQUUsRUFBRStFLEVBQUUsR0FBRyxFQUFFLEVBQUV4SCxFQUFFLEVBQUVrQyxFQUFFLEdBQUcsRUFBRSxFQUFFb0YsR0FBRyxHQUFHLEVBQUUsRUFBRTdFLEVBQUUsR0FBRyxFQUFFLEVBQUUrRSxFQUFFLEdBQUcsRUFBRSxFQUFFNUIsRUFBRSxFQUFFMUQsRUFBRSxJQUFJLENBQUMsRUFBRW9GLEdBQUcsSUFBSSxDQUFDLEVBQUU3RSxFQUFFLElBQUksQ0FBQyxFQUFFNkUsR0FBRyxJQUFJLENBQUMsRUFBRUUsRUFBRSxJQUFJLENBQUMsRUFBRUYsR0FBRyxJQUFJLENBQUMsR0FBR3BGLEVBQUVvRSxFQUFFLElBQUksRUFBRW9CLEdBQUcsRUFBRXhGLEVBQUUsR0FBRyxDQUFDLEVBQUVvRixHQUFHLEdBQUcsQ0FBQyxFQUFFN0UsRUFBRSxHQUFHLENBQUMsRUFBRStFLEVBQUUsR0FBRyxDQUFDLEVBQUU3QixFQUFFLEVBQUV6RCxFQUFFLEdBQUcsRUFBRSxFQUFFb0YsR0FBRyxHQUFHLEVBQUUsRUFBRTdFLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxFQUFFLEVBQUUrRSxFQUFFLEdBQUcsRUFBRSxFQUFFRixHQUFHLEdBQUcsRUFBRSxFQUFFbkYsRUFBRSxFQUFFRCxFQUFFLEdBQUcsQ0FBQyxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRTVFLEVBQUUsRUFBRVIsRUFBRSxHQUFHLENBQUMsRUFBRXFGLEVBQUUsRUFBRXJGLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxFQUFFLEVBQUVsQyxFQUFFLEVBQUVrQyxFQUFFLEdBQUcsRUFBRSxFQUFFMEQsRUFBRSxFQUFFMUQsRUFBRSxJQUFJLENBQUMsRUFBRW9GLEdBQUcsSUFBSSxDQUFDLEVBQUU3RSxFQUFFLElBQUksRUFBRSxFQUFF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YW1lcyI6IFsiQ2hpbmVzZURheXNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJmaW5kV29ya2RheSIsICJYIiwgImdldERheURldGFpbCIsICJKIiwgImdldEhvbGlkYXlzSW5SYW5nZSIsICJLIiwgImdldEx1bmFyRGF0ZSIsICJtIiwgImdldEx1bmFyRGF0ZXNJblJhbmdlIiwgImoiLCAiZ2V0THVuYXJGZXN0aXZhbHMiLCAicSIsICJnZXRMdW5hclllYXJzIiwgIlIiLCAiZ2V0U29sYXJEYXRlRnJvbUx1bmFyIiwgIkkiLCAiZ2V0U29sYXJUZXJtRGF0ZSIsICJMIiwgImdldFNvbGFyVGVybXMiLCAiYXQiLCAiZ2V0U29sYXJUZXJtc0luUmFuZ2UiLCAiJCIsICJnZXRXb3JrZGF5c0luUmFuZ2UiLCAiUSIsICJnZXRZZWFyTGVhcE1vbnRoIiwgIkMiLCAiaXNIb2xpZGF5IiwgIk8iLCAiaXNJbkxpZXUiLCAiRyIsICJpc1dvcmtkYXkiLCAiZiIsICJtb250aERheXMiLCAiRCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiUCIsICJPYmplY3QiLCAiZGVmaW5lUHJvcGVydHkiLCAiVSIsICJyIiwgInQiLCAiZSIsICJlbnVtZXJhYmxlIiwgImNvbmZpZ3VyYWJsZSIsICJ3cml0YWJsZSIsICJ2YWx1ZSIsICJ3IiwgImwiLCAibDIiLCAiY29uc3RydWN0b3IiLCAiX2RhdGUiLCAiRGF0ZSIsICJ0b0RhdGUiLCAiaXNOYU4iLCAiZ2V0VGltZSIsICJyZXBsYWNlIiwgImlzVmFsaWQiLCAiZGlmZiIsICJhIiwgIm8iLCAiZ2V0RnVsbFllYXIiLCAiZ2V0TW9udGgiLCAiTWF0aCIsICJmbG9vciIsICJzdGFydE9mIiwgInNldE1vbnRoIiwgInNldERhdGUiLCAic2V0SG91cnMiLCAiZW5kT2YiLCAiZ2V0RGF0ZSIsICJhZGQiLCAic2V0RnVsbFllYXIiLCAic3VidHJhY3QiLCAiZm9ybWF0IiwgIllZWVkiLCAiTU0iLCAidG9TdHJpbmciLCAicGFkU3RhcnQiLCAiREQiLCAiSEgiLCAiZ2V0SG91cnMiLCAibW0iLCAiZ2V0TWludXRlcyIsICJzcyIsICJnZXRTZWNvbmRzIiwgImRkZGQiLCAiZGF5c09mV2VlayIsICJnZXREYXkiLCAieWVhciIsICJtb250aCIsICJkYXRlIiwgImRheSIsICJpc0JlZm9yZSIsICJpc0FmdGVyIiwgImlzU2FtZSIsICJpc0JldHdlZW4iLCAicyIsICJuIiwgIlMiLCAiaCIsICJ1IiwgIlkiLCAiQXJyYXkiLCAiZnJvbSIsICJsZW5ndGgiLCAiVyIsICJ6IiwgInkiLCAiZGF5RGV0YWlscyIsICJnZXRIb2xpZGF5RGF5cyIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJwYXJzZUludCIsICJtYXJrIiwgImhvbGlkYXkiLCAic2F2ZSIsICJFcnJvciIsICJkYXlUeXBlIiwgImNvbmNhdCIsICJob2xpZGF5cyIsICJ3b3JrZGF5cyIsICJpbkxpZXVEYXlzIiwgInRvIiwgImQiLCAiaSIsICJfIiwgIm55IiwgIlYiLCAiTSIsICJrIiwgIloiLCAiYyIsICJ3b3JrIiwgIm5hbWUiLCAiZmlsdGVyIiwgIm1hcCIsICJhYnMiLCAidHQiLCAiZnJlZXplIiwgIl9fcHJvdG9fXyIsICJTeW1ib2wiLCAidG9TdHJpbmdUYWciLCAiZXQiLCAidGhlX2JlZ2lubmluZ19vZl9zcHJpbmciLCAicmFpbl93YXRlciIsICJ0aGVfd2FraW5nX29mX2luc2VjdHMiLCAidGhlX3NwcmluZ19lcXVpbm94IiwgInB1cmVfYnJpZ2h0bmVzcyIsICJncmFpbl9yYWluIiwgInRoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyIiwgImxlc3Nlcl9mdWxsbmVzc19vZl9ncmFpbiIsICJncmFpbl9pbl9iZWFyZCIsICJ0aGVfc3VtbWVyX3NvbHN0aWNlIiwgImxlc3Nlcl9oZWF0IiwgImdyZWF0ZXJfaGVhdCIsICJ0aGVfYmVnaW5uaW5nX29mX2F1dHVtbiIsICJ0aGVfZW5kX29mX2hlYXQiLCAid2hpdGVfZGV3IiwgInRoZV9hdXR1bW5fZXF1aW5veCIsICJjb2RlX2RldyIsICJmcm9zdF9kZXNjZW50IiwgInRoZV9iZWdpbm5pbmdfb2Zfd2ludGVyIiwgImxlc3Nlcl9zbm93IiwgImdyZWF0ZXJfc25vdyIsICJ0aGVfd2ludGVyX3NvbHN0aWNlIiwgImxlc3Nlcl9jb2xkIiwgImdyZWF0ZXJfY29sZCIsICJUIiwgInJ0IiwgIkUiLCAiaW5jbHVkZXMiLCAiZm9yRWFjaCIsICJwdXNoIiwgInRlcm0iLCAiaW5kZXgiLCAib3QiLCAiZyIsICJGIiwgIkEiLCAiSCIsICJCIiwgIm50IiwgIngiLCAidiIsICJwIiwgImIiLCAic3QiLCAiaXQiLCAiZHQiLCAibHVuYXJZZWFyIiwgImx1bmFyWWVhckNOIiwgInNwbGl0IiwgIk51bWJlciIsICJqb2luIiwgImxlYXBNb250aCIsICJsZWFwTW9udGhDTiIsICJkYXlzIiwgImZpbGwiLCAibHVuYXJNb24iLCAibHVuYXJEYXkiLCAiaXNMZWFwIiwgInpvZGlhYyIsICJ5ZWFyQ3lsIiwgIm1vbkN5bCIsICJkYXlDeWwiLCAibHVuYXJNb25DTiIsICJsdW5hckRheUNOIiwgIk4iLCAibGVhcE1vbnRoRGF0ZSIsICJsdCIsICJodCIsICJkZWZhdWx0IiwgIl90IiwgInl0IiwgImZpbmQiLCAidHlwZSIsICJyZWR1Y2UiLCAidXQiLCAid3QiLCAiZnQiXQp9Cg==
