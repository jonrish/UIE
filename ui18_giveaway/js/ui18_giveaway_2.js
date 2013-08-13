$(document).ready( function() {

	$('div.experts').on('click', 'button', function() {
		$(this).closest('h2').next('p').toggleClass('hidden');
	});

	$('form').validate({
		rules: {
			email: {
				required: true
			}
		}
	});

});
