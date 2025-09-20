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
(function tabbedWindows() {
  const trySettingTab = (indexLayout, hash) => {
    const possiblePanelName = hash.slice(1);
    const possiblePanel = possiblePanelName && indexLayout.getTabPanel(possiblePanelName);
    if (possiblePanel) {
      indexLayout.setTabPanel(possiblePanelName);
      indexLayout.scrollElementIntoView();
    }
  };
  const makeTabWindow = ($tabbedWindows) => {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RhYmJlZFdpbmRvdy9UYWJiZWRXaW5kb3cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbiB0YWJiZWRXaW5kb3dzKCkge1xuXHRjb25zdCB0cnlTZXR0aW5nVGFiID0gKGluZGV4TGF5b3V0OiBPTy51aS5JbmRleExheW91dCwgaGFzaDogc3RyaW5nIHwgdW5rbm93bltdKSA9PiB7XG5cdFx0Y29uc3QgcG9zc2libGVQYW5lbE5hbWUgPSBoYXNoLnNsaWNlKDEpIGFzIHN0cmluZztcblx0XHRjb25zdCBwb3NzaWJsZVBhbmVsID0gcG9zc2libGVQYW5lbE5hbWUgJiYgaW5kZXhMYXlvdXQuZ2V0VGFiUGFuZWwocG9zc2libGVQYW5lbE5hbWUpO1xuXHRcdGlmIChwb3NzaWJsZVBhbmVsKSB7XG5cdFx0XHRpbmRleExheW91dC5zZXRUYWJQYW5lbChwb3NzaWJsZVBhbmVsTmFtZSk7XG5cdFx0XHRpbmRleExheW91dC5zY3JvbGxFbGVtZW50SW50b1ZpZXcoKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFRoaXMgZnVuY3Rpb24gZmV0Y2hlcyBzYW1wbGUgY29kZSBpbiBkaWZmZXJlbnQgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VzXG5cdCAqIGZyb20gdGhlIHN1Yi1zZWN0aW9ucyBvZiB0aGUgc2VjdGlvbiBcIlNhbXBsZSBDb2RlXCIgYW5kIHBsYWNlc1xuXHQgKiB0aGVtIGludG8gYW4gT09VSSB0YWJiZWQgd2luZG93LlxuXHQgKlxuXHQgKiBAcGFyYW0ge2pRdWVyeX0gJHRhYmJlZFdpbmRvd3Ncblx0ICovXG5cdGNvbnN0IG1ha2VUYWJXaW5kb3cgPSAoJHRhYmJlZFdpbmRvd3M6IEpRdWVyeTxFbGVtZW50PikgPT4ge1xuXHRcdCR0YWJiZWRXaW5kb3dzLmVhY2goKF9pOiBudW1iZXIsIHRhYmJlZFdpbmRvdzogRWxlbWVudCkgPT4ge1xuXHRcdFx0Y29uc3QgaW5kZXhMYXlvdXQgPSBuZXcgT08udWkuSW5kZXhMYXlvdXQoe1xuXHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgdGFiczogT08udWkuVGFiUGFuZWxMYXlvdXRbXSA9IFtdO1xuXHRcdFx0JCh0YWJiZWRXaW5kb3cpXG5cdFx0XHRcdC5maW5kKCdoMywgaDQsIGg1LCBoNicpXG5cdFx0XHRcdC5lYWNoKChfajogbnVtYmVyLCBoZWFkaW5nOiBFbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgJGhlYWRpbmcgPSAkKGhlYWRpbmcpO1xuXHRcdFx0XHRcdGxldCAkaGVhZGluZ1dyYXBwZXIsICRoZWFkaW5nVGV4dDtcblx0XHRcdFx0XHRpZiAoJGhlYWRpbmcuY2xvc2VzdCgnLm13LWhlYWRpbmcnKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdCRoZWFkaW5nV3JhcHBlciA9ICRoZWFkaW5nLmNsb3Nlc3QoJy5tdy1oZWFkaW5nJyk7XG5cdFx0XHRcdFx0XHQkaGVhZGluZ1RleHQgPSAkaGVhZGluZztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCRoZWFkaW5nLmZpbmQoJy5tdy1oZWFkbGluZScpLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0JGhlYWRpbmdXcmFwcGVyID0gJGhlYWRpbmc7XG5cdFx0XHRcdFx0XHQkaGVhZGluZ1RleHQgPSAkaGVhZGluZy5maW5kKCcubXctaGVhZGxpbmUnKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zdCBpZCA9ICRoZWFkaW5nVGV4dC5hdHRyKCdpZCcpIGFzIHN0cmluZztcblxuXHRcdFx0XHRcdGNvbnN0ICRjb250ZW50ID0gJGhlYWRpbmdXcmFwcGVyLm5leHRVbnRpbChcblx0XHRcdFx0XHRcdCdoMywgaDQsIGg1LCBoNiwgLm13LWhlYWRpbmczLCAubXctaGVhZGluZzQsIC5tdy1oZWFkaW5nNSwgLm13LWhlYWRpbmc2J1xuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHQvLyBBZGQgdGhlIGhlYWRpbmcgdGhlIGNvbnRlbnQgcGFuZWwgdG8gcHJlc2VydmUgdGhlIG9yaWdpbmFsIElEcyBhcyBtYXkgYmUgcmVxdWlyZWQgYnkgb3RoZXIgdG9vbHMgKFQzNTA4NDApXG5cdFx0XHRcdFx0JGNvbnRlbnQucHJlcGVuZCgkaGVhZGluZ1dyYXBwZXIuaGlkZSgpKTtcblxuXHRcdFx0XHRcdGNvbnN0IHRhYlBhbmVsID0gbmV3IE9PLnVpLlRhYlBhbmVsTGF5b3V0KGlkLCB7XG5cdFx0XHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRcdFx0XHRsYWJlbDogJGhlYWRpbmdUZXh0LnRleHQoKSxcblx0XHRcdFx0XHRcdC8vIEF0dGFjaCB0aGUgb3JpZ2luYWwgRE9NIGVsZW1lbnRzIGRpcmVjdGx5IGJ5IHJlZmVyZW5jZS5cblx0XHRcdFx0XHRcdC8vIFRoaXMgbWVhbnMgdGhleSBtb3ZlIGRpcmVjdGx5IGluIG1lbW9yeSBpbnN0ZWFkIG9mIGdldHRpbmcgY29waWVkL3NlcmlhbGl6ZWQvcGFyc2VkIGFzIEhUTUwuXG5cdFx0XHRcdFx0XHQvLyBJZiB3ZSBkaWRuJ3QgbW92ZSB0aGVtLCBidXQgaW5zdGVhZCBjb3BpZWQgYW5kIHJlLXBhcnNlZCBIVE1MLCB0aGVuIGl0IHdvdWxkIGRpc2Nvbm5lY3QgZXZlbnRzXG5cdFx0XHRcdFx0XHQvLyBhbmQgb3RoZXIgbGl2ZSByZWZlcmVuY2VzIGZyb20gZ2FkZ2V0cyBhbmQgZXh0ZW5zaW9ucywgd2hpY2ggYnJlYWtzIHNvcnRpbmcgZmVhdHVyZXMsIHJlc3BvbnNpdmUgZ2FsbGVyeSwgZXRjLlxuXHRcdFx0XHRcdFx0JGNvbnRlbnQsXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHR0YWJQYW5lbC4kZWxlbWVudC5jc3MoJ3BhZGRpbmcnLCAnMC41ZW0nKTtcblxuXHRcdFx0XHRcdHRhYnMucHVzaCh0YWJQYW5lbCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRpbmRleExheW91dC5hZGRUYWJQYW5lbHModGFicywgMCk7XG5cblx0XHRcdGNvbnN0IHBhbmVsTGF5b3V0ID0gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0XHRmcmFtZWQ6IHRydWUsXG5cdFx0XHRcdGNvbnRlbnQ6IFtpbmRleExheW91dF0sXG5cdFx0XHR9KTtcblxuXHRcdFx0JCh0YWJiZWRXaW5kb3cpLmVtcHR5KCkuYXBwZW5kKHBhbmVsTGF5b3V0LiRlbGVtZW50KTtcblxuXHRcdFx0Ly8gV29ya2Fyb3VuZCBmb3IgVDM0ODY4MFxuXHRcdFx0bXcuaG9vaygndmUuZGVhY3RpdmF0aW9uQ29tcGxldGUnKS5maXJlKCk7XG5cblx0XHRcdC8vIFNlbGVjdCBhbmQgc2Nyb2xsIHRvIGFueSBpbml0aWFsbHkgbGlua2VkIGl0ZW0gaW4gdGhlIGFkZHJlc3Ncblx0XHRcdHRyeVNldHRpbmdUYWIoaW5kZXhMYXlvdXQsIGxvY2F0aW9uLmhhc2gpO1xuXHRcdFx0Ly8gS2VlcCBhZGRyZXNzIGJhciB1cGRhdGVkIHdpdGggc2hhcmFibGUgbGluayAoYWxzbyBtYWtlcyBmb3J3YXJkL2JhY2t3YXJkIGJyb3dzZXIgbmF2aWdhdGlvbiB3b3JrKVxuXHRcdFx0aWYgKGhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG5cdFx0XHRcdGluZGV4TGF5b3V0Lm9uKCdzZXQnLCAodGFiUGFuZWwpID0+IHtcblx0XHRcdFx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgYCMke3RhYlBhbmVsLmdldE5hbWUoKX1gKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBTdXBwb3J0IGFuY2hvciBsaW5rcyBvbiB0aGUgc2FtZSBwYWdlIChmcm9tIHRhYmxlIG9mIENvbnRlbnRzLCBvciBbWyNTZWN0aW9uXV0gbGlua3MpXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcblx0XHRcdFx0dHJ5U2V0dGluZ1RhYihpbmRleExheW91dCwgbG9jYXRpb24uaGFzaCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblxuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKCgkY29udGVudCkgPT4ge1xuXHRcdGNvbnN0ICR0YWJiZWRXaW5kb3dzID0gJGNvbnRlbnQuZmluZCgnLm13LWdhZGdldC10YWJiZWR3aW5kb3cnKTtcblx0XHRpZiAoJHRhYmJlZFdpbmRvd3MubGVuZ3RoID4gMCkge1xuXHRcdFx0Ly8gVmlld2luZyBhbiBBUEkgc3ViamVjdCBwYWdlIHdpdGggdGFicyBvbiBpdCwgbGV0J3MgbWFrZSB0aGVtIG5pY2UhXG5cdFx0XHRtYWtlVGFiV2luZG93KCR0YWJiZWRXaW5kb3dzKTtcblx0XHR9XG5cdH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQyxTQUFTQSxnQkFBZ0I7QUFDekIsUUFBTUMsZ0JBQWdCQSxDQUFDQyxhQUFnQ0MsU0FBNkI7QUFDbkYsVUFBTUMsb0JBQW9CRCxLQUFLRSxNQUFNLENBQUM7QUFDdEMsVUFBTUMsZ0JBQWdCRixxQkFBcUJGLFlBQVlLLFlBQVlILGlCQUFpQjtBQUNwRixRQUFJRSxlQUFlO0FBQ2xCSixrQkFBWU0sWUFBWUosaUJBQWlCO0FBQ3pDRixrQkFBWU8sc0JBQXNCO0lBQ25DO0VBQ0Q7QUFTQSxRQUFNQyxnQkFBaUJDLG9CQUFvQztBQUMxREEsbUJBQWVDLEtBQUssQ0FBQ0MsSUFBWUMsaUJBQTBCO0FBQzFELFlBQU1aLGNBQWMsSUFBSWEsR0FBR0MsR0FBR0MsWUFBWTtRQUN6Q0MsVUFBVTtNQUNYLENBQUM7QUFFRCxZQUFNQyxPQUErQixDQUFBO0FBQ3JDQyxRQUFFTixZQUFZLEVBQ1pPLEtBQUssZ0JBQWdCLEVBQ3JCVCxLQUFLLENBQUNVLElBQVlDLFlBQXFCO0FBQ3ZDLGNBQU1DLFdBQVdKLEVBQUVHLE9BQU87QUFDMUIsWUFBSUUsaUJBQWlCQztBQUNyQixZQUFJRixTQUFTRyxRQUFRLGFBQWEsRUFBRUMsUUFBUTtBQUMzQ0gsNEJBQWtCRCxTQUFTRyxRQUFRLGFBQWE7QUFDaERELHlCQUFlRjtRQUNoQixXQUFXQSxTQUFTSCxLQUFLLGNBQWMsRUFBRU8sUUFBUTtBQUNoREgsNEJBQWtCRDtBQUNsQkUseUJBQWVGLFNBQVNILEtBQUssY0FBYztRQUM1QyxPQUFPO0FBQ047UUFDRDtBQUNBLGNBQU1RLEtBQUtILGFBQWFJLEtBQUssSUFBSTtBQUVqQyxjQUFNQyxXQUFXTixnQkFBZ0JPLFVBQ2hDLHdFQUNEO0FBR0FELGlCQUFTRSxRQUFRUixnQkFBZ0JTLEtBQUssQ0FBQztBQUV2QyxjQUFNQyxXQUFXLElBQUlwQixHQUFHQyxHQUFHb0IsZUFBZVAsSUFBSTtVQUM3Q1gsVUFBVTtVQUNWbUIsT0FBT1gsYUFBYVksS0FBSzs7Ozs7VUFLekJQO1FBQ0QsQ0FBQztBQUVESSxpQkFBU0ksU0FBU0MsSUFBSSxXQUFXLE9BQU87QUFFeENyQixhQUFLc0IsS0FBS04sUUFBUTtNQUNuQixDQUFDO0FBRUZqQyxrQkFBWXdDLGFBQWF2QixNQUFNLENBQUM7QUFFaEMsWUFBTXdCLGNBQWMsSUFBSTVCLEdBQUdDLEdBQUc0QixZQUFZO1FBQ3pDMUIsVUFBVTtRQUNWMkIsUUFBUTtRQUNSQyxTQUFTLENBQUM1QyxXQUFXO01BQ3RCLENBQUM7QUFFRGtCLFFBQUVOLFlBQVksRUFBRWlDLE1BQU0sRUFBRUMsT0FBT0wsWUFBWUosUUFBUTtBQUduRFUsU0FBR0MsS0FBSyx5QkFBeUIsRUFBRUMsS0FBSztBQUd4Q2xELG9CQUFjQyxhQUFha0QsU0FBU2pELElBQUk7QUFFeEMsVUFBSWtELFFBQVFDLGNBQWM7QUFDekJwRCxvQkFBWXFELEdBQUcsT0FBUXBCLGNBQWE7QUFDbkNrQixrQkFBUUMsYUFBYSxNQUFNRSxTQUFTQyxPQUFBLElBQUFDLE9BQVd2QixTQUFTd0IsUUFBUSxDQUFDLENBQUU7UUFDcEUsQ0FBQztNQUNGO0FBRUFDLGFBQU9DLGlCQUFpQixjQUFjLE1BQU07QUFDM0M1RCxzQkFBY0MsYUFBYWtELFNBQVNqRCxJQUFJO01BQ3pDLENBQUM7SUFDRixDQUFDO0VBQ0Y7QUFFQThDLEtBQUdDLEtBQUssa0JBQWtCLEVBQUVZLElBQUsvQixjQUFhO0FBQzdDLFVBQU1wQixpQkFBaUJvQixTQUFTVixLQUFLLHlCQUF5QjtBQUM5RCxRQUFJVixlQUFlaUIsU0FBUyxHQUFHO0FBRTlCbEIsb0JBQWNDLGNBQWM7SUFDN0I7RUFDRCxDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsidGFiYmVkV2luZG93cyIsICJ0cnlTZXR0aW5nVGFiIiwgImluZGV4TGF5b3V0IiwgImhhc2giLCAicG9zc2libGVQYW5lbE5hbWUiLCAic2xpY2UiLCAicG9zc2libGVQYW5lbCIsICJnZXRUYWJQYW5lbCIsICJzZXRUYWJQYW5lbCIsICJzY3JvbGxFbGVtZW50SW50b1ZpZXciLCAibWFrZVRhYldpbmRvdyIsICIkdGFiYmVkV2luZG93cyIsICJlYWNoIiwgIl9pIiwgInRhYmJlZFdpbmRvdyIsICJPTyIsICJ1aSIsICJJbmRleExheW91dCIsICJleHBhbmRlZCIsICJ0YWJzIiwgIiQiLCAiZmluZCIsICJfaiIsICJoZWFkaW5nIiwgIiRoZWFkaW5nIiwgIiRoZWFkaW5nV3JhcHBlciIsICIkaGVhZGluZ1RleHQiLCAiY2xvc2VzdCIsICJsZW5ndGgiLCAiaWQiLCAiYXR0ciIsICIkY29udGVudCIsICJuZXh0VW50aWwiLCAicHJlcGVuZCIsICJoaWRlIiwgInRhYlBhbmVsIiwgIlRhYlBhbmVsTGF5b3V0IiwgImxhYmVsIiwgInRleHQiLCAiJGVsZW1lbnQiLCAiY3NzIiwgInB1c2giLCAiYWRkVGFiUGFuZWxzIiwgInBhbmVsTGF5b3V0IiwgIlBhbmVsTGF5b3V0IiwgImZyYW1lZCIsICJjb250ZW50IiwgImVtcHR5IiwgImFwcGVuZCIsICJtdyIsICJob29rIiwgImZpcmUiLCAibG9jYXRpb24iLCAiaGlzdG9yeSIsICJyZXBsYWNlU3RhdGUiLCAib24iLCAiZG9jdW1lbnQiLCAidGl0bGUiLCAiY29uY2F0IiwgImdldE5hbWUiLCAid2luZG93IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiYWRkIl0KfQo=
