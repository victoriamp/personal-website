(function($){
	"use strict";

	//scroll smoothly
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){
		if(location.pathname.replace(/^\//, '')==this.pathname.replace(/^\//, '') && location.hostname==this.hostname){
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length){
				$('html, body').animate({
					scrollTop: (target.offset().top-71)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	//scroll-to-top button 
	$(document).scroll(function(){
		var scrollDistance = $(this).scrollTop();
		if(scrollDistance>100){
			$('.scroll-to-top').fadeIn();
		}else{
			$('.scroll-to-top').fadeOut();
		}
	});

	//responsive navigation menu
	$('.js-scroll-trigger').click(function(){
		$('.navbar-collapse').collapse('hide');
	});

	//active/inactive navbar items
	$('body').scrollspy({
		target: '#mainNav', 
		offset: 80
	})

	//collapse navbar
	var navbarCollapse = function(){
		if($("#mainNav").offset().top>100){
			$("#mainNav").addClass("navbar-shrink");
		}else{
			$("#mainNav").removeClass("navbar-shrink");
		}
	}
	navbarCollapse();
	$(window).scroll(navbarCollapse);

})(jQuery);