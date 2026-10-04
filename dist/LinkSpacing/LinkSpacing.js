/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/LinkSpacing}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * Inspired by Kcx36 at {@link https://zh.wikipedia.org/w/index.php?diff=prev&oldid=84670731}
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

// dist/LinkSpacing/LinkSpacing.js
//! src/LinkSpacing/util/LinkSpacing.module.less
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
var linkSpace = "LinkSpacing-module__linkSpace_E9P2BW__4100";
//! src/LinkSpacing/util/LinkSpace.ts
var LinkSpace = () => {
  const spaceElement = document.createElement("span");
  spaceElement.className = linkSpace;
  return spaceElement;
};
//! src/LinkSpacing/LinkSpacing.ts
var links = document.querySelectorAll(".mw-parser-output a");
var _iterator = _createForOfIteratorHelper(links.entries());
var _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
    const [index, link] = _step.value;
    if (!(index > 0)) {
      continue;
    }
    const beforeElement = links[index - 1];
    if (!beforeElement) {
      continue;
    }
    if (link.classList.contains("mw-file-description") || link.classList.contains("mw-file-source") || beforeElement.classList.contains("mw-file-description") || beforeElement.classList.contains("mw-file-source") || link.querySelector("img") || beforeElement.querySelector("img")) {
      continue;
    }
    if (beforeElement.nextSibling === link) {
      const spacer = LinkSpace().cloneNode();
      link.before(spacer);
    }
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xpbmtTcGFjaW5nL3V0aWwvTGlua1NwYWNpbmcubW9kdWxlLmxlc3MiLCAic3JjL0xpbmtTcGFjaW5nL3V0aWwvTGlua1NwYWNlLnRzIiwgInNyYy9MaW5rU3BhY2luZy9MaW5rU3BhY2luZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9MaW5rU3BhY2luZy91dGlsL0xpbmtTcGFjaW5nLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgbGlua1NwYWNlID0gXCJMaW5rU3BhY2luZy1tb2R1bGVfX2xpbmtTcGFjZV9FOVAyQldfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImxpbmtTcGFjZVwiOiBsaW5rU3BhY2Vcbn07XG4gICAgICAiLCAiaW1wb3J0IHtsaW5rU3BhY2V9IGZyb20gJy4vTGlua1NwYWNpbmcubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBMaW5rU3BhY2UgPSAoKSA9PiB7XG5cdGNvbnN0IHNwYWNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0c3BhY2VFbGVtZW50LmNsYXNzTmFtZSA9IGxpbmtTcGFjZTtcblx0cmV0dXJuIHNwYWNlRWxlbWVudDtcbn07XG5cbmV4cG9ydCB7TGlua1NwYWNlfTtcbiIsICJpbXBvcnQge0xpbmtTcGFjZX0gZnJvbSAnLi91dGlsL0xpbmtTcGFjZSc7XG5cbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm13LXBhcnNlci1vdXRwdXQgYScpO1xuXG5mb3IgKGNvbnN0IFtpbmRleCwgbGlua10gb2YgbGlua3MuZW50cmllcygpKSB7XG5cdGlmICghKGluZGV4ID4gMCkpIHtcblx0XHRjb250aW51ZTtcblx0fVxuXG5cdGNvbnN0IGJlZm9yZUVsZW1lbnQgPSBsaW5rc1tpbmRleCAtIDFdO1xuXHRpZiAoIWJlZm9yZUVsZW1lbnQpIHtcblx0XHRjb250aW51ZTtcblx0fVxuXG5cdGlmIChcblx0XHRsaW5rLmNsYXNzTGlzdC5jb250YWlucygnbXctZmlsZS1kZXNjcmlwdGlvbicpIHx8XG5cdFx0bGluay5jbGFzc0xpc3QuY29udGFpbnMoJ213LWZpbGUtc291cmNlJykgfHxcblx0XHRiZWZvcmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbXctZmlsZS1kZXNjcmlwdGlvbicpIHx8XG5cdFx0YmVmb3JlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ213LWZpbGUtc291cmNlJykgfHxcblx0XHRsaW5rLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpIHx8XG5cdFx0YmVmb3JlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuXHQpIHtcblx0XHRjb250aW51ZTtcblx0fVxuXG5cdGlmIChiZWZvcmVFbGVtZW50Lm5leHRTaWJsaW5nID09PSBsaW5rKSB7XG5cdFx0Y29uc3Qgc3BhY2VyID0gTGlua1NwYWNlKCkuY2xvbmVOb2RlKCk7XG5cdFx0bGluay5iZWZvcmUoc3BhY2VyKTtcblx0fVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNPLElBQU1BLFlBQVk7O0FDQ3pCLElBQU1DLFlBQVlBLE1BQU07QUFDdkIsUUFBTUMsZUFBZUMsU0FBU0MsY0FBYyxNQUFNO0FBQ2xERixlQUFhRyxZQUFZTDtBQUN6QixTQUFPRTtBQUNSOztBQ0pBLElBQU1JLFFBQVFILFNBQVNJLGlCQUFpQixxQkFBcUI7QUFBQSxJQUFBQyxZQUFBQywyQkFFakNILE1BQU1JLFFBQVEsQ0FBQTtBQUZtQixJQUVuQkM7QUFBQSxJQUFBO0FBQTFDLE9BQUFILFVBQUFJLEVBQUEsR0FBQSxFQUFBRCxRQUFBSCxVQUFBSyxFQUFBLEdBQUFDLFFBQTZDO0FBQUEsVUFBbEMsQ0FBQ0MsT0FBT0MsSUFBSSxJQUFBTCxNQUFBTTtBQUN0QixRQUFJLEVBQUVGLFFBQVEsSUFBSTtBQUNqQjtJQUNEO0FBRUEsVUFBTUcsZ0JBQWdCWixNQUFNUyxRQUFRLENBQUM7QUFDckMsUUFBSSxDQUFDRyxlQUFlO0FBQ25CO0lBQ0Q7QUFFQSxRQUNDRixLQUFLRyxVQUFVQyxTQUFTLHFCQUFxQixLQUM3Q0osS0FBS0csVUFBVUMsU0FBUyxnQkFBZ0IsS0FDeENGLGNBQWNDLFVBQVVDLFNBQVMscUJBQXFCLEtBQ3RERixjQUFjQyxVQUFVQyxTQUFTLGdCQUFnQixLQUNqREosS0FBS0ssY0FBYyxLQUFLLEtBQ3hCSCxjQUFjRyxjQUFjLEtBQUssR0FDaEM7QUFDRDtJQUNEO0FBRUEsUUFBSUgsY0FBY0ksZ0JBQWdCTixNQUFNO0FBQ3ZDLFlBQU1PLFNBQVN0QixVQUFVLEVBQUV1QixVQUFVO0FBQ3JDUixXQUFLUyxPQUFPRixNQUFNO0lBQ25CO0VBQ0Q7QUFBQSxTQUFBRyxLQUFBO0FBQUFsQixZQUFBbUIsRUFBQUQsR0FBQTtBQUFBLFVBQUE7QUFBQWxCLFlBQUFvQixFQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbImxpbmtTcGFjZSIsICJMaW5rU3BhY2UiLCAic3BhY2VFbGVtZW50IiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImxpbmtzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImVudHJpZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiaW5kZXgiLCAibGluayIsICJ2YWx1ZSIsICJiZWZvcmVFbGVtZW50IiwgImNsYXNzTGlzdCIsICJjb250YWlucyIsICJxdWVyeVNlbGVjdG9yIiwgIm5leHRTaWJsaW5nIiwgInNwYWNlciIsICJjbG9uZU5vZGUiLCAiYmVmb3JlIiwgImVyciIsICJlIiwgImYiXQp9Cg==
