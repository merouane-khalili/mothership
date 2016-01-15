/**
 * Mothership Site jQuery
 *
 * All general site scripts are to be contained here
 */

jQuery(document).ready(function($) {

	var resizeTimeout;
	$(window).resize(function() {
	    clearTimeout(resizeTimeout);
	    resizeTimeout = setTimeout(function(){$(window).trigger('resize-end')}, 500);
	});

	var mobile = false;

    if (window.innerWidth <= 768) {
        mobile = true;
    } else {
        mobile = false;
    }

	 var stickyFooter = function(){
    	var marginals = $('.header').height() + $('.footer').height(),
    		winHeight = $(window).height(),
    		content = $('main.content');

        if (mobile == false) {
            content.css('min-height',  winHeight - marginals);
        } 
    }

    $(window).on('load', stickyFooter);
    $(window).on('resize', stickyFooter);


    // Set JS class
    $('.no-js').removeClass('no-js').addClass('js');

	// Insets the tabs menu
	$('.tabs').prepend('<nav class="tab-menu"><ul><li class="details"><a href="#details">Details</a></li></ul></nav>');

	if ($('.fitting').is(':visible')) {
		$('.tab-menu ul').append('<li class="fitting"><a href="#fitting">Fitting guide</a></li>');
	}

	if ($('.shipping').is(':visible')) {
		$('.tab-menu ul').append('<li class="shipping"><a href="#shipping">Shipping &amp; returns</a></li>');
	}

	// product page tab
	(function(){
		$('.tab-menu a').click(function(){
			if($(this).hasClass('current')) {
				return false;
			}

			$('.tab-menu .current').removeClass('current');
			$('.tabs > div').hide();
			$('.tabs div.'+$(this).parent().attr('class')).show();
			$(this).parent().addClass('current');

			return false;
		});
		// select the first tab
		$('.tab-menu li:first-child a').click();
	})();



	// Returns Toggle


	$(function() {
        var toggleReturnsInput = function() {
            var val;
            val = $('#form_resolution').val();

            if ('refund' == val) {
                $('#form_exchangeUnit').parents('.field').hide(0);
            }
            else {
                $('#form_exchangeUnit').parents('.field').show(0);
            }
        };

        $('#form_resolution').change(function() {
            toggleReturnsInput();
        });

        toggleReturnsInput();
    });
    
});