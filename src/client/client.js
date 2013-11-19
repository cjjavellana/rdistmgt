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
