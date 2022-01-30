/*

	Template Name: Eventor - Conference & Event HTML Template
	Author: Themewinter
	Author URI: https://themeforest.net/user/themewinter
	Description: Eventor - Conference & Event HTML Template
	Version: 1.0

	1. Mobile Menu
	2. Main Slideshow
	3. Gallery popup
	4. Counter
	5. Contact form
	6. Back to top

*/


jQuery(function($) {
  "use strict";


// detect touch
	if (!("ontouchstart" in document.documentElement)) {
  	document.documentElement.className += "no-touch";
	}
$('.gallery-container').on('touchstart touchend', function(e) {
    $(this).toggleClass('over');
});

	/* ----------------------------------------------------------- */
	/*  Mobile Menu
	/* ----------------------------------------------------------- */



	/* ----------------------------------------------------------- */
	/*  Event counter
	/* -----------------------------------------------------------*/

	if ( $( '.countdown' ).length > 0 ) {
		$(".countdown").jCounter({
		  	date: '2 April 2022 10:00:00',
		  	fallback: function() { console.log("count finished!") }
		});
	}

	/* ----------------------------------------------------------- */
	/*  Event Map
	/* -----------------------------------------------------------*/





	/* ----------------------------------------------------------- */
	/*  Main slideshow
	/* ----------------------------------------------------------- */

		$('#main-slide').carousel({
			pause: true,
			interval: 100000,
		});


	/* ----------------------------------------------------------- */
	/*  Gallery popup
	/* ----------------------------------------------------------- */



	  $(document).ready(function(){

			$(".gallery-popup").colorbox({rel:'gallery-popup', transition:"fade", innerHeight:"400"});

			$(".popup").colorbox({iframe:true, innerWidth:650, innerHeight:450});

	  });





	/* ----------------------------------------------------------- */
	/*  Counter
	/* ----------------------------------------------------------- */

		$('.counterUp').counterUp({
		 delay: 10,
		 time: 1000
		});



	/* ----------------------------------------------------------- */
	/*  Contact form
	/* ----------------------------------------------------------- */



	/* ----------------------------------------------------------- */
	/*  Back to top
	/* ----------------------------------------------------------- */

		$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				 $('#back-to-top').fadeIn();
			} else {
				 $('#back-to-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-to-top').on('click', function () {
			 $('#back-to-top').tooltip('hide');
			 $('body,html').animate({
				  scrollTop: 0
			 }, 800);
			 return false;
		});

		$('#back-to-top').tooltip('hide');	

});


// hamburger-navbar
$(document).ready(function(){
	$(".hamburger").click(function(){
		$(".hamul").show()
	});
});
$(document).ready(function(){
	$(".cross").click(function(){
		$(".hamul").hide()
	});
});

// smoothscroll

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});

// navscroll
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 150){
            $(".navbar").css({"background-color":"#0e0e11"}); 
            $(".hov").css({"color":"#fff"});  
			$(".headerimg").css({"color":"#fff"});  
        }

        else if($(window).scrollTop()=0){
            $(".navbar").css({"background-color":"#fff"}); 
            $(".hov").css({"color":"#000"});  
			$(".headerimg").css({"color":"#000"});  
        }

        else {
            $(".navbar").css({"background-color":"fff"});
             $(".hov").css({"color":"#000"});  
			 $(".headerimg").css({"color":"#000"});
        }

    });
});

// $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(window).scrollTop() > 150){
//             $(".headerimg").css({"width":"110px"});   
//         }
//         else{
//             $(".headerimg").css({"width":"170px"});
//         }

//     });
// });

// owlCarousel

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 5000, //Set AutoPlay to 3 seconds
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
});

