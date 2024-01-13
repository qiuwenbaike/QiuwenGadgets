/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EditConflict}
 * @author 安忆 <i@anyi.in>
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

// dist/EditConflict/EditConflict.js
//! src/EditConflict/modules/constant.ts
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var WG_ACTION = mw.config.get("wgAction");
var WG_CUR_REVISION_ID = mw.config.get("wgCurRevisionId");
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_WIKI_ID = mw.config.get("wgWikiID");
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
//! src/EditConflict/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/EditConflict/options.json
var version = "2.0";
//! src/EditConflict/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("Qiuwen/1.1 (EditConflict/".concat(version, "; ").concat(WG_WIKI_ID, ")"));
//! src/EditConflict/modules/util/queryPageInfo.ts
var parameters = {
  action: "query",
  format: "json",
  formatversion: "2",
  prop: "revisions",
  rvprop: "ids"
};
var queryPageInfo = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (title) {
    try {
      return yield api.post({
        ...parameters,
        titles: title
      });
    } catch (error) {
      console.error("[EditConflict] Ajax error:", error);
      return {};
    }
  });
  return function queryPageInfo2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/EditConflict/modules/getCurrentRevisionId.ts
var getCurrentRevisionId = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (title) {
    const pageInfo = yield queryPageInfo(title);
    const {
      query
    } = pageInfo;
    if (!query) {
      return 0;
    }
    const [page] = query.pages;
    if (!page || page.missing) {
      return 0;
    }
    return page.revisions[0].revid;
  });
  return function getCurrentRevisionId2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/EditConflict/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Notice: (0, import_ext_gadget2.localize)({
      en: '<span>This page has been changed by someone else after you started editing. Copy your changes, refresh and start over to avoid edit conflicts.<a href="#" onclick="location.reload();return false;">Refresh</a></span>',
      ja: '<span>このページは他の人によって変更されています。編集衝突を避けるため、編集内容をコピーしてページを再読み込みし、編集を続けてください。<a href="#" onclick="location.reload();return false;">再読み込み</a></span>',
      "zh-hans": '<span>此页面已被他人更改。请复制您的编辑，然后刷新页面，重新开始编辑，以避免编辑冲突。<a href="#" onclick="location.reload();return false;">刷新页面</a></span>',
      "zh-hant": '<span>本頁已被他人更改。請將您的編輯複製，並重新載入頁面，然後繼續編輯，來避免編輯衝突。<a href="#" onclick="location.reload();return false;">重新載入</a></span>'
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EditConflict/modules/core.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var editConflict = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* () {
    let isContinue = true;
    void (0, import_ext_gadget3.getBody)().then(($body) => {
      $body.find("#wpSave").on("click", () => {
        isContinue = false;
      });
    });
    const checkEditConflict = /* @__PURE__ */ function() {
      var _ref4 = _asyncToGenerator(function* () {
        const pageRevisionId = yield getCurrentRevisionId(WG_PAGE_NAME);
        if (!pageRevisionId) {
          isContinue = false;
        } else if (pageRevisionId > WG_CUR_REVISION_ID) {
          isContinue = false;
          (0, import_ext_gadget4.toastify)({
            node: $(getMessage("Notice")).get(0),
            close: true,
            duration: -1
          }, "info");
        }
      });
      return function checkEditConflict2() {
        return _ref4.apply(this, arguments);
      };
    }();
    while (true) {
      yield checkEditConflict();
      if (!isContinue) {
        break;
      }
      yield (0, import_ext_gadget3.delay)(3 * 1e3);
    }
  });
  return function editConflict2() {
    return _ref3.apply(this, arguments);
  };
}();
//! src/EditConflict/EditConflict.ts
if (IS_WG_EDIT_OR_SUBMIT_ACTION && WG_CUR_REVISION_ID) {
  void editConflict();
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Q29uZmxpY3QvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9FZGl0Q29uZmxpY3Qvb3B0aW9ucy5qc29uIiwgInNyYy9FZGl0Q29uZmxpY3QvbW9kdWxlcy9hcGkudHMiLCAic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL3V0aWwvcXVlcnlQYWdlSW5mby50cyIsICJzcmMvRWRpdENvbmZsaWN0L21vZHVsZXMvZ2V0Q3VycmVudFJldmlzaW9uSWQudHMiLCAic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRDb25mbGljdC9FZGl0Q29uZmxpY3QudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuY29uc3QgV0dfQ1VSX1JFVklTSU9OX0lEOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z0N1clJldmlzaW9uSWQnKTtcbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuY29uc3QgV0dfV0lLSV9JRDogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dXaWtpSUQnKTtcblxuY29uc3QgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OOiBib29sZWFuID0gWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKFdHX0FDVElPTik7XG5cbmV4cG9ydCB7V0dfQ1VSX1JFVklTSU9OX0lELCBXR19QQUdFX05BTUUsIFdHX1dJS0lfSUQsIElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTn07XG4iLCAiaW1wb3J0IHtXR19DVVJfUkVWSVNJT05fSUQsIFdHX1BBR0VfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2RlbGF5LCBnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRDdXJyZW50UmV2aXNpb25JZH0gZnJvbSAnLi9nZXRDdXJyZW50UmV2aXNpb25JZCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgZWRpdENvbmZsaWN0ID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRsZXQgaXNDb250aW51ZTogYm9vbGVhbiA9IHRydWU7XG5cblx0dm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0JGJvZHkuZmluZCgnI3dwU2F2ZScpLm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRcdGlzQ29udGludWUgPSBmYWxzZTtcblx0XHR9KTtcblx0fSk7XG5cblx0Y29uc3QgY2hlY2tFZGl0Q29uZmxpY3QgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc3QgcGFnZVJldmlzaW9uSWQ6IG51bWJlciA9IGF3YWl0IGdldEN1cnJlbnRSZXZpc2lvbklkKFdHX1BBR0VfTkFNRSk7XG5cdFx0aWYgKCFwYWdlUmV2aXNpb25JZCkge1xuXHRcdFx0aXNDb250aW51ZSA9IGZhbHNlO1xuXHRcdH0gZWxzZSBpZiAocGFnZVJldmlzaW9uSWQgPiBXR19DVVJfUkVWSVNJT05fSUQpIHtcblx0XHRcdGlzQ29udGludWUgPSBmYWxzZTtcblx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bm9kZTogJChnZXRNZXNzYWdlKCdOb3RpY2UnKSkuZ2V0KDApLFxuXHRcdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2luZm8nXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGF3YWl0IGNoZWNrRWRpdENvbmZsaWN0KCk7XG5cblx0XHRpZiAoIWlzQ29udGludWUpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGF3YWl0IGRlbGF5KDMgKiAxMDAwKTtcblx0fVxufTtcblxuZXhwb3J0IHtlZGl0Q29uZmxpY3R9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1dHX1dJS0lfSUR9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRaXV3ZW4vMS4xIChFZGl0Q29uZmxpY3QvJHtPUFRJT05TLnZlcnNpb259OyAke1dHX1dJS0lfSUR9KWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5cbmludGVyZmFjZSBQYWdlSW5mbyB7XG5cdHF1ZXJ5Pzoge1xuXHRcdHBhZ2VzOiBBcnJheTx7XG5cdFx0XHRtaXNzaW5nPzogYm9vbGVhbjtcblx0XHRcdHJldmlzaW9uczogQXJyYXk8e1xuXHRcdFx0XHRyZXZpZDogbnVtYmVyO1xuXHRcdFx0fT47XG5cdFx0fT47XG5cdH07XG59XG5cbmNvbnN0IHBhcmFtZXRlcnM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRhY3Rpb246ICdxdWVyeScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRydnByb3A6ICdpZHMnLFxufTtcblxuY29uc3QgcXVlcnlQYWdlSW5mbyA9IGFzeW5jICh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTxQYWdlSW5mbz4gPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiAoYXdhaXQgYXBpLnBvc3Qoe1xuXHRcdFx0Li4ucGFyYW1ldGVycyxcblx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0fSkpIGFzIFBhZ2VJbmZvO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tFZGl0Q29uZmxpY3RdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHtxdWVyeVBhZ2VJbmZvfTtcbiIsICJpbXBvcnQge3F1ZXJ5UGFnZUluZm99IGZyb20gJy4vdXRpbC9xdWVyeVBhZ2VJbmZvJztcblxuY29uc3QgZ2V0Q3VycmVudFJldmlzaW9uSWQgPSBhc3luYyAodGl0bGU6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPiA9PiB7XG5cdGNvbnN0IHBhZ2VJbmZvOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHF1ZXJ5UGFnZUluZm8+PiA9IGF3YWl0IHF1ZXJ5UGFnZUluZm8odGl0bGUpO1xuXG5cdGNvbnN0IHtxdWVyeX0gPSBwYWdlSW5mbztcblx0aWYgKCFxdWVyeSkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Y29uc3QgW3BhZ2VdID0gcXVlcnkucGFnZXM7XG5cdGlmICghcGFnZSB8fCBwYWdlLm1pc3NpbmcpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHJldHVybiBwYWdlLnJldmlzaW9uc1swXSEucmV2aWQ7XG59O1xuXG5leHBvcnQge2dldEN1cnJlbnRSZXZpc2lvbklkfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Tm90aWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzxzcGFuPlRoaXMgcGFnZSBoYXMgYmVlbiBjaGFuZ2VkIGJ5IHNvbWVvbmUgZWxzZSBhZnRlciB5b3Ugc3RhcnRlZCBlZGl0aW5nLiBDb3B5IHlvdXIgY2hhbmdlcywgcmVmcmVzaCBhbmQgc3RhcnQgb3ZlciB0byBhdm9pZCBlZGl0IGNvbmZsaWN0cy48YSBocmVmPVwiI1wiIG9uY2xpY2s9XCJsb2NhdGlvbi5yZWxvYWQoKTtyZXR1cm4gZmFsc2U7XCI+UmVmcmVzaDwvYT48L3NwYW4+Jyxcblx0XHRcdGphOiAnPHNwYW4+44GT44Gu44Oa44O844K444Gv5LuW44Gu5Lq644Gr44KI44Gj44Gm5aSJ5pu044GV44KM44Gm44GE44G+44GZ44CC57eo6ZuG6KGd56qB44KS6YG/44GR44KL44Gf44KB44CB57eo6ZuG5YaF5a6544KS44Kz44OU44O844GX44Gm44Oa44O844K444KS5YaN6Kqt44G/6L6844G/44GX44CB57eo6ZuG44KS57aa44GR44Gm44GP44Gg44GV44GE44CCPGEgaHJlZj1cIiNcIiBvbmNsaWNrPVwibG9jYXRpb24ucmVsb2FkKCk7cmV0dXJuIGZhbHNlO1wiPuWGjeiqreOBv+i+vOOBvzwvYT48L3NwYW4+Jyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0JzxzcGFuPuatpOmhtemdouW3suiiq+S7luS6uuabtOaUueOAguivt+WkjeWItuaCqOeahOe8lui+ke+8jOeEtuWQjuWIt+aWsOmhtemdou+8jOmHjeaWsOW8gOWni+e8lui+ke+8jOS7pemBv+WFjee8lui+keWGsueqgeOAgjxhIGhyZWY9XCIjXCIgb25jbGljaz1cImxvY2F0aW9uLnJlbG9hZCgpO3JldHVybiBmYWxzZTtcIj7liLfmlrDpobXpnaI8L2E+PC9zcGFuPicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCc8c3Bhbj7mnKzpoIHlt7Looqvku5bkurrmm7TmlLnjgILoq4vlsIfmgqjnmoTnt6jovK/opIfoo73vvIzkuKbph43mlrDovInlhaXpoIHpnaLvvIznhLblvoznubznuoznt6jovK/vvIzkvobpgb/lhY3nt6jovK/ooZ3nqoHjgII8YSBocmVmPVwiI1wiIG9uY2xpY2s9XCJsb2NhdGlvbi5yZWxvYWQoKTtyZXR1cm4gZmFsc2U7XCI+6YeN5paw6LyJ5YWlPC9hPjwvc3Bhbj4nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiwgV0dfQ1VSX1JFVklTSU9OX0lEfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtlZGl0Q29uZmxpY3R9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuaWYgKElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiAmJiBXR19DVVJfUkVWSVNJT05fSUQpIHtcblx0dm9pZCBlZGl0Q29uZmxpY3QoKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQXdDQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7QUFDdEUsSUFBTUMscUJBQTZCSCxHQUFHQyxPQUFPQyxJQUFJLGlCQUFpQjtBQUNsRSxJQUFNRSxlQUF1QkosR0FBR0MsT0FBT0MsSUFBSSxZQUFZO0FBQ3ZELElBQU1HLGFBQXFCTCxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7QUFFbkQsSUFBTUksOEJBQXVDLENBQUMsUUFBUSxRQUFRLEVBQUVDLFNBQVNSLFNBQVM7O0FDSmxGLElBQUFTLHFCQUE2QkMsUUFBQSxpQkFBQTs7QUNBNUIsSUFBQUMsVUFBVzs7QUNDWixJQUFBQyxvQkFBd0JGLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUcsT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSw0QkFBQUMsT0FBOENKLFNBQU8sSUFBQSxFQUFBSSxPQUFLVCxZQUFVLEdBQUEsQ0FBRzs7QUNTM0YsSUFBTVUsYUFBc0M7RUFDM0NDLFFBQVE7RUFDUkMsUUFBUTtFQUNSQyxlQUFlO0VBQ2ZDLE1BQU07RUFDTkMsUUFBUTtBQUNUO0FBRUEs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X0NVUl9SRVZJU0lPTl9JRCIsICJXR19QQUdFX05BTUUiLCAiV0dfV0lLSV9JRCIsICJJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04iLCAiaW5jbHVkZXMiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlcXVpcmUiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJwYXJhbWV0ZXJzIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInJ2cHJvcCIsICJxdWVyeVBhZ2VJbmZvIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGUiLCAicG9zdCIsICJ0aXRsZXMiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0Q3VycmVudFJldmlzaW9uSWQiLCAiX3JlZjIiLCAicGFnZUluZm8iLCAicXVlcnkiLCAicGFnZSIsICJwYWdlcyIsICJtaXNzaW5nIiwgInJldmlzaW9ucyIsICJyZXZpZCIsICJfeDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJOb3RpY2UiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJlZGl0Q29uZmxpY3QiLCAiX3JlZjMiLCAiaXNDb250aW51ZSIsICJnZXRCb2R5IiwgInRoZW4iLCAiJGJvZHkiLCAiZmluZCIsICJvbiIsICJjaGVja0VkaXRDb25mbGljdCIsICJfcmVmNCIsICJwYWdlUmV2aXNpb25JZCIsICJ0b2FzdGlmeSIsICJub2RlIiwgIiQiLCAiY2xvc2UiLCAiZHVyYXRpb24iLCAiZGVsYXkiXQp9Cg==

})();

/* </nowiki> */
