/**
 * Retrieves the list of menu items from the database and publishes them to the 
 * client as 'menu'
 */
MenuItems = new Meteor.Collection("menuitem");
Meteor.publish("menuItems", function(){
	return MenuItems.find({});
});


Meteor.startup(function () {
	
});