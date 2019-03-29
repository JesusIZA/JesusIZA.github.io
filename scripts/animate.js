$(function(){	
	$('html, body').scrollTop(0);
function getRandom(min, max) {
	return Math.random() * (max-min) + min;
}	
	setTimeout(function() {window.scrollTo(0, 0);},10)
	$(".top-plane").css('width', $('header').width()-233);
	$(".menu-item").mouseenter(function(){
		$(this).find(".item-plane").css("background", "rgba("+Math.round(getRandom(100, 255))+","+Math.round(getRandom(100, 255))+","+Math.round(getRandom(100, 255))+", .5)");
	});
	$(".menu-item").click(function(){
		$('html,body').animate({scrollTop:$("#"+$(this).attr("data-to")).offset().top-64}, 900);
	});
	
	$("footer .refers ul li a").mouseover(function(){
		$(this).css("background", "rgba("+Math.round(getRandom(100, 255))+","+Math.round(getRandom(100, 255))+","+Math.round(getRandom(100, 255))+", .7)");
	});
	$("footer .refers ul li a").mouseout(function(){
		$(this).css("background", "transparent");
	});


	var items = $(".menu-item");
	var widths = [];
	for (var i = 0; i < items.length; i++) {
		widths[i] = $(items[i]).width();
	}
	for (var i = 0; i < items.length; i++) {
		$(items[i]).animate({
					width: 0,
					padding: '14px 0'
				}, 0);
	}
	function func(item, w, i) {
		i--;
		if (i >= 0) {
			setTimeout(func, 180 + i * 5, items[i], widths[i], i);
		}
		if(i < widths.length-1){
			$(item).animate({
					width: w,
					padding: '14px 7px'
				}, 170 + i * 25, 'linear');
		}
		
	}
	setTimeout(func,2500,items[items.length-1], widths[widths.length-1], widths.length);
	setTimeout(function () {
		$(".load").hide();
		$("body").css("overflow", "auto");
		$("section").show();
		$("footer").show();
	},2500);

	var spans = $('section article');
	for (var i = 0; i < spans.length; i++) {
		$(spans[i]).on("dblclick", function(event){
			$("section article").not($(event.target)).removeClass("active");
			if(!$(event.target).hasClass("active")){
				$(event.target).addClass("active");
				if(getBrowserName() == "Firefox"){
					$("section article.active .article-plane").css("background", "-moz-linear-gradient(right, rgba(255,255,255,.5),rgba("+Math.round(getRandom(50, 200))+","+Math.round(getRandom(50, 200))+","+Math.round(getRandom(50, 200))+", .7))");
				}else if(getBrowserName() == "Chrome"){
					$("section article.active .article-plane").css("background", "-webkit-linear-gradient(right, rgba(255,255,255,.5),rgba("+Math.round(getRandom(50, 200))+","+Math.round(getRandom(50, 200))+","+Math.round(getRandom(50, 200))+", .7))");
				} else if(getBrowserName() == "MSIE"){
					$("section article.active .article-plane").css("background", "-ms-linear-gradient(right, rgba(255,255,255,.5),rgba("+Math.round(getRandom(50, 200))+","+Math.round(getRandom(50, 200))+","+Math.round(getRandom(50, 200))+", .7))");
				} else {
					$("section article.active .article-plane").css("background", "linear-gradient(right, rgba(255,255,255,.5),rgba("+Math.round(getRandom(50, 200))+","+Math.round(getRandom(50, 200))+","+Math.round(getRandom(50, 200))+", .7))");
				}
			}
		});
	}
	$(document).scroll(function(){
		
			for (var i = 0; i < spans.length; i++) {
				if ($(document).scrollTop() + $(window).height() > $(spans[i]).offset().top + 300 &&
					$(document).scrollTop() - $(spans[i]).offset().top < $(spans[i]).height() - 300) {
					$(spans[i]).dblclick();
					break;
				}
			}
		
	});
});