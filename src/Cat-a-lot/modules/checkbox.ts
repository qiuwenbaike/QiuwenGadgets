const checkboxShiftClick = (): void => {
	/*! jQuery checkboxShiftClick | GPL-2.0 <qwbk.cc/H:GPL> */
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	$.fn.catALotShiftClick = function (callback: (...args: unknown[]) => unknown): JQuery {
		let prevCheckbox: JQuery;
		// When our boxes are clicked..
		this.on('click.catALot', (event: JQuery.TriggeredEvent): void => {
			// Prevent following the link and text selection
			if (!event.ctrlKey) {
				event.preventDefault();
			}
			// Highlight last selected
			$('#cat_a_lot_last_selected').removeAttr('id');
			let $thisControl: JQuery = $(event.target);
			if (!$thisControl.hasClass('cat_a_lot_label')) {
				$thisControl = $thisControl.parents('.cat_a_lot_label');
			}
			$thisControl.attr('id', 'cat_a_lot_last_selected').toggleClass('cat_a_lot_selected');
			// And one has been clicked before……
			if (prevCheckbox && event.shiftKey) {
				const method: 'addClass' | 'removeClass' = $thisControl.hasClass('cat_a_lot_selected')
					? 'addClass'
					: 'removeClass';
				// Check or uncheck this one and all in-between checkboxes
				this.slice(
					Math.min(this.index(prevCheckbox), this.index($thisControl)),
					Math.max(this.index(prevCheckbox), this.index($thisControl)) + 1
				)[method]('cat_a_lot_selected');
			}
			// Either way, update the prevCheckbox variable to the one clicked now
			prevCheckbox = $thisControl;
			if (typeof callback === 'function') {
				callback();
			}
		});
		return this;
	};
};

export {checkboxShiftClick};
