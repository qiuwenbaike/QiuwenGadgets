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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVRhcmdldEVsZW1lbnRzLnRzIiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL3V0aWwvaGlkZUVsZW1lbnQudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvdXRpbC9zaG93RWxlbWVudC50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy91dGlsL3RvZ2dsZUVsZW1lbnQudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvYWRkVG9nZ2xlci50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy91dGlsL2dlbmVyYXRlVG9nZ2xlckVsZW1lbnQudHN4IiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL3V0aWwvQ29sbGFwc2libGUubW9kdWxlLmxlc3MiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy9tYWtlQ29sbGFwc2libGUudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvbmF2RnJhbWUudHMiLCAic3JjL0NvbGxhcHNpYmxlL0NvbGxhcHNpYmxlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBnZW5lcmF0ZVRhcmdldEVsZW1lbnRzID0gKCRjb250ZW50OiBKUXVlcnkpOiBKUXVlcnkgPT4ge1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZChcblx0XHQnLnBhcmVudC1jb2xsYXBzaWJsZSwgLnBhcmVudC1jb2xsYXBzaWJsZS11c2luZy1zbGlkZSwgLnBhcmVudC1jb2xsYXBzaWJsZS1uZXh0J1xuXHQpKSB7XG5cdFx0Y29uc3QgJHBhcmVudDogSlF1ZXJ5ID0gJChlbGVtZW50KS5wYXJlbnQoKTtcblx0XHRmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiBlbGVtZW50LmNsYXNzTGlzdCkge1xuXHRcdFx0aWYgKGNsYXNzTmFtZS5zbGljZSgwLCAxOCkgPT09ICdwYXJlbnQtY29sbGFwc2libGUnKSB7XG5cdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHQvLyAqIGNvbGxhcHNpYmxlXG5cdFx0XHRcdC8vICogY29sbGFwc2libGUtdXNpbmctc2xpZGVcblx0XHRcdFx0Ly8gKiBjb2xsYXBzaWJsZS1uZXh0XG5cdFx0XHRcdCRwYXJlbnQuYWRkQ2xhc3MoY2xhc3NOYW1lLnJlcGxhY2UoL15wYXJlbnQtLywgJycpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQkY29udGVudC5maW5kKCcuY29sbGFwc2libGUtdXNpbmctc2xpZGUsIC5jb2xsYXBzaWJsZS1uZXh0JykuYWRkQ2xhc3MoJ2NvbGxhcHNpYmxlJyk7XG5cblx0Y29uc3QgJGNvbGxhcHNpYmxlczogSlF1ZXJ5ID0gJGNvbnRlbnQuZmluZCgnLmNvbGxhcHNpYmxlJyk7XG5cblx0cmV0dXJuICRjb2xsYXBzaWJsZXM7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVGFyZ2V0RWxlbWVudHN9O1xuIiwgImltcG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dG9nZ2xlRWxlbWVudH0gZnJvbSAnLi91dGlsL3RvZ2dsZUVsZW1lbnQnO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9ICgkY29sbGFwc2libGU6IEpRdWVyeSwgJHRvZ2dsZXJMaW5rOiBKUXVlcnksIGhpZGVUZXh0OiBzdHJpbmcsIHNob3dUZXh0OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3QgZXZlbnRMaXN0ZW5lciA9IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KTogdm9pZCA9PiB7XG5cdFx0aWYgKCFjaGVja0ExMXlDb25maXJtS2V5KGV2ZW50KSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR0b2dnbGVFbGVtZW50KCRjb2xsYXBzaWJsZSk7XG5cblx0XHRpZiAoJGNvbGxhcHNpYmxlLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSkge1xuXHRcdFx0JHRvZ2dsZXJMaW5rLnRleHQoc2hvd1RleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdG9nZ2xlckxpbmsudGV4dChoaWRlVGV4dCk7XG5cdFx0fVxuXHR9O1xuXG5cdCR0b2dnbGVyTGluay5vbignY2xpY2snLCBldmVudExpc3RlbmVyKTtcblx0JHRvZ2dsZXJMaW5rLm9uKCdrZXlkb3duJywgZXZlbnRMaXN0ZW5lcik7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICIvLyDpmpDol4/mn5DkuKrlj6/mipjlj6DnmoTlhYPntKDjgIJcbmNvbnN0IGhpZGVFbGVtZW50ID0gKCRjb2xsYXBzaWJsZTogSlF1ZXJ5LCB0aW1lOiBudW1iZXIpOiB2b2lkID0+IHtcblx0Y29uc3QgdXNlU2xpZGU6IGJvb2xlYW4gPSAkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLXVzaW5nLXNsaWRlJyk7XG5cdGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLW5leHQnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkY29sbGFwc2libGUubmV4dCgpO1xuXG5cdFx0aWYgKHVzZVNsaWRlKSB7XG5cdFx0XHQkZWxlbWVudC5zbGlkZVVwKHRpbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZWxlbWVudC5mYWRlT3V0KHRpbWUpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zdCAkZWxlbWVudHM6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5pcygndGFibGUnKVxuXHRcdFx0PyAkY29sbGFwc2libGUuY2hpbGRyZW4oKS5jaGlsZHJlbigndHInKVxuXHRcdFx0OiAoJGNvbGxhcHNpYmxlLmNvbnRlbnRzKCkgYXMgSlF1ZXJ5KTtcblxuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkZWxlbWVudHMpIHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0aWYgKCRlbGVtZW50Lmhhc0NsYXNzKCdjb2xsYXBzaWJsZS1jYXNjYWRlJykpIHtcblx0XHRcdFx0aGlkZUVsZW1lbnQoJGVsZW1lbnQsIHRpbWUpO1xuXHRcdFx0fSBlbHNlIGlmICghJGVsZW1lbnQuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLWFsd2F5cy1zaG93JykpIHtcblx0XHRcdFx0aWYgKHVzZVNsaWRlKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuc2xpZGVVcCh0aW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWxlbWVudC5mYWRlT3V0KHRpbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2hpZGVFbGVtZW50fTtcbiIsICIvLyDmmL7npLrmn5DkuKrlj6/mipjlj6DnmoTlhYPntKDjgIJcbmNvbnN0IHNob3dFbGVtZW50ID0gKCRjb2xsYXBzaWJsZTogSlF1ZXJ5LCB0aW1lOiBudW1iZXIpOiB2b2lkID0+IHtcblx0Y29uc3QgdXNlU2xpZGU6IGJvb2xlYW4gPSAkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLXVzaW5nLXNsaWRlJyk7XG5cdGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLW5leHQnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkY29sbGFwc2libGUubmV4dCgpO1xuXG5cdFx0aWYgKHVzZVNsaWRlKSB7XG5cdFx0XHQkZWxlbWVudC5zbGlkZURvd24odGltZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRlbGVtZW50LmZhZGVJbih0aW1lKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgJGVsZW1lbnRzOiBKUXVlcnkgPSAkY29sbGFwc2libGUuaXMoJ3RhYmxlJylcblx0XHRcdD8gJGNvbGxhcHNpYmxlLmNoaWxkcmVuKCkuY2hpbGRyZW4oJ3RyJylcblx0XHRcdDogKCRjb2xsYXBzaWJsZS5jb250ZW50cygpIGFzIEpRdWVyeSk7XG5cblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGVsZW1lbnRzKSB7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRcdGlmICgkZWxlbWVudC5oYXNDbGFzcygnY29sbGFwc2libGUtY2FzY2FkZScpKSB7XG5cdFx0XHRcdHNob3dFbGVtZW50KCRlbGVtZW50LCB0aW1lKTtcblx0XHRcdH0gZWxzZSBpZiAoISRlbGVtZW50Lmhhc0NsYXNzKCdjb2xsYXBzaWJsZS1hbHdheXMtc2hvdycpKSB7XG5cdFx0XHRcdGlmICh1c2VTbGlkZSkge1xuXHRcdFx0XHRcdCRlbGVtZW50LnNsaWRlRG93bih0aW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWxlbWVudC5mYWRlSW4odGltZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7c2hvd0VsZW1lbnR9O1xuIiwgImltcG9ydCB7aGlkZUVsZW1lbnR9IGZyb20gJy4vaGlkZUVsZW1lbnQnO1xuaW1wb3J0IHtzaG93RWxlbWVudH0gZnJvbSAnLi9zaG93RWxlbWVudCc7XG5cbmNvbnN0IHRvZ2dsZUVsZW1lbnQgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3QgY29sbGFwc2VkOiBib29sZWFuID0gJGNvbGxhcHNpYmxlLmhhc0NsYXNzKCdjb2xsYXBzZWQnKTtcblx0Y29uc3QgZHVyYXRpb246IG51bWJlciA9IE51bWJlci5wYXJzZUludCgkY29sbGFwc2libGUuZGF0YSgnY29sbGFwc2UtZHVyYXRpb24nKSBhcyBzdHJpbmcsIDEwKSB8fCAyMDA7XG5cblx0aWYgKGNvbGxhcHNlZCkge1xuXHRcdHNob3dFbGVtZW50KCRjb2xsYXBzaWJsZSwgZHVyYXRpb24pO1xuXHRcdCRjb2xsYXBzaWJsZS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XG5cdH0gZWxzZSB7XG5cdFx0aGlkZUVsZW1lbnQoJGNvbGxhcHNpYmxlLCBkdXJhdGlvbik7XG5cdFx0JGNvbGxhcHNpYmxlLmFkZENsYXNzKCdjb2xsYXBzZWQnKTtcblx0fVxufTtcblxuZXhwb3J0IHt0b2dnbGVFbGVtZW50fTtcbiIsICJjb25zdCBhZGRUb2dnbGVyID0gKCRjb2xsYXBzaWJsZTogSlF1ZXJ5LCAkdG9nZ2xlcjogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGNvbnN0ICRhcHBlbmRIZXJlOiBKUXVlcnkgPSAkY29sbGFwc2libGVcblx0XHQuZmluZCgnLmNvbGxhcHNpYmxlLXRvZ2dsZS1hcHBlbmQtaGVyZScpXG5cdFx0Lm5vdCgnLmNvbGxhcHNpYmxlLXRvZ2dsZS1hcHBlbmRlZCcpO1xuXG5cdGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLW5leHQnKSkge1xuXHRcdC8vIOiLpeaciSBjb2xsYXBzaWJsZS1uZXh0IOexu++8jOmCo+S5iOiiq+aKmOWPoOeahOWFg+e0oOS4jeWcqOivpeWFg+e0oOWGhe+8jOatpOaXtuebtOaOpeWwhuaKmOWPoOaMiemSrua3u+WKoOWcqOacq+WwvuOAglxuXHRcdCRjb2xsYXBzaWJsZS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHR9IGVsc2UgaWYgKCRhcHBlbmRIZXJlLmxlbmd0aCkge1xuXHRcdC8vIOW4puaciSBjb2xsYXBzaWJsZS10b2dnbGUtYXBwZW5kLWhlcmUg57G755qE5YWD57Sg77yM6Iul5a2Y5Zyo77yM5YiZ5peg6K665Y+v5oqY5Y+g5YWD57Sg5piv5LuA5LmI77yM5YiZ5by65Yi25bCG5oqY5Y+g5oyJ6ZKu5re75Yqg6Iez6K+l5YWD57Sg5Lit44CCXG5cdFx0JGFwcGVuZEhlcmUuYXBwZW5kKCR0b2dnbGVyKTtcblx0XHQkYXBwZW5kSGVyZS5hZGRDbGFzcygnY29sbGFwc2libGUtdG9nZ2xlLWFwcGVuZGVkJyk7XG5cdFx0JGFwcGVuZEhlcmUucGFyZW50c1VudGlsKCRjb2xsYXBzaWJsZSkuYWRkQ2xhc3MoJ2NvbGxhcHNpYmxlLWFsd2F5cy1zaG93Jyk7XG5cdH0gZWxzZSBpZiAoJGNvbGxhcHNpYmxlLmhhc0NsYXNzKCduYXZib3gnKSkge1xuXHRcdC8vIG5hdmJveCDlhYPntKDnmoTmipjlj6DmjInpkq7mt7vliqDoh7MgbmF2Ym94LXRpdGxlIOS4re+8jOS4lOivpSBuYXZib3gtdGl0bGUg5Lya6YG/5YWN6KKr5oqY5Y+g5b2x5ZON5Yiw44CCXG5cdFx0JGNvbGxhcHNpYmxlLmNoaWxkcmVuKCcubmF2Ym94LXRpdGxlJykuZmlyc3QoKS5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHR9IGVsc2UgaWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnTmF2RnJhbWUnKSkge1xuXHRcdC8vIE5hdkZyYW1lIOWFg+e0oOeahOaKmOWPoOaMiemSrua3u+WKoOiHs+WFtuWtkOWFg+e0oCBOYXZIZWFkIOS4re+8jOS4lOivpSBOYXZIZWFkIOS8mumBv+WFjeiiq+aKmOWPoOW9seWTjeWIsOOAglxuXHRcdCRjb2xsYXBzaWJsZS5jaGlsZHJlbignLk5hdkhlYWQnKS5maXJzdCgpLmFkZENsYXNzKCdjb2xsYXBzaWJsZS1hbHdheXMtc2hvdycpLmFwcGVuZCgkdG9nZ2xlcik7XG5cdH0gZWxzZSBpZiAoJGNvbGxhcHNpYmxlLmlzKCd0YWJsZScpKSB7XG5cdFx0Ly8g5a+55LqOIHRhYmxlIOWvueixoe+8jOWwneivlea3u+WKoOWIsCBjYXB0aW9uIOS4re+8jOiLpSBjYXB0aW9uIOS4jeWtmOWcqO+8jOWImea3u+WKoOWIsOesrOS4gOihjOeahOacgOWQjuS4gOWIl++8jOW5tuWwhuesrOS4gOihjOiuvuS4uuWni+e7iOaYvuekuuOAglxuXHRcdGNvbnN0ICRjYXB0aW9uOiBKUXVlcnkgPSAkY29sbGFwc2libGUuY2hpbGRyZW4oJ2NhcHRpb24nKTtcblx0XHRpZiAoJGNhcHRpb24ubGVuZ3RoKSB7XG5cdFx0XHQvLyDmnIljYXB0aW9u55qE5oOF5Ya1XG5cdFx0XHQkY2FwdGlvbi5maXJzdCgpLmFwcGVuZCgkdG9nZ2xlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0ICR0cm93czogSlF1ZXJ5PEhUTUxUYWJsZVJvd0VsZW1lbnQ+ID0gJGNvbGxhcHNpYmxlLmNoaWxkcmVuKCkuY2hpbGRyZW4oJ3RyJyk7XG5cdFx0XHQkdHJvd3MuZmlyc3QoKS5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKS5jaGlsZHJlbigpLmxhc3QoKS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyDlsJ3or5Xmn6Xmib7luKbmnIkgY29sbGFwc2libGUtYWx3YXlzLXNob3cg57G755qE5a2Q5YWD57Sg77yM6Iul5a2Y5Zyo5YiZ5bCG5oqY5Y+g5oyJ6ZKu5re75Yqg6Iez5YW25Lit44CCXG5cdFx0Ly8g5ZCm5YiZ77yM5re75Yqg6Iez5pW05Liq5Y+v5oqY5Y+g5YWD57Sg55qE5pyA5YmN6Z2i44CCXG5cdFx0Y29uc3QgJHRvVG9nZ2xlOiBKUXVlcnkgPSAkY29sbGFwc2libGUuY2hpbGRyZW4oJy5jb2xsYXBzaWJsZS1hbHdheXMtc2hvdycpO1xuXHRcdGlmICgkdG9Ub2dnbGUubGVuZ3RoKSB7XG5cdFx0XHQkdG9Ub2dnbGUuZmlyc3QoKS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkY29sbGFwc2libGUucHJlcGVuZCgkdG9nZ2xlcik7XG5cdFx0XHQkdG9nZ2xlci5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkVG9nZ2xlcn07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHt0b2dnbGVyfSBmcm9tICcuL0NvbGxhcHNpYmxlLm1vZHVsZS5sZXNzJztcblxuY29uc3QgZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCA9ICgkY29sbGFwc2libGU6IEpRdWVyeSwgaGlkZVRleHQ6IHN0cmluZywgc2hvd1RleHQ6IHN0cmluZyk6IEpRdWVyeSA9PiB7XG5cdGNvbnN0ICR0b2dnbGVyID0gJChcblx0XHQ8c3BhbiBjbGFzc05hbWU9e1t0b2dnbGVyLCAnbm9wcmludCddfT5cblx0XHRcdHsnWyd9XG5cdFx0XHQ8YSByb2xlPVwiYnV0dG9uXCIgdGFiSW5kZXg9ezB9PlxuXHRcdFx0XHR7JGNvbGxhcHNpYmxlLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSA/IHNob3dUZXh0IDogaGlkZVRleHR9XG5cdFx0XHQ8L2E+XG5cdFx0XHR7J10nfVxuXHRcdDwvc3Bhbj5cblx0KSBhcyBKUXVlcnk7XG5cblx0cmV0dXJuICR0b2dnbGVyO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVRvZ2dsZXJFbGVtZW50fTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvdXRpbC9Db2xsYXBzaWJsZS5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IHRvZ2dsZXIgPSBcIkNvbGxhcHNpYmxlLW1vZHVsZV9fdG9nZ2xlcl9rdk1HakdcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInRvZ2dsZXJcIjogdG9nZ2xlclxufTtcbiAgICAgICIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q29sbGFwc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnY29sbGFwc2UnLFxuXHRcdFx0amE6ICfmipjjgornlbPjgb8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oqY5Y+gJyxcblx0XHRcdCd6aC1oYW50JzogJ+aKmOeWiicsXG5cdFx0fSksXG5cdFx0RXhwYW5kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2V4cGFuZCcsXG5cdFx0XHRqYTogJ+WxlemWiycsXG5cdFx0XHQnemgtaGFucyc6ICflsZXlvIAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bGV6ZaLJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9hZGRMaXN0ZW5lcic7XG5pbXBvcnQge2FkZFRvZ2dsZXJ9IGZyb20gJy4vYWRkVG9nZ2xlcic7XG5pbXBvcnQge2dlbmVyYXRlVG9nZ2xlckVsZW1lbnR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVRvZ2dsZXJFbGVtZW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aGlkZUVsZW1lbnR9IGZyb20gJy4vdXRpbC9oaWRlRWxlbWVudCc7XG5cbmNvbnN0IG1ha2VDb2xsYXBzaWJsZSA9ICgkY29sbGFwc2libGVzOiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb2xsYXBzaWJsZXMpIHtcblx0XHRjb25zdCAkY29sbGFwc2libGU6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKCRjb2xsYXBzaWJsZS5kYXRhKCdtYWRlLWNvbGxhcHNpYmxlJykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhpZGVUZXh0OiBzdHJpbmcgPSAoJGNvbGxhcHNpYmxlLmRhdGEoJ2NvbGxhcHNldGV4dCcpIGFzIHN0cmluZykgfHwgZ2V0TWVzc2FnZSgnQ29sbGFwc2UnKTtcblx0XHRjb25zdCBzaG93VGV4dDogc3RyaW5nID0gKCRjb2xsYXBzaWJsZS5kYXRhKCdleHBhbmR0ZXh0JykgYXMgc3RyaW5nKSB8fCBnZXRNZXNzYWdlKCdFeHBhbmQnKTtcblxuXHRcdGNvbnN0ICR0b2dnbGVyOiBKUXVlcnkgPSBnZW5lcmF0ZVRvZ2dsZXJFbGVtZW50KCRjb2xsYXBzaWJsZSwgaGlkZVRleHQsIHNob3dUZXh0KTtcblx0XHRjb25zdCAkdG9nZ2xlckxpbms6IEpRdWVyeSA9ICR0b2dnbGVyLmZpbmQoJ2EnKTtcblxuXHRcdGFkZFRvZ2dsZXIoJGNvbGxhcHNpYmxlLCAkdG9nZ2xlcik7XG5cblx0XHQvLyDliJ3lp4vljJbpmpDol4/miYDmnInlhYPntKDvvIzor6Xov4fnqIvmsqHmnInliqjnlLvjgIJcblx0XHRpZiAoJGNvbGxhcHNpYmxlLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSkge1xuXHRcdFx0aGlkZUVsZW1lbnQoJGNvbGxhcHNpYmxlLCAwKTtcblx0XHR9XG5cblx0XHRhZGRMaXN0ZW5lcigkY29sbGFwc2libGUsICR0b2dnbGVyTGluaywgaGlkZVRleHQsIHNob3dUZXh0KTtcblxuXHRcdCRjb2xsYXBzaWJsZS5kYXRhKCdtYWRlLWNvbGxhcHNpYmxlJywgdHJ1ZSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7bWFrZUNvbGxhcHNpYmxlfTtcbiIsICJjb25zdCBuYXZGcmFtZSA9ICgkY29udGVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdC8vIOWIoOmZpCBOYXZGcmFtZSDlhYPntKDoh6rluKbnmoTmipjlj6DjgIJcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQ8SFRNTFNwYW5FbGVtZW50PignLk5hdlRvZ2dsZSwgLnRvZ2dsZVNob3csIC50b2dnbGVIaWRlLCAuTmF2RW5kJykpIHtcblx0XHRlbGVtZW50LnJlbW92ZSgpO1xuXHR9XG5cblx0Ly8g5Li6IE5hdkZyYW1lIOWFg+e0oOa3u+WKoCBjb2xsYXBzaWJsZeOAglxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZDxIVE1MRGl2RWxlbWVudD4oJy5OYXZGcmFtZSwgLkJveG1lcmdlJykpIHtcblx0XHRpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2xsYXBzaWJsZScpKSB7XG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNpYmxlJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnQm94bWVyZ2UnKSkge1xuXHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVwbGFjZSgnQm94bWVyZ2UnLCAnTmF2RnJhbWUnKTtcblx0XHR9XG5cdH1cblxuXHQvLyDlpoLmnpwgTmF2Q29udGVudCDmiJYgTmF2UGljIOWFg+e0oOiiq+makOiXj++8jOWImee7meeItuWFg+e0oCBOYXZGcmFtZSDmt7vliqAgY29sbGFwc2Vk44CCXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kPEhUTUxEaXZFbGVtZW50PignLk5hdkNvbnRlbnQsIC5OYXZQaWMnKSkge1xuXHRcdGlmIChlbGVtZW50LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCAmJiBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdOYXZGcmFtZScpKSB7XG5cdFx0XHRlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkJyk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge25hdkZyYW1lfTtcbiIsICIvKiFcbiAqIEBkZXNjcmlwdGlvbiDkuLrlhYPntKDmt7vliqDigJzpmpDol4/igJ3lkozigJzmmL7npLrigJ3nmoTmjInpkq7jgIJcbiAqXG4gKiDnlKjms5Xor7TmmI7vvJpcbiAqXG4gKiDluKbmnIkgY29sbGFwc2libGUg57G755qE5YWD57Sg6buY6K6k5Y+v5oqY5Y+g44CCXG4gKiAtIOWvueS6jiBuYXZib3jvvIzmipjlj6Dml7bkvJrkv53nlZnmoIfpopjmoI/vvIzlubblsIbmipjlj6DmjInpkq7mt7vliqDlnKjmoIfpopjmoI/kuK3jgIJcbiAqIC0g5a+55LqOIHRhYmxl77yM5oqY5Y+g5pe25Lya5L+d55WZIGNhcHRpb24g5oiW56ys5LiA6KGM77yM5bm25bCG5oqY5Y+g5oyJ6ZKu5re75Yqg5ZyoIGNhcHRpb24g5pyr5bC+XG4gKiAgIOaIluiAheesrOS4gOihjOacgOWQjuS4gOagvOacq+WwvuOAglxuICogLSDlr7nkuo7lhbbku5blhYPntKDvvIxcbiAqICAgLSDoi6XlhbblrZDlhYPntKDmnInluKbmnIkgY29sbGFwc2libGUtYWx3YXlzLXNob3cg57G777yM6YKj5LmI6Zmk5LqG6K+l5a2Q5YWD57Sg5LmL5aSW55qE5ZCE5LiqXG4gKiAgIOWtkOWFg+e0oOmDveS8mumaj+aKmOWPoOmakOiXj++8jOS4lOaKmOWPoOaMiemSrua3u+WKoOWcqOivpeWtkOWFg+e0oOacq+WwvuOAglxuICogICAtIOiLpeayoeacieWtkOWFg+e0oOW4puaciSBjb2xsYXBzaWJsZS1hbHdheXMtc2hvdyDnsbvvvIzpgqPkuYjmiYDmnInlrZDlhYPntKDpg73kvJrooqvmipjlj6DvvIxcbiAqICAg5oqY5Y+g5oyJ6ZKu5re75Yqg5Zyo5pW05LiqIGNvbGxhcHNpYmxlIOWFg+e0oOeahOW8gOWktO+8jOS4lOivpeaMiemSruS4jeS8mumaj+aKmOWPoOmakOiXj+OAglxuICogICAtIOiLpeWtkOWFg+e0oOW4puaciSBjb2xsYXBzaWJsZS1jYXNjYWRlIOexu++8jOmCo+S5iOW9k+aKmOWPoOaXtu+8jOivpeWFg+e0oOiHqui6q+S4jeaYr+makOiXj++8jFxuICogICDogIzmmK/pmpDol4/lhbbmiYDmnInnmoTlrZDlhYPntKDvvIzov5nkupvlrZDlhYPntKDlkIzmoLflj6/ku6Xlj5cgY29sbGFwc2libGUtYWx3YXlzLXNob3cg5ZKMXG4gKiAgIGNvbGxhcHNpYmxlLWNhc2NhZGUg57G755qE5b2x5ZON44CCXG4gKiAgIC0g5rOo5oSP5b+F6aG75piv5a2Q5YWD57Sg77yM55u05o6l55qE5paH5pys6IqC54K55LiN5Lya6ZqP5oqY5Y+g6ZqQ6JeP77yM5L6L5aaC77yaXG4gKiAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNpYmxlXCI+MTIzPHNwYW4+NDU2PC9zcGFuPjwvZGl2PlxuICogICDmipjlj6Dml7bvvIzigJw0NTbigJ3kvJrpmo/mipjlj6DpmpDol4/vvIzkvYbigJwxMjPigJ3kuI3kvJrjgIJcbiAqIC0g6Iul5bim5pyJIGNvbGxhcHNpYmxlLXVzaW5nLXNsaWRlIOexu++8jOmCo+S5iOaKmOWPoOaXtu+8jOS9v+eUqOa7keWKqOWKqOeUu+iAjOmdnua3oeWFpea3oeWHuueahFxuICogICDliqjnlLvjgILlu7rorq7lvZPlj6rmnInkuIDkuKrlhYPntKDkvJrooqvpmpDol4/ml7bvvIzmiY3liqDmraTnsbvjgIJcbiAqICAgLSDluKbmnIkgY29sbGFwc2libGUtdXNpbmctc2xpZGUg57G755qE5YWD57Sg5Lya6Ieq5Yqo5bim5pyJIGNvbGxhcHNpYmxlIOexu+OAglxuICogLSDoi6XluKbmnIkgY29sbGFwc2libGUtbmV4dCDnsbvvvIzpgqPkuYjlhbbmipjlj6DnmoTkuI3mmK/lhbboh6rouqvnmoTlrZDlhYPntKDvvIzogIzmmK/mipjlj6DntKfpmo9cbiAqICAg5YW25ZCO55qE5LiA5Liq5YWD57Sg44CCXG4gKiAgIC0g6L+Z56eN5oOF5Ya15LiL77yM5oqY5Y+g5oyJ6ZKu6buY6K6k6ZmE5Zyo6K+lIGNvbGxhcHNpYmxlLW5leHQg5YWD57Sg55qE5pyr5bC+44CCXG4gKiAgIC0g5bim5pyJIGNvbGxhcHNpYmxlLW5leHQg57G755qE5YWD57Sg5Lya6Ieq5Yqo5bim5pyJIGNvbGxhcHNpYmxlIOexu+OAglxuICogLSBkYXRhLWNvbGxhcHNlLWR1cmF0aW9uIOWxnuaAp+WPr+S7peiuvue9ruaKmOWPoOWKqOeUu+eahOaXtumVv++8jOm7mOiupOS4uiAyMDAg5q+r56eS44CCXG4gKiAtIOW4puaciSBjb2xsYXBzZWQg57G755qE5YWD57Sg5Yid5aeL5bCx5piv5bey5oqY5Y+g55qE44CCXG4gKiAtIGRhdGEtZXhwYW5kdGV4dCDlkowgZGF0YS1jb2xsYXBzZXRleHQg5Y+v55So5LqO5o6n5Yi25oqY5Y+g5oyJ6ZKu55qE5pi+56S65paH5a2X44CC5LiN5pSv5oyBXG4gKiAgIOe5geeugOi9rOaNou+8jOS9huaYr+WFtum7mOiupOWAvOaYr+WPr+S7peato+W4uOagueaNrueVjOmdouivreiogOe5geeugOi9rOaNoueahOOAglxuICovXG5pbXBvcnQge2dlbmVyYXRlVGFyZ2V0RWxlbWVudHN9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dlbmVyYXRlVGFyZ2V0RWxlbWVudHMnO1xuaW1wb3J0IHttYWtlQ29sbGFwc2libGV9IGZyb20gJy4vbW9kdWxlcy9tYWtlQ29sbGFwc2libGUnO1xuaW1wb3J0IHtuYXZGcmFtZX0gZnJvbSAnLi9tb2R1bGVzL25hdkZyYW1lJztcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCgoJGNvbnRlbnQpOiB2b2lkID0+IHtcblx0Ly8gY29tcGF0aWJsZSB3aXRoIG9sZCBuYXZGcmFtZXMgKHNlZSB7e0hpZGVIfX0gYW5kIHt7SGlkZUZ9fSlcblx0bmF2RnJhbWUoJGNvbnRlbnQpO1xuXG5cdGNvbnN0ICRjb2xsYXBzaWJsZXM6IEpRdWVyeSA9IGdlbmVyYXRlVGFyZ2V0RWxlbWVudHMoJGNvbnRlbnQpO1xuXHRpZiAoISRjb2xsYXBzaWJsZXMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bWFrZUNvbGxhcHNpYmxlKCRjb2xsYXBzaWJsZXMpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLHlCQUEwQkMsY0FBNkI7QUFBQSxNQUFBQyxhQUFBQywyQkFDdENGLFNBQVNHLEtBQzlCLGdGQUNELENBQUEsR0FBQUM7QUFBQSxNQUFBO0FBRkEsU0FB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UTtBQUVqQixRQUFNdUIsZ0JBQXdCeEIsdUJBQXVCQyxRQUFRO0FBQzdELE1BQUksQ0FBQ3VCLGNBQWM2QyxRQUFRO0FBQzFCO0VBQ0Q7QUFFQTBCLGtCQUFnQnZFLGFBQWE7QUFDOUIsQ0FBQzsiLAogICJuYW1lcyI6IFsiZ2VuZXJhdGVUYXJnZXRFbGVtZW50cyIsICIkY29udGVudCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImZpbmQiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiJHBhcmVudCIsICIkIiwgInBhcmVudCIsICJfaXRlcmF0b3IzIiwgImNsYXNzTGlzdCIsICJfc3RlcDMiLCAiY2xhc3NOYW1lIiwgInNsaWNlIiwgImFkZENsYXNzIiwgInJlcGxhY2UiLCAiZXJyIiwgImUiLCAiZiIsICIkY29sbGFwc2libGVzIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiaGlkZUVsZW1lbnQiLCAiJGNvbGxhcHNpYmxlIiwgInRpbWUiLCAidXNlU2xpZGUiLCAiaGFzQ2xhc3MiLCAiJGVsZW1lbnQiLCAibmV4dCIsICJzbGlkZVVwIiwgImZhZGVPdXQiLCAiJGVsZW1lbnRzIiwgImlzIiwgImNoaWxkcmVuIiwgImNvbnRlbnRzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInNob3dFbGVtZW50IiwgInNsaWRlRG93biIsICJmYWRlSW4iLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAidG9nZ2xlRWxlbWVudCIsICJjb2xsYXBzZWQiLCAiZHVyYXRpb24iLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgImRhdGEiLCAicmVtb3ZlQ2xhc3MiLCAiYWRkTGlzdGVuZXIiLCAiJHRvZ2dsZXJMaW5rIiwgImhpZGVUZXh0IiwgInNob3dUZXh0IiwgImV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAiY2hlY2tBMTF5Q29uZmlybUtleSIsICJwcmV2ZW50RGVmYXVsdCIsICJ0ZXh0IiwgIm9uIiwgImFkZFRvZ2dsZXIiLCAiJHRvZ2dsZXIiLCAiJGFwcGVuZEhlcmUiLCAibm90IiwgImFwcGVuZCIsICJsZW5ndGgiLCAicGFyZW50c1VudGlsIiwgImZpcnN0IiwgIiRjYXB0aW9uIiwgIiR0cm93cyIsICJsYXN0IiwgIiR0b1RvZ2dsZSIsICJwcmVwZW5kIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInRvZ2dsZXIiLCAiZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAicm9sZSIsICJ0YWJJbmRleCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNvbGxhcHNlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkV4cGFuZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibWFrZUNvbGxhcHNpYmxlIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgIm5hdkZyYW1lIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgInJlbW92ZSIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJjb250YWlucyIsICJhZGQiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAic3R5bGUiLCAiZGlzcGxheSIsICJwYXJlbnRFbGVtZW50IiwgIm13IiwgImhvb2siXQp9Cg==
