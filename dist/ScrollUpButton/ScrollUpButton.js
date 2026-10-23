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
  button2.src = "data:image/svg+xml,".concat(encodeURI(empty_default));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Njcm9sbFVwQnV0dG9uL1Njcm9sbFVwQnV0dG9uLnRzIiwgInNyYy9TY3JvbGxVcEJ1dHRvbi9tb2R1bGVzL3Njcm9sbEJ1dHRvbi50cyIsICJzcmMvU2Nyb2xsVXBCdXR0b24vbW9kdWxlcy9zY3JvbGxCdXR0b24ubW9kdWxlLmxlc3MiLCAic3JjL1Njcm9sbFVwQnV0dG9uL2ltYWdlcy9lbXB0eS5zdmciLCAic3JjL1Njcm9sbFVwQnV0dG9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2Nyb2xsVXBCdXR0b24vbW9kdWxlcy9pbnNlcnRFbGVtZW50QW5kTGlzdGVuZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvaW5zZXJ0RWxlbWVudEFuZExpc3RlbmVyJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzY3JvbGxVcEJ1dHRvbigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyKCRib2R5KTtcbn0pO1xuIiwgImltcG9ydCB7Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSwgc2Nyb2xsVG9wfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtzY3JvbGxCdXR0b24sIHNjcm9sbEJ1dHRvbkRvd24sIHNjcm9sbEJ1dHRvblVwfSBmcm9tICcuL3Njcm9sbEJ1dHRvbi5tb2R1bGUubGVzcyc7XG5pbXBvcnQgZW1wdHlTdmcgZnJvbSAnLi4vaW1hZ2VzL2VtcHR5LnN2Zyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGFkZGl0aW9uYWxDbGFzc05hbWU6IHN0cmluZztcblx0YWx0OiBzdHJpbmc7XG5cdG9uQ2xpY2s6IChldmVudD86IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG5cdG9uTW91c2VFbnRlck1vdXNlTGVhdmU6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZDtcbn1cblxuY29uc3QgYnV0dG9uID0gKHByb3BzOiBQcm9wcykgPT4ge1xuXHRjb25zdCB7YWRkaXRpb25hbENsYXNzTmFtZSwgYWx0LCBvbkNsaWNrLCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlfSA9IHByb3BzO1xuXG5cdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRidXR0b24uY2xhc3NOYW1lID0gW3Njcm9sbEJ1dHRvbiwgYWRkaXRpb25hbENsYXNzTmFtZSwgJ25vcHJpbnQnXS5qb2luKCcgJyk7XG5cdGJ1dHRvbi5zcmMgPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJKGVtcHR5U3ZnKX1gO1xuXHRidXR0b24ud2lkdGggPSAzMjtcblx0YnV0dG9uLmhlaWdodCA9IDMyO1xuXHRidXR0b24uZHJhZ2dhYmxlID0gZmFsc2U7XG5cdGJ1dHRvbi5hbHQgPSBhbHQ7XG5cdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBhbHQpO1xuXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2spO1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG9uTW91c2VFbnRlck1vdXNlTGVhdmUpO1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIG9uTW91c2VFbnRlck1vdXNlTGVhdmUpO1xuXG5cdHJldHVybiBidXR0b247XG59O1xuXG5jb25zdCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUoZXZlbnQpO1xufTtcblxuY29uc3Qgc2Nyb2xsRG93bkJ1dHRvbiA9ICgpID0+IHtcblx0Y29uc3QgVE9fQk9UVE9NOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdUb0JvdHRvbScpO1xuXHRjb25zdCBvbkNsaWNrID0gKCk6IHZvaWQgPT4ge1xuXHRcdHNjcm9sbFRvcCgoJChkb2N1bWVudCkuaGVpZ2h0KCkgPz8gMCkgLSAoJCh3aW5kb3cpLmhlaWdodCgpID8/IDApKTtcblx0fTtcblx0cmV0dXJuIGJ1dHRvbih7XG5cdFx0YWRkaXRpb25hbENsYXNzTmFtZTogc2Nyb2xsQnV0dG9uRG93bixcblx0XHRhbHQ6IFRPX0JPVFRPTSxcblx0XHRvbkNsaWNrLFxuXHRcdG9uTW91c2VFbnRlck1vdXNlTGVhdmUsXG5cdH0pO1xufTtcblxuY29uc3Qgc2Nyb2xsVXBCdXR0b24gPSAoKSA9PiB7XG5cdGNvbnN0IFRPX1RPUDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnVG9Ub3AnKTtcblx0Y29uc3Qgb25DbGljayA9ICgpOiB2b2lkID0+IHtcblx0XHRzY3JvbGxUb3AoMCk7XG5cdH07XG5cdHJldHVybiBidXR0b24oe1xuXHRcdGFkZGl0aW9uYWxDbGFzc05hbWU6IHNjcm9sbEJ1dHRvblVwLFxuXHRcdGFsdDogVE9fVE9QLFxuXHRcdG9uQ2xpY2ssXG5cdFx0b25Nb3VzZUVudGVyTW91c2VMZWF2ZSxcblx0fSk7XG59O1xuXG5leHBvcnQge3Njcm9sbERvd25CdXR0b24sIHNjcm9sbFVwQnV0dG9ufTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL1Njcm9sbFVwQnV0dG9uL21vZHVsZXMvc2Nyb2xsQnV0dG9uLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3Qgc2Nyb2xsQnV0dG9uID0gXCJzY3JvbGxCdXR0b24tbW9kdWxlX19zY3JvbGwtYnV0dG9uXzRZQjRiYV9fNDEwMFwiO1xuZXhwb3J0IGNvbnN0IHNjcm9sbEJ1dHRvbkRvd24gPSBcInNjcm9sbEJ1dHRvbi1tb2R1bGVfX3Njcm9sbC1idXR0b24tZG93bl80WUI0YmFfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCBzY3JvbGxCdXR0b25VcCA9IFwic2Nyb2xsQnV0dG9uLW1vZHVsZV9fc2Nyb2xsLWJ1dHRvbi11cF80WUI0YmFfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInNjcm9sbEJ1dHRvblwiOiBzY3JvbGxCdXR0b24sXG4gIFwic2Nyb2xsQnV0dG9uRG93blwiOiBzY3JvbGxCdXR0b25Eb3duLFxuICBcInNjcm9sbEJ1dHRvblVwXCI6IHNjcm9sbEJ1dHRvblVwXG59O1xuICAgICAgIiwgIjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMVwiIGhlaWdodD1cIjFcIi8+IiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRUb0JvdHRvbTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTY3JvbGwgdG8gdGhlIGJvdHRvbScsXG5cdFx0XHQnemgtaGFucyc6ICfmu5rliqjoh7PpobXlupUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5ru+5YuV6Iez6aCB5bqVJyxcblx0XHR9KSxcblx0XHRUb1RvcDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHbyBiYWNrIHRvIHRoZSB0b3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rua5Yqo6Iez6aG16aG2Jyxcblx0XHRcdCd6aC1oYW50JzogJ+a7vuWLleiHs+mggemggicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7c2Nyb2xsRG93bkJ1dHRvbiwgc2Nyb2xsVXBCdXR0b259IGZyb20gJy4vc2Nyb2xsQnV0dG9uJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBpbnNlcnRFbGVtZW50YW5kTGlzdGVuZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IGRvd25CdXR0b24gPSBzY3JvbGxEb3duQnV0dG9uKCk7XG5cdGNvbnN0IHVwQnV0dG9uID0gc2Nyb2xsVXBCdXR0b24oKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW2Rvd25CdXR0b24sIHVwQnV0dG9uXSkge1xuXHRcdCRib2R5LmFwcGVuZChlbGVtZW50KTtcblxuXHRcdHRpcHB5KGVsZW1lbnQsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FsdCcpIGFzIHN0cmluZyxcblx0XHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0bGV0IGRvd25CdXR0b25CdXR0b206IHN0cmluZztcblx0XHRsZXQgdXBCdXR0b25CdXR0b206IHN0cmluZztcblxuXHRcdGlmIChcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm92ZWl0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWRnZXQtY2F0X2FfbG90LWNvbnRhaW5lcicpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FkZ2V0LXdvcmRfY291bnQtdGlwJylcblx0XHQpIHtcblx0XHRcdGRvd25CdXR0b25CdXR0b20gPSAnODVweCc7XG5cdFx0XHR1cEJ1dHRvbkJ1dHRvbSA9ICcxMjdweCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvd25CdXR0b25CdXR0b20gPSAnNDVweCc7XG5cdFx0XHR1cEJ1dHRvbkJ1dHRvbSA9ICc4NXB4Jztcblx0XHR9XG5cblx0XHRkb3duQnV0dG9uLnN0eWxlLmJvdHRvbSA9IGRvd25CdXR0b25CdXR0b207XG5cdFx0dXBCdXR0b24uc3R5bGUuYm90dG9tID0gdXBCdXR0b25CdXR0b207XG5cdH07XG5cdGNvbnN0IHNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlOiB0eXBlb2Ygc2Nyb2xsTGlzdGVuZXIgPSBtdy51dGlsLnRocm90dGxlKHNjcm9sbExpc3RlbmVyLCAyMDApO1xuXG5cdCQod2luZG93KS5vbignc2Nyb2xsIHNlbGVjdGlvbmNoYW5nZScsIHNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlKTtcbn07XG5cbmV4cG9ydCB7aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQXRCLElBQUFDLHFCQUE0REQsUUFBQSxpQkFBQTs7QUNDckQsSUFBTUUsZUFBZTtBQUNyQixJQUFNQyxtQkFBbUI7QUFDekIsSUFBTUMsaUJBQWlCOztBQ0g5QixJQUFBQyxnQkFBQTs7QUNBQSxJQUFBQyxvQkFBdUJOLFFBQUEsaUJBQUE7QUFFdkIsSUFBTU8sa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsV0FBQSxHQUFVRixrQkFBQUcsVUFBUztNQUNsQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxRQUFBLEdBQU9MLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUUsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FIVEEsSUFBTUMsU0FBVUMsV0FBaUI7QUFDaEMsUUFBTTtJQUFDQztJQUFxQkM7SUFBS0M7SUFBU0Ms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ZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJzY3JvbGxCdXR0b24iLCAic2Nyb2xsQnV0dG9uRG93biIsICJzY3JvbGxCdXR0b25VcCIsICJlbXB0eV9kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJUb0JvdHRvbSIsICJsb2NhbGl6ZSIsICJlbiIsICJUb1RvcCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYnV0dG9uIiwgInByb3BzIiwgImFkZGl0aW9uYWxDbGFzc05hbWUiLCAiYWx0IiwgIm9uQ2xpY2siLCAib25Nb3VzZUVudGVyTW91c2VMZWF2ZSIsICJvbk1vdXNlRW50ZXJNb3VzZUxlYXZlMiIsICJidXR0b24yIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImpvaW4iLCAic3JjIiwgImNvbmNhdCIsICJlbmNvZGVVUkkiLCAid2lkdGgiLCAiaGVpZ2h0IiwgImRyYWdnYWJsZSIsICJzZXRBdHRyaWJ1dGUiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlIiwgInNjcm9sbERvd25CdXR0b24iLCAiVE9fQk9UVE9NIiwgIl8kJGhlaWdodCIsICJfJCRoZWlnaHQyIiwgInNjcm9sbFRvcCIsICIkIiwgIndpbmRvdyIsICJzY3JvbGxVcEJ1dHRvbiIsICJUT19UT1AiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImluc2VydEVsZW1lbnRhbmRMaXN0ZW5lciIsICIkYm9keSIsICJkb3duQnV0dG9uIiwgInVwQnV0dG9uIiwgIl9pIiwgIl9hcnIiLCAibGVuZ3RoIiwgImVsZW1lbnQiLCAiYXBwZW5kIiwgInRpcHB5IiwgImFycm93IiwgImNvbnRlbnQiLCAiZ2V0QXR0cmlidXRlIiwgInBsYWNlbWVudCIsICJzY3JvbGxMaXN0ZW5lciIsICJkb3duQnV0dG9uQnV0dG9tIiwgInVwQnV0dG9uQnV0dG9tIiwgInF1ZXJ5U2VsZWN0b3IiLCAic3R5bGUiLCAiYm90dG9tIiwgInNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlIiwgIm13IiwgInV0aWwiLCAidGhyb3R0bGUiLCAib24iLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInNjcm9sbFVwQnV0dG9uMiJdCn0K
