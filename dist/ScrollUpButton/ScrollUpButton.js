/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ScrollUpButton}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * Up Arrow (with blue color and white background)
 *
 * @source {@link https://www.qiuwenbaike.cn/wiki/File:Up_Arrow_(Blue,_White_BG).svg}
 * @author WaitSpring
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

// dist/ScrollUpButton/ScrollUpButton.js
//! src/ScrollUpButton/ScrollUpButton.ts
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/ScrollUpButton/modules/scrollButton.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/ScrollUpButton/modules/scrollButton.module.less
var scrollButton = "scrollButton-module__scroll-button_4YB4ba__4100";
var scrollButtonDown = "scrollButton-module__scroll-button-down_4YB4ba__4100";
var scrollButtonUp = "scrollButton-module__scroll-button-up_4YB4ba__4100";
//! src/ScrollUpButton/images/empty.svg
var empty_default = '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>';
//! src/ScrollUpButton/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    ToBottom: (0, import_ext_gadget.localize)({
      en: "Scroll to the bottom",
      "zh-hans": "滚动至页底",
      "zh-hant": "滾動至頁底"
    }),
    ToTop: (0, import_ext_gadget.localize)({
      en: "Go back to the top",
      "zh-hans": "滚动至页顶",
      "zh-hant": "滾動至頁頂"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ScrollUpButton/modules/scrollButton.ts
var button = (props) => {
  const {
    additionalClassName,
    alt,
    onClick,
    onMouseEnterMouseLeave: onMouseEnterMouseLeave2
  } = props;
  const button2 = document.createElement("img");
  button2.className = [scrollButton, additionalClassName, "noprint"].join(" ");
  button2.src = empty_default;
  button2.width = 32;
  button2.height = 32;
  button2.draggable = false;
  button2.alt = alt;
  button2.setAttribute("aria-label", alt);
  button2.addEventListener("click", onClick);
  button2.addEventListener("mouseenter", onMouseEnterMouseLeave2);
  button2.addEventListener("mouseleave", onMouseEnterMouseLeave2);
  return button2;
};
var onMouseEnterMouseLeave = (event) => {
  (0, import_ext_gadget2.changeOpacityWhenMouseEnterOrLeave)(event);
};
var scrollDownButton = () => {
  const TO_BOTTOM = getMessage("ToBottom");
  const onClick = () => {
    var _$$height, _$$height2;
    (0, import_ext_gadget2.scrollTop)(((_$$height = $(document).height()) !== null && _$$height !== void 0 ? _$$height : 0) - ((_$$height2 = $(window).height()) !== null && _$$height2 !== void 0 ? _$$height2 : 0));
  };
  return button({
    additionalClassName: scrollButtonDown,
    alt: TO_BOTTOM,
    onClick,
    onMouseEnterMouseLeave
  });
};
var scrollUpButton = () => {
  const TO_TOP = getMessage("ToTop");
  const onClick = () => {
    (0, import_ext_gadget2.scrollTop)(0);
  };
  return button({
    additionalClassName: scrollButtonUp,
    alt: TO_TOP,
    onClick,
    onMouseEnterMouseLeave
  });
};
//! src/ScrollUpButton/modules/insertElementAndListener.ts
var import_ext_gadget3 = require("ext.gadget.Tippy");
var insertElementandListener = ($body) => {
  const downButton = scrollDownButton();
  const upButton = scrollUpButton();
  for (var _i = 0, _arr = [downButton, upButton]; _i < _arr.length; _i++) {
    const element = _arr[_i];
    $body.append(element);
    (0, import_ext_gadget3.tippy)(element, {
      arrow: true,
      content: element.getAttribute("alt"),
      placement: "left"
    });
  }
  const scrollListener = () => {
    let downButtonButtom;
    let upButtonButtom;
    if (document.querySelector("#proveit") || document.querySelector(".gadget-cat_a_lot-container") || document.querySelector("#gadget-word_count-tip")) {
      downButtonButtom = "85px";
      upButtonButtom = "127px";
    } else {
      downButtonButtom = "45px";
      upButtonButtom = "85px";
    }
    downButton.style.bottom = downButtonButtom;
    upButton.style.bottom = upButtonButtom;
  };
  const scrollListenerWithThrottle = mw.util.throttle(scrollListener, 200);
  $(window).on("scroll selectionchange", scrollListenerWithThrottle);
};
//! src/ScrollUpButton/ScrollUpButton.ts
void (0, import_ext_gadget4.getBody)().then(function scrollUpButton2($body) {
  insertElementandListener($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Njcm9sbFVwQnV0dG9uL1Njcm9sbFVwQnV0dG9uLnRzIiwgInNyYy9TY3JvbGxVcEJ1dHRvbi9tb2R1bGVzL3Njcm9sbEJ1dHRvbi50cyIsICJzcmMvU2Nyb2xsVXBCdXR0b24vbW9kdWxlcy9zY3JvbGxCdXR0b24ubW9kdWxlLmxlc3MiLCAic3JjL1Njcm9sbFVwQnV0dG9uL2ltYWdlcy9lbXB0eS5zdmciLCAic3JjL1Njcm9sbFVwQnV0dG9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2Nyb2xsVXBCdXR0b24vbW9kdWxlcy9pbnNlcnRFbGVtZW50QW5kTGlzdGVuZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvaW5zZXJ0RWxlbWVudEFuZExpc3RlbmVyJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzY3JvbGxVcEJ1dHRvbigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyKCRib2R5KTtcbn0pO1xuIiwgImltcG9ydCB7Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSwgc2Nyb2xsVG9wfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtzY3JvbGxCdXR0b24sIHNjcm9sbEJ1dHRvbkRvd24sIHNjcm9sbEJ1dHRvblVwfSBmcm9tICcuL3Njcm9sbEJ1dHRvbi5tb2R1bGUubGVzcyc7XG5pbXBvcnQgZW1wdHlTdmcgZnJvbSAnLi4vaW1hZ2VzL2VtcHR5LnN2Zyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGFkZGl0aW9uYWxDbGFzc05hbWU6IHN0cmluZztcblx0YWx0OiBzdHJpbmc7XG5cdG9uQ2xpY2s6IChldmVudD86IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG5cdG9uTW91c2VFbnRlck1vdXNlTGVhdmU6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZDtcbn1cblxuY29uc3QgYnV0dG9uID0gKHByb3BzOiBQcm9wcykgPT4ge1xuXHRjb25zdCB7YWRkaXRpb25hbENsYXNzTmFtZSwgYWx0LCBvbkNsaWNrLCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlfSA9IHByb3BzO1xuXG5cdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRidXR0b24uY2xhc3NOYW1lID0gW3Njcm9sbEJ1dHRvbiwgYWRkaXRpb25hbENsYXNzTmFtZSwgJ25vcHJpbnQnXS5qb2luKCcgJyk7XG5cdGJ1dHRvbi5zcmMgPSBlbXB0eVN2Zztcblx0YnV0dG9uLndpZHRoID0gMzI7XG5cdGJ1dHRvbi5oZWlnaHQgPSAzMjtcblx0YnV0dG9uLmRyYWdnYWJsZSA9IGZhbHNlO1xuXHRidXR0b24uYWx0ID0gYWx0O1xuXHRidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgYWx0KTtcblxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrKTtcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlKTtcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlKTtcblxuXHRyZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3Qgb25Nb3VzZUVudGVyTW91c2VMZWF2ZSA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlKGV2ZW50KTtcbn07XG5cbmNvbnN0IHNjcm9sbERvd25CdXR0b24gPSAoKSA9PiB7XG5cdGNvbnN0IFRPX0JPVFRPTTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnVG9Cb3R0b20nKTtcblx0Y29uc3Qgb25DbGljayA9ICgpOiB2b2lkID0+IHtcblx0XHRzY3JvbGxUb3AoKCQoZG9jdW1lbnQpLmhlaWdodCgpID8/IDApIC0gKCQod2luZG93KS5oZWlnaHQoKSA/PyAwKSk7XG5cdH07XG5cdHJldHVybiBidXR0b24oe1xuXHRcdGFkZGl0aW9uYWxDbGFzc05hbWU6IHNjcm9sbEJ1dHRvbkRvd24sXG5cdFx0YWx0OiBUT19CT1RUT00sXG5cdFx0b25DbGljayxcblx0XHRvbk1vdXNlRW50ZXJNb3VzZUxlYXZlLFxuXHR9KTtcbn07XG5cbmNvbnN0IHNjcm9sbFVwQnV0dG9uID0gKCkgPT4ge1xuXHRjb25zdCBUT19UT1A6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ1RvVG9wJyk7XG5cdGNvbnN0IG9uQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG5cdFx0c2Nyb2xsVG9wKDApO1xuXHR9O1xuXHRyZXR1cm4gYnV0dG9uKHtcblx0XHRhZGRpdGlvbmFsQ2xhc3NOYW1lOiBzY3JvbGxCdXR0b25VcCxcblx0XHRhbHQ6IFRPX1RPUCxcblx0XHRvbkNsaWNrLFxuXHRcdG9uTW91c2VFbnRlck1vdXNlTGVhdmUsXG5cdH0pO1xufTtcblxuZXhwb3J0IHtzY3JvbGxEb3duQnV0dG9uLCBzY3JvbGxVcEJ1dHRvbn07XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9TY3JvbGxVcEJ1dHRvbi9tb2R1bGVzL3Njcm9sbEJ1dHRvbi5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IHNjcm9sbEJ1dHRvbiA9IFwic2Nyb2xsQnV0dG9uLW1vZHVsZV9fc2Nyb2xsLWJ1dHRvbl80WUI0YmFfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCBzY3JvbGxCdXR0b25Eb3duID0gXCJzY3JvbGxCdXR0b24tbW9kdWxlX19zY3JvbGwtYnV0dG9uLWRvd25fNFlCNGJhX180MTAwXCI7XG5leHBvcnQgY29uc3Qgc2Nyb2xsQnV0dG9uVXAgPSBcInNjcm9sbEJ1dHRvbi1tb2R1bGVfX3Njcm9sbC1idXR0b24tdXBfNFlCNGJhX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJzY3JvbGxCdXR0b25cIjogc2Nyb2xsQnV0dG9uLFxuICBcInNjcm9sbEJ1dHRvbkRvd25cIjogc2Nyb2xsQnV0dG9uRG93bixcbiAgXCJzY3JvbGxCdXR0b25VcFwiOiBzY3JvbGxCdXR0b25VcFxufTtcbiAgICAgICIsICI8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIxXCIvPiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0VG9Cb3R0b206IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2Nyb2xsIHRvIHRoZSBib3R0b20nLFxuXHRcdFx0J3poLWhhbnMnOiAn5rua5Yqo6Iez6aG15bqVJyxcblx0XHRcdCd6aC1oYW50JzogJ+a7vuWLleiHs+mggeW6lScsXG5cdFx0fSksXG5cdFx0VG9Ub3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnR28gYmFjayB0byB0aGUgdG9wJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a7muWKqOiHs+mhtemhticsXG5cdFx0XHQnemgtaGFudCc6ICfmu77li5Xoh7PpoIHpoIInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge3Njcm9sbERvd25CdXR0b24sIHNjcm9sbFVwQnV0dG9ufSBmcm9tICcuL3Njcm9sbEJ1dHRvbic7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3QgaW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCBkb3duQnV0dG9uID0gc2Nyb2xsRG93bkJ1dHRvbigpO1xuXHRjb25zdCB1cEJ1dHRvbiA9IHNjcm9sbFVwQnV0dG9uKCk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIFtkb3duQnV0dG9uLCB1cEJ1dHRvbl0pIHtcblx0XHQkYm9keS5hcHBlbmQoZWxlbWVudCk7XG5cblx0XHR0aXBweShlbGVtZW50LCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhbHQnKSBhcyBzdHJpbmcsXG5cdFx0XHRwbGFjZW1lbnQ6ICdsZWZ0Jyxcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IHNjcm9sbExpc3RlbmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdGxldCBkb3duQnV0dG9uQnV0dG9tOiBzdHJpbmc7XG5cdFx0bGV0IHVwQnV0dG9uQnV0dG9tOiBzdHJpbmc7XG5cblx0XHRpZiAoXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvdmVpdCcpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FkZ2V0LWNhdF9hX2xvdC1jb250YWluZXInKSB8fFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhZGdldC13b3JkX2NvdW50LXRpcCcpXG5cdFx0KSB7XG5cdFx0XHRkb3duQnV0dG9uQnV0dG9tID0gJzg1cHgnO1xuXHRcdFx0dXBCdXR0b25CdXR0b20gPSAnMTI3cHgnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb3duQnV0dG9uQnV0dG9tID0gJzQ1cHgnO1xuXHRcdFx0dXBCdXR0b25CdXR0b20gPSAnODVweCc7XG5cdFx0fVxuXG5cdFx0ZG93bkJ1dHRvbi5zdHlsZS5ib3R0b20gPSBkb3duQnV0dG9uQnV0dG9tO1xuXHRcdHVwQnV0dG9uLnN0eWxlLmJvdHRvbSA9IHVwQnV0dG9uQnV0dG9tO1xuXHR9O1xuXHRjb25zdCBzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZTogdHlwZW9mIHNjcm9sbExpc3RlbmVyID0gbXcudXRpbC50aHJvdHRsZShzY3JvbGxMaXN0ZW5lciwgMjAwKTtcblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCBzZWxlY3Rpb25jaGFuZ2UnLCBzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZSk7XG59O1xuXG5leHBvcnQge2luc2VydEVsZW1lbnRhbmRMaXN0ZW5lcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0F0QixJQUFBQyxxQkFBNERELFFBQUEsaUJBQUE7O0FDQ3JELElBQU1FLGVBQWU7QUFDckIsSUFBTUMsbUJBQW1CO0FBQ3pCLElBQU1DLGlCQUFpQjs7QUNIOUIsSUFBQUMsZ0JBQUE7O0FDQUEsSUFBQUMsb0JBQXVCTixRQUFBLGlCQUFBO0FBRXZCLElBQU1PLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFdBQUEsR0FBVUYsa0JBQUFHLFVBQVM7TUFDbEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsUUFBQSxHQUFPTCxrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1FLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBSFRBLElBQU1DLFNBQVVDLFdBQWlCO0FBQ2hDLFFBQU07SUFBQ0M7SUFBcUJDO0lBQUtDO0lBQVNDLHdCQUFBQztFQUFzQixJQUFJTDtBQUVwRSxRQUFNTSxVQUFTQyxTQUFTQyxjQUFjLEtBQUs7QUFDM0NGLFVBQU9HLFlBQVksQ0FBQ3ZCLGNBQWNlLHFCQUFxQixTQUFTLEVBQUVTLEtBQUssR0FBRztBQUMxRUosVUFBT0ssTUFBTXRCO0FBQ2JpQixVQUFPTSxRQUFRO0FBQ2ZOLFVBQU9PLFNBQVM7QUFDaEJQLFVBQU9RLFlBQVk7QUFDbkJSLFVBQU9KLE1BQU1BO0FBQ2JJLFVBQU9TLGFBQWEsY0FBY2IsR0FBRztBQUVyQ0ksVUFBT1UsaUJBQWlCLFNBQVNiLE9BQU87QUFDeENHLFVBQU9VLGlCQUFpQixjQUFjWCx1QkFBc0I7QUFDNURDLFVBQU9VLGlCQUFpQixjQUFjWCx1QkFBc0I7QUFFNUQsU0FBT0M7QUFDUjtBQUVBLElBQU1GLHlCQUEwQmEsV0FBNEI7QUFDM0QsR0FBQSxHQUFBaEMsbUJBQUFpQyxvQ0FBbUNELEtBQUs7QUFDekM7QUFFQSxJQUFNRSxtQkFBbUJBLE1BQU07QUFDOUIsUUFBTUMsWUFBb0J2QixXQUFXLFVBQVU7QUFDL0MsUUFBTU0sVUFBVUEsTUFBWTtBQUFBLFFBQUFrQixXQUFBQztBQUMzQixLQUFBLEdBQUFyQyxtQkFBQXNDLGFBQUFGLFlBQVdHLEVBQUVqQixRQUFRLEVBQUVNLE9BQU8sT0FBQSxRQUFBUSxjQUFBLFNBQUFBLFlBQUssT0FBQUMsYUFBTUUsRUFBRUMsTUFBTSxFQUFFWixPQUFPLE9BQUEsUUFBQVMsZUFBQSxTQUFBQSxhQUFLLEVBQUU7RUFDbEU7QUFDQSxTQUFPdkIsT0FBTztJQUNiRSxxQkFBcUJkO0lBQ3JCZSxLQUFLa0I7SUFDTGpCO0lBQ0FDO0VBQ0QsQ0FBQztBQUNGO0FBRUEsSUFBTXNCLGlCQUFpQkEsTUFBTTtBQUM1QixRQUFNQyxTQUFpQjlCLFdBQVcsT0FBTztBQUN6QyxRQUFNTSxVQUFVQSxNQUFZO0FBQzNCLEtBQUEsR0FBQWxCLG1CQUFBc0MsV0FBVSxDQUFDO0VBQ1o7QUFDQSxTQUFPeEIsT0FBTztJQUNiRSxxQkFBcUJiO0lBQ3JCYyxLQUFLeUI7SUFDTHhCO0lBQ0FDO0VBQ0QsQ0FBQztBQUNGOztBSTFEQSxJQUFBd0IscUJBQW9CNUMsUUFBQSxrQkFBQTtBQUVwQixJQUFNNkMsMkJBQTRCQyxXQUF5QztBQUMxRSxRQUFNQyxhQUFhWixpQkFBaUI7QUFDcEMsUUFBTWEsV0FBV04sZUFBZTtBQUVoQyxXQUFBTyxLQUFBLEdBQUFDLE9BQXNCLENBQUNILFlBQVlDLFFBQVEsR0FBQUMsS0FBQUMsS0FBQUMsUUFBQUYsTUFBRztBQUE5QyxVQUFXRyxVQUFBRixLQUFBRCxFQUFBO0FBQ1ZILFVBQU1PLE9BQU9ELE9BQU87QUFFcEIsS0FBQSxHQUFBUixtQkFBQVUsT0FBTUYsU0FBUztNQUNkRyxPQUFPO01BQ1BDLFNBQVNKLFFBQVFLLGFBQWEsS0FBSztNQUNuQ0MsV0FBVztJQUNaLENBQUM7RUFDRjtBQUVBLFFBQU1DLGlCQUFpQkEsTUFBWTtBQUNsQyxRQUFJQztBQUNKLFFBQUlDO0FBRUosUUFDQ3RDLFNBQVN1QyxjQUFjLFVBQVUsS0FDakN2QyxTQUFTdUMsY0FBYyw2QkFBNkIsS0FDcER2QyxTQUFTdUMsY0FBYyx3QkFBd0IsR0FDOUM7QUFDREYseUJBQW1CO0FBQ25CQyx1QkFBaUI7SUFDbEIsT0FBTztBQUNORCx5QkFBbUI7QUFDbkJDLHVCQUFpQjtJQUNsQjtBQUVBZCxlQUFXZ0IsTUFBTUMsU0FBU0o7QUFDMUJaLGFBQVNlLE1BQU1DLFNBQVNIO0VBQ3pCO0FBQ0EsUUFBTUksNkJBQW9EQyxHQUFHQyxLQUFLQyxTQUFTVCxnQkFBZ0IsR0FBRztBQUU5Rm5CLElBQUVDLE1BQU0sRUFBRTRCLEdBQUcsMEJBQTBCSiwwQkFBMEI7QUFDbEU7O0FMcENBLE1BQUEsR0FBS2xFLG1CQUFBdUUsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLGdCQUFlMUIsT0FBc0M7QUFDakZELDJCQUF5QkMsS0FBSztBQUMvQixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAic2Nyb2xsQnV0dG9uIiwgInNjcm9sbEJ1dHRvbkRvd24iLCAic2Nyb2xsQnV0dG9uVXAiLCAiZW1wdHlfZGVmYXVsdCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiVG9Cb3R0b20iLCAibG9jYWxpemUiLCAiZW4iLCAiVG9Ub3AiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImJ1dHRvbiIsICJwcm9wcyIsICJhZGRpdGlvbmFsQ2xhc3NOYW1lIiwgImFsdCIsICJvbkNsaWNrIiwgIm9uTW91c2VFbnRlck1vdXNlTGVhdmUiLCAib25Nb3VzZUVudGVyTW91c2VMZWF2ZTIiLCAiYnV0dG9uMiIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJqb2luIiwgInNyYyIsICJ3aWR0aCIsICJoZWlnaHQiLCAiZHJhZ2dhYmxlIiwgInNldEF0dHJpYnV0ZSIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2ZW50IiwgImNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUiLCAic2Nyb2xsRG93bkJ1dHRvbiIsICJUT19CT1RUT00iLCAiXyQkaGVpZ2h0IiwgIl8kJGhlaWdodDIiLCAic2Nyb2xsVG9wIiwgIiQiLCAid2luZG93IiwgInNjcm9sbFVwQnV0dG9uIiwgIlRPX1RPUCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiaW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyIiwgIiRib2R5IiwgImRvd25CdXR0b24iLCAidXBCdXR0b24iLCAiX2kiLCAiX2FyciIsICJsZW5ndGgiLCAiZWxlbWVudCIsICJhcHBlbmQiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJnZXRBdHRyaWJ1dGUiLCAicGxhY2VtZW50IiwgInNjcm9sbExpc3RlbmVyIiwgImRvd25CdXR0b25CdXR0b20iLCAidXBCdXR0b25CdXR0b20iLCAicXVlcnlTZWxlY3RvciIsICJzdHlsZSIsICJib3R0b20iLCAic2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUiLCAibXciLCAidXRpbCIsICJ0aHJvdHRsZSIsICJvbiIsICJnZXRCb2R5IiwgInRoZW4iLCAic2Nyb2xsVXBCdXR0b24yIl0KfQo=
