/*
Copyright (c) 2017 
------------------------------------------------------------------
[Master Javascript]

Project:	Fast Food Responsive Template

-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var landingpage = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {

            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }

            /*-------------- Fast Food Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
			this.Mobilemenu();
            this.Slider();
            this.Menu_slider();
            this.SubmitForms();
			this.Counter();
			this.Datepicker();
			this.Gallery();
			this.MailFunction();



        },

        /*-------------- Fast Food Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
		Mobilemenu: function() {
	if ($(window).width() < 768) { 
		$('.menu-expander > i ').on('click', function () {
			$('.fs_menu > ul').slideToggle();
			return false;
		});
		$('.fs_menu ul li.dropdown').children('a').append(function () {
			return '<div class="dropdown-expander"><i class="fa fa-bars"></i></div>';    			
		});
		$('.fs_menu > ul > li.dropdown a >.dropdown-expander').on('click', function () {
			$(this).parent().parent().children('.sub-menu').slideToggle();
			return false;
		});

	}
},
		
		

	    //banner slider
		    Slider: function() {
			 if($(".fs_banner_wrapper").length){	
			var tpj=jQuery;			
			var revapi1078;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_1078_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_1078_1");
				}else{
					revapi1078 = tpj("#rev_slider_1078_1").show().revolution({
						sliderType:"standard",
                 jsFileLocation:"plugins/revolution/js",
						sliderLayout:"fullscreen",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"off",
							touch:{
								touchenabled:"on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							}
							,
							arrows: {
								style:"zeus",
								enable:true,
								hide_onmobile:true,
								hide_under:600,
								hide_onleave:true,
								hide_delay:200,
								hide_delay_mobile:1200,
								tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
								left: {
									h_align:"left",
									v_align:"center",
									h_offset:30,
									v_offset:0
								},
								right: {
									h_align:"right",
									v_align:"center",
									h_offset:30,
									v_offset:0
								}
							}
							,
							bullets: {
								enable:true,
								hide_onmobile:true,
								hide_under:600,
								style:"metis",
								hide_onleave:true,
								hide_delay:200,
								hide_delay_mobile:1200,
								direction:"horizontal",
								h_align:"center",
								v_align:"bottom",
								h_offset:0,
								v_offset:30,
								space:5,
								tmp:'<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
							}
						},
						viewPort: {
							enable:true,
							outof:"pause",
							visible_area:"80%",
							presize:false
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						//gridheight:[600,600,500,400],
						lazyType:"none",
						parallax: {
							type:"mouse",
							origo:"slidercenter",
							speed:2000,
							levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
							type:"mouse",
						},
						shadow:0,
						spinner:"off",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
			}

			});	/*ready*/
						}
			},
			//menu slider
			Menu_slider:function() {
			    if ($('.menu_slider').length > 0) {
                $(".menu_slider").owlCarousel({
                    navigation: true,
                    loop: true,
                    items:4 ,
                    autoplay: false,
					dots:false,
					nav:true,
					animateOut: 'fadeOut',
					animateIn: 'flipInX',
					smartSpeed:600, 
					margin:30,					
                    singleItem: true,
					navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
					responsive:{
						0:{
							items:1
						},
						600:{
							items:3
						},
						1000:{
							items:4
						}
					}

                });
            }
			},


        //Submit Form

        SubmitForms: function() {
            $("body").on("click", ".ed_submit", function(e) {
                e.preventDefault();
                var parent_form = $(this).parent();
                var from_email = parent_form.find("#contact_form_from_email").val();
                var to_email = parent_form.find("#contact_form_to_email").val();
                if (from_email == "" || from_email == undefined) {
                    from_email = to_email;
                }
                var data_object = {};
                var i = 0;
                parent_form.children(".form_input_app_div").children(".pc_input_section").each(function() {
                    var id = $('.form-control', this).attr("id");
                    id = id.replace("-", " ");
                    data_object[i] = {}
                    data_object[i]["id"] = id;
                    data_object[i]["value"] = $('.form-control', this).val();
                    i++;
                });
                if (from_email != undefined && from_email != "" && to_email != undefined && to_email != "") {
                    $.ajax({
                        type: "post",
                        url: "sendMail.php",
                        dataType: "text",
                        data: {
                            "from_email": from_email,
                            "to_email": to_email,
                            "data_object": data_object
                        },
                        success: function(data) {
                            alert("sent successfully.");
                        }
                    });
                }
            });
        },
				// Counter
        Counter: function() {
            if ($('.counter_box').length > 0) {
                $('.counter_box').appear(function() {
                    $('.count-no').countTo();
                });
            }
        },

				  //Datepicker
		Datepicker: function() {
			if($(".datepicker").length > 0){
				$(".datepicker").datepicker({
					dateFormat: "dd-mm-yy"
				});
			}
		},
		  
		  //Gallery
		  
		  Gallery: function() { 
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		removalDelay: 500,
		mainClass: 'mfp-with-zoom',
		gallery: {
			enabled: true
		},			
		
	});

		
		  },
		  		//contact mail
		MailFunction:function(){
			//help mail function	
			$('.submit_frm').on('click', function(){
				var u_name=$('#name').val();
				var u_email=$('#email').val();
				var u_phone=$('#number').val();
				var u_date=$('#date').val();
				var u_msg=$('#message').val();
				
				$.ajax({
					type: "POST",
					url: "contactmail.php",
					data: {
						'username':u_name,
						'useremail':u_email,
						'userphone':u_phone,
						'userdate':u_date,
						'user_msg':u_msg,
						},
					success: function(msg) {
						var full_msg=msg.split("#");
						if(full_msg[0]=='1'){
							$('#name').val("");
							$('#email').val("");
							$('#number').val("");
							$('#date').val("");
							$('#message').val("");
							$('#err_msg').html( full_msg[1] );
						}
						else{
							$('#name').val(u_name);
							$('#email').val(u_email);
							$('#number').val(u_phone);
							$('#date').val(u_phone);
							$('#message').val(u_msg);
							$('#err_msg').html( full_msg[1] );
						}
					}
				});
			});
		}
		
	};
		
		
	 
        landingpage.init();
		
		
		// Load Event
		
		$(window).on('load', function() {
			jQuery(".loader_wrapper").fadeOut();
			jQuery(".loader_wrapper").delay(600).fadeOut("slow");

		});



})(jQuery);