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
//! src/morebits/utils/useUls.ts
var import_ext_gadget = require("ext.gadget.i18n");
var uls = (simplified, traditional) => {
  return typeof import_ext_gadget.wgULS === "function" ? (0, import_ext_gadget.wgULS)(simplified, traditional) : simplified;
};
//! src/morebits/morebits.ts
/*! Twinkle.js - morebits.ts */
var Morebits = {};
window.Morebits = Morebits;
var l10n = {
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
   */
  signatureTimestampFormat: (str) => {
    const rgxUTC = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(UTC\)/;
    const rgxCST = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(CST\)/;
    const match = rgxUTC.exec(str) ?? rgxCST.exec(str);
    const matchCST = rgxCST.exec(str);
    if (!match) {
      return null;
    }
    const month = Morebits.date.localeData.months.indexOf(match[4]);
    if (month === -1) {
      return null;
    }
    return matchCST ? [Number(match[1]), Number(match[2]) - 1, Number(match[3]), Number(match[4]) - 8, Number(match[5])] : [Number(match[1]), Number(match[2]) - 1, Number(match[3]), Number(match[4]), Number(match[5])];
  }
};
Morebits.l10n = l10n;
Morebits.userIsInGroup = (group) => {
  const userGroups = mw.config.get("wgUserGroups") ?? [];
  const globalGroups = mw.config.get("wgGlobalGroups") ?? [];
  return userGroups.includes(group) || globalGroups.includes(group);
};
Morebits.userIsSysop = Morebits.userIsInGroup("sysop") || Morebits.userIsInGroup("steward") || Morebits.userIsInGroup("qiuwen");
Morebits.sanitizeIPv6 = (address) => {
  console.warn("[Morebits] NOTE: Morebits.sanitizeIPv6 was renamed to Morebits.ip.sanitizeIPv6 in February 2021, please use that instead");
  return Morebits.ip.sanitizeIPv6(address);
};
Morebits.isPageRedirect = () => {
  return !!(mw.config.get("wgIsRedirect") || document.querySelector("#softredirect") || document.querySelector(".box-RfD") || document.querySelector(".box-Redirect_category_shell"));
};
Morebits.pageNameNorm = mw.config.get("wgPageName").replace(/_/g, " ");
Morebits.pageNameRegex = (pageName) => {
  if (pageName === "") {
    return "";
  }
  const firstChar = pageName.charAt(0);
  const remainder = Morebits.string.escapeRegExp(pageName.slice(1));
  if (mw.Title.phpCharToUpper(firstChar) !== firstChar.toLowerCase()) {
    return `[${mw.Title.phpCharToUpper(firstChar)}${firstChar.toLowerCase()}]${remainder}`;
  }
  return Morebits.string.escapeRegExp(firstChar) + remainder;
};
var createHtml = (input) => {
  const fragment = document.createDocumentFragment();
  if (!input) {
    return fragment;
  }
  const elements = [].concat(input);
  for (const element of elements) {
    if (element instanceof Node) {
      fragment.appendChild(element);
    } else {
      for (const node of $.parseHTML(createHtml.renderWikilinks(element)) ?? []) {
        fragment.appendChild(node);
      }
    }
  }
  return fragment;
};
Morebits.createHtml = createHtml;
createHtml.renderWikilinks = (text) => {
  const ub = new Morebits.unbinder(text);
  ub.unbind("<code>", "</code>");
  ub.content = ub.content.replace(/\[\[:?(?:([^|\]]+?)\|)?([^\]|]+?)\]\]/g, (_, target, text_) => {
    target || (target = text_);
    return `<a rel="noopener" target="_blank" href="${mw.util.getUrl(target)}" title="${target.replace(/"/g, "&#34;")}">${text_}</a>`;
  });
  return ub.rebind();
};
Morebits.namespaceRegex = (namespaces) => {
  const namespaceList = [].concat(namespaces);
  const aliases = [];
  let regex;
  for (const [name, number] of Object.entries(mw.config.get("wgNamespaceIds"))) {
    if (namespaceList.includes(number)) {
      aliases[aliases.length] = [...name].map((char) => Morebits.pageNameRegex(char)).join("");
    }
  }
  switch (aliases.length) {
    case 0:
      regex = "";
      break;
    case 1:
      regex = aliases[0] ?? "";
      break;
    default:
      regex = `(?:${aliases.join("|")})`;
      break;
  }
  return regex;
};
var QuickFormElement = class _QuickFormElement {
  data;
  childs;
  /**
   * @memberof Morebits.quickForm.element
   * @type {number}
   */
  static id = 0;
  constructor(data) {
    this.data = data;
    this.childs = [];
  }
  /**
   * Appends an element to current element.
   *
   * @param {QuickFormData | QuickFormElement} data - A quickForm element or the object required to
   * create the quickForm element.
   * @returns {QuickFormElement} The same element passed in.
   */
  append(data) {
    let child;
    if (data instanceof _QuickFormElement) {
      child = data;
    } else {
      child = new _QuickFormElement(data);
    }
    this.childs[this.childs.length] = child;
    return child;
  }
  /**
   * Renders the HTML output for the quickForm element.  This should be called
   * without parameters: `form.render()`.
   *
   * @param {number | string} internalSubgroupId
   * @returns {HTMLElement}
   */
  render(internalSubgroupId) {
    const currentNode = this.compute(this.data, internalSubgroupId);
    for (const child of this.childs) {
      currentNode[1].appendChild(child.render());
    }
    return currentNode[0];
  }
  /**
   * @param {QuickFormData} data
   * @param {number | string} inId
   * @returns {[Node, Node]}
   */
  compute(data, inId) {
    let node;
    let childContainer = null;
    let label;
    const id = `${inId ? `${inId}_` : ""}node_${_QuickFormElement.id++}`;
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
      case "fragment": {
        const fragmentNode = document.createDocumentFragment();
        return [fragmentNode, fragmentNode];
      }
      case "select": {
        node = document.createElement("div");
        node.setAttribute("id", `div_${id}`);
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
          select.setAttribute("size", String(data.size));
        }
        if (data.disabled) {
          select.disabled = true;
        }
        select.setAttribute("name", data.name);
        if (data.list) {
          const list = data.list;
          for (i = 0; i < list.length; ++i) {
            current = list[i];
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
          const list = data.list;
          for (i = 0; i < list.length; ++i) {
            current = list[i];
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
          const list = data.list;
          for (i = 0; i < list.length; ++i) {
            const curId = `${id}_${i}`;
            current = list[i];
            let curDiv;
            if (current.type === "header") {
              curDiv = node.appendChild(document.createElement("h6"));
              curDiv.appendChild(document.createTextNode(current.label));
              if (current.tooltip) {
                _QuickFormElement.generateTooltip(curDiv, current);
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
              _QuickFormElement.generateTooltip(label, current);
            }
            if (current.style) {
              label.setAttribute("style", current.style);
            }
            let event;
            if (current.subgroup) {
              let tmpgroup = current.subgroup;
              tmpgroup = [].concat(tmpgroup);
              const subgroupRaw = new _QuickFormElement({
                type: "div",
                id: `${id}_${i}_subgroup`
              });
              for (const el of tmpgroup) {
                const newEl = {
                  ...el
                };
                newEl.type || (newEl.type = data.type);
                newEl.name = `${current.name || data.name}.${newEl.name}`;
                subgroupRaw.append(newEl);
              }
              const subgroup = subgroupRaw.render(curId);
              subgroup.className = "quickformSubgroup";
              subnode.subgroup = subgroup;
              subnode.shown = false;
              event = (e) => {
                const target = e.target;
                if (target.checked) {
                  var _target$parentNode;
                  (_target$parentNode = target.parentNode) === null || _target$parentNode === void 0 || _target$parentNode.appendChild(target.subgroup);
                  if (target.type === "radio") {
                    const {
                      name
                    } = target;
                    const form = target.form;
                    const previous = form.names[name];
                    if (previous !== void 0) {
                      var _previous$parentNode;
                      (_previous$parentNode = previous.parentNode) === null || _previous$parentNode === void 0 || _previous$parentNode.removeChild(previous.subgroup);
                    }
                    form.names[name] = target;
                  }
                } else {
                  var _target$parentNode2;
                  (_target$parentNode2 = target.parentNode) === null || _target$parentNode2 === void 0 || _target$parentNode2.removeChild(target.subgroup);
                }
              };
              subnode.addEventListener("change", event, true);
              if (current.checked) {
                var _subnode$parentNode;
                (_subnode$parentNode = subnode.parentNode) === null || _subnode$parentNode === void 0 || _subnode$parentNode.appendChild(subgroup);
              }
            } else if (data.type === "radio") {
              event = (e) => {
                const target = e.target;
                if (target.checked) {
                  const {
                    name
                  } = target;
                  const form = target.form;
                  const previous = form.names[name];
                  if (previous !== void 0) {
                    var _previous$parentNode2;
                    (_previous$parentNode2 = previous.parentNode) === null || _previous$parentNode2 === void 0 || _previous$parentNode2.removeChild(previous.subgroup);
                  }
                  delete form.names[name];
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
          Morebits.checkboxShiftClickSupport(QuickForm.getElements(node, data.name));
        }
        break;
      // input is actually a text-type, so number here inherits the same stuff
      case "number":
      case "input":
        node = document.createElement("div");
        node.setAttribute("id", `div_${id}`);
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
          for (const att of ["min", "max", "step", "list"]) {
            if (data[att]) {
              subnode.setAttribute(att, String(data[att]));
            }
          }
        }
        for (const att of ["value", "size", "placeholder", "maxlength"]) {
          if (data[att]) {
            subnode.setAttribute(att, String(data[att]));
          }
        }
        for (const att of ["disabled", "required", "readonly"]) {
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
            const target = e.target;
            const newNode = new _QuickFormElement(target.sublist);
            target.area.appendChild(newNode.render());
            if (++target.counter >= target.max) {
              target.disabled = true;
            }
            e.stopPropagation();
          }
        });
        node.appendChild(more[0]);
        const moreButton = more[1];
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
          const elem = new _QuickFormElement(sublist);
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
          subnode.setAttribute("size", String(data.size));
        }
        if (data.maxlength) {
          subnode.setAttribute("maxlength", String(data.maxlength));
        }
        if (data.event) {
          subnode.addEventListener("keyup", data.event, false);
        }
        if (data.remove) {
          const remove = this.compute({
            type: "button",
            label: "移除",
            event: (e) => {
              const target = e.target;
              const list = target.listnode;
              const node_ = target.inputnode;
              const more = target.morebutton;
              list.removeChild(node_);
              --more.counter;
              more.removeAttribute("disabled");
              e.stopPropagation();
            }
          });
          node.appendChild(remove[0]);
          const removeButton = remove[1];
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
        node.setAttribute("id", `div_${id}`);
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
          subnode.setAttribute("cols", String(data.cols));
        }
        if (data.rows) {
          subnode.setAttribute("rows", String(data.rows));
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
        throw new Error(`Morebits.quickForm: unknown element type ${data.type.toString()}`);
    }
    childContainer || (childContainer = node);
    if (data.tooltip) {
      _QuickFormElement.generateTooltip(label || node, data);
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
      childContainer.className = childContainer.className ? `${childContainer.className} ${data.className}` : data.className;
    }
    childContainer.setAttribute("id", data.id || id);
    return [node, childContainer];
  }
  /**
   * Create a tooltip, implemented in plain jQuery (formerly jQuery UI tooltip).
   *
   * @param {HTMLElement} node - The HTML element beside which a tooltip is to be generated.
   * @param {QuickFormData} data - Tooltip-related configuration data.
   */
  static generateTooltip = (node, data) => {
    const tooltipText = data.tooltip;
    if (!tooltipText) {
      return;
    }
    const tooltipButton = node.appendChild(document.createElement("span"));
    tooltipButton.className = "morebits-tooltipButton";
    tooltipButton.setAttribute("aria-label", tooltipText);
    tooltipButton.appendChild(document.createTextNode("?"));
    let timer = 0;
    let tooltip = null;
    const removeTooltip = () => {
      window.clearTimeout(timer);
      if (tooltip) {
        tooltip.remove();
        tooltip = null;
      }
    };
    const showTooltip = () => {
      removeTooltip();
      const element = document.createElement("div");
      element.className = "morebits-ui-tooltip";
      element.textContent = tooltipText;
      document.body.appendChild(element);
      const buttonRect = tooltipButton.getBoundingClientRect();
      const tooltipRect = element.getBoundingClientRect();
      let top = buttonRect.bottom + 4;
      if (top + tooltipRect.height > window.innerHeight - 5) {
        top = Math.max(5, buttonRect.top - tooltipRect.height - 4);
      }
      const left = Math.min(Math.max(5, buttonRect.left + buttonRect.width / 2), window.innerWidth - tooltipRect.width - 5);
      element.style.left = `${left}px`;
      element.style.top = `${top}px`;
      tooltip = element;
    };
    $(tooltipButton).on({
      mouseenter: () => {
        timer = window.setTimeout(showTooltip, 400);
      },
      mouseleave: removeTooltip,
      click: removeTooltip
    });
  };
};
var QuickForm = class _QuickForm {
  root;
  constructor(event, eventType) {
    this.root = new QuickFormElement({
      type: "form",
      event,
      eventType
    });
  }
  /**
   * Renders the HTML output of the quickForm.
   *
   * @returns {HTMLElement}
   */
  render() {
    const ret = this.root.render();
    ret.names = {};
    return ret;
  }
  /**
   * Append element to the form.
   *
   * @param {(QuickFormData | QuickFormElement)} data - A quickform element, or the object with which
   * a quickform element is constructed.
   * @returns {QuickFormElement} - Same as what is passed to the function.
   */
  append(data) {
    return this.root.append(data);
  }
  static element = QuickFormElement;
  // Some utility methods for manipulating quickForms after their creation:
  // (None of these work for "dyninput" type fields at present)
  /**
   * Returns an object containing all filled form data entered by the user, with the object
   * keys being the form element names. Disabled fields will be ignored, but not hidden fields.
   *
   * @param {HTMLFormElement} form
   * @returns {Record<string, string | boolean | string[]>} With field names as keys, input data as values.
   */
  static getInputData = (form) => {
    const result = {};
    for (const field of Array.from(form.elements)) {
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
          if (field.dataset["single"]) {
            result[fieldNameNorm] = field.checked;
          } else {
            result[fieldNameNorm] || (result[fieldNameNorm] = []);
            if (field.checked) {
              const group = result[fieldNameNorm];
              group[group.length] = field.value;
            }
          }
          break;
        case "select-multiple":
          result[fieldNameNorm] = $(field).val();
          break;
        case "text":
        // falls through
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
    return result;
  };
  /**
   * Returns all form elements with a given field name or ID.
   *
   * @param {HTMLElement} form
   * @param {string} fieldName - The name or id of the fields.
   * @returns {HTMLElement[]} - Array of matching form elements.
   */
  static getElements = (form, fieldName) => {
    const $form = $(form);
    fieldName = $.escapeSelector(fieldName);
    let $elements = $form.find(`[name="${fieldName}"]`);
    if ($elements.length > 0) {
      return $elements.toArray();
    }
    $elements = $form.find(`#${fieldName}`);
    return $elements.toArray();
  };
  /**
   * Searches the array of elements for a checkbox or radio button with a certain
   * `value` attribute, and returns the first such element. Returns null if not found.
   *
   * @param {HTMLInputElement[]} elementArray - Array of checkbox or radio elements.
   * @param {string} value - Value to search for.
   * @returns {HTMLInputElement | null}
   */
  static getCheckboxOrRadio = (elementArray, value) => {
    const found = elementArray.filter((element) => {
      return element.value === value;
    });
    if (found.length > 0) {
      return found[0];
    }
    return null;
  };
  /**
   * Returns the &lt;div> containing the form element, or the form element itself
   * May not work as expected on checkboxes or radios.
   *
   * @param {HTMLElement} element
   * @returns {HTMLElement}
   */
  static getElementContainer = (element) => {
    if (element instanceof HTMLFieldSetElement || element instanceof HTMLDivElement || element instanceof HTMLHeadingElement) {
      return element;
    }
    return element.parentNode;
  };
  /**
   * Gets the HTML element that contains the label of the given form element
   * (mainly for internal use).
   *
   * @param {(HTMLElement | QuickFormElement)} element
   * @returns {HTMLElement | null}
   */
  static getElementLabelObject = (element) => {
    if (element.type === "button" || element.type === "submit" || element instanceof HTMLDivElement || element instanceof HTMLHeadingElement) {
      return element;
    } else if (element instanceof HTMLFieldSetElement) {
      return element.querySelector("legend");
    } else if (element instanceof HTMLTextAreaElement) {
      return element.parentNode.querySelector("h5");
    }
    return element.parentNode.querySelector("label");
  };
  /**
   * Gets the label text of the element.
   *
   * @param {(HTMLElement | QuickFormElement)} element
   * @returns {string | null}
   */
  static getElementLabel = (element) => {
    const labelElement = _QuickForm.getElementLabelObject(element);
    if (!labelElement) {
      return null;
    }
    return labelElement.firstChild.textContent;
  };
  /**
   * Sets the label of the element to the given text.
   *
   * @param {(HTMLElement | QuickFormElement)} element
   * @param {string} labelText
   * @returns {boolean} True if succeeded, false if the label element is unavailable.
   */
  static setElementLabel = (element, labelText) => {
    const labelElement = _QuickForm.getElementLabelObject(element);
    if (!labelElement) {
      return false;
    }
    labelElement.firstChild.textContent = labelText;
    return true;
  };
  /**
   * Stores the element's current label, and temporarily sets the label to the given text.
   *
   * @param {(HTMLElement | QuickFormElement)} element
   * @param {string} temporaryLabelText
   * @returns {boolean} `true` if succeeded, `false` if the label element is unavailable.
   */
  static overrideElementLabel = (element, temporaryLabelText) => {
    if (!element.hasAttribute("data-oldlabel")) {
      element.setAttribute("data-oldlabel", _QuickForm.getElementLabel(element));
    }
    return _QuickForm.setElementLabel(element, temporaryLabelText);
  };
  /**
   * Restores the label stored by overrideElementLabel.
   *
   * @param {(HTMLElement | QuickFormElement)} element
   * @returns {boolean | null} True if succeeded, false if the label element is unavailable.
   */
  static resetElementLabel = (element) => {
    if (element.hasAttribute("data-oldlabel")) {
      return _QuickForm.setElementLabel(element, element.getAttribute("data-oldlabel"));
    }
    return null;
  };
  /**
   * Shows or hides a form element plus its label and tooltip.
   *
   * @param {(HTMLElement | JQuery | string)} element - HTML/jQuery element, or jQuery selector string.
   * @param {boolean} [visibility] - Skip this to toggle visibility.
   */
  static setElementVisibility = (element, visibility) => {
    $(element).toggle(visibility);
  };
  /**
   * Shows or hides the question mark icon (which displays the tooltip) next to a form element.
   *
   * @param {(HTMLElement | JQuery)} element
   * @param {boolean} [visibility] - Skip this to toggle visibility.
   */
  static setElementTooltipVisibility = (element, visibility) => {
    $(_QuickForm.getElementContainer(element)).find(".morebits-tooltipButton").toggle(visibility);
  };
};
Morebits.quickForm = QuickForm;
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
      const option = options[i];
      if (option.selected) {
        if (option.values) {
          returnArray[returnArray.length] = option.values;
        } else {
          returnArray[returnArray.length] = option.value;
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
      const element = elements[i];
      if (element.checked) {
        if (type && element.type !== type) {
          continue;
        }
        if (element.values) {
          returnArray[returnArray.length] = element.values;
        } else {
          returnArray[returnArray.length] = element.value;
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
      const option = options[i];
      if (!option.selected) {
        if (option.values) {
          returnArray[returnArray.length] = option.values;
        } else {
          returnArray[returnArray.length] = option.value;
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
      const element = elements[i];
      if (!element.checked) {
        if (type && element.type !== type) {
          continue;
        }
        if (element.values) {
          returnArray[returnArray.length] = element.values;
        } else {
          returnArray[returnArray.length] = element.value;
        }
      }
    }
  }
  return returnArray;
};
var ip = {
  /**
   * Converts an IPv6 address to the canonical form stored and used by MediaWiki.
   * JavaScript translation of the {@link https://gerrit.wikimedia.org/r/plugins/gitiles/mediawiki/core/+/8eb6ac3e84ea3312d391ca96c12c49e3ad0753bb/includes/utils/IP.php#131|`IP::sanitizeIP()`}
   * function from the IPUtils library.  Addresses are verbose, uppercase,
   * normalized, and expanded to 8 words.
   *
   * @param {string} address - The IPv6 address, with or without CIDR.
   * @returns {string | null}
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
    if (abbrevPos !== -1) {
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
  isRange: (ip2) => {
    return mw.util.isIPAddress(ip2, true) && !mw.util.isIPAddress(ip2);
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
  validCIDR: (ip2) => {
    if (Morebits.ip.isRange(ip2)) {
      const match = ip2.match(/\/(\d{1,3})$/);
      const subnet = Number.parseInt(match[1], 10);
      if (subnet) {
        if (mw.util.isIPv6Address(ip2, true)) {
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
Morebits.ip = ip;
var string = {
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
   * @throws {Error} If the `start` and `end` strings aren't of the same length.
   * @throws {TypeError} If `skiplist` isn't an array or string
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
      for (const element of skiplist) {
        if (str.slice(i, i + element.length) === element) {
          i += element.length - 1;
          continue;
        }
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
        reason += ` ${sig}`;
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
  safeReplace: (string2, pattern, replacement) => {
    return string2.replace(pattern, replacement.replace(/\$/g, "$$$$"));
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
      return `${m[1]}秒`;
    }
    if ((m = time.match(/^\s*(\d+)\s*min(ute)?s?\s*$/)) !== null) {
      return `${m[1]}分`;
    }
    if ((m = time.match(/^\s*(\d+)\s*hours?\s*$/)) !== null) {
      return m[1] + uls("小时", "小時");
    }
    if ((m = time.match(/^\s*(\d+)\s*days?\s*$/)) !== null) {
      return `${m[1]}天`;
    }
    if ((m = time.match(/^\s*(\d+)\s*weeks?\s*$/)) !== null) {
      return m[1] + uls("周", "週");
    }
    if ((m = time.match(/^\s*(\d+)\s*months?\s*$/)) !== null) {
      return m[1] + uls("个月", "個月");
    }
    if ((m = time.match(/^\s*(\d+)\s*years?\s*$/)) !== null) {
      return `${m[1]}年`;
    }
    if (Morebits.string.isInfinity(time.trim())) {
      return uls("无限期", "無限期");
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
Morebits.string = string;
var array = {
  /**
   * Remove duplicated items from an array.
   *
   * @param {Array} arr
   * @returns {Array} A copy of the array with duplicates removed.
   * @throws {Array} When provided a non-array.
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
   * @throws {Array} When provided a non-array.
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
   * @throws {Array} When provided a non-array.
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
Morebits.array = array;
var Unbinder = class {
  /** The text being processed. */
  content;
  prefix;
  // %UNIQ::0.5955981644938324::
  postfix;
  // ::UNIQ%
  counter;
  // 0++
  history;
  // {}
  constructor(string2) {
    if (typeof string2 !== "string") {
      throw new TypeError("not a string");
    }
    this.content = string2;
    this.counter = 0;
    this.history = {};
    this.prefix = `%UNIQ::${Math.random()}::`;
    this.postfix = "::UNIQ%";
  }
  /**
   * Hide the region encapsulated by the `prefix` and `postfix` from
   * string processing.  `prefix` and `postfix` will be used in a
   * RegExp, so items that need escaping should be use `\\`.
   *
   * @param {string} prefix
   * @param {string} postfix
   * @throws {Error} If either `prefix` or `postfix` is missing.
   */
  unbind(prefix, postfix) {
    if (!prefix || !postfix) {
      throw new Error("Both prefix and postfix must be provided");
    }
    const re = new RegExp(`${prefix}([\\s\\S]*?)${postfix}`, "g");
    this.content = this.content.replace(re, Morebits.unbinder.getCallback(this));
  }
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
  }
  /**
   * @param {typeof Morebits} self
   * @memberof Morebits.unbinder
   */
  static getCallback(self) {
    return (match) => {
      const current = self.prefix + self.counter + self.postfix;
      self.history[current] = match;
      ++self.counter;
      return current;
    };
  }
};
Morebits.unbinder = Unbinder;
var MorebitsDate = class {
  _d;
  /**
   * Localized strings for date processing.
   *
   * @memberof Morebits.date
   * @type {object.<string, string>}
   * @property {string[]} months
   * @property {string[]} monthsShort
   * @property {string[]} days
   * @property {string[]} daysShort
   * @property {object.<string, string>} relativeTimes
   * @private
   */
  static localeData = {
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
  /**
   * Map units with getter/setter function names, for `add` and `subtract`
   * methods.
   *
   * @memberof Morebits.date
   * @type {object.<string, string>}
   * @property {string} seconds
   * @property {string} minutes
   * @property {string} hours
   * @property {string} days
   * @property {string} weeks
   * @property {string} months
   * @property {string} years
   */
  static unitMap = {
    seconds: "Seconds",
    minutes: "Minutes",
    hours: "Hours",
    days: "Date",
    weeks: "Week",
    // Not a function but handled in `add` through cunning use of multiplication
    months: "Month",
    years: "FullYear"
  };
  constructor(...args) {
    if (args.length === 1) {
      const [param] = args;
      if (/^\d{14}$/.test(String(param))) {
        const digitMatch = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/.exec(String(param));
        if (digitMatch) {
          this._d = new Date(Date.UTC(Number(digitMatch[1]), Number(digitMatch[2]) - 1, Number(digitMatch[3]), Number(digitMatch[4]), Number(digitMatch[5]), Number(digitMatch[6])));
        }
      } else if (typeof param === "string") {
        const dateParts = Morebits.l10n.signatureTimestampFormat(param);
        if (dateParts) {
          this._d = new Date(Reflect.apply(Date.UTC, void 0, dateParts));
        }
      }
    }
    this._d ?? (this._d = new Date(...args));
    if (!this.isValid()) {
      mw.log.warn("Invalid Morebits.date initialisation:", args);
    }
  }
  /** @returns {boolean} */
  isValid() {
    return !Number.isNaN(this.getTime());
  }
  /**
   * @param {(Date|Morebits.date)} date
   * @returns {boolean}
   */
  isBefore(date) {
    return this.getTime() < date.getTime();
  }
  /**
   * @param {(Date|Morebits.date)} date
   * @returns {boolean}
   */
  isAfter(date) {
    return this.getTime() > date.getTime();
  }
  /** @returns {string} */
  getUTCMonthName() {
    return Morebits.date.localeData.months[this.getUTCMonth()] ?? "";
  }
  /** @returns {string} */
  getUTCMonthNameAbbrev() {
    return Morebits.date.localeData.monthsShort[this.getUTCMonth()] ?? "";
  }
  /** @returns {string} */
  getMonthName() {
    return Morebits.date.localeData.months[this.getMonth()] ?? "";
  }
  /** @returns {string} */
  getMonthNameAbbrev() {
    return Morebits.date.localeData.monthsShort[this.getMonth()] ?? "";
  }
  /** @returns {string} */
  getUTCDayName() {
    return Morebits.date.localeData.days[this.getUTCDay()] ?? "";
  }
  /** @returns {string} */
  getUTCDayNameAbbrev() {
    return Morebits.date.localeData.daysShort[this.getUTCDay()] ?? "";
  }
  /** @returns {string} */
  getDayName() {
    return Morebits.date.localeData.days[this.getDay()] ?? "";
  }
  /** @returns {string} */
  getDayNameAbbrev() {
    return Morebits.date.localeData.daysShort[this.getDay()] ?? "";
  }
  /**
   * Add a given number of minutes, hours, days, weeks, months, or years to the date.
   * This is done in-place. The modified date object is also returned, allowing chaining.
   *
   * @param {number} number - Should be an integer.
   * @param {string} unit
   * @throws {TypeError} If invalid or unsupported unit is given.
   * @returns {Morebits.date}
   */
  add(number, unit) {
    let num = Number.parseInt(String(number), 10);
    if (Number.isNaN(num)) {
      throw new TypeError(`Invalid number "${number}" provided.`);
    }
    unit = unit.toLowerCase();
    const {
      unitMap
    } = Morebits.date;
    let unitNorm = unitMap[unit] || unitMap[`${unit}s`];
    if (unitNorm) {
      if (unitNorm === "Week") {
        unitNorm = "Date";
        num *= 7;
      }
      const getter = `get${unitNorm}`;
      const setter = `set${unitNorm}`;
      this[setter](this[getter]() + num);
      return this;
    }
    throw new Error(`Invalid unit "${unit}": Only ${Object.keys(unitMap).join(", ")} are allowed.`);
  }
  /**
   * Subtracts a given number of minutes, hours, days, weeks, months, or years to the date.
   * This is done in-place. The modified date object is also returned, allowing chaining.
   *
   * @param {number} number - Should be an integer.
   * @param {string} unit
   * @throws {Error} If invalid or unsupported unit is given.
   * @returns {Morebits.date}
   */
  subtract(number, unit) {
    return this.add(-number, unit);
  }
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
      return `00${num}`.toString().slice(0 - len);
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
    unbinder.unbind(String.raw`\[`, String.raw`\]`);
    unbinder.content = unbinder.content.replace(
      /* Regex notes:
       * d(d{2,3})? matches exactly 1, 3 or 4 occurrences of 'd' ('dd' is treated as a double match of 'd')
       * Y{1,2}(Y{2})? matches exactly 1, 2 or 4 occurrences of 'Y'
       */
      /H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|d(d{2,3})?|D{1,2}|M{1,4}|Y{1,2}(Y{2})?|A/g,
      (match) => {
        return String(replacementMap[match] ?? match);
      }
    );
    return unbinder.rebind().replace(/\[(.*?)\]/g, "$1");
  }
  /**
   * Gives a readable relative time string such as "Yesterday at 6:43 PM" or "Last Thursday at 11:45 AM".
   * Similar to `calendar` in moment.js, but with time zone support.
   *
   * @param {(string|number)} [zone=system] - 'system' (for browser-default time zone),
   * 'utc' (for UTC), or specify a time zone as number of minutes past UTC.
   * @returns {string}
   */
  calendar(zone) {
    const dateDiff = ((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0) - new Date(this.getTime()).setHours(0, 0, 0, 0)) / 864e5;
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
  }
  /**
   * Get a regular expression that matches wikitext section titles, such
   * as `==December 2019==` or `=== Jan 2018 ===`.
   *
   * @returns {RegExp}
   */
  monthHeaderRegex() {
    return new RegExp(`^(==+)\\s*${this.getUTCFullYear()}年(?:${this.getUTCMonthName()}|${this.getUTCMonthNameAbbrev()})\\s*\\1`, "mg");
  }
  /**
   * Creates a wikitext section header with the month and year.
   *
   * @param {number} [level=2] - Header level.  Pass 0 for just the text
   * with no wikitext markers (==).
   * @returns {string}
   */
  monthHeader(level) {
    level = Number.parseInt(String(level), 10);
    level = Number.isNaN(level) ? 2 : level;
    const header = "=".repeat(level);
    const text = `${this.getUTCFullYear()}年${this.getUTCMonthName()}`;
    if (header.length) {
      return `${header} ${text} ${header}`;
    }
    return text;
  }
};
var delegatedDateProto = {};
for (const func of Object.getOwnPropertyNames(Date.prototype)) {
  if (func !== "constructor" && !["add", "getDayName", "getMonthName"].includes(func)) {
    delegatedDateProto[func] = function(...args) {
      return this._d[func](...args);
    };
  }
}
Object.assign(MorebitsDate.prototype, delegatedDateProto);
Morebits.date = MorebitsDate;
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
      location.href = Morebits.wiki.actionCompleted.redirect;
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
var WikiApi = class {
  currentAction;
  onSuccess;
  onError;
  parent = window;
  // use global context if there is no parent object
  query;
  response = null;
  responseXML = null;
  // use `response` instead; retained for backwards compatibility
  statelem;
  // this non-standard name kept for backwards compatibility
  statusText = null;
  // result received from the API, normally "success" or "error"
  errorCode = null;
  // short text error code, if any, as documented in the MediaWiki API
  errorText = null;
  // full error description, if any
  badtokenRetry = false;
  constructor(currentAction, query, onSuccess, statusElement, onError) {
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
    this.onSuccess = onSuccess ?? null;
    this.onError = onError ?? null;
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
  }
  /**
   * Keep track of parent object for callbacks.
   *
   * @param {*} parent
   */
  setParent(parent) {
    this.parent = parent;
  }
  /** @param {Morebits.status} statusElement */
  setStatusElement(statusElement) {
    this.statelem = statusElement;
    this.statelem.status(this.currentAction);
  }
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
    for (const [i, val] of Object.entries(this.query)) {
      if (Array.isArray(val)) {
        queryStringArr[queryStringArr.length] = `${encodeURIComponent(i)}=${val.map(encodeURIComponent).join("|")}`;
      } else if (val !== void 0) {
        queryStringArr[queryStringArr.length] = `${encodeURIComponent(i)}=${encodeURIComponent(String(val))}`;
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
          var _jsonResponse$errors;
          const jsonResponse = response;
          this.errorCode = ((_jsonResponse$errors = jsonResponse.errors) === null || _jsonResponse$errors === void 0 || (_jsonResponse$errors = _jsonResponse$errors[0]) === null || _jsonResponse$errors === void 0 ? void 0 : _jsonResponse$errors.code) ?? null;
          if (this.query.errorformat === "html") {
            var _jsonResponse$errors2;
            this.errorText = ((_jsonResponse$errors2 = jsonResponse.errors) === null || _jsonResponse$errors2 === void 0 || (_jsonResponse$errors2 = _jsonResponse$errors2[0]) === null || _jsonResponse$errors2 === void 0 ? void 0 : _jsonResponse$errors2.html) ?? null;
          } else if (this.query.errorformat === "wikitext" || this.query.errorformat === "plaintext") {
            var _jsonResponse$errors3;
            this.errorText = ((_jsonResponse$errors3 = jsonResponse.errors) === null || _jsonResponse$errors3 === void 0 || (_jsonResponse$errors3 = _jsonResponse$errors3[0]) === null || _jsonResponse$errors3 === void 0 ? void 0 : _jsonResponse$errors3.text) ?? null;
          }
        } else {
          this.errorCode = $(response).find("errors error").eq(0).attr("code") ?? null;
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
        this.errorText = statusText + uls("在调用API时发生了错误“", "在呼叫API時發生了錯誤「") + error.statusText + uls("”。", "」。");
        return this.returnError();
      }
    );
  }
  returnError(callerAjaxParameters) {
    if (this.errorCode === "badtoken" && !this.badtokenRetry) {
      this.statelem.warn(uls("无效令牌，获取新的令牌并重试……", "無效權杖，取得新的權杖並重試……"));
      this.badtokenRetry = true;
      return Morebits.wiki.api.getToken().then((token) => {
        this.query.token = token;
        return this.post(callerAjaxParameters);
      });
    }
    this.statelem.error(`${this.errorText}（${this.errorCode}）`);
    if (this.onError) {
      this.onError.call(this.parent, this);
    }
    return $.Deferred().rejectWith(this.parent, [this]);
  }
  getStatusElement() {
    return this.statelem;
  }
  getErrorCode() {
    return this.errorCode;
  }
  getErrorText() {
    return this.errorText;
  }
  getXML() {
    return this.responseXML;
  }
  getResponse() {
    return this.response;
  }
  /**
   * Set the custom user agent header, which is used for server-side logging.
   * Note that doing so will set the useragent for every `Morebits.wiki.api`
   * process performed thereafter.
   *
   * @see {@link https://lists.wikimedia.org/pipermail/mediawiki-api-announce/2014-November/000075.html}
   * for original announcement.
   *
   * @memberof Morebits.wiki.api
   * @param {string} [ua=Qiuwen/1.1 (morebits.js)] - User agent.  The default
   * value of `morebits.js` will be appended to any provided
   * value.
   */
  static setApiUserAgent(ua) {
    morebitsWikiApiUserAgent = `Qiuwen/1.1 (morebits.js${ua ? `; ${ua}` : ""})`;
  }
  /**
   * Get a new CSRF token on encountering token errors.
   *
   * @memberof Morebits.wiki.api
   * @returns {string} MediaWiki CSRF token.
   */
  static getToken() {
    const tokenApi = new Morebits.wiki.api(uls("获取令牌", "取得權杖"), {
      action: "query",
      meta: "tokens",
      type: "csrf",
      format: "json"
    });
    return tokenApi.post().then((apiobj) => {
      return apiobj.response.query.tokens.csrftoken;
    });
  }
};
Morebits.wiki.api = WikiApi;
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
    const wikitext2 = response.query.pages[0].revisions[0].slots.main.content;
    return JSON.parse(wikitext2);
  });
};
var morebitsWikiApiUserAgent = "Qiuwen/1.1 (morebits.js)";
var morebitsWikiChangeTag = "";
var emptyFunction = () => {
};
var WikiPage = class {
  ctx;
  constructor(pageName, status) {
    status || (status = uls("打开页面“", "打開頁面「") + pageName + uls("”", "」"));
    this.ctx = {
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
  }
  /**
   * Loads the text for the page.
   *
   * @param {Function} onSuccess - Callback function which is called when the load has succeeded.
   * @param {Function} [onFailure] - Callback function which is called when the load fails.
   */
  load(onSuccess, onFailure) {
    this.ctx.onLoadSuccess = onSuccess ?? null;
    this.ctx.onLoadFailure = onFailure || emptyFunction;
    if (!onSuccess) {
      this.ctx.statusElement.error("Internal error: no onSuccess callback provided to load()!");
      this.ctx.onLoadFailure(this);
      return;
    }
    this.ctx.loadQuery = {
      action: "query",
      prop: "info|revisions",
      inprop: "watched",
      intestactions: "edit",
      // can be expanded
      curtimestamp: "",
      meta: "tokens",
      type: "csrf",
      titles: this.ctx.pageName,
      format: "json"
      // don't need rvlimit=1 because we don't need rvstartid here and only one actual rev is returned by default
    };
    if (this.ctx.editMode === "all") {
      this.ctx.loadQuery.rvprop = "content|timestamp";
    } else if (this.ctx.editMode === "revert") {
      this.ctx.loadQuery.rvprop = "timestamp";
      this.ctx.loadQuery.rvlimit = 1;
      this.ctx.loadQuery.rvstartid = this.ctx.revertOldID;
    }
    if (this.ctx.followRedirect) {
      this.ctx.loadQuery.redirects = "";
    }
    if (typeof this.ctx.pageSection === "number") {
      this.ctx.loadQuery.rvsection = this.ctx.pageSection;
    }
    if (Morebits.userIsSysop) {
      this.ctx.loadQuery.inprop += "|protection";
    }
    this.ctx.loadApi = new Morebits.wiki.api(uls("抓取页面……", "抓取頁面……"), this.ctx.loadQuery, this.fnLoadSuccess, this.ctx.statusElement, this.ctx.onLoadFailure);
    this.ctx.loadApi.setParent(this);
    this.ctx.loadApi.post();
  }
  /**
   * Saves the text for the page to Wikipedia.
   * Must be preceded by successfully calling `load()`.
   *
   * Warning: Calling `save()` can result in additional calls to the
   * previous `load()` callbacks to recover from edit conflicts! In this
   * case, callers must make the same edit to the new pageText and
   * re-invoke `save()`.  This behavior can be disabled with
   * `setMaxConflictRetries(0)`.
   *
   * @param {Function} [onSuccess] - Callback function which is called when the save has succeeded.
   * @param {Function} [onFailure] - Callback function which is called when the save fails.
   */
  save(onSuccess, onFailure) {
    this.ctx.onSaveSuccess = onSuccess ?? null;
    this.ctx.onSaveFailure = onFailure || emptyFunction;
    const canUseMwUserToken = this.fnCanUseMwUserToken("edit");
    if (!this.ctx.pageLoaded && !canUseMwUserToken) {
      this.ctx.statusElement.error("Internal error: attempt to save a page that has not been loaded!");
      this.ctx.onSaveFailure(this);
      return;
    }
    if (!this.ctx.editSummary) {
      if (this.ctx.editMode === "new" && this.ctx.newSectionTitle) {
        this.ctx.editSummary = "";
      } else {
        this.ctx.statusElement.error("Internal error: edit summary not set before save!");
        this.ctx.onSaveFailure(this);
        return;
      }
    }
    if (this.ctx.fullyProtected && !this.ctx.suppressProtectWarning && !confirm(this.ctx.fullyProtected === "infinity" ? uls("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + this.ctx.pageName + uls("”（无限期）。\n\n单击确定以确定，或单击取消以取消操作。", "」（無限期）。\n\n點擊確定以確定，或點擊取消以取消操作。") : `${uls("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + this.ctx.pageName + uls("”（到期：", "」（到期：") + new Morebits.date(this.ctx.fullyProtected).calendar("utc")} (UTC)）。

${uls("单击确定以确定，或单击取消以取消操作。", "點擊確定以確定，或點擊取消以取消操作。")}`)) {
      this.ctx.statusElement.error(uls("已取消对全保护页面的编辑。", "已取消對全保護頁面的編輯。"));
      this.ctx.onSaveFailure(this);
      return;
    }
    this.ctx.retries = 0;
    const query = {
      action: "edit",
      title: this.ctx.pageName,
      summary: this.ctx.editSummary,
      token: canUseMwUserToken ? mw.user.tokens.get("csrfToken") : this.ctx.csrfToken,
      watchlist: this.ctx.watchlistOption,
      format: "json"
    };
    if (this.ctx.changeTags) {
      query.tags = this.ctx.changeTags;
    }
    if (this.fnApplyWatchlistExpiry()) {
      query.watchlistexpiry = this.ctx.watchlistExpiry;
    }
    if (typeof this.ctx.pageSection === "number") {
      query.section = this.ctx.pageSection;
    }
    if (this.ctx.minorEdit) {
      query.minor = true;
    } else {
      query.notminor = true;
    }
    if (this.ctx.botEdit) {
      query.bot = true;
    }
    switch (this.ctx.editMode) {
      case "append":
        if (this.ctx.appendText === null) {
          this.ctx.statusElement.error("Internal error: append text not set before save!");
          this.ctx.onSaveFailure(this);
          return;
        }
        query.appendtext = this.ctx.appendText;
        break;
      case "prepend":
        if (this.ctx.prependText === null) {
          this.ctx.statusElement.error("Internal error: prepend text not set before save!");
          this.ctx.onSaveFailure(this);
          return;
        }
        query.prependtext = this.ctx.prependText;
        break;
      case "new":
        if (!this.ctx.newSectionText) {
          this.ctx.statusElement.error("Internal error: new section text not set before save!");
          this.ctx.onSaveFailure(this);
          return;
        }
        query.section = "new";
        query.text = this.ctx.newSectionText;
        query.sectiontitle = this.ctx.newSectionTitle || this.ctx.editSummary;
        break;
      case "revert":
        query.undo = this.ctx.revertCurID;
        query.undoafter = this.ctx.revertOldID;
        if (this.ctx.lastEditTime) {
          query.basetimestamp = this.ctx.lastEditTime;
        }
        query.starttimestamp = this.ctx.loadTime;
        break;
      default:
        query.text = this.ctx.pageText;
        if (this.ctx.lastEditTime) {
          query.basetimestamp = this.ctx.lastEditTime;
        }
        query.starttimestamp = this.ctx.loadTime;
        break;
    }
    if (this.ctx.createOption !== null && ["recreate", "createonly", "nocreate"].includes(this.ctx.createOption)) {
      query[this.ctx.createOption] = "";
    }
    if (canUseMwUserToken && this.ctx.followRedirect) {
      query.redirect = true;
    }
    this.ctx.saveApi = new Morebits.wiki.api(uls("保存页面……", "儲存頁面……"), query, this.fnSaveSuccess, this.ctx.statusElement, this.fnSaveError);
    this.ctx.saveApi.setParent(this);
    this.ctx.saveApi.post();
  }
  /**
   * Adds the text provided via `setAppendText()` to the end of the
   * page.  Does not require calling `load()` first, unless a watchlist
   * expiry is used.
   *
   * @param {Function} [onSuccess] - Callback function which is called when the method has succeeded.
   * @param {Function} [onFailure] - Callback function which is called when the method fails.
   */
  append(onSuccess, onFailure) {
    this.ctx.editMode = "append";
    if (this.fnCanUseMwUserToken("edit")) {
      this.save(onSuccess, onFailure);
    } else {
      this.ctx.onSaveSuccess = onSuccess ?? null;
      this.ctx.onSaveFailure = onFailure || emptyFunction;
      this.load(this.fnAutoSave, this.ctx.onSaveFailure);
    }
  }
  /**
   * Adds the text provided via `setPrependText()` to the start of the
   * page.  Does not require calling `load()` first, unless a watchlist
   * expiry is used.
   *
   * @param {Function}  [onSuccess] - Callback function which is called when the method has succeeded.
   * @param {Function}  [onFailure] - Callback function which is called when the method fails.
   */
  prepend(onSuccess, onFailure) {
    this.ctx.editMode = "prepend";
    if (this.fnCanUseMwUserToken("edit")) {
      this.save(onSuccess, onFailure);
    } else {
      this.ctx.onSaveSuccess = onSuccess ?? null;
      this.ctx.onSaveFailure = onFailure || emptyFunction;
      this.load(this.fnAutoSave, this.ctx.onSaveFailure);
    }
  }
  /**
   * Creates a new section with the text provided by `setNewSectionText()`
   * and section title from `setNewSectionTitle()`.
   * If `editSummary` is provided, that will be used instead of the
   * autogenerated "->Title (new section" edit summary.
   * Does not require calling `load()` first, unless a watchlist expiry
   * is used.
   *
   * @param {Function}  [onSuccess] - Callback function which is called when the method has succeeded.
   * @param {Function}  [onFailure] - Callback function which is called when the method fails.
   */
  newSection(onSuccess, onFailure) {
    this.ctx.editMode = "new";
    if (this.fnCanUseMwUserToken("edit")) {
      this.save(onSuccess, onFailure);
    } else {
      this.ctx.onSaveSuccess = onSuccess ?? null;
      this.ctx.onSaveFailure = onFailure || emptyFunction;
      this.load(this.fnAutoSave, this.ctx.onSaveFailure);
    }
  }
  /** @returns {string} The name of the loaded page, including the namespace */
  getPageName() {
    return this.ctx.pageName;
  }
  /** @returns {string} The text of the page after a successful load() */
  getPageText() {
    return this.ctx.pageText;
  }
  /** @param {string} pageText - Updated page text that will be saved when `save()` is called */
  setPageText(pageText) {
    this.ctx.editMode = "all";
    this.ctx.pageText = pageText;
  }
  /** @param {string} appendText - Text that will be appended to the page when `append()` is called */
  setAppendText(appendText) {
    this.ctx.editMode = "append";
    this.ctx.appendText = appendText;
  }
  /** @param {string} prependText - Text that will be prepended to the page when `prepend()` is called */
  setPrependText(prependText) {
    this.ctx.editMode = "prepend";
    this.ctx.prependText = prependText;
  }
  /** @param {string} newSectionText - Text that will be added in a new section on the page when `newSection()` is called */
  setNewSectionText(newSectionText) {
    this.ctx.editMode = "new";
    this.ctx.newSectionText = newSectionText;
  }
  /**
   * @param {string} newSectionTitle - Title for the new section created when `newSection()` is called
   * If missing, `ctx.editSummary` will be used. Issues may occur if a substituted template is used.
   */
  setNewSectionTitle(newSectionTitle) {
    this.ctx.editMode = "new";
    this.ctx.newSectionTitle = newSectionTitle;
  }
  // Edit-related setter methods:
  /**
   * Set the edit summary that will be used when `save()` is called.
   * Unnecessary if editMode is 'new' and newSectionTitle is provided.
   *
   * @param {string} summary
   */
  setEditSummary(summary) {
    this.ctx.editSummary = summary;
  }
  /**
   * Set any custom tag(s) to be applied to the API action.
   * A number of actions don't support it, most notably watch.
   *
   * @param {string|string[]} tags - String or array of tag(s).
   */
  setChangeTags(tags) {
    this.ctx.changeTags = tags;
  }
  /**
   * @param {string} [createOption=null] - Can take the following four values:
   * - recreate: create the page if it does not exist, or edit it if it exists.
   * - createonly: create the page if it does not exist, but return an
   * error if it already exists.
   * - nocreate: don't create the page, only edit it if it already exists.
   * - `null`: create the page if it does not exist, unless it was deleted
   * in the moment between loading the page and saving the edit (default).
   */
  setCreateOption(createOption) {
    this.ctx.createOption = createOption ?? null;
  }
  /** @param {boolean} minorEdit - Set true to mark the edit as a minor edit. */
  setMinorEdit(minorEdit) {
    this.ctx.minorEdit = minorEdit;
  }
  /** @param {boolean} botEdit - Set true to mark the edit as a bot edit */
  setBotEdit(botEdit) {
    this.ctx.botEdit = botEdit;
  }
  /**
   * @param {number} pageSection - Integer specifying the section number to load or save.
   * If specified as `null`, the entire page will be retrieved.
   */
  setPageSection(pageSection) {
    this.ctx.pageSection = pageSection;
  }
  /**
   * @param {number} maxConflictRetries - Number of retries for save errors involving an edit conflict or
   * loss of token. Default: 2.
   */
  setMaxConflictRetries(maxConflictRetries) {
    this.ctx.maxConflictRetries = maxConflictRetries;
  }
  /**
   * @param {number} maxRetries - Number of retries for save errors not involving an edit conflict or
   * loss of token. Default: 2.
   */
  setMaxRetries(maxRetries) {
    this.ctx.maxRetries = maxRetries;
  }
  /**
   * Set whether and how to watch the page, including setting an expiry.
   *
   * @param {boolean|string|Morebits.date|Date} [watchlistOption=false] -
   * Basically a mix of MW API and Twinkley options available pre-expiry:
   * - `true`|`'yes'`|`'watch'`: page will be added to the user's
   * watchlist when the action is called. Defaults to an indefinite
   * watch unless `watchlistExpiry` is provided.
   * - `false`|`'no'`|`'nochange'`: watchlist status of the page (including expiry) will not be changed.
   * - `'default'`|`'preferences'`: watchlist status of the page will be
   * set based on the user's preference settings when the action is
   * called. Defaults to an indefinite watch unless `watchlistExpiry` is
   * provided.
   * - `'unwatch'`: explicitly unwatch the page.
   * - Any other `string` or `number`, or a `Morebits.date` or `Date`
   * object: watch page until the specified time, deferring to
   * `watchlistExpiry` if provided.
   * @param {string|number|Morebits.date|Date} [watchlistExpiry=infinity] -
   * A date-like string or number, or a date object.  If a string or number,
   * can be relative (2 weeks) or other similarly date-like (i.e. NOT "potato"):
   * ISO 8601: 2038-01-09T03:14:07Z
   * MediaWiki: 20380109031407
   * UNIX: 2147483647
   * SQL: 2038-01-09 03:14:07
   * Can also be `infinity` or infinity-like (`infinite`, `indefinite`, and `never`).
   * See {@link https://phabricator.wikimedia.org/source/mediawiki-libs-Timestamp/browse/master/src/ConvertibleTimestamp.php;4e53b859a9580c55958078f46dd4f3a44d0fcaa0$57-109?as=source&blame=off}
   */
  setWatchlist(watchlistOption, watchlistExpiry) {
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
        this.ctx.watchlistOption = "nochange";
        this.ctx.watchlistExpiry = null;
        break;
      case "unwatch":
        this.ctx.watchlistOption = "unwatch";
        break;
      case "preferences":
      case "default":
        this.ctx.watchlistOption = "preferences";
        this.ctx.watchlistExpiry = watchlistExpiry;
        break;
      case "watch":
      case "yes":
      case true:
        this.ctx.watchlistOption = "watch";
        this.ctx.watchlistExpiry = watchlistExpiry;
        break;
      default:
        this.ctx.watchlistOption = "watch";
        this.ctx.watchlistExpiry = watchlistOption;
        break;
    }
  }
  /**
   * Set a watchlist expiry. setWatchlist can mostly handle this by
   * itself, so this is here largely for completeness and compatibility
   * with the full suite of options.
   *
   * @param {string|number|Morebits.date|Date} [watchlistExpiry=infinity] -
   * A date-like string or number, or a date object.  If a string or number,
   * can be relative (2 weeks) or other similarly date-like (i.e. NOT "potato"):
   * ISO 8601: 2038-01-09T03:14:07Z
   * MediaWiki: 20380109031407
   * UNIX: 2147483647
   * SQL: 2038-01-09 03:14:07
   * Can also be `infinity` or infinity-like (`infinite`, `indefinite`, and `never`).
   * See {@link https://phabricator.wikimedia.org/source/mediawiki-libs-Timestamp/browse/master/src/ConvertibleTimestamp.php;4e53b859a9580c55958078f46dd4f3a44d0fcaa0$57-109?as=source&blame=off}
   */
  setWatchlistExpiry(watchlistExpiry) {
    if (watchlistExpiry === void 0) {
      watchlistExpiry = "infinity";
    } else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
      watchlistExpiry = watchlistExpiry.toISOString();
    }
    this.ctx.watchlistExpiry = watchlistExpiry;
  }
  /**
   * @deprecated As of December 2020, use setWatchlist.
   * @param {boolean} [watchlistOption=false] -
   * - `True`: page watchlist status will be set based on the user's
   * preference settings when `save()` is called.
   * - `False`: watchlist status of the page will not be changed.
   *
   * Watchlist notes:
   * 1. The MediaWiki API value of 'unwatch', which explicitly removes
   * the page from the user's watchlist, is not used.
   * 2. If both `setWatchlist()` and `setWatchlistFromPreferences()` are
   * called, the last call takes priority.
   * 3. Twinkle modules should use the appropriate preference to set the watchlist options.
   * 4. Most Twinkle modules use `setWatchlist()`. `setWatchlistFromPreferences()`
   * is only needed for the few Twinkle watchlist preferences that
   * accept a string value of `default`.
   */
  setWatchlistFromPreferences(watchlistOption) {
    console.warn("[Morebits] NOTE: Morebits.wiki.page.setWatchlistFromPreferences was deprecated December 2020, please use setWatchlist");
    if (watchlistOption) {
      this.ctx.watchlistOption = "preferences";
    } else {
      this.ctx.watchlistOption = "nochange";
    }
  }
  /**
   * @param {boolean} [followRedirect=false] -
   * - `true`: a maximum of one redirect will be followed. In the event
   * of a redirect, a message is displayed to the user and the redirect
   * target can be retrieved with getPageName().
   * - `false`: (default) the requested pageName will be used without regard to any redirect.
   * @param {boolean} [followCrossNsRedirect=true] - Not applicable if `followRedirect` is not set true.
   * - `true`: (default) follow redirect even if it is a cross-namespace redirect
   * - `false`: don't follow redirect if it is cross-namespace, edit the redirect itself.
   */
  setFollowRedirect(followRedirect, followCrossNsRedirect) {
    if (this.ctx.pageLoaded) {
      this.ctx.statusElement.error("Internal error: cannot change redirect setting after the page has been loaded!");
      return;
    }
    this.ctx.followRedirect = followRedirect ?? false;
    this.ctx.followCrossNsRedirect = followCrossNsRedirect === void 0 ? this.ctx.followCrossNsRedirect : followCrossNsRedirect;
  }
  // lookup-creation setter function
  /**
   * @param {boolean} flag - If set true, the author and timestamp of
   * the first non-redirect version of the page is retrieved.
   *
   * Warning:
   * 1. If there are no revisions among the first 50 that are
   * non-redirects, or if there are less 50 revisions and all are
   * redirects, the original creation is retrieved.
   * 2. Revisions that the user is not privileged to access
   * (revdeled/suppressed) will be treated as non-redirects.
   * 3. Must not be used when the page has a non-wikitext contentmodel
   * such as Modulespace Lua or user JavaScript/CSS.
   */
  setLookupNonRedirectCreator(flag) {
    this.ctx.lookupNonRedirectCreator = flag;
  }
  // Move-related setter functions
  /** @param {string} destination */
  setMoveDestination(destination) {
    this.ctx.moveDestination = destination;
  }
  /** @param {boolean} flag */
  setMoveTalkPage(flag) {
    this.ctx.moveTalkPage = !!flag;
  }
  /** @param {boolean} flag */
  setMoveSubpages(flag) {
    this.ctx.moveSubpages = !!flag;
  }
  /** @param {boolean} flag */
  setMoveSuppressRedirect(flag) {
    this.ctx.moveSuppressRedirect = !!flag;
  }
  // Protect-related setter functions
  /**
   * @param {string} level - The right required for the specific action
   * e.g. sysop, templateeditor, autoconfirmed
   * @param {string} [expiry=infinity]
   */
  setEditProtection(level, expiry) {
    this.ctx.protectEdit = {
      level,
      expiry: expiry || "infinity"
    };
  }
  setMoveProtection(level, expiry) {
    this.ctx.protectMove = {
      level,
      expiry: expiry || "infinity"
    };
  }
  setCreateProtection(level, expiry) {
    this.ctx.protectCreate = {
      level,
      expiry: expiry || "infinity"
    };
  }
  setCascadingProtection(flag) {
    this.ctx.protectCascade = !!flag;
  }
  suppressProtectWarning() {
    this.ctx.suppressProtectWarning = true;
  }
  // Revert-related getters/setters:
  setOldID(oldID) {
    this.ctx.revertOldID = oldID;
  }
  /** @returns {string} The current revision ID of the page */
  getCurrentID() {
    return this.ctx.revertCurID;
  }
  /** @returns {string} Last editor of the page */
  getRevisionUser() {
    return this.ctx.revertUser;
  }
  /** @returns {string} ISO 8601 timestamp at which the page was last edited. */
  getLastEditTime() {
    return this.ctx.lastEditTime;
  }
  // Miscellaneous getters/setters:
  /**
   * Define an object for use in a callback function.
   *
   * `callbackParameters` is for use by the caller only. The parameters
   * allow a caller to pass the proper context into its callback
   * function.  Callers must ensure that any changes to the
   * callbackParameters object within a `load()` callback still permit a
   * proper re-entry into the `load()` callback if an edit conflict is
   * detected upon calling `save()`.
   *
   * @param {Object} callbackParameters
   */
  setCallbackParameters(callbackParameters) {
    this.ctx.callbackParameters = callbackParameters;
  }
  /**
   * @returns {Object} - The object previously set by `setCallbackParameters()`.
   */
  getCallbackParameters() {
    return this.ctx.callbackParameters;
  }
  /**
   * @param {Morebits.status} statusElement
   */
  setStatusElement(statusElement) {
    this.ctx.statusElement = statusElement;
  }
  /**
   * @returns {Morebits.status} Status element created by the constructor.
   */
  getStatusElement() {
    return this.ctx.statusElement;
  }
  /**
   * @returns {boolean} True if the page existed on the wiki when it was last loaded.
   */
  exists() {
    return this.ctx.pageExists;
  }
  /**
   * @returns {string} Page ID of the page loaded. 0 if the page doesn't
   * exist.
   */
  getPageID() {
    return this.ctx.pageID;
  }
  /**
   * @returns {string} - Content model of the page.  Possible values
   * include (but may not be limited to): `wikitext`, `javascript`,
   * `css`, `json`, `Scribunto`, `sanitized-css`, `MassMessageListContent`.
   * Also gettable via `mw.config.get('wgPageContentModel')`.
   */
  getContentModel() {
    return this.ctx.contentModel;
  }
  /**
   * @returns {boolean|string} - Watched status of the page. Boolean
   * unless it's being watched temporarily, in which case returns the
   * expiry string.
   */
  getWatched() {
    return this.ctx.watched;
  }
  /**
   * @returns {string} ISO 8601 timestamp at which the page was last loaded.
   */
  getLoadTime() {
    return this.ctx.loadTime;
  }
  /**
   * @returns {string} The user who created the page following `lookupCreation()`.
   */
  getCreator() {
    return this.ctx.creator;
  }
  /**
   * @returns {string} The ISOString timestamp of page creation following `lookupCreation()`.
   */
  getCreationTimestamp() {
    return this.ctx.timestamp;
  }
  /** @returns {boolean} whether or not you can edit the page */
  canEdit() {
    return !!this.ctx.testActions && this.ctx.testActions.includes("edit");
  }
  /**
   * Retrieves the username of the user who created the page as well as
   * the timestamp of creation.  The username can be retrieved using the
   * `getCreator()` function; the timestamp can be retrieved using the
   * `getCreationTimestamp()` function.
   * Prior to June 2019 known as `lookupCreator()`.
   *
   * @param {Function} onSuccess - Callback function to be called when
   * the username and timestamp are found within the callback.
   * @param {Function} [onFailure] - Callback function to be called when
   * the lookup fails
   */
  lookupCreation(onSuccess, onFailure) {
    this.ctx.onLookupCreationSuccess = onSuccess ?? null;
    this.ctx.onLookupCreationFailure = onFailure || emptyFunction;
    if (!onSuccess) {
      this.ctx.statusElement.error("Internal error: no onSuccess callback provided to lookupCreation()!");
      this.ctx.onLookupCreationFailure(this);
      return;
    }
    const query = {
      action: "query",
      prop: "revisions",
      titles: this.ctx.pageName,
      rvlimit: 1,
      rvprop: "user|timestamp",
      rvdir: "newer",
      format: "json"
    };
    if (this.ctx.lookupNonRedirectCreator) {
      query.rvsection = 0;
      query.rvprop += "|content";
    }
    if (this.ctx.followRedirect) {
      query.redirects = "";
    }
    this.ctx.lookupCreationApi = new Morebits.wiki.api(uls("抓取页面创建者信息", "抓取頁面建立者資訊"), query, this.fnLookupCreationSuccess, this.ctx.statusElement, this.ctx.onLookupCreationFailure);
    this.ctx.lookupCreationApi.setParent(this);
    this.ctx.lookupCreationApi.post();
  }
  /**
   * Reverts a page to `revertOldID` set by `setOldID`.
   *
   * @param {Function} [onSuccess] - Callback function to run on success.
   * @param {Function} [onFailure] - Callback function to run on failure.
   */
  revert(onSuccess, onFailure) {
    this.ctx.onSaveSuccess = onSuccess ?? null;
    this.ctx.onSaveFailure = onFailure || emptyFunction;
    if (!this.ctx.revertOldID) {
      this.ctx.statusElement.error("Internal error: revision ID to revert to was not set before revert!");
      this.ctx.onSaveFailure(this);
      return;
    }
    this.ctx.editMode = "revert";
    this.load(this.fnAutoSave, this.ctx.onSaveFailure);
  }
  /**
   * Moves a page to another title.
   *
   * @param {Function} [onSuccess] - Callback function to run on success.
   * @param {Function} [onFailure] - Callback function to run on failure.
   */
  move(onSuccess, onFailure) {
    this.ctx.onMoveSuccess = onSuccess ?? null;
    this.ctx.onMoveFailure = onFailure || emptyFunction;
    if (!this.fnPreflightChecks("move", this.ctx.onMoveFailure)) {
      return;
    }
    if (!this.ctx.moveDestination) {
      this.ctx.statusElement.error("Internal error: destination page name was not set before move!");
      this.ctx.onMoveFailure(this);
      return;
    }
    if (this.fnCanUseMwUserToken("move")) {
      this.fnProcessMove();
    } else {
      const query = this.fnNeedTokenInfoQuery("move");
      this.ctx.moveApi = new Morebits.wiki.api(uls("获取令牌……", "取得權杖……"), query, this.fnProcessMove, this.ctx.statusElement, this.ctx.onMoveFailure);
      this.ctx.moveApi.setParent(this);
      this.ctx.moveApi.post();
    }
  }
  /**
   * Marks the page as patrolled, using `rcid` (if available) or `revid`.
   *
   * Patrolling as such doesn't need to rely on loading the page in
   * question; simply passing a revid to the API is sufficient, so in
   * those cases just using {@link Morebits.wiki.api} is probably preferable.
   *
   * No error handling since we don't actually care about the errors.
   */
  patrol() {
    if (!Morebits.userIsSysop && !Morebits.userIsInGroup("patroller")) {
      return;
    }
    const $body = $("body");
    if ($body.find(".patrollink").length) {
      const patrolhref = $body.find(".patrollink a").attr("href");
      this.ctx.rcid = mw.util.getParamValue("rcid", patrolhref);
      this.fnProcessPatrol();
    } else {
      const patrolQuery = {
        action: "query",
        prop: "info",
        meta: "tokens",
        type: "patrol",
        // as long as we're querying, might as well get a token
        list: "recentchanges",
        // check if the page is unpatrolled
        titles: this.ctx.pageName,
        rcprop: "patrolled",
        rctitle: this.ctx.pageName,
        rclimit: 1,
        format: "json"
      };
      this.ctx.patrolApi = new Morebits.wiki.api(uls("获取令牌……", "取得權杖……"), patrolQuery, this.fnProcessPatrol);
      this.ctx.patrolApi.setParent(this);
      this.ctx.patrolApi.post();
    }
  }
  // |delete| is a reserved word in some flavours of JS
  /**
   * Deletes a page (for admins only).
   *
   * @param {Function} [onSuccess] - Callback function to run on success.
   * @param {Function} [onFailure] - Callback function to run on failure.
   */
  deletePage(onSuccess, onFailure) {
    this.ctx.onDeleteSuccess = onSuccess ?? null;
    this.ctx.onDeleteFailure = onFailure || emptyFunction;
    if (!this.fnPreflightChecks("delete", this.ctx.onDeleteFailure)) {
      return;
    }
    if (this.fnCanUseMwUserToken("delete")) {
      this.fnProcessDelete();
    } else {
      const query = this.fnNeedTokenInfoQuery("delete");
      this.ctx.deleteApi = new Morebits.wiki.api(uls("获取令牌……", "取得權杖……"), query, this.fnProcessDelete, this.ctx.statusElement, this.ctx.onDeleteFailure);
      this.ctx.deleteApi.setParent(this);
      this.ctx.deleteApi.post();
    }
  }
  /**
   * Undeletes a page (for admins only).
   *
   * @param {Function} [onSuccess] - Callback function to run on success.
   * @param {Function} [onFailure] - Callback function to run on failure.
   */
  undeletePage(onSuccess, onFailure) {
    this.ctx.onUndeleteSuccess = onSuccess ?? null;
    this.ctx.onUndeleteFailure = onFailure || emptyFunction;
    if (!this.fnPreflightChecks("undelete", this.ctx.onUndeleteFailure)) {
      return;
    }
    if (this.fnCanUseMwUserToken("undelete")) {
      this.fnProcessUndelete();
    } else {
      const query = this.fnNeedTokenInfoQuery("undelete");
      this.ctx.undeleteApi = new Morebits.wiki.api(uls("获取令牌……", "取得權杖……"), query, this.fnProcessUndelete, this.ctx.statusElement, this.ctx.onUndeleteFailure);
      this.ctx.undeleteApi.setParent(this);
      this.ctx.undeleteApi.post();
    }
  }
  /**
   * Protects a page (for admins only).
   *
   * @param {Function} [onSuccess] - Callback function to run on success.
   * @param {Function} [onFailure] - Callback function to run on failure.
   */
  protect(onSuccess, onFailure) {
    this.ctx.onProtectSuccess = onSuccess ?? null;
    this.ctx.onProtectFailure = onFailure || emptyFunction;
    if (!this.fnPreflightChecks("protect", this.ctx.onProtectFailure)) {
      return;
    }
    if (!this.ctx.protectEdit && !this.ctx.protectMove && !this.ctx.protectCreate) {
      this.ctx.statusElement.error("Internal error: you must set edit and/or move and/or create protection before calling protect()!");
      this.ctx.onProtectFailure(this);
      return;
    }
    const query = this.fnNeedTokenInfoQuery("protect");
    this.ctx.protectApi = new Morebits.wiki.api(uls("获取令牌……", "取得權杖……"), query, this.fnProcessProtect, this.ctx.statusElement, this.ctx.onProtectFailure);
    this.ctx.protectApi.setParent(this);
    this.ctx.protectApi.post();
  }
  /*
   * Private member functions
   * These are not exposed outside
   */
  /**
   * Determines whether we can save an API call by using the csrf token
   * sent with the page HTML, or whether we need to ask the server for
   * more info (e.g. protection or watchlist expiry).
   *
   * Currently used for `append`, `prepend`, `newSection`, `move`,
   * `deletePage`, and `undeletePage`. Not used for `protect`
   * since it always needs to request protection status.
   *
   * @param {string} [action=edit] - The action being undertaken, e.g.
   * "edit" or "delete". In practice, only "edit" or "notedit" matters.
   * @returns {boolean}
   */
  fnCanUseMwUserToken = (action) => {
    action || (action = "edit");
    if (this.ctx.watchlistExpiry && !Morebits.string.isInfinity(String(this.ctx.watchlistExpiry))) {
      return false;
    }
    if (this.ctx.followRedirect) {
      if (!this.ctx.followCrossNsRedirect) {
        return false;
      }
      if (action !== "edit" || this.ctx.editMode === "all" || this.ctx.editMode === "revert") {
        return false;
      }
    }
    if (Morebits.userIsSysop && !this.ctx.suppressProtectWarning) {
      if (new mw.Title(Morebits.pageNameNorm).getPrefixedText() !== new mw.Title(this.ctx.pageName).getPrefixedText()) {
        return false;
      }
      const editRestriction = mw.config.get("wgRestrictionEdit");
      if (!editRestriction || editRestriction.includes("sysop")) {
        return false;
      }
    }
    return !!mw.user.tokens.get("csrfToken");
  };
  /**
   * When functions can't use
   * {@link Morebits.wiki.page~fnCanUseMwUserToken|fnCanUseMwUserToken}
   * or require checking protection or watched status, maintain the query
   * in one place. Used for {@link Morebits.wiki.page#deletePage|delete},
   * {@link Morebits.wiki.page#undeletePage|undelete},
   * {@link* Morebits.wiki.page#protect|protect},
   * and {@link Morebits.wiki.page#move|move}
   * (basically, just not {@link Morebits.wiki.page#load|load}).
   *
   * @param {string} action - The action being undertaken, e.g. "edit" or
   * "delete".
   * @returns {Object} Appropriate query.
   */
  fnNeedTokenInfoQuery = (action) => {
    const query = {
      action: "query",
      meta: "tokens",
      type: "csrf",
      titles: this.ctx.pageName,
      prop: "info",
      inprop: "watched",
      format: "json"
    };
    if (action !== "move" || Morebits.userIsSysop) {
      query.inprop += "|protection";
    }
    if (this.ctx.followRedirect && action !== "undelete") {
      query.redirects = "";
    }
    return query;
  };
  // callback from loadSuccess() for append(), prepend(), and newSection() threads
  fnAutoSave = (pageobj) => {
    pageobj.save(this.ctx.onSaveSuccess, this.ctx.onSaveFailure);
  };
  // callback from loadApi.post()
  fnLoadSuccess = () => {
    const response = this.ctx.loadApi.getResponse().query;
    if (!this.fnCheckPageName(response, this.ctx.onLoadFailure)) {
      return;
    }
    const [page] = response.pages;
    let rev;
    this.ctx.pageExists = !page.missing;
    if (this.ctx.pageExists) {
      [rev] = page.revisions;
      this.ctx.lastEditTime = rev.timestamp;
      this.ctx.pageText = rev.content;
      this.ctx.pageID = page.pageid;
    } else {
      this.ctx.pageText = "";
      this.ctx.pageID = 0;
    }
    this.ctx.csrfToken = response.tokens.csrftoken;
    if (!this.ctx.csrfToken) {
      this.ctx.statusElement.error(uls("未能获取编辑令牌。", "未能取得編輯權杖。"));
      this.ctx.onLoadFailure(this);
      return;
    }
    this.ctx.loadTime = this.ctx.loadApi.getResponse().curtimestamp;
    if (!this.ctx.loadTime) {
      this.ctx.statusElement.error(uls("未能获取当前时间戳。", "未能取得當前時間戳。"));
      this.ctx.onLoadFailure(this);
      return;
    }
    this.ctx.contentModel = page.contentmodel;
    this.ctx.watched = page.watchlistexpiry || page.watched || false;
    if (Morebits.userIsSysop) {
      const editProt = page.protection.findLast((pr) => {
        return pr.type === "edit" && pr.level === "sysop";
      });
      if (editProt) {
        this.ctx.fullyProtected = editProt.expiry;
      } else {
        this.ctx.fullyProtected = false;
      }
    }
    this.ctx.revertCurID = page.lastrevid ?? null;
    const testactions = page.actions;
    this.ctx.testActions = [];
    for (const action of Object.keys(testactions ?? {})) {
      if (testactions !== null && testactions !== void 0 && testactions[action]) {
        this.ctx.testActions[this.ctx.testActions.length] = action;
      }
    }
    if (this.ctx.editMode === "revert") {
      this.ctx.revertCurID = rev && rev.revid || null;
      if (!this.ctx.revertCurID) {
        this.ctx.statusElement.error(uls("未能获取当前修订版本ID。", "未能取得目前修訂版本ID。"));
        this.ctx.onLoadFailure(this);
        return;
      }
      this.ctx.revertUser = rev && rev.user || null;
      if (!this.ctx.revertUser) {
        if (rev && rev.userhidden) {
          this.ctx.revertUser = uls("<用户名已隐藏>", "<使用者名稱已隱藏>");
        } else {
          this.ctx.statusElement.error(uls("未能获取此修订版本的编辑者。", "未能取得此修訂版本的編輯者。"));
          this.ctx.onLoadFailure(this);
          return;
        }
      }
      this.ctx.editSummary = `[[QW:UNDO|撤销]]由 ${this.ctx.revertUser} 所做出的${uls("修订 ", "修訂 ")}${this.ctx.revertOldID}：${this.ctx.editSummary}`;
    }
    this.ctx.pageLoaded = true;
    this.ctx.onLoadSuccess(this);
  };
  // helper function to parse the page name returned from the API
  fnCheckPageName = (response, onFailure) => {
    const page = response.pages && response.pages[0];
    if (page) {
      if (page.invalid) {
        this.ctx.statusElement.error(uls("标题不合法：", `標題不合法：${this.ctx.pageName}`));
        onFailure(this);
        return false;
      }
      const resolvedName = page.title;
      if (response.redirects) {
        const origNs = new mw.Title(this.ctx.pageName).getNamespaceId();
        const newNs = new mw.Title(resolvedName).getNamespaceId();
        if (origNs !== newNs && !this.ctx.followCrossNsRedirect) {
          this.ctx.statusElement.error(this.ctx.pageName + uls("是跨命名空间重定向到", "是跨命名空間重新導向到") + resolvedName + uls("，略过", "，略過"));
          onFailure(this);
          return false;
        }
        new Morebits.status(uls("信息", "資訊"), uls("从 ", "從 ") + this.ctx.pageName + uls(" 重定向到 ", " 重新導向到 ") + resolvedName);
      }
      this.ctx.pageName = resolvedName;
    } else {
      this.ctx.statusElement.error(uls("不能解析页面的重定向：", "不能解析頁面的重新導向：") + this.ctx.pageName);
      onFailure(this);
      ++Morebits.wiki.numberOfActionsLeft;
      return false;
    }
    return true;
  };
  /**
   * Determine whether we should provide a watchlist expiry.  Will not
   * do so if the page is currently permanently watched, or the current
   * expiry is *after* the new, provided expiry.  Only handles strings
   * recognized by {@link Morebits.date} or relative timeframes with
   * unit it can process.  Relies on the fact that fnCanUseMwUserToken
   * requires page loading if a watchlistexpiry is provided, so we are
   * ensured of knowing the watch status by the use of this.
   *
   * @returns {boolean}
   */
  fnApplyWatchlistExpiry = () => {
    if (this.ctx.watchlistExpiry) {
      if (!this.ctx.watched || Morebits.string.isInfinity(String(this.ctx.watchlistExpiry))) {
        return true;
      } else if (typeof this.ctx.watched === "string") {
        let newExpiry;
        const rel = String(this.ctx.watchlistExpiry).split(" ");
        try {
          newExpiry = new Morebits.date().add(rel[0] ?? "", rel[1] ?? "");
        } catch {
          newExpiry = new Morebits.date(this.ctx.watchlistExpiry);
        }
        if (newExpiry.isValid()) {
          if (newExpiry.isAfter(new Morebits.date(this.ctx.watched))) {
            return true;
          }
        } else {
          return true;
        }
      }
    }
    return false;
  };
  // callback from saveApi.post()
  fnSaveSuccess = () => {
    this.ctx.editMode = "all";
    const response = this.ctx.saveApi.getResponse();
    if (response.edit.result === "Success") {
      const link = document.createElement("a");
      link.setAttribute("href", mw.util.getUrl(this.ctx.pageName));
      link.appendChild(document.createTextNode(this.ctx.pageName));
      this.ctx.statusElement.info(["完成（", link, "）"]);
      if (this.ctx.onSaveSuccess) {
        this.ctx.onSaveSuccess(this);
      }
      return;
    }
    if (response.edit.captcha) {
      this.ctx.statusElement.error(uls("不能保存页面，因服务器要求您输入验证码。", "不能儲存頁面，因伺服器要求您輸入驗證碼。"));
    } else {
      this.ctx.statusElement.error(uls("保存页面时由API得到未知错误", "儲存頁面時由API得到未知錯誤"));
    }
    ++Morebits.wiki.numberOfActionsLeft;
    this.ctx.onSaveFailure(this);
  };
  // callback from saveApi.post()
  fnSaveError = () => {
    const errorCode = this.ctx.saveApi.getErrorCode();
    if (errorCode === "editconflict" && this.ctx.conflictRetries++ < this.ctx.maxConflictRetries) {
      const purgeQuery = {
        action: "purge",
        titles: this.ctx.pageName
        // redirects are already resolved
      };
      const purgeApi = new Morebits.wiki.api(uls("检测到编辑冲突，正在更新服务器缓存", "檢測到編輯衝突，正在更新伺服器快取"), purgeQuery, () => {
        --Morebits.wiki.numberOfActionsLeft;
        this.ctx.statusElement.info(uls("检测到编辑冲突，重试修改", "檢測到編輯衝突，重試修改"));
        if (this.fnCanUseMwUserToken("edit")) {
          this.ctx.saveApi.post();
        } else {
          this.ctx.loadApi.post();
        }
      }, this.ctx.statusElement);
      purgeApi.post();
    } else if ((errorCode === null || errorCode === void 0) && this.ctx.retries++ < this.ctx.maxRetries) {
      this.ctx.statusElement.info(uls("保存失败，在2秒后重试……", "儲存失敗，在2秒後重試……"));
      --Morebits.wiki.numberOfActionsLeft;
      this.sleep(2e3).then(() => {
        this.ctx.saveApi.post();
      });
    } else {
      const response = this.ctx.saveApi.getResponse();
      const errorData = response.error || // bc error format
      response.errors[0].data;
      switch (errorCode) {
        case "protectedpage":
          this.ctx.statusElement.error(uls("不能保存修改：页面被保护", "不能儲存修改：頁面被保護"));
          break;
        case "abusefilter-disallowed":
          this.ctx.statusElement.error(uls("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「") + errorData.abusefilter.description + uls("”阻止。若您认为您的该次编辑是有意义的，请至 Qiuwen_talk:管理员告示板 提报。", "」阻止。若您認為您的該次編輯是有意義的，請至 Qiuwen_talk:管理員告示板 提報。"));
          break;
        case "abusefilter-warning":
          this.ctx.statusElement.error([uls("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「"), errorData.abusefilter.description, uls("”警告，若您仍希望做出该编辑，请尝试重新提交，根据过滤器的设置您可能可以作出此编辑。", "」警告，若您仍希望做出該編輯，請嘗試重新提交，根據過濾器的設定您可能可以作出此編輯。")]);
          break;
        case "spamblacklist": {
          const [spam] = errorData.spamblacklist.matches;
          this.ctx.statusElement.error(uls("不能保存页面，因URL ", "不能儲存頁面，因URL ") + spam + uls(" 在垃圾链接黑名单中。", " 在垃圾連結黑名單中。"));
          break;
        }
        default:
          this.ctx.statusElement.error(uls("不能保存修改：", "不能儲存修改：") + this.ctx.saveApi.getErrorText());
      }
      this.ctx.editMode = "all";
      if (this.ctx.onSaveFailure) {
        this.ctx.onSaveFailure(this);
      }
    }
  };
  isTextRedirect = (text) => {
    if (!text) {
      return false;
    }
    return Morebits.l10n.redirectTagAliases.some((tag) => {
      return new RegExp(`^\\s*${tag}\\W`, "i").test(text);
    });
  };
  fnLookupCreationSuccess = () => {
    const response = this.ctx.lookupCreationApi.getResponse().query;
    if (!this.fnCheckPageName(response, this.ctx.onLookupCreationFailure)) {
      return;
    }
    const rev = response.pages[0].revisions && response.pages[0].revisions[0];
    if (!rev) {
      this.ctx.statusElement.error(uls("无法找到", "無法找到") + this.ctx.pageName + uls("的任何修订版本", "的任何修訂版本"));
      this.ctx.onLookupCreationFailure(this);
      return;
    }
    if (!this.ctx.lookupNonRedirectCreator || !this.isTextRedirect(rev.content)) {
      this.ctx.creator = rev.user;
      if (!this.ctx.creator) {
        this.ctx.statusElement.error(uls("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
        this.ctx.onLookupCreationFailure(this);
        return;
      }
      this.ctx.timestamp = rev.timestamp;
      if (!this.ctx.timestamp) {
        this.ctx.statusElement.error(uls("无法获取页面创建时间", "無法取得頁面建立時間"));
        this.ctx.onLookupCreationFailure(this);
        return;
      }
      this.ctx.statusElement.info(uls("已获取页面创建信息", "已取得頁面建立資訊"));
      this.ctx.onLookupCreationSuccess(this);
    } else {
      this.ctx.lookupCreationApi.query["rvlimit"] = 50;
      this.ctx.lookupCreationApi.query["titles"] = this.ctx.pageName;
      this.ctx.lookupCreationApi = new Morebits.wiki.api(uls("获取页面创建信息", "取得頁面建立資訊"), this.ctx.lookupCreationApi.query, this.fnLookupNonRedirectCreator, this.ctx.statusElement, this.ctx.onLookupCreationFailure);
      this.ctx.lookupCreationApi.setParent(this);
      this.ctx.lookupCreationApi.post();
    }
  };
  fnLookupNonRedirectCreator = () => {
    const response = this.ctx.lookupCreationApi.getResponse().query;
    const revs = response.pages[0].revisions;
    for (const rev of revs) {
      if (!this.isTextRedirect(rev.content)) {
        this.ctx.creator = rev.user;
        this.ctx.timestamp = rev.timestamp;
        break;
      }
    }
    if (!this.ctx.creator) {
      this.ctx.creator = revs[0].user;
      this.ctx.timestamp = revs[0].timestamp;
      if (!this.ctx.creator) {
        this.ctx.statusElement.error(uls("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
        this.ctx.onLookupCreationFailure(this);
        return;
      }
    }
    if (!this.ctx.timestamp) {
      this.ctx.statusElement.error(uls("无法获取页面创建时间", "無法取得頁面建立時間"));
      this.ctx.onLookupCreationFailure(this);
      return;
    }
    this.ctx.statusElement.info(uls("已获取页面创建信息", "已取得頁面建立資訊"));
    this.ctx.onLookupCreationSuccess(this);
  };
  /**
   * Common checks for action methods. Used for move, undelete, delete,
   * protect.
   *
   * @param {string} action - The action being checked.
   * @param {string} onFailure - Failure callback.
   * @returns {boolean}
   */
  fnPreflightChecks = (action, onFailure) => {
    if (!Morebits.userIsSysop && action !== "move") {
      this.ctx.statusElement.error(uls("无法对页面进行“", "無法對頁面進行「") + action + uls("”操作：只有管理员可以进行此操作", "」操作：只有管理員可以進行此操作"));
      onFailure(this);
      return false;
    }
    if (!this.ctx.editSummary) {
      this.ctx.statusElement.error(`Internal error: ${action} reason not set (use setEditSummary function)!`);
      onFailure(this);
      return false;
    }
    return true;
  };
  /**
   * Common checks for fnProcess functions (`fnProcessDelete`, `fnProcessMove`, etc.
   * Used for move, undelete, delete, protect.
   *
   * @param {string} action - The action being checked.
   * @param {string} onFailure - Failure callback.
   * @param {string} response - The response document from the API call.
   * @returns {boolean}
   */
  fnProcessChecks = (action, onFailure, response) => {
    const [{
      missing
    }] = response.pages;
    const actionMissing = missing && ["delete", "move"].includes(action);
    const protectMissing = action === "protect" && missing && (this.ctx.protectEdit || this.ctx.protectMove);
    const saltMissing = action === "protect" && !missing && this.ctx.protectCreate;
    if (actionMissing || protectMissing || saltMissing) {
      this.ctx.statusElement.error(`${uls("无法对页面进行“", "無法對頁面進行「") + action + uls("”操作，因为页面", "」操作，因為頁面") + (missing ? "已不" : uls("已经", "已經"))}存在`);
      onFailure(this);
      return false;
    }
    let editprot;
    if (action === "undelete") {
      editprot = response.pages[0].protection.findLast((pr) => {
        return pr.type === "create" && pr.level === "sysop";
      });
    } else if (action === "delete" || action === "move") {
      editprot = response.pages[0].protection.findLast((pr) => {
        return pr.type === "edit" && pr.level === "sysop";
      });
    }
    if (editprot && !this.ctx.suppressProtectWarning && !confirm(uls("您即将对全保护页面“", "您即將對全保護頁面「") + this.ctx.pageName + (editprot.expiry === "infinity" ? uls("”（永久）", "」（永久）") : `${uls("”（到期：", "」（到期：") + new Morebits.date(editprot.expiry).calendar("utc")} (UTC)）`) + uls("”进行“", "」進行「") + action + uls("”操作", "」操作") + uls("。\n\n单击确定以继续操作，或单击取消以取消操作。", "。\n\n點擊確定以繼續操作，或點擊取消以取消操作。"))) {
      this.ctx.statusElement.error(uls("已取消对全保护页面的操作。", "已取消對全保護頁面的操作。"));
      onFailure(this);
      return false;
    }
    if (!response.tokens.csrftoken) {
      this.ctx.statusElement.error(uls("无法获取令牌。", "無法取得權杖。"));
      onFailure(this);
      return false;
    }
    return true;
  };
  fnProcessMove = () => {
    let pageTitle;
    let token;
    if (this.fnCanUseMwUserToken("move")) {
      token = mw.user.tokens.get("csrfToken");
      pageTitle = this.ctx.pageName;
    } else {
      const response = this.ctx.moveApi.getResponse().query;
      if (!this.fnProcessChecks("move", this.ctx.onMoveFailure, response)) {
        return;
      }
      token = response.tokens.csrftoken;
      const [page] = response.pages;
      pageTitle = page.title;
      this.ctx.watched = page.watchlistexpiry || page.watched || false;
    }
    const query = {
      action: "move",
      from: pageTitle,
      to: this.ctx.moveDestination,
      token,
      reason: this.ctx.editSummary,
      watchlist: this.ctx.watchlistOption,
      format: "json"
    };
    if (this.ctx.changeTags) {
      query.tags = this.ctx.changeTags;
    }
    if (this.fnApplyWatchlistExpiry()) {
      query.watchlistexpiry = this.ctx.watchlistExpiry;
    }
    if (this.ctx.moveTalkPage) {
      query.movetalk = "true";
    }
    if (this.ctx.moveSubpages) {
      query.movesubpages = "true";
    }
    if (this.ctx.moveSuppressRedirect) {
      query.noredirect = "true";
    }
    this.ctx.moveProcessApi = new Morebits.wiki.api(uls("移动页面……", "移動頁面……"), query, this.ctx.onMoveSuccess, this.ctx.statusElement, this.ctx.onMoveFailure);
    this.ctx.moveProcessApi.setParent(this);
    this.ctx.moveProcessApi.post();
  };
  fnProcessPatrol = () => {
    const query = {
      action: "patrol",
      format: "json"
    };
    if (this.ctx.rcid) {
      query.rcid = this.ctx.rcid;
      query.token = mw.user.tokens.get("patrolToken");
    } else {
      const response = this.ctx.patrolApi.getResponse().query;
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
    if (this.ctx.changeTags) {
      query.tags = this.ctx.changeTags;
    }
    const patrolStat = new Morebits.status(uls("标记页面为已巡查", "標記頁面為已巡查"));
    this.ctx.patrolProcessApi = new Morebits.wiki.api(uls("巡查页面……", "巡查頁面……"), query, null, patrolStat);
    this.ctx.patrolProcessApi.setParent(this);
    this.ctx.patrolProcessApi.post();
  };
  fnProcessDelete = () => {
    let pageTitle;
    let token;
    if (this.fnCanUseMwUserToken("delete")) {
      token = mw.user.tokens.get("csrfToken");
      pageTitle = this.ctx.pageName;
    } else {
      const response = this.ctx.deleteApi.getResponse().query;
      if (!this.fnProcessChecks("delete", this.ctx.onDeleteFailure, response)) {
        return;
      }
      token = response.tokens.csrftoken;
      const [page] = response.pages;
      pageTitle = page.title;
      this.ctx.watched = page.watchlistexpiry || page.watched || false;
    }
    const query = {
      action: "delete",
      title: pageTitle,
      token,
      reason: this.ctx.editSummary,
      watchlist: this.ctx.watchlistOption,
      format: "json"
    };
    if (this.ctx.changeTags) {
      query.tags = this.ctx.changeTags;
    }
    if (this.fnApplyWatchlistExpiry()) {
      query.watchlistexpiry = this.ctx.watchlistExpiry;
    }
    this.ctx.deleteProcessApi = new Morebits.wiki.api(uls("删除页面……", "刪除頁面……"), query, this.ctx.onDeleteSuccess, this.ctx.statusElement, this.fnProcessDeleteError);
    this.ctx.deleteProcessApi.setParent(this);
    this.ctx.deleteProcessApi.post();
  };
  // callback from deleteProcessApi.post()
  fnProcessDeleteError = () => {
    const errorCode = this.ctx.deleteProcessApi.getErrorCode();
    if (errorCode === "internal_api_error_DBQueryError" && this.ctx.retries++ < this.ctx.maxRetries) {
      this.ctx.statusElement.info(uls("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
      --Morebits.wiki.numberOfActionsLeft;
      this.ctx.deleteProcessApi.post();
    } else if (errorCode === "missingtitle") {
      this.ctx.statusElement.error(uls("不能删除页面，因其已不存在", "不能刪除頁面，因其已不存在"));
      if (this.ctx.onDeleteFailure) {
        this.ctx.onDeleteFailure.call(this, this.ctx.deleteProcessApi);
      }
    } else {
      this.ctx.statusElement.error(uls("无法删除页面：", "無法刪除頁面：") + this.ctx.deleteProcessApi.getErrorText());
      if (this.ctx.onDeleteFailure) {
        this.ctx.onDeleteFailure.call(this, this.ctx.deleteProcessApi);
      }
    }
  };
  fnProcessUndelete = () => {
    let pageTitle;
    let token;
    if (this.fnCanUseMwUserToken("undelete")) {
      token = mw.user.tokens.get("csrfToken");
      pageTitle = this.ctx.pageName;
    } else {
      const response = this.ctx.undeleteApi.getResponse().query;
      if (!this.fnProcessChecks("undelete", this.ctx.onUndeleteFailure, response)) {
        return;
      }
      token = response.tokens.csrftoken;
      const [page] = response.pages;
      pageTitle = page.title;
      this.ctx.watched = page.watchlistexpiry || page.watched || false;
    }
    const query = {
      action: "undelete",
      title: pageTitle,
      token,
      reason: this.ctx.editSummary,
      watchlist: this.ctx.watchlistOption,
      format: "json"
    };
    if (this.ctx.changeTags) {
      query.tags = this.ctx.changeTags;
    }
    if (this.fnApplyWatchlistExpiry()) {
      query.watchlistexpiry = this.ctx.watchlistExpiry;
    }
    this.ctx.undeleteProcessApi = new Morebits.wiki.api(uls("还原页面……", "還原頁面……"), query, this.ctx.onUndeleteSuccess, this.ctx.statusElement, this.fnProcessUndeleteError);
    this.ctx.undeleteProcessApi.setParent(this);
    this.ctx.undeleteProcessApi.post();
  };
  // callback from undeleteProcessApi.post()
  fnProcessUndeleteError = () => {
    const errorCode = this.ctx.undeleteProcessApi.getErrorCode();
    if (errorCode === "internal_api_error_DBQueryError") {
      if (this.ctx.retries++ < this.ctx.maxRetries) {
        this.ctx.statusElement.info(uls("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
        --Morebits.wiki.numberOfActionsLeft;
        this.ctx.undeleteProcessApi.post();
      } else {
        this.ctx.statusElement.error(uls("持续的数据库查询错误，重新加载页面并重试", "持續的資料庫查詢錯誤，重新載入頁面並重試"));
        if (this.ctx.onUndeleteFailure) {
          this.ctx.onUndeleteFailure.call(this, this.ctx.undeleteProcessApi);
        }
      }
    } else if (errorCode === "cantundelete") {
      this.ctx.statusElement.error(uls("无法还原删除页面，因没有版本供还原或已被还原", "無法還原刪除頁面，因沒有版本供還原或已被還原"));
      if (this.ctx.onUndeleteFailure) {
        this.ctx.onUndeleteFailure.call(this, this.ctx.undeleteProcessApi);
      }
    } else {
      this.ctx.statusElement.error(uls("无法还原页面：", "無法還原頁面：") + this.ctx.undeleteProcessApi.getErrorText());
      if (this.ctx.onUndeleteFailure) {
        this.ctx.onUndeleteFailure.call(this, this.ctx.undeleteProcessApi);
      }
    }
  };
  fnProcessProtect = () => {
    const response = this.ctx.protectApi.getResponse().query;
    if (!this.fnProcessChecks("protect", this.ctx.onProtectFailure, response)) {
      return;
    }
    const token = response.tokens.csrftoken;
    const [page] = response.pages;
    const pageTitle = page.title;
    this.ctx.watched = page.watchlistexpiry || page.watched || false;
    const prs = response.pages[0].protection;
    let editprot;
    let moveprot;
    let createprot;
    for (const pr of prs) {
      if (pr.type === "edit" && !pr.source) {
        editprot = pr;
      } else if (pr.type === "move") {
        moveprot = pr;
      } else if (pr.type === "create") {
        createprot = pr;
      }
    }
    if (!this.ctx.protectEdit && editprot) {
      this.ctx.protectEdit = {
        level: editprot.level,
        expiry: editprot.expiry
      };
    }
    if (!this.ctx.protectMove && moveprot) {
      this.ctx.protectMove = {
        level: moveprot.level,
        expiry: moveprot.expiry
      };
    }
    if (!this.ctx.protectCreate && createprot) {
      this.ctx.protectCreate = {
        level: createprot.level,
        expiry: createprot.expiry
      };
    }
    if (this.ctx.protectCascade === null) {
      this.ctx.protectCascade = !!prs.filter((pr) => {
        return pr.cascade;
      }).length;
    }
    if (this.ctx.protectCascade) {
      if ((!this.ctx.protectEdit || this.ctx.protectEdit.level !== "sysop" || !this.ctx.protectMove || this.ctx.protectMove.level !== "sysop") && !confirm(uls("您已对“", "您已對「") + this.ctx.pageName + uls("”启用了连锁保护", "」啟用了連鎖保護") + uls("，但没有设置仅管理员的保护级别。\n\n", "，但沒有設定僅管理員的保護級別。\n\n") + uls("单击确认以自动调整并继续连锁全保护，单击取消以跳过此操作", "點擊確認以自動調整並繼續連鎖全保護，點擊取消以跳過此操作"))) {
        this.ctx.statusElement.error(uls("连锁保护已取消。", "連鎖保護已取消。"));
        this.ctx.onProtectFailure(this);
        return;
      }
      this.ctx.protectEdit.level = "sysop";
      this.ctx.protectMove.level = "sysop";
    }
    const protections = [];
    const expirys = [];
    if (this.ctx.protectEdit) {
      protections[protections.length] = `edit=${this.ctx.protectEdit.level}`;
      expirys[expirys.length] = this.ctx.protectEdit.expiry;
    }
    if (this.ctx.protectMove) {
      protections[protections.length] = `move=${this.ctx.protectMove.level}`;
      expirys[expirys.length] = this.ctx.protectMove.expiry;
    }
    if (this.ctx.protectCreate) {
      protections[protections.length] = `create=${this.ctx.protectCreate.level}`;
      expirys[expirys.length] = this.ctx.protectCreate.expiry;
    }
    const query = {
      action: "protect",
      title: pageTitle,
      token,
      protections: protections.join("|"),
      expiry: expirys.join("|"),
      reason: this.ctx.editSummary,
      watchlist: this.ctx.watchlistOption,
      format: "json"
    };
    if (this.ctx.changeTags) {
      query.tags = this.ctx.changeTags;
    }
    if (this.fnApplyWatchlistExpiry()) {
      query.watchlistexpiry = this.ctx.watchlistExpiry;
    }
    if (this.ctx.protectCascade) {
      query.cascade = "true";
    }
    this.ctx.protectProcessApi = new Morebits.wiki.api(uls("保护页面……", "保護頁面……"), query, this.ctx.onProtectSuccess, this.ctx.statusElement, this.ctx.onProtectFailure);
    this.ctx.protectProcessApi.setParent(this);
    this.ctx.protectProcessApi.post();
  };
  sleep = (milliseconds) => {
    const deferred = $.Deferred();
    setTimeout(deferred.resolve, milliseconds);
    return deferred;
  };
};
Morebits.wiki.page = WikiPage;
var WikiPreview = class {
  previewbox;
  /**
   * Displays the preview box, and begins an asynchronous attempt
   * to render the specified wikitext.
   *
   * @param {string} wikitext - Wikitext to render; most things should work, including `subst:` and `~~~~`.
   * @param {string} [pageTitle] - Optional parameter for the page this should be rendered as being on, if omitted it is taken as the current page.
   * @param {string} [sectionTitle] - If provided, render the text as a new section using this as the title.
   * @returns {jQuery.promise}
   */
  beginRender;
  /** Hides the preview box and clears it. */
  closePreview;
  constructor(previewbox) {
    this.previewbox = previewbox;
    $(previewbox).addClass("morebits-previewbox").hide();
    this.beginRender = (wikitext2, pageTitle, sectionTitle) => {
      $(previewbox).show();
      const statusspan = document.createElement("span");
      previewbox.appendChild(statusspan);
      Morebits.status.init(statusspan);
      let pageName = mw.config.get("wgPageName");
      if (mw.config.get("wgPageContentModel") !== "wikitext") {
        pageName = `Draft:${pageName}`;
      }
      const query = {
        action: "parse",
        prop: ["text", "modules"],
        pst: true,
        // PST = pre-save transform; this makes substitution work properly
        preview: true,
        text: wikitext2,
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
      const renderApi = new Morebits.wiki.api(uls("加载中……", "載入中……"), query, fnRenderSuccess, new Morebits.status(uls("预览", "預覽")));
      renderApi.post();
    };
    const fnRenderSuccess = (apiobj) => {
      const response = apiobj.getResponse();
      const html = response.parse.text;
      if (!html) {
        apiobj.statelem.error(uls("加载预览失败，或模板为空", "載入預覽失敗，或模板為空"));
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
  }
};
Morebits.wiki.preview = WikiPreview;
var parseTemplate = (text, start) => {
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
var WikiTextPage = class {
  text;
  constructor(text) {
    this.text = text;
  }
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
      linkRegexString = `${Morebits.namespaceRegex(namespaceID)}:`;
    }
    linkRegexString += Morebits.pageNameRegex(title);
    const isFileOrCategory = [6, 14].includes(namespaceID);
    const colon = isFileOrCategory ? ":" : ":?";
    const simpleLinkRegex = new RegExp(`\\[\\[${colon}(${linkRegexString})\\]\\]`, "g");
    const pipedLinkRegex = new RegExp(`\\[\\[${colon}${linkRegexString}\\|(.+?)\\]\\]`, "g");
    this.text = this.text.replace(simpleLinkRegex, "$1").replace(pipedLinkRegex, "$1");
    return this;
  }
  /**
   * Comments out images from page text; if used in a gallery, deletes the whole line.
   * If used as a template argument (not necessarily with `File:` prefix), the template parameter is commented out.
   *
   * @param {string} image - Image name without `File:` prefix.
   * @param {string} [reason] - Reason to be included in comment, alongside the commented-out image.
   * @returns {Morebits.wikitext.page}
   */
  commentOutImage(image, reason) {
    this.text = this.text.replace(/--!>/g, "-->");
    const unbinder = new Morebits.unbinder(this.text);
    unbinder.unbind("<!--", "-->");
    reason = reason ? `${reason}: ` : "";
    const imageRegexString = Morebits.pageNameRegex(image);
    const linksRegex = new RegExp(`\\[\\[${Morebits.namespaceRegex(6)}:\\s*${imageRegexString}\\s*[\\|(?:\\]\\])]`);
    const allLinks = Morebits.string.splitWeightedByKeys(unbinder.content, "[[", "]]");
    for (const allLink of allLinks) {
      if (linksRegex.test(allLink)) {
        const replacement = `<!-- ${reason}${allLink} -->`;
        unbinder.content = unbinder.content.replace(allLink, replacement);
        unbinder.unbind("<!--", "-->");
      }
    }
    const galleryImageRegex = new RegExp(`(^\\s*${Morebits.namespaceRegex(6)}:\\s*${imageRegexString}\\s*(?:\\|.*?$|$))`, "mg");
    unbinder.content = unbinder.content.replace(galleryImageRegex, `<!-- ${reason}$1 -->`);
    unbinder.unbind("<!--", "-->");
    const freeImageRegex = new RegExp(`(\\|\\s*(?:[\\w\\s]+\\=)?\\s*(?:${Morebits.namespaceRegex(6)}:\\s*)?${imageRegexString})`, "mg");
    unbinder.content = unbinder.content.replace(freeImageRegex, `<!-- ${reason}$1 -->`);
    this.text = unbinder.rebind();
    return this;
  }
  /**
   * Converts uses of [[File:`image`]] to [[File:`image`|`data`]].
   *
   * @param {string} image - Image name without File: prefix.
   * @param {string} data - The display options.
   * @returns {Morebits.wikitext.page}
   */
  addToImageComment(image, data) {
    const imageRegexString = Morebits.pageNameRegex(image);
    const linksRegex = new RegExp(`\\[\\[${Morebits.namespaceRegex(6)}:\\s*${imageRegexString}\\s*[\\|(?:\\]\\])]`);
    const allLinks = Morebits.string.splitWeightedByKeys(this.text, "[[", "]]");
    for (let replacement of allLinks) {
      if (linksRegex.test(replacement)) {
        replacement = replacement.replace(/\]\]$/, `|${data}]]`);
        this.text = this.text.replace(replacement, replacement);
      }
    }
    const galleryRegex = new RegExp(`^(\\s*${imageRegexString}.*?)\\|?(.*?)$`, "mg");
    const newtext = `$1|$2 ${data}`;
    this.text = this.text.replace(galleryRegex, newtext);
    return this;
  }
  /**
   * Remove all transclusions of a template from page text.
   *
   * @param {string} template - Page name whose transclusions are to be removed,
   * include namespace prefix only if not in template namespace.
   * @returns {Morebits.wikitext.page}
   */
  removeTemplate(template) {
    const templateRegexString = Morebits.pageNameRegex(template);
    const linksRegex = new RegExp(`\\{\\{(?:${Morebits.namespaceRegex(10)}:)?\\s*${templateRegexString}\\s*[\\|(?:\\}\\})]`);
    const allTemplates = Morebits.string.splitWeightedByKeys(this.text, "{{", "}}", ["{{{", "}}}"]);
    for (const allTemplate of allTemplates) {
      if (linksRegex.test(allTemplate)) {
        this.text = this.text.replace(allTemplate, "");
      }
    }
    return this;
  }
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
      `^\\s*(?:((?:\\s*${// Pre-template regex, such as leading html comments
      preRegex}|\\{\\{\\s*(?:${// Template regex
      regex})\\d*\\s*(\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?\\}\\})+(?:\\s*\\n)?)\\s*)?`,
      flags
    ), `$1${tag}`);
    return this;
  }
  /**
   * Get the manipulated wikitext.
   *
   * @returns {string}
   */
  getText() {
    return this.text;
  }
};
var wikitext = {
  parseTemplate,
  page: WikiTextPage
};
Morebits.wikitext = wikitext;
var UserspaceLogger = class {
  /**
   * The text to prefix the log with upon creation, defaults to empty.
   *
   * @type {string}
   */
  initialText;
  /**
   * The header level to use for months, defaults to 3 (`===`).
   *
   * @type {number}
   */
  headerLevel;
  changeTags;
  /**
   * Log the entry.
   *
   * @param {string} logText - Doesn't include leading `#` or `*`.
   * @param {string} summaryText - Edit summary.
   * @returns {JQuery.Promise}
   */
  log;
  constructor(logPageName) {
    if (!logPageName) {
      throw new Error("no log page name specified");
    }
    this.initialText = "";
    this.headerLevel = 3;
    this.changeTags = "";
    this.log = (logText, summaryText) => {
      const def = $.Deferred();
      if (!logText) {
        return def.reject();
      }
      const page = new Morebits.wiki.page(`User:${mw.config.get("wgUserName")}/${logPageName}`, uls("将项目加入到用户空间日志", "將項目加入到使用者空間日誌"));
      page.load((pageobj) => {
        let text = pageobj.getPageText() || this.initialText;
        const date = new Morebits.date(pageobj.getLoadTime() ?? "");
        if (!date.monthHeaderRegex().exec(text)) {
          text += `

${date.monthHeader(this.headerLevel)}`;
        }
        pageobj.setPageText(`${text}
${logText}`);
        pageobj.setEditSummary(summaryText);
        pageobj.setChangeTags(this.changeTags);
        pageobj.setCreateOption("recreate");
        pageobj.save(def.resolve, def.reject);
      });
      return def;
    };
  }
};
Morebits.userspaceLogger = UserspaceLogger;
var Status = class _Status {
  stat = null;
  statRaw = null;
  text;
  textRaw;
  type;
  target;
  node;
  linked = false;
  constructor(text, stat, type) {
    this.textRaw = text;
    this.text = Morebits.createHtml(text);
    this.type = type || "status";
    this.generate();
    if (stat) {
      this.update(stat, type);
    }
  }
  /**
   * Specify an area for status message elements to be added to.
   *
   * @memberof Morebits.status
   * @param {HTMLElement} root - Usually a div element.
   * @throws {TypeError} If `root` is not an `HTMLElement`.
   */
  static init(root) {
    if (!(root instanceof Element)) {
      throw new TypeError("object not an instance of Element");
    }
    while (root.hasChildNodes()) {
      root.removeChild(root.firstChild);
    }
    Morebits.status.root = root;
    Morebits.status.errorEvent = null;
  }
  static root = null;
  /**
   * @memberof Morebits.status
   * @param {Function} handler - Function to execute on error.
   * @throws {TypeError} When `handler` is not a function.
   */
  static onError(handler) {
    if (typeof handler === "function") {
      Morebits.status.errorEvent = handler;
    } else {
      throw new TypeError("Morebits.status.onError: handler is not a function");
    }
  }
  static errorEvent = null;
  /** Add the status element node to the DOM. */
  link() {
    if (!this.linked && Morebits.status.root) {
      Morebits.status.root.appendChild(this.node);
      this.linked = true;
    }
  }
  /** Remove the status element node from the DOM. */
  unlink() {
    if (this.linked) {
      Morebits.status.root.removeChild(this.node);
      this.linked = false;
    }
  }
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
        console.error(`[Morebits] ${this.textRaw}: ${this.statRaw}`);
      }
    }
    this.render();
  }
  /** Produce the html for first part of the status message. */
  generate() {
    this.node = document.createElement("div");
    this.node.appendChild(document.createElement("span")).appendChild(this.text);
    this.node.appendChild(document.createElement("span")).appendChild(document.createTextNode(": "));
    this.target = this.node.appendChild(document.createElement("span"));
    this.target.appendChild(document.createTextNode(""));
  }
  /** Complete the html, for the second part of the status message. */
  render() {
    this.node.className = `morebits_status_${this.type}`;
    while (this.target.hasChildNodes()) {
      this.target.removeChild(this.target.firstChild);
    }
    this.target.appendChild(this.stat);
    this.link();
  }
  status(status) {
    this.update(status, "status");
  }
  info(status) {
    this.update(status, "info");
  }
  warn(status) {
    this.update(status, "warn");
  }
  error(status) {
    this.update(status, "error");
  }
  /**
   * @memberof Morebits.status
   * @param {string} text - Before colon
   * @param {string} status - After colon
   * @returns {Morebits.status} - `status`-type (blue)
   */
  static status(text, status) {
    return new _Status(text, status);
  }
  /**
   * @memberof Morebits.status
   * @param {string} text - Before colon
   * @param {string} status - After colon
   * @returns {Morebits.status} - `info`-type (green)
   */
  static info(text, status) {
    return new _Status(text, status, "info");
  }
  /**
   * @memberof Morebits.status
   * @param {string} text - Before colon
   * @param {string} status - After colon
   * @returns {Morebits.status} - `warn`-type (red)
   */
  static warn(text, status) {
    return new _Status(text, status, "warn");
  }
  /**
   * @memberof Morebits.status
   * @param {string} text - Before colon
   * @param {string} status - After colon
   * @returns {Morebits.status} - `error`-type (bold red)
   */
  static error(text, status) {
    return new _Status(text, status, "error");
  }
  /**
   * For the action complete message at the end, create a status line without
   * a colon separator.
   *
   * @memberof Morebits.status
   * @param {string} text
   */
  static actionCompleted(text) {
    const node = document.createElement("div");
    node.appendChild(document.createElement("b")).appendChild(document.createTextNode(text));
    node.className = "morebits_status_info morebits_action_complete";
    if (Morebits.status.root) {
      Morebits.status.root.appendChild(node);
    }
  }
  /**
   * Display the user's rationale, comments, etc. Back to them after a failure,
   * so that they may re-use it.
   *
   * @memberof Morebits.status
   * @param {string} comments
   * @param {string} message
   */
  static printUserText(comments, message) {
    const p = document.createElement("p");
    p.innerHTML = message;
    const div = document.createElement("div");
    div.className = "morebits-usertext";
    div.style.marginTop = "0";
    div.style.whiteSpace = "pre-wrap";
    div.textContent = comments;
    p.appendChild(div);
    Morebits.status.root.appendChild(p);
  }
};
Morebits.status = Status;
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
      const cbs = $(jQuerySelector, jQueryContext).toArray();
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
var BatchOperation = class {
  ctx;
  constructor(currentAction) {
    this.ctx = {
      // backing fields for public properties
      pageList: null,
      options: {
        chunkSize: 50,
        preserveIndividualStatusLines: false
      },
      // internal counters, etc.
      statusElement: new Morebits.status(currentAction || uls("执行批量操作", "執行批次操作")),
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
  }
  // shouldn't be needed by external users, but provided anyway for maximum flexibility
  getStatusElement = () => {
    return this.ctx.statusElement;
  };
  /**
   * Sets the list of pages to work on.
   *
   * @param {Array} pageList - Array of objects over which you wish to execute the worker function
   * This is usually the list of page names (strings).
   */
  setPageList = (pageList) => {
    this.ctx.pageList = pageList;
  };
  /**
   * Sets a known option.
   *
   * @param {string} optionName - Name of the option:
   * - chunkSize (integer): The size of chunks to break the array into
   * (default 50). Setting this to a small value (<5) can cause problems.
   * - preserveIndividualStatusLines (boolean): Keep each page's status
   * element visible when worker is complete?
   * @param {number|boolean} optionValue - Value to which the option is
   * to be set. Should be an integer for chunkSize and a boolean for
   * preserveIndividualStatusLines.
   */
  setOption = (optionName, optionValue) => {
    const options = this.ctx.options;
    options[optionName] = optionValue;
  };
  /**
   * Runs the first callback for each page in the list.
   * The callback must call workerSuccess when succeeding, or workerFailure when failing.
   * Runs the optional second callback when the whole batch has been processed.
   *
   * @param {Function} worker
   * @param {Function} [postFinish]
   */
  run = (worker, postFinish) => {
    if (this.ctx.running) {
      this.ctx.statusElement.error(uls("批量操作已在运行", "批次操作已在執行"));
      return;
    }
    this.ctx.running = true;
    this.ctx.worker = worker;
    this.ctx.postFinish = postFinish;
    this.ctx.countStarted = 0;
    this.ctx.countFinished = 0;
    this.ctx.countFinishedSuccess = 0;
    this.ctx.currentChunkIndex = -1;
    this.ctx.pageChunks = [];
    const total = this.ctx.pageList.length;
    if (!total) {
      this.ctx.statusElement.info(uls("没有指定页面", "沒有指定頁面"));
      this.ctx.running = false;
      if (this.ctx.postFinish) {
        this.ctx.postFinish();
      }
      return;
    }
    this.ctx.pageChunks = Morebits.array.chunk(this.ctx.pageList, this.ctx.options.chunkSize);
    Morebits.wiki.addCheckpoint();
    this.ctx.statusElement.status("0%");
    this.fnStartNewChunk();
  };
  /**
   * To be called by worker before it terminates successfully.
   *
   * @param {(Morebits.wiki.page|Morebits.wiki.api|string)} arg -
   * This should be the `Morebits.wiki.page` or `Morebits.wiki.api` object used by worker
   * (for the adjustment of status lines emitted by them).
   * If no Morebits.wiki.* object is used (e.g. you're using `mw.Api()` or something else), and
   * `preserveIndividualStatusLines` option is on, give the page name (string) as argument.
   */
  workerSuccess = (arg) => {
    if (arg instanceof Morebits.wiki.api || arg instanceof Morebits.wiki.page) {
      const statelem = arg.getStatusElement();
      if (this.ctx.options.preserveIndividualStatusLines) {
        const argWithPageInfo = arg;
        if (argWithPageInfo.getPageName || argWithPageInfo.pageName || argWithPageInfo.query && argWithPageInfo.query.title) {
          const pageName = argWithPageInfo.getPageName ? argWithPageInfo.getPageName() : argWithPageInfo.pageName || argWithPageInfo.query.title;
          statelem.info(`完成（[[${pageName}]]）`);
        } else {
          statelem.info("完成");
        }
      } else {
        statelem.unlink();
      }
    } else if (typeof arg === "string" && this.ctx.options.preserveIndividualStatusLines) {
      new Morebits.status(arg, `完成（[[${arg}]]）`);
    }
    this.ctx.countFinishedSuccess++;
    this.fnDoneOne();
  };
  workerFailure = () => {
    this.fnDoneOne();
  };
  // private functions
  fnStartNewChunk = () => {
    const chunk = this.ctx.pageChunks[++this.ctx.currentChunkIndex];
    if (!chunk) {
      return;
    }
    this.ctx.countStarted += chunk.length;
    for (const page of chunk) {
      this.ctx.worker(page, this);
    }
  };
  fnDoneOne = () => {
    this.ctx.countFinished++;
    const total = this.ctx.pageList.length;
    if (this.ctx.countFinished < total) {
      const progress = Math.round(100 * this.ctx.countFinished / total);
      this.ctx.statusElement.status(`${progress}%`);
      if (this.ctx.countFinished >= this.ctx.countStarted - Math.max(this.ctx.options.chunkSize / 10, 2) && Math.floor(this.ctx.countFinished / this.ctx.options.chunkSize) > this.ctx.currentChunkIndex) {
        this.fnStartNewChunk();
      }
    } else if (this.ctx.countFinished === total) {
      const statusString = `完成（${this.ctx.countFinishedSuccess}/${this.ctx.countFinished}操作成功完成）`;
      if (this.ctx.countFinishedSuccess < this.ctx.countFinished) {
        this.ctx.statusElement.warn(statusString);
      } else {
        this.ctx.statusElement.info(statusString);
      }
      if (this.ctx.postFinish) {
        this.ctx.postFinish();
      }
      Morebits.wiki.removeCheckpoint();
      this.ctx.running = false;
    } else {
      this.ctx.statusElement.warn(`${uls("完成（多执行了", "完成（多執行了") + (this.ctx.countFinished - total)}次）`);
      Morebits.wiki.removeCheckpoint();
      this.ctx.running = false;
    }
  };
};
Morebits.batchOperation = BatchOperation;
var SimpleWindow = class _SimpleWindow {
  content;
  buttons = [];
  height;
  hasFooterLinks = false;
  scriptName = null;
  frame;
  overlay = null;
  modal = false;
  static zIndexCounter = 200;
  static setButtonsEnabled = (enabled) => {
    const $body = $("body");
    $body.find(".morebits-dialog-buttons button").prop("disabled", !enabled);
  };
  constructor(width, height) {
    const content = document.createElement("div");
    this.content = content;
    content.className = "morebits-dialog-content";
    content.id = `morebits-dialog-content-${Math.round(Math.random() * 1e15)}`;
    this.height = height ?? 600;
    const widthNum = Math.min(window.innerWidth, Number.parseInt(String(width || 800), 10));
    this.frame = this.buildFrame();
    this.frame.style.width = `${widthNum}px`;
    document.body.append(this.frame);
  }
  /** Build the dialog frame: titlebar (draggable), content and button pane. */
  buildFrame() {
    const frame = document.createElement("div");
    frame.className = "morebits-dialog";
    frame.tabIndex = -1;
    frame.style.display = "none";
    const titlebar = document.createElement("div");
    titlebar.className = "morebits-dialog-titlebar";
    const title = document.createElement("span");
    title.className = "morebits-dialog-title";
    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "morebits-dialog-close";
    closeButton.setAttribute("aria-label", uls("关闭", "關閉"));
    closeButton.textContent = "×";
    closeButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.close();
    });
    titlebar.append(title, closeButton);
    titlebar.addEventListener("mousedown", (event) => {
      if (event.button !== 0) {
        return;
      }
      const target = event.target;
      if (target instanceof Element && target.closest(".morebits-dialog-close")) {
        return;
      }
      event.preventDefault();
      const rect = this.frame.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      const onMove = (moveEvent) => {
        this.frame.style.left = `${moveEvent.clientX - offsetX}px`;
        this.frame.style.top = `${moveEvent.clientY - offsetY}px`;
      };
      const onUp = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    });
    const buttonpane = document.createElement("div");
    buttonpane.className = "morebits-dialog-buttonpane";
    const buttonspan = document.createElement("span");
    buttonspan.className = "morebits-dialog-buttons";
    const linksspan = document.createElement("span");
    linksspan.className = "morebits-dialog-footerlinks";
    buttonpane.append(buttonspan, linksspan);
    frame.append(titlebar, this.content, buttonpane);
    frame.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.close();
      }
    });
    return frame;
  }
  /**
   * Focuses the dialog. This might work, or on the contrary, it might not.
   *
   * @returns {Morebits.simpleWindow}
   */
  focus() {
    _SimpleWindow.zIndexCounter += 1;
    this.frame.style.zIndex = String(_SimpleWindow.zIndexCounter);
    if (this.overlay) {
      this.overlay.style.zIndex = String(_SimpleWindow.zIndexCounter - 1);
    }
    return this;
  }
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
    if (this.overlay) {
      this.overlay.remove();
      this.overlay = null;
    }
    this.frame.remove();
    return this;
  }
  /**
   * Shows the dialog. Calling display() on a dialog that has previously been closed
   * might work, but it is not guaranteed.
   *
   * @returns {Morebits.simpleWindow}
   */
  display() {
    if (!this.frame.isConnected) {
      this.frame = this.buildFrame();
      const buttonspan = $(this.frame).find(".morebits-dialog-buttons").get(0);
      if (buttonspan) {
        if (this.buttons.length > 0) {
          $(buttonspan).empty().append(this.buttons);
          buttonspan.removeAttribute("data-empty");
        } else {
          buttonspan.setAttribute("data-empty", "data-empty");
        }
      }
      document.body.append(this.frame);
    }
    if (this.scriptName) {
      const titleSpan = $(this.frame).find(".morebits-dialog-title").get(0);
      $(this.frame).find(".morebits-dialog-scriptname").remove();
      const scriptnamespan = document.createElement("span");
      scriptnamespan.className = "morebits-dialog-scriptname";
      scriptnamespan.textContent = `${this.scriptName} · `;
      if (titleSpan) {
        $(titleSpan).prepend(scriptnamespan);
      }
    }
    if (this.modal && !this.overlay) {
      this.overlay = document.createElement("div");
      this.overlay.className = "morebits-dialog-overlay";
      document.body.append(this.overlay);
    }
    this.focus();
    this.frame.focus();
    if (window.setupTooltips && window.pg && window.pg.re && window.pg.re.diff) {
      this.frame.ranSetupTooltipsAlready = false;
      window.setupTooltips(this.frame);
    }
    this.center();
    this.setHeight(this.height);
    return this;
  }
  /** Center the dialog (horizontally and vertically, or at the top when requested). */
  center(positionTop = false) {
    const rect = this.frame.getBoundingClientRect();
    const left = Math.max(0, (window.innerWidth - rect.width) / 2);
    const top = positionTop ? 0 : Math.max(0, (window.innerHeight - rect.height) / 2);
    this.frame.style.left = `${left}px`;
    this.frame.style.top = `${top}px`;
  }
  /**
   * Sets the dialog title.
   *
   * @param {string} title
   * @returns {Morebits.simpleWindow}
   */
  setTitle(title) {
    const titleSpan = $(this.frame).find(".morebits-dialog-title").get(0);
    if (titleSpan) {
      titleSpan.textContent = title;
    }
    return this;
  }
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
  }
  /**
   * Sets the dialog width.
   *
   * @param {number} width
   * @returns {Morebits.simpleWindow}
   */
  setWidth(width) {
    this.frame.style.width = `${width}px`;
    return this;
  }
  /**
   * Sets the dialog's maximum height. The dialog will auto-size to fit its contents,
   * but the content area will grow no larger than the height given here.
   *
   * @param {number} height
   * @returns {Morebits.simpleWindow}
   */
  setHeight(height) {
    this.height = height;
    if (this.frame.getBoundingClientRect().height > window.innerHeight) {
      this.frame.style.height = `${window.innerHeight - 2}px`;
      this.center(true);
    } else {
      this.frame.style.height = "auto";
    }
    this.content.style.maxHeight = `${Number.parseInt(String(this.height - 30), 10)}px`;
    return this;
  }
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
  }
  /**
   * Adds the given element node to the dialog content.
   *
   * @param {HTMLElement} content
   * @returns {Morebits.simpleWindow}
   */
  addContent(content) {
    this.content.appendChild(content);
    const self = this;
    $(this.content).find('input[type="submit"], button[type="submit"]').each((_key, value) => {
      value.style.display = "none";
      const button = document.createElement("button");
      if (value.hasAttribute("value")) {
        button.textContent = value.getAttribute("value") ?? "";
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
    const buttonspan = $(this.frame).find(".morebits-dialog-buttons").get(0);
    if (buttonspan) {
      if (this.buttons.length > 0) {
        $(buttonspan).empty().append(this.buttons);
        buttonspan.removeAttribute("data-empty");
      } else {
        buttonspan.setAttribute("data-empty", "data-empty");
      }
    }
    return this;
  }
  /**
   * Removes all contents from the dialog, barring any footer links.
   *
   * @returns {Morebits.simpleWindow}
   */
  purgeContent() {
    this.buttons = [];
    $(this.frame).find(".morebits-dialog-buttons").empty();
    while (this.content.hasChildNodes()) {
      const [firstChild] = this.content.childNodes;
      if (!firstChild) {
        break;
      }
      this.content.removeChild(firstChild);
    }
    return this;
  }
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
    const footerlinks = $(this.frame).find(".morebits-dialog-footerlinks");
    if (this.hasFooterLinks) {
      const bullet = document.createElement("span");
      bullet.textContent = " • ";
      if (prep) {
        footerlinks.prepend(bullet);
      } else {
        footerlinks.append(bullet);
      }
    }
    const link = document.createElement("a");
    link.setAttribute("href", mw.util.getUrl(wikiPage));
    link.setAttribute("title", wikiPage);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    link.textContent = text;
    if (prep) {
      footerlinks.prepend(link);
    } else {
      footerlinks.append(link);
    }
    this.hasFooterLinks = true;
    return this;
  }
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
    this.modal = modal;
    return this;
  }
};
Morebits.simpleWindow = SimpleWindow;

})();

/* </nowiki> */

