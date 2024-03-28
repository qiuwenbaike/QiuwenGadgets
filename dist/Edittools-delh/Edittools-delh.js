/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Edittools-delh.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-delh}
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

// dist/Edittools-delh/Edittools-delh.js
//! src/Edittools-delh/modules/getList.ts
var getVfdText = (code, comment) => {
  return {
    label: comment,
    action: {
      type: "encapsulate",
      options: {
        pre: "{".concat("{delh|".concat(code, "}}\n")),
        post: "\n----\n: ".concat(comment, "。--~~").concat("~~\n{", "{delf}}")
      }
    }
  };
};
var getList = (list) => {
  const object = {};
  for (var _i = 0, _Object$entries = Object.entries(list); _i < _Object$entries.length; _i++) {
    const [code, comment] = _Object$entries[_i];
    object[code] = getVfdText(code, comment);
  }
  return object;
};
//! src/Edittools-delh/modules/core.ts
var edittoolsDelh = () => {
  window.customizeToolbar(function() {
    const self = this;
    self.wikiEditor("addToToolbar", {
      sections: {
        delh: {
          type: "toolbar",
          label: window.wgULS("结束讨论", "結束討論")
        }
      }
    });
    self.wikiEditor("addToToolbar", {
      section: "delh",
      groups: {
        vfd: {}
      }
    });
    self.wikiEditor("addToToolbar", {
      section: "delh",
      group: "vfd",
      tools: {
        invalid: {
          label: window.wgULS("请求无效", "請求無效"),
          type: "select",
          list: getList({
            ir: window.wgULS("请求无效", "請求無效"),
            rep: window.wgULS("重复提出，无效", "重複提出，無效"),
            commons: window.wgULS("应在维基共享资源提请", "應在維基共享資源提請"),
            ne: window.wgULS("目标页面或文件不存在，无效", "目標頁面或檔案不存在，無效"),
            nq: window.wgULS("提删者未取得提删资格，无效", "提刪者未取得提刪資格，無效")
          })
        },
        keep: {
          label: "保留",
          type: "select",
          list: getList({
            k: "保留",
            sk: "快速保留",
            tk: window.wgULS("暂时保留", "暫時保留"),
            rr: window.wgULS("请求理由消失", "請求理由消失"),
            dan: window.wgULS("删后重建", "刪後重建")
          })
        },
        del: {
          label: window.wgULS("删除", "刪除"),
          type: "select",
          list: getList({
            d: window.wgULS("删除", "刪除"),
            ifd: window.wgULS("图像因侵权被删", "圖像因侵權被刪")
          })
        },
        speedyDel: {
          label: window.wgULS("快速删除", "快速刪除"),
          type: "select",
          list: getList({
            sd: window.wgULS("快速删除", "快速刪除"),
            lssd: window.wgULS("无来源或版权资讯，快速删除", "無來源或版權資訊，快速刪除"),
            svg: window.wgULS("已改用SVG图形，删除", "已改用SVG圖形，刪除"),
            drep: window.wgULS("多次被删除，条目锁定", "多次被刪除，條目鎖定")
          })
        },
        others: {
          label: window.wgULS("其他处理方法", "其他處理方法"),
          type: "select",
          list: getList({
            c: window.wgULS("转交侵权", "轉交侵權"),
            r: window.wgULS("重定向", "重定向"),
            cr: window.wgULS("分类重定向", "分類重定向"),
            m: window.wgULS("移动", "移動"),
            merge: window.wgULS("并入", "併入"),
            nc: window.wgULS("无共识", "無共識")
          })
        }
      }
    });
  });
};
//! src/Edittools-delh/Edittools-delh.ts
var {
  wgPageName
} = mw.config.get();
if (/^qiuwen(?:[_ ]talk)?:存废讨论\//i.test(wgPageName)) {
  edittoolsDelh();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXR0b29scy1kZWxoL21vZHVsZXMvZ2V0TGlzdC50cyIsICJzcmMvRWRpdHRvb2xzLWRlbGgvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9FZGl0dG9vbHMtZGVsaC9FZGl0dG9vbHMtZGVsaC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgZ2V0VmZkVGV4dCA9IChjb2RlOiBzdHJpbmcsIGNvbW1lbnQ6IHN0cmluZykgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGxhYmVsOiBjb21tZW50LFxuXHRcdGFjdGlvbjoge1xuXHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0cHJlOiBgeyR7YHtkZWxofCR7Y29kZX19fVxcbmB9YCxcblx0XHRcdFx0cG9zdDogYFxcbi0tLS1cXG46ICR7Y29tbWVudH3jgIItLX5+YC5jb25jYXQoJ35+XFxueycsICd7ZGVsZn19JyksXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG59O1xuXG5jb25zdCBnZXRMaXN0ID0gPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PihsaXN0OiBUKTogUmVjb3JkPHN0cmluZywgUGFydGlhbDxSZXR1cm5UeXBlPHR5cGVvZiBnZXRWZmRUZXh0Pj4+ID0+IHtcblx0Y29uc3Qgb2JqZWN0OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRMaXN0PiA9IHt9O1xuXHRmb3IgKGNvbnN0IFtjb2RlLCBjb21tZW50XSBvZiBPYmplY3QuZW50cmllcyhsaXN0KSkge1xuXHRcdG9iamVjdFtjb2RlXSA9IGdldFZmZFRleHQoY29kZSwgY29tbWVudCk7XG5cdH1cblxuXHRyZXR1cm4gb2JqZWN0O1xufTtcblxuZXhwb3J0IHtnZXRMaXN0fTtcbiIsICJpbXBvcnQge2dldExpc3R9IGZyb20gJy4vZ2V0TGlzdCc7XG5cbmNvbnN0IGVkaXR0b29sc0RlbGggPSAoKTogdm9pZCA9PiB7XG5cdHdpbmRvdy5jdXN0b21pemVUb29sYmFyKGZ1bmN0aW9uICh0aGlzOiBKUXVlcnkpOiB2b2lkIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcyBhcyBKUXVlcnkgJiB7d2lraUVkaXRvcjogKG1ldGhvZDogc3RyaW5nLCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4gdm9pZH07XG5cblx0XHRzZWxmLndpa2lFZGl0b3IoJ2FkZFRvVG9vbGJhcicsIHtcblx0XHRcdHNlY3Rpb25zOiB7XG5cdFx0XHRcdGRlbGg6IHtcblx0XHRcdFx0XHR0eXBlOiAndG9vbGJhcicsXG5cdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn57uT5p2f6K6o6K66JywgJ+e1kOadn+iojuirlicpLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRzZWxmLndpa2lFZGl0b3IoJ2FkZFRvVG9vbGJhcicsIHtcblx0XHRcdHNlY3Rpb246ICdkZWxoJyxcblx0XHRcdGdyb3Vwczoge1xuXHRcdFx0XHR2ZmQ6IHt9LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRzZWxmLndpa2lFZGl0b3IoJ2FkZFRvVG9vbGJhcicsIHtcblx0XHRcdHNlY3Rpb246ICdkZWxoJyxcblx0XHRcdGdyb3VwOiAndmZkJyxcblx0XHRcdHRvb2xzOiB7XG5cdFx0XHRcdGludmFsaWQ6IHtcblx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfor7fmsYLml6DmlYgnLCAn6KuL5rGC54Sh5pWIJyksXG5cdFx0XHRcdFx0dHlwZTogJ3NlbGVjdCcsXG5cdFx0XHRcdFx0bGlzdDogZ2V0TGlzdCh7XG5cdFx0XHRcdFx0XHRpcjogd2luZG93LndnVUxTKCfor7fmsYLml6DmlYgnLCAn6KuL5rGC54Sh5pWIJyksXG5cdFx0XHRcdFx0XHRyZXA6IHdpbmRvdy53Z1VMUygn6YeN5aSN5o+Q5Ye677yM5peg5pWIJywgJ+mHjeikh+aPkOWHuu+8jOeEoeaViCcpLFxuXHRcdFx0XHRcdFx0Y29tbW9uczogd2luZG93LndnVUxTKCflupTlnKjnu7Tln7rlhbHkuqvotYTmupDmj5Dor7cnLCAn5oeJ5Zyo57at5Z+65YWx5Lqr6LOH5rqQ5o+Q6KuLJyksXG5cdFx0XHRcdFx0XHRuZTogd2luZG93LndnVUxTKCfnm67moIfpobXpnaLmiJbmlofku7bkuI3lrZjlnKjvvIzml6DmlYgnLCAn55uu5qiZ6aCB6Z2i5oiW5qqU5qGI5LiN5a2Y5Zyo77yM54Sh5pWIJyksXG5cdFx0XHRcdFx0XHRucTogd2luZG93LndnVUxTKCfmj5DliKDogIXmnKrlj5blvpfmj5DliKDotYTmoLzvvIzml6DmlYgnLCAn5o+Q5Yiq6ICF5pyq5Y+W5b6X5o+Q5Yiq6LOH5qC877yM54Sh5pWIJyksXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGtlZXA6IHtcblx0XHRcdFx0XHRsYWJlbDogJ+S/neeVmScsXG5cdFx0XHRcdFx0dHlwZTogJ3NlbGVjdCcsXG5cdFx0XHRcdFx0bGlzdDogZ2V0TGlzdCh7XG5cdFx0XHRcdFx0XHRrOiAn5L+d55WZJyxcblx0XHRcdFx0XHRcdHNrOiAn5b+r6YCf5L+d55WZJyxcblx0XHRcdFx0XHRcdHRrOiB3aW5kb3cud2dVTFMoJ+aaguaXtuS/neeVmScsICfmmqvmmYLkv53nlZknKSxcblx0XHRcdFx0XHRcdHJyOiB3aW5kb3cud2dVTFMoJ+ivt+axgueQhueUsea2iOWksScsICfoq4vmsYLnkIbnlLHmtojlpLEnKSxcblx0XHRcdFx0XHRcdGRhbjogd2luZG93LndnVUxTKCfliKDlkI7ph43lu7onLCAn5Yiq5b6M6YeN5bu6JyksXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRlbDoge1xuXHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+WIoOmZpCcsICfliKrpmaQnKSxcblx0XHRcdFx0XHR0eXBlOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHRsaXN0OiBnZXRMaXN0KHtcblx0XHRcdFx0XHRcdGQ6IHdpbmRvdy53Z1VMUygn5Yig6ZmkJywgJ+WIqumZpCcpLFxuXHRcdFx0XHRcdFx0aWZkOiB3aW5kb3cud2dVTFMoJ+WbvuWDj+WboOS+teadg+iiq+WIoCcsICflnJblg4/lm6DkvrXmrIrooqvliKonKSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0fSxcblx0XHRcdFx0c3BlZWR5RGVsOiB7XG5cdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5b+r6YCf5Yig6ZmkJywgJ+W/q+mAn+WIqumZpCcpLFxuXHRcdFx0XHRcdHR5cGU6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdGxpc3Q6IGdldExpc3Qoe1xuXHRcdFx0XHRcdFx0c2Q6IHdpbmRvdy53Z1VMUygn5b+r6YCf5Yig6ZmkJywgJ+W/q+mAn+WIqumZpCcpLFxuXHRcdFx0XHRcdFx0bHNzZDogd2luZG93LndnVUxTKCfml6DmnaXmupDmiJbniYjmnYPotYTorq/vvIzlv6vpgJ/liKDpmaQnLCAn54Sh5L6G5rqQ5oiW54mI5qyK6LOH6KiK77yM5b+r6YCf5Yiq6ZmkJyksXG5cdFx0XHRcdFx0XHRzdmc6IHdpbmRvdy53Z1VMUygn5bey5pS555SoU1ZH5Zu+5b2i77yM5Yig6ZmkJywgJ+W3suaUueeUqFNWR+WcluW9ou+8jOWIqumZpCcpLFxuXHRcdFx0XHRcdFx0ZHJlcDogd2luZG93LndnVUxTKCflpJrmrKHooqvliKDpmaTvvIzmnaHnm67plIHlrponLCAn5aSa5qyh6KKr5Yiq6Zmk77yM5qKd55uu6Y6W5a6aJyksXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG90aGVyczoge1xuXHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+WFtuS7luWkhOeQhuaWueazlScsICflhbbku5bomZXnkIbmlrnms5UnKSxcblx0XHRcdFx0XHR0eXBlOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHRsaXN0OiBnZXRMaXN0KHtcblx0XHRcdFx0XHRcdGM6IHdpbmRvdy53Z1VMUygn6L2s5Lqk5L615p2DJywgJ+i9ieS6pOS+teasiicpLFxuXHRcdFx0XHRcdFx0cjogd2luZG93LndnVUxTKCfph43lrprlkJEnLCAn6YeN5a6a5ZCRJyksXG5cdFx0XHRcdFx0XHRjcjogd2luZG93LndnVUxTKCfliIbnsbvph43lrprlkJEnLCAn5YiG6aGe6YeN5a6a5ZCRJyksXG5cdFx0XHRcdFx0XHRtOiB3aW5kb3cud2dVTFMoJ+enu+WKqCcsICfnp7vli5UnKSxcblx0XHRcdFx0XHRcdG1lcmdlOiB3aW5kb3cud2dVTFMoJ+W5tuWFpScsICfkvbXlhaUnKSxcblx0XHRcdFx0XHRcdG5jOiB3aW5kb3cud2dVTFMoJ+aXoOWFseivhicsICfnhKHlhbHorZgnKSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtlZGl0dG9vbHNEZWxofTtcbiIsICJpbXBvcnQge2VkaXR0b29sc0RlbGh9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuY29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5pZiAoL15xaXV3ZW4oPzpbXyBddGFsayk/OuWtmOW6n+iuqOiuulxcLy9pLnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0ZWRpdHRvb2xzRGVsaCgpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBYUEsQ0FBQ0MsTUFBY0MsWUFBb0I7QUFDckQsU0FBTztJQUNOQyxPQUFPRDtJQUNQRSxRQUFRO01BQ1BDLE1BQU07TUFDTkMsU0FBUztRQUNSQyxLQUFBLElBQUFDLE9BQUEsU0FBQUEsT0FBa0JQLE1BQUksTUFBQSxDQUFBO1FBQ3RCUSxNQUFNLGFBQUFELE9BQWFOLFNBQU8sT0FBQSxFQUFRTSxPQUFPLFNBQVMsU0FBUztNQUM1RDtJQUNEO0VBQ0Q7QUFDRDtBQUVBLElBQU1FLFVBQTZDQyxVQUFvRTtBQUN0SCxRQUFNQyxTQUFxQyxDQUFDO0FBQzVDLFdBQUFDLEtBQUEsR0FBQUMsa0JBQThCQyxPQUFPQyxRQUFRTCxJQUFJLEdBQUFFLEtBQUFDLGdCQUFBRyxRQUFBSixNQUFHO0FBQXBELFVBQVcsQ0FBQ1osTUFBTUMsT0FBTyxJQUFBWSxnQkFBQUQsRUFBQTtBQUN4QkQsV0FBT1gsSUFBSSxJQUFJRCxXQUFXQyxNQUFNQyxPQUFPO0VBQ3hDO0FBRUEsU0FBT1U7QUFDUjs7QUNsQkEsSUFBTU0sZ0JBQWdCQSxNQUFZO0FBQ2pDQyxTQUFPQyxpQkFBaUIsV0FBOEI7QUFDckQsVUFBTUMsT0FBTztBQUViQSxTQUFLQyxXQUFXLGdCQUFnQjtNQUMvQkMsVUFBVTtRQUNUQyxNQUFNO1VBQ0xuQixNQUFNO1VBQ05GLE9BQU9nQixPQUFPTSxNQUFNLFFBQVEsTUFBTTtRQUNuQztNQUNEO0lBQ0QsQ0FBQztBQUNESixTQUFLQyxXQUFXLGdCQUFnQjtNQUMvQkksU0FBUztNQUNUQyxRQUFRO1FBQ1BDLEtBQUssQ0FBQztNQUNQO0lBQ0QsQ0FBQztBQUNEUCxTQUFLQyxXQUFXLGdCQUFnQjtNQUMvQkksU0FBUztNQUNURyxPQUFPO01BQ1BDLE9BQU87UUFDTkMsU0FBUztVQUNSNUIsT0FBT2dCLE9BQU9NLE1BQU0sUUFBUSxNQUFNO1VBQ2xDcEIsTUFBTTtVQUNOTSxNQUFNRCxRQUFRO1lBQ2JzQixJQUFJYixPQUFPTSxNQUFNLFFBQVEsTUFBTTtZQUMvQlEsS0FBS2QsT0FBT00sTUFBTSxXQUFXLFNBQVM7WUFDdENTLFNBQVNmLE9BQU9NLE1BQU0sY0FBYyxZQUFZO1lBQ2hEVSxJQUFJaEIsT0FBT00sTUFBTSxpQkFBaUIsZUFBZTtZQUNqRFcsSUFBSWpCLE9BQU9NLE1BQU0saUJBQWlCLGVBQWU7VUFDbEQsQ0FBQztRQUNGO1FBQ0FZLE1BQU07VUFDTGxDLE9BQU87VUFDUEUsTUFBTTtVQUNOTSxNQUFNRCxRQUFRO1lBQ2I0QixHQUFHO1lBQ0hDLElBQUk7WUFDSkMsSUFBSXJCLE9BQU9NLE1BQU0sUUFBUSxNQUFNO1lBQy9CZ0IsSUFBSXRCLE9BQU9NLE1BQU0sVUFBVSxRQUFRO1lBQ25DaUIsS0FBS3ZCLE9BQU9NLE1BQU0sUUFBUSxNQUFNO1VBQ2pDLENBQUM7UUFDRjtRQUNBa0IsS0FBSztVQUNKeEMsT0FBT2dCLE9BQU9NLE1BQU0sTUFBTSxJQUFJO1VBQzlCcEIsTUFBTTtVQUNOTSxNQUFNRCxRQUFRO1lBQ2JrQyxHQUFHekIsT0FBT00sTUFBTSxNQUFNLElBQUk7WUFDMUJvQixLQUFLMUIsT0FBT00sTUFBTSxXQUFXLFNBQVM7VUFDdkMsQ0FBQztRQUNGO1FBQ0FxQixXQUFXO1VBQ1YzQyxPQUFPZ0IsT0FBT00sTUFBTSxRQUFRLE1BQU07VUFDbENwQixNQUFNO1VBQ05NLE1BQU1ELFFBQVE7WUFDYnFDLElBQUk1QixPQUFPTSxNQUFNLFFBQVEsTUFBTTtZQUMvQnVCLE1BQU03QixPQUFPTSxNQUFNLGlCQUFpQixlQUFlO1lBQ25Ed0IsS0FBSzlCLE9BQU9NLE1BQU0sZUFBZSxhQUFhO1lBQzlDeUIsTUFBTS9CLE9BQU9NLE1BQU0sY0FBYyxZQUFZO1VBQzlDLENBQUM7UUFDRjtRQUNBMEIsUUFBUTtVQUNQaEQsT0FBT2dCLE9BQU9NLE1BQU0sVUFBVSxRQUFRO1VBQ3RDcEIsTUFBTTtVQUNOTSxNQUFNRCxRQUFRO1lBQ2IwQyxHQUFHakMsT0FBT00sTUFBTSxRQUFRLE1BQU07WUFDOUI0QixHQUFHbEMsT0FBT00sTUFBTSxPQUFPLEtBQUs7WUFDNUI2QixJQUFJbkMsT0FBT00sTUFBTSxTQUFTLE9BQU87WUFDakM4QixHQUFHcEMsT0FBT00sTUFBTSxNQUFNLElBQUk7WUFDMUIrQixPQUFPckMsT0FBT00sTUFBTSxNQUFNLElBQUk7WUFDOUJnQyxJQUFJdEMsT0FBT00sTUFBTSxPQUFPLEtBQUs7VUFDOUIsQ0FBQztRQUNGO01BQ0Q7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUNGOztBQzdFQSxJQUFNO0VBQUNpQztBQUFVLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFbkMsSUFBSSwrQkFBK0JDLEtBQUtKLFVBQVUsR0FBRztBQUNwRHhDLGdCQUFjO0FBQ2Y7IiwKICAibmFtZXMiOiBbImdldFZmZFRleHQiLCAiY29kZSIsICJjb21tZW50IiwgImxhYmVsIiwgImFjdGlvbiIsICJ0eXBlIiwgIm9wdGlvbnMiLCAicHJlIiwgImNvbmNhdCIsICJwb3N0IiwgImdldExpc3QiLCAibGlzdCIsICJvYmplY3QiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImxlbmd0aCIsICJlZGl0dG9vbHNEZWxoIiwgIndpbmRvdyIsICJjdXN0b21pemVUb29sYmFyIiwgInNlbGYiLCAid2lraUVkaXRvciIsICJzZWN0aW9ucyIsICJkZWxoIiwgIndnVUxTIiwgInNlY3Rpb24iLCAiZ3JvdXBzIiwgInZmZCIsICJncm91cCIsICJ0b29scyIsICJpbnZhbGlkIiwgImlyIiwgInJlcCIsICJjb21tb25zIiwgIm5lIiwgIm5xIiwgImtlZXAiLCAiayIsICJzayIsICJ0ayIsICJyciIsICJkYW4iLCAiZGVsIiwgImQiLCAiaWZkIiwgInNwZWVkeURlbCIsICJzZCIsICJsc3NkIiwgInN2ZyIsICJkcmVwIiwgIm90aGVycyIsICJjIiwgInIiLCAiY3IiLCAibSIsICJtZXJnZSIsICJuYyIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAidGVzdCJdCn0K
