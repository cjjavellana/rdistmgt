/**
 * Retrieves the list of menu items from the database and publishes them to the 
 * client as 'menu'
 */
MenuItems = new Meteor.Collection("menuitem");
Meteor.publish("menuItems", function(){
	return MenuItems.find({});
});

Regions = new Meteor.Collection("regions");
Meteor.publish("regions", function(){
	return Regions.find({});
});

Meteor.publish('lgus', function(regionname){
	console.log('test ' + regionname);
	if(regionname){
		return Regions.find({name: regionname}, {lgu: 1});
	}
	return Regions.find({});
});

Meteor.startup(function () {
	
});