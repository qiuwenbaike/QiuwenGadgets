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
var U = (e, t, r) => t in e ? P(e, t, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: r
}) : e[t] = r;
var c = (e, t, r) => U(e, typeof t != "symbol" ? t + "" : t, r);
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
  diff(t, r = "day") {
    const a = new d2(t).toDate(), n = this._date.getTime() - a.getTime();
    switch (r) {
      case "year":
        return this._date.getFullYear() - a.getFullYear();
      case "month":
        return (this._date.getFullYear() - a.getFullYear()) * 12 + (this._date.getMonth() - a.getMonth());
      case "day":
      default:
        return Math.floor(n / (1e3 * 60 * 60 * 24));
    }
  }
  startOf(t) {
    const r = new Date(this._date);
    switch (t) {
      case "year":
        r.setMonth(0), r.setDate(1), r.setHours(0, 0, 0, 0);
        break;
      case "month":
        r.setDate(1), r.setHours(0, 0, 0, 0);
        break;
      case "day":
        r.setHours(0, 0, 0, 0);
        break;
    }
    return new d2(r);
  }
  endOf(t) {
    const r = new Date(this._date);
    switch (t) {
      case "year":
        r.setMonth(11), r.setDate(31), r.setHours(23, 59, 59, 999);
        break;
      case "month":
        r.setDate(new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate()), r.setHours(23, 59, 59, 999);
        break;
      case "day":
        r.setHours(23, 59, 59, 999);
        break;
    }
    return new d2(r);
  }
  add(t, r) {
    const a = new Date(this._date);
    switch (r) {
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
  subtract(t, r) {
    return this.add(-t, r);
  }
  format(t) {
    const r = {
      YYYY: this._date.getFullYear(),
      MM: (this._date.getMonth() + 1).toString().padStart(2, "0"),
      DD: this._date.getDate().toString().padStart(2, "0"),
      HH: this._date.getHours().toString().padStart(2, "0"),
      mm: this._date.getMinutes().toString().padStart(2, "0"),
      ss: this._date.getSeconds().toString().padStart(2, "0"),
      dddd: d2.daysOfWeek[this._date.getDay()]
    };
    return t.replace(/YYYY|MM|DD|HH|mm|ss|dddd/g, (a) => r[a].toString());
  }
  year(t) {
    if (t === void 0) return this._date.getFullYear();
    const r = new Date(this._date);
    return r.setFullYear(t), new d2(r);
  }
  month(t) {
    if (t === void 0) return this._date.getMonth();
    const r = new Date(this._date);
    return r.setMonth(t), new d2(r);
  }
  date(t) {
    if (t === void 0) return this._date.getDate();
    const r = new Date(this._date);
    return r.setDate(t), new d2(r);
  }
  day(t) {
    if (t === void 0) return this._date.getDay();
    {
      const r = this._date.getDay(), a = t - r, n = new Date(this._date);
      return n.setDate(this._date.getDate() + a), new d2(n);
    }
  }
  isBefore(t) {
    const r = new d2(t).toDate();
    return this._date.getTime() < r.getTime();
  }
  isAfter(t) {
    const r = new d2(t).toDate();
    return this._date.getTime() > r.getTime();
  }
  isSame(t, r = "day") {
    const a = new d2(t).toDate();
    switch (r) {
      case "year":
        return this._date.getFullYear() === a.getFullYear();
      case "month":
        return this._date.getFullYear() === a.getFullYear() && this._date.getMonth() === a.getMonth();
      case "day":
      default:
        return this._date.getFullYear() === a.getFullYear() && this._date.getMonth() === a.getMonth() && this._date.getDate() === a.getDate();
    }
  }
  isBetween(t, r, a) {
    const n = new d2(t).startOf(a).toDate(), l = new d2(r).endOf(a).toDate(), o = this.toDate();
    return o >= n && o <= l;
  }
};
c(d, "daysOfWeek", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
var S = d;
var h = (e) => new S(e);
var u = (e) => h(e).startOf("day");
var Y = (e, t) => {
  e = u(e), t = u(t);
  const r = t.diff(e, "day");
  return Array.from({
    length: r + 1
  }, (a, n) => e.add(n, "day"));
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
  getHolidayDays(t, r) {
    let a = 0;
    for (var _i = 0, _Object$entries = Object.entries(W); _i < _Object$entries.length; _i++) {
      const [n, l] = _Object$entries[_i];
      if (parseInt(n) > t) break;
      l[r] !== void 0 && (a = l[r]);
    }
    return a;
  }
  mark(t) {
    return this.dayDetails.holiday = t, this;
  }
  save(t, r, a) {
    if (!this.dayDetails.year) throw new Error("should set year before saving holiday");
    if (!this.dayDetails.holiday) throw new Error("should set holiday before saving holiday");
    this.dayDetails.month = t, this.dayDetails.day = r, this.dayDetails.dayType = a;
    const n = h("".concat(this.dayDetails.year, "-").concat(t, "-").concat(r)).format("YYYY-MM-DD"), l = this.getHolidayDays(this.dayDetails.year, this.dayDetails.holiday), o = "".concat(this.dayDetails.holiday, ",").concat(l);
    return a === 2 ? this.holidays[n] = o : a === 1 ? this.workdays[n] = o : a === 3 && (this.inLieuDays[n] = o), this;
  }
  to(t, r) {
    if (!this.dayDetails.holiday || !this.dayDetails.year || !this.dayDetails.month || !this.dayDetails.day) throw new Error("should set year/month/day before saving holiday range");
    const a = h("".concat(this.dayDetails.year, "-").concat(this.dayDetails.month, "-").concat(this.dayDetails.day)), n = h("".concat(this.dayDetails.year, "-").concat(t, "-").concat(r));
    if (n.isBefore(a) || n.isSame(a)) throw new Error("end date should be after start date");
    const l = this.getHolidayDays(this.dayDetails.year, this.dayDetails.holiday), o = "".concat(this.dayDetails.holiday, ",").concat(l), i = n.diff(a, "day");
    for (let s = 1; s <= i; s++) {
      const _ = a.add(s, "day").format("YYYY-MM-DD");
      this.dayDetails.dayType === 2 ? this.holidays[_] = o : this.dayDetails.dayType === 1 ? this.workdays[_] = o : this.dayDetails.dayType === 3 && (this.inLieuDays[_] = o);
    }
    return this;
  }
  /** work day */
  w(t, r) {
    return this.save(
      t,
      r,
      1
      /* Workday */
    );
  }
  /** rest */
  r(t, r) {
    return this.save(
      t,
      r,
      2
      /* Holiday */
    );
  }
  /** in-lieu */
  i(t, r) {
    return this.save(
      t,
      r,
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
  const e = new z();
  return e.y(2025).ny().r(1, 1).s().r(1, 28).to(2, 4).w(1, 26).w(2, 8).i(2, 3).i(2, 4).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 27).i(5, 5).d().r(5, 31).to(6, 2).n().r(10, 1).to(10, 8).w(9, 28).w(10, 11).i(10, 7).i(10, 8).m().r(10, 6), e.y(2024).ny().r(1, 1).s().r(2, 10).to(2, 17).w(2, 4).w(2, 18).i(2, 15).to(2, 16).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(5, 1).to(5, 5).w(4, 28).w(5, 11).i(5, 2).to(5, 3).d().r(6, 10).m().r(9, 15).to(9, 17).w(9, 14).i(9, 16).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), e.y(2023).ny().r(1, 1).to(1, 2).s().r(1, 21).to(1, 27).w(1, 28).to(1, 29).i(1, 26).to(1, 27).t().r(4, 5).l().r(4, 29).to(5, 3).w(4, 23).w(5, 6).i(5, 2).to(5, 3).d().r(6, 22).to(6, 24).w(6, 25).i(6, 23).m().r(9, 29).n().r(9, 30).to(10, 6).w(10, 7).to(10, 8).i(10, 5).to(10, 6), e.y(2022).ny().r(1, 1).to(1, 3).s().r(1, 31).to(2, 6).w(1, 29).w(1, 30).i(2, 3).to(2, 4).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 4).w(4, 24).w(5, 7).i(5, 3).to(5, 4).d().r(6, 3).to(6, 5).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).w(10, 9).i(10, 6).to(10, 7).ny().r(12, 31), e.y(2021).ny().r(1, 1).to(1, 3).s().r(2, 11).to(2, 17).w(2, 7).w(2, 20).i(2, 16).to(2, 17).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 5).w(4, 25).w(5, 8).i(5, 4).to(5, 5).d().r(6, 12).to(6, 14).m().r(9, 19).to(9, 21).w(9, 18).i(9, 20).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), e.y(2020).ny().r(1, 1).s().r(1, 24).to(2, 2).w(1, 19).i(1, 29).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 26).w(5, 9).i(5, 4).to(5, 5).d().r(6, 25).to(6, 27).w(6, 28).i(6, 26).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8), e.y(2019).ny().r(1, 1).s().r(2, 4).to(2, 10).w(2, 2).to(2, 3).i(2, 4).i(2, 8).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 4).w(4, 28).w(5, 5).i(5, 2).i(5, 3).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), e.y(2018).ny().r(1, 1).s().r(2, 15).to(2, 21).w(2, 11).w(2, 24).i(2, 19).to(2, 21).t().r(4, 5).to(4, 7).w(4, 8).i(4, 6).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 18).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).m().r(9, 24).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), e.y(2017).ny().r(1, 1).to(1, 2).s().r(1, 27).to(2, 2).w(1, 22).w(2, 4).i(2, 1).to(2, 2).t().r(4, 2).to(4, 4).w(4, 1).i(4, 3).l().r(5, 1).d().r(5, 28).to(5, 30).w(5, 27).i(5, 29).n().r(10, 1).to(10, 8).w(9, 30).i(10, 6).m().r(10, 4), e.y(2016).ny().r(1, 1).s().r(2, 7).to(2, 13).w(2, 6).w(2, 14).i(2, 11).to(2, 12).t().r(4, 4).l().r(5, 1).to(5, 2).d().r(6, 9).to(6, 11).w(6, 12).i(6, 10).m().r(9, 15).to(9, 17).w(9, 18).i(9, 16).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), e.y(2015).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(2, 18).to(2, 24).w(2, 15).w(2, 28).i(2, 23).to(2, 24).t().r(4, 5).to(4, 6).l().r(5, 1).d().r(6, 20).r(6, 22).m().r(9, 27).n().r(10, 1).to(10, 7).w(10, 10).i(10, 7).a().r(9, 3).to(9, 4).w(9, 6).i(9, 4), e.y(2014).ny().r(1, 1).s().r(1, 31).to(2, 6).w(1, 26).w(2, 8).i(2, 5).to(2, 6).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 2).m().r(9, 8).n().r(10, 1).to(10, 7).w(9, 28).w(10, 11).i(10, 6).to(10, 7), e.y(2013).ny().r(1, 1).to(1, 3).w(1, 5).to(1, 6).i(1, 2).to(1, 3).s().r(2, 9).to(2, 15).w(2, 16).to(2, 17).i(2, 14).to(2, 15).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(4, 29).to(5, 1).w(4, 27).to(4, 28).i(4, 29).to(4, 30).d().r(6, 10).to(6, 12).w(6, 8).to(6, 9).i(6, 10).to(6, 11).m().r(9, 19).to(9, 21).w(9, 22).i(9, 20).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), e.y(2012).ny().r(1, 1).to(1, 3).i(1, 3).s().r(1, 22).to(1, 28).w(1, 21).w(1, 29).i(1, 26).to(1, 27).t().r(4, 2).to(4, 4).w(3, 31).w(4, 1).i(4, 2).to(4, 3).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 22).r(6, 24).m().r(9, 30).n().r(10, 1).to(10, 7).w(9, 29).i(10, 5), e.y(2011).ny().r(1, 1).to(1, 3).s().r(2, 2).to(2, 8).w(1, 30).w(2, 12).i(2, 7).to(2, 8).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 2).d().r(6, 4).r(6, 6).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7).ny().w(12, 31), e.y(2010).ny().r(1, 1).to(1, 3).s().r(2, 13).to(2, 19).w(2, 20).to(2, 21).i(2, 18).to(2, 19).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 3).d().r(6, 14).to(6, 16).w(6, 12).to(6, 13).i(6, 14).to(6, 15).m().r(9, 22).to(9, 24).w(9, 19).w(9, 25).i(9, 23).to(9, 24).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), e.y(2009).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(1, 25).to(1, 31).w(1, 24).w(2, 1).i(1, 29).to(1, 30).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).d().r(5, 28).to(5, 30).w(5, 31).i(5, 29).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8).m().r(10, 3), e.y(2008).ny().r(1, 1).s().r(2, 6).to(2, 12).w(2, 2).to(2, 3).i(2, 11).to(2, 12).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(9, 29).to(10, 5).w(9, 27).to(9, 28).i(9, 29).to(9, 30), e.y(2007).ny().r(1, 1).to(1, 3).i(1, 2).to(1, 3).s().r(2, 18).to(2, 24).w(2, 17).w(2, 25).i(2, 22).to(2, 23).l().r(5, 1).to(5, 7).w(4, 28).to(4, 29).i(5, 4).i(5, 7).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), e.y(2006).ny().r(1, 1).to(1, 3).s().r(1, 29).to(2, 4).w(1, 28).w(2, 5).i(2, 2).to(2, 3).l().r(5, 1).to(5, 7).w(4, 29).to(4, 30).i(5, 4).to(5, 5).n().r(10, 1).to(10, 7).w(9, 30).w(10, 8).i(10, 5).to(10, 6).ny().w(12, 30).to(12, 31), e.y(2005).ny().r(1, 1).to(1, 3).s().r(2, 9).to(2, 15).w(2, 5).to(2, 6).i(2, 14).to(2, 15).l().r(5, 1).to(5, 7).w(4, 30).w(5, 8).i(5, 5).to(5, 6).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), e.y(2004).ny().r(1, 1).s().r(1, 22).to(1, 28).w(1, 17).to(1, 18).i(1, 27).to(1, 28).l().r(5, 1).to(5, 7).w(5, 8).to(5, 9).i(5, 6).to(5, 7).n().r(10, 1).to(10, 7).w(10, 9).to(10, 10).i(10, 6).to(10, 7), {
    holidays: e.holidays,
    workdays: e.workdays,
    inLieuDays: e.inLieuDays
  };
};
var {
  holidays: M,
  workdays: k,
  inLieuDays: Z
} = V();
var w = (...e) => {
  if (e.length !== 1) return e.map((r) => w(r));
  const t = u(e[0]);
  if (!t.isValid()) throw new Error("unsupported type ".concat(typeof t, ", expected type is Date or Dayjs"));
  return t;
};
var O = (e) => !f(e);
var f = (e) => {
  const t = w(e), r = t.day(), a = t.format("YYYY-MM-DD");
  return !!(k[a] || r >= 1 && r <= 5 && !M[a]);
};
var G = (e) => (e = w(e), !!Z[e.format("YYYY-MM-DD")]);
var J = (e) => {
  e = w(e);
  const t = e.format("YYYY-MM-DD");
  if (k[t]) return {
    date: t,
    work: true,
    name: k[t]
  };
  if (M[t]) return {
    date: t,
    work: false,
    name: M[t]
  };
  {
    const r = e.day();
    return {
      date: t,
      work: r !== 0 && r !== 6,
      name: e.format("dddd")
    };
  }
};
var K = (e, t, r = true) => (e = w(e), t = w(t), r ? Y(e, t).filter(O).map((a) => a.format("YYYY-MM-DD")) : Y(e, t).filter((a) => M[a.format("YYYY-MM-DD")]).map((a) => a.format("YYYY-MM-DD")));
var Q = (e, t, r = true) => (e = w(e), t = w(t), r ? Y(e, t).filter(f).map((a) => a.format("YYYY-MM-DD")) : Y(e, t).filter((a) => f(a) && a.day() >= 1 && a.day() <= 5).map((a) => a.format("YYYY-MM-DD")));
var X = (e = 0, t = h()) => {
  if (t = u(t), e === 0) {
    if (f(t)) return t.format("YYYY-MM-DD");
    e = 1;
  }
  const r = e > 0 ? 1 : -1;
  let a = Math.abs(e);
  for (; a > 0; ) t = t.add(r, "day"), f(t) && a--;
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
var L = (e, t, r) => {
  const a = e >= 2e3 ? 21 : 20, n = e % 100, l = 0.2422, o = et[r][a === 21 ? 1 : 0];
  let i = Math.floor(n / 4);
  ["lesser_cold", "greater_cold", "the_beginning_of_spring", "rain_water"].includes(r) && (i = Math.floor((n - 1) / 4));
  let s = Math.floor(n * l + o) - i;
  const _ = rt["".concat(e, "_").concat(r)];
  return _ && (s += _), h("".concat(e, "-").concat(t, "-").concat(s)).format("YYYY-MM-DD");
};
var at = (e, t) => {
  const r = [];
  let a = u(e);
  const n = u(t || e);
  for (; a.isBefore(n) || a.isSame(n); ) {
    const l = a.year(), o = a.month() + 1;
    T[o].forEach((i) => {
      const s = h(L(l, o, i));
      (s != null && s.isBefore(n) || s != null && s.isSame(n)) && (s != null && s.isAfter(a) || s != null && s.isSame(a)) && r.push({
        date: s.format("YYYY-MM-DD"),
        term: i,
        name: E[i],
        index: 1
      });
    }), o === 12 ? a = a.add(1, "year").startOf("year") : a = a.add(1, "month").startOf("month");
  }
  return r;
};
var $ = (e, t) => {
  let r = u(e).subtract(1, "month");
  const a = u(t || e).add(1, "month"), n = [];
  for (; r.isBefore(a) || r.isSame(a); ) {
    const o = r.year(), i = r.month() + 1;
    T[i].forEach((s) => {
      const _ = h(L(o, i, s));
      n.push({
        term: s,
        date: _
      });
    }), r.month() === 11 ? r = r.add(1, "year").startOf("year") : r = r.add(1, "month").startOf("month");
  }
  const l = [];
  return n.forEach((o, i) => {
    for (let s = o.date; n[i + 1] && s.isBefore(n[i + 1].date); s = s.add(1, "day")) l.push({
      day: s,
      term: o.term,
      name: E[o.term],
      index: s.diff(o.date, "day") + 1
    });
  }), t || (t = e), l.filter((o) => o.day.isBetween(e, t, "day")).map((o) => ({
    date: o.day.format("YYYY-MM-DD"),
    term: o.term,
    name: o.name,
    index: o.index
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
var x = (e) => {
  let t = 348;
  for (let r = 32768; r > 8; r >>= 1) t += g[e - 1900] & r ? 1 : 0;
  return t + N(e);
};
var p = (e) => g[e - 1900] & 15;
var N = (e) => p(e) ? g[e - 1900] & 65536 ? 30 : 29 : 0;
var b = (e) => H[e % 10] + B[e % 12];
var D = (e, t) => g[e - 1900] & 65536 >> t ? 30 : 29;
var st = (e) => nt[(e - 4) % 12];
var it = (e) => {
  const t = ["初", "十", "廿", "三十"];
  if (e === 10) return "初十";
  if (e === 20) return "二十";
  if (e === 30) return "三十";
  const r = Math.floor(e / 10), a = e % 10;
  return t[r] + (a ? F[a] : "");
};
var lt = (e) => "".concat(H[(e - 4) % 10]).concat(B[(e - 4) % 12], "年");
var R = (e, t) => {
  const r = [];
  for (let a = e; a <= t; a++) r.push({
    year: a,
    lunarYear: lt(a),
    lunarYearCN: a.toString().split("").map((n) => F[Number(n)]).join("")
  });
  return r;
};
var C = (e) => {
  const t = p(e);
  return {
    year: e,
    leapMonth: t || void 0,
    leapMonthCN: t ? "闰".concat(A[t - 1], "月") : void 0,
    days: t ? g[e - 1900] & 65536 ? 30 : 29 : 0
  };
};
var m = (e) => {
  const t = new Array(7).fill(0);
  let r = 0, a = 0;
  const n = h(new Date(1900, 0, 31)), l = h(e);
  let o = l.diff(n, "day");
  t[5] = o + 40, t[4] = 14;
  let i = 1900;
  for (; i < 2100 && o > 0; i++) r = x(i), o -= r, t[4] += 12;
  o < 0 && (o += r, i--, t[4] -= 12), t[0] = i, t[3] = i - 1864, a = p(i), t[6] = 0;
  for (let s = 1; s < 13 && o >= 0; s++) a > 0 && s === a + 1 && t[6] === 0 ? (--s, t[6] = 1, r = N(i)) : r = D(i, s), t[6] === 1 && s === a + 1 && (t[6] = 0), o -= r, t[6] === 0 && t[4]++, t[1] = s;
  return o === 0 && a > 0 && t[6] === 1 ? t[6] = 0 : o < 0 && (o += r, t[1]--, t[4]--), t[2] = o + 1, {
    date: l.format("YYYY-MM-DD"),
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
    lunarYearCN: "".concat(t[0].toString().split("").map((s) => F[Number(s)]).join("")),
    // 农历年份中文表示
    lunarMonCN: "".concat(A[t[1]], "月"),
    // 农历月份中文表示
    lunarDayCN: it(t[2])
    // 农历日期中文表示
  };
};
var j = (e, t) => {
  const r = h(e), a = h(t), n = [];
  for (let l = r; l.isBefore(a) || l.isSame(a, "day"); l = l.add(1, "day")) n.push(m(l));
  return n;
};
var I = (e) => {
  const t = h(e), r = t.year(), a = t.month() + 1, n = t.date();
  let l = 0;
  for (let y = 1900; y < r; y++) l += x(y);
  let o = p(r);
  for (let y = 1; y < a; y++) l += D(r, y), y === o && (l += N(r));
  l += n - 1;
  const i = h(new Date(1900, 0, 31)), s = i.add(l, "day").format("YYYY-MM-DD");
  let _ = l, v;
  return o === a && (_ += D(r, a), v = i.add(_, "day").format("YYYY-MM-DD")), {
    date: s,
    leapMonthDate: v
  };
};
var dt = {
  getLunarYears: R,
  getYearLeapMonth: C,
  getLunarDate: m,
  getLunarDatesInRange: j,
  getSolarDateFromLunar: I
};
var ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dt,
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
  (e, t) => {
    const r = e.add(1, "day");
    $(r).find((n) => n.term === "pure_brightness") && t.push({
      date: e.format("YYYY-MM-DD"),
      name: "寒食节",
      type: "solar_term"
    });
  },
  // 处理除夕（农历腊月最后一日）
  (e, t) => {
    const r = m(e);
    if (r.lunarMon === 12 && r.lunarDay === D(r.lunarYear, 12)) {
      const a = e.format("YYYY-MM-DD");
      ["除夕", "封井", "祭井神", "贴春联", "迎财神"].forEach((n) => {
        t.push({
          date: a,
          name: n,
          type: "lunar"
        });
      });
    }
  }
];
var q = (e, t) => {
  var l;
  const r = [];
  let a = h(e);
  const n = h(t || e);
  for (; a.isBefore(n) || a.isSame(n); ) {
    const o = m(a);
    o.isLeap || (((l = _t[o.lunarMon]) == null ? void 0 : l[o.lunarDay]) || []).forEach((s) => {
      r.push({
        date: a.format("YYYY-MM-DD"),
        name: s,
        type: "lunar"
      });
    }), yt.forEach((i) => i(a, r)), a = a.add(1, "day");
  }
  return r.reduce((o, i) => {
    const s = o.find((_) => _.date === i.date);
    return s ? s.name.push(i.name) : o.push({
      date: i.date,
      name: [i.name]
    }), o;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL0NoaW5lc2VEYXlzL0NoaW5lc2VEYXlzLnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jaGluZXNlLWRheXNAMS41LjAvbm9kZV9tb2R1bGVzL2NoaW5lc2UtZGF5cy9kaXN0L2luZGV4LmVzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICdjaGluZXNlLWRheXMnO1xuIiwgInZhciBQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIFUgPSAoZSwgdCwgcikgPT4gdCBpbiBlID8gUChlLCB0LCB7IGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAsIHZhbHVlOiByIH0pIDogZVt0XSA9IHI7XG52YXIgYyA9IChlLCB0LCByKSA9PiBVKGUsIHR5cGVvZiB0ICE9IFwic3ltYm9sXCIgPyB0ICsgXCJcIiA6IHQsIHIpO1xuY29uc3QgZCA9IGNsYXNzIGQge1xuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgYyh0aGlzLCBcIl9kYXRlXCIpO1xuICAgIHQgaW5zdGFuY2VvZiBkID8gdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQudG9EYXRlKCkpIDogdCBpbnN0YW5jZW9mIERhdGUgPyB0aGlzLl9kYXRlID0gbmV3IERhdGUodCkgOiB0eXBlb2YgdCA9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB0ID09IFwibnVtYmVyXCIgPyAodGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQpLCB0eXBlb2YgdCA9PSBcInN0cmluZ1wiICYmIGlzTmFOKHRoaXMuX2RhdGUuZ2V0VGltZSgpKSAmJiAodGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQucmVwbGFjZSgvLS9nLCBcIi9cIikpKSkgOiB0aGlzLl9kYXRlID0gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCk7XG4gIH1cbiAgdG9EYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICB9XG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuICFpc05hTih0aGlzLl9kYXRlLmdldFRpbWUoKSk7XG4gIH1cbiAgZGlmZih0LCByID0gXCJkYXlcIikge1xuICAgIGNvbnN0IGEgPSBuZXcgZCh0KS50b0RhdGUoKSwgbiA9IHRoaXMuX2RhdGUuZ2V0VGltZSgpIC0gYS5nZXRUaW1lKCk7XG4gICAgc3dpdGNoIChyKSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpIC0gYS5nZXRGdWxsWWVhcigpO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIHJldHVybiAodGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpIC0gYS5nZXRGdWxsWWVhcigpKSAqIDEyICsgKHRoaXMuX2RhdGUuZ2V0TW9udGgoKSAtIGEuZ2V0TW9udGgoKSk7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihuIC8gKDFlMyAqIDYwICogNjAgKiAyNCkpO1xuICAgIH1cbiAgfVxuICBzdGFydE9mKHQpIHtcbiAgICBjb25zdCByID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICByLnNldE1vbnRoKDApLCByLnNldERhdGUoMSksIHIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIHIuc2V0RGF0ZSgxKSwgci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICAgIHIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGQocik7XG4gIH1cbiAgZW5kT2YodCkge1xuICAgIGNvbnN0IHIgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyXCI6XG4gICAgICAgIHIuc2V0TW9udGgoMTEpLCByLnNldERhdGUoMzEpLCByLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIHIuc2V0RGF0ZShuZXcgRGF0ZShyLmdldEZ1bGxZZWFyKCksIHIuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKSksIHIuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICAgIHIuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuZXcgZChyKTtcbiAgfVxuICBhZGQodCwgcikge1xuICAgIGNvbnN0IGEgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICBzd2l0Y2ggKHIpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyXCI6XG4gICAgICAgIGEuc2V0RnVsbFllYXIoYS5nZXRGdWxsWWVhcigpICsgdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIGEuc2V0TW9udGgoYS5nZXRNb250aCgpICsgdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRheVwiOlxuICAgICAgICBhLnNldERhdGUoYS5nZXREYXRlKCkgKyB0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuZXcgZChhKTtcbiAgfVxuICBzdWJ0cmFjdCh0LCByKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKC10LCByKTtcbiAgfVxuICBmb3JtYXQodCkge1xuICAgIGNvbnN0IHIgPSB7XG4gICAgICBZWVlZOiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBNTTogKHRoaXMuX2RhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgREQ6IHRoaXMuX2RhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgSEg6IHRoaXMuX2RhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICAgIG1tOiB0aGlzLl9kYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICAgIHNzOiB0aGlzLl9kYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICAgIGRkZGQ6IGQuZGF5c09mV2Vla1t0aGlzLl9kYXRlLmdldERheSgpXVxuICAgIH07XG4gICAgcmV0dXJuIHQucmVwbGFjZSgvWVlZWXxNTXxERHxISHxtbXxzc3xkZGRkL2csIChhKSA9PiByW2FdLnRvU3RyaW5nKCkpO1xuICB9XG4gIHllYXIodCkge1xuICAgIGlmICh0ID09PSB2b2lkIDApIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgciA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgIHJldHVybiByLnNldEZ1bGxZZWFyKHQpLCBuZXcgZChyKTtcbiAgfVxuICBtb250aCh0KSB7XG4gICAgaWYgKHQgPT09IHZvaWQgMCkgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCByID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgcmV0dXJuIHIuc2V0TW9udGgodCksIG5ldyBkKHIpO1xuICB9XG4gIGRhdGUodCkge1xuICAgIGlmICh0ID09PSB2b2lkIDApIHJldHVybiB0aGlzLl9kYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCByID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgcmV0dXJuIHIuc2V0RGF0ZSh0KSwgbmV3IGQocik7XG4gIH1cbiAgZGF5KHQpIHtcbiAgICBpZiAodCA9PT0gdm9pZCAwKVxuICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RGF5KCk7XG4gICAge1xuICAgICAgY29uc3QgciA9IHRoaXMuX2RhdGUuZ2V0RGF5KCksIGEgPSB0IC0gciwgbiA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgICAgcmV0dXJuIG4uc2V0RGF0ZSh0aGlzLl9kYXRlLmdldERhdGUoKSArIGEpLCBuZXcgZChuKTtcbiAgICB9XG4gIH1cbiAgaXNCZWZvcmUodCkge1xuICAgIGNvbnN0IHIgPSBuZXcgZCh0KS50b0RhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRUaW1lKCkgPCByLmdldFRpbWUoKTtcbiAgfVxuICBpc0FmdGVyKHQpIHtcbiAgICBjb25zdCByID0gbmV3IGQodCkudG9EYXRlKCk7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0VGltZSgpID4gci5nZXRUaW1lKCk7XG4gIH1cbiAgaXNTYW1lKHQsIHIgPSBcImRheVwiKSB7XG4gICAgY29uc3QgYSA9IG5ldyBkKHQpLnRvRGF0ZSgpO1xuICAgIHN3aXRjaCAocikge1xuICAgICAgY2FzZSBcInllYXJcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gYS5nZXRGdWxsWWVhcigpO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCkgPT09IGEuZ2V0RnVsbFllYXIoKSAmJiB0aGlzLl9kYXRlLmdldE1vbnRoKCkgPT09IGEuZ2V0TW9udGgoKTtcbiAgICAgIGNhc2UgXCJkYXlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCkgPT09IGEuZ2V0RnVsbFllYXIoKSAmJiB0aGlzLl9kYXRlLmdldE1vbnRoKCkgPT09IGEuZ2V0TW9udGgoKSAmJiB0aGlzLl9kYXRlLmdldERhdGUoKSA9PT0gYS5nZXREYXRlKCk7XG4gICAgfVxuICB9XG4gIGlzQmV0d2Vlbih0LCByLCBhKSB7XG4gICAgY29uc3QgbiA9IG5ldyBkKHQpLnN0YXJ0T2YoYSkudG9EYXRlKCksIGwgPSBuZXcgZChyKS5lbmRPZihhKS50b0RhdGUoKSwgbyA9IHRoaXMudG9EYXRlKCk7XG4gICAgcmV0dXJuIG8gPj0gbiAmJiBvIDw9IGw7XG4gIH1cbn07XG5jKGQsIFwiZGF5c09mV2Vla1wiLCBbXG4gIFwiU3VuZGF5XCIsXG4gIFwiTW9uZGF5XCIsXG4gIFwiVHVlc2RheVwiLFxuICBcIldlZG5lc2RheVwiLFxuICBcIlRodXJzZGF5XCIsXG4gIFwiRnJpZGF5XCIsXG4gIFwiU2F0dXJkYXlcIlxuXSk7XG5sZXQgUyA9IGQ7XG5jb25zdCBoID0gKGUpID0+IG5ldyBTKGUpLCB1ID0gKGUpID0+IGgoZSkuc3RhcnRPZihcImRheVwiKSwgWSA9IChlLCB0KSA9PiB7XG4gIGUgPSB1KGUpLCB0ID0gdSh0KTtcbiAgY29uc3QgciA9IHQuZGlmZihlLCBcImRheVwiKTtcbiAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHIgKyAxIH0sIChhLCBuKSA9PiBlLmFkZChuLCBcImRheVwiKSk7XG59LCBXID0ge1xuICAvLyAxOTk5IOWFg+aXpiAxIOWkqeOAgeaYpeiKguOAgeWKs+WKqOiKguOAgeWbveW6huiKguaUvuWBhyAz5aSpXG4gIDE5OTk6IHtcbiAgICBcIk5ldyBZZWFyJ3MgRGF5LOWFg+aXplwiOiAxLFxuICAgIFwiU3ByaW5nIEZlc3RpdmFsLOaYpeiKglwiOiAzLFxuICAgIFwiTGFib3VyIERheSzlirPliqjoioJcIjogMyxcbiAgICBcIk5hdGlvbmFsIERheSzlm73luoboioJcIjogM1xuICB9LFxuICAvLyAyMDA4IOWKs+WKqOiKguaUueS4uiAxIOWkqe+8jOWinuWKoOa4heaYjuOAgeerr+WNiOOAgeS4reeni+WQhCAxIOWkqVxuICAyMDA4OiB7XG4gICAgXCJUb21iLXN3ZWVwaW5nIERheSzmuIXmmI5cIjogMSxcbiAgICBcIkxhYm91ciBEYXks5Yqz5Yqo6IqCXCI6IDEsXG4gICAgXCJEcmFnb24gQm9hdCBGZXN0aXZhbCznq6/ljYhcIjogMSxcbiAgICBcIk1pZC1hdXR1bW4gRmVzdGl2YWws5Lit56eLXCI6IDFcbiAgfSxcbiAgLy8gMjAxNCDmmKXoioLliZTpmaTpmaTlpJXvvIzmlLnkuLrliJ3kuIDjgIHkuozjgIHkuInvvIzkvp3ml6cgMyDlpKlcbiAgLy8gMjAxNSDlop7liqAg5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6UgMSDlpKlcbiAgMjAxNToge1xuICAgIFwiQW50aS1GYXNjaXN0IDcwdGggRGF5LOS4reWbveS6uuawkeaKl+aXpeaImOS6ieaaqOS4lueVjOWPjeazleilv+aWr+aImOS6ieiDnOWIqTcw5ZGo5bm057qq5b+15pelXCI6IDFcbiAgfSxcbiAgLy8gMjAyNSDmmKXoioLlkozlirPliqjoioIg5ZCE5aKe5YqgIDEg5aSpXG4gIDIwMjU6IHtcbiAgICBcIlNwcmluZyBGZXN0aXZhbCzmmKXoioJcIjogNCxcbiAgICBcIkxhYm91ciBEYXks5Yqz5Yqo6IqCXCI6IDJcbiAgfVxufTtcbmNsYXNzIHoge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjKHRoaXMsIFwiZGF5RGV0YWlsc1wiLCB7fSk7XG4gICAgYyh0aGlzLCBcImhvbGlkYXlzXCIsIHt9KTtcbiAgICBjKHRoaXMsIFwid29ya2RheXNcIiwge30pO1xuICAgIGModGhpcywgXCJpbkxpZXVEYXlzXCIsIHt9KTtcbiAgfVxuICAvKiogeWVhciBhdCAqL1xuICB5KHQpIHtcbiAgICByZXR1cm4gdGhpcy5kYXlEZXRhaWxzLnllYXIgPSB0LCB0aGlzO1xuICB9XG4gIC8qKiDmn6Xor6Lmn5DlubQg6IqC5YGH5pel5aSp5pWwICovXG4gIGdldEhvbGlkYXlEYXlzKHQsIHIpIHtcbiAgICBsZXQgYSA9IDA7XG4gICAgZm9yIChjb25zdCBbbiwgbF0gb2YgT2JqZWN0LmVudHJpZXMoVykpIHtcbiAgICAgIGlmIChwYXJzZUludChuKSA+IHQpIGJyZWFrO1xuICAgICAgbFtyXSAhPT0gdm9pZCAwICYmIChhID0gbFtyXSk7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG4gIG1hcmsodCkge1xuICAgIHJldHVybiB0aGlzLmRheURldGFpbHMuaG9saWRheSA9IHQsIHRoaXM7XG4gIH1cbiAgc2F2ZSh0LCByLCBhKSB7XG4gICAgaWYgKCF0aGlzLmRheURldGFpbHMueWVhcilcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInNob3VsZCBzZXQgeWVhciBiZWZvcmUgc2F2aW5nIGhvbGlkYXlcIik7XG4gICAgaWYgKCF0aGlzLmRheURldGFpbHMuaG9saWRheSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInNob3VsZCBzZXQgaG9saWRheSBiZWZvcmUgc2F2aW5nIGhvbGlkYXlcIik7XG4gICAgdGhpcy5kYXlEZXRhaWxzLm1vbnRoID0gdCwgdGhpcy5kYXlEZXRhaWxzLmRheSA9IHIsIHRoaXMuZGF5RGV0YWlscy5kYXlUeXBlID0gYTtcbiAgICBjb25zdCBuID0gaChgJHt0aGlzLmRheURldGFpbHMueWVhcn0tJHt0fS0ke3J9YCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSwgbCA9IHRoaXMuZ2V0SG9saWRheURheXModGhpcy5kYXlEZXRhaWxzLnllYXIsIHRoaXMuZGF5RGV0YWlscy5ob2xpZGF5KSwgbyA9IGAke3RoaXMuZGF5RGV0YWlscy5ob2xpZGF5fSwke2x9YDtcbiAgICByZXR1cm4gYSA9PT0gMiA/IHRoaXMuaG9saWRheXNbbl0gPSBvIDogYSA9PT0gMSA/IHRoaXMud29ya2RheXNbbl0gPSBvIDogYSA9PT0gMyAmJiAodGhpcy5pbkxpZXVEYXlzW25dID0gbyksIHRoaXM7XG4gIH1cbiAgdG8odCwgcikge1xuICAgIGlmICghdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkgfHwgIXRoaXMuZGF5RGV0YWlscy55ZWFyIHx8ICF0aGlzLmRheURldGFpbHMubW9udGggfHwgIXRoaXMuZGF5RGV0YWlscy5kYXkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzaG91bGQgc2V0IHllYXIvbW9udGgvZGF5IGJlZm9yZSBzYXZpbmcgaG9saWRheSByYW5nZVwiKTtcbiAgICBjb25zdCBhID0gaChcbiAgICAgIGAke3RoaXMuZGF5RGV0YWlscy55ZWFyfS0ke3RoaXMuZGF5RGV0YWlscy5tb250aH0tJHt0aGlzLmRheURldGFpbHMuZGF5fWBcbiAgICApLCBuID0gaChgJHt0aGlzLmRheURldGFpbHMueWVhcn0tJHt0fS0ke3J9YCk7XG4gICAgaWYgKG4uaXNCZWZvcmUoYSkgfHwgbi5pc1NhbWUoYSkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbmQgZGF0ZSBzaG91bGQgYmUgYWZ0ZXIgc3RhcnQgZGF0ZVwiKTtcbiAgICBjb25zdCBsID0gdGhpcy5nZXRIb2xpZGF5RGF5cyh0aGlzLmRheURldGFpbHMueWVhciwgdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkpLCBvID0gYCR7dGhpcy5kYXlEZXRhaWxzLmhvbGlkYXl9LCR7bH1gLCBpID0gbi5kaWZmKGEsIFwiZGF5XCIpO1xuICAgIGZvciAobGV0IHMgPSAxOyBzIDw9IGk7IHMrKykge1xuICAgICAgY29uc3QgXyA9IGEuYWRkKHMsIFwiZGF5XCIpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgICB0aGlzLmRheURldGFpbHMuZGF5VHlwZSA9PT0gMiA/IHRoaXMuaG9saWRheXNbX10gPSBvIDogdGhpcy5kYXlEZXRhaWxzLmRheVR5cGUgPT09IDEgPyB0aGlzLndvcmtkYXlzW19dID0gbyA6IHRoaXMuZGF5RGV0YWlscy5kYXlUeXBlID09PSAzICYmICh0aGlzLmluTGlldURheXNbX10gPSBvKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqIHdvcmsgZGF5ICovXG4gIHcodCwgcikge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgcixcbiAgICAgIDFcbiAgICAgIC8qIFdvcmtkYXkgKi9cbiAgICApO1xuICB9XG4gIC8qKiByZXN0ICovXG4gIHIodCwgcikge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgcixcbiAgICAgIDJcbiAgICAgIC8qIEhvbGlkYXkgKi9cbiAgICApO1xuICB9XG4gIC8qKiBpbi1saWV1ICovXG4gIGkodCwgcikge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgcixcbiAgICAgIDNcbiAgICAgIC8qIEluTGlldSAqL1xuICAgICk7XG4gIH1cbiAgLyoqIE5ldyBZZWFyJ3MgRGF5IOWFg+aXpiAqL1xuICBueSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJOZXcgWWVhcidzIERheSzlhYPml6ZcIlxuICAgICAgLyogTlkgKi9cbiAgICApO1xuICB9XG4gIC8qKiBTcHJpbmcgRmVzdGl2YWwg5pil6IqCICovXG4gIHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiU3ByaW5nIEZlc3RpdmFsLOaYpeiKglwiXG4gICAgICAvKiBTICovXG4gICAgKTtcbiAgfVxuICAvKiogVG9tYi1zd2VlcGluZyBEYXkg5riF5piOICovXG4gIHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiVG9tYi1zd2VlcGluZyBEYXks5riF5piOXCJcbiAgICAgIC8qIFQgKi9cbiAgICApO1xuICB9XG4gIC8qKiBMYWJvdXIgRGF5IOS6lOS4gCAqL1xuICBsKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIkxhYm91ciBEYXks5Yqz5Yqo6IqCXCJcbiAgICAgIC8qIEwgKi9cbiAgICApO1xuICB9XG4gIC8qKiBEcmFnb24gQm9hdCBGZXN0aXZhbCDnq6/ljYggKi9cbiAgZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJEcmFnb24gQm9hdCBGZXN0aXZhbCznq6/ljYhcIlxuICAgICAgLyogRCAqL1xuICAgICk7XG4gIH1cbiAgLyoqIE5hdGlvbmFsIERheSDlm73luoboioIgKi9cbiAgbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJOYXRpb25hbCBEYXks5Zu95bqG6IqCXCJcbiAgICAgIC8qIE4gKi9cbiAgICApO1xuICB9XG4gIC8qKiBNaWQtYXV0dW1uIEZlc3RpdmFsIOS4reeniyAqL1xuICBtKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIk1pZC1hdXR1bW4gRmVzdGl2YWws5Lit56eLXCJcbiAgICAgIC8qIE0gKi9cbiAgICApO1xuICB9XG4gIC8qKiBBbnRpLUZhc2Npc3QgNzB0aCBEYXkg5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6UgKi9cbiAgYSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJBbnRpLUZhc2Npc3QgNzB0aCBEYXks5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6VcIlxuICAgICAgLyogQSAqL1xuICAgICk7XG4gIH1cbn1cbmNvbnN0IFYgPSAoKSA9PiB7XG4gIGNvbnN0IGUgPSBuZXcgeigpO1xuICByZXR1cm4gZS55KDIwMjUpLm55KCkucigxLCAxKS5zKCkucigxLCAyOCkudG8oMiwgNCkudygxLCAyNikudygyLCA4KS5pKDIsIDMpLmkoMiwgNCkudCgpLnIoNCwgNCkudG8oNCwgNikubCgpLnIoNSwgMSkudG8oNSwgNSkudyg0LCAyNykuaSg1LCA1KS5kKCkucig1LCAzMSkudG8oNiwgMikubigpLnIoMTAsIDEpLnRvKDEwLCA4KS53KDksIDI4KS53KDEwLCAxMSkuaSgxMCwgNykuaSgxMCwgOCkubSgpLnIoMTAsIDYpLCBlLnkoMjAyNCkubnkoKS5yKDEsIDEpLnMoKS5yKDIsIDEwKS50bygyLCAxNykudygyLCA0KS53KDIsIDE4KS5pKDIsIDE1KS50bygyLCAxNikudCgpLnIoNCwgNCkudG8oNCwgNikudyg0LCA3KS5pKDQsIDUpLmwoKS5yKDUsIDEpLnRvKDUsIDUpLncoNCwgMjgpLncoNSwgMTEpLmkoNSwgMikudG8oNSwgMykuZCgpLnIoNiwgMTApLm0oKS5yKDksIDE1KS50byg5LCAxNykudyg5LCAxNCkuaSg5LCAxNikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIGUueSgyMDIzKS5ueSgpLnIoMSwgMSkudG8oMSwgMikucygpLnIoMSwgMjEpLnRvKDEsIDI3KS53KDEsIDI4KS50bygxLCAyOSkuaSgxLCAyNikudG8oMSwgMjcpLnQoKS5yKDQsIDUpLmwoKS5yKDQsIDI5KS50byg1LCAzKS53KDQsIDIzKS53KDUsIDYpLmkoNSwgMikudG8oNSwgMykuZCgpLnIoNiwgMjIpLnRvKDYsIDI0KS53KDYsIDI1KS5pKDYsIDIzKS5tKCkucig5LCAyOSkubigpLnIoOSwgMzApLnRvKDEwLCA2KS53KDEwLCA3KS50bygxMCwgOCkuaSgxMCwgNSkudG8oMTAsIDYpLCBlLnkoMjAyMikubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDEsIDMxKS50bygyLCA2KS53KDEsIDI5KS53KDEsIDMwKS5pKDIsIDMpLnRvKDIsIDQpLnQoKS5yKDQsIDMpLnRvKDQsIDUpLncoNCwgMikuaSg0LCA0KS5sKCkucig0LCAzMCkudG8oNSwgNCkudyg0LCAyNCkudyg1LCA3KS5pKDUsIDMpLnRvKDUsIDQpLmQoKS5yKDYsIDMpLnRvKDYsIDUpLm0oKS5yKDksIDEwKS50byg5LCAxMikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA4KS53KDEwLCA5KS5pKDEwLCA2KS50bygxMCwgNykubnkoKS5yKDEyLCAzMSksIGUueSgyMDIxKS5ueSgpLnIoMSwgMSkudG8oMSwgMykucygpLnIoMiwgMTEpLnRvKDIsIDE3KS53KDIsIDcpLncoMiwgMjApLmkoMiwgMTYpLnRvKDIsIDE3KS50KCkucig0LCAzKS50byg0LCA1KS5sKCkucig1LCAxKS50byg1LCA1KS53KDQsIDI1KS53KDUsIDgpLmkoNSwgNCkudG8oNSwgNSkuZCgpLnIoNiwgMTIpLnRvKDYsIDE0KS5tKCkucig5LCAxOSkudG8oOSwgMjEpLncoOSwgMTgpLmkoOSwgMjApLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyNikudygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCBlLnkoMjAyMCkubnkoKS5yKDEsIDEpLnMoKS5yKDEsIDI0KS50bygyLCAyKS53KDEsIDE5KS5pKDEsIDI5KS50KCkucig0LCA0KS50byg0LCA2KS5sKCkucig1LCAxKS50byg1LCA1KS53KDQsIDI2KS53KDUsIDkpLmkoNSwgNCkudG8oNSwgNSkuZCgpLnIoNiwgMjUpLnRvKDYsIDI3KS53KDYsIDI4KS5pKDYsIDI2KS5uKCkucigxMCwgMSkudG8oMTAsIDgpLncoOSwgMjcpLncoMTAsIDEwKS5pKDEwLCA3KS50bygxMCwgOCksIGUueSgyMDE5KS5ueSgpLnIoMSwgMSkucygpLnIoMiwgNCkudG8oMiwgMTApLncoMiwgMikudG8oMiwgMykuaSgyLCA0KS5pKDIsIDgpLnQoKS5yKDQsIDUpLnRvKDQsIDcpLmwoKS5yKDUsIDEpLnRvKDUsIDQpLncoNCwgMjgpLncoNSwgNSkuaSg1LCAyKS5pKDUsIDMpLmQoKS5yKDYsIDcpLnRvKDYsIDkpLm0oKS5yKDksIDEzKS50byg5LCAxNSkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIGUueSgyMDE4KS5ueSgpLnIoMSwgMSkucygpLnIoMiwgMTUpLnRvKDIsIDIxKS53KDIsIDExKS53KDIsIDI0KS5pKDIsIDE5KS50bygyLCAyMSkudCgpLnIoNCwgNSkudG8oNCwgNykudyg0LCA4KS5pKDQsIDYpLmwoKS5yKDQsIDI5KS50byg1LCAxKS53KDQsIDI4KS5pKDQsIDMwKS5kKCkucig2LCAxOCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS50byg5LCAzMCkuaSgxMCwgNCkudG8oMTAsIDUpLm0oKS5yKDksIDI0KS5ueSgpLnIoMTIsIDMwKS50bygxMiwgMzEpLncoMTIsIDI5KS5pKDEyLCAzMSksIGUueSgyMDE3KS5ueSgpLnIoMSwgMSkudG8oMSwgMikucygpLnIoMSwgMjcpLnRvKDIsIDIpLncoMSwgMjIpLncoMiwgNCkuaSgyLCAxKS50bygyLCAyKS50KCkucig0LCAyKS50byg0LCA0KS53KDQsIDEpLmkoNCwgMykubCgpLnIoNSwgMSkuZCgpLnIoNSwgMjgpLnRvKDUsIDMwKS53KDUsIDI3KS5pKDUsIDI5KS5uKCkucigxMCwgMSkudG8oMTAsIDgpLncoOSwgMzApLmkoMTAsIDYpLm0oKS5yKDEwLCA0KSwgZS55KDIwMTYpLm55KCkucigxLCAxKS5zKCkucigyLCA3KS50bygyLCAxMykudygyLCA2KS53KDIsIDE0KS5pKDIsIDExKS50bygyLCAxMikudCgpLnIoNCwgNCkubCgpLnIoNSwgMSkudG8oNSwgMikuZCgpLnIoNiwgOSkudG8oNiwgMTEpLncoNiwgMTIpLmkoNiwgMTApLm0oKS5yKDksIDE1KS50byg5LCAxNykudyg5LCAxOCkuaSg5LCAxNikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA4KS50bygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCBlLnkoMjAxNSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLncoMSwgNCkuaSgxLCAyKS5zKCkucigyLCAxOCkudG8oMiwgMjQpLncoMiwgMTUpLncoMiwgMjgpLmkoMiwgMjMpLnRvKDIsIDI0KS50KCkucig0LCA1KS50byg0LCA2KS5sKCkucig1LCAxKS5kKCkucig2LCAyMCkucig2LCAyMikubSgpLnIoOSwgMjcpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgMTApLmkoMTAsIDcpLmEoKS5yKDksIDMpLnRvKDksIDQpLncoOSwgNikuaSg5LCA0KSwgZS55KDIwMTQpLm55KCkucigxLCAxKS5zKCkucigxLCAzMSkudG8oMiwgNikudygxLCAyNikudygyLCA4KS5pKDIsIDUpLnRvKDIsIDYpLnQoKS5yKDQsIDUpLnRvKDQsIDcpLmwoKS5yKDUsIDEpLnRvKDUsIDMpLncoNSwgNCkuaSg1LCAyKS5kKCkucig2LCAyKS5tKCkucig5LCA4KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjgpLncoMTAsIDExKS5pKDEwLCA2KS50bygxMCwgNyksIGUueSgyMDEzKS5ueSgpLnIoMSwgMSkudG8oMSwgMykudygxLCA1KS50bygxLCA2KS5pKDEsIDIpLnRvKDEsIDMpLnMoKS5yKDIsIDkpLnRvKDIsIDE1KS53KDIsIDE2KS50bygyLCAxNykuaSgyLCAxNCkudG8oMiwgMTUpLnQoKS5yKDQsIDQpLnRvKDQsIDYpLncoNCwgNykuaSg0LCA1KS5sKCkucig0LCAyOSkudG8oNSwgMSkudyg0LCAyNykudG8oNCwgMjgpLmkoNCwgMjkpLnRvKDQsIDMwKS5kKCkucig2LCAxMCkudG8oNiwgMTIpLncoNiwgOCkudG8oNiwgOSkuaSg2LCAxMCkudG8oNiwgMTEpLm0oKS5yKDksIDE5KS50byg5LCAyMSkudyg5LCAyMikuaSg5LCAyMCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIGUueSgyMDEyKS5ueSgpLnIoMSwgMSkudG8oMSwgMykuaSgxLCAzKS5zKCkucigxLCAyMikudG8oMSwgMjgpLncoMSwgMjEpLncoMSwgMjkpLmkoMSwgMjYpLnRvKDEsIDI3KS50KCkucig0LCAyKS50byg0LCA0KS53KDMsIDMxKS53KDQsIDEpLmkoNCwgMikudG8oNCwgMykubCgpLnIoNCwgMjkpLnRvKDUsIDEpLncoNCwgMjgpLmkoNCwgMzApLmQoKS5yKDYsIDIyKS5yKDYsIDI0KS5tKCkucig5LCAzMCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS5pKDEwLCA1KSwgZS55KDIwMTEpLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCAyKS50bygyLCA4KS53KDEsIDMwKS53KDIsIDEyKS5pKDIsIDcpLnRvKDIsIDgpLnQoKS5yKDQsIDMpLnRvKDQsIDUpLncoNCwgMikuaSg0LCA0KS5sKCkucig0LCAzMCkudG8oNSwgMikuZCgpLnIoNiwgNCkucig2LCA2KS5tKCkucig5LCAxMCkudG8oOSwgMTIpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOCkudG8oMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KS5ueSgpLncoMTIsIDMxKSwgZS55KDIwMTApLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCAxMykudG8oMiwgMTkpLncoMiwgMjApLnRvKDIsIDIxKS5pKDIsIDE4KS50bygyLCAxOSkudCgpLnIoNCwgMykudG8oNCwgNSkubCgpLnIoNSwgMSkudG8oNSwgMykuZCgpLnIoNiwgMTQpLnRvKDYsIDE2KS53KDYsIDEyKS50byg2LCAxMykuaSg2LCAxNCkudG8oNiwgMTUpLm0oKS5yKDksIDIyKS50byg5LCAyNCkudyg5LCAxOSkudyg5LCAyNSkuaSg5LCAyMykudG8oOSwgMjQpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyNikudygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCBlLnkoMjAwOSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLncoMSwgNCkuaSgxLCAyKS5zKCkucigxLCAyNSkudG8oMSwgMzEpLncoMSwgMjQpLncoMiwgMSkuaSgxLCAyOSkudG8oMSwgMzApLnQoKS5yKDQsIDQpLnRvKDQsIDYpLmwoKS5yKDUsIDEpLnRvKDUsIDMpLmQoKS5yKDUsIDI4KS50byg1LCAzMCkudyg1LCAzMSkuaSg1LCAyOSkubigpLnIoMTAsIDEpLnRvKDEwLCA4KS53KDksIDI3KS53KDEwLCAxMCkuaSgxMCwgNykudG8oMTAsIDgpLm0oKS5yKDEwLCAzKSwgZS55KDIwMDgpLm55KCkucigxLCAxKS5zKCkucigyLCA2KS50bygyLCAxMikudygyLCAyKS50bygyLCAzKS5pKDIsIDExKS50bygyLCAxMikudCgpLnIoNCwgNCkudG8oNCwgNikubCgpLnIoNSwgMSkudG8oNSwgMykudyg1LCA0KS5pKDUsIDIpLmQoKS5yKDYsIDcpLnRvKDYsIDkpLm0oKS5yKDksIDEzKS50byg5LCAxNSkubigpLnIoOSwgMjkpLnRvKDEwLCA1KS53KDksIDI3KS50byg5LCAyOCkuaSg5LCAyOSkudG8oOSwgMzApLCBlLnkoMjAwNykubnkoKS5yKDEsIDEpLnRvKDEsIDMpLmkoMSwgMikudG8oMSwgMykucygpLnIoMiwgMTgpLnRvKDIsIDI0KS53KDIsIDE3KS53KDIsIDI1KS5pKDIsIDIyKS50bygyLCAyMykubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAyOCkudG8oNCwgMjkpLmkoNSwgNCkuaSg1LCA3KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjkpLnRvKDksIDMwKS5pKDEwLCA0KS50bygxMCwgNSkubnkoKS5yKDEyLCAzMCkudG8oMTIsIDMxKS53KDEyLCAyOSkuaSgxMiwgMzEpLCBlLnkoMjAwNikubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDEsIDI5KS50bygyLCA0KS53KDEsIDI4KS53KDIsIDUpLmkoMiwgMikudG8oMiwgMykubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAyOSkudG8oNCwgMzApLmkoNSwgNCkudG8oNSwgNSkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDMwKS53KDEwLCA4KS5pKDEwLCA1KS50bygxMCwgNikubnkoKS53KDEyLCAzMCkudG8oMTIsIDMxKSwgZS55KDIwMDUpLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCA5KS50bygyLCAxNSkudygyLCA1KS50bygyLCA2KS5pKDIsIDE0KS50bygyLCAxNSkubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAzMCkudyg1LCA4KS5pKDUsIDUpLnRvKDUsIDYpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOCkudG8oMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KSwgZS55KDIwMDQpLm55KCkucigxLCAxKS5zKCkucigxLCAyMikudG8oMSwgMjgpLncoMSwgMTcpLnRvKDEsIDE4KS5pKDEsIDI3KS50bygxLCAyOCkubCgpLnIoNSwgMSkudG8oNSwgNykudyg1LCA4KS50byg1LCA5KS5pKDUsIDYpLnRvKDUsIDcpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOSkudG8oMTAsIDEwKS5pKDEwLCA2KS50bygxMCwgNyksIHtcbiAgICBob2xpZGF5czogZS5ob2xpZGF5cyxcbiAgICB3b3JrZGF5czogZS53b3JrZGF5cyxcbiAgICBpbkxpZXVEYXlzOiBlLmluTGlldURheXNcbiAgfTtcbn0sIHsgaG9saWRheXM6IE0sIHdvcmtkYXlzOiBrLCBpbkxpZXVEYXlzOiBaIH0gPSBWKCksIHcgPSAoLi4uZSkgPT4ge1xuICBpZiAoZS5sZW5ndGggIT09IDEpXG4gICAgcmV0dXJuIGUubWFwKChyKSA9PiB3KHIpKTtcbiAgY29uc3QgdCA9IHUoZVswXSk7XG4gIGlmICghdC5pc1ZhbGlkKCkpXG4gICAgdGhyb3cgbmV3IEVycm9yKGB1bnN1cHBvcnRlZCB0eXBlICR7dHlwZW9mIHR9LCBleHBlY3RlZCB0eXBlIGlzIERhdGUgb3IgRGF5anNgKTtcbiAgcmV0dXJuIHQ7XG59LCBPID0gKGUpID0+ICFmKGUpLCBmID0gKGUpID0+IHtcbiAgY29uc3QgdCA9IHcoZSksIHIgPSB0LmRheSgpLCBhID0gdC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICByZXR1cm4gISEoa1thXSB8fCByID49IDEgJiYgciA8PSA1ICYmICFNW2FdKTtcbn0sIEcgPSAoZSkgPT4gKGUgPSB3KGUpLCAhIVpbZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXSksIEogPSAoZSkgPT4ge1xuICBlID0gdyhlKTtcbiAgY29uc3QgdCA9IGUuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgaWYgKGtbdF0pXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IHQsXG4gICAgICB3b3JrOiAhMCxcbiAgICAgIG5hbWU6IGtbdF1cbiAgICB9O1xuICBpZiAoTVt0XSlcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogdCxcbiAgICAgIHdvcms6ICExLFxuICAgICAgbmFtZTogTVt0XVxuICAgIH07XG4gIHtcbiAgICBjb25zdCByID0gZS5kYXkoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogdCxcbiAgICAgIHdvcms6IHIgIT09IDAgJiYgciAhPT0gNixcbiAgICAgIG5hbWU6IGUuZm9ybWF0KFwiZGRkZFwiKVxuICAgIH07XG4gIH1cbn0sIEsgPSAoZSwgdCwgciA9ICEwKSA9PiAoZSA9IHcoZSksIHQgPSB3KHQpLCByID8gWShlLCB0KS5maWx0ZXIoTykubWFwKChhKSA9PiBhLmZvcm1hdChcIllZWVktTU0tRERcIikpIDogWShlLCB0KS5maWx0ZXIoKGEpID0+IE1bYS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXSkubWFwKChhKSA9PiBhLmZvcm1hdChcIllZWVktTU0tRERcIikpKSwgUSA9IChlLCB0LCByID0gITApID0+IChlID0gdyhlKSwgdCA9IHcodCksIHIgPyBZKGUsIHQpLmZpbHRlcihmKS5tYXAoKGEpID0+IGEuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSkgOiBZKGUsIHQpLmZpbHRlcigoYSkgPT4gZihhKSAmJiBhLmRheSgpID49IDEgJiYgYS5kYXkoKSA8PSA1KS5tYXAoKGEpID0+IGEuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSkpLCBYID0gKGUgPSAwLCB0ID0gaCgpKSA9PiB7XG4gIGlmICh0ID0gdSh0KSwgZSA9PT0gMCkge1xuICAgIGlmIChmKHQpKVxuICAgICAgcmV0dXJuIHQuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICBlID0gMTtcbiAgfVxuICBjb25zdCByID0gZSA+IDAgPyAxIDogLTE7XG4gIGxldCBhID0gTWF0aC5hYnMoZSk7XG4gIGZvciAoOyBhID4gMDsgKVxuICAgIHQgPSB0LmFkZChyLCBcImRheVwiKSwgZih0KSAmJiBhLS07XG4gIHJldHVybiB0LmZvcm1hdChcIllZWVktTU0tRERcIik7XG59LCB0dCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGZpbmRXb3JrZGF5OiBYLFxuICBnZXREYXlEZXRhaWw6IEosXG4gIGdldEhvbGlkYXlzSW5SYW5nZTogSyxcbiAgZ2V0V29ya2RheXNJblJhbmdlOiBRLFxuICBpc0hvbGlkYXk6IE8sXG4gIGlzSW5MaWV1OiBHLFxuICBpc1dvcmtkYXk6IGZcbn0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSksIGV0ID0ge1xuICB0aGVfYmVnaW5uaW5nX29mX3NwcmluZzogWzQuNjI5NSwgMy44N10sXG4gIHJhaW5fd2F0ZXI6IFsxOS40NTk5LCAxOC43M10sXG4gIHRoZV93YWtpbmdfb2ZfaW5zZWN0czogWzYuMzkyNiwgNS42M10sXG4gIHRoZV9zcHJpbmdfZXF1aW5veDogWzIxLjQxNTUsIDIwLjY0Nl0sXG4gIHB1cmVfYnJpZ2h0bmVzczogWzUuNTksIDQuODFdLFxuICBncmFpbl9yYWluOiBbMjAuODg4LCAyMC4xXSxcbiAgdGhlX2JlZ2lubmluZ19vZl9zdW1tZXI6IFs2LjMxOCwgNS41Ml0sXG4gIGxlc3Nlcl9mdWxsbmVzc19vZl9ncmFpbjogWzIxLjg2LCAyMS4wNF0sXG4gIGdyYWluX2luX2JlYXJkOiBbNi41LCA1LjY3OF0sXG4gIHRoZV9zdW1tZXJfc29sc3RpY2U6IFsyMi4yLCAyMS4zN10sXG4gIGxlc3Nlcl9oZWF0OiBbNy45MjgsIDcuMTA4XSxcbiAgZ3JlYXRlcl9oZWF0OiBbMjMuNjUsIDIyLjgzXSxcbiAgdGhlX2JlZ2lubmluZ19vZl9hdXR1bW46IFsyOC4zNSwgNy41XSxcbiAgdGhlX2VuZF9vZl9oZWF0OiBbMjMuOTUsIDIzLjEzXSxcbiAgd2hpdGVfZGV3OiBbOC40NCwgNy42NDZdLFxuICB0aGVfYXV0dW1uX2VxdWlub3g6IFsyMy44MjIsIDIzLjA0Ml0sXG4gIGNvZGVfZGV3OiBbOS4wOTgsIDguMzE4XSxcbiAgZnJvc3RfZGVzY2VudDogWzI0LjIxOCwgMjMuNDM4XSxcbiAgdGhlX2JlZ2lubmluZ19vZl93aW50ZXI6IFs4LjIxOCwgNy40MzhdLFxuICBsZXNzZXJfc25vdzogWzIzLjA4LCAyMi4zNl0sXG4gIGdyZWF0ZXJfc25vdzogWzcuOSwgNy4xOF0sXG4gIHRoZV93aW50ZXJfc29sc3RpY2U6IFsyMi42LCAyMS45NF0sXG4gIGxlc3Nlcl9jb2xkOiBbNi4xMSwgNS40MDU1XSxcbiAgZ3JlYXRlcl9jb2xkOiBbMjAuODQsIDIwLjEyXVxufSwgVCA9IHtcbiAgMTogW1wibGVzc2VyX2NvbGRcIiwgXCJncmVhdGVyX2NvbGRcIl0sXG4gIDI6IFtcInRoZV9iZWdpbm5pbmdfb2Zfc3ByaW5nXCIsIFwicmFpbl93YXRlclwiXSxcbiAgMzogW1widGhlX3dha2luZ19vZl9pbnNlY3RzXCIsIFwidGhlX3NwcmluZ19lcXVpbm94XCJdLFxuICA0OiBbXCJwdXJlX2JyaWdodG5lc3NcIiwgXCJncmFpbl9yYWluXCJdLFxuICA1OiBbXCJ0aGVfYmVnaW5uaW5nX29mX3N1bW1lclwiLCBcImxlc3Nlcl9mdWxsbmVzc19vZl9ncmFpblwiXSxcbiAgNjogW1wiZ3JhaW5faW5fYmVhcmRcIiwgXCJ0aGVfc3VtbWVyX3NvbHN0aWNlXCJdLFxuICA3OiBbXCJsZXNzZXJfaGVhdFwiLCBcImdyZWF0ZXJfaGVhdFwiXSxcbiAgODogW1widGhlX2JlZ2lubmluZ19vZl9hdXR1bW5cIiwgXCJ0aGVfZW5kX29mX2hlYXRcIl0sXG4gIDk6IFtcIndoaXRlX2Rld1wiLCBcInRoZV9hdXR1bW5fZXF1aW5veFwiXSxcbiAgMTA6IFtcImNvZGVfZGV3XCIsIFwiZnJvc3RfZGVzY2VudFwiXSxcbiAgMTE6IFtcInRoZV9iZWdpbm5pbmdfb2Zfd2ludGVyXCIsIFwibGVzc2VyX3Nub3dcIl0sXG4gIDEyOiBbXCJncmVhdGVyX3Nub3dcIiwgXCJ0aGVfd2ludGVyX3NvbHN0aWNlXCJdXG59LCBydCA9IHtcbiAgXCIyMDI2X3JhaW5fd2F0ZXJcIjogLTEsXG4gIFwiMjA4NF90aGVfc3ByaW5nX2VxdWlub3hcIjogMSxcbiAgXCIxOTExX3RoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyXCI6IDEsXG4gIFwiMjAwOF9sZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW5cIjogMSxcbiAgXCIxOTAyX2dyYWluX2luX2JlYXJkXCI6IDEsXG4gIFwiMTkyOF90aGVfc3VtbWVyX3NvbHN0aWNlXCI6IDEsXG4gIFwiMTkyNV9sZXNzZXJfaGVhdFwiOiAxLFxuICBcIjIwMTZfbGVzc2VyX2hlYXRcIjogMSxcbiAgXCIxOTIyX2dyZWF0ZXJfaGVhdFwiOiAxLFxuICBcIjIwMDJfdGhlX2JlZ2lubmluZ19vZl9hdXR1bW5cIjogMSxcbiAgXCIxOTI3X3doaXRlX2Rld1wiOiAxLFxuICBcIjE5NDJfdGhlX2F1dHVtbl9lcXVpbm94XCI6IDEsXG4gIFwiMjA4OV9mcm9zdF9kZXNjZW50XCI6IDEsXG4gIFwiMjA4OV90aGVfYmVnaW5uaW5nX29mX3dpbnRlclwiOiAxLFxuICBcIjE5NzhfbGVzc2VyX3Nub3dcIjogMSxcbiAgXCIxOTU0X2dyZWF0ZXJfc25vd1wiOiAxLFxuICBcIjE5MThfdGhlX3dpbnRlcl9zb2xzdGljZVwiOiAtMSxcbiAgXCIyMDIxX3RoZV93aW50ZXJfc29sc3RpY2VcIjogLTEsXG4gIFwiMTk4Ml9sZXNzZXJfY29sZFwiOiAxLFxuICBcIjIwMTlfbGVzc2VyX2NvbGRcIjogLTEsXG4gIFwiMjAwMF9ncmVhdGVyX2NvbGRcIjogMSxcbiAgXCIyMDgyX2dyZWF0ZXJfY29sZFwiOiAxXG59LCBFID0ge1xuICBsZXNzZXJfY29sZDogXCLlsI/lr5JcIixcbiAgZ3JlYXRlcl9jb2xkOiBcIuWkp+WvklwiLFxuICB0aGVfYmVnaW5uaW5nX29mX3NwcmluZzogXCLnq4vmmKVcIixcbiAgcmFpbl93YXRlcjogXCLpm6jmsLRcIixcbiAgdGhlX3dha2luZ19vZl9pbnNlY3RzOiBcIuaDiuibsFwiLFxuICB0aGVfc3ByaW5nX2VxdWlub3g6IFwi5pil5YiGXCIsXG4gIHB1cmVfYnJpZ2h0bmVzczogXCLmuIXmmI5cIixcbiAgZ3JhaW5fcmFpbjogXCLosLfpm6hcIixcbiAgdGhlX2JlZ2lubmluZ19vZl9zdW1tZXI6IFwi56uL5aSPXCIsXG4gIGxlc3Nlcl9mdWxsbmVzc19vZl9ncmFpbjogXCLlsI/mu6FcIixcbiAgZ3JhaW5faW5fYmVhcmQ6IFwi6IqS56eNXCIsXG4gIHRoZV9zdW1tZXJfc29sc3RpY2U6IFwi5aSP6IezXCIsXG4gIGxlc3Nlcl9oZWF0OiBcIuWwj+aakVwiLFxuICBncmVhdGVyX2hlYXQ6IFwi5aSn5pqRXCIsXG4gIHRoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uOiBcIueri+eni1wiLFxuICB0aGVfZW5kX29mX2hlYXQ6IFwi5aSE5pqRXCIsXG4gIHdoaXRlX2RldzogXCLnmb3pnLJcIixcbiAgdGhlX2F1dHVtbl9lcXVpbm94OiBcIueni+WIhlwiLFxuICBjb2RlX2RldzogXCLlr5LpnLJcIixcbiAgZnJvc3RfZGVzY2VudDogXCLpnJzpmY1cIixcbiAgdGhlX2JlZ2lubmluZ19vZl93aW50ZXI6IFwi56uL5YasXCIsXG4gIGxlc3Nlcl9zbm93OiBcIuWwj+mbqlwiLFxuICBncmVhdGVyX3Nub3c6IFwi5aSn6ZuqXCIsXG4gIHRoZV93aW50ZXJfc29sc3RpY2U6IFwi5Yas6IezXCJcbn0sIEwgPSAoZSwgdCwgcikgPT4ge1xuICBjb25zdCBhID0gZSA+PSAyZTMgPyAyMSA6IDIwLCBuID0gZSAlIDEwMCwgbCA9IDAuMjQyMiwgbyA9IGV0W3JdW2EgPT09IDIxID8gMSA6IDBdO1xuICBsZXQgaSA9IE1hdGguZmxvb3IobiAvIDQpO1xuICBbXG4gICAgXCJsZXNzZXJfY29sZFwiLFxuICAgIFwiZ3JlYXRlcl9jb2xkXCIsXG4gICAgXCJ0aGVfYmVnaW5uaW5nX29mX3NwcmluZ1wiLFxuICAgIFwicmFpbl93YXRlclwiXG4gIF0uaW5jbHVkZXMocikgJiYgKGkgPSBNYXRoLmZsb29yKChuIC0gMSkgLyA0KSk7XG4gIGxldCBzID0gTWF0aC5mbG9vcihuICogbCArIG8pIC0gaTtcbiAgY29uc3QgXyA9IHJ0W2Ake2V9XyR7cn1gXTtcbiAgcmV0dXJuIF8gJiYgKHMgKz0gXyksIGgoYCR7ZX0tJHt0fS0ke3N9YCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbn0sIGF0ID0gKGUsIHQpID0+IHtcbiAgY29uc3QgciA9IFtdO1xuICBsZXQgYSA9IHUoZSk7XG4gIGNvbnN0IG4gPSB1KHQgfHwgZSk7XG4gIGZvciAoOyBhLmlzQmVmb3JlKG4pIHx8IGEuaXNTYW1lKG4pOyApIHtcbiAgICBjb25zdCBsID0gYS55ZWFyKCksIG8gPSBhLm1vbnRoKCkgKyAxO1xuICAgIFRbb10uZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgY29uc3QgcyA9IGgoTChsLCBvLCBpKSk7XG4gICAgICAocyAhPSBudWxsICYmIHMuaXNCZWZvcmUobikgfHwgcyAhPSBudWxsICYmIHMuaXNTYW1lKG4pKSAmJiAocyAhPSBudWxsICYmIHMuaXNBZnRlcihhKSB8fCBzICE9IG51bGwgJiYgcy5pc1NhbWUoYSkpICYmIHIucHVzaCh7XG4gICAgICAgIGRhdGU6IHMuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgICAgdGVybTogaSxcbiAgICAgICAgbmFtZTogRVtpXSxcbiAgICAgICAgaW5kZXg6IDFcbiAgICAgIH0pO1xuICAgIH0pLCBvID09PSAxMiA/IGEgPSBhLmFkZCgxLCBcInllYXJcIikuc3RhcnRPZihcInllYXJcIikgOiBhID0gYS5hZGQoMSwgXCJtb250aFwiKS5zdGFydE9mKFwibW9udGhcIik7XG4gIH1cbiAgcmV0dXJuIHI7XG59LCAkID0gKGUsIHQpID0+IHtcbiAgbGV0IHIgPSB1KGUpLnN1YnRyYWN0KDEsIFwibW9udGhcIik7XG4gIGNvbnN0IGEgPSB1KHQgfHwgZSkuYWRkKDEsIFwibW9udGhcIiksIG4gPSBbXTtcbiAgZm9yICg7IHIuaXNCZWZvcmUoYSkgfHwgci5pc1NhbWUoYSk7ICkge1xuICAgIGNvbnN0IG8gPSByLnllYXIoKSwgaSA9IHIubW9udGgoKSArIDE7XG4gICAgVFtpXS5mb3JFYWNoKChzKSA9PiB7XG4gICAgICBjb25zdCBfID0gaChMKG8sIGksIHMpKTtcbiAgICAgIG4ucHVzaCh7IHRlcm06IHMsIGRhdGU6IF8gfSk7XG4gICAgfSksIHIubW9udGgoKSA9PT0gMTEgPyByID0gci5hZGQoMSwgXCJ5ZWFyXCIpLnN0YXJ0T2YoXCJ5ZWFyXCIpIDogciA9IHIuYWRkKDEsIFwibW9udGhcIikuc3RhcnRPZihcIm1vbnRoXCIpO1xuICB9XG4gIGNvbnN0IGwgPSBbXTtcbiAgcmV0dXJuIG4uZm9yRWFjaCgobywgaSkgPT4ge1xuICAgIGZvciAobGV0IHMgPSBvLmRhdGU7IG5baSArIDFdICYmIHMuaXNCZWZvcmUobltpICsgMV0uZGF0ZSk7IHMgPSBzLmFkZCgxLCBcImRheVwiKSlcbiAgICAgIGwucHVzaCh7IGRheTogcywgdGVybTogby50ZXJtLCBuYW1lOiBFW28udGVybV0sIGluZGV4OiBzLmRpZmYoby5kYXRlLCBcImRheVwiKSArIDEgfSk7XG4gIH0pLCB0IHx8ICh0ID0gZSksIGwuZmlsdGVyKChvKSA9PiBvLmRheS5pc0JldHdlZW4oZSwgdCwgXCJkYXlcIikpLm1hcCgobykgPT4gKHtcbiAgICBkYXRlOiBvLmRheS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgIHRlcm06IG8udGVybSxcbiAgICBuYW1lOiBvLm5hbWUsXG4gICAgaW5kZXg6IG8uaW5kZXhcbiAgfSkpO1xufSwgb3QgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBnZXRTb2xhclRlcm1EYXRlOiBMLFxuICBnZXRTb2xhclRlcm1zOiBhdCxcbiAgZ2V0U29sYXJUZXJtc0luUmFuZ2U6ICRcbn0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSksIGcgPSBbXG4gIDE5NDE2LFxuICAxOTE2OCxcbiAgNDIzNTIsXG4gIDIxNzE3LFxuICA1Mzg1NixcbiAgNTU2MzIsXG4gIDkxNDc2LFxuICAyMjE3NixcbiAgMzk2MzIsXG4gIDIxOTcwLFxuICAvLzE5MDAtMTkwOVxuICAxOTE2OCxcbiAgNDI0MjIsXG4gIDQyMTkyLFxuICA1Mzg0MCxcbiAgMTE5MzgxLFxuICA0NjQwMCxcbiAgNTQ5NDQsXG4gIDQ0NDUwLFxuICAzODMyMCxcbiAgODQzNDMsXG4gIC8vMTkxMC0xOTE5XG4gIDE4ODAwLFxuICA0MjE2MCxcbiAgNDYyNjEsXG4gIDI3MjE2LFxuICAyNzk2OCxcbiAgMTA5Mzk2LFxuICAxMTEwNCxcbiAgMzgyNTYsXG4gIDIxMjM0LFxuICAxODgwMCxcbiAgLy8xOTIwLTE5MjlcbiAgMjU5NTgsXG4gIDU0NDMyLFxuICA1OTk4NCxcbiAgMjgzMDksXG4gIDIzMjQ4LFxuICAxMTEwNCxcbiAgMTAwMDY3LFxuICAzNzYwMCxcbiAgMTE2OTUxLFxuICA1MTUzNixcbiAgLy8xOTMwLTE5MzlcbiAgNTQ0MzIsXG4gIDEyMDk5OCxcbiAgNDY0MTYsXG4gIDIyMTc2LFxuICAxMDc5NTYsXG4gIDk2ODAsXG4gIDM3NTg0LFxuICA1MzkzOCxcbiAgNDMzNDQsXG4gIDQ2NDIzLFxuICAvLzE5NDAtMTk0OVxuICAyNzgwOCxcbiAgNDY0MTYsXG4gIDg2ODY5LFxuICAxOTg3MixcbiAgNDI0MTYsXG4gIDgzMzE1LFxuICAyMTE2OCxcbiAgNDM0MzIsXG4gIDU5NzI4LFxuICAyNzI5NixcbiAgLy8xOTUwLTE5NTlcbiAgNDQ3MTAsXG4gIDQzODU2LFxuICAxOTI5NixcbiAgNDM3NDgsXG4gIDQyMzUyLFxuICAyMTA4OCxcbiAgNjIwNTEsXG4gIDU1NjMyLFxuICAyMzM4MyxcbiAgMjIxNzYsXG4gIC8vMTk2MC0xOTY5XG4gIDM4NjA4LFxuICAxOTkyNSxcbiAgMTkxNTIsXG4gIDQyMTkyLFxuICA1NDQ4NCxcbiAgNTM4NDAsXG4gIDU0NjE2LFxuICA0NjQwMCxcbiAgNDY3NTIsXG4gIDEwMzg0NixcbiAgLy8xOTcwLTE5NzlcbiAgMzgzMjAsXG4gIDE4ODY0LFxuICA0MzM4MCxcbiAgNDIxNjAsXG4gIDQ1NjkwLFxuICAyNzIxNixcbiAgMjc5NjgsXG4gIDQ0ODcwLFxuICA0Mzg3MixcbiAgMzgyNTYsXG4gIC8vMTk4MC0xOTg5XG4gIDE5MTg5LFxuICAxODgwMCxcbiAgMjU3NzYsXG4gIDI5ODU5LFxuICA1OTk4NCxcbiAgMjc0ODAsXG4gIDIxOTUyLFxuICA0Mzg3MixcbiAgMzg2MTMsXG4gIDM3NjAwLFxuICAvLzE5OTAtMTk5OVxuICA1MTU1MixcbiAgNTU2MzYsXG4gIDU0NDMyLFxuICA1NTg4OCxcbiAgMzAwMzQsXG4gIDIyMTc2LFxuICA0Mzk1OSxcbiAgOTY4MCxcbiAgMzc1ODQsXG4gIDUxODkzLFxuICAvLzIwMDAtMjAwOVxuICA0MzM0NCxcbiAgNDYyNDAsXG4gIDQ3NzgwLFxuICA0NDM2OCxcbiAgMjE5NzcsXG4gIDE5MzYwLFxuICA0MjQxNixcbiAgODYzOTAsXG4gIDIxMTY4LFxuICA0MzMxMixcbiAgLy8yMDEwLTIwMTlcbiAgMzEwNjAsXG4gIDI3Mjk2LFxuICA0NDM2OCxcbiAgMjMzNzgsXG4gIDE5Mjk2LFxuICA0MjcyNixcbiAgNDIyMDgsXG4gIDUzODU2LFxuICA2MDAwNSxcbiAgNTQ1NzYsXG4gIC8vMjAyMC0yMDI5XG4gIDIzMjAwLFxuICAzMDM3MSxcbiAgMzg2MDgsXG4gIDE5MTk1LFxuICAxOTE1MixcbiAgNDIxOTIsXG4gIDExODk2NixcbiAgNTM4NDAsXG4gIDU0NTYwLFxuICA1NjY0NSxcbiAgLy8yMDMwLTIwMzlcbiAgNDY0OTYsXG4gIDIyMjI0LFxuICAyMTkzOCxcbiAgMTg4NjQsXG4gIDQyMzU5LFxuICA0MjE2MCxcbiAgNDM2MDAsXG4gIDExMTE4OSxcbiAgMjc5MzYsXG4gIDQ0NDQ4LFxuICAvLzIwNDAtMjA0OVxuICA4NDgzNSxcbiAgMzc3NDQsXG4gIDE4OTM2LFxuICAxODgwMCxcbiAgMjU3NzYsXG4gIDkyMzI2LFxuICA1OTk4NCxcbiAgMjc0MjQsXG4gIDEwODIyOCxcbiAgNDM3NDQsXG4gIC8vMjA1MC0yMDU5XG4gIDQxNjk2LFxuICA1Mzk4NyxcbiAgNTE1NTIsXG4gIDU0NjE1LFxuICA1NDQzMixcbiAgNTU4ODgsXG4gIDIzODkzLFxuICAyMjE3NixcbiAgNDI3MDQsXG4gIDIxOTcyLFxuICAvLzIwNjAtMjA2OVxuICAyMTIwMCxcbiAgNDM0NDgsXG4gIDQzMzQ0LFxuICA0NjI0MCxcbiAgNDY3NTgsXG4gIDQ0MzY4LFxuICAyMTkyMCxcbiAgNDM5NDAsXG4gIDQyNDE2LFxuICAyMTE2OCxcbiAgLy8yMDcwLTIwNzlcbiAgNDU2ODMsXG4gIDI2OTI4LFxuICAyOTQ5NSxcbiAgMjcyOTYsXG4gIDQ0MzY4LFxuICA4NDgyMSxcbiAgMTkyOTYsXG4gIDQyMzUyLFxuICAyMTczMixcbiAgNTM2MDAsXG4gIC8vMjA4MC0yMDg5XG4gIDU5NzUyLFxuICA1NDU2MCxcbiAgNTU5NjgsXG4gIDkyODM4LFxuICAyMjIyNCxcbiAgMTkxNjgsXG4gIDQzNDc2LFxuICA0MTY4MCxcbiAgNTM1ODQsXG4gIDYyMDM0LFxuICAvLzIwOTAtMjA5OVxuICA1NDU2MFxuICAvLzIxMDBcbl0sIEYgPSBbXCLpm7ZcIiwgXCLkuIBcIiwgXCLkuoxcIiwgXCLkuIlcIiwgXCLlm5tcIiwgXCLkupRcIiwgXCLlha1cIiwgXCLkuINcIiwgXCLlhatcIiwgXCLkuZ1cIl0sIEEgPSBbXCLmraNcIiwgXCLkuoxcIiwgXCLkuIlcIiwgXCLlm5tcIiwgXCLkupRcIiwgXCLlha1cIiwgXCLkuINcIiwgXCLlhatcIiwgXCLkuZ1cIiwgXCLljYFcIiwgXCLlhqxcIiwgXCLohYpcIl0sIEggPSBbXCLnlLJcIiwgXCLkuZlcIiwgXCLkuJlcIiwgXCLkuIFcIiwgXCLmiIpcIiwgXCLlt7FcIiwgXCLluppcIiwgXCLovptcIiwgXCLlo6xcIiwgXCLnmbhcIl0sIEIgPSBbXCLlrZBcIiwgXCLkuJFcIiwgXCLlr4VcIiwgXCLlja9cIiwgXCLovrBcIiwgXCLlt7NcIiwgXCLljYhcIiwgXCLmnKpcIiwgXCLnlLNcIiwgXCLphYlcIiwgXCLmiIxcIiwgXCLkuqVcIl0sIG50ID0gW1wi6bygXCIsIFwi54mbXCIsIFwi6JmOXCIsIFwi5YWUXCIsIFwi6b6ZXCIsIFwi6JuHXCIsIFwi6amsXCIsIFwi576KXCIsIFwi54y0XCIsIFwi6bihXCIsIFwi54uXXCIsIFwi54yqXCJdLCB4ID0gKGUpID0+IHtcbiAgbGV0IHQgPSAzNDg7XG4gIGZvciAobGV0IHIgPSAzMjc2ODsgciA+IDg7IHIgPj49IDEpXG4gICAgdCArPSBnW2UgLSAxOTAwXSAmIHIgPyAxIDogMDtcbiAgcmV0dXJuIHQgKyBOKGUpO1xufSwgcCA9IChlKSA9PiBnW2UgLSAxOTAwXSAmIDE1LCBOID0gKGUpID0+IHAoZSkgPyBnW2UgLSAxOTAwXSAmIDY1NTM2ID8gMzAgOiAyOSA6IDAsIGIgPSAoZSkgPT4gSFtlICUgMTBdICsgQltlICUgMTJdLCBEID0gKGUsIHQpID0+IGdbZSAtIDE5MDBdICYgNjU1MzYgPj4gdCA/IDMwIDogMjksIHN0ID0gKGUpID0+IG50WyhlIC0gNCkgJSAxMl0sIGl0ID0gKGUpID0+IHtcbiAgY29uc3QgdCA9IFtcIuWInVwiLCBcIuWNgVwiLCBcIuW7v1wiLCBcIuS4ieWNgVwiXTtcbiAgaWYgKGUgPT09IDEwKSByZXR1cm4gXCLliJ3ljYFcIjtcbiAgaWYgKGUgPT09IDIwKSByZXR1cm4gXCLkuozljYFcIjtcbiAgaWYgKGUgPT09IDMwKSByZXR1cm4gXCLkuInljYFcIjtcbiAgY29uc3QgciA9IE1hdGguZmxvb3IoZSAvIDEwKSwgYSA9IGUgJSAxMDtcbiAgcmV0dXJuIHRbcl0gKyAoYSA/IEZbYV0gOiBcIlwiKTtcbn0sIGx0ID0gKGUpID0+IGAke0hbKGUgLSA0KSAlIDEwXX0ke0JbKGUgLSA0KSAlIDEyXX3lubRgLCBSID0gKGUsIHQpID0+IHtcbiAgY29uc3QgciA9IFtdO1xuICBmb3IgKGxldCBhID0gZTsgYSA8PSB0OyBhKyspXG4gICAgci5wdXNoKHtcbiAgICAgIHllYXI6IGEsXG4gICAgICBsdW5hclllYXI6IGx0KGEpLFxuICAgICAgbHVuYXJZZWFyQ046IGEudG9TdHJpbmcoKS5zcGxpdChcIlwiKS5tYXAoKG4pID0+IEZbTnVtYmVyKG4pXSkuam9pbihcIlwiKVxuICAgIH0pO1xuICByZXR1cm4gcjtcbn0sIEMgPSAoZSkgPT4ge1xuICBjb25zdCB0ID0gcChlKTtcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBlLFxuICAgIGxlYXBNb250aDogdCB8fCB2b2lkIDAsXG4gICAgbGVhcE1vbnRoQ046IHQgPyBg6ZewJHtBW3QgLSAxXX3mnIhgIDogdm9pZCAwLFxuICAgIGRheXM6IHQgPyBnW2UgLSAxOTAwXSAmIDY1NTM2ID8gMzAgOiAyOSA6IDBcbiAgfTtcbn0sIG0gPSAoZSkgPT4ge1xuICBjb25zdCB0ID0gbmV3IEFycmF5KDcpLmZpbGwoMCk7XG4gIGxldCByID0gMCwgYSA9IDA7XG4gIGNvbnN0IG4gPSBoKG5ldyBEYXRlKDE5MDAsIDAsIDMxKSksIGwgPSBoKGUpO1xuICBsZXQgbyA9IGwuZGlmZihuLCBcImRheVwiKTtcbiAgdFs1XSA9IG8gKyA0MCwgdFs0XSA9IDE0O1xuICBsZXQgaSA9IDE5MDA7XG4gIGZvciAoOyBpIDwgMjEwMCAmJiBvID4gMDsgaSsrKVxuICAgIHIgPSB4KGkpLCBvIC09IHIsIHRbNF0gKz0gMTI7XG4gIG8gPCAwICYmIChvICs9IHIsIGktLSwgdFs0XSAtPSAxMiksIHRbMF0gPSBpLCB0WzNdID0gaSAtIDE4NjQsIGEgPSBwKGkpLCB0WzZdID0gMDtcbiAgZm9yIChsZXQgcyA9IDE7IHMgPCAxMyAmJiBvID49IDA7IHMrKylcbiAgICBhID4gMCAmJiBzID09PSBhICsgMSAmJiB0WzZdID09PSAwID8gKC0tcywgdFs2XSA9IDEsIHIgPSBOKGkpKSA6IHIgPSBEKGksIHMpLCB0WzZdID09PSAxICYmIHMgPT09IGEgKyAxICYmICh0WzZdID0gMCksIG8gLT0gciwgdFs2XSA9PT0gMCAmJiB0WzRdKyssIHRbMV0gPSBzO1xuICByZXR1cm4gbyA9PT0gMCAmJiBhID4gMCAmJiB0WzZdID09PSAxID8gdFs2XSA9IDAgOiBvIDwgMCAmJiAobyArPSByLCB0WzFdLS0sIHRbNF0tLSksIHRbMl0gPSBvICsgMSwge1xuICAgIGRhdGU6IGwuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAvLyDlhazljobml6XmnJ9cbiAgICBsdW5hclllYXI6IHRbMF0sXG4gICAgLy8g5Yac5Y6G5bm05Lu9XG4gICAgbHVuYXJNb246IHRbMV0gKyAxLFxuICAgIC8vIOWGnOWOhuaciOS7vVxuICAgIGx1bmFyRGF5OiB0WzJdLFxuICAgIC8vIOWGnOWOhuaXpeacn1xuICAgIGlzTGVhcDogISF0WzZdLFxuICAgIC8vIOaYr+WQpumXsOaciFxuICAgIHpvZGlhYzogc3QodFswXSksXG4gICAgLy8g55Sf6IKWXG4gICAgeWVhckN5bDogYih0WzNdKSxcbiAgICAvLyDlubTmn7FcbiAgICBtb25DeWw6IGIodFs0XSksXG4gICAgLy8g5pyI5p+xXG4gICAgZGF5Q3lsOiBiKHRbNV0pLFxuICAgIC8vIOaXpeafsVxuICAgIGx1bmFyWWVhckNOOiBgJHt0WzBdLnRvU3RyaW5nKCkuc3BsaXQoXCJcIikubWFwKChzKSA9PiBGW051bWJlcihzKV0pLmpvaW4oXCJcIil9YCxcbiAgICAvLyDlhpzljoblubTku73kuK3mlofooajnpLpcbiAgICBsdW5hck1vbkNOOiBgJHtBW3RbMV1dfeaciGAsXG4gICAgLy8g5Yac5Y6G5pyI5Lu95Lit5paH6KGo56S6XG4gICAgbHVuYXJEYXlDTjogaXQodFsyXSlcbiAgICAvLyDlhpzljobml6XmnJ/kuK3mlofooajnpLpcbiAgfTtcbn0sIGogPSAoZSwgdCkgPT4ge1xuICBjb25zdCByID0gaChlKSwgYSA9IGgodCksIG4gPSBbXTtcbiAgZm9yIChsZXQgbCA9IHI7IGwuaXNCZWZvcmUoYSkgfHwgbC5pc1NhbWUoYSwgXCJkYXlcIik7IGwgPSBsLmFkZCgxLCBcImRheVwiKSlcbiAgICBuLnB1c2gobShsKSk7XG4gIHJldHVybiBuO1xufSwgSSA9IChlKSA9PiB7XG4gIGNvbnN0IHQgPSBoKGUpLCByID0gdC55ZWFyKCksIGEgPSB0Lm1vbnRoKCkgKyAxLCBuID0gdC5kYXRlKCk7XG4gIGxldCBsID0gMDtcbiAgZm9yIChsZXQgeSA9IDE5MDA7IHkgPCByOyB5KyspXG4gICAgbCArPSB4KHkpO1xuICBsZXQgbyA9IHAocik7XG4gIGZvciAobGV0IHkgPSAxOyB5IDwgYTsgeSsrKVxuICAgIGwgKz0gRChyLCB5KSwgeSA9PT0gbyAmJiAobCArPSBOKHIpKTtcbiAgbCArPSBuIC0gMTtcbiAgY29uc3QgaSA9IGgobmV3IERhdGUoMTkwMCwgMCwgMzEpKSwgcyA9IGkuYWRkKGwsIFwiZGF5XCIpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gIGxldCBfID0gbCwgdjtcbiAgcmV0dXJuIG8gPT09IGEgJiYgKF8gKz0gRChyLCBhKSwgdiA9IGkuYWRkKF8sIFwiZGF5XCIpLmZvcm1hdChcIllZWVktTU0tRERcIikpLCB7XG4gICAgZGF0ZTogcyxcbiAgICBsZWFwTW9udGhEYXRlOiB2XG4gIH07XG59LCBkdCA9IHtcbiAgZ2V0THVuYXJZZWFyczogUixcbiAgZ2V0WWVhckxlYXBNb250aDogQyxcbiAgZ2V0THVuYXJEYXRlOiBtLFxuICBnZXRMdW5hckRhdGVzSW5SYW5nZTogaixcbiAgZ2V0U29sYXJEYXRlRnJvbUx1bmFyOiBJXG59LCBodCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IGR0LFxuICBnZXRMdW5hckRhdGU6IG0sXG4gIGdldEx1bmFyRGF0ZXNJblJhbmdlOiBqLFxuICBnZXRMdW5hclllYXJzOiBSLFxuICBnZXRTb2xhckRhdGVGcm9tTHVuYXI6IEksXG4gIGdldFllYXJMZWFwTW9udGg6IEMsXG4gIG1vbnRoRGF5czogRFxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgX3QgPSB7XG4gIDE6IHtcbiAgICAvLyDmraPmnIhcbiAgICAxOiBbXCLmmKXoioJcIiwgXCLpuKHml6VcIiwgXCLlhYPlp4vlpKnlsIror57ovrBcIl0sXG4gICAgMjogW1wi54qs5pelXCJdLFxuICAgIDM6IFtcIueMquaXpVwiLCBcIuWwj+W5tOacnVwiXSxcbiAgICA0OiBbXCLnvorml6VcIiwgXCLlrZnlpKnljLvor57ovrBcIl0sXG4gICAgNTogW1wi54mb5pelXCIsIFwi56C05LqU5pelXCIsIFwi5byA5biCXCIsIFwi6Lev56We6K+e6L6wXCJdLFxuICAgIDY6IFtcIumprOaXpVwiXSxcbiAgICA3OiBbXCLkurrml6VcIiwgXCLpgIHngavnpZ5cIl0sXG4gICAgODogW1wi6LC35pelXCIsIFwi6ZiO546L6K+e6L6wXCJdLFxuICAgIDk6IFtcIuWkqeaXpVwiLCBcIueOieeah+ivnui+sFwiXSxcbiAgICAxMDogW1wi5Zyw5pelXCIsIFwi55+z5aS055Sf5pelXCJdLFxuICAgIDEzOiBbXCLkuIoo6K+VKeeBr+aXpVwiLCBcIuWFs+WFrOWNh+WkqeaXpVwiXSxcbiAgICAxNTogW1wi5YWD5a616IqCXCIsIFwi5LiK5YWD6IqCXCIsIFwi5q2j54Gv5pelXCIsIFwi5aSp5a6Y6K+e6L6wXCJdLFxuICAgIDE4OiBbXCLokL3nga/ml6VcIl0sXG4gICAgMjU6IFtcIuWkqeS7kyjloavku5Mp6IqCXCJdXG4gIH0sXG4gIDI6IHtcbiAgICAvLyDkuozmnIhcbiAgICAxOiBbXCLlpKrpmLPnlJ/ml6VcIl0sXG4gICAgMjogW1wi5pil6b6Z6IqCXCIsIFwi5Zyf5Zyw5YWs55Sf5pelXCIsIFwi5rWO5YWs5rS75L2b55Sf5pelXCJdLFxuICAgIDM6IFtcIuaWh+aYjOW4neWQm+ivnui+sFwiXSxcbiAgICAxMjogW1wi55m+6Iqx55Sf5pelKOiKseacneiKgilcIl0sXG4gICAgMTU6IFtcIuS5neWkqeeOhOWls+ivnui+sFwiLCBcIuWkquS4iuiAgeWQm+ivnui+sFwiLCBcIueyvuW/oOWys+eOi+ivnui+sFwiXSxcbiAgICAxOTogW1wi6KeC6Z+z6I+p6JCo6K+e6L6wXCJdLFxuICAgIDIxOiBbXCLmma7otKToj6nokKjor57ovrBcIl1cbiAgfSxcbiAgMzoge1xuICAgIDM6IFtcIuS4iuW3s+iKglwiXSxcbiAgICAxNTogW1wi6LW15YWs5YWD5biF6K+e6L6wXCIsIFwi5rOw5bGx6ICB5q+N6K+e6L6wXCJdXG4gIH0sXG4gIDQ6IHtcbiAgICAxOiBbXCLnpa3pm7nnpZ5cIl0sXG4gICAgNDogW1wi5paH5q6K6I+p6JCo6K+e6L6wXCJdLFxuICAgIDg6IFtcIua1tOS9m+iKgijpvpnljY7kvJopXCJdLFxuICAgIDEyOiBbXCLom4fnjovor57ovrBcIl0sXG4gICAgMTQ6IFtcIuWQlea0nuWuvuivnui+sFwiXSxcbiAgICAxODogW1wi5Y2O5L2X6K+e6L6wXCJdLFxuICAgIDI4OiBbXCLoja/njoso56We5YacKeivnui+sFwiXVxuICB9LFxuICA1OiB7XG4gICAgNTogW1wi56uv5Y2I6IqCXCJdLFxuICAgIDEzOiBbXCLpm6joioJcIiwgXCLpu4TluJ3or57ovrBcIl1cbiAgfSxcbiAgNjoge1xuICAgIDE6IFtcIuWNiuW5tOiKglwiXSxcbiAgICA2OiBbXCLmmZLooaPoioJcIl0sXG4gICAgMTk6IFtcIuingumfs+iPqeiQqOW+l+mBk1wiXSxcbiAgICAyNDogW1wi6Zu356We6K+e6L6wXCIsIFwi6I236Iqx55Sf5pelXCIsIFwi5YWz5YWs6K+e6L6wXCJdXG4gIH0sXG4gIDc6IHtcbiAgICAxOiBbXCLnpa3mtbfnpZ5cIl0sXG4gICAgNzogW1wi5Lme5ben6IqCXCJdLFxuICAgIDE1OiBbXCLkuK3lhYMo6ay8KeiKglwiLCBcIuWcsOWumOivnui+sCjlrZ/lhbDnm4bkvJopXCJdLFxuICAgIDE4OiBbXCLopb/njovmr43or57ovrBcIl0sXG4gICAgMjA6IFtcIuajieiKseeUn+aXpVwiXSxcbiAgICAyMzogW1wi6K+46JGb5Lqu6K+e6L6wXCJdLFxuICAgIDMwOiBbXCLlnLDol4/oj6nokKjor57ovrBcIl1cbiAgfSxcbiAgODoge1xuICAgIDE6IFtcIuWkqeWMu+iKglwiXSxcbiAgICAzOiBbXCLngbblkJvnlJ/ml6VcIl0sXG4gICAgODogW1wi55G25rGg5aSn5LyaXCJdLFxuICAgIDE1OiBbXCLkuK3np4voioJcIl0sXG4gICAgMjA6IFtcIuawtOeou+eUn+aXpVwiXSxcbiAgICAyODogW1wi5a2U5a2Q6K+e6L6wXCJdXG4gIH0sXG4gIDk6IHtcbiAgICA5OiBbXCLph43pmLPoioJcIl0sXG4gICAgMTk6IFtcIuingumfs+iPqeiQqOWHuuWutlwiXVxuICB9LFxuICAxMDoge1xuICAgIDE6IFtcIuWNgeaciOacnVwiLCBcIuWvkuiho+iKglwiXSxcbiAgICAxNTogW1wi5LiL5YWD6IqCXCIsIFwi5rC05a6Y6K+e6L6wXCJdXG4gIH0sXG4gIDEyOiB7XG4gICAgODogW1wi6IWK5YWr6IqCXCJdLFxuICAgIDIzOiBbXCLlrpjlrrbpgIHngbZcIl0sXG4gICAgMjQ6IFtcIuawkemXtOmAgeeBtlwiXSxcbiAgICAyNTogW1wi5o6l546J55qHXCJdXG4gIH1cbn0sIHl0ID0gW1xuICAvLyDlpITnkIblr5Lpo5/oioLvvIjmuIXmmI7liY3kuIDml6XvvIlcbiAgKGUsIHQpID0+IHtcbiAgICBjb25zdCByID0gZS5hZGQoMSwgXCJkYXlcIik7XG4gICAgJChyKS5maW5kKChuKSA9PiBuLnRlcm0gPT09IFwicHVyZV9icmlnaHRuZXNzXCIpICYmIHQucHVzaCh7XG4gICAgICBkYXRlOiBlLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgICBuYW1lOiBcIuWvkumjn+iKglwiLFxuICAgICAgdHlwZTogXCJzb2xhcl90ZXJtXCJcbiAgICB9KTtcbiAgfSxcbiAgLy8g5aSE55CG6Zmk5aSV77yI5Yac5Y6G6IWK5pyI5pyA5ZCO5LiA5pel77yJXG4gIChlLCB0KSA9PiB7XG4gICAgY29uc3QgciA9IG0oZSk7XG4gICAgaWYgKHIubHVuYXJNb24gPT09IDEyICYmIHIubHVuYXJEYXkgPT09IEQoci5sdW5hclllYXIsIDEyKSkge1xuICAgICAgY29uc3QgYSA9IGUuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgIFtcIumZpOWklVwiLCBcIuWwgeS6lVwiLCBcIuelreS6leelnlwiLCBcIui0tOaYpeiBlFwiLCBcIui/jui0ouelnlwiXS5mb3JFYWNoKChuKSA9PiB7XG4gICAgICAgIHQucHVzaCh7XG4gICAgICAgICAgZGF0ZTogYSxcbiAgICAgICAgICBuYW1lOiBuLFxuICAgICAgICAgIHR5cGU6IFwibHVuYXJcIlxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXSwgcSA9IChlLCB0KSA9PiB7XG4gIHZhciBsO1xuICBjb25zdCByID0gW107XG4gIGxldCBhID0gaChlKTtcbiAgY29uc3QgbiA9IGgodCB8fCBlKTtcbiAgZm9yICg7IGEuaXNCZWZvcmUobikgfHwgYS5pc1NhbWUobik7ICkge1xuICAgIGNvbnN0IG8gPSBtKGEpO1xuICAgIG8uaXNMZWFwIHx8ICgoKGwgPSBfdFtvLmx1bmFyTW9uXSkgPT0gbnVsbCA/IHZvaWQgMCA6IGxbby5sdW5hckRheV0pIHx8IFtdKS5mb3JFYWNoKChzKSA9PiB7XG4gICAgICByLnB1c2goe1xuICAgICAgICBkYXRlOiBhLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgICAgIG5hbWU6IHMsXG4gICAgICAgIHR5cGU6IFwibHVuYXJcIlxuICAgICAgfSk7XG4gICAgfSksIHl0LmZvckVhY2goKGkpID0+IGkoYSwgcikpLCBhID0gYS5hZGQoMSwgXCJkYXlcIik7XG4gIH1cbiAgcmV0dXJuIHIucmVkdWNlKChvLCBpKSA9PiB7XG4gICAgY29uc3QgcyA9IG8uZmluZCgoXykgPT4gXy5kYXRlID09PSBpLmRhdGUpO1xuICAgIHJldHVybiBzID8gcy5uYW1lLnB1c2goaS5uYW1lKSA6IG8ucHVzaCh7IGRhdGU6IGkuZGF0ZSwgbmFtZTogW2kubmFtZV0gfSksIG87XG4gIH0sIFtdKTtcbn0sIHV0ID0ge1xuICBnZXRMdW5hckZlc3RpdmFsczogcVxufSwgd3QgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiB1dCxcbiAgZ2V0THVuYXJGZXN0aXZhbHM6IHFcbn0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSksIGZ0ID0ge1xuICAuLi50dCxcbiAgLi4ub3QsXG4gIC4uLmh0LFxuICAuLi53dFxufTtcbmV4cG9ydCB7XG4gIGZ0IGFzIGRlZmF1bHQsXG4gIFggYXMgZmluZFdvcmtkYXksXG4gIEogYXMgZ2V0RGF5RGV0YWlsLFxuICBLIGFzIGdldEhvbGlkYXlzSW5SYW5nZSxcbiAgbSBhcyBnZXRMdW5hckRhdGUsXG4gIGogYXMgZ2V0THVuYXJEYXRlc0luUmFuZ2UsXG4gIHEgYXMgZ2V0THVuYXJGZXN0aXZhbHMsXG4gIFIgYXMgZ2V0THVuYXJZZWFycyxcbiAgSSBhcyBnZXRTb2xhckRhdGVGcm9tTHVuYXIsXG4gIEwgYXMgZ2V0U29sYXJUZXJtRGF0ZSxcbiAgYXQgYXMgZ2V0U29sYXJUZXJtcyxcbiAgJCBhcyBnZXRTb2xhclRlcm1zSW5SYW5nZSxcbiAgUSBhcyBnZXRXb3JrZGF5c0luUmFuZ2UsXG4gIEMgYXMgZ2V0WWVhckxlYXBNb250aCxcbiAgTyBhcyBpc0hvbGlkYXksXG4gIEcgYXMgaXNJbkxpZXUsXG4gIGYgYXMgaXNXb3JrZGF5LFxuICBEIGFzIG1vbnRoRGF5c1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHNCQUFBLENBQUE7QUFBQUMsU0FBQUQscUJBQUE7RUFBQUUsYUFBQUEsTUFBQUM7RUFBQUMsY0FBQUEsTUFBQUM7RUFBQUMsb0JBQUFBLE1BQUFDO0VBQUFDLGNBQUFBLE1BQUFDO0VBQUFDLHNCQUFBQSxNQUFBQztFQUFBQyxtQkFBQUEsTUFBQUM7RUFBQUMsZUFBQUEsTUFBQUM7RUFBQUMsdUJBQUFBLE1BQUFDO0VBQUFDLGtCQUFBQSxNQUFBQztFQUFBQyxlQUFBQSxNQUFBQztFQUFBQyxzQkFBQUEsTUFBQUM7RUFBQUMsb0JBQUFBLE1BQUFDO0VBQUFDLGtCQUFBQSxNQUFBQztFQUFBQyxXQUFBQSxNQUFBQztFQUFBQyxVQUFBQSxNQUFBQztFQUFBQyxXQUFBQSxNQUFBQztFQUFBQyxXQUFBQSxNQUFBQztBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQXRDLG1CQUFBO0FDQUEsSUFBSXVDLElBQUlDLE9BQU9DO0FBQ2YsSUFBSUMsSUFBSUEsQ0FBQ0MsR0FBR0MsR0FBR0MsTUFBTUQsS0FBS0QsSUFBSUosRUFBRUksR0FBR0MsR0FBRztFQUFFRSxZQUFZO0VBQUlDLGNBQWM7RUFBSUMsVUFBVTtFQUFJQyxPQUFPSjtBQUFFLENBQUMsSUFBSUYsRUFBRUMsQ0FBQyxJQUFJQztBQUM3RyxJQUFJSyxJQUFJQSxDQUFDUCxHQUFHQyxHQUFHQyxNQUFNSCxFQUFFQyxHQUFHLE9BQU9DLEtBQUssV0FBV0EsSUFBSSxLQUFLQSxHQUFHQyxDQUFDO0FBQzlELElBQU1NLElBQUksTUFBTUMsR0FBRTtFQUNoQkMsWUFBWVQsR0FBRztBQUNiTSxNQUFFLE1BQU0sT0FBTztBQUNmTixpQkFBYVEsS0FBSSxLQUFLRSxRQUFRLElBQUlDLEtBQUtYLEVBQUVZLE9BQU8sQ0FBQyxJQUFJWixhQUFhVyxPQUFPLEtBQUtELFFBQVEsSUFBSUMsS0FBS1gsQ0FBQyxJQUFJLE9BQU9BLEtBQUssWUFBWSxPQUFPQSxLQUFLLFlBQVksS0FBS1UsUUFBUSxJQUFJQyxLQUFLWCxDQUFDLEdBQUcsT0FBT0EsS0FBSyxZQUFZYSxNQUFNLEtBQUtILE1BQU1JLFFBQVEsQ0FBQyxNQUFNLEtBQUtKLFFBQVEsSUFBSUMsS0FBS1gsRUFBRWUsUUFBUSxNQUFNLEdBQUcsQ0FBQyxNQUFNLEtBQUtMLFFBQXdCLG9CQUFJQyxLQUFLO0VBQzlUO0VBQ0FDLFNBQVM7QUFDUCxXQUFPLEtBQUtGO0VBQ2Q7RUFDQU0sVUFBVTtBQUNSLFdBQU8sQ0FBQ0gsTUFBTSxLQUFLSCxNQUFNSSxRQUFRLENBQUM7RUFDcEM7RUFDQUcsS0FBS2pCLEdBQUdDLElBQUksT0FBTztBQUNqQixVQUFNaUIsSUFBSSxJQUFJVixHQUFFUixDQUFDLEVBQUVZLE9BQU8sR0FBR08sSUFBSSxLQUFLVCxNQUFNSSxRQUFRLElBQUlJLEVBQUVKLFFBQVE7QUFDbEUsWUFBUWIsR0FBQTtNQUNOLEtBQUs7QUFDSCxlQUFPLEtBQUtTLE1BQU1VLFlBQVksSUFBSUYsRUFBRUUsWUFBWTtNQUNsRCxLQUFLO0FBQ0gsZ0JBQVEsS0FBS1YsTUFBTVUsWUFBWSxJQUFJRixFQUFFRSxZQUFZLEtBQUssTUFBTSxLQUFLVixNQUFNVyxTQUFTLElBQUlILEVBQUVHLFNBQVM7TUFDakcsS0FBSztNQUNMO0FBQ0UsZUFBT0MsS0FBS0MsTUFBTUosS0FBSyxNQUFNLEtBQUssS0FBSyxHQUFHO0lBQzlDO0VBQ0Y7RUFDQUssUUFBUXhCLEdBQUc7QUFDVCxVQUFNQyxJQUFJLElBQUlVLEtBQUssS0FBS0QsS0FBSztBQUM3QixZQUFRVixHQUFBO01BQ04sS0FBSztBQUNIQyxVQUFFd0IsU0FBUyxDQUFDLEdBQUd4QixFQUFFeUIsUUFBUSxDQUFDLEdBQUd6QixFQUFFMEIsU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2xEO01BQ0YsS0FBSztBQUNIMUIsVUFBRXlCLFFBQVEsQ0FBQyxHQUFHekIsRUFBRTBCLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNuQztNQUNGLEtBQUs7QUFDSDFCLFVBQUUwQixTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDckI7SUFDSjtBQUNBLFdBQU8sSUFBSW5CLEdBQUVQLENBQUM7RUFDaEI7RUFDQTJCLE1BQU01QixHQUFHO0FBQ1AsVUFBTUMsSUFBSSxJQUFJVSxLQUFLLEtBQUtELEtBQUs7QUFDN0IsWUFBUVYsR0FBQTtNQUNOLEtBQUs7QUFDSEMsVUFBRXdCLFNBQVMsRUFBRSxHQUFHeEIsRUFBRXlCLFFBQVEsRUFBRSxHQUFHekIsRUFBRTBCLFNBQVMsSUFBSSxJQUFJLElBQUksR0FBRztBQUN6RDtNQUNGLEtBQUs7QUFDSDFCLFVBQUV5QixRQUFRLElBQUlmLEtBQUtWLEVBQUVtQixZQUFZLEdBQUduQixFQUFFb0IsU0FBUyxJQUFJLEdBQUcsQ0FBQyxFQUFFUSxRQUFRLENBQUMsR0FBRzVCLEVBQUUwQixTQUFTLElBQUksSUFBSSxJQUFJLEdBQUc7QUFDL0Y7TUFDRixLQUFLO0FBQ0gxQixVQUFFMEIsU0FBUyxJQUFJLElBQUksSUFBSSxHQUFHO0FBQzFCO0lBQ0o7QUFDQSxXQUFPLElBQUluQixHQUFFUCxDQUFDO0VBQ2hCO0VBQ0E2QixJQUFJOUIsR0FBR0MsR0FBRztBQUNSLFVBQU1pQixJQUFJLElBQUlQLEtBQUssS0FBS0QsS0FBSztBQUM3QixZQUFRVCxHQUFBO01BQ04sS0FBSztBQUNIaUIsVUFBRWEsWUFBWWIsRUFBRUUsWUFBWSxJQUFJcEIsQ0FBQztBQUNqQztNQUNGLEtBQUs7QUFDSGtCLFVBQUVPLFNBQVNQLEVBQUVHLFNBQVMsSUFBSXJCLENBQUM7QUFDM0I7TUFDRixLQUFLO0FBQ0hrQixVQUFFUSxRQUFRUixFQUFFVyxRQUFRLElBQUk3QixDQUFDO0FBQ3pCO0lBQ0o7QUFDQSxXQUFPLElBQUlRLEdBQUVVLENBQUM7RUFDaEI7RUFDQWMsU0FBU2hDLEdBQUdDLEdBQUc7QUFDYixXQUFPLEtBQUs2QixJQUFJLENBQUM5QixHQUFHQyxDQUFDO0VBQ3ZCO0VBQ0FnQyxPQUFPakMsR0FBRztBQUNSLFVBQU1DLElBQUk7TUFDUmlDLE1BQU0sS0FBS3hCLE1BQU1VLFlBQVk7TUFDN0JlLEtBQUssS0FBS3pCLE1BQU1XLFNBQVMsSUFBSSxHQUFHZSxTQUFTLEVBQUVDLFNBQVMsR0FBRyxHQUFHO01BQzFEQyxJQUFJLEtBQUs1QixNQUFNbUIsUUFBUSxFQUFFTyxTQUFTLEVBQUVDLFNBQVMsR0FBRyxHQUFHO01BQ25ERSxJQUFJLEtBQUs3QixNQUFNOEIsU0FBUyxFQUFFSixTQUFTLEVBQUVDLFNBQVMsR0FBRyxHQUFHO01BQ3BESSxJQUFJLEtBQUsvQixNQUFNZ0MsV0FBVyxFQUFFTixTQUFTLEVBQUVDLFNBQVMsR0FBRyxHQUFHO01BQ3RETSxJQUFJLEtBQUtqQyxNQUFNa0MsV0FBVyxFQUFFUixTQUFTLEVBQUVDLFNBQVMsR0FBRyxHQUFHO01BQ3REUSxNQUFNckMsR0FBRXNDLFdBQVcsS0FBS3BDLE1BQU1xQyxPQUFPLENBQUM7SUFDeEM7QUFDQSxXQUFPL0MsRUFBRWUsUUFBUSw2QkFBOEJHLE9BQU1qQixFQUFFaUIsQ0FBQyxFQUFFa0IsU0FBUyxDQUFDO0VBQ3RFO0VBQ0FZLEtBQUtoRCxHQUFHO0FBQ04sUUFBSUEsTUFBTSxPQUFRLFFBQU8sS0FBS1UsTUFBTVUsWUFBWTtBQUNoRCxVQUFNbkIsSUFBSSxJQUFJVSxLQUFLLEtBQUtELEtBQUs7QUFDN0IsV0FBT1QsRUFBRThCLFlBQVkvQixDQUFDLEdBQUcsSUFBSVEsR0FBRVAsQ0FBQztFQUNsQztFQUNBZ0QsTUFBTWpELEdBQUc7QUFDUCxRQUFJQSxNQUFNLE9BQVEsUUFBTyxLQUFLVSxNQUFNVyxTQUFTO0FBQzdDLFVBQU1wQixJQUFJLElBQUlVLEtBQUssS0FBS0QsS0FBSztBQUM3QixXQUFPVCxFQUFFd0IsU0FBU3pCLENBQUMsR0FBRyxJQUFJUSxHQUFFUCxDQUFDO0VBQy9CO0VBQ0FpRCxLQUFLbEQsR0FBRztBQUNOLFFBQUlBLE1BQU0sT0FBUSxRQUFPLEtBQUtVLE1BQU1tQixRQUFRO0FBQzVDLFVBQU01QixJQUFJLElBQUlVLEtBQUssS0FBS0QsS0FBSztBQUM3QixXQUFPVCxFQUFFeUIsUUFBUTFCLENBQUMsR0FBRyxJQUFJUSxHQUFFUCxDQUFDO0VBQzlCO0VBQ0FrRCxJQUFJbkQsR0FBRztBQUNMLFFBQUlBLE1BQU0sT0FDUixRQUFPLEtBQUtVLE1BQU1xQyxPQUFPO0FBQzNCO0FBQ0UsWUFBTTlDLElBQUksS0FBS1MsTUFBTXFDLE9BQU8sR0FBRzdCLElBQUlsQixJQUFJQyxHQUFHa0IsSUFBSSxJQUFJUixLQUFLLEtBQUtELEtBQUs7QUFDakUsYUFBT1MsRUFBRU8sUUFBUSxLQUFLaEIsTUFBTW1CLFFBQVEsSUFBSVgsQ0FBQyxHQUFHLElBQUlWLEdBQUVXLENBQUM7SUFDckQ7RUFDRjtFQUNBaUMsU0FBU3BELEdBQUc7QUFDVixVQUFNQyxJQUFJLElBQUlPLEdBQUVSLENBQUMsRUFBRVksT0FBTztBQUMxQixXQUFPLEtBQUtGLE1BQU1JLFFBQVEsSUFBSWIsRUFBRWEsUUFBUTtFQUMxQztFQUNBdUMsUUFBUXJELEdBQUc7QUFDVCxVQUFNQyxJQUFJLElBQUlPLEdBQUVSLENBQUMsRUFBRVksT0FBTztBQUMxQixXQUFPLEtBQUtGLE1BQU1JLFFBQVEsSUFBSWIsRUFBRWEsUUFBUTtFQUMxQztFQUNBd0MsT0FBT3RELEdBQUdDLElBQUksT0FBTztBQUNuQixVQUFNaUIsSUFBSSxJQUFJVixHQUFFUixDQUFDLEVBQUVZLE9BQU87QUFDMUIsWUFBUVgsR0FBQTtNQUNOLEtBQUs7QUFDSCxlQUFPLEtBQUtTLE1BQU1VLFlBQVksTUFBTUYsRUFBRUUsWUFBWTtNQUNwRCxLQUFLO0FBQ0gsZUFBTyxLQUFLVixNQUFNVSxZQUFZLE1BQU1GLEVBQUVFLFlBQVksS0FBSyxLQUFLVixNQUFNVyxTQUFTLE1BQU1ILEVBQUVHLFNBQVM7TUFDOUYsS0FBSztNQUNMO0FBQ0UsZUFBTyxLQUFLWCxNQUFNVSxZQUFZLE1BQU1GLEVBQUVFLFlBQVksS0FBSyxLQUFLVixNQUFNVyxTQUFTLE1BQU1ILEVBQUVHLFNBQVMsS0FBSyxLQUFLWCxNQUFNbUIsUUFBUSxNQUFNWCxFQUFFVyxRQUFRO0lBQ3hJO0VBQ0Y7RUFDQTBCLFVBQVV2RCxHQUFHQyxHQUFHaUIsR0FBRztBQUNqQixVQUFNQyxJQUFJLElBQUlYLEdBQUVSLENBQUMsRUFBRXdCLFFBQVFOLENBQUMsRUFBRU4sT0FBTyxHQUFHNEMsSUFBSSxJQUFJaEQsR0FBRVAsQ0FBQyxFQUFFMkIsTUFBTVYsQ0FBQyxFQUFFTixPQUFPLEdBQUc2QyxJQUFJLEtBQUs3QyxPQUFPO0FBQ3hGLFdBQU82QyxLQUFLdEMsS0FBS3NDLEtBQUtEO0VBQ3hCO0FBQ0Y7QUFDQWxELEVBQUVDLEdBQUcsY0FBYyxDQUNqQixVQUNBLFVBQ0EsV0FDQSxhQUNBLFlBQ0EsVUFDQSxVQUFBLENBQ0Q7QUFDRCxJQUFJbUQsSUFBSW5EO0FBQ1IsSUFBTW9ELElBQUs1RCxPQUFNLElBQUkyRCxFQUFFM0QsQ0FBQztBQUF4QixJQUEyQjZELElBQUs3RCxPQUFNNEQsRUFBRTVELENBQUMsRUFBRXlCLFFBQVEsS0FBSztBQUF4RCxJQUEyRHFDLElBQUlBLENBQUM5RCxHQUFHQyxNQUFNO0FBQ3ZFRCxNQUFJNkQsRUFBRTdELENBQUMsR0FBR0MsSUFBSTRELEVBQUU1RCxDQUFDO0FBQ2pCLFFBQU1DLElBQUlELEVBQUVpQixLQUFLbEIsR0FBRyxLQUFLO0FBQ3pCLFNBQU8rRCxNQUFNQyxLQUFLO0lBQUVDLFFBQVEvRCxJQUFJO0VBQUUsR0FBRyxDQUFDaUIsR0FBR0MsTUFBTXBCLEVBQUUrQixJQUFJWCxHQUFHLEtBQUssQ0FBQztBQUNoRTtBQUpBLElBSUc4QyxJQUFJOztFQUVMLE1BQU07SUFDSixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0VBRUEsTUFBTTtJQUNKLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLDBCQUEwQjtFQUM1Qjs7O0VBR0EsTUFBTTtJQUNKLG9EQUFvRDtFQUN0RDs7RUFFQSxNQUFNO0lBQ0osc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtBQUNGO0FBQ0EsSUFBTUMsSUFBTixNQUFRO0VBQ056RCxjQUFjO0FBQ1pILE1BQUUsTUFBTSxjQUFjLENBQUMsQ0FBQztBQUN4QkEsTUFBRSxNQUFNLFlBQVksQ0FBQyxDQUFDO0FBQ3RCQSxNQUFFLE1BQU0sWUFBWSxDQUFDLENBQUM7QUFDdEJBLE1BQUUsTUFBTSxjQUFjLENBQUMsQ0FBQztFQUMxQjs7RUFFQTZELEVBQUVuRSxHQUFHO0FBQ0gsV0FBTyxLQUFLb0UsV0FBV3BCLE9BQU9oRCxHQUFHO0VBQ25DOztFQUVBcUUsZUFBZXJFLEdBQUdDLEdBQUc7QUFDbkIsUUFBSWlCLElBQUk7QUFDUixhQUFBb0QsS0FBQSxHQUFBQyxrQkFBcUIzRSxPQUFPNEUsUUFBUVAsQ0FBQyxHQUFBSyxLQUFBQyxnQkFBQVAsUUFBQU0sTUFBRztBQUF4QyxZQUFXLENBQUNuRCxHQUFHcUMsQ0FBQyxJQUFBZSxnQkFBQUQsRUFBQTtBQUNkLFVBQUlHLFNBQVN0RCxDQUFDLElBQUluQixFQUFHO0FBQ3JCd0QsUUFBRXZELENBQUMsTUFBTSxXQUFXaUIsSUFBSXNDLEVBQUV2RCxDQUFDO0lBQzdCO0FBQ0EsV0FBT2lCO0VBQ1Q7RUFDQXdELEtBQUsxRSxHQUFHO0FBQ04sV0FBTyxLQUFLb0UsV0FBV08sVUFBVTNFLEdBQUc7RUFDdEM7RUFDQTRFLEtBQUs1RSxHQUFHQyxHQUFHaUIsR0FBRztBQUNaLFFBQUksQ0FBQyxLQUFLa0QsV0FBV3BCLEtBQ25CLE9BQU0sSUFBSTZCLE1BQU0sdUNBQXVDO0FBQ3pELFFBQUksQ0FBQyxLQUFLVCxXQUFXTyxRQUNuQixPQUFNLElBQUlFLE1BQU0sMENBQTBDO0FBQzVELFNBQUtULFdBQVduQixRQUFRakQsR0FBRyxLQUFLb0UsV0FBV2pCLE1BQU1sRCxHQUFHLEtBQUttRSxXQUFXVSxVQUFVNUQ7QUFDOUUsVUFBTUMsSUFBSXdDLEVBQUEsR0FBQW9CLE9BQUssS0FBS1gsV0FBV3BCLE1BQUksR0FBQSxFQUFBK0IsT0FBSS9FLEdBQUMsR0FBQSxFQUFBK0UsT0FBSTlFLENBQUMsQ0FBRSxFQUFFZ0MsT0FBTyxZQUFZLEdBQUd1QixJQUFJLEtBQUthLGVBQWUsS0FBS0QsV0FBV3BCLE1BQU0sS0FBS29CLFdBQVdPLE9BQU8sR0FBR2xCLElBQUEsR0FBQXNCLE9BQU8sS0FBS1gsV0FBV08sU0FBTyxHQUFBLEVBQUFJLE9BQUl2QixDQUFDO0FBQ2xMLFdBQU90QyxNQUFNLElBQUksS0FBSzhELFNBQVM3RCxDQUFDLElBQUlzQyxJQUFJdkMsTUFBTSxJQUFJLEtBQUsrRCxTQUFTOUQsQ0FBQyxJQUFJc0MsSUFBSXZDLE1BQU0sTUFBTSxLQUFLZ0UsV0FBVy9ELENBQUMsSUFBSXNDLElBQUk7RUFDaEg7RUFDQTBCLEdBQUduRixHQUFHQyxHQUFHO0FBQ1AsUUFBSSxDQUFDLEtBQUttRSxXQUFXTyxXQUFXLENBQUMsS0FBS1AsV0FBV3BCLFFBQVEsQ0FBQyxLQUFLb0IsV0FBV25CLFNBQVMsQ0FBQyxLQUFLbUIsV0FBV2pCLElBQ2xHLE9BQU0sSUFBSTBCLE1BQU0sdURBQXVEO0FBQ3pFLFVBQU0zRCxJQUFJeUMsRUFBQSxHQUFBb0IsT0FDTCxLQUFLWCxXQUFXcEIsTUFBSSxHQUFBLEVBQUErQixPQUFJLEtBQUtYLFdBQVduQixPQUFLLEdBQUEsRUFBQThCLE9BQUksS0FBS1gsV0FBV2pCLEdBQUcsQ0FDekUsR0FBR2hDLElBQUl3QyxFQUFBLEdBQUFvQixPQUFLLEtBQUtYLFdBQVdwQixNQUFJLEdBQUEsRUFBQStCLE9BQUkvRSxHQUFDLEdBQUEsRUFBQStFLE9BQUk5RSxDQUFDLENBQUU7QUFDNUMsUUFBSWtCLEVBQUVpQyxTQUFTbEMsQ0FBQyxLQUFLQyxFQUFFbUMsT0FBT3BDLENBQUMsRUFDN0IsT0FBTSxJQUFJMkQsTUFBTSxxQ0FBcUM7QUFDdkQsVUFBTXJCLElBQUksS0FBS2EsZUFBZSxLQUFLRCxXQUFXcEIsTUFBTSxLQUFLb0IsV0FBV08sT0FBTyxHQUFHbEIsSUFBQSxHQUFBc0IsT0FBTyxLQUFLWCxXQUFXTyxTQUFPLEdBQUEsRUFBQUksT0FBSXZCLENBQUMsR0FBSTRCLElBQUlqRSxFQUFFRixLQUFLQyxHQUFHLEtBQUs7QUFDeEksYUFBU21FLElBQUksR0FBR0EsS0FBS0QsR0FBR0MsS0FBSztBQUMzQixZQUFNQyxJQUFJcEUsRUFBRVksSUFBSXVELEdBQUcsS0FBSyxFQUFFcEQsT0FBTyxZQUFZO0FBQzdDLFdBQUttQyxXQUFXVSxZQUFZLElBQUksS0FBS0UsU0FBU00sQ0FBQyxJQUFJN0IsSUFBSSxLQUFLVyxXQUFXVSxZQUFZLElBQUksS0FBS0csU0FBU0ssQ0FBQyxJQUFJN0IsSUFBSSxLQUFLVyxXQUFXVSxZQUFZLE1BQU0sS0FBS0ksV0FBV0ksQ0FBQyxJQUFJN0I7SUFDdks7QUFDQSxXQUFPO0VBQ1Q7O0VBRUE4QixFQUFFdkYsR0FBR0MsR0FBRztBQUNOLFdBQU8sS0FBSzJFO01BQ1Y1RTtNQUNBQztNQUNBOztJQUVGO0VBQ0Y7O0VBRUFBLEVBQUVELEdBQUdDLEdBQUc7QUFDTixXQUFPLEtBQUsyRTtNQUNWNUU7TUFDQUM7TUFDQTs7SUFFRjtFQUNGOztFQUVBbUYsRUFBRXBGLEdBQUdDLEdBQUc7QUFDTixXQUFPLEtBQUsyRTtNQUNWNUU7TUFDQUM7TUFDQTs7SUFFRjtFQUNGOztFQUVBdUYsS0FBSztBQUNILFdBQU8sS0FBS2Q7TUFDVjs7SUFFRjtFQUNGOztFQUVBVyxJQUFJO0FBQ0YsV0FBTyxLQUFLWDtNQUNWOztJQUVGO0VBQ0Y7O0VBRUExRSxJQUFJO0FBQ0YsV0FBTyxLQUFLMEU7TUFDVjs7SUFFRjtFQUNGOztFQUVBbEIsSUFBSTtBQUNGLFdBQU8sS0FBS2tCO01BQ1Y7O0lBRUY7RUFDRjs7RUFFQW5FLElBQUk7QUFDRixXQUFPLEtBQUttRTtNQUNWOztJQUVGO0VBQ0Y7O0VBRUF2RCxJQUFJO0FBQ0YsV0FBTyxLQUFLdUQ7TUFDVjs7SUFFRjtFQUNGOztFQUVBN0csSUFBSTtBQUNGLFdBQU8sS0FBSzZHO01BQ1Y7O0lBRUY7RUFDRjs7RUFFQXhELElBQUk7QUFDRixXQUFPLEtBQUt3RDtNQUNWOztJQUVGO0VBQ0Y7QUFDRjtBQUNBLElBQU1lLElBQUlBLE1BQU07QUFDZCxRQUFNMUYsSUFBSSxJQUFJbUUsRUFBRTtBQUNoQixTQUFPbkUsRUFBRW9FLEVBQUUsSUFBSSxFQUFFcUIsR0FBRyxFQUFFdkYsRUFBRSxHQUFHLENBQUMsRUFBRW9GLEVBQUUsRUFBRXBGLEVBQUUsR0FBRyxFQUFFLEVBQUVrRixHQUFHLEdBQUcsQ0FBQyxFQUFFSSxFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFSCxFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFcEYsRUFBRSxFQUFFQyxFQUFFLEdBQUcsQ0FBQyxFQUFFa0YsR0FBRyxHQUFHLENBQUMsRUFBRTNCLEVBQUUsRUFBRXZELEVBQUUsR0FBRyxDQUFDLEVBQUVrRixHQUFHLEdBQUcsQ0FBQyxFQUFFSSxFQUFFLEdBQUcsRUFBRSxFQUFFSCxFQUFFLEdBQUcsQ0FBQyxFQUFFN0UsRUFBRSxFQUFFTixFQUFFLEdBQUcsRUFBRSxFQUFFa0YsR0FBRyxHQUFHLENBQUMsRUFBRWhFLEVBQUUsRUFBRWxCLEVBQUUsSUFBSSxDQUFDLEVBQUVrRixHQUFHLElBQUksQ0FBQyxFQUFFSSxFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLElBQUksRUFBRSxFQUFFSCxFQUFFLElBQUksQ0FBQyxFQUFFQSxFQUFFLElBQUksQ0FBQyxFQUFFdkgsRUFBRSxFQUFFb0MsRUFBRSxJQUFJLENBQUMsR0FBR0YsRUFBRW9FLEVBQUUsSUFBSSxFQUFFcUIsR0FBRyxFQUFFdkYsRUFBRSxHQUFHLENBQUMsRUFBRW9GLEVBQUUsRUFBRXBGLEVBQUUsR0FBRyxFQUFFLEVBQUVrRixHQUFHLEdBQUcsRUFBRSxFQUFFSSxFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUcsRUFBRSxFQUFFSCxFQUFFLEdBQUcsRUFBRSxFQUFFRCxHQUFHLEdBQUcsRUFBRSxFQUFFbkYsRUFBRSxFQUFFQyxFQUFFLEdBQUcsQ0FBQyxFQUFFa0YsR0FBRyxHQUFHLENBQUMsRUFBRUksRUFBRSxHQUFHLENBQUMsRUFBRUgsRUFBRSxHQUFHLENBQUMsRUFBRTVCLEVBQUUsRUFBRXZELEVBQUUsR0FBRyxDQUFDLEVBQUVrRixHQUFHLEdBQUcsQ0FBQyxFQUFFSSxFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsRUFBRSxFQUFFSCxFQUFFLEdBQUcsQ0FBQyxFQUFFRCxHQUFHLEdBQUcsQ0FBQyxFQUFFNUUsRUFBRSxFQUFFTixFQUFFLEdBQUcsRUFBRSxFQUFFcEMsRUFBRSxFQUFFb0MsRUFBRSxHQUFHLEVBQUUsRUFBRWtGLEdBQUcs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QUUsRUFBRXBGLEVBQUUsR0FBRyxFQUFFLEVBQUVrRixHQUFHLEdBQUcsRUFBRSxFQUFFSSxFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsRUFBRSxFQUFFSCxFQUFFLEdBQUcsRUFBRSxFQUFFRCxHQUFHLEdBQUcsRUFBRSxFQUFFbkYsRUFBRSxFQUFFQyxFQUFFLEdBQUcsQ0FBQyxFQUFFa0YsR0FBRyxHQUFHLENBQUMsRUFBRUksRUFBRSxHQUFHLENBQUMsRUFBRUgsRUFBRSxHQUFHLENBQUMsRUFBRTVCLEVBQUUsRUFBRXZELEVBQUUsR0FBRyxFQUFFLEVBQUVrRixHQUFHLEdBQUcsQ0FBQyxFQUFFSSxFQUFFLEdBQUcsRUFBRSxFQUFFSCxFQUFFLEdBQUcsRUFBRSxFQUFFN0UsRUFBRSxFQUFFTixFQUFFLEdBQUcsRUFBRSxFQUFFa0IsRUFBRSxFQUFFbEIsRUFBRSxJQUFJLENBQUMsRUFBRWtGLEdBQUcsSUFBSSxDQUFDLEVBQUVJLEVBQUUsR0FBRyxFQUFFLEVBQUVKLEdBQUcsR0FBRyxFQUFFLEVBQUVDLEVBQUUsSUFBSSxDQUFDLEVBQUVELEdBQUcsSUFBSSxDQUFDLEVBQUV0SCxFQUFFLEVBQUVvQyxFQUFFLEdBQUcsRUFBRSxFQUFFdUYsR0FBRyxFQUFFdkYsRUFBRSxJQUFJLEVBQUUsRUFBRWtGLEdBQUcsSUFBSSxFQUFFLEVBQUVJLEVBQUUsSUFBSSxFQUFFLEVBQUVILEVBQUUsSUFBSSxFQUFFLEdBQUdyRixFQUFFb0UsRUFBRSxJQUFJLEVBQUVxQixHQUFHLEVBQUV2RixFQUFFLEdBQUcsQ0FBQyxFQUFFa0YsR0FBRyxHQUFHLENBQUMsRUFBRUUsRUFBRSxFQUFFcEYsRUFBRSxHQUFHLEVBQUUsRUFBRWtGLEdBQUcsR0FBRyxDQUFDLEVBQUVJLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUVELEdBQUcsR0FBRyxDQUFDLEVBQUVuRixFQUFFLEVBQUVDLEVBQUUsR0FBRyxDQUFDLEVBQUVrRixHQUFHLEdBQUcs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QUUsRUFBRWtCLEVBQUUsRUFBRWxCLEVBQUUsSUFBSSxDQUFDLEVBQUVrRixHQUFHLElBQUksQ0FBQyxFQUFFSSxFQUFFLEdBQUcsRUFBRSxFQUFFSCxFQUFFLElBQUksQ0FBQyxHQUFHckYsRUFBRW9FLEVBQUUsSUFBSSxFQUFFcUIsR0FBRyxFQUFFdkYsRUFBRSxHQUFHLENBQUMsRUFBRWtGLEdBQUcsR0FBRyxDQUFDLEVBQUVFLEVBQUUsRUFBRXBGLEVBQUUsR0FBRyxDQUFDLEVBQUVrRixHQUFHLEdBQUcsQ0FBQyxFQUFFSSxFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsRUFBRSxFQUFFSCxFQUFFLEdBQUcsQ0FBQyxFQUFFRCxHQUFHLEdBQUcsQ0FBQyxFQUFFbkYsRUFBRSxFQUFFQyxFQUFFLEdBQUcsQ0FBQyxFQUFFa0YsR0FBRyxHQUFHLENBQUMsRUFBRUksRUFBRSxHQUFHLENBQUMsRUFBRUgsRUFBRSxHQUFHLENBQUMsRUFBRTVCLEVBQUUsRUFBRXZELEVBQUUsR0FBRyxFQUFFLEVBQUVrRixHQUFHLEdBQUcsQ0FBQyxFQUFFNUUsRUFBRSxFQUFFTixFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFcEMsRUFBRSxFQUFFb0MsRUFBRSxHQUFHLEVBQUUsRUFBRWtGLEdBQUcsR0FBRyxFQUFFLEVBQUVoRSxFQUFFLEVBQUVsQixFQUFFLElBQUksQ0FBQyxFQUFFa0YsR0FBRyxJQUFJLENBQUMsRUFBRUksRUFBRSxJQUFJLENBQUMsRUFBRUosR0FBRyxJQUFJLENBQUMsRUFBRUMsRUFBRSxJQUFJLENBQUMsRUFBRUQsR0FBRyxJQUFJLENBQUMsRUFBRUssR0FBRyxFQUFFRCxFQUFFLElBQUksRUFBRSxHQUFHeEYsRUFBRW9FLEVBQUUsSUFBSSxFQUFFcUIsR0FBRyxFQUFFdkYsRUFBRSxHQUFHLENBQUMsRUFBRWtGLEdBQUcsR0FBRyxDQUFDLEVBQUVFLEVBQUUsRUFBRXBGLEVBQUUsR0FBRyxFQUFFLEVBQUVrRixHQUFHLEdBQUcsRUFBRSxFQUFFSSxFQUFF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Q0FBQyxFQUFFM0IsRUFBRSxFQUFFdkQsRUFBRSxHQUFHLENBQUMsRUFBRWtGLEdBQUcsR0FBRyxDQUFDLEVBQUVJLEVBQUUsR0FBRyxFQUFFLEVBQUVKLEdBQUcsR0FBRyxFQUFFLEVBQUVDLEVBQUUsR0FBRyxDQUFDLEVBQUVELEdBQUcsR0FBRyxDQUFDLEVBQUVoRSxFQUFFLEVBQUVsQixFQUFFLElBQUksQ0FBQyxFQUFFa0YsR0FBRyxJQUFJLENBQUMsRUFBRUksRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxJQUFJLENBQUMsRUFBRUgsRUFBRSxJQUFJLENBQUMsRUFBRUQsR0FBRyxJQUFJLENBQUMsRUFBRUssR0FBRyxFQUFFRCxFQUFFLElBQUksRUFBRSxFQUFFSixHQUFHLElBQUksRUFBRSxHQUFHcEYsRUFBRW9FLEVBQUUsSUFBSSxFQUFFcUIsR0FBRyxFQUFFdkYsRUFBRSxHQUFHLENBQUMsRUFBRWtGLEdBQUcsR0FBRyxDQUFDLEVBQUVFLEVBQUUsRUFBRXBGLEVBQUUsR0FBRyxDQUFDLEVBQUVrRixHQUFHLEdBQUcsRUFBRSxFQUFFSSxFQUFFLEdBQUcsQ0FBQyxFQUFFSixHQUFHLEdBQUcsQ0FBQyxFQUFFQyxFQUFFLEdBQUcsRUFBRSxFQUFFRCxHQUFHLEdBQUcsRUFBRSxFQUFFM0IsRUFBRSxFQUFFdkQsRUFBRSxHQUFHLENBQUMsRUFBRWtGLEdBQUcsR0FBRyxDQUFDLEVBQUVJLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUVELEdBQUcsR0FBRyxDQUFDLEVBQUVoRSxFQUFFLEVBQUVsQixFQUFFLElBQUksQ0FBQyxFQUFFa0YsR0FBRyxJQUFJLENBQUMsRUFBRUksRUFBRSxJQUFJLENBQUMsRUFBRUosR0FBRyxJQUFJLENBQUMsRUFBRUMsRUFBRSxJQUFJLENBQUMsRUFBRUQsR0FBRyxJQUFJLENBQUMsR0FBR3BGLEVBQUVvRSxFQUFFLElBQUksRUFBRXFCLEdBQUcsRUFBRXZGLEVBQUUsR0FBRyxDQUFDLEVBQUVv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RUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7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aUIsSUFBSUEsRUFBRVksSUFBSSxHQUFHLEtBQUs7RUFDcEQ7QUFDQSxTQUFPN0IsRUFBRWdMLE9BQU8sQ0FBQ3hILEdBQUcyQixNQUFNO0FBQ3hCLFVBQU1DLElBQUk1QixFQUFFc0gsS0FBTXpGLE9BQU1BLEVBQUVwQyxTQUFTa0MsRUFBRWxDLElBQUk7QUFDekMsV0FBT21DLElBQUlBLEVBQUVVLEtBQUtzQyxLQUFLakQsRUFBRVcsSUFBSSxJQUFJdEMsRUFBRTRFLEtBQUs7TUFBRW5GLE1BQU1rQyxFQUFFbEM7TUFBTTZDLE1BQU0sQ0FBQ1gsRUFBRVcsSUFBSTtJQUFFLENBQUMsR0FBR3RDO0VBQzdFLEdBQUcsQ0FBQSxDQUFFO0FBQ1A7QUExb0JBLElBMG9CR3lILEtBQUs7RUFDTmxOLG1CQUFtQkM7QUFDckI7QUE1b0JBLElBNG9CR2tOLEtBQXFCdkwsdUJBQU91RyxPQUF1QnZHLHVCQUFPQyxlQUFlO0VBQzFFdUcsV0FBVztFQUNYd0UsU0FBU007RUFDVGxOLG1CQUFtQkM7QUFDckIsR0FBR29JLE9BQU9DLGFBQWE7RUFBRWpHLE9BQU87QUFBUyxDQUFDLENBQUM7QUFocEIzQyxJQWdwQjhDK0ssS0FBSztFQUNqRCxHQUFHbEY7RUFDSCxHQUFHc0M7RUFDSCxHQUFHbUM7RUFDSCxHQUFHUTtBQUNMOyIsCiAgIm5hbWVzIjogWyJDaGluZXNlRGF5c19leHBvcnRzIiwgIl9fZXhwb3J0IiwgImZpbmRXb3JrZGF5IiwgIlgiLCAiZ2V0RGF5RGV0YWlsIiwgIkoiLCAiZ2V0SG9saWRheXNJblJhbmdlIiwgIksiLCAiZ2V0THVuYXJEYXRlIiwgIm0iLCAiZ2V0THVuYXJEYXRlc0luUmFuZ2UiLCAiaiIsICJnZXRMdW5hckZlc3RpdmFscyIsICJxIiwgImdldEx1bmFyWWVhcnMiLCAiUiIsICJnZXRTb2xhckRhdGVGcm9tTHVuYXIiLCAiSSIsICJnZXRTb2xhclRlcm1EYXRlIiwgIkwiLCAiZ2V0U29sYXJUZXJtcyIsICJhdCIsICJnZXRTb2xhclRlcm1zSW5SYW5nZSIsICIkIiwgImdldFdvcmtkYXlzSW5SYW5nZSIsICJRIiwgImdldFllYXJMZWFwTW9udGgiLCAiQyIsICJpc0hvbGlkYXkiLCAiTyIsICJpc0luTGlldSIsICJHIiwgImlzV29ya2RheSIsICJmIiwgIm1vbnRoRGF5cyIsICJEIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJQIiwgIk9iamVjdCIsICJkZWZpbmVQcm9wZXJ0eSIsICJVIiwgImUiLCAidCIsICJyIiwgImVudW1lcmFibGUiLCAiY29uZmlndXJhYmxlIiwgIndyaXRhYmxlIiwgInZhbHVlIiwgImMiLCAiZCIsICJkMiIsICJjb25zdHJ1Y3RvciIsICJfZGF0ZSIsICJEYXRlIiwgInRvRGF0ZSIsICJpc05hTiIsICJnZXRUaW1lIiwgInJlcGxhY2UiLCAiaXNWYWxpZCIsICJkaWZmIiwgImEiLCAibiIsICJnZXRGdWxsWWVhciIsICJnZXRNb250aCIsICJNYXRoIiwgImZsb29yIiwgInN0YXJ0T2YiLCAic2V0TW9udGgiLCAic2V0RGF0ZSIsICJzZXRIb3VycyIsICJlbmRPZiIsICJnZXREYXRlIiwgImFkZCIsICJzZXRGdWxsWWVhciIsICJzdWJ0cmFjdCIsICJmb3JtYXQiLCAiWVlZWSIsICJNTSIsICJ0b1N0cmluZyIsICJwYWRTdGFydCIsICJERCIsICJISCIsICJnZXRIb3VycyIsICJtbSIsICJnZXRNaW51dGVzIiwgInNzIiwgImdldFNlY29uZHMiLCAiZGRkZCIsICJkYXlzT2ZXZWVrIiwgImdldERheSIsICJ5ZWFyIiwgIm1vbnRoIiwgImRhdGUiLCAiZGF5IiwgImlzQmVmb3JlIiwgImlzQWZ0ZXIiLCAiaXNTYW1lIiwgImlzQmV0d2VlbiIsICJsIiwgIm8iLCAiUyIsICJoIiwgInUiLCAiWSIsICJBcnJheSIsICJmcm9tIiwgImxlbmd0aCIsICJXIiwgInoiLCAieSIsICJkYXlEZXRhaWxzIiwgImdldEhvbGlkYXlEYXlzIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgInBhcnNlSW50IiwgIm1hcmsiLCAiaG9saWRheSIsICJzYXZlIiwgIkVycm9yIiwgImRheVR5cGUiLCAiY29uY2F0IiwgImhvbGlkYXlzIiwgIndvcmtkYXlzIiwgImluTGlldURheXMiLCAidG8iLCAiaSIsICJzIiwgIl8iLCAidyIsICJueSIsICJWIiwgIk0iLCAiayIsICJaIiwgIm1hcCIsICJ3b3JrIiwgIm5hbWUiLCAiZmlsdGVyIiwgImFicyIsICJ0dCIsICJmcmVlemUiLCAiX19wcm90b19fIiwgIlN5bWJvbCIsICJ0b1N0cmluZ1RhZyIsICJldCIsICJ0aGVfYmVnaW5uaW5nX29mX3NwcmluZyIsICJyYWluX3dhdGVyIiwgInRoZV93YWtpbmdfb2ZfaW5zZWN0cyIsICJ0aGVfc3ByaW5nX2VxdWlub3giLCAicHVyZV9icmlnaHRuZXNzIiwgImdyYWluX3JhaW4iLCAidGhlX2JlZ2lubmluZ19vZl9zdW1tZXIiLCAibGVzc2VyX2Z1bGxuZXNzX29mX2dyYWluIiwgImdyYWluX2luX2JlYXJkIiwgInRoZV9zdW1tZXJfc29sc3RpY2UiLCAibGVzc2VyX2hlYXQiLCAiZ3JlYXRlcl9oZWF0IiwgInRoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uIiwgInRoZV9lbmRfb2ZfaGVhdCIsICJ3aGl0ZV9kZXciLCAidGhlX2F1dHVtbl9lcXVpbm94IiwgImNvZGVfZGV3IiwgImZyb3N0X2Rlc2NlbnQiLCAidGhlX2JlZ2lubmluZ19vZl93aW50ZXIiLCAibGVzc2VyX3Nub3ciLCAiZ3JlYXRlcl9zbm93IiwgInRoZV93aW50ZXJfc29sc3RpY2UiLCAibGVzc2VyX2NvbGQiLCAiZ3JlYXRlcl9jb2xkIiwgIlQiLCAicnQiLCAiRSIsICJpbmNsdWRlcyIsICJmb3JFYWNoIiwgInB1c2giLCAidGVybSIsICJpbmRleCIsICJvdCIsICJnIiwgIkYiLCAiQSIsICJIIiwgIkIiLCAibnQiLCAieCIsICJOIiwgInAiLCAiYiIsICJzdCIsICJpdCIsICJsdCIsICJsdW5hclllYXIiLCAibHVuYXJZZWFyQ04iLCAic3BsaXQiLCAiTnVtYmVyIiwgImpvaW4iLCAibGVhcE1vbnRoIiwgImxlYXBNb250aENOIiwgImRheXMiLCAiZmlsbCIsICJsdW5hck1vbiIsICJsdW5hckRheSIsICJpc0xlYXAiLCAiem9kaWFjIiwgInllYXJDeWwiLCAibW9uQ3lsIiwgImRheUN5bCIsICJsdW5hck1vbkNOIiwgImx1bmFyRGF5Q04iLCAidiIsICJsZWFwTW9udGhEYXRlIiwgImR0IiwgImh0IiwgImRlZmF1bHQiLCAiX3QiLCAieXQiLCAiZmluZCIsICJ0eXBlIiwgInJlZHVjZSIsICJ1dCIsICJ3dCIsICJmdCJdCn0K
