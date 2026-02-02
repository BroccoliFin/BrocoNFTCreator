/**
    * headerFixed
    * buttonHeart
    * avatar_popup1
    * avatar_popup2
    * tabs
    * buttonfollow
    * tabs1
    * termcondition
    * connectwallet
    * flcustominput
    * flatAccordion
    * flatAccordion2
    * password
    * btnmenu
    * loadmore
    * dropdown
    * listmenu
    * categorycheckbox
    * cursor
    * gotop
    * parallax
    * dashboard
    * sticky
    * retinaLogo
    * preloader
*/

; (function ($) {

    "use strict";

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var headerFixed = function () {
        if ($("header").hasClass("header-fixed")) {
          var nav = $("#header_main");
    
          if (nav.length) {
            var offsetTop = nav.offset().top,
              headerHeight = nav.height(),
              injectSpace = $("<div>", {
                height: headerHeight,
              });
            injectSpace.hide();
    
            if ($("header").hasClass("style-absolute")) {
              injectSpace.hide();
            } else {
              injectSpace.insertAfter(nav);
            }
    
            $(window).on("load scroll", function () {
              if ($(window).scrollTop() > offsetTop + headerHeight) {
                nav.addClass("is-fixed");
                injectSpace.show();
              } else {
                nav.removeClass("is-fixed");
                injectSpace.hide();
              }
    
              if ($(window).scrollTop() > 100) {
                nav.addClass("is-small");
              } else {
                nav.removeClass("is-small");
              }
            });
          }
        }
      };

    var buttonHeart = function () { 
        $(".wishlist-button").on("click", function() {
            var iteration = $(this).data('iteration') || 1;
            
            switch (iteration) {
                case 1:
                    $(this).addClass("active");
                    var val = parseInt($(this).find("span").text())+1;
                    $(this).find("span").text(val);
                    break;
                case 2:
                    $(this).removeClass("active");
                    var val = parseInt($(this).find("span").text())-1;
                    $(this).find("span").text(val);                   
                    break;
            }
            iteration++;
            if (iteration > 2) iteration = 1;
            $(this).data('iteration', iteration);
        });
    };

    var avatar_popup1 = function(){
        $('.popup-notification').find('.notification').on('click',function(event){
            event.stopPropagation();});
        $('.popup-notification').find('.notification').on('click', function(event){
            if(!$('.avatar_popup').hasClass('visible')){
                $('.avatar_popup').addClass('visible');
                    event.preventDefault();
                }
            else
                $('.avatar_popup').removeClass('visible');
        })    
    };

    var avatar_popup2 = function(){
        $('.popup-user').find('.user').on('click',function(event){
            event.stopPropagation();});
        $('.popup-user').find('.user').on('click', function(event){
            if(!$('.avatar_popup2').hasClass('visible')){
                $('.avatar_popup2').toggleClass('visible');
                    event.preventDefault();
                }
            else
                $('.avatar_popup2').removeClass('visible');
        })
    };

    var tabs = function() {
        if ($('div').hasClass('flat-tabs')) {
            var tabLinks = document.querySelectorAll(".tablinks");
            var tabContent =document.querySelectorAll(".tabcontent");
        
            tabLinks.forEach(function(el) {
            el.addEventListener("click", openTabs);
            });
        
            function openTabs(el) {
                var btn = el.currentTarget; 
                var tabs = btn.dataset.tabs; 
                
                tabContent.forEach(function(el) {
                    el.classList.remove("active");
                });
        
                tabLinks.forEach(function(el) {
                    el.classList.remove("active");
                });
        
                document.querySelector("#" + tabs).classList.add("active");
                
                btn.classList.add("active");
                $('html, body').animate({scrollTop: 0}, 'slow');
            }
        }
    }

    var buttonfollow = function () { 
        $("button.follow").on("click", function() {
            var iteration = $(this).data('iteration') || 1;
            
            switch (iteration) {
                case 1:
                    $(this).addClass("active");
                    $(this).text('Following');
                    var val = parseInt($(this).find("span").text())+1;
                    $(this).find("span").text(val);
                    break;
                case 2:
                    $(this).removeClass("active");
                    $(this).text('Follow');
                    var val = parseInt($(this).find("span").text())-1;
                    $(this).find("span").text(val);                   
                    break;
            }
            iteration++;
            if (iteration > 2) iteration = 1;
            $(this).data('iteration', iteration);
        });
    };

    var tabs1 = function(){
        $('.widget-tabs').each(function(){
            $(this).find('.widget-content-tab').children().hide();
            $(this).find('.widget-content-tab').children(".active").show();
            $(this).find('.widget-menu-tab').children('li').on('click',function(){
                var liActive = $(this).index();
                var contentActive=$(this).siblings().removeClass('active').parents('.widget-tabs').find('.widget-content-tab').children().eq(liActive);
                contentActive.addClass('active').fadeIn("slow");
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.widget-tabs').find('.widget-content-tab').children().eq(liActive).siblings().hide();
            });
        });
    };

    var termcondition = function(){
        $('.flat-tabs').each(function(){
            $(this).find('.content-tab').children().hide();
            $(this).find('.content-tab').children(".active").show();
            $(this).find('.menu-tab').children().on('click',function(){
                var liActive = $(this).index();
                var contentActive=$(this).siblings().removeClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive);
                contentActive.addClass('active').fadeIn("slow");
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive).siblings().hide();
            });
        });
    };

    var connectwallet = function() {
        if ($('span').hasClass('button-connect-wallet')) {
            $('.button-connect-wallet').on('click',function() {
                $('#connect-wallet-grid').toggleClass('hidden');
                $('#connect-wallet-list').toggleClass('active');
            })
        }
    };

    var flcustominput = function () {
        $("input[type=file]").change(function (e) {
            $(this).parents(".uploadfile").find(".filename").text(e.target.files[0].name);
          });          
    };

    var flatAccordion = function () {
        var args = { duration: 600 };
        $('.flat-toggle .toggle-title.active').siblings('.toggle-content').show();
        $('.flat-toggle.enable .toggle-title').on('click', function () {
            $(this).closest('.flat-toggle').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        });
        $('.flat-accordion .toggle-title').on('click', function () {
            if (!$(this).is('.active')) {
                $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }
        });
    };

    var flatAccordion2 = function() {
        var args = {duration: 600};
        $('.flat-toggle2 .toggle-title.active').siblings('.toggle-content').show();
        $('.flat-toggle2.enable .toggle-title').on('click', function() {
            $(this).closest('.flat-toggle2').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        });
      
        $('.flat-accordion2 .toggle-title').on('click', function () {
            if( !$(this).is('.active') ) {
                $(this).closest('.flat-accordion2').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }     
        });
    }; 

    var topSearch=function(){
        
        $(document).on('click',function(e){
            var clickID=e.target.id;if((clickID!=='s')){
                $('.top-search').removeClass('active');
            }});
        $(document).on('click',function(e){
            var clickID=e.target.class;if((clickID!=='a111')){
                $('.show-search').removeClass('active');
        }});
            
        $('.show-search').on('click',function(event){
            event.stopPropagation();});
        $('.search-form').on('click',function(event){
            event.stopPropagation();});
        $('.show-search').on('click',function(event){
            if(!$('.top-search').hasClass("active")){
                $('.top-search').addClass('active');
                    event.preventDefault();
                }
            else
                $('.top-search').removeClass('active');
                event.preventDefault();
                if(!$('.show-search').hasClass("active"))
                    $('.show-search').addClass('active');
                else
                    $('.show-search').removeClass('active'); 
        })
    ;}

    var btnmenu = function() {

        if ($('header').hasClass('header_1')) {
            $('.canvas').on('click', function () {
                $(this).closest('#header_main').find('.canvas-nav-wrap').toggleClass('active');
            });
            $('.canvas-nav-close').on('click', function () {
                $(this).closest('#header_main').find('.canvas-nav-wrap').toggleClass('active');
            });
            $('.canvas-nav-wrap .overlay-canvas-nav').on('click', function () {
                $(this).closest('#header_main').find('.canvas-nav-wrap').toggleClass('active');
            });

            $('.mobile-button').on('click', function () {
                $(this).closest('#header_main').find('.mobile-nav-wrap').toggleClass('active');
            });
            $('.mobile-nav-close').on('click', function () {
                $(this).closest('#header_main').find('.mobile-nav-wrap').toggleClass('active');
            });
            $('.mobile-nav-wrap .overlay-mobile-nav').on('click', function () {
                $(this).closest('#header_main').find('.mobile-nav-wrap').toggleClass('active');
            });

            $(document).on("click", ".menu-item-has-children-mobile", function () {
                var args = { duration: 600 };
                if ($(this).hasClass("active")) {
                  $(this).children(".sub-menu-mobile").slideUp(args);
                  $(this).removeClass("active");
                } else {
                  $(".sub-menu-mobile").slideUp(args);
                  $(this).children(".sub-menu-mobile").slideDown(args);
                  $(".menu-item-has-children-mobile").removeClass("active");
                  $(this).addClass("active");
                }
            });
        }
    }

    var dropdown = function(id){
        if ($('span').hasClass('dropdown')) {
        var obj = $(id+'.dropdown');
        var btn = obj.find('.btn-selector');
        var dd = obj.find('ul');
        var opt = dd.find('li');
            dd.hide();
            obj.on("mouseenter", function() {
                dd.show();
                dd.addClass('show');
                $(this).css("z-index",1000);
            }).on("mouseleave", function() {
                dd.hide();
                 $(this).css("z-index","auto")
                 dd.removeClass('show');
            })
            
            opt.on("click", function() {
                dd.hide();
                var txt = $(this).text();
                opt.removeClass("active");
                $(this).addClass("active");
                btn.text(txt);
            });
    }}

    var loadmore = function() {
        if ($('div').hasClass('loadmore-8-item')) {
            $(".fl-item").slice(0, 8).show();
            $("#button-loadmore").on('click', function (e) {
                e.preventDefault();
                $(".fl-item:hidden").slice(0, 4).slideDown();
                if ($(".fl-item:hidden").length == 0) {
                    $("#button-loadmore").hide();
                }
            });
        }   
        if ($('div').hasClass('loadmore-12-item')) {
            $(".fl-item").slice(0, 12).show();
            $("#button-loadmore").on('click', function (e) {
                e.preventDefault();
                $(".fl-item:hidden").slice(0, 4).slideDown();
                if ($(".fl-item:hidden").length == 0) {
                    $("#button-loadmore").hide();
                }
            });
        }   
        if ($('div').hasClass('loadmore-12-item-1')) {
            $(".fl-item-1").slice(0, 12).show();
            $("#button-loadmore").on('click', function (e) {
                e.preventDefault();
                $(".fl-item-1:hidden").slice(0, 3).slideDown();
                if ($(".fl-item-1:hidden").length == 0) {
                    $("#button-loadmore").hide();
                }
            });
        }   
    };

    var listmenu = function() {
        if ($('div').hasClass('list-menu')) {
            $('.button-sub-item').on('click', function () {
                $(this).closest('.has-item').toggleClass('active');
                $(this).closest('.has-item').find('.sub-item').slideToggle('active');
            });
            $('.language .sub-item li').on('click', function () {
                $(this).closest('.sub-item').hide();
                $(this).closest('.language').find('.button-sub-item span').text($(this).text());
            })
        }
    }

    var categorycheckbox = function() {
        if ($('div').hasClass('widget-category-checkbox')) {
            $('.widget-category-checkbox h5').on('click', function () {
                $(this).closest('.style-1').find('h5').toggleClass('active');
                $(this).closest('.widget-category-checkbox').find('.content-wg-category-checkbox').slideToggle('hidden');
            });
        }
        if ($('div').hasClass('product-item')) {
            $('.product-item>i').on('click', function () {
                $(this).closest('.product-item').find('.icon-keyboard_arrow_down').toggleClass('hiden');
                $(this).closest('.product-item').find('.content').slideToggle('hidden');
            });
        }
        if ($('div').hasClass('widget-edit')) {
            $('.widget-edit .icon-keyboard_arrow_up').on('click', function () {
                $(this).closest('.widget-edit').find('.icon-keyboard_arrow_up').toggleClass('hiden');
                $(this).closest('.widget-edit').find('form').slideToggle('hidden');
            });
        }
    }

    var dashboard = function() {
        if ($('body').hasClass('dashboard')) {
            $('.btn-canvas').on('click', function () {
                $(this).toggleClass('active');
                $(this).closest('#page').find('.wrap-content').toggleClass('full');
                $(this).closest('#page').find('.section-menu-left').toggleClass('null');
            });
        }

        if ($('body').hasClass('dashboard1')) {
            $('.btn-canvas').on('click', function () {
                $(this).toggleClass('active');
                $(this).closest('#page').toggleClass('full');
                $(this).closest('#page').find('.section-menu-left').toggleClass('null');
            });
        }

    }

    // progress
    var gotop = function() {
        if ($('div').hasClass('progress-wrap')) {
        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateprogress = function() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateprogress();
        $(window).scroll(updateprogress);
        var offset = 150;
        var duration = 550;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })
    }}

    const cursor = function () {
        var myCursor = jQuery(".tf-mouse");
        if (myCursor.length) {
          if ($("body")) {
            const e = document.querySelector(".tf-mouse-inner"),
              t = document.querySelector(".tf-mouse-outer");
            let n,
              i = 0,
              o = !1;
            (window.onmousemove = function (s) {
              o ||
                (t.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (e.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (n = s.clientY),
                (i = s.clientX);
            }),
              $("body").on(
                "mouseenter",
                "a, .canvas, .progress-wrap, .wishlist-button",
                function () {
                  e.classList.add("mouse-hover"), t.classList.add("mouse-hover");
                }
              ),
              $("body").on(
                "mouseleave",
                "a, .canvas, .progress-wrap, .wishlist-button",
                function () {
                  ($(this).is("a") && $(this).closest(".canvas").length) ||
                    (e.classList.remove("mouse-hover"),
                    t.classList.remove("mouse-hover"));
                }
              ),
              (e.style.visibility = "visible"),
              (t.style.visibility = "visible");
          }
        }
    };

    var parallax = function() {
        if ($('div').hasClass('bg-text')) {
            new simpleParallax(document.getElementsByClassName('bg-text'), {
                scale: 1.6,
                orientation: 'right'
            });
        }
    };

    var sticky = function() {
        if ($('body').hasClass('sticky-scroll')) {
            $(document).ready(function() {
                var $window = $(window);  
                var $sidebar = $(".po-sticky"); 
                var $sidebarHeight = $sidebar.innerHeight();   
                var $footerOffsetTop = $(".po-sticky-footer").offset().top +$(".po-sticky-footer .content-inner.active").innerHeight() ; 
                var $sidebarOffset = $sidebar.offset().top;
                
                $window.scroll(function() {
                if($window.scrollTop() > $sidebarOffset - 87) {
                    $sidebar.addClass("fixed");   
                } else {
                    $sidebar.removeClass("fixed");   
                }    
                if($window.scrollTop() + $sidebarHeight > $footerOffsetTop - 87 ) {
                    $sidebar.css({"top" : 0 - 87 -($window.scrollTop() + $sidebarHeight - $footerOffsetTop)});        
                } else {
                    $sidebar.css({"top": "0"});  
                }    
                });   
            });
        }

        if ($('body').hasClass('sticky-scroll1')) {
            $(document).ready(function() {
                var $window = $(window);  
                var $sidebar = $(".po-sticky"); 
                var $sidebarHeight = $sidebar.innerHeight();   
                var $footerOffsetTop = $(".po-sticky-footer").offset().top +$(".po-sticky-footer").innerHeight() ; 
                var $sidebarOffset = $sidebar.offset().top;
                
                $window.scroll(function() {
                if($window.scrollTop() > $sidebarOffset - 87) {
                    $sidebar.addClass("fixed");   
                } else {
                    $sidebar.removeClass("fixed");   
                }    
                if($window.scrollTop() + $sidebarHeight > $footerOffsetTop - 98 ) {
                    $sidebar.css({"top" : 0 - 98 -($window.scrollTop() + $sidebarHeight - $footerOffsetTop)});        
                } else {
                    $sidebar.css({"top": "0"});  
                }    
                });   
            });
        }

    }

    var retinaLogos = function() {
        var retina = window.devicePixelRatio > 1 ? true : false;
          if(retina) {
            var tfheader =$('#logo_header').data('retina');
            $('#site-logo-inner').find('img').attr({src:tfheader,width:'168px',height:'57px'});
            var tffooter =$('#logo_footer').data('retina');
            $('#logo-footer').find('img').attr({src:tffooter,width:'168px',height:'57px'});
          }
      };  

    var preloader = function () {
        setTimeout(function () {
        $(".preload-container").fadeOut("slow", function () {
            $(this).remove();
        });
        }, 1000);
    };

    // Dom Ready
    $(function () {
        headerFixed();
        buttonHeart();
        avatar_popup1();
        avatar_popup2();
        tabs();
        buttonfollow();
        tabs1();
        termcondition();
        connectwallet();
        flcustominput();
        flatAccordion();
        flatAccordion2();
        topSearch();
        btnmenu();
        loadmore();
        dropdown('#select-day');
        listmenu();
        categorycheckbox();
        dashboard();
        cursor();
        gotop();
        parallax();
        sticky();
        retinaLogos();
        preloader();
    });

})(jQuery);
