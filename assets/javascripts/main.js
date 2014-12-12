(function() {


    // Show and hide checkbox toggled content

    function showHideCheckboxToggledContent() {

        $(".block-label input[type='checkbox']").each(function() {

            var $checkbox = $(this);
            var $checkboxLabel = $(this).parent();

            var $dataTarget = $checkboxLabel.attr('data-target');

            // Add ARIA attributes

            // If the data-target attribute is defined
            if (typeof $dataTarget !== 'undefined' && $dataTarget !== false) {

                // Set aria-controls
                $checkbox.attr('aria-controls', $dataTarget);

                // Set aria-expanded and aria-hidden
                $checkbox.attr('aria-expanded', 'false');
                $('#'+$dataTarget).attr('aria-hidden', 'true');

                // For checkboxes revealing hidden content
                $checkbox.on('click', function() {

                    var state = $(this).attr('aria-expanded') === 'false' ? true : false;

                    // Toggle hidden content
                    $('#'+$dataTarget).toggle();

                    // Update aria-expanded and aria-hidden attributes
                    $(this).attr('aria-expanded', state);
                    $('#'+$dataTarget).attr('aria-hidden', !state);

                });
            }

        });

    };


    // Show & hide radio toggled content

    function showHideRadioToggledContent() {

        $(".block-label input[type='radio']").each(function() {

            var $radio = $(this);
            var $radioGroupName = $(this).attr('name');
            var $radioLabel = $(this).parent();

            var $dataTarget = $radioLabel.attr('data-target');

            // Add ARIA attributes

            // If the data-target attribute is defined
            if (typeof $dataTarget !== 'undefined' && $dataTarget !== false) {

                // Set aria-controls
                $radio.attr('aria-controls', $dataTarget);

                // Set aria-expanded and aria-hidden
                $radio.attr('aria-expanded', 'false');
                $('#'+$dataTarget).attr('aria-hidden', 'true');

                // For radio buttons revealing hidden content
                $radio.on('click', function() {

                    var state = $(this).attr('aria-expanded') === 'false' ? true : false;

                    // Toggle hidden content
                    $('#'+$dataTarget).toggle();

                    // Update aria-expanded and aria-hidden attributes
                    $(this).attr('aria-expanded', state);
                    $('#'+$dataTarget).attr('aria-hidden', !state);

                });
            }

            // If the data-target attribute is undefined for a radio button,
            // hide visible data-target content for radio buttons in the same group
            else {

                $radio.on('click', function() {

                    // Select radio buttons in the same group
                    $(".block-label input[name=" + $radioGroupName + "]").each(function() {

                        var groupDataTarget = $(this).parent().attr('data-target');

                        // Hide toggled content
                        $('#'+groupDataTarget).hide();

                        // Update aria-expanded and aria-hidden attributes
                        if ($(this).attr('aria-controls')) {
                            $(this).attr('aria-expanded', 'false');
                        }
                        $('#'+groupDataTarget).attr('aria-hidden', 'true');

                    });

                });
            }

        });

    };


    // Show dialog

    function showDialog() {


        if ($('.dialog').length > 0) {


            // Open dialog

            $('a[data-toggle=dialog]').on('click', function (e) {

                e.preventDefault();
                e.stopPropagation();

                var data = '#' + $(this).attr('data-target');

                openDialog(data); // Pass data value into function

            });


            // Open dialog

            function openDialog(data) {
                var dialog = $(data);
                dialog.attr('aria-hidden', 'false')
                    .find('.dialog-content').focus()
                    .attr('tabindex', '-1');

                dialog.trap();
            }


            // Close dialog only if visible

            function closeDialog() {
                var dialog = $('.dialog[aria-hidden=false]')


                dialog.attr('aria-hidden', 'true')
                    .find('.dialog-content').blur()
                    .attr('tabindex', '0');


                dialog.untrap();
            }


            // Stop bubbling

            $('.dialog-holder').on('click', function (e) {

                e.stopPropagation();

            });


            $('.dialog-close').on('click', function (e) {

                e.preventDefault();
                e.stopPropagation();

                closeDialog();

            });


            $('.dialog-cancel').on('click', function (e) {

                e.preventDefault();
                e.stopPropagation();

                closeDialog();

            });


            // Document binding events

            $(document).bind({

                click: function (e) {

                    closeDialog();

                },

                keyup: function (e) {

                    if (e.keyCode == 27) {

                        closeDialog();

                    }

                }

            });


        }


    };


    // Toggle tabs

    function toggleTabs() {

      if ($('.tabs').length>0) {

          $('.tabs').tabs();

      }

    };


    // Multiple checkboxes

    function formMultipleCheckboxes() {

      if ($('.form-checkboxes').length > 0) {

        $('.form-checkboxes > li').on('click', function(event) {

          var target   = $(event.target);
          var checkbox = $(this).find("input[type='checkbox']");

          if (target.is("input[type='checkbox']")) {

            if ($(this).hasClass('selected')) {
              $(this).removeClass('selected');
              $(this).removeClass('focused');
            } else {
              $(this).addClass('selected');
              $(this).addClass('focused');
            }

            return;

          }

          event.preventDefault();

          if (!checkbox.prop('checked')) {

            $(this).addClass('selected');
            $(this).addClass('focused');

            checkbox.prop('checked', true);

          } else {

            $(this).removeClass('selected');
            $(this).removeClass('focused');

            checkbox.prop('checked', false);

          }

        });

      }

    };


    // Form validation

    function formValidation() {

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

    }


    // Collapsibles

    function collapsibles() {


      $('.collapsible .collapsible-item').each(function() {


        // Variables
        var $this    = $(this),
            $header  = $(this).find('.collapsible-heading h3'),
            $content = $(this).find('.collapsible-content');


        // Create a unique ID
        var $id = 'collapsible-' + $(this).index();


        // Add button inside $header
        $header.wrapInner('<button aria-expanded="false" aria-controls="' + $id + '">');
        var $button = $header.children('button');


        // Add attributes to collapsible content
        $content.attr({
          'id' : $id,
          'aria-hidden' : true
        });


        // Toggle state
        $button.on('click', function(e) {

          e.preventDefault();

          var state = $(this).attr('aria-expanded') === 'false' ? true : false;

          $button.attr('aria-expanded', state);
          $content.attr('aria-hidden', !state);

        });


      });


    };


    // Toggle

    function toggleContent() {


      $('.toggle').each(function(index) {


        // Variables
        var $link    = $(this).find('.toggle-link'),
            $content = $(this).find('.toggle-content'),
            $id      = 'toggle-' + (index ++);


        // Add attributes to toggler link
        $link.attr('aria-controls', $id).attr({
          'aria-expanded' : false
        });


        // Add attributes to toggle content
        $content.attr({
          'id' : $id,
          'aria-hidden' : true
        });


        // Toggle state
        $link.on('click', function(e) {

          e.preventDefault();

          var state = $(this).attr('aria-expanded') === 'false' ? true : false;

          $link.attr('aria-expanded', state);
          $content.attr('aria-hidden', !state);

        });


      });


    };


    // Document ready

    $(document).ready(function() {

        // Turn off jQuery animation
        jQuery.fx.off = true;

        // Use GOV.UK selection-buttons.js to set selected
        // and focused states for block labels
        var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']");

        GOVUK.selectionButtons($blockLabels);

        // Details/summary polyfill
        // See /javascripts/vendor/details.polyfill.js

        // Where .block-label uses the data-target attribute
        // to toggle hidden content

        showHideCheckboxToggledContent();
        showHideRadioToggledContent();

    });


    toggleTabs();
    formValidation();
    formMultipleCheckboxes();
    showDialog();
    collapsibles();
    toggleContent();


})();