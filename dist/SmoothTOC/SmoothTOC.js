/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/SmoothTOC}
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

// dist/SmoothTOC/SmoothTOC.js
//! src/SmoothTOC/SmoothTOC.ts
var import_ext_gadget = require("ext.gadget.Util");
var eventListener = (event) => {
  if (!(0, import_ext_gadget.checkA11yConfirmKey)(event)) {
    return;
  }
  const $element = $(event.currentTarget);
  const herf = $element.attr("href");
  if (!herf) {
    return;
  }
  const anchorOffset = $(herf).offset();
  if (!anchorOffset) {
    return;
  }
  event.preventDefault();
  const {
    skin
  } = mw.config.get();
  (0, import_ext_gadget.scrollTop)(skin === "vector" ? `${anchorOffset.top}px` : `${anchorOffset.top - 60}px`);
};
void (0, import_ext_gadget.getBody)().then(function smoothToc($body) {
  setTimeout(() => {
    for (const element of $body.find("#toc a, #p-toc a, .sidebar-toc-link")) {
      const $element = $(element);
      $element.on("click", eventListener);
      $element.on("keydown", eventListener);
    }
  }, 0);
});

})();

/* </nowiki> */

