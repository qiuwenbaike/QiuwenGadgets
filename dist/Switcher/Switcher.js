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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1N3aXRjaGVyL1N3aXRjaGVyLnRzIiwgInNyYy9Td2l0Y2hlci9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHN3aXRjaGVySlMoKTogdm9pZCB7XG5cdGZvciAoY29uc3QgW2luZGV4LCBjb250YWluZXJdIG9mIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpdGNoZXItY29udGFpbmVyJyldLmVudHJpZXMoKSkge1xuXHRcdGNvbnN0IHJhZGlvTmFtZTogc3RyaW5nID0gYHN3aXRjaGVyLSR7aW5kZXh9YDtcblxuXHRcdGxldCAkc2VsZWN0ZWRTd2l0Y2hlcjogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXHRcdGxldCAkcmFkaW86IEpRdWVyeSB8IHVuZGVmaW5lZDtcblx0XHRjb25zdCBzd2l0Y2hlcnM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuXHRcdGZvciAoY29uc3Qgc3dpdGNoZXIgb2YgWy4uLmNvbnRhaW5lci5jaGlsZHJlbl0udmFsdWVzKCkpIHtcblx0XHRcdGNvbnN0IGxhYmVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBzd2l0Y2hlci5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoZXItbGFiZWwnKTtcblx0XHRcdGlmICghbGFiZWw/LmNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2hlcnNbc3dpdGNoZXJzLmxlbmd0aF0gPSBzd2l0Y2hlciBhcyBIVE1MRWxlbWVudDsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHRjb25zdCAkc3dpdGNoZXI6IEpRdWVyeSA9ICQoc3dpdGNoZXIgYXMgSFRNTEVsZW1lbnQpO1xuXG5cdFx0XHQkcmFkaW8gPSAkKCc8aW5wdXQ+JykucHJvcCh7XG5cdFx0XHRcdHR5cGU6ICdyYWRpbycsXG5cdFx0XHRcdG5hbWU6IHJhZGlvTmFtZSxcblx0XHRcdH0pO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuXHRcdFx0JHJhZGlvLm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRcdFx0JHNlbGVjdGVkU3dpdGNoZXI/LmhpZGUoKTtcblx0XHRcdFx0JHN3aXRjaGVyLnNob3coKTtcblx0XHRcdFx0JHNlbGVjdGVkU3dpdGNoZXIgPSAkc3dpdGNoZXI7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKCEkc2VsZWN0ZWRTd2l0Y2hlcikge1xuXHRcdFx0XHQvLyBNYXJrIHRoZSBmaXJzdCBvbmUgYXMgc2VsZWN0ZWRcblx0XHRcdFx0JHNlbGVjdGVkU3dpdGNoZXIgPSAkc3dpdGNoZXI7XG5cdFx0XHRcdCRyYWRpby5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG5cdFx0XHR9IGVsc2UgaWYgKGxhYmVsLmRhdGFzZXRbJ3N3aXRjaGVyRGVmYXVsdCddKSB7XG5cdFx0XHRcdC8vIEhpZGUgbm9uLWRlZmF1bHRcblx0XHRcdFx0JHN3aXRjaGVyLmhpZGUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEN1c3RvbSBkZWZhdWx0XG5cdFx0XHRcdCRyYWRpby50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCAkcmFkaW9zID0gJCgnPGxhYmVsPicpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0JHJhZGlvcy5hcHBlbmQoJHJhZGlvLCBsYWJlbC5jaGlsZE5vZGVzIGFzIHVua25vd24gYXMgRWxlbWVudFtdKTtcblx0XHRcdCRyYWRpb3MuYXBwZW5kVG8oY29udGFpbmVyKTtcblxuXHRcdFx0bGFiZWwucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHN3aXRjaGVycy5sZW5ndGggPiAxKSB7XG5cdFx0XHRjb25zdCAkbGFiZWwgPSAkKCc8bGFiZWw+JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJykudGV4dChnZXRNZXNzYWdlKCdTaG93IGFsbCcpKTtcblx0XHRcdGNvbnN0ICRzaG93QWxsUmFkaW8gPSAkKCc8aW5wdXQ+JykucHJvcCh7XG5cdFx0XHRcdHR5cGU6ICdyYWRpbycsXG5cdFx0XHRcdG5hbWU6IHJhZGlvTmFtZSxcblx0XHRcdH0pO1xuXHRcdFx0JHNob3dBbGxSYWRpby5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0ICRzd2l0Y2hlcnM6IEpRdWVyeSA9ICQoc3dpdGNoZXJzKTtcblx0XHRcdFx0JHN3aXRjaGVycy5zaG93KCk7XG5cdFx0XHRcdCRzZWxlY3RlZFN3aXRjaGVyID0gJHN3aXRjaGVycztcblx0XHRcdH0pO1xuXHRcdFx0JGxhYmVsLnByZXBlbmQoJHNob3dBbGxSYWRpbyk7XG5cdFx0XHQkbGFiZWwuYXBwZW5kVG8oY29udGFpbmVyKTtcblx0XHR9IGVsc2UgaWYgKHN3aXRjaGVycy5sZW5ndGgpIHtcblx0XHRcdCRyYWRpbz8ucmVtb3ZlKCk7XG5cdFx0fVxuXHR9XG59KTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J1Nob3cgYWxsJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaG93IGFsbCcsXG5cdFx0XHQnemgtaGFucyc6ICfmmL7npLrlhajpg6gnLFxuXHRcdFx0J3poLWhhbnQnOiAn6aGv56S65YWo6YOoJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNBdEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sYUFBQSxHQUFZRCxrQkFBQUUsVUFBUztNQUNwQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlSCxnQkFBZ0I7QUFFckMsSUFBTUksYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QURiQSxNQUFBLEdBQUtSLG1CQUFBUyxTQUFRLEVBQUVDLEtBQUssU0FBU0MsYUFBbUI7QUFBQSxNQUFBQyxZQUFBQywyQkFDZCxDQUFDLEdBQUdDLFNBQVNDLGlCQUFpQixxQkFBcUIsQ0FBQyxFQUFFQyxRQUFRLENBQUEsR0FBQUM7QUFBQSxNQUFBO0FBQS9GLFNBQUFMLFVBQUFNLEVBQUEsR0FBQSxFQUFBRCxRQUFBTCxVQUFBTyxFQUFBLEdBQUFDLFFBQWtHO0FBQUEsWUFBdkYsQ0FBQ0MsT0FBT0MsU0FBUyxJQUFBTCxNQUFBTTtBQUMzQixZQUFNQyxZQUFBLFlBQUFDLE9BQWdDSixLQUFLO0FBRTNDLFVBQUlLO0FBQ0osVUFBSUM7QUFDSixZQUFNQyxZQUEyQixDQUFBO0FBQUMsVUFBQUMsYUFBQWhCLDJCQUVYLENBQUMsR0FBR1MsVUFBVVEsUUFBUSxFQUFFQyxPQUFPLENBQUEsR0FBQUM7QUFBQSxVQUFBO0FBQXRELGFBQUFILFdBQUFYLEVBQUEsR0FBQSxFQUFBYyxTQUFBSCxXQUFBVixFQUFBLEdBQUFDLFFBQXlEO0FBQUEsZ0JBQTlDYSxXQUFBRCxPQUFBVDtBQUNWLGdCQUFNVyxRQUE0QkQsU0FBU0UsY0FBYyxpQkFBaUI7QUFDMUUsY0FBSSxFQUFDRCxVQUFBLFFBQUFBLFVBQUEsVUFBQUEsTUFBT0UsV0FBV0MsU0FBUTtBQUM5QjtVQUNEO0FBRUFULG9CQUFVQSxVQUFVUyxNQUFNLElBQUlKO0FBQzlCLGdCQUFNSyxZQUFvQkMsRUFBRU4sUUFBdUI7QUFFbkROLG1CQUFTWSxFQUFFLFNBQVMsRUFBRUMsS0FBSztZQUMxQkMsTUFBTTtZQUNOQyxNQUFNbEI7VUFDUCxDQUFDO0FBRURHLGlCQUFPZ0IsR0FBRyxTQUFTLE1BQVk7QUFBQSxnQkFBQUM7QUFDOUIsYUFBQUEscUJBQUFsQix1QkFBQSxRQUFBa0IsdUJBQUEsVUFBQUEsbUJBQW1CQyxLQUFLO0FBQ3hCUCxzQkFBVVEsS0FBSztBQUNmcEIsZ0NBQW9CWTtVQUNyQixDQUFDO0FBRUQsY0FBSSxDQUFDWixtQkFBbUI7QUFFdkJBLGdDQUFvQlk7QUFDcEJYLG1CQUFPYSxLQUFLLFdBQVcsSUFBSTtVQUM1QixXQUFXTixNQUFNYSxRQUFRLGlCQUFpQixHQUFHO0FBRTVDVCxzQkFBVU8sS0FBSztVQUNoQixPQUFPO0FBRU5sQixtQkFBT3FCLFFBQVEsT0FBTztVQUN2QjtBQUVBLGdCQUFNQyxVQUFVVixFQUFFLFNBQVMsRUFBRVcsSUFBSSxXQUFXLE9BQU87QUFDbkRELGtCQUFRRSxPQUFPeEIsUUFBUU8sTUFBTUUsVUFBa0M7QUFDL0RhLGtCQUFRRyxTQUFTOUIsU0FBUztBQUUxQlksZ0JBQU1tQixPQUFPO1FBQ2Q7TUFBQSxTQUFBQyxLQUFBO0FBQUF6QixtQkFBQTBCLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUF6QixtQkFBQTJCLEVBQUE7TUFBQTtBQUVBLFVBQUk1QixVQUFVUyxTQUFTLEdBQUc7QUFDekIsY0FBTW9CLFNBQVNsQixFQUFFLFNBQVMsRUFBRVcsSUFBSSxXQUFXLE9BQU8sRUFBRVEsS0FBS25ELFdBQVcsVUFBVSxDQUFDO0FBQy9FLGNBQU1vRCxnQkFBZ0JwQixFQUFFLFNBQVMsRUFBRUMsS0FBSztVQUN2Q0MsTUFBTTtVQUNOQyxNQUFNbEI7UUFDUCxDQUFDO0FBQ0RtQyxzQkFBY2hCLEdBQUcsU0FBUyxNQUFZO0FBQ3JDLGdCQUFNaUIsYUFBcUJyQixFQUFFWCxTQUFTO0FBQ3RDZ0MscUJBQVdkLEtBQUs7QUFDaEJwQiw4QkFBb0JrQztRQUNyQixDQUFDO0FBQ0RILGVBQU9JLFFBQVFGLGFBQWE7QUFDNUJGLGVBQU9MLFNBQVM5QixTQUFTO01BQzFCLFdBQVdNLFVBQVVTLFFBQVE7QUFBQSxZQUFBeUI7QUFDNUIsU0FBQUEsVUFBQW5DLFlBQUEsUUFBQW1DLFlBQUEsVUFBQUEsUUFBUVQsT0FBTztNQUNoQjtJQUNEO0VBQUEsU0FBQUMsS0FBQTtBQUFBMUMsY0FBQTJDLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUExQyxjQUFBNEMsRUFBQTtFQUFBO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZXRCb2R5IiwgInRoZW4iLCAic3dpdGNoZXJKUyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJlbnRyaWVzIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImluZGV4IiwgImNvbnRhaW5lciIsICJ2YWx1ZSIsICJyYWRpb05hbWUiLCAiY29uY2F0IiwgIiRzZWxlY3RlZFN3aXRjaGVyIiwgIiRyYWRpbyIsICJzd2l0Y2hlcnMiLCAiX2l0ZXJhdG9yMiIsICJjaGlsZHJlbiIsICJ2YWx1ZXMiLCAiX3N0ZXAyIiwgInN3aXRjaGVyIiwgImxhYmVsIiwgInF1ZXJ5U2VsZWN0b3IiLCAiY2hpbGROb2RlcyIsICJsZW5ndGgiLCAiJHN3aXRjaGVyIiwgIiQiLCAicHJvcCIsICJ0eXBlIiwgIm5hbWUiLCAib24iLCAiXyRzZWxlY3RlZFN3aXRjaGVyIiwgImhpZGUiLCAic2hvdyIsICJkYXRhc2V0IiwgInRyaWdnZXIiLCAiJHJhZGlvcyIsICJjc3MiLCAiYXBwZW5kIiwgImFwcGVuZFRvIiwgInJlbW92ZSIsICJlcnIiLCAiZSIsICJmIiwgIiRsYWJlbCIsICJ0ZXh0IiwgIiRzaG93QWxsUmFkaW8iLCAiJHN3aXRjaGVycyIsICJwcmVwZW5kIiwgIl8kcmFkaW8iXQp9Cg==
