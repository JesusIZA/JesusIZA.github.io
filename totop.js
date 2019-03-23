$(function(){
	var btnTop = $('.btn-top');
	$(window).scroll(function(){
		if($(window).scrollTop() >= 30){
			btnTop.fadeIn(400);
		} else {
			btnTop.fadeOut(400);
		}
	});
	btnTop.click(function(){
		$('html,body').animate({scrollTop:0}, 900);
	});
});