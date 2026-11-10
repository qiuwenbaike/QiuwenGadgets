/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/User:Enterprisey/search-shortcuts.js}
 * @base {@link https://en.wikipedia.org/wiki/User:Guarapiranga/search-shortcuts.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/SearchShortcuts}
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

// dist/SearchShortcuts/SearchShortcuts.js
//! src/SearchShortcuts/modules/util/keydownListener.ts
var keydownListener = ($searchInput) => {
  var _$searchInput$val;
  const inputValue = (_$searchInput$val = $searchInput.val()) === null || _$searchInput$val === void 0 ? void 0 : _$searchInput$val.trim();
  if (!inputValue || !/^(\[\[|\{\{)[^{}]+(}}|\]\])$/.test(inputValue)) {
    return;
  }
  if (inputValue.startsWith("{{")) {
    if (inputValue.startsWith("{{#invoke:")) {
      $searchInput.val(inputValue.replace("{{#invoke:", "Module:").replace(/\s*\|.*/, "").replace("}}", ""));
    } else if (inputValue.startsWith("{{#:")) {
      $searchInput.val(inputValue.replace("{{#", "H:MW#").replace(/\s*\|.*/, "").replace("}}", ""));
    } else if (inputValue.startsWith("{{:")) {
      $searchInput.val(inputValue.replace("{{:", "").replace(/\s*\|.*/, "").replace("}}", ""));
    } else {
      $searchInput.val(inputValue.replace("{{", "Template:").replace(/\s*\|.*/, "").replace("}}", ""));
    }
  } else if (inputValue.startsWith("[[")) {
    $searchInput.val(inputValue.replace(/\[\[:?/, "").replace(/\s*\|.*/, "").replace(/\s*#.*/, "").replace("]]", ""));
  }
};
//! src/SearchShortcuts/modules/addKeyDownListener.ts
var addKeyDownListener = ($searchInput) => {
  $searchInput.on("keydown", () => {
    keydownListener($searchInput);
  });
};
//! src/SearchShortcuts/SearchShortcuts.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/SearchShortcuts/options.json
var searchInputSelector = "#searchInput";
//! src/SearchShortcuts/modules/getSearchInput.ts
var getSearchInput = ($body) => {
  const $searchInput = $body.find(searchInputSelector);
  return $searchInput;
};
//! src/SearchShortcuts/SearchShortcuts.ts
void (0, import_ext_gadget.getBody)().then(function searchShortcuts($body) {
  const $searchInput = getSearchInput($body);
  if (!$searchInput.length) {
    return;
  }
  addKeyDownListener($searchInput);
});

})();

/* </nowiki> */

