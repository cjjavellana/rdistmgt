Router.map(function(){
	this.route('home', {
		path: '/',
		template: 'map',
		layoutTemplate: 'layout' 
	});
	this.route('/createOps', {
		path: '/createOps',
		template: 'create_operation',
		layoutTemplate: 'layout',
		waitOn: function(){
			Meteor.subscribe("regions");
		}
	});
});