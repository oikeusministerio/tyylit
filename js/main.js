//Button group toggle
if ($('.btn-group').length) {

	$('.btn-group').find('a').click(function (e) {
		e.preventDefault();
		$(this).parent().find('a').each(function () {
			$(this).removeClass('active');
		});
		$(this).addClass('active');
	});
	if ($('.btn-group').find('input').length) {
		$('.btn-group').find('input').click(function () {
			$(this).parent().find('input').each(function () {
				$(this).removeClass('active');
			});
			if( $(this).is(':radio') ){
				$(this).parent().parent().find('li').removeClass('active');
				$(this).parent().addClass('active');
			}else{
				$(this).addClass('active');
			}
		});
	}
}

//Form stuff
//if( $('.form-element').length ){
//Email validation
function IsEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}
$('#email').blur(function () {
	var email = $('#email').val();

	if (IsEmail(email)) {
		// Add visibility to icon-ok if it's hidden
		if ($('.icon-ok').hasClass('is-hidden')) {
			$('.icon-ok').removeClass('is-hidden');
			$('.icon-ok').addClass('is-visible');
		}
		// Remove visibility from error-text unless it's already hidden
		if ($('.error-text').hasClass('is-visible')) {
			$('.error-text').addClass('is-hidden');
			$('.error-text').removeClass('is-visible');
		}

	} else {

		// Remove visibility from icon-ok if it's visible
		if ($('.icon-ok').hasClass('is-visible')) {
			$('.icon-ok').removeClass('is-visible');
			$('.icon-ok').addClass('is-hidden');
		}
		// Add visibility to error-text unless it's already visible
		if ($('.error-text').hasClass('is-hidden')) {
			$('.error-text').addClass('is-visible');
			$('.error-text').removeClass('is-hidden');
		}

	}
});

//URL validation. Not needed?
/*if( $('#url').val ){
	var url = $('#url');
}*/


//Text area word count and special input fields
/*
if( $('textarea').length || $('.js-word-count').length ){
	var ta;
	var maxlength;
	// Set the counter elements
	$('textarea, .js-word-count').each(function(){
		$(this).after( '<span class="textarea-word-count inactive"></span>' );
		maxlength = $(this).attr("maxlength");
		reallength = maxlength - $(this).val().length;
		$(this).parent().find(".textarea-word-count").text( reallength );
	});
	// Set the counter value
	$("textarea, .js-word-count").keyup(function(){
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
}*/

function setCounter(item) {
	if ($(item).attr("maxlength") && !$(item).hasClass('search-field')) {
		var ti = $(item);
		ti.wrap('<div style="position: relative;"></div>');
		var tip = ti.parent();
		ti.after('<span class="textarea-word-count inactive"></span>');
		maxlength = ti.attr("maxlength");
		reallength = maxlength - ti.val().length;
		tip.find(".textarea-word-count").text(reallength);

		ti.keyup(function () {
			if (tip.find(".textarea-word-count").hasClass("inactive")) {
				tip.find(".textarea-word-count").removeClass("inactive");
			}
			maxlength = ti.attr("maxlength");
			reallength = maxlength - ti.val().length;
			tip.find(".textarea-word-count").text(reallength);

			if (ti.is("textarea") && ti.hasClass("js-dynamic")) {
				ti.height(1).height(ti[0].scrollHeight);
			}
		});
	}
}

$("textarea, input").each(function () {
	setCounter($(this));
});
//}
/*
if( $('.datepicker').data('maxdate').length ){
	var maxdate = parseInt( $('.datepicker').data('maxdate') );
} */


