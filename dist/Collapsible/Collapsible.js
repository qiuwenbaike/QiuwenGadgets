/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://rs.miraheze.org/wiki/MediaWiki:Gadget-collapsible.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Collapsible}
 * @author SolidBlock
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
var generateTargetElements = ($content) => {
  var _iterator = _createForOfIteratorHelper($content.find(".parent-collapsible, .parent-collapsible-using-slide, .parent-collapsible-next")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      const $parent = $(element).parent();
      var _iterator2 = _createForOfIteratorHelper(element.classList), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const className = _step2.value;
          if (className.slice(0, 18) === "parent-collapsible") {
            $parent.addClass(className.replace(/^parent-/, ""));
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
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
    var _iterator3 = _createForOfIteratorHelper($elements), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const element = _step3.value;
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
      _iterator3.e(err);
    } finally {
      _iterator3.f();
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
    var _iterator4 = _createForOfIteratorHelper($elements), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const element = _step4.value;
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
      _iterator4.e(err);
    } finally {
      _iterator4.f();
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
//! src/Collapsible/modules/constant.ts
var CLASS_NAME = "gadget-collapsible";
var CLASS_NAME_TOGGLER = "".concat(CLASS_NAME, "-toggler");
//! src/Collapsible/modules/util/generateTogglerElement.ts
var generateTogglerElement = ($collapsible, hideText, showText) => {
  const $togglerLink = $("<a>").attr("role", "button").attr("tabindex", "0");
  if ($collapsible.hasClass("collapsed")) {
    $togglerLink.text(showText);
  } else {
    $togglerLink.text(hideText);
  }
  const $toggler = $("<span>").addClass("".concat(CLASS_NAME_TOGGLER, " noprint")).append("[", $togglerLink, "]");
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
  var _iterator5 = _createForOfIteratorHelper($collapsibles), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      const element = _step5.value;
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
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
};
//! src/Collapsible/modules/addHook.ts
var addHook = () => {
  mw.hook("wikipage.content").add(($content) => {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVRhcmdldEVsZW1lbnRzLnRzIiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL3V0aWwvaGlkZUVsZW1lbnQudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvdXRpbC9zaG93RWxlbWVudC50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy91dGlsL3RvZ2dsZUVsZW1lbnQudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvYWRkVG9nZ2xlci50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy91dGlsL2dlbmVyYXRlVG9nZ2xlckVsZW1lbnQudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy9tYWtlQ29sbGFwc2libGUudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvYWRkSG9vay50cyIsICJzcmMvQ29sbGFwc2libGUvQ29sbGFwc2libGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IGdlbmVyYXRlVGFyZ2V0RWxlbWVudHMgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IEpRdWVyeSA9PiB7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kKFxuXHRcdCcucGFyZW50LWNvbGxhcHNpYmxlLCAucGFyZW50LWNvbGxhcHNpYmxlLXVzaW5nLXNsaWRlLCAucGFyZW50LWNvbGxhcHNpYmxlLW5leHQnXG5cdCkpIHtcblx0XHRjb25zdCAkcGFyZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpLnBhcmVudCgpO1xuXHRcdGZvciAoY29uc3QgY2xhc3NOYW1lIG9mIGVsZW1lbnQuY2xhc3NMaXN0KSB7XG5cdFx0XHRpZiAoY2xhc3NOYW1lLnNsaWNlKDAsIDE4KSA9PT0gJ3BhcmVudC1jb2xsYXBzaWJsZScpIHtcblx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdC8vICogY29sbGFwc2libGVcblx0XHRcdFx0Ly8gKiBjb2xsYXBzaWJsZS11c2luZy1zbGlkZVxuXHRcdFx0XHQvLyAqIGNvbGxhcHNpYmxlLW5leHRcblx0XHRcdFx0JHBhcmVudC5hZGRDbGFzcyhjbGFzc05hbWUucmVwbGFjZSgvXnBhcmVudC0vLCAnJykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCRjb250ZW50LmZpbmQoJy5jb2xsYXBzaWJsZS11c2luZy1zbGlkZSwgLmNvbGxhcHNpYmxlLW5leHQnKS5hZGRDbGFzcygnY29sbGFwc2libGUnKTtcblxuXHRjb25zdCAkY29sbGFwc2libGVzOiBKUXVlcnkgPSAkY29udGVudC5maW5kKCcuY29sbGFwc2libGUnKTtcblxuXHRyZXR1cm4gJGNvbGxhcHNpYmxlcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVUYXJnZXRFbGVtZW50c307XG4iLCAiaW1wb3J0IHtjaGVja0ExMXlDb25maXJtS2V5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt0b2dnbGVFbGVtZW50fSBmcm9tICcuL3V0aWwvdG9nZ2xlRWxlbWVudCc7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKCRjb2xsYXBzaWJsZTogSlF1ZXJ5LCAkdG9nZ2xlckxpbms6IEpRdWVyeSwgaGlkZVRleHQ6IHN0cmluZywgc2hvd1RleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCBldmVudExpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHRvZ2dsZUVsZW1lbnQoJGNvbGxhcHNpYmxlKTtcblxuXHRcdGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKSB7XG5cdFx0XHQkdG9nZ2xlckxpbmsudGV4dChzaG93VGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0b2dnbGVyTGluay50ZXh0KGhpZGVUZXh0KTtcblx0XHR9XG5cdH07XG5cblx0JHRvZ2dsZXJMaW5rLm9uKCdjbGljaycsIGV2ZW50TGlzdGVuZXIpO1xuXHQkdG9nZ2xlckxpbmsub24oJ2tleWRvd24nLCBldmVudExpc3RlbmVyKTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgIi8vIOmakOiXj+afkOS4quWPr+aKmOWPoOeahOWFg+e0oOOAglxuY29uc3QgaGlkZUVsZW1lbnQgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnksIHRpbWU6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRjb25zdCB1c2VTbGlkZTogYm9vbGVhbiA9ICRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtdXNpbmctc2xpZGUnKTtcblx0aWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtbmV4dCcpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5uZXh0KCk7XG5cblx0XHRpZiAodXNlU2xpZGUpIHtcblx0XHRcdCRlbGVtZW50LnNsaWRlVXAodGltZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRlbGVtZW50LmZhZGVPdXQodGltZSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnN0ICRlbGVtZW50czogSlF1ZXJ5ID0gJGNvbGxhcHNpYmxlLmlzKCd0YWJsZScpXG5cdFx0XHQ/ICRjb2xsYXBzaWJsZS5jaGlsZHJlbigpLmNoaWxkcmVuKCd0cicpXG5cdFx0XHQ6ICgkY29sbGFwc2libGUuY29udGVudHMoKSBhcyBKUXVlcnkpO1xuXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRlbGVtZW50cykge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHRpZiAoJGVsZW1lbnQuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLWNhc2NhZGUnKSkge1xuXHRcdFx0XHRoaWRlRWxlbWVudCgkZWxlbWVudCwgdGltZSk7XG5cdFx0XHR9IGVsc2UgaWYgKCEkZWxlbWVudC5oYXNDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKSkge1xuXHRcdFx0XHRpZiAodXNlU2xpZGUpIHtcblx0XHRcdFx0XHQkZWxlbWVudC5zbGlkZVVwKHRpbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbGVtZW50LmZhZGVPdXQodGltZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7aGlkZUVsZW1lbnR9O1xuIiwgIi8vIOaYvuekuuafkOS4quWPr+aKmOWPoOeahOWFg+e0oOOAglxuY29uc3Qgc2hvd0VsZW1lbnQgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnksIHRpbWU6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRjb25zdCB1c2VTbGlkZTogYm9vbGVhbiA9ICRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtdXNpbmctc2xpZGUnKTtcblx0aWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtbmV4dCcpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5uZXh0KCk7XG5cblx0XHRpZiAodXNlU2xpZGUpIHtcblx0XHRcdCRlbGVtZW50LnNsaWRlRG93bih0aW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGVsZW1lbnQuZmFkZUluKHRpbWUpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zdCAkZWxlbWVudHM6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5pcygndGFibGUnKVxuXHRcdFx0PyAkY29sbGFwc2libGUuY2hpbGRyZW4oKS5jaGlsZHJlbigndHInKVxuXHRcdFx0OiAoJGNvbGxhcHNpYmxlLmNvbnRlbnRzKCkgYXMgSlF1ZXJ5KTtcblxuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkZWxlbWVudHMpIHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0aWYgKCRlbGVtZW50Lmhhc0NsYXNzKCdjb2xsYXBzaWJsZS1jYXNjYWRlJykpIHtcblx0XHRcdFx0c2hvd0VsZW1lbnQoJGVsZW1lbnQsIHRpbWUpO1xuXHRcdFx0fSBlbHNlIGlmICghJGVsZW1lbnQuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLWFsd2F5cy1zaG93JykpIHtcblx0XHRcdFx0aWYgKHVzZVNsaWRlKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuc2xpZGVEb3duKHRpbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbGVtZW50LmZhZGVJbih0aW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtzaG93RWxlbWVudH07XG4iLCAiaW1wb3J0IHtoaWRlRWxlbWVudH0gZnJvbSAnLi9oaWRlRWxlbWVudCc7XG5pbXBvcnQge3Nob3dFbGVtZW50fSBmcm9tICcuL3Nob3dFbGVtZW50JztcblxuY29uc3QgdG9nZ2xlRWxlbWVudCA9ICgkY29sbGFwc2libGU6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCBjb2xsYXBzZWQ6IGJvb2xlYW4gPSAkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuXHRjb25zdCBkdXJhdGlvbjogbnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KCRjb2xsYXBzaWJsZS5kYXRhKCdjb2xsYXBzZS1kdXJhdGlvbicpIGFzIHN0cmluZywgMTApIHx8IDIwMDtcblxuXHRpZiAoY29sbGFwc2VkKSB7XG5cdFx0c2hvd0VsZW1lbnQoJGNvbGxhcHNpYmxlLCBkdXJhdGlvbik7XG5cdFx0JGNvbGxhcHNpYmxlLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcblx0fSBlbHNlIHtcblx0XHRoaWRlRWxlbWVudCgkY29sbGFwc2libGUsIGR1cmF0aW9uKTtcblx0XHQkY29sbGFwc2libGUuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuXHR9XG59O1xuXG5leHBvcnQge3RvZ2dsZUVsZW1lbnR9O1xuIiwgImNvbnN0IGFkZFRvZ2dsZXIgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnksICR0b2dnbGVyOiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3QgJGFwcGVuZEhlcmU6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZVxuXHRcdC5maW5kKCcuY29sbGFwc2libGUtdG9nZ2xlLWFwcGVuZC1oZXJlJylcblx0XHQubm90KCcuY29sbGFwc2libGUtdG9nZ2xlLWFwcGVuZGVkJyk7XG5cblx0aWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtbmV4dCcpKSB7XG5cdFx0Ly8g6Iul5pyJIGNvbGxhcHNpYmxlLW5leHQg57G777yM6YKj5LmI6KKr5oqY5Y+g55qE5YWD57Sg5LiN5Zyo6K+l5YWD57Sg5YaF77yM5q2k5pe255u05o6l5bCG5oqY5Y+g5oyJ6ZKu5re75Yqg5Zyo5pyr5bC+44CCXG5cdFx0JGNvbGxhcHNpYmxlLmFwcGVuZCgkdG9nZ2xlcik7XG5cdH0gZWxzZSBpZiAoJGFwcGVuZEhlcmUubGVuZ3RoKSB7XG5cdFx0Ly8g5bim5pyJIGNvbGxhcHNpYmxlLXRvZ2dsZS1hcHBlbmQtaGVyZSDnsbvnmoTlhYPntKDvvIzoi6XlrZjlnKjvvIzliJnml6Dorrrlj6/mipjlj6DlhYPntKDmmK/ku4DkuYjvvIzliJnlvLrliLblsIbmipjlj6DmjInpkq7mt7vliqDoh7Por6XlhYPntKDkuK3jgIJcblx0XHQkYXBwZW5kSGVyZS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHRcdCRhcHBlbmRIZXJlLmFkZENsYXNzKCdjb2xsYXBzaWJsZS10b2dnbGUtYXBwZW5kZWQnKTtcblx0XHQkYXBwZW5kSGVyZS5wYXJlbnRzVW50aWwoJGNvbGxhcHNpYmxlKS5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKTtcblx0fSBlbHNlIGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ25hdmJveCcpKSB7XG5cdFx0Ly8gbmF2Ym94IOWFg+e0oOeahOaKmOWPoOaMiemSrua3u+WKoOiHsyBuYXZib3gtdGl0bGUg5Lit77yM5LiU6K+lIG5hdmJveC10aXRsZSDkvJrpgb/lhY3ooqvmipjlj6DlvbHlk43liLDjgIJcblx0XHQkY29sbGFwc2libGUuY2hpbGRyZW4oJy5uYXZib3gtdGl0bGUnKS5maXJzdCgpLmFkZENsYXNzKCdjb2xsYXBzaWJsZS1hbHdheXMtc2hvdycpLmFwcGVuZCgkdG9nZ2xlcik7XG5cdH0gZWxzZSBpZiAoJGNvbGxhcHNpYmxlLmlzKCd0YWJsZScpKSB7XG5cdFx0Ly8g5a+55LqOIHRhYmxlIOWvueixoe+8jOWwneivlea3u+WKoOWIsCBjYXB0aW9uIOS4re+8jOiLpSBjYXB0aW9uIOS4jeWtmOWcqO+8jOWImea3u+WKoOWIsOesrOS4gOihjOeahOacgOWQjuS4gOWIl++8jOW5tuWwhuesrOS4gOihjOiuvuS4uuWni+e7iOaYvuekuuOAglxuXHRcdGNvbnN0ICRjYXB0aW9uOiBKUXVlcnkgPSAkY29sbGFwc2libGUuY2hpbGRyZW4oJ2NhcHRpb24nKTtcblx0XHRpZiAoJGNhcHRpb24ubGVuZ3RoKSB7XG5cdFx0XHQvLyDmnIljYXB0aW9u55qE5oOF5Ya1XG5cdFx0XHQkY2FwdGlvbi5maXJzdCgpLmFwcGVuZCgkdG9nZ2xlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0ICR0cm93czogSlF1ZXJ5PEhUTUxUYWJsZVJvd0VsZW1lbnQ+ID0gJGNvbGxhcHNpYmxlLmNoaWxkcmVuKCkuY2hpbGRyZW4oJ3RyJyk7XG5cdFx0XHQkdHJvd3MuZmlyc3QoKS5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKS5jaGlsZHJlbigpLmxhc3QoKS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyDlsJ3or5Xmn6Xmib7luKbmnIkgY29sbGFwc2libGUtYWx3YXlzLXNob3cg57G755qE5a2Q5YWD57Sg77yM6Iul5a2Y5Zyo5YiZ5bCG5oqY5Y+g5oyJ6ZKu5re75Yqg6Iez5YW25Lit44CCXG5cdFx0Ly8g5ZCm5YiZ77yM5re75Yqg6Iez5pW05Liq5Y+v5oqY5Y+g5YWD57Sg55qE5pyA5YmN6Z2i44CCXG5cdFx0Y29uc3QgJHRvVG9nZ2xlOiBKUXVlcnkgPSAkY29sbGFwc2libGUuY2hpbGRyZW4oJy5jb2xsYXBzaWJsZS1hbHdheXMtc2hvdycpO1xuXHRcdGlmICgkdG9Ub2dnbGUubGVuZ3RoKSB7XG5cdFx0XHQkdG9Ub2dnbGUuZmlyc3QoKS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkY29sbGFwc2libGUucHJlcGVuZCgkdG9nZ2xlcik7XG5cdFx0XHQkdG9nZ2xlci5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkVG9nZ2xlcn07XG4iLCAiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1jb2xsYXBzaWJsZSc7XG5jb25zdCBDTEFTU19OQU1FX1RPR0dMRVI6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LXRvZ2dsZXJgO1xuXG5leHBvcnQge0NMQVNTX05BTUVfVE9HR0xFUn07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FX1RPR0dMRVJ9IGZyb20gJy4uL2NvbnN0YW50JztcblxuY29uc3QgZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCA9ICgkY29sbGFwc2libGU6IEpRdWVyeSwgaGlkZVRleHQ6IHN0cmluZywgc2hvd1RleHQ6IHN0cmluZyk6IEpRdWVyeSA9PiB7XG5cdGNvbnN0ICR0b2dnbGVyTGluazogSlF1ZXJ5ID0gJCgnPGE+JykuYXR0cigncm9sZScsICdidXR0b24nKS5hdHRyKCd0YWJpbmRleCcsICcwJyk7XG5cdC8vIFNldCB0aGUgdGV4dCBiYWNrIHRvIGhpZGUgaWYgaXQncyBub3QgY29sbGFwc2VkIHRvIGJlZ2luIHdpdGhcblx0aWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2VkJykpIHtcblx0XHQkdG9nZ2xlckxpbmsudGV4dChzaG93VGV4dCk7XG5cdH0gZWxzZSB7XG5cdFx0JHRvZ2dsZXJMaW5rLnRleHQoaGlkZVRleHQpO1xuXHR9XG5cblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0Y29uc3QgJHRvZ2dsZXI6IEpRdWVyeSA9ICQoJzxzcGFuPicpLmFkZENsYXNzKGAke0NMQVNTX05BTUVfVE9HR0xFUn0gbm9wcmludGApLmFwcGVuZCgnWycsICR0b2dnbGVyTGluaywgJ10nKTtcblxuXHRyZXR1cm4gJHRvZ2dsZXI7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVG9nZ2xlckVsZW1lbnR9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDb2xsYXBzZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdjb2xsYXBzZScsXG5cdFx0XHRqYTogJ+aKmOOCiueVs+OBvycsXG5cdFx0XHQnemgtaGFucyc6ICfmipjlj6AnLFxuXHRcdFx0J3poLWhhbnQnOiAn5oqY55aKJyxcblx0XHR9KSxcblx0XHRFeHBhbmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZXhwYW5kJyxcblx0XHRcdGphOiAn5bGV6ZaLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WxleW8gCcsXG5cdFx0XHQnemgtaGFudCc6ICflsZXplosnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL2FkZExpc3RlbmVyJztcbmltcG9ydCB7YWRkVG9nZ2xlcn0gZnJvbSAnLi9hZGRUb2dnbGVyJztcbmltcG9ydCB7Z2VuZXJhdGVUb2dnbGVyRWxlbWVudH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlVG9nZ2xlckVsZW1lbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtoaWRlRWxlbWVudH0gZnJvbSAnLi91dGlsL2hpZGVFbGVtZW50JztcblxuY29uc3QgbWFrZUNvbGxhcHNpYmxlID0gKCRjb2xsYXBzaWJsZXM6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbGxhcHNpYmxlcykge1xuXHRcdGNvbnN0ICRjb2xsYXBzaWJsZTogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRpZiAoJGNvbGxhcHNpYmxlLmRhdGEoJ21hZGUtY29sbGFwc2libGUnKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaGlkZVRleHQ6IHN0cmluZyA9ICgkY29sbGFwc2libGUuZGF0YSgnY29sbGFwc2V0ZXh0JykgYXMgc3RyaW5nKSB8fCBnZXRNZXNzYWdlKCdDb2xsYXBzZScpO1xuXHRcdGNvbnN0IHNob3dUZXh0OiBzdHJpbmcgPSAoJGNvbGxhcHNpYmxlLmRhdGEoJ2V4cGFuZHRleHQnKSBhcyBzdHJpbmcpIHx8IGdldE1lc3NhZ2UoJ0V4cGFuZCcpO1xuXG5cdFx0Y29uc3QgJHRvZ2dsZXI6IEpRdWVyeSA9IGdlbmVyYXRlVG9nZ2xlckVsZW1lbnQoJGNvbGxhcHNpYmxlLCBoaWRlVGV4dCwgc2hvd1RleHQpO1xuXHRcdGNvbnN0ICR0b2dnbGVyTGluazogSlF1ZXJ5ID0gJHRvZ2dsZXIuZmluZCgnYScpO1xuXG5cdFx0YWRkVG9nZ2xlcigkY29sbGFwc2libGUsICR0b2dnbGVyKTtcblxuXHRcdC8vIOWIneWni+WMlumakOiXj+aJgOacieWFg+e0oO+8jOivpei/h+eoi+ayoeacieWKqOeUu+OAglxuXHRcdGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKSB7XG5cdFx0XHRoaWRlRWxlbWVudCgkY29sbGFwc2libGUsIDApO1xuXHRcdH1cblxuXHRcdGFkZExpc3RlbmVyKCRjb2xsYXBzaWJsZSwgJHRvZ2dsZXJMaW5rLCBoaWRlVGV4dCwgc2hvd1RleHQpO1xuXG5cdFx0JGNvbGxhcHNpYmxlLmRhdGEoJ21hZGUtY29sbGFwc2libGUnLCB0cnVlKTtcblx0fVxufTtcblxuZXhwb3J0IHttYWtlQ29sbGFwc2libGV9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVUYXJnZXRFbGVtZW50c30gZnJvbSAnLi91dGlsL2dlbmVyYXRlVGFyZ2V0RWxlbWVudHMnO1xuaW1wb3J0IHttYWtlQ29sbGFwc2libGV9IGZyb20gJy4vbWFrZUNvbGxhcHNpYmxlJztcblxuY29uc3QgYWRkSG9vayA9ICgpOiB2b2lkID0+IHtcblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCgoJGNvbnRlbnQpOiB2b2lkID0+IHtcblx0XHRjb25zdCAkY29sbGFwc2libGVzOiBKUXVlcnkgPSBnZW5lcmF0ZVRhcmdldEVsZW1lbnRzKCRjb250ZW50KTtcblx0XHRpZiAoISRjb2xsYXBzaWJsZXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bWFrZUNvbGxhcHNpYmxlKCRjb2xsYXBzaWJsZXMpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkSG9va307XG4iLCAiLyohXG4gKiDkuLrlhYPntKDmt7vliqDigJzpmpDol4/igJ3lkozigJzmmL7npLrigJ3nmoTmjInpkq7jgIJcbiAqXG4gKiDnlKjms5Xor7TmmI7vvJpcbiAqXG4gKiDluKbmnIkgY29sbGFwc2libGUg57G755qE5YWD57Sg6buY6K6k5Y+v5oqY5Y+g44CCXG4gKiAtIOWvueS6jiBuYXZib3jvvIzmipjlj6Dml7bkvJrkv53nlZnmoIfpopjmoI/vvIzlubblsIbmipjlj6DmjInpkq7mt7vliqDlnKjmoIfpopjmoI/kuK3jgIJcbiAqIC0g5a+55LqOIHRhYmxl77yM5oqY5Y+g5pe25Lya5L+d55WZIGNhcHRpb24g5oiW56ys5LiA6KGM77yM5bm25bCG5oqY5Y+g5oyJ6ZKu5re75Yqg5ZyoIGNhcHRpb24g5pyr5bC+XG4gKiAgIOaIluiAheesrOS4gOihjOacgOWQjuS4gOagvOacq+WwvuOAglxuICogLSDlr7nkuo7lhbbku5blhYPntKDvvIxcbiAqICAgLSDoi6XlhbblrZDlhYPntKDmnInluKbmnIkgY29sbGFwc2libGUtYWx3YXlzLXNob3cg57G777yM6YKj5LmI6Zmk5LqG6K+l5a2Q5YWD57Sg5LmL5aSW55qE5ZCE5LiqXG4gKiAgIOWtkOWFg+e0oOmDveS8mumaj+aKmOWPoOmakOiXj++8jOS4lOaKmOWPoOaMiemSrua3u+WKoOWcqOivpeWtkOWFg+e0oOacq+WwvuOAglxuICogICAtIOiLpeayoeacieWtkOWFg+e0oOW4puaciSBjb2xsYXBzaWJsZS1hbHdheXMtc2hvdyDnsbvvvIzpgqPkuYjmiYDmnInlrZDlhYPntKDpg73kvJrooqvmipjlj6DvvIxcbiAqICAg5oqY5Y+g5oyJ6ZKu5re75Yqg5Zyo5pW05LiqIGNvbGxhcHNpYmxlIOWFg+e0oOeahOW8gOWktO+8jOS4lOivpeaMiemSruS4jeS8mumaj+aKmOWPoOmakOiXj+OAglxuICogICAtIOiLpeWtkOWFg+e0oOW4puaciSBjb2xsYXBzaWJsZS1jYXNjYWRlIOexu++8jOmCo+S5iOW9k+aKmOWPoOaXtu+8jOivpeWFg+e0oOiHqui6q+S4jeaYr+makOiXj++8jFxuICogICDogIzmmK/pmpDol4/lhbbmiYDmnInnmoTlrZDlhYPntKDvvIzov5nkupvlrZDlhYPntKDlkIzmoLflj6/ku6Xlj5cgY29sbGFwc2libGUtYWx3YXlzLXNob3cg5ZKMXG4gKiAgIGNvbGxhcHNpYmxlLWNhc2NhZGUg57G755qE5b2x5ZON44CCXG4gKiAgIC0g5rOo5oSP5b+F6aG75piv5a2Q5YWD57Sg77yM55u05o6l55qE5paH5pys6IqC54K55LiN5Lya6ZqP5oqY5Y+g6ZqQ6JeP77yM5L6L5aaC77yaXG4gKiAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNpYmxlXCI+MTIzPHNwYW4+NDU2PC9zcGFuPjwvZGl2PlxuICogICDmipjlj6Dml7bvvIzigJw0NTbigJ3kvJrpmo/mipjlj6DpmpDol4/vvIzkvYbigJwxMjPigJ3kuI3kvJrjgIJcbiAqIC0g6Iul5bim5pyJIGNvbGxhcHNpYmxlLXVzaW5nLXNsaWRlIOexu++8jOmCo+S5iOaKmOWPoOaXtu+8jOS9v+eUqOa7keWKqOWKqOeUu+iAjOmdnua3oeWFpea3oeWHuueahFxuICogICDliqjnlLvjgILlu7rorq7lvZPlj6rmnInkuIDkuKrlhYPntKDkvJrooqvpmpDol4/ml7bvvIzmiY3liqDmraTnsbvjgIJcbiAqICAgLSDluKbmnIkgY29sbGFwc2libGUtdXNpbmctc2xpZGUg57G755qE5YWD57Sg5Lya6Ieq5Yqo5bim5pyJIGNvbGxhcHNpYmxlIOexu+OAglxuICogLSDoi6XluKbmnIkgY29sbGFwc2libGUtbmV4dCDnsbvvvIzpgqPkuYjlhbbmipjlj6DnmoTkuI3mmK/lhbboh6rouqvnmoTlrZDlhYPntKDvvIzogIzmmK/mipjlj6DntKfpmo9cbiAqICAg5YW25ZCO55qE5LiA5Liq5YWD57Sg44CCXG4gKiAgIC0g6L+Z56eN5oOF5Ya15LiL77yM5oqY5Y+g5oyJ6ZKu6buY6K6k6ZmE5Zyo6K+lIGNvbGxhcHNpYmxlLW5leHQg5YWD57Sg55qE5pyr5bC+44CCXG4gKiAgIC0g5bim5pyJIGNvbGxhcHNpYmxlLW5leHQg57G755qE5YWD57Sg5Lya6Ieq5Yqo5bim5pyJIGNvbGxhcHNpYmxlIOexu+OAglxuICogLSBkYXRhLWNvbGxhcHNlLWR1cmF0aW9uIOWxnuaAp+WPr+S7peiuvue9ruaKmOWPoOWKqOeUu+eahOaXtumVv++8jOm7mOiupOS4uiAyMDAg5q+r56eS44CCXG4gKiAtIOW4puaciSBjb2xsYXBzZWQg57G755qE5YWD57Sg5Yid5aeL5bCx5piv5bey5oqY5Y+g55qE44CCXG4gKiAtIGRhdGEtZXhwYW5kdGV4dCDlkowgZGF0YS1jb2xsYXBzZXRleHQg5Y+v55So5LqO5o6n5Yi25oqY5Y+g5oyJ6ZKu55qE5pi+56S65paH5a2X44CC5LiN5pSv5oyBXG4gKiAgIOe5geeugOi9rOaNou+8jOS9huaYr+WFtum7mOiupOWAvOaYr+WPr+S7peato+W4uOagueaNrueVjOmdouivreiogOe5geeugOi9rOaNoueahOOAglxuICovXG5pbXBvcnQge2FkZEhvb2t9IGZyb20gJy4vbW9kdWxlcy9hZGRIb29rJztcblxuYWRkSG9vaygpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEseUJBQTBCQyxjQUE2QjtBQUFBLE1BQUFDLFlBQUFDLDJCQUN0Q0YsU0FBU0csS0FDOUIsZ0ZBQ0QsQ0FBQSxHQUFBQztBQUFBLE1BQUE7QUFGQSxTQUFBSCxVQUFBSSxFQUFBLEdBQUEsRUFBQUQsUUFBQUgsVUFBQUssRUFBQSxHQUFBQyxRQUVHO0FBQUEsWUFGUUMsVUFBQUosTUFBQUs7QUFHVixZQUFNQyxVQUFrQkMsRUFBRUgsT0FBTyxFQUFFSSxPQUFPO0FBQUEsVUFBQUMsYUFBQVgsMkJBQ2xCTSxRQUFRTSxTQUFBLEdBQUFDO0FBQUEsVUFBQTtBQUFoQyxhQUFBRixXQUFBUixFQUFBLEdBQUEsRUFBQVUsU0FBQUYsV0FBQVAsRUFBQSxHQUFBQyxRQUEyQztBQUFBLGdCQUFoQ1MsWUFBQUQsT0FBQU47QUFDVixjQUFJTyxVQUFVQyxNQUFNLEdBQUcsRUFBRSxNQUFNLHNCQUFzQjtBQUtwRFAsb0JBQVFRLFNBQVNGLFVBQVVHLFFBQVEsWUFBWSxFQUFFLENBQUM7VUFDbkQ7UUFDRDtNQUFBLFNBQUFDLEtBQUE7QUFBQVAsbUJBQUFRLEVB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QUFDO01BQzVCO0FBRUEwQixrQkFBWTFCLGNBQWMyQixjQUFjQyxVQUFVQyxRQUFRO0FBRTFEN0IsbUJBQWF3QixLQUFLLG9CQUFvQixJQUFJO0lBQzNDO0VBQUEsU0FBQS9CLEtBQUE7QUFBQXdFLGVBQUF2RSxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBd0UsZUFBQXRFLEVBQUE7RUFBQTtBQUNEOztBQzNCQSxJQUFNd0UsVUFBVUEsTUFBWTtBQUMzQkMsS0FBR0MsS0FBSyxrQkFBa0IsRUFBRUMsSUFBS2pHLGNBQW1CO0FBQ25ELFVBQU11QixnQkFBd0J4Qix1QkFBdUJDLFFBQVE7QUFDN0QsUUFBSSxDQUFDdUIsY0FBYzZDLFFBQVE7QUFDMUI7SUFDRDtBQUVBdUIsb0JBQWdCcEUsYUFBYTtFQUM5QixDQUFDO0FBQ0Y7O0FDWkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBdUUsUUFBUTsiLAogICJuYW1lcyI6IFsiZ2VuZXJhdGVUYXJnZXRFbGVtZW50cyIsICIkY29udGVudCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZmluZCIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgIiRwYXJlbnQiLCAiJCIsICJwYXJlbnQiLCAiX2l0ZXJhdG9yMiIsICJjbGFzc0xpc3QiLCAiX3N0ZXAyIiwgImNsYXNzTmFtZSIsICJzbGljZSIsICJhZGRDbGFzcyIsICJyZXBsYWNlIiwgImVyciIsICJlIiwgImYiLCAiJGNvbGxhcHNpYmxlcyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImhpZGVFbGVtZW50IiwgIiRjb2xsYXBzaWJsZSIsICJ0aW1lIiwgInVzZVNsaWRlIiwgImhhc0NsYXNzIiwgIiRlbGVtZW50IiwgIm5leHQiLCAic2xpZGVVcCIsICJmYWRlT3V0IiwgIiRlbGVtZW50cyIsICJpcyIsICJjaGlsZHJlbiIsICJjb250ZW50cyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJzaG93RWxlbWVudCIsICJzbGlkZURvd24iLCAiZmFkZUluIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInRvZ2dsZUVsZW1lbnQiLCAiY29sbGFwc2VkIiwgImR1cmF0aW9uIiwgIk51bWJlciIsICJwYXJzZUludCIsICJkYXRhIiwgInJlbW92ZUNsYXNzIiwgImFkZExpc3RlbmVyIiwgIiR0b2dnbGVyTGluayIsICJoaWRlVGV4dCIsICJzaG93VGV4dCIsICJldmVudExpc3RlbmVyIiwgImV2ZW50IiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAicHJldmVudERlZmF1bHQiLCAidGV4dCIsICJvbiIsICJhZGRUb2dnbGVyIiwgIiR0b2dnbGVyIiwgIiRhcHBlbmRIZXJlIiwgIm5vdCIsICJhcHBlbmQiLCAibGVuZ3RoIiwgInBhcmVudHNVbnRpbCIsICJmaXJzdCIsICIkY2FwdGlvbiIsICIkdHJvd3MiLCAibGFzdCIsICIkdG9Ub2dnbGUiLCAicHJlcGVuZCIsICJDTEFTU19OQU1FIiwgIkNMQVNTX05BTUVfVE9HR0xFUiIsICJjb25jYXQiLCAiZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCIsICJhdHRyIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ29sbGFwc2UiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiRXhwYW5kIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJtYWtlQ29sbGFwc2libGUiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiYWRkSG9vayIsICJtdyIsICJob29rIiwgImFkZCJdCn0K

})();

/* </nowiki> */
