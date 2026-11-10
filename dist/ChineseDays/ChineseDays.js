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
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
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
var u = (r) => _(r).startOf("day");
var M = (r, t) => {
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
    for (const [o, n] of Object.entries(W)) {
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
    const o = _(`${this.dayDetails.year}-${t}-${e}`).format("YYYY-MM-DD"), n = this.getHolidayDays(this.dayDetails.year, this.dayDetails.holiday), i = `${this.dayDetails.holiday},${n}`;
    return a === 2 ? this.holidays[o] = i : a === 1 ? this.workdays[o] = i : a === 3 && (this.inLieuDays[o] = i), this;
  }
  to(t, e) {
    if (!this.dayDetails.holiday || !this.dayDetails.year || !this.dayDetails.month || !this.dayDetails.day) throw new Error("should set year/month/day before saving holiday range");
    const a = _(`${this.dayDetails.year}-${this.dayDetails.month}-${this.dayDetails.day}`), o = _(`${this.dayDetails.year}-${t}-${e}`);
    if (o.isBefore(a) || o.isSame(a)) throw new Error("end date should be after start date");
    const n = this.getHolidayDays(this.dayDetails.year, this.dayDetails.holiday), i = `${this.dayDetails.holiday},${n}`, d = o.diff(a, "day");
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
  return r.y(2027).ny().r(1, 1).to(1, 3).s().r(2, 5).to(2, 13).w(1, 31).w(2, 14).i(2, 11).i(2, 12).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 5).w(5, 8).i(5, 5).d().r(6, 9).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).i(10, 7).m().r(9, 15), r.y(2026).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(2, 15).to(2, 23).w(2, 14).w(2, 28).i(2, 20).i(2, 23).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(5, 9).i(5, 5).d().r(6, 19).to(6, 21).m().r(9, 25).to(9, 27).n().r(10, 1).to(10, 7).w(9, 20).w(10, 10).i(10, 6).i(10, 7), r.y(2025).ny().r(1, 1).s().r(1, 28).to(2, 4).w(1, 26).w(2, 8).i(2, 3).i(2, 4).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 27).i(5, 5).d().r(5, 31).to(6, 2).n().r(10, 1).to(10, 8).w(9, 28).w(10, 11).i(10, 7).i(10, 8).m().r(10, 6), r.y(2024).ny().r(1, 1).s().r(2, 10).to(2, 17).w(2, 4).w(2, 18).i(2, 15).to(2, 16).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(5, 1).to(5, 5).w(4, 28).w(5, 11).i(5, 2).to(5, 3).d().r(6, 10).m().r(9, 15).to(9, 17).w(9, 14).i(9, 16).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2023).ny().r(1, 1).to(1, 2).s().r(1, 21).to(1, 27).w(1, 28).to(1, 29).i(1, 26).to(1, 27).t().r(4, 5).l().r(4, 29).to(5, 3).w(4, 23).w(5, 6).i(5, 2).to(5, 3).d().r(6, 22).to(6, 24).w(6, 25).i(6, 23).m().r(9, 29).n().r(9, 30).to(10, 6).w(10, 7).to(10, 8).i(10, 5).to(10, 6), r.y(2022).ny().r(1, 1).to(1, 3).s().r(1, 31).to(2, 6).w(1, 29).w(1, 30).i(2, 3).to(2, 4).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 4).w(4, 24).w(5, 7).i(5, 3).to(5, 4).d().r(6, 3).to(6, 5).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).w(10, 9).i(10, 6).to(10, 7).ny().r(12, 31), r.y(2021).ny().r(1, 1).to(1, 3).s().r(2, 11).to(2, 17).w(2, 7).w(2, 20).i(2, 16).to(2, 17).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 5).w(4, 25).w(5, 8).i(5, 4).to(5, 5).d().r(6, 12).to(6, 14).m().r(9, 19).to(9, 21).w(9, 18).i(9, 20).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), r.y(2020).ny().r(1, 1).s().r(1, 24).to(2, 2).w(1, 19).i(1, 29).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 26).w(5, 9).i(5, 4).to(5, 5).d().r(6, 25).to(6, 27).w(6, 28).i(6, 26).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8), r.y(2019).ny().r(1, 1).s().r(2, 4).to(2, 10).w(2, 2).to(2, 3).i(2, 4).i(2, 8).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 4).w(4, 28).w(5, 5).i(5, 2).i(5, 3).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2018).ny().r(1, 1).s().r(2, 15).to(2, 21).w(2, 11).w(2, 24).i(2, 19).to(2, 21).t().r(4, 5).to(4, 7).w(4, 8).i(4, 6).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 18).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).m().r(9, 24).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), r.y(2017).ny().r(1, 1).to(1, 2).s().r(1, 27).to(2, 2).w(1, 22).w(2, 4).i(2, 1).to(2, 2).t().r(4, 2).to(4, 4).w(4, 1).i(4, 3).l().r(5, 1).d().r(5, 28).to(5, 30).w(5, 27).i(5, 29).n().r(10, 1).to(10, 8).w(9, 30).i(10, 6).m().r(10, 4), r.y(2016).ny().r(1, 1).s().r(2, 7).to(2, 13).w(2, 6).w(2, 14).i(2, 11).to(2, 12).t().r(4, 4).l().r(5, 1).to(5, 2).d().r(6, 9).to(6, 11).w(6, 12).i(6, 10).m().r(9, 15).to(9, 17).w(9, 18).i(9, 16).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), r.y(2015).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(2, 18).to(2, 24).w(2, 15).w(2, 28).i(2, 23).to(2, 24).t().r(4, 5).to(4, 6).l().r(5, 1).d().r(6, 20).r(6, 22).m().r(9, 27).n().r(10, 1).to(10, 7).w(10, 10).i(10, 7).a().r(9, 3).to(9, 4).w(9, 6).i(9, 4), r.y(2014).ny().r(1, 1).s().r(1, 31).to(2, 6).w(1, 26).w(2, 8).i(2, 5).to(2, 6).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 2).m().r(9, 8).n().r(10, 1).to(10, 7).w(9, 28).w(10, 11).i(10, 6).to(10, 7), r.y(2013).ny().r(1, 1).to(1, 3).w(1, 5).to(1, 6).i(1, 2).to(1, 3).s().r(2, 9).to(2, 15).w(2, 16).to(2, 17).i(2, 14).to(2, 15).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(4, 29).to(5, 1).w(4, 27).to(4, 28).i(4, 29).to(4, 30).d().r(6, 10).to(6, 12).w(6, 8).to(6, 9).i(6, 10).to(6, 11).m().r(9, 19).to(9, 21).w(9, 22).i(9, 20).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2012).ny().r(1, 1).to(1, 3).i(1, 3).s().r(1, 22).to(1, 28).w(1, 21).w(1, 29).i(1, 26).to(1, 27).t().r(4, 2).to(4, 4).w(3, 31).w(4, 1).i(4, 2).to(4, 3).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 22).r(6, 24).m().r(9, 30).n().r(10, 1).to(10, 7).w(9, 29).i(10, 5), r.y(2011).ny().r(1, 1).to(1, 3).s().r(2, 2).to(2, 8).w(1, 30).w(2, 12).i(2, 7).to(2, 8).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 2).d().r(6, 4).r(6, 6).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7).ny().w(12, 31), r.y(2010).ny().r(1, 1).to(1, 3).s().r(2, 13).to(2, 19).w(2, 20).to(2, 21).i(2, 18).to(2, 19).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 3).d().r(6, 14).to(6, 16).w(6, 12).to(6, 13).i(6, 14).to(6, 15).m().r(9, 22).to(9, 24).w(9, 19).w(9, 25).i(9, 23).to(9, 24).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), r.y(2009).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(1, 25).to(1, 31).w(1, 24).w(2, 1).i(1, 29).to(1, 30).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).d().r(5, 28).to(5, 30).w(5, 31).i(5, 29).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8).m().r(10, 3), r.y(2008).ny().r(1, 1).s().r(2, 6).to(2, 12).w(2, 2).to(2, 3).i(2, 11).to(2, 12).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(9, 29).to(10, 5).w(9, 27).to(9, 28).i(9, 29).to(9, 30), r.y(2007).ny().r(1, 1).to(1, 3).i(1, 2).to(1, 3).s().r(2, 18).to(2, 24).w(2, 17).w(2, 25).i(2, 22).to(2, 23).l().r(5, 1).to(5, 7).w(4, 28).to(4, 29).i(5, 4).i(5, 7).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), r.y(2006).ny().r(1, 1).to(1, 3).s().r(1, 29).to(2, 4).w(1, 28).w(2, 5).i(2, 2).to(2, 3).l().r(5, 1).to(5, 7).w(4, 29).to(4, 30).i(5, 4).to(5, 5).n().r(10, 1).to(10, 7).w(9, 30).w(10, 8).i(10, 5).to(10, 6).ny().w(12, 30).to(12, 31), r.y(2005).ny().r(1, 1).to(1, 3).s().r(2, 9).to(2, 15).w(2, 5).to(2, 6).i(2, 14).to(2, 15).l().r(5, 1).to(5, 7).w(4, 30).w(5, 8).i(5, 5).to(5, 6).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), r.y(2004).ny().r(1, 1).s().r(1, 22).to(1, 28).w(1, 17).to(1, 18).i(1, 27).to(1, 28).l().r(5, 1).to(5, 7).w(5, 8).to(5, 9).i(5, 6).to(5, 7).n().r(10, 1).to(10, 7).w(10, 9).to(10, 10).i(10, 6).to(10, 7), {
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
  const t = u(r);
  if (!t.isValid()) throw new Error(`unsupported type ${typeof r}, expected type is Date or Dayjs`);
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
  if (t = u(t), r === 0) {
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
  const l = rt[`${r}_${e}`];
  return l && (s += l), _(`${r}-${t}-${s}`).format("YYYY-MM-DD");
};
var at = (r, t) => {
  const e = [];
  let a = u(r);
  const o = u(t || r);
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
  let e = u(r).subtract(1, "month");
  const a = u(t || r).add(1, "month"), o = [];
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
var dt = (r) => `${H[(r - 4) % 10]}${B[(r - 4) % 12]}年`;
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
    leapMonthCN: t ? `闰${A[t - 1]}月` : void 0,
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
    lunarYearCN: `${t[0].toString().split("").map((y) => v[Number(y)]).join("")}`,
    // 农历年份中文表示
    lunarMonCN: `${A[t[1]]}月`,
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
  for (let w = 1900; w < e; w++) n += x(w);
  const i = b(e);
  for (let w = 1; w < a; w++) n += g(e, w), w === i && (n += N(e));
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
var wt = {
  getLunarFestivals: U
};
var ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wt,
  getLunarFestivals: U
}, Symbol.toStringTag, {
  value: "Module"
}));
var ft = {
  ...tt,
  ...ot,
  ...ht,
  ...ut
};

})();

/* </nowiki> */

