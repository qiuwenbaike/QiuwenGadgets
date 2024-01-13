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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVRhcmdldEVsZW1lbnRzLnRzIiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL3V0aWwvaGlkZUVsZW1lbnQudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvdXRpbC9zaG93RWxlbWVudC50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy91dGlsL3RvZ2dsZUVsZW1lbnQudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvYWRkVG9nZ2xlci50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy91dGlsL2dlbmVyYXRlVG9nZ2xlckVsZW1lbnQudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy9tYWtlQ29sbGFwc2libGUudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvYWRkSG9vay50cyIsICJzcmMvQ29sbGFwc2libGUvQ29sbGFwc2libGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IGdlbmVyYXRlVGFyZ2V0RWxlbWVudHMgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IEpRdWVyeSA9PiB7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kKFxuXHRcdCcucGFyZW50LWNvbGxhcHNpYmxlLCAucGFyZW50LWNvbGxhcHNpYmxlLXVzaW5nLXNsaWRlLCAucGFyZW50LWNvbGxhcHNpYmxlLW5leHQnXG5cdCkpIHtcblx0XHRjb25zdCAkcGFyZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpLnBhcmVudCgpO1xuXHRcdGZvciAoY29uc3QgY2xhc3NOYW1lIG9mIGVsZW1lbnQuY2xhc3NMaXN0KSB7XG5cdFx0XHRpZiAoY2xhc3NOYW1lLnNsaWNlKDAsIDE4KSA9PT0gJ3BhcmVudC1jb2xsYXBzaWJsZScpIHtcblx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdC8vICogY29sbGFwc2libGVcblx0XHRcdFx0Ly8gKiBjb2xsYXBzaWJsZS11c2luZy1zbGlkZVxuXHRcdFx0XHQvLyAqIGNvbGxhcHNpYmxlLW5leHRcblx0XHRcdFx0JHBhcmVudC5hZGRDbGFzcyhjbGFzc05hbWUucmVwbGFjZSgvXnBhcmVudC0vLCAnJykpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCRjb250ZW50LmZpbmQoJy5jb2xsYXBzaWJsZS11c2luZy1zbGlkZSwgLmNvbGxhcHNpYmxlLW5leHQnKS5hZGRDbGFzcygnY29sbGFwc2libGUnKTtcblxuXHRjb25zdCAkY29sbGFwc2libGVzOiBKUXVlcnkgPSAkY29udGVudC5maW5kKCcuY29sbGFwc2libGUnKTtcblxuXHRyZXR1cm4gJGNvbGxhcHNpYmxlcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVUYXJnZXRFbGVtZW50c307XG4iLCAiaW1wb3J0IHtjaGVja0ExMXlDb25maXJtS2V5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt0b2dnbGVFbGVtZW50fSBmcm9tICcuL3V0aWwvdG9nZ2xlRWxlbWVudCc7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKCRjb2xsYXBzaWJsZTogSlF1ZXJ5LCAkdG9nZ2xlckxpbms6IEpRdWVyeSwgaGlkZVRleHQ6IHN0cmluZywgc2hvd1RleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCBldmVudExpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHRvZ2dsZUVsZW1lbnQoJGNvbGxhcHNpYmxlKTtcblxuXHRcdGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKSB7XG5cdFx0XHQkdG9nZ2xlckxpbmsudGV4dChzaG93VGV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCR0b2dnbGVyTGluay50ZXh0KGhpZGVUZXh0KTtcblx0XHR9XG5cdH07XG5cblx0JHRvZ2dsZXJMaW5rLm9uKCdjbGljaycsIGV2ZW50TGlzdGVuZXIpO1xuXHQkdG9nZ2xlckxpbmsub24oJ2tleWRvd24nLCBldmVudExpc3RlbmVyKTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgIi8vIOmakOiXj+afkOS4quWPr+aKmOWPoOeahOWFg+e0oOOAglxuY29uc3QgaGlkZUVsZW1lbnQgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnksIHRpbWU6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRjb25zdCB1c2VTbGlkZTogYm9vbGVhbiA9ICRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtdXNpbmctc2xpZGUnKTtcblx0aWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtbmV4dCcpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5uZXh0KCk7XG5cblx0XHRpZiAodXNlU2xpZGUpIHtcblx0XHRcdCRlbGVtZW50LnNsaWRlVXAodGltZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRlbGVtZW50LmZhZGVPdXQodGltZSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnN0ICRlbGVtZW50czogSlF1ZXJ5ID0gJGNvbGxhcHNpYmxlLmlzKCd0YWJsZScpXG5cdFx0XHQ/ICRjb2xsYXBzaWJsZS5jaGlsZHJlbigpLmNoaWxkcmVuKCd0cicpXG5cdFx0XHQ6ICgkY29sbGFwc2libGUuY29udGVudHMoKSBhcyBKUXVlcnkpO1xuXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRlbGVtZW50cykge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHRpZiAoJGVsZW1lbnQuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLWNhc2NhZGUnKSkge1xuXHRcdFx0XHRoaWRlRWxlbWVudCgkZWxlbWVudCwgdGltZSk7XG5cdFx0XHR9IGVsc2UgaWYgKCEkZWxlbWVudC5oYXNDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKSkge1xuXHRcdFx0XHRpZiAodXNlU2xpZGUpIHtcblx0XHRcdFx0XHQkZWxlbWVudC5zbGlkZVVwKHRpbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbGVtZW50LmZhZGVPdXQodGltZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7aGlkZUVsZW1lbnR9O1xuIiwgIi8vIOaYvuekuuafkOS4quWPr+aKmOWPoOeahOWFg+e0oOOAglxuY29uc3Qgc2hvd0VsZW1lbnQgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnksIHRpbWU6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRjb25zdCB1c2VTbGlkZTogYm9vbGVhbiA9ICRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtdXNpbmctc2xpZGUnKTtcblx0aWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtbmV4dCcpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5uZXh0KCk7XG5cblx0XHRpZiAodXNlU2xpZGUpIHtcblx0XHRcdCRlbGVtZW50LnNsaWRlRG93bih0aW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGVsZW1lbnQuZmFkZUluKHRpbWUpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zdCAkZWxlbWVudHM6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5pcygndGFibGUnKVxuXHRcdFx0PyAkY29sbGFwc2libGUuY2hpbGRyZW4oKS5jaGlsZHJlbigndHInKVxuXHRcdFx0OiAoJGNvbGxhcHNpYmxlLmNvbnRlbnRzKCkgYXMgSlF1ZXJ5KTtcblxuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkZWxlbWVudHMpIHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0aWYgKCRlbGVtZW50Lmhhc0NsYXNzKCdjb2xsYXBzaWJsZS1jYXNjYWRlJykpIHtcblx0XHRcdFx0c2hvd0VsZW1lbnQoJGVsZW1lbnQsIHRpbWUpO1xuXHRcdFx0fSBlbHNlIGlmICghJGVsZW1lbnQuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLWFsd2F5cy1zaG93JykpIHtcblx0XHRcdFx0aWYgKHVzZVNsaWRlKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuc2xpZGVEb3duKHRpbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbGVtZW50LmZhZGVJbih0aW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtzaG93RWxlbWVudH07XG4iLCAiaW1wb3J0IHtoaWRlRWxlbWVudH0gZnJvbSAnLi9oaWRlRWxlbWVudCc7XG5pbXBvcnQge3Nob3dFbGVtZW50fSBmcm9tICcuL3Nob3dFbGVtZW50JztcblxuY29uc3QgdG9nZ2xlRWxlbWVudCA9ICgkY29sbGFwc2libGU6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCBjb2xsYXBzZWQ6IGJvb2xlYW4gPSAkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuXHRjb25zdCBkdXJhdGlvbjogbnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KCRjb2xsYXBzaWJsZS5kYXRhKCdjb2xsYXBzZS1kdXJhdGlvbicpIGFzIHN0cmluZywgMTApIHx8IDIwMDtcblxuXHRpZiAoY29sbGFwc2VkKSB7XG5cdFx0c2hvd0VsZW1lbnQoJGNvbGxhcHNpYmxlLCBkdXJhdGlvbik7XG5cdFx0JGNvbGxhcHNpYmxlLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcblx0fSBlbHNlIHtcblx0XHRoaWRlRWxlbWVudCgkY29sbGFwc2libGUsIGR1cmF0aW9uKTtcblx0XHQkY29sbGFwc2libGUuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuXHR9XG59O1xuXG5leHBvcnQge3RvZ2dsZUVsZW1lbnR9O1xuIiwgImNvbnN0IGFkZFRvZ2dsZXIgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnksICR0b2dnbGVyOiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3QgJGFwcGVuZEhlcmU6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZVxuXHRcdC5maW5kKCcuY29sbGFwc2libGUtdG9nZ2xlLWFwcGVuZC1oZXJlJylcblx0XHQubm90KCcuY29sbGFwc2libGUtdG9nZ2xlLWFwcGVuZGVkJyk7XG5cblx0aWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2libGUtbmV4dCcpKSB7XG5cdFx0Ly8g6Iul5pyJIGNvbGxhcHNpYmxlLW5leHQg57G777yM6YKj5LmI6KKr5oqY5Y+g55qE5YWD57Sg5LiN5Zyo6K+l5YWD57Sg5YaF77yM5q2k5pe255u05o6l5bCG5oqY5Y+g5oyJ6ZKu5re75Yqg5Zyo5pyr5bC+44CCXG5cdFx0JGNvbGxhcHNpYmxlLmFwcGVuZCgkdG9nZ2xlcik7XG5cdH0gZWxzZSBpZiAoJGFwcGVuZEhlcmUubGVuZ3RoKSB7XG5cdFx0Ly8g5bim5pyJIGNvbGxhcHNpYmxlLXRvZ2dsZS1hcHBlbmQtaGVyZSDnsbvnmoTlhYPntKDvvIzoi6XlrZjlnKjvvIzliJnml6Dorrrlj6/mipjlj6DlhYPntKDmmK/ku4DkuYjvvIzliJnlvLrliLblsIbmipjlj6DmjInpkq7mt7vliqDoh7Por6XlhYPntKDkuK3jgIJcblx0XHQkYXBwZW5kSGVyZS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHRcdCRhcHBlbmRIZXJlLmFkZENsYXNzKCdjb2xsYXBzaWJsZS10b2dnbGUtYXBwZW5kZWQnKTtcblx0XHQkYXBwZW5kSGVyZS5wYXJlbnRzVW50aWwoJGNvbGxhcHNpYmxlKS5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKTtcblx0fSBlbHNlIGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ25hdmJveCcpKSB7XG5cdFx0Ly8gbmF2Ym94IOWFg+e0oOeahOaKmOWPoOaMiemSrua3u+WKoOiHsyBuYXZib3gtdGl0bGUg5Lit77yM5LiU6K+lIG5hdmJveC10aXRsZSDkvJrpgb/lhY3ooqvmipjlj6DlvbHlk43liLDjgIJcblx0XHQkY29sbGFwc2libGUuY2hpbGRyZW4oJy5uYXZib3gtdGl0bGUnKS5maXJzdCgpLmFkZENsYXNzKCdjb2xsYXBzaWJsZS1hbHdheXMtc2hvdycpLmFwcGVuZCgkdG9nZ2xlcik7XG5cdH0gZWxzZSBpZiAoJGNvbGxhcHNpYmxlLmlzKCd0YWJsZScpKSB7XG5cdFx0Ly8g5a+55LqOIHRhYmxlIOWvueixoe+8jOWwneivlea3u+WKoOWIsCBjYXB0aW9uIOS4re+8jOiLpSBjYXB0aW9uIOS4jeWtmOWcqO+8jOWImea3u+WKoOWIsOesrOS4gOihjOeahOacgOWQjuS4gOWIl++8jOW5tuWwhuesrOS4gOihjOiuvuS4uuWni+e7iOaYvuekuuOAglxuXHRcdGNvbnN0ICRjYXB0aW9uOiBKUXVlcnkgPSAkY29sbGFwc2libGUuY2hpbGRyZW4oJ2NhcHRpb24nKTtcblx0XHRpZiAoJGNhcHRpb24ubGVuZ3RoKSB7XG5cdFx0XHQvLyDmnIljYXB0aW9u55qE5oOF5Ya1XG5cdFx0XHQkY2FwdGlvbi5maXJzdCgpLmFwcGVuZCgkdG9nZ2xlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0ICR0cm93czogSlF1ZXJ5PEhUTUxUYWJsZVJvd0VsZW1lbnQ+ID0gJGNvbGxhcHNpYmxlLmNoaWxkcmVuKCkuY2hpbGRyZW4oJ3RyJyk7XG5cdFx0XHQkdHJvd3MuZmlyc3QoKS5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKS5jaGlsZHJlbigpLmxhc3QoKS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyDlsJ3or5Xmn6Xmib7luKbmnIkgY29sbGFwc2libGUtYWx3YXlzLXNob3cg57G755qE5a2Q5YWD57Sg77yM6Iul5a2Y5Zyo5YiZ5bCG5oqY5Y+g5oyJ6ZKu5re75Yqg6Iez5YW25Lit44CCXG5cdFx0Ly8g5ZCm5YiZ77yM5re75Yqg6Iez5pW05Liq5Y+v5oqY5Y+g5YWD57Sg55qE5pyA5YmN6Z2i44CCXG5cdFx0Y29uc3QgJHRvVG9nZ2xlOiBKUXVlcnkgPSAkY29sbGFwc2libGUuY2hpbGRyZW4oJy5jb2xsYXBzaWJsZS1hbHdheXMtc2hvdycpO1xuXHRcdGlmICgkdG9Ub2dnbGUubGVuZ3RoKSB7XG5cdFx0XHQkdG9Ub2dnbGUuZmlyc3QoKS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkY29sbGFwc2libGUucHJlcGVuZCgkdG9nZ2xlcik7XG5cdFx0XHQkdG9nZ2xlci5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkVG9nZ2xlcn07XG4iLCAiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1jb2xsYXBzaWJsZSc7XG5jb25zdCBDTEFTU19OQU1FX1RPR0dMRVI6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LXRvZ2dsZXJgO1xuXG5leHBvcnQge0NMQVNTX05BTUVfVE9HR0xFUn07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FX1RPR0dMRVJ9IGZyb20gJy4uL2NvbnN0YW50JztcblxuY29uc3QgZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCA9ICgkY29sbGFwc2libGU6IEpRdWVyeSwgaGlkZVRleHQ6IHN0cmluZywgc2hvd1RleHQ6IHN0cmluZyk6IEpRdWVyeSA9PiB7XG5cdGNvbnN0ICR0b2dnbGVyTGluazogSlF1ZXJ5ID0gJCgnPGE+JykuYXR0cigncm9sZScsICdidXR0b24nKS5hdHRyKCd0YWJpbmRleCcsICcwJyk7XG5cdC8vIFNldCB0aGUgdGV4dCBiYWNrIHRvIGhpZGUgaWYgaXQncyBub3QgY29sbGFwc2VkIHRvIGJlZ2luIHdpdGhcblx0aWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2VkJykpIHtcblx0XHQkdG9nZ2xlckxpbmsudGV4dChzaG93VGV4dCk7XG5cdH0gZWxzZSB7XG5cdFx0JHRvZ2dsZXJMaW5rLnRleHQoaGlkZVRleHQpO1xuXHR9XG5cblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0Y29uc3QgJHRvZ2dsZXI6IEpRdWVyeSA9ICQoJzxzcGFuPicpLmFkZENsYXNzKGAke0NMQVNTX05BTUVfVE9HR0xFUn0gbm9wcmludGApLmFwcGVuZCgnWycsICR0b2dnbGVyTGluaywgJ10nKTtcblxuXHRyZXR1cm4gJHRvZ2dsZXI7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVG9nZ2xlckVsZW1lbnR9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDb2xsYXBzZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdjb2xsYXBzZScsXG5cdFx0XHRqYTogJ+aKmOOCiueVs+OBvycsXG5cdFx0XHQnemgtaGFucyc6ICfmipjlj6AnLFxuXHRcdFx0J3poLWhhbnQnOiAn5oqY55aKJyxcblx0XHR9KSxcblx0XHRFeHBhbmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZXhwYW5kJyxcblx0XHRcdGphOiAn5bGV6ZaLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WxleW8gCcsXG5cdFx0XHQnemgtaGFudCc6ICflsZXplosnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL2FkZExpc3RlbmVyJztcbmltcG9ydCB7YWRkVG9nZ2xlcn0gZnJvbSAnLi9hZGRUb2dnbGVyJztcbmltcG9ydCB7Z2VuZXJhdGVUb2dnbGVyRWxlbWVudH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlVG9nZ2xlckVsZW1lbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtoaWRlRWxlbWVudH0gZnJvbSAnLi91dGlsL2hpZGVFbGVtZW50JztcblxuY29uc3QgbWFrZUNvbGxhcHNpYmxlID0gKCRjb2xsYXBzaWJsZXM6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbGxhcHNpYmxlcykge1xuXHRcdGNvbnN0ICRjb2xsYXBzaWJsZTogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRpZiAoJGNvbGxhcHNpYmxlLmRhdGEoJ21hZGUtY29sbGFwc2libGUnKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaGlkZVRleHQ6IHN0cmluZyA9ICgkY29sbGFwc2libGUuZGF0YSgnY29sbGFwc2V0ZXh0JykgYXMgc3RyaW5nKSB8fCBnZXRNZXNzYWdlKCdDb2xsYXBzZScpO1xuXHRcdGNvbnN0IHNob3dUZXh0OiBzdHJpbmcgPSAoJGNvbGxhcHNpYmxlLmRhdGEoJ2V4cGFuZHRleHQnKSBhcyBzdHJpbmcpIHx8IGdldE1lc3NhZ2UoJ0V4cGFuZCcpO1xuXG5cdFx0Y29uc3QgJHRvZ2dsZXI6IEpRdWVyeSA9IGdlbmVyYXRlVG9nZ2xlckVsZW1lbnQoJGNvbGxhcHNpYmxlLCBoaWRlVGV4dCwgc2hvd1RleHQpO1xuXHRcdGNvbnN0ICR0b2dnbGVyTGluazogSlF1ZXJ5ID0gJHRvZ2dsZXIuZmluZCgnYScpO1xuXG5cdFx0YWRkVG9nZ2xlcigkY29sbGFwc2libGUsICR0b2dnbGVyKTtcblxuXHRcdC8vIOWIneWni+WMlumakOiXj+aJgOacieWFg+e0oO+8jOivpei/h+eoi+ayoeacieWKqOeUu+OAglxuXHRcdGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKSB7XG5cdFx0XHRoaWRlRWxlbWVudCgkY29sbGFwc2libGUsIDApO1xuXHRcdH1cblxuXHRcdGFkZExpc3RlbmVyKCRjb2xsYXBzaWJsZSwgJHRvZ2dsZXJMaW5rLCBoaWRlVGV4dCwgc2hvd1RleHQpO1xuXG5cdFx0JGNvbGxhcHNpYmxlLmRhdGEoJ21hZGUtY29sbGFwc2libGUnLCB0cnVlKTtcblx0fVxufTtcblxuZXhwb3J0IHttYWtlQ29sbGFwc2libGV9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVUYXJnZXRFbGVtZW50c30gZnJvbSAnLi91dGlsL2dlbmVyYXRlVGFyZ2V0RWxlbWVudHMnO1xuaW1wb3J0IHttYWtlQ29sbGFwc2libGV9IGZyb20gJy4vbWFrZUNvbGxhcHNpYmxlJztcblxuY29uc3QgYWRkSG9vayA9ICgpOiB2b2lkID0+IHtcblx0bXcuaG9vazxKUXVlcnlbXT4oJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGNvbGxhcHNpYmxlczogSlF1ZXJ5ID0gZ2VuZXJhdGVUYXJnZXRFbGVtZW50cygkY29udGVudCk7XG5cdFx0aWYgKCEkY29sbGFwc2libGVzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG1ha2VDb2xsYXBzaWJsZSgkY29sbGFwc2libGVzKTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEhvb2t9O1xuIiwgIi8qIVxuICog5Li65YWD57Sg5re75Yqg4oCc6ZqQ6JeP4oCd5ZKM4oCc5pi+56S64oCd55qE5oyJ6ZKu44CCXG4gKlxuICog55So5rOV6K+05piO77yaXG4gKlxuICog5bim5pyJIGNvbGxhcHNpYmxlIOexu+eahOWFg+e0oOm7mOiupOWPr+aKmOWPoOOAglxuICogLSDlr7nkuo4gbmF2Ym9477yM5oqY5Y+g5pe25Lya5L+d55WZ5qCH6aKY5qCP77yM5bm25bCG5oqY5Y+g5oyJ6ZKu5re75Yqg5Zyo5qCH6aKY5qCP5Lit44CCXG4gKiAtIOWvueS6jiB0YWJsZe+8jOaKmOWPoOaXtuS8muS/neeVmSBjYXB0aW9uIOaIluesrOS4gOihjO+8jOW5tuWwhuaKmOWPoOaMiemSrua3u+WKoOWcqCBjYXB0aW9uIOacq+WwvlxuICogICDmiJbogIXnrKzkuIDooYzmnIDlkI7kuIDmoLzmnKvlsL7jgIJcbiAqIC0g5a+55LqO5YW25LuW5YWD57Sg77yMXG4gKiAgIC0g6Iul5YW25a2Q5YWD57Sg5pyJ5bim5pyJIGNvbGxhcHNpYmxlLWFsd2F5cy1zaG93IOexu++8jOmCo+S5iOmZpOS6huivpeWtkOWFg+e0oOS5i+WklueahOWQhOS4qlxuICogICDlrZDlhYPntKDpg73kvJrpmo/mipjlj6DpmpDol4/vvIzkuJTmipjlj6DmjInpkq7mt7vliqDlnKjor6XlrZDlhYPntKDmnKvlsL7jgIJcbiAqICAgLSDoi6XmsqHmnInlrZDlhYPntKDluKbmnIkgY29sbGFwc2libGUtYWx3YXlzLXNob3cg57G777yM6YKj5LmI5omA5pyJ5a2Q5YWD57Sg6YO95Lya6KKr5oqY5Y+g77yMXG4gKiAgIOaKmOWPoOaMiemSrua3u+WKoOWcqOaVtOS4qiBjb2xsYXBzaWJsZSDlhYPntKDnmoTlvIDlpLTvvIzkuJTor6XmjInpkq7kuI3kvJrpmo/mipjlj6DpmpDol4/jgIJcbiAqICAgLSDoi6XlrZDlhYPntKDluKbmnIkgY29sbGFwc2libGUtY2FzY2FkZSDnsbvvvIzpgqPkuYjlvZPmipjlj6Dml7bvvIzor6XlhYPntKDoh6rouqvkuI3mmK/pmpDol4/vvIxcbiAqICAg6ICM5piv6ZqQ6JeP5YW25omA5pyJ55qE5a2Q5YWD57Sg77yM6L+Z5Lqb5a2Q5YWD57Sg5ZCM5qC35Y+v5Lul5Y+XIGNvbGxhcHNpYmxlLWFsd2F5cy1zaG93IOWSjFxuICogICBjb2xsYXBzaWJsZS1jYXNjYWRlIOexu+eahOW9seWTjeOAglxuICogICAtIOazqOaEj+W/hemhu+aYr+WtkOWFg+e0oO+8jOebtOaOpeeahOaWh+acrOiKgueCueS4jeS8mumaj+aKmOWPoOmakOiXj++8jOS+i+Wmgu+8mlxuICogICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzaWJsZVwiPjEyMzxzcGFuPjQ1Njwvc3Bhbj48L2Rpdj5cbiAqICAg5oqY5Y+g5pe277yM4oCcNDU24oCd5Lya6ZqP5oqY5Y+g6ZqQ6JeP77yM5L2G4oCcMTIz4oCd5LiN5Lya44CCXG4gKiAtIOiLpeW4puaciSBjb2xsYXBzaWJsZS11c2luZy1zbGlkZSDnsbvvvIzpgqPkuYjmipjlj6Dml7bvvIzkvb/nlKjmu5HliqjliqjnlLvogIzpnZ7mt6HlhaXmt6Hlh7rnmoRcbiAqICAg5Yqo55S744CC5bu66K6u5b2T5Y+q5pyJ5LiA5Liq5YWD57Sg5Lya6KKr6ZqQ6JeP5pe277yM5omN5Yqg5q2k57G744CCXG4gKiAgIC0g5bim5pyJIGNvbGxhcHNpYmxlLXVzaW5nLXNsaWRlIOexu+eahOWFg+e0oOS8muiHquWKqOW4puaciSBjb2xsYXBzaWJsZSDnsbvjgIJcbiAqIC0g6Iul5bim5pyJIGNvbGxhcHNpYmxlLW5leHQg57G777yM6YKj5LmI5YW25oqY5Y+g55qE5LiN5piv5YW26Ieq6Lqr55qE5a2Q5YWD57Sg77yM6ICM5piv5oqY5Y+g57Sn6ZqPXG4gKiAgIOWFtuWQjueahOS4gOS4quWFg+e0oOOAglxuICogICAtIOi/meenjeaDheWGteS4i++8jOaKmOWPoOaMiemSrum7mOiupOmZhOWcqOivpSBjb2xsYXBzaWJsZS1uZXh0IOWFg+e0oOeahOacq+WwvuOAglxuICogICAtIOW4puaciSBjb2xsYXBzaWJsZS1uZXh0IOexu+eahOWFg+e0oOS8muiHquWKqOW4puaciSBjb2xsYXBzaWJsZSDnsbvjgIJcbiAqIC0gZGF0YS1jb2xsYXBzZS1kdXJhdGlvbiDlsZ7mgKflj6/ku6Xorr7nva7mipjlj6DliqjnlLvnmoTml7bplb/vvIzpu5jorqTkuLogMjAwIOavq+enkuOAglxuICogLSDluKbmnIkgY29sbGFwc2VkIOexu+eahOWFg+e0oOWIneWni+WwseaYr+W3suaKmOWPoOeahOOAglxuICogLSBkYXRhLWV4cGFuZHRleHQg5ZKMIGRhdGEtY29sbGFwc2V0ZXh0IOWPr+eUqOS6juaOp+WItuaKmOWPoOaMiemSrueahOaYvuekuuaWh+Wtl+OAguS4jeaUr+aMgVxuICogICDnuYHnroDovazmjaLvvIzkvYbmmK/lhbbpu5jorqTlgLzmmK/lj6/ku6XmraPluLjmoLnmja7nlYzpnaLor63oqIDnuYHnroDovazmjaLnmoTjgIJcbiAqL1xuaW1wb3J0IHthZGRIb29rfSBmcm9tICcuL21vZHVsZXMvYWRkSG9vayc7XG5cbmFkZEhvb2soKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLHlCQUEwQkMsY0FBNkI7QUFBQSxNQUFBQyxZQUFBQywyQkFDdENGLFNBQVNHLEtBQzlCLGdGQUNELENBQUEsR0FBQUM7QUFBQSxNQUFBO0FBRkEsU0FBQUgsVUFBQUksRUFBQSxHQUFBLEVBQUFELFFBQUFILFVBQUFLLEVBQUEsR0FBQUMsUUFFRztBQUFBLFlBRlFDLFVBQUFKLE1BQUFLO0FBR1YsWUFBTUMsVUFBa0JDLEVBQUVILE9BQU8sRUFBRUksT0FBTztBQUFBLFVBQUFDLGFBQUFYLDJCQUNsQk0sUUFBUU0sU0FBQSxHQUFBQztBQUFBLFVBQUE7QUFBaEMsYUFBQUYsV0FBQVIsRUFBQSxHQUFBLEVBQUFVLFNBQUFGLFdBQUFQLEVBQUEsR0FBQUMsUUFBMkM7QUFBQSxnQkFBaENTLFlBQUFELE9BQUFOO0FBQ1YsY0FBSU8sVUFBVUMsTUFBTSxHQUFHLEVBQUUsTUFBTSxzQkFBc0I7QUFLcERQLG9CQUFRUSxTQUFTRixVQUFVRyxRQUFRLFlBQVksRUFBRSxDQUFDO1VBQ25EO1FBQ0Q7TUFBQSxTQUFBQyxLQUFBO0FBQUFQ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QVlDLGNBQWMsQ0FBQztNQUM1QjtBQUVBMEIsa0JBQVkxQixjQUFjMkIsY0FBY0MsVUFBVUMsUUFBUTtBQUUxRDdCLG1CQUFhd0IsS0FBSyxvQkFBb0IsSUFBSTtJQUMzQztFQUFBLFNBQUEvQixLQUFBO0FBQUF3RSxlQUFBdkUsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQXdFLGVBQUF0RSxFQUFBO0VBQUE7QUFDRDs7QUMzQkEsSUFBTXdFLFVBQVVBLE1BQVk7QUFDM0JDLEtBQUdDLEtBQWUsa0JBQWtCLEVBQUVDLElBQUtqRyxjQUFtQjtBQUM3RCxVQUFNdUIsZ0JBQXdCeEIsdUJBQXVCQyxRQUFRO0FBQzdELFFBQUksQ0FBQ3VCLGNBQWM2QyxRQUFRO0FBQzFCO0lBQ0Q7QUFFQXVCLG9CQUFnQnBFLGFBQWE7RUFDOUIsQ0FBQztBQUNGOztBQ1pBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQXVFLFFBQVE7IiwKICAibmFtZXMiOiBbImdlbmVyYXRlVGFyZ2V0RWxlbWVudHMiLCAiJGNvbnRlbnQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImZpbmQiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkcGFyZW50IiwgIiQiLCAicGFyZW50IiwgIl9pdGVyYXRvcjIiLCAiY2xhc3NMaXN0IiwgIl9zdGVwMiIsICJjbGFzc05hbWUiLCAic2xpY2UiLCAiYWRkQ2xhc3MiLCAicmVwbGFjZSIsICJlcnIiLCAiZSIsICJmIiwgIiRjb2xsYXBzaWJsZXMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJoaWRlRWxlbWVudCIsICIkY29sbGFwc2libGUiLCAidGltZSIsICJ1c2VTbGlkZSIsICJoYXNDbGFzcyIsICIkZWxlbWVudCIsICJuZXh0IiwgInNsaWRlVXAiLCAiZmFkZU91dCIsICIkZWxlbWVudHMiLCAiaXMiLCAiY2hpbGRyZW4iLCAiY29udGVudHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAic2hvd0VsZW1lbnQiLCAic2xpZGVEb3duIiwgImZhZGVJbiIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJ0b2dnbGVFbGVtZW50IiwgImNvbGxhcHNlZCIsICJkdXJhdGlvbiIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiZGF0YSIsICJyZW1vdmVDbGFzcyIsICJhZGRMaXN0ZW5lciIsICIkdG9nZ2xlckxpbmsiLCAiaGlkZVRleHQiLCAic2hvd1RleHQiLCAiZXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgInByZXZlbnREZWZhdWx0IiwgInRleHQiLCAib24iLCAiYWRkVG9nZ2xlciIsICIkdG9nZ2xlciIsICIkYXBwZW5kSGVyZSIsICJub3QiLCAiYXBwZW5kIiwgImxlbmd0aCIsICJwYXJlbnRzVW50aWwiLCAiZmlyc3QiLCAiJGNhcHRpb24iLCAiJHRyb3dzIiwgImxhc3QiLCAiJHRvVG9nZ2xlIiwgInByZXBlbmQiLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX1RPR0dMRVIiLCAiY29uY2F0IiwgImdlbmVyYXRlVG9nZ2xlckVsZW1lbnQiLCAiYXR0ciIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNvbGxhcHNlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkV4cGFuZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibWFrZUNvbGxhcHNpYmxlIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImFkZEhvb2siLCAibXciLCAiaG9vayIsICJhZGQiXQp9Cg==

})();

/* </nowiki> */
