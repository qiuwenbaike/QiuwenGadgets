import {$body} from '../../util';

export const editIntro = (): void => {
	/* 编辑提示（editintro） */
	const addEditIntro = (name: string): void => {
		$body
			.find('.mw-editsection, #ca-edit, #ca-addsection')
			.find('a')
			.each((_index, element) => {
				element.href = `${$(element).attr('href')}&editintro=${name}`;
			});
	};
	const cats = mw.config.get('wgCategories');
	if (!cats) {
		return;
	}
	switch (mw.config.get('wgNamespaceNumber')) {
		case 0:
			if (cats.includes('全部消歧义页面')) {
				addEditIntro('Template:Disambig_editintro');
			}
			if (cats.includes('在世人物')) {
				addEditIntro('Template:BLP_editintro');
			}
			if (
				/抗日?[战戰][争爭]?[牺犧]牲|烈士|[战戰][斗鬥鬦]英雄|英雄?模[範范]?|英雄?烈士?|人民(教育家|[艺藝][术術]家|科[学學]家|英雄|楷模)|共和[国國][勋勳]章|[七八]一[勋勳]章[獲获]得者|[一特]等功臣/.test(
					cats.toString()
				) === true
			) {
				addEditIntro('Template:BLP_editintro');
			}
			break;
		case 4:
			if (cats.includes('求闻百科方针完整列表')) {
				addEditIntro('Template:Policy_editintro');
			}
			break;
		case 8:
		case 12:
			if (cats.includes('CC-BY-NC-SA-4.0')) {
				addEditIntro('Template:NonCommercial_editintro');
			}
			if (cats.includes('GPL-3.0')) {
				addEditIntro('Template:GPL-3.0_editintro');
			}
			if (cats.includes('GPL-2.0-or-later')) {
				addEditIntro('Template:GPL-2.0-or-later_editintro');
			}
			if (cats.includes('MIT许可证')) {
				addEditIntro('Template:MIT_editintro');
			}
			if (
				['edit', 'submit'].includes(mw.config.get('wgAction')) &&
				$body.find('.mw-editintro').length > 0 &&
				$body.find('#editpage-copywarn').length > 0
			) {
				$body.find('.mw-editintro').appendTo($body.find('#editpage-copywarn'));
			}
			break;
	}
};
