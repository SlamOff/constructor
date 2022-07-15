// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//   $('.viewport').attr('content', 'width=1300');
// }

$(document).ready(function() {
	// remove placeholder after click
	$('input, textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input, textarea').blur(function(){
		$(this).attr('placeholder', $(this).data('placeholder'));
	});

	// if($(window).width() < 992) {
	// 	$('.program .program-number').parent().unwrap();
	// }

	// scrollTo
	$('.scroll').click( function(){
	var scrollEl = $(this).attr('href');
		if ($(scrollEl).length != 0) {
			$('html, body').animate({ scrollTop: $(scrollEl).offset().top }, 800);
		}
		return false;
	});

	// burger
	$('.toggle_btn').click(function(){
		$('.sandwich').toggleClass('active');
		if($('.menu-mobile').is(':visible')) {
			$('.menu-mobile').slideUp(300);
		} else {
			$('.menu-mobile').slideDown(300);
		};
	});

	//popup
	$('.popup').magnificPopup({
		type: 'inline'
	});
	
	// photo magnific gallery
	$('.photo_popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	//mask
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});

	$('.structure-open').on('click', function(){
		$('.slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: '.next',
			prevArrow: '.prev',
			focusOnSelect: true,
			dots: true,
			//appendDots: '.module .nav',
			customPaging: function(slider, i) {
				return '<div class="dot"></div>';
			}
		});

		$('.slider').slick('slickGoTo', $(this).attr('index'), true);
	});

	$.magnificPopup.instance.close = function() {
		$(document).trigger('mfp-global-close');
		$.magnificPopup.proto.close.call();
		$('.slider').slick('unslick');
	};

	$('.video-button').on('click', function(e) {
		e.preventDefault();
		$(this).fadeOut('fast');
		$(this).siblings('video').get(0).play();
	});

	$('.video_wrapper video').on('play', function() {
		$(this).siblings('.video-button').fadeOut('fast');
	});
	

	
	//validation
		var locationURL = window.location.pathname;
	if ( locationURL == '/ua.html' ) {
		var validationName = "Обов'язково для заповнення";
		var validationNameMax = 'Від 2 до 16 літер';
		var validationPhone = 'Введіть вірний номер';
		var validationEmail = 'Введіть вірний E-mail';
	}
	else {
		var validationName = 'Обязательно для заполнения';
		var validationNameMax = 'От 2 до 16 букв';
		var validationPhone = 'Введите корректный номер';
		var validationEmail = 'Введите корректный E-mail';
	}


	$('#topForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#askForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#individualForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#takeForm1').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#takeForm2').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#regForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#contactForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});


	


});
/*
// preloader
$(window).load(function(){
	$('.preloader_inner').fadeOut();
	$('.preloader').delay(100).fadeOut('fast');
});
*/