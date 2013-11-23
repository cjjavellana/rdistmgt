//Wrapper for interacting and manipulating geographical regions.
(function($){
	$.fn.drawMap = function ( options ) {
		// ~ Global variables 
		var infoWindow;

		var defaults = {
			zoom: 8,
			center: new google.maps.LatLng(10.606485,122.736816), /* Guimaras Island, The Philippines */
		    mapTypeId: google.maps.MapTypeId.TERRAIN,
		    drawingOptions: false
		};

		var settings = $.extend({}, defaults, options);
		var map = new google.maps.Map(this[0], settings);

		//allow user to draw polygon if 'drawingOption' is true
		if(settings.drawingOptions) {
			var drawingManager = new google.maps.drawing.DrawingManager({
				drawingMode: google.maps.drawing.OverlayType.POLYGON,
				drawingControl: true,
				drawingControlOptions: {
					position: google.maps.ControlPosition.TOP_CENTER,
					drawingModes: [
						google.maps.drawing.OverlayType.POLYGON
					]
				}
			});

			drawingManager.setMap(map);
		}


		return map;
	};
})(jQuery);