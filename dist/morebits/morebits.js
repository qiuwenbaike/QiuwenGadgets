/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/twinkle-core/tree/master/morebits}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/morebits}
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

// dist/morebits/morebits.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
//! src/morebits/morebits.js
var import_ext_gadget = require("ext.gadget.Util");
/*! Twinkle.js - morebits.js */
(function morebits($) {
  const Morebits = {};
  window.Morebits = Morebits;
  Morebits.l10n = {
    /**
     * Local aliases for "redirect" magic word.
     * Check using api.php?action=query&format=json&meta=siteinfo&formatversion=2&siprop=magicwords
     */
    redirectTagAliases: ["#REDIRECT", "#重定向"],
    /**
     * Takes a string as argument and checks if it is a timestamp or not
     * If not, it returns null. If yes, it returns an array of integers
     * in the format [year, month, date, hour, minute, second]
     * which can be passed to Date.UTC()
     *
     * @param {string} str
     * @returns {number[] | null}
     */
    signatureTimestampFormat: (str) => {
      const rgxUTC = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(UTC\)/;
      const rgxCST = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(CST\)/;
      const match = rgxUTC.exec(str) || rgxCST.exec(str);
      const matchCST = rgxCST.exec(str);
      if (!match) {
        return null;
      }
      const month = Morebits.date.localeData.months.indexOf(match[4]);
      if (month === -1) {
        return null;
      }
      return matchCST ? [match[1], match[2] - 1, match[3], match[4] - 8, match[5]] : [match[1], match[2] - 1, match[3], match[4], match[5]];
    }
  };
  Morebits.userIsInGroup = (group) => {
    return mw.config.get("wgUserGroups").includes(group);
  };
  Morebits.userIsSysop = Morebits.userIsInGroup("sysop") || Morebits.userIsInGroup("steward") || Morebits.userIsInGroup("qiuwen");
  Morebits.sanitizeIPv6 = (address) => {
    console.warn("[Morebits] NOTE: Morebits.sanitizeIPv6 was renamed to Morebits.ip.sanitizeIPv6 in February 2021, please use that instead");
    return Morebits.ip.sanitizeIPv6(address);
  };
  Morebits.isPageRedirect = () => {
    const $body = $("body");
    return !!(mw.config.get("wgIsRedirect") || document.querySelector("#softredirect") || $body.find(".box-RfD").length || $body.find(".box-Redirect_category_shell").length);
  };
  Morebits.pageNameNorm = mw.config.get("wgPageName").replace(/_/g, " ");
  Morebits.pageNameRegex = (pageName) => {
    if (pageName === "") {
      return "";
    }
    const [firstChar] = pageName;
    const remainder = Morebits.string.escapeRegExp(pageName.slice(1));
    if (mw.Title.phpCharToUpper(firstChar) !== firstChar.toLowerCase()) {
      return "[".concat(mw.Title.phpCharToUpper(firstChar)).concat(firstChar.toLowerCase(), "]").concat(remainder);
    }
    return Morebits.string.escapeRegExp(firstChar) + remainder;
  };
  Morebits.createHtml = (input) => {
    const fragment = document.createDocumentFragment();
    if (!input) {
      return fragment;
    }
    input = (0, import_ext_gadget.generateArray)(input);
    var _iterator = _createForOfIteratorHelper(input), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const element = _step.value;
        if (element instanceof Node) {
          fragment.appendChild(element);
        } else {
          var _iterator2 = _createForOfIteratorHelper($.parseHTML(Morebits.createHtml.renderWikilinks(element))), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const node = _step2.value;
              fragment.appendChild(node);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return fragment;
  };
  Morebits.createHtml.renderWikilinks = (text) => {
    const ub = new Morebits.unbinder(text);
    ub.unbind("<code>", "</code>");
    ub.content = ub.content.replace(/\[\[:?(?:([^|\]]+?)\|)?([^\]|]+?)\]\]/g, (_, target, text_) => {
      if (!target) {
        target = text_;
      }
      return '<a rel="noopener" target="_blank" href="'.concat(mw.util.getUrl(target), '" title="').concat(target.replace(/"/g, "&#34;"), '">').concat(text_, "</a>");
    });
    return ub.rebind();
  };
  Morebits.namespaceRegex = (namespaces) => {
    namespaces = (0, import_ext_gadget.generateArray)(namespaces);
    const aliases = [];
    let regex;
    for (var _i = 0, _Object$entries = Object.entries(mw.config.get("wgNamespaceIds")); _i < _Object$entries.length; _i++) {
      const [name, number] = _Object$entries[_i];
      if (namespaces.includes(number)) {
        aliases[aliases.length] = [...name].map((char) => {
          return Morebits.pageNameRegex(char);
        }).join("");
      }
    }
    switch (aliases.length) {
      case 0:
        regex = "";
        break;
      case 1:
        [regex] = aliases;
        break;
      default:
        regex = "(?:".concat(aliases.join("|"), ")");
        break;
    }
    return regex;
  };
  Morebits.quickForm = function(event, eventType) {
    this.root = new Morebits.quickForm.element({
      type: "form",
      event,
      eventType
    });
  };
  Morebits.quickForm.prototype.render = function() {
    const ret = this.root.render();
    ret.names = {};
    return ret;
  };
  Morebits.quickForm.prototype.append = function(data) {
    return this.root.append(data);
  };
  Morebits.quickForm.element = function(data) {
    this.data = data;
    this.childs = [];
  };
  Morebits.quickForm.element.id = 0;
  Morebits.quickForm.element.prototype.append = function(data) {
    let child;
    if (data instanceof Morebits.quickForm.element) {
      child = data;
    } else {
      child = new Morebits.quickForm.element(data);
    }
    this.childs[this.childs.length] = child;
    return child;
  };
  Morebits.quickForm.element.prototype.render = function(internalSubgroupId) {
    const currentNode = this.compute(this.data, internalSubgroupId);
    var _iterator3 = _createForOfIteratorHelper(this.childs), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const child = _step3.value;
        currentNode[1].appendChild(child.render());
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return currentNode[0];
  };
  Morebits.quickForm.element.prototype.compute = function(data, inId) {
    let node;
    let childContainer = null;
    let label;
    const id = "".concat(inId ? "".concat(inId, "_") : "", "node_").concat(Morebits.quickForm.element.id++);
    if (data.adminonly && !Morebits.userIsSysop) {
      data.type = "hidden";
    }
    let i;
    let current;
    let subnode;
    switch (data.type) {
      case "form":
        node = document.createElement("form");
        node.className = "quickform";
        node.setAttribute("action", "javascript:void(0);");
        if (data.event) {
          node.addEventListener(data.eventType || "submit", data.event, false);
        }
        break;
      case "fragment":
        node = document.createDocumentFragment();
        return [node, node];
      case "select": {
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.setAttribute("for", id);
          label.appendChild(Morebits.createHtml(data.label));
        }
        const select = node.appendChild(document.createElement("select"));
        if (data.event) {
          select.addEventListener("change", data.event, false);
        }
        if (data.multiple) {
          select.setAttribute("multiple", "multiple");
        }
        if (data.size) {
          select.setAttribute("size", data.size);
        }
        if (data.disabled) {
          select.disabled = true;
        }
        select.setAttribute("name", data.name);
        if (data.list) {
          for (i = 0; i < data.list.length; ++i) {
            current = data.list[i];
            if (current.list) {
              current.type = "optgroup";
            } else {
              current.type = "option";
            }
            subnode = this.compute(current);
            select.appendChild(subnode[0]);
          }
        }
        childContainer = select;
        break;
      }
      case "option":
        node = document.createElement("option");
        node.values = data.value;
        node.setAttribute("value", data.value);
        if (data.selected) {
          node.setAttribute("selected", "selected");
        }
        if (data.disabled) {
          node.disabled = true;
        }
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        node.setAttribute("label", data.label);
        node.appendChild(document.createTextNode(data.label));
        break;
      case "optgroup":
        node = document.createElement("optgroup");
        node.setAttribute("label", data.label);
        if (data.list) {
          for (i = 0; i < data.list.length; ++i) {
            current = data.list[i];
            current.type = "option";
            subnode = this.compute(current);
            node.appendChild(subnode[0]);
          }
        }
        break;
      case "field":
        node = document.createElement("fieldset");
        label = node.appendChild(document.createElement("legend"));
        label.appendChild(Morebits.createHtml(data.label));
        if (data.name) {
          node.setAttribute("name", data.name);
        }
        if (data.disabled) {
          node.disabled = true;
        }
        break;
      case "checkbox":
      case "radio":
        node = document.createElement("div");
        if (data.list) {
          for (i = 0; i < data.list.length; ++i) {
            const curId = "".concat(id, "_").concat(i);
            current = data.list[i];
            let curDiv;
            if (current.type === "header") {
              curDiv = node.appendChild(document.createElement("h6"));
              curDiv.appendChild(document.createTextNode(current.label));
              if (current.tooltip) {
                Morebits.quickForm.element.generateTooltip(curDiv, current);
              }
              continue;
            }
            curDiv = node.appendChild(document.createElement("div"));
            if (current.hidden) {
              curDiv.setAttribute("hidden", "");
            }
            subnode = curDiv.appendChild(document.createElement("input"));
            subnode.values = current.value;
            subnode.setAttribute("value", current.value);
            subnode.setAttribute("type", data.type);
            subnode.setAttribute("id", curId);
            subnode.setAttribute("name", current.name || data.name);
            if (current.name) {
              subnode.setAttribute("data-single", "data-single");
            }
            if (current.checked) {
              subnode.checked = true;
            }
            if (current.disabled) {
              subnode.disabled = true;
            }
            label = curDiv.appendChild(document.createElement("label"));
            label.appendChild(Morebits.createHtml(current.label));
            label.setAttribute("for", curId);
            if (current.tooltip) {
              Morebits.quickForm.element.generateTooltip(label, current);
            }
            if (current.style) {
              label.setAttribute("style", current.style);
            }
            let event;
            if (current.subgroup) {
              let tmpgroup = current.subgroup;
              tmpgroup = (0, import_ext_gadget.generateArray)(tmpgroup);
              const subgroupRaw = new Morebits.quickForm.element({
                type: "div",
                id: "".concat(id, "_").concat(i, "_subgroup")
              });
              var _iterator4 = _createForOfIteratorHelper(tmpgroup), _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                  const el = _step4.value;
                  const newEl = {
                    ...el
                  };
                  if (!newEl.type) {
                    newEl.type = data.type;
                  }
                  newEl.name = "".concat(current.name || data.name, ".").concat(newEl.name);
                  subgroupRaw.append(newEl);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              const subgroup = subgroupRaw.render(curId);
              subgroup.className = "quickformSubgroup";
              subnode.subgroup = subgroup;
              subnode.shown = false;
              event = (e) => {
                if (e.target.checked) {
                  e.target.parentNode.appendChild(e.target.subgroup);
                  if (e.target.type === "radio") {
                    const {
                      name
                    } = e.target;
                    if (e.target.form.names[name] !== void 0) {
                      e.target.form.names[name].parentNode.removeChild(e.target.form.names[name].subgroup);
                    }
                    e.target.form.names[name] = e.target;
                  }
                } else {
                  e.target.parentNode.removeChild(e.target.subgroup);
                }
              };
              subnode.addEventListener("change", event, true);
              if (current.checked) {
                subnode.parentNode.appendChild(subgroup);
              }
            } else if (data.type === "radio") {
              event = (e) => {
                if (e.target.checked) {
                  const {
                    name
                  } = e.target;
                  if (e.target.form.names[name] !== void 0) {
                    e.target.form.names[name].parentNode.removeChild(e.target.form.names[name].subgroup);
                  }
                  delete e.target.form.names[name];
                }
              };
              subnode.addEventListener("change", event, true);
            }
            if (data.event) {
              subnode.addEventListener("change", data.event, false);
            } else if (current.event) {
              subnode.addEventListener("change", current.event, true);
            }
          }
        }
        if (data.shiftClickSupport && data.type === "checkbox") {
          Morebits.checkboxShiftClickSupport(Morebits.quickForm.getElements(node, data.name));
        }
        break;
      case "number":
      case "input":
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.appendChild(Morebits.createHtml(data.label));
          label.setAttribute("for", data.id || id);
        }
        subnode = node.appendChild(document.createElement("input"));
        if (data.value) {
          subnode.setAttribute("value", data.value);
        }
        if (data.placeholder) {
          subnode.setAttribute("placeholder", data.placeholder);
        }
        subnode.setAttribute("name", data.name);
        if (data.type === "input") {
          subnode.setAttribute("type", "text");
        } else {
          subnode.setAttribute("type", "number");
          for (var _i2 = 0, _arr = ["min", "max", "step", "list"]; _i2 < _arr.length; _i2++) {
            const att = _arr[_i2];
            if (data[att]) {
              subnode.setAttribute(att, data[att]);
            }
          }
        }
        for (var _i3 = 0, _arr2 = ["value", "size", "placeholder", "maxlength"]; _i3 < _arr2.length; _i3++) {
          const att = _arr2[_i3];
          if (data[att]) {
            subnode.setAttribute(att, data[att]);
          }
        }
        for (var _i4 = 0, _arr3 = ["disabled", "required", "readonly"]; _i4 < _arr3.length; _i4++) {
          const att = _arr3[_i4];
          if (data[att]) {
            subnode.setAttribute(att, att);
          }
        }
        if (data.event) {
          subnode.addEventListener("keyup", data.event, false);
        }
        childContainer = subnode;
        break;
      case "dyninput": {
        const min = data.min || 1;
        const max = data.max || Number.POSITIVE_INFINITY;
        node = document.createElement("div");
        label = node.appendChild(document.createElement("h5"));
        label.appendChild(Morebits.createHtml(data.label));
        const listNode = node.appendChild(document.createElement("div"));
        const more = this.compute({
          type: "button",
          label: "更多",
          disabled: min >= max,
          event: (e) => {
            const newNode = new Morebits.quickForm.element(e.target.sublist);
            e.target.area.appendChild(newNode.render());
            if (++e.target.counter >= e.target.max) {
              e.target.disabled = true;
            }
            e.stopPropagation();
          }
        });
        node.appendChild(more[0]);
        const [, moreButton] = more;
        const sublist = {
          type: "_dyninput_element",
          label: data.sublabel || data.label,
          name: data.name,
          value: data.value,
          size: data.size,
          remove: false,
          maxlength: data.maxlength,
          event: data.event
        };
        for (i = 0; i < min; ++i) {
          const elem = new Morebits.quickForm.element(sublist);
          listNode.appendChild(elem.render());
        }
        sublist.remove = true;
        sublist.morebutton = moreButton;
        sublist.listnode = listNode;
        moreButton.sublist = sublist;
        moreButton.area = listNode;
        moreButton.max = max - min;
        moreButton.counter = 0;
        break;
      }
      case "_dyninput_element":
        node = document.createElement("div");
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.appendChild(document.createTextNode(data.label));
          label.setAttribute("for", id);
        }
        subnode = node.appendChild(document.createElement("input"));
        if (data.value) {
          subnode.setAttribute("value", data.value);
        }
        subnode.setAttribute("name", data.name);
        subnode.setAttribute("type", "text");
        if (data.size) {
          subnode.setAttribute("size", data.size);
        }
        if (data.maxlength) {
          subnode.setAttribute("maxlength", data.maxlength);
        }
        if (data.event) {
          subnode.addEventListener("keyup", data.event, false);
        }
        if (data.remove) {
          const remove = this.compute({
            type: "button",
            label: "移除",
            event: (e) => {
              const list = e.target.listnode;
              const node_ = e.target.inputnode;
              const more = e.target.morebutton;
              list.removeChild(node_);
              --more.counter;
              more.removeAttribute("disabled");
              e.stopPropagation();
            }
          });
          node.appendChild(remove[0]);
          const [, removeButton] = remove;
          removeButton.inputnode = node;
          removeButton.listnode = data.listnode;
          removeButton.morebutton = data.morebutton;
        }
        break;
      case "hidden":
        node = document.createElement("input");
        node.setAttribute("type", "hidden");
        node.values = data.value;
        node.setAttribute("value", data.value);
        node.setAttribute("name", data.name);
        break;
      case "header":
        node = document.createElement("h5");
        node.appendChild(Morebits.createHtml(data.label));
        break;
      case "div":
        node = document.createElement("div");
        if (data.name) {
          node.setAttribute("name", data.name);
        }
        if (data.label) {
          const result = document.createElement("span");
          result.className = "quickformDescription";
          result.appendChild(Morebits.createHtml(data.label));
          node.appendChild(result);
        }
        break;
      case "submit":
        node = document.createElement("span");
        childContainer = node.appendChild(document.createElement("input"));
        childContainer.setAttribute("type", "submit");
        if (data.label) {
          childContainer.setAttribute("value", data.label);
        }
        childContainer.setAttribute("name", data.name || "submit");
        if (data.disabled) {
          childContainer.disabled = true;
        }
        break;
      case "button":
        node = document.createElement("span");
        childContainer = node.appendChild(document.createElement("input"));
        childContainer.setAttribute("type", "button");
        if (data.label) {
          childContainer.setAttribute("value", data.label);
        }
        childContainer.setAttribute("name", data.name);
        if (data.disabled) {
          childContainer.disabled = true;
        }
        if (data.event) {
          childContainer.addEventListener("click", data.event, false);
        }
        break;
      case "textarea":
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        if (data.label) {
          label = node.appendChild(document.createElement("h5"));
          const labelElement = document.createElement("label");
          labelElement.appendChild(Morebits.createHtml(data.label));
          labelElement.setAttribute("for", data.id || id);
          label.appendChild(labelElement);
        }
        subnode = node.appendChild(document.createElement("textarea"));
        subnode.setAttribute("name", data.name);
        if (data.cols) {
          subnode.setAttribute("cols", data.cols);
        }
        if (data.rows) {
          subnode.setAttribute("rows", data.rows);
        }
        if (data.disabled) {
          subnode.disabled = true;
        }
        if (data.required) {
          subnode.setAttribute("required", "required");
        }
        if (data.readonly) {
          subnode.setAttribute("readonly", "readonly");
        }
        if (data.value) {
          subnode.value = data.value;
        }
        if (data.placeholder) {
          subnode.placeholder = data.placeholder;
        }
        childContainer = subnode;
        break;
      default:
        throw new Error("Morebits.quickForm: unknown element type ".concat(data.type.toString()));
    }
    if (!childContainer) {
      childContainer = node;
    }
    if (data.tooltip) {
      Morebits.quickForm.element.generateTooltip(label || node, data);
    }
    if (data.extra) {
      childContainer.extra = data.extra;
    }
    if (data.$data) {
      $(childContainer).data(data.$data);
    }
    if (data.style) {
      childContainer.setAttribute("style", data.style);
    }
    if (data.className) {
      childContainer.className = childContainer.className ? "".concat(childContainer.className, " ").concat(data.className) : data.className;
    }
    childContainer.setAttribute("id", data.id || id);
    return [node, childContainer];
  };
  Morebits.quickForm.element.generateTooltip = (node, data) => {
    const tooltipButton = node.appendChild(document.createElement("span"));
    tooltipButton.className = "morebits-tooltipButton";
    tooltipButton.title = data.tooltip;
    tooltipButton.appendChild(document.createTextNode("?"));
    $(tooltipButton).tooltip({
      position: {
        my: "left top",
        at: "center bottom",
        collision: "flipfit"
      },
      // Deprecated in UI 1.12, but MW stuck on 1.9.2 indefinitely; see #398 and T71386
      tooltipClass: "morebits-ui-tooltip"
    });
  };
  Morebits.quickForm.getInputData = (form) => {
    const result = {};
    var _iterator5 = _createForOfIteratorHelper(form.elements), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const field = _step5.value;
        if (field.disabled || !field.name || !field.type || field.type === "submit" || field.type === "button") {
          continue;
        }
        const fieldNameNorm = field.name.slice(field.name.indexOf(".") + 1);
        switch (field.type) {
          case "radio":
            if (field.checked) {
              result[fieldNameNorm] = field.value;
            }
            break;
          case "checkbox":
            if (field.dataset.single) {
              result[fieldNameNorm] = field.checked;
            } else {
              result[fieldNameNorm] || (result[fieldNameNorm] = []);
              if (field.checked) {
                result[fieldNameNorm][result[fieldNameNorm].length] = field.value;
              }
            }
            break;
          case "select-multiple":
            result[fieldNameNorm] = $(field).val();
            break;
          case "text":
          case "textarea":
            result[fieldNameNorm] = field.value.trim();
            break;
          default:
            if (field.value) {
              result[fieldNameNorm] = field.value;
            }
            break;
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return result;
  };
  Morebits.quickForm.getElements = (form, fieldName) => {
    const $form = $(form);
    fieldName = $.escapeSelector(fieldName);
    let $elements = $form.find('[name="'.concat(fieldName, '"]'));
    if ($elements.length > 0) {
      return $elements.toArray();
    }
    $elements = $form.find("#".concat(fieldName));
    return $elements.toArray();
  };
  Morebits.quickForm.getCheckboxOrRadio = (elementArray, value) => {
    const found = elementArray.filter((element) => {
      return element.value === value;
    });
    if (found.length > 0) {
      return found[0];
    }
    return null;
  };
  Morebits.quickForm.getElementContainer = (element) => {
    if (element instanceof HTMLFieldSetElement || element instanceof HTMLDivElement || element instanceof HTMLHeadingElement) {
      return element;
    }
    return element.parentNode;
  };
  Morebits.quickForm.getElementLabelObject = (element) => {
    if (element.type === "button" || element.type === "submit" || element instanceof HTMLDivElement || element instanceof HTMLHeadingElement) {
      return element;
    } else if (element instanceof HTMLFieldSetElement) {
      return element.querySelector("legend");
    } else if (element instanceof HTMLTextAreaElement) {
      return element.parentNode.querySelector("h5");
    }
    return element.parentNode.querySelector("label");
  };
  Morebits.quickForm.getElementLabel = (element) => {
    const labelElement = Morebits.quickForm.getElementLabelObject(element);
    if (!labelElement) {
      return null;
    }
    return labelElement.firstChild.textContent;
  };
  Morebits.quickForm.setElementLabel = (element, labelText) => {
    const labelElement = Morebits.quickForm.getElementLabelObject(element);
    if (!labelElement) {
      return false;
    }
    labelElement.firstChild.textContent = labelText;
    return true;
  };
  Morebits.quickForm.overrideElementLabel = (element, temporaryLabelText) => {
    if (!element.hasAttribute("data-oldlabel")) {
      element.setAttribute("data-oldlabel", Morebits.quickForm.getElementLabel(element));
    }
    return Morebits.quickForm.setElementLabel(element, temporaryLabelText);
  };
  Morebits.quickForm.resetElementLabel = (element) => {
    if (element.hasAttribute("data-oldlabel")) {
      return Morebits.quickForm.setElementLabel(element, element.getAttribute("data-oldlabel"));
    }
    return null;
  };
  Morebits.quickForm.setElementVisibility = (element, visibility) => {
    $(element).toggle(visibility);
  };
  Morebits.quickForm.setElementTooltipVisibility = (element, visibility) => {
    $(Morebits.quickForm.getElementContainer(element)).find(".morebits-tooltipButton").toggle(visibility);
  };
  HTMLFormElement.prototype.getChecked = function(name, type) {
    const elements = this.elements[name];
    if (!elements) {
      return [];
    }
    const returnArray = [];
    let i;
    if (elements instanceof HTMLSelectElement) {
      const {
        options
      } = elements;
      for (i = 0; i < options.length; ++i) {
        if (options[i].selected) {
          if (options[i].values) {
            returnArray[returnArray.length] = options[i].values;
          } else {
            returnArray[returnArray.length] = options[i].value;
          }
        }
      }
    } else if (elements instanceof HTMLInputElement) {
      if (type && elements.type !== type) {
        return [];
      } else if (elements.checked) {
        return [elements.value];
      }
    } else {
      for (i = 0; i < elements.length; ++i) {
        if (elements[i].checked) {
          if (type && elements[i].type !== type) {
            continue;
          }
          if (elements[i].values) {
            returnArray[returnArray.length] = elements[i].values;
          } else {
            returnArray[returnArray.length] = elements[i].value;
          }
        }
      }
    }
    return returnArray;
  };
  HTMLFormElement.prototype.getUnchecked = function(name, type) {
    const elements = this.elements[name];
    if (!elements) {
      return [];
    }
    const returnArray = [];
    let i;
    if (elements instanceof HTMLSelectElement) {
      const {
        options
      } = elements;
      for (i = 0; i < options.length; ++i) {
        if (!options[i].selected) {
          if (options[i].values) {
            returnArray[returnArray.length] = options[i].values;
          } else {
            returnArray[returnArray.length] = options[i].value;
          }
        }
      }
    } else if (elements instanceof HTMLInputElement) {
      if (type && elements.type !== type) {
        return [];
      } else if (!elements.checked) {
        return [elements.value];
      }
    } else {
      for (i = 0; i < elements.length; ++i) {
        if (!elements[i].checked) {
          if (type && elements[i].type !== type) {
            continue;
          }
          if (elements[i].values) {
            returnArray[returnArray.length] = elements[i].values;
          } else {
            returnArray[returnArray.length] = elements[i].value;
          }
        }
      }
    }
    return returnArray;
  };
  Morebits.ip = {
    /**
     * Converts an IPv6 address to the canonical form stored and used by MediaWiki.
     * JavaScript translation of the {@link https://gerrit.wikimedia.org/r/plugins/gitiles/mediawiki/core/+/8eb6ac3e84ea3312d391ca96c12c49e3ad0753bb/includes/utils/IP.php#131|`IP::sanitizeIP()`}
     * function from the IPUtils library.  Addresses are verbose, uppercase,
     * normalized, and expanded to 8 words.
     *
     * @param {string} address - The IPv6 address, with or without CIDR.
     * @returns {string}
     */
    sanitizeIPv6: (address) => {
      address = address.trim();
      if (address === "") {
        return null;
      }
      if (!mw.util.isIPv6Address(address, true)) {
        return address;
      }
      address = address.toUpperCase();
      const abbrevPos = address.indexOf("::");
      if (abbrevPos > -1) {
        const CIDRStart = address.indexOf("/");
        const addressEnd = CIDRStart === -1 ? address.length - 1 : CIDRStart - 1;
        let repeat;
        let extra;
        let pad;
        if (abbrevPos === 0) {
          repeat = "0:";
          extra = address === "::" ? "0" : "";
          pad = 9;
        } else if (abbrevPos === addressEnd - 1) {
          repeat = ":0";
          extra = "";
          pad = 9;
        } else {
          repeat = ":0";
          extra = ":";
          pad = 8;
        }
        let replacement = repeat;
        pad -= address.split(":").length - 1;
        for (let i = 1; i < pad; i++) {
          replacement += repeat;
        }
        replacement += extra;
        address = address.replace("::", replacement);
      }
      return address.replace(/(^|:)0+([0-9A-Fa-f]{1,4})/g, "$1$2");
    },
    /**
     * Determine if the given IP address is a range.  Just conjoins
     * `mw.util.isIPAddress` with and without the `allowBlock` option.
     *
     * @param {string} ip
     * @returns {boolean} - True if given a valid IP address range, false otherwise.
     */
    isRange: (ip) => {
      return mw.util.isIPAddress(ip, true) && !mw.util.isIPAddress(ip);
    },
    /**
     * Check that an IP range is within the CIDR limits.  Most likely to be useful
     * in conjunction with `wgRelevantUserName`.  CIDR limits are hardcoded as /16
     * for IPv4 and /32 for IPv6.
     *
     * @param {string} ip
     * @returns {boolean} - True for valid ranges within the CIDR limits,
     * otherwise false (ranges outside the limit, single IPs, non-IPs).
     */
    validCIDR: (ip) => {
      if (Morebits.ip.isRange(ip)) {
        const subnet = Number.parseInt(ip.match(/\/(\d{1,3})$/)[1], 10);
        if (subnet) {
          if (mw.util.isIPv6Address(ip, true)) {
            if (subnet >= 32) {
              return true;
            }
          } else if (subnet >= 16) {
            return true;
          }
        }
      }
      return false;
    },
    /**
     * Get the /64 subnet for an IPv6 address.
     *
     * @param {string} ipv6 - The IPv6 address, with or without a subnet.
     * @returns {boolean|string} - False if not IPv6 or bigger than a 64,
     * otherwise the (sanitized) /64 address.
     */
    get64: (ipv6) => {
      if (!ipv6 || !mw.util.isIPv6Address(ipv6, true)) {
        return false;
      }
      const subnetMatch = ipv6.match(/\/(\d{1,3})$/);
      if (subnetMatch && Number.parseInt(subnetMatch[1], 10) < 64) {
        return false;
      }
      ipv6 = Morebits.ip.sanitizeIPv6(ipv6);
      const ipRegex = /^((?:[0-9A-F]{1,4}:){4})(?:[0-9A-F]{1,4}:){3}[0-9A-F]{1,4}(?:\/\d{1,3})?$/;
      return ipv6.replace(ipRegex, "$1".concat("0:0:0:0/64"));
    }
  };
  Morebits.string = {
    /**
     * @param {string} str
     * @returns {string}
     */
    toUpperCaseFirstChar: (str) => {
      str = str.toString();
      return str.slice(0, 1).toUpperCase() + str.slice(1);
    },
    /**
     * @param {string} str
     * @returns {string}
     */
    toLowerCaseFirstChar: (str) => {
      str = str.toString();
      return str.slice(0, 1).toLowerCase() + str.slice(1);
    },
    /**
     * Gives an array of substrings of `str` - starting with `start` and
     * ending with `end` - which is not in `skiplist`.  Intended for use
     * on wikitext with templates or links.
     *
     * @param {string} str
     * @param {string} start
     * @param {string} end
     * @param {(string[]|string)} [skiplist]
     * @returns {string[]}
     * @throws If the `start` and `end` strings aren't of the same length.
     * @throws If `skiplist` isn't an array or string
     */
    splitWeightedByKeys: (str, start, end, skiplist) => {
      if (start.length !== end.length) {
        throw new Error("start marker and end marker must be of the same length");
      }
      let level = 0;
      let initial = null;
      const result = [];
      if (!Array.isArray(skiplist)) {
        if (skiplist === void 0) {
          skiplist = [];
        } else if (typeof skiplist === "string") {
          skiplist = [skiplist];
        } else {
          throw new TypeError("non-applicable skiplist parameter");
        }
      }
      for (let i = 0; i < str.length; ++i) {
        var _iterator6 = _createForOfIteratorHelper(skiplist), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            const element = _step6.value;
            if (str.slice(i, i + element.length) === element) {
              i += element.length - 1;
              continue;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        if (str.slice(i, i + start.length) === start) {
          if (initial === null) {
            initial = i;
          }
          ++level;
          i += start.length - 1;
        } else if (str.slice(i, i + end.length) === end) {
          --level;
          i += end.length - 1;
        }
        if (!level && initial !== null) {
          result[result.length] = str.slice(initial, i + 1);
          initial = null;
        }
      }
      return result;
    },
    /**
     * Formats freeform "reason" (from a textarea) for deletion/other
     * templates that are going to be substituted, (e.g. PROD, XFD, RPP).
     * Handles `|` outside a nowiki tag.
     * Optionally, also adds a signature if not present already.
     *
     * @param {string} str
     * @param {boolean} [addSig]
     * @returns {string}
     */
    formatReasonText: (str, addSig) => {
      let reason = (str || "").toString().trim();
      const unbinder = new Morebits.unbinder(reason);
      unbinder.unbind("<no".concat("wiki", ">"), "</no".concat("wiki", ">"));
      unbinder.content = unbinder.content.replace(/\|/g, "{{".concat("subst:", "!}}"));
      reason = unbinder.rebind();
      if (addSig) {
        const sig = "~~".concat("~~");
        const sigIndex = reason.lastIndexOf(sig);
        if (sigIndex === -1 || sigIndex !== reason.length - sig.length) {
          reason += " ".concat(sig);
        }
      }
      return reason.trim();
    },
    /**
     * Formats a "reason" (from a textarea) for inclusion in a userspace
     * log.  Replaces newlines with {{Pb}}, and adds an extra `#` before
     * list items for proper formatting.
     *
     * @param {string} str
     * @returns {string}
     */
    formatReasonForLog: (str) => {
      return str.replace(/\n+/g, "{{pb}}").replace(/^(#+)/gm, "#$1").replace(/^(\*+)/gm, "#$1");
    },
    /**
     * Like `String.prototype.replace()`, but escapes any dollar signs in
     * the replacement string.  Useful when the the replacement string is
     * arbitrary, such as a username or freeform user input, and could
     * contain dollar signs.
     *
     * @param {string} string - Text in which to replace.
     * @param {(string|RegExp)} pattern
     * @param {string} replacement
     * @returns {string}
     */
    safeReplace: (string, pattern, replacement) => {
      return string.replace(pattern, replacement.replace(/\$/g, "$$$$"));
    },
    /**
     * Determine if the user-provided expiration will be considered an
     * infinite-length by MW.
     *
     * @see {@link https://phabricator.wikimedia.org/T68646}
     *
     * @param {string} expiry
     * @returns {boolean}
     */
    isInfinity: (expiry) => {
      return ["indefinite", "infinity", "infinite", "never"].includes(expiry);
    },
    /**
     * Escapes a string to be used in a RegExp, replacing spaces and
     * underscores with `[_ ]` as they are often equivalent.
     *
     * @param {string} text - String to be escaped.
     * @returns {string} - The escaped text.
     */
    escapeRegExp: (text) => {
      return mw.util.escapeRegExp(text).replace(/ |_/g, "[_ ]");
    },
    /**
     * formatTime
     *
     * @param {*} time The string to foramt
     * @returns {string}
     */
    formatTime: (time) => {
      let m;
      if ((m = time.match(/^\s*(\d+)\s*sec(ond)?s?\s*$/)) !== null) {
        return "".concat(m[1], "秒");
      }
      if ((m = time.match(/^\s*(\d+)\s*min(ute)?s?\s*$/)) !== null) {
        return "".concat(m[1], "分");
      }
      if ((m = time.match(/^\s*(\d+)\s*hours?\s*$/)) !== null) {
        return m[1] + window.wgULS("小时", "小時");
      }
      if ((m = time.match(/^\s*(\d+)\s*days?\s*$/)) !== null) {
        return "".concat(m[1], "天");
      }
      if ((m = time.match(/^\s*(\d+)\s*weeks?\s*$/)) !== null) {
        return m[1] + window.wgULS("周", "週");
      }
      if ((m = time.match(/^\s*(\d+)\s*months?\s*$/)) !== null) {
        return m[1] + window.wgULS("个月", "個月");
      }
      if ((m = time.match(/^\s*(\d+)\s*years?\s*$/)) !== null) {
        return "".concat(m[1], "年");
      }
      if (Morebits.string.isInfinity(time.trim())) {
        return window.wgULS("无限期", "無限期");
      }
      return time;
    },
    /**
     * Append punctuation to a string when it's missing
     *
     * @param {string} str
     * @param {string} punctuation
     * @returns {string}
     */
    appendPunctuation: (str, punctuation) => {
      if (punctuation === void 0) {
        punctuation = "。";
      }
      if (str.search(/[.?!;。？！；]$/) === -1) {
        str += punctuation;
      }
      return str;
    }
  };
  Morebits.array = {
    /**
     * Remove duplicated items from an array.
     *
     * @param {Array} arr
     * @returns {Array} A copy of the array with duplicates removed.
     * @throws When provided a non-array.
     */
    uniq: (arr) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("A non-array object passed to Morebits.array.uniq");
      }
      return arr.filter((item, idx) => {
        return arr.indexOf(item) === idx;
      });
    },
    /**
     * Remove non-duplicated items from an array.
     *
     * @param {Array} arr
     * @returns {Array} A copy of the array with the first instance of each value
     * removed; subsequent instances of those values (duplicates) remain.
     * @throws When provided a non-array.
     */
    dups: (arr) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("A non-array object passed to Morebits.array.dups");
      }
      return arr.filter((item, idx) => {
        return arr.indexOf(item) !== idx;
      });
    },
    /**
     * Break up an array into smaller arrays.
     *
     * @param {Array} arr
     * @param {number} size - Size of each chunk (except the last, which could be different).
     * @returns {Array[]} An array containing the smaller, chunked arrays.
     * @throws When provided a non-array.
     */
    chunk: (arr, size) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("A non-array object passed to Morebits.array.chunk");
      }
      if (typeof size !== "number" || size <= 0) {
        return [arr];
      }
      const numChunks = Math.ceil(arr.length / size);
      const result = Array.from({
        length: numChunks
      });
      for (let i = 0; i < numChunks; i++) {
        result[i] = arr.slice(i * size, (i + 1) * size);
      }
      return result;
    }
  };
  Morebits.select2 = {
    matchers: {
      /**
       * Custom matcher in which if the optgroup name matches, all options in that
       * group are shown, like in jquery.chosen.
       *
       * @param {*} params
       * @param {*} data
       */
      optgroupFull: (params, data) => {
        const originalMatcher = $.fn.select2.defaults.defaults.matcher;
        const result = originalMatcher(params, data);
        if (result && params.term && data.text.toUpperCase().includes(params.term.toUpperCase())) {
          result.children = data.children;
        }
        return result;
      },
      /**
       * Custom matcher that matches from the beginning of words only.
       *
       * @param {*} params
       * @param {*} data
       */
      wordBeginning: (params, data) => {
        const originalMatcher = $.fn.select2.defaults.defaults.matcher;
        const result = originalMatcher(params, data);
        if (!params.term || result && new RegExp("\\b".concat(mw.util.escapeRegExp(params.term)), "i").test(result.text)) {
          return result;
        }
        return null;
      }
    },
    /**
     * Underline matched part of options.
     *
     * @param {*} data
     */
    highlightSearchMatches: (data) => {
      const searchTerm = Morebits.select2SearchQuery;
      if (!searchTerm || data.loading) {
        return data.text;
      }
      const idx = data.text.toUpperCase().indexOf(searchTerm.toUpperCase());
      if (idx < 0) {
        return data.text;
      }
      return $("<span>").append(data.text.slice(0, idx), $("<span>").css("text-decoration", "underline").text(data.text.slice(idx, idx + searchTerm.length)), data.text.slice(idx + searchTerm.length));
    },
    /**
     * Intercept query as it is happening, for use in highlightSearchMatches.
     *
     * @param {*} params
     */
    queryInterceptor: (params) => {
      Morebits.select2SearchQuery = params && params.term;
    },
    /**
     * Open dropdown and begin search when the `.select2-selection` has
     * focus and a key is pressed.
     *
     * @param {KeyboardEvent} ev
     * @see {@link https://github.com/select2/select2/issues/3279#issuecomment-442524147}
     */
    autoStart: (ev) => {
      if (ev.which < 48) {
        return;
      }
      let target = $(ev.target).closest(".select2-container");
      if (!target.length) {
        return;
      }
      target = target.prev();
      target.select2("open");
      const search = target.data("select2").dropdown.$search || target.data("select2").selection.$search;
      search[0].focus();
    }
  };
  Morebits.unbinder = function(string) {
    if (typeof string !== "string") {
      throw new TypeError("not a string");
    }
    this.content = string;
    this.counter = 0;
    this.history = {};
    this.prefix = "%UNIQ::".concat(Math.random(), "::");
    this.postfix = "::UNIQ%";
  };
  Morebits.unbinder.prototype = {
    /**
     * Hide the region encapsulated by the `prefix` and `postfix` from
     * string processing.  `prefix` and `postfix` will be used in a
     * RegExp, so items that need escaping should be use `\\`.
     *
     * @param {string} prefix
     * @param {string} postfix
     * @throws If either `prefix` or `postfix` is missing.
     */
    unbind(prefix, postfix) {
      if (!prefix || !postfix) {
        throw new Error("Both prefix and postfix must be provided");
      }
      const re = new RegExp("".concat(prefix, "([\\s\\S]*?)").concat(postfix), "g");
      this.content = this.content.replace(re, Morebits.unbinder.getCallback(this));
    },
    /**
     * Restore the hidden portion of the `content` string.
     *
     * @returns {string} The processed output.
     */
    rebind() {
      let {
        content
      } = this;
      for (const current in this.history) {
        if (!Object.hasOwn(this.history, current)) {
          continue;
        }
        content = content.replace(current, this.history[current]);
      }
      return content;
    },
    prefix: null,
    // %UNIQ::0.5955981644938324::
    postfix: null,
    // ::UNIQ%
    content: null,
    // string
    counter: null,
    // 0++
    history: null
    // {}
  };
  Morebits.unbinder.getCallback = (self) => {
    return (match) => {
      const current = self.prefix + self.counter + self.postfix;
      self.history[current] = match;
      ++self.counter;
      return current;
    };
  };
  Morebits.date = function(...args) {
    if (args.length === 1) {
      const [param] = args;
      if (/^\d{14}$/.test(param)) {
        const digitMatch = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/.exec(param);
        if (digitMatch) {
          this._d = new Date(Reflect.apply(Date.UTC, null, [digitMatch[1], digitMatch[2] - 1, digitMatch[3], digitMatch[4], digitMatch[5], digitMatch[6]]));
        }
      } else if (typeof param === "string") {
        const dateParts = Morebits.l10n.signatureTimestampFormat(param);
        if (dateParts) {
          this._d = new Date(Date.UTC.apply(null, dateParts));
        }
      }
    }
    if (!this._d) {
      this._d = new (Function.prototype.bind.apply(Date, [Date, ...(0, import_ext_gadget.generateArray)(args)]))();
    }
    if (!this.isValid()) {
      mw.log.warn("Invalid Morebits.date initialisation:", args);
    }
  };
  Morebits.date.localeData = {
    // message names here correspond to MediaWiki message names
    // No i18n at this time
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    daysShort: ["日", "一", "二", "三", "四", "五", "六"],
    relativeTimes: {
      thisDay: "[今天]A hh:mm",
      prevDay: "[昨天]A hh:mm",
      nextDay: "[明天]A hh:mm",
      thisWeek: "ddddA hh:mm",
      pastWeek: "[上]ddddA hh:mm",
      other: "YYYY-MM-DD"
    }
  };
  Morebits.date.unitMap = {
    seconds: "Seconds",
    minutes: "Minutes",
    hours: "Hours",
    days: "Date",
    weeks: "Week",
    // Not a function but handled in `add` through cunning use of multiplication
    months: "Month",
    years: "FullYear"
  };
  Morebits.date.prototype = {
    /** @returns {boolean} */
    isValid() {
      return !Number.isNaN(this.getTime());
    },
    /**
     * @param {(Date|Morebits.date)} date
     * @returns {boolean}
     */
    isBefore(date) {
      return this.getTime() < date.getTime();
    },
    /**
     * @param {(Date|Morebits.date)} date
     * @returns {boolean}
     */
    isAfter(date) {
      return this.getTime() > date.getTime();
    },
    /** @returns {string} */
    getUTCMonthName() {
      return Morebits.date.localeData.months[this.getUTCMonth()];
    },
    /** @returns {string} */
    getUTCMonthNameAbbrev() {
      return Morebits.date.localeData.monthsShort[this.getUTCMonth()];
    },
    /** @returns {string} */
    getMonthName() {
      return Morebits.date.localeData.months[this.getMonth()];
    },
    /** @returns {string} */
    getMonthNameAbbrev() {
      return Morebits.date.localeData.monthsShort[this.getMonth()];
    },
    /** @returns {string} */
    getUTCDayName() {
      return Morebits.date.localeData.days[this.getUTCDay()];
    },
    /** @returns {string} */
    getUTCDayNameAbbrev() {
      return Morebits.date.localeData.daysShort[this.getUTCDay()];
    },
    /** @returns {string} */
    getDayName() {
      return Morebits.date.localeData.days[this.getDay()];
    },
    /** @returns {string} */
    getDayNameAbbrev() {
      return Morebits.date.localeData.daysShort[this.getDay()];
    },
    /**
     * Add a given number of minutes, hours, days, weeks, months, or years to the date.
     * This is done in-place. The modified date object is also returned, allowing chaining.
     *
     * @param {number} number - Should be an integer.
     * @param {string} unit
     * @throws If invalid or unsupported unit is given.
     * @returns {Morebits.date}
     */
    add(number, unit) {
      let num = Number.parseInt(number, 10);
      if (Number.isNaN(num)) {
        throw new TypeError('Invalid number "'.concat(number, '" provided.'));
      }
      unit = unit.toLowerCase();
      const {
        unitMap
      } = Morebits.date;
      let unitNorm = unitMap[unit] || unitMap["".concat(unit, "s")];
      if (unitNorm) {
        if (unitNorm === "Week") {
          unitNorm = "Date";
          num *= 7;
        }
        this["set".concat(unitNorm)](this["get".concat(unitNorm)]() + num);
        return this;
      }
      throw new Error('Invalid unit "'.concat(unit, '": Only ').concat(Object.keys(unitMap).join(", "), " are allowed."));
    },
    /**
     * Subtracts a given number of minutes, hours, days, weeks, months, or years to the date.
     * This is done in-place. The modified date object is also returned, allowing chaining.
     *
     * @param {number} number - Should be an integer.
     * @param {string} unit
     * @throws If invalid or unsupported unit is given.
     * @returns {Morebits.date}
     */
    subtract(number, unit) {
      return this.add(-number, unit);
    },
    /**
     * Format the date into a string per the given format string.
     * Replacement syntax is a subset of that in moment.js:
     *
     * | Syntax | Output |
     * |--------|--------|
     * | H | Hours (24-hour) |
     * | HH | Hours (24-hour, padded to 2 digits) |
     * | h | Hours (12-hour) |
     * | hh | Hours (12-hour, padded to 2 digits) |
     * | A | AM or PM |
     * | m | Minutes |
     * | mm | Minutes (padded to 2 digits) |
     * | s | Seconds |
     * | ss | Seconds (padded to 2 digits) |
     * | SSS | Milliseconds fragment, 3 digits |
     * | d | Day number of the week (Sun=0) |
     * | ddd | Abbreviated day name |
     * | dddd | Full day name |
     * | D | Date |
     * | DD | Date (padded to 2 digits) |
     * | M | Month number (1-indexed) |
     * | MM | Month number (1-indexed, padded to 2 digits) |
     * | MMM | Abbreviated month name |
     * | MMMM | Full month name |
     * | Y | Year |
     * | YY | Final two digits of year (20 for 2020, 42 for 1942) |
     * | YYYY | Year (same as `Y`) |
     *
     * @param {string} formatstr - Format the date into a string, using
     * the replacement syntax.  Use `[` and `]` to escape items.  If not
     * provided, will return the ISO-8601-formatted string.
     * @param {(string|number)} [zone=system] - `system` (for browser-default time zone),
     * `utc`, or specify a time zone as number of minutes relative to UTC.
     * @returns {string}
     */
    format(formatstr, zone) {
      if (!this.isValid()) {
        return "Invalid date";
      }
      let udate = this;
      if (zone === "utc") {
        udate = new Morebits.date(this.getTime()).add(this.getTimezoneOffset(), "minutes");
      } else if (typeof zone === "number") {
        udate = new Morebits.date(this.getTime()).add(this.getTimezoneOffset() + zone, "minutes");
      }
      if (!formatstr) {
        return udate.toISOString();
      }
      const pad = (num, len) => {
        len || (len = 2);
        return "00".concat(num).toString().slice(0 - len);
      };
      const h24 = udate.getHours();
      const m = udate.getMinutes();
      const s = udate.getSeconds();
      const ms = udate.getMilliseconds();
      const D = udate.getDate();
      const M = udate.getMonth() + 1;
      const Y = udate.getFullYear();
      const h12 = h24 % 12 || 12;
      const amOrPm = h24 >= 12 ? "下午" : "上午";
      const replacementMap = {
        HH: pad(h24),
        H: h24,
        hh: pad(h12),
        h: h12,
        A: amOrPm,
        mm: pad(m),
        m,
        ss: pad(s),
        s,
        SSS: pad(ms, 3),
        dddd: udate.getDayName(),
        ddd: udate.getDayNameAbbrev(),
        d: udate.getDay(),
        DD: pad(D),
        D,
        MMMM: udate.getMonthName(),
        MMM: udate.getMonthNameAbbrev(),
        MM: pad(M),
        M,
        YYYY: Y,
        YY: pad(Y % 100),
        Y
      };
      const unbinder = new Morebits.unbinder(formatstr);
      unbinder.unbind("\\[", "\\]");
      unbinder.content = unbinder.content.replace(
        /* Regex notes:
         * d(d{2,3})? matches exactly 1, 3 or 4 occurrences of 'd' ('dd' is treated as a double match of 'd')
         * Y{1,2}(Y{2})? matches exactly 1, 2 or 4 occurrences of 'Y'
         */
        /H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|d(d{2,3})?|D{1,2}|M{1,4}|Y{1,2}(Y{2})?|A/g,
        (match) => {
          return replacementMap[match];
        }
      );
      return unbinder.rebind().replace(/\[(.*?)\]/g, "$1");
    },
    /**
     * Gives a readable relative time string such as "Yesterday at 6:43 PM" or "Last Thursday at 11:45 AM".
     * Similar to `calendar` in moment.js, but with time zone support.
     *
     * @param {(string|number)} [zone=system] - 'system' (for browser-default time zone),
     * 'utc' (for UTC), or specify a time zone as number of minutes past UTC.
     * @returns {string}
     */
    calendar(zone) {
      const dateDiff = ((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0) - new Date(this).setHours(0, 0, 0, 0)) / 864e5;
      switch (true) {
        case dateDiff === 0:
          return this.format(Morebits.date.localeData.relativeTimes.thisDay, zone);
        case dateDiff === 1:
          return this.format(Morebits.date.localeData.relativeTimes.prevDay, zone);
        case (dateDiff > 0 && dateDiff < 7):
          return this.format(Morebits.date.localeData.relativeTimes.pastWeek, zone);
        case dateDiff === -1:
          return this.format(Morebits.date.localeData.relativeTimes.nextDay, zone);
        case (dateDiff < 0 && dateDiff > -7):
          return this.format(Morebits.date.localeData.relativeTimes.thisWeek, zone);
        default:
          return this.format(Morebits.date.localeData.relativeTimes.other, zone);
      }
    },
    /**
     * Get a regular expression that matches wikitext section titles, such
     * as `==December 2019==` or `=== Jan 2018 ===`.
     *
     * @returns {RegExp}
     */
    monthHeaderRegex() {
      return new RegExp("^(==+)\\s*".concat(this.getUTCFullYear(), "年(?:").concat(this.getUTCMonthName(), "|").concat(this.getUTCMonthNameAbbrev(), ")\\s*\\1"), "mg");
    },
    /**
     * Creates a wikitext section header with the month and year.
     *
     * @param {number} [level=2] - Header level.  Pass 0 for just the text
     * with no wikitext markers (==).
     * @returns {string}
     */
    monthHeader(level) {
      level = Number.parseInt(level, 10);
      level = Number.isNaN(level) ? 2 : level;
      const header = "=".repeat(level);
      const text = "".concat(this.getUTCFullYear(), "年").concat(this.getUTCMonthName());
      if (header.length) {
        return "".concat(header, " ").concat(text, " ").concat(header);
      }
      return text;
    }
  };
  var _iterator7 = _createForOfIteratorHelper(Object.getOwnPropertyNames(Date.prototype)), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      const func = _step7.value;
      if (!["add", "getDayName", "getMonthName"].includes(func)) {
        Morebits.date.prototype[func] = function(...args) {
          return this._d[func](...args);
        };
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  Morebits.wiki = {};
  Morebits.wiki.isPageRedirect = () => {
    console.warn("[Morebits] NOTE: Morebits.wiki.isPageRedirect has been deprecated, use Morebits.isPageRedirect instead.");
    return Morebits.isPageRedirect();
  };
  Morebits.wiki.numberOfActionsLeft = 0;
  Morebits.wiki.nbrOfCheckpointsLeft = 0;
  Morebits.wiki.actionCompleted = (self) => {
    if (--Morebits.wiki.numberOfActionsLeft <= 0 && Morebits.wiki.nbrOfCheckpointsLeft <= 0) {
      Morebits.wiki.actionCompleted.event(self);
    }
  };
  Morebits.wiki.actionCompleted.event = () => {
    if (Morebits.wiki.actionCompleted.notice) {
      Morebits.status.actionCompleted(Morebits.wiki.actionCompleted.notice);
    }
    if (Morebits.wiki.actionCompleted.redirect) {
      if (!/^\w+:\/\//.test(Morebits.wiki.actionCompleted.redirect)) {
        Morebits.wiki.actionCompleted.redirect = mw.util.getUrl(Morebits.wiki.actionCompleted.redirect);
        if (Morebits.wiki.actionCompleted.followRedirect === false) {
          Morebits.wiki.actionCompleted.redirect += "?redirect=no";
        }
      }
      setTimeout(() => {
        location = Morebits.wiki.actionCompleted.redirect;
      }, Morebits.wiki.actionCompleted.timeOut);
    }
  };
  Morebits.wiki.actionCompleted.timeOut = window.wpActionCompletedTimeOut === void 0 ? 5e3 : window.wpActionCompletedTimeOut;
  Morebits.wiki.actionCompleted.redirect = null;
  Morebits.wiki.actionCompleted.notice = null;
  Morebits.wiki.addCheckpoint = () => {
    ++Morebits.wiki.nbrOfCheckpointsLeft;
  };
  Morebits.wiki.removeCheckpoint = () => {
    if (--Morebits.wiki.nbrOfCheckpointsLeft <= 0 && Morebits.wiki.numberOfActionsLeft <= 0) {
      Morebits.wiki.actionCompleted.event();
    }
  };
  Morebits.wiki.api = function(currentAction, query, onSuccess, statusElement, onError) {
    var _this$query;
    this.currentAction = currentAction;
    this.query = query;
    this.query.assert = "user";
    if (!query.errorformat || !["wikitext", "plaintext"].includes(query.errorformat)) {
      this.query.errorformat = "html";
    }
    (_this$query = this.query).uselang || (_this$query.uselang = "content");
    this.query.errorlang = "uselang";
    this.query.errorsuselocal = 1;
    this.onSuccess = onSuccess;
    this.onError = onError;
    if (statusElement) {
      this.setStatusElement(statusElement);
    } else {
      this.statelem = new Morebits.status(currentAction);
    }
    if (!query.format) {
      this.query.format = "xml";
    } else if (query.format === "json" && !query.formatversion) {
      this.query.formatversion = "2";
    } else if (!["xml", "json"].includes(query.format)) {
      this.statelem.error("Invalid API format: only xml and json are supported.");
    }
    if (query.action && ["query", "watch"].includes(query.action)) {
      delete query.tags;
    } else if (!query.tags && morebitsWikiChangeTag) {
      query.tags = morebitsWikiChangeTag;
    }
  };
  Morebits.wiki.api.prototype = {
    currentAction: "",
    onSuccess: null,
    onError: null,
    parent: window,
    // use global context if there is no parent object
    query: null,
    response: null,
    responseXML: null,
    // use `response` instead; retained for backwards compatibility
    statelem: null,
    // this non-standard name kept for backwards compatibility
    statusText: null,
    // result received from the API, normally "success" or "error"
    errorCode: null,
    // short text error code, if any, as documented in the MediaWiki API
    errorText: null,
    // full error description, if any
    badtokenRetry: false,
    // set to true if this on a retry attempted after a badtoken error
    /**
     * Keep track of parent object for callbacks.
     *
     * @param {*} parent
     */
    setParent(parent) {
      this.parent = parent;
    },
    /** @param {Morebits.status} statusElement */
    setStatusElement(statusElement) {
      this.statelem = statusElement;
      this.statelem.status(this.currentAction);
    },
    /**
     * Carry out the request.
     *
     * @param {Object} callerAjaxParameters - Do not specify a parameter unless you really
     * really want to give jQuery some extra parameters.
     * @returns {promise} - A jQuery promise object that is resolved or rejected with the api object.
     */
    post(callerAjaxParameters) {
      ++Morebits.wiki.numberOfActionsLeft;
      const queryStringArr = [];
      for (var _i5 = 0, _Object$entries2 = Object.entries(this.query); _i5 < _Object$entries2.length; _i5++) {
        const [i, val] = _Object$entries2[_i5];
        if (Array.isArray(val)) {
          queryStringArr[queryStringArr.length] = "".concat(encodeURIComponent(i), "=").concat(val.map(encodeURIComponent).join("|"));
        } else if (val !== void 0) {
          queryStringArr[queryStringArr.length] = "".concat(encodeURIComponent(i), "=").concat(encodeURIComponent(val));
        }
      }
      const queryString = queryStringArr.join("&").replace(/^(.*?)(\btoken=[^&]*)&(.*)/, "$1$3&$2");
      const ajaxparams = {
        context: this,
        type: this.query.action === "query" ? "GET" : "POST",
        url: mw.util.wikiScript("api"),
        data: queryString,
        dataType: this.query.format,
        headers: {
          "Api-User-Agent": morebitsWikiApiUserAgent
        },
        ...callerAjaxParameters
      };
      return $.ajax(ajaxparams).then(
        function onAPIsuccess(response, statusText) {
          this.statusText = statusText;
          this.response = response;
          this.responseXML = response;
          if (this.query.format === "json") {
            this.errorCode = response.errors && response.errors[0].code;
            if (this.query.errorformat === "html") {
              this.errorText = response.errors && response.errors[0].html;
            } else if (this.query.errorformat === "wikitext" || this.query.errorformat === "plaintext") {
              this.errorText = response.errors && response.errors[0].text;
            }
          } else {
            this.errorCode = $(response).find("errors error").eq(0).attr("code");
            this.errorText = $(response).find("errors error").eq(0).text();
          }
          if (typeof this.errorCode === "string") {
            return this.returnError(callerAjaxParameters);
          }
          if (this.onSuccess) {
            this.onSuccess.call(this.parent, this);
          } else {
            this.statelem.info("完成");
          }
          Morebits.wiki.actionCompleted();
          return $.Deferred().resolveWith(this.parent, [this]);
        },
        // only network and server errors reach here - complaints from the API itself are caught in success()
        function onAPIfailure(error, statusText, errorThrown) {
          this.statusText = statusText;
          this.errorThrown = errorThrown;
          this.errorText = statusText + window.wgULS("在调用API时发生了错误“", "在呼叫API時發生了錯誤「") + error.statusText + window.wgULS("”。", "」。");
          return this.returnError();
        }
      );
    },
    returnError(callerAjaxParameters) {
      if (this.errorCode === "badtoken" && !this.badtokenRetry) {
        this.statelem.warn(window.wgULS("无效令牌，获取新的令牌并重试……", "無效權杖，取得新的權杖並重試……"));
        this.badtokenRetry = true;
        return Morebits.wiki.api.getToken().then((token) => {
          this.query.token = token;
          return this.post(callerAjaxParameters);
        });
      }
      this.statelem.error("".concat(this.errorText, "（").concat(this.errorCode, "）"));
      if (this.onError) {
        this.onError.call(this.parent, this);
      }
      return $.Deferred().rejectWith(this.parent, [this]);
    },
    getStatusElement() {
      return this.statelem;
    },
    getErrorCode() {
      return this.errorCode;
    },
    getErrorText() {
      return this.errorText;
    },
    getXML() {
      return this.responseXML;
    },
    getResponse() {
      return this.response;
    }
  };
  Morebits.wiki.getCachedJson = (title) => {
    const query = {
      action: "query",
      prop: "revisions",
      titles: title,
      rvslots: "main",
      rvprop: "content",
      format: "json",
      smaxage: "3600",
      maxage: "3600"
    };
    return new Morebits.wiki.api("", query).post().then((apiobj) => {
      apiobj.getStatusElement().unlink();
      const response = apiobj.getResponse();
      const wikitext = response.query.pages[0].revisions[0].slots.main.content;
      return JSON.parse(wikitext);
    });
  };
  let morebitsWikiApiUserAgent = "Qiuwen/1.1 (morebits.js)";
  Morebits.wiki.api.setApiUserAgent = (ua) => {
    morebitsWikiApiUserAgent = "Qiuwen/1.1 (morebits.js".concat(ua ? "; ".concat(ua) : "", ")");
  };
  const morebitsWikiChangeTag = "";
  Morebits.wiki.api.getToken = () => {
    const tokenApi = new Morebits.wiki.api(window.wgULS("获取令牌", "取得權杖"), {
      action: "query",
      meta: "tokens",
      type: "csrf",
      format: "json"
    });
    return tokenApi.post().then((apiobj) => {
      return apiobj.response.query.tokens.csrftoken;
    });
  };
  Morebits.wiki.page = function(pageName, status) {
    if (!status) {
      status = window.wgULS("打开页面“", "打開頁面「") + pageName + window.wgULS("”", "」");
    }
    const ctx = {
      // backing fields for public properties
      pageName,
      pageExists: false,
      editSummary: null,
      changeTags: null,
      testActions: null,
      // array if any valid actions
      callbackParameters: null,
      statusElement: status instanceof Morebits.status ? status : new Morebits.status(status),
      // - edit
      pageText: null,
      editMode: "all",
      // save() replaces entire contents of the page by default
      appendText: null,
      // can't reuse pageText for this because pageText is needed to follow a redirect
      prependText: null,
      // can't reuse pageText for this because pageText is needed to follow a redirect
      newSectionText: null,
      newSectionTitle: null,
      createOption: null,
      minorEdit: false,
      botEdit: false,
      pageSection: null,
      maxConflictRetries: 2,
      maxRetries: 2,
      followRedirect: false,
      followCrossNsRedirect: true,
      watchlistOption: "nochange",
      watchlistExpiry: null,
      creator: null,
      timestamp: null,
      // - revert
      revertOldID: null,
      // - move
      moveDestination: null,
      moveTalkPage: false,
      moveSubpages: false,
      moveSuppressRedirect: false,
      // - protect
      protectEdit: null,
      protectMove: null,
      protectCreate: null,
      protectCascade: null,
      // - creation lookup
      lookupNonRedirectCreator: false,
      // internal status
      pageLoaded: false,
      csrfToken: null,
      loadTime: null,
      lastEditTime: null,
      pageID: null,
      contentModel: null,
      revertCurID: null,
      revertUser: null,
      watched: false,
      fullyProtected: false,
      suppressProtectWarning: false,
      conflictRetries: 0,
      retries: 0,
      // callbacks
      onLoadSuccess: null,
      onLoadFailure: null,
      onSaveSuccess: null,
      onSaveFailure: null,
      onLookupCreationSuccess: null,
      onLookupCreationFailure: null,
      onMoveSuccess: null,
      onMoveFailure: null,
      onDeleteSuccess: null,
      onDeleteFailure: null,
      onUndeleteSuccess: null,
      onUndeleteFailure: null,
      onProtectSuccess: null,
      onProtectFailure: null,
      // internal objects
      loadQuery: null,
      loadApi: null,
      saveApi: null,
      lookupCreationApi: null,
      moveApi: null,
      moveProcessApi: null,
      patrolApi: null,
      patrolProcessApi: null,
      deleteApi: null,
      deleteProcessApi: null,
      undeleteApi: null,
      undeleteProcessApi: null,
      protectApi: null,
      protectProcessApi: null
    };
    const emptyFunction = () => {
    };
    this.load = function(onSuccess, onFailure) {
      ctx.onLoadSuccess = onSuccess;
      ctx.onLoadFailure = onFailure || emptyFunction;
      if (!onSuccess) {
        ctx.statusElement.error("Internal error: no onSuccess callback provided to load()!");
        ctx.onLoadFailure(this);
        return;
      }
      ctx.loadQuery = {
        action: "query",
        prop: "info|revisions",
        inprop: "watched",
        intestactions: "edit",
        // can be expanded
        curtimestamp: "",
        meta: "tokens",
        type: "csrf",
        titles: ctx.pageName,
        format: "json"
        // don't need rvlimit=1 because we don't need rvstartid here and only one actual rev is returned by default
      };
      if (ctx.editMode === "all") {
        ctx.loadQuery.rvprop = "content|timestamp";
      } else if (ctx.editMode === "revert") {
        ctx.loadQuery.rvprop = "timestamp";
        ctx.loadQuery.rvlimit = 1;
        ctx.loadQuery.rvstartid = ctx.revertOldID;
      }
      if (ctx.followRedirect) {
        ctx.loadQuery.redirects = "";
      }
      if (typeof ctx.pageSection === "number") {
        ctx.loadQuery.rvsection = ctx.pageSection;
      }
      if (Morebits.userIsSysop) {
        ctx.loadQuery.inprop += "|protection";
      }
      ctx.loadApi = new Morebits.wiki.api(window.wgULS("抓取页面……", "抓取頁面……"), ctx.loadQuery, fnLoadSuccess, ctx.statusElement, ctx.onLoadFailure);
      ctx.loadApi.setParent(this);
      ctx.loadApi.post();
    };
    this.save = function(onSuccess, onFailure) {
      ctx.onSaveSuccess = onSuccess;
      ctx.onSaveFailure = onFailure || emptyFunction;
      const canUseMwUserToken = fnCanUseMwUserToken("edit");
      if (!ctx.pageLoaded && !canUseMwUserToken) {
        ctx.statusElement.error("Internal error: attempt to save a page that has not been loaded!");
        ctx.onSaveFailure(this);
        return;
      }
      if (!ctx.editSummary) {
        if (ctx.editMode === "new" && ctx.newSectionTitle) {
          ctx.editSummary = "";
        } else {
          ctx.statusElement.error("Internal error: edit summary not set before save!");
          ctx.onSaveFailure(this);
          return;
        }
      }
      if (ctx.fullyProtected && !ctx.suppressProtectWarning && !confirm(ctx.fullyProtected === "infinity" ? window.wgULS("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + ctx.pageName + window.wgULS("”（无限期）。\n\n单击确定以确定，或单击取消以取消操作。", "」（無限期）。\n\n點擊確定以確定，或點擊取消以取消操作。") : "".concat(window.wgULS("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + ctx.pageName + window.wgULS("”（到期：", "」（到期：") + new Morebits.date(ctx.fullyProtected).calendar("utc"), " (UTC)）。\n\n").concat(window.wgULS("单击确定以确定，或单击取消以取消操作。", "點擊確定以確定，或點擊取消以取消操作。")))) {
        ctx.statusElement.error(window.wgULS("已取消对全保护页面的编辑。", "已取消對全保護頁面的編輯。"));
        ctx.onSaveFailure(this);
        return;
      }
      ctx.retries = 0;
      const query = {
        action: "edit",
        title: ctx.pageName,
        summary: ctx.editSummary,
        token: canUseMwUserToken ? mw.user.tokens.get("csrfToken") : ctx.csrfToken,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (typeof ctx.pageSection === "number") {
        query.section = ctx.pageSection;
      }
      if (ctx.minorEdit) {
        query.minor = true;
      } else {
        query.notminor = true;
      }
      if (ctx.botEdit) {
        query.bot = true;
      }
      switch (ctx.editMode) {
        case "append":
          if (ctx.appendText === null) {
            ctx.statusElement.error("Internal error: append text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.appendtext = ctx.appendText;
          break;
        case "prepend":
          if (ctx.prependText === null) {
            ctx.statusElement.error("Internal error: prepend text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.prependtext = ctx.prependText;
          break;
        case "new":
          if (!ctx.newSectionText) {
            ctx.statusElement.error("Internal error: new section text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.section = "new";
          query.text = ctx.newSectionText;
          query.sectiontitle = ctx.newSectionTitle || ctx.editSummary;
          break;
        case "revert":
          query.undo = ctx.revertCurID;
          query.undoafter = ctx.revertOldID;
          if (ctx.lastEditTime) {
            query.basetimestamp = ctx.lastEditTime;
          }
          query.starttimestamp = ctx.loadTime;
          break;
        default:
          query.text = ctx.pageText;
          if (ctx.lastEditTime) {
            query.basetimestamp = ctx.lastEditTime;
          }
          query.starttimestamp = ctx.loadTime;
          break;
      }
      if (["recreate", "createonly", "nocreate"].includes(ctx.createOption)) {
        query[ctx.createOption] = "";
      }
      if (canUseMwUserToken && ctx.followRedirect) {
        query.redirect = true;
      }
      ctx.saveApi = new Morebits.wiki.api(window.wgULS("保存页面……", "儲存頁面……"), query, fnSaveSuccess, ctx.statusElement, fnSaveError);
      ctx.saveApi.setParent(this);
      ctx.saveApi.post();
    };
    this.append = function(onSuccess, onFailure) {
      ctx.editMode = "append";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.prepend = function(onSuccess, onFailure) {
      ctx.editMode = "prepend";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.newSection = function(onSuccess, onFailure) {
      ctx.editMode = "new";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.getPageName = () => {
      return ctx.pageName;
    };
    this.getPageText = () => {
      return ctx.pageText;
    };
    this.setPageText = (pageText) => {
      ctx.editMode = "all";
      ctx.pageText = pageText;
    };
    this.setAppendText = (appendText) => {
      ctx.editMode = "append";
      ctx.appendText = appendText;
    };
    this.setPrependText = (prependText) => {
      ctx.editMode = "prepend";
      ctx.prependText = prependText;
    };
    this.setNewSectionText = (newSectionText) => {
      ctx.editMode = "new";
      ctx.newSectionText = newSectionText;
    };
    this.setNewSectionTitle = (newSectionTitle) => {
      ctx.editMode = "new";
      ctx.newSectionTitle = newSectionTitle;
    };
    this.setEditSummary = (summary) => {
      ctx.editSummary = summary;
    };
    this.setChangeTags = (tags) => {
      ctx.changeTags = tags;
    };
    this.setCreateOption = (createOption) => {
      ctx.createOption = createOption;
    };
    this.setMinorEdit = (minorEdit) => {
      ctx.minorEdit = minorEdit;
    };
    this.setBotEdit = (botEdit) => {
      ctx.botEdit = botEdit;
    };
    this.setPageSection = (pageSection) => {
      ctx.pageSection = pageSection;
    };
    this.setMaxConflictRetries = (maxConflictRetries) => {
      ctx.maxConflictRetries = maxConflictRetries;
    };
    this.setMaxRetries = (maxRetries) => {
      ctx.maxRetries = maxRetries;
    };
    this.setWatchlist = (watchlistOption, watchlistExpiry) => {
      if (watchlistOption instanceof Morebits.date || watchlistOption instanceof Date) {
        watchlistOption = watchlistOption.toISOString();
      }
      if (watchlistExpiry === void 0) {
        watchlistExpiry = "infinity";
      } else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
        watchlistExpiry = watchlistExpiry.toISOString();
      }
      switch (watchlistOption) {
        case "nochange":
        case "no":
        case false:
        case void 0:
          ctx.watchlistOption = "nochange";
          ctx.watchlistExpiry = null;
          break;
        case "unwatch":
          ctx.watchlistOption = "unwatch";
          break;
        case "preferences":
        case "default":
          ctx.watchlistOption = "preferences";
          ctx.watchlistExpiry = watchlistExpiry;
          break;
        case "watch":
        case "yes":
        case true:
          ctx.watchlistOption = "watch";
          ctx.watchlistExpiry = watchlistExpiry;
          break;
        default:
          ctx.watchlistOption = "watch";
          ctx.watchlistExpiry = watchlistOption;
          break;
      }
    };
    this.setWatchlistExpiry = (watchlistExpiry) => {
      if (watchlistExpiry === void 0) {
        watchlistExpiry = "infinity";
      } else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
        watchlistExpiry = watchlistExpiry.toISOString();
      }
      ctx.watchlistExpiry = watchlistExpiry;
    };
    this.setWatchlistFromPreferences = (watchlistOption) => {
      console.warn("[Morebits] NOTE: Morebits.wiki.page.setWatchlistFromPreferences was deprecated December 2020, please use setWatchlist");
      if (watchlistOption) {
        ctx.watchlistOption = "preferences";
      } else {
        ctx.watchlistOption = "nochange";
      }
    };
    this.setFollowRedirect = (followRedirect, followCrossNsRedirect) => {
      if (ctx.pageLoaded) {
        ctx.statusElement.error("Internal error: cannot change redirect setting after the page has been loaded!");
        return;
      }
      ctx.followRedirect = followRedirect;
      ctx.followCrossNsRedirect = followCrossNsRedirect === void 0 ? ctx.followCrossNsRedirect : followCrossNsRedirect;
    };
    this.setLookupNonRedirectCreator = (flag) => {
      ctx.lookupNonRedirectCreator = flag;
    };
    this.setMoveDestination = (destination) => {
      ctx.moveDestination = destination;
    };
    this.setMoveTalkPage = (flag) => {
      ctx.moveTalkPage = !!flag;
    };
    this.setMoveSubpages = (flag) => {
      ctx.moveSubpages = !!flag;
    };
    this.setMoveSuppressRedirect = (flag) => {
      ctx.moveSuppressRedirect = !!flag;
    };
    this.setEditProtection = (level, expiry) => {
      ctx.protectEdit = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setMoveProtection = (level, expiry) => {
      ctx.protectMove = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setCreateProtection = (level, expiry) => {
      ctx.protectCreate = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setCascadingProtection = (flag) => {
      ctx.protectCascade = !!flag;
    };
    this.suppressProtectWarning = () => {
      ctx.suppressProtectWarning = true;
    };
    this.setOldID = (oldID) => {
      ctx.revertOldID = oldID;
    };
    this.getCurrentID = () => {
      return ctx.revertCurID;
    };
    this.getRevisionUser = () => {
      return ctx.revertUser;
    };
    this.getLastEditTime = () => {
      return ctx.lastEditTime;
    };
    this.setCallbackParameters = (callbackParameters) => {
      ctx.callbackParameters = callbackParameters;
    };
    this.getCallbackParameters = () => {
      return ctx.callbackParameters;
    };
    this.setStatusElement = (statusElement) => {
      ctx.statusElement = statusElement;
    };
    this.getStatusElement = () => {
      return ctx.statusElement;
    };
    this.exists = () => {
      return ctx.pageExists;
    };
    this.getPageID = () => {
      return ctx.pageID;
    };
    this.getContentModel = () => {
      return ctx.contentModel;
    };
    this.getWatched = () => {
      return ctx.watched;
    };
    this.getLoadTime = () => {
      return ctx.loadTime;
    };
    this.getCreator = () => {
      return ctx.creator;
    };
    this.getCreationTimestamp = () => {
      return ctx.timestamp;
    };
    this.canEdit = () => {
      return !!ctx.testActions && ctx.testActions.includes("edit");
    };
    this.lookupCreation = function(onSuccess, onFailure) {
      ctx.onLookupCreationSuccess = onSuccess;
      ctx.onLookupCreationFailure = onFailure || emptyFunction;
      if (!onSuccess) {
        ctx.statusElement.error("Internal error: no onSuccess callback provided to lookupCreation()!");
        ctx.onLookupCreationFailure(this);
        return;
      }
      const query = {
        action: "query",
        prop: "revisions",
        titles: ctx.pageName,
        rvlimit: 1,
        rvprop: "user|timestamp",
        rvdir: "newer",
        format: "json"
      };
      if (ctx.lookupNonRedirectCreator) {
        query.rvsection = 0;
        query.rvprop += "|content";
      }
      if (ctx.followRedirect) {
        query.redirects = "";
      }
      ctx.lookupCreationApi = new Morebits.wiki.api(window.wgULS("抓取页面创建者信息", "抓取頁面建立者資訊"), query, fnLookupCreationSuccess, ctx.statusElement, ctx.onLookupCreationFailure);
      ctx.lookupCreationApi.setParent(this);
      ctx.lookupCreationApi.post();
    };
    this.revert = function(onSuccess, onFailure) {
      ctx.onSaveSuccess = onSuccess;
      ctx.onSaveFailure = onFailure || emptyFunction;
      if (!ctx.revertOldID) {
        ctx.statusElement.error("Internal error: revision ID to revert to was not set before revert!");
        ctx.onSaveFailure(this);
        return;
      }
      ctx.editMode = "revert";
      this.load(fnAutoSave, ctx.onSaveFailure);
    };
    this.move = function(onSuccess, onFailure) {
      ctx.onMoveSuccess = onSuccess;
      ctx.onMoveFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "move", ctx.onMoveFailure)) {
        return;
      }
      if (!ctx.moveDestination) {
        ctx.statusElement.error("Internal error: destination page name was not set before move!");
        ctx.onMoveFailure(this);
        return;
      }
      if (fnCanUseMwUserToken("move")) {
        fnProcessMove.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("move");
        ctx.moveApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessMove, ctx.statusElement, ctx.onMoveFailure);
        ctx.moveApi.setParent(this);
        ctx.moveApi.post();
      }
    };
    this.patrol = function() {
      if (!Morebits.userIsSysop && !Morebits.userIsInGroup("patroller")) {
        return;
      }
      const $body = $("body");
      if ($body.find(".patrollink").length) {
        const patrolhref = $body.find(".patrollink a").attr("href");
        ctx.rcid = mw.util.getParamValue("rcid", patrolhref);
        fnProcessPatrol(this, this);
      } else {
        const patrolQuery = {
          action: "query",
          prop: "info",
          meta: "tokens",
          type: "patrol",
          // as long as we're querying, might as well get a token
          list: "recentchanges",
          // check if the page is unpatrolled
          titles: ctx.pageName,
          rcprop: "patrolled",
          rctitle: ctx.pageName,
          rclimit: 1,
          format: "json"
        };
        ctx.patrolApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), patrolQuery, fnProcessPatrol);
        ctx.patrolApi.setParent(this);
        ctx.patrolApi.post();
      }
    };
    this.deletePage = function(onSuccess, onFailure) {
      ctx.onDeleteSuccess = onSuccess;
      ctx.onDeleteFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "delete", ctx.onDeleteFailure)) {
        return;
      }
      if (fnCanUseMwUserToken("delete")) {
        fnProcessDelete.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("delete");
        ctx.deleteApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessDelete, ctx.statusElement, ctx.onDeleteFailure);
        ctx.deleteApi.setParent(this);
        ctx.deleteApi.post();
      }
    };
    this.undeletePage = function(onSuccess, onFailure) {
      ctx.onUndeleteSuccess = onSuccess;
      ctx.onUndeleteFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "undelete", ctx.onUndeleteFailure)) {
        return;
      }
      if (fnCanUseMwUserToken("undelete")) {
        fnProcessUndelete.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("undelete");
        ctx.undeleteApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessUndelete, ctx.statusElement, ctx.onUndeleteFailure);
        ctx.undeleteApi.setParent(this);
        ctx.undeleteApi.post();
      }
    };
    this.protect = function(onSuccess, onFailure) {
      ctx.onProtectSuccess = onSuccess;
      ctx.onProtectFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "protect", ctx.onProtectFailure)) {
        return;
      }
      if (!ctx.protectEdit && !ctx.protectMove && !ctx.protectCreate) {
        ctx.statusElement.error("Internal error: you must set edit and/or move and/or create protection before calling protect()!");
        ctx.onProtectFailure(this);
        return;
      }
      const query = fnNeedTokenInfoQuery("protect");
      ctx.protectApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessProtect, ctx.statusElement, ctx.onProtectFailure);
      ctx.protectApi.setParent(this);
      ctx.protectApi.post();
    };
    const fnCanUseMwUserToken = (action) => {
      action || (action = "edit");
      if (ctx.watchlistExpiry && !Morebits.string.isInfinity(ctx.watchlistExpiry)) {
        return false;
      }
      if (ctx.followRedirect) {
        if (!ctx.followCrossNsRedirect) {
          return false;
        }
        if (action !== "edit" || ctx.editMode === "all" || ctx.editMode === "revert") {
          return false;
        }
      }
      if (Morebits.userIsSysop && !ctx.suppressProtectWarning) {
        if (new mw.Title(Morebits.pageNameNorm).getPrefixedText() !== new mw.Title(ctx.pageName).getPrefixedText()) {
          return false;
        }
        const editRestriction = mw.config.get("wgRestrictionEdit");
        if (!editRestriction || editRestriction.includes("sysop")) {
          return false;
        }
      }
      return !!mw.user.tokens.get("csrfToken");
    };
    const fnNeedTokenInfoQuery = (action) => {
      const query = {
        action: "query",
        meta: "tokens",
        type: "csrf",
        titles: ctx.pageName,
        prop: "info",
        inprop: "watched",
        format: "json"
      };
      if (action !== "move" || Morebits.userIsSysop) {
        query.inprop += "|protection";
      }
      if (ctx.followRedirect && action !== "undelete") {
        query.redirects = "";
      }
      return query;
    };
    const fnAutoSave = (pageobj) => {
      pageobj.save(ctx.onSaveSuccess, ctx.onSaveFailure);
    };
    const fnLoadSuccess = function() {
      const response = ctx.loadApi.getResponse().query;
      if (!fnCheckPageName(response, ctx.onLoadFailure)) {
        return;
      }
      const [page] = response.pages;
      let rev;
      ctx.pageExists = !page.missing;
      if (ctx.pageExists) {
        [rev] = page.revisions;
        ctx.lastEditTime = rev.timestamp;
        ctx.pageText = rev.content;
        ctx.pageID = page.pageid;
      } else {
        ctx.pageText = "";
        ctx.pageID = 0;
      }
      ctx.csrfToken = response.tokens.csrftoken;
      if (!ctx.csrfToken) {
        ctx.statusElement.error(window.wgULS("未能获取编辑令牌。", "未能取得編輯權杖。"));
        ctx.onLoadFailure(this);
        return;
      }
      ctx.loadTime = ctx.loadApi.getResponse().curtimestamp;
      if (!ctx.loadTime) {
        ctx.statusElement.error(window.wgULS("未能获取当前时间戳。", "未能取得當前時間戳。"));
        ctx.onLoadFailure(this);
        return;
      }
      ctx.contentModel = page.contentmodel;
      ctx.watched = page.watchlistexpiry || page.watched;
      if (Morebits.userIsSysop) {
        const editProt = page.protection.filter((pr) => {
          return pr.type === "edit" && pr.level === "sysop";
        }).pop();
        if (editProt) {
          ctx.fullyProtected = editProt.expiry;
        } else {
          ctx.fullyProtected = false;
        }
      }
      ctx.revertCurID = page.lastrevid;
      const testactions = page.actions;
      ctx.testActions = [];
      for (var _i6 = 0, _Object$keys = Object.keys(testactions); _i6 < _Object$keys.length; _i6++) {
        const action = _Object$keys[_i6];
        if (testactions[action]) {
          ctx.testActions[ctx.testActions.length] = action;
        }
      }
      if (ctx.editMode === "revert") {
        ctx.revertCurID = rev && rev.revid;
        if (!ctx.revertCurID) {
          ctx.statusElement.error(window.wgULS("未能获取当前修订版本ID。", "未能取得目前修訂版本ID。"));
          ctx.onLoadFailure(this);
          return;
        }
        ctx.revertUser = rev && rev.user;
        if (!ctx.revertUser) {
          if (rev && rev.userhidden) {
            ctx.revertUser = window.wgULS("<用户名已隐藏>", "<使用者名稱已隱藏>");
          } else {
            ctx.statusElement.error(window.wgULS("未能获取此修订版本的编辑者。", "未能取得此修訂版本的編輯者。"));
            ctx.onLoadFailure(this);
            return;
          }
        }
        ctx.editSummary = "[[QW:UNDO|撤销]]由 ".concat(ctx.revertUser, " 所做出的").concat(window.wgULS("修订 ", "修訂 ")).concat(ctx.revertOldID, "：").concat(ctx.editSummary);
      }
      ctx.pageLoaded = true;
      ctx.onLoadSuccess(this);
    };
    const fnCheckPageName = function(response, onFailure) {
      if (!onFailure) {
        onFailure = emptyFunction;
      }
      const page = response.pages && response.pages[0];
      if (page) {
        if (page.invalid) {
          ctx.statusElement.error(window.wgULS("标题不合法：", "標題不合法：".concat(ctx.pageName)));
          onFailure(this);
          return false;
        }
        const resolvedName = page.title;
        if (response.redirects) {
          const origNs = new mw.Title(ctx.pageName).namespace;
          const newNs = new mw.Title(resolvedName).namespace;
          if (origNs !== newNs && !ctx.followCrossNsRedirect) {
            ctx.statusElement.error(ctx.pageName + window.wgULS("是跨命名空间重定向到", "是跨命名空間重新導向到") + resolvedName + window.wgULS("，略过", "，略過"));
            onFailure(this);
            return false;
          }
          new Morebits.status(window.wgULS("信息", "資訊"), window.wgULS("从 ", "從 ") + ctx.pageName + window.wgULS(" 重定向到 ", " 重新導向到 ") + resolvedName);
        }
        ctx.pageName = resolvedName;
      } else {
        ctx.statusElement.error(window.wgULS("不能解析页面的重定向：", "不能解析頁面的重新導向：") + ctx.pageName);
        onFailure(this);
        ++Morebits.wiki.numberOfActionsLeft;
        return false;
      }
      return true;
    };
    const fnApplyWatchlistExpiry = () => {
      if (ctx.watchlistExpiry) {
        if (!ctx.watched || Morebits.string.isInfinity(ctx.watchlistExpiry)) {
          return true;
        } else if (typeof ctx.watched === "string") {
          let newExpiry;
          const rel = ctx.watchlistExpiry.split(" ");
          try {
            newExpiry = new Morebits.date().add(rel[0], rel[1]);
          } catch {
            newExpiry = new Morebits.date(ctx.watchlistExpiry);
          }
          if (newExpiry.isValid()) {
            if (newExpiry.isAfter(new Morebits.date(ctx.watched))) {
              return true;
            }
          } else {
            return true;
          }
        }
      }
      return false;
    };
    const fnSaveSuccess = function() {
      ctx.editMode = "all";
      const response = ctx.saveApi.getResponse();
      if (response.edit.result === "Success") {
        const link = document.createElement("a");
        link.setAttribute("href", mw.util.getUrl(ctx.pageName));
        link.appendChild(document.createTextNode(ctx.pageName));
        ctx.statusElement.info(["完成（", link, "）"]);
        if (ctx.onSaveSuccess) {
          ctx.onSaveSuccess(this);
        }
        return;
      }
      if (response.edit.captcha) {
        ctx.statusElement.error(window.wgULS("不能保存页面，因服务器要求您输入验证码。", "不能儲存頁面，因伺服器要求您輸入驗證碼。"));
      } else {
        ctx.statusElement.error(window.wgULS("保存页面时由API得到未知错误", "儲存頁面時由API得到未知錯誤"));
      }
      ++Morebits.wiki.numberOfActionsLeft;
      ctx.onSaveFailure(this);
    };
    const fnSaveError = function() {
      const errorCode = ctx.saveApi.getErrorCode();
      if (errorCode === "editconflict" && ctx.conflictRetries++ < ctx.maxConflictRetries) {
        const purgeQuery = {
          action: "purge",
          titles: ctx.pageName
          // redirects are already resolved
        };
        const purgeApi = new Morebits.wiki.api(window.wgULS("检测到编辑冲突，正在更新服务器缓存", "檢測到編輯衝突，正在更新伺服器快取"), purgeQuery, () => {
          --Morebits.wiki.numberOfActionsLeft;
          ctx.statusElement.info(window.wgULS("检测到编辑冲突，重试修改", "檢測到編輯衝突，重試修改"));
          if (fnCanUseMwUserToken("edit")) {
            ctx.saveApi.post();
          } else {
            ctx.loadApi.post();
          }
        }, ctx.statusElement);
        purgeApi.post();
      } else if ((errorCode === null || errorCode === void 0) && ctx.retries++ < ctx.maxRetries) {
        ctx.statusElement.info(window.wgULS("保存失败，在2秒后重试……", "儲存失敗，在2秒後重試……"));
        --Morebits.wiki.numberOfActionsLeft;
        sleep(2e3).then(() => {
          ctx.saveApi.post();
        });
      } else {
        const response = ctx.saveApi.getResponse();
        const errorData = response.error || // bc error format
        response.errors[0].data;
        switch (errorCode) {
          case "protectedpage":
            ctx.statusElement.error(window.wgULS("不能保存修改：页面被保护", "不能儲存修改：頁面被保護"));
            break;
          case "abusefilter-disallowed":
            ctx.statusElement.error(window.wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「") + errorData.abusefilter.description + window.wgULS("”阻止。若您认为您的该次编辑是有意义的，请至 Wikipedia:防滥用过滤器/错误报告 提报。", "」阻止。若您認為您的該次編輯是有意義的，請至 Wikipedia:防濫用過濾器/錯誤報告 提報。"));
            break;
          case "abusefilter-warning":
            ctx.statusElement.error([window.wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「"), errorData.abusefilter.description, window.wgULS("”警告，若您仍希望做出该编辑，请尝试重新提交，根据过滤器的设置您可能可以作出此编辑。", "」警告，若您仍希望做出該編輯，請嘗試重新提交，根據過濾器的設定您可能可以作出此編輯。")]);
            break;
          case "spamblacklist": {
            const [spam] = errorData.spamblacklist.matches;
            ctx.statusElement.error(window.wgULS("不能保存页面，因URL ", "不能儲存頁面，因URL ") + spam + window.wgULS(" 在垃圾链接黑名单中。", " 在垃圾連結黑名單中。"));
            break;
          }
          default:
            ctx.statusElement.error(window.wgULS("不能保存修改：", "不能儲存修改：") + ctx.saveApi.getErrorText());
        }
        ctx.editMode = "all";
        if (ctx.onSaveFailure) {
          ctx.onSaveFailure(this);
        }
      }
    };
    const isTextRedirect = (text) => {
      if (!text) {
        return false;
      }
      return Morebits.l10n.redirectTagAliases.some((tag) => {
        return new RegExp("^\\s*".concat(tag, "\\W"), "i").test(text);
      });
    };
    const fnLookupCreationSuccess = function() {
      const response = ctx.lookupCreationApi.getResponse().query;
      if (!fnCheckPageName(response, ctx.onLookupCreationFailure)) {
        return;
      }
      const rev = response.pages[0].revisions && response.pages[0].revisions[0];
      if (!rev) {
        ctx.statusElement.error(window.wgULS("无法找到", "無法找到") + ctx.pageName + window.wgULS("的任何修订版本", "的任何修訂版本"));
        ctx.onLookupCreationFailure(this);
        return;
      }
      if (!ctx.lookupNonRedirectCreator || !isTextRedirect(rev.content)) {
        ctx.creator = rev.user;
        if (!ctx.creator) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
          ctx.onLookupCreationFailure(this);
          return;
        }
        ctx.timestamp = rev.timestamp;
        if (!ctx.timestamp) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建时间", "無法取得頁面建立時間"));
          ctx.onLookupCreationFailure(this);
          return;
        }
        ctx.statusElement.info(window.wgULS("已获取页面创建信息", "已取得頁面建立資訊"));
        ctx.onLookupCreationSuccess(this);
      } else {
        ctx.lookupCreationApi.query.rvlimit = 50;
        ctx.lookupCreationApi.query.titles = ctx.pageName;
        ctx.lookupCreationApi = new Morebits.wiki.api(window.wgULS("获取页面创建信息", "取得頁面建立資訊"), ctx.lookupCreationApi.query, fnLookupNonRedirectCreator, ctx.statusElement, ctx.onLookupCreationFailure);
        ctx.lookupCreationApi.setParent(this);
        ctx.lookupCreationApi.post();
      }
    };
    const fnLookupNonRedirectCreator = function() {
      const response = ctx.lookupCreationApi.getResponse().query;
      const revs = response.pages[0].revisions;
      var _iterator8 = _createForOfIteratorHelper(revs), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          const rev = _step8.value;
          if (!isTextRedirect(rev.content)) {
            ctx.creator = rev.user;
            ctx.timestamp = rev.timestamp;
            break;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      if (!ctx.creator) {
        ctx.creator = revs[0].user;
        ctx.timestamp = revs[0].timestamp;
        if (!ctx.creator) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
          ctx.onLookupCreationFailure(this);
          return;
        }
      }
      if (!ctx.timestamp) {
        ctx.statusElement.error(window.wgULS("无法获取页面创建时间", "無法取得頁面建立時間"));
        ctx.onLookupCreationFailure(this);
        return;
      }
      ctx.statusElement.info(window.wgULS("已获取页面创建信息", "已取得頁面建立資訊"));
      ctx.onLookupCreationSuccess(this);
    };
    const fnPreflightChecks = function(action, onFailure) {
      if (!Morebits.userIsSysop && action !== "move") {
        ctx.statusElement.error(window.wgULS("无法对页面进行“", "無法對頁面進行「") + action + window.wgULS("”操作：只有管理员可以进行此操作", "」操作：只有管理員可以進行此操作"));
        onFailure(this);
        return false;
      }
      if (!ctx.editSummary) {
        ctx.statusElement.error("Internal error: ".concat(action, " reason not set (use setEditSummary function)!"));
        onFailure(this);
        return false;
      }
      return true;
    };
    const fnProcessChecks = function(action, onFailure, response) {
      const [{
        missing
      }] = response.pages;
      const actionMissing = missing && ["delete", "move"].includes(action);
      const protectMissing = action === "protect" && missing && (ctx.protectEdit || ctx.protectMove);
      const saltMissing = action === "protect" && !missing && ctx.protectCreate;
      if (actionMissing || protectMissing || saltMissing) {
        ctx.statusElement.error("".concat(window.wgULS("无法对页面进行“", "無法對頁面進行「") + action + window.wgULS("”操作，因为页面", "」操作，因為頁面") + (missing ? "已不" : window.wgULS("已经", "已經")), "存在"));
        onFailure(this);
        return false;
      }
      let editprot;
      if (action === "undelete") {
        editprot = response.pages[0].protection.filter((pr) => {
          return pr.type === "create" && pr.level === "sysop";
        }).pop();
      } else if (action === "delete" || action === "move") {
        editprot = response.pages[0].protection.filter((pr) => {
          return pr.type === "edit" && pr.level === "sysop";
        }).pop();
      }
      if (editprot && !ctx.suppressProtectWarning && !confirm(window.wgULS("您即将对全保护页面“", "您即將對全保護頁面「") + ctx.pageName + (editprot.expiry === "infinity" ? window.wgULS("”（永久）", "」（永久）") : "".concat(window.wgULS("”（到期：", "」（到期：") + new Morebits.date(editprot.expiry).calendar("utc"), " (UTC)）")) + window.wgULS("”进行“", "」進行「") + action + window.wgULS("”操作", "」操作") + window.wgULS("。\n\n单击确定以继续操作，或单击取消以取消操作。", "。\n\n點擊確定以繼續操作，或點擊取消以取消操作。"))) {
        ctx.statusElement.error(window.wgULS("已取消对全保护页面的操作。", "已取消對全保護頁面的操作。"));
        onFailure(this);
        return false;
      }
      if (!response.tokens.csrftoken) {
        ctx.statusElement.error(window.wgULS("无法获取令牌。", "無法取得權杖。"));
        onFailure(this);
        return false;
      }
      return true;
    };
    const fnProcessMove = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("move")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.moveApi.getResponse().query;
        if (!fnProcessChecks("move", ctx.onMoveFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "move",
        from: pageTitle,
        to: ctx.moveDestination,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (ctx.moveTalkPage) {
        query.movetalk = "true";
      }
      if (ctx.moveSubpages) {
        query.movesubpages = "true";
      }
      if (ctx.moveSuppressRedirect) {
        query.noredirect = "true";
      }
      ctx.moveProcessApi = new Morebits.wiki.api(window.wgULS("移动页面……", "移動頁面……"), query, ctx.onMoveSuccess, ctx.statusElement, ctx.onMoveFailure);
      ctx.moveProcessApi.setParent(this);
      ctx.moveProcessApi.post();
    };
    const fnProcessPatrol = function() {
      const query = {
        action: "patrol",
        format: "json"
      };
      if (ctx.rcid) {
        query.rcid = ctx.rcid;
        query.token = mw.user.tokens.get("patrolToken");
      } else {
        const response = ctx.patrolApi.getResponse().query;
        if (!response.recentchanges[0].unpatrolled) {
          return;
        }
        const [{
          lastrevid
        }] = response.pages;
        if (!lastrevid) {
          return;
        }
        query.revid = lastrevid;
        const token = response.tokens.csrftoken;
        if (!token) {
          return;
        }
        query.token = token;
      }
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      const patrolStat = new Morebits.status(window.wgULS("标记页面为已巡查", "標記頁面為已巡查"));
      ctx.patrolProcessApi = new Morebits.wiki.api(window.wgULS("巡查页面……", "巡查頁面……"), query, null, patrolStat);
      ctx.patrolProcessApi.setParent(this);
      ctx.patrolProcessApi.post();
    };
    const fnProcessDelete = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("delete")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.deleteApi.getResponse().query;
        if (!fnProcessChecks("delete", ctx.onDeleteFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "delete",
        title: pageTitle,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      ctx.deleteProcessApi = new Morebits.wiki.api(window.wgULS("删除页面……", "刪除頁面……"), query, ctx.onDeleteSuccess, ctx.statusElement, fnProcessDeleteError);
      ctx.deleteProcessApi.setParent(this);
      ctx.deleteProcessApi.post();
    };
    const fnProcessDeleteError = function() {
      const errorCode = ctx.deleteProcessApi.getErrorCode();
      if (errorCode === "internal_api_error_DBQueryError" && ctx.retries++ < ctx.maxRetries) {
        ctx.statusElement.info(window.wgULS("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
        --Morebits.wiki.numberOfActionsLeft;
        ctx.deleteProcessApi.post();
      } else if (errorCode === "missingtitle") {
        ctx.statusElement.error(window.wgULS("不能删除页面，因其已不存在", "不能刪除頁面，因其已不存在"));
        if (ctx.onDeleteFailure) {
          ctx.onDeleteFailure.call(this, ctx.deleteProcessApi);
        }
      } else {
        ctx.statusElement.error(window.wgULS("无法删除页面：", "無法刪除頁面：") + ctx.deleteProcessApi.getErrorText());
        if (ctx.onDeleteFailure) {
          ctx.onDeleteFailure.call(this, ctx.deleteProcessApi);
        }
      }
    };
    const fnProcessUndelete = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("undelete")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.undeleteApi.getResponse().query;
        if (!fnProcessChecks("undelete", ctx.onUndeleteFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "undelete",
        title: pageTitle,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      ctx.undeleteProcessApi = new Morebits.wiki.api(window.wgULS("还原页面……", "還原頁面……"), query, ctx.onUndeleteSuccess, ctx.statusElement, fnProcessUndeleteError);
      ctx.undeleteProcessApi.setParent(this);
      ctx.undeleteProcessApi.post();
    };
    const fnProcessUndeleteError = function() {
      const errorCode = ctx.undeleteProcessApi.getErrorCode();
      if (errorCode === "internal_api_error_DBQueryError") {
        if (ctx.retries++ < ctx.maxRetries) {
          ctx.statusElement.info(window.wgULS("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
          --Morebits.wiki.numberOfActionsLeft;
          ctx.undeleteProcessApi.post();
        } else {
          ctx.statusElement.error(window.wgULS("持续的数据库查询错误，重新加载页面并重试", "持續的資料庫查詢錯誤，重新載入頁面並重試"));
          if (ctx.onUndeleteFailure) {
            ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
          }
        }
      } else if (errorCode === "cantundelete") {
        ctx.statusElement.error(window.wgULS("无法还原删除页面，因没有版本供还原或已被还原", "無法還原刪除頁面，因沒有版本供還原或已被還原"));
        if (ctx.onUndeleteFailure) {
          ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
        }
      } else {
        ctx.statusElement.error(window.wgULS("无法还原页面：", "無法還原頁面：") + ctx.undeleteProcessApi.getErrorText());
        if (ctx.onUndeleteFailure) {
          ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
        }
      }
    };
    const fnProcessProtect = function() {
      const response = ctx.protectApi.getResponse().query;
      if (!fnProcessChecks("protect", ctx.onProtectFailure, response)) {
        return;
      }
      const token = response.tokens.csrftoken;
      const [page] = response.pages;
      const pageTitle = page.title;
      ctx.watched = page.watchlistexpiry || page.watched;
      const prs = response.pages[0].protection;
      let editprot;
      let moveprot;
      let createprot;
      var _iterator9 = _createForOfIteratorHelper(prs), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          const pr = _step9.value;
          if (pr.type === "edit" && !pr.source) {
            editprot = pr;
          } else if (pr.type === "move") {
            moveprot = pr;
          } else if (pr.type === "create") {
            createprot = pr;
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      if (!ctx.protectEdit && editprot) {
        ctx.protectEdit = {
          level: editprot.level,
          expiry: editprot.expiry
        };
      }
      if (!ctx.protectMove && moveprot) {
        ctx.protectMove = {
          level: moveprot.level,
          expiry: moveprot.expiry
        };
      }
      if (!ctx.protectCreate && createprot) {
        ctx.protectCreate = {
          level: createprot.level,
          expiry: createprot.expiry
        };
      }
      if (ctx.protectCascade === null) {
        ctx.protectCascade = !!prs.filter((pr) => {
          return pr.cascade;
        }).length;
      }
      if (ctx.protectCascade) {
        if ((!ctx.protectEdit || ctx.protectEdit.level !== "sysop" || !ctx.protectMove || ctx.protectMove.level !== "sysop") && !confirm(window.wgULS("您已对“", "您已對「") + ctx.pageName + window.wgULS("”启用了连锁保护", "」啟用了連鎖保護") + window.wgULS("，但没有设置仅管理员的保护级别。\n\n", "，但沒有設定僅管理員的保護級別。\n\n") + window.wgULS("单击确认以自动调整并继续连锁全保护，单击取消以跳过此操作", "點擊確認以自動調整並繼續連鎖全保護，點擊取消以跳過此操作"))) {
          ctx.statusElement.error(window.wgULS("连锁保护已取消。", "連鎖保護已取消。"));
          ctx.onProtectFailure(this);
          return;
        }
        ctx.protectEdit.level = "sysop";
        ctx.protectMove.level = "sysop";
      }
      const protections = [];
      const expirys = [];
      if (ctx.protectEdit) {
        protections[protections.length] = "edit=".concat(ctx.protectEdit.level);
        expirys[expirys.length] = ctx.protectEdit.expiry;
      }
      if (ctx.protectMove) {
        protections[protections.length] = "move=".concat(ctx.protectMove.level);
        expirys[expirys.length] = ctx.protectMove.expiry;
      }
      if (ctx.protectCreate) {
        protections[protections.length] = "create=".concat(ctx.protectCreate.level);
        expirys[expirys.length] = ctx.protectCreate.expiry;
      }
      const query = {
        action: "protect",
        title: pageTitle,
        token,
        protections: protections.join("|"),
        expiry: expirys.join("|"),
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (ctx.protectCascade) {
        query.cascade = "true";
      }
      ctx.protectProcessApi = new Morebits.wiki.api(window.wgULS("保护页面……", "保護頁面……"), query, ctx.onProtectSuccess, ctx.statusElement, ctx.onProtectFailure);
      ctx.protectProcessApi.setParent(this);
      ctx.protectProcessApi.post();
    };
    const sleep = (milliseconds) => {
      const deferred = $.Deferred();
      setTimeout(deferred.resolve, milliseconds);
      return deferred;
    };
  };
  Morebits.wiki.preview = function(previewbox) {
    this.previewbox = previewbox;
    $(previewbox).addClass("morebits-previewbox").hide();
    this.beginRender = (wikitext, pageTitle, sectionTitle) => {
      $(previewbox).show();
      const statusspan = document.createElement("span");
      previewbox.appendChild(statusspan);
      Morebits.status.init(statusspan);
      let pageName = mw.config.get("wgPageName");
      if (mw.config.get("wgPageContentModel") !== "wikitext") {
        pageName = "Draft:".concat(pageName);
      }
      const query = {
        action: "parse",
        prop: ["text", "modules"],
        pst: true,
        // PST = pre-save transform; this makes substitution work properly
        preview: true,
        text: wikitext,
        title: pageTitle || pageName,
        disablelimitreport: true,
        disableeditsection: true,
        uselang: mw.config.get("wgUserLanguage"),
        // Use wgUserLanguage for preview
        format: "json"
      };
      if (sectionTitle) {
        query.section = "new";
        query.sectiontitle = sectionTitle;
      }
      const renderApi = new Morebits.wiki.api(window.wgULS("加载中……", "載入中……"), query, fnRenderSuccess, new Morebits.status(window.wgULS("预览", "預覽")));
      renderApi.post();
    };
    const fnRenderSuccess = (apiobj) => {
      const response = apiobj.getResponse();
      const html = response.parse.text;
      if (!html) {
        apiobj.statelem.error(window.wgULS("加载预览失败，或模板为空", "載入預覽失敗，或模板為空"));
        return;
      }
      previewbox.innerHTML = html;
      mw.loader.load(response.parse.modulestyles);
      mw.loader.load(response.parse.modules);
      $(previewbox).find("a").attr("target", "_blank").attr("rel", "noopener noreferrer");
    };
    this.closePreview = () => {
      $(previewbox).empty().hide();
    };
  };
  Morebits.wikitext = {};
  Morebits.wikitext.parseTemplate = (text, start) => {
    start || (start = 0);
    const level = [];
    let count = -1;
    let unnamed = 0;
    let equals = -1;
    let current = "";
    const result = {
      name: "",
      parameters: {}
    };
    let key;
    let value;
    const findParam = (final) => {
      if (count === -1) {
        result.name = current.slice(2).trim();
        ++count;
      } else if (equals === -1) {
        const param = final ? current.slice(equals + 1, -2) : current;
        if (param) {
          result.parameters[++unnamed] = param;
          ++count;
        }
      } else {
        key = current.slice(0, Math.max(0, equals)).trim();
        value = final ? current.slice(equals + 1, -2).trim() : current.slice(Math.max(0, equals + 1)).trim();
        result.parameters[key] = value;
        equals = -1;
      }
    };
    for (let i = start; i < text.length; ++i) {
      const test3 = text.slice(i, i + 3);
      if (test3 === "{{{" || test3 === "}}}" && level.at(-1) === 3) {
        current += test3;
        i += 2;
        if (test3 === "{{{") {
          level[level.length] = 3;
        } else {
          level.pop();
        }
        continue;
      }
      const test2 = text.slice(i, i + 2);
      if (test2 === "{{" || test2 === "[[") {
        current += test2;
        ++i;
        if (test2 === "{{") {
          level[level.length] = 2;
        } else {
          level[level.length] = "wl";
        }
        continue;
      }
      if (test2 === "}}" && level.at(-1) === 2 || test2 === "]]" && level.at(-1) === "wl") {
        current += test2;
        ++i;
        level.pop();
        if (test2 === "}}" && level.length === 0) {
          findParam(true);
          break;
        }
        continue;
      }
      if (text.charAt(i) === "|" && level.length === 1) {
        findParam();
        current = "";
      } else if (equals === -1 && text.charAt(i) === "=" && level.length === 1) {
        equals = current.length;
        current += text.charAt(i);
      } else {
        current += text.charAt(i);
      }
    }
    return result;
  };
  Morebits.wikitext.page = function(text) {
    this.text = text;
  };
  Morebits.wikitext.page.prototype = {
    text: "",
    /**
     * Removes links to `link_target` from the page text.
     *
     * @param {string} linkTarget
     * @returns {Morebits.wikitext.page}
     */
    removeLink(linkTarget) {
      const mwTitle = mw.Title.newFromText(linkTarget);
      const namespaceID = mwTitle.getNamespaceId();
      const title = mwTitle.getMainText();
      let linkRegexString = "";
      if (namespaceID !== 0) {
        linkRegexString = "".concat(Morebits.namespaceRegex(namespaceID), ":");
      }
      linkRegexString += Morebits.pageNameRegex(title);
      const isFileOrCategory = [6, 14].includes(namespaceID);
      const colon = isFileOrCategory ? ":" : ":?";
      const simpleLinkRegex = new RegExp("\\[\\[".concat(colon, "(").concat(linkRegexString, ")\\]\\]"), "g");
      const pipedLinkRegex = new RegExp("\\[\\[".concat(colon).concat(linkRegexString, "\\|(.+?)\\]\\]"), "g");
      this.text = this.text.replace(simpleLinkRegex, "$1").replace(pipedLinkRegex, "$1");
      return this;
    },
    /**
     * Comments out images from page text; if used in a gallery, deletes the whole line.
     * If used as a template argument (not necessarily with `File:` prefix), the template parameter is commented out.
     *
     * @param {string} image - Image name without `File:` prefix.
     * @param {string} [reason] - Reason to be included in comment, alongside the commented-out image.
     * @returns {Morebits.wikitext.page}
     */
    commentOutImage(image, reason) {
      const unbinder = new Morebits.unbinder(this.text);
      unbinder.unbind("<!--", "-->");
      reason = reason ? "".concat(reason, ": ") : "";
      const imageRegexString = Morebits.pageNameRegex(image);
      const linksRegex = new RegExp("\\[\\[".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*[\\|(?:\\]\\])]"));
      const allLinks = Morebits.string.splitWeightedByKeys(unbinder.content, "[[", "]]");
      var _iterator10 = _createForOfIteratorHelper(allLinks), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          const allLink = _step10.value;
          if (linksRegex.test(allLink)) {
            const replacement = "<!-- ".concat(reason).concat(allLink, " -->");
            unbinder.content = unbinder.content.replace(allLink, replacement);
            unbinder.unbind("<!--", "-->");
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      const galleryImageRegex = new RegExp("(^\\s*".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*(?:\\|.*?$|$))"), "mg");
      unbinder.content = unbinder.content.replace(galleryImageRegex, "<!-- ".concat(reason, "$1 -->"));
      unbinder.unbind("<!--", "-->");
      const freeImageRegex = new RegExp("(\\|\\s*(?:[\\w\\s]+\\=)?\\s*(?:".concat(Morebits.namespaceRegex(6), ":\\s*)?").concat(imageRegexString, ")"), "mg");
      unbinder.content = unbinder.content.replace(freeImageRegex, "<!-- ".concat(reason, "$1 -->"));
      this.text = unbinder.rebind();
      return this;
    },
    /**
     * Converts uses of [[File:`image`]] to [[File:`image`|`data`]].
     *
     * @param {string} image - Image name without File: prefix.
     * @param {string} data - The display options.
     * @returns {Morebits.wikitext.page}
     */
    addToImageComment(image, data) {
      const imageRegexString = Morebits.pageNameRegex(image);
      const linksRegex = new RegExp("\\[\\[".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*[\\|(?:\\]\\])]"));
      const allLinks = Morebits.string.splitWeightedByKeys(this.text, "[[", "]]");
      var _iterator11 = _createForOfIteratorHelper(allLinks), _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
          let replacement = _step11.value;
          if (linksRegex.test(replacement)) {
            replacement = replacement.replace(/\]\]$/, "|".concat(data, "]]"));
            this.text = this.text.replace(replacement, replacement);
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      const galleryRegex = new RegExp("^(\\s*".concat(imageRegexString, ".*?)\\|?(.*?)$"), "mg");
      const newtext = "$1|$2 ".concat(data);
      this.text = this.text.replace(galleryRegex, newtext);
      return this;
    },
    /**
     * Remove all transclusions of a template from page text.
     *
     * @param {string} template - Page name whose transclusions are to be removed,
     * include namespace prefix only if not in template namespace.
     * @returns {Morebits.wikitext.page}
     */
    removeTemplate(template) {
      const templateRegexString = Morebits.pageNameRegex(template);
      const linksRegex = new RegExp("\\{\\{(?:".concat(Morebits.namespaceRegex(10), ":)?\\s*").concat(templateRegexString, "\\s*[\\|(?:\\}\\})]"));
      const allTemplates = Morebits.string.splitWeightedByKeys(this.text, "{{", "}}", ["{{{", "}}}"]);
      var _iterator12 = _createForOfIteratorHelper(allTemplates), _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
          const allTemplate = _step12.value;
          if (linksRegex.test(allTemplate)) {
            this.text = this.text.replace(allTemplate, "");
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
      return this;
    },
    /**
     * Smartly insert a tag atop page text but after specified templates,
     * such as hatnotes, short description, or deletion and protection templates.
     * Notably, does *not* insert a newline after the tag.
     *
     * @param {string} tag - The tag to be inserted.
     * @param {string|string[]} regex - Templates after which to insert tag,
     * given as either as a (regex-valid) string or an array to be joined by pipes.
     * @param {string} [flags=i] - Regex flags to apply.  `''` to provide no flags;
     * other falsey values will default to `i`.
     * @param {string|string[]} [preRegex] - Optional regex string or array to match
     * before any template matches (i.e. before `{{`), such as html comments.
     * @returns {Morebits.wikitext.page}
     */
    insertAfterTemplates(tag, regex, flags, preRegex) {
      if (tag === void 0) {
        throw new TypeError("No tag provided");
      }
      if (regex === void 0 || !regex.length) {
        throw new Error("No regex provided");
      } else if (Array.isArray(regex)) {
        regex = regex.join("|");
      }
      if (typeof flags !== "string") {
        flags = "i";
      }
      if (!preRegex || !preRegex.length) {
        preRegex = "";
      } else if (Array.isArray(preRegex)) {
        preRegex = preRegex.join("|");
      }
      this.text = this.text.replace(new RegExp(
        // leading whitespace
        // capture template(s)
        // Pre-template regex, such as leading html comments
        // begin template format
        // Template regex
        // end main template name, optionally with a number
        // Probably remove the (?:) though
        // template parameters
        // end template format
        // end capture
        // trailing whitespace
        "^\\s*(?:((?:\\s*".concat(
          // Pre-template regex, such as leading html comments
          preRegex,
          "|\\{\\{\\s*(?:"
        ).concat(
          // Template regex
          regex,
          ")\\d*\\s*(\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?\\}\\})+(?:\\s*\\n)?)\\s*)?"
        ),
        flags
      ), "$1".concat(tag));
      return this;
    },
    /**
     * Get the manipulated wikitext.
     *
     * @returns {string}
     */
    getText() {
      return this.text;
    }
  };
  Morebits.userspaceLogger = function(logPageName) {
    if (!logPageName) {
      throw new Error("no log page name specified");
    }
    this.initialText = "";
    this.headerLevel = 3;
    this.changeTags = "";
    this.log = function(logText, summaryText) {
      const def = $.Deferred();
      if (!logText) {
        return def.reject();
      }
      const page = new Morebits.wiki.page("User:".concat(mw.config.get("wgUserName"), "/").concat(logPageName), window.wgULS("将项目加入到用户空间日志", "將項目加入到使用者空間日誌"));
      page.load((pageobj) => {
        let text = pageobj.getPageText() || this.initialText;
        const date = new Morebits.date(pageobj.getLoadTime());
        if (!date.monthHeaderRegex().exec(text)) {
          text += "\n\n".concat(date.monthHeader(this.headerLevel));
        }
        pageobj.setPageText("".concat(text, "\n").concat(logText));
        pageobj.setEditSummary(summaryText);
        pageobj.setChangeTags(this.changeTags);
        pageobj.setCreateOption("recreate");
        pageobj.save(def.resolve, def.reject);
      });
      return def;
    };
  };
  Morebits.status = function(text, stat, type) {
    this.textRaw = text;
    this.text = Morebits.createHtml(text);
    this.type = type || "status";
    this.generate();
    if (stat) {
      this.update(stat, type);
    }
  };
  Morebits.status.init = (root) => {
    if (!(root instanceof Element)) {
      throw new TypeError("object not an instance of Element");
    }
    while (root.hasChildNodes()) {
      root.removeChild(root.firstChild);
    }
    Morebits.status.root = root;
    Morebits.status.errorEvent = null;
  };
  Morebits.status.root = null;
  Morebits.status.onError = (handler) => {
    if (typeof handler === "function") {
      Morebits.status.errorEvent = handler;
    } else {
      throw new TypeError("Morebits.status.onError: handler is not a function");
    }
  };
  Morebits.status.prototype = {
    stat: null,
    statRaw: null,
    text: null,
    textRaw: null,
    type: "status",
    target: null,
    node: null,
    linked: false,
    /** Add the status element node to the DOM. */
    link() {
      if (!this.linked && Morebits.status.root) {
        Morebits.status.root.appendChild(this.node);
        this.linked = true;
      }
    },
    /** Remove the status element node from the DOM. */
    unlink() {
      if (this.linked) {
        Morebits.status.root.removeChild(this.node);
        this.linked = false;
      }
    },
    /**
     * Update the status.
     *
     * @param {string} status - Part of status message after colon.
     * @param {string} type - 'status' (blue), 'info' (green), 'warn'
     * (red), or 'error' (bold red).
     */
    update(status, type) {
      this.statRaw = status;
      this.stat = Morebits.createHtml(status);
      if (type) {
        this.type = type;
        if (type === "error") {
          Morebits.wiki.numberOfActionsLeft = 1e3;
          if (Morebits.status.errorEvent) {
            Morebits.status.errorEvent();
          }
          console.error("[Morebits] ".concat(this.textRaw, ": ").concat(this.statRaw));
        }
      }
      this.render();
    },
    /** Produce the html for first part of the status message. */
    generate() {
      this.node = document.createElement("div");
      this.node.appendChild(document.createElement("span")).appendChild(this.text);
      this.node.appendChild(document.createElement("span")).appendChild(document.createTextNode(": "));
      this.target = this.node.appendChild(document.createElement("span"));
      this.target.appendChild(document.createTextNode(""));
    },
    /** Complete the html, for the second part of the status message. */
    render() {
      this.node.className = "morebits_status_".concat(this.type);
      while (this.target.hasChildNodes()) {
        this.target.removeChild(this.target.firstChild);
      }
      this.target.appendChild(this.stat);
      this.link();
    },
    status(status) {
      this.update(status, "status");
    },
    info(status) {
      this.update(status, "info");
    },
    warn(status) {
      this.update(status, "warn");
    },
    error(status) {
      this.update(status, "error");
    }
  };
  Morebits.status.status = (text, status) => {
    return new Morebits.status(text, status);
  };
  Morebits.status.info = (text, status) => {
    return new Morebits.status(text, status, "info");
  };
  Morebits.status.warn = (text, status) => {
    return new Morebits.status(text, status, "warn");
  };
  Morebits.status.error = (text, status) => {
    return new Morebits.status(text, status, "error");
  };
  Morebits.status.actionCompleted = (text) => {
    const node = document.createElement("div");
    node.appendChild(document.createElement("b")).appendChild(document.createTextNode(text));
    node.className = "morebits_status_info morebits_action_complete";
    if (Morebits.status.root) {
      Morebits.status.root.appendChild(node);
    }
  };
  Morebits.status.printUserText = (comments, message) => {
    const p = document.createElement("p");
    p.innerHTML = message;
    const div = document.createElement("div");
    div.className = "morebits-usertext";
    div.style.marginTop = "0";
    div.style.whiteSpace = "pre-wrap";
    div.textContent = comments;
    p.appendChild(div);
    Morebits.status.root.appendChild(p);
  };
  Morebits.htmlNode = (type, content, color) => {
    const node = document.createElement(type);
    if (color) {
      node.style.color = color;
    }
    node.appendChild(document.createTextNode(content));
    return node;
  };
  Morebits.checkboxShiftClickSupport = (jQuerySelector, jQueryContext) => {
    let lastCheckbox = null;
    const clickHandler = function clickHandler2(event) {
      const thisCb = this;
      if (event.shiftKey && lastCheckbox !== null) {
        const cbs = $(jQuerySelector, jQueryContext);
        let index = -1;
        let lastIndex = -1;
        let i;
        for (i = 0; i < cbs.length; i++) {
          if (cbs[i] === thisCb) {
            index = i;
            if (lastIndex > -1) {
              break;
            }
          }
          if (cbs[i] === lastCheckbox) {
            lastIndex = i;
            if (index > -1) {
              break;
            }
          }
        }
        if (index > -1 && lastIndex > -1) {
          const endState = thisCb.checked;
          let start;
          let finish;
          if (index < lastIndex) {
            start = index + 1;
            finish = lastIndex;
          } else {
            start = lastIndex;
            finish = index - 1;
          }
          for (i = start; i <= finish; i++) {
            if (cbs[i].checked !== endState) {
              cbs[i].click();
            }
          }
        }
      }
      lastCheckbox = thisCb;
      return true;
    };
    $(jQuerySelector, jQueryContext).on("click", clickHandler);
  };
  Morebits.batchOperation = function(currentAction) {
    const ctx = {
      // backing fields for public properties
      pageList: null,
      options: {
        chunkSize: 50,
        preserveIndividualStatusLines: false
      },
      // internal counters, etc.
      statusElement: new Morebits.status(currentAction || window.wgULS("执行批量操作", "執行批次操作")),
      worker: null,
      // function that executes for each item in pageList
      postFinish: null,
      // function that executes when the whole batch has been processed
      countStarted: 0,
      countFinished: 0,
      countFinishedSuccess: 0,
      currentChunkIndex: -1,
      pageChunks: [],
      running: false
    };
    this.getStatusElement = () => {
      return ctx.statusElement;
    };
    this.setPageList = (pageList) => {
      ctx.pageList = pageList;
    };
    this.setOption = (optionName, optionValue) => {
      ctx.options[optionName] = optionValue;
    };
    this.run = (worker, postFinish) => {
      if (ctx.running) {
        ctx.statusElement.error(window.wgULS("批量操作已在运行", "批次操作已在執行"));
        return;
      }
      ctx.running = true;
      ctx.worker = worker;
      ctx.postFinish = postFinish;
      ctx.countStarted = 0;
      ctx.countFinished = 0;
      ctx.countFinishedSuccess = 0;
      ctx.currentChunkIndex = -1;
      ctx.pageChunks = [];
      const total = ctx.pageList.length;
      if (!total) {
        ctx.statusElement.info(window.wgULS("没有指定页面", "沒有指定頁面"));
        ctx.running = false;
        if (ctx.postFinish) {
          ctx.postFinish();
        }
        return;
      }
      ctx.pageChunks = Morebits.array.chunk(ctx.pageList, ctx.options.chunkSize);
      Morebits.wiki.addCheckpoint();
      ctx.statusElement.status("0%");
      fnStartNewChunk();
    };
    this.workerSuccess = (arg) => {
      if (arg instanceof Morebits.wiki.api || arg instanceof Morebits.wiki.page) {
        const statelem = arg.getStatusElement();
        if (ctx.options.preserveIndividualStatusLines) {
          if (arg.getPageName || arg.pageName || arg.query && arg.query.title) {
            const pageName = arg.getPageName ? arg.getPageName() : arg.pageName || arg.query.title;
            statelem.info("完成（[[".concat(pageName, "]]）"));
          } else {
            statelem.info("完成");
          }
        } else {
          statelem.unlink();
        }
      } else if (typeof arg === "string" && ctx.options.preserveIndividualStatusLines) {
        new Morebits.status(arg, "完成（[[".concat(arg, "]]）"));
      }
      ctx.countFinishedSuccess++;
      fnDoneOne();
    };
    this.workerFailure = () => {
      fnDoneOne();
    };
    const thisProxy = this;
    const fnStartNewChunk = () => {
      const chunk = ctx.pageChunks[++ctx.currentChunkIndex];
      if (!chunk) {
        return;
      }
      ctx.countStarted += chunk.length;
      var _iterator13 = _createForOfIteratorHelper(chunk), _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
          const page = _step13.value;
          ctx.worker(page, thisProxy);
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    };
    const fnDoneOne = () => {
      ctx.countFinished++;
      const total = ctx.pageList.length;
      if (ctx.countFinished < total) {
        const progress = Math.round(100 * ctx.countFinished / total);
        ctx.statusElement.status("".concat(progress, "%"));
        if (ctx.countFinished >= ctx.countStarted - Math.max(ctx.options.chunkSize / 10, 2) && Math.floor(ctx.countFinished / ctx.options.chunkSize) > ctx.currentChunkIndex) {
          fnStartNewChunk();
        }
      } else if (ctx.countFinished === total) {
        const statusString = "完成（".concat(ctx.countFinishedSuccess, "/").concat(ctx.countFinished, "操作成功完成）");
        if (ctx.countFinishedSuccess < ctx.countFinished) {
          ctx.statusElement.warn(statusString);
        } else {
          ctx.statusElement.info(statusString);
        }
        if (ctx.postFinish) {
          ctx.postFinish();
        }
        Morebits.wiki.removeCheckpoint();
        ctx.running = false;
      } else {
        ctx.statusElement.warn("".concat(window.wgULS("完成（多执行了", "完成（多執行了") + (ctx.countFinished - total), "次）"));
        Morebits.wiki.removeCheckpoint();
        ctx.running = false;
      }
    };
  };
  Morebits.simpleWindow = function(width, height) {
    const content = document.createElement("div");
    this.content = content;
    content.className = "morebits-dialog-content";
    content.id = "morebits-dialog-content-".concat(Math.round(Math.random() * 1e15));
    this.height = height;
    $(this.content).dialog({
      autoOpen: false,
      buttons: {
        "Placeholder button": () => {
        }
      },
      dialogClass: "morebits-dialog",
      width: Math.min(Number.parseInt(window.innerWidth, 10), Number.parseInt(width || 800, 10)),
      // give jQuery the given height value (which represents the anticipated height of the dialog) here, so
      // it can position the dialog appropriately
      // the 20 pixels represents adjustment for the extra height of the jQuery dialog "chrome", compared
      // to that of the old SimpleWindow
      height: height + 20,
      close: (event) => {
        $(event.target).dialog("destroy").remove();
      },
      resizeStart() {
        [this.scrollbox] = $(this).find(".morebits-scrollbox");
        if (this.scrollbox) {
          this.scrollbox.style.maxHeight = "none";
        }
      },
      resizeStop() {
        this.scrollbox = null;
      },
      resize() {
        this.style.maxHeight = "";
        if (this.scrollbox) {
          this.scrollbox.style.width = "";
        }
      }
    });
    const $widget = $(this.content).dialog("widget");
    $widget.find("button").each((key, value) => {
      value.parentNode.removeChild(value);
    });
    const buttonspan = document.createElement("span");
    buttonspan.className = "morebits-dialog-buttons";
    const linksspan = document.createElement("span");
    linksspan.className = "morebits-dialog-footerlinks";
    $widget.find(".ui-dialog-buttonpane").append(buttonspan, linksspan);
    $widget.resizable("option", "alsoResize", "#".concat(this.content.id, " .morebits-scrollbox, #").concat(this.content.id));
  };
  Morebits.simpleWindow.prototype = {
    buttons: [],
    height: 600,
    hasFooterLinks: false,
    scriptName: null,
    /**
     * Focuses the dialog. This might work, or on the contrary, it might not.
     *
     * @returns {Morebits.simpleWindow}
     */
    focus() {
      $(this.content).dialog("moveToTop");
      return this;
    },
    /**
     * Closes the dialog. If this is set as an event handler, it will stop the event
     * from doing anything more.
     *
     * @param {event} [event]
     * @returns {Morebits.simpleWindow}
     */
    close(event) {
      if (event) {
        event.preventDefault();
      }
      $(this.content).dialog("close");
      return this;
    },
    /**
     * Shows the dialog. Calling display() on a dialog that has previously been closed
     * might work, but it is not guaranteed.
     *
     * @returns {Morebits.simpleWindow}
     */
    display() {
      if (this.scriptName) {
        const $widget = $(this.content).dialog("widget");
        $widget.find(".morebits-dialog-scriptname").remove();
        const scriptnamespan = document.createElement("span");
        scriptnamespan.className = "morebits-dialog-scriptname";
        scriptnamespan.textContent = "".concat(this.scriptName, " · ");
        $widget.find(".ui-dialog-title").prepend(scriptnamespan);
      }
      const dialog = $(this.content).dialog("open");
      if (window.setupTooltips && window.pg && window.pg.re && window.pg.re.diff) {
        dialog.parent()[0].ranSetupTooltipsAlready = false;
        window.setupTooltips(dialog.parent()[0]);
      }
      this.setHeight(this.height);
      return this;
    },
    /**
     * Sets the dialog title.
     *
     * @param {string} title
     * @returns {Morebits.simpleWindow}
     */
    setTitle(title) {
      $(this.content).dialog("option", "title", title);
      return this;
    },
    /**
     * Sets the script name, appearing as a prefix to the title to help users determine which
     * user script is producing which dialog. For instance, Twinkle modules set this to "Twinkle".
     *
     * @param {string} name
     * @returns {Morebits.simpleWindow}
     */
    setScriptName(name) {
      this.scriptName = name;
      return this;
    },
    /**
     * Sets the dialog width.
     *
     * @param {number} width
     * @returns {Morebits.simpleWindow}
     */
    setWidth(width) {
      $(this.content).dialog("option", "width", width);
      return this;
    },
    /**
     * Sets the dialog's maximum height. The dialog will auto-size to fit its contents,
     * but the content area will grow no larger than the height given here.
     *
     * @param {number} height
     * @returns {Morebits.simpleWindow}
     */
    setHeight(height) {
      this.height = height;
      if (Number.parseInt(getComputedStyle($(this.content).dialog("widget")[0], null).height, 10) > window.innerHeight) {
        $(this.content).dialog("option", "height", window.innerHeight - 2).dialog("option", "position", "top");
      } else {
        $(this.content).dialog("option", "height", "auto");
      }
      $(this.content).dialog("widget").find(".morebits-dialog-content")[0].style.maxHeight = "".concat(Number.parseInt(this.height - 30, 10), "px");
      return this;
    },
    /**
     * Sets the content of the dialog to the given element node, usually from rendering
     * a {@link Morebits.quickForm}.
     * Re-enumerates the footer buttons, but leaves the footer links as they are.
     * Be sure to call this at least once before the dialog is displayed...
     *
     * @param {HTMLElement} content
     * @returns {Morebits.simpleWindow}
     */
    setContent(content) {
      this.purgeContent();
      this.addContent(content);
      return this;
    },
    /**
     * Adds the given element node to the dialog content.
     *
     * @param {HTMLElement} content
     * @returns {Morebits.simpleWindow}
     */
    addContent(content) {
      this.content.appendChild(content);
      const self = this;
      $(this.content).find('input[type="submit"], button[type="submit"]').each((key, value) => {
        value.style.display = "none";
        const button = document.createElement("button");
        if (value.hasAttribute("value")) {
          button.textContent = value.getAttribute("value");
        } else if (value.textContent) {
          button.textContent = value.textContent;
        } else {
          button.textContent = "提交";
        }
        button.className = value.className || "submitButtonProxy";
        button.addEventListener("click", () => {
          value.click();
        }, false);
        self.buttons[self.buttons.length] = button;
      });
      if (this.buttons.length > 0) {
        $(this.content).dialog("widget").find(".morebits-dialog-buttons").empty().append(this.buttons)[0].removeAttribute("data-empty");
      } else {
        $(this.content).dialog("widget").find(".morebits-dialog-buttons")[0].setAttribute("data-empty", "data-empty");
      }
      return this;
    },
    /**
     * Removes all contents from the dialog, barring any footer links.
     *
     * @returns {Morebits.simpleWindow}
     */
    purgeContent() {
      this.buttons = [];
      $(this.content).dialog("widget").find(".morebits-dialog-buttons").empty();
      while (this.content.hasChildNodes()) {
        this.content.removeChild(this.content.firstChild);
      }
      return this;
    },
    /**
     * Adds a link in the bottom-right corner of the dialog.
     * This can be used to provide help or policy links.
     * For example, Twinkle's CSD module adds a link to the CSD policy page,
     * as well as a link to Twinkle's documentation.
     *
     * @param {string} text - Display text.
     * @param {string} wikiPage - Link target.
     * @param {boolean} [prep=false] - Set true to prepend rather than append.
     * @returns {Morebits.simpleWindow}
     */
    addFooterLink(text, wikiPage, prep) {
      const $footerlinks = $(this.content).dialog("widget").find(".morebits-dialog-footerlinks");
      if (this.hasFooterLinks) {
        const bullet = document.createElement("span");
        bullet.textContent = " • ";
        if (prep) {
          $footerlinks.prepend(bullet);
        } else {
          $footerlinks.append(bullet);
        }
      }
      const link = document.createElement("a");
      link.setAttribute("href", mw.util.getUrl(wikiPage));
      link.setAttribute("title", wikiPage);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.textContent = text;
      if (prep) {
        $footerlinks.prepend(link);
      } else {
        $footerlinks.append(link);
      }
      this.hasFooterLinks = true;
      return this;
    },
    /**
     * Sets whether the window should be modal or not. Modal dialogs create
     * an overlay below the dialog but above other page elements. This
     * must be used (if necessary) before calling display().
     *
     * @param {boolean} [modal=false] - If set to true, other items on the
     * page will be disabled, i.e., cannot be interacted with.
     * @returns {Morebits.simpleWindow}
     */
    setModality(modal) {
      $(this.content).dialog("option", "modal", modal);
      return this;
    }
  };
  Morebits.simpleWindow.setButtonsEnabled = (enabled) => {
    const $body = $("body");
    $body.find(".morebits-dialog-buttons button").prop("disabled", !enabled);
  };
})(jQuery);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vcmViaXRzL21vcmViaXRzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuLyohIFR3aW5rbGUuanMgLSBtb3JlYml0cy5qcyAqL1xuXG4vKipcbiAqIEEgbGlicmFyeSBmdWxsIG9mIGxvdHMgb2YgZ29vZG5lc3MgZm9yIHVzZXIgc2NyaXB0cyBvbiBNZWRpYVdpa2kgd2lraXMuXG4gKlxuICogVGhlIGhpZ2hsaWdodHMgaW5jbHVkZTpcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSAtIG1ha2UgY2FsbHMgdG8gdGhlIE1lZGlhV2lraSBBUElcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0gLSBtb2RpZnkgcGFnZXMgb24gdGhlIHdpa2kgKGVkaXQsIHJldmVydCwgZGVsZXRlLCBldGMuKVxuICogLSB7QGxpbmsgTW9yZWJpdHMuZGF0ZX0gLSBlbmhhbmNlZCBkYXRlIG9iamVjdCBwcm9jZXNzaW5nLCBzb3J0IG9mIGEgbGlnaHQgbW9tZW50LmpzXG4gKiAtIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19IC0gZ2VuZXJhdGUgcXVpY2sgSFRNTCBmb3JtcyBvbiB0aGUgZmx5XG4gKiAtIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9IC0gYSB3cmFwcGVyIGZvciBqUXVlcnkgVUkgRGlhbG9nIHdpdGggYSBjdXN0b20gbG9vayBhbmQgZXh0cmEgZmVhdHVyZXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnN0YXR1c30gLSBhIHJvdWdoLWFuZC1yZWFkeSBzdGF0dXMgbWVzc2FnZSBkaXNwbGF5ZXIsIHVzZWQgYnkgdGhlIE1vcmViaXRzLndpa2kgY2xhc3Nlc1xuICogLSB7QGxpbmsgTW9yZWJpdHMud2lraXRleHR9IC0gdXRpbGl0aWVzIGZvciBkZWFsaW5nIHdpdGggd2lraXRleHRcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnN0cmluZ30gLSB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBzdHJpbmdzXG4gKiAtIHtAbGluayBNb3JlYml0cy5hcnJheX0gLSB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBhcnJheXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLmlwfSAtIHV0aWxpdGllcyB0byBoZWxwIHByb2Nlc3MgSVAgYWRkcmVzc2VzXG4gKlxuICogRGVwZW5kZW5jaWVzOlxuICogLSBUaGUgd2hvbGUgdGhpbmcgcmVsaWVzIG9uIGpRdWVyeS4gIEJ1dCBtb3N0IHdpa2lzIHNob3VsZCBwcm92aWRlIHRoaXMgYnkgZGVmYXVsdC5cbiAqIC0ge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0sIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9LCBhbmQge0BsaW5rIE1vcmViaXRzLnN0YXR1c30gcmVseSBvbiB0aGUgXCJtb3JlYml0cy5jc3NcIiBmaWxlIGZvciB0aGVpciBzdHlsaW5nLlxuICogLSB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSBhbmQge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0gdG9vbHRpcHMgcmVseSBvbiBqUXVlcnkgVUkgRGlhbG9nIChmcm9tIFJlc291cmNlTG9hZGVyIG1vZHVsZSBuYW1lICdqcXVlcnkudWknKS5cbiAqIC0gVG8gY3JlYXRlIGEgZ2FkZ2V0IGJhc2VkIG9uIG1vcmViaXRzLmpzLCB1c2UgdGhpcyBzeW50YXggaW4gTWVkaWFXaWtpOkdhZGdldHMtZGVmaW5pdGlvbjpcbiAqICAgICAtIGAqR2FkZ2V0TmFtZVtSZXNvdXJjZUxvYWRlcnxkZXBlbmRlbmNpZXM9bWVkaWF3aWtpLnVzZXIsbWVkaWF3aWtpLnV0aWwsbWVkaWF3aWtpLlRpdGxlLGpxdWVyeS51aV18bW9yZWJpdHMuanN8bW9yZWJpdHMuY3NzfEdhZGdldE5hbWUuanNgXG4gKiAtIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gY29uZmlndXJlIG1vcmViaXRzLmpzIGFzIGEgaGlkZGVuIGdhZGdldCBpbiBNZWRpYVdpa2k6R2FkZ2V0cy1kZWZpbml0aW9uOlxuICogICAgIC0gYCptb3JlYml0c1tSZXNvdXJjZUxvYWRlcnxkZXBlbmRlbmNpZXM9bWVkaWF3aWtpLnVzZXIsbWVkaWF3aWtpLnV0aWwsbWVkaWF3aWtpLlRpdGxlLGpxdWVyeS51aXxoaWRkZW5dfG1vcmViaXRzLmpzfG1vcmViaXRzLmNzc2BcbiAqICAgICBhbmQgdGhlbiBsb2FkIGV4dC5nYWRnZXQubW9yZWJpdHMgYXMgb25lIG9mIHRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoZSBuZXcgZ2FkZ2V0LlxuICpcbiAqIEFsbCB0aGUgc3R1ZmYgaGVyZSB3b3JrcyBvbiBhbGwgYnJvd3NlcnMgZm9yIHdoaWNoIE1lZGlhV2lraSBwcm92aWRlcyBKYXZhU2NyaXB0IHN1cHBvcnQuXG4gKlxuICogVGhpcyBsaWJyYXJ5IGlzIG1haW50YWluZWQgYnkgdGhlIG1haW50YWluZXJzIG9mIFR3aW5rbGUuXG4gKiBGb3IgcXVlcmllcywgc3VnZ2VzdGlvbnMsIGhlbHAsIGV0Yy4sIGhlYWQgdG8gW0hlbHA6VHdpbmtsZV0oaHR0cHM6Ly93d3cucWl1d2VuYmFpa2UuY24vd2lraS9IOlRXKS5cbiAqIFRoZSBsYXRlc3QgZGV2ZWxvcG1lbnQgc291cmNlIGlzIGF2YWlsYWJsZSBhdCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3dpa2ltZWRpYS1nYWRnZXRzL3R3aW5rbGUvYmxvYi9tYXN0ZXIvbW9yZWJpdHMuanN8R2l0SHVifS5cbiAqXG4gKiBAcGFyYW0ge0pRdWVyeX0gJFxuICogQG5hbWVzcGFjZSBNb3JlYml0c1xuICovXG5pbXBvcnQgJy4vbW9yZWJpdHMubGVzcyc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbihmdW5jdGlvbiBtb3JlYml0cygkKSB7XG5cdC8vIFdyYXAgZW50aXJlIGZpbGUgd2l0aCBhbm9ueW1vdXMgZnVuY3Rpb25cblx0LyoqIEBsZW5kcyBNb3JlYml0cyAqL1xuXHRjb25zdCBNb3JlYml0cyA9IHt9O1xuXHR3aW5kb3cuTW9yZWJpdHMgPSBNb3JlYml0czsgLy8gYWxsb3cgZ2xvYmFsIGFjY2Vzc1xuXHQvLyBObyBNb3JlYml0cy5pMThuIGF0IHRoaXMgdGltZVxuXHQvKipcblx0ICogV2lraS1zcGVjaWZpYyBjb25maWd1cmF0aW9ucyBmb3IgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmwxMG4gPSB7XG5cdFx0LyoqXG5cdFx0ICogTG9jYWwgYWxpYXNlcyBmb3IgXCJyZWRpcmVjdFwiIG1hZ2ljIHdvcmQuXG5cdFx0ICogQ2hlY2sgdXNpbmcgYXBpLnBocD9hY3Rpb249cXVlcnkmZm9ybWF0PWpzb24mbWV0YT1zaXRlaW5mbyZmb3JtYXR2ZXJzaW9uPTImc2lwcm9wPW1hZ2ljd29yZHNcblx0XHQgKi9cblx0XHRyZWRpcmVjdFRhZ0FsaWFzZXM6IFsnI1JFRElSRUNUJywgJyPph43lrprlkJEnXSxcblx0XHQvKipcblx0XHQgKiBUYWtlcyBhIHN0cmluZyBhcyBhcmd1bWVudCBhbmQgY2hlY2tzIGlmIGl0IGlzIGEgdGltZXN0YW1wIG9yIG5vdFxuXHRcdCAqIElmIG5vdCwgaXQgcmV0dXJucyBudWxsLiBJZiB5ZXMsIGl0IHJldHVybnMgYW4gYXJyYXkgb2YgaW50ZWdlcnNcblx0XHQgKiBpbiB0aGUgZm9ybWF0IFt5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlLCBzZWNvbmRdXG5cdFx0ICogd2hpY2ggY2FuIGJlIHBhc3NlZCB0byBEYXRlLlVUQygpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge251bWJlcltdIHwgbnVsbH1cblx0XHQgKi9cblx0XHRzaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQ6IChzdHIpID0+IHtcblx0XHRcdGNvbnN0IHJneFVUQyA9IC8oXFxkezR9KeW5tChcXGR7MSwyfSnmnIgoXFxkezEsMn0p5pelIFxcKC5cXCkgKFxcZHsyfSk6KFxcZHsyfSkgXFwoVVRDXFwpLzsgLy8gWVlZWeW5tE1vbnRo5pyIRETml6UgKHcpIEhIOm1tIChVVEMpXG5cdFx0XHRjb25zdCByZ3hDU1QgPSAvKFxcZHs0fSnlubQoXFxkezEsMn0p5pyIKFxcZHsxLDJ9KeaXpSBcXCguXFwpIChcXGR7Mn0pOihcXGR7Mn0pIFxcKENTVFxcKS87IC8vIFlZWVnlubRNb250aOaciERE5pelICh3KSBISDptbSAoQ1NUKVxuXHRcdFx0Y29uc3QgbWF0Y2ggPSByZ3hVVEMuZXhlYyhzdHIpIHx8IHJneENTVC5leGVjKHN0cik7XG5cdFx0XHRjb25zdCBtYXRjaENTVCA9IHJneENTVC5leGVjKHN0cik7XG5cdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbW9udGggPSBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzLmluZGV4T2YobWF0Y2hbNF0pO1xuXHRcdFx0aWYgKG1vbnRoID09PSAtMSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdC8vIC4uLi4uIHllYXIgLi4uLiBtb250aCAuLi4gZGF0ZSAuLi4uIGhvdXIgLi4uIG1pbnV0ZVxuXHRcdFx0cmV0dXJuIG1hdGNoQ1NUXG5cdFx0XHRcdD8gW21hdGNoWzFdLCBtYXRjaFsyXSAtIDEsIG1hdGNoWzNdLCBtYXRjaFs0XSAtIDgsIG1hdGNoWzVdXVxuXHRcdFx0XHQ6IFttYXRjaFsxXSwgbWF0Y2hbMl0gLSAxLCBtYXRjaFszXSwgbWF0Y2hbNF0sIG1hdGNoWzVdXTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBzZWUgd2hhdCBncm91cHMgYSB1c2VyIG1pZ2h0IGJlbG9uZy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwIC0gZS5nLiBgc3lzb3BgLCBgYXV0b2NvbmZpcm1lZGAsIGV0Yy5cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy51c2VySXNJbkdyb3VwID0gKGdyb3VwKSA9PiB7XG5cdFx0cmV0dXJuIG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpLmluY2x1ZGVzKGdyb3VwKTtcblx0fTtcblx0LyoqXG5cdCAqIEhhcmRjb2RlcyB3aGV0aGVyIHRoZSB1c2VyIGlzIGEgc3lzb3AsIHVzZWQgYSBsb3QuXG5cdCAqXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0TW9yZWJpdHMudXNlcklzU3lzb3AgPVxuXHRcdE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3N5c29wJykgfHwgTW9yZWJpdHMudXNlcklzSW5Hcm91cCgnc3Rld2FyZCcpIHx8IE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3FpdXdlbicpO1xuXHQvKipcblx0ICogRGVwcmVjYXRlZCBhcyBvZiBGZWJydWFyeSAyMDIxLCB1c2Uge0BsaW5rIE1vcmViaXRzLmlwLnNhbml0aXplSVB2Nn0uXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2fS5cblx0ICogQ29udmVydHMgYW4gSVB2NiBhZGRyZXNzIHRvIHRoZSBjYW5vbmljYWwgZm9ybSBzdG9yZWQgYW5kIHVzZWQgYnkgTWVkaWFXaWtpLlxuXHQgKiBKYXZhU2NyaXB0IHRyYW5zbGF0aW9uIG9mIHRoZSB7QGxpbmsgaHR0cHM6Ly9nZXJyaXQud2lraW1lZGlhLm9yZy9yL3BsdWdpbnMvZ2l0aWxlcy9tZWRpYXdpa2kvY29yZS8rLzhlYjZhYzNlODRlYTMzMTJkMzkxY2E5NmMxMmM0OWUzYWQwNzUzYmIvaW5jbHVkZXMvdXRpbHMvSVAucGhwIzEzMXxgSVA6OnNhbml0aXplSVAoKWB9XG5cdCAqIGZ1bmN0aW9uIGZyb20gdGhlIElQVXRpbHMgbGlicmFyeS4gIEFkZHJlc3NlcyBhcmUgdmVyYm9zZSwgdXBwZXJjYXNlLFxuXHQgKiBub3JtYWxpemVkLCBhbmQgZXhwYW5kZWQgdG8gOCB3b3Jkcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFkZHJlc3MgLSBUaGUgSVB2NiBhZGRyZXNzLCB3aXRoIG9yIHdpdGhvdXQgQ0lEUi5cblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnNhbml0aXplSVB2NiA9IChhZGRyZXNzKSA9PiB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0J1tNb3JlYml0c10gTk9URTogTW9yZWJpdHMuc2FuaXRpemVJUHY2IHdhcyByZW5hbWVkIHRvIE1vcmViaXRzLmlwLnNhbml0aXplSVB2NiBpbiBGZWJydWFyeSAyMDIxLCBwbGVhc2UgdXNlIHRoYXQgaW5zdGVhZCdcblx0XHQpO1xuXHRcdHJldHVybiBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYoYWRkcmVzcyk7XG5cdH07XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgcGFnZSBpcyBhIHJlZGlyZWN0IG9yIHNvZnQgcmVkaXJlY3QuIEZhaWxzXG5cdCAqIHRvIGRldGVjdCBzb2Z0IHJlZGlyZWN0cyBvbiBlZGl0LCBoaXN0b3J5LCBldGMuIHBhZ2VzLiAgV2lsbCBhdHRlbXB0IHRvXG5cdCAqIGRldGVjdCBNb2R1bGU6UmZELCB3aXRoIHRoZSBzYW1lIGZhaWx1cmUgcG9pbnRzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0ID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdHJldHVybiAhIShcblx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnSXNSZWRpcmVjdCcpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29mdHJlZGlyZWN0JykgfHxcblx0XHRcdCRib2R5LmZpbmQoJy5ib3gtUmZEJykubGVuZ3RoIHx8XG5cdFx0XHQkYm9keS5maW5kKCcuYm94LVJlZGlyZWN0X2NhdGVnb3J5X3NoZWxsJykubGVuZ3RoXG5cdFx0KTtcblx0fTtcblx0LyoqXG5cdCAqIFN0b3JlcyBhIG5vcm1hbGl6ZWQgKHVuZGVyc2NvcmVzIGNvbnZlcnRlZCB0byBzcGFjZXMpIHZlcnNpb24gb2YgdGhlXG5cdCAqIGB3Z1BhZ2VOYW1lYCB2YXJpYWJsZS5cblx0ICpcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnBhZ2VOYW1lTm9ybSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBzdHJpbmcgZm9yIHVzZSBpbiByZWdleCBtYXRjaGluZyBhIHBhZ2UgbmFtZS4gIEFjY291bnRzIGZvclxuXHQgKiBsZWFkaW5nIGNoYXJhY3RlcidzIGNhcGl0YWxpemF0aW9uLCB1bmRlcnNjb3JlcyBhcyBzcGFjZXMsIGFuZCBzcGVjaWFsXG5cdCAqIGNoYXJhY3RlcnMgYmVpbmcgZXNjYXBlZC4gIFNlZSBhbHNvIHtAbGluayBNb3JlYml0cy5uYW1lc3BhY2VSZWdleH0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTmFtZSAtIFBhZ2UgbmFtZSB3aXRob3V0IG5hbWVzcGFjZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gLSBGb3IgYSBwYWdlIG5hbWUgYEZvbyBiYXJgLCByZXR1cm5zIHRoZSBzdHJpbmcgYFtGZl1vb1tfIF1iYXJgLlxuXHQgKi9cblx0TW9yZWJpdHMucGFnZU5hbWVSZWdleCA9IChwYWdlTmFtZSkgPT4ge1xuXHRcdGlmIChwYWdlTmFtZSA9PT0gJycpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0Y29uc3QgW2ZpcnN0Q2hhcl0gPSBwYWdlTmFtZTtcblx0XHRjb25zdCByZW1haW5kZXIgPSBNb3JlYml0cy5zdHJpbmcuZXNjYXBlUmVnRXhwKHBhZ2VOYW1lLnNsaWNlKDEpKTtcblx0XHRpZiAobXcuVGl0bGUucGhwQ2hhclRvVXBwZXIoZmlyc3RDaGFyKSAhPT0gZmlyc3RDaGFyLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdHJldHVybiBgWyR7bXcuVGl0bGUucGhwQ2hhclRvVXBwZXIoZmlyc3RDaGFyKX0ke2ZpcnN0Q2hhci50b0xvd2VyQ2FzZSgpfV0ke3JlbWFpbmRlcn1gO1xuXHRcdH1cblx0XHRyZXR1cm4gTW9yZWJpdHMuc3RyaW5nLmVzY2FwZVJlZ0V4cChmaXJzdENoYXIpICsgcmVtYWluZGVyO1xuXHR9O1xuXHQvKipcblx0ICogQ29udmVydHMgc3RyaW5nIG9yIGFycmF5IG9mIERPTSBub2RlcyBpbnRvIGFuIEhUTUwgZnJhZ21lbnQuXG5cdCAqIFdpa2lsaW5rIHN5bnRheCAoYFtbLi4uXV1gKSBpcyB0cmFuc2Zvcm1lZCBpbnRvIEhUTUwgYW5jaG9yLlxuXHQgKiBVc2VkIGluIE1vcmViaXRzLnF1aWNrRm9ybSBhbmQgTW9yZWJpdHMuc3RhdHVzXG5cdCAqXG5cdCAqIEBpbnRlcm5hbFxuXHQgKiBAcGFyYW0ge3N0cmluZ3xOb2RlfChzdHJpbmd8Tm9kZSlbXX0gaW5wdXRcblx0ICogQHJldHVybnMge0RvY3VtZW50RnJhZ21lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5jcmVhdGVIdG1sID0gKGlucHV0KSA9PiB7XG5cdFx0Y29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0aWYgKCFpbnB1dCkge1xuXHRcdFx0cmV0dXJuIGZyYWdtZW50O1xuXHRcdH1cblx0XHRpbnB1dCA9IGdlbmVyYXRlQXJyYXkoaW5wdXQpO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBpbnB1dCkge1xuXHRcdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG5cdFx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChjb25zdCBub2RlIG9mICQucGFyc2VIVE1MKE1vcmViaXRzLmNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzKGVsZW1lbnQpKSkge1xuXHRcdFx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmcmFnbWVudDtcblx0fTtcblx0LyoqXG5cdCAqIENvbnZlcnRzIHdpa2lsaW5rcyB0byBIVE1MIGFuY2hvciB0YWdzLlxuXHQgKlxuXHQgKiBAcGFyYW0gdGV4dFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdE1vcmViaXRzLmNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzID0gKHRleHQpID0+IHtcblx0XHRjb25zdCB1YiA9IG5ldyBNb3JlYml0cy51bmJpbmRlcih0ZXh0KTtcblx0XHQvLyBEb24ndCBjb252ZXJ0IHdpa2lsaW5rcyB3aXRoaW4gY29kZSB0YWdzIGFzIHRoZXkncmUgdXNlZCBmb3IgZGlzcGxheWluZyB3aWtpLWNvZGVcblx0XHR1Yi51bmJpbmQoJzxjb2RlPicsICc8L2NvZGU+Jyk7XG5cdFx0dWIuY29udGVudCA9IHViLmNvbnRlbnQucmVwbGFjZSgvXFxbXFxbOj8oPzooW158XFxdXSs/KVxcfCk/KFteXFxdfF0rPylcXF1cXF0vZywgKF8sIHRhcmdldCwgdGV4dF8pID0+IHtcblx0XHRcdGlmICghdGFyZ2V0KSB7XG5cdFx0XHRcdHRhcmdldCA9IHRleHRfO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke213LnV0aWwuZ2V0VXJsKHRhcmdldCl9XCIgdGl0bGU9XCIke3RhcmdldC5yZXBsYWNlKFxuXHRcdFx0XHQvXCIvZyxcblx0XHRcdFx0JyYjMzQ7J1xuXHRcdFx0KX1cIj4ke3RleHRffTwvYT5gO1xuXHRcdH0pO1xuXHRcdHJldHVybiB1Yi5yZWJpbmQoKTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIHN0cmluZyBmb3IgdXNlIGluIHJlZ2V4IG1hdGNoaW5nIGFsbCBuYW1lc3BhY2UgYWxpYXNlcywgcmVnYXJkbGVzc1xuXHQgKiBvZiB0aGUgY2FwaXRhbGl6YXRpb24gYW5kIHVuZGVyc2NvcmVzL3NwYWNlcy4gIERvZXNuJ3QgaW5jbHVkZSB0aGUgb3B0aW9uYWxcblx0ICogbGVhZGluZyBgOmAsIGJ1dCBpZiB0aGVyZSdzIG1vcmUgdGhhbiBvbmUgaXRlbSwgd3JhcHMgdGhlIGxpc3QgaW4gYVxuXHQgKiBub24tY2FwdHVyaW5nIGdyb3VwLiAgVGhpcyBtZWFucyB5b3UgY2FuIGRvIGBNb3JlYml0cy5uYW1lc3BhY2VSZWdleChbNF0pICtcblx0ICogJzonICsgTW9yZWJpdHMucGFnZU5hbWVSZWdleCgnVHdpbmtsZScpYCB0byBtYXRjaCBhIGZ1bGwgcGFnZS4gIFVzZXNcblx0ICoge0BsaW5rIE1vcmViaXRzLnBhZ2VOYW1lUmVnZXh9LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcltdfSBuYW1lc3BhY2VzIC0gQXJyYXkgb2YgbmFtZXNwYWNlIG51bWJlcnMuICBVbnVzZWQvaW52YWxpZFxuXHQgKiBuYW1lc3BhY2UgbnVtYmVycyBhcmUgc2lsZW50bHkgZGlzY2FyZGVkLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiAvLyByZXR1cm5zICcoPzpbRmZdW0lpXVtMbF1bRWVdfFtJaV1bTW1dW0FhXVtHZ11bRWVdKSdcblx0ICogTW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoWzZdKVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSAtIFJlZ2V4LXN1aXRhYmxlIHN0cmluZyBvZiBhbGwgbmFtZXNwYWNlIGFsaWFzZXMuXG5cdCAqL1xuXHRNb3JlYml0cy5uYW1lc3BhY2VSZWdleCA9IChuYW1lc3BhY2VzKSA9PiB7XG5cdFx0bmFtZXNwYWNlcyA9IGdlbmVyYXRlQXJyYXkobmFtZXNwYWNlcyk7XG5cdFx0Y29uc3QgYWxpYXNlcyA9IFtdO1xuXHRcdGxldCByZWdleDtcblx0XHRmb3IgKGNvbnN0IFtuYW1lLCBudW1iZXJdIG9mIE9iamVjdC5lbnRyaWVzKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlSWRzJykpKSB7XG5cdFx0XHRpZiAobmFtZXNwYWNlcy5pbmNsdWRlcyhudW1iZXIpKSB7XG5cdFx0XHRcdC8vIE5hbWVzcGFjZXMgYXJlIGNvbXBsZXRlbHkgYWdub3N0aWMgYXMgdG8gY2FzZSxcblx0XHRcdFx0Ly8gYW5kIGEgcmVnZXggc3RyaW5nIGlzIG1vcmUgdXNlZnVsL2NvbXBhdGlibGUgdGhhbiBhIFJlZ0V4cCBvYmplY3QsXG5cdFx0XHRcdC8vIHNvIHdlIGFjY2VwdCBhbnkgY2FzaW5nIGZvciBhbnkgbGV0dGVyLlxuXHRcdFx0XHRhbGlhc2VzW2FsaWFzZXMubGVuZ3RoXSA9IFsuLi5uYW1lXVxuXHRcdFx0XHRcdC5tYXAoKGNoYXIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KGNoYXIpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmpvaW4oJycpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzd2l0Y2ggKGFsaWFzZXMubGVuZ3RoKSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHJlZ2V4ID0gJyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRbcmVnZXhdID0gYWxpYXNlcztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZWdleCA9IGAoPzoke2FsaWFzZXMuam9pbignfCcpfSlgO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHJlZ2V4O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLnF1aWNrRm9ybSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBDcmVhdGlvbiBvZiBzaW1wbGUgYW5kIHN0YW5kYXJkIGZvcm1zIHdpdGhvdXQgbXVjaCBzcGVjaWZpYyBjb2RpbmcuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtldmVudH0gZXZlbnQgLSBGdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gZm9ybSBpcyBzdWJtaXR0ZWQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZXZlbnRUeXBlPXN1Ym1pdF0gLSBUeXBlIG9mIHRoZSBldmVudC5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybSA9IGZ1bmN0aW9uIChldmVudCwgZXZlbnRUeXBlKSB7XG5cdFx0dGhpcy5yb290ID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KHtcblx0XHRcdHR5cGU6ICdmb3JtJyxcblx0XHRcdGV2ZW50LFxuXHRcdFx0ZXZlbnRUeXBlLFxuXHRcdH0pO1xuXHR9O1xuXHQvKipcblx0ICogUmVuZGVycyB0aGUgSFRNTCBvdXRwdXQgb2YgdGhlIHF1aWNrRm9ybS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCByZXQgPSB0aGlzLnJvb3QucmVuZGVyKCk7XG5cdFx0cmV0Lm5hbWVzID0ge307XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0LyoqXG5cdCAqIEFwcGVuZCBlbGVtZW50IHRvIHRoZSBmb3JtLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KG9iamVjdHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGRhdGEgLSBBIHF1aWNrZm9ybSBlbGVtZW50LCBvciB0aGUgb2JqZWN0IHdpdGggd2hpY2hcblx0ICogYSBxdWlja2Zvcm0gZWxlbWVudCBpcyBjb25zdHJ1Y3RlZC5cblx0ICogQHJldHVybnMge01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50fSAtIFNhbWUgYXMgd2hhdCBpcyBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHJldHVybiB0aGlzLnJvb3QuYXBwZW5kKGRhdGEpO1xuXHR9O1xuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IGVsZW1lbnQgZm9yIHRoZSB0aGUgZm9ybS5cblx0ICpcblx0ICogSW5kZXggdG8gTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQgdHlwZXM6XG5cdCAqIC0gR2xvYmFsIGF0dHJpYnV0ZXM6IGlkLCBjbGFzc05hbWUsIHN0eWxlLCB0b29sdGlwLCBleHRyYSwgJGRhdGEsIGFkbWlub25seVxuXHQgKiAtIGBzZWxlY3RgOiBBIGNvbWJvIGJveCAoYWthIGRyb3AtZG93bikuXG5cdCAqICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBtdWx0aXBsZSwgc2l6ZSwgbGlzdCwgZXZlbnQsIGRpc2FibGVkXG5cdCAqICAtIGBvcHRpb25gOiBBbiBlbGVtZW50IGZvciBhIGNvbWJvIGJveC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IHZhbHVlLCBsYWJlbCwgc2VsZWN0ZWQsIGRpc2FibGVkXG5cdCAqICAtIGBvcHRncm91cGA6IEEgZ3JvdXAgb2YgXCJvcHRpb25cInMuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBsYWJlbCwgbGlzdFxuXHQgKiAgLSBgZmllbGRgOiBBIGZpZWxkc2V0IChha2EgZ3JvdXAgYm94KS5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBkaXNhYmxlZFxuXHQgKiAgLSBgY2hlY2tib3hgOiBBIGNoZWNrYm94LiBNdXN0IHVzZSBcImxpc3RcIiBwYXJhbWV0ZXIuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsaXN0LCBldmVudFxuXHQgKiAgICAgIC0gQXR0cmlidXRlcyAod2l0aGluIGxpc3QpOiBuYW1lLCBsYWJlbCwgdmFsdWUsIGNoZWNrZWQsIGRpc2FibGVkLCBldmVudCwgc3ViZ3JvdXBcblx0ICogIC0gYHJhZGlvYDogQSByYWRpbyBidXR0b24uIE11c3QgdXNlIFwibGlzdFwiIHBhcmFtZXRlci5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxpc3QsIGV2ZW50XG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzICh3aXRoaW4gbGlzdCk6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgY2hlY2tlZCwgZGlzYWJsZWQsIGV2ZW50LCBzdWJncm91cFxuXHQgKiAgLSBgaW5wdXRgOiBBIHRleHQgaW5wdXQgYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIHZhbHVlLCBzaXplLCBwbGFjZWhvbGRlciwgbWF4bGVuZ3RoLCBkaXNhYmxlZCwgcmVxdWlyZWQsIHJlYWRvbmx5LCBldmVudFxuXHQgKiAgLSBgbnVtYmVyYDogQSBudW1iZXIgaW5wdXQgYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogRXZlcnl0aGluZyB0aGUgdGV4dCBgaW5wdXRgIGhhcywgYXMgd2VsbCBhczogbWluLCBtYXgsIHN0ZXAsIGxpc3Rcblx0ICogIC0gYGR5bmlucHV0YDogQSBzZXQgb2YgdGV4dCBib3hlcyB3aXRoIFwiUmVtb3ZlXCIgYnV0dG9ucyBhbmQgYW4gXCJBZGRcIiBidXR0b24uXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgbWluLCBtYXgsIHN1YmxhYmVsLCB2YWx1ZSwgc2l6ZSwgbWF4bGVuZ3RoLCBldmVudFxuXHQgKiAgLSBgaGlkZGVuYDogQW4gaW52aXNpYmxlIGZvcm0gZmllbGQuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCB2YWx1ZVxuXHQgKiAgLSBgaGVhZGVyYDogQSBsZXZlbCA1IGhlYWRlci5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IGxhYmVsXG5cdCAqICAtIGBkaXZgOiBBIGdlbmVyaWMgcGxhY2Vob2xkZXIgZWxlbWVudCBvciBsYWJlbC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsXG5cdCAqICAtIGBzdWJtaXRgOiBBIHN1Ym1pdCBidXR0b24uIE1vcmViaXRzLnNpbXBsZVdpbmRvdyBtb3ZlcyB0aGVzZSB0byB0aGUgZm9vdGVyIG9mIHRoZSBkaWFsb2cuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgZGlzYWJsZWRcblx0ICogIC0gYGJ1dHRvbmA6IEEgZ2VuZXJpYyBidXR0b24uXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgZGlzYWJsZWQsIGV2ZW50XG5cdCAqICAtIGB0ZXh0YXJlYWA6IEEgYmlnLCBtdWx0aS1saW5lIHRleHQgYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIHZhbHVlLCBjb2xzLCByb3dzLCBkaXNhYmxlZCwgcmVxdWlyZWQsIHJlYWRvbmx5XG5cdCAqICAtIGBmcmFnbWVudGA6IEEgRG9jdW1lbnRGcmFnbWVudCBvYmplY3QuXG5cdCAqICAgICAgLSBObyBhdHRyaWJ1dGVzLCBhbmQgbm8gZ2xvYmFsIGF0dHJpYnV0ZXMgZXhjZXB0IGFkbWlub25seS5cblx0ICogVGhlcmUgaXMgc29tZSBkaWZmZXJlbmNlIG9uIGhvdyB0eXBlcyBoYW5kbGUgdGhlIGBsYWJlbGAgYXR0cmlidXRlOlxuXHQgKiAtIGBkaXZgLCBgc2VsZWN0YCwgYGZpZWxkYCwgYGNoZWNrYm94YC9gcmFkaW9gLCBgaW5wdXRgLCBgdGV4dGFyZWFgLCBgaGVhZGVyYCwgYW5kIGBkeW5pbnB1dGAgY2FuIGFjY2VwdCBhbiBhcnJheSBvZiBpdGVtcyxcblx0ICogYW5kIHRoZSBsYWJlbCBpdGVtKHMpIGNhbiBiZSBgRWxlbWVudGBzLlxuXHQgKiAtIGBvcHRpb25gLCBgb3B0Z3JvdXBgLCBgX2R5bmlucHV0X2VsZW1lbnRgLCBgc3VibWl0YCwgYW5kIGBidXR0b25gIGFjY2VwdCBvbmx5IGEgc2luZ2xlIHN0cmluZy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBPYmplY3QgcmVwcmVzZW50aW5nIHRoZSBxdWlja2Zvcm0gZWxlbWVudC4gU2hvdWxkXG5cdCAqIHNwZWNpZnkgb25lIG9mIHRoZSBhdmFpbGFibGUgdHlwZXMgZnJvbSB0aGUgaW5kZXggYWJvdmUsIGFzIHdlbGwgYXMgYW55XG5cdCAqIHJlbGV2YW50IGFuZCBhdmFpbGFibGUgYXR0cmlidXRlcy5cblx0ICogQGV4YW1wbGUgbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KHtcblx0ICogICAgIG5hbWU6ICd0YXJnZXQnLFxuXHQgKiAgICAgdHlwZTogJ2lucHV0Jyxcblx0ICogICAgIGxhYmVsOiAnWW91ciB0YXJnZXQ6Jyxcblx0ICogICAgIHRvb2x0aXA6ICdFbnRlciB5b3VyIHRhcmdldC4gUmVxdWlyZWQuJyxcblx0ICogICAgIHJlcXVpcmVkOiB0cnVlXG5cdCAqIH0pO1xuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5jaGlsZHMgPSBbXTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudFxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuaWQgPSAwO1xuXHQvKipcblx0ICogQXBwZW5kcyBhbiBlbGVtZW50IHRvIGN1cnJlbnQgZWxlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqIEBwYXJhbSB7TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnR9IGRhdGEgLSBBIHF1aWNrRm9ybSBlbGVtZW50IG9yIHRoZSBvYmplY3QgcmVxdWlyZWQgdG9cblx0ICogY3JlYXRlIHRoZSBxdWlja0Zvcm0gZWxlbWVudC5cblx0ICogQHJldHVybnMge01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50fSBUaGUgc2FtZSBlbGVtZW50IHBhc3NlZCBpbi5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdGxldCBjaGlsZDtcblx0XHRpZiAoZGF0YSBpbnN0YW5jZW9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KSB7XG5cdFx0XHRjaGlsZCA9IGRhdGE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNoaWxkID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KGRhdGEpO1xuXHRcdH1cblx0XHR0aGlzLmNoaWxkc1t0aGlzLmNoaWxkcy5sZW5ndGhdID0gY2hpbGQ7XG5cdFx0cmV0dXJuIGNoaWxkO1xuXHR9O1xuXHQvKipcblx0ICogUmVuZGVycyB0aGUgSFRNTCBvdXRwdXQgZm9yIHRoZSBxdWlja0Zvcm0gZWxlbWVudC4gIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuXHQgKiB3aXRob3V0IHBhcmFtZXRlcnM6IGBmb3JtLnJlbmRlcigpYC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGludGVybmFsU3ViZ3JvdXBJZFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChpbnRlcm5hbFN1Ymdyb3VwSWQpIHtcblx0XHRjb25zdCBjdXJyZW50Tm9kZSA9IHRoaXMuY29tcHV0ZSh0aGlzLmRhdGEsIGludGVybmFsU3ViZ3JvdXBJZCk7XG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcykge1xuXHRcdFx0Ly8gZG8gbm90IHBhc3MgaW50ZXJuYWxfc3ViZ3JvdXBfaWQgdG8gcmVjdXJzaXZlIGNhbGxzXG5cdFx0XHRjdXJyZW50Tm9kZVsxXS5hcHBlbmRDaGlsZChjaGlsZC5yZW5kZXIoKSk7XG5cdFx0fVxuXHRcdHJldHVybiBjdXJyZW50Tm9kZVswXTtcblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSB7Kn0gZGF0YVxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5JZFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKGRhdGEsIGluSWQpIHtcblx0XHRsZXQgbm9kZTtcblx0XHRsZXQgY2hpbGRDb250YWluZXIgPSBudWxsO1xuXHRcdGxldCBsYWJlbDtcblx0XHRjb25zdCBpZCA9IGAke2luSWQgPyBgJHtpbklkfV9gIDogJyd9bm9kZV8ke01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmlkKyt9YDtcblx0XHRpZiAoZGF0YS5hZG1pbm9ubHkgJiYgIU1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHQvLyBoZWxsIGhhY2sgYWxwaGFcblx0XHRcdGRhdGEudHlwZSA9ICdoaWRkZW4nO1xuXHRcdH1cblx0XHRsZXQgaTtcblx0XHRsZXQgY3VycmVudDtcblx0XHRsZXQgc3Vibm9kZTtcblx0XHRzd2l0Y2ggKGRhdGEudHlwZSkge1xuXHRcdFx0Y2FzZSAnZm9ybSc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cdFx0XHRcdG5vZGUuY2xhc3NOYW1lID0gJ3F1aWNrZm9ybSc7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zY3JpcHQtdXJsXG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnamF2YXNjcmlwdDp2b2lkKDApOycpO1xuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihkYXRhLmV2ZW50VHlwZSB8fCAnc3VibWl0JywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZnJhZ21lbnQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdFx0XHQvLyBmcmFnbWVudHMgY2FuJ3QgaGF2ZSBhbnkgYXR0cmlidXRlcywgc28ganVzdCByZXR1cm4gaXQgc3RyYWlnaHQgYXdheVxuXHRcdFx0XHRyZXR1cm4gW25vZGUsIG5vZGVdO1xuXHRcdFx0Y2FzZSAnc2VsZWN0Jzoge1xuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0Ly8gTm8gbWFyZ2luXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBzZWxlY3QgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpKTtcblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLm11bHRpcGxlKSB7XG5cdFx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCAnbXVsdGlwbGUnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5zaXplKSB7XG5cdFx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnc2l6ZScsIGRhdGEuc2l6ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRzZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGRhdGEubGlzdFtpXTtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50Lmxpc3QpIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudC50eXBlID0gJ29wdGdyb3VwJztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRpb24nO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IHRoaXMuY29tcHV0ZShjdXJyZW50KTtcblx0XHRcdFx0XHRcdHNlbGVjdC5hcHBlbmRDaGlsZChzdWJub2RlWzBdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBzZWxlY3Q7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAnb3B0aW9uJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdFx0XHRub2RlLnZhbHVlcyA9IGRhdGEudmFsdWU7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5zZWxlY3RlZCkge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0bm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgZGF0YS5sYWJlbCk7XG5cdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ29wdGdyb3VwJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdsYWJlbCcsIGRhdGEubGFiZWwpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGRhdGEubGlzdFtpXTtcblx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRpb24nOyAvLyBtdXN0IGJlIG9wdGlvbnMgaGVyZVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IHRoaXMuY29tcHV0ZShjdXJyZW50KTtcblx0XHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoc3Vibm9kZVswXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZmllbGQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcblx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpKTtcblx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGlmIChkYXRhLm5hbWUpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VySWQgPSBgJHtpZH1fJHtpfWA7XG5cdFx0XHRcdFx0XHRjdXJyZW50ID0gZGF0YS5saXN0W2ldO1xuXHRcdFx0XHRcdFx0bGV0IGN1ckRpdjtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnR5cGUgPT09ICdoZWFkZXInKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGlubGluZSBoYWNrXG5cdFx0XHRcdFx0XHRcdGN1ckRpdiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKSk7XG5cdFx0XHRcdFx0XHRcdGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdXJyZW50LmxhYmVsKSk7XG5cdFx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnRvb2x0aXApIHtcblx0XHRcdFx0XHRcdFx0XHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAoY3VyRGl2LCBjdXJyZW50KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGN1ckRpdiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuXHRcdFx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5oaWRkZW4pIHtcblx0XHRcdFx0XHRcdFx0Y3VyRGl2LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUudmFsdWVzID0gY3VycmVudC52YWx1ZTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGN1cnJlbnQudmFsdWUpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBkYXRhLnR5cGUpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgY3VySWQpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBjdXJyZW50Lm5hbWUgfHwgZGF0YS5uYW1lKTtcblx0XHRcdFx0XHRcdC8vIElmIG5hbWUgaXMgcHJvdmlkZWQgb24gdGhlIGluZGl2aWR1YWwgY2hlY2tib3gsIGFkZCBhIGRhdGEtc2luZ2xlXG5cdFx0XHRcdFx0XHQvLyBhdHRyaWJ1dGUgd2hpY2ggaW5kaWNhdGVzIGl0IGlzbid0IHBhcnQgb2YgYSBsaXN0IG9mIGNoZWNrYm94ZXMgd2l0aFxuXHRcdFx0XHRcdFx0Ly8gc2FtZSBuYW1lLiBVc2VkIGluIGdldElucHV0RGF0YSgpXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5uYW1lKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXNpbmdsZScsICdkYXRhLXNpbmdsZScpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsYWJlbCA9IGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoY3VycmVudC5sYWJlbCkpO1xuXHRcdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjdXJJZCk7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC50b29sdGlwKSB7XG5cdFx0XHRcdFx0XHRcdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmdlbmVyYXRlVG9vbHRpcChsYWJlbCwgY3VycmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBzdHlsZXMgZ28gb24gdGhlIGxhYmVsLCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gc3R5bGUgYSBjaGVja2JveC9yYWRpb1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuc3R5bGUpIHtcblx0XHRcdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGN1cnJlbnQuc3R5bGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGV0IGV2ZW50O1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuc3ViZ3JvdXApIHtcblx0XHRcdFx0XHRcdFx0bGV0IHRtcGdyb3VwID0gY3VycmVudC5zdWJncm91cDtcblx0XHRcdFx0XHRcdFx0dG1wZ3JvdXAgPSBnZW5lcmF0ZUFycmF5KHRtcGdyb3VwKTtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViZ3JvdXBSYXcgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdGlkOiBgJHtpZH1fJHtpfV9zdWJncm91cGAsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsIG9mIHRtcGdyb3VwKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgbmV3RWwgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5lbCxcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdGlmICghbmV3RWwudHlwZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3RWwudHlwZSA9IGRhdGEudHlwZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0bmV3RWwubmFtZSA9IGAke2N1cnJlbnQubmFtZSB8fCBkYXRhLm5hbWV9LiR7bmV3RWwubmFtZX1gO1xuXHRcdFx0XHRcdFx0XHRcdHN1Ymdyb3VwUmF3LmFwcGVuZChuZXdFbCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViZ3JvdXAgPSBzdWJncm91cFJhdy5yZW5kZXIoY3VySWQpO1xuXHRcdFx0XHRcdFx0XHRzdWJncm91cC5jbGFzc05hbWUgPSAncXVpY2tmb3JtU3ViZ3JvdXAnO1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnN1Ymdyb3VwID0gc3ViZ3JvdXA7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2hvd24gPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0ZXZlbnQgPSAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGUudGFyZ2V0LnN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHtuYW1lfSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5zdWJncm91cFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUudGFyZ2V0LnN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY3VycmVudC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3Vibm9kZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdyYWRpbycpIHtcblx0XHRcdFx0XHRcdFx0ZXZlbnQgPSAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB7bmFtZX0gPSBlLnRhcmdldDtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0uc3ViZ3JvdXBcblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZSBlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBhZGQgdXNlcnMnIGV2ZW50IGxhc3QsIHNvIGl0IGNhbiBpbnRlcmFjdCB3aXRoIHRoZSBzdWJncm91cFxuXHRcdFx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGN1cnJlbnQuZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjdXJyZW50LmV2ZW50LCB0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuc2hpZnRDbGlja1N1cHBvcnQgJiYgZGF0YS50eXBlID09PSAnY2hlY2tib3gnKSB7XG5cdFx0XHRcdFx0TW9yZWJpdHMuY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydChNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudHMobm9kZSwgZGF0YS5uYW1lKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHQvLyBpbnB1dCBpcyBhY3R1YWxseSBhIHRleHQtdHlwZSwgc28gbnVtYmVyIGhlcmUgaW5oZXJpdHMgdGhlIHNhbWUgc3R1ZmZcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRjYXNlICdpbnB1dCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRpdl8ke2lkfWApO1xuXHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEuaGlkZGVuKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGRhdGEuaWQgfHwgaWQpO1xuXHRcdFx0XHRcdC8vIE5vIG1hcmdpblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Vibm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdC8vIEFkZCB2YWx1ZSBhbmQgcGxhY2Vob2xkZXIgYXR0cnNcblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGRhdGEucGxhY2Vob2xkZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0aWYgKGRhdGEudHlwZSA9PT0gJ2lucHV0Jykge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGF0dCBvZiBbJ21pbicsICdtYXgnLCAnc3RlcCcsICdsaXN0J10pIHtcblx0XHRcdFx0XHRcdGlmIChkYXRhW2F0dF0pIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoYXR0LCBkYXRhW2F0dF0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGNvbnN0IGF0dCBvZiBbJ3ZhbHVlJywgJ3NpemUnLCAncGxhY2Vob2xkZXInLCAnbWF4bGVuZ3RoJ10pIHtcblx0XHRcdFx0XHRpZiAoZGF0YVthdHRdKSB7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZShhdHQsIGRhdGFbYXR0XSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoY29uc3QgYXR0IG9mIFsnZGlzYWJsZWQnLCAncmVxdWlyZWQnLCAncmVhZG9ubHknXSkge1xuXHRcdFx0XHRcdGlmIChkYXRhW2F0dF0pIHtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKGF0dCwgYXR0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc3Vibm9kZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkeW5pbnB1dCc6IHtcblx0XHRcdFx0Y29uc3QgbWluID0gZGF0YS5taW4gfHwgMTtcblx0XHRcdFx0Y29uc3QgbWF4ID0gZGF0YS5tYXggfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpKTtcblx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGNvbnN0IGxpc3ROb2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5cdFx0XHRcdGNvbnN0IG1vcmUgPSB0aGlzLmNvbXB1dGUoe1xuXHRcdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRcdGxhYmVsOiAn5pu05aSaJyxcblx0XHRcdFx0XHRkaXNhYmxlZDogbWluID49IG1heCxcblx0XHRcdFx0XHRldmVudDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IG5ld05vZGUgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoZS50YXJnZXQuc3VibGlzdCk7XG5cdFx0XHRcdFx0XHRlLnRhcmdldC5hcmVhLmFwcGVuZENoaWxkKG5ld05vZGUucmVuZGVyKCkpO1xuXHRcdFx0XHRcdFx0aWYgKCsrZS50YXJnZXQuY291bnRlciA+PSBlLnRhcmdldC5tYXgpIHtcblx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChtb3JlWzBdKTtcblx0XHRcdFx0Y29uc3QgWywgbW9yZUJ1dHRvbl0gPSBtb3JlO1xuXHRcdFx0XHRjb25zdCBzdWJsaXN0ID0ge1xuXHRcdFx0XHRcdHR5cGU6ICdfZHluaW5wdXRfZWxlbWVudCcsXG5cdFx0XHRcdFx0bGFiZWw6IGRhdGEuc3VibGFiZWwgfHwgZGF0YS5sYWJlbCxcblx0XHRcdFx0XHRuYW1lOiBkYXRhLm5hbWUsXG5cdFx0XHRcdFx0dmFsdWU6IGRhdGEudmFsdWUsXG5cdFx0XHRcdFx0c2l6ZTogZGF0YS5zaXplLFxuXHRcdFx0XHRcdHJlbW92ZTogZmFsc2UsXG5cdFx0XHRcdFx0bWF4bGVuZ3RoOiBkYXRhLm1heGxlbmd0aCxcblx0XHRcdFx0XHRldmVudDogZGF0YS5ldmVudCxcblx0XHRcdFx0fTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1pbjsgKytpKSB7XG5cdFx0XHRcdFx0Y29uc3QgZWxlbSA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudChzdWJsaXN0KTtcblx0XHRcdFx0XHRsaXN0Tm9kZS5hcHBlbmRDaGlsZChlbGVtLnJlbmRlcigpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJsaXN0LnJlbW92ZSA9IHRydWU7XG5cdFx0XHRcdHN1Ymxpc3QubW9yZWJ1dHRvbiA9IG1vcmVCdXR0b247XG5cdFx0XHRcdHN1Ymxpc3QubGlzdG5vZGUgPSBsaXN0Tm9kZTtcblx0XHRcdFx0bW9yZUJ1dHRvbi5zdWJsaXN0ID0gc3VibGlzdDtcblx0XHRcdFx0bW9yZUJ1dHRvbi5hcmVhID0gbGlzdE5vZGU7XG5cdFx0XHRcdG1vcmVCdXR0b24ubWF4ID0gbWF4IC0gbWluO1xuXHRcdFx0XHRtb3JlQnV0dG9uLmNvdW50ZXIgPSAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ19keW5pbnB1dF9lbGVtZW50Jzpcblx0XHRcdFx0Ly8gUHJpdmF0ZSwgc2ltaWxhciB0byBub3JtYWwgaW5wdXRcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG5cdFx0XHRcdFx0Ly8gTm8gbWFyZ2luXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdWJub2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0XHRcdFx0aWYgKGRhdGEuc2l6ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdzaXplJywgZGF0YS5zaXplKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5tYXhsZW5ndGgpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgZGF0YS5tYXhsZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZW1vdmUpIHtcblx0XHRcdFx0XHRjb25zdCByZW1vdmUgPSB0aGlzLmNvbXB1dGUoe1xuXHRcdFx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0XHRsYWJlbDogJ+enu+mZpCcsXG5cdFx0XHRcdFx0XHRldmVudDogKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbGlzdCA9IGUudGFyZ2V0Lmxpc3Rub2RlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBub2RlXyA9IGUudGFyZ2V0LmlucHV0bm9kZTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbW9yZSA9IGUudGFyZ2V0Lm1vcmVidXR0b247XG5cdFx0XHRcdFx0XHRcdGxpc3QucmVtb3ZlQ2hpbGQobm9kZV8pO1xuXHRcdFx0XHRcdFx0XHQtLW1vcmUuY291bnRlcjtcblx0XHRcdFx0XHRcdFx0bW9yZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQocmVtb3ZlWzBdKTtcblx0XHRcdFx0XHRjb25zdCBbLCByZW1vdmVCdXR0b25dID0gcmVtb3ZlO1xuXHRcdFx0XHRcdHJlbW92ZUJ1dHRvbi5pbnB1dG5vZGUgPSBub2RlO1xuXHRcdFx0XHRcdHJlbW92ZUJ1dHRvbi5saXN0bm9kZSA9IGRhdGEubGlzdG5vZGU7XG5cdFx0XHRcdFx0cmVtb3ZlQnV0dG9uLm1vcmVidXR0b24gPSBkYXRhLm1vcmVidXR0b247XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoaWRkZW4nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaGlkZGVuJyk7XG5cdFx0XHRcdG5vZGUudmFsdWVzID0gZGF0YS52YWx1ZTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoZWFkZXInOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcblx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkaXYnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGlmIChkYXRhLm5hbWUpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdFx0cmVzdWx0LmNsYXNzTmFtZSA9ICdxdWlja2Zvcm1EZXNjcmlwdGlvbic7XG5cdFx0XHRcdFx0cmVzdWx0LmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQocmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3N1Ym1pdCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUgfHwgJ3N1Ym1pdCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2J1dHRvbic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKSk7XG5cdFx0XHRcdFx0Y29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0XHRcdFx0XHRsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgZGF0YS5pZCB8fCBpZCk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKTtcblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5jb2xzKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCBkYXRhLmNvbHMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJvd3MpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncm93cycsIGRhdGEucm93cyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRzdWJub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZXF1aXJlZCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJlYWRvbmx5KSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnZhbHVlID0gZGF0YS52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBBZGQgcGxhY2Vob2xkZXIgYXR0clxuXHRcdFx0XHRpZiAoZGF0YS5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdHN1Ym5vZGUucGxhY2Vob2xkZXIgPSBkYXRhLnBsYWNlaG9sZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc3Vibm9kZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1vcmViaXRzLnF1aWNrRm9ybTogdW5rbm93biBlbGVtZW50IHR5cGUgJHtkYXRhLnR5cGUudG9TdHJpbmcoKX1gKTtcblx0XHR9XG5cdFx0aWYgKCFjaGlsZENvbnRhaW5lcikge1xuXHRcdFx0Y2hpbGRDb250YWluZXIgPSBub2RlO1xuXHRcdH1cblx0XHRpZiAoZGF0YS50b29sdGlwKSB7XG5cdFx0XHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAobGFiZWwgfHwgbm9kZSwgZGF0YSk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLmV4dHJhKSB7XG5cdFx0XHRjaGlsZENvbnRhaW5lci5leHRyYSA9IGRhdGEuZXh0cmE7XG5cdFx0fVxuXHRcdGlmIChkYXRhLiRkYXRhKSB7XG5cdFx0XHQkKGNoaWxkQ29udGFpbmVyKS5kYXRhKGRhdGEuJGRhdGEpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5zdHlsZSkge1xuXHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGRhdGEuc3R5bGUpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5jbGFzc05hbWUpIHtcblx0XHRcdGNoaWxkQ29udGFpbmVyLmNsYXNzTmFtZSA9IGNoaWxkQ29udGFpbmVyLmNsYXNzTmFtZVxuXHRcdFx0XHQ/IGAke2NoaWxkQ29udGFpbmVyLmNsYXNzTmFtZX0gJHtkYXRhLmNsYXNzTmFtZX1gXG5cdFx0XHRcdDogZGF0YS5jbGFzc05hbWU7XG5cdFx0fVxuXHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBkYXRhLmlkIHx8IGlkKTtcblx0XHRyZXR1cm4gW25vZGUsIGNoaWxkQ29udGFpbmVyXTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIGpRdWVyeSBVSS1iYXNlZCB0b29sdGlwLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHJlcXVpcmVzIGpxdWVyeS51aVxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIEhUTUwgZWxlbWVudCBiZXNpZGUgd2hpY2ggYSB0b29sdGlwIGlzIHRvIGJlIGdlbmVyYXRlZC5cblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUb29sdGlwLXJlbGF0ZWQgY29uZmlndXJhdGlvbiBkYXRhLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuZ2VuZXJhdGVUb29sdGlwID0gKG5vZGUsIGRhdGEpID0+IHtcblx0XHRjb25zdCB0b29sdGlwQnV0dG9uID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuXHRcdHRvb2x0aXBCdXR0b24uY2xhc3NOYW1lID0gJ21vcmViaXRzLXRvb2x0aXBCdXR0b24nO1xuXHRcdHRvb2x0aXBCdXR0b24udGl0bGUgPSBkYXRhLnRvb2x0aXA7IC8vIFByb3ZpZGVzIHRoZSBjb250ZW50IGZvciBqUXVlcnkgVUlcblx0XHR0b29sdGlwQnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCc/JykpO1xuXHRcdCQodG9vbHRpcEJ1dHRvbikudG9vbHRpcCh7XG5cdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRteTogJ2xlZnQgdG9wJyxcblx0XHRcdFx0YXQ6ICdjZW50ZXIgYm90dG9tJyxcblx0XHRcdFx0Y29sbGlzaW9uOiAnZmxpcGZpdCcsXG5cdFx0XHR9LFxuXHRcdFx0Ly8gRGVwcmVjYXRlZCBpbiBVSSAxLjEyLCBidXQgTVcgc3R1Y2sgb24gMS45LjIgaW5kZWZpbml0ZWx5OyBzZWUgIzM5OCBhbmQgVDcxMzg2XG5cdFx0XHR0b29sdGlwQ2xhc3M6ICdtb3JlYml0cy11aS10b29sdGlwJyxcblx0XHR9KTtcblx0fTtcblx0Ly8gU29tZSB1dGlsaXR5IG1ldGhvZHMgZm9yIG1hbmlwdWxhdGluZyBxdWlja0Zvcm1zIGFmdGVyIHRoZWlyIGNyZWF0aW9uOlxuXHQvLyAoTm9uZSBvZiB0aGVzZSB3b3JrIGZvciBcImR5bmlucHV0XCIgdHlwZSBmaWVsZHMgYXQgcHJlc2VudClcblx0LyoqXG5cdCAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGZpbGxlZCBmb3JtIGRhdGEgZW50ZXJlZCBieSB0aGUgdXNlciwgd2l0aCB0aGUgb2JqZWN0XG5cdCAqIGtleXMgYmVpbmcgdGhlIGZvcm0gZWxlbWVudCBuYW1lcy4gRGlzYWJsZWQgZmllbGRzIHdpbGwgYmUgaWdub3JlZCwgYnV0IG5vdCBoaWRkZW4gZmllbGRzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IFdpdGggZmllbGQgbmFtZXMgYXMga2V5cywgaW5wdXQgZGF0YSBhcyB2YWx1ZXMuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0SW5wdXREYXRhID0gKGZvcm0pID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSB7fTtcblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIGZvcm0uZWxlbWVudHMpIHtcblx0XHRcdGlmIChmaWVsZC5kaXNhYmxlZCB8fCAhZmllbGQubmFtZSB8fCAhZmllbGQudHlwZSB8fCBmaWVsZC50eXBlID09PSAnc3VibWl0JyB8fCBmaWVsZC50eXBlID09PSAnYnV0dG9uJykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIEZvciBlbGVtZW50cyBpbiBzdWJncm91cHMsIHF1aWNrZm9ybSBwcmVwZW5kcyBlbGVtZW50IG5hbWVzIHdpdGhcblx0XHRcdC8vIG5hbWUgb2YgdGhlIHBhcmVudCBncm91cCBmb2xsb3dlZCBieSBhIHBlcmlvZCwgZ2V0IHJpZCBvZiB0aGF0LlxuXHRcdFx0Y29uc3QgZmllbGROYW1lTm9ybSA9IGZpZWxkLm5hbWUuc2xpY2UoZmllbGQubmFtZS5pbmRleE9mKCcuJykgKyAxKTtcblx0XHRcdHN3aXRjaCAoZmllbGQudHlwZSkge1xuXHRcdFx0XHRjYXNlICdyYWRpbyc6XG5cdFx0XHRcdFx0aWYgKGZpZWxkLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0XHRcdGlmIChmaWVsZC5kYXRhc2V0LnNpbmdsZSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQuY2hlY2tlZDsgLy8gYm9vbGVhblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gfHw9IFtdO1xuXHRcdFx0XHRcdFx0aWYgKGZpZWxkLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dW3Jlc3VsdFtmaWVsZE5hbWVOb3JtXS5sZW5ndGhdID0gZmllbGQudmFsdWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzZWxlY3QtbXVsdGlwbGUnOlxuXHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9ICQoZmllbGQpLnZhbCgpOyAvLyBmaWVsZC52YWx1ZSBkb2Vzbid0IHdvcmtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndGV4dCc6IC8vIGZhbGxzIHRocm91Z2hcblx0XHRcdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlLnRyaW0oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBjb3VsZCBiZSBzZWxlY3Qtb25lLCBkYXRlLCBudW1iZXIsIGVtYWlsLCBldGNcblx0XHRcdFx0XHRpZiAoZmllbGQudmFsdWUpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0LyoqXG5cdCAqIFJldHVybnMgYWxsIGZvcm0gZWxlbWVudHMgd2l0aCBhIGdpdmVuIGZpZWxkIG5hbWUgb3IgSUQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cblx0ICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSAtIFRoZSBuYW1lIG9yIGlkIG9mIHRoZSBmaWVsZHMuXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudFtdfSAtIEFycmF5IG9mIG1hdGNoaW5nIGZvcm0gZWxlbWVudHMuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudHMgPSAoZm9ybSwgZmllbGROYW1lKSA9PiB7XG5cdFx0Y29uc3QgJGZvcm0gPSAkKGZvcm0pO1xuXHRcdGZpZWxkTmFtZSA9ICQuZXNjYXBlU2VsZWN0b3IoZmllbGROYW1lKTsgLy8gc2FuaXRpemUgaW5wdXRcblx0XHRsZXQgJGVsZW1lbnRzID0gJGZvcm0uZmluZChgW25hbWU9XCIke2ZpZWxkTmFtZX1cIl1gKTtcblx0XHRpZiAoJGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiAkZWxlbWVudHMudG9BcnJheSgpO1xuXHRcdH1cblx0XHQkZWxlbWVudHMgPSAkZm9ybS5maW5kKGAjJHtmaWVsZE5hbWV9YCk7XG5cdFx0cmV0dXJuICRlbGVtZW50cy50b0FycmF5KCk7XG5cdH07XG5cdC8qKlxuXHQgKiBTZWFyY2hlcyB0aGUgYXJyYXkgb2YgZWxlbWVudHMgZm9yIGEgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uIHdpdGggYSBjZXJ0YWluXG5cdCAqIGB2YWx1ZWAgYXR0cmlidXRlLCBhbmQgcmV0dXJucyB0aGUgZmlyc3Qgc3VjaCBlbGVtZW50LiBSZXR1cm5zIG51bGwgaWYgbm90IGZvdW5kLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudFtdfSBlbGVtZW50QXJyYXkgLSBBcnJheSBvZiBjaGVja2JveCBvciByYWRpbyBlbGVtZW50cy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVmFsdWUgdG8gc2VhcmNoIGZvci5cblx0ICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0Q2hlY2tib3hPclJhZGlvID0gKGVsZW1lbnRBcnJheSwgdmFsdWUpID0+IHtcblx0XHRjb25zdCBmb3VuZCA9IGVsZW1lbnRBcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBlbGVtZW50LnZhbHVlID09PSB2YWx1ZTtcblx0XHR9KTtcblx0XHRpZiAoZm91bmQubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZvdW5kWzBdO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0LyoqXG5cdCAqIFJldHVybnMgdGhlICZsdDtkaXY+IGNvbnRhaW5pbmcgdGhlIGZvcm0gZWxlbWVudCwgb3IgdGhlIGZvcm0gZWxlbWVudCBpdHNlbGZcblx0ICogTWF5IG5vdCB3b3JrIGFzIGV4cGVjdGVkIG9uIGNoZWNrYm94ZXMgb3IgcmFkaW9zLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRDb250YWluZXIgPSAoZWxlbWVudCkgPT4ge1xuXHRcdC8vIGZvciBkaXZzLCBoZWFkaW5ncyBhbmQgZmllbGRzZXRzLCB0aGUgY29udGFpbmVyIGlzIHRoZSBlbGVtZW50IGl0c2VsZlxuXHRcdGlmIChcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRmllbGRTZXRFbGVtZW50IHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTERpdkVsZW1lbnQgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSGVhZGluZ0VsZW1lbnRcblx0XHQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdH1cblx0XHQvLyBmb3Igb3RoZXJzLCBqdXN0IHJldHVybiB0aGUgcGFyZW50IG5vZGVcblx0XHRyZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlO1xuXHR9O1xuXHQvKipcblx0ICogR2V0cyB0aGUgSFRNTCBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIGxhYmVsIG9mIHRoZSBnaXZlbiBmb3JtIGVsZW1lbnRcblx0ICogKG1haW5seSBmb3IgaW50ZXJuYWwgdXNlKS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbE9iamVjdCA9IChlbGVtZW50KSA9PiB7XG5cdFx0Ly8gZm9yIGJ1dHRvbnMsIGRpdnMgYW5kIGhlYWRlcnMsIHRoZSBsYWJlbCBpcyBvbiB0aGUgZWxlbWVudCBpdHNlbGZcblx0XHRpZiAoXG5cdFx0XHRlbGVtZW50LnR5cGUgPT09ICdidXR0b24nIHx8XG5cdFx0XHRlbGVtZW50LnR5cGUgPT09ICdzdWJtaXQnIHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTERpdkVsZW1lbnQgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSGVhZGluZ0VsZW1lbnRcblx0XHQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0Ly8gZm9yIGZpZWxkc2V0cywgdGhlIGxhYmVsIGlzIHRoZSBjaGlsZCA8bGVnZW5kPiBlbGVtZW50XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZpZWxkU2V0RWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignbGVnZW5kJyk7XG5cdFx0XHQvLyBmb3IgdGV4dGFyZWFzLCB0aGUgbGFiZWwgaXMgdGhlIHNpYmxpbmcgPGg1PiBlbGVtZW50XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdoNScpO1xuXHRcdH1cblx0XHQvLyBmb3Igb3RoZXJzLCB0aGUgbGFiZWwgaXMgdGhlIHNpYmxpbmcgPGxhYmVsPiBlbGVtZW50XG5cdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuXHR9O1xuXHQvKipcblx0ICogR2V0cyB0aGUgbGFiZWwgdGV4dCBvZiB0aGUgZWxlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudCkgPT4ge1xuXHRcdGNvbnN0IGxhYmVsRWxlbWVudCA9IE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWxPYmplY3QoZWxlbWVudCk7XG5cdFx0aWYgKCFsYWJlbEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbGFiZWxFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG5cdH07XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBsYWJlbCBvZiB0aGUgZWxlbWVudCB0byB0aGUgZ2l2ZW4gdGV4dC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsVGV4dFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBzdWNjZWVkZWQsIGZhbHNlIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRMYWJlbCA9IChlbGVtZW50LCBsYWJlbFRleHQpID0+IHtcblx0XHRjb25zdCBsYWJlbEVsZW1lbnQgPSBNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsT2JqZWN0KGVsZW1lbnQpO1xuXHRcdGlmICghbGFiZWxFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGxhYmVsRWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXHQvKipcblx0ICogU3RvcmVzIHRoZSBlbGVtZW50J3MgY3VycmVudCBsYWJlbCwgYW5kIHRlbXBvcmFyaWx5IHNldHMgdGhlIGxhYmVsIHRvIHRoZSBnaXZlbiB0ZXh0LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGVtcG9yYXJ5TGFiZWxUZXh0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgc3VjY2VlZGVkLCBgZmFsc2VgIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLm92ZXJyaWRlRWxlbWVudExhYmVsID0gKGVsZW1lbnQsIHRlbXBvcmFyeUxhYmVsVGV4dCkgPT4ge1xuXHRcdGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnKSkge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnLCBNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsKGVsZW1lbnQpKTtcblx0XHR9XG5cdFx0cmV0dXJuIE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50TGFiZWwoZWxlbWVudCwgdGVtcG9yYXJ5TGFiZWxUZXh0KTtcblx0fTtcblx0LyoqXG5cdCAqIFJlc3RvcmVzIHRoZSBsYWJlbCBzdG9yZWQgYnkgb3ZlcnJpZGVFbGVtZW50TGFiZWwuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHN1Y2NlZWRlZCwgZmFsc2UgaWYgdGhlIGxhYmVsIGVsZW1lbnQgaXMgdW5hdmFpbGFibGUuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ucmVzZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudCkgPT4ge1xuXHRcdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcpKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRMYWJlbChlbGVtZW50LCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcpKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdC8qKlxuXHQgKiBTaG93cyBvciBoaWRlcyBhIGZvcm0gZWxlbWVudCBwbHVzIGl0cyBsYWJlbCBhbmQgdG9vbHRpcC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxqUXVlcnl8c3RyaW5nKX0gZWxlbWVudCAtIEhUTUwvalF1ZXJ5IGVsZW1lbnQsIG9yIGpRdWVyeSBzZWxlY3RvciBzdHJpbmcuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Zpc2liaWxpdHldIC0gU2tpcCB0aGlzIHRvIHRvZ2dsZSB2aXNpYmlsaXR5LlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRWaXNpYmlsaXR5ID0gKGVsZW1lbnQsIHZpc2liaWxpdHkpID0+IHtcblx0XHQkKGVsZW1lbnQpLnRvZ2dsZSh2aXNpYmlsaXR5KTtcblx0fTtcblx0LyoqXG5cdCAqIFNob3dzIG9yIGhpZGVzIHRoZSBxdWVzdGlvbiBtYXJrIGljb24gKHdoaWNoIGRpc3BsYXlzIHRoZSB0b29sdGlwKSBuZXh0IHRvIGEgZm9ybSBlbGVtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fGpRdWVyeSl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtib29sZWFufSBbdmlzaWJpbGl0eV0gLSBTa2lwIHRoaXMgdG8gdG9nZ2xlIHZpc2liaWxpdHkuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uc2V0RWxlbWVudFRvb2x0aXBWaXNpYmlsaXR5ID0gKGVsZW1lbnQsIHZpc2liaWxpdHkpID0+IHtcblx0XHQkKE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50Q29udGFpbmVyKGVsZW1lbnQpKS5maW5kKCcubW9yZWJpdHMtdG9vbHRpcEJ1dHRvbicpLnRvZ2dsZSh2aXNpYmlsaXR5KTtcblx0fTtcblx0LyoqXG5cdCAqIEBleHRlcm5hbCBIVE1MRm9ybUVsZW1lbnRcblx0ICovXG5cdC8qKlxuXHQgKiBHZXQgY2hlY2tlZCBpdGVtcyBpbiB0aGUgZm9ybS5cblx0ICpcblx0ICogQGZ1bmN0aW9uIGV4dGVybmFsOkhUTUxGb3JtRWxlbWVudC5nZXRDaGVja2VkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gRmluZCBjaGVja2VkIHByb3BlcnR5IG9mIGVsZW1lbnRzIChpLmUuIGEgY2hlY2tib3hcblx0ICogb3IgYSByYWRpb2J1dHRvbikgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgb3Igc2VsZWN0IG9wdGlvbnMgdGhhdCBoYXZlIHNlbGVjdGVkXG5cdCAqIHNldCB0byB0cnVlIChkb24ndCB0cnkgdG8gbWl4IHNlbGVjdHMgd2l0aCByYWRpby9jaGVja2JveGVzKS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAtIE9wdGlvbmFsbHkgc3BlY2lmeSBlaXRoZXIgcmFkaW8gb3IgY2hlY2tib3ggKGZvclxuXHQgKiB0aGUgZXZlbnQgdGhhdCBib3RoIGNoZWNrYm94ZXMgYW5kIHJhZGlvYnV0dG9ucyBoYXZlIHRoZSBzYW1lIG5hbWUpLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nW119IC0gQ29udGFpbnMgdGhlIHZhbHVlcyBvZiBlbGVtZW50cyB3aXRoIHRoZSBnaXZlbiBuYW1lXG5cdCAqIGNoZWNrZWQgcHJvcGVydHkgc2V0IHRvIHRydWUuXG5cdCAqL1xuXHRIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmdldENoZWNrZWQgPSBmdW5jdGlvbiAobmFtZSwgdHlwZSkge1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50c1tuYW1lXTtcblx0XHRpZiAoIWVsZW1lbnRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGNvbnN0IHJldHVybkFycmF5ID0gW107XG5cdFx0bGV0IGk7XG5cdFx0aWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IHtvcHRpb25zfSA9IGVsZW1lbnRzO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKG9wdGlvbnNbaV0uc2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRpZiAob3B0aW9uc1tpXS52YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBvcHRpb25zW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IG9wdGlvbnNbaV0udmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcblx0XHRcdGlmICh0eXBlICYmIGVsZW1lbnRzLnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fSBlbHNlIGlmIChlbGVtZW50cy5jaGVja2VkKSB7XG5cdFx0XHRcdHJldHVybiBbZWxlbWVudHMudmFsdWVdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKGVsZW1lbnRzW2ldLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50c1tpXS50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnRzW2ldLnZhbHVlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdH07XG5cdC8qKlxuXHQgKiBEb2VzIHRoZSBzYW1lIGFzIHtAbGluayBIVE1MRm9ybUVsZW1lbnQuZ2V0Q2hlY2tlZHxnZXRDaGVja2VkfSwgYnV0IHdpdGggdW5jaGVja2VkIGVsZW1lbnRzLlxuXHQgKlxuXHQgKiBAZnVuY3Rpb24gZXh0ZXJuYWw6SFRNTEZvcm1FbGVtZW50LmdldFVuY2hlY2tlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpbmQgY2hlY2tlZCBwcm9wZXJ0eSBvZiBlbGVtZW50cyAoaS5lLiBhIGNoZWNrYm94XG5cdCAqIG9yIGEgcmFkaW9idXR0b24pIHdpdGggdGhlIGdpdmVuIG5hbWUsIG9yIHNlbGVjdCBvcHRpb25zIHRoYXQgaGF2ZSBzZWxlY3RlZFxuXHQgKiBzZXQgdG8gdHJ1ZSAoZG9uJ3QgdHJ5IHRvIG1peCBzZWxlY3RzIHdpdGggcmFkaW8vY2hlY2tib3hlcykuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gLSBPcHRpb25hbGx5IHNwZWNpZnkgZWl0aGVyIHJhZGlvIG9yIGNoZWNrYm94IChmb3Jcblx0ICogdGhlIGV2ZW50IHRoYXQgYm90aCBjaGVja2JveGVzIGFuZCByYWRpb2J1dHRvbnMgaGF2ZSB0aGUgc2FtZSBuYW1lKS5cblx0ICogQHJldHVybnMge3N0cmluZ1tdfSAtIENvbnRhaW5zIHRoZSB2YWx1ZXMgb2YgZWxlbWVudHMgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuXHQgKiBjaGVja2VkIHByb3BlcnR5IHNldCB0byB0cnVlLlxuXHQgKi9cblx0SFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5nZXRVbmNoZWNrZWQgPSBmdW5jdGlvbiAobmFtZSwgdHlwZSkge1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50c1tuYW1lXTtcblx0XHRpZiAoIWVsZW1lbnRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGNvbnN0IHJldHVybkFycmF5ID0gW107XG5cdFx0bGV0IGk7XG5cdFx0aWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IHtvcHRpb25zfSA9IGVsZW1lbnRzO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKCFvcHRpb25zW2ldLnNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gb3B0aW9uc1tpXS52YWx1ZXM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBvcHRpb25zW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG5cdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50cy50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdH0gZWxzZSBpZiAoIWVsZW1lbnRzLmNoZWNrZWQpIHtcblx0XHRcdFx0cmV0dXJuIFtlbGVtZW50cy52YWx1ZV07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoIWVsZW1lbnRzW2ldLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50c1tpXS50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnRzW2ldLnZhbHVlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdH07XG5cdC8qKlxuXHQgKiBVdGlsaXRpZXMgdG8gaGVscCBwcm9jZXNzIElQIGFkZHJlc3Nlcy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5pcFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmlwID0ge1xuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGFuIElQdjYgYWRkcmVzcyB0byB0aGUgY2Fub25pY2FsIGZvcm0gc3RvcmVkIGFuZCB1c2VkIGJ5IE1lZGlhV2lraS5cblx0XHQgKiBKYXZhU2NyaXB0IHRyYW5zbGF0aW9uIG9mIHRoZSB7QGxpbmsgaHR0cHM6Ly9nZXJyaXQud2lraW1lZGlhLm9yZy9yL3BsdWdpbnMvZ2l0aWxlcy9tZWRpYXdpa2kvY29yZS8rLzhlYjZhYzNlODRlYTMzMTJkMzkxY2E5NmMxMmM0OWUzYWQwNzUzYmIvaW5jbHVkZXMvdXRpbHMvSVAucGhwIzEzMXxgSVA6OnNhbml0aXplSVAoKWB9XG5cdFx0ICogZnVuY3Rpb24gZnJvbSB0aGUgSVBVdGlscyBsaWJyYXJ5LiAgQWRkcmVzc2VzIGFyZSB2ZXJib3NlLCB1cHBlcmNhc2UsXG5cdFx0ICogbm9ybWFsaXplZCwgYW5kIGV4cGFuZGVkIHRvIDggd29yZHMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWRkcmVzcyAtIFRoZSBJUHY2IGFkZHJlc3MsIHdpdGggb3Igd2l0aG91dCBDSURSLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0c2FuaXRpemVJUHY2OiAoYWRkcmVzcykgPT4ge1xuXHRcdFx0YWRkcmVzcyA9IGFkZHJlc3MudHJpbSgpO1xuXHRcdFx0aWYgKGFkZHJlc3MgPT09ICcnKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFtdy51dGlsLmlzSVB2NkFkZHJlc3MoYWRkcmVzcywgdHJ1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIGFkZHJlc3M7IC8vIG5vdGhpbmcgZWxzZSB0byBkbyBmb3IgSVB2NCBhZGRyZXNzZXMgb3IgaW52YWxpZCBvbmVzXG5cdFx0XHR9XG5cdFx0XHQvLyBSZW1vdmUgYW55IHdoaXRlc3BhY2VzLCBjb252ZXJ0IHRvIHVwcGVyIGNhc2Vcblx0XHRcdGFkZHJlc3MgPSBhZGRyZXNzLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHQvLyBFeHBhbmQgemVybyBhYmJyZXZpYXRpb25zXG5cdFx0XHRjb25zdCBhYmJyZXZQb3MgPSBhZGRyZXNzLmluZGV4T2YoJzo6Jyk7XG5cdFx0XHRpZiAoYWJicmV2UG9zID4gLTEpIHtcblx0XHRcdFx0Ly8gV2Uga25vdyB0aGlzIGlzIHZhbGlkIElQdjYuIEZpbmQgdGhlIGxhc3QgaW5kZXggb2YgdGhlXG5cdFx0XHRcdC8vIGFkZHJlc3MgYmVmb3JlIGFueSBDSURSIG51bWJlciAoZS5nLiBcImE6YjpjOjovMjRcIikuXG5cdFx0XHRcdGNvbnN0IENJRFJTdGFydCA9IGFkZHJlc3MuaW5kZXhPZignLycpO1xuXHRcdFx0XHRjb25zdCBhZGRyZXNzRW5kID0gQ0lEUlN0YXJ0ID09PSAtMSA/IGFkZHJlc3MubGVuZ3RoIC0gMSA6IENJRFJTdGFydCAtIDE7XG5cdFx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGF0IHRoZSBiZWdpbm5pbmcuLi5cblx0XHRcdFx0bGV0IHJlcGVhdDtcblx0XHRcdFx0bGV0IGV4dHJhO1xuXHRcdFx0XHRsZXQgcGFkO1xuXHRcdFx0XHRpZiAoYWJicmV2UG9zID09PSAwKSB7XG5cdFx0XHRcdFx0cmVwZWF0ID0gJzA6Jztcblx0XHRcdFx0XHRleHRyYSA9IGFkZHJlc3MgPT09ICc6OicgPyAnMCcgOiAnJzsgLy8gZm9yIHRoZSBhZGRyZXNzICc6Oidcblx0XHRcdFx0XHRwYWQgPSA5OyAvLyA3KzIgKGR1ZSB0byAnOjonKVxuXHRcdFx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGF0IHRoZSBlbmQuLi5cblx0XHRcdFx0fSBlbHNlIGlmIChhYmJyZXZQb3MgPT09IGFkZHJlc3NFbmQgLSAxKSB7XG5cdFx0XHRcdFx0cmVwZWF0ID0gJzowJztcblx0XHRcdFx0XHRleHRyYSA9ICcnO1xuXHRcdFx0XHRcdHBhZCA9IDk7IC8vIDcrMiAoZHVlIHRvICc6OicpXG5cdFx0XHRcdFx0Ly8gSWYgdGhlICc6OicgaXMgaW4gdGhlIG1pZGRsZS4uLlxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlcGVhdCA9ICc6MCc7XG5cdFx0XHRcdFx0ZXh0cmEgPSAnOic7XG5cdFx0XHRcdFx0cGFkID0gODsgLy8gNisyIChkdWUgdG8gJzo6Jylcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCByZXBsYWNlbWVudCA9IHJlcGVhdDtcblx0XHRcdFx0cGFkIC09IGFkZHJlc3Muc3BsaXQoJzonKS5sZW5ndGggLSAxO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBhZDsgaSsrKSB7XG5cdFx0XHRcdFx0cmVwbGFjZW1lbnQgKz0gcmVwZWF0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlcGxhY2VtZW50ICs9IGV4dHJhO1xuXHRcdFx0XHRhZGRyZXNzID0gYWRkcmVzcy5yZXBsYWNlKCc6OicsIHJlcGxhY2VtZW50KTtcblx0XHRcdH1cblx0XHRcdC8vIFJlbW92ZSBsZWFkaW5nIHplcm9zIGZyb20gZWFjaCBibG9jIGFzIG5lZWRlZFxuXHRcdFx0cmV0dXJuIGFkZHJlc3MucmVwbGFjZSgvKF58OikwKyhbMC05QS1GYS1mXXsxLDR9KS9nLCAnJDEkMicpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lIGlmIHRoZSBnaXZlbiBJUCBhZGRyZXNzIGlzIGEgcmFuZ2UuICBKdXN0IGNvbmpvaW5zXG5cdFx0ICogYG13LnV0aWwuaXNJUEFkZHJlc3NgIHdpdGggYW5kIHdpdGhvdXQgdGhlIGBhbGxvd0Jsb2NrYCBvcHRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaXBcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGlmIGdpdmVuIGEgdmFsaWQgSVAgYWRkcmVzcyByYW5nZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHRcdCAqL1xuXHRcdGlzUmFuZ2U6IChpcCkgPT4ge1xuXHRcdFx0cmV0dXJuIG13LnV0aWwuaXNJUEFkZHJlc3MoaXAsIHRydWUpICYmICFtdy51dGlsLmlzSVBBZGRyZXNzKGlwKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENoZWNrIHRoYXQgYW4gSVAgcmFuZ2UgaXMgd2l0aGluIHRoZSBDSURSIGxpbWl0cy4gIE1vc3QgbGlrZWx5IHRvIGJlIHVzZWZ1bFxuXHRcdCAqIGluIGNvbmp1bmN0aW9uIHdpdGggYHdnUmVsZXZhbnRVc2VyTmFtZWAuICBDSURSIGxpbWl0cyBhcmUgaGFyZGNvZGVkIGFzIC8xNlxuXHRcdCAqIGZvciBJUHY0IGFuZCAvMzIgZm9yIElQdjYuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaXBcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGZvciB2YWxpZCByYW5nZXMgd2l0aGluIHRoZSBDSURSIGxpbWl0cyxcblx0XHQgKiBvdGhlcndpc2UgZmFsc2UgKHJhbmdlcyBvdXRzaWRlIHRoZSBsaW1pdCwgc2luZ2xlIElQcywgbm9uLUlQcykuXG5cdFx0ICovXG5cdFx0dmFsaWRDSURSOiAoaXApID0+IHtcblx0XHRcdGlmIChNb3JlYml0cy5pcC5pc1JhbmdlKGlwKSkge1xuXHRcdFx0XHRjb25zdCBzdWJuZXQgPSBOdW1iZXIucGFyc2VJbnQoaXAubWF0Y2goL1xcLyhcXGR7MSwzfSkkLylbMV0sIDEwKTtcblx0XHRcdFx0aWYgKHN1Ym5ldCkge1xuXHRcdFx0XHRcdC8vIFNob3VsZCBiZSByZWR1bmRhbnRcblx0XHRcdFx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKGlwLCB0cnVlKSkge1xuXHRcdFx0XHRcdFx0aWYgKHN1Ym5ldCA+PSAzMikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHN1Ym5ldCA+PSAxNikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHZXQgdGhlIC82NCBzdWJuZXQgZm9yIGFuIElQdjYgYWRkcmVzcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpcHY2IC0gVGhlIElQdjYgYWRkcmVzcywgd2l0aCBvciB3aXRob3V0IGEgc3VibmV0LlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufHN0cmluZ30gLSBGYWxzZSBpZiBub3QgSVB2NiBvciBiaWdnZXIgdGhhbiBhIDY0LFxuXHRcdCAqIG90aGVyd2lzZSB0aGUgKHNhbml0aXplZCkgLzY0IGFkZHJlc3MuXG5cdFx0ICovXG5cdFx0Z2V0NjQ6IChpcHY2KSA9PiB7XG5cdFx0XHRpZiAoIWlwdjYgfHwgIW13LnV0aWwuaXNJUHY2QWRkcmVzcyhpcHY2LCB0cnVlKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzdWJuZXRNYXRjaCA9IGlwdjYubWF0Y2goL1xcLyhcXGR7MSwzfSkkLyk7XG5cdFx0XHRpZiAoc3VibmV0TWF0Y2ggJiYgTnVtYmVyLnBhcnNlSW50KHN1Ym5ldE1hdGNoWzFdLCAxMCkgPCA2NCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpcHY2ID0gTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2KGlwdjYpO1xuXHRcdFx0Y29uc3QgaXBSZWdleCA9IC9eKCg/OlswLTlBLUZdezEsNH06KXs0fSkoPzpbMC05QS1GXXsxLDR9Oil7M31bMC05QS1GXXsxLDR9KD86XFwvXFxkezEsM30pPyQvO1xuXHRcdFx0cmV0dXJuIGlwdjYucmVwbGFjZShpcFJlZ2V4LCAnJDEnLmNvbmNhdCgnMDowOjA6MC82NCcpKTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogSGVscGVyIGZ1bmN0aW9ucyB0byBtYW5pcHVsYXRlIHN0cmluZ3MuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuc3RyaW5nXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMuc3RyaW5nID0ge1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRvVXBwZXJDYXNlRmlyc3RDaGFyOiAoc3RyKSA9PiB7XG5cdFx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0XHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRvTG93ZXJDYXNlRmlyc3RDaGFyOiAoc3RyKSA9PiB7XG5cdFx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0XHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9Mb3dlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdpdmVzIGFuIGFycmF5IG9mIHN1YnN0cmluZ3Mgb2YgYHN0cmAgLSBzdGFydGluZyB3aXRoIGBzdGFydGAgYW5kXG5cdFx0ICogZW5kaW5nIHdpdGggYGVuZGAgLSB3aGljaCBpcyBub3QgaW4gYHNraXBsaXN0YC4gIEludGVuZGVkIGZvciB1c2Vcblx0XHQgKiBvbiB3aWtpdGV4dCB3aXRoIHRlbXBsYXRlcyBvciBsaW5rcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhcnRcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZW5kXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nW118c3RyaW5nKX0gW3NraXBsaXN0XVxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmdbXX1cblx0XHQgKiBAdGhyb3dzIElmIHRoZSBgc3RhcnRgIGFuZCBgZW5kYCBzdHJpbmdzIGFyZW4ndCBvZiB0aGUgc2FtZSBsZW5ndGguXG5cdFx0ICogQHRocm93cyBJZiBgc2tpcGxpc3RgIGlzbid0IGFuIGFycmF5IG9yIHN0cmluZ1xuXHRcdCAqL1xuXHRcdHNwbGl0V2VpZ2h0ZWRCeUtleXM6IChzdHIsIHN0YXJ0LCBlbmQsIHNraXBsaXN0KSA9PiB7XG5cdFx0XHRpZiAoc3RhcnQubGVuZ3RoICE9PSBlbmQubGVuZ3RoKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignc3RhcnQgbWFya2VyIGFuZCBlbmQgbWFya2VyIG11c3QgYmUgb2YgdGhlIHNhbWUgbGVuZ3RoJyk7XG5cdFx0XHR9XG5cdFx0XHRsZXQgbGV2ZWwgPSAwO1xuXHRcdFx0bGV0IGluaXRpYWwgPSBudWxsO1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gW107XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoc2tpcGxpc3QpKSB7XG5cdFx0XHRcdGlmIChza2lwbGlzdCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0c2tpcGxpc3QgPSBbXTtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygc2tpcGxpc3QgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0c2tpcGxpc3QgPSBbc2tpcGxpc3RdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ25vbi1hcHBsaWNhYmxlIHNraXBsaXN0IHBhcmFtZXRlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygc2tpcGxpc3QpIHtcblx0XHRcdFx0XHRpZiAoc3RyLnNsaWNlKGksIGkgKyBlbGVtZW50Lmxlbmd0aCkgPT09IGVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdGkgKz0gZWxlbWVudC5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdHIuc2xpY2UoaSwgaSArIHN0YXJ0Lmxlbmd0aCkgPT09IHN0YXJ0KSB7XG5cdFx0XHRcdFx0aWYgKGluaXRpYWwgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGluaXRpYWwgPSBpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQrK2xldmVsO1xuXHRcdFx0XHRcdGkgKz0gc3RhcnQubGVuZ3RoIC0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChzdHIuc2xpY2UoaSwgaSArIGVuZC5sZW5ndGgpID09PSBlbmQpIHtcblx0XHRcdFx0XHQtLWxldmVsO1xuXHRcdFx0XHRcdGkgKz0gZW5kLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFsZXZlbCAmJiBpbml0aWFsICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gc3RyLnNsaWNlKGluaXRpYWwsIGkgKyAxKTtcblx0XHRcdFx0XHRpbml0aWFsID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEZvcm1hdHMgZnJlZWZvcm0gXCJyZWFzb25cIiAoZnJvbSBhIHRleHRhcmVhKSBmb3IgZGVsZXRpb24vb3RoZXJcblx0XHQgKiB0ZW1wbGF0ZXMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgc3Vic3RpdHV0ZWQsIChlLmcuIFBST0QsIFhGRCwgUlBQKS5cblx0XHQgKiBIYW5kbGVzIGB8YCBvdXRzaWRlIGEgbm93aWtpIHRhZy5cblx0XHQgKiBPcHRpb25hbGx5LCBhbHNvIGFkZHMgYSBzaWduYXR1cmUgaWYgbm90IHByZXNlbnQgYWxyZWFkeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthZGRTaWddXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXRSZWFzb25UZXh0OiAoc3RyLCBhZGRTaWcpID0+IHtcblx0XHRcdGxldCByZWFzb24gPSAoc3RyIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKHJlYXNvbik7XG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJzxubycuY29uY2F0KCd3aWtpJywgJz4nKSwgJzwvbm8nLmNvbmNhdCgnd2lraScsICc+JykpO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZSgvXFx8L2csICd7eycuY29uY2F0KCdzdWJzdDonLCAnIX19JykpO1xuXHRcdFx0cmVhc29uID0gdW5iaW5kZXIucmViaW5kKCk7XG5cdFx0XHRpZiAoYWRkU2lnKSB7XG5cdFx0XHRcdGNvbnN0IHNpZyA9ICd+ficuY29uY2F0KCd+ficpO1xuXHRcdFx0XHRjb25zdCBzaWdJbmRleCA9IHJlYXNvbi5sYXN0SW5kZXhPZihzaWcpO1xuXHRcdFx0XHRpZiAoc2lnSW5kZXggPT09IC0xIHx8IHNpZ0luZGV4ICE9PSByZWFzb24ubGVuZ3RoIC0gc2lnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJlYXNvbiArPSBgICR7c2lnfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZWFzb24udHJpbSgpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRm9ybWF0cyBhIFwicmVhc29uXCIgKGZyb20gYSB0ZXh0YXJlYSkgZm9yIGluY2x1c2lvbiBpbiBhIHVzZXJzcGFjZVxuXHRcdCAqIGxvZy4gIFJlcGxhY2VzIG5ld2xpbmVzIHdpdGgge3tQYn19LCBhbmQgYWRkcyBhbiBleHRyYSBgI2AgYmVmb3JlXG5cdFx0ICogbGlzdCBpdGVtcyBmb3IgcHJvcGVyIGZvcm1hdHRpbmcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXRSZWFzb25Gb3JMb2c6IChzdHIpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHN0clxuXHRcdFx0XHRcdC8vIGhhbmRsZSBsaW5lIGJyZWFrcywgd2hpY2ggb3RoZXJ3aXNlIGJyZWFrIG51bWJlcmluZ1xuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXG4rL2csICd7e3BifX0nKVxuXHRcdFx0XHRcdC8vIHB1dCBhbiBleHRyYSAjIGluIGZyb250IGJlZm9yZSBidWxsZXRlZCBvciBudW1iZXJlZCBsaXN0IGl0ZW1zXG5cdFx0XHRcdFx0LnJlcGxhY2UoL14oIyspL2dtLCAnIyQxJylcblx0XHRcdFx0XHQucmVwbGFjZSgvXihcXCorKS9nbSwgJyMkMScpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogTGlrZSBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKClgLCBidXQgZXNjYXBlcyBhbnkgZG9sbGFyIHNpZ25zIGluXG5cdFx0ICogdGhlIHJlcGxhY2VtZW50IHN0cmluZy4gIFVzZWZ1bCB3aGVuIHRoZSB0aGUgcmVwbGFjZW1lbnQgc3RyaW5nIGlzXG5cdFx0ICogYXJiaXRyYXJ5LCBzdWNoIGFzIGEgdXNlcm5hbWUgb3IgZnJlZWZvcm0gdXNlciBpbnB1dCwgYW5kIGNvdWxkXG5cdFx0ICogY29udGFpbiBkb2xsYXIgc2lnbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGV4dCBpbiB3aGljaCB0byByZXBsYWNlLlxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSBwYXR0ZXJuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VtZW50XG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRzYWZlUmVwbGFjZTogKHN0cmluZywgcGF0dGVybiwgcmVwbGFjZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZShwYXR0ZXJuLCByZXBsYWNlbWVudC5yZXBsYWNlKC9cXCQvZywgJyQkJCQnKSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmUgaWYgdGhlIHVzZXItcHJvdmlkZWQgZXhwaXJhdGlvbiB3aWxsIGJlIGNvbnNpZGVyZWQgYW5cblx0XHQgKiBpbmZpbml0ZS1sZW5ndGggYnkgTVcuXG5cdFx0ICpcblx0XHQgKiBAc2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvVDY4NjQ2fVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGV4cGlyeVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGlzSW5maW5pdHk6IChleHBpcnkpID0+IHtcblx0XHRcdHJldHVybiBbJ2luZGVmaW5pdGUnLCAnaW5maW5pdHknLCAnaW5maW5pdGUnLCAnbmV2ZXInXS5pbmNsdWRlcyhleHBpcnkpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRXNjYXBlcyBhIHN0cmluZyB0byBiZSB1c2VkIGluIGEgUmVnRXhwLCByZXBsYWNpbmcgc3BhY2VzIGFuZFxuXHRcdCAqIHVuZGVyc2NvcmVzIHdpdGggYFtfIF1gIGFzIHRoZXkgYXJlIG9mdGVuIGVxdWl2YWxlbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFN0cmluZyB0byBiZSBlc2NhcGVkLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGhlIGVzY2FwZWQgdGV4dC5cblx0XHQgKi9cblx0XHRlc2NhcGVSZWdFeHA6ICh0ZXh0KSA9PiB7XG5cdFx0XHRyZXR1cm4gbXcudXRpbC5lc2NhcGVSZWdFeHAodGV4dCkucmVwbGFjZSgvIHxfL2csICdbXyBdJyk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBmb3JtYXRUaW1lXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IHRpbWUgVGhlIHN0cmluZyB0byBmb3JhbXRcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZvcm1hdFRpbWU6ICh0aW1lKSA9PiB7XG5cdFx0XHRsZXQgbTtcblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKnNlYyhvbmQpP3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGAke21bMV1956eSYDtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKm1pbih1dGUpP3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGAke21bMV195YiGYDtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKmhvdXJzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBtWzFdICsgd2luZG93LndnVUxTKCflsI/ml7YnLCAn5bCP5pmCJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccypkYXlzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBgJHttWzFdfeWkqWA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyp3ZWVrcz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbVsxXSArIHdpbmRvdy53Z1VMUygn5ZGoJywgJ+mAsScpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqbW9udGhzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBtWzFdICsgd2luZG93LndnVUxTKCfkuKrmnIgnLCAn5YCL5pyIJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyp5ZWFycz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3lubRgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKE1vcmViaXRzLnN0cmluZy5pc0luZmluaXR5KHRpbWUudHJpbSgpKSkge1xuXHRcdFx0XHRyZXR1cm4gd2luZG93LndnVUxTKCfml6DpmZDmnJ8nLCAn54Sh6ZmQ5pyfJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGltZTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEFwcGVuZCBwdW5jdHVhdGlvbiB0byBhIHN0cmluZyB3aGVuIGl0J3MgbWlzc2luZ1xuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwdW5jdHVhdGlvblxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0YXBwZW5kUHVuY3R1YXRpb246IChzdHIsIHB1bmN0dWF0aW9uKSA9PiB7XG5cdFx0XHRpZiAocHVuY3R1YXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRwdW5jdHVhdGlvbiA9ICfjgIInO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHN0ci5zZWFyY2goL1suPyE744CC77yf77yB77ybXSQvKSA9PT0gLTEpIHtcblx0XHRcdFx0c3RyICs9IHB1bmN0dWF0aW9uO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogSGVscGVyIGZ1bmN0aW9ucyB0byBtYW5pcHVsYXRlIGFycmF5cy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5hcnJheVxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmFycmF5ID0ge1xuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBkdXBsaWNhdGVkIGl0ZW1zIGZyb20gYW4gYXJyYXkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCBkdXBsaWNhdGVzIHJlbW92ZWQuXG5cdFx0ICogQHRocm93cyBXaGVuIHByb3ZpZGVkIGEgbm9uLWFycmF5LlxuXHRcdCAqL1xuXHRcdHVuaXE6IChhcnIpID0+IHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkudW5pcScpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGFyci5maWx0ZXIoKGl0ZW0sIGlkeCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YoaXRlbSkgPT09IGlkeDtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIG5vbi1kdXBsaWNhdGVkIGl0ZW1zIGZyb20gYW4gYXJyYXkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgZWFjaCB2YWx1ZVxuXHRcdCAqIHJlbW92ZWQ7IHN1YnNlcXVlbnQgaW5zdGFuY2VzIG9mIHRob3NlIHZhbHVlcyAoZHVwbGljYXRlcykgcmVtYWluLlxuXHRcdCAqIEB0aHJvd3MgV2hlbiBwcm92aWRlZCBhIG5vbi1hcnJheS5cblx0XHQgKi9cblx0XHRkdXBzOiAoYXJyKSA9PiB7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG5vbi1hcnJheSBvYmplY3QgcGFzc2VkIHRvIE1vcmViaXRzLmFycmF5LmR1cHMnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpZHgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKGl0ZW0pICE9PSBpZHg7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEJyZWFrIHVwIGFuIGFycmF5IGludG8gc21hbGxlciBhcnJheXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSAtIFNpemUgb2YgZWFjaCBjaHVuayAoZXhjZXB0IHRoZSBsYXN0LCB3aGljaCBjb3VsZCBiZSBkaWZmZXJlbnQpLlxuXHRcdCAqIEByZXR1cm5zIHtBcnJheVtdfSBBbiBhcnJheSBjb250YWluaW5nIHRoZSBzbWFsbGVyLCBjaHVua2VkIGFycmF5cy5cblx0XHQgKiBAdGhyb3dzIFdoZW4gcHJvdmlkZWQgYSBub24tYXJyYXkuXG5cdFx0ICovXG5cdFx0Y2h1bms6IChhcnIsIHNpemUpID0+IHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkuY2h1bmsnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicgfHwgc2l6ZSA8PSAwKSB7XG5cdFx0XHRcdC8vIHByZXR0eSBpbXBvc3NpYmxlIHRvIGRvIGFueXRoaW5nIDopXG5cdFx0XHRcdHJldHVybiBbYXJyXTsgLy8gd2UgcmV0dXJuIGFuIGFycmF5IGNvbnNpc3Rpbmcgb2YgdGhpcyBhcnJheS5cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbnVtQ2h1bmtzID0gTWF0aC5jZWlsKGFyci5sZW5ndGggLyBzaXplKTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20oe1xuXHRcdFx0XHRsZW5ndGg6IG51bUNodW5rcyxcblx0XHRcdH0pO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBudW1DaHVua3M7IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBhcnIuc2xpY2UoaSAqIHNpemUsIChpICsgMSkgKiBzaXplKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFV0aWxpdGllcyB0byBlbmhhbmNlIHNlbGVjdDIgbWVudXMuIFNlZSB0d2lua2xld2FybiwgdHdpbmtsZWJsb2NrXG5cdCAqIGZvciBzYW1wbGUgdXNhZ2VzLlxuXHQgKlxuXHQgKiBAc2VlIHtAbGluayBodHRwczovL3NlbGVjdDIub3JnL31cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5zZWxlY3QyXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAcmVxdWlyZXMganF1ZXJ5LnNlbGVjdDJcblx0ICovXG5cdE1vcmViaXRzLnNlbGVjdDIgPSB7XG5cdFx0bWF0Y2hlcnM6IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3VzdG9tIG1hdGNoZXIgaW4gd2hpY2ggaWYgdGhlIG9wdGdyb3VwIG5hbWUgbWF0Y2hlcywgYWxsIG9wdGlvbnMgaW4gdGhhdFxuXHRcdFx0ICogZ3JvdXAgYXJlIHNob3duLCBsaWtlIGluIGpxdWVyeS5jaG9zZW4uXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0XHRcdCAqIEBwYXJhbSB7Kn0gZGF0YVxuXHRcdFx0ICovXG5cdFx0XHRvcHRncm91cEZ1bGw6IChwYXJhbXMsIGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxNYXRjaGVyID0gJC5mbi5zZWxlY3QyLmRlZmF1bHRzLmRlZmF1bHRzLm1hdGNoZXI7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTWF0Y2hlcihwYXJhbXMsIGRhdGEpO1xuXHRcdFx0XHRpZiAocmVzdWx0ICYmIHBhcmFtcy50ZXJtICYmIGRhdGEudGV4dC50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHBhcmFtcy50ZXJtLnRvVXBwZXJDYXNlKCkpKSB7XG5cdFx0XHRcdFx0cmVzdWx0LmNoaWxkcmVuID0gZGF0YS5jaGlsZHJlbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3VzdG9tIG1hdGNoZXIgdGhhdCBtYXRjaGVzIGZyb20gdGhlIGJlZ2lubmluZyBvZiB3b3JkcyBvbmx5LlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdFx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHRcdCAqL1xuXHRcdFx0d29yZEJlZ2lubmluZzogKHBhcmFtcywgZGF0YSkgPT4ge1xuXHRcdFx0XHRjb25zdCBvcmlnaW5hbE1hdGNoZXIgPSAkLmZuLnNlbGVjdDIuZGVmYXVsdHMuZGVmYXVsdHMubWF0Y2hlcjtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gb3JpZ2luYWxNYXRjaGVyKHBhcmFtcywgZGF0YSk7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQhcGFyYW1zLnRlcm0gfHxcblx0XHRcdFx0XHQocmVzdWx0ICYmIG5ldyBSZWdFeHAoYFxcXFxiJHttdy51dGlsLmVzY2FwZVJlZ0V4cChwYXJhbXMudGVybSl9YCwgJ2knKS50ZXN0KHJlc3VsdC50ZXh0KSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBVbmRlcmxpbmUgbWF0Y2hlZCBwYXJ0IG9mIG9wdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHQgKi9cblx0XHRoaWdobGlnaHRTZWFyY2hNYXRjaGVzOiAoZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3Qgc2VhcmNoVGVybSA9IE1vcmViaXRzLnNlbGVjdDJTZWFyY2hRdWVyeTtcblx0XHRcdGlmICghc2VhcmNoVGVybSB8fCBkYXRhLmxvYWRpbmcpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEudGV4dDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGlkeCA9IGRhdGEudGV4dC50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpKTtcblx0XHRcdGlmIChpZHggPCAwKSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnRleHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJCgnPHNwYW4+JykuYXBwZW5kKFxuXHRcdFx0XHRkYXRhLnRleHQuc2xpY2UoMCwgaWR4KSxcblx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHQuY3NzKCd0ZXh0LWRlY29yYXRpb24nLCAndW5kZXJsaW5lJylcblx0XHRcdFx0XHQudGV4dChkYXRhLnRleHQuc2xpY2UoaWR4LCBpZHggKyBzZWFyY2hUZXJtLmxlbmd0aCkpLFxuXHRcdFx0XHRkYXRhLnRleHQuc2xpY2UoaWR4ICsgc2VhcmNoVGVybS5sZW5ndGgpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogSW50ZXJjZXB0IHF1ZXJ5IGFzIGl0IGlzIGhhcHBlbmluZywgZm9yIHVzZSBpbiBoaWdobGlnaHRTZWFyY2hNYXRjaGVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0XHQgKi9cblx0XHRxdWVyeUludGVyY2VwdG9yOiAocGFyYW1zKSA9PiB7XG5cdFx0XHRNb3JlYml0cy5zZWxlY3QyU2VhcmNoUXVlcnkgPSBwYXJhbXMgJiYgcGFyYW1zLnRlcm07XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBPcGVuIGRyb3Bkb3duIGFuZCBiZWdpbiBzZWFyY2ggd2hlbiB0aGUgYC5zZWxlY3QyLXNlbGVjdGlvbmAgaGFzXG5cdFx0ICogZm9jdXMgYW5kIGEga2V5IGlzIHByZXNzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2XG5cdFx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3NlbGVjdDIvc2VsZWN0Mi9pc3N1ZXMvMzI3OSNpc3N1ZWNvbW1lbnQtNDQyNTI0MTQ3fVxuXHRcdCAqL1xuXHRcdGF1dG9TdGFydDogKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYud2hpY2ggPCA0OCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgdGFyZ2V0ID0gJChldi50YXJnZXQpLmNsb3Nlc3QoJy5zZWxlY3QyLWNvbnRhaW5lcicpO1xuXHRcdFx0aWYgKCF0YXJnZXQubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRhcmdldCA9IHRhcmdldC5wcmV2KCk7XG5cdFx0XHR0YXJnZXQuc2VsZWN0Mignb3BlbicpO1xuXHRcdFx0Y29uc3Qgc2VhcmNoID0gdGFyZ2V0LmRhdGEoJ3NlbGVjdDInKS5kcm9wZG93bi4kc2VhcmNoIHx8IHRhcmdldC5kYXRhKCdzZWxlY3QyJykuc2VsZWN0aW9uLiRzZWFyY2g7XG5cdFx0XHQvLyBVc2UgRE9NIC5mb2N1cygpIHRvIHdvcmsgYXJvdW5kIGEgalF1ZXJ5IDMuNi4wIHJlZ3Jlc3Npb24gKGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvaXNzdWVzLzU5OTMpXG5cdFx0XHRzZWFyY2hbMF0uZm9jdXMoKTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogVGVtcG9yYXJpbHkgaGlkZSBhIHBhcnQgb2YgYSBzdHJpbmcgd2hpbGUgcHJvY2Vzc2luZyB0aGUgcmVzdCBvZiBpdC5cblx0ICogVXNlZCBieSB7QGxpbmsgTW9yZWJpdHMud2lraXRleHQucGFnZSNjb21tZW50T3V0SW1hZ2V8TW9yZWJpdHMud2lraXRleHQucGFnZS5jb21tZW50T3V0SW1hZ2V9LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgaW5pdGlhbCB0ZXh0IHRvIHByb2Nlc3MuXG5cdCAqIEBleGFtcGxlIGNvbnN0IHUgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIoJ0hlbGxvIHdvcmxkIDwhLS0gd29ybGQgLS0+IHdvcmxkJyk7XG5cdCAqIHUudW5iaW5kKCc8IS0tJywgJy0tPicpOyAvLyB0ZXh0IGluc2lkZSBjb21tZW50IHJlbWFpbnMgaW50YWN0XG5cdCAqIHUuY29udGVudCA9IHUuY29udGVudC5yZXBsYWNlKC93b3JsZC9nLCAnZWFydGgnKTtcblx0ICogdS5yZWJpbmQoKTsgLy8gZ2l2ZXMgJ0hlbGxvIGVhcnRoIDwhLS0gd29ybGQgLS0+IGVhcnRoJ1xuXHQgKi9cblx0TW9yZWJpdHMudW5iaW5kZXIgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdFx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0LyoqIFRoZSB0ZXh0IGJlaW5nIHByb2Nlc3NlZC4gKi9cblx0XHR0aGlzLmNvbnRlbnQgPSBzdHJpbmc7XG5cdFx0dGhpcy5jb3VudGVyID0gMDtcblx0XHR0aGlzLmhpc3RvcnkgPSB7fTtcblx0XHR0aGlzLnByZWZpeCA9IGAlVU5JUTo6JHtNYXRoLnJhbmRvbSgpfTo6YDtcblx0XHR0aGlzLnBvc3RmaXggPSAnOjpVTklRJSc7XG5cdH07XG5cdE1vcmViaXRzLnVuYmluZGVyLnByb3RvdHlwZSA9IHtcblx0XHQvKipcblx0XHQgKiBIaWRlIHRoZSByZWdpb24gZW5jYXBzdWxhdGVkIGJ5IHRoZSBgcHJlZml4YCBhbmQgYHBvc3RmaXhgIGZyb21cblx0XHQgKiBzdHJpbmcgcHJvY2Vzc2luZy4gIGBwcmVmaXhgIGFuZCBgcG9zdGZpeGAgd2lsbCBiZSB1c2VkIGluIGFcblx0XHQgKiBSZWdFeHAsIHNvIGl0ZW1zIHRoYXQgbmVlZCBlc2NhcGluZyBzaG91bGQgYmUgdXNlIGBcXFxcYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcG9zdGZpeFxuXHRcdCAqIEB0aHJvd3MgSWYgZWl0aGVyIGBwcmVmaXhgIG9yIGBwb3N0Zml4YCBpcyBtaXNzaW5nLlxuXHRcdCAqL1xuXHRcdHVuYmluZChwcmVmaXgsIHBvc3RmaXgpIHtcblx0XHRcdGlmICghcHJlZml4IHx8ICFwb3N0Zml4KSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQm90aCBwcmVmaXggYW5kIHBvc3RmaXggbXVzdCBiZSBwcm92aWRlZCcpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGAke3ByZWZpeH0oW1xcXFxzXFxcXFNdKj8pJHtwb3N0Zml4fWAsICdnJyk7XG5cdFx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQucmVwbGFjZShyZSwgTW9yZWJpdHMudW5iaW5kZXIuZ2V0Q2FsbGJhY2sodGhpcykpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVzdG9yZSB0aGUgaGlkZGVuIHBvcnRpb24gb2YgdGhlIGBjb250ZW50YCBzdHJpbmcuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcHJvY2Vzc2VkIG91dHB1dC5cblx0XHQgKi9cblx0XHRyZWJpbmQoKSB7XG5cdFx0XHRsZXQge2NvbnRlbnR9ID0gdGhpcztcblx0XHRcdGZvciAoY29uc3QgY3VycmVudCBpbiB0aGlzLmhpc3RvcnkpIHtcblx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHRoaXMuaGlzdG9yeSwgY3VycmVudCkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKGN1cnJlbnQsIHRoaXMuaGlzdG9yeVtjdXJyZW50XSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9LFxuXHRcdHByZWZpeDogbnVsbCxcblx0XHQvLyAlVU5JUTo6MC41OTU1OTgxNjQ0OTM4MzI0Ojpcblx0XHRwb3N0Zml4OiBudWxsLFxuXHRcdC8vIDo6VU5JUSVcblx0XHRjb250ZW50OiBudWxsLFxuXHRcdC8vIHN0cmluZ1xuXHRcdGNvdW50ZXI6IG51bGwsXG5cdFx0Ly8gMCsrXG5cdFx0aGlzdG9yeTogbnVsbCwgLy8ge31cblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSB7dHlwZW9mIE1vcmViaXRzfSBzZWxmXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy51bmJpbmRlclxuXHQgKi9cblx0TW9yZWJpdHMudW5iaW5kZXIuZ2V0Q2FsbGJhY2sgPSAoc2VsZikgPT4ge1xuXHRcdHJldHVybiAobWF0Y2gpID0+IHtcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBzZWxmLnByZWZpeCArIHNlbGYuY291bnRlciArIHNlbGYucG9zdGZpeDtcblx0XHRcdHNlbGYuaGlzdG9yeVtjdXJyZW50XSA9IG1hdGNoO1xuXHRcdFx0KytzZWxmLmNvdW50ZXI7XG5cdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHR9O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLmRhdGUgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQ3JlYXRlIGEgZGF0ZSBvYmplY3Qgd2l0aCBlbmhhbmNlZCBwcm9jZXNzaW5nIGNhcGFiaWxpdGllcywgYSBsYVxuXHQgKiB7QGxpbmsgaHR0cHM6Ly9tb21lbnRqcy5jb20vfG1vbWVudC5qc30uIE1lZGlhV2lraSB0aW1lc3RhbXAgZm9ybWF0IGlzIGFsc29cblx0ICogYWNjZXB0YWJsZSwgaW4gYWRkaXRpb24gdG8gZXZlcnl0aGluZyB0aGF0IEpTIERhdGUoKSBhY2NlcHRzLlxuXHQgKlxuXHQgKiBAcGFyYW0gey4uLmFueX0gYXJnc1xuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqL1xuXHRNb3JlYml0cy5kYXRlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHQvLyBDaGVjayBNZWRpYVdpa2kgZm9ybWF0c1xuXHRcdC8vIE11c3QgYmUgZmlyc3Qgc2luY2UgZmlyZWZveCBlcnJvbmVvdXNseSBhY2NlcHRzIHRoZSB0aW1lc3RhbXBcblx0XHQvLyBmb3JtYXQsIHNhbnMgdGltZXpvbmUgKFNlZSBhbHNvOiAjOTIxLCAjOTM2LCAjMTE3NCwgIzExODcpLCBhbmQgdGhlXG5cdFx0Ly8gMTQtZGlnaXQgc3RyaW5nIHdpbGwgYmUgaW50ZXJwcmV0ZWQgZGlmZmVyZW50bHkuXG5cdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRjb25zdCBbcGFyYW1dID0gYXJncztcblx0XHRcdGlmICgvXlxcZHsxNH0kLy50ZXN0KHBhcmFtKSkge1xuXHRcdFx0XHQvLyBZWVlZTU1EREhIbW1zc1xuXHRcdFx0XHRjb25zdCBkaWdpdE1hdGNoID0gLyhcXGR7NH0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8uZXhlYyhwYXJhbSk7XG5cdFx0XHRcdGlmIChkaWdpdE1hdGNoKSB7XG5cdFx0XHRcdFx0Ly8gLi4uLi4geWVhciAuLi4gbW9udGggLi4gZGF0ZSAuLi4gaG91ciAuLi4uIG1pbnV0ZSAuLi4uLiBzZWNvbmRcblx0XHRcdFx0XHR0aGlzLl9kID0gbmV3IERhdGUoXG5cdFx0XHRcdFx0XHRSZWZsZWN0LmFwcGx5KERhdGUuVVRDLCBudWxsLCBbXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbMV0sXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbMl0gLSAxLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzNdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzRdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzVdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzZdLFxuXHRcdFx0XHRcdFx0XSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gV2lraXRleHQgc2lnbmF0dXJlIHRpbWVzdGFtcFxuXHRcdFx0XHRjb25zdCBkYXRlUGFydHMgPSBNb3JlYml0cy5sMTBuLnNpZ25hdHVyZVRpbWVzdGFtcEZvcm1hdChwYXJhbSk7XG5cdFx0XHRcdGlmIChkYXRlUGFydHMpIHtcblx0XHRcdFx0XHR0aGlzLl9kID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgZGF0ZVBhcnRzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCF0aGlzLl9kKSB7XG5cdFx0XHQvLyBUcnkgc3RhbmRhcmQgZGF0ZVxuXHRcdFx0dGhpcy5fZCA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoRGF0ZSwgW0RhdGUsIC4uLmdlbmVyYXRlQXJyYXkoYXJncyldKSkoKTtcblx0XHR9XG5cdFx0Ly8gU3RpbGwgbm8/XG5cdFx0aWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuXHRcdFx0bXcubG9nLndhcm4oJ0ludmFsaWQgTW9yZWJpdHMuZGF0ZSBpbml0aWFsaXNhdGlvbjonLCBhcmdzKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBMb2NhbGl6ZWQgc3RyaW5ncyBmb3IgZGF0ZSBwcm9jZXNzaW5nLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuZGF0ZVxuXHQgKiBAdHlwZSB7b2JqZWN0LjxzdHJpbmcsIHN0cmluZz59XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IG1vbnRoc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBtb250aHNTaG9ydFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBkYXlzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGRheXNTaG9ydFxuXHQgKiBAcHJvcGVydHkge29iamVjdC48c3RyaW5nLCBzdHJpbmc+fSByZWxhdGl2ZVRpbWVzXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEgPSB7XG5cdFx0Ly8gbWVzc2FnZSBuYW1lcyBoZXJlIGNvcnJlc3BvbmQgdG8gTWVkaWFXaWtpIG1lc3NhZ2UgbmFtZXNcblx0XHQvLyBObyBpMThuIGF0IHRoaXMgdGltZVxuXHRcdG1vbnRoczogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxuXHRcdG1vbnRoc1Nob3J0OiBbJzHmnIgnLCAnMuaciCcsICcz5pyIJywgJzTmnIgnLCAnNeaciCcsICc25pyIJywgJzfmnIgnLCAnOOaciCcsICc55pyIJywgJzEw5pyIJywgJzEx5pyIJywgJzEy5pyIJ10sXG5cdFx0ZGF5czogWyfmmJ/mnJ/ml6UnLCAn5pif5pyf5LiAJywgJ+aYn+acn+S6jCcsICfmmJ/mnJ/kuIknLCAn5pif5pyf5ZubJywgJ+aYn+acn+S6lCcsICfmmJ/mnJ/lha0nXSxcblx0XHRkYXlzU2hvcnQ6IFsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ10sXG5cdFx0cmVsYXRpdmVUaW1lczoge1xuXHRcdFx0dGhpc0RheTogJ1vku4rlpKldQSBoaDptbScsXG5cdFx0XHRwcmV2RGF5OiAnW+aYqOWkqV1BIGhoOm1tJyxcblx0XHRcdG5leHREYXk6ICdb5piO5aSpXUEgaGg6bW0nLFxuXHRcdFx0dGhpc1dlZWs6ICdkZGRkQSBoaDptbScsXG5cdFx0XHRwYXN0V2VlazogJ1vkuIpdZGRkZEEgaGg6bW0nLFxuXHRcdFx0b3RoZXI6ICdZWVlZLU1NLUREJyxcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogTWFwIHVuaXRzIHdpdGggZ2V0dGVyL3NldHRlciBmdW5jdGlvbiBuYW1lcywgZm9yIGBhZGRgIGFuZCBgc3VidHJhY3RgXG5cdCAqIG1ldGhvZHMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5kYXRlXG5cdCAqIEB0eXBlIHtvYmplY3QuPHN0cmluZywgc3RyaW5nPn1cblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IHNlY29uZHNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IG1pbnV0ZXNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGhvdXJzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkYXlzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB3ZWVrc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gbW9udGhzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB5ZWFyc1xuXHQgKi9cblx0TW9yZWJpdHMuZGF0ZS51bml0TWFwID0ge1xuXHRcdHNlY29uZHM6ICdTZWNvbmRzJyxcblx0XHRtaW51dGVzOiAnTWludXRlcycsXG5cdFx0aG91cnM6ICdIb3VycycsXG5cdFx0ZGF5czogJ0RhdGUnLFxuXHRcdHdlZWtzOiAnV2VlaycsXG5cdFx0Ly8gTm90IGEgZnVuY3Rpb24gYnV0IGhhbmRsZWQgaW4gYGFkZGAgdGhyb3VnaCBjdW5uaW5nIHVzZSBvZiBtdWx0aXBsaWNhdGlvblxuXHRcdG1vbnRoczogJ01vbnRoJyxcblx0XHR5ZWFyczogJ0Z1bGxZZWFyJyxcblx0fTtcblx0TW9yZWJpdHMuZGF0ZS5wcm90b3R5cGUgPSB7XG5cdFx0LyoqIEByZXR1cm5zIHtib29sZWFufSAqL1xuXHRcdGlzVmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gIU51bWJlci5pc05hTih0aGlzLmdldFRpbWUoKSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0geyhEYXRlfE1vcmViaXRzLmRhdGUpfSBkYXRlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNCZWZvcmUoZGF0ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VGltZSgpIDwgZGF0ZS5nZXRUaW1lKCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0geyhEYXRlfE1vcmViaXRzLmRhdGUpfSBkYXRlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNBZnRlcihkYXRlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUaW1lKCkgPiBkYXRlLmdldFRpbWUoKTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ01vbnRoTmFtZSgpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzW3RoaXMuZ2V0VVRDTW9udGgoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRVVENNb250aE5hbWVBYmJyZXYoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1Nob3J0W3RoaXMuZ2V0VVRDTW9udGgoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRNb250aE5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1t0aGlzLmdldE1vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0TW9udGhOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNTaG9ydFt0aGlzLmdldE1vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0VVRDRGF5TmFtZSgpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1t0aGlzLmdldFVUQ0RheSgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ0RheU5hbWVBYmJyZXYoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNTaG9ydFt0aGlzLmdldFVUQ0RheSgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldERheU5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNbdGhpcy5nZXREYXkoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXREYXlOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzU2hvcnRbdGhpcy5nZXREYXkoKV07XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGQgYSBnaXZlbiBudW1iZXIgb2YgbWludXRlcywgaG91cnMsIGRheXMsIHdlZWtzLCBtb250aHMsIG9yIHllYXJzIHRvIHRoZSBkYXRlLlxuXHRcdCAqIFRoaXMgaXMgZG9uZSBpbi1wbGFjZS4gVGhlIG1vZGlmaWVkIGRhdGUgb2JqZWN0IGlzIGFsc28gcmV0dXJuZWQsIGFsbG93aW5nIGNoYWluaW5nLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFNob3VsZCBiZSBhbiBpbnRlZ2VyLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB1bml0XG5cdFx0ICogQHRocm93cyBJZiBpbnZhbGlkIG9yIHVuc3VwcG9ydGVkIHVuaXQgaXMgZ2l2ZW4uXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLmRhdGV9XG5cdFx0ICovXG5cdFx0YWRkKG51bWJlciwgdW5pdCkge1xuXHRcdFx0bGV0IG51bSA9IE51bWJlci5wYXJzZUludChudW1iZXIsIDEwKTsgLy8gbm9ybWFsaXplXG5cdFx0XHRpZiAoTnVtYmVyLmlzTmFOKG51bSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBudW1iZXIgXCIke251bWJlcn1cIiBwcm92aWRlZC5gKTtcblx0XHRcdH1cblx0XHRcdHVuaXQgPSB1bml0LnRvTG93ZXJDYXNlKCk7IC8vIG5vcm1hbGl6ZVxuXHRcdFx0Y29uc3Qge3VuaXRNYXB9ID0gTW9yZWJpdHMuZGF0ZTtcblx0XHRcdGxldCB1bml0Tm9ybSA9IHVuaXRNYXBbdW5pdF0gfHwgdW5pdE1hcFtgJHt1bml0fXNgXTsgLy8gc28gdGhhdCBib3RoIHNpbmd1bGFyIGFuZCAgcGx1cmFsIGZvcm1zIHdvcmtcblx0XHRcdGlmICh1bml0Tm9ybSkge1xuXHRcdFx0XHQvLyBObyBidWlsdC1pbiB3ZWVrIGZ1bmN0aW9ucywgc28gcmF0aGVyIHRoYW4gYnVpbGQgb3V0IElTTydzIGdldFdlZWsvc2V0V2VlaywganVzdCBtdWx0aXBseVxuXHRcdFx0XHQvLyBQcm9iYWJseSBjYW4ndCBiZSB1c2VkIGZvciBKdWxpYW4tPkdyZWdvcmlhbiBjaGFuZ2VvdmVycywgZXRjLlxuXHRcdFx0XHRpZiAodW5pdE5vcm0gPT09ICdXZWVrJykge1xuXHRcdFx0XHRcdHVuaXROb3JtID0gJ0RhdGUnO1xuXHRcdFx0XHRcdG51bSAqPSA3O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXNbYHNldCR7dW5pdE5vcm19YF0odGhpc1tgZ2V0JHt1bml0Tm9ybX1gXSgpICsgbnVtKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdW5pdCBcIiR7dW5pdH1cIjogT25seSAke09iamVjdC5rZXlzKHVuaXRNYXApLmpvaW4oJywgJyl9IGFyZSBhbGxvd2VkLmApO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU3VidHJhY3RzIGEgZ2l2ZW4gbnVtYmVyIG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCB3ZWVrcywgbW9udGhzLCBvciB5ZWFycyB0byB0aGUgZGF0ZS5cblx0XHQgKiBUaGlzIGlzIGRvbmUgaW4tcGxhY2UuIFRoZSBtb2RpZmllZCBkYXRlIG9iamVjdCBpcyBhbHNvIHJldHVybmVkLCBhbGxvd2luZyBjaGFpbmluZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBTaG91bGQgYmUgYW4gaW50ZWdlci5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pdFxuXHRcdCAqIEB0aHJvd3MgSWYgaW52YWxpZCBvciB1bnN1cHBvcnRlZCB1bml0IGlzIGdpdmVuLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5kYXRlfVxuXHRcdCAqL1xuXHRcdHN1YnRyYWN0KG51bWJlciwgdW5pdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYWRkKC1udW1iZXIsIHVuaXQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRm9ybWF0IHRoZSBkYXRlIGludG8gYSBzdHJpbmcgcGVyIHRoZSBnaXZlbiBmb3JtYXQgc3RyaW5nLlxuXHRcdCAqIFJlcGxhY2VtZW50IHN5bnRheCBpcyBhIHN1YnNldCBvZiB0aGF0IGluIG1vbWVudC5qczpcblx0XHQgKlxuXHRcdCAqIHwgU3ludGF4IHwgT3V0cHV0IHxcblx0XHQgKiB8LS0tLS0tLS18LS0tLS0tLS18XG5cdFx0ICogfCBIIHwgSG91cnMgKDI0LWhvdXIpIHxcblx0XHQgKiB8IEhIIHwgSG91cnMgKDI0LWhvdXIsIHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgaCB8IEhvdXJzICgxMi1ob3VyKSB8XG5cdFx0ICogfCBoaCB8IEhvdXJzICgxMi1ob3VyLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IEEgfCBBTSBvciBQTSB8XG5cdFx0ICogfCBtIHwgTWludXRlcyB8XG5cdFx0ICogfCBtbSB8IE1pbnV0ZXMgKHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgcyB8IFNlY29uZHMgfFxuXHRcdCAqIHwgc3MgfCBTZWNvbmRzIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IFNTUyB8IE1pbGxpc2Vjb25kcyBmcmFnbWVudCwgMyBkaWdpdHMgfFxuXHRcdCAqIHwgZCB8IERheSBudW1iZXIgb2YgdGhlIHdlZWsgKFN1bj0wKSB8XG5cdFx0ICogfCBkZGQgfCBBYmJyZXZpYXRlZCBkYXkgbmFtZSB8XG5cdFx0ICogfCBkZGRkIHwgRnVsbCBkYXkgbmFtZSB8XG5cdFx0ICogfCBEIHwgRGF0ZSB8XG5cdFx0ICogfCBERCB8IERhdGUgKHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgTSB8IE1vbnRoIG51bWJlciAoMS1pbmRleGVkKSB8XG5cdFx0ICogfCBNTSB8IE1vbnRoIG51bWJlciAoMS1pbmRleGVkLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IE1NTSB8IEFiYnJldmlhdGVkIG1vbnRoIG5hbWUgfFxuXHRcdCAqIHwgTU1NTSB8IEZ1bGwgbW9udGggbmFtZSB8XG5cdFx0ICogfCBZIHwgWWVhciB8XG5cdFx0ICogfCBZWSB8IEZpbmFsIHR3byBkaWdpdHMgb2YgeWVhciAoMjAgZm9yIDIwMjAsIDQyIGZvciAxOTQyKSB8XG5cdFx0ICogfCBZWVlZIHwgWWVhciAoc2FtZSBhcyBgWWApIHxcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRzdHIgLSBGb3JtYXQgdGhlIGRhdGUgaW50byBhIHN0cmluZywgdXNpbmdcblx0XHQgKiB0aGUgcmVwbGFjZW1lbnQgc3ludGF4LiAgVXNlIGBbYCBhbmQgYF1gIHRvIGVzY2FwZSBpdGVtcy4gIElmIG5vdFxuXHRcdCAqIHByb3ZpZGVkLCB3aWxsIHJldHVybiB0aGUgSVNPLTg2MDEtZm9ybWF0dGVkIHN0cmluZy5cblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gW3pvbmU9c3lzdGVtXSAtIGBzeXN0ZW1gIChmb3IgYnJvd3Nlci1kZWZhdWx0IHRpbWUgem9uZSksXG5cdFx0ICogYHV0Y2AsIG9yIHNwZWNpZnkgYSB0aW1lIHpvbmUgYXMgbnVtYmVyIG9mIG1pbnV0ZXMgcmVsYXRpdmUgdG8gVVRDLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Zm9ybWF0KGZvcm1hdHN0ciwgem9uZSkge1xuXHRcdFx0aWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuXHRcdFx0XHRyZXR1cm4gJ0ludmFsaWQgZGF0ZSc7IC8vIFB1dCB0aGUgdHJ1dGggb3V0LCBwcmVmZXJhYmxlIHRvIFwiTmFOTmFOTmFuIE5hTjpOYU5cIiBvciB3aGF0ZXZlclxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdWRhdGUgPSB0aGlzO1xuXHRcdFx0Ly8gY3JlYXRlIGEgbmV3IGRhdGUgb2JqZWN0IHRoYXQgd2lsbCBjb250YWluIHRoZSBkYXRlIHRvIGRpc3BsYXkgYXMgc3lzdGVtIHRpbWVcblx0XHRcdGlmICh6b25lID09PSAndXRjJykge1xuXHRcdFx0XHR1ZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHRoaXMuZ2V0VGltZSgpKS5hZGQodGhpcy5nZXRUaW1lem9uZU9mZnNldCgpLCAnbWludXRlcycpO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygem9uZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Ly8gY29udmVydCB0byB1dGMsIHRoZW4gYWRkIHRoZSB1dGMgb2Zmc2V0IGdpdmVuXG5cdFx0XHRcdHVkYXRlID0gbmV3IE1vcmViaXRzLmRhdGUodGhpcy5nZXRUaW1lKCkpLmFkZCh0aGlzLmdldFRpbWV6b25lT2Zmc2V0KCkgKyB6b25lLCAnbWludXRlcycpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZGVmYXVsdCB0byBJU09TdHJpbmdcblx0XHRcdGlmICghZm9ybWF0c3RyKSB7XG5cdFx0XHRcdHJldHVybiB1ZGF0ZS50b0lTT1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFkID0gKG51bSwgbGVuKSA9PiB7XG5cdFx0XHRcdGxlbiB8fD0gMjsgLy8gVXAgdG8gbGVuZ3RoIG9mIDAwICsgMVxuXHRcdFx0XHRyZXR1cm4gYDAwJHtudW19YC50b1N0cmluZygpLnNsaWNlKDAgLSBsZW4pO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGgyNCA9IHVkYXRlLmdldEhvdXJzKCk7XG5cdFx0XHRjb25zdCBtID0gdWRhdGUuZ2V0TWludXRlcygpO1xuXHRcdFx0Y29uc3QgcyA9IHVkYXRlLmdldFNlY29uZHMoKTtcblx0XHRcdGNvbnN0IG1zID0gdWRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cdFx0XHRjb25zdCBEID0gdWRhdGUuZ2V0RGF0ZSgpO1xuXHRcdFx0Y29uc3QgTSA9IHVkYXRlLmdldE1vbnRoKCkgKyAxO1xuXHRcdFx0Y29uc3QgWSA9IHVkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRjb25zdCBoMTIgPSBoMjQgJSAxMiB8fCAxMjtcblx0XHRcdGNvbnN0IGFtT3JQbSA9IGgyNCA+PSAxMiA/ICfkuIvljYgnIDogJ+S4iuWNiCc7XG5cdFx0XHRjb25zdCByZXBsYWNlbWVudE1hcCA9IHtcblx0XHRcdFx0SEg6IHBhZChoMjQpLFxuXHRcdFx0XHRIOiBoMjQsXG5cdFx0XHRcdGhoOiBwYWQoaDEyKSxcblx0XHRcdFx0aDogaDEyLFxuXHRcdFx0XHRBOiBhbU9yUG0sXG5cdFx0XHRcdG1tOiBwYWQobSksXG5cdFx0XHRcdG0sXG5cdFx0XHRcdHNzOiBwYWQocyksXG5cdFx0XHRcdHMsXG5cdFx0XHRcdFNTUzogcGFkKG1zLCAzKSxcblx0XHRcdFx0ZGRkZDogdWRhdGUuZ2V0RGF5TmFtZSgpLFxuXHRcdFx0XHRkZGQ6IHVkYXRlLmdldERheU5hbWVBYmJyZXYoKSxcblx0XHRcdFx0ZDogdWRhdGUuZ2V0RGF5KCksXG5cdFx0XHRcdEREOiBwYWQoRCksXG5cdFx0XHRcdEQsXG5cdFx0XHRcdE1NTU06IHVkYXRlLmdldE1vbnRoTmFtZSgpLFxuXHRcdFx0XHRNTU06IHVkYXRlLmdldE1vbnRoTmFtZUFiYnJldigpLFxuXHRcdFx0XHRNTTogcGFkKE0pLFxuXHRcdFx0XHRNLFxuXHRcdFx0XHRZWVlZOiBZLFxuXHRcdFx0XHRZWTogcGFkKFkgJSAxMDApLFxuXHRcdFx0XHRZLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKGZvcm1hdHN0cik7IC8vIGVzY2FwZSBzdHVmZiBiZXR3ZWVuIFsuLi5dXG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJ1xcXFxbJywgJ1xcXFxdJyk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKFxuXHRcdFx0XHQvKiBSZWdleCBub3Rlczpcblx0XHRcdFx0ICogZChkezIsM30pPyBtYXRjaGVzIGV4YWN0bHkgMSwgMyBvciA0IG9jY3VycmVuY2VzIG9mICdkJyAoJ2RkJyBpcyB0cmVhdGVkIGFzIGEgZG91YmxlIG1hdGNoIG9mICdkJylcblx0XHRcdFx0ICogWXsxLDJ9KFl7Mn0pPyBtYXRjaGVzIGV4YWN0bHkgMSwgMiBvciA0IG9jY3VycmVuY2VzIG9mICdZJ1xuXHRcdFx0XHQgKi9cblx0XHRcdFx0L0h7MSwyfXxoezEsMn18bXsxLDJ9fHN7MSwyfXxTU1N8ZChkezIsM30pP3xEezEsMn18TXsxLDR9fFl7MSwyfShZezJ9KT98QS9nLFxuXHRcdFx0XHQobWF0Y2gpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZW1lbnRNYXBbbWF0Y2hdO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHVuYmluZGVyLnJlYmluZCgpLnJlcGxhY2UoL1xcWyguKj8pXFxdL2csICckMScpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2l2ZXMgYSByZWFkYWJsZSByZWxhdGl2ZSB0aW1lIHN0cmluZyBzdWNoIGFzIFwiWWVzdGVyZGF5IGF0IDY6NDMgUE1cIiBvciBcIkxhc3QgVGh1cnNkYXkgYXQgMTE6NDUgQU1cIi5cblx0XHQgKiBTaW1pbGFyIHRvIGBjYWxlbmRhcmAgaW4gbW9tZW50LmpzLCBidXQgd2l0aCB0aW1lIHpvbmUgc3VwcG9ydC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBbem9uZT1zeXN0ZW1dIC0gJ3N5c3RlbScgKGZvciBicm93c2VyLWRlZmF1bHQgdGltZSB6b25lKSxcblx0XHQgKiAndXRjJyAoZm9yIFVUQyksIG9yIHNwZWNpZnkgYSB0aW1lIHpvbmUgYXMgbnVtYmVyIG9mIG1pbnV0ZXMgcGFzdCBVVEMuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRjYWxlbmRhcih6b25lKSB7XG5cdFx0XHQvLyBaZXJvIG91dCB0aGUgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgYW5kIG1pbGxpc2Vjb25kcyAtIGtlZXBpbmcgb25seSB0aGUgZGF0ZTtcblx0XHRcdC8vIGZpbmQgdGhlIGRpZmZlcmVuY2UuIE5vdGUgdGhhdCBzZXRIb3VycygpIHJldHVybnMgdGhlIHNhbWUgdGhpbmcgYXMgZ2V0VGltZSgpLlxuXHRcdFx0Y29uc3QgZGF0ZURpZmYgPSAobmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKSAtIG5ldyBEYXRlKHRoaXMpLnNldEhvdXJzKDAsIDAsIDAsIDApKSAvIDguNjRlNztcblx0XHRcdHN3aXRjaCAodHJ1ZSkge1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID09PSAwOlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy50aGlzRGF5LCB6b25lKTtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA9PT0gMTpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMucHJldkRheSwgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPiAwICYmIGRhdGVEaWZmIDwgNzpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMucGFzdFdlZWssIHpvbmUpO1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID09PSAtMTpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMubmV4dERheSwgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPCAwICYmIGRhdGVEaWZmID4gLTc6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnRoaXNXZWVrLCB6b25lKTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMub3RoZXIsIHpvbmUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2V0IGEgcmVndWxhciBleHByZXNzaW9uIHRoYXQgbWF0Y2hlcyB3aWtpdGV4dCBzZWN0aW9uIHRpdGxlcywgc3VjaFxuXHRcdCAqIGFzIGA9PURlY2VtYmVyIDIwMTk9PWAgb3IgYD09PSBKYW4gMjAxOCA9PT1gLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge1JlZ0V4cH1cblx0XHQgKi9cblx0XHRtb250aEhlYWRlclJlZ2V4KCkge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBeKD09KylcXFxccyoke3RoaXMuZ2V0VVRDRnVsbFllYXIoKX3lubQoPzoke3RoaXMuZ2V0VVRDTW9udGhOYW1lKCl9fCR7dGhpcy5nZXRVVENNb250aE5hbWVBYmJyZXYoKX0pXFxcXHMqXFxcXDFgLFxuXHRcdFx0XHQnbWcnXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyBhIHdpa2l0ZXh0IHNlY3Rpb24gaGVhZGVyIHdpdGggdGhlIG1vbnRoIGFuZCB5ZWFyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtsZXZlbD0yXSAtIEhlYWRlciBsZXZlbC4gIFBhc3MgMCBmb3IganVzdCB0aGUgdGV4dFxuXHRcdCAqIHdpdGggbm8gd2lraXRleHQgbWFya2VycyAoPT0pLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0bW9udGhIZWFkZXIobGV2ZWwpIHtcblx0XHRcdC8vIERlZmF1bHQgdG8gMiwgYnV0IGFsbG93IGZvciAwIG9yIHN0cmluZ3kgbnVtYmVyc1xuXHRcdFx0bGV2ZWwgPSBOdW1iZXIucGFyc2VJbnQobGV2ZWwsIDEwKTtcblx0XHRcdGxldmVsID0gTnVtYmVyLmlzTmFOKGxldmVsKSA/IDIgOiBsZXZlbDtcblx0XHRcdGNvbnN0IGhlYWRlciA9ICc9Jy5yZXBlYXQobGV2ZWwpO1xuXHRcdFx0Y29uc3QgdGV4dCA9IGAke3RoaXMuZ2V0VVRDRnVsbFllYXIoKX3lubQke3RoaXMuZ2V0VVRDTW9udGhOYW1lKCl9YDtcblx0XHRcdGlmIChoZWFkZXIubGVuZ3RoKSB7XG5cdFx0XHRcdC8vIHdpa2l0ZXh0LWZvcm1hdHRlZCBoZWFkZXJcblx0XHRcdFx0cmV0dXJuIGAke2hlYWRlcn0gJHt0ZXh0fSAke2hlYWRlcn1gO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRleHQ7IC8vIEp1c3QgdGhlIHN0cmluZ1xuXHRcdH0sXG5cdH07XG5cdC8vIEFsbG93IG5hdGl2ZSBEYXRlLnByb3RvdHlwZSBtZXRob2RzIHRvIGJlIHVzZWQgb24gTW9yZWJpdHMuZGF0ZSBvYmplY3RzXG5cdGZvciAoY29uc3QgZnVuYyBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhEYXRlLnByb3RvdHlwZSkpIHtcblx0XHQvLyBFeGNsdWRlIG1ldGhvZHMgdGhhdCBjb2xsaWRlIHdpdGggUGFnZVRyaWFnZSdzIERhdGUuanMgZXh0ZXJuYWwsIHdoaWNoIGNsb2JiZXJzIG5hdGl2ZSBEYXRlXG5cdFx0aWYgKCFbJ2FkZCcsICdnZXREYXlOYW1lJywgJ2dldE1vbnRoTmFtZSddLmluY2x1ZGVzKGZ1bmMpKSB7XG5cdFx0XHRNb3JlYml0cy5kYXRlLnByb3RvdHlwZVtmdW5jXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9kW2Z1bmNdKC4uLmFyZ3MpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFZhcmlvdXMgb2JqZWN0cyBmb3Igd2lraSBlZGl0aW5nIGFuZCBBUEkgYWNjZXNzLCBpbmNsdWRpbmdcblx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBhbmQge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0uXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMud2lraVxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLndpa2kgPSB7fTtcblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkIGluIGZhdm9yIG9mIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0IGFzIG9mIE5vdmVtYmVyIDIwMjBcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmlzUGFnZVJlZGlyZWN0ID0gKCkgPT4ge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdCdbTW9yZWJpdHNdIE5PVEU6IE1vcmViaXRzLndpa2kuaXNQYWdlUmVkaXJlY3QgaGFzIGJlZW4gZGVwcmVjYXRlZCwgdXNlIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0IGluc3RlYWQuJ1xuXHRcdCk7XG5cdFx0cmV0dXJuIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0KCk7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQHR5cGUge251bWJlcn1cblx0ICovXG5cdE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA9IDA7XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdCA9IDA7XG5cdC8qKlxuXHQgKiBEaXNwbGF5IG1lc3NhZ2UgYW5kL29yIHJlZGlyZWN0IHRvIHBhZ2UgdXBvbiBjb21wbGV0aW9uIG9mIHRhc2tzLlxuXHQgKlxuXHQgKiBFdmVyeSBjYWxsIHRvIE1vcmViaXRzLndpa2kuYXBpLnBvc3QoKSByZXN1bHRzIGluIHRoZSBkaXNwYXRjaCBvZiBhblxuXHQgKiBhc3luY2hyb25vdXMgY2FsbGJhY2suIEVhY2ggY2FsbGJhY2sgY2FuIGluIHR1cm4gbWFrZSBhbiBhZGRpdGlvbmFsIGNhbGwgdG9cblx0ICogTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIHRvIGNvbnRpbnVlIGEgcHJvY2Vzc2luZyBzZXF1ZW5jZS4gQXQgdGhlXG5cdCAqIGNvbmNsdXNpb24gb2YgdGhlIGZpbmFsIGNhbGxiYWNrIG9mIGEgcHJvY2Vzc2luZyBzZXF1ZW5jZSwgaXQgaXMgbm90XG5cdCAqIHBvc3NpYmxlIHRvIHNpbXBseSByZXR1cm4gdG8gdGhlIG9yaWdpbmFsIGNhbGxlciBiZWNhdXNlIHRoZXJlIGlzIG5vIGNhbGxcblx0ICogc3RhY2sgbGVhZGluZyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0LiBJbnN0ZWFkLFxuXHQgKiBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpIGlzIGNhbGxlZCB0byBkaXNwbGF5IHRoZSByZXN1bHQgdG9cblx0ICogdGhlIHVzZXIgYW5kIHRvIHBlcmZvcm0gYW4gb3B0aW9uYWwgcGFnZSByZWRpcmVjdC5cblx0ICpcblx0ICogVGhlIGRldGVybWluYXRpb24gb2Ygd2hlbiB0byBjYWxsIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCkgaXNcblx0ICogbWFuYWdlZCB0aHJvdWdoIHRoZSBnbG9iYWxzIE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCBhbmRcblx0ICogTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdC4gTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IGlzXG5cdCAqIGluY3JlbWVudGVkIGF0IHRoZSBzdGFydCBvZiBldmVyeSBNb3JlYml0cy53aWtpLmFwaSBjYWxsIGFuZCBkZWNyZW1lbnRlZFxuXHQgKiBhZnRlciB0aGUgY29tcGxldGlvbiBvZiBhIGNhbGxiYWNrIGZ1bmN0aW9uLiBJZiBhIGNhbGxiYWNrIGZ1bmN0aW9uIGRvZXNcblx0ICogbm90IGNyZWF0ZSBhIG5ldyBNb3JlYml0cy53aWtpLmFwaSBvYmplY3QgYmVmb3JlIGV4aXRpbmcsIGl0IGlzIHRoZSBmaW5hbFxuXHQgKiBzdGVwIGluIHRoZSBwcm9jZXNzaW5nIGNoYWluIGFuZCBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpIHdpbGxcblx0ICogdGhlbiBiZSBjYWxsZWQuXG5cdCAqXG5cdCAqIE9wdGlvbmFsbHksIGNhbGxlcnMgbWF5IHVzZSBNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQoKSB0byBpbmRpY2F0ZSB0aGF0XG5cdCAqIHByb2Nlc3NpbmcgaXMgbm90IGNvbXBsZXRlIHVwb24gdGhlIGNvbmNsdXNpb24gb2YgdGhlIGZpbmFsIGNhbGxiYWNrXG5cdCAqIGZ1bmN0aW9uLiAgVGhpcyBpcyB1c2VkIGZvciBiYXRjaCBvcGVyYXRpb25zLiBUaGUgZW5kIG9mIGEgYmF0Y2ggaXNcblx0ICogc2lnbmFsZWQgYnkgY2FsbGluZyBNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQoKS5cblx0ICpcblx0ICogQHBhcmFtIHt0eXBlb2YgTW9yZWJpdHN9IHNlbGZcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkID0gKHNlbGYpID0+IHtcblx0XHRpZiAoLS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPD0gMCAmJiBNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0IDw9IDApIHtcblx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KHNlbGYpO1xuXHRcdH1cblx0fTtcblx0Ly8gQ2hhbmdlIHBlciBhY3Rpb24gd2FudGVkXG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCA9ICgpID0+IHtcblx0XHRpZiAoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlKSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMuYWN0aW9uQ29tcGxldGVkKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSk7XG5cdFx0fVxuXHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCkge1xuXHRcdFx0Ly8gaWYgaXQgaXNuJ3QgYSBVUkwsIG1ha2UgaXQgb25lLiBUT0RPOiBUaGlzIGJyZWFrcyBvbiB0aGUgYXJ0aWNsZXMgJ2h0dHA6Ly8nLCAnZnRwOi8vJywgYW5kIHNpbWlsYXIgb25lcy5cblx0XHRcdGlmICghL15cXHcrOlxcL1xcLy8udGVzdChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCkpIHtcblx0XHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QgPSBtdy51dGlsLmdldFVybChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCk7XG5cdFx0XHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5mb2xsb3dSZWRpcmVjdCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCArPSAnP3JlZGlyZWN0PW5vJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGxvY2F0aW9uID0gTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3Q7XG5cdFx0XHR9LCBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC50aW1lT3V0KTtcblx0XHR9XG5cdH07XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC50aW1lT3V0ID1cblx0XHR3aW5kb3cud3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0ID09PSB1bmRlZmluZWQgPyA1MDAwIDogd2luZG93LndwQWN0aW9uQ29tcGxldGVkVGltZU91dDtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0ID0gbnVsbDtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSA9IG51bGw7XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQgPSAoKSA9PiB7XG5cdFx0KytNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0O1xuXHR9O1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50ID0gKCkgPT4ge1xuXHRcdGlmICgtLU1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQgPD0gMCAmJiBNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPD0gMCkge1xuXHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKTtcblx0XHR9XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5hcGkgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQW4gZWFzeSB3YXkgdG8gdGFsayB0byB0aGUgTWVkaWFXaWtpIEFQSS4gIEFjY2VwdHMgZWl0aGVyIGpzb24gb3IgeG1sXG5cdCAqIChkZWZhdWx0KSBmb3JtYXRzOyBpZiBqc29uIGlzIHNlbGVjdGVkLCB3aWxsIGRlZmF1bHQgdG8gYGZvcm1hdHZlcnNpb249MmBcblx0ICogdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuICBTaW1pbGFybHksIGVuZm9yY2VzIG5ld2VyIGBlcnJvcmZvcm1hdGBzLFxuXHQgKiBkZWZhdWx0aW5nIHRvIGBodG1sYCBpZiB1bnNwZWNpZmllZC4gIGB1c2VsYW5nYCBlbmZvcmNlZCB0byB0aGUgd2lraSdzXG5cdCAqIGNvbnRlbnQgbGFuZ3VhZ2UuXG5cdCAqXG5cdCAqIEluIG5ldyBjb2RlLCB0aGUgdXNlIG9mIHRoZSBsYXN0IDMgcGFyYW1ldGVycyBzaG91bGQgYmUgYXZvaWRlZCwgaW5zdGVhZFxuXHQgKiB1c2Uge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpI3NldFN0YXR1c0VsZW1lbnR8c2V0U3RhdHVzRWxlbWVudCgpfSB0byBiaW5kXG5cdCAqIHRoZSBzdGF0dXMgZWxlbWVudCAoaWYgbmVlZGVkKSBhbmQgdXNlIGAudGhlbigpYCBvciBgLmNhdGNoKClgIG9uIHRoZVxuXHQgKiBwcm9taXNlIHJldHVybmVkIGJ5IGBwb3N0KClgLCByYXRoZXIgdGhhbiBzcGVjaWZ5IHRoZSBgb25TdWNjZXNzYCBvclxuXHQgKiBgb25GYWlsdXJlYCBjYWxsYmFja3MuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudEFjdGlvbiAtIFRoZSBjdXJyZW50IGFjdGlvbiAocmVxdWlyZWQpLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gcXVlcnkgLSBUaGUgcXVlcnkgKHJlcXVpcmVkKS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bC5cblx0ICogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IFtzdGF0dXNFbGVtZW50XSAtIEEgTW9yZWJpdHMuc3RhdHVzIG9iamVjdCB0byB1c2UgZm9yIHN0YXR1cyBtZXNzYWdlcy5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRXJyb3JdIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgaWYgYW4gZXJyb3Igb2NjdXJzLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hcGkgPSBmdW5jdGlvbiAoY3VycmVudEFjdGlvbiwgcXVlcnksIG9uU3VjY2Vzcywgc3RhdHVzRWxlbWVudCwgb25FcnJvcikge1xuXHRcdHRoaXMuY3VycmVudEFjdGlvbiA9IGN1cnJlbnRBY3Rpb247XG5cdFx0dGhpcy5xdWVyeSA9IHF1ZXJ5O1xuXHRcdHRoaXMucXVlcnkuYXNzZXJ0ID0gJ3VzZXInO1xuXHRcdC8vIEVuZm9yY2UgbmV3ZXIgZXJyb3IgZm9ybWF0cywgcHJlZmVycmluZyBodG1sXG5cdFx0aWYgKCFxdWVyeS5lcnJvcmZvcm1hdCB8fCAhWyd3aWtpdGV4dCcsICdwbGFpbnRleHQnXS5pbmNsdWRlcyhxdWVyeS5lcnJvcmZvcm1hdCkpIHtcblx0XHRcdHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPSAnaHRtbCc7XG5cdFx0fVxuXHRcdC8vIEV4cGxpY2l0bHkgdXNlIHRoZSB3aWtpJ3MgY29udGVudCBsYW5ndWFnZSB0byBtaW5pbWl6ZSBjb25mdXNpb24sXG5cdFx0Ly8gc2VlICMxMTc5IGZvciBkaXNjdXNzaW9uXG5cdFx0dGhpcy5xdWVyeS51c2VsYW5nIHx8PSAnY29udGVudCc7IC8vIFVzZSB3Z1VzZXJMYW5ndWFnZSBmb3IgcHJldmlld1xuXHRcdHRoaXMucXVlcnkuZXJyb3JsYW5nID0gJ3VzZWxhbmcnO1xuXHRcdHRoaXMucXVlcnkuZXJyb3JzdXNlbG9jYWwgPSAxO1xuXHRcdHRoaXMub25TdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdHRoaXMub25FcnJvciA9IG9uRXJyb3I7XG5cdFx0aWYgKHN0YXR1c0VsZW1lbnQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdHVzRWxlbWVudChzdGF0dXNFbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdGF0ZWxlbSA9IG5ldyBNb3JlYml0cy5zdGF0dXMoY3VycmVudEFjdGlvbik7XG5cdFx0fVxuXHRcdC8vIEpTT04gaXMgdXNlZCB0aHJvdWdob3V0IE1vcmViaXRzL1R3aW5rbGUsIGJ1dCB4bWwgcmVtYWlucyB0aGUgZGVmYXVsdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRpZiAoIXF1ZXJ5LmZvcm1hdCkge1xuXHRcdFx0dGhpcy5xdWVyeS5mb3JtYXQgPSAneG1sJztcblx0XHR9IGVsc2UgaWYgKHF1ZXJ5LmZvcm1hdCA9PT0gJ2pzb24nICYmICFxdWVyeS5mb3JtYXR2ZXJzaW9uKSB7XG5cdFx0XHR0aGlzLnF1ZXJ5LmZvcm1hdHZlcnNpb24gPSAnMic7XG5cdFx0fSBlbHNlIGlmICghWyd4bWwnLCAnanNvbiddLmluY2x1ZGVzKHF1ZXJ5LmZvcm1hdCkpIHtcblx0XHRcdHRoaXMuc3RhdGVsZW0uZXJyb3IoJ0ludmFsaWQgQVBJIGZvcm1hdDogb25seSB4bWwgYW5kIGpzb24gYXJlIHN1cHBvcnRlZC4nKTtcblx0XHR9XG5cdFx0Ly8gSWdub3JlIHRhZ3MgZm9yIHF1ZXJpZXMgYW5kIG1vc3QgY29tbW9uIHVuc3VwcG9ydGVkIGFjdGlvbnMsIHByb2R1Y2VzIHdhcm5pbmdzXG5cdFx0aWYgKHF1ZXJ5LmFjdGlvbiAmJiBbJ3F1ZXJ5JywgJ3dhdGNoJ10uaW5jbHVkZXMocXVlcnkuYWN0aW9uKSkge1xuXHRcdFx0ZGVsZXRlIHF1ZXJ5LnRhZ3M7XG5cdFx0fSBlbHNlIGlmICghcXVlcnkudGFncyAmJiBtb3JlYml0c1dpa2lDaGFuZ2VUYWcpIHtcblx0XHRcdHF1ZXJ5LnRhZ3MgPSBtb3JlYml0c1dpa2lDaGFuZ2VUYWc7XG5cdFx0fVxuXHR9O1xuXHRNb3JlYml0cy53aWtpLmFwaS5wcm90b3R5cGUgPSB7XG5cdFx0Y3VycmVudEFjdGlvbjogJycsXG5cdFx0b25TdWNjZXNzOiBudWxsLFxuXHRcdG9uRXJyb3I6IG51bGwsXG5cdFx0cGFyZW50OiB3aW5kb3csXG5cdFx0Ly8gdXNlIGdsb2JhbCBjb250ZXh0IGlmIHRoZXJlIGlzIG5vIHBhcmVudCBvYmplY3Rcblx0XHRxdWVyeTogbnVsbCxcblx0XHRyZXNwb25zZTogbnVsbCxcblx0XHRyZXNwb25zZVhNTDogbnVsbCxcblx0XHQvLyB1c2UgYHJlc3BvbnNlYCBpbnN0ZWFkOyByZXRhaW5lZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRzdGF0ZWxlbTogbnVsbCxcblx0XHQvLyB0aGlzIG5vbi1zdGFuZGFyZCBuYW1lIGtlcHQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cdFx0c3RhdHVzVGV4dDogbnVsbCxcblx0XHQvLyByZXN1bHQgcmVjZWl2ZWQgZnJvbSB0aGUgQVBJLCBub3JtYWxseSBcInN1Y2Nlc3NcIiBvciBcImVycm9yXCJcblx0XHRlcnJvckNvZGU6IG51bGwsXG5cdFx0Ly8gc2hvcnQgdGV4dCBlcnJvciBjb2RlLCBpZiBhbnksIGFzIGRvY3VtZW50ZWQgaW4gdGhlIE1lZGlhV2lraSBBUElcblx0XHRlcnJvclRleHQ6IG51bGwsXG5cdFx0Ly8gZnVsbCBlcnJvciBkZXNjcmlwdGlvbiwgaWYgYW55XG5cdFx0YmFkdG9rZW5SZXRyeTogZmFsc2UsXG5cdFx0Ly8gc2V0IHRvIHRydWUgaWYgdGhpcyBvbiBhIHJldHJ5IGF0dGVtcHRlZCBhZnRlciBhIGJhZHRva2VuIGVycm9yXG5cdFx0LyoqXG5cdFx0ICogS2VlcCB0cmFjayBvZiBwYXJlbnQgb2JqZWN0IGZvciBjYWxsYmFja3MuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IHBhcmVudFxuXHRcdCAqL1xuXHRcdHNldFBhcmVudChwYXJlbnQpIHtcblx0XHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdH0sXG5cdFx0LyoqIEBwYXJhbSB7TW9yZWJpdHMuc3RhdHVzfSBzdGF0dXNFbGVtZW50ICovXG5cdFx0c2V0U3RhdHVzRWxlbWVudChzdGF0dXNFbGVtZW50KSB7XG5cdFx0XHR0aGlzLnN0YXRlbGVtID0gc3RhdHVzRWxlbWVudDtcblx0XHRcdHRoaXMuc3RhdGVsZW0uc3RhdHVzKHRoaXMuY3VycmVudEFjdGlvbik7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDYXJyeSBvdXQgdGhlIHJlcXVlc3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gY2FsbGVyQWpheFBhcmFtZXRlcnMgLSBEbyBub3Qgc3BlY2lmeSBhIHBhcmFtZXRlciB1bmxlc3MgeW91IHJlYWxseVxuXHRcdCAqIHJlYWxseSB3YW50IHRvIGdpdmUgalF1ZXJ5IHNvbWUgZXh0cmEgcGFyYW1ldGVycy5cblx0XHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gLSBBIGpRdWVyeSBwcm9taXNlIG9iamVjdCB0aGF0IGlzIHJlc29sdmVkIG9yIHJlamVjdGVkIHdpdGggdGhlIGFwaSBvYmplY3QuXG5cdFx0ICovXG5cdFx0cG9zdChjYWxsZXJBamF4UGFyYW1ldGVycykge1xuXHRcdFx0KytNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7XG5cdFx0XHRjb25zdCBxdWVyeVN0cmluZ0FyciA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBbaSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnF1ZXJ5KSkge1xuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG5cdFx0XHRcdFx0cXVlcnlTdHJpbmdBcnJbcXVlcnlTdHJpbmdBcnIubGVuZ3RoXSA9XG5cdFx0XHRcdFx0XHRgJHtlbmNvZGVVUklDb21wb25lbnQoaSl9PSR7dmFsLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oJ3wnKX1gO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cXVlcnlTdHJpbmdBcnJbcXVlcnlTdHJpbmdBcnIubGVuZ3RoXSA9IGAke2VuY29kZVVSSUNvbXBvbmVudChpKX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nQXJyLmpvaW4oJyYnKS5yZXBsYWNlKC9eKC4qPykoXFxidG9rZW49W14mXSopJiguKikvLCAnJDEkMyYkMicpO1xuXHRcdFx0Ly8gdG9rZW4gc2hvdWxkIGFsd2F5cyBiZSB0aGUgbGFzdCBpdGVtIGluIHRoZSBxdWVyeSBzdHJpbmcgKGJ1ZyBUVy1CLTAwMTMpXG5cdFx0XHRjb25zdCBhamF4cGFyYW1zID0ge1xuXHRcdFx0XHRjb250ZXh0OiB0aGlzLFxuXHRcdFx0XHR0eXBlOiB0aGlzLnF1ZXJ5LmFjdGlvbiA9PT0gJ3F1ZXJ5JyA/ICdHRVQnIDogJ1BPU1QnLFxuXHRcdFx0XHR1cmw6IG13LnV0aWwud2lraVNjcmlwdCgnYXBpJyksXG5cdFx0XHRcdGRhdGE6IHF1ZXJ5U3RyaW5nLFxuXHRcdFx0XHRkYXRhVHlwZTogdGhpcy5xdWVyeS5mb3JtYXQsXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiBtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdC4uLmNhbGxlckFqYXhQYXJhbWV0ZXJzLFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiAkLmFqYXgoYWpheHBhcmFtcykudGhlbihcblx0XHRcdFx0ZnVuY3Rpb24gb25BUElzdWNjZXNzKHJlc3BvbnNlLCBzdGF0dXNUZXh0KSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcblx0XHRcdFx0XHR0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5cdFx0XHRcdFx0dGhpcy5yZXNwb25zZVhNTCA9IHJlc3BvbnNlO1xuXHRcdFx0XHRcdC8vIExpbWl0IHRvIGZpcnN0IGVycm9yXG5cdFx0XHRcdFx0aWYgKHRoaXMucXVlcnkuZm9ybWF0ID09PSAnanNvbicpIHtcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JDb2RlID0gcmVzcG9uc2UuZXJyb3JzICYmIHJlc3BvbnNlLmVycm9yc1swXS5jb2RlO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPT09ICdodG1sJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9IHJlc3BvbnNlLmVycm9ycyAmJiByZXNwb25zZS5lcnJvcnNbMF0uaHRtbDtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9PT0gJ3dpa2l0ZXh0JyB8fCB0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID09PSAncGxhaW50ZXh0Jykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9IHJlc3BvbnNlLmVycm9ycyAmJiByZXNwb25zZS5lcnJvcnNbMF0udGV4dDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5lcnJvckNvZGUgPSAkKHJlc3BvbnNlKS5maW5kKCdlcnJvcnMgZXJyb3InKS5lcSgwKS5hdHRyKCdjb2RlJyk7XG5cdFx0XHRcdFx0XHQvLyBTdWZmaWNpZW50IGZvciBodG1sLCB3aWtpdGV4dCwgb3IgcGxhaW50ZXh0IGVycm9yZm9ybWF0c1xuXHRcdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPSAkKHJlc3BvbnNlKS5maW5kKCdlcnJvcnMgZXJyb3InKS5lcSgwKS50ZXh0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5lcnJvckNvZGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHQvLyB0aGUgQVBJIGRpZG4ndCBsaWtlIHdoYXQgd2UgdG9sZCBpdCwgZS5nLiwgYmFkIGVkaXQgdG9rZW4gb3IgYW4gZXJyb3IgY3JlYXRpbmcgYSBwYWdlXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yZXR1cm5FcnJvcihjYWxsZXJBamF4UGFyYW1ldGVycyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGludm9rZSBzdWNjZXNzIGNhbGxiYWNrIGlmIG9uZSB3YXMgc3VwcGxpZWRcblx0XHRcdFx0XHRpZiAodGhpcy5vblN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdC8vIHNldCB0aGUgY2FsbGJhY2sgY29udGV4dCB0byB0aGlzLnBhcmVudCBmb3IgbmV3IGNvZGUgYW5kIHN1cHBseSB0aGUgQVBJIG9iamVjdFxuXHRcdFx0XHRcdFx0Ly8gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBjYWxsYmFjayAoZm9yIGxlZ2FjeSBjb2RlKVxuXHRcdFx0XHRcdFx0dGhpcy5vblN1Y2Nlc3MuY2FsbCh0aGlzLnBhcmVudCwgdGhpcyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGVsZW0uaW5mbygn5a6M5oiQJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkKCk7XG5cdFx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlV2l0aCh0aGlzLnBhcmVudCwgW3RoaXNdKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Ly8gb25seSBuZXR3b3JrIGFuZCBzZXJ2ZXIgZXJyb3JzIHJlYWNoIGhlcmUgLSBjb21wbGFpbnRzIGZyb20gdGhlIEFQSSBpdHNlbGYgYXJlIGNhdWdodCBpbiBzdWNjZXNzKClcblx0XHRcdFx0ZnVuY3Rpb24gb25BUElmYWlsdXJlKGVycm9yLCBzdGF0dXNUZXh0LCBlcnJvclRocm93bikge1xuXHRcdFx0XHRcdHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XG5cdFx0XHRcdFx0dGhpcy5lcnJvclRocm93biA9IGVycm9yVGhyb3duOyAvLyBmcmVxdWVudGx5IHVuZGVmaW5lZFxuXHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID1cblx0XHRcdFx0XHRcdHN0YXR1c1RleHQgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCflnKjosIPnlKhBUEnml7blj5HnlJ/kuobplJnor6/igJwnLCAn5Zyo5ZG85Y+rQVBJ5pmC55m855Sf5LqG6Yyv6Kqk44CMJykgK1xuXHRcdFx0XHRcdFx0ZXJyb3Iuc3RhdHVzVGV4dCArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneOAgicsICfjgI3jgIInKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yZXR1cm5FcnJvcigpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0cmV0dXJuRXJyb3IoY2FsbGVyQWpheFBhcmFtZXRlcnMpIHtcblx0XHRcdGlmICh0aGlzLmVycm9yQ29kZSA9PT0gJ2JhZHRva2VuJyAmJiAhdGhpcy5iYWR0b2tlblJldHJ5KSB7XG5cdFx0XHRcdHRoaXMuc3RhdGVsZW0ud2Fybih3aW5kb3cud2dVTFMoJ+aXoOaViOS7pOeJjO+8jOiOt+WPluaWsOeahOS7pOeJjOW5tumHjeivleKApuKApicsICfnhKHmlYjmrIrmnZbvvIzlj5blvpfmlrDnmoTmrIrmnZbkuKbph43oqabigKbigKYnKSk7XG5cdFx0XHRcdHRoaXMuYmFkdG9rZW5SZXRyeSA9IHRydWU7XG5cdFx0XHRcdC8vIEdldCBhIG5ldyBDU1JGIHRva2VuIGFuZCByZXRyeS4gSWYgdGhlIG9yaWdpbmFsIGFjdGlvbiBuZWVkcyBhIGRpZmZlcmVudFxuXHRcdFx0XHQvLyB0eXBlIG9mIGFjdGlvbiB0aGFuIENTUkYsIHdlIGRvIG9uZSBwb2ludGxlc3MgcmV0cnkgYmVmb3JlIGJhaWxpbmcgb3V0XG5cdFx0XHRcdHJldHVybiBNb3JlYml0cy53aWtpLmFwaS5nZXRUb2tlbigpLnRoZW4oKHRva2VuKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5xdWVyeS50b2tlbiA9IHRva2VuO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnBvc3QoY2FsbGVyQWpheFBhcmFtZXRlcnMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGVsZW0uZXJyb3IoYCR7dGhpcy5lcnJvclRleHR977yIJHt0aGlzLmVycm9yQ29kZX3vvIlgKTtcblx0XHRcdC8vIGludm9rZSBmYWlsdXJlIGNhbGxiYWNrIGlmIG9uZSB3YXMgc3VwcGxpZWRcblx0XHRcdGlmICh0aGlzLm9uRXJyb3IpIHtcblx0XHRcdFx0Ly8gc2V0IHRoZSBjYWxsYmFjayBjb250ZXh0IHRvIHRoaXMucGFyZW50IGZvciBuZXcgY29kZSBhbmQgc3VwcGx5IHRoZSBBUEkgb2JqZWN0XG5cdFx0XHRcdC8vIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2sgZm9yIGxlZ2FjeSBjb2RlXG5cdFx0XHRcdHRoaXMub25FcnJvci5jYWxsKHRoaXMucGFyZW50LCB0aGlzKTtcblx0XHRcdH1cblx0XHRcdC8vIGRvbid0IGNvbXBsZXRlIHRoZSBhY3Rpb24gc28gdGhhdCB0aGUgZXJyb3IgcmVtYWlucyBkaXNwbGF5ZWRcblx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0V2l0aCh0aGlzLnBhcmVudCwgW3RoaXNdKTtcblx0XHR9LFxuXHRcdGdldFN0YXR1c0VsZW1lbnQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZWxlbTtcblx0XHR9LFxuXHRcdGdldEVycm9yQ29kZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLmVycm9yQ29kZTtcblx0XHR9LFxuXHRcdGdldEVycm9yVGV4dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmVycm9yVGV4dDtcblx0XHR9LFxuXHRcdGdldFhNTCgpIHtcblx0XHRcdC8vIHJldGFpbmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgdXNlIGdldFJlc3BvbnNlKCkgaW5zdGVhZFxuXHRcdFx0cmV0dXJuIHRoaXMucmVzcG9uc2VYTUw7XG5cdFx0fSxcblx0XHRnZXRSZXNwb25zZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJlc3BvbnNlO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgd2lraXRleHQgZnJvbSBhIHBhZ2UuIENhY2hpbmcgZW5hYmxlZCwgZHVyYXRpb24gMSBkYXkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5nZXRDYWNoZWRKc29uID0gKHRpdGxlKSA9PiB7XG5cdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0fTtcblxuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMud2lraS5hcGkoJycsIHF1ZXJ5KS5wb3N0KCkudGhlbigoYXBpb2JqKSA9PiB7XG5cdFx0XHRhcGlvYmouZ2V0U3RhdHVzRWxlbWVudCgpLnVubGluaygpO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhcGlvYmouZ2V0UmVzcG9uc2UoKTtcblx0XHRcdGNvbnN0IHdpa2l0ZXh0ID0gcmVzcG9uc2UucXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW4uY29udGVudDtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKHdpa2l0ZXh0KTtcblx0XHR9KTtcblx0fTtcblx0bGV0IG1vcmViaXRzV2lraUFwaVVzZXJBZ2VudCA9ICdRaXV3ZW4vMS4xIChtb3JlYml0cy5qcyknO1xuXHQvKipcblx0ICogU2V0IHRoZSBjdXN0b20gdXNlciBhZ2VudCBoZWFkZXIsIHdoaWNoIGlzIHVzZWQgZm9yIHNlcnZlci1zaWRlIGxvZ2dpbmcuXG5cdCAqIE5vdGUgdGhhdCBkb2luZyBzbyB3aWxsIHNldCB0aGUgdXNlcmFnZW50IGZvciBldmVyeSBgTW9yZWJpdHMud2lraS5hcGlgXG5cdCAqIHByb2Nlc3MgcGVyZm9ybWVkIHRoZXJlYWZ0ZXIuXG5cdCAqXG5cdCAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbGlzdHMud2lraW1lZGlhLm9yZy9waXBlcm1haWwvbWVkaWF3aWtpLWFwaS1hbm5vdW5jZS8yMDE0LU5vdmVtYmVyLzAwMDA3NS5odG1sfVxuXHQgKiBmb3Igb3JpZ2luYWwgYW5ub3VuY2VtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraS5hcGlcblx0ICogQHBhcmFtIHtzdHJpbmd9IFt1YT1RaXV3ZW4vMS4xIChtb3JlYml0cy5qcyldIC0gVXNlciBhZ2VudC4gIFRoZSBkZWZhdWx0XG5cdCAqIHZhbHVlIG9mIGBtb3JlYml0cy5qc2Agd2lsbCBiZSBhcHBlbmRlZCB0byBhbnkgcHJvdmlkZWRcblx0ICogdmFsdWUuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmFwaS5zZXRBcGlVc2VyQWdlbnQgPSAodWEpID0+IHtcblx0XHRtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQgPSBgUWl1d2VuLzEuMSAobW9yZWJpdHMuanMke3VhID8gYDsgJHt1YX1gIDogJyd9KWA7XG5cdH07XG5cdC8qKlxuXHQgKiBDaGFuZ2UvcmV2aXNpb24gdGFnIGFwcGxpZWQgdG8gTW9yZWJpdHMgYWN0aW9ucyB3aGVuIG5vIG90aGVyIHRhZ3MgYXJlIHNwZWNpZmllZC5cblx0ICogVW51c2VkIGJ5IGRlZmF1bHQuXG5cdCAqXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraS5hcGlcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdGNvbnN0IG1vcmViaXRzV2lraUNoYW5nZVRhZyA9ICcnO1xuXHQvKipcblx0ICogR2V0IGEgbmV3IENTUkYgdG9rZW4gb24gZW5jb3VudGVyaW5nIHRva2VuIGVycm9ycy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kuYXBpXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IE1lZGlhV2lraSBDU1JGIHRva2VuLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hcGkuZ2V0VG9rZW4gPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9rZW5BcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkod2luZG93LndnVUxTKCfojrflj5bku6TniYwnLCAn5Y+W5b6X5qyK5p2WJyksIHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRva2VuQXBpLnBvc3QoKS50aGVuKChhcGlvYmopID0+IHtcblx0XHRcdHJldHVybiBhcGlvYmoucmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHR9KTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLnBhZ2UgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogVXNlIHRoZSBNZWRpYVdpa2kgQVBJIHRvIGxvYWQgYSBwYWdlIGFuZCBvcHRpb25hbGx5IGVkaXQgaXQsIG1vdmUgaXQsIGV0Yy5cblx0ICpcblx0ICogQ2FsbGVycyBhcmUgbm90IHBlcm1pdHRlZCB0byBkaXJlY3RseSBhY2Nlc3MgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBjbGFzcyFcblx0ICogQWxsIHByb3BlcnR5IGFjY2VzcyBpcyB0aHJvdWdoIHRoZSBhcHByb3ByaWF0ZSBnZXRfX18oKSBvciBzZXRfX18oKSBtZXRob2QuXG5cdCAqXG5cdCAqIENhbGxlcnMgc2hvdWxkIHNldCB7QGxpbmsgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlfSBhbmQge0BsaW5rIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0fVxuXHQgKiBiZWZvcmUgdGhlIGZpcnN0IGNhbGwgdG8ge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZS5sb2FkKCl9LlxuXHQgKlxuXHQgKiBFYWNoIG9mIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgdGFrZXMgb25lIHBhcmFtZXRlciwgd2hpY2ggaXMgYVxuXHQgKiByZWZlcmVuY2UgdG8gdGhlIE1vcmViaXRzLndpa2kucGFnZSBvYmplY3QgdGhhdCByZWdpc3RlcmVkIHRoZSBjYWxsYmFjay5cblx0ICogQ2FsbGJhY2sgZnVuY3Rpb25zIG1heSBpbnZva2UgYW55IE1vcmViaXRzLndpa2kucGFnZSBwcm90b3R5cGUgbWV0aG9kIHVzaW5nIHRoaXMgcmVmZXJlbmNlLlxuXHQgKlxuXHQgKlxuXHQgKiBDYWxsIHNlcXVlbmNlIGZvciBjb21tb24gb3BlcmF0aW9ucyAob3B0aW9uYWwgZmluYWwgdXNlciBjYWxsYmFja3Mgbm90IHNob3duKTpcblx0ICpcblx0ICogLSBFZGl0IGN1cnJlbnQgY29udGVudHMgb2YgYSBwYWdlIChubyBlZGl0IGNvbmZsaWN0KTpcblx0ICogYC5sb2FkKHVzZXJUZXh0RWRpdENhbGxiYWNrKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT5cblx0ICogY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiB1c2VyVGV4dEVkaXRDYWxsYmFjaygpIC0+XG5cdCAqIC5zYXZlKCkgLT4gY3R4LnNhdmVBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mblNhdmVTdWNjZXNzKClgXG5cdCAqXG5cdCAqIC0gRWRpdCBjdXJyZW50IGNvbnRlbnRzIG9mIGEgcGFnZSAod2l0aCBlZGl0IGNvbmZsaWN0KTpcblx0ICogYC5sb2FkKHVzZXJUZXh0RWRpdENhbGxiYWNrKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT5cblx0ICogY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiB1c2VyVGV4dEVkaXRDYWxsYmFjaygpIC0+XG5cdCAqIC5zYXZlKCkgLT4gY3R4LnNhdmVBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+XG5cdCAqIGN0eC5mblNhdmVFcnJvcigpIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPlxuXHQgKiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IHVzZXJUZXh0RWRpdENhbGxiYWNrKCkgLT4gLnNhdmUoKSAtPlxuXHQgKiBjdHguc2F2ZUFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuU2F2ZVN1Y2Nlc3MoKWBcblx0ICpcblx0ICogLSBBcHBlbmQgdG8gYSBwYWdlIChzaW1pbGFyIGZvciBwcmVwZW5kIGFuZCBuZXdTZWN0aW9uKTpcblx0ICogYC5hcHBlbmQoKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT5cblx0ICogY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiBjdHguZm5BdXRvU2F2ZSgpIC0+IC5zYXZlKCkgLT4gY3R4LnNhdmVBcGkucG9zdCgpIC0+XG5cdCAqIGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mblNhdmVTdWNjZXNzKClgXG5cdCAqXG5cdCAqIE5vdGVzOlxuXHQgKiAxLiBBbGwgZnVuY3Rpb25zIGZvbGxvd2luZyBNb3JlYml0cy53aWtpLmFwaS5wb3N0KCkgYXJlIGludm9rZWQgYXN5bmNocm9ub3VzbHkgZnJvbSB0aGUgalF1ZXJ5IEFKQVggbGlicmFyeS5cblx0ICogMi4gVGhlIHNlcXVlbmNlIGZvciBhcHBlbmQvcHJlcGVuZC9uZXdTZWN0aW9uIGNvdWxkIGJlIHNsaWdodGx5IHNob3J0ZW5lZCxcblx0ICogYnV0IGl0IHdvdWxkIHJlcXVpcmUgc2lnbmlmaWNhbnQgZHVwbGljYXRpb24gb2YgY29kZSBmb3IgbGl0dGxlIGJlbmVmaXQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFnZU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcGFnZSwgcHJlZml4ZWQgYnkgdGhlIG5hbWVzcGFjZSAoaWYgYW55KS5cblx0ICogRm9yIHRoZSBjdXJyZW50IHBhZ2UsIHVzZSBgbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpYC5cblx0ICogQHBhcmFtIHtzdHJpbmd8TW9yZWJpdHMuc3RhdHVzfSBbc3RhdHVzXSAtIEEgc3RyaW5nIGRlc2NyaWJpbmcgdGhlIGFjdGlvbiBhYm91dCB0byBiZSB1bmRlcnRha2VuLFxuXHQgKiBvciBhIE1vcmViaXRzLnN0YXR1cyBvYmplY3Rcblx0ICovXG5cdE1vcmViaXRzLndpa2kucGFnZSA9IGZ1bmN0aW9uIChwYWdlTmFtZSwgc3RhdHVzKSB7XG5cdFx0aWYgKCFzdGF0dXMpIHtcblx0XHRcdHN0YXR1cyA9IHdpbmRvdy53Z1VMUygn5omT5byA6aG16Z2i4oCcJywgJ+aJk+mWi+mggemdouOAjCcpICsgcGFnZU5hbWUgKyB3aW5kb3cud2dVTFMoJ+KAnScsICfjgI0nKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUHJpdmF0ZSBjb250ZXh0IHZhcmlhYmxlcy5cblx0XHQgKlxuXHRcdCAqIFRoaXMgY29udGV4dCBpcyBub3QgdmlzaWJsZSB0byB0aGUgb3V0c2lkZSwgdGh1cyBhbGwgdGhlIGRhdGEgaGVyZVxuXHRcdCAqIG11c3QgYmUgYWNjZXNzZWQgdmlhIGdldHRlciBhbmQgc2V0dGVyIGZ1bmN0aW9ucy5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0Y29uc3QgY3R4ID0ge1xuXHRcdFx0Ly8gYmFja2luZyBmaWVsZHMgZm9yIHB1YmxpYyBwcm9wZXJ0aWVzXG5cdFx0XHRwYWdlTmFtZSxcblx0XHRcdHBhZ2VFeGlzdHM6IGZhbHNlLFxuXHRcdFx0ZWRpdFN1bW1hcnk6IG51bGwsXG5cdFx0XHRjaGFuZ2VUYWdzOiBudWxsLFxuXHRcdFx0dGVzdEFjdGlvbnM6IG51bGwsXG5cdFx0XHQvLyBhcnJheSBpZiBhbnkgdmFsaWQgYWN0aW9uc1xuXHRcdFx0Y2FsbGJhY2tQYXJhbWV0ZXJzOiBudWxsLFxuXHRcdFx0c3RhdHVzRWxlbWVudDogc3RhdHVzIGluc3RhbmNlb2YgTW9yZWJpdHMuc3RhdHVzID8gc3RhdHVzIDogbmV3IE1vcmViaXRzLnN0YXR1cyhzdGF0dXMpLFxuXHRcdFx0Ly8gLSBlZGl0XG5cdFx0XHRwYWdlVGV4dDogbnVsbCxcblx0XHRcdGVkaXRNb2RlOiAnYWxsJyxcblx0XHRcdC8vIHNhdmUoKSByZXBsYWNlcyBlbnRpcmUgY29udGVudHMgb2YgdGhlIHBhZ2UgYnkgZGVmYXVsdFxuXHRcdFx0YXBwZW5kVGV4dDogbnVsbCxcblx0XHRcdC8vIGNhbid0IHJldXNlIHBhZ2VUZXh0IGZvciB0aGlzIGJlY2F1c2UgcGFnZVRleHQgaXMgbmVlZGVkIHRvIGZvbGxvdyBhIHJlZGlyZWN0XG5cdFx0XHRwcmVwZW5kVGV4dDogbnVsbCxcblx0XHRcdC8vIGNhbid0IHJldXNlIHBhZ2VUZXh0IGZvciB0aGlzIGJlY2F1c2UgcGFnZVRleHQgaXMgbmVlZGVkIHRvIGZvbGxvdyBhIHJlZGlyZWN0XG5cdFx0XHRuZXdTZWN0aW9uVGV4dDogbnVsbCxcblx0XHRcdG5ld1NlY3Rpb25UaXRsZTogbnVsbCxcblx0XHRcdGNyZWF0ZU9wdGlvbjogbnVsbCxcblx0XHRcdG1pbm9yRWRpdDogZmFsc2UsXG5cdFx0XHRib3RFZGl0OiBmYWxzZSxcblx0XHRcdHBhZ2VTZWN0aW9uOiBudWxsLFxuXHRcdFx0bWF4Q29uZmxpY3RSZXRyaWVzOiAyLFxuXHRcdFx0bWF4UmV0cmllczogMixcblx0XHRcdGZvbGxvd1JlZGlyZWN0OiBmYWxzZSxcblx0XHRcdGZvbGxvd0Nyb3NzTnNSZWRpcmVjdDogdHJ1ZSxcblx0XHRcdHdhdGNobGlzdE9wdGlvbjogJ25vY2hhbmdlJyxcblx0XHRcdHdhdGNobGlzdEV4cGlyeTogbnVsbCxcblx0XHRcdGNyZWF0b3I6IG51bGwsXG5cdFx0XHR0aW1lc3RhbXA6IG51bGwsXG5cdFx0XHQvLyAtIHJldmVydFxuXHRcdFx0cmV2ZXJ0T2xkSUQ6IG51bGwsXG5cdFx0XHQvLyAtIG1vdmVcblx0XHRcdG1vdmVEZXN0aW5hdGlvbjogbnVsbCxcblx0XHRcdG1vdmVUYWxrUGFnZTogZmFsc2UsXG5cdFx0XHRtb3ZlU3VicGFnZXM6IGZhbHNlLFxuXHRcdFx0bW92ZVN1cHByZXNzUmVkaXJlY3Q6IGZhbHNlLFxuXHRcdFx0Ly8gLSBwcm90ZWN0XG5cdFx0XHRwcm90ZWN0RWRpdDogbnVsbCxcblx0XHRcdHByb3RlY3RNb3ZlOiBudWxsLFxuXHRcdFx0cHJvdGVjdENyZWF0ZTogbnVsbCxcblx0XHRcdHByb3RlY3RDYXNjYWRlOiBudWxsLFxuXHRcdFx0Ly8gLSBjcmVhdGlvbiBsb29rdXBcblx0XHRcdGxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvcjogZmFsc2UsXG5cdFx0XHQvLyBpbnRlcm5hbCBzdGF0dXNcblx0XHRcdHBhZ2VMb2FkZWQ6IGZhbHNlLFxuXHRcdFx0Y3NyZlRva2VuOiBudWxsLFxuXHRcdFx0bG9hZFRpbWU6IG51bGwsXG5cdFx0XHRsYXN0RWRpdFRpbWU6IG51bGwsXG5cdFx0XHRwYWdlSUQ6IG51bGwsXG5cdFx0XHRjb250ZW50TW9kZWw6IG51bGwsXG5cdFx0XHRyZXZlcnRDdXJJRDogbnVsbCxcblx0XHRcdHJldmVydFVzZXI6IG51bGwsXG5cdFx0XHR3YXRjaGVkOiBmYWxzZSxcblx0XHRcdGZ1bGx5UHJvdGVjdGVkOiBmYWxzZSxcblx0XHRcdHN1cHByZXNzUHJvdGVjdFdhcm5pbmc6IGZhbHNlLFxuXHRcdFx0Y29uZmxpY3RSZXRyaWVzOiAwLFxuXHRcdFx0cmV0cmllczogMCxcblx0XHRcdC8vIGNhbGxiYWNrc1xuXHRcdFx0b25Mb2FkU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTG9hZEZhaWx1cmU6IG51bGwsXG5cdFx0XHRvblNhdmVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25TYXZlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uTG9va3VwQ3JlYXRpb25TdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Mb29rdXBDcmVhdGlvbkZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbk1vdmVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Nb3ZlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uRGVsZXRlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uRGVsZXRlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uVW5kZWxldGVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25VbmRlbGV0ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvblByb3RlY3RTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Qcm90ZWN0RmFpbHVyZTogbnVsbCxcblx0XHRcdC8vIGludGVybmFsIG9iamVjdHNcblx0XHRcdGxvYWRRdWVyeTogbnVsbCxcblx0XHRcdGxvYWRBcGk6IG51bGwsXG5cdFx0XHRzYXZlQXBpOiBudWxsLFxuXHRcdFx0bG9va3VwQ3JlYXRpb25BcGk6IG51bGwsXG5cdFx0XHRtb3ZlQXBpOiBudWxsLFxuXHRcdFx0bW92ZVByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHRwYXRyb2xBcGk6IG51bGwsXG5cdFx0XHRwYXRyb2xQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0ZGVsZXRlQXBpOiBudWxsLFxuXHRcdFx0ZGVsZXRlUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdHVuZGVsZXRlQXBpOiBudWxsLFxuXHRcdFx0dW5kZWxldGVQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0cHJvdGVjdEFwaTogbnVsbCxcblx0XHRcdHByb3RlY3RQcm9jZXNzQXBpOiBudWxsLFxuXHRcdH07XG5cdFx0Y29uc3QgZW1wdHlGdW5jdGlvbiA9ICgpID0+IHt9O1xuXHRcdC8qKlxuXHRcdCAqIExvYWRzIHRoZSB0ZXh0IGZvciB0aGUgcGFnZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IG9uU3VjY2VzcyAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBsb2FkIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbG9hZCBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLmxvYWQgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vbkxvYWRTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdC8vIE5lZWQgdG8gYmUgYWJsZSB0byBkbyBzb21ldGhpbmcgYWZ0ZXIgdGhlIHBhZ2UgbG9hZHNcblx0XHRcdGlmICghb25TdWNjZXNzKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogbm8gb25TdWNjZXNzIGNhbGxiYWNrIHByb3ZpZGVkIHRvIGxvYWQoKSEnKTtcblx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5sb2FkUXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ2luZm98cmV2aXNpb25zJyxcblx0XHRcdFx0aW5wcm9wOiAnd2F0Y2hlZCcsXG5cdFx0XHRcdGludGVzdGFjdGlvbnM6ICdlZGl0Jyxcblx0XHRcdFx0Ly8gY2FuIGJlIGV4cGFuZGVkXG5cdFx0XHRcdGN1cnRpbWVzdGFtcDogJycsXG5cdFx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Ly8gZG9uJ3QgbmVlZCBydmxpbWl0PTEgYmVjYXVzZSB3ZSBkb24ndCBuZWVkIHJ2c3RhcnRpZCBoZXJlIGFuZCBvbmx5IG9uZSBhY3R1YWwgcmV2IGlzIHJldHVybmVkIGJ5IGRlZmF1bHRcblx0XHRcdH07XG5cblx0XHRcdGlmIChjdHguZWRpdE1vZGUgPT09ICdhbGwnKSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZwcm9wID0gJ2NvbnRlbnR8dGltZXN0YW1wJzsgLy8gZ2V0IHRoZSBwYWdlIGNvbnRlbnQgYXQgdGhlIHNhbWUgdGltZSwgaWYgbmVlZGVkXG5cdFx0XHR9IGVsc2UgaWYgKGN0eC5lZGl0TW9kZSA9PT0gJ3JldmVydCcpIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydnByb3AgPSAndGltZXN0YW1wJztcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydmxpbWl0ID0gMTtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydnN0YXJ0aWQgPSBjdHgucmV2ZXJ0T2xkSUQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucmVkaXJlY3RzID0gJyc7IC8vIGZvbGxvdyBhbGwgcmVkaXJlY3RzXG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgY3R4LnBhZ2VTZWN0aW9uID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2c2VjdGlvbiA9IGN0eC5wYWdlU2VjdGlvbjtcblx0XHRcdH1cblx0XHRcdGlmIChNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LmlucHJvcCArPSAnfHByb3RlY3Rpb24nO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmxvYWRBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5oqT5Y+W6aG16Z2i4oCm4oCmJywgJ+aKk+WPlumggemdouKApuKApicpLFxuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LFxuXHRcdFx0XHRmbkxvYWRTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgubG9hZEFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgubG9hZEFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTYXZlcyB0aGUgdGV4dCBmb3IgdGhlIHBhZ2UgdG8gV2lraXBlZGlhLlxuXHRcdCAqIE11c3QgYmUgcHJlY2VkZWQgYnkgc3VjY2Vzc2Z1bGx5IGNhbGxpbmcgYGxvYWQoKWAuXG5cdFx0ICpcblx0XHQgKiBXYXJuaW5nOiBDYWxsaW5nIGBzYXZlKClgIGNhbiByZXN1bHQgaW4gYWRkaXRpb25hbCBjYWxscyB0byB0aGVcblx0XHQgKiBwcmV2aW91cyBgbG9hZCgpYCBjYWxsYmFja3MgdG8gcmVjb3ZlciBmcm9tIGVkaXQgY29uZmxpY3RzISBJbiB0aGlzXG5cdFx0ICogY2FzZSwgY2FsbGVycyBtdXN0IG1ha2UgdGhlIHNhbWUgZWRpdCB0byB0aGUgbmV3IHBhZ2VUZXh0IGFuZFxuXHRcdCAqIHJlLWludm9rZSBgc2F2ZSgpYC4gIFRoaXMgYmVoYXZpb3IgY2FuIGJlIGRpc2FibGVkIHdpdGhcblx0XHQgKiBgc2V0TWF4Q29uZmxpY3RSZXRyaWVzKDApYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIHNhdmUgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBzYXZlIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2F2ZSA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0Ly8gYXJlIHdlIGdldHRpbmcgb3VyIGVkaXRpbmcgdG9rZW4gZnJvbSBtdy51c2VyLnRva2Vucz9cblx0XHRcdGNvbnN0IGNhblVzZU13VXNlclRva2VuID0gZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpO1xuXHRcdFx0aWYgKCFjdHgucGFnZUxvYWRlZCAmJiAhY2FuVXNlTXdVc2VyVG9rZW4pIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBhdHRlbXB0IHRvIHNhdmUgYSBwYWdlIHRoYXQgaGFzIG5vdCBiZWVuIGxvYWRlZCEnKTtcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LmVkaXRTdW1tYXJ5KSB7XG5cdFx0XHRcdC8vIG5ldyBzZWN0aW9uIG1vZGUgYWxsb3dzIChuYXksIGVuY291cmFnZXMpIHVzaW5nIHRoZVxuXHRcdFx0XHQvLyB0aXRsZSBhcyB0aGUgZWRpdCBzdW1tYXJ5LCBidXQgdGhlIHF1ZXJ5IG5lZWRzXG5cdFx0XHRcdC8vIGVkaXRTdW1tYXJ5IHRvIGJlIHVuZGVmaW5lZCBvciAnJywgbm90IG51bGxcblx0XHRcdFx0aWYgKGN0eC5lZGl0TW9kZSA9PT0gJ25ldycgJiYgY3R4Lm5ld1NlY3Rpb25UaXRsZSkge1xuXHRcdFx0XHRcdGN0eC5lZGl0U3VtbWFyeSA9ICcnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogZWRpdCBzdW1tYXJ5IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBzaG91bGRuJ3QgaGFwcGVuIGlmIGNhblVzZU13VXNlclRva2VuID09PSB0cnVlXG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN0eC5mdWxseVByb3RlY3RlZCAmJlxuXHRcdFx0XHQhY3R4LnN1cHByZXNzUHJvdGVjdFdhcm5pbmcgJiZcblx0XHRcdFx0IWNvbmZpcm0oXG5cdFx0XHRcdFx0Y3R4LmZ1bGx5UHJvdGVjdGVkID09PSAnaW5maW5pdHknXG5cdFx0XHRcdFx0XHQ/IHdpbmRvdy53Z1VMUygn5oKo5Y2z5bCG57yW6L6R5YWo5L+d5oqk6aG16Z2i4oCcJywgJ+aCqOWNs+Wwh+e3qOi8r+WFqOS/neitt+mggemdouOAjCcpICtcblx0XHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHRcdCfigJ3vvIjml6DpmZDmnJ/vvInjgIJcXG5cXG7ljZXlh7vnoa7lrprku6Xnoa7lrprvvIzmiJbljZXlh7vlj5bmtojku6Xlj5bmtojmk43kvZzjgIInLFxuXHRcdFx0XHRcdFx0XHRcdFx0J+OAje+8iOeEoemZkOacn++8ieOAglxcblxcbum7nuaTiueiuuWumuS7peeiuuWumu+8jOaIlum7nuaTiuWPlua2iOS7peWPlua2iOaTjeS9nOOAgidcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQ6IGAke1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5oKo5Y2z5bCG57yW6L6R5YWo5L+d5oqk6aG16Z2i4oCcJywgJ+aCqOWNs+Wwh+e3qOi8r+WFqOS/neitt+mggemdouOAjCcpICtcblx0XHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd77yI5Yiw5pyf77yaJywgJ+OAje+8iOWIsOacn++8micpICtcblx0XHRcdFx0XHRcdFx0XHRuZXcgTW9yZWJpdHMuZGF0ZShjdHguZnVsbHlQcm90ZWN0ZWQpLmNhbGVuZGFyKCd1dGMnKVxuXHRcdFx0XHRcdFx0XHR9IChVVEMp77yJ44CCXFxuXFxuJHt3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J+WNleWHu+ehruWumuS7peehruWumu+8jOaIluWNleWHu+WPlua2iOS7peWPlua2iOaTjeS9nOOAgicsXG5cdFx0XHRcdFx0XHRcdFx0J+m7nuaTiueiuuWumuS7peeiuuWumu+8jOaIlum7nuaTiuWPlua2iOS7peWPlua2iOaTjeS9nOOAgidcblx0XHRcdFx0XHRcdFx0KX1gXG5cdFx0XHRcdClcblx0XHRcdCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+W3suWPlua2iOWvueWFqOS/neaKpOmhtemdoueahOe8lui+keOAgicsICflt7Llj5bmtojlsI3lhajkv53orbfpoIHpnaLnmoTnt6jovK/jgIInKSk7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgucmV0cmllcyA9IDA7XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdHRpdGxlOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdHN1bW1hcnk6IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0dG9rZW46IGNhblVzZU13VXNlclRva2VuID8gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKSA6IGN0eC5jc3JmVG9rZW4sXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgY3R4LnBhZ2VTZWN0aW9uID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRxdWVyeS5zZWN0aW9uID0gY3R4LnBhZ2VTZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0Ly8gU2V0IG1pbm9yIGVkaXQgYXR0cmlidXRlLiBJZiB0aGVzZSBwYXJhbWV0ZXJzIGFyZSBwcmVzZW50IHdpdGggYW55IHZhbHVlLCBpdCBpcyBpbnRlcnByZXRlZCBhcyB0cnVlXG5cdFx0XHRpZiAoY3R4Lm1pbm9yRWRpdCkge1xuXHRcdFx0XHRxdWVyeS5taW5vciA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRxdWVyeS5ub3RtaW5vciA9IHRydWU7IC8vIGZvcmNlIFR3aW5rbGUgY29uZmlnIHRvIG92ZXJyaWRlIHVzZXIgcHJlZmVyZW5jZSBzZXR0aW5nIGZvciBcImFsbCBlZGl0cyBhcmUgbWlub3JcIlxuXHRcdFx0fVxuXHRcdFx0Ly8gU2V0IGJvdCBlZGl0IGF0dHJpYnV0ZS4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgcHJlc2VudCB3aXRoIGFueSB2YWx1ZSwgaXQgaXMgaW50ZXJwcmV0ZWQgYXMgdHJ1ZVxuXHRcdFx0aWYgKGN0eC5ib3RFZGl0KSB7XG5cdFx0XHRcdHF1ZXJ5LmJvdCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKGN0eC5lZGl0TW9kZSkge1xuXHRcdFx0XHRjYXNlICdhcHBlbmQnOlxuXHRcdFx0XHRcdGlmIChjdHguYXBwZW5kVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBhcHBlbmQgdGV4dCBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHF1ZXJ5LmFwcGVuZHRleHQgPSBjdHguYXBwZW5kVGV4dDsgLy8gdXNlIG1vZGUgdG8gYXBwZW5kIHRvIGN1cnJlbnQgcGFnZSBjb250ZW50c1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdwcmVwZW5kJzpcblx0XHRcdFx0XHRpZiAoY3R4LnByZXBlbmRUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IHByZXBlbmQgdGV4dCBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHF1ZXJ5LnByZXBlbmR0ZXh0ID0gY3R4LnByZXBlbmRUZXh0OyAvLyB1c2UgbW9kZSB0byBwcmVwZW5kIHRvIGN1cnJlbnQgcGFnZSBjb250ZW50c1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICduZXcnOlxuXHRcdFx0XHRcdGlmICghY3R4Lm5ld1NlY3Rpb25UZXh0KSB7XG5cdFx0XHRcdFx0XHQvLyBBUEkgZG9lc24ndCBhbGxvdyBlbXB0eSBuZXcgc2VjdGlvbiB0ZXh0XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5ldyBzZWN0aW9uIHRleHQgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRxdWVyeS5zZWN0aW9uID0gJ25ldyc7XG5cdFx0XHRcdFx0cXVlcnkudGV4dCA9IGN0eC5uZXdTZWN0aW9uVGV4dDsgLy8gYWRkIGEgbmV3IHNlY3Rpb24gdG8gY3VycmVudCBwYWdlXG5cdFx0XHRcdFx0cXVlcnkuc2VjdGlvbnRpdGxlID0gY3R4Lm5ld1NlY3Rpb25UaXRsZSB8fCBjdHguZWRpdFN1bW1hcnk7IC8vIGRvbmUgYnkgdGhlIEFQSSwgYnV0IG5vbi0nJyB2YWx1ZXMgd291bGQgZ2V0IHRyZWF0ZWQgYXMgdGV4dFxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZXZlcnQnOlxuXHRcdFx0XHRcdHF1ZXJ5LnVuZG8gPSBjdHgucmV2ZXJ0Q3VySUQ7XG5cdFx0XHRcdFx0cXVlcnkudW5kb2FmdGVyID0gY3R4LnJldmVydE9sZElEO1xuXHRcdFx0XHRcdGlmIChjdHgubGFzdEVkaXRUaW1lKSB7XG5cdFx0XHRcdFx0XHRxdWVyeS5iYXNldGltZXN0YW1wID0gY3R4Lmxhc3RFZGl0VGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGVkaXRlZCBzaW5jZSBpdCB3YXMgbG9hZGVkXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cXVlcnkuc3RhcnR0aW1lc3RhbXAgPSBjdHgubG9hZFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBkZWxldGVkIHNpbmNlIGl0IHdhcyBsb2FkZWQgKGRvbid0IHJlY3JlYXRlIGJhZCBzdHVmZilcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyAnYWxsJ1xuXHRcdFx0XHRcdHF1ZXJ5LnRleHQgPSBjdHgucGFnZVRleHQ7IC8vIHJlcGxhY2UgZW50aXJlIGNvbnRlbnRzIG9mIHRoZSBwYWdlXG5cdFx0XHRcdFx0aWYgKGN0eC5sYXN0RWRpdFRpbWUpIHtcblx0XHRcdFx0XHRcdHF1ZXJ5LmJhc2V0aW1lc3RhbXAgPSBjdHgubGFzdEVkaXRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZWRpdGVkIHNpbmNlIGl0IHdhcyBsb2FkZWRcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRxdWVyeS5zdGFydHRpbWVzdGFtcCA9IGN0eC5sb2FkVGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGRlbGV0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZCAoZG9uJ3QgcmVjcmVhdGUgYmFkIHN0dWZmKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFsncmVjcmVhdGUnLCAnY3JlYXRlb25seScsICdub2NyZWF0ZSddLmluY2x1ZGVzKGN0eC5jcmVhdGVPcHRpb24pKSB7XG5cdFx0XHRcdHF1ZXJ5W2N0eC5jcmVhdGVPcHRpb25dID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2FuVXNlTXdVc2VyVG9rZW4gJiYgY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdHF1ZXJ5LnJlZGlyZWN0ID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGN0eC5zYXZlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S/neWtmOmhtemdouKApuKApicsICflhLLlrZjpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGZuU2F2ZVN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRmblNhdmVFcnJvclxuXHRcdFx0KTtcblx0XHRcdGN0eC5zYXZlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5zYXZlQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEFkZHMgdGhlIHRleHQgcHJvdmlkZWQgdmlhIGBzZXRBcHBlbmRUZXh0KClgIHRvIHRoZSBlbmQgb2YgdGhlXG5cdFx0ICogcGFnZS4gIERvZXMgbm90IHJlcXVpcmUgY2FsbGluZyBgbG9hZCgpYCBmaXJzdCwgdW5sZXNzIGEgd2F0Y2hsaXN0XG5cdFx0ICogZXhwaXJ5IGlzIHVzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5hcHBlbmQgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhcHBlbmQnO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHR0aGlzLnNhdmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBBZGRzIHRoZSB0ZXh0IHByb3ZpZGVkIHZpYSBgc2V0UHJlcGVuZFRleHQoKWAgdG8gdGhlIHN0YXJ0IG9mIHRoZVxuXHRcdCAqIHBhZ2UuICBEb2VzIG5vdCByZXF1aXJlIGNhbGxpbmcgYGxvYWQoKWAgZmlyc3QsIHVubGVzcyBhIHdhdGNobGlzdFxuXHRcdCAqIGV4cGlyeSBpcyB1c2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gIFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5wcmVwZW5kID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAncHJlcGVuZCc7XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHRcdHRoaXMuc2F2ZShvblN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdFx0dGhpcy5sb2FkKGZuQXV0b1NhdmUsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZXMgYSBuZXcgc2VjdGlvbiB3aXRoIHRoZSB0ZXh0IHByb3ZpZGVkIGJ5IGBzZXROZXdTZWN0aW9uVGV4dCgpYFxuXHRcdCAqIGFuZCBzZWN0aW9uIHRpdGxlIGZyb20gYHNldE5ld1NlY3Rpb25UaXRsZSgpYC5cblx0XHQgKiBJZiBgZWRpdFN1bW1hcnlgIGlzIHByb3ZpZGVkLCB0aGF0IHdpbGwgYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZVxuXHRcdCAqIGF1dG9nZW5lcmF0ZWQgXCItPlRpdGxlIChuZXcgc2VjdGlvblwiIGVkaXQgc3VtbWFyeS5cblx0XHQgKiBEb2VzIG5vdCByZXF1aXJlIGNhbGxpbmcgYGxvYWQoKWAgZmlyc3QsIHVubGVzcyBhIHdhdGNobGlzdCBleHBpcnlcblx0XHQgKiBpcyB1c2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gIFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5uZXdTZWN0aW9uID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnbmV3Jztcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0dGhpcy5zYXZlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0XHR0aGlzLmxvYWQoZm5BdXRvU2F2ZSwgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBsb2FkZWQgcGFnZSwgaW5jbHVkaW5nIHRoZSBuYW1lc3BhY2UgKi9cblx0XHR0aGlzLmdldFBhZ2VOYW1lID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5wYWdlTmFtZTtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgdGV4dCBvZiB0aGUgcGFnZSBhZnRlciBhIHN1Y2Nlc3NmdWwgbG9hZCgpICovXG5cdFx0dGhpcy5nZXRQYWdlVGV4dCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZVRleHQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtzdHJpbmd9IHBhZ2VUZXh0IC0gVXBkYXRlZCBwYWdlIHRleHQgdGhhdCB3aWxsIGJlIHNhdmVkIHdoZW4gYHNhdmUoKWAgaXMgY2FsbGVkICovXG5cdFx0dGhpcy5zZXRQYWdlVGV4dCA9IChwYWdlVGV4dCkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ2FsbCc7XG5cdFx0XHRjdHgucGFnZVRleHQgPSBwYWdlVGV4dDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gYXBwZW5kVGV4dCAtIFRleHQgdGhhdCB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBwYWdlIHdoZW4gYGFwcGVuZCgpYCBpcyBjYWxsZWQgKi9cblx0XHR0aGlzLnNldEFwcGVuZFRleHQgPSAoYXBwZW5kVGV4dCkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ2FwcGVuZCc7XG5cdFx0XHRjdHguYXBwZW5kVGV4dCA9IGFwcGVuZFRleHQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtzdHJpbmd9IHByZXBlbmRUZXh0IC0gVGV4dCB0aGF0IHdpbGwgYmUgcHJlcGVuZGVkIHRvIHRoZSBwYWdlIHdoZW4gYHByZXBlbmQoKWAgaXMgY2FsbGVkICovXG5cdFx0dGhpcy5zZXRQcmVwZW5kVGV4dCA9IChwcmVwZW5kVGV4dCkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ3ByZXBlbmQnO1xuXHRcdFx0Y3R4LnByZXBlbmRUZXh0ID0gcHJlcGVuZFRleHQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtzdHJpbmd9IG5ld1NlY3Rpb25UZXh0IC0gVGV4dCB0aGF0IHdpbGwgYmUgYWRkZWQgaW4gYSBuZXcgc2VjdGlvbiBvbiB0aGUgcGFnZSB3aGVuIGBuZXdTZWN0aW9uKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0TmV3U2VjdGlvblRleHQgPSAobmV3U2VjdGlvblRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICduZXcnO1xuXHRcdFx0Y3R4Lm5ld1NlY3Rpb25UZXh0ID0gbmV3U2VjdGlvblRleHQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmV3U2VjdGlvblRpdGxlIC0gVGl0bGUgZm9yIHRoZSBuZXcgc2VjdGlvbiBjcmVhdGVkIHdoZW4gYG5ld1NlY3Rpb24oKWAgaXMgY2FsbGVkXG5cdFx0ICogSWYgbWlzc2luZywgYGN0eC5lZGl0U3VtbWFyeWAgd2lsbCBiZSB1c2VkLiBJc3N1ZXMgbWF5IG9jY3VyIGlmIGEgc3Vic3RpdHV0ZWQgdGVtcGxhdGUgaXMgdXNlZC5cblx0XHQgKi9cblx0XHR0aGlzLnNldE5ld1NlY3Rpb25UaXRsZSA9IChuZXdTZWN0aW9uVGl0bGUpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICduZXcnO1xuXHRcdFx0Y3R4Lm5ld1NlY3Rpb25UaXRsZSA9IG5ld1NlY3Rpb25UaXRsZTtcblx0XHR9O1xuXHRcdC8vIEVkaXQtcmVsYXRlZCBzZXR0ZXIgbWV0aG9kczpcblx0XHQvKipcblx0XHQgKiBTZXQgdGhlIGVkaXQgc3VtbWFyeSB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIGBzYXZlKClgIGlzIGNhbGxlZC5cblx0XHQgKiBVbm5lY2Vzc2FyeSBpZiBlZGl0TW9kZSBpcyAnbmV3JyBhbmQgbmV3U2VjdGlvblRpdGxlIGlzIHByb3ZpZGVkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN1bW1hcnlcblx0XHQgKi9cblx0XHR0aGlzLnNldEVkaXRTdW1tYXJ5ID0gKHN1bW1hcnkpID0+IHtcblx0XHRcdGN0eC5lZGl0U3VtbWFyeSA9IHN1bW1hcnk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXQgYW55IGN1c3RvbSB0YWcocykgdG8gYmUgYXBwbGllZCB0byB0aGUgQVBJIGFjdGlvbi5cblx0XHQgKiBBIG51bWJlciBvZiBhY3Rpb25zIGRvbid0IHN1cHBvcnQgaXQsIG1vc3Qgbm90YWJseSB3YXRjaC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSB0YWdzIC0gU3RyaW5nIG9yIGFycmF5IG9mIHRhZyhzKS5cblx0XHQgKi9cblx0XHR0aGlzLnNldENoYW5nZVRhZ3MgPSAodGFncykgPT4ge1xuXHRcdFx0Y3R4LmNoYW5nZVRhZ3MgPSB0YWdzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtjcmVhdGVPcHRpb249bnVsbF0gLSBDYW4gdGFrZSB0aGUgZm9sbG93aW5nIGZvdXIgdmFsdWVzOlxuXHRcdCAqIC0gcmVjcmVhdGU6IGNyZWF0ZSB0aGUgcGFnZSBpZiBpdCBkb2VzIG5vdCBleGlzdCwgb3IgZWRpdCBpdCBpZiBpdCBleGlzdHMuXG5cdFx0ICogLSBjcmVhdGVvbmx5OiBjcmVhdGUgdGhlIHBhZ2UgaWYgaXQgZG9lcyBub3QgZXhpc3QsIGJ1dCByZXR1cm4gYW5cblx0XHQgKiBlcnJvciBpZiBpdCBhbHJlYWR5IGV4aXN0cy5cblx0XHQgKiAtIG5vY3JlYXRlOiBkb24ndCBjcmVhdGUgdGhlIHBhZ2UsIG9ubHkgZWRpdCBpdCBpZiBpdCBhbHJlYWR5IGV4aXN0cy5cblx0XHQgKiAtIGBudWxsYDogY3JlYXRlIHRoZSBwYWdlIGlmIGl0IGRvZXMgbm90IGV4aXN0LCB1bmxlc3MgaXQgd2FzIGRlbGV0ZWRcblx0XHQgKiBpbiB0aGUgbW9tZW50IGJldHdlZW4gbG9hZGluZyB0aGUgcGFnZSBhbmQgc2F2aW5nIHRoZSBlZGl0IChkZWZhdWx0KS5cblx0XHQgKi9cblx0XHR0aGlzLnNldENyZWF0ZU9wdGlvbiA9IChjcmVhdGVPcHRpb24pID0+IHtcblx0XHRcdGN0eC5jcmVhdGVPcHRpb24gPSBjcmVhdGVPcHRpb247XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBtaW5vckVkaXQgLSBTZXQgdHJ1ZSB0byBtYXJrIHRoZSBlZGl0IGFzIGEgbWlub3IgZWRpdC4gKi9cblx0XHR0aGlzLnNldE1pbm9yRWRpdCA9IChtaW5vckVkaXQpID0+IHtcblx0XHRcdGN0eC5taW5vckVkaXQgPSBtaW5vckVkaXQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBib3RFZGl0IC0gU2V0IHRydWUgdG8gbWFyayB0aGUgZWRpdCBhcyBhIGJvdCBlZGl0ICovXG5cdFx0dGhpcy5zZXRCb3RFZGl0ID0gKGJvdEVkaXQpID0+IHtcblx0XHRcdGN0eC5ib3RFZGl0ID0gYm90RWRpdDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlU2VjdGlvbiAtIEludGVnZXIgc3BlY2lmeWluZyB0aGUgc2VjdGlvbiBudW1iZXIgdG8gbG9hZCBvciBzYXZlLlxuXHRcdCAqIElmIHNwZWNpZmllZCBhcyBgbnVsbGAsIHRoZSBlbnRpcmUgcGFnZSB3aWxsIGJlIHJldHJpZXZlZC5cblx0XHQgKi9cblx0XHR0aGlzLnNldFBhZ2VTZWN0aW9uID0gKHBhZ2VTZWN0aW9uKSA9PiB7XG5cdFx0XHRjdHgucGFnZVNlY3Rpb24gPSBwYWdlU2VjdGlvbjtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBtYXhDb25mbGljdFJldHJpZXMgLSBOdW1iZXIgb2YgcmV0cmllcyBmb3Igc2F2ZSBlcnJvcnMgaW52b2x2aW5nIGFuIGVkaXQgY29uZmxpY3Qgb3Jcblx0XHQgKiBsb3NzIG9mIHRva2VuLiBEZWZhdWx0OiAyLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0TWF4Q29uZmxpY3RSZXRyaWVzID0gKG1heENvbmZsaWN0UmV0cmllcykgPT4ge1xuXHRcdFx0Y3R4Lm1heENvbmZsaWN0UmV0cmllcyA9IG1heENvbmZsaWN0UmV0cmllcztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBtYXhSZXRyaWVzIC0gTnVtYmVyIG9mIHJldHJpZXMgZm9yIHNhdmUgZXJyb3JzIG5vdCBpbnZvbHZpbmcgYW4gZWRpdCBjb25mbGljdCBvclxuXHRcdCAqIGxvc3Mgb2YgdG9rZW4uIERlZmF1bHQ6IDIuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRNYXhSZXRyaWVzID0gKG1heFJldHJpZXMpID0+IHtcblx0XHRcdGN0eC5tYXhSZXRyaWVzID0gbWF4UmV0cmllcztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldCB3aGV0aGVyIGFuZCBob3cgdG8gd2F0Y2ggdGhlIHBhZ2UsIGluY2x1ZGluZyBzZXR0aW5nIGFuIGV4cGlyeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbnxzdHJpbmd8TW9yZWJpdHMuZGF0ZXxEYXRlfSBbd2F0Y2hsaXN0T3B0aW9uPWZhbHNlXSAtXG5cdFx0ICogQmFzaWNhbGx5IGEgbWl4IG9mIE1XIEFQSSBhbmQgVHdpbmtsZXkgb3B0aW9ucyBhdmFpbGFibGUgcHJlLWV4cGlyeTpcblx0XHQgKiAtIGB0cnVlYHxgJ3llcydgfGAnd2F0Y2gnYDogcGFnZSB3aWxsIGJlIGFkZGVkIHRvIHRoZSB1c2VyJ3Ncblx0XHQgKiB3YXRjaGxpc3Qgd2hlbiB0aGUgYWN0aW9uIGlzIGNhbGxlZC4gRGVmYXVsdHMgdG8gYW4gaW5kZWZpbml0ZVxuXHRcdCAqIHdhdGNoIHVubGVzcyBgd2F0Y2hsaXN0RXhwaXJ5YCBpcyBwcm92aWRlZC5cblx0XHQgKiAtIGBmYWxzZWB8YCdubydgfGAnbm9jaGFuZ2UnYDogd2F0Y2hsaXN0IHN0YXR1cyBvZiB0aGUgcGFnZSAoaW5jbHVkaW5nIGV4cGlyeSkgd2lsbCBub3QgYmUgY2hhbmdlZC5cblx0XHQgKiAtIGAnZGVmYXVsdCdgfGAncHJlZmVyZW5jZXMnYDogd2F0Y2hsaXN0IHN0YXR1cyBvZiB0aGUgcGFnZSB3aWxsIGJlXG5cdFx0ICogc2V0IGJhc2VkIG9uIHRoZSB1c2VyJ3MgcHJlZmVyZW5jZSBzZXR0aW5ncyB3aGVuIHRoZSBhY3Rpb24gaXNcblx0XHQgKiBjYWxsZWQuIERlZmF1bHRzIHRvIGFuIGluZGVmaW5pdGUgd2F0Y2ggdW5sZXNzIGB3YXRjaGxpc3RFeHBpcnlgIGlzXG5cdFx0ICogcHJvdmlkZWQuXG5cdFx0ICogLSBgJ3Vud2F0Y2gnYDogZXhwbGljaXRseSB1bndhdGNoIHRoZSBwYWdlLlxuXHRcdCAqIC0gQW55IG90aGVyIGBzdHJpbmdgIG9yIGBudW1iZXJgLCBvciBhIGBNb3JlYml0cy5kYXRlYCBvciBgRGF0ZWBcblx0XHQgKiBvYmplY3Q6IHdhdGNoIHBhZ2UgdW50aWwgdGhlIHNwZWNpZmllZCB0aW1lLCBkZWZlcnJpbmcgdG9cblx0XHQgKiBgd2F0Y2hsaXN0RXhwaXJ5YCBpZiBwcm92aWRlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8TW9yZWJpdHMuZGF0ZXxEYXRlfSBbd2F0Y2hsaXN0RXhwaXJ5PWluZmluaXR5XSAtXG5cdFx0ICogQSBkYXRlLWxpa2Ugc3RyaW5nIG9yIG51bWJlciwgb3IgYSBkYXRlIG9iamVjdC4gIElmIGEgc3RyaW5nIG9yIG51bWJlcixcblx0XHQgKiBjYW4gYmUgcmVsYXRpdmUgKDIgd2Vla3MpIG9yIG90aGVyIHNpbWlsYXJseSBkYXRlLWxpa2UgKGkuZS4gTk9UIFwicG90YXRvXCIpOlxuXHRcdCAqIElTTyA4NjAxOiAyMDM4LTAxLTA5VDAzOjE0OjA3WlxuXHRcdCAqIE1lZGlhV2lraTogMjAzODAxMDkwMzE0MDdcblx0XHQgKiBVTklYOiAyMTQ3NDgzNjQ3XG5cdFx0ICogU1FMOiAyMDM4LTAxLTA5IDAzOjE0OjA3XG5cdFx0ICogQ2FuIGFsc28gYmUgYGluZmluaXR5YCBvciBpbmZpbml0eS1saWtlIChgaW5maW5pdGVgLCBgaW5kZWZpbml0ZWAsIGFuZCBgbmV2ZXJgKS5cblx0XHQgKiBTZWUge0BsaW5rIGh0dHBzOi8vcGhhYnJpY2F0b3Iud2lraW1lZGlhLm9yZy9zb3VyY2UvbWVkaWF3aWtpLWxpYnMtVGltZXN0YW1wL2Jyb3dzZS9tYXN0ZXIvc3JjL0NvbnZlcnRpYmxlVGltZXN0YW1wLnBocDs0ZTUzYjg1OWE5NTgwYzU1OTU4MDc4ZjQ2ZGQ0ZjNhNDRkMGZjYWEwJDU3LTEwOT9hcz1zb3VyY2UmYmxhbWU9b2ZmfVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0V2F0Y2hsaXN0ID0gKHdhdGNobGlzdE9wdGlvbiwgd2F0Y2hsaXN0RXhwaXJ5KSA9PiB7XG5cdFx0XHRpZiAod2F0Y2hsaXN0T3B0aW9uIGluc3RhbmNlb2YgTW9yZWJpdHMuZGF0ZSB8fCB3YXRjaGxpc3RPcHRpb24gaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRcdHdhdGNobGlzdE9wdGlvbiA9IHdhdGNobGlzdE9wdGlvbi50b0lTT1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdhdGNobGlzdEV4cGlyeSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHdhdGNobGlzdEV4cGlyeSA9ICdpbmZpbml0eSc7XG5cdFx0XHR9IGVsc2UgaWYgKHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIE1vcmViaXRzLmRhdGUgfHwgd2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnkudG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAod2F0Y2hsaXN0T3B0aW9uKSB7XG5cdFx0XHRcdGNhc2UgJ25vY2hhbmdlJzpcblx0XHRcdFx0Y2FzZSAnbm8nOlxuXHRcdFx0XHRjYXNlIGZhbHNlOlxuXHRcdFx0XHRjYXNlIHVuZGVmaW5lZDpcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ25vY2hhbmdlJztcblx0XHRcdFx0XHQvLyBUaGUgTVcgQVBJIGFsbG93cyBmb3IgY2hhbmdpbmcgZXhwaXJ5IHdpdGggbm9jaGFuZ2UgKGFzIFwibm9jaGFuZ2VcIiByZWZlcnMgdG8gdGhlIGJpbmFyeSBzdGF0dXMpLFxuXHRcdFx0XHRcdC8vIGJ1dCBieSBrZWVwaW5nIHRoaXMgbnVsbCBpdCB3aWxsIGRlZmF1bHQgdG8gYW55IGV4aXN0aW5nIGV4cGlyeSwgZW5zdXJlIHRoZXJlIGlzIGFjdHVhbGx5IFwibm8gY2hhbmdlLlwiXG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IG51bGw7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3Vud2F0Y2gnOlxuXHRcdFx0XHRcdC8vIGV4cGlyeSB1bmltcG9ydGFudFxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAndW53YXRjaCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3ByZWZlcmVuY2VzJzpcblx0XHRcdFx0Y2FzZSAnZGVmYXVsdCc6XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICdwcmVmZXJlbmNlcyc7XG5cdFx0XHRcdFx0Ly8gVGhlIEFQSSBhbGxvd3MgYW4gZXhwaXJ5IGhlcmUsIGJ1dCB0aGVyZSBpcyBhcyBvZiB5ZXQgKFQyNjU3MTYpXG5cdFx0XHRcdFx0Ly8gbm8gZXhwaXJ5IHByZWZlcmVuY2Ugb3B0aW9uLCBzbyBpdCdzIGEgYml0IGRldm9pZCBvZiBjb250ZXh0LlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3dhdGNoJzpcblx0XHRcdFx0Y2FzZSAneWVzJzpcblx0XHRcdFx0Y2FzZSB0cnVlOlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAnd2F0Y2gnO1xuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gTm90IHJlYWxseSBhIFwiZGVmYXVsdFwiIHBlciBzZSBidXQgY2F0Y2hlcyBcImFueSBvdGhlciBzdHJpbmdcIlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAnd2F0Y2gnO1xuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RPcHRpb247XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXQgYSB3YXRjaGxpc3QgZXhwaXJ5LiBzZXRXYXRjaGxpc3QgY2FuIG1vc3RseSBoYW5kbGUgdGhpcyBieVxuXHRcdCAqIGl0c2VsZiwgc28gdGhpcyBpcyBoZXJlIGxhcmdlbHkgZm9yIGNvbXBsZXRlbmVzcyBhbmQgY29tcGF0aWJpbGl0eVxuXHRcdCAqIHdpdGggdGhlIGZ1bGwgc3VpdGUgb2Ygb3B0aW9ucy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxNb3JlYml0cy5kYXRlfERhdGV9IFt3YXRjaGxpc3RFeHBpcnk9aW5maW5pdHldIC1cblx0XHQgKiBBIGRhdGUtbGlrZSBzdHJpbmcgb3IgbnVtYmVyLCBvciBhIGRhdGUgb2JqZWN0LiAgSWYgYSBzdHJpbmcgb3IgbnVtYmVyLFxuXHRcdCAqIGNhbiBiZSByZWxhdGl2ZSAoMiB3ZWVrcykgb3Igb3RoZXIgc2ltaWxhcmx5IGRhdGUtbGlrZSAoaS5lLiBOT1QgXCJwb3RhdG9cIik6XG5cdFx0ICogSVNPIDg2MDE6IDIwMzgtMDEtMDlUMDM6MTQ6MDdaXG5cdFx0ICogTWVkaWFXaWtpOiAyMDM4MDEwOTAzMTQwN1xuXHRcdCAqIFVOSVg6IDIxNDc0ODM2NDdcblx0XHQgKiBTUUw6IDIwMzgtMDEtMDkgMDM6MTQ6MDdcblx0XHQgKiBDYW4gYWxzbyBiZSBgaW5maW5pdHlgIG9yIGluZmluaXR5LWxpa2UgKGBpbmZpbml0ZWAsIGBpbmRlZmluaXRlYCwgYW5kIGBuZXZlcmApLlxuXHRcdCAqIFNlZSB7QGxpbmsgaHR0cHM6Ly9waGFicmljYXRvci53aWtpbWVkaWEub3JnL3NvdXJjZS9tZWRpYXdpa2ktbGlicy1UaW1lc3RhbXAvYnJvd3NlL21hc3Rlci9zcmMvQ29udmVydGlibGVUaW1lc3RhbXAucGhwOzRlNTNiODU5YTk1ODBjNTU5NTgwNzhmNDZkZDRmM2E0NGQwZmNhYTAkNTctMTA5P2FzPXNvdXJjZSZibGFtZT1vZmZ9XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRXYXRjaGxpc3RFeHBpcnkgPSAod2F0Y2hsaXN0RXhwaXJ5KSA9PiB7XG5cdFx0XHRpZiAod2F0Y2hsaXN0RXhwaXJ5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gJ2luZmluaXR5Jztcblx0XHRcdH0gZWxzZSBpZiAod2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgTW9yZWJpdHMuZGF0ZSB8fCB3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRcdHdhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeS50b0lTT1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBkZXByZWNhdGVkIEFzIG9mIERlY2VtYmVyIDIwMjAsIHVzZSBzZXRXYXRjaGxpc3QuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbd2F0Y2hsaXN0T3B0aW9uPWZhbHNlXSAtXG5cdFx0ICogLSBgVHJ1ZWA6IHBhZ2Ugd2F0Y2hsaXN0IHN0YXR1cyB3aWxsIGJlIHNldCBiYXNlZCBvbiB0aGUgdXNlcidzXG5cdFx0ICogcHJlZmVyZW5jZSBzZXR0aW5ncyB3aGVuIGBzYXZlKClgIGlzIGNhbGxlZC5cblx0XHQgKiAtIGBGYWxzZWA6IHdhdGNobGlzdCBzdGF0dXMgb2YgdGhlIHBhZ2Ugd2lsbCBub3QgYmUgY2hhbmdlZC5cblx0XHQgKlxuXHRcdCAqIFdhdGNobGlzdCBub3Rlczpcblx0XHQgKiAxLiBUaGUgTWVkaWFXaWtpIEFQSSB2YWx1ZSBvZiAndW53YXRjaCcsIHdoaWNoIGV4cGxpY2l0bHkgcmVtb3Zlc1xuXHRcdCAqIHRoZSBwYWdlIGZyb20gdGhlIHVzZXIncyB3YXRjaGxpc3QsIGlzIG5vdCB1c2VkLlxuXHRcdCAqIDIuIElmIGJvdGggYHNldFdhdGNobGlzdCgpYCBhbmQgYHNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcygpYCBhcmVcblx0XHQgKiBjYWxsZWQsIHRoZSBsYXN0IGNhbGwgdGFrZXMgcHJpb3JpdHkuXG5cdFx0ICogMy4gVHdpbmtsZSBtb2R1bGVzIHNob3VsZCB1c2UgdGhlIGFwcHJvcHJpYXRlIHByZWZlcmVuY2UgdG8gc2V0IHRoZSB3YXRjaGxpc3Qgb3B0aW9ucy5cblx0XHQgKiA0LiBNb3N0IFR3aW5rbGUgbW9kdWxlcyB1c2UgYHNldFdhdGNobGlzdCgpYC4gYHNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcygpYFxuXHRcdCAqIGlzIG9ubHkgbmVlZGVkIGZvciB0aGUgZmV3IFR3aW5rbGUgd2F0Y2hsaXN0IHByZWZlcmVuY2VzIHRoYXRcblx0XHQgKiBhY2NlcHQgYSBzdHJpbmcgdmFsdWUgb2YgYGRlZmF1bHRgLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzID0gKHdhdGNobGlzdE9wdGlvbikgPT4ge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHQnW01vcmViaXRzXSBOT1RFOiBNb3JlYml0cy53aWtpLnBhZ2Uuc2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzIHdhcyBkZXByZWNhdGVkIERlY2VtYmVyIDIwMjAsIHBsZWFzZSB1c2Ugc2V0V2F0Y2hsaXN0J1xuXHRcdFx0KTtcblx0XHRcdGlmICh3YXRjaGxpc3RPcHRpb24pIHtcblx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICdwcmVmZXJlbmNlcyc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ25vY2hhbmdlJztcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvbGxvd1JlZGlyZWN0PWZhbHNlXSAtXG5cdFx0ICogLSBgdHJ1ZWA6IGEgbWF4aW11bSBvZiBvbmUgcmVkaXJlY3Qgd2lsbCBiZSBmb2xsb3dlZC4gSW4gdGhlIGV2ZW50XG5cdFx0ICogb2YgYSByZWRpcmVjdCwgYSBtZXNzYWdlIGlzIGRpc3BsYXllZCB0byB0aGUgdXNlciBhbmQgdGhlIHJlZGlyZWN0XG5cdFx0ICogdGFyZ2V0IGNhbiBiZSByZXRyaWV2ZWQgd2l0aCBnZXRQYWdlTmFtZSgpLlxuXHRcdCAqIC0gYGZhbHNlYDogKGRlZmF1bHQpIHRoZSByZXF1ZXN0ZWQgcGFnZU5hbWUgd2lsbCBiZSB1c2VkIHdpdGhvdXQgcmVnYXJkIHRvIGFueSByZWRpcmVjdC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb2xsb3dDcm9zc05zUmVkaXJlY3Q9dHJ1ZV0gLSBOb3QgYXBwbGljYWJsZSBpZiBgZm9sbG93UmVkaXJlY3RgIGlzIG5vdCBzZXQgdHJ1ZS5cblx0XHQgKiAtIGB0cnVlYDogKGRlZmF1bHQpIGZvbGxvdyByZWRpcmVjdCBldmVuIGlmIGl0IGlzIGEgY3Jvc3MtbmFtZXNwYWNlIHJlZGlyZWN0XG5cdFx0ICogLSBgZmFsc2VgOiBkb24ndCBmb2xsb3cgcmVkaXJlY3QgaWYgaXQgaXMgY3Jvc3MtbmFtZXNwYWNlLCBlZGl0IHRoZSByZWRpcmVjdCBpdHNlbGYuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRGb2xsb3dSZWRpcmVjdCA9IChmb2xsb3dSZWRpcmVjdCwgZm9sbG93Q3Jvc3NOc1JlZGlyZWN0KSA9PiB7XG5cdFx0XHRpZiAoY3R4LnBhZ2VMb2FkZWQpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0J0ludGVybmFsIGVycm9yOiBjYW5ub3QgY2hhbmdlIHJlZGlyZWN0IHNldHRpbmcgYWZ0ZXIgdGhlIHBhZ2UgaGFzIGJlZW4gbG9hZGVkISdcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmZvbGxvd1JlZGlyZWN0ID0gZm9sbG93UmVkaXJlY3Q7XG5cdFx0XHRjdHguZm9sbG93Q3Jvc3NOc1JlZGlyZWN0ID1cblx0XHRcdFx0Zm9sbG93Q3Jvc3NOc1JlZGlyZWN0ID09PSB1bmRlZmluZWQgPyBjdHguZm9sbG93Q3Jvc3NOc1JlZGlyZWN0IDogZm9sbG93Q3Jvc3NOc1JlZGlyZWN0O1xuXHRcdH07XG5cdFx0Ly8gbG9va3VwLWNyZWF0aW9uIHNldHRlciBmdW5jdGlvblxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAtIElmIHNldCB0cnVlLCB0aGUgYXV0aG9yIGFuZCB0aW1lc3RhbXAgb2Zcblx0XHQgKiB0aGUgZmlyc3Qgbm9uLXJlZGlyZWN0IHZlcnNpb24gb2YgdGhlIHBhZ2UgaXMgcmV0cmlldmVkLlxuXHRcdCAqXG5cdFx0ICogV2FybmluZzpcblx0XHQgKiAxLiBJZiB0aGVyZSBhcmUgbm8gcmV2aXNpb25zIGFtb25nIHRoZSBmaXJzdCA1MCB0aGF0IGFyZVxuXHRcdCAqIG5vbi1yZWRpcmVjdHMsIG9yIGlmIHRoZXJlIGFyZSBsZXNzIDUwIHJldmlzaW9ucyBhbmQgYWxsIGFyZVxuXHRcdCAqIHJlZGlyZWN0cywgdGhlIG9yaWdpbmFsIGNyZWF0aW9uIGlzIHJldHJpZXZlZC5cblx0XHQgKiAyLiBSZXZpc2lvbnMgdGhhdCB0aGUgdXNlciBpcyBub3QgcHJpdmlsZWdlZCB0byBhY2Nlc3Ncblx0XHQgKiAocmV2ZGVsZWQvc3VwcHJlc3NlZCkgd2lsbCBiZSB0cmVhdGVkIGFzIG5vbi1yZWRpcmVjdHMuXG5cdFx0ICogMy4gTXVzdCBub3QgYmUgdXNlZCB3aGVuIHRoZSBwYWdlIGhhcyBhIG5vbi13aWtpdGV4dCBjb250ZW50bW9kZWxcblx0XHQgKiBzdWNoIGFzIE1vZHVsZXNwYWNlIEx1YSBvciB1c2VyIEphdmFTY3JpcHQvQ1NTLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0TG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5sb29rdXBOb25SZWRpcmVjdENyZWF0b3IgPSBmbGFnO1xuXHRcdH07XG5cdFx0Ly8gTW92ZS1yZWxhdGVkIHNldHRlciBmdW5jdGlvbnNcblx0XHQvKiogQHBhcmFtIHtzdHJpbmd9IGRlc3RpbmF0aW9uICovXG5cdFx0dGhpcy5zZXRNb3ZlRGVzdGluYXRpb24gPSAoZGVzdGluYXRpb24pID0+IHtcblx0XHRcdGN0eC5tb3ZlRGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgKi9cblx0XHR0aGlzLnNldE1vdmVUYWxrUGFnZSA9IChmbGFnKSA9PiB7XG5cdFx0XHRjdHgubW92ZVRhbGtQYWdlID0gISFmbGFnO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAqL1xuXHRcdHRoaXMuc2V0TW92ZVN1YnBhZ2VzID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5tb3ZlU3VicGFnZXMgPSAhIWZsYWc7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBmbGFnICovXG5cdFx0dGhpcy5zZXRNb3ZlU3VwcHJlc3NSZWRpcmVjdCA9IChmbGFnKSA9PiB7XG5cdFx0XHRjdHgubW92ZVN1cHByZXNzUmVkaXJlY3QgPSAhIWZsYWc7XG5cdFx0fTtcblx0XHQvLyBQcm90ZWN0LXJlbGF0ZWQgc2V0dGVyIGZ1bmN0aW9uc1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbCAtIFRoZSByaWdodCByZXF1aXJlZCBmb3IgdGhlIHNwZWNpZmljIGFjdGlvblxuXHRcdCAqIGUuZy4gc3lzb3AsIHRlbXBsYXRlZWRpdG9yLCBhdXRvY29uZmlybWVkXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtleHBpcnk9aW5maW5pdHldXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRFZGl0UHJvdGVjdGlvbiA9IChsZXZlbCwgZXhwaXJ5KSA9PiB7XG5cdFx0XHRjdHgucHJvdGVjdEVkaXQgPSB7XG5cdFx0XHRcdGxldmVsLFxuXHRcdFx0XHRleHBpcnk6IGV4cGlyeSB8fCAnaW5maW5pdHknLFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdHRoaXMuc2V0TW92ZVByb3RlY3Rpb24gPSAobGV2ZWwsIGV4cGlyeSkgPT4ge1xuXHRcdFx0Y3R4LnByb3RlY3RNb3ZlID0ge1xuXHRcdFx0XHRsZXZlbCxcblx0XHRcdFx0ZXhwaXJ5OiBleHBpcnkgfHwgJ2luZmluaXR5Jyxcblx0XHRcdH07XG5cdFx0fTtcblx0XHR0aGlzLnNldENyZWF0ZVByb3RlY3Rpb24gPSAobGV2ZWwsIGV4cGlyeSkgPT4ge1xuXHRcdFx0Y3R4LnByb3RlY3RDcmVhdGUgPSB7XG5cdFx0XHRcdGxldmVsLFxuXHRcdFx0XHRleHBpcnk6IGV4cGlyeSB8fCAnaW5maW5pdHknLFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdHRoaXMuc2V0Q2FzY2FkaW5nUHJvdGVjdGlvbiA9IChmbGFnKSA9PiB7XG5cdFx0XHRjdHgucHJvdGVjdENhc2NhZGUgPSAhIWZsYWc7XG5cdFx0fTtcblx0XHR0aGlzLnN1cHByZXNzUHJvdGVjdFdhcm5pbmcgPSAoKSA9PiB7XG5cdFx0XHRjdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZyA9IHRydWU7XG5cdFx0fTtcblx0XHQvLyBSZXZlcnQtcmVsYXRlZCBnZXR0ZXJzL3NldHRlcnM6XG5cdFx0dGhpcy5zZXRPbGRJRCA9IChvbGRJRCkgPT4ge1xuXHRcdFx0Y3R4LnJldmVydE9sZElEID0gb2xkSUQ7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gVGhlIGN1cnJlbnQgcmV2aXNpb24gSUQgb2YgdGhlIHBhZ2UgKi9cblx0XHR0aGlzLmdldEN1cnJlbnRJRCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucmV2ZXJ0Q3VySUQ7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gTGFzdCBlZGl0b3Igb2YgdGhlIHBhZ2UgKi9cblx0XHR0aGlzLmdldFJldmlzaW9uVXNlciA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucmV2ZXJ0VXNlcjtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBJU08gODYwMSB0aW1lc3RhbXAgYXQgd2hpY2ggdGhlIHBhZ2Ugd2FzIGxhc3QgZWRpdGVkLiAqL1xuXHRcdHRoaXMuZ2V0TGFzdEVkaXRUaW1lID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5sYXN0RWRpdFRpbWU7XG5cdFx0fTtcblx0XHQvLyBNaXNjZWxsYW5lb3VzIGdldHRlcnMvc2V0dGVyczpcblx0XHQvKipcblx0XHQgKiBEZWZpbmUgYW4gb2JqZWN0IGZvciB1c2UgaW4gYSBjYWxsYmFjayBmdW5jdGlvbi5cblx0XHQgKlxuXHRcdCAqIGBjYWxsYmFja1BhcmFtZXRlcnNgIGlzIGZvciB1c2UgYnkgdGhlIGNhbGxlciBvbmx5LiBUaGUgcGFyYW1ldGVyc1xuXHRcdCAqIGFsbG93IGEgY2FsbGVyIHRvIHBhc3MgdGhlIHByb3BlciBjb250ZXh0IGludG8gaXRzIGNhbGxiYWNrXG5cdFx0ICogZnVuY3Rpb24uICBDYWxsZXJzIG11c3QgZW5zdXJlIHRoYXQgYW55IGNoYW5nZXMgdG8gdGhlXG5cdFx0ICogY2FsbGJhY2tQYXJhbWV0ZXJzIG9iamVjdCB3aXRoaW4gYSBgbG9hZCgpYCBjYWxsYmFjayBzdGlsbCBwZXJtaXQgYVxuXHRcdCAqIHByb3BlciByZS1lbnRyeSBpbnRvIHRoZSBgbG9hZCgpYCBjYWxsYmFjayBpZiBhbiBlZGl0IGNvbmZsaWN0IGlzXG5cdFx0ICogZGV0ZWN0ZWQgdXBvbiBjYWxsaW5nIGBzYXZlKClgLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrUGFyYW1ldGVyc1xuXHRcdCAqL1xuXHRcdHRoaXMuc2V0Q2FsbGJhY2tQYXJhbWV0ZXJzID0gKGNhbGxiYWNrUGFyYW1ldGVycykgPT4ge1xuXHRcdFx0Y3R4LmNhbGxiYWNrUGFyYW1ldGVycyA9IGNhbGxiYWNrUGFyYW1ldGVycztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtPYmplY3R9IC0gVGhlIG9iamVjdCBwcmV2aW91c2x5IHNldCBieSBgc2V0Q2FsbGJhY2tQYXJhbWV0ZXJzKClgLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0Q2FsbGJhY2tQYXJhbWV0ZXJzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5jYWxsYmFja1BhcmFtZXRlcnM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge01vcmViaXRzLnN0YXR1c30gc3RhdHVzRWxlbWVudFxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0U3RhdHVzRWxlbWVudCA9IChzdGF0dXNFbGVtZW50KSA9PiB7XG5cdFx0XHRjdHguc3RhdHVzRWxlbWVudCA9IHN0YXR1c0VsZW1lbnQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSBTdGF0dXMgZWxlbWVudCBjcmVhdGVkIGJ5IHRoZSBjb25zdHJ1Y3Rvci5cblx0XHQgKi9cblx0XHR0aGlzLmdldFN0YXR1c0VsZW1lbnQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnN0YXR1c0VsZW1lbnQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGFnZSBleGlzdGVkIG9uIHRoZSB3aWtpIHdoZW4gaXQgd2FzIGxhc3QgbG9hZGVkLlxuXHRcdCAqL1xuXHRcdHRoaXMuZXhpc3RzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5wYWdlRXhpc3RzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gUGFnZSBJRCBvZiB0aGUgcGFnZSBsb2FkZWQuIDAgaWYgdGhlIHBhZ2UgZG9lc24ndFxuXHRcdCAqIGV4aXN0LlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0UGFnZUlEID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5wYWdlSUQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSAtIENvbnRlbnQgbW9kZWwgb2YgdGhlIHBhZ2UuICBQb3NzaWJsZSB2YWx1ZXNcblx0XHQgKiBpbmNsdWRlIChidXQgbWF5IG5vdCBiZSBsaW1pdGVkIHRvKTogYHdpa2l0ZXh0YCwgYGphdmFzY3JpcHRgLFxuXHRcdCAqIGBjc3NgLCBganNvbmAsIGBTY3JpYnVudG9gLCBgc2FuaXRpemVkLWNzc2AsIGBNYXNzTWVzc2FnZUxpc3RDb250ZW50YC5cblx0XHQgKiBBbHNvIGdldHRhYmxlIHZpYSBgbXcuY29uZmlnLmdldCgnd2dQYWdlQ29udGVudE1vZGVsJylgLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0Q29udGVudE1vZGVsID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5jb250ZW50TW9kZWw7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbnxzdHJpbmd9IC0gV2F0Y2hlZCBzdGF0dXMgb2YgdGhlIHBhZ2UuIEJvb2xlYW5cblx0XHQgKiB1bmxlc3MgaXQncyBiZWluZyB3YXRjaGVkIHRlbXBvcmFyaWx5LCBpbiB3aGljaCBjYXNlIHJldHVybnMgdGhlXG5cdFx0ICogZXhwaXJ5IHN0cmluZy5cblx0XHQgKi9cblx0XHR0aGlzLmdldFdhdGNoZWQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LndhdGNoZWQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBJU08gODYwMSB0aW1lc3RhbXAgYXQgd2hpY2ggdGhlIHBhZ2Ugd2FzIGxhc3QgbG9hZGVkLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0TG9hZFRpbWUgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LmxvYWRUaW1lO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIHVzZXIgd2hvIGNyZWF0ZWQgdGhlIHBhZ2UgZm9sbG93aW5nIGBsb29rdXBDcmVhdGlvbigpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENyZWF0b3IgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LmNyZWF0b3I7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgSVNPU3RyaW5nIHRpbWVzdGFtcCBvZiBwYWdlIGNyZWF0aW9uIGZvbGxvd2luZyBgbG9va3VwQ3JlYXRpb24oKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDcmVhdGlvblRpbWVzdGFtcCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgudGltZXN0YW1wO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIG9yIG5vdCB5b3UgY2FuIGVkaXQgdGhlIHBhZ2UgKi9cblx0XHR0aGlzLmNhbkVkaXQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gISFjdHgudGVzdEFjdGlvbnMgJiYgY3R4LnRlc3RBY3Rpb25zLmluY2x1ZGVzKCdlZGl0Jyk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBSZXRyaWV2ZXMgdGhlIHVzZXJuYW1lIG9mIHRoZSB1c2VyIHdobyBjcmVhdGVkIHRoZSBwYWdlIGFzIHdlbGwgYXNcblx0XHQgKiB0aGUgdGltZXN0YW1wIG9mIGNyZWF0aW9uLiAgVGhlIHVzZXJuYW1lIGNhbiBiZSByZXRyaWV2ZWQgdXNpbmcgdGhlXG5cdFx0ICogYGdldENyZWF0b3IoKWAgZnVuY3Rpb247IHRoZSB0aW1lc3RhbXAgY2FuIGJlIHJldHJpZXZlZCB1c2luZyB0aGVcblx0XHQgKiBgZ2V0Q3JlYXRpb25UaW1lc3RhbXAoKWAgZnVuY3Rpb24uXG5cdFx0ICogUHJpb3IgdG8gSnVuZSAyMDE5IGtub3duIGFzIGBsb29rdXBDcmVhdG9yKClgLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gb25TdWNjZXNzIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW5cblx0XHQgKiB0aGUgdXNlcm5hbWUgYW5kIHRpbWVzdGFtcCBhcmUgZm91bmQgd2l0aGluIHRoZSBjYWxsYmFjay5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuXG5cdFx0ICogdGhlIGxvb2t1cCBmYWlsc1xuXHRcdCAqL1xuXHRcdHRoaXMubG9va3VwQ3JlYXRpb24gPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0aWYgKCFvblN1Y2Nlc3MpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBubyBvblN1Y2Nlc3MgY2FsbGJhY2sgcHJvdmlkZWQgdG8gbG9va3VwQ3JlYXRpb24oKSEnKTtcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdHJ2bGltaXQ6IDEsXG5cdFx0XHRcdHJ2cHJvcDogJ3VzZXJ8dGltZXN0YW1wJyxcblx0XHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdC8vIE9ubHkgdGhlIHdpa2l0ZXh0IGNvbnRlbnQgbW9kZWwgY2FuIHJlbGlhYmx5IGhhbmRsZVxuXHRcdFx0Ly8gcnZzZWN0aW9uLCBvdGhlcnMgcmV0dXJuIGFuIGVycm9yIHdoZW4gcGFpcmVkIHdpdGggdGhlXG5cdFx0XHQvLyBjb250ZW50IHJ2cHJvcC4gUmVsYXRlZGx5LCBub24td2lraXRleHQgbW9kZWxzIGRvbid0XG5cdFx0XHQvLyB1bmRlcnN0YW5kIHRoZSAjUkVESVJFQ1QgY29uY2VwdCwgc28gd2Ugc2hvdWxkbid0IGF0dGVtcHRcblx0XHRcdC8vIHRoZSByZWRpcmVjdCByZXNvbHV0aW9uIGluIGZuTG9va3VwQ3JlYXRpb25TdWNjZXNzXG5cdFx0XHRpZiAoY3R4Lmxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvcikge1xuXHRcdFx0XHRxdWVyeS5ydnNlY3Rpb24gPSAwO1xuXHRcdFx0XHRxdWVyeS5ydnByb3AgKz0gJ3xjb250ZW50Jztcblx0XHRcdH1cblx0XHRcdGlmIChjdHguZm9sbG93UmVkaXJlY3QpIHtcblx0XHRcdFx0cXVlcnkucmVkaXJlY3RzID0gJyc7IC8vIGZvbGxvdyBhbGwgcmVkaXJlY3RzXG5cdFx0XHR9XG5cblx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfmipPlj5bpobXpnaLliJvlu7rogIXkv6Hmga8nLCAn5oqT5Y+W6aCB6Z2i5bu656uL6ICF6LOH6KiKJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRmbkxvb2t1cENyZWF0aW9uU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUmV2ZXJ0cyBhIHBhZ2UgdG8gYHJldmVydE9sZElEYCBzZXQgYnkgYHNldE9sZElEYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLnJldmVydCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0aWYgKCFjdHgucmV2ZXJ0T2xkSUQpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiByZXZpc2lvbiBJRCB0byByZXZlcnQgdG8gd2FzIG5vdCBzZXQgYmVmb3JlIHJldmVydCEnKTtcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdyZXZlcnQnO1xuXHRcdFx0dGhpcy5sb2FkKGZuQXV0b1NhdmUsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIE1vdmVzIGEgcGFnZSB0byBhbm90aGVyIHRpdGxlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMubW92ZSA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uTW92ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25Nb3ZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0aWYgKCFmblByZWZsaWdodENoZWNrcy5jYWxsKHRoaXMsICdtb3ZlJywgY3R4Lm9uTW92ZUZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFjdHgubW92ZURlc3RpbmF0aW9uKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogZGVzdGluYXRpb24gcGFnZSBuYW1lIHdhcyBub3Qgc2V0IGJlZm9yZSBtb3ZlIScpO1xuXHRcdFx0XHRjdHgub25Nb3ZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ21vdmUnKSkge1xuXHRcdFx0XHRmblByb2Nlc3NNb3ZlLmNhbGwodGhpcywgdGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBxdWVyeSA9IGZuTmVlZFRva2VuSW5mb1F1ZXJ5KCdtb3ZlJyk7XG5cdFx0XHRcdGN0eC5tb3ZlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRcdGZuUHJvY2Vzc01vdmUsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4Lm1vdmVBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0XHRjdHgubW92ZUFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBNYXJrcyB0aGUgcGFnZSBhcyBwYXRyb2xsZWQsIHVzaW5nIGByY2lkYCAoaWYgYXZhaWxhYmxlKSBvciBgcmV2aWRgLlxuXHRcdCAqXG5cdFx0ICogUGF0cm9sbGluZyBhcyBzdWNoIGRvZXNuJ3QgbmVlZCB0byByZWx5IG9uIGxvYWRpbmcgdGhlIHBhZ2UgaW5cblx0XHQgKiBxdWVzdGlvbjsgc2ltcGx5IHBhc3NpbmcgYSByZXZpZCB0byB0aGUgQVBJIGlzIHN1ZmZpY2llbnQsIHNvIGluXG5cdFx0ICogdGhvc2UgY2FzZXMganVzdCB1c2luZyB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IGlzIHByb2JhYmx5IHByZWZlcmFibGUuXG5cdFx0ICpcblx0XHQgKiBObyBlcnJvciBoYW5kbGluZyBzaW5jZSB3ZSBkb24ndCBhY3R1YWxseSBjYXJlIGFib3V0IHRoZSBlcnJvcnMuXG5cdFx0ICovXG5cdFx0dGhpcy5wYXRyb2wgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoIU1vcmViaXRzLnVzZXJJc1N5c29wICYmICFNb3JlYml0cy51c2VySXNJbkdyb3VwKCdwYXRyb2xsZXInKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdC8vIElmIGEgbGluayBpcyBwcmVzZW50LCBkb24ndCBuZWVkIHRvIGNoZWNrIGlmIGl0J3MgcGF0cm9sbGVkXG5cdFx0XHRpZiAoJGJvZHkuZmluZCgnLnBhdHJvbGxpbmsnKS5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgcGF0cm9saHJlZiA9ICRib2R5LmZpbmQoJy5wYXRyb2xsaW5rIGEnKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRcdGN0eC5yY2lkID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdyY2lkJywgcGF0cm9saHJlZik7XG5cdFx0XHRcdGZuUHJvY2Vzc1BhdHJvbCh0aGlzLCB0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHBhdHJvbFF1ZXJ5ID0ge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdFx0dHlwZTogJ3BhdHJvbCcsXG5cdFx0XHRcdFx0Ly8gYXMgbG9uZyBhcyB3ZSdyZSBxdWVyeWluZywgbWlnaHQgYXMgd2VsbCBnZXQgYSB0b2tlblxuXHRcdFx0XHRcdGxpc3Q6ICdyZWNlbnRjaGFuZ2VzJyxcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB0aGUgcGFnZSBpcyB1bnBhdHJvbGxlZFxuXHRcdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRcdHJjcHJvcDogJ3BhdHJvbGxlZCcsXG5cdFx0XHRcdFx0cmN0aXRsZTogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRcdHJjbGltaXQ6IDEsXG5cdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdH07XG5cdFx0XHRcdGN0eC5wYXRyb2xBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdFx0cGF0cm9sUXVlcnksXG5cdFx0XHRcdFx0Zm5Qcm9jZXNzUGF0cm9sXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5wYXRyb2xBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0XHRjdHgucGF0cm9sQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8vIHxkZWxldGV8IGlzIGEgcmVzZXJ2ZWQgd29yZCBpbiBzb21lIGZsYXZvdXJzIG9mIEpTXG5cdFx0LyoqXG5cdFx0ICogRGVsZXRlcyBhIHBhZ2UgKGZvciBhZG1pbnMgb25seSkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy5kZWxldGVQYWdlID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25EZWxldGVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uRGVsZXRlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0aWYgKCFmblByZWZsaWdodENoZWNrcy5jYWxsKHRoaXMsICdkZWxldGUnLCBjdHgub25EZWxldGVGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdkZWxldGUnKSkge1xuXHRcdFx0XHRmblByb2Nlc3NEZWxldGUuY2FsbCh0aGlzLCB0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ2RlbGV0ZScpO1xuXHRcdFx0XHRjdHguZGVsZXRlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRcdGZuUHJvY2Vzc0RlbGV0ZSxcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0XHRjdHgub25EZWxldGVGYWlsdXJlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5kZWxldGVBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0XHRjdHguZGVsZXRlQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFVuZGVsZXRlcyBhIHBhZ2UgKGZvciBhZG1pbnMgb25seSkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy51bmRlbGV0ZVBhZ2UgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vblVuZGVsZXRlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0aWYgKCFmblByZWZsaWdodENoZWNrcy5jYWxsKHRoaXMsICd1bmRlbGV0ZScsIGN0eC5vblVuZGVsZXRlRmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbigndW5kZWxldGUnKSkge1xuXHRcdFx0XHRmblByb2Nlc3NVbmRlbGV0ZS5jYWxsKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgndW5kZWxldGUnKTtcblx0XHRcdFx0Y3R4LnVuZGVsZXRlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRcdGZuUHJvY2Vzc1VuZGVsZXRlLFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgudW5kZWxldGVBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0XHRjdHgudW5kZWxldGVBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUHJvdGVjdHMgYSBwYWdlIChmb3IgYWRtaW5zIG9ubHkpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMucHJvdGVjdCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uUHJvdGVjdFN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0aWYgKCFmblByZWZsaWdodENoZWNrcy5jYWxsKHRoaXMsICdwcm90ZWN0JywgY3R4Lm9uUHJvdGVjdEZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFjdHgucHJvdGVjdEVkaXQgJiYgIWN0eC5wcm90ZWN0TW92ZSAmJiAhY3R4LnByb3RlY3RDcmVhdGUpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0J0ludGVybmFsIGVycm9yOiB5b3UgbXVzdCBzZXQgZWRpdCBhbmQvb3IgbW92ZSBhbmQvb3IgY3JlYXRlIHByb3RlY3Rpb24gYmVmb3JlIGNhbGxpbmcgcHJvdGVjdCgpISdcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGJlY2F1c2Ugb2YgdGhlIHdheSBNVyBBUEkgaW50ZXJwcmV0cyBwcm90ZWN0aW9uIGxldmVsc1xuXHRcdFx0Ly8gKGFic29sdXRlLCBub3QgZGlmZmVyZW50aWFsKSwgd2UgYWx3YXlzIG5lZWQgdG8gcmVxdWVzdFxuXHRcdFx0Ly8gcHJvdGVjdGlvbiBsZXZlbHMgZnJvbSB0aGUgc2VydmVyXG5cdFx0XHRjb25zdCBxdWVyeSA9IGZuTmVlZFRva2VuSW5mb1F1ZXJ5KCdwcm90ZWN0Jyk7XG5cdFx0XHRjdHgucHJvdGVjdEFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRmblByb2Nlc3NQcm90ZWN0LFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgucHJvdGVjdEFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgucHJvdGVjdEFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvKlxuXHRcdCAqIFByaXZhdGUgbWVtYmVyIGZ1bmN0aW9uc1xuXHRcdCAqIFRoZXNlIGFyZSBub3QgZXhwb3NlZCBvdXRzaWRlXG5cdFx0ICovXG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIHdlIGNhbiBzYXZlIGFuIEFQSSBjYWxsIGJ5IHVzaW5nIHRoZSBjc3JmIHRva2VuXG5cdFx0ICogc2VudCB3aXRoIHRoZSBwYWdlIEhUTUwsIG9yIHdoZXRoZXIgd2UgbmVlZCB0byBhc2sgdGhlIHNlcnZlciBmb3Jcblx0XHQgKiBtb3JlIGluZm8gKGUuZy4gcHJvdGVjdGlvbiBvciB3YXRjaGxpc3QgZXhwaXJ5KS5cblx0XHQgKlxuXHRcdCAqIEN1cnJlbnRseSB1c2VkIGZvciBgYXBwZW5kYCwgYHByZXBlbmRgLCBgbmV3U2VjdGlvbmAsIGBtb3ZlYCxcblx0XHQgKiBgZGVsZXRlUGFnZWAsIGFuZCBgdW5kZWxldGVQYWdlYC4gTm90IHVzZWQgZm9yIGBwcm90ZWN0YFxuXHRcdCAqIHNpbmNlIGl0IGFsd2F5cyBuZWVkcyB0byByZXF1ZXN0IHByb3RlY3Rpb24gc3RhdHVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFthY3Rpb249ZWRpdF0gLSBUaGUgYWN0aW9uIGJlaW5nIHVuZGVydGFrZW4sIGUuZy5cblx0XHQgKiBcImVkaXRcIiBvciBcImRlbGV0ZVwiLiBJbiBwcmFjdGljZSwgb25seSBcImVkaXRcIiBvciBcIm5vdGVkaXRcIiBtYXR0ZXJzLlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuQ2FuVXNlTXdVc2VyVG9rZW4gPSAoYWN0aW9uKSA9PiB7XG5cdFx0XHRhY3Rpb24gfHw9ICdlZGl0Jztcblx0XHRcdC8vIElmIGEgd2F0Y2hsaXN0IGV4cGlyeSBpcyBzZXQsIHdlIG11c3QgYWx3YXlzIGxvYWQgdGhlIHBhZ2Vcblx0XHRcdC8vIHRvIGF2b2lkIG92ZXJ3cml0aW5nIGluZGVmaW5pdGUgcHJvdGVjdGlvbi4gIE9mIGNvdXJzZSwgbm90XG5cdFx0XHQvLyBuZWVkZWQgaWYgc2V0dGluZyBpbmRlZmluaXRlIHdhdGNoaW5nIVxuXHRcdFx0aWYgKGN0eC53YXRjaGxpc3RFeHBpcnkgJiYgIU1vcmViaXRzLnN0cmluZy5pc0luZmluaXR5KGN0eC53YXRjaGxpc3RFeHBpcnkpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIEFQSS1iYXNlZCByZWRpcmVjdCByZXNvbHV0aW9uIG9ubHkgd29ya3MgZm9yIGFjdGlvbj1xdWVyeSBhbmRcblx0XHRcdC8vIGFjdGlvbj1lZGl0IGluIGFwcGVuZC9wcmVwZW5kL25ldyBtb2Rlc1xuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRpZiAoIWN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIG11c3QgbG9hZCB0aGUgcGFnZSB0byBjaGVjayBmb3IgY3Jvc3MgbmFtZXNwYWNlIHJlZGlyZWN0c1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGFjdGlvbiAhPT0gJ2VkaXQnIHx8IGN0eC5lZGl0TW9kZSA9PT0gJ2FsbCcgfHwgY3R4LmVkaXRNb2RlID09PSAncmV2ZXJ0Jykge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gZG8gd2UgbmVlZCB0byBmZXRjaCB0aGUgZWRpdCBwcm90ZWN0aW9uIGV4cGlyeT9cblx0XHRcdGlmIChNb3JlYml0cy51c2VySXNTeXNvcCAmJiAhY3R4LnN1cHByZXNzUHJvdGVjdFdhcm5pbmcpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdG5ldyBtdy5UaXRsZShNb3JlYml0cy5wYWdlTmFtZU5vcm0pLmdldFByZWZpeGVkVGV4dCgpICE9PVxuXHRcdFx0XHRcdG5ldyBtdy5UaXRsZShjdHgucGFnZU5hbWUpLmdldFByZWZpeGVkVGV4dCgpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyB3Z1Jlc3RyaWN0aW9uRWRpdCBpcyBudWxsIG9uIG5vbi1leGlzdGVudCBwYWdlcyxcblx0XHRcdFx0Ly8gc28gdGhpcyBuZWF0bHkgaGFuZGxlcyBub25leGlzdGVudCBwYWdlc1xuXHRcdFx0XHRjb25zdCBlZGl0UmVzdHJpY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z1Jlc3RyaWN0aW9uRWRpdCcpO1xuXHRcdFx0XHRpZiAoIWVkaXRSZXN0cmljdGlvbiB8fCBlZGl0UmVzdHJpY3Rpb24uaW5jbHVkZXMoJ3N5c29wJykpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiAhIW13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBXaGVuIGZ1bmN0aW9ucyBjYW4ndCB1c2Vcblx0XHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfmZuQ2FuVXNlTXdVc2VyVG9rZW58Zm5DYW5Vc2VNd1VzZXJUb2tlbn1cblx0XHQgKiBvciByZXF1aXJlIGNoZWNraW5nIHByb3RlY3Rpb24gb3Igd2F0Y2hlZCBzdGF0dXMsIG1haW50YWluIHRoZSBxdWVyeVxuXHRcdCAqIGluIG9uZSBwbGFjZS4gVXNlZCBmb3Ige0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSNkZWxldGVQYWdlfGRlbGV0ZX0sXG5cdFx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSN1bmRlbGV0ZVBhZ2V8dW5kZWxldGV9LFxuXHRcdCAqIHtAbGluayogTW9yZWJpdHMud2lraS5wYWdlI3Byb3RlY3R8cHJvdGVjdH0sXG5cdFx0ICogYW5kIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjbW92ZXxtb3ZlfVxuXHRcdCAqIChiYXNpY2FsbHksIGp1c3Qgbm90IHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjbG9hZHxsb2FkfSkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIC0gVGhlIGFjdGlvbiBiZWluZyB1bmRlcnRha2VuLCBlLmcuIFwiZWRpdFwiIG9yXG5cdFx0ICogXCJkZWxldGVcIi5cblx0XHQgKiBAcmV0dXJucyB7T2JqZWN0fSBBcHByb3ByaWF0ZSBxdWVyeS5cblx0XHQgKi9cblx0XHRjb25zdCBmbk5lZWRUb2tlbkluZm9RdWVyeSA9IChhY3Rpb24pID0+IHtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdGlucHJvcDogJ3dhdGNoZWQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHQvLyBQcm90ZWN0aW9uIG5vdCBjaGVja2VkIGZvciBub24tc3lzb3AgbW92ZXNcblx0XHRcdGlmIChhY3Rpb24gIT09ICdtb3ZlJyB8fCBNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0XHRxdWVyeS5pbnByb3AgKz0gJ3xwcm90ZWN0aW9uJztcblx0XHRcdH1cblx0XHRcdGlmIChjdHguZm9sbG93UmVkaXJlY3QgJiYgYWN0aW9uICE9PSAndW5kZWxldGUnKSB7XG5cdFx0XHRcdHF1ZXJ5LnJlZGlyZWN0cyA9ICcnOyAvLyBmb2xsb3cgYWxsIHJlZGlyZWN0c1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcXVlcnk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIGxvYWRTdWNjZXNzKCkgZm9yIGFwcGVuZCgpLCBwcmVwZW5kKCksIGFuZCBuZXdTZWN0aW9uKCkgdGhyZWFkc1xuXHRcdGNvbnN0IGZuQXV0b1NhdmUgPSAocGFnZW9iaikgPT4ge1xuXHRcdFx0cGFnZW9iai5zYXZlKGN0eC5vblNhdmVTdWNjZXNzLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIGxvYWRBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5Mb2FkU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LmxvYWRBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdGlmICghZm5DaGVja1BhZ2VOYW1lKHJlc3BvbnNlLCBjdHgub25Mb2FkRmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdGxldCByZXY7XG5cdFx0XHRjdHgucGFnZUV4aXN0cyA9ICFwYWdlLm1pc3Npbmc7XG5cdFx0XHRpZiAoY3R4LnBhZ2VFeGlzdHMpIHtcblx0XHRcdFx0W3Jldl0gPSBwYWdlLnJldmlzaW9ucztcblx0XHRcdFx0Y3R4Lmxhc3RFZGl0VGltZSA9IHJldi50aW1lc3RhbXA7XG5cdFx0XHRcdGN0eC5wYWdlVGV4dCA9IHJldi5jb250ZW50O1xuXHRcdFx0XHRjdHgucGFnZUlEID0gcGFnZS5wYWdlaWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgucGFnZVRleHQgPSAnJzsgLy8gYWxsb3cgZm9yIGNvbmNhdGVuYXRpb24sIGV0Yy5cblx0XHRcdFx0Y3R4LnBhZ2VJRCA9IDA7IC8vIG5vbmV4aXN0ZW50IGluIHJlc3BvbnNlLCBtYXRjaGVzIHdnQXJ0aWNsZUlkXG5cdFx0XHR9XG5cblx0XHRcdGN0eC5jc3JmVG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0aWYgKCFjdHguY3NyZlRva2VuKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5pyq6IO96I635Y+W57yW6L6R5Luk54mM44CCJywgJ+acquiDveWPluW+l+e3qOi8r+asiuadluOAgicpKTtcblx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5sb2FkVGltZSA9IGN0eC5sb2FkQXBpLmdldFJlc3BvbnNlKCkuY3VydGltZXN0YW1wO1xuXHRcdFx0aWYgKCFjdHgubG9hZFRpbWUpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmnKrog73ojrflj5blvZPliY3ml7bpl7TmiLPjgIInLCAn5pyq6IO95Y+W5b6X55W25YmN5pmC6ZaT5oiz44CCJykpO1xuXHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmNvbnRlbnRNb2RlbCA9IHBhZ2UuY29udGVudG1vZGVsO1xuXHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHQvLyBleHRyYWN0IHByb3RlY3Rpb24gaW5mbywgdG8gYWxlcnQgYWRtaW5zIHdoZW4gdGhleSBhcmUgYWJvdXQgdG8gZWRpdCBhIHByb3RlY3RlZCBwYWdlXG5cdFx0XHQvLyBJbmNsdWRlcyBjYXNjYWRpbmcgcHJvdGVjdGlvblxuXHRcdFx0aWYgKE1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHRcdGNvbnN0IGVkaXRQcm90ID0gcGFnZS5wcm90ZWN0aW9uXG5cdFx0XHRcdFx0LmZpbHRlcigocHIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBwci50eXBlID09PSAnZWRpdCcgJiYgcHIubGV2ZWwgPT09ICdzeXNvcCc7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucG9wKCk7XG5cdFx0XHRcdGlmIChlZGl0UHJvdCkge1xuXHRcdFx0XHRcdGN0eC5mdWxseVByb3RlY3RlZCA9IGVkaXRQcm90LmV4cGlyeTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y3R4LnJldmVydEN1cklEID0gcGFnZS5sYXN0cmV2aWQ7XG5cdFx0XHRjb25zdCB0ZXN0YWN0aW9ucyA9IHBhZ2UuYWN0aW9ucztcblx0XHRcdGN0eC50ZXN0QWN0aW9ucyA9IFtdOyAvLyB3YXMgbnVsbFxuXHRcdFx0Zm9yIChjb25zdCBhY3Rpb24gb2YgT2JqZWN0LmtleXModGVzdGFjdGlvbnMpKSB7XG5cdFx0XHRcdGlmICh0ZXN0YWN0aW9uc1thY3Rpb25dKSB7XG5cdFx0XHRcdFx0Y3R4LnRlc3RBY3Rpb25zW2N0eC50ZXN0QWN0aW9ucy5sZW5ndGhdID0gYWN0aW9uO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmVkaXRNb2RlID09PSAncmV2ZXJ0Jykge1xuXHRcdFx0XHRjdHgucmV2ZXJ0Q3VySUQgPSByZXYgJiYgcmV2LnJldmlkO1xuXHRcdFx0XHRpZiAoIWN0eC5yZXZlcnRDdXJJRCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5pyq6IO96I635Y+W5b2T5YmN5L+u6K6i54mI5pysSUTjgIInLCAn5pyq6IO95Y+W5b6X55uu5YmN5L+u6KiC54mI5pysSUTjgIInKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5yZXZlcnRVc2VyID0gcmV2ICYmIHJldi51c2VyO1xuXHRcdFx0XHRpZiAoIWN0eC5yZXZlcnRVc2VyKSB7XG5cdFx0XHRcdFx0aWYgKHJldiAmJiByZXYudXNlcmhpZGRlbikge1xuXHRcdFx0XHRcdFx0Ly8gdXNlcm5hbWUgd2FzIFJldkRlbCdkIG9yIG92ZXJzaWdodGVkXG5cdFx0XHRcdFx0XHRjdHgucmV2ZXJ0VXNlciA9IHdpbmRvdy53Z1VMUygnPOeUqOaIt+WQjeW3sumakOiXjz4nLCAnPOS9v+eUqOiAheWQjeeoseW3sumaseiXjz4nKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5pyq6IO96I635Y+W5q2k5L+u6K6i54mI5pys55qE57yW6L6R6ICF44CCJywgJ+acquiDveWPluW+l+atpOS/ruiogueJiOacrOeahOe3qOi8r+iAheOAgicpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHNldCByZXZlcnQgZWRpdCBzdW1tYXJ5XG5cdFx0XHRcdGN0eC5lZGl0U3VtbWFyeSA9IGBbW1FXOlVORE985pKk6ZSAXV3nlLEgJHtjdHgucmV2ZXJ0VXNlcn0g5omA5YGa5Ye655qEJHt3aW5kb3cud2dVTFMoJ+S/ruiuoiAnLCAn5L+u6KiCICcpfSR7XG5cdFx0XHRcdFx0Y3R4LnJldmVydE9sZElEXG5cdFx0XHRcdH3vvJoke2N0eC5lZGl0U3VtbWFyeX1gO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnBhZ2VMb2FkZWQgPSB0cnVlO1xuXHRcdFx0Ly8gbXcubm90aWZ5KFwiR2VuZXJhdGUgZWRpdCBjb25mbGljdCBub3dcIiwge3R5cGU6ICd3YXJuJywgdGFnOiAnbW9yZWJpdHMnfSk7ICAvLyBmb3IgdGVzdGluZyBlZGl0IGNvbmZsaWN0IHJlY292ZXJ5IGxvZ2ljXG5cdFx0XHRjdHgub25Mb2FkU3VjY2Vzcyh0aGlzKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0fTtcblx0XHQvLyBoZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgdGhlIHBhZ2UgbmFtZSByZXR1cm5lZCBmcm9tIHRoZSBBUElcblx0XHRjb25zdCBmbkNoZWNrUGFnZU5hbWUgPSBmdW5jdGlvbiAocmVzcG9uc2UsIG9uRmFpbHVyZSkge1xuXHRcdFx0aWYgKCFvbkZhaWx1cmUpIHtcblx0XHRcdFx0b25GYWlsdXJlID0gZW1wdHlGdW5jdGlvbjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhZ2UgPSByZXNwb25zZS5wYWdlcyAmJiByZXNwb25zZS5wYWdlc1swXTtcblx0XHRcdGlmIChwYWdlKSB7XG5cdFx0XHRcdC8vIGNoZWNrIGZvciBpbnZhbGlkIHRpdGxlc1xuXHRcdFx0XHRpZiAocGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmoIfpopjkuI3lkIjms5XvvJonLCBg5qiZ6aGM5LiN5ZCI5rOV77yaJHtjdHgucGFnZU5hbWV9YCkpO1xuXHRcdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGFib3J0XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gcmV0cmlldmUgYWN0dWFsIHRpdGxlIG9mIHRoZSBwYWdlIGFmdGVyIG5vcm1hbGl6YXRpb24gYW5kIHJlZGlyZWN0c1xuXHRcdFx0XHRjb25zdCByZXNvbHZlZE5hbWUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0XHRpZiAocmVzcG9uc2UucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgZm9yIGNyb3NzLW5hbWVzcGFjZSByZWRpcmVjdDpcblx0XHRcdFx0XHRjb25zdCBvcmlnTnMgPSBuZXcgbXcuVGl0bGUoY3R4LnBhZ2VOYW1lKS5uYW1lc3BhY2U7XG5cdFx0XHRcdFx0Y29uc3QgbmV3TnMgPSBuZXcgbXcuVGl0bGUocmVzb2x2ZWROYW1lKS5uYW1lc3BhY2U7XG5cdFx0XHRcdFx0aWYgKG9yaWdOcyAhPT0gbmV3TnMgJiYgIWN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QpIHtcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5piv6Leo5ZG95ZCN56m66Ze06YeN5a6a5ZCR5YiwJywgJ+aYr+i3qOWRveWQjeepuumWk+mHjeaWsOWwjuWQkeWIsCcpICtcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlZE5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn77yM55Wl6L+HJywgJ++8jOeVpemBjicpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBvbmx5IG5vdGlmeSB1c2VyIGZvciByZWRpcmVjdHMsIG5vdCBub3JtYWxpemF0aW9uXG5cdFx0XHRcdFx0bmV3IE1vcmViaXRzLnN0YXR1cyhcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5L+h5oGvJywgJ+izh+ioiicpLFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfku44gJywgJ+W+niAnKSArXG5cdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygnIOmHjeWumuWQkeWIsCAnLCAnIOmHjeaWsOWwjuWQkeWIsCAnKSArXG5cdFx0XHRcdFx0XHRcdHJlc29sdmVkTmFtZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnBhZ2VOYW1lID0gcmVzb2x2ZWROYW1lOyAvLyB1cGRhdGUgdG8gcmVkaXJlY3QgdGFyZ2V0IG9yIG5vcm1hbGl6ZWQgbmFtZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY291bGQgYmUgYSBjaXJjdWxhciByZWRpcmVjdCBvciBvdGhlciBwcm9ibGVtXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LiN6IO96Kej5p6Q6aG16Z2i55qE6YeN5a6a5ZCR77yaJywgJ+S4jeiDveino+aekOmggemdoueahOmHjeaWsOWwjuWQke+8micpICsgY3R4LnBhZ2VOYW1lXG5cdFx0XHRcdCk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0Ly8gZm9yY2UgZXJyb3IgdG8gc3RheSBvbiB0aGUgc2NyZWVuXG5cdFx0XHRcdCsrTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0O1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlOyAvLyBhbGwgT0tcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZSB3aGV0aGVyIHdlIHNob3VsZCBwcm92aWRlIGEgd2F0Y2hsaXN0IGV4cGlyeS4gIFdpbGwgbm90XG5cdFx0ICogZG8gc28gaWYgdGhlIHBhZ2UgaXMgY3VycmVudGx5IHBlcm1hbmVudGx5IHdhdGNoZWQsIG9yIHRoZSBjdXJyZW50XG5cdFx0ICogZXhwaXJ5IGlzICphZnRlciogdGhlIG5ldywgcHJvdmlkZWQgZXhwaXJ5LiAgT25seSBoYW5kbGVzIHN0cmluZ3Ncblx0XHQgKiByZWNvZ25pemVkIGJ5IHtAbGluayBNb3JlYml0cy5kYXRlfSBvciByZWxhdGl2ZSB0aW1lZnJhbWVzIHdpdGhcblx0XHQgKiB1bml0IGl0IGNhbiBwcm9jZXNzLiAgUmVsaWVzIG9uIHRoZSBmYWN0IHRoYXQgZm5DYW5Vc2VNd1VzZXJUb2tlblxuXHRcdCAqIHJlcXVpcmVzIHBhZ2UgbG9hZGluZyBpZiBhIHdhdGNobGlzdGV4cGlyeSBpcyBwcm92aWRlZCwgc28gd2UgYXJlXG5cdFx0ICogZW5zdXJlZCBvZiBrbm93aW5nIHRoZSB3YXRjaCBzdGF0dXMgYnkgdGhlIHVzZSBvZiB0aGlzLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5BcHBseVdhdGNobGlzdEV4cGlyeSA9ICgpID0+IHtcblx0XHRcdGlmIChjdHgud2F0Y2hsaXN0RXhwaXJ5KSB7XG5cdFx0XHRcdGlmICghY3R4LndhdGNoZWQgfHwgTW9yZWJpdHMuc3RyaW5nLmlzSW5maW5pdHkoY3R4LndhdGNobGlzdEV4cGlyeSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY3R4LndhdGNoZWQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0bGV0IG5ld0V4cGlyeTtcblx0XHRcdFx0XHQvLyBBdHRlbXB0IHRvIGRldGVybWluZSBpZiB0aGUgbmV3IGV4cGlyeSBpcyBhXG5cdFx0XHRcdFx0Ly8gcmVsYXRpdmUgKGUuZy4gYDEgbW9udGhgKSBvciBhYnNvbHV0ZSBkYXRldGltZVxuXHRcdFx0XHRcdGNvbnN0IHJlbCA9IGN0eC53YXRjaGxpc3RFeHBpcnkuc3BsaXQoJyAnKTtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0bmV3RXhwaXJ5ID0gbmV3IE1vcmViaXRzLmRhdGUoKS5hZGQocmVsWzBdLCByZWxbMV0pO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0bmV3RXhwaXJ5ID0gbmV3IE1vcmViaXRzLmRhdGUoY3R4LndhdGNobGlzdEV4cGlyeSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIElmIHRoZSBkYXRlIGlzIHZhbGlkLCBvbmx5IHVzZSBpdCBpZiBpdCBleHRlbmRzIHRoZSBjdXJyZW50IGV4cGlyeVxuXHRcdFx0XHRcdGlmIChuZXdFeHBpcnkuaXNWYWxpZCgpKSB7XG5cdFx0XHRcdFx0XHRpZiAobmV3RXhwaXJ5LmlzQWZ0ZXIobmV3IE1vcmViaXRzLmRhdGUoY3R4LndhdGNoZWQpKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gSWYgaXQncyBzdGlsbCBub3QgdmFsaWQsIGhvcGUgaXQncyBhIHZhbGlkIE1XIGV4cGlyeSBmb3JtYXQgdGhhdFxuXHRcdFx0XHRcdFx0Ly8gTW9yZWJpdHMuZGF0ZSBkb2Vzbid0IHJlY29nbml6ZSwgc28ganVzdCBkZWZhdWx0IHRvIHVzaW5nIGl0LlxuXHRcdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIGFsc28gaW5jbHVkZSBtaW5vciB0eXBvcy5cblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBzYXZlQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuU2F2ZVN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYWxsJzsgLy8gY2FuY2VsIGFwcGVuZC9wcmVwZW5kL25ld1NlY3Rpb24vcmV2ZXJ0IG1vZGVzXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5zYXZlQXBpLmdldFJlc3BvbnNlKCk7XG5cdFx0XHQvLyBzZWUgaWYgdGhlIEFQSSB0aGlua3Mgd2Ugd2VyZSBzdWNjZXNzZnVsXG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHQvLyByZWFsIHN1Y2Nlc3Ncblx0XHRcdFx0Ly8gZGVmYXVsdCBvbiBzdWNjZXNzIGFjdGlvbiAtIGRpc3BsYXkgbGluayBmb3IgZWRpdGVkIHBhZ2Vcblx0XHRcdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBtdy51dGlsLmdldFVybChjdHgucGFnZU5hbWUpKTtcblx0XHRcdFx0bGluay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdHgucGFnZU5hbWUpKTtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyhbJ+WujOaIkO+8iCcsIGxpbmssICfvvIknXSk7XG5cdFx0XHRcdGlmIChjdHgub25TYXZlU3VjY2Vzcykge1xuXHRcdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzKHRoaXMpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGVycm9ycyBoZXJlIGFyZSBvbmx5IGdlbmVyYXRlZCBieSBleHRlbnNpb25zIHdoaWNoIGhvb2sgQVBJRWRpdEJlZm9yZVNhdmUgd2l0aGluIE1lZGlhV2lraSxcblx0XHRcdC8vIHdoaWNoIGFzIG9mIDEuMzQuMC13bWYuMjMgKFNlcHQgMjAxOSkgc2hvdWxkIG9ubHkgZW5jb21wYXNzIGNhcHRjaGEgbWVzc2FnZXNcblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LmNhcHRjaGEpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfkuI3og73kv53lrZjpobXpnaLvvIzlm6DmnI3liqHlmajopoHmsYLmgqjovpPlhaXpqozor4HnoIHjgIInLCAn5LiN6IO95YSy5a2Y6aCB6Z2i77yM5Zug5Ly65pyN5Zmo6KaB5rGC5oKo6Ly45YWl6amX6K2J56K844CCJylcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5L+d5a2Y6aG16Z2i5pe255SxQVBJ5b6X5Yiw5pyq55+l6ZSZ6K+vJywgJ+WEsuWtmOmggemdouaZgueUsUFQSeW+l+WIsOacquefpemMr+iqpCcpKTtcblx0XHRcdH1cblx0XHRcdC8vIGZvcmNlIGVycm9yIHRvIHN0YXkgb24gdGhlIHNjcmVlblxuXHRcdFx0KytNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7XG5cdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gc2F2ZUFwaS5wb3N0KClcblx0XHRjb25zdCBmblNhdmVFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGVycm9yQ29kZSA9IGN0eC5zYXZlQXBpLmdldEVycm9yQ29kZSgpO1xuXHRcdFx0Ly8gY2hlY2sgZm9yIGVkaXQgY29uZmxpY3Rcblx0XHRcdGlmIChlcnJvckNvZGUgPT09ICdlZGl0Y29uZmxpY3QnICYmIGN0eC5jb25mbGljdFJldHJpZXMrKyA8IGN0eC5tYXhDb25mbGljdFJldHJpZXMpIHtcblx0XHRcdFx0Ly8gZWRpdCBjb25mbGljdHMgY2FuIG9jY3VyIHdoZW4gdGhlIHBhZ2UgbmVlZHMgdG8gYmUgcHVyZ2VkIGZyb20gdGhlIHNlcnZlciBjYWNoZVxuXHRcdFx0XHRjb25zdCBwdXJnZVF1ZXJ5ID0ge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3B1cmdlJyxcblx0XHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSwgLy8gcmVkaXJlY3RzIGFyZSBhbHJlYWR5IHJlc29sdmVkXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Y29uc3QgcHVyZ2VBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfmo4DmtYvliLDnvJbovpHlhrLnqoHvvIzmraPlnKjmm7TmlrDmnI3liqHlmajnvJPlrZgnLCAn5qqi5ris5Yiw57eo6Lyv6KGd56qB77yM5q2j5Zyo5pu05paw5Ly65pyN5Zmo5b+r5Y+WJyksXG5cdFx0XHRcdFx0cHVyZ2VRdWVyeSxcblx0XHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5qOA5rWL5Yiw57yW6L6R5Yay56qB77yM6YeN6K+V5L+u5pS5JywgJ+aqoua4rOWIsOe3qOi8r+ihneeqge+8jOmHjeippuS/ruaUuScpKTtcblx0XHRcdFx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0XHRcdFx0Y3R4LnNhdmVBcGkucG9zdCgpOyAvLyBuZWNlc3NhcmlseSBhcHBlbmQsIHByZXBlbmQsIG9yIG5ld1NlY3Rpb24sIHNvIHRoaXMgc2hvdWxkIHdvcmsgYXMgZGVzaXJlZFxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y3R4LmxvYWRBcGkucG9zdCgpOyAvLyByZWxvYWQgdGhlIHBhZ2UgYW5kIHJlYXBwbHkgdGhlIGVkaXRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50XG5cdFx0XHRcdCk7XG5cdFx0XHRcdHB1cmdlQXBpLnBvc3QoKTtcblx0XHRcdFx0Ly8gY2hlY2sgZm9yIG5ldHdvcmsgb3Igc2VydmVyIGVycm9yXG5cdFx0XHR9IGVsc2UgaWYgKChlcnJvckNvZGUgPT09IG51bGwgfHwgZXJyb3JDb2RlID09PSB1bmRlZmluZWQpICYmIGN0eC5yZXRyaWVzKysgPCBjdHgubWF4UmV0cmllcykge1xuXHRcdFx0XHQvLyB0aGUgZXJyb3IgbWlnaHQgYmUgdHJhbnNpZW50LCBzbyB0cnkgYWdhaW5cblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+S/neWtmOWksei0pe+8jOWcqDLnp5LlkI7ph43or5XigKbigKYnLCAn5YSy5a2Y5aSx5pWX77yM5ZyoMuenkuW+jOmHjeippuKApuKApicpKTtcblx0XHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0XHQvLyB3YWl0IGZvciBzb21ldGltZSBmb3IgY2xpZW50IHRvIHJlZ2FpbiBjb25uZWN0aXZpdHlcblx0XHRcdFx0c2xlZXAoMjAwMCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0Y3R4LnNhdmVBcGkucG9zdCgpOyAvLyBnaXZlIGl0IGFub3RoZXIgZ28hXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBoYXJkIGVycm9yLCBnaXZlIHVwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5zYXZlQXBpLmdldFJlc3BvbnNlKCk7XG5cdFx0XHRcdGNvbnN0IGVycm9yRGF0YSA9XG5cdFx0XHRcdFx0cmVzcG9uc2UuZXJyb3IgfHxcblx0XHRcdFx0XHQvLyBiYyBlcnJvciBmb3JtYXRcblx0XHRcdFx0XHRyZXNwb25zZS5lcnJvcnNbMF0uZGF0YTsgLy8gaHRtbC93aWtpdGV4dC9wbGFpbnRleHQgZXJyb3IgZm9ybWF0XG5cdFx0XHRcdHN3aXRjaCAoZXJyb3JDb2RlKSB7XG5cdFx0XHRcdFx0Y2FzZSAncHJvdGVjdGVkcGFnZSc6XG5cdFx0XHRcdFx0XHQvLyBub24tYWRtaW4gYXR0ZW1wdGluZyB0byBlZGl0IGEgcHJvdGVjdGVkIHBhZ2UgLSB0aGlzIGdpdmVzIGEgZnJpZW5kbGllciBtZXNzYWdlIHRoYW4gdGhlIGRlZmF1bHRcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5LiN6IO95L+d5a2Y5L+u5pS577ya6aG16Z2i6KKr5L+d5oqkJywgJ+S4jeiDveWEsuWtmOS/ruaUue+8mumggemdouiiq+S/neittycpKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2FidXNlZmlsdGVyLWRpc2FsbG93ZWQnOlxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn57yW6L6R6KKr6Ziy5rul55So6L+H5ruk5Zmo6KeE5YiZ4oCcJywgJ+e3qOi8r+iiq+mYsua/q+eUqOmBjua/vuWZqOimj+WJh+OAjCcpICtcblx0XHRcdFx0XHRcdFx0XHRlcnJvckRhdGEuYWJ1c2VmaWx0ZXIuZGVzY3JpcHRpb24gK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHRcdCfigJ3pmLvmraLjgILoi6XmgqjorqTkuLrmgqjnmoTor6XmrKHnvJbovpHmmK/mnInmhI/kuYnnmoTvvIzor7foh7MgV2lraXBlZGlhOumYsua7peeUqOi/h+a7pOWZqC/plJnor6/miqXlkYog5o+Q5oql44CCJyxcblx0XHRcdFx0XHRcdFx0XHRcdCfjgI3pmLvmraLjgILoi6Xmgqjoqo3ngrrmgqjnmoToqbLmrKHnt6jovK/mmK/mnInmhI/nvqnnmoTvvIzoq4voh7MgV2lraXBlZGlhOumYsua/q+eUqOmBjua/vuWZqC/pjK/oqqTloLHlkYog5o+Q5aCx44CCJ1xuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdhYnVzZWZpbHRlci13YXJuaW5nJzpcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnvJbovpHooqvpmLLmu6XnlKjov4fmu6Tlmajop4TliJnigJwnLCAn57eo6Lyv6KKr6Ziy5r+r55So6YGO5r++5Zmo6KaP5YmH44CMJyksXG5cdFx0XHRcdFx0XHRcdGVycm9yRGF0YS5hYnVzZWZpbHRlci5kZXNjcmlwdGlvbixcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdCfigJ3orablkYrvvIzoi6Xmgqjku43luIzmnJvlgZrlh7ror6XnvJbovpHvvIzor7flsJ3or5Xph43mlrDmj5DkuqTvvIzmoLnmja7ov4fmu6TlmajnmoTorr7nva7mgqjlj6/og73lj6/ku6XkvZzlh7rmraTnvJbovpHjgIInLFxuXHRcdFx0XHRcdFx0XHRcdCfjgI3orablkYrvvIzoi6Xmgqjku43luIzmnJvlgZrlh7roqbLnt6jovK/vvIzoq4vlmJfoqabph43mlrDmj5DkuqTvvIzmoLnmk5rpgY7mv77lmajnmoToqK3lrprmgqjlj6/og73lj6/ku6XkvZzlh7rmraTnt6jovK/jgIInXG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHRcdC8vIFdlIHNob3VsZCBwcm92aWRlIHRoZSB1c2VyIHdpdGggYSB3YXkgdG8gYXV0b21hdGljYWxseSByZXRyeSB0aGUgYWN0aW9uIGlmIHRoZXkgc28gY2hvb3NlIC1cblx0XHRcdFx0XHRcdC8vIEkgY2FuJ3Qgc2VlIGhvdyB0byBkbyB0aGlzIHdpdGhvdXQgY3JlYXRpbmcgYSBVSSBkZXBlbmRlbmN5IG9uIE1vcmViaXRzLndpa2kucGFnZSB0aG91Z2ggLS0gVFRPXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdzcGFtYmxhY2tsaXN0Jzoge1xuXHRcdFx0XHRcdFx0Ly8gSWYgbXVsdGlwbGUgaXRlbXMgYXJlIGJsYWNrbGlzdGVkLCB3ZSBvbmx5IHJldHVybiB0aGUgZmlyc3Rcblx0XHRcdFx0XHRcdGNvbnN0IFtzcGFtXSA9IGVycm9yRGF0YS5zcGFtYmxhY2tsaXN0Lm1hdGNoZXM7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfkuI3og73kv53lrZjpobXpnaLvvIzlm6BVUkwgJywgJ+S4jeiDveWEsuWtmOmggemdou+8jOWboFVSTCAnKSArXG5cdFx0XHRcdFx0XHRcdFx0c3BhbSArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCcg5Zyo5Z6D5Zy+6ZO+5o6l6buR5ZCN5Y2V5Lit44CCJywgJyDlnKjlnoPlnL7pgKPntZDpu5HlkI3llq7kuK3jgIInKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LiN6IO95L+d5a2Y5L+u5pS577yaJywgJ+S4jeiDveWEsuWtmOS/ruaUue+8micpICsgY3R4LnNhdmVBcGkuZ2V0RXJyb3JUZXh0KClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LmVkaXRNb2RlID0gJ2FsbCc7IC8vIGNhbmNlbCBhcHBlbmQvcHJlcGVuZC9uZXdTZWN0aW9uL3JldmVydCBtb2Rlc1xuXHRcdFx0XHRpZiAoY3R4Lm9uU2F2ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgaXNUZXh0UmVkaXJlY3QgPSAodGV4dCkgPT4ge1xuXHRcdFx0aWYgKCF0ZXh0KSB7XG5cdFx0XHRcdC8vIG5vIHRleHQgLSBjb250ZW50IGVtcHR5IG9yIGluYWNjZXNzaWJsZSAocmV2ZGVsbGVkIG9yIHN1cHByZXNzZWQpXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBNb3JlYml0cy5sMTBuLnJlZGlyZWN0VGFnQWxpYXNlcy5zb21lKCh0YWcpID0+IHtcblx0XHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoYF5cXFxccyoke3RhZ31cXFxcV2AsICdpJykudGVzdCh0ZXh0KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0Y29uc3QgZm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5sb29rdXBDcmVhdGlvbkFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0aWYgKCFmbkNoZWNrUGFnZU5hbWUocmVzcG9uc2UsIGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByZXYgPSByZXNwb25zZS5wYWdlc1swXS5yZXZpc2lvbnMgJiYgcmVzcG9uc2UucGFnZXNbMF0ucmV2aXNpb25zWzBdO1xuXHRcdFx0aWYgKCFyZXYpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xmib7liLAnLCAn54Sh5rOV5om+5YiwJykgK1xuXHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn55qE5Lu75L2V5L+u6K6i54mI5pysJywgJ+eahOS7u+S9leS/ruiogueJiOacrCcpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yIHx8ICFpc1RleHRSZWRpcmVjdChyZXYuY29udGVudCkpIHtcblx0XHRcdFx0Y3R4LmNyZWF0b3IgPSByZXYudXNlcjtcblx0XHRcdFx0aWYgKCFjdHguY3JlYXRvcikge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu66ICF55qE5ZCN5a2XJywgJ+eEoeazleWPluW+l+mggemdouW7uueri+iAheeahOWQjeWtlycpKTtcblx0XHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC50aW1lc3RhbXAgPSByZXYudGltZXN0YW1wO1xuXHRcdFx0XHRpZiAoIWN0eC50aW1lc3RhbXApIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuaXtumXtCcsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vmmYLplpMnKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5bey6I635Y+W6aG16Z2i5Yib5bu65L+h5oGvJywgJ+W3suWPluW+l+mggemdouW7uueri+izh+ioiicpKTtcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzKHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnF1ZXJ5LnJ2bGltaXQgPSA1MDsgLy8gbW9kaWZ5IHByZXZpb3VzIHF1ZXJ5IHRvIGZldGNoIG1vcmUgcmV2aXNpb25zXG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5xdWVyeS50aXRsZXMgPSBjdHgucGFnZU5hbWU7IC8vIHVwZGF0ZSBwYWdlTmFtZSBpZiByZWRpcmVjdCByZXNvbHV0aW9uIHRvb2sgcGxhY2UgaW4gZWFybGllciBxdWVyeVxuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bpobXpnaLliJvlu7rkv6Hmga8nLCAn5Y+W5b6X6aCB6Z2i5bu656uL6LOH6KiKJyksXG5cdFx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnF1ZXJ5LFxuXHRcdFx0XHRcdGZuTG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yLFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgZm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5sb29rdXBDcmVhdGlvbkFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0Y29uc3QgcmV2cyA9IHJlc3BvbnNlLnBhZ2VzWzBdLnJldmlzaW9ucztcblx0XHRcdGZvciAoY29uc3QgcmV2IG9mIHJldnMpIHtcblx0XHRcdFx0aWYgKCFpc1RleHRSZWRpcmVjdChyZXYuY29udGVudCkpIHtcblx0XHRcdFx0XHRjdHguY3JlYXRvciA9IHJldi51c2VyO1xuXHRcdFx0XHRcdGN0eC50aW1lc3RhbXAgPSByZXYudGltZXN0YW1wO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5jcmVhdG9yKSB7XG5cdFx0XHRcdC8vIGZhbGxiYWNrIHRvIGdpdmUgZmlyc3QgcmV2aXNpb24gYXV0aG9yIGlmIG5vIG5vbi1yZWRpcmVjdCB2ZXJzaW9uIGluIHRoZSBmaXJzdCA1MFxuXHRcdFx0XHRjdHguY3JlYXRvciA9IHJldnNbMF0udXNlcjtcblx0XHRcdFx0Y3R4LnRpbWVzdGFtcCA9IHJldnNbMF0udGltZXN0YW1wO1xuXHRcdFx0XHRpZiAoIWN0eC5jcmVhdG9yKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rogIXnmoTlkI3lrZcnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL6ICF55qE5ZCN5a2XJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghY3R4LnRpbWVzdGFtcCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuaXtumXtCcsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vmmYLplpMnKSk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+W3suiOt+WPlumhtemdouWIm+W7uuS/oeaBrycsICflt7Llj5blvpfpoIHpnaLlu7rnq4vos4foqIonKSk7XG5cdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvblN1Y2Nlc3ModGhpcyk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBDb21tb24gY2hlY2tzIGZvciBhY3Rpb24gbWV0aG9kcy4gVXNlZCBmb3IgbW92ZSwgdW5kZWxldGUsIGRlbGV0ZSxcblx0XHQgKiBwcm90ZWN0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAtIFRoZSBhY3Rpb24gYmVpbmcgY2hlY2tlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gb25GYWlsdXJlIC0gRmFpbHVyZSBjYWxsYmFjay5cblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRjb25zdCBmblByZWZsaWdodENoZWNrcyA9IGZ1bmN0aW9uIChhY3Rpb24sIG9uRmFpbHVyZSkge1xuXHRcdFx0Ly8gaWYgYSBub24tYWRtaW4gdHJpZXMgdG8gZG8gdGhpcywgZG9uJ3QgYm90aGVyXG5cdFx0XHRpZiAoIU1vcmViaXRzLnVzZXJJc1N5c29wICYmIGFjdGlvbiAhPT0gJ21vdmUnKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5peg5rOV5a+56aG16Z2i6L+b6KGM4oCcJywgJ+eEoeazleWwjemggemdoumAsuihjOOAjCcpICtcblx0XHRcdFx0XHRcdGFjdGlvbiArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneaTjeS9nO+8muWPquacieeuoeeQhuWRmOWPr+S7pei/m+ihjOatpOaTjeS9nCcsICfjgI3mk43kvZzvvJrlj6rmnInnrqHnkIblk6Hlj6/ku6XpgLLooYzmraTmk43kvZwnKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LmVkaXRTdW1tYXJ5KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKGBJbnRlcm5hbCBlcnJvcjogJHthY3Rpb259IHJlYXNvbiBub3Qgc2V0ICh1c2Ugc2V0RWRpdFN1bW1hcnkgZnVuY3Rpb24pIWApO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlOyAvLyBhbGwgT0tcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIENvbW1vbiBjaGVja3MgZm9yIGZuUHJvY2VzcyBmdW5jdGlvbnMgKGBmblByb2Nlc3NEZWxldGVgLCBgZm5Qcm9jZXNzTW92ZWAsIGV0Yy5cblx0XHQgKiBVc2VkIGZvciBtb3ZlLCB1bmRlbGV0ZSwgZGVsZXRlLCBwcm90ZWN0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAtIFRoZSBhY3Rpb24gYmVpbmcgY2hlY2tlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gb25GYWlsdXJlIC0gRmFpbHVyZSBjYWxsYmFjay5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcmVzcG9uc2UgLSBUaGUgcmVzcG9uc2UgZG9jdW1lbnQgZnJvbSB0aGUgQVBJIGNhbGwuXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5Qcm9jZXNzQ2hlY2tzID0gZnVuY3Rpb24gKGFjdGlvbiwgb25GYWlsdXJlLCByZXNwb25zZSkge1xuXHRcdFx0Y29uc3QgW3ttaXNzaW5nfV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdC8vIE5vIHVuZGVsZXRlIGFzIGFuIGV4aXN0aW5nIHBhZ2UgY291bGQgaGF2ZSBkZWxldGVkIHJldmlzaW9uc1xuXHRcdFx0Y29uc3QgYWN0aW9uTWlzc2luZyA9IG1pc3NpbmcgJiYgWydkZWxldGUnLCAnbW92ZSddLmluY2x1ZGVzKGFjdGlvbik7XG5cdFx0XHRjb25zdCBwcm90ZWN0TWlzc2luZyA9IGFjdGlvbiA9PT0gJ3Byb3RlY3QnICYmIG1pc3NpbmcgJiYgKGN0eC5wcm90ZWN0RWRpdCB8fCBjdHgucHJvdGVjdE1vdmUpO1xuXHRcdFx0Y29uc3Qgc2FsdE1pc3NpbmcgPSBhY3Rpb24gPT09ICdwcm90ZWN0JyAmJiAhbWlzc2luZyAmJiBjdHgucHJvdGVjdENyZWF0ZTtcblx0XHRcdGlmIChhY3Rpb25NaXNzaW5nIHx8IHByb3RlY3RNaXNzaW5nIHx8IHNhbHRNaXNzaW5nKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdGAke1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xlr7npobXpnaLov5vooYzigJwnLCAn54Sh5rOV5bCN6aCB6Z2i6YCy6KGM44CMJykgK1xuXHRcdFx0XHRcdFx0YWN0aW9uICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd5pON5L2c77yM5Zug5Li66aG16Z2iJywgJ+OAjeaTjeS9nO+8jOWboOeCuumggemdoicpICtcblx0XHRcdFx0XHRcdChtaXNzaW5nID8gJ+W3suS4jScgOiB3aW5kb3cud2dVTFMoJ+W3sue7jycsICflt7LntpMnKSlcblx0XHRcdFx0XHR95a2Y5ZyoYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIERlbGV0ZSwgdW5kZWxldGUsIG1vdmVcblx0XHRcdC8vIGV4dHJhY3QgcHJvdGVjdGlvbiBpbmZvXG5cdFx0XHRsZXQgZWRpdHByb3Q7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAndW5kZWxldGUnKSB7XG5cdFx0XHRcdGVkaXRwcm90ID0gcmVzcG9uc2UucGFnZXNbMF0ucHJvdGVjdGlvblxuXHRcdFx0XHRcdC5maWx0ZXIoKHByKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHIudHlwZSA9PT0gJ2NyZWF0ZScgJiYgcHIubGV2ZWwgPT09ICdzeXNvcCc7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucG9wKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2RlbGV0ZScgfHwgYWN0aW9uID09PSAnbW92ZScpIHtcblx0XHRcdFx0ZWRpdHByb3QgPSByZXNwb25zZS5wYWdlc1swXS5wcm90ZWN0aW9uXG5cdFx0XHRcdFx0LmZpbHRlcigocHIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBwci50eXBlID09PSAnZWRpdCcgJiYgcHIubGV2ZWwgPT09ICdzeXNvcCc7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucG9wKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGVkaXRwcm90ICYmXG5cdFx0XHRcdCFjdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZyAmJlxuXHRcdFx0XHQhY29uZmlybShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aCqOWNs+WwhuWvueWFqOS/neaKpOmhtemdouKAnCcsICfmgqjljbPlsIflsI3lhajkv53orbfpoIHpnaLjgIwnKSArXG5cdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0KGVkaXRwcm90LmV4cGlyeSA9PT0gJ2luZmluaXR5J1xuXHRcdFx0XHRcdFx0XHQ/IHdpbmRvdy53Z1VMUygn4oCd77yI5rC45LmF77yJJywgJ+OAje+8iOawuOS5he+8iScpXG5cdFx0XHRcdFx0XHRcdDogYCR7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAne+8iOWIsOacn++8micsICfjgI3vvIjliLDmnJ/vvJonKSArXG5cdFx0XHRcdFx0XHRcdFx0XHRuZXcgTW9yZWJpdHMuZGF0ZShlZGl0cHJvdC5leHBpcnkpLmNhbGVuZGFyKCd1dGMnKVxuXHRcdFx0XHRcdFx0XHRcdH0gKFVUQynvvIlgKSArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAnei/m+ihjOKAnCcsICfjgI3pgLLooYzjgIwnKSArXG5cdFx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3mk43kvZwnLCAn44CN5pON5L2cJykgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHQn44CCXFxuXFxu5Y2V5Ye756Gu5a6a5Lul57un57ut5pON5L2c77yM5oiW5Y2V5Ye75Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJyxcblx0XHRcdFx0XHRcdFx0J+OAglxcblxcbum7nuaTiueiuuWumuS7pee5vOe6jOaTjeS9nO+8jOaIlum7nuaTiuWPlua2iOS7peWPlua2iOaTjeS9nOOAgidcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5bey5Y+W5raI5a+55YWo5L+d5oqk6aG16Z2i55qE5pON5L2c44CCJywgJ+W3suWPlua2iOWwjeWFqOS/neitt+mggemdoueahOaTjeS9nOOAgicpKTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW4pIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfml6Dms5Xojrflj5bku6TniYzjgIInLCAn54Sh5rOV5Y+W5b6X5qyK5p2W44CCJykpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlOyAvLyBhbGwgT0tcblx0XHR9O1xuXG5cdFx0Y29uc3QgZm5Qcm9jZXNzTW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBwYWdlVGl0bGU7XG5cdFx0XHRsZXQgdG9rZW47XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignbW92ZScpKSB7XG5cdFx0XHRcdHRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHRcdFx0cGFnZVRpdGxlID0gY3R4LnBhZ2VOYW1lO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubW92ZUFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHRpZiAoIWZuUHJvY2Vzc0NoZWNrcygnbW92ZScsIGN0eC5vbk1vdmVGYWlsdXJlLCByZXNwb25zZSkpIHtcblx0XHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdtb3ZlJyxcblx0XHRcdFx0ZnJvbTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0bzogY3R4Lm1vdmVEZXN0aW5hdGlvbixcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4Lm1vdmVUYWxrUGFnZSkge1xuXHRcdFx0XHRxdWVyeS5tb3ZldGFsayA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGlmIChjdHgubW92ZVN1YnBhZ2VzKSB7XG5cdFx0XHRcdHF1ZXJ5Lm1vdmVzdWJwYWdlcyA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGlmIChjdHgubW92ZVN1cHByZXNzUmVkaXJlY3QpIHtcblx0XHRcdFx0cXVlcnkubm9yZWRpcmVjdCA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGN0eC5tb3ZlUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfnp7vliqjpobXpnaLigKbigKYnLCAn56e75YuV6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25Nb3ZlU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vbk1vdmVGYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4Lm1vdmVQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5tb3ZlUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBmblByb2Nlc3NQYXRyb2wgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGF0cm9sJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gRGlkbid0IG5lZWQgdG8gbG9hZCB0aGUgcGFnZVxuXHRcdFx0aWYgKGN0eC5yY2lkKSB7XG5cdFx0XHRcdHF1ZXJ5LnJjaWQgPSBjdHgucmNpZDtcblx0XHRcdFx0cXVlcnkudG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ3BhdHJvbFRva2VuJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5wYXRyb2xBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdFx0Ly8gRG9uJ3QgcGF0cm9sIGlmIG5vdCB1bnBhdHJvbGxlZFxuXHRcdFx0XHRpZiAoIXJlc3BvbnNlLnJlY2VudGNoYW5nZXNbMF0udW5wYXRyb2xsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgW3tsYXN0cmV2aWR9XSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0XHRpZiAoIWxhc3RyZXZpZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRxdWVyeS5yZXZpZCA9IGxhc3RyZXZpZDtcblx0XHRcdFx0Y29uc3QgdG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHF1ZXJ5LnRva2VuID0gdG9rZW47XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGF0cm9sU3RhdCA9IG5ldyBNb3JlYml0cy5zdGF0dXMod2luZG93LndnVUxTKCfmoIforrDpobXpnaLkuLrlt7Llt6Hmn6UnLCAn5qiZ6KiY6aCB6Z2i54K65bey5beh5p+lJykpO1xuXHRcdFx0Y3R4LnBhdHJvbFByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5beh5p+l6aG16Z2i4oCm4oCmJywgJ+W3oeafpemggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0cGF0cm9sU3RhdFxuXHRcdFx0KTtcblx0XHRcdGN0eC5wYXRyb2xQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5wYXRyb2xQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuUHJvY2Vzc0RlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBwYWdlVGl0bGU7XG5cdFx0XHRsZXQgdG9rZW47XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZGVsZXRlJykpIHtcblx0XHRcdFx0dG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBjdHgucGFnZU5hbWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5kZWxldGVBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdFx0aWYgKCFmblByb2Nlc3NDaGVja3MoJ2RlbGV0ZScsIGN0eC5vbkRlbGV0ZUZhaWx1cmUsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2RlbGV0ZScsXG5cdFx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHRcdHRva2VuLFxuXHRcdFx0XHRyZWFzb246IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5Yig6Zmk6aG16Z2i4oCm4oCmJywgJ+WIqumZpOmggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Y3R4Lm9uRGVsZXRlU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGZuUHJvY2Vzc0RlbGV0ZUVycm9yXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBkZWxldGVQcm9jZXNzQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuUHJvY2Vzc0RlbGV0ZUVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgZXJyb3JDb2RlID0gY3R4LmRlbGV0ZVByb2Nlc3NBcGkuZ2V0RXJyb3JDb2RlKCk7XG5cdFx0XHQvLyBjaGVjayBmb3IgXCJEYXRhYmFzZSBxdWVyeSBlcnJvclwiXG5cdFx0XHRpZiAoZXJyb3JDb2RlID09PSAnaW50ZXJuYWxfYXBpX2Vycm9yX0RCUXVlcnlFcnJvcicgJiYgY3R4LnJldHJpZXMrKyA8IGN0eC5tYXhSZXRyaWVzKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCfmlbDmja7lupPmn6Xor6LplJnor6/vvIzph43or5UnLCAn6LOH5paZ5bqr5p+l6Kmi6Yyv6Kqk77yM6YeN6KmmJykpO1xuXHRcdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHRcdGN0eC5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTsgLy8gZ2l2ZSBpdCBhbm90aGVyIGdvIVxuXHRcdFx0fSBlbHNlIGlmIChlcnJvckNvZGUgPT09ICdtaXNzaW5ndGl0bGUnKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5LiN6IO95Yig6Zmk6aG16Z2i77yM5Zug5YW25bey5LiN5a2Y5ZyoJywgJ+S4jeiDveWIqumZpOmggemdou+8jOWboOWFtuW3suS4jeWtmOWcqCcpKTtcblx0XHRcdFx0aWYgKGN0eC5vbkRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25EZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBoYXJkIGVycm9yLCBnaXZlIHVwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazleWIoOmZpOmhtemdou+8micsICfnhKHms5XliKrpmaTpoIHpnaLvvJonKSArIGN0eC5kZWxldGVQcm9jZXNzQXBpLmdldEVycm9yVGV4dCgpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChjdHgub25EZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uRGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgZm5Qcm9jZXNzVW5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgcGFnZVRpdGxlO1xuXHRcdFx0bGV0IHRva2VuO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ3VuZGVsZXRlJykpIHtcblx0XHRcdFx0dG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBjdHgucGFnZU5hbWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC51bmRlbGV0ZUFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHRpZiAoIWZuUHJvY2Vzc0NoZWNrcygndW5kZWxldGUnLCBjdHgub25VbmRlbGV0ZUZhaWx1cmUsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3VuZGVsZXRlJyxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRjdHgudW5kZWxldGVQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+i/mOWOn+mhtemdouKApuKApicsICfpgoTljp/poIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGN0eC5vblVuZGVsZXRlU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGZuUHJvY2Vzc1VuZGVsZXRlRXJyb3Jcblx0XHRcdCk7XG5cdFx0XHRjdHgudW5kZWxldGVQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSB1bmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5Qcm9jZXNzVW5kZWxldGVFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGVycm9yQ29kZSA9IGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkuZ2V0RXJyb3JDb2RlKCk7XG5cdFx0XHQvLyBjaGVjayBmb3IgXCJEYXRhYmFzZSBxdWVyeSBlcnJvclwiXG5cdFx0XHRpZiAoZXJyb3JDb2RlID09PSAnaW50ZXJuYWxfYXBpX2Vycm9yX0RCUXVlcnlFcnJvcicpIHtcblx0XHRcdFx0aWYgKGN0eC5yZXRyaWVzKysgPCBjdHgubWF4UmV0cmllcykge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCfmlbDmja7lupPmn6Xor6LplJnor6/vvIzph43or5UnLCAn6LOH5paZ5bqr5p+l6Kmi6Yyv6Kqk77yM6YeN6KmmJykpO1xuXHRcdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0XHRjdHgudW5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTsgLy8gZ2l2ZSBpdCBhbm90aGVyIGdvIVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHQn5oyB57ut55qE5pWw5o2u5bqT5p+l6K+i6ZSZ6K+v77yM6YeN5paw5Yqg6L296aG16Z2i5bm26YeN6K+VJyxcblx0XHRcdFx0XHRcdFx0J+aMgee6jOeahOizh+aWmeW6q+afpeipoumMr+iqpO+8jOmHjeaWsOi8ieWFpemggemdouS4pumHjeippidcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmIChjdHgub25VbmRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZXJyb3JDb2RlID09PSAnY2FudHVuZGVsZXRlJykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHQn5peg5rOV6L+Y5Y6f5Yig6Zmk6aG16Z2i77yM5Zug5rKh5pyJ54mI5pys5L6b6L+Y5Y6f5oiW5bey6KKr6L+Y5Y6fJyxcblx0XHRcdFx0XHRcdCfnhKHms5XpgoTljp/liKrpmaTpoIHpnaLvvIzlm6DmspLmnInniYjmnKzkvpvpgoTljp/miJblt7LooqvpgoTljp8nXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGhhcmQgZXJyb3IsIGdpdmUgdXBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5peg5rOV6L+Y5Y6f6aG16Z2i77yaJywgJ+eEoeazlemChOWOn+mggemdou+8micpICsgY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvclRleHQoKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGZuUHJvY2Vzc1Byb3RlY3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5wcm90ZWN0QXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRpZiAoIWZuUHJvY2Vzc0NoZWNrcygncHJvdGVjdCcsIGN0eC5vblByb3RlY3RGYWlsdXJlLCByZXNwb25zZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdGNvbnN0IHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdC8vIEZldGNoIGV4aXN0aW5nIHByb3RlY3Rpb24gbGV2ZWxzXG5cdFx0XHRjb25zdCBwcnMgPSByZXNwb25zZS5wYWdlc1swXS5wcm90ZWN0aW9uO1xuXHRcdFx0bGV0IGVkaXRwcm90O1xuXHRcdFx0bGV0IG1vdmVwcm90O1xuXHRcdFx0bGV0IGNyZWF0ZXByb3Q7XG5cdFx0XHRmb3IgKGNvbnN0IHByIG9mIHBycykge1xuXHRcdFx0XHQvLyBGaWx0ZXIgb3V0IHByb3RlY3Rpb24gZnJvbSBjYXNjYWRpbmdcblx0XHRcdFx0aWYgKHByLnR5cGUgPT09ICdlZGl0JyAmJiAhcHIuc291cmNlKSB7XG5cdFx0XHRcdFx0ZWRpdHByb3QgPSBwcjtcblx0XHRcdFx0fSBlbHNlIGlmIChwci50eXBlID09PSAnbW92ZScpIHtcblx0XHRcdFx0XHRtb3ZlcHJvdCA9IHByO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHByLnR5cGUgPT09ICdjcmVhdGUnKSB7XG5cdFx0XHRcdFx0Y3JlYXRlcHJvdCA9IHByO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBGYWxsIGJhY2sgdG8gY3VycmVudCBsZXZlbHMgaWYgbm90IGV4cGxpY2l0bHkgc2V0XG5cdFx0XHRpZiAoIWN0eC5wcm90ZWN0RWRpdCAmJiBlZGl0cHJvdCkge1xuXHRcdFx0XHRjdHgucHJvdGVjdEVkaXQgPSB7XG5cdFx0XHRcdFx0bGV2ZWw6IGVkaXRwcm90LmxldmVsLFxuXHRcdFx0XHRcdGV4cGlyeTogZWRpdHByb3QuZXhwaXJ5LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgucHJvdGVjdE1vdmUgJiYgbW92ZXByb3QpIHtcblx0XHRcdFx0Y3R4LnByb3RlY3RNb3ZlID0ge1xuXHRcdFx0XHRcdGxldmVsOiBtb3ZlcHJvdC5sZXZlbCxcblx0XHRcdFx0XHRleHBpcnk6IG1vdmVwcm90LmV4cGlyeSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LnByb3RlY3RDcmVhdGUgJiYgY3JlYXRlcHJvdCkge1xuXHRcdFx0XHRjdHgucHJvdGVjdENyZWF0ZSA9IHtcblx0XHRcdFx0XHRsZXZlbDogY3JlYXRlcHJvdC5sZXZlbCxcblx0XHRcdFx0XHRleHBpcnk6IGNyZWF0ZXByb3QuZXhwaXJ5LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGVmYXVsdCB0byBwcmUtZXhpc3RpbmcgY2FzY2FkaW5nIHByb3RlY3Rpb24gaWYgdW5jaGFuZ2VkIChzaW1pbGFyIHRvIGFib3ZlKVxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0Q2FzY2FkZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRjdHgucHJvdGVjdENhc2NhZGUgPSAhIXBycy5maWx0ZXIoKHByKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHByLmNhc2NhZGU7XG5cdFx0XHRcdH0pLmxlbmd0aDtcblx0XHRcdH1cblx0XHRcdC8vIFdhcm4gaWYgY2FzY2FkaW5nIHByb3RlY3Rpb24gYmVpbmcgYXBwbGllZCB3aXRoIGFuIGludmFsaWQgcHJvdGVjdGlvbiBsZXZlbCxcblx0XHRcdC8vIHdoaWNoIGZvciBlZGl0IHByb3RlY3Rpb24gd2lsbCBjYXVzZSBjYXNjYWRpbmcgdG8gYmUgc2lsZW50bHkgc3RyaXBwZWRcblx0XHRcdGlmIChjdHgucHJvdGVjdENhc2NhZGUpIHtcblx0XHRcdFx0Ly8gT24gbW92ZSBwcm90ZWN0aW9uLCB0aGlzIGlzIHRlY2huaWNhbGx5IHN0cmljdGVyIHRoYW4gdGhlIE1XIEFQSSxcblx0XHRcdFx0Ly8gYnV0IHNlZW1zIHJlYXNvbmFibGUgdG8gYXZvaWQgZHVtYiB2YWx1ZXMgYW5kIG1pc2xlYWRpbmcgbG9nIGVudHJpZXMgKFQyNjU2MjYpXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQoIWN0eC5wcm90ZWN0RWRpdCB8fFxuXHRcdFx0XHRcdFx0Y3R4LnByb3RlY3RFZGl0LmxldmVsICE9PSAnc3lzb3AnIHx8XG5cdFx0XHRcdFx0XHQhY3R4LnByb3RlY3RNb3ZlIHx8XG5cdFx0XHRcdFx0XHRjdHgucHJvdGVjdE1vdmUubGV2ZWwgIT09ICdzeXNvcCcpICYmXG5cdFx0XHRcdFx0IWNvbmZpcm0oXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aCqOW3suWvueKAnCcsICfmgqjlt7LlsI3jgIwnKSArXG5cdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd5ZCv55So5LqG6L+e6ZSB5L+d5oqkJywgJ+OAjeWVn+eUqOS6humAo+mOluS/neittycpICtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdCfvvIzkvYbmsqHmnInorr7nva7ku4XnrqHnkIblkZjnmoTkv53miqTnuqfliKvjgIJcXG5cXG4nLFxuXHRcdFx0XHRcdFx0XHRcdCfvvIzkvYbmspLmnInoqK3lrprlg4XnrqHnkIblk6HnmoTkv53orbfntJrliKXjgIJcXG5cXG4nXG5cdFx0XHRcdFx0XHRcdCkgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J+WNleWHu+ehruiupOS7peiHquWKqOiwg+aVtOW5tue7p+e7rei/numUgeWFqOS/neaKpO+8jOWNleWHu+WPlua2iOS7pei3s+i/h+atpOaTjeS9nCcsXG5cdFx0XHRcdFx0XHRcdFx0J+m7nuaTiueiuuiqjeS7peiHquWLleiqv+aVtOS4pue5vOe6jOmAo+mOluWFqOS/neitt++8jOm7nuaTiuWPlua2iOS7pei3s+mBjuatpOaTjeS9nCdcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfov57plIHkv53miqTlt7Llj5bmtojjgIInLCAn6YCj6Y6W5L+d6K235bey5Y+W5raI44CCJykpO1xuXHRcdFx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHgucHJvdGVjdEVkaXQubGV2ZWwgPSAnc3lzb3AnO1xuXHRcdFx0XHRjdHgucHJvdGVjdE1vdmUubGV2ZWwgPSAnc3lzb3AnO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQnVpbGQgcHJvdGVjdGlvbiBsZXZlbHMgYW5kIGV4cGlyeXMgKGV4cGlyaWVzPykgZm9yIHF1ZXJ5XG5cdFx0XHRjb25zdCBwcm90ZWN0aW9ucyA9IFtdO1xuXHRcdFx0Y29uc3QgZXhwaXJ5cyA9IFtdO1xuXHRcdFx0aWYgKGN0eC5wcm90ZWN0RWRpdCkge1xuXHRcdFx0XHRwcm90ZWN0aW9uc1twcm90ZWN0aW9ucy5sZW5ndGhdID0gYGVkaXQ9JHtjdHgucHJvdGVjdEVkaXQubGV2ZWx9YDtcblx0XHRcdFx0ZXhwaXJ5c1tleHBpcnlzLmxlbmd0aF0gPSBjdHgucHJvdGVjdEVkaXQuZXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0TW92ZSkge1xuXHRcdFx0XHRwcm90ZWN0aW9uc1twcm90ZWN0aW9ucy5sZW5ndGhdID0gYG1vdmU9JHtjdHgucHJvdGVjdE1vdmUubGV2ZWx9YDtcblx0XHRcdFx0ZXhwaXJ5c1tleHBpcnlzLmxlbmd0aF0gPSBjdHgucHJvdGVjdE1vdmUuZXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0Q3JlYXRlKSB7XG5cdFx0XHRcdHByb3RlY3Rpb25zW3Byb3RlY3Rpb25zLmxlbmd0aF0gPSBgY3JlYXRlPSR7Y3R4LnByb3RlY3RDcmVhdGUubGV2ZWx9YDtcblx0XHRcdFx0ZXhwaXJ5c1tleHBpcnlzLmxlbmd0aF0gPSBjdHgucHJvdGVjdENyZWF0ZS5leHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncHJvdGVjdCcsXG5cdFx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHRcdHRva2VuLFxuXHRcdFx0XHRwcm90ZWN0aW9uczogcHJvdGVjdGlvbnMuam9pbignfCcpLFxuXHRcdFx0XHRleHBpcnk6IGV4cGlyeXMuam9pbignfCcpLFxuXHRcdFx0XHRyZWFzb246IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHQvLyBPbmx5IHNob3dzIHVwIGluIGxvZ3MsIG5vdCBwYWdlIGhpc3Rvcnlcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RDYXNjYWRlKSB7XG5cdFx0XHRcdHF1ZXJ5LmNhc2NhZGUgPSAndHJ1ZSc7XG5cdFx0XHR9XG5cdFx0XHRjdHgucHJvdGVjdFByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5L+d5oqk6aG16Z2i4oCm4oCmJywgJ+S/neitt+mggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Y3R4Lm9uUHJvdGVjdFN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5wcm90ZWN0UHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgucHJvdGVjdFByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Y29uc3Qgc2xlZXAgPSAobWlsbGlzZWNvbmRzKSA9PiB7XG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRcdHNldFRpbWVvdXQoZGVmZXJyZWQucmVzb2x2ZSwgbWlsbGlzZWNvbmRzKTtcblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9O1xuXHR9OyAvLyBlbmQgTW9yZWJpdHMud2lraS5wYWdlXG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5wcmV2aWV3ICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFVzZSB0aGUgQVBJIHRvIHBhcnNlIGEgZnJhZ21lbnQgb2Ygd2lraXRleHQgYW5kIHJlbmRlciBpdCBhcyBIVE1MLlxuXHQgKlxuXHQgKiBUaGUgc3VnZ2VzdGVkIGltcGxlbWVudGF0aW9uIHBhdHRlcm4gKGluIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9IGFuZFxuXHQgKiB7QGxpbmsgTW9yZWJpdHMucXVpY2tGb3JtfSBzaXR1YXRpb25zKSBpcyB0byBjb25zdHJ1Y3QgYVxuXHQgKiBgTW9yZWJpdHMud2lraS5wcmV2aWV3YCBvYmplY3QgYWZ0ZXIgcmVuZGVyaW5nIGEgYE1vcmViaXRzLnF1aWNrRm9ybWAsIGFuZFxuXHQgKiBiaW5kIHRoZSBvYmplY3QgdG8gYW4gYXJiaXRyYXJ5IHByb3BlcnR5IG9mIHRoZSBmb3JtIChlLmcuIHxwcmV2aWV3ZXJ8KS5cblx0ICogRm9yIGFuIGV4YW1wbGUsIHNlZSB0d2lua2xld2Fybi5qcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHByZXZpZXdib3ggLSBUaGUgZWxlbWVudCB0aGF0IHdpbGwgY29udGFpbiB0aGUgcmVuZGVyZWQgSFRNTCxcblx0ICogdXN1YWxseSBhIDxkaXY+IGVsZW1lbnQuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLnByZXZpZXcgPSBmdW5jdGlvbiAocHJldmlld2JveCkge1xuXHRcdHRoaXMucHJldmlld2JveCA9IHByZXZpZXdib3g7XG5cdFx0JChwcmV2aWV3Ym94KS5hZGRDbGFzcygnbW9yZWJpdHMtcHJldmlld2JveCcpLmhpZGUoKTtcblx0XHQvKipcblx0XHQgKiBEaXNwbGF5cyB0aGUgcHJldmlldyBib3gsIGFuZCBiZWdpbnMgYW4gYXN5bmNocm9ub3VzIGF0dGVtcHRcblx0XHQgKiB0byByZW5kZXIgdGhlIHNwZWNpZmllZCB3aWtpdGV4dC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpdGV4dCAtIFdpa2l0ZXh0IHRvIHJlbmRlcjsgbW9zdCB0aGluZ3Mgc2hvdWxkIHdvcmssIGluY2x1ZGluZyBgc3Vic3Q6YCBhbmQgYH5+fn5gLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbcGFnZVRpdGxlXSAtIE9wdGlvbmFsIHBhcmFtZXRlciBmb3IgdGhlIHBhZ2UgdGhpcyBzaG91bGQgYmUgcmVuZGVyZWQgYXMgYmVpbmcgb24sIGlmIG9taXR0ZWQgaXQgaXMgdGFrZW4gYXMgdGhlIGN1cnJlbnQgcGFnZS5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW3NlY3Rpb25UaXRsZV0gLSBJZiBwcm92aWRlZCwgcmVuZGVyIHRoZSB0ZXh0IGFzIGEgbmV3IHNlY3Rpb24gdXNpbmcgdGhpcyBhcyB0aGUgdGl0bGUuXG5cdFx0ICogQHJldHVybnMge2pRdWVyeS5wcm9taXNlfVxuXHRcdCAqL1xuXHRcdHRoaXMuYmVnaW5SZW5kZXIgPSAod2lraXRleHQsIHBhZ2VUaXRsZSwgc2VjdGlvblRpdGxlKSA9PiB7XG5cdFx0XHQkKHByZXZpZXdib3gpLnNob3coKTtcblx0XHRcdGNvbnN0IHN0YXR1c3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRwcmV2aWV3Ym94LmFwcGVuZENoaWxkKHN0YXR1c3NwYW4pO1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLmluaXQoc3RhdHVzc3Bhbik7XG5cdFx0XHQvLyDoi6XpobXpnaLkuI3mmK93aWtpdGV4dO+8iOS+i+WmgkpT44CBQ1NT562J77yJ77yM6YKj5LmI5om+5LiA5Liqd2lraXRleHTpobXpnaLmnaXpooTop4jjgIJcblx0XHRcdGxldCBwYWdlTmFtZSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcblx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKSAhPT0gJ3dpa2l0ZXh0Jykge1xuXHRcdFx0XHRwYWdlTmFtZSA9IGBEcmFmdDoke3BhZ2VOYW1lfWA7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRwcm9wOiBbJ3RleHQnLCAnbW9kdWxlcyddLFxuXHRcdFx0XHRwc3Q6IHRydWUsXG5cdFx0XHRcdC8vIFBTVCA9IHByZS1zYXZlIHRyYW5zZm9ybTsgdGhpcyBtYWtlcyBzdWJzdGl0dXRpb24gd29yayBwcm9wZXJseVxuXHRcdFx0XHRwcmV2aWV3OiB0cnVlLFxuXHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSB8fCBwYWdlTmFtZSxcblx0XHRcdFx0ZGlzYWJsZWxpbWl0cmVwb3J0OiB0cnVlLFxuXHRcdFx0XHRkaXNhYmxlZWRpdHNlY3Rpb246IHRydWUsXG5cdFx0XHRcdHVzZWxhbmc6IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyksXG5cdFx0XHRcdC8vIFVzZSB3Z1VzZXJMYW5ndWFnZSBmb3IgcHJldmlld1xuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoc2VjdGlvblRpdGxlKSB7XG5cdFx0XHRcdHF1ZXJ5LnNlY3Rpb24gPSAnbmV3Jztcblx0XHRcdFx0cXVlcnkuc2VjdGlvbnRpdGxlID0gc2VjdGlvblRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVuZGVyQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+WKoOi9veS4reKApuKApicsICfovInlhaXkuK3igKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGZuUmVuZGVyU3VjY2Vzcyxcblx0XHRcdFx0bmV3IE1vcmViaXRzLnN0YXR1cyh3aW5kb3cud2dVTFMoJ+mihOiniCcsICfpoJDopr0nKSlcblx0XHRcdCk7XG5cdFx0XHRyZW5kZXJBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Y29uc3QgZm5SZW5kZXJTdWNjZXNzID0gKGFwaW9iaikgPT4ge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhcGlvYmouZ2V0UmVzcG9uc2UoKTtcblx0XHRcdGNvbnN0IGh0bWwgPSByZXNwb25zZS5wYXJzZS50ZXh0O1xuXHRcdFx0aWYgKCFodG1sKSB7XG5cdFx0XHRcdGFwaW9iai5zdGF0ZWxlbS5lcnJvcih3aW5kb3cud2dVTFMoJ+WKoOi9vemihOiniOWksei0pe+8jOaIluaooeadv+S4uuepuicsICfovInlhaXpoJDopr3lpLHmlZfvvIzmiJbmqKHmnb/ngrrnqbonKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHByZXZpZXdib3guaW5uZXJIVE1MID0gaHRtbDtcblx0XHRcdG13LmxvYWRlci5sb2FkKHJlc3BvbnNlLnBhcnNlLm1vZHVsZXN0eWxlcyk7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChyZXNwb25zZS5wYXJzZS5tb2R1bGVzKTtcblx0XHRcdC8vIHRoaXMgbWFrZXMgbGlua3Mgb3BlbiBpbiBuZXcgdGFiXG5cdFx0XHQkKHByZXZpZXdib3gpLmZpbmQoJ2EnKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJykuYXR0cigncmVsJywgJ25vb3BlbmVyIG5vcmVmZXJyZXInKTtcblx0XHR9O1xuXHRcdC8qKiBIaWRlcyB0aGUgcHJldmlldyBib3ggYW5kIGNsZWFycyBpdC4gKi9cblx0XHR0aGlzLmNsb3NlUHJldmlldyA9ICgpID0+IHtcblx0XHRcdCQocHJldmlld2JveCkuZW1wdHkoKS5oaWRlKCk7XG5cdFx0fTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpdGV4dCAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBXaWtpdGV4dCBtYW5pcHVsYXRpb24uXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMud2lraXRleHRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpdGV4dCA9IHt9O1xuXHQvKipcblx0ICogR2V0IHRoZSB2YWx1ZSBvZiBldmVyeSBwYXJhbWV0ZXIgZm91bmQgaW4gdGhlIHdpa2l0ZXh0IG9mIGEgZ2l2ZW4gdGVtcGxhdGUuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFdpa2l0ZXh0IGNvbnRhaW5pbmcgYSB0ZW1wbGF0ZS5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSAtIEluZGV4IG5vdGluZyB3aGVyZSBpbiB0aGUgdGV4dCB0aGUgdGVtcGxhdGUgYmVnaW5zLlxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBge25hbWU6IHRlbXBsYXRlTmFtZSwgcGFyYW1ldGVyczoge2tleTogdmFsdWV9fWAuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpdGV4dC5wYXJzZVRlbXBsYXRlID0gKHRleHQsIHN0YXJ0KSA9PiB7XG5cdFx0c3RhcnQgfHw9IDA7XG5cdFx0Y29uc3QgbGV2ZWwgPSBbXTsgLy8gVHJhY2sgb2YgaG93IGRlZXAgd2UgYXJlICh7eywge3t7LCBvciBbWylcblx0XHRsZXQgY291bnQgPSAtMTsgLy8gTnVtYmVyIG9mIHBhcmFtZXRlcnMgZm91bmRcblx0XHRsZXQgdW5uYW1lZCA9IDA7IC8vIEtlZXAgdHJhY2sgb2Ygd2hhdCBudW1iZXIgYW4gdW5uYW1lZCBwYXJhbWV0ZXIgc2hvdWxkIHJlY2VpdmVcblx0XHRsZXQgZXF1YWxzID0gLTE7IC8vIEFmdGVyIGZpbmRpbmcgXCI9XCIgYmVmb3JlIGEgcGFyYW1ldGVyLCB0aGUgaW5kZXg7IG90aGVyd2lzZSwgLTFcblx0XHRsZXQgY3VycmVudCA9ICcnO1xuXHRcdGNvbnN0IHJlc3VsdCA9IHtcblx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0cGFyYW1ldGVyczoge30sXG5cdFx0fTtcblx0XHRsZXQga2V5O1xuXHRcdGxldCB2YWx1ZTtcblx0XHQvKipcblx0XHQgKiBGdW5jdGlvbiB0byBoYW5kbGUgZmluZGluZyBwYXJhbWV0ZXIgdmFsdWVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbZmluYWw9ZmFsc2VdIC0gV2hldGhlciB0aGlzIGlzIHRoZSBmaW5hbFxuXHRcdCAqIHBhcmFtZXRlciBhbmQgd2UgbmVlZCB0byByZW1vdmUgdGhlIHRyYWlsaW5nIGB9fWAuXG5cdFx0ICovXG5cdFx0Y29uc3QgZmluZFBhcmFtID0gKGZpbmFsKSA9PiB7XG5cdFx0XHQvLyBOb3RoaW5nIGZvdW5kIHlldCwgdGhpcyBtdXN0IGJlIHRoZSB0ZW1wbGF0ZSBuYW1lXG5cdFx0XHRpZiAoY291bnQgPT09IC0xKSB7XG5cdFx0XHRcdHJlc3VsdC5uYW1lID0gY3VycmVudC5zbGljZSgyKS50cmltKCk7XG5cdFx0XHRcdCsrY291bnQ7XG5cdFx0XHR9IGVsc2UgaWYgKGVxdWFscyA9PT0gLTEpIHtcblx0XHRcdFx0Ly8gSW4gYSBwYXJhbWV0ZXJcblx0XHRcdFx0Ly8gTm8gZXF1YWxzLCBzbyBpdCBtdXN0IGJlIHVubmFtZWQ7IG5vIHRyaW0gc2luY2Ugd2hpdGVzcGFjZSBhbGxvd2VkXG5cdFx0XHRcdGNvbnN0IHBhcmFtID0gZmluYWwgPyBjdXJyZW50LnNsaWNlKGVxdWFscyArIDEsIC0yKSA6IGN1cnJlbnQ7XG5cdFx0XHRcdGlmIChwYXJhbSkge1xuXHRcdFx0XHRcdHJlc3VsdC5wYXJhbWV0ZXJzWysrdW5uYW1lZF0gPSBwYXJhbTtcblx0XHRcdFx0XHQrK2NvdW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBXZSBmb3VuZCBhbiBlcXVhbHMsIHNvIHNhdmUgdGhlIHBhcmFtZXRlciBhcyBrZXk6IHZhbHVlXG5cdFx0XHRcdGtleSA9IGN1cnJlbnQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgZXF1YWxzKSkudHJpbSgpO1xuXHRcdFx0XHR2YWx1ZSA9IGZpbmFsID8gY3VycmVudC5zbGljZShlcXVhbHMgKyAxLCAtMikudHJpbSgpIDogY3VycmVudC5zbGljZShNYXRoLm1heCgwLCBlcXVhbHMgKyAxKSkudHJpbSgpO1xuXHRcdFx0XHRyZXN1bHQucGFyYW1ldGVyc1trZXldID0gdmFsdWU7XG5cdFx0XHRcdGVxdWFscyA9IC0xO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgdGV4dC5sZW5ndGg7ICsraSkge1xuXHRcdFx0Y29uc3QgdGVzdDMgPSB0ZXh0LnNsaWNlKGksIGkgKyAzKTtcblx0XHRcdGlmICh0ZXN0MyA9PT0gJ3t7eycgfHwgKHRlc3QzID09PSAnfX19JyAmJiBsZXZlbC5hdCgtMSkgPT09IDMpKSB7XG5cdFx0XHRcdGN1cnJlbnQgKz0gdGVzdDM7XG5cdFx0XHRcdGkgKz0gMjtcblx0XHRcdFx0aWYgKHRlc3QzID09PSAne3t7Jykge1xuXHRcdFx0XHRcdGxldmVsW2xldmVsLmxlbmd0aF0gPSAzO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldmVsLnBvcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgdGVzdDIgPSB0ZXh0LnNsaWNlKGksIGkgKyAyKTtcblx0XHRcdC8vIEVudGVyaW5nIGEgdGVtcGxhdGUgKG9yIGxpbmspXG5cdFx0XHRpZiAodGVzdDIgPT09ICd7eycgfHwgdGVzdDIgPT09ICdbWycpIHtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXN0Mjtcblx0XHRcdFx0KytpO1xuXHRcdFx0XHRpZiAodGVzdDIgPT09ICd7eycpIHtcblx0XHRcdFx0XHRsZXZlbFtsZXZlbC5sZW5ndGhdID0gMjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsZXZlbFtsZXZlbC5sZW5ndGhdID0gJ3dsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIEVpdGhlciBsZWF2aW5nIGEgbGluayBvciB0ZW1wbGF0ZS9wYXJzZXIgZnVuY3Rpb25cblx0XHRcdGlmICgodGVzdDIgPT09ICd9fScgJiYgbGV2ZWwuYXQoLTEpID09PSAyKSB8fCAodGVzdDIgPT09ICddXScgJiYgbGV2ZWwuYXQoLTEpID09PSAnd2wnKSkge1xuXHRcdFx0XHRjdXJyZW50ICs9IHRlc3QyO1xuXHRcdFx0XHQrK2k7XG5cdFx0XHRcdGxldmVsLnBvcCgpO1xuXHRcdFx0XHQvLyBGaW5kIHRoZSBmaW5hbCBwYXJhbWV0ZXIgaWYgdGhpcyByZWFsbHkgaXMgdGhlIGVuZFxuXHRcdFx0XHRpZiAodGVzdDIgPT09ICd9fScgJiYgbGV2ZWwubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0ZmluZFBhcmFtKHRydWUpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRleHQuY2hhckF0KGkpID09PSAnfCcgJiYgbGV2ZWwubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdC8vIEFub3RoZXIgcGlwZSBmb3VuZCwgdG9wbGV2ZWwsIHNvIHBhcmFtZXRlciBjb21pbmcgdXAhXG5cdFx0XHRcdGZpbmRQYXJhbSgpO1xuXHRcdFx0XHRjdXJyZW50ID0gJyc7XG5cdFx0XHR9IGVsc2UgaWYgKGVxdWFscyA9PT0gLTEgJiYgdGV4dC5jaGFyQXQoaSkgPT09ICc9JyAmJiBsZXZlbC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Ly8gRXF1YWxzIGZvdW5kLCB0b3BsZXZlbFxuXHRcdFx0XHRlcXVhbHMgPSBjdXJyZW50Lmxlbmd0aDtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXh0LmNoYXJBdChpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEp1c3QgYWR2YW5jZSB0aGUgcG9zaXRpb25cblx0XHRcdFx0Y3VycmVudCArPSB0ZXh0LmNoYXJBdChpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0LyoqXG5cdCAqIEFkanVzdCBhbmQgbWFuaXB1bGF0ZSB0aGUgd2lraXRleHQgb2YgYSBwYWdlLlxuXHQgKlxuXHQgKiBAY2xhc3Ncblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2l0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gV2lraXRleHQgdG8gYmUgbWFuaXB1bGF0ZWQuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpdGV4dC5wYWdlID0gZnVuY3Rpb24gKHRleHQpIHtcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHR9O1xuXHRNb3JlYml0cy53aWtpdGV4dC5wYWdlLnByb3RvdHlwZSA9IHtcblx0XHR0ZXh0OiAnJyxcblx0XHQvKipcblx0XHQgKiBSZW1vdmVzIGxpbmtzIHRvIGBsaW5rX3RhcmdldGAgZnJvbSB0aGUgcGFnZSB0ZXh0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxpbmtUYXJnZXRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRyZW1vdmVMaW5rKGxpbmtUYXJnZXQpIHtcblx0XHRcdGNvbnN0IG13VGl0bGUgPSBtdy5UaXRsZS5uZXdGcm9tVGV4dChsaW5rVGFyZ2V0KTtcblx0XHRcdGNvbnN0IG5hbWVzcGFjZUlEID0gbXdUaXRsZS5nZXROYW1lc3BhY2VJZCgpO1xuXHRcdFx0Y29uc3QgdGl0bGUgPSBtd1RpdGxlLmdldE1haW5UZXh0KCk7XG5cdFx0XHRsZXQgbGlua1JlZ2V4U3RyaW5nID0gJyc7XG5cdFx0XHRpZiAobmFtZXNwYWNlSUQgIT09IDApIHtcblx0XHRcdFx0bGlua1JlZ2V4U3RyaW5nID0gYCR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgobmFtZXNwYWNlSUQpfTpgO1xuXHRcdFx0fVxuXHRcdFx0bGlua1JlZ2V4U3RyaW5nICs9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgodGl0bGUpO1xuXHRcdFx0Ly8gRm9yIG1vc3QgbmFtZXNwYWNlcywgdW5saW5rIGJvdGggW1tVc2VyOlRlc3RdXSBhbmQgW1s6VXNlcjpUZXN0XV1cblx0XHRcdC8vIEZvciBmaWxlcyBhbmQgY2F0ZWdvcmllcywgb25seSB1bmxpbmsgW1s6Q2F0ZWdvcnk6VGVzdF1dLiBEbyBub3QgdW5saW5rIFtbQ2F0ZWdvcnk6VGVzdF1dXG5cdFx0XHRjb25zdCBpc0ZpbGVPckNhdGVnb3J5ID0gWzYsIDE0XS5pbmNsdWRlcyhuYW1lc3BhY2VJRCk7XG5cdFx0XHRjb25zdCBjb2xvbiA9IGlzRmlsZU9yQ2F0ZWdvcnkgPyAnOicgOiAnOj8nO1xuXHRcdFx0Y29uc3Qgc2ltcGxlTGlua1JlZ2V4ID0gbmV3IFJlZ0V4cChgXFxcXFtcXFxcWyR7Y29sb259KCR7bGlua1JlZ2V4U3RyaW5nfSlcXFxcXVxcXFxdYCwgJ2cnKTtcblx0XHRcdGNvbnN0IHBpcGVkTGlua1JlZ2V4ID0gbmV3IFJlZ0V4cChgXFxcXFtcXFxcWyR7Y29sb259JHtsaW5rUmVnZXhTdHJpbmd9XFxcXHwoLis/KVxcXFxdXFxcXF1gLCAnZycpO1xuXHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2Uoc2ltcGxlTGlua1JlZ2V4LCAnJDEnKS5yZXBsYWNlKHBpcGVkTGlua1JlZ2V4LCAnJDEnKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ29tbWVudHMgb3V0IGltYWdlcyBmcm9tIHBhZ2UgdGV4dDsgaWYgdXNlZCBpbiBhIGdhbGxlcnksIGRlbGV0ZXMgdGhlIHdob2xlIGxpbmUuXG5cdFx0ICogSWYgdXNlZCBhcyBhIHRlbXBsYXRlIGFyZ3VtZW50IChub3QgbmVjZXNzYXJpbHkgd2l0aCBgRmlsZTpgIHByZWZpeCksIHRoZSB0ZW1wbGF0ZSBwYXJhbWV0ZXIgaXMgY29tbWVudGVkIG91dC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSAtIEltYWdlIG5hbWUgd2l0aG91dCBgRmlsZTpgIHByZWZpeC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW3JlYXNvbl0gLSBSZWFzb24gdG8gYmUgaW5jbHVkZWQgaW4gY29tbWVudCwgYWxvbmdzaWRlIHRoZSBjb21tZW50ZWQtb3V0IGltYWdlLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdGNvbW1lbnRPdXRJbWFnZShpbWFnZSwgcmVhc29uKSB7XG5cdFx0XHRjb25zdCB1bmJpbmRlciA9IG5ldyBNb3JlYml0cy51bmJpbmRlcih0aGlzLnRleHQpO1xuXHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8IS0tJywgJy0tPicpO1xuXHRcdFx0cmVhc29uID0gcmVhc29uID8gYCR7cmVhc29ufTogYCA6ICcnO1xuXHRcdFx0Y29uc3QgaW1hZ2VSZWdleFN0cmluZyA9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoaW1hZ2UpO1xuXHRcdFx0Ly8gQ2hlY2sgZm9yIG5vcm1hbCBpbWFnZSBsaW5rcywgaS5lLiBbW0ZpbGU6Rm9vYmFyLnBuZ3wuLi5dXVxuXHRcdFx0Ly8gV2lsbCBlYXQgdGhlIHdob2xlIGxpbmtcblx0XHRcdGNvbnN0IGxpbmtzUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcWyR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ31cXFxccypbXFxcXHwoPzpcXFxcXVxcXFxdKV1gXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgYWxsTGlua3MgPSBNb3JlYml0cy5zdHJpbmcuc3BsaXRXZWlnaHRlZEJ5S2V5cyh1bmJpbmRlci5jb250ZW50LCAnW1snLCAnXV0nKTtcblx0XHRcdGZvciAoY29uc3QgYWxsTGluayBvZiBhbGxMaW5rcykge1xuXHRcdFx0XHRpZiAobGlua3NSZWdleC50ZXN0KGFsbExpbmspKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQgPSBgPCEtLSAke3JlYXNvbn0ke2FsbExpbmt9IC0tPmA7XG5cdFx0XHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZShhbGxMaW5rLCByZXBsYWNlbWVudCk7XG5cdFx0XHRcdFx0Ly8gdW5iaW5kIHRoZSBuZXdseSBjcmVhdGVkIGNvbW1lbnRzXG5cdFx0XHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8IS0tJywgJy0tPicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBDaGVjayBmb3IgZ2FsbGVyeSBpbWFnZXMsIGkuZS4gaW5zdGFuY2VzIHRoYXQgbXVzdCBzdGFydCBvbiBhIG5ldyBsaW5lLFxuXHRcdFx0Ly8gZXZlbnR1YWxseSBwcmVjZWRlZCB3aXRoIHNvbWUgc3BhY2UsIGFuZCBtdXN0IGluY2x1ZGUgRmlsZTogcHJlZml4XG5cdFx0XHQvLyBXaWxsIGVhdCB0aGUgd2hvbGUgbGluZS5cblx0XHRcdGNvbnN0IGdhbGxlcnlJbWFnZVJlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YCheXFxcXHMqJHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqJHtpbWFnZVJlZ2V4U3RyaW5nfVxcXFxzKig/OlxcXFx8Lio/JHwkKSlgLFxuXHRcdFx0XHQnbWcnXG5cdFx0XHQpO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZShnYWxsZXJ5SW1hZ2VSZWdleCwgYDwhLS0gJHtyZWFzb259JDEgLS0+YCk7XG5cdFx0XHQvLyB1bmJpbmQgdGhlIG5ld2x5IGNyZWF0ZWQgY29tbWVudHNcblx0XHRcdHVuYmluZGVyLnVuYmluZCgnPCEtLScsICctLT4nKTtcblx0XHRcdC8vIENoZWNrIGZyZWUgaW1hZ2UgdXNhZ2VzLCBmb3IgZXhhbXBsZSBhcyB0ZW1wbGF0ZSBhcmd1bWVudHMsIG1pZ2h0IGhhdmUgdGhlIEZpbGU6IHByZWZpeCBleGNsdWRlZCwgYnV0IG11c3QgYmUgcHJlY2VkZWQgYnkgYW4gfFxuXHRcdFx0Ly8gV2lsbCBvbmx5IGVhdCB0aGUgaW1hZ2UgbmFtZSBhbmQgdGhlIHByZWNlZGluZyBiYXIgYW5kIGFuIGV2ZW50dWFsIG5hbWVkIHBhcmFtZXRlclxuXHRcdFx0Y29uc3QgZnJlZUltYWdlUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgKFxcXFx8XFxcXHMqKD86W1xcXFx3XFxcXHNdK1xcXFw9KT9cXFxccyooPzoke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyopPyR7aW1hZ2VSZWdleFN0cmluZ30pYCxcblx0XHRcdFx0J21nJ1xuXHRcdFx0KTtcblx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoZnJlZUltYWdlUmVnZXgsIGA8IS0tICR7cmVhc29ufSQxIC0tPmApO1xuXHRcdFx0Ly8gUmViaW5kIHRoZSBjb250ZW50IG5vdywgd2UgYXJlIGRvbmUhXG5cdFx0XHR0aGlzLnRleHQgPSB1bmJpbmRlci5yZWJpbmQoKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydHMgdXNlcyBvZiBbW0ZpbGU6YGltYWdlYF1dIHRvIFtbRmlsZTpgaW1hZ2VgfGBkYXRhYF1dLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIC0gSW1hZ2UgbmFtZSB3aXRob3V0IEZpbGU6IHByZWZpeC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSAtIFRoZSBkaXNwbGF5IG9wdGlvbnMuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0YWRkVG9JbWFnZUNvbW1lbnQoaW1hZ2UsIGRhdGEpIHtcblx0XHRcdGNvbnN0IGltYWdlUmVnZXhTdHJpbmcgPSBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KGltYWdlKTtcblx0XHRcdGNvbnN0IGxpbmtzUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcWyR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ31cXFxccypbXFxcXHwoPzpcXFxcXVxcXFxdKV1gXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgYWxsTGlua3MgPSBNb3JlYml0cy5zdHJpbmcuc3BsaXRXZWlnaHRlZEJ5S2V5cyh0aGlzLnRleHQsICdbWycsICddXScpO1xuXHRcdFx0Zm9yIChsZXQgcmVwbGFjZW1lbnQgb2YgYWxsTGlua3MpIHtcblx0XHRcdFx0aWYgKGxpbmtzUmVnZXgudGVzdChyZXBsYWNlbWVudCkpIHtcblx0XHRcdFx0XHQvLyBqdXN0IHB1dCBpdCBhdCB0aGUgZW5kP1xuXHRcdFx0XHRcdHJlcGxhY2VtZW50ID0gcmVwbGFjZW1lbnQucmVwbGFjZSgvXFxdXFxdJC8sIGB8JHtkYXRhfV1dYCk7XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UocmVwbGFjZW1lbnQsIHJlcGxhY2VtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZ2FsbGVyeVJlZ2V4ID0gbmV3IFJlZ0V4cChgXihcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9Lio/KVxcXFx8PyguKj8pJGAsICdtZycpO1xuXHRcdFx0Y29uc3QgbmV3dGV4dCA9IGAkMXwkMiAke2RhdGF9YDtcblx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKGdhbGxlcnlSZWdleCwgbmV3dGV4dCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBhbGwgdHJhbnNjbHVzaW9ucyBvZiBhIHRlbXBsYXRlIGZyb20gcGFnZSB0ZXh0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIC0gUGFnZSBuYW1lIHdob3NlIHRyYW5zY2x1c2lvbnMgYXJlIHRvIGJlIHJlbW92ZWQsXG5cdFx0ICogaW5jbHVkZSBuYW1lc3BhY2UgcHJlZml4IG9ubHkgaWYgbm90IGluIHRlbXBsYXRlIG5hbWVzcGFjZS5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRyZW1vdmVUZW1wbGF0ZSh0ZW1wbGF0ZSkge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVSZWdleFN0cmluZyA9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgodGVtcGxhdGUpO1xuXHRcdFx0Y29uc3QgbGlua3NSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxce1xcXFx7KD86JHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCgxMCl9Oik/XFxcXHMqJHt0ZW1wbGF0ZVJlZ2V4U3RyaW5nfVxcXFxzKltcXFxcfCg/OlxcXFx9XFxcXH0pXWBcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBhbGxUZW1wbGF0ZXMgPSBNb3JlYml0cy5zdHJpbmcuc3BsaXRXZWlnaHRlZEJ5S2V5cyh0aGlzLnRleHQsICd7eycsICd9fScsIFsne3t7JywgJ319fSddKTtcblx0XHRcdGZvciAoY29uc3QgYWxsVGVtcGxhdGUgb2YgYWxsVGVtcGxhdGVzKSB7XG5cdFx0XHRcdGlmIChsaW5rc1JlZ2V4LnRlc3QoYWxsVGVtcGxhdGUpKSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UoYWxsVGVtcGxhdGUsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTbWFydGx5IGluc2VydCBhIHRhZyBhdG9wIHBhZ2UgdGV4dCBidXQgYWZ0ZXIgc3BlY2lmaWVkIHRlbXBsYXRlcyxcblx0XHQgKiBzdWNoIGFzIGhhdG5vdGVzLCBzaG9ydCBkZXNjcmlwdGlvbiwgb3IgZGVsZXRpb24gYW5kIHByb3RlY3Rpb24gdGVtcGxhdGVzLlxuXHRcdCAqIE5vdGFibHksIGRvZXMgKm5vdCogaW5zZXJ0IGEgbmV3bGluZSBhZnRlciB0aGUgdGFnLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRhZyAtIFRoZSB0YWcgdG8gYmUgaW5zZXJ0ZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHJlZ2V4IC0gVGVtcGxhdGVzIGFmdGVyIHdoaWNoIHRvIGluc2VydCB0YWcsXG5cdFx0ICogZ2l2ZW4gYXMgZWl0aGVyIGFzIGEgKHJlZ2V4LXZhbGlkKSBzdHJpbmcgb3IgYW4gYXJyYXkgdG8gYmUgam9pbmVkIGJ5IHBpcGVzLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbZmxhZ3M9aV0gLSBSZWdleCBmbGFncyB0byBhcHBseS4gIGAnJ2AgdG8gcHJvdmlkZSBubyBmbGFncztcblx0XHQgKiBvdGhlciBmYWxzZXkgdmFsdWVzIHdpbGwgZGVmYXVsdCB0byBgaWAuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFtwcmVSZWdleF0gLSBPcHRpb25hbCByZWdleCBzdHJpbmcgb3IgYXJyYXkgdG8gbWF0Y2hcblx0XHQgKiBiZWZvcmUgYW55IHRlbXBsYXRlIG1hdGNoZXMgKGkuZS4gYmVmb3JlIGB7e2ApLCBzdWNoIGFzIGh0bWwgY29tbWVudHMuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0aW5zZXJ0QWZ0ZXJUZW1wbGF0ZXModGFnLCByZWdleCwgZmxhZ3MsIHByZVJlZ2V4KSB7XG5cdFx0XHRpZiAodGFnID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gdGFnIHByb3ZpZGVkJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyAubGVuZ3RoIGlzIG9ubHkgYSBwcm9wZXJ0eSBvZiBzdHJpbmdzIGFuZCBhcnJheXMgc28gd2Vcblx0XHRcdC8vIHNob3VsZG4ndCBuZWVkIHRvIGNoZWNrIHR5cGVcblx0XHRcdGlmIChyZWdleCA9PT0gdW5kZWZpbmVkIHx8ICFyZWdleC5sZW5ndGgpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdObyByZWdleCBwcm92aWRlZCcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlZ2V4KSkge1xuXHRcdFx0XHRyZWdleCA9IHJlZ2V4LmpvaW4oJ3wnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgZmxhZ3MgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGZsYWdzID0gJ2knO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFwcmVSZWdleCB8fCAhcHJlUmVnZXgubGVuZ3RoKSB7XG5cdFx0XHRcdHByZVJlZ2V4ID0gJyc7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocHJlUmVnZXgpKSB7XG5cdFx0XHRcdHByZVJlZ2V4ID0gcHJlUmVnZXguam9pbignfCcpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVnZXggaXMgZXh0cmEgY29tcGxpY2F0ZWQgdG8gYWxsb3cgZm9yIHRlbXBsYXRlcyB3aXRoXG5cdFx0XHQvLyBwYXJhbWV0ZXJzIGFuZCB0byBoYW5kbGUgd2hpdGVzcGFjZSBwcm9wZXJseVxuXHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UoXG5cdFx0XHRcdG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0Ly8gbGVhZGluZyB3aGl0ZXNwYWNlXG5cdFx0XHRcdFx0Ly8gY2FwdHVyZSB0ZW1wbGF0ZShzKVxuXHRcdFx0XHRcdC8vIFByZS10ZW1wbGF0ZSByZWdleCwgc3VjaCBhcyBsZWFkaW5nIGh0bWwgY29tbWVudHNcblx0XHRcdFx0XHQvLyBiZWdpbiB0ZW1wbGF0ZSBmb3JtYXRcblx0XHRcdFx0XHQvLyBUZW1wbGF0ZSByZWdleFxuXHRcdFx0XHRcdC8vIGVuZCBtYWluIHRlbXBsYXRlIG5hbWUsIG9wdGlvbmFsbHkgd2l0aCBhIG51bWJlclxuXHRcdFx0XHRcdC8vIFByb2JhYmx5IHJlbW92ZSB0aGUgKD86KSB0aG91Z2hcblx0XHRcdFx0XHQvLyB0ZW1wbGF0ZSBwYXJhbWV0ZXJzXG5cdFx0XHRcdFx0Ly8gZW5kIHRlbXBsYXRlIGZvcm1hdFxuXHRcdFx0XHRcdC8vIGVuZCBjYXB0dXJlXG5cdFx0XHRcdFx0Ly8gdHJhaWxpbmcgd2hpdGVzcGFjZVxuXHRcdFx0XHRcdGBeXFxcXHMqKD86KCg/OlxcXFxzKiR7XG5cdFx0XHRcdFx0XHQvLyBQcmUtdGVtcGxhdGUgcmVnZXgsIHN1Y2ggYXMgbGVhZGluZyBodG1sIGNvbW1lbnRzXG5cdFx0XHRcdFx0XHRwcmVSZWdleFxuXHRcdFx0XHRcdH18XFxcXHtcXFxce1xcXFxzKig/OiR7XG5cdFx0XHRcdFx0XHQvLyBUZW1wbGF0ZSByZWdleFxuXHRcdFx0XHRcdFx0cmVnZXhcblx0XHRcdFx0XHR9KVxcXFxkKlxcXFxzKihcXFxcfCg/OlxcXFx7XFxcXHtbXnt9XSpcXFxcfVxcXFx9fFtee31dKSopP1xcXFx9XFxcXH0pKyg/OlxcXFxzKlxcXFxuKT8pXFxcXHMqKT9gLFxuXHRcdFx0XHRcdGZsYWdzXG5cdFx0XHRcdCksXG5cdFx0XHRcdGAkMSR7dGFnfWBcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdldCB0aGUgbWFuaXB1bGF0ZWQgd2lraXRleHQuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGdldFRleHQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50ZXh0O1xuXHRcdH0sXG5cdH07XG5cdC8qICoqKioqKioqKioqIE1vcmViaXRzLnVzZXJzcGFjZUxvZ2dlciAqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIEhhbmRsZXMgbG9nZ2luZyBhY3Rpb25zIHRvIGEgdXNlcnNwYWNlIGxvZy5cblx0ICogVXNlZCBpbiBDU0QsIFBST0QsIGFuZCBYRkQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IGxvZ1BhZ2VOYW1lIC0gVGl0bGUgb2YgdGhlIHN1YnBhZ2Ugb2YgdGhlIGN1cnJlbnQgdXNlcidzIGxvZy5cblx0ICovXG5cdE1vcmViaXRzLnVzZXJzcGFjZUxvZ2dlciA9IGZ1bmN0aW9uIChsb2dQYWdlTmFtZSkge1xuXHRcdGlmICghbG9nUGFnZU5hbWUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbm8gbG9nIHBhZ2UgbmFtZSBzcGVjaWZpZWQnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogVGhlIHRleHQgdG8gcHJlZml4IHRoZSBsb2cgd2l0aCB1cG9uIGNyZWF0aW9uLCBkZWZhdWx0cyB0byBlbXB0eS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5pbml0aWFsVGV4dCA9ICcnO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBoZWFkZXIgbGV2ZWwgdG8gdXNlIGZvciBtb250aHMsIGRlZmF1bHRzIHRvIDMgKGA9PT1gKS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5oZWFkZXJMZXZlbCA9IDM7XG5cdFx0dGhpcy5jaGFuZ2VUYWdzID0gJyc7XG5cdFx0LyoqXG5cdFx0ICogTG9nIHRoZSBlbnRyeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2dUZXh0IC0gRG9lc24ndCBpbmNsdWRlIGxlYWRpbmcgYCNgIG9yIGAqYC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3VtbWFyeVRleHQgLSBFZGl0IHN1bW1hcnkuXG5cdFx0ICogQHJldHVybnMge0pRdWVyeS5Qcm9taXNlfVxuXHRcdCAqL1xuXHRcdHRoaXMubG9nID0gZnVuY3Rpb24gKGxvZ1RleHQsIHN1bW1hcnlUZXh0KSB7XG5cdFx0XHRjb25zdCBkZWYgPSAkLkRlZmVycmVkKCk7XG5cdFx0XHRpZiAoIWxvZ1RleHQpIHtcblx0XHRcdFx0cmV0dXJuIGRlZi5yZWplY3QoKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhZ2UgPSBuZXcgTW9yZWJpdHMud2lraS5wYWdlKFxuXHRcdFx0XHRgVXNlcjoke213LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKX0vJHtsb2dQYWdlTmFtZX1gLFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+WwhumhueebruWKoOWFpeWIsOeUqOaIt+epuumXtOaXpeW/lycsICflsIfpoIXnm67liqDlhaXliLDkvb/nlKjogIXnqbrplpPml6XoqownKVxuXHRcdFx0KTsgLy8gbWFrZSB0aGlzICcuLi4gdG8gJyArIGxvZ1BhZ2VOYW1lID9cblx0XHRcdHBhZ2UubG9hZCgocGFnZW9iaikgPT4ge1xuXHRcdFx0XHQvLyBhZGQgYmx1cmIgaWYgbG9nIHBhZ2UgZG9lc24ndCBleGlzdCBvciBpcyBibGFua1xuXHRcdFx0XHRsZXQgdGV4dCA9IHBhZ2VvYmouZ2V0UGFnZVRleHQoKSB8fCB0aGlzLmluaXRpYWxUZXh0O1xuXHRcdFx0XHQvLyBjcmVhdGUgbW9udGhseSBoZWFkZXIgaWYgaXQgZG9lc24ndCBleGlzdCBhbHJlYWR5XG5cdFx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgTW9yZWJpdHMuZGF0ZShwYWdlb2JqLmdldExvYWRUaW1lKCkpO1xuXHRcdFx0XHRpZiAoIWRhdGUubW9udGhIZWFkZXJSZWdleCgpLmV4ZWModGV4dCkpIHtcblx0XHRcdFx0XHR0ZXh0ICs9IGBcXG5cXG4ke2RhdGUubW9udGhIZWFkZXIodGhpcy5oZWFkZXJMZXZlbCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRwYWdlb2JqLnNldFBhZ2VUZXh0KGAke3RleHR9XFxuJHtsb2dUZXh0fWApO1xuXHRcdFx0XHRwYWdlb2JqLnNldEVkaXRTdW1tYXJ5KHN1bW1hcnlUZXh0KTtcblx0XHRcdFx0cGFnZW9iai5zZXRDaGFuZ2VUYWdzKHRoaXMuY2hhbmdlVGFncyk7XG5cdFx0XHRcdHBhZ2VvYmouc2V0Q3JlYXRlT3B0aW9uKCdyZWNyZWF0ZScpO1xuXHRcdFx0XHRwYWdlb2JqLnNhdmUoZGVmLnJlc29sdmUsIGRlZi5yZWplY3QpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gZGVmO1xuXHRcdH07XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMuc3RhdHVzICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIENyZWF0ZSBhbmQgc2hvdyBzdGF0dXMgbWVzc2FnZXMgb2YgdmFyeWluZyB1cmdlbmN5LlxuXHQgKiB7QGxpbmsgTW9yZWJpdHMuc3RhdHVzLmluaXR8TW9yZWJpdHMuc3RhdHVzLmluaXQoKX0gbXVzdCBiZSBjYWxsZWQgYmVmb3JlXG5cdCAqIGFueSBzdGF0dXMgb2JqZWN0IGlzIGNyZWF0ZWQsIG90aGVyd2lzZSB0aG9zZSBzdGF0dXNlcyB3b24ndCBiZSB2aXNpYmxlLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBiZWZvcmUgdGhlIHRoZSBjb2xvbiBgOmAuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0IC0gVGV4dCBhZnRlciB0aGUgY29sb24gYDpgLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9c3RhdHVzXSAtIERldGVybWluZSB0aGUgZm9udCBjb2xvciBvZiB0aGUgc3RhdHVzXG5cdCAqIGxpbmUsIGFsbG93YWJsZSB2YWx1ZXMgYXJlOiBgc3RhdHVzYCAoYmx1ZSksIGBpbmZvYCAoZ3JlZW4pLCBgd2FybmAgKHJlZCksXG5cdCAqIG9yIGBlcnJvcmAgKGJvbGQgcmVkKS5cblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cyA9IGZ1bmN0aW9uICh0ZXh0LCBzdGF0LCB0eXBlKSB7XG5cdFx0dGhpcy50ZXh0UmF3ID0gdGV4dDtcblx0XHR0aGlzLnRleHQgPSBNb3JlYml0cy5jcmVhdGVIdG1sKHRleHQpO1xuXHRcdHRoaXMudHlwZSA9IHR5cGUgfHwgJ3N0YXR1cyc7XG5cdFx0dGhpcy5nZW5lcmF0ZSgpO1xuXHRcdGlmIChzdGF0KSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0LCB0eXBlKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBTcGVjaWZ5IGFuIGFyZWEgZm9yIHN0YXR1cyBtZXNzYWdlIGVsZW1lbnRzIHRvIGJlIGFkZGVkIHRvLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvb3QgLSBVc3VhbGx5IGEgZGl2IGVsZW1lbnQuXG5cdCAqIEB0aHJvd3MgSWYgYHJvb3RgIGlzIG5vdCBhbiBgSFRNTEVsZW1lbnRgLlxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmluaXQgPSAocm9vdCkgPT4ge1xuXHRcdGlmICghKHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignb2JqZWN0IG5vdCBhbiBpbnN0YW5jZSBvZiBFbGVtZW50Jyk7XG5cdFx0fVxuXHRcdHdoaWxlIChyb290Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0cm9vdC5yZW1vdmVDaGlsZChyb290LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRNb3JlYml0cy5zdGF0dXMucm9vdCA9IHJvb3Q7XG5cdFx0TW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQgPSBudWxsO1xuXHR9O1xuXHRNb3JlYml0cy5zdGF0dXMucm9vdCA9IG51bGw7XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgLSBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGVycm9yLlxuXHQgKiBAdGhyb3dzIFdoZW4gYGhhbmRsZXJgIGlzIG5vdCBhIGZ1bmN0aW9uLlxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLm9uRXJyb3IgPSAoaGFuZGxlcikgPT4ge1xuXHRcdGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQgPSBoYW5kbGVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdNb3JlYml0cy5zdGF0dXMub25FcnJvcjogaGFuZGxlciBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0fTtcblx0TW9yZWJpdHMuc3RhdHVzLnByb3RvdHlwZSA9IHtcblx0XHRzdGF0OiBudWxsLFxuXHRcdHN0YXRSYXc6IG51bGwsXG5cdFx0dGV4dDogbnVsbCxcblx0XHR0ZXh0UmF3OiBudWxsLFxuXHRcdHR5cGU6ICdzdGF0dXMnLFxuXHRcdHRhcmdldDogbnVsbCxcblx0XHRub2RlOiBudWxsLFxuXHRcdGxpbmtlZDogZmFsc2UsXG5cdFx0LyoqIEFkZCB0aGUgc3RhdHVzIGVsZW1lbnQgbm9kZSB0byB0aGUgRE9NLiAqL1xuXHRcdGxpbmsoKSB7XG5cdFx0XHRpZiAoIXRoaXMubGlua2VkICYmIE1vcmViaXRzLnN0YXR1cy5yb290KSB7XG5cdFx0XHRcdE1vcmViaXRzLnN0YXR1cy5yb290LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG5cdFx0XHRcdHRoaXMubGlua2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKiBSZW1vdmUgdGhlIHN0YXR1cyBlbGVtZW50IG5vZGUgZnJvbSB0aGUgRE9NLiAqL1xuXHRcdHVubGluaygpIHtcblx0XHRcdGlmICh0aGlzLmxpbmtlZCkge1xuXHRcdFx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuXHRcdFx0XHR0aGlzLmxpbmtlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogVXBkYXRlIHRoZSBzdGF0dXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gUGFydCBvZiBzdGF0dXMgbWVzc2FnZSBhZnRlciBjb2xvbi5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtICdzdGF0dXMnIChibHVlKSwgJ2luZm8nIChncmVlbiksICd3YXJuJ1xuXHRcdCAqIChyZWQpLCBvciAnZXJyb3InIChib2xkIHJlZCkuXG5cdFx0ICovXG5cdFx0dXBkYXRlKHN0YXR1cywgdHlwZSkge1xuXHRcdFx0dGhpcy5zdGF0UmF3ID0gc3RhdHVzO1xuXHRcdFx0dGhpcy5zdGF0ID0gTW9yZWJpdHMuY3JlYXRlSHRtbChzdGF0dXMpO1xuXHRcdFx0aWYgKHR5cGUpIHtcblx0XHRcdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHRcdFx0aWYgKHR5cGUgPT09ICdlcnJvcicpIHtcblx0XHRcdFx0XHQvLyBoYWNrIHRvIGZvcmNlIHRoZSBwYWdlIG5vdCB0byByZWxvYWQgd2hlbiBhbiBlcnJvciBpcyBvdXRwdXQgLSBzZWUgYWxzbyBNb3JlYml0cy5zdGF0dXMoKSBhYm92ZVxuXHRcdFx0XHRcdE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA9IDEwMDA7XG5cdFx0XHRcdFx0Ly8gY2FsbCBlcnJvciBjYWxsYmFja1xuXHRcdFx0XHRcdGlmIChNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCkge1xuXHRcdFx0XHRcdFx0TW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYWxzbyBsb2cgZXJyb3IgbWVzc2FnZXMgaW4gdGhlIGJyb3dzZXIgY29uc29sZVxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYFtNb3JlYml0c10gJHt0aGlzLnRleHRSYXd9OiAke3RoaXMuc3RhdFJhd31gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5yZW5kZXIoKTtcblx0XHR9LFxuXHRcdC8qKiBQcm9kdWNlIHRoZSBodG1sIGZvciBmaXJzdCBwYXJ0IG9mIHRoZSBzdGF0dXMgbWVzc2FnZS4gKi9cblx0XHRnZW5lcmF0ZSgpIHtcblx0XHRcdHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSkuYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcblx0XHRcdHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCc6ICcpKTtcblx0XHRcdHRoaXMudGFyZ2V0ID0gdGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG5cdFx0XHR0aGlzLnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpOyAvLyBkdW1teSBub2RlXG5cdFx0fSxcblxuXHRcdC8qKiBDb21wbGV0ZSB0aGUgaHRtbCwgZm9yIHRoZSBzZWNvbmQgcGFydCBvZiB0aGUgc3RhdHVzIG1lc3NhZ2UuICovXG5cdFx0cmVuZGVyKCkge1xuXHRcdFx0dGhpcy5ub2RlLmNsYXNzTmFtZSA9IGBtb3JlYml0c19zdGF0dXNfJHt0aGlzLnR5cGV9YDtcblx0XHRcdHdoaWxlICh0aGlzLnRhcmdldC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRcdFx0dGhpcy50YXJnZXQucmVtb3ZlQ2hpbGQodGhpcy50YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLnN0YXQpO1xuXHRcdFx0dGhpcy5saW5rKCk7XG5cdFx0fSxcblx0XHRzdGF0dXMoc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICdzdGF0dXMnKTtcblx0XHR9LFxuXHRcdGluZm8oc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICdpbmZvJyk7XG5cdFx0fSxcblx0XHR3YXJuKHN0YXR1cykge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdHVzLCAnd2FybicpO1xuXHRcdH0sXG5cdFx0ZXJyb3Ioc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICdlcnJvcicpO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQmVmb3JlIGNvbG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBBZnRlciBjb2xvblxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSAtIGBzdGF0dXNgLXR5cGUgKGJsdWUpXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuc3RhdHVzID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cyk7XG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQmVmb3JlIGNvbG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBBZnRlciBjb2xvblxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSAtIGBpbmZvYC10eXBlIChncmVlbilcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5pbmZvID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cywgJ2luZm8nKTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYHdhcm5gLXR5cGUgKHJlZClcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy53YXJuID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cywgJ3dhcm4nKTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYGVycm9yYC10eXBlIChib2xkIHJlZClcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5lcnJvciA9ICh0ZXh0LCBzdGF0dXMpID0+IHtcblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLnN0YXR1cyh0ZXh0LCBzdGF0dXMsICdlcnJvcicpO1xuXHR9O1xuXHQvKipcblx0ICogRm9yIHRoZSBhY3Rpb24gY29tcGxldGUgbWVzc2FnZSBhdCB0aGUgZW5kLCBjcmVhdGUgYSBzdGF0dXMgbGluZSB3aXRob3V0XG5cdCAqIGEgY29sb24gc2VwYXJhdG9yLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuYWN0aW9uQ29tcGxldGVkID0gKHRleHQpID0+IHtcblx0XHRjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0bm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiJykpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcblx0XHRub2RlLmNsYXNzTmFtZSA9ICdtb3JlYml0c19zdGF0dXNfaW5mbyBtb3JlYml0c19hY3Rpb25fY29tcGxldGUnO1xuXHRcdGlmIChNb3JlYml0cy5zdGF0dXMucm9vdCkge1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QuYXBwZW5kQ2hpbGQobm9kZSk7XG5cdFx0fVxuXHR9O1xuXHQvKipcblx0ICogRGlzcGxheSB0aGUgdXNlcidzIHJhdGlvbmFsZSwgY29tbWVudHMsIGV0Yy4gQmFjayB0byB0aGVtIGFmdGVyIGEgZmFpbHVyZSxcblx0ICogc28gdGhhdCB0aGV5IG1heSByZS11c2UgaXQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbW1lbnRzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMucHJpbnRVc2VyVGV4dCA9IChjb21tZW50cywgbWVzc2FnZSkgPT4ge1xuXHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0cC5pbm5lckhUTUwgPSBtZXNzYWdlO1xuXHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGRpdi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtdXNlcnRleHQnO1xuXHRcdGRpdi5zdHlsZS5tYXJnaW5Ub3AgPSAnMCc7XG5cdFx0ZGl2LnN0eWxlLndoaXRlU3BhY2UgPSAncHJlLXdyYXAnO1xuXHRcdGRpdi50ZXh0Q29udGVudCA9IGNvbW1lbnRzO1xuXHRcdHAuYXBwZW5kQ2hpbGQoZGl2KTtcblx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5hcHBlbmRDaGlsZChwKTtcblx0fTtcblx0LyoqXG5cdCAqIFNpbXBsZSBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGEgc2ltcGxlIG5vZGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVHlwZSBvZiBIVE1MIGVsZW1lbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IC0gVGV4dCBjb250ZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2NvbG9yXSAtIEZvbnQgY29sb3IuXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLmh0bWxOb2RlID0gKHR5cGUsIGNvbnRlbnQsIGNvbG9yKSA9PiB7XG5cdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cdFx0aWYgKGNvbG9yKSB7XG5cdFx0XHRub2RlLnN0eWxlLmNvbG9yID0gY29sb3I7XG5cdFx0fVxuXHRcdG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCkpO1xuXHRcdHJldHVybiBub2RlO1xuXHR9O1xuXHQvKipcblx0ICogQWRkIHNoaWZ0LWNsaWNrIHN1cHBvcnQgZm9yIGNoZWNrYm94ZXMuIFRoZSB3aWtpYml0cyB2ZXJzaW9uXG5cdCAqIChgd2luZG93LmFkZENoZWNrYm94Q2xpY2tIYW5kbGVyc2ApIGhhcyBzb21lIHJlc3RyaWN0aW9ucywgYW5kIGRvZXNuJ3Qgd29ya1xuXHQgKiB3aXRoIGNoZWNrYm94ZXMgaW5zaWRlIGEgc29ydGFibGUgdGFibGUsIHNvIGxldCdzIGJ1aWxkIG91ciBvd24uXG5cdCAqXG5cdCAqIEBwYXJhbSBqUXVlcnlTZWxlY3RvclxuXHQgKiBAcGFyYW0galF1ZXJ5Q29udGV4dFxuXHQgKi9cblx0TW9yZWJpdHMuY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydCA9IChqUXVlcnlTZWxlY3RvciwgalF1ZXJ5Q29udGV4dCkgPT4ge1xuXHRcdGxldCBsYXN0Q2hlY2tib3ggPSBudWxsO1xuXHRcdGNvbnN0IGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihldmVudCkge1xuXHRcdFx0Y29uc3QgdGhpc0NiID0gdGhpcztcblx0XHRcdGlmIChldmVudC5zaGlmdEtleSAmJiBsYXN0Q2hlY2tib3ggIT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgY2JzID0gJChqUXVlcnlTZWxlY3RvciwgalF1ZXJ5Q29udGV4dCk7IC8vIGNhbid0IGNhY2hlIHRoZW0sIG9idmlvdXNseSwgaWYgd2Ugd2FudCB0byBzdXBwb3J0IHJlc29ydGluZ1xuXHRcdFx0XHRsZXQgaW5kZXggPSAtMTtcblx0XHRcdFx0bGV0IGxhc3RJbmRleCA9IC0xO1xuXHRcdFx0XHRsZXQgaTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNicy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChjYnNbaV0gPT09IHRoaXNDYikge1xuXHRcdFx0XHRcdFx0aW5kZXggPSBpO1xuXHRcdFx0XHRcdFx0aWYgKGxhc3RJbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2JzW2ldID09PSBsYXN0Q2hlY2tib3gpIHtcblx0XHRcdFx0XHRcdGxhc3RJbmRleCA9IGk7XG5cdFx0XHRcdFx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGluZGV4ID4gLTEgJiYgbGFzdEluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHQvLyBpbnNwaXJlZCBieSB3aWtpYml0c1xuXHRcdFx0XHRcdGNvbnN0IGVuZFN0YXRlID0gdGhpc0NiLmNoZWNrZWQ7XG5cdFx0XHRcdFx0bGV0IHN0YXJ0O1xuXHRcdFx0XHRcdGxldCBmaW5pc2g7XG5cdFx0XHRcdFx0aWYgKGluZGV4IDwgbGFzdEluZGV4KSB7XG5cdFx0XHRcdFx0XHRzdGFydCA9IGluZGV4ICsgMTtcblx0XHRcdFx0XHRcdGZpbmlzaCA9IGxhc3RJbmRleDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3RhcnQgPSBsYXN0SW5kZXg7XG5cdFx0XHRcdFx0XHRmaW5pc2ggPSBpbmRleCAtIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvciAoaSA9IHN0YXJ0OyBpIDw9IGZpbmlzaDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRpZiAoY2JzW2ldLmNoZWNrZWQgIT09IGVuZFN0YXRlKSB7XG5cdFx0XHRcdFx0XHRcdGNic1tpXS5jbGljaygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGFzdENoZWNrYm94ID0gdGhpc0NiO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblx0XHQkKGpRdWVyeVNlbGVjdG9yLCBqUXVlcnlDb250ZXh0KS5vbignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLmJhdGNoT3BlcmF0aW9uICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIEl0ZXJhdGVzIG92ZXIgYSBncm91cCBvZiBwYWdlcyAob3IgYXJiaXRyYXJ5IG9iamVjdHMpIGFuZCBleGVjdXRlcyBhIHdvcmtlciBmdW5jdGlvblxuXHQgKiBmb3IgZWFjaC5cblx0ICpcblx0ICogYHNldFBhZ2VMaXN0KHBhZ2VMaXN0KWA6IFNldHMgdGhlIGxpc3Qgb2YgcGFnZXMgdG8gd29yayBvbi4gSXQgc2hvdWxkIGJlIGFuXG5cdCAqIGFycmF5IG9mIHBhZ2UgbmFtZXMgc3RyaW5ncy5cblx0ICpcblx0ICogYHNldE9wdGlvbihvcHRpb25OYW1lLCBvcHRpb25WYWx1ZSlgOiBTZXRzIGEga25vd24gb3B0aW9uOlxuXHQgKiAtIGBjaHVua1NpemVgIChpbnRlZ2VyKTogVGhlIHNpemUgb2YgY2h1bmtzIHRvIGJyZWFrIHRoZSBhcnJheSBpbnRvIChkZWZhdWx0XG5cdCAqIDUwKS4gU2V0dGluZyB0aGlzIHRvIGEgc21hbGwgdmFsdWUgKDw1KSBjYW4gY2F1c2UgcHJvYmxlbXMuXG5cdCAqIC0gYHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzYCAoYm9vbGVhbik6IEtlZXAgZWFjaCBwYWdlJ3Mgc3RhdHVzIGVsZW1lbnRcblx0ICogdmlzaWJsZSB3aGVuIHdvcmtlciBpcyBjb21wbGV0ZT8gU2VlIG5vdGUgYmVsb3cuXG5cdCAqXG5cdCAqIGBydW4od29ya2VyLCBwb3N0RmluaXNoKWA6IFJ1bnMgdGhlIGNhbGxiYWNrIGB3b3JrZXJgIGZvciBlYWNoIHBhZ2UgaW4gdGhlXG5cdCAqIGxpc3QuICBUaGUgY2FsbGJhY2sgbXVzdCBjYWxsIGB3b3JrZXJTdWNjZXNzYCB3aGVuIHN1Y2NlZWRpbmcsIG9yXG5cdCAqIGB3b3JrZXJGYWlsdXJlYCB3aGVuIGZhaWxpbmcuICBJZiB1c2luZyB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IG9yXG5cdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9LCB0aGlzIGlzIGVhc2lseSBkb25lIGJ5IHBhc3NpbmcgdGhlc2UgdHdvXG5cdCAqIGZ1bmN0aW9ucyBhcyBwYXJhbWV0ZXJzIHRvIHRoZSBtZXRob2RzIG9uIHRob3NlIG9iamVjdHM6IGZvciBpbnN0YW5jZSxcblx0ICogYHBhZ2Uuc2F2ZShiYXRjaE9wLndvcmtlclN1Y2Nlc3MsIGJhdGNoT3Aud29ya2VyRmFpbHVyZSlgLiAgTWFrZSBzdXJlIHRoZVxuXHQgKiBtZXRob2RzIGFyZSBjYWxsZWQgZGlyZWN0bHkgaWYgc3BlY2lhbCBzdWNjZXNzL2ZhaWx1cmUgY2FzZXMgYXJpc2UuICBJZiB5b3Vcblx0ICogb21pdCB0byBjYWxsIHRoZXNlIG1ldGhvZHMsIHRoZSBiYXRjaCBvcGVyYXRpb24gd2lsbCBzdGFsbCBhZnRlciB0aGUgZmlyc3Rcblx0ICogY2h1bmshICBBbHNvIGVuc3VyZSB0aGF0IGVpdGhlciB3b3JrZXJTdWNjZXNzIG9yIHdvcmtlckZhaWx1cmUgaXMgY2FsbGVkIG5vXG5cdCAqIG1vcmUgdGhhbiBvbmNlLiAgVGhlIHNlY29uZCBjYWxsYmFjayBgcG9zdEZpbmlzaGAgaXMgZXhlY3V0ZWQgd2hlbiB0aGVcblx0ICogZW50aXJlIGJhdGNoIGhhcyBiZWVuIHByb2Nlc3NlZC5cblx0ICpcblx0ICogSWYgdXNpbmcgYHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzYCwgeW91IHNob3VsZCB0cnkgdG8gZW5zdXJlIHRoYXQgdGhlXG5cdCAqIGB3b3JrZXJTdWNjZXNzYCBjYWxsYmFjayBoYXMgYWNjZXNzIHRvIHRoZSBwYWdlIHRpdGxlLiAgVGhpcyBpcyBubyBwcm9ibGVtIGZvclxuXHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfSBvYmplY3RzLiAgQnV0IHdoZW4gdXNpbmcgdGhlIEFQSSwgcGxlYXNlIHNldCB0aGVcblx0ICogfHBhZ2VOYW1lfCBwcm9wZXJ0eSBvbiB0aGUge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBvYmplY3QuXG5cdCAqXG5cdCAqIFRoZXJlIGFyZSBzYW1wbGUgYmF0Y2hPcGVyYXRpb24gaW1wbGVtZW50YXRpb25zIHVzaW5nIE1vcmViaXRzLndpa2kucGFnZSBpblxuXHQgKiB0d2lua2xlYmF0Y2hkZWxldGUuanMsIHR3aW5rbGViYXRjaHVuZGVsZXRlLmpzLCBhbmQgdHdpbmtsZWJhdGNocHJvdGVjdC5qcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2N1cnJlbnRBY3Rpb25dXG5cdCAqL1xuXHRNb3JlYml0cy5iYXRjaE9wZXJhdGlvbiA9IGZ1bmN0aW9uIChjdXJyZW50QWN0aW9uKSB7XG5cdFx0Y29uc3QgY3R4ID0ge1xuXHRcdFx0Ly8gYmFja2luZyBmaWVsZHMgZm9yIHB1YmxpYyBwcm9wZXJ0aWVzXG5cdFx0XHRwYWdlTGlzdDogbnVsbCxcblx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0Y2h1bmtTaXplOiA1MCxcblx0XHRcdFx0cHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXM6IGZhbHNlLFxuXHRcdFx0fSxcblx0XHRcdC8vIGludGVybmFsIGNvdW50ZXJzLCBldGMuXG5cdFx0XHRzdGF0dXNFbGVtZW50OiBuZXcgTW9yZWJpdHMuc3RhdHVzKGN1cnJlbnRBY3Rpb24gfHwgd2luZG93LndnVUxTKCfmiafooYzmibnph4/mk43kvZwnLCAn5Z+36KGM5om55qyh5pON5L2cJykpLFxuXHRcdFx0d29ya2VyOiBudWxsLFxuXHRcdFx0Ly8gZnVuY3Rpb24gdGhhdCBleGVjdXRlcyBmb3IgZWFjaCBpdGVtIGluIHBhZ2VMaXN0XG5cdFx0XHRwb3N0RmluaXNoOiBudWxsLFxuXHRcdFx0Ly8gZnVuY3Rpb24gdGhhdCBleGVjdXRlcyB3aGVuIHRoZSB3aG9sZSBiYXRjaCBoYXMgYmVlbiBwcm9jZXNzZWRcblx0XHRcdGNvdW50U3RhcnRlZDogMCxcblx0XHRcdGNvdW50RmluaXNoZWQ6IDAsXG5cdFx0XHRjb3VudEZpbmlzaGVkU3VjY2VzczogMCxcblx0XHRcdGN1cnJlbnRDaHVua0luZGV4OiAtMSxcblx0XHRcdHBhZ2VDaHVua3M6IFtdLFxuXHRcdFx0cnVubmluZzogZmFsc2UsXG5cdFx0fTtcblx0XHQvLyBzaG91bGRuJ3QgYmUgbmVlZGVkIGJ5IGV4dGVybmFsIHVzZXJzLCBidXQgcHJvdmlkZWQgYW55d2F5IGZvciBtYXhpbXVtIGZsZXhpYmlsaXR5XG5cdFx0dGhpcy5nZXRTdGF0dXNFbGVtZW50ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5zdGF0dXNFbGVtZW50O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgbGlzdCBvZiBwYWdlcyB0byB3b3JrIG9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gcGFnZUxpc3QgLSBBcnJheSBvZiBvYmplY3RzIG92ZXIgd2hpY2ggeW91IHdpc2ggdG8gZXhlY3V0ZSB0aGUgd29ya2VyIGZ1bmN0aW9uXG5cdFx0ICogVGhpcyBpcyB1c3VhbGx5IHRoZSBsaXN0IG9mIHBhZ2UgbmFtZXMgKHN0cmluZ3MpLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0UGFnZUxpc3QgPSAocGFnZUxpc3QpID0+IHtcblx0XHRcdGN0eC5wYWdlTGlzdCA9IHBhZ2VMaXN0O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0cyBhIGtub3duIG9wdGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25OYW1lIC0gTmFtZSBvZiB0aGUgb3B0aW9uOlxuXHRcdCAqIC0gY2h1bmtTaXplIChpbnRlZ2VyKTogVGhlIHNpemUgb2YgY2h1bmtzIHRvIGJyZWFrIHRoZSBhcnJheSBpbnRvXG5cdFx0ICogKGRlZmF1bHQgNTApLiBTZXR0aW5nIHRoaXMgdG8gYSBzbWFsbCB2YWx1ZSAoPDUpIGNhbiBjYXVzZSBwcm9ibGVtcy5cblx0XHQgKiAtIHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzIChib29sZWFuKTogS2VlcCBlYWNoIHBhZ2UncyBzdGF0dXNcblx0XHQgKiBlbGVtZW50IHZpc2libGUgd2hlbiB3b3JrZXIgaXMgY29tcGxldGU/XG5cdFx0ICogQHBhcmFtIHtudW1iZXJ8Ym9vbGVhbn0gb3B0aW9uVmFsdWUgLSBWYWx1ZSB0byB3aGljaCB0aGUgb3B0aW9uIGlzXG5cdFx0ICogdG8gYmUgc2V0LiBTaG91bGQgYmUgYW4gaW50ZWdlciBmb3IgY2h1bmtTaXplIGFuZCBhIGJvb2xlYW4gZm9yXG5cdFx0ICogcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRPcHRpb24gPSAob3B0aW9uTmFtZSwgb3B0aW9uVmFsdWUpID0+IHtcblx0XHRcdGN0eC5vcHRpb25zW29wdGlvbk5hbWVdID0gb3B0aW9uVmFsdWU7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBSdW5zIHRoZSBmaXJzdCBjYWxsYmFjayBmb3IgZWFjaCBwYWdlIGluIHRoZSBsaXN0LlxuXHRcdCAqIFRoZSBjYWxsYmFjayBtdXN0IGNhbGwgd29ya2VyU3VjY2VzcyB3aGVuIHN1Y2NlZWRpbmcsIG9yIHdvcmtlckZhaWx1cmUgd2hlbiBmYWlsaW5nLlxuXHRcdCAqIFJ1bnMgdGhlIG9wdGlvbmFsIHNlY29uZCBjYWxsYmFjayB3aGVuIHRoZSB3aG9sZSBiYXRjaCBoYXMgYmVlbiBwcm9jZXNzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSB3b3JrZXJcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcG9zdEZpbmlzaF1cblx0XHQgKi9cblx0XHR0aGlzLnJ1biA9ICh3b3JrZXIsIHBvc3RGaW5pc2gpID0+IHtcblx0XHRcdGlmIChjdHgucnVubmluZykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aJuemHj+aTjeS9nOW3suWcqOi/kOihjCcsICfmibnmrKHmk43kvZzlt7LlnKjln7fooYwnKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdGN0eC53b3JrZXIgPSB3b3JrZXI7XG5cdFx0XHRjdHgucG9zdEZpbmlzaCA9IHBvc3RGaW5pc2g7XG5cdFx0XHRjdHguY291bnRTdGFydGVkID0gMDtcblx0XHRcdGN0eC5jb3VudEZpbmlzaGVkID0gMDtcblx0XHRcdGN0eC5jb3VudEZpbmlzaGVkU3VjY2VzcyA9IDA7XG5cdFx0XHRjdHguY3VycmVudENodW5rSW5kZXggPSAtMTtcblx0XHRcdGN0eC5wYWdlQ2h1bmtzID0gW107XG5cdFx0XHRjb25zdCB0b3RhbCA9IGN0eC5wYWdlTGlzdC5sZW5ndGg7XG5cdFx0XHRpZiAoIXRvdGFsKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCfmsqHmnInmjIflrprpobXpnaInLCAn5rKS5pyJ5oyH5a6a6aCB6Z2iJykpO1xuXHRcdFx0XHRjdHgucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0XHRpZiAoY3R4LnBvc3RGaW5pc2gpIHtcblx0XHRcdFx0XHRjdHgucG9zdEZpbmlzaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGNodW5rIHBhZ2UgbGlzdCBpbnRvIG1vcmUgbWFuYWdlYWJsZSB1bml0c1xuXHRcdFx0Y3R4LnBhZ2VDaHVua3MgPSBNb3JlYml0cy5hcnJheS5jaHVuayhjdHgucGFnZUxpc3QsIGN0eC5vcHRpb25zLmNodW5rU2l6ZSk7XG5cdFx0XHQvLyBzdGFydCB0aGUgcHJvY2Vzc1xuXHRcdFx0TW9yZWJpdHMud2lraS5hZGRDaGVja3BvaW50KCk7XG5cdFx0XHRjdHguc3RhdHVzRWxlbWVudC5zdGF0dXMoJzAlJyk7XG5cdFx0XHRmblN0YXJ0TmV3Q2h1bmsoKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFRvIGJlIGNhbGxlZCBieSB3b3JrZXIgYmVmb3JlIGl0IHRlcm1pbmF0ZXMgc3VjY2Vzc2Z1bGx5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsoTW9yZWJpdHMud2lraS5wYWdlfE1vcmViaXRzLndpa2kuYXBpfHN0cmluZyl9IGFyZyAtXG5cdFx0ICogVGhpcyBzaG91bGQgYmUgdGhlIGBNb3JlYml0cy53aWtpLnBhZ2VgIG9yIGBNb3JlYml0cy53aWtpLmFwaWAgb2JqZWN0IHVzZWQgYnkgd29ya2VyXG5cdFx0ICogKGZvciB0aGUgYWRqdXN0bWVudCBvZiBzdGF0dXMgbGluZXMgZW1pdHRlZCBieSB0aGVtKS5cblx0XHQgKiBJZiBubyBNb3JlYml0cy53aWtpLiogb2JqZWN0IGlzIHVzZWQgKGUuZy4geW91J3JlIHVzaW5nIGBtdy5BcGkoKWAgb3Igc29tZXRoaW5nIGVsc2UpLCBhbmRcblx0XHQgKiBgcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXNgIG9wdGlvbiBpcyBvbiwgZ2l2ZSB0aGUgcGFnZSBuYW1lIChzdHJpbmcpIGFzIGFyZ3VtZW50LlxuXHRcdCAqL1xuXHRcdHRoaXMud29ya2VyU3VjY2VzcyA9IChhcmcpID0+IHtcblx0XHRcdGlmIChhcmcgaW5zdGFuY2VvZiBNb3JlYml0cy53aWtpLmFwaSB8fCBhcmcgaW5zdGFuY2VvZiBNb3JlYml0cy53aWtpLnBhZ2UpIHtcblx0XHRcdFx0Ly8gdXBkYXRlIG9yIHJlbW92ZSBzdGF0dXMgbGluZVxuXHRcdFx0XHRjb25zdCBzdGF0ZWxlbSA9IGFyZy5nZXRTdGF0dXNFbGVtZW50KCk7XG5cdFx0XHRcdGlmIChjdHgub3B0aW9ucy5wcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcykge1xuXHRcdFx0XHRcdGlmIChhcmcuZ2V0UGFnZU5hbWUgfHwgYXJnLnBhZ2VOYW1lIHx8IChhcmcucXVlcnkgJiYgYXJnLnF1ZXJ5LnRpdGxlKSkge1xuXHRcdFx0XHRcdFx0Ly8gd2Uga25vdyB0aGUgcGFnZSB0aXRsZSAtIGRpc3BsYXkgYSByZWxldmFudCBtZXNzYWdlXG5cdFx0XHRcdFx0XHRjb25zdCBwYWdlTmFtZSA9IGFyZy5nZXRQYWdlTmFtZSA/IGFyZy5nZXRQYWdlTmFtZSgpIDogYXJnLnBhZ2VOYW1lIHx8IGFyZy5xdWVyeS50aXRsZTtcblx0XHRcdFx0XHRcdHN0YXRlbGVtLmluZm8oYOWujOaIkO+8iFtbJHtwYWdlTmFtZX1dXe+8iWApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBkb24ndCBrbm93IHRoZSBwYWdlIHRpdGxlIC0ganVzdCBkaXNwbGF5IGEgZ2VuZXJpYyBtZXNzYWdlXG5cdFx0XHRcdFx0XHRzdGF0ZWxlbS5pbmZvKCflrozmiJAnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBzdGF0dXMgbGluZSBhdXRvbWF0aWNhbGx5IHByb2R1Y2VkIGJ5IE1vcmViaXRzLndpa2kuKlxuXHRcdFx0XHRcdHN0YXRlbGVtLnVubGluaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnICYmIGN0eC5vcHRpb25zLnByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzKSB7XG5cdFx0XHRcdG5ldyBNb3JlYml0cy5zdGF0dXMoYXJnLCBg5a6M5oiQ77yIW1ske2FyZ31dXe+8iWApO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWRTdWNjZXNzKys7XG5cdFx0XHRmbkRvbmVPbmUoKTtcblx0XHR9O1xuXHRcdHRoaXMud29ya2VyRmFpbHVyZSA9ICgpID0+IHtcblx0XHRcdGZuRG9uZU9uZSgpO1xuXHRcdH07XG5cdFx0Ly8gcHJpdmF0ZSBmdW5jdGlvbnNcblx0XHRjb25zdCB0aGlzUHJveHkgPSB0aGlzO1xuXHRcdGNvbnN0IGZuU3RhcnROZXdDaHVuayA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNodW5rID0gY3R4LnBhZ2VDaHVua3NbKytjdHguY3VycmVudENodW5rSW5kZXhdO1xuXHRcdFx0aWYgKCFjaHVuaykge1xuXHRcdFx0XHRyZXR1cm47IC8vIGRvbmUhIHlheVxuXHRcdFx0fVxuXHRcdFx0Ly8gc3RhcnQgd29ya2VycyBmb3IgdGhlIGN1cnJlbnQgY2h1bmtcblx0XHRcdGN0eC5jb3VudFN0YXJ0ZWQgKz0gY2h1bmsubGVuZ3RoO1xuXHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIGNodW5rKSB7XG5cdFx0XHRcdGN0eC53b3JrZXIocGFnZSwgdGhpc1Byb3h5KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IGZuRG9uZU9uZSA9ICgpID0+IHtcblx0XHRcdGN0eC5jb3VudEZpbmlzaGVkKys7XG5cdFx0XHQvLyB1cGRhdGUgb3ZlcmFsbCBzdGF0dXMgbGluZVxuXHRcdFx0Y29uc3QgdG90YWwgPSBjdHgucGFnZUxpc3QubGVuZ3RoO1xuXHRcdFx0aWYgKGN0eC5jb3VudEZpbmlzaGVkIDwgdG90YWwpIHtcblx0XHRcdFx0Y29uc3QgcHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKCgxMDAgKiBjdHguY291bnRGaW5pc2hlZCkgLyB0b3RhbCk7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LnN0YXR1cyhgJHtwcm9ncmVzc30lYCk7XG5cdFx0XHRcdC8vIHN0YXJ0IGEgbmV3IGNodW5rIGlmIHdlJ3JlIGNsb3NlIGVub3VnaCB0byB0aGUgZW5kIG9mIHRoZSBwcmV2aW91cyBjaHVuaywgYW5kXG5cdFx0XHRcdC8vIHdlIGhhdmVuJ3QgYWxyZWFkeSBzdGFydGVkIHRoZSBuZXh0IG9uZVxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0Y3R4LmNvdW50RmluaXNoZWQgPj0gY3R4LmNvdW50U3RhcnRlZCAtIE1hdGgubWF4KGN0eC5vcHRpb25zLmNodW5rU2l6ZSAvIDEwLCAyKSAmJlxuXHRcdFx0XHRcdE1hdGguZmxvb3IoY3R4LmNvdW50RmluaXNoZWQgLyBjdHgub3B0aW9ucy5jaHVua1NpemUpID4gY3R4LmN1cnJlbnRDaHVua0luZGV4XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGZuU3RhcnROZXdDaHVuaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGN0eC5jb3VudEZpbmlzaGVkID09PSB0b3RhbCkge1xuXHRcdFx0XHRjb25zdCBzdGF0dXNTdHJpbmcgPSBg5a6M5oiQ77yIJHtjdHguY291bnRGaW5pc2hlZFN1Y2Nlc3N9LyR7Y3R4LmNvdW50RmluaXNoZWR95pON5L2c5oiQ5Yqf5a6M5oiQ77yJYDtcblx0XHRcdFx0aWYgKGN0eC5jb3VudEZpbmlzaGVkU3VjY2VzcyA8IGN0eC5jb3VudEZpbmlzaGVkKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQud2FybihzdGF0dXNTdHJpbmcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8oc3RhdHVzU3RyaW5nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY3R4LnBvc3RGaW5pc2gpIHtcblx0XHRcdFx0XHRjdHgucG9zdEZpbmlzaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCgpO1xuXHRcdFx0XHRjdHgucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY3R4LmNvdW50RmluaXNoZWQgPiB0b3RhbFxuXHRcdFx0XHQvLyBqdXN0IGZvciBnaWdnbGVzISAod2VsbCwgc2VyaW91cyBkZWJ1Z2dpbmcsIGFjdHVhbGx5KVxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC53YXJuKFxuXHRcdFx0XHRcdGAke3dpbmRvdy53Z1VMUygn5a6M5oiQ77yI5aSa5omn6KGM5LqGJywgJ+WujOaIkO+8iOWkmuWft+ihjOS6hicpICsgKGN0eC5jb3VudEZpbmlzaGVkIC0gdG90YWwpfeasoe+8iWBcblx0XHRcdFx0KTtcblx0XHRcdFx0TW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50KCk7XG5cdFx0XHRcdGN0eC5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0LyoqXG5cdCAqIEEgc2ltcGxlIGRyYWdnYWJsZSB3aW5kb3csIG5vdyBhIHdyYXBwZXIgZm9yIGpRdWVyeSBVSSdzIGRpYWxvZyBmZWF0dXJlLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEByZXF1aXJlcyBqcXVlcnkudWkuZGlhbG9nXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gVGhlIG1heGltdW0gYWxsb3dhYmxlIGhlaWdodCBmb3IgdGhlIGNvbnRlbnQgYXJlYS5cblx0ICovXG5cdE1vcmViaXRzLnNpbXBsZVdpbmRvdyA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0Y29udGVudC5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLWNvbnRlbnQnO1xuXHRcdGNvbnRlbnQuaWQgPSBgbW9yZWJpdHMtZGlhbG9nLWNvbnRlbnQtJHtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTE1KX1gO1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coe1xuXHRcdFx0YXV0b09wZW46IGZhbHNlLFxuXHRcdFx0YnV0dG9uczoge1xuXHRcdFx0XHQnUGxhY2Vob2xkZXIgYnV0dG9uJzogKCkgPT4ge30sXG5cdFx0XHR9LFxuXHRcdFx0ZGlhbG9nQ2xhc3M6ICdtb3JlYml0cy1kaWFsb2cnLFxuXHRcdFx0d2lkdGg6IE1hdGgubWluKE51bWJlci5wYXJzZUludCh3aW5kb3cuaW5uZXJXaWR0aCwgMTApLCBOdW1iZXIucGFyc2VJbnQod2lkdGggfHwgODAwLCAxMCkpLFxuXHRcdFx0Ly8gZ2l2ZSBqUXVlcnkgdGhlIGdpdmVuIGhlaWdodCB2YWx1ZSAod2hpY2ggcmVwcmVzZW50cyB0aGUgYW50aWNpcGF0ZWQgaGVpZ2h0IG9mIHRoZSBkaWFsb2cpIGhlcmUsIHNvXG5cdFx0XHQvLyBpdCBjYW4gcG9zaXRpb24gdGhlIGRpYWxvZyBhcHByb3ByaWF0ZWx5XG5cdFx0XHQvLyB0aGUgMjAgcGl4ZWxzIHJlcHJlc2VudHMgYWRqdXN0bWVudCBmb3IgdGhlIGV4dHJhIGhlaWdodCBvZiB0aGUgalF1ZXJ5IGRpYWxvZyBcImNocm9tZVwiLCBjb21wYXJlZFxuXHRcdFx0Ly8gdG8gdGhhdCBvZiB0aGUgb2xkIFNpbXBsZVdpbmRvd1xuXHRcdFx0aGVpZ2h0OiBoZWlnaHQgKyAyMCxcblx0XHRcdGNsb3NlOiAoZXZlbnQpID0+IHtcblx0XHRcdFx0Ly8gZGlhbG9ncyBhbmQgdGhlaXIgY29udGVudCBjYW4gYmUgZGVzdHJveWVkIG9uY2UgY2xvc2VkXG5cdFx0XHRcdCQoZXZlbnQudGFyZ2V0KS5kaWFsb2coJ2Rlc3Ryb3knKS5yZW1vdmUoKTtcblx0XHRcdH0sXG5cdFx0XHRyZXNpemVTdGFydCgpIHtcblx0XHRcdFx0W3RoaXMuc2Nyb2xsYm94XSA9ICQodGhpcykuZmluZCgnLm1vcmViaXRzLXNjcm9sbGJveCcpO1xuXHRcdFx0XHRpZiAodGhpcy5zY3JvbGxib3gpIHtcblx0XHRcdFx0XHR0aGlzLnNjcm9sbGJveC5zdHlsZS5tYXhIZWlnaHQgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRyZXNpemVTdG9wKCkge1xuXHRcdFx0XHR0aGlzLnNjcm9sbGJveCA9IG51bGw7XG5cdFx0XHR9LFxuXHRcdFx0cmVzaXplKCkge1xuXHRcdFx0XHR0aGlzLnN0eWxlLm1heEhlaWdodCA9ICcnO1xuXHRcdFx0XHRpZiAodGhpcy5zY3JvbGxib3gpIHtcblx0XHRcdFx0XHR0aGlzLnNjcm9sbGJveC5zdHlsZS53aWR0aCA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdGNvbnN0ICR3aWRnZXQgPSAkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKTtcblx0XHQvLyBkZWxldGUgdGhlIHBsYWNlaG9sZGVyIGJ1dHRvbiAoaXQncyBvbmx5IHRoZXJlIHNvIHRoZSBidXR0b25wYW5lIGdldHMgY3JlYXRlZClcblx0XHQkd2lkZ2V0LmZpbmQoJ2J1dHRvbicpLmVhY2goKGtleSwgdmFsdWUpID0+IHtcblx0XHRcdHZhbHVlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodmFsdWUpO1xuXHRcdH0pO1xuXHRcdC8vIGFkZCBjb250YWluZXIgZm9yIHRoZSBidXR0b25zIHdlIGFkZCwgYW5kIHRoZSBmb290ZXIgbGlua3MgKGlmIGFueSlcblx0XHRjb25zdCBidXR0b25zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGJ1dHRvbnNwYW4uY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1idXR0b25zJztcblx0XHRjb25zdCBsaW5rc3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0bGlua3NzcGFuLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctZm9vdGVybGlua3MnO1xuXHRcdCR3aWRnZXQuZmluZCgnLnVpLWRpYWxvZy1idXR0b25wYW5lJykuYXBwZW5kKGJ1dHRvbnNwYW4sIGxpbmtzc3Bhbik7XG5cdFx0Ly8gcmVzaXplIHRoZSBzY3JvbGxib3ggd2l0aCB0aGUgZGlhbG9nLCBpZiBvbmUgaXMgcHJlc2VudFxuXHRcdCR3aWRnZXQucmVzaXphYmxlKCdvcHRpb24nLCAnYWxzb1Jlc2l6ZScsIGAjJHt0aGlzLmNvbnRlbnQuaWR9IC5tb3JlYml0cy1zY3JvbGxib3gsICMke3RoaXMuY29udGVudC5pZH1gKTtcblx0fTtcblx0TW9yZWJpdHMuc2ltcGxlV2luZG93LnByb3RvdHlwZSA9IHtcblx0XHRidXR0b25zOiBbXSxcblx0XHRoZWlnaHQ6IDYwMCxcblx0XHRoYXNGb290ZXJMaW5rczogZmFsc2UsXG5cdFx0c2NyaXB0TmFtZTogbnVsbCxcblx0XHQvKipcblx0XHQgKiBGb2N1c2VzIHRoZSBkaWFsb2cuIFRoaXMgbWlnaHQgd29yaywgb3Igb24gdGhlIGNvbnRyYXJ5LCBpdCBtaWdodCBub3QuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGZvY3VzKCkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnbW92ZVRvVG9wJyk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENsb3NlcyB0aGUgZGlhbG9nLiBJZiB0aGlzIGlzIHNldCBhcyBhbiBldmVudCBoYW5kbGVyLCBpdCB3aWxsIHN0b3AgdGhlIGV2ZW50XG5cdFx0ICogZnJvbSBkb2luZyBhbnl0aGluZyBtb3JlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtldmVudH0gW2V2ZW50XVxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0Y2xvc2UoZXZlbnQpIHtcblx0XHRcdGlmIChldmVudCkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2hvd3MgdGhlIGRpYWxvZy4gQ2FsbGluZyBkaXNwbGF5KCkgb24gYSBkaWFsb2cgdGhhdCBoYXMgcHJldmlvdXNseSBiZWVuIGNsb3NlZFxuXHRcdCAqIG1pZ2h0IHdvcmssIGJ1dCBpdCBpcyBub3QgZ3VhcmFudGVlZC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0ZGlzcGxheSgpIHtcblx0XHRcdGlmICh0aGlzLnNjcmlwdE5hbWUpIHtcblx0XHRcdFx0Y29uc3QgJHdpZGdldCA9ICQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpO1xuXHRcdFx0XHQkd2lkZ2V0LmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctc2NyaXB0bmFtZScpLnJlbW92ZSgpO1xuXHRcdFx0XHRjb25zdCBzY3JpcHRuYW1lc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0c2NyaXB0bmFtZXNwYW4uY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1zY3JpcHRuYW1lJztcblx0XHRcdFx0c2NyaXB0bmFtZXNwYW4udGV4dENvbnRlbnQgPSBgJHt0aGlzLnNjcmlwdE5hbWV9IFxcdTAwQjcgYDsgLy8gVSswMEI3IE1JRERMRSBET1QgPSAmbWlkZG90O1xuXHRcdFx0XHQkd2lkZ2V0LmZpbmQoJy51aS1kaWFsb2ctdGl0bGUnKS5wcmVwZW5kKHNjcmlwdG5hbWVzcGFuKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGRpYWxvZyA9ICQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wZW4nKTtcblx0XHRcdGlmICh3aW5kb3cuc2V0dXBUb29sdGlwcyAmJiB3aW5kb3cucGcgJiYgd2luZG93LnBnLnJlICYmIHdpbmRvdy5wZy5yZS5kaWZmKSB7XG5cdFx0XHRcdC8vIHRpZSBpbiB3aXRoIE5BVlBPUFxuXHRcdFx0XHRkaWFsb2cucGFyZW50KClbMF0ucmFuU2V0dXBUb29sdGlwc0FscmVhZHkgPSBmYWxzZTtcblx0XHRcdFx0d2luZG93LnNldHVwVG9vbHRpcHMoZGlhbG9nLnBhcmVudCgpWzBdKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0SGVpZ2h0KHRoaXMuaGVpZ2h0KTsgLy8gaW5pdCBoZWlnaHQgYWxnb3JpdGhtXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGRpYWxvZyB0aXRsZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0VGl0bGUodGl0bGUpIHtcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wdGlvbicsICd0aXRsZScsIHRpdGxlKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgc2NyaXB0IG5hbWUsIGFwcGVhcmluZyBhcyBhIHByZWZpeCB0byB0aGUgdGl0bGUgdG8gaGVscCB1c2VycyBkZXRlcm1pbmUgd2hpY2hcblx0XHQgKiB1c2VyIHNjcmlwdCBpcyBwcm9kdWNpbmcgd2hpY2ggZGlhbG9nLiBGb3IgaW5zdGFuY2UsIFR3aW5rbGUgbW9kdWxlcyBzZXQgdGhpcyB0byBcIlR3aW5rbGVcIi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRTY3JpcHROYW1lKG5hbWUpIHtcblx0XHRcdHRoaXMuc2NyaXB0TmFtZSA9IG5hbWU7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGRpYWxvZyB3aWR0aC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0V2lkdGgod2lkdGgpIHtcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wdGlvbicsICd3aWR0aCcsIHdpZHRoKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgZGlhbG9nJ3MgbWF4aW11bSBoZWlnaHQuIFRoZSBkaWFsb2cgd2lsbCBhdXRvLXNpemUgdG8gZml0IGl0cyBjb250ZW50cyxcblx0XHQgKiBidXQgdGhlIGNvbnRlbnQgYXJlYSB3aWxsIGdyb3cgbm8gbGFyZ2VyIHRoYW4gdGhlIGhlaWdodCBnaXZlbiBoZXJlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0SGVpZ2h0KGhlaWdodCkge1xuXHRcdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0XHQvLyBmcm9tIGRpc3BsYXkgdGltZSBvbndhcmRzLCBsZXQgdGhlIGJyb3dzZXIgZGV0ZXJtaW5lIHRoZSBvcHRpbXVtIGhlaWdodCxcblx0XHRcdC8vIGFuZCBpbnN0ZWFkIGxpbWl0IHRoZSBoZWlnaHQgYXQgdGhlIGdpdmVuIHZhbHVlXG5cdFx0XHQvLyBub3RlIHRoYXQgdGhlIGdpdmVuIGhlaWdodCB3aWxsIGV4Y2x1ZGUgdGhlIGFwcHJveC4gMjBweCB0aGF0IHRoZSBqUXVlcnkgVUlcblx0XHRcdC8vIGNocm9tZSBoYXMgaW4gaGVpZ2h0IGluIGFkZGl0aW9uIHRvIHRoZSBoZWlnaHQgb2YgYW4gZXF1aXZhbGVudCBcImNsYXNzaWNcIlxuXHRcdFx0Ly8gTW9yZWJpdHMuc2ltcGxlV2luZG93XG5cdFx0XHRpZiAoXG5cdFx0XHRcdE51bWJlci5wYXJzZUludChnZXRDb21wdXRlZFN0eWxlKCQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpWzBdLCBudWxsKS5oZWlnaHQsIDEwKSA+XG5cdFx0XHRcdHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdFx0KSB7XG5cdFx0XHRcdCQodGhpcy5jb250ZW50KVxuXHRcdFx0XHRcdC5kaWFsb2coJ29wdGlvbicsICdoZWlnaHQnLCB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyKVxuXHRcdFx0XHRcdC5kaWFsb2coJ29wdGlvbicsICdwb3NpdGlvbicsICd0b3AnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wdGlvbicsICdoZWlnaHQnLCAnYXV0bycpO1xuXHRcdFx0fVxuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0JykuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1jb250ZW50JylbMF0uc3R5bGUubWF4SGVpZ2h0ID0gYCR7TnVtYmVyLnBhcnNlSW50KFxuXHRcdFx0XHR0aGlzLmhlaWdodCAtIDMwLFxuXHRcdFx0XHQxMFxuXHRcdFx0KX1weGA7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGNvbnRlbnQgb2YgdGhlIGRpYWxvZyB0byB0aGUgZ2l2ZW4gZWxlbWVudCBub2RlLCB1c3VhbGx5IGZyb20gcmVuZGVyaW5nXG5cdFx0ICogYSB7QGxpbmsgTW9yZWJpdHMucXVpY2tGb3JtfS5cblx0XHQgKiBSZS1lbnVtZXJhdGVzIHRoZSBmb290ZXIgYnV0dG9ucywgYnV0IGxlYXZlcyB0aGUgZm9vdGVyIGxpbmtzIGFzIHRoZXkgYXJlLlxuXHRcdCAqIEJlIHN1cmUgdG8gY2FsbCB0aGlzIGF0IGxlYXN0IG9uY2UgYmVmb3JlIHRoZSBkaWFsb2cgaXMgZGlzcGxheWVkLi4uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZW50XG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRDb250ZW50KGNvbnRlbnQpIHtcblx0XHRcdHRoaXMucHVyZ2VDb250ZW50KCk7XG5cdFx0XHR0aGlzLmFkZENvbnRlbnQoY29udGVudCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEFkZHMgdGhlIGdpdmVuIGVsZW1lbnQgbm9kZSB0byB0aGUgZGlhbG9nIGNvbnRlbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZW50XG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRhZGRDb250ZW50KGNvbnRlbnQpIHtcblx0XHRcdHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcblx0XHRcdC8vIGxvb2sgZm9yIHN1Ym1pdCBidXR0b25zIGluIHRoZSBjb250ZW50LCBoaWRlIHRoZW0sIGFuZCBhZGQgYSBwcm94eSBidXR0b24gdG8gdGhlIGJ1dHRvbiBwYW5lXG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdCQodGhpcy5jb250ZW50KVxuXHRcdFx0XHQuZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKVxuXHRcdFx0XHQuZWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRcdFx0aWYgKHZhbHVlLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuXHRcdFx0XHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gdmFsdWUuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUudGV4dENvbnRlbnQpIHtcblx0XHRcdFx0XHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9IHZhbHVlLnRleHRDb250ZW50O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSAn5o+Q5LqkJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnV0dG9uLmNsYXNzTmFtZSA9IHZhbHVlLmNsYXNzTmFtZSB8fCAnc3VibWl0QnV0dG9uUHJveHknO1xuXHRcdFx0XHRcdC8vIGhlcmUgaXMgYW4gaW5zdGFuY2Ugb2YgY2hlYXAgY29kaW5nLCBwcm9iYWJseSBhIG1lbW9yeS11c2FnZSBoaXQgaW4gdXNpbmcgYSBjbG9zdXJlIGhlcmVcblx0XHRcdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZmFsc2Vcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHNlbGYuYnV0dG9uc1tzZWxmLmJ1dHRvbnMubGVuZ3RoXSA9IGJ1dHRvbjtcblx0XHRcdFx0fSk7XG5cdFx0XHQvLyByZW1vdmUgYWxsIGJ1dHRvbnMgZnJvbSB0aGUgYnV0dG9uIHBhbmUgYW5kIHJlLWFkZCB0aGVtXG5cdFx0XHRpZiAodGhpcy5idXR0b25zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdFx0LmRpYWxvZygnd2lkZ2V0Jylcblx0XHRcdFx0XHQuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zJylcblx0XHRcdFx0XHQuZW1wdHkoKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5idXR0b25zKVswXVxuXHRcdFx0XHRcdC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZW1wdHknKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcy5jb250ZW50KVxuXHRcdFx0XHRcdC5kaWFsb2coJ3dpZGdldCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucycpWzBdXG5cdFx0XHRcdFx0LnNldEF0dHJpYnV0ZSgnZGF0YS1lbXB0eScsICdkYXRhLWVtcHR5Jyk7IC8vIHVzZWQgYnkgQ1NTXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlcyBhbGwgY29udGVudHMgZnJvbSB0aGUgZGlhbG9nLCBiYXJyaW5nIGFueSBmb290ZXIgbGlua3MuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHB1cmdlQ29udGVudCgpIHtcblx0XHRcdHRoaXMuYnV0dG9ucyA9IFtdO1xuXHRcdFx0Ly8gZGVsZXRlIGFsbCBidXR0b25zIGluIHRoZSBidXR0b25wYW5lXG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnKS5lbXB0eSgpO1xuXHRcdFx0d2hpbGUgKHRoaXMuY29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRcdFx0dGhpcy5jb250ZW50LnJlbW92ZUNoaWxkKHRoaXMuY29udGVudC5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQWRkcyBhIGxpbmsgaW4gdGhlIGJvdHRvbS1yaWdodCBjb3JuZXIgb2YgdGhlIGRpYWxvZy5cblx0XHQgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgaGVscCBvciBwb2xpY3kgbGlua3MuXG5cdFx0ICogRm9yIGV4YW1wbGUsIFR3aW5rbGUncyBDU0QgbW9kdWxlIGFkZHMgYSBsaW5rIHRvIHRoZSBDU0QgcG9saWN5IHBhZ2UsXG5cdFx0ICogYXMgd2VsbCBhcyBhIGxpbmsgdG8gVHdpbmtsZSdzIGRvY3VtZW50YXRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIERpc3BsYXkgdGV4dC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraVBhZ2UgLSBMaW5rIHRhcmdldC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVwPWZhbHNlXSAtIFNldCB0cnVlIHRvIHByZXBlbmQgcmF0aGVyIHRoYW4gYXBwZW5kLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0YWRkRm9vdGVyTGluayh0ZXh0LCB3aWtpUGFnZSwgcHJlcCkge1xuXHRcdFx0Y29uc3QgJGZvb3RlcmxpbmtzID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0JykuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1mb290ZXJsaW5rcycpO1xuXHRcdFx0aWYgKHRoaXMuaGFzRm9vdGVyTGlua3MpIHtcblx0XHRcdFx0Y29uc3QgYnVsbGV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRidWxsZXQudGV4dENvbnRlbnQgPSAnIFxcdTIwMjIgJzsgLy8gVSsyMDIyIEJVTExFVFxuXHRcdFx0XHRpZiAocHJlcCkge1xuXHRcdFx0XHRcdCRmb290ZXJsaW5rcy5wcmVwZW5kKGJ1bGxldCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGZvb3RlcmxpbmtzLmFwcGVuZChidWxsZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBtdy51dGlsLmdldFVybCh3aWtpUGFnZSkpO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgd2lraVBhZ2UpO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCAnbm9vcGVuZXIgbm9yZWZlcnJlcicpO1xuXHRcdFx0bGluay50ZXh0Q29udGVudCA9IHRleHQ7XG5cdFx0XHRpZiAocHJlcCkge1xuXHRcdFx0XHQkZm9vdGVybGlua3MucHJlcGVuZChsaW5rKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRmb290ZXJsaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmhhc0Zvb3RlckxpbmtzID0gdHJ1ZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB3aGV0aGVyIHRoZSB3aW5kb3cgc2hvdWxkIGJlIG1vZGFsIG9yIG5vdC4gTW9kYWwgZGlhbG9ncyBjcmVhdGVcblx0XHQgKiBhbiBvdmVybGF5IGJlbG93IHRoZSBkaWFsb2cgYnV0IGFib3ZlIG90aGVyIHBhZ2UgZWxlbWVudHMuIFRoaXNcblx0XHQgKiBtdXN0IGJlIHVzZWQgKGlmIG5lY2Vzc2FyeSkgYmVmb3JlIGNhbGxpbmcgZGlzcGxheSgpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbbW9kYWw9ZmFsc2VdIC0gSWYgc2V0IHRvIHRydWUsIG90aGVyIGl0ZW1zIG9uIHRoZVxuXHRcdCAqIHBhZ2Ugd2lsbCBiZSBkaXNhYmxlZCwgaS5lLiwgY2Fubm90IGJlIGludGVyYWN0ZWQgd2l0aC5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldE1vZGFsaXR5KG1vZGFsKSB7XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcHRpb24nLCAnbW9kYWwnLCBtb2RhbCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogRW5hYmxlcyBvciBkaXNhYmxlcyBhbGwgZm9vdGVyIGJ1dHRvbnMgb24gYWxsIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9cyBpbiB0aGUgY3VycmVudCBwYWdlLlxuXHQgKiBUaGlzIHNob3VsZCBiZSBjYWxsZWQgd2l0aCBgZmFsc2VgIHdoZW4gdGhlIGJ1dHRvbihzKSBiZWNvbWUgaXJyZWxldmFudCAoZS5nLiBqdXN0IGJlZm9yZVxuXHQgKiB7QGxpbmsgTW9yZWJpdHMuc3RhdHVzLmluaXR9IGlzIGNhbGxlZCkuXG5cdCAqIFRoaXMgaXMgbm90IGFuIGluc3RhbmNlIG1ldGhvZCBzbyB0aGF0IGNvbnN1bWVycyBkb24ndCBoYXZlIHRvIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlXG5cdCAqIG9yaWdpbmFsIGBNb3JlYml0cy5zaW1wbGVXaW5kb3dgIG9iamVjdCBzaXR0aW5nIGFyb3VuZCBzb21ld2hlcmUuIEFueXdheSwgbW9zdCBvZiB0aGUgdGltZVxuXHQgKiB0aGVyZSB3aWxsIG9ubHkgYmUgb25lIGBNb3JlYml0cy5zaW1wbGVXaW5kb3dgIG9wZW4sIHNvIHRoaXMgc2hvdWxkbid0IG1hdHRlci5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnNpbXBsZVdpbmRvd1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWRcblx0ICovXG5cdE1vcmViaXRzLnNpbXBsZVdpbmRvdy5zZXRCdXR0b25zRW5hYmxlZCA9IChlbmFibGVkKSA9PiB7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHkuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zIGJ1dHRvbicpLnByb3AoJ2Rpc2FibGVkJywgIWVuYWJsZWQpO1xuXHR9O1xufSkoalF1ZXJ5KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNBLElBQUFBLG9CQUE0QkMsUUFBQSxpQkFBQTtBQXJDNUI7Q0F1Q0MsU0FBU0MsU0FBU0MsR0FBRztBQUdyQixRQUFNQyxXQUFXLENBQUM7QUFDbEJDLFNBQU9ELFdBQVdBO0FBS2xCQSxXQUFTRSxPQUFPOzs7OztJQUtmQyxvQkFBb0IsQ0FBQyxhQUFhLE1BQU07Ozs7Ozs7Ozs7SUFVeENDLDBCQUEyQkMsU0FBUTtBQUNsQyxZQUFNQyxTQUFTO0FBQ2YsWUFBTUMsU0FBUztBQUNmLFlBQU1DLFFBQVFGLE9BQU9HLEtBQUtKLEdBQUcsS0FBS0UsT0FBT0UsS0FBS0osR0FBRztBQUNqRCxZQUFNSyxXQUFXSCxPQUFPRSxLQUFLSixHQUFHO0FBQ2hDLFVBQUksQ0FBQ0csT0FBTztBQUNYLGVBQU87TUFDUjtBQUNBLFlBQU1HLFFBQVFYLFNBQVNZLEtBQUtDLFdBQVdDLE9BQU9DLFFBQVFQLE1BQU0sQ0FBQyxDQUFDO0FBQzlELFVBQUlHLFVBQVUsSUFBSTtBQUNqQixlQUFPO01BQ1I7QUFFQSxhQUFPRCxXQUNKLENBQUNGLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLENBQUMsSUFBSSxHQUFHQSxNQUFNLENBQUMsR0FBR0EsTUFBTSxDQUFDLElBQUksR0FBR0EsTUFBTSxDQUFDLENBQUMsSUFDekQsQ0FBQ0EsTUFBTSxDQUFDLEdBQUdBLE1BQU0sQ0FBQyxJQUFJLEdBQUdBLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLENBQUMsR0FBR0EsTUFBTSxDQUFDLENBQUM7SUFDekQ7RUFDRDtB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LFVBQVUsUUFBUTtBQUNwQ2tuQixXQUFLbG5CLGFBQWEsT0FBTyxxQkFBcUI7QUFDOUNrbkIsV0FBS3pnQixjQUFjN0o7QUFDbkIsVUFBSXc0QixNQUFNO0FBQ1RDLHFCQUFhcFUsUUFBUWlHLElBQUk7TUFDMUIsT0FBTztBQUNObU8scUJBQWF4MkIsT0FBT3FvQixJQUFJO01BQ3pCO0FBQ0EsV0FBSzZNLGlCQUFpQjtBQUN0QixhQUFPO0lBQ1I7Ozs7Ozs7Ozs7SUFVQXdCLFlBQVlDLE9BQU87QUFDbEJuOUIsUUFBRSxLQUFLMkUsT0FBTyxFQUFFODFCLE9BQU8sVUFBVSxTQUFTMEMsS0FBSztBQUMvQyxhQUFPO0lBQ1I7RUFDRDtBQVlBbDlCLFdBQVNxNkIsYUFBYThDLG9CQUFxQkMsYUFBWTtBQUN0RCxVQUFNdjdCLFFBQVE5QixFQUFFLE1BQU07QUFDdEI4QixVQUFNRyxLQUFLLGlDQUFpQyxFQUFFeWUsS0FBSyxZQUFZLENBQUMyYyxPQUFPO0VBQ3hFO0FBQ0QsR0FBR0MsTUFBTTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJtb3JlYml0cyIsICIkIiwgIk1vcmViaXRzIiwgIndpbmRvdyIsICJsMTBuIiwgInJlZGlyZWN0VGFnQWxpYXNlcyIsICJzaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQiLCAic3RyIiwgInJneFVUQyIsICJyZ3hDU1QiLCAibWF0Y2giLCAiZXhlYyIsICJtYXRjaENTVCIsICJtb250aCIsICJkYXRlIiwgImxvY2FsZURhdGEiLCAibW9udGhzIiwgImluZGV4T2YiLCAidXNlcklzSW5Hcm91cCIsICJncm91cCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImluY2x1ZGVzIiwgInVzZXJJc1N5c29wIiwgInNhbml0aXplSVB2NiIsICJhZGRyZXNzIiwgImNvbnNvbGUiLCAid2FybiIsICJpcCIsICJpc1BhZ2VSZWRpcmVjdCIsICIkYm9keSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImZpbmQiLCAibGVuZ3RoIiwgInBhZ2VOYW1lTm9ybSIsICJyZXBsYWNlIiwgInBhZ2VOYW1lUmVnZXgiLCAicGFnZU5hbWUiLCAiZmlyc3RDaGFyIiwgInJlbWFpbmRlciIsICJzdHJpbmciLCAiZXNjYXBlUmVnRXhwIiwgInNsaWNlIiwgIlRpdGxlIiwgInBocENoYXJUb1VwcGVyIiwgInRvTG93ZXJDYXNlIiwgImNvbmNhdCIsICJjcmVhdGVIdG1sIiwgImlucHV0IiwgImZyYWdtZW50IiwgImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCAiZ2VuZXJhdGVBcnJheSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJOb2RlIiwgImFwcGVuZENoaWxkIiwgIl9pdGVyYXRvcjIiLCAicGFyc2VIVE1MIiwgInJlbmRlcldpa2lsaW5rcyIsICJfc3RlcDIiLCAibm9kZSIsICJlcnIiLCAiZSIsICJmIiwgInRleHQiLCAidWIiLCAidW5iaW5kZXIiLCAidW5iaW5kIiwgImNvbnRlbnQiLCAiXyIsICJ0YXJnZXQiLCAidGV4dF8iLCAidXRpbCIsICJnZXRVcmwiLCAicmViaW5kIiwgIm5hbWVzcGFjZVJlZ2V4IiwgIm5hbWVzcGFjZXMiLCAiYWxpYXNlcyIsICJyZWdleCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibmFtZSIsICJudW1iZXIiLCAibWFwIiwgImNoYXIiLCAiam9pbiIsICJxdWlja0Zvcm0iLCAiZXZlbnQiLCAiZXZlbnRUeXBlIiwgInJvb3QiLCAidHlwZSIsICJwcm90b3R5cGUiLCAicmVuZGVyIiwgInJldCIsICJuYW1lcyIsICJhcHBlbmQiLCAiZGF0YSIsICJjaGlsZHMiLCAiaWQiLCAiY2hpbGQiLCAiaW50ZXJuYWxTdWJncm91cElkIiwgImN1cnJlbnROb2RlIiwgImNvbXB1dGUiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiaW5JZCIsICJjaGlsZENvbnRhaW5lciIsICJsYWJlbCIsICJhZG1pbm9ubHkiLCAiaSIsICJjdXJyZW50IiwgInN1Ym5vZGUiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAic2V0QXR0cmlidXRlIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAic2VsZWN0IiwgIm11bHRpcGxlIiwgInNpemUiLCAiZGlzYWJsZWQiLCAibGlzdCIsICJ2YWx1ZXMiLCAic2VsZWN0ZWQiLCAiaGlkZGVuIiwgImNyZWF0ZVRleHROb2RlIiwgImN1cklkIiwgImN1ckRpdiIsICJ0b29sdGlwIiwgImdlbmVyYXRlVG9vbHRpcCIsICJjaGVja2VkIiwgInN0eWxlIiwgInN1Ymdyb3VwIiwgInRtcGdyb3VwIiwgInN1Ymdyb3VwUmF3IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImVsIiwgIm5ld0VsIiwgInNob3duIiwgInBhcmVudE5vZGUiLCAiZm9ybSIsICJyZW1vdmVDaGlsZCIsICJzaGlmdENsaWNrU3VwcG9ydCIsICJjaGVja2JveFNoaWZ0Q2xpY2tTdXBwb3J0IiwgImdldEVsZW1lbnRzIiwgInBsYWNlaG9sZGVyIiwgIl9pMiIsICJfYXJyIiwgImF0dCIsICJfaTMiLCAiX2FycjIiLCAiX2k0IiwgIl9hcnIzIiwgIm1pbiIsICJtYXgiLCAiTnVtYmVyIiwgIlBPU0lUSVZFX0lORklOSVRZIiwgImxpc3ROb2RlIiwgIm1vcmUiLCAibmV3Tm9kZSIsICJzdWJsaXN0IiwgImFyZWEiLCAiY291bnRlciIsICJzdG9wUHJvcGFnYXRpb24iLCAibW9yZUJ1dHRvbiIsICJzdWJsYWJlbCIsICJyZW1vdmUiLCAibWF4bGVuZ3RoIiwgImVsZW0iLCAibW9yZWJ1dHRvbiIsICJsaXN0bm9kZSIsICJub2RlXyIsICJpbnB1dG5vZGUiLCAicmVtb3ZlQXR0cmlidXRlIiwgInJlbW92ZUJ1dHRvbiIsICJyZXN1bHQiLCAibGFiZWxFbGVtZW50IiwgImNvbHMiLCAicm93cyIsICJyZXF1aXJlZCIsICJyZWFkb25seSIsICJFcnJvciIsICJ0b1N0cmluZyIsICJleHRyYSIsICIkZGF0YSIsICJ0b29sdGlwQnV0dG9uIiwgInRpdGxlIiwgInBvc2l0aW9uIiwgIm15IiwgImF0IiwgImNvbGxpc2lvbiIsICJ0b29sdGlwQ2xhc3MiLCAiZ2V0SW5wdXREYXRhIiwgIl9pdGVyYXRvcjUiLCAiZWxlbWVudHMiLCAiX3N0ZXA1IiwgImZpZWxkIiwgImZpZWxkTmFtZU5vcm0iLCAiZGF0YXNldCIsICJzaW5nbGUiLCAidmFsIiwgInRyaW0iLCAiZmllbGROYW1lIiwgIiRmb3JtIiwgImVzY2FwZVNlbGVjdG9yIiwgIiRlbGVtZW50cyIsICJ0b0FycmF5IiwgImdldENoZWNrYm94T3JSYWRpbyIsICJlbGVtZW50QXJyYXkiLCAiZm91bmQiLCAiZmlsdGVyIiwgImdldEVsZW1lbnRDb250YWluZXIiLCAiSFRNTEZpZWxkU2V0RWxlbWVudCIsICJIVE1MRGl2RWxlbWVudCIsICJIVE1MSGVhZGluZ0VsZW1lbnQiLCAiZ2V0RWxlbWVudExhYmVsT2JqZWN0IiwgIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCAiZ2V0RWxlbWVudExhYmVsIiwgImZpcnN0Q2hpbGQiLCAidGV4dENvbnRlbnQiLCAic2V0RWxlbWVudExhYmVsIiwgImxhYmVsVGV4dCIsICJvdmVycmlkZUVsZW1lbnRMYWJlbCIsICJ0ZW1wb3JhcnlMYWJlbFRleHQiLCAiaGFzQXR0cmlidXRlIiwgInJlc2V0RWxlbWVudExhYmVsIiwgImdldEF0dHJpYnV0ZSIsICJzZXRFbGVtZW50VmlzaWJpbGl0eSIsICJ2aXNpYmlsaXR5IiwgInRvZ2dsZSIsICJzZXRFbGVtZW50VG9vbHRpcFZpc2liaWxpdHkiLCAiSFRNTEZvcm1FbGVtZW50IiwgImdldENoZWNrZWQiLCAicmV0dXJuQXJyYXkiLCAiSFRNTFNlbGVjdEVsZW1lbnQiLCAib3B0aW9ucyIsICJIVE1MSW5wdXRFbGVtZW50IiwgImdldFVuY2hlY2tlZCIsICJpc0lQdjZBZGRyZXNzIiwgInRvVXBwZXJDYXNlIiwgImFiYnJldlBvcyIsICJDSURSU3RhcnQiLCAiYWRkcmVzc0VuZCIsICJyZXBlYXQiLCAicGFkIiwgInJlcGxhY2VtZW50IiwgInNwbGl0IiwgImlzUmFuZ2UiLCAiaXNJUEFkZHJlc3MiLCAidmFsaWRDSURSIiwgInN1Ym5ldCIsICJwYXJzZUludCIsICJnZXQ2NCIsICJpcHY2IiwgInN1Ym5ldE1hdGNoIiwgImlwUmVnZXgiLCAidG9VcHBlckNhc2VGaXJzdENoYXIiLCAidG9Mb3dlckNhc2VGaXJzdENoYXIiLCAic3BsaXRXZWlnaHRlZEJ5S2V5cyIsICJzdGFydCIsICJlbmQiLCAic2tpcGxpc3QiLCAibGV2ZWwiLCAiaW5pdGlhbCIsICJBcnJheSIsICJpc0FycmF5IiwgIlR5cGVFcnJvciIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJmb3JtYXRSZWFzb25UZXh0IiwgImFkZFNpZyIsICJyZWFzb24iLCAic2lnIiwgInNpZ0luZGV4IiwgImxhc3RJbmRleE9mIiwgImZvcm1hdFJlYXNvbkZvckxvZyIsICJzYWZlUmVwbGFjZSIsICJwYXR0ZXJuIiwgImlzSW5maW5pdHkiLCAiZXhwaXJ5IiwgImZvcm1hdFRpbWUiLCAidGltZSIsICJtIiwgIndnVUxTIiwgImFwcGVuZFB1bmN0dWF0aW9uIiwgInB1bmN0dWF0aW9uIiwgInNlYXJjaCIsICJhcnJheSIsICJ1bmlxIiwgImFyciIsICJpdGVtIiwgImlkeCIsICJkdXBzIiwgImNodW5rIiwgIm51bUNodW5rcyIsICJNYXRoIiwgImNlaWwiLCAiZnJvbSIsICJzZWxlY3QyIiwgIm1hdGNoZXJzIiwgIm9wdGdyb3VwRnVsbCIsICJwYXJhbXMiLCAib3JpZ2luYWxNYXRjaGVyIiwgImZuIiwgImRlZmF1bHRzIiwgIm1hdGNoZXIiLCAidGVybSIsICJjaGlsZHJlbiIsICJ3b3JkQmVnaW5uaW5nIiwgIlJlZ0V4cCIsICJ0ZXN0IiwgImhpZ2hsaWdodFNlYXJjaE1hdGNoZXMiLCAic2VhcmNoVGVybSIsICJzZWxlY3QyU2VhcmNoUXVlcnkiLCAibG9hZGluZyIsICJjc3MiLCAicXVlcnlJbnRlcmNlcHRvciIsICJhdXRvU3RhcnQiLCAiZXYiLCAid2hpY2giLCAiY2xvc2VzdCIsICJwcmV2IiwgImRyb3Bkb3duIiwgIiRzZWFyY2giLCAic2VsZWN0aW9uIiwgImZvY3VzIiwgImhpc3RvcnkiLCAicHJlZml4IiwgInJhbmRvbSIsICJwb3N0Zml4IiwgInJlIiwgImdldENhbGxiYWNrIiwgImhhc093biIsICJzZWxmIiwgImFyZ3MiLCAicGFyYW0iLCAiZGlnaXRNYXRjaCIsICJfZCIsICJEYXRlIiwgIlJlZmxlY3QiLCAiYXBwbHkiLCAiVVRDIiwgImRhdGVQYXJ0cyIsICJGdW5jdGlvbiIsICJiaW5kIiwgImlzVmFsaWQiLCAibG9nIiwgIm1vbnRoc1Nob3J0IiwgImRheXMiLCAiZGF5c1Nob3J0IiwgInJlbGF0aXZlVGltZXMiLCAidGhpc0RheSIsICJwcmV2RGF5IiwgIm5leHREYXkiLCAidGhpc1dlZWsiLCAicGFzdFdlZWsiLCAib3RoZXIiLCAidW5pdE1hcCIsICJzZWNvbmRzIiwgIm1pbnV0ZXMiLCAiaG91cnMiLCAid2Vla3MiLCAieWVhcnMiLCAiaXNOYU4iLCAiZ2V0VGltZSIsICJpc0JlZm9yZSIsICJpc0FmdGVyIiwgImdldFVUQ01vbnRoTmFtZSIsICJnZXRVVENNb250aCIsICJnZXRVVENNb250aE5hbWVBYmJyZXYiLCAiZ2V0TW9udGhOYW1lIiwgImdldE1vbnRoIiwgImdldE1vbnRoTmFtZUFiYnJldiIsICJnZXRVVENEYXlOYW1lIiwgImdldFVUQ0RheSIsICJnZXRVVENEYXlOYW1lQWJicmV2IiwgImdldERheU5hbWUiLCAiZ2V0RGF5IiwgImdldERheU5hbWVBYmJyZXYiLCAiYWRkIiwgInVuaXQiLCAibnVtIiwgInVuaXROb3JtIiwgImtleXMiLCAic3VidHJhY3QiLCAiZm9ybWF0IiwgImZvcm1hdHN0ciIsICJ6b25lIiwgInVkYXRlIiwgImdldFRpbWV6b25lT2Zmc2V0IiwgInRvSVNPU3RyaW5nIiwgImxlbiIsICJoMjQiLCAiZ2V0SG91cnMiLCAiZ2V0TWludXRlcyIsICJnZXRTZWNvbmRzIiwgIm1zIiwgImdldE1pbGxpc2Vjb25kcyIsICJEIiwgImdldERhdGUiLCAiTSIsICJZIiwgImdldEZ1bGxZZWFyIiwgImgxMiIsICJhbU9yUG0iLCAicmVwbGFjZW1lbnRNYXAiLCAiSEgiLCAiSCIsICJoaCIsICJoIiwgIkEiLCAibW0iLCAic3MiLCAiU1NTIiwgImRkZGQiLCAiZGRkIiwgImQiLCAiREQiLCAiTU1NTSIsICJNTU0iLCAiTU0iLCAiWVlZWSIsICJZWSIsICJjYWxlbmRhciIsICJkYXRlRGlmZiIsICJzZXRIb3VycyIsICJtb250aEhlYWRlclJlZ2V4IiwgImdldFVUQ0Z1bGxZZWFyIiwgIm1vbnRoSGVhZGVyIiwgImhlYWRlciIsICJfaXRlcmF0b3I3IiwgImdldE93blByb3BlcnR5TmFtZXMiLCAiX3N0ZXA3IiwgImZ1bmMiLCAid2lraSIsICJudW1iZXJPZkFjdGlvbnNMZWZ0IiwgIm5ick9mQ2hlY2twb2ludHNMZWZ0IiwgImFjdGlvbkNvbXBsZXRlZCIsICJub3RpY2UiLCAic3RhdHVzIiwgInJlZGlyZWN0IiwgImZvbGxvd1JlZGlyZWN0IiwgInNldFRpbWVvdXQiLCAibG9jYXRpb24iLCAidGltZU91dCIsICJ3cEFjdGlvbkNvbXBsZXRlZFRpbWVPdXQiLCAiYWRkQ2hlY2twb2ludCIsICJyZW1vdmVDaGVja3BvaW50IiwgImFwaSIsICJjdXJyZW50QWN0aW9uIiwgInF1ZXJ5IiwgIm9uU3VjY2VzcyIsICJzdGF0dXNFbGVtZW50IiwgIm9uRXJyb3IiLCAiX3RoaXMkcXVlcnkiLCAiYXNzZXJ0IiwgImVycm9yZm9ybWF0IiwgInVzZWxhbmciLCAiZXJyb3JsYW5nIiwgImVycm9yc3VzZWxvY2FsIiwgInNldFN0YXR1c0VsZW1lbnQiLCAic3RhdGVsZW0iLCAiZm9ybWF0dmVyc2lvbiIsICJlcnJvciIsICJhY3Rpb24iLCAidGFncyIsICJtb3JlYml0c1dpa2lDaGFuZ2VUYWciLCAicGFyZW50IiwgInJlc3BvbnNlIiwgInJlc3BvbnNlWE1MIiwgInN0YXR1c1RleHQiLCAiZXJyb3JDb2RlIiwgImVycm9yVGV4dCIsICJiYWR0b2tlblJldHJ5IiwgInNldFBhcmVudCIsICJwb3N0IiwgImNhbGxlckFqYXhQYXJhbWV0ZXJzIiwgInF1ZXJ5U3RyaW5nQXJyIiwgIl9pNSIsICJfT2JqZWN0JGVudHJpZXMyIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJxdWVyeVN0cmluZyIsICJhamF4cGFyYW1zIiwgImNvbnRleHQiLCAidXJsIiwgIndpa2lTY3JpcHQiLCAiZGF0YVR5cGUiLCAiaGVhZGVycyIsICJtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQiLCAiYWpheCIsICJ0aGVuIiwgIm9uQVBJc3VjY2VzcyIsICJlcnJvcnMiLCAiY29kZSIsICJodG1sIiwgImVxIiwgImF0dHIiLCAicmV0dXJuRXJyb3IiLCAiY2FsbCIsICJpbmZvIiwgIkRlZmVycmVkIiwgInJlc29sdmVXaXRoIiwgIm9uQVBJZmFpbHVyZSIsICJlcnJvclRocm93biIsICJnZXRUb2tlbiIsICJ0b2tlbiIsICJyZWplY3RXaXRoIiwgImdldFN0YXR1c0VsZW1lbnQiLCAiZ2V0RXJyb3JDb2RlIiwgImdldEVycm9yVGV4dCIsICJnZXRYTUwiLCAiZ2V0UmVzcG9uc2UiLCAiZ2V0Q2FjaGVkSnNvbiIsICJwcm9wIiwgInRpdGxlcyIsICJydnNsb3RzIiwgInJ2cHJvcCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJhcGlvYmoiLCAidW5saW5rIiwgIndpa2l0ZXh0IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgIkpTT04iLCAicGFyc2UiLCAic2V0QXBpVXNlckFnZW50IiwgInVhIiwgInRva2VuQXBpIiwgIm1ldGEiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJwYWdlIiwgImN0eCIsICJwYWdlRXhpc3RzIiwgImVkaXRTdW1tYXJ5IiwgImNoYW5nZVRhZ3MiLCAidGVzdEFjdGlvbnMiLCAiY2FsbGJhY2tQYXJhbWV0ZXJzIiwgInBhZ2VUZXh0IiwgImVkaXRNb2RlIiwgImFwcGVuZFRleHQiLCAicHJlcGVuZFRleHQiLCAibmV3U2VjdGlvblRleHQiLCAibmV3U2VjdGlvblRpdGxlIiwgImNyZWF0ZU9wdGlvbiIsICJtaW5vckVkaXQiLCAiYm90RWRpdCIsICJwYWdlU2VjdGlvbiIsICJtYXhDb25mbGljdFJldHJpZXMiLCAibWF4UmV0cmllcyIsICJmb2xsb3dDcm9zc05zUmVkaXJlY3QiLCAid2F0Y2hsaXN0T3B0aW9uIiwgIndhdGNobGlzdEV4cGlyeSIsICJjcmVhdG9yIiwgInRpbWVzdGFtcCIsICJyZXZlcnRPbGRJRCIsICJtb3ZlRGVzdGluYXRpb24iLCAibW92ZVRhbGtQYWdlIiwgIm1vdmVTdWJwYWdlcyIsICJtb3ZlU3VwcHJlc3NSZWRpcmVjdCIsICJwcm90ZWN0RWRpdCIsICJwcm90ZWN0TW92ZSIsICJwcm90ZWN0Q3JlYXRlIiwgInByb3RlY3RDYXNjYWRlIiwgImxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciIsICJwYWdlTG9hZGVkIiwgImNzcmZUb2tlbiIsICJsb2FkVGltZSIsICJsYXN0RWRpdFRpbWUiLCAicGFnZUlEIiwgImNvbnRlbnRNb2RlbCIsICJyZXZlcnRDdXJJRCIsICJyZXZlcnRVc2VyIiwgIndhdGNoZWQiLCAiZnVsbHlQcm90ZWN0ZWQiLCAic3VwcHJlc3NQcm90ZWN0V2FybmluZyIsICJjb25mbGljdFJldHJpZXMiLCAicmV0cmllcyIsICJvbkxvYWRTdWNjZXNzIiwgIm9uTG9hZEZhaWx1cmUiLCAib25TYXZlU3VjY2VzcyIsICJvblNhdmVGYWlsdXJlIiwgIm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzIiwgIm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlIiwgIm9uTW92ZVN1Y2Nlc3MiLCAib25Nb3ZlRmFpbHVyZSIsICJvbkRlbGV0ZVN1Y2Nlc3MiLCAib25EZWxldGVGYWlsdXJlIiwgIm9uVW5kZWxldGVTdWNjZXNzIiwgIm9uVW5kZWxldGVGYWlsdXJlIiwgIm9uUHJvdGVjdFN1Y2Nlc3MiLCAib25Qcm90ZWN0RmFpbHVyZSIsICJsb2FkUXVlcnkiLCAibG9hZEFwaSIsICJzYXZlQXBpIiwgImxvb2t1cENyZWF0aW9uQXBpIiwgIm1vdmVBcGkiLCAibW92ZVByb2Nlc3NBcGkiLCAicGF0cm9sQXBpIiwgInBhdHJvbFByb2Nlc3NBcGkiLCAiZGVsZXRlQXBpIiwgImRlbGV0ZVByb2Nlc3NBcGkiLCAidW5kZWxldGVBcGkiLCAidW5kZWxldGVQcm9jZXNzQXBpIiwgInByb3RlY3RBcGkiLCAicHJvdGVjdFByb2Nlc3NBcGkiLCAiZW1wdHlGdW5jdGlvbiIsICJsb2FkIiwgIm9uRmFpbHVyZSIsICJpbnByb3AiLCAiaW50ZXN0YWN0aW9ucyIsICJjdXJ0aW1lc3RhbXAiLCAicnZsaW1pdCIsICJydnN0YXJ0aWQiLCAicmVkaXJlY3RzIiwgInJ2c2VjdGlvbiIsICJmbkxvYWRTdWNjZXNzIiwgInNhdmUiLCAiY2FuVXNlTXdVc2VyVG9rZW4iLCAiZm5DYW5Vc2VNd1VzZXJUb2tlbiIsICJjb25maXJtIiwgInN1bW1hcnkiLCAidXNlciIsICJ3YXRjaGxpc3QiLCAiZm5BcHBseVdhdGNobGlzdEV4cGlyeSIsICJ3YXRjaGxpc3RleHBpcnkiLCAic2VjdGlvbiIsICJtaW5vciIsICJub3RtaW5vciIsICJib3QiLCAiYXBwZW5kdGV4dCIsICJwcmVwZW5kdGV4dCIsICJzZWN0aW9udGl0bGUiLCAidW5kbyIsICJ1bmRvYWZ0ZXIiLCAiYmFzZXRpbWVzdGFtcCIsICJzdGFydHRpbWVzdGFtcCIsICJmblNhdmVTdWNjZXNzIiwgImZuU2F2ZUVycm9yIiwgImZuQXV0b1NhdmUiLCAicHJlcGVuZCIsICJuZXdTZWN0aW9uIiwgImdldFBhZ2VOYW1lIiwgImdldFBhZ2VUZXh0IiwgInNldFBhZ2VUZXh0IiwgInNldEFwcGVuZFRleHQiLCAic2V0UHJlcGVuZFRleHQiLCAic2V0TmV3U2VjdGlvblRleHQiLCAic2V0TmV3U2VjdGlvblRpdGxlIiwgInNldEVkaXRTdW1tYXJ5IiwgInNldENoYW5nZVRhZ3MiLCAic2V0Q3JlYXRlT3B0aW9uIiwgInNldE1pbm9yRWRpdCIsICJzZXRCb3RFZGl0IiwgInNldFBhZ2VTZWN0aW9uIiwgInNldE1heENvbmZsaWN0UmV0cmllcyIsICJzZXRNYXhSZXRyaWVzIiwgInNldFdhdGNobGlzdCIsICJzZXRXYXRjaGxpc3RFeHBpcnkiLCAic2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzIiwgInNldEZvbGxvd1JlZGlyZWN0IiwgInNldExvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciIsICJmbGFnIiwgInNldE1vdmVEZXN0aW5hdGlvbiIsICJkZXN0aW5hdGlvbiIsICJzZXRNb3ZlVGFsa1BhZ2UiLCAic2V0TW92ZVN1YnBhZ2VzIiwgInNldE1vdmVTdXBwcmVzc1JlZGlyZWN0IiwgInNldEVkaXRQcm90ZWN0aW9uIiwgInNldE1vdmVQcm90ZWN0aW9uIiwgInNldENyZWF0ZVByb3RlY3Rpb24iLCAic2V0Q2FzY2FkaW5nUHJvdGVjdGlvbiIsICJzZXRPbGRJRCIsICJvbGRJRCIsICJnZXRDdXJyZW50SUQiLCAiZ2V0UmV2aXNpb25Vc2VyIiwgImdldExhc3RFZGl0VGltZSIsICJzZXRDYWxsYmFja1BhcmFtZXRlcnMiLCAiZ2V0Q2FsbGJhY2tQYXJhbWV0ZXJzIiwgImV4aXN0cyIsICJnZXRQYWdlSUQiLCAiZ2V0Q29udGVudE1vZGVsIiwgImdldFdhdGNoZWQiLCAiZ2V0TG9hZFRpbWUiLCAiZ2V0Q3JlYXRvciIsICJnZXRDcmVhdGlvblRpbWVzdGFtcCIsICJjYW5FZGl0IiwgImxvb2t1cENyZWF0aW9uIiwgInJ2ZGlyIiwgImZuTG9va3VwQ3JlYXRpb25TdWNjZXNzIiwgInJldmVydCIsICJtb3ZlIiwgImZuUHJlZmxpZ2h0Q2hlY2tzIiwgImZuUHJvY2Vzc01vdmUiLCAiZm5OZWVkVG9rZW5JbmZvUXVlcnkiLCAicGF0cm9sIiwgInBhdHJvbGhyZWYiLCAicmNpZCIsICJnZXRQYXJhbVZhbHVlIiwgImZuUHJvY2Vzc1BhdHJvbCIsICJwYXRyb2xRdWVyeSIsICJyY3Byb3AiLCAicmN0aXRsZSIsICJyY2xpbWl0IiwgImRlbGV0ZVBhZ2UiLCAiZm5Qcm9jZXNzRGVsZXRlIiwgInVuZGVsZXRlUGFnZSIsICJmblByb2Nlc3NVbmRlbGV0ZSIsICJwcm90ZWN0IiwgImZuUHJvY2Vzc1Byb3RlY3QiLCAiZ2V0UHJlZml4ZWRUZXh0IiwgImVkaXRSZXN0cmljdGlvbiIsICJwYWdlb2JqIiwgImZuQ2hlY2tQYWdlTmFtZSIsICJyZXYiLCAibWlzc2luZyIsICJwYWdlaWQiLCAiY29udGVudG1vZGVsIiwgImVkaXRQcm90IiwgInByb3RlY3Rpb24iLCAicHIiLCAicG9wIiwgImxhc3RyZXZpZCIsICJ0ZXN0YWN0aW9ucyIsICJhY3Rpb25zIiwgIl9pNiIsICJfT2JqZWN0JGtleXMiLCAicmV2aWQiLCAidXNlcmhpZGRlbiIsICJpbnZhbGlkIiwgInJlc29sdmVkTmFtZSIsICJvcmlnTnMiLCAibmFtZXNwYWNlIiwgIm5ld05zIiwgIm5ld0V4cGlyeSIsICJyZWwiLCAiZWRpdCIsICJsaW5rIiwgImNhcHRjaGEiLCAicHVyZ2VRdWVyeSIsICJwdXJnZUFwaSIsICJzbGVlcCIsICJlcnJvckRhdGEiLCAiYWJ1c2VmaWx0ZXIiLCAiZGVzY3JpcHRpb24iLCAic3BhbSIsICJzcGFtYmxhY2tsaXN0IiwgIm1hdGNoZXMiLCAiaXNUZXh0UmVkaXJlY3QiLCAic29tZSIsICJ0YWciLCAiZm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAicmV2cyIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJmblByb2Nlc3NDaGVja3MiLCAiYWN0aW9uTWlzc2luZyIsICJwcm90ZWN0TWlzc2luZyIsICJzYWx0TWlzc2luZyIsICJlZGl0cHJvdCIsICJwYWdlVGl0bGUiLCAidG8iLCAibW92ZXRhbGsiLCAibW92ZXN1YnBhZ2VzIiwgIm5vcmVkaXJlY3QiLCAicmVjZW50Y2hhbmdlcyIsICJ1bnBhdHJvbGxlZCIsICJwYXRyb2xTdGF0IiwgImZuUHJvY2Vzc0RlbGV0ZUVycm9yIiwgImZuUHJvY2Vzc1VuZGVsZXRlRXJyb3IiLCAicHJzIiwgIm1vdmVwcm90IiwgImNyZWF0ZXByb3QiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAic291cmNlIiwgImNhc2NhZGUiLCAicHJvdGVjdGlvbnMiLCAiZXhwaXJ5cyIsICJtaWxsaXNlY29uZHMiLCAiZGVmZXJyZWQiLCAicmVzb2x2ZSIsICJwcmV2aWV3IiwgInByZXZpZXdib3giLCAiYWRkQ2xhc3MiLCAiaGlkZSIsICJiZWdpblJlbmRlciIsICJzZWN0aW9uVGl0bGUiLCAic2hvdyIsICJzdGF0dXNzcGFuIiwgImluaXQiLCAicHN0IiwgImRpc2FibGVsaW1pdHJlcG9ydCIsICJkaXNhYmxlZWRpdHNlY3Rpb24iLCAicmVuZGVyQXBpIiwgImZuUmVuZGVyU3VjY2VzcyIsICJpbm5lckhUTUwiLCAibG9hZGVyIiwgIm1vZHVsZXN0eWxlcyIsICJtb2R1bGVzIiwgImNsb3NlUHJldmlldyIsICJlbXB0eSIsICJwYXJzZVRlbXBsYXRlIiwgImNvdW50IiwgInVubmFtZWQiLCAiZXF1YWxzIiwgInBhcmFtZXRlcnMiLCAia2V5IiwgImZpbmRQYXJhbSIsICJmaW5hbCIsICJ0ZXN0MyIsICJ0ZXN0MiIsICJjaGFyQXQiLCAicmVtb3ZlTGluayIsICJsaW5rVGFyZ2V0IiwgIm13VGl0bGUiLCAibmV3RnJvbVRleHQiLCAibmFtZXNwYWNlSUQiLCAiZ2V0TmFtZXNwYWNlSWQiLCAiZ2V0TWFpblRleHQiLCAibGlua1JlZ2V4U3RyaW5nIiwgImlzRmlsZU9yQ2F0ZWdvcnkiLCAiY29sb24iLCAic2ltcGxlTGlua1JlZ2V4IiwgInBpcGVkTGlua1JlZ2V4IiwgImNvbW1lbnRPdXRJbWFnZSIsICJpbWFnZSIsICJpbWFnZVJlZ2V4U3RyaW5nIiwgImxpbmtzUmVnZXgiLCAiYWxsTGlua3MiLCAiX2l0ZXJhdG9yMTAiLCAiX3N0ZXAxMCIsICJhbGxMaW5rIiwgImdhbGxlcnlJbWFnZVJlZ2V4IiwgImZyZWVJbWFnZVJlZ2V4IiwgImFkZFRvSW1hZ2VDb21tZW50IiwgIl9pdGVyYXRvcjExIiwgIl9zdGVwMTEiLCAiZ2FsbGVyeVJlZ2V4IiwgIm5ld3RleHQiLCAicmVtb3ZlVGVtcGxhdGUiLCAidGVtcGxhdGUiLCAidGVtcGxhdGVSZWdleFN0cmluZyIsICJhbGxUZW1wbGF0ZXMiLCAiX2l0ZXJhdG9yMTIiLCAiX3N0ZXAxMiIsICJhbGxUZW1wbGF0ZSIsICJpbnNlcnRBZnRlclRlbXBsYXRlcyIsICJmbGFncyIsICJwcmVSZWdleCIsICJnZXRUZXh0IiwgInVzZXJzcGFjZUxvZ2dlciIsICJsb2dQYWdlTmFtZSIsICJpbml0aWFsVGV4dCIsICJoZWFkZXJMZXZlbCIsICJsb2dUZXh0IiwgInN1bW1hcnlUZXh0IiwgImRlZiIsICJyZWplY3QiLCAic3RhdCIsICJ0ZXh0UmF3IiwgImdlbmVyYXRlIiwgInVwZGF0ZSIsICJFbGVtZW50IiwgImhhc0NoaWxkTm9kZXMiLCAiZXJyb3JFdmVudCIsICJoYW5kbGVyIiwgInN0YXRSYXciLCAibGlua2VkIiwgInByaW50VXNlclRleHQiLCAiY29tbWVudHMiLCAibWVzc2FnZSIsICJwIiwgImRpdiIsICJtYXJnaW5Ub3AiLCAid2hpdGVTcGFjZSIsICJodG1sTm9kZSIsICJjb2xvciIsICJqUXVlcnlTZWxlY3RvciIsICJqUXVlcnlDb250ZXh0IiwgImxhc3RDaGVja2JveCIsICJjbGlja0hhbmRsZXIiLCAiY2xpY2tIYW5kbGVyMiIsICJ0aGlzQ2IiLCAic2hpZnRLZXkiLCAiY2JzIiwgImluZGV4IiwgImxhc3RJbmRleCIsICJlbmRTdGF0ZSIsICJmaW5pc2giLCAiY2xpY2siLCAib24iLCAiYmF0Y2hPcGVyYXRpb24iLCAicGFnZUxpc3QiLCAiY2h1bmtTaXplIiwgInByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzIiwgIndvcmtlciIsICJwb3N0RmluaXNoIiwgImNvdW50U3RhcnRlZCIsICJjb3VudEZpbmlzaGVkIiwgImNvdW50RmluaXNoZWRTdWNjZXNzIiwgImN1cnJlbnRDaHVua0luZGV4IiwgInBhZ2VDaHVua3MiLCAicnVubmluZyIsICJzZXRQYWdlTGlzdCIsICJzZXRPcHRpb24iLCAib3B0aW9uTmFtZSIsICJvcHRpb25WYWx1ZSIsICJydW4iLCAidG90YWwiLCAiZm5TdGFydE5ld0NodW5rIiwgIndvcmtlclN1Y2Nlc3MiLCAiYXJnIiwgImZuRG9uZU9uZSIsICJ3b3JrZXJGYWlsdXJlIiwgInRoaXNQcm94eSIsICJfaXRlcmF0b3IxMyIsICJfc3RlcDEzIiwgInByb2dyZXNzIiwgInJvdW5kIiwgImZsb29yIiwgInN0YXR1c1N0cmluZyIsICJzaW1wbGVXaW5kb3ciLCAid2lkdGgiLCAiaGVpZ2h0IiwgImRpYWxvZyIsICJhdXRvT3BlbiIsICJidXR0b25zIiwgIlBsYWNlaG9sZGVyIGJ1dHRvbiIsICJkaWFsb2dDbGFzcyIsICJpbm5lcldpZHRoIiwgImNsb3NlIiwgInJlc2l6ZVN0YXJ0IiwgInNjcm9sbGJveCIsICJtYXhIZWlnaHQiLCAicmVzaXplU3RvcCIsICJyZXNpemUiLCAiJHdpZGdldCIsICJlYWNoIiwgImJ1dHRvbnNwYW4iLCAibGlua3NzcGFuIiwgInJlc2l6YWJsZSIsICJoYXNGb290ZXJMaW5rcyIsICJzY3JpcHROYW1lIiwgInByZXZlbnREZWZhdWx0IiwgImRpc3BsYXkiLCAic2NyaXB0bmFtZXNwYW4iLCAic2V0dXBUb29sdGlwcyIsICJwZyIsICJkaWZmIiwgInJhblNldHVwVG9vbHRpcHNBbHJlYWR5IiwgInNldEhlaWdodCIsICJzZXRUaXRsZSIsICJzZXRTY3JpcHROYW1lIiwgInNldFdpZHRoIiwgImdldENvbXB1dGVkU3R5bGUiLCAiaW5uZXJIZWlnaHQiLCAic2V0Q29udGVudCIsICJwdXJnZUNvbnRlbnQiLCAiYWRkQ29udGVudCIsICJidXR0b24iLCAiYWRkRm9vdGVyTGluayIsICJ3aWtpUGFnZSIsICJwcmVwIiwgIiRmb290ZXJsaW5rcyIsICJidWxsZXQiLCAic2V0TW9kYWxpdHkiLCAibW9kYWwiLCAic2V0QnV0dG9uc0VuYWJsZWQiLCAiZW5hYmxlZCIsICJqUXVlcnkiXQp9Cg==
