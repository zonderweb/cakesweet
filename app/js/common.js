$(function() {

	/* mmenu
	============= */
	$('#my-menu').mmenu({

		"offCanvas": {
			"position": "right",
			"pageSelector": "#all-wrapper"
		},

		"extensions": [
			"pagedim-black", "fx-menu-fade"
		],

		"navbar": {
			"title": '<img src="img/logo.png" alt="Cakesweet">'
		}

	});

	var api = $('#my-menu').data('mmenu'); 

	api.bind('open:start', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:before', function() {
		$('.hamburger').removeClass('is-active');
	});

	/* OWL Slider
	============== */

	 

	

	/* TABS
	============= */
	$('#tab-all').easytabs();

	/* ACCORDEON
	============== */	
	$(".link-js").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

        if( !$this.hasClass("link-js__active") ) {
            $(".description-js").slideUp();
            $(".link-js").removeClass("link-js__active");
        }

        $this.toggleClass("link-js__active");
        $this.next().slideToggle();


	});

	/* MAPS 
	============= */ 

	



});

