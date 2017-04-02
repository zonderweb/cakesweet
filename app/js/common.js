$(function() {

	/* mmenu
	============= */
	$('#my-menu').mmenu(); 

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

