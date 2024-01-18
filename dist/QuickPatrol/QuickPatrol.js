/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://meta.wikimedia.org/wiki/User:Xiplus/js/quick-patrol.js}
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickPatrol}
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
    }),
    "[": "[",
    "]": "]"
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/QuickPatrol/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var QuickPatrol = () => {
  const $body = $("body");
  $body.find(".not-patrolled").each((index, element) => {
    const [time] = $(element).find("a");
    const timeHref = time === null || time === void 0 ? void 0 : time.getAttribute("href");
    const revIds = timeHref === null || timeHref === void 0 ? void 0 : timeHref.match(/oldid=([0-9]+)/);
    if (!revIds || !revIds[1]) {
      return;
    }
    const [, revId] = revIds;
    const $patrolBtn = $("<a>").addClass("gadget-quick_patrol__patrolbtn").text(getMessage("[") + getMessage("Patrol") + getMessage("]")).attr({
      id: "gadget-quick_patrol__".concat(index),
      "data-btnid": index,
      "data-revid": revId
    });
    $patrolBtn.on("click", (event) => {
      const api = (0, import_ext_gadget2.initMwApi)("QuickPatrol/2.0");
      const {
        btnid,
        revid
      } = event.currentTarget.dataset;
      void api.postWithToken("patrol", {
        action: "patrol",
        format: "json",
        revid
      }).done(({
        error
      }) => {
        if (error) {
          void mw.notify(getMessage("API") + error["info"], {
            type: "error",
            tag: "QuickPatrol"
          });
          $("#gadget-quick_patrol__".concat(btnid)).css("color", "#f00");
        } else {
          $("#gadget-quick_patrol__".concat(btnid)).css({
            pointerEvents: "none",
            color: "#888"
          }).text(getMessage("Patrolled"));
        }
      }).fail((error) => {
        void mw.notify(getMessage("AJAX"), {
          type: "error",
          tag: "QuickPatrol"
        });
        console.error("[QuickPatrol] Ajax error:", error);
        $("#gadget-quick_patrol__".concat(btnid)).css("color", "#f00");
      });
    });
    $patrolBtn.appendTo(element);
  });
  const $patrolAllBtn = $("<li>").append($("<a>").attr("id", "gadget-quick_patrol__all").text(getMessage("[") + getMessage("Patrol all pages") + getMessage("]")));
  $patrolAllBtn.on("click", () => {
    if (!confirm(getMessage("Patrol all pages?"))) {
      return;
    }
    $body.find(".not-patrolled").each((index) => {
      if ($("#gadget-quick_patrol__".concat(index)).css("pointer-events") !== "none") {
        $("#gadget-quick_patrol__".concat(index)).trigger("click");
      }
    });
  });
  $patrolAllBtn.appendTo($body.find("#mw-content-text ul"));
};
//! src/QuickPatrol/QuickPatrol.ts
if (mw.config.get("wgCanonicalSpecialPageName") === "Newpages") {
  $(QuickPatrol);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrUGF0cm9sL21vZHVsZXMvaTE4bi50cyIsICJzcmMvUXVpY2tQYXRyb2wvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9RdWlja1BhdHJvbC9RdWlja1BhdHJvbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFBhdHJvbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2wnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+lJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpScsXG5cdFx0fSksXG5cdFx0J1BhdHJvbCBhbGwgcGFnZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbCBhbGwgcGFnZXMnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5omA5pyJ6aG16Z2i77yfJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWFqOmDqOmggemdou+8nycsXG5cdFx0fSksXG5cdFx0J1BhdHJvbCBhbGwgcGFnZXM/JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2wgYWxsIHBhZ2VzPycsXG5cdFx0XHQnemgtaGFucyc6ICfnoa7lrprlt6Hmn6XmiYDmnInpobXpnaLvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn56K65a6a5beh5p+l5YWo6YOo6aCB6Z2i77yfJyxcblx0XHR9KSxcblx0XHRQYXRyb2xsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suW3oeafpScsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llt6Hmn6UnLFxuXHRcdH0pLFxuXHRcdEFKQVg6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQUpBWCBmYWlsdXJlJyxcblx0XHRcdCd6aC1oYW5zJzogJ0FKQVjlpLHotKUnLFxuXHRcdFx0J3poLWhhbnQnOiAnQUpBWOWkseaVlycsXG5cdFx0fSksXG5cdFx0QVBJOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FQSSBmYWlsdXJlOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAnQVBJ5aSx6LSl77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ0FQSeWkseaVl++8micsXG5cdFx0fSksXG5cdFx0J1snOiAnWycsXG5cdFx0J10nOiAnXScsXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5leHBvcnQgY29uc3QgUXVpY2tQYXRyb2wgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblxuXHQvKiBQYXRyb2wgc2luZ2xlIHBhZ2UgKi9cblx0JGJvZHkuZmluZCgnLm5vdC1wYXRyb2xsZWQnKS5lYWNoKChpbmRleCwgZWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IFt0aW1lXSA9ICQoZWxlbWVudCkuZmluZCgnYScpO1xuXHRcdGNvbnN0IHRpbWVIcmVmOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gdGltZT8uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cdFx0Y29uc3QgcmV2SWRzOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCB8IHVuZGVmaW5lZCA9IHRpbWVIcmVmPy5tYXRjaCgvb2xkaWQ9KFswLTldKykvKTtcblx0XHRpZiAoIXJldklkcyB8fCAhcmV2SWRzWzFdKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IFssIHJldklkXSA9IHJldklkcztcblx0XHRjb25zdCAkcGF0cm9sQnRuOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJDxIVE1MQW5jaG9yRWxlbWVudD4oJzxhPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2dhZGdldC1xdWlja19wYXRyb2xfX3BhdHJvbGJ0bicpXG5cdFx0XHQudGV4dChnZXRNZXNzYWdlKCdbJykgKyBnZXRNZXNzYWdlKCdQYXRyb2wnKSArIGdldE1lc3NhZ2UoJ10nKSlcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0aWQ6IGBnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2luZGV4fWAsXG5cdFx0XHRcdCdkYXRhLWJ0bmlkJzogaW5kZXgsXG5cdFx0XHRcdCdkYXRhLXJldmlkJzogcmV2SWQsXG5cdFx0XHR9KTtcblx0XHQkcGF0cm9sQnRuLm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCBhcGkgPSBpbml0TXdBcGkoJ1F1aWNrUGF0cm9sLzIuMCcpO1xuXHRcdFx0Y29uc3Qge2J0bmlkLCByZXZpZH0gPSAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuZGF0YXNldDtcblx0XHRcdHZvaWQgYXBpXG5cdFx0XHRcdC5wb3N0V2l0aFRva2VuKCdwYXRyb2wnLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncGF0cm9sJyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRyZXZpZDogcmV2aWQgYXMgc3RyaW5nLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuZG9uZSgoe2Vycm9yfSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuXHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnQVBJJykgKyBlcnJvclsnaW5mbyddLCB7dHlwZTogJ2Vycm9yJywgdGFnOiAnUXVpY2tQYXRyb2wnfSk7XG5cdFx0XHRcdFx0XHQkKGAjZ2FkZ2V0LXF1aWNrX3BhdHJvbF9fJHtidG5pZH1gKS5jc3MoJ2NvbG9yJywgJyNmMDAnKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0JChgI2dhZGdldC1xdWlja19wYXRyb2xfXyR7YnRuaWR9YClcblx0XHRcdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdFx0cG9pbnRlckV2ZW50czogJ25vbmUnLFxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAnIzg4OCcsXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdC50ZXh0KGdldE1lc3NhZ2UoJ1BhdHJvbGxlZCcpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5mYWlsKChlcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ0FKQVgnKSwge3R5cGU6ICdlcnJvcicsIHRhZzogJ1F1aWNrUGF0cm9sJ30pO1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tRdWlja1BhdHJvbF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRcdFx0JChgI2dhZGdldC1xdWlja19wYXRyb2xfXyR7YnRuaWR9YCkuY3NzKCdjb2xvcicsICcjZjAwJyk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdCRwYXRyb2xCdG4uYXBwZW5kVG8oZWxlbWVudCk7XG5cdH0pO1xuXHQvKiBQYXRyb2wgYWxsIHBhZ2VzICovXG5cdGNvbnN0ICRwYXRyb2xBbGxCdG46IEpRdWVyeSA9ICQoJzxsaT4nKS5hcHBlbmQoXG5cdFx0JCgnPGE+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdnYWRnZXQtcXVpY2tfcGF0cm9sX19hbGwnKVxuXHRcdFx0LnRleHQoZ2V0TWVzc2FnZSgnWycpICsgZ2V0TWVzc2FnZSgnUGF0cm9sIGFsbCBwYWdlcycpICsgZ2V0TWVzc2FnZSgnXScpKVxuXHQpO1xuXHQkcGF0cm9sQWxsQnRuLm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRpZiAoIWNvbmZpcm0oZ2V0TWVzc2FnZSgnUGF0cm9sIGFsbCBwYWdlcz8nKSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0JGJvZHkuZmluZCgnLm5vdC1wYXRyb2xsZWQnKS5lYWNoKChpbmRleCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCQoYCNnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2luZGV4fWApLmNzcygncG9pbnRlci1ldmVudHMnKSAhPT0gJ25vbmUnKSB7XG5cdFx0XHRcdCQoYCNnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2luZGV4fWApLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXHQkcGF0cm9sQWxsQnRuLmFwcGVuZFRvKCRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQgdWwnKSk7XG59O1xuIiwgImltcG9ydCB7UXVpY2tQYXRyb2x9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuaWYgKG13LmNvbmZpZy5nZXQoJ3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lJykgPT09ICdOZXdwYWdlcycpIHtcblx0JChRdWlja1BhdHJvbCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7O0FBQUEsSUFBQUEsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUgsa0JBQUFJLFVBQVM7TUFDaEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxxQkFBQSxHQUFvQkwsa0JBQUFJLFVBQVM7TUFDNUJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxzQkFBQSxHQUFxQkwsa0JBQUFJLFVBQVM7TUFDN0JDLElBQUk7TUFDSixXQUFXO01B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SUEsV0FBVyxrQkFBa0IsSUFBSUEsV0FBVyxHQUFHLENBQUMsQ0FDMUU7QUFDQTZDLGdCQUFjdkIsR0FBRyxTQUFTLE1BQVk7QUFDckMsUUFBSSxDQUFDeUIsUUFBUS9DLFdBQVcsbUJBQW1CLENBQUMsR0FBRztBQUM5QztJQUNEO0FBQ0FJLFVBQU1FLEtBQUssZ0JBQWdCLEVBQUVDLEtBQU1DLFdBQWdCO0FBQ2xELFVBQUlILEVBQUEseUJBQUFnQixPQUEyQmIsS0FBSyxDQUFFLEVBQUUrQixJQUFJLGdCQUFnQixNQUFNLFFBQVE7QUFDekVsQyxVQUFBLHlCQUFBZ0IsT0FBMkJiLEtBQUssQ0FBRSxFQUFFd0MsUUFBUSxPQUFPO01BQ3BEO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFDREgsZ0JBQWNELFNBQVN4QyxNQUFNRSxLQUFLLHFCQUFxQixDQUFDO0FBQ3pEOztBQ3JFQSxJQUFJNkIsR0FBR2MsT0FBT0MsSUFBSSw0QkFBNEIsTUFBTSxZQUFZO0FBQy9EN0MsSUFBRUYsV0FBVztBQUNkOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJQYXRyb2wiLCAibG9jYWxpemUiLCAiZW4iLCAiUGF0cm9sbGVkIiwgIkFKQVgiLCAiQVBJIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiUXVpY2tQYXRyb2wiLCAiJGJvZHkiLCAiJCIsICJmaW5kIiwgImVhY2giLCAiaW5kZXgiLCAiZWxlbWVudCIsICJ0aW1lIiwgInRpbWVIcmVmIiwgImdldEF0dHJpYnV0ZSIsICJyZXZJZHMiLCAibWF0Y2giLCAicmV2SWQiLCAiJHBhdHJvbEJ0biIsICJhZGRDbGFzcyIsICJ0ZXh0IiwgImF0dHIiLCAiaWQiLCAiY29uY2F0IiwgIm9uIiwgImV2ZW50IiwgImFwaSIsICJpbml0TXdBcGkiLCAiYnRuaWQiLCAicmV2aWQiLCAiY3VycmVudFRhcmdldCIsICJkYXRhc2V0IiwgInBvc3RXaXRoVG9rZW4iLCAiYWN0aW9uIiwgImZvcm1hdCIsICJkb25lIiwgImVycm9yIiwgIm13IiwgIm5vdGlmeSIsICJ0eXBlIiwgInRhZyIsICJjc3MiLCAicG9pbnRlckV2ZW50cyIsICJjb2xvciIsICJmYWlsIiwgImNvbnNvbGUiLCAiYXBwZW5kVG8iLCAiJHBhdHJvbEFsbEJ0biIsICJhcHBlbmQiLCAiY29uZmlybSIsICJ0cmlnZ2VyIiwgImNvbmZpZyIsICJnZXQiXQp9Cg==

})();

/* </nowiki> */
