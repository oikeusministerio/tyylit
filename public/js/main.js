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

}




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
        });
    });

    var show_section = function (section) {
        section.addClass('is-visible').siblings('.section').removeClass('is-visible');
        section.closest('.expandable').addClass('expanded');
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



