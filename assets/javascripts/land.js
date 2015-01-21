(function() {


    // Declare my variables

    var form   = $("#form-land-query"),
        button = form.find('.button'),
        radio  = form.find('input:radio');


    // Detect changes on interaction

    radio.change(function() {

      var radioButtonHasValue = false;

      radio.each(function() {

        if(this.checked) {

          radioButtonHasValue = true;

          return false;

        }

      });


      // Enabled button

      if (radioButtonHasValue) {

        button.removeAttr('disabled');

      }


      // Submit the form

      $('button[type=submit]').on('click', function(e) {


        e.preventDefault();


        if ($('#radio-1').is(':checked')) {

            window.location.href = "query-sbi";

          } else {

           window.location.href = "query";

        }


      });


    });


})();