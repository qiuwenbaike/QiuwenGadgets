/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Edittools-vector.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-vector}
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

// dist/Edittools-vector/Edittools-vector.js
//! src/Edittools-vector/Edittools-vector.ts
window.customizeToolbar(function() {
  const self = this;
  self.wikiEditor("addToToolbar", {
    section: "main",
    group: "insert",
    tools: {
      category: {
        label: "分类",
        type: "button",
        icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/0/0c/VisualEditor_-_Icon_-_Tag.svg/24px-VisualEditor_-_Icon_-_Tag.svg.png",
        action: {
          type: "encapsulate",
          options: {
            pre: "[[Category:",
            post: "]]"
          }
        }
      }
    }
  });
  self.wikiEditor("addToToolbar", {
    section: "advanced",
    group: "format",
    tools: {
      bolditalic: {
        label: "粗斜体",
        type: "button",
        icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/b/be/Toolbaricon_bolditalic_A.png",
        action: {
          type: "encapsulate",
          options: {
            pre: "'''''",
            periMsg: "粗斜体文字",
            post: "'''''"
          }
        }
      },
      strikethrough: {
        label: "删除线",
        type: "button",
        icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/7/72/VisualEditor_-_Icon_-_Strikethrough-s.svg/24px-VisualEditor_-_Icon_-_Strikethrough-s.svg.png",
        action: {
          type: "encapsulate",
          options: {
            pre: "<s>",
            post: "</s>"
          }
        }
      },
      underline: {
        label: "下划线",
        type: "button",
        icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/a/a9/VisualEditor_-_Icon_-_Underline-u.svg/24px-VisualEditor_-_Icon_-_Underline-u.svg.png",
        action: {
          type: "encapsulate",
          options: {
            pre: "<u>",
            post: "</u>"
          }
        }
      },
      quote: {
        label: "块引用",
        type: "button",
        icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/d/d8/VisualEditor_-_Icon_-_Block-quote.svg/24px-VisualEditor_-_Icon_-_Block-quote.svg.png",
        action: {
          type: "encapsulate",
          options: {
            pre: "<block".concat("quote>"),
            post: "</block".concat("quote>")
          }
        }
      },
      "justify-left": {
        label: "左对齐",
        type: "button",
        icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/7/7f/OOjs_UI_icon_alignLeft.svg/24px-OOjs_UI_icon_alignLeft.svg.png",
        action: {
          type: "encapsulate",
          options: {
            pre: '<div style="text-align:left">',
            post: "</div>"
          }
        }
      },
      "justify-center": {
        label: "居中",
        type: "button",
        icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/b/ba/OOjs_UI_icon_alignCenter.svg/24px-OOjs_UI_icon_alignCenter.svg.png",
        action: {
          type: "encapsulate",
          options: {
            pre: '<div style="text-align: center;">',
            post: "</div>"
          }
        }
      },
      "justify-right": {
        label: "右对齐",
        type: "button",
        icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/1/13/OOjs_UI_icon_alignRight.svg/24px-OOjs_UI_icon_alignRight.svg.png",
        action: {
          type: "encapsulate",
          options: {
            pre: '<div style="text-align: right;">',
            post: "</div>"
          }
        }
      },
      source: {
        label: "源代码",
        type: "button",
        icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/2/2c/VisualEditor_-_Icon_-_Source.svg/24px-VisualEditor_-_Icon_-_Source.svg.png",
        action: {
          type: "encapsulate",
          options: {
            pre: '<syntaxhighlight lang="text">',
            post: "</syntaxhighlight>"
          }
        }
      }
    }
  });
  self.wikiEditor("addToToolbar", {
    section: "advanced",
    group: "insert",
    tools: {
      math: {
        label: "数学公式",
        type: "button",
        icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/3/30/VisualEditor_-_Icon_-_Equation.svg/24px-VisualEditor_-_Icon_-_Equation.svg.png",
        action: {
          type: "encapsulate",
          options: {
            pre: "<math>",
            periMsg: "插入数学公式",
            post: "</math>"
          }
        }
      },
      hidden: {
        label: "注释或隐藏文字",
        type: "button",
        icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/d/d1/VisualEditor_-_Icon_-_Comment.svg/24px-VisualEditor_-_Icon_-_Comment.svg.png",
        action: {
          type: "encapsulate",
          options: {
            pre: "<!-- ",
            post: " -->"
          }
        }
      },
      hline: {
        label: "水平线",
        type: "button",
        icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/0/0e/VisualEditor_-_Icon_-_Remove-item.svg/24px-VisualEditor_-_Icon_-_Remove-item.svg.png",
        action: {
          type: "encapsulate",
          options: {
            pre: "----",
            ownline: true
          }
        }
      },
      "hans-hant": {
        label: "繁简转换",
        type: "button",
        icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/6/6a/Chinese_conversion_black.svg/24px-Chinese_conversion_black.svg.png",
        action: {
          type: "encapsulate",
          options: {
            pre: "-{",
            periMsg: "转换文字",
            post: "}-"
          }
        }
      },
      references: {
        label: "参考文献区",
        type: "button",
        icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/f/f9/VisualEditor_-_Icon_-_References.svg/24px-VisualEditor_-_Icon_-_References.svg.png",
        action: {
          type: "encapsulate",
          options: {
            pre: "\n== 参考文献 ==\n{{reflist}}\n"
          }
        }
      }
    }
  });
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXR0b29scy12ZWN0b3IvRWRpdHRvb2xzLXZlY3Rvci50cyJdLAogICJzb3VyY2VSb290IjogIi4uL0dhZGdldHMiLAogICJzb3VyY2VzQ29udGVudCI6IFsid2luZG93LmN1c3RvbWl6ZVRvb2xiYXIoZnVuY3Rpb24gKHRoaXM6IEpRdWVyeSk6IHZvaWQge1xuXHRjb25zdCBzZWxmID0gdGhpcyBhcyBKUXVlcnkgJiB7d2lraUVkaXRvcjogKG1ldGhvZDogc3RyaW5nLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4gdm9pZH07XG5cblx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0c2VjdGlvbjogJ21haW4nLFxuXHRcdGdyb3VwOiAnaW5zZXJ0Jyxcblx0XHR0b29sczoge1xuXHRcdFx0Y2F0ZWdvcnk6IHtcblx0XHRcdFx0bGFiZWw6ICfliIbnsbsnLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogJ2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvMC8wYy9WaXN1YWxFZGl0b3JfLV9JY29uXy1fVGFnLnN2Zy8yNHB4LVZpc3VhbEVkaXRvcl8tX0ljb25fLV9UYWcuc3ZnLnBuZycsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnW1tDYXRlZ29yeTonLFxuXHRcdFx0XHRcdFx0cG9zdDogJ11dJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0c2VjdGlvbjogJ2FkdmFuY2VkJyxcblx0XHRncm91cDogJ2Zvcm1hdCcsXG5cdFx0dG9vbHM6IHtcblx0XHRcdGJvbGRpdGFsaWM6IHtcblx0XHRcdFx0bGFiZWw6ICfnspfmlpzkvZMnLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogJ2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvYi9iZS9Ub29sYmFyaWNvbl9ib2xkaXRhbGljX0EucG5nJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6IFwiJycnJydcIixcblx0XHRcdFx0XHRcdHBlcmlNc2c6ICfnspfmlpzkvZPmloflrZcnLFxuXHRcdFx0XHRcdFx0cG9zdDogXCInJycnJ1wiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c3RyaWtldGhyb3VnaDoge1xuXHRcdFx0XHRsYWJlbDogJ+WIoOmZpOe6vycsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRpY29uOiAnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi83LzcyL1Zpc3VhbEVkaXRvcl8tX0ljb25fLV9TdHJpa2V0aHJvdWdoLXMuc3ZnLzI0cHgtVmlzdWFsRWRpdG9yXy1fSWNvbl8tX1N0cmlrZXRocm91Z2gtcy5zdmcucG5nJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICc8cz4nLFxuXHRcdFx0XHRcdFx0cG9zdDogJzwvcz4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0dW5kZXJsaW5lOiB7XG5cdFx0XHRcdGxhYmVsOiAn5LiL5YiS57q/Jyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdGljb246ICdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iL2EvYTkvVmlzdWFsRWRpdG9yXy1fSWNvbl8tX1VuZGVybGluZS11LnN2Zy8yNHB4LVZpc3VhbEVkaXRvcl8tX0ljb25fLV9VbmRlcmxpbmUtdS5zdmcucG5nJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICc8dT4nLFxuXHRcdFx0XHRcdFx0cG9zdDogJzwvdT4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0cXVvdGU6IHtcblx0XHRcdFx0bGFiZWw6ICflnZflvJXnlKgnLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogJ2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvZC9kOC9WaXN1YWxFZGl0b3JfLV9JY29uXy1fQmxvY2stcXVvdGUuc3ZnLzI0cHgtVmlzdWFsRWRpdG9yXy1fSWNvbl8tX0Jsb2NrLXF1b3RlLnN2Zy5wbmcnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJzxibG9jaycuY29uY2F0KCdxdW90ZT4nKSxcblx0XHRcdFx0XHRcdHBvc3Q6ICc8L2Jsb2NrJy5jb25jYXQoJ3F1b3RlPicpLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0J2p1c3RpZnktbGVmdCc6IHtcblx0XHRcdFx0bGFiZWw6ICflt6blr7npvZAnLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogJ2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvNy83Zi9PT2pzX1VJX2ljb25fYWxpZ25MZWZ0LnN2Zy8yNHB4LU9PanNfVUlfaWNvbl9hbGlnbkxlZnQuc3ZnLnBuZycsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246bGVmdFwiPicsXG5cdFx0XHRcdFx0XHRwb3N0OiAnPC9kaXY+Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdCdqdXN0aWZ5LWNlbnRlcic6IHtcblx0XHRcdFx0bGFiZWw6ICflsYXkuK0nLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogJ2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvYi9iYS9PT2pzX1VJX2ljb25fYWxpZ25DZW50ZXIuc3ZnLzI0cHgtT09qc19VSV9pY29uX2FsaWduQ2VudGVyLnN2Zy5wbmcnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJzxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+Jyxcblx0XHRcdFx0XHRcdHBvc3Q6ICc8L2Rpdj4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0J2p1c3RpZnktcmlnaHQnOiB7XG5cdFx0XHRcdGxhYmVsOiAn5Y+z5a+56b2QJyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdGljb246ICdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iLzEvMTMvT09qc19VSV9pY29uX2FsaWduUmlnaHQuc3ZnLzI0cHgtT09qc19VSV9pY29uX2FsaWduUmlnaHQuc3ZnLnBuZycsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0O1wiPicsXG5cdFx0XHRcdFx0XHRwb3N0OiAnPC9kaXY+Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHNvdXJjZToge1xuXHRcdFx0XHRsYWJlbDogJ+a6kOS7o+eggScsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRpY29uOiAnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi8yLzJjL1Zpc3VhbEVkaXRvcl8tX0ljb25fLV9Tb3VyY2Uuc3ZnLzI0cHgtVmlzdWFsRWRpdG9yXy1fSWNvbl8tX1NvdXJjZS5zdmcucG5nJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICc8c3ludGF4aGlnaGxpZ2h0IGxhbmc9XCJ0ZXh0XCI+Jyxcblx0XHRcdFx0XHRcdHBvc3Q6ICc8L3N5bnRheGhpZ2hsaWdodD4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXHRzZWxmLndpa2lFZGl0b3IoJ2FkZFRvVG9vbGJhcicsIHtcblx0XHRzZWN0aW9uOiAnYWR2YW5jZWQnLFxuXHRcdGdyb3VwOiAnaW5zZXJ0Jyxcblx0XHR0b29sczoge1xuXHRcdFx0bWF0aDoge1xuXHRcdFx0XHRsYWJlbDogJ+aVsOWtpuWFrOW8jycsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRpY29uOiAnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi8zLzMwL1Zpc3VhbEVkaXRvcl8tX0ljb25fLV9FcXVhdGlvbi5zdmcvMjRweC1WaXN1YWxFZGl0b3JfLV9JY29uXy1fRXF1YXRpb24uc3ZnLnBuZycsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnPG1hdGg+Jyxcblx0XHRcdFx0XHRcdHBlcmlNc2c6ICfmj5LlhaXmlbDlrablhazlvI8nLFxuXHRcdFx0XHRcdFx0cG9zdDogJzwvbWF0aD4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0aGlkZGVuOiB7XG5cdFx0XHRcdGxhYmVsOiAn5rOo6YeK5oiW6ZqQ6JeP5paH5a2XJyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdGljb246ICdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iL2QvZDEvVmlzdWFsRWRpdG9yXy1fSWNvbl8tX0NvbW1lbnQuc3ZnLzI0cHgtVmlzdWFsRWRpdG9yXy1fSWNvbl8tX0NvbW1lbnQuc3ZnLnBuZycsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnPCEtLSAnLFxuXHRcdFx0XHRcdFx0cG9zdDogJyAtLT4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0aGxpbmU6IHtcblx0XHRcdFx0bGFiZWw6ICfmsLTlubPnur8nLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogJ2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvMC8wZS9WaXN1YWxFZGl0b3JfLV9JY29uXy1fUmVtb3ZlLWl0ZW0uc3ZnLzI0cHgtVmlzdWFsRWRpdG9yXy1fSWNvbl8tX1JlbW92ZS1pdGVtLnN2Zy5wbmcnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJy0tLS0nLFxuXHRcdFx0XHRcdFx0b3dubGluZTogdHJ1ZSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdCdoYW5zLWhhbnQnOiB7XG5cdFx0XHRcdGxhYmVsOiAn57mB566A6L2s5o2iJyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdGljb246ICdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iLzYvNmEvQ2hpbmVzZV9jb252ZXJzaW9uX2JsYWNrLnN2Zy8yNHB4LUNoaW5lc2VfY29udmVyc2lvbl9ibGFjay5zdmcucG5nJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICcteycsXG5cdFx0XHRcdFx0XHRwZXJpTXNnOiAn6L2s5o2i5paH5a2XJyxcblx0XHRcdFx0XHRcdHBvc3Q6ICd9LScsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRyZWZlcmVuY2VzOiB7XG5cdFx0XHRcdGxhYmVsOiAn5Y+C6ICD5paH54yu5Yy6Jyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdGljb246ICdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iL2YvZjkvVmlzdWFsRWRpdG9yXy1fSWNvbl8tX1JlZmVyZW5jZXMuc3ZnLzI0cHgtVmlzdWFsRWRpdG9yXy1fSWNvbl8tX1JlZmVyZW5jZXMuc3ZnLnBuZycsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnXFxuPT0g5Y+C6ICD5paH54yuID09XFxue3tyZWZsaXN0fX1c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LE1BQU07UUFDTkMsUUFBUTtVQUNQRixNQUFNO1VBQ05HLFNBQVM7WUFDUkMsS0FBSztZQUNMRyxTQUFTO1lBQ1RGLE1BQU07VUFDUDtRQUNEO01BQ0Q7TUFDQVksWUFBWTtRQUNYbEIsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsUUFBUTtVQUNQRixNQUFNO1VBQ05HLFNBQVM7WUFDUkMsS0FBSztVQUNOO1FBQ0Q7TUFDRDtJQUNEO0VBQ0QsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbIndpbmRvdyIsICJjdXN0b21pemVUb29sYmFyIiwgInNlbGYiLCAid2lraUVkaXRvciIsICJzZWN0aW9uIiwgImdyb3VwIiwgInRvb2xzIiwgImNhdGVnb3J5IiwgImxhYmVsIiwgInR5cGUiLCAiaWNvbiIsICJhY3Rpb24iLCAib3B0aW9ucyIsICJwcmUiLCAicG9zdCIsICJib2xkaXRhbGljIiwgInBlcmlNc2ciLCAic3RyaWtldGhyb3VnaCIsICJ1bmRlcmxpbmUiLCAicXVvdGUiLCAiY29uY2F0IiwgInNvdXJjZSIsICJtYXRoIiwgImhpZGRlbiIsICJobGluZSIsICJvd25saW5lIiwgInJlZmVyZW5jZXMiXQp9Cg==

})();

/* </nowiki> */
