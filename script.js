$("document").ready(function(){
	
	$('.navbar-toggler').on('click', function () {
		$('.close').toggle();
		$('#navbarCollapsable').collapse('hide');
	});
	$('.navbar-toggler').on('click', function () {
		$('.open').toggle();
	});
	/*
	var navHeight = $('nav').outerHeight(true);
	
	$('.header').css("padding-top",navHeight+10);
	*/
	
});