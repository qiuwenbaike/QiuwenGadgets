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
  var _iterator7 = _createForOfIteratorHelper($content.find(".NavToggle, .toggleShow, .toggleHide, .NavEnd")), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      const element = _step7.value;
      element.remove();
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  var _iterator8 = _createForOfIteratorHelper($content.find(".NavFrame, .Boxmerge")), _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
      const element = _step8.value;
      if (!element.classList.contains("collapsible")) {
        element.classList.add("collapsible");
      }
      if (!element.classList.contains("Boxmerge")) {
        element.classList.replace("Boxmerge", "NavFrame");
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  var _iterator9 = _createForOfIteratorHelper($content.find(".NavContent, .NavPic")), _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
      const element = _step9.value;
      if (element.style.display !== "none") {
        continue;
      }
      if (element.parentElement && element.parentElement.classList.contains("NavFrame")) {
        element.parentElement.classList.add("collapsed");
      }
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVRhcmdldEVsZW1lbnRzLnRzIiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL3V0aWwvaGlkZUVsZW1lbnQudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvdXRpbC9zaG93RWxlbWVudC50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy91dGlsL3RvZ2dsZUVsZW1lbnQudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvYWRkVG9nZ2xlci50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy91dGlsL2dlbmVyYXRlVG9nZ2xlckVsZW1lbnQudHN4IiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL3V0aWwvQ29sbGFwc2libGUubW9kdWxlLmxlc3MiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy9tYWtlQ29sbGFwc2libGUudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvbmF2RnJhbWUudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvYWRkSG9vay50cyIsICJzcmMvQ29sbGFwc2libGUvQ29sbGFwc2libGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IGdlbmVyYXRlVGFyZ2V0RWxlbWVudHMgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IEpRdWVyeSA9PiB7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kKFxuXHRcdCcucGFyZW50LWNvbGxhcHNpYmxlLCAucGFyZW50LWNvbGxhcHNpYmxlLXVzaW5nLXNsaWRlLCAucGFyZW50LWNvbGxhcHNpYmxlLW5leHQnXG5cdCkpIHtcblx0XHRjb25zdCAkcGFyZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpLnBhcmVudCgpO1xuXHRcdGZvciAoY29uc3QgY2xhc3NOYW1lIG9mIGVsZW1lbnQuY2xhc3NMaXN0KSB7XG5cdFx0XHRpZiAoY2xhc3NOYW1lLnNsaWNlKDAsIDE4KSA9PT0gJ3BhcmVudC1jb2xsYXBzaWJsZScpIHtcblx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdC8vICogY29sbGFwc2libGVcblx0XHRcdFx0Ly8gKiBjb2xsYXBzaWJsZS11c2luZy1zbGlkZVxuXHRcdFx0XHQvLyAqIGNvbGxhcHNpYmxlLW5leHRcblx0XHRcdFx0JHBhcmVudC5hZGRDbGFzcyhjbGFzc05hbWUucmVwbGFjZSgvXnBhcmVudC0vLCAnJykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCRjb250ZW50LmZpbmQoJy5jb2xsYXBzaWJsZS11c2luZy1zbGlkZSwgLmNvbGxhcHNpYmxlLW5leHQnKS5hZGRDbGFzcygnY29sbGFwc2libGUnKTtcblxuXHRjb25zdCAkY29sbGFwc2libGVzOiBKUXVlcnkgPSAkY29udGVudC5maW5kKCcuY29sbGFwc2libGUnKTtcblxuXHRyZXR1cm4gJGNvbGxhcHNpYmxlcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVUYXJnZXRFbGVtZW50c307XG4iLCAiaW1wb3J0IHtjaGVja0ExMXlDb25maXJtS2V5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt0b2dnbGVFbGVtZW50fSBmcm9tICcuL3V0aWwvdG9nZ2xlRWxlbWVudCc7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKCRjb2xsYXBzaWJsZTogSlF1ZXJ5LCAkdG9nZ2xlckxpbms6IEpRdWVyeSwgaGlkZVRleHQ6IHN0cmluZywgc2hvd1RleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCBldmVudExpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHRvZ2dsZUVsZW1lbnQoJGNvbGxhcHNpYmxlKTtcblxuXHRcdGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKSB7XG5cdFx0XHQkdG9nZ2xlckxpbmsudGV4dChzaG93VGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0b2dnbGVyTGluay50ZXh0KGhpZGVUZXh0KTtcblx0XHR9XG5cdH07XG5cblx0JHRvZ2dsZXJMaW5rLm9uKCdjbGljaycsIGV2ZW50TGlzdGVuZXIpO1xuXHQkdG9nZ2xlckxpbmsub24oJ2tleWRvd24nLCBldmVudExpc3RlbmVyKTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgIi8vIOmakOiXj+afkOS4quWPr+aKmOWPoOeahOWFg+e0oOOAglxuY29uc3QgaGlkZUVsZW1lbnQgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnksIHRpbWU6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRjb25zdCB1c2VTbGlkZTogYm9vbGVhbiA9ICRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtdXNpbmctc2xpZGUnKTtcblx0aWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtbmV4dCcpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5uZXh0KCk7XG5cblx0XHRpZiAodXNlU2xpZGUpIHtcblx0XHRcdCRlbGVtZW50LnNsaWRlVXAodGltZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRlbGVtZW50LmZhZGVPdXQodGltZSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnN0ICRlbGVtZW50czogSlF1ZXJ5ID0gJGNvbGxhcHNpYmxlLmlzKCd0YWJsZScpXG5cdFx0XHQ/ICRjb2xsYXBzaWJsZS5jaGlsZHJlbigpLmNoaWxkcmVuKCd0cicpXG5cdFx0XHQ6ICgkY29sbGFwc2libGUuY29udGVudHMoKSBhcyBKUXVlcnkpO1xuXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRlbGVtZW50cykge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHRpZiAoJGVsZW1lbnQuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLWNhc2NhZGUnKSkge1xuXHRcdFx0XHRoaWRlRWxlbWVudCgkZWxlbWVudCwgdGltZSk7XG5cdFx0XHR9IGVsc2UgaWYgKCEkZWxlbWVudC5oYXNDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKSkge1xuXHRcdFx0XHRpZiAodXNlU2xpZGUpIHtcblx0XHRcdFx0XHQkZWxlbWVudC5zbGlkZVVwKHRpbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbGVtZW50LmZhZGVPdXQodGltZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7aGlkZUVsZW1lbnR9O1xuIiwgIi8vIOaYvuekuuafkOS4quWPr+aKmOWPoOeahOWFg+e0oOOAglxuY29uc3Qgc2hvd0VsZW1lbnQgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnksIHRpbWU6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRjb25zdCB1c2VTbGlkZTogYm9vbGVhbiA9ICRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtdXNpbmctc2xpZGUnKTtcblx0aWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtbmV4dCcpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5uZXh0KCk7XG5cblx0XHRpZiAodXNlU2xpZGUpIHtcblx0XHRcdCRlbGVtZW50LnNsaWRlRG93bih0aW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGVsZW1lbnQuZmFkZUluKHRpbWUpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zdCAkZWxlbWVudHM6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5pcygndGFibGUnKVxuXHRcdFx0PyAkY29sbGFwc2libGUuY2hpbGRyZW4oKS5jaGlsZHJlbigndHInKVxuXHRcdFx0OiAoJGNvbGxhcHNpYmxlLmNvbnRlbnRzKCkgYXMgSlF1ZXJ5KTtcblxuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkZWxlbWVudHMpIHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0aWYgKCRlbGVtZW50Lmhhc0NsYXNzKCdjb2xsYXBzaWJsZS1jYXNjYWRlJykpIHtcblx0XHRcdFx0c2hvd0VsZW1lbnQoJGVsZW1lbnQsIHRpbWUpO1xuXHRcdFx0fSBlbHNlIGlmICghJGVsZW1lbnQuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLWFsd2F5cy1zaG93JykpIHtcblx0XHRcdFx0aWYgKHVzZVNsaWRlKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuc2xpZGVEb3duKHRpbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbGVtZW50LmZhZGVJbih0aW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtzaG93RWxlbWVudH07XG4iLCAiaW1wb3J0IHtoaWRlRWxlbWVudH0gZnJvbSAnLi9oaWRlRWxlbWVudCc7XG5pbXBvcnQge3Nob3dFbGVtZW50fSBmcm9tICcuL3Nob3dFbGVtZW50JztcblxuY29uc3QgdG9nZ2xlRWxlbWVudCA9ICgkY29sbGFwc2libGU6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCBjb2xsYXBzZWQ6IGJvb2xlYW4gPSAkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuXHRjb25zdCBkdXJhdGlvbjogbnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KCRjb2xsYXBzaWJsZS5kYXRhKCdjb2xsYXBzZS1kdXJhdGlvbicpIGFzIHN0cmluZywgMTApIHx8IDIwMDtcblxuXHRpZiAoY29sbGFwc2VkKSB7XG5cdFx0c2hvd0VsZW1lbnQoJGNvbGxhcHNpYmxlLCBkdXJhdGlvbik7XG5cdFx0JGNvbGxhcHNpYmxlLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcblx0fSBlbHNlIHtcblx0XHRoaWRlRWxlbWVudCgkY29sbGFwc2libGUsIGR1cmF0aW9uKTtcblx0XHQkY29sbGFwc2libGUuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuXHR9XG59O1xuXG5leHBvcnQge3RvZ2dsZUVsZW1lbnR9O1xuIiwgImNvbnN0IGFkZFRvZ2dsZXIgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnksICR0b2dnbGVyOiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3QgJGFwcGVuZEhlcmU6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZVxuXHRcdC5maW5kKCcuY29sbGFwc2libGUtdG9nZ2xlLWFwcGVuZC1oZXJlJylcblx0XHQubm90KCcuY29sbGFwc2libGUtdG9nZ2xlLWFwcGVuZGVkJyk7XG5cblx0aWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtbmV4dCcpKSB7XG5cdFx0Ly8g6Iul5pyJIGNvbGxhcHNpYmxlLW5leHQg57G777yM6YKj5LmI6KKr5oqY5Y+g55qE5YWD57Sg5LiN5Zyo6K+l5YWD57Sg5YaF77yM5q2k5pe255u05o6l5bCG5oqY5Y+g5oyJ6ZKu5re75Yqg5Zyo5pyr5bC+44CCXG5cdFx0JGNvbGxhcHNpYmxlLmFwcGVuZCgkdG9nZ2xlcik7XG5cdH0gZWxzZSBpZiAoJGFwcGVuZEhlcmUubGVuZ3RoKSB7XG5cdFx0Ly8g5bim5pyJIGNvbGxhcHNpYmxlLXRvZ2dsZS1hcHBlbmQtaGVyZSDnsbvnmoTlhYPntKDvvIzoi6XlrZjlnKjvvIzliJnml6Dorrrlj6/mipjlj6DlhYPntKDmmK/ku4DkuYjvvIzliJnlvLrliLblsIbmipjlj6DmjInpkq7mt7vliqDoh7Por6XlhYPntKDkuK3jgIJcblx0XHQkYXBwZW5kSGVyZS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHRcdCRhcHBlbmRIZXJlLmFkZENsYXNzKCdjb2xsYXBzaWJsZS10b2dnbGUtYXBwZW5kZWQnKTtcblx0XHQkYXBwZW5kSGVyZS5wYXJlbnRzVW50aWwoJGNvbGxhcHNpYmxlKS5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKTtcblx0fSBlbHNlIGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ25hdmJveCcpKSB7XG5cdFx0Ly8gbmF2Ym94IOWFg+e0oOeahOaKmOWPoOaMiemSrua3u+WKoOiHsyBuYXZib3gtdGl0bGUg5Lit77yM5LiU6K+lIG5hdmJveC10aXRsZSDkvJrpgb/lhY3ooqvmipjlj6DlvbHlk43liLDjgIJcblx0XHQkY29sbGFwc2libGUuY2hpbGRyZW4oJy5uYXZib3gtdGl0bGUnKS5maXJzdCgpLmFkZENsYXNzKCdjb2xsYXBzaWJsZS1hbHdheXMtc2hvdycpLmFwcGVuZCgkdG9nZ2xlcik7XG5cdH0gZWxzZSBpZiAoJGNvbGxhcHNpYmxlLmhhc0NsYXNzKCdOYXZGcmFtZScpKSB7XG5cdFx0Ly8gTmF2RnJhbWUg5YWD57Sg55qE5oqY5Y+g5oyJ6ZKu5re75Yqg6Iez5YW25a2Q5YWD57SgIE5hdkhlYWQg5Lit77yM5LiU6K+lIE5hdkhlYWQg5Lya6YG/5YWN6KKr5oqY5Y+g5b2x5ZON5Yiw44CCXG5cdFx0JGNvbGxhcHNpYmxlLmNoaWxkcmVuKCcuTmF2SGVhZCcpLmZpcnN0KCkuYWRkQ2xhc3MoJ2NvbGxhcHNpYmxlLWFsd2F5cy1zaG93JykuYXBwZW5kKCR0b2dnbGVyKTtcblx0fSBlbHNlIGlmICgkY29sbGFwc2libGUuaXMoJ3RhYmxlJykpIHtcblx0XHQvLyDlr7nkuo4gdGFibGUg5a+56LGh77yM5bCd6K+V5re75Yqg5YiwIGNhcHRpb24g5Lit77yM6IulIGNhcHRpb24g5LiN5a2Y5Zyo77yM5YiZ5re75Yqg5Yiw56ys5LiA6KGM55qE5pyA5ZCO5LiA5YiX77yM5bm25bCG56ys5LiA6KGM6K6+5Li65aeL57uI5pi+56S644CCXG5cdFx0Y29uc3QgJGNhcHRpb246IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5jaGlsZHJlbignY2FwdGlvbicpO1xuXHRcdGlmICgkY2FwdGlvbi5sZW5ndGgpIHtcblx0XHRcdC8vIOaciWNhcHRpb27nmoTmg4XlhrVcblx0XHRcdCRjYXB0aW9uLmZpcnN0KCkuYXBwZW5kKCR0b2dnbGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgJHRyb3dzOiBKUXVlcnk8SFRNTFRhYmxlUm93RWxlbWVudD4gPSAkY29sbGFwc2libGUuY2hpbGRyZW4oKS5jaGlsZHJlbigndHInKTtcblx0XHRcdCR0cm93cy5maXJzdCgpLmFkZENsYXNzKCdjb2xsYXBzaWJsZS1hbHdheXMtc2hvdycpLmNoaWxkcmVuKCkubGFzdCgpLmFwcGVuZCgkdG9nZ2xlcik7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIOWwneivleafpeaJvuW4puaciSBjb2xsYXBzaWJsZS1hbHdheXMtc2hvdyDnsbvnmoTlrZDlhYPntKDvvIzoi6XlrZjlnKjliJnlsIbmipjlj6DmjInpkq7mt7vliqDoh7PlhbbkuK3jgIJcblx0XHQvLyDlkKbliJnvvIzmt7vliqDoh7PmlbTkuKrlj6/mipjlj6DlhYPntKDnmoTmnIDliY3pnaLjgIJcblx0XHRjb25zdCAkdG9Ub2dnbGU6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5jaGlsZHJlbignLmNvbGxhcHNpYmxlLWFsd2F5cy1zaG93Jyk7XG5cdFx0aWYgKCR0b1RvZ2dsZS5sZW5ndGgpIHtcblx0XHRcdCR0b1RvZ2dsZS5maXJzdCgpLmFwcGVuZCgkdG9nZ2xlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRjb2xsYXBzaWJsZS5wcmVwZW5kKCR0b2dnbGVyKTtcblx0XHRcdCR0b2dnbGVyLmFkZENsYXNzKCdjb2xsYXBzaWJsZS1hbHdheXMtc2hvdycpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHthZGRUb2dnbGVyfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge3RvZ2dsZXJ9IGZyb20gJy4vQ29sbGFwc2libGUubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBnZW5lcmF0ZVRvZ2dsZXJFbGVtZW50ID0gKCRjb2xsYXBzaWJsZTogSlF1ZXJ5LCBoaWRlVGV4dDogc3RyaW5nLCBzaG93VGV4dDogc3RyaW5nKTogSlF1ZXJ5ID0+IHtcblx0Y29uc3QgJHRvZ2dsZXIgPSAkKFxuXHRcdDxzcGFuIGNsYXNzTmFtZT17W3RvZ2dsZXIsICdub3ByaW50J119PlxuXHRcdFx0eydbJ31cblx0XHRcdDxhIHJvbGU9XCJidXR0b25cIiB0YWJJbmRleD17MH0+XG5cdFx0XHRcdHskY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpID8gc2hvd1RleHQgOiBoaWRlVGV4dH1cblx0XHRcdDwvYT5cblx0XHRcdHsnXSd9XG5cdFx0PC9zcGFuPlxuXHQpIGFzIEpRdWVyeTtcblxuXHRyZXR1cm4gJHRvZ2dsZXI7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVG9nZ2xlckVsZW1lbnR9O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvQ29sbGFwc2libGUvbW9kdWxlcy91dGlsL0NvbGxhcHNpYmxlLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgdG9nZ2xlciA9IFwiQ29sbGFwc2libGUtbW9kdWxlX190b2dnbGVyX2t2TUdqR1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwidG9nZ2xlclwiOiB0b2dnbGVyXG59O1xuICAgICAgIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDb2xsYXBzZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdjb2xsYXBzZScsXG5cdFx0XHRqYTogJ+aKmOOCiueVs+OBvycsXG5cdFx0XHQnemgtaGFucyc6ICfmipjlj6AnLFxuXHRcdFx0J3poLWhhbnQnOiAn5oqY55aKJyxcblx0XHR9KSxcblx0XHRFeHBhbmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZXhwYW5kJyxcblx0XHRcdGphOiAn5bGV6ZaLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WxleW8gCcsXG5cdFx0XHQnemgtaGFudCc6ICflsZXplosnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL2FkZExpc3RlbmVyJztcbmltcG9ydCB7YWRkVG9nZ2xlcn0gZnJvbSAnLi9hZGRUb2dnbGVyJztcbmltcG9ydCB7Z2VuZXJhdGVUb2dnbGVyRWxlbWVudH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlVG9nZ2xlckVsZW1lbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtoaWRlRWxlbWVudH0gZnJvbSAnLi91dGlsL2hpZGVFbGVtZW50JztcblxuY29uc3QgbWFrZUNvbGxhcHNpYmxlID0gKCRjb2xsYXBzaWJsZXM6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbGxhcHNpYmxlcykge1xuXHRcdGNvbnN0ICRjb2xsYXBzaWJsZTogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRpZiAoJGNvbGxhcHNpYmxlLmRhdGEoJ21hZGUtY29sbGFwc2libGUnKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaGlkZVRleHQ6IHN0cmluZyA9ICgkY29sbGFwc2libGUuZGF0YSgnY29sbGFwc2V0ZXh0JykgYXMgc3RyaW5nKSB8fCBnZXRNZXNzYWdlKCdDb2xsYXBzZScpO1xuXHRcdGNvbnN0IHNob3dUZXh0OiBzdHJpbmcgPSAoJGNvbGxhcHNpYmxlLmRhdGEoJ2V4cGFuZHRleHQnKSBhcyBzdHJpbmcpIHx8IGdldE1lc3NhZ2UoJ0V4cGFuZCcpO1xuXG5cdFx0Y29uc3QgJHRvZ2dsZXI6IEpRdWVyeSA9IGdlbmVyYXRlVG9nZ2xlckVsZW1lbnQoJGNvbGxhcHNpYmxlLCBoaWRlVGV4dCwgc2hvd1RleHQpO1xuXHRcdGNvbnN0ICR0b2dnbGVyTGluazogSlF1ZXJ5ID0gJHRvZ2dsZXIuZmluZCgnYScpO1xuXG5cdFx0YWRkVG9nZ2xlcigkY29sbGFwc2libGUsICR0b2dnbGVyKTtcblxuXHRcdC8vIOWIneWni+WMlumakOiXj+aJgOacieWFg+e0oO+8jOivpei/h+eoi+ayoeacieWKqOeUu+OAglxuXHRcdGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKSB7XG5cdFx0XHRoaWRlRWxlbWVudCgkY29sbGFwc2libGUsIDApO1xuXHRcdH1cblxuXHRcdGFkZExpc3RlbmVyKCRjb2xsYXBzaWJsZSwgJHRvZ2dsZXJMaW5rLCBoaWRlVGV4dCwgc2hvd1RleHQpO1xuXG5cdFx0JGNvbGxhcHNpYmxlLmRhdGEoJ21hZGUtY29sbGFwc2libGUnLCB0cnVlKTtcblx0fVxufTtcblxuZXhwb3J0IHttYWtlQ29sbGFwc2libGV9O1xuIiwgImNvbnN0IG5hdkZyYW1lID0gKCRjb250ZW50OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Ly8g5Yig6ZmkIE5hdkZyYW1lIOWFg+e0oOiHquW4pueahOaKmOWPoOOAglxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZDxIVE1MU3BhbkVsZW1lbnQ+KCcuTmF2VG9nZ2xlLCAudG9nZ2xlU2hvdywgLnRvZ2dsZUhpZGUsIC5OYXZFbmQnKSkge1xuXHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdH1cblxuXHQvLyDkuLogTmF2RnJhbWUg5YWD57Sg5re75YqgIGNvbGxhcHNpYmxl44CCXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kPEhUTUxEaXZFbGVtZW50PignLk5hdkZyYW1lLCAuQm94bWVyZ2UnKSkge1xuXHRcdGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNpYmxlJykpIHtcblx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2libGUnKTtcblx0XHR9XG5cblx0XHRpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdCb3htZXJnZScpKSB7XG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZXBsYWNlKCdCb3htZXJnZScsICdOYXZGcmFtZScpO1xuXHRcdH1cblx0fVxuXG5cdC8vIOWmguaenCBOYXZDb250ZW50IOaIliBOYXZQaWMg5YWD57Sg6KKr6ZqQ6JeP77yM5YiZ57uZ54i25YWD57SgIE5hdkZyYW1lIOa3u+WKoCBjb2xsYXBzZWTjgIJcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQ8SFRNTERpdkVsZW1lbnQ+KCcuTmF2Q29udGVudCwgLk5hdlBpYycpKSB7XG5cdFx0aWYgKGVsZW1lbnQuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ05hdkZyYW1lJykpIHtcblx0XHRcdGVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7bmF2RnJhbWV9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVUYXJnZXRFbGVtZW50c30gZnJvbSAnLi91dGlsL2dlbmVyYXRlVGFyZ2V0RWxlbWVudHMnO1xuaW1wb3J0IHttYWtlQ29sbGFwc2libGV9IGZyb20gJy4vbWFrZUNvbGxhcHNpYmxlJztcbmltcG9ydCB7bmF2RnJhbWV9IGZyb20gJy4vbmF2RnJhbWUnO1xuXG5jb25zdCBhZGRIb29rID0gKCk6IHZvaWQgPT4ge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKCgkY29udGVudCk6IHZvaWQgPT4ge1xuXHRcdC8vIGNvbXBhdGlibGUgd2l0aCBvbGQgbmF2RnJhbWVzIChzZWUge3tIaWRlSH19IGFuZCB7e0hpZGVGfX0pXG5cdFx0bmF2RnJhbWUoJGNvbnRlbnQpO1xuXG5cdFx0Y29uc3QgJGNvbGxhcHNpYmxlczogSlF1ZXJ5ID0gZ2VuZXJhdGVUYXJnZXRFbGVtZW50cygkY29udGVudCk7XG5cdFx0aWYgKCEkY29sbGFwc2libGVzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG1ha2VDb2xsYXBzaWJsZSgkY29sbGFwc2libGVzKTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEhvb2t9O1xuIiwgIi8qIVxuICog5Li65YWD57Sg5re75Yqg4oCc6ZqQ6JeP4oCd5ZKM4oCc5pi+56S64oCd55qE5oyJ6ZKu44CCXG4gKlxuICog55So5rOV6K+05piO77yaXG4gKlxuICog5bim5pyJIGNvbGxhcHNpYmxlIOexu+eahOWFg+e0oOm7mOiupOWPr+aKmOWPoOOAglxuICogLSDlr7nkuo4gbmF2Ym9477yM5oqY5Y+g5pe25Lya5L+d55WZ5qCH6aKY5qCP77yM5bm25bCG5oqY5Y+g5oyJ6ZKu5re75Yqg5Zyo5qCH6aKY5qCP5Lit44CCXG4gKiAtIOWvueS6jiB0YWJsZe+8jOaKmOWPoOaXtuS8muS/neeVmSBjYXB0aW9uIOaIluesrOS4gOihjO+8jOW5tuWwhuaKmOWPoOaMiemSrua3u+WKoOWcqCBjYXB0aW9uIOacq+WwvlxuICogICDmiJbogIXnrKzkuIDooYzmnIDlkI7kuIDmoLzmnKvlsL7jgIJcbiAqIC0g5a+55LqO5YW25LuW5YWD57Sg77yMXG4gKiAgIC0g6Iul5YW25a2Q5YWD57Sg5pyJ5bim5pyJIGNvbGxhcHNpYmxlLWFsd2F5cy1zaG93IOexu++8jOmCo+S5iOmZpOS6huivpeWtkOWFg+e0oOS5i+WklueahOWQhOS4qlxuICogICDlrZDlhYPntKDpg73kvJrpmo/mipjlj6DpmpDol4/vvIzkuJTmipjlj6DmjInpkq7mt7vliqDlnKjor6XlrZDlhYPntKDmnKvlsL7jgIJcbiAqICAgLSDoi6XmsqHmnInlrZDlhYPntKDluKbmnIkgY29sbGFwc2libGUtYWx3YXlzLXNob3cg57G777yM6YKj5LmI5omA5pyJ5a2Q5YWD57Sg6YO95Lya6KKr5oqY5Y+g77yMXG4gKiAgIOaKmOWPoOaMiemSrua3u+WKoOWcqOaVtOS4qiBjb2xsYXBzaWJsZSDlhYPntKDnmoTlvIDlpLTvvIzkuJTor6XmjInpkq7kuI3kvJrpmo/mipjlj6DpmpDol4/jgIJcbiAqICAgLSDoi6XlrZDlhYPntKDluKbmnIkgY29sbGFwc2libGUtY2FzY2FkZSDnsbvvvIzpgqPkuYjlvZPmipjlj6Dml7bvvIzor6XlhYPntKDoh6rouqvkuI3mmK/pmpDol4/vvIxcbiAqICAg6ICM5piv6ZqQ6JeP5YW25omA5pyJ55qE5a2Q5YWD57Sg77yM6L+Z5Lqb5a2Q5YWD57Sg5ZCM5qC35Y+v5Lul5Y+XIGNvbGxhcHNpYmxlLWFsd2F5cy1zaG93IOWSjFxuICogICBjb2xsYXBzaWJsZS1jYXNjYWRlIOexu+eahOW9seWTjeOAglxuICogICAtIOazqOaEj+W/hemhu+aYr+WtkOWFg+e0oO+8jOebtOaOpeeahOaWh+acrOiKgueCueS4jeS8mumaj+aKmOWPoOmakOiXj++8jOS+i+Wmgu+8mlxuICogICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzaWJsZVwiPjEyMzxzcGFuPjQ1Njwvc3Bhbj48L2Rpdj5cbiAqICAg5oqY5Y+g5pe277yM4oCcNDU24oCd5Lya6ZqP5oqY5Y+g6ZqQ6JeP77yM5L2G4oCcMTIz4oCd5LiN5Lya44CCXG4gKiAtIOiLpeW4puaciSBjb2xsYXBzaWJsZS11c2luZy1zbGlkZSDnsbvvvIzpgqPkuYjmipjlj6Dml7bvvIzkvb/nlKjmu5HliqjliqjnlLvogIzpnZ7mt6HlhaXmt6Hlh7rnmoRcbiAqICAg5Yqo55S744CC5bu66K6u5b2T5Y+q5pyJ5LiA5Liq5YWD57Sg5Lya6KKr6ZqQ6JeP5pe277yM5omN5Yqg5q2k57G744CCXG4gKiAgIC0g5bim5pyJIGNvbGxhcHNpYmxlLXVzaW5nLXNsaWRlIOexu+eahOWFg+e0oOS8muiHquWKqOW4puaciSBjb2xsYXBzaWJsZSDnsbvjgIJcbiAqIC0g6Iul5bim5pyJIGNvbGxhcHNpYmxlLW5leHQg57G777yM6YKj5LmI5YW25oqY5Y+g55qE5LiN5piv5YW26Ieq6Lqr55qE5a2Q5YWD57Sg77yM6ICM5piv5oqY5Y+g57Sn6ZqPXG4gKiAgIOWFtuWQjueahOS4gOS4quWFg+e0oOOAglxuICogICAtIOi/meenjeaDheWGteS4i++8jOaKmOWPoOaMiemSrum7mOiupOmZhOWcqOivpSBjb2xsYXBzaWJsZS1uZXh0IOWFg+e0oOeahOacq+WwvuOAglxuICogICAtIOW4puaciSBjb2xsYXBzaWJsZS1uZXh0IOexu+eahOWFg+e0oOS8muiHquWKqOW4puaciSBjb2xsYXBzaWJsZSDnsbvjgIJcbiAqIC0gZGF0YS1jb2xsYXBzZS1kdXJhdGlvbiDlsZ7mgKflj6/ku6Xorr7nva7mipjlj6DliqjnlLvnmoTml7bplb/vvIzpu5jorqTkuLogMjAwIOavq+enkuOAglxuICogLSDluKbmnIkgY29sbGFwc2VkIOexu+eahOWFg+e0oOWIneWni+WwseaYr+W3suaKmOWPoOeahOOAglxuICogLSBkYXRhLWV4cGFuZHRleHQg5ZKMIGRhdGEtY29sbGFwc2V0ZXh0IOWPr+eUqOS6juaOp+WItuaKmOWPoOaMiemSrueahOaYvuekuuaWh+Wtl+OAguS4jeaUr+aMgVxuICogICDnuYHnroDovazmjaLvvIzkvYbmmK/lhbbpu5jorqTlgLzmmK/lj6/ku6XmraPluLjmoLnmja7nlYzpnaLor63oqIDnuYHnroDovazmjaLnmoTjgIJcbiAqL1xuaW1wb3J0IHthZGRIb29rfSBmcm9tICcuL21vZHVsZXMvYWRkSG9vayc7XG5cbmFkZEhvb2soKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QSxVQUFBO0FBQUFxRixlQUFBbkYsRUFBQTtFQUFBO0FBQ0Q7O0FDdkJBLElBQU13RixVQUFVQSxNQUFZO0FBQzNCQyxLQUFHQyxLQUFLLGtCQUFrQixFQUFFUixJQUFLeEcsY0FBbUI7QUFFbkRpRyxhQUFTakcsUUFBUTtBQUVqQixVQUFNdUIsZ0JBQXdCeEIsdUJBQXVCQyxRQUFRO0FBQzdELFFBQUksQ0FBQ3VCLGNBQWM2QyxRQUFRO0FBQzFCO0lBQ0Q7QUFFQTBCLG9CQUFnQnZFLGFBQWE7RUFDOUIsQ0FBQztBQUNGOztBQ2hCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ0F1RixRQUFROyIsCiAgIm5hbWVzIjogWyJnZW5lcmF0ZVRhcmdldEVsZW1lbnRzIiwgIiRjb250ZW50IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZmluZCIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkcGFyZW50IiwgIiQiLCAicGFyZW50IiwgIl9pdGVyYXRvcjMiLCAiY2xhc3NMaXN0IiwgIl9zdGVwMyIsICJjbGFzc05hbWUiLCAic2xpY2UiLCAiYWRkQ2xhc3MiLCAicmVwbGFjZSIsICJlcnIiLCAiZSIsICJmIiwgIiRjb2xsYXBzaWJsZXMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJoaWRlRWxlbWVudCIsICIkY29sbGFwc2libGUiLCAidGltZSIsICJ1c2VTbGlkZSIsICJoYXNDbGFzcyIsICIkZWxlbWVudCIsICJuZXh0IiwgInNsaWRlVXAiLCAiZmFkZU91dCIsICIkZWxlbWVudHMiLCAiaXMiLCAiY2hpbGRyZW4iLCAiY29udGVudHMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAic2hvd0VsZW1lbnQiLCAic2xpZGVEb3duIiwgImZhZGVJbiIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJ0b2dnbGVFbGVtZW50IiwgImNvbGxhcHNlZCIsICJkdXJhdGlvbiIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiZGF0YSIsICJyZW1vdmVDbGFzcyIsICJhZGRMaXN0ZW5lciIsICIkdG9nZ2xlckxpbmsiLCAiaGlkZVRleHQiLCAic2hvd1RleHQiLCAiZXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgInByZXZlbnREZWZhdWx0IiwgInRleHQiLCAib24iLCAiYWRkVG9nZ2xlciIsICIkdG9nZ2xlciIsICIkYXBwZW5kSGVyZSIsICJub3QiLCAiYXBwZW5kIiwgImxlbmd0aCIsICJwYXJlbnRzVW50aWwiLCAiZmlyc3QiLCAiJGNhcHRpb24iLCAiJHRyb3dzIiwgImxhc3QiLCAiJHRvVG9nZ2xlIiwgInByZXBlbmQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAidG9nZ2xlciIsICJnZW5lcmF0ZVRvZ2dsZXJFbGVtZW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJyb2xlIiwgInRhYkluZGV4IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ29sbGFwc2UiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiRXhwYW5kIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJtYWtlQ29sbGFwc2libGUiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAibmF2RnJhbWUiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAicmVtb3ZlIiwgIl9pdGVyYXRvcjgiLCAiX3N0ZXA4IiwgImNvbnRhaW5zIiwgImFkZCIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJzdHlsZSIsICJkaXNwbGF5IiwgInBhcmVudEVsZW1lbnQiLCAiYWRkSG9vayIsICJtdyIsICJob29rIl0KfQo=
