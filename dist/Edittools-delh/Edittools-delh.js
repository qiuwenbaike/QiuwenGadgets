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
//! src/Edittools-delh/modules/constant.ts
var WG_PAGE_NAME = mw.config.get("wgPageName");
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
if (/^qiuwen(?:[_ ]talk)?:存废讨论\//i.test(WG_PAGE_NAME)) {
  edittoolsDelh();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXR0b29scy1kZWxoL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXR0b29scy1kZWxoL21vZHVsZXMvZ2V0TGlzdC50cyIsICJzcmMvRWRpdHRvb2xzLWRlbGgvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9FZGl0dG9vbHMtZGVsaC9FZGl0dG9vbHMtZGVsaC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5cbmV4cG9ydCB7V0dfUEFHRV9OQU1FfTtcbiIsICJjb25zdCBnZXRWZmRUZXh0ID0gKGNvZGU6IHN0cmluZywgY29tbWVudDogc3RyaW5nKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0bGFiZWw6IGNvbW1lbnQsXG5cdFx0YWN0aW9uOiB7XG5cdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRwcmU6IGB7JHtge2RlbGh8JHtjb2RlfX19XFxuYH1gLFxuXHRcdFx0XHRwb3N0OiBgXFxuLS0tLVxcbjogJHtjb21tZW50feOAgi0tfn5gLmNvbmNhdCgnfn5cXG57JywgJ3tkZWxmfX0nKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcbn07XG5cbmNvbnN0IGdldExpc3QgPSA8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KGxpc3Q6IFQpOiBSZWNvcmQ8c3RyaW5nLCBQYXJ0aWFsPFJldHVyblR5cGU8dHlwZW9mIGdldFZmZFRleHQ+Pj4gPT4ge1xuXHRjb25zdCBvYmplY3Q6IFJldHVyblR5cGU8dHlwZW9mIGdldExpc3Q+ID0ge307XG5cdGZvciAoY29uc3QgW2NvZGUsIGNvbW1lbnRdIG9mIE9iamVjdC5lbnRyaWVzKGxpc3QpKSB7XG5cdFx0b2JqZWN0W2NvZGVdID0gZ2V0VmZkVGV4dChjb2RlLCBjb21tZW50KTtcblx0fVxuXG5cdHJldHVybiBvYmplY3Q7XG59O1xuXG5leHBvcnQge2dldExpc3R9O1xuIiwgImltcG9ydCB7Z2V0TGlzdH0gZnJvbSAnLi9nZXRMaXN0JztcblxuY29uc3QgZWRpdHRvb2xzRGVsaCA9ICgpOiB2b2lkID0+IHtcblx0d2luZG93LmN1c3RvbWl6ZVRvb2xiYXIoZnVuY3Rpb24gKHRoaXM6IEpRdWVyeSk6IHZvaWQge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzIGFzIEpRdWVyeSAmIHt3aWtpRWRpdG9yOiAobWV0aG9kOiBzdHJpbmcsIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiB2b2lkfTtcblxuXHRcdHNlbGYud2lraUVkaXRvcignYWRkVG9Ub29sYmFyJywge1xuXHRcdFx0c2VjdGlvbnM6IHtcblx0XHRcdFx0ZGVsaDoge1xuXHRcdFx0XHRcdHR5cGU6ICd0b29sYmFyJyxcblx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfnu5PmnZ/orqjorronLCAn57WQ5p2f6KiO6KuWJyksXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHNlbGYud2lraUVkaXRvcignYWRkVG9Ub29sYmFyJywge1xuXHRcdFx0c2VjdGlvbjogJ2RlbGgnLFxuXHRcdFx0Z3JvdXBzOiB7XG5cdFx0XHRcdHZmZDoge30sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHNlbGYud2lraUVkaXRvcignYWRkVG9Ub29sYmFyJywge1xuXHRcdFx0c2VjdGlvbjogJ2RlbGgnLFxuXHRcdFx0Z3JvdXA6ICd2ZmQnLFxuXHRcdFx0dG9vbHM6IHtcblx0XHRcdFx0aW52YWxpZDoge1xuXHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+ivt+axguaXoOaViCcsICfoq4vmsYLnhKHmlYgnKSxcblx0XHRcdFx0XHR0eXBlOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHRsaXN0OiBnZXRMaXN0KHtcblx0XHRcdFx0XHRcdGlyOiB3aW5kb3cud2dVTFMoJ+ivt+axguaXoOaViCcsICfoq4vmsYLnhKHmlYgnKSxcblx0XHRcdFx0XHRcdHJlcDogd2luZG93LndnVUxTKCfph43lpI3mj5Dlh7rvvIzml6DmlYgnLCAn6YeN6KSH5o+Q5Ye677yM54Sh5pWIJyksXG5cdFx0XHRcdFx0XHRjb21tb25zOiB3aW5kb3cud2dVTFMoJ+W6lOWcqOe7tOWfuuWFseS6q+i1hOa6kOaPkOivtycsICfmh4nlnKjntq3ln7rlhbHkuqvos4fmupDmj5Doq4snKSxcblx0XHRcdFx0XHRcdG5lOiB3aW5kb3cud2dVTFMoJ+ebruagh+mhtemdouaIluaWh+S7tuS4jeWtmOWcqO+8jOaXoOaViCcsICfnm67mqJnpoIHpnaLmiJbmqpTmoYjkuI3lrZjlnKjvvIznhKHmlYgnKSxcblx0XHRcdFx0XHRcdG5xOiB3aW5kb3cud2dVTFMoJ+aPkOWIoOiAheacquWPluW+l+aPkOWIoOi1hOagvO+8jOaXoOaViCcsICfmj5DliKrogIXmnKrlj5blvpfmj5DliKros4fmoLzvvIznhKHmlYgnKSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0fSxcblx0XHRcdFx0a2VlcDoge1xuXHRcdFx0XHRcdGxhYmVsOiAn5L+d55WZJyxcblx0XHRcdFx0XHR0eXBlOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHRsaXN0OiBnZXRMaXN0KHtcblx0XHRcdFx0XHRcdGs6ICfkv53nlZknLFxuXHRcdFx0XHRcdFx0c2s6ICflv6vpgJ/kv53nlZknLFxuXHRcdFx0XHRcdFx0dGs6IHdpbmRvdy53Z1VMUygn5pqC5pe25L+d55WZJywgJ+aaq+aZguS/neeVmScpLFxuXHRcdFx0XHRcdFx0cnI6IHdpbmRvdy53Z1VMUygn6K+35rGC55CG55Sx5raI5aSxJywgJ+iri+axgueQhueUsea2iOWksScpLFxuXHRcdFx0XHRcdFx0ZGFuOiB3aW5kb3cud2dVTFMoJ+WIoOWQjumHjeW7uicsICfliKrlvozph43lu7onKSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGVsOiB7XG5cdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5Yig6ZmkJywgJ+WIqumZpCcpLFxuXHRcdFx0XHRcdHR5cGU6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdGxpc3Q6IGdldExpc3Qoe1xuXHRcdFx0XHRcdFx0ZDogd2luZG93LndnVUxTKCfliKDpmaQnLCAn5Yiq6ZmkJyksXG5cdFx0XHRcdFx0XHRpZmQ6IHdpbmRvdy53Z1VMUygn5Zu+5YOP5Zug5L615p2D6KKr5YigJywgJ+WcluWDj+WboOS+teasiuiiq+WIqicpLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzcGVlZHlEZWw6IHtcblx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCflv6vpgJ/liKDpmaQnLCAn5b+r6YCf5Yiq6ZmkJyksXG5cdFx0XHRcdFx0dHlwZTogJ3NlbGVjdCcsXG5cdFx0XHRcdFx0bGlzdDogZ2V0TGlzdCh7XG5cdFx0XHRcdFx0XHRzZDogd2luZG93LndnVUxTKCflv6vpgJ/liKDpmaQnLCAn5b+r6YCf5Yiq6ZmkJyksXG5cdFx0XHRcdFx0XHRsc3NkOiB3aW5kb3cud2dVTFMoJ+aXoOadpea6kOaIlueJiOadg+i1hOiur++8jOW/q+mAn+WIoOmZpCcsICfnhKHkvobmupDmiJbniYjmrIros4foqIrvvIzlv6vpgJ/liKrpmaQnKSxcblx0XHRcdFx0XHRcdHN2Zzogd2luZG93LndnVUxTKCflt7LmlLnnlKhTVkflm77lvaLvvIzliKDpmaQnLCAn5bey5pS555SoU1ZH5ZyW5b2i77yM5Yiq6ZmkJyksXG5cdFx0XHRcdFx0XHRkcmVwOiB3aW5kb3cud2dVTFMoJ+Wkmuasoeiiq+WIoOmZpO+8jOadoeebrumUgeWumicsICflpJrmrKHooqvliKrpmaTvvIzmop3nm67pjpblrponKSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0fSxcblx0XHRcdFx0b3RoZXJzOiB7XG5cdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5YW25LuW5aSE55CG5pa55rOVJywgJ+WFtuS7luiZleeQhuaWueazlScpLFxuXHRcdFx0XHRcdHR5cGU6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdGxpc3Q6IGdldExpc3Qoe1xuXHRcdFx0XHRcdFx0Yzogd2luZG93LndnVUxTKCfovazkuqTkvrXmnYMnLCAn6L2J5Lqk5L615qyKJyksXG5cdFx0XHRcdFx0XHRyOiB3aW5kb3cud2dVTFMoJ+mHjeWumuWQkScsICfph43lrprlkJEnKSxcblx0XHRcdFx0XHRcdGNyOiB3aW5kb3cud2dVTFMoJ+WIhuexu+mHjeWumuWQkScsICfliIbpoZ7ph43lrprlkJEnKSxcblx0XHRcdFx0XHRcdG06IHdpbmRvdy53Z1VMUygn56e75YqoJywgJ+enu+WLlScpLFxuXHRcdFx0XHRcdFx0bWVyZ2U6IHdpbmRvdy53Z1VMUygn5bm25YWlJywgJ+S9teWFpScpLFxuXHRcdFx0XHRcdFx0bmM6IHdpbmRvdy53Z1VMUygn5peg5YWx6K+GJywgJ+eEoeWFseitmCcpLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2VkaXR0b29sc0RlbGh9O1xuIiwgImltcG9ydCB7V0dfUEFHRV9OQU1FfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtlZGl0dG9vbHNEZWxofSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmICgvXnFpdXdlbig/OltfIF10YWxrKT865a2Y5bqf6K6o6K66XFwvL2kudGVzdChXR19QQUdFX05BTUUpKSB7XG5cdGVkaXR0b29sc0RlbGgoKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGVBQXVCQyxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7O0FDQXZELElBQU1DLGFBQWFBLENBQUNDLE1BQWNDLFlBQW9CO0FBQ3JELFNBQU87SUFDTkMsT0FBT0Q7SUFDUEUsUUFBUTtNQUNQQyxNQUFNO01BQ05DLFNBQVM7UUFDUkMsS0FBQSxJQUFBQyxPQUFBLFNBQUFBLE9BQWtCUCxNQUFJLE1BQUEsQ0FBQTtRQUN0QlEsTUFBTSxhQUFBRCxPQUFhTixTQUFPLE9BQUEsRUFBUU0sT0FBTyxTQUFTLFNBQVM7TUFDNUQ7SUFDRDtFQUNEO0FBQ0Q7QUFFQSxJQUFNRSxVQUE2Q0MsVUFBb0U7QUFDdEgsUUFBTUMsU0FBcUMsQ0FBQztBQUM1QyxXQUFBQyxLQUFBLEdBQUFDLGtCQUE4QkMsT0FBT0MsUUFBUUwsSUFBSSxHQUFBRSxLQUFBQyxnQkFBQUcsUUFBQUosTUFBRztBQUFwRCxVQUFXLENBQUNaLE1BQU1DLE9BQU8sSUFBQVksZ0JBQUFELEVBQUE7QUFDeEJELFdBQU9YLElBQUksSUFBSUQsV0FBV0MsTUFBTUMsT0FBTztFQUN4QztBQUVBLFNBQU9VO0FBQ1I7O0FDbEJBLElBQU1NLGdCQUFnQkEsTUFBWTtBQUNqQ0MsU0FBT0MsaUJBQWlCLFdBQThCO0FBQ3JELFVBQU1DLE9BQU87QUFFYkEsU0FBS0MsV0FBVyxnQkFBZ0I7TUFDL0JDLFVBQVU7UUFDVEMsTUFBTTtVQUNMbkIsTUFBTTtVQUNORixPQUFPZ0IsT0FBT00sTUFBTSxRQUFRLE1BQU07UUFDbkM7TUFDRDtJQUNELENBQUM7QUFDREosU0FBS0MsV0FBVyxnQkFBZ0I7TUFDL0JJLFNBQVM7TUFDVEMsUUFBUTtRQUNQQyxLQUFLLENBQUM7TUFDUDtJQUNELENBQUM7QUFDRFAsU0FBS0MsV0FBVyxnQkFBZ0I7TUFDL0JJLFNBQVM7TUFDVEcsT0FBTztNQUNQQyxPQUFPO1FBQ05DLFNBQVM7VUFDUjVCLE9BQU9nQixPQUFPTSxNQUFNLFFBQVEsTUFBTTtVQUNsQ3BCLE1BQU07VUFDTk0sTUFBTUQsUUFBUTtZQUNic0IsSUFBSWIsT0FBT00sTUFBTSxRQUFRLE1BQU07WUFDL0JRLEtBQUtkLE9BQU9NLE1BQU0sV0FBVyxTQUFTO1lBQ3RDUyxTQUFTZixPQUFPTSxNQUFNLGNBQWMsWUFBWTtZQUNoRFUsSUFBSWhCLE9BQU9NLE1BQU0saUJBQWlCLGVBQWU7WUFDakRXLElBQUlqQixPQUFPTSxNQUFNLGlCQUFpQixlQUFlO1VBQ2xELENBQUM7UUFDRjtRQUNBWSxNQUFNO1VBQ0xsQyxPQUFPO1VBQ1BFLE1BQU07VUFDTk0sTUFBTUQsUUFBUTtZQUNiNEIsR0FBRztZQUNIQyxJQUFJO1lBQ0pDLElBQUlyQixPQUFPTSxNQUFNLFFBQVEsTUFBTTtZQUMvQmdCLElBQUl0QixPQUFPTSxNQUFNLFVBQVUsUUFBUTtZQUNuQ2lCLEtBQUt2QixPQUFPTSxNQUFNLFFBQVEsTUFBTTtVQUNqQyxDQUFDO1FBQ0Y7UUFDQWtCLEtBQUs7VUFDSnhDLE9BQU9nQixPQUFPTSxNQUFNLE1BQU0sSUFBSTtVQUM5QnBCLE1BQU07VUFDTk0sTUFBTUQsUUFBUTtZQUNia0MsR0FBR3pCLE9BQU9NLE1BQU0sTUFBTSxJQUFJO1lBQzFCb0IsS0FBSzFCLE9BQU9NLE1BQU0sV0FBVyxTQUFTO1VBQ3ZDLENBQUM7UUFDRjtRQUNBcUIsV0FBVztVQUNWM0MsT0FBT2dCLE9BQU9NLE1BQU0sUUFBUSxNQUFNO1VBQ2xDcEIsTUFBTTtVQUNOTSxNQUFNRCxRQUFRO1lBQ2JxQyxJQUFJNUIsT0FBT00sTUFBTSxRQUFRLE1BQU07WUFDL0J1QixNQUFNN0IsT0FBT00sTUFBTSxpQkFBaUIsZUFBZTtZQUNuRHdCLEtBQUs5QixPQUFPTSxNQUFNLGVBQWUsYUFBYTtZQUM5Q3lCLE1BQU0vQixPQUFPTSxNQUFNLGNBQWMsWUFBWTtVQUM5QyxDQUFDO1FBQ0Y7UUFDQTBCLFFBQVE7VUFDUGhELE9BQU9nQixPQUFPTSxNQUFNLFVBQVUsUUFBUTtVQUN0Q3BCLE1BQU07VUFDTk0sTUFBTUQsUUFBUTtZQUNiMEMsR0FBR2pDLE9BQU9NLE1BQU0sUUFBUSxNQUFNO1lBQzlCNEIsR0FBR2xDLE9BQU9NLE1BQU0sT0FBTyxLQUFLO1lBQzVCNkIsSUFBSW5DLE9BQU9NLE1BQU0sU0FBUyxPQUFPO1lBQ2pDOEIsR0FBR3BDLE9BQU9NLE1BQU0sTUFBTSxJQUFJO1lBQzFCK0IsT0FBT3JDLE9BQU9NLE1BQU0sTUFBTSxJQUFJO1lBQzlCZ0MsSUFBSXRDLE9BQU9NLE1BQU0sT0FBTyxLQUFLO1VBQzlCLENBQUM7UUFDRjtNQUNEO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFDRjs7QUM1RUEsSUFBSSwrQkFBK0JpQyxLQUFLOUQsWUFBWSxHQUFHO0FBQ3REc0IsZ0JBQWM7QUFDZjsiLAogICJuYW1lcyI6IFsiV0dfUEFHRV9OQU1FIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZ2V0VmZkVGV4dCIsICJjb2RlIiwgImNvbW1lbnQiLCAibGFiZWwiLCAiYWN0aW9uIiwgInR5cGUiLCAib3B0aW9ucyIsICJwcmUiLCAiY29uY2F0IiwgInBvc3QiLCAiZ2V0TGlzdCIsICJsaXN0IiwgIm9iamVjdCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibGVuZ3RoIiwgImVkaXR0b29sc0RlbGgiLCAid2luZG93IiwgImN1c3RvbWl6ZVRvb2xiYXIiLCAic2VsZiIsICJ3aWtpRWRpdG9yIiwgInNlY3Rpb25zIiwgImRlbGgiLCAid2dVTFMiLCAic2VjdGlvbiIsICJncm91cHMiLCAidmZkIiwgImdyb3VwIiwgInRvb2xzIiwgImludmFsaWQiLCAiaXIiLCAicmVwIiwgImNvbW1vbnMiLCAibmUiLCAibnEiLCAia2VlcCIsICJrIiwgInNrIiwgInRrIiwgInJyIiwgImRhbiIsICJkZWwiLCAiZCIsICJpZmQiLCAic3BlZWR5RGVsIiwgInNkIiwgImxzc2QiLCAic3ZnIiwgImRyZXAiLCAib3RoZXJzIiwgImMiLCAiciIsICJjciIsICJtIiwgIm1lcmdlIiwgIm5jIiwgInRlc3QiXQp9Cg==
