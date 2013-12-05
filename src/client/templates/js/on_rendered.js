/**
* Callback function called by meteor after the 'map' template is rendered.
*/
Template.map.rendered = function(){
	var map = $('#map-canvas').drawMap({drawingOptions: true});
}

Template.create_operation.rendered = function(){
	$('input,textarea').not("[type=submit]").jqBootstrapValidation();
	//$('.selectpicker').selectpicker();
}

Template.lgu_template.rendered = function(){
	$('.selectpicker').selectpicker('refresh');
}

