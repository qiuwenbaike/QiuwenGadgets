/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Edittools-vector.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-customizeToolbar}
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

// dist/Edittools-customizeToolbar/Edittools-customizeToolbar.js
//! src/Edittools-customizeToolbar/Edittools-customizeToolbar.ts
var import_ext_gadget = require("ext.gadget.Util");
var customizeToolbar = (customizer) => {
  if (!mw.user.options.get("usebetatoolbar")) {
    return;
  }
  void (0, import_ext_gadget.getBody)().then(($body) => {
    customizer.call($body.find("#wpTextbox1"));
  });
};
window.customizeToolbar = customizeToolbar;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXR0b29scy1jdXN0b21pemVUb29sYmFyL0VkaXR0b29scy1jdXN0b21pemVUb29sYmFyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgdHlwZSB7Q3VzdG9taXplVG9vbGJhcn0gZnJvbSAnLi9tb2R1bGVzL3R5cGVzJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgY3VzdG9taXplVG9vbGJhcjogQ3VzdG9taXplVG9vbGJhciA9IChjdXN0b21pemVyKSA9PiB7XG5cdGlmICghbXcudXNlci5vcHRpb25zLmdldCgndXNlYmV0YXRvb2xiYXInKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdGN1c3RvbWl6ZXIuY2FsbCgkYm9keS5maW5kKCcjd3BUZXh0Ym94MScpKTtcblx0fSk7XG59O1xuXG53aW5kb3cuY3VzdG9taXplVG9vbGJhciA9IGN1c3RvbWl6ZVRvb2xiYXI7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7O0FBQ0EsSUFBQUEsb0JBQXNCQyxRQUFBLGlCQUFBO0FBRXRCLElBQU1DLG1CQUFzQ0MsZ0JBQWU7QUFDMUQsTUFBSSxDQUFDQyxHQUFHQyxLQUFLQyxRQUFRQyxJQUFJLGdCQUFnQixHQUFHO0FBQzNDO0VBQ0Q7QUFFQSxRQUFBLEdBQUtQLGtCQUFBUSxTQUFRLEVBQUVDLEtBQU1DLFdBQXlDO0FBQzdEUCxlQUFXUSxLQUFLRCxNQUFNRSxLQUFLLGFBQWEsQ0FBQztFQUMxQyxDQUFDO0FBQ0Y7QUFFQUMsT0FBT1gsbUJBQW1CQTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJjdXN0b21pemVUb29sYmFyIiwgImN1c3RvbWl6ZXIiLCAibXciLCAidXNlciIsICJvcHRpb25zIiwgImdldCIsICJnZXRCb2R5IiwgInRoZW4iLCAiJGJvZHkiLCAiY2FsbCIsICJmaW5kIiwgIndpbmRvdyJdCn0K

})();

/* </nowiki> */
