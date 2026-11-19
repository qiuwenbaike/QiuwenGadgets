import {customizeToolbar} from 'ext.gadget.Edittools-customizeToolbar';
import {getList} from './getList';
import {uls} from './useUls';

const edittoolsDelh = (): void => {
	customizeToolbar(function (this: JQuery): void {
		const self = this as JQuery & {wikiEditor: (method: string, options: Record<string, unknown>) => void};

		self.wikiEditor('addToToolbar', {
			sections: {
				delh: {
					type: 'toolbar',
					label: uls('结束讨论', '結束討論'),
				},
			},
		});
		self.wikiEditor('addToToolbar', {
			section: 'delh',
			groups: {
				vfd: {},
			},
		});
		self.wikiEditor('addToToolbar', {
			section: 'delh',
			group: 'vfd',
			tools: {
				invalid: {
					label: uls('请求无效', '請求無效'),
					type: 'select',
					list: getList({
						ir: uls('请求无效', '請求無效'),
						rep: uls('重复提出，无效', '重複提出，無效'),
						ne: uls('目标页面或文件不存在，无效', '目標頁面或檔案不存在，無效'),
						nq: uls('提删者未取得提删资格，无效', '提刪者未取得提刪資格，無效'),
					}),
				},
				keep: {
					label: '保留',
					type: 'select',
					list: getList({
						k: '保留',
						sk: '快速保留',
						tk: uls('暂时保留', '暫時保留'),
						rr: uls('请求理由消失', '請求理由消失'),
						dan: uls('删后重建', '刪後重建'),
					}),
				},
				del: {
					label: uls('删除', '刪除'),
					type: 'select',
					list: getList({
						d: uls('删除', '刪除'),
						ifd: uls('图像因侵权被删', '圖像因侵權被刪'),
					}),
				},
				speedyDel: {
					label: uls('快速删除', '快速刪除'),
					type: 'select',
					list: getList({
						sd: uls('快速删除', '快速刪除'),
						lssd: uls('无来源或版权资讯，快速删除', '無來源或版權資訊，快速刪除'),
						svg: uls('已改用SVG图形，删除', '已改用SVG圖形，刪除'),
						drep: uls('多次被删除，条目锁定', '多次被刪除，條目鎖定'),
					}),
				},
				others: {
					label: uls('其他处理方法', '其他處理方法'),
					type: 'select',
					list: getList({
						c: uls('转交侵权', '轉交侵權'),
						r: uls('重定向', '重定向'),
						cr: uls('分类重定向', '分類重定向'),
						m: uls('移动', '移動'),
						merge: uls('并入', '併入'),
						nc: uls('无共识', '無共識'),
					}),
				},
			},
		});
	});
};

export {edittoolsDelh};
