$(function(){
	if($(window).height() < $(window).width()){
		$('head').append('<link rel="stylesheet" type="text/css" href="full.css">');
	} else {
		$('head').append('<link rel="stylesheet" type="text/css" href="mobile.css">');
	}
});