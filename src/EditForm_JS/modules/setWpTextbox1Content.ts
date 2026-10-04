const setWpTextbox1Content = ({$editForm, content}: {$editForm: JQuery<HTMLElement>; content: string}): void => {
	$editForm.find<HTMLTextAreaElement>('#wpTextbox1').textSelection('setContents', content);
};

export {setWpTextbox1Content};
