/*--------------------- Copyright (c) 2018 -----------------------
[Master Javascript]

Project: Surfing
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var impel = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {
			if (!this.initialised) {
				this.initialised = true;
			}
			else {
				return;
			}


			/*-------------- Impel Functions Calling ---------------------------------------------------
				------------------------------------------------------------------------------------------------*/
			// this.toggle();
			this.Range_slider();
			this.sr_testimonial_slider();
			// this.Search_bar_input();
			this.sr_activity_slider();
			this.magnificPopup();
			this.sr_thumbnail_slider();
			this.ac_product_img();
			this.swiper_boat_slider();
			this.progressbar();
			this.scrollTop();
			this.Quantity();
		},
		/*-------------- Impel Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		// Range_slider js start
		Range_slider: function () {
			if ($('.Range_slider').length > 0) {
				$(function () {
					$("#slider-range").slider({
						range: true,
						min: 0,
						max: 10000,
						values: [10, 3000],
						slide: function (event, ui) {
							$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
						}
					});
					$("#amount").val("$" + $("#slider-range").slider("values", 0) +
						" - $" + $("#slider-range").slider("values", 1));
				});
			}
		},
		// Range_slider js end

		// Toggle js start
		
		// toggle: function () {
		// 	$(".toggle_btn").click(function () {
		// 		$(this).toggleClass("blue");
		// 		$(".body").slideToggle();
		// 	});
		// },
		// Toggle js end

		// Testimonial js start
		sr_testimonial_slider: function () {
			var swiper = new Swiper('.sr_testimonial_slider .swiper-container', {
				slidesPerView: 2,
				spaceBetween: 30,
				centeredSlides: false,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: false,
				},
				navigation: {
					nextEl: '.sr_testimonial_slider .swiper-button-next',
					prevEl: '.sr_testimonial_slider .swiper-button-prev',
				},
				// Responsive breakpoints
				breakpoints: {
					// when window width is <= 320px
					991: {
						slidesPerView: 1,
						spaceBetween: 10
					}
				}
			});
		},
		// Testimonial js start

		// swiper Slider js start
		sr_activity_slider: function () {
			var swiper = new Swiper('.sr_activity_slider .swiper-container', {
				effect: 'coverflow',
				grabCursor: false,
				centeredSlides: true,
				autoplay: true,
				loop: true,
				slidesPerView: 'auto',
				coverflowEffect: {
					rotate: 0,
					stretch: 0,
					depth: 290,
					modifier: 1,
					slideShadows: false,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.sr_activity_slider .sr_swiper_next',
					prevEl: '.sr_activity_slider .sr_swiper_prew',
				},
				breakpoints: {
					// when window width is <= 320px
					1199: {
						slidesPerView: 1,
						spaceBetween: 10
					}
				}
			});
		},
		// swiper Slider js end

		// magnificPopup js start
		magnificPopup: function () {
			if ($('.sr_stories_section').length > 0) {
				$('.sr_play_overlay .icon').magnificPopup({
					disableOn: 700,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,

					fixedContentPos: false
				});
			}
		},
		// magnificPopup js end

		// ===== Scroll to Top ==== 
		scrollTop: function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
					$('#return-to-top').fadeIn(200);    // Fade in the arrow
				} else {
					$('#return-to-top').fadeOut(200);   // Else fade out the arrow
				}
			});
			$('#return-to-top').click(function () {      // When arrow is clicked
				$('body,html').animate({
					scrollTop: 0                       // Scroll to top of body
				}, 500);
			});
		},
		// ===== Scroll to Top ==== 

		// circle progress bar js start
		progressbar: function() {
			function animateElements() {
				$('.progressbar').each(function () {
					var elementPos = $(this).offset().top;
					var topOfWindow = $(window).scrollTop();
					var percent = $(this).find('.circle').attr('data-percent');
					var animate = $(this).data('animate');
					if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
						$(this).data('animate', true);
						$(this).find('.circle').circleProgress({
							// startAngle: -Math.PI / 2,
							value: percent / 100,
							size : 400,
							thickness: 15,
							fill: {
								color: '#24b8c4'
							}
						}).on('circle-animation-progress', function (event, progress, stepValue) {
							$(this).find('strong').text((stepValue*100).toFixed(0) + "");
						}).stop();
					}
				});
			}

		animateElements();
		$(window).scroll(animateElements);
		},
		// circle progress bar js start

		// Product cart Slider js start
		sr_thumbnail_slider: function () {
			var galleryThumbs = new Swiper('.sr_thumbnail_slider .gallery-thumbs', {
				spaceBetween: 10,
				slidesPerView: 4,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});
			var galleryTop = new Swiper('.gallery-top', {
				spaceBetween: 10,
				navigation: {
					nextEl: '.sr_thumbnail_slider .swiper-button-next',
					prevEl: '.sr_thumbnail_slider .swiper-button-prev',
				},
				thumbs: {
					swiper: galleryThumbs
				}
			});
		},
		// Product cart Slider js end

		// Quantity js start
		Quantity: function () {

			var quantity = 0;
			$('.quantity_plus').click(function (e) {
				e.preventDefault();
				var quantity = parseInt($(this).siblings('.quantity').val());
				$(this).siblings('.quantity').val(quantity + 1);

			});
			$('.quantity_minus').click(function (e) {
				e.preventDefault();
				var quantity = parseInt($(this).siblings('.quantity').val());
				if (quantity > 0) {
					$(this).siblings('.quantity').val(quantity - 1);
				}
			});

		},
		// Quantity js end

		// magnify js start
		ac_product_img: function () {
			/* if($('.ac_product_img').length > 0){
			  $('.ac_product_img img').magnify();
			};	 */
		},
		// magnify js end

		// Surfing Boat Slider js start
		swiper_boat_slider: function () {
			var swiper = new Swiper('.swiper_boat_slider .swiper-container', {
				pagination: {
					el: '.swiper_boat_slider .swiper-pagination',
					clickable: true,
				},
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
				slidesPerView: 2,
				spaceBetween: 30,

				breakpoints: {
					// when window width is <= 320px
					1199: {
						slidesPerView: 1,
						spaceBetween: 10
					}
				}

			});
		},
		// Surfing Boat Slider end
	};
	$(document).ready(function () {
		// Contact Form Submission
		function checkRequire(formId, targetResp) {
			targetResp.html('');
			var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
			var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
			var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
			var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
			var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
			var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
			var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
			var check = 0;
			$('#er_msg').remove();
			var target = (typeof formId == 'object') ? $(formId) : $('#' + formId);
			target.find('input , textarea , select').each(function () {
				if ($(this).hasClass('require')) {
					if ($(this).val().trim() == '') {
						check = 1;
						$(this).focus();
						targetResp.html('You missed out some fields.');
						$(this).addClass('error');
						return false;
					} else {
						$(this).removeClass('error');
					}
				}
				if ($(this).val().trim() != '') {
					var valid = $(this).attr('data-valid');
					if (typeof valid != 'undefined') {
						if (!eval(valid).test($(this).val().trim())) {
							$(this).addClass('error');
							$(this).focus();
							check = 1;
							targetResp.html($(this).attr('data-error'));
							return false;
						} else {
							$(this).removeClass('error');
						}
					}
				}
			});
			return check;
		}
		$(".submitForm").on("click", function () {
			var _this = $(this);
			var targetForm = _this.closest('form');
			var errroTarget = targetForm.find('.response');
			var check = checkRequire(targetForm, errroTarget);
			if (check == 0) {
				var formDetail = new FormData(targetForm[0]);
				formDetail.append('form_type', _this.attr('form-type'));
				$.ajax({
					method: 'post',
					url: 'ajax.php',
					data: formDetail,
					cache: false,
					contentType: false,
					processData: false
				}).done(function (resp) {
					if (resp == 1) {
						targetForm.find('input').val('');
						targetForm.find('textarea').val('');
						errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
					} else {
						errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
					}
				});
			}
		});
		impel.init();
	});
     
})(jQuery);



