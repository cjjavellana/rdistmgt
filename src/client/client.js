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

Regions = new Meteor.Collection("regions");
Template.create_operation.regions = function(){
	return Regions.find({});
}

Template.lgu_template.lgus = function(parent){
	var region_name = Session.get('selected_region');
	if( region_name != undefined){
		return Regions.find({name: region_name}, {lgu: 1});
	}

	return [];
}

Deps.autorun(function(){
	Meteor.subscribe('lgus', Session.get('selected_region'));
});