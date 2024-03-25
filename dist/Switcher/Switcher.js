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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1N3aXRjaGVyL1N3aXRjaGVyLnRzIiwgInNyYy9Td2l0Y2hlci9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHN3aXRjaGVySlMoKTogdm9pZCB7XG5cdGZvciAoY29uc3QgW2luZGV4LCBjb250YWluZXJdIG9mIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpdGNoZXItY29udGFpbmVyJyldLmVudHJpZXMoKSkge1xuXHRcdGNvbnN0IHJhZGlvTmFtZTogc3RyaW5nID0gYHN3aXRjaGVyLSR7aW5kZXh9YDtcblxuXHRcdGxldCAkc2VsZWN0ZWRTd2l0Y2hlcjogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXHRcdGxldCAkcmFkaW86IEpRdWVyeSB8IHVuZGVmaW5lZDtcblx0XHRjb25zdCBzd2l0Y2hlcnM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuXHRcdGZvciAoY29uc3Qgc3dpdGNoZXIgb2YgWy4uLmNvbnRhaW5lci5jaGlsZHJlbl0udmFsdWVzKCkpIHtcblx0XHRcdGNvbnN0IGxhYmVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBzd2l0Y2hlci5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoZXItbGFiZWwnKTtcblx0XHRcdGlmICghbGFiZWw/LmNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2hlcnNbc3dpdGNoZXJzLmxlbmd0aF0gPSBzd2l0Y2hlciBhcyBIVE1MRWxlbWVudDsgLy8gUmVwbGFjZSBgc3dpdGNoZXJzLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdFx0Y29uc3QgJHN3aXRjaGVyOiBKUXVlcnkgPSAkKHN3aXRjaGVyIGFzIEhUTUxFbGVtZW50KTtcblxuXHRcdFx0JHJhZGlvID0gJCgnPGlucHV0PicpLnByb3Aoe1xuXHRcdFx0XHR0eXBlOiAncmFkaW8nLFxuXHRcdFx0XHRuYW1lOiByYWRpb05hbWUsXG5cdFx0XHR9KTtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcblx0XHRcdCRyYWRpby5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdCRzZWxlY3RlZFN3aXRjaGVyPy5oaWRlKCk7XG5cdFx0XHRcdCRzd2l0Y2hlci5zaG93KCk7XG5cdFx0XHRcdCRzZWxlY3RlZFN3aXRjaGVyID0gJHN3aXRjaGVyO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmICghJHNlbGVjdGVkU3dpdGNoZXIpIHtcblx0XHRcdFx0Ly8gTWFyayB0aGUgZmlyc3Qgb25lIGFzIHNlbGVjdGVkXG5cdFx0XHRcdCRzZWxlY3RlZFN3aXRjaGVyID0gJHN3aXRjaGVyO1xuXHRcdFx0XHQkcmFkaW8ucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuXHRcdFx0fSBlbHNlIGlmIChsYWJlbC5kYXRhc2V0Wydzd2l0Y2hlckRlZmF1bHQnXSkge1xuXHRcdFx0XHQvLyBIaWRlIG5vbi1kZWZhdWx0XG5cdFx0XHRcdCRzd2l0Y2hlci5oaWRlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBDdXN0b20gZGVmYXVsdFxuXHRcdFx0XHQkcmFkaW8udHJpZ2dlcignY2xpY2snKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgJHJhZGlvcyA9ICQoJzxsYWJlbD4nKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblx0XHRcdCRyYWRpb3MuYXBwZW5kKCRyYWRpbywgbGFiZWwuY2hpbGROb2RlcyBhcyB1bmtub3duIGFzIEVsZW1lbnRbXSk7XG5cdFx0XHQkcmFkaW9zLmFwcGVuZFRvKGNvbnRhaW5lcik7XG5cblx0XHRcdGxhYmVsLnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdGlmIChzd2l0Y2hlcnMubGVuZ3RoID4gMSkge1xuXHRcdFx0Y29uc3QgJGxhYmVsID0gJCgnPGxhYmVsPicpLmNzcygnZGlzcGxheScsICdibG9jaycpLnRleHQoZ2V0TWVzc2FnZSgnU2hvdyBhbGwnKSk7XG5cdFx0XHRjb25zdCAkc2hvd0FsbFJhZGlvID0gJCgnPGlucHV0PicpLnByb3Aoe1xuXHRcdFx0XHR0eXBlOiAncmFkaW8nLFxuXHRcdFx0XHRuYW1lOiByYWRpb05hbWUsXG5cdFx0XHR9KTtcblx0XHRcdCRzaG93QWxsUmFkaW8ub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCAkc3dpdGNoZXJzOiBKUXVlcnkgPSAkKHN3aXRjaGVycyk7XG5cdFx0XHRcdCRzd2l0Y2hlcnMuc2hvdygpO1xuXHRcdFx0XHQkc2VsZWN0ZWRTd2l0Y2hlciA9ICRzd2l0Y2hlcnM7XG5cdFx0XHR9KTtcblx0XHRcdCRsYWJlbC5wcmVwZW5kKCRzaG93QWxsUmFkaW8pO1xuXHRcdFx0JGxhYmVsLmFwcGVuZFRvKGNvbnRhaW5lcik7XG5cdFx0fSBlbHNlIGlmIChzd2l0Y2hlcnMubGVuZ3RoKSB7XG5cdFx0XHQkcmFkaW8/LnJlbW92ZSgpO1xuXHRcdH1cblx0fVxufSk7XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdTaG93IGFsbCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvdyBhbGwnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S65YWo6YOoJyxcblx0XHRcdCd6aC1oYW50JzogJ+mhr+ekuuWFqOmDqCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0F0QixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixhQUFBLEdBQVlELGtCQUFBRSxVQUFTO01BQ3BCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVILGdCQUFnQjtBQUVyQyxJQUFNSSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRGJBLE1BQUEsR0FBS1IsbUJBQUFTLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxhQUFtQjtBQUFBLE1BQUFDLFlBQUFDLDJCQUNkLENBQUMsR0FBR0MsU0FBU0MsaUJBQWlCLHFCQUFxQixDQUFDLEVBQUVDLFFBQVEsQ0FBQSxHQUFBQztBQUFBLE1BQUE7QUFBL0YsU0FBQUwsVUFBQU0sRUFBQSxHQUFBLEVBQUFELFFBQUFMLFVBQUFPLEVBQUEsR0FBQUMsUUFBa0c7QUFBQSxZQUF2RixDQUFDQyxPQUFPQyxTQUFTLElBQUFMLE1BQUFNO0FBQzNCLFlBQU1DLFlBQUEsWUFBQUMsT0FBZ0NKLEtBQUs7QUFFM0MsVUFBSUs7QUFDSixVQUFJQztBQUNKLFlBQU1DLFlBQTJCLENBQUE7QUFBQyxVQUFBQyxhQUFBaEIsMkJBRVgsQ0FBQyxHQUFHUyxVQUFVUSxRQUFRLEVBQUVDLE9BQU8sQ0FBQSxHQUFBQztBQUFBLFVBQUE7QUFBdEQsYUFBQUgsV0FBQVgsRUFBQSxHQUFBLEVBQUFjLFNBQUFILFdBQUFWLEVBQUEsR0FBQUMsUUFBeUQ7QUFBQSxnQkFBOUNhLFdBQUFELE9BQUFUO0FBQ1YsZ0JBQU1XLFFBQTRCRCxTQUFTRSxjQUFjLGlCQUFpQjtBQUMxRSxjQUFJLEVBQUNELFVBQUEsUUFBQUEsVUFBQSxVQUFBQSxNQUFPRSxXQUFXQyxTQUFRO0FBQzlCO1VBQ0Q7QUFFQVQsb0JBQVVBLFVBQVVTLE1BQU0sSUFBSUo7QUFDOUIsZ0JBQU1LLFlBQW9CQyxFQUFFTixRQUF1QjtBQUVuRE4sbUJBQVNZLEVBQUUsU0FBUyxFQUFFQyxLQUFLO1lBQzFCQyxNQUFNO1lBQ05DLE1BQU1sQjtVQUNQLENBQUM7QUFFREcsaUJBQU9nQixHQUFHLFNBQVMsTUFBWTtBQUFBLGdCQUFBQztBQUM5QixhQUFBQSxxQkFBQWxCLHVCQUFBLFFBQUFrQix1QkFBQSxVQUFBQSxtQkFBbUJDLEtBQUs7QUFDeEJQLHNCQUFVUSxLQUFLO0FBQ2ZwQixnQ0FBb0JZO1VBQ3JCLENBQUM7QUFFRCxjQUFJLENBQUNaLG1CQUFtQjtBQUV2QkEsZ0NBQW9CWTtBQUNwQlgsbUJBQU9hLEtBQUssV0FBVyxJQUFJO1VBQzVCLFdBQVdOLE1BQU1hLFFBQVEsaUJBQWlCLEdBQUc7QUFFNUNULHNCQUFVTyxLQUFLO1VBQ2hCLE9BQU87QUFFTmxCLG1CQUFPcUIsUUFBUSxPQUFPO1VBQ3ZCO0FBRUEsZ0JBQU1DLFVBQVVWLEVBQUUsU0FBUyxFQUFFVyxJQUFJLFdBQVcsT0FBTztBQUNuREQsa0JBQVFFLE9BQU94QixRQUFRTyxNQUFNRSxVQUFrQztBQUMvRGEsa0JBQVFHLFNBQVM5QixTQUFTO0FBRTFCWSxnQkFBTW1CLE9BQU87UUFDZDtNQUFBLFNBQUFDLEtBQUE7QUFBQXpCLG1CQUFBMEIsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQXpCLG1CQUFBMkIsRUFBQTtNQUFBO0FBRUEsVUFBSTVCLFVBQVVTLFNBQVMsR0FBRztBQUN6QixjQUFNb0IsU0FBU2xCLEVBQUUsU0FBUyxFQUFFVyxJQUFJLFdBQVcsT0FBTyxFQUFFUSxLQUFLbkQsV0FBVyxVQUFVLENBQUM7QUFDL0UsY0FBTW9ELGdCQUFnQnBCLEVBQUUsU0FBUyxFQUFFQyxLQUFLO1VBQ3ZDQyxNQUFNO1VBQ05DLE1BQU1sQjtRQUNQLENBQUM7QUFDRG1DLHNCQUFjaEIsR0FBRyxTQUFTLE1BQVk7QUFDckMsZ0JBQU1pQixhQUFxQnJCLEVBQUVYLFNBQVM7QUFDdENnQyxxQkFBV2QsS0FBSztBQUNoQnBCLDhCQUFvQmtDO1FBQ3JCLENBQUM7QUFDREgsZUFBT0ksUUFBUUYsYUFBYTtBQUM1QkYsZUFBT0wsU0FBUzlCLFNBQVM7TUFDMUIsV0FBV00sVUFBVVMsUUFBUTtBQUFBLFlBQUF5QjtBQUM1QixTQUFBQSxVQUFBbkMsWUFBQSxRQUFBbUMsWUFBQSxVQUFBQSxRQUFRVCxPQUFPO01BQ2hCO0lBQ0Q7RUFBQSxTQUFBQyxLQUFBO0FBQUExQyxjQUFBMkMsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQTFDLGNBQUE0QyxFQUFBO0VBQUE7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdldEJvZHkiLCAidGhlbiIsICJzd2l0Y2hlckpTIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImVudHJpZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiaW5kZXgiLCAiY29udGFpbmVyIiwgInZhbHVlIiwgInJhZGlvTmFtZSIsICJjb25jYXQiLCAiJHNlbGVjdGVkU3dpdGNoZXIiLCAiJHJhZGlvIiwgInN3aXRjaGVycyIsICJfaXRlcmF0b3IyIiwgImNoaWxkcmVuIiwgInZhbHVlcyIsICJfc3RlcDIiLCAic3dpdGNoZXIiLCAibGFiZWwiLCAicXVlcnlTZWxlY3RvciIsICJjaGlsZE5vZGVzIiwgImxlbmd0aCIsICIkc3dpdGNoZXIiLCAiJCIsICJwcm9wIiwgInR5cGUiLCAibmFtZSIsICJvbiIsICJfJHNlbGVjdGVkU3dpdGNoZXIiLCAiaGlkZSIsICJzaG93IiwgImRhdGFzZXQiLCAidHJpZ2dlciIsICIkcmFkaW9zIiwgImNzcyIsICJhcHBlbmQiLCAiYXBwZW5kVG8iLCAicmVtb3ZlIiwgImVyciIsICJlIiwgImYiLCAiJGxhYmVsIiwgInRleHQiLCAiJHNob3dBbGxSYWRpbyIsICIkc3dpdGNoZXJzIiwgInByZXBlbmQiLCAiXyRyYWRpbyJdCn0K
