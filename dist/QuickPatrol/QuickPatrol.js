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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrUGF0cm9sL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1F1aWNrUGF0cm9sL21vZHVsZXMvaTE4bi50cyIsICJzcmMvUXVpY2tQYXRyb2wvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9RdWlja1BhdHJvbC9RdWlja1BhdHJvbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfV0lLSV9JRDogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dXaWtpSUQnKTtcblxuZXhwb3J0IHtXR19XSUtJX0lEfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0UGF0cm9sOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbCcsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6UnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+lJyxcblx0XHR9KSxcblx0XHQnUGF0cm9sIGFsbCBwYWdlcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sIGFsbCBwYWdlcycsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XmiYDmnInpobXpnaLvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l5YWo6YOo6aCB6Z2i77yfJyxcblx0XHR9KSxcblx0XHQnUGF0cm9sIGFsbCBwYWdlcz8nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbCBhbGwgcGFnZXM/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruWumuW3oeafpeaJgOaciemhtemdou+8nycsXG5cdFx0XHQnemgtaGFudCc6ICfnorrlrprlt6Hmn6Xlhajpg6jpoIHpnaLvvJ8nLFxuXHRcdH0pLFxuXHRcdFBhdHJvbGxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2xsZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5beh5p+lJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suW3oeafpScsXG5cdFx0fSksXG5cdFx0QUpBWDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBSkFYIGZhaWx1cmUnLFxuXHRcdFx0J3poLWhhbnMnOiAnQUpBWOWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICdBSkFY5aSx5pWXJyxcblx0XHR9KSxcblx0XHRBUEk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQVBJIGZhaWx1cmU6ICcsXG5cdFx0XHQnemgtaGFucyc6ICdBUEnlpLHotKXvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAnQVBJ5aSx5pWX77yaJyxcblx0XHR9KSxcblx0XHQnWyc6ICdbJyxcblx0XHQnXSc6ICddJyxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtXR19XSUtJX0lEfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5leHBvcnQgY29uc3QgUXVpY2tQYXRyb2wgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblxuXHQvKiBQYXRyb2wgc2luZ2xlIHBhZ2UgKi9cblx0JGJvZHkuZmluZCgnLm5vdC1wYXRyb2xsZWQnKS5lYWNoKChpbmRleCwgZWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IFt0aW1lXSA9ICQoZWxlbWVudCkuZmluZCgnYScpO1xuXHRcdGNvbnN0IHRpbWVIcmVmOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gdGltZT8uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG5cdFx0Y29uc3QgcmV2SWRzOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCB8IHVuZGVmaW5lZCA9IHRpbWVIcmVmPy5tYXRjaCgvb2xkaWQ9KFswLTldKykvKTtcblx0XHRpZiAoIXJldklkcyB8fCAhcmV2SWRzWzFdKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IFssIHJldklkXSA9IHJldklkcztcblx0XHRjb25zdCAkcGF0cm9sQnRuOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJDxIVE1MQW5jaG9yRWxlbWVudD4oJzxhPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2dhZGdldC1xdWlja19wYXRyb2xfX3BhdHJvbGJ0bicpXG5cdFx0XHQudGV4dChnZXRNZXNzYWdlKCdbJykgKyBnZXRNZXNzYWdlKCdQYXRyb2wnKSArIGdldE1lc3NhZ2UoJ10nKSlcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0aWQ6IGBnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2luZGV4fWAsXG5cdFx0XHRcdCdkYXRhLWJ0bmlkJzogaW5kZXgsXG5cdFx0XHRcdCdkYXRhLXJldmlkJzogcmV2SWQsXG5cdFx0XHR9KTtcblx0XHQkcGF0cm9sQnRuLm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCBhcGkgPSBpbml0TXdBcGkoYFFpdXdlbi8xLjEgKFF1aWNrUGF0cm9sLzIuMDsgJHtXR19XSUtJX0lEfSlgKTtcblx0XHRcdGNvbnN0IHtidG5pZCwgcmV2aWR9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuXHRcdFx0dm9pZCBhcGlcblx0XHRcdFx0LnBvc3RXaXRoVG9rZW4oJ3BhdHJvbCcsIHtcblx0XHRcdFx0XHRhY3Rpb246ICdwYXRyb2wnLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdHJldmlkOiByZXZpZCBhcyBzdHJpbmcsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5kb25lKCh7ZXJyb3J9KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdBUEknKSArIGVycm9yWydpbmZvJ10sIHt0eXBlOiAnZXJyb3InLCB0YWc6ICdRdWlja1BhdHJvbCd9KTtcblx0XHRcdFx0XHRcdCQoYCNnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2J0bmlkfWApLmNzcygnY29sb3InLCAnI2YwMCcpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQkKGAjZ2FkZ2V0LXF1aWNrX3BhdHJvbF9fJHtidG5pZH1gKVxuXHRcdFx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiAnbm9uZScsXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICcjODg4Jyxcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LnRleHQoZ2V0TWVzc2FnZSgnUGF0cm9sbGVkJykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LmZhaWwoKGVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnQUpBWCcpLCB7dHlwZTogJ2Vycm9yJywgdGFnOiAnUXVpY2tQYXRyb2wnfSk7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcignW1F1aWNrUGF0cm9sXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdFx0XHQkKGAjZ2FkZ2V0LXF1aWNrX3BhdHJvbF9fJHtidG5pZH1gKS5jc3MoJ2NvbG9yJywgJyNmMDAnKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0JHBhdHJvbEJ0bi5hcHBlbmRUbyhlbGVtZW50KTtcblx0fSk7XG5cdC8qIFBhdHJvbCBhbGwgcGFnZXMgKi9cblx0Y29uc3QgJHBhdHJvbEFsbEJ0bjogSlF1ZXJ5ID0gJCgnPGxpPicpLmFwcGVuZChcblx0XHQkKCc8YT4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ2dhZGdldC1xdWlja19wYXRyb2xfX2FsbCcpXG5cdFx0XHQudGV4dChnZXRNZXNzYWdlKCdbJykgKyBnZXRNZXNzYWdlKCdQYXRyb2wgYWxsIHBhZ2VzJykgKyBnZXRNZXNzYWdlKCddJykpXG5cdCk7XG5cdCRwYXRyb2xBbGxCdG4ub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdGlmICghY29uZmlybShnZXRNZXNzYWdlKCdQYXRyb2wgYWxsIHBhZ2VzPycpKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQkYm9keS5maW5kKCcubm90LXBhdHJvbGxlZCcpLmVhY2goKGluZGV4KTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoJChgI2dhZGdldC1xdWlja19wYXRyb2xfXyR7aW5kZXh9YCkuY3NzKCdwb2ludGVyLWV2ZW50cycpICE9PSAnbm9uZScpIHtcblx0XHRcdFx0JChgI2dhZGdldC1xdWlja19wYXRyb2xfXyR7aW5kZXh9YCkudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cdCRwYXRyb2xBbGxCdG4uYXBwZW5kVG8oJGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCB1bCcpKTtcbn07XG4iLCAiaW1wb3J0IHtRdWlja1BhdHJvbH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5pZiAobXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKSA9PT0gJ05ld3BhZ2VzJykge1xuXHQkKFF1aWNrUGF0cm9sKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7QUFBQSxJQUFNQSxhQUFxQkMsR0FBR0MsT0FBT0MsSUFBSSxVQUFVOztBQ0FuRCxJQUFBQyxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRSCxrQkFBQUksVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1os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Q0FBQztJQUNILENBQUM7QUFDRHRCLGVBQVcyQixTQUFTbEMsT0FBTztFQUM1QixDQUFDO0FBRUQsUUFBTW1DLGdCQUF3QnZDLEVBQUUsTUFBTSxFQUFFd0MsT0FDdkN4QyxFQUFFLEtBQUssRUFDTGMsS0FBSyxNQUFNLDBCQUEwQixFQUNyQ0QsS0FBS2xCLFdBQVcsR0FBRyxJQUFJQSxXQUFXLGtCQUFrQixJQUFJQSxXQUFXLEdBQUcsQ0FBQyxDQUMxRTtBQUNBNEMsZ0JBQWN0QixHQUFHLFNBQVMsTUFBWTtBQUNyQyxRQUFJLENBQUN3QixRQUFROUMsV0FBVyxtQkFBbUIsQ0FBQyxHQUFHO0FBQzlDO0lBQ0Q7QUFDQUksVUFBTUUsS0FBSyxnQkFBZ0IsRUFBRUMsS0FBTUMsV0FBZ0I7QUFDbEQsVUFBSUgsRUFBQSx5QkFBQWdCLE9BQTJCYixLQUFLLENBQUUsRUFBRThCLElBQUksZ0JBQWdCLE1BQU0sUUFBUTtBQUN6RWpDLFVBQUEseUJBQUFnQixPQUEyQmIsS0FBSyxDQUFFLEVBQUV1QyxRQUFRLE9BQU87TUFDcEQ7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUNESCxnQkFBY0QsU0FBU3ZDLE1BQU1FLEtBQUsscUJBQXFCLENBQUM7QUFDekQ7O0FDckVBLElBQUluQixHQUFHQyxPQUFPQyxJQUFJLDRCQUE0QixNQUFNLFlBQVk7QUFDL0RnQixJQUFFRixXQUFXO0FBQ2Q7IiwKICAibmFtZXMiOiBbIldHX1dJS0lfSUQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJQYXRyb2wiLCAibG9jYWxpemUiLCAiZW4iLCAiUGF0cm9sbGVkIiwgIkFKQVgiLCAiQVBJIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiUXVpY2tQYXRyb2wiLCAiJGJvZHkiLCAiJCIsICJmaW5kIiwgImVhY2giLCAiaW5kZXgiLCAiZWxlbWVudCIsICJ0aW1lIiwgInRpbWVIcmVmIiwgImdldEF0dHJpYnV0ZSIsICJyZXZJZHMiLCAibWF0Y2giLCAicmV2SWQiLCAiJHBhdHJvbEJ0biIsICJhZGRDbGFzcyIsICJ0ZXh0IiwgImF0dHIiLCAiaWQiLCAiY29uY2F0IiwgIm9uIiwgImV2ZW50IiwgImFwaSIsICJpbml0TXdBcGkiLCAiYnRuaWQiLCAicmV2aWQiLCAiY3VycmVudFRhcmdldCIsICJkYXRhc2V0IiwgInBvc3RXaXRoVG9rZW4iLCAiYWN0aW9uIiwgImZvcm1hdCIsICJkb25lIiwgImVycm9yIiwgIm5vdGlmeSIsICJ0eXBlIiwgInRhZyIsICJjc3MiLCAicG9pbnRlckV2ZW50cyIsICJjb2xvciIsICJmYWlsIiwgImNvbnNvbGUiLCAiYXBwZW5kVG8iLCAiJHBhdHJvbEFsbEJ0biIsICJhcHBlbmQiLCAiY29uZmlybSIsICJ0cmlnZ2VyIl0KfQo=

})();

/* </nowiki> */
