$(function(){
function getRandom(min, max) {
	return Math.random() * (max-min) + min;
}

	$("header .menu-button").click(function(){
		$("menu").fadeToggle(300);
		$(this).toggleClass("menu-button-closed menu-button-open");
	});
	$(".menu-item").click(function(){
		$("header .menu-button").click();
		$('html,body').animate({scrollTop:$("#"+$(this).attr("data-to")).offset().top-70}, 900);
	});
	$("footer .refers ul li a, .menu-item").mouseover(function(){
		$(this).css("background", "rgba("+Math.round(getRandom(100, 255))+","+Math.round(getRandom(100, 255))+","+Math.round(getRandom(100, 255))+", .7)");
	});
	$("footer .refers ul li a, .menu-item").mouseout(function(){
		$(this).css("background", "transparent");
	});


});