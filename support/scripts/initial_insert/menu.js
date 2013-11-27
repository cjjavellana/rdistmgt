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
			},{
				label: 'Track Shipments', 
				url: '/trackShipments', 
				title: 'Track relief shipments by specifying the shipment number'
			}
		]
	},{
		label : 'Map Management',
		url: '#',
		title: 'Define a geographical region, set the region\'s population and crisis management center',
		menuitem: [{
			label: 'Draw Regions',
			url: '/drawRegions',
			title: 'Create an geographical region by drawing an overlay over an area on the map'
		},{
			label: 'Manage Regions',
			url: '/manageRegions',
			title: 'Create / Update/ Remove a geographical region and manage the population'
		}]
	}]
);

db.regions.insert(
	[{
		name: 'Region 1',
		description: 'Ilocos Region',
		lgu: ['Dagupan', 'Ilocos Norte', 'Ilocos Sur', 'La Union', 'Pangasinan'],
		/** The latitude & longitude boundaries of the region*/
		boundaries: []	
	},{
		name: 'Region 2',
		description: 'Cagayan Valley',
		lgu: ['Batanes', 'Cagayan', 'Isabela', 'Nueva Vizcaya', 'Quirino', 'Santiago'],
		/** The latitude & longitude boundaries of the region*/
		boundaries: []	
	},{
		name: 'Region 3',
		description: 'Central Luzon',
		lgu: ['Angeles', 'Aurora', 'Bataan', 'Bulacan', 'Nueva Ecija', 
			'Olongapo', 'Pampanga', 'Tarlac', 'Zambales'],
		/** The latitude & longitude boundaries of the region*/
		boundaries: []	
	}]
);