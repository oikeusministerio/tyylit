//Button group toggle
if( $('.btn-group').length ){

	$('.btn-group').find('a').click(function(e){
		e.preventDefault();
		$(this).parent().find('a').each(function(){
			$(this).removeClass('active');
		});
		$(this).addClass('active');
	});
	if( $('.btn-group').find('input').length ){
		$('.btn-group').find('input').click(function(){
			$(this).parent().find('input').each(function(){
				$(this).removeClass('active');
			});
			$(this).addClass('active');
		});
	}
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
		var ta;
		var maxlength;
		// Set the counter elements
		$('textarea').each(function(){
			$(this).after( '<span class="textarea-word-count inactive"></span>' );
			maxlength = $(this).attr("maxlength");
			$(this).parent().find(".inactive").text( maxlength );
		});
		// Set the counter value
		$(".form-element textarea").keyup(function(){
			ta = $(this);
			if( ta.hasClass('js-dynamic') ){
				ta.height(1).height( ta[0].scrollHeight );
			}
			if( ta.parent().find('.textarea-word-count').hasClass('inactive') ){
				ta.parent().find('.textarea-word-count').removeClass('inactive');
			}

			maxlength = ta.attr("maxlength");
			ta.parent().find(".textarea-word-count").text( (maxlength - ta.val().length) );
		});
	}
}
/*
if( $('.datepicker').data('maxdate').length ){
	var maxdate = parseInt( $('.datepicker').data('maxdate') );
} */



$('.datepicker').pickadate({
	// Escape any “rule” characters with an exclamation mark (!).
	format: 'd.m.yyyy',
	formatSubmit: 'yyyy/mm/dd',
	hiddenPrefix: 'prefix__',
	hiddenSuffix: '__suffix',


	// Strings and translations
	monthsFull: ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'],
	monthsShort: ['Tam', 'Hel', 'Maa', 'Huh', 'Tou', 'Kes', 'Hei', 'Elo', 'Syy', 'Lok', 'Mar', 'Jou'],
	weekdaysFull: ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai'],
	weekdaysShort: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'],
	showMonthsShort: false,
	firstDay: 'Ma',
	today: 'Tänään',
	clear: 'Tyhjennä valinta'

});


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
	var orig_text;

	$('.read-more').find('a').click( function(event) {
		event.preventDefault();

		orig_text = $(this).text();
		$(this).parent().parent('.fadeout').addClass('open');
		$(this).addClass('pt-fix');
		$(this).parent().remove();
		// In case toggle between 'lue lisää' and 'pienennä teksti' is wanted

		//$('.fadeout').toggleClass('open');
		/*
		if( $('.fadeout').hasClass('open') ){
			$(this).text('Pienennä teksti');
			$(this).addClass('pt-fix');
		}else{
			$(this).text(orig_text);
			$(this).removeClass('pt-fix');
		}*/
	});
}


if( $('.helper-container').length ){
	$('.icon-help').on('click', function(){
		$(this).parent().find('.helper-text').toggleClass('is-visible is-vishidden');
	});
}
	// Pasted from old site and heavily modified {

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
		if( section.hasClass('is-visible') ){
			$('.expandable').removeClass('expanded');
			$('.navi-responsive').removeClass('is-visible');
			$(section.selector).removeClass('is-visible');
			$('.site-actions').find('a').removeClass('selected');
		}else{
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

	if( $('.user-navigation').length ){
		var u_trigger = $('.user-navigation').find('.icon-arrow');
		u_trigger.on('click', function(event){
			$(this).parent().find('ul').toggleClass('is-visible is-vishidden');
		});
	}

// Toastr messages

function Toast(type, css, msg) {
	this.type = type;
	this.css = css;
	this.msg = msg;
}

var toasts = [
	new Toast('error', 'toast-top-full-width', $('.msg-error').find('.msg-toast').html() ),
	new Toast('info', 'toast-top-full-width', $('.msg-info').find('.msg-toast').html()),
	new Toast('warning', 'toast-top-full-width', $('.msg-warning').find('.msg-toast').html()),
	new Toast('success', 'toast-top-full-width', $('.msg-success').find('.msg-toast').html())
];

toastr.options.positionClass = 'toast-top-full-width';
toastr.options.extendedTimeOut = 0; //1000;
toastr.options.timeOut = 0;//6000;
toastr.options.fadeOut = 250;
toastr.options.fadeIn = 250;

$('.toast-container').find('.toast-trigger').on('click', function(){
	var t;
	toast_type = $(this).attr('id');
	for(var i = 0; i < toasts.length; i++){
		if( toast_type === toasts[i].type ){
			t = toasts[i];
		}
	}
	toastr[t.type](t.msg);
});

// Carousel

$('#myCarousel').carousel({
	interval: 7000,
	pause: 'hover'
});

$('#myCarousel').on('slid.bs.carousel', function(){
	if( $(this).find('.active').hasClass('item-text') ){
		console.log($('.carousel-indicators').find('.active'));
		$('.carousel-indicators').addClass('inverse-color');
	}
	else{
		$('.carousel-indicators').removeClass('inverse-color');
	}
});

// Tag-it

$(".tagit-list").tagit({
	allowSpaces: true,
	availableTags: ["demokratia", "äänestys", "foo", "bar", "lorem", "lipsum", "otakantaa", "ota kantaa", "vaalit"]
});


// hankesivu-read-mode
$("#btnAddParticipationContainer").removeClass("is-hidden");
$("#btnCancelParticipationContainer").removeClass("is-hidden");
$("#addParticipations").hide();
$("#btnAddParticipation").click(function () {
    $("#showParticipations").hide();
    $("#addParticipations").show();
});
$("#btnCancelParticipation").click(function () {
    $("#showParticipations").show();
    $("#addParticipations").hide();
});