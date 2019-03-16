$(function(){
	if($(window).height() < $(window).width()){
		var elems = $('.scroll');
		for (var i = 0; i < elems.length; i++) {
			$(elems[i]).addClass('hiden');
		}
		function doAnimation(element){
			console.log(element);
			element.removeClass("hiden");
			element.addClass("showed");
		}

		$('.scroll').scrollie({
			scrollOffset: -50,
			scrollingInView: function(element){
				doAnimation(element);
			}
		});

	} else {
		$('body').css('background', 'url(images/5-fon-dlya-sayta.jpg)');
	}
});