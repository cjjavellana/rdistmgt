//connect to the mongodb database named 'red'
db = connect("192.168.1.1:27017/red");

//insert the menu items
db.menuitem.insert(
	[{
		label : 'Operations Center',
		url: '#',
		title: 'Create and manage relief operations from here. Dispatch and track packages to affected areas',
		menuitem: [
			{
				label: 'Create Relief Operations', 
				url: '/createOps', 
				title: 'Creates a new relief operation.'
			},
			{
				label: 'Manage Relief Operations', 
				url: '/manageOps', 
				title: 'Create packages and dispatch them to affected areas'
			}
		]
	},{
		label : 'Map Management',
		url: '#',
		title: 'Define a geographical region, set the region\'s population and crisis management center'
	}]
);