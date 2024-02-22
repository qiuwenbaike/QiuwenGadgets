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
var switcherJS = () => {
  var _iterator = _createForOfIteratorHelper([...document.querySelectorAll(".switcher-container")].entries()), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const [index, container] = _step.value;
      let selected;
      let $radio;
      const switchers = [];
      const radioName = "switcher-".concat(index);
      var _iterator2 = _createForOfIteratorHelper([...container.children].entries()), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const [, switcher] = _step2.value;
          const label = switcher.querySelector(".switcher-label");
          if (!label || label.childNodes.length === 0) {
            continue;
          }
          switchers[switchers.length] = switcher;
          $radio = $("<input>").prop({
            type: "radio",
            name: radioName
          }).on("click", () => {
            $(selected).hide();
            $(switcher).show();
            selected = switcher;
          });
          if (!selected) {
            selected = switcher;
            $radio.prop("checked", true);
          } else if (label.dataset["switcherDefault"] === null) {
            $(switcher).hide();
          } else {
            $radio.trigger("click");
          }
          $("<label>").css("display", "block").append($radio, label.childNodes).appendTo(container);
          $(label).remove();
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
          $(switchers).show();
          selected = switchers;
        })).appendTo(container);
      }
      if (switchers.length === 1 && $radio !== void 0) {
        $radio.remove();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
$(switcherJS);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1N3aXRjaGVyL1N3aXRjaGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBzd2l0Y2hlckpTID0gKCk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IFtpbmRleCwgY29udGFpbmVyXSBvZiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXRjaGVyLWNvbnRhaW5lcicpXS5lbnRyaWVzKCkpIHtcblx0XHRsZXQgc2VsZWN0ZWQ6IHVua25vd25bXSB8IEVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cdFx0bGV0ICRyYWRpbzogSlF1ZXJ5PEVsZW1lbnQ+IHwgdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHN3aXRjaGVyczogRWxlbWVudFtdID0gW107XG5cdFx0Y29uc3QgcmFkaW9OYW1lOiBzdHJpbmcgPSBgc3dpdGNoZXItJHtpbmRleH1gO1xuXHRcdGZvciAoY29uc3QgWywgc3dpdGNoZXJdIG9mIFsuLi5jb250YWluZXIuY2hpbGRyZW5dLmVudHJpZXMoKSkge1xuXHRcdFx0Y29uc3QgbGFiZWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9IHN3aXRjaGVyLnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hlci1sYWJlbCcpO1xuXHRcdFx0aWYgKCFsYWJlbCB8fCBsYWJlbC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaGVyc1tzd2l0Y2hlcnMubGVuZ3RoXSA9IHN3aXRjaGVyOyAvLyBSZXBsYWNlIGBzd2l0Y2hlcnMucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHQkcmFkaW8gPSAkKCc8aW5wdXQ+Jylcblx0XHRcdFx0LnByb3Aoe1xuXHRcdFx0XHRcdHR5cGU6ICdyYWRpbycsXG5cdFx0XHRcdFx0bmFtZTogcmFkaW9OYW1lLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG5cdFx0XHRcdC5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0JChzZWxlY3RlZCBhcyBOb25OdWxsYWJsZTx0eXBlb2Ygc2VsZWN0ZWQ+KS5oaWRlKCk7XG5cdFx0XHRcdFx0JChzd2l0Y2hlcikuc2hvdygpO1xuXHRcdFx0XHRcdHNlbGVjdGVkID0gc3dpdGNoZXI7XG5cdFx0XHRcdH0pO1xuXHRcdFx0aWYgKCFzZWxlY3RlZCkge1xuXHRcdFx0XHQvLyBNYXJrIHRoZSBmaXJzdCBvbmUgYXMgc2VsZWN0ZWRcblx0XHRcdFx0c2VsZWN0ZWQgPSBzd2l0Y2hlcjtcblx0XHRcdFx0JHJhZGlvLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcblx0XHRcdH0gZWxzZSBpZiAobGFiZWwuZGF0YXNldFsnc3dpdGNoZXJEZWZhdWx0J10gPT09IG51bGwpIHtcblx0XHRcdFx0Ly8gSGlkZSBub24tZGVmYXVsdFxuXHRcdFx0XHQkKHN3aXRjaGVyKS5oaWRlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBDdXN0b20gZGVmYXVsdFxuXHRcdFx0XHQkcmFkaW8udHJpZ2dlcignY2xpY2snKTtcblx0XHRcdH1cblx0XHRcdCQoJzxsYWJlbD4nKVxuXHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJylcblx0XHRcdFx0LmFwcGVuZCgkcmFkaW8sIGxhYmVsLmNoaWxkTm9kZXMgYXMgdW5rbm93biBhcyBIVE1MRWxlbWVudClcblx0XHRcdFx0LmFwcGVuZFRvKGNvbnRhaW5lcik7XG5cdFx0XHQkKGxhYmVsKS5yZW1vdmUoKTtcblx0XHR9XG5cdFx0aWYgKHN3aXRjaGVycy5sZW5ndGggPiAxKSB7XG5cdFx0XHQkKCc8bGFiZWw+Jylcblx0XHRcdFx0LmNzcygnZGlzcGxheScsICdibG9jaycpXG5cdFx0XHRcdC50ZXh0KGAke3dpbmRvdy53Z1VMUygn5pi+56S6JywgJ+mhr+ekuicpfeWFqOmDqGApXG5cdFx0XHRcdC5wcmVwZW5kKFxuXHRcdFx0XHRcdCQoJzxpbnB1dD4nKVxuXHRcdFx0XHRcdFx0LnByb3Aoe1xuXHRcdFx0XHRcdFx0XHR0eXBlOiAncmFkaW8nLFxuXHRcdFx0XHRcdFx0XHRuYW1lOiByYWRpb05hbWUsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0JChzd2l0Y2hlcnMpLnNob3coKTtcblx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQgPSBzd2l0Y2hlcnM7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmRUbyhjb250YWluZXIpO1xuXHRcdH1cblx0XHRpZiAoc3dpdGNoZXJzLmxlbmd0aCA9PT0gMSAmJiAkcmFkaW8gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0JHJhZGlvLnJlbW92ZSgpO1xuXHRcdH1cblx0fVxufTtcblxuJChzd2l0Y2hlckpTKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGFBQWFBLE1BQVk7QUFBQSxNQUFBQyxZQUFBQywyQkFDRyxDQUFDLEdBQUdDLFNBQVNDLGlCQUFpQixxQkFBcUIsQ0FBQyxFQUFFQyxRQUFRLENBQUEsR0FBQUM7QUFBQSxNQUFBO0FBQS9GLFNBQUFMLFVBQUFNLEVBQUEsR0FBQSxFQUFBRCxRQUFBTCxVQUFBTyxFQUFBLEdBQUFDLFFBQWtHO0FBQUEsWUFBdkYsQ0FBQ0MsT0FBT0MsU0FBUyxJQUFBTCxNQUFBTTtBQUMzQixVQUFJQztBQUNKLFVBQUlDO0FBQ0osWUFBTUMsWUFBdUIsQ0FBQTtBQUM3QixZQUFNQyxZQUFBLFlBQUFDLE9BQWdDUCxLQUFLO0FBQUEsVUFBQVEsYUFBQWhCLDJCQUNoQixDQUFDLEdBQUdTLFVBQVVRLFFBQVEsRUFBRWQsUUFBUSxDQUFBLEdBQUFlO0FBQUEsVUFBQTtBQUEzRCxhQUFBRixXQUFBWCxFQUFBLEdBQUEsRUFBQWEsU0FBQUYsV0FBQVYsRUFBQSxHQUFBQyxRQUE4RDtBQUFBLGdCQUFuRCxDQUFBLEVBQUdZLFFBQVEsSUFBQUQsT0FBQVI7QUFDckIsZ0JBQU1VLFFBQTRCRCxTQUFTRSxjQUFjLGlCQUFpQjtBQUMxRSxjQUFJLENBQUNELFNBQVNBLE1BQU1FLFdBQVdDLFdBQVcsR0FBRztBQUM1QztVQUNEO0FBQ0FWLG9CQUFVQSxVQUFVVSxNQUFNLElBQUlKO0FBQzlCUCxtQkFBU1ksRUFBRSxTQUFTLEVBQ2xCQyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMsTUFBTWI7VUFDUCxDQUFDLEVBRUFjLEdBQUcsU0FBUyxNQUFZO0FBQ3hCSixjQUFFYixRQUF3QyxFQUFFa0IsS0FBSztBQUNqREwsY0FBRUwsUUFBUSxFQUFFVyxLQUFLO0FBQ2pCbkIsdUJBQVdRO1VBQ1osQ0FBQztBQUNGLGNBQUksQ0FBQ1IsVUFBVTtBQUVkQSx1QkFBV1E7QUFDWFAsbUJBQU9hLEtBQUssV0FBVyxJQUFJO1VBQzVCLFdBQVdMLE1BQU1XLFFBQVEsaUJBQWlCLE1BQU0sTUFBTTtBQUVyRFAsY0FBRUwsUUFBUSxFQUFFVSxLQUFLO1VBQ2xCLE9BQU87QUFFTmpCLG1CQUFPb0IsUUFBUSxPQUFPO1VBQ3ZCO0FBQ0FSLFlBQUUsU0FBUyxFQUNUUyxJQUFJLFdBQVcsT0FBTyxFQUN0QkMsT0FBT3RCLFFBQVFRLE1BQU1FLFVBQW9DLEVBQ3pEYSxTQUFTMUIsU0FBUztBQUNwQmUsWUFBRUosS0FBSyxFQUFFZ0IsT0FBTztRQUNqQjtNQUFBLFNBQUFDLEtBQUE7QUFBQXJCLG1CQUFBc0IsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQXJCLG1CQUFBdUIsRUFBQTtNQUFBO0FBQ0EsVUFBSTFCLFVBQVVVLFNBQVMsR0FBRztBQUN6QkMsVUFBRSxTQUFTLEVBQ1RTLElBQUksV0FBVyxPQUFPLEVBQ3RCTyxLQUFBLEdBQUF6QixPQUFRMEIsT0FBT0MsTUFBTSxNQUFNLElBQUksR0FBQyxJQUFBLENBQUksRUFDcENDLFFBQ0FuQixFQUFFLFNBQVMsRUFDVEMsS0FBSztVQUNMQyxNQUFNO1VBQ05DLE1BQU1iO1FBQ1AsQ0FBQyxFQUNBYyxHQUFHLFNBQVMsTUFBWTtBQUN4QkosWUFBRVgsU0FBUyxFQUFFaUIsS0FBSztBQUNsQm5CLHFCQUFXRTtRQUNaLENBQUMsQ0FDSCxFQUNDc0IsU0FBUzFCLFNBQVM7TUFDckI7QUFDQSxVQUFJSSxVQUFVVSxXQUFXLEtBQUtYLFdBQVcsUUFBVztBQUNuREEsZUFBT3dCLE9BQU87TUFDZjtJQUNEO0VBQUEsU0FBQUMsS0FBQTtBQUFBdEMsY0FBQXVDLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUF0QyxjQUFBd0MsRUFBQTtFQUFBO0FBQ0Q7QUFFQWYsRUFBRTFCLFVBQVU7IiwKICAibmFtZXMiOiBbInN3aXRjaGVySlMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiZW50cmllcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJpbmRleCIsICJjb250YWluZXIiLCAidmFsdWUiLCAic2VsZWN0ZWQiLCAiJHJhZGlvIiwgInN3aXRjaGVycyIsICJyYWRpb05hbWUiLCAiY29uY2F0IiwgIl9pdGVyYXRvcjIiLCAiY2hpbGRyZW4iLCAiX3N0ZXAyIiwgInN3aXRjaGVyIiwgImxhYmVsIiwgInF1ZXJ5U2VsZWN0b3IiLCAiY2hpbGROb2RlcyIsICJsZW5ndGgiLCAiJCIsICJwcm9wIiwgInR5cGUiLCAibmFtZSIsICJvbiIsICJoaWRlIiwgInNob3ciLCAiZGF0YXNldCIsICJ0cmlnZ2VyIiwgImNzcyIsICJhcHBlbmQiLCAiYXBwZW5kVG8iLCAicmVtb3ZlIiwgImVyciIsICJlIiwgImYiLCAidGV4dCIsICJ3aW5kb3ciLCAid2dVTFMiLCAicHJlcGVuZCJdCn0K
