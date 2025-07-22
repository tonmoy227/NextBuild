/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: .8, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);


	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();

	var $circleCursor = $(".cursor");
	function moveCursor(e) {
		var t = e.clientX + "px",
		a = e.clientY + "px";
		TweenMax.to($circleCursor, .2, {
			left: t,
			top: a,
			ease: "Power1.easeOut"
		})
	}
	function zoomCursor(e) {
		TweenMax.to($circleCursor, .05, {
			scale: 6,
			ease: "Power1.easeOut"
		}), $($circleCursor).removeClass("cursor-close")
	}
	function closeCursor(e) {
		TweenMax.to($circleCursor, .05, {
			scale: 6,
			ease: "Power1.easeOut"
		}), $($circleCursor).addClass("cursor-close")
	}
	function defaultCursor(e) {
		TweenLite.to($circleCursor, .1, {
			scale: 1,
			ease: "Power1.easeOut"
		}), $($circleCursor).removeClass("cursor-close")
	}
	$(window).on("mousemove", moveCursor),
	$("a, button").on("mouseenter", zoomCursor),
	$("a, button").on("mouseleave", defaultCursor);
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.nx-scrollup').fadeIn();
		} else {
			$('.nx-scrollup').fadeOut();
		}
	});
	$('.nx-scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	$('.marquee-left').marquee({
		gap: 0,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right').marquee({
		gap: 28,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});
	gsap.registerPlugin(ScrollTrigger);
	
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	if($('.nx-letter').length) {
		var txtSplit = $('.nx-letter');
		if(txtSplit.length == 0) return; gsap.registerPlugin(SplitText); txtSplit.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "chars",
				wordsClass: "split-word"
			});
		});
	}
	$('.counter').counterUp({
		delay: 20,
		time: 5000
	});


	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){

			

			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				if($(".nx_hero_title").length) {
					var NXSECTITLE = $(".nx_hero_title");
					if(NXSECTITLE.length == 0) return; gsap.registerPlugin(SplitText); NXSECTITLE.each(function(index, el) {

						el.split = new SplitText(el, { 
							type: "lines,words,chars",
							linesClass: "split-line"
						});

						gsap.set(el, { perspective: 400 });

						if( $(el).hasClass('hero_title_1') ){
							gsap.set(el.split.chars, {
								x: 100,
								scaleX: 0,
								opacity: 0,
							});
						}
						if( $(el).hasClass('sub_title') ){
							gsap.set(el.split.chars, {
								y: 100,
								opacity: 0,
							});
						}
						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
								toggleActions: "play reverse play reverse",
								markers: false,
							},
							x: 0,
							y: 0,
							scaleX: 1,
							scaleY: 1,
							opacity: 1,
							duration: 1,
							stagger: .05,
							rotationX: 15,
							delay: .1,
							ease: "power3.inOut",
						});
					});
				}
				gsap.utils.toArray(".nx-text p").forEach(paragraph => {
					let timeline = gsap.timeline({
						scrollTrigger: {
							trigger: paragraph,
							start: "top 90%",
							end: "bottom 60%",
							toggleActions: "play none none none"
						}
					});
					let splitText = new SplitText(paragraph, { type: "lines" });
					gsap.set(paragraph, { perspective: 400 });
					timeline.from(splitText.lines, {
						opacity: 0,
						rotationX: -80,
						transformOrigin: "top center -50",
						force3D: true,
						duration: 1,
						delay: 0.5,
						stagger: 0.1
					});
				});
				const NXH1 = gsap.timeline();
				NXH1
				.from(".nx-hero1-img", { yPercent: 100, duration: .8, transformOrigin: "bottom",  ease: "power1.out" })
				.from(".nx-hero1-sec .nx-hr1-bg", { scale: 2, duration: 2, transformOrigin: "bottom",  ease: "power1.out" })
				.from(".nx-hero1-text .hr-btn-grp .nx-btn1:nth-child(1)", { opacity: 0,  yPercent: 100, duration: 2, transformOrigin: "bottom",  ease: "elastic.out(1,0.7)" },"<=.5")
				.from(".nx-hero1-text .hr-btn-grp .nx-btn1:nth-child(2)", { opacity: 0,  yPercent: 100, duration: 2, transformOrigin: "bottom",  ease: "elastic.out(1,0.7)" },"<=.5")
				.from(".nx-hero1-line-shape", { opacity: 0,  yPercent: -100, duration: 4, transformOrigin: "top",  ease: "elastic.out(1,0.7)" },"<= -1")
				.from(".nx-hero1-line-shape .nx-line-circle", { opacity: 0, rotate: "360deg",  yPercent: -200, duration: 2.5, transformOrigin: "center",  ease: "bounce.out" },"<=.8")
				.from(".nx-hero1-img2", { opacity: 1,   yPercent: 100, duration: .8, transformOrigin: "center",  ease: "power1.out" },"<= -1")
				.from(".nx-hero1-sec .nx-hr1-shape2", { opacity: 1,   xPercent: -100, duration: 1, transformOrigin: "center",  ease: "power1.out" },"<=.5")
				
			}, 700);
		})		
	});
	
	if (window.matchMedia("(min-width: 1200px)").matches) {
		const ServiceCardItem = gsap.utils.toArray(".nx-hw-item");
		const animateCard = (card, wrapper, index) => {
			gsap.to(card, {
				transformOrigin: "top center",
				duration: 2,
				scrub: 1.5,
				ease: "power1.out",
				scrollTrigger: {
					trigger: wrapper,
					start: `top ${140 + 135 * index}`, 
					end: "bottom 100%",
					endTrigger: ".nx-how-work-content",
					pin: wrapper,
					pinSpacing: false,
					markers: false,
				},
			});
		};
		ServiceCardItem.forEach((wrapper, index) => animateCard([index], wrapper, index));
	}
	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var Testi_pin = document.querySelectorAll(".nx-how-work-text")
		Testi_pin.forEach((item) => {
			gsap.to(item, {
				scrollTrigger: {
					trigger: item,
					markers: false,
					pin: true,
					pinSpacing: false,
					start: "top 20%",
					end: "bottom 100%",
				},
			});
		});
	}
	if ($('.nx-project-area').length > 0 ) {
		var $grid = $('.nx-project-area').imagesLoaded( function() {
			$grid.masonry({
				percentPosition: true,
				itemSelector: '.grid-item',
				columnWidth: '.grid-sizer'
			}); 
		});
	}
	if ($('.nx-spon1-slider').length > 0 ) {
		var slider = new Swiper('.nx-spon1-slider', {
			spaceBetween: 100,
			slidesPerView: 5,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			speed: 400,
			breakpoints: {
				'1600': {
					slidesPerView: 5,
				},
				'1200': {
					slidesPerView: 5,
					spaceBetween: 40,
				},
				'992': {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				'768': {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				'576': {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				'480': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				'0': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
			},
		});
	};
	if ($('.nx-testi1-slider').length > 0 ) {
		var slider = new Swiper('.nx-testi1-slider', {
			spaceBetween: 24,
			slidesPerView: 3,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			speed: 400,
			breakpoints: {
				'1600': {
					slidesPerView: 3,
				},
				'1300': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				'992': {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				'992': {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				'768': {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				'576': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'480': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'0': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
			},
		});
	};
	if($('.nx-sub-tilte').length) {
		var agtsub = $(".nx-sub-tilte");

		if(agtsub.length == 0) return; gsap.registerPlugin(SplitText); agtsub.each(function(index, el) {
			
			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});
			
			if( $(el).hasClass('nx-sub-anim') ){
				gsap.set(el.split.chars, {
					opacity: 0,
					x: "7",
				});
			}
			
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					end: "top 60%",
					markers: false,
					scrub: 1,
				},

				x: "0",
				y: "0",
				opacity: 1,
				duration: .7,
				stagger: 0.2,
			});
			
		});
	}
	if($('.nx-itm-title').length) {
		var txtheading = $(".nx-itm-title");

		if(txtheading.length == 0) return; gsap.registerPlugin(SplitText); txtheading.each(function(index, el) {

			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});

			if( $(el).hasClass('nx-itm-anim') ){
				gsap.set(el.split.chars, {
					opacity: .3,
					x: "-7",
				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 92%",
					end: "top 60%",
					markers: false,
					scrub: 1,
				},

				x: "0",
				y: "0",
				opacity: 1,
				duration: .7,
				stagger: 0.2,
			});

		});
	}

	gsap.utils.toArray(' .left_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				start: "top 70%",
				end: "top -5%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: 1, x: "-300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
	});	
	gsap.utils.toArray(' .right_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				start: "top 70%",
				end: "top -5%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: 1, xPercent: 100}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
	});
	gsap.utils.toArray(' .top_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				start: "top 95%",
				end: "top 100%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: 1, y: "50"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
	});
	gsap.utils.toArray(' .top_view_2').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				start: "top 150%",
				end: "top 100%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: 1, yPercent: "200"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
	});
	gsap.utils.toArray(' .cnt_img_anim').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				start: "top 110%",
				end: "top 100%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: 1, yPercent: "100"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
	});
	var NXABOUT = gsap.timeline({
		scrollTrigger: {
			trigger: '.nx-ab1-content',
			start: "top 60%",
			toggleActions: 'play none none reverse',
			markers: false,
		}

	});
	NXABOUT
	.from(".ab-line-shape1 span:nth-child(1)", { opacity: 0,  yPercent: -200, duration: 2,   ease: "power1.out" })
	.from(".ab-line-shape1 span:nth-child(2)", { opacity: 0,  yPercent: -200, duration: 2,   ease: "power1.out" },"<=.5")
	
	gsap.utils.toArray('.nx-count-item1 ').forEach((el, index) => {
		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "buttom 50%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tl1
		.set(el, { perspective: 8000 , transformStyle: "preserve-3d" , transformOrigin: "top" })
		.from(el , { scaleY: .2, rotateX: "15deg", opacity: 0})
	})


	gsap.utils.toArray('.nx-count-item2 ').forEach((el, index) => {
		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "buttom 50%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tl1
		.set(el, { perspective: 8000 , transformStyle: "preserve-3d" , transformOrigin: "100% 50%" })
		.from(el , { scaleX: .2  , opacity: 0})
	})
	gsap.utils.toArray('.nx-count-item3 ').forEach((el, index) => {
		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "buttom 50%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tl1
		.set(el, { perspective: 8000 , transformStyle: "preserve-3d" , transformOrigin: "left" })
		.from(el , { scaleX: .2  , opacity: 0})
	})

	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		preloader: true,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: false,
			duration: 300, 
			opener: function(element) {
				return element.find('img');
			}
		}
	});

	var swiper2 = new Swiper(".nx-hero2-slider", {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		slidesPerView: 1,
		effect: "fade",
		pagination: {
			el: ".nx-hr2-pagi",
			clickable: true,
		},
		navigation: {
			prevEl: ".nx-hr2-prev",
			nextEl: ".nx-hr2-next",
		},
		thumbs: {
			swiper: quick_view,
		},
	});
	var quick_view = new Swiper(".nx-hero2-thumb-slider", {
		loop: true,
		spaceBetween: 0,
		slidesPerView: 3,
		speed: 1000,
		centeredSlides: true,
		pagination: {
			el: ".nx-hr2-pagi",
			clickable: true,
		},
		navigation: {
			prevEl: ".nx-hr2-prev",
			nextEl: ".nx-hr2-next",
		},

		breakpoints: {  
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'1024': {
				slidesPerView: 3,
			},
		},
	});
})(jQuery);