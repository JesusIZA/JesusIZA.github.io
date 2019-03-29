if(window.innerWidth > window.innerHeight && window.innerWidth >= 1200) {
	window.location.href = "pc.html";
} else {
	console.log(window.innerWidth);
	window.location.href = "mobile.html";
}