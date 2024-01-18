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
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
//! src/EditConflict/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/EditConflict/options.json
var version = "2.0";
//! src/EditConflict/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("EditConflict/".concat(version));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Q29uZmxpY3QvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9FZGl0Q29uZmxpY3Qvb3B0aW9ucy5qc29uIiwgInNyYy9FZGl0Q29uZmxpY3QvbW9kdWxlcy9hcGkudHMiLCAic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL3V0aWwvcXVlcnlQYWdlSW5mby50cyIsICJzcmMvRWRpdENvbmZsaWN0L21vZHVsZXMvZ2V0Q3VycmVudFJldmlzaW9uSWQudHMiLCAic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRDb25mbGljdC9FZGl0Q29uZmxpY3QudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuY29uc3QgV0dfQ1VSX1JFVklTSU9OX0lEOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z0N1clJldmlzaW9uSWQnKTtcbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuXG5jb25zdCBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT046IGJvb2xlYW4gPSBbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMoV0dfQUNUSU9OKTtcblxuZXhwb3J0IHtXR19DVVJfUkVWSVNJT05fSUQsIFdHX1BBR0VfTkFNRSwgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OfTtcbiIsICJpbXBvcnQge1dHX0NVUl9SRVZJU0lPTl9JRCwgV0dfUEFHRV9OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7ZGVsYXksIGdldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldEN1cnJlbnRSZXZpc2lvbklkfSBmcm9tICcuL2dldEN1cnJlbnRSZXZpc2lvbklkJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBlZGl0Q29uZmxpY3QgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGxldCBpc0NvbnRpbnVlOiBib29sZWFuID0gdHJ1ZTtcblxuXHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHQkYm9keS5maW5kKCcjd3BTYXZlJykub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0aXNDb250aW51ZSA9IGZhbHNlO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRjb25zdCBjaGVja0VkaXRDb25mbGljdCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCBwYWdlUmV2aXNpb25JZDogbnVtYmVyID0gYXdhaXQgZ2V0Q3VycmVudFJldmlzaW9uSWQoV0dfUEFHRV9OQU1FKTtcblx0XHRpZiAoIXBhZ2VSZXZpc2lvbklkKSB7XG5cdFx0XHRpc0NvbnRpbnVlID0gZmFsc2U7XG5cdFx0fSBlbHNlIGlmIChwYWdlUmV2aXNpb25JZCA+IFdHX0NVUl9SRVZJU0lPTl9JRCkge1xuXHRcdFx0aXNDb250aW51ZSA9IGZhbHNlO1xuXHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRub2RlOiAkKGdldE1lc3NhZ2UoJ05vdGljZScpKS5nZXQoMCksXG5cdFx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW5mbydcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0YXdhaXQgY2hlY2tFZGl0Q29uZmxpY3QoKTtcblxuXHRcdGlmICghaXNDb250aW51ZSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0YXdhaXQgZGVsYXkoMyAqIDEwMDApO1xuXHR9XG59O1xuXG5leHBvcnQge2VkaXRDb25mbGljdH07XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgRWRpdENvbmZsaWN0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5cbmludGVyZmFjZSBQYWdlSW5mbyB7XG5cdHF1ZXJ5Pzoge1xuXHRcdHBhZ2VzOiBBcnJheTx7XG5cdFx0XHRtaXNzaW5nPzogYm9vbGVhbjtcblx0XHRcdHJldmlzaW9uczogQXJyYXk8e1xuXHRcdFx0XHRyZXZpZDogbnVtYmVyO1xuXHRcdFx0fT47XG5cdFx0fT47XG5cdH07XG59XG5cbmNvbnN0IHBhcmFtZXRlcnM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRhY3Rpb246ICdxdWVyeScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRydnByb3A6ICdpZHMnLFxufTtcblxuY29uc3QgcXVlcnlQYWdlSW5mbyA9IGFzeW5jICh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTxQYWdlSW5mbz4gPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiAoYXdhaXQgYXBpLnBvc3Qoe1xuXHRcdFx0Li4ucGFyYW1ldGVycyxcblx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0fSkpIGFzIFBhZ2VJbmZvO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tFZGl0Q29uZmxpY3RdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHtxdWVyeVBhZ2VJbmZvfTtcbiIsICJpbXBvcnQge3F1ZXJ5UGFnZUluZm99IGZyb20gJy4vdXRpbC9xdWVyeVBhZ2VJbmZvJztcblxuY29uc3QgZ2V0Q3VycmVudFJldmlzaW9uSWQgPSBhc3luYyAodGl0bGU6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPiA9PiB7XG5cdGNvbnN0IHBhZ2VJbmZvOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHF1ZXJ5UGFnZUluZm8+PiA9IGF3YWl0IHF1ZXJ5UGFnZUluZm8odGl0bGUpO1xuXG5cdGNvbnN0IHtxdWVyeX0gPSBwYWdlSW5mbztcblx0aWYgKCFxdWVyeSkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Y29uc3QgW3BhZ2VdID0gcXVlcnkucGFnZXM7XG5cdGlmICghcGFnZSB8fCBwYWdlLm1pc3NpbmcpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHJldHVybiBwYWdlLnJldmlzaW9uc1swXSEucmV2aWQ7XG59O1xuXG5leHBvcnQge2dldEN1cnJlbnRSZXZpc2lvbklkfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Tm90aWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzxzcGFuPlRoaXMgcGFnZSBoYXMgYmVlbiBjaGFuZ2VkIGJ5IHNvbWVvbmUgZWxzZSBhZnRlciB5b3Ugc3RhcnRlZCBlZGl0aW5nLiBDb3B5IHlvdXIgY2hhbmdlcywgcmVmcmVzaCBhbmQgc3RhcnQgb3ZlciB0byBhdm9pZCBlZGl0IGNvbmZsaWN0cy48YSBocmVmPVwiI1wiIG9uY2xpY2s9XCJsb2NhdGlvbi5yZWxvYWQoKTtyZXR1cm4gZmFsc2U7XCI+UmVmcmVzaDwvYT48L3NwYW4+Jyxcblx0XHRcdGphOiAnPHNwYW4+44GT44Gu44Oa44O844K444Gv5LuW44Gu5Lq644Gr44KI44Gj44Gm5aSJ5pu044GV44KM44Gm44GE44G+44GZ44CC57eo6ZuG6KGd56qB44KS6YG/44GR44KL44Gf44KB44CB57eo6ZuG5YaF5a6544KS44Kz44OU44O844GX44Gm44Oa44O844K444KS5YaN6Kqt44G/6L6844G/44GX44CB57eo6ZuG44KS57aa44GR44Gm44GP44Gg44GV44GE44CCPGEgaHJlZj1cIiNcIiBvbmNsaWNrPVwibG9jYXRpb24ucmVsb2FkKCk7cmV0dXJuIGZhbHNlO1wiPuWGjeiqreOBv+i+vOOBvzwvYT48L3NwYW4+Jyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0JzxzcGFuPuatpOmhtemdouW3suiiq+S7luS6uuabtOaUueOAguivt+WkjeWItuaCqOeahOe8lui+ke+8jOeEtuWQjuWIt+aWsOmhtemdou+8jOmHjeaWsOW8gOWni+e8lui+ke+8jOS7pemBv+WFjee8lui+keWGsueqgeOAgjxhIGhyZWY9XCIjXCIgb25jbGljaz1cImxvY2F0aW9uLnJlbG9hZCgpO3JldHVybiBmYWxzZTtcIj7liLfmlrDpobXpnaI8L2E+PC9zcGFuPicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCc8c3Bhbj7mnKzpoIHlt7Looqvku5bkurrmm7TmlLnjgILoq4vlsIfmgqjnmoTnt6jovK/opIfoo73vvIzkuKbph43mlrDovInlhaXpoIHpnaLvvIznhLblvoznubznuoznt6jovK/vvIzkvobpgb/lhY3nt6jovK/ooZ3nqoHjgII8YSBocmVmPVwiI1wiIG9uY2xpY2s9XCJsb2NhdGlvbi5yZWxvYWQoKTtyZXR1cm4gZmFsc2U7XCI+6YeN5paw6LyJ5YWlPC9hPjwvc3Bhbj4nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiwgV0dfQ1VSX1JFVklTSU9OX0lEfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtlZGl0Q29uZmxpY3R9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuaWYgKElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiAmJiBXR19DVVJfUkVWSVNJT05fSUQpIHtcblx0dm9pZCBlZGl0Q29uZmxpY3QoKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQXdDQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7QUFDdEUsSUFBTUMscUJBQTZCSCxHQUFHQyxPQUFPQyxJQUFJLGlCQUFpQjtBQUNsRSxJQUFNRSxlQUF1QkosR0FBR0MsT0FBT0MsSUFBSSxZQUFZO0FBRXZELElBQU1HLDhCQUF1QyxDQUFDLFFBQVEsUUFBUSxFQUFFQyxTQUFTUCxTQUFTOztBQ0hsRixJQUFBUSxxQkFBNkJDLFFBQUEsaUJBQUE7O0FDQTVCLElBQUFDLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCRixRQUFBLGlCQUFBO0FBRXhCLElBQU1HLE9BQUEsR0FBY0Qsa0JBQUFFLFdBQUEsZ0JBQUFDLE9BQWtDSixPQUFPLENBQUU7O0FDVS9ELElBQU1LLGFBQXNDO0VBQzNDQyxRQUFRO0VBQ1JDLFFBQVE7RUFDUkMsZUFBZTtFQUNmQyxNQUFNO0VBQ05DLFFBQVE7QUFDVDtBQUVBLElBQU1DLGdCQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWdCLFdBQU9DLE9BQXFDO0FBQ2pFLFFBQUk7QUFDSCxhQUFBLE1BQWNaLElBQUlhLEtBQUs7UUFDdEIsR0FBR1Y7UUFDSFcsUUFBUUY7TUFDVCxDQUFDO0lBQ0YsU0FBU0csT0FBZ0I7QUFDeEJDLGNBQVFELE1BQU0sOEJBQThCQSxLQUFLO0FBQ2pELGFBQU8sQ0FBQztJQUNUO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FWTU4sZUFBQVEsSUFBQTtBQUFBLFdBQUFQLEtBQUFRLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNuQk4sSUFBTUMsdUJBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBVixrQkFBdUIsV0FBT0MsT0FBbUM7QUFDdEUsVUFBTVUsV0FBQSxNQUE0RGIsY0FBY0csS0FBSztBQUVyRixVQUFNO01BQUNXO0lBQUssSUFBSUQ7QUFDaEIsUUFBSSxDQUFDQyxPQUFPO0FBQ1gsYUFBTztJQUNSO0FBRUEsVUFBTSxDQUFDQyxJQUFJLElBQUlELE1BQU1FO0FBQ3JCLFFBQUksQ0FBQ0QsUUFBUUEsS0FBS0UsU0FBUztBQUMxQixhQUFPO0lBQ1I7QUFFQSxXQUFPRixLQUFLRyxVQUFVLENBQUMsRUFBR0M7RUFDM0IsQ0FBQTtBQUFBLFNBQUEsU0FkTVIsc0JBQUFTLEtBQUE7QUFBQSxXQUFBUixNQUFBSCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDRk4sSUFBQVcscUJBQXVCakMsUUFBQSxpQkFBQTtBQUV2QixJQUFNa0Msa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixtQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FDQztNQUNELFdBQ0M7SUFDRixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBTGZBLElBQUFDLHFCQUF1QjFDLFFBQUEscUJBQUE7QUFFdkIsSUFBTTJDLGVBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBOUIsa0JBQWUsYUFBMkI7QUFDL0MsUUFBSStCLGFBQXNCO0FBRTFCLFVBQUEsR0FBSzlDLG1CQUFBK0MsU0FBUSxFQUFFQyxLQUFNQyxXQUF5QztBQUM3REEsWUFBTUMsS0FBSyxTQUFTLEVBQUVDLEdBQUcsU0FBUyxNQUFZO0FBQzdDTCxxQkFBYTtNQUNkLENBQUM7SUFDRixDQUFDO0FBRUQsVUFBTU0sb0JBQUEsMkJBQUE7QUFBQSxVQUFBQyxRQUFBdEMsa0JBQW9CLGFBQTJCO0FBQ3BELGNBQU11QyxpQkFBQSxNQUErQjlCLHFCQUFxQjNCLFlBQVk7QUFDdEUsWUFBSSxDQUFDeUQsZ0JBQWdCO0FBQ3BCUix1QkFBYTtRQUNkLFdBQVdRLGlCQUFpQjFELG9CQUFvQjtBQUMvQ2tELHVCQUFhO0FBQ2IsV0FBQSxHQUFBSCxtQkFBQVksVUFDQztZQUNDQyxNQUFNQyxFQUFFaEIsV0FBVyxRQUFRLENBQUMsRUFBRTlDLElBQUksQ0FBQztZQUNuQytELE9BQU87WUFDUEMsVUFBVTtVQUNYLEdBQ0EsTUFDRDtRQUNEO01BQ0QsQ0FBQTtBQUFBLGFBQUEsU0FmTVAscUJBQUE7QUFBQSxlQUFBQyxNQUFBL0IsTUFBQSxNQUFBQyxTQUFBO01BQUE7SUFBQSxFQUFBO0FBaUJOLFdBQU8sTUFBTTtBQUNaLFlBQU02QixrQkFBa0I7QUFFeEIsVUFBSSxDQUFDTixZQUFZO0FBQ2hCO01BQ0Q7QUFFQSxhQUFBLEdBQU05QyxtQkFBQTRELE9BQU0sSUFBSSxHQUFJO0lBQ3JCO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FuQ01oQixnQkFBQTtBQUFBLFdBQUFDLE1BQUF2QixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FNSE4sSUFBSXpCLCtCQUErQkYsb0JBQW9CO0FBQ3RELE9BQUtnRCxhQUFhO0FBQ25COyIsCiAgIm5hbWVzIjogWyJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19DVVJfUkVWSVNJT05fSUQiLCAiV0dfUEFHRV9OQU1FIiwgIklTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiIsICJpbmNsdWRlcyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgInBhcmFtZXRlcnMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicnZwcm9wIiwgInF1ZXJ5UGFnZUluZm8iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZSIsICJwb3N0IiwgInRpdGxlcyIsICJlcnJvciIsICJjb25zb2xlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRDdXJyZW50UmV2aXNpb25JZCIsICJfcmVmMiIsICJwYWdlSW5mbyIsICJxdWVyeSIsICJwYWdlIiwgInBhZ2VzIiwgIm1pc3NpbmciLCAicmV2aXNpb25zIiwgInJldmlkIiwgIl94MiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIk5vdGljZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImVkaXRDb25mbGljdCIsICJfcmVmMyIsICJpc0NvbnRpbnVlIiwgImdldEJvZHkiLCAidGhlbiIsICIkYm9keSIsICJmaW5kIiwgIm9uIiwgImNoZWNrRWRpdENvbmZsaWN0IiwgIl9yZWY0IiwgInBhZ2VSZXZpc2lvbklkIiwgInRvYXN0aWZ5IiwgIm5vZGUiLCAiJCIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJkZWxheSJdCn0K

})();

/* </nowiki> */
