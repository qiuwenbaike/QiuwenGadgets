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
var import_ext_gadget = require("ext.gadget.Edittools-customizeToolbar");
(0, import_ext_gadget.customizeToolbar)(function() {
  const self = this;
  self.wikiEditor("addToToolbar", {
    section: "main",
    group: "insert",
    tools: {
      category: {
        label: "分类",
        type: "button",
        oouiIcon: "tag",
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
        oouiIcon: "strikethrough",
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
        oouiIcon: "underline",
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
        oouiIcon: "quotes",
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
        oouiIcon: "alignLeft",
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
        oouiIcon: "alignCenter",
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
        oouiIcon: "alignRight",
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
        oouiIcon: "markup",
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
        oouiIcon: "mathematics",
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
        oouiIcon: "notice",
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
        oouiIcon: "subtract",
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
        oouiIcon: "references",
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

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXR0b29scy12ZWN0b3IvRWRpdHRvb2xzLXZlY3Rvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjdXN0b21pemVUb29sYmFyfSBmcm9tICdleHQuZ2FkZ2V0LkVkaXR0b29scy1jdXN0b21pemVUb29sYmFyJztcblxuY3VzdG9taXplVG9vbGJhcihmdW5jdGlvbiAodGhpczogSlF1ZXJ5KTogdm9pZCB7XG5cdGNvbnN0IHNlbGYgPSB0aGlzIGFzIEpRdWVyeSAmIHt3aWtpRWRpdG9yOiAobWV0aG9kOiBzdHJpbmcsIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiB2b2lkfTtcblxuXHRzZWxmLndpa2lFZGl0b3IoJ2FkZFRvVG9vbGJhcicsIHtcblx0XHRzZWN0aW9uOiAnbWFpbicsXG5cdFx0Z3JvdXA6ICdpbnNlcnQnLFxuXHRcdHRvb2xzOiB7XG5cdFx0XHRjYXRlZ29yeToge1xuXHRcdFx0XHRsYWJlbDogJ+WIhuexuycsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRvb3VpSWNvbjogJ3RhZycsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnW1tDYXRlZ29yeTonLFxuXHRcdFx0XHRcdFx0cG9zdDogJ11dJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0c2VjdGlvbjogJ2FkdmFuY2VkJyxcblx0XHRncm91cDogJ2Zvcm1hdCcsXG5cdFx0dG9vbHM6IHtcblx0XHRcdGJvbGRpdGFsaWM6IHtcblx0XHRcdFx0bGFiZWw6ICfnspfmlpzkvZMnLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogJ2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvYi9iZS9Ub29sYmFyaWNvbl9ib2xkaXRhbGljX0EucG5nJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6IFwiJycnJydcIixcblx0XHRcdFx0XHRcdHBlcmlNc2c6ICfnspfmlpzkvZPmloflrZcnLFxuXHRcdFx0XHRcdFx0cG9zdDogXCInJycnJ1wiLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c3RyaWtldGhyb3VnaDoge1xuXHRcdFx0XHRsYWJlbDogJ+WIoOmZpOe6vycsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRvb3VpSWNvbjogJ3N0cmlrZXRocm91Z2gnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJzxzPicsXG5cdFx0XHRcdFx0XHRwb3N0OiAnPC9zPicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHR1bmRlcmxpbmU6IHtcblx0XHRcdFx0bGFiZWw6ICfkuIvliJLnur8nLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0b291aUljb246ICd1bmRlcmxpbmUnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJzx1PicsXG5cdFx0XHRcdFx0XHRwb3N0OiAnPC91PicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRxdW90ZToge1xuXHRcdFx0XHRsYWJlbDogJ+Wdl+W8leeUqCcsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRvb3VpSWNvbjogJ3F1b3RlcycsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnPGJsb2NrJy5jb25jYXQoJ3F1b3RlPicpLFxuXHRcdFx0XHRcdFx0cG9zdDogJzwvYmxvY2snLmNvbmNhdCgncXVvdGU+JyksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHQnanVzdGlmeS1sZWZ0Jzoge1xuXHRcdFx0XHRsYWJlbDogJ+W3puWvuem9kCcsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRvb3VpSWNvbjogJ2FsaWduTGVmdCcsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246bGVmdFwiPicsXG5cdFx0XHRcdFx0XHRwb3N0OiAnPC9kaXY+Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdCdqdXN0aWZ5LWNlbnRlcic6IHtcblx0XHRcdFx0bGFiZWw6ICflsYXkuK0nLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0b291aUljb246ICdhbGlnbkNlbnRlcicsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj4nLFxuXHRcdFx0XHRcdFx0cG9zdDogJzwvZGl2PicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHQnanVzdGlmeS1yaWdodCc6IHtcblx0XHRcdFx0bGFiZWw6ICflj7Plr7npvZAnLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0b291aUljb246ICdhbGlnblJpZ2h0Jyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHQ7XCI+Jyxcblx0XHRcdFx0XHRcdHBvc3Q6ICc8L2Rpdj4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0c291cmNlOiB7XG5cdFx0XHRcdGxhYmVsOiAn5rqQ5Luj56CBJyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdG9vdWlJY29uOiAnbWFya3VwJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICc8c3ludGF4aGlnaGxpZ2h0IGxhbmc9XCJ0ZXh0XCI+Jyxcblx0XHRcdFx0XHRcdHBvc3Q6ICc8L3N5bnRheGhpZ2hsaWdodD4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXHRzZWxmLndpa2lFZGl0b3IoJ2FkZFRvVG9vbGJhcicsIHtcblx0XHRzZWN0aW9uOiAnYWR2YW5jZWQnLFxuXHRcdGdyb3VwOiAnaW5zZXJ0Jyxcblx0XHR0b29sczoge1xuXHRcdFx0bWF0aDoge1xuXHRcdFx0XHRsYWJlbDogJ+aVsOWtpuWFrOW8jycsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRvb3VpSWNvbjogJ21hdGhlbWF0aWNzJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICc8bWF0aD4nLFxuXHRcdFx0XHRcdFx0cGVyaU1zZzogJ+aPkuWFpeaVsOWtpuWFrOW8jycsXG5cdFx0XHRcdFx0XHRwb3N0OiAnPC9tYXRoPicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRoaWRkZW46IHtcblx0XHRcdFx0bGFiZWw6ICfms6jph4rmiJbpmpDol4/mloflrZcnLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0b291aUljb246ICdub3RpY2UnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJzwhLS0gJyxcblx0XHRcdFx0XHRcdHBvc3Q6ICcgLS0+Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGhsaW5lOiB7XG5cdFx0XHRcdGxhYmVsOiAn5rC05bmz57q/Jyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdG9vdWlJY29uOiAnc3VidHJhY3QnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJy0tLS0nLFxuXHRcdFx0XHRcdFx0b3dubGluZTogdHJ1ZSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdCdoYW5zLWhhbnQnOiB7XG5cdFx0XHRcdGxhYmVsOiAn57mB566A6L2s5o2iJyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdGljb246ICdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iLzYvNmEvQ2hpbmVzZV9jb252ZXJzaW9uX2JsYWNrLnN2Zy8yNHB4LUNoaW5lc2VfY29udmVyc2lvbl9ibGFjay5zdmcucG5nJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICcteycsXG5cdFx0XHRcdFx0XHRwZXJpTXNnOiAn6L2s5o2i5paH5a2XJyxcblx0XHRcdFx0XHRcdHBvc3Q6ICd9LScsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRyZWZlcmVuY2VzOiB7XG5cdFx0XHRcdGxhYmVsOiAn5Y+C6ICD5paH54yu5Yy6Jyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdG9vdWlJY29uOiAncmVmZXJlbmNlcycsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnXFxuPT0g5Y+C6ICD5paH54yuID09XFxue3tyZWZsaXN0fX1cXG4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBK0JDLFFBQUEsdUNBQUE7Q0FBQSxHQUUvQkQsa0JBQUFFLGtCQUFpQixXQUE4QjtBQUM5QyxRQUFNQyxPQUFPO0FBRWJBLE9BQUtDLFdBQVcsZ0JBQWdCO0lBQy9CQyxTQUFTO0lBQ1RDLE9BQU87SUFDUEMsT0FBTztNQUNOQyxVQUFVO1FBQ1RDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7VUFDUEYsTUFBTTtVQUNORyxTQUFTO1lBQ1JDLEtBQUs7WUFDTEMsTUFBTTtVQUNQO1FBQ0Q7TUFDRDtJQUNEO0VBQ0QsQ0FBQztBQUNEWixPQUFLQyxXQUFXLGdCQUFnQjtJQUMvQkMsU0FBUztJQUNUQyxPQUFPO0lBQ1BDLE9BQU87TUFDTlMsWUFBWTtRQUNYUCxPQUFPO1FBQ1BDLE1BQU07UUFDTk8sTUFBTTtRQUNOTCxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1lBQ0xJLFNBQVM7WUFDVEgsTUFBTTtVQUNQO1FBQ0Q7TUFDRDtNQUNBSSxlQUFlO1FBQ2RWLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7VUFDUEYsTUFBTTtVQUNORyxTQUFTO1lBQ1JDLEtBQUs7WUFDTEMsTUFBTTtVQUNQO1FBQ0Q7TUFDRDtNQUNBSyxXQUFXO1FBQ1ZYLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7VUFDUEYsTUFBTTtVQUNORyxTQUFTO1lBQ1JDLEtBQUs7WUFDTEMsTUFBTTtVQUNQO1FBQ0Q7TUFDRDtNQUNBTSxPQUFPO1FBQ05aLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7VUFDUEYsTUFBTTtVQUNORyxTQUFTO1lBQ1JDLEtBQUssU0FBU1EsT0FBTyxRQUFRO1lBQzdCUCxNQUFNLFVBQVVPLE9BQU8sUUFBUTtVQUNoQztRQUNEO01BQ0Q7TUFDQSxnQkFBZ0I7UUFDZmIsT0FBTztRQUNQQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsUUFBUTtVQUNQRixNQUFNO1VBQ05HLFNBQVM7WUFDUkMsS0FBSztZQUNMQyxNQUFNO1VBQ1A7UUFDRDtNQUNEO01BQ0Esa0JBQWtCO1FBQ2pCTixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1lBQ0xDLE1BQU07VUFDUDtRQUNEO01BQ0Q7TUFDQSxpQkFBaUI7UUFDaEJOLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7VUFDUEYsTUFBTTtVQUNORyxTQUFTO1lBQ1JDLEtBQUs7WUFDTEMsTUFBTTtVQUNQO1FBQ0Q7TUFDRDtNQUNBUSxRQUFRO1FBQ1BkLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7VUFDUEYsTUFBTTtVQUNORyxTQUFTO1lBQ1JDLEtBQUs7WUFDTEMsTUFBTTtVQUNQO1FBQ0Q7TUFDRDtJQUNEO0VBQ0QsQ0FBQztBQUNEWixPQUFLQyxXQUFXLGdCQUFnQjtJQUMvQkMsU0FBUztJQUNUQyxPQUFPO0lBQ1BDLE9BQU87TUFDTmlCLE1BQU07UUFDTGYsT0FBTztRQUNQQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsUUFBUTtVQUNQRixNQUFNO1VBQ05HLFNBQVM7WUFDUkMsS0FBSztZQUNMSSxTQUFTO1lBQ1RILE1BQU07VUFDUDtRQUNEO01BQ0Q7TUFDQVUsUUFBUTtRQUNQaEIsT0FBTztRQUNQQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsUUFBUTtVQUNQRixNQUFNO1VBQ05HLFNBQVM7WUFDUkMsS0FBSztZQUNMQyxNQUFNO1VBQ1A7UUFDRDtNQUNEO01BQ0FXLE9BQU87UUFDTmpCLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7VUFDUEYsTUFBTTtVQUNORyxTQUFTO1lBQ1JDLEtBQUs7WUFDTGEsU0FBUztVQUNWO1FBQ0Q7TUFDRDtNQUNBLGFBQWE7UUFDWmxCLE9BQU87UUFDUEMsTUFBTTtRQUNOTyxNQUFNO1FBQ05MLFFBQVE7VUFDUEYsTUFBTTtVQUNORyxTQUFTO1lBQ1JDLEtBQUs7WUFDTEksU0FBUztZQUNUSCxNQUFNO1VBQ1A7UUFDRDtNQUNEO01BQ0FhLFlBQVk7UUFDWG5CLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7VUFDUEYsTUFBTTtVQUNORyxTQUFTO1lBQ1JDLEtBQUs7VUFDTjtRQUNEO01BQ0Q7SUFDRDtFQUNELENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImN1c3RvbWl6ZVRvb2xiYXIiLCAic2VsZiIsICJ3aWtpRWRpdG9yIiwgInNlY3Rpb24iLCAiZ3JvdXAiLCAidG9vbHMiLCAiY2F0ZWdvcnkiLCAibGFiZWwiLCAidHlwZSIsICJvb3VpSWNvbiIsICJhY3Rpb24iLCAib3B0aW9ucyIsICJwcmUiLCAicG9zdCIsICJib2xkaXRhbGljIiwgImljb24iLCAicGVyaU1zZyIsICJzdHJpa2V0aHJvdWdoIiwgInVuZGVybGluZSIsICJxdW90ZSIsICJjb25jYXQiLCAic291cmNlIiwgIm1hdGgiLCAiaGlkZGVuIiwgImhsaW5lIiwgIm93bmxpbmUiLCAicmVmZXJlbmNlcyJdCn0K