if ($('.datepicker').length) {
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
if ($('.fadeout').length) {

	var orig_text;

	$('.fadeout').each(function () {
		// console.log( $(this).children(":first")[0].clientHeight );
		if ($(this).children(":first")[0].clientHeight < 160) {
			$(this).parent().addClass('open');
			$(this).addClass('pt-fix');
			$(this).parent().find('.read-more').remove();
		}
	});

    //$('.fadeout.clickable').click(function (event) {
    //    event.preventDefault();

    //    $(this).addClass('open');
    //    $(this).removeClass('clickable');
    //    $(this).find('a').addClass('pt-fix');
    //    $(this).find('.read-more').remove();
    //});

	$('.read-more').find('a').click(function (event) {
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


if ($('.helper-container').length) {
	$('.icon-help').on('click', function () {
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
	if (section.hasClass('is-visible')) {
		$('.expandable').removeClass('expanded');
		$('.navi-responsive').removeClass('is-visible');
		$(section.selector).removeClass('is-visible');
		$('.site-actions').find('a').removeClass('selected');
	} else {
		if (section.hasClass('navi-responsive')) {
			section.addClass('is-visible').find('.section').removeClass('is-visible');
			$('body').find('.expandable').addClass('expanded expanded-navi');
			$('.expandable').find('.section').removeClass('is-visible');
			$('.site-actions').find('a').removeClass('selected');
		} else {
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
if ($('.navi-responsive').length) {
	var m_trigger = $('.mobile-trigger a');
	var sn_trigger = $('.sub-nav-trigger');
	var nav = $('.navi-responsive');

	m_trigger.click(function (event) {
		event.preventDefault();
		show_section(nav);
	});

	sn_trigger.click(function (event) {
		event.preventDefault();
		event.stopPropagation();

		$(this).parent().find('ul').slideToggle(200);
		// $('.sub-nav-trigger').hasClass('sub-nav-open').parent().find('ul').slideUp();
		$(this).toggleClass('sub-nav-open');
		if ($('.expandable').hasClass('expanded-navi')) {
			$('.expandable').addClass('expanded-full-navi');
		}

	});

	$('html').click(function () {
		$('.navi-responsive').find('li').find('ul').slideUp(50);
		$('.navi-responsive').find('a').removeClass('sub-nav-open');
	});


}
window.onresize = function () {
	if ($('.expandable').hasClass('expanded-navi') && window.innerWidth > 768) {
		$('.expandable').removeClass('expanded expanded-navi expanded-full-navi');
		$('.navi-responsive').removeClass('is-visible');
	}
};

if ($('.user-navigation').length) {
	var u_trigger = $('.user-navigation').find('.icon-arrow');
	u_trigger.on('click', function (event) {
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
	new Toast('error', 'toast-top-full-width', $('.msg-error').find('.msg-toast').html()),
	new Toast('info', 'toast-top-full-width', $('.msg-info').find('.msg-toast').html()),
	new Toast('warning', 'toast-top-full-width', $('.msg-warning').find('.msg-toast').html()),
	new Toast('success', 'toast-top-full-width', $('.msg-success').find('.msg-toast').html())
];

toastr.options.positionClass = 'toast-top-full-width';
toastr.options.extendedTimeOut = 0; //1000;
toastr.options.timeOut = 0;//6000;
toastr.options.fadeOut = 250;
toastr.options.fadeIn = 250;

$('.toast-container').find('.toast-trigger').on('click', function () {
	var t;
	toast_type = $(this).attr('id');
	for (var i = 0; i < toasts.length; i++) {
		if (toast_type === toasts[i].type) {
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

$("#myCarousel > a[data-slide]").click(function () {
	$("#myCarousel").carousel("pause");
});
$("#myCarousel .carousel-indicators li").click(function () {
	$("#myCarousel").carousel("pause");
});

$('#myCarousel').on('slid.bs.carousel', function () {
	if ($(this).find('.active').hasClass('item-text')) {
		$('.carousel-indicators').addClass('inverse-color');
	}
	else {
		$('.carousel-indicators').removeClass('inverse-color');
	}
});

// Slider

// $( ".slider" ).slider();
/*$('input[type="range"]').rangeslider();

$('input[type="range"]').rangeslider({

	// Feature detection
	polyfill: true,

	// CSS classes
	rangeClass: 'rangeslider',
	fillClass: 'rangeslider__fill',
	handleClass: 'rangeslider__handle',

	// Callback function
	onInit: function() { },

	// Callback function
	onSlide: function(position, value) {},

	// Callback function
	onSlideEnd: function(position, value) { alert('joo'); }
}); */

var $document = $(document),
		selector = '[data-rangeslider]',
		$input = $(selector);

// Normal change event to change the output's value
$document.on('change', selector, function (event) {
	var value = event.target.value;
	//output = event.target.parentNode.getElementsByTagName('output')[0];
	//output.innerHTML = value;
});

// Initialize the elements
$input.rangeslider({
	polyfill: false,
});




// Tag-it

$(".tagit-list").tagit({
	allowSpaces: true,
	availableTags: ["demokratia", "äänestys", "foo", "bar", "lorem", "lipsum", "otakantaa", "ota kantaa", "vaalit"]
});
$(".tagit-list .tagit-new input.ui-autocomplete-input").attr("placeholder", "Aloita kirjoittamaan asiasanaa");

if ($('.tagit-list').length) {
	var length = $('.tagit-list .tagit-new').find('input').attr('placeholder').length;
	$('.tagit-list .tagit-new').find('input').attr('size', length);
}

$(".location-list").tagit({
	allowSpaces: true,
	availableTags: ["Turku", "Helsinki", "Tampere", "Oulu", "Jyväskylä", "Vaasa", "Seinäjoki", "Rovaniemi", "Hanko"]
});
$(".location-list .tagit-new input.ui-autocomplete-input").attr("placeholder", "Aloita kirjoittamaan paikkakunnan nimeä");

if ($('.location-list').length) {
	var length = $('.location-list .tagit-new').find('input').attr('placeholder').length;
	$('.location-list .tagit-new').find('input').attr('size', length);
}

$(".person-list").tagit({
	allowSpaces: true,
	availableTags: ["Matti Meikäläinen", "Oskari Olematon", "David Hasselhoff", "Homer Simpson", "Aku Ankka", "Roope Ankka", "B Virtanen"]
});
$(".person-list .tagit-new input.ui-autocomplete-input").attr("placeholder", "Aloita kirjoittamaan henkilön nimeä");

if ($('.person-list').length) {
	var length = $('.person-list .tagit-new').find('input').attr('placeholder').length;
	$('.person-list .tagit-new').find('input').attr('size', length);
}

// hankesivu-read-mode
$("#btnAddParticipationContainer").removeClass("is-hidden");
$("#btnCancelParticipationContainer").removeClass("is-hidden");
$("#addParticipations").hide();
$("#btnAddParticipationContainer").find("a").on("click", function () {
	$("#showParticipations").hide();
	$("#addParticipations").show();
});
$("#btnCancelParticipationContainer").find("a").on("click", function () {
	$("#showParticipations").show();
	$("#addParticipations").hide();
});

$("#rblIDontAcceptTerms").click(function () {
	$("#btnSaveHanke").attr("disabled", true).removeClass("btn-otk");
});

$("#rblTermsAccepted").click(function () {
	$("#btnSaveHanke").attr("disabled", false).addClass("btn-otk");
});


(function ($) {
    $.fn.delayKeyup = function (callback, ms) {
        $(this).keyup(function (event) {
            var srcEl = event.currentTarget;
            if (srcEl.delayTimer)
                clearTimeout(srcEl.delayTimer);
            srcEl.delayTimer = setTimeout(function () { callback($(srcEl)); }, ms);
        });

        return $(this);
    };
})(jQuery);

$("input[data-source][data-type]").each(function () {
    var target = $(this);
    if (target.data("type") == "shortcut") {
        var source = $("#" + target.data("source"));

        if (!source.val()) {
            source.on("keyup", function () {
                target.val(cleanShortcutInput(source.val()));
            });
        }
        else {
            source.off("keyup");
        }

        // If shortcut has been manipulated manually then remove complete function
        target.delayKeyup(function () {
            if (!target.val()) {
                source.on("keyup", function () {
                    target.val(cleanShortcutInput(source.val()));
                });
            }
            else {
                source.off("keyup");
            }
            target.val(cleanShortcutInput(target.val()));
        }, 1000);
    }
});

function cleanShortcutInput(input) {
    if (input == null || input.length == 0)
        return input;
    var raw = input.toLowerCase()
        .normalize("NFKD") // ä to a, ö to o...
        .replace(/[\u0300-\u036F]/g, "")
        .replace(/ /g, "_")
        .replace(/[^a-z-0-9-_]/g, '')
        .trim();

    // html encode
    var cleaned = $('<div/>').text(raw).html();
    return cleaned;
}


/* REMOVE THESE IN PRODUCTION */
// Hankesivu-edit-mode
// NOTE: This is only for patternlab. In prod this will done by server code
$("#btnAddHankeLink").click(function () {
	$("#hanke-links ol").append('<li><input class="counterhack" placeholder="http://" maxlength="200" /><input class="counterhack" placeholder="Kirjoita linkin kuvaus..." maxlength="100" /></li>');
	$("#hanke-links ol .counterhack").each(function () {
		setCounter($(this));
		$(this).removeClass("counterhack");
	});
});
/* For preview purposes to hide element those aren't always visible */
$(".debug-hide").click(function () {
	$(this).parent().hide();
});
/* END OF REMOVE THESE IN PRODUCTION */

