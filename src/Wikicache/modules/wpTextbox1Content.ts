const getWpTextbox1Content = ({$body}: {$body: JQuery<HTMLBodyElement>}) => {
	return $body.find('textarea[name=wpTextbox1]').textSelection('getContents');
};

const setWpTextbox1Content = ({$body, content}: {$body: JQuery<HTMLBodyElement>; content: string}) => {
	$body.find('textarea[name=wpTextbox1]').textSelection('setContents', content);
};

export {getWpTextbox1Content, setWpTextbox1Content};
