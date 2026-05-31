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
  getLunarDatesInRange: () => I,
  getLunarFestivals: () => U,
  getLunarYears: () => x,
  getSolarDateFromLunar: () => j,
  getSolarTermDate: () => L,
  getSolarTerms: () => at,
  getSolarTermsInRange: () => $,
  getWorkdaysInRange: () => Q,
  getYearLeapMonth: () => C,
  isHoliday: () => T,
  isInLieu: () => G,
  isWorkday: () => f,
  monthDays: () => D
});
module.exports = __toCommonJS(ChineseDays_exports);
var q = Object.defineProperty;
var P = (r, t, e) => t in r ? q(r, t, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: e
}) : r[t] = e;
var u = (r, t, e) => P(r, typeof t != "symbol" ? t + "" : t, e);
var l = class l2 {
  constructor(t) {
    u(this, "_date");
    if (t instanceof l2) this._date = new Date(t.toDate());
    else if (t instanceof Date) this._date = new Date(t);
    else if (typeof t == "string" || typeof t == "number") {
      if (typeof t == "string") {
        const e = t.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
        e ? this._date = new Date(Date.UTC(parseInt(e[1], 10), parseInt(e[2], 10) - 1, parseInt(e[3], 10))) : isNaN(new Date(t).getTime()) ? this._date = new Date(t.replace(/-/g, "/")) : this._date = new Date(t);
      } else this._date = new Date(t);
    } else this._date = /* @__PURE__ */ new Date();
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
u(l, "daysOfWeek", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
var S = l;
var h = (r) => new S(r);
var w = (r) => h(r).startOf("day");
var Y = (r, t) => {
  r = w(r), t = w(t);
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
    u(this, "dayDetails", {});
    u(this, "holidays", {});
    u(this, "workdays", {});
    u(this, "inLieuDays", {});
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
  return r.y(2026).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(2, 15).to(2, 23).w(2, 14).w(2, 28).i(2, 20).i(2, 23).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(5, 9).i(5, 5).d().r(6, 19).to(6, 21).m().r(9, 25).to(9, 27).n().r(10, 1).to(10, 7).w(9, 20).w(10, 10).i(10, 6).i(10, 7), r.y(2025).ny().r(1, 1).s().r(1, 28).to(2, 4).w(1, 26).w(2, 8).i(2, 3).i(2, 4).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 27).i(5, 5).d().r(5, 31).to(6, 2).n().r(10, 1).to(10, 8).w(9, 28).w(10, 11).i(10, 7).i(10, 8).m().r(10, 6), r.y(2024).ny().r(1, 1).s().r(2, 10).to(2, 17).w(2, 4).w(2, 18).i(2, 15).to(2, 16).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(5, 1).to(5, 5).w(4, 28).w(5, 11).i(5, 2).to(5, 3).d().r(6, 10).m().r(9, 15).to(9, 17).w(9, 14).i(9, 16).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2023).ny().r(1, 1).to(1, 2).s().r(1, 21).to(1, 27).w(1, 28).to(1, 29).i(1, 26).to(1, 27).t().r(4, 5).l().r(4, 29).to(5, 3).w(4, 23).w(5, 6).i(5, 2).to(5, 3).d().r(6, 22).to(6, 24).w(6, 25).i(6, 23).m().r(9, 29).n().r(9, 30).to(10, 6).w(10, 7).to(10, 8).i(10, 5).to(10, 6), r.y(2022).ny().r(1, 1).to(1, 3).s().r(1, 31).to(2, 6).w(1, 29).w(1, 30).i(2, 3).to(2, 4).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 4).w(4, 24).w(5, 7).i(5, 3).to(5, 4).d().r(6, 3).to(6, 5).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).w(10, 9).i(10, 6).to(10, 7).ny().r(12, 31), r.y(2021).ny().r(1, 1).to(1, 3).s().r(2, 11).to(2, 17).w(2, 7).w(2, 20).i(2, 16).to(2, 17).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 5).w(4, 25).w(5, 8).i(5, 4).to(5, 5).d().r(6, 12).to(6, 14).m().r(9, 19).to(9, 21).w(9, 18).i(9, 20).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), r.y(2020).ny().r(1, 1).s().r(1, 24).to(2, 2).w(1, 19).i(1, 29).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 26).w(5, 9).i(5, 4).to(5, 5).d().r(6, 25).to(6, 27).w(6, 28).i(6, 26).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8), r.y(2019).ny().r(1, 1).s().r(2, 4).to(2, 10).w(2, 2).to(2, 3).i(2, 4).i(2, 8).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 4).w(4, 28).w(5, 5).i(5, 2).i(5, 3).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2018).ny().r(1, 1).s().r(2, 15).to(2, 21).w(2, 11).w(2, 24).i(2, 19).to(2, 21).t().r(4, 5).to(4, 7).w(4, 8).i(4, 6).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 18).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).m().r(9, 24).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), r.y(2017).ny().r(1, 1).to(1, 2).s().r(1, 27).to(2, 2).w(1, 22).w(2, 4).i(2, 1).to(2, 2).t().r(4, 2).to(4, 4).w(4, 1).i(4, 3).l().r(5, 1).d().r(5, 28).to(5, 30).w(5, 27).i(5, 29).n().r(10, 1).to(10, 8).w(9, 30).i(10, 6).m().r(10, 4), r.y(2016).ny().r(1, 1).s().r(2, 7).to(2, 13).w(2, 6).w(2, 14).i(2, 11).to(2, 12).t().r(4, 4).l().r(5, 1).to(5, 2).d().r(6, 9).to(6, 11).w(6, 12).i(6, 10).m().r(9, 15).to(9, 17).w(9, 18).i(9, 16).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), r.y(2015).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(2, 18).to(2, 24).w(2, 15).w(2, 28).i(2, 23).to(2, 24).t().r(4, 5).to(4, 6).l().r(5, 1).d().r(6, 20).r(6, 22).m().r(9, 27).n().r(10, 1).to(10, 7).w(10, 10).i(10, 7).a().r(9, 3).to(9, 4).w(9, 6).i(9, 4), r.y(2014).ny().r(1, 1).s().r(1, 31).to(2, 6).w(1, 26).w(2, 8).i(2, 5).to(2, 6).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 2).m().r(9, 8).n().r(10, 1).to(10, 7).w(9, 28).w(10, 11).i(10, 6).to(10, 7), r.y(2013).ny().r(1, 1).to(1, 3).w(1, 5).to(1, 6).i(1, 2).to(1, 3).s().r(2, 9).to(2, 15).w(2, 16).to(2, 17).i(2, 14).to(2, 15).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(4, 29).to(5, 1).w(4, 27).to(4, 28).i(4, 29).to(4, 30).d().r(6, 10).to(6, 12).w(6, 8).to(6, 9).i(6, 10).to(6, 11).m().r(9, 19).to(9, 21).w(9, 22).i(9, 20).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2012).ny().r(1, 1).to(1, 3).i(1, 3).s().r(1, 22).to(1, 28).w(1, 21).w(1, 29).i(1, 26).to(1, 27).t().r(4, 2).to(4, 4).w(3, 31).w(4, 1).i(4, 2).to(4, 3).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 22).r(6, 24).m().r(9, 30).n().r(10, 1).to(10, 7).w(9, 29).i(10, 5), r.y(2011).ny().r(1, 1).to(1, 3).s().r(2, 2).to(2, 8).w(1, 30).w(2, 12).i(2, 7).to(2, 8).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 2).d().r(6, 4).r(6, 6).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7).ny().w(12, 31), r.y(2010).ny().r(1, 1).to(1, 3).s().r(2, 13).to(2, 19).w(2, 20).to(2, 21).i(2, 18).to(2, 19).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 3).d().r(6, 14).to(6, 16).w(6, 12).to(6, 13).i(6, 14).to(6, 15).m().r(9, 22).to(9, 24).w(9, 19).w(9, 25).i(9, 23).to(9, 24).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), r.y(2009).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(1, 25).to(1, 31).w(1, 24).w(2, 1).i(1, 29).to(1, 30).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).d().r(5, 28).to(5, 30).w(5, 31).i(5, 29).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8).m().r(10, 3), r.y(2008).ny().r(1, 1).s().r(2, 6).to(2, 12).w(2, 2).to(2, 3).i(2, 11).to(2, 12).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(9, 29).to(10, 5).w(9, 27).to(9, 28).i(9, 29).to(9, 30), r.y(2007).ny().r(1, 1).to(1, 3).i(1, 2).to(1, 3).s().r(2, 18).to(2, 24).w(2, 17).w(2, 25).i(2, 22).to(2, 23).l().r(5, 1).to(5, 7).w(4, 28).to(4, 29).i(5, 4).i(5, 7).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), r.y(2006).ny().r(1, 1).to(1, 3).s().r(1, 29).to(2, 4).w(1, 28).w(2, 5).i(2, 2).to(2, 3).l().r(5, 1).to(5, 7).w(4, 29).to(4, 30).i(5, 4).to(5, 5).n().r(10, 1).to(10, 7).w(9, 30).w(10, 8).i(10, 5).to(10, 6).ny().w(12, 30).to(12, 31), r.y(2005).ny().r(1, 1).to(1, 3).s().r(2, 9).to(2, 15).w(2, 5).to(2, 6).i(2, 14).to(2, 15).l().r(5, 1).to(5, 7).w(4, 30).w(5, 8).i(5, 5).to(5, 6).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), r.y(2004).ny().r(1, 1).s().r(1, 22).to(1, 28).w(1, 17).to(1, 18).i(1, 27).to(1, 28).l().r(5, 1).to(5, 7).w(5, 8).to(5, 9).i(5, 6).to(5, 7).n().r(10, 1).to(10, 7).w(10, 9).to(10, 10).i(10, 6).to(10, 7), {
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
  const t = w(r);
  if (!t.isValid()) throw new Error("unsupported type ".concat(typeof r, ", expected type is Date or Dayjs"));
  return t;
};
var T = (r) => !f(r);
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
  return e ? Y(a, o).filter(T).map((s) => s.format("YYYY-MM-DD")) : Y(a, o).filter((s) => M[s.format("YYYY-MM-DD")]).map((s) => s.format("YYYY-MM-DD"));
};
var Q = (r, t, e = true) => {
  const a = c(r), o = c(t);
  return e ? Y(a, o).filter(f).map((s) => s.format("YYYY-MM-DD")) : Y(a, o).filter((s) => f(s) && s.day() >= 1 && s.day() <= 5).map((s) => s.format("YYYY-MM-DD"));
};
var X = (r = 0, t = h()) => {
  if (t = w(t), r === 0) {
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
  isHoliday: T,
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
var O = {
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
  let a = w(r);
  const o = w(t || r);
  for (; a.isBefore(o) || a.isSame(o); ) {
    const s = a.year(), n = a.month() + 1;
    O[n].forEach((d) => {
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
  let e = w(r).subtract(1, "month");
  const a = w(t || r).add(1, "month"), o = [];
  for (; e.isBefore(a) || e.isSame(a); ) {
    const n = e.year(), d = e.month() + 1;
    O[d].forEach((i) => {
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
var B = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
var H = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
var nt = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
var R = (r) => {
  let t = 348;
  for (let e = 32768; e > 8; e >>= 1) t += g[r - 1900] & e ? 1 : 0;
  return t + v(r);
};
var p = (r) => g[r - 1900] & 15;
var v = (r) => p(r) ? g[r - 1900] & 65536 ? 30 : 29 : 0;
var b = (r) => B[r % 10] + H[r % 12];
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
var dt = (r) => "".concat(B[(r - 4) % 10]).concat(H[(r - 4) % 12], "年");
var x = (r, t) => {
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
var lt = new Date(Date.UTC(1900, 0, 30, 16, 0, 0));
var m = (r) => {
  const t = new Array(7).fill(0);
  let e = 0, a = 0;
  const o = h(lt), s = h(r);
  let n = s.diff(o, "day");
  t[5] = n + 40, t[4] = 14;
  let d = 1900;
  for (; d < 2100 && n > 0; d++) e = R(d), n -= e, t[4] += 12;
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
var I = (r, t) => {
  const e = h(r), a = h(t), o = [];
  for (let s = e; s.isBefore(a) || s.isSame(a, "day"); s = s.add(1, "day")) o.push(m(s));
  return o;
};
var j = (r) => {
  const t = h(r), e = t.year(), a = t.month() + 1, o = t.date();
  let s = 0;
  for (let y = 1900; y < e; y++) s += R(y);
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
var ht = {
  getLunarYears: x,
  getYearLeapMonth: C,
  getLunarDate: m,
  getLunarDatesInRange: I,
  getSolarDateFromLunar: j
};
var _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ht,
  getLunarDate: m,
  getLunarDatesInRange: I,
  getLunarYears: x,
  getSolarDateFromLunar: j,
  getYearLeapMonth: C,
  monthDays: D
}, Symbol.toStringTag, {
  value: "Module"
}));
var yt = {
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
var wt = [
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
var U = (r, t) => {
  var s;
  const e = [];
  let a = h(r);
  const o = h(t || r);
  for (; a.isBefore(o) || a.isSame(o); ) {
    const n = m(a);
    n.isLeap || (((s = yt[n.lunarMon]) == null ? void 0 : s[n.lunarDay]) || []).forEach((i) => {
      e.push({
        date: a.format("YYYY-MM-DD"),
        name: i,
        type: "lunar"
      });
    }), wt.forEach((d) => d(a, e)), a = a.add(1, "day");
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
  getLunarFestivals: U
};
var ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ut,
  getLunarFestivals: U
}, Symbol.toStringTag, {
  value: "Module"
}));
var Dt = {
  ...tt,
  ...ot,
  ..._t,
  ...ct
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NoaW5lc2VEYXlzL0NoaW5lc2VEYXlzLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jaGluZXNlLWRheXNAMS41Ljcvbm9kZV9tb2R1bGVzL2NoaW5lc2UtZGF5cy9kaXN0L2luZGV4LmVzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICdjaGluZXNlLWRheXMnO1xuIiwgInZhciBxID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIFAgPSAociwgdCwgZSkgPT4gdCBpbiByID8gcShyLCB0LCB7IGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAsIHZhbHVlOiBlIH0pIDogclt0XSA9IGU7XG52YXIgdSA9IChyLCB0LCBlKSA9PiBQKHIsIHR5cGVvZiB0ICE9IFwic3ltYm9sXCIgPyB0ICsgXCJcIiA6IHQsIGUpO1xuY29uc3QgbCA9IGNsYXNzIGwge1xuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgdSh0aGlzLCBcIl9kYXRlXCIpO1xuICAgIGlmICh0IGluc3RhbmNlb2YgbClcbiAgICAgIHRoaXMuX2RhdGUgPSBuZXcgRGF0ZSh0LnRvRGF0ZSgpKTtcbiAgICBlbHNlIGlmICh0IGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgIHRoaXMuX2RhdGUgPSBuZXcgRGF0ZSh0KTtcbiAgICBlbHNlIGlmICh0eXBlb2YgdCA9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB0ID09IFwibnVtYmVyXCIpXG4gICAgICBpZiAodHlwZW9mIHQgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBlID0gdC5tYXRjaCgvXihcXGR7NH0pLShcXGR7MSwyfSktKFxcZHsxLDJ9KSQvKTtcbiAgICAgICAgZSA/IHRoaXMuX2RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhcbiAgICAgICAgICBwYXJzZUludChlWzFdLCAxMCksXG4gICAgICAgICAgcGFyc2VJbnQoZVsyXSwgMTApIC0gMSxcbiAgICAgICAgICBwYXJzZUludChlWzNdLCAxMClcbiAgICAgICAgKSkgOiBpc05hTihuZXcgRGF0ZSh0KS5nZXRUaW1lKCkpID8gdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQucmVwbGFjZSgvLS9nLCBcIi9cIikpIDogdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQpO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHRoaXMuX2RhdGUgPSBuZXcgRGF0ZSh0KTtcbiAgICBlbHNlXG4gICAgICB0aGlzLl9kYXRlID0gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCk7XG4gIH1cbiAgdG9EYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICB9XG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuICFpc05hTih0aGlzLl9kYXRlLmdldFRpbWUoKSk7XG4gIH1cbiAgZGlmZih0LCBlID0gXCJkYXlcIikge1xuICAgIGNvbnN0IGEgPSBuZXcgbCh0KS50b0RhdGUoKSwgbyA9IHRoaXMuX2RhdGUuZ2V0VGltZSgpIC0gYS5nZXRUaW1lKCk7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpIC0gYS5nZXRGdWxsWWVhcigpO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIHJldHVybiAodGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpIC0gYS5nZXRGdWxsWWVhcigpKSAqIDEyICsgKHRoaXMuX2RhdGUuZ2V0TW9udGgoKSAtIGEuZ2V0TW9udGgoKSk7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihvIC8gKDFlMyAqIDYwICogNjAgKiAyNCkpO1xuICAgIH1cbiAgfVxuICBzdGFydE9mKHQpIHtcbiAgICBjb25zdCBlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICBlLnNldE1vbnRoKDApLCBlLnNldERhdGUoMSksIGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIGUuc2V0RGF0ZSgxKSwgZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICAgIGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGwoZSk7XG4gIH1cbiAgZW5kT2YodCkge1xuICAgIGNvbnN0IGUgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyXCI6XG4gICAgICAgIGUuc2V0TW9udGgoMTEpLCBlLnNldERhdGUoMzEpLCBlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIGUuc2V0RGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZShlLmdldEZ1bGxZZWFyKCksIGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKVxuICAgICAgICApLCBlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRheVwiOlxuICAgICAgICBlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGwoZSk7XG4gIH1cbiAgYWRkKHQsIGUpIHtcbiAgICBjb25zdCBhID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICBhLnNldEZ1bGxZZWFyKGEuZ2V0RnVsbFllYXIoKSArIHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtb250aFwiOlxuICAgICAgICBhLnNldE1vbnRoKGEuZ2V0TW9udGgoKSArIHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkYXlcIjpcbiAgICAgICAgYS5zZXREYXRlKGEuZ2V0RGF0ZSgpICsgdCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGwoYSk7XG4gIH1cbiAgc3VidHJhY3QodCwgZSkge1xuICAgIHJldHVybiB0aGlzLmFkZCgtdCwgZSk7XG4gIH1cbiAgZm9ybWF0KHQpIHtcbiAgICBjb25zdCBlID0ge1xuICAgICAgWVlZWTogdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgTU06ICh0aGlzLl9kYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICAgIEREOiB0aGlzLl9kYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICAgIEhIOiB0aGlzLl9kYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIiksXG4gICAgICBtbTogdGhpcy5fZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIiksXG4gICAgICBzczogdGhpcy5fZGF0ZS5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIiksXG4gICAgICBkZGRkOiBsLmRheXNPZldlZWtbdGhpcy5fZGF0ZS5nZXREYXkoKV1cbiAgICB9O1xuICAgIHJldHVybiB0LnJlcGxhY2UoL1lZWVl8TU18RER8SEh8bW18c3N8ZGRkZC9nLCAoYSkgPT4gZVthXS50b1N0cmluZygpKTtcbiAgfVxuICB5ZWFyKHQpIHtcbiAgICBpZiAodCA9PT0gdm9pZCAwKSByZXR1cm4gdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IGUgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICByZXR1cm4gZS5zZXRGdWxsWWVhcih0KSwgbmV3IGwoZSk7XG4gIH1cbiAgbW9udGgodCkge1xuICAgIGlmICh0ID09PSB2b2lkIDApIHJldHVybiB0aGlzLl9kYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgIHJldHVybiBlLnNldE1vbnRoKHQpLCBuZXcgbChlKTtcbiAgfVxuICBkYXRlKHQpIHtcbiAgICBpZiAodCA9PT0gdm9pZCAwKSByZXR1cm4gdGhpcy5fZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgIHJldHVybiBlLnNldERhdGUodCksIG5ldyBsKGUpO1xuICB9XG4gIGRheSh0KSB7XG4gICAgaWYgKHQgPT09IHZvaWQgMClcbiAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldERheSgpO1xuICAgIHtcbiAgICAgIGNvbnN0IGUgPSB0aGlzLl9kYXRlLmdldERheSgpLCBhID0gdCAtIGUsIG8gPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICAgIHJldHVybiBvLnNldERhdGUodGhpcy5fZGF0ZS5nZXREYXRlKCkgKyBhKSwgbmV3IGwobyk7XG4gICAgfVxuICB9XG4gIGlzQmVmb3JlKHQpIHtcbiAgICBjb25zdCBlID0gbmV3IGwodCkudG9EYXRlKCk7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0VGltZSgpIDwgZS5nZXRUaW1lKCk7XG4gIH1cbiAgaXNBZnRlcih0KSB7XG4gICAgY29uc3QgZSA9IG5ldyBsKHQpLnRvRGF0ZSgpO1xuICAgIHJldHVybiB0aGlzLl9kYXRlLmdldFRpbWUoKSA+IGUuZ2V0VGltZSgpO1xuICB9XG4gIGlzU2FtZSh0LCBlID0gXCJkYXlcIikge1xuICAgIGNvbnN0IGEgPSBuZXcgbCh0KS50b0RhdGUoKTtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyXCI6XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCkgPT09IGEuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNhc2UgXCJtb250aFwiOlxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpID09PSBhLmdldEZ1bGxZZWFyKCkgJiYgdGhpcy5fZGF0ZS5nZXRNb250aCgpID09PSBhLmdldE1vbnRoKCk7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpID09PSBhLmdldEZ1bGxZZWFyKCkgJiYgdGhpcy5fZGF0ZS5nZXRNb250aCgpID09PSBhLmdldE1vbnRoKCkgJiYgdGhpcy5fZGF0ZS5nZXREYXRlKCkgPT09IGEuZ2V0RGF0ZSgpO1xuICAgIH1cbiAgfVxuICBpc0JldHdlZW4odCwgZSwgYSkge1xuICAgIGNvbnN0IG8gPSBuZXcgbCh0KS5zdGFydE9mKGEpLnRvRGF0ZSgpLCBzID0gbmV3IGwoZSkuZW5kT2YoYSkudG9EYXRlKCksIG4gPSB0aGlzLnRvRGF0ZSgpO1xuICAgIHJldHVybiBuID49IG8gJiYgbiA8PSBzO1xuICB9XG59O1xudShsLCBcImRheXNPZldlZWtcIiwgW1xuICBcIlN1bmRheVwiLFxuICBcIk1vbmRheVwiLFxuICBcIlR1ZXNkYXlcIixcbiAgXCJXZWRuZXNkYXlcIixcbiAgXCJUaHVyc2RheVwiLFxuICBcIkZyaWRheVwiLFxuICBcIlNhdHVyZGF5XCJcbl0pO1xubGV0IFMgPSBsO1xuY29uc3QgaCA9IChyKSA9PiBuZXcgUyhyKSwgdyA9IChyKSA9PiBoKHIpLnN0YXJ0T2YoXCJkYXlcIiksIFkgPSAociwgdCkgPT4ge1xuICByID0gdyhyKSwgdCA9IHcodCk7XG4gIGNvbnN0IGUgPSB0LmRpZmYociwgXCJkYXlcIik7XG4gIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBlICsgMSB9LCAoYSwgbykgPT4gci5hZGQobywgXCJkYXlcIikpO1xufSwgVyA9IHtcbiAgLy8gMTk5OSDlhYPml6YgMSDlpKnjgIHmmKXoioLjgIHlirPliqjoioLjgIHlm73luoboioLmlL7lgYcgM+WkqVxuICAxOTk5OiB7XG4gICAgXCJOZXcgWWVhcidzIERheSzlhYPml6ZcIjogMSxcbiAgICBcIlNwcmluZyBGZXN0aXZhbCzmmKXoioJcIjogMyxcbiAgICBcIkxhYm91ciBEYXks5Yqz5Yqo6IqCXCI6IDMsXG4gICAgXCJOYXRpb25hbCBEYXks5Zu95bqG6IqCXCI6IDNcbiAgfSxcbiAgLy8gMjAwOCDlirPliqjoioLmlLnkuLogMSDlpKnvvIzlop7liqDmuIXmmI7jgIHnq6/ljYjjgIHkuK3np4vlkIQgMSDlpKlcbiAgMjAwODoge1xuICAgIFwiVG9tYi1zd2VlcGluZyBEYXks5riF5piOXCI6IDEsXG4gICAgXCJMYWJvdXIgRGF5LOWKs+WKqOiKglwiOiAxLFxuICAgIFwiRHJhZ29uIEJvYXQgRmVzdGl2YWws56uv5Y2IXCI6IDEsXG4gICAgXCJNaWQtYXV0dW1uIEZlc3RpdmFsLOS4reeni1wiOiAxXG4gIH0sXG4gIC8vIDIwMTQg5pil6IqC5YmU6Zmk6Zmk5aSV77yM5pS55Li65Yid5LiA44CB5LqM44CB5LiJ77yM5L6d5penIDMg5aSpXG4gIC8vIDIwMTUg5aKe5YqgIOS4reWbveS6uuawkeaKl+aXpeaImOS6ieaaqOS4lueVjOWPjeazleilv+aWr+aImOS6ieiDnOWIqTcw5ZGo5bm057qq5b+15pelIDEg5aSpXG4gIDIwMTU6IHtcbiAgICBcIkFudGktRmFzY2lzdCA3MHRoIERheSzkuK3lm73kurrmsJHmipfml6XmiJjkuonmmqjkuJbnlYzlj43ms5Xopb/mlq/miJjkuonog5zliKk3MOWRqOW5tOe6quW/teaXpVwiOiAxXG4gIH0sXG4gIC8vIDIwMjUg5pil6IqC5ZKM5Yqz5Yqo6IqCIOWQhOWinuWKoCAxIOWkqVxuICAyMDI1OiB7XG4gICAgXCJTcHJpbmcgRmVzdGl2YWws5pil6IqCXCI6IDQsXG4gICAgXCJMYWJvdXIgRGF5LOWKs+WKqOiKglwiOiAyXG4gIH1cbn07XG5jbGFzcyB6IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdSh0aGlzLCBcImRheURldGFpbHNcIiwge30pO1xuICAgIHUodGhpcywgXCJob2xpZGF5c1wiLCB7fSk7XG4gICAgdSh0aGlzLCBcIndvcmtkYXlzXCIsIHt9KTtcbiAgICB1KHRoaXMsIFwiaW5MaWV1RGF5c1wiLCB7fSk7XG4gIH1cbiAgLyoqIHllYXIgYXQgKi9cbiAgeSh0KSB7XG4gICAgcmV0dXJuIHRoaXMuZGF5RGV0YWlscy55ZWFyID0gdCwgdGhpcztcbiAgfVxuICAvKiog5p+l6K+i5p+Q5bm0IOiKguWBh+aXpeWkqeaVsCAqL1xuICBnZXRIb2xpZGF5RGF5cyh0LCBlKSB7XG4gICAgbGV0IGEgPSAwO1xuICAgIGZvciAoY29uc3QgW28sIHNdIG9mIE9iamVjdC5lbnRyaWVzKFcpKSB7XG4gICAgICBpZiAocGFyc2VJbnQobykgPiB0KSBicmVhaztcbiAgICAgIHNbZV0gIT09IHZvaWQgMCAmJiAoYSA9IHNbZV0pO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfVxuICBtYXJrKHQpIHtcbiAgICByZXR1cm4gdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkgPSB0LCB0aGlzO1xuICB9XG4gIHNhdmUodCwgZSwgYSkge1xuICAgIGlmICghdGhpcy5kYXlEZXRhaWxzLnllYXIpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzaG91bGQgc2V0IHllYXIgYmVmb3JlIHNhdmluZyBob2xpZGF5XCIpO1xuICAgIGlmICghdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzaG91bGQgc2V0IGhvbGlkYXkgYmVmb3JlIHNhdmluZyBob2xpZGF5XCIpO1xuICAgIHRoaXMuZGF5RGV0YWlscy5tb250aCA9IHQsIHRoaXMuZGF5RGV0YWlscy5kYXkgPSBlLCB0aGlzLmRheURldGFpbHMuZGF5VHlwZSA9IGE7XG4gICAgY29uc3QgbyA9IGgoYCR7dGhpcy5kYXlEZXRhaWxzLnllYXJ9LSR7dH0tJHtlfWApLmZvcm1hdChcbiAgICAgIFwiWVlZWS1NTS1ERFwiXG4gICAgKSwgcyA9IHRoaXMuZ2V0SG9saWRheURheXMoXG4gICAgICB0aGlzLmRheURldGFpbHMueWVhcixcbiAgICAgIHRoaXMuZGF5RGV0YWlscy5ob2xpZGF5XG4gICAgKSwgbiA9IGAke3RoaXMuZGF5RGV0YWlscy5ob2xpZGF5fSwke3N9YDtcbiAgICByZXR1cm4gYSA9PT0gMiA/IHRoaXMuaG9saWRheXNbb10gPSBuIDogYSA9PT0gMSA/IHRoaXMud29ya2RheXNbb10gPSBuIDogYSA9PT0gMyAmJiAodGhpcy5pbkxpZXVEYXlzW29dID0gbiksIHRoaXM7XG4gIH1cbiAgdG8odCwgZSkge1xuICAgIGlmICghdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkgfHwgIXRoaXMuZGF5RGV0YWlscy55ZWFyIHx8ICF0aGlzLmRheURldGFpbHMubW9udGggfHwgIXRoaXMuZGF5RGV0YWlscy5kYXkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzaG91bGQgc2V0IHllYXIvbW9udGgvZGF5IGJlZm9yZSBzYXZpbmcgaG9saWRheSByYW5nZVwiKTtcbiAgICBjb25zdCBhID0gaChcbiAgICAgIGAke3RoaXMuZGF5RGV0YWlscy55ZWFyfS0ke3RoaXMuZGF5RGV0YWlscy5tb250aH0tJHt0aGlzLmRheURldGFpbHMuZGF5fWBcbiAgICApLCBvID0gaChgJHt0aGlzLmRheURldGFpbHMueWVhcn0tJHt0fS0ke2V9YCk7XG4gICAgaWYgKG8uaXNCZWZvcmUoYSkgfHwgby5pc1NhbWUoYSkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbmQgZGF0ZSBzaG91bGQgYmUgYWZ0ZXIgc3RhcnQgZGF0ZVwiKTtcbiAgICBjb25zdCBzID0gdGhpcy5nZXRIb2xpZGF5RGF5cyhcbiAgICAgIHRoaXMuZGF5RGV0YWlscy55ZWFyLFxuICAgICAgdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXlcbiAgICApLCBuID0gYCR7dGhpcy5kYXlEZXRhaWxzLmhvbGlkYXl9LCR7c31gLCBkID0gby5kaWZmKGEsIFwiZGF5XCIpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGQ7IGkrKykge1xuICAgICAgY29uc3QgXyA9IGEuYWRkKGksIFwiZGF5XCIpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgICB0aGlzLmRheURldGFpbHMuZGF5VHlwZSA9PT0gMiA/IHRoaXMuaG9saWRheXNbX10gPSBuIDogdGhpcy5kYXlEZXRhaWxzLmRheVR5cGUgPT09IDEgPyB0aGlzLndvcmtkYXlzW19dID0gbiA6IHRoaXMuZGF5RGV0YWlscy5kYXlUeXBlID09PSAzICYmICh0aGlzLmluTGlldURheXNbX10gPSBuKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqIHdvcmsgZGF5ICovXG4gIHcodCwgZSkge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgZSxcbiAgICAgIDFcbiAgICAgIC8qIFdvcmtkYXkgKi9cbiAgICApO1xuICB9XG4gIC8qKiByZXN0ICovXG4gIHIodCwgZSkge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgZSxcbiAgICAgIDJcbiAgICAgIC8qIEhvbGlkYXkgKi9cbiAgICApO1xuICB9XG4gIC8qKiBpbi1saWV1ICovXG4gIGkodCwgZSkge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgZSxcbiAgICAgIDNcbiAgICAgIC8qIEluTGlldSAqL1xuICAgICk7XG4gIH1cbiAgLyoqIE5ldyBZZWFyJ3MgRGF5IOWFg+aXpiAqL1xuICBueSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJOZXcgWWVhcidzIERheSzlhYPml6ZcIlxuICAgICAgLyogTlkgKi9cbiAgICApO1xuICB9XG4gIC8qKiBTcHJpbmcgRmVzdGl2YWwg5pil6IqCICovXG4gIHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiU3ByaW5nIEZlc3RpdmFsLOaYpeiKglwiXG4gICAgICAvKiBTICovXG4gICAgKTtcbiAgfVxuICAvKiogVG9tYi1zd2VlcGluZyBEYXkg5riF5piOICovXG4gIHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiVG9tYi1zd2VlcGluZyBEYXks5riF5piOXCJcbiAgICAgIC8qIFQgKi9cbiAgICApO1xuICB9XG4gIC8qKiBMYWJvdXIgRGF5IOS6lOS4gCAqL1xuICBsKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIkxhYm91ciBEYXks5Yqz5Yqo6IqCXCJcbiAgICAgIC8qIEwgKi9cbiAgICApO1xuICB9XG4gIC8qKiBEcmFnb24gQm9hdCBGZXN0aXZhbCDnq6/ljYggKi9cbiAgZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJEcmFnb24gQm9hdCBGZXN0aXZhbCznq6/ljYhcIlxuICAgICAgLyogRCAqL1xuICAgICk7XG4gIH1cbiAgLyoqIE5hdGlvbmFsIERheSDlm73luoboioIgKi9cbiAgbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJOYXRpb25hbCBEYXks5Zu95bqG6IqCXCJcbiAgICAgIC8qIE4gKi9cbiAgICApO1xuICB9XG4gIC8qKiBNaWQtYXV0dW1uIEZlc3RpdmFsIOS4reeniyAqL1xuICBtKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIk1pZC1hdXR1bW4gRmVzdGl2YWws5Lit56eLXCJcbiAgICAgIC8qIE0gKi9cbiAgICApO1xuICB9XG4gIC8qKiBBbnRpLUZhc2Npc3QgNzB0aCBEYXkg5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6UgKi9cbiAgYSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJBbnRpLUZhc2Npc3QgNzB0aCBEYXks5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6VcIlxuICAgICAgLyogQSAqL1xuICAgICk7XG4gIH1cbn1cbmNvbnN0IFYgPSAoKSA9PiB7XG4gIGNvbnN0IHIgPSBuZXcgeigpO1xuICByZXR1cm4gci55KDIwMjYpLm55KCkucigxLCAxKS50bygxLCAzKS53KDEsIDQpLmkoMSwgMikucygpLnIoMiwgMTUpLnRvKDIsIDIzKS53KDIsIDE0KS53KDIsIDI4KS5pKDIsIDIwKS5pKDIsIDIzKS50KCkucig0LCA0KS50byg0LCA2KS5sKCkucig1LCAxKS50byg1LCA1KS53KDUsIDkpLmkoNSwgNSkuZCgpLnIoNiwgMTkpLnRvKDYsIDIxKS5tKCkucig5LCAyNSkudG8oOSwgMjcpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyMCkudygxMCwgMTApLmkoMTAsIDYpLmkoMTAsIDcpLCByLnkoMjAyNSkubnkoKS5yKDEsIDEpLnMoKS5yKDEsIDI4KS50bygyLCA0KS53KDEsIDI2KS53KDIsIDgpLmkoMiwgMykuaSgyLCA0KS50KCkucig0LCA0KS50byg0LCA2KS5sKCkucig1LCAxKS50byg1LCA1KS53KDQsIDI3KS5pKDUsIDUpLmQoKS5yKDUsIDMxKS50byg2LCAyKS5uKCkucigxMCwgMSkudG8oMTAsIDgpLncoOSwgMjgpLncoMTAsIDExKS5pKDEwLCA3KS5pKDEwLCA4KS5tKCkucigxMCwgNiksIHIueSgyMDI0KS5ueSgpLnIoMSwgMSkucygpLnIoMiwgMTApLnRvKDIsIDE3KS53KDIsIDQpLncoMiwgMTgpLmkoMiwgMTUpLnRvKDIsIDE2KS50KCkucig0LCA0KS50byg0LCA2KS53KDQsIDcpLmkoNCwgNSkubCgpLnIoNSwgMSkudG8oNSwgNSkudyg0LCAyOCkudyg1LCAxMSkuaSg1LCAyKS50byg1LCAzKS5kKCkucig2LCAxMCkubSgpLnIoOSwgMTUpLnRvKDksIDE3KS53KDksIDE0KS5pKDksIDE2KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjkpLncoMTAsIDEyKS5pKDEwLCA0KS5pKDEwLCA3KSwgci55KDIwMjMpLm55KCkucigxLCAxKS50bygxLCAyKS5zKCkucigxLCAyMSkudG8oMSwgMjcpLncoMSwgMjgpLnRvKDEsIDI5KS5pKDEsIDI2KS50bygxLCAyNykudCgpLnIoNCwgNSkubCgpLnIoNCwgMjkpLnRvKDUsIDMpLncoNCwgMjMpLncoNSwgNikuaSg1LCAyKS50byg1LCAzKS5kKCkucig2LCAyMikudG8oNiwgMjQpLncoNiwgMjUpLmkoNiwgMjMpLm0oKS5yKDksIDI5KS5uKCkucig5LCAzMCkudG8oMTAsIDYpLncoMTAsIDcpLnRvKDEwLCA4KS5pKDEwLCA1KS50bygxMCwgNiksIHIueSgyMDIyKS5ueSgpLnIoMSwgMSkudG8oMSwgMykucygpLnIoMSwgMzEpLnRvKDIsIDYpLncoMSwgMjkpLncoMSwgMzApLmkoMiwgMykudG8oMiwgNCkudCgpLnIoNCwgMykudG8oNCwgNSkudyg0LCAyKS5pKDQsIDQpLmwoKS5yKDQsIDMwKS50byg1LCA0KS53KDQsIDI0KS53KDUsIDcpLmkoNSwgMykudG8oNSwgNCkuZCgpLnIoNiwgMykudG8oNiwgNSkubSgpLnIoOSwgMTApLnRvKDksIDEyKS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoMTAsIDgpLncoMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KS5ueSgpLnIoMTIsIDMxKSwgci55KDIwMjEpLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCAxMSkudG8oMiwgMTcpLncoMiwgNykudygyLCAyMCkuaSgyLCAxNikudG8oMiwgMTcpLnQoKS5yKDQsIDMpLnRvKDQsIDUpLmwoKS5yKDUsIDEpLnRvKDUsIDUpLncoNCwgMjUpLncoNSwgOCkuaSg1LCA0KS50byg1LCA1KS5kKCkucig2LCAxMikudG8oNiwgMTQpLm0oKS5yKDksIDE5KS50byg5LCAyMSkudyg5LCAxOCkuaSg5LCAyMCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI2KS53KDEwLCA5KS5pKDEwLCA2KS50bygxMCwgNyksIHIueSgyMDIwKS5ueSgpLnIoMSwgMSkucygpLnIoMSwgMjQpLnRvKDIsIDIpLncoMSwgMTkpLmkoMSwgMjkpLnQoKS5yKDQsIDQpLnRvKDQsIDYpLmwoKS5yKDUsIDEpLnRvKDUsIDUpLncoNCwgMjYpLncoNSwgOSkuaSg1LCA0KS50byg1LCA1KS5kKCkucig2LCAyNSkudG8oNiwgMjcpLncoNiwgMjgpLmkoNiwgMjYpLm4oKS5yKDEwLCAxKS50bygxMCwgOCkudyg5LCAyNykudygxMCwgMTApLmkoMTAsIDcpLnRvKDEwLCA4KSwgci55KDIwMTkpLm55KCkucigxLCAxKS5zKCkucigyLCA0KS50bygyLCAxMCkudygyLCAyKS50bygyLCAzKS5pKDIsIDQpLmkoMiwgOCkudCgpLnIoNCwgNSkudG8oNCwgNykubCgpLnIoNSwgMSkudG8oNSwgNCkudyg0LCAyOCkudyg1LCA1KS5pKDUsIDIpLmkoNSwgMykuZCgpLnIoNiwgNykudG8oNiwgOSkubSgpLnIoOSwgMTMpLnRvKDksIDE1KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjkpLncoMTAsIDEyKS5pKDEwLCA0KS5pKDEwLCA3KSwgci55KDIwMTgpLm55KCkucigxLCAxKS5zKCkucigyLCAxNSkudG8oMiwgMjEpLncoMiwgMTEpLncoMiwgMjQpLmkoMiwgMTkpLnRvKDIsIDIxKS50KCkucig0LCA1KS50byg0LCA3KS53KDQsIDgpLmkoNCwgNikubCgpLnIoNCwgMjkpLnRvKDUsIDEpLncoNCwgMjgpLmkoNCwgMzApLmQoKS5yKDYsIDE4KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjkpLnRvKDksIDMwKS5pKDEwLCA0KS50bygxMCwgNSkubSgpLnIoOSwgMjQpLm55KCkucigxMiwgMzApLnRvKDEyLCAzMSkudygxMiwgMjkpLmkoMTIsIDMxKSwgci55KDIwMTcpLm55KCkucigxLCAxKS50bygxLCAyKS5zKCkucigxLCAyNykudG8oMiwgMikudygxLCAyMikudygyLCA0KS5pKDIsIDEpLnRvKDIsIDIpLnQoKS5yKDQsIDIpLnRvKDQsIDQpLncoNCwgMSkuaSg0LCAzKS5sKCkucig1LCAxKS5kKCkucig1LCAyOCkudG8oNSwgMzApLncoNSwgMjcpLmkoNSwgMjkpLm4oKS5yKDEwLCAxKS50bygxMCwgOCkudyg5LCAzMCkuaSgxMCwgNikubSgpLnIoMTAsIDQpLCByLnkoMjAxNikubnkoKS5yKDEsIDEpLnMoKS5yKDIsIDcpLnRvKDIsIDEzKS53KDIsIDYpLncoMiwgMTQpLmkoMiwgMTEpLnRvKDIsIDEyKS50KCkucig0LCA0KS5sKCkucig1LCAxKS50byg1LCAyKS5kKCkucig2LCA5KS50byg2LCAxMSkudyg2LCAxMikuaSg2LCAxMCkubSgpLnIoOSwgMTUpLnRvKDksIDE3KS53KDksIDE4KS5pKDksIDE2KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoMTAsIDgpLnRvKDEwLCA5KS5pKDEwLCA2KS50bygxMCwgNyksIHIueSgyMDE1KS5ueSgpLnIoMSwgMSkudG8oMSwgMykudygxLCA0KS5pKDEsIDIpLnMoKS5yKDIsIDE4KS50bygyLCAyNCkudygyLCAxNSkudygyLCAyOCkuaSgyLCAyMykudG8oMiwgMjQpLnQoKS5yKDQsIDUpLnRvKDQsIDYpLmwoKS5yKDUsIDEpLmQoKS5yKDYsIDIwKS5yKDYsIDIyKS5tKCkucig5LCAyNykubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCAxMCkuaSgxMCwgNykuYSgpLnIoOSwgMykudG8oOSwgNCkudyg5LCA2KS5pKDksIDQpLCByLnkoMjAxNCkubnkoKS5yKDEsIDEpLnMoKS5yKDEsIDMxKS50bygyLCA2KS53KDEsIDI2KS53KDIsIDgpLmkoMiwgNSkudG8oMiwgNikudCgpLnIoNCwgNSkudG8oNCwgNykubCgpLnIoNSwgMSkudG8oNSwgMykudyg1LCA0KS5pKDUsIDIpLmQoKS5yKDYsIDIpLm0oKS5yKDksIDgpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyOCkudygxMCwgMTEpLmkoMTAsIDYpLnRvKDEwLCA3KSwgci55KDIwMTMpLm55KCkucigxLCAxKS50bygxLCAzKS53KDEsIDUpLnRvKDEsIDYpLmkoMSwgMikudG8oMSwgMykucygpLnIoMiwgOSkudG8oMiwgMTUpLncoMiwgMTYpLnRvKDIsIDE3KS5pKDIsIDE0KS50bygyLCAxNSkudCgpLnIoNCwgNCkudG8oNCwgNikudyg0LCA3KS5pKDQsIDUpLmwoKS5yKDQsIDI5KS50byg1LCAxKS53KDQsIDI3KS50byg0LCAyOCkuaSg0LCAyOSkudG8oNCwgMzApLmQoKS5yKDYsIDEwKS50byg2LCAxMikudyg2LCA4KS50byg2LCA5KS5pKDYsIDEwKS50byg2LCAxMSkubSgpLnIoOSwgMTkpLnRvKDksIDIxKS53KDksIDIyKS5pKDksIDIwKS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjkpLncoMTAsIDEyKS5pKDEwLCA0KS5pKDEwLCA3KSwgci55KDIwMTIpLm55KCkucigxLCAxKS50bygxLCAzKS5pKDEsIDMpLnMoKS5yKDEsIDIyKS50bygxLCAyOCkudygxLCAyMSkudygxLCAyOSkuaSgxLCAyNikudG8oMSwgMjcpLnQoKS5yKDQsIDIpLnRvKDQsIDQpLncoMywgMzEpLncoNCwgMSkuaSg0LCAyKS50byg0LCAzKS5sKCkucig0LCAyOSkudG8oNSwgMSkudyg0LCAyOCkuaSg0LCAzMCkuZCgpLnIoNiwgMjIpLnIoNiwgMjQpLm0oKS5yKDksIDMwKS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjkpLmkoMTAsIDUpLCByLnkoMjAxMSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDIsIDIpLnRvKDIsIDgpLncoMSwgMzApLncoMiwgMTIpLmkoMiwgNykudG8oMiwgOCkudCgpLnIoNCwgMykudG8oNCwgNSkudyg0LCAyKS5pKDQsIDQpLmwoKS5yKDQsIDMwKS50byg1LCAyKS5kKCkucig2LCA0KS5yKDYsIDYpLm0oKS5yKDksIDEwKS50byg5LCAxMikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA4KS50bygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLm55KCkudygxMiwgMzEpLCByLnkoMjAxMCkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDIsIDEzKS50bygyLCAxOSkudygyLCAyMCkudG8oMiwgMjEpLmkoMiwgMTgpLnRvKDIsIDE5KS50KCkucig0LCAzKS50byg0LCA1KS5sKCkucig1LCAxKS50byg1LCAzKS5kKCkucig2LCAxNCkudG8oNiwgMTYpLncoNiwgMTIpLnRvKDYsIDEzKS5pKDYsIDE0KS50byg2LCAxNSkubSgpLnIoOSwgMjIpLnRvKDksIDI0KS53KDksIDE5KS53KDksIDI1KS5pKDksIDIzKS50byg5LCAyNCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI2KS53KDEwLCA5KS5pKDEwLCA2KS50bygxMCwgNyksIHIueSgyMDA5KS5ueSgpLnIoMSwgMSkudG8oMSwgMykudygxLCA0KS5pKDEsIDIpLnMoKS5yKDEsIDI1KS50bygxLCAzMSkudygxLCAyNCkudygyLCAxKS5pKDEsIDI5KS50bygxLCAzMCkudCgpLnIoNCwgNCkudG8oNCwgNikubCgpLnIoNSwgMSkudG8oNSwgMykuZCgpLnIoNSwgMjgpLnRvKDUsIDMwKS53KDUsIDMxKS5pKDUsIDI5KS5uKCkucigxMCwgMSkudG8oMTAsIDgpLncoOSwgMjcpLncoMTAsIDEwKS5pKDEwLCA3KS50bygxMCwgOCkubSgpLnIoMTAsIDMpLCByLnkoMjAwOCkubnkoKS5yKDEsIDEpLnMoKS5yKDIsIDYpLnRvKDIsIDEyKS53KDIsIDIpLnRvKDIsIDMpLmkoMiwgMTEpLnRvKDIsIDEyKS50KCkucig0LCA0KS50byg0LCA2KS5sKCkucig1LCAxKS50byg1LCAzKS53KDUsIDQpLmkoNSwgMikuZCgpLnIoNiwgNykudG8oNiwgOSkubSgpLnIoOSwgMTMpLnRvKDksIDE1KS5uKCkucig5LCAyOSkudG8oMTAsIDUpLncoOSwgMjcpLnRvKDksIDI4KS5pKDksIDI5KS50byg5LCAzMCksIHIueSgyMDA3KS5ueSgpLnIoMSwgMSkudG8oMSwgMykuaSgxLCAyKS50bygxLCAzKS5zKCkucigyLCAxOCkudG8oMiwgMjQpLncoMiwgMTcpLncoMiwgMjUpLmkoMiwgMjIpLnRvKDIsIDIzKS5sKCkucig1LCAxKS50byg1LCA3KS53KDQsIDI4KS50byg0LCAyOSkuaSg1LCA0KS5pKDUsIDcpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyOSkudG8oOSwgMzApLmkoMTAsIDQpLnRvKDEwLCA1KS5ueSgpLnIoMTIsIDMwKS50bygxMiwgMzEpLncoMTIsIDI5KS5pKDEyLCAzMSksIHIueSgyMDA2KS5ueSgpLnIoMSwgMSkudG8oMSwgMykucygpLnIoMSwgMjkpLnRvKDIsIDQpLncoMSwgMjgpLncoMiwgNSkuaSgyLCAyKS50bygyLCAzKS5sKCkucig1LCAxKS50byg1LCA3KS53KDQsIDI5KS50byg0LCAzMCkuaSg1LCA0KS50byg1LCA1KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMzApLncoMTAsIDgpLmkoMTAsIDUpLnRvKDEwLCA2KS5ueSgpLncoMTIsIDMwKS50bygxMiwgMzEpLCByLnkoMjAwNSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDIsIDkpLnRvKDIsIDE1KS53KDIsIDUpLnRvKDIsIDYpLmkoMiwgMTQpLnRvKDIsIDE1KS5sKCkucig1LCAxKS50byg1LCA3KS53KDQsIDMwKS53KDUsIDgpLmkoNSwgNSkudG8oNSwgNikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA4KS50bygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAwNCkubnkoKS5yKDEsIDEpLnMoKS5yKDEsIDIyKS50bygxLCAyOCkudygxLCAxNykudG8oMSwgMTgpLmkoMSwgMjcpLnRvKDEsIDI4KS5sKCkucig1LCAxKS50byg1LCA3KS53KDUsIDgpLnRvKDUsIDkpLmkoNSwgNikudG8oNSwgNykubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA5KS50bygxMCwgMTApLmkoMTAsIDYpLnRvKDEwLCA3KSwge1xuICAgIGhvbGlkYXlzOiByLmhvbGlkYXlzLFxuICAgIHdvcmtkYXlzOiByLndvcmtkYXlzLFxuICAgIGluTGlldURheXM6IHIuaW5MaWV1RGF5c1xuICB9O1xufSwgeyBob2xpZGF5czogTSwgd29ya2RheXM6IGssIGluTGlldURheXM6IFogfSA9IFYoKSwgYyA9IChyKSA9PiB7XG4gIGNvbnN0IHQgPSB3KHIpO1xuICBpZiAoIXQuaXNWYWxpZCgpKVxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGB1bnN1cHBvcnRlZCB0eXBlICR7dHlwZW9mIHJ9LCBleHBlY3RlZCB0eXBlIGlzIERhdGUgb3IgRGF5anNgXG4gICAgKTtcbiAgcmV0dXJuIHQ7XG59LCBUID0gKHIpID0+ICFmKHIpLCBmID0gKHIpID0+IHtcbiAgY29uc3QgdCA9IGMociksIGUgPSB0LmRheSgpLCBhID0gdC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICByZXR1cm4gISEoa1thXSB8fCBlID49IDEgJiYgZSA8PSA1ICYmICFNW2FdKTtcbn0sIEcgPSAocikgPT4ge1xuICBjb25zdCB0ID0gYyhyKTtcbiAgcmV0dXJuICEhWlt0LmZvcm1hdChcIllZWVktTU0tRERcIildO1xufSwgSiA9IChyKSA9PiB7XG4gIGNvbnN0IHQgPSBjKHIpLCBlID0gdC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICBpZiAoa1tlXSlcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogZSxcbiAgICAgIHdvcms6ICEwLFxuICAgICAgbmFtZToga1tlXVxuICAgIH07XG4gIGlmIChNW2VdKVxuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiBlLFxuICAgICAgd29yazogITEsXG4gICAgICBuYW1lOiBNW2VdXG4gICAgfTtcbiAge1xuICAgIGNvbnN0IGEgPSB0LmRheSgpO1xuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiBlLFxuICAgICAgd29yazogYSAhPT0gMCAmJiBhICE9PSA2LFxuICAgICAgbmFtZTogdC5mb3JtYXQoXCJkZGRkXCIpXG4gICAgfTtcbiAgfVxufSwgSyA9IChyLCB0LCBlID0gITApID0+IHtcbiAgY29uc3QgYSA9IGMociksIG8gPSBjKHQpO1xuICByZXR1cm4gZSA/IFkoYSwgbykuZmlsdGVyKFQpLm1hcCgocykgPT4gcy5mb3JtYXQoXCJZWVlZLU1NLUREXCIpKSA6IFkoYSwgbykuZmlsdGVyKChzKSA9PiBNW3MuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKV0pLm1hcCgocykgPT4gcy5mb3JtYXQoXCJZWVlZLU1NLUREXCIpKTtcbn0sIFEgPSAociwgdCwgZSA9ICEwKSA9PiB7XG4gIGNvbnN0IGEgPSBjKHIpLCBvID0gYyh0KTtcbiAgcmV0dXJuIGUgPyBZKGEsIG8pLmZpbHRlcihmKS5tYXAoKHMpID0+IHMuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSkgOiBZKGEsIG8pLmZpbHRlcigocykgPT4gZihzKSAmJiBzLmRheSgpID49IDEgJiYgcy5kYXkoKSA8PSA1KS5tYXAoKHMpID0+IHMuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSk7XG59LCBYID0gKHIgPSAwLCB0ID0gaCgpKSA9PiB7XG4gIGlmICh0ID0gdyh0KSwgciA9PT0gMCkge1xuICAgIGlmIChmKHQpKVxuICAgICAgcmV0dXJuIHQuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICByID0gMTtcbiAgfVxuICBjb25zdCBlID0gciA+IDAgPyAxIDogLTE7XG4gIGxldCBhID0gTWF0aC5hYnMocik7XG4gIGZvciAoOyBhID4gMDsgKVxuICAgIHQgPSB0LmFkZChlLCBcImRheVwiKSwgZih0KSAmJiBhLS07XG4gIHJldHVybiB0LmZvcm1hdChcIllZWVktTU0tRERcIik7XG59LCB0dCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGZpbmRXb3JrZGF5OiBYLFxuICBnZXREYXlEZXRhaWw6IEosXG4gIGdldEhvbGlkYXlzSW5SYW5nZTogSyxcbiAgZ2V0V29ya2RheXNJblJhbmdlOiBRLFxuICBpc0hvbGlkYXk6IFQsXG4gIGlzSW5MaWV1OiBHLFxuICBpc1dvcmtkYXk6IGZcbn0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSksIGV0ID0ge1xuICB0aGVfYmVnaW5uaW5nX29mX3NwcmluZzogWzQuNjI5NSwgMy44N10sXG4gIHJhaW5fd2F0ZXI6IFsxOS40NTk5LCAxOC43M10sXG4gIHRoZV93YWtpbmdfb2ZfaW5zZWN0czogWzYuMzkyNiwgNS42M10sXG4gIHRoZV9zcHJpbmdfZXF1aW5veDogWzIxLjQxNTUsIDIwLjY0Nl0sXG4gIHB1cmVfYnJpZ2h0bmVzczogWzUuNTksIDQuODFdLFxuICBncmFpbl9yYWluOiBbMjAuODg4LCAyMC4xXSxcbiAgdGhlX2JlZ2lubmluZ19vZl9zdW1tZXI6IFs2LjMxOCwgNS41Ml0sXG4gIGxlc3Nlcl9mdWxsbmVzc19vZl9ncmFpbjogWzIxLjg2LCAyMS4wNF0sXG4gIGdyYWluX2luX2JlYXJkOiBbNi41LCA1LjY3OF0sXG4gIHRoZV9zdW1tZXJfc29sc3RpY2U6IFsyMi4yLCAyMS4zN10sXG4gIGxlc3Nlcl9oZWF0OiBbNy45MjgsIDcuMTA4XSxcbiAgZ3JlYXRlcl9oZWF0OiBbMjMuNjUsIDIyLjgzXSxcbiAgdGhlX2JlZ2lubmluZ19vZl9hdXR1bW46IFsyOC4zNSwgNy41XSxcbiAgdGhlX2VuZF9vZl9oZWF0OiBbMjMuOTUsIDIzLjEzXSxcbiAgd2hpdGVfZGV3OiBbOC40NCwgNy42NDZdLFxuICB0aGVfYXV0dW1uX2VxdWlub3g6IFsyMy44MjIsIDIzLjA0Ml0sXG4gIGNvZGVfZGV3OiBbOS4wOTgsIDguMzE4XSxcbiAgZnJvc3RfZGVzY2VudDogWzI0LjIxOCwgMjMuNDM4XSxcbiAgdGhlX2JlZ2lubmluZ19vZl93aW50ZXI6IFs4LjIxOCwgNy40MzhdLFxuICBsZXNzZXJfc25vdzogWzIzLjA4LCAyMi4zNl0sXG4gIGdyZWF0ZXJfc25vdzogWzcuOSwgNy4xOF0sXG4gIHRoZV93aW50ZXJfc29sc3RpY2U6IFsyMi42LCAyMS45NF0sXG4gIGxlc3Nlcl9jb2xkOiBbNi4xMSwgNS40MDU1XSxcbiAgZ3JlYXRlcl9jb2xkOiBbMjAuODQsIDIwLjEyXVxufSwgTyA9IHtcbiAgMTogW1wibGVzc2VyX2NvbGRcIiwgXCJncmVhdGVyX2NvbGRcIl0sXG4gIDI6IFtcInRoZV9iZWdpbm5pbmdfb2Zfc3ByaW5nXCIsIFwicmFpbl93YXRlclwiXSxcbiAgMzogW1widGhlX3dha2luZ19vZl9pbnNlY3RzXCIsIFwidGhlX3NwcmluZ19lcXVpbm94XCJdLFxuICA0OiBbXCJwdXJlX2JyaWdodG5lc3NcIiwgXCJncmFpbl9yYWluXCJdLFxuICA1OiBbXCJ0aGVfYmVnaW5uaW5nX29mX3N1bW1lclwiLCBcImxlc3Nlcl9mdWxsbmVzc19vZl9ncmFpblwiXSxcbiAgNjogW1wiZ3JhaW5faW5fYmVhcmRcIiwgXCJ0aGVfc3VtbWVyX3NvbHN0aWNlXCJdLFxuICA3OiBbXCJsZXNzZXJfaGVhdFwiLCBcImdyZWF0ZXJfaGVhdFwiXSxcbiAgODogW1widGhlX2JlZ2lubmluZ19vZl9hdXR1bW5cIiwgXCJ0aGVfZW5kX29mX2hlYXRcIl0sXG4gIDk6IFtcIndoaXRlX2Rld1wiLCBcInRoZV9hdXR1bW5fZXF1aW5veFwiXSxcbiAgMTA6IFtcImNvZGVfZGV3XCIsIFwiZnJvc3RfZGVzY2VudFwiXSxcbiAgMTE6IFtcInRoZV9iZWdpbm5pbmdfb2Zfd2ludGVyXCIsIFwibGVzc2VyX3Nub3dcIl0sXG4gIDEyOiBbXCJncmVhdGVyX3Nub3dcIiwgXCJ0aGVfd2ludGVyX3NvbHN0aWNlXCJdXG59LCBydCA9IHtcbiAgXCIyMDI2X3JhaW5fd2F0ZXJcIjogLTEsXG4gIFwiMjA4NF90aGVfc3ByaW5nX2VxdWlub3hcIjogMSxcbiAgXCIxOTExX3RoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyXCI6IDEsXG4gIFwiMjAwOF9sZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW5cIjogMSxcbiAgXCIxOTAyX2dyYWluX2luX2JlYXJkXCI6IDEsXG4gIFwiMTkyOF90aGVfc3VtbWVyX3NvbHN0aWNlXCI6IDEsXG4gIFwiMTkyNV9sZXNzZXJfaGVhdFwiOiAxLFxuICBcIjIwMTZfbGVzc2VyX2hlYXRcIjogMSxcbiAgXCIxOTIyX2dyZWF0ZXJfaGVhdFwiOiAxLFxuICBcIjIwMDJfdGhlX2JlZ2lubmluZ19vZl9hdXR1bW5cIjogMSxcbiAgXCIxOTI3X3doaXRlX2Rld1wiOiAxLFxuICBcIjE5NDJfdGhlX2F1dHVtbl9lcXVpbm94XCI6IDEsXG4gIFwiMjA4OV9mcm9zdF9kZXNjZW50XCI6IDEsXG4gIFwiMjA4OV90aGVfYmVnaW5uaW5nX29mX3dpbnRlclwiOiAxLFxuICBcIjE5NzhfbGVzc2VyX3Nub3dcIjogMSxcbiAgXCIxOTU0X2dyZWF0ZXJfc25vd1wiOiAxLFxuICBcIjE5MThfdGhlX3dpbnRlcl9zb2xzdGljZVwiOiAtMSxcbiAgXCIyMDIxX3RoZV93aW50ZXJfc29sc3RpY2VcIjogLTEsXG4gIFwiMTk4Ml9sZXNzZXJfY29sZFwiOiAxLFxuICBcIjIwMTlfbGVzc2VyX2NvbGRcIjogLTEsXG4gIFwiMjAwMF9ncmVhdGVyX2NvbGRcIjogMSxcbiAgXCIyMDgyX2dyZWF0ZXJfY29sZFwiOiAxXG59LCBFID0ge1xuICBsZXNzZXJfY29sZDogXCLlsI/lr5JcIixcbiAgZ3JlYXRlcl9jb2xkOiBcIuWkp+WvklwiLFxuICB0aGVfYmVnaW5uaW5nX29mX3NwcmluZzogXCLnq4vmmKVcIixcbiAgcmFpbl93YXRlcjogXCLpm6jmsLRcIixcbiAgdGhlX3dha2luZ19vZl9pbnNlY3RzOiBcIuaDiuibsFwiLFxuICB0aGVfc3ByaW5nX2VxdWlub3g6IFwi5pil5YiGXCIsXG4gIHB1cmVfYnJpZ2h0bmVzczogXCLmuIXmmI5cIixcbiAgZ3JhaW5fcmFpbjogXCLosLfpm6hcIixcbiAgdGhlX2JlZ2lubmluZ19vZl9zdW1tZXI6IFwi56uL5aSPXCIsXG4gIGxlc3Nlcl9mdWxsbmVzc19vZl9ncmFpbjogXCLlsI/mu6FcIixcbiAgZ3JhaW5faW5fYmVhcmQ6IFwi6IqS56eNXCIsXG4gIHRoZV9zdW1tZXJfc29sc3RpY2U6IFwi5aSP6IezXCIsXG4gIGxlc3Nlcl9oZWF0OiBcIuWwj+aakVwiLFxuICBncmVhdGVyX2hlYXQ6IFwi5aSn5pqRXCIsXG4gIHRoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uOiBcIueri+eni1wiLFxuICB0aGVfZW5kX29mX2hlYXQ6IFwi5aSE5pqRXCIsXG4gIHdoaXRlX2RldzogXCLnmb3pnLJcIixcbiAgdGhlX2F1dHVtbl9lcXVpbm94OiBcIueni+WIhlwiLFxuICBjb2RlX2RldzogXCLlr5LpnLJcIixcbiAgZnJvc3RfZGVzY2VudDogXCLpnJzpmY1cIixcbiAgdGhlX2JlZ2lubmluZ19vZl93aW50ZXI6IFwi56uL5YasXCIsXG4gIGxlc3Nlcl9zbm93OiBcIuWwj+mbqlwiLFxuICBncmVhdGVyX3Nub3c6IFwi5aSn6ZuqXCIsXG4gIHRoZV93aW50ZXJfc29sc3RpY2U6IFwi5Yas6IezXCJcbn0sIEwgPSAociwgdCwgZSkgPT4ge1xuICBjb25zdCBhID0gciA+PSAyZTMgPyAyMSA6IDIwLCBvID0gciAlIDEwMCwgcyA9IDAuMjQyMiwgbiA9IGV0W2VdW2EgPT09IDIxID8gMSA6IDBdO1xuICBsZXQgZCA9IE1hdGguZmxvb3IobyAvIDQpO1xuICBbXG4gICAgXCJsZXNzZXJfY29sZFwiLFxuICAgIFwiZ3JlYXRlcl9jb2xkXCIsXG4gICAgXCJ0aGVfYmVnaW5uaW5nX29mX3NwcmluZ1wiLFxuICAgIFwicmFpbl93YXRlclwiXG4gIF0uaW5jbHVkZXMoZSkgJiYgKGQgPSBNYXRoLmZsb29yKChvIC0gMSkgLyA0KSk7XG4gIGxldCBpID0gTWF0aC5mbG9vcihvICogcyArIG4pIC0gZDtcbiAgY29uc3QgXyA9IHJ0W2Ake3J9XyR7ZX1gXTtcbiAgcmV0dXJuIF8gJiYgKGkgKz0gXyksIGgoYCR7cn0tJHt0fS0ke2l9YCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbn0sIGF0ID0gKHIsIHQpID0+IHtcbiAgY29uc3QgZSA9IFtdO1xuICBsZXQgYSA9IHcocik7XG4gIGNvbnN0IG8gPSB3KHQgfHwgcik7XG4gIGZvciAoOyBhLmlzQmVmb3JlKG8pIHx8IGEuaXNTYW1lKG8pOyApIHtcbiAgICBjb25zdCBzID0gYS55ZWFyKCksIG4gPSBhLm1vbnRoKCkgKyAxO1xuICAgIE9bbl0uZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgY29uc3QgaSA9IGgoTChzLCBuLCBkKSk7XG4gICAgICAoaSAhPSBudWxsICYmIGkuaXNCZWZvcmUobykgfHwgaSAhPSBudWxsICYmIGkuaXNTYW1lKG8pKSAmJiAoaSAhPSBudWxsICYmIGkuaXNBZnRlcihhKSB8fCBpICE9IG51bGwgJiYgaS5pc1NhbWUoYSkpICYmIGUucHVzaCh7XG4gICAgICAgIGRhdGU6IGkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgICAgdGVybTogZCxcbiAgICAgICAgbmFtZTogRVtkXSxcbiAgICAgICAgaW5kZXg6IDFcbiAgICAgIH0pO1xuICAgIH0pLCBhID0gbiA9PT0gMTIgPyBhLmFkZCgxLCBcInllYXJcIikuc3RhcnRPZihcInllYXJcIikgOiBhLmFkZCgxLCBcIm1vbnRoXCIpLnN0YXJ0T2YoXCJtb250aFwiKTtcbiAgfVxuICByZXR1cm4gZTtcbn0sICQgPSAociwgdCkgPT4ge1xuICBsZXQgZSA9IHcocikuc3VidHJhY3QoMSwgXCJtb250aFwiKTtcbiAgY29uc3QgYSA9IHcodCB8fCByKS5hZGQoMSwgXCJtb250aFwiKSwgbyA9IFtdO1xuICBmb3IgKDsgZS5pc0JlZm9yZShhKSB8fCBlLmlzU2FtZShhKTsgKSB7XG4gICAgY29uc3QgbiA9IGUueWVhcigpLCBkID0gZS5tb250aCgpICsgMTtcbiAgICBPW2RdLmZvckVhY2goKGkpID0+IHtcbiAgICAgIGNvbnN0IF8gPSBoKEwobiwgZCwgaSkpO1xuICAgICAgby5wdXNoKHsgdGVybTogaSwgZGF0ZTogXyB9KTtcbiAgICB9KSwgZS5tb250aCgpID09PSAxMSA/IGUgPSBlLmFkZCgxLCBcInllYXJcIikuc3RhcnRPZihcInllYXJcIikgOiBlID0gZS5hZGQoMSwgXCJtb250aFwiKS5zdGFydE9mKFwibW9udGhcIik7XG4gIH1cbiAgY29uc3QgcyA9IFtdO1xuICByZXR1cm4gby5mb3JFYWNoKChuLCBkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IG4uZGF0ZTsgb1tkICsgMV0gJiYgaS5pc0JlZm9yZShvW2QgKyAxXS5kYXRlKTsgaSA9IGkuYWRkKDEsIFwiZGF5XCIpKVxuICAgICAgcy5wdXNoKHtcbiAgICAgICAgZGF5OiBpLFxuICAgICAgICB0ZXJtOiBuLnRlcm0sXG4gICAgICAgIG5hbWU6IEVbbi50ZXJtXSxcbiAgICAgICAgaW5kZXg6IGkuZGlmZihuLmRhdGUsIFwiZGF5XCIpICsgMVxuICAgICAgfSk7XG4gIH0pLCB0IHx8ICh0ID0gciksIHMuZmlsdGVyKChuKSA9PiBuLmRheS5pc0JldHdlZW4ociwgdCwgXCJkYXlcIikpLm1hcCgobikgPT4gKHtcbiAgICBkYXRlOiBuLmRheS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgIHRlcm06IG4udGVybSxcbiAgICBuYW1lOiBuLm5hbWUsXG4gICAgaW5kZXg6IG4uaW5kZXhcbiAgfSkpO1xufSwgb3QgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBnZXRTb2xhclRlcm1EYXRlOiBMLFxuICBnZXRTb2xhclRlcm1zOiBhdCxcbiAgZ2V0U29sYXJUZXJtc0luUmFuZ2U6ICRcbn0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSksIGcgPSBbXG4gIDE5NDE2LFxuICAxOTE2OCxcbiAgNDIzNTIsXG4gIDIxNzE3LFxuICA1Mzg1NixcbiAgNTU2MzIsXG4gIDkxNDc2LFxuICAyMjE3NixcbiAgMzk2MzIsXG4gIDIxOTcwLFxuICAvLzE5MDAtMTkwOVxuICAxOTE2OCxcbiAgNDI0MjIsXG4gIDQyMTkyLFxuICA1Mzg0MCxcbiAgMTE5MzgxLFxuICA0NjQwMCxcbiAgNTQ5NDQsXG4gIDQ0NDUwLFxuICAzODMyMCxcbiAgODQzNDMsXG4gIC8vMTkxMC0xOTE5XG4gIDE4ODAwLFxuICA0MjE2MCxcbiAgNDYyNjEsXG4gIDI3MjE2LFxuICAyNzk2OCxcbiAgMTA5Mzk2LFxuICAxMTEwNCxcbiAgMzgyNTYsXG4gIDIxMjM0LFxuICAxODgwMCxcbiAgLy8xOTIwLTE5MjlcbiAgMjU5NTgsXG4gIDU0NDMyLFxuICA1OTk4NCxcbiAgMjgzMDksXG4gIDIzMjQ4LFxuICAxMTEwNCxcbiAgMTAwMDY3LFxuICAzNzYwMCxcbiAgMTE2OTUxLFxuICA1MTUzNixcbiAgLy8xOTMwLTE5MzlcbiAgNTQ0MzIsXG4gIDEyMDk5OCxcbiAgNDY0MTYsXG4gIDIyMTc2LFxuICAxMDc5NTYsXG4gIDk2ODAsXG4gIDM3NTg0LFxuICA1MzkzOCxcbiAgNDMzNDQsXG4gIDQ2NDIzLFxuICAvLzE5NDAtMTk0OVxuICAyNzgwOCxcbiAgNDY0MTYsXG4gIDg2ODY5LFxuICAxOTg3MixcbiAgNDI0MTYsXG4gIDgzMzE1LFxuICAyMTE2OCxcbiAgNDM0MzIsXG4gIDU5NzI4LFxuICAyNzI5NixcbiAgLy8xOTUwLTE5NTlcbiAgNDQ3MTAsXG4gIDQzODU2LFxuICAxOTI5NixcbiAgNDM3NDgsXG4gIDQyMzUyLFxuICAyMTA4OCxcbiAgNjIwNTEsXG4gIDU1NjMyLFxuICAyMzM4MyxcbiAgMjIxNzYsXG4gIC8vMTk2MC0xOTY5XG4gIDM4NjA4LFxuICAxOTkyNSxcbiAgMTkxNTIsXG4gIDQyMTkyLFxuICA1NDQ4NCxcbiAgNTM4NDAsXG4gIDU0NjE2LFxuICA0NjQwMCxcbiAgNDY3NTIsXG4gIDEwMzg0NixcbiAgLy8xOTcwLTE5NzlcbiAgMzgzMjAsXG4gIDE4ODY0LFxuICA0MzM4MCxcbiAgNDIxNjAsXG4gIDQ1NjkwLFxuICAyNzIxNixcbiAgMjc5NjgsXG4gIDQ0ODcwLFxuICA0Mzg3MixcbiAgMzgyNTYsXG4gIC8vMTk4MC0xOTg5XG4gIDE5MTg5LFxuICAxODgwMCxcbiAgMjU3NzYsXG4gIDI5ODU5LFxuICA1OTk4NCxcbiAgMjc0ODAsXG4gIDIxOTUyLFxuICA0Mzg3MixcbiAgMzg2MTMsXG4gIDM3NjAwLFxuICAvLzE5OTAtMTk5OVxuICA1MTU1MixcbiAgNTU2MzYsXG4gIDU0NDMyLFxuICA1NTg4OCxcbiAgMzAwMzQsXG4gIDIyMTc2LFxuICA0Mzk1OSxcbiAgOTY4MCxcbiAgMzc1ODQsXG4gIDUxODkzLFxuICAvLzIwMDAtMjAwOVxuICA0MzM0NCxcbiAgNDYyNDAsXG4gIDQ3NzgwLFxuICA0NDM2OCxcbiAgMjE5NzcsXG4gIDE5MzYwLFxuICA0MjQxNixcbiAgODYzOTAsXG4gIDIxMTY4LFxuICA0MzMxMixcbiAgLy8yMDEwLTIwMTlcbiAgMzEwNjAsXG4gIDI3Mjk2LFxuICA0NDM2OCxcbiAgMjMzNzgsXG4gIDE5Mjk2LFxuICA0MjcyNixcbiAgNDIyMDgsXG4gIDUzODU2LFxuICA2MDAwNSxcbiAgNTQ1NzYsXG4gIC8vMjAyMC0yMDI5XG4gIDIzMjAwLFxuICAzMDM3MSxcbiAgMzg2MDgsXG4gIDE5MTk1LFxuICAxOTE1MixcbiAgNDIxOTIsXG4gIDExODk2NixcbiAgNTM4NDAsXG4gIDU0NTYwLFxuICA1NjY0NSxcbiAgLy8yMDMwLTIwMzlcbiAgNDY0OTYsXG4gIDIyMjI0LFxuICAyMTkzOCxcbiAgMTg4NjQsXG4gIDQyMzU5LFxuICA0MjE2MCxcbiAgNDM2MDAsXG4gIDExMTE4OSxcbiAgMjc5MzYsXG4gIDQ0NDQ4LFxuICAvLzIwNDAtMjA0OVxuICA4NDgzNSxcbiAgMzc3NDQsXG4gIDE4OTM2LFxuICAxODgwMCxcbiAgMjU3NzYsXG4gIDkyMzI2LFxuICA1OTk4NCxcbiAgMjc0MjQsXG4gIDEwODIyOCxcbiAgNDM3NDQsXG4gIC8vMjA1MC0yMDU5XG4gIDQxNjk2LFxuICA1Mzk4NyxcbiAgNTE1NTIsXG4gIDU0NjE1LFxuICA1NDQzMixcbiAgNTU4ODgsXG4gIDIzODkzLFxuICAyMjE3NixcbiAgNDI3MDQsXG4gIDIxOTcyLFxuICAvLzIwNjAtMjA2OVxuICAyMTIwMCxcbiAgNDM0NDgsXG4gIDQzMzQ0LFxuICA0NjI0MCxcbiAgNDY3NTgsXG4gIDQ0MzY4LFxuICAyMTkyMCxcbiAgNDM5NDAsXG4gIDQyNDE2LFxuICAyMTE2OCxcbiAgLy8yMDcwLTIwNzlcbiAgNDU2ODMsXG4gIDI2OTI4LFxuICAyOTQ5NSxcbiAgMjcyOTYsXG4gIDQ0MzY4LFxuICA4NDgyMSxcbiAgMTkyOTYsXG4gIDQyMzUyLFxuICAyMTczMixcbiAgNTM2MDAsXG4gIC8vMjA4MC0yMDg5XG4gIDU5NzUyLFxuICA1NDU2MCxcbiAgNTU5NjgsXG4gIDkyODM4LFxuICAyMjIyNCxcbiAgMTkxNjgsXG4gIDQzNDc2LFxuICA0MTY4MCxcbiAgNTM1ODQsXG4gIDYyMDM0LFxuICAvLzIwOTAtMjA5OVxuICA1NDU2MFxuICAvLzIxMDBcbl0sIEYgPSBbXG4gIFwi6Zu2XCIsXG4gIFwi5LiAXCIsXG4gIFwi5LqMXCIsXG4gIFwi5LiJXCIsXG4gIFwi5ZubXCIsXG4gIFwi5LqUXCIsXG4gIFwi5YWtXCIsXG4gIFwi5LiDXCIsXG4gIFwi5YWrXCIsXG4gIFwi5LmdXCJcbl0sIEEgPSBbXG4gIFwi5q2jXCIsXG4gIFwi5LqMXCIsXG4gIFwi5LiJXCIsXG4gIFwi5ZubXCIsXG4gIFwi5LqUXCIsXG4gIFwi5YWtXCIsXG4gIFwi5LiDXCIsXG4gIFwi5YWrXCIsXG4gIFwi5LmdXCIsXG4gIFwi5Y2BXCIsXG4gIFwi5YasXCIsXG4gIFwi6IWKXCJcbl0sIEIgPSBbXG4gIFwi55SyXCIsXG4gIFwi5LmZXCIsXG4gIFwi5LiZXCIsXG4gIFwi5LiBXCIsXG4gIFwi5oiKXCIsXG4gIFwi5bexXCIsXG4gIFwi5bqaXCIsXG4gIFwi6L6bXCIsXG4gIFwi5aOsXCIsXG4gIFwi55m4XCJcbl0sIEggPSBbXG4gIFwi5a2QXCIsXG4gIFwi5LiRXCIsXG4gIFwi5a+FXCIsXG4gIFwi5Y2vXCIsXG4gIFwi6L6wXCIsXG4gIFwi5bezXCIsXG4gIFwi5Y2IXCIsXG4gIFwi5pyqXCIsXG4gIFwi55SzXCIsXG4gIFwi6YWJXCIsXG4gIFwi5oiMXCIsXG4gIFwi5LqlXCJcbl0sIG50ID0gW1xuICBcIum8oFwiLFxuICBcIueJm1wiLFxuICBcIuiZjlwiLFxuICBcIuWFlFwiLFxuICBcIum+mVwiLFxuICBcIuibh1wiLFxuICBcIumprFwiLFxuICBcIue+ilwiLFxuICBcIueMtFwiLFxuICBcIum4oVwiLFxuICBcIueLl1wiLFxuICBcIueMqlwiXG5dLCBSID0gKHIpID0+IHtcbiAgbGV0IHQgPSAzNDg7XG4gIGZvciAobGV0IGUgPSAzMjc2ODsgZSA+IDg7IGUgPj49IDEpXG4gICAgdCArPSBnW3IgLSAxOTAwXSAmIGUgPyAxIDogMDtcbiAgcmV0dXJuIHQgKyB2KHIpO1xufSwgcCA9IChyKSA9PiBnW3IgLSAxOTAwXSAmIDE1LCB2ID0gKHIpID0+IHAocikgPyBnW3IgLSAxOTAwXSAmIDY1NTM2ID8gMzAgOiAyOSA6IDAsIGIgPSAocikgPT4gQltyICUgMTBdICsgSFtyICUgMTJdLCBEID0gKHIsIHQpID0+IGdbciAtIDE5MDBdICYgNjU1MzYgPj4gdCA/IDMwIDogMjksIHN0ID0gKHIpID0+IG50WyhyIC0gNCkgJSAxMl0sIGl0ID0gKHIpID0+IHtcbiAgY29uc3QgdCA9IFtcIuWInVwiLCBcIuWNgVwiLCBcIuW7v1wiLCBcIuS4ieWNgVwiXTtcbiAgaWYgKHIgPT09IDEwKSByZXR1cm4gXCLliJ3ljYFcIjtcbiAgaWYgKHIgPT09IDIwKSByZXR1cm4gXCLkuozljYFcIjtcbiAgaWYgKHIgPT09IDMwKSByZXR1cm4gXCLkuInljYFcIjtcbiAgY29uc3QgZSA9IE1hdGguZmxvb3IociAvIDEwKSwgYSA9IHIgJSAxMDtcbiAgcmV0dXJuIHRbZV0gKyBGW2FdO1xufSwgZHQgPSAocikgPT4gYCR7QlsociAtIDQpICUgMTBdfSR7SFsociAtIDQpICUgMTJdfeW5tGAsIHggPSAociwgdCkgPT4ge1xuICBjb25zdCBlID0gW107XG4gIGZvciAobGV0IGEgPSByOyBhIDw9IHQ7IGErKylcbiAgICBlLnB1c2goe1xuICAgICAgeWVhcjogYSxcbiAgICAgIGx1bmFyWWVhcjogZHQoYSksXG4gICAgICBsdW5hclllYXJDTjogYS50b1N0cmluZygpLnNwbGl0KFwiXCIpLm1hcCgobykgPT4gRltOdW1iZXIobyldKS5qb2luKFwiXCIpXG4gICAgfSk7XG4gIHJldHVybiBlO1xufSwgQyA9IChyKSA9PiB7XG4gIGNvbnN0IHQgPSBwKHIpO1xuICByZXR1cm4ge1xuICAgIHllYXI6IHIsXG4gICAgbGVhcE1vbnRoOiB0IHx8IHZvaWQgMCxcbiAgICBsZWFwTW9udGhDTjogdCA/IGDpl7Ake0FbdCAtIDFdfeaciGAgOiB2b2lkIDAsXG4gICAgZGF5czogdCA/IGdbciAtIDE5MDBdICYgNjU1MzYgPyAzMCA6IDI5IDogMFxuICB9O1xufSwgbHQgPSBuZXcgRGF0ZShEYXRlLlVUQygxOTAwLCAwLCAzMCwgMTYsIDAsIDApKSwgbSA9IChyKSA9PiB7XG4gIGNvbnN0IHQgPSBuZXcgQXJyYXkoNykuZmlsbCgwKTtcbiAgbGV0IGUgPSAwLCBhID0gMDtcbiAgY29uc3QgbyA9IGgobHQpLCBzID0gaChyKTtcbiAgbGV0IG4gPSBzLmRpZmYobywgXCJkYXlcIik7XG4gIHRbNV0gPSBuICsgNDAsIHRbNF0gPSAxNDtcbiAgbGV0IGQgPSAxOTAwO1xuICBmb3IgKDsgZCA8IDIxMDAgJiYgbiA+IDA7IGQrKylcbiAgICBlID0gUihkKSwgbiAtPSBlLCB0WzRdICs9IDEyO1xuICBuIDwgMCAmJiAobiArPSBlLCBkLS0sIHRbNF0gLT0gMTIpLCB0WzBdID0gZCwgdFszXSA9IGQgLSAxODY0LCBhID0gcChkKSwgdFs2XSA9IDA7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgMTMgJiYgbiA+PSAwOyBpKyspXG4gICAgYSA+IDAgJiYgaSA9PT0gYSArIDEgJiYgdFs2XSA9PT0gMCA/ICgtLWksIHRbNl0gPSAxLCBlID0gdihkKSkgOiBlID0gRChkLCBpKSwgdFs2XSA9PT0gMSAmJiBpID09PSBhICsgMSAmJiAodFs2XSA9IDApLCBuIC09IGUsIHRbNl0gPT09IDAgJiYgdFs0XSsrLCB0WzFdID0gaTtcbiAgcmV0dXJuIG4gPCAwICYmIChuICs9IGUsIHRbMV0tLSwgdFs0XS0tKSwgdFsyXSA9IG4gKyAxLCB7XG4gICAgZGF0ZTogcy5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgIC8vIOWFrOWOhuaXpeacn1xuICAgIGx1bmFyWWVhcjogdFswXSxcbiAgICAvLyDlhpzljoblubTku71cbiAgICBsdW5hck1vbjogdFsxXSArIDEsXG4gICAgLy8g5Yac5Y6G5pyI5Lu9XG4gICAgbHVuYXJEYXk6IHRbMl0sXG4gICAgLy8g5Yac5Y6G5pel5pyfXG4gICAgaXNMZWFwOiAhIXRbNl0sXG4gICAgLy8g5piv5ZCm6Zew5pyIXG4gICAgem9kaWFjOiBzdCh0WzBdKSxcbiAgICAvLyDnlJ/ogpZcbiAgICB5ZWFyQ3lsOiBiKHRbM10pLFxuICAgIC8vIOW5tOafsVxuICAgIG1vbkN5bDogYih0WzRdKSxcbiAgICAvLyDmnIjmn7FcbiAgICBkYXlDeWw6IGIodFs1XSksXG4gICAgLy8g5pel5p+xXG4gICAgbHVuYXJZZWFyQ046IGAke3RbMF0udG9TdHJpbmcoKS5zcGxpdChcIlwiKS5tYXAoKGkpID0+IEZbTnVtYmVyKGkpXSkuam9pbihcIlwiKX1gLFxuICAgIC8vIOWGnOWOhuW5tOS7veS4reaWh+ihqOekulxuICAgIGx1bmFyTW9uQ046IGAke0FbdFsxXV195pyIYCxcbiAgICAvLyDlhpzljobmnIjku73kuK3mlofooajnpLpcbiAgICBsdW5hckRheUNOOiBpdCh0WzJdKVxuICAgIC8vIOWGnOWOhuaXpeacn+S4reaWh+ihqOekulxuICB9O1xufSwgSSA9IChyLCB0KSA9PiB7XG4gIGNvbnN0IGUgPSBoKHIpLCBhID0gaCh0KSwgbyA9IFtdO1xuICBmb3IgKGxldCBzID0gZTsgcy5pc0JlZm9yZShhKSB8fCBzLmlzU2FtZShhLCBcImRheVwiKTsgcyA9IHMuYWRkKDEsIFwiZGF5XCIpKVxuICAgIG8ucHVzaChtKHMpKTtcbiAgcmV0dXJuIG87XG59LCBqID0gKHIpID0+IHtcbiAgY29uc3QgdCA9IGgociksIGUgPSB0LnllYXIoKSwgYSA9IHQubW9udGgoKSArIDEsIG8gPSB0LmRhdGUoKTtcbiAgbGV0IHMgPSAwO1xuICBmb3IgKGxldCB5ID0gMTkwMDsgeSA8IGU7IHkrKylcbiAgICBzICs9IFIoeSk7XG4gIGNvbnN0IG4gPSBwKGUpO1xuICBmb3IgKGxldCB5ID0gMTsgeSA8IGE7IHkrKylcbiAgICBzICs9IEQoZSwgeSksIHkgPT09IG4gJiYgKHMgKz0gdihlKSk7XG4gIHMgKz0gbyAtIDE7XG4gIGNvbnN0IGQgPSBoKG5ldyBEYXRlKDE5MDAsIDAsIDMxKSksIGkgPSBkLmFkZChzLCBcImRheVwiKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICBsZXQgXyA9IHMsIE47XG4gIHJldHVybiBuID09PSBhICYmIChfICs9IEQoZSwgYSksIE4gPSBkLmFkZChfLCBcImRheVwiKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpKSwge1xuICAgIGRhdGU6IGksXG4gICAgbGVhcE1vbnRoRGF0ZTogTlxuICB9O1xufSwgaHQgPSB7XG4gIGdldEx1bmFyWWVhcnM6IHgsXG4gIGdldFllYXJMZWFwTW9udGg6IEMsXG4gIGdldEx1bmFyRGF0ZTogbSxcbiAgZ2V0THVuYXJEYXRlc0luUmFuZ2U6IEksXG4gIGdldFNvbGFyRGF0ZUZyb21MdW5hcjogalxufSwgX3QgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBodCxcbiAgZ2V0THVuYXJEYXRlOiBtLFxuICBnZXRMdW5hckRhdGVzSW5SYW5nZTogSSxcbiAgZ2V0THVuYXJZZWFyczogeCxcbiAgZ2V0U29sYXJEYXRlRnJvbUx1bmFyOiBqLFxuICBnZXRZZWFyTGVhcE1vbnRoOiBDLFxuICBtb250aERheXM6IERcbn0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSksIHl0ID0ge1xuICAxOiB7XG4gICAgLy8g5q2j5pyIXG4gICAgMTogW1wi5pil6IqCXCIsIFwi6bih5pelXCIsIFwi5YWD5aeL5aSp5bCK6K+e6L6wXCJdLFxuICAgIDI6IFtcIueKrOaXpVwiXSxcbiAgICAzOiBbXCLnjKrml6VcIiwgXCLlsI/lubTmnJ1cIl0sXG4gICAgNDogW1wi576K5pelXCIsIFwi5a2Z5aSp5Yy76K+e6L6wXCJdLFxuICAgIDU6IFtcIueJm+aXpVwiLCBcIuegtOS6lOaXpVwiLCBcIuW8gOW4glwiLCBcIui3r+elnuivnui+sFwiXSxcbiAgICA2OiBbXCLpqazml6VcIl0sXG4gICAgNzogW1wi5Lq65pelXCIsIFwi6YCB54Gr56WeXCJdLFxuICAgIDg6IFtcIuiwt+aXpVwiLCBcIumYjueOi+ivnui+sFwiXSxcbiAgICA5OiBbXCLlpKnml6VcIiwgXCLnjonnmofor57ovrBcIl0sXG4gICAgMTA6IFtcIuWcsOaXpVwiLCBcIuefs+WktOeUn+aXpVwiXSxcbiAgICAxMzogW1wi5LiKKOivlSnnga/ml6VcIiwgXCLlhbPlhazljYflpKnml6VcIl0sXG4gICAgMTU6IFtcIuWFg+WuteiKglwiLCBcIuS4iuWFg+iKglwiLCBcIuato+eBr+aXpVwiLCBcIuWkqeWumOivnui+sFwiXSxcbiAgICAxODogW1wi6JC954Gv5pelXCJdLFxuICAgIDI1OiBbXCLlpKnku5Mo5aGr5LuTKeiKglwiXVxuICB9LFxuICAyOiB7XG4gICAgLy8g5LqM5pyIXG4gICAgMTogW1wi5aSq6Ziz55Sf5pelXCJdLFxuICAgIDI6IFtcIuaYpem+meiKglwiLCBcIuWcn+WcsOWFrOeUn+aXpVwiLCBcIua1juWFrOa0u+S9m+eUn+aXpVwiXSxcbiAgICAzOiBbXCLmlofmmIzluJ3lkJvor57ovrBcIl0sXG4gICAgMTI6IFtcIueZvuiKseeUn+aXpSjoirHmnJ3oioIpXCJdLFxuICAgIDE1OiBbXCLkuZ3lpKnnjoTlpbPor57ovrBcIiwgXCLlpKrkuIrogIHlkJvor57ovrBcIiwgXCLnsr7lv6DlsrPnjovor57ovrBcIl0sXG4gICAgMTk6IFtcIuingumfs+iPqeiQqOivnui+sFwiXSxcbiAgICAyMTogW1wi5pmu6LSk6I+p6JCo6K+e6L6wXCJdXG4gIH0sXG4gIDM6IHtcbiAgICAzOiBbXCLkuIrlt7PoioJcIl0sXG4gICAgMTU6IFtcIui1teWFrOWFg+W4heivnui+sFwiLCBcIuazsOWxseiAgeavjeivnui+sFwiXVxuICB9LFxuICA0OiB7XG4gICAgMTogW1wi56Wt6Zu556WeXCJdLFxuICAgIDQ6IFtcIuaWh+auiuiPqeiQqOivnui+sFwiXSxcbiAgICA4OiBbXCLmtbTkvZvoioIo6b6Z5Y2O5LyaKVwiXSxcbiAgICAxMjogW1wi6JuH546L6K+e6L6wXCJdLFxuICAgIDE0OiBbXCLlkJXmtJ7lrr7or57ovrBcIl0sXG4gICAgMTg6IFtcIuWNjuS9l+ivnui+sFwiXSxcbiAgICAyODogW1wi6I2v546LKOelnuWGnCnor57ovrBcIl1cbiAgfSxcbiAgNToge1xuICAgIDU6IFtcIuerr+WNiOiKglwiXSxcbiAgICAxMzogW1wi6Zuo6IqCXCIsIFwi6buE5bid6K+e6L6wXCJdXG4gIH0sXG4gIDY6IHtcbiAgICAxOiBbXCLljYrlubToioJcIl0sXG4gICAgNjogW1wi5pmS6KGj6IqCXCJdLFxuICAgIDE5OiBbXCLop4Lpn7Poj6nokKjlvpfpgZNcIl0sXG4gICAgMjQ6IFtcIumbt+elnuivnui+sFwiLCBcIuiNt+iKseeUn+aXpVwiLCBcIuWFs+WFrOivnui+sFwiXVxuICB9LFxuICA3OiB7XG4gICAgMTogW1wi56Wt5rW356WeXCJdLFxuICAgIDc6IFtcIuS5nuW3p+iKglwiXSxcbiAgICAxNTogW1wi5Lit5YWDKOmsvCnoioJcIiwgXCLlnLDlrpjor57ovrAo5a2f5YWw55uG5LyaKVwiXSxcbiAgICAxODogW1wi6KW/546L5q+N6K+e6L6wXCJdLFxuICAgIDIwOiBbXCLmo4noirHnlJ/ml6VcIl0sXG4gICAgMjM6IFtcIuivuOiRm+S6ruivnui+sFwiXSxcbiAgICAzMDogW1wi5Zyw6JeP6I+p6JCo6K+e6L6wXCJdXG4gIH0sXG4gIDg6IHtcbiAgICAxOiBbXCLlpKnljLvoioJcIl0sXG4gICAgMzogW1wi54G25ZCb55Sf5pelXCJdLFxuICAgIDg6IFtcIueRtuaxoOWkp+S8mlwiXSxcbiAgICAxNTogW1wi5Lit56eL6IqCXCJdLFxuICAgIDIwOiBbXCLmsLTnqLvnlJ/ml6VcIl0sXG4gICAgMjg6IFtcIuWtlOWtkOivnui+sFwiXVxuICB9LFxuICA5OiB7XG4gICAgOTogW1wi6YeN6Ziz6IqCXCJdLFxuICAgIDE5OiBbXCLop4Lpn7Poj6nokKjlh7rlrrZcIl1cbiAgfSxcbiAgMTA6IHtcbiAgICAxOiBbXCLljYHmnIjmnJ1cIiwgXCLlr5LooaPoioJcIl0sXG4gICAgMTU6IFtcIuS4i+WFg+iKglwiLCBcIuawtOWumOivnui+sFwiXVxuICB9LFxuICAxMjoge1xuICAgIDg6IFtcIuiFiuWFq+iKglwiXSxcbiAgICAyMzogW1wi5a6Y5a626YCB54G2XCJdLFxuICAgIDI0OiBbXCLmsJHpl7TpgIHngbZcIl0sXG4gICAgMjU6IFtcIuaOpeeOieeah1wiXVxuICB9XG59LCB3dCA9IFtcbiAgLy8g5aSE55CG5a+S6aOf6IqC77yI5riF5piO5YmN5LiA5pel77yJXG4gIChyLCB0KSA9PiB7XG4gICAgY29uc3QgZSA9IHIuYWRkKDEsIFwiZGF5XCIpO1xuICAgICQoZSkuZmluZChcbiAgICAgIChvKSA9PiBvLnRlcm0gPT09IFwicHVyZV9icmlnaHRuZXNzXCJcbiAgICApICYmIHQucHVzaCh7XG4gICAgICBkYXRlOiByLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgICBuYW1lOiBcIuWvkumjn+iKglwiLFxuICAgICAgdHlwZTogXCJzb2xhcl90ZXJtXCJcbiAgICB9KTtcbiAgfSxcbiAgLy8g5aSE55CG6Zmk5aSV77yI5Yac5Y6G6IWK5pyI5pyA5ZCO5LiA5pel77yJXG4gIChyLCB0KSA9PiB7XG4gICAgY29uc3QgZSA9IG0ocik7XG4gICAgaWYgKGUubHVuYXJNb24gPT09IDEyICYmIGUubHVuYXJEYXkgPT09IEQoZS5sdW5hclllYXIsIDEyKSkge1xuICAgICAgY29uc3QgYSA9IHIuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgIFtcIumZpOWklVwiLCBcIuWwgeS6lVwiLCBcIuelreS6leelnlwiLCBcIui0tOaYpeiBlFwiLCBcIui/jui0ouelnlwiXS5mb3JFYWNoKChvKSA9PiB7XG4gICAgICAgIHQucHVzaCh7XG4gICAgICAgICAgZGF0ZTogYSxcbiAgICAgICAgICBuYW1lOiBvLFxuICAgICAgICAgIHR5cGU6IFwibHVuYXJcIlxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXSwgVSA9IChyLCB0KSA9PiB7XG4gIHZhciBzO1xuICBjb25zdCBlID0gW107XG4gIGxldCBhID0gaChyKTtcbiAgY29uc3QgbyA9IGgodCB8fCByKTtcbiAgZm9yICg7IGEuaXNCZWZvcmUobykgfHwgYS5pc1NhbWUobyk7ICkge1xuICAgIGNvbnN0IG4gPSBtKGEpO1xuICAgIG4uaXNMZWFwIHx8ICgoKHMgPSB5dFtuLmx1bmFyTW9uXSkgPT0gbnVsbCA/IHZvaWQgMCA6IHNbbi5sdW5hckRheV0pIHx8IFtdKS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBlLnB1c2goe1xuICAgICAgICBkYXRlOiBhLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgICAgIG5hbWU6IGksXG4gICAgICAgIHR5cGU6IFwibHVuYXJcIlxuICAgICAgfSk7XG4gICAgfSksIHd0LmZvckVhY2goKGQpID0+IGQoYSwgZSkpLCBhID0gYS5hZGQoMSwgXCJkYXlcIik7XG4gIH1cbiAgcmV0dXJuIGUucmVkdWNlKChuLCBkKSA9PiB7XG4gICAgY29uc3QgaSA9IG4uZmluZCgoXykgPT4gXy5kYXRlID09PSBkLmRhdGUpO1xuICAgIHJldHVybiBpID8gaS5uYW1lLnB1c2goZC5uYW1lKSA6IG4ucHVzaCh7IGRhdGU6IGQuZGF0ZSwgbmFtZTogW2QubmFtZV0gfSksIG47XG4gIH0sIFtdKTtcbn0sIHV0ID0ge1xuICBnZXRMdW5hckZlc3RpdmFsczogVVxufSwgY3QgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiB1dCxcbiAgZ2V0THVuYXJGZXN0aXZhbHM6IFVcbn0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSksIER0ID0ge1xuICAuLi50dCxcbiAgLi4ub3QsXG4gIC4uLl90LFxuICAuLi5jdFxufTtcbmV4cG9ydCB7XG4gIER0IGFzIGRlZmF1bHQsXG4gIFggYXMgZmluZFdvcmtkYXksXG4gIEogYXMgZ2V0RGF5RGV0YWlsLFxuICBLIGFzIGdldEhvbGlkYXlzSW5SYW5nZSxcbiAgbSBhcyBnZXRMdW5hckRhdGUsXG4gIEkgYXMgZ2V0THVuYXJEYXRlc0luUmFuZ2UsXG4gIFUgYXMgZ2V0THVuYXJGZXN0aXZhbHMsXG4gIHggYXMgZ2V0THVuYXJZZWFycyxcbiAgaiBhcyBnZXRTb2xhckRhdGVGcm9tTHVuYXIsXG4gIEwgYXMgZ2V0U29sYXJUZXJtRGF0ZSxcbiAgYXQgYXMgZ2V0U29sYXJUZXJtcyxcbiAgJCBhcyBnZXRTb2xhclRlcm1zSW5SYW5nZSxcbiAgUSBhcyBnZXRXb3JrZGF5c0luUmFuZ2UsXG4gIEMgYXMgZ2V0WWVhckxlYXBNb250aCxcbiAgVCBhcyBpc0hvbGlkYXksXG4gIEcgYXMgaXNJbkxpZXUsXG4gIGYgYXMgaXNXb3JrZGF5LFxuICBEIGFzIG1vbnRoRGF5c1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHNCQUFBLENBQUE7QUFBQUMsU0FBQUQscUJBQUE7RUFBQUUsYUFBQUEsTUFBQUM7RUFBQUMsY0FBQUEsTUFBQUM7RUFBQUMsb0JBQUFBLE1BQUFDO0VBQUFDLGNBQUFBLE1BQUFDO0VBQUFDLHNCQUFBQSxNQUFBQztFQUFBQyxtQkFBQUEsTUFBQUM7RUFBQUMsZUFBQUEsTUFBQUM7RUFBQUMsdUJBQUFBLE1BQUFDO0VBQUFDLGtCQUFBQSxNQUFBQztFQUFBQyxlQUFBQSxNQUFBQztFQUFBQyxzQkFBQUEsTUFBQUM7RUFBQUMsb0JBQUFBLE1BQUFDO0VBQUFDLGtCQUFBQSxNQUFBQztFQUFBQyxXQUFBQSxNQUFBQztFQUFBQyxVQUFBQSxNQUFBQztFQUFBQyxXQUFBQSxNQUFBQztFQUFBQyxXQUFBQSxNQUFBQztBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQXRDLG1CQUFBO0FDQUEsSUFBSXVDLElBQUlDLE9BQU9DO0FBQ2YsSUFBSUMsSUFBSUEsQ0FBQ0MsR0FBR0MsR0FBR0MsTUFBTUQsS0FBS0QsSUFBSUosRUFBRUksR0FBR0MsR0FBRztFQUFFRSxZQUFZO0VBQUlDLGNBQWM7RUFBSUMsVUFBVTtFQUFJQyxPQUFPSjtBQUFFLENBQUMsSUFBSUYsRUFBRUMsQ0FBQyxJQUFJQztBQUM3RyxJQUFJSyxJQUFJQSxDQUFDUCxHQUFHQyxHQUFHQyxNQUFNSCxFQUFFQyxHQUFHLE9BQU9DLEtBQUssV0FBV0EsSUFBSSxLQUFLQSxHQUFHQyxDQUFDO0FBQzlELElBQU1NLElBQUksTUFBTUMsR0FBRTtFQUNoQkMsWUFBWVQsR0FBRztBQUNiTSxNQUFFLE1BQU0sT0FBTztBQUNmLFFBQUlOLGFBQWFPLEdBQ2YsTUFBS0csUUFBUSxJQUFJQyxLQUFLWCxFQUFFWSxPQUFPLENBQUM7YUFDekJaLGFBQWFXLEtBQ3BCLE1BQUtELFFBQVEsSUFBSUMsS0FBS1gsQ0FBQzthQUNoQixPQUFPQSxLQUFLLFlBQVksT0FBT0EsS0FBSyxVQUFBO0FBQzNDLFVBQUksT0FBT0EsS0FBSyxVQUFVO0FBQ3hCLGNBQU1DLElBQUlELEVBQUVhLE1BQU0sK0JBQStCO0FBQ2pEWixZQUFJLEtBQUtTLFFBQVEsSUFBSUMsS0FBS0EsS0FBS0csSUFDN0JDLFNBQVNkLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FDakJjLFNBQVNkLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUNyQmMsU0FBU2QsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUNuQixDQUFDLElBQUllLE1BQU0sSUFBSUwsS0FBS1gsQ0FBQyxFQUFFaUIsUUFBUSxDQUFDLElBQUksS0FBS1AsUUFBUSxJQUFJQyxLQUFLWCxFQUFFa0IsUUFBUSxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUtSLFFBQVEsSUFBSUMsS0FBS1gsQ0FBQztNQUMzRyxNQUNFLE1BQUtVLFFBQVEsSUFBSUMsS0FBS1gsQ0FBQztJQUFBLE1BRXpCLE1BQUtVLFFBQXdCLG9CQUFJQyxLQUFLO0VBQzFDO0VBQ0FDLFNBQVM7QUFDUCxXQUFPLEtBQUtGO0VBQ2Q7RUFDQVMsVUFBVTtBQUNSLFdBQU8sQ0FBQ0gsTUFBTSxLQUFLTixNQUFNTyxRQUFRLENBQUM7RUFDcEM7RUFDQUcsS0FBS3BCLEdBQUdDLElBQUksT0FBTztBQUNqQixVQUFNb0IsSUFBSSxJQUFJZCxHQUFFUCxDQUFDLEVBQUVZLE9BQU8sR0FBR1UsSUFBSSxLQUFLWixNQUFNTyxRQUFRLElBQUlJLEVBQUVKLFFBQVE7QUFDbEUsWUFBUWhCLEdBQUE7TUFDTixLQUFLO0FBQ0gsZUFBTyxLQUFLUyxNQUFNYSxZQUFZLElBQUlGLEVBQUVFLFlBQVk7TUFDbEQsS0FBSztBQUNILGdCQUFRLEtBQUtiLE1BQU1hLFlBQVksSUFBSUYsRUFBRUUsWUFBWSxLQUFLLE1BQU0sS0FBS2IsTUFBTWMsU0FBUyxJQUFJSCxFQUFFRyxTQUFTO01BQ2pHLEtBQUs7TUFDTDtBQUNFLGVBQU9DLEtBQUtDLE1BQU1KLEtBQUssTUFBTSxLQUFLLEtBQUssR0FBRztJQUM5QztFQUNGO0VBQ0FLLFFBQVEzQixHQUFHO0FBQ1QsVUFBTUMsSUFBSSxJQUFJVSxLQUFLLEtBQUtELEtBQUs7QUFDN0IsWUFBUVYsR0FBQTtNQUNOLEtBQUs7QUFDSEMsVUFBRTJCLFNBQVMsQ0FBQyxHQUFHM0IsRUFBRTRCLFFBQVEsQ0FBQyxHQUFHNUIsRUFBRTZCLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNsRDtNQUNGLEtBQUs7QUFDSDdCLFVBQUU0QixRQUFRLENBQUMsR0FBRzVCLEVBQUU2QixTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbkM7TUFDRixLQUFLO0FBQ0g3QixVQUFFNkIsU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3JCO0lBQ0o7QUFDQSxXQUFPLElBQUl2QixHQUFFTixDQUFDO0VBQ2hCO0VBQ0E4QixNQUFNL0IsR0FBRztBQUNQLFVBQU1DLElBQUksSUFBSVUsS0FBSyxLQUFLRCxLQUFLO0FBQzdCLFlBQVFWLEdBQUE7TUFDTixLQUFLO0FBQ0hDLFVBQUUyQixTQUFTLEVBQUUsR0FBRzNCLEVBQUU0QixRQUFRLEVBQUUsR0FBRzVCLEVBQUU2QixTQUFTLElBQUksSUFBSSxJQUFJLEdBQUc7QUFDekQ7TUFDRixLQUFLO0FBQ0g3QixVQUFFNEIsUUFDQSxJQUFJbEIsS0FBS1YsRUFBRXNCLFlBQVksR0FBR3RCLEVBQUV1QixTQUFTLElBQUksR0FBRyxDQUFDLEVBQUVRLFFBQVEsQ0FDekQsR0FBRy9CLEVBQUU2QixTQUFTLElBQUksSUFBSSxJQUFJLEdBQUc7QUFDN0I7TUFDRixLQUFLO0FBQ0g3QixVQUFFNkIsU0FBUyxJQUFJLElBQUksSUFBSSxHQUFHO0FBQzFCO0lBQ0o7QUFDQSxXQUFPLElBQUl2QixHQUFFTixDQUFDO0VBQ2hCO0VBQ0FnQyxJQUFJakMsR0FBR0MsR0FBRztBQUNSLFVBQU1vQixJQUFJLElBQUlWLEtBQUssS0FBS0QsS0FBSztBQUM3QixZQUFRVCxHQUFBO01BQ04sS0FBSztBQUNIb0IsVUFBRWEsWUFBWWIsRUFBRUUsWUFBWSxJQUFJdkIsQ0FBQztBQUNqQztNQUNGLEtBQUs7QUFDSHFCLFVBQUVPLFNBQVNQLEVBQUVHLFNBQVMsSUFBSXhCLENBQUM7QUFDM0I7TUFDRixLQUFLO0FBQ0hxQixVQUFFUSxRQUFRUixFQUFFVyxRQUFRLElBQUloQyxDQUFDO0FBQ3pCO0lBQ0o7QUFDQSxXQUFPLElBQUlPLEdBQUVjLENBQUM7RUFDaEI7RUFDQWMsU0FBU25DLEdBQUdDLEdBQUc7QUFDYixXQUFPLEtBQUtnQyxJQUFJLENBQUNqQyxHQUFHQyxDQUFDO0VBQ3ZCO0VBQ0FtQyxPQUFPcEMsR0FBRztBQUNSLFVBQU1DLElBQUk7TUFDUm9DLE1BQU0sS0FBSzNCLE1BQU1hLFlBQVk7TUFDN0JlLEtBQUssS0FBSzVCLE1BQU1jLFNBQVMsSUFBSSxHQUFHZSxTQUFTLEVBQUVDLFNBQVMsR0FBRyxHQUFHO01BQzFEQyxJQUFJLEtBQUsvQixNQUFNc0IsUUFBUSxFQUFFTyxTQUFTLEVBQUVDLFNBQVMsR0FBRyxHQUFHO01BQ25ERSxJQUFJLEtBQUtoQyxNQUFNaUMsU0FBUyxFQUFFSixTQUFTLEVBQUVDLFNBQVMsR0FBRyxHQUFHO01BQ3BESSxJQUFJLEtBQUtsQyxNQUFNbUMsV0FBVyxFQUFFTixTQUFTLEVBQUVDLFNBQVMsR0FBRyxHQUFHO01BQ3RETSxJQUFJLEtBQUtwQyxNQUFNcUMsV0FBVyxFQUFFUixTQUFTLEVBQUVDLFNBQVMsR0FBRyxHQUFHO01BQ3REUSxNQUFNekMsR0FBRTBDLFdBQVcsS0FBS3ZDLE1BQU13QyxPQUFPLENBQUM7SUFDeEM7QUFDQSxXQUFPbEQsRUFBRWtCLFFBQVEsNkJBQThCRyxPQUFNcEIsRUFBRW9CLENBQUMsRUFBRWtCLFNBQVMsQ0FBQztFQUN0RTtFQUNBWSxLQUFLbkQsR0FBRztBQUNOLFFBQUlBLE1BQU0sT0FBUSxRQUFPLEtBQUtVLE1BQU1hLFlBQVk7QUFDaEQsVUFBTXRCLElBQUksSUFBSVUsS0FBSyxLQUFLRCxLQUFLO0FBQzdCLFdBQU9ULEVBQUVpQyxZQUFZbEMsQ0FBQyxHQUFHLElBQUlPLEdBQUVOLENBQUM7RUFDbEM7RUFDQW1ELE1BQU1wRCxHQUFHO0FBQ1AsUUFBSUEsTUFBTSxPQUFRLFFBQU8sS0FBS1UsTUFBTWMsU0FBUztBQUM3QyxVQUFNdkIsSUFBSSxJQUFJVSxLQUFLLEtBQUtELEtBQUs7QUFDN0IsV0FBT1QsRUFBRTJCLFNBQVM1QixDQUFDLEdBQUcsSUFBSU8sR0FBRU4sQ0FBQztFQUMvQjtFQUNBb0QsS0FBS3JELEdBQUc7QUFDTixRQUFJQSxNQUFNLE9BQVEsUUFBTyxLQUFLVSxNQUFNc0IsUUFBUTtBQUM1QyxVQUFNL0IsSUFBSSxJQUFJVSxLQUFLLEtBQUtELEtBQUs7QUFDN0IsV0FBT1QsRUFBRTRCLFFBQVE3QixDQUFDLEdBQUcsSUFBSU8sR0FBRU4sQ0FBQztFQUM5QjtFQUNBcUQsSUFBSXRELEdBQUc7QUFDTCxRQUFJQSxNQUFNLE9BQ1IsUUFBTyxLQUFLVSxNQUFNd0MsT0FBTztBQUMzQjtBQUNFLFlBQU1qRCxJQUFJLEtBQUtTLE1BQU13QyxPQUFPLEdBQUc3QixJQUFJckIsSUFBSUMsR0FBR3FCLElBQUksSUFBSVgsS0FBSyxLQUFLRCxLQUFLO0FBQ2pFLGFBQU9ZLEVBQUVPLFFBQVEsS0FBS25CLE1BQU1zQixRQUFRLElBQUlYLENBQUMsR0FBRyxJQUFJZCxHQUFFZSxDQUFDO0lBQ3JEO0VBQ0Y7RUFDQWlDLFNBQVN2RCxHQUFHO0FBQ1YsVUFBTUMsSUFBSSxJQUFJTSxHQUFFUCxDQUFDLEVBQUVZLE9BQU87QUFDMUIsV0FBTyxLQUFLRixNQUFNTyxRQUFRLElBQUloQixFQUFFZ0IsUUFBUTtFQUMxQztFQUNBdUMsUUFBUXhELEdBQUc7QUFDVCxVQUFNQyxJQUFJLElBQUlNLEdBQUVQLENBQUMsRUFBRVksT0FBTztBQUMxQixXQUFPLEtBQUtGLE1BQU1PLFFBQVEsSUFBSWhCLEVBQUVnQixRQUFRO0VBQzFDO0VBQ0F3QyxPQUFPekQsR0FBR0MsSUFBSSxPQUFPO0FBQ25CLFVBQU1vQixJQUFJLElBQUlkLEdBQUVQLENBQUMsRUFBRVksT0FBTztBQUMxQixZQUFRWCxHQUFBO01BQ04sS0FBSztBQUNILGVBQU8sS0FBS1MsTUFBTWEsWUFBWSxNQUFNRixFQUFFRSxZQUFZO01BQ3BELEtBQUs7QUFDSCxlQUFPLEtBQUtiLE1BQU1hLFlBQVksTUFBTUYsRUFBRUUsWUFBWSxLQUFLLEtBQUtiLE1BQU1jLFNBQVMsTUFBTUgsRUFBRUcsU0FBUztNQUM5RixLQUFLO01BQ0w7QUFDRSxlQUFPLEtBQUtkLE1BQU1hLFlBQVksTUFBTUYsRUFBRUUsWUFBWSxLQUFLLEtBQUtiLE1BQU1jLFNBQVMsTUFBTUgsRUFBRUcsU0FBUyxLQUFLLEtBQUtkLE1BQU1zQixRQUFRLE1BQU1YLEVBQUVXLFFBQVE7SUFDeEk7RUFDRjtFQUNBMEIsVUFBVTFELEdBQUdDLEdBQUdvQixHQUFHO0FBQ2pCLFVBQU1DLElBQUksSUFBSWYsR0FBRVAsQ0FBQyxFQUFFMkIsUUFBUU4sQ0FBQyxFQUFFVCxPQUFPLEdBQUcrQyxJQUFJLElBQUluRCxHQUFFUCxDQUFDLEVBQUU4QixNQUFNVixDQUFDLEVBQUVULE9BQU8sR0FBR2dELElBQUksS0FBS2hELE9BQU87QUFDeEYsV0FBT2dELEtBQUt0QyxLQUFLc0MsS0FBS0Q7RUFDeEI7QUFDRjtBQUNBckQsRUFBRUMsR0FBRyxjQUFjLENBQ2pCLFVBQ0EsVUFDQSxXQUNBLGFBQ0EsWUFDQSxVQUNBLFVBQUEsQ0FDRDtBQUNELElBQUlzRCxJQUFJdEQ7QUFDUixJQUFNdUQsSUFBSy9ELE9BQU0sSUFBSThELEVBQUU5RCxDQUFDO0FBQXhCLElBQTJCZ0UsSUFBS2hFLE9BQU0rRCxFQUFFL0QsQ0FBQyxFQUFFNEIsUUFBUSxLQUFLO0FBQXhELElBQTJEcUMsSUFBSUEsQ0FBQ2pFLEdBQUdDLE1BQU07QUFDdkVELE1BQUlnRSxFQUFFaEUsQ0FBQyxHQUFHQyxJQUFJK0QsRUFBRS9ELENBQUM7QUFDakIsUUFBTUMsSUFBSUQsRUFBRW9CLEtBQUtyQixHQUFHLEtBQUs7QUFDekIsU0FBT2tFLE1BQU1DLEtBQUs7SUFBRUMsUUFBUWxFLElBQUk7RUFBRSxHQUFHLENBQUNvQixHQUFHQyxNQUFNdkIsRUFBRWtDLElBQUlYLEdBQUcsS0FBSyxDQUFDO0FBQ2hFO0FBSkEsSUFJRzhDLElBQUk7O0VBRUwsTUFBTTtJQUNKLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQSxNQUFNO0lBQ0osd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsMEJBQTBCO0VBQzVCOzs7RUFHQSxNQUFNO0lBQ0osb0RBQW9EO0VBQ3REOztFQUVBLE1BQU07SUFDSixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFDQSxJQUFNQyxJQUFOLE1BQVE7RUFDTjVELGNBQWM7QUFDWkgsTUFBRSxNQUFNLGNBQWMsQ0FBQyxDQUFDO0FBQ3hCQSxNQUFFLE1BQU0sWUFBWSxDQUFDLENBQUM7QUFDdEJBLE1BQUUsTUFBTSxZQUFZLENBQUMsQ0FBQztBQUN0QkEsTUFBRSxNQUFNLGNBQWMsQ0FBQyxDQUFDO0VBQzFCOztFQUVBZ0UsRUFBRXRFLEdBQUc7QUFDSCxXQUFPLEtBQUt1RSxXQUFXcEIsT0FBT25ELEdBQUc7RUFDbkM7O0VBRUF3RSxlQUFleEUsR0FBR0MsR0FBRztBQUNuQixRQUFJb0IsSUFBSTtBQUNSLGFBQUFvRCxLQUFBLEdBQUFDLGtCQUFxQjlFLE9BQU8rRSxRQUFRUCxDQUFDLEdBQUFLLEtBQUFDLGdCQUFBUCxRQUFBTSxNQUFHO0FBQXhDLFlBQVcsQ0FBQ25ELEdBQUdxQyxDQUFDLElBQUFlLGdCQUFBRCxFQUFBO0FBQ2QsVUFBSTFELFNBQVNPLENBQUMsSUFBSXRCLEVBQUc7QUFDckIyRCxRQUFFMUQsQ0FBQyxNQUFNLFdBQVdvQixJQUFJc0MsRUFBRTFELENBQUM7SUFDN0I7QUFDQSxXQUFPb0I7RUFDVDtFQUNBdUQsS0FBSzVFLEdBQUc7QUFDTixXQUFPLEtBQUt1RSxXQUFXTSxVQUFVN0UsR0FBRztFQUN0QztFQUNBOEUsS0FBSzlFLEdBQUdDLEdBQUdvQixHQUFHO0FBQ1osUUFBSSxDQUFDLEtBQUtrRCxXQUFXcEIsS0FDbkIsT0FBTSxJQUFJNEIsTUFBTSx1Q0FBdUM7QUFDekQsUUFBSSxDQUFDLEtBQUtSLFdBQVdNLFFBQ25CLE9BQU0sSUFBSUUsTUFBTSwwQ0FBMEM7QUFDNUQsU0FBS1IsV0FBV25CLFFBQVFwRCxHQUFHLEtBQUt1RSxXQUFXakIsTUFBTXJELEdBQUcsS0FBS3NFLFdBQVdTLFVBQVUzRDtBQUM5RSxVQUFNQyxJQUFJd0MsRUFBQSxHQUFBbUIsT0FBSyxLQUFLVixXQUFXcEIsTUFBSSxHQUFBLEVBQUE4QixPQUFJakYsR0FBQyxHQUFBLEVBQUFpRixPQUFJaEYsQ0FBQyxDQUFFLEVBQUVtQyxPQUMvQyxZQUNGLEdBQUd1QixJQUFJLEtBQUthLGVBQ1YsS0FBS0QsV0FBV3BCLE1BQ2hCLEtBQUtvQixXQUFXTSxPQUNsQixHQUFHakIsSUFBQSxHQUFBcUIsT0FBTyxLQUFLVixXQUFXTSxTQUFPLEdBQUEsRUFBQUksT0FBSXRCLENBQUM7QUFDdEMsV0FBT3RDLE1BQU0sSUFBSSxLQUFLNkQsU0FBUzVELENBQUMsSUFBSXNDLElBQUl2QyxNQUFNLElBQUksS0FBSzhELFNBQVM3RCxDQUFDLElBQUlzQyxJQUFJdkMsTUFBTSxNQUFNLEtBQUsrRCxXQUFXOUQsQ0FBQyxJQUFJc0MsSUFBSTtFQUNoSDtFQUNBeUIsR0FBR3JGLEdBQUdDLEdBQUc7QUFDUCxRQUFJLENBQUMsS0FBS3NFLFdBQVdNLFdBQVcsQ0FBQyxLQUFLTixXQUFXcEIsUUFBUSxDQUFDLEtBQUtvQixXQUFXbkIsU0FBUyxDQUFDLEtBQUttQixXQUFXakIsSUFDbEcsT0FBTSxJQUFJeUIsTUFBTSx1REFBdUQ7QUFDekUsVUFBTTFELElBQUl5QyxFQUFBLEdBQUFtQixPQUNMLEtBQUtWLFdBQVdwQixNQUFJLEdBQUEsRUFBQThCLE9BQUksS0FBS1YsV0FBV25CLE9BQUssR0FBQSxFQUFBNkIsT0FBSSxLQUFLVixXQUFXakIsR0FBRyxDQUN6RSxHQUFHaEMsSUFBSXdDLEVBQUEsR0FBQW1CLE9BQUssS0FBS1YsV0FBV3BCLE1BQUksR0FBQSxFQUFBOEIsT0FBSWpGLEdBQUMsR0FBQSxFQUFBaUYsT0FBSWhGLENBQUMsQ0FBRTtBQUM1QyxRQUFJcUIsRUFBRWlDLFNBQVNsQyxDQUFDLEtBQUtDLEVBQUVtQyxPQUFPcEMsQ0FBQyxFQUM3QixPQUFNLElBQUkwRCxNQUFNLHFDQUFxQztBQUN2RCxVQUFNcEIsSUFBSSxLQUFLYSxlQUNiLEtBQUtELFdBQVdwQixNQUNoQixLQUFLb0IsV0FBV00sT0FDbEIsR0FBR2pCLElBQUEsR0FBQXFCLE9BQU8sS0FBS1YsV0FBV00sU0FBTyxHQUFBLEVBQUFJLE9BQUl0QixDQUFDLEdBQUkyQixJQUFJaEUsRUFBRUYsS0FBS0MsR0FBRyxLQUFLO0FBQzdELGFBQVNrRSxJQUFJLEdBQUdBLEtBQUtELEdBQUdDLEtBQUs7QUFDM0IsWUFBTUMsSUFBSW5FLEVBQUVZLElBQUlzRCxHQUFHLEtBQUssRUFBRW5ELE9BQU8sWUFBWTtBQUM3QyxXQUFLbUMsV0FBV1MsWUFBWSxJQUFJLEtBQUtFLFNBQVNNLENBQUMsSUFBSTVCLElBQUksS0FBS1csV0FBV1MsWUFBWSxJQUFJLEtBQUtHLFNBQVNLLENBQUMsSUFBSTVCLElBQUksS0FBS1csV0FBV1MsWUFBWSxNQUFNLEtBQUtJLFdBQVdJLENBQUMsSUFBSTVCO0lBQ3ZLO0FBQ0EsV0FBTztFQUNUOztFQUVBRyxFQUFFL0QsR0FBR0MsR0FBRztBQUNOLFdBQU8sS0FBSzZFO01BQ1Y5RTtNQUNBQztNQUNBOztJQUVGO0VBQ0Y7O0VBRUFGLEVBQUVDLEdBQUdDLEdBQUc7QUFDTixXQUFPLEtBQUs2RTtNQUNWOUU7TUFDQUM7TUFDQTs7SUFFRjtFQUNGOztFQUVBc0YsRUFBRXZGLEdBQUdDLEdBQUc7QUFDTixXQUFPLEtBQUs2RTtNQUNWOUU7TUFDQUM7TUFDQTs7SUFFRjtFQUNGOztFQUVBd0YsS0FBSztBQUNILFdBQU8sS0FBS2I7TUFDVjs7SUFFRjtFQUNGOztFQUVBakIsSUFBSTtBQUNGLFdBQU8sS0FBS2lCO01BQ1Y7O0lBRUY7RUFDRjs7RUFFQTVFLElBQUk7QUFDRixXQUFPLEtBQUs0RTtNQUNWOztJQUVGO0VBQ0Y7O0VBRUFyRSxJQUFJO0FBQ0YsV0FBTyxLQUFLcUU7TUFDVjs7SUFFRjtFQUNGOztFQUVBVSxJQUFJO0FBQ0YsV0FBTyxLQUFLVjtNQUNWOztJQUVGO0VBQ0Y7O0VBRUFoQixJQUFJO0FBQ0YsV0FBTyxLQUFLZ0I7TUFDVjs7SUFFRjtFQUNGOztFQUVBL0csSUFBSTtBQUNGLFdBQU8sS0FBSytHO01BQ1Y7O0lBRUY7RUFDRjs7RUFFQXZELElBQUk7QUFDRixXQUFPLEtBQUt1RDtNQUNWOztJQUVGO0VBQ0Y7QUFDRjtBQUNBLElBQU1jLElBQUlBLE1BQU07QUFDZCxRQUFNM0YsSUFBSSxJQUFJc0UsRUFBRTtBQUNoQixTQUFPdEUsRUFBRXVFLEVBQUUsSUFBSSxFQUFFbUIsR0FBRyxFQUFFMUYsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsQ0FBQyxFQUFFd0IsRUFBRSxHQUFHLENBQUMsRUFBRTVCLEVBQUUsRUFBRTVELEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxHQUFHLEVBQUUsRUFBRXdCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxFQUFFLEVBQUV2RixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFOUUsRUFBRSxFQUFFUixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxDQUFDLEVBQUV3QixFQUFFLEdBQUcsQ0FBQyxFQUFFRCxFQUFFLEVBQUV2RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXhILEVBQUUsRUFBRWtDLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFekIsRUFBRSxFQUFFN0QsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLElBQUksRUFBRSxFQUFFd0IsRUFBRSxJQUFJLENBQUMsRUFBRUEsRUFBRSxJQUFJLENBQUMsR0FBR3hGLEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUU0RCxFQUFFLEVBQUU1RCxFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUV3QixFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFdkYsRUFBRSxFQUFFRCxFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRTlFLEVBQUUsRUFBRVIsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFd0IsRUFBRSxHQUFHLENBQUMsRUFBRUQsRUFBRSxFQUFFdkYsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV6QixFQUFFLEVBQUU3RCxFQUFFLElBQUksQ0FBQyxFQUFFc0YsR0FBRyxJQUFJLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsSUFBSSxFQUFFLEVBQUV3QixFQUFFLElBQUksQ0FBQyxFQUFFQSxFQUFFLElBQUksQ0FBQyxFQUFFMUgsRUFBRSxFQUFFa0MsRUFBRSxJQUFJLENBQUMsR0FBR0EsRUFBRXVFLEVBQUUsSUFBSSxFQUFFbUIsR0FBRyxFQUFFMUYsRUFBRSxHQUFHLENBQUMsRUFBRTRELEVBQUUsRUFBRTVELEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHLEVBQUUsRUFBRXdCLEVBQUUsR0FBRyxFQUFFLEVBQUVGLEdBQUcsR0FBRyxFQUFFLEVBQUVyRixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRXdCLEVBQUUsR0FBRyxDQUFDLEVBQUVoRixFQUFFLEVBQUVSLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxHQUFHLEVBQUUsRUFBRXdCLEVBQUUsR0FBRyxDQUFDLEVBQUVGLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEVBQUUsRUFBRXZGLEVBQUUsR0FBRyxFQUFFLEVBQUVsQyxFQUFFLEVBQUVrQyxFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUV3QixFQUFFLEdBQUcsRUFBRSxFQUFFM0IsRUFBRSxFQUFFN0QsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLElBQUksRUFBRSxFQUFFd0IsRUFBRSxJQUFJLENBQUMsRUFBRUEsRUFBRSxJQUFJLENBQUMsR0FBR3hGLEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFMUIsRUFBRSxFQUFFNUQsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFc0IsR0FBRyxHQUFHLEVBQUUsRUFBRUUsRUFBRSxHQUFHLEVBQUUsRUFBRUYsR0FBRyxHQUFHLEVBQUUsRUFBRXJGLEVBQUUsRUFBRUQsRUFBRSxHQUFHLENBQUMsRUFBRVEsRUFBRSxFQUFFUixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUV3QixFQUFFLEdBQUcsQ0FBQyxFQUFFRixHQUFHLEdBQUcsQ0FBQyxFQUFFQyxFQUFFLEVBQUV2RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUV3QixFQUFFLEdBQUcsRUFBRSxFQUFFMUgsRUFBRSxFQUFFa0MsRUFBRSxHQUFHLEVBQUUsRUFBRTZELEVBQUUsRUFBRTdELEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLElBQUksQ0FBQyxFQUFFdEIsRUFBRSxJQUFJLENBQUMsRUFBRXNCLEdBQUcsSUFBSSxDQUFDLEVBQUVFLEVBQUUsSUFBSSxDQUFDLEVBQUVGLEdBQUcsSUFBSSxDQUFDLEdBQUd0RixFQUFFdUUsRUFBRSxJQUFJLEVBQUVtQixHQUFHLEVBQUUxRixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRTFCLEVBQUUsRUFBRTVELEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxHQUFHLEVBQUUsRUFBRXdCLEVBQUUsR0FBRyxDQUFDLEVBQUVGLEdBQUcsR0FBRyxDQUFDLEVBQUVyRixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRXdCLEVBQUUsR0FBRyxDQUFDLEVBQUVoRixFQUFFLEVBQUVSLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxHQUFHLENBQUMsRUFBRXdCLEVBQUUsR0FBRyxDQUFDLEVBQUVGLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEVBQUUsRUFBRXZGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFeEgsRUFBRSxFQUFFa0MsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUV6QixFQUFFLEVBQUU3RCxFQUFFLElBQUksQ0FBQyxFQUFFc0YsR0FBRyxJQUFJLENBQUMsRUFBRXRCLEVBQUUsSUFBSSxDQUFDLEVBQUVBLEVBQUUsSUFBSSxDQUFDLEVBQUV3QixFQUFFLElBQUksQ0FBQyxFQUFFRixHQUFHLElBQUksQ0FBQyxFQUFFSSxHQUFHLEVBQUUxRixFQUFFLElBQUksRUFBRSxHQUFHQSxFQUFFdUUsRUFBRSxJQUFJLEVBQUVtQixHQUFHLEVBQUUxRixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRTFCLEVBQUUsRUFBRTVELEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHLEVBQUUsRUFBRXdCLEVBQUUsR0FBRyxFQUFFLEVBQUVGLEdBQUcsR0FBRyxFQUFFLEVBQUVyRixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFOUUsRUFBRSxFQUFFUixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUV3QixFQUFFLEdBQUcsQ0FBQyxFQUFFRixHQUFHLEdBQUcsQ0FBQyxFQUFFQyxFQUFFLEVBQUV2RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXhILEVBQUUsRUFBRWtDLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRXdCLEVBQUUsR0FBRyxFQUFFLEVBQUUzQixFQUFFLEVBQUU3RCxFQUFFLElBQUksQ0FBQyxFQUFFc0YsR0FBRyxJQUFJLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsSUFBSSxDQUFDLEVBQUV3QixFQUFFLElBQUksQ0FBQyxFQUFFRixHQUFHLElBQUksQ0FBQyxHQUFHdEYsRUFBRXVFLEVBQUUsSUFBSSxFQUFFbUIsR0FBRyxFQUFFMUYsRUFBRSxHQUFHLENBQUMsRUFBRTRELEVBQUUsRUFBRTVELEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRXdCLEVBQUUsR0FBRyxFQUFFLEVBQUV2RixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFOUUsRUFBRSxFQUFFUixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUV3QixFQUFFLEdBQUcsQ0FBQyxFQUFFRixHQUFHLEdBQUcsQ0FBQyxFQUFFQyxFQUFFLEVBQUV2RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUV3QixFQUFFLEdBQUcsRUFBRSxFQUFFM0IsRUFBRSxFQUFFN0QsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLElBQUksRUFBRSxFQUFFd0IsRUFBRSxJQUFJLENBQUMsRUFBRUYsR0FBRyxJQUFJLENBQUMsR0FBR3RGLEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUU0RCxFQUFFLEVBQUU1RCxFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxDQUFDLEVBQUVzQixHQUFHLEdBQUcsQ0FBQyxFQUFFRSxFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFdkYsRUFBRSxFQUFFRCxFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRTlFLEVBQUUsRUFBRVIsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFd0IsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHLENBQUMsRUFBRUQsRUFBRSxFQUFFdkYsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV4SCxFQUFFLEVBQUVrQyxFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXpCLEVBQUUsRUFBRTdELEVBQUUsSUFBSSxDQUFDLEVBQUVzRixHQUFHLElBQUksQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxJQUFJLEVBQUUsRUFBRXdCLEVBQUUsSUFBSSxDQUFDLEVBQUVBLEVBQUUsSUFBSSxDQUFDLEdBQUd4RixFQUFFdUUsRUFBRSxJQUFJLEVBQUVtQixHQUFHLEVBQUUxRixFQUFFLEdBQUcsQ0FBQyxFQUFFNEQsRUFBRSxFQUFFNUQsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsRUFBRSxFQUFFd0IsRUFBRSxHQUFHLEVBQUUsRUFBRUYsR0FBRyxHQUFHLEVBQUUsRUFBRXJGLEVBQUUsRUFBRUQsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsQ0FBQyxFQUFFd0IsRUFBRSxHQUFHLENBQUMsRUFBRWhGLEVBQUUsRUFBRVIsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFd0IsRUFBRSxHQUFHLEVBQUUsRUFBRUQsRUFBRSxFQUFFdkYsRUFBRSxHQUFHLEVBQUUsRUFBRTZELEVBQUUsRUFBRTdELEVBQUUsSUFBSSxDQUFDLEVBQUVzRixHQUFHLElBQUksQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRXNCLEdBQUcsR0FBRyxFQUFFLEVBQUVFLEVBQUUsSUFBSSxDQUFDLEVBQUVGLEdBQUcsSUFBSSxDQUFDLEVBQUV4SCxFQUFFLEVBQUVrQyxFQUFFLEdBQUcsRUFBRSxFQUFFMEYsR0FBRyxFQUFFMUYsRUFBRSxJQUFJLEVBQUUsRUFBRXNGLEdBQUcsSUFBSSxFQUFFLEVBQUV0QixFQUFFLElBQUksRUFBRSxFQUFFd0IsRUFBRSxJQUFJLEVBQUUsR0FBR3hGLEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFMUIsRUFBRSxFQUFFNUQsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFd0IsRUFBRSxHQUFHLENBQUMsRUFBRUYsR0FBRyxHQUFHLENBQUMsRUFBRXJGLEVBQUUsRUFBRUQsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsQ0FBQyxFQUFFd0IsRUFBRSxHQUFHLENBQUMsRUFBRWhGLEVBQUUsRUFBRVIsRUFBRSxHQUFHLENBQUMsRUFBRXVGLEVBQUUsRUFBRXZGLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRXdCLEVBQUUsR0FBRyxFQUFFLEVBQUUzQixFQUFFLEVBQUU3RCxFQUFFLElBQUksQ0FBQyxFQUFFc0YsR0FBRyxJQUFJLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUV3QixFQUFFLElBQUksQ0FBQyxFQUFFMUgsRUFBRSxFQUFFa0MsRUFBRSxJQUFJLENBQUMsR0FBR0EsRUFBRXVFLEVBQUUsSUFBSSxFQUFFbUIsR0FBRyxFQUFFMUYsRUFBRSxHQUFHLENBQUMsRUFBRTRELEVBQUUsRUFBRTVELEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHLEVBQUUsRUFBRXdCLEVBQUUsR0FBRyxFQUFFLEVBQUVGLEdBQUcsR0FBRyxFQUFFLEVBQUVyRixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVRLEVBQUUsRUFBRVIsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEVBQUUsRUFBRXZGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRXdCLEVBQUUsR0FBRyxFQUFFLEVBQUUxSCxFQUFFLEVBQUVrQyxFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUV3QixFQUFFLEdBQUcsRUFBRSxFQUFFM0IsRUFBRSxFQUFFN0QsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLElBQUksQ0FBQyxFQUFFc0IsR0FBRyxJQUFJLENBQUMsRUFBRUUsRUFBRSxJQUFJLENBQUMsRUFBRUYsR0FBRyxJQUFJLENBQUMsR0FBR3RGLEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRXdCLEVBQUUsR0FBRyxDQUFDLEVBQUU1QixFQUFFLEVBQUU1RCxFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxFQUFFLEVBQUV3QixFQUFFLEdBQUcsRUFBRSxFQUFFRixHQUFHLEdBQUcsRUFBRSxFQUFFckYsRUFBRSxFQUFFRCxFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRTlFLEVBQUUsRUFBRVIsRUFBRSxHQUFHLENBQUMsRUFBRXVGLEVBQUUsRUFBRXZGLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxFQUFFLEVBQUVsQyxFQUFFLEVBQUVrQyxFQUFFLEdBQUcsRUFBRSxFQUFFNkQsRUFBRSxFQUFFN0QsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLElBQUksRUFBRSxFQUFFd0IsRUFBRSxJQUFJLENBQUMsRUFBRWxFLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRXdCLEVBQUUsR0FBRyxDQUFDLEdBQUd4RixFQUFFdUUsRUFBRSxJQUFJLEVBQUVtQixHQUFHLEVBQUUxRixFQUFFLEdBQUcsQ0FBQyxFQUFFNEQsRUFBRSxFQUFFNUQsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFd0IsRUFBRSxHQUFHLENBQUMsRUFBRUYsR0FBRyxHQUFHLENBQUMsRUFBRXJGLEVBQUUsRUFBRUQsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUU5RSxFQUFFLEVBQUVSLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRXdCLEVBQUUsR0FBRyxDQUFDLEVBQUVELEVBQUUsRUFBRXZGLEVBQUUsR0FBRyxDQUFDLEVBQUVsQyxFQUFFLEVBQUVrQyxFQUFFLEdBQUcsQ0FBQyxFQUFFNkQsRUFBRSxFQUFFN0QsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLElBQUksRUFBRSxFQUFFd0IsRUFBRSxJQUFJLENBQUMsRUFBRUYsR0FBRyxJQUFJLENBQUMsR0FBR3RGLEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRXNCLEdBQUcsR0FBRyxDQUFDLEVBQUVFLEVBQUUsR0FBRyxDQUFDLEVBQUVGLEdBQUcsR0FBRyxDQUFDLEVBQUUxQixFQUFFLEVBQUU1RCxFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVzQixHQUFHLEdBQUcsRUFBRSxFQUFFRSxFQUFFLEdBQUcsRUFBRSxFQUFFRixHQUFHLEdBQUcsRUFBRSxFQUFFckYsRUFBRSxFQUFFRCxFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxDQUFDLEVBQUV3QixFQUFFLEdBQUcsQ0FBQyxFQUFFaEYsRUFBRSxFQUFFUixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVzQixHQUFHLEdBQUcsRUFBRSxFQUFFRSxFQUFFLEdBQUcsRUFBRSxFQUFFRixHQUFHLEdBQUcsRUFBRSxFQUFFQyxFQUFFLEVBQUV2RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxDQUFDLEVBQUVzQixHQUFHLEdBQUcsQ0FBQyxFQUFFRSxFQUFFLEdBQUcsRUFBRSxFQUFFRixHQUFHLEdBQUcsRUFBRSxFQUFFeEgsRUFBRSxFQUFFa0MsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFd0IsRUFBRSxHQUFHLEVBQUUsRUFBRTNCLEVBQUUsRUFBRTdELEVBQUUsSUFBSSxDQUFDLEVBQUVzRixHQUFHLElBQUksQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxJQUFJLEVBQUUsRUFBRXdCLEVBQUUsSUFBSSxDQUFDLEVBQUVBLEVBQUUsSUFBSSxDQUFDLEdBQUd4RixFQUFFdUUsRUFBRSxJQUFJLEVBQUVtQixHQUFHLEVBQUUxRixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRUUsRUFBRSxHQUFHLENBQUMsRUFBRTVCLEVBQUUsRUFBRTVELEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxHQUFHLEVBQUUsRUFBRXdCLEVBQUUsR0FBRyxFQUFFLEVBQUVGLEdBQUcsR0FBRyxFQUFFLEVBQUVyRixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxHQUFHLENBQUMsRUFBRXdCLEVBQUUsR0FBRyxDQUFDLEVBQUVGLEdBQUcsR0FBRyxDQUFDLEVBQUU5RSxFQUFFLEVBQUVSLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRXdCLEVBQUUsR0FBRyxFQUFFLEVBQUVELEVBQUUsRUFBRXZGLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxFQUFFLEVBQUVsQyxFQUFFLEVBQUVrQyxFQUFFLEdBQUcsRUFBRSxFQUFFNkQsRUFBRSxFQUFFN0QsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFd0IsRUFBRSxJQUFJLENBQUMsR0FBR3hGLEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFMUIsRUFBRSxFQUFFNUQsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsRUFBRSxFQUFFd0IsRUFBRSxHQUFHLENBQUMsRUFBRUYsR0FBRyxHQUFHLENBQUMsRUFBRXJGLEVBQUUsRUFBRUQsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsQ0FBQyxFQUFFd0IsRUFBRSxHQUFHLENBQUMsRUFBRWhGLEVBQUUsRUFBRVIsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEVBQUUsRUFBRXZGLEVBQUUsR0FBRyxDQUFDLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVsQyxFQUFFLEVBQUVrQyxFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXpCLEVBQUUsRUFBRTdELEVBQUUsSUFBSSxDQUFDLEVBQUVzRixHQUFHLElBQUksQ0FBQyxFQUFFdEIsRUFBRSxJQUFJLENBQUMsRUFBRXNCLEdBQUcsSUFBSSxDQUFDLEVBQUVFLEVBQUUsSUFBSSxDQUFDLEVBQUVGLEdBQUcsSUFBSSxDQUFDLEVBQUVJLEdBQUcsRUFBRTFCLEVBQUUsSUFBSSxFQUFFLEdBQUdoRSxFQUFFdUUsRUFBRSxJQUFJLEVBQUVtQixHQUFHLEVBQUUxRixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRTFCLEVBQUUsRUFBRTVELEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRXNCLEdBQUcsR0FBRyxFQUFFLEVBQUVFLEVBQUUsR0FBRyxFQUFFLEVBQUVGLEdBQUcsR0FBRyxFQUFFLEVBQUVyRixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFOUUsRUFBRSxFQUFFUixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRUMsRUFBRSxFQUFFdkYsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFc0IsR0FBRyxHQUFHLEVBQUUsRUFBRUUsRUFBRSxHQUFHLEVBQUUsRUFBRUYsR0FBRyxHQUFHLEVBQUUsRUFBRXhILEVBQUUsRUFBRWtDLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxHQUFHLEVBQUUsRUFBRXdCLEVBQUUsR0FBRyxFQUFFLEVBQUVGLEdBQUcsR0FBRyxFQUFFLEVBQUV6QixFQUFFLEVBQUU3RCxFQUFFLElBQUksQ0FBQyxFQUFFc0YsR0FBRyxJQUFJLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsSUFBSSxDQUFDLEVBQUV3QixFQUFFLElBQUksQ0FBQyxFQUFFRixHQUFHLElBQUksQ0FBQyxHQUFHdEYsRUFBRXVFLEVBQUUsSUFBSSxFQUFFbUIsR0FBRyxFQUFFMUYsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsQ0FBQyxFQUFFd0IsRUFBRSxHQUFHLENBQUMsRUFBRTVCLEVBQUUsRUFBRTVELEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxHQUFHLENBQUMsRUFBRXdCLEVBQUUsR0FBRyxFQUFFLEVBQUVGLEdBQUcsR0FBRyxFQUFFLEVBQUVyRixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFOUUsRUFBRSxFQUFFUixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRUMsRUFBRSxFQUFFdkYsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFd0IsRUFBRSxHQUFHLEVBQUUsRUFBRTNCLEVBQUUsRUFBRTdELEVBQUUsSUFBSSxDQUFDLEVBQUVzRixHQUFHLElBQUksQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxJQUFJLEVBQUUsRUFBRXdCLEVBQUUsSUFBSSxDQUFDLEVBQUVGLEdBQUcsSUFBSSxDQUFDLEVBQUV4SCxFQUFFLEVBQUVrQyxFQUFFLElBQUksQ0FBQyxHQUFHQSxFQUFFdUUsRUFBRSxJQUFJLEVBQUVtQixHQUFHLEVBQUUxRixFQUFFLEdBQUcsQ0FBQyxFQUFFNEQsRUFBRSxFQUFFNUQsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUV0QixFQUFFLEdBQUcsQ0FBQyxFQUFFc0IsR0FBRyxHQUFHLENBQUMsRUFBRUUsRUFBRSxHQUFHLEVBQUUsRUFBRUYsR0FBRyxHQUFHLEVBQUUsRUFBRXJGLEVBQUUsRUFBRUQsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUU5RSxFQUFFLEVBQUVSLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRXdCLEVBQUUsR0FBRyxDQUFDLEVBQUVELEVBQUUsRUFBRXZGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFeEgsRUFBRSxFQUFFa0MsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUV6QixFQUFFLEVBQUU3RCxFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxJQUFJLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVzQixHQUFHLEdBQUcsRUFBRSxFQUFFRSxFQUFFLEdBQUcsRUFBRSxFQUFFRixHQUFHLEdBQUcsRUFBRSxHQUFHdEYsRUFBRXVFLEVBQUUsSUFBSSxFQUFFbUIsR0FBRyxFQUFFMUYsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUVFLEVBQUUsR0FBRyxDQUFDLEVBQUVGLEdBQUcsR0FBRyxDQUFDLEVBQUUxQixFQUFFLEVBQUU1RCxFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxFQUFFLEVBQUV3QixFQUFFLEdBQUcsRUFBRSxFQUFFRixHQUFHLEdBQUcsRUFBRSxFQUFFOUUsRUFBRSxFQUFFUixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVzQixHQUFHLEdBQUcsRUFBRSxFQUFFRSxFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFM0IsRUFBRSxFQUFFN0QsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFc0IsR0FBRyxHQUFHLEVBQUUsRUFBRUUsRUFBRSxJQUFJLENBQUMsRUFBRUYsR0FBRyxJQUFJLENBQUMsRUFBRUksR0FBRyxFQUFFMUYsRUFBRSxJQUFJLEVBQUUsRUFBRXNGLEdBQUcsSUFBSSxFQUFFLEVBQUV0QixFQUFFLElBQUksRUFBRSxFQUFFd0IsRUFBRSxJQUFJLEVBQUUsR0FBR3hGLEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFMUIsRUFBRSxFQUFFNUQsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFd0IsRUFBRSxHQUFHLENBQUMsRUFBRUYsR0FBRyxHQUFHLENBQUMsRUFBRTlFLEVBQUUsRUFBRVIsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFc0IsR0FBRyxHQUFHLEVBQUUsRUFBRUUsRUFBRSxHQUFHLENBQUMsRUFBRUYsR0FBRyxHQUFHLENBQUMsRUFBRXpCLEVBQUUsRUFBRTdELEVBQUUsSUFBSSxDQUFDLEVBQUVzRixHQUFHLElBQUksQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxJQUFJLENBQUMsRUFBRXdCLEVBQUUsSUFBSSxDQUFDLEVBQUVGLEdBQUcsSUFBSSxDQUFDLEVBQUVJLEdBQUcsRUFBRTFCLEVBQUUsSUFBSSxFQUFFLEVBQUVzQixHQUFHLElBQUksRUFBRSxHQUFHdEYsRUFBRXVFLEVBQUUsSUFBSSxFQUFFbUIsR0FBRyxFQUFFMUYsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUUxQixFQUFFLEVBQUU1RCxFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxDQUFDLEVBQUVzQixHQUFHLEdBQUcsQ0FBQyxFQUFFRSxFQUFFLEdBQUcsRUFBRSxFQUFFRixHQUFHLEdBQUcsRUFBRSxFQUFFOUUsRUFBRSxFQUFFUixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUV3QixFQUFFLEdBQUcsQ0FBQyxFQUFFRixHQUFHLEdBQUcsQ0FBQyxFQUFFekIsRUFBRSxFQUFFN0QsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLElBQUksQ0FBQyxFQUFFc0IsR0FBRyxJQUFJLENBQUMsRUFBRUUsRUFBRSxJQUFJLENBQUMsRUFBRUYsR0FBRyxJQUFJLENBQUMsR0FBR3RGLEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUU0RCxFQUFFLEVBQUU1RCxFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVzQixHQUFHLEdBQUcsRUFBRSxFQUFFRSxFQUFFLEdBQUcsRUFBRSxFQUFFRixHQUFHLEdBQUcsRUFBRSxFQUFFOUUsRUFBRSxFQUFFUixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxDQUFDLEVBQUVzQixHQUFHLEdBQUcsQ0FBQyxFQUFFRSxFQUFFLEdBQUcsQ0FBQyxFQUFFRixHQUFHLEdBQUcsQ0FBQyxFQUFFekIsRUFBRSxFQUFFN0QsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLElBQUksQ0FBQyxFQUFFc0IsR0FBRyxJQUFJLEVBQUUsRUFBRUUsRUFBRSxJQUFJLENBQUMsRUFBRUYsR0FBRyxJQUFJLENBQUMsR0FBRztJQUNsOUxILFVBQVVuRixFQUFFbUY7SUFDWkMsVUFBVXBGLEVBQUVvRjtJQUNaQyxZQUFZckYsRUFBRXFGO0VBQ2hCO0FBQ0Y7QUFQQSxJQU9HO0VBQUVGLFVBQVVTO0VBQUdSLFVBQVVTO0VBQUdSLFlBQVlTO0FBQUUsSUFBSUgsRUFBRTtBQVBuRCxJQU9zREksSUFBSy9GLE9BQU07QUFDL0QsUUFBTUMsSUFBSStELEVBQUVoRSxDQUFDO0FBQ2IsTUFBSSxDQUFDQyxFQUFFbUIsUUFBUSxFQUNiLE9BQU0sSUFBSTRELE1BQUEsb0JBQUFFLE9BQ1ksT0FBT2xGLEdBQUMsa0NBQUEsQ0FDOUI7QUFDRixTQUFPQztBQUNUO0FBZEEsSUFjR2YsSUFBS2MsT0FBTSxDQUFDVixFQUFFVSxDQUFDO0FBZGxCLElBY3FCVixJQUFLVSxPQUFNO0FBQzlCLFFBQU1DLElBQUk4RixFQUFFL0YsQ0FBQyxHQUFHRSxJQUFJRCxFQUFFc0QsSUFBSSxHQUFHakMsSUFBSXJCLEVBQUVvQyxPQUFPLFlBQVk7QUFDdEQsU0FBTyxDQUFDLEVBQUV3RCxFQUFFdkUsQ0FBQyxLQUFLcEIsS0FBSyxLQUFLQSxLQUFLLEtBQUssQ0FBQzBGLEVBQUV0RSxDQUFDO0FBQzVDO0FBakJBLElBaUJHbEMsSUFBS1ksT0FBTTtBQUNaLFFBQU1DLElBQUk4RixFQUFFL0YsQ0FBQztBQUNiLFNBQU8sQ0FBQyxDQUFDOEYsRUFBRTdGLEVBQUVvQyxPQUFPLFlBQVksQ0FBQztBQUNuQztBQXBCQSxJQW9CRzNFLElBQUtzQyxPQUFNO0FBQ1osUUFBTUMsSUFBSThGLEVBQUUvRixDQUFDLEdBQUdFLElBQUlELEVBQUVvQyxPQUFPLFlBQVk7QUFDekMsTUFBSXdELEVBQUUzRixDQUFDLEVBQ0wsUUFBTztJQUNMb0QsTUFBTXBEO0lBQ044RixNQUFNO0lBQ05DLE1BQU1KLEVBQUUzRixDQUFDO0VBQ1g7QUFDRixNQUFJMEYsRUFBRTFGLENBQUMsRUFDTCxRQUFPO0lBQ0xvRCxNQUFNcEQ7SUFDTjhGLE1BQU07SUFDTkMsTUFBTUwsRUFBRTFGLENBQUM7RUFDWDtBQUNGO0FBQ0UsVUFBTW9CLElBQUlyQixFQUFFc0QsSUFBSTtBQUNoQixXQUFPO01BQ0xELE1BQU1wRDtNQUNOOEYsTUFBTTFFLE1BQU0sS0FBS0EsTUFBTTtNQUN2QjJFLE1BQU1oRyxFQUFFb0MsT0FBTyxNQUFNO0lBQ3ZCO0VBQ0Y7QUFDRjtBQTFDQSxJQTBDR3pFLElBQUlBLENBQUNvQyxHQUFHQyxHQUFHQyxJQUFJLFNBQU87QUFDdkIsUUFBTW9CLElBQUl5RSxFQUFFL0YsQ0FBQyxHQUFHdUIsSUFBSXdFLEVBQUU5RixDQUFDO0FBQ3ZCLFNBQU9DLElBQUkrRCxFQUFFM0MsR0FBR0MsQ0FBQyxFQUFFMkUsT0FBT2hILENBQUMsRUFBRWlILElBQUt2QyxPQUFNQSxFQUFFdkIsT0FBTyxZQUFZLENBQUMsSUFBSTRCLEVBQUUzQyxHQUFHQyxDQUFDLEVBQUUyRSxPQUFRdEMsT0FBTWdDLEVBQUVoQyxFQUFFdkIsT0FBTyxZQUFZLENBQUMsQ0FBQyxFQUFFOEQsSUFBS3ZDLE9BQU1BLEVBQUV2QixPQUFPLFlBQVksQ0FBQztBQUN0SjtBQTdDQSxJQTZDR3ZELElBQUlBLENBQUNrQixHQUFHQyxHQUFHQyxJQUFJLFNBQU87QUFDdkIsUUFBTW9CLElBQUl5RSxFQUFFL0YsQ0FBQyxHQUFHdUIsSUFBSXdFLEVBQUU5RixDQUFDO0FBQ3ZCLFNBQU9DLElBQUkrRCxFQUFFM0MsR0FBR0MsQ0FBQyxFQUFFMkUsT0FBTzVHLENBQUMsRUFBRTZHLElBQUt2QyxPQUFNQSxFQUFFdkIsT0FBTyxZQUFZLENBQUMsSUFBSTRCLEVBQUUzQyxHQUFHQyxDQUFDLEVBQUUyRSxPQUFRdEMsT0FBTXRFLEVBQUVzRSxDQUFDLEtBQUtBLEVBQUVMLElBQUksS0FBSyxLQUFLSyxFQUFFTCxJQUFJLEtBQUssQ0FBQyxFQUFFNEMsSUFBS3ZDLE9BQU1BLEVBQUV2QixPQUFPLFlBQVksQ0FBQztBQUNqSztBQWhEQSxJQWdERzdFLElBQUlBLENBQUN3QyxJQUFJLEdBQUdDLElBQUk4RCxFQUFFLE1BQU07QUFDekIsTUFBSTlELElBQUkrRCxFQUFFL0QsQ0FBQyxHQUFHRCxNQUFNLEdBQUc7QUFDckIsUUFBSVYsRUFBRVcsQ0FBQyxFQUNMLFFBQU9BLEVBQUVvQyxPQUFPLFlBQVk7QUFDOUJyQyxRQUFJO0VBQ047QUFDQSxRQUFNRSxJQUFJRixJQUFJLElBQUksSUFBSTtBQUN0QixNQUFJc0IsSUFBSUksS0FBSzBFLElBQUlwRyxDQUFDO0FBQ2xCLFNBQU9zQixJQUFJLElBQ1RyQixLQUFJQSxFQUFFaUMsSUFBSWhDLEdBQUcsS0FBSyxHQUFHWixFQUFFVyxDQUFDLEtBQUtxQjtBQUMvQixTQUFPckIsRUFBRW9DLE9BQU8sWUFBWTtBQUM5QjtBQTNEQSxJQTJER2dFLEtBQXFCeEcsdUJBQU95RyxPQUF1QnpHLHVCQUFPQyxlQUFlO0VBQzFFeUcsV0FBVztFQUNYaEosYUFBYUM7RUFDYkMsY0FBY0M7RUFDZEMsb0JBQW9CQztFQUNwQmlCLG9CQUFvQkM7RUFDcEJHLFdBQVdDO0VBQ1hDLFVBQVVDO0VBQ1ZDLFdBQVdDO0FBQ2IsR0FBR2tILE9BQU9DLGFBQWE7RUFBRW5HLE9BQU87QUFBUyxDQUFDLENBQUM7QUFwRTNDLElBb0U4Q29HLEtBQUs7RUFDakRDLHlCQUF5QixDQUFDLFFBQVEsSUFBSTtFQUN0Q0MsWUFBWSxDQUFDLFNBQVMsS0FBSztFQUMzQkMsdUJBQXVCLENBQUMsUUFBUSxJQUFJO0VBQ3BDQyxvQkFBb0IsQ0FBQyxTQUFTLE1BQU07RUFDcENDLGlCQUFpQixDQUFDLE1BQU0sSUFBSTtFQUM1QkMsWUFBWSxDQUFDLFFBQVEsSUFBSTtFQUN6QkMseUJBQXlCLENBQUMsT0FBTyxJQUFJO0VBQ3JDQywwQkFBMEIsQ0FBQyxPQUFPLEtBQUs7RUFDdkNDLGdCQUFnQixDQUFDLEtBQUssS0FBSztFQUMzQkMscUJBQXFCLENBQUMsTUFBTSxLQUFLO0VBQ2pDQyxhQUFhLENBQUMsT0FBTyxLQUFLO0VBQzFCQyxjQUFjLENBQUMsT0FBTyxLQUFLO0VBQzNCQyx5QkFBeUIsQ0FBQyxPQUFPLEdBQUc7RUFDcENDLGlCQUFpQixDQUFDLE9BQU8sS0FBSztFQUM5QkMsV0FBVyxDQUFDLE1BQU0sS0FBSztFQUN2QkMsb0JBQW9CLENBQUMsUUFBUSxNQUFNO0VBQ25DQyxVQUFVLENBQUMsT0FBTyxLQUFLO0VBQ3ZCQyxlQUFlLENBQUMsUUFBUSxNQUFNO0VBQzlCQyx5QkFBeUIsQ0FBQyxPQUFPLEtBQUs7RUFDdENDLGFBQWEsQ0FBQyxPQUFPLEtBQUs7RUFDMUJDLGNBQWMsQ0FBQyxLQUFLLElBQUk7RUFDeEJDLHFCQUFxQixDQUFDLE1BQU0sS0FBSztFQUNqQ0MsYUFBYSxDQUFDLE1BQU0sTUFBTTtFQUMxQkMsY0FBYyxDQUFDLE9BQU8sS0FBSztBQUM3QjtBQTdGQSxJQTZGR0MsSUFBSTtFQUNMLEdBQUcsQ0FBQyxlQUFlLGNBQWM7RUFDakMsR0FBRyxDQUFDLDJCQUEyQixZQUFZO0VBQzNDLEdBQUcsQ0FBQyx5QkFBeUIsb0JBQW9CO0VBQ2pELEdBQUcsQ0FBQyxtQkFBbUIsWUFBWTtFQUNuQyxHQUFHLENBQUMsMkJBQTJCLDBCQUEwQjtFQUN6RCxHQUFHLENBQUMsa0JBQWtCLHFCQUFxQjtFQUMzQyxHQUFHLENBQUMsZUFBZSxjQUFjO0VBQ2pDLEdBQUcsQ0FBQywyQkFBMkIsaUJBQWlCO0VBQ2hELEdBQUcsQ0FBQyxhQUFhLG9CQUFvQjtFQUNyQyxJQUFJLENBQUMsWUFBWSxlQUFlO0VBQ2hDLElBQUksQ0FBQywyQkFBMkIsYUFBYTtFQUM3QyxJQUFJLENBQUMsZ0JBQWdCLHFCQUFxQjtBQUM1QztBQTFHQSxJQTBHR0MsS0FBSztFQUNOLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2QjtBQWpJQSxJQWlJR0MsSUFBSTtFQUNMSixhQUFhO0VBQ2JDLGNBQWM7RUFDZHZCLHlCQUF5QjtFQUN6QkMsWUFBWTtFQUNaQyx1QkFBdUI7RUFDdkJDLG9CQUFvQjtFQUNwQkMsaUJBQWlCO0VBQ2pCQyxZQUFZO0VBQ1pDLHlCQUF5QjtFQUN6QkMsMEJBQTBCO0VBQzFCQyxnQkFBZ0I7RUFDaEJDLHFCQUFxQjtFQUNyQkMsYUFBYTtFQUNiQyxjQUFjO0VBQ2RDLHlCQUF5QjtFQUN6QkMsaUJBQWlCO0VBQ2pCQyxXQUFXO0VBQ1hDLG9CQUFvQjtFQUNwQkMsVUFBVTtFQUNWQyxlQUFlO0VBQ2ZDLHlCQUF5QjtFQUN6QkMsYUFBYTtFQUNiQyxjQUFjO0VBQ2RDLHFCQUFxQjtBQUN2QjtBQTFKQSxJQTBKR3hKLElBQUlBLENBQUN3QixHQUFHQyxHQUFHQyxNQUFNO0FBQ2xCLFFBQU1vQixJQUFJdEIsS0FBSyxNQUFNLEtBQUssSUFBSXVCLElBQUl2QixJQUFJLEtBQUs0RCxJQUFJLFFBQVFDLElBQUk2QyxHQUFHeEcsQ0FBQyxFQUFFb0IsTUFBTSxLQUFLLElBQUksQ0FBQztBQUNqRixNQUFJaUUsSUFBSTdELEtBQUtDLE1BQU1KLElBQUksQ0FBQztBQUN4QixHQUNFLGVBQ0EsZ0JBQ0EsMkJBQ0EsWUFBQSxFQUNBK0csU0FBU3BJLENBQUMsTUFBTXFGLElBQUk3RCxLQUFLQyxPQUFPSixJQUFJLEtBQUssQ0FBQztBQUM1QyxNQUFJaUUsSUFBSTlELEtBQUtDLE1BQU1KLElBQUlxQyxJQUFJQyxDQUFDLElBQUkwQjtBQUNoQyxRQUFNRSxJQUFJMkMsR0FBQSxHQUFBbEQsT0FBTWxGLEdBQUMsR0FBQSxFQUFBa0YsT0FBSWhGLENBQUMsQ0FBQTtBQUN0QixTQUFPdUYsTUFBTUQsS0FBS0MsSUFBSTFCLEVBQUEsR0FBQW1CLE9BQUtsRixHQUFDLEdBQUEsRUFBQWtGLE9BQUlqRixHQUFDLEdBQUEsRUFBQWlGLE9BQUlNLENBQUMsQ0FBRSxFQUFFbkQsT0FBTyxZQUFZO0FBQy9EO0FBdEtBLElBc0tHM0QsS0FBS0EsQ0FBQ3NCLEdBQUdDLE1BQU07QUFDaEIsUUFBTUMsSUFBSSxDQUFBO0FBQ1YsTUFBSW9CLElBQUkwQyxFQUFFaEUsQ0FBQztBQUNYLFFBQU11QixJQUFJeUMsRUFBRS9ELEtBQUtELENBQUM7QUFDbEIsU0FBT3NCLEVBQUVrQyxTQUFTakMsQ0FBQyxLQUFLRCxFQUFFb0MsT0FBT25DLENBQUMsS0FBSztBQUNyQyxVQUFNcUMsSUFBSXRDLEVBQUU4QixLQUFLLEdBQUdTLElBQUl2QyxFQUFFK0IsTUFBTSxJQUFJO0FBQ3BDOEUsTUFBRXRFLENBQUMsRUFBRTBFLFFBQVNoRCxPQUFNO0FBQ2xCLFlBQU1DLElBQUl6QixFQUFFdkYsRUFBRW9GLEdBQUdDLEdBQUcwQixDQUFDLENBQUM7QUFDdEIsT0FBQ0MsS0FBSyxRQUFRQSxFQUFFaEMsU0FBU2pDLENBQUMsS0FBS2lFLEtBQUssUUFBUUEsRUFBRTlCLE9BQU9uQyxDQUFDLE9BQU9pRSxLQUFLLFFBQVFBLEVBQUUvQixRQUFRbkMsQ0FBQyxLQUFLa0UsS0FBSyxRQUFRQSxFQUFFOUIsT0FBT3BDLENBQUMsTUFBTXBCLEVBQUVzSSxLQUFLO1FBQzVIbEYsTUFBTWtDLEVBQUVuRCxPQUFPLFlBQVk7UUFDM0JvRyxNQUFNbEQ7UUFDTlUsTUFBTW9DLEVBQUU5QyxDQUFDO1FBQ1RtRCxPQUFPO01BQ1QsQ0FBQztJQUNILENBQUMsR0FBR3BILElBQUl1QyxNQUFNLEtBQUt2QyxFQUFFWSxJQUFJLEdBQUcsTUFBTSxFQUFFTixRQUFRLE1BQU0sSUFBSU4sRUFBRVksSUFBSSxHQUFHLE9BQU8sRUFBRU4sUUFBUSxPQUFPO0VBQ3pGO0FBQ0EsU0FBTzFCO0FBQ1Q7QUF2TEEsSUF1TEd0QixJQUFJQSxDQUFDb0IsR0FBR0MsTUFBTTtBQUNmLE1BQUlDLElBQUk4RCxFQUFFaEUsQ0FBQyxFQUFFb0MsU0FBUyxHQUFHLE9BQU87QUFDaEMsUUFBTWQsSUFBSTBDLEVBQUUvRCxLQUFLRCxDQUFDLEVBQUVrQyxJQUFJLEdBQUcsT0FBTyxHQUFHWCxJQUFJLENBQUE7QUFDekMsU0FBT3JCLEVBQUVzRCxTQUFTbEMsQ0FBQyxLQUFLcEIsRUFBRXdELE9BQU9wQyxDQUFDLEtBQUs7QUFDckMsVUFBTXVDLElBQUkzRCxFQUFFa0QsS0FBSyxHQUFHbUMsSUFBSXJGLEVBQUVtRCxNQUFNLElBQUk7QUFDcEM4RSxNQUFFNUMsQ0FBQyxFQUFFZ0QsUUFBUy9DLE9BQU07QUFDbEIsWUFBTUMsSUFBSTFCLEVBQUV2RixFQUFFcUYsR0FBRzBCLEdBQUdDLENBQUMsQ0FBQztBQUN0QmpFLFFBQUVpSCxLQUFLO1FBQUVDLE1BQU1qRDtRQUFHbEMsTUFBTW1DO01BQUUsQ0FBQztJQUM3QixDQUFDLEdBQUd2RixFQUFFbUQsTUFBTSxNQUFNLEtBQUtuRCxJQUFJQSxFQUFFZ0MsSUFBSSxHQUFHLE1BQU0sRUFBRU4sUUFBUSxNQUFNLElBQUkxQixJQUFJQSxFQUFFZ0MsSUFBSSxHQUFHLE9BQU8sRUFBRU4sUUFBUSxPQUFPO0VBQ3JHO0FBQ0EsUUFBTWdDLElBQUksQ0FBQTtBQUNWLFNBQU9yQyxFQUFFZ0gsUUFBUSxDQUFDMUUsR0FBRzBCLE1BQU07QUFDekIsYUFBU0MsSUFBSTNCLEVBQUVQLE1BQU0vQixFQUFFZ0UsSUFBSSxDQUFDLEtBQUtDLEVBQUVoQyxTQUFTakMsRUFBRWdFLElBQUksQ0FBQyxFQUFFakMsSUFBSSxHQUFHa0MsSUFBSUEsRUFBRXRELElBQUksR0FBRyxLQUFLLEVBQzVFMEIsR0FBRTRFLEtBQUs7TUFDTGpGLEtBQUtpQztNQUNMaUQsTUFBTTVFLEVBQUU0RTtNQUNSeEMsTUFBTW9DLEVBQUV4RSxFQUFFNEUsSUFBSTtNQUNkQyxPQUFPbEQsRUFBRW5FLEtBQUt3QyxFQUFFUCxNQUFNLEtBQUssSUFBSTtJQUNqQyxDQUFDO0VBQ0wsQ0FBQyxHQUFHckQsTUFBTUEsSUFBSUQsSUFBSTRELEVBQUVzQyxPQUFRckMsT0FBTUEsRUFBRU4sSUFBSUksVUFBVTNELEdBQUdDLEdBQUcsS0FBSyxDQUFDLEVBQUVrRyxJQUFLdEMsUUFBTztJQUMxRVAsTUFBTU8sRUFBRU4sSUFBSWxCLE9BQU8sWUFBWTtJQUMvQm9HLE1BQU01RSxFQUFFNEU7SUFDUnhDLE1BQU1wQyxFQUFFb0M7SUFDUnlDLE9BQU83RSxFQUFFNkU7RUFDWCxFQUFFO0FBQ0o7QUFoTkEsSUFnTkdDLEtBQXFCOUksdUJBQU95RyxPQUF1QnpHLHVCQUFPQyxlQUFlO0VBQzFFeUcsV0FBVztFQUNYaEksa0JBQWtCQztFQUNsQkMsZUFBZUM7RUFDZkMsc0JBQXNCQztBQUN4QixHQUFHNEgsT0FBT0MsYUFBYTtFQUFFbkcsT0FBTztBQUFTLENBQUMsQ0FBQztBQXJOM0MsSUFxTjhDc0ksSUFBSTtFQUNoRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7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QUEsR0FBSTdCLFFBQVMvQyxPQUFNO0FBQ3pGdEYsUUFBRXNJLEtBQUs7UUFDTGxGLE1BQU1oQyxFQUFFZSxPQUFPLFlBQVk7UUFDM0I0RCxNQUFNVDtRQUNONEYsTUFBTTtNQUNSLENBQUM7SUFDSCxDQUFDLEdBQUdGLEdBQUczQyxRQUFTaEQsT0FBTUEsRUFBRWpFLEdBQUdwQixDQUFDLENBQUMsR0FBR29CLElBQUlBLEVBQUVZLElBQUksR0FBRyxLQUFLO0VBQ3BEO0FBQ0EsU0FBT2hDLEVBQUVtTCxPQUFPLENBQUN4SCxHQUFHMEIsTUFBTTtBQUN4QixVQUFNQyxJQUFJM0IsRUFBRXNILEtBQU0xRixPQUFNQSxFQUFFbkMsU0FBU2lDLEVBQUVqQyxJQUFJO0FBQ3pDLFdBQU9rQyxJQUFJQSxFQUFFUyxLQUFLdUMsS0FBS2pELEVBQUVVLElBQUksSUFBSXBDLEVBQUUyRSxLQUFLO01BQUVsRixNQUFNaUMsRUFBRWpDO01BQU0yQyxNQUFNLENBQUNWLEVBQUVVLElBQUk7SUFBRSxDQUFDLEdBQUdwQztFQUM3RSxHQUFHLENBQUEsQ0FBRTtBQUNQO0FBdHRCQSxJQXN0Qkd5SCxLQUFLO0VBQ05yTixtQkFBbUJDO0FBQ3JCO0FBeHRCQSxJQXd0QkdxTixLQUFxQjFMLHVCQUFPeUcsT0FBdUJ6Ryx1QkFBT0MsZUFBZTtFQUMxRXlHLFdBQVc7RUFDWHlFLFNBQVNNO0VBQ1RyTixtQkFBbUJDO0FBQ3JCLEdBQUdzSSxPQUFPQyxhQUFhO0VBQUVuRyxPQUFPO0FBQVMsQ0FBQyxDQUFDO0FBNXRCM0MsSUE0dEI4Q2tMLEtBQUs7RUFDakQsR0FBR25GO0VBQ0gsR0FBR3NDO0VBQ0gsR0FBR29DO0VBQ0gsR0FBR1E7QUFDTDsiLAogICJuYW1lcyI6IFsiQ2hpbmVzZURheXNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJmaW5kV29ya2RheSIsICJYIiwgImdldERheURldGFpbCIsICJKIiwgImdldEhvbGlkYXlzSW5SYW5nZSIsICJLIiwgImdldEx1bmFyRGF0ZSIsICJtIiwgImdldEx1bmFyRGF0ZXNJblJhbmdlIiwgIkkiLCAiZ2V0THVuYXJGZXN0aXZhbHMiLCAiVSIsICJnZXRMdW5hclllYXJzIiwgIngiLCAiZ2V0U29sYXJEYXRlRnJvbUx1bmFyIiwgImoiLCAiZ2V0U29sYXJUZXJtRGF0ZSIsICJMIiwgImdldFNvbGFyVGVybXMiLCAiYXQiLCAiZ2V0U29sYXJUZXJtc0luUmFuZ2UiLCAiJCIsICJnZXRXb3JrZGF5c0luUmFuZ2UiLCAiUSIsICJnZXRZZWFyTGVhcE1vbnRoIiwgIkMiLCAiaXNIb2xpZGF5IiwgIlQiLCAiaXNJbkxpZXUiLCAiRyIsICJpc1dvcmtkYXkiLCAiZiIsICJtb250aERheXMiLCAiRCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAicSIsICJPYmplY3QiLCAiZGVmaW5lUHJvcGVydHkiLCAiUCIsICJyIiwgInQiLCAiZSIsICJlbnVtZXJhYmxlIiwgImNvbmZpZ3VyYWJsZSIsICJ3cml0YWJsZSIsICJ2YWx1ZSIsICJ1IiwgImwiLCAibDIiLCAiY29uc3RydWN0b3IiLCAiX2RhdGUiLCAiRGF0ZSIsICJ0b0RhdGUiLCAibWF0Y2giLCAiVVRDIiwgInBhcnNlSW50IiwgImlzTmFOIiwgImdldFRpbWUiLCAicmVwbGFjZSIsICJpc1ZhbGlkIiwgImRpZmYiLCAiYSIsICJvIiwgImdldEZ1bGxZZWFyIiwgImdldE1vbnRoIiwgIk1hdGgiLCAiZmxvb3IiLCAic3RhcnRPZiIsICJzZXRNb250aCIsICJzZXREYXRlIiwgInNldEhvdXJzIiwgImVuZE9mIiwgImdldERhdGUiLCAiYWRkIiwgInNldEZ1bGxZZWFyIiwgInN1YnRyYWN0IiwgImZvcm1hdCIsICJZWVlZIiwgIk1NIiwgInRvU3RyaW5nIiwgInBhZFN0YXJ0IiwgIkREIiwgIkhIIiwgImdldEhvdXJzIiwgIm1tIiwgImdldE1pbnV0ZXMiLCAic3MiLCAiZ2V0U2Vjb25kcyIsICJkZGRkIiwgImRheXNPZldlZWsiLCAiZ2V0RGF5IiwgInllYXIiLCAibW9udGgiLCAiZGF0ZSIsICJkYXkiLCAiaXNCZWZvcmUiLCAiaXNBZnRlciIsICJpc1NhbWUiLCAiaXNCZXR3ZWVuIiwgInMiLCAibiIsICJTIiwgImgiLCAidyIsICJZIiwgIkFycmF5IiwgImZyb20iLCAibGVuZ3RoIiwgIlciLCAieiIsICJ5IiwgImRheURldGFpbHMiLCAiZ2V0SG9saWRheURheXMiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgImVudHJpZXMiLCAibWFyayIsICJob2xpZGF5IiwgInNhdmUiLCAiRXJyb3IiLCAiZGF5VHlwZSIsICJjb25jYXQiLCAiaG9saWRheXMiLCAid29ya2RheXMiLCAiaW5MaWV1RGF5cyIsICJ0byIsICJkIiwgImkiLCAiXyIsICJueSIsICJWIiwgIk0iLCAiayIsICJaIiwgImMiLCAid29yayIsICJuYW1lIiwgImZpbHRlciIsICJtYXAiLCAiYWJzIiwgInR0IiwgImZyZWV6ZSIsICJfX3Byb3RvX18iLCAiU3ltYm9sIiwgInRvU3RyaW5nVGFnIiwgImV0IiwgInRoZV9iZWdpbm5pbmdfb2Zfc3ByaW5nIiwgInJhaW5fd2F0ZXIiLCAidGhlX3dha2luZ19vZl9pbnNlY3RzIiwgInRoZV9zcHJpbmdfZXF1aW5veCIsICJwdXJlX2JyaWdodG5lc3MiLCAiZ3JhaW5fcmFpbiIsICJ0aGVfYmVnaW5uaW5nX29mX3N1bW1lciIsICJsZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW4iLCAiZ3JhaW5faW5fYmVhcmQiLCAidGhlX3N1bW1lcl9zb2xzdGljZSIsICJsZXNzZXJfaGVhdCIsICJncmVhdGVyX2hlYXQiLCAidGhlX2JlZ2lubmluZ19vZl9hdXR1bW4iLCAidGhlX2VuZF9vZl9oZWF0IiwgIndoaXRlX2RldyIsICJ0aGVfYXV0dW1uX2VxdWlub3giLCAiY29kZV9kZXciLCAiZnJvc3RfZGVzY2VudCIsICJ0aGVfYmVnaW5uaW5nX29mX3dpbnRlciIsICJsZXNzZXJfc25vdyIsICJncmVhdGVyX3Nub3ciLCAidGhlX3dpbnRlcl9zb2xzdGljZSIsICJsZXNzZXJfY29sZCIsICJncmVhdGVyX2NvbGQiLCAiTyIsICJydCIsICJFIiwgImluY2x1ZGVzIiwgImZvckVhY2giLCAicHVzaCIsICJ0ZXJtIiwgImluZGV4IiwgIm90IiwgImciLCAiRiIsICJBIiwgIkIiLCAiSCIsICJudCIsICJSIiwgInYiLCAicCIsICJiIiwgInN0IiwgIml0IiwgImR0IiwgImx1bmFyWWVhciIsICJsdW5hclllYXJDTiIsICJzcGxpdCIsICJOdW1iZXIiLCAiam9pbiIsICJsZWFwTW9udGgiLCAibGVhcE1vbnRoQ04iLCAiZGF5cyIsICJsdCIsICJmaWxsIiwgImx1bmFyTW9uIiwgImx1bmFyRGF5IiwgImlzTGVhcCIsICJ6b2RpYWMiLCAieWVhckN5bCIsICJtb25DeWwiLCAiZGF5Q3lsIiwgImx1bmFyTW9uQ04iLCAibHVuYXJEYXlDTiIsICJOIiwgImxlYXBNb250aERhdGUiLCAiaHQiLCAiX3QiLCAiZGVmYXVsdCIsICJ5dCIsICJ3dCIsICJmaW5kIiwgInR5cGUiLCAicmVkdWNlIiwgInV0IiwgImN0IiwgIkR0Il0KfQo=
