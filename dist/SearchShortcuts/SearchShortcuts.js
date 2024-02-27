/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/User:Enterprisey/search-shortcuts.js}
 * @base {@link https://en.wikipedia.org/wiki/User:Guarapiranga/search-shortcuts.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/SearchShortcuts}
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

// dist/SearchShortcuts/SearchShortcuts.js
//! src/SearchShortcuts/modules/util/keydownListener.ts
var keydownListener = ($searchInput) => {
  var _$searchInput$val;
  const inputValue = (_$searchInput$val = $searchInput.val()) === null || _$searchInput$val === void 0 ? void 0 : _$searchInput$val.trim();
  if (!inputValue || !/^\{\{[^{}]+}}$/.test(inputValue)) {
    return;
  }
  if (inputValue.startsWith("{{#")) {
    if (inputValue.startsWith("{{#invoke:")) {
      $searchInput.val(inputValue.replace("{{#invoke:", "Module:").replace(/\s*\|.*/, "").replace("}}", ""));
    } else {
      $searchInput.val(inputValue.replace("{{#", "H:MW#").replace(/\s*\|.*/, "").replace("}}", ""));
    }
  } else {
    $searchInput.val(inputValue.replace("{{", "Template:").replace(/\s*\|.*/, "").replace("}}", ""));
  }
};
//! src/SearchShortcuts/modules/addKeyDownListener.ts
var addKeyDownListener = ($searchInput) => {
  $searchInput.on("keydown", () => {
    keydownListener($searchInput);
  });
};
//! src/SearchShortcuts/SearchShortcuts.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/SearchShortcuts/options.json
var searchInputSelector = "#searchInput";
//! src/SearchShortcuts/modules/getSearchInput.ts
var getSearchInput = ($body) => {
  const $searchInput = $body.find(searchInputSelector);
  return $searchInput;
};
//! src/SearchShortcuts/SearchShortcuts.ts
void (0, import_ext_gadget.getBody)().then(function searchShortcuts($body) {
  const $searchInput = getSearchInput($body);
  if (!$searchInput.length) {
    return;
  }
  addKeyDownListener($searchInput);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NlYXJjaFNob3J0Y3V0cy9tb2R1bGVzL3V0aWwva2V5ZG93bkxpc3RlbmVyLnRzIiwgInNyYy9TZWFyY2hTaG9ydGN1dHMvbW9kdWxlcy9hZGRLZXlEb3duTGlzdGVuZXIudHMiLCAic3JjL1NlYXJjaFNob3J0Y3V0cy9TZWFyY2hTaG9ydGN1dHMudHMiLCAic3JjL1NlYXJjaFNob3J0Y3V0cy9vcHRpb25zLmpzb24iLCAic3JjL1NlYXJjaFNob3J0Y3V0cy9tb2R1bGVzL2dldFNlYXJjaElucHV0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBrZXlkb3duTGlzdGVuZXIgPSAoJHNlYXJjaElucHV0OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgaW5wdXRWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gJHNlYXJjaElucHV0LnZhbCgpPy50cmltKCk7XG5cdGlmICghaW5wdXRWYWx1ZSB8fCAhL15cXHtcXHtbXnt9XSt9fSQvLnRlc3QoaW5wdXRWYWx1ZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoaW5wdXRWYWx1ZS5zdGFydHNXaXRoKCd7eyMnKSkge1xuXHRcdGlmIChpbnB1dFZhbHVlLnN0YXJ0c1dpdGgoJ3t7I2ludm9rZTonKSkge1xuXHRcdFx0JHNlYXJjaElucHV0LnZhbChcblx0XHRcdFx0aW5wdXRWYWx1ZVxuXHRcdFx0XHRcdC5yZXBsYWNlKCd7eyNpbnZva2U6JywgJ01vZHVsZTonKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXHMqXFx8LiovLCAnJylcblx0XHRcdFx0XHQucmVwbGFjZSgnfX0nLCAnJylcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzZWFyY2hJbnB1dC52YWwoXG5cdFx0XHRcdGlucHV0VmFsdWVcblx0XHRcdFx0XHQucmVwbGFjZSgne3sjJywgJ0g6TVcjJylcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxzKlxcfC4qLywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJ319JywgJycpXG5cdFx0XHQpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQkc2VhcmNoSW5wdXQudmFsKFxuXHRcdFx0aW5wdXRWYWx1ZVxuXHRcdFx0XHQucmVwbGFjZSgne3snLCAnVGVtcGxhdGU6Jylcblx0XHRcdFx0LnJlcGxhY2UoL1xccypcXHwuKi8sICcnKVxuXHRcdFx0XHQucmVwbGFjZSgnfX0nLCAnJylcblx0XHQpO1xuXHR9XG59O1xuXG5leHBvcnQge2tleWRvd25MaXN0ZW5lcn07XG4iLCAiaW1wb3J0IHtrZXlkb3duTGlzdGVuZXJ9IGZyb20gJy4vdXRpbC9rZXlkb3duTGlzdGVuZXInO1xuXG5jb25zdCBhZGRLZXlEb3duTGlzdGVuZXIgPSAoJHNlYXJjaElucHV0OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkID0+IHtcblx0JHNlYXJjaElucHV0Lm9uKCdrZXlkb3duJywgKCk6IHZvaWQgPT4ge1xuXHRcdGtleWRvd25MaXN0ZW5lcigkc2VhcmNoSW5wdXQpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkS2V5RG93bkxpc3RlbmVyfTtcbiIsICJpbXBvcnQge2FkZEtleURvd25MaXN0ZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2FkZEtleURvd25MaXN0ZW5lcic7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldFNlYXJjaElucHV0fSBmcm9tICcuL21vZHVsZXMvZ2V0U2VhcmNoSW5wdXQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHNlYXJjaFNob3J0Y3V0cygkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3QgJHNlYXJjaElucHV0OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSBnZXRTZWFyY2hJbnB1dCgkYm9keSk7XG5cdGlmICghJHNlYXJjaElucHV0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGFkZEtleURvd25MaXN0ZW5lcigkc2VhcmNoSW5wdXQpO1xufSk7XG4iLCAie1xuXHRcInNlYXJjaElucHV0U2VsZWN0b3JcIjogXCIjc2VhcmNoSW5wdXRcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcblxuY29uc3QgZ2V0U2VhcmNoSW5wdXQgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0+IHtcblx0Y29uc3QgJHNlYXJjaElucHV0OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KE9QVElPTlMuc2VhcmNoSW5wdXRTZWxlY3Rvcik7XG5cblx0cmV0dXJuICRzZWFyY2hJbnB1dDtcbn07XG5cbmV4cG9ydCB7Z2V0U2VhcmNoSW5wdXR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGtCQUFtQkMsa0JBQWlEO0FBQUEsTUFBQUM7QUFDekUsUUFBTUMsY0FBQUQsb0JBQWlDRCxhQUFhRyxJQUFJLE9BQUEsUUFBQUYsc0JBQUEsU0FBQSxTQUFqQkEsa0JBQW9CRyxLQUFLO0FBQ2hFLE1BQUksQ0FBQ0YsY0FBYyxDQUFDLGlCQUFpQkcsS0FBS0gsVUFBVSxHQUFHO0FBQ3REO0VBQ0Q7QUFFQSxNQUFJQSxXQUFXSSxXQUFXLEtBQUssR0FBRztBQUNqQyxRQUFJSixXQUFXSSxXQUFXLFlBQVksR0FBRztBQUN4Q04sbUJBQWFHLElBQ1pELFdBQ0VLLFFBQVEsY0FBYyxTQUFTLEVBQy9CQSxRQUFRLFdBQVcsRUFBRSxFQUNyQkEsUUFBUSxNQUFNLEVBQUUsQ0FDbkI7SUFDRCxPQUFPO0FBQ05QLG1CQUFhRyxJQUNaRCxXQUNFSyxRQUFRLE9BQU8sT0FBTyxFQUN0QkEsUUFBUSxXQUFXLEVBQUUsRUFDckJBLFFBQVEsTUFBTSxFQUFFLENBQ25CO0lBQ0Q7RUFDRCxPQUFPO0FBQ05QLGlCQUFhRyxJQUNaRCxXQUNFSyxRQUFRLE1BQU0sV0FBVyxFQUN6QkEsUUFBUSxXQUFXLEVBQUUsRUFDckJBLFFBQVEsTUFBTSxFQUFFLENBQ25CO0VBQ0Q7QUFDRDs7QUM1QkEsSUFBTUMscUJBQXNCUixrQkFBaUQ7QUFDNUVBLGVBQWFTLEdBQUcsV0FBVyxNQUFZO0FBQ3RDVixvQkFBZ0JDLFlBQVk7RUFDN0IsQ0FBQztBQUNGOztBQ0xBLElBQUFVLG9CQUFzQkMsUUFBQSxpQkFBQTs7QUNBckIsSUFBQUMsc0JBQXVCOztBQ0N4QixJQUFNQyxpQkFBa0JDLFdBQTZEO0FBQ3BGLFFBQU1kLGVBQXlDYyxNQUFNQyxLQUErQkgsbUJBQW1CO0FBRXZHLFNBQU9aO0FBQ1I7O0FGRkEsTUFBQSxHQUFLVSxrQkFBQU0sU0FBUSxFQUFFQyxLQUFLLFNBQVNDLGdCQUFnQkosT0FBc0M7QUFDbEYsUUFBTWQsZUFBeUNhLGVBQWVDLEtBQUs7QUFDbkUsTUFBSSxDQUFDZCxhQUFhbUIsUUFBUTtBQUN6QjtFQUNEO0FBRUFYLHFCQUFtQlIsWUFBWTtBQUNoQyxDQUFDOyIsCiAgIm5hbWVzIjogWyJrZXlkb3duTGlzdGVuZXIiLCAiJHNlYXJjaElucHV0IiwgIl8kc2VhcmNoSW5wdXQkdmFsIiwgImlucHV0VmFsdWUiLCAidmFsIiwgInRyaW0iLCAidGVzdCIsICJzdGFydHNXaXRoIiwgInJlcGxhY2UiLCAiYWRkS2V5RG93bkxpc3RlbmVyIiwgIm9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAic2VhcmNoSW5wdXRTZWxlY3RvciIsICJnZXRTZWFyY2hJbnB1dCIsICIkYm9keSIsICJmaW5kIiwgImdldEJvZHkiLCAidGhlbiIsICJzZWFyY2hTaG9ydGN1dHMiLCAibGVuZ3RoIl0KfQo=
