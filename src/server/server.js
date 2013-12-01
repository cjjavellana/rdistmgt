/**
 * Retrieves the list of menu items from the database and publishes them to the 
 * client as 'menu'
 */
MenuItems = new Meteor.Collection("menuitem");
Meteor.publish("menuItems", function(){
	return MenuItems.find({});
});

Regions = new Meteor.Collection("regions");
Meteor.publish("allRegions", function(){
	return Regions.find({});
});

Meteor.publish('lgus', function(regionId){
	//Console.log('Retrieving region: ' + regionId);
	var tb = Observatory.getToolbox();
	tb.debug('Some Debugging Stuff', regionId);
	return Regions.find({_id: regionId}, {lgu: 1});
});

Meteor.startup(function () {
	
});