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
//! src/Switcher/Switcher.ts
var import_ext_gadget = require("ext.gadget.Util");
void (0, import_ext_gadget.getBody)().then(function switcherJS() {
  var _iterator = _createForOfIteratorHelper([...document.querySelectorAll(".switcher-container")].entries()), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const [index, container] = _step.value;
      const radioName = "switcher-".concat(index);
      let $selectedSwitcher;
      let $radio;
      const switchers = [];
      var _iterator2 = _createForOfIteratorHelper([...container.children].values()), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const switcher = _step2.value;
          const label = switcher.querySelector(".switcher-label");
          if (!(label !== null && label !== void 0 && label.childNodes.length)) {
            continue;
          }
          switchers[switchers.length] = switcher;
          const $switcher = $(switcher);
          $radio = $("<input>").prop({
            type: "radio",
            name: radioName
          }).on("click", () => {
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
          $("<label>").css("display", "block").append($radio, label.childNodes).appendTo(container);
          label.remove();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (switchers.length > 1) {
        $("<label>").css("display", "block").text("".concat(window.wgULS("显示", "顯示"), "全部")).prepend($("<input>").prop({
          type: "radio",
          name: radioName
        }).on("click", () => {
          const $switchers = $(switchers);
          $switchers.show();
          $selectedSwitcher = $switchers;
        })).appendTo(container);
      } else if (switchers.length) {
        var _$radio;
        (_$radio = $radio) === null || _$radio === void 0 || _$radio.remove();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1N3aXRjaGVyL1N3aXRjaGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gc3dpdGNoZXJKUygpOiB2b2lkIHtcblx0Zm9yIChjb25zdCBbaW5kZXgsIGNvbnRhaW5lcl0gb2YgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2l0Y2hlci1jb250YWluZXInKV0uZW50cmllcygpKSB7XG5cdFx0Y29uc3QgcmFkaW9OYW1lOiBzdHJpbmcgPSBgc3dpdGNoZXItJHtpbmRleH1gO1xuXG5cdFx0bGV0ICRzZWxlY3RlZFN3aXRjaGVyOiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cdFx0bGV0ICRyYWRpbzogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHN3aXRjaGVyczogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG5cdFx0Zm9yIChjb25zdCBzd2l0Y2hlciBvZiBbLi4uY29udGFpbmVyLmNoaWxkcmVuXS52YWx1ZXMoKSkge1xuXHRcdFx0Y29uc3QgbGFiZWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9IHN3aXRjaGVyLnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hlci1sYWJlbCcpO1xuXHRcdFx0aWYgKCFsYWJlbD8uY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHN3aXRjaGVyc1tzd2l0Y2hlcnMubGVuZ3RoXSA9IHN3aXRjaGVyIGFzIEhUTUxFbGVtZW50OyAvLyBSZXBsYWNlIGBzd2l0Y2hlcnMucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHRjb25zdCAkc3dpdGNoZXI6IEpRdWVyeSA9ICQoc3dpdGNoZXIgYXMgSFRNTEVsZW1lbnQpO1xuXG5cdFx0XHQkcmFkaW8gPSAkKCc8aW5wdXQ+Jylcblx0XHRcdFx0LnByb3Aoe1xuXHRcdFx0XHRcdHR5cGU6ICdyYWRpbycsXG5cdFx0XHRcdFx0bmFtZTogcmFkaW9OYW1lLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG5cdFx0XHRcdC5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0JHNlbGVjdGVkU3dpdGNoZXI/LmhpZGUoKTtcblx0XHRcdFx0XHQkc3dpdGNoZXIuc2hvdygpO1xuXHRcdFx0XHRcdCRzZWxlY3RlZFN3aXRjaGVyID0gJHN3aXRjaGVyO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0aWYgKCEkc2VsZWN0ZWRTd2l0Y2hlcikge1xuXHRcdFx0XHQvLyBNYXJrIHRoZSBmaXJzdCBvbmUgYXMgc2VsZWN0ZWRcblx0XHRcdFx0JHNlbGVjdGVkU3dpdGNoZXIgPSAkc3dpdGNoZXI7XG5cdFx0XHRcdCRyYWRpby5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG5cdFx0XHR9IGVsc2UgaWYgKGxhYmVsLmRhdGFzZXRbJ3N3aXRjaGVyRGVmYXVsdCddKSB7XG5cdFx0XHRcdC8vIEhpZGUgbm9uLWRlZmF1bHRcblx0XHRcdFx0JHN3aXRjaGVyLmhpZGUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEN1c3RvbSBkZWZhdWx0XG5cdFx0XHRcdCRyYWRpby50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0fVxuXG5cdFx0XHQkKCc8bGFiZWw+Jylcblx0XHRcdFx0LmNzcygnZGlzcGxheScsICdibG9jaycpXG5cdFx0XHRcdC5hcHBlbmQoJHJhZGlvLCBsYWJlbC5jaGlsZE5vZGVzIGFzIHVua25vd24gYXMgRWxlbWVudFtdKVxuXHRcdFx0XHQuYXBwZW5kVG8oY29udGFpbmVyKTtcblxuXHRcdFx0bGFiZWwucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHN3aXRjaGVycy5sZW5ndGggPiAxKSB7XG5cdFx0XHQkKCc8bGFiZWw+Jylcblx0XHRcdFx0LmNzcygnZGlzcGxheScsICdibG9jaycpXG5cdFx0XHRcdC50ZXh0KGAke3dpbmRvdy53Z1VMUygn5pi+56S6JywgJ+mhr+ekuicpfeWFqOmDqGApXG5cdFx0XHRcdC5wcmVwZW5kKFxuXHRcdFx0XHRcdCQoJzxpbnB1dD4nKVxuXHRcdFx0XHRcdFx0LnByb3Aoe1xuXHRcdFx0XHRcdFx0XHR0eXBlOiAncmFkaW8nLFxuXHRcdFx0XHRcdFx0XHRuYW1lOiByYWRpb05hbWUsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgJHN3aXRjaGVyczogSlF1ZXJ5ID0gJChzd2l0Y2hlcnMpO1xuXHRcdFx0XHRcdFx0XHQkc3dpdGNoZXJzLnNob3coKTtcblx0XHRcdFx0XHRcdFx0JHNlbGVjdGVkU3dpdGNoZXIgPSAkc3dpdGNoZXJzO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kVG8oY29udGFpbmVyKTtcblx0XHR9IGVsc2UgaWYgKHN3aXRjaGVycy5sZW5ndGgpIHtcblx0XHRcdCRyYWRpbz8ucmVtb3ZlKCk7XG5cdFx0fVxuXHR9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFzQkMsUUFBQSxpQkFBQTtBQUV0QixNQUFBLEdBQUtELGtCQUFBRSxTQUFRLEVBQUVDLEtBQUssU0FBU0MsYUFBbUI7QUFBQSxNQUFBQyxZQUFBQywyQkFDZCxDQUFDLEdBQUdDLFNBQVNDLGlCQUFpQixxQkFBcUIsQ0FBQyxFQUFFQyxRQUFRLENBQUEsR0FBQUM7QUFBQSxNQUFBO0FBQS9GLFNBQUFMLFVBQUFNLEVBQUEsR0FBQSxFQUFBRCxRQUFBTCxVQUFBTyxFQUFBLEdBQUFDLFFBQWtHO0FBQUEsWUFBdkYsQ0FBQ0MsT0FBT0MsU0FBUyxJQUFBTCxNQUFBTTtBQUMzQixZQUFNQyxZQUFBLFlBQUFDLE9BQWdDSixLQUFLO0FBRTNDLFVBQUlLO0FBQ0osVUFBSUM7QUFDSixZQUFNQyxZQUEyQixDQUFBO0FBQUMsVUFBQUMsYUFBQWhCLDJCQUVYLENBQUMsR0FBR1MsVUFBVVEsUUFBUSxFQUFFQyxPQUFPLENBQUEsR0FBQUM7QUFBQSxVQUFBO0FBQXRELGFBQUFILFdBQUFYLEVBQUEsR0FBQSxFQUFBYyxTQUFBSCxXQUFBVixFQUFBLEdBQUFDLFFBQXlEO0FBQUEsZ0JBQTlDYSxXQUFBRCxPQUFBVDtBQUNWLGdCQUFNVyxRQUE0QkQsU0FBU0UsY0FBYyxpQkFBaUI7QUFDMUUsY0FBSSxFQUFDRCxVQUFBLFFBQUFBLFVBQUEsVUFBQUEsTUFBT0UsV0FBV0MsU0FBUTtBQUM5QjtVQUNEO0FBRUFULG9CQUFVQSxVQUFVUyxNQUFNLElBQUlKO0FBQzlCLGdCQUFNSyxZQUFvQkMsRUFBRU4sUUFBdUI7QUFFbkROLG1CQUFTWSxFQUFFLFNBQVMsRUFDbEJDLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxNQUFNbEI7VUFDUCxDQUFDLEVBRUFtQixHQUFHLFNBQVMsTUFBWTtBQUFBLGdCQUFBQztBQUN4QixhQUFBQSxxQkFBQWxCLHVCQUFBLFFBQUFrQix1QkFBQSxVQUFBQSxtQkFBbUJDLEtBQUs7QUFDeEJQLHNCQUFVUSxLQUFLO0FBQ2ZwQixnQ0FBb0JZO1VBQ3JCLENBQUM7QUFFRixjQUFJLENBQUNaLG1CQUFtQjtBQUV2QkEsZ0NBQW9CWTtBQUNwQlgsbUJBQU9hLEtBQUssV0FBVyxJQUFJO1VBQzVCLFdBQVdOLE1BQU1hLFFBQVEsaUJBQWlCLEdBQUc7QUFFNUNULHNCQUFVTyxLQUFLO1VBQ2hCLE9BQU87QUFFTmxCLG1CQUFPcUIsUUFBUSxPQUFPO1VBQ3ZCO0FBRUFULFlBQUUsU0FBUyxFQUNUVSxJQUFJLFdBQVcsT0FBTyxFQUN0QkMsT0FBT3ZCLFFBQVFPLE1BQU1FLFVBQWtDLEVBQ3ZEZSxTQUFTN0IsU0FBUztBQUVwQlksZ0JBQU1rQixPQUFPO1FBQ2Q7TUFBQSxTQUFBQyxLQUFBO0FBQUF4QixtQkFBQXlCLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUF4QixtQkFBQTBCLEVBQUE7TUFBQTtBQUVBLFVBQUkzQixVQUFVUyxTQUFTLEdBQUc7QUFDekJFLFVBQUUsU0FBUyxFQUNUVSxJQUFJLFdBQVcsT0FBTyxFQUN0Qk8sS0FBQSxHQUFBL0IsT0FBUWdDLE9BQU9DLE1BQU0sTUFBTSxJQUFJLEdBQUMsSUFBQSxDQUFJLEVBQ3BDQyxRQUNBcEIsRUFBRSxTQUFTLEVBQ1RDLEtBQUs7VUFDTEMsTUFBTTtVQUNOQyxNQUFNbEI7UUFDUCxDQUFDLEVBQ0FtQixHQUFHLFNBQVMsTUFBWTtBQUN4QixnQkFBTWlCLGFBQXFCckIsRUFBRVgsU0FBUztBQUN0Q2dDLHFCQUFXZCxLQUFLO0FBQ2hCcEIsOEJBQW9Ca0M7UUFDckIsQ0FBQyxDQUNILEVBQ0NULFNBQVM3QixTQUFTO01BQ3JCLFdBQVdNLFVBQVVTLFFBQVE7QUFBQSxZQUFBd0I7QUFDNUIsU0FBQUEsVUFBQWxDLFlBQUEsUUFBQWtDLFlBQUEsVUFBQUEsUUFBUVQsT0FBTztNQUNoQjtJQUNEO0VBQUEsU0FBQUMsS0FBQTtBQUFBekMsY0FBQTBDLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUF6QyxjQUFBMkMsRUFBQTtFQUFBO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRCb2R5IiwgInRoZW4iLCAic3dpdGNoZXJKUyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJlbnRyaWVzIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImluZGV4IiwgImNvbnRhaW5lciIsICJ2YWx1ZSIsICJyYWRpb05hbWUiLCAiY29uY2F0IiwgIiRzZWxlY3RlZFN3aXRjaGVyIiwgIiRyYWRpbyIsICJzd2l0Y2hlcnMiLCAiX2l0ZXJhdG9yMiIsICJjaGlsZHJlbiIsICJ2YWx1ZXMiLCAiX3N0ZXAyIiwgInN3aXRjaGVyIiwgImxhYmVsIiwgInF1ZXJ5U2VsZWN0b3IiLCAiY2hpbGROb2RlcyIsICJsZW5ndGgiLCAiJHN3aXRjaGVyIiwgIiQiLCAicHJvcCIsICJ0eXBlIiwgIm5hbWUiLCAib24iLCAiXyRzZWxlY3RlZFN3aXRjaGVyIiwgImhpZGUiLCAic2hvdyIsICJkYXRhc2V0IiwgInRyaWdnZXIiLCAiY3NzIiwgImFwcGVuZCIsICJhcHBlbmRUbyIsICJyZW1vdmUiLCAiZXJyIiwgImUiLCAiZiIsICJ0ZXh0IiwgIndpbmRvdyIsICJ3Z1VMUyIsICJwcmVwZW5kIiwgIiRzd2l0Y2hlcnMiLCAiXyRyYWRpbyJdCn0K
