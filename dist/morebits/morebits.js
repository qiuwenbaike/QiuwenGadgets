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
    for (let i = 0; i < this.childs.length; ++i) {
      currentNode[1].appendChild(this.childs[i].render());
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
              var _iterator3 = _createForOfIteratorHelper(tmpgroup), _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  const el = _step3.value;
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
                _iterator3.e(err);
              } finally {
                _iterator3.f();
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
    var _iterator4 = _createForOfIteratorHelper(form.elements), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const field = _step4.value;
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
      _iterator4.e(err);
    } finally {
      _iterator4.f();
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
        var _iterator5 = _createForOfIteratorHelper(skiplist), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const element = _step5.value;
            if (str.slice(i, i + element.length) === element) {
              i += element.length - 1;
              continue;
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
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
  var _iterator6 = _createForOfIteratorHelper(Object.getOwnPropertyNames(Date.prototype)), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      const func = _step6.value;
      if (!["add", "getDayName", "getMonthName"].includes(func)) {
        Morebits.date.prototype[func] = function(...args) {
          return this._d[func](...args);
        };
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
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
      var _iterator7 = _createForOfIteratorHelper(revs), _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
          const rev = _step7.value;
          if (!isTextRedirect(rev.content)) {
            ctx.creator = rev.user;
            ctx.timestamp = rev.timestamp;
            break;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
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
      var _iterator8 = _createForOfIteratorHelper(prs), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          const pr = _step8.value;
          if (pr.type === "edit" && !pr.source) {
            editprot = pr;
          } else if (pr.type === "move") {
            moveprot = pr;
          } else if (pr.type === "create") {
            createprot = pr;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
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
      var _iterator9 = _createForOfIteratorHelper(allLinks), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          const allLink = _step9.value;
          if (linksRegex.test(allLink)) {
            const replacement = "<!-- ".concat(reason).concat(allLink, " -->");
            unbinder.content = unbinder.content.replace(allLink, replacement);
            unbinder.unbind("<!--", "-->");
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
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
      var _iterator10 = _createForOfIteratorHelper(allLinks), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          let replacement = _step10.value;
          if (linksRegex.test(replacement)) {
            replacement = replacement.replace(/\]\]$/, "|".concat(data, "]]"));
            this.text = this.text.replace(replacement, replacement);
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
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
      var _iterator11 = _createForOfIteratorHelper(allTemplates), _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
          const allTemplate = _step11.value;
          if (linksRegex.test(allTemplate)) {
            this.text = this.text.replace(allTemplate, "");
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
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
      var _iterator12 = _createForOfIteratorHelper(chunk), _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
          const page = _step12.value;
          ctx.worker(page, thisProxy);
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vcmViaXRzL21vcmViaXRzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuLyohIFR3aW5rbGUuanMgLSBtb3JlYml0cy5qcyAqL1xuXG4vKipcbiAqIEEgbGlicmFyeSBmdWxsIG9mIGxvdHMgb2YgZ29vZG5lc3MgZm9yIHVzZXIgc2NyaXB0cyBvbiBNZWRpYVdpa2kgd2lraXMuXG4gKlxuICogVGhlIGhpZ2hsaWdodHMgaW5jbHVkZTpcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSAtIG1ha2UgY2FsbHMgdG8gdGhlIE1lZGlhV2lraSBBUElcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0gLSBtb2RpZnkgcGFnZXMgb24gdGhlIHdpa2kgKGVkaXQsIHJldmVydCwgZGVsZXRlLCBldGMuKVxuICogLSB7QGxpbmsgTW9yZWJpdHMuZGF0ZX0gLSBlbmhhbmNlZCBkYXRlIG9iamVjdCBwcm9jZXNzaW5nLCBzb3J0IG9mIGEgbGlnaHQgbW9tZW50LmpzXG4gKiAtIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19IC0gZ2VuZXJhdGUgcXVpY2sgSFRNTCBmb3JtcyBvbiB0aGUgZmx5XG4gKiAtIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9IC0gYSB3cmFwcGVyIGZvciBqUXVlcnkgVUkgRGlhbG9nIHdpdGggYSBjdXN0b20gbG9vayBhbmQgZXh0cmEgZmVhdHVyZXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnN0YXR1c30gLSBhIHJvdWdoLWFuZC1yZWFkeSBzdGF0dXMgbWVzc2FnZSBkaXNwbGF5ZXIsIHVzZWQgYnkgdGhlIE1vcmViaXRzLndpa2kgY2xhc3Nlc1xuICogLSB7QGxpbmsgTW9yZWJpdHMud2lraXRleHR9IC0gdXRpbGl0aWVzIGZvciBkZWFsaW5nIHdpdGggd2lraXRleHRcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnN0cmluZ30gLSB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBzdHJpbmdzXG4gKiAtIHtAbGluayBNb3JlYml0cy5hcnJheX0gLSB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBhcnJheXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLmlwfSAtIHV0aWxpdGllcyB0byBoZWxwIHByb2Nlc3MgSVAgYWRkcmVzc2VzXG4gKlxuICogRGVwZW5kZW5jaWVzOlxuICogLSBUaGUgd2hvbGUgdGhpbmcgcmVsaWVzIG9uIGpRdWVyeS4gIEJ1dCBtb3N0IHdpa2lzIHNob3VsZCBwcm92aWRlIHRoaXMgYnkgZGVmYXVsdC5cbiAqIC0ge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0sIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9LCBhbmQge0BsaW5rIE1vcmViaXRzLnN0YXR1c30gcmVseSBvbiB0aGUgXCJtb3JlYml0cy5jc3NcIiBmaWxlIGZvciB0aGVpciBzdHlsaW5nLlxuICogLSB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSBhbmQge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0gdG9vbHRpcHMgcmVseSBvbiBqUXVlcnkgVUkgRGlhbG9nIChmcm9tIFJlc291cmNlTG9hZGVyIG1vZHVsZSBuYW1lICdqcXVlcnkudWknKS5cbiAqIC0gVG8gY3JlYXRlIGEgZ2FkZ2V0IGJhc2VkIG9uIG1vcmViaXRzLmpzLCB1c2UgdGhpcyBzeW50YXggaW4gTWVkaWFXaWtpOkdhZGdldHMtZGVmaW5pdGlvbjpcbiAqICAgICAtIGAqR2FkZ2V0TmFtZVtSZXNvdXJjZUxvYWRlcnxkZXBlbmRlbmNpZXM9bWVkaWF3aWtpLnVzZXIsbWVkaWF3aWtpLnV0aWwsbWVkaWF3aWtpLlRpdGxlLGpxdWVyeS51aV18bW9yZWJpdHMuanN8bW9yZWJpdHMuY3NzfEdhZGdldE5hbWUuanNgXG4gKiAtIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gY29uZmlndXJlIG1vcmViaXRzLmpzIGFzIGEgaGlkZGVuIGdhZGdldCBpbiBNZWRpYVdpa2k6R2FkZ2V0cy1kZWZpbml0aW9uOlxuICogICAgIC0gYCptb3JlYml0c1tSZXNvdXJjZUxvYWRlcnxkZXBlbmRlbmNpZXM9bWVkaWF3aWtpLnVzZXIsbWVkaWF3aWtpLnV0aWwsbWVkaWF3aWtpLlRpdGxlLGpxdWVyeS51aXxoaWRkZW5dfG1vcmViaXRzLmpzfG1vcmViaXRzLmNzc2BcbiAqICAgICBhbmQgdGhlbiBsb2FkIGV4dC5nYWRnZXQubW9yZWJpdHMgYXMgb25lIG9mIHRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoZSBuZXcgZ2FkZ2V0LlxuICpcbiAqIEFsbCB0aGUgc3R1ZmYgaGVyZSB3b3JrcyBvbiBhbGwgYnJvd3NlcnMgZm9yIHdoaWNoIE1lZGlhV2lraSBwcm92aWRlcyBKYXZhU2NyaXB0IHN1cHBvcnQuXG4gKlxuICogVGhpcyBsaWJyYXJ5IGlzIG1haW50YWluZWQgYnkgdGhlIG1haW50YWluZXJzIG9mIFR3aW5rbGUuXG4gKiBGb3IgcXVlcmllcywgc3VnZ2VzdGlvbnMsIGhlbHAsIGV0Yy4sIGhlYWQgdG8gW0hlbHA6VHdpbmtsZV0oaHR0cHM6Ly93d3cucWl1d2VuYmFpa2UuY24vd2lraS9IOlRXKS5cbiAqIFRoZSBsYXRlc3QgZGV2ZWxvcG1lbnQgc291cmNlIGlzIGF2YWlsYWJsZSBhdCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3dpa2ltZWRpYS1nYWRnZXRzL3R3aW5rbGUvYmxvYi9tYXN0ZXIvbW9yZWJpdHMuanN8R2l0SHVifS5cbiAqXG4gKiBAcGFyYW0ge0pRdWVyeX0gJFxuICogQG5hbWVzcGFjZSBNb3JlYml0c1xuICovXG5pbXBvcnQgJy4vbW9yZWJpdHMubGVzcyc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbihmdW5jdGlvbiBtb3JlYml0cygkKSB7XG5cdC8vIFdyYXAgZW50aXJlIGZpbGUgd2l0aCBhbm9ueW1vdXMgZnVuY3Rpb25cblx0LyoqIEBsZW5kcyBNb3JlYml0cyAqL1xuXHRjb25zdCBNb3JlYml0cyA9IHt9O1xuXHR3aW5kb3cuTW9yZWJpdHMgPSBNb3JlYml0czsgLy8gYWxsb3cgZ2xvYmFsIGFjY2Vzc1xuXHQvLyBObyBNb3JlYml0cy5pMThuIGF0IHRoaXMgdGltZVxuXHQvKipcblx0ICogV2lraS1zcGVjaWZpYyBjb25maWd1cmF0aW9ucyBmb3IgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmwxMG4gPSB7XG5cdFx0LyoqXG5cdFx0ICogTG9jYWwgYWxpYXNlcyBmb3IgXCJyZWRpcmVjdFwiIG1hZ2ljIHdvcmQuXG5cdFx0ICogQ2hlY2sgdXNpbmcgYXBpLnBocD9hY3Rpb249cXVlcnkmZm9ybWF0PWpzb24mbWV0YT1zaXRlaW5mbyZmb3JtYXR2ZXJzaW9uPTImc2lwcm9wPW1hZ2ljd29yZHNcblx0XHQgKi9cblx0XHRyZWRpcmVjdFRhZ0FsaWFzZXM6IFsnI1JFRElSRUNUJywgJyPph43lrprlkJEnXSxcblx0XHQvKipcblx0XHQgKiBUYWtlcyBhIHN0cmluZyBhcyBhcmd1bWVudCBhbmQgY2hlY2tzIGlmIGl0IGlzIGEgdGltZXN0YW1wIG9yIG5vdFxuXHRcdCAqIElmIG5vdCwgaXQgcmV0dXJucyBudWxsLiBJZiB5ZXMsIGl0IHJldHVybnMgYW4gYXJyYXkgb2YgaW50ZWdlcnNcblx0XHQgKiBpbiB0aGUgZm9ybWF0IFt5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlLCBzZWNvbmRdXG5cdFx0ICogd2hpY2ggY2FuIGJlIHBhc3NlZCB0byBEYXRlLlVUQygpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge251bWJlcltdIHwgbnVsbH1cblx0XHQgKi9cblx0XHRzaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQ6IChzdHIpID0+IHtcblx0XHRcdGNvbnN0IHJneFVUQyA9IC8oXFxkezR9KeW5tChcXGR7MSwyfSnmnIgoXFxkezEsMn0p5pelIFxcKC5cXCkgKFxcZHsyfSk6KFxcZHsyfSkgXFwoVVRDXFwpLzsgLy8gWVlZWeW5tE1vbnRo5pyIRETml6UgKHcpIEhIOm1tIChVVEMpXG5cdFx0XHRjb25zdCByZ3hDU1QgPSAvKFxcZHs0fSnlubQoXFxkezEsMn0p5pyIKFxcZHsxLDJ9KeaXpSBcXCguXFwpIChcXGR7Mn0pOihcXGR7Mn0pIFxcKENTVFxcKS87IC8vIFlZWVnlubRNb250aOaciERE5pelICh3KSBISDptbSAoQ1NUKVxuXHRcdFx0Y29uc3QgbWF0Y2ggPSByZ3hVVEMuZXhlYyhzdHIpIHx8IHJneENTVC5leGVjKHN0cik7XG5cdFx0XHRjb25zdCBtYXRjaENTVCA9IHJneENTVC5leGVjKHN0cik7XG5cdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbW9udGggPSBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzLmluZGV4T2YobWF0Y2hbNF0pO1xuXHRcdFx0aWYgKG1vbnRoID09PSAtMSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdC8vIC4uLi4uIHllYXIgLi4uLiBtb250aCAuLi4gZGF0ZSAuLi4uIGhvdXIgLi4uIG1pbnV0ZVxuXHRcdFx0cmV0dXJuIG1hdGNoQ1NUXG5cdFx0XHRcdD8gW21hdGNoWzFdLCBtYXRjaFsyXSAtIDEsIG1hdGNoWzNdLCBtYXRjaFs0XSAtIDgsIG1hdGNoWzVdXVxuXHRcdFx0XHQ6IFttYXRjaFsxXSwgbWF0Y2hbMl0gLSAxLCBtYXRjaFszXSwgbWF0Y2hbNF0sIG1hdGNoWzVdXTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBzZWUgd2hhdCBncm91cHMgYSB1c2VyIG1pZ2h0IGJlbG9uZy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwIC0gZS5nLiBgc3lzb3BgLCBgYXV0b2NvbmZpcm1lZGAsIGV0Yy5cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy51c2VySXNJbkdyb3VwID0gKGdyb3VwKSA9PiB7XG5cdFx0cmV0dXJuIG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpLmluY2x1ZGVzKGdyb3VwKTtcblx0fTtcblx0LyoqXG5cdCAqIEhhcmRjb2RlcyB3aGV0aGVyIHRoZSB1c2VyIGlzIGEgc3lzb3AsIHVzZWQgYSBsb3QuXG5cdCAqXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0TW9yZWJpdHMudXNlcklzU3lzb3AgPVxuXHRcdE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3N5c29wJykgfHwgTW9yZWJpdHMudXNlcklzSW5Hcm91cCgnc3Rld2FyZCcpIHx8IE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3FpdXdlbicpO1xuXHQvKipcblx0ICogRGVwcmVjYXRlZCBhcyBvZiBGZWJydWFyeSAyMDIxLCB1c2Uge0BsaW5rIE1vcmViaXRzLmlwLnNhbml0aXplSVB2Nn0uXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2fS5cblx0ICogQ29udmVydHMgYW4gSVB2NiBhZGRyZXNzIHRvIHRoZSBjYW5vbmljYWwgZm9ybSBzdG9yZWQgYW5kIHVzZWQgYnkgTWVkaWFXaWtpLlxuXHQgKiBKYXZhU2NyaXB0IHRyYW5zbGF0aW9uIG9mIHRoZSB7QGxpbmsgaHR0cHM6Ly9nZXJyaXQud2lraW1lZGlhLm9yZy9yL3BsdWdpbnMvZ2l0aWxlcy9tZWRpYXdpa2kvY29yZS8rLzhlYjZhYzNlODRlYTMzMTJkMzkxY2E5NmMxMmM0OWUzYWQwNzUzYmIvaW5jbHVkZXMvdXRpbHMvSVAucGhwIzEzMXxgSVA6OnNhbml0aXplSVAoKWB9XG5cdCAqIGZ1bmN0aW9uIGZyb20gdGhlIElQVXRpbHMgbGlicmFyeS4gIEFkZHJlc3NlcyBhcmUgdmVyYm9zZSwgdXBwZXJjYXNlLFxuXHQgKiBub3JtYWxpemVkLCBhbmQgZXhwYW5kZWQgdG8gOCB3b3Jkcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFkZHJlc3MgLSBUaGUgSVB2NiBhZGRyZXNzLCB3aXRoIG9yIHdpdGhvdXQgQ0lEUi5cblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnNhbml0aXplSVB2NiA9IChhZGRyZXNzKSA9PiB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0J1tNb3JlYml0c10gTk9URTogTW9yZWJpdHMuc2FuaXRpemVJUHY2IHdhcyByZW5hbWVkIHRvIE1vcmViaXRzLmlwLnNhbml0aXplSVB2NiBpbiBGZWJydWFyeSAyMDIxLCBwbGVhc2UgdXNlIHRoYXQgaW5zdGVhZCdcblx0XHQpO1xuXHRcdHJldHVybiBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYoYWRkcmVzcyk7XG5cdH07XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgcGFnZSBpcyBhIHJlZGlyZWN0IG9yIHNvZnQgcmVkaXJlY3QuIEZhaWxzXG5cdCAqIHRvIGRldGVjdCBzb2Z0IHJlZGlyZWN0cyBvbiBlZGl0LCBoaXN0b3J5LCBldGMuIHBhZ2VzLiAgV2lsbCBhdHRlbXB0IHRvXG5cdCAqIGRldGVjdCBNb2R1bGU6UmZELCB3aXRoIHRoZSBzYW1lIGZhaWx1cmUgcG9pbnRzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0ID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdHJldHVybiAhIShcblx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnSXNSZWRpcmVjdCcpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29mdHJlZGlyZWN0JykgfHxcblx0XHRcdCRib2R5LmZpbmQoJy5ib3gtUmZEJykubGVuZ3RoIHx8XG5cdFx0XHQkYm9keS5maW5kKCcuYm94LVJlZGlyZWN0X2NhdGVnb3J5X3NoZWxsJykubGVuZ3RoXG5cdFx0KTtcblx0fTtcblx0LyoqXG5cdCAqIFN0b3JlcyBhIG5vcm1hbGl6ZWQgKHVuZGVyc2NvcmVzIGNvbnZlcnRlZCB0byBzcGFjZXMpIHZlcnNpb24gb2YgdGhlXG5cdCAqIGB3Z1BhZ2VOYW1lYCB2YXJpYWJsZS5cblx0ICpcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnBhZ2VOYW1lTm9ybSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBzdHJpbmcgZm9yIHVzZSBpbiByZWdleCBtYXRjaGluZyBhIHBhZ2UgbmFtZS4gIEFjY291bnRzIGZvclxuXHQgKiBsZWFkaW5nIGNoYXJhY3RlcidzIGNhcGl0YWxpemF0aW9uLCB1bmRlcnNjb3JlcyBhcyBzcGFjZXMsIGFuZCBzcGVjaWFsXG5cdCAqIGNoYXJhY3RlcnMgYmVpbmcgZXNjYXBlZC4gIFNlZSBhbHNvIHtAbGluayBNb3JlYml0cy5uYW1lc3BhY2VSZWdleH0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTmFtZSAtIFBhZ2UgbmFtZSB3aXRob3V0IG5hbWVzcGFjZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gLSBGb3IgYSBwYWdlIG5hbWUgYEZvbyBiYXJgLCByZXR1cm5zIHRoZSBzdHJpbmcgYFtGZl1vb1tfIF1iYXJgLlxuXHQgKi9cblx0TW9yZWJpdHMucGFnZU5hbWVSZWdleCA9IChwYWdlTmFtZSkgPT4ge1xuXHRcdGlmIChwYWdlTmFtZSA9PT0gJycpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0Y29uc3QgW2ZpcnN0Q2hhcl0gPSBwYWdlTmFtZTtcblx0XHRjb25zdCByZW1haW5kZXIgPSBNb3JlYml0cy5zdHJpbmcuZXNjYXBlUmVnRXhwKHBhZ2VOYW1lLnNsaWNlKDEpKTtcblx0XHRpZiAobXcuVGl0bGUucGhwQ2hhclRvVXBwZXIoZmlyc3RDaGFyKSAhPT0gZmlyc3RDaGFyLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdHJldHVybiBgWyR7bXcuVGl0bGUucGhwQ2hhclRvVXBwZXIoZmlyc3RDaGFyKX0ke2ZpcnN0Q2hhci50b0xvd2VyQ2FzZSgpfV0ke3JlbWFpbmRlcn1gO1xuXHRcdH1cblx0XHRyZXR1cm4gTW9yZWJpdHMuc3RyaW5nLmVzY2FwZVJlZ0V4cChmaXJzdENoYXIpICsgcmVtYWluZGVyO1xuXHR9O1xuXHQvKipcblx0ICogQ29udmVydHMgc3RyaW5nIG9yIGFycmF5IG9mIERPTSBub2RlcyBpbnRvIGFuIEhUTUwgZnJhZ21lbnQuXG5cdCAqIFdpa2lsaW5rIHN5bnRheCAoYFtbLi4uXV1gKSBpcyB0cmFuc2Zvcm1lZCBpbnRvIEhUTUwgYW5jaG9yLlxuXHQgKiBVc2VkIGluIE1vcmViaXRzLnF1aWNrRm9ybSBhbmQgTW9yZWJpdHMuc3RhdHVzXG5cdCAqXG5cdCAqIEBpbnRlcm5hbFxuXHQgKiBAcGFyYW0ge3N0cmluZ3xOb2RlfChzdHJpbmd8Tm9kZSlbXX0gaW5wdXRcblx0ICogQHJldHVybnMge0RvY3VtZW50RnJhZ21lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5jcmVhdGVIdG1sID0gKGlucHV0KSA9PiB7XG5cdFx0Y29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0aWYgKCFpbnB1dCkge1xuXHRcdFx0cmV0dXJuIGZyYWdtZW50O1xuXHRcdH1cblx0XHRpbnB1dCA9IGdlbmVyYXRlQXJyYXkoaW5wdXQpO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBpbnB1dCkge1xuXHRcdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG5cdFx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChjb25zdCBub2RlIG9mICQucGFyc2VIVE1MKE1vcmViaXRzLmNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzKGVsZW1lbnQpKSkge1xuXHRcdFx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmcmFnbWVudDtcblx0fTtcblx0LyoqXG5cdCAqIENvbnZlcnRzIHdpa2lsaW5rcyB0byBIVE1MIGFuY2hvciB0YWdzLlxuXHQgKlxuXHQgKiBAcGFyYW0gdGV4dFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdE1vcmViaXRzLmNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzID0gKHRleHQpID0+IHtcblx0XHRjb25zdCB1YiA9IG5ldyBNb3JlYml0cy51bmJpbmRlcih0ZXh0KTtcblx0XHQvLyBEb24ndCBjb252ZXJ0IHdpa2lsaW5rcyB3aXRoaW4gY29kZSB0YWdzIGFzIHRoZXkncmUgdXNlZCBmb3IgZGlzcGxheWluZyB3aWtpLWNvZGVcblx0XHR1Yi51bmJpbmQoJzxjb2RlPicsICc8L2NvZGU+Jyk7XG5cdFx0dWIuY29udGVudCA9IHViLmNvbnRlbnQucmVwbGFjZSgvXFxbXFxbOj8oPzooW158XFxdXSs/KVxcfCk/KFteXFxdfF0rPylcXF1cXF0vZywgKF8sIHRhcmdldCwgdGV4dF8pID0+IHtcblx0XHRcdGlmICghdGFyZ2V0KSB7XG5cdFx0XHRcdHRhcmdldCA9IHRleHRfO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke213LnV0aWwuZ2V0VXJsKHRhcmdldCl9XCIgdGl0bGU9XCIke3RhcmdldC5yZXBsYWNlKFxuXHRcdFx0XHQvXCIvZyxcblx0XHRcdFx0JyYjMzQ7J1xuXHRcdFx0KX1cIj4ke3RleHRffTwvYT5gO1xuXHRcdH0pO1xuXHRcdHJldHVybiB1Yi5yZWJpbmQoKTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIHN0cmluZyBmb3IgdXNlIGluIHJlZ2V4IG1hdGNoaW5nIGFsbCBuYW1lc3BhY2UgYWxpYXNlcywgcmVnYXJkbGVzc1xuXHQgKiBvZiB0aGUgY2FwaXRhbGl6YXRpb24gYW5kIHVuZGVyc2NvcmVzL3NwYWNlcy4gIERvZXNuJ3QgaW5jbHVkZSB0aGUgb3B0aW9uYWxcblx0ICogbGVhZGluZyBgOmAsIGJ1dCBpZiB0aGVyZSdzIG1vcmUgdGhhbiBvbmUgaXRlbSwgd3JhcHMgdGhlIGxpc3QgaW4gYVxuXHQgKiBub24tY2FwdHVyaW5nIGdyb3VwLiAgVGhpcyBtZWFucyB5b3UgY2FuIGRvIGBNb3JlYml0cy5uYW1lc3BhY2VSZWdleChbNF0pICtcblx0ICogJzonICsgTW9yZWJpdHMucGFnZU5hbWVSZWdleCgnVHdpbmtsZScpYCB0byBtYXRjaCBhIGZ1bGwgcGFnZS4gIFVzZXNcblx0ICoge0BsaW5rIE1vcmViaXRzLnBhZ2VOYW1lUmVnZXh9LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcltdfSBuYW1lc3BhY2VzIC0gQXJyYXkgb2YgbmFtZXNwYWNlIG51bWJlcnMuICBVbnVzZWQvaW52YWxpZFxuXHQgKiBuYW1lc3BhY2UgbnVtYmVycyBhcmUgc2lsZW50bHkgZGlzY2FyZGVkLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiAvLyByZXR1cm5zICcoPzpbRmZdW0lpXVtMbF1bRWVdfFtJaV1bTW1dW0FhXVtHZ11bRWVdKSdcblx0ICogTW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoWzZdKVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSAtIFJlZ2V4LXN1aXRhYmxlIHN0cmluZyBvZiBhbGwgbmFtZXNwYWNlIGFsaWFzZXMuXG5cdCAqL1xuXHRNb3JlYml0cy5uYW1lc3BhY2VSZWdleCA9IChuYW1lc3BhY2VzKSA9PiB7XG5cdFx0bmFtZXNwYWNlcyA9IGdlbmVyYXRlQXJyYXkobmFtZXNwYWNlcyk7XG5cdFx0Y29uc3QgYWxpYXNlcyA9IFtdO1xuXHRcdGxldCByZWdleDtcblx0XHRmb3IgKGNvbnN0IFtuYW1lLCBudW1iZXJdIG9mIE9iamVjdC5lbnRyaWVzKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlSWRzJykpKSB7XG5cdFx0XHRpZiAobmFtZXNwYWNlcy5pbmNsdWRlcyhudW1iZXIpKSB7XG5cdFx0XHRcdC8vIE5hbWVzcGFjZXMgYXJlIGNvbXBsZXRlbHkgYWdub3N0aWMgYXMgdG8gY2FzZSxcblx0XHRcdFx0Ly8gYW5kIGEgcmVnZXggc3RyaW5nIGlzIG1vcmUgdXNlZnVsL2NvbXBhdGlibGUgdGhhbiBhIFJlZ0V4cCBvYmplY3QsXG5cdFx0XHRcdC8vIHNvIHdlIGFjY2VwdCBhbnkgY2FzaW5nIGZvciBhbnkgbGV0dGVyLlxuXHRcdFx0XHRhbGlhc2VzW2FsaWFzZXMubGVuZ3RoXSA9IFsuLi5uYW1lXVxuXHRcdFx0XHRcdC5tYXAoKGNoYXIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KGNoYXIpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmpvaW4oJycpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzd2l0Y2ggKGFsaWFzZXMubGVuZ3RoKSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHJlZ2V4ID0gJyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRbcmVnZXhdID0gYWxpYXNlcztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZWdleCA9IGAoPzoke2FsaWFzZXMuam9pbignfCcpfSlgO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHJlZ2V4O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLnF1aWNrRm9ybSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBDcmVhdGlvbiBvZiBzaW1wbGUgYW5kIHN0YW5kYXJkIGZvcm1zIHdpdGhvdXQgbXVjaCBzcGVjaWZpYyBjb2RpbmcuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtldmVudH0gZXZlbnQgLSBGdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gZm9ybSBpcyBzdWJtaXR0ZWQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZXZlbnRUeXBlPXN1Ym1pdF0gLSBUeXBlIG9mIHRoZSBldmVudC5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybSA9IGZ1bmN0aW9uIChldmVudCwgZXZlbnRUeXBlKSB7XG5cdFx0dGhpcy5yb290ID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KHtcblx0XHRcdHR5cGU6ICdmb3JtJyxcblx0XHRcdGV2ZW50LFxuXHRcdFx0ZXZlbnRUeXBlLFxuXHRcdH0pO1xuXHR9O1xuXHQvKipcblx0ICogUmVuZGVycyB0aGUgSFRNTCBvdXRwdXQgb2YgdGhlIHF1aWNrRm9ybS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCByZXQgPSB0aGlzLnJvb3QucmVuZGVyKCk7XG5cdFx0cmV0Lm5hbWVzID0ge307XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0LyoqXG5cdCAqIEFwcGVuZCBlbGVtZW50IHRvIHRoZSBmb3JtLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KG9iamVjdHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGRhdGEgLSBBIHF1aWNrZm9ybSBlbGVtZW50LCBvciB0aGUgb2JqZWN0IHdpdGggd2hpY2hcblx0ICogYSBxdWlja2Zvcm0gZWxlbWVudCBpcyBjb25zdHJ1Y3RlZC5cblx0ICogQHJldHVybnMge01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50fSAtIFNhbWUgYXMgd2hhdCBpcyBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHJldHVybiB0aGlzLnJvb3QuYXBwZW5kKGRhdGEpO1xuXHR9O1xuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IGVsZW1lbnQgZm9yIHRoZSB0aGUgZm9ybS5cblx0ICpcblx0ICogSW5kZXggdG8gTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQgdHlwZXM6XG5cdCAqIC0gR2xvYmFsIGF0dHJpYnV0ZXM6IGlkLCBjbGFzc05hbWUsIHN0eWxlLCB0b29sdGlwLCBleHRyYSwgJGRhdGEsIGFkbWlub25seVxuXHQgKiAtIGBzZWxlY3RgOiBBIGNvbWJvIGJveCAoYWthIGRyb3AtZG93bikuXG5cdCAqICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBtdWx0aXBsZSwgc2l6ZSwgbGlzdCwgZXZlbnQsIGRpc2FibGVkXG5cdCAqICAtIGBvcHRpb25gOiBBbiBlbGVtZW50IGZvciBhIGNvbWJvIGJveC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IHZhbHVlLCBsYWJlbCwgc2VsZWN0ZWQsIGRpc2FibGVkXG5cdCAqICAtIGBvcHRncm91cGA6IEEgZ3JvdXAgb2YgXCJvcHRpb25cInMuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBsYWJlbCwgbGlzdFxuXHQgKiAgLSBgZmllbGRgOiBBIGZpZWxkc2V0IChha2EgZ3JvdXAgYm94KS5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBkaXNhYmxlZFxuXHQgKiAgLSBgY2hlY2tib3hgOiBBIGNoZWNrYm94LiBNdXN0IHVzZSBcImxpc3RcIiBwYXJhbWV0ZXIuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsaXN0LCBldmVudFxuXHQgKiAgICAgIC0gQXR0cmlidXRlcyAod2l0aGluIGxpc3QpOiBuYW1lLCBsYWJlbCwgdmFsdWUsIGNoZWNrZWQsIGRpc2FibGVkLCBldmVudCwgc3ViZ3JvdXBcblx0ICogIC0gYHJhZGlvYDogQSByYWRpbyBidXR0b24uIE11c3QgdXNlIFwibGlzdFwiIHBhcmFtZXRlci5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxpc3QsIGV2ZW50XG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzICh3aXRoaW4gbGlzdCk6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgY2hlY2tlZCwgZGlzYWJsZWQsIGV2ZW50LCBzdWJncm91cFxuXHQgKiAgLSBgaW5wdXRgOiBBIHRleHQgaW5wdXQgYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIHZhbHVlLCBzaXplLCBwbGFjZWhvbGRlciwgbWF4bGVuZ3RoLCBkaXNhYmxlZCwgcmVxdWlyZWQsIHJlYWRvbmx5LCBldmVudFxuXHQgKiAgLSBgbnVtYmVyYDogQSBudW1iZXIgaW5wdXQgYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogRXZlcnl0aGluZyB0aGUgdGV4dCBgaW5wdXRgIGhhcywgYXMgd2VsbCBhczogbWluLCBtYXgsIHN0ZXAsIGxpc3Rcblx0ICogIC0gYGR5bmlucHV0YDogQSBzZXQgb2YgdGV4dCBib3hlcyB3aXRoIFwiUmVtb3ZlXCIgYnV0dG9ucyBhbmQgYW4gXCJBZGRcIiBidXR0b24uXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgbWluLCBtYXgsIHN1YmxhYmVsLCB2YWx1ZSwgc2l6ZSwgbWF4bGVuZ3RoLCBldmVudFxuXHQgKiAgLSBgaGlkZGVuYDogQW4gaW52aXNpYmxlIGZvcm0gZmllbGQuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCB2YWx1ZVxuXHQgKiAgLSBgaGVhZGVyYDogQSBsZXZlbCA1IGhlYWRlci5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IGxhYmVsXG5cdCAqICAtIGBkaXZgOiBBIGdlbmVyaWMgcGxhY2Vob2xkZXIgZWxlbWVudCBvciBsYWJlbC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsXG5cdCAqICAtIGBzdWJtaXRgOiBBIHN1Ym1pdCBidXR0b24uIE1vcmViaXRzLnNpbXBsZVdpbmRvdyBtb3ZlcyB0aGVzZSB0byB0aGUgZm9vdGVyIG9mIHRoZSBkaWFsb2cuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgZGlzYWJsZWRcblx0ICogIC0gYGJ1dHRvbmA6IEEgZ2VuZXJpYyBidXR0b24uXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgZGlzYWJsZWQsIGV2ZW50XG5cdCAqICAtIGB0ZXh0YXJlYWA6IEEgYmlnLCBtdWx0aS1saW5lIHRleHQgYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIHZhbHVlLCBjb2xzLCByb3dzLCBkaXNhYmxlZCwgcmVxdWlyZWQsIHJlYWRvbmx5XG5cdCAqICAtIGBmcmFnbWVudGA6IEEgRG9jdW1lbnRGcmFnbWVudCBvYmplY3QuXG5cdCAqICAgICAgLSBObyBhdHRyaWJ1dGVzLCBhbmQgbm8gZ2xvYmFsIGF0dHJpYnV0ZXMgZXhjZXB0IGFkbWlub25seS5cblx0ICogVGhlcmUgaXMgc29tZSBkaWZmZXJlbmNlIG9uIGhvdyB0eXBlcyBoYW5kbGUgdGhlIGBsYWJlbGAgYXR0cmlidXRlOlxuXHQgKiAtIGBkaXZgLCBgc2VsZWN0YCwgYGZpZWxkYCwgYGNoZWNrYm94YC9gcmFkaW9gLCBgaW5wdXRgLCBgdGV4dGFyZWFgLCBgaGVhZGVyYCwgYW5kIGBkeW5pbnB1dGAgY2FuIGFjY2VwdCBhbiBhcnJheSBvZiBpdGVtcyxcblx0ICogYW5kIHRoZSBsYWJlbCBpdGVtKHMpIGNhbiBiZSBgRWxlbWVudGBzLlxuXHQgKiAtIGBvcHRpb25gLCBgb3B0Z3JvdXBgLCBgX2R5bmlucHV0X2VsZW1lbnRgLCBgc3VibWl0YCwgYW5kIGBidXR0b25gIGFjY2VwdCBvbmx5IGEgc2luZ2xlIHN0cmluZy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBPYmplY3QgcmVwcmVzZW50aW5nIHRoZSBxdWlja2Zvcm0gZWxlbWVudC4gU2hvdWxkXG5cdCAqIHNwZWNpZnkgb25lIG9mIHRoZSBhdmFpbGFibGUgdHlwZXMgZnJvbSB0aGUgaW5kZXggYWJvdmUsIGFzIHdlbGwgYXMgYW55XG5cdCAqIHJlbGV2YW50IGFuZCBhdmFpbGFibGUgYXR0cmlidXRlcy5cblx0ICogQGV4YW1wbGUgbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KHtcblx0ICogICAgIG5hbWU6ICd0YXJnZXQnLFxuXHQgKiAgICAgdHlwZTogJ2lucHV0Jyxcblx0ICogICAgIGxhYmVsOiAnWW91ciB0YXJnZXQ6Jyxcblx0ICogICAgIHRvb2x0aXA6ICdFbnRlciB5b3VyIHRhcmdldC4gUmVxdWlyZWQuJyxcblx0ICogICAgIHJlcXVpcmVkOiB0cnVlXG5cdCAqIH0pO1xuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5jaGlsZHMgPSBbXTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudFxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuaWQgPSAwO1xuXHQvKipcblx0ICogQXBwZW5kcyBhbiBlbGVtZW50IHRvIGN1cnJlbnQgZWxlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqIEBwYXJhbSB7TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnR9IGRhdGEgLSBBIHF1aWNrRm9ybSBlbGVtZW50IG9yIHRoZSBvYmplY3QgcmVxdWlyZWQgdG9cblx0ICogY3JlYXRlIHRoZSBxdWlja0Zvcm0gZWxlbWVudC5cblx0ICogQHJldHVybnMge01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50fSBUaGUgc2FtZSBlbGVtZW50IHBhc3NlZCBpbi5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdGxldCBjaGlsZDtcblx0XHRpZiAoZGF0YSBpbnN0YW5jZW9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KSB7XG5cdFx0XHRjaGlsZCA9IGRhdGE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNoaWxkID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KGRhdGEpO1xuXHRcdH1cblx0XHR0aGlzLmNoaWxkc1t0aGlzLmNoaWxkcy5sZW5ndGhdID0gY2hpbGQ7XG5cdFx0cmV0dXJuIGNoaWxkO1xuXHR9O1xuXHQvKipcblx0ICogUmVuZGVycyB0aGUgSFRNTCBvdXRwdXQgZm9yIHRoZSBxdWlja0Zvcm0gZWxlbWVudC4gIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuXHQgKiB3aXRob3V0IHBhcmFtZXRlcnM6IGBmb3JtLnJlbmRlcigpYC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGludGVybmFsU3ViZ3JvdXBJZFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChpbnRlcm5hbFN1Ymdyb3VwSWQpIHtcblx0XHRjb25zdCBjdXJyZW50Tm9kZSA9IHRoaXMuY29tcHV0ZSh0aGlzLmRhdGEsIGludGVybmFsU3ViZ3JvdXBJZCk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0Ly8gZG8gbm90IHBhc3MgaW50ZXJuYWxfc3ViZ3JvdXBfaWQgdG8gcmVjdXJzaXZlIGNhbGxzXG5cdFx0XHRjdXJyZW50Tm9kZVsxXS5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkc1tpXS5yZW5kZXIoKSk7XG5cdFx0fVxuXHRcdHJldHVybiBjdXJyZW50Tm9kZVswXTtcblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSB7Kn0gZGF0YVxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5JZFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKGRhdGEsIGluSWQpIHtcblx0XHRsZXQgbm9kZTtcblx0XHRsZXQgY2hpbGRDb250YWluZXIgPSBudWxsO1xuXHRcdGxldCBsYWJlbDtcblx0XHRjb25zdCBpZCA9IGAke2luSWQgPyBgJHtpbklkfV9gIDogJyd9bm9kZV8ke01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmlkKyt9YDtcblx0XHRpZiAoZGF0YS5hZG1pbm9ubHkgJiYgIU1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHQvLyBoZWxsIGhhY2sgYWxwaGFcblx0XHRcdGRhdGEudHlwZSA9ICdoaWRkZW4nO1xuXHRcdH1cblx0XHRsZXQgaTtcblx0XHRsZXQgY3VycmVudDtcblx0XHRsZXQgc3Vibm9kZTtcblx0XHRzd2l0Y2ggKGRhdGEudHlwZSkge1xuXHRcdFx0Y2FzZSAnZm9ybSc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cdFx0XHRcdG5vZGUuY2xhc3NOYW1lID0gJ3F1aWNrZm9ybSc7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zY3JpcHQtdXJsXG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnamF2YXNjcmlwdDp2b2lkKDApOycpO1xuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihkYXRhLmV2ZW50VHlwZSB8fCAnc3VibWl0JywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZnJhZ21lbnQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdFx0XHQvLyBmcmFnbWVudHMgY2FuJ3QgaGF2ZSBhbnkgYXR0cmlidXRlcywgc28ganVzdCByZXR1cm4gaXQgc3RyYWlnaHQgYXdheVxuXHRcdFx0XHRyZXR1cm4gW25vZGUsIG5vZGVdO1xuXHRcdFx0Y2FzZSAnc2VsZWN0Jzoge1xuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0Ly8gTm8gbWFyZ2luXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBzZWxlY3QgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpKTtcblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLm11bHRpcGxlKSB7XG5cdFx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCAnbXVsdGlwbGUnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5zaXplKSB7XG5cdFx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnc2l6ZScsIGRhdGEuc2l6ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRzZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGRhdGEubGlzdFtpXTtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50Lmxpc3QpIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudC50eXBlID0gJ29wdGdyb3VwJztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRpb24nO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IHRoaXMuY29tcHV0ZShjdXJyZW50KTtcblx0XHRcdFx0XHRcdHNlbGVjdC5hcHBlbmRDaGlsZChzdWJub2RlWzBdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBzZWxlY3Q7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAnb3B0aW9uJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdFx0XHRub2RlLnZhbHVlcyA9IGRhdGEudmFsdWU7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5zZWxlY3RlZCkge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0bm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgZGF0YS5sYWJlbCk7XG5cdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ29wdGdyb3VwJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdsYWJlbCcsIGRhdGEubGFiZWwpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGRhdGEubGlzdFtpXTtcblx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRpb24nOyAvLyBtdXN0IGJlIG9wdGlvbnMgaGVyZVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IHRoaXMuY29tcHV0ZShjdXJyZW50KTtcblx0XHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoc3Vibm9kZVswXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZmllbGQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcblx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpKTtcblx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGlmIChkYXRhLm5hbWUpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VySWQgPSBgJHtpZH1fJHtpfWA7XG5cdFx0XHRcdFx0XHRjdXJyZW50ID0gZGF0YS5saXN0W2ldO1xuXHRcdFx0XHRcdFx0bGV0IGN1ckRpdjtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnR5cGUgPT09ICdoZWFkZXInKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGlubGluZSBoYWNrXG5cdFx0XHRcdFx0XHRcdGN1ckRpdiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKSk7XG5cdFx0XHRcdFx0XHRcdGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdXJyZW50LmxhYmVsKSk7XG5cdFx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnRvb2x0aXApIHtcblx0XHRcdFx0XHRcdFx0XHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAoY3VyRGl2LCBjdXJyZW50KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGN1ckRpdiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuXHRcdFx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5oaWRkZW4pIHtcblx0XHRcdFx0XHRcdFx0Y3VyRGl2LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUudmFsdWVzID0gY3VycmVudC52YWx1ZTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGN1cnJlbnQudmFsdWUpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBkYXRhLnR5cGUpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgY3VySWQpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBjdXJyZW50Lm5hbWUgfHwgZGF0YS5uYW1lKTtcblx0XHRcdFx0XHRcdC8vIElmIG5hbWUgaXMgcHJvdmlkZWQgb24gdGhlIGluZGl2aWR1YWwgY2hlY2tib3gsIGFkZCBhIGRhdGEtc2luZ2xlXG5cdFx0XHRcdFx0XHQvLyBhdHRyaWJ1dGUgd2hpY2ggaW5kaWNhdGVzIGl0IGlzbid0IHBhcnQgb2YgYSBsaXN0IG9mIGNoZWNrYm94ZXMgd2l0aFxuXHRcdFx0XHRcdFx0Ly8gc2FtZSBuYW1lLiBVc2VkIGluIGdldElucHV0RGF0YSgpXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5uYW1lKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXNpbmdsZScsICdkYXRhLXNpbmdsZScpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsYWJlbCA9IGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoY3VycmVudC5sYWJlbCkpO1xuXHRcdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjdXJJZCk7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC50b29sdGlwKSB7XG5cdFx0XHRcdFx0XHRcdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmdlbmVyYXRlVG9vbHRpcChsYWJlbCwgY3VycmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBzdHlsZXMgZ28gb24gdGhlIGxhYmVsLCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gc3R5bGUgYSBjaGVja2JveC9yYWRpb1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuc3R5bGUpIHtcblx0XHRcdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGN1cnJlbnQuc3R5bGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGV0IGV2ZW50O1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuc3ViZ3JvdXApIHtcblx0XHRcdFx0XHRcdFx0bGV0IHRtcGdyb3VwID0gY3VycmVudC5zdWJncm91cDtcblx0XHRcdFx0XHRcdFx0dG1wZ3JvdXAgPSBnZW5lcmF0ZUFycmF5KHRtcGdyb3VwKTtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViZ3JvdXBSYXcgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdGlkOiBgJHtpZH1fJHtpfV9zdWJncm91cGAsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsIG9mIHRtcGdyb3VwKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgbmV3RWwgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5lbCxcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdGlmICghbmV3RWwudHlwZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3RWwudHlwZSA9IGRhdGEudHlwZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0bmV3RWwubmFtZSA9IGAke2N1cnJlbnQubmFtZSB8fCBkYXRhLm5hbWV9LiR7bmV3RWwubmFtZX1gO1xuXHRcdFx0XHRcdFx0XHRcdHN1Ymdyb3VwUmF3LmFwcGVuZChuZXdFbCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViZ3JvdXAgPSBzdWJncm91cFJhdy5yZW5kZXIoY3VySWQpO1xuXHRcdFx0XHRcdFx0XHRzdWJncm91cC5jbGFzc05hbWUgPSAncXVpY2tmb3JtU3ViZ3JvdXAnO1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnN1Ymdyb3VwID0gc3ViZ3JvdXA7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2hvd24gPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0ZXZlbnQgPSAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGUudGFyZ2V0LnN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHtuYW1lfSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5zdWJncm91cFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUudGFyZ2V0LnN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY3VycmVudC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3Vibm9kZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdyYWRpbycpIHtcblx0XHRcdFx0XHRcdFx0ZXZlbnQgPSAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB7bmFtZX0gPSBlLnRhcmdldDtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0uc3ViZ3JvdXBcblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZSBlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBhZGQgdXNlcnMnIGV2ZW50IGxhc3QsIHNvIGl0IGNhbiBpbnRlcmFjdCB3aXRoIHRoZSBzdWJncm91cFxuXHRcdFx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGN1cnJlbnQuZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjdXJyZW50LmV2ZW50LCB0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuc2hpZnRDbGlja1N1cHBvcnQgJiYgZGF0YS50eXBlID09PSAnY2hlY2tib3gnKSB7XG5cdFx0XHRcdFx0TW9yZWJpdHMuY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydChNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudHMobm9kZSwgZGF0YS5uYW1lKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHQvLyBpbnB1dCBpcyBhY3R1YWxseSBhIHRleHQtdHlwZSwgc28gbnVtYmVyIGhlcmUgaW5oZXJpdHMgdGhlIHNhbWUgc3R1ZmZcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRjYXNlICdpbnB1dCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRpdl8ke2lkfWApO1xuXHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEuaGlkZGVuKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGRhdGEuaWQgfHwgaWQpO1xuXHRcdFx0XHRcdC8vIE5vIG1hcmdpblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Vibm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdC8vIEFkZCB2YWx1ZSBhbmQgcGxhY2Vob2xkZXIgYXR0cnNcblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGRhdGEucGxhY2Vob2xkZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0aWYgKGRhdGEudHlwZSA9PT0gJ2lucHV0Jykge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGF0dCBvZiBbJ21pbicsICdtYXgnLCAnc3RlcCcsICdsaXN0J10pIHtcblx0XHRcdFx0XHRcdGlmIChkYXRhW2F0dF0pIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoYXR0LCBkYXRhW2F0dF0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGNvbnN0IGF0dCBvZiBbJ3ZhbHVlJywgJ3NpemUnLCAncGxhY2Vob2xkZXInLCAnbWF4bGVuZ3RoJ10pIHtcblx0XHRcdFx0XHRpZiAoZGF0YVthdHRdKSB7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZShhdHQsIGRhdGFbYXR0XSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoY29uc3QgYXR0IG9mIFsnZGlzYWJsZWQnLCAncmVxdWlyZWQnLCAncmVhZG9ubHknXSkge1xuXHRcdFx0XHRcdGlmIChkYXRhW2F0dF0pIHtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKGF0dCwgYXR0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc3Vibm9kZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkeW5pbnB1dCc6IHtcblx0XHRcdFx0Y29uc3QgbWluID0gZGF0YS5taW4gfHwgMTtcblx0XHRcdFx0Y29uc3QgbWF4ID0gZGF0YS5tYXggfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpKTtcblx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGNvbnN0IGxpc3ROb2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5cdFx0XHRcdGNvbnN0IG1vcmUgPSB0aGlzLmNvbXB1dGUoe1xuXHRcdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRcdGxhYmVsOiAn5pu05aSaJyxcblx0XHRcdFx0XHRkaXNhYmxlZDogbWluID49IG1heCxcblx0XHRcdFx0XHRldmVudDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IG5ld05vZGUgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoZS50YXJnZXQuc3VibGlzdCk7XG5cdFx0XHRcdFx0XHRlLnRhcmdldC5hcmVhLmFwcGVuZENoaWxkKG5ld05vZGUucmVuZGVyKCkpO1xuXHRcdFx0XHRcdFx0aWYgKCsrZS50YXJnZXQuY291bnRlciA+PSBlLnRhcmdldC5tYXgpIHtcblx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChtb3JlWzBdKTtcblx0XHRcdFx0Y29uc3QgWywgbW9yZUJ1dHRvbl0gPSBtb3JlO1xuXHRcdFx0XHRjb25zdCBzdWJsaXN0ID0ge1xuXHRcdFx0XHRcdHR5cGU6ICdfZHluaW5wdXRfZWxlbWVudCcsXG5cdFx0XHRcdFx0bGFiZWw6IGRhdGEuc3VibGFiZWwgfHwgZGF0YS5sYWJlbCxcblx0XHRcdFx0XHRuYW1lOiBkYXRhLm5hbWUsXG5cdFx0XHRcdFx0dmFsdWU6IGRhdGEudmFsdWUsXG5cdFx0XHRcdFx0c2l6ZTogZGF0YS5zaXplLFxuXHRcdFx0XHRcdHJlbW92ZTogZmFsc2UsXG5cdFx0XHRcdFx0bWF4bGVuZ3RoOiBkYXRhLm1heGxlbmd0aCxcblx0XHRcdFx0XHRldmVudDogZGF0YS5ldmVudCxcblx0XHRcdFx0fTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1pbjsgKytpKSB7XG5cdFx0XHRcdFx0Y29uc3QgZWxlbSA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudChzdWJsaXN0KTtcblx0XHRcdFx0XHRsaXN0Tm9kZS5hcHBlbmRDaGlsZChlbGVtLnJlbmRlcigpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJsaXN0LnJlbW92ZSA9IHRydWU7XG5cdFx0XHRcdHN1Ymxpc3QubW9yZWJ1dHRvbiA9IG1vcmVCdXR0b247XG5cdFx0XHRcdHN1Ymxpc3QubGlzdG5vZGUgPSBsaXN0Tm9kZTtcblx0XHRcdFx0bW9yZUJ1dHRvbi5zdWJsaXN0ID0gc3VibGlzdDtcblx0XHRcdFx0bW9yZUJ1dHRvbi5hcmVhID0gbGlzdE5vZGU7XG5cdFx0XHRcdG1vcmVCdXR0b24ubWF4ID0gbWF4IC0gbWluO1xuXHRcdFx0XHRtb3JlQnV0dG9uLmNvdW50ZXIgPSAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ19keW5pbnB1dF9lbGVtZW50Jzpcblx0XHRcdFx0Ly8gUHJpdmF0ZSwgc2ltaWxhciB0byBub3JtYWwgaW5wdXRcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG5cdFx0XHRcdFx0Ly8gTm8gbWFyZ2luXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdWJub2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0XHRcdFx0aWYgKGRhdGEuc2l6ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdzaXplJywgZGF0YS5zaXplKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5tYXhsZW5ndGgpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgZGF0YS5tYXhsZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZW1vdmUpIHtcblx0XHRcdFx0XHRjb25zdCByZW1vdmUgPSB0aGlzLmNvbXB1dGUoe1xuXHRcdFx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0XHRsYWJlbDogJ+enu+mZpCcsXG5cdFx0XHRcdFx0XHRldmVudDogKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbGlzdCA9IGUudGFyZ2V0Lmxpc3Rub2RlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBub2RlXyA9IGUudGFyZ2V0LmlucHV0bm9kZTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbW9yZSA9IGUudGFyZ2V0Lm1vcmVidXR0b247XG5cdFx0XHRcdFx0XHRcdGxpc3QucmVtb3ZlQ2hpbGQobm9kZV8pO1xuXHRcdFx0XHRcdFx0XHQtLW1vcmUuY291bnRlcjtcblx0XHRcdFx0XHRcdFx0bW9yZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQocmVtb3ZlWzBdKTtcblx0XHRcdFx0XHRjb25zdCBbLCByZW1vdmVCdXR0b25dID0gcmVtb3ZlO1xuXHRcdFx0XHRcdHJlbW92ZUJ1dHRvbi5pbnB1dG5vZGUgPSBub2RlO1xuXHRcdFx0XHRcdHJlbW92ZUJ1dHRvbi5saXN0bm9kZSA9IGRhdGEubGlzdG5vZGU7XG5cdFx0XHRcdFx0cmVtb3ZlQnV0dG9uLm1vcmVidXR0b24gPSBkYXRhLm1vcmVidXR0b247XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoaWRkZW4nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaGlkZGVuJyk7XG5cdFx0XHRcdG5vZGUudmFsdWVzID0gZGF0YS52YWx1ZTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoZWFkZXInOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcblx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkaXYnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGlmIChkYXRhLm5hbWUpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdFx0cmVzdWx0LmNsYXNzTmFtZSA9ICdxdWlja2Zvcm1EZXNjcmlwdGlvbic7XG5cdFx0XHRcdFx0cmVzdWx0LmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQocmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3N1Ym1pdCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUgfHwgJ3N1Ym1pdCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2J1dHRvbic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKSk7XG5cdFx0XHRcdFx0Y29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0XHRcdFx0XHRsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgZGF0YS5pZCB8fCBpZCk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKTtcblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5jb2xzKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCBkYXRhLmNvbHMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJvd3MpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncm93cycsIGRhdGEucm93cyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRzdWJub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZXF1aXJlZCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJlYWRvbmx5KSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnZhbHVlID0gZGF0YS52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBBZGQgcGxhY2Vob2xkZXIgYXR0clxuXHRcdFx0XHRpZiAoZGF0YS5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdHN1Ym5vZGUucGxhY2Vob2xkZXIgPSBkYXRhLnBsYWNlaG9sZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc3Vibm9kZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1vcmViaXRzLnF1aWNrRm9ybTogdW5rbm93biBlbGVtZW50IHR5cGUgJHtkYXRhLnR5cGUudG9TdHJpbmcoKX1gKTtcblx0XHR9XG5cdFx0aWYgKCFjaGlsZENvbnRhaW5lcikge1xuXHRcdFx0Y2hpbGRDb250YWluZXIgPSBub2RlO1xuXHRcdH1cblx0XHRpZiAoZGF0YS50b29sdGlwKSB7XG5cdFx0XHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAobGFiZWwgfHwgbm9kZSwgZGF0YSk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLmV4dHJhKSB7XG5cdFx0XHRjaGlsZENvbnRhaW5lci5leHRyYSA9IGRhdGEuZXh0cmE7XG5cdFx0fVxuXHRcdGlmIChkYXRhLiRkYXRhKSB7XG5cdFx0XHQkKGNoaWxkQ29udGFpbmVyKS5kYXRhKGRhdGEuJGRhdGEpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5zdHlsZSkge1xuXHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGRhdGEuc3R5bGUpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5jbGFzc05hbWUpIHtcblx0XHRcdGNoaWxkQ29udGFpbmVyLmNsYXNzTmFtZSA9IGNoaWxkQ29udGFpbmVyLmNsYXNzTmFtZVxuXHRcdFx0XHQ/IGAke2NoaWxkQ29udGFpbmVyLmNsYXNzTmFtZX0gJHtkYXRhLmNsYXNzTmFtZX1gXG5cdFx0XHRcdDogZGF0YS5jbGFzc05hbWU7XG5cdFx0fVxuXHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBkYXRhLmlkIHx8IGlkKTtcblx0XHRyZXR1cm4gW25vZGUsIGNoaWxkQ29udGFpbmVyXTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIGpRdWVyeSBVSS1iYXNlZCB0b29sdGlwLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHJlcXVpcmVzIGpxdWVyeS51aVxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIEhUTUwgZWxlbWVudCBiZXNpZGUgd2hpY2ggYSB0b29sdGlwIGlzIHRvIGJlIGdlbmVyYXRlZC5cblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUb29sdGlwLXJlbGF0ZWQgY29uZmlndXJhdGlvbiBkYXRhLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuZ2VuZXJhdGVUb29sdGlwID0gKG5vZGUsIGRhdGEpID0+IHtcblx0XHRjb25zdCB0b29sdGlwQnV0dG9uID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuXHRcdHRvb2x0aXBCdXR0b24uY2xhc3NOYW1lID0gJ21vcmViaXRzLXRvb2x0aXBCdXR0b24nO1xuXHRcdHRvb2x0aXBCdXR0b24udGl0bGUgPSBkYXRhLnRvb2x0aXA7IC8vIFByb3ZpZGVzIHRoZSBjb250ZW50IGZvciBqUXVlcnkgVUlcblx0XHR0b29sdGlwQnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCc/JykpO1xuXHRcdCQodG9vbHRpcEJ1dHRvbikudG9vbHRpcCh7XG5cdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRteTogJ2xlZnQgdG9wJyxcblx0XHRcdFx0YXQ6ICdjZW50ZXIgYm90dG9tJyxcblx0XHRcdFx0Y29sbGlzaW9uOiAnZmxpcGZpdCcsXG5cdFx0XHR9LFxuXHRcdFx0Ly8gRGVwcmVjYXRlZCBpbiBVSSAxLjEyLCBidXQgTVcgc3R1Y2sgb24gMS45LjIgaW5kZWZpbml0ZWx5OyBzZWUgIzM5OCBhbmQgVDcxMzg2XG5cdFx0XHR0b29sdGlwQ2xhc3M6ICdtb3JlYml0cy11aS10b29sdGlwJyxcblx0XHR9KTtcblx0fTtcblx0Ly8gU29tZSB1dGlsaXR5IG1ldGhvZHMgZm9yIG1hbmlwdWxhdGluZyBxdWlja0Zvcm1zIGFmdGVyIHRoZWlyIGNyZWF0aW9uOlxuXHQvLyAoTm9uZSBvZiB0aGVzZSB3b3JrIGZvciBcImR5bmlucHV0XCIgdHlwZSBmaWVsZHMgYXQgcHJlc2VudClcblx0LyoqXG5cdCAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGZpbGxlZCBmb3JtIGRhdGEgZW50ZXJlZCBieSB0aGUgdXNlciwgd2l0aCB0aGUgb2JqZWN0XG5cdCAqIGtleXMgYmVpbmcgdGhlIGZvcm0gZWxlbWVudCBuYW1lcy4gRGlzYWJsZWQgZmllbGRzIHdpbGwgYmUgaWdub3JlZCwgYnV0IG5vdCBoaWRkZW4gZmllbGRzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IFdpdGggZmllbGQgbmFtZXMgYXMga2V5cywgaW5wdXQgZGF0YSBhcyB2YWx1ZXMuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0SW5wdXREYXRhID0gKGZvcm0pID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSB7fTtcblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIGZvcm0uZWxlbWVudHMpIHtcblx0XHRcdGlmIChmaWVsZC5kaXNhYmxlZCB8fCAhZmllbGQubmFtZSB8fCAhZmllbGQudHlwZSB8fCBmaWVsZC50eXBlID09PSAnc3VibWl0JyB8fCBmaWVsZC50eXBlID09PSAnYnV0dG9uJykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIEZvciBlbGVtZW50cyBpbiBzdWJncm91cHMsIHF1aWNrZm9ybSBwcmVwZW5kcyBlbGVtZW50IG5hbWVzIHdpdGhcblx0XHRcdC8vIG5hbWUgb2YgdGhlIHBhcmVudCBncm91cCBmb2xsb3dlZCBieSBhIHBlcmlvZCwgZ2V0IHJpZCBvZiB0aGF0LlxuXHRcdFx0Y29uc3QgZmllbGROYW1lTm9ybSA9IGZpZWxkLm5hbWUuc2xpY2UoZmllbGQubmFtZS5pbmRleE9mKCcuJykgKyAxKTtcblx0XHRcdHN3aXRjaCAoZmllbGQudHlwZSkge1xuXHRcdFx0XHRjYXNlICdyYWRpbyc6XG5cdFx0XHRcdFx0aWYgKGZpZWxkLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0XHRcdGlmIChmaWVsZC5kYXRhc2V0LnNpbmdsZSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQuY2hlY2tlZDsgLy8gYm9vbGVhblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gfHw9IFtdO1xuXHRcdFx0XHRcdFx0aWYgKGZpZWxkLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dW3Jlc3VsdFtmaWVsZE5hbWVOb3JtXS5sZW5ndGhdID0gZmllbGQudmFsdWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzZWxlY3QtbXVsdGlwbGUnOlxuXHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9ICQoZmllbGQpLnZhbCgpOyAvLyBmaWVsZC52YWx1ZSBkb2Vzbid0IHdvcmtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndGV4dCc6IC8vIGZhbGxzIHRocm91Z2hcblx0XHRcdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlLnRyaW0oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBjb3VsZCBiZSBzZWxlY3Qtb25lLCBkYXRlLCBudW1iZXIsIGVtYWlsLCBldGNcblx0XHRcdFx0XHRpZiAoZmllbGQudmFsdWUpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0LyoqXG5cdCAqIFJldHVybnMgYWxsIGZvcm0gZWxlbWVudHMgd2l0aCBhIGdpdmVuIGZpZWxkIG5hbWUgb3IgSUQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cblx0ICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSAtIFRoZSBuYW1lIG9yIGlkIG9mIHRoZSBmaWVsZHMuXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudFtdfSAtIEFycmF5IG9mIG1hdGNoaW5nIGZvcm0gZWxlbWVudHMuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudHMgPSAoZm9ybSwgZmllbGROYW1lKSA9PiB7XG5cdFx0Y29uc3QgJGZvcm0gPSAkKGZvcm0pO1xuXHRcdGZpZWxkTmFtZSA9ICQuZXNjYXBlU2VsZWN0b3IoZmllbGROYW1lKTsgLy8gc2FuaXRpemUgaW5wdXRcblx0XHRsZXQgJGVsZW1lbnRzID0gJGZvcm0uZmluZChgW25hbWU9XCIke2ZpZWxkTmFtZX1cIl1gKTtcblx0XHRpZiAoJGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiAkZWxlbWVudHMudG9BcnJheSgpO1xuXHRcdH1cblx0XHQkZWxlbWVudHMgPSAkZm9ybS5maW5kKGAjJHtmaWVsZE5hbWV9YCk7XG5cdFx0cmV0dXJuICRlbGVtZW50cy50b0FycmF5KCk7XG5cdH07XG5cdC8qKlxuXHQgKiBTZWFyY2hlcyB0aGUgYXJyYXkgb2YgZWxlbWVudHMgZm9yIGEgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uIHdpdGggYSBjZXJ0YWluXG5cdCAqIGB2YWx1ZWAgYXR0cmlidXRlLCBhbmQgcmV0dXJucyB0aGUgZmlyc3Qgc3VjaCBlbGVtZW50LiBSZXR1cm5zIG51bGwgaWYgbm90IGZvdW5kLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudFtdfSBlbGVtZW50QXJyYXkgLSBBcnJheSBvZiBjaGVja2JveCBvciByYWRpbyBlbGVtZW50cy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVmFsdWUgdG8gc2VhcmNoIGZvci5cblx0ICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0Q2hlY2tib3hPclJhZGlvID0gKGVsZW1lbnRBcnJheSwgdmFsdWUpID0+IHtcblx0XHRjb25zdCBmb3VuZCA9IGVsZW1lbnRBcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBlbGVtZW50LnZhbHVlID09PSB2YWx1ZTtcblx0XHR9KTtcblx0XHRpZiAoZm91bmQubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZvdW5kWzBdO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0LyoqXG5cdCAqIFJldHVybnMgdGhlICZsdDtkaXY+IGNvbnRhaW5pbmcgdGhlIGZvcm0gZWxlbWVudCwgb3IgdGhlIGZvcm0gZWxlbWVudCBpdHNlbGZcblx0ICogTWF5IG5vdCB3b3JrIGFzIGV4cGVjdGVkIG9uIGNoZWNrYm94ZXMgb3IgcmFkaW9zLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRDb250YWluZXIgPSAoZWxlbWVudCkgPT4ge1xuXHRcdC8vIGZvciBkaXZzLCBoZWFkaW5ncyBhbmQgZmllbGRzZXRzLCB0aGUgY29udGFpbmVyIGlzIHRoZSBlbGVtZW50IGl0c2VsZlxuXHRcdGlmIChcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRmllbGRTZXRFbGVtZW50IHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTERpdkVsZW1lbnQgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSGVhZGluZ0VsZW1lbnRcblx0XHQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdH1cblx0XHQvLyBmb3Igb3RoZXJzLCBqdXN0IHJldHVybiB0aGUgcGFyZW50IG5vZGVcblx0XHRyZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlO1xuXHR9O1xuXHQvKipcblx0ICogR2V0cyB0aGUgSFRNTCBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIGxhYmVsIG9mIHRoZSBnaXZlbiBmb3JtIGVsZW1lbnRcblx0ICogKG1haW5seSBmb3IgaW50ZXJuYWwgdXNlKS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbE9iamVjdCA9IChlbGVtZW50KSA9PiB7XG5cdFx0Ly8gZm9yIGJ1dHRvbnMsIGRpdnMgYW5kIGhlYWRlcnMsIHRoZSBsYWJlbCBpcyBvbiB0aGUgZWxlbWVudCBpdHNlbGZcblx0XHRpZiAoXG5cdFx0XHRlbGVtZW50LnR5cGUgPT09ICdidXR0b24nIHx8XG5cdFx0XHRlbGVtZW50LnR5cGUgPT09ICdzdWJtaXQnIHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTERpdkVsZW1lbnQgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSGVhZGluZ0VsZW1lbnRcblx0XHQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0Ly8gZm9yIGZpZWxkc2V0cywgdGhlIGxhYmVsIGlzIHRoZSBjaGlsZCA8bGVnZW5kPiBlbGVtZW50XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZpZWxkU2V0RWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignbGVnZW5kJyk7XG5cdFx0XHQvLyBmb3IgdGV4dGFyZWFzLCB0aGUgbGFiZWwgaXMgdGhlIHNpYmxpbmcgPGg1PiBlbGVtZW50XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdoNScpO1xuXHRcdH1cblx0XHQvLyBmb3Igb3RoZXJzLCB0aGUgbGFiZWwgaXMgdGhlIHNpYmxpbmcgPGxhYmVsPiBlbGVtZW50XG5cdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuXHR9O1xuXHQvKipcblx0ICogR2V0cyB0aGUgbGFiZWwgdGV4dCBvZiB0aGUgZWxlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudCkgPT4ge1xuXHRcdGNvbnN0IGxhYmVsRWxlbWVudCA9IE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWxPYmplY3QoZWxlbWVudCk7XG5cdFx0aWYgKCFsYWJlbEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbGFiZWxFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG5cdH07XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBsYWJlbCBvZiB0aGUgZWxlbWVudCB0byB0aGUgZ2l2ZW4gdGV4dC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsVGV4dFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBzdWNjZWVkZWQsIGZhbHNlIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRMYWJlbCA9IChlbGVtZW50LCBsYWJlbFRleHQpID0+IHtcblx0XHRjb25zdCBsYWJlbEVsZW1lbnQgPSBNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsT2JqZWN0KGVsZW1lbnQpO1xuXHRcdGlmICghbGFiZWxFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGxhYmVsRWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXHQvKipcblx0ICogU3RvcmVzIHRoZSBlbGVtZW50J3MgY3VycmVudCBsYWJlbCwgYW5kIHRlbXBvcmFyaWx5IHNldHMgdGhlIGxhYmVsIHRvIHRoZSBnaXZlbiB0ZXh0LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGVtcG9yYXJ5TGFiZWxUZXh0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgc3VjY2VlZGVkLCBgZmFsc2VgIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLm92ZXJyaWRlRWxlbWVudExhYmVsID0gKGVsZW1lbnQsIHRlbXBvcmFyeUxhYmVsVGV4dCkgPT4ge1xuXHRcdGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnKSkge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnLCBNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsKGVsZW1lbnQpKTtcblx0XHR9XG5cdFx0cmV0dXJuIE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50TGFiZWwoZWxlbWVudCwgdGVtcG9yYXJ5TGFiZWxUZXh0KTtcblx0fTtcblx0LyoqXG5cdCAqIFJlc3RvcmVzIHRoZSBsYWJlbCBzdG9yZWQgYnkgb3ZlcnJpZGVFbGVtZW50TGFiZWwuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHN1Y2NlZWRlZCwgZmFsc2UgaWYgdGhlIGxhYmVsIGVsZW1lbnQgaXMgdW5hdmFpbGFibGUuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ucmVzZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudCkgPT4ge1xuXHRcdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcpKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRMYWJlbChlbGVtZW50LCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcpKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdC8qKlxuXHQgKiBTaG93cyBvciBoaWRlcyBhIGZvcm0gZWxlbWVudCBwbHVzIGl0cyBsYWJlbCBhbmQgdG9vbHRpcC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxqUXVlcnl8c3RyaW5nKX0gZWxlbWVudCAtIEhUTUwvalF1ZXJ5IGVsZW1lbnQsIG9yIGpRdWVyeSBzZWxlY3RvciBzdHJpbmcuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Zpc2liaWxpdHldIC0gU2tpcCB0aGlzIHRvIHRvZ2dsZSB2aXNpYmlsaXR5LlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRWaXNpYmlsaXR5ID0gKGVsZW1lbnQsIHZpc2liaWxpdHkpID0+IHtcblx0XHQkKGVsZW1lbnQpLnRvZ2dsZSh2aXNpYmlsaXR5KTtcblx0fTtcblx0LyoqXG5cdCAqIFNob3dzIG9yIGhpZGVzIHRoZSBxdWVzdGlvbiBtYXJrIGljb24gKHdoaWNoIGRpc3BsYXlzIHRoZSB0b29sdGlwKSBuZXh0IHRvIGEgZm9ybSBlbGVtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fGpRdWVyeSl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtib29sZWFufSBbdmlzaWJpbGl0eV0gLSBTa2lwIHRoaXMgdG8gdG9nZ2xlIHZpc2liaWxpdHkuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uc2V0RWxlbWVudFRvb2x0aXBWaXNpYmlsaXR5ID0gKGVsZW1lbnQsIHZpc2liaWxpdHkpID0+IHtcblx0XHQkKE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50Q29udGFpbmVyKGVsZW1lbnQpKS5maW5kKCcubW9yZWJpdHMtdG9vbHRpcEJ1dHRvbicpLnRvZ2dsZSh2aXNpYmlsaXR5KTtcblx0fTtcblx0LyoqXG5cdCAqIEBleHRlcm5hbCBIVE1MRm9ybUVsZW1lbnRcblx0ICovXG5cdC8qKlxuXHQgKiBHZXQgY2hlY2tlZCBpdGVtcyBpbiB0aGUgZm9ybS5cblx0ICpcblx0ICogQGZ1bmN0aW9uIGV4dGVybmFsOkhUTUxGb3JtRWxlbWVudC5nZXRDaGVja2VkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gRmluZCBjaGVja2VkIHByb3BlcnR5IG9mIGVsZW1lbnRzIChpLmUuIGEgY2hlY2tib3hcblx0ICogb3IgYSByYWRpb2J1dHRvbikgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgb3Igc2VsZWN0IG9wdGlvbnMgdGhhdCBoYXZlIHNlbGVjdGVkXG5cdCAqIHNldCB0byB0cnVlIChkb24ndCB0cnkgdG8gbWl4IHNlbGVjdHMgd2l0aCByYWRpby9jaGVja2JveGVzKS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAtIE9wdGlvbmFsbHkgc3BlY2lmeSBlaXRoZXIgcmFkaW8gb3IgY2hlY2tib3ggKGZvclxuXHQgKiB0aGUgZXZlbnQgdGhhdCBib3RoIGNoZWNrYm94ZXMgYW5kIHJhZGlvYnV0dG9ucyBoYXZlIHRoZSBzYW1lIG5hbWUpLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nW119IC0gQ29udGFpbnMgdGhlIHZhbHVlcyBvZiBlbGVtZW50cyB3aXRoIHRoZSBnaXZlbiBuYW1lXG5cdCAqIGNoZWNrZWQgcHJvcGVydHkgc2V0IHRvIHRydWUuXG5cdCAqL1xuXHRIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmdldENoZWNrZWQgPSBmdW5jdGlvbiAobmFtZSwgdHlwZSkge1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50c1tuYW1lXTtcblx0XHRpZiAoIWVsZW1lbnRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGNvbnN0IHJldHVybkFycmF5ID0gW107XG5cdFx0bGV0IGk7XG5cdFx0aWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IHtvcHRpb25zfSA9IGVsZW1lbnRzO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKG9wdGlvbnNbaV0uc2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRpZiAob3B0aW9uc1tpXS52YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBvcHRpb25zW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IG9wdGlvbnNbaV0udmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcblx0XHRcdGlmICh0eXBlICYmIGVsZW1lbnRzLnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fSBlbHNlIGlmIChlbGVtZW50cy5jaGVja2VkKSB7XG5cdFx0XHRcdHJldHVybiBbZWxlbWVudHMudmFsdWVdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKGVsZW1lbnRzW2ldLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50c1tpXS50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnRzW2ldLnZhbHVlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdH07XG5cdC8qKlxuXHQgKiBEb2VzIHRoZSBzYW1lIGFzIHtAbGluayBIVE1MRm9ybUVsZW1lbnQuZ2V0Q2hlY2tlZHxnZXRDaGVja2VkfSwgYnV0IHdpdGggdW5jaGVja2VkIGVsZW1lbnRzLlxuXHQgKlxuXHQgKiBAZnVuY3Rpb24gZXh0ZXJuYWw6SFRNTEZvcm1FbGVtZW50LmdldFVuY2hlY2tlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpbmQgY2hlY2tlZCBwcm9wZXJ0eSBvZiBlbGVtZW50cyAoaS5lLiBhIGNoZWNrYm94XG5cdCAqIG9yIGEgcmFkaW9idXR0b24pIHdpdGggdGhlIGdpdmVuIG5hbWUsIG9yIHNlbGVjdCBvcHRpb25zIHRoYXQgaGF2ZSBzZWxlY3RlZFxuXHQgKiBzZXQgdG8gdHJ1ZSAoZG9uJ3QgdHJ5IHRvIG1peCBzZWxlY3RzIHdpdGggcmFkaW8vY2hlY2tib3hlcykuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gLSBPcHRpb25hbGx5IHNwZWNpZnkgZWl0aGVyIHJhZGlvIG9yIGNoZWNrYm94IChmb3Jcblx0ICogdGhlIGV2ZW50IHRoYXQgYm90aCBjaGVja2JveGVzIGFuZCByYWRpb2J1dHRvbnMgaGF2ZSB0aGUgc2FtZSBuYW1lKS5cblx0ICogQHJldHVybnMge3N0cmluZ1tdfSAtIENvbnRhaW5zIHRoZSB2YWx1ZXMgb2YgZWxlbWVudHMgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuXHQgKiBjaGVja2VkIHByb3BlcnR5IHNldCB0byB0cnVlLlxuXHQgKi9cblx0SFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5nZXRVbmNoZWNrZWQgPSBmdW5jdGlvbiAobmFtZSwgdHlwZSkge1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50c1tuYW1lXTtcblx0XHRpZiAoIWVsZW1lbnRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGNvbnN0IHJldHVybkFycmF5ID0gW107XG5cdFx0bGV0IGk7XG5cdFx0aWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IHtvcHRpb25zfSA9IGVsZW1lbnRzO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKCFvcHRpb25zW2ldLnNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gb3B0aW9uc1tpXS52YWx1ZXM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBvcHRpb25zW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG5cdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50cy50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdH0gZWxzZSBpZiAoIWVsZW1lbnRzLmNoZWNrZWQpIHtcblx0XHRcdFx0cmV0dXJuIFtlbGVtZW50cy52YWx1ZV07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoIWVsZW1lbnRzW2ldLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50c1tpXS50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnRzW2ldLnZhbHVlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdH07XG5cdC8qKlxuXHQgKiBVdGlsaXRpZXMgdG8gaGVscCBwcm9jZXNzIElQIGFkZHJlc3Nlcy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5pcFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmlwID0ge1xuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGFuIElQdjYgYWRkcmVzcyB0byB0aGUgY2Fub25pY2FsIGZvcm0gc3RvcmVkIGFuZCB1c2VkIGJ5IE1lZGlhV2lraS5cblx0XHQgKiBKYXZhU2NyaXB0IHRyYW5zbGF0aW9uIG9mIHRoZSB7QGxpbmsgaHR0cHM6Ly9nZXJyaXQud2lraW1lZGlhLm9yZy9yL3BsdWdpbnMvZ2l0aWxlcy9tZWRpYXdpa2kvY29yZS8rLzhlYjZhYzNlODRlYTMzMTJkMzkxY2E5NmMxMmM0OWUzYWQwNzUzYmIvaW5jbHVkZXMvdXRpbHMvSVAucGhwIzEzMXxgSVA6OnNhbml0aXplSVAoKWB9XG5cdFx0ICogZnVuY3Rpb24gZnJvbSB0aGUgSVBVdGlscyBsaWJyYXJ5LiAgQWRkcmVzc2VzIGFyZSB2ZXJib3NlLCB1cHBlcmNhc2UsXG5cdFx0ICogbm9ybWFsaXplZCwgYW5kIGV4cGFuZGVkIHRvIDggd29yZHMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWRkcmVzcyAtIFRoZSBJUHY2IGFkZHJlc3MsIHdpdGggb3Igd2l0aG91dCBDSURSLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0c2FuaXRpemVJUHY2OiAoYWRkcmVzcykgPT4ge1xuXHRcdFx0YWRkcmVzcyA9IGFkZHJlc3MudHJpbSgpO1xuXHRcdFx0aWYgKGFkZHJlc3MgPT09ICcnKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFtdy51dGlsLmlzSVB2NkFkZHJlc3MoYWRkcmVzcywgdHJ1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIGFkZHJlc3M7IC8vIG5vdGhpbmcgZWxzZSB0byBkbyBmb3IgSVB2NCBhZGRyZXNzZXMgb3IgaW52YWxpZCBvbmVzXG5cdFx0XHR9XG5cdFx0XHQvLyBSZW1vdmUgYW55IHdoaXRlc3BhY2VzLCBjb252ZXJ0IHRvIHVwcGVyIGNhc2Vcblx0XHRcdGFkZHJlc3MgPSBhZGRyZXNzLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHQvLyBFeHBhbmQgemVybyBhYmJyZXZpYXRpb25zXG5cdFx0XHRjb25zdCBhYmJyZXZQb3MgPSBhZGRyZXNzLmluZGV4T2YoJzo6Jyk7XG5cdFx0XHRpZiAoYWJicmV2UG9zID4gLTEpIHtcblx0XHRcdFx0Ly8gV2Uga25vdyB0aGlzIGlzIHZhbGlkIElQdjYuIEZpbmQgdGhlIGxhc3QgaW5kZXggb2YgdGhlXG5cdFx0XHRcdC8vIGFkZHJlc3MgYmVmb3JlIGFueSBDSURSIG51bWJlciAoZS5nLiBcImE6YjpjOjovMjRcIikuXG5cdFx0XHRcdGNvbnN0IENJRFJTdGFydCA9IGFkZHJlc3MuaW5kZXhPZignLycpO1xuXHRcdFx0XHRjb25zdCBhZGRyZXNzRW5kID0gQ0lEUlN0YXJ0ID09PSAtMSA/IGFkZHJlc3MubGVuZ3RoIC0gMSA6IENJRFJTdGFydCAtIDE7XG5cdFx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGF0IHRoZSBiZWdpbm5pbmcuLi5cblx0XHRcdFx0bGV0IHJlcGVhdDtcblx0XHRcdFx0bGV0IGV4dHJhO1xuXHRcdFx0XHRsZXQgcGFkO1xuXHRcdFx0XHRpZiAoYWJicmV2UG9zID09PSAwKSB7XG5cdFx0XHRcdFx0cmVwZWF0ID0gJzA6Jztcblx0XHRcdFx0XHRleHRyYSA9IGFkZHJlc3MgPT09ICc6OicgPyAnMCcgOiAnJzsgLy8gZm9yIHRoZSBhZGRyZXNzICc6Oidcblx0XHRcdFx0XHRwYWQgPSA5OyAvLyA3KzIgKGR1ZSB0byAnOjonKVxuXHRcdFx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGF0IHRoZSBlbmQuLi5cblx0XHRcdFx0fSBlbHNlIGlmIChhYmJyZXZQb3MgPT09IGFkZHJlc3NFbmQgLSAxKSB7XG5cdFx0XHRcdFx0cmVwZWF0ID0gJzowJztcblx0XHRcdFx0XHRleHRyYSA9ICcnO1xuXHRcdFx0XHRcdHBhZCA9IDk7IC8vIDcrMiAoZHVlIHRvICc6OicpXG5cdFx0XHRcdFx0Ly8gSWYgdGhlICc6OicgaXMgaW4gdGhlIG1pZGRsZS4uLlxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlcGVhdCA9ICc6MCc7XG5cdFx0XHRcdFx0ZXh0cmEgPSAnOic7XG5cdFx0XHRcdFx0cGFkID0gODsgLy8gNisyIChkdWUgdG8gJzo6Jylcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCByZXBsYWNlbWVudCA9IHJlcGVhdDtcblx0XHRcdFx0cGFkIC09IGFkZHJlc3Muc3BsaXQoJzonKS5sZW5ndGggLSAxO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBhZDsgaSsrKSB7XG5cdFx0XHRcdFx0cmVwbGFjZW1lbnQgKz0gcmVwZWF0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlcGxhY2VtZW50ICs9IGV4dHJhO1xuXHRcdFx0XHRhZGRyZXNzID0gYWRkcmVzcy5yZXBsYWNlKCc6OicsIHJlcGxhY2VtZW50KTtcblx0XHRcdH1cblx0XHRcdC8vIFJlbW92ZSBsZWFkaW5nIHplcm9zIGZyb20gZWFjaCBibG9jIGFzIG5lZWRlZFxuXHRcdFx0cmV0dXJuIGFkZHJlc3MucmVwbGFjZSgvKF58OikwKyhbMC05QS1GYS1mXXsxLDR9KS9nLCAnJDEkMicpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lIGlmIHRoZSBnaXZlbiBJUCBhZGRyZXNzIGlzIGEgcmFuZ2UuICBKdXN0IGNvbmpvaW5zXG5cdFx0ICogYG13LnV0aWwuaXNJUEFkZHJlc3NgIHdpdGggYW5kIHdpdGhvdXQgdGhlIGBhbGxvd0Jsb2NrYCBvcHRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaXBcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGlmIGdpdmVuIGEgdmFsaWQgSVAgYWRkcmVzcyByYW5nZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHRcdCAqL1xuXHRcdGlzUmFuZ2U6IChpcCkgPT4ge1xuXHRcdFx0cmV0dXJuIG13LnV0aWwuaXNJUEFkZHJlc3MoaXAsIHRydWUpICYmICFtdy51dGlsLmlzSVBBZGRyZXNzKGlwKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENoZWNrIHRoYXQgYW4gSVAgcmFuZ2UgaXMgd2l0aGluIHRoZSBDSURSIGxpbWl0cy4gIE1vc3QgbGlrZWx5IHRvIGJlIHVzZWZ1bFxuXHRcdCAqIGluIGNvbmp1bmN0aW9uIHdpdGggYHdnUmVsZXZhbnRVc2VyTmFtZWAuICBDSURSIGxpbWl0cyBhcmUgaGFyZGNvZGVkIGFzIC8xNlxuXHRcdCAqIGZvciBJUHY0IGFuZCAvMzIgZm9yIElQdjYuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaXBcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGZvciB2YWxpZCByYW5nZXMgd2l0aGluIHRoZSBDSURSIGxpbWl0cyxcblx0XHQgKiBvdGhlcndpc2UgZmFsc2UgKHJhbmdlcyBvdXRzaWRlIHRoZSBsaW1pdCwgc2luZ2xlIElQcywgbm9uLUlQcykuXG5cdFx0ICovXG5cdFx0dmFsaWRDSURSOiAoaXApID0+IHtcblx0XHRcdGlmIChNb3JlYml0cy5pcC5pc1JhbmdlKGlwKSkge1xuXHRcdFx0XHRjb25zdCBzdWJuZXQgPSBOdW1iZXIucGFyc2VJbnQoaXAubWF0Y2goL1xcLyhcXGR7MSwzfSkkLylbMV0sIDEwKTtcblx0XHRcdFx0aWYgKHN1Ym5ldCkge1xuXHRcdFx0XHRcdC8vIFNob3VsZCBiZSByZWR1bmRhbnRcblx0XHRcdFx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKGlwLCB0cnVlKSkge1xuXHRcdFx0XHRcdFx0aWYgKHN1Ym5ldCA+PSAzMikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHN1Ym5ldCA+PSAxNikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHZXQgdGhlIC82NCBzdWJuZXQgZm9yIGFuIElQdjYgYWRkcmVzcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpcHY2IC0gVGhlIElQdjYgYWRkcmVzcywgd2l0aCBvciB3aXRob3V0IGEgc3VibmV0LlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufHN0cmluZ30gLSBGYWxzZSBpZiBub3QgSVB2NiBvciBiaWdnZXIgdGhhbiBhIDY0LFxuXHRcdCAqIG90aGVyd2lzZSB0aGUgKHNhbml0aXplZCkgLzY0IGFkZHJlc3MuXG5cdFx0ICovXG5cdFx0Z2V0NjQ6IChpcHY2KSA9PiB7XG5cdFx0XHRpZiAoIWlwdjYgfHwgIW13LnV0aWwuaXNJUHY2QWRkcmVzcyhpcHY2LCB0cnVlKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzdWJuZXRNYXRjaCA9IGlwdjYubWF0Y2goL1xcLyhcXGR7MSwzfSkkLyk7XG5cdFx0XHRpZiAoc3VibmV0TWF0Y2ggJiYgTnVtYmVyLnBhcnNlSW50KHN1Ym5ldE1hdGNoWzFdLCAxMCkgPCA2NCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpcHY2ID0gTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2KGlwdjYpO1xuXHRcdFx0Y29uc3QgaXBSZWdleCA9IC9eKCg/OlswLTlBLUZdezEsNH06KXs0fSkoPzpbMC05QS1GXXsxLDR9Oil7M31bMC05QS1GXXsxLDR9KD86XFwvXFxkezEsM30pPyQvO1xuXHRcdFx0cmV0dXJuIGlwdjYucmVwbGFjZShpcFJlZ2V4LCAnJDEnLmNvbmNhdCgnMDowOjA6MC82NCcpKTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogSGVscGVyIGZ1bmN0aW9ucyB0byBtYW5pcHVsYXRlIHN0cmluZ3MuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuc3RyaW5nXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMuc3RyaW5nID0ge1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRvVXBwZXJDYXNlRmlyc3RDaGFyOiAoc3RyKSA9PiB7XG5cdFx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0XHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRvTG93ZXJDYXNlRmlyc3RDaGFyOiAoc3RyKSA9PiB7XG5cdFx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0XHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9Mb3dlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdpdmVzIGFuIGFycmF5IG9mIHN1YnN0cmluZ3Mgb2YgYHN0cmAgLSBzdGFydGluZyB3aXRoIGBzdGFydGAgYW5kXG5cdFx0ICogZW5kaW5nIHdpdGggYGVuZGAgLSB3aGljaCBpcyBub3QgaW4gYHNraXBsaXN0YC4gIEludGVuZGVkIGZvciB1c2Vcblx0XHQgKiBvbiB3aWtpdGV4dCB3aXRoIHRlbXBsYXRlcyBvciBsaW5rcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhcnRcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZW5kXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nW118c3RyaW5nKX0gW3NraXBsaXN0XVxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmdbXX1cblx0XHQgKiBAdGhyb3dzIElmIHRoZSBgc3RhcnRgIGFuZCBgZW5kYCBzdHJpbmdzIGFyZW4ndCBvZiB0aGUgc2FtZSBsZW5ndGguXG5cdFx0ICogQHRocm93cyBJZiBgc2tpcGxpc3RgIGlzbid0IGFuIGFycmF5IG9yIHN0cmluZ1xuXHRcdCAqL1xuXHRcdHNwbGl0V2VpZ2h0ZWRCeUtleXM6IChzdHIsIHN0YXJ0LCBlbmQsIHNraXBsaXN0KSA9PiB7XG5cdFx0XHRpZiAoc3RhcnQubGVuZ3RoICE9PSBlbmQubGVuZ3RoKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignc3RhcnQgbWFya2VyIGFuZCBlbmQgbWFya2VyIG11c3QgYmUgb2YgdGhlIHNhbWUgbGVuZ3RoJyk7XG5cdFx0XHR9XG5cdFx0XHRsZXQgbGV2ZWwgPSAwO1xuXHRcdFx0bGV0IGluaXRpYWwgPSBudWxsO1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gW107XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoc2tpcGxpc3QpKSB7XG5cdFx0XHRcdGlmIChza2lwbGlzdCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0c2tpcGxpc3QgPSBbXTtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygc2tpcGxpc3QgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0c2tpcGxpc3QgPSBbc2tpcGxpc3RdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ25vbi1hcHBsaWNhYmxlIHNraXBsaXN0IHBhcmFtZXRlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygc2tpcGxpc3QpIHtcblx0XHRcdFx0XHRpZiAoc3RyLnNsaWNlKGksIGkgKyBlbGVtZW50Lmxlbmd0aCkgPT09IGVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdGkgKz0gZWxlbWVudC5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdHIuc2xpY2UoaSwgaSArIHN0YXJ0Lmxlbmd0aCkgPT09IHN0YXJ0KSB7XG5cdFx0XHRcdFx0aWYgKGluaXRpYWwgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGluaXRpYWwgPSBpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQrK2xldmVsO1xuXHRcdFx0XHRcdGkgKz0gc3RhcnQubGVuZ3RoIC0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChzdHIuc2xpY2UoaSwgaSArIGVuZC5sZW5ndGgpID09PSBlbmQpIHtcblx0XHRcdFx0XHQtLWxldmVsO1xuXHRcdFx0XHRcdGkgKz0gZW5kLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFsZXZlbCAmJiBpbml0aWFsICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gc3RyLnNsaWNlKGluaXRpYWwsIGkgKyAxKTtcblx0XHRcdFx0XHRpbml0aWFsID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEZvcm1hdHMgZnJlZWZvcm0gXCJyZWFzb25cIiAoZnJvbSBhIHRleHRhcmVhKSBmb3IgZGVsZXRpb24vb3RoZXJcblx0XHQgKiB0ZW1wbGF0ZXMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgc3Vic3RpdHV0ZWQsIChlLmcuIFBST0QsIFhGRCwgUlBQKS5cblx0XHQgKiBIYW5kbGVzIGB8YCBvdXRzaWRlIGEgbm93aWtpIHRhZy5cblx0XHQgKiBPcHRpb25hbGx5LCBhbHNvIGFkZHMgYSBzaWduYXR1cmUgaWYgbm90IHByZXNlbnQgYWxyZWFkeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthZGRTaWddXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXRSZWFzb25UZXh0OiAoc3RyLCBhZGRTaWcpID0+IHtcblx0XHRcdGxldCByZWFzb24gPSAoc3RyIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKHJlYXNvbik7XG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJzxubycuY29uY2F0KCd3aWtpJywgJz4nKSwgJzwvbm8nLmNvbmNhdCgnd2lraScsICc+JykpO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZSgvXFx8L2csICd7eycuY29uY2F0KCdzdWJzdDonLCAnIX19JykpO1xuXHRcdFx0cmVhc29uID0gdW5iaW5kZXIucmViaW5kKCk7XG5cdFx0XHRpZiAoYWRkU2lnKSB7XG5cdFx0XHRcdGNvbnN0IHNpZyA9ICd+ficuY29uY2F0KCd+ficpO1xuXHRcdFx0XHRjb25zdCBzaWdJbmRleCA9IHJlYXNvbi5sYXN0SW5kZXhPZihzaWcpO1xuXHRcdFx0XHRpZiAoc2lnSW5kZXggPT09IC0xIHx8IHNpZ0luZGV4ICE9PSByZWFzb24ubGVuZ3RoIC0gc2lnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJlYXNvbiArPSBgICR7c2lnfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZWFzb24udHJpbSgpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRm9ybWF0cyBhIFwicmVhc29uXCIgKGZyb20gYSB0ZXh0YXJlYSkgZm9yIGluY2x1c2lvbiBpbiBhIHVzZXJzcGFjZVxuXHRcdCAqIGxvZy4gIFJlcGxhY2VzIG5ld2xpbmVzIHdpdGgge3tQYn19LCBhbmQgYWRkcyBhbiBleHRyYSBgI2AgYmVmb3JlXG5cdFx0ICogbGlzdCBpdGVtcyBmb3IgcHJvcGVyIGZvcm1hdHRpbmcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXRSZWFzb25Gb3JMb2c6IChzdHIpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHN0clxuXHRcdFx0XHRcdC8vIGhhbmRsZSBsaW5lIGJyZWFrcywgd2hpY2ggb3RoZXJ3aXNlIGJyZWFrIG51bWJlcmluZ1xuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXG4rL2csICd7e3BifX0nKVxuXHRcdFx0XHRcdC8vIHB1dCBhbiBleHRyYSAjIGluIGZyb250IGJlZm9yZSBidWxsZXRlZCBvciBudW1iZXJlZCBsaXN0IGl0ZW1zXG5cdFx0XHRcdFx0LnJlcGxhY2UoL14oIyspL2dtLCAnIyQxJylcblx0XHRcdFx0XHQucmVwbGFjZSgvXihcXCorKS9nbSwgJyMkMScpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogTGlrZSBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKClgLCBidXQgZXNjYXBlcyBhbnkgZG9sbGFyIHNpZ25zIGluXG5cdFx0ICogdGhlIHJlcGxhY2VtZW50IHN0cmluZy4gIFVzZWZ1bCB3aGVuIHRoZSB0aGUgcmVwbGFjZW1lbnQgc3RyaW5nIGlzXG5cdFx0ICogYXJiaXRyYXJ5LCBzdWNoIGFzIGEgdXNlcm5hbWUgb3IgZnJlZWZvcm0gdXNlciBpbnB1dCwgYW5kIGNvdWxkXG5cdFx0ICogY29udGFpbiBkb2xsYXIgc2lnbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGV4dCBpbiB3aGljaCB0byByZXBsYWNlLlxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSBwYXR0ZXJuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VtZW50XG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRzYWZlUmVwbGFjZTogKHN0cmluZywgcGF0dGVybiwgcmVwbGFjZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZShwYXR0ZXJuLCByZXBsYWNlbWVudC5yZXBsYWNlKC9cXCQvZywgJyQkJCQnKSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmUgaWYgdGhlIHVzZXItcHJvdmlkZWQgZXhwaXJhdGlvbiB3aWxsIGJlIGNvbnNpZGVyZWQgYW5cblx0XHQgKiBpbmZpbml0ZS1sZW5ndGggYnkgTVcuXG5cdFx0ICpcblx0XHQgKiBAc2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvVDY4NjQ2fVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGV4cGlyeVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGlzSW5maW5pdHk6IChleHBpcnkpID0+IHtcblx0XHRcdHJldHVybiBbJ2luZGVmaW5pdGUnLCAnaW5maW5pdHknLCAnaW5maW5pdGUnLCAnbmV2ZXInXS5pbmNsdWRlcyhleHBpcnkpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRXNjYXBlcyBhIHN0cmluZyB0byBiZSB1c2VkIGluIGEgUmVnRXhwLCByZXBsYWNpbmcgc3BhY2VzIGFuZFxuXHRcdCAqIHVuZGVyc2NvcmVzIHdpdGggYFtfIF1gIGFzIHRoZXkgYXJlIG9mdGVuIGVxdWl2YWxlbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFN0cmluZyB0byBiZSBlc2NhcGVkLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGhlIGVzY2FwZWQgdGV4dC5cblx0XHQgKi9cblx0XHRlc2NhcGVSZWdFeHA6ICh0ZXh0KSA9PiB7XG5cdFx0XHRyZXR1cm4gbXcudXRpbC5lc2NhcGVSZWdFeHAodGV4dCkucmVwbGFjZSgvIHxfL2csICdbXyBdJyk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBmb3JtYXRUaW1lXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IHRpbWUgVGhlIHN0cmluZyB0byBmb3JhbXRcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZvcm1hdFRpbWU6ICh0aW1lKSA9PiB7XG5cdFx0XHRsZXQgbTtcblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKnNlYyhvbmQpP3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGAke21bMV1956eSYDtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKm1pbih1dGUpP3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGAke21bMV195YiGYDtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKmhvdXJzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBtWzFdICsgd2luZG93LndnVUxTKCflsI/ml7YnLCAn5bCP5pmCJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccypkYXlzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBgJHttWzFdfeWkqWA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyp3ZWVrcz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbVsxXSArIHdpbmRvdy53Z1VMUygn5ZGoJywgJ+mAsScpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqbW9udGhzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBtWzFdICsgd2luZG93LndnVUxTKCfkuKrmnIgnLCAn5YCL5pyIJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyp5ZWFycz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3lubRgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKE1vcmViaXRzLnN0cmluZy5pc0luZmluaXR5KHRpbWUudHJpbSgpKSkge1xuXHRcdFx0XHRyZXR1cm4gd2luZG93LndnVUxTKCfml6DpmZDmnJ8nLCAn54Sh6ZmQ5pyfJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGltZTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEFwcGVuZCBwdW5jdHVhdGlvbiB0byBhIHN0cmluZyB3aGVuIGl0J3MgbWlzc2luZ1xuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwdW5jdHVhdGlvblxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0YXBwZW5kUHVuY3R1YXRpb246IChzdHIsIHB1bmN0dWF0aW9uKSA9PiB7XG5cdFx0XHRpZiAocHVuY3R1YXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRwdW5jdHVhdGlvbiA9ICfjgIInO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHN0ci5zZWFyY2goL1suPyE744CC77yf77yB77ybXSQvKSA9PT0gLTEpIHtcblx0XHRcdFx0c3RyICs9IHB1bmN0dWF0aW9uO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogSGVscGVyIGZ1bmN0aW9ucyB0byBtYW5pcHVsYXRlIGFycmF5cy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5hcnJheVxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmFycmF5ID0ge1xuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBkdXBsaWNhdGVkIGl0ZW1zIGZyb20gYW4gYXJyYXkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCBkdXBsaWNhdGVzIHJlbW92ZWQuXG5cdFx0ICogQHRocm93cyBXaGVuIHByb3ZpZGVkIGEgbm9uLWFycmF5LlxuXHRcdCAqL1xuXHRcdHVuaXE6IChhcnIpID0+IHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkudW5pcScpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGFyci5maWx0ZXIoKGl0ZW0sIGlkeCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YoaXRlbSkgPT09IGlkeDtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIG5vbi1kdXBsaWNhdGVkIGl0ZW1zIGZyb20gYW4gYXJyYXkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgZWFjaCB2YWx1ZVxuXHRcdCAqIHJlbW92ZWQ7IHN1YnNlcXVlbnQgaW5zdGFuY2VzIG9mIHRob3NlIHZhbHVlcyAoZHVwbGljYXRlcykgcmVtYWluLlxuXHRcdCAqIEB0aHJvd3MgV2hlbiBwcm92aWRlZCBhIG5vbi1hcnJheS5cblx0XHQgKi9cblx0XHRkdXBzOiAoYXJyKSA9PiB7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG5vbi1hcnJheSBvYmplY3QgcGFzc2VkIHRvIE1vcmViaXRzLmFycmF5LmR1cHMnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpZHgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKGl0ZW0pICE9PSBpZHg7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEJyZWFrIHVwIGFuIGFycmF5IGludG8gc21hbGxlciBhcnJheXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSAtIFNpemUgb2YgZWFjaCBjaHVuayAoZXhjZXB0IHRoZSBsYXN0LCB3aGljaCBjb3VsZCBiZSBkaWZmZXJlbnQpLlxuXHRcdCAqIEByZXR1cm5zIHtBcnJheVtdfSBBbiBhcnJheSBjb250YWluaW5nIHRoZSBzbWFsbGVyLCBjaHVua2VkIGFycmF5cy5cblx0XHQgKiBAdGhyb3dzIFdoZW4gcHJvdmlkZWQgYSBub24tYXJyYXkuXG5cdFx0ICovXG5cdFx0Y2h1bms6IChhcnIsIHNpemUpID0+IHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkuY2h1bmsnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicgfHwgc2l6ZSA8PSAwKSB7XG5cdFx0XHRcdC8vIHByZXR0eSBpbXBvc3NpYmxlIHRvIGRvIGFueXRoaW5nIDopXG5cdFx0XHRcdHJldHVybiBbYXJyXTsgLy8gd2UgcmV0dXJuIGFuIGFycmF5IGNvbnNpc3Rpbmcgb2YgdGhpcyBhcnJheS5cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbnVtQ2h1bmtzID0gTWF0aC5jZWlsKGFyci5sZW5ndGggLyBzaXplKTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20oe1xuXHRcdFx0XHRsZW5ndGg6IG51bUNodW5rcyxcblx0XHRcdH0pO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBudW1DaHVua3M7IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBhcnIuc2xpY2UoaSAqIHNpemUsIChpICsgMSkgKiBzaXplKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFV0aWxpdGllcyB0byBlbmhhbmNlIHNlbGVjdDIgbWVudXMuIFNlZSB0d2lua2xld2FybiwgdHdpbmtsZWJsb2NrXG5cdCAqIGZvciBzYW1wbGUgdXNhZ2VzLlxuXHQgKlxuXHQgKiBAc2VlIHtAbGluayBodHRwczovL3NlbGVjdDIub3JnL31cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5zZWxlY3QyXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAcmVxdWlyZXMganF1ZXJ5LnNlbGVjdDJcblx0ICovXG5cdE1vcmViaXRzLnNlbGVjdDIgPSB7XG5cdFx0bWF0Y2hlcnM6IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3VzdG9tIG1hdGNoZXIgaW4gd2hpY2ggaWYgdGhlIG9wdGdyb3VwIG5hbWUgbWF0Y2hlcywgYWxsIG9wdGlvbnMgaW4gdGhhdFxuXHRcdFx0ICogZ3JvdXAgYXJlIHNob3duLCBsaWtlIGluIGpxdWVyeS5jaG9zZW4uXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0XHRcdCAqIEBwYXJhbSB7Kn0gZGF0YVxuXHRcdFx0ICovXG5cdFx0XHRvcHRncm91cEZ1bGw6IChwYXJhbXMsIGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxNYXRjaGVyID0gJC5mbi5zZWxlY3QyLmRlZmF1bHRzLmRlZmF1bHRzLm1hdGNoZXI7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTWF0Y2hlcihwYXJhbXMsIGRhdGEpO1xuXHRcdFx0XHRpZiAocmVzdWx0ICYmIHBhcmFtcy50ZXJtICYmIGRhdGEudGV4dC50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHBhcmFtcy50ZXJtLnRvVXBwZXJDYXNlKCkpKSB7XG5cdFx0XHRcdFx0cmVzdWx0LmNoaWxkcmVuID0gZGF0YS5jaGlsZHJlbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3VzdG9tIG1hdGNoZXIgdGhhdCBtYXRjaGVzIGZyb20gdGhlIGJlZ2lubmluZyBvZiB3b3JkcyBvbmx5LlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdFx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHRcdCAqL1xuXHRcdFx0d29yZEJlZ2lubmluZzogKHBhcmFtcywgZGF0YSkgPT4ge1xuXHRcdFx0XHRjb25zdCBvcmlnaW5hbE1hdGNoZXIgPSAkLmZuLnNlbGVjdDIuZGVmYXVsdHMuZGVmYXVsdHMubWF0Y2hlcjtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gb3JpZ2luYWxNYXRjaGVyKHBhcmFtcywgZGF0YSk7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQhcGFyYW1zLnRlcm0gfHxcblx0XHRcdFx0XHQocmVzdWx0ICYmIG5ldyBSZWdFeHAoYFxcXFxiJHttdy51dGlsLmVzY2FwZVJlZ0V4cChwYXJhbXMudGVybSl9YCwgJ2knKS50ZXN0KHJlc3VsdC50ZXh0KSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBVbmRlcmxpbmUgbWF0Y2hlZCBwYXJ0IG9mIG9wdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHQgKi9cblx0XHRoaWdobGlnaHRTZWFyY2hNYXRjaGVzOiAoZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3Qgc2VhcmNoVGVybSA9IE1vcmViaXRzLnNlbGVjdDJTZWFyY2hRdWVyeTtcblx0XHRcdGlmICghc2VhcmNoVGVybSB8fCBkYXRhLmxvYWRpbmcpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEudGV4dDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGlkeCA9IGRhdGEudGV4dC50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpKTtcblx0XHRcdGlmIChpZHggPCAwKSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnRleHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJCgnPHNwYW4+JykuYXBwZW5kKFxuXHRcdFx0XHRkYXRhLnRleHQuc2xpY2UoMCwgaWR4KSxcblx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHQuY3NzKCd0ZXh0LWRlY29yYXRpb24nLCAndW5kZXJsaW5lJylcblx0XHRcdFx0XHQudGV4dChkYXRhLnRleHQuc2xpY2UoaWR4LCBpZHggKyBzZWFyY2hUZXJtLmxlbmd0aCkpLFxuXHRcdFx0XHRkYXRhLnRleHQuc2xpY2UoaWR4ICsgc2VhcmNoVGVybS5sZW5ndGgpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogSW50ZXJjZXB0IHF1ZXJ5IGFzIGl0IGlzIGhhcHBlbmluZywgZm9yIHVzZSBpbiBoaWdobGlnaHRTZWFyY2hNYXRjaGVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0XHQgKi9cblx0XHRxdWVyeUludGVyY2VwdG9yOiAocGFyYW1zKSA9PiB7XG5cdFx0XHRNb3JlYml0cy5zZWxlY3QyU2VhcmNoUXVlcnkgPSBwYXJhbXMgJiYgcGFyYW1zLnRlcm07XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBPcGVuIGRyb3Bkb3duIGFuZCBiZWdpbiBzZWFyY2ggd2hlbiB0aGUgYC5zZWxlY3QyLXNlbGVjdGlvbmAgaGFzXG5cdFx0ICogZm9jdXMgYW5kIGEga2V5IGlzIHByZXNzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2XG5cdFx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3NlbGVjdDIvc2VsZWN0Mi9pc3N1ZXMvMzI3OSNpc3N1ZWNvbW1lbnQtNDQyNTI0MTQ3fVxuXHRcdCAqL1xuXHRcdGF1dG9TdGFydDogKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYud2hpY2ggPCA0OCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgdGFyZ2V0ID0gJChldi50YXJnZXQpLmNsb3Nlc3QoJy5zZWxlY3QyLWNvbnRhaW5lcicpO1xuXHRcdFx0aWYgKCF0YXJnZXQubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRhcmdldCA9IHRhcmdldC5wcmV2KCk7XG5cdFx0XHR0YXJnZXQuc2VsZWN0Mignb3BlbicpO1xuXHRcdFx0Y29uc3Qgc2VhcmNoID0gdGFyZ2V0LmRhdGEoJ3NlbGVjdDInKS5kcm9wZG93bi4kc2VhcmNoIHx8IHRhcmdldC5kYXRhKCdzZWxlY3QyJykuc2VsZWN0aW9uLiRzZWFyY2g7XG5cdFx0XHQvLyBVc2UgRE9NIC5mb2N1cygpIHRvIHdvcmsgYXJvdW5kIGEgalF1ZXJ5IDMuNi4wIHJlZ3Jlc3Npb24gKGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvaXNzdWVzLzU5OTMpXG5cdFx0XHRzZWFyY2hbMF0uZm9jdXMoKTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogVGVtcG9yYXJpbHkgaGlkZSBhIHBhcnQgb2YgYSBzdHJpbmcgd2hpbGUgcHJvY2Vzc2luZyB0aGUgcmVzdCBvZiBpdC5cblx0ICogVXNlZCBieSB7QGxpbmsgTW9yZWJpdHMud2lraXRleHQucGFnZSNjb21tZW50T3V0SW1hZ2V8TW9yZWJpdHMud2lraXRleHQucGFnZS5jb21tZW50T3V0SW1hZ2V9LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgaW5pdGlhbCB0ZXh0IHRvIHByb2Nlc3MuXG5cdCAqIEBleGFtcGxlIGNvbnN0IHUgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIoJ0hlbGxvIHdvcmxkIDwhLS0gd29ybGQgLS0+IHdvcmxkJyk7XG5cdCAqIHUudW5iaW5kKCc8IS0tJywgJy0tPicpOyAvLyB0ZXh0IGluc2lkZSBjb21tZW50IHJlbWFpbnMgaW50YWN0XG5cdCAqIHUuY29udGVudCA9IHUuY29udGVudC5yZXBsYWNlKC93b3JsZC9nLCAnZWFydGgnKTtcblx0ICogdS5yZWJpbmQoKTsgLy8gZ2l2ZXMgJ0hlbGxvIGVhcnRoIDwhLS0gd29ybGQgLS0+IGVhcnRoJ1xuXHQgKi9cblx0TW9yZWJpdHMudW5iaW5kZXIgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdFx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0LyoqIFRoZSB0ZXh0IGJlaW5nIHByb2Nlc3NlZC4gKi9cblx0XHR0aGlzLmNvbnRlbnQgPSBzdHJpbmc7XG5cdFx0dGhpcy5jb3VudGVyID0gMDtcblx0XHR0aGlzLmhpc3RvcnkgPSB7fTtcblx0XHR0aGlzLnByZWZpeCA9IGAlVU5JUTo6JHtNYXRoLnJhbmRvbSgpfTo6YDtcblx0XHR0aGlzLnBvc3RmaXggPSAnOjpVTklRJSc7XG5cdH07XG5cdE1vcmViaXRzLnVuYmluZGVyLnByb3RvdHlwZSA9IHtcblx0XHQvKipcblx0XHQgKiBIaWRlIHRoZSByZWdpb24gZW5jYXBzdWxhdGVkIGJ5IHRoZSBgcHJlZml4YCBhbmQgYHBvc3RmaXhgIGZyb21cblx0XHQgKiBzdHJpbmcgcHJvY2Vzc2luZy4gIGBwcmVmaXhgIGFuZCBgcG9zdGZpeGAgd2lsbCBiZSB1c2VkIGluIGFcblx0XHQgKiBSZWdFeHAsIHNvIGl0ZW1zIHRoYXQgbmVlZCBlc2NhcGluZyBzaG91bGQgYmUgdXNlIGBcXFxcYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcG9zdGZpeFxuXHRcdCAqIEB0aHJvd3MgSWYgZWl0aGVyIGBwcmVmaXhgIG9yIGBwb3N0Zml4YCBpcyBtaXNzaW5nLlxuXHRcdCAqL1xuXHRcdHVuYmluZChwcmVmaXgsIHBvc3RmaXgpIHtcblx0XHRcdGlmICghcHJlZml4IHx8ICFwb3N0Zml4KSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQm90aCBwcmVmaXggYW5kIHBvc3RmaXggbXVzdCBiZSBwcm92aWRlZCcpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGAke3ByZWZpeH0oW1xcXFxzXFxcXFNdKj8pJHtwb3N0Zml4fWAsICdnJyk7XG5cdFx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQucmVwbGFjZShyZSwgTW9yZWJpdHMudW5iaW5kZXIuZ2V0Q2FsbGJhY2sodGhpcykpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVzdG9yZSB0aGUgaGlkZGVuIHBvcnRpb24gb2YgdGhlIGBjb250ZW50YCBzdHJpbmcuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcHJvY2Vzc2VkIG91dHB1dC5cblx0XHQgKi9cblx0XHRyZWJpbmQoKSB7XG5cdFx0XHRsZXQge2NvbnRlbnR9ID0gdGhpcztcblx0XHRcdGZvciAoY29uc3QgY3VycmVudCBpbiB0aGlzLmhpc3RvcnkpIHtcblx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHRoaXMuaGlzdG9yeSwgY3VycmVudCkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKGN1cnJlbnQsIHRoaXMuaGlzdG9yeVtjdXJyZW50XSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9LFxuXHRcdHByZWZpeDogbnVsbCxcblx0XHQvLyAlVU5JUTo6MC41OTU1OTgxNjQ0OTM4MzI0Ojpcblx0XHRwb3N0Zml4OiBudWxsLFxuXHRcdC8vIDo6VU5JUSVcblx0XHRjb250ZW50OiBudWxsLFxuXHRcdC8vIHN0cmluZ1xuXHRcdGNvdW50ZXI6IG51bGwsXG5cdFx0Ly8gMCsrXG5cdFx0aGlzdG9yeTogbnVsbCwgLy8ge31cblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSB7dHlwZW9mIE1vcmViaXRzfSBzZWxmXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy51bmJpbmRlclxuXHQgKi9cblx0TW9yZWJpdHMudW5iaW5kZXIuZ2V0Q2FsbGJhY2sgPSAoc2VsZikgPT4ge1xuXHRcdHJldHVybiAobWF0Y2gpID0+IHtcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBzZWxmLnByZWZpeCArIHNlbGYuY291bnRlciArIHNlbGYucG9zdGZpeDtcblx0XHRcdHNlbGYuaGlzdG9yeVtjdXJyZW50XSA9IG1hdGNoO1xuXHRcdFx0KytzZWxmLmNvdW50ZXI7XG5cdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHR9O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLmRhdGUgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQ3JlYXRlIGEgZGF0ZSBvYmplY3Qgd2l0aCBlbmhhbmNlZCBwcm9jZXNzaW5nIGNhcGFiaWxpdGllcywgYSBsYVxuXHQgKiB7QGxpbmsgaHR0cHM6Ly9tb21lbnRqcy5jb20vfG1vbWVudC5qc30uIE1lZGlhV2lraSB0aW1lc3RhbXAgZm9ybWF0IGlzIGFsc29cblx0ICogYWNjZXB0YWJsZSwgaW4gYWRkaXRpb24gdG8gZXZlcnl0aGluZyB0aGF0IEpTIERhdGUoKSBhY2NlcHRzLlxuXHQgKlxuXHQgKiBAcGFyYW0gey4uLmFueX0gYXJnc1xuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqL1xuXHRNb3JlYml0cy5kYXRlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHQvLyBDaGVjayBNZWRpYVdpa2kgZm9ybWF0c1xuXHRcdC8vIE11c3QgYmUgZmlyc3Qgc2luY2UgZmlyZWZveCBlcnJvbmVvdXNseSBhY2NlcHRzIHRoZSB0aW1lc3RhbXBcblx0XHQvLyBmb3JtYXQsIHNhbnMgdGltZXpvbmUgKFNlZSBhbHNvOiAjOTIxLCAjOTM2LCAjMTE3NCwgIzExODcpLCBhbmQgdGhlXG5cdFx0Ly8gMTQtZGlnaXQgc3RyaW5nIHdpbGwgYmUgaW50ZXJwcmV0ZWQgZGlmZmVyZW50bHkuXG5cdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRjb25zdCBbcGFyYW1dID0gYXJncztcblx0XHRcdGlmICgvXlxcZHsxNH0kLy50ZXN0KHBhcmFtKSkge1xuXHRcdFx0XHQvLyBZWVlZTU1EREhIbW1zc1xuXHRcdFx0XHRjb25zdCBkaWdpdE1hdGNoID0gLyhcXGR7NH0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8uZXhlYyhwYXJhbSk7XG5cdFx0XHRcdGlmIChkaWdpdE1hdGNoKSB7XG5cdFx0XHRcdFx0Ly8gLi4uLi4geWVhciAuLi4gbW9udGggLi4gZGF0ZSAuLi4gaG91ciAuLi4uIG1pbnV0ZSAuLi4uLiBzZWNvbmRcblx0XHRcdFx0XHR0aGlzLl9kID0gbmV3IERhdGUoXG5cdFx0XHRcdFx0XHRSZWZsZWN0LmFwcGx5KERhdGUuVVRDLCBudWxsLCBbXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbMV0sXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbMl0gLSAxLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzNdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzRdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzVdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzZdLFxuXHRcdFx0XHRcdFx0XSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gV2lraXRleHQgc2lnbmF0dXJlIHRpbWVzdGFtcFxuXHRcdFx0XHRjb25zdCBkYXRlUGFydHMgPSBNb3JlYml0cy5sMTBuLnNpZ25hdHVyZVRpbWVzdGFtcEZvcm1hdChwYXJhbSk7XG5cdFx0XHRcdGlmIChkYXRlUGFydHMpIHtcblx0XHRcdFx0XHR0aGlzLl9kID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgZGF0ZVBhcnRzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCF0aGlzLl9kKSB7XG5cdFx0XHQvLyBUcnkgc3RhbmRhcmQgZGF0ZVxuXHRcdFx0dGhpcy5fZCA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoRGF0ZSwgW0RhdGUsIC4uLmdlbmVyYXRlQXJyYXkoYXJncyldKSkoKTtcblx0XHR9XG5cdFx0Ly8gU3RpbGwgbm8/XG5cdFx0aWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuXHRcdFx0bXcubG9nLndhcm4oJ0ludmFsaWQgTW9yZWJpdHMuZGF0ZSBpbml0aWFsaXNhdGlvbjonLCBhcmdzKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBMb2NhbGl6ZWQgc3RyaW5ncyBmb3IgZGF0ZSBwcm9jZXNzaW5nLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuZGF0ZVxuXHQgKiBAdHlwZSB7b2JqZWN0LjxzdHJpbmcsIHN0cmluZz59XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IG1vbnRoc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBtb250aHNTaG9ydFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBkYXlzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGRheXNTaG9ydFxuXHQgKiBAcHJvcGVydHkge29iamVjdC48c3RyaW5nLCBzdHJpbmc+fSByZWxhdGl2ZVRpbWVzXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEgPSB7XG5cdFx0Ly8gbWVzc2FnZSBuYW1lcyBoZXJlIGNvcnJlc3BvbmQgdG8gTWVkaWFXaWtpIG1lc3NhZ2UgbmFtZXNcblx0XHQvLyBObyBpMThuIGF0IHRoaXMgdGltZVxuXHRcdG1vbnRoczogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxuXHRcdG1vbnRoc1Nob3J0OiBbJzHmnIgnLCAnMuaciCcsICcz5pyIJywgJzTmnIgnLCAnNeaciCcsICc25pyIJywgJzfmnIgnLCAnOOaciCcsICc55pyIJywgJzEw5pyIJywgJzEx5pyIJywgJzEy5pyIJ10sXG5cdFx0ZGF5czogWyfmmJ/mnJ/ml6UnLCAn5pif5pyf5LiAJywgJ+aYn+acn+S6jCcsICfmmJ/mnJ/kuIknLCAn5pif5pyf5ZubJywgJ+aYn+acn+S6lCcsICfmmJ/mnJ/lha0nXSxcblx0XHRkYXlzU2hvcnQ6IFsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ10sXG5cdFx0cmVsYXRpdmVUaW1lczoge1xuXHRcdFx0dGhpc0RheTogJ1vku4rlpKldQSBoaDptbScsXG5cdFx0XHRwcmV2RGF5OiAnW+aYqOWkqV1BIGhoOm1tJyxcblx0XHRcdG5leHREYXk6ICdb5piO5aSpXUEgaGg6bW0nLFxuXHRcdFx0dGhpc1dlZWs6ICdkZGRkQSBoaDptbScsXG5cdFx0XHRwYXN0V2VlazogJ1vkuIpdZGRkZEEgaGg6bW0nLFxuXHRcdFx0b3RoZXI6ICdZWVlZLU1NLUREJyxcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogTWFwIHVuaXRzIHdpdGggZ2V0dGVyL3NldHRlciBmdW5jdGlvbiBuYW1lcywgZm9yIGBhZGRgIGFuZCBgc3VidHJhY3RgXG5cdCAqIG1ldGhvZHMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5kYXRlXG5cdCAqIEB0eXBlIHtvYmplY3QuPHN0cmluZywgc3RyaW5nPn1cblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IHNlY29uZHNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IG1pbnV0ZXNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGhvdXJzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkYXlzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB3ZWVrc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gbW9udGhzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB5ZWFyc1xuXHQgKi9cblx0TW9yZWJpdHMuZGF0ZS51bml0TWFwID0ge1xuXHRcdHNlY29uZHM6ICdTZWNvbmRzJyxcblx0XHRtaW51dGVzOiAnTWludXRlcycsXG5cdFx0aG91cnM6ICdIb3VycycsXG5cdFx0ZGF5czogJ0RhdGUnLFxuXHRcdHdlZWtzOiAnV2VlaycsXG5cdFx0Ly8gTm90IGEgZnVuY3Rpb24gYnV0IGhhbmRsZWQgaW4gYGFkZGAgdGhyb3VnaCBjdW5uaW5nIHVzZSBvZiBtdWx0aXBsaWNhdGlvblxuXHRcdG1vbnRoczogJ01vbnRoJyxcblx0XHR5ZWFyczogJ0Z1bGxZZWFyJyxcblx0fTtcblx0TW9yZWJpdHMuZGF0ZS5wcm90b3R5cGUgPSB7XG5cdFx0LyoqIEByZXR1cm5zIHtib29sZWFufSAqL1xuXHRcdGlzVmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gIU51bWJlci5pc05hTih0aGlzLmdldFRpbWUoKSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0geyhEYXRlfE1vcmViaXRzLmRhdGUpfSBkYXRlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNCZWZvcmUoZGF0ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VGltZSgpIDwgZGF0ZS5nZXRUaW1lKCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0geyhEYXRlfE1vcmViaXRzLmRhdGUpfSBkYXRlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNBZnRlcihkYXRlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUaW1lKCkgPiBkYXRlLmdldFRpbWUoKTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ01vbnRoTmFtZSgpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzW3RoaXMuZ2V0VVRDTW9udGgoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRVVENNb250aE5hbWVBYmJyZXYoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1Nob3J0W3RoaXMuZ2V0VVRDTW9udGgoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRNb250aE5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1t0aGlzLmdldE1vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0TW9udGhOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNTaG9ydFt0aGlzLmdldE1vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0VVRDRGF5TmFtZSgpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1t0aGlzLmdldFVUQ0RheSgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ0RheU5hbWVBYmJyZXYoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNTaG9ydFt0aGlzLmdldFVUQ0RheSgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldERheU5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNbdGhpcy5nZXREYXkoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXREYXlOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzU2hvcnRbdGhpcy5nZXREYXkoKV07XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGQgYSBnaXZlbiBudW1iZXIgb2YgbWludXRlcywgaG91cnMsIGRheXMsIHdlZWtzLCBtb250aHMsIG9yIHllYXJzIHRvIHRoZSBkYXRlLlxuXHRcdCAqIFRoaXMgaXMgZG9uZSBpbi1wbGFjZS4gVGhlIG1vZGlmaWVkIGRhdGUgb2JqZWN0IGlzIGFsc28gcmV0dXJuZWQsIGFsbG93aW5nIGNoYWluaW5nLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFNob3VsZCBiZSBhbiBpbnRlZ2VyLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB1bml0XG5cdFx0ICogQHRocm93cyBJZiBpbnZhbGlkIG9yIHVuc3VwcG9ydGVkIHVuaXQgaXMgZ2l2ZW4uXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLmRhdGV9XG5cdFx0ICovXG5cdFx0YWRkKG51bWJlciwgdW5pdCkge1xuXHRcdFx0bGV0IG51bSA9IE51bWJlci5wYXJzZUludChudW1iZXIsIDEwKTsgLy8gbm9ybWFsaXplXG5cdFx0XHRpZiAoTnVtYmVyLmlzTmFOKG51bSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBudW1iZXIgXCIke251bWJlcn1cIiBwcm92aWRlZC5gKTtcblx0XHRcdH1cblx0XHRcdHVuaXQgPSB1bml0LnRvTG93ZXJDYXNlKCk7IC8vIG5vcm1hbGl6ZVxuXHRcdFx0Y29uc3Qge3VuaXRNYXB9ID0gTW9yZWJpdHMuZGF0ZTtcblx0XHRcdGxldCB1bml0Tm9ybSA9IHVuaXRNYXBbdW5pdF0gfHwgdW5pdE1hcFtgJHt1bml0fXNgXTsgLy8gc28gdGhhdCBib3RoIHNpbmd1bGFyIGFuZCAgcGx1cmFsIGZvcm1zIHdvcmtcblx0XHRcdGlmICh1bml0Tm9ybSkge1xuXHRcdFx0XHQvLyBObyBidWlsdC1pbiB3ZWVrIGZ1bmN0aW9ucywgc28gcmF0aGVyIHRoYW4gYnVpbGQgb3V0IElTTydzIGdldFdlZWsvc2V0V2VlaywganVzdCBtdWx0aXBseVxuXHRcdFx0XHQvLyBQcm9iYWJseSBjYW4ndCBiZSB1c2VkIGZvciBKdWxpYW4tPkdyZWdvcmlhbiBjaGFuZ2VvdmVycywgZXRjLlxuXHRcdFx0XHRpZiAodW5pdE5vcm0gPT09ICdXZWVrJykge1xuXHRcdFx0XHRcdHVuaXROb3JtID0gJ0RhdGUnO1xuXHRcdFx0XHRcdG51bSAqPSA3O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXNbYHNldCR7dW5pdE5vcm19YF0odGhpc1tgZ2V0JHt1bml0Tm9ybX1gXSgpICsgbnVtKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdW5pdCBcIiR7dW5pdH1cIjogT25seSAke09iamVjdC5rZXlzKHVuaXRNYXApLmpvaW4oJywgJyl9IGFyZSBhbGxvd2VkLmApO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU3VidHJhY3RzIGEgZ2l2ZW4gbnVtYmVyIG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCB3ZWVrcywgbW9udGhzLCBvciB5ZWFycyB0byB0aGUgZGF0ZS5cblx0XHQgKiBUaGlzIGlzIGRvbmUgaW4tcGxhY2UuIFRoZSBtb2RpZmllZCBkYXRlIG9iamVjdCBpcyBhbHNvIHJldHVybmVkLCBhbGxvd2luZyBjaGFpbmluZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBTaG91bGQgYmUgYW4gaW50ZWdlci5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pdFxuXHRcdCAqIEB0aHJvd3MgSWYgaW52YWxpZCBvciB1bnN1cHBvcnRlZCB1bml0IGlzIGdpdmVuLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5kYXRlfVxuXHRcdCAqL1xuXHRcdHN1YnRyYWN0KG51bWJlciwgdW5pdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYWRkKC1udW1iZXIsIHVuaXQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRm9ybWF0IHRoZSBkYXRlIGludG8gYSBzdHJpbmcgcGVyIHRoZSBnaXZlbiBmb3JtYXQgc3RyaW5nLlxuXHRcdCAqIFJlcGxhY2VtZW50IHN5bnRheCBpcyBhIHN1YnNldCBvZiB0aGF0IGluIG1vbWVudC5qczpcblx0XHQgKlxuXHRcdCAqIHwgU3ludGF4IHwgT3V0cHV0IHxcblx0XHQgKiB8LS0tLS0tLS18LS0tLS0tLS18XG5cdFx0ICogfCBIIHwgSG91cnMgKDI0LWhvdXIpIHxcblx0XHQgKiB8IEhIIHwgSG91cnMgKDI0LWhvdXIsIHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgaCB8IEhvdXJzICgxMi1ob3VyKSB8XG5cdFx0ICogfCBoaCB8IEhvdXJzICgxMi1ob3VyLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IEEgfCBBTSBvciBQTSB8XG5cdFx0ICogfCBtIHwgTWludXRlcyB8XG5cdFx0ICogfCBtbSB8IE1pbnV0ZXMgKHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgcyB8IFNlY29uZHMgfFxuXHRcdCAqIHwgc3MgfCBTZWNvbmRzIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IFNTUyB8IE1pbGxpc2Vjb25kcyBmcmFnbWVudCwgMyBkaWdpdHMgfFxuXHRcdCAqIHwgZCB8IERheSBudW1iZXIgb2YgdGhlIHdlZWsgKFN1bj0wKSB8XG5cdFx0ICogfCBkZGQgfCBBYmJyZXZpYXRlZCBkYXkgbmFtZSB8XG5cdFx0ICogfCBkZGRkIHwgRnVsbCBkYXkgbmFtZSB8XG5cdFx0ICogfCBEIHwgRGF0ZSB8XG5cdFx0ICogfCBERCB8IERhdGUgKHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgTSB8IE1vbnRoIG51bWJlciAoMS1pbmRleGVkKSB8XG5cdFx0ICogfCBNTSB8IE1vbnRoIG51bWJlciAoMS1pbmRleGVkLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IE1NTSB8IEFiYnJldmlhdGVkIG1vbnRoIG5hbWUgfFxuXHRcdCAqIHwgTU1NTSB8IEZ1bGwgbW9udGggbmFtZSB8XG5cdFx0ICogfCBZIHwgWWVhciB8XG5cdFx0ICogfCBZWSB8IEZpbmFsIHR3byBkaWdpdHMgb2YgeWVhciAoMjAgZm9yIDIwMjAsIDQyIGZvciAxOTQyKSB8XG5cdFx0ICogfCBZWVlZIHwgWWVhciAoc2FtZSBhcyBgWWApIHxcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRzdHIgLSBGb3JtYXQgdGhlIGRhdGUgaW50byBhIHN0cmluZywgdXNpbmdcblx0XHQgKiB0aGUgcmVwbGFjZW1lbnQgc3ludGF4LiAgVXNlIGBbYCBhbmQgYF1gIHRvIGVzY2FwZSBpdGVtcy4gIElmIG5vdFxuXHRcdCAqIHByb3ZpZGVkLCB3aWxsIHJldHVybiB0aGUgSVNPLTg2MDEtZm9ybWF0dGVkIHN0cmluZy5cblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gW3pvbmU9c3lzdGVtXSAtIGBzeXN0ZW1gIChmb3IgYnJvd3Nlci1kZWZhdWx0IHRpbWUgem9uZSksXG5cdFx0ICogYHV0Y2AsIG9yIHNwZWNpZnkgYSB0aW1lIHpvbmUgYXMgbnVtYmVyIG9mIG1pbnV0ZXMgcmVsYXRpdmUgdG8gVVRDLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Zm9ybWF0KGZvcm1hdHN0ciwgem9uZSkge1xuXHRcdFx0aWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuXHRcdFx0XHRyZXR1cm4gJ0ludmFsaWQgZGF0ZSc7IC8vIFB1dCB0aGUgdHJ1dGggb3V0LCBwcmVmZXJhYmxlIHRvIFwiTmFOTmFOTmFuIE5hTjpOYU5cIiBvciB3aGF0ZXZlclxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdWRhdGUgPSB0aGlzO1xuXHRcdFx0Ly8gY3JlYXRlIGEgbmV3IGRhdGUgb2JqZWN0IHRoYXQgd2lsbCBjb250YWluIHRoZSBkYXRlIHRvIGRpc3BsYXkgYXMgc3lzdGVtIHRpbWVcblx0XHRcdGlmICh6b25lID09PSAndXRjJykge1xuXHRcdFx0XHR1ZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHRoaXMuZ2V0VGltZSgpKS5hZGQodGhpcy5nZXRUaW1lem9uZU9mZnNldCgpLCAnbWludXRlcycpO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygem9uZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Ly8gY29udmVydCB0byB1dGMsIHRoZW4gYWRkIHRoZSB1dGMgb2Zmc2V0IGdpdmVuXG5cdFx0XHRcdHVkYXRlID0gbmV3IE1vcmViaXRzLmRhdGUodGhpcy5nZXRUaW1lKCkpLmFkZCh0aGlzLmdldFRpbWV6b25lT2Zmc2V0KCkgKyB6b25lLCAnbWludXRlcycpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZGVmYXVsdCB0byBJU09TdHJpbmdcblx0XHRcdGlmICghZm9ybWF0c3RyKSB7XG5cdFx0XHRcdHJldHVybiB1ZGF0ZS50b0lTT1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFkID0gKG51bSwgbGVuKSA9PiB7XG5cdFx0XHRcdGxlbiB8fD0gMjsgLy8gVXAgdG8gbGVuZ3RoIG9mIDAwICsgMVxuXHRcdFx0XHRyZXR1cm4gYDAwJHtudW19YC50b1N0cmluZygpLnNsaWNlKDAgLSBsZW4pO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGgyNCA9IHVkYXRlLmdldEhvdXJzKCk7XG5cdFx0XHRjb25zdCBtID0gdWRhdGUuZ2V0TWludXRlcygpO1xuXHRcdFx0Y29uc3QgcyA9IHVkYXRlLmdldFNlY29uZHMoKTtcblx0XHRcdGNvbnN0IG1zID0gdWRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cdFx0XHRjb25zdCBEID0gdWRhdGUuZ2V0RGF0ZSgpO1xuXHRcdFx0Y29uc3QgTSA9IHVkYXRlLmdldE1vbnRoKCkgKyAxO1xuXHRcdFx0Y29uc3QgWSA9IHVkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRjb25zdCBoMTIgPSBoMjQgJSAxMiB8fCAxMjtcblx0XHRcdGNvbnN0IGFtT3JQbSA9IGgyNCA+PSAxMiA/ICfkuIvljYgnIDogJ+S4iuWNiCc7XG5cdFx0XHRjb25zdCByZXBsYWNlbWVudE1hcCA9IHtcblx0XHRcdFx0SEg6IHBhZChoMjQpLFxuXHRcdFx0XHRIOiBoMjQsXG5cdFx0XHRcdGhoOiBwYWQoaDEyKSxcblx0XHRcdFx0aDogaDEyLFxuXHRcdFx0XHRBOiBhbU9yUG0sXG5cdFx0XHRcdG1tOiBwYWQobSksXG5cdFx0XHRcdG0sXG5cdFx0XHRcdHNzOiBwYWQocyksXG5cdFx0XHRcdHMsXG5cdFx0XHRcdFNTUzogcGFkKG1zLCAzKSxcblx0XHRcdFx0ZGRkZDogdWRhdGUuZ2V0RGF5TmFtZSgpLFxuXHRcdFx0XHRkZGQ6IHVkYXRlLmdldERheU5hbWVBYmJyZXYoKSxcblx0XHRcdFx0ZDogdWRhdGUuZ2V0RGF5KCksXG5cdFx0XHRcdEREOiBwYWQoRCksXG5cdFx0XHRcdEQsXG5cdFx0XHRcdE1NTU06IHVkYXRlLmdldE1vbnRoTmFtZSgpLFxuXHRcdFx0XHRNTU06IHVkYXRlLmdldE1vbnRoTmFtZUFiYnJldigpLFxuXHRcdFx0XHRNTTogcGFkKE0pLFxuXHRcdFx0XHRNLFxuXHRcdFx0XHRZWVlZOiBZLFxuXHRcdFx0XHRZWTogcGFkKFkgJSAxMDApLFxuXHRcdFx0XHRZLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKGZvcm1hdHN0cik7IC8vIGVzY2FwZSBzdHVmZiBiZXR3ZWVuIFsuLi5dXG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJ1xcXFxbJywgJ1xcXFxdJyk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKFxuXHRcdFx0XHQvKiBSZWdleCBub3Rlczpcblx0XHRcdFx0ICogZChkezIsM30pPyBtYXRjaGVzIGV4YWN0bHkgMSwgMyBvciA0IG9jY3VycmVuY2VzIG9mICdkJyAoJ2RkJyBpcyB0cmVhdGVkIGFzIGEgZG91YmxlIG1hdGNoIG9mICdkJylcblx0XHRcdFx0ICogWXsxLDJ9KFl7Mn0pPyBtYXRjaGVzIGV4YWN0bHkgMSwgMiBvciA0IG9jY3VycmVuY2VzIG9mICdZJ1xuXHRcdFx0XHQgKi9cblx0XHRcdFx0L0h7MSwyfXxoezEsMn18bXsxLDJ9fHN7MSwyfXxTU1N8ZChkezIsM30pP3xEezEsMn18TXsxLDR9fFl7MSwyfShZezJ9KT98QS9nLFxuXHRcdFx0XHQobWF0Y2gpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZW1lbnRNYXBbbWF0Y2hdO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHVuYmluZGVyLnJlYmluZCgpLnJlcGxhY2UoL1xcWyguKj8pXFxdL2csICckMScpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2l2ZXMgYSByZWFkYWJsZSByZWxhdGl2ZSB0aW1lIHN0cmluZyBzdWNoIGFzIFwiWWVzdGVyZGF5IGF0IDY6NDMgUE1cIiBvciBcIkxhc3QgVGh1cnNkYXkgYXQgMTE6NDUgQU1cIi5cblx0XHQgKiBTaW1pbGFyIHRvIGBjYWxlbmRhcmAgaW4gbW9tZW50LmpzLCBidXQgd2l0aCB0aW1lIHpvbmUgc3VwcG9ydC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBbem9uZT1zeXN0ZW1dIC0gJ3N5c3RlbScgKGZvciBicm93c2VyLWRlZmF1bHQgdGltZSB6b25lKSxcblx0XHQgKiAndXRjJyAoZm9yIFVUQyksIG9yIHNwZWNpZnkgYSB0aW1lIHpvbmUgYXMgbnVtYmVyIG9mIG1pbnV0ZXMgcGFzdCBVVEMuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRjYWxlbmRhcih6b25lKSB7XG5cdFx0XHQvLyBaZXJvIG91dCB0aGUgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgYW5kIG1pbGxpc2Vjb25kcyAtIGtlZXBpbmcgb25seSB0aGUgZGF0ZTtcblx0XHRcdC8vIGZpbmQgdGhlIGRpZmZlcmVuY2UuIE5vdGUgdGhhdCBzZXRIb3VycygpIHJldHVybnMgdGhlIHNhbWUgdGhpbmcgYXMgZ2V0VGltZSgpLlxuXHRcdFx0Y29uc3QgZGF0ZURpZmYgPSAobmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKSAtIG5ldyBEYXRlKHRoaXMpLnNldEhvdXJzKDAsIDAsIDAsIDApKSAvIDguNjRlNztcblx0XHRcdHN3aXRjaCAodHJ1ZSkge1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID09PSAwOlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy50aGlzRGF5LCB6b25lKTtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA9PT0gMTpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMucHJldkRheSwgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPiAwICYmIGRhdGVEaWZmIDwgNzpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMucGFzdFdlZWssIHpvbmUpO1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID09PSAtMTpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMubmV4dERheSwgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPCAwICYmIGRhdGVEaWZmID4gLTc6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnRoaXNXZWVrLCB6b25lKTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMub3RoZXIsIHpvbmUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2V0IGEgcmVndWxhciBleHByZXNzaW9uIHRoYXQgbWF0Y2hlcyB3aWtpdGV4dCBzZWN0aW9uIHRpdGxlcywgc3VjaFxuXHRcdCAqIGFzIGA9PURlY2VtYmVyIDIwMTk9PWAgb3IgYD09PSBKYW4gMjAxOCA9PT1gLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge1JlZ0V4cH1cblx0XHQgKi9cblx0XHRtb250aEhlYWRlclJlZ2V4KCkge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBeKD09KylcXFxccyoke3RoaXMuZ2V0VVRDRnVsbFllYXIoKX3lubQoPzoke3RoaXMuZ2V0VVRDTW9udGhOYW1lKCl9fCR7dGhpcy5nZXRVVENNb250aE5hbWVBYmJyZXYoKX0pXFxcXHMqXFxcXDFgLFxuXHRcdFx0XHQnbWcnXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyBhIHdpa2l0ZXh0IHNlY3Rpb24gaGVhZGVyIHdpdGggdGhlIG1vbnRoIGFuZCB5ZWFyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtsZXZlbD0yXSAtIEhlYWRlciBsZXZlbC4gIFBhc3MgMCBmb3IganVzdCB0aGUgdGV4dFxuXHRcdCAqIHdpdGggbm8gd2lraXRleHQgbWFya2VycyAoPT0pLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0bW9udGhIZWFkZXIobGV2ZWwpIHtcblx0XHRcdC8vIERlZmF1bHQgdG8gMiwgYnV0IGFsbG93IGZvciAwIG9yIHN0cmluZ3kgbnVtYmVyc1xuXHRcdFx0bGV2ZWwgPSBOdW1iZXIucGFyc2VJbnQobGV2ZWwsIDEwKTtcblx0XHRcdGxldmVsID0gTnVtYmVyLmlzTmFOKGxldmVsKSA/IDIgOiBsZXZlbDtcblx0XHRcdGNvbnN0IGhlYWRlciA9ICc9Jy5yZXBlYXQobGV2ZWwpO1xuXHRcdFx0Y29uc3QgdGV4dCA9IGAke3RoaXMuZ2V0VVRDRnVsbFllYXIoKX3lubQke3RoaXMuZ2V0VVRDTW9udGhOYW1lKCl9YDtcblx0XHRcdGlmIChoZWFkZXIubGVuZ3RoKSB7XG5cdFx0XHRcdC8vIHdpa2l0ZXh0LWZvcm1hdHRlZCBoZWFkZXJcblx0XHRcdFx0cmV0dXJuIGAke2hlYWRlcn0gJHt0ZXh0fSAke2hlYWRlcn1gO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRleHQ7IC8vIEp1c3QgdGhlIHN0cmluZ1xuXHRcdH0sXG5cdH07XG5cdC8vIEFsbG93IG5hdGl2ZSBEYXRlLnByb3RvdHlwZSBtZXRob2RzIHRvIGJlIHVzZWQgb24gTW9yZWJpdHMuZGF0ZSBvYmplY3RzXG5cdGZvciAoY29uc3QgZnVuYyBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhEYXRlLnByb3RvdHlwZSkpIHtcblx0XHQvLyBFeGNsdWRlIG1ldGhvZHMgdGhhdCBjb2xsaWRlIHdpdGggUGFnZVRyaWFnZSdzIERhdGUuanMgZXh0ZXJuYWwsIHdoaWNoIGNsb2JiZXJzIG5hdGl2ZSBEYXRlXG5cdFx0aWYgKCFbJ2FkZCcsICdnZXREYXlOYW1lJywgJ2dldE1vbnRoTmFtZSddLmluY2x1ZGVzKGZ1bmMpKSB7XG5cdFx0XHRNb3JlYml0cy5kYXRlLnByb3RvdHlwZVtmdW5jXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9kW2Z1bmNdKC4uLmFyZ3MpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFZhcmlvdXMgb2JqZWN0cyBmb3Igd2lraSBlZGl0aW5nIGFuZCBBUEkgYWNjZXNzLCBpbmNsdWRpbmdcblx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBhbmQge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0uXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMud2lraVxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLndpa2kgPSB7fTtcblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkIGluIGZhdm9yIG9mIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0IGFzIG9mIE5vdmVtYmVyIDIwMjBcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmlzUGFnZVJlZGlyZWN0ID0gKCkgPT4ge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdCdbTW9yZWJpdHNdIE5PVEU6IE1vcmViaXRzLndpa2kuaXNQYWdlUmVkaXJlY3QgaGFzIGJlZW4gZGVwcmVjYXRlZCwgdXNlIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0IGluc3RlYWQuJ1xuXHRcdCk7XG5cdFx0cmV0dXJuIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0KCk7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQHR5cGUge251bWJlcn1cblx0ICovXG5cdE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA9IDA7XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdCA9IDA7XG5cdC8qKlxuXHQgKiBEaXNwbGF5IG1lc3NhZ2UgYW5kL29yIHJlZGlyZWN0IHRvIHBhZ2UgdXBvbiBjb21wbGV0aW9uIG9mIHRhc2tzLlxuXHQgKlxuXHQgKiBFdmVyeSBjYWxsIHRvIE1vcmViaXRzLndpa2kuYXBpLnBvc3QoKSByZXN1bHRzIGluIHRoZSBkaXNwYXRjaCBvZiBhblxuXHQgKiBhc3luY2hyb25vdXMgY2FsbGJhY2suIEVhY2ggY2FsbGJhY2sgY2FuIGluIHR1cm4gbWFrZSBhbiBhZGRpdGlvbmFsIGNhbGwgdG9cblx0ICogTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIHRvIGNvbnRpbnVlIGEgcHJvY2Vzc2luZyBzZXF1ZW5jZS4gQXQgdGhlXG5cdCAqIGNvbmNsdXNpb24gb2YgdGhlIGZpbmFsIGNhbGxiYWNrIG9mIGEgcHJvY2Vzc2luZyBzZXF1ZW5jZSwgaXQgaXMgbm90XG5cdCAqIHBvc3NpYmxlIHRvIHNpbXBseSByZXR1cm4gdG8gdGhlIG9yaWdpbmFsIGNhbGxlciBiZWNhdXNlIHRoZXJlIGlzIG5vIGNhbGxcblx0ICogc3RhY2sgbGVhZGluZyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0LiBJbnN0ZWFkLFxuXHQgKiBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpIGlzIGNhbGxlZCB0byBkaXNwbGF5IHRoZSByZXN1bHQgdG9cblx0ICogdGhlIHVzZXIgYW5kIHRvIHBlcmZvcm0gYW4gb3B0aW9uYWwgcGFnZSByZWRpcmVjdC5cblx0ICpcblx0ICogVGhlIGRldGVybWluYXRpb24gb2Ygd2hlbiB0byBjYWxsIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCkgaXNcblx0ICogbWFuYWdlZCB0aHJvdWdoIHRoZSBnbG9iYWxzIE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCBhbmRcblx0ICogTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdC4gTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IGlzXG5cdCAqIGluY3JlbWVudGVkIGF0IHRoZSBzdGFydCBvZiBldmVyeSBNb3JlYml0cy53aWtpLmFwaSBjYWxsIGFuZCBkZWNyZW1lbnRlZFxuXHQgKiBhZnRlciB0aGUgY29tcGxldGlvbiBvZiBhIGNhbGxiYWNrIGZ1bmN0aW9uLiBJZiBhIGNhbGxiYWNrIGZ1bmN0aW9uIGRvZXNcblx0ICogbm90IGNyZWF0ZSBhIG5ldyBNb3JlYml0cy53aWtpLmFwaSBvYmplY3QgYmVmb3JlIGV4aXRpbmcsIGl0IGlzIHRoZSBmaW5hbFxuXHQgKiBzdGVwIGluIHRoZSBwcm9jZXNzaW5nIGNoYWluIGFuZCBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpIHdpbGxcblx0ICogdGhlbiBiZSBjYWxsZWQuXG5cdCAqXG5cdCAqIE9wdGlvbmFsbHksIGNhbGxlcnMgbWF5IHVzZSBNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQoKSB0byBpbmRpY2F0ZSB0aGF0XG5cdCAqIHByb2Nlc3NpbmcgaXMgbm90IGNvbXBsZXRlIHVwb24gdGhlIGNvbmNsdXNpb24gb2YgdGhlIGZpbmFsIGNhbGxiYWNrXG5cdCAqIGZ1bmN0aW9uLiAgVGhpcyBpcyB1c2VkIGZvciBiYXRjaCBvcGVyYXRpb25zLiBUaGUgZW5kIG9mIGEgYmF0Y2ggaXNcblx0ICogc2lnbmFsZWQgYnkgY2FsbGluZyBNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQoKS5cblx0ICpcblx0ICogQHBhcmFtIHt0eXBlb2YgTW9yZWJpdHN9IHNlbGZcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkID0gKHNlbGYpID0+IHtcblx0XHRpZiAoLS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPD0gMCAmJiBNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0IDw9IDApIHtcblx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KHNlbGYpO1xuXHRcdH1cblx0fTtcblx0Ly8gQ2hhbmdlIHBlciBhY3Rpb24gd2FudGVkXG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCA9ICgpID0+IHtcblx0XHRpZiAoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlKSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMuYWN0aW9uQ29tcGxldGVkKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSk7XG5cdFx0fVxuXHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCkge1xuXHRcdFx0Ly8gaWYgaXQgaXNuJ3QgYSBVUkwsIG1ha2UgaXQgb25lLiBUT0RPOiBUaGlzIGJyZWFrcyBvbiB0aGUgYXJ0aWNsZXMgJ2h0dHA6Ly8nLCAnZnRwOi8vJywgYW5kIHNpbWlsYXIgb25lcy5cblx0XHRcdGlmICghL15cXHcrOlxcL1xcLy8udGVzdChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCkpIHtcblx0XHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QgPSBtdy51dGlsLmdldFVybChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCk7XG5cdFx0XHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5mb2xsb3dSZWRpcmVjdCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCArPSAnP3JlZGlyZWN0PW5vJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGxvY2F0aW9uID0gTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3Q7XG5cdFx0XHR9LCBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC50aW1lT3V0KTtcblx0XHR9XG5cdH07XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC50aW1lT3V0ID1cblx0XHR3aW5kb3cud3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0ID09PSB1bmRlZmluZWQgPyA1MDAwIDogd2luZG93LndwQWN0aW9uQ29tcGxldGVkVGltZU91dDtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0ID0gbnVsbDtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSA9IG51bGw7XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQgPSAoKSA9PiB7XG5cdFx0KytNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0O1xuXHR9O1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50ID0gKCkgPT4ge1xuXHRcdGlmICgtLU1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQgPD0gMCAmJiBNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPD0gMCkge1xuXHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKTtcblx0XHR9XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5hcGkgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQW4gZWFzeSB3YXkgdG8gdGFsayB0byB0aGUgTWVkaWFXaWtpIEFQSS4gIEFjY2VwdHMgZWl0aGVyIGpzb24gb3IgeG1sXG5cdCAqIChkZWZhdWx0KSBmb3JtYXRzOyBpZiBqc29uIGlzIHNlbGVjdGVkLCB3aWxsIGRlZmF1bHQgdG8gYGZvcm1hdHZlcnNpb249MmBcblx0ICogdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuICBTaW1pbGFybHksIGVuZm9yY2VzIG5ld2VyIGBlcnJvcmZvcm1hdGBzLFxuXHQgKiBkZWZhdWx0aW5nIHRvIGBodG1sYCBpZiB1bnNwZWNpZmllZC4gIGB1c2VsYW5nYCBlbmZvcmNlZCB0byB0aGUgd2lraSdzXG5cdCAqIGNvbnRlbnQgbGFuZ3VhZ2UuXG5cdCAqXG5cdCAqIEluIG5ldyBjb2RlLCB0aGUgdXNlIG9mIHRoZSBsYXN0IDMgcGFyYW1ldGVycyBzaG91bGQgYmUgYXZvaWRlZCwgaW5zdGVhZFxuXHQgKiB1c2Uge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpI3NldFN0YXR1c0VsZW1lbnR8c2V0U3RhdHVzRWxlbWVudCgpfSB0byBiaW5kXG5cdCAqIHRoZSBzdGF0dXMgZWxlbWVudCAoaWYgbmVlZGVkKSBhbmQgdXNlIGAudGhlbigpYCBvciBgLmNhdGNoKClgIG9uIHRoZVxuXHQgKiBwcm9taXNlIHJldHVybmVkIGJ5IGBwb3N0KClgLCByYXRoZXIgdGhhbiBzcGVjaWZ5IHRoZSBgb25TdWNjZXNzYCBvclxuXHQgKiBgb25GYWlsdXJlYCBjYWxsYmFja3MuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudEFjdGlvbiAtIFRoZSBjdXJyZW50IGFjdGlvbiAocmVxdWlyZWQpLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gcXVlcnkgLSBUaGUgcXVlcnkgKHJlcXVpcmVkKS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bC5cblx0ICogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IFtzdGF0dXNFbGVtZW50XSAtIEEgTW9yZWJpdHMuc3RhdHVzIG9iamVjdCB0byB1c2UgZm9yIHN0YXR1cyBtZXNzYWdlcy5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRXJyb3JdIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgaWYgYW4gZXJyb3Igb2NjdXJzLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hcGkgPSBmdW5jdGlvbiAoY3VycmVudEFjdGlvbiwgcXVlcnksIG9uU3VjY2Vzcywgc3RhdHVzRWxlbWVudCwgb25FcnJvcikge1xuXHRcdHRoaXMuY3VycmVudEFjdGlvbiA9IGN1cnJlbnRBY3Rpb247XG5cdFx0dGhpcy5xdWVyeSA9IHF1ZXJ5O1xuXHRcdHRoaXMucXVlcnkuYXNzZXJ0ID0gJ3VzZXInO1xuXHRcdC8vIEVuZm9yY2UgbmV3ZXIgZXJyb3IgZm9ybWF0cywgcHJlZmVycmluZyBodG1sXG5cdFx0aWYgKCFxdWVyeS5lcnJvcmZvcm1hdCB8fCAhWyd3aWtpdGV4dCcsICdwbGFpbnRleHQnXS5pbmNsdWRlcyhxdWVyeS5lcnJvcmZvcm1hdCkpIHtcblx0XHRcdHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPSAnaHRtbCc7XG5cdFx0fVxuXHRcdC8vIEV4cGxpY2l0bHkgdXNlIHRoZSB3aWtpJ3MgY29udGVudCBsYW5ndWFnZSB0byBtaW5pbWl6ZSBjb25mdXNpb24sXG5cdFx0Ly8gc2VlICMxMTc5IGZvciBkaXNjdXNzaW9uXG5cdFx0dGhpcy5xdWVyeS51c2VsYW5nIHx8PSAnY29udGVudCc7IC8vIFVzZSB3Z1VzZXJMYW5ndWFnZSBmb3IgcHJldmlld1xuXHRcdHRoaXMucXVlcnkuZXJyb3JsYW5nID0gJ3VzZWxhbmcnO1xuXHRcdHRoaXMucXVlcnkuZXJyb3JzdXNlbG9jYWwgPSAxO1xuXHRcdHRoaXMub25TdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdHRoaXMub25FcnJvciA9IG9uRXJyb3I7XG5cdFx0aWYgKHN0YXR1c0VsZW1lbnQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdHVzRWxlbWVudChzdGF0dXNFbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdGF0ZWxlbSA9IG5ldyBNb3JlYml0cy5zdGF0dXMoY3VycmVudEFjdGlvbik7XG5cdFx0fVxuXHRcdC8vIEpTT04gaXMgdXNlZCB0aHJvdWdob3V0IE1vcmViaXRzL1R3aW5rbGUsIGJ1dCB4bWwgcmVtYWlucyB0aGUgZGVmYXVsdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRpZiAoIXF1ZXJ5LmZvcm1hdCkge1xuXHRcdFx0dGhpcy5xdWVyeS5mb3JtYXQgPSAneG1sJztcblx0XHR9IGVsc2UgaWYgKHF1ZXJ5LmZvcm1hdCA9PT0gJ2pzb24nICYmICFxdWVyeS5mb3JtYXR2ZXJzaW9uKSB7XG5cdFx0XHR0aGlzLnF1ZXJ5LmZvcm1hdHZlcnNpb24gPSAnMic7XG5cdFx0fSBlbHNlIGlmICghWyd4bWwnLCAnanNvbiddLmluY2x1ZGVzKHF1ZXJ5LmZvcm1hdCkpIHtcblx0XHRcdHRoaXMuc3RhdGVsZW0uZXJyb3IoJ0ludmFsaWQgQVBJIGZvcm1hdDogb25seSB4bWwgYW5kIGpzb24gYXJlIHN1cHBvcnRlZC4nKTtcblx0XHR9XG5cdFx0Ly8gSWdub3JlIHRhZ3MgZm9yIHF1ZXJpZXMgYW5kIG1vc3QgY29tbW9uIHVuc3VwcG9ydGVkIGFjdGlvbnMsIHByb2R1Y2VzIHdhcm5pbmdzXG5cdFx0aWYgKHF1ZXJ5LmFjdGlvbiAmJiBbJ3F1ZXJ5JywgJ3dhdGNoJ10uaW5jbHVkZXMocXVlcnkuYWN0aW9uKSkge1xuXHRcdFx0ZGVsZXRlIHF1ZXJ5LnRhZ3M7XG5cdFx0fSBlbHNlIGlmICghcXVlcnkudGFncyAmJiBtb3JlYml0c1dpa2lDaGFuZ2VUYWcpIHtcblx0XHRcdHF1ZXJ5LnRhZ3MgPSBtb3JlYml0c1dpa2lDaGFuZ2VUYWc7XG5cdFx0fVxuXHR9O1xuXHRNb3JlYml0cy53aWtpLmFwaS5wcm90b3R5cGUgPSB7XG5cdFx0Y3VycmVudEFjdGlvbjogJycsXG5cdFx0b25TdWNjZXNzOiBudWxsLFxuXHRcdG9uRXJyb3I6IG51bGwsXG5cdFx0cGFyZW50OiB3aW5kb3csXG5cdFx0Ly8gdXNlIGdsb2JhbCBjb250ZXh0IGlmIHRoZXJlIGlzIG5vIHBhcmVudCBvYmplY3Rcblx0XHRxdWVyeTogbnVsbCxcblx0XHRyZXNwb25zZTogbnVsbCxcblx0XHRyZXNwb25zZVhNTDogbnVsbCxcblx0XHQvLyB1c2UgYHJlc3BvbnNlYCBpbnN0ZWFkOyByZXRhaW5lZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRzdGF0ZWxlbTogbnVsbCxcblx0XHQvLyB0aGlzIG5vbi1zdGFuZGFyZCBuYW1lIGtlcHQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cdFx0c3RhdHVzVGV4dDogbnVsbCxcblx0XHQvLyByZXN1bHQgcmVjZWl2ZWQgZnJvbSB0aGUgQVBJLCBub3JtYWxseSBcInN1Y2Nlc3NcIiBvciBcImVycm9yXCJcblx0XHRlcnJvckNvZGU6IG51bGwsXG5cdFx0Ly8gc2hvcnQgdGV4dCBlcnJvciBjb2RlLCBpZiBhbnksIGFzIGRvY3VtZW50ZWQgaW4gdGhlIE1lZGlhV2lraSBBUElcblx0XHRlcnJvclRleHQ6IG51bGwsXG5cdFx0Ly8gZnVsbCBlcnJvciBkZXNjcmlwdGlvbiwgaWYgYW55XG5cdFx0YmFkdG9rZW5SZXRyeTogZmFsc2UsXG5cdFx0Ly8gc2V0IHRvIHRydWUgaWYgdGhpcyBvbiBhIHJldHJ5IGF0dGVtcHRlZCBhZnRlciBhIGJhZHRva2VuIGVycm9yXG5cdFx0LyoqXG5cdFx0ICogS2VlcCB0cmFjayBvZiBwYXJlbnQgb2JqZWN0IGZvciBjYWxsYmFja3MuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IHBhcmVudFxuXHRcdCAqL1xuXHRcdHNldFBhcmVudChwYXJlbnQpIHtcblx0XHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdH0sXG5cdFx0LyoqIEBwYXJhbSB7TW9yZWJpdHMuc3RhdHVzfSBzdGF0dXNFbGVtZW50ICovXG5cdFx0c2V0U3RhdHVzRWxlbWVudChzdGF0dXNFbGVtZW50KSB7XG5cdFx0XHR0aGlzLnN0YXRlbGVtID0gc3RhdHVzRWxlbWVudDtcblx0XHRcdHRoaXMuc3RhdGVsZW0uc3RhdHVzKHRoaXMuY3VycmVudEFjdGlvbik7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDYXJyeSBvdXQgdGhlIHJlcXVlc3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gY2FsbGVyQWpheFBhcmFtZXRlcnMgLSBEbyBub3Qgc3BlY2lmeSBhIHBhcmFtZXRlciB1bmxlc3MgeW91IHJlYWxseVxuXHRcdCAqIHJlYWxseSB3YW50IHRvIGdpdmUgalF1ZXJ5IHNvbWUgZXh0cmEgcGFyYW1ldGVycy5cblx0XHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gLSBBIGpRdWVyeSBwcm9taXNlIG9iamVjdCB0aGF0IGlzIHJlc29sdmVkIG9yIHJlamVjdGVkIHdpdGggdGhlIGFwaSBvYmplY3QuXG5cdFx0ICovXG5cdFx0cG9zdChjYWxsZXJBamF4UGFyYW1ldGVycykge1xuXHRcdFx0KytNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7XG5cdFx0XHRjb25zdCBxdWVyeVN0cmluZ0FyciA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBbaSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnF1ZXJ5KSkge1xuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG5cdFx0XHRcdFx0cXVlcnlTdHJpbmdBcnJbcXVlcnlTdHJpbmdBcnIubGVuZ3RoXSA9XG5cdFx0XHRcdFx0XHRgJHtlbmNvZGVVUklDb21wb25lbnQoaSl9PSR7dmFsLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oJ3wnKX1gO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cXVlcnlTdHJpbmdBcnJbcXVlcnlTdHJpbmdBcnIubGVuZ3RoXSA9IGAke2VuY29kZVVSSUNvbXBvbmVudChpKX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nQXJyLmpvaW4oJyYnKS5yZXBsYWNlKC9eKC4qPykoXFxidG9rZW49W14mXSopJiguKikvLCAnJDEkMyYkMicpO1xuXHRcdFx0Ly8gdG9rZW4gc2hvdWxkIGFsd2F5cyBiZSB0aGUgbGFzdCBpdGVtIGluIHRoZSBxdWVyeSBzdHJpbmcgKGJ1ZyBUVy1CLTAwMTMpXG5cdFx0XHRjb25zdCBhamF4cGFyYW1zID0ge1xuXHRcdFx0XHRjb250ZXh0OiB0aGlzLFxuXHRcdFx0XHR0eXBlOiB0aGlzLnF1ZXJ5LmFjdGlvbiA9PT0gJ3F1ZXJ5JyA/ICdHRVQnIDogJ1BPU1QnLFxuXHRcdFx0XHR1cmw6IG13LnV0aWwud2lraVNjcmlwdCgnYXBpJyksXG5cdFx0XHRcdGRhdGE6IHF1ZXJ5U3RyaW5nLFxuXHRcdFx0XHRkYXRhVHlwZTogdGhpcy5xdWVyeS5mb3JtYXQsXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiBtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdC4uLmNhbGxlckFqYXhQYXJhbWV0ZXJzLFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiAkLmFqYXgoYWpheHBhcmFtcykudGhlbihcblx0XHRcdFx0ZnVuY3Rpb24gb25BUElzdWNjZXNzKHJlc3BvbnNlLCBzdGF0dXNUZXh0KSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcblx0XHRcdFx0XHR0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5cdFx0XHRcdFx0dGhpcy5yZXNwb25zZVhNTCA9IHJlc3BvbnNlO1xuXHRcdFx0XHRcdC8vIExpbWl0IHRvIGZpcnN0IGVycm9yXG5cdFx0XHRcdFx0aWYgKHRoaXMucXVlcnkuZm9ybWF0ID09PSAnanNvbicpIHtcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JDb2RlID0gcmVzcG9uc2UuZXJyb3JzICYmIHJlc3BvbnNlLmVycm9yc1swXS5jb2RlO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPT09ICdodG1sJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9IHJlc3BvbnNlLmVycm9ycyAmJiByZXNwb25zZS5lcnJvcnNbMF0uaHRtbDtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9PT0gJ3dpa2l0ZXh0JyB8fCB0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID09PSAncGxhaW50ZXh0Jykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9IHJlc3BvbnNlLmVycm9ycyAmJiByZXNwb25zZS5lcnJvcnNbMF0udGV4dDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5lcnJvckNvZGUgPSAkKHJlc3BvbnNlKS5maW5kKCdlcnJvcnMgZXJyb3InKS5lcSgwKS5hdHRyKCdjb2RlJyk7XG5cdFx0XHRcdFx0XHQvLyBTdWZmaWNpZW50IGZvciBodG1sLCB3aWtpdGV4dCwgb3IgcGxhaW50ZXh0IGVycm9yZm9ybWF0c1xuXHRcdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPSAkKHJlc3BvbnNlKS5maW5kKCdlcnJvcnMgZXJyb3InKS5lcSgwKS50ZXh0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5lcnJvckNvZGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHQvLyB0aGUgQVBJIGRpZG4ndCBsaWtlIHdoYXQgd2UgdG9sZCBpdCwgZS5nLiwgYmFkIGVkaXQgdG9rZW4gb3IgYW4gZXJyb3IgY3JlYXRpbmcgYSBwYWdlXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yZXR1cm5FcnJvcihjYWxsZXJBamF4UGFyYW1ldGVycyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGludm9rZSBzdWNjZXNzIGNhbGxiYWNrIGlmIG9uZSB3YXMgc3VwcGxpZWRcblx0XHRcdFx0XHRpZiAodGhpcy5vblN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdC8vIHNldCB0aGUgY2FsbGJhY2sgY29udGV4dCB0byB0aGlzLnBhcmVudCBmb3IgbmV3IGNvZGUgYW5kIHN1cHBseSB0aGUgQVBJIG9iamVjdFxuXHRcdFx0XHRcdFx0Ly8gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBjYWxsYmFjayAoZm9yIGxlZ2FjeSBjb2RlKVxuXHRcdFx0XHRcdFx0dGhpcy5vblN1Y2Nlc3MuY2FsbCh0aGlzLnBhcmVudCwgdGhpcyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGVsZW0uaW5mbygn5a6M5oiQJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkKCk7XG5cdFx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlV2l0aCh0aGlzLnBhcmVudCwgW3RoaXNdKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Ly8gb25seSBuZXR3b3JrIGFuZCBzZXJ2ZXIgZXJyb3JzIHJlYWNoIGhlcmUgLSBjb21wbGFpbnRzIGZyb20gdGhlIEFQSSBpdHNlbGYgYXJlIGNhdWdodCBpbiBzdWNjZXNzKClcblx0XHRcdFx0ZnVuY3Rpb24gb25BUElmYWlsdXJlKGVycm9yLCBzdGF0dXNUZXh0LCBlcnJvclRocm93bikge1xuXHRcdFx0XHRcdHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XG5cdFx0XHRcdFx0dGhpcy5lcnJvclRocm93biA9IGVycm9yVGhyb3duOyAvLyBmcmVxdWVudGx5IHVuZGVmaW5lZFxuXHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID1cblx0XHRcdFx0XHRcdHN0YXR1c1RleHQgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCflnKjosIPnlKhBUEnml7blj5HnlJ/kuobplJnor6/igJwnLCAn5Zyo5ZG85Y+rQVBJ5pmC55m855Sf5LqG6Yyv6Kqk44CMJykgK1xuXHRcdFx0XHRcdFx0ZXJyb3Iuc3RhdHVzVGV4dCArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneOAgicsICfjgI3jgIInKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yZXR1cm5FcnJvcigpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0cmV0dXJuRXJyb3IoY2FsbGVyQWpheFBhcmFtZXRlcnMpIHtcblx0XHRcdGlmICh0aGlzLmVycm9yQ29kZSA9PT0gJ2JhZHRva2VuJyAmJiAhdGhpcy5iYWR0b2tlblJldHJ5KSB7XG5cdFx0XHRcdHRoaXMuc3RhdGVsZW0ud2Fybih3aW5kb3cud2dVTFMoJ+aXoOaViOS7pOeJjO+8jOiOt+WPluaWsOeahOS7pOeJjOW5tumHjeivleKApuKApicsICfnhKHmlYjmrIrmnZbvvIzlj5blvpfmlrDnmoTmrIrmnZbkuKbph43oqabigKbigKYnKSk7XG5cdFx0XHRcdHRoaXMuYmFkdG9rZW5SZXRyeSA9IHRydWU7XG5cdFx0XHRcdC8vIEdldCBhIG5ldyBDU1JGIHRva2VuIGFuZCByZXRyeS4gSWYgdGhlIG9yaWdpbmFsIGFjdGlvbiBuZWVkcyBhIGRpZmZlcmVudFxuXHRcdFx0XHQvLyB0eXBlIG9mIGFjdGlvbiB0aGFuIENTUkYsIHdlIGRvIG9uZSBwb2ludGxlc3MgcmV0cnkgYmVmb3JlIGJhaWxpbmcgb3V0XG5cdFx0XHRcdHJldHVybiBNb3JlYml0cy53aWtpLmFwaS5nZXRUb2tlbigpLnRoZW4oKHRva2VuKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5xdWVyeS50b2tlbiA9IHRva2VuO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnBvc3QoY2FsbGVyQWpheFBhcmFtZXRlcnMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGVsZW0uZXJyb3IoYCR7dGhpcy5lcnJvclRleHR977yIJHt0aGlzLmVycm9yQ29kZX3vvIlgKTtcblx0XHRcdC8vIGludm9rZSBmYWlsdXJlIGNhbGxiYWNrIGlmIG9uZSB3YXMgc3VwcGxpZWRcblx0XHRcdGlmICh0aGlzLm9uRXJyb3IpIHtcblx0XHRcdFx0Ly8gc2V0IHRoZSBjYWxsYmFjayBjb250ZXh0IHRvIHRoaXMucGFyZW50IGZvciBuZXcgY29kZSBhbmQgc3VwcGx5IHRoZSBBUEkgb2JqZWN0XG5cdFx0XHRcdC8vIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2sgZm9yIGxlZ2FjeSBjb2RlXG5cdFx0XHRcdHRoaXMub25FcnJvci5jYWxsKHRoaXMucGFyZW50LCB0aGlzKTtcblx0XHRcdH1cblx0XHRcdC8vIGRvbid0IGNvbXBsZXRlIHRoZSBhY3Rpb24gc28gdGhhdCB0aGUgZXJyb3IgcmVtYWlucyBkaXNwbGF5ZWRcblx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0V2l0aCh0aGlzLnBhcmVudCwgW3RoaXNdKTtcblx0XHR9LFxuXHRcdGdldFN0YXR1c0VsZW1lbnQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZWxlbTtcblx0XHR9LFxuXHRcdGdldEVycm9yQ29kZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLmVycm9yQ29kZTtcblx0XHR9LFxuXHRcdGdldEVycm9yVGV4dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmVycm9yVGV4dDtcblx0XHR9LFxuXHRcdGdldFhNTCgpIHtcblx0XHRcdC8vIHJldGFpbmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgdXNlIGdldFJlc3BvbnNlKCkgaW5zdGVhZFxuXHRcdFx0cmV0dXJuIHRoaXMucmVzcG9uc2VYTUw7XG5cdFx0fSxcblx0XHRnZXRSZXNwb25zZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJlc3BvbnNlO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgd2lraXRleHQgZnJvbSBhIHBhZ2UuIENhY2hpbmcgZW5hYmxlZCwgZHVyYXRpb24gMSBkYXkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5nZXRDYWNoZWRKc29uID0gKHRpdGxlKSA9PiB7XG5cdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0fTtcblxuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMud2lraS5hcGkoJycsIHF1ZXJ5KS5wb3N0KCkudGhlbigoYXBpb2JqKSA9PiB7XG5cdFx0XHRhcGlvYmouZ2V0U3RhdHVzRWxlbWVudCgpLnVubGluaygpO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhcGlvYmouZ2V0UmVzcG9uc2UoKTtcblx0XHRcdGNvbnN0IHdpa2l0ZXh0ID0gcmVzcG9uc2UucXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW4uY29udGVudDtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKHdpa2l0ZXh0KTtcblx0XHR9KTtcblx0fTtcblx0bGV0IG1vcmViaXRzV2lraUFwaVVzZXJBZ2VudCA9ICdRaXV3ZW4vMS4xIChtb3JlYml0cy5qcyknO1xuXHQvKipcblx0ICogU2V0IHRoZSBjdXN0b20gdXNlciBhZ2VudCBoZWFkZXIsIHdoaWNoIGlzIHVzZWQgZm9yIHNlcnZlci1zaWRlIGxvZ2dpbmcuXG5cdCAqIE5vdGUgdGhhdCBkb2luZyBzbyB3aWxsIHNldCB0aGUgdXNlcmFnZW50IGZvciBldmVyeSBgTW9yZWJpdHMud2lraS5hcGlgXG5cdCAqIHByb2Nlc3MgcGVyZm9ybWVkIHRoZXJlYWZ0ZXIuXG5cdCAqXG5cdCAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbGlzdHMud2lraW1lZGlhLm9yZy9waXBlcm1haWwvbWVkaWF3aWtpLWFwaS1hbm5vdW5jZS8yMDE0LU5vdmVtYmVyLzAwMDA3NS5odG1sfVxuXHQgKiBmb3Igb3JpZ2luYWwgYW5ub3VuY2VtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraS5hcGlcblx0ICogQHBhcmFtIHtzdHJpbmd9IFt1YT1RaXV3ZW4vMS4xIChtb3JlYml0cy5qcyldIC0gVXNlciBhZ2VudC4gIFRoZSBkZWZhdWx0XG5cdCAqIHZhbHVlIG9mIGBtb3JlYml0cy5qc2Agd2lsbCBiZSBhcHBlbmRlZCB0byBhbnkgcHJvdmlkZWRcblx0ICogdmFsdWUuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmFwaS5zZXRBcGlVc2VyQWdlbnQgPSAodWEpID0+IHtcblx0XHRtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQgPSBgUWl1d2VuLzEuMSAobW9yZWJpdHMuanMke3VhID8gYDsgJHt1YX1gIDogJyd9KWA7XG5cdH07XG5cdC8qKlxuXHQgKiBDaGFuZ2UvcmV2aXNpb24gdGFnIGFwcGxpZWQgdG8gTW9yZWJpdHMgYWN0aW9ucyB3aGVuIG5vIG90aGVyIHRhZ3MgYXJlIHNwZWNpZmllZC5cblx0ICogVW51c2VkIGJ5IGRlZmF1bHQuXG5cdCAqXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraS5hcGlcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdGNvbnN0IG1vcmViaXRzV2lraUNoYW5nZVRhZyA9ICcnO1xuXHQvKipcblx0ICogR2V0IGEgbmV3IENTUkYgdG9rZW4gb24gZW5jb3VudGVyaW5nIHRva2VuIGVycm9ycy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kuYXBpXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IE1lZGlhV2lraSBDU1JGIHRva2VuLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hcGkuZ2V0VG9rZW4gPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9rZW5BcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkod2luZG93LndnVUxTKCfojrflj5bku6TniYwnLCAn5Y+W5b6X5qyK5p2WJyksIHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRva2VuQXBpLnBvc3QoKS50aGVuKChhcGlvYmopID0+IHtcblx0XHRcdHJldHVybiBhcGlvYmoucmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHR9KTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLnBhZ2UgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogVXNlIHRoZSBNZWRpYVdpa2kgQVBJIHRvIGxvYWQgYSBwYWdlIGFuZCBvcHRpb25hbGx5IGVkaXQgaXQsIG1vdmUgaXQsIGV0Yy5cblx0ICpcblx0ICogQ2FsbGVycyBhcmUgbm90IHBlcm1pdHRlZCB0byBkaXJlY3RseSBhY2Nlc3MgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBjbGFzcyFcblx0ICogQWxsIHByb3BlcnR5IGFjY2VzcyBpcyB0aHJvdWdoIHRoZSBhcHByb3ByaWF0ZSBnZXRfX18oKSBvciBzZXRfX18oKSBtZXRob2QuXG5cdCAqXG5cdCAqIENhbGxlcnMgc2hvdWxkIHNldCB7QGxpbmsgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlfSBhbmQge0BsaW5rIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0fVxuXHQgKiBiZWZvcmUgdGhlIGZpcnN0IGNhbGwgdG8ge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZS5sb2FkKCl9LlxuXHQgKlxuXHQgKiBFYWNoIG9mIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgdGFrZXMgb25lIHBhcmFtZXRlciwgd2hpY2ggaXMgYVxuXHQgKiByZWZlcmVuY2UgdG8gdGhlIE1vcmViaXRzLndpa2kucGFnZSBvYmplY3QgdGhhdCByZWdpc3RlcmVkIHRoZSBjYWxsYmFjay5cblx0ICogQ2FsbGJhY2sgZnVuY3Rpb25zIG1heSBpbnZva2UgYW55IE1vcmViaXRzLndpa2kucGFnZSBwcm90b3R5cGUgbWV0aG9kIHVzaW5nIHRoaXMgcmVmZXJlbmNlLlxuXHQgKlxuXHQgKlxuXHQgKiBDYWxsIHNlcXVlbmNlIGZvciBjb21tb24gb3BlcmF0aW9ucyAob3B0aW9uYWwgZmluYWwgdXNlciBjYWxsYmFja3Mgbm90IHNob3duKTpcblx0ICpcblx0ICogLSBFZGl0IGN1cnJlbnQgY29udGVudHMgb2YgYSBwYWdlIChubyBlZGl0IGNvbmZsaWN0KTpcblx0ICogYC5sb2FkKHVzZXJUZXh0RWRpdENhbGxiYWNrKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT5cblx0ICogY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiB1c2VyVGV4dEVkaXRDYWxsYmFjaygpIC0+XG5cdCAqIC5zYXZlKCkgLT4gY3R4LnNhdmVBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mblNhdmVTdWNjZXNzKClgXG5cdCAqXG5cdCAqIC0gRWRpdCBjdXJyZW50IGNvbnRlbnRzIG9mIGEgcGFnZSAod2l0aCBlZGl0IGNvbmZsaWN0KTpcblx0ICogYC5sb2FkKHVzZXJUZXh0RWRpdENhbGxiYWNrKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT5cblx0ICogY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiB1c2VyVGV4dEVkaXRDYWxsYmFjaygpIC0+XG5cdCAqIC5zYXZlKCkgLT4gY3R4LnNhdmVBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+XG5cdCAqIGN0eC5mblNhdmVFcnJvcigpIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPlxuXHQgKiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IHVzZXJUZXh0RWRpdENhbGxiYWNrKCkgLT4gLnNhdmUoKSAtPlxuXHQgKiBjdHguc2F2ZUFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuU2F2ZVN1Y2Nlc3MoKWBcblx0ICpcblx0ICogLSBBcHBlbmQgdG8gYSBwYWdlIChzaW1pbGFyIGZvciBwcmVwZW5kIGFuZCBuZXdTZWN0aW9uKTpcblx0ICogYC5hcHBlbmQoKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT5cblx0ICogY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiBjdHguZm5BdXRvU2F2ZSgpIC0+IC5zYXZlKCkgLT4gY3R4LnNhdmVBcGkucG9zdCgpIC0+XG5cdCAqIGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mblNhdmVTdWNjZXNzKClgXG5cdCAqXG5cdCAqIE5vdGVzOlxuXHQgKiAxLiBBbGwgZnVuY3Rpb25zIGZvbGxvd2luZyBNb3JlYml0cy53aWtpLmFwaS5wb3N0KCkgYXJlIGludm9rZWQgYXN5bmNocm9ub3VzbHkgZnJvbSB0aGUgalF1ZXJ5IEFKQVggbGlicmFyeS5cblx0ICogMi4gVGhlIHNlcXVlbmNlIGZvciBhcHBlbmQvcHJlcGVuZC9uZXdTZWN0aW9uIGNvdWxkIGJlIHNsaWdodGx5IHNob3J0ZW5lZCxcblx0ICogYnV0IGl0IHdvdWxkIHJlcXVpcmUgc2lnbmlmaWNhbnQgZHVwbGljYXRpb24gb2YgY29kZSBmb3IgbGl0dGxlIGJlbmVmaXQuXG5cdCAqXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFnZU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcGFnZSwgcHJlZml4ZWQgYnkgdGhlIG5hbWVzcGFjZSAoaWYgYW55KS5cblx0ICogRm9yIHRoZSBjdXJyZW50IHBhZ2UsIHVzZSBgbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpYC5cblx0ICogQHBhcmFtIHtzdHJpbmd8TW9yZWJpdHMuc3RhdHVzfSBbc3RhdHVzXSAtIEEgc3RyaW5nIGRlc2NyaWJpbmcgdGhlIGFjdGlvbiBhYm91dCB0byBiZSB1bmRlcnRha2VuLFxuXHQgKiBvciBhIE1vcmViaXRzLnN0YXR1cyBvYmplY3Rcblx0ICovXG5cdE1vcmViaXRzLndpa2kucGFnZSA9IGZ1bmN0aW9uIChwYWdlTmFtZSwgc3RhdHVzKSB7XG5cdFx0aWYgKCFzdGF0dXMpIHtcblx0XHRcdHN0YXR1cyA9IHdpbmRvdy53Z1VMUygn5omT5byA6aG16Z2i4oCcJywgJ+aJk+mWi+mggemdouOAjCcpICsgcGFnZU5hbWUgKyB3aW5kb3cud2dVTFMoJ+KAnScsICfjgI0nKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUHJpdmF0ZSBjb250ZXh0IHZhcmlhYmxlcy5cblx0XHQgKlxuXHRcdCAqIFRoaXMgY29udGV4dCBpcyBub3QgdmlzaWJsZSB0byB0aGUgb3V0c2lkZSwgdGh1cyBhbGwgdGhlIGRhdGEgaGVyZVxuXHRcdCAqIG11c3QgYmUgYWNjZXNzZWQgdmlhIGdldHRlciBhbmQgc2V0dGVyIGZ1bmN0aW9ucy5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0Y29uc3QgY3R4ID0ge1xuXHRcdFx0Ly8gYmFja2luZyBmaWVsZHMgZm9yIHB1YmxpYyBwcm9wZXJ0aWVzXG5cdFx0XHRwYWdlTmFtZSxcblx0XHRcdHBhZ2VFeGlzdHM6IGZhbHNlLFxuXHRcdFx0ZWRpdFN1bW1hcnk6IG51bGwsXG5cdFx0XHRjaGFuZ2VUYWdzOiBudWxsLFxuXHRcdFx0dGVzdEFjdGlvbnM6IG51bGwsXG5cdFx0XHQvLyBhcnJheSBpZiBhbnkgdmFsaWQgYWN0aW9uc1xuXHRcdFx0Y2FsbGJhY2tQYXJhbWV0ZXJzOiBudWxsLFxuXHRcdFx0c3RhdHVzRWxlbWVudDogc3RhdHVzIGluc3RhbmNlb2YgTW9yZWJpdHMuc3RhdHVzID8gc3RhdHVzIDogbmV3IE1vcmViaXRzLnN0YXR1cyhzdGF0dXMpLFxuXHRcdFx0Ly8gLSBlZGl0XG5cdFx0XHRwYWdlVGV4dDogbnVsbCxcblx0XHRcdGVkaXRNb2RlOiAnYWxsJyxcblx0XHRcdC8vIHNhdmUoKSByZXBsYWNlcyBlbnRpcmUgY29udGVudHMgb2YgdGhlIHBhZ2UgYnkgZGVmYXVsdFxuXHRcdFx0YXBwZW5kVGV4dDogbnVsbCxcblx0XHRcdC8vIGNhbid0IHJldXNlIHBhZ2VUZXh0IGZvciB0aGlzIGJlY2F1c2UgcGFnZVRleHQgaXMgbmVlZGVkIHRvIGZvbGxvdyBhIHJlZGlyZWN0XG5cdFx0XHRwcmVwZW5kVGV4dDogbnVsbCxcblx0XHRcdC8vIGNhbid0IHJldXNlIHBhZ2VUZXh0IGZvciB0aGlzIGJlY2F1c2UgcGFnZVRleHQgaXMgbmVlZGVkIHRvIGZvbGxvdyBhIHJlZGlyZWN0XG5cdFx0XHRuZXdTZWN0aW9uVGV4dDogbnVsbCxcblx0XHRcdG5ld1NlY3Rpb25UaXRsZTogbnVsbCxcblx0XHRcdGNyZWF0ZU9wdGlvbjogbnVsbCxcblx0XHRcdG1pbm9yRWRpdDogZmFsc2UsXG5cdFx0XHRib3RFZGl0OiBmYWxzZSxcblx0XHRcdHBhZ2VTZWN0aW9uOiBudWxsLFxuXHRcdFx0bWF4Q29uZmxpY3RSZXRyaWVzOiAyLFxuXHRcdFx0bWF4UmV0cmllczogMixcblx0XHRcdGZvbGxvd1JlZGlyZWN0OiBmYWxzZSxcblx0XHRcdGZvbGxvd0Nyb3NzTnNSZWRpcmVjdDogdHJ1ZSxcblx0XHRcdHdhdGNobGlzdE9wdGlvbjogJ25vY2hhbmdlJyxcblx0XHRcdHdhdGNobGlzdEV4cGlyeTogbnVsbCxcblx0XHRcdGNyZWF0b3I6IG51bGwsXG5cdFx0XHR0aW1lc3RhbXA6IG51bGwsXG5cdFx0XHQvLyAtIHJldmVydFxuXHRcdFx0cmV2ZXJ0T2xkSUQ6IG51bGwsXG5cdFx0XHQvLyAtIG1vdmVcblx0XHRcdG1vdmVEZXN0aW5hdGlvbjogbnVsbCxcblx0XHRcdG1vdmVUYWxrUGFnZTogZmFsc2UsXG5cdFx0XHRtb3ZlU3VicGFnZXM6IGZhbHNlLFxuXHRcdFx0bW92ZVN1cHByZXNzUmVkaXJlY3Q6IGZhbHNlLFxuXHRcdFx0Ly8gLSBwcm90ZWN0XG5cdFx0XHRwcm90ZWN0RWRpdDogbnVsbCxcblx0XHRcdHByb3RlY3RNb3ZlOiBudWxsLFxuXHRcdFx0cHJvdGVjdENyZWF0ZTogbnVsbCxcblx0XHRcdHByb3RlY3RDYXNjYWRlOiBudWxsLFxuXHRcdFx0Ly8gLSBjcmVhdGlvbiBsb29rdXBcblx0XHRcdGxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvcjogZmFsc2UsXG5cdFx0XHQvLyBpbnRlcm5hbCBzdGF0dXNcblx0XHRcdHBhZ2VMb2FkZWQ6IGZhbHNlLFxuXHRcdFx0Y3NyZlRva2VuOiBudWxsLFxuXHRcdFx0bG9hZFRpbWU6IG51bGwsXG5cdFx0XHRsYXN0RWRpdFRpbWU6IG51bGwsXG5cdFx0XHRwYWdlSUQ6IG51bGwsXG5cdFx0XHRjb250ZW50TW9kZWw6IG51bGwsXG5cdFx0XHRyZXZlcnRDdXJJRDogbnVsbCxcblx0XHRcdHJldmVydFVzZXI6IG51bGwsXG5cdFx0XHR3YXRjaGVkOiBmYWxzZSxcblx0XHRcdGZ1bGx5UHJvdGVjdGVkOiBmYWxzZSxcblx0XHRcdHN1cHByZXNzUHJvdGVjdFdhcm5pbmc6IGZhbHNlLFxuXHRcdFx0Y29uZmxpY3RSZXRyaWVzOiAwLFxuXHRcdFx0cmV0cmllczogMCxcblx0XHRcdC8vIGNhbGxiYWNrc1xuXHRcdFx0b25Mb2FkU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTG9hZEZhaWx1cmU6IG51bGwsXG5cdFx0XHRvblNhdmVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25TYXZlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uTG9va3VwQ3JlYXRpb25TdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Mb29rdXBDcmVhdGlvbkZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbk1vdmVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Nb3ZlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uRGVsZXRlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uRGVsZXRlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uVW5kZWxldGVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25VbmRlbGV0ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvblByb3RlY3RTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Qcm90ZWN0RmFpbHVyZTogbnVsbCxcblx0XHRcdC8vIGludGVybmFsIG9iamVjdHNcblx0XHRcdGxvYWRRdWVyeTogbnVsbCxcblx0XHRcdGxvYWRBcGk6IG51bGwsXG5cdFx0XHRzYXZlQXBpOiBudWxsLFxuXHRcdFx0bG9va3VwQ3JlYXRpb25BcGk6IG51bGwsXG5cdFx0XHRtb3ZlQXBpOiBudWxsLFxuXHRcdFx0bW92ZVByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHRwYXRyb2xBcGk6IG51bGwsXG5cdFx0XHRwYXRyb2xQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0ZGVsZXRlQXBpOiBudWxsLFxuXHRcdFx0ZGVsZXRlUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdHVuZGVsZXRlQXBpOiBudWxsLFxuXHRcdFx0dW5kZWxldGVQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0cHJvdGVjdEFwaTogbnVsbCxcblx0XHRcdHByb3RlY3RQcm9jZXNzQXBpOiBudWxsLFxuXHRcdH07XG5cdFx0Y29uc3QgZW1wdHlGdW5jdGlvbiA9ICgpID0+IHt9O1xuXHRcdC8qKlxuXHRcdCAqIExvYWRzIHRoZSB0ZXh0IGZvciB0aGUgcGFnZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IG9uU3VjY2VzcyAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBsb2FkIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbG9hZCBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLmxvYWQgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vbkxvYWRTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdC8vIE5lZWQgdG8gYmUgYWJsZSB0byBkbyBzb21ldGhpbmcgYWZ0ZXIgdGhlIHBhZ2UgbG9hZHNcblx0XHRcdGlmICghb25TdWNjZXNzKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogbm8gb25TdWNjZXNzIGNhbGxiYWNrIHByb3ZpZGVkIHRvIGxvYWQoKSEnKTtcblx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5sb2FkUXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ2luZm98cmV2aXNpb25zJyxcblx0XHRcdFx0aW5wcm9wOiAnd2F0Y2hlZCcsXG5cdFx0XHRcdGludGVzdGFjdGlvbnM6ICdlZGl0Jyxcblx0XHRcdFx0Ly8gY2FuIGJlIGV4cGFuZGVkXG5cdFx0XHRcdGN1cnRpbWVzdGFtcDogJycsXG5cdFx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Ly8gZG9uJ3QgbmVlZCBydmxpbWl0PTEgYmVjYXVzZSB3ZSBkb24ndCBuZWVkIHJ2c3RhcnRpZCBoZXJlIGFuZCBvbmx5IG9uZSBhY3R1YWwgcmV2IGlzIHJldHVybmVkIGJ5IGRlZmF1bHRcblx0XHRcdH07XG5cblx0XHRcdGlmIChjdHguZWRpdE1vZGUgPT09ICdhbGwnKSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZwcm9wID0gJ2NvbnRlbnR8dGltZXN0YW1wJzsgLy8gZ2V0IHRoZSBwYWdlIGNvbnRlbnQgYXQgdGhlIHNhbWUgdGltZSwgaWYgbmVlZGVkXG5cdFx0XHR9IGVsc2UgaWYgKGN0eC5lZGl0TW9kZSA9PT0gJ3JldmVydCcpIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydnByb3AgPSAndGltZXN0YW1wJztcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydmxpbWl0ID0gMTtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydnN0YXJ0aWQgPSBjdHgucmV2ZXJ0T2xkSUQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucmVkaXJlY3RzID0gJyc7IC8vIGZvbGxvdyBhbGwgcmVkaXJlY3RzXG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgY3R4LnBhZ2VTZWN0aW9uID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2c2VjdGlvbiA9IGN0eC5wYWdlU2VjdGlvbjtcblx0XHRcdH1cblx0XHRcdGlmIChNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LmlucHJvcCArPSAnfHByb3RlY3Rpb24nO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmxvYWRBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5oqT5Y+W6aG16Z2i4oCm4oCmJywgJ+aKk+WPlumggemdouKApuKApicpLFxuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LFxuXHRcdFx0XHRmbkxvYWRTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgubG9hZEFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgubG9hZEFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTYXZlcyB0aGUgdGV4dCBmb3IgdGhlIHBhZ2UgdG8gV2lraXBlZGlhLlxuXHRcdCAqIE11c3QgYmUgcHJlY2VkZWQgYnkgc3VjY2Vzc2Z1bGx5IGNhbGxpbmcgYGxvYWQoKWAuXG5cdFx0ICpcblx0XHQgKiBXYXJuaW5nOiBDYWxsaW5nIGBzYXZlKClgIGNhbiByZXN1bHQgaW4gYWRkaXRpb25hbCBjYWxscyB0byB0aGVcblx0XHQgKiBwcmV2aW91cyBgbG9hZCgpYCBjYWxsYmFja3MgdG8gcmVjb3ZlciBmcm9tIGVkaXQgY29uZmxpY3RzISBJbiB0aGlzXG5cdFx0ICogY2FzZSwgY2FsbGVycyBtdXN0IG1ha2UgdGhlIHNhbWUgZWRpdCB0byB0aGUgbmV3IHBhZ2VUZXh0IGFuZFxuXHRcdCAqIHJlLWludm9rZSBgc2F2ZSgpYC4gIFRoaXMgYmVoYXZpb3IgY2FuIGJlIGRpc2FibGVkIHdpdGhcblx0XHQgKiBgc2V0TWF4Q29uZmxpY3RSZXRyaWVzKDApYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIHNhdmUgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBzYXZlIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2F2ZSA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0Ly8gYXJlIHdlIGdldHRpbmcgb3VyIGVkaXRpbmcgdG9rZW4gZnJvbSBtdy51c2VyLnRva2Vucz9cblx0XHRcdGNvbnN0IGNhblVzZU13VXNlclRva2VuID0gZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpO1xuXHRcdFx0aWYgKCFjdHgucGFnZUxvYWRlZCAmJiAhY2FuVXNlTXdVc2VyVG9rZW4pIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBhdHRlbXB0IHRvIHNhdmUgYSBwYWdlIHRoYXQgaGFzIG5vdCBiZWVuIGxvYWRlZCEnKTtcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LmVkaXRTdW1tYXJ5KSB7XG5cdFx0XHRcdC8vIG5ldyBzZWN0aW9uIG1vZGUgYWxsb3dzIChuYXksIGVuY291cmFnZXMpIHVzaW5nIHRoZVxuXHRcdFx0XHQvLyB0aXRsZSBhcyB0aGUgZWRpdCBzdW1tYXJ5LCBidXQgdGhlIHF1ZXJ5IG5lZWRzXG5cdFx0XHRcdC8vIGVkaXRTdW1tYXJ5IHRvIGJlIHVuZGVmaW5lZCBvciAnJywgbm90IG51bGxcblx0XHRcdFx0aWYgKGN0eC5lZGl0TW9kZSA9PT0gJ25ldycgJiYgY3R4Lm5ld1NlY3Rpb25UaXRsZSkge1xuXHRcdFx0XHRcdGN0eC5lZGl0U3VtbWFyeSA9ICcnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogZWRpdCBzdW1tYXJ5IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBzaG91bGRuJ3QgaGFwcGVuIGlmIGNhblVzZU13VXNlclRva2VuID09PSB0cnVlXG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN0eC5mdWxseVByb3RlY3RlZCAmJlxuXHRcdFx0XHQhY3R4LnN1cHByZXNzUHJvdGVjdFdhcm5pbmcgJiZcblx0XHRcdFx0IWNvbmZpcm0oXG5cdFx0XHRcdFx0Y3R4LmZ1bGx5UHJvdGVjdGVkID09PSAnaW5maW5pdHknXG5cdFx0XHRcdFx0XHQ/IHdpbmRvdy53Z1VMUygn5oKo5Y2z5bCG57yW6L6R5YWo5L+d5oqk6aG16Z2i4oCcJywgJ+aCqOWNs+Wwh+e3qOi8r+WFqOS/neitt+mggemdouOAjCcpICtcblx0XHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHRcdCfigJ3vvIjml6DpmZDmnJ/vvInjgIJcXG5cXG7ljZXlh7vnoa7lrprku6Xnoa7lrprvvIzmiJbljZXlh7vlj5bmtojku6Xlj5bmtojmk43kvZzjgIInLFxuXHRcdFx0XHRcdFx0XHRcdFx0J+OAje+8iOeEoemZkOacn++8ieOAglxcblxcbum7nuaTiueiuuWumuS7peeiuuWumu+8jOaIlum7nuaTiuWPlua2iOS7peWPlua2iOaTjeS9nOOAgidcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQ6IGAke1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5oKo5Y2z5bCG57yW6L6R5YWo5L+d5oqk6aG16Z2i4oCcJywgJ+aCqOWNs+Wwh+e3qOi8r+WFqOS/neitt+mggemdouOAjCcpICtcblx0XHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd77yI5Yiw5pyf77yaJywgJ+OAje+8iOWIsOacn++8micpICtcblx0XHRcdFx0XHRcdFx0XHRuZXcgTW9yZWJpdHMuZGF0ZShjdHguZnVsbHlQcm90ZWN0ZWQpLmNhbGVuZGFyKCd1dGMnKVxuXHRcdFx0XHRcdFx0XHR9IChVVEMp77yJ44CCXFxuXFxuJHt3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J+WNleWHu+ehruWumuS7peehruWumu+8jOaIluWNleWHu+WPlua2iOS7peWPlua2iOaTjeS9nOOAgicsXG5cdFx0XHRcdFx0XHRcdFx0J+m7nuaTiueiuuWumuS7peeiuuWumu+8jOaIlum7nuaTiuWPlua2iOS7peWPlua2iOaTjeS9nOOAgidcblx0XHRcdFx0XHRcdFx0KX1gXG5cdFx0XHRcdClcblx0XHRcdCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+W3suWPlua2iOWvueWFqOS/neaKpOmhtemdoueahOe8lui+keOAgicsICflt7Llj5bmtojlsI3lhajkv53orbfpoIHpnaLnmoTnt6jovK/jgIInKSk7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgucmV0cmllcyA9IDA7XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdHRpdGxlOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdHN1bW1hcnk6IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0dG9rZW46IGNhblVzZU13VXNlclRva2VuID8gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKSA6IGN0eC5jc3JmVG9rZW4sXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgY3R4LnBhZ2VTZWN0aW9uID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRxdWVyeS5zZWN0aW9uID0gY3R4LnBhZ2VTZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0Ly8gU2V0IG1pbm9yIGVkaXQgYXR0cmlidXRlLiBJZiB0aGVzZSBwYXJhbWV0ZXJzIGFyZSBwcmVzZW50IHdpdGggYW55IHZhbHVlLCBpdCBpcyBpbnRlcnByZXRlZCBhcyB0cnVlXG5cdFx0XHRpZiAoY3R4Lm1pbm9yRWRpdCkge1xuXHRcdFx0XHRxdWVyeS5taW5vciA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRxdWVyeS5ub3RtaW5vciA9IHRydWU7IC8vIGZvcmNlIFR3aW5rbGUgY29uZmlnIHRvIG92ZXJyaWRlIHVzZXIgcHJlZmVyZW5jZSBzZXR0aW5nIGZvciBcImFsbCBlZGl0cyBhcmUgbWlub3JcIlxuXHRcdFx0fVxuXHRcdFx0Ly8gU2V0IGJvdCBlZGl0IGF0dHJpYnV0ZS4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgcHJlc2VudCB3aXRoIGFueSB2YWx1ZSwgaXQgaXMgaW50ZXJwcmV0ZWQgYXMgdHJ1ZVxuXHRcdFx0aWYgKGN0eC5ib3RFZGl0KSB7XG5cdFx0XHRcdHF1ZXJ5LmJvdCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKGN0eC5lZGl0TW9kZSkge1xuXHRcdFx0XHRjYXNlICdhcHBlbmQnOlxuXHRcdFx0XHRcdGlmIChjdHguYXBwZW5kVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBhcHBlbmQgdGV4dCBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHF1ZXJ5LmFwcGVuZHRleHQgPSBjdHguYXBwZW5kVGV4dDsgLy8gdXNlIG1vZGUgdG8gYXBwZW5kIHRvIGN1cnJlbnQgcGFnZSBjb250ZW50c1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdwcmVwZW5kJzpcblx0XHRcdFx0XHRpZiAoY3R4LnByZXBlbmRUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IHByZXBlbmQgdGV4dCBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHF1ZXJ5LnByZXBlbmR0ZXh0ID0gY3R4LnByZXBlbmRUZXh0OyAvLyB1c2UgbW9kZSB0byBwcmVwZW5kIHRvIGN1cnJlbnQgcGFnZSBjb250ZW50c1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICduZXcnOlxuXHRcdFx0XHRcdGlmICghY3R4Lm5ld1NlY3Rpb25UZXh0KSB7XG5cdFx0XHRcdFx0XHQvLyBBUEkgZG9lc24ndCBhbGxvdyBlbXB0eSBuZXcgc2VjdGlvbiB0ZXh0XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5ldyBzZWN0aW9uIHRleHQgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRxdWVyeS5zZWN0aW9uID0gJ25ldyc7XG5cdFx0XHRcdFx0cXVlcnkudGV4dCA9IGN0eC5uZXdTZWN0aW9uVGV4dDsgLy8gYWRkIGEgbmV3IHNlY3Rpb24gdG8gY3VycmVudCBwYWdlXG5cdFx0XHRcdFx0cXVlcnkuc2VjdGlvbnRpdGxlID0gY3R4Lm5ld1NlY3Rpb25UaXRsZSB8fCBjdHguZWRpdFN1bW1hcnk7IC8vIGRvbmUgYnkgdGhlIEFQSSwgYnV0IG5vbi0nJyB2YWx1ZXMgd291bGQgZ2V0IHRyZWF0ZWQgYXMgdGV4dFxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZXZlcnQnOlxuXHRcdFx0XHRcdHF1ZXJ5LnVuZG8gPSBjdHgucmV2ZXJ0Q3VySUQ7XG5cdFx0XHRcdFx0cXVlcnkudW5kb2FmdGVyID0gY3R4LnJldmVydE9sZElEO1xuXHRcdFx0XHRcdGlmIChjdHgubGFzdEVkaXRUaW1lKSB7XG5cdFx0XHRcdFx0XHRxdWVyeS5iYXNldGltZXN0YW1wID0gY3R4Lmxhc3RFZGl0VGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGVkaXRlZCBzaW5jZSBpdCB3YXMgbG9hZGVkXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cXVlcnkuc3RhcnR0aW1lc3RhbXAgPSBjdHgubG9hZFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBkZWxldGVkIHNpbmNlIGl0IHdhcyBsb2FkZWQgKGRvbid0IHJlY3JlYXRlIGJhZCBzdHVmZilcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyAnYWxsJ1xuXHRcdFx0XHRcdHF1ZXJ5LnRleHQgPSBjdHgucGFnZVRleHQ7IC8vIHJlcGxhY2UgZW50aXJlIGNvbnRlbnRzIG9mIHRoZSBwYWdlXG5cdFx0XHRcdFx0aWYgKGN0eC5sYXN0RWRpdFRpbWUpIHtcblx0XHRcdFx0XHRcdHF1ZXJ5LmJhc2V0aW1lc3RhbXAgPSBjdHgubGFzdEVkaXRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZWRpdGVkIHNpbmNlIGl0IHdhcyBsb2FkZWRcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRxdWVyeS5zdGFydHRpbWVzdGFtcCA9IGN0eC5sb2FkVGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGRlbGV0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZCAoZG9uJ3QgcmVjcmVhdGUgYmFkIHN0dWZmKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFsncmVjcmVhdGUnLCAnY3JlYXRlb25seScsICdub2NyZWF0ZSddLmluY2x1ZGVzKGN0eC5jcmVhdGVPcHRpb24pKSB7XG5cdFx0XHRcdHF1ZXJ5W2N0eC5jcmVhdGVPcHRpb25dID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2FuVXNlTXdVc2VyVG9rZW4gJiYgY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdHF1ZXJ5LnJlZGlyZWN0ID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGN0eC5zYXZlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S/neWtmOmhtemdouKApuKApicsICflhLLlrZjpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGZuU2F2ZVN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRmblNhdmVFcnJvclxuXHRcdFx0KTtcblx0XHRcdGN0eC5zYXZlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5zYXZlQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEFkZHMgdGhlIHRleHQgcHJvdmlkZWQgdmlhIGBzZXRBcHBlbmRUZXh0KClgIHRvIHRoZSBlbmQgb2YgdGhlXG5cdFx0ICogcGFnZS4gIERvZXMgbm90IHJlcXVpcmUgY2FsbGluZyBgbG9hZCgpYCBmaXJzdCwgdW5sZXNzIGEgd2F0Y2hsaXN0XG5cdFx0ICogZXhwaXJ5IGlzIHVzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5hcHBlbmQgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhcHBlbmQnO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHR0aGlzLnNhdmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBBZGRzIHRoZSB0ZXh0IHByb3ZpZGVkIHZpYSBgc2V0UHJlcGVuZFRleHQoKWAgdG8gdGhlIHN0YXJ0IG9mIHRoZVxuXHRcdCAqIHBhZ2UuICBEb2VzIG5vdCByZXF1aXJlIGNhbGxpbmcgYGxvYWQoKWAgZmlyc3QsIHVubGVzcyBhIHdhdGNobGlzdFxuXHRcdCAqIGV4cGlyeSBpcyB1c2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gIFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5wcmVwZW5kID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAncHJlcGVuZCc7XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHRcdHRoaXMuc2F2ZShvblN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdFx0dGhpcy5sb2FkKGZuQXV0b1NhdmUsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZXMgYSBuZXcgc2VjdGlvbiB3aXRoIHRoZSB0ZXh0IHByb3ZpZGVkIGJ5IGBzZXROZXdTZWN0aW9uVGV4dCgpYFxuXHRcdCAqIGFuZCBzZWN0aW9uIHRpdGxlIGZyb20gYHNldE5ld1NlY3Rpb25UaXRsZSgpYC5cblx0XHQgKiBJZiBgZWRpdFN1bW1hcnlgIGlzIHByb3ZpZGVkLCB0aGF0IHdpbGwgYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZVxuXHRcdCAqIGF1dG9nZW5lcmF0ZWQgXCItPlRpdGxlIChuZXcgc2VjdGlvblwiIGVkaXQgc3VtbWFyeS5cblx0XHQgKiBEb2VzIG5vdCByZXF1aXJlIGNhbGxpbmcgYGxvYWQoKWAgZmlyc3QsIHVubGVzcyBhIHdhdGNobGlzdCBleHBpcnlcblx0XHQgKiBpcyB1c2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gIFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5uZXdTZWN0aW9uID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnbmV3Jztcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0dGhpcy5zYXZlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0XHR0aGlzLmxvYWQoZm5BdXRvU2F2ZSwgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBsb2FkZWQgcGFnZSwgaW5jbHVkaW5nIHRoZSBuYW1lc3BhY2UgKi9cblx0XHR0aGlzLmdldFBhZ2VOYW1lID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5wYWdlTmFtZTtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgdGV4dCBvZiB0aGUgcGFnZSBhZnRlciBhIHN1Y2Nlc3NmdWwgbG9hZCgpICovXG5cdFx0dGhpcy5nZXRQYWdlVGV4dCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZVRleHQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtzdHJpbmd9IHBhZ2VUZXh0IC0gVXBkYXRlZCBwYWdlIHRleHQgdGhhdCB3aWxsIGJlIHNhdmVkIHdoZW4gYHNhdmUoKWAgaXMgY2FsbGVkICovXG5cdFx0dGhpcy5zZXRQYWdlVGV4dCA9IChwYWdlVGV4dCkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ2FsbCc7XG5cdFx0XHRjdHgucGFnZVRleHQgPSBwYWdlVGV4dDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gYXBwZW5kVGV4dCAtIFRleHQgdGhhdCB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBwYWdlIHdoZW4gYGFwcGVuZCgpYCBpcyBjYWxsZWQgKi9cblx0XHR0aGlzLnNldEFwcGVuZFRleHQgPSAoYXBwZW5kVGV4dCkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ2FwcGVuZCc7XG5cdFx0XHRjdHguYXBwZW5kVGV4dCA9IGFwcGVuZFRleHQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtzdHJpbmd9IHByZXBlbmRUZXh0IC0gVGV4dCB0aGF0IHdpbGwgYmUgcHJlcGVuZGVkIHRvIHRoZSBwYWdlIHdoZW4gYHByZXBlbmQoKWAgaXMgY2FsbGVkICovXG5cdFx0dGhpcy5zZXRQcmVwZW5kVGV4dCA9IChwcmVwZW5kVGV4dCkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ3ByZXBlbmQnO1xuXHRcdFx0Y3R4LnByZXBlbmRUZXh0ID0gcHJlcGVuZFRleHQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtzdHJpbmd9IG5ld1NlY3Rpb25UZXh0IC0gVGV4dCB0aGF0IHdpbGwgYmUgYWRkZWQgaW4gYSBuZXcgc2VjdGlvbiBvbiB0aGUgcGFnZSB3aGVuIGBuZXdTZWN0aW9uKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0TmV3U2VjdGlvblRleHQgPSAobmV3U2VjdGlvblRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICduZXcnO1xuXHRcdFx0Y3R4Lm5ld1NlY3Rpb25UZXh0ID0gbmV3U2VjdGlvblRleHQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmV3U2VjdGlvblRpdGxlIC0gVGl0bGUgZm9yIHRoZSBuZXcgc2VjdGlvbiBjcmVhdGVkIHdoZW4gYG5ld1NlY3Rpb24oKWAgaXMgY2FsbGVkXG5cdFx0ICogSWYgbWlzc2luZywgYGN0eC5lZGl0U3VtbWFyeWAgd2lsbCBiZSB1c2VkLiBJc3N1ZXMgbWF5IG9jY3VyIGlmIGEgc3Vic3RpdHV0ZWQgdGVtcGxhdGUgaXMgdXNlZC5cblx0XHQgKi9cblx0XHR0aGlzLnNldE5ld1NlY3Rpb25UaXRsZSA9IChuZXdTZWN0aW9uVGl0bGUpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICduZXcnO1xuXHRcdFx0Y3R4Lm5ld1NlY3Rpb25UaXRsZSA9IG5ld1NlY3Rpb25UaXRsZTtcblx0XHR9O1xuXHRcdC8vIEVkaXQtcmVsYXRlZCBzZXR0ZXIgbWV0aG9kczpcblx0XHQvKipcblx0XHQgKiBTZXQgdGhlIGVkaXQgc3VtbWFyeSB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIGBzYXZlKClgIGlzIGNhbGxlZC5cblx0XHQgKiBVbm5lY2Vzc2FyeSBpZiBlZGl0TW9kZSBpcyAnbmV3JyBhbmQgbmV3U2VjdGlvblRpdGxlIGlzIHByb3ZpZGVkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN1bW1hcnlcblx0XHQgKi9cblx0XHR0aGlzLnNldEVkaXRTdW1tYXJ5ID0gKHN1bW1hcnkpID0+IHtcblx0XHRcdGN0eC5lZGl0U3VtbWFyeSA9IHN1bW1hcnk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXQgYW55IGN1c3RvbSB0YWcocykgdG8gYmUgYXBwbGllZCB0byB0aGUgQVBJIGFjdGlvbi5cblx0XHQgKiBBIG51bWJlciBvZiBhY3Rpb25zIGRvbid0IHN1cHBvcnQgaXQsIG1vc3Qgbm90YWJseSB3YXRjaC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSB0YWdzIC0gU3RyaW5nIG9yIGFycmF5IG9mIHRhZyhzKS5cblx0XHQgKi9cblx0XHR0aGlzLnNldENoYW5nZVRhZ3MgPSAodGFncykgPT4ge1xuXHRcdFx0Y3R4LmNoYW5nZVRhZ3MgPSB0YWdzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtjcmVhdGVPcHRpb249bnVsbF0gLSBDYW4gdGFrZSB0aGUgZm9sbG93aW5nIGZvdXIgdmFsdWVzOlxuXHRcdCAqIC0gcmVjcmVhdGU6IGNyZWF0ZSB0aGUgcGFnZSBpZiBpdCBkb2VzIG5vdCBleGlzdCwgb3IgZWRpdCBpdCBpZiBpdCBleGlzdHMuXG5cdFx0ICogLSBjcmVhdGVvbmx5OiBjcmVhdGUgdGhlIHBhZ2UgaWYgaXQgZG9lcyBub3QgZXhpc3QsIGJ1dCByZXR1cm4gYW5cblx0XHQgKiBlcnJvciBpZiBpdCBhbHJlYWR5IGV4aXN0cy5cblx0XHQgKiAtIG5vY3JlYXRlOiBkb24ndCBjcmVhdGUgdGhlIHBhZ2UsIG9ubHkgZWRpdCBpdCBpZiBpdCBhbHJlYWR5IGV4aXN0cy5cblx0XHQgKiAtIGBudWxsYDogY3JlYXRlIHRoZSBwYWdlIGlmIGl0IGRvZXMgbm90IGV4aXN0LCB1bmxlc3MgaXQgd2FzIGRlbGV0ZWRcblx0XHQgKiBpbiB0aGUgbW9tZW50IGJldHdlZW4gbG9hZGluZyB0aGUgcGFnZSBhbmQgc2F2aW5nIHRoZSBlZGl0IChkZWZhdWx0KS5cblx0XHQgKlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0Q3JlYXRlT3B0aW9uID0gKGNyZWF0ZU9wdGlvbikgPT4ge1xuXHRcdFx0Y3R4LmNyZWF0ZU9wdGlvbiA9IGNyZWF0ZU9wdGlvbjtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IG1pbm9yRWRpdCAtIFNldCB0cnVlIHRvIG1hcmsgdGhlIGVkaXQgYXMgYSBtaW5vciBlZGl0LiAqL1xuXHRcdHRoaXMuc2V0TWlub3JFZGl0ID0gKG1pbm9yRWRpdCkgPT4ge1xuXHRcdFx0Y3R4Lm1pbm9yRWRpdCA9IG1pbm9yRWRpdDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGJvdEVkaXQgLSBTZXQgdHJ1ZSB0byBtYXJrIHRoZSBlZGl0IGFzIGEgYm90IGVkaXQgKi9cblx0XHR0aGlzLnNldEJvdEVkaXQgPSAoYm90RWRpdCkgPT4ge1xuXHRcdFx0Y3R4LmJvdEVkaXQgPSBib3RFZGl0O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VTZWN0aW9uIC0gSW50ZWdlciBzcGVjaWZ5aW5nIHRoZSBzZWN0aW9uIG51bWJlciB0byBsb2FkIG9yIHNhdmUuXG5cdFx0ICogSWYgc3BlY2lmaWVkIGFzIGBudWxsYCwgdGhlIGVudGlyZSBwYWdlIHdpbGwgYmUgcmV0cmlldmVkLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0UGFnZVNlY3Rpb24gPSAocGFnZVNlY3Rpb24pID0+IHtcblx0XHRcdGN0eC5wYWdlU2VjdGlvbiA9IHBhZ2VTZWN0aW9uO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG1heENvbmZsaWN0UmV0cmllcyAtIE51bWJlciBvZiByZXRyaWVzIGZvciBzYXZlIGVycm9ycyBpbnZvbHZpbmcgYW4gZWRpdCBjb25mbGljdCBvclxuXHRcdCAqIGxvc3Mgb2YgdG9rZW4uIERlZmF1bHQ6IDIuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRNYXhDb25mbGljdFJldHJpZXMgPSAobWF4Q29uZmxpY3RSZXRyaWVzKSA9PiB7XG5cdFx0XHRjdHgubWF4Q29uZmxpY3RSZXRyaWVzID0gbWF4Q29uZmxpY3RSZXRyaWVzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG1heFJldHJpZXMgLSBOdW1iZXIgb2YgcmV0cmllcyBmb3Igc2F2ZSBlcnJvcnMgbm90IGludm9sdmluZyBhbiBlZGl0IGNvbmZsaWN0IG9yXG5cdFx0ICogbG9zcyBvZiB0b2tlbi4gRGVmYXVsdDogMi5cblx0XHQgKi9cblx0XHR0aGlzLnNldE1heFJldHJpZXMgPSAobWF4UmV0cmllcykgPT4ge1xuXHRcdFx0Y3R4Lm1heFJldHJpZXMgPSBtYXhSZXRyaWVzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0IHdoZXRoZXIgYW5kIGhvdyB0byB3YXRjaCB0aGUgcGFnZSwgaW5jbHVkaW5nIHNldHRpbmcgYW4gZXhwaXJ5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufHN0cmluZ3xNb3JlYml0cy5kYXRlfERhdGV9IFt3YXRjaGxpc3RPcHRpb249ZmFsc2VdIC1cblx0XHQgKiBCYXNpY2FsbHkgYSBtaXggb2YgTVcgQVBJIGFuZCBUd2lua2xleSBvcHRpb25zIGF2YWlsYWJsZSBwcmUtZXhwaXJ5OlxuXHRcdCAqIC0gYHRydWVgfGAneWVzJ2B8YCd3YXRjaCdgOiBwYWdlIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHVzZXInc1xuXHRcdCAqIHdhdGNobGlzdCB3aGVuIHRoZSBhY3Rpb24gaXMgY2FsbGVkLiBEZWZhdWx0cyB0byBhbiBpbmRlZmluaXRlXG5cdFx0ICogd2F0Y2ggdW5sZXNzIGB3YXRjaGxpc3RFeHBpcnlgIGlzIHByb3ZpZGVkLlxuXHRcdCAqIC0gYGZhbHNlYHxgJ25vJ2B8YCdub2NoYW5nZSdgOiB3YXRjaGxpc3Qgc3RhdHVzIG9mIHRoZSBwYWdlIChpbmNsdWRpbmcgZXhwaXJ5KSB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuXHRcdCAqIC0gYCdkZWZhdWx0J2B8YCdwcmVmZXJlbmNlcydgOiB3YXRjaGxpc3Qgc3RhdHVzIG9mIHRoZSBwYWdlIHdpbGwgYmVcblx0XHQgKiBzZXQgYmFzZWQgb24gdGhlIHVzZXIncyBwcmVmZXJlbmNlIHNldHRpbmdzIHdoZW4gdGhlIGFjdGlvbiBpc1xuXHRcdCAqIGNhbGxlZC4gRGVmYXVsdHMgdG8gYW4gaW5kZWZpbml0ZSB3YXRjaCB1bmxlc3MgYHdhdGNobGlzdEV4cGlyeWAgaXNcblx0XHQgKiBwcm92aWRlZC5cblx0XHQgKiAtIGAndW53YXRjaCdgOiBleHBsaWNpdGx5IHVud2F0Y2ggdGhlIHBhZ2UuXG5cdFx0ICogLSBBbnkgb3RoZXIgYHN0cmluZ2Agb3IgYG51bWJlcmAsIG9yIGEgYE1vcmViaXRzLmRhdGVgIG9yIGBEYXRlYFxuXHRcdCAqIG9iamVjdDogd2F0Y2ggcGFnZSB1bnRpbCB0aGUgc3BlY2lmaWVkIHRpbWUsIGRlZmVycmluZyB0b1xuXHRcdCAqIGB3YXRjaGxpc3RFeHBpcnlgIGlmIHByb3ZpZGVkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxNb3JlYml0cy5kYXRlfERhdGV9IFt3YXRjaGxpc3RFeHBpcnk9aW5maW5pdHldIC1cblx0XHQgKiBBIGRhdGUtbGlrZSBzdHJpbmcgb3IgbnVtYmVyLCBvciBhIGRhdGUgb2JqZWN0LiAgSWYgYSBzdHJpbmcgb3IgbnVtYmVyLFxuXHRcdCAqIGNhbiBiZSByZWxhdGl2ZSAoMiB3ZWVrcykgb3Igb3RoZXIgc2ltaWxhcmx5IGRhdGUtbGlrZSAoaS5lLiBOT1QgXCJwb3RhdG9cIik6XG5cdFx0ICogSVNPIDg2MDE6IDIwMzgtMDEtMDlUMDM6MTQ6MDdaXG5cdFx0ICogTWVkaWFXaWtpOiAyMDM4MDEwOTAzMTQwN1xuXHRcdCAqIFVOSVg6IDIxNDc0ODM2NDdcblx0XHQgKiBTUUw6IDIwMzgtMDEtMDkgMDM6MTQ6MDdcblx0XHQgKiBDYW4gYWxzbyBiZSBgaW5maW5pdHlgIG9yIGluZmluaXR5LWxpa2UgKGBpbmZpbml0ZWAsIGBpbmRlZmluaXRlYCwgYW5kIGBuZXZlcmApLlxuXHRcdCAqIFNlZSB7QGxpbmsgaHR0cHM6Ly9waGFicmljYXRvci53aWtpbWVkaWEub3JnL3NvdXJjZS9tZWRpYXdpa2ktbGlicy1UaW1lc3RhbXAvYnJvd3NlL21hc3Rlci9zcmMvQ29udmVydGlibGVUaW1lc3RhbXAucGhwOzRlNTNiODU5YTk1ODBjNTU5NTgwNzhmNDZkZDRmM2E0NGQwZmNhYTAkNTctMTA5P2FzPXNvdXJjZSZibGFtZT1vZmZ9XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRXYXRjaGxpc3QgPSAod2F0Y2hsaXN0T3B0aW9uLCB3YXRjaGxpc3RFeHBpcnkpID0+IHtcblx0XHRcdGlmICh3YXRjaGxpc3RPcHRpb24gaW5zdGFuY2VvZiBNb3JlYml0cy5kYXRlIHx8IHdhdGNobGlzdE9wdGlvbiBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdFx0d2F0Y2hsaXN0T3B0aW9uID0gd2F0Y2hsaXN0T3B0aW9uLnRvSVNPU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2F0Y2hsaXN0RXhwaXJ5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gJ2luZmluaXR5Jztcblx0XHRcdH0gZWxzZSBpZiAod2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgTW9yZWJpdHMuZGF0ZSB8fCB3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRcdHdhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeS50b0lTT1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoICh3YXRjaGxpc3RPcHRpb24pIHtcblx0XHRcdFx0Y2FzZSAnbm9jaGFuZ2UnOlxuXHRcdFx0XHRjYXNlICdubyc6XG5cdFx0XHRcdGNhc2UgZmFsc2U6XG5cdFx0XHRcdGNhc2UgdW5kZWZpbmVkOlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAnbm9jaGFuZ2UnO1xuXHRcdFx0XHRcdC8vIFRoZSBNVyBBUEkgYWxsb3dzIGZvciBjaGFuZ2luZyBleHBpcnkgd2l0aCBub2NoYW5nZSAoYXMgXCJub2NoYW5nZVwiIHJlZmVycyB0byB0aGUgYmluYXJ5IHN0YXR1cyksXG5cdFx0XHRcdFx0Ly8gYnV0IGJ5IGtlZXBpbmcgdGhpcyBudWxsIGl0IHdpbGwgZGVmYXVsdCB0byBhbnkgZXhpc3RpbmcgZXhwaXJ5LCBlbnN1cmUgdGhlcmUgaXMgYWN0dWFsbHkgXCJubyBjaGFuZ2UuXCJcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gbnVsbDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndW53YXRjaCc6XG5cdFx0XHRcdFx0Ly8gZXhwaXJ5IHVuaW1wb3J0YW50XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICd1bndhdGNoJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncHJlZmVyZW5jZXMnOlxuXHRcdFx0XHRjYXNlICdkZWZhdWx0Jzpcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3ByZWZlcmVuY2VzJztcblx0XHRcdFx0XHQvLyBUaGUgQVBJIGFsbG93cyBhbiBleHBpcnkgaGVyZSwgYnV0IHRoZXJlIGlzIGFzIG9mIHlldCAoVDI2NTcxNilcblx0XHRcdFx0XHQvLyBubyBleHBpcnkgcHJlZmVyZW5jZSBvcHRpb24sIHNvIGl0J3MgYSBiaXQgZGV2b2lkIG9mIGNvbnRleHQuXG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnd2F0Y2gnOlxuXHRcdFx0XHRjYXNlICd5ZXMnOlxuXHRcdFx0XHRjYXNlIHRydWU6XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICd3YXRjaCc7XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBOb3QgcmVhbGx5IGEgXCJkZWZhdWx0XCIgcGVyIHNlIGJ1dCBjYXRjaGVzIFwiYW55IG90aGVyIHN0cmluZ1wiXG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICd3YXRjaCc7XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdE9wdGlvbjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldCBhIHdhdGNobGlzdCBleHBpcnkuIHNldFdhdGNobGlzdCBjYW4gbW9zdGx5IGhhbmRsZSB0aGlzIGJ5XG5cdFx0ICogaXRzZWxmLCBzbyB0aGlzIGlzIGhlcmUgbGFyZ2VseSBmb3IgY29tcGxldGVuZXNzIGFuZCBjb21wYXRpYmlsaXR5XG5cdFx0ICogd2l0aCB0aGUgZnVsbCBzdWl0ZSBvZiBvcHRpb25zLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfE1vcmViaXRzLmRhdGV8RGF0ZX0gW3dhdGNobGlzdEV4cGlyeT1pbmZpbml0eV0gLVxuXHRcdCAqIEEgZGF0ZS1saWtlIHN0cmluZyBvciBudW1iZXIsIG9yIGEgZGF0ZSBvYmplY3QuICBJZiBhIHN0cmluZyBvciBudW1iZXIsXG5cdFx0ICogY2FuIGJlIHJlbGF0aXZlICgyIHdlZWtzKSBvciBvdGhlciBzaW1pbGFybHkgZGF0ZS1saWtlIChpLmUuIE5PVCBcInBvdGF0b1wiKTpcblx0XHQgKiBJU08gODYwMTogMjAzOC0wMS0wOVQwMzoxNDowN1pcblx0XHQgKiBNZWRpYVdpa2k6IDIwMzgwMTA5MDMxNDA3XG5cdFx0ICogVU5JWDogMjE0NzQ4MzY0N1xuXHRcdCAqIFNRTDogMjAzOC0wMS0wOSAwMzoxNDowN1xuXHRcdCAqIENhbiBhbHNvIGJlIGBpbmZpbml0eWAgb3IgaW5maW5pdHktbGlrZSAoYGluZmluaXRlYCwgYGluZGVmaW5pdGVgLCBhbmQgYG5ldmVyYCkuXG5cdFx0ICogU2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvc291cmNlL21lZGlhd2lraS1saWJzLVRpbWVzdGFtcC9icm93c2UvbWFzdGVyL3NyYy9Db252ZXJ0aWJsZVRpbWVzdGFtcC5waHA7NGU1M2I4NTlhOTU4MGM1NTk1ODA3OGY0NmRkNGYzYTQ0ZDBmY2FhMCQ1Ny0xMDk/YXM9c291cmNlJmJsYW1lPW9mZn1cblx0XHQgKi9cblx0XHR0aGlzLnNldFdhdGNobGlzdEV4cGlyeSA9ICh3YXRjaGxpc3RFeHBpcnkpID0+IHtcblx0XHRcdGlmICh3YXRjaGxpc3RFeHBpcnkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSAnaW5maW5pdHknO1xuXHRcdFx0fSBlbHNlIGlmICh3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBNb3JlYml0cy5kYXRlIHx8IHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5LnRvSVNPU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQGRlcHJlY2F0ZWQgQXMgb2YgRGVjZW1iZXIgMjAyMCwgdXNlIHNldFdhdGNobGlzdC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFt3YXRjaGxpc3RPcHRpb249ZmFsc2VdIC1cblx0XHQgKiAtIGBUcnVlYDogcGFnZSB3YXRjaGxpc3Qgc3RhdHVzIHdpbGwgYmUgc2V0IGJhc2VkIG9uIHRoZSB1c2VyJ3Ncblx0XHQgKiBwcmVmZXJlbmNlIHNldHRpbmdzIHdoZW4gYHNhdmUoKWAgaXMgY2FsbGVkLlxuXHRcdCAqIC0gYEZhbHNlYDogd2F0Y2hsaXN0IHN0YXR1cyBvZiB0aGUgcGFnZSB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuXHRcdCAqXG5cdFx0ICogV2F0Y2hsaXN0IG5vdGVzOlxuXHRcdCAqIDEuIFRoZSBNZWRpYVdpa2kgQVBJIHZhbHVlIG9mICd1bndhdGNoJywgd2hpY2ggZXhwbGljaXRseSByZW1vdmVzXG5cdFx0ICogdGhlIHBhZ2UgZnJvbSB0aGUgdXNlcidzIHdhdGNobGlzdCwgaXMgbm90IHVzZWQuXG5cdFx0ICogMi4gSWYgYm90aCBgc2V0V2F0Y2hsaXN0KClgIGFuZCBgc2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzKClgIGFyZVxuXHRcdCAqIGNhbGxlZCwgdGhlIGxhc3QgY2FsbCB0YWtlcyBwcmlvcml0eS5cblx0XHQgKiAzLiBUd2lua2xlIG1vZHVsZXMgc2hvdWxkIHVzZSB0aGUgYXBwcm9wcmlhdGUgcHJlZmVyZW5jZSB0byBzZXQgdGhlIHdhdGNobGlzdCBvcHRpb25zLlxuXHRcdCAqIDQuIE1vc3QgVHdpbmtsZSBtb2R1bGVzIHVzZSBgc2V0V2F0Y2hsaXN0KClgLiBgc2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzKClgXG5cdFx0ICogaXMgb25seSBuZWVkZWQgZm9yIHRoZSBmZXcgVHdpbmtsZSB3YXRjaGxpc3QgcHJlZmVyZW5jZXMgdGhhdFxuXHRcdCAqIGFjY2VwdCBhIHN0cmluZyB2YWx1ZSBvZiBgZGVmYXVsdGAuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMgPSAod2F0Y2hsaXN0T3B0aW9uKSA9PiB7XG5cdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdCdbTW9yZWJpdHNdIE5PVEU6IE1vcmViaXRzLndpa2kucGFnZS5zZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMgd2FzIGRlcHJlY2F0ZWQgRGVjZW1iZXIgMjAyMCwgcGxlYXNlIHVzZSBzZXRXYXRjaGxpc3QnXG5cdFx0XHQpO1xuXHRcdFx0aWYgKHdhdGNobGlzdE9wdGlvbikge1xuXHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3ByZWZlcmVuY2VzJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAnbm9jaGFuZ2UnO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbZm9sbG93UmVkaXJlY3Q9ZmFsc2VdIC1cblx0XHQgKiAtIGB0cnVlYDogYSBtYXhpbXVtIG9mIG9uZSByZWRpcmVjdCB3aWxsIGJlIGZvbGxvd2VkLiBJbiB0aGUgZXZlbnRcblx0XHQgKiBvZiBhIHJlZGlyZWN0LCBhIG1lc3NhZ2UgaXMgZGlzcGxheWVkIHRvIHRoZSB1c2VyIGFuZCB0aGUgcmVkaXJlY3Rcblx0XHQgKiB0YXJnZXQgY2FuIGJlIHJldHJpZXZlZCB3aXRoIGdldFBhZ2VOYW1lKCkuXG5cdFx0ICogLSBgZmFsc2VgOiAoZGVmYXVsdCkgdGhlIHJlcXVlc3RlZCBwYWdlTmFtZSB3aWxsIGJlIHVzZWQgd2l0aG91dCByZWdhcmQgdG8gYW55IHJlZGlyZWN0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvbGxvd0Nyb3NzTnNSZWRpcmVjdD10cnVlXSAtIE5vdCBhcHBsaWNhYmxlIGlmIGBmb2xsb3dSZWRpcmVjdGAgaXMgbm90IHNldCB0cnVlLlxuXHRcdCAqIC0gYHRydWVgOiAoZGVmYXVsdCkgZm9sbG93IHJlZGlyZWN0IGV2ZW4gaWYgaXQgaXMgYSBjcm9zcy1uYW1lc3BhY2UgcmVkaXJlY3Rcblx0XHQgKiAtIGBmYWxzZWA6IGRvbid0IGZvbGxvdyByZWRpcmVjdCBpZiBpdCBpcyBjcm9zcy1uYW1lc3BhY2UsIGVkaXQgdGhlIHJlZGlyZWN0IGl0c2VsZi5cblx0XHQgKi9cblx0XHR0aGlzLnNldEZvbGxvd1JlZGlyZWN0ID0gKGZvbGxvd1JlZGlyZWN0LCBmb2xsb3dDcm9zc05zUmVkaXJlY3QpID0+IHtcblx0XHRcdGlmIChjdHgucGFnZUxvYWRlZCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHQnSW50ZXJuYWwgZXJyb3I6IGNhbm5vdCBjaGFuZ2UgcmVkaXJlY3Qgc2V0dGluZyBhZnRlciB0aGUgcGFnZSBoYXMgYmVlbiBsb2FkZWQhJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguZm9sbG93UmVkaXJlY3QgPSBmb2xsb3dSZWRpcmVjdDtcblx0XHRcdGN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QgPVxuXHRcdFx0XHRmb2xsb3dDcm9zc05zUmVkaXJlY3QgPT09IHVuZGVmaW5lZCA/IGN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QgOiBmb2xsb3dDcm9zc05zUmVkaXJlY3Q7XG5cdFx0fTtcblx0XHQvLyBsb29rdXAtY3JlYXRpb24gc2V0dGVyIGZ1bmN0aW9uXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBmbGFnIC0gSWYgc2V0IHRydWUsIHRoZSBhdXRob3IgYW5kIHRpbWVzdGFtcCBvZlxuXHRcdCAqIHRoZSBmaXJzdCBub24tcmVkaXJlY3QgdmVyc2lvbiBvZiB0aGUgcGFnZSBpcyByZXRyaWV2ZWQuXG5cdFx0ICpcblx0XHQgKiBXYXJuaW5nOlxuXHRcdCAqIDEuIElmIHRoZXJlIGFyZSBubyByZXZpc2lvbnMgYW1vbmcgdGhlIGZpcnN0IDUwIHRoYXQgYXJlXG5cdFx0ICogbm9uLXJlZGlyZWN0cywgb3IgaWYgdGhlcmUgYXJlIGxlc3MgNTAgcmV2aXNpb25zIGFuZCBhbGwgYXJlXG5cdFx0ICogcmVkaXJlY3RzLCB0aGUgb3JpZ2luYWwgY3JlYXRpb24gaXMgcmV0cmlldmVkLlxuXHRcdCAqIDIuIFJldmlzaW9ucyB0aGF0IHRoZSB1c2VyIGlzIG5vdCBwcml2aWxlZ2VkIHRvIGFjY2Vzc1xuXHRcdCAqIChyZXZkZWxlZC9zdXBwcmVzc2VkKSB3aWxsIGJlIHRyZWF0ZWQgYXMgbm9uLXJlZGlyZWN0cy5cblx0XHQgKiAzLiBNdXN0IG5vdCBiZSB1c2VkIHdoZW4gdGhlIHBhZ2UgaGFzIGEgbm9uLXdpa2l0ZXh0IGNvbnRlbnRtb2RlbFxuXHRcdCAqIHN1Y2ggYXMgTW9kdWxlc3BhY2UgTHVhIG9yIHVzZXIgSmF2YVNjcmlwdC9DU1MuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRMb29rdXBOb25SZWRpcmVjdENyZWF0b3IgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lmxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IGZsYWc7XG5cdFx0fTtcblx0XHQvLyBNb3ZlLXJlbGF0ZWQgc2V0dGVyIGZ1bmN0aW9uc1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gZGVzdGluYXRpb24gKi9cblx0XHR0aGlzLnNldE1vdmVEZXN0aW5hdGlvbiA9IChkZXN0aW5hdGlvbikgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVEZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAqL1xuXHRcdHRoaXMuc2V0TW92ZVRhbGtQYWdlID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5tb3ZlVGFsa1BhZ2UgPSAhIWZsYWc7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBmbGFnICovXG5cdFx0dGhpcy5zZXRNb3ZlU3VicGFnZXMgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVTdWJwYWdlcyA9ICEhZmxhZztcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgKi9cblx0XHR0aGlzLnNldE1vdmVTdXBwcmVzc1JlZGlyZWN0ID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5tb3ZlU3VwcHJlc3NSZWRpcmVjdCA9ICEhZmxhZztcblx0XHR9O1xuXHRcdC8vIFByb3RlY3QtcmVsYXRlZCBzZXR0ZXIgZnVuY3Rpb25zXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIC0gVGhlIHJpZ2h0IHJlcXVpcmVkIGZvciB0aGUgc3BlY2lmaWMgYWN0aW9uXG5cdFx0ICogZS5nLiBzeXNvcCwgdGVtcGxhdGVlZGl0b3IsIGF1dG9jb25maXJtZWRcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGlyeT1pbmZpbml0eV1cblx0XHQgKi9cblx0XHR0aGlzLnNldEVkaXRQcm90ZWN0aW9uID0gKGxldmVsLCBleHBpcnkpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0RWRpdCA9IHtcblx0XHRcdFx0bGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5IHx8ICdpbmZpbml0eScsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0dGhpcy5zZXRNb3ZlUHJvdGVjdGlvbiA9IChsZXZlbCwgZXhwaXJ5KSA9PiB7XG5cdFx0XHRjdHgucHJvdGVjdE1vdmUgPSB7XG5cdFx0XHRcdGxldmVsLFxuXHRcdFx0XHRleHBpcnk6IGV4cGlyeSB8fCAnaW5maW5pdHknLFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdHRoaXMuc2V0Q3JlYXRlUHJvdGVjdGlvbiA9IChsZXZlbCwgZXhwaXJ5KSA9PiB7XG5cdFx0XHRjdHgucHJvdGVjdENyZWF0ZSA9IHtcblx0XHRcdFx0bGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5IHx8ICdpbmZpbml0eScsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0dGhpcy5zZXRDYXNjYWRpbmdQcm90ZWN0aW9uID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0Q2FzY2FkZSA9ICEhZmxhZztcblx0XHR9O1xuXHRcdHRoaXMuc3VwcHJlc3NQcm90ZWN0V2FybmluZyA9ICgpID0+IHtcblx0XHRcdGN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nID0gdHJ1ZTtcblx0XHR9O1xuXHRcdC8vIFJldmVydC1yZWxhdGVkIGdldHRlcnMvc2V0dGVyczpcblx0XHR0aGlzLnNldE9sZElEID0gKG9sZElEKSA9PiB7XG5cdFx0XHRjdHgucmV2ZXJ0T2xkSUQgPSBvbGRJRDtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY3VycmVudCByZXZpc2lvbiBJRCBvZiB0aGUgcGFnZSAqL1xuXHRcdHRoaXMuZ2V0Q3VycmVudElEID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5yZXZlcnRDdXJJRDtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBMYXN0IGVkaXRvciBvZiB0aGUgcGFnZSAqL1xuXHRcdHRoaXMuZ2V0UmV2aXNpb25Vc2VyID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5yZXZlcnRVc2VyO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IElTTyA4NjAxIHRpbWVzdGFtcCBhdCB3aGljaCB0aGUgcGFnZSB3YXMgbGFzdCBlZGl0ZWQuICovXG5cdFx0dGhpcy5nZXRMYXN0RWRpdFRpbWUgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4Lmxhc3RFZGl0VGltZTtcblx0XHR9O1xuXHRcdC8vIE1pc2NlbGxhbmVvdXMgZ2V0dGVycy9zZXR0ZXJzOlxuXHRcdC8qKlxuXHRcdCAqIERlZmluZSBhbiBvYmplY3QgZm9yIHVzZSBpbiBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHRcdCAqXG5cdFx0ICogYGNhbGxiYWNrUGFyYW1ldGVyc2AgaXMgZm9yIHVzZSBieSB0aGUgY2FsbGVyIG9ubHkuIFRoZSBwYXJhbWV0ZXJzXG5cdFx0ICogYWxsb3cgYSBjYWxsZXIgdG8gcGFzcyB0aGUgcHJvcGVyIGNvbnRleHQgaW50byBpdHMgY2FsbGJhY2tcblx0XHQgKiBmdW5jdGlvbi4gIENhbGxlcnMgbXVzdCBlbnN1cmUgdGhhdCBhbnkgY2hhbmdlcyB0byB0aGVcblx0XHQgKiBjYWxsYmFja1BhcmFtZXRlcnMgb2JqZWN0IHdpdGhpbiBhIGBsb2FkKClgIGNhbGxiYWNrIHN0aWxsIHBlcm1pdCBhXG5cdFx0ICogcHJvcGVyIHJlLWVudHJ5IGludG8gdGhlIGBsb2FkKClgIGNhbGxiYWNrIGlmIGFuIGVkaXQgY29uZmxpY3QgaXNcblx0XHQgKiBkZXRlY3RlZCB1cG9uIGNhbGxpbmcgYHNhdmUoKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2tQYXJhbWV0ZXJzXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRDYWxsYmFja1BhcmFtZXRlcnMgPSAoY2FsbGJhY2tQYXJhbWV0ZXJzKSA9PiB7XG5cdFx0XHRjdHguY2FsbGJhY2tQYXJhbWV0ZXJzID0gY2FsbGJhY2tQYXJhbWV0ZXJzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge09iamVjdH0gLSBUaGUgb2JqZWN0IHByZXZpb3VzbHkgc2V0IGJ5IGBzZXRDYWxsYmFja1BhcmFtZXRlcnMoKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDYWxsYmFja1BhcmFtZXRlcnMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LmNhbGxiYWNrUGFyYW1ldGVycztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7TW9yZWJpdHMuc3RhdHVzfSBzdGF0dXNFbGVtZW50XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRTdGF0dXNFbGVtZW50ID0gKHN0YXR1c0VsZW1lbnQpID0+IHtcblx0XHRcdGN0eC5zdGF0dXNFbGVtZW50ID0gc3RhdHVzRWxlbWVudDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IFN0YXR1cyBlbGVtZW50IGNyZWF0ZWQgYnkgdGhlIGNvbnN0cnVjdG9yLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0U3RhdHVzRWxlbWVudCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguc3RhdHVzRWxlbWVudDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYWdlIGV4aXN0ZWQgb24gdGhlIHdpa2kgd2hlbiBpdCB3YXMgbGFzdCBsb2FkZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5leGlzdHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VFeGlzdHM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBQYWdlIElEIG9mIHRoZSBwYWdlIGxvYWRlZC4gMCBpZiB0aGUgcGFnZSBkb2Vzbid0XG5cdFx0ICogZXhpc3QuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRQYWdlSUQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VJRDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ29udGVudCBtb2RlbCBvZiB0aGUgcGFnZS4gIFBvc3NpYmxlIHZhbHVlc1xuXHRcdCAqIGluY2x1ZGUgKGJ1dCBtYXkgbm90IGJlIGxpbWl0ZWQgdG8pOiBgd2lraXRleHRgLCBgamF2YXNjcmlwdGAsXG5cdFx0ICogYGNzc2AsIGBqc29uYCwgYFNjcmlidW50b2AsIGBzYW5pdGl6ZWQtY3NzYCwgYE1hc3NNZXNzYWdlTGlzdENvbnRlbnRgLlxuXHRcdCAqIEFsc28gZ2V0dGFibGUgdmlhIGBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDb250ZW50TW9kZWwgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LmNvbnRlbnRNb2RlbDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufHN0cmluZ30gLSBXYXRjaGVkIHN0YXR1cyBvZiB0aGUgcGFnZS4gQm9vbGVhblxuXHRcdCAqIHVubGVzcyBpdCdzIGJlaW5nIHdhdGNoZWQgdGVtcG9yYXJpbHksIGluIHdoaWNoIGNhc2UgcmV0dXJucyB0aGVcblx0XHQgKiBleHBpcnkgc3RyaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0V2F0Y2hlZCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgud2F0Y2hlZDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IElTTyA4NjAxIHRpbWVzdGFtcCBhdCB3aGljaCB0aGUgcGFnZSB3YXMgbGFzdCBsb2FkZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRMb2FkVGltZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgubG9hZFRpbWU7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgdXNlciB3aG8gY3JlYXRlZCB0aGUgcGFnZSBmb2xsb3dpbmcgYGxvb2t1cENyZWF0aW9uKClgLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0Q3JlYXRvciA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguY3JlYXRvcjtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBJU09TdHJpbmcgdGltZXN0YW1wIG9mIHBhZ2UgY3JlYXRpb24gZm9sbG93aW5nIGBsb29rdXBDcmVhdGlvbigpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENyZWF0aW9uVGltZXN0YW1wID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC50aW1lc3RhbXA7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgb3Igbm90IHlvdSBjYW4gZWRpdCB0aGUgcGFnZSAqL1xuXHRcdHRoaXMuY2FuRWRpdCA9ICgpID0+IHtcblx0XHRcdHJldHVybiAhIWN0eC50ZXN0QWN0aW9ucyAmJiBjdHgudGVzdEFjdGlvbnMuaW5jbHVkZXMoJ2VkaXQnKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJldHJpZXZlcyB0aGUgdXNlcm5hbWUgb2YgdGhlIHVzZXIgd2hvIGNyZWF0ZWQgdGhlIHBhZ2UgYXMgd2VsbCBhc1xuXHRcdCAqIHRoZSB0aW1lc3RhbXAgb2YgY3JlYXRpb24uICBUaGUgdXNlcm5hbWUgY2FuIGJlIHJldHJpZXZlZCB1c2luZyB0aGVcblx0XHQgKiBgZ2V0Q3JlYXRvcigpYCBmdW5jdGlvbjsgdGhlIHRpbWVzdGFtcCBjYW4gYmUgcmV0cmlldmVkIHVzaW5nIHRoZVxuXHRcdCAqIGBnZXRDcmVhdGlvblRpbWVzdGFtcCgpYCBmdW5jdGlvbi5cblx0XHQgKiBQcmlvciB0byBKdW5lIDIwMTkga25vd24gYXMgYGxvb2t1cENyZWF0b3IoKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblN1Y2Nlc3MgLSBDYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlblxuXHRcdCAqIHRoZSB1c2VybmFtZSBhbmQgdGltZXN0YW1wIGFyZSBmb3VuZCB3aXRoaW4gdGhlIGNhbGxiYWNrLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW5cblx0XHQgKiB0aGUgbG9va3VwIGZhaWxzXG5cdFx0ICovXG5cdFx0dGhpcy5sb29rdXBDcmVhdGlvbiA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIW9uU3VjY2Vzcykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5vIG9uU3VjY2VzcyBjYWxsYmFjayBwcm92aWRlZCB0byBsb29rdXBDcmVhdGlvbigpIScpO1xuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0cnZsaW1pdDogMSxcblx0XHRcdFx0cnZwcm9wOiAndXNlcnx0aW1lc3RhbXAnLFxuXHRcdFx0XHRydmRpcjogJ25ld2VyJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gT25seSB0aGUgd2lraXRleHQgY29udGVudCBtb2RlbCBjYW4gcmVsaWFibHkgaGFuZGxlXG5cdFx0XHQvLyBydnNlY3Rpb24sIG90aGVycyByZXR1cm4gYW4gZXJyb3Igd2hlbiBwYWlyZWQgd2l0aCB0aGVcblx0XHRcdC8vIGNvbnRlbnQgcnZwcm9wLiBSZWxhdGVkbHksIG5vbi13aWtpdGV4dCBtb2RlbHMgZG9uJ3Rcblx0XHRcdC8vIHVuZGVyc3RhbmQgdGhlICNSRURJUkVDVCBjb25jZXB0LCBzbyB3ZSBzaG91bGRuJ3QgYXR0ZW1wdFxuXHRcdFx0Ly8gdGhlIHJlZGlyZWN0IHJlc29sdXRpb24gaW4gZm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3Ncblx0XHRcdGlmIChjdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yKSB7XG5cdFx0XHRcdHF1ZXJ5LnJ2c2VjdGlvbiA9IDA7XG5cdFx0XHRcdHF1ZXJ5LnJ2cHJvcCArPSAnfGNvbnRlbnQnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRxdWVyeS5yZWRpcmVjdHMgPSAnJzsgLy8gZm9sbG93IGFsbCByZWRpcmVjdHNcblx0XHRcdH1cblxuXHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aKk+WPlumhtemdouWIm+W7uuiAheS/oeaBrycsICfmipPlj5bpoIHpnaLlu7rnq4vogIXos4foqIonKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGZuTG9va3VwQ3JlYXRpb25TdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBSZXZlcnRzIGEgcGFnZSB0byBgcmV2ZXJ0T2xkSURgIHNldCBieSBgc2V0T2xkSURgLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMucmV2ZXJ0ID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWN0eC5yZXZlcnRPbGRJRCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IHJldmlzaW9uIElEIHRvIHJldmVydCB0byB3YXMgbm90IHNldCBiZWZvcmUgcmV2ZXJ0IScpO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ3JldmVydCc7XG5cdFx0XHR0aGlzLmxvYWQoZm5BdXRvU2F2ZSwgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogTW92ZXMgYSBwYWdlIHRvIGFub3RoZXIgdGl0bGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy5tb3ZlID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Nb3ZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vbk1vdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ21vdmUnLCBjdHgub25Nb3ZlRmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWN0eC5tb3ZlRGVzdGluYXRpb24pIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBkZXN0aW5hdGlvbiBwYWdlIG5hbWUgd2FzIG5vdCBzZXQgYmVmb3JlIG1vdmUhJyk7XG5cdFx0XHRcdGN0eC5vbk1vdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignbW92ZScpKSB7XG5cdFx0XHRcdGZuUHJvY2Vzc01vdmUuY2FsbCh0aGlzLCB0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ21vdmUnKTtcblx0XHRcdFx0Y3R4Lm1vdmVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0Zm5Qcm9jZXNzTW92ZSxcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0XHRjdHgub25Nb3ZlRmFpbHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgubW92ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5tb3ZlQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIE1hcmtzIHRoZSBwYWdlIGFzIHBhdHJvbGxlZCwgdXNpbmcgYHJjaWRgIChpZiBhdmFpbGFibGUpIG9yIGByZXZpZGAuXG5cdFx0ICpcblx0XHQgKiBQYXRyb2xsaW5nIGFzIHN1Y2ggZG9lc24ndCBuZWVkIHRvIHJlbHkgb24gbG9hZGluZyB0aGUgcGFnZSBpblxuXHRcdCAqIHF1ZXN0aW9uOyBzaW1wbHkgcGFzc2luZyBhIHJldmlkIHRvIHRoZSBBUEkgaXMgc3VmZmljaWVudCwgc28gaW5cblx0XHQgKiB0aG9zZSBjYXNlcyBqdXN0IHVzaW5nIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gaXMgcHJvYmFibHkgcHJlZmVyYWJsZS5cblx0XHQgKlxuXHRcdCAqIE5vIGVycm9yIGhhbmRsaW5nIHNpbmNlIHdlIGRvbid0IGFjdHVhbGx5IGNhcmUgYWJvdXQgdGhlIGVycm9ycy5cblx0XHQgKi9cblx0XHR0aGlzLnBhdHJvbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICghTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgIU1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3BhdHJvbGxlcicpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0Ly8gSWYgYSBsaW5rIGlzIHByZXNlbnQsIGRvbid0IG5lZWQgdG8gY2hlY2sgaWYgaXQncyBwYXRyb2xsZWRcblx0XHRcdGlmICgkYm9keS5maW5kKCcucGF0cm9sbGluaycpLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBwYXRyb2xocmVmID0gJGJvZHkuZmluZCgnLnBhdHJvbGxpbmsgYScpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdFx0Y3R4LnJjaWQgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JjaWQnLCBwYXRyb2xocmVmKTtcblx0XHRcdFx0Zm5Qcm9jZXNzUGF0cm9sKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcGF0cm9sUXVlcnkgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0XHR0eXBlOiAncGF0cm9sJyxcblx0XHRcdFx0XHQvLyBhcyBsb25nIGFzIHdlJ3JlIHF1ZXJ5aW5nLCBtaWdodCBhcyB3ZWxsIGdldCBhIHRva2VuXG5cdFx0XHRcdFx0bGlzdDogJ3JlY2VudGNoYW5nZXMnLFxuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHRoZSBwYWdlIGlzIHVucGF0cm9sbGVkXG5cdFx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdFx0cmNwcm9wOiAncGF0cm9sbGVkJyxcblx0XHRcdFx0XHRyY3RpdGxlOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdFx0cmNsaW1pdDogMSxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0fTtcblx0XHRcdFx0Y3R4LnBhdHJvbEFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRwYXRyb2xRdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NQYXRyb2xcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4LnBhdHJvbEFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5wYXRyb2xBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Ly8gfGRlbGV0ZXwgaXMgYSByZXNlcnZlZCB3b3JkIGluIHNvbWUgZmxhdm91cnMgb2YgSlNcblx0XHQvKipcblx0XHQgKiBEZWxldGVzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLmRlbGV0ZVBhZ2UgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vbkRlbGV0ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25EZWxldGVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ2RlbGV0ZScsIGN0eC5vbkRlbGV0ZUZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2RlbGV0ZScpKSB7XG5cdFx0XHRcdGZuUHJvY2Vzc0RlbGV0ZS5jYWxsKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgnZGVsZXRlJyk7XG5cdFx0XHRcdGN0eC5kZWxldGVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0Zm5Qcm9jZXNzRGVsZXRlLFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRcdGN0eC5vbkRlbGV0ZUZhaWx1cmVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4LmRlbGV0ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5kZWxldGVBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogVW5kZWxldGVzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLnVuZGVsZXRlUGFnZSA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uVW5kZWxldGVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ3VuZGVsZXRlJywgY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCd1bmRlbGV0ZScpKSB7XG5cdFx0XHRcdGZuUHJvY2Vzc1VuZGVsZXRlLmNhbGwodGhpcywgdGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBxdWVyeSA9IGZuTmVlZFRva2VuSW5mb1F1ZXJ5KCd1bmRlbGV0ZScpO1xuXHRcdFx0XHRjdHgudW5kZWxldGVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0Zm5Qcm9jZXNzVW5kZWxldGUsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC51bmRlbGV0ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC51bmRlbGV0ZUFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBQcm90ZWN0cyBhIHBhZ2UgKGZvciBhZG1pbnMgb25seSkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy5wcm90ZWN0ID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Qcm90ZWN0U3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ3Byb3RlY3QnLCBjdHgub25Qcm90ZWN0RmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWN0eC5wcm90ZWN0RWRpdCAmJiAhY3R4LnByb3RlY3RNb3ZlICYmICFjdHgucHJvdGVjdENyZWF0ZSkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHQnSW50ZXJuYWwgZXJyb3I6IHlvdSBtdXN0IHNldCBlZGl0IGFuZC9vciBtb3ZlIGFuZC9vciBjcmVhdGUgcHJvdGVjdGlvbiBiZWZvcmUgY2FsbGluZyBwcm90ZWN0KCkhJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gYmVjYXVzZSBvZiB0aGUgd2F5IE1XIEFQSSBpbnRlcnByZXRzIHByb3RlY3Rpb24gbGV2ZWxzXG5cdFx0XHQvLyAoYWJzb2x1dGUsIG5vdCBkaWZmZXJlbnRpYWwpLCB3ZSBhbHdheXMgbmVlZCB0byByZXF1ZXN0XG5cdFx0XHQvLyBwcm90ZWN0aW9uIGxldmVscyBmcm9tIHRoZSBzZXJ2ZXJcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ3Byb3RlY3QnKTtcblx0XHRcdGN0eC5wcm90ZWN0QXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGZuUHJvY2Vzc1Byb3RlY3QsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5wcm90ZWN0QXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5wcm90ZWN0QXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qXG5cdFx0ICogUHJpdmF0ZSBtZW1iZXIgZnVuY3Rpb25zXG5cdFx0ICogVGhlc2UgYXJlIG5vdCBleHBvc2VkIG91dHNpZGVcblx0XHQgKi9cblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgd2UgY2FuIHNhdmUgYW4gQVBJIGNhbGwgYnkgdXNpbmcgdGhlIGNzcmYgdG9rZW5cblx0XHQgKiBzZW50IHdpdGggdGhlIHBhZ2UgSFRNTCwgb3Igd2hldGhlciB3ZSBuZWVkIHRvIGFzayB0aGUgc2VydmVyIGZvclxuXHRcdCAqIG1vcmUgaW5mbyAoZS5nLiBwcm90ZWN0aW9uIG9yIHdhdGNobGlzdCBleHBpcnkpLlxuXHRcdCAqXG5cdFx0ICogQ3VycmVudGx5IHVzZWQgZm9yIGBhcHBlbmRgLCBgcHJlcGVuZGAsIGBuZXdTZWN0aW9uYCwgYG1vdmVgLFxuXHRcdCAqIGBkZWxldGVQYWdlYCwgYW5kIGB1bmRlbGV0ZVBhZ2VgLiBOb3QgdXNlZCBmb3IgYHByb3RlY3RgXG5cdFx0ICogc2luY2UgaXQgYWx3YXlzIG5lZWRzIHRvIHJlcXVlc3QgcHJvdGVjdGlvbiBzdGF0dXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2FjdGlvbj1lZGl0XSAtIFRoZSBhY3Rpb24gYmVpbmcgdW5kZXJ0YWtlbiwgZS5nLlxuXHRcdCAqIFwiZWRpdFwiIG9yIFwiZGVsZXRlXCIuIEluIHByYWN0aWNlLCBvbmx5IFwiZWRpdFwiIG9yIFwibm90ZWRpdFwiIG1hdHRlcnMuXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5DYW5Vc2VNd1VzZXJUb2tlbiA9IChhY3Rpb24pID0+IHtcblx0XHRcdGFjdGlvbiB8fD0gJ2VkaXQnO1xuXHRcdFx0Ly8gSWYgYSB3YXRjaGxpc3QgZXhwaXJ5IGlzIHNldCwgd2UgbXVzdCBhbHdheXMgbG9hZCB0aGUgcGFnZVxuXHRcdFx0Ly8gdG8gYXZvaWQgb3ZlcndyaXRpbmcgaW5kZWZpbml0ZSBwcm90ZWN0aW9uLiAgT2YgY291cnNlLCBub3Rcblx0XHRcdC8vIG5lZWRlZCBpZiBzZXR0aW5nIGluZGVmaW5pdGUgd2F0Y2hpbmchXG5cdFx0XHRpZiAoY3R4LndhdGNobGlzdEV4cGlyeSAmJiAhTW9yZWJpdHMuc3RyaW5nLmlzSW5maW5pdHkoY3R4LndhdGNobGlzdEV4cGlyeSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQVBJLWJhc2VkIHJlZGlyZWN0IHJlc29sdXRpb24gb25seSB3b3JrcyBmb3IgYWN0aW9uPXF1ZXJ5IGFuZFxuXHRcdFx0Ly8gYWN0aW9uPWVkaXQgaW4gYXBwZW5kL3ByZXBlbmQvbmV3IG1vZGVzXG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdGlmICghY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gbXVzdCBsb2FkIHRoZSBwYWdlIHRvIGNoZWNrIGZvciBjcm9zcyBuYW1lc3BhY2UgcmVkaXJlY3RzXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWN0aW9uICE9PSAnZWRpdCcgfHwgY3R4LmVkaXRNb2RlID09PSAnYWxsJyB8fCBjdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBkbyB3ZSBuZWVkIHRvIGZldGNoIHRoZSBlZGl0IHByb3RlY3Rpb24gZXhwaXJ5P1xuXHRcdFx0aWYgKE1vcmViaXRzLnVzZXJJc1N5c29wICYmICFjdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0bmV3IG13LlRpdGxlKE1vcmViaXRzLnBhZ2VOYW1lTm9ybSkuZ2V0UHJlZml4ZWRUZXh0KCkgIT09XG5cdFx0XHRcdFx0bmV3IG13LlRpdGxlKGN0eC5wYWdlTmFtZSkuZ2V0UHJlZml4ZWRUZXh0KClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHdnUmVzdHJpY3Rpb25FZGl0IGlzIG51bGwgb24gbm9uLWV4aXN0ZW50IHBhZ2VzLFxuXHRcdFx0XHQvLyBzbyB0aGlzIG5lYXRseSBoYW5kbGVzIG5vbmV4aXN0ZW50IHBhZ2VzXG5cdFx0XHRcdGNvbnN0IGVkaXRSZXN0cmljdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnUmVzdHJpY3Rpb25FZGl0Jyk7XG5cdFx0XHRcdGlmICghZWRpdFJlc3RyaWN0aW9uIHx8IGVkaXRSZXN0cmljdGlvbi5pbmNsdWRlcygnc3lzb3AnKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICEhbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFdoZW4gZnVuY3Rpb25zIGNhbid0IHVzZVxuXHRcdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V+Zm5DYW5Vc2VNd1VzZXJUb2tlbnxmbkNhblVzZU13VXNlclRva2VufVxuXHRcdCAqIG9yIHJlcXVpcmUgY2hlY2tpbmcgcHJvdGVjdGlvbiBvciB3YXRjaGVkIHN0YXR1cywgbWFpbnRhaW4gdGhlIHF1ZXJ5XG5cdFx0ICogaW4gb25lIHBsYWNlLiBVc2VkIGZvciB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI2RlbGV0ZVBhZ2V8ZGVsZXRlfSxcblx0XHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI3VuZGVsZXRlUGFnZXx1bmRlbGV0ZX0sXG5cdFx0ICoge0BsaW5rKiBNb3JlYml0cy53aWtpLnBhZ2UjcHJvdGVjdHxwcm90ZWN0fSxcblx0XHQgKiBhbmQge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSNtb3ZlfG1vdmV9XG5cdFx0ICogKGJhc2ljYWxseSwganVzdCBub3Qge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSNsb2FkfGxvYWR9KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gLSBUaGUgYWN0aW9uIGJlaW5nIHVuZGVydGFrZW4sIGUuZy4gXCJlZGl0XCIgb3Jcblx0XHQgKiBcImRlbGV0ZVwiLlxuXHRcdCAqIEByZXR1cm5zIHtPYmplY3R9IEFwcHJvcHJpYXRlIHF1ZXJ5LlxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuTmVlZFRva2VuSW5mb1F1ZXJ5ID0gKGFjdGlvbikgPT4ge1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0aW5wcm9wOiAnd2F0Y2hlZCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdC8vIFByb3RlY3Rpb24gbm90IGNoZWNrZWQgZm9yIG5vbi1zeXNvcCBtb3Zlc1xuXHRcdFx0aWYgKGFjdGlvbiAhPT0gJ21vdmUnIHx8IE1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHRcdHF1ZXJ5LmlucHJvcCArPSAnfHByb3RlY3Rpb24nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCAmJiBhY3Rpb24gIT09ICd1bmRlbGV0ZScpIHtcblx0XHRcdFx0cXVlcnkucmVkaXJlY3RzID0gJyc7IC8vIGZvbGxvdyBhbGwgcmVkaXJlY3RzXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBxdWVyeTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gbG9hZFN1Y2Nlc3MoKSBmb3IgYXBwZW5kKCksIHByZXBlbmQoKSwgYW5kIG5ld1NlY3Rpb24oKSB0aHJlYWRzXG5cdFx0Y29uc3QgZm5BdXRvU2F2ZSA9IChwYWdlb2JqKSA9PiB7XG5cdFx0XHRwYWdlb2JqLnNhdmUoY3R4Lm9uU2F2ZVN1Y2Nlc3MsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gbG9hZEFwaS5wb3N0KClcblx0XHRjb25zdCBmbkxvYWRTdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubG9hZEFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0aWYgKCFmbkNoZWNrUGFnZU5hbWUocmVzcG9uc2UsIGN0eC5vbkxvYWRGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0bGV0IHJldjtcblx0XHRcdGN0eC5wYWdlRXhpc3RzID0gIXBhZ2UubWlzc2luZztcblx0XHRcdGlmIChjdHgucGFnZUV4aXN0cykge1xuXHRcdFx0XHRbcmV2XSA9IHBhZ2UucmV2aXNpb25zO1xuXHRcdFx0XHRjdHgubGFzdEVkaXRUaW1lID0gcmV2LnRpbWVzdGFtcDtcblx0XHRcdFx0Y3R4LnBhZ2VUZXh0ID0gcmV2LmNvbnRlbnQ7XG5cdFx0XHRcdGN0eC5wYWdlSUQgPSBwYWdlLnBhZ2VpZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5wYWdlVGV4dCA9ICcnOyAvLyBhbGxvdyBmb3IgY29uY2F0ZW5hdGlvbiwgZXRjLlxuXHRcdFx0XHRjdHgucGFnZUlEID0gMDsgLy8gbm9uZXhpc3RlbnQgaW4gcmVzcG9uc2UsIG1hdGNoZXMgd2dBcnRpY2xlSWRcblx0XHRcdH1cblxuXHRcdFx0Y3R4LmNzcmZUb2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRpZiAoIWN0eC5jc3JmVG9rZW4pIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmnKrog73ojrflj5bnvJbovpHku6TniYzjgIInLCAn5pyq6IO95Y+W5b6X57eo6Lyv5qyK5p2W44CCJykpO1xuXHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmxvYWRUaW1lID0gY3R4LmxvYWRBcGkuZ2V0UmVzcG9uc2UoKS5jdXJ0aW1lc3RhbXA7XG5cdFx0XHRpZiAoIWN0eC5sb2FkVGltZSkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+acquiDveiOt+WPluW9k+WJjeaXtumXtOaIs+OAgicsICfmnKrog73lj5blvpfnlbbliY3mmYLplpPmiLPjgIInKSk7XG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguY29udGVudE1vZGVsID0gcGFnZS5jb250ZW50bW9kZWw7XG5cdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdC8vIGV4dHJhY3QgcHJvdGVjdGlvbiBpbmZvLCB0byBhbGVydCBhZG1pbnMgd2hlbiB0aGV5IGFyZSBhYm91dCB0byBlZGl0IGEgcHJvdGVjdGVkIHBhZ2Vcblx0XHRcdC8vIEluY2x1ZGVzIGNhc2NhZGluZyBwcm90ZWN0aW9uXG5cdFx0XHRpZiAoTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdFx0Y29uc3QgZWRpdFByb3QgPSBwYWdlLnByb3RlY3Rpb25cblx0XHRcdFx0XHQuZmlsdGVyKChwcikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByLnR5cGUgPT09ICdlZGl0JyAmJiBwci5sZXZlbCA9PT0gJ3N5c29wJztcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5wb3AoKTtcblx0XHRcdFx0aWYgKGVkaXRQcm90KSB7XG5cdFx0XHRcdFx0Y3R4LmZ1bGx5UHJvdGVjdGVkID0gZWRpdFByb3QuZXhwaXJ5O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN0eC5mdWxseVByb3RlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjdHgucmV2ZXJ0Q3VySUQgPSBwYWdlLmxhc3RyZXZpZDtcblx0XHRcdGNvbnN0IHRlc3RhY3Rpb25zID0gcGFnZS5hY3Rpb25zO1xuXHRcdFx0Y3R4LnRlc3RBY3Rpb25zID0gW107IC8vIHdhcyBudWxsXG5cdFx0XHRmb3IgKGNvbnN0IGFjdGlvbiBvZiBPYmplY3Qua2V5cyh0ZXN0YWN0aW9ucykpIHtcblx0XHRcdFx0aWYgKHRlc3RhY3Rpb25zW2FjdGlvbl0pIHtcblx0XHRcdFx0XHRjdHgudGVzdEFjdGlvbnNbY3R4LnRlc3RBY3Rpb25zLmxlbmd0aF0gPSBhY3Rpb247XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHRcdGN0eC5yZXZlcnRDdXJJRCA9IHJldiAmJiByZXYucmV2aWQ7XG5cdFx0XHRcdGlmICghY3R4LnJldmVydEN1cklEKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmnKrog73ojrflj5blvZPliY3kv67orqLniYjmnKxJROOAgicsICfmnKrog73lj5blvpfnm67liY3kv67oqILniYjmnKxJROOAgicpKTtcblx0XHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnJldmVydFVzZXIgPSByZXYgJiYgcmV2LnVzZXI7XG5cdFx0XHRcdGlmICghY3R4LnJldmVydFVzZXIpIHtcblx0XHRcdFx0XHRpZiAocmV2ICYmIHJldi51c2VyaGlkZGVuKSB7XG5cdFx0XHRcdFx0XHQvLyB1c2VybmFtZSB3YXMgUmV2RGVsJ2Qgb3Igb3ZlcnNpZ2h0ZWRcblx0XHRcdFx0XHRcdGN0eC5yZXZlcnRVc2VyID0gd2luZG93LndnVUxTKCc855So5oi35ZCN5bey6ZqQ6JePPicsICc85L2/55So6ICF5ZCN56ix5bey6Zqx6JePPicpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfmnKrog73ojrflj5bmraTkv67orqLniYjmnKznmoTnvJbovpHogIXjgIInLCAn5pyq6IO95Y+W5b6X5q2k5L+u6KiC54mI5pys55qE57eo6Lyv6ICF44CCJylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gc2V0IHJldmVydCBlZGl0IHN1bW1hcnlcblx0XHRcdFx0Y3R4LmVkaXRTdW1tYXJ5ID0gYFtbUVc6VU5ET3zmkqTplIBdXeeUsSAke2N0eC5yZXZlcnRVc2VyfSDmiYDlgZrlh7rnmoQke3dpbmRvdy53Z1VMUygn5L+u6K6iICcsICfkv67oqIIgJyl9JHtcblx0XHRcdFx0XHRjdHgucmV2ZXJ0T2xkSURcblx0XHRcdFx0fe+8miR7Y3R4LmVkaXRTdW1tYXJ5fWA7XG5cdFx0XHR9XG5cdFx0XHRjdHgucGFnZUxvYWRlZCA9IHRydWU7XG5cdFx0XHQvLyBtdy5ub3RpZnkoXCJHZW5lcmF0ZSBlZGl0IGNvbmZsaWN0IG5vd1wiLCB7dHlwZTogJ3dhcm4nLCB0YWc6ICdtb3JlYml0cyd9KTsgIC8vIGZvciB0ZXN0aW5nIGVkaXQgY29uZmxpY3QgcmVjb3ZlcnkgbG9naWNcblx0XHRcdGN0eC5vbkxvYWRTdWNjZXNzKHRoaXMpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHR9O1xuXHRcdC8vIGhlbHBlciBmdW5jdGlvbiB0byBwYXJzZSB0aGUgcGFnZSBuYW1lIHJldHVybmVkIGZyb20gdGhlIEFQSVxuXHRcdGNvbnN0IGZuQ2hlY2tQYWdlTmFtZSA9IGZ1bmN0aW9uIChyZXNwb25zZSwgb25GYWlsdXJlKSB7XG5cdFx0XHRpZiAoIW9uRmFpbHVyZSkge1xuXHRcdFx0XHRvbkZhaWx1cmUgPSBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFnZSA9IHJlc3BvbnNlLnBhZ2VzICYmIHJlc3BvbnNlLnBhZ2VzWzBdO1xuXHRcdFx0aWYgKHBhZ2UpIHtcblx0XHRcdFx0Ly8gY2hlY2sgZm9yIGludmFsaWQgdGl0bGVzXG5cdFx0XHRcdGlmIChwYWdlLmludmFsaWQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+agh+mimOS4jeWQiOazle+8micsIGDmqJnpoYzkuI3lkIjms5XvvJoke2N0eC5wYWdlTmFtZX1gKSk7XG5cdFx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gYWJvcnRcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyByZXRyaWV2ZSBhY3R1YWwgdGl0bGUgb2YgdGhlIHBhZ2UgYWZ0ZXIgbm9ybWFsaXphdGlvbiBhbmQgcmVkaXJlY3RzXG5cdFx0XHRcdGNvbnN0IHJlc29sdmVkTmFtZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHQvLyBjaGVjayBmb3IgY3Jvc3MtbmFtZXNwYWNlIHJlZGlyZWN0OlxuXHRcdFx0XHRcdGNvbnN0IG9yaWdOcyA9IG5ldyBtdy5UaXRsZShjdHgucGFnZU5hbWUpLm5hbWVzcGFjZTtcblx0XHRcdFx0XHRjb25zdCBuZXdOcyA9IG5ldyBtdy5UaXRsZShyZXNvbHZlZE5hbWUpLm5hbWVzcGFjZTtcblx0XHRcdFx0XHRpZiAob3JpZ05zICE9PSBuZXdOcyAmJiAhY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCkge1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfmmK/ot6jlkb3lkI3nqbrpl7Tph43lrprlkJHliLAnLCAn5piv6Leo5ZG95ZCN56m66ZaT6YeN5paw5bCO5ZCR5YiwJykgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmVkTmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfvvIznlaXov4cnLCAn77yM55Wl6YGOJylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIG9ubHkgbm90aWZ5IHVzZXIgZm9yIHJlZGlyZWN0cywgbm90IG5vcm1hbGl6YXRpb25cblx0XHRcdFx0XHRuZXcgTW9yZWJpdHMuc3RhdHVzKFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfkv6Hmga8nLCAn6LOH6KiKJyksXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S7jiAnLCAn5b6eICcpICtcblx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCcg6YeN5a6a5ZCR5YiwICcsICcg6YeN5paw5bCO5ZCR5YiwICcpICtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZWROYW1lXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHgucGFnZU5hbWUgPSByZXNvbHZlZE5hbWU7IC8vIHVwZGF0ZSB0byByZWRpcmVjdCB0YXJnZXQgb3Igbm9ybWFsaXplZCBuYW1lXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBjb3VsZCBiZSBhIGNpcmN1bGFyIHJlZGlyZWN0IG9yIG90aGVyIHByb2JsZW1cblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfkuI3og73op6PmnpDpobXpnaLnmoTph43lrprlkJHvvJonLCAn5LiN6IO96Kej5p6Q6aCB6Z2i55qE6YeN5paw5bCO5ZCR77yaJykgKyBjdHgucGFnZU5hbWVcblx0XHRcdFx0KTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHQvLyBmb3JjZSBlcnJvciB0byBzdGF5IG9uIHRoZSBzY3JlZW5cblx0XHRcdFx0KytNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7XG5cdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7IC8vIGFsbCBPS1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgd2Ugc2hvdWxkIHByb3ZpZGUgYSB3YXRjaGxpc3QgZXhwaXJ5LiAgV2lsbCBub3Rcblx0XHQgKiBkbyBzbyBpZiB0aGUgcGFnZSBpcyBjdXJyZW50bHkgcGVybWFuZW50bHkgd2F0Y2hlZCwgb3IgdGhlIGN1cnJlbnRcblx0XHQgKiBleHBpcnkgaXMgKmFmdGVyKiB0aGUgbmV3LCBwcm92aWRlZCBleHBpcnkuICBPbmx5IGhhbmRsZXMgc3RyaW5nc1xuXHRcdCAqIHJlY29nbml6ZWQgYnkge0BsaW5rIE1vcmViaXRzLmRhdGV9IG9yIHJlbGF0aXZlIHRpbWVmcmFtZXMgd2l0aFxuXHRcdCAqIHVuaXQgaXQgY2FuIHByb2Nlc3MuICBSZWxpZXMgb24gdGhlIGZhY3QgdGhhdCBmbkNhblVzZU13VXNlclRva2VuXG5cdFx0ICogcmVxdWlyZXMgcGFnZSBsb2FkaW5nIGlmIGEgd2F0Y2hsaXN0ZXhwaXJ5IGlzIHByb3ZpZGVkLCBzbyB3ZSBhcmVcblx0XHQgKiBlbnN1cmVkIG9mIGtub3dpbmcgdGhlIHdhdGNoIHN0YXR1cyBieSB0aGUgdXNlIG9mIHRoaXMuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRjb25zdCBmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5ID0gKCkgPT4ge1xuXHRcdFx0aWYgKGN0eC53YXRjaGxpc3RFeHBpcnkpIHtcblx0XHRcdFx0aWYgKCFjdHgud2F0Y2hlZCB8fCBNb3JlYml0cy5zdHJpbmcuaXNJbmZpbml0eShjdHgud2F0Y2hsaXN0RXhwaXJ5KSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjdHgud2F0Y2hlZCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRsZXQgbmV3RXhwaXJ5O1xuXHRcdFx0XHRcdC8vIEF0dGVtcHQgdG8gZGV0ZXJtaW5lIGlmIHRoZSBuZXcgZXhwaXJ5IGlzIGFcblx0XHRcdFx0XHQvLyByZWxhdGl2ZSAoZS5nLiBgMSBtb250aGApIG9yIGFic29sdXRlIGRhdGV0aW1lXG5cdFx0XHRcdFx0Y29uc3QgcmVsID0gY3R4LndhdGNobGlzdEV4cGlyeS5zcGxpdCgnICcpO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRuZXdFeHBpcnkgPSBuZXcgTW9yZWJpdHMuZGF0ZSgpLmFkZChyZWxbMF0sIHJlbFsxXSk7XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRuZXdFeHBpcnkgPSBuZXcgTW9yZWJpdHMuZGF0ZShjdHgud2F0Y2hsaXN0RXhwaXJ5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSWYgdGhlIGRhdGUgaXMgdmFsaWQsIG9ubHkgdXNlIGl0IGlmIGl0IGV4dGVuZHMgdGhlIGN1cnJlbnQgZXhwaXJ5XG5cdFx0XHRcdFx0aWYgKG5ld0V4cGlyeS5pc1ZhbGlkKCkpIHtcblx0XHRcdFx0XHRcdGlmIChuZXdFeHBpcnkuaXNBZnRlcihuZXcgTW9yZWJpdHMuZGF0ZShjdHgud2F0Y2hlZCkpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBJZiBpdCdzIHN0aWxsIG5vdCB2YWxpZCwgaG9wZSBpdCdzIGEgdmFsaWQgTVcgZXhwaXJ5IGZvcm1hdCB0aGF0XG5cdFx0XHRcdFx0XHQvLyBNb3JlYml0cy5kYXRlIGRvZXNuJ3QgcmVjb2duaXplLCBzbyBqdXN0IGRlZmF1bHQgdG8gdXNpbmcgaXQuXG5cdFx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgYWxzbyBpbmNsdWRlIG1pbm9yIHR5cG9zLlxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIHNhdmVBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5TYXZlU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhbGwnOyAvLyBjYW5jZWwgYXBwZW5kL3ByZXBlbmQvbmV3U2VjdGlvbi9yZXZlcnQgbW9kZXNcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnNhdmVBcGkuZ2V0UmVzcG9uc2UoKTtcblx0XHRcdC8vIHNlZSBpZiB0aGUgQVBJIHRoaW5rcyB3ZSB3ZXJlIHN1Y2Nlc3NmdWxcblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LnJlc3VsdCA9PT0gJ1N1Y2Nlc3MnKSB7XG5cdFx0XHRcdC8vIHJlYWwgc3VjY2Vzc1xuXHRcdFx0XHQvLyBkZWZhdWx0IG9uIHN1Y2Nlc3MgYWN0aW9uIC0gZGlzcGxheSBsaW5rIGZvciBlZGl0ZWQgcGFnZVxuXHRcdFx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG13LnV0aWwuZ2V0VXJsKGN0eC5wYWdlTmFtZSkpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGN0eC5wYWdlTmFtZSkpO1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKFsn5a6M5oiQ77yIJywgbGluaywgJ++8iSddKTtcblx0XHRcdFx0aWYgKGN0eC5vblNhdmVTdWNjZXNzKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3ModGhpcyk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZXJyb3JzIGhlcmUgYXJlIG9ubHkgZ2VuZXJhdGVkIGJ5IGV4dGVuc2lvbnMgd2hpY2ggaG9vayBBUElFZGl0QmVmb3JlU2F2ZSB3aXRoaW4gTWVkaWFXaWtpLFxuXHRcdFx0Ly8gd2hpY2ggYXMgb2YgMS4zNC4wLXdtZi4yMyAoU2VwdCAyMDE5KSBzaG91bGQgb25seSBlbmNvbXBhc3MgY2FwdGNoYSBtZXNzYWdlc1xuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQuY2FwdGNoYSkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S4jeiDveS/neWtmOmhtemdou+8jOWboOacjeWKoeWZqOimgeaxguaCqOi+k+WFpemqjOivgeeggeOAgicsICfkuI3og73lhLLlrZjpoIHpnaLvvIzlm6DkvLrmnI3lmajopoHmsYLmgqjovLjlhaXpqZforYnnorzjgIInKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfkv53lrZjpobXpnaLml7bnlLFBUEnlvpfliLDmnKrnn6XplJnor68nLCAn5YSy5a2Y6aCB6Z2i5pmC55SxQVBJ5b6X5Yiw5pyq55+l6Yyv6KqkJykpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZm9yY2UgZXJyb3IgdG8gc3RheSBvbiB0aGUgc2NyZWVuXG5cdFx0XHQrK01vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDtcblx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBzYXZlQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuU2F2ZUVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgZXJyb3JDb2RlID0gY3R4LnNhdmVBcGkuZ2V0RXJyb3JDb2RlKCk7XG5cdFx0XHQvLyBjaGVjayBmb3IgZWRpdCBjb25mbGljdFxuXHRcdFx0aWYgKGVycm9yQ29kZSA9PT0gJ2VkaXRjb25mbGljdCcgJiYgY3R4LmNvbmZsaWN0UmV0cmllcysrIDwgY3R4Lm1heENvbmZsaWN0UmV0cmllcykge1xuXHRcdFx0XHQvLyBlZGl0IGNvbmZsaWN0cyBjYW4gb2NjdXIgd2hlbiB0aGUgcGFnZSBuZWVkcyB0byBiZSBwdXJnZWQgZnJvbSB0aGUgc2VydmVyIGNhY2hlXG5cdFx0XHRcdGNvbnN0IHB1cmdlUXVlcnkgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncHVyZ2UnLFxuXHRcdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLCAvLyByZWRpcmVjdHMgYXJlIGFscmVhZHkgcmVzb2x2ZWRcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRjb25zdCBwdXJnZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+ajgOa1i+WIsOe8lui+keWGsueqge+8jOato+WcqOabtOaWsOacjeWKoeWZqOe8k+WtmCcsICfmqqLmuKzliLDnt6jovK/ooZ3nqoHvvIzmraPlnKjmm7TmlrDkvLrmnI3lmajlv6vlj5YnKSxcblx0XHRcdFx0XHRwdXJnZVF1ZXJ5LFxuXHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCfmo4DmtYvliLDnvJbovpHlhrLnqoHvvIzph43or5Xkv67mlLknLCAn5qqi5ris5Yiw57eo6Lyv6KGd56qB77yM6YeN6Kmm5L+u5pS5JykpO1xuXHRcdFx0XHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHRcdFx0XHRjdHguc2F2ZUFwaS5wb3N0KCk7IC8vIG5lY2Vzc2FyaWx5IGFwcGVuZCwgcHJlcGVuZCwgb3IgbmV3U2VjdGlvbiwgc28gdGhpcyBzaG91bGQgd29yayBhcyBkZXNpcmVkXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdHgubG9hZEFwaS5wb3N0KCk7IC8vIHJlbG9hZCB0aGUgcGFnZSBhbmQgcmVhcHBseSB0aGUgZWRpdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnRcblx0XHRcdFx0KTtcblx0XHRcdFx0cHVyZ2VBcGkucG9zdCgpO1xuXHRcdFx0XHQvLyBjaGVjayBmb3IgbmV0d29yayBvciBzZXJ2ZXIgZXJyb3Jcblx0XHRcdH0gZWxzZSBpZiAoKGVycm9yQ29kZSA9PT0gbnVsbCB8fCBlcnJvckNvZGUgPT09IHVuZGVmaW5lZCkgJiYgY3R4LnJldHJpZXMrKyA8IGN0eC5tYXhSZXRyaWVzKSB7XG5cdFx0XHRcdC8vIHRoZSBlcnJvciBtaWdodCBiZSB0cmFuc2llbnQsIHNvIHRyeSBhZ2FpblxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5L+d5a2Y5aSx6LSl77yM5ZyoMuenkuWQjumHjeivleKApuKApicsICflhLLlrZjlpLHmlZfvvIzlnKgy56eS5b6M6YeN6Kmm4oCm4oCmJykpO1xuXHRcdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHRcdC8vIHdhaXQgZm9yIHNvbWV0aW1lIGZvciBjbGllbnQgdG8gcmVnYWluIGNvbm5lY3Rpdml0eVxuXHRcdFx0XHRzbGVlcCgyMDAwKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRjdHguc2F2ZUFwaS5wb3N0KCk7IC8vIGdpdmUgaXQgYW5vdGhlciBnbyFcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIGhhcmQgZXJyb3IsIGdpdmUgdXBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnNhdmVBcGkuZ2V0UmVzcG9uc2UoKTtcblx0XHRcdFx0Y29uc3QgZXJyb3JEYXRhID1cblx0XHRcdFx0XHRyZXNwb25zZS5lcnJvciB8fFxuXHRcdFx0XHRcdC8vIGJjIGVycm9yIGZvcm1hdFxuXHRcdFx0XHRcdHJlc3BvbnNlLmVycm9yc1swXS5kYXRhOyAvLyBodG1sL3dpa2l0ZXh0L3BsYWludGV4dCBlcnJvciBmb3JtYXRcblx0XHRcdFx0c3dpdGNoIChlcnJvckNvZGUpIHtcblx0XHRcdFx0XHRjYXNlICdwcm90ZWN0ZWRwYWdlJzpcblx0XHRcdFx0XHRcdC8vIG5vbi1hZG1pbiBhdHRlbXB0aW5nIHRvIGVkaXQgYSBwcm90ZWN0ZWQgcGFnZSAtIHRoaXMgZ2l2ZXMgYSBmcmllbmRsaWVyIG1lc3NhZ2UgdGhhbiB0aGUgZGVmYXVsdFxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfkuI3og73kv53lrZjkv67mlLnvvJrpobXpnaLooqvkv53miqQnLCAn5LiN6IO95YSy5a2Y5L+u5pS577ya6aCB6Z2i6KKr5L+d6K23JykpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnYWJ1c2VmaWx0ZXItZGlzYWxsb3dlZCc6XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnvJbovpHooqvpmLLmu6XnlKjov4fmu6Tlmajop4TliJnigJwnLCAn57eo6Lyv6KKr6Ziy5r+r55So6YGO5r++5Zmo6KaP5YmH44CMJykgK1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yRGF0YS5hYnVzZWZpbHRlci5kZXNjcmlwdGlvbiArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdFx0J+KAnemYu+atouOAguiLpeaCqOiupOS4uuaCqOeahOivpeasoee8lui+keaYr+acieaEj+S5ieeahO+8jOivt+iHsyBXaWtpcGVkaWE66Ziy5rul55So6L+H5ruk5ZmoL+mUmeivr+aKpeWRiiDmj5DmiqXjgIInLFxuXHRcdFx0XHRcdFx0XHRcdFx0J+OAjemYu+atouOAguiLpeaCqOiqjeeCuuaCqOeahOipsuasoee3qOi8r+aYr+acieaEj+e+qeeahO+8jOiri+iHsyBXaWtpcGVkaWE66Ziy5r+r55So6YGO5r++5ZmoL+mMr+iqpOWgseWRiiDmj5DloLHjgIInXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2FidXNlZmlsdGVyLXdhcm5pbmcnOlxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoW1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+e8lui+keiiq+mYsua7peeUqOi/h+a7pOWZqOinhOWImeKAnCcsICfnt6jovK/ooqvpmLLmv6vnlKjpgY7mv77lmajopo/liYfjgIwnKSxcblx0XHRcdFx0XHRcdFx0ZXJyb3JEYXRhLmFidXNlZmlsdGVyLmRlc2NyaXB0aW9uLFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J+KAneitpuWRiu+8jOiLpeaCqOS7jeW4jOacm+WBmuWHuuivpee8lui+ke+8jOivt+WwneivlemHjeaWsOaPkOS6pO+8jOagueaNrui/h+a7pOWZqOeahOiuvue9ruaCqOWPr+iDveWPr+S7peS9nOWHuuatpOe8lui+keOAgicsXG5cdFx0XHRcdFx0XHRcdFx0J+OAjeitpuWRiu+8jOiLpeaCqOS7jeW4jOacm+WBmuWHuuipsue3qOi8r++8jOiri+WYl+ippumHjeaWsOaPkOS6pO+8jOagueaTmumBjua/vuWZqOeahOioreWumuaCqOWPr+iDveWPr+S7peS9nOWHuuatpOe3qOi8r+OAgidcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdF0pO1xuXHRcdFx0XHRcdFx0Ly8gV2Ugc2hvdWxkIHByb3ZpZGUgdGhlIHVzZXIgd2l0aCBhIHdheSB0byBhdXRvbWF0aWNhbGx5IHJldHJ5IHRoZSBhY3Rpb24gaWYgdGhleSBzbyBjaG9vc2UgLVxuXHRcdFx0XHRcdFx0Ly8gSSBjYW4ndCBzZWUgaG93IHRvIGRvIHRoaXMgd2l0aG91dCBjcmVhdGluZyBhIFVJIGRlcGVuZGVuY3kgb24gTW9yZWJpdHMud2lraS5wYWdlIHRob3VnaCAtLSBUVE9cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3NwYW1ibGFja2xpc3QnOiB7XG5cdFx0XHRcdFx0XHQvLyBJZiBtdWx0aXBsZSBpdGVtcyBhcmUgYmxhY2tsaXN0ZWQsIHdlIG9ubHkgcmV0dXJuIHRoZSBmaXJzdFxuXHRcdFx0XHRcdFx0Y29uc3QgW3NwYW1dID0gZXJyb3JEYXRhLnNwYW1ibGFja2xpc3QubWF0Y2hlcztcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S4jeiDveS/neWtmOmhtemdou+8jOWboFVSTCAnLCAn5LiN6IO95YSy5a2Y6aCB6Z2i77yM5ZugVVJMICcpICtcblx0XHRcdFx0XHRcdFx0XHRzcGFtICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJyDlnKjlnoPlnL7pk77mjqXpu5HlkI3ljZXkuK3jgIInLCAnIOWcqOWeg+WcvumAo+e1kOm7keWQjeWWruS4reOAgicpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfkuI3og73kv53lrZjkv67mlLnvvJonLCAn5LiN6IO95YSy5a2Y5L+u5pS577yaJykgKyBjdHguc2F2ZUFwaS5nZXRFcnJvclRleHQoKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHguZWRpdE1vZGUgPSAnYWxsJzsgLy8gY2FuY2VsIGFwcGVuZC9wcmVwZW5kL25ld1NlY3Rpb24vcmV2ZXJ0IG1vZGVzXG5cdFx0XHRcdGlmIChjdHgub25TYXZlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBpc1RleHRSZWRpcmVjdCA9ICh0ZXh0KSA9PiB7XG5cdFx0XHRpZiAoIXRleHQpIHtcblx0XHRcdFx0Ly8gbm8gdGV4dCAtIGNvbnRlbnQgZW1wdHkgb3IgaW5hY2Nlc3NpYmxlIChyZXZkZWxsZWQgb3Igc3VwcHJlc3NlZClcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmwxMG4ucmVkaXJlY3RUYWdBbGlhc2VzLnNvbWUoKHRhZykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChgXlxcXFxzKiR7dGFnfVxcXFxXYCwgJ2knKS50ZXN0KHRleHQpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRjb25zdCBmbkxvb2t1cENyZWF0aW9uU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4Lmxvb2t1cENyZWF0aW9uQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRpZiAoIWZuQ2hlY2tQYWdlTmFtZShyZXNwb25zZSwgY3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHJldiA9IHJlc3BvbnNlLnBhZ2VzWzBdLnJldmlzaW9ucyAmJiByZXNwb25zZS5wYWdlc1swXS5yZXZpc2lvbnNbMF07XG5cdFx0XHRpZiAoIXJldikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazleaJvuWIsCcsICfnhKHms5Xmib7liLAnKSArXG5cdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnmoTku7vkvZXkv67orqLniYjmnKwnLCAn55qE5Lu75L2V5L+u6KiC54mI5pysJylcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5sb29rdXBOb25SZWRpcmVjdENyZWF0b3IgfHwgIWlzVGV4dFJlZGlyZWN0KHJldi5jb250ZW50KSkge1xuXHRcdFx0XHRjdHguY3JlYXRvciA9IHJldi51c2VyO1xuXHRcdFx0XHRpZiAoIWN0eC5jcmVhdG9yKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rogIXnmoTlkI3lrZcnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL6ICF55qE5ZCN5a2XJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnRpbWVzdGFtcCA9IHJldi50aW1lc3RhbXA7XG5cdFx0XHRcdGlmICghY3R4LnRpbWVzdGFtcCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu65pe26Ze0JywgJ+eEoeazleWPluW+l+mggemdouW7uueri+aZgumWkycpKTtcblx0XHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCflt7Lojrflj5bpobXpnaLliJvlu7rkv6Hmga8nLCAn5bey5Y+W5b6X6aCB6Z2i5bu656uL6LOH6KiKJykpO1xuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvblN1Y2Nlc3ModGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucXVlcnkucnZsaW1pdCA9IDUwOyAvLyBtb2RpZnkgcHJldmlvdXMgcXVlcnkgdG8gZmV0Y2ggbW9yZSByZXZpc2lvbnNcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnF1ZXJ5LnRpdGxlcyA9IGN0eC5wYWdlTmFtZTsgLy8gdXBkYXRlIHBhZ2VOYW1lIGlmIHJlZGlyZWN0IHJlc29sdXRpb24gdG9vayBwbGFjZSBpbiBlYXJsaWVyIHF1ZXJ5XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPlumhtemdouWIm+W7uuS/oeaBrycsICflj5blvpfpoIHpnaLlu7rnq4vos4foqIonKSxcblx0XHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucXVlcnksXG5cdFx0XHRcdFx0Zm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBmbkxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4Lmxvb2t1cENyZWF0aW9uQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRjb25zdCByZXZzID0gcmVzcG9uc2UucGFnZXNbMF0ucmV2aXNpb25zO1xuXHRcdFx0Zm9yIChjb25zdCByZXYgb2YgcmV2cykge1xuXHRcdFx0XHRpZiAoIWlzVGV4dFJlZGlyZWN0KHJldi5jb250ZW50KSkge1xuXHRcdFx0XHRcdGN0eC5jcmVhdG9yID0gcmV2LnVzZXI7XG5cdFx0XHRcdFx0Y3R4LnRpbWVzdGFtcCA9IHJldi50aW1lc3RhbXA7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0Ly8gZmFsbGJhY2sgdG8gZ2l2ZSBmaXJzdCByZXZpc2lvbiBhdXRob3IgaWYgbm8gbm9uLXJlZGlyZWN0IHZlcnNpb24gaW4gdGhlIGZpcnN0IDUwXG5cdFx0XHRcdGN0eC5jcmVhdG9yID0gcmV2c1swXS51c2VyO1xuXHRcdFx0XHRjdHgudGltZXN0YW1wID0gcmV2c1swXS50aW1lc3RhbXA7XG5cdFx0XHRcdGlmICghY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuiAheeahOWQjeWtlycsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vogIXnmoTlkI3lrZcnKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgudGltZXN0YW1wKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu65pe26Ze0JywgJ+eEoeazleWPluW+l+mggemdouW7uueri+aZgumWkycpKTtcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5bey6I635Y+W6aG16Z2i5Yib5bu65L+h5oGvJywgJ+W3suWPluW+l+mggemdouW7uueri+izh+ioiicpKTtcblx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uU3VjY2Vzcyh0aGlzKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIENvbW1vbiBjaGVja3MgZm9yIGFjdGlvbiBtZXRob2RzLiBVc2VkIGZvciBtb3ZlLCB1bmRlbGV0ZSwgZGVsZXRlLFxuXHRcdCAqIHByb3RlY3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIC0gVGhlIGFjdGlvbiBiZWluZyBjaGVja2VkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBvbkZhaWx1cmUgLSBGYWlsdXJlIGNhbGxiYWNrLlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuUHJlZmxpZ2h0Q2hlY2tzID0gZnVuY3Rpb24gKGFjdGlvbiwgb25GYWlsdXJlKSB7XG5cdFx0XHQvLyBpZiBhIG5vbi1hZG1pbiB0cmllcyB0byBkbyB0aGlzLCBkb24ndCBib3RoZXJcblx0XHRcdGlmICghTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgYWN0aW9uICE9PSAnbW92ZScpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xlr7npobXpnaLov5vooYzigJwnLCAn54Sh5rOV5bCN6aCB6Z2i6YCy6KGM44CMJykgK1xuXHRcdFx0XHRcdFx0YWN0aW9uICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd5pON5L2c77ya5Y+q5pyJ566h55CG5ZGY5Y+v5Lul6L+b6KGM5q2k5pON5L2cJywgJ+OAjeaTjeS9nO+8muWPquacieeuoeeQhuWToeWPr+S7pemAsuihjOatpOaTjeS9nCcpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHguZWRpdFN1bW1hcnkpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoYEludGVybmFsIGVycm9yOiAke2FjdGlvbn0gcmVhc29uIG5vdCBzZXQgKHVzZSBzZXRFZGl0U3VtbWFyeSBmdW5jdGlvbikhYCk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7IC8vIGFsbCBPS1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQ29tbW9uIGNoZWNrcyBmb3IgZm5Qcm9jZXNzIGZ1bmN0aW9ucyAoYGZuUHJvY2Vzc0RlbGV0ZWAsIGBmblByb2Nlc3NNb3ZlYCwgZXRjLlxuXHRcdCAqIFVzZWQgZm9yIG1vdmUsIHVuZGVsZXRlLCBkZWxldGUsIHByb3RlY3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIC0gVGhlIGFjdGlvbiBiZWluZyBjaGVja2VkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBvbkZhaWx1cmUgLSBGYWlsdXJlIGNhbGxiYWNrLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSByZXNwb25zZSAtIFRoZSByZXNwb25zZSBkb2N1bWVudCBmcm9tIHRoZSBBUEkgY2FsbC5cblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRjb25zdCBmblByb2Nlc3NDaGVja3MgPSBmdW5jdGlvbiAoYWN0aW9uLCBvbkZhaWx1cmUsIHJlc3BvbnNlKSB7XG5cdFx0XHRjb25zdCBbe21pc3Npbmd9XSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0Ly8gTm8gdW5kZWxldGUgYXMgYW4gZXhpc3RpbmcgcGFnZSBjb3VsZCBoYXZlIGRlbGV0ZWQgcmV2aXNpb25zXG5cdFx0XHRjb25zdCBhY3Rpb25NaXNzaW5nID0gbWlzc2luZyAmJiBbJ2RlbGV0ZScsICdtb3ZlJ10uaW5jbHVkZXMoYWN0aW9uKTtcblx0XHRcdGNvbnN0IHByb3RlY3RNaXNzaW5nID0gYWN0aW9uID09PSAncHJvdGVjdCcgJiYgbWlzc2luZyAmJiAoY3R4LnByb3RlY3RFZGl0IHx8IGN0eC5wcm90ZWN0TW92ZSk7XG5cdFx0XHRjb25zdCBzYWx0TWlzc2luZyA9IGFjdGlvbiA9PT0gJ3Byb3RlY3QnICYmICFtaXNzaW5nICYmIGN0eC5wcm90ZWN0Q3JlYXRlO1xuXHRcdFx0aWYgKGFjdGlvbk1pc3NpbmcgfHwgcHJvdGVjdE1pc3NpbmcgfHwgc2FsdE1pc3NpbmcpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0YCR7XG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazleWvuemhtemdoui/m+ihjOKAnCcsICfnhKHms5XlsI3poIHpnaLpgLLooYzjgIwnKSArXG5cdFx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3mk43kvZzvvIzlm6DkuLrpobXpnaInLCAn44CN5pON5L2c77yM5Zug54K66aCB6Z2iJykgK1xuXHRcdFx0XHRcdFx0KG1pc3NpbmcgPyAn5bey5LiNJyA6IHdpbmRvdy53Z1VMUygn5bey57uPJywgJ+W3sue2kycpKVxuXHRcdFx0XHRcdH3lrZjlnKhgXG5cdFx0XHRcdCk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGVsZXRlLCB1bmRlbGV0ZSwgbW92ZVxuXHRcdFx0Ly8gZXh0cmFjdCBwcm90ZWN0aW9uIGluZm9cblx0XHRcdGxldCBlZGl0cHJvdDtcblx0XHRcdGlmIChhY3Rpb24gPT09ICd1bmRlbGV0ZScpIHtcblx0XHRcdFx0ZWRpdHByb3QgPSByZXNwb25zZS5wYWdlc1swXS5wcm90ZWN0aW9uXG5cdFx0XHRcdFx0LmZpbHRlcigocHIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBwci50eXBlID09PSAnY3JlYXRlJyAmJiBwci5sZXZlbCA9PT0gJ3N5c29wJztcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5wb3AoKTtcblx0XHRcdH0gZWxzZSBpZiAoYWN0aW9uID09PSAnZGVsZXRlJyB8fCBhY3Rpb24gPT09ICdtb3ZlJykge1xuXHRcdFx0XHRlZGl0cHJvdCA9IHJlc3BvbnNlLnBhZ2VzWzBdLnByb3RlY3Rpb25cblx0XHRcdFx0XHQuZmlsdGVyKChwcikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByLnR5cGUgPT09ICdlZGl0JyAmJiBwci5sZXZlbCA9PT0gJ3N5c29wJztcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5wb3AoKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0ZWRpdHByb3QgJiZcblx0XHRcdFx0IWN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nICYmXG5cdFx0XHRcdCFjb25maXJtKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5oKo5Y2z5bCG5a+55YWo5L+d5oqk6aG16Z2i4oCcJywgJ+aCqOWNs+Wwh+WwjeWFqOS/neitt+mggemdouOAjCcpICtcblx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHQoZWRpdHByb3QuZXhwaXJ5ID09PSAnaW5maW5pdHknXG5cdFx0XHRcdFx0XHRcdD8gd2luZG93LndnVUxTKCfigJ3vvIjmsLjkuYXvvIknLCAn44CN77yI5rC45LmF77yJJylcblx0XHRcdFx0XHRcdFx0OiBgJHtcblx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd77yI5Yiw5pyf77yaJywgJ+OAje+8iOWIsOacn++8micpICtcblx0XHRcdFx0XHRcdFx0XHRcdG5ldyBNb3JlYml0cy5kYXRlKGVkaXRwcm90LmV4cGlyeSkuY2FsZW5kYXIoJ3V0YycpXG5cdFx0XHRcdFx0XHRcdFx0fSAoVVRDKe+8iWApICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd6L+b6KGM4oCcJywgJ+OAjemAsuihjOOAjCcpICtcblx0XHRcdFx0XHRcdGFjdGlvbiArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneaTjeS9nCcsICfjgI3mk43kvZwnKSArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdCfjgIJcXG5cXG7ljZXlh7vnoa7lrprku6Xnu6fnu63mk43kvZzvvIzmiJbljZXlh7vlj5bmtojku6Xlj5bmtojmk43kvZzjgIInLFxuXHRcdFx0XHRcdFx0XHQn44CCXFxuXFxu6bue5pOK56K65a6a5Lul57m857qM5pON5L2c77yM5oiW6bue5pOK5Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCflt7Llj5bmtojlr7nlhajkv53miqTpobXpnaLnmoTmk43kvZzjgIInLCAn5bey5Y+W5raI5bCN5YWo5L+d6K236aCB6Z2i55qE5pON5L2c44CCJykpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICghcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPluS7pOeJjOOAgicsICfnhKHms5Xlj5blvpfmrIrmnZbjgIInKSk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7IC8vIGFsbCBPS1xuXHRcdH07XG5cblx0XHRjb25zdCBmblByb2Nlc3NNb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHBhZ2VUaXRsZTtcblx0XHRcdGxldCB0b2tlbjtcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdtb3ZlJykpIHtcblx0XHRcdFx0dG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBjdHgucGFnZU5hbWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5tb3ZlQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCdtb3ZlJywgY3R4Lm9uTW92ZUZhaWx1cmUsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ21vdmUnLFxuXHRcdFx0XHRmcm9tOiBwYWdlVGl0bGUsXG5cdFx0XHRcdHRvOiBjdHgubW92ZURlc3RpbmF0aW9uLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgubW92ZVRhbGtQYWdlKSB7XG5cdFx0XHRcdHF1ZXJ5Lm1vdmV0YWxrID0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5tb3ZlU3VicGFnZXMpIHtcblx0XHRcdFx0cXVlcnkubW92ZXN1YnBhZ2VzID0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5tb3ZlU3VwcHJlc3NSZWRpcmVjdCkge1xuXHRcdFx0XHRxdWVyeS5ub3JlZGlyZWN0ID0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0Y3R4Lm1vdmVQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+enu+WKqOmhtemdouKApuKApicsICfnp7vli5XpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGN0eC5vbk1vdmVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgubW92ZVByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4Lm1vdmVQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuUHJvY2Vzc1BhdHJvbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXRyb2wnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHQvLyBEaWRuJ3QgbmVlZCB0byBsb2FkIHRoZSBwYWdlXG5cdFx0XHRpZiAoY3R4LnJjaWQpIHtcblx0XHRcdFx0cXVlcnkucmNpZCA9IGN0eC5yY2lkO1xuXHRcdFx0XHRxdWVyeS50b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgncGF0cm9sVG9rZW4nKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnBhdHJvbEFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHQvLyBEb24ndCBwYXRyb2wgaWYgbm90IHVucGF0cm9sbGVkXG5cdFx0XHRcdGlmICghcmVzcG9uc2UucmVjZW50Y2hhbmdlc1swXS51bnBhdHJvbGxlZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBbe2xhc3RyZXZpZH1dID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdGlmICghbGFzdHJldmlkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHF1ZXJ5LnJldmlkID0gbGFzdHJldmlkO1xuXHRcdFx0XHRjb25zdCB0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdGlmICghdG9rZW4pIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cXVlcnkudG9rZW4gPSB0b2tlbjtcblx0XHRcdH1cblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYXRyb2xTdGF0ID0gbmV3IE1vcmViaXRzLnN0YXR1cyh3aW5kb3cud2dVTFMoJ+agh+iusOmhtemdouS4uuW3suW3oeafpScsICfmqJnoqJjpoIHpnaLngrrlt7Llt6Hmn6UnKSk7XG5cdFx0XHRjdHgucGF0cm9sUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCflt6Hmn6XpobXpnaLigKbigKYnLCAn5beh5p+l6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRwYXRyb2xTdGF0XG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnBhdHJvbFByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnBhdHJvbFByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Y29uc3QgZm5Qcm9jZXNzRGVsZXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHBhZ2VUaXRsZTtcblx0XHRcdGxldCB0b2tlbjtcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdkZWxldGUnKSkge1xuXHRcdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IGN0eC5wYWdlTmFtZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LmRlbGV0ZUFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHRpZiAoIWZuUHJvY2Vzc0NoZWNrcygnZGVsZXRlJywgY3R4Lm9uRGVsZXRlRmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdFx0cGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZGVsZXRlJyxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfliKDpmaTpobXpnaLigKbigKYnLCAn5Yiq6Zmk6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25EZWxldGVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Zm5Qcm9jZXNzRGVsZXRlRXJyb3Jcblx0XHRcdCk7XG5cdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIGRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5Qcm9jZXNzRGVsZXRlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBlcnJvckNvZGUgPSBjdHguZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvckNvZGUoKTtcblx0XHRcdC8vIGNoZWNrIGZvciBcIkRhdGFiYXNlIHF1ZXJ5IGVycm9yXCJcblx0XHRcdGlmIChlcnJvckNvZGUgPT09ICdpbnRlcm5hbF9hcGlfZXJyb3JfREJRdWVyeUVycm9yJyAmJiBjdHgucmV0cmllcysrIDwgY3R4Lm1heFJldHJpZXMpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+aVsOaNruW6k+afpeivoumUmeivr++8jOmHjeivlScsICfos4fmlpnluqvmn6XoqaLpjK/oqqTvvIzph43oqaYnKSk7XG5cdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpOyAvLyBnaXZlIGl0IGFub3RoZXIgZ28hXG5cdFx0XHR9IGVsc2UgaWYgKGVycm9yQ29kZSA9PT0gJ21pc3Npbmd0aXRsZScpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfkuI3og73liKDpmaTpobXpnaLvvIzlm6Dlhbblt7LkuI3lrZjlnKgnLCAn5LiN6IO95Yiq6Zmk6aCB6Z2i77yM5Zug5YW25bey5LiN5a2Y5ZyoJykpO1xuXHRcdFx0XHRpZiAoY3R4Lm9uRGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vbkRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHguZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGhhcmQgZXJyb3IsIGdpdmUgdXBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5peg5rOV5Yig6Zmk6aG16Z2i77yaJywgJ+eEoeazleWIqumZpOmggemdou+8micpICsgY3R4LmRlbGV0ZVByb2Nlc3NBcGkuZ2V0RXJyb3JUZXh0KClcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKGN0eC5vbkRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25EZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBmblByb2Nlc3NVbmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBwYWdlVGl0bGU7XG5cdFx0XHRsZXQgdG9rZW47XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbigndW5kZWxldGUnKSkge1xuXHRcdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IGN0eC5wYWdlTmFtZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnVuZGVsZXRlQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCd1bmRlbGV0ZScsIGN0eC5vblVuZGVsZXRlRmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdFx0cGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAndW5kZWxldGUnLFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn6L+Y5Y6f6aG16Z2i4oCm4oCmJywgJ+mChOWOn+mggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Zm5Qcm9jZXNzVW5kZWxldGVFcnJvclxuXHRcdFx0KTtcblx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIHVuZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KClcblx0XHRjb25zdCBmblByb2Nlc3NVbmRlbGV0ZUVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgZXJyb3JDb2RlID0gY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvckNvZGUoKTtcblx0XHRcdC8vIGNoZWNrIGZvciBcIkRhdGFiYXNlIHF1ZXJ5IGVycm9yXCJcblx0XHRcdGlmIChlcnJvckNvZGUgPT09ICdpbnRlcm5hbF9hcGlfZXJyb3JfREJRdWVyeUVycm9yJykge1xuXHRcdFx0XHRpZiAoY3R4LnJldHJpZXMrKyA8IGN0eC5tYXhSZXRyaWVzKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+aVsOaNruW6k+afpeivoumUmeivr++8jOmHjeivlScsICfos4fmlpnluqvmn6XoqaLpjK/oqqTvvIzph43oqaYnKSk7XG5cdFx0XHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpOyAvLyBnaXZlIGl0IGFub3RoZXIgZ28hXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdCfmjIHnu63nmoTmlbDmja7lupPmn6Xor6LplJnor6/vvIzph43mlrDliqDovb3pobXpnaLlubbph43or5UnLFxuXHRcdFx0XHRcdFx0XHQn5oyB57qM55qE6LOH5paZ5bqr5p+l6Kmi6Yyv6Kqk77yM6YeN5paw6LyJ5YWl6aCB6Z2i5Lim6YeN6KmmJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKGN0eC5vblVuZGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChlcnJvckNvZGUgPT09ICdjYW50dW5kZWxldGUnKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdCfml6Dms5Xov5jljp/liKDpmaTpobXpnaLvvIzlm6DmsqHmnInniYjmnKzkvpvov5jljp/miJblt7Looqvov5jljp8nLFxuXHRcdFx0XHRcdFx0J+eEoeazlemChOWOn+WIqumZpOmggemdou+8jOWboOaykuacieeJiOacrOS+m+mChOWOn+aIluW3suiiq+mChOWOnydcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChjdHgub25VbmRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHgudW5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gaGFyZCBlcnJvciwgZ2l2ZSB1cFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xov5jljp/pobXpnaLvvJonLCAn54Sh5rOV6YKE5Y6f6aCB6Z2i77yaJykgKyBjdHgudW5kZWxldGVQcm9jZXNzQXBpLmdldEVycm9yVGV4dCgpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChjdHgub25VbmRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHgudW5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgZm5Qcm9jZXNzUHJvdGVjdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnByb3RlY3RBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCdwcm90ZWN0JywgY3R4Lm9uUHJvdGVjdEZhaWx1cmUsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0Y29uc3QgcGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0Ly8gRmV0Y2ggZXhpc3RpbmcgcHJvdGVjdGlvbiBsZXZlbHNcblx0XHRcdGNvbnN0IHBycyA9IHJlc3BvbnNlLnBhZ2VzWzBdLnByb3RlY3Rpb247XG5cdFx0XHRsZXQgZWRpdHByb3Q7XG5cdFx0XHRsZXQgbW92ZXByb3Q7XG5cdFx0XHRsZXQgY3JlYXRlcHJvdDtcblx0XHRcdGZvciAoY29uc3QgcHIgb2YgcHJzKSB7XG5cdFx0XHRcdC8vIEZpbHRlciBvdXQgcHJvdGVjdGlvbiBmcm9tIGNhc2NhZGluZ1xuXHRcdFx0XHRpZiAocHIudHlwZSA9PT0gJ2VkaXQnICYmICFwci5zb3VyY2UpIHtcblx0XHRcdFx0XHRlZGl0cHJvdCA9IHByO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHByLnR5cGUgPT09ICdtb3ZlJykge1xuXHRcdFx0XHRcdG1vdmVwcm90ID0gcHI7XG5cdFx0XHRcdH0gZWxzZSBpZiAocHIudHlwZSA9PT0gJ2NyZWF0ZScpIHtcblx0XHRcdFx0XHRjcmVhdGVwcm90ID0gcHI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIEZhbGwgYmFjayB0byBjdXJyZW50IGxldmVscyBpZiBub3QgZXhwbGljaXRseSBzZXRcblx0XHRcdGlmICghY3R4LnByb3RlY3RFZGl0ICYmIGVkaXRwcm90KSB7XG5cdFx0XHRcdGN0eC5wcm90ZWN0RWRpdCA9IHtcblx0XHRcdFx0XHRsZXZlbDogZWRpdHByb3QubGV2ZWwsXG5cdFx0XHRcdFx0ZXhwaXJ5OiBlZGl0cHJvdC5leHBpcnksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5wcm90ZWN0TW92ZSAmJiBtb3ZlcHJvdCkge1xuXHRcdFx0XHRjdHgucHJvdGVjdE1vdmUgPSB7XG5cdFx0XHRcdFx0bGV2ZWw6IG1vdmVwcm90LmxldmVsLFxuXHRcdFx0XHRcdGV4cGlyeTogbW92ZXByb3QuZXhwaXJ5LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgucHJvdGVjdENyZWF0ZSAmJiBjcmVhdGVwcm90KSB7XG5cdFx0XHRcdGN0eC5wcm90ZWN0Q3JlYXRlID0ge1xuXHRcdFx0XHRcdGxldmVsOiBjcmVhdGVwcm90LmxldmVsLFxuXHRcdFx0XHRcdGV4cGlyeTogY3JlYXRlcHJvdC5leHBpcnksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvLyBEZWZhdWx0IHRvIHByZS1leGlzdGluZyBjYXNjYWRpbmcgcHJvdGVjdGlvbiBpZiB1bmNoYW5nZWQgKHNpbWlsYXIgdG8gYWJvdmUpXG5cdFx0XHRpZiAoY3R4LnByb3RlY3RDYXNjYWRlID09PSBudWxsKSB7XG5cdFx0XHRcdGN0eC5wcm90ZWN0Q2FzY2FkZSA9ICEhcHJzLmZpbHRlcigocHIpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcHIuY2FzY2FkZTtcblx0XHRcdFx0fSkubGVuZ3RoO1xuXHRcdFx0fVxuXHRcdFx0Ly8gV2FybiBpZiBjYXNjYWRpbmcgcHJvdGVjdGlvbiBiZWluZyBhcHBsaWVkIHdpdGggYW4gaW52YWxpZCBwcm90ZWN0aW9uIGxldmVsLFxuXHRcdFx0Ly8gd2hpY2ggZm9yIGVkaXQgcHJvdGVjdGlvbiB3aWxsIGNhdXNlIGNhc2NhZGluZyB0byBiZSBzaWxlbnRseSBzdHJpcHBlZFxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0Q2FzY2FkZSkge1xuXHRcdFx0XHQvLyBPbiBtb3ZlIHByb3RlY3Rpb24sIHRoaXMgaXMgdGVjaG5pY2FsbHkgc3RyaWN0ZXIgdGhhbiB0aGUgTVcgQVBJLFxuXHRcdFx0XHQvLyBidXQgc2VlbXMgcmVhc29uYWJsZSB0byBhdm9pZCBkdW1iIHZhbHVlcyBhbmQgbWlzbGVhZGluZyBsb2cgZW50cmllcyAoVDI2NTYyNilcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCghY3R4LnByb3RlY3RFZGl0IHx8XG5cdFx0XHRcdFx0XHRjdHgucHJvdGVjdEVkaXQubGV2ZWwgIT09ICdzeXNvcCcgfHxcblx0XHRcdFx0XHRcdCFjdHgucHJvdGVjdE1vdmUgfHxcblx0XHRcdFx0XHRcdGN0eC5wcm90ZWN0TW92ZS5sZXZlbCAhPT0gJ3N5c29wJykgJiZcblx0XHRcdFx0XHQhY29uZmlybShcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5oKo5bey5a+54oCcJywgJ+aCqOW3suWwjeOAjCcpICtcblx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3lkK/nlKjkuobov57plIHkv53miqQnLCAn44CN5ZWf55So5LqG6YCj6Y6W5L+d6K23JykgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J++8jOS9huayoeacieiuvue9ruS7heeuoeeQhuWRmOeahOS/neaKpOe6p+WIq+OAglxcblxcbicsXG5cdFx0XHRcdFx0XHRcdFx0J++8jOS9huaykuacieioreWumuWDheeuoeeQhuWToeeahOS/neitt+e0muWIpeOAglxcblxcbidcblx0XHRcdFx0XHRcdFx0KSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn5Y2V5Ye756Gu6K6k5Lul6Ieq5Yqo6LCD5pW05bm257un57ut6L+e6ZSB5YWo5L+d5oqk77yM5Y2V5Ye75Y+W5raI5Lul6Lez6L+H5q2k5pON5L2cJyxcblx0XHRcdFx0XHRcdFx0XHQn6bue5pOK56K66KqN5Lul6Ieq5YuV6Kq/5pW05Lim57m857qM6YCj6Y6W5YWo5L+d6K2377yM6bue5pOK5Y+W5raI5Lul6Lez6YGO5q2k5pON5L2cJ1xuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+i/numUgeS/neaKpOW3suWPlua2iOOAgicsICfpgKPpjpbkv53orbflt7Llj5bmtojjgIInKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5wcm90ZWN0RWRpdC5sZXZlbCA9ICdzeXNvcCc7XG5cdFx0XHRcdGN0eC5wcm90ZWN0TW92ZS5sZXZlbCA9ICdzeXNvcCc7XG5cdFx0XHR9XG5cdFx0XHQvLyBCdWlsZCBwcm90ZWN0aW9uIGxldmVscyBhbmQgZXhwaXJ5cyAoZXhwaXJpZXM/KSBmb3IgcXVlcnlcblx0XHRcdGNvbnN0IHByb3RlY3Rpb25zID0gW107XG5cdFx0XHRjb25zdCBleHBpcnlzID0gW107XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RFZGl0KSB7XG5cdFx0XHRcdHByb3RlY3Rpb25zW3Byb3RlY3Rpb25zLmxlbmd0aF0gPSBgZWRpdD0ke2N0eC5wcm90ZWN0RWRpdC5sZXZlbH1gO1xuXHRcdFx0XHRleHBpcnlzW2V4cGlyeXMubGVuZ3RoXSA9IGN0eC5wcm90ZWN0RWRpdC5leHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RNb3ZlKSB7XG5cdFx0XHRcdHByb3RlY3Rpb25zW3Byb3RlY3Rpb25zLmxlbmd0aF0gPSBgbW92ZT0ke2N0eC5wcm90ZWN0TW92ZS5sZXZlbH1gO1xuXHRcdFx0XHRleHBpcnlzW2V4cGlyeXMubGVuZ3RoXSA9IGN0eC5wcm90ZWN0TW92ZS5leHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RDcmVhdGUpIHtcblx0XHRcdFx0cHJvdGVjdGlvbnNbcHJvdGVjdGlvbnMubGVuZ3RoXSA9IGBjcmVhdGU9JHtjdHgucHJvdGVjdENyZWF0ZS5sZXZlbH1gO1xuXHRcdFx0XHRleHBpcnlzW2V4cGlyeXMubGVuZ3RoXSA9IGN0eC5wcm90ZWN0Q3JlYXRlLmV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwcm90ZWN0Jyxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHByb3RlY3Rpb25zOiBwcm90ZWN0aW9ucy5qb2luKCd8JyksXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5cy5qb2luKCd8JyksXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdC8vIE9ubHkgc2hvd3MgdXAgaW4gbG9ncywgbm90IHBhZ2UgaGlzdG9yeVxuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgucHJvdGVjdENhc2NhZGUpIHtcblx0XHRcdFx0cXVlcnkuY2FzY2FkZSA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGN0eC5wcm90ZWN0UHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfkv53miqTpobXpnaLigKbigKYnLCAn5L+d6K236aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25Qcm90ZWN0U3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnByb3RlY3RQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5wcm90ZWN0UHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBzbGVlcCA9IChtaWxsaXNlY29uZHMpID0+IHtcblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRcdFx0c2V0VGltZW91dChkZWZlcnJlZC5yZXNvbHZlLCBtaWxsaXNlY29uZHMpO1xuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH07XG5cdH07IC8vIGVuZCBNb3JlYml0cy53aWtpLnBhZ2Vcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLnByZXZpZXcgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogVXNlIHRoZSBBUEkgdG8gcGFyc2UgYSBmcmFnbWVudCBvZiB3aWtpdGV4dCBhbmQgcmVuZGVyIGl0IGFzIEhUTUwuXG5cdCAqXG5cdCAqIFRoZSBzdWdnZXN0ZWQgaW1wbGVtZW50YXRpb24gcGF0dGVybiAoaW4ge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd30gYW5kXG5cdCAqIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19IHNpdHVhdGlvbnMpIGlzIHRvIGNvbnN0cnVjdCBhXG5cdCAqIGBNb3JlYml0cy53aWtpLnByZXZpZXdgIG9iamVjdCBhZnRlciByZW5kZXJpbmcgYSBgTW9yZWJpdHMucXVpY2tGb3JtYCwgYW5kXG5cdCAqIGJpbmQgdGhlIG9iamVjdCB0byBhbiBhcmJpdHJhcnkgcHJvcGVydHkgb2YgdGhlIGZvcm0gKGUuZy4gfHByZXZpZXdlcnwpLlxuXHQgKiBGb3IgYW4gZXhhbXBsZSwgc2VlIHR3aW5rbGV3YXJuLmpzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcHJldmlld2JveCAtIFRoZSBlbGVtZW50IHRoYXQgd2lsbCBjb250YWluIHRoZSByZW5kZXJlZCBIVE1MLFxuXHQgKiB1c3VhbGx5IGEgPGRpdj4gZWxlbWVudC5cblx0ICovXG5cdE1vcmViaXRzLndpa2kucHJldmlldyA9IGZ1bmN0aW9uIChwcmV2aWV3Ym94KSB7XG5cdFx0dGhpcy5wcmV2aWV3Ym94ID0gcHJldmlld2JveDtcblx0XHQkKHByZXZpZXdib3gpLmFkZENsYXNzKCdtb3JlYml0cy1wcmV2aWV3Ym94JykuaGlkZSgpO1xuXHRcdC8qKlxuXHRcdCAqIERpc3BsYXlzIHRoZSBwcmV2aWV3IGJveCwgYW5kIGJlZ2lucyBhbiBhc3luY2hyb25vdXMgYXR0ZW1wdFxuXHRcdCAqIHRvIHJlbmRlciB0aGUgc3BlY2lmaWVkIHdpa2l0ZXh0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2l0ZXh0IC0gV2lraXRleHQgdG8gcmVuZGVyOyBtb3N0IHRoaW5ncyBzaG91bGQgd29yaywgaW5jbHVkaW5nIGBzdWJzdDpgIGFuZCBgfn5+fmAuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtwYWdlVGl0bGVdIC0gT3B0aW9uYWwgcGFyYW1ldGVyIGZvciB0aGUgcGFnZSB0aGlzIHNob3VsZCBiZSByZW5kZXJlZCBhcyBiZWluZyBvbiwgaWYgb21pdHRlZCBpdCBpcyB0YWtlbiBhcyB0aGUgY3VycmVudCBwYWdlLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbc2VjdGlvblRpdGxlXSAtIElmIHByb3ZpZGVkLCByZW5kZXIgdGhlIHRleHQgYXMgYSBuZXcgc2VjdGlvbiB1c2luZyB0aGlzIGFzIHRoZSB0aXRsZS5cblx0XHQgKiBAcmV0dXJucyB7alF1ZXJ5LnByb21pc2V9XG5cdFx0ICovXG5cdFx0dGhpcy5iZWdpblJlbmRlciA9ICh3aWtpdGV4dCwgcGFnZVRpdGxlLCBzZWN0aW9uVGl0bGUpID0+IHtcblx0XHRcdCQocHJldmlld2JveCkuc2hvdygpO1xuXHRcdFx0Y29uc3Qgc3RhdHVzc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdHByZXZpZXdib3guYXBwZW5kQ2hpbGQoc3RhdHVzc3Bhbik7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMuaW5pdChzdGF0dXNzcGFuKTtcblx0XHRcdC8vIOiLpemhtemdouS4jeaYr3dpa2l0ZXh077yI5L6L5aaCSlPjgIFDU1PnrYnvvInvvIzpgqPkuYjmib7kuIDkuKp3aWtpdGV4dOmhtemdouadpemihOiniOOAglxuXHRcdFx0bGV0IHBhZ2VOYW1lID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuXHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnUGFnZUNvbnRlbnRNb2RlbCcpICE9PSAnd2lraXRleHQnKSB7XG5cdFx0XHRcdHBhZ2VOYW1lID0gYERyYWZ0OiR7cGFnZU5hbWV9YDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdHByb3A6IFsndGV4dCcsICdtb2R1bGVzJ10sXG5cdFx0XHRcdHBzdDogdHJ1ZSxcblx0XHRcdFx0Ly8gUFNUID0gcHJlLXNhdmUgdHJhbnNmb3JtOyB0aGlzIG1ha2VzIHN1YnN0aXR1dGlvbiB3b3JrIHByb3Blcmx5XG5cdFx0XHRcdHByZXZpZXc6IHRydWUsXG5cdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlIHx8IHBhZ2VOYW1lLFxuXHRcdFx0XHRkaXNhYmxlbGltaXRyZXBvcnQ6IHRydWUsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0dXNlbGFuZzogbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKSxcblx0XHRcdFx0Ly8gVXNlIHdnVXNlckxhbmd1YWdlIGZvciBwcmV2aWV3XG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChzZWN0aW9uVGl0bGUpIHtcblx0XHRcdFx0cXVlcnkuc2VjdGlvbiA9ICduZXcnO1xuXHRcdFx0XHRxdWVyeS5zZWN0aW9udGl0bGUgPSBzZWN0aW9uVGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZW5kZXJBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5Yqg6L295Lit4oCm4oCmJywgJ+i8ieWFpeS4reKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5SZW5kZXJTdWNjZXNzLFxuXHRcdFx0XHRuZXcgTW9yZWJpdHMuc3RhdHVzKHdpbmRvdy53Z1VMUygn6aKE6KeIJywgJ+mgkOimvScpKVxuXHRcdFx0KTtcblx0XHRcdHJlbmRlckFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBmblJlbmRlclN1Y2Nlc3MgPSAoYXBpb2JqKSA9PiB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGFwaW9iai5nZXRSZXNwb25zZSgpO1xuXHRcdFx0Y29uc3QgaHRtbCA9IHJlc3BvbnNlLnBhcnNlLnRleHQ7XG5cdFx0XHRpZiAoIWh0bWwpIHtcblx0XHRcdFx0YXBpb2JqLnN0YXRlbGVtLmVycm9yKHdpbmRvdy53Z1VMUygn5Yqg6L296aKE6KeI5aSx6LSl77yM5oiW5qih5p2/5Li656m6JywgJ+i8ieWFpemgkOimveWkseaVl++8jOaIluaooeadv+eCuuepuicpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cHJldmlld2JveC5pbm5lckhUTUwgPSBodG1sO1xuXHRcdFx0bXcubG9hZGVyLmxvYWQocmVzcG9uc2UucGFyc2UubW9kdWxlc3R5bGVzKTtcblx0XHRcdG13LmxvYWRlci5sb2FkKHJlc3BvbnNlLnBhcnNlLm1vZHVsZXMpO1xuXHRcdFx0Ly8gdGhpcyBtYWtlcyBsaW5rcyBvcGVuIGluIG5ldyB0YWJcblx0XHRcdCQocHJldmlld2JveCkuZmluZCgnYScpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKS5hdHRyKCdyZWwnLCAnbm9vcGVuZXIgbm9yZWZlcnJlcicpO1xuXHRcdH07XG5cdFx0LyoqIEhpZGVzIHRoZSBwcmV2aWV3IGJveCBhbmQgY2xlYXJzIGl0LiAqL1xuXHRcdHRoaXMuY2xvc2VQcmV2aWV3ID0gKCkgPT4ge1xuXHRcdFx0JChwcmV2aWV3Ym94KS5lbXB0eSgpLmhpZGUoKTtcblx0XHR9O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2l0ZXh0ICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFdpa2l0ZXh0IG1hbmlwdWxhdGlvbi5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy53aWtpdGV4dFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLndpa2l0ZXh0ID0ge307XG5cdC8qKlxuXHQgKiBHZXQgdGhlIHZhbHVlIG9mIGV2ZXJ5IHBhcmFtZXRlciBmb3VuZCBpbiB0aGUgd2lraXRleHQgb2YgYSBnaXZlbiB0ZW1wbGF0ZS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2l0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gV2lraXRleHQgY29udGFpbmluZyBhIHRlbXBsYXRlLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIC0gSW5kZXggbm90aW5nIHdoZXJlIGluIHRoZSB0ZXh0IHRoZSB0ZW1wbGF0ZSBiZWdpbnMuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IGB7bmFtZTogdGVtcGxhdGVOYW1lLCBwYXJhbWV0ZXJzOiB7a2V5OiB2YWx1ZX19YC5cblx0ICovXG5cdE1vcmViaXRzLndpa2l0ZXh0LnBhcnNlVGVtcGxhdGUgPSAodGV4dCwgc3RhcnQpID0+IHtcblx0XHRzdGFydCB8fD0gMDtcblx0XHRjb25zdCBsZXZlbCA9IFtdOyAvLyBUcmFjayBvZiBob3cgZGVlcCB3ZSBhcmUgKHt7LCB7e3ssIG9yIFtbKVxuXHRcdGxldCBjb3VudCA9IC0xOyAvLyBOdW1iZXIgb2YgcGFyYW1ldGVycyBmb3VuZFxuXHRcdGxldCB1bm5hbWVkID0gMDsgLy8gS2VlcCB0cmFjayBvZiB3aGF0IG51bWJlciBhbiB1bm5hbWVkIHBhcmFtZXRlciBzaG91bGQgcmVjZWl2ZVxuXHRcdGxldCBlcXVhbHMgPSAtMTsgLy8gQWZ0ZXIgZmluZGluZyBcIj1cIiBiZWZvcmUgYSBwYXJhbWV0ZXIsIHRoZSBpbmRleDsgb3RoZXJ3aXNlLCAtMVxuXHRcdGxldCBjdXJyZW50ID0gJyc7XG5cdFx0Y29uc3QgcmVzdWx0ID0ge1xuXHRcdFx0bmFtZTogJycsXG5cdFx0XHRwYXJhbWV0ZXJzOiB7fSxcblx0XHR9O1xuXHRcdGxldCBrZXk7XG5cdFx0bGV0IHZhbHVlO1xuXHRcdC8qKlxuXHRcdCAqIEZ1bmN0aW9uIHRvIGhhbmRsZSBmaW5kaW5nIHBhcmFtZXRlciB2YWx1ZXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5hbD1mYWxzZV0gLSBXaGV0aGVyIHRoaXMgaXMgdGhlIGZpbmFsXG5cdFx0ICogcGFyYW1ldGVyIGFuZCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGUgdHJhaWxpbmcgYH19YC5cblx0XHQgKi9cblx0XHRjb25zdCBmaW5kUGFyYW0gPSAoZmluYWwpID0+IHtcblx0XHRcdC8vIE5vdGhpbmcgZm91bmQgeWV0LCB0aGlzIG11c3QgYmUgdGhlIHRlbXBsYXRlIG5hbWVcblx0XHRcdGlmIChjb3VudCA9PT0gLTEpIHtcblx0XHRcdFx0cmVzdWx0Lm5hbWUgPSBjdXJyZW50LnNsaWNlKDIpLnRyaW0oKTtcblx0XHRcdFx0Kytjb3VudDtcblx0XHRcdH0gZWxzZSBpZiAoZXF1YWxzID09PSAtMSkge1xuXHRcdFx0XHQvLyBJbiBhIHBhcmFtZXRlclxuXHRcdFx0XHQvLyBObyBlcXVhbHMsIHNvIGl0IG11c3QgYmUgdW5uYW1lZDsgbm8gdHJpbSBzaW5jZSB3aGl0ZXNwYWNlIGFsbG93ZWRcblx0XHRcdFx0Y29uc3QgcGFyYW0gPSBmaW5hbCA/IGN1cnJlbnQuc2xpY2UoZXF1YWxzICsgMSwgLTIpIDogY3VycmVudDtcblx0XHRcdFx0aWYgKHBhcmFtKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnBhcmFtZXRlcnNbKyt1bm5hbWVkXSA9IHBhcmFtO1xuXHRcdFx0XHRcdCsrY291bnQ7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFdlIGZvdW5kIGFuIGVxdWFscywgc28gc2F2ZSB0aGUgcGFyYW1ldGVyIGFzIGtleTogdmFsdWVcblx0XHRcdFx0a2V5ID0gY3VycmVudC5zbGljZSgwLCBNYXRoLm1heCgwLCBlcXVhbHMpKS50cmltKCk7XG5cdFx0XHRcdHZhbHVlID0gZmluYWwgPyBjdXJyZW50LnNsaWNlKGVxdWFscyArIDEsIC0yKS50cmltKCkgOiBjdXJyZW50LnNsaWNlKE1hdGgubWF4KDAsIGVxdWFscyArIDEpKS50cmltKCk7XG5cdFx0XHRcdHJlc3VsdC5wYXJhbWV0ZXJzW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0ZXF1YWxzID0gLTE7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRjb25zdCB0ZXN0MyA9IHRleHQuc2xpY2UoaSwgaSArIDMpO1xuXHRcdFx0aWYgKHRlc3QzID09PSAne3t7JyB8fCAodGVzdDMgPT09ICd9fX0nICYmIGxldmVsLmF0KC0xKSA9PT0gMykpIHtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXN0Mztcblx0XHRcdFx0aSArPSAyO1xuXHRcdFx0XHRpZiAodGVzdDMgPT09ICd7e3snKSB7XG5cdFx0XHRcdFx0bGV2ZWxbbGV2ZWwubGVuZ3RoXSA9IDM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV2ZWwucG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB0ZXN0MiA9IHRleHQuc2xpY2UoaSwgaSArIDIpO1xuXHRcdFx0Ly8gRW50ZXJpbmcgYSB0ZW1wbGF0ZSAob3IgbGluaylcblx0XHRcdGlmICh0ZXN0MiA9PT0gJ3t7JyB8fCB0ZXN0MiA9PT0gJ1tbJykge1xuXHRcdFx0XHRjdXJyZW50ICs9IHRlc3QyO1xuXHRcdFx0XHQrK2k7XG5cdFx0XHRcdGlmICh0ZXN0MiA9PT0gJ3t7Jykge1xuXHRcdFx0XHRcdGxldmVsW2xldmVsLmxlbmd0aF0gPSAyO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldmVsW2xldmVsLmxlbmd0aF0gPSAnd2wnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRWl0aGVyIGxlYXZpbmcgYSBsaW5rIG9yIHRlbXBsYXRlL3BhcnNlciBmdW5jdGlvblxuXHRcdFx0aWYgKCh0ZXN0MiA9PT0gJ319JyAmJiBsZXZlbC5hdCgtMSkgPT09IDIpIHx8ICh0ZXN0MiA9PT0gJ11dJyAmJiBsZXZlbC5hdCgtMSkgPT09ICd3bCcpKSB7XG5cdFx0XHRcdGN1cnJlbnQgKz0gdGVzdDI7XG5cdFx0XHRcdCsraTtcblx0XHRcdFx0bGV2ZWwucG9wKCk7XG5cdFx0XHRcdC8vIEZpbmQgdGhlIGZpbmFsIHBhcmFtZXRlciBpZiB0aGlzIHJlYWxseSBpcyB0aGUgZW5kXG5cdFx0XHRcdGlmICh0ZXN0MiA9PT0gJ319JyAmJiBsZXZlbC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRmaW5kUGFyYW0odHJ1ZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGV4dC5jaGFyQXQoaSkgPT09ICd8JyAmJiBsZXZlbC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Ly8gQW5vdGhlciBwaXBlIGZvdW5kLCB0b3BsZXZlbCwgc28gcGFyYW1ldGVyIGNvbWluZyB1cCFcblx0XHRcdFx0ZmluZFBhcmFtKCk7XG5cdFx0XHRcdGN1cnJlbnQgPSAnJztcblx0XHRcdH0gZWxzZSBpZiAoZXF1YWxzID09PSAtMSAmJiB0ZXh0LmNoYXJBdChpKSA9PT0gJz0nICYmIGxldmVsLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHQvLyBFcXVhbHMgZm91bmQsIHRvcGxldmVsXG5cdFx0XHRcdGVxdWFscyA9IGN1cnJlbnQubGVuZ3RoO1xuXHRcdFx0XHRjdXJyZW50ICs9IHRleHQuY2hhckF0KGkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSnVzdCBhZHZhbmNlIHRoZSBwb3NpdGlvblxuXHRcdFx0XHRjdXJyZW50ICs9IHRleHQuY2hhckF0KGkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHQvKipcblx0ICogQWRqdXN0IGFuZCBtYW5pcHVsYXRlIHRoZSB3aWtpdGV4dCBvZiBhIHBhZ2UuXG5cdCAqXG5cdCAqIEBjbGFzc1xuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraXRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBXaWtpdGV4dCB0byBiZSBtYW5pcHVsYXRlZC5cblx0ICovXG5cdE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UgPSBmdW5jdGlvbiAodGV4dCkge1xuXHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdH07XG5cdE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UucHJvdG90eXBlID0ge1xuXHRcdHRleHQ6ICcnLFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZXMgbGlua3MgdG8gYGxpbmtfdGFyZ2V0YCBmcm9tIHRoZSBwYWdlIHRleHQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGlua1RhcmdldFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdHJlbW92ZUxpbmsobGlua1RhcmdldCkge1xuXHRcdFx0Y29uc3QgbXdUaXRsZSA9IG13LlRpdGxlLm5ld0Zyb21UZXh0KGxpbmtUYXJnZXQpO1xuXHRcdFx0Y29uc3QgbmFtZXNwYWNlSUQgPSBtd1RpdGxlLmdldE5hbWVzcGFjZUlkKCk7XG5cdFx0XHRjb25zdCB0aXRsZSA9IG13VGl0bGUuZ2V0TWFpblRleHQoKTtcblx0XHRcdGxldCBsaW5rUmVnZXhTdHJpbmcgPSAnJztcblx0XHRcdGlmIChuYW1lc3BhY2VJRCAhPT0gMCkge1xuXHRcdFx0XHRsaW5rUmVnZXhTdHJpbmcgPSBgJHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleChuYW1lc3BhY2VJRCl9OmA7XG5cdFx0XHR9XG5cdFx0XHRsaW5rUmVnZXhTdHJpbmcgKz0gTW9yZWJpdHMucGFnZU5hbWVSZWdleCh0aXRsZSk7XG5cdFx0XHQvLyBGb3IgbW9zdCBuYW1lc3BhY2VzLCB1bmxpbmsgYm90aCBbW1VzZXI6VGVzdF1dIGFuZCBbWzpVc2VyOlRlc3RdXVxuXHRcdFx0Ly8gRm9yIGZpbGVzIGFuZCBjYXRlZ29yaWVzLCBvbmx5IHVubGluayBbWzpDYXRlZ29yeTpUZXN0XV0uIERvIG5vdCB1bmxpbmsgW1tDYXRlZ29yeTpUZXN0XV1cblx0XHRcdGNvbnN0IGlzRmlsZU9yQ2F0ZWdvcnkgPSBbNiwgMTRdLmluY2x1ZGVzKG5hbWVzcGFjZUlEKTtcblx0XHRcdGNvbnN0IGNvbG9uID0gaXNGaWxlT3JDYXRlZ29yeSA/ICc6JyA6ICc6Pyc7XG5cdFx0XHRjb25zdCBzaW1wbGVMaW5rUmVnZXggPSBuZXcgUmVnRXhwKGBcXFxcW1xcXFxbJHtjb2xvbn0oJHtsaW5rUmVnZXhTdHJpbmd9KVxcXFxdXFxcXF1gLCAnZycpO1xuXHRcdFx0Y29uc3QgcGlwZWRMaW5rUmVnZXggPSBuZXcgUmVnRXhwKGBcXFxcW1xcXFxbJHtjb2xvbn0ke2xpbmtSZWdleFN0cmluZ31cXFxcfCguKz8pXFxcXF1cXFxcXWAsICdnJyk7XG5cdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShzaW1wbGVMaW5rUmVnZXgsICckMScpLnJlcGxhY2UocGlwZWRMaW5rUmVnZXgsICckMScpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDb21tZW50cyBvdXQgaW1hZ2VzIGZyb20gcGFnZSB0ZXh0OyBpZiB1c2VkIGluIGEgZ2FsbGVyeSwgZGVsZXRlcyB0aGUgd2hvbGUgbGluZS5cblx0XHQgKiBJZiB1c2VkIGFzIGEgdGVtcGxhdGUgYXJndW1lbnQgKG5vdCBuZWNlc3NhcmlseSB3aXRoIGBGaWxlOmAgcHJlZml4KSwgdGhlIHRlbXBsYXRlIHBhcmFtZXRlciBpcyBjb21tZW50ZWQgb3V0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIC0gSW1hZ2UgbmFtZSB3aXRob3V0IGBGaWxlOmAgcHJlZml4LlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbcmVhc29uXSAtIFJlYXNvbiB0byBiZSBpbmNsdWRlZCBpbiBjb21tZW50LCBhbG9uZ3NpZGUgdGhlIGNvbW1lbnRlZC1vdXQgaW1hZ2UuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0Y29tbWVudE91dEltYWdlKGltYWdlLCByZWFzb24pIHtcblx0XHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKHRoaXMudGV4dCk7XG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJzwhLS0nLCAnLS0+Jyk7XG5cdFx0XHRyZWFzb24gPSByZWFzb24gPyBgJHtyZWFzb259OiBgIDogJyc7XG5cdFx0XHRjb25zdCBpbWFnZVJlZ2V4U3RyaW5nID0gTW9yZWJpdHMucGFnZU5hbWVSZWdleChpbWFnZSk7XG5cdFx0XHQvLyBDaGVjayBmb3Igbm9ybWFsIGltYWdlIGxpbmtzLCBpLmUuIFtbRmlsZTpGb29iYXIucG5nfC4uLl1dXG5cdFx0XHQvLyBXaWxsIGVhdCB0aGUgd2hvbGUgbGlua1xuXHRcdFx0Y29uc3QgbGlua3NSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxcW1xcXFxbJHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqJHtpbWFnZVJlZ2V4U3RyaW5nfVxcXFxzKltcXFxcfCg/OlxcXFxdXFxcXF0pXWBcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBhbGxMaW5rcyA9IE1vcmViaXRzLnN0cmluZy5zcGxpdFdlaWdodGVkQnlLZXlzKHVuYmluZGVyLmNvbnRlbnQsICdbWycsICddXScpO1xuXHRcdFx0Zm9yIChjb25zdCBhbGxMaW5rIG9mIGFsbExpbmtzKSB7XG5cdFx0XHRcdGlmIChsaW5rc1JlZ2V4LnRlc3QoYWxsTGluaykpIHtcblx0XHRcdFx0XHRjb25zdCByZXBsYWNlbWVudCA9IGA8IS0tICR7cmVhc29ufSR7YWxsTGlua30gLS0+YDtcblx0XHRcdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKGFsbExpbmssIHJlcGxhY2VtZW50KTtcblx0XHRcdFx0XHQvLyB1bmJpbmQgdGhlIG5ld2x5IGNyZWF0ZWQgY29tbWVudHNcblx0XHRcdFx0XHR1bmJpbmRlci51bmJpbmQoJzwhLS0nLCAnLS0+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIENoZWNrIGZvciBnYWxsZXJ5IGltYWdlcywgaS5lLiBpbnN0YW5jZXMgdGhhdCBtdXN0IHN0YXJ0IG9uIGEgbmV3IGxpbmUsXG5cdFx0XHQvLyBldmVudHVhbGx5IHByZWNlZGVkIHdpdGggc29tZSBzcGFjZSwgYW5kIG11c3QgaW5jbHVkZSBGaWxlOiBwcmVmaXhcblx0XHRcdC8vIFdpbGwgZWF0IHRoZSB3aG9sZSBsaW5lLlxuXHRcdFx0Y29uc3QgZ2FsbGVyeUltYWdlUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgKF5cXFxccyoke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9XFxcXHMqKD86XFxcXHwuKj8kfCQpKWAsXG5cdFx0XHRcdCdtZydcblx0XHRcdCk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKGdhbGxlcnlJbWFnZVJlZ2V4LCBgPCEtLSAke3JlYXNvbn0kMSAtLT5gKTtcblx0XHRcdC8vIHVuYmluZCB0aGUgbmV3bHkgY3JlYXRlZCBjb21tZW50c1xuXHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8IS0tJywgJy0tPicpO1xuXHRcdFx0Ly8gQ2hlY2sgZnJlZSBpbWFnZSB1c2FnZXMsIGZvciBleGFtcGxlIGFzIHRlbXBsYXRlIGFyZ3VtZW50cywgbWlnaHQgaGF2ZSB0aGUgRmlsZTogcHJlZml4IGV4Y2x1ZGVkLCBidXQgbXVzdCBiZSBwcmVjZWRlZCBieSBhbiB8XG5cdFx0XHQvLyBXaWxsIG9ubHkgZWF0IHRoZSBpbWFnZSBuYW1lIGFuZCB0aGUgcHJlY2VkaW5nIGJhciBhbmQgYW4gZXZlbnR1YWwgbmFtZWQgcGFyYW1ldGVyXG5cdFx0XHRjb25zdCBmcmVlSW1hZ2VSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGAoXFxcXHxcXFxccyooPzpbXFxcXHdcXFxcc10rXFxcXD0pP1xcXFxzKig/OiR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKik/JHtpbWFnZVJlZ2V4U3RyaW5nfSlgLFxuXHRcdFx0XHQnbWcnXG5cdFx0XHQpO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZShmcmVlSW1hZ2VSZWdleCwgYDwhLS0gJHtyZWFzb259JDEgLS0+YCk7XG5cdFx0XHQvLyBSZWJpbmQgdGhlIGNvbnRlbnQgbm93LCB3ZSBhcmUgZG9uZSFcblx0XHRcdHRoaXMudGV4dCA9IHVuYmluZGVyLnJlYmluZCgpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDb252ZXJ0cyB1c2VzIG9mIFtbRmlsZTpgaW1hZ2VgXV0gdG8gW1tGaWxlOmBpbWFnZWB8YGRhdGFgXV0uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgLSBJbWFnZSBuYW1lIHdpdGhvdXQgRmlsZTogcHJlZml4LlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIC0gVGhlIGRpc3BsYXkgb3B0aW9ucy5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRhZGRUb0ltYWdlQ29tbWVudChpbWFnZSwgZGF0YSkge1xuXHRcdFx0Y29uc3QgaW1hZ2VSZWdleFN0cmluZyA9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoaW1hZ2UpO1xuXHRcdFx0Y29uc3QgbGlua3NSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxcW1xcXFxbJHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqJHtpbWFnZVJlZ2V4U3RyaW5nfVxcXFxzKltcXFxcfCg/OlxcXFxdXFxcXF0pXWBcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBhbGxMaW5rcyA9IE1vcmViaXRzLnN0cmluZy5zcGxpdFdlaWdodGVkQnlLZXlzKHRoaXMudGV4dCwgJ1tbJywgJ11dJyk7XG5cdFx0XHRmb3IgKGxldCByZXBsYWNlbWVudCBvZiBhbGxMaW5rcykge1xuXHRcdFx0XHRpZiAobGlua3NSZWdleC50ZXN0KHJlcGxhY2VtZW50KSkge1xuXHRcdFx0XHRcdC8vIGp1c3QgcHV0IGl0IGF0IHRoZSBlbmQ/XG5cdFx0XHRcdFx0cmVwbGFjZW1lbnQgPSByZXBsYWNlbWVudC5yZXBsYWNlKC9cXF1cXF0kLywgYHwke2RhdGF9XV1gKTtcblx0XHRcdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShyZXBsYWNlbWVudCwgcmVwbGFjZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBnYWxsZXJ5UmVnZXggPSBuZXcgUmVnRXhwKGBeKFxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ30uKj8pXFxcXHw/KC4qPykkYCwgJ21nJyk7XG5cdFx0XHRjb25zdCBuZXd0ZXh0ID0gYCQxfCQyICR7ZGF0YX1gO1xuXHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UoZ2FsbGVyeVJlZ2V4LCBuZXd0ZXh0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIGFsbCB0cmFuc2NsdXNpb25zIG9mIGEgdGVtcGxhdGUgZnJvbSBwYWdlIHRleHQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgLSBQYWdlIG5hbWUgd2hvc2UgdHJhbnNjbHVzaW9ucyBhcmUgdG8gYmUgcmVtb3ZlZCxcblx0XHQgKiBpbmNsdWRlIG5hbWVzcGFjZSBwcmVmaXggb25seSBpZiBub3QgaW4gdGVtcGxhdGUgbmFtZXNwYWNlLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdHJlbW92ZVRlbXBsYXRlKHRlbXBsYXRlKSB7XG5cdFx0XHRjb25zdCB0ZW1wbGF0ZVJlZ2V4U3RyaW5nID0gTW9yZWJpdHMucGFnZU5hbWVSZWdleCh0ZW1wbGF0ZSk7XG5cdFx0XHRjb25zdCBsaW5rc1JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFx7XFxcXHsoPzoke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDEwKX06KT9cXFxccyoke3RlbXBsYXRlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXH1cXFxcfSldYFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGFsbFRlbXBsYXRlcyA9IE1vcmViaXRzLnN0cmluZy5zcGxpdFdlaWdodGVkQnlLZXlzKHRoaXMudGV4dCwgJ3t7JywgJ319JywgWyd7e3snLCAnfX19J10pO1xuXHRcdFx0Zm9yIChjb25zdCBhbGxUZW1wbGF0ZSBvZiBhbGxUZW1wbGF0ZXMpIHtcblx0XHRcdFx0aWYgKGxpbmtzUmVnZXgudGVzdChhbGxUZW1wbGF0ZSkpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShhbGxUZW1wbGF0ZSwgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNtYXJ0bHkgaW5zZXJ0IGEgdGFnIGF0b3AgcGFnZSB0ZXh0IGJ1dCBhZnRlciBzcGVjaWZpZWQgdGVtcGxhdGVzLFxuXHRcdCAqIHN1Y2ggYXMgaGF0bm90ZXMsIHNob3J0IGRlc2NyaXB0aW9uLCBvciBkZWxldGlvbiBhbmQgcHJvdGVjdGlvbiB0ZW1wbGF0ZXMuXG5cdFx0ICogTm90YWJseSwgZG9lcyAqbm90KiBpbnNlcnQgYSBuZXdsaW5lIGFmdGVyIHRoZSB0YWcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGFnIC0gVGhlIHRhZyB0byBiZSBpbnNlcnRlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gcmVnZXggLSBUZW1wbGF0ZXMgYWZ0ZXIgd2hpY2ggdG8gaW5zZXJ0IHRhZyxcblx0XHQgKiBnaXZlbiBhcyBlaXRoZXIgYXMgYSAocmVnZXgtdmFsaWQpIHN0cmluZyBvciBhbiBhcnJheSB0byBiZSBqb2luZWQgYnkgcGlwZXMuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtmbGFncz1pXSAtIFJlZ2V4IGZsYWdzIHRvIGFwcGx5LiAgYCcnYCB0byBwcm92aWRlIG5vIGZsYWdzO1xuXHRcdCAqIG90aGVyIGZhbHNleSB2YWx1ZXMgd2lsbCBkZWZhdWx0IHRvIGBpYC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3ByZVJlZ2V4XSAtIE9wdGlvbmFsIHJlZ2V4IHN0cmluZyBvciBhcnJheSB0byBtYXRjaFxuXHRcdCAqIGJlZm9yZSBhbnkgdGVtcGxhdGUgbWF0Y2hlcyAoaS5lLiBiZWZvcmUgYHt7YCksIHN1Y2ggYXMgaHRtbCBjb21tZW50cy5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRpbnNlcnRBZnRlclRlbXBsYXRlcyh0YWcsIHJlZ2V4LCBmbGFncywgcHJlUmVnZXgpIHtcblx0XHRcdGlmICh0YWcgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdObyB0YWcgcHJvdmlkZWQnKTtcblx0XHRcdH1cblx0XHRcdC8vIC5sZW5ndGggaXMgb25seSBhIHByb3BlcnR5IG9mIHN0cmluZ3MgYW5kIGFycmF5cyBzbyB3ZVxuXHRcdFx0Ly8gc2hvdWxkbid0IG5lZWQgdG8gY2hlY2sgdHlwZVxuXHRcdFx0aWYgKHJlZ2V4ID09PSB1bmRlZmluZWQgfHwgIXJlZ2V4Lmxlbmd0aCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vIHJlZ2V4IHByb3ZpZGVkJyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVnZXgpKSB7XG5cdFx0XHRcdHJlZ2V4ID0gcmVnZXguam9pbignfCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBmbGFncyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0ZmxhZ3MgPSAnaSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXByZVJlZ2V4IHx8ICFwcmVSZWdleC5sZW5ndGgpIHtcblx0XHRcdFx0cHJlUmVnZXggPSAnJztcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcmVSZWdleCkpIHtcblx0XHRcdFx0cHJlUmVnZXggPSBwcmVSZWdleC5qb2luKCd8Jyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBSZWdleCBpcyBleHRyYSBjb21wbGljYXRlZCB0byBhbGxvdyBmb3IgdGVtcGxhdGVzIHdpdGhcblx0XHRcdC8vIHBhcmFtZXRlcnMgYW5kIHRvIGhhbmRsZSB3aGl0ZXNwYWNlIHByb3Blcmx5XG5cdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShcblx0XHRcdFx0bmV3IFJlZ0V4cChcblx0XHRcdFx0XHQvLyBsZWFkaW5nIHdoaXRlc3BhY2Vcblx0XHRcdFx0XHQvLyBjYXB0dXJlIHRlbXBsYXRlKHMpXG5cdFx0XHRcdFx0Ly8gUHJlLXRlbXBsYXRlIHJlZ2V4LCBzdWNoIGFzIGxlYWRpbmcgaHRtbCBjb21tZW50c1xuXHRcdFx0XHRcdC8vIGJlZ2luIHRlbXBsYXRlIGZvcm1hdFxuXHRcdFx0XHRcdC8vIFRlbXBsYXRlIHJlZ2V4XG5cdFx0XHRcdFx0Ly8gZW5kIG1haW4gdGVtcGxhdGUgbmFtZSwgb3B0aW9uYWxseSB3aXRoIGEgbnVtYmVyXG5cdFx0XHRcdFx0Ly8gUHJvYmFibHkgcmVtb3ZlIHRoZSAoPzopIHRob3VnaFxuXHRcdFx0XHRcdC8vIHRlbXBsYXRlIHBhcmFtZXRlcnNcblx0XHRcdFx0XHQvLyBlbmQgdGVtcGxhdGUgZm9ybWF0XG5cdFx0XHRcdFx0Ly8gZW5kIGNhcHR1cmVcblx0XHRcdFx0XHQvLyB0cmFpbGluZyB3aGl0ZXNwYWNlXG5cdFx0XHRcdFx0YF5cXFxccyooPzooKD86XFxcXHMqJHtcblx0XHRcdFx0XHRcdC8vIFByZS10ZW1wbGF0ZSByZWdleCwgc3VjaCBhcyBsZWFkaW5nIGh0bWwgY29tbWVudHNcblx0XHRcdFx0XHRcdHByZVJlZ2V4XG5cdFx0XHRcdFx0fXxcXFxce1xcXFx7XFxcXHMqKD86JHtcblx0XHRcdFx0XHRcdC8vIFRlbXBsYXRlIHJlZ2V4XG5cdFx0XHRcdFx0XHRyZWdleFxuXHRcdFx0XHRcdH0pXFxcXGQqXFxcXHMqKFxcXFx8KD86XFxcXHtcXFxce1tee31dKlxcXFx9XFxcXH18W157fV0pKik/XFxcXH1cXFxcfSkrKD86XFxcXHMqXFxcXG4pPylcXFxccyopP2AsXG5cdFx0XHRcdFx0ZmxhZ3Ncblx0XHRcdFx0KSxcblx0XHRcdFx0YCQxJHt0YWd9YFxuXHRcdFx0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2V0IHRoZSBtYW5pcHVsYXRlZCB3aWtpdGV4dC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Z2V0VGV4dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnRleHQ7XG5cdFx0fSxcblx0fTtcblx0LyogKioqKioqKioqKiogTW9yZWJpdHMudXNlcnNwYWNlTG9nZ2VyICoqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogSGFuZGxlcyBsb2dnaW5nIGFjdGlvbnMgdG8gYSB1c2Vyc3BhY2UgbG9nLlxuXHQgKiBVc2VkIGluIENTRCwgUFJPRCwgYW5kIFhGRC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9nUGFnZU5hbWUgLSBUaXRsZSBvZiB0aGUgc3VicGFnZSBvZiB0aGUgY3VycmVudCB1c2VyJ3MgbG9nLlxuXHQgKi9cblx0TW9yZWJpdHMudXNlcnNwYWNlTG9nZ2VyID0gZnVuY3Rpb24gKGxvZ1BhZ2VOYW1lKSB7XG5cdFx0aWYgKCFsb2dQYWdlTmFtZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdubyBsb2cgcGFnZSBuYW1lIHNwZWNpZmllZCcpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBUaGUgdGV4dCB0byBwcmVmaXggdGhlIGxvZyB3aXRoIHVwb24gY3JlYXRpb24sIGRlZmF1bHRzIHRvIGVtcHR5LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmluaXRpYWxUZXh0ID0gJyc7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGhlYWRlciBsZXZlbCB0byB1c2UgZm9yIG1vbnRocywgZGVmYXVsdHMgdG8gMyAoYD09PWApLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLmhlYWRlckxldmVsID0gMztcblx0XHR0aGlzLmNoYW5nZVRhZ3MgPSAnJztcblx0XHQvKipcblx0XHQgKiBMb2cgdGhlIGVudHJ5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxvZ1RleHQgLSBEb2Vzbid0IGluY2x1ZGUgbGVhZGluZyBgI2Agb3IgYCpgLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdW1tYXJ5VGV4dCAtIEVkaXQgc3VtbWFyeS5cblx0XHQgKiBAcmV0dXJucyB7SlF1ZXJ5LlByb21pc2V9XG5cdFx0ICovXG5cdFx0dGhpcy5sb2cgPSBmdW5jdGlvbiAobG9nVGV4dCwgc3VtbWFyeVRleHQpIHtcblx0XHRcdGNvbnN0IGRlZiA9ICQuRGVmZXJyZWQoKTtcblx0XHRcdGlmICghbG9nVGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gZGVmLnJlamVjdCgpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFnZSA9IG5ldyBNb3JlYml0cy53aWtpLnBhZ2UoXG5cdFx0XHRcdGBVc2VyOiR7bXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpfS8ke2xvZ1BhZ2VOYW1lfWAsXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5bCG6aG555uu5Yqg5YWl5Yiw55So5oi356m66Ze05pel5b+XJywgJ+Wwh+mgheebruWKoOWFpeWIsOS9v+eUqOiAheepuumWk+aXpeiqjCcpXG5cdFx0XHQpOyAvLyBtYWtlIHRoaXMgJy4uLiB0byAnICsgbG9nUGFnZU5hbWUgP1xuXHRcdFx0cGFnZS5sb2FkKChwYWdlb2JqKSA9PiB7XG5cdFx0XHRcdC8vIGFkZCBibHVyYiBpZiBsb2cgcGFnZSBkb2Vzbid0IGV4aXN0IG9yIGlzIGJsYW5rXG5cdFx0XHRcdGxldCB0ZXh0ID0gcGFnZW9iai5nZXRQYWdlVGV4dCgpIHx8IHRoaXMuaW5pdGlhbFRleHQ7XG5cdFx0XHRcdC8vIGNyZWF0ZSBtb250aGx5IGhlYWRlciBpZiBpdCBkb2Vzbid0IGV4aXN0IGFscmVhZHlcblx0XHRcdFx0Y29uc3QgZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHBhZ2VvYmouZ2V0TG9hZFRpbWUoKSk7XG5cdFx0XHRcdGlmICghZGF0ZS5tb250aEhlYWRlclJlZ2V4KCkuZXhlYyh0ZXh0KSkge1xuXHRcdFx0XHRcdHRleHQgKz0gYFxcblxcbiR7ZGF0ZS5tb250aEhlYWRlcih0aGlzLmhlYWRlckxldmVsKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBhZ2VvYmouc2V0UGFnZVRleHQoYCR7dGV4dH1cXG4ke2xvZ1RleHR9YCk7XG5cdFx0XHRcdHBhZ2VvYmouc2V0RWRpdFN1bW1hcnkoc3VtbWFyeVRleHQpO1xuXHRcdFx0XHRwYWdlb2JqLnNldENoYW5nZVRhZ3ModGhpcy5jaGFuZ2VUYWdzKTtcblx0XHRcdFx0cGFnZW9iai5zZXRDcmVhdGVPcHRpb24oJ3JlY3JlYXRlJyk7XG5cdFx0XHRcdHBhZ2VvYmouc2F2ZShkZWYucmVzb2x2ZSwgZGVmLnJlamVjdCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBkZWY7XG5cdFx0fTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5zdGF0dXMgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQ3JlYXRlIGFuZCBzaG93IHN0YXR1cyBtZXNzYWdlcyBvZiB2YXJ5aW5nIHVyZ2VuY3kuXG5cdCAqIHtAbGluayBNb3JlYml0cy5zdGF0dXMuaW5pdHxNb3JlYml0cy5zdGF0dXMuaW5pdCgpfSBtdXN0IGJlIGNhbGxlZCBiZWZvcmVcblx0ICogYW55IHN0YXR1cyBvYmplY3QgaXMgY3JlYXRlZCwgb3RoZXJ3aXNlIHRob3NlIHN0YXR1c2VzIHdvbid0IGJlIHZpc2libGUuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IGJlZm9yZSB0aGUgdGhlIGNvbG9uIGA6YC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXQgLSBUZXh0IGFmdGVyIHRoZSBjb2xvbiBgOmAuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZT1zdGF0dXNdIC0gRGV0ZXJtaW5lIHRoZSBmb250IGNvbG9yIG9mIHRoZSBzdGF0dXNcblx0ICogbGluZSwgYWxsb3dhYmxlIHZhbHVlcyBhcmU6IGBzdGF0dXNgIChibHVlKSwgYGluZm9gIChncmVlbiksIGB3YXJuYCAocmVkKSxcblx0ICogb3IgYGVycm9yYCAoYm9sZCByZWQpLlxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzID0gZnVuY3Rpb24gKHRleHQsIHN0YXQsIHR5cGUpIHtcblx0XHR0aGlzLnRleHRSYXcgPSB0ZXh0O1xuXHRcdHRoaXMudGV4dCA9IE1vcmViaXRzLmNyZWF0ZUh0bWwodGV4dCk7XG5cdFx0dGhpcy50eXBlID0gdHlwZSB8fCAnc3RhdHVzJztcblx0XHR0aGlzLmdlbmVyYXRlKCk7XG5cdFx0aWYgKHN0YXQpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXQsIHR5cGUpO1xuXHRcdH1cblx0fTtcblx0LyoqXG5cdCAqIFNwZWNpZnkgYW4gYXJlYSBmb3Igc3RhdHVzIG1lc3NhZ2UgZWxlbWVudHMgdG8gYmUgYWRkZWQgdG8uXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdCAtIFVzdWFsbHkgYSBkaXYgZWxlbWVudC5cblx0ICogQHRocm93cyBJZiBgcm9vdGAgaXMgbm90IGFuIGBIVE1MRWxlbWVudGAuXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuaW5pdCA9IChyb290KSA9PiB7XG5cdFx0aWYgKCEocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdvYmplY3Qgbm90IGFuIGluc3RhbmNlIG9mIEVsZW1lbnQnKTtcblx0XHR9XG5cdFx0d2hpbGUgKHJvb3QuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRyb290LnJlbW92ZUNoaWxkKHJvb3QuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdE1vcmViaXRzLnN0YXR1cy5yb290ID0gcm9vdDtcblx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCA9IG51bGw7XG5cdH07XG5cdE1vcmViaXRzLnN0YXR1cy5yb290ID0gbnVsbDtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gZXJyb3IuXG5cdCAqIEB0aHJvd3MgV2hlbiBgaGFuZGxlcmAgaXMgbm90IGEgZnVuY3Rpb24uXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMub25FcnJvciA9IChoYW5kbGVyKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCA9IGhhbmRsZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ01vcmViaXRzLnN0YXR1cy5vbkVycm9yOiBoYW5kbGVyIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHR9O1xuXHRNb3JlYml0cy5zdGF0dXMucHJvdG90eXBlID0ge1xuXHRcdHN0YXQ6IG51bGwsXG5cdFx0c3RhdFJhdzogbnVsbCxcblx0XHR0ZXh0OiBudWxsLFxuXHRcdHRleHRSYXc6IG51bGwsXG5cdFx0dHlwZTogJ3N0YXR1cycsXG5cdFx0dGFyZ2V0OiBudWxsLFxuXHRcdG5vZGU6IG51bGwsXG5cdFx0bGlua2VkOiBmYWxzZSxcblx0XHQvKiogQWRkIHRoZSBzdGF0dXMgZWxlbWVudCBub2RlIHRvIHRoZSBET00uICovXG5cdFx0bGluaygpIHtcblx0XHRcdGlmICghdGhpcy5saW5rZWQgJiYgTW9yZWJpdHMuc3RhdHVzLnJvb3QpIHtcblx0XHRcdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcblx0XHRcdFx0dGhpcy5saW5rZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqIFJlbW92ZSB0aGUgc3RhdHVzIGVsZW1lbnQgbm9kZSBmcm9tIHRoZSBET00uICovXG5cdFx0dW5saW5rKCkge1xuXHRcdFx0aWYgKHRoaXMubGlua2VkKSB7XG5cdFx0XHRcdE1vcmViaXRzLnN0YXR1cy5yb290LnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG5cdFx0XHRcdHRoaXMubGlua2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBVcGRhdGUgdGhlIHN0YXR1cy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBQYXJ0IG9mIHN0YXR1cyBtZXNzYWdlIGFmdGVyIGNvbG9uLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gJ3N0YXR1cycgKGJsdWUpLCAnaW5mbycgKGdyZWVuKSwgJ3dhcm4nXG5cdFx0ICogKHJlZCksIG9yICdlcnJvcicgKGJvbGQgcmVkKS5cblx0XHQgKi9cblx0XHR1cGRhdGUoc3RhdHVzLCB0eXBlKSB7XG5cdFx0XHR0aGlzLnN0YXRSYXcgPSBzdGF0dXM7XG5cdFx0XHR0aGlzLnN0YXQgPSBNb3JlYml0cy5jcmVhdGVIdG1sKHN0YXR1cyk7XG5cdFx0XHRpZiAodHlwZSkge1xuXHRcdFx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuXHRcdFx0XHRcdC8vIGhhY2sgdG8gZm9yY2UgdGhlIHBhZ2Ugbm90IHRvIHJlbG9hZCB3aGVuIGFuIGVycm9yIGlzIG91dHB1dCAtIHNlZSBhbHNvIE1vcmViaXRzLnN0YXR1cygpIGFib3ZlXG5cdFx0XHRcdFx0TW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0ID0gMTAwMDtcblx0XHRcdFx0XHQvLyBjYWxsIGVycm9yIGNhbGxiYWNrXG5cdFx0XHRcdFx0aWYgKE1vcmViaXRzLnN0YXR1cy5lcnJvckV2ZW50KSB7XG5cdFx0XHRcdFx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBhbHNvIGxvZyBlcnJvciBtZXNzYWdlcyBpbiB0aGUgYnJvd3NlciBjb25zb2xlXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgW01vcmViaXRzXSAke3RoaXMudGV4dFJhd306ICR7dGhpcy5zdGF0UmF3fWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJlbmRlcigpO1xuXHRcdH0sXG5cdFx0LyoqIFByb2R1Y2UgdGhlIGh0bWwgZm9yIGZpcnN0IHBhcnQgb2YgdGhlIHN0YXR1cyBtZXNzYWdlLiAqL1xuXHRcdGdlbmVyYXRlKCkge1xuXHRcdFx0dGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKS5hcHBlbmRDaGlsZCh0aGlzLnRleHQpO1xuXHRcdFx0dGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJzogJykpO1xuXHRcdFx0dGhpcy50YXJnZXQgPSB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcblx0XHRcdHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7IC8vIGR1bW15IG5vZGVcblx0XHR9LFxuXG5cdFx0LyoqIENvbXBsZXRlIHRoZSBodG1sLCBmb3IgdGhlIHNlY29uZCBwYXJ0IG9mIHRoZSBzdGF0dXMgbWVzc2FnZS4gKi9cblx0XHRyZW5kZXIoKSB7XG5cdFx0XHR0aGlzLm5vZGUuY2xhc3NOYW1lID0gYG1vcmViaXRzX3N0YXR1c18ke3RoaXMudHlwZX1gO1xuXHRcdFx0d2hpbGUgKHRoaXMudGFyZ2V0Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0XHR0aGlzLnRhcmdldC5yZW1vdmVDaGlsZCh0aGlzLnRhcmdldC5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHRcdHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuc3RhdCk7XG5cdFx0XHR0aGlzLmxpbmsoKTtcblx0XHR9LFxuXHRcdHN0YXR1cyhzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ3N0YXR1cycpO1xuXHRcdH0sXG5cdFx0aW5mbyhzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ2luZm8nKTtcblx0XHR9LFxuXHRcdHdhcm4oc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICd3YXJuJyk7XG5cdFx0fSxcblx0XHRlcnJvcihzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ2Vycm9yJyk7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYHN0YXR1c2AtdHlwZSAoYmx1ZSlcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5zdGF0dXMgPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzKTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYGluZm9gLXR5cGUgKGdyZWVuKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmluZm8gPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzLCAnaW5mbycpO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgd2FybmAtdHlwZSAocmVkKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLndhcm4gPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzLCAnd2FybicpO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgZXJyb3JgLXR5cGUgKGJvbGQgcmVkKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmVycm9yID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cywgJ2Vycm9yJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBGb3IgdGhlIGFjdGlvbiBjb21wbGV0ZSBtZXNzYWdlIGF0IHRoZSBlbmQsIGNyZWF0ZSBhIHN0YXR1cyBsaW5lIHdpdGhvdXRcblx0ICogYSBjb2xvbiBzZXBhcmF0b3IuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHRcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5hY3Rpb25Db21wbGV0ZWQgPSAodGV4dCkgPT4ge1xuXHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2InKSkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuXHRcdG5vZGUuY2xhc3NOYW1lID0gJ21vcmViaXRzX3N0YXR1c19pbmZvIG1vcmViaXRzX2FjdGlvbl9jb21wbGV0ZSc7XG5cdFx0aWYgKE1vcmViaXRzLnN0YXR1cy5yb290KSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5hcHBlbmRDaGlsZChub2RlKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBEaXNwbGF5IHRoZSB1c2VyJ3MgcmF0aW9uYWxlLCBjb21tZW50cywgZXRjLiBCYWNrIHRvIHRoZW0gYWZ0ZXIgYSBmYWlsdXJlLFxuXHQgKiBzbyB0aGF0IHRoZXkgbWF5IHJlLXVzZSBpdC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudHNcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2Vcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5wcmludFVzZXJUZXh0ID0gKGNvbW1lbnRzLCBtZXNzYWdlKSA9PiB7XG5cdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRwLmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZGl2LmNsYXNzTmFtZSA9ICdtb3JlYml0cy11c2VydGV4dCc7XG5cdFx0ZGl2LnN0eWxlLm1hcmdpblRvcCA9ICcwJztcblx0XHRkaXYuc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUtd3JhcCc7XG5cdFx0ZGl2LnRleHRDb250ZW50ID0gY29tbWVudHM7XG5cdFx0cC5hcHBlbmRDaGlsZChkaXYpO1xuXHRcdE1vcmViaXRzLnN0YXR1cy5yb290LmFwcGVuZENoaWxkKHApO1xuXHR9O1xuXHQvKipcblx0ICogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgYSBzaW1wbGUgbm9kZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUeXBlIG9mIEhUTUwgZWxlbWVudC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgLSBUZXh0IGNvbnRlbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3JdIC0gRm9udCBjb2xvci5cblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMuaHRtbE5vZGUgPSAodHlwZSwgY29udGVudCwgY29sb3IpID0+IHtcblx0XHRjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblx0XHRpZiAoY29sb3IpIHtcblx0XHRcdG5vZGUuc3R5bGUuY29sb3IgPSBjb2xvcjtcblx0XHR9XG5cdFx0bm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSk7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH07XG5cdC8qKlxuXHQgKiBBZGQgc2hpZnQtY2xpY2sgc3VwcG9ydCBmb3IgY2hlY2tib3hlcy4gVGhlIHdpa2liaXRzIHZlcnNpb25cblx0ICogKGB3aW5kb3cuYWRkQ2hlY2tib3hDbGlja0hhbmRsZXJzYCkgaGFzIHNvbWUgcmVzdHJpY3Rpb25zLCBhbmQgZG9lc24ndCB3b3JrXG5cdCAqIHdpdGggY2hlY2tib3hlcyBpbnNpZGUgYSBzb3J0YWJsZSB0YWJsZSwgc28gbGV0J3MgYnVpbGQgb3VyIG93bi5cblx0ICpcblx0ICogQHBhcmFtIGpRdWVyeVNlbGVjdG9yXG5cdCAqIEBwYXJhbSBqUXVlcnlDb250ZXh0XG5cdCAqL1xuXHRNb3JlYml0cy5jaGVja2JveFNoaWZ0Q2xpY2tTdXBwb3J0ID0gKGpRdWVyeVNlbGVjdG9yLCBqUXVlcnlDb250ZXh0KSA9PiB7XG5cdFx0bGV0IGxhc3RDaGVja2JveCA9IG51bGw7XG5cdFx0Y29uc3QgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGV2ZW50KSB7XG5cdFx0XHRjb25zdCB0aGlzQ2IgPSB0aGlzO1xuXHRcdFx0aWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGxhc3RDaGVja2JveCAhPT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCBjYnMgPSAkKGpRdWVyeVNlbGVjdG9yLCBqUXVlcnlDb250ZXh0KTsgLy8gY2FuJ3QgY2FjaGUgdGhlbSwgb2J2aW91c2x5LCBpZiB3ZSB3YW50IHRvIHN1cHBvcnQgcmVzb3J0aW5nXG5cdFx0XHRcdGxldCBpbmRleCA9IC0xO1xuXHRcdFx0XHRsZXQgbGFzdEluZGV4ID0gLTE7XG5cdFx0XHRcdGxldCBpO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGNic1tpXSA9PT0gdGhpc0NiKSB7XG5cdFx0XHRcdFx0XHRpbmRleCA9IGk7XG5cdFx0XHRcdFx0XHRpZiAobGFzdEluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjYnNbaV0gPT09IGxhc3RDaGVja2JveCkge1xuXHRcdFx0XHRcdFx0bGFzdEluZGV4ID0gaTtcblx0XHRcdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaW5kZXggPiAtMSAmJiBsYXN0SW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdC8vIGluc3BpcmVkIGJ5IHdpa2liaXRzXG5cdFx0XHRcdFx0Y29uc3QgZW5kU3RhdGUgPSB0aGlzQ2IuY2hlY2tlZDtcblx0XHRcdFx0XHRsZXQgc3RhcnQ7XG5cdFx0XHRcdFx0bGV0IGZpbmlzaDtcblx0XHRcdFx0XHRpZiAoaW5kZXggPCBsYXN0SW5kZXgpIHtcblx0XHRcdFx0XHRcdHN0YXJ0ID0gaW5kZXggKyAxO1xuXHRcdFx0XHRcdFx0ZmluaXNoID0gbGFzdEluZGV4O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdGFydCA9IGxhc3RJbmRleDtcblx0XHRcdFx0XHRcdGZpbmlzaCA9IGluZGV4IC0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yIChpID0gc3RhcnQ7IGkgPD0gZmluaXNoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChjYnNbaV0uY2hlY2tlZCAhPT0gZW5kU3RhdGUpIHtcblx0XHRcdFx0XHRcdFx0Y2JzW2ldLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRsYXN0Q2hlY2tib3ggPSB0aGlzQ2I7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdCQoalF1ZXJ5U2VsZWN0b3IsIGpRdWVyeUNvbnRleHQpLm9uKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMuYmF0Y2hPcGVyYXRpb24gKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogSXRlcmF0ZXMgb3ZlciBhIGdyb3VwIG9mIHBhZ2VzIChvciBhcmJpdHJhcnkgb2JqZWN0cykgYW5kIGV4ZWN1dGVzIGEgd29ya2VyIGZ1bmN0aW9uXG5cdCAqIGZvciBlYWNoLlxuXHQgKlxuXHQgKiBgc2V0UGFnZUxpc3QocGFnZUxpc3QpYDogU2V0cyB0aGUgbGlzdCBvZiBwYWdlcyB0byB3b3JrIG9uLiBJdCBzaG91bGQgYmUgYW5cblx0ICogYXJyYXkgb2YgcGFnZSBuYW1lcyBzdHJpbmdzLlxuXHQgKlxuXHQgKiBgc2V0T3B0aW9uKG9wdGlvbk5hbWUsIG9wdGlvblZhbHVlKWA6IFNldHMgYSBrbm93biBvcHRpb246XG5cdCAqIC0gYGNodW5rU2l6ZWAgKGludGVnZXIpOiBUaGUgc2l6ZSBvZiBjaHVua3MgdG8gYnJlYWsgdGhlIGFycmF5IGludG8gKGRlZmF1bHRcblx0ICogNTApLiBTZXR0aW5nIHRoaXMgdG8gYSBzbWFsbCB2YWx1ZSAoPDUpIGNhbiBjYXVzZSBwcm9ibGVtcy5cblx0ICogLSBgcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXNgIChib29sZWFuKTogS2VlcCBlYWNoIHBhZ2UncyBzdGF0dXMgZWxlbWVudFxuXHQgKiB2aXNpYmxlIHdoZW4gd29ya2VyIGlzIGNvbXBsZXRlPyBTZWUgbm90ZSBiZWxvdy5cblx0ICpcblx0ICogYHJ1bih3b3JrZXIsIHBvc3RGaW5pc2gpYDogUnVucyB0aGUgY2FsbGJhY2sgYHdvcmtlcmAgZm9yIGVhY2ggcGFnZSBpbiB0aGVcblx0ICogbGlzdC4gIFRoZSBjYWxsYmFjayBtdXN0IGNhbGwgYHdvcmtlclN1Y2Nlc3NgIHdoZW4gc3VjY2VlZGluZywgb3Jcblx0ICogYHdvcmtlckZhaWx1cmVgIHdoZW4gZmFpbGluZy4gIElmIHVzaW5nIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gb3Jcblx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0sIHRoaXMgaXMgZWFzaWx5IGRvbmUgYnkgcGFzc2luZyB0aGVzZSB0d29cblx0ICogZnVuY3Rpb25zIGFzIHBhcmFtZXRlcnMgdG8gdGhlIG1ldGhvZHMgb24gdGhvc2Ugb2JqZWN0czogZm9yIGluc3RhbmNlLFxuXHQgKiBgcGFnZS5zYXZlKGJhdGNoT3Aud29ya2VyU3VjY2VzcywgYmF0Y2hPcC53b3JrZXJGYWlsdXJlKWAuICBNYWtlIHN1cmUgdGhlXG5cdCAqIG1ldGhvZHMgYXJlIGNhbGxlZCBkaXJlY3RseSBpZiBzcGVjaWFsIHN1Y2Nlc3MvZmFpbHVyZSBjYXNlcyBhcmlzZS4gIElmIHlvdVxuXHQgKiBvbWl0IHRvIGNhbGwgdGhlc2UgbWV0aG9kcywgdGhlIGJhdGNoIG9wZXJhdGlvbiB3aWxsIHN0YWxsIGFmdGVyIHRoZSBmaXJzdFxuXHQgKiBjaHVuayEgIEFsc28gZW5zdXJlIHRoYXQgZWl0aGVyIHdvcmtlclN1Y2Nlc3Mgb3Igd29ya2VyRmFpbHVyZSBpcyBjYWxsZWQgbm9cblx0ICogbW9yZSB0aGFuIG9uY2UuICBUaGUgc2Vjb25kIGNhbGxiYWNrIGBwb3N0RmluaXNoYCBpcyBleGVjdXRlZCB3aGVuIHRoZVxuXHQgKiBlbnRpcmUgYmF0Y2ggaGFzIGJlZW4gcHJvY2Vzc2VkLlxuXHQgKlxuXHQgKiBJZiB1c2luZyBgcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXNgLCB5b3Ugc2hvdWxkIHRyeSB0byBlbnN1cmUgdGhhdCB0aGVcblx0ICogYHdvcmtlclN1Y2Nlc3NgIGNhbGxiYWNrIGhhcyBhY2Nlc3MgdG8gdGhlIHBhZ2UgdGl0bGUuICBUaGlzIGlzIG5vIHByb2JsZW0gZm9yXG5cdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9IG9iamVjdHMuICBCdXQgd2hlbiB1c2luZyB0aGUgQVBJLCBwbGVhc2Ugc2V0IHRoZVxuXHQgKiB8cGFnZU5hbWV8IHByb3BlcnR5IG9uIHRoZSB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IG9iamVjdC5cblx0ICpcblx0ICogVGhlcmUgYXJlIHNhbXBsZSBiYXRjaE9wZXJhdGlvbiBpbXBsZW1lbnRhdGlvbnMgdXNpbmcgTW9yZWJpdHMud2lraS5wYWdlIGluXG5cdCAqIHR3aW5rbGViYXRjaGRlbGV0ZS5qcywgdHdpbmtsZWJhdGNodW5kZWxldGUuanMsIGFuZCB0d2lua2xlYmF0Y2hwcm90ZWN0LmpzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbY3VycmVudEFjdGlvbl1cblx0ICovXG5cdE1vcmViaXRzLmJhdGNoT3BlcmF0aW9uID0gZnVuY3Rpb24gKGN1cnJlbnRBY3Rpb24pIHtcblx0XHRjb25zdCBjdHggPSB7XG5cdFx0XHQvLyBiYWNraW5nIGZpZWxkcyBmb3IgcHVibGljIHByb3BlcnRpZXNcblx0XHRcdHBhZ2VMaXN0OiBudWxsLFxuXHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRjaHVua1NpemU6IDUwLFxuXHRcdFx0XHRwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lczogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdFx0Ly8gaW50ZXJuYWwgY291bnRlcnMsIGV0Yy5cblx0XHRcdHN0YXR1c0VsZW1lbnQ6IG5ldyBNb3JlYml0cy5zdGF0dXMoY3VycmVudEFjdGlvbiB8fCB3aW5kb3cud2dVTFMoJ+aJp+ihjOaJuemHj+aTjeS9nCcsICfln7fooYzmibnmrKHmk43kvZwnKSksXG5cdFx0XHR3b3JrZXI6IG51bGwsXG5cdFx0XHQvLyBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIGZvciBlYWNoIGl0ZW0gaW4gcGFnZUxpc3Rcblx0XHRcdHBvc3RGaW5pc2g6IG51bGwsXG5cdFx0XHQvLyBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIHdoZW4gdGhlIHdob2xlIGJhdGNoIGhhcyBiZWVuIHByb2Nlc3NlZFxuXHRcdFx0Y291bnRTdGFydGVkOiAwLFxuXHRcdFx0Y291bnRGaW5pc2hlZDogMCxcblx0XHRcdGNvdW50RmluaXNoZWRTdWNjZXNzOiAwLFxuXHRcdFx0Y3VycmVudENodW5rSW5kZXg6IC0xLFxuXHRcdFx0cGFnZUNodW5rczogW10sXG5cdFx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHR9O1xuXHRcdC8vIHNob3VsZG4ndCBiZSBuZWVkZWQgYnkgZXh0ZXJuYWwgdXNlcnMsIGJ1dCBwcm92aWRlZCBhbnl3YXkgZm9yIG1heGltdW0gZmxleGliaWxpdHlcblx0XHR0aGlzLmdldFN0YXR1c0VsZW1lbnQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnN0YXR1c0VsZW1lbnQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBsaXN0IG9mIHBhZ2VzIHRvIHdvcmsgb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBwYWdlTGlzdCAtIEFycmF5IG9mIG9iamVjdHMgb3ZlciB3aGljaCB5b3Ugd2lzaCB0byBleGVjdXRlIHRoZSB3b3JrZXIgZnVuY3Rpb25cblx0XHQgKiBUaGlzIGlzIHVzdWFsbHkgdGhlIGxpc3Qgb2YgcGFnZSBuYW1lcyAoc3RyaW5ncykuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRQYWdlTGlzdCA9IChwYWdlTGlzdCkgPT4ge1xuXHRcdFx0Y3R4LnBhZ2VMaXN0ID0gcGFnZUxpc3Q7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXRzIGEga25vd24gb3B0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbk5hbWUgLSBOYW1lIG9mIHRoZSBvcHRpb246XG5cdFx0ICogLSBjaHVua1NpemUgKGludGVnZXIpOiBUaGUgc2l6ZSBvZiBjaHVua3MgdG8gYnJlYWsgdGhlIGFycmF5IGludG9cblx0XHQgKiAoZGVmYXVsdCA1MCkuIFNldHRpbmcgdGhpcyB0byBhIHNtYWxsIHZhbHVlICg8NSkgY2FuIGNhdXNlIHByb2JsZW1zLlxuXHRcdCAqIC0gcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMgKGJvb2xlYW4pOiBLZWVwIGVhY2ggcGFnZSdzIHN0YXR1c1xuXHRcdCAqIGVsZW1lbnQgdmlzaWJsZSB3aGVuIHdvcmtlciBpcyBjb21wbGV0ZT9cblx0XHQgKiBAcGFyYW0ge251bWJlcnxib29sZWFufSBvcHRpb25WYWx1ZSAtIFZhbHVlIHRvIHdoaWNoIHRoZSBvcHRpb24gaXNcblx0XHQgKiB0byBiZSBzZXQuIFNob3VsZCBiZSBhbiBpbnRlZ2VyIGZvciBjaHVua1NpemUgYW5kIGEgYm9vbGVhbiBmb3Jcblx0XHQgKiBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcy5cblx0XHQgKi9cblx0XHR0aGlzLnNldE9wdGlvbiA9IChvcHRpb25OYW1lLCBvcHRpb25WYWx1ZSkgPT4ge1xuXHRcdFx0Y3R4Lm9wdGlvbnNbb3B0aW9uTmFtZV0gPSBvcHRpb25WYWx1ZTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJ1bnMgdGhlIGZpcnN0IGNhbGxiYWNrIGZvciBlYWNoIHBhZ2UgaW4gdGhlIGxpc3QuXG5cdFx0ICogVGhlIGNhbGxiYWNrIG11c3QgY2FsbCB3b3JrZXJTdWNjZXNzIHdoZW4gc3VjY2VlZGluZywgb3Igd29ya2VyRmFpbHVyZSB3aGVuIGZhaWxpbmcuXG5cdFx0ICogUnVucyB0aGUgb3B0aW9uYWwgc2Vjb25kIGNhbGxiYWNrIHdoZW4gdGhlIHdob2xlIGJhdGNoIGhhcyBiZWVuIHByb2Nlc3NlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IHdvcmtlclxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtwb3N0RmluaXNoXVxuXHRcdCAqL1xuXHRcdHRoaXMucnVuID0gKHdvcmtlciwgcG9zdEZpbmlzaCkgPT4ge1xuXHRcdFx0aWYgKGN0eC5ydW5uaW5nKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5om56YeP5pON5L2c5bey5Zyo6L+Q6KGMJywgJ+aJueasoeaTjeS9nOW3suWcqOWft+ihjCcpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0Y3R4LndvcmtlciA9IHdvcmtlcjtcblx0XHRcdGN0eC5wb3N0RmluaXNoID0gcG9zdEZpbmlzaDtcblx0XHRcdGN0eC5jb3VudFN0YXJ0ZWQgPSAwO1xuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWQgPSAwO1xuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWRTdWNjZXNzID0gMDtcblx0XHRcdGN0eC5jdXJyZW50Q2h1bmtJbmRleCA9IC0xO1xuXHRcdFx0Y3R4LnBhZ2VDaHVua3MgPSBbXTtcblx0XHRcdGNvbnN0IHRvdGFsID0gY3R4LnBhZ2VMaXN0Lmxlbmd0aDtcblx0XHRcdGlmICghdG90YWwpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+ayoeacieaMh+WumumhtemdoicsICfmspLmnInmjIflrprpoIHpnaInKSk7XG5cdFx0XHRcdGN0eC5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHRcdGlmIChjdHgucG9zdEZpbmlzaCkge1xuXHRcdFx0XHRcdGN0eC5wb3N0RmluaXNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY2h1bmsgcGFnZSBsaXN0IGludG8gbW9yZSBtYW5hZ2VhYmxlIHVuaXRzXG5cdFx0XHRjdHgucGFnZUNodW5rcyA9IE1vcmViaXRzLmFycmF5LmNodW5rKGN0eC5wYWdlTGlzdCwgY3R4Lm9wdGlvbnMuY2h1bmtTaXplKTtcblx0XHRcdC8vIHN0YXJ0IHRoZSBwcm9jZXNzXG5cdFx0XHRNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQoKTtcblx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LnN0YXR1cygnMCUnKTtcblx0XHRcdGZuU3RhcnROZXdDaHVuaygpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogVG8gYmUgY2FsbGVkIGJ5IHdvcmtlciBiZWZvcmUgaXQgdGVybWluYXRlcyBzdWNjZXNzZnVsbHkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyhNb3JlYml0cy53aWtpLnBhZ2V8TW9yZWJpdHMud2lraS5hcGl8c3RyaW5nKX0gYXJnIC1cblx0XHQgKiBUaGlzIHNob3VsZCBiZSB0aGUgYE1vcmViaXRzLndpa2kucGFnZWAgb3IgYE1vcmViaXRzLndpa2kuYXBpYCBvYmplY3QgdXNlZCBieSB3b3JrZXJcblx0XHQgKiAoZm9yIHRoZSBhZGp1c3RtZW50IG9mIHN0YXR1cyBsaW5lcyBlbWl0dGVkIGJ5IHRoZW0pLlxuXHRcdCAqIElmIG5vIE1vcmViaXRzLndpa2kuKiBvYmplY3QgaXMgdXNlZCAoZS5nLiB5b3UncmUgdXNpbmcgYG13LkFwaSgpYCBvciBzb21ldGhpbmcgZWxzZSksIGFuZFxuXHRcdCAqIGBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lc2Agb3B0aW9uIGlzIG9uLCBnaXZlIHRoZSBwYWdlIG5hbWUgKHN0cmluZykgYXMgYXJndW1lbnQuXG5cdFx0ICovXG5cdFx0dGhpcy53b3JrZXJTdWNjZXNzID0gKGFyZykgPT4ge1xuXHRcdFx0aWYgKGFyZyBpbnN0YW5jZW9mIE1vcmViaXRzLndpa2kuYXBpIHx8IGFyZyBpbnN0YW5jZW9mIE1vcmViaXRzLndpa2kucGFnZSkge1xuXHRcdFx0XHQvLyB1cGRhdGUgb3IgcmVtb3ZlIHN0YXR1cyBsaW5lXG5cdFx0XHRcdGNvbnN0IHN0YXRlbGVtID0gYXJnLmdldFN0YXR1c0VsZW1lbnQoKTtcblx0XHRcdFx0aWYgKGN0eC5vcHRpb25zLnByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzKSB7XG5cdFx0XHRcdFx0aWYgKGFyZy5nZXRQYWdlTmFtZSB8fCBhcmcucGFnZU5hbWUgfHwgKGFyZy5xdWVyeSAmJiBhcmcucXVlcnkudGl0bGUpKSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBrbm93IHRoZSBwYWdlIHRpdGxlIC0gZGlzcGxheSBhIHJlbGV2YW50IG1lc3NhZ2Vcblx0XHRcdFx0XHRcdGNvbnN0IHBhZ2VOYW1lID0gYXJnLmdldFBhZ2VOYW1lID8gYXJnLmdldFBhZ2VOYW1lKCkgOiBhcmcucGFnZU5hbWUgfHwgYXJnLnF1ZXJ5LnRpdGxlO1xuXHRcdFx0XHRcdFx0c3RhdGVsZW0uaW5mbyhg5a6M5oiQ77yIW1ske3BhZ2VOYW1lfV1d77yJYCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIHdlIGRvbid0IGtub3cgdGhlIHBhZ2UgdGl0bGUgLSBqdXN0IGRpc3BsYXkgYSBnZW5lcmljIG1lc3NhZ2Vcblx0XHRcdFx0XHRcdHN0YXRlbGVtLmluZm8oJ+WujOaIkCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyByZW1vdmUgdGhlIHN0YXR1cyBsaW5lIGF1dG9tYXRpY2FsbHkgcHJvZHVjZWQgYnkgTW9yZWJpdHMud2lraS4qXG5cdFx0XHRcdFx0c3RhdGVsZW0udW5saW5rKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgJiYgY3R4Lm9wdGlvbnMucHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMpIHtcblx0XHRcdFx0bmV3IE1vcmViaXRzLnN0YXR1cyhhcmcsIGDlrozmiJDvvIhbWyR7YXJnfV1d77yJYCk7XG5cdFx0XHR9XG5cdFx0XHRjdHguY291bnRGaW5pc2hlZFN1Y2Nlc3MrKztcblx0XHRcdGZuRG9uZU9uZSgpO1xuXHRcdH07XG5cdFx0dGhpcy53b3JrZXJGYWlsdXJlID0gKCkgPT4ge1xuXHRcdFx0Zm5Eb25lT25lKCk7XG5cdFx0fTtcblx0XHQvLyBwcml2YXRlIGZ1bmN0aW9uc1xuXHRcdGNvbnN0IHRoaXNQcm94eSA9IHRoaXM7XG5cdFx0Y29uc3QgZm5TdGFydE5ld0NodW5rID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2h1bmsgPSBjdHgucGFnZUNodW5rc1srK2N0eC5jdXJyZW50Q2h1bmtJbmRleF07XG5cdFx0XHRpZiAoIWNodW5rKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gZG9uZSEgeWF5XG5cdFx0XHR9XG5cdFx0XHQvLyBzdGFydCB3b3JrZXJzIGZvciB0aGUgY3VycmVudCBjaHVua1xuXHRcdFx0Y3R4LmNvdW50U3RhcnRlZCArPSBjaHVuay5sZW5ndGg7XG5cdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgY2h1bmspIHtcblx0XHRcdFx0Y3R4LndvcmtlcihwYWdlLCB0aGlzUHJveHkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgZm5Eb25lT25lID0gKCkgPT4ge1xuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWQrKztcblx0XHRcdC8vIHVwZGF0ZSBvdmVyYWxsIHN0YXR1cyBsaW5lXG5cdFx0XHRjb25zdCB0b3RhbCA9IGN0eC5wYWdlTGlzdC5sZW5ndGg7XG5cdFx0XHRpZiAoY3R4LmNvdW50RmluaXNoZWQgPCB0b3RhbCkge1xuXHRcdFx0XHRjb25zdCBwcm9ncmVzcyA9IE1hdGgucm91bmQoKDEwMCAqIGN0eC5jb3VudEZpbmlzaGVkKSAvIHRvdGFsKTtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuc3RhdHVzKGAke3Byb2dyZXNzfSVgKTtcblx0XHRcdFx0Ly8gc3RhcnQgYSBuZXcgY2h1bmsgaWYgd2UncmUgY2xvc2UgZW5vdWdoIHRvIHRoZSBlbmQgb2YgdGhlIHByZXZpb3VzIGNodW5rLCBhbmRcblx0XHRcdFx0Ly8gd2UgaGF2ZW4ndCBhbHJlYWR5IHN0YXJ0ZWQgdGhlIG5leHQgb25lXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRjdHguY291bnRGaW5pc2hlZCA+PSBjdHguY291bnRTdGFydGVkIC0gTWF0aC5tYXgoY3R4Lm9wdGlvbnMuY2h1bmtTaXplIC8gMTAsIDIpICYmXG5cdFx0XHRcdFx0TWF0aC5mbG9vcihjdHguY291bnRGaW5pc2hlZCAvIGN0eC5vcHRpb25zLmNodW5rU2l6ZSkgPiBjdHguY3VycmVudENodW5rSW5kZXhcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Zm5TdGFydE5ld0NodW5rKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoY3R4LmNvdW50RmluaXNoZWQgPT09IHRvdGFsKSB7XG5cdFx0XHRcdGNvbnN0IHN0YXR1c1N0cmluZyA9IGDlrozmiJDvvIgke2N0eC5jb3VudEZpbmlzaGVkU3VjY2Vzc30vJHtjdHguY291bnRGaW5pc2hlZH3mk43kvZzmiJDlip/lrozmiJDvvIlgO1xuXHRcdFx0XHRpZiAoY3R4LmNvdW50RmluaXNoZWRTdWNjZXNzIDwgY3R4LmNvdW50RmluaXNoZWQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC53YXJuKHN0YXR1c1N0cmluZyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyhzdGF0dXNTdHJpbmcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjdHgucG9zdEZpbmlzaCkge1xuXHRcdFx0XHRcdGN0eC5wb3N0RmluaXNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0TW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50KCk7XG5cdFx0XHRcdGN0eC5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBjdHguY291bnRGaW5pc2hlZCA+IHRvdGFsXG5cdFx0XHRcdC8vIGp1c3QgZm9yIGdpZ2dsZXMhICh3ZWxsLCBzZXJpb3VzIGRlYnVnZ2luZywgYWN0dWFsbHkpXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50Lndhcm4oXG5cdFx0XHRcdFx0YCR7d2luZG93LndnVUxTKCflrozmiJDvvIjlpJrmiafooYzkuoYnLCAn5a6M5oiQ77yI5aSa5Z+36KGM5LqGJykgKyAoY3R4LmNvdW50RmluaXNoZWQgLSB0b3RhbCl95qyh77yJYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQoKTtcblx0XHRcdFx0Y3R4LnJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHQvKipcblx0ICogQSBzaW1wbGUgZHJhZ2dhYmxlIHdpbmRvdywgbm93IGEgd3JhcHBlciBmb3IgalF1ZXJ5IFVJJ3MgZGlhbG9nIGZlYXR1cmUuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHJlcXVpcmVzIGpxdWVyeS51aS5kaWFsb2dcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBUaGUgbWF4aW11bSBhbGxvd2FibGUgaGVpZ2h0IGZvciB0aGUgY29udGVudCBhcmVhLlxuXHQgKi9cblx0TW9yZWJpdHMuc2ltcGxlV2luZG93ID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcblx0XHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcblx0XHRjb250ZW50LmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctY29udGVudCc7XG5cdFx0Y29udGVudC5pZCA9IGBtb3JlYml0cy1kaWFsb2ctY29udGVudC0ke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlMTUpfWA7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZyh7XG5cdFx0XHRhdXRvT3BlbjogZmFsc2UsXG5cdFx0XHRidXR0b25zOiB7XG5cdFx0XHRcdCdQbGFjZWhvbGRlciBidXR0b24nOiAoKSA9PiB7fSxcblx0XHRcdH0sXG5cdFx0XHRkaWFsb2dDbGFzczogJ21vcmViaXRzLWRpYWxvZycsXG5cdFx0XHR3aWR0aDogTWF0aC5taW4oTnVtYmVyLnBhcnNlSW50KHdpbmRvdy5pbm5lcldpZHRoLCAxMCksIE51bWJlci5wYXJzZUludCh3aWR0aCB8fCA4MDAsIDEwKSksXG5cdFx0XHQvLyBnaXZlIGpRdWVyeSB0aGUgZ2l2ZW4gaGVpZ2h0IHZhbHVlICh3aGljaCByZXByZXNlbnRzIHRoZSBhbnRpY2lwYXRlZCBoZWlnaHQgb2YgdGhlIGRpYWxvZykgaGVyZSwgc29cblx0XHRcdC8vIGl0IGNhbiBwb3NpdGlvbiB0aGUgZGlhbG9nIGFwcHJvcHJpYXRlbHlcblx0XHRcdC8vIHRoZSAyMCBwaXhlbHMgcmVwcmVzZW50cyBhZGp1c3RtZW50IGZvciB0aGUgZXh0cmEgaGVpZ2h0IG9mIHRoZSBqUXVlcnkgZGlhbG9nIFwiY2hyb21lXCIsIGNvbXBhcmVkXG5cdFx0XHQvLyB0byB0aGF0IG9mIHRoZSBvbGQgU2ltcGxlV2luZG93XG5cdFx0XHRoZWlnaHQ6IGhlaWdodCArIDIwLFxuXHRcdFx0Y2xvc2U6IChldmVudCkgPT4ge1xuXHRcdFx0XHQvLyBkaWFsb2dzIGFuZCB0aGVpciBjb250ZW50IGNhbiBiZSBkZXN0cm95ZWQgb25jZSBjbG9zZWRcblx0XHRcdFx0JChldmVudC50YXJnZXQpLmRpYWxvZygnZGVzdHJveScpLnJlbW92ZSgpO1xuXHRcdFx0fSxcblx0XHRcdHJlc2l6ZVN0YXJ0KCkge1xuXHRcdFx0XHRbdGhpcy5zY3JvbGxib3hdID0gJCh0aGlzKS5maW5kKCcubW9yZWJpdHMtc2Nyb2xsYm94Jyk7XG5cdFx0XHRcdGlmICh0aGlzLnNjcm9sbGJveCkge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsYm94LnN0eWxlLm1heEhlaWdodCA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHJlc2l6ZVN0b3AoKSB7XG5cdFx0XHRcdHRoaXMuc2Nyb2xsYm94ID0gbnVsbDtcblx0XHRcdH0sXG5cdFx0XHRyZXNpemUoKSB7XG5cdFx0XHRcdHRoaXMuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XG5cdFx0XHRcdGlmICh0aGlzLnNjcm9sbGJveCkge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsYm94LnN0eWxlLndpZHRoID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0Y29uc3QgJHdpZGdldCA9ICQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpO1xuXHRcdC8vIGRlbGV0ZSB0aGUgcGxhY2Vob2xkZXIgYnV0dG9uIChpdCdzIG9ubHkgdGhlcmUgc28gdGhlIGJ1dHRvbnBhbmUgZ2V0cyBjcmVhdGVkKVxuXHRcdCR3aWRnZXQuZmluZCgnYnV0dG9uJykuZWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0dmFsdWUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh2YWx1ZSk7XG5cdFx0fSk7XG5cdFx0Ly8gYWRkIGNvbnRhaW5lciBmb3IgdGhlIGJ1dHRvbnMgd2UgYWRkLCBhbmQgdGhlIGZvb3RlciBsaW5rcyAoaWYgYW55KVxuXHRcdGNvbnN0IGJ1dHRvbnNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0YnV0dG9uc3Bhbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnO1xuXHRcdGNvbnN0IGxpbmtzc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRsaW5rc3NwYW4uY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1mb290ZXJsaW5rcyc7XG5cdFx0JHdpZGdldC5maW5kKCcudWktZGlhbG9nLWJ1dHRvbnBhbmUnKS5hcHBlbmQoYnV0dG9uc3BhbiwgbGlua3NzcGFuKTtcblx0XHQvLyByZXNpemUgdGhlIHNjcm9sbGJveCB3aXRoIHRoZSBkaWFsb2csIGlmIG9uZSBpcyBwcmVzZW50XG5cdFx0JHdpZGdldC5yZXNpemFibGUoJ29wdGlvbicsICdhbHNvUmVzaXplJywgYCMke3RoaXMuY29udGVudC5pZH0gLm1vcmViaXRzLXNjcm9sbGJveCwgIyR7dGhpcy5jb250ZW50LmlkfWApO1xuXHR9O1xuXHRNb3JlYml0cy5zaW1wbGVXaW5kb3cucHJvdG90eXBlID0ge1xuXHRcdGJ1dHRvbnM6IFtdLFxuXHRcdGhlaWdodDogNjAwLFxuXHRcdGhhc0Zvb3RlckxpbmtzOiBmYWxzZSxcblx0XHRzY3JpcHROYW1lOiBudWxsLFxuXHRcdC8qKlxuXHRcdCAqIEZvY3VzZXMgdGhlIGRpYWxvZy4gVGhpcyBtaWdodCB3b3JrLCBvciBvbiB0aGUgY29udHJhcnksIGl0IG1pZ2h0IG5vdC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0Zm9jdXMoKSB7XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdtb3ZlVG9Ub3AnKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ2xvc2VzIHRoZSBkaWFsb2cuIElmIHRoaXMgaXMgc2V0IGFzIGFuIGV2ZW50IGhhbmRsZXIsIGl0IHdpbGwgc3RvcCB0aGUgZXZlbnRcblx0XHQgKiBmcm9tIGRvaW5nIGFueXRoaW5nIG1vcmUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2V2ZW50fSBbZXZlbnRdXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRjbG9zZShldmVudCkge1xuXHRcdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTaG93cyB0aGUgZGlhbG9nLiBDYWxsaW5nIGRpc3BsYXkoKSBvbiBhIGRpYWxvZyB0aGF0IGhhcyBwcmV2aW91c2x5IGJlZW4gY2xvc2VkXG5cdFx0ICogbWlnaHQgd29yaywgYnV0IGl0IGlzIG5vdCBndWFyYW50ZWVkLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRkaXNwbGF5KCkge1xuXHRcdFx0aWYgKHRoaXMuc2NyaXB0TmFtZSkge1xuXHRcdFx0XHRjb25zdCAkd2lkZ2V0ID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0Jyk7XG5cdFx0XHRcdCR3aWRnZXQuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1zY3JpcHRuYW1lJykucmVtb3ZlKCk7XG5cdFx0XHRcdGNvbnN0IHNjcmlwdG5hbWVzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRzY3JpcHRuYW1lc3Bhbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLXNjcmlwdG5hbWUnO1xuXHRcdFx0XHRzY3JpcHRuYW1lc3Bhbi50ZXh0Q29udGVudCA9IGAke3RoaXMuc2NyaXB0TmFtZX0gXFx1MDBCNyBgOyAvLyBVKzAwQjcgTUlERExFIERPVCA9ICZtaWRkb3Q7XG5cdFx0XHRcdCR3aWRnZXQuZmluZCgnLnVpLWRpYWxvZy10aXRsZScpLnByZXBlbmQoc2NyaXB0bmFtZXNwYW4pO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZGlhbG9nID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3BlbicpO1xuXHRcdFx0aWYgKHdpbmRvdy5zZXR1cFRvb2x0aXBzICYmIHdpbmRvdy5wZyAmJiB3aW5kb3cucGcucmUgJiYgd2luZG93LnBnLnJlLmRpZmYpIHtcblx0XHRcdFx0Ly8gdGllIGluIHdpdGggTkFWUE9QXG5cdFx0XHRcdGRpYWxvZy5wYXJlbnQoKVswXS5yYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSA9IGZhbHNlO1xuXHRcdFx0XHR3aW5kb3cuc2V0dXBUb29sdGlwcyhkaWFsb2cucGFyZW50KClbMF0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRIZWlnaHQodGhpcy5oZWlnaHQpOyAvLyBpbml0IGhlaWdodCBhbGdvcml0aG1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgZGlhbG9nIHRpdGxlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRUaXRsZSh0aXRsZSkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ3RpdGxlJywgdGl0bGUpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBzY3JpcHQgbmFtZSwgYXBwZWFyaW5nIGFzIGEgcHJlZml4IHRvIHRoZSB0aXRsZSB0byBoZWxwIHVzZXJzIGRldGVybWluZSB3aGljaFxuXHRcdCAqIHVzZXIgc2NyaXB0IGlzIHByb2R1Y2luZyB3aGljaCBkaWFsb2cuIEZvciBpbnN0YW5jZSwgVHdpbmtsZSBtb2R1bGVzIHNldCB0aGlzIHRvIFwiVHdpbmtsZVwiLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldFNjcmlwdE5hbWUobmFtZSkge1xuXHRcdFx0dGhpcy5zY3JpcHROYW1lID0gbmFtZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgZGlhbG9nIHdpZHRoLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRXaWR0aCh3aWR0aCkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ3dpZHRoJywgd2lkdGgpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBkaWFsb2cncyBtYXhpbXVtIGhlaWdodC4gVGhlIGRpYWxvZyB3aWxsIGF1dG8tc2l6ZSB0byBmaXQgaXRzIGNvbnRlbnRzLFxuXHRcdCAqIGJ1dCB0aGUgY29udGVudCBhcmVhIHdpbGwgZ3JvdyBubyBsYXJnZXIgdGhhbiB0aGUgaGVpZ2h0IGdpdmVuIGhlcmUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRIZWlnaHQoaGVpZ2h0KSB7XG5cdFx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHRcdC8vIGZyb20gZGlzcGxheSB0aW1lIG9ud2FyZHMsIGxldCB0aGUgYnJvd3NlciBkZXRlcm1pbmUgdGhlIG9wdGltdW0gaGVpZ2h0LFxuXHRcdFx0Ly8gYW5kIGluc3RlYWQgbGltaXQgdGhlIGhlaWdodCBhdCB0aGUgZ2l2ZW4gdmFsdWVcblx0XHRcdC8vIG5vdGUgdGhhdCB0aGUgZ2l2ZW4gaGVpZ2h0IHdpbGwgZXhjbHVkZSB0aGUgYXBwcm94LiAyMHB4IHRoYXQgdGhlIGpRdWVyeSBVSVxuXHRcdFx0Ly8gY2hyb21lIGhhcyBpbiBoZWlnaHQgaW4gYWRkaXRpb24gdG8gdGhlIGhlaWdodCBvZiBhbiBlcXVpdmFsZW50IFwiY2xhc3NpY1wiXG5cdFx0XHQvLyBNb3JlYml0cy5zaW1wbGVXaW5kb3dcblx0XHRcdGlmIChcblx0XHRcdFx0TnVtYmVyLnBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0JylbMF0sIG51bGwpLmhlaWdodCwgMTApID5cblx0XHRcdFx0d2luZG93LmlubmVySGVpZ2h0XG5cdFx0XHQpIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdFx0LmRpYWxvZygnb3B0aW9uJywgJ2hlaWdodCcsIHdpbmRvdy5pbm5lckhlaWdodCAtIDIpXG5cdFx0XHRcdFx0LmRpYWxvZygnb3B0aW9uJywgJ3Bvc2l0aW9uJywgJ3RvcCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ2hlaWdodCcsICdhdXRvJyk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWNvbnRlbnQnKVswXS5zdHlsZS5tYXhIZWlnaHQgPSBgJHtOdW1iZXIucGFyc2VJbnQoXG5cdFx0XHRcdHRoaXMuaGVpZ2h0IC0gMzAsXG5cdFx0XHRcdDEwXG5cdFx0XHQpfXB4YDtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgY29udGVudCBvZiB0aGUgZGlhbG9nIHRvIHRoZSBnaXZlbiBlbGVtZW50IG5vZGUsIHVzdWFsbHkgZnJvbSByZW5kZXJpbmdcblx0XHQgKiBhIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19LlxuXHRcdCAqIFJlLWVudW1lcmF0ZXMgdGhlIGZvb3RlciBidXR0b25zLCBidXQgbGVhdmVzIHRoZSBmb290ZXIgbGlua3MgYXMgdGhleSBhcmUuXG5cdFx0ICogQmUgc3VyZSB0byBjYWxsIHRoaXMgYXQgbGVhc3Qgb25jZSBiZWZvcmUgdGhlIGRpYWxvZyBpcyBkaXNwbGF5ZWQuLi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldENvbnRlbnQoY29udGVudCkge1xuXHRcdFx0dGhpcy5wdXJnZUNvbnRlbnQoKTtcblx0XHRcdHRoaXMuYWRkQ29udGVudChjb250ZW50KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQWRkcyB0aGUgZ2l2ZW4gZWxlbWVudCBub2RlIHRvIHRoZSBkaWFsb2cgY29udGVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGFkZENvbnRlbnQoY29udGVudCkge1xuXHRcdFx0dGhpcy5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXHRcdFx0Ly8gbG9vayBmb3Igc3VibWl0IGJ1dHRvbnMgaW4gdGhlIGNvbnRlbnQsIGhpZGUgdGhlbSwgYW5kIGFkZCBhIHByb3h5IGJ1dHRvbiB0byB0aGUgYnV0dG9uIHBhbmVcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpXG5cdFx0XHRcdC5lYWNoKChrZXksIHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRcdFx0XHRpZiAodmFsdWUuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG5cdFx0XHRcdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZS50ZXh0Q29udGVudCkge1xuXHRcdFx0XHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gdmFsdWUudGV4dENvbnRlbnQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9ICfmj5DkuqQnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRidXR0b24uY2xhc3NOYW1lID0gdmFsdWUuY2xhc3NOYW1lIHx8ICdzdWJtaXRCdXR0b25Qcm94eSc7XG5cdFx0XHRcdFx0Ly8gaGVyZSBpcyBhbiBpbnN0YW5jZSBvZiBjaGVhcCBjb2RpbmcsIHByb2JhYmx5IGEgbWVtb3J5LXVzYWdlIGhpdCBpbiB1c2luZyBhIGNsb3N1cmUgaGVyZVxuXHRcdFx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdFx0dmFsdWUuY2xpY2soKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0c2VsZi5idXR0b25zW3NlbGYuYnV0dG9ucy5sZW5ndGhdID0gYnV0dG9uO1xuXHRcdFx0XHR9KTtcblx0XHRcdC8vIHJlbW92ZSBhbGwgYnV0dG9ucyBmcm9tIHRoZSBidXR0b24gcGFuZSBhbmQgcmUtYWRkIHRoZW1cblx0XHRcdGlmICh0aGlzLmJ1dHRvbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0XHQuZGlhbG9nKCd3aWRnZXQnKVxuXHRcdFx0XHRcdC5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnKVxuXHRcdFx0XHRcdC5lbXB0eSgpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmJ1dHRvbnMpWzBdXG5cdFx0XHRcdFx0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1lbXB0eScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdFx0LmRpYWxvZygnd2lkZ2V0Jylcblx0XHRcdFx0XHQuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zJylbMF1cblx0XHRcdFx0XHQuc2V0QXR0cmlidXRlKCdkYXRhLWVtcHR5JywgJ2RhdGEtZW1wdHknKTsgLy8gdXNlZCBieSBDU1Ncblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBSZW1vdmVzIGFsbCBjb250ZW50cyBmcm9tIHRoZSBkaWFsb2csIGJhcnJpbmcgYW55IGZvb3RlciBsaW5rcy5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0cHVyZ2VDb250ZW50KCkge1xuXHRcdFx0dGhpcy5idXR0b25zID0gW107XG5cdFx0XHQvLyBkZWxldGUgYWxsIGJ1dHRvbnMgaW4gdGhlIGJ1dHRvbnBhbmVcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucycpLmVtcHR5KCk7XG5cdFx0XHR3aGlsZSAodGhpcy5jb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0XHR0aGlzLmNvbnRlbnQucmVtb3ZlQ2hpbGQodGhpcy5jb250ZW50LmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGRzIGEgbGluayBpbiB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciBvZiB0aGUgZGlhbG9nLlxuXHRcdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBoZWxwIG9yIHBvbGljeSBsaW5rcy5cblx0XHQgKiBGb3IgZXhhbXBsZSwgVHdpbmtsZSdzIENTRCBtb2R1bGUgYWRkcyBhIGxpbmsgdG8gdGhlIENTRCBwb2xpY3kgcGFnZSxcblx0XHQgKiBhcyB3ZWxsIGFzIGEgbGluayB0byBUd2lua2xlJ3MgZG9jdW1lbnRhdGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gRGlzcGxheSB0ZXh0LlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpUGFnZSAtIExpbmsgdGFyZ2V0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXA9ZmFsc2VdIC0gU2V0IHRydWUgdG8gcHJlcGVuZCByYXRoZXIgdGhhbiBhcHBlbmQuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRhZGRGb290ZXJMaW5rKHRleHQsIHdpa2lQYWdlLCBwcmVwKSB7XG5cdFx0XHRjb25zdCAkZm9vdGVybGlua3MgPSAkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWZvb3RlcmxpbmtzJyk7XG5cdFx0XHRpZiAodGhpcy5oYXNGb290ZXJMaW5rcykge1xuXHRcdFx0XHRjb25zdCBidWxsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGJ1bGxldC50ZXh0Q29udGVudCA9ICcgXFx1MjAyMiAnOyAvLyBVKzIwMjIgQlVMTEVUXG5cdFx0XHRcdGlmIChwcmVwKSB7XG5cdFx0XHRcdFx0JGZvb3RlcmxpbmtzLnByZXBlbmQoYnVsbGV0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZm9vdGVybGlua3MuYXBwZW5kKGJ1bGxldCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG13LnV0aWwuZ2V0VXJsKHdpa2lQYWdlKSk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB3aWtpUGFnZSk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyk7XG5cdFx0XHRsaW5rLnRleHRDb250ZW50ID0gdGV4dDtcblx0XHRcdGlmIChwcmVwKSB7XG5cdFx0XHRcdCRmb290ZXJsaW5rcy5wcmVwZW5kKGxpbmspO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JGZvb3RlcmxpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuaGFzRm9vdGVyTGlua3MgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHdoZXRoZXIgdGhlIHdpbmRvdyBzaG91bGQgYmUgbW9kYWwgb3Igbm90LiBNb2RhbCBkaWFsb2dzIGNyZWF0ZVxuXHRcdCAqIGFuIG92ZXJsYXkgYmVsb3cgdGhlIGRpYWxvZyBidXQgYWJvdmUgb3RoZXIgcGFnZSBlbGVtZW50cy4gVGhpc1xuXHRcdCAqIG11c3QgYmUgdXNlZCAoaWYgbmVjZXNzYXJ5KSBiZWZvcmUgY2FsbGluZyBkaXNwbGF5KCkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFttb2RhbD1mYWxzZV0gLSBJZiBzZXQgdG8gdHJ1ZSwgb3RoZXIgaXRlbXMgb24gdGhlXG5cdFx0ICogcGFnZSB3aWxsIGJlIGRpc2FibGVkLCBpLmUuLCBjYW5ub3QgYmUgaW50ZXJhY3RlZCB3aXRoLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0TW9kYWxpdHkobW9kYWwpIHtcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wdGlvbicsICdtb2RhbCcsIG1vZGFsKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBFbmFibGVzIG9yIGRpc2FibGVzIGFsbCBmb290ZXIgYnV0dG9ucyBvbiBhbGwge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd31zIGluIHRoZSBjdXJyZW50IHBhZ2UuXG5cdCAqIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIGBmYWxzZWAgd2hlbiB0aGUgYnV0dG9uKHMpIGJlY29tZSBpcnJlbGV2YW50IChlLmcuIGp1c3QgYmVmb3JlXG5cdCAqIHtAbGluayBNb3JlYml0cy5zdGF0dXMuaW5pdH0gaXMgY2FsbGVkKS5cblx0ICogVGhpcyBpcyBub3QgYW4gaW5zdGFuY2UgbWV0aG9kIHNvIHRoYXQgY29uc3VtZXJzIGRvbid0IGhhdmUgdG8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGVcblx0ICogb3JpZ2luYWwgYE1vcmViaXRzLnNpbXBsZVdpbmRvd2Agb2JqZWN0IHNpdHRpbmcgYXJvdW5kIHNvbWV3aGVyZS4gQW55d2F5LCBtb3N0IG9mIHRoZSB0aW1lXG5cdCAqIHRoZXJlIHdpbGwgb25seSBiZSBvbmUgYE1vcmViaXRzLnNpbXBsZVdpbmRvd2Agb3Blbiwgc28gdGhpcyBzaG91bGRuJ3QgbWF0dGVyLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc2ltcGxlV2luZG93XG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZFxuXHQgKi9cblx0TW9yZWJpdHMuc2ltcGxlV2luZG93LnNldEJ1dHRvbnNFbmFibGVkID0gKGVuYWJsZWQpID0+IHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHQkYm9keS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMgYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCAhZW5hYmxlZCk7XG5cdH07XG59KShqUXVlcnkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0EsSUFBQUEsb0JBQTRCQyxRQUFBLGlCQUFBO0FBckM1QjtDQXVDQyxTQUFTQyxTQUFTQyxHQUFHO0FBR3JCLFFBQU1DLFdBQVcsQ0FBQztBQUNsQkMsU0FBT0QsV0FBV0E7QUFLbEJBLFdBQVNFLE9BQU87Ozs7O0lBS2ZDLG9CQUFvQixDQUFDLGFBQWEsTUFBTTs7Ozs7Ozs7OztJQVV4Q0MsMEJBQTJCQyxTQUFRO0FBQ2xDLFlBQU1DLFNBQVM7QUFDZixZQUFNQyxTQUFTO0FBQ2YsWUFBTUMsUUFBUUYsT0FBT0csS0FBS0osR0FBRyxLQUFLRSxPQUFPRSxLQUFLSixHQUFHO0FBQ2pELFlBQU1LLFdBQVdILE9BQU9FLEtBQUtKLEdBQUc7QUFDaEMsVUFBSSxDQUFDRyxPQUFPO0FBQ1gsZUFBTztNQUNSO0FBQ0EsWUFBTUcsUUFBUVgsU0FBU1ksS0FBS0MsV0FBV0MsT0FBT0MsUUFBUVAsTUFBTSxDQUFDLENBQUM7QUFDOUQsVUFBSUcsVUFBVSxJQUFJO0FBQ2pCLGVBQU87TUFDUjtBQUVBLGFBQU9ELFdBQ0osQ0FBQ0YsTUFBTSxDQUFDLEdBQUdBLE1BQU0sQ0FBQyxJQUFJLEdBQUdBLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLENBQUMsSUFBSSxHQUFHQSxNQUFNLENBQUMsQ0FBQyxJQUN6RCxDQUFDQSxNQUFNLENBQUMsR0FBR0EsTUFBTSxDQUFDLElBQUksR0FBR0EsTUFBTSxDQUFDLEdBQUdBLE1BQU0sQ0FB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T0FBTztBQUNObU8scUJBQWF0MkIsT0FBT21vQixJQUFJO01BQ3pCO0FBQ0EsV0FBSzZNLGlCQUFpQjtBQUN0QixhQUFPO0lBQ1I7Ozs7Ozs7Ozs7SUFVQXdCLFlBQVlDLE9BQU87QUFDbEJqOUIsUUFBRSxLQUFLMkUsT0FBTyxFQUFFNDFCLE9BQU8sVUFBVSxTQUFTMEMsS0FBSztBQUMvQyxhQUFPO0lBQ1I7RUFDRDtBQVlBaDlCLFdBQVNtNkIsYUFBYThDLG9CQUFxQkMsYUFBWTtBQUN0RCxVQUFNcjdCLFFBQVE5QixFQUFFLE1BQU07QUFDdEI4QixVQUFNRyxLQUFLLGlDQUFpQyxFQUFFdWUsS0FBSyxZQUFZLENBQUMyYyxPQUFPO0VBQ3hFO0FBQ0QsR0FBR0MsTUFBTTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJtb3JlYml0cyIsICIkIiwgIk1vcmViaXRzIiwgIndpbmRvdyIsICJsMTBuIiwgInJlZGlyZWN0VGFnQWxpYXNlcyIsICJzaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQiLCAic3RyIiwgInJneFVUQyIsICJyZ3hDU1QiLCAibWF0Y2giLCAiZXhlYyIsICJtYXRjaENTVCIsICJtb250aCIsICJkYXRlIiwgImxvY2FsZURhdGEiLCAibW9udGhzIiwgImluZGV4T2YiLCAidXNlcklzSW5Hcm91cCIsICJncm91cCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImluY2x1ZGVzIiwgInVzZXJJc1N5c29wIiwgInNhbml0aXplSVB2NiIsICJhZGRyZXNzIiwgImNvbnNvbGUiLCAid2FybiIsICJpcCIsICJpc1BhZ2VSZWRpcmVjdCIsICIkYm9keSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImZpbmQiLCAibGVuZ3RoIiwgInBhZ2VOYW1lTm9ybSIsICJyZXBsYWNlIiwgInBhZ2VOYW1lUmVnZXgiLCAicGFnZU5hbWUiLCAiZmlyc3RDaGFyIiwgInJlbWFpbmRlciIsICJzdHJpbmciLCAiZXNjYXBlUmVnRXhwIiwgInNsaWNlIiwgIlRpdGxlIiwgInBocENoYXJUb1VwcGVyIiwgInRvTG93ZXJDYXNlIiwgImNvbmNhdCIsICJjcmVhdGVIdG1sIiwgImlucHV0IiwgImZyYWdtZW50IiwgImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCAiZ2VuZXJhdGVBcnJheSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJOb2RlIiwgImFwcGVuZENoaWxkIiwgIl9pdGVyYXRvcjIiLCAicGFyc2VIVE1MIiwgInJlbmRlcldpa2lsaW5rcyIsICJfc3RlcDIiLCAibm9kZSIsICJlcnIiLCAiZSIsICJmIiwgInRleHQiLCAidWIiLCAidW5iaW5kZXIiLCAidW5iaW5kIiwgImNvbnRlbnQiLCAiXyIsICJ0YXJnZXQiLCAidGV4dF8iLCAidXRpbCIsICJnZXRVcmwiLCAicmViaW5kIiwgIm5hbWVzcGFjZVJlZ2V4IiwgIm5hbWVzcGFjZXMiLCAiYWxpYXNlcyIsICJyZWdleCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibmFtZSIsICJudW1iZXIiLCAibWFwIiwgImNoYXIiLCAiam9pbiIsICJxdWlja0Zvcm0iLCAiZXZlbnQiLCAiZXZlbnRUeXBlIiwgInJvb3QiLCAidHlwZSIsICJwcm90b3R5cGUiLCAicmVuZGVyIiwgInJldCIsICJuYW1lcyIsICJhcHBlbmQiLCAiZGF0YSIsICJjaGlsZHMiLCAiaWQiLCAiY2hpbGQiLCAiaW50ZXJuYWxTdWJncm91cElkIiwgImN1cnJlbnROb2RlIiwgImNvbXB1dGUiLCAiaSIsICJpbklkIiwgImNoaWxkQ29udGFpbmVyIiwgImxhYmVsIiwgImFkbWlub25seSIsICJjdXJyZW50IiwgInN1Ym5vZGUiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAic2V0QXR0cmlidXRlIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAic2VsZWN0IiwgIm11bHRpcGxlIiwgInNpemUiLCAiZGlzYWJsZWQiLCAibGlzdCIsICJ2YWx1ZXMiLCAic2VsZWN0ZWQiLCAiaGlkZGVuIiwgImNyZWF0ZVRleHROb2RlIiwgImN1cklkIiwgImN1ckRpdiIsICJ0b29sdGlwIiwgImdlbmVyYXRlVG9vbHRpcCIsICJjaGVja2VkIiwgInN0eWxlIiwgInN1Ymdyb3VwIiwgInRtcGdyb3VwIiwgInN1Ymdyb3VwUmF3IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImVsIiwgIm5ld0VsIiwgInNob3duIiwgInBhcmVudE5vZGUiLCAiZm9ybSIsICJyZW1vdmVDaGlsZCIsICJzaGlmdENsaWNrU3VwcG9ydCIsICJjaGVja2JveFNoaWZ0Q2xpY2tTdXBwb3J0IiwgImdldEVsZW1lbnRzIiwgInBsYWNlaG9sZGVyIiwgIl9pMiIsICJfYXJyIiwgImF0dCIsICJfaTMiLCAiX2FycjIiLCAiX2k0IiwgIl9hcnIzIiwgIm1pbiIsICJtYXgiLCAiTnVtYmVyIiwgIlBPU0lUSVZFX0lORklOSVRZIiwgImxpc3ROb2RlIiwgIm1vcmUiLCAibmV3Tm9kZSIsICJzdWJsaXN0IiwgImFyZWEiLCAiY291bnRlciIsICJzdG9wUHJvcGFnYXRpb24iLCAibW9yZUJ1dHRvbiIsICJzdWJsYWJlbCIsICJyZW1vdmUiLCAibWF4bGVuZ3RoIiwgImVsZW0iLCAibW9yZWJ1dHRvbiIsICJsaXN0bm9kZSIsICJub2RlXyIsICJpbnB1dG5vZGUiLCAicmVtb3ZlQXR0cmlidXRlIiwgInJlbW92ZUJ1dHRvbiIsICJyZXN1bHQiLCAibGFiZWxFbGVtZW50IiwgImNvbHMiLCAicm93cyIsICJyZXF1aXJlZCIsICJyZWFkb25seSIsICJFcnJvciIsICJ0b1N0cmluZyIsICJleHRyYSIsICIkZGF0YSIsICJ0b29sdGlwQnV0dG9uIiwgInRpdGxlIiwgInBvc2l0aW9uIiwgIm15IiwgImF0IiwgImNvbGxpc2lvbiIsICJ0b29sdGlwQ2xhc3MiLCAiZ2V0SW5wdXREYXRhIiwgIl9pdGVyYXRvcjQiLCAiZWxlbWVudHMiLCAiX3N0ZXA0IiwgImZpZWxkIiwgImZpZWxkTmFtZU5vcm0iLCAiZGF0YXNldCIsICJzaW5nbGUiLCAidmFsIiwgInRyaW0iLCAiZmllbGROYW1lIiwgIiRmb3JtIiwgImVzY2FwZVNlbGVjdG9yIiwgIiRlbGVtZW50cyIsICJ0b0FycmF5IiwgImdldENoZWNrYm94T3JSYWRpbyIsICJlbGVtZW50QXJyYXkiLCAiZm91bmQiLCAiZmlsdGVyIiwgImdldEVsZW1lbnRDb250YWluZXIiLCAiSFRNTEZpZWxkU2V0RWxlbWVudCIsICJIVE1MRGl2RWxlbWVudCIsICJIVE1MSGVhZGluZ0VsZW1lbnQiLCAiZ2V0RWxlbWVudExhYmVsT2JqZWN0IiwgIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCAiZ2V0RWxlbWVudExhYmVsIiwgImZpcnN0Q2hpbGQiLCAidGV4dENvbnRlbnQiLCAic2V0RWxlbWVudExhYmVsIiwgImxhYmVsVGV4dCIsICJvdmVycmlkZUVsZW1lbnRMYWJlbCIsICJ0ZW1wb3JhcnlMYWJlbFRleHQiLCAiaGFzQXR0cmlidXRlIiwgInJlc2V0RWxlbWVudExhYmVsIiwgImdldEF0dHJpYnV0ZSIsICJzZXRFbGVtZW50VmlzaWJpbGl0eSIsICJ2aXNpYmlsaXR5IiwgInRvZ2dsZSIsICJzZXRFbGVtZW50VG9vbHRpcFZpc2liaWxpdHkiLCAiSFRNTEZvcm1FbGVtZW50IiwgImdldENoZWNrZWQiLCAicmV0dXJuQXJyYXkiLCAiSFRNTFNlbGVjdEVsZW1lbnQiLCAib3B0aW9ucyIsICJIVE1MSW5wdXRFbGVtZW50IiwgImdldFVuY2hlY2tlZCIsICJpc0lQdjZBZGRyZXNzIiwgInRvVXBwZXJDYXNlIiwgImFiYnJldlBvcyIsICJDSURSU3RhcnQiLCAiYWRkcmVzc0VuZCIsICJyZXBlYXQiLCAicGFkIiwgInJlcGxhY2VtZW50IiwgInNwbGl0IiwgImlzUmFuZ2UiLCAiaXNJUEFkZHJlc3MiLCAidmFsaWRDSURSIiwgInN1Ym5ldCIsICJwYXJzZUludCIsICJnZXQ2NCIsICJpcHY2IiwgInN1Ym5ldE1hdGNoIiwgImlwUmVnZXgiLCAidG9VcHBlckNhc2VGaXJzdENoYXIiLCAidG9Mb3dlckNhc2VGaXJzdENoYXIiLCAic3BsaXRXZWlnaHRlZEJ5S2V5cyIsICJzdGFydCIsICJlbmQiLCAic2tpcGxpc3QiLCAibGV2ZWwiLCAiaW5pdGlhbCIsICJBcnJheSIsICJpc0FycmF5IiwgIlR5cGVFcnJvciIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJmb3JtYXRSZWFzb25UZXh0IiwgImFkZFNpZyIsICJyZWFzb24iLCAic2lnIiwgInNpZ0luZGV4IiwgImxhc3RJbmRleE9mIiwgImZvcm1hdFJlYXNvbkZvckxvZyIsICJzYWZlUmVwbGFjZSIsICJwYXR0ZXJuIiwgImlzSW5maW5pdHkiLCAiZXhwaXJ5IiwgImZvcm1hdFRpbWUiLCAidGltZSIsICJtIiwgIndnVUxTIiwgImFwcGVuZFB1bmN0dWF0aW9uIiwgInB1bmN0dWF0aW9uIiwgInNlYXJjaCIsICJhcnJheSIsICJ1bmlxIiwgImFyciIsICJpdGVtIiwgImlkeCIsICJkdXBzIiwgImNodW5rIiwgIm51bUNodW5rcyIsICJNYXRoIiwgImNlaWwiLCAiZnJvbSIsICJzZWxlY3QyIiwgIm1hdGNoZXJzIiwgIm9wdGdyb3VwRnVsbCIsICJwYXJhbXMiLCAib3JpZ2luYWxNYXRjaGVyIiwgImZuIiwgImRlZmF1bHRzIiwgIm1hdGNoZXIiLCAidGVybSIsICJjaGlsZHJlbiIsICJ3b3JkQmVnaW5uaW5nIiwgIlJlZ0V4cCIsICJ0ZXN0IiwgImhpZ2hsaWdodFNlYXJjaE1hdGNoZXMiLCAic2VhcmNoVGVybSIsICJzZWxlY3QyU2VhcmNoUXVlcnkiLCAibG9hZGluZyIsICJjc3MiLCAicXVlcnlJbnRlcmNlcHRvciIsICJhdXRvU3RhcnQiLCAiZXYiLCAid2hpY2giLCAiY2xvc2VzdCIsICJwcmV2IiwgImRyb3Bkb3duIiwgIiRzZWFyY2giLCAic2VsZWN0aW9uIiwgImZvY3VzIiwgImhpc3RvcnkiLCAicHJlZml4IiwgInJhbmRvbSIsICJwb3N0Zml4IiwgInJlIiwgImdldENhbGxiYWNrIiwgImhhc093biIsICJzZWxmIiwgImFyZ3MiLCAicGFyYW0iLCAiZGlnaXRNYXRjaCIsICJfZCIsICJEYXRlIiwgIlJlZmxlY3QiLCAiYXBwbHkiLCAiVVRDIiwgImRhdGVQYXJ0cyIsICJGdW5jdGlvbiIsICJiaW5kIiwgImlzVmFsaWQiLCAibG9nIiwgIm1vbnRoc1Nob3J0IiwgImRheXMiLCAiZGF5c1Nob3J0IiwgInJlbGF0aXZlVGltZXMiLCAidGhpc0RheSIsICJwcmV2RGF5IiwgIm5leHREYXkiLCAidGhpc1dlZWsiLCAicGFzdFdlZWsiLCAib3RoZXIiLCAidW5pdE1hcCIsICJzZWNvbmRzIiwgIm1pbnV0ZXMiLCAiaG91cnMiLCAid2Vla3MiLCAieWVhcnMiLCAiaXNOYU4iLCAiZ2V0VGltZSIsICJpc0JlZm9yZSIsICJpc0FmdGVyIiwgImdldFVUQ01vbnRoTmFtZSIsICJnZXRVVENNb250aCIsICJnZXRVVENNb250aE5hbWVBYmJyZXYiLCAiZ2V0TW9udGhOYW1lIiwgImdldE1vbnRoIiwgImdldE1vbnRoTmFtZUFiYnJldiIsICJnZXRVVENEYXlOYW1lIiwgImdldFVUQ0RheSIsICJnZXRVVENEYXlOYW1lQWJicmV2IiwgImdldERheU5hbWUiLCAiZ2V0RGF5IiwgImdldERheU5hbWVBYmJyZXYiLCAiYWRkIiwgInVuaXQiLCAibnVtIiwgInVuaXROb3JtIiwgImtleXMiLCAic3VidHJhY3QiLCAiZm9ybWF0IiwgImZvcm1hdHN0ciIsICJ6b25lIiwgInVkYXRlIiwgImdldFRpbWV6b25lT2Zmc2V0IiwgInRvSVNPU3RyaW5nIiwgImxlbiIsICJoMjQiLCAiZ2V0SG91cnMiLCAiZ2V0TWludXRlcyIsICJnZXRTZWNvbmRzIiwgIm1zIiwgImdldE1pbGxpc2Vjb25kcyIsICJEIiwgImdldERhdGUiLCAiTSIsICJZIiwgImdldEZ1bGxZZWFyIiwgImgxMiIsICJhbU9yUG0iLCAicmVwbGFjZW1lbnRNYXAiLCAiSEgiLCAiSCIsICJoaCIsICJoIiwgIkEiLCAibW0iLCAic3MiLCAiU1NTIiwgImRkZGQiLCAiZGRkIiwgImQiLCAiREQiLCAiTU1NTSIsICJNTU0iLCAiTU0iLCAiWVlZWSIsICJZWSIsICJjYWxlbmRhciIsICJkYXRlRGlmZiIsICJzZXRIb3VycyIsICJtb250aEhlYWRlclJlZ2V4IiwgImdldFVUQ0Z1bGxZZWFyIiwgIm1vbnRoSGVhZGVyIiwgImhlYWRlciIsICJfaXRlcmF0b3I2IiwgImdldE93blByb3BlcnR5TmFtZXMiLCAiX3N0ZXA2IiwgImZ1bmMiLCAid2lraSIsICJudW1iZXJPZkFjdGlvbnNMZWZ0IiwgIm5ick9mQ2hlY2twb2ludHNMZWZ0IiwgImFjdGlvbkNvbXBsZXRlZCIsICJub3RpY2UiLCAic3RhdHVzIiwgInJlZGlyZWN0IiwgImZvbGxvd1JlZGlyZWN0IiwgInNldFRpbWVvdXQiLCAibG9jYXRpb24iLCAidGltZU91dCIsICJ3cEFjdGlvbkNvbXBsZXRlZFRpbWVPdXQiLCAiYWRkQ2hlY2twb2ludCIsICJyZW1vdmVDaGVja3BvaW50IiwgImFwaSIsICJjdXJyZW50QWN0aW9uIiwgInF1ZXJ5IiwgIm9uU3VjY2VzcyIsICJzdGF0dXNFbGVtZW50IiwgIm9uRXJyb3IiLCAiX3RoaXMkcXVlcnkiLCAiYXNzZXJ0IiwgImVycm9yZm9ybWF0IiwgInVzZWxhbmciLCAiZXJyb3JsYW5nIiwgImVycm9yc3VzZWxvY2FsIiwgInNldFN0YXR1c0VsZW1lbnQiLCAic3RhdGVsZW0iLCAiZm9ybWF0dmVyc2lvbiIsICJlcnJvciIsICJhY3Rpb24iLCAidGFncyIsICJtb3JlYml0c1dpa2lDaGFuZ2VUYWciLCAicGFyZW50IiwgInJlc3BvbnNlIiwgInJlc3BvbnNlWE1MIiwgInN0YXR1c1RleHQiLCAiZXJyb3JDb2RlIiwgImVycm9yVGV4dCIsICJiYWR0b2tlblJldHJ5IiwgInNldFBhcmVudCIsICJwb3N0IiwgImNhbGxlckFqYXhQYXJhbWV0ZXJzIiwgInF1ZXJ5U3RyaW5nQXJyIiwgIl9pNSIsICJfT2JqZWN0JGVudHJpZXMyIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJxdWVyeVN0cmluZyIsICJhamF4cGFyYW1zIiwgImNvbnRleHQiLCAidXJsIiwgIndpa2lTY3JpcHQiLCAiZGF0YVR5cGUiLCAiaGVhZGVycyIsICJtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQiLCAiYWpheCIsICJ0aGVuIiwgIm9uQVBJc3VjY2VzcyIsICJlcnJvcnMiLCAiY29kZSIsICJodG1sIiwgImVxIiwgImF0dHIiLCAicmV0dXJuRXJyb3IiLCAiY2FsbCIsICJpbmZvIiwgIkRlZmVycmVkIiwgInJlc29sdmVXaXRoIiwgIm9uQVBJZmFpbHVyZSIsICJlcnJvclRocm93biIsICJnZXRUb2tlbiIsICJ0b2tlbiIsICJyZWplY3RXaXRoIiwgImdldFN0YXR1c0VsZW1lbnQiLCAiZ2V0RXJyb3JDb2RlIiwgImdldEVycm9yVGV4dCIsICJnZXRYTUwiLCAiZ2V0UmVzcG9uc2UiLCAiZ2V0Q2FjaGVkSnNvbiIsICJwcm9wIiwgInRpdGxlcyIsICJydnNsb3RzIiwgInJ2cHJvcCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJhcGlvYmoiLCAidW5saW5rIiwgIndpa2l0ZXh0IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgIkpTT04iLCAicGFyc2UiLCAic2V0QXBpVXNlckFnZW50IiwgInVhIiwgInRva2VuQXBpIiwgIm1ldGEiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJwYWdlIiwgImN0eCIsICJwYWdlRXhpc3RzIiwgImVkaXRTdW1tYXJ5IiwgImNoYW5nZVRhZ3MiLCAidGVzdEFjdGlvbnMiLCAiY2FsbGJhY2tQYXJhbWV0ZXJzIiwgInBhZ2VUZXh0IiwgImVkaXRNb2RlIiwgImFwcGVuZFRleHQiLCAicHJlcGVuZFRleHQiLCAibmV3U2VjdGlvblRleHQiLCAibmV3U2VjdGlvblRpdGxlIiwgImNyZWF0ZU9wdGlvbiIsICJtaW5vckVkaXQiLCAiYm90RWRpdCIsICJwYWdlU2VjdGlvbiIsICJtYXhDb25mbGljdFJldHJpZXMiLCAibWF4UmV0cmllcyIsICJmb2xsb3dDcm9zc05zUmVkaXJlY3QiLCAid2F0Y2hsaXN0T3B0aW9uIiwgIndhdGNobGlzdEV4cGlyeSIsICJjcmVhdG9yIiwgInRpbWVzdGFtcCIsICJyZXZlcnRPbGRJRCIsICJtb3ZlRGVzdGluYXRpb24iLCAibW92ZVRhbGtQYWdlIiwgIm1vdmVTdWJwYWdlcyIsICJtb3ZlU3VwcHJlc3NSZWRpcmVjdCIsICJwcm90ZWN0RWRpdCIsICJwcm90ZWN0TW92ZSIsICJwcm90ZWN0Q3JlYXRlIiwgInByb3RlY3RDYXNjYWRlIiwgImxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciIsICJwYWdlTG9hZGVkIiwgImNzcmZUb2tlbiIsICJsb2FkVGltZSIsICJsYXN0RWRpdFRpbWUiLCAicGFnZUlEIiwgImNvbnRlbnRNb2RlbCIsICJyZXZlcnRDdXJJRCIsICJyZXZlcnRVc2VyIiwgIndhdGNoZWQiLCAiZnVsbHlQcm90ZWN0ZWQiLCAic3VwcHJlc3NQcm90ZWN0V2FybmluZyIsICJjb25mbGljdFJldHJpZXMiLCAicmV0cmllcyIsICJvbkxvYWRTdWNjZXNzIiwgIm9uTG9hZEZhaWx1cmUiLCAib25TYXZlU3VjY2VzcyIsICJvblNhdmVGYWlsdXJlIiwgIm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzIiwgIm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlIiwgIm9uTW92ZVN1Y2Nlc3MiLCAib25Nb3ZlRmFpbHVyZSIsICJvbkRlbGV0ZVN1Y2Nlc3MiLCAib25EZWxldGVGYWlsdXJlIiwgIm9uVW5kZWxldGVTdWNjZXNzIiwgIm9uVW5kZWxldGVGYWlsdXJlIiwgIm9uUHJvdGVjdFN1Y2Nlc3MiLCAib25Qcm90ZWN0RmFpbHVyZSIsICJsb2FkUXVlcnkiLCAibG9hZEFwaSIsICJzYXZlQXBpIiwgImxvb2t1cENyZWF0aW9uQXBpIiwgIm1vdmVBcGkiLCAibW92ZVByb2Nlc3NBcGkiLCAicGF0cm9sQXBpIiwgInBhdHJvbFByb2Nlc3NBcGkiLCAiZGVsZXRlQXBpIiwgImRlbGV0ZVByb2Nlc3NBcGkiLCAidW5kZWxldGVBcGkiLCAidW5kZWxldGVQcm9jZXNzQXBpIiwgInByb3RlY3RBcGkiLCAicHJvdGVjdFByb2Nlc3NBcGkiLCAiZW1wdHlGdW5jdGlvbiIsICJsb2FkIiwgIm9uRmFpbHVyZSIsICJpbnByb3AiLCAiaW50ZXN0YWN0aW9ucyIsICJjdXJ0aW1lc3RhbXAiLCAicnZsaW1pdCIsICJydnN0YXJ0aWQiLCAicmVkaXJlY3RzIiwgInJ2c2VjdGlvbiIsICJmbkxvYWRTdWNjZXNzIiwgInNhdmUiLCAiY2FuVXNlTXdVc2VyVG9rZW4iLCAiZm5DYW5Vc2VNd1VzZXJUb2tlbiIsICJjb25maXJtIiwgInN1bW1hcnkiLCAidXNlciIsICJ3YXRjaGxpc3QiLCAiZm5BcHBseVdhdGNobGlzdEV4cGlyeSIsICJ3YXRjaGxpc3RleHBpcnkiLCAic2VjdGlvbiIsICJtaW5vciIsICJub3RtaW5vciIsICJib3QiLCAiYXBwZW5kdGV4dCIsICJwcmVwZW5kdGV4dCIsICJzZWN0aW9udGl0bGUiLCAidW5kbyIsICJ1bmRvYWZ0ZXIiLCAiYmFzZXRpbWVzdGFtcCIsICJzdGFydHRpbWVzdGFtcCIsICJmblNhdmVTdWNjZXNzIiwgImZuU2F2ZUVycm9yIiwgImZuQXV0b1NhdmUiLCAicHJlcGVuZCIsICJuZXdTZWN0aW9uIiwgImdldFBhZ2VOYW1lIiwgImdldFBhZ2VUZXh0IiwgInNldFBhZ2VUZXh0IiwgInNldEFwcGVuZFRleHQiLCAic2V0UHJlcGVuZFRleHQiLCAic2V0TmV3U2VjdGlvblRleHQiLCAic2V0TmV3U2VjdGlvblRpdGxlIiwgInNldEVkaXRTdW1tYXJ5IiwgInNldENoYW5nZVRhZ3MiLCAic2V0Q3JlYXRlT3B0aW9uIiwgInNldE1pbm9yRWRpdCIsICJzZXRCb3RFZGl0IiwgInNldFBhZ2VTZWN0aW9uIiwgInNldE1heENvbmZsaWN0UmV0cmllcyIsICJzZXRNYXhSZXRyaWVzIiwgInNldFdhdGNobGlzdCIsICJzZXRXYXRjaGxpc3RFeHBpcnkiLCAic2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzIiwgInNldEZvbGxvd1JlZGlyZWN0IiwgInNldExvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciIsICJmbGFnIiwgInNldE1vdmVEZXN0aW5hdGlvbiIsICJkZXN0aW5hdGlvbiIsICJzZXRNb3ZlVGFsa1BhZ2UiLCAic2V0TW92ZVN1YnBhZ2VzIiwgInNldE1vdmVTdXBwcmVzc1JlZGlyZWN0IiwgInNldEVkaXRQcm90ZWN0aW9uIiwgInNldE1vdmVQcm90ZWN0aW9uIiwgInNldENyZWF0ZVByb3RlY3Rpb24iLCAic2V0Q2FzY2FkaW5nUHJvdGVjdGlvbiIsICJzZXRPbGRJRCIsICJvbGRJRCIsICJnZXRDdXJyZW50SUQiLCAiZ2V0UmV2aXNpb25Vc2VyIiwgImdldExhc3RFZGl0VGltZSIsICJzZXRDYWxsYmFja1BhcmFtZXRlcnMiLCAiZ2V0Q2FsbGJhY2tQYXJhbWV0ZXJzIiwgImV4aXN0cyIsICJnZXRQYWdlSUQiLCAiZ2V0Q29udGVudE1vZGVsIiwgImdldFdhdGNoZWQiLCAiZ2V0TG9hZFRpbWUiLCAiZ2V0Q3JlYXRvciIsICJnZXRDcmVhdGlvblRpbWVzdGFtcCIsICJjYW5FZGl0IiwgImxvb2t1cENyZWF0aW9uIiwgInJ2ZGlyIiwgImZuTG9va3VwQ3JlYXRpb25TdWNjZXNzIiwgInJldmVydCIsICJtb3ZlIiwgImZuUHJlZmxpZ2h0Q2hlY2tzIiwgImZuUHJvY2Vzc01vdmUiLCAiZm5OZWVkVG9rZW5JbmZvUXVlcnkiLCAicGF0cm9sIiwgInBhdHJvbGhyZWYiLCAicmNpZCIsICJnZXRQYXJhbVZhbHVlIiwgImZuUHJvY2Vzc1BhdHJvbCIsICJwYXRyb2xRdWVyeSIsICJyY3Byb3AiLCAicmN0aXRsZSIsICJyY2xpbWl0IiwgImRlbGV0ZVBhZ2UiLCAiZm5Qcm9jZXNzRGVsZXRlIiwgInVuZGVsZXRlUGFnZSIsICJmblByb2Nlc3NVbmRlbGV0ZSIsICJwcm90ZWN0IiwgImZuUHJvY2Vzc1Byb3RlY3QiLCAiZ2V0UHJlZml4ZWRUZXh0IiwgImVkaXRSZXN0cmljdGlvbiIsICJwYWdlb2JqIiwgImZuQ2hlY2tQYWdlTmFtZSIsICJyZXYiLCAibWlzc2luZyIsICJwYWdlaWQiLCAiY29udGVudG1vZGVsIiwgImVkaXRQcm90IiwgInByb3RlY3Rpb24iLCAicHIiLCAicG9wIiwgImxhc3RyZXZpZCIsICJ0ZXN0YWN0aW9ucyIsICJhY3Rpb25zIiwgIl9pNiIsICJfT2JqZWN0JGtleXMiLCAicmV2aWQiLCAidXNlcmhpZGRlbiIsICJpbnZhbGlkIiwgInJlc29sdmVkTmFtZSIsICJvcmlnTnMiLCAibmFtZXNwYWNlIiwgIm5ld05zIiwgIm5ld0V4cGlyeSIsICJyZWwiLCAiZWRpdCIsICJsaW5rIiwgImNhcHRjaGEiLCAicHVyZ2VRdWVyeSIsICJwdXJnZUFwaSIsICJzbGVlcCIsICJlcnJvckRhdGEiLCAiYWJ1c2VmaWx0ZXIiLCAiZGVzY3JpcHRpb24iLCAic3BhbSIsICJzcGFtYmxhY2tsaXN0IiwgIm1hdGNoZXMiLCAiaXNUZXh0UmVkaXJlY3QiLCAic29tZSIsICJ0YWciLCAiZm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAicmV2cyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJmblByb2Nlc3NDaGVja3MiLCAiYWN0aW9uTWlzc2luZyIsICJwcm90ZWN0TWlzc2luZyIsICJzYWx0TWlzc2luZyIsICJlZGl0cHJvdCIsICJwYWdlVGl0bGUiLCAidG8iLCAibW92ZXRhbGsiLCAibW92ZXN1YnBhZ2VzIiwgIm5vcmVkaXJlY3QiLCAicmVjZW50Y2hhbmdlcyIsICJ1bnBhdHJvbGxlZCIsICJwYXRyb2xTdGF0IiwgImZuUHJvY2Vzc0RlbGV0ZUVycm9yIiwgImZuUHJvY2Vzc1VuZGVsZXRlRXJyb3IiLCAicHJzIiwgIm1vdmVwcm90IiwgImNyZWF0ZXByb3QiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAic291cmNlIiwgImNhc2NhZGUiLCAicHJvdGVjdGlvbnMiLCAiZXhwaXJ5cyIsICJtaWxsaXNlY29uZHMiLCAiZGVmZXJyZWQiLCAicmVzb2x2ZSIsICJwcmV2aWV3IiwgInByZXZpZXdib3giLCAiYWRkQ2xhc3MiLCAiaGlkZSIsICJiZWdpblJlbmRlciIsICJzZWN0aW9uVGl0bGUiLCAic2hvdyIsICJzdGF0dXNzcGFuIiwgImluaXQiLCAicHN0IiwgImRpc2FibGVsaW1pdHJlcG9ydCIsICJkaXNhYmxlZWRpdHNlY3Rpb24iLCAicmVuZGVyQXBpIiwgImZuUmVuZGVyU3VjY2VzcyIsICJpbm5lckhUTUwiLCAibG9hZGVyIiwgIm1vZHVsZXN0eWxlcyIsICJtb2R1bGVzIiwgImNsb3NlUHJldmlldyIsICJlbXB0eSIsICJwYXJzZVRlbXBsYXRlIiwgImNvdW50IiwgInVubmFtZWQiLCAiZXF1YWxzIiwgInBhcmFtZXRlcnMiLCAia2V5IiwgImZpbmRQYXJhbSIsICJmaW5hbCIsICJ0ZXN0MyIsICJ0ZXN0MiIsICJjaGFyQXQiLCAicmVtb3ZlTGluayIsICJsaW5rVGFyZ2V0IiwgIm13VGl0bGUiLCAibmV3RnJvbVRleHQiLCAibmFtZXNwYWNlSUQiLCAiZ2V0TmFtZXNwYWNlSWQiLCAiZ2V0TWFpblRleHQiLCAibGlua1JlZ2V4U3RyaW5nIiwgImlzRmlsZU9yQ2F0ZWdvcnkiLCAiY29sb24iLCAic2ltcGxlTGlua1JlZ2V4IiwgInBpcGVkTGlua1JlZ2V4IiwgImNvbW1lbnRPdXRJbWFnZSIsICJpbWFnZSIsICJpbWFnZVJlZ2V4U3RyaW5nIiwgImxpbmtzUmVnZXgiLCAiYWxsTGlua3MiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAiYWxsTGluayIsICJnYWxsZXJ5SW1hZ2VSZWdleCIsICJmcmVlSW1hZ2VSZWdleCIsICJhZGRUb0ltYWdlQ29tbWVudCIsICJfaXRlcmF0b3IxMCIsICJfc3RlcDEwIiwgImdhbGxlcnlSZWdleCIsICJuZXd0ZXh0IiwgInJlbW92ZVRlbXBsYXRlIiwgInRlbXBsYXRlIiwgInRlbXBsYXRlUmVnZXhTdHJpbmciLCAiYWxsVGVtcGxhdGVzIiwgIl9pdGVyYXRvcjExIiwgIl9zdGVwMTEiLCAiYWxsVGVtcGxhdGUiLCAiaW5zZXJ0QWZ0ZXJUZW1wbGF0ZXMiLCAiZmxhZ3MiLCAicHJlUmVnZXgiLCAiZ2V0VGV4dCIsICJ1c2Vyc3BhY2VMb2dnZXIiLCAibG9nUGFnZU5hbWUiLCAiaW5pdGlhbFRleHQiLCAiaGVhZGVyTGV2ZWwiLCAibG9nVGV4dCIsICJzdW1tYXJ5VGV4dCIsICJkZWYiLCAicmVqZWN0IiwgInN0YXQiLCAidGV4dFJhdyIsICJnZW5lcmF0ZSIsICJ1cGRhdGUiLCAiRWxlbWVudCIsICJoYXNDaGlsZE5vZGVzIiwgImVycm9yRXZlbnQiLCAiaGFuZGxlciIsICJzdGF0UmF3IiwgImxpbmtlZCIsICJwcmludFVzZXJUZXh0IiwgImNvbW1lbnRzIiwgIm1lc3NhZ2UiLCAicCIsICJkaXYiLCAibWFyZ2luVG9wIiwgIndoaXRlU3BhY2UiLCAiaHRtbE5vZGUiLCAiY29sb3IiLCAialF1ZXJ5U2VsZWN0b3IiLCAialF1ZXJ5Q29udGV4dCIsICJsYXN0Q2hlY2tib3giLCAiY2xpY2tIYW5kbGVyIiwgImNsaWNrSGFuZGxlcjIiLCAidGhpc0NiIiwgInNoaWZ0S2V5IiwgImNicyIsICJpbmRleCIsICJsYXN0SW5kZXgiLCAiZW5kU3RhdGUiLCAiZmluaXNoIiwgImNsaWNrIiwgIm9uIiwgImJhdGNoT3BlcmF0aW9uIiwgInBhZ2VMaXN0IiwgImNodW5rU2l6ZSIsICJwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcyIsICJ3b3JrZXIiLCAicG9zdEZpbmlzaCIsICJjb3VudFN0YXJ0ZWQiLCAiY291bnRGaW5pc2hlZCIsICJjb3VudEZpbmlzaGVkU3VjY2VzcyIsICJjdXJyZW50Q2h1bmtJbmRleCIsICJwYWdlQ2h1bmtzIiwgInJ1bm5pbmciLCAic2V0UGFnZUxpc3QiLCAic2V0T3B0aW9uIiwgIm9wdGlvbk5hbWUiLCAib3B0aW9uVmFsdWUiLCAicnVuIiwgInRvdGFsIiwgImZuU3RhcnROZXdDaHVuayIsICJ3b3JrZXJTdWNjZXNzIiwgImFyZyIsICJmbkRvbmVPbmUiLCAid29ya2VyRmFpbHVyZSIsICJ0aGlzUHJveHkiLCAiX2l0ZXJhdG9yMTIiLCAiX3N0ZXAxMiIsICJwcm9ncmVzcyIsICJyb3VuZCIsICJmbG9vciIsICJzdGF0dXNTdHJpbmciLCAic2ltcGxlV2luZG93IiwgIndpZHRoIiwgImhlaWdodCIsICJkaWFsb2ciLCAiYXV0b09wZW4iLCAiYnV0dG9ucyIsICJQbGFjZWhvbGRlciBidXR0b24iLCAiZGlhbG9nQ2xhc3MiLCAiaW5uZXJXaWR0aCIsICJjbG9zZSIsICJyZXNpemVTdGFydCIsICJzY3JvbGxib3giLCAibWF4SGVpZ2h0IiwgInJlc2l6ZVN0b3AiLCAicmVzaXplIiwgIiR3aWRnZXQiLCAiZWFjaCIsICJidXR0b25zcGFuIiwgImxpbmtzc3BhbiIsICJyZXNpemFibGUiLCAiaGFzRm9vdGVyTGlua3MiLCAic2NyaXB0TmFtZSIsICJwcmV2ZW50RGVmYXVsdCIsICJkaXNwbGF5IiwgInNjcmlwdG5hbWVzcGFuIiwgInNldHVwVG9vbHRpcHMiLCAicGciLCAiZGlmZiIsICJyYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSIsICJzZXRIZWlnaHQiLCAic2V0VGl0bGUiLCAic2V0U2NyaXB0TmFtZSIsICJzZXRXaWR0aCIsICJnZXRDb21wdXRlZFN0eWxlIiwgImlubmVySGVpZ2h0IiwgInNldENvbnRlbnQiLCAicHVyZ2VDb250ZW50IiwgImFkZENvbnRlbnQiLCAiYnV0dG9uIiwgImFkZEZvb3RlckxpbmsiLCAid2lraVBhZ2UiLCAicHJlcCIsICIkZm9vdGVybGlua3MiLCAiYnVsbGV0IiwgInNldE1vZGFsaXR5IiwgIm1vZGFsIiwgInNldEJ1dHRvbnNFbmFibGVkIiwgImVuYWJsZWQiLCAialF1ZXJ5Il0KfQo=
