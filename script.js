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
	/*
	function adjustAOSBasedOnScreenWidth() {
		if ($(window).width() > 768) {
			$('#delicious').attr('data-aos', 'fade-right');
			$('#food').attr('data-aos', 'zoom-in-up');
			$('#dishes').attr('data-aos', 'fade-left');
		} else {
			$('#delicious').attr('data-aos','flip-down');
			$('#food').attr('data-aos','zoom-in');
			$('#dishes').attr('data-aos','flip-up');
		}
	}	
	
	$(window).resize(function() {
		adjustAOSBasedOnScreenWidth();
	});
	*/

});
/*
$(document).ready(function() {
    adjustAOSBasedOnScreenWidth();
});
*/