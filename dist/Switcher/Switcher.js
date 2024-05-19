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
      if (it) o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length) return { done: true };
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
      if (!normalCompletion && it.return != null) it.return();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
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
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
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
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1N3aXRjaGVyL1N3aXRjaGVyLnRzIiwgInNyYy9Td2l0Y2hlci9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHN3aXRjaGVySlMoKTogdm9pZCB7XG5cdGZvciAoY29uc3QgW2luZGV4LCBjb250YWluZXJdIG9mIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpdGNoZXItY29udGFpbmVyJyldLmVudHJpZXMoKSkge1xuXHRcdGNvbnN0IHJhZGlvTmFtZTogc3RyaW5nID0gYHN3aXRjaGVyLSR7aW5kZXh9YDtcblxuXHRcdGxldCAkc2VsZWN0ZWRTd2l0Y2hlcjogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXHRcdGxldCAkcmFkaW86IEpRdWVyeSB8IHVuZGVmaW5lZDtcblx0XHRjb25zdCBzd2l0Y2hlcnM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuXHRcdGZvciAoY29uc3Qgc3dpdGNoZXIgb2YgWy4uLmNvbnRhaW5lci5jaGlsZHJlbl0udmFsdWVzKCkpIHtcblx0XHRcdGNvbnN0IGxhYmVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBzd2l0Y2hlci5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoZXItbGFiZWwnKTtcblx0XHRcdGlmICghbGFiZWw/LmNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2hlcnNbc3dpdGNoZXJzLmxlbmd0aF0gPSBzd2l0Y2hlciBhcyBIVE1MRWxlbWVudDsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHRjb25zdCAkc3dpdGNoZXI6IEpRdWVyeSA9ICQoc3dpdGNoZXIgYXMgSFRNTEVsZW1lbnQpO1xuXG5cdFx0XHQkcmFkaW8gPSAkKCc8aW5wdXQ+JykucHJvcCh7XG5cdFx0XHRcdHR5cGU6ICdyYWRpbycsXG5cdFx0XHRcdG5hbWU6IHJhZGlvTmFtZSxcblx0XHRcdH0pO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuXHRcdFx0JHJhZGlvLm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRcdFx0JHNlbGVjdGVkU3dpdGNoZXI/LmhpZGUoKTtcblx0XHRcdFx0JHN3aXRjaGVyLnNob3coKTtcblx0XHRcdFx0JHNlbGVjdGVkU3dpdGNoZXIgPSAkc3dpdGNoZXI7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKCEkc2VsZWN0ZWRTd2l0Y2hlcikge1xuXHRcdFx0XHQvLyBNYXJrIHRoZSBmaXJzdCBvbmUgYXMgc2VsZWN0ZWRcblx0XHRcdFx0JHNlbGVjdGVkU3dpdGNoZXIgPSAkc3dpdGNoZXI7XG5cdFx0XHRcdCRyYWRpby5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG5cdFx0XHR9IGVsc2UgaWYgKGxhYmVsLmRhdGFzZXRbJ3N3aXRjaGVyRGVmYXVsdCddKSB7XG5cdFx0XHRcdC8vIEhpZGUgbm9uLWRlZmF1bHRcblx0XHRcdFx0JHN3aXRjaGVyLmhpZGUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEN1c3RvbSBkZWZhdWx0XG5cdFx0XHRcdCRyYWRpby50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCAkcmFkaW9zID0gJCgnPGxhYmVsPicpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0JHJhZGlvcy5hcHBlbmQoJHJhZGlvLCBsYWJlbC5jaGlsZE5vZGVzIGFzIHVua25vd24gYXMgRWxlbWVudFtdKTtcblx0XHRcdCRyYWRpb3MuYXBwZW5kVG8oY29udGFpbmVyKTtcblxuXHRcdFx0bGFiZWwucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHN3aXRjaGVycy5sZW5ndGggPiAxKSB7XG5cdFx0XHRjb25zdCAkbGFiZWwgPSAkKCc8bGFiZWw+JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJykudGV4dChnZXRNZXNzYWdlKCdTaG93IGFsbCcpKTtcblx0XHRcdGNvbnN0ICRzaG93QWxsUmFkaW8gPSAkKCc8aW5wdXQ+JykucHJvcCh7XG5cdFx0XHRcdHR5cGU6ICdyYWRpbycsXG5cdFx0XHRcdG5hbWU6IHJhZGlvTmFtZSxcblx0XHRcdH0pO1xuXHRcdFx0JHNob3dBbGxSYWRpby5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0ICRzd2l0Y2hlcnM6IEpRdWVyeSA9ICQoc3dpdGNoZXJzKTtcblx0XHRcdFx0JHN3aXRjaGVycy5zaG93KCk7XG5cdFx0XHRcdCRzZWxlY3RlZFN3aXRjaGVyID0gJHN3aXRjaGVycztcblx0XHRcdH0pO1xuXHRcdFx0JGxhYmVsLnByZXBlbmQoJHNob3dBbGxSYWRpbyk7XG5cdFx0XHQkbGFiZWwuYXBwZW5kVG8oY29udGFpbmVyKTtcblx0XHR9IGVsc2UgaWYgKHN3aXRjaGVycy5sZW5ndGgpIHtcblx0XHRcdCRyYWRpbz8ucmVtb3ZlKCk7XG5cdFx0fVxuXHR9XG59KTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J1Nob3cgYWxsJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaG93IGFsbCcsXG5cdFx0XHQnemgtaGFucyc6ICfmmL7npLrlhajpg6gnLFxuXHRcdFx0J3poLWhhbnQnOiAn6aGv56S65YWo6YOoJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0F0QixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixhQUFBLEdBQVlELGtCQUFBRSxVQUFTO01BQ3BCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVILGdCQUFnQjtBQUVyQyxJQUFNSSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRGJBLE1BQUEsR0FBS1IsbUJBQUFTLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxhQUFtQjtBQUFBLE1BQUFDLFlBQUFDLDJCQUNkLENBQUMsR0FBR0MsU0FBU0MsaUJBQWlCLHFCQUFxQixDQUFDLEVBQUVDLFFBQVEsQ0FBQSxHQUFBQztBQUFBLE1BQUE7QUFBL0YsU0FBQUwsVUFBQU0sRUFBQSxHQUFBLEVBQUFELFFBQUFMLFVBQUFPLEVBQUEsR0FBQUMsUUFBa0c7QUFBQSxZQUF2RixDQUFDQyxPQUFPQyxTQUFTLElBQUFMLE1BQUFNO0FBQzNCLFlBQU1DLFlBQUEsWUFBQUMsT0FBZ0NKLEtBQUs7QUFFM0MsVUFBSUs7QUFDSixVQUFJQztBQUNKLFlBQU1DLFlBQTJCLENBQUE7QUFBQyxVQUFBQyxhQUFBaEIsMkJBRVgsQ0FBQyxHQUFHUyxVQUFVUSxRQUFRLEVBQUVDLE9BQU8sQ0FBQSxHQUFBQztBQUFBLFVBQUE7QUFBdEQsYUFBQUgsV0FBQVgsRUFBQSxHQUFBLEVBQUFjLFNBQUFILFdBQUFWLEVBQUEsR0FBQUMsUUFBeUQ7QUFBQSxnQkFBOUNhLFdBQUFELE9BQUFUO0FBQ1YsZ0JBQU1XLFFBQTRCRCxTQUFTRSxjQUFjLGlCQUFpQjtBQUMxRSxjQUFJLEVBQUNELFVBQUEsUUFBQUEsVUFBQSxVQUFBQSxNQUFPRSxXQUFXQyxTQUFRO0FBQzlCO1VBQ0Q7QUFFQVQsb0JBQVVBLFVBQVVTLE1BQU0sSUFBSUo7QUFDOUIsZ0JBQU1LLFlBQW9CQyxFQUFFTixRQUF1QjtBQUVuRE4sbUJBQVNZLEVBQUUsU0FBUyxFQUFFQyxLQUFLO1lBQzFCQyxNQUFNO1lBQ05DLE1BQU1sQjtVQUNQLENBQUM7QUFFREcsaUJBQU9nQixHQUFHLFNBQVMsTUFBWTtBQUFBLGdCQUFBQztBQUM5QixhQUFBQSxxQkFBQWxCLHVCQUFBLFFBQUFrQix1QkFBQSxVQUFBQSxtQkFBbUJDLEtBQUs7QUFDeEJQLHNCQUFVUSxLQUFLO0FBQ2ZwQixnQ0FBb0JZO1VBQ3JCLENBQUM7QUFFRCxjQUFJLENBQUNaLG1CQUFtQjtBQUV2QkEsZ0NBQW9CWTtBQUNwQlgsbUJBQU9hLEtBQUssV0FBVyxJQUFJO1VBQzVCLFdBQVdOLE1BQU1hLFFBQVEsaUJBQWlCLEdBQUc7QUFFNUNULHNCQUFVTyxLQUFLO1VBQ2hCLE9BQU87QUFFTmxCLG1CQUFPcUIsUUFBUSxPQUFPO1VBQ3ZCO0FBRUEsZ0JBQU1DLFVBQVVWLEVBQUUsU0FBUyxFQUFFVyxJQUFJLFdBQVcsT0FBTztBQUNuREQsa0JBQVFFLE9BQU94QixRQUFRTyxNQUFNRSxVQUFrQztBQUMvRGEsa0JBQVFHLFNBQVM5QixTQUFTO0FBRTFCWSxnQkFBTW1CLE9BQU87UUFDZDtNQUFBLFNBQUFDLEtBQUE7QUFBQXpCLG1CQUFBMEIsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQXpCLG1CQUFBMkIsRUFBQTtNQUFBO0FBRUEsVUFBSTVCLFVBQVVTLFNBQVMsR0FBRztBQUN6QixjQUFNb0IsU0FBU2xCLEVBQUUsU0FBUyxFQUFFVyxJQUFJLFdBQVcsT0FBTyxFQUFFUSxLQUFLbkQsV0FBVyxVQUFVLENBQUM7QUFDL0UsY0FBTW9ELGdCQUFnQnBCLEVBQUUsU0FBUyxFQUFFQyxLQUFLO1VBQ3ZDQyxNQUFNO1VBQ05DLE1BQU1sQjtRQUNQLENBQUM7QUFDRG1DLHNCQUFjaEIsR0FBRyxTQUFTLE1BQVk7QUFDckMsZ0JBQU1pQixhQUFxQnJCLEVBQUVYLFNBQVM7QUFDdENnQyxxQkFBV2QsS0FBSztBQUNoQnBCLDhCQUFvQmtDO1FBQ3JCLENBQUM7QUFDREgsZUFBT0ksUUFBUUYsYUFBYTtBQUM1QkYsZUFBT0wsU0FBUzlCLFNBQVM7TUFDMUIsV0FBV00sVUFBVVMsUUFBUTtBQUFBLFlBQUF5QjtBQUM1QixTQUFBQSxVQUFBbkMsWUFBQSxRQUFBbUMsWUFBQSxVQUFBQSxRQUFRVCxPQUFPO01BQ2hCO0lBQ0Q7RUFBQSxTQUFBQyxLQUFBO0FBQUExQyxjQUFBMkMsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQTFDLGNBQUE0QyxFQUFBO0VBQUE7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdldEJvZHkiLCAidGhlbiIsICJzd2l0Y2hlckpTIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImVudHJpZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiaW5kZXgiLCAiY29udGFpbmVyIiwgInZhbHVlIiwgInJhZGlvTmFtZSIsICJjb25jYXQiLCAiJHNlbGVjdGVkU3dpdGNoZXIiLCAiJHJhZGlvIiwgInN3aXRjaGVycyIsICJfaXRlcmF0b3IyIiwgImNoaWxkcmVuIiwgInZhbHVlcyIsICJfc3RlcDIiLCAic3dpdGNoZXIiLCAibGFiZWwiLCAicXVlcnlTZWxlY3RvciIsICJjaGlsZE5vZGVzIiwgImxlbmd0aCIsICIkc3dpdGNoZXIiLCAiJCIsICJwcm9wIiwgInR5cGUiLCAibmFtZSIsICJvbiIsICJfJHNlbGVjdGVkU3dpdGNoZXIiLCAiaGlkZSIsICJzaG93IiwgImRhdGFzZXQiLCAidHJpZ2dlciIsICIkcmFkaW9zIiwgImNzcyIsICJhcHBlbmQiLCAiYXBwZW5kVG8iLCAicmVtb3ZlIiwgImVyciIsICJlIiwgImYiLCAiJGxhYmVsIiwgInRleHQiLCAiJHNob3dBbGxSYWRpbyIsICIkc3dpdGNoZXJzIiwgInByZXBlbmQiLCAiXyRyYWRpbyJdCn0K
