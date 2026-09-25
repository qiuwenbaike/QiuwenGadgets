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
        pre: "{{delh|".concat(code, "}}\n"),
        post: "\n----\n: ".concat(comment, "。——~~").concat("~~\n{", "{delf}}")
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXR0b29scy1kZWxoL21vZHVsZXMvY29yZS50cyIsICJzcmMvRWRpdHRvb2xzLWRlbGgvbW9kdWxlcy9nZXRMaXN0LnRzIiwgInNyYy9FZGl0dG9vbHMtZGVsaC9FZGl0dG9vbHMtZGVsaC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjdXN0b21pemVUb29sYmFyfSBmcm9tICdleHQuZ2FkZ2V0LkVkaXR0b29scy1jdXN0b21pemVUb29sYmFyJztcbmltcG9ydCB7Z2V0TGlzdH0gZnJvbSAnLi9nZXRMaXN0JztcblxuY29uc3QgZWRpdHRvb2xzRGVsaCA9ICgpOiB2b2lkID0+IHtcblx0Y3VzdG9taXplVG9vbGJhcihmdW5jdGlvbiAodGhpczogSlF1ZXJ5KTogdm9pZCB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMgYXMgSlF1ZXJ5ICYge3dpa2lFZGl0b3I6IChtZXRob2Q6IHN0cmluZywgb3B0aW9uczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHZvaWR9O1xuXG5cdFx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0XHRzZWN0aW9uczoge1xuXHRcdFx0XHRkZWxoOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3Rvb2xiYXInLFxuXHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+e7k+adn+iuqOiuuicsICfntZDmnZ/oqI7oq5YnKSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0XHRzZWN0aW9uOiAnZGVsaCcsXG5cdFx0XHRncm91cHM6IHtcblx0XHRcdFx0dmZkOiB7fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0XHRzZWN0aW9uOiAnZGVsaCcsXG5cdFx0XHRncm91cDogJ3ZmZCcsXG5cdFx0XHR0b29sczoge1xuXHRcdFx0XHRpbnZhbGlkOiB7XG5cdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn6K+35rGC5peg5pWIJywgJ+iri+axgueEoeaViCcpLFxuXHRcdFx0XHRcdHR5cGU6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdGxpc3Q6IGdldExpc3Qoe1xuXHRcdFx0XHRcdFx0aXI6IHdpbmRvdy53Z1VMUygn6K+35rGC5peg5pWIJywgJ+iri+axgueEoeaViCcpLFxuXHRcdFx0XHRcdFx0cmVwOiB3aW5kb3cud2dVTFMoJ+mHjeWkjeaPkOWHuu+8jOaXoOaViCcsICfph43opIfmj5Dlh7rvvIznhKHmlYgnKSxcblx0XHRcdFx0XHRcdG5lOiB3aW5kb3cud2dVTFMoJ+ebruagh+mhtemdouaIluaWh+S7tuS4jeWtmOWcqO+8jOaXoOaViCcsICfnm67mqJnpoIHpnaLmiJbmqpTmoYjkuI3lrZjlnKjvvIznhKHmlYgnKSxcblx0XHRcdFx0XHRcdG5xOiB3aW5kb3cud2dVTFMoJ+aPkOWIoOiAheacquWPluW+l+aPkOWIoOi1hOagvO+8jOaXoOaViCcsICfmj5DliKrogIXmnKrlj5blvpfmj5DliKros4fmoLzvvIznhKHmlYgnKSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0fSxcblx0XHRcdFx0a2VlcDoge1xuXHRcdFx0XHRcdGxhYmVsOiAn5L+d55WZJyxcblx0XHRcdFx0XHR0eXBlOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHRsaXN0OiBnZXRMaXN0KHtcblx0XHRcdFx0XHRcdGs6ICfkv53nlZknLFxuXHRcdFx0XHRcdFx0c2s6ICflv6vpgJ/kv53nlZknLFxuXHRcdFx0XHRcdFx0dGs6IHdpbmRvdy53Z1VMUygn5pqC5pe25L+d55WZJywgJ+aaq+aZguS/neeVmScpLFxuXHRcdFx0XHRcdFx0cnI6IHdpbmRvdy53Z1VMUygn6K+35rGC55CG55Sx5raI5aSxJywgJ+iri+axgueQhueUsea2iOWksScpLFxuXHRcdFx0XHRcdFx0ZGFuOiB3aW5kb3cud2dVTFMoJ+WIoOWQjumHjeW7uicsICfliKrlvozph43lu7onKSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGVsOiB7XG5cdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5Yig6ZmkJywgJ+WIqumZpCcpLFxuXHRcdFx0XHRcdHR5cGU6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdGxpc3Q6IGdldExpc3Qoe1xuXHRcdFx0XHRcdFx0ZDogd2luZG93LndnVUxTKCfliKDpmaQnLCAn5Yiq6ZmkJyksXG5cdFx0XHRcdFx0XHRpZmQ6IHdpbmRvdy53Z1VMUygn5Zu+5YOP5Zug5L615p2D6KKr5YigJywgJ+WcluWDj+WboOS+teasiuiiq+WIqicpLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzcGVlZHlEZWw6IHtcblx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCflv6vpgJ/liKDpmaQnLCAn5b+r6YCf5Yiq6ZmkJyksXG5cdFx0XHRcdFx0dHlwZTogJ3NlbGVjdCcsXG5cdFx0XHRcdFx0bGlzdDogZ2V0TGlzdCh7XG5cdFx0XHRcdFx0XHRzZDogd2luZG93LndnVUxTKCflv6vpgJ/liKDpmaQnLCAn5b+r6YCf5Yiq6ZmkJyksXG5cdFx0XHRcdFx0XHRsc3NkOiB3aW5kb3cud2dVTFMoJ+aXoOadpea6kOaIlueJiOadg+i1hOiur++8jOW/q+mAn+WIoOmZpCcsICfnhKHkvobmupDmiJbniYjmrIros4foqIrvvIzlv6vpgJ/liKrpmaQnKSxcblx0XHRcdFx0XHRcdHN2Zzogd2luZG93LndnVUxTKCflt7LmlLnnlKhTVkflm77lvaLvvIzliKDpmaQnLCAn5bey5pS555SoU1ZH5ZyW5b2i77yM5Yiq6ZmkJyksXG5cdFx0XHRcdFx0XHRkcmVwOiB3aW5kb3cud2dVTFMoJ+Wkmuasoeiiq+WIoOmZpO+8jOadoeebrumUgeWumicsICflpJrmrKHooqvliKrpmaTvvIzmop3nm67pjpblrponKSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0fSxcblx0XHRcdFx0b3RoZXJzOiB7XG5cdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5YW25LuW5aSE55CG5pa55rOVJywgJ+WFtuS7luiZleeQhuaWueazlScpLFxuXHRcdFx0XHRcdHR5cGU6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdGxpc3Q6IGdldExpc3Qoe1xuXHRcdFx0XHRcdFx0Yzogd2luZG93LndnVUxTKCfovazkuqTkvrXmnYMnLCAn6L2J5Lqk5L615qyKJyksXG5cdFx0XHRcdFx0XHRyOiB3aW5kb3cud2dVTFMoJ+mHjeWumuWQkScsICfph43lrprlkJEnKSxcblx0XHRcdFx0XHRcdGNyOiB3aW5kb3cud2dVTFMoJ+WIhuexu+mHjeWumuWQkScsICfliIbpoZ7ph43lrprlkJEnKSxcblx0XHRcdFx0XHRcdG06IHdpbmRvdy53Z1VMUygn56e75YqoJywgJ+enu+WLlScpLFxuXHRcdFx0XHRcdFx0bWVyZ2U6IHdpbmRvdy53Z1VMUygn5bm25YWlJywgJ+S9teWFpScpLFxuXHRcdFx0XHRcdFx0bmM6IHdpbmRvdy53Z1VMUygn5peg5YWx6K+GJywgJ+eEoeWFseitmCcpLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2VkaXR0b29sc0RlbGh9O1xuIiwgImNvbnN0IGdldFZmZFRleHQgPSAoY29kZTogc3RyaW5nLCBjb21tZW50OiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIHtcblx0XHRsYWJlbDogY29tbWVudCxcblx0XHRhY3Rpb246IHtcblx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdHByZTogYHt7ZGVsaHwke2NvZGV9fX1cXG5gLFxuXHRcdFx0XHRwb3N0OiBgXFxuLS0tLVxcbjogJHtjb21tZW50feOAguKAlOKAlH5+YC5jb25jYXQoJ35+XFxueycsICd7ZGVsZn19JyksXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG59O1xuXG5jb25zdCBnZXRMaXN0ID0gPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PihsaXN0OiBUKTogUmVjb3JkPHN0cmluZywgUGFydGlhbDxSZXR1cm5UeXBlPHR5cGVvZiBnZXRWZmRUZXh0Pj4+ID0+IHtcblx0Y29uc3Qgb2JqZWN0OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRMaXN0PiA9IHt9O1xuXHRmb3IgKGNvbnN0IFtjb2RlLCBjb21tZW50XSBvZiBPYmplY3QuZW50cmllcyhsaXN0KSkge1xuXHRcdG9iamVjdFtjb2RlXSA9IGdldFZmZFRleHQoY29kZSwgY29tbWVudCk7XG5cdH1cblxuXHRyZXR1cm4gb2JqZWN0O1xufTtcblxuZXhwb3J0IHtnZXRMaXN0fTtcbiIsICJpbXBvcnQge2VkaXR0b29sc0RlbGh9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuY29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5pZiAoL15xaXV3ZW4oPzpbXyBddGFsayk/OuWtmOW6n+iuqOiuulxcLy9pLnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0ZWRpdHRvb2xzRGVsaCgpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQStCQyxRQUFBLHVDQUFBOztBQ0EvQixJQUFNQyxhQUFhQSxDQUFDQyxNQUFjQyxZQUFvQjtBQUNyRCxTQUFPO0lBQ05DLE9BQU9EO0lBQ1BFLFFBQVE7TUFDUEMsTUFBTTtNQUNOQyxTQUFTO1FBQ1JDLEtBQUEsVUFBQUMsT0FBZVAsTUFBSSxNQUFBO1FBQ25CUSxNQUFNLGFBQUFELE9BQWFOLFNBQU8sT0FBQSxFQUFRTSxPQUFPLFNBQVMsU0FBUztNQUM1RDtJQUNEO0VBQ0Q7QUFDRDtBQUVBLElBQU1FLFVBQTZDQyxVQUFvRTtBQUN0SCxRQUFNQyxTQUFxQyxDQUFDO0FBQzVDLFdBQUFDLEtBQUEsR0FBQUMsa0JBQThCQyxPQUFPQyxRQUFRTCxJQUFJLEdBQUFFLEtBQUFDLGdCQUFBRyxRQUFBSixNQUFHO0FBQXBELFVBQVcsQ0FBQ1osTUFBTUMsT0FBTyxJQUFBWSxnQkFBQUQsRUFBQTtBQUN4QkQsV0FBT1gsSUFBSSxJQUFJRCxXQUFXQyxNQUFNQyxPQUFPO0VBQ3hDO0FBRUEsU0FBT1U7QUFDUjs7QURqQkEsSUFBTU0sZ0JBQWdCQSxNQUFZO0FBQ2pDLEdBQUEsR0FBQXBCLGtCQUFBcUIsa0JBQWlCLFdBQThCO0FBQzlDLFVBQU1DLE9BQU87QUFFYkEsU0FBS0MsV0FBVyxnQkFBZ0I7TUFDL0JDLFVBQVU7UUFDVEMsTUFBTTtVQUNMbEIsTUFBTTtVQUNORixPQUFPcUIsT0FBT0MsTUFBTSxRQUFRLE1BQU07UUFDbkM7TUFDRDtJQUNELENBQUM7QUFDREwsU0FBS0MsV0FBVyxnQkFBZ0I7TUFDL0JLLFNBQVM7TUFDVEMsUUFBUTtRQUNQQyxLQUFLLENBQUM7TUFDUDtJQUNELENBQUM7QUFDRFIsU0FBS0MsV0FBVyxnQkFBZ0I7TUFDL0JLLFNBQVM7TUFDVEcsT0FBTztNQUNQQyxPQUFPO1FBQ05DLFNBQVM7VUFDUjVCLE9BQU9xQixPQUFPQyxNQUFNLFFBQVEsTUFBTTtVQUNsQ3BCLE1BQU07VUFDTk0sTUFBTUQsUUFBUTtZQUNic0IsSUFBSVIsT0FBT0MsTUFBTSxRQUFRLE1BQU07WUFDL0JRLEtBQUtULE9BQU9DLE1BQU0sV0FBVyxTQUFTO1lBQ3RDUyxJQUFJVixPQUFPQyxNQUFNLGlCQUFpQixlQUFlO1lBQ2pEVSxJQUFJWCxPQUFPQyxNQUFNLGlCQUFpQixlQUFlO1VBQ2xELENBQUM7UUFDRjtRQUNBVyxNQUFNO1VBQ0xqQyxPQUFPO1VBQ1BFLE1BQU07VUFDTk0sTUFBTUQsUUFBUTtZQUNiMkIsR0FBRztZQUNIQyxJQUFJO1lBQ0pDLElBQUlmLE9BQU9DLE1BQU0sUUFBUSxNQUFNO1lBQy9CZSxJQUFJaEIsT0FBT0MsTUFBTSxVQUFVLFFBQVE7WUFDbkNnQixLQUFLakIsT0FBT0MsTUFBTSxRQUFRLE1BQU07VUFDakMsQ0FBQztRQUNGO1FBQ0FpQixLQUFLO1VBQ0p2QyxPQUFPcUIsT0FBT0MsTUFBTSxNQUFNLElBQUk7VUFDOUJwQixNQUFNO1VBQ05NLE1BQU1ELFFBQVE7WUFDYmlDLEdBQUduQixPQUFPQyxNQUFNLE1BQU0sSUFBSTtZQUMxQm1CLEtBQUtwQixPQUFPQyxNQUFNLFdBQVcsU0FBUztVQUN2QyxDQUFDO1FBQ0Y7UUFDQW9CLFdBQVc7VUFDVjFDLE9BQU9xQixPQUFPQyxNQUFNLFFBQVEsTUFBTTtVQUNsQ3BCLE1BQU07VUFDTk0sTUFBTUQsUUFBUTtZQUNib0MsSUFBSXRCLE9BQU9DLE1BQU0sUUFBUSxNQUFNO1lBQy9Cc0IsTUFBTXZCLE9BQU9DLE1BQU0saUJBQWlCLGVBQWU7WUFDbkR1QixLQUFLeEIsT0FBT0MsTUFBTSxlQUFlLGFBQWE7WUFDOUN3QixNQUFNekIsT0FBT0MsTUFBTSxjQUFjLFlBQVk7VUFDOUMsQ0FBQztRQUNGO1FBQ0F5QixRQUFRO1VBQ1AvQyxPQUFPcUIsT0FBT0MsTUFBTSxVQUFVLFFBQVE7VUFDdENwQixNQUFNO1VBQ05NLE1BQU1ELFFBQVE7WUFDYnlDLEdBQUczQixPQUFPQyxNQUFNLFFBQVEsTUFBTTtZQUM5QjJCLEdBQUc1QixPQUFPQyxNQUFNLE9BQU8sS0FBSztZQUM1QjRCLElBQUk3QixPQUFPQyxNQUFNLFNBQVMsT0FBTztZQUNqQzZCLEdBQUc5QixPQUFPQyxNQUFNLE1BQU0sSUFBSTtZQUMxQjhCLE9BQU8vQixPQUFPQyxNQUFNLE1BQU0sSUFBSTtZQUM5QitCLElBQUloQyxPQUFPQyxNQUFNLE9BQU8sS0FBSztVQUM5QixDQUFDO1FBQ0Y7TUFDRDtJQUNELENBQUM7RUFDRixDQUFDO0FBQ0Y7O0FFN0VBLElBQU07RUFBQ2dDO0FBQVUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUVuQyxJQUFJLCtCQUErQkMsS0FBS0osVUFBVSxHQUFHO0FBQ3BEdkMsZ0JBQWM7QUFDZjsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRWZmRUZXh0IiwgImNvZGUiLCAiY29tbWVudCIsICJsYWJlbCIsICJhY3Rpb24iLCAidHlwZSIsICJvcHRpb25zIiwgInByZSIsICJjb25jYXQiLCAicG9zdCIsICJnZXRMaXN0IiwgImxpc3QiLCAib2JqZWN0IiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAiZWRpdHRvb2xzRGVsaCIsICJjdXN0b21pemVUb29sYmFyIiwgInNlbGYiLCAid2lraUVkaXRvciIsICJzZWN0aW9ucyIsICJkZWxoIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJzZWN0aW9uIiwgImdyb3VwcyIsICJ2ZmQiLCAiZ3JvdXAiLCAidG9vbHMiLCAiaW52YWxpZCIsICJpciIsICJyZXAiLCAibmUiLCAibnEiLCAia2VlcCIsICJrIiwgInNrIiwgInRrIiwgInJyIiwgImRhbiIsICJkZWwiLCAiZCIsICJpZmQiLCAic3BlZWR5RGVsIiwgInNkIiwgImxzc2QiLCAic3ZnIiwgImRyZXAiLCAib3RoZXJzIiwgImMiLCAiciIsICJjciIsICJtIiwgIm1lcmdlIiwgIm5jIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ0ZXN0Il0KfQo=
