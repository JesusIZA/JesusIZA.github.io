$(function(){
	if($(window).width() <= 850){
		$("menu").hide();
	} else {
		$("menu").show();
	}

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
	if($("menu").css("flex-direction") == "column"){
		$('#btn-cources').click(function(){
			$("menu").fadeOut(500);
			$('html,body').animate({scrollTop:$("#cources").offset().top}, 900);
		});
		$('#btn-development').click(function(){
			$("menu").fadeOut(500);
			$('html,body').animate({scrollTop:$("#development").offset().top}, 900);
		});
		$('#btn-contacts').click(function(){
			$("menu").fadeOut(500);
			$('html,body').animate({scrollTop:$("footer").offset().top}, 900);
		});
	} else {
		$('#btn-cources').click(function(){
			$('html,body').animate({scrollTop:$("#cources").offset().top}, 900);
		});
		$('#btn-development').click(function(){
			$('html,body').animate({scrollTop:$("#development").offset().top}, 900);
		});
		$('#btn-contacts').click(function(){
			$('html,body').animate({scrollTop:$("footer").offset().top}, 900);
		});
	}
	$(".open").click(function(){
		$("menu").fadeIn(500);
	})
	$("menu .close").click(function(){
		$("menu").fadeOut(500);
	});

	$(window).on("resize", function(){
		if($(window).width() <= 850){
			$("menu").hide();
		} else {
			$("menu").show();
		}
		if($("menu").css("flex-direction") == "column"){
		$('#btn-cources').off().click(function(){
			$("menu").fadeOut(500);
			$('html,body').animate({scrollTop:$("#cources").offset().top}, 900);
		});
		$('#btn-development').off().click(function(){
			$("menu").fadeOut(500);
			$('html,body').animate({scrollTop:$("#development").offset().top}, 900);
		});
		$('#btn-contacts').off().click(function(){
			$("menu").fadeOut(500);
			$('html,body').animate({scrollTop:$("footer").offset().top}, 900);
		});
	} else {
		$('#btn-cources').off().click(function(){
			$('html,body').animate({scrollTop:$("#cources").offset().top}, 900);
		});
		$('#btn-development').off().click(function(){
			$('html,body').animate({scrollTop:$("#development").offset().top}, 900);
		});
		$('#btn-contacts').off().click(function(){
			$('html,body').animate({scrollTop:$("footer").offset().top}, 900);
		});
	}
	});

});