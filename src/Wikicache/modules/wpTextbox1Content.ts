import {getBody} from 'ext.gadget.Util';

const getWpTextbox1Content = async () => {
	const $body = await getBody();
	return $body.find('textarea[name=wpTextbox1]').textSelection('getContents');
};

const setWpTextbox1Content = async (content: string) => {
	const $body = await getBody();
	$body.find('textarea[name=wpTextbox1]').textSelection('setContents', content);
};

export {getWpTextbox1Content, setWpTextbox1Content};
