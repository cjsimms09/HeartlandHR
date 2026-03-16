(function ($) {
    "use strict";
    $(document).ready(function () {
        /*
       Preeloader
       ============================*/
        $(window).on("load", function () {
            $("#preloader").fadeOut();
            $("#preloader-status").delay(200).fadeOut("slow");
            $("body").delay(200).css({ "overflow-x": "hidden" });
        });

        /*
        Jquery Mobile Menu
        ============================*/
        $('#main-menu').meanmenu({
            meanMenuContainer: '.mobile-nav-menu',
            meanScreenWidth: "991",
            meanExpand: ['<i class="fal fa-plus"></i>'],
        });

        // Mobile toggle button
         $(".mobile-menu-toggle-btn").on("click", function () {
            $(".menu-sidebar-area").addClass("active");
            $(".body-overlay").addClass("active");
        });
        $(".menu-sidebar-close-btn").on("click", function () {
            $(".menu-sidebar-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });

         /*
       Jquery Body Overlay
       ============================*/
        $(".body-overlay").on("click", function () {
            $(".menu-sidebar-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });

        /*
        JS Specific Page Height
        ============================*/
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        if( height  > 1400 ) {
            const nav = $(".header-menu-area.sticky-header");
            let scrolled = false;
            $(window).scroll(function () {
                if (100 < $(window).scrollTop() && !scrolled) {
                    nav
                        .addClass("sticky_menu animated fadeIn")
                        .animate({ "margin-top": "0px" });
                    scrolled = true;
                }
                if (100 > $(window).scrollTop() && scrolled) {
                    nav.removeClass("sticky_menu animated fadeIn").css("margin-top", "0px");
                    scrolled = false;
                }
            });
        }

        /*
        Jquery Empty Post Content Hide
        ============================*/
        $('.blog-area .post-content p').filter(function() {
            return /\u00A0/.test($(this).text());
        }).hide();

        /*
        Jquery Accordion
        ============================*/
        $('body').on('click','.accordion-wrapper-two .accordion-head', function () {
            $('.accordion-title').trigger('click');
        });

        /*
        Skill Progress Bar Js
        ============================*/
        $('.skill-progressbar').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
            if (isInView) {
                $('.progress-inner').each(function () {
                    $(this).find('.progress-content').animate({
                        width: $(this).attr('data-percentage')
                    }, 2000);

                    $(this).find('.progress-number-count').animate(
                        { left: $(this).attr('data-percentage') },
                        {
                            duration: 2000,
                            step: function (now, fx) {
                                var data = Math.round(now);
                                $(this).find('.progress-percent').html(data + '%');
                            }
                        });
                });

            }
        });
        /*
       Slider
       ============================*/
        $(".slider-wrapper").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            // fade: true,
            prevArrow:
                "<button type='button' class='slider-arrow-btn prev-btn'><i class='icon-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='slider-arrow-btn next-btn'><i class='icon-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });

        /*
       Portfolio Card Slider service page
       ============================*/
        $(".portfolio_card_wrapper").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='portfolio-card-arrow-btn active prev-btn'><i class='icon-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='portfolio-card-arrow-btn next-btn'><i class='icon-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });


        $('.prev_btn_custom').on('click', function (e) {
            e.preventDefault();
            $('.prev-btn').trigger('click');
        });
        $('.next_btn_custom').on('click', function (e) {
            e.preventDefault();
            $('.next-btn').trigger('click');
        });

        /*
       Team Slider
       ============================*/
        $("#team_slider_one").slick({
            slidesToShow: 2,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            // variableWidth: true,
             prevArrow:
                "<button type='button' class='team-card-arrow-btn prev-btn'><i class='icon-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='team-card-arrow-btn next-btn'><i class='icon-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1399,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                    },
                },
            ],
        });
        $('#team-prev').on('click', function (e) {
            e.preventDefault();
            $('.prev-btn').trigger('click');
        });
        $('#team-next').on('click', function (e) {
            e.preventDefault();
            $('.next-btn').trigger('click');
        });

        /*
       Team Slider
       ============================*/
        $("#team_slider_two").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            prevArrow:
                "<button type='button' class='team-card-arrow-btn prev-btn'><i class='icon-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='team-card-arrow-btn next-btn'><i class='icon-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                    },
                },
            ],
        });

         /*
       Jquery Tilt Js
       ============================*/
        $('.tilt-animate').tilt({
            maxTilt: 12,
            perspective: 1500,
        })


        // Home-one Service
        $(".service-slider").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='case-arrow-btn prev-btn'><i class='icon-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='case-arrow-btn next-btn'><i class='icon-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // Portfolio Slider
        $(".portfolio-slider-wrapper").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
             variableWidth: true,
            prevArrow:
                "<button type='button' class='case-arrow-btn prev-btn'><i class='icon-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='case-arrow-btn next-btn'><i class='icon-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1399,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
             variableWidth: false,
                    },
                },
            ],
        });

        // Home-one Review
        $(".testimonial-slider").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='review-arrow-btn prev-btn'><i class='icon-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='review-arrow-btn next-btn'><i class='icon-arrow-right'></i></button>",
        });

        // Home-one Team-member slider
        $("#team_slider").slick({
            slidesToShow: 4,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            variableWidth: true,
             prevArrow:
                "<button type='button' class='team-arrow-prev'><i class='icon-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='team-arrow-next'><i class='icon-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                    },
                }
            ],
        });

         $('#home-one-team-prev').on('click', function (e) {
             e.preventDefault()
            $('.team-arrow-prev').trigger('click');
        });
        $('#home-one-team-next').on('click', function (e) {
            e.preventDefault()
            $('.team-arrow-next').trigger('click');
        });
        // client-logo slider home-one
        $(".client-logo-slider-wrapper").slick({
            slidesToShow: 5,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,

            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 424,
                    settings: {
                        autoplay: true,
                        slidesToShow: 2,
                    },
                },
            ],
        });

        // Brand Slider Style 2
        $("#brand_slider").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
        });

        // Process Step Slider
        $(".process-step-slider").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 800,
            asNavFor: '.process-step-slider-tab',
            prevArrow:
                "<button type='button' class='process-arrow-btn prev-btn'><i class='icon-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='process-arrow-btn next-btn active'><i class='icon-arrow-right'></i></button>",
                responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                        arrows: false,
                    },
                },
            ],
        });

        // Process Step Slider Tab
        $('.process-step-slider-tab').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            loop: true,
            infinite: true,
            asNavFor: '.process-step-slider',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            arrows:false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                }
            ],
        });

        $(".home-two-testimonial-card-slider").slick({
            slidesToShow: 1,
            infinite: false,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: false,
            dots: true,
            speed: 1500,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // Portfolio Slider
        $("#portfolio_slider_three").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            variableWidth: true,
            prevArrow:
                "<button type='button' class='portfolio-card-arrow-btn active prev-btn'><i class='icon-arrow-right'></i></button>",
            nextArrow:
                "<button type='button' class='portfolio-card-arrow-btn next-btn'><i class='icon-arrow-left'></i></button>",
            responsive: [
                {
                    breakpoint: 1399,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                    },
                },
            ],
        });

        // Service Slider Three
        $("#service_slider_three").slick({
            slidesToShow: 4,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            variableWidth: true,
            prevArrow:
                "<button type='button' class='home-three-service-arrow-btn prev-btn'><i class='icon-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='home-three-service-arrow-btn next-btn'><i class='icon-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 660,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 659,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                    },
                },
            ],
        });


        $('.prev_btn_custom').on('click', function (e) {
            e.preventDefault()
            $('.prev-btn').trigger('click');
        });
        $('.next_btn_custom').on('click', function (e) {
            e.preventDefault()
            $('.next-btn').trigger('click');
        });


        // Price switch
        $('.price-switch').on('click', function () {
            $('.switch-price-card').toggleClass(' reverse ');
        });

        // Home-three review slider
        $(".home-three-review-slider").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            prevArrow:
                "<button type='button' class='home-three-review-arrow-btn prev-btn'><i class='icon-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='home-three-review-arrow-btn next-btn'><i class='icon-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        $('.home-three-review-arrow-btn prev_btn_custom').on('click', function (e) {
            e.preventDefault()
            $('.home-three-review-arrow-btn prev-btn').trigger('click');
        });
        $('.home-three-review-arrow-btn next_btn_custom').on('click', function (e) {
            e.preventDefault()
            $('.home-three-review-arrow-btn next-btn').trigger('click');
        });


        /*
       Post Gallery Slider
       ============================*/
        $(".post-gallery").slick({
            slidesToShow: 1,
            infinite: false,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 300,
            prevArrow:
                "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
        });

        /*
       Related Case Slider
       ============================*/
        $(".related-case-slider").slick({
            slidesToShow: 2,
            infinite: false,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 300,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
        /*
       Client Logo Slider
       ============================*/
        $(".brand-slider").slick({
            slidesToShow: 5,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        });

        /*
       Jquery Nice Select Js
       ============================*/
        $('#nice-select').niceSelect();

        /*
        Scroll To Top Js
        ============================*/
        $(function () {
            $("#scrollTop").hide();
            var position = $(window).scrollTop();
            var timer;
            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop();
                clearTimeout(timer);
                if (scrollTop > 100) {
                    if (scrollTop > position) {
                        $('#scrollTop').fadeOut();
                    } else {
                        $('#scrollTop').fadeIn();
                        timer = window.setTimeout(function() {
                            $("#scrollTop").fadeOut();
                        }, 3000);
                    }
                    position = scrollTop;
                } else {
                    $('#scrollTop').fadeOut();
                }
            });
            $(".scrollup-btn").click(function() {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        });

        /*
       scrolldown
       ============================*/
        $("#scrolldown").on('click', function(e) {
            e.preventDefault()
        $('html, body').animate({
            scrollTop: $("#scrolldown-end").offset().top
        }, 1500);
        });

        /*
        ounter Js
        ============================*/
        $(".counter").counterUp({
            delay: 100,
            time: 2500,
        });

        /*
       Magnific Popup
       ============================*/
        $(".video-play").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });

        /*
        Isotope Js
       ============================*/
        $('.isotope-grid').isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows'
        });
       var $grid = $('.isotope-grid').isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows'
        });
        $('.filter-button-group').on( 'click', 'button', function() {
            $(".filter-button-group button").removeClass("active");
            $(this).addClass("active");
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    });
})(jQuery);
