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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/Collapsible/modules/util/generateTargetElements.ts
var generateTargetElements = ($content) => {
  var _iterator2 = _createForOfIteratorHelper($content.find(".parent-collapsible, .parent-collapsible-using-slide, .parent-collapsible-next")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const element = _step2.value;
      const $parent = $(element).parent();
      var _iterator3 = _createForOfIteratorHelper(element.classList), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const className = _step3.value;
          if (className.slice(0, 18) === "parent-collapsible") {
            $parent.addClass(className.replace(/^parent-/, ""));
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
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
    var _iterator4 = _createForOfIteratorHelper($elements), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const element = _step4.value;
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
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
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
    var _iterator5 = _createForOfIteratorHelper($elements), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const element = _step5.value;
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
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
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
//! src/Collapsible/modules/util/generateTogglerElement.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/Collapsible/modules/util/Collapsible.module.less
var toggler = "Collapsible-module__toggler_kvMGjG";
//! src/Collapsible/modules/util/generateTogglerElement.tsx
var generateTogglerElement = ($collapsible, hideText, showText) => {
  const $toggler = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
    className: [toggler, "noprint"]
  }, "[", /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
    role: "button",
    tabIndex: 0
  }, $collapsible.hasClass("collapsed") ? showText : hideText), "]"));
  return $toggler;
};
//! src/Collapsible/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Collapse: (0, import_ext_gadget3.localize)({
      en: "collapse",
      ja: "折り畳み",
      "zh-hans": "折叠",
      "zh-hant": "折疊"
    }),
    Expand: (0, import_ext_gadget3.localize)({
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
  var _iterator6 = _createForOfIteratorHelper($collapsibles), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      const element = _step6.value;
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
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
};
//! src/Collapsible/modules/navFrame.ts
var navFrame = ($content) => {
  var _iterator7 = _createForOfIteratorHelper($content.find(".NavFrame")), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      const element = _step7.value;
      if (!element.classList.contains("collapsible")) {
        element.classList.add("collapsible");
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  var _iterator8 = _createForOfIteratorHelper($content.find(".NavHead")), _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
      const element = _step8.value;
      if (!element.querySelectorAll(".collapsible-toggle-append-here")) {
        const toggle = document.createElement("span");
        toggle.classList.add("collapsible-toggle-append-here");
        element.append(toggle);
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
};
//! src/Collapsible/modules/addHook.ts
var addHook = () => {
  mw.hook("wikipage.content").add(($content) => {
    navFrame($content);
    const $collapsibles = generateTargetElements($content);
    if (!$collapsibles.length) {
      return;
    }
    makeCollapsible($collapsibles);
  });
};
//! src/Collapsible/Collapsible.ts
/*!
 * 为元素添加“隐藏”和“显示”的按钮。
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
addHook();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVRhcmdldEVsZW1lbnRzLnRzIiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL3V0aWwvaGlkZUVsZW1lbnQudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvdXRpbC9zaG93RWxlbWVudC50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy91dGlsL3RvZ2dsZUVsZW1lbnQudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvYWRkVG9nZ2xlci50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy91dGlsL2dlbmVyYXRlVG9nZ2xlckVsZW1lbnQudHN4IiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL3V0aWwvQ29sbGFwc2libGUubW9kdWxlLmxlc3MiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy9tYWtlQ29sbGFwc2libGUudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvbmF2RnJhbWUudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvYWRkSG9vay50cyIsICJzcmMvQ29sbGFwc2libGUvQ29sbGFwc2libGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IGdlbmVyYXRlVGFyZ2V0RWxlbWVudHMgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IEpRdWVyeSA9PiB7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kKFxuXHRcdCcucGFyZW50LWNvbGxhcHNpYmxlLCAucGFyZW50LWNvbGxhcHNpYmxlLXVzaW5nLXNsaWRlLCAucGFyZW50LWNvbGxhcHNpYmxlLW5leHQnXG5cdCkpIHtcblx0XHRjb25zdCAkcGFyZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpLnBhcmVudCgpO1xuXHRcdGZvciAoY29uc3QgY2xhc3NOYW1lIG9mIGVsZW1lbnQuY2xhc3NMaXN0KSB7XG5cdFx0XHRpZiAoY2xhc3NOYW1lLnNsaWNlKDAsIDE4KSA9PT0gJ3BhcmVudC1jb2xsYXBzaWJsZScpIHtcblx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdC8vICogY29sbGFwc2libGVcblx0XHRcdFx0Ly8gKiBjb2xsYXBzaWJsZS11c2luZy1zbGlkZVxuXHRcdFx0XHQvLyAqIGNvbGxhcHNpYmxlLW5leHRcblx0XHRcdFx0JHBhcmVudC5hZGRDbGFzcyhjbGFzc05hbWUucmVwbGFjZSgvXnBhcmVudC0vLCAnJykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCRjb250ZW50LmZpbmQoJy5jb2xsYXBzaWJsZS11c2luZy1zbGlkZSwgLmNvbGxhcHNpYmxlLW5leHQnKS5hZGRDbGFzcygnY29sbGFwc2libGUnKTtcblxuXHRjb25zdCAkY29sbGFwc2libGVzOiBKUXVlcnkgPSAkY29udGVudC5maW5kKCcuY29sbGFwc2libGUnKTtcblxuXHRyZXR1cm4gJGNvbGxhcHNpYmxlcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVUYXJnZXRFbGVtZW50c307XG4iLCAiaW1wb3J0IHtjaGVja0ExMXlDb25maXJtS2V5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt0b2dnbGVFbGVtZW50fSBmcm9tICcuL3V0aWwvdG9nZ2xlRWxlbWVudCc7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKCRjb2xsYXBzaWJsZTogSlF1ZXJ5LCAkdG9nZ2xlckxpbms6IEpRdWVyeSwgaGlkZVRleHQ6IHN0cmluZywgc2hvd1RleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCBldmVudExpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHRvZ2dsZUVsZW1lbnQoJGNvbGxhcHNpYmxlKTtcblxuXHRcdGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKSB7XG5cdFx0XHQkdG9nZ2xlckxpbmsudGV4dChzaG93VGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0b2dnbGVyTGluay50ZXh0KGhpZGVUZXh0KTtcblx0XHR9XG5cdH07XG5cblx0JHRvZ2dsZXJMaW5rLm9uKCdjbGljaycsIGV2ZW50TGlzdGVuZXIpO1xuXHQkdG9nZ2xlckxpbmsub24oJ2tleWRvd24nLCBldmVudExpc3RlbmVyKTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgIi8vIOmakOiXj+afkOS4quWPr+aKmOWPoOeahOWFg+e0oOOAglxuY29uc3QgaGlkZUVsZW1lbnQgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnksIHRpbWU6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRjb25zdCB1c2VTbGlkZTogYm9vbGVhbiA9ICRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtdXNpbmctc2xpZGUnKTtcblx0aWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtbmV4dCcpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5uZXh0KCk7XG5cblx0XHRpZiAodXNlU2xpZGUpIHtcblx0XHRcdCRlbGVtZW50LnNsaWRlVXAodGltZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRlbGVtZW50LmZhZGVPdXQodGltZSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnN0ICRlbGVtZW50czogSlF1ZXJ5ID0gJGNvbGxhcHNpYmxlLmlzKCd0YWJsZScpXG5cdFx0XHQ/ICRjb2xsYXBzaWJsZS5jaGlsZHJlbigpLmNoaWxkcmVuKCd0cicpXG5cdFx0XHQ6ICgkY29sbGFwc2libGUuY29udGVudHMoKSBhcyBKUXVlcnkpO1xuXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRlbGVtZW50cykge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHRpZiAoJGVsZW1lbnQuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLWNhc2NhZGUnKSkge1xuXHRcdFx0XHRoaWRlRWxlbWVudCgkZWxlbWVudCwgdGltZSk7XG5cdFx0XHR9IGVsc2UgaWYgKCEkZWxlbWVudC5oYXNDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKSkge1xuXHRcdFx0XHRpZiAodXNlU2xpZGUpIHtcblx0XHRcdFx0XHQkZWxlbWVudC5zbGlkZVVwKHRpbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbGVtZW50LmZhZGVPdXQodGltZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7aGlkZUVsZW1lbnR9O1xuIiwgIi8vIOaYvuekuuafkOS4quWPr+aKmOWPoOeahOWFg+e0oOOAglxuY29uc3Qgc2hvd0VsZW1lbnQgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnksIHRpbWU6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRjb25zdCB1c2VTbGlkZTogYm9vbGVhbiA9ICRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtdXNpbmctc2xpZGUnKTtcblx0aWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtbmV4dCcpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5uZXh0KCk7XG5cblx0XHRpZiAodXNlU2xpZGUpIHtcblx0XHRcdCRlbGVtZW50LnNsaWRlRG93bih0aW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGVsZW1lbnQuZmFkZUluKHRpbWUpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zdCAkZWxlbWVudHM6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5pcygndGFibGUnKVxuXHRcdFx0PyAkY29sbGFwc2libGUuY2hpbGRyZW4oKS5jaGlsZHJlbigndHInKVxuXHRcdFx0OiAoJGNvbGxhcHNpYmxlLmNvbnRlbnRzKCkgYXMgSlF1ZXJ5KTtcblxuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkZWxlbWVudHMpIHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0aWYgKCRlbGVtZW50Lmhhc0NsYXNzKCdjb2xsYXBzaWJsZS1jYXNjYWRlJykpIHtcblx0XHRcdFx0c2hvd0VsZW1lbnQoJGVsZW1lbnQsIHRpbWUpO1xuXHRcdFx0fSBlbHNlIGlmICghJGVsZW1lbnQuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLWFsd2F5cy1zaG93JykpIHtcblx0XHRcdFx0aWYgKHVzZVNsaWRlKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuc2xpZGVEb3duKHRpbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbGVtZW50LmZhZGVJbih0aW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtzaG93RWxlbWVudH07XG4iLCAiaW1wb3J0IHtoaWRlRWxlbWVudH0gZnJvbSAnLi9oaWRlRWxlbWVudCc7XG5pbXBvcnQge3Nob3dFbGVtZW50fSBmcm9tICcuL3Nob3dFbGVtZW50JztcblxuY29uc3QgdG9nZ2xlRWxlbWVudCA9ICgkY29sbGFwc2libGU6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCBjb2xsYXBzZWQ6IGJvb2xlYW4gPSAkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuXHRjb25zdCBkdXJhdGlvbjogbnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KCRjb2xsYXBzaWJsZS5kYXRhKCdjb2xsYXBzZS1kdXJhdGlvbicpIGFzIHN0cmluZywgMTApIHx8IDIwMDtcblxuXHRpZiAoY29sbGFwc2VkKSB7XG5cdFx0c2hvd0VsZW1lbnQoJGNvbGxhcHNpYmxlLCBkdXJhdGlvbik7XG5cdFx0JGNvbGxhcHNpYmxlLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcblx0fSBlbHNlIHtcblx0XHRoaWRlRWxlbWVudCgkY29sbGFwc2libGUsIGR1cmF0aW9uKTtcblx0XHQkY29sbGFwc2libGUuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuXHR9XG59O1xuXG5leHBvcnQge3RvZ2dsZUVsZW1lbnR9O1xuIiwgImNvbnN0IGFkZFRvZ2dsZXIgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnksICR0b2dnbGVyOiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3QgJGFwcGVuZEhlcmU6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZVxuXHRcdC5maW5kKCcuY29sbGFwc2libGUtdG9nZ2xlLWFwcGVuZC1oZXJlJylcblx0XHQubm90KCcuY29sbGFwc2libGUtdG9nZ2xlLWFwcGVuZGVkJyk7XG5cblx0aWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtbmV4dCcpKSB7XG5cdFx0Ly8g6Iul5pyJIGNvbGxhcHNpYmxlLW5leHQg57G777yM6YKj5LmI6KKr5oqY5Y+g55qE5YWD57Sg5LiN5Zyo6K+l5YWD57Sg5YaF77yM5q2k5pe255u05o6l5bCG5oqY5Y+g5oyJ6ZKu5re75Yqg5Zyo5pyr5bC+44CCXG5cdFx0JGNvbGxhcHNpYmxlLmFwcGVuZCgkdG9nZ2xlcik7XG5cdH0gZWxzZSBpZiAoJGFwcGVuZEhlcmUubGVuZ3RoKSB7XG5cdFx0Ly8g5bim5pyJIGNvbGxhcHNpYmxlLXRvZ2dsZS1hcHBlbmQtaGVyZSDnsbvnmoTlhYPntKDvvIzoi6XlrZjlnKjvvIzliJnml6Dorrrlj6/mipjlj6DlhYPntKDmmK/ku4DkuYjvvIzliJnlvLrliLblsIbmipjlj6DmjInpkq7mt7vliqDoh7Por6XlhYPntKDkuK3jgIJcblx0XHQkYXBwZW5kSGVyZS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHRcdCRhcHBlbmRIZXJlLmFkZENsYXNzKCdjb2xsYXBzaWJsZS10b2dnbGUtYXBwZW5kZWQnKTtcblx0XHQkYXBwZW5kSGVyZS5wYXJlbnRzVW50aWwoJGNvbGxhcHNpYmxlKS5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKTtcblx0fSBlbHNlIGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ25hdmJveCcpKSB7XG5cdFx0Ly8gbmF2Ym94IOWFg+e0oOeahOaKmOWPoOaMiemSrua3u+WKoOiHsyBuYXZib3gtdGl0bGUg5Lit77yM5LiU6K+lIG5hdmJveC10aXRsZSDkvJrpgb/lhY3ooqvmipjlj6DlvbHlk43liLDjgIJcblx0XHQkY29sbGFwc2libGUuY2hpbGRyZW4oJy5uYXZib3gtdGl0bGUnKS5maXJzdCgpLmFkZENsYXNzKCdjb2xsYXBzaWJsZS1hbHdheXMtc2hvdycpLmFwcGVuZCgkdG9nZ2xlcik7XG5cdH0gZWxzZSBpZiAoJGNvbGxhcHNpYmxlLmlzKCd0YWJsZScpKSB7XG5cdFx0Ly8g5a+55LqOIHRhYmxlIOWvueixoe+8jOWwneivlea3u+WKoOWIsCBjYXB0aW9uIOS4re+8jOiLpSBjYXB0aW9uIOS4jeWtmOWcqO+8jOWImea3u+WKoOWIsOesrOS4gOihjOeahOacgOWQjuS4gOWIl++8jOW5tuWwhuesrOS4gOihjOiuvuS4uuWni+e7iOaYvuekuuOAglxuXHRcdGNvbnN0ICRjYXB0aW9uOiBKUXVlcnkgPSAkY29sbGFwc2libGUuY2hpbGRyZW4oJ2NhcHRpb24nKTtcblx0XHRpZiAoJGNhcHRpb24ubGVuZ3RoKSB7XG5cdFx0XHQvLyDmnIljYXB0aW9u55qE5oOF5Ya1XG5cdFx0XHQkY2FwdGlvbi5maXJzdCgpLmFwcGVuZCgkdG9nZ2xlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0ICR0cm93czogSlF1ZXJ5PEhUTUxUYWJsZVJvd0VsZW1lbnQ+ID0gJGNvbGxhcHNpYmxlLmNoaWxkcmVuKCkuY2hpbGRyZW4oJ3RyJyk7XG5cdFx0XHQkdHJvd3MuZmlyc3QoKS5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKS5jaGlsZHJlbigpLmxhc3QoKS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyDlsJ3or5Xmn6Xmib7luKbmnIkgY29sbGFwc2libGUtYWx3YXlzLXNob3cg57G755qE5a2Q5YWD57Sg77yM6Iul5a2Y5Zyo5YiZ5bCG5oqY5Y+g5oyJ6ZKu5re75Yqg6Iez5YW25Lit44CCXG5cdFx0Ly8g5ZCm5YiZ77yM5re75Yqg6Iez5pW05Liq5Y+v5oqY5Y+g5YWD57Sg55qE5pyA5YmN6Z2i44CCXG5cdFx0Y29uc3QgJHRvVG9nZ2xlOiBKUXVlcnkgPSAkY29sbGFwc2libGUuY2hpbGRyZW4oJy5jb2xsYXBzaWJsZS1hbHdheXMtc2hvdycpO1xuXHRcdGlmICgkdG9Ub2dnbGUubGVuZ3RoKSB7XG5cdFx0XHQkdG9Ub2dnbGUuZmlyc3QoKS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkY29sbGFwc2libGUucHJlcGVuZCgkdG9nZ2xlcik7XG5cdFx0XHQkdG9nZ2xlci5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkVG9nZ2xlcn07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHt0b2dnbGVyfSBmcm9tICcuL0NvbGxhcHNpYmxlLm1vZHVsZS5sZXNzJztcblxuY29uc3QgZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCA9ICgkY29sbGFwc2libGU6IEpRdWVyeSwgaGlkZVRleHQ6IHN0cmluZywgc2hvd1RleHQ6IHN0cmluZyk6IEpRdWVyeSA9PiB7XG5cdGNvbnN0ICR0b2dnbGVyID0gJChcblx0XHQ8c3BhbiBjbGFzc05hbWU9e1t0b2dnbGVyLCAnbm9wcmludCddfT5cblx0XHRcdHsnWyd9XG5cdFx0XHQ8YSByb2xlPVwiYnV0dG9uXCIgdGFiSW5kZXg9ezB9PlxuXHRcdFx0XHR7JGNvbGxhcHNpYmxlLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSA/IHNob3dUZXh0IDogaGlkZVRleHR9XG5cdFx0XHQ8L2E+XG5cdFx0XHR7J10nfVxuXHRcdDwvc3Bhbj5cblx0KSBhcyBKUXVlcnk7XG5cblx0cmV0dXJuICR0b2dnbGVyO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVRvZ2dsZXJFbGVtZW50fTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvdXRpbC9Db2xsYXBzaWJsZS5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IHRvZ2dsZXIgPSBcIkNvbGxhcHNpYmxlLW1vZHVsZV9fdG9nZ2xlcl9rdk1HakdcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInRvZ2dsZXJcIjogdG9nZ2xlclxufTtcbiAgICAgICIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q29sbGFwc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnY29sbGFwc2UnLFxuXHRcdFx0amE6ICfmipjjgornlbPjgb8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oqY5Y+gJyxcblx0XHRcdCd6aC1oYW50JzogJ+aKmOeWiicsXG5cdFx0fSksXG5cdFx0RXhwYW5kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2V4cGFuZCcsXG5cdFx0XHRqYTogJ+WxlemWiycsXG5cdFx0XHQnemgtaGFucyc6ICflsZXlvIAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bGV6ZaLJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9hZGRMaXN0ZW5lcic7XG5pbXBvcnQge2FkZFRvZ2dsZXJ9IGZyb20gJy4vYWRkVG9nZ2xlcic7XG5pbXBvcnQge2dlbmVyYXRlVG9nZ2xlckVsZW1lbnR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVRvZ2dsZXJFbGVtZW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aGlkZUVsZW1lbnR9IGZyb20gJy4vdXRpbC9oaWRlRWxlbWVudCc7XG5cbmNvbnN0IG1ha2VDb2xsYXBzaWJsZSA9ICgkY29sbGFwc2libGVzOiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb2xsYXBzaWJsZXMpIHtcblx0XHRjb25zdCAkY29sbGFwc2libGU6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKCRjb2xsYXBzaWJsZS5kYXRhKCdtYWRlLWNvbGxhcHNpYmxlJykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhpZGVUZXh0OiBzdHJpbmcgPSAoJGNvbGxhcHNpYmxlLmRhdGEoJ2NvbGxhcHNldGV4dCcpIGFzIHN0cmluZykgfHwgZ2V0TWVzc2FnZSgnQ29sbGFwc2UnKTtcblx0XHRjb25zdCBzaG93VGV4dDogc3RyaW5nID0gKCRjb2xsYXBzaWJsZS5kYXRhKCdleHBhbmR0ZXh0JykgYXMgc3RyaW5nKSB8fCBnZXRNZXNzYWdlKCdFeHBhbmQnKTtcblxuXHRcdGNvbnN0ICR0b2dnbGVyOiBKUXVlcnkgPSBnZW5lcmF0ZVRvZ2dsZXJFbGVtZW50KCRjb2xsYXBzaWJsZSwgaGlkZVRleHQsIHNob3dUZXh0KTtcblx0XHRjb25zdCAkdG9nZ2xlckxpbms6IEpRdWVyeSA9ICR0b2dnbGVyLmZpbmQoJ2EnKTtcblxuXHRcdGFkZFRvZ2dsZXIoJGNvbGxhcHNpYmxlLCAkdG9nZ2xlcik7XG5cblx0XHQvLyDliJ3lp4vljJbpmpDol4/miYDmnInlhYPntKDvvIzor6Xov4fnqIvmsqHmnInliqjnlLvjgIJcblx0XHRpZiAoJGNvbGxhcHNpYmxlLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSkge1xuXHRcdFx0aGlkZUVsZW1lbnQoJGNvbGxhcHNpYmxlLCAwKTtcblx0XHR9XG5cblx0XHRhZGRMaXN0ZW5lcigkY29sbGFwc2libGUsICR0b2dnbGVyTGluaywgaGlkZVRleHQsIHNob3dUZXh0KTtcblxuXHRcdCRjb2xsYXBzaWJsZS5kYXRhKCdtYWRlLWNvbGxhcHNpYmxlJywgdHJ1ZSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7bWFrZUNvbGxhcHNpYmxlfTtcbiIsICJjb25zdCBuYXZGcmFtZSA9ICgkY29udGVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kPEhUTUxEaXZFbGVtZW50PignLk5hdkZyYW1lJykpIHtcblx0XHRpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2xsYXBzaWJsZScpKSB7XG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNpYmxlJyk7XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQ8SFRNTERpdkVsZW1lbnQ+KCcuTmF2SGVhZCcpKSB7XG5cdFx0aWYgKCFlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuY29sbGFwc2libGUtdG9nZ2xlLWFwcGVuZC1oZXJlJykpIHtcblx0XHRcdGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdHRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzaWJsZS10b2dnbGUtYXBwZW5kLWhlcmUnKTtcblx0XHRcdGVsZW1lbnQuYXBwZW5kKHRvZ2dsZSk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge25hdkZyYW1lfTtcbiIsICJpbXBvcnQge2dlbmVyYXRlVGFyZ2V0RWxlbWVudHN9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVRhcmdldEVsZW1lbnRzJztcbmltcG9ydCB7bWFrZUNvbGxhcHNpYmxlfSBmcm9tICcuL21ha2VDb2xsYXBzaWJsZSc7XG5pbXBvcnQge25hdkZyYW1lfSBmcm9tICcuL25hdkZyYW1lJztcblxuY29uc3QgYWRkSG9vayA9ICgpOiB2b2lkID0+IHtcblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCgoJGNvbnRlbnQpOiB2b2lkID0+IHtcblx0XHQvLyBjb21wYXRpYmxlIHdpdGggb2xkIG5hdkZyYW1lcyAoc2VlIHt7SGlkZUh9fSBhbmQge3tIaWRlRn19KVxuXHRcdG5hdkZyYW1lKCRjb250ZW50KTtcblxuXHRcdGNvbnN0ICRjb2xsYXBzaWJsZXM6IEpRdWVyeSA9IGdlbmVyYXRlVGFyZ2V0RWxlbWVudHMoJGNvbnRlbnQpO1xuXHRcdGlmICghJGNvbGxhcHNpYmxlcy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRtYWtlQ29sbGFwc2libGUoJGNvbGxhcHNpYmxlcyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRIb29rfTtcbiIsICIvKiFcbiAqIOS4uuWFg+e0oOa3u+WKoOKAnOmakOiXj+KAneWSjOKAnOaYvuekuuKAneeahOaMiemSruOAglxuICpcbiAqIOeUqOazleivtOaYju+8mlxuICpcbiAqIOW4puaciSBjb2xsYXBzaWJsZSDnsbvnmoTlhYPntKDpu5jorqTlj6/mipjlj6DjgIJcbiAqIC0g5a+55LqOIG5hdmJveO+8jOaKmOWPoOaXtuS8muS/neeVmeagh+mimOagj++8jOW5tuWwhuaKmOWPoOaMiemSrua3u+WKoOWcqOagh+mimOagj+S4reOAglxuICogLSDlr7nkuo4gdGFibGXvvIzmipjlj6Dml7bkvJrkv53nlZkgY2FwdGlvbiDmiJbnrKzkuIDooYzvvIzlubblsIbmipjlj6DmjInpkq7mt7vliqDlnKggY2FwdGlvbiDmnKvlsL5cbiAqICAg5oiW6ICF56ys5LiA6KGM5pyA5ZCO5LiA5qC85pyr5bC+44CCXG4gKiAtIOWvueS6juWFtuS7luWFg+e0oO+8jFxuICogICAtIOiLpeWFtuWtkOWFg+e0oOacieW4puaciSBjb2xsYXBzaWJsZS1hbHdheXMtc2hvdyDnsbvvvIzpgqPkuYjpmaTkuobor6XlrZDlhYPntKDkuYvlpJbnmoTlkITkuKpcbiAqICAg5a2Q5YWD57Sg6YO95Lya6ZqP5oqY5Y+g6ZqQ6JeP77yM5LiU5oqY5Y+g5oyJ6ZKu5re75Yqg5Zyo6K+l5a2Q5YWD57Sg5pyr5bC+44CCXG4gKiAgIC0g6Iul5rKh5pyJ5a2Q5YWD57Sg5bim5pyJIGNvbGxhcHNpYmxlLWFsd2F5cy1zaG93IOexu++8jOmCo+S5iOaJgOacieWtkOWFg+e0oOmDveS8muiiq+aKmOWPoO+8jFxuICogICDmipjlj6DmjInpkq7mt7vliqDlnKjmlbTkuKogY29sbGFwc2libGUg5YWD57Sg55qE5byA5aS077yM5LiU6K+l5oyJ6ZKu5LiN5Lya6ZqP5oqY5Y+g6ZqQ6JeP44CCXG4gKiAgIC0g6Iul5a2Q5YWD57Sg5bim5pyJIGNvbGxhcHNpYmxlLWNhc2NhZGUg57G777yM6YKj5LmI5b2T5oqY5Y+g5pe277yM6K+l5YWD57Sg6Ieq6Lqr5LiN5piv6ZqQ6JeP77yMXG4gKiAgIOiAjOaYr+makOiXj+WFtuaJgOacieeahOWtkOWFg+e0oO+8jOi/meS6m+WtkOWFg+e0oOWQjOagt+WPr+S7peWPlyBjb2xsYXBzaWJsZS1hbHdheXMtc2hvdyDlkoxcbiAqICAgY29sbGFwc2libGUtY2FzY2FkZSDnsbvnmoTlvbHlk43jgIJcbiAqICAgLSDms6jmhI/lv4XpobvmmK/lrZDlhYPntKDvvIznm7TmjqXnmoTmlofmnKzoioLngrnkuI3kvJrpmo/mipjlj6DpmpDol4/vvIzkvovlpoLvvJpcbiAqICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2libGVcIj4xMjM8c3Bhbj40NTY8L3NwYW4+PC9kaXY+XG4gKiAgIOaKmOWPoOaXtu+8jOKAnDQ1NuKAneS8mumaj+aKmOWPoOmakOiXj++8jOS9huKAnDEyM+KAneS4jeS8muOAglxuICogLSDoi6XluKbmnIkgY29sbGFwc2libGUtdXNpbmctc2xpZGUg57G777yM6YKj5LmI5oqY5Y+g5pe277yM5L2/55So5ruR5Yqo5Yqo55S76ICM6Z2e5reh5YWl5reh5Ye655qEXG4gKiAgIOWKqOeUu+OAguW7uuiuruW9k+WPquacieS4gOS4quWFg+e0oOS8muiiq+makOiXj+aXtu+8jOaJjeWKoOatpOexu+OAglxuICogICAtIOW4puaciSBjb2xsYXBzaWJsZS11c2luZy1zbGlkZSDnsbvnmoTlhYPntKDkvJroh6rliqjluKbmnIkgY29sbGFwc2libGUg57G744CCXG4gKiAtIOiLpeW4puaciSBjb2xsYXBzaWJsZS1uZXh0IOexu++8jOmCo+S5iOWFtuaKmOWPoOeahOS4jeaYr+WFtuiHqui6q+eahOWtkOWFg+e0oO+8jOiAjOaYr+aKmOWPoOe0p+maj1xuICogICDlhbblkI7nmoTkuIDkuKrlhYPntKDjgIJcbiAqICAgLSDov5nnp43mg4XlhrXkuIvvvIzmipjlj6DmjInpkq7pu5jorqTpmYTlnKjor6UgY29sbGFwc2libGUtbmV4dCDlhYPntKDnmoTmnKvlsL7jgIJcbiAqICAgLSDluKbmnIkgY29sbGFwc2libGUtbmV4dCDnsbvnmoTlhYPntKDkvJroh6rliqjluKbmnIkgY29sbGFwc2libGUg57G744CCXG4gKiAtIGRhdGEtY29sbGFwc2UtZHVyYXRpb24g5bGe5oCn5Y+v5Lul6K6+572u5oqY5Y+g5Yqo55S755qE5pe26ZW/77yM6buY6K6k5Li6IDIwMCDmr6vnp5LjgIJcbiAqIC0g5bim5pyJIGNvbGxhcHNlZCDnsbvnmoTlhYPntKDliJ3lp4vlsLHmmK/lt7Lmipjlj6DnmoTjgIJcbiAqIC0gZGF0YS1leHBhbmR0ZXh0IOWSjCBkYXRhLWNvbGxhcHNldGV4dCDlj6/nlKjkuo7mjqfliLbmipjlj6DmjInpkq7nmoTmmL7npLrmloflrZfjgILkuI3mlK/mjIFcbiAqICAg57mB566A6L2s5o2i77yM5L2G5piv5YW26buY6K6k5YC85piv5Y+v5Lul5q2j5bi45qC55o2u55WM6Z2i6K+t6KiA57mB566A6L2s5o2i55qE44CCXG4gKi9cbmltcG9ydCB7YWRkSG9va30gZnJvbSAnLi9tb2R1bGVzL2FkZEhvb2snO1xuXG5hZGRIb29rKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLHlCQUEwQkMsY0FBNkI7QUFBQSxNQUFBQyxhQUFBQywyQkFDdENGLFNBQVNHLEtBQzlCLGdGQUNELENBQUEsR0FBQUM7QUFBQSxNQUFBO0FBRkEsU0FBQUgsV0FBQUksRUFBQSxHQUFBLEVBQUFELFNBQUFILFdBQUFLLEVBQUEsR0FBQUMsUUFFRztBQUFBLFlBRlFDLFVBQUFKLE9BQUFLO0FBR1YsWUFBTUMsVUFBa0JDLEVBQUVILE9BQU8sRUFBRUksT0FBTztBQUFBLFVBQUFDLGFBQUFYLDJCQUNsQk0sUUFBUU0sU0FBQSxHQUFBQztBQUFBLFVBQUE7QUFBaEMsYUFBQUYsV0FBQVIsRUFBQSxHQUFBLEVBQUFVLFNBQUFGLFdBQUFQLEVBQUEsR0FBQUMsUUFBMkM7QUFBQSxnQkFBaENTLFlBQUFELE9BQUFOO0FBQ1YsY0FBSU8sVUFBVUMsTUFBTSxHQUFHLEVBQUUsTUFBTSxzQkFBc0I7QUFLcERQLG9CQUFRUSxTQUFTRixVQUFVRyxRQUFRLFlBQVksRUFBRSxDQUFDO1VBQ25EO1FBQ0Q7TUFBQSxTQUFBQyxLQUFBO0FBQUFQLG1CQUFBUSxFQUFBRCxHQUFBO01BQUEsVUFBQTtBQUFBUCxtQkFBQVMsRUFBQTtNQUFBO0lBQ0Q7RUFBQSxTQUFBRixLQUFBO0FBQUFuQixlQUFBb0IsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQW5CLGVBQUFxQixFQUFBO0VBQUE7QUFFQXRCLFdBQVNHLEtBQUssNkNBQTZDLEVBQUVlLFNBQVMsYUFBYTtBQUVuRixRQUFNSyxnQkFBd0J2QixTQUFTRyxLQUFLLGNBQWM7QUFF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YW1lcyI6IFsiZ2VuZXJhdGVUYXJnZXRFbGVtZW50cyIsICIkY29udGVudCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImZpbmQiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiJHBhcmVudCIsICIkIiwgInBhcmVudCIsICJfaXRlcmF0b3IzIiwgImNsYXNzTGlzdCIsICJfc3RlcDMiLCAiY2xhc3NOYW1lIiwgInNsaWNlIiwgImFkZENsYXNzIiwgInJlcGxhY2UiLCAiZXJyIiwgImUiLCAiZiIsICIkY29sbGFwc2libGVzIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiaGlkZUVsZW1lbnQiLCAiJGNvbGxhcHNpYmxlIiwgInRpbWUiLCAidXNlU2xpZGUiLCAiaGFzQ2xhc3MiLCAiJGVsZW1lbnQiLCAibmV4dCIsICJzbGlkZVVwIiwgImZhZGVPdXQiLCAiJGVsZW1lbnRzIiwgImlzIiwgImNoaWxkcmVuIiwgImNvbnRlbnRzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInNob3dFbGVtZW50IiwgInNsaWRlRG93biIsICJmYWRlSW4iLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAidG9nZ2xlRWxlbWVudCIsICJjb2xsYXBzZWQiLCAiZHVyYXRpb24iLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgImRhdGEiLCAicmVtb3ZlQ2xhc3MiLCAiYWRkTGlzdGVuZXIiLCAiJHRvZ2dsZXJMaW5rIiwgImhpZGVUZXh0IiwgInNob3dUZXh0IiwgImV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAiY2hlY2tBMTF5Q29uZmlybUtleSIsICJwcmV2ZW50RGVmYXVsdCIsICJ0ZXh0IiwgIm9uIiwgImFkZFRvZ2dsZXIiLCAiJHRvZ2dsZXIiLCAiJGFwcGVuZEhlcmUiLCAibm90IiwgImFwcGVuZCIsICJsZW5ndGgiLCAicGFyZW50c1VudGlsIiwgImZpcnN0IiwgIiRjYXB0aW9uIiwgIiR0cm93cyIsICJsYXN0IiwgIiR0b1RvZ2dsZSIsICJwcmVwZW5kIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInRvZ2dsZXIiLCAiZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAicm9sZSIsICJ0YWJJbmRleCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNvbGxhcHNlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkV4cGFuZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibWFrZUNvbGxhcHNpYmxlIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgIm5hdkZyYW1lIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgImNvbnRhaW5zIiwgImFkZCIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInRvZ2dsZSIsICJkb2N1bWVudCIsICJhZGRIb29rIiwgIm13IiwgImhvb2siXQp9Cg==
