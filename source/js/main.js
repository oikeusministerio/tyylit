//Button group toggle
if( $('.btn-group').length ){
	$('.btn-group').find('a').click(function(e){
		e.preventDefault();
		$(this).parent().find('a').each(function(){
			$(this).removeClass('active');
		});
		$(this).addClass('active');
	});
}

//Form stuff
if( $('.form-element').length ){
	//Email validation
	function IsEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	$('#email').blur(function(){
		var email = $('#email').val();

		if( IsEmail(email) ){
			// Add visibility to icon-ok if it's hidden
			if( $('.icon-ok').hasClass('is-hidden') ){
				$('.icon-ok').removeClass('is-hidden');
				$('.icon-ok').addClass('is-visible');
			}
			// Remove visibility from error-text unless it's already hidden
			if( $('.error-text').hasClass('is-visible') ){
				$('.error-text').addClass('is-hidden');
				$('.error-text').removeClass('is-visible');
			}

		}else{

			// Remove visibility from icon-ok if it's visible
			if( $('.icon-ok').hasClass('is-visible') ){
				$('.icon-ok').removeClass('is-visible');
				$('.icon-ok').addClass('is-hidden');
			}
			// Add visibility to error-text unless it's already visible
			if( $('.error-text').hasClass('is-hidden') ){
				$('.error-text').addClass('is-visible');
				$('.error-text').removeClass('is-hidden');
			}

		}
	});

	//URL validation. Not needed?
	if( $('#url').val ){
		var url = $('#url');
	}


	//Text area word count
	if( $('textarea').length ){
		// Set the counter elements
		$('textarea').each(function(){
			$(this).after( '<span class="textarea-word-count"></span>' );
		});
		// Set the counter value
		$(".form-element textarea").keyup(function(){
		  $(this).parent().find(".textarea-word-count").text( (400 - $(this).val().length)+" merkkiä jäljellä" );
		});
	}
}


// Navigation

$('.navi-sample ul li ul').css('visibility', 'hidden');
$('.navi-sample ul li.toplevel .arrow-link').click(function (e) {
	e.stopPropagation();
	if ($(this).next('ul').css('visibility') == 'hidden') {
		$('.navi-top ul li ul').css('visibility', 'hidden');
		$(this).next('ul').css('visibility', 'visible');
	} else {
		$(this).next('ul').css('visibility', 'hidden');
	}
});

// -- Responsive Nav
/*
if( $('.navi-responsive').length ){
	var m_trigger = $('.mobile-trigger a');
	var sn_trigger = $('.sub-nav-trigger');
	var nav = $('.navi-responsive');

	m_trigger.click(function(event){
		event.preventDefault();
		nav.slideToggle(350);
	});

	sn_trigger.click( function(event){
		event.preventDefault();

		$(this).parent().find('ul').slideToggle(200);
		$(this).toggleClass('sub-nav-open');
	});

}*/

// -- Header search
/*
if( $('.header').find('.js-expand-search').length && $('.search-field').css('display') === 'none' ){
	var search = $('.search-form');
	search.on( 'click', '.js-expand-search', function(event){
		event.preventDefault();
		$(this).parent().find('.search-field').animate( {width: 'toggle'} );
		$(this).removeClass('js-expand-search');
	});

}
*/



// Fadeout
if( $('.fadeout').length ){
	var orig_text = $('.read-more').find('a').text();

	$('.read-more').find('a').click(function(event){
		event.preventDefault();

		$('.fadeout').toggleClass('open');

		if( $('.fadeout').hasClass('open') ){
			$(this).text('Pienennä teksti');
			$(this).addClass('pt-fix');
		}else{
			$(this).text(orig_text);
			$(this).removeClass('pt-fix');
		}
	});
}

	// Pasted from old site {

    $('.site-actions > a, #closeButtonContainer').click(function () {
        $('.site-actions > a').removeClass('selected');
        $(this).addClass('selected');
        // Tyhjennetään lomakkeiden kenttien arvot IE8/IE9 selaimilla
        /* if (getInternetExplorerVersion() <= 9 && getInternetExplorerVersion() != -1) {
            $('input.ctl-text').val('');
            showIEPlaceholders();
        } */
    });

    //-------------Hide possible info message
    /* $("#infoMessage").fadeIn(3000); */

    //-------------Show hide login/register
    $('.expandable').each(function () {
        var expandable = $(this);
        var close = $('.close', expandable);
        close.click(function () {
            expandable.removeClass('expanded');
            $('.navi-responsive').removeClass('is-visible');
        });
    });

    var show_section = function (section) {
    	if( section.hasClass('navi-responsive') ){
    		section.addClass('is-visible').find('.section').removeClass('is-visible');
    		$('body').find('.expandable').addClass('expanded expanded-navi');
    		$('.expandable').find('.section').removeClass('is-visible');
    		$('.site-actions').find('a').removeClass('selected');
    	}else{
	        section.addClass('is-visible').siblings('.section').removeClass('is-visible');
	        $('.navi-responsive').removeClass('is-visible');
	        $('.navi-responsive').find('.sub-nav-open').parent().find('ul').slideUp();
	        $('.navi-responsive').find('.sub-nav-open').removeClass('sub-nav-open');

	        section.closest('.expandable').removeClass('expanded-navi expanded-full-navi');
	        section.closest('.expandable').addClass('expanded');
	    }

    }

    $('#hlLogin,#hlLogin2').click(function (event) {
        show_section($('#pnlLogin'));
        event.preventDefault();
    });

    $('#hlRegister,#hlRegister2').click(function (event) {
        show_section($('#pnlRegistration'));
        event.preventDefault();
    });

    $('#hlPasswordRecover').click(function (event) {
        show_section($('#pnlPasswordRecover'));
        event.preventDefault();
    });

	// } - Paste ends.

	// Modification/addon to previous paste
	if( $('.navi-responsive').length ){
		var m_trigger = $('.mobile-trigger a');
		var sn_trigger = $('.sub-nav-trigger');
		var nav = $('.navi-responsive');

		m_trigger.click(function(event){
			event.preventDefault();
			show_section(nav);
		});

		sn_trigger.click( function(event){
			event.preventDefault();
			event.stopPropagation();

			$(this).parent().find('ul').slideToggle(200);
			// $('.sub-nav-trigger').hasClass('sub-nav-open').parent().find('ul').slideUp();
			$(this).toggleClass('sub-nav-open');
			if ( $('.expandable').hasClass('expanded-navi') ) {
				$('.expandable').addClass('expanded-full-navi');
			}

		});

		$('html').click( function(){
			$('.navi-responsive').find('li').find('ul').slideUp(50);
			$('.navi-responsive').find('a').removeClass('sub-nav-open');
		});


	}
	window.onresize = function(){
		if( $('.expandable').hasClass('expanded-navi') && window.innerWidth > 768){
			$('.expandable').removeClass('expanded expanded-navi expanded-full-navi');
			$('.navi-responsive').removeClass('is-visible');
		}
	};







