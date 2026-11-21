/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT|attribution=2025-present dragon-fish}}'
 *
 * @base {@link hthttps://github.com/inpageedit/inpageedit-next/tree/master/packages/idb-plus}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/idb-plus}
 * @license MIT {@link https://github.com/inpageedit/inpageedit-next/blob/master/packages/idb-plus/LICENSE}
 */

/**
 * MIT License
 *
 * Copyright (c) 2025 dragon-fish
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

// dist/idb-plus/idb-plus.js
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
//! src/idb-plus/idb-plus.ts
var idb_plus_exports = {};
__export(idb_plus_exports, {
  IDBPlus: () => x,
  IDBPlusHelper: () => s
});
module.exports = __toCommonJS(idb_plus_exports);
var s;
((i) => {
  i.cache = /* @__PURE__ */ new Map(), i.defaults = Object.freeze({
    iterBatch: 100,
    retry: {
      attempts: 3,
      baseDelayMs: 16
    }
  }), i.sleep = (e) => new Promise((n) => setTimeout(n, e));
  function t(e) {
    const n = (e === null || e === void 0 ? void 0 : e.name) ?? "";
    return n === "AbortError" || n === "InvalidStateError" || n === "TransactionInactiveError" || n === "UnknownError";
  }
  i.shouldReconnect = t;
  async function a(e, n, r) {
    const w = Math.max(1, e.attempts);
    for (let y = 0; y < w; y++) try {
      return await n(y);
    } catch (d) {
      if (y === w - 1) throw d;
      await (r === null || r === void 0 ? void 0 : r(d, y));
      const u = e.baseDelayMs * Math.pow(2, y) + Math.floor(Math.random() * 10);
      await (0, i.sleep)(u);
    }
    throw new Error("withRetry exhausted unexpectedly");
  }
  i.withRetry = a;
  function o(e, n, r) {
    return new Promise((w, y) => {
      const d = indexedDB.open(e, n);
      d.onupgradeneeded = () => {
        try {
          const u = d.result, l = d.transaction;
          r === null || r === void 0 || r(u, l);
        } catch (u) {
          y(u);
        }
      }, d.onerror = () => y(d.error), d.onblocked = () => {
      }, d.onsuccess = () => {
        const u = d.result;
        u.onversionchange = () => {
          try {
            u.close();
          } finally {
            i.cache.delete(e);
          }
        }, w(u);
      };
    });
  }
  async function h(e, n, r) {
    var _r$indexes;
    let w = !e.objectStoreNames.contains(n), y = [];
    if (!w && r !== null && r !== void 0 && (_r$indexes = r.indexes) !== null && _r$indexes !== void 0 && _r$indexes.length) {
      const l = e.transaction(n, "readonly"), p = l.objectStore(n), g = new Set(Array.from(p.indexNames));
      y = (r.indexes || []).filter((m) => !g.has(m.name)), await new Promise((m, R) => {
        l.oncomplete = () => m(), l.onabort = () => R(l.error), l.onerror = () => R(l.error);
      });
    }
    if (!w && y.length === 0) return e;
    const d = e.version + 1;
    e.close();
    const u = await o(e.name, d, (l, p) => {
      let g;
      l.objectStoreNames.contains(n) ? g = p.objectStore(n) : g = l.createObjectStore(n, {
        keyPath: (r === null || r === void 0 ? void 0 : r.keyPath) ?? void 0,
        autoIncrement: !!(r !== null && r !== void 0 && r.autoIncrement)
      });
      for (const m of y) g.indexNames.contains(m.name) || g.createIndex(m.name, m.keyPath, m.options);
    });
    return u.onversionchange = () => {
      try {
        u.close();
      } finally {
        i.cache.delete(u.name);
      }
    }, u;
  }
  async function c(e, n, r) {
    let w = i.cache.get(e);
    return w ? (w = w.then((y) => h(y, n, r)), i.cache.set(e, w)) : (w = (async () => {
      const y = await o(e);
      return h(y, n, r);
    })(), i.cache.set(e, w)), w;
  }
  i.getDB = c;
  async function f(e) {
    const n = i.cache.get(e);
    if (i.cache.delete(e), n) try {
      (await n).close();
    } catch {
    }
  }
  i.closeConnection = f;
  function v(e) {
    return new Promise((n, r) => {
      e.onsuccess = () => n(e.result), e.onerror = () => r(e.error);
    });
  }
  i.asyncRequest = v;
  function S(e) {
    return new Promise((n, r) => {
      e.oncomplete = () => n(), e.onabort = () => r(e.error ?? new DOMException("Aborted", "AbortError")), e.onerror = () => r(e.error ?? new DOMException("TransactionError", "UnknownError"));
    });
  }
  i.waitTx = S;
})(s || (s = {}));
/**
 * IDB Plus
 *
 * 🗄️ Minimal Promise based IndexedDB Wrapper with Map-like API
 *
 * @author dragon-fish <dragon-fish@qq.com>
 * @license MIT
 */
