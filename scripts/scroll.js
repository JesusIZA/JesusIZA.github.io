$(function(){
	if($(window).height() < $(window).width()){
		var elements = $('.show');
		for (var i = 0; i < elements.length; i++) {
			$(elements[i]).addClass('start');
			$(elements[i]).on("click", function(event){
				$(event.target).toggleClass("start run");
			});
		}

		$(document).scroll(function(){
			for (var i = 0; i < elements.length; i++) {
				var distanceTop = $(elements[i]).offset().top - $(window).height();
				if  ($(window).scrollTop() > distanceTop) {
					$(elements[i]).click();
					$(elements[i]).off('click');
					elements.splice(i,i+1);
					break;
				}
			}
		});
	} else {
		$(window).height();
		$('body').css('background', 'url(images/5-fon-dlya-sayta.jpg)');
	}
});