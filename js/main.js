$('.burger').click(function() {
	$('.burger span:nth-child(1)').toggleClass('first');
	$('.burger span:nth-child(2)').toggleClass('second');
	$('.burger span:nth-child(3)').toggleClass('third');
	$('.burger span:nth-child(4)').toggleClass('fourth');
});


$('.burger').click(function() {
	$('.header_mobile_nav ').slideToggle(600);
});



$('.comments_slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><span><i class="fas fa-angle-left"></i></span></button>',
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><span><i class="fas fa-angle-right"></i></span></button>',
	autoplay: true,
	autoplaySpeed: 5000,
})






  

