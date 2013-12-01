Template.create_operation.events({
	/**
	 * Since we are using bootsrap-select plugin to skin the 'select' elements. This is the
	 * workaround for capturing the 'onchange' event.
	 *
	 * When we skin a select dropdown element with bootstrap select, the original select 
	 * element gets hidden through the style 'display: none;' and gets replaced with divs,
	 * uls and lis.
	 *
	 * $(e.currentTarget).attr('rel') returns the select option's selectedIndex.
	 */
	'click div.region ul.selectpicker li': function(e){
		//get the selectedIndex from the li element
		var selectedIndex = $(e.currentTarget).attr('rel');
		//The the option's value based on the selectedIndex
		var val = $('select#region option:eq(' + selectedIndex + ')').attr('value');
		Session.set('selected_region', val);
	}
});