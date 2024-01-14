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
//! src/QuickPatrol/modules/constant.ts
var WG_WIKI_ID = mw.config.get("wgWikiID");
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
      const api = (0, import_ext_gadget2.initMwApi)("Qiuwen/1.1 (QuickPatrol/2.0; ".concat(WG_WIKI_ID, ")"));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrUGF0cm9sL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1F1aWNrUGF0cm9sL21vZHVsZXMvaTE4bi50cyIsICJzcmMvUXVpY2tQYXRyb2wvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9RdWlja1BhdHJvbC9RdWlja1BhdHJvbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfV0lLSV9JRDogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dXaWtpSUQnKTtcblxuZXhwb3J0IHtXR19XSUtJX0lEfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0UGF0cm9sOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbCcsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6UnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+lJyxcblx0XHR9KSxcblx0XHQnUGF0cm9sIGFsbCBwYWdlcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sIGFsbCBwYWdlcycsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XmiYDmnInpobXpnaLvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l5YWo6YOo6aCB6Z2i77yfJyxcblx0XHR9KSxcblx0XHQnUGF0cm9sIGFsbCBwYWdlcz8nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbCBhbGwgcGFnZXM/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruWumuW3oeafpeaJgOaciemhtemdou+8nycsXG5cdFx0XHQnemgtaGFudCc6ICfnorrlrprlt6Hmn6Xlhajpg6jpoIHpnaLvvJ8nLFxuXHRcdH0pLFxuXHRcdFBhdHJvbGxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2xsZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5beh5p+lJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suW3oeafpScsXG5cdFx0fSksXG5cdFx0QUpBWDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBSkFYIGZhaWx1cmUnLFxuXHRcdFx0J3poLWhhbnMnOiAnQUpBWOWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICdBSkFY5aSx5pWXJyxcblx0XHR9KSxcblx0XHRBUEk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQVBJIGZhaWx1cmU6ICcsXG5cdFx0XHQnemgtaGFucyc6ICdBUEnlpLHotKXvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAnQVBJ5aSx5pWX77yaJyxcblx0XHR9KSxcblx0XHQnWyc6ICdbJyxcblx0XHQnXSc6ICddJyxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtXR19XSUtJX0lEfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5leHBvcnQgY29uc3QgUXVpY2tQYXRyb2wgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblxuXHQvKiBQYXRyb2wgc2luZ2xlIHBhZ2UgKi9cblx0JGJvZHkuZmluZCgnLm5vdC1wYXRyb2xsZWQnKS5lYWNoKChpbmRleCwgZWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IFt0aW1lXSA9ICQoZWxlbWVudCkuZmluZCgnYScpO1xuXHRcdGNvbnN0IHRpbWVIcmVmOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gdGltZT8uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cdFx0Y29uc3QgcmV2SWRzOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCB8IHVuZGVmaW5lZCA9IHRpbWVIcmVmPy5tYXRjaCgvb2xkaWQ9KFswLTldKykvKTtcblx0XHRpZiAoIXJldklkcyB8fCAhcmV2SWRzWzFdKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IFssIHJldklkXSA9IHJldklkcztcblx0XHRjb25zdCAkcGF0cm9sQnRuOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJDxIVE1MQW5jaG9yRWxlbWVudD4oJzxhPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2dhZGdldC1xdWlja19wYXRyb2xfX3BhdHJvbGJ0bicpXG5cdFx0XHQudGV4dChnZXRNZXNzYWdlKCdbJykgKyBnZXRNZXNzYWdlKCdQYXRyb2wnKSArIGdldE1lc3NhZ2UoJ10nKSlcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0aWQ6IGBnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2luZGV4fWAsXG5cdFx0XHRcdCdkYXRhLWJ0bmlkJzogaW5kZXgsXG5cdFx0XHRcdCdkYXRhLXJldmlkJzogcmV2SWQsXG5cdFx0XHR9KTtcblx0XHQkcGF0cm9sQnRuLm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCBhcGkgPSBpbml0TXdBcGkoYFFpdXdlbi8xLjEgKFF1aWNrUGF0cm9sLzIuMDsgJHtXR19XSUtJX0lEfSlgKTtcblx0XHRcdGNvbnN0IHtidG5pZCwgcmV2aWR9ID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLmRhdGFzZXQ7XG5cdFx0XHR2b2lkIGFwaVxuXHRcdFx0XHQucG9zdFdpdGhUb2tlbigncGF0cm9sJywge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3BhdHJvbCcsXG5cdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0cmV2aWQ6IHJldmlkIGFzIHN0cmluZyxcblx0XHRcdFx0fSlcblx0XHRcdFx0LmRvbmUoKHtlcnJvcn0pOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ0FQSScpICsgZXJyb3JbJ2luZm8nXSwge3R5cGU6ICdlcnJvcicsIHRhZzogJ1F1aWNrUGF0cm9sJ30pO1xuXHRcdFx0XHRcdFx0JChgI2dhZGdldC1xdWlja19wYXRyb2xfXyR7YnRuaWR9YCkuY3NzKCdjb2xvcicsICcjZjAwJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCQoYCNnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2J0bmlkfWApXG5cdFx0XHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRcdHBvaW50ZXJFdmVudHM6ICdub25lJyxcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJyM4ODgnLFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQudGV4dChnZXRNZXNzYWdlKCdQYXRyb2xsZWQnKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuZmFpbCgoZXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdBSkFYJyksIHt0eXBlOiAnZXJyb3InLCB0YWc6ICdRdWlja1BhdHJvbCd9KTtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdbUXVpY2tQYXRyb2xdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0XHRcdCQoYCNnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2J0bmlkfWApLmNzcygnY29sb3InLCAnI2YwMCcpO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0XHQkcGF0cm9sQnRuLmFwcGVuZFRvKGVsZW1lbnQpO1xuXHR9KTtcblx0LyogUGF0cm9sIGFsbCBwYWdlcyAqL1xuXHRjb25zdCAkcGF0cm9sQWxsQnRuOiBKUXVlcnkgPSAkKCc8bGk+JykuYXBwZW5kKFxuXHRcdCQoJzxhPicpXG5cdFx0XHQuYXR0cignaWQnLCAnZ2FkZ2V0LXF1aWNrX3BhdHJvbF9fYWxsJylcblx0XHRcdC50ZXh0KGdldE1lc3NhZ2UoJ1snKSArIGdldE1lc3NhZ2UoJ1BhdHJvbCBhbGwgcGFnZXMnKSArIGdldE1lc3NhZ2UoJ10nKSlcblx0KTtcblx0JHBhdHJvbEFsbEJ0bi5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKCFjb25maXJtKGdldE1lc3NhZ2UoJ1BhdHJvbCBhbGwgcGFnZXM/JykpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdCRib2R5LmZpbmQoJy5ub3QtcGF0cm9sbGVkJykuZWFjaCgoaW5kZXgpOiB2b2lkID0+IHtcblx0XHRcdGlmICgkKGAjZ2FkZ2V0LXF1aWNrX3BhdHJvbF9fJHtpbmRleH1gKS5jc3MoJ3BvaW50ZXItZXZlbnRzJykgIT09ICdub25lJykge1xuXHRcdFx0XHQkKGAjZ2FkZ2V0LXF1aWNrX3BhdHJvbF9fJHtpbmRleH1gKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcblx0JHBhdHJvbEFsbEJ0bi5hcHBlbmRUbygkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0IHVsJykpO1xufTtcbiIsICJpbXBvcnQge1F1aWNrUGF0cm9sfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmIChtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpID09PSAnTmV3cGFnZXMnKSB7XG5cdCQoUXVpY2tQYXRyb2wpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7OztBQUFBLElBQU1BLGFBQXFCQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7O0FDQW5ELElBQUFDLG9CQUF1QkMsUUFBQSxpQkFBQTtB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Q0FBQztBQUN0RUssZ0JBQVFSLE1BQU0sNkJBQTZCQSxLQUFLO0FBQ2hEN0IsVUFBQSx5QkFBQWdCLE9BQTJCSyxLQUFLLENBQUUsRUFBRVksSUFBSSxTQUFTLE1BQU07TUFDeEQsQ0FBQztJQUNILENBQUM7QUFDRHRCLGVBQVcyQixTQUFTbEMsT0FBTztFQUM1QixDQUFDO0FBRUQsUUFBTW1DLGdCQUF3QnZDLEVBQUUsTUFBTSxFQUFFd0MsT0FDdkN4QyxFQUFFLEtBQUssRUFDTGMsS0FBSyxNQUFNLDBCQUEwQixFQUNyQ0QsS0FBS2xCLFdBQVcsR0FBRyxJQUFJQSxXQUFXLGtCQUFrQixJQUFJQSxXQUFXLEdBQUcsQ0FBQyxDQUMxRTtBQUNBNEMsZ0JBQWN0QixHQUFHLFNBQVMsTUFBWTtBQUNyQyxRQUFJLENBQUN3QixRQUFROUMsV0FBVyxtQkFBbUIsQ0FBQyxHQUFHO0FBQzlDO0lBQ0Q7QUFDQUksVUFBTUUsS0FBSyxnQkFBZ0IsRUFBRUMsS0FBTUMsV0FBZ0I7QUFDbEQsVUFBSUgsRUFBQSx5QkFBQWdCLE9BQTJCYixLQUFLLENBQUUsRUFBRThCLElBQUksZ0JBQWdCLE1BQU0sUUFBUTtBQUN6RWpDLFVBQUEseUJBQUFnQixPQUEyQmIsS0FBSyxDQUFFLEVBQUV1QyxRQUFRLE9BQU87TUFDcEQ7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUNESCxnQkFBY0QsU0FBU3ZDLE1BQU1FLEtBQUsscUJBQXFCLENBQUM7QUFDekQ7O0FDdEVBLElBQUluQixHQUFHQyxPQUFPQyxJQUFJLDRCQUE0QixNQUFNLFlBQVk7QUFDL0RnQixJQUFFRixXQUFXO0FBQ2Q7IiwKICAibmFtZXMiOiBbIldHX1dJS0lfSUQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJQYXRyb2wiLCAibG9jYWxpemUiLCAiZW4iLCAiUGF0cm9sbGVkIiwgIkFKQVgiLCAiQVBJIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiUXVpY2tQYXRyb2wiLCAiJGJvZHkiLCAiJCIsICJmaW5kIiwgImVhY2giLCAiaW5kZXgiLCAiZWxlbWVudCIsICJ0aW1lIiwgInRpbWVIcmVmIiwgImdldEF0dHJpYnV0ZSIsICJyZXZJZHMiLCAibWF0Y2giLCAicmV2SWQiLCAiJHBhdHJvbEJ0biIsICJhZGRDbGFzcyIsICJ0ZXh0IiwgImF0dHIiLCAiaWQiLCAiY29uY2F0IiwgIm9uIiwgImV2ZW50IiwgImFwaSIsICJpbml0TXdBcGkiLCAiYnRuaWQiLCAicmV2aWQiLCAiY3VycmVudFRhcmdldCIsICJkYXRhc2V0IiwgInBvc3RXaXRoVG9rZW4iLCAiYWN0aW9uIiwgImZvcm1hdCIsICJkb25lIiwgImVycm9yIiwgIm5vdGlmeSIsICJ0eXBlIiwgInRhZyIsICJjc3MiLCAicG9pbnRlckV2ZW50cyIsICJjb2xvciIsICJmYWlsIiwgImNvbnNvbGUiLCAiYXBwZW5kVG8iLCAiJHBhdHJvbEFsbEJ0biIsICJhcHBlbmQiLCAiY29uZmlybSIsICJ0cmlnZ2VyIl0KfQo=

})();

/* </nowiki> */