var x = class {
  constructor(t, a, o = {}) {
    this.dbName = t, this.storeName = a, this.options = o;
  }
  get _iterBatch() {
    return this.options.iterBatch ?? s.defaults.iterBatch;
  }
  get _retryCfg() {
    const t = this.options.retry ?? s.defaults.retry;
    return {
      attempts: t.attempts ?? 3,
      baseDelayMs: t.baseDelayMs ?? 16
    };
  }
  async _withStore(t, a) {
    const o = this._retryCfg;
    return s.withRetry(o, async () => {
      const h = await s.getDB(this.dbName, this.storeName, this.options.ensure);
      try {
        const c = h.transaction(this.storeName, t), f = c.objectStore(this.storeName), v = await a(f);
        return await s.waitTx(c), v;
      } catch (c) {
        throw c;
      }
    }, async (h) => {
      s.shouldReconnect(h) && await s.closeConnection(this.dbName);
    });
  }
  async get(t) {
    return this._withStore("readonly", async (a) => {
      const o = await s.asyncRequest(a.get(t));
      return o === void 0 ? void 0 : o;
    });
  }
  async set(t, a) {
    return await this._withStore("readwrite", async (o) => {
      var _this$options$ensure;
      const c = ((_this$options$ensure = this.options.ensure) === null || _this$options$ensure === void 0 ? void 0 : _this$options$ensure.keyPath) != null ? o.put(a) : o.put(a, t);
      await s.asyncRequest(c);
    }), this;
  }
  async delete(t) {
    return this._withStore("readwrite", async (a) => {
      const o = await s.asyncRequest(a.get(t)) !== void 0;
      return await s.asyncRequest(a.delete(t)), o;
    });
  }
  async clear() {
    await this._withStore("readwrite", async (t) => {
      await s.asyncRequest(t.clear());
    });
  }
  async has(t) {
    return await this.get(t) !== void 0;
  }
  async count() {
    return this._withStore("readonly", async (t) => await s.asyncRequest(t.count()) ?? 0);
  }
  async *_iterateEntries() {
    let t = null, a = false;
    const o = Math.max(1, this._iterBatch);
    for (; !a; ) {
      const h = await this._withStore("readonly", async (c) => {
        const f = [], v = t === null ? void 0 : IDBKeyRange.lowerBound(t, true);
        return await new Promise((S, e) => {
          const n = c.openCursor(v);
          n.onerror = () => e(n.error), n.onsuccess = () => {
            const r = n.result;
            if (!r) {
              a = true, S();
              return;
            }
            f.push([r.key, r.value]), t = r.key, f.length >= o ? S() : r.continue();
          };
        }), f;
      });
      for (const c of h) yield c;
      if (h.length === 0) break;
    }
  }
  entries() {
    return this._iterateEntries();
  }
  async *keys() {
    for await (const [t] of this.entries()) yield t;
  }
  async *values() {
    for await (const [, t] of this.entries()) yield t;
  }
  [Symbol.asyncIterator]() {
    return this.entries()[Symbol.asyncIterator]();
  }
  async forEach(t) {
    for await (const [a, o] of this.entries()) await t(o, a, this);
  }
  async getMany(t) {
    const a = /* @__PURE__ */ new Map();
    for await (const o of t) a.set(o, void 0);
    return await this._withStore("readonly", async (o) => {
      await Promise.all(a.keys().map(async (h) => {
        const c = await s.asyncRequest(o.get(h));
        a.set(h, c === void 0 ? void 0 : c);
      }));
    }), a;
  }
  async setMany(t) {
    var _this$options$ensure2;
    const a = ((_this$options$ensure2 = this.options.ensure) === null || _this$options$ensure2 === void 0 ? void 0 : _this$options$ensure2.keyPath) != null;
    return await this._withStore("readwrite", async (o) => {
      for await (const [h, c] of t) {
        const f = a ? o.put(c) : o.put(c, h);
        await s.asyncRequest(f);
      }
    }), this;
  }
  async deleteMany(t) {
    let a = 0;
    return await this._withStore("readwrite", async (o) => {
      for await (const h of t) await s.asyncRequest(o.get(h)) !== void 0 && a++, await s.asyncRequest(o.delete(h));
    }), a;
  }
  async disconnect() {
    await s.closeConnection(this.dbName);
  }
};

})();

/* </nowiki> */

