$(function() {
	$(document.body).on('appear', '.feed', function(e, $affected) {
		$(this).addClass("appeared");
	});
	$('.feed').appear({force_process: true});
});