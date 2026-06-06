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
  getLunarDate: () => Y,
  getLunarDatesInRange: () => I,
  getLunarFestivals: () => U,
  getLunarYears: () => R,
  getSolarDateFromLunar: () => j,
  getSolarTermDate: () => F,
  getSolarTerms: () => at,
  getSolarTermsInRange: () => E,
  getWorkdaysInRange: () => Q,
  getYearLeapMonth: () => C,
  isHoliday: () => O,
  isInLieu: () => G,
  isWorkday: () => D,
  monthDays: () => g
});
module.exports = __toCommonJS(ChineseDays_exports);
var q = Object.defineProperty;
var P = (r, t, e) => t in r ? q(r, t, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: e
}) : r[t] = e;
var c = (r, t, e) => P(r, typeof t != "symbol" ? t + "" : t, e);
var h = class h2 {
  constructor(t) {
    c(this, "_date");
    if (t instanceof h2) this._date = new Date(t.toDate());
    else if (t instanceof Date) this._date = new Date(t);
    else if (typeof t == "string" || typeof t == "number") {
      if (typeof t == "string") {
        const e = t.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
        e ? this._date = new Date(parseInt(e[1], 10), parseInt(e[2], 10) - 1, parseInt(e[3], 10)) : isNaN(new Date(t).getTime()) ? this._date = new Date(t.replace(/-/g, "/")) : this._date = new Date(t);
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
    const a = new h2(t).toDate();
    switch (e) {
      case "year":
        return this._date.getFullYear() - a.getFullYear();
      case "month":
        return (this._date.getFullYear() - a.getFullYear()) * 12 + (this._date.getMonth() - a.getMonth());
      case "day":
      default:
        return Math.floor((Date.UTC(this._date.getFullYear(), this._date.getMonth(), this._date.getDate()) - Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())) / (1e3 * 60 * 60 * 24));
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
    return new h2(e);
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
    return new h2(e);
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
    return new h2(a);
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
      dddd: h2.daysOfWeek[this._date.getDay()]
    };
    return t.replace(/YYYY|MM|DD|HH|mm|ss|dddd/g, (a) => e[a].toString());
  }
  year(t) {
    if (t === void 0) return this._date.getFullYear();
    const e = new Date(this._date);
    return e.setFullYear(t), new h2(e);
  }
  month(t) {
    if (t === void 0) return this._date.getMonth();
    const e = new Date(this._date);
    return e.setMonth(t), new h2(e);
  }
  date(t) {
    if (t === void 0) return this._date.getDate();
    const e = new Date(this._date);
    return e.setDate(t), new h2(e);
  }
  day(t) {
    if (t === void 0) return this._date.getDay();
    {
      const e = this._date.getDay(), a = t - e, o = new Date(this._date);
      return o.setDate(this._date.getDate() + a), new h2(o);
    }
  }
  isBefore(t) {
    const e = new h2(t).toDate();
    return this._date.getTime() < e.getTime();
  }
  isAfter(t) {
    const e = new h2(t).toDate();
    return this._date.getTime() > e.getTime();
  }
  isSame(t, e = "day") {
    const a = new h2(t).toDate();
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
    const o = new h2(t).startOf(a).toDate(), n = new h2(e).endOf(a).toDate(), i = this.toDate();
    return i >= o && i <= n;
  }
};
c(h, "daysOfWeek", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
var k = h;
var _ = (r) => new k(r);
var w = (r) => _(r).startOf("day");
var M = (r, t) => {
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
    for (var _i = 0, _Object$entries = Object.entries(W); _i < _Object$entries.length; _i++) {
      const [o, n] = _Object$entries[_i];
      if (parseInt(o) > t) break;
      n[e] !== void 0 && (a = n[e]);
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
    const o = _("".concat(this.dayDetails.year, "-").concat(t, "-").concat(e)).format("YYYY-MM-DD"), n = this.getHolidayDays(this.dayDetails.year, this.dayDetails.holiday), i = "".concat(this.dayDetails.holiday, ",").concat(n);
    return a === 2 ? this.holidays[o] = i : a === 1 ? this.workdays[o] = i : a === 3 && (this.inLieuDays[o] = i), this;
  }
  to(t, e) {
    if (!this.dayDetails.holiday || !this.dayDetails.year || !this.dayDetails.month || !this.dayDetails.day) throw new Error("should set year/month/day before saving holiday range");
    const a = _("".concat(this.dayDetails.year, "-").concat(this.dayDetails.month, "-").concat(this.dayDetails.day)), o = _("".concat(this.dayDetails.year, "-").concat(t, "-").concat(e));
    if (o.isBefore(a) || o.isSame(a)) throw new Error("end date should be after start date");
    const n = this.getHolidayDays(this.dayDetails.year, this.dayDetails.holiday), i = "".concat(this.dayDetails.holiday, ",").concat(n), d = o.diff(a, "day");
    for (let s = 1; s <= d; s++) {
      const l = a.add(s, "day").format("YYYY-MM-DD");
      this.dayDetails.dayType === 2 ? this.holidays[l] = i : this.dayDetails.dayType === 1 ? this.workdays[l] = i : this.dayDetails.dayType === 3 && (this.inLieuDays[l] = i);
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
  holidays: p,
  workdays: L,
  inLieuDays: Z
} = V();
var f = (r) => {
  const t = w(r);
  if (!t.isValid()) throw new Error("unsupported type ".concat(typeof r, ", expected type is Date or Dayjs"));
  return t;
};
var O = (r) => !D(r);
var D = (r) => {
  const t = f(r), e = t.day(), a = t.format("YYYY-MM-DD");
  return !!(L[a] || e >= 1 && e <= 5 && !p[a]);
};
var G = (r) => {
  const t = f(r);
  return !!Z[t.format("YYYY-MM-DD")];
};
var J = (r) => {
  const t = f(r), e = t.format("YYYY-MM-DD");
  if (L[e]) return {
    date: e,
    work: true,
    name: L[e]
  };
  if (p[e]) return {
    date: e,
    work: false,
    name: p[e]
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
  const a = f(r), o = f(t);
  return e ? M(a, o).filter(O).map((n) => n.format("YYYY-MM-DD")) : M(a, o).filter((n) => p[n.format("YYYY-MM-DD")]).map((n) => n.format("YYYY-MM-DD"));
};
var Q = (r, t, e = true) => {
  const a = f(r), o = f(t);
  return e ? M(a, o).filter(D).map((n) => n.format("YYYY-MM-DD")) : M(a, o).filter((n) => D(n) && n.day() >= 1 && n.day() <= 5).map((n) => n.format("YYYY-MM-DD"));
};
var X = (r = 0, t = _()) => {
  if (t = w(t), r === 0) {
    if (D(t)) return t.format("YYYY-MM-DD");
    r = 1;
  }
  const e = r > 0 ? 1 : -1;
  let a = Math.abs(r);
  for (; a > 0; ) t = t.add(e, "day"), D(t) && a--;
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
  isWorkday: D
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
var $ = {
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
var F = (r, t, e) => {
  const a = r >= 2e3 ? 21 : 20, o = r % 100, n = 0.2422, i = et[e][a === 21 ? 1 : 0];
  let d = Math.floor(o / 4);
  ["lesser_cold", "greater_cold", "the_beginning_of_spring", "rain_water"].includes(e) && (d = Math.floor((o - 1) / 4));
  let s = Math.floor(o * n + i) - d;
  const l = rt["".concat(r, "_").concat(e)];
  return l && (s += l), _("".concat(r, "-").concat(t, "-").concat(s)).format("YYYY-MM-DD");
};
var at = (r, t) => {
  const e = [];
  let a = w(r);
  const o = w(t || r);
  for (; a.isBefore(o) || a.isSame(o); ) {
    const n = a.year(), i = a.month() + 1;
    T[i].forEach((d) => {
      const s = _(F(n, i, d));
      (s != null && s.isBefore(o) || s != null && s.isSame(o)) && (s != null && s.isAfter(a) || s != null && s.isSame(a)) && e.push({
        date: s.format("YYYY-MM-DD"),
        term: d,
        name: $[d],
        index: 1
      });
    }), a = i === 12 ? a.add(1, "year").startOf("year") : a.add(1, "month").startOf("month");
  }
  return e;
};
var E = (r, t) => {
  let e = w(r).subtract(1, "month");
  const a = w(t || r).add(1, "month"), o = [];
  for (; e.isBefore(a) || e.isSame(a); ) {
    const i = e.year(), d = e.month() + 1;
    T[d].forEach((s) => {
      const l = _(F(i, d, s));
      o.push({
        term: s,
        date: l
      });
    }), e.month() === 11 ? e = e.add(1, "year").startOf("year") : e = e.add(1, "month").startOf("month");
  }
  const n = [];
  return o.forEach((i, d) => {
    for (let s = i.date; o[d + 1] && s.isBefore(o[d + 1].date); s = s.add(1, "day")) n.push({
      day: s,
      term: i.term,
      name: $[i.term],
      index: s.diff(i.date, "day") + 1
    });
  }), t || (t = r), n.filter((i) => i.day.isBetween(r, t, "day")).map((i) => ({
    date: i.day.format("YYYY-MM-DD"),
    term: i.term,
    name: i.name,
    index: i.index
  }));
};
var ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getSolarTermDate: F,
  getSolarTerms: at,
  getSolarTermsInRange: E
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
var v = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
var A = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"];
var H = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
var B = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
var nt = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
var x = (r) => {
  let t = 348;
  for (let e = 32768; e > 8; e >>= 1) t += m[r - 1900] & e ? 1 : 0;
  return t + N(r);
};
var b = (r) => m[r - 1900] & 15;
var N = (r) => b(r) ? m[r - 1900] & 65536 ? 30 : 29 : 0;
var S = (r) => H[r % 10] + B[r % 12];
var g = (r, t) => m[r - 1900] & 65536 >> t ? 30 : 29;
var st = (r) => nt[(r - 4) % 12];
var it = (r) => {
  const t = ["初", "十", "廿", "三十"];
  if (r === 10) return "初十";
  if (r === 20) return "二十";
  if (r === 30) return "三十";
  const e = Math.floor(r / 10), a = r % 10;
  return t[e] + v[a];
};
var dt = (r) => "".concat(H[(r - 4) % 10]).concat(B[(r - 4) % 12], "年");
var R = (r, t) => {
  const e = [];
  for (let a = r; a <= t; a++) e.push({
    year: a,
    lunarYear: dt(a),
    lunarYearCN: a.toString().split("").map((o) => v[Number(o)]).join("")
  });
  return e;
};
var C = (r) => {
  const t = b(r);
  return {
    year: r,
    leapMonth: t || void 0,
    leapMonthCN: t ? "闰".concat(A[t - 1], "月") : void 0,
    days: t ? m[r - 1900] & 65536 ? 30 : 29 : 0
  };
};
var Y = (r) => {
  const t = new Array(7).fill(0);
  let e = 0, a = 0;
  const o = _(r), [n, i, d] = o.format("YYYY-MM-DD").split("-").map(Number);
  let s = Math.floor((Date.UTC(n, i - 1, d) - Date.UTC(1900, 0, 31)) / (24 * 60 * 60 * 1e3));
  t[5] = s + 40, t[4] = 14;
  let l = 1900;
  for (; l < 2100 && s > 0; l++) e = x(l), s -= e, t[4] += 12;
  s < 0 && (s += e, l--, t[4] -= 12), t[0] = l, t[3] = l - 1864, a = b(l), t[6] = 0;
  for (let y = 1; y < 13 && s >= 0; y++) a > 0 && y === a + 1 && t[6] === 0 ? (--y, t[6] = 1, e = N(l)) : e = g(l, y), t[6] === 1 && y === a + 1 && (t[6] = 0), s -= e, t[6] === 0 && t[4]++, t[1] = y;
  return s < 0 && (s += e, t[1]--, t[4]--), t[2] = s + 1, {
    date: o.format("YYYY-MM-DD"),
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
    yearCyl: S(t[3]),
    // 年柱
    monCyl: S(t[4]),
    // 月柱
    dayCyl: S(t[5]),
    // 日柱
    lunarYearCN: "".concat(t[0].toString().split("").map((y) => v[Number(y)]).join("")),
    // 农历年份中文表示
    lunarMonCN: "".concat(A[t[1]], "月"),
    // 农历月份中文表示
    lunarDayCN: it(t[2])
    // 农历日期中文表示
  };
};
var I = (r, t) => {
  const e = _(r), a = _(t), o = [];
  for (let n = e; n.isBefore(a) || n.isSame(a, "day"); n = n.add(1, "day")) o.push(Y(n));
  return o;
};
var j = (r) => {
  const t = _(r), e = t.year(), a = t.month() + 1, o = t.date();
  let n = 0;
  for (let u = 1900; u < e; u++) n += x(u);
  const i = b(e);
  for (let u = 1; u < a; u++) n += g(e, u), u === i && (n += N(e));
  n += o - 1;
  const d = _(new Date(1900, 0, 31)), s = d.add(n, "day").format("YYYY-MM-DD");
  let l = n, y;
  return i === a && (l += g(e, a), y = d.add(l, "day").format("YYYY-MM-DD")), {
    date: s,
    leapMonthDate: y
  };
};
var lt = {
  getLunarYears: R,
  getYearLeapMonth: C,
  getLunarDate: Y,
  getLunarDatesInRange: I,
  getSolarDateFromLunar: j
};
var ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lt,
  getLunarDate: Y,
  getLunarDatesInRange: I,
  getLunarYears: R,
  getSolarDateFromLunar: j,
  getYearLeapMonth: C,
  monthDays: g
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
    E(e).find((o) => o.term === "pure_brightness") && t.push({
      date: r.format("YYYY-MM-DD"),
      name: "寒食节",
      type: "solar_term"
    });
  },
  // 处理除夕（农历腊月最后一日）
  (r, t) => {
    const e = Y(r);
    if (e.lunarMon === 12 && e.lunarDay === g(e.lunarYear, 12)) {
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
  var n;
  const e = [];
  let a = _(r);
  const o = _(t || r);
  for (; a.isBefore(o) || a.isSame(o); ) {
    const i = Y(a);
    i.isLeap || (((n = _t[i.lunarMon]) == null ? void 0 : n[i.lunarDay]) || []).forEach((s) => {
      e.push({
        date: a.format("YYYY-MM-DD"),
        name: s,
        type: "lunar"
      });
    }), yt.forEach((d) => d(a, e)), a = a.add(1, "day");
  }
  return e.reduce((i, d) => {
    const s = i.find((l) => l.date === d.date);
    return s ? s.name.push(d.name) : i.push({
      date: d.date,
      name: [d.name]
    }), i;
  }, []);
};
var ut = {
  getLunarFestivals: U
};
var wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ut,
  getLunarFestivals: U
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NoaW5lc2VEYXlzL0NoaW5lc2VEYXlzLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jaGluZXNlLWRheXNAMS41Ljkvbm9kZV9tb2R1bGVzL2NoaW5lc2UtZGF5cy9kaXN0L2luZGV4LmVzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICdjaGluZXNlLWRheXMnO1xuIiwgInZhciBxID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIFAgPSAociwgdCwgZSkgPT4gdCBpbiByID8gcShyLCB0LCB7IGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAsIHZhbHVlOiBlIH0pIDogclt0XSA9IGU7XG52YXIgYyA9IChyLCB0LCBlKSA9PiBQKHIsIHR5cGVvZiB0ICE9IFwic3ltYm9sXCIgPyB0ICsgXCJcIiA6IHQsIGUpO1xuY29uc3QgaCA9IGNsYXNzIGgge1xuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgYyh0aGlzLCBcIl9kYXRlXCIpO1xuICAgIGlmICh0IGluc3RhbmNlb2YgaClcbiAgICAgIHRoaXMuX2RhdGUgPSBuZXcgRGF0ZSh0LnRvRGF0ZSgpKTtcbiAgICBlbHNlIGlmICh0IGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgIHRoaXMuX2RhdGUgPSBuZXcgRGF0ZSh0KTtcbiAgICBlbHNlIGlmICh0eXBlb2YgdCA9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB0ID09IFwibnVtYmVyXCIpXG4gICAgICBpZiAodHlwZW9mIHQgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBlID0gdC5tYXRjaCgvXihcXGR7NH0pLShcXGR7MSwyfSktKFxcZHsxLDJ9KSQvKTtcbiAgICAgICAgZSA/IHRoaXMuX2RhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICBwYXJzZUludChlWzFdLCAxMCksXG4gICAgICAgICAgcGFyc2VJbnQoZVsyXSwgMTApIC0gMSxcbiAgICAgICAgICBwYXJzZUludChlWzNdLCAxMClcbiAgICAgICAgKSA6IGlzTmFOKG5ldyBEYXRlKHQpLmdldFRpbWUoKSkgPyB0aGlzLl9kYXRlID0gbmV3IERhdGUodC5yZXBsYWNlKC8tL2csIFwiL1wiKSkgOiB0aGlzLl9kYXRlID0gbmV3IERhdGUodCk7XG4gICAgICB9IGVsc2VcbiAgICAgICAgdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuX2RhdGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKTtcbiAgfVxuICB0b0RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGU7XG4gIH1cbiAgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gIWlzTmFOKHRoaXMuX2RhdGUuZ2V0VGltZSgpKTtcbiAgfVxuICBkaWZmKHQsIGUgPSBcImRheVwiKSB7XG4gICAgY29uc3QgYSA9IG5ldyBoKHQpLnRvRGF0ZSgpO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBcInllYXJcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSAtIGEuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNhc2UgXCJtb250aFwiOlxuICAgICAgICByZXR1cm4gKHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSAtIGEuZ2V0RnVsbFllYXIoKSkgKiAxMiArICh0aGlzLl9kYXRlLmdldE1vbnRoKCkgLSBhLmdldE1vbnRoKCkpO1xuICAgICAgY2FzZSBcImRheVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoXG4gICAgICAgICAgKERhdGUuVVRDKFxuICAgICAgICAgICAgdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgdGhpcy5fZGF0ZS5nZXRNb250aCgpLFxuICAgICAgICAgICAgdGhpcy5fZGF0ZS5nZXREYXRlKClcbiAgICAgICAgICApIC0gRGF0ZS5VVEMoXG4gICAgICAgICAgICBhLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICBhLmdldE1vbnRoKCksXG4gICAgICAgICAgICBhLmdldERhdGUoKVxuICAgICAgICAgICkpIC8gKDFlMyAqIDYwICogNjAgKiAyNClcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cbiAgc3RhcnRPZih0KSB7XG4gICAgY29uc3QgZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSBcInllYXJcIjpcbiAgICAgICAgZS5zZXRNb250aCgwKSwgZS5zZXREYXRlKDEpLCBlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtb250aFwiOlxuICAgICAgICBlLnNldERhdGUoMSksIGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRheVwiOlxuICAgICAgICBlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBoKGUpO1xuICB9XG4gIGVuZE9mKHQpIHtcbiAgICBjb25zdCBlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICBlLnNldE1vbnRoKDExKSwgZS5zZXREYXRlKDMxKSwgZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtb250aFwiOlxuICAgICAgICBlLnNldERhdGUoXG4gICAgICAgICAgbmV3IERhdGUoZS5nZXRGdWxsWWVhcigpLCBlLmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKClcbiAgICAgICAgKSwgZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkYXlcIjpcbiAgICAgICAgZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBoKGUpO1xuICB9XG4gIGFkZCh0LCBlKSB7XG4gICAgY29uc3QgYSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBcInllYXJcIjpcbiAgICAgICAgYS5zZXRGdWxsWWVhcihhLmdldEZ1bGxZZWFyKCkgKyB0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgYS5zZXRNb250aChhLmdldE1vbnRoKCkgKyB0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICAgIGEuc2V0RGF0ZShhLmdldERhdGUoKSArIHQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBoKGEpO1xuICB9XG4gIHN1YnRyYWN0KHQsIGUpIHtcbiAgICByZXR1cm4gdGhpcy5hZGQoLXQsIGUpO1xuICB9XG4gIGZvcm1hdCh0KSB7XG4gICAgY29uc3QgZSA9IHtcbiAgICAgIFlZWVk6IHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIE1NOiAodGhpcy5fZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIiksXG4gICAgICBERDogdGhpcy5fZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIiksXG4gICAgICBISDogdGhpcy5fZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgbW06IHRoaXMuX2RhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgc3M6IHRoaXMuX2RhdGUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgZGRkZDogaC5kYXlzT2ZXZWVrW3RoaXMuX2RhdGUuZ2V0RGF5KCldXG4gICAgfTtcbiAgICByZXR1cm4gdC5yZXBsYWNlKC9ZWVlZfE1NfEREfEhIfG1tfHNzfGRkZGQvZywgKGEpID0+IGVbYV0udG9TdHJpbmcoKSk7XG4gIH1cbiAgeWVhcih0KSB7XG4gICAgaWYgKHQgPT09IHZvaWQgMCkgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgcmV0dXJuIGUuc2V0RnVsbFllYXIodCksIG5ldyBoKGUpO1xuICB9XG4gIG1vbnRoKHQpIHtcbiAgICBpZiAodCA9PT0gdm9pZCAwKSByZXR1cm4gdGhpcy5fZGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IGUgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICByZXR1cm4gZS5zZXRNb250aCh0KSwgbmV3IGgoZSk7XG4gIH1cbiAgZGF0ZSh0KSB7XG4gICAgaWYgKHQgPT09IHZvaWQgMCkgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGUgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICByZXR1cm4gZS5zZXREYXRlKHQpLCBuZXcgaChlKTtcbiAgfVxuICBkYXkodCkge1xuICAgIGlmICh0ID09PSB2b2lkIDApXG4gICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXREYXkoKTtcbiAgICB7XG4gICAgICBjb25zdCBlID0gdGhpcy5fZGF0ZS5nZXREYXkoKSwgYSA9IHQgLSBlLCBvID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgICByZXR1cm4gby5zZXREYXRlKHRoaXMuX2RhdGUuZ2V0RGF0ZSgpICsgYSksIG5ldyBoKG8pO1xuICAgIH1cbiAgfVxuICBpc0JlZm9yZSh0KSB7XG4gICAgY29uc3QgZSA9IG5ldyBoKHQpLnRvRGF0ZSgpO1xuICAgIHJldHVybiB0aGlzLl9kYXRlLmdldFRpbWUoKSA8IGUuZ2V0VGltZSgpO1xuICB9XG4gIGlzQWZ0ZXIodCkge1xuICAgIGNvbnN0IGUgPSBuZXcgaCh0KS50b0RhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRUaW1lKCkgPiBlLmdldFRpbWUoKTtcbiAgfVxuICBpc1NhbWUodCwgZSA9IFwiZGF5XCIpIHtcbiAgICBjb25zdCBhID0gbmV3IGgodCkudG9EYXRlKCk7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpID09PSBhLmdldEZ1bGxZZWFyKCk7XG4gICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gYS5nZXRGdWxsWWVhcigpICYmIHRoaXMuX2RhdGUuZ2V0TW9udGgoKSA9PT0gYS5nZXRNb250aCgpO1xuICAgICAgY2FzZSBcImRheVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gYS5nZXRGdWxsWWVhcigpICYmIHRoaXMuX2RhdGUuZ2V0TW9udGgoKSA9PT0gYS5nZXRNb250aCgpICYmIHRoaXMuX2RhdGUuZ2V0RGF0ZSgpID09PSBhLmdldERhdGUoKTtcbiAgICB9XG4gIH1cbiAgaXNCZXR3ZWVuKHQsIGUsIGEpIHtcbiAgICBjb25zdCBvID0gbmV3IGgodCkuc3RhcnRPZihhKS50b0RhdGUoKSwgbiA9IG5ldyBoKGUpLmVuZE9mKGEpLnRvRGF0ZSgpLCBpID0gdGhpcy50b0RhdGUoKTtcbiAgICByZXR1cm4gaSA+PSBvICYmIGkgPD0gbjtcbiAgfVxufTtcbmMoaCwgXCJkYXlzT2ZXZWVrXCIsIFtcbiAgXCJTdW5kYXlcIixcbiAgXCJNb25kYXlcIixcbiAgXCJUdWVzZGF5XCIsXG4gIFwiV2VkbmVzZGF5XCIsXG4gIFwiVGh1cnNkYXlcIixcbiAgXCJGcmlkYXlcIixcbiAgXCJTYXR1cmRheVwiXG5dKTtcbmxldCBrID0gaDtcbmNvbnN0IF8gPSAocikgPT4gbmV3IGsociksIHcgPSAocikgPT4gXyhyKS5zdGFydE9mKFwiZGF5XCIpLCBNID0gKHIsIHQpID0+IHtcbiAgciA9IHcociksIHQgPSB3KHQpO1xuICBjb25zdCBlID0gdC5kaWZmKHIsIFwiZGF5XCIpO1xuICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogZSArIDEgfSwgKGEsIG8pID0+IHIuYWRkKG8sIFwiZGF5XCIpKTtcbn0sIFcgPSB7XG4gIC8vIDE5OTkg5YWD5pemIDEg5aSp44CB5pil6IqC44CB5Yqz5Yqo6IqC44CB5Zu95bqG6IqC5pS+5YGHIDPlpKlcbiAgMTk5OToge1xuICAgIFwiTmV3IFllYXIncyBEYXks5YWD5pemXCI6IDEsXG4gICAgXCJTcHJpbmcgRmVzdGl2YWws5pil6IqCXCI6IDMsXG4gICAgXCJMYWJvdXIgRGF5LOWKs+WKqOiKglwiOiAzLFxuICAgIFwiTmF0aW9uYWwgRGF5LOWbveW6huiKglwiOiAzXG4gIH0sXG4gIC8vIDIwMDgg5Yqz5Yqo6IqC5pS55Li6IDEg5aSp77yM5aKe5Yqg5riF5piO44CB56uv5Y2I44CB5Lit56eL5ZCEIDEg5aSpXG4gIDIwMDg6IHtcbiAgICBcIlRvbWItc3dlZXBpbmcgRGF5LOa4heaYjlwiOiAxLFxuICAgIFwiTGFib3VyIERheSzlirPliqjoioJcIjogMSxcbiAgICBcIkRyYWdvbiBCb2F0IEZlc3RpdmFsLOerr+WNiFwiOiAxLFxuICAgIFwiTWlkLWF1dHVtbiBGZXN0aXZhbCzkuK3np4tcIjogMVxuICB9LFxuICAvLyAyMDE0IOaYpeiKguWJlOmZpOmZpOWkle+8jOaUueS4uuWIneS4gOOAgeS6jOOAgeS4ie+8jOS+neaXpyAzIOWkqVxuICAvLyAyMDE1IOWinuWKoCDkuK3lm73kurrmsJHmipfml6XmiJjkuonmmqjkuJbnlYzlj43ms5Xopb/mlq/miJjkuonog5zliKk3MOWRqOW5tOe6quW/teaXpSAxIOWkqVxuICAyMDE1OiB7XG4gICAgXCJBbnRpLUZhc2Npc3QgNzB0aCBEYXks5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6VcIjogMVxuICB9LFxuICAvLyAyMDI1IOaYpeiKguWSjOWKs+WKqOiKgiDlkITlop7liqAgMSDlpKlcbiAgMjAyNToge1xuICAgIFwiU3ByaW5nIEZlc3RpdmFsLOaYpeiKglwiOiA0LFxuICAgIFwiTGFib3VyIERheSzlirPliqjoioJcIjogMlxuICB9XG59O1xuY2xhc3MgeiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGModGhpcywgXCJkYXlEZXRhaWxzXCIsIHt9KTtcbiAgICBjKHRoaXMsIFwiaG9saWRheXNcIiwge30pO1xuICAgIGModGhpcywgXCJ3b3JrZGF5c1wiLCB7fSk7XG4gICAgYyh0aGlzLCBcImluTGlldURheXNcIiwge30pO1xuICB9XG4gIC8qKiB5ZWFyIGF0ICovXG4gIHkodCkge1xuICAgIHJldHVybiB0aGlzLmRheURldGFpbHMueWVhciA9IHQsIHRoaXM7XG4gIH1cbiAgLyoqIOafpeivouafkOW5tCDoioLlgYfml6XlpKnmlbAgKi9cbiAgZ2V0SG9saWRheURheXModCwgZSkge1xuICAgIGxldCBhID0gMDtcbiAgICBmb3IgKGNvbnN0IFtvLCBuXSBvZiBPYmplY3QuZW50cmllcyhXKSkge1xuICAgICAgaWYgKHBhcnNlSW50KG8pID4gdCkgYnJlYWs7XG4gICAgICBuW2VdICE9PSB2b2lkIDAgJiYgKGEgPSBuW2VdKTtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgbWFyayh0KSB7XG4gICAgcmV0dXJuIHRoaXMuZGF5RGV0YWlscy5ob2xpZGF5ID0gdCwgdGhpcztcbiAgfVxuICBzYXZlKHQsIGUsIGEpIHtcbiAgICBpZiAoIXRoaXMuZGF5RGV0YWlscy55ZWFyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2hvdWxkIHNldCB5ZWFyIGJlZm9yZSBzYXZpbmcgaG9saWRheVwiKTtcbiAgICBpZiAoIXRoaXMuZGF5RGV0YWlscy5ob2xpZGF5KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2hvdWxkIHNldCBob2xpZGF5IGJlZm9yZSBzYXZpbmcgaG9saWRheVwiKTtcbiAgICB0aGlzLmRheURldGFpbHMubW9udGggPSB0LCB0aGlzLmRheURldGFpbHMuZGF5ID0gZSwgdGhpcy5kYXlEZXRhaWxzLmRheVR5cGUgPSBhO1xuICAgIGNvbnN0IG8gPSBfKGAke3RoaXMuZGF5RGV0YWlscy55ZWFyfS0ke3R9LSR7ZX1gKS5mb3JtYXQoXG4gICAgICBcIllZWVktTU0tRERcIlxuICAgICksIG4gPSB0aGlzLmdldEhvbGlkYXlEYXlzKFxuICAgICAgdGhpcy5kYXlEZXRhaWxzLnllYXIsXG4gICAgICB0aGlzLmRheURldGFpbHMuaG9saWRheVxuICAgICksIGkgPSBgJHt0aGlzLmRheURldGFpbHMuaG9saWRheX0sJHtufWA7XG4gICAgcmV0dXJuIGEgPT09IDIgPyB0aGlzLmhvbGlkYXlzW29dID0gaSA6IGEgPT09IDEgPyB0aGlzLndvcmtkYXlzW29dID0gaSA6IGEgPT09IDMgJiYgKHRoaXMuaW5MaWV1RGF5c1tvXSA9IGkpLCB0aGlzO1xuICB9XG4gIHRvKHQsIGUpIHtcbiAgICBpZiAoIXRoaXMuZGF5RGV0YWlscy5ob2xpZGF5IHx8ICF0aGlzLmRheURldGFpbHMueWVhciB8fCAhdGhpcy5kYXlEZXRhaWxzLm1vbnRoIHx8ICF0aGlzLmRheURldGFpbHMuZGF5KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2hvdWxkIHNldCB5ZWFyL21vbnRoL2RheSBiZWZvcmUgc2F2aW5nIGhvbGlkYXkgcmFuZ2VcIik7XG4gICAgY29uc3QgYSA9IF8oXG4gICAgICBgJHt0aGlzLmRheURldGFpbHMueWVhcn0tJHt0aGlzLmRheURldGFpbHMubW9udGh9LSR7dGhpcy5kYXlEZXRhaWxzLmRheX1gXG4gICAgKSwgbyA9IF8oYCR7dGhpcy5kYXlEZXRhaWxzLnllYXJ9LSR7dH0tJHtlfWApO1xuICAgIGlmIChvLmlzQmVmb3JlKGEpIHx8IG8uaXNTYW1lKGEpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZW5kIGRhdGUgc2hvdWxkIGJlIGFmdGVyIHN0YXJ0IGRhdGVcIik7XG4gICAgY29uc3QgbiA9IHRoaXMuZ2V0SG9saWRheURheXMoXG4gICAgICB0aGlzLmRheURldGFpbHMueWVhcixcbiAgICAgIHRoaXMuZGF5RGV0YWlscy5ob2xpZGF5XG4gICAgKSwgaSA9IGAke3RoaXMuZGF5RGV0YWlscy5ob2xpZGF5fSwke259YCwgZCA9IG8uZGlmZihhLCBcImRheVwiKTtcbiAgICBmb3IgKGxldCBzID0gMTsgcyA8PSBkOyBzKyspIHtcbiAgICAgIGNvbnN0IGwgPSBhLmFkZChzLCBcImRheVwiKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgICAgdGhpcy5kYXlEZXRhaWxzLmRheVR5cGUgPT09IDIgPyB0aGlzLmhvbGlkYXlzW2xdID0gaSA6IHRoaXMuZGF5RGV0YWlscy5kYXlUeXBlID09PSAxID8gdGhpcy53b3JrZGF5c1tsXSA9IGkgOiB0aGlzLmRheURldGFpbHMuZGF5VHlwZSA9PT0gMyAmJiAodGhpcy5pbkxpZXVEYXlzW2xdID0gaSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKiB3b3JrIGRheSAqL1xuICB3KHQsIGUpIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlKFxuICAgICAgdCxcbiAgICAgIGUsXG4gICAgICAxXG4gICAgICAvKiBXb3JrZGF5ICovXG4gICAgKTtcbiAgfVxuICAvKiogcmVzdCAqL1xuICByKHQsIGUpIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlKFxuICAgICAgdCxcbiAgICAgIGUsXG4gICAgICAyXG4gICAgICAvKiBIb2xpZGF5ICovXG4gICAgKTtcbiAgfVxuICAvKiogaW4tbGlldSAqL1xuICBpKHQsIGUpIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlKFxuICAgICAgdCxcbiAgICAgIGUsXG4gICAgICAzXG4gICAgICAvKiBJbkxpZXUgKi9cbiAgICApO1xuICB9XG4gIC8qKiBOZXcgWWVhcidzIERheSDlhYPml6YgKi9cbiAgbnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiTmV3IFllYXIncyBEYXks5YWD5pemXCJcbiAgICAgIC8qIE5ZICovXG4gICAgKTtcbiAgfVxuICAvKiogU3ByaW5nIEZlc3RpdmFsIOaYpeiKgiAqL1xuICBzKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIlNwcmluZyBGZXN0aXZhbCzmmKXoioJcIlxuICAgICAgLyogUyAqL1xuICAgICk7XG4gIH1cbiAgLyoqIFRvbWItc3dlZXBpbmcgRGF5IOa4heaYjiAqL1xuICB0KCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIlRvbWItc3dlZXBpbmcgRGF5LOa4heaYjlwiXG4gICAgICAvKiBUICovXG4gICAgKTtcbiAgfVxuICAvKiogTGFib3VyIERheSDkupTkuIAgKi9cbiAgbCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJMYWJvdXIgRGF5LOWKs+WKqOiKglwiXG4gICAgICAvKiBMICovXG4gICAgKTtcbiAgfVxuICAvKiogRHJhZ29uIEJvYXQgRmVzdGl2YWwg56uv5Y2IICovXG4gIGQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiRHJhZ29uIEJvYXQgRmVzdGl2YWws56uv5Y2IXCJcbiAgICAgIC8qIEQgKi9cbiAgICApO1xuICB9XG4gIC8qKiBOYXRpb25hbCBEYXkg5Zu95bqG6IqCICovXG4gIG4oKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiTmF0aW9uYWwgRGF5LOWbveW6huiKglwiXG4gICAgICAvKiBOICovXG4gICAgKTtcbiAgfVxuICAvKiogTWlkLWF1dHVtbiBGZXN0aXZhbCDkuK3np4sgKi9cbiAgbSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJNaWQtYXV0dW1uIEZlc3RpdmFsLOS4reeni1wiXG4gICAgICAvKiBNICovXG4gICAgKTtcbiAgfVxuICAvKiogQW50aS1GYXNjaXN0IDcwdGggRGF5IOS4reWbveS6uuawkeaKl+aXpeaImOS6ieaaqOS4lueVjOWPjeazleilv+aWr+aImOS6ieiDnOWIqTcw5ZGo5bm057qq5b+15pelICovXG4gIGEoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiQW50aS1GYXNjaXN0IDcwdGggRGF5LOS4reWbveS6uuawkeaKl+aXpeaImOS6ieaaqOS4lueVjOWPjeazleilv+aWr+aImOS6ieiDnOWIqTcw5ZGo5bm057qq5b+15pelXCJcbiAgICAgIC8qIEEgKi9cbiAgICApO1xuICB9XG59XG5jb25zdCBWID0gKCkgPT4ge1xuICBjb25zdCByID0gbmV3IHooKTtcbiAgcmV0dXJuIHIueSgyMDI2KS5ueSgpLnIoMSwgMSkudG8oMSwgMykudygxLCA0KS5pKDEsIDIpLnMoKS5yKDIsIDE1KS50bygyLCAyMykudygyLCAxNCkudygyLCAyOCkuaSgyLCAyMCkuaSgyLCAyMykudCgpLnIoNCwgNCkudG8oNCwgNikubCgpLnIoNSwgMSkudG8oNSwgNSkudyg1LCA5KS5pKDUsIDUpLmQoKS5yKDYsIDE5KS50byg2LCAyMSkubSgpLnIoOSwgMjUpLnRvKDksIDI3KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjApLncoMTAsIDEwKS5pKDEwLCA2KS5pKDEwLCA3KSwgci55KDIwMjUpLm55KCkucigxLCAxKS5zKCkucigxLCAyOCkudG8oMiwgNCkudygxLCAyNikudygyLCA4KS5pKDIsIDMpLmkoMiwgNCkudCgpLnIoNCwgNCkudG8oNCwgNikubCgpLnIoNSwgMSkudG8oNSwgNSkudyg0LCAyNykuaSg1LCA1KS5kKCkucig1LCAzMSkudG8oNiwgMikubigpLnIoMTAsIDEpLnRvKDEwLCA4KS53KDksIDI4KS53KDEwLCAxMSkuaSgxMCwgNykuaSgxMCwgOCkubSgpLnIoMTAsIDYpLCByLnkoMjAyNCkubnkoKS5yKDEsIDEpLnMoKS5yKDIsIDEwKS50bygyLCAxNykudygyLCA0KS53KDIsIDE4KS5pKDIsIDE1KS50bygyLCAxNikudCgpLnIoNCwgNCkudG8oNCwgNikudyg0LCA3KS5pKDQsIDUpLmwoKS5yKDUsIDEpLnRvKDUsIDUpLncoNCwgMjgpLncoNSwgMTEpLmkoNSwgMikudG8oNSwgMykuZCgpLnIoNiwgMTApLm0oKS5yKDksIDE1KS50byg5LCAxNykudyg5LCAxNCkuaSg5LCAxNikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIHIueSgyMDIzKS5ueSgpLnIoMSwgMSkudG8oMSwgMikucygpLnIoMSwgMjEpLnRvKDEsIDI3KS53KDEsIDI4KS50bygxLCAyOSkuaSgxLCAyNikudG8oMSwgMjcpLnQoKS5yKDQsIDUpLmwoKS5yKDQsIDI5KS50byg1LCAzKS53KDQsIDIzKS53KDUsIDYpLmkoNSwgMikudG8oNSwgMykuZCgpLnIoNiwgMjIpLnRvKDYsIDI0KS53KDYsIDI1KS5pKDYsIDIzKS5tKCkucig5LCAyOSkubigpLnIoOSwgMzApLnRvKDEwLCA2KS53KDEwLCA3KS50bygxMCwgOCkuaSgxMCwgNSkudG8oMTAsIDYpLCByLnkoMjAyMikubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDEsIDMxKS50bygyLCA2KS53KDEsIDI5KS53KDEsIDMwKS5pKDIsIDMpLnRvKDIsIDQpLnQoKS5yKDQsIDMpLnRvKDQsIDUpLncoNCwgMikuaSg0LCA0KS5sKCkucig0LCAzMCkudG8oNSwgNCkudyg0LCAyNCkudyg1LCA3KS5pKDUsIDMpLnRvKDUsIDQpLmQoKS5yKDYsIDMpLnRvKDYsIDUpLm0oKS5yKDksIDEwKS50byg5LCAxMikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA4KS53KDEwLCA5KS5pKDEwLCA2KS50bygxMCwgNykubnkoKS5yKDEyLCAzMSksIHIueSgyMDIxKS5ueSgpLnIoMSwgMSkudG8oMSwgMykucygpLnIoMiwgMTEpLnRvKDIsIDE3KS53KDIsIDcpLncoMiwgMjApLmkoMiwgMTYpLnRvKDIsIDE3KS50KCkucig0LCAzKS50byg0LCA1KS5sKCkucig1LCAxKS50byg1LCA1KS53KDQsIDI1KS53KDUsIDgpLmkoNSwgNCkudG8oNSwgNSkuZCgpLnIoNiwgMTIpLnRvKDYsIDE0KS5tKCkucig5LCAxOSkudG8oOSwgMjEpLncoOSwgMTgpLmkoOSwgMjApLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyNikudygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAyMCkubnkoKS5yKDEsIDEpLnMoKS5yKDEsIDI0KS50bygyLCAyKS53KDEsIDE5KS5pKDEsIDI5KS50KCkucig0LCA0KS50byg0LCA2KS5sKCkucig1LCAxKS50byg1LCA1KS53KDQsIDI2KS53KDUsIDkpLmkoNSwgNCkudG8oNSwgNSkuZCgpLnIoNiwgMjUpLnRvKDYsIDI3KS53KDYsIDI4KS5pKDYsIDI2KS5uKCkucigxMCwgMSkudG8oMTAsIDgpLncoOSwgMjcpLncoMTAsIDEwKS5pKDEwLCA3KS50bygxMCwgOCksIHIueSgyMDE5KS5ueSgpLnIoMSwgMSkucygpLnIoMiwgNCkudG8oMiwgMTApLncoMiwgMikudG8oMiwgMykuaSgyLCA0KS5pKDIsIDgpLnQoKS5yKDQsIDUpLnRvKDQsIDcpLmwoKS5yKDUsIDEpLnRvKDUsIDQpLncoNCwgMjgpLncoNSwgNSkuaSg1LCAyKS5pKDUsIDMpLmQoKS5yKDYsIDcpLnRvKDYsIDkpLm0oKS5yKDksIDEzKS50byg5LCAxNSkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIHIueSgyMDE4KS5ueSgpLnIoMSwgMSkucygpLnIoMiwgMTUpLnRvKDIsIDIxKS53KDIsIDExKS53KDIsIDI0KS5pKDIsIDE5KS50bygyLCAyMSkudCgpLnIoNCwgNSkudG8oNCwgNykudyg0LCA4KS5pKDQsIDYpLmwoKS5yKDQsIDI5KS50byg1LCAxKS53KDQsIDI4KS5pKDQsIDMwKS5kKCkucig2LCAxOCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS50byg5LCAzMCkuaSgxMCwgNCkudG8oMTAsIDUpLm0oKS5yKDksIDI0KS5ueSgpLnIoMTIsIDMwKS50bygxMiwgMzEpLncoMTIsIDI5KS5pKDEyLCAzMSksIHIueSgyMDE3KS5ueSgpLnIoMSwgMSkudG8oMSwgMikucygpLnIoMSwgMjcpLnRvKDIsIDIpLncoMSwgMjIpLncoMiwgNCkuaSgyLCAxKS50bygyLCAyKS50KCkucig0LCAyKS50byg0LCA0KS53KDQsIDEpLmkoNCwgMykubCgpLnIoNSwgMSkuZCgpLnIoNSwgMjgpLnRvKDUsIDMwKS53KDUsIDI3KS5pKDUsIDI5KS5uKCkucigxMCwgMSkudG8oMTAsIDgpLncoOSwgMzApLmkoMTAsIDYpLm0oKS5yKDEwLCA0KSwgci55KDIwMTYpLm55KCkucigxLCAxKS5zKCkucigyLCA3KS50bygyLCAxMykudygyLCA2KS53KDIsIDE0KS5pKDIsIDExKS50bygyLCAxMikudCgpLnIoNCwgNCkubCgpLnIoNSwgMSkudG8oNSwgMikuZCgpLnIoNiwgOSkudG8oNiwgMTEpLncoNiwgMTIpLmkoNiwgMTApLm0oKS5yKDksIDE1KS50byg5LCAxNykudyg5LCAxOCkuaSg5LCAxNikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA4KS50bygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAxNSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLncoMSwgNCkuaSgxLCAyKS5zKCkucigyLCAxOCkudG8oMiwgMjQpLncoMiwgMTUpLncoMiwgMjgpLmkoMiwgMjMpLnRvKDIsIDI0KS50KCkucig0LCA1KS50byg0LCA2KS5sKCkucig1LCAxKS5kKCkucig2LCAyMCkucig2LCAyMikubSgpLnIoOSwgMjcpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgMTApLmkoMTAsIDcpLmEoKS5yKDksIDMpLnRvKDksIDQpLncoOSwgNikuaSg5LCA0KSwgci55KDIwMTQpLm55KCkucigxLCAxKS5zKCkucigxLCAzMSkudG8oMiwgNikudygxLCAyNikudygyLCA4KS5pKDIsIDUpLnRvKDIsIDYpLnQoKS5yKDQsIDUpLnRvKDQsIDcpLmwoKS5yKDUsIDEpLnRvKDUsIDMpLncoNSwgNCkuaSg1LCAyKS5kKCkucig2LCAyKS5tKCkucig5LCA4KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjgpLncoMTAsIDExKS5pKDEwLCA2KS50bygxMCwgNyksIHIueSgyMDEzKS5ueSgpLnIoMSwgMSkudG8oMSwgMykudygxLCA1KS50bygxLCA2KS5pKDEsIDIpLnRvKDEsIDMpLnMoKS5yKDIsIDkpLnRvKDIsIDE1KS53KDIsIDE2KS50bygyLCAxNykuaSgyLCAxNCkudG8oMiwgMTUpLnQoKS5yKDQsIDQpLnRvKDQsIDYpLncoNCwgNykuaSg0LCA1KS5sKCkucig0LCAyOSkudG8oNSwgMSkudyg0LCAyNykudG8oNCwgMjgpLmkoNCwgMjkpLnRvKDQsIDMwKS5kKCkucig2LCAxMCkudG8oNiwgMTIpLncoNiwgOCkudG8oNiwgOSkuaSg2LCAxMCkudG8oNiwgMTEpLm0oKS5yKDksIDE5KS50byg5LCAyMSkudyg5LCAyMikuaSg5LCAyMCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIHIueSgyMDEyKS5ueSgpLnIoMSwgMSkudG8oMSwgMykuaSgxLCAzKS5zKCkucigxLCAyMikudG8oMSwgMjgpLncoMSwgMjEpLncoMSwgMjkpLmkoMSwgMjYpLnRvKDEsIDI3KS50KCkucig0LCAyKS50byg0LCA0KS53KDMsIDMxKS53KDQsIDEpLmkoNCwgMikudG8oNCwgMykubCgpLnIoNCwgMjkpLnRvKDUsIDEpLncoNCwgMjgpLmkoNCwgMzApLmQoKS5yKDYsIDIyKS5yKDYsIDI0KS5tKCkucig5LCAzMCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS5pKDEwLCA1KSwgci55KDIwMTEpLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCAyKS50bygyLCA4KS53KDEsIDMwKS53KDIsIDEyKS5pKDIsIDcpLnRvKDIsIDgpLnQoKS5yKDQsIDMpLnRvKDQsIDUpLncoNCwgMikuaSg0LCA0KS5sKCkucig0LCAzMCkudG8oNSwgMikuZCgpLnIoNiwgNCkucig2LCA2KS5tKCkucig5LCAxMCkudG8oOSwgMTIpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOCkudG8oMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KS5ueSgpLncoMTIsIDMxKSwgci55KDIwMTApLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCAxMykudG8oMiwgMTkpLncoMiwgMjApLnRvKDIsIDIxKS5pKDIsIDE4KS50bygyLCAxOSkudCgpLnIoNCwgMykudG8oNCwgNSkubCgpLnIoNSwgMSkudG8oNSwgMykuZCgpLnIoNiwgMTQpLnRvKDYsIDE2KS53KDYsIDEyKS50byg2LCAxMykuaSg2LCAxNCkudG8oNiwgMTUpLm0oKS5yKDksIDIyKS50byg5LCAyNCkudyg5LCAxOSkudyg5LCAyNSkuaSg5LCAyMykudG8oOSwgMjQpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyNikudygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAwOSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLncoMSwgNCkuaSgxLCAyKS5zKCkucigxLCAyNSkudG8oMSwgMzEpLncoMSwgMjQpLncoMiwgMSkuaSgxLCAyOSkudG8oMSwgMzApLnQoKS5yKDQsIDQpLnRvKDQsIDYpLmwoKS5yKDUsIDEpLnRvKDUsIDMpLmQoKS5yKDUsIDI4KS50byg1LCAzMCkudyg1LCAzMSkuaSg1LCAyOSkubigpLnIoMTAsIDEpLnRvKDEwLCA4KS53KDksIDI3KS53KDEwLCAxMCkuaSgxMCwgNykudG8oMTAsIDgpLm0oKS5yKDEwLCAzKSwgci55KDIwMDgpLm55KCkucigxLCAxKS5zKCkucigyLCA2KS50bygyLCAxMikudygyLCAyKS50bygyLCAzKS5pKDIsIDExKS50bygyLCAxMikudCgpLnIoNCwgNCkudG8oNCwgNikubCgpLnIoNSwgMSkudG8oNSwgMykudyg1LCA0KS5pKDUsIDIpLmQoKS5yKDYsIDcpLnRvKDYsIDkpLm0oKS5yKDksIDEzKS50byg5LCAxNSkubigpLnIoOSwgMjkpLnRvKDEwLCA1KS53KDksIDI3KS50byg5LCAyOCkuaSg5LCAyOSkudG8oOSwgMzApLCByLnkoMjAwNykubnkoKS5yKDEsIDEpLnRvKDEsIDMpLmkoMSwgMikudG8oMSwgMykucygpLnIoMiwgMTgpLnRvKDIsIDI0KS53KDIsIDE3KS53KDIsIDI1KS5pKDIsIDIyKS50bygyLCAyMykubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAyOCkudG8oNCwgMjkpLmkoNSwgNCkuaSg1LCA3KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjkpLnRvKDksIDMwKS5pKDEwLCA0KS50bygxMCwgNSkubnkoKS5yKDEyLCAzMCkudG8oMTIsIDMxKS53KDEyLCAyOSkuaSgxMiwgMzEpLCByLnkoMjAwNikubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDEsIDI5KS50bygyLCA0KS53KDEsIDI4KS53KDIsIDUpLmkoMiwgMikudG8oMiwgMykubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAyOSkudG8oNCwgMzApLmkoNSwgNCkudG8oNSwgNSkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDMwKS53KDEwLCA4KS5pKDEwLCA1KS50bygxMCwgNikubnkoKS53KDEyLCAzMCkudG8oMTIsIDMxKSwgci55KDIwMDUpLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCA5KS50bygyLCAxNSkudygyLCA1KS50bygyLCA2KS5pKDIsIDE0KS50bygyLCAxNSkubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAzMCkudyg1LCA4KS5pKDUsIDUpLnRvKDUsIDYpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOCkudG8oMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KSwgci55KDIwMDQpLm55KCkucigxLCAxKS5zKCkucigxLCAyMikudG8oMSwgMjgpLncoMSwgMTcpLnRvKDEsIDE4KS5pKDEsIDI3KS50bygxLCAyOCkubCgpLnIoNSwgMSkudG8oNSwgNykudyg1LCA4KS50byg1LCA5KS5pKDUsIDYpLnRvKDUsIDcpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOSkudG8oMTAsIDEwKS5pKDEwLCA2KS50bygxMCwgNyksIHtcbiAgICBob2xpZGF5czogci5ob2xpZGF5cyxcbiAgICB3b3JrZGF5czogci53b3JrZGF5cyxcbiAgICBpbkxpZXVEYXlzOiByLmluTGlldURheXNcbiAgfTtcbn0sIHsgaG9saWRheXM6IHAsIHdvcmtkYXlzOiBMLCBpbkxpZXVEYXlzOiBaIH0gPSBWKCksIGYgPSAocikgPT4ge1xuICBjb25zdCB0ID0gdyhyKTtcbiAgaWYgKCF0LmlzVmFsaWQoKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgdW5zdXBwb3J0ZWQgdHlwZSAke3R5cGVvZiByfSwgZXhwZWN0ZWQgdHlwZSBpcyBEYXRlIG9yIERheWpzYFxuICAgICk7XG4gIHJldHVybiB0O1xufSwgTyA9IChyKSA9PiAhRChyKSwgRCA9IChyKSA9PiB7XG4gIGNvbnN0IHQgPSBmKHIpLCBlID0gdC5kYXkoKSwgYSA9IHQuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgcmV0dXJuICEhKExbYV0gfHwgZSA+PSAxICYmIGUgPD0gNSAmJiAhcFthXSk7XG59LCBHID0gKHIpID0+IHtcbiAgY29uc3QgdCA9IGYocik7XG4gIHJldHVybiAhIVpbdC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXTtcbn0sIEogPSAocikgPT4ge1xuICBjb25zdCB0ID0gZihyKSwgZSA9IHQuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgaWYgKExbZV0pXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IGUsXG4gICAgICB3b3JrOiAhMCxcbiAgICAgIG5hbWU6IExbZV1cbiAgICB9O1xuICBpZiAocFtlXSlcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogZSxcbiAgICAgIHdvcms6ICExLFxuICAgICAgbmFtZTogcFtlXVxuICAgIH07XG4gIHtcbiAgICBjb25zdCBhID0gdC5kYXkoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogZSxcbiAgICAgIHdvcms6IGEgIT09IDAgJiYgYSAhPT0gNixcbiAgICAgIG5hbWU6IHQuZm9ybWF0KFwiZGRkZFwiKVxuICAgIH07XG4gIH1cbn0sIEsgPSAociwgdCwgZSA9ICEwKSA9PiB7XG4gIGNvbnN0IGEgPSBmKHIpLCBvID0gZih0KTtcbiAgcmV0dXJuIGUgPyBNKGEsIG8pLmZpbHRlcihPKS5tYXAoKG4pID0+IG4uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSkgOiBNKGEsIG8pLmZpbHRlcigobikgPT4gcFtuLmZvcm1hdChcIllZWVktTU0tRERcIildKS5tYXAoKG4pID0+IG4uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSk7XG59LCBRID0gKHIsIHQsIGUgPSAhMCkgPT4ge1xuICBjb25zdCBhID0gZihyKSwgbyA9IGYodCk7XG4gIHJldHVybiBlID8gTShhLCBvKS5maWx0ZXIoRCkubWFwKChuKSA9PiBuLmZvcm1hdChcIllZWVktTU0tRERcIikpIDogTShhLCBvKS5maWx0ZXIoKG4pID0+IEQobikgJiYgbi5kYXkoKSA+PSAxICYmIG4uZGF5KCkgPD0gNSkubWFwKChuKSA9PiBuLmZvcm1hdChcIllZWVktTU0tRERcIikpO1xufSwgWCA9IChyID0gMCwgdCA9IF8oKSkgPT4ge1xuICBpZiAodCA9IHcodCksIHIgPT09IDApIHtcbiAgICBpZiAoRCh0KSlcbiAgICAgIHJldHVybiB0LmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgciA9IDE7XG4gIH1cbiAgY29uc3QgZSA9IHIgPiAwID8gMSA6IC0xO1xuICBsZXQgYSA9IE1hdGguYWJzKHIpO1xuICBmb3IgKDsgYSA+IDA7IClcbiAgICB0ID0gdC5hZGQoZSwgXCJkYXlcIiksIEQodCkgJiYgYS0tO1xuICByZXR1cm4gdC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xufSwgdHQgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBmaW5kV29ya2RheTogWCxcbiAgZ2V0RGF5RGV0YWlsOiBKLFxuICBnZXRIb2xpZGF5c0luUmFuZ2U6IEssXG4gIGdldFdvcmtkYXlzSW5SYW5nZTogUSxcbiAgaXNIb2xpZGF5OiBPLFxuICBpc0luTGlldTogRyxcbiAgaXNXb3JrZGF5OiBEXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpLCBldCA9IHtcbiAgdGhlX2JlZ2lubmluZ19vZl9zcHJpbmc6IFs0LjYyOTUsIDMuODddLFxuICByYWluX3dhdGVyOiBbMTkuNDU5OSwgMTguNzNdLFxuICB0aGVfd2FraW5nX29mX2luc2VjdHM6IFs2LjM5MjYsIDUuNjNdLFxuICB0aGVfc3ByaW5nX2VxdWlub3g6IFsyMS40MTU1LCAyMC42NDZdLFxuICBwdXJlX2JyaWdodG5lc3M6IFs1LjU5LCA0LjgxXSxcbiAgZ3JhaW5fcmFpbjogWzIwLjg4OCwgMjAuMV0sXG4gIHRoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyOiBbNi4zMTgsIDUuNTJdLFxuICBsZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW46IFsyMS44NiwgMjEuMDRdLFxuICBncmFpbl9pbl9iZWFyZDogWzYuNSwgNS42NzhdLFxuICB0aGVfc3VtbWVyX3NvbHN0aWNlOiBbMjIuMiwgMjEuMzddLFxuICBsZXNzZXJfaGVhdDogWzcuOTI4LCA3LjEwOF0sXG4gIGdyZWF0ZXJfaGVhdDogWzIzLjY1LCAyMi44M10sXG4gIHRoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uOiBbMjguMzUsIDcuNV0sXG4gIHRoZV9lbmRfb2ZfaGVhdDogWzIzLjk1LCAyMy4xM10sXG4gIHdoaXRlX2RldzogWzguNDQsIDcuNjQ2XSxcbiAgdGhlX2F1dHVtbl9lcXVpbm94OiBbMjMuODIyLCAyMy4wNDJdLFxuICBjb2RlX2RldzogWzkuMDk4LCA4LjMxOF0sXG4gIGZyb3N0X2Rlc2NlbnQ6IFsyNC4yMTgsIDIzLjQzOF0sXG4gIHRoZV9iZWdpbm5pbmdfb2Zfd2ludGVyOiBbOC4yMTgsIDcuNDM4XSxcbiAgbGVzc2VyX3Nub3c6IFsyMy4wOCwgMjIuMzZdLFxuICBncmVhdGVyX3Nub3c6IFs3LjksIDcuMThdLFxuICB0aGVfd2ludGVyX3NvbHN0aWNlOiBbMjIuNiwgMjEuOTRdLFxuICBsZXNzZXJfY29sZDogWzYuMTEsIDUuNDA1NV0sXG4gIGdyZWF0ZXJfY29sZDogWzIwLjg0LCAyMC4xMl1cbn0sIFQgPSB7XG4gIDE6IFtcImxlc3Nlcl9jb2xkXCIsIFwiZ3JlYXRlcl9jb2xkXCJdLFxuICAyOiBbXCJ0aGVfYmVnaW5uaW5nX29mX3NwcmluZ1wiLCBcInJhaW5fd2F0ZXJcIl0sXG4gIDM6IFtcInRoZV93YWtpbmdfb2ZfaW5zZWN0c1wiLCBcInRoZV9zcHJpbmdfZXF1aW5veFwiXSxcbiAgNDogW1wicHVyZV9icmlnaHRuZXNzXCIsIFwiZ3JhaW5fcmFpblwiXSxcbiAgNTogW1widGhlX2JlZ2lubmluZ19vZl9zdW1tZXJcIiwgXCJsZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW5cIl0sXG4gIDY6IFtcImdyYWluX2luX2JlYXJkXCIsIFwidGhlX3N1bW1lcl9zb2xzdGljZVwiXSxcbiAgNzogW1wibGVzc2VyX2hlYXRcIiwgXCJncmVhdGVyX2hlYXRcIl0sXG4gIDg6IFtcInRoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uXCIsIFwidGhlX2VuZF9vZl9oZWF0XCJdLFxuICA5OiBbXCJ3aGl0ZV9kZXdcIiwgXCJ0aGVfYXV0dW1uX2VxdWlub3hcIl0sXG4gIDEwOiBbXCJjb2RlX2Rld1wiLCBcImZyb3N0X2Rlc2NlbnRcIl0sXG4gIDExOiBbXCJ0aGVfYmVnaW5uaW5nX29mX3dpbnRlclwiLCBcImxlc3Nlcl9zbm93XCJdLFxuICAxMjogW1wiZ3JlYXRlcl9zbm93XCIsIFwidGhlX3dpbnRlcl9zb2xzdGljZVwiXVxufSwgcnQgPSB7XG4gIFwiMjAyNl9yYWluX3dhdGVyXCI6IC0xLFxuICBcIjIwODRfdGhlX3NwcmluZ19lcXVpbm94XCI6IDEsXG4gIFwiMTkxMV90aGVfYmVnaW5uaW5nX29mX3N1bW1lclwiOiAxLFxuICBcIjIwMDhfbGVzc2VyX2Z1bGxuZXNzX29mX2dyYWluXCI6IDEsXG4gIFwiMTkwMl9ncmFpbl9pbl9iZWFyZFwiOiAxLFxuICBcIjE5MjhfdGhlX3N1bW1lcl9zb2xzdGljZVwiOiAxLFxuICBcIjE5MjVfbGVzc2VyX2hlYXRcIjogMSxcbiAgXCIyMDE2X2xlc3Nlcl9oZWF0XCI6IDEsXG4gIFwiMTkyMl9ncmVhdGVyX2hlYXRcIjogMSxcbiAgXCIyMDAyX3RoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uXCI6IDEsXG4gIFwiMTkyN193aGl0ZV9kZXdcIjogMSxcbiAgXCIxOTQyX3RoZV9hdXR1bW5fZXF1aW5veFwiOiAxLFxuICBcIjIwODlfZnJvc3RfZGVzY2VudFwiOiAxLFxuICBcIjIwODlfdGhlX2JlZ2lubmluZ19vZl93aW50ZXJcIjogMSxcbiAgXCIxOTc4X2xlc3Nlcl9zbm93XCI6IDEsXG4gIFwiMTk1NF9ncmVhdGVyX3Nub3dcIjogMSxcbiAgXCIxOTE4X3RoZV93aW50ZXJfc29sc3RpY2VcIjogLTEsXG4gIFwiMjAyMV90aGVfd2ludGVyX3NvbHN0aWNlXCI6IC0xLFxuICBcIjE5ODJfbGVzc2VyX2NvbGRcIjogMSxcbiAgXCIyMDE5X2xlc3Nlcl9jb2xkXCI6IC0xLFxuICBcIjIwMDBfZ3JlYXRlcl9jb2xkXCI6IDEsXG4gIFwiMjA4Ml9ncmVhdGVyX2NvbGRcIjogMVxufSwgJCA9IHtcbiAgbGVzc2VyX2NvbGQ6IFwi5bCP5a+SXCIsXG4gIGdyZWF0ZXJfY29sZDogXCLlpKflr5JcIixcbiAgdGhlX2JlZ2lubmluZ19vZl9zcHJpbmc6IFwi56uL5pilXCIsXG4gIHJhaW5fd2F0ZXI6IFwi6Zuo5rC0XCIsXG4gIHRoZV93YWtpbmdfb2ZfaW5zZWN0czogXCLmg4rom7BcIixcbiAgdGhlX3NwcmluZ19lcXVpbm94OiBcIuaYpeWIhlwiLFxuICBwdXJlX2JyaWdodG5lc3M6IFwi5riF5piOXCIsXG4gIGdyYWluX3JhaW46IFwi6LC36ZuoXCIsXG4gIHRoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyOiBcIueri+Wkj1wiLFxuICBsZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW46IFwi5bCP5ruhXCIsXG4gIGdyYWluX2luX2JlYXJkOiBcIuiKkuenjVwiLFxuICB0aGVfc3VtbWVyX3NvbHN0aWNlOiBcIuWkj+iHs1wiLFxuICBsZXNzZXJfaGVhdDogXCLlsI/mmpFcIixcbiAgZ3JlYXRlcl9oZWF0OiBcIuWkp+aakVwiLFxuICB0aGVfYmVnaW5uaW5nX29mX2F1dHVtbjogXCLnq4vnp4tcIixcbiAgdGhlX2VuZF9vZl9oZWF0OiBcIuWkhOaakVwiLFxuICB3aGl0ZV9kZXc6IFwi55m96ZyyXCIsXG4gIHRoZV9hdXR1bW5fZXF1aW5veDogXCLnp4vliIZcIixcbiAgY29kZV9kZXc6IFwi5a+S6ZyyXCIsXG4gIGZyb3N0X2Rlc2NlbnQ6IFwi6Zyc6ZmNXCIsXG4gIHRoZV9iZWdpbm5pbmdfb2Zfd2ludGVyOiBcIueri+WGrFwiLFxuICBsZXNzZXJfc25vdzogXCLlsI/pm6pcIixcbiAgZ3JlYXRlcl9zbm93OiBcIuWkp+mbqlwiLFxuICB0aGVfd2ludGVyX3NvbHN0aWNlOiBcIuWGrOiHs1wiXG59LCBGID0gKHIsIHQsIGUpID0+IHtcbiAgY29uc3QgYSA9IHIgPj0gMmUzID8gMjEgOiAyMCwgbyA9IHIgJSAxMDAsIG4gPSAwLjI0MjIsIGkgPSBldFtlXVthID09PSAyMSA/IDEgOiAwXTtcbiAgbGV0IGQgPSBNYXRoLmZsb29yKG8gLyA0KTtcbiAgW1xuICAgIFwibGVzc2VyX2NvbGRcIixcbiAgICBcImdyZWF0ZXJfY29sZFwiLFxuICAgIFwidGhlX2JlZ2lubmluZ19vZl9zcHJpbmdcIixcbiAgICBcInJhaW5fd2F0ZXJcIlxuICBdLmluY2x1ZGVzKGUpICYmIChkID0gTWF0aC5mbG9vcigobyAtIDEpIC8gNCkpO1xuICBsZXQgcyA9IE1hdGguZmxvb3IobyAqIG4gKyBpKSAtIGQ7XG4gIGNvbnN0IGwgPSBydFtgJHtyfV8ke2V9YF07XG4gIHJldHVybiBsICYmIChzICs9IGwpLCBfKGAke3J9LSR7dH0tJHtzfWApLmZvcm1hdChcIllZWVktTU0tRERcIik7XG59LCBhdCA9IChyLCB0KSA9PiB7XG4gIGNvbnN0IGUgPSBbXTtcbiAgbGV0IGEgPSB3KHIpO1xuICBjb25zdCBvID0gdyh0IHx8IHIpO1xuICBmb3IgKDsgYS5pc0JlZm9yZShvKSB8fCBhLmlzU2FtZShvKTsgKSB7XG4gICAgY29uc3QgbiA9IGEueWVhcigpLCBpID0gYS5tb250aCgpICsgMTtcbiAgICBUW2ldLmZvckVhY2goKGQpID0+IHtcbiAgICAgIGNvbnN0IHMgPSBfKEYobiwgaSwgZCkpO1xuICAgICAgKHMgIT0gbnVsbCAmJiBzLmlzQmVmb3JlKG8pIHx8IHMgIT0gbnVsbCAmJiBzLmlzU2FtZShvKSkgJiYgKHMgIT0gbnVsbCAmJiBzLmlzQWZ0ZXIoYSkgfHwgcyAhPSBudWxsICYmIHMuaXNTYW1lKGEpKSAmJiBlLnB1c2goe1xuICAgICAgICBkYXRlOiBzLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgICAgIHRlcm06IGQsXG4gICAgICAgIG5hbWU6ICRbZF0sXG4gICAgICAgIGluZGV4OiAxXG4gICAgICB9KTtcbiAgICB9KSwgYSA9IGkgPT09IDEyID8gYS5hZGQoMSwgXCJ5ZWFyXCIpLnN0YXJ0T2YoXCJ5ZWFyXCIpIDogYS5hZGQoMSwgXCJtb250aFwiKS5zdGFydE9mKFwibW9udGhcIik7XG4gIH1cbiAgcmV0dXJuIGU7XG59LCBFID0gKHIsIHQpID0+IHtcbiAgbGV0IGUgPSB3KHIpLnN1YnRyYWN0KDEsIFwibW9udGhcIik7XG4gIGNvbnN0IGEgPSB3KHQgfHwgcikuYWRkKDEsIFwibW9udGhcIiksIG8gPSBbXTtcbiAgZm9yICg7IGUuaXNCZWZvcmUoYSkgfHwgZS5pc1NhbWUoYSk7ICkge1xuICAgIGNvbnN0IGkgPSBlLnllYXIoKSwgZCA9IGUubW9udGgoKSArIDE7XG4gICAgVFtkXS5mb3JFYWNoKChzKSA9PiB7XG4gICAgICBjb25zdCBsID0gXyhGKGksIGQsIHMpKTtcbiAgICAgIG8ucHVzaCh7IHRlcm06IHMsIGRhdGU6IGwgfSk7XG4gICAgfSksIGUubW9udGgoKSA9PT0gMTEgPyBlID0gZS5hZGQoMSwgXCJ5ZWFyXCIpLnN0YXJ0T2YoXCJ5ZWFyXCIpIDogZSA9IGUuYWRkKDEsIFwibW9udGhcIikuc3RhcnRPZihcIm1vbnRoXCIpO1xuICB9XG4gIGNvbnN0IG4gPSBbXTtcbiAgcmV0dXJuIG8uZm9yRWFjaCgoaSwgZCkgPT4ge1xuICAgIGZvciAobGV0IHMgPSBpLmRhdGU7IG9bZCArIDFdICYmIHMuaXNCZWZvcmUob1tkICsgMV0uZGF0ZSk7IHMgPSBzLmFkZCgxLCBcImRheVwiKSlcbiAgICAgIG4ucHVzaCh7XG4gICAgICAgIGRheTogcyxcbiAgICAgICAgdGVybTogaS50ZXJtLFxuICAgICAgICBuYW1lOiAkW2kudGVybV0sXG4gICAgICAgIGluZGV4OiBzLmRpZmYoaS5kYXRlLCBcImRheVwiKSArIDFcbiAgICAgIH0pO1xuICB9KSwgdCB8fCAodCA9IHIpLCBuLmZpbHRlcigoaSkgPT4gaS5kYXkuaXNCZXR3ZWVuKHIsIHQsIFwiZGF5XCIpKS5tYXAoKGkpID0+ICh7XG4gICAgZGF0ZTogaS5kYXkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICB0ZXJtOiBpLnRlcm0sXG4gICAgbmFtZTogaS5uYW1lLFxuICAgIGluZGV4OiBpLmluZGV4XG4gIH0pKTtcbn0sIG90ID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZ2V0U29sYXJUZXJtRGF0ZTogRixcbiAgZ2V0U29sYXJUZXJtczogYXQsXG4gIGdldFNvbGFyVGVybXNJblJhbmdlOiBFXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpLCBtID0gW1xuICAxOTQxNixcbiAgMTkxNjgsXG4gIDQyMzUyLFxuICAyMTcxNyxcbiAgNTM4NTYsXG4gIDU1NjMyLFxuICA5MTQ3NixcbiAgMjIxNzYsXG4gIDM5NjMyLFxuICAyMTk3MCxcbiAgLy8xOTAwLTE5MDlcbiAgMTkxNjgsXG4gIDQyNDIyLFxuICA0MjE5MixcbiAgNTM4NDAsXG4gIDExOTM4MSxcbiAgNDY0MDAsXG4gIDU0OTQ0LFxuICA0NDQ1MCxcbiAgMzgzMjAsXG4gIDg0MzQzLFxuICAvLzE5MTAtMTkxOVxuICAxODgwMCxcbiAgNDIxNjAsXG4gIDQ2MjYxLFxuICAyNzIxNixcbiAgMjc5NjgsXG4gIDEwOTM5NixcbiAgMTExMDQsXG4gIDM4MjU2LFxuICAyMTIzNCxcbiAgMTg4MDAsXG4gIC8vMTkyMC0xOTI5XG4gIDI1OTU4LFxuICA1NDQzMixcbiAgNTk5ODQsXG4gIDI4MzA5LFxuICAyMzI0OCxcbiAgMTExMDQsXG4gIDEwMDA2NyxcbiAgMzc2MDAsXG4gIDExNjk1MSxcbiAgNTE1MzYsXG4gIC8vMTkzMC0xOTM5XG4gIDU0NDMyLFxuICAxMjA5OTgsXG4gIDQ2NDE2LFxuICAyMjE3NixcbiAgMTA3OTU2LFxuICA5NjgwLFxuICAzNzU4NCxcbiAgNTM5MzgsXG4gIDQzMzQ0LFxuICA0NjQyMyxcbiAgLy8xOTQwLTE5NDlcbiAgMjc4MDgsXG4gIDQ2NDE2LFxuICA4Njg2OSxcbiAgMTk4NzIsXG4gIDQyNDE2LFxuICA4MzMxNSxcbiAgMjExNjgsXG4gIDQzNDMyLFxuICA1OTcyOCxcbiAgMjcyOTYsXG4gIC8vMTk1MC0xOTU5XG4gIDQ0NzEwLFxuICA0Mzg1NixcbiAgMTkyOTYsXG4gIDQzNzQ4LFxuICA0MjM1MixcbiAgMjEwODgsXG4gIDYyMDUxLFxuICA1NTYzMixcbiAgMjMzODMsXG4gIDIyMTc2LFxuICAvLzE5NjAtMTk2OVxuICAzODYwOCxcbiAgMTk5MjUsXG4gIDE5MTUyLFxuICA0MjE5MixcbiAgNTQ0ODQsXG4gIDUzODQwLFxuICA1NDYxNixcbiAgNDY0MDAsXG4gIDQ2NzUyLFxuICAxMDM4NDYsXG4gIC8vMTk3MC0xOTc5XG4gIDM4MzIwLFxuICAxODg2NCxcbiAgNDMzODAsXG4gIDQyMTYwLFxuICA0NTY5MCxcbiAgMjcyMTYsXG4gIDI3OTY4LFxuICA0NDg3MCxcbiAgNDM4NzIsXG4gIDM4MjU2LFxuICAvLzE5ODAtMTk4OVxuICAxOTE4OSxcbiAgMTg4MDAsXG4gIDI1Nzc2LFxuICAyOTg1OSxcbiAgNTk5ODQsXG4gIDI3NDgwLFxuICAyMTk1MixcbiAgNDM4NzIsXG4gIDM4NjEzLFxuICAzNzYwMCxcbiAgLy8xOTkwLTE5OTlcbiAgNTE1NTIsXG4gIDU1NjM2LFxuICA1NDQzMixcbiAgNTU4ODgsXG4gIDMwMDM0LFxuICAyMjE3NixcbiAgNDM5NTksXG4gIDk2ODAsXG4gIDM3NTg0LFxuICA1MTg5MyxcbiAgLy8yMDAwLTIwMDlcbiAgNDMzNDQsXG4gIDQ2MjQwLFxuICA0Nzc4MCxcbiAgNDQzNjgsXG4gIDIxOTc3LFxuICAxOTM2MCxcbiAgNDI0MTYsXG4gIDg2MzkwLFxuICAyMTE2OCxcbiAgNDMzMTIsXG4gIC8vMjAxMC0yMDE5XG4gIDMxMDYwLFxuICAyNzI5NixcbiAgNDQzNjgsXG4gIDIzMzc4LFxuICAxOTI5NixcbiAgNDI3MjYsXG4gIDQyMjA4LFxuICA1Mzg1NixcbiAgNjAwMDUsXG4gIDU0NTc2LFxuICAvLzIwMjAtMjAyOVxuICAyMzIwMCxcbiAgMzAzNzEsXG4gIDM4NjA4LFxuICAxOTE5NSxcbiAgMTkxNTIsXG4gIDQyMTkyLFxuICAxMTg5NjYsXG4gIDUzODQwLFxuICA1NDU2MCxcbiAgNTY2NDUsXG4gIC8vMjAzMC0yMDM5XG4gIDQ2NDk2LFxuICAyMjIyNCxcbiAgMjE5MzgsXG4gIDE4ODY0LFxuICA0MjM1OSxcbiAgNDIxNjAsXG4gIDQzNjAwLFxuICAxMTExODksXG4gIDI3OTM2LFxuICA0NDQ0OCxcbiAgLy8yMDQwLTIwNDlcbiAgODQ4MzUsXG4gIDM3NzQ0LFxuICAxODkzNixcbiAgMTg4MDAsXG4gIDI1Nzc2LFxuICA5MjMyNixcbiAgNTk5ODQsXG4gIDI3NDI0LFxuICAxMDgyMjgsXG4gIDQzNzQ0LFxuICAvLzIwNTAtMjA1OVxuICA0MTY5NixcbiAgNTM5ODcsXG4gIDUxNTUyLFxuICA1NDYxNSxcbiAgNTQ0MzIsXG4gIDU1ODg4LFxuICAyMzg5MyxcbiAgMjIxNzYsXG4gIDQyNzA0LFxuICAyMTk3MixcbiAgLy8yMDYwLTIwNjlcbiAgMjEyMDAsXG4gIDQzNDQ4LFxuICA0MzM0NCxcbiAgNDYyNDAsXG4gIDQ2NzU4LFxuICA0NDM2OCxcbiAgMjE5MjAsXG4gIDQzOTQwLFxuICA0MjQxNixcbiAgMjExNjgsXG4gIC8vMjA3MC0yMDc5XG4gIDQ1NjgzLFxuICAyNjkyOCxcbiAgMjk0OTUsXG4gIDI3Mjk2LFxuICA0NDM2OCxcbiAgODQ4MjEsXG4gIDE5Mjk2LFxuICA0MjM1MixcbiAgMjE3MzIsXG4gIDUzNjAwLFxuICAvLzIwODAtMjA4OVxuICA1OTc1MixcbiAgNTQ1NjAsXG4gIDU1OTY4LFxuICA5MjgzOCxcbiAgMjIyMjQsXG4gIDE5MTY4LFxuICA0MzQ3NixcbiAgNDE2ODAsXG4gIDUzNTg0LFxuICA2MjAzNCxcbiAgLy8yMDkwLTIwOTlcbiAgNTQ1NjBcbiAgLy8yMTAwXG5dLCB2ID0gW1xuICBcIumbtlwiLFxuICBcIuS4gFwiLFxuICBcIuS6jFwiLFxuICBcIuS4iVwiLFxuICBcIuWbm1wiLFxuICBcIuS6lFwiLFxuICBcIuWFrVwiLFxuICBcIuS4g1wiLFxuICBcIuWFq1wiLFxuICBcIuS5nVwiXG5dLCBBID0gW1xuICBcIuato1wiLFxuICBcIuS6jFwiLFxuICBcIuS4iVwiLFxuICBcIuWbm1wiLFxuICBcIuS6lFwiLFxuICBcIuWFrVwiLFxuICBcIuS4g1wiLFxuICBcIuWFq1wiLFxuICBcIuS5nVwiLFxuICBcIuWNgVwiLFxuICBcIuWGrFwiLFxuICBcIuiFilwiXG5dLCBIID0gW1xuICBcIueUslwiLFxuICBcIuS5mVwiLFxuICBcIuS4mVwiLFxuICBcIuS4gVwiLFxuICBcIuaIilwiLFxuICBcIuW3sVwiLFxuICBcIuW6mlwiLFxuICBcIui+m1wiLFxuICBcIuWjrFwiLFxuICBcIueZuFwiXG5dLCBCID0gW1xuICBcIuWtkFwiLFxuICBcIuS4kVwiLFxuICBcIuWvhVwiLFxuICBcIuWNr1wiLFxuICBcIui+sFwiLFxuICBcIuW3s1wiLFxuICBcIuWNiFwiLFxuICBcIuacqlwiLFxuICBcIueUs1wiLFxuICBcIumFiVwiLFxuICBcIuaIjFwiLFxuICBcIuS6pVwiXG5dLCBudCA9IFtcbiAgXCLpvKBcIixcbiAgXCLniZtcIixcbiAgXCLomY5cIixcbiAgXCLlhZRcIixcbiAgXCLpvplcIixcbiAgXCLom4dcIixcbiAgXCLpqaxcIixcbiAgXCLnvopcIixcbiAgXCLnjLRcIixcbiAgXCLpuKFcIixcbiAgXCLni5dcIixcbiAgXCLnjKpcIlxuXSwgeCA9IChyKSA9PiB7XG4gIGxldCB0ID0gMzQ4O1xuICBmb3IgKGxldCBlID0gMzI3Njg7IGUgPiA4OyBlID4+PSAxKVxuICAgIHQgKz0gbVtyIC0gMTkwMF0gJiBlID8gMSA6IDA7XG4gIHJldHVybiB0ICsgTihyKTtcbn0sIGIgPSAocikgPT4gbVtyIC0gMTkwMF0gJiAxNSwgTiA9IChyKSA9PiBiKHIpID8gbVtyIC0gMTkwMF0gJiA2NTUzNiA/IDMwIDogMjkgOiAwLCBTID0gKHIpID0+IEhbciAlIDEwXSArIEJbciAlIDEyXSwgZyA9IChyLCB0KSA9PiBtW3IgLSAxOTAwXSAmIDY1NTM2ID4+IHQgPyAzMCA6IDI5LCBzdCA9IChyKSA9PiBudFsociAtIDQpICUgMTJdLCBpdCA9IChyKSA9PiB7XG4gIGNvbnN0IHQgPSBbXCLliJ1cIiwgXCLljYFcIiwgXCLlu79cIiwgXCLkuInljYFcIl07XG4gIGlmIChyID09PSAxMCkgcmV0dXJuIFwi5Yid5Y2BXCI7XG4gIGlmIChyID09PSAyMCkgcmV0dXJuIFwi5LqM5Y2BXCI7XG4gIGlmIChyID09PSAzMCkgcmV0dXJuIFwi5LiJ5Y2BXCI7XG4gIGNvbnN0IGUgPSBNYXRoLmZsb29yKHIgLyAxMCksIGEgPSByICUgMTA7XG4gIHJldHVybiB0W2VdICsgdlthXTtcbn0sIGR0ID0gKHIpID0+IGAke0hbKHIgLSA0KSAlIDEwXX0ke0JbKHIgLSA0KSAlIDEyXX3lubRgLCBSID0gKHIsIHQpID0+IHtcbiAgY29uc3QgZSA9IFtdO1xuICBmb3IgKGxldCBhID0gcjsgYSA8PSB0OyBhKyspXG4gICAgZS5wdXNoKHtcbiAgICAgIHllYXI6IGEsXG4gICAgICBsdW5hclllYXI6IGR0KGEpLFxuICAgICAgbHVuYXJZZWFyQ046IGEudG9TdHJpbmcoKS5zcGxpdChcIlwiKS5tYXAoKG8pID0+IHZbTnVtYmVyKG8pXSkuam9pbihcIlwiKVxuICAgIH0pO1xuICByZXR1cm4gZTtcbn0sIEMgPSAocikgPT4ge1xuICBjb25zdCB0ID0gYihyKTtcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiByLFxuICAgIGxlYXBNb250aDogdCB8fCB2b2lkIDAsXG4gICAgbGVhcE1vbnRoQ046IHQgPyBg6ZewJHtBW3QgLSAxXX3mnIhgIDogdm9pZCAwLFxuICAgIGRheXM6IHQgPyBtW3IgLSAxOTAwXSAmIDY1NTM2ID8gMzAgOiAyOSA6IDBcbiAgfTtcbn0sIFkgPSAocikgPT4ge1xuICBjb25zdCB0ID0gbmV3IEFycmF5KDcpLmZpbGwoMCk7XG4gIGxldCBlID0gMCwgYSA9IDA7XG4gIGNvbnN0IG8gPSBfKHIpLCBbbiwgaSwgZF0gPSBvLmZvcm1hdChcIllZWVktTU0tRERcIikuc3BsaXQoXCItXCIpLm1hcChOdW1iZXIpO1xuICBsZXQgcyA9IE1hdGguZmxvb3IoXG4gICAgKERhdGUuVVRDKG4sIGkgLSAxLCBkKSAtIERhdGUuVVRDKDE5MDAsIDAsIDMxKSkgLyAoMjQgKiA2MCAqIDYwICogMWUzKVxuICApO1xuICB0WzVdID0gcyArIDQwLCB0WzRdID0gMTQ7XG4gIGxldCBsID0gMTkwMDtcbiAgZm9yICg7IGwgPCAyMTAwICYmIHMgPiAwOyBsKyspXG4gICAgZSA9IHgobCksIHMgLT0gZSwgdFs0XSArPSAxMjtcbiAgcyA8IDAgJiYgKHMgKz0gZSwgbC0tLCB0WzRdIC09IDEyKSwgdFswXSA9IGwsIHRbM10gPSBsIC0gMTg2NCwgYSA9IGIobCksIHRbNl0gPSAwO1xuICBmb3IgKGxldCB5ID0gMTsgeSA8IDEzICYmIHMgPj0gMDsgeSsrKVxuICAgIGEgPiAwICYmIHkgPT09IGEgKyAxICYmIHRbNl0gPT09IDAgPyAoLS15LCB0WzZdID0gMSwgZSA9IE4obCkpIDogZSA9IGcobCwgeSksIHRbNl0gPT09IDEgJiYgeSA9PT0gYSArIDEgJiYgKHRbNl0gPSAwKSwgcyAtPSBlLCB0WzZdID09PSAwICYmIHRbNF0rKywgdFsxXSA9IHk7XG4gIHJldHVybiBzIDwgMCAmJiAocyArPSBlLCB0WzFdLS0sIHRbNF0tLSksIHRbMl0gPSBzICsgMSwge1xuICAgIGRhdGU6IG8uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAvLyDlhazljobml6XmnJ9cbiAgICBsdW5hclllYXI6IHRbMF0sXG4gICAgLy8g5Yac5Y6G5bm05Lu9XG4gICAgbHVuYXJNb246IHRbMV0gKyAxLFxuICAgIC8vIOWGnOWOhuaciOS7vVxuICAgIGx1bmFyRGF5OiB0WzJdLFxuICAgIC8vIOWGnOWOhuaXpeacn1xuICAgIGlzTGVhcDogISF0WzZdLFxuICAgIC8vIOaYr+WQpumXsOaciFxuICAgIHpvZGlhYzogc3QodFswXSksXG4gICAgLy8g55Sf6IKWXG4gICAgeWVhckN5bDogUyh0WzNdKSxcbiAgICAvLyDlubTmn7FcbiAgICBtb25DeWw6IFModFs0XSksXG4gICAgLy8g5pyI5p+xXG4gICAgZGF5Q3lsOiBTKHRbNV0pLFxuICAgIC8vIOaXpeafsVxuICAgIGx1bmFyWWVhckNOOiBgJHt0WzBdLnRvU3RyaW5nKCkuc3BsaXQoXCJcIikubWFwKCh5KSA9PiB2W051bWJlcih5KV0pLmpvaW4oXCJcIil9YCxcbiAgICAvLyDlhpzljoblubTku73kuK3mlofooajnpLpcbiAgICBsdW5hck1vbkNOOiBgJHtBW3RbMV1dfeaciGAsXG4gICAgLy8g5Yac5Y6G5pyI5Lu95Lit5paH6KGo56S6XG4gICAgbHVuYXJEYXlDTjogaXQodFsyXSlcbiAgICAvLyDlhpzljobml6XmnJ/kuK3mlofooajnpLpcbiAgfTtcbn0sIEkgPSAociwgdCkgPT4ge1xuICBjb25zdCBlID0gXyhyKSwgYSA9IF8odCksIG8gPSBbXTtcbiAgZm9yIChsZXQgbiA9IGU7IG4uaXNCZWZvcmUoYSkgfHwgbi5pc1NhbWUoYSwgXCJkYXlcIik7IG4gPSBuLmFkZCgxLCBcImRheVwiKSlcbiAgICBvLnB1c2goWShuKSk7XG4gIHJldHVybiBvO1xufSwgaiA9IChyKSA9PiB7XG4gIGNvbnN0IHQgPSBfKHIpLCBlID0gdC55ZWFyKCksIGEgPSB0Lm1vbnRoKCkgKyAxLCBvID0gdC5kYXRlKCk7XG4gIGxldCBuID0gMDtcbiAgZm9yIChsZXQgdSA9IDE5MDA7IHUgPCBlOyB1KyspXG4gICAgbiArPSB4KHUpO1xuICBjb25zdCBpID0gYihlKTtcbiAgZm9yIChsZXQgdSA9IDE7IHUgPCBhOyB1KyspXG4gICAgbiArPSBnKGUsIHUpLCB1ID09PSBpICYmIChuICs9IE4oZSkpO1xuICBuICs9IG8gLSAxO1xuICBjb25zdCBkID0gXyhuZXcgRGF0ZSgxOTAwLCAwLCAzMSkpLCBzID0gZC5hZGQobiwgXCJkYXlcIikuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgbGV0IGwgPSBuLCB5O1xuICByZXR1cm4gaSA9PT0gYSAmJiAobCArPSBnKGUsIGEpLCB5ID0gZC5hZGQobCwgXCJkYXlcIikuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSksIHtcbiAgICBkYXRlOiBzLFxuICAgIGxlYXBNb250aERhdGU6IHlcbiAgfTtcbn0sIGx0ID0ge1xuICBnZXRMdW5hclllYXJzOiBSLFxuICBnZXRZZWFyTGVhcE1vbnRoOiBDLFxuICBnZXRMdW5hckRhdGU6IFksXG4gIGdldEx1bmFyRGF0ZXNJblJhbmdlOiBJLFxuICBnZXRTb2xhckRhdGVGcm9tTHVuYXI6IGpcbn0sIGh0ID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZGVmYXVsdDogbHQsXG4gIGdldEx1bmFyRGF0ZTogWSxcbiAgZ2V0THVuYXJEYXRlc0luUmFuZ2U6IEksXG4gIGdldEx1bmFyWWVhcnM6IFIsXG4gIGdldFNvbGFyRGF0ZUZyb21MdW5hcjogaixcbiAgZ2V0WWVhckxlYXBNb250aDogQyxcbiAgbW9udGhEYXlzOiBnXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpLCBfdCA9IHtcbiAgMToge1xuICAgIC8vIOato+aciFxuICAgIDE6IFtcIuaYpeiKglwiLCBcIum4oeaXpVwiLCBcIuWFg+Wni+WkqeWwiuivnui+sFwiXSxcbiAgICAyOiBbXCLniqzml6VcIl0sXG4gICAgMzogW1wi54yq5pelXCIsIFwi5bCP5bm05pydXCJdLFxuICAgIDQ6IFtcIue+iuaXpVwiLCBcIuWtmeWkqeWMu+ivnui+sFwiXSxcbiAgICA1OiBbXCLniZvml6VcIiwgXCLnoLTkupTml6VcIiwgXCLlvIDluIJcIiwgXCLot6/npZ7or57ovrBcIl0sXG4gICAgNjogW1wi6ams5pelXCJdLFxuICAgIDc6IFtcIuS6uuaXpVwiLCBcIumAgeeBq+elnlwiXSxcbiAgICA4OiBbXCLosLfml6VcIiwgXCLpmI7njovor57ovrBcIl0sXG4gICAgOTogW1wi5aSp5pelXCIsIFwi546J55qH6K+e6L6wXCJdLFxuICAgIDEwOiBbXCLlnLDml6VcIiwgXCLnn7PlpLTnlJ/ml6VcIl0sXG4gICAgMTM6IFtcIuS4iijor5Up54Gv5pelXCIsIFwi5YWz5YWs5Y2H5aSp5pelXCJdLFxuICAgIDE1OiBbXCLlhYPlrrXoioJcIiwgXCLkuIrlhYPoioJcIiwgXCLmraPnga/ml6VcIiwgXCLlpKnlrpjor57ovrBcIl0sXG4gICAgMTg6IFtcIuiQveeBr+aXpVwiXSxcbiAgICAyNTogW1wi5aSp5LuTKOWhq+S7kynoioJcIl1cbiAgfSxcbiAgMjoge1xuICAgIC8vIOS6jOaciFxuICAgIDE6IFtcIuWkqumYs+eUn+aXpVwiXSxcbiAgICAyOiBbXCLmmKXpvpnoioJcIiwgXCLlnJ/lnLDlhaznlJ/ml6VcIiwgXCLmtY7lhazmtLvkvZvnlJ/ml6VcIl0sXG4gICAgMzogW1wi5paH5piM5bid5ZCb6K+e6L6wXCJdLFxuICAgIDEyOiBbXCLnmb7oirHnlJ/ml6Uo6Iqx5pyd6IqCKVwiXSxcbiAgICAxNTogW1wi5Lmd5aSp546E5aWz6K+e6L6wXCIsIFwi5aSq5LiK6ICB5ZCb6K+e6L6wXCIsIFwi57K+5b+g5bKz546L6K+e6L6wXCJdLFxuICAgIDE5OiBbXCLop4Lpn7Poj6nokKjor57ovrBcIl0sXG4gICAgMjE6IFtcIuaZrui0pOiPqeiQqOivnui+sFwiXVxuICB9LFxuICAzOiB7XG4gICAgMzogW1wi5LiK5bez6IqCXCJdLFxuICAgIDE1OiBbXCLotbXlhazlhYPluIXor57ovrBcIiwgXCLms7DlsbHogIHmr43or57ovrBcIl1cbiAgfSxcbiAgNDoge1xuICAgIDE6IFtcIuelrembueelnlwiXSxcbiAgICA0OiBbXCLmlofmroroj6nokKjor57ovrBcIl0sXG4gICAgODogW1wi5rW05L2b6IqCKOm+meWNjuS8milcIl0sXG4gICAgMTI6IFtcIuibh+eOi+ivnui+sFwiXSxcbiAgICAxNDogW1wi5ZCV5rSe5a6+6K+e6L6wXCJdLFxuICAgIDE4OiBbXCLljY7kvZfor57ovrBcIl0sXG4gICAgMjg6IFtcIuiNr+eOiyjnpZ7lhpwp6K+e6L6wXCJdXG4gIH0sXG4gIDU6IHtcbiAgICA1OiBbXCLnq6/ljYjoioJcIl0sXG4gICAgMTM6IFtcIumbqOiKglwiLCBcIum7hOW4neivnui+sFwiXVxuICB9LFxuICA2OiB7XG4gICAgMTogW1wi5Y2K5bm06IqCXCJdLFxuICAgIDY6IFtcIuaZkuiho+iKglwiXSxcbiAgICAxOTogW1wi6KeC6Z+z6I+p6JCo5b6X6YGTXCJdLFxuICAgIDI0OiBbXCLpm7fnpZ7or57ovrBcIiwgXCLojbfoirHnlJ/ml6VcIiwgXCLlhbPlhazor57ovrBcIl1cbiAgfSxcbiAgNzoge1xuICAgIDE6IFtcIuelrea1t+elnlwiXSxcbiAgICA3OiBbXCLkuZ7lt6foioJcIl0sXG4gICAgMTU6IFtcIuS4reWFgyjprLwp6IqCXCIsIFwi5Zyw5a6Y6K+e6L6wKOWtn+WFsOebhuS8milcIl0sXG4gICAgMTg6IFtcIuilv+eOi+avjeivnui+sFwiXSxcbiAgICAyMDogW1wi5qOJ6Iqx55Sf5pelXCJdLFxuICAgIDIzOiBbXCLor7jokZvkuq7or57ovrBcIl0sXG4gICAgMzA6IFtcIuWcsOiXj+iPqeiQqOivnui+sFwiXVxuICB9LFxuICA4OiB7XG4gICAgMTogW1wi5aSp5Yy76IqCXCJdLFxuICAgIDM6IFtcIueBtuWQm+eUn+aXpVwiXSxcbiAgICA4OiBbXCLnkbbmsaDlpKfkvJpcIl0sXG4gICAgMTU6IFtcIuS4reeni+iKglwiXSxcbiAgICAyMDogW1wi5rC056i755Sf5pelXCJdLFxuICAgIDI4OiBbXCLlrZTlrZDor57ovrBcIl1cbiAgfSxcbiAgOToge1xuICAgIDk6IFtcIumHjemYs+iKglwiXSxcbiAgICAxOTogW1wi6KeC6Z+z6I+p6JCo5Ye65a62XCJdXG4gIH0sXG4gIDEwOiB7XG4gICAgMTogW1wi5Y2B5pyI5pydXCIsIFwi5a+S6KGj6IqCXCJdLFxuICAgIDE1OiBbXCLkuIvlhYPoioJcIiwgXCLmsLTlrpjor57ovrBcIl1cbiAgfSxcbiAgMTI6IHtcbiAgICA4OiBbXCLohYrlhavoioJcIl0sXG4gICAgMjM6IFtcIuWumOWutumAgeeBtlwiXSxcbiAgICAyNDogW1wi5rCR6Ze06YCB54G2XCJdLFxuICAgIDI1OiBbXCLmjqXnjonnmodcIl1cbiAgfVxufSwgeXQgPSBbXG4gIC8vIOWkhOeQhuWvkumjn+iKgu+8iOa4heaYjuWJjeS4gOaXpe+8iVxuICAociwgdCkgPT4ge1xuICAgIGNvbnN0IGUgPSByLmFkZCgxLCBcImRheVwiKTtcbiAgICBFKGUpLmZpbmQoXG4gICAgICAobykgPT4gby50ZXJtID09PSBcInB1cmVfYnJpZ2h0bmVzc1wiXG4gICAgKSAmJiB0LnB1c2goe1xuICAgICAgZGF0ZTogci5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgICAgbmFtZTogXCLlr5Lpo5/oioJcIixcbiAgICAgIHR5cGU6IFwic29sYXJfdGVybVwiXG4gICAgfSk7XG4gIH0sXG4gIC8vIOWkhOeQhumZpOWkle+8iOWGnOWOhuiFiuaciOacgOWQjuS4gOaXpe+8iVxuICAociwgdCkgPT4ge1xuICAgIGNvbnN0IGUgPSBZKHIpO1xuICAgIGlmIChlLmx1bmFyTW9uID09PSAxMiAmJiBlLmx1bmFyRGF5ID09PSBnKGUubHVuYXJZZWFyLCAxMikpIHtcbiAgICAgIGNvbnN0IGEgPSByLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgICBbXCLpmaTlpJVcIiwgXCLlsIHkupVcIiwgXCLnpa3kupXnpZ5cIiwgXCLotLTmmKXogZRcIiwgXCLov47otKLnpZ5cIl0uZm9yRWFjaCgobykgPT4ge1xuICAgICAgICB0LnB1c2goe1xuICAgICAgICAgIGRhdGU6IGEsXG4gICAgICAgICAgbmFtZTogbyxcbiAgICAgICAgICB0eXBlOiBcImx1bmFyXCJcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbl0sIFUgPSAociwgdCkgPT4ge1xuICB2YXIgbjtcbiAgY29uc3QgZSA9IFtdO1xuICBsZXQgYSA9IF8ocik7XG4gIGNvbnN0IG8gPSBfKHQgfHwgcik7XG4gIGZvciAoOyBhLmlzQmVmb3JlKG8pIHx8IGEuaXNTYW1lKG8pOyApIHtcbiAgICBjb25zdCBpID0gWShhKTtcbiAgICBpLmlzTGVhcCB8fCAoKChuID0gX3RbaS5sdW5hck1vbl0pID09IG51bGwgPyB2b2lkIDAgOiBuW2kubHVuYXJEYXldKSB8fCBbXSkuZm9yRWFjaCgocykgPT4ge1xuICAgICAgZS5wdXNoKHtcbiAgICAgICAgZGF0ZTogYS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgICAgICBuYW1lOiBzLFxuICAgICAgICB0eXBlOiBcImx1bmFyXCJcbiAgICAgIH0pO1xuICAgIH0pLCB5dC5mb3JFYWNoKChkKSA9PiBkKGEsIGUpKSwgYSA9IGEuYWRkKDEsIFwiZGF5XCIpO1xuICB9XG4gIHJldHVybiBlLnJlZHVjZSgoaSwgZCkgPT4ge1xuICAgIGNvbnN0IHMgPSBpLmZpbmQoKGwpID0+IGwuZGF0ZSA9PT0gZC5kYXRlKTtcbiAgICByZXR1cm4gcyA/IHMubmFtZS5wdXNoKGQubmFtZSkgOiBpLnB1c2goeyBkYXRlOiBkLmRhdGUsIG5hbWU6IFtkLm5hbWVdIH0pLCBpO1xuICB9LCBbXSk7XG59LCB1dCA9IHtcbiAgZ2V0THVuYXJGZXN0aXZhbHM6IFVcbn0sIHd0ID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZGVmYXVsdDogdXQsXG4gIGdldEx1bmFyRmVzdGl2YWxzOiBVXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpLCBmdCA9IHtcbiAgLi4udHQsXG4gIC4uLm90LFxuICAuLi5odCxcbiAgLi4ud3Rcbn07XG5leHBvcnQge1xuICBmdCBhcyBkZWZhdWx0LFxuICBYIGFzIGZpbmRXb3JrZGF5LFxuICBKIGFzIGdldERheURldGFpbCxcbiAgSyBhcyBnZXRIb2xpZGF5c0luUmFuZ2UsXG4gIFkgYXMgZ2V0THVuYXJEYXRlLFxuICBJIGFzIGdldEx1bmFyRGF0ZXNJblJhbmdlLFxuICBVIGFzIGdldEx1bmFyRmVzdGl2YWxzLFxuICBSIGFzIGdldEx1bmFyWWVhcnMsXG4gIGogYXMgZ2V0U29sYXJEYXRlRnJvbUx1bmFyLFxuICBGIGFzIGdldFNvbGFyVGVybURhdGUsXG4gIGF0IGFzIGdldFNvbGFyVGVybXMsXG4gIEUgYXMgZ2V0U29sYXJUZXJtc0luUmFuZ2UsXG4gIFEgYXMgZ2V0V29ya2RheXNJblJhbmdlLFxuICBDIGFzIGdldFllYXJMZWFwTW9udGgsXG4gIE8gYXMgaXNIb2xpZGF5LFxuICBHIGFzIGlzSW5MaWV1LFxuICBEIGFzIGlzV29ya2RheSxcbiAgZyBhcyBtb250aERheXNcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUVLLEVBQUUsRUFBRTNGLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFMUIsRUFBRSxFQUFFNUQsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLElBQUksRUFBRSxFQUFFSCxFQUFFLElBQUksQ0FBQyxFQUFFQSxFQUFFLElBQUksQ0FBQyxHQUFHN0QsRUFBRXVFLEVBQUUsSUFBSSxFQUFFbUIsR0FBRyxFQUFFMUYsRUFBRSxHQUFHLENBQUMsRUFBRXdGLEVBQUUsRUFBRXhGLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxHQUFHLENBQUMsRUFBRUgsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHLENBQUMsRUFBRTVELEVBQUUsRUFBRUQsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUVHLEVBQUUsRUFBRXpGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUgsRUFBRSxHQUFHLENBQUMsRUFBRTBCLEVBQUUsRUFBRXZGLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFMUIsRUFBRSxFQUFFNUQsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLElBQUksRUFBRSxFQUFFSCxFQUFFLElBQUksQ0FBQyxFQUFFQSxFQUFFLElBQUksQ0FBQyxFQUFFOEIsRUFBRSxFQUFFM0YsRUFBRSxJQUFJLENBQUMsR0FBR0EsRUFBRXVFLEVBQUUsSUFBSSxFQUFFbUIsR0FBRyxFQUFFMUYsRUFBRSxHQUFHLENBQUMsRUFBRXdGLEVBQUUsRUFBRXhGLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHLEVBQUUsRUFBRUgsRUFBRSxHQUFHLEVBQUUsRUFBRXlCLEdBQUcsR0FBRyxFQUFFLEVBQUVyRixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRUgsRUFBRSxHQUFHLENBQUMsRUFBRTRCLEVBQUUsRUFBRXpGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxHQUFHLEVBQUUsRUFBRUgsRUFBRSxHQUFHLENBQUMsRUFBRXlCLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEVBQUUsRUFBRXZGLEVBQUUsR0FBRyxFQUFFLEVBQUUyRixFQUFFLEVBQUUzRixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVILEVBQUUsR0FBRyxFQUFFLEVBQUVELEVBQUUsRUFBRTVELEVBQUUsSUFBSSxDQUFDLEVBQUVzRixHQUFHLElBQUksQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxJQUFJLEVBQUUsRUFBRUgsRUFBRSxJQUFJLENBQUMsRUFBRUEsRUFBRSxJQUFJLENBQUMsR0FBRzdELEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFRSxFQUFFLEVBQUV4RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVzQixHQUFHLEdBQUcsRUFBRSxFQUFFekIsRUFBRSxHQUFHLEVBQUUsRUFBRXlCLEdBQUcsR0FBRyxFQUFFLEVBQUVyRixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUV5RixFQUFFLEVBQUV6RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUV5QixHQUFHLEdBQUcsQ0FBQyxFQUFFQyxFQUFFLEVBQUV2RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVILEVBQUUsR0FBRyxFQUFFLEVBQUU4QixFQUFFLEVBQUUzRixFQUFFLEdBQUcsRUFBRSxFQUFFNEQsRUFBRSxFQUFFNUQsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLElBQUksQ0FBQyxFQUFFc0IsR0FBRyxJQUFJLENBQUMsRUFBRXpCLEVBQUUsSUFBSSxDQUFDLEVBQUV5QixHQUFHLElBQUksQ0FBQyxHQUFHdEYsRUFBRXVFLEVBQUUsSUFBSSxFQUFFbUIsR0FBRyxFQUFFMUYsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUVFLEVBQUUsRUFBRXhGLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxHQUFHLEVBQUUsRUFBRUgsRUFBRSxHQUFHLENBQUMsRUFBRXlCLEdBQUcsR0FBRyxDQUFDLEVBQUVyRixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRUgsRUFBRSxHQUFHLENBQUMsRUFBRTRCLEVBQUUsRUFBRXpGLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxHQUFHLENBQUMsRUFBRUgsRUFBRSxHQUFHLENBQUMsRUFBRXlCLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEVBQUUsRUFBRXZGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFSyxFQUFFLEVBQUUzRixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRTFCLEVBQUUsRUFBRTVELEVBQUUsSUFBSSxDQUFDLEVBQUVzRixHQUFHLElBQUksQ0FBQyxFQUFFdEIsRUFBRSxJQUFJLENBQUMsRUFBRUEsRUFBRSxJQUFJLENBQUMsRUFBRUgsRUFBRSxJQUFJLENBQUMsRUFBRXlCLEdBQUcsSUFBSSxDQUFDLEVBQUVJLEdBQUcsRUFBRTFGLEVBQUUsSUFBSSxFQUFFLEdBQUdBLEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFRSxFQUFFLEVBQUV4RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxDQUFDLEVBQUVBLEVBQUUsR0FBRyxFQUFFLEVBQUVILEVBQUUsR0FBRyxFQUFFLEVBQUV5QixHQUFHLEdBQUcsRUFBRSxFQUFFckYsRUFBRSxFQUFFRCxFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRUcsRUFBRSxFQUFFekYsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFSCxFQUFFLEdBQUcsQ0FBQyxFQUFFeUIsR0FBRyxHQUFHLENBQUMsRUFBRUMsRUFBRSxFQUFFdkYsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUVLLEVBQUUsRUFBRTNGLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUgsRUFBRSxHQUFHLEVBQUUsRUFBRUQsRUFBRSxFQUFFNUQsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLElBQUksQ0FBQyxFQUFFSCxFQUFFLElBQUksQ0FBQyxFQUFFeUIsR0FBRyxJQUFJLENBQUMsR0FBR3RGLEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUV3RixFQUFFLEVBQUV4RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVILEVBQUUsR0FBRyxFQUFFLEVBQUU1RCxFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFRyxFQUFFLEVBQUV6RixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUV5QixHQUFHLEdBQUcsQ0FBQyxFQUFFQyxFQUFFLEVBQUV2RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVILEVBQUUsR0FBRyxFQUFFLEVBQUVELEVBQUUsRUFBRTVELEVBQUUsSUFBSSxDQUFDLEVBQUVzRixHQUFHLElBQUksQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxJQUFJLEVBQUUsRUFBRUgsRUFBRSxJQUFJLENBQUMsRUFBRXlCLEdBQUcsSUFBSSxDQUFDLEdBQUd0RixFQUFFdUUsRUFBRSxJQUFJLEVBQUVtQixHQUFHLEVBQUUxRixFQUFFLEdBQUcsQ0FBQyxFQUFFd0YsRUFBRSxFQUFFeEYsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUV0QixFQUFFLEdBQUcsQ0FBQyxFQUFFc0IsR0FBRyxHQUFHLENBQUMsRUFBRXpCLEVBQUUsR0FBRyxDQUFDLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUU1RCxFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFRyxFQUFFLEVBQUV6RixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUUwQixFQUFFLEVBQUV2RixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRUssRUFBRSxFQUFFM0YsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUUxQixFQUFFLEVBQUU1RCxFQUFFLElBQUksQ0FBQyxFQUFFc0YsR0FBRyxJQUFJLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsSUFBSSxFQUFFLEVBQUVILEVBQUUsSUFBSSxDQUFDLEVBQUVBLEVBQUUsSUFBSSxDQUFDLEdBQUc3RCxFQUFFdUUsRUFBRSxJQUFJLEVBQUVtQixHQUFHLEVBQUUxRixFQUFFLEdBQUcsQ0FBQyxFQUFFd0YsRUFBRSxFQUFFeEYsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsRUFBRSxFQUFFSCxFQUFFLEdBQUcsRUFBRSxFQUFFeUIsR0FBRyxHQUFHLEVBQUUsRUFBRXJGLEVBQUUsRUFBRUQsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsQ0FBQyxFQUFFSCxFQUFFLEdBQUcsQ0FBQyxFQUFFNEIsRUFBRSxFQUFFekYsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFSCxFQUFFLEdBQUcsRUFBRSxFQUFFMEIsRUFBRSxFQUFFdkYsRUFBRSxHQUFHLEVBQUUsRUFBRTRELEVBQUUsRUFBRTVELEVBQUUsSUFBSSxDQUFDLEVBQUVzRixHQUFHLElBQUksQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRXNCLEdBQUcsR0FBRyxFQUFFLEVBQUV6QixFQUFFLElBQUksQ0FBQyxFQUFFeUIsR0FBRyxJQUFJLENBQUMsRUFBRUssRUFBRSxFQUFFM0YsRUFBRSxHQUFHLEVBQUUsRUFBRTBGLEdBQUcsRUFBRTFGLEVBQUUsSUFBSSxFQUFFLEVBQUVzRixHQUFHLElBQUksRUFBRSxFQUFFdEIsRUFBRSxJQUFJLEVBQUUsRUFBRUgsRUFBRSxJQUFJLEVBQUUsR0FBRzdELEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFRSxFQUFFLEVBQUV4RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUV5QixHQUFHLEdBQUcsQ0FBQyxFQUFFckYsRUFBRSxFQUFFRCxFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUU0QixFQUFFLEVBQUV6RixFQUFFLEdBQUcsQ0FBQyxFQUFFdUYsRUFBRSxFQUFFdkYsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFSCxFQUFFLEdBQUcsRUFBRSxFQUFFRCxFQUFFLEVBQUU1RCxFQUFFLElBQUksQ0FBQyxFQUFFc0YsR0FBRyxJQUFJLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVILEVBQUUsSUFBSSxDQUFDLEVBQUU4QixFQUFFLEVBQUUzRixFQUFFLElBQUksQ0FBQyxHQUFHQSxFQUFFdUUsRUFBRSxJQUFJLEVBQUVtQixHQUFHLEVBQUUxRixFQUFFLEdBQUcsQ0FBQyxFQUFFd0YsRUFBRSxFQUFFeEYsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUV0QixFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUcsRUFBRSxFQUFFSCxFQUFFLEdBQUcsRUFBRSxFQUFFeUIsR0FBRyxHQUFHLEVBQUUsRUFBRXJGLEVBQUUsRUFBRUQsRUFBRSxHQUFHLENBQUMsRUFBRXlGLEVBQUUsRUFBRXpGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFQyxFQUFFLEVBQUV2RixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVILEVBQUUsR0FBRyxFQUFFLEVBQUU4QixFQUFFLEVBQUUzRixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVILEVBQUUsR0FBRyxFQUFFLEVBQUVELEVBQUUsRUFBRTVELEVBQUUsSUFBSSxDQUFDLEVBQUVzRixHQUFHLElBQUksQ0FBQyxFQUFFdEIsRUFBRSxJQUFJLENBQUMsRUFBRXNCLEdBQUcsSUFBSSxDQUFDLEVBQUV6QixFQUFFLElBQUksQ0FBQyxFQUFFeUIsR0FBRyxJQUFJLENBQUMsR0FBR3RGLEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRUgsRUFBRSxHQUFHLENBQUMsRUFBRTJCLEVBQUUsRUFBRXhGLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxHQUFHLEVBQUUsRUFBRUgsRUFBRSxHQUFHLEVBQUUsRUFBRXlCLEdBQUcsR0FBRyxFQUFFLEVBQUVyRixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFRyxFQUFFLEVBQUV6RixFQUFFLEdBQUcsQ0FBQyxFQUFFdUYsRUFBRSxFQUFFdkYsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxHQUFHLEVBQUUsRUFBRTJGLEVBQUUsRUFBRTNGLEVBQUUsR0FBRyxFQUFFLEVBQUU0RCxFQUFFLEVBQUU1RCxFQUFFLElBQUksQ0FBQyxFQUFFc0YsR0FBRyxJQUFJLENBQUMsRUFBRXRCLEVBQUUsSUFBSSxFQUFFLEVBQUVILEVBQUUsSUFBSSxDQUFDLEVBQUV4QyxFQUFFLEVBQUVyQixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEdBQUc3RCxFQUFFdUUsRUFBRSxJQUFJLEVBQUVtQixHQUFHLEVBQUUxRixFQUFFLEdBQUcsQ0FBQyxFQUFFd0YsRUFBRSxFQUFFeEYsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFSCxFQUFFLEdBQUcsQ0FBQyxFQUFFeUIsR0FBRyxHQUFHLENBQUMsRUFBRXJGLEVBQUUsRUFBRUQsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUVHLEVBQUUsRUFBRXpGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRUgsRUFBRSxHQUFHLENBQUMsRUFBRTBCLEVBQUUsRUFBRXZGLEVBQUUsR0FBRyxDQUFDLEVBQUUyRixFQUFFLEVBQUUzRixFQUFFLEdBQUcsQ0FBQyxFQUFFNEQsRUFBRSxFQUFFNUQsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLElBQUksRUFBRSxFQUFFSCxFQUFFLElBQUksQ0FBQyxFQUFFeUIsR0FBRyxJQUFJLENBQUMsR0FBR3RGLEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRXNCLEdBQUcsR0FBRyxDQUFDLEVBQUV6QixFQUFFLEdBQUcsQ0FBQyxFQUFFeUIsR0FBRyxHQUFHLENBQUMsRUFBRUUsRUFBRSxFQUFFeEYsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFc0IsR0FBRyxHQUFHLEVBQUUsRUFBRXpCLEVBQUUsR0FBRyxFQUFFLEVBQUV5QixHQUFHLEdBQUcsRUFBRSxFQUFFckYsRUFBRSxFQUFFRCxFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUU0QixFQUFFLEVBQUV6RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVzQixHQUFHLEdBQUcsRUFBRSxFQUFFekIsRUFBRSxHQUFHLEVBQUUsRUFBRXlCLEdBQUcsR0FBRyxFQUFFLEVBQUVDLEVBQUUsRUFBRXZGLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLENBQUMsRUFBRXNCLEdBQUcsR0FBRyxDQUFDLEVBQUV6QixFQUFFLEdBQUcsRUFBRSxFQUFFeUIsR0FBRyxHQUFHLEVBQUUsRUFBRUssRUFBRSxFQUFFM0YsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFSCxFQUFFLEdBQUcsRUFBRSxFQUFFRCxFQUFFLEVBQUU1RCxFQUFFLElBQUksQ0FBQyxFQUFFc0YsR0FBRyxJQUFJLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsSUFBSSxFQUFFLEVBQUVILEVBQUUsSUFBSSxDQUFDLEVBQUVBLEVBQUUsSUFBSSxDQUFDLEdBQUc3RCxFQUFFdUUsRUFBRSxJQUFJLEVBQUVtQixHQUFHLEVBQUUxRixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXpCLEVBQUUsR0FBRyxDQUFDLEVBQUUyQixFQUFFLEVBQUV4RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxFQUFFLEVBQUVILEVBQUUsR0FBRyxFQUFFLEVBQUV5QixHQUFHLEdBQUcsRUFBRSxFQUFFckYsRUFBRSxFQUFFRCxFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUV5QixHQUFHLEdBQUcsQ0FBQyxFQUFFRyxFQUFFLEVBQUV6RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVILEVBQUUsR0FBRyxFQUFFLEVBQUUwQixFQUFFLEVBQUV2RixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsRUFBRSxFQUFFMkYsRUFBRSxFQUFFM0YsRUFBRSxHQUFHLEVBQUUsRUFBRTRELEVBQUUsRUFBRTVELEVBQUUsSUFBSSxDQUFDLEVBQUVzRixHQUFHLElBQUksQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUgsRUFBRSxJQUFJLENBQUMsR0FBRzdELEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFRSxFQUFFLEVBQUV4RixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxFQUFFLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUV5QixHQUFHLEdBQUcsQ0FBQyxFQUFFckYsRUFBRSxFQUFFRCxFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUU0QixFQUFFLEVBQUV6RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRUMsRUFBRSxFQUFFdkYsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHLENBQUMsRUFBRTJGLEVBQUUsRUFBRTNGLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFMUIsRUFBRSxFQUFFNUQsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLElBQUksQ0FBQyxFQUFFc0IsR0FBRyxJQUFJLENBQUMsRUFBRXpCLEVBQUUsSUFBSSxDQUFDLEVBQUV5QixHQUFHLElBQUksQ0FBQyxFQUFFSSxHQUFHLEVBQUUxQixFQUFFLElBQUksRUFBRSxHQUFHaEUsRUFBRXVFLEVBQUUsSUFBSSxFQUFFbUIsR0FBRyxFQUFFMUYsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUVFLEVBQUUsRUFBRXhGLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRXNCLEdBQUcsR0FBRyxFQUFFLEVBQUV6QixFQUFFLEdBQUcsRUFBRSxFQUFFeUIsR0FBRyxHQUFHLEVBQUUsRUFBRXJGLEVBQUUsRUFBRUQsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUVHLEVBQUUsRUFBRXpGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFQyxFQUFFLEVBQUV2RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVzQixHQUFHLEdBQUcsRUFBRSxFQUFFekIsRUFBRSxHQUFHLEVBQUUsRUFBRXlCLEdBQUcsR0FBRyxFQUFFLEVBQUVLLEVBQUUsRUFBRTNGLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxHQUFHLEVBQUUsRUFBRUgsRUFBRSxHQUFHLEVBQUUsRUFBRXlCLEdBQUcsR0FBRyxFQUFFLEVBQUUxQixFQUFFLEVBQUU1RCxFQUFFLElBQUksQ0FBQyxFQUFFc0YsR0FBRyxJQUFJLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsSUFBSSxDQUFDLEVBQUVILEVBQUUsSUFBSSxDQUFDLEVBQUV5QixHQUFHLElBQUksQ0FBQyxHQUFHdEYsRUFBRXVFLEVBQUUsSUFBSSxFQUFFbUIsR0FBRyxFQUFFMUYsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsQ0FBQyxFQUFFSCxFQUFFLEdBQUcsQ0FBQyxFQUFFMkIsRUFBRSxFQUFFeEYsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFSCxFQUFFLEdBQUcsRUFBRSxFQUFFeUIsR0FBRyxHQUFHLEVBQUUsRUFBRXJGLEVBQUUsRUFBRUQsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUVHLEVBQUUsRUFBRXpGLEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFQyxFQUFFLEVBQUV2RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVILEVBQUUsR0FBRyxFQUFFLEVBQUVELEVBQUUsRUFBRTVELEVBQUUsSUFBSSxDQUFDLEVBQUVzRixHQUFHLElBQUksQ0FBQyxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRUEsRUFBRSxJQUFJLEVBQUUsRUFBRUgsRUFBRSxJQUFJLENBQUMsRUFBRXlCLEdBQUcsSUFBSSxDQUFDLEVBQUVLLEVBQUUsRUFBRTNGLEVBQUUsSUFBSSxDQUFDLEdBQUdBLEVBQUV1RSxFQUFFLElBQUksRUFBRW1CLEdBQUcsRUFBRTFGLEVBQUUsR0FBRyxDQUFDLEVBQUV3RixFQUFFLEVBQUV4RixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxDQUFDLEVBQUVzQixHQUFHLEdBQUcsQ0FBQyxFQUFFekIsRUFBRSxHQUFHLEVBQUUsRUFBRXlCLEdBQUcsR0FBRyxFQUFFLEVBQUVyRixFQUFFLEVBQUVELEVBQUUsR0FBRyxDQUFDLEVBQUVzRixHQUFHLEdBQUcsQ0FBQyxFQUFFRyxFQUFFLEVBQUV6RixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUUwQixFQUFFLEVBQUV2RixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRUssRUFBRSxFQUFFM0YsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUUxQixFQUFFLEVBQUU1RCxFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxJQUFJLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVzQixHQUFHLEdBQUcsRUFBRSxFQUFFekIsRUFBRSxHQUFHLEVBQUUsRUFBRXlCLEdBQUcsR0FBRyxFQUFFLEdBQUd0RixFQUFFdUUsRUFBRSxJQUFJLEVBQUVtQixHQUFHLEVBQUUxRixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXpCLEVBQUUsR0FBRyxDQUFDLEVBQUV5QixHQUFHLEdBQUcsQ0FBQyxFQUFFRSxFQUFFLEVBQUV4RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxFQUFFLEVBQUVILEVBQUUsR0FBRyxFQUFFLEVBQUV5QixHQUFHLEdBQUcsRUFBRSxFQUFFRyxFQUFFLEVBQUV6RixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVzQixHQUFHLEdBQUcsRUFBRSxFQUFFekIsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHLENBQUMsRUFBRUQsRUFBRSxFQUFFNUQsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFc0IsR0FBRyxHQUFHLEVBQUUsRUFBRXpCLEVBQUUsSUFBSSxDQUFDLEVBQUV5QixHQUFHLElBQUksQ0FBQyxFQUFFSSxHQUFHLEVBQUUxRixFQUFFLElBQUksRUFBRSxFQUFFc0YsR0FBRyxJQUFJLEVBQUUsRUFBRXRCLEVBQUUsSUFBSSxFQUFFLEVBQUVILEVBQUUsSUFBSSxFQUFFLEdBQUc3RCxFQUFFdUUsRUFBRSxJQUFJLEVBQUVtQixHQUFHLEVBQUUxRixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRUUsRUFBRSxFQUFFeEYsRUFBRSxHQUFHLEVBQUUsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFSCxFQUFFLEdBQUcsQ0FBQyxFQUFFeUIsR0FBRyxHQUFHLENBQUMsRUFBRUcsRUFBRSxFQUFFekYsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFc0IsR0FBRyxHQUFHLEVBQUUsRUFBRXpCLEVBQUUsR0FBRyxDQUFDLEVBQUV5QixHQUFHLEdBQUcsQ0FBQyxFQUFFMUIsRUFBRSxFQUFFNUQsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLElBQUksQ0FBQyxFQUFFSCxFQUFFLElBQUksQ0FBQyxFQUFFeUIsR0FBRyxJQUFJLENBQUMsRUFBRUksR0FBRyxFQUFFMUIsRUFBRSxJQUFJLEVBQUUsRUFBRXNCLEdBQUcsSUFBSSxFQUFFLEdBQUd0RixFQUFFdUUsRUFBRSxJQUFJLEVBQUVtQixHQUFHLEVBQUUxRixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRUUsRUFBRSxFQUFFeEYsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxFQUFFLEVBQUV0QixFQUFFLEdBQUcsQ0FBQyxFQUFFc0IsR0FBRyxHQUFHLENBQUMsRUFBRXpCLEVBQUUsR0FBRyxFQUFFLEVBQUV5QixHQUFHLEdBQUcsRUFBRSxFQUFFRyxFQUFFLEVBQUV6RixFQUFFLEdBQUcsQ0FBQyxFQUFFc0YsR0FBRyxHQUFHLENBQUMsRUFBRXRCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUV5QixHQUFHLEdBQUcsQ0FBQyxFQUFFMUIsRUFBRSxFQUFFNUQsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdBQUcsSUFBSSxDQUFDLEVBQUV0QixFQUFFLElBQUksQ0FBQyxFQUFFc0IsR0FBRyxJQUFJLENBQUMsRUFBRXpCLEVBQUUsSUFBSSxDQUFDLEVBQUV5QixHQUFHLElBQUksQ0FBQyxHQUFHdEYsRUFBRXVFLEVBQUUsSUFBSSxFQUFFbUIsR0FBRyxFQUFFMUYsRUFBRSxHQUFHLENBQUMsRUFBRXdGLEVBQUUsRUFBRXhGLEVBQUUsR0FBRyxFQUFFLEVBQUVzRixHQUFHLEdBQUcsRUFBRSxFQUFFdEIsRUFBRSxHQUFHLEVBQUUsRUFBRXNCLEdBQUcsR0FBRyxFQUFFLEVBQUV6QixFQUFFLEdBQUcsRUFBRSxFQUFFeUIsR0FBRyxHQUFHLEVBQUUsRUFBRUcsRUFBRSxFQUFFekYsRUFBRSxHQUFHLENBQUMsRUFBRXNGLEdBQUcsR0FBRyxDQUFDLEVBQUV0QixFQUFFLEdBQUcsQ0FBQyxFQUFFc0IsR0FBRyxHQUFHLENBQUMsRUFBRXpCLEVBQUUsR0FBRyxDQUFDLEVBQUV5QixHQUFHLEdBQUcsQ0FBQyxFQUFFMUIsRUFBRSxFQUFFNUQsRUFBRSxJQUFJLENBQUMsRUFBRXNGLEdB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QUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7O0FBQUE7QUFsYkYsSUFvYkdrRCxJQUFJLENBQ0wsS0FDQSxLQUNBLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsR0FBQTtBQTliRixJQStiR0MsSUFBSSxDQUNMLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsS0FDQSxHQUFBO0FBM2NGLElBNGNHQyxJQUFJLENBQ0wsS0FDQSxLQUNBLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsR0FBQTtBQXRkRixJQXVkR0MsSUFBSSxDQUNMLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsS0FDQSxLQUNBLEtBQ0EsS0FDQSxHQUFBO0FBbmVG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QUNQO0FBeHRCQSxJQXd0Qkd3SCxLQUFLO0VBQ05wTixtQkFBbUJDO0FBQ3JCO0FBMXRCQSxJQTB0QkdvTixLQUFxQnpMLHVCQUFPMEcsT0FBdUIxRyx1QkFBT0MsZUFBZTtFQUMxRTBHLFdBQVc7RUFDWHVFLFNBQVNNO0VBQ1RwTixtQkFBbUJDO0FBQ3JCLEdBQUd1SSxPQUFPQyxhQUFhO0VBQUVwRyxPQUFPO0FBQVMsQ0FBQyxDQUFDO0FBOXRCM0MsSUE4dEI4Q2lMLEtBQUs7RUFDakQsR0FBR2pGO0VBQ0gsR0FBR3NDO0VBQ0gsR0FBR2tDO0VBQ0gsR0FBR1E7QUFDTDsiLAogICJuYW1lcyI6IFsiQ2hpbmVzZURheXNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJmaW5kV29ya2RheSIsICJYIiwgImdldERheURldGFpbCIsICJKIiwgImdldEhvbGlkYXlzSW5SYW5nZSIsICJLIiwgImdldEx1bmFyRGF0ZSIsICJZIiwgImdldEx1bmFyRGF0ZXNJblJhbmdlIiwgIkkiLCAiZ2V0THVuYXJGZXN0aXZhbHMiLCAiVSIsICJnZXRMdW5hclllYXJzIiwgIlIiLCAiZ2V0U29sYXJEYXRlRnJvbUx1bmFyIiwgImoiLCAiZ2V0U29sYXJUZXJtRGF0ZSIsICJGIiwgImdldFNvbGFyVGVybXMiLCAiYXQiLCAiZ2V0U29sYXJUZXJtc0luUmFuZ2UiLCAiRSIsICJnZXRXb3JrZGF5c0luUmFuZ2UiLCAiUSIsICJnZXRZZWFyTGVhcE1vbnRoIiwgIkMiLCAiaXNIb2xpZGF5IiwgIk8iLCAiaXNJbkxpZXUiLCAiRyIsICJpc1dvcmtkYXkiLCAiRCIsICJtb250aERheXMiLCAiZyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAicSIsICJPYmplY3QiLCAiZGVmaW5lUHJvcGVydHkiLCAiUCIsICJyIiwgInQiLCAiZSIsICJlbnVtZXJhYmxlIiwgImNvbmZpZ3VyYWJsZSIsICJ3cml0YWJsZSIsICJ2YWx1ZSIsICJjIiwgImgiLCAiaDIiLCAiY29uc3RydWN0b3IiLCAiX2RhdGUiLCAiRGF0ZSIsICJ0b0RhdGUiLCAibWF0Y2giLCAicGFyc2VJbnQiLCAiaXNOYU4iLCAiZ2V0VGltZSIsICJyZXBsYWNlIiwgImlzVmFsaWQiLCAiZGlmZiIsICJhIiwgImdldEZ1bGxZZWFyIiwgImdldE1vbnRoIiwgIk1hdGgiLCAiZmxvb3IiLCAiVVRDIiwgImdldERhdGUiLCAic3RhcnRPZiIsICJzZXRNb250aCIsICJzZXREYXRlIiwgInNldEhvdXJzIiwgImVuZE9mIiwgImFkZCIsICJzZXRGdWxsWWVhciIsICJzdWJ0cmFjdCIsICJmb3JtYXQiLCAiWVlZWSIsICJNTSIsICJ0b1N0cmluZyIsICJwYWRTdGFydCIsICJERCIsICJISCIsICJnZXRIb3VycyIsICJtbSIsICJnZXRNaW51dGVzIiwgInNzIiwgImdldFNlY29uZHMiLCAiZGRkZCIsICJkYXlzT2ZXZWVrIiwgImdldERheSIsICJ5ZWFyIiwgIm1vbnRoIiwgImRhdGUiLCAiZGF5IiwgIm8iLCAiaXNCZWZvcmUiLCAiaXNBZnRlciIsICJpc1NhbWUiLCAiaXNCZXR3ZWVuIiwgIm4iLCAiaSIsICJrIiwgIl8iLCAidyIsICJNIiwgIkFycmF5IiwgImZyb20iLCAibGVuZ3RoIiwgIlciLCAieiIsICJ5IiwgImRheURldGFpbHMiLCAiZ2V0SG9saWRheURheXMiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgImVudHJpZXMiLCAibWFyayIsICJob2xpZGF5IiwgInNhdmUiLCAiRXJyb3IiLCAiZGF5VHlwZSIsICJjb25jYXQiLCAiaG9saWRheXMiLCAid29ya2RheXMiLCAiaW5MaWV1RGF5cyIsICJ0byIsICJkIiwgInMiLCAibCIsICJueSIsICJtIiwgIlYiLCAicCIsICJMIiwgIloiLCAiZiIsICJ3b3JrIiwgIm5hbWUiLCAiZmlsdGVyIiwgIm1hcCIsICJhYnMiLCAidHQiLCAiZnJlZXplIiwgIl9fcHJvdG9fXyIsICJTeW1ib2wiLCAidG9TdHJpbmdUYWciLCAiZXQiLCAidGhlX2JlZ2lubmluZ19vZl9zcHJpbmciLCAicmFpbl93YXRlciIsICJ0aGVfd2FraW5nX29mX2luc2VjdHMiLCAidGhlX3NwcmluZ19lcXVpbm94IiwgInB1cmVfYnJpZ2h0bmVzcyIsICJncmFpbl9yYWluIiwgInRoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyIiwgImxlc3Nlcl9mdWxsbmVzc19vZl9ncmFpbiIsICJncmFpbl9pbl9iZWFyZCIsICJ0aGVfc3VtbWVyX3NvbHN0aWNlIiwgImxlc3Nlcl9oZWF0IiwgImdyZWF0ZXJfaGVhdCIsICJ0aGVfYmVnaW5uaW5nX29mX2F1dHVtbiIsICJ0aGVfZW5kX29mX2hlYXQiLCAid2hpdGVfZGV3IiwgInRoZV9hdXR1bW5fZXF1aW5veCIsICJjb2RlX2RldyIsICJmcm9zdF9kZXNjZW50IiwgInRoZV9iZWdpbm5pbmdfb2Zfd2ludGVyIiwgImxlc3Nlcl9zbm93IiwgImdyZWF0ZXJfc25vdyIsICJ0aGVfd2ludGVyX3NvbHN0aWNlIiwgImxlc3Nlcl9jb2xkIiwgImdyZWF0ZXJfY29sZCIsICJUIiwgInJ0IiwgIiQiLCAiaW5jbHVkZXMiLCAiZm9yRWFjaCIsICJwdXNoIiwgInRlcm0iLCAiaW5kZXgiLCAib3QiLCAidiIsICJBIiwgIkgiLCAiQiIsICJudCIsICJ4IiwgIk4iLCAiYiIsICJTIiwgInN0IiwgIml0IiwgImR0IiwgImx1bmFyWWVhciIsICJsdW5hclllYXJDTiIsICJzcGxpdCIsICJOdW1iZXIiLCAiam9pbiIsICJsZWFwTW9udGgiLCAibGVhcE1vbnRoQ04iLCAiZGF5cyIsICJmaWxsIiwgImx1bmFyTW9uIiwgImx1bmFyRGF5IiwgImlzTGVhcCIsICJ6b2RpYWMiLCAieWVhckN5bCIsICJtb25DeWwiLCAiZGF5Q3lsIiwgImx1bmFyTW9uQ04iLCAibHVuYXJEYXlDTiIsICJ1IiwgImxlYXBNb250aERhdGUiLCAibHQiLCAiaHQiLCAiZGVmYXVsdCIsICJfdCIsICJ5dCIsICJmaW5kIiwgInR5cGUiLCAicmVkdWNlIiwgInV0IiwgInd0IiwgImZ0Il0KfQo=
