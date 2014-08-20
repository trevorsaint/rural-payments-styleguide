$(document).ready(function() {


	/* FORM FOCUS STYLES */

	if ($('.form').length>0) {

	$(".block-label").each(function() {

		// Add focus

		$(".block-label input").focus(function() {

			$("label[for='" + this.id + "']").addClass("add-focus");

		}).blur(function() {

			$("label").removeClass("add-focus");

		});

		// Add selected class

		$('input:checked').parent().addClass('selected');

	});

	// Add/remove selected class

	$('.block-label').find('input[type=radio], input[type=checkbox]').click(function() {

		$('input:not(:checked)').parent().removeClass('selected');
		$('input:checked').parent().addClass('selected');

		$('.toggle-content').hide();

		var target = $('input:checked').parent().attr('data-target');

		$('#'+target).show();

	});

	// For pre-checked inputs, show toggled content

	var target = $('input:checked').parent().attr('data-target');

	$('#'+target).show();

	}


	/* ERRORS MOVE TO RELATED FORM ENTRY */

	$('.validation-list a[href^="#"]').on('click', function(e) {

		e.preventDefault();

		// Declare variables
		var link = $(this),
			id   = link.attr('href');

		// Get focus
		$(id).focus();

		// Smooth movement to error
		$('html, body').animate({

		scrollTop: ($(id).offset().top) - 20

		}, 500);

	});


  /* TABS */

  if ($('.tabs').length>0) {

    $('.tabs').tabs();

  }


});
