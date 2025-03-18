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
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1N3aXRjaGVyL1N3aXRjaGVyLnRzIiwgInNyYy9Td2l0Y2hlci9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHN3aXRjaGVySlMoKTogdm9pZCB7XG5cdGZvciAoY29uc3QgW2luZGV4LCBjb250YWluZXJdIG9mIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpdGNoZXItY29udGFpbmVyJyldLmVudHJpZXMoKSkge1xuXHRcdGNvbnN0IHJhZGlvTmFtZTogc3RyaW5nID0gYHN3aXRjaGVyLSR7aW5kZXh9YDtcblxuXHRcdGxldCAkc2VsZWN0ZWRTd2l0Y2hlcjogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXHRcdGxldCAkcmFkaW86IEpRdWVyeSB8IHVuZGVmaW5lZDtcblx0XHRjb25zdCBzd2l0Y2hlcnM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuXHRcdGZvciAoY29uc3Qgc3dpdGNoZXIgb2YgWy4uLmNvbnRhaW5lci5jaGlsZHJlbl0udmFsdWVzKCkpIHtcblx0XHRcdGNvbnN0IGxhYmVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBzd2l0Y2hlci5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoZXItbGFiZWwnKTtcblx0XHRcdGlmICghbGFiZWw/LmNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2hlcnNbc3dpdGNoZXJzLmxlbmd0aF0gPSBzd2l0Y2hlciBhcyBIVE1MRWxlbWVudDsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHRcdGNvbnN0ICRzd2l0Y2hlcjogSlF1ZXJ5ID0gJChzd2l0Y2hlciBhcyBIVE1MRWxlbWVudCk7XG5cblx0XHRcdCRyYWRpbyA9ICQoJzxpbnB1dD4nKS5wcm9wKHtcblx0XHRcdFx0dHlwZTogJ3JhZGlvJyxcblx0XHRcdFx0bmFtZTogcmFkaW9OYW1lLFxuXHRcdFx0fSk7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG5cdFx0XHQkcmFkaW8ub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHQkc2VsZWN0ZWRTd2l0Y2hlcj8uaGlkZSgpO1xuXHRcdFx0XHQkc3dpdGNoZXIuc2hvdygpO1xuXHRcdFx0XHQkc2VsZWN0ZWRTd2l0Y2hlciA9ICRzd2l0Y2hlcjtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoISRzZWxlY3RlZFN3aXRjaGVyKSB7XG5cdFx0XHRcdC8vIE1hcmsgdGhlIGZpcnN0IG9uZSBhcyBzZWxlY3RlZFxuXHRcdFx0XHQkc2VsZWN0ZWRTd2l0Y2hlciA9ICRzd2l0Y2hlcjtcblx0XHRcdFx0JHJhZGlvLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcblx0XHRcdH0gZWxzZSBpZiAobGFiZWwuZGF0YXNldFsnc3dpdGNoZXJEZWZhdWx0J10pIHtcblx0XHRcdFx0Ly8gSGlkZSBub24tZGVmYXVsdFxuXHRcdFx0XHQkc3dpdGNoZXIuaGlkZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gQ3VzdG9tIGRlZmF1bHRcblx0XHRcdFx0JHJhZGlvLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0ICRyYWRpb3MgPSAkKCc8bGFiZWw+JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0XHQkcmFkaW9zLmFwcGVuZCgkcmFkaW8sIGxhYmVsLmNoaWxkTm9kZXMgYXMgdW5rbm93biBhcyBFbGVtZW50W10pO1xuXHRcdFx0JHJhZGlvcy5hcHBlbmRUbyhjb250YWluZXIpO1xuXG5cdFx0XHRsYWJlbC5yZW1vdmUoKTtcblx0XHR9XG5cblx0XHRpZiAoc3dpdGNoZXJzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGNvbnN0ICRsYWJlbCA9ICQoJzxsYWJlbD4nKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKS50ZXh0KGdldE1lc3NhZ2UoJ1Nob3cgYWxsJykpO1xuXHRcdFx0Y29uc3QgJHNob3dBbGxSYWRpbyA9ICQoJzxpbnB1dD4nKS5wcm9wKHtcblx0XHRcdFx0dHlwZTogJ3JhZGlvJyxcblx0XHRcdFx0bmFtZTogcmFkaW9OYW1lLFxuXHRcdFx0fSk7XG5cdFx0XHQkc2hvd0FsbFJhZGlvLm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgJHN3aXRjaGVyczogSlF1ZXJ5ID0gJChzd2l0Y2hlcnMpO1xuXHRcdFx0XHQkc3dpdGNoZXJzLnNob3coKTtcblx0XHRcdFx0JHNlbGVjdGVkU3dpdGNoZXIgPSAkc3dpdGNoZXJzO1xuXHRcdFx0fSk7XG5cdFx0XHQkbGFiZWwucHJlcGVuZCgkc2hvd0FsbFJhZGlvKTtcblx0XHRcdCRsYWJlbC5hcHBlbmRUbyhjb250YWluZXIpO1xuXHRcdH0gZWxzZSBpZiAoc3dpdGNoZXJzLmxlbmd0aCkge1xuXHRcdFx0JHJhZGlvPy5yZW1vdmUoKTtcblx0XHR9XG5cdH1cbn0pO1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnU2hvdyBhbGwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3cgYWxsJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aYvuekuuWFqOmDqCcsXG5cdFx0XHQnemgtaGFudCc6ICfpoa/npLrlhajpg6gnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0F0QixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixhQUFBLEdBQVlELGtCQUFBRSxVQUFTO01BQ3BCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVILGdCQUFnQjtBQUVyQyxJQUFNSSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRGJBLE1BQUEsR0FBS1IsbUJBQUFTLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxhQUFtQjtBQUFBLE1BQUFDLFlBQUFDLDJCQUNkLENBQUMsR0FBR0MsU0FBU0MsaUJBQWlCLHFCQUFxQixDQUFDLEVBQUVDLFFBQVEsQ0FBQSxHQUFBQztBQUFBLE1BQUE7QUFBL0YsU0FBQUwsVUFBQU0sRUFBQSxHQUFBLEVBQUFELFFBQUFMLFVBQUFPLEVBQUEsR0FBQUMsUUFBa0c7QUFBQSxZQUF2RixDQUFDQyxPQUFPQyxTQUFTLElBQUFMLE1BQUFNO0FBQzNCLFlBQU1DLFlBQUEsWUFBQUMsT0FBZ0NKLEtBQUs7QUFFM0MsVUFBSUs7QUFDSixVQUFJQztBQUNKLFlBQU1DLFlBQTJCLENBQUE7QUFBQyxVQUFBQyxhQUFBaEIsMkJBRVgsQ0FBQyxHQUFHUyxVQUFVUSxRQUFRLEVBQUVDLE9BQU8sQ0FBQSxHQUFBQztBQUFBLFVBQUE7QUFBdEQsYUFBQUgsV0FBQVgsRUFBQSxHQUFBLEVBQUFjLFNBQUFILFdBQUFWLEVBQUEsR0FBQUMsUUFBeUQ7QUFBQSxnQkFBOUNhLFdBQUFELE9BQUFUO0FBQ1YsZ0JBQU1XLFFBQTRCRCxTQUFTRSxjQUFjLGlCQUFpQjtBQUMxRSxjQUFJLEVBQUNELFVBQUEsUUFBQUEsVUFBQSxVQUFBQSxNQUFPRSxXQUFXQyxTQUFRO0FBQzlCO1VBQ0Q7QUFFQVQsb0JBQVVBLFVBQVVTLE1BQU0sSUFBSUo7QUFDOUIsZ0JBQU1LLFlBQW9CQyxFQUFFTixRQUF1QjtBQUVuRE4sbUJBQVNZLEVBQUUsU0FBUyxFQUFFQyxLQUFLO1lBQzFCQyxNQUFNO1lBQ05DLE1BQU1sQjtVQUNQLENBQUM7QUFFREcsaUJBQU9nQixHQUFHLFNBQVMsTUFBWTtBQUFBLGdCQUFBQztBQUM5QixhQUFBQSxxQkFBQWxCLHVCQUFBLFFBQUFrQix1QkFBQSxVQUFBQSxtQkFBbUJDLEtBQUs7QUFDeEJQLHNCQUFVUSxLQUFLO0FBQ2ZwQixnQ0FBb0JZO1VBQ3JCLENBQUM7QUFFRCxjQUFJLENBQUNaLG1CQUFtQjtBQUV2QkEsZ0NBQW9CWTtBQUNwQlgsbUJBQU9hLEtBQUssV0FBVyxJQUFJO1VBQzVCLFdBQVdOLE1BQU1hLFFBQVEsaUJBQWlCLEdBQUc7QUFFNUNULHNCQUFVTyxLQUFLO1VBQ2hCLE9BQU87QUFFTmxCLG1CQUFPcUIsUUFBUSxPQUFPO1VBQ3ZCO0FBRUEsZ0JBQU1DLFVBQVVWLEVBQUUsU0FBUyxFQUFFVyxJQUFJLFdBQVcsT0FBTztBQUNuREQsa0JBQVFFLE9BQU94QixRQUFRTyxNQUFNRSxVQUFrQztBQUMvRGEsa0JBQVFHLFNBQVM5QixTQUFTO0FBRTFCWSxnQkFBTW1CLE9BQU87UUFDZDtNQUFBLFNBQUFDLEtBQUE7QUFBQXpCLG1CQUFBMEIsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQXpCLG1CQUFBMkIsRUFBQTtNQUFBO0FBRUEsVUFBSTVCLFVBQVVTLFNBQVMsR0FBRztBQUN6QixjQUFNb0IsU0FBU2xCLEVBQUUsU0FBUyxFQUFFVyxJQUFJLFdBQVcsT0FBTyxFQUFFUSxLQUFLbkQsV0FBVyxVQUFVLENBQUM7QUFDL0UsY0FBTW9ELGdCQUFnQnBCLEVBQUUsU0FBUyxFQUFFQyxLQUFLO1VBQ3ZDQyxNQUFNO1VBQ05DLE1BQU1sQjtRQUNQLENBQUM7QUFDRG1DLHNCQUFjaEIsR0FBRyxTQUFTLE1BQVk7QUFDckMsZ0JBQU1pQixhQUFxQnJCLEVBQUVYLFNBQVM7QUFDdENnQyxxQkFBV2QsS0FBSztBQUNoQnBCLDhCQUFvQmtDO1FBQ3JCLENBQUM7QUFDREgsZUFBT0ksUUFBUUYsYUFBYTtBQUM1QkYsZUFBT0wsU0FBUzlCLFNBQVM7TUFDMUIsV0FBV00sVUFBVVMsUUFBUTtBQUFBLFlBQUF5QjtBQUM1QixTQUFBQSxVQUFBbkMsWUFBQSxRQUFBbUMsWUFBQSxVQUFBQSxRQUFRVCxPQUFPO01BQ2hCO0lBQ0Q7RUFBQSxTQUFBQyxLQUFBO0FBQUExQyxjQUFBMkMsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQTFDLGNBQUE0QyxFQUFBO0VBQUE7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdldEJvZHkiLCAidGhlbiIsICJzd2l0Y2hlckpTIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImVudHJpZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiaW5kZXgiLCAiY29udGFpbmVyIiwgInZhbHVlIiwgInJhZGlvTmFtZSIsICJjb25jYXQiLCAiJHNlbGVjdGVkU3dpdGNoZXIiLCAiJHJhZGlvIiwgInN3aXRjaGVycyIsICJfaXRlcmF0b3IyIiwgImNoaWxkcmVuIiwgInZhbHVlcyIsICJfc3RlcDIiLCAic3dpdGNoZXIiLCAibGFiZWwiLCAicXVlcnlTZWxlY3RvciIsICJjaGlsZE5vZGVzIiwgImxlbmd0aCIsICIkc3dpdGNoZXIiLCAiJCIsICJwcm9wIiwgInR5cGUiLCAibmFtZSIsICJvbiIsICJfJHNlbGVjdGVkU3dpdGNoZXIiLCAiaGlkZSIsICJzaG93IiwgImRhdGFzZXQiLCAidHJpZ2dlciIsICIkcmFkaW9zIiwgImNzcyIsICJhcHBlbmQiLCAiYXBwZW5kVG8iLCAicmVtb3ZlIiwgImVyciIsICJlIiwgImYiLCAiJGxhYmVsIiwgInRleHQiLCAiJHNob3dBbGxSYWRpbyIsICIkc3dpdGNoZXJzIiwgInByZXBlbmQiLCAiXyRyYWRpbyJdCn0K
