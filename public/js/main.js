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
	function IsEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	//Email validation
	$('#email').blur(function(){
		var email = $('#email').val();
		if( IsEmail(email) ){
			console.log('joo');
		}else{
			console.log('error');
		}
	});

	//URL validation
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