/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/StickyTableHeaders}
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

// dist/StickyTableHeaders/StickyTableHeaders.js
//! src/StickyTableHeaders/StickyTableHeaders.module.less
var stickyheader = "StickyTableHeaders-module__stickyheader_eOk_LG__4100";
var thead = "StickyTableHeaders-module__thead_eOk_LG__4100";
//! src/StickyTableHeaders/StickyTableHeaders.ts
var import_ext_gadget = require("ext.gadget.Util");
void (0, import_ext_gadget.getBody)().then(($body) => {
  for (const table of $body.find(".wikitable:not(.sortable)")) {
    const $table = $(table);
    const $thead = $table.find("thead");
    const $trTh = $table.find("tbody > tr > th").parent().eq(0);
    const $trTd = $table.find("tbody > tr > td").parent();
    const $target = $thead.length ? $thead : $trTh.length ? $trTh : null;
    if ($target && $trTd.length >= 5) {
      $table.addClass(stickyheader);
      $target.addClass(thead);
    }
  }
});

})();

/* </nowiki> */

