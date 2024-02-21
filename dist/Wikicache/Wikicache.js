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
var _document$querySelect;
//! src/Wikicache/modules/constant.ts
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
    "input[name=wpTextbox1]": document.querySelector("input[name=wpTextbox1]").value,
    "input[name=wpSummary]": document.querySelector("input[name=wpSummary]").value
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
  if (saveObject["input[name=wpTextbox1]"]) {
    const wpTextbox1 = document.querySelector("input[name=wpTextbox1]");
    wpTextbox1.value = saveObject["input[name=wpTextbox1]"];
  }
  if (saveObject["input[name=wpSummary]"]) {
    const wpSummary = document.querySelector("input[name=wpSummary]");
    wpSummary.value = saveObject["input[name=wpSummary]"];
  }
  autoSave();
  (_document$querySelect2 = document.querySelector("#editform")) === null || _document$querySelect2 === void 0 || _document$querySelect2.addEventListener("submit", onSubmit);
};
//! src/Wikicache/Wikicache.ts
$(() => {
  if (!window.localStorage || !document.querySelector("input[name=wpTextbox1]") || !document.querySelector("input[name=wpSummary]")) {
    return;
  }
  if (["edit", "submit"].includes(wgAction)) {
    init();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2ljYWNoZS9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9XaWtpY2FjaGUvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9XaWtpY2FjaGUvV2lraWNhY2hlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCB3Z0FjdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJyk7XG5jb25zdCBXR19QQUdFX05BTUU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcblxuZXhwb3J0IHt3Z0FjdGlvbiwgV0dfUEFHRV9OQU1FfTtcbiIsICJ0eXBlIGF1dG9TYXZlT2JqZWN0ID0ge1xuXHRfcGF0aDogc3RyaW5nO1xuXHRfZGF0ZTogRGF0ZTtcblx0J2lucHV0W25hbWU9d3BUZXh0Ym94MV0nPzogc3RyaW5nO1xuXHQnaW5wdXRbbmFtZT13cFN1bW1hcnldJz86IHN0cmluZztcbn07XG5cbmltcG9ydCB7V0dfUEFHRV9OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcblxubGV0IGF1dG9TYXZlSWQ6IE5vZGVKUy5UaW1lb3V0IHwgdW5kZWZpbmVkO1xuY29uc3QgYXV0b3NhdmVJbnRlcnZhbDogbnVtYmVyID0gNjA7XG5cbmxldCBjYWNoZUtleSA9IGB3aWtpY2FjaGUtYXV0b3NhdmUtJHtXR19QQUdFX05BTUV9YDtcbmNvbnN0IHNlY3Rpb24gPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cIndwU2VjdGlvblwiXScpWzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQpPy52YWx1ZTtcbmlmIChzZWN0aW9uKSB7XG5cdGNhY2hlS2V5ICs9IGAjJHtzZWN0aW9ufWA7XG59XG5cbmNvbnN0IHNhdmUgPSAoKSA9PiB7XG5cdGNvbnN0IHNhdmVPYmplY3Q6IGF1dG9TYXZlT2JqZWN0ID0ge1xuXHRcdF9wYXRoOiBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCxcblx0XHRfZGF0ZTogbmV3IERhdGUoKSxcblx0XHQnaW5wdXRbbmFtZT13cFRleHRib3gxXSc6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXdwVGV4dGJveDFdJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUsXG5cdFx0J2lucHV0W25hbWU9d3BTdW1tYXJ5XSc6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcblx0fTtcblx0bXcuc3RvcmFnZS5yZW1vdmUoY2FjaGVLZXkpO1xuXHRtdy5zdG9yYWdlLnNldE9iamVjdChjYWNoZUtleSwgc2F2ZU9iamVjdCwgMjU5MmUzKTsgLy8gMzAgZGF5c1xufTtcblxuY29uc3QgYXV0b1NhdmUgPSAoKSA9PiB7XG5cdGNsZWFyVGltZW91dChhdXRvU2F2ZUlkKTtcblx0YXV0b1NhdmVJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdHNhdmUoKTtcblx0XHRhdXRvU2F2ZSgpO1xuXHR9LCBhdXRvc2F2ZUludGVydmFsICogMTAwMCk7XG59O1xuXG5jb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcblx0bXcuc3RvcmFnZS5yZW1vdmUoY2FjaGVLZXkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXQgPSAoKSA9PiB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0Y29uc3Qgc2F2ZU9iamVjdDogYXV0b1NhdmVPYmplY3QgPSBtdy5zdG9yYWdlLmdldE9iamVjdChjYWNoZUtleSkgPz8ge307XG5cdGlmIChzYXZlT2JqZWN0WydpbnB1dFtuYW1lPXdwVGV4dGJveDFdJ10pIHtcblx0XHRjb25zdCB3cFRleHRib3gxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cFRleHRib3gxXScpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG5cdFx0d3BUZXh0Ym94MS52YWx1ZSA9IHNhdmVPYmplY3RbJ2lucHV0W25hbWU9d3BUZXh0Ym94MV0nXTtcblx0fVxuXHRpZiAoc2F2ZU9iamVjdFsnaW5wdXRbbmFtZT13cFN1bW1hcnldJ10pIHtcblx0XHRjb25zdCB3cFN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwU3VtbWFyeS52YWx1ZSA9IHNhdmVPYmplY3RbJ2lucHV0W25hbWU9d3BTdW1tYXJ5XSddO1xuXHR9XG5cdGF1dG9TYXZlKCk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0Zm9ybScpPy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XG59O1xuIiwgImltcG9ydCB7aW5pdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHt3Z0FjdGlvbn0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcblxuJCgoKSA9PiB7XG5cdGlmIChcblx0XHQhd2luZG93LmxvY2FsU3RvcmFnZSB8fFxuXHRcdCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXdwVGV4dGJveDFdJykgfHxcblx0XHQhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cFN1bW1hcnldJylcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikpIHtcblx0XHRpbml0KCk7XG5cdH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsV0FBV0MsR0FBR0MsT0FBT0MsSUFBSSxVQUFVO0FBQ3pDLElBQU1DLGVBQXVCSCxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7O0FDUXZELElBQUlFO0FBQ0osSUFBTUMsbUJBQTJCO0FBRWpDLElBQUlDLFdBQUEsc0JBQUFDLE9BQWlDSixZQUFZO0FBQ2pELElBQU1LLFdBQUFDLHdCQUFXQyxTQUFTQyxpQkFBaUIseUJBQXlCLEVBQUUsQ0FBQyxPQUFBLFFBQUFGLDBCQUFBLFNBQUEsU0FBdERBLHNCQUE4RUc7QUFDL0YsSUFBSUosU0FBUztBQUNaRixjQUFBLElBQUFDLE9BQWdCQyxPQUFPO0FBQ3hCO0FBRUEsSUFBTUssT0FBT0EsTUFBTTtBQUNsQixRQUFNQyxhQUE2QjtJQUNsQ0MsT0FBT0MsU0FBU0MsV0FBV0QsU0FBU0U7SUFDcENDLE9BQU8sb0JBQUlDLEtBQUs7SUFDaEIsMEJBQTJCVixTQUFTVyxjQUFjLHdCQUF3QixFQUEwQlQ7SUFDcEcseUJBQTBCRixTQUFTVyxjQUFjLHVCQUF1QixFQUF1QlQ7RUFDaEc7QUFDQVosS0FBR3NCLFFBQVFDLE9BQU9qQixRQUFRO0FBQzFCTixLQUFHc0IsUUFBUUUsVUFBVWxCLFVBQVVRLFlBQVksTUFBTTtBQUNsRDtBQUVBLElBQU1XLFdBQVdBLE1BQU07QUFDdEJDLGVBQWF0QixVQUFVO0FBQ3ZCQSxlQUFhdUIsV0FBVyxNQUFNO0FBQzdCZCxTQUFLO0FBQ0xZLGFBQVM7RUFDVixHQUFHcEIsbUJBQW1CLEdBQUk7QUFDM0I7QUFFQSxJQUFNdUIsV0FBV0EsTUFBTTtBQUN0QjVCLEtBQUdzQixRQUFRQyxPQUFPakIsUUFBUTtBQUMzQjtBQUVPLElBQU11QixPQUFPQSxNQUFNO0FBQUEsTUFBQUMsdUJBQUFDO0FBRXpCLFFBQU1qQixjQUFBZ0Isd0JBQTZCOUIsR0FBR3NCLFFBQVFVLFVBQVUxQixRQUFRLE9BQUEsUUFBQXdCLDBCQUFBLFNBQUFBLHdCQUFLLENBQUM7QUFDdEUsTUFBSWhCLFdBQVcsd0JBQXdCLEdBQUc7QUFDekMsVUFBTW1CLGFBQWF2QixTQUFTVyxjQUFjLHdCQUF3QjtBQUNsRVksZUFBV3JCLFFBQVFFLFdBQVcsd0JBQXdCO0VBQ3ZEO0FBQ0EsTUFBSUEsV0FBVyx1QkFBdUIsR0FBRztBQUN4QyxVQUFNb0IsWUFBWXhCLFNBQVNXLGNBQWMsdUJBQXVCO0FBQ2hFYSxjQUFVdEIsUUFBUUUsV0FBVyx1QkFBdUI7RUFDckQ7QUFDQVcsV0FBUztBQUNULEdBQUFNLHlCQUFBckIsU0FBU1csY0FBYyxXQUFXLE9BQUEsUUFBQVUsMkJBQUEsVUFBbENBLHVCQUFxQ0ksaUJBQWlCLFVBQVVQLFFBQVE7QUFDekU7O0FDbkRBUSxFQUFFLE1BQU07QUFDUCxNQUNDLENBQUNDLE9BQU9DLGdCQUNSLENBQUM1QixTQUFTVyxjQUFjLHdCQUF3QixLQUNoRCxDQUFDWCxTQUFTVyxjQUFjLHVCQUF1QixHQUM5QztBQUNEO0VBQ0Q7QUFFQSxNQUFJLENBQUMsUUFBUSxRQUFRLEVBQUVrQixTQUFTeEMsUUFBUSxHQUFHO0FBQzFDOEIsU0FBSztFQUNOO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsid2dBY3Rpb24iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19QQUdFX05BTUUiLCAiYXV0b1NhdmVJZCIsICJhdXRvc2F2ZUludGVydmFsIiwgImNhY2hlS2V5IiwgImNvbmNhdCIsICJzZWN0aW9uIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInZhbHVlIiwgInNhdmUiLCAic2F2ZU9iamVjdCIsICJfcGF0aCIsICJsb2NhdGlvbiIsICJwYXRobmFtZSIsICJzZWFyY2giLCAiX2RhdGUiLCAiRGF0ZSIsICJxdWVyeVNlbGVjdG9yIiwgInN0b3JhZ2UiLCAicmVtb3ZlIiwgInNldE9iamVjdCIsICJhdXRvU2F2ZSIsICJjbGVhclRpbWVvdXQiLCAic2V0VGltZW91dCIsICJvblN1Ym1pdCIsICJpbml0IiwgIl9tdyRzdG9yYWdlJGdldE9iamVjdCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QyIiwgImdldE9iamVjdCIsICJ3cFRleHRib3gxIiwgIndwU3VtbWFyeSIsICJhZGRFdmVudExpc3RlbmVyIiwgIiQiLCAid2luZG93IiwgImxvY2FsU3RvcmFnZSIsICJpbmNsdWRlcyJdCn0K
