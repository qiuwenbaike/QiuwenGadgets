/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/SmoothTOC}
 * @author 安忆 <i@anyi.in>
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

// dist/SmoothTOC/SmoothTOC.js
//! src/SmoothTOC/modules/core.ts
var import_ext_gadget = require("ext.gadget.Util");
var smoothTOC = () => {
  const checkA11yKey = (event) => {
    if (event.type === "keydown" && event.key !== "Enter" && event.key !== " ") {
      return true;
    }
    return false;
  };
  const eventListener = ($element, event) => {
    if (checkA11yKey(event)) {
      return;
    }
    const herf = $element.attr("href");
    if (!herf) {
      return;
    }
    const anchorOffset = $(herf).offset();
    if (!anchorOffset) {
      return;
    }
    event.preventDefault();
    (0, import_ext_gadget.scrollTop)(mw.config.get("skin") === "vector" ? "".concat(anchorOffset.top, "px") : "".concat(anchorOffset.top - 60, "px"));
  };
  const smoothToc = () => {
    const $body = $("body");
    $body.find("#toc a, #p-toc a, .sidebar-toc-link").each((_index, element) => {
      const $element = $(element);
      $element.on("click", (event) => {
        eventListener($element, event);
      });
      $element.on("keydown", (event) => {
        eventListener($element, event);
      });
    });
  };
  setTimeout(smoothToc, 0);
};
//! src/SmoothTOC/SmoothTOC.ts
$(smoothTOC);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Ntb290aFRPQy9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1Ntb290aFRPQy9TbW9vdGhUT0MudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7c2Nyb2xsVG9wfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5leHBvcnQgY29uc3Qgc21vb3RoVE9DID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBjaGVja0ExMXlLZXkgPSAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCk6IGJvb2xlYW4gPT4ge1xuXHRcdGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicgJiYgZXZlbnQua2V5ICE9PSAnRW50ZXInICYmIGV2ZW50LmtleSAhPT0gJyAnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRjb25zdCBldmVudExpc3RlbmVyID0gKCRlbGVtZW50OiBKUXVlcnksIGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoY2hlY2tBMTF5S2V5KGV2ZW50KSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBoZXJmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKCFoZXJmKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGFuY2hvck9mZnNldDogSlF1ZXJ5LkNvb3JkaW5hdGVzIHwgdW5kZWZpbmVkID0gJChoZXJmKS5vZmZzZXQoKTtcblx0XHRpZiAoIWFuY2hvck9mZnNldCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHNjcm9sbFRvcChtdy5jb25maWcuZ2V0KCdza2luJykgPT09ICd2ZWN0b3InID8gYCR7YW5jaG9yT2Zmc2V0LnRvcH1weGAgOiBgJHthbmNob3JPZmZzZXQudG9wIC0gNjB9cHhgKTtcblx0fTtcblx0Y29uc3Qgc21vb3RoVG9jID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0XHQkYm9keS5maW5kKCcjdG9jIGEsICNwLXRvYyBhLCAuc2lkZWJhci10b2MtbGluaycpLmVhY2goKF9pbmRleDogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHQkZWxlbWVudC5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGV2ZW50TGlzdGVuZXIoJGVsZW1lbnQsIGV2ZW50KTtcblx0XHRcdH0pO1xuXHRcdFx0JGVsZW1lbnQub24oJ2tleWRvd24nLCAoZXZlbnQ6IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnRMaXN0ZW5lcigkZWxlbWVudCwgZXZlbnQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cdHNldFRpbWVvdXQoc21vb3RoVG9jLCAwKTtcbn07XG4iLCAiaW1wb3J0IHtzbW9vdGhUT0N9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuJChzbW9vdGhUT0MpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7OztBQUFBLElBQUFBLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUVqQixJQUFNQyxZQUFZQSxNQUFZO0FBQ3BDLFFBQU1DLGVBQWdCQyxXQUE0RDtBQUNqRixRQUFJQSxNQUFNQyxTQUFTLGFBQWFELE1BQU1FLFFBQVEsV0FBV0YsTUFBTUUsUUFBUSxLQUFLO0FBQzNFLGFBQU87SUFDUjtBQUNBLFdBQU87RUFDUjtBQUNBLFFBQU1DLGdCQUFnQkEsQ0FBQ0MsVUFBa0JKLFVBQXlEO0FBQ2pHLFFBQUlELGFBQWFDLEtBQUssR0FBRztBQUN4QjtJQUNEO0FBQ0EsVUFBTUssT0FBMkJELFNBQVNFLEtBQUssTUFBTTtBQUNyRCxRQUFJLENBQUNELE1BQU07QUFDVjtJQUNEO0FBQ0EsVUFBTUUsZUFBK0NDLEVBQUVILElBQUksRUFBRUksT0FBTztBQUNwRSxRQUFJLENBQUNGLGNBQWM7QUFDbEI7SUFDRDtBQUNBUCxVQUFNVSxlQUFlO0FBQ3JCLEtBQUEsR0FBQWQsa0JBQUFlLFdBQVVDLEdBQUdDLE9BQU9DLElBQUksTUFBTSxNQUFNLFdBQUEsR0FBQUMsT0FBY1IsYUFBYVMsS0FBRyxJQUFBLElBQUEsR0FBQUQsT0FBVVIsYUFBYVMsTUFBTSxJQUFFLElBQUEsQ0FBSTtFQUN0RztBQUNBLFFBQU1DLFlBQVlBLE1BQVk7QUFDN0IsVUFBTUMsUUFBaUNWLEVBQUUsTUFBTTtBQUMvQ1UsVUFBTUMsS0FBSyxxQ0FBcUMsRUFBRUMsS0FBSyxDQUFDQyxRQUFnQkMsWUFBK0I7QUFDdEcsWUFBTWxCLFdBQW1CSSxFQUFFYyxPQUFPO0FBQ2xDbEIsZUFBU21CLEdBQUcsU0FBVXZCLFdBQW1DO0FBQ3hERyxzQkFBY0MsVUFBVUosS0FBSztNQUM5QixDQUFDO0FBQ0RJLGVBQVNtQixHQUFHLFdBQVl2QixXQUFxQztBQUM1REcsc0JBQWNDLFVBQVVKLEtBQUs7TUFDOUIsQ0FBQztJQUNGLENBQUM7RUFDRjtBQUNBd0IsYUFBV1AsV0FBVyxDQUFDO0FBQ3hCOztBQ25DQVQsRUFBRVYsU0FBUzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJzbW9vdGhUT0MiLCAiY2hlY2tBMTF5S2V5IiwgImV2ZW50IiwgInR5cGUiLCAia2V5IiwgImV2ZW50TGlzdGVuZXIiLCAiJGVsZW1lbnQiLCAiaGVyZiIsICJhdHRyIiwgImFuY2hvck9mZnNldCIsICIkIiwgIm9mZnNldCIsICJwcmV2ZW50RGVmYXVsdCIsICJzY3JvbGxUb3AiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjb25jYXQiLCAidG9wIiwgInNtb290aFRvYyIsICIkYm9keSIsICJmaW5kIiwgImVhY2giLCAiX2luZGV4IiwgImVsZW1lbnQiLCAib24iLCAic2V0VGltZW91dCJdCn0K

})();

/* </nowiki> */
