$(function(){
	if($(window).height() < $(window).width()){
		$('head').append('<link rel="stylesheet" type="text/css" href="styles/full.css">' +
			'<link rel="stylesheet" type="text/css" href="styles/main.css">' +
			'<link rel="stylesheet" type="text/css" href="styles/appeare.css">');
		$('section:first').css('margin-top', $(window).height() + 40);
	} else {
		$('head').append('<link rel="stylesheet" type="text/css" href="styles/mobile.css">');
	}
});