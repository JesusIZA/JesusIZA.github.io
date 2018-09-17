$(function(){
	var elements = $('.show');
	console.log(elements);
	for (var i = 0; i < elements.length; i++) {
		$(elements[i]).addClass('start');
		$(elements[i]).on("click", function(event){
			$(event.target).toggleClass("start run");
			console.log($(event.target).html());
		})
	}

	$(document).scroll(function(){
		for (var i = 0; i < elements.length; i++) {
			if ($(document).scrollTop() + $(window).height() > $(elements[i]).offset().top &&
				$(document).scrollTop() - $(elements[i]).offset().top < $(elements[i]).height()) {
				$(elements[i]).click();
				$(elements[i]).off('click');
			}
		}
	});
});