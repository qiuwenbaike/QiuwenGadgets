/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-NavFrame.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/NavFrame}
 */

/**
 * Dynamic Navigation Bars.
 *
 * Based on script from en.wikipedia.org, 2008-09-15.
 *
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-NavFrame.js}
 * @maintainer Helder.wiki, 2012–2013
 * @maintainer Krinkle, 2013
 * @maintainer Fantasticfears, 2013-2014
 */

/**
 * Warning: NavFrame is retained for compatibility. Use .mw-collapsible instead.
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

// dist/NavFrame/NavFrame.js
//! src/NavFrame/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Hide: (0, import_ext_gadget.localize)({
      en: "Hide",
      ja: "非表示",
      "zh-hans": "隐藏",
      "zh-hant": "隱藏"
    }),
    Show: (0, import_ext_gadget.localize)({
      en: "Show",
      ja: "表示",
      "zh-hans": "显示",
      "zh-hant": "顯示"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/NavFrame/modules/core.ts
var collapseCaption = getMessage("Hide");
var expandCaption = getMessage("Show");
var navigationBarHide = '<span title="'.concat(collapseCaption, '" class="oo-ui-indicatorElement-indicator oo-ui-indicator-up" role="button" tabindex="0"></span>');
var navigationBarShow = '<span title="'.concat(expandCaption, '" class="oo-ui-indicatorElement-indicator oo-ui-indicator-down" role="button" tabindex="0"></span>');
var toggleNavigationBar = (indexNavigationBar) => {
  const $toggle = $("#NavToggle".concat(indexNavigationBar));
  const $frame = $("#NavFrame".concat(indexNavigationBar));
  if (!$frame || !$toggle) {
    return false;
  }
  const isFrameCollapsed = $frame.hasClass("collapsed");
  if (isFrameCollapsed) {
    $frame.find("> .NavPic, > .NavContent, > .toogleShow").each((_index, element) => {
      $(element).css("display", "block");
    });
    $frame.find("> .toggleHide").each((_index, element) => {
      $(element).css("display", "none");
    });
    $toggle.html(navigationBarHide);
    $frame.removeClass("collapsed");
  } else {
    $frame.find("> .NavPic, > .NavContent, > .toogleShow").each((_index, element) => {
      $(element).css("display", "none");
    });
    $frame.find("> .toggleHide").each((_index, element) => {
      $(element).css("display", "block");
    });
    $toggle.html(navigationBarShow);
    $frame.addClass("collapsed");
  }
};
var createNavigationBarToggleButton = ($content) => {
  $content.find("div.NavFrame").each((indexNavigationBar, frameElement) => {
    const $frame = $(frameElement).attr("id", "NavFrame".concat(indexNavigationBar));
    const $navToggle = $("<span>").addClass("NavToggle").attr("id", "NavToggle".concat(indexNavigationBar));
    $frame.find("> .NavHead").each((_index, element) => {
      $(element).on("click", toggleNavigationBar.bind(void 0, indexNavigationBar));
      return false;
    });
    if ($frame.hasClass("collapsed")) {
      $frame.find("> .NavPic, > .NavContent, > .toggleHide").each((_index, element) => {
        $(element).css("display", "none");
      });
    } else {
      $frame.find("> .toggleShow").each((_index, element) => {
        $(element).css("display", "none");
      });
    }
    let showNavigationBarHide = true;
    $frame.find("> .NavPic, > .NavContent").each((_index, element) => {
      if ($(element).css("display") === "none") {
        showNavigationBarHide = false;
        return false;
      }
    });
    $navToggle.html(showNavigationBarHide ? navigationBarHide : navigationBarShow);
    $frame.find("> .NavHead").each((_index, element) => {
      $(element).append($navToggle);
      return false;
    });
  });
};
var navFrameLoad = () => {
  mw.hook("wikipage.content").add(createNavigationBarToggleButton);
};
//! src/NavFrame/NavFrame.ts
$(navFrameLoad);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05hdkZyYW1lL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTmF2RnJhbWUvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9OYXZGcmFtZS9OYXZGcmFtZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEhpZGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSGlkZScsXG5cdFx0XHRqYTogJ+mdnuihqOekuicsXG5cdFx0XHQnemgtaGFucyc6ICfpmpDol48nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Zqx6JePJyxcblx0XHR9KSxcblx0XHRTaG93OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3cnLFxuXHRcdFx0amE6ICfooajnpLonLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+mhr+ekuicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgY29sbGFwc2VDYXB0aW9uOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdIaWRlJyk7XG5jb25zdCBleHBhbmRDYXB0aW9uOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdTaG93Jyk7XG5jb25zdCBuYXZpZ2F0aW9uQmFySGlkZTogc3RyaW5nID0gYDxzcGFuIHRpdGxlPVwiJHtjb2xsYXBzZUNhcHRpb259XCIgY2xhc3M9XCJvby11aS1pbmRpY2F0b3JFbGVtZW50LWluZGljYXRvciBvby11aS1pbmRpY2F0b3ItdXBcIiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCI+PC9zcGFuPmA7XG5jb25zdCBuYXZpZ2F0aW9uQmFyU2hvdzogc3RyaW5nID0gYDxzcGFuIHRpdGxlPVwiJHtleHBhbmRDYXB0aW9ufVwiIGNsYXNzPVwib28tdWktaW5kaWNhdG9yRWxlbWVudC1pbmRpY2F0b3Igb28tdWktaW5kaWNhdG9yLWRvd25cIiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCI+PC9zcGFuPmA7XG5cbi8qKlxuICogU2hvd3MgYW5kIGhpZGVzIGNvbnRlbnQgYW5kIHBpY3R1cmUgKGlmIGF2YWlsYWJsZSkgb2YgbmF2aWdhdGlvbiBiYXJzLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleE5hdmlnYXRpb25CYXIgVGhlIGluZGV4IG9mIG5hdmlnYXRpb24gYmFyIHRvIGJlIHRvZ2dsZWRcbiAqIEByZXR1cm4ge2ZhbHNlIHwgdm9pZH1cbiAqL1xuY29uc3QgdG9nZ2xlTmF2aWdhdGlvbkJhciA9IChpbmRleE5hdmlnYXRpb25CYXI6IG51bWJlcik6IGZhbHNlIHwgdm9pZCA9PiB7XG5cdGNvbnN0ICR0b2dnbGU6IEpRdWVyeSA9ICQoYCNOYXZUb2dnbGUke2luZGV4TmF2aWdhdGlvbkJhcn1gKTtcblx0Y29uc3QgJGZyYW1lOiBKUXVlcnkgPSAkKGAjTmF2RnJhbWUke2luZGV4TmF2aWdhdGlvbkJhcn1gKTtcblx0aWYgKCEkZnJhbWUgfHwgISR0b2dnbGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0Y29uc3QgaXNGcmFtZUNvbGxhcHNlZDogYm9vbGVhbiA9ICRmcmFtZS5oYXNDbGFzcygnY29sbGFwc2VkJyk7XG5cdGlmIChpc0ZyYW1lQ29sbGFwc2VkKSB7XG5cdFx0JGZyYW1lLmZpbmQoJz4gLk5hdlBpYywgPiAuTmF2Q29udGVudCwgPiAudG9vZ2xlU2hvdycpLmVhY2goKF9pbmRleDogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdFx0JChlbGVtZW50KS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHR9KTtcblx0XHQkZnJhbWUuZmluZCgnPiAudG9nZ2xlSGlkZScpLmVhY2goKF9pbmRleDogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdFx0JChlbGVtZW50KS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH0pO1xuXHRcdCR0b2dnbGUuaHRtbChuYXZpZ2F0aW9uQmFySGlkZSk7XG5cdFx0JGZyYW1lLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcblx0fSBlbHNlIHtcblx0XHQkZnJhbWUuZmluZCgnPiAuTmF2UGljLCA+IC5OYXZDb250ZW50LCA+IC50b29nbGVTaG93JykuZWFjaCgoX2luZGV4OiBudW1iZXIsIGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG5cdFx0XHQkKGVsZW1lbnQpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0fSk7XG5cdFx0JGZyYW1lLmZpbmQoJz4gLnRvZ2dsZUhpZGUnKS5lYWNoKChfaW5kZXg6IG51bWJlciwgZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0XHRcdCQoZWxlbWVudCkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0fSk7XG5cdFx0JHRvZ2dsZS5odG1sKG5hdmlnYXRpb25CYXJTaG93KTtcblx0XHQkZnJhbWUuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuXHR9XG59O1xuXG4vKipcbiAqIEFkZHMgc2hvdy9oaWRlLWJ1dHRvbiB0byBuYXZpZ2F0aW9uIGJhcnMuXG4gKlxuICogQHBhcmFtIHtKUXVlcnl9ICRjb250ZW50XG4gKi9cbmNvbnN0IGNyZWF0ZU5hdmlnYXRpb25CYXJUb2dnbGVCdXR0b24gPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHQvLyBJdGVyYXRlIG92ZXIgYWxsIChuZXcpIG5hdiBmcmFtZXNcblx0JGNvbnRlbnQuZmluZCgnZGl2Lk5hdkZyYW1lJykuZWFjaCgoaW5kZXhOYXZpZ2F0aW9uQmFyOiBudW1iZXIsIGZyYW1lRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0XHRjb25zdCAkZnJhbWU6IEpRdWVyeSA9ICQoZnJhbWVFbGVtZW50KS5hdHRyKCdpZCcsIGBOYXZGcmFtZSR7aW5kZXhOYXZpZ2F0aW9uQmFyfWApO1xuXHRcdC8vIElmIGZvdW5kIGEgbmF2aWdhdGlvbiBiYXJcblx0XHRjb25zdCAkbmF2VG9nZ2xlOiBKUXVlcnkgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnTmF2VG9nZ2xlJykuYXR0cignaWQnLCBgTmF2VG9nZ2xlJHtpbmRleE5hdmlnYXRpb25CYXJ9YCk7XG5cdFx0JGZyYW1lLmZpbmQoJz4gLk5hdkhlYWQnKS5lYWNoKChfaW5kZXg6IG51bWJlciwgZWxlbWVudDogSFRNTEVsZW1lbnQpOiBmYWxzZSA9PiB7XG5cdFx0XHQkKGVsZW1lbnQpLm9uKCdjbGljaycsIHRvZ2dsZU5hdmlnYXRpb25CYXIuYmluZCh1bmRlZmluZWQsIGluZGV4TmF2aWdhdGlvbkJhcikpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0pO1xuXHRcdGlmICgkZnJhbWUuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKSB7XG5cdFx0XHQkZnJhbWVcblx0XHRcdFx0LmZpbmQoJz4gLk5hdlBpYywgPiAuTmF2Q29udGVudCwgPiAudG9nZ2xlSGlkZScpXG5cdFx0XHRcdC5lYWNoKChfaW5kZXg6IG51bWJlciwgZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHQkKGVsZW1lbnQpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZnJhbWUuZmluZCgnPiAudG9nZ2xlU2hvdycpLmVhY2goKF9pbmRleDogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHQkKGVsZW1lbnQpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0bGV0IHNob3dOYXZpZ2F0aW9uQmFySGlkZTogYm9vbGVhbiA9IHRydWU7XG5cdFx0JGZyYW1lLmZpbmQoJz4gLk5hdlBpYywgPiAuTmF2Q29udGVudCcpLmVhY2goKF9pbmRleDogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IGZhbHNlIHwgdm9pZCA9PiB7XG5cdFx0XHRpZiAoJChlbGVtZW50KS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdHNob3dOYXZpZ2F0aW9uQmFySGlkZSA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0JG5hdlRvZ2dsZS5odG1sKHNob3dOYXZpZ2F0aW9uQmFySGlkZSA/IG5hdmlnYXRpb25CYXJIaWRlIDogbmF2aWdhdGlvbkJhclNob3cpO1xuXHRcdCRmcmFtZS5maW5kKCc+IC5OYXZIZWFkJykuZWFjaCgoX2luZGV4OiBudW1iZXIsIGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogZmFsc2UgPT4ge1xuXHRcdFx0JChlbGVtZW50KS5hcHBlbmQoJG5hdlRvZ2dsZSk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IG5hdkZyYW1lTG9hZCA9ICgpOiB2b2lkID0+IHtcblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChjcmVhdGVOYXZpZ2F0aW9uQmFyVG9nZ2xlQnV0dG9uKTtcbn07XG4iLCAiaW1wb3J0IHtuYXZGcmFtZUxvYWR9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuJChuYXZGcmFtZUxvYWQpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7OztBQUFBLElBQUFBLG9CQUF1QkMsUUFBQSxpQkFBQTtBQUV2QixJQUFNQyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxPQUFBLEdBQU1ILGtCQUFBSSxV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LFdBQU9HLEtBQUssMEJBQTBCLEVBQUVDLEtBQUssQ0FBQ0MsUUFBZ0JDLFlBQXVDO0FBQ3BHLFVBQUlQLEVBQUVPLE9BQU8sRUFBRUMsSUFBSSxTQUFTLE1BQU0sUUFBUTtBQUN6Q1csZ0NBQXdCO0FBQ3hCLGVBQU87TUFDUjtJQUNELENBQUM7QUFDREgsZUFBV1AsS0FBS1Usd0JBQXdCekIsb0JBQW9CRSxpQkFBaUI7QUFDN0VLLFdBQU9HLEtBQUssWUFBWSxFQUFFQyxLQUFLLENBQUNDLFFBQWdCQyxZQUFnQztBQUMvRVAsUUFBRU8sT0FBTyxFQUFFYSxPQUFPSixVQUFVO0FBQzVCLGFBQU87SUFDUixDQUFDO0VBQ0YsQ0FBQztBQUNGO0FBRU8sSUFBTUssZUFBZUEsTUFBWTtBQUN2Q0MsS0FBR0MsS0FBSyxrQkFBa0IsRUFBRUMsSUFBSVosK0JBQStCO0FBQ2hFOztBQ2xGQVosRUFBRXFCLFlBQVk7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkhpZGUiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiU2hvdyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiY29sbGFwc2VDYXB0aW9uIiwgImV4cGFuZENhcHRpb24iLCAibmF2aWdhdGlvbkJhckhpZGUiLCAiY29uY2F0IiwgIm5hdmlnYXRpb25CYXJTaG93IiwgInRvZ2dsZU5hdmlnYXRpb25CYXIiLCAiaW5kZXhOYXZpZ2F0aW9uQmFyIiwgIiR0b2dnbGUiLCAiJCIsICIkZnJhbWUiLCAiaXNGcmFtZUNvbGxhcHNlZCIsICJoYXNDbGFzcyIsICJmaW5kIiwgImVhY2giLCAiX2luZGV4IiwgImVsZW1lbnQiLCAiY3NzIiwgImh0bWwiLCAicmVtb3ZlQ2xhc3MiLCAiYWRkQ2xhc3MiLCAiY3JlYXRlTmF2aWdhdGlvbkJhclRvZ2dsZUJ1dHRvbiIsICIkY29udGVudCIsICJmcmFtZUVsZW1lbnQiLCAiYXR0ciIsICIkbmF2VG9nZ2xlIiwgIm9uIiwgImJpbmQiLCAic2hvd05hdmlnYXRpb25CYXJIaWRlIiwgImFwcGVuZCIsICJuYXZGcmFtZUxvYWQiLCAibXciLCAiaG9vayIsICJhZGQiXQp9Cg==

})();

/* </nowiki> */
