/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-tabbedwindow.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/TabbedWindow}
 * @author Jay Prakash <https://meta.wikimedia.org/wiki/User:Jayprakash12345> and contributors
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
 *
 * tabbedWindow.js
 *
 * It embeds an OOUI tabbed window on all pages in the API namespace on MediaWiki.org.
 * Each tab of the window contains sample code in a programming language (PHP, Javascript, Python, etc.)
 * demonstrating the use of the MediaWiki Action API.
 *
 * @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
 * @licstart  The following is the entire license notice for the JavaScript code in this gadget.
 *
 * Copyright (C) 2019 Jay Prakash <https://meta.wikimedia.org/wiki/User:Jayprakash12345> and contributors
 *
 * The JavaScript/Gadget code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice for the JavaScript/Gadget code in this gadget.
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

// dist/TabbedWindow/TabbedWindow.js
//! src/TabbedWindow/TabbedWindow.ts
(function() {
  const trySettingTab = function(indexLayout, hash) {
    const possiblePanelName = hash.slice(1);
    const possiblePanel = possiblePanelName && indexLayout.getTabPanel(possiblePanelName);
    if (possiblePanel) {
      indexLayout.setTabPanel(possiblePanelName);
      indexLayout.scrollElementIntoView();
    }
  };
  const makeTabWindow = function($tabbedWindows) {
    $tabbedWindows.each((_i, tabbedWindow) => {
      const indexLayout = new OO.ui.IndexLayout({
        expanded: false
      });
      const tabs = [];
      $(tabbedWindow).find("h3, h4, h5, h6").each((_j, heading) => {
        const $heading = $(heading);
        let $headingWrapper, $headingText;
        if ($heading.closest(".mw-heading").length) {
          $headingWrapper = $heading.closest(".mw-heading");
          $headingText = $heading;
        } else if ($heading.find(".mw-headline").length) {
          $headingWrapper = $heading;
          $headingText = $heading.find(".mw-headline");
        } else {
          return;
        }
        const id = $headingText.attr("id");
        const $content = $headingWrapper.nextUntil("h3, h4, h5, h6, .mw-heading3, .mw-heading4, .mw-heading5, .mw-heading6");
        $content.prepend($headingWrapper.hide());
        const tabPanel = new OO.ui.TabPanelLayout(id, {
          expanded: false,
          label: $headingText.text(),
          // Attach the original DOM elements directly by reference.
          // This means they move directly in memory instead of getting copied/serialized/parsed as HTML.
          // If we didn't move them, but instead copied and re-parsed HTML, then it would disconnect events
          // and other live references from gadgets and extensions, which breaks sorting features, responsive gallery, etc.
          $content
        });
        tabPanel.$element.css("padding", "0.5em");
        tabs.push(tabPanel);
      });
      indexLayout.addTabPanels(tabs, 0);
      const panelLayout = new OO.ui.PanelLayout({
        expanded: false,
        framed: true,
        content: [indexLayout]
      });
      $(tabbedWindow).empty().append(panelLayout.$element);
      mw.hook("ve.deactivationComplete").fire();
      trySettingTab(indexLayout, location.hash);
      if (history.replaceState) {
        indexLayout.on("set", (tabPanel) => {
          history.replaceState(null, document.title, "#".concat(tabPanel.getName()));
        });
      }
      window.addEventListener("hashchange", () => {
        trySettingTab(indexLayout, location.hash);
      });
    });
  };
  mw.hook("wikipage.content").add(($content) => {
    const $tabbedWindows = $content.find(".mw-gadget-tabbedwindow");
    if ($tabbedWindows.length > 0) {
      makeTabWindow($tabbedWindows);
    }
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RhYmJlZFdpbmRvdy9UYWJiZWRXaW5kb3cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHRyeVNldHRpbmdUYWIgPSBmdW5jdGlvbiAoaW5kZXhMYXlvdXQ6IE9PLnVpLkluZGV4TGF5b3V0LCBoYXNoOiBzdHJpbmcgfCB1bmtub3duW10pIHtcblx0XHRjb25zdCBwb3NzaWJsZVBhbmVsTmFtZSA9IGhhc2guc2xpY2UoMSkgYXMgc3RyaW5nO1xuXHRcdGNvbnN0IHBvc3NpYmxlUGFuZWwgPSBwb3NzaWJsZVBhbmVsTmFtZSAmJiBpbmRleExheW91dC5nZXRUYWJQYW5lbChwb3NzaWJsZVBhbmVsTmFtZSk7XG5cdFx0aWYgKHBvc3NpYmxlUGFuZWwpIHtcblx0XHRcdGluZGV4TGF5b3V0LnNldFRhYlBhbmVsKHBvc3NpYmxlUGFuZWxOYW1lKTtcblx0XHRcdGluZGV4TGF5b3V0LnNjcm9sbEVsZW1lbnRJbnRvVmlldygpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogVGhpcyBmdW5jdGlvbiBmZXRjaGVzIHNhbXBsZSBjb2RlIGluIGRpZmZlcmVudCBwcm9ncmFtbWluZyBsYW5ndWFnZXNcblx0ICogZnJvbSB0aGUgc3ViLXNlY3Rpb25zIG9mIHRoZSBzZWN0aW9uIFwiU2FtcGxlIENvZGVcIiBhbmQgcGxhY2VzXG5cdCAqIHRoZW0gaW50byBhbiBPT1VJIHRhYmJlZCB3aW5kb3cuXG5cdCAqXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSAkdGFiYmVkV2luZG93c1xuXHQgKi9cblx0Y29uc3QgbWFrZVRhYldpbmRvdyA9IGZ1bmN0aW9uICgkdGFiYmVkV2luZG93czogSlF1ZXJ5PEVsZW1lbnQ+KSB7XG5cdFx0JHRhYmJlZFdpbmRvd3MuZWFjaCgoX2k6IG51bWJlciwgdGFiYmVkV2luZG93OiBFbGVtZW50KSA9PiB7XG5cdFx0XHRjb25zdCBpbmRleExheW91dCA9IG5ldyBPTy51aS5JbmRleExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCB0YWJzOiBPTy51aS5UYWJQYW5lbExheW91dFtdID0gW107XG5cdFx0XHQkKHRhYmJlZFdpbmRvdylcblx0XHRcdFx0LmZpbmQoJ2gzLCBoNCwgaDUsIGg2Jylcblx0XHRcdFx0LmVhY2goKF9qOiBudW1iZXIsIGhlYWRpbmc6IEVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRjb25zdCAkaGVhZGluZyA9ICQoaGVhZGluZyk7XG5cdFx0XHRcdFx0bGV0ICRoZWFkaW5nV3JhcHBlciwgJGhlYWRpbmdUZXh0O1xuXHRcdFx0XHRcdGlmICgkaGVhZGluZy5jbG9zZXN0KCcubXctaGVhZGluZycpLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0JGhlYWRpbmdXcmFwcGVyID0gJGhlYWRpbmcuY2xvc2VzdCgnLm13LWhlYWRpbmcnKTtcblx0XHRcdFx0XHRcdCRoZWFkaW5nVGV4dCA9ICRoZWFkaW5nO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoJGhlYWRpbmcuZmluZCgnLm13LWhlYWRsaW5lJykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHQkaGVhZGluZ1dyYXBwZXIgPSAkaGVhZGluZztcblx0XHRcdFx0XHRcdCRoZWFkaW5nVGV4dCA9ICRoZWFkaW5nLmZpbmQoJy5tdy1oZWFkbGluZScpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IGlkID0gJGhlYWRpbmdUZXh0LmF0dHIoJ2lkJykgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdFx0Y29uc3QgJGNvbnRlbnQgPSAkaGVhZGluZ1dyYXBwZXIubmV4dFVudGlsKFxuXHRcdFx0XHRcdFx0J2gzLCBoNCwgaDUsIGg2LCAubXctaGVhZGluZzMsIC5tdy1oZWFkaW5nNCwgLm13LWhlYWRpbmc1LCAubXctaGVhZGluZzYnXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdC8vIEFkZCB0aGUgaGVhZGluZyB0aGUgY29udGVudCBwYW5lbCB0byBwcmVzZXJ2ZSB0aGUgb3JpZ2luYWwgSURzIGFzIG1heSBiZSByZXF1aXJlZCBieSBvdGhlciB0b29scyAoVDM1MDg0MClcblx0XHRcdFx0XHQkY29udGVudC5wcmVwZW5kKCRoZWFkaW5nV3JhcHBlci5oaWRlKCkpO1xuXG5cdFx0XHRcdFx0Y29uc3QgdGFiUGFuZWwgPSBuZXcgT08udWkuVGFiUGFuZWxMYXlvdXQoaWQsIHtcblx0XHRcdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0XHRcdGxhYmVsOiAkaGVhZGluZ1RleHQudGV4dCgpLFxuXHRcdFx0XHRcdFx0Ly8gQXR0YWNoIHRoZSBvcmlnaW5hbCBET00gZWxlbWVudHMgZGlyZWN0bHkgYnkgcmVmZXJlbmNlLlxuXHRcdFx0XHRcdFx0Ly8gVGhpcyBtZWFucyB0aGV5IG1vdmUgZGlyZWN0bHkgaW4gbWVtb3J5IGluc3RlYWQgb2YgZ2V0dGluZyBjb3BpZWQvc2VyaWFsaXplZC9wYXJzZWQgYXMgSFRNTC5cblx0XHRcdFx0XHRcdC8vIElmIHdlIGRpZG4ndCBtb3ZlIHRoZW0sIGJ1dCBpbnN0ZWFkIGNvcGllZCBhbmQgcmUtcGFyc2VkIEhUTUwsIHRoZW4gaXQgd291bGQgZGlzY29ubmVjdCBldmVudHNcblx0XHRcdFx0XHRcdC8vIGFuZCBvdGhlciBsaXZlIHJlZmVyZW5jZXMgZnJvbSBnYWRnZXRzIGFuZCBleHRlbnNpb25zLCB3aGljaCBicmVha3Mgc29ydGluZyBmZWF0dXJlcywgcmVzcG9uc2l2ZSBnYWxsZXJ5LCBldGMuXG5cdFx0XHRcdFx0XHQkY29udGVudCxcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHRhYlBhbmVsLiRlbGVtZW50LmNzcygncGFkZGluZycsICcwLjVlbScpO1xuXG5cdFx0XHRcdFx0dGFicy5wdXNoKHRhYlBhbmVsKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdGluZGV4TGF5b3V0LmFkZFRhYlBhbmVscyh0YWJzLCAwKTtcblxuXHRcdFx0Y29uc3QgcGFuZWxMYXlvdXQgPSBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRcdGZyYW1lZDogdHJ1ZSxcblx0XHRcdFx0Y29udGVudDogW2luZGV4TGF5b3V0XSxcblx0XHRcdH0pO1xuXG5cdFx0XHQkKHRhYmJlZFdpbmRvdykuZW1wdHkoKS5hcHBlbmQocGFuZWxMYXlvdXQuJGVsZW1lbnQpO1xuXG5cdFx0XHQvLyBXb3JrYXJvdW5kIGZvciBUMzQ4NjgwXG5cdFx0XHRtdy5ob29rKCd2ZS5kZWFjdGl2YXRpb25Db21wbGV0ZScpLmZpcmUoKTtcblxuXHRcdFx0Ly8gU2VsZWN0IGFuZCBzY3JvbGwgdG8gYW55IGluaXRpYWxseSBsaW5rZWQgaXRlbSBpbiB0aGUgYWRkcmVzc1xuXHRcdFx0dHJ5U2V0dGluZ1RhYihpbmRleExheW91dCwgbG9jYXRpb24uaGFzaCk7XG5cdFx0XHQvLyBLZWVwIGFkZHJlc3MgYmFyIHVwZGF0ZWQgd2l0aCBzaGFyYWJsZSBsaW5rIChhbHNvIG1ha2VzIGZvcndhcmQvYmFja3dhcmQgYnJvd3NlciBuYXZpZ2F0aW9uIHdvcmspXG5cdFx0XHRpZiAoaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcblx0XHRcdFx0aW5kZXhMYXlvdXQub24oJ3NldCcsICh0YWJQYW5lbCkgPT4ge1xuXHRcdFx0XHRcdGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIGRvY3VtZW50LnRpdGxlLCBgIyR7dGFiUGFuZWwuZ2V0TmFtZSgpfWApO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdC8vIFN1cHBvcnQgYW5jaG9yIGxpbmtzIG9uIHRoZSBzYW1lIHBhZ2UgKGZyb20gdGFibGUgb2YgQ29udGVudHMsIG9yIFtbI1NlY3Rpb25dXSBsaW5rcylcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHR0cnlTZXR0aW5nVGFiKGluZGV4TGF5b3V0LCBsb2NhdGlvbi5oYXNoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KSA9PiB7XG5cdFx0Y29uc3QgJHRhYmJlZFdpbmRvd3MgPSAkY29udGVudC5maW5kKCcubXctZ2FkZ2V0LXRhYmJlZHdpbmRvdycpO1xuXHRcdGlmICgkdGFiYmVkV2luZG93cy5sZW5ndGggPiAwKSB7XG5cdFx0XHQvLyBWaWV3aW5nIGFuIEFQSSBzdWJqZWN0IHBhZ2Ugd2l0aCB0YWJzIG9uIGl0LCBsZXQncyBtYWtlIHRoZW0gbmljZSFcblx0XHRcdG1ha2VUYWJXaW5kb3coJHRhYmJlZFdpbmRvd3MpO1xuXHRcdH1cblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFDLFdBQVk7QUFDWixRQUFNQSxnQkFBZ0IsU0FBVUMsYUFBZ0NDLE1BQTBCO0FBQ3pGLFVBQU1DLG9CQUFvQkQsS0FBS0UsTUFBTSxDQUFDO0FBQ3RDLFVBQU1DLGdCQUFnQkYscUJBQXFCRixZQUFZSyxZQUFZSCxpQkFBaUI7QUFDcEYsUUFBSUUsZUFBZTtBQUNsQkosa0JBQVlNLFlBQVlKLGlCQUFpQjtBQUN6Q0Ysa0JBQVlPLHNCQUFzQjtJQUNuQztFQUNEO0FBU0EsUUFBTUMsZ0JBQWdCLFNBQVVDLGdCQUFpQztBQUNoRUEsbUJBQWVDLEtBQUssQ0FBQ0MsSUFBWUMsaUJBQTBCO0FBQzFELFlBQU1aLGNBQWMsSUFBSWEsR0FBR0MsR0FBR0MsWUFBWTtRQUN6Q0MsVUFBVTtNQUNYLENBQUM7QUFFRCxZQUFNQyxPQUErQixDQUFBO0FBQ3JDQyxRQUFFTixZQUFZLEVBQ1pPLEtBQUssZ0JBQWdCLEVBQ3JCVCxLQUFLLENBQUNVLElBQVlDLFlBQXFCO0FBQ3ZDLGNBQU1DLFdBQVdKLEVBQUVHLE9BQU87QUFDMUIsWUFBSUUsaUJBQWlCQztBQUNyQixZQUFJRixTQUFTRyxRQUFRLGFBQWEsRUFBRUMsUUFBUTtBQUMzQ0gsNEJBQWtCRCxTQUFTRyxRQUFRLGFBQWE7QUFDaERELHlCQUFlRjtRQUNoQixXQUFXQSxTQUFTSCxLQUFLLGNBQWMsRUFBRU8sUUFBUTtBQUNoREgsNEJBQWtCRDtBQUNsQkUseUJBQWVGLFNBQVNILEtBQUssY0FBYztRQUM1QyxPQUFPO0FBQ047UUFDRDtBQUNBLGNBQU1RLEtBQUtILGFBQWFJLEtBQUssSUFBSTtBQUVqQyxjQUFNQyxXQUFXTixnQkFBZ0JPLFVBQ2hDLHdFQUNEO0FBR0FELGlCQUFTRSxRQUFRUixnQkFBZ0JTLEtBQUssQ0FBQztBQUV2QyxjQUFNQyxXQUFXLElBQUlwQixHQUFHQyxHQUFHb0IsZUFBZVAsSUFBSTtVQUM3Q1gsVUFBVTtVQUNWbUIsT0FBT1gsYUFBYVksS0FBSzs7Ozs7VUFLekJQO1FBQ0QsQ0FBQztBQUVESSxpQkFBU0ksU0FBU0MsSUFBSSxXQUFXLE9BQU87QUFFeENyQixhQUFLc0IsS0FBS04sUUFBUTtNQUNuQixDQUFDO0FBRUZqQyxrQkFBWXdDLGFBQWF2QixNQUFNLENBQUM7QUFFaEMsWUFBTXdCLGNBQWMsSUFBSTVCLEdBQUdDLEdBQUc0QixZQUFZO1FBQ3pDMUIsVUFBVTtRQUNWMkIsUUFBUTtRQUNSQyxTQUFTLENBQUM1QyxXQUFXO01BQ3RCLENBQUM7QUFFRGtCLFFBQUVOLFlBQVksRUFBRWlDLE1BQU0sRUFBRUMsT0FBT0wsWUFBWUosUUFBUTtBQUduRFUsU0FBR0MsS0FBSyx5QkFBeUIsRUFBRUMsS0FBSztBQUd4Q2xELG9CQUFjQyxhQUFha0QsU0FBU2pELElBQUk7QUFFeEMsVUFBSWtELFFBQVFDLGNBQWM7QUFDekJwRCxvQkFBWXFELEdBQUcsT0FBUXBCLGNBQWE7QUFDbkNrQixrQkFBUUMsYUFBYSxNQUFNRSxTQUFTQyxPQUFBLElBQUFDLE9BQVd2QixTQUFTd0IsUUFBUSxDQUFDLENBQUU7UUFDcEUsQ0FBQztNQUNGO0FBRUFDLGFBQU9DLGlCQUFpQixjQUFjLE1BQU07QUFDM0M1RCxzQkFBY0MsYUFBYWtELFNBQVNqRCxJQUFJO01BQ3pDLENBQUM7SUFDRixDQUFDO0VBQ0Y7QUFFQThDLEtBQUdDLEtBQUssa0JBQWtCLEVBQUVZLElBQUsvQixjQUFhO0FBQzdDLFVBQU1wQixpQkFBaUJvQixTQUFTVixLQUFLLHlCQUF5QjtBQUM5RCxRQUFJVixlQUFlaUIsU0FBUyxHQUFHO0FBRTlCbEIsb0JBQWNDLGNBQWM7SUFDN0I7RUFDRCxDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsidHJ5U2V0dGluZ1RhYiIsICJpbmRleExheW91dCIsICJoYXNoIiwgInBvc3NpYmxlUGFuZWxOYW1lIiwgInNsaWNlIiwgInBvc3NpYmxlUGFuZWwiLCAiZ2V0VGFiUGFuZWwiLCAic2V0VGFiUGFuZWwiLCAic2Nyb2xsRWxlbWVudEludG9WaWV3IiwgIm1ha2VUYWJXaW5kb3ciLCAiJHRhYmJlZFdpbmRvd3MiLCAiZWFjaCIsICJfaSIsICJ0YWJiZWRXaW5kb3ciLCAiT08iLCAidWkiLCAiSW5kZXhMYXlvdXQiLCAiZXhwYW5kZWQiLCAidGFicyIsICIkIiwgImZpbmQiLCAiX2oiLCAiaGVhZGluZyIsICIkaGVhZGluZyIsICIkaGVhZGluZ1dyYXBwZXIiLCAiJGhlYWRpbmdUZXh0IiwgImNsb3Nlc3QiLCAibGVuZ3RoIiwgImlkIiwgImF0dHIiLCAiJGNvbnRlbnQiLCAibmV4dFVudGlsIiwgInByZXBlbmQiLCAiaGlkZSIsICJ0YWJQYW5lbCIsICJUYWJQYW5lbExheW91dCIsICJsYWJlbCIsICJ0ZXh0IiwgIiRlbGVtZW50IiwgImNzcyIsICJwdXNoIiwgImFkZFRhYlBhbmVscyIsICJwYW5lbExheW91dCIsICJQYW5lbExheW91dCIsICJmcmFtZWQiLCAiY29udGVudCIsICJlbXB0eSIsICJhcHBlbmQiLCAibXciLCAiaG9vayIsICJmaXJlIiwgImxvY2F0aW9uIiwgImhpc3RvcnkiLCAicmVwbGFjZVN0YXRlIiwgIm9uIiwgImRvY3VtZW50IiwgInRpdGxlIiwgImNvbmNhdCIsICJnZXROYW1lIiwgIndpbmRvdyIsICJhZGRFdmVudExpc3RlbmVyIiwgImFkZCJdCn0K
