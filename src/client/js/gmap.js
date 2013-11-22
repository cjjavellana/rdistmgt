//Wrapper for interacting and manipulating geographical regions.
(function($){
	$.fn.drawMap = function ( options ) {
		// ~ Global variables 
		var infoWindow;

		var defaults = {
			zoom: 8,
			center: new google.maps.LatLng(10.606485,122.736816), /* Guimaras Island, The Philippines */
		    mapTypeId: google.maps.MapTypeId.TERRAIN
		};

		var settings = $.extend({}, defaults, options);
		
		console.log(settings);
		var map = new google.maps.Map(this[0], settings);
		return map;
	};
})(jQuery);