//==========On scroll fixed menu============
(function ($) {
	"use strict";
	$(window).scroll(function () {
		var wh = window.innerWidth;
		if (wh > 767) {
			var h = window.innerHeight;
			var window_top = $(window).scrollTop() + 1;
			if (window_top > 100) {
				$('.wh_header_section').addClass('int_fixed');
			} else {
				$('.wh_header_section').removeClass('int_fixed');
			}
		}
	});
})(jQuery);

//  ===== toggle btn=======

$(document).ready(function(){
    $(".toggle_btn").click(function(){
        $("body").toggleClass("blue");
    });
});
//  ===== toggle btn end=======



// ======= search button ============

$(document).ready(function(){
    $(document).on("click", function(event){
        $('.wh_search_icon').on('click', function(){
            $('body').addClass('close-search-bar');
        });
        $('.search_close').on('click', function(){
            $('body').removeClass('close-search-bar');
        });
        
});
});

// ======= search button ============


// ========Back to Top JS ===========

jQuery(function ($) {
	'use strict';
$('body').append('<div id="toTop" class="back-to-top-btn"><i class="bx bxs-up-arrow-alt"></i></div>');
$(window).scroll(function () {
	if ($(this).scrollTop() != 0) {
		$('#toTop').fadeIn();
	} else {
		$('#toTop').fadeOut();
	}
}); 
$('#toTop').on('click', function(){
	$("html, body").animate({ scrollTop: 0 }, 900);
	return false;
});
}(jQuery));
//========= Back to Top JS end============

