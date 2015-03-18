// ==========================================================================
// GDS Functions
// ==========================================================================


// Show/Hide content

function ShowHideContent() {
  var self = this;
  self.showHideRadioToggledContent = function () {
    $(".block-label input[type='radio']").each(function () {

      var $radio = $(this);
      var $radioGroupName = $radio.attr('name');
      var $radioLabel = $radio.parent('label');

      var dataTarget = $radioLabel.attr('data-target');

      // Add ARIA attributes

      // If the data-target attribute is defined
      if (dataTarget) {

        // Set aria-controls
        $radio.attr('aria-controls', dataTarget);

        $radio.on('click', function () {

          // Select radio buttons in the same group
          $radio.closest('form').find(".block-label input[name=" + $radioGroupName + "]").each(function () {
            var $this = $(this);

            var groupDataTarget = $this.parent('label').attr('data-target');
            var $groupDataTarget = $('#' + groupDataTarget);

            // Hide toggled content
            $groupDataTarget.hide();
            // Set aria-expanded and aria-hidden for hidden content
            $this.attr('aria-expanded', 'false');
            $groupDataTarget.attr('aria-hidden', 'true');
          });

          var $dataTarget = $('#' + dataTarget);
          $dataTarget.show();
          // Set aria-expanded and aria-hidden for clicked radio
          $radio.attr('aria-expanded', 'true');
          $dataTarget.attr('aria-hidden', 'false');

        });

      } else {
        // If the data-target attribute is undefined for a radio button,
        // hide visible data-target content for radio buttons in the same group

        $radio.on('click', function () {

          // Select radio buttons in the same group
          $(".block-label input[name=" + $radioGroupName + "]").each(function () {

            var groupDataTarget = $(this).parent('label').attr('data-target');
            var $groupDataTarget = $('#' + groupDataTarget);

            // Hide toggled content
            $groupDataTarget.hide();
            // Set aria-expanded and aria-hidden for hidden content
            $(this).attr('aria-expanded', 'false');
            $groupDataTarget.attr('aria-hidden', 'true');
          });

        });
      }

    });
  }
  self.showHideCheckboxToggledContent = function () {

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
  }
}

$(document).ready(function() {

  // Turn off jQuery animation
  jQuery.fx.off = true;

  // Use GOV.UK selection-buttons.js to set selected
  // and focused states for block labels
  var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']");
  new GOVUK.SelectionButtons($blockLabels);

  // Details/summary polyfill
  // See /javascripts/vendor/details.polyfill.js

  // Where .block-label uses the data-target attribute
  // to toggle hidden content
  var toggleContent = new ShowHideContent();
  toggleContent.showHideRadioToggledContent();
  toggleContent.showHideCheckboxToggledContent();

});



// ==========================================================================
// Rural Payments Functions
// ==========================================================================


// Show Dialog

function showDialog() {

  var dialogData = {
    lastFocus : null
  }


    if ($('.dialog').length > 0) {


        // Open dialog

        $('a[data-toggle=dialog]').on('click', function (e) {

            e.preventDefault();
            e.stopPropagation();

            var anchor = $(this)

            var data = '#' + anchor.attr('data-target');

            openDialog(data, anchor); // Pass data value into function

        });


        // Open dialog

        function openDialog(data, anchor) {
            dialogData.lastFocus = anchor;

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

            dialogData.lastFocus.focus();
            dialogData.lastFocus.blur();
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

    $('.tabs:not(pre .tabs)').tabs();

  }

};


// Table sortable

function tableSortable() {

  if ($('.js-table-sortable').length>0) {

    $('.js-table-sortable').stupidtable();

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

};


// Collapsibles

function collapsibles() {


  $('.collapsible .collapsible-item').each(function() {


      var code = $(this).closest('.language-markup');


      // Do not run funtion if inside language markup (Not to be used in production)
      if (!code.hasClass('language-markup')) {


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
          'aria-hidden' : true,
          'style' : 'display: none;'
        });


        // Toggle state
        $button.on('click', function(e) {

          e.preventDefault();

          var state = $(this).attr('aria-expanded') === 'false' ? true : false;

          $button.attr('aria-expanded', state);
          $content.attr('aria-hidden', !state).toggle();

        });


      }


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
      'aria-hidden' : true,
      'style' : 'display: none;'
    });


    // Toggle state
    $link.on('click', function(e) {

      e.preventDefault();

      var state = $(this).attr('aria-expanded') === 'false' ? true : false;

      $link.attr('aria-expanded', state);
      $content.attr('aria-hidden', !state).toggle();

    });


  });


};


// Inline edititing

function inlineEdit() {


  if ($('.js-inline-edit').length>0) {


    // Toggle details

    $('.toggle-details').on('click', function(e) {


      e.preventDefault();


      var parent = $(this).closest('tbody');


      if ((parent).hasClass('open')) {

        $(this).text('Show');
        parent.removeAttr('class', 'open');

      } else {

        $(this).text('Hide');
        parent.addClass('open');

      }

    });


    // Inline editing

    $('.inline-edit').on('click', function(e) {


      e.preventDefault();


      var parent = $(this).closest('tr');
      var value = parent.find('.inline-value');
      var input = parent.find('.inline-input');

      if ((input).hasClass('js-hidden')) {

        $(this).text('Save');
        input.removeClass('js-hidden');
        value.addClass('js-hidden');

      } else {

        $(this).text('Edit');
        value.removeClass('js-hidden');
        input.addClass('js-hidden');

      }

    });


  }


}




// Document ready

(function() {

  // Call Rural Payments Functions
  toggleTabs();
  formValidation();
  formMultipleCheckboxes();
  showDialog();
  collapsibles();
  toggleContent();
  tableSortable();
  inlineEdit();

})();

