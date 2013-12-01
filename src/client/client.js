//listen to 'menuItems' events being published from the server
Meteor.subscribe("menuItems");
MenuItems = new Meteor.Collection('menuitem');
Template.menu.menuItems = function() {
	return MenuItems.find({});
}

// Checks whether the current 'this' menu item has sub menu items.
Template.menu.hasChildren = function() {
	if(this.menuitem) {
		return this.menuitem.length > 0;
	}
	return false;
}

Meteor.subscribe("allRegions");
Regions = new Meteor.Collection("regions");
Template.region_template.regions = function(){
	return Regions.find({});
}

Template.lgu_template.lgus = function(){
	var result = Regions.find({name: Session.get('selected_region')}, {lgu: 1});
	return result;
}

Deps.autorun(function(){
	/**
	 * Finds the lgus for the specified region
	 */
	//Meteor.subscribe('lgus', Session.get('selected_region'));
});