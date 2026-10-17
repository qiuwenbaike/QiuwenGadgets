/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://meta.wikimedia.org/wiki/User:Xiplus/js/quick-patrol.js}
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickPatrol}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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

// dist/QuickPatrol/QuickPatrol.js
//! src/QuickPatrol/QuickPatrol.ts
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
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
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/QuickPatrol/modules/patrolAllPages.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/QuickPatrol/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Patrol: (0, import_ext_gadget.localize)({
      en: "Patrol",
      "zh-hans": "巡查",
      "zh-hant": "巡查"
    }),
    "Patrol all pages": (0, import_ext_gadget.localize)({
      en: "Patrol all pages",
      "zh-hans": "巡查所有页面？",
      "zh-hant": "巡查全部頁面？"
    }),
    "Patrol all pages?": (0, import_ext_gadget.localize)({
      en: "Patrol all pages?",
      "zh-hans": "确定巡查所有页面？",
      "zh-hant": "確定巡查全部頁面？"
    }),
    Patrolled: (0, import_ext_gadget.localize)({
      en: "Patrolled",
      "zh-hans": "已巡查",
      "zh-hant": "已巡查"
    }),
    AJAX: (0, import_ext_gadget.localize)({
      en: "AJAX failure",
      "zh-hans": "AJAX失败",
      "zh-hant": "AJAX失敗"
    }),
    API: (0, import_ext_gadget.localize)({
      en: "API failure: ",
      "zh-hans": "API失败：",
      "zh-hant": "API失敗："
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/QuickPatrol/modules/patrolAllPages.ts
var onClick = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (patrolButtons) {
    if (!confirm(getMessage("Patrol all pages?"))) {
      return;
    }
    var _iterator = _createForOfIteratorHelper(patrolButtons), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const button = _step.value;
        if (button.style.pointerEvents === "none") {
          continue;
        }
        button.click();
        yield (0, import_ext_gadget2.delay)(1 * 1e3);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  return function onClick3(_x) {
    return _ref.apply(this, arguments);
  };
})();
var element = (patrolButtons) => {
  const button = document.createElement("a");
  button.id = "gadget-quick_patrol__all";
  button.textContent = "[".concat(getMessage("Patrol all pages"), "]");
  button.addEventListener("click", /* @__PURE__ */ _asyncToGenerator(function* () {
    yield onClick(patrolButtons);
  }));
  const root = document.createElement("div");
  root.append(button);
  return root;
};
//! src/QuickPatrol/options.json
var version = "3.0";
//! src/QuickPatrol/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("QuickPatrol/".concat(version));
//! src/QuickPatrol/modules/patrolSinglePage.ts
var onClick2 = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (button) {
    const {
      revid
    } = button.dataset;
    const params = {
      action: "patrol",
      format: "json",
      revid: Number(revid)
    };
    try {
      yield api.postWithToken("patrol", params);
      button.style.pointerEvents = "none";
      button.style.color = "#888";
      button.textContent = getMessage("Patrolled");
    } catch (error) {
      void mw.notify(getMessage("AJAX"), {
        tag: "QuickPatrol",
        type: "error"
      });
      button.style.color = "#f00";
      console.error("[QuickPatrol] Ajax error:", error);
    }
  });
  return function onClick22(_x2) {
    return _ref3.apply(this, arguments);
  };
})();
var element2 = (index, revId) => {
  const button = document.createElement("a");
  button.className = "gadget-quick_patrol__patrolbtn";
  button.id = "gadget-quick_patrol__".concat(index);
  button.dataset["revid"] = revId;
  button.textContent = "[".concat(getMessage("Patrol"), "]");
  button.addEventListener("click", () => {
    onClick2(button);
  });
  return button;
};
//! src/QuickPatrol/QuickPatrol.ts
void (0, import_ext_gadget4.getBody)().then(function quickPatrol($body) {
  if (mw.config.get("wgCanonicalSpecialPageName") !== "Newpages") {
    return;
  }
  const patrolSingleButtons = [];
  for (var _i = 0, _Object$entries = Object.entries($body.find(".not-patrolled")); _i < _Object$entries.length; _i++) {
    const [index, element3] = _Object$entries[_i];
    const $element = $(element3);
    const $time = $element.find("a");
    if (!$time.length) {
      continue;
    }
    const timeHref = $time.attr("href");
    if (!timeHref) {
      continue;
    }
    const revIds = timeHref === null || timeHref === void 0 ? void 0 : timeHref.match(/oldid=([0-9]+)/);
    if (!revIds || !revIds[1]) {
      continue;
    }
    const patrolSingleButton = element2(index, revIds[1]);
    patrolSingleButtons[patrolSingleButtons.length] = patrolSingleButton;
    element3.append(patrolSingleButton);
  }
  $body.find("#mw-content-text .mw-pager-body").append(element(patrolSingleButtons));
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrUGF0cm9sL1F1aWNrUGF0cm9sLnRzIiwgInNyYy9RdWlja1BhdHJvbC9tb2R1bGVzL3BhdHJvbEFsbFBhZ2VzLnRzIiwgInNyYy9RdWlja1BhdHJvbC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1F1aWNrUGF0cm9sL29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tQYXRyb2wvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrUGF0cm9sL21vZHVsZXMvcGF0cm9sU2luZ2xlUGFnZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwYXRyb2xBbGxQYWdlc30gZnJvbSAnLi9tb2R1bGVzL3BhdHJvbEFsbFBhZ2VzJztcbmltcG9ydCB7cGF0cm9sU2luZ2xlUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3BhdHJvbFNpbmdsZVBhZ2UnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHF1aWNrUGF0cm9sKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKSAhPT0gJ05ld3BhZ2VzJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8qIFBhdHJvbCBzaW5nbGUgcGFnZSAqL1xuXHRjb25zdCBwYXRyb2xTaW5nbGVCdXR0b25zID0gW107XG5cblx0Zm9yIChjb25zdCBbaW5kZXgsIGVsZW1lbnRdIG9mIE9iamVjdC5lbnRyaWVzKCRib2R5LmZpbmQoJy5ub3QtcGF0cm9sbGVkJykpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cblx0XHRjb25zdCAkdGltZTogSlF1ZXJ5ID0gJGVsZW1lbnQuZmluZCgnYScpO1xuXHRcdGlmICghJHRpbWUubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCB0aW1lSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJHRpbWUuYXR0cignaHJlZicpO1xuXHRcdGlmICghdGltZUhyZWYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJldklkczogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSB0aW1lSHJlZj8ubWF0Y2goL29sZGlkPShbMC05XSspLyk7XG5cdFx0aWYgKCFyZXZJZHMgfHwgIXJldklkc1sxXSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGF0cm9sU2luZ2xlQnV0dG9uID0gcGF0cm9sU2luZ2xlUGFnZShpbmRleCwgcmV2SWRzWzFdKTtcblx0XHRwYXRyb2xTaW5nbGVCdXR0b25zW3BhdHJvbFNpbmdsZUJ1dHRvbnMubGVuZ3RoXSA9IHBhdHJvbFNpbmdsZUJ1dHRvbjtcblx0XHRlbGVtZW50LmFwcGVuZChwYXRyb2xTaW5nbGVCdXR0b24pO1xuXHR9XG5cblx0LyogUGF0cm9sIGFsbCBwYWdlcyAqL1xuXHQkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0IC5tdy1wYWdlci1ib2R5JykuYXBwZW5kKHBhdHJvbEFsbFBhZ2VzKHBhdHJvbFNpbmdsZUJ1dHRvbnMpKTtcbn0pO1xuIiwgImltcG9ydCB7ZGVsYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IG9uQ2xpY2sgPSBhc3luYyAocGF0cm9sQnV0dG9uczogSFRNTEFuY2hvckVsZW1lbnRbXSkgPT4ge1xuXHRpZiAoIWNvbmZpcm0oZ2V0TWVzc2FnZSgnUGF0cm9sIGFsbCBwYWdlcz8nKSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Zm9yIChjb25zdCBidXR0b24gb2YgcGF0cm9sQnV0dG9ucykge1xuXHRcdGlmIChidXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9PT0gJ25vbmUnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0YnV0dG9uLmNsaWNrKCk7XG5cdFx0YXdhaXQgZGVsYXkoMSAqIDEwMDApOyAvLyBEZWxheSAxIHNlY29uZCB0byBhdm9pZCByZXF1ZXN0aW5nIHRvbyBmYXN0XG5cdH1cbn07XG5cbmNvbnN0IGVsZW1lbnQgPSAocGF0cm9sQnV0dG9uczogSFRNTEFuY2hvckVsZW1lbnRbXSkgPT4ge1xuXHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdGJ1dHRvbi5pZCA9ICdnYWRnZXQtcXVpY2tfcGF0cm9sX19hbGwnO1xuXHRidXR0b24udGV4dENvbnRlbnQgPSBgWyR7Z2V0TWVzc2FnZSgnUGF0cm9sIGFsbCBwYWdlcycpfV1gO1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0YXdhaXQgb25DbGljayhwYXRyb2xCdXR0b25zKTtcblx0fSk7XG5cblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRyb290LmFwcGVuZChidXR0b24pO1xuXHRyZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCB7ZWxlbWVudCBhcyBwYXRyb2xBbGxQYWdlc307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFBhdHJvbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2wnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+lJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpScsXG5cdFx0fSksXG5cdFx0J1BhdHJvbCBhbGwgcGFnZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbCBhbGwgcGFnZXMnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5omA5pyJ6aG16Z2i77yfJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWFqOmDqOmggemdou+8nycsXG5cdFx0fSksXG5cdFx0J1BhdHJvbCBhbGwgcGFnZXM/JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2wgYWxsIHBhZ2VzPycsXG5cdFx0XHQnemgtaGFucyc6ICfnoa7lrprlt6Hmn6XmiYDmnInpobXpnaLvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn56K65a6a5beh5p+l5YWo6YOo6aCB6Z2i77yfJyxcblx0XHR9KSxcblx0XHRQYXRyb2xsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suW3oeafpScsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llt6Hmn6UnLFxuXHRcdH0pLFxuXHRcdEFKQVg6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQUpBWCBmYWlsdXJlJyxcblx0XHRcdCd6aC1oYW5zJzogJ0FKQVjlpLHotKUnLFxuXHRcdFx0J3poLWhhbnQnOiAnQUpBWOWkseaVlycsXG5cdFx0fSksXG5cdFx0QVBJOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FQSSBmYWlsdXJlOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAnQVBJ5aSx6LSl77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ0FQSeWkseaVl++8micsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1aWNrUGF0cm9sLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3Qgb25DbGljayA9IGFzeW5jIChidXR0b246IEhUTUxBbmNob3JFbGVtZW50KSA9PiB7XG5cdGNvbnN0IHtyZXZpZH0gPSBidXR0b24uZGF0YXNldDtcblx0Y29uc3QgcGFyYW1zOiBBcGlQYXRyb2xQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGF0cm9sJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRyZXZpZDogTnVtYmVyKHJldmlkKSxcblx0fTtcblx0dHJ5IHtcblx0XHRhd2FpdCBhcGkucG9zdFdpdGhUb2tlbigncGF0cm9sJywgcGFyYW1zKTtcblx0XHRidXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblx0XHRidXR0b24uc3R5bGUuY29sb3IgPSAnIzg4OCc7XG5cdFx0YnV0dG9uLnRleHRDb250ZW50ID0gZ2V0TWVzc2FnZSgnUGF0cm9sbGVkJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnQUpBWCcpLCB7XG5cdFx0XHR0YWc6ICdRdWlja1BhdHJvbCcsXG5cdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdH0pO1xuXHRcdGJ1dHRvbi5zdHlsZS5jb2xvciA9ICcjZjAwJztcblx0XHRjb25zb2xlLmVycm9yKCdbUXVpY2tQYXRyb2xdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR9XG59O1xuXG5jb25zdCBlbGVtZW50ID0gKGluZGV4OiBzdHJpbmcsIHJldklkOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRidXR0b24uY2xhc3NOYW1lID0gJ2dhZGdldC1xdWlja19wYXRyb2xfX3BhdHJvbGJ0bic7XG5cdGJ1dHRvbi5pZCA9IGBnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2luZGV4fWA7XG5cdGJ1dHRvbi5kYXRhc2V0WydyZXZpZCddID0gcmV2SWQ7XG5cdGJ1dHRvbi50ZXh0Q29udGVudCA9IGBbJHtnZXRNZXNzYWdlKCdQYXRyb2wnKX1dYDtcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdG9uQ2xpY2soYnV0dG9uKTtcblx0fSk7XG5cblx0cmV0dXJuIGJ1dHRvbjtcbn07XG5cbmV4cG9ydCB7ZWxlbWVudCBhcyBwYXRyb2xTaW5nbGVQYWdlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNBdEIsSUFBQUMscUJBQW9CRCxRQUFBLGlCQUFBOztBQ0FwQixJQUFBRSxvQkFBdUJGLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUcsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHFCQUFBLEdBQW9CSixrQkFBQUcsVUFBUztNQUM1QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHNCQUFBLEdBQXFCSixrQkFBQUcsVUFBUztNQUM3QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxZQUFBLEdBQVdMLGtCQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLE9BQUEsR0FBTU4sa0JBQUFHLFVBQVM7TUFDZEMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxNQUFBLEdBQUtQLGtCQUFBRyxVQUFTO01B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ICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiUGF0cm9sIiwgImxvY2FsaXplIiwgImVuIiwgIlBhdHJvbGxlZCIsICJBSkFYIiwgIkFQSSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAib25DbGljayIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhdHJvbEJ1dHRvbnMiLCAiY29uZmlybSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiYnV0dG9uIiwgInZhbHVlIiwgInN0eWxlIiwgInBvaW50ZXJFdmVudHMiLCAiY2xpY2siLCAiZGVsYXkiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZWxlbWVudCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImlkIiwgInRleHRDb250ZW50IiwgImNvbmNhdCIsICJhZGRFdmVudExpc3RlbmVyIiwgInJvb3QiLCAiYXBwZW5kIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAib25DbGljazIiLCAiX3JlZjMiLCAicmV2aWQiLCAiZGF0YXNldCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJOdW1iZXIiLCAicG9zdFdpdGhUb2tlbiIsICJjb2xvciIsICJlcnJvciIsICJtdyIsICJub3RpZnkiLCAidGFnIiwgInR5cGUiLCAiY29uc29sZSIsICJfeDIiLCAiZWxlbWVudDIiLCAiaW5kZXgiLCAicmV2SWQiLCAiY2xhc3NOYW1lIiwgImdldEJvZHkiLCAidGhlbiIsICJxdWlja1BhdHJvbCIsICIkYm9keSIsICJjb25maWciLCAiZ2V0IiwgInBhdHJvbFNpbmdsZUJ1dHRvbnMiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImZpbmQiLCAibGVuZ3RoIiwgImVsZW1lbnQzIiwgIiRlbGVtZW50IiwgIiQiLCAiJHRpbWUiLCAidGltZUhyZWYiLCAiYXR0ciIsICJyZXZJZHMiLCAibWF0Y2giLCAicGF0cm9sU2luZ2xlQnV0dG9uIl0KfQo=
