/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-switcher.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-switcher.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Switcher}
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

// dist/Switcher/Switcher.js
//! src/Switcher/Switcher.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Switcher/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Show all": (0, import_ext_gadget.localize)({
      en: "Show all",
      "zh-hans": "显示全部",
      "zh-hant": "顯示全部"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Switcher/Switcher.ts
void (0, import_ext_gadget2.getBody)().then(function switcherJS() {
  for (const [index, container] of [...document.querySelectorAll(".switcher-container")].entries()) {
    const radioName = `switcher-${index}`;
    let $selectedSwitcher;
    let $radio;
    const switchers = [];
    for (const switcher of [...container.children].values()) {
      const label = switcher.querySelector(".switcher-label");
      if (!(label !== null && label !== void 0 && label.childNodes.length)) {
        continue;
      }
      switchers[switchers.length] = switcher;
      const $switcher = $(switcher);
      $radio = $("<input>").prop({
        type: "radio",
        name: radioName
      });
      $radio.on("click", () => {
        var _$selectedSwitcher;
        (_$selectedSwitcher = $selectedSwitcher) === null || _$selectedSwitcher === void 0 || _$selectedSwitcher.hide();
        $switcher.show();
        $selectedSwitcher = $switcher;
      });
      if (!$selectedSwitcher) {
        $selectedSwitcher = $switcher;
        $radio.prop("checked", true);
      } else if (label.dataset["switcherDefault"]) {
        $switcher.hide();
      } else {
        $radio.trigger("click");
      }
      const $radios = $("<label>").css("display", "block");
      $radios.append($radio, label.childNodes);
      $radios.appendTo(container);
      label.remove();
    }
    if (switchers.length > 1) {
      const $label = $("<label>").css("display", "block").text(getMessage("Show all"));
      const $showAllRadio = $("<input>").prop({
        type: "radio",
        name: radioName
      });
      $showAllRadio.on("click", () => {
        const $switchers = $(switchers);
        $switchers.show();
        $selectedSwitcher = $switchers;
      });
      $label.prepend($showAllRadio);
      $label.appendTo(container);
    } else if (switchers.length) {
      var _$radio;
      (_$radio = $radio) === null || _$radio === void 0 || _$radio.remove();
    }
  }
});

})();

/* </nowiki> */

