/**
* Callback function called by meteor after the 'map' template is rendered.
*/
Template.map.rendered = function(){
	var map = $('#map-canvas').drawMap({drawingOptions: true});
}