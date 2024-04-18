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
//! src/Edittools-delh/modules/core.ts
var import_ext_gadget = require("ext.gadget.Edittools-customizeToolbar");
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
  (0, import_ext_gadget.customizeToolbar)(function() {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXR0b29scy1kZWxoL21vZHVsZXMvY29yZS50cyIsICJzcmMvRWRpdHRvb2xzLWRlbGgvbW9kdWxlcy9nZXRMaXN0LnRzIiwgInNyYy9FZGl0dG9vbHMtZGVsaC9FZGl0dG9vbHMtZGVsaC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjdXN0b21pemVUb29sYmFyfSBmcm9tICdleHQuZ2FkZ2V0LkVkaXR0b29scy1jdXN0b21pemVUb29sYmFyJztcbmltcG9ydCB7Z2V0TGlzdH0gZnJvbSAnLi9nZXRMaXN0JztcblxuY29uc3QgZWRpdHRvb2xzRGVsaCA9ICgpOiB2b2lkID0+IHtcblx0Y3VzdG9taXplVG9vbGJhcihmdW5jdGlvbiAodGhpczogSlF1ZXJ5KTogdm9pZCB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMgYXMgSlF1ZXJ5ICYge3dpa2lFZGl0b3I6IChtZXRob2Q6IHN0cmluZywgb3B0aW9uczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHZvaWR9O1xuXG5cdFx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0XHRzZWN0aW9uczoge1xuXHRcdFx0XHRkZWxoOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3Rvb2xiYXInLFxuXHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+e7k+adn+iuqOiuuicsICfntZDmnZ/oqI7oq5YnKSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0XHRzZWN0aW9uOiAnZGVsaCcsXG5cdFx0XHRncm91cHM6IHtcblx0XHRcdFx0dmZkOiB7fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0XHRzZWN0aW9uOiAnZGVsaCcsXG5cdFx0XHRncm91cDogJ3ZmZCcsXG5cdFx0XHR0b29sczoge1xuXHRcdFx0XHRpbnZhbGlkOiB7XG5cdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn6K+35rGC5peg5pWIJywgJ+iri+axgueEoeaViCcpLFxuXHRcdFx0XHRcdHR5cGU6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdGxpc3Q6IGdldExpc3Qoe1xuXHRcdFx0XHRcdFx0aXI6IHdpbmRvdy53Z1VMUygn6K+35rGC5peg5pWIJywgJ+iri+axgueEoeaViCcpLFxuXHRcdFx0XHRcdFx0cmVwOiB3aW5kb3cud2dVTFMoJ+mHjeWkjeaPkOWHuu+8jOaXoOaViCcsICfph43opIfmj5Dlh7rvvIznhKHmlYgnKSxcblx0XHRcdFx0XHRcdGNvbW1vbnM6IHdpbmRvdy53Z1VMUygn5bqU5Zyo57u05Z+65YWx5Lqr6LWE5rqQ5o+Q6K+3JywgJ+aHieWcqOe2reWfuuWFseS6q+izh+a6kOaPkOiriycpLFxuXHRcdFx0XHRcdFx0bmU6IHdpbmRvdy53Z1VMUygn55uu5qCH6aG16Z2i5oiW5paH5Lu25LiN5a2Y5Zyo77yM5peg5pWIJywgJ+ebruaomemggemdouaIluaqlOahiOS4jeWtmOWcqO+8jOeEoeaViCcpLFxuXHRcdFx0XHRcdFx0bnE6IHdpbmRvdy53Z1VMUygn5o+Q5Yig6ICF5pyq5Y+W5b6X5o+Q5Yig6LWE5qC877yM5peg5pWIJywgJ+aPkOWIquiAheacquWPluW+l+aPkOWIquizh+agvO+8jOeEoeaViCcpLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRrZWVwOiB7XG5cdFx0XHRcdFx0bGFiZWw6ICfkv53nlZknLFxuXHRcdFx0XHRcdHR5cGU6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdGxpc3Q6IGdldExpc3Qoe1xuXHRcdFx0XHRcdFx0azogJ+S/neeVmScsXG5cdFx0XHRcdFx0XHRzazogJ+W/q+mAn+S/neeVmScsXG5cdFx0XHRcdFx0XHR0azogd2luZG93LndnVUxTKCfmmoLml7bkv53nlZknLCAn5pqr5pmC5L+d55WZJyksXG5cdFx0XHRcdFx0XHRycjogd2luZG93LndnVUxTKCfor7fmsYLnkIbnlLHmtojlpLEnLCAn6KuL5rGC55CG55Sx5raI5aSxJyksXG5cdFx0XHRcdFx0XHRkYW46IHdpbmRvdy53Z1VMUygn5Yig5ZCO6YeN5bu6JywgJ+WIquW+jOmHjeW7uicpLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRkZWw6IHtcblx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfliKDpmaQnLCAn5Yiq6ZmkJyksXG5cdFx0XHRcdFx0dHlwZTogJ3NlbGVjdCcsXG5cdFx0XHRcdFx0bGlzdDogZ2V0TGlzdCh7XG5cdFx0XHRcdFx0XHRkOiB3aW5kb3cud2dVTFMoJ+WIoOmZpCcsICfliKrpmaQnKSxcblx0XHRcdFx0XHRcdGlmZDogd2luZG93LndnVUxTKCflm77lg4/lm6DkvrXmnYPooqvliKAnLCAn5ZyW5YOP5Zug5L615qyK6KKr5YiqJyksXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNwZWVkeURlbDoge1xuXHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+W/q+mAn+WIoOmZpCcsICflv6vpgJ/liKrpmaQnKSxcblx0XHRcdFx0XHR0eXBlOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHRsaXN0OiBnZXRMaXN0KHtcblx0XHRcdFx0XHRcdHNkOiB3aW5kb3cud2dVTFMoJ+W/q+mAn+WIoOmZpCcsICflv6vpgJ/liKrpmaQnKSxcblx0XHRcdFx0XHRcdGxzc2Q6IHdpbmRvdy53Z1VMUygn5peg5p2l5rqQ5oiW54mI5p2D6LWE6K6v77yM5b+r6YCf5Yig6ZmkJywgJ+eEoeS+hua6kOaIlueJiOasiuizh+ioiu+8jOW/q+mAn+WIqumZpCcpLFxuXHRcdFx0XHRcdFx0c3ZnOiB3aW5kb3cud2dVTFMoJ+W3suaUueeUqFNWR+WbvuW9ou+8jOWIoOmZpCcsICflt7LmlLnnlKhTVkflnJblvaLvvIzliKrpmaQnKSxcblx0XHRcdFx0XHRcdGRyZXA6IHdpbmRvdy53Z1VMUygn5aSa5qyh6KKr5Yig6Zmk77yM5p2h55uu6ZSB5a6aJywgJ+Wkmuasoeiiq+WIqumZpO+8jOaineebrumOluWumicpLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRvdGhlcnM6IHtcblx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCflhbbku5blpITnkIbmlrnms5UnLCAn5YW25LuW6JmV55CG5pa55rOVJyksXG5cdFx0XHRcdFx0dHlwZTogJ3NlbGVjdCcsXG5cdFx0XHRcdFx0bGlzdDogZ2V0TGlzdCh7XG5cdFx0XHRcdFx0XHRjOiB3aW5kb3cud2dVTFMoJ+i9rOS6pOS+teadgycsICfovYnkuqTkvrXmrIonKSxcblx0XHRcdFx0XHRcdHI6IHdpbmRvdy53Z1VMUygn6YeN5a6a5ZCRJywgJ+mHjeWumuWQkScpLFxuXHRcdFx0XHRcdFx0Y3I6IHdpbmRvdy53Z1VMUygn5YiG57G76YeN5a6a5ZCRJywgJ+WIhumhnumHjeWumuWQkScpLFxuXHRcdFx0XHRcdFx0bTogd2luZG93LndnVUxTKCfnp7vliqgnLCAn56e75YuVJyksXG5cdFx0XHRcdFx0XHRtZXJnZTogd2luZG93LndnVUxTKCflubblhaUnLCAn5L215YWlJyksXG5cdFx0XHRcdFx0XHRuYzogd2luZG93LndnVUxTKCfml6DlhbHor4YnLCAn54Sh5YWx6K2YJyksXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7ZWRpdHRvb2xzRGVsaH07XG4iLCAiY29uc3QgZ2V0VmZkVGV4dCA9IChjb2RlOiBzdHJpbmcsIGNvbW1lbnQ6IHN0cmluZykgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGxhYmVsOiBjb21tZW50LFxuXHRcdGFjdGlvbjoge1xuXHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0cHJlOiBgeyR7YHtkZWxofCR7Y29kZX19fVxcbmB9YCxcblx0XHRcdFx0cG9zdDogYFxcbi0tLS1cXG46ICR7Y29tbWVudH3jgIItLX5+YC5jb25jYXQoJ35+XFxueycsICd7ZGVsZn19JyksXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG59O1xuXG5jb25zdCBnZXRMaXN0ID0gPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PihsaXN0OiBUKTogUmVjb3JkPHN0cmluZywgUGFydGlhbDxSZXR1cm5UeXBlPHR5cGVvZiBnZXRWZmRUZXh0Pj4+ID0+IHtcblx0Y29uc3Qgb2JqZWN0OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRMaXN0PiA9IHt9O1xuXHRmb3IgKGNvbnN0IFtjb2RlLCBjb21tZW50XSBvZiBPYmplY3QuZW50cmllcyhsaXN0KSkge1xuXHRcdG9iamVjdFtjb2RlXSA9IGdldFZmZFRleHQoY29kZSwgY29tbWVudCk7XG5cdH1cblxuXHRyZXR1cm4gb2JqZWN0O1xufTtcblxuZXhwb3J0IHtnZXRMaXN0fTtcbiIsICJpbXBvcnQge2VkaXR0b29sc0RlbGh9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuY29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5pZiAoL15xaXV3ZW4oPzpbXyBddGFsayk/OuWtmOW6n+iuqOiuulxcLy9pLnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0ZWRpdHRvb2xzRGVsaCgpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQStCQyxRQUFBLHVDQUFBOztBQ0EvQixJQUFNQyxhQUFhQSxDQUFDQyxNQUFjQyxZQUFvQjtBQUNyRCxTQUFPO0lBQ05DLE9BQU9EO0lBQ1BFLFFBQVE7TUFDUEMsTUFBTTtNQUNOQyxTQUFTO1FBQ1JDLEtBQUEsSUFBQUMsT0FBQSxTQUFBQSxPQUFrQlAsTUFBSSxNQUFBLENBQUE7UUFDdEJRLE1BQU0sYUFBQUQsT0FBYU4sU0FBTyxPQUFBLEVBQVFNLE9BQU8sU0FBUyxTQUFTO01BQzVEO0lBQ0Q7RUFDRDtBQUNEO0FBRUEsSUFBTUUsVUFBNkNDLFVBQW9FO0FBQ3RILFFBQU1DLFNBQXFDLENBQUM7QUFD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QUFDcER4QyxnQkFBYztBQUNmOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldFZmZFRleHQiLCAiY29kZSIsICJjb21tZW50IiwgImxhYmVsIiwgImFjdGlvbiIsICJ0eXBlIiwgIm9wdGlvbnMiLCAicHJlIiwgImNvbmNhdCIsICJwb3N0IiwgImdldExpc3QiLCAibGlzdCIsICJvYmplY3QiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImxlbmd0aCIsICJlZGl0dG9vbHNEZWxoIiwgImN1c3RvbWl6ZVRvb2xiYXIiLCAic2VsZiIsICJ3aWtpRWRpdG9yIiwgInNlY3Rpb25zIiwgImRlbGgiLCAid2luZG93IiwgIndnVUxTIiwgInNlY3Rpb24iLCAiZ3JvdXBzIiwgInZmZCIsICJncm91cCIsICJ0b29scyIsICJpbnZhbGlkIiwgImlyIiwgInJlcCIsICJjb21tb25zIiwgIm5lIiwgIm5xIiwgImtlZXAiLCAiayIsICJzayIsICJ0ayIsICJyciIsICJkYW4iLCAiZGVsIiwgImQiLCAiaWZkIiwgInNwZWVkeURlbCIsICJzZCIsICJsc3NkIiwgInN2ZyIsICJkcmVwIiwgIm90aGVycyIsICJjIiwgInIiLCAiY3IiLCAibSIsICJtZXJnZSIsICJuYyIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAidGVzdCJdCn0K
