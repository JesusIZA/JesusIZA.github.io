$(function(){
	var title = $('.top-bar h1');
	$(window).scroll(function(){
		if($(window).scrollTop() >= 550){
			title.css("opacity", "1");
		} else {
			title.css("opacity", "0");
		}
	});
	$(window).scrollTop(0);
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
	$('#btn-cources').click(function(){
		$('html,body').animate({scrollTop:$("#cources").offset().top}, 900);
	});
	$('#btn-development').click(function(){
		$('html,body').animate({scrollTop:$("#development").offset().top}, 900);
	});
	$('#btn-contacts').click(function(){
		$('html,body').animate({scrollTop:$("footer").offset().top}, 900);
	});

	var spans = $('.scrolly');
	for (var i = 0; i < spans.length; i++) {
		$(spans[i]).addClass('start');
		$(spans[i]).on("click", function(event){
			$(event.target).toggleClass("start run");
		})
	}
	$(document).scroll(function(){
		for (var i = 0; i < spans.length; i++) {
			if ($(document).scrollTop() + $(window).height() > $(spans[i]).offset().top &&
				$(document).scrollTop() - $(spans[i]).offset().top < $(spans[i]).height()+100) {
				$(spans[i]).click();
				$(spans[i]).off('click');
				spans.splice(i, i+1);
				break;
			}
		}
	});


});