/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Wikicache}
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

// dist/Wikicache/Wikicache.js
//! src/Wikicache/modules/constant.ts
var _document$querySelect;
var wgAction = mw.config.get("wgAction");
var WG_PAGE_NAME = mw.config.get("wgPageName");
//! src/Wikicache/modules/core.ts
var autoSaveId;
var autosaveInterval = 60;
var cacheKey = "wikicache-autosave-".concat(WG_PAGE_NAME);
var section = (_document$querySelect = document.querySelectorAll('input[name="wpSection"]')[0]) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value;
if (section) {
  cacheKey += "#".concat(section);
}
var save = () => {
  const saveObject = {
    _path: location.pathname + location.search,
    _date: /* @__PURE__ */ new Date(),
    "#wpTextbox1": document.querySelector("#wpTextbox1").value,
    "#wpSummary": document.querySelector("#wpSummary").value
  };
  mw.storage.remove(cacheKey);
  mw.storage.setObject(cacheKey, saveObject, 2592e3);
};
var autoSave = () => {
  clearTimeout(autoSaveId);
  autoSaveId = setTimeout(() => {
    save();
    autoSave();
  }, autosaveInterval * 1e3);
};
var onSubmit = () => {
  mw.storage.remove(cacheKey);
};
var init = () => {
  var _mw$storage$getObject, _document$querySelect2;
  const saveObject = (_mw$storage$getObject = mw.storage.getObject(cacheKey)) !== null && _mw$storage$getObject !== void 0 ? _mw$storage$getObject : {};
  if (saveObject["#wpTextbox1"]) {
    const wpTextbox1 = document.querySelector("#wpTextbox1");
    wpTextbox1.value = saveObject["#wpTextbox1"];
  }
  if (saveObject["#wpSummary"]) {
    const wpSummary = document.querySelector("#wpSummary");
    wpSummary.value = saveObject["#wpSummary"];
  }
  autoSave();
  (_document$querySelect2 = document.querySelector("#editform")) === null || _document$querySelect2 === void 0 || _document$querySelect2.addEventListener("submit", onSubmit);
};
//! src/Wikicache/Wikicache.ts
$(() => {
  if (!window.localStorage || !document.querySelector("#wpTextbox1") || !document.querySelector("#wpSummary")) {
    return;
  }
  if (["edit", "submit"].includes(wgAction)) {
    init();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2ljYWNoZS9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9XaWtpY2FjaGUvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9XaWtpY2FjaGUvV2lraWNhY2hlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCB3Z0FjdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJyk7XG5jb25zdCBXR19QQUdFX05BTUU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcblxuZXhwb3J0IHt3Z0FjdGlvbiwgV0dfUEFHRV9OQU1FfTtcbiIsICJ0eXBlIGF1dG9TYXZlT2JqZWN0ID0ge1xuXHRfcGF0aDogc3RyaW5nO1xuXHRfZGF0ZTogRGF0ZTtcblx0JyN3cFRleHRib3gxJz86IHN0cmluZztcblx0JyN3cFN1bW1hcnknPzogc3RyaW5nO1xufTtcblxuaW1wb3J0IHtXR19QQUdFX05BTUV9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5sZXQgYXV0b1NhdmVJZDogTm9kZUpTLlRpbWVvdXQgfCB1bmRlZmluZWQ7XG5jb25zdCBhdXRvc2F2ZUludGVydmFsOiBudW1iZXIgPSA2MDtcblxubGV0IGNhY2hlS2V5ID0gYHdpa2ljYWNoZS1hdXRvc2F2ZS0ke1dHX1BBR0VfTkFNRX1gO1xuY29uc3Qgc2VjdGlvbiA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwid3BTZWN0aW9uXCJdJylbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LnZhbHVlO1xuaWYgKHNlY3Rpb24pIHtcblx0Y2FjaGVLZXkgKz0gYCMke3NlY3Rpb259YDtcbn1cblxuY29uc3Qgc2F2ZSA9ICgpID0+IHtcblx0Y29uc3Qgc2F2ZU9iamVjdDogYXV0b1NhdmVPYmplY3QgPSB7XG5cdFx0X3BhdGg6IGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoLFxuXHRcdF9kYXRlOiBuZXcgRGF0ZSgpLFxuXHRcdCcjd3BUZXh0Ym94MSc6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BUZXh0Ym94MScpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlLFxuXHRcdCcjd3BTdW1tYXJ5JzogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cFN1bW1hcnknKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcblx0fTtcblx0bXcuc3RvcmFnZS5yZW1vdmUoY2FjaGVLZXkpO1xuXHRtdy5zdG9yYWdlLnNldE9iamVjdChjYWNoZUtleSwgc2F2ZU9iamVjdCwgMjU5MmUzKTsgLy8gMzAgZGF5c1xufTtcblxuY29uc3QgYXV0b1NhdmUgPSAoKSA9PiB7XG5cdGNsZWFyVGltZW91dChhdXRvU2F2ZUlkKTtcblx0YXV0b1NhdmVJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdHNhdmUoKTtcblx0XHRhdXRvU2F2ZSgpO1xuXHR9LCBhdXRvc2F2ZUludGVydmFsICogMTAwMCk7XG59O1xuXG5jb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcblx0bXcuc3RvcmFnZS5yZW1vdmUoY2FjaGVLZXkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXQgPSAoKSA9PiB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0Y29uc3Qgc2F2ZU9iamVjdDogYXV0b1NhdmVPYmplY3QgPSBtdy5zdG9yYWdlLmdldE9iamVjdChjYWNoZUtleSkgPz8ge307XG5cdGlmIChzYXZlT2JqZWN0Wycjd3BUZXh0Ym94MSddKSB7XG5cdFx0Y29uc3Qgd3BUZXh0Ym94MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cFRleHRib3gxJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcblx0XHR3cFRleHRib3gxLnZhbHVlID0gc2F2ZU9iamVjdFsnI3dwVGV4dGJveDEnXTtcblx0fVxuXHRpZiAoc2F2ZU9iamVjdFsnI3dwU3VtbWFyeSddKSB7XG5cdFx0Y29uc3Qgd3BTdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwU3VtbWFyeScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0d3BTdW1tYXJ5LnZhbHVlID0gc2F2ZU9iamVjdFsnI3dwU3VtbWFyeSddO1xuXHR9XG5cdGF1dG9TYXZlKCk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0Zm9ybScpPy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XG59O1xuIiwgImltcG9ydCB7aW5pdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHt3Z0FjdGlvbn0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcblxuJCgoKSA9PiB7XG5cdGlmICghd2luZG93LmxvY2FsU3RvcmFnZSB8fCAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwVGV4dGJveDEnKSB8fCAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwU3VtbWFyeScpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikpIHtcblx0XHRpbml0KCk7XG5cdH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsV0FBV0MsR0FBR0MsT0FBT0MsSUFBSSxVQUFVO0FBQ3pDLElBQU1DLGVBQXVCSCxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7O0FDUXZELElBQUlFO0FBQ0osSUFBTUMsbUJBQTJCO0FBRWpDLElBQUlDLFdBQUEsc0JBQUFDLE9BQWlDSixZQUFZO0FBQ2pELElBQU1LLFdBQUFDLHdCQUFXQyxTQUFTQyxpQkFBaUIseUJBQXlCLEVBQUUsQ0FBQyxPQUFBLFFBQUFGLDBCQUFBLFNBQUEsU0FBdERBLHNCQUE4RUc7QUFDL0YsSUFBSUosU0FBUztBQUNaRixjQUFBLElBQUFDLE9BQWdCQyxPQUFPO0FBQ3hCO0FBRUEsSUFBTUssT0FBT0EsTUFBTTtBQUNsQixRQUFNQyxhQUE2QjtJQUNsQ0MsT0FBT0MsU0FBU0MsV0FBV0QsU0FBU0U7SUFDcENDLE9BQU8sb0JBQUlDLEtBQUs7SUFDaEIsZUFBZ0JWLFNBQVNXLGNBQWMsYUFBYSxFQUEwQlQ7SUFDOUUsY0FBZUYsU0FBU1csY0FBYyxZQUFZLEVBQXVCVDtFQUMxRTtBQUNBWixLQUFHc0IsUUFBUUMsT0FBT2pCLFFBQVE7QUFDMUJOLEtBQUdzQixRQUFRRSxVQUFVbEIsVUFBVVEsWUFBWSxNQUFNO0FBQ2xEO0FBRUEsSUFBTVcsV0FBV0EsTUFBTTtBQUN0QkMsZUFBYXRCLFVBQVU7QUFDdkJBLGVBQWF1QixXQUFXLE1BQU07QUFDN0JkLFNBQUs7QUFDTFksYUFBUztFQUNWLEdBQUdwQixtQkFBbUIsR0FBSTtBQUMzQjtBQUVBLElBQU11QixXQUFXQSxNQUFNO0FBQ3RCNUIsS0FBR3NCLFFBQVFDLE9BQU9qQixRQUFRO0FBQzNCO0FBRU8sSUFBTXVCLE9BQU9BLE1BQU07QUFBQSxNQUFBQyx1QkFBQUM7QUFFekIsUUFBTWpCLGNBQUFnQix3QkFBNkI5QixHQUFHc0IsUUFBUVUsVUFBVTFCLFFBQVEsT0FBQSxRQUFBd0IsMEJBQUEsU0FBQUEsd0JBQUssQ0FBQztBQUN0RSxNQUFJaEIsV0FBVyxhQUFhLEdBQUc7QUFDOUIsVUFBTW1CLGFBQWF2QixTQUFTVyxjQUFjLGFBQWE7QUFDdkRZLGVBQVdyQixRQUFRRSxXQUFXLGFBQWE7RUFDNUM7QUFDQSxNQUFJQSxXQUFXLFlBQVksR0FBRztBQUM3QixVQUFNb0IsWUFBWXhCLFNBQVNXLGNBQWMsWUFBWTtBQUNyRGEsY0FBVXRCLFFBQVFFLFdBQVcsWUFBWTtFQUMxQztBQUNBVyxXQUFTO0FBQ1QsR0FBQU0seUJBQUFyQixTQUFTVyxjQUFjLFdBQVcsT0FBQSxRQUFBVSwyQkFBQSxVQUFsQ0EsdUJBQXFDSSxpQkFBaUIsVUFBVVAsUUFBUTtBQUN6RTs7QUNuREFRLEVBQUUsTUFBTTtBQUNQLE1BQUksQ0FBQ0MsT0FBT0MsZ0JBQWdCLENBQUM1QixTQUFTVyxjQUFjLGFBQWEsS0FBSyxDQUFDWCxTQUFTVyxjQUFjLFlBQVksR0FBRztBQUM1RztFQUNEO0FBRUEsTUFBSSxDQUFDLFFBQVEsUUFBUSxFQUFFa0IsU0FBU3hDLFFBQVEsR0FBRztBQUMxQzhCLFNBQUs7RUFDTjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbIndnQWN0aW9uIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfUEFHRV9OQU1FIiwgImF1dG9TYXZlSWQiLCAiYXV0b3NhdmVJbnRlcnZhbCIsICJjYWNoZUtleSIsICJjb25jYXQiLCAic2VjdGlvbiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJ2YWx1ZSIsICJzYXZlIiwgInNhdmVPYmplY3QiLCAiX3BhdGgiLCAibG9jYXRpb24iLCAicGF0aG5hbWUiLCAic2VhcmNoIiwgIl9kYXRlIiwgIkRhdGUiLCAicXVlcnlTZWxlY3RvciIsICJzdG9yYWdlIiwgInJlbW92ZSIsICJzZXRPYmplY3QiLCAiYXV0b1NhdmUiLCAiY2xlYXJUaW1lb3V0IiwgInNldFRpbWVvdXQiLCAib25TdWJtaXQiLCAiaW5pdCIsICJfbXckc3RvcmFnZSRnZXRPYmplY3QiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJnZXRPYmplY3QiLCAid3BUZXh0Ym94MSIsICJ3cFN1bW1hcnkiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICIkIiwgIndpbmRvdyIsICJsb2NhbFN0b3JhZ2UiLCAiaW5jbHVkZXMiXQp9Cg==
