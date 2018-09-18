$(function(){
	if($(window).height() < $(window).width()){
		var elements = $('.show');
		for (var i = 0; i < elements.length; i++) {
			$(elements[i]).addClass('start');
			$(elements[i]).on("mouseenter", function(event){
				$(event.target).toggleClass("start run");
			});
		}

		$(document).scroll(function(){
			for (var i = 0; i < elements.length; i++) {
				if ($(document).scrollTop() + $(window).height() > $(elements[i]).offset().top &&
					$(document).scrollTop() - $(elements[i]).offset().top < $(elements[i]).height()) {
					$(elements[i]).mouseenter();
					$(elements[i]).off('mouseenter');
					elements.splice(i,i+1);
					break;
				}
			}
		});
	}
});