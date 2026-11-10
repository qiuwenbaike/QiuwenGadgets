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
  button2.src = `data:image/svg+xml,${encodeURI(empty_default)}`;
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
    (0, import_ext_gadget2.scrollTop)(($(document).height() ?? 0) - ($(window).height() ?? 0));
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
  for (const element of [downButton, upButton]) {
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

