(function templateTabs(): void {
	for (const container of document.querySelectorAll('.template-tabs-container')) {
		const containerId = container.id;
		const tabs = container.querySelectorAll<HTMLDivElement>('.mcTabs > div');
		const contents = container.querySelectorAll<HTMLDivElement>('.mcContents > div');

		const activateTabContent = (tabId: string) => {
			for (const content of contents) {
				const contentId = content.id.replace(new RegExp(`^${containerId}ps`), '');
				const matchTabId = tabId.replace(new RegExp(`^${containerId}bt`), '');

				if (contentId === matchTabId) {
					content.style.display = 'block';
					content.style.visibility = 'visible';
				} else {
					content.style.display = 'none';
					content.style.visibility = 'hidden';
				}
			}

			for (const tab of tabs) {
				if (tab.id === tabId) {
					tab.classList.add('mcBotoSel');
					tab.classList.remove('mcBoto');
				} else {
					tab.classList.add('mcBoto');
					tab.classList.remove('mcBotoSel');
				}
			}
		};

		for (const tab of tabs) {
			const tabId = tab.id;

			tab.addEventListener('click', (event) => {
				event.preventDefault();
				activateTabContent(tabId);
			});
		}
	}
})();
