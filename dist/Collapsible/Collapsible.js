/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://rs.miraheze.org/wiki/MediaWiki:Gadget-collapsible.js}
 * @base {@link https://rs.miraheze.org/wiki/MediaWiki:Gadget-collapsible.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Collapsible}
 * @author SolidBlock
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

// dist/Collapsible/Collapsible.js
//! src/Collapsible/modules/util/generateTargetElements.ts
var generateTargetElements = ($content) => {
  for (const element of $content.find(".parent-collapsible, .parent-collapsible-using-slide, .parent-collapsible-next")) {
    const $parent = $(element).parent();
    for (const className of element.classList) {
      if (className.slice(0, 18) === "parent-collapsible") {
        $parent.addClass(className.replace(/^parent-/, ""));
      }
    }
  }
  $content.find(".collapsible-using-slide, .collapsible-next").addClass("collapsible");
  const $collapsibles = $content.find(".collapsible");
  return $collapsibles;
};
//! src/Collapsible/modules/addListener.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/Collapsible/modules/util/hideElement.ts
var hideElement = ($collapsible, time) => {
  const useSlide = $collapsible.hasClass("collapsible-using-slide");
  if ($collapsible.hasClass("collapsible-next")) {
    const $element = $collapsible.next();
    if (useSlide) {
      $element.slideUp(time);
    } else {
      $element.fadeOut(time);
    }
  } else {
    const $elements = $collapsible.is("table") ? $collapsible.children().children("tr") : $collapsible.contents();
    for (const element of $elements) {
      const $element = $(element);
      if ($element.hasClass("collapsible-cascade")) {
        hideElement($element, time);
      } else if (!$element.hasClass("collapsible-always-show")) {
        if (useSlide) {
          $element.slideUp(time);
        } else {
          $element.fadeOut(time);
        }
      }
    }
  }
};
//! src/Collapsible/modules/util/showElement.ts
var showElement = ($collapsible, time) => {
  const useSlide = $collapsible.hasClass("collapsible-using-slide");
  if ($collapsible.hasClass("collapsible-next")) {
    const $element = $collapsible.next();
    if (useSlide) {
      $element.slideDown(time);
    } else {
      $element.fadeIn(time);
    }
  } else {
    const $elements = $collapsible.is("table") ? $collapsible.children().children("tr") : $collapsible.contents();
    for (const element of $elements) {
      const $element = $(element);
      if ($element.hasClass("collapsible-cascade")) {
        showElement($element, time);
      } else if (!$element.hasClass("collapsible-always-show")) {
        if (useSlide) {
          $element.slideDown(time);
        } else {
          $element.fadeIn(time);
        }
      }
    }
  }
};
//! src/Collapsible/modules/util/toggleElement.ts
var toggleElement = ($collapsible) => {
  const collapsed = $collapsible.hasClass("collapsed");
  const duration = Number.parseInt($collapsible.data("collapse-duration"), 10) || 200;
  if (collapsed) {
    showElement($collapsible, duration);
    $collapsible.removeClass("collapsed");
  } else {
    hideElement($collapsible, duration);
    $collapsible.addClass("collapsed");
  }
};
//! src/Collapsible/modules/addListener.ts
var addListener = ($collapsible, $togglerLink, hideText, showText) => {
  const eventListener = (event) => {
    if (!(0, import_ext_gadget.checkA11yConfirmKey)(event)) {
      return;
    }
    event.preventDefault();
    toggleElement($collapsible);
    if ($collapsible.hasClass("collapsed")) {
      $togglerLink.text(showText);
    } else {
      $togglerLink.text(hideText);
    }
  };
  $togglerLink.on("click", eventListener);
  $togglerLink.on("keydown", eventListener);
};
//! src/Collapsible/modules/addToggler.ts
var addToggler = ($collapsible, $toggler) => {
  const $appendHere = $collapsible.find(".collapsible-toggle-append-here").not(".collapsible-toggle-appended");
  if ($collapsible.hasClass("collapsible-next")) {
    $collapsible.append($toggler);
  } else if ($appendHere.length) {
    $appendHere.append($toggler);
    $appendHere.addClass("collapsible-toggle-appended");
    $appendHere.parentsUntil($collapsible).addClass("collapsible-always-show");
  } else if ($collapsible.hasClass("navbox")) {
    $collapsible.children(".navbox-title").first().addClass("collapsible-always-show").append($toggler);
  } else if ($collapsible.hasClass("NavFrame")) {
    $collapsible.children(".NavHead").first().addClass("collapsible-always-show").append($toggler);
  } else if ($collapsible.is("table")) {
    const $caption = $collapsible.children("caption");
    if ($caption.length) {
      $caption.first().append($toggler);
    } else {
      const $trows = $collapsible.children().children("tr");
      $trows.first().addClass("collapsible-always-show").children().last().append($toggler);
    }
  } else {
    const $toToggle = $collapsible.children(".collapsible-always-show");
    if ($toToggle.length) {
      $toToggle.first().append($toggler);
    } else {
      $collapsible.prepend($toggler);
      $toggler.addClass("collapsible-always-show");
    }
  }
};
//! src/Collapsible/modules/util/Collapsible.module.less
var toggler = "Collapsible-module__toggler_kvMGjG__4100";
//! src/Collapsible/modules/util/generateTogglerElement.ts
var generateTogglerElement = ($collapsible, hideText, showText) => {
  const $toggler = $("<span>").addClass([toggler, "noprint"]).append("[", $("<a>").attr("role", "button").attr("tabindex", 0).text($collapsible.hasClass("collapsed") ? showText : hideText), "]");
  return $toggler;
};
//! src/Collapsible/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Collapse: (0, import_ext_gadget2.localize)({
      en: "collapse",
      ja: "折り畳み",
      "zh-hans": "折叠",
      "zh-hant": "折疊"
    }),
    Expand: (0, import_ext_gadget2.localize)({
      en: "expand",
      ja: "展開",
      "zh-hans": "展开",
      "zh-hant": "展開"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Collapsible/modules/makeCollapsible.ts
var makeCollapsible = ($collapsibles) => {
  for (const element of $collapsibles) {
    const $collapsible = $(element);
    if ($collapsible.data("made-collapsible")) {
      continue;
    }
    const hideText = $collapsible.data("collapsetext") || getMessage("Collapse");
    const showText = $collapsible.data("expandtext") || getMessage("Expand");
    const $toggler = generateTogglerElement($collapsible, hideText, showText);
    const $togglerLink = $toggler.find("a");
    addToggler($collapsible, $toggler);
    if ($collapsible.hasClass("collapsed")) {
      hideElement($collapsible, 0);
    }
    addListener($collapsible, $togglerLink, hideText, showText);
    $collapsible.data("made-collapsible", true);
  }
};
//! src/Collapsible/modules/navFrame.ts
var navFrame = ($content) => {
  for (const element of $content.find(".NavToggle, .toggleShow, .toggleHide, .NavEnd")) {
    element.remove();
  }
  for (const element of $content.find(".NavFrame, .Boxmerge")) {
    if (!element.classList.contains("collapsible")) {
      element.classList.add("collapsible");
    }
    if (!element.classList.contains("Boxmerge")) {
      element.classList.replace("Boxmerge", "NavFrame");
    }
  }
  for (const element of $content.find(".NavContent, .NavPic")) {
    if (element.style.display !== "none") {
      continue;
    }
    if (element.parentElement && element.parentElement.classList.contains("NavFrame")) {
      element.parentElement.classList.add("collapsed");
    }
  }
};
//! src/Collapsible/Collapsible.ts
/*!
 * @description 为元素添加“隐藏”和“显示”的按钮。
 *
 * 用法说明：
 *
 * 带有 collapsible 类的元素默认可折叠。
 * - 对于 navbox，折叠时会保留标题栏，并将折叠按钮添加在标题栏中。
 * - 对于 table，折叠时会保留 caption 或第一行，并将折叠按钮添加在 caption 末尾
 *   或者第一行最后一格末尾。
 * - 对于其他元素，
 *   - 若其子元素有带有 collapsible-always-show 类，那么除了该子元素之外的各个
 *   子元素都会随折叠隐藏，且折叠按钮添加在该子元素末尾。
 *   - 若没有子元素带有 collapsible-always-show 类，那么所有子元素都会被折叠，
 *   折叠按钮添加在整个 collapsible 元素的开头，且该按钮不会随折叠隐藏。
 *   - 若子元素带有 collapsible-cascade 类，那么当折叠时，该元素自身不是隐藏，
 *   而是隐藏其所有的子元素，这些子元素同样可以受 collapsible-always-show 和
 *   collapsible-cascade 类的影响。
 *   - 注意必须是子元素，直接的文本节点不会随折叠隐藏，例如：
 *     <div class="collapsible">123<span>456</span></div>
 *   折叠时，“456”会随折叠隐藏，但“123”不会。
 * - 若带有 collapsible-using-slide 类，那么折叠时，使用滑动动画而非淡入淡出的
 *   动画。建议当只有一个元素会被隐藏时，才加此类。
 *   - 带有 collapsible-using-slide 类的元素会自动带有 collapsible 类。
 * - 若带有 collapsible-next 类，那么其折叠的不是其自身的子元素，而是折叠紧随
 *   其后的一个元素。
 *   - 这种情况下，折叠按钮默认附在该 collapsible-next 元素的末尾。
 *   - 带有 collapsible-next 类的元素会自动带有 collapsible 类。
 * - data-collapse-duration 属性可以设置折叠动画的时长，默认为 200 毫秒。
 * - 带有 collapsed 类的元素初始就是已折叠的。
 * - data-expandtext 和 data-collapsetext 可用于控制折叠按钮的显示文字。不支持
 *   繁简转换，但是其默认值是可以正常根据界面语言繁简转换的。
 */
mw.hook("wikipage.content").add(($content) => {
  navFrame($content);
  const $collapsibles = generateTargetElements($content);
  if (!$collapsibles.length) {
    return;
  }
  makeCollapsible($collapsibles);
});

})();

/* </nowiki> */

