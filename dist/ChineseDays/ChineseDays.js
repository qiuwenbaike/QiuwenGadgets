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
  findWorkday: () => P,
  getDayDetail: () => I,
  getHolidaysInRange: () => U,
  getLunarDate: () => F,
  getLunarDatesInRange: () => H,
  getSolarDateFromLunar: () => R,
  getSolarTermDate: () => S,
  getSolarTerms: () => G,
  getSolarTermsInRange: () => J,
  getWorkdaysInRange: () => W,
  isHoliday: () => T,
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
var c = (r, t, e) => (B(r, typeof t != "symbol" ? t + "" : t, e), e);
var l = class l2 {
  constructor(t) {
    c(this, "_date");
    t instanceof l2 ? this._date = new Date(t.toDate()) : t instanceof Date ? this._date = new Date(t) : typeof t == "string" || typeof t == "number" ? (this._date = new Date(t), typeof t == "string" && isNaN(this._date.getTime()) && (this._date = new Date(t.replace(/-/g, "/")))) : this._date = /* @__PURE__ */ new Date();
  }
  toDate() {
    return this._date;
  }
  isValid() {
    return !isNaN(this._date.getTime());
  }
  diff(t, e = "day") {
    const o = new l2(t).toDate(), n = this._date.getTime() - o.getTime();
    switch (e) {
      case "year":
        return this._date.getFullYear() - o.getFullYear();
      case "month":
        return (this._date.getFullYear() - o.getFullYear()) * 12 + (this._date.getMonth() - o.getMonth());
      case "day":
      default:
        return Math.floor(n / (1e3 * 60 * 60 * 24));
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
    const o = new Date(this._date);
    switch (e) {
      case "year":
        o.setFullYear(o.getFullYear() + t);
        break;
      case "month":
        o.setMonth(o.getMonth() + t);
        break;
      case "day":
        o.setDate(o.getDate() + t);
        break;
    }
    return new l2(o);
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
    return t.replace(/YYYY|MM|DD|HH|mm|ss|dddd/g, (o) => e[o].toString());
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
      const e = this._date.getDay(), o = t - e, n = new Date(this._date);
      return n.setDate(this._date.getDate() + o), new l2(n);
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
    const o = new l2(t).toDate();
    switch (e) {
      case "year":
        return this._date.getFullYear() === o.getFullYear();
      case "month":
        return this._date.getFullYear() === o.getFullYear() && this._date.getMonth() === o.getMonth();
      case "day":
      default:
        return this._date.getFullYear() === o.getFullYear() && this._date.getMonth() === o.getMonth() && this._date.getDate() === o.getDate();
    }
  }
  isBetween(t, e, o) {
    const n = new l2(t).startOf(o).toDate(), d = new l2(e).endOf(o).toDate(), a = this.toDate();
    return a >= n && a <= d;
  }
};
c(l, "daysOfWeek", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
var M = l;
var _ = (r) => new M(r);
var w = (r) => _(r).startOf("day");
var D = (r, t) => {
  r = w(r), t = w(t);
  const e = t.diff(r, "day");
  return Array.from({
    length: e + 1
  }, (o, n) => r.add(n, "day"));
};
var A = class {
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
  mark(t) {
    return this.dayDetails.holiday = t, this;
  }
  save(t, e, o) {
    if (!this.dayDetails.year) throw new Error("should set year before saving holiday");
    if (!this.dayDetails.holiday) throw new Error("should set holiday before saving holiday");
    this.dayDetails.dayType = o;
    const n = _("".concat(this.dayDetails.year, "-").concat(t, "-").concat(e));
    return o === 2 ? this.holidays[n.format("YYYY-MM-DD")] = this.dayDetails.holiday : o === 1 ? this.workdays[n.format("YYYY-MM-DD")] = this.dayDetails.holiday : o === 3 && (this.inLieuDays[n.format("YYYY-MM-DD")] = this.dayDetails.holiday), this.dayDetails.month = t, this.dayDetails.day = e, this;
  }
  to(t, e) {
    if (!this.dayDetails.year || !this.dayDetails.month || !this.dayDetails.day) throw new Error("should set year/month/day before saving holiday range");
    const o = _("".concat(this.dayDetails.year, "-").concat(this.dayDetails.month, "-").concat(this.dayDetails.day)), n = _("".concat(this.dayDetails.year, "-").concat(t, "-").concat(e));
    if (n.isBefore(o) || n.isSame(o)) throw new Error("end date should be after start date");
    const d = n.diff(o, "day");
    for (let a = 1; a <= d; a++) {
      const i = o.add(a, "day");
      this.dayDetails.dayType === 2 ? this.holidays[i.format("YYYY-MM-DD")] = this.dayDetails.holiday : this.dayDetails.dayType === 1 ? this.workdays[i.format("YYYY-MM-DD")] = this.dayDetails.holiday : this.dayDetails.dayType === 3 && (this.inLieuDays[i.format("YYYY-MM-DD")] = this.dayDetails.holiday);
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
      "New Year's Day,元旦,1"
      /* NY */
    );
  }
  /** Spring Festival 春节 */
  s() {
    return this.mark(
      "Spring Festival,春节,3"
      /* S */
    );
  }
  /** Tomb-sweeping Day 清明 */
  t() {
    return this.mark(
      "Tomb-sweeping Day,清明,1"
      /* T */
    );
  }
  /** Labour Day 五一 */
  l() {
    return this.mark(
      "Labour Day,劳动节,1"
      /* L */
    );
  }
  /** Dragon Boat Festival 端午 */
  d() {
    return this.mark(
      "Dragon Boat Festival,端午,1"
      /* D */
    );
  }
  /** National Day 国庆节 */
  n() {
    return this.mark(
      "National Day,国庆节,3"
      /* N */
    );
  }
  /** Mid-autumn Festival 中秋 */
  m() {
    return this.mark(
      "Mid-autumn Festival,中秋,1"
      /* M */
    );
  }
  /** Anti-Fascist 70th Day 中国人民抗日战争暨世界反法西斯战争胜利70周年纪念日 */
  a() {
    return this.mark(
      "Anti-Fascist 70th Day,中国人民抗日战争暨世界反法西斯战争胜利70周年纪念日,1"
      /* A */
    );
  }
};
var C = () => {
  const r = new A();
  return r.y(2024).ny().r(1, 1).s().r(2, 10).to(2, 17).w(2, 4).w(2, 18).i(2, 15).to(2, 16).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(5, 1).to(5, 5).w(4, 28).w(5, 11).i(5, 2).to(5, 3).d().r(6, 10).m().r(9, 15).to(9, 17).w(9, 14).i(9, 16).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2023).ny().r(1, 1).to(1, 2).s().r(1, 21).to(1, 27).w(1, 28).to(1, 29).i(1, 26).to(1, 27).t().r(4, 5).l().r(4, 29).to(5, 3).w(4, 23).w(5, 6).i(5, 2).to(5, 3).d().r(6, 22).to(6, 24).w(6, 25).i(6, 23).m().r(9, 29).n().r(9, 30).to(10, 6).w(10, 7).to(10, 8).i(10, 5).to(10, 6), r.y(2022).ny().r(1, 1).to(1, 3).s().r(1, 31).to(2, 6).w(1, 29).w(1, 30).i(2, 3).to(2, 4).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 4).w(4, 24).w(5, 7).i(5, 3).to(5, 4).d().r(6, 3).to(6, 5).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).w(10, 9).i(10, 6).to(10, 7).ny().r(12, 31), r.y(2021).ny().r(1, 1).to(1, 3).s().r(2, 11).to(2, 17).w(2, 7).w(2, 20).i(2, 16).to(2, 17).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 5).w(4, 25).w(5, 8).i(5, 4).to(5, 5).d().r(6, 12).to(6, 14).m().r(9, 19).to(9, 21).w(9, 18).i(9, 20).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), r.y(2020).ny().r(1, 1).s().r(1, 24).to(2, 2).w(1, 19).i(1, 29).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 26).w(5, 9).i(5, 4).to(5, 5).d().r(6, 25).to(6, 27).w(6, 28).i(6, 26).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8), r.y(2019).ny().r(1, 1).s().r(2, 4).to(2, 10).w(2, 2).to(2, 3).i(2, 4).i(2, 8).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 4).w(4, 28).w(5, 5).i(5, 2).i(5, 3).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2018).ny().r(1, 1).s().r(2, 15).to(2, 21).w(2, 11).w(2, 24).i(2, 19).to(2, 21).t().r(4, 5).to(4, 7).w(4, 8).i(4, 6).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 18).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).m().r(9, 24).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), r.y(2017).ny().r(1, 1).to(1, 2).s().r(1, 27).to(2, 2).w(1, 22).w(2, 4).i(2, 1).to(2, 2).t().r(4, 2).to(4, 4).w(4, 1).i(4, 3).l().r(5, 1).d().r(5, 28).to(5, 30).w(5, 27).i(5, 29).n().r(10, 1).to(10, 8).w(9, 30).i(10, 6).m().r(10, 4), r.y(2016).ny().r(1, 1).s().r(2, 7).to(2, 13).w(2, 6).w(2, 14).i(2, 11).to(2, 12).t().r(4, 4).l().r(5, 1).to(5, 2).d().r(6, 9).to(6, 11).w(6, 12).i(6, 10).m().r(9, 15).to(9, 17).w(9, 18).i(9, 16).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), r.y(2015).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(2, 18).to(2, 24).w(2, 15).w(2, 28).i(2, 23).to(2, 24).t().r(4, 5).to(4, 6).l().r(5, 1).d().r(6, 20).r(6, 22).m().r(9, 27).n().r(10, 1).to(10, 7).w(10, 10).i(10, 7).a().r(9, 3).to(9, 4).w(9, 6).i(9, 4), r.y(2014).ny().r(1, 1).s().r(1, 31).to(2, 6).w(1, 26).w(2, 8).i(2, 5).to(2, 6).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 2).m().r(9, 8).n().r(10, 1).to(10, 7).w(9, 28).w(10, 11).i(10, 6).to(10, 7), r.y(2013).ny().r(1, 1).to(1, 3).w(1, 5).to(1, 6).i(1, 2).to(1, 3).s().r(2, 9).to(2, 15).w(2, 16).to(2, 17).i(2, 14).to(2, 15).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(4, 29).to(5, 1).w(4, 27).to(4, 28).i(4, 29).to(4, 30).d().r(6, 10).to(6, 12).w(6, 8).to(6, 9).i(6, 10).to(6, 11).m().r(9, 19).to(9, 21).w(9, 22).i(9, 20).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2012).ny().r(1, 1).to(1, 3).i(1, 3).s().r(1, 22).to(1, 28).w(1, 21).w(1, 29).i(1, 26).to(1, 27).t().r(4, 2).to(4, 4).w(3, 31).w(4, 1).i(4, 2).to(4, 3).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 22).r(6, 24).m().r(9, 30).n().r(10, 1).to(10, 7).w(9, 29).i(10, 5), r.y(2011).ny().r(1, 1).to(1, 3).s().r(2, 2).to(2, 8).w(1, 30).w(2, 12).i(2, 7).to(2, 8).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 2).d().r(6, 4).r(6, 6).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7).ny().w(12, 31), r.y(2010).ny().r(1, 1).to(1, 3).s().r(2, 13).to(2, 19).w(2, 20).to(2, 21).i(2, 18).to(2, 19).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 3).d().r(6, 14).to(6, 16).w(6, 12).to(6, 13).i(6, 14).to(6, 15).m().r(9, 22).to(9, 24).w(9, 19).w(9, 25).i(9, 23).to(9, 24).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), r.y(2009).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(1, 25).to(1, 31).w(1, 24).w(2, 1).i(1, 29).to(1, 30).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).d().r(5, 28).to(5, 30).w(5, 31).i(5, 29).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8).m().r(10, 3), r.y(2008).ny().r(1, 1).s().r(2, 6).to(2, 12).w(2, 2).to(2, 3).i(2, 11).to(2, 12).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(9, 29).to(10, 5).w(9, 27).to(9, 28).i(9, 29).to(9, 30), r.y(2007).ny().r(1, 1).to(1, 3).i(1, 2).to(1, 3).s().r(2, 18).to(2, 24).w(2, 17).w(2, 25).i(2, 22).to(2, 23).l().r(5, 1).to(5, 7).w(4, 28).to(4, 29).i(5, 4).i(5, 7).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), r.y(2006).ny().r(1, 1).to(1, 3).s().r(1, 29).to(2, 4).w(1, 28).w(2, 5).i(2, 2).to(2, 3).l().r(5, 1).to(5, 7).w(4, 29).to(4, 30).i(5, 4).to(5, 5).n().r(10, 1).to(10, 7).w(9, 30).w(10, 8).i(10, 5).to(10, 6).ny().w(12, 30).to(12, 31), r.y(2005).ny().r(1, 1).to(1, 3).s().r(2, 9).to(2, 15).w(2, 5).to(2, 6).i(2, 14).to(2, 15).l().r(5, 1).to(5, 7).w(4, 30).w(5, 8).i(5, 5).to(5, 6).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), r.y(2004).ny().r(1, 1).s().r(1, 22).to(1, 28).w(1, 17).to(1, 18).i(1, 27).to(1, 28).l().r(5, 1).to(5, 7).w(5, 8).to(5, 9).i(5, 6).to(5, 7).n().r(10, 1).to(10, 7).w(10, 9).to(10, 10).i(10, 6).to(10, 7), {
    holidays: r.holidays,
    workdays: r.workdays,
    inLieuDays: r.inLieuDays
  };
};
var {
  holidays: g,
  workdays: p,
  inLieuDays: j
} = C();
var y = (...r) => {
  if (r.length !== 1) return r.map((e) => y(e));
  const t = w(r[0]);
  if (!t.isValid()) throw new Error("unsupported type ".concat(typeof t, ", expected type is Date or Dayjs"));
  return t;
};
var T = (r) => !f(r);
var f = (r) => {
  const t = y(r), e = t.day(), o = t.format("YYYY-MM-DD");
  return !!(p[o] || e >= 1 && e <= 5 && !g[o]);
};
var q = (r) => (r = y(r), !!j[r.format("YYYY-MM-DD")]);
var I = (r) => {
  r = y(r);
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
var U = (r, t, e = true) => (r = y(r), t = y(t), e ? D(r, t).filter(T).map((o) => o.format("YYYY-MM-DD")) : D(r, t).filter((o) => g[o.format("YYYY-MM-DD")]).map((o) => o.format("YYYY-MM-DD")));
var W = (r, t, e = true) => (r = y(r), t = y(t), e ? D(r, t).filter(f).map((o) => o.format("YYYY-MM-DD")) : D(r, t).filter((o) => f(o) && o.day() >= 1 && o.day() <= 5).map((o) => o.format("YYYY-MM-DD")));
var P = (r = 0, t = _()) => {
  if (t = w(t), r === 0) {
    if (f(t)) return t.format("YYYY-MM-DD");
    r = 1;
  }
  const e = r > 0 ? 1 : -1;
  let o = Math.abs(r);
  for (; o > 0; ) t = t.add(e, "day"), f(t) && o--;
  return t.format("YYYY-MM-DD");
};
var z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  findWorkday: P,
  getDayDetail: I,
  getHolidaysInRange: U,
  getWorkdaysInRange: W,
  isHoliday: T,
  isInLieu: q,
  isWorkday: f
}, Symbol.toStringTag, {
  value: "Module"
}));
var V = {
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
var N = {
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
var Z = {
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
var S = (r, t, e) => {
  const o = r >= 2e3 ? 21 : 20, n = r % 100, d = 0.2422, a = V[e][o === 21 ? 1 : 0];
  let i = Math.floor(n / 4);
  ["lesser_cold", "greater_cold", "the_beginning_of_spring", "rain_water"].includes(e) && (i = Math.floor((n - 1) / 4));
  let s = Math.floor(n * d + a) - i;
  const u = Z["".concat(r, "_").concat(e)];
  return u && (s += u), _("".concat(r, "-").concat(t, "-").concat(s)).format("YYYY-MM-DD");
};
var G = (r, t) => {
  const e = [];
  let o = w(r);
  const n = w(t || r);
  for (; o.isBefore(n) || o.isSame(n); ) {
    const d = o.year(), a = o.month() + 1;
    N[a].forEach((i) => {
      const s = _(S(d, a, i));
      (s != null && s.isBefore(n) || s != null && s.isSame(n)) && (s != null && s.isAfter(o) || s != null && s.isSame(o)) && e.push({
        date: s.format("YYYY-MM-DD"),
        term: i,
        name: E[i],
        index: 1
      });
    }), a === 12 ? o = o.add(1, "year").startOf("year") : o = o.add(1, "month").startOf("month");
  }
  return e;
};
var J = (r, t) => {
  let e = w(r).subtract(1, "month");
  const o = w(t || r).add(1, "month"), n = [];
  for (; e.isBefore(o) || e.isSame(o); ) {
    const a = e.year(), i = e.month() + 1;
    N[i].forEach((s) => {
      const u = _(S(a, i, s));
      n.push({
        term: s,
        date: u
      });
    }), e.month() === 11 ? e = e.add(1, "year").startOf("year") : e = e.add(1, "month").startOf("month");
  }
  const d = [];
  return n.forEach((a, i) => {
    for (let s = a.date; n[i + 1] && s.isBefore(n[i + 1].date); s = s.add(1, "day")) d.push({
      day: s,
      term: a.term,
      name: E[a.term],
      index: s.diff(a.date, "day") + 1
    });
  }), t || (t = r), d.filter((a) => a.day.isBetween(r, t, "day")).map((a) => ({
    date: a.day.format("YYYY-MM-DD"),
    term: a.term,
    name: a.name,
    index: a.index
  }));
};
var K = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getSolarTermDate: S,
  getSolarTerms: G,
  getSolarTermsInRange: J
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
var Q = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"];
var X = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
var tt = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
var et = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
var v = (r) => {
  let t = 348;
  for (let e = 32768; e > 8; e >>= 1) t += m[r - 1900] & e ? 1 : 0;
  return t + O(r);
};
var k = (r) => m[r - 1900] & 15;
var O = (r) => k(r) ? m[r - 1900] & 65536 ? 30 : 29 : 0;
var Y = (r) => X[r % 10] + tt[r % 12];
var b = (r, t) => m[r - 1900] & 65536 >> t ? 30 : 29;
var rt = (r) => et[(r - 4) % 12];
var ot = (r) => {
  const t = ["初", "十", "廿", "三十"];
  if (r === 10) return "初十";
  if (r === 20) return "二十";
  if (r === 30) return "三十";
  const e = Math.floor(r / 10), o = r % 10;
  return t[e] + (o ? $[o] : "");
};
var F = (r) => {
  const t = new Array(7).fill(0);
  let e = 0, o = 0;
  const n = _(new Date(1900, 0, 31)), d = _(r);
  let a = d.diff(n, "day");
  t[5] = a + 40, t[4] = 14;
  let i = 1900;
  for (; i < 2100 && a > 0; i++) e = v(i), a -= e, t[4] += 12;
  a < 0 && (a += e, i--, t[4] -= 12), t[0] = i, t[3] = i - 1864, o = k(i), t[6] = 0;
  for (let s = 1; s < 13 && a > 0; s++) o > 0 && s === o + 1 && t[6] === 0 ? (--s, t[6] = 1, e = O(i)) : e = b(i, s), t[6] === 1 && s === o + 1 && (t[6] = 0), a -= e, t[6] === 0 && t[4]++, t[1] = s;
  return a === 0 && o > 0 && t[6] === 1 ? t[6] = 0 : a < 0 && (a += e, t[1]--, t[4]--), t[2] = a + 1, {
    date: d.format("YYYY-MM-DD"),
    // 公历日期
    lunarYear: t[0],
    // 农历年份
    lunarMon: t[1] + 1,
    // 农历月份
    lunarDay: t[2],
    // 农历日期
    isLeap: !!t[6],
    // 是否闰月
    zodiac: rt(t[0]),
    // 生肖
    yearCyl: Y(t[3]),
    // 年柱
    monCyl: Y(t[4]),
    // 月柱
    dayCyl: Y(t[5]),
    // 日柱
    lunarYearCN: "".concat(t[0].toString().split("").map((s) => $[Number(s)]).join("")),
    // 农历年份中文表示
    lunarMonCN: "".concat(Q[t[1]], "月"),
    // 农历月份中文表示
    lunarDayCN: ot(t[2])
    // 农历日期中文表示
  };
};
var H = (r, t) => {
  const e = _(r), o = _(t), n = [];
  for (let d = e; d.isBefore(o) || d.isSame(o, "day"); d = d.add(1, "day")) n.push(F(d));
  return n;
};
var R = (r) => {
  const t = _(r), e = t.year(), o = t.month() + 1, n = t.date();
  let d = 0;
  for (let h = 1900; h < e; h++) d += v(h);
  let a = k(e);
  for (let h = 1; h < o; h++) d += b(e, h), h === a && (d += O(e));
  d += n - 1;
  const i = _(new Date(1900, 0, 31)), s = i.add(d, "day").format("YYYY-MM-DD");
  let u = d, L;
  return a === o && (u += b(e, o), L = i.add(u, "day").format("YYYY-MM-DD")), {
    date: s,
    leapMonthDate: L
  };
};
var at = {
  getLunarDate: F,
  getLunarDatesInRange: H,
  getSolarDateFromLunar: R
};
var nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: at,
  getLunarDate: F,
  getLunarDatesInRange: H,
  getSolarDateFromLunar: R
}, Symbol.toStringTag, {
  value: "Module"
}));
var it = {
  ...z,
  ...K,
  ...nt
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NoaW5lc2VEYXlzL0NoaW5lc2VEYXlzLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jaGluZXNlLWRheXNAMS4zLjEvbm9kZV9tb2R1bGVzL2NoaW5lc2UtZGF5cy9kaXN0L2luZGV4LmVzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tICdjaGluZXNlLWRheXMnO1xuIiwgInZhciB4ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIEIgPSAociwgdCwgZSkgPT4gdCBpbiByID8geChyLCB0LCB7IGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAsIHZhbHVlOiBlIH0pIDogclt0XSA9IGU7XG52YXIgYyA9IChyLCB0LCBlKSA9PiAoQihyLCB0eXBlb2YgdCAhPSBcInN5bWJvbFwiID8gdCArIFwiXCIgOiB0LCBlKSwgZSk7XG5jb25zdCBsID0gY2xhc3MgbCB7XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBjKHRoaXMsIFwiX2RhdGVcIik7XG4gICAgdCBpbnN0YW5jZW9mIGwgPyB0aGlzLl9kYXRlID0gbmV3IERhdGUodC50b0RhdGUoKSkgOiB0IGluc3RhbmNlb2YgRGF0ZSA/IHRoaXMuX2RhdGUgPSBuZXcgRGF0ZSh0KSA6IHR5cGVvZiB0ID09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHQgPT0gXCJudW1iZXJcIiA/ICh0aGlzLl9kYXRlID0gbmV3IERhdGUodCksIHR5cGVvZiB0ID09IFwic3RyaW5nXCIgJiYgaXNOYU4odGhpcy5fZGF0ZS5nZXRUaW1lKCkpICYmICh0aGlzLl9kYXRlID0gbmV3IERhdGUodC5yZXBsYWNlKC8tL2csIFwiL1wiKSkpKSA6IHRoaXMuX2RhdGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKTtcbiAgfVxuICB0b0RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGU7XG4gIH1cbiAgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gIWlzTmFOKHRoaXMuX2RhdGUuZ2V0VGltZSgpKTtcbiAgfVxuICBkaWZmKHQsIGUgPSBcImRheVwiKSB7XG4gICAgY29uc3QgbyA9IG5ldyBsKHQpLnRvRGF0ZSgpLCBuID0gdGhpcy5fZGF0ZS5nZXRUaW1lKCkgLSBvLmdldFRpbWUoKTtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyXCI6XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCkgLSBvLmdldEZ1bGxZZWFyKCk7XG4gICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgcmV0dXJuICh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCkgLSBvLmdldEZ1bGxZZWFyKCkpICogMTIgKyAodGhpcy5fZGF0ZS5nZXRNb250aCgpIC0gby5nZXRNb250aCgpKTtcbiAgICAgIGNhc2UgXCJkYXlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG4gLyAoMWUzICogNjAgKiA2MCAqIDI0KSk7XG4gICAgfVxuICB9XG4gIHN0YXJ0T2YodCkge1xuICAgIGNvbnN0IGUgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyXCI6XG4gICAgICAgIGUuc2V0TW9udGgoMCksIGUuc2V0RGF0ZSgxKSwgZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgZS5zZXREYXRlKDEpLCBlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkYXlcIjpcbiAgICAgICAgZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuZXcgbChlKTtcbiAgfVxuICBlbmRPZih0KSB7XG4gICAgY29uc3QgZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSBcInllYXJcIjpcbiAgICAgICAgZS5zZXRNb250aCgxMSksIGUuc2V0RGF0ZSgzMSksIGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgZS5zZXREYXRlKG5ldyBEYXRlKGUuZ2V0RnVsbFllYXIoKSwgZS5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpKSwgZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkYXlcIjpcbiAgICAgICAgZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBsKGUpO1xuICB9XG4gIGFkZCh0LCBlKSB7XG4gICAgY29uc3QgbyA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBcInllYXJcIjpcbiAgICAgICAgby5zZXRGdWxsWWVhcihvLmdldEZ1bGxZZWFyKCkgKyB0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgby5zZXRNb250aChvLmdldE1vbnRoKCkgKyB0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICAgIG8uc2V0RGF0ZShvLmdldERhdGUoKSArIHQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBsKG8pO1xuICB9XG4gIHN1YnRyYWN0KHQsIGUpIHtcbiAgICByZXR1cm4gdGhpcy5hZGQoLXQsIGUpO1xuICB9XG4gIGZvcm1hdCh0KSB7XG4gICAgY29uc3QgZSA9IHtcbiAgICAgIFlZWVk6IHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIE1NOiAodGhpcy5fZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIiksXG4gICAgICBERDogdGhpcy5fZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIiksXG4gICAgICBISDogdGhpcy5fZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgbW06IHRoaXMuX2RhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgc3M6IHRoaXMuX2RhdGUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgZGRkZDogbC5kYXlzT2ZXZWVrW3RoaXMuX2RhdGUuZ2V0RGF5KCldXG4gICAgfTtcbiAgICByZXR1cm4gdC5yZXBsYWNlKC9ZWVlZfE1NfEREfEhIfG1tfHNzfGRkZGQvZywgKG8pID0+IGVbb10udG9TdHJpbmcoKSk7XG4gIH1cbiAgeWVhcih0KSB7XG4gICAgaWYgKHQgPT09IHZvaWQgMClcbiAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgIHJldHVybiBlLnNldEZ1bGxZZWFyKHQpLCBuZXcgbChlKTtcbiAgfVxuICBtb250aCh0KSB7XG4gICAgaWYgKHQgPT09IHZvaWQgMClcbiAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgIHJldHVybiBlLnNldE1vbnRoKHQpLCBuZXcgbChlKTtcbiAgfVxuICBkYXRlKHQpIHtcbiAgICBpZiAodCA9PT0gdm9pZCAwKVxuICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGUgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICByZXR1cm4gZS5zZXREYXRlKHQpLCBuZXcgbChlKTtcbiAgfVxuICBkYXkodCkge1xuICAgIGlmICh0ID09PSB2b2lkIDApXG4gICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXREYXkoKTtcbiAgICB7XG4gICAgICBjb25zdCBlID0gdGhpcy5fZGF0ZS5nZXREYXkoKSwgbyA9IHQgLSBlLCBuID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgICByZXR1cm4gbi5zZXREYXRlKHRoaXMuX2RhdGUuZ2V0RGF0ZSgpICsgbyksIG5ldyBsKG4pO1xuICAgIH1cbiAgfVxuICBpc0JlZm9yZSh0KSB7XG4gICAgY29uc3QgZSA9IG5ldyBsKHQpLnRvRGF0ZSgpO1xuICAgIHJldHVybiB0aGlzLl9kYXRlLmdldFRpbWUoKSA8IGUuZ2V0VGltZSgpO1xuICB9XG4gIGlzQWZ0ZXIodCkge1xuICAgIGNvbnN0IGUgPSBuZXcgbCh0KS50b0RhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRUaW1lKCkgPiBlLmdldFRpbWUoKTtcbiAgfVxuICBpc1NhbWUodCwgZSA9IFwiZGF5XCIpIHtcbiAgICBjb25zdCBvID0gbmV3IGwodCkudG9EYXRlKCk7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpID09PSBvLmdldEZ1bGxZZWFyKCk7XG4gICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gby5nZXRGdWxsWWVhcigpICYmIHRoaXMuX2RhdGUuZ2V0TW9udGgoKSA9PT0gby5nZXRNb250aCgpO1xuICAgICAgY2FzZSBcImRheVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gby5nZXRGdWxsWWVhcigpICYmIHRoaXMuX2RhdGUuZ2V0TW9udGgoKSA9PT0gby5nZXRNb250aCgpICYmIHRoaXMuX2RhdGUuZ2V0RGF0ZSgpID09PSBvLmdldERhdGUoKTtcbiAgICB9XG4gIH1cbiAgaXNCZXR3ZWVuKHQsIGUsIG8pIHtcbiAgICBjb25zdCBuID0gbmV3IGwodCkuc3RhcnRPZihvKS50b0RhdGUoKSwgZCA9IG5ldyBsKGUpLmVuZE9mKG8pLnRvRGF0ZSgpLCBhID0gdGhpcy50b0RhdGUoKTtcbiAgICByZXR1cm4gYSA+PSBuICYmIGEgPD0gZDtcbiAgfVxufTtcbmMobCwgXCJkYXlzT2ZXZWVrXCIsIFtcbiAgXCJTdW5kYXlcIixcbiAgXCJNb25kYXlcIixcbiAgXCJUdWVzZGF5XCIsXG4gIFwiV2VkbmVzZGF5XCIsXG4gIFwiVGh1cnNkYXlcIixcbiAgXCJGcmlkYXlcIixcbiAgXCJTYXR1cmRheVwiXG5dKTtcbmxldCBNID0gbDtcbmNvbnN0IF8gPSAocikgPT4gbmV3IE0ociksIHcgPSAocikgPT4gXyhyKS5zdGFydE9mKFwiZGF5XCIpLCBEID0gKHIsIHQpID0+IHtcbiAgciA9IHcociksIHQgPSB3KHQpO1xuICBjb25zdCBlID0gdC5kaWZmKHIsIFwiZGF5XCIpO1xuICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogZSArIDEgfSwgKG8sIG4pID0+IHIuYWRkKG4sIFwiZGF5XCIpKTtcbn07XG5jbGFzcyBBIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgYyh0aGlzLCBcImRheURldGFpbHNcIiwge30pO1xuICAgIGModGhpcywgXCJob2xpZGF5c1wiLCB7fSk7XG4gICAgYyh0aGlzLCBcIndvcmtkYXlzXCIsIHt9KTtcbiAgICBjKHRoaXMsIFwiaW5MaWV1RGF5c1wiLCB7fSk7XG4gIH1cbiAgLyoqIHllYXIgYXQgKi9cbiAgeSh0KSB7XG4gICAgcmV0dXJuIHRoaXMuZGF5RGV0YWlscy55ZWFyID0gdCwgdGhpcztcbiAgfVxuICBtYXJrKHQpIHtcbiAgICByZXR1cm4gdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkgPSB0LCB0aGlzO1xuICB9XG4gIHNhdmUodCwgZSwgbykge1xuICAgIGlmICghdGhpcy5kYXlEZXRhaWxzLnllYXIpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzaG91bGQgc2V0IHllYXIgYmVmb3JlIHNhdmluZyBob2xpZGF5XCIpO1xuICAgIGlmICghdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzaG91bGQgc2V0IGhvbGlkYXkgYmVmb3JlIHNhdmluZyBob2xpZGF5XCIpO1xuICAgIHRoaXMuZGF5RGV0YWlscy5kYXlUeXBlID0gbztcbiAgICBjb25zdCBuID0gXyhgJHt0aGlzLmRheURldGFpbHMueWVhcn0tJHt0fS0ke2V9YCk7XG4gICAgcmV0dXJuIG8gPT09IDIgPyB0aGlzLmhvbGlkYXlzW24uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKV0gPSB0aGlzLmRheURldGFpbHMuaG9saWRheSA6IG8gPT09IDEgPyB0aGlzLndvcmtkYXlzW24uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKV0gPSB0aGlzLmRheURldGFpbHMuaG9saWRheSA6IG8gPT09IDMgJiYgKHRoaXMuaW5MaWV1RGF5c1tuLmZvcm1hdChcIllZWVktTU0tRERcIildID0gdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkpLCB0aGlzLmRheURldGFpbHMubW9udGggPSB0LCB0aGlzLmRheURldGFpbHMuZGF5ID0gZSwgdGhpcztcbiAgfVxuICB0byh0LCBlKSB7XG4gICAgaWYgKCF0aGlzLmRheURldGFpbHMueWVhciB8fCAhdGhpcy5kYXlEZXRhaWxzLm1vbnRoIHx8ICF0aGlzLmRheURldGFpbHMuZGF5KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2hvdWxkIHNldCB5ZWFyL21vbnRoL2RheSBiZWZvcmUgc2F2aW5nIGhvbGlkYXkgcmFuZ2VcIik7XG4gICAgY29uc3QgbyA9IF8oXG4gICAgICBgJHt0aGlzLmRheURldGFpbHMueWVhcn0tJHt0aGlzLmRheURldGFpbHMubW9udGh9LSR7dGhpcy5kYXlEZXRhaWxzLmRheX1gXG4gICAgKSwgbiA9IF8oYCR7dGhpcy5kYXlEZXRhaWxzLnllYXJ9LSR7dH0tJHtlfWApO1xuICAgIGlmIChuLmlzQmVmb3JlKG8pIHx8IG4uaXNTYW1lKG8pKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZW5kIGRhdGUgc2hvdWxkIGJlIGFmdGVyIHN0YXJ0IGRhdGVcIik7XG4gICAgY29uc3QgZCA9IG4uZGlmZihvLCBcImRheVwiKTtcbiAgICBmb3IgKGxldCBhID0gMTsgYSA8PSBkOyBhKyspIHtcbiAgICAgIGNvbnN0IGkgPSBvLmFkZChhLCBcImRheVwiKTtcbiAgICAgIHRoaXMuZGF5RGV0YWlscy5kYXlUeXBlID09PSAyID8gdGhpcy5ob2xpZGF5c1tpLmZvcm1hdChcIllZWVktTU0tRERcIildID0gdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkgOiB0aGlzLmRheURldGFpbHMuZGF5VHlwZSA9PT0gMSA/IHRoaXMud29ya2RheXNbaS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXSA9IHRoaXMuZGF5RGV0YWlscy5ob2xpZGF5IDogdGhpcy5kYXlEZXRhaWxzLmRheVR5cGUgPT09IDMgJiYgKHRoaXMuaW5MaWV1RGF5c1tpLmZvcm1hdChcIllZWVktTU0tRERcIildID0gdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKiogd29yayBkYXkgKi9cbiAgdyh0LCBlKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZShcbiAgICAgIHQsXG4gICAgICBlLFxuICAgICAgMVxuICAgICAgLyogV29ya2RheSAqL1xuICAgICk7XG4gIH1cbiAgLyoqIHJlc3QgKi9cbiAgcih0LCBlKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZShcbiAgICAgIHQsXG4gICAgICBlLFxuICAgICAgMlxuICAgICAgLyogSG9saWRheSAqL1xuICAgICk7XG4gIH1cbiAgLyoqIGluLWxpZXUgKi9cbiAgaSh0LCBlKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZShcbiAgICAgIHQsXG4gICAgICBlLFxuICAgICAgM1xuICAgICAgLyogSW5MaWV1ICovXG4gICAgKTtcbiAgfVxuICAvKiogTmV3IFllYXIncyBEYXkg5YWD5pemICovXG4gIG55KCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIk5ldyBZZWFyJ3MgRGF5LOWFg+aXpiwxXCJcbiAgICAgIC8qIE5ZICovXG4gICAgKTtcbiAgfVxuICAvKiogU3ByaW5nIEZlc3RpdmFsIOaYpeiKgiAqL1xuICBzKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIlNwcmluZyBGZXN0aXZhbCzmmKXoioIsM1wiXG4gICAgICAvKiBTICovXG4gICAgKTtcbiAgfVxuICAvKiogVG9tYi1zd2VlcGluZyBEYXkg5riF5piOICovXG4gIHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiVG9tYi1zd2VlcGluZyBEYXks5riF5piOLDFcIlxuICAgICAgLyogVCAqL1xuICAgICk7XG4gIH1cbiAgLyoqIExhYm91ciBEYXkg5LqU5LiAICovXG4gIGwoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiTGFib3VyIERheSzlirPliqjoioIsMVwiXG4gICAgICAvKiBMICovXG4gICAgKTtcbiAgfVxuICAvKiogRHJhZ29uIEJvYXQgRmVzdGl2YWwg56uv5Y2IICovXG4gIGQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiRHJhZ29uIEJvYXQgRmVzdGl2YWws56uv5Y2ILDFcIlxuICAgICAgLyogRCAqL1xuICAgICk7XG4gIH1cbiAgLyoqIE5hdGlvbmFsIERheSDlm73luoboioIgKi9cbiAgbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJOYXRpb25hbCBEYXks5Zu95bqG6IqCLDNcIlxuICAgICAgLyogTiAqL1xuICAgICk7XG4gIH1cbiAgLyoqIE1pZC1hdXR1bW4gRmVzdGl2YWwg5Lit56eLICovXG4gIG0oKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiTWlkLWF1dHVtbiBGZXN0aXZhbCzkuK3np4ssMVwiXG4gICAgICAvKiBNICovXG4gICAgKTtcbiAgfVxuICAvKiogQW50aS1GYXNjaXN0IDcwdGggRGF5IOS4reWbveS6uuawkeaKl+aXpeaImOS6ieaaqOS4lueVjOWPjeazleilv+aWr+aImOS6ieiDnOWIqTcw5ZGo5bm057qq5b+15pelICovXG4gIGEoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiQW50aS1GYXNjaXN0IDcwdGggRGF5LOS4reWbveS6uuawkeaKl+aXpeaImOS6ieaaqOS4lueVjOWPjeazleilv+aWr+aImOS6ieiDnOWIqTcw5ZGo5bm057qq5b+15pelLDFcIlxuICAgICAgLyogQSAqL1xuICAgICk7XG4gIH1cbn1cbmNvbnN0IEMgPSAoKSA9PiB7XG4gIGNvbnN0IHIgPSBuZXcgQSgpO1xuICByZXR1cm4gci55KDIwMjQpLm55KCkucigxLCAxKS5zKCkucigyLCAxMCkudG8oMiwgMTcpLncoMiwgNCkudygyLCAxOCkuaSgyLCAxNSkudG8oMiwgMTYpLnQoKS5yKDQsIDQpLnRvKDQsIDYpLncoNCwgNykuaSg0LCA1KS5sKCkucig1LCAxKS50byg1LCA1KS53KDQsIDI4KS53KDUsIDExKS5pKDUsIDIpLnRvKDUsIDMpLmQoKS5yKDYsIDEwKS5tKCkucig5LCAxNSkudG8oOSwgMTcpLncoOSwgMTQpLmkoOSwgMTYpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyOSkudygxMCwgMTIpLmkoMTAsIDQpLmkoMTAsIDcpLCByLnkoMjAyMykubnkoKS5yKDEsIDEpLnRvKDEsIDIpLnMoKS5yKDEsIDIxKS50bygxLCAyNykudygxLCAyOCkudG8oMSwgMjkpLmkoMSwgMjYpLnRvKDEsIDI3KS50KCkucig0LCA1KS5sKCkucig0LCAyOSkudG8oNSwgMykudyg0LCAyMykudyg1LCA2KS5pKDUsIDIpLnRvKDUsIDMpLmQoKS5yKDYsIDIyKS50byg2LCAyNCkudyg2LCAyNSkuaSg2LCAyMykubSgpLnIoOSwgMjkpLm4oKS5yKDksIDMwKS50bygxMCwgNikudygxMCwgNykudG8oMTAsIDgpLmkoMTAsIDUpLnRvKDEwLCA2KSwgci55KDIwMjIpLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigxLCAzMSkudG8oMiwgNikudygxLCAyOSkudygxLCAzMCkuaSgyLCAzKS50bygyLCA0KS50KCkucig0LCAzKS50byg0LCA1KS53KDQsIDIpLmkoNCwgNCkubCgpLnIoNCwgMzApLnRvKDUsIDQpLncoNCwgMjQpLncoNSwgNykuaSg1LCAzKS50byg1LCA0KS5kKCkucig2LCAzKS50byg2LCA1KS5tKCkucig5LCAxMCkudG8oOSwgMTIpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOCkudygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLm55KCkucigxMiwgMzEpLCByLnkoMjAyMSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDIsIDExKS50bygyLCAxNykudygyLCA3KS53KDIsIDIwKS5pKDIsIDE2KS50bygyLCAxNykudCgpLnIoNCwgMykudG8oNCwgNSkubCgpLnIoNSwgMSkudG8oNSwgNSkudyg0LCAyNSkudyg1LCA4KS5pKDUsIDQpLnRvKDUsIDUpLmQoKS5yKDYsIDEyKS50byg2LCAxNCkubSgpLnIoOSwgMTkpLnRvKDksIDIxKS53KDksIDE4KS5pKDksIDIwKS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjYpLncoMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KSwgci55KDIwMjApLm55KCkucigxLCAxKS5zKCkucigxLCAyNCkudG8oMiwgMikudygxLCAxOSkuaSgxLCAyOSkudCgpLnIoNCwgNCkudG8oNCwgNikubCgpLnIoNSwgMSkudG8oNSwgNSkudyg0LCAyNikudyg1LCA5KS5pKDUsIDQpLnRvKDUsIDUpLmQoKS5yKDYsIDI1KS50byg2LCAyNykudyg2LCAyOCkuaSg2LCAyNikubigpLnIoMTAsIDEpLnRvKDEwLCA4KS53KDksIDI3KS53KDEwLCAxMCkuaSgxMCwgNykudG8oMTAsIDgpLCByLnkoMjAxOSkubnkoKS5yKDEsIDEpLnMoKS5yKDIsIDQpLnRvKDIsIDEwKS53KDIsIDIpLnRvKDIsIDMpLmkoMiwgNCkuaSgyLCA4KS50KCkucig0LCA1KS50byg0LCA3KS5sKCkucig1LCAxKS50byg1LCA0KS53KDQsIDI4KS53KDUsIDUpLmkoNSwgMikuaSg1LCAzKS5kKCkucig2LCA3KS50byg2LCA5KS5tKCkucig5LCAxMykudG8oOSwgMTUpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyOSkudygxMCwgMTIpLmkoMTAsIDQpLmkoMTAsIDcpLCByLnkoMjAxOCkubnkoKS5yKDEsIDEpLnMoKS5yKDIsIDE1KS50bygyLCAyMSkudygyLCAxMSkudygyLCAyNCkuaSgyLCAxOSkudG8oMiwgMjEpLnQoKS5yKDQsIDUpLnRvKDQsIDcpLncoNCwgOCkuaSg0LCA2KS5sKCkucig0LCAyOSkudG8oNSwgMSkudyg0LCAyOCkuaSg0LCAzMCkuZCgpLnIoNiwgMTgpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyOSkudG8oOSwgMzApLmkoMTAsIDQpLnRvKDEwLCA1KS5tKCkucig5LCAyNCkubnkoKS5yKDEyLCAzMCkudG8oMTIsIDMxKS53KDEyLCAyOSkuaSgxMiwgMzEpLCByLnkoMjAxNykubnkoKS5yKDEsIDEpLnRvKDEsIDIpLnMoKS5yKDEsIDI3KS50bygyLCAyKS53KDEsIDIyKS53KDIsIDQpLmkoMiwgMSkudG8oMiwgMikudCgpLnIoNCwgMikudG8oNCwgNCkudyg0LCAxKS5pKDQsIDMpLmwoKS5yKDUsIDEpLmQoKS5yKDUsIDI4KS50byg1LCAzMCkudyg1LCAyNykuaSg1LCAyOSkubigpLnIoMTAsIDEpLnRvKDEwLCA4KS53KDksIDMwKS5pKDEwLCA2KS5tKCkucigxMCwgNCksIHIueSgyMDE2KS5ueSgpLnIoMSwgMSkucygpLnIoMiwgNykudG8oMiwgMTMpLncoMiwgNikudygyLCAxNCkuaSgyLCAxMSkudG8oMiwgMTIpLnQoKS5yKDQsIDQpLmwoKS5yKDUsIDEpLnRvKDUsIDIpLmQoKS5yKDYsIDkpLnRvKDYsIDExKS53KDYsIDEyKS5pKDYsIDEwKS5tKCkucig5LCAxNSkudG8oOSwgMTcpLncoOSwgMTgpLmkoOSwgMTYpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOCkudG8oMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KSwgci55KDIwMTUpLm55KCkucigxLCAxKS50bygxLCAzKS53KDEsIDQpLmkoMSwgMikucygpLnIoMiwgMTgpLnRvKDIsIDI0KS53KDIsIDE1KS53KDIsIDI4KS5pKDIsIDIzKS50bygyLCAyNCkudCgpLnIoNCwgNSkudG8oNCwgNikubCgpLnIoNSwgMSkuZCgpLnIoNiwgMjApLnIoNiwgMjIpLm0oKS5yKDksIDI3KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoMTAsIDEwKS5pKDEwLCA3KS5hKCkucig5LCAzKS50byg5LCA0KS53KDksIDYpLmkoOSwgNCksIHIueSgyMDE0KS5ueSgpLnIoMSwgMSkucygpLnIoMSwgMzEpLnRvKDIsIDYpLncoMSwgMjYpLncoMiwgOCkuaSgyLCA1KS50bygyLCA2KS50KCkucig0LCA1KS50byg0LCA3KS5sKCkucig1LCAxKS50byg1LCAzKS53KDUsIDQpLmkoNSwgMikuZCgpLnIoNiwgMikubSgpLnIoOSwgOCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI4KS53KDEwLCAxMSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAxMykubnkoKS5yKDEsIDEpLnRvKDEsIDMpLncoMSwgNSkudG8oMSwgNikuaSgxLCAyKS50bygxLCAzKS5zKCkucigyLCA5KS50bygyLCAxNSkudygyLCAxNikudG8oMiwgMTcpLmkoMiwgMTQpLnRvKDIsIDE1KS50KCkucig0LCA0KS50byg0LCA2KS53KDQsIDcpLmkoNCwgNSkubCgpLnIoNCwgMjkpLnRvKDUsIDEpLncoNCwgMjcpLnRvKDQsIDI4KS5pKDQsIDI5KS50byg0LCAzMCkuZCgpLnIoNiwgMTApLnRvKDYsIDEyKS53KDYsIDgpLnRvKDYsIDkpLmkoNiwgMTApLnRvKDYsIDExKS5tKCkucig5LCAxOSkudG8oOSwgMjEpLncoOSwgMjIpLmkoOSwgMjApLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyOSkudygxMCwgMTIpLmkoMTAsIDQpLmkoMTAsIDcpLCByLnkoMjAxMikubnkoKS5yKDEsIDEpLnRvKDEsIDMpLmkoMSwgMykucygpLnIoMSwgMjIpLnRvKDEsIDI4KS53KDEsIDIxKS53KDEsIDI5KS5pKDEsIDI2KS50bygxLCAyNykudCgpLnIoNCwgMikudG8oNCwgNCkudygzLCAzMSkudyg0LCAxKS5pKDQsIDIpLnRvKDQsIDMpLmwoKS5yKDQsIDI5KS50byg1LCAxKS53KDQsIDI4KS5pKDQsIDMwKS5kKCkucig2LCAyMikucig2LCAyNCkubSgpLnIoOSwgMzApLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyOSkuaSgxMCwgNSksIHIueSgyMDExKS5ueSgpLnIoMSwgMSkudG8oMSwgMykucygpLnIoMiwgMikudG8oMiwgOCkudygxLCAzMCkudygyLCAxMikuaSgyLCA3KS50bygyLCA4KS50KCkucig0LCAzKS50byg0LCA1KS53KDQsIDIpLmkoNCwgNCkubCgpLnIoNCwgMzApLnRvKDUsIDIpLmQoKS5yKDYsIDQpLnIoNiwgNikubSgpLnIoOSwgMTApLnRvKDksIDEyKS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoMTAsIDgpLnRvKDEwLCA5KS5pKDEwLCA2KS50bygxMCwgNykubnkoKS53KDEyLCAzMSksIHIueSgyMDEwKS5ueSgpLnIoMSwgMSkudG8oMSwgMykucygpLnIoMiwgMTMpLnRvKDIsIDE5KS53KDIsIDIwKS50bygyLCAyMSkuaSgyLCAxOCkudG8oMiwgMTkpLnQoKS5yKDQsIDMpLnRvKDQsIDUpLmwoKS5yKDUsIDEpLnRvKDUsIDMpLmQoKS5yKDYsIDE0KS50byg2LCAxNikudyg2LCAxMikudG8oNiwgMTMpLmkoNiwgMTQpLnRvKDYsIDE1KS5tKCkucig5LCAyMikudG8oOSwgMjQpLncoOSwgMTkpLncoOSwgMjUpLmkoOSwgMjMpLnRvKDksIDI0KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjYpLncoMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KSwgci55KDIwMDkpLm55KCkucigxLCAxKS50bygxLCAzKS53KDEsIDQpLmkoMSwgMikucygpLnIoMSwgMjUpLnRvKDEsIDMxKS53KDEsIDI0KS53KDIsIDEpLmkoMSwgMjkpLnRvKDEsIDMwKS50KCkucig0LCA0KS50byg0LCA2KS5sKCkucig1LCAxKS50byg1LCAzKS5kKCkucig1LCAyOCkudG8oNSwgMzApLncoNSwgMzEpLmkoNSwgMjkpLm4oKS5yKDEwLCAxKS50bygxMCwgOCkudyg5LCAyNykudygxMCwgMTApLmkoMTAsIDcpLnRvKDEwLCA4KS5tKCkucigxMCwgMyksIHIueSgyMDA4KS5ueSgpLnIoMSwgMSkucygpLnIoMiwgNikudG8oMiwgMTIpLncoMiwgMikudG8oMiwgMykuaSgyLCAxMSkudG8oMiwgMTIpLnQoKS5yKDQsIDQpLnRvKDQsIDYpLmwoKS5yKDUsIDEpLnRvKDUsIDMpLncoNSwgNCkuaSg1LCAyKS5kKCkucig2LCA3KS50byg2LCA5KS5tKCkucig5LCAxMykudG8oOSwgMTUpLm4oKS5yKDksIDI5KS50bygxMCwgNSkudyg5LCAyNykudG8oOSwgMjgpLmkoOSwgMjkpLnRvKDksIDMwKSwgci55KDIwMDcpLm55KCkucigxLCAxKS50bygxLCAzKS5pKDEsIDIpLnRvKDEsIDMpLnMoKS5yKDIsIDE4KS50bygyLCAyNCkudygyLCAxNykudygyLCAyNSkuaSgyLCAyMikudG8oMiwgMjMpLmwoKS5yKDUsIDEpLnRvKDUsIDcpLncoNCwgMjgpLnRvKDQsIDI5KS5pKDUsIDQpLmkoNSwgNykubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS50byg5LCAzMCkuaSgxMCwgNCkudG8oMTAsIDUpLm55KCkucigxMiwgMzApLnRvKDEyLCAzMSkudygxMiwgMjkpLmkoMTIsIDMxKSwgci55KDIwMDYpLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigxLCAyOSkudG8oMiwgNCkudygxLCAyOCkudygyLCA1KS5pKDIsIDIpLnRvKDIsIDMpLmwoKS5yKDUsIDEpLnRvKDUsIDcpLncoNCwgMjkpLnRvKDQsIDMwKS5pKDUsIDQpLnRvKDUsIDUpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAzMCkudygxMCwgOCkuaSgxMCwgNSkudG8oMTAsIDYpLm55KCkudygxMiwgMzApLnRvKDEyLCAzMSksIHIueSgyMDA1KS5ueSgpLnIoMSwgMSkudG8oMSwgMykucygpLnIoMiwgOSkudG8oMiwgMTUpLncoMiwgNSkudG8oMiwgNikuaSgyLCAxNCkudG8oMiwgMTUpLmwoKS5yKDUsIDEpLnRvKDUsIDcpLncoNCwgMzApLncoNSwgOCkuaSg1LCA1KS50byg1LCA2KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoMTAsIDgpLnRvKDEwLCA5KS5pKDEwLCA2KS50bygxMCwgNyksIHIueSgyMDA0KS5ueSgpLnIoMSwgMSkucygpLnIoMSwgMjIpLnRvKDEsIDI4KS53KDEsIDE3KS50bygxLCAxOCkuaSgxLCAyNykudG8oMSwgMjgpLmwoKS5yKDUsIDEpLnRvKDUsIDcpLncoNSwgOCkudG8oNSwgOSkuaSg1LCA2KS50byg1LCA3KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoMTAsIDkpLnRvKDEwLCAxMCkuaSgxMCwgNikudG8oMTAsIDcpLCB7XG4gICAgaG9saWRheXM6IHIuaG9saWRheXMsXG4gICAgd29ya2RheXM6IHIud29ya2RheXMsXG4gICAgaW5MaWV1RGF5czogci5pbkxpZXVEYXlzXG4gIH07XG59LCB7IGhvbGlkYXlzOiBnLCB3b3JrZGF5czogcCwgaW5MaWV1RGF5czogaiB9ID0gQygpLCB5ID0gKC4uLnIpID0+IHtcbiAgaWYgKHIubGVuZ3RoICE9PSAxKVxuICAgIHJldHVybiByLm1hcCgoZSkgPT4geShlKSk7XG4gIGNvbnN0IHQgPSB3KHJbMF0pO1xuICBpZiAoIXQuaXNWYWxpZCgpKVxuICAgIHRocm93IG5ldyBFcnJvcihgdW5zdXBwb3J0ZWQgdHlwZSAke3R5cGVvZiB0fSwgZXhwZWN0ZWQgdHlwZSBpcyBEYXRlIG9yIERheWpzYCk7XG4gIHJldHVybiB0O1xufSwgVCA9IChyKSA9PiAhZihyKSwgZiA9IChyKSA9PiB7XG4gIGNvbnN0IHQgPSB5KHIpLCBlID0gdC5kYXkoKSwgbyA9IHQuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgcmV0dXJuICEhKHBbb10gfHwgZSA+PSAxICYmIGUgPD0gNSAmJiAhZ1tvXSk7XG59LCBxID0gKHIpID0+IChyID0geShyKSwgISFqW3IuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKV0pLCBJID0gKHIpID0+IHtcbiAgciA9IHkocik7XG4gIGNvbnN0IHQgPSByLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gIGlmIChwW3RdKVxuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiB0LFxuICAgICAgd29yazogITAsXG4gICAgICBuYW1lOiBwW3RdXG4gICAgfTtcbiAgaWYgKGdbdF0pXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IHQsXG4gICAgICB3b3JrOiAhMSxcbiAgICAgIG5hbWU6IGdbdF1cbiAgICB9O1xuICB7XG4gICAgY29uc3QgZSA9IHIuZGF5KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IHQsXG4gICAgICB3b3JrOiBlICE9PSAwICYmIGUgIT09IDYsXG4gICAgICBuYW1lOiByLmZvcm1hdChcImRkZGRcIilcbiAgICB9O1xuICB9XG59LCBVID0gKHIsIHQsIGUgPSAhMCkgPT4gKHIgPSB5KHIpLCB0ID0geSh0KSwgZSA/IEQociwgdCkuZmlsdGVyKFQpLm1hcCgobykgPT4gby5mb3JtYXQoXCJZWVlZLU1NLUREXCIpKSA6IEQociwgdCkuZmlsdGVyKChvKSA9PiBnW28uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKV0pLm1hcCgobykgPT4gby5mb3JtYXQoXCJZWVlZLU1NLUREXCIpKSksIFcgPSAociwgdCwgZSA9ICEwKSA9PiAociA9IHkociksIHQgPSB5KHQpLCBlID8gRChyLCB0KS5maWx0ZXIoZikubWFwKChvKSA9PiBvLmZvcm1hdChcIllZWVktTU0tRERcIikpIDogRChyLCB0KS5maWx0ZXIoKG8pID0+IGYobykgJiYgby5kYXkoKSA+PSAxICYmIG8uZGF5KCkgPD0gNSkubWFwKChvKSA9PiBvLmZvcm1hdChcIllZWVktTU0tRERcIikpKSwgUCA9IChyID0gMCwgdCA9IF8oKSkgPT4ge1xuICBpZiAodCA9IHcodCksIHIgPT09IDApIHtcbiAgICBpZiAoZih0KSlcbiAgICAgIHJldHVybiB0LmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgciA9IDE7XG4gIH1cbiAgY29uc3QgZSA9IHIgPiAwID8gMSA6IC0xO1xuICBsZXQgbyA9IE1hdGguYWJzKHIpO1xuICBmb3IgKDsgbyA+IDA7IClcbiAgICB0ID0gdC5hZGQoZSwgXCJkYXlcIiksIGYodCkgJiYgby0tO1xuICByZXR1cm4gdC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xufSwgeiA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGZpbmRXb3JrZGF5OiBQLFxuICBnZXREYXlEZXRhaWw6IEksXG4gIGdldEhvbGlkYXlzSW5SYW5nZTogVSxcbiAgZ2V0V29ya2RheXNJblJhbmdlOiBXLFxuICBpc0hvbGlkYXk6IFQsXG4gIGlzSW5MaWV1OiBxLFxuICBpc1dvcmtkYXk6IGZcbn0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSksIFYgPSB7XG4gIHRoZV9iZWdpbm5pbmdfb2Zfc3ByaW5nOiBbNC42Mjk1LCAzLjg3XSxcbiAgcmFpbl93YXRlcjogWzE5LjQ1OTksIDE4LjczXSxcbiAgdGhlX3dha2luZ19vZl9pbnNlY3RzOiBbNi4zOTI2LCA1LjYzXSxcbiAgdGhlX3NwcmluZ19lcXVpbm94OiBbMjEuNDE1NSwgMjAuNjQ2XSxcbiAgcHVyZV9icmlnaHRuZXNzOiBbNS41OSwgNC44MV0sXG4gIGdyYWluX3JhaW46IFsyMC44ODgsIDIwLjFdLFxuICB0aGVfYmVnaW5uaW5nX29mX3N1bW1lcjogWzYuMzE4LCA1LjUyXSxcbiAgbGVzc2VyX2Z1bGxuZXNzX29mX2dyYWluOiBbMjEuODYsIDIxLjA0XSxcbiAgZ3JhaW5faW5fYmVhcmQ6IFs2LjUsIDUuNjc4XSxcbiAgdGhlX3N1bW1lcl9zb2xzdGljZTogWzIyLjIsIDIxLjM3XSxcbiAgbGVzc2VyX2hlYXQ6IFs3LjkyOCwgNy4xMDhdLFxuICBncmVhdGVyX2hlYXQ6IFsyMy42NSwgMjIuODNdLFxuICB0aGVfYmVnaW5uaW5nX29mX2F1dHVtbjogWzI4LjM1LCA3LjVdLFxuICB0aGVfZW5kX29mX2hlYXQ6IFsyMy45NSwgMjMuMTNdLFxuICB3aGl0ZV9kZXc6IFs4LjQ0LCA3LjY0Nl0sXG4gIHRoZV9hdXR1bW5fZXF1aW5veDogWzIzLjgyMiwgMjMuMDQyXSxcbiAgY29kZV9kZXc6IFs5LjA5OCwgOC4zMThdLFxuICBmcm9zdF9kZXNjZW50OiBbMjQuMjE4LCAyMy40MzhdLFxuICB0aGVfYmVnaW5uaW5nX29mX3dpbnRlcjogWzguMjE4LCA3LjQzOF0sXG4gIGxlc3Nlcl9zbm93OiBbMjMuMDgsIDIyLjM2XSxcbiAgZ3JlYXRlcl9zbm93OiBbNy45LCA3LjE4XSxcbiAgdGhlX3dpbnRlcl9zb2xzdGljZTogWzIyLjYsIDIxLjk0XSxcbiAgbGVzc2VyX2NvbGQ6IFs2LjExLCA1LjQwNTVdLFxuICBncmVhdGVyX2NvbGQ6IFsyMC44NCwgMjAuMTJdXG59LCBOID0ge1xuICAxOiBbXCJsZXNzZXJfY29sZFwiLCBcImdyZWF0ZXJfY29sZFwiXSxcbiAgMjogW1widGhlX2JlZ2lubmluZ19vZl9zcHJpbmdcIiwgXCJyYWluX3dhdGVyXCJdLFxuICAzOiBbXCJ0aGVfd2FraW5nX29mX2luc2VjdHNcIiwgXCJ0aGVfc3ByaW5nX2VxdWlub3hcIl0sXG4gIDQ6IFtcInB1cmVfYnJpZ2h0bmVzc1wiLCBcImdyYWluX3JhaW5cIl0sXG4gIDU6IFtcInRoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyXCIsIFwibGVzc2VyX2Z1bGxuZXNzX29mX2dyYWluXCJdLFxuICA2OiBbXCJncmFpbl9pbl9iZWFyZFwiLCBcInRoZV9zdW1tZXJfc29sc3RpY2VcIl0sXG4gIDc6IFtcImxlc3Nlcl9oZWF0XCIsIFwiZ3JlYXRlcl9oZWF0XCJdLFxuICA4OiBbXCJ0aGVfYmVnaW5uaW5nX29mX2F1dHVtblwiLCBcInRoZV9lbmRfb2ZfaGVhdFwiXSxcbiAgOTogW1wid2hpdGVfZGV3XCIsIFwidGhlX2F1dHVtbl9lcXVpbm94XCJdLFxuICAxMDogW1wiY29kZV9kZXdcIiwgXCJmcm9zdF9kZXNjZW50XCJdLFxuICAxMTogW1widGhlX2JlZ2lubmluZ19vZl93aW50ZXJcIiwgXCJsZXNzZXJfc25vd1wiXSxcbiAgMTI6IFtcImdyZWF0ZXJfc25vd1wiLCBcInRoZV93aW50ZXJfc29sc3RpY2VcIl1cbn0sIFogPSB7XG4gIFwiMjAyNl9yYWluX3dhdGVyXCI6IC0xLFxuICBcIjIwODRfdGhlX3NwcmluZ19lcXVpbm94XCI6IDEsXG4gIFwiMTkxMV90aGVfYmVnaW5uaW5nX29mX3N1bW1lclwiOiAxLFxuICBcIjIwMDhfbGVzc2VyX2Z1bGxuZXNzX29mX2dyYWluXCI6IDEsXG4gIFwiMTkwMl9ncmFpbl9pbl9iZWFyZFwiOiAxLFxuICBcIjE5MjhfdGhlX3N1bW1lcl9zb2xzdGljZVwiOiAxLFxuICBcIjE5MjVfbGVzc2VyX2hlYXRcIjogMSxcbiAgXCIyMDE2X2xlc3Nlcl9oZWF0XCI6IDEsXG4gIFwiMTkyMl9ncmVhdGVyX2hlYXRcIjogMSxcbiAgXCIyMDAyX3RoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uXCI6IDEsXG4gIFwiMTkyN193aGl0ZV9kZXdcIjogMSxcbiAgXCIxOTQyX3RoZV9hdXR1bW5fZXF1aW5veFwiOiAxLFxuICBcIjIwODlfZnJvc3RfZGVzY2VudFwiOiAxLFxuICBcIjIwODlfdGhlX2JlZ2lubmluZ19vZl93aW50ZXJcIjogMSxcbiAgXCIxOTc4X2xlc3Nlcl9zbm93XCI6IDEsXG4gIFwiMTk1NF9ncmVhdGVyX3Nub3dcIjogMSxcbiAgXCIxOTE4X3RoZV93aW50ZXJfc29sc3RpY2VcIjogLTEsXG4gIFwiMjAyMV90aGVfd2ludGVyX3NvbHN0aWNlXCI6IC0xLFxuICBcIjE5ODJfbGVzc2VyX2NvbGRcIjogMSxcbiAgXCIyMDE5X2xlc3Nlcl9jb2xkXCI6IC0xLFxuICBcIjIwMDBfZ3JlYXRlcl9jb2xkXCI6IDEsXG4gIFwiMjA4Ml9ncmVhdGVyX2NvbGRcIjogMVxufSwgRSA9IHtcbiAgbGVzc2VyX2NvbGQ6IFwi5bCP5a+SXCIsXG4gIGdyZWF0ZXJfY29sZDogXCLlpKflr5JcIixcbiAgdGhlX2JlZ2lubmluZ19vZl9zcHJpbmc6IFwi56uL5pilXCIsXG4gIHJhaW5fd2F0ZXI6IFwi6Zuo5rC0XCIsXG4gIHRoZV93YWtpbmdfb2ZfaW5zZWN0czogXCLmg4rom7BcIixcbiAgdGhlX3NwcmluZ19lcXVpbm94OiBcIuaYpeWIhlwiLFxuICBwdXJlX2JyaWdodG5lc3M6IFwi5riF5piOXCIsXG4gIGdyYWluX3JhaW46IFwi6LC36ZuoXCIsXG4gIHRoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyOiBcIueri+Wkj1wiLFxuICBsZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW46IFwi5bCP5ruhXCIsXG4gIGdyYWluX2luX2JlYXJkOiBcIuiKkuenjVwiLFxuICB0aGVfc3VtbWVyX3NvbHN0aWNlOiBcIuWkj+iHs1wiLFxuICBsZXNzZXJfaGVhdDogXCLlsI/mmpFcIixcbiAgZ3JlYXRlcl9oZWF0OiBcIuWkp+aakVwiLFxuICB0aGVfYmVnaW5uaW5nX29mX2F1dHVtbjogXCLnq4vnp4tcIixcbiAgdGhlX2VuZF9vZl9oZWF0OiBcIuWkhOaakVwiLFxuICB3aGl0ZV9kZXc6IFwi55m96ZyyXCIsXG4gIHRoZV9hdXR1bW5fZXF1aW5veDogXCLnp4vliIZcIixcbiAgY29kZV9kZXc6IFwi5a+S6ZyyXCIsXG4gIGZyb3N0X2Rlc2NlbnQ6IFwi6Zyc6ZmNXCIsXG4gIHRoZV9iZWdpbm5pbmdfb2Zfd2ludGVyOiBcIueri+WGrFwiLFxuICBsZXNzZXJfc25vdzogXCLlsI/pm6pcIixcbiAgZ3JlYXRlcl9zbm93OiBcIuWkp+mbqlwiLFxuICB0aGVfd2ludGVyX3NvbHN0aWNlOiBcIuWGrOiHs1wiXG59LCBTID0gKHIsIHQsIGUpID0+IHtcbiAgY29uc3QgbyA9IHIgPj0gMmUzID8gMjEgOiAyMCwgbiA9IHIgJSAxMDAsIGQgPSAwLjI0MjIsIGEgPSBWW2VdW28gPT09IDIxID8gMSA6IDBdO1xuICBsZXQgaSA9IE1hdGguZmxvb3IobiAvIDQpO1xuICBbXG4gICAgXCJsZXNzZXJfY29sZFwiLFxuICAgIFwiZ3JlYXRlcl9jb2xkXCIsXG4gICAgXCJ0aGVfYmVnaW5uaW5nX29mX3NwcmluZ1wiLFxuICAgIFwicmFpbl93YXRlclwiXG4gIF0uaW5jbHVkZXMoZSkgJiYgKGkgPSBNYXRoLmZsb29yKChuIC0gMSkgLyA0KSk7XG4gIGxldCBzID0gTWF0aC5mbG9vcihuICogZCArIGEpIC0gaTtcbiAgY29uc3QgdSA9IFpbYCR7cn1fJHtlfWBdO1xuICByZXR1cm4gdSAmJiAocyArPSB1KSwgXyhgJHtyfS0ke3R9LSR7c31gKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xufSwgRyA9IChyLCB0KSA9PiB7XG4gIGNvbnN0IGUgPSBbXTtcbiAgbGV0IG8gPSB3KHIpO1xuICBjb25zdCBuID0gdyh0IHx8IHIpO1xuICBmb3IgKDsgby5pc0JlZm9yZShuKSB8fCBvLmlzU2FtZShuKTsgKSB7XG4gICAgY29uc3QgZCA9IG8ueWVhcigpLCBhID0gby5tb250aCgpICsgMTtcbiAgICBOW2FdLmZvckVhY2goKGkpID0+IHtcbiAgICAgIGNvbnN0IHMgPSBfKFMoZCwgYSwgaSkpO1xuICAgICAgKHMgIT0gbnVsbCAmJiBzLmlzQmVmb3JlKG4pIHx8IHMgIT0gbnVsbCAmJiBzLmlzU2FtZShuKSkgJiYgKHMgIT0gbnVsbCAmJiBzLmlzQWZ0ZXIobykgfHwgcyAhPSBudWxsICYmIHMuaXNTYW1lKG8pKSAmJiBlLnB1c2goe1xuICAgICAgICBkYXRlOiBzLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgICAgIHRlcm06IGksXG4gICAgICAgIG5hbWU6IEVbaV0sXG4gICAgICAgIGluZGV4OiAxXG4gICAgICB9KTtcbiAgICB9KSwgYSA9PT0gMTIgPyBvID0gby5hZGQoMSwgXCJ5ZWFyXCIpLnN0YXJ0T2YoXCJ5ZWFyXCIpIDogbyA9IG8uYWRkKDEsIFwibW9udGhcIikuc3RhcnRPZihcIm1vbnRoXCIpO1xuICB9XG4gIHJldHVybiBlO1xufSwgSiA9IChyLCB0KSA9PiB7XG4gIGxldCBlID0gdyhyKS5zdWJ0cmFjdCgxLCBcIm1vbnRoXCIpO1xuICBjb25zdCBvID0gdyh0IHx8IHIpLmFkZCgxLCBcIm1vbnRoXCIpLCBuID0gW107XG4gIGZvciAoOyBlLmlzQmVmb3JlKG8pIHx8IGUuaXNTYW1lKG8pOyApIHtcbiAgICBjb25zdCBhID0gZS55ZWFyKCksIGkgPSBlLm1vbnRoKCkgKyAxO1xuICAgIE5baV0uZm9yRWFjaCgocykgPT4ge1xuICAgICAgY29uc3QgdSA9IF8oUyhhLCBpLCBzKSk7XG4gICAgICBuLnB1c2goeyB0ZXJtOiBzLCBkYXRlOiB1IH0pO1xuICAgIH0pLCBlLm1vbnRoKCkgPT09IDExID8gZSA9IGUuYWRkKDEsIFwieWVhclwiKS5zdGFydE9mKFwieWVhclwiKSA6IGUgPSBlLmFkZCgxLCBcIm1vbnRoXCIpLnN0YXJ0T2YoXCJtb250aFwiKTtcbiAgfVxuICBjb25zdCBkID0gW107XG4gIHJldHVybiBuLmZvckVhY2goKGEsIGkpID0+IHtcbiAgICBmb3IgKGxldCBzID0gYS5kYXRlOyBuW2kgKyAxXSAmJiBzLmlzQmVmb3JlKG5baSArIDFdLmRhdGUpOyBzID0gcy5hZGQoMSwgXCJkYXlcIikpXG4gICAgICBkLnB1c2goeyBkYXk6IHMsIHRlcm06IGEudGVybSwgbmFtZTogRVthLnRlcm1dLCBpbmRleDogcy5kaWZmKGEuZGF0ZSwgXCJkYXlcIikgKyAxIH0pO1xuICB9KSwgdCB8fCAodCA9IHIpLCBkLmZpbHRlcigoYSkgPT4gYS5kYXkuaXNCZXR3ZWVuKHIsIHQsIFwiZGF5XCIpKS5tYXAoKGEpID0+ICh7XG4gICAgZGF0ZTogYS5kYXkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICB0ZXJtOiBhLnRlcm0sXG4gICAgbmFtZTogYS5uYW1lLFxuICAgIGluZGV4OiBhLmluZGV4XG4gIH0pKTtcbn0sIEsgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBnZXRTb2xhclRlcm1EYXRlOiBTLFxuICBnZXRTb2xhclRlcm1zOiBHLFxuICBnZXRTb2xhclRlcm1zSW5SYW5nZTogSlxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgbSA9IFtcbiAgMTk0MTYsXG4gIDE5MTY4LFxuICA0MjM1MixcbiAgMjE3MTcsXG4gIDUzODU2LFxuICA1NTYzMixcbiAgOTE0NzYsXG4gIDIyMTc2LFxuICAzOTYzMixcbiAgMjE5NzAsXG4gIC8vMTkwMC0xOTA5XG4gIDE5MTY4LFxuICA0MjQyMixcbiAgNDIxOTIsXG4gIDUzODQwLFxuICAxMTkzODEsXG4gIDQ2NDAwLFxuICA1NDk0NCxcbiAgNDQ0NTAsXG4gIDM4MzIwLFxuICA4NDM0MyxcbiAgLy8xOTEwLTE5MTlcbiAgMTg4MDAsXG4gIDQyMTYwLFxuICA0NjI2MSxcbiAgMjcyMTYsXG4gIDI3OTY4LFxuICAxMDkzOTYsXG4gIDExMTA0LFxuICAzODI1NixcbiAgMjEyMzQsXG4gIDE4ODAwLFxuICAvLzE5MjAtMTkyOVxuICAyNTk1OCxcbiAgNTQ0MzIsXG4gIDU5OTg0LFxuICAyODMwOSxcbiAgMjMyNDgsXG4gIDExMTA0LFxuICAxMDAwNjcsXG4gIDM3NjAwLFxuICAxMTY5NTEsXG4gIDUxNTM2LFxuICAvLzE5MzAtMTkzOVxuICA1NDQzMixcbiAgMTIwOTk4LFxuICA0NjQxNixcbiAgMjIxNzYsXG4gIDEwNzk1NixcbiAgOTY4MCxcbiAgMzc1ODQsXG4gIDUzOTM4LFxuICA0MzM0NCxcbiAgNDY0MjMsXG4gIC8vMTk0MC0xOTQ5XG4gIDI3ODA4LFxuICA0NjQxNixcbiAgODY4NjksXG4gIDE5ODcyLFxuICA0MjQxNixcbiAgODMzMTUsXG4gIDIxMTY4LFxuICA0MzQzMixcbiAgNTk3MjgsXG4gIDI3Mjk2LFxuICAvLzE5NTAtMTk1OVxuICA0NDcxMCxcbiAgNDM4NTYsXG4gIDE5Mjk2LFxuICA0Mzc0OCxcbiAgNDIzNTIsXG4gIDIxMDg4LFxuICA2MjA1MSxcbiAgNTU2MzIsXG4gIDIzMzgzLFxuICAyMjE3NixcbiAgLy8xOTYwLTE5NjlcbiAgMzg2MDgsXG4gIDE5OTI1LFxuICAxOTE1MixcbiAgNDIxOTIsXG4gIDU0NDg0LFxuICA1Mzg0MCxcbiAgNTQ2MTYsXG4gIDQ2NDAwLFxuICA0Njc1MixcbiAgMTAzODQ2LFxuICAvLzE5NzAtMTk3OVxuICAzODMyMCxcbiAgMTg4NjQsXG4gIDQzMzgwLFxuICA0MjE2MCxcbiAgNDU2OTAsXG4gIDI3MjE2LFxuICAyNzk2OCxcbiAgNDQ4NzAsXG4gIDQzODcyLFxuICAzODI1NixcbiAgLy8xOTgwLTE5ODlcbiAgMTkxODksXG4gIDE4ODAwLFxuICAyNTc3NixcbiAgMjk4NTksXG4gIDU5OTg0LFxuICAyNzQ4MCxcbiAgMjE5NTIsXG4gIDQzODcyLFxuICAzODYxMyxcbiAgMzc2MDAsXG4gIC8vMTk5MC0xOTk5XG4gIDUxNTUyLFxuICA1NTYzNixcbiAgNTQ0MzIsXG4gIDU1ODg4LFxuICAzMDAzNCxcbiAgMjIxNzYsXG4gIDQzOTU5LFxuICA5NjgwLFxuICAzNzU4NCxcbiAgNTE4OTMsXG4gIC8vMjAwMC0yMDA5XG4gIDQzMzQ0LFxuICA0NjI0MCxcbiAgNDc3ODAsXG4gIDQ0MzY4LFxuICAyMTk3NyxcbiAgMTkzNjAsXG4gIDQyNDE2LFxuICA4NjM5MCxcbiAgMjExNjgsXG4gIDQzMzEyLFxuICAvLzIwMTAtMjAxOVxuICAzMTA2MCxcbiAgMjcyOTYsXG4gIDQ0MzY4LFxuICAyMzM3OCxcbiAgMTkyOTYsXG4gIDQyNzI2LFxuICA0MjIwOCxcbiAgNTM4NTYsXG4gIDYwMDA1LFxuICA1NDU3NixcbiAgLy8yMDIwLTIwMjlcbiAgMjMyMDAsXG4gIDMwMzcxLFxuICAzODYwOCxcbiAgMTkxOTUsXG4gIDE5MTUyLFxuICA0MjE5MixcbiAgMTE4OTY2LFxuICA1Mzg0MCxcbiAgNTQ1NjAsXG4gIDU2NjQ1LFxuICAvLzIwMzAtMjAzOVxuICA0NjQ5NixcbiAgMjIyMjQsXG4gIDIxOTM4LFxuICAxODg2NCxcbiAgNDIzNTksXG4gIDQyMTYwLFxuICA0MzYwMCxcbiAgMTExMTg5LFxuICAyNzkzNixcbiAgNDQ0NDgsXG4gIC8vMjA0MC0yMDQ5XG4gIDg0ODM1LFxuICAzNzc0NCxcbiAgMTg5MzYsXG4gIDE4ODAwLFxuICAyNTc3NixcbiAgOTIzMjYsXG4gIDU5OTg0LFxuICAyNzQyNCxcbiAgMTA4MjI4LFxuICA0Mzc0NCxcbiAgLy8yMDUwLTIwNTlcbiAgNDE2OTYsXG4gIDUzOTg3LFxuICA1MTU1MixcbiAgNTQ2MTUsXG4gIDU0NDMyLFxuICA1NTg4OCxcbiAgMjM4OTMsXG4gIDIyMTc2LFxuICA0MjcwNCxcbiAgMjE5NzIsXG4gIC8vMjA2MC0yMDY5XG4gIDIxMjAwLFxuICA0MzQ0OCxcbiAgNDMzNDQsXG4gIDQ2MjQwLFxuICA0Njc1OCxcbiAgNDQzNjgsXG4gIDIxOTIwLFxuICA0Mzk0MCxcbiAgNDI0MTYsXG4gIDIxMTY4LFxuICAvLzIwNzAtMjA3OVxuICA0NTY4MyxcbiAgMjY5MjgsXG4gIDI5NDk1LFxuICAyNzI5NixcbiAgNDQzNjgsXG4gIDg0ODIxLFxuICAxOTI5NixcbiAgNDIzNTIsXG4gIDIxNzMyLFxuICA1MzYwMCxcbiAgLy8yMDgwLTIwODlcbiAgNTk3NTIsXG4gIDU0NTYwLFxuICA1NTk2OCxcbiAgOTI4MzgsXG4gIDIyMjI0LFxuICAxOTE2OCxcbiAgNDM0NzYsXG4gIDQxNjgwLFxuICA1MzU4NCxcbiAgNjIwMzQsXG4gIC8vMjA5MC0yMDk5XG4gIDU0NTYwXG4gIC8vMjEwMFxuXSwgJCA9IFtcIumbtlwiLCBcIuS4gFwiLCBcIuS6jFwiLCBcIuS4iVwiLCBcIuWbm1wiLCBcIuS6lFwiLCBcIuWFrVwiLCBcIuS4g1wiLCBcIuWFq1wiLCBcIuS5nVwiXSwgUSA9IFtcIuato1wiLCBcIuS6jFwiLCBcIuS4iVwiLCBcIuWbm1wiLCBcIuS6lFwiLCBcIuWFrVwiLCBcIuS4g1wiLCBcIuWFq1wiLCBcIuS5nVwiLCBcIuWNgVwiLCBcIuWGrFwiLCBcIuiFilwiXSwgWCA9IFtcIueUslwiLCBcIuS5mVwiLCBcIuS4mVwiLCBcIuS4gVwiLCBcIuaIilwiLCBcIuW3sVwiLCBcIuW6mlwiLCBcIui+m1wiLCBcIuWjrFwiLCBcIueZuFwiXSwgdHQgPSBbXCLlrZBcIiwgXCLkuJFcIiwgXCLlr4VcIiwgXCLlja9cIiwgXCLovrBcIiwgXCLlt7NcIiwgXCLljYhcIiwgXCLmnKpcIiwgXCLnlLNcIiwgXCLphYlcIiwgXCLmiIxcIiwgXCLkuqVcIl0sIGV0ID0gW1wi6bygXCIsIFwi54mbXCIsIFwi6JmOXCIsIFwi5YWUXCIsIFwi6b6ZXCIsIFwi6JuHXCIsIFwi6amsXCIsIFwi576KXCIsIFwi54y0XCIsIFwi6bihXCIsIFwi54uXXCIsIFwi54yqXCJdLCB2ID0gKHIpID0+IHtcbiAgbGV0IHQgPSAzNDg7XG4gIGZvciAobGV0IGUgPSAzMjc2ODsgZSA+IDg7IGUgPj49IDEpXG4gICAgdCArPSBtW3IgLSAxOTAwXSAmIGUgPyAxIDogMDtcbiAgcmV0dXJuIHQgKyBPKHIpO1xufSwgayA9IChyKSA9PiBtW3IgLSAxOTAwXSAmIDE1LCBPID0gKHIpID0+IGsocikgPyBtW3IgLSAxOTAwXSAmIDY1NTM2ID8gMzAgOiAyOSA6IDAsIFkgPSAocikgPT4gWFtyICUgMTBdICsgdHRbciAlIDEyXSwgYiA9IChyLCB0KSA9PiBtW3IgLSAxOTAwXSAmIDY1NTM2ID4+IHQgPyAzMCA6IDI5LCBydCA9IChyKSA9PiBldFsociAtIDQpICUgMTJdLCBvdCA9IChyKSA9PiB7XG4gIGNvbnN0IHQgPSBbXCLliJ1cIiwgXCLljYFcIiwgXCLlu79cIiwgXCLkuInljYFcIl07XG4gIGlmIChyID09PSAxMClcbiAgICByZXR1cm4gXCLliJ3ljYFcIjtcbiAgaWYgKHIgPT09IDIwKVxuICAgIHJldHVybiBcIuS6jOWNgVwiO1xuICBpZiAociA9PT0gMzApXG4gICAgcmV0dXJuIFwi5LiJ5Y2BXCI7XG4gIGNvbnN0IGUgPSBNYXRoLmZsb29yKHIgLyAxMCksIG8gPSByICUgMTA7XG4gIHJldHVybiB0W2VdICsgKG8gPyAkW29dIDogXCJcIik7XG59LCBGID0gKHIpID0+IHtcbiAgY29uc3QgdCA9IG5ldyBBcnJheSg3KS5maWxsKDApO1xuICBsZXQgZSA9IDAsIG8gPSAwO1xuICBjb25zdCBuID0gXyhuZXcgRGF0ZSgxOTAwLCAwLCAzMSkpLCBkID0gXyhyKTtcbiAgbGV0IGEgPSBkLmRpZmYobiwgXCJkYXlcIik7XG4gIHRbNV0gPSBhICsgNDAsIHRbNF0gPSAxNDtcbiAgbGV0IGkgPSAxOTAwO1xuICBmb3IgKDsgaSA8IDIxMDAgJiYgYSA+IDA7IGkrKylcbiAgICBlID0gdihpKSwgYSAtPSBlLCB0WzRdICs9IDEyO1xuICBhIDwgMCAmJiAoYSArPSBlLCBpLS0sIHRbNF0gLT0gMTIpLCB0WzBdID0gaSwgdFszXSA9IGkgLSAxODY0LCBvID0gayhpKSwgdFs2XSA9IDA7XG4gIGZvciAobGV0IHMgPSAxOyBzIDwgMTMgJiYgYSA+IDA7IHMrKylcbiAgICBvID4gMCAmJiBzID09PSBvICsgMSAmJiB0WzZdID09PSAwID8gKC0tcywgdFs2XSA9IDEsIGUgPSBPKGkpKSA6IGUgPSBiKGksIHMpLCB0WzZdID09PSAxICYmIHMgPT09IG8gKyAxICYmICh0WzZdID0gMCksIGEgLT0gZSwgdFs2XSA9PT0gMCAmJiB0WzRdKyssIHRbMV0gPSBzO1xuICByZXR1cm4gYSA9PT0gMCAmJiBvID4gMCAmJiB0WzZdID09PSAxID8gdFs2XSA9IDAgOiBhIDwgMCAmJiAoYSArPSBlLCB0WzFdLS0sIHRbNF0tLSksIHRbMl0gPSBhICsgMSwge1xuICAgIGRhdGU6IGQuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAvLyDlhazljobml6XmnJ9cbiAgICBsdW5hclllYXI6IHRbMF0sXG4gICAgLy8g5Yac5Y6G5bm05Lu9XG4gICAgbHVuYXJNb246IHRbMV0gKyAxLFxuICAgIC8vIOWGnOWOhuaciOS7vVxuICAgIGx1bmFyRGF5OiB0WzJdLFxuICAgIC8vIOWGnOWOhuaXpeacn1xuICAgIGlzTGVhcDogISF0WzZdLFxuICAgIC8vIOaYr+WQpumXsOaciFxuICAgIHpvZGlhYzogcnQodFswXSksXG4gICAgLy8g55Sf6IKWXG4gICAgeWVhckN5bDogWSh0WzNdKSxcbiAgICAvLyDlubTmn7FcbiAgICBtb25DeWw6IFkodFs0XSksXG4gICAgLy8g5pyI5p+xXG4gICAgZGF5Q3lsOiBZKHRbNV0pLFxuICAgIC8vIOaXpeafsVxuICAgIGx1bmFyWWVhckNOOiBgJHt0WzBdLnRvU3RyaW5nKCkuc3BsaXQoXCJcIikubWFwKChzKSA9PiAkW051bWJlcihzKV0pLmpvaW4oXCJcIil9YCxcbiAgICAvLyDlhpzljoblubTku73kuK3mlofooajnpLpcbiAgICBsdW5hck1vbkNOOiBgJHtRW3RbMV1dfeaciGAsXG4gICAgLy8g5Yac5Y6G5pyI5Lu95Lit5paH6KGo56S6XG4gICAgbHVuYXJEYXlDTjogb3QodFsyXSlcbiAgICAvLyDlhpzljobml6XmnJ/kuK3mlofooajnpLpcbiAgfTtcbn0sIEggPSAociwgdCkgPT4ge1xuICBjb25zdCBlID0gXyhyKSwgbyA9IF8odCksIG4gPSBbXTtcbiAgZm9yIChsZXQgZCA9IGU7IGQuaXNCZWZvcmUobykgfHwgZC5pc1NhbWUobywgXCJkYXlcIik7IGQgPSBkLmFkZCgxLCBcImRheVwiKSlcbiAgICBuLnB1c2goRihkKSk7XG4gIHJldHVybiBuO1xufSwgUiA9IChyKSA9PiB7XG4gIGNvbnN0IHQgPSBfKHIpLCBlID0gdC55ZWFyKCksIG8gPSB0Lm1vbnRoKCkgKyAxLCBuID0gdC5kYXRlKCk7XG4gIGxldCBkID0gMDtcbiAgZm9yIChsZXQgaCA9IDE5MDA7IGggPCBlOyBoKyspXG4gICAgZCArPSB2KGgpO1xuICBsZXQgYSA9IGsoZSk7XG4gIGZvciAobGV0IGggPSAxOyBoIDwgbzsgaCsrKVxuICAgIGQgKz0gYihlLCBoKSwgaCA9PT0gYSAmJiAoZCArPSBPKGUpKTtcbiAgZCArPSBuIC0gMTtcbiAgY29uc3QgaSA9IF8obmV3IERhdGUoMTkwMCwgMCwgMzEpKSwgcyA9IGkuYWRkKGQsIFwiZGF5XCIpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gIGxldCB1ID0gZCwgTDtcbiAgcmV0dXJuIGEgPT09IG8gJiYgKHUgKz0gYihlLCBvKSwgTCA9IGkuYWRkKHUsIFwiZGF5XCIpLmZvcm1hdChcIllZWVktTU0tRERcIikpLCB7XG4gICAgZGF0ZTogcyxcbiAgICBsZWFwTW9udGhEYXRlOiBMXG4gIH07XG59LCBhdCA9IHtcbiAgZ2V0THVuYXJEYXRlOiBGLFxuICBnZXRMdW5hckRhdGVzSW5SYW5nZTogSCxcbiAgZ2V0U29sYXJEYXRlRnJvbUx1bmFyOiBSXG59LCBudCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IGF0LFxuICBnZXRMdW5hckRhdGU6IEYsXG4gIGdldEx1bmFyRGF0ZXNJblJhbmdlOiBILFxuICBnZXRTb2xhckRhdGVGcm9tTHVuYXI6IFJcbn0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSksIGl0ID0ge1xuICAuLi56LFxuICAuLi5LLFxuICAuLi5udFxufTtcbmV4cG9ydCB7XG4gIGl0IGFzIGRlZmF1bHQsXG4gIFAgYXMgZmluZFdvcmtkYXksXG4gIEkgYXMgZ2V0RGF5RGV0YWlsLFxuICBVIGFzIGdldEhvbGlkYXlzSW5SYW5nZSxcbiAgRiBhcyBnZXRMdW5hckRhdGUsXG4gIEggYXMgZ2V0THVuYXJEYXRlc0luUmFuZ2UsXG4gIFIgYXMgZ2V0U29sYXJEYXRlRnJvbUx1bmFyLFxuICBTIGFzIGdldFNvbGFyVGVybURhdGUsXG4gIEcgYXMgZ2V0U29sYXJUZXJtcyxcbiAgSiBhcyBnZXRTb2xhclRlcm1zSW5SYW5nZSxcbiAgVyBhcyBnZXRXb3JrZGF5c0luUmFuZ2UsXG4gIFQgYXMgaXNIb2xpZGF5LFxuICBxIGFzIGlzSW5MaWV1LFxuICBmIGFzIGlzV29ya2RheVxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHNCQUFBLENBQUE7QUFBQUMsU0FBQUQscUJBQUE7RUFBQUUsYUFBQUEsTUFBQUM7RUFBQUMsY0FBQUEsTUFBQUM7RUFBQUMsb0JBQUFBLE1BQUFDO0VBQUFDLGNBQUFBLE1BQUFDO0VBQUFDLHNCQUFBQSxNQUFBQztFQUFBQyx1QkFBQUEsTUFBQUM7RUFBQUMsa0JBQUFBLE1BQUFDO0VBQUFDLGVBQUFBLE1BQUFDO0VBQUFDLHNCQUFBQSxNQUFBQztFQUFBQyxvQkFBQUEsTUFBQUM7RUFBQUMsV0FBQUEsTUFBQUM7RUFBQUMsVUFBQUEsTUFBQUM7RUFBQUMsV0FBQUEsTUFBQUM7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUE5QixtQkFBQTtBQ0FBLElBQUkrQixJQUFJQyxPQUFPQztBQUNmLElBQUlDLElBQUlBLENBQUNDLEdBQUdDLEdBQUdDLE1BQU1ELEtBQUtELElBQUlKLEVBQUVJLEdBQUdDLEdBQUc7RUFBRUUsWUFBWTtFQUFJQyxjQUFjO0VBQUlDLFVBQVU7RUFBSUMsT0FBT0o7QUFBRSxDQUFDLElBQUlGLEVBQUVDLENBQUMsSUFBSUM7QUFDN0csSUFBSUssSUFBSUEsQ0FBQ1AsR0FBR0MsR0FBR0MsT0FBT0gsRUFBRUMsR0FBRyxPQUFPQyxLQUFLLFdBQVdBLElBQUksS0FBS0EsR0FBR0MsQ0FBQyxHQUFHQTtBQUNsRSxJQUFNTSxJQUFJLE1BQU1DLEdBQUU7RUFDaEJDLFlBQVlULEdB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QUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVrQixFQUFFLEdBQUcsQ0FBQyxFQUFFRCxHQUFHLEdBQUcsQ0FBQyxFQUFFN0UsRUFBRSxFQUFFRCxFQUFFLEdBQUcsQ0FBQyxFQUFFOEUsR0FBRyxHQUFHLENBQUMsRUFBRXRFLEVBQUUsRUFBRVIsRUFBRSxHQUFHLENBQUMsRUFBRThFLEdBQUcsR0FBRyxDQUFDLEVBQUVqQixFQUFFLEdBQUcsQ0FBQyxFQUFFa0IsRUFBRSxHQUFHLENBQUMsRUFBRXRCLEVBQUUsRUFBRXpELEVBQUUsR0FBRyxDQUFDLEVBQUVrRixFQUFFLEVBQUVsRixFQUFFLEdBQUcsQ0FBQyxFQUFFb0IsRUFBRSxFQUFFcEIsRUFBRSxJQUFJLENBQUMsRUFBRThFLEdBQUcsSUFBSSxDQUFDLEVBQUVqQixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLElBQUksRUFBRSxFQUFFa0IsRUFBRSxJQUFJLENBQUMsRUFBRUQsR0FBRyxJQUFJLENBQUMsR0FBRzlFLEVBQUVtRSxFQUFFLElBQUksRUFBRWEsR0FBRyxFQUFFaEYsRUFBRSxHQUFHLENBQUMsRUFBRThFLEdBQUcsR0FBRyxDQUFDLEVBQUVqQixFQUFFLEdBQUcsQ0FBQyxFQUFFaUIsR0FBRyxHQUFHLENBQUMsRUFBRUMsRUFBRSxHQUFHLENBQUMsRUFBRUQsR0FBRyxHQUFHLENBQUMsRUFBRUcsRUFBRSxFQUFFakYsRUFBRSxHQUFHLENBQUMsRUFBRThFLEdBQUcsR0FBRyxFQUFFLEVBQUVqQixFQUFFLEdBQUcsRUFBRSxFQUFFaUIsR0FBRyxHQUFHLEVBQUUsRUFBRUMsRUFBRSxHQUFHLEVBQUUsRUFBRUQsR0FBRyxHQUFHLEVBQUUsRUFBRTdFLEVBQUUsRUFBRUQsRUFBRSxHQUFHLENBQUMsRUFBRThFLEdBQUcsR0FBRyxDQUFDLEVBQUVqQixFQUFFLEdBQUcsQ0FBQyxFQUFFa0IsRUFBRSxHQUFHLENBQUMsRUFBRXZFLEVBQUUsRUFBRVIsRUFBRSxHQUFHLEVBQUUsRUFBRThFLEdBQUcsR0FBRyxDQUFD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R0FBRyxDQUFDLEVBQUU4RSxHQUFHLEdBQUcsQ0FBQyxFQUFFRyxFQUFFLEVBQUVqRixFQUFFLEdBQUcsRUFBRSxFQUFFOEUsR0FBRyxHQUFHLENBQUMsRUFBRWpCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVrQixFQUFFLEdBQUcsQ0FBQyxFQUFFRCxHQUFHLEdBQUcsQ0FBQyxFQUFFdEUsRUFBRSxFQUFFUixFQUFFLEdBQUcsQ0FBQyxFQUFFOEUsR0FBRyxHQUFHLENBQUMsRUFBRWpCLEVBQUUsR0FBRyxFQUFFLEVBQUVpQixHQUFHLEdBQUcsRUFBRSxFQUFFQyxFQUFFLEdBQUcsQ0FBQyxFQUFFRCxHQUFHLEdBQUcsQ0FBQyxFQUFFMUQsRUFBRSxFQUFFcEIsRUFBRSxJQUFJLENBQUMsRUFBRThFLEdBQUcsSUFBSSxDQUFDLEVBQUVqQixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLElBQUksQ0FBQyxFQUFFa0IsRUFBRSxJQUFJLENBQUMsRUFBRUQsR0FBRyxJQUFJLENBQUMsRUFBRUUsR0FBRyxFQUFFbkIsRUFBRSxJQUFJLEVBQUUsRUFBRWlCLEdBQUcsSUFBSSxFQUFFLEdBQUc5RSxFQUFFbUUsRUFBRSxJQUFJLEVBQUVhLEdBQUcsRUFBRWhGLEVBQUUsR0FBRyxDQUFDLEVBQUU4RSxHQUFHLEdBQUcsQ0FBQyxFQUFFRyxFQUFFLEVBQUVqRixFQUFFLEdBQUcsQ0FBQyxFQUFFOEUsR0FBRyxHQUFHLEVBQUUsRUFBRWpCLEVBQUUsR0FBRyxDQUFDLEVBQUVpQixHQUFHLEdBQUcsQ0FBQyxFQUFFQyxFQUFFLEdBQUcsRUFBRSxFQUFFRCxHQUFHLEdBQUcsRUFBRSxFQUFFdEUsRUFBRSxFQUFFUixFQUFFLEdBQUcsQ0FBQyxFQUFFOEUsR0FBRyxHQUFHLENBQUMsRUFBRWpCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVrQixFQUFFLEdBQUcsQ0FBQyxFQUFFRCxHQUFHLEdBQUcsQ0FBQyxFQUFFMUQsRUFBRSxFQUFFcEIsRUFBRSxJQUFJ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c0JDO0FBQ3hCLEdBQUcrRyxPQUFPQyxhQUFhO0VBQUUxRixPQUFPO0FBQVMsQ0FBQyxDQUFDO0FBeE0zQyxJQXdNOEM0RSxJQUFJO0VBQ2hEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBOztBQUFBO0FBcmFGLElBdWFHa0QsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUc7QUF2YXhELElBdWEyREMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0FBdmExSCxJQXVhNkhDLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0FBdmFsTCxJQXVhcUxDLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRztBQXZhclAsSUF1YXdQQyxLQUFLLENBQUMsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUc7QUF2YXhULElBdWEyVEMsSUFBS3pJLE9BQU07QUFDcFUsTUFBSUMsSUFBSTtBQUNSLFdBQVNDLElBQUksT0FBT0EsSUFBSSxHQUFHQSxNQUFNLEVBQy9CRCxNQUFLaUYsRUFBRWxGLElBQUksSUFBSSxJQUFJRSxJQUFJLElBQUk7QUFDN0IsU0FBT0QsSUFBSXlJLEVBQUUxSSxDQUFDO0FBQ2hCO0FBNWFBLElBNGFHMkksSUFBSzNJLE9BQU1rRixFQUFFbEYsSUFBSSxJQUFJLElBQUk7QUE1YTVCLElBNGFnQzBJLElBQUsxSSxPQUFNMkksRUFBRTNJLENBQUMsSUFBSWtGLEVBQUVsRixJQUFJLElBQUksSUFBSSxRQUFRLEtBQUssS0FBSztBQTVhbEYsSUE0YXFGNEksSUFBSzVJLE9BQU1zSSxFQUFFdEksSUFBSSxFQUFFLElBQUl1SSxHQUFHdkksSUFBSSxFQUFFO0FBNWFySCxJQTRhd0g2SSxJQUFJQSxDQUFDN0ksR0FBR0MsTUFBTWlGLEVBQUVsRixJQUFJLElBQUksSUFBSSxTQUFTQyxJQUFJLEtBQUs7QUE1YXRLLElBNGEwSzZJLEtBQU05SSxPQUFNd0ksSUFBSXhJLElBQUksS0FBSyxFQUFFO0FBNWFyTSxJQTRhd00rSSxLQUFNL0ksT0FBTTtBQUNsTixRQUFNQyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssSUFBSTtBQUM5QixNQUFJRCxNQUFNLEdBQ1IsUUFBTztBQUNULE1BQUlBLE1BQU0sR0FDUixRQUFPO0FBQ1QsTUFBSUEsTUFBTSxHQUNSLFFBQU87QUFDVCxRQUFNRSxJQUFJcUIsS0FBS0MsTUFBTXhCLElBQUksRUFBRSxHQUFHbUIsSUFBSW5CLElBQUk7QUFDdEMsU0FBT0MsRUFBRUMsQ0FBQyxLQUFLaUIsSUFBSWlILEVBQUVqSCxDQUFDLElBQUk7QUFDNUI7QUF0YkEsSUFzYkc3QyxJQUFLMEIsT0FBTTtBQUNaLFFBQU1DLElBQUksSUFBSThELE1BQU0sQ0FBQyxFQUFFaUYsS0FBSyxDQUFDO0FBQzdCLE1BQUk5SSxJQUFJLEdBQUdpQixJQUFJO0FBQ2YsUUFBTUMsSUFBSXdDLEVBQUUsSUFBSWhELEtBQUssTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHNkMsSUFBSUcsRUFBRTVELENBQUM7QUFDM0MsTUFBSTBELElBQUlELEVBQUV2QyxLQUFLRSxHQUFHLEtBQUs7QUFDdkJuQixJQUFFLENBQUMsSUFBSXlELElBQUksSUFBSXpELEVBQUUsQ0FBQyxJQUFJO0FBQ3RCLE1BQUk4RSxJQUFJO0FBQ1IsU0FBT0EsSUFBSSxRQUFRckIsSUFBSSxHQUFHcUIsSUFDeEI3RSxLQUFJdUksRUFBRTFELENBQUMsR0FBR3JCLEtBQUt4RCxHQUFHRCxFQUFFLENBQUMsS0FBSztBQUM1QnlELE1BQUksTUFBTUEsS0FBS3hELEdBQUc2RSxLQUFLOUUsRUFBRSxDQUFDLEtBQUssS0FBS0EsRUFBRSxDQUFDLElBQUk4RSxHQUFHOUUsRUFBRSxDQUFDLElBQUk4RSxJQUFJLE1BQU01RCxJQUFJd0gsRUFBRTVELENBQUMsR0FBRzlFLEVBQUUsQ0FBQyxJQUFJO0FBQ2hGLFdBQVNnRixJQUFJLEdBQUdBLElBQUksTUFBTXZCLElBQUksR0FBR3VCLElBQy9COUQsS0FBSSxLQUFLOEQsTUFBTTlELElBQUksS0FBS2xCLEVBQUUsQ0FBQyxNQUFNLEtBQUssRUFBRWdGLEdBQUdoRixFQUFFLENBQUMsSUFBSSxHQUFHQyxJQUFJd0ksRUFBRTNELENBQUMsS0FBSzdFLElBQUkySSxFQUFFOUQsR0FBR0UsQ0FBQyxHQUFHaEYsRUFBRSxDQUFDLE1BQU0sS0FBS2dGLE1BQU05RCxJQUFJLE1BQU1sQixFQUFFLENBQUMsSUFBSSxJQUFJeUQsS0FBS3hELEdBQUdELEVBQUUsQ0FBQyxNQUFNLEtBQUtBLEVBQUUsQ0FBQyxLQUFLQSxFQUFFLENBQUMsSUFBSWdGO0FBQzlKLFNBQU92QixNQUFNLEtBQUt2QyxJQUFJLEtBQUtsQixFQUFFLENBQUMsTUFBTSxJQUFJQSxFQUFFLENBQUMsSUFBSSxJQUFJeUQsSUFBSSxNQUFNQSxLQUFLeEQsR0FBR0QsRUFBRSxDQUFDLEtBQUtBLEVBQUUsQ0FBQyxNQUFNQSxFQUFFLENBQUMsSUFBSXlELElBQUksR0FBRztJQUNsR1AsTUFBTU0sRUFBRXZCLE9BQU8sWUFBWTs7SUFFM0IrRyxXQUFXaEosRUFBRSxDQUFDOztJQUVkaUosVUFBVWpKLEVBQUUsQ0FBQyxJQUFJOztJQUVqQmtKLFVBQVVsSixFQUFFLENBQUM7O0lBRWJtSixRQUFRLENBQUMsQ0FBQ25KLEVBQUUsQ0FBQzs7SUFFYm9KLFFBQVFQLEdBQUc3SSxFQUFFLENBQUMsQ0FBQzs7SUFFZnFKLFNBQVNWLEVBQUUzSSxFQUFFLENBQUMsQ0FBQzs7SUFFZnNKLFFBQVFYLEVBQUUzSSxFQUFFLENBQUMsQ0FBQzs7SUFFZHVKLFFBQVFaLEVBQUUzSSxFQUFFLENBQUMsQ0FBQzs7SUFFZHdKLGFBQUEsR0FBQS9FLE9BQWdCekUsRUFBRSxDQUFDLEVBQUVvQyxTQUFTLEVBQUVxSCxNQUFNLEVBQUUsRUFBRW5FLElBQUtOLE9BQU1tRCxFQUFFdUIsT0FBTzFFLENBQUMsQ0FBQyxDQUFDLEVBQUUyRSxLQUFLLEVBQUUsQ0FBQzs7SUFFM0VDLFlBQUEsR0FBQW5GLE9BQWUyRCxFQUFFcEksRUFBRSxDQUFDLENBQUMsR0FBQyxHQUFBOztJQUV0QjZKLFlBQVlmLEdBQUc5SSxFQUFFLENBQUMsQ0FBQzs7RUFFckI7QUFDRjtBQTVkQSxJQTRkR3pCLElBQUlBLENBQUN3QixHQUFHQyxNQUFNO0FBQ2YsUUFBTUMsSUFBSTBELEVBQUU1RCxDQUFDLEdBQUdtQixJQUFJeUMsRUFBRTNELENBQUMsR0FBR21CLElBQUksQ0FBQTtBQUM5QixXQUFTcUMsSUFBSXZELEdBQUd1RCxFQUFFSixTQUFTbEMsQ0FBQyxLQUFLc0MsRUFBRUYsT0FBT3BDLEdBQUcsS0FBSyxHQUFHc0MsSUFBSUEsRUFBRTFCLElBQUksR0FBRyxLQUFLLEVBQ3JFWCxHQUFFNEcsS0FBSzFKLEVBQUVtRixDQUFDLENBQUM7QUFDYixTQUFPckM7QUFDVDtBQWplQSxJQWllRzFDLElBQUtzQixPQUFNO0FBQ1osUUFBTUMsSUFBSTJELEVBQUU1RCxDQUFDLEdBQUdFLElBQUlELEVBQUVnRCxLQUFLLEdBQUc5QixJQUFJbEIsRUFBRWlELE1BQU0sSUFBSSxHQUFHOUIsSUFBSW5CLEVBQUVrRCxLQUFLO0FBQzVELE1BQUlNLElBQUk7QUFDUixXQUFTc0csSUFBSSxNQUFNQSxJQUFJN0osR0FBRzZKLElBQ3hCdEcsTUFBS2dGLEVBQUVzQixDQUFDO0FBQ1YsTUFBSXJHLElBQUlpRixFQUFFekksQ0FBQztBQUNYLFdBQVM2SixJQUFJLEdBQUdBLElBQUk1SSxHQUFHNEksSUFDckJ0RyxNQUFLb0YsRUFBRTNJLEdBQUc2SixDQUFDLEdBQUdBLE1BQU1yRyxNQUFNRCxLQUFLaUYsRUFBRXhJLENBQUM7QUFDcEN1RCxPQUFLckMsSUFBSTtBQUNULFFBQU0yRCxJQUFJbkIsRUFBRSxJQUFJaEQsS0FBSyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUdxRSxJQUFJRixFQUFFaEQsSUFBSTBCLEdBQUcsS0FBSyxFQUFFdkIsT0FBTyxZQUFZO0FBQzNFLE1BQUk0RixJQUFJckUsR0FBR3VHO0FBQ1gsU0FBT3RHLE1BQU12QyxNQUFNMkcsS0FBS2UsRUFBRTNJLEdBQUdpQixDQUFDLEdBQUc2SSxJQUFJakYsRUFBRWhELElBQUkrRixHQUFHLEtBQUssRUFBRTVGLE9BQU8sWUFBWSxJQUFJO0lBQzFFaUIsTUFBTThCO0lBQ05nRixlQUFlRDtFQUNqQjtBQUNGO0FBaGZBLElBZ2ZHRSxLQUFLO0VBQ043TCxjQUFjQztFQUNkQyxzQkFBc0JDO0VBQ3RCQyx1QkFBdUJDO0FBQ3pCO0FBcGZBLElBb2ZHeUwsS0FBcUJ0Syx1QkFBT2dHLE9BQXVCaEcsdUJBQU9DLGVBQWU7RUFDMUVnRyxXQUFXO0VBQ1hzRSxTQUFTRjtFQUNUN0wsY0FBY0M7RUFDZEMsc0JBQXNCQztFQUN0QkMsdUJBQXVCQztBQUN6QixHQUFHcUgsT0FBT0MsYUFBYTtFQUFFMUYsT0FBTztBQUFTLENBQUMsQ0FBQztBQTFmM0MsSUEwZjhDK0osS0FBSztFQUNqRCxHQUFHekU7RUFDSCxHQUFHdUM7RUFDSCxHQUFHZ0M7QUFDTDsiLAogICJuYW1lcyI6IFsiQ2hpbmVzZURheXNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJmaW5kV29ya2RheSIsICJQIiwgImdldERheURldGFpbCIsICJJIiwgImdldEhvbGlkYXlzSW5SYW5nZSIsICJVIiwgImdldEx1bmFyRGF0ZSIsICJGIiwgImdldEx1bmFyRGF0ZXNJblJhbmdlIiwgIkgiLCAiZ2V0U29sYXJEYXRlRnJvbUx1bmFyIiwgIlIiLCAiZ2V0U29sYXJUZXJtRGF0ZSIsICJTIiwgImdldFNvbGFyVGVybXMiLCAiRyIsICJnZXRTb2xhclRlcm1zSW5SYW5nZSIsICJKIiwgImdldFdvcmtkYXlzSW5SYW5nZSIsICJXIiwgImlzSG9saWRheSIsICJUIiwgImlzSW5MaWV1IiwgInEiLCAiaXNXb3JrZGF5IiwgImYiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgIngiLCAiT2JqZWN0IiwgImRlZmluZVByb3BlcnR5IiwgIkIiLCAiciIsICJ0IiwgImUiLCAiZW51bWVyYWJsZSIsICJjb25maWd1cmFibGUiLCAid3JpdGFibGUiLCAidmFsdWUiLCAiYyIsICJsIiwgImwyIiwgImNvbnN0cnVjdG9yIiwgIl9kYXRlIiwgIkRhdGUiLCAidG9EYXRlIiwgImlzTmFOIiwgImdldFRpbWUiLCAicmVwbGFjZSIsICJpc1ZhbGlkIiwgImRpZmYiLCAibyIsICJuIiwgImdldEZ1bGxZZWFyIiwgImdldE1vbnRoIiwgIk1hdGgiLCAiZmxvb3IiLCAic3RhcnRPZiIsICJzZXRNb250aCIsICJzZXREYXRlIiwgInNldEhvdXJzIiwgImVuZE9mIiwgImdldERhdGUiLCAiYWRkIiwgInNldEZ1bGxZZWFyIiwgInN1YnRyYWN0IiwgImZvcm1hdCIsICJZWVlZIiwgIk1NIiwgInRvU3RyaW5nIiwgInBhZFN0YXJ0IiwgIkREIiwgIkhIIiwgImdldEhvdXJzIiwgIm1tIiwgImdldE1pbnV0ZXMiLCAic3MiLCAiZ2V0U2Vjb25kcyIsICJkZGRkIiwgImRheXNPZldlZWsiLCAiZ2V0RGF5IiwgInllYXIiLCAibW9udGgiLCAiZGF0ZSIsICJkYXkiLCAiaXNCZWZvcmUiLCAiaXNBZnRlciIsICJpc1NhbWUiLCAiaXNCZXR3ZWVuIiwgImQiLCAiYSIsICJNIiwgIl8iLCAidyIsICJEIiwgIkFycmF5IiwgImZyb20iLCAibGVuZ3RoIiwgIkEiLCAieSIsICJkYXlEZXRhaWxzIiwgIm1hcmsiLCAiaG9saWRheSIsICJzYXZlIiwgIkVycm9yIiwgImRheVR5cGUiLCAiY29uY2F0IiwgImhvbGlkYXlzIiwgIndvcmtkYXlzIiwgImluTGlldURheXMiLCAidG8iLCAiaSIsICJueSIsICJzIiwgIm0iLCAiQyIsICJnIiwgInAiLCAiaiIsICJtYXAiLCAid29yayIsICJuYW1lIiwgImZpbHRlciIsICJhYnMiLCAieiIsICJmcmVlemUiLCAiX19wcm90b19fIiwgIlN5bWJvbCIsICJ0b1N0cmluZ1RhZyIsICJWIiwgInRoZV9iZWdpbm5pbmdfb2Zfc3ByaW5nIiwgInJhaW5fd2F0ZXIiLCAidGhlX3dha2luZ19vZl9pbnNlY3RzIiwgInRoZV9zcHJpbmdfZXF1aW5veCIsICJwdXJlX2JyaWdodG5lc3MiLCAiZ3JhaW5fcmFpbiIsICJ0aGVfYmVnaW5uaW5nX29mX3N1bW1lciIsICJsZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW4iLCAiZ3JhaW5faW5fYmVhcmQiLCAidGhlX3N1bW1lcl9zb2xzdGljZSIsICJsZXNzZXJfaGVhdCIsICJncmVhdGVyX2hlYXQiLCAidGhlX2JlZ2lubmluZ19vZl9hdXR1bW4iLCAidGhlX2VuZF9vZl9oZWF0IiwgIndoaXRlX2RldyIsICJ0aGVfYXV0dW1uX2VxdWlub3giLCAiY29kZV9kZXciLCAiZnJvc3RfZGVzY2VudCIsICJ0aGVfYmVnaW5uaW5nX29mX3dpbnRlciIsICJsZXNzZXJfc25vdyIsICJncmVhdGVyX3Nub3ciLCAidGhlX3dpbnRlcl9zb2xzdGljZSIsICJsZXNzZXJfY29sZCIsICJncmVhdGVyX2NvbGQiLCAiTiIsICJaIiwgIkUiLCAiaW5jbHVkZXMiLCAidSIsICJmb3JFYWNoIiwgInB1c2giLCAidGVybSIsICJpbmRleCIsICJLIiwgIiQiLCAiUSIsICJYIiwgInR0IiwgImV0IiwgInYiLCAiTyIsICJrIiwgIlkiLCAiYiIsICJydCIsICJvdCIsICJmaWxsIiwgImx1bmFyWWVhciIsICJsdW5hck1vbiIsICJsdW5hckRheSIsICJpc0xlYXAiLCAiem9kaWFjIiwgInllYXJDeWwiLCAibW9uQ3lsIiwgImRheUN5bCIsICJsdW5hclllYXJDTiIsICJzcGxpdCIsICJOdW1iZXIiLCAiam9pbiIsICJsdW5hck1vbkNOIiwgImx1bmFyRGF5Q04iLCAiaCIsICJMIiwgImxlYXBNb250aERhdGUiLCAiYXQiLCAibnQiLCAiZGVmYXVsdCIsICJpdCJdCn0K
