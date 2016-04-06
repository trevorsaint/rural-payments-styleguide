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


  if ($('.dialog').length > 0) {
    
    
    var dialogData = {
      lastFocus: null
    };


    $('a[data-toggle=dialog]').on('click', function (e) {

      e.preventDefault();
      e.stopPropagation();

      var anchor = $(this);
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
      
      
      var dialog = $('.dialog[aria-hidden=false]');


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


}


// Toggle tabs

function toggleTabs() {

  if ($('.tabs').length > 0) {
    
    $('.tabs').tabs();    

  }  

}


// Table sortable

function tableSortable() {


  if ($('.js-table-sortable').length > 0) {
    
    
    var min = 4;
    
    
    $('.js-table-sortable').each(function() {
      
      $this = $(this);
      
      var rows = $this.find('tbody tr').length;
      
      if (rows >= min) {
        $this.find('thead [data-sort]').addClass('sortable'); // add classes for link styling purposes
        $this.stupidtable(); // initiate plugin
      }
      
    });
    
    
  }
  

}


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

}


// Form validation

function formValidation() {


  if ($('.error-summary').length > 0) {
    
    // Set focus on summary if it exists
    
    $('.error-summary').not('.example .error-summary').focus();
    
  }


  $('.error-summary-list a[href^="#"]').on('click', function(e) {

    e.preventDefault();

    // Declare variables
    
    var link = $(this),
        id   = link.attr('href');

    // Get focus
    
    $(id).closest('.form-group').find('input:visible:first').focus();

    // Move to error
    
    $('html, body').animate({

      scrollTop: ($(id).offset().top)

    }, 500);

  });
  

}


// Help

function help() {
    
    
  if ($('.help').length > 0) {
  

    var $doc       = $(document);
    var $window    = $(window);
    var $container = $('body');
    
    var helpActive  = false;
    var $help       = $('.help');
    var $helpOpen   = $('.help-open');
    var $helpClose  = $('.help-close');
    
    var $helpMove   = $('.help-move');
    var $helpResize = $('.help-resize');
    var $helpTitle  = $('.help-title');
    
    var isResizing = false;
    var lastDownX  = 0;
    
    var min = 270;
    var max = 480;
    
    
    // Open help
    
    $helpOpen.on('click', function(e) {
      
      e.preventDefault();
      
      if (helpActive === false) {
        
        $help.attr('aria-hidden', false);
      
        helpActive = true;      
        
      } else {
        
        $help.attr('aria-hidden', true);
      
        helpActive = false;
        
      }
    
    });
    
    
    // Close help
    
    $helpClose.on('click', function(e) {
      
      e.preventDefault();
      
      $help.attr('aria-hidden', true);
      
      helpActive = false;        
      
    });
    
    
    // Resize
    
    $helpResize.on('mousedown', function(e) {
      isResizing = true;
      $container.addClass('js-resizing'); // Prevent user selection
      
      // Add a tarpaulin
      
      $('body').append('<div class="iframe-tarpaulin"></div>');
      
    });

    
    $doc.on('mousemove', function (e) {
    
      if (!isResizing) return;
      
        if ($help.hasClass('help-left')) {
          
          var x = e.pageX - $help.offset().left;
          
        } else {
          
          var x = $help.width() - (e.pageX - $help.offset().left);
          
        }
        
        $help.css('width', x);
        
      
      }).on('mouseup', function(e) {
        
        isResizing = false;
        $container.removeClass('js-resizing'); // Allow user selection
        
        // Remove tarpaulin
        
        $('.iframe-tarpaulin').remove();
        
    });
    
    
    // Move help
    
    $helpMove.on('click', function(e) {
      
      e.preventDefault();

      if (($help).hasClass('help-left')) {
        
        $help.removeClass('help-left');
        
        $(this).find('span').text('Move help to the left of the screen');
        $(this).attr('title', 'Move help to the left of the screen');

      } else {
        
        $help.addClass('help-left');
        
        $(this).find('span').text('Move help to the right of the screen');
        $(this).attr('title', 'Move help to the right of the screen');
        
      }
      
    });
    
    
    // Close on esc
    
    $doc.on('keyup', function(e) {
        
      if (e.keyCode === 27 && helpActive === true) {
        
        $help.attr('aria-hidden', true);
      
        helpActive = false; 
        
      }
      
    });
    
  
  }
  
  
}


// Collapsibles

function collapsibles() {


  $('.collapsible-item').each(function() {


    // Variables
    var $this    = $(this),
        $header  = $(this).find('.collapsible-heading > *'),
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
    
    
    // Initialise    
    if (($this).hasClass('is-open')) {
      
      $button.attr('aria-expanded', true);
      $content.attr('aria-hidden', false).toggle();
      
    }


    // Toggle state
    $button.on('click', function(e) {

      e.preventDefault();

      var state = $(this).attr('aria-expanded') === 'false' ? true : false;

      $button.attr('aria-expanded', state);
      $content.attr('aria-hidden', !state).toggle();

    });


  });


}


// Collapse

function collapse() {


  $('.collapse-item').each(function() {


    // Variables
    var $this    = $(this),
        $header  = $(this).find('.collapse-title'),
        $content = $(this).find('.collapse-content');


    // Create a unique ID
    var $id = 'collapse-' + $(this).index();


    // Add button inside $header
    $header.wrapInner('<button aria-expanded="false" aria-controls="' + $id + '">');
    var $button = $header.children('button');


    // Add attributes to collapsible content
    $content.attr({
      'id' : $id,
      'aria-hidden' : true,
      'style' : 'display: none;'
    });
    
    
    // Initialise    
    if (($this).hasClass('is-open')) {
      
      $button.attr('aria-expanded', true);
      $content.attr('aria-hidden', false).toggle();
      
    }


    // Toggle state
    $button.on('click', function(e) {

      e.preventDefault();

      var state = $(this).attr('aria-expanded') === 'false' ? true : false;

      $button.attr('aria-expanded', state);
      $content.attr('aria-hidden', !state).toggle();

    });


  });


}


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


}


// Sole trader details

function soleTraderDetails() {
  
  
  if ($('#form-sole-trader-details').length > 0) {
    
  
    // Declare variables
    
    var businessOwner = $('#business-owner'),
        firstName     = $('#first-name'),
        lastName      = $('#last-name'),
        email         = $('#email');
  
  
    // Detect changes on interaction
  
    businessOwner.change(function() {

      var checkButtonHasValue = false;

      if(this.checked) {

        checkButtonHasValue = true;
        
        firstName.val('Sydney').attr('disabled', 'disabled');
        lastName.val('Bechett').attr('disabled', 'disabled');
        email.val('defra-user-1@kainos.com').attr('disabled', 'disabled');

        return false;

      } else {
        
        $('#form-sole-trader-details').find('input').val('').removeAttr('disabled'); // Clear form values and remvoe disabled attributes
        
      }
        
    });
  

  }

  
}


// Business ownership

function businessOwnership() {
    
  
  if ($('#form-business-ownership').length > 0) {
    
    var form = $('#form-business-ownership');    
    
    enableButtonOnSelection(form);    

    // Submit the form

    $('button[type=submit]').on('click', function(e) {


      e.preventDefault();


      if ($('#radio-inline-1').is(':checked')) {

          window.location.href = "/accountable-people/business-ownership/sole-trader/";

        } else {

         window.location.href = "/accountable-people/business-ownership/accountable-person/";

      }


    });    

  }
  
  
}


// Enable a disabled button if a selection is made

function enableButtonOnSelection(form) {
  
  
  var button = form.find('.button');
  var radio  = form.find('input:radio');
  
  
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
    
    
  });
  
  
}


// Declaration of accountable people

function declarationAccountable() {
  
  if ($('#form-declaration-accountable-people').length > 0) {    
    
    var form = $('#form-declaration-accountable-people');
    
    enableButtonOnSelection(form);
    
    $('button[type=submit]').on('click', function(e) {

      e.preventDefault();

      window.location.href = "/accountable-people/business-ownership/accountable-person/business/";

    });
  
  }
  
}


// Confirm sole trader details

function confirmSoleTraderDetails() {
  
  
  if ($('#form-confirm-sole-trader-details').length > 0) {    
    
    var form = $('#form-confirm-sole-trader-details');
    
    enableButtonOnSelection(form);    
    
  }

  
}


// Set permissions

function setPermissions() {
  
  
  if ($('#form-set-permissions').length > 0) {    
    
    var form = $('#form-set-permissions');
    
    enableButtonOnSelection(form);    
    
  }

  
}


// Land query

function landQuery() {
  
  
  if ($('#form-land-query').length > 0) {    
    
    var form = $('#form-land-query');    
    
    enableButtonOnSelection(form);
    
    // Submit the form

    $('button[type=submit]').on('click', function(e) {


      e.preventDefault();


      if ($('#radio-1').is(':checked')) {

          window.location.href = "query-sbi";

        } else {

         window.location.href = "query";

      }


    });
    
  }
  
  
}


// Inline edit

function inlineEdit() {


  if ($('.js-inline-edit').length > 0) {


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


// Clickable table rows

function clickableTableRows() {
  
  
  if ($('.js-table-rows-clickable').length > 0) {
    
    
    var tableRow = $('.js-table-rows-clickable tbody tr'); 

    
    $(tableRow).on('click', function() {
      
      
      if ( $(this).data('link')) {
        
        window.document.location = $(this).data('link'); // Go to link
        
      }
      
      
    });
    
    
  }
  
  
}


// Iframe resize

function iframe() {
  
  
  if ($('iframe').length > 0) {
  
  
    $('iframe').load(function() {
      
      
      this.style.height = this.contentWindow.document.body.offsetHeight + 'px';
      
      
    });
  
  
  }
  
  
}


// Autocomplete

function autocomplete() {
  
  
  if ($('.js-tt').length > 0) {
  
    
      var substringMatcher = function(strs) {
        
        return function findMatches(q, cb) {
          
          var matches, substringRegex;
      
          // An array that will be populated with substring matches
          
          matches = [];
      
          // Regex used to determine if a string contains the substring `q`
          
          substrRegex = new RegExp(q, 'i');
      
          // Iterate through the pool of strings and for any string that contains the substring `q`, add it to the `matches` array
          
          $.each(strs, function(i, str) {
            if (substrRegex.test(str)) {
              matches.push(str);
            }
          });
      
          cb(matches);
          
        };
        
      };
      
      var towns = ['Abingdon', 'Accrington', 'Acton', 'Adlington', 'Alcester', 'Aldeburgh', 'Aldershot', 'Aldridge', 'Alford', 'Alfreton', 'Alnwick', 'Alsager', 'Alston', 'Alton', 'Altrincham', 'Amble', 'Amersham', 'Amesbury', 'Ampthill', 'Andover', 'Appleby-in-Westmorland', 'Arundel', 'Ashbourne', 'Ashburton', 'Ashby-de-la-Zouch', 'Ashford', 'Ashington', 'Ashton-in-Makerfield', 'Ashton-under-Lyne', 'Askern', 'Aspatria', 'Atherstone', 'Attleborough', 'Axbridge', 'Axminster', 'Aylesbury', 'Aylsham', 'Bacup', 'Bakewell', 'Baldock', 'Banbury', 'Barking', 'Barnard Castle', 'Barnet', 'Barnoldswick', 'Barnsley', 'Barnstaple', 'Barnt Green', 'Barrow-in-Furness', 'Barton-upon-Humber', 'Basildon', 'Basingstoke', 'Bath', 'Batley', 'Battle', 'Bawtry', 'Beaconsfield', 'Beaminster', 'Bebington', 'Beccles', 'Bedale', 'Bedford', 'Bedlington', 'Bedworth', 'Beeston', 'Belper', 'Bentham', 'Berkhamsted', 'Berwick-upon-Tweed', 'Beverley', 'Bewdley', 'Bexhill-on-Sea', 'Bicester', 'Biddulph', 'Bideford', 'Biggleswade', 'Billericay', 'Bilston', 'Bingham', 'Birmingham', 'Bishop Auckland', 'Bishop\' Castle', 'Bishop\' Stortford', 'Bishop\' Waltham', 'Blackburn', 'Blackpool', 'Blandford Forum', 'Bletchley', 'Blyth', 'Bodmin', 'Bognor Regis', 'Bollington', 'Bolsover', 'Bolton', 'Borehamwood', 'Boston', 'Bottesford', 'Bourne', 'Bournemouth', 'Brackley', 'Bracknell', 'Bradford', 'Bradford-on-Avon', 'Bradley Stoke', 'Bradninch', 'Braintree', 'Brentford', 'Brentwood', 'Bridgnorth', 'Bridgwater', 'Bridlington', 'Bridport', 'Brierley Hill', 'Brigg', 'Brighouse', 'Brightlingsea', 'Brighton', 'Bristol', 'Brixham', 'Broadstairs', 'Bromley', 'Bromsgrove', 'Bromyard', 'Brownhills', 'Buckfastleigh', 'Buckingham', 'Bude', 'Budleigh Salterton', 'Bungay', 'Buntingford', 'Burford', 'Burgess Hill', 'Burnham-on-Crouch', 'Burnham-on-Sea', 'Burnley', 'Burntwood', 'Burton Latimer', 'Burton-upon-Trent', 'Bury', 'Bury St Edmunds', 'Buxton', 'Caistor', 'Calne', 'Camberley', 'Camborne', 'Cambridge', 'Camelford', 'Cannock', 'Canterbury', 'Carlisle', 'Carnforth', 'Carterton', 'Castle Cary', 'Castleford', 'Chadderton', 'Chagford', 'Chard', 'Charlbury', 'Chatham', 'Chatteris', 'Chelmsford', 'Cheltenham', 'Chesham', 'Cheshunt', 'Chester', 'Chesterfield', 'Chester-le-Street', 'Chichester', 'Chippenham', 'Chipping Campden', 'Chipping Norton', 'Chipping Ongar', 'Chipping Sodbury', 'Chorley', 'Christchurch', 'Church Stretton', 'Cinderford', 'Cirencester', 'Clacton-on-Sea', 'Cleckheaton', 'Cleethorpes', 'Clevedon', 'Clitheroe', 'Clun', 'Coalville', 'Cockermouth', 'Coggeshall', 'Colchester', 'Coleford', 'Colne', 'Congleton', 'Conisbrough', 'Corbridge', 'Corby', 'Cotgrave', 'Coventry', 'Cowes', 'Cramlington', 'Crawley', 'Crayford', 'Crediton', 'Crewe', 'Crewkerne', 'Cromer', 'Crowborough', 'Crowle', 'Crowthorne', 'Croydon', 'Cuckfield', 'Cullompton', 'Dagenham', 'Darley Dale', 'Darlington', 'Dartford', 'Dartmouth', 'Darwen', 'Daventry', 'Dawlish', 'Deal', 'Denton', 'Derby', 'Dereham', 'Desborough', 'Devizes', 'Dewsbury', 'Didcot', 'Dinnington', 'Diss', 'Doncaster', 'Dorchester', 'Dorking', 'Dover', 'Downham Market', 'Driffield', 'Dronfield', 'Droitwich Spa', 'Droylsden', 'Dudley', 'Dukinfield', 'Dunstable', 'Durham', 'Dursley', 'Ealing', 'Earley', 'Easingwold', 'Eastbourne', 'East Grinstead', 'East Ham', 'Eastleigh', 'Eastwood', 'Edenbridge', 'Egham', 'Ellesmere', 'Ellesmere Port', 'Ely', 'Enfield', 'Epping', 'Epsom', 'Epworth', 'Erith', 'Esher', 'Eton', 'Evesham', 'Exeter', 'Exmouth', 'Eye', 'Failsworth', 'Fairford', 'Fakenham', 'Falmouth', 'Fareham', 'Faringdon', 'Farnborough', 'Farnham', 'Farnworth', 'Faversham', 'Featherstone', 'Felixstowe', 'Fenny Stratford', 'Ferndown', 'Ferryhill', 'Filey', 'Filton', 'Fleet', 'Fleetwood', 'Flitwick', 'Folkestone', 'Fordingbridge', 'Fordwich', 'Fowey', 'Framlingham', 'Frinton-on-Sea', 'Frodsham', 'Frome', 'Gainsborough', 'Gateshead', 'Gillingham', 'Gillingham', 'Glastonbury', 'Glossop', 'Gloucester', 'Godalming', 'Godmanchester', 'Goole', 'Gosport', 'Grange-over-Sands', 'Grantham', 'Gravesend', 'Grays', 'Great Dunmow', 'Great Torrington', 'Great Yarmouth', 'Grimsby', 'Guildford', 'Guisborough', 'Hackney', 'Hadleigh', 'Hailsham', 'Halesworth', 'Halewood', 'Halifax', 'Halstead', 'Haltwhistle', 'Harlow', 'Harpenden', 'Harrogate', 'Harrow', 'Hartlepool', 'Harwich', 'Haslemere', 'Hastings', 'Hatfield', 'Havant', 'Haverhill', 'Hawley', 'Hayle', 'Haywards Heath', 'Heanor', 'Heathfield', 'Hebden Bridge', 'Hedon', 'Helston', 'Hemel Hempstead', 'Hemsworth', 'Henley-in-Arden', 'Henley-on-Thames', 'Hendon', 'Hereford', 'Herne Bay', 'Hertford', 'Hessle', 'Heswall', 'Hetton-le-Hole', 'Heywood', 'Hexham', 'Higham Ferrers', 'Highworth', 'High Wycombe', 'Hinckley', 'Hitchin', 'Hoddesdon', 'Holmfirth', 'Holsworthy', 'Honiton', 'Horley', 'Horncastle', 'Hornsea', 'Horsham', 'Horwich', 'Houghton-le-Spring', 'Hounslow', 'Hoylake', 'Hove Hucknall', 'Huddersfield', 'Hugh Town', 'Hungerford', 'Hunstanton', 'Huntingdon', 'Hyde', 'Hythe', 'Ilchester', 'Ilford', 'Ilfracombe', 'Ilkeston', 'Ilkley', 'Ilminster', 'Ipswich', 'Irthlingborough', 'Ivybridge', 'Jarrow', 'Keighley', 'Kempston', 'Kendal', 'Kenilworth', 'Kesgrave', 'Keswick', 'Kettering', 'Keynsham', 'Kidderminster', 'Kidsgrove', 'Killingworth', 'Kimberley', 'Kingsbridge', 'King\' Lynn', 'Kingston-upon-Hull', 'Kingston upon Thames', 'Kington', 'Kirkby', 'Kirkby Lonsdale', 'Kirkham', 'Knaresborough', 'Knottingley', 'Knutsford', 'Lancaster', 'Launceston', 'Leatherhead', 'Leamington Spa', 'Lechlade', 'Ledbury', 'Leeds', 'Leek', 'Leicester', 'Leighton Buzzard', 'Leiston', 'Leominster', 'Letchworth', 'Lewes', 'Lewisham', 'Leyland', 'Leyton', 'Lichfield', 'Lincoln', 'Liskeard', 'Littlehampton', 'Liverpool', 'Lizard', 'London', 'Long Eaton', 'Longridge', 'Looe', 'Lostwithiel', 'Loughborough', 'Loughton', 'Louth', 'Lowestoft', 'Ludlow', 'Luton', 'Lutterworth', 'Lydd', 'Lydney', 'Lyme Regis', 'Lymington', 'Lynton', 'Lytchett Minster', 'Lytham St Annes', 'Mablethorpe', 'Macclesfield', 'Maghull', 'Maidenhead', 'Maidstone', 'Maldon', 'Malmesbury', 'Maltby', 'Malton', 'Malvern', 'Manchester', 'Manningtree', 'Mansfield', 'March', 'Margate', 'Market Deeping', 'Market Drayton', 'Market Harborough', 'Market Rasen', 'Market Weighton', 'Marlborough', 'Marlow', 'Maryport', 'Matlock', 'Melksham', 'Melton Mowbray', 'Mexborough', 'Middleham', 'Middlesbrough', 'Middleton', 'Middlewich', 'Midhurst', 'Midsomer Norton', 'Milton Keynes', 'Minehead', 'Morecambe', 'Moretonhampstead', 'Moreton-in-Marsh', 'Morley', 'Morpeth', 'Much Wenlock', 'Nailsea', 'Nailsworth', 'Nantwich', 'Needham Market', 'Neston', 'Newark-on-Trent', 'Newbiggin-by-the-Sea', 'Newbury', 'Newcastle-under-Lyme', 'Newcastle upon Tyne', 'Newent', 'Newhaven', 'Newmarket', 'New Mills', 'New Milton', 'Newport', 'Newport', 'Shropshire', 'Newport Pagnell', 'Newquay', 'New Romney', 'Newton Abbot', 'Newton Aycliffe', 'Newton-le-Willows', 'Normanton', 'Northallerton', 'Northam', 'Northampton', 'North Walsham', 'Northwich', 'Norton Radstock', 'Norwich', 'Nottingham', 'Nuneaton', 'Oakham', 'Okehampton', 'Oldbury', 'Oldham', 'Ollerton', 'Olney', 'Ormskirk', 'Orpington', 'Ossett', 'Oswestry', 'Otley', 'Ottery St Mary', 'Oundle', 'Oxford', 'Paddock Wood', 'Padstow', 'Paignton', 'Painswick', 'Peacehaven', 'Penistone', 'Penrith', 'Penryn', 'Penzance', 'Pershore', 'Peterborough', 'Peterlee', 'Petersfield', 'Petworth', 'Pickering', 'Plymouth', 'Pocklington', 'Pontefract', 'Polegate', 'Poltimore', 'Poole', 'Portishead', 'Portland', 'Portslade', 'Portsmouth', 'Potters Bar', 'Potton', 'Poulton-le-Fylde', 'Prescot', 'Preston', 'Princes Risborough', 'Prudhoe', 'Pudsey', 'Queenborough', 'Ramsgate', 'Raunds', 'Rayleigh', 'Reading', 'Redcar', 'Redditch', 'Redhill', 'Redruth', 'Reigate', 'Retford', 'Richmond', 'Richmond-upon-Thames', 'Rickmansworth', 'Ringwood', 'Ripley', 'Ripon', 'Rochdale', 'Rochester', 'Rochford', 'Romford', 'Romsey', 'Ross-on-Wye', 'Rothbury', 'Rotherham', 'Rothwell', 'Rowley Regis', 'Royston', 'Rugby', 'Rugeley', 'Runcorn', 'Rushden', 'Ryde', 'Rye', 'Saffron Walden', 'St Albans', 'St Austell', 'St Blazey', 'St Columb Major', 'St Helens', 'St Ives', 'Cambridgeshire', 'St Ives', 'Cornwall', 'St Neots', 'Salcombe', 'Sale', 'Salford', 'Salisbury', 'Saltash', 'Saltburn-by-the-Sea', 'Sandbach', 'Sandhurst', 'Sandown', 'Sandwich', 'Sandy', 'Sawbridgeworth', 'Saxmundham', 'Scarborough', 'Scunthorpe', 'Seaford', 'Seaton', 'Sedgefield', 'Selby', 'Selsey', 'Settle', 'Sevenoaks', 'Shaftesbury', 'Shanklin', 'Sheerness', 'Sheffield', 'Shepshed', 'Shepton Mallet', 'Sherborne', 'Sheringham', 'Shildon', 'Shipston-on-Stour', 'Shoreham-by-Sea', 'Shrewsbury', 'Sidmouth', 'Sittingbourne', 'Skegness', 'Skelmersdale', 'Skipton', 'Sleaford', 'Slough', 'Smethwick', 'Snodland', 'Soham', 'Solihull', 'Somerton', 'Southall', 'Southam', 'Southampton', 'Southborough', 'Southend-on-Sea', 'South Molton', 'Southport', 'Southsea', 'South Shields', 'Southwell', 'Southwold', 'South Woodham Ferrers', 'Spalding', 'Spennymoor', 'Spilsby', 'Stafford', 'Staines', 'Stainforth', 'Stalybridge', 'Stamford', 'Stanley', 'Stapleford', 'Staunton', 'Staveley', 'Stevenage', 'Stockport', 'Stocksbridge', 'Stockton-on-Tees', 'Stoke-on-Trent', 'Stone', 'Stony Stratford', 'Stotfield', 'Stourbridge', 'Stourport-on-Severn', 'Stowmarket', 'Stow-on-the-Wold', 'Stratford-upon-Avon', 'Streatham', 'Strood', 'Stroud', 'Sudbury', 'Sunderland', 'Sutton', 'Sutton Coldfield', 'Sutton-in-Ashfield', 'Swadlincote', 'Swaffham', 'Swanage', 'Swanley', 'Swindon', 'Swinton', 'Tadcaster', 'Tadley', 'Tamworth', 'Taunton', 'Tavistock', 'Teignmouth', 'Telford', 'Tenbury Wells', 'Tenterden', 'Tetbury', 'Tewkesbury', 'Thame', 'Thatcham', 'Thaxted', 'Thetford', 'Thirsk', 'Thong', 'Thornaby', 'Thornbury', 'Thorne', 'Tickhill', 'Tilbury', 'Tipton', 'Tiverton', 'Todmorden', 'Tonbridge', 'Torpoint', 'Torquay', 'Totnes', 'Tottenham', 'Totton', 'Towcester', 'Tring', 'Trowbridge', 'Truro', 'Tunbridge Wells', 'Twickenham', 'Uckfield', 'Ulverston', 'Uppingham', 'Upton-upon-Severn', 'Uttoxeter', 'Uxbridge', 'Ventnor', 'Verwood', 'Wadebridge', 'Wadhurst', 'Wakefield', 'Wallasey', 'Wallingford', 'Walmer', 'Walsall', 'Waltham Abbey', 'Waltham Cross', 'Walthamstow', 'Walton-on-Thames', 'Walton-on-the-Naze', 'Wandsworth', 'Wantage', 'Ware', 'Wareham', 'Warminster', 'Warrington', 'Warwick', 'Washington', 'Watchet', 'Watford', 'Wath-upon-Dearne', 'Watton', 'Wednesbury', 'Wellingborough', 'Wellington', 'Wells', 'Wells-next-the-Sea', 'Welwyn Garden City', 'Wem', 'Wendover', 'West Bromwich', 'Westbury', 'Westerham', 'West Ham', 'Westhoughton', 'West Kirby', 'West Mersea', 'Westminster', 'Weston-super-Mare', 'Westward Ho!', 'Wetherby', 'Weybridge', 'Weymouth', 'Whaley Bridge', 'Whiston', 'Whitby', 'Whitchurch', 'Whitehaven', 'Whitley Bay', 'Whitnash', 'Whitstable', 'Whitworth', 'Wickford', 'Widnes', 'Wigan', 'Wigston', 'Willenhall', 'Wimbledon', 'Wimborne Minster', 'Wincanton', 'Winchcombe', 'Winchelsea', 'Winchester', 'Windermere', 'Winsford', 'Winslow', 'Wisbech', 'Witham', 'Withernsea', 'Witney', 'Wivenhoe', 'Woburn', 'Woking', 'Wokingham', 'Wolverhampton', 'Wombwell', 'Woodbridge', 'Woodstock', 'Wooler', 'Woolwich', 'Wootton Bassett', 'Worcester', 'Workington', 'Worksop', 'Worthing', 'Wotton-under-Edge', 'Wycombe', 'Wymondham'];
      
      
      $('.js-tt').typeahead({
        
        // Modify class names for styling
        
        classNames: {
          
          input:      '',
          menu:       'js-tt-menu',
          dataset:    'js-tt-dataset',
          open:       'js-tt-open',
          suggestion: 'js-tt-suggestion',
          selectable: 'js-tt-selectable',
          highlight:  'js-tt-highlight',
          empty:      'js-tt-empty',
          cursor:     'js-tt-cursor'
          
        },
        
          hint: true,
          highlight: true,
          minLength: 1
          
        }, 
        
        {
          
          name: 'states',
          source: substringMatcher(towns)
        
        }
      
      );


  }

  
}


// Sticky

function sticky() {
  
  
  if ($('.sticky').length > 0) {
  
  
    $('.sticky').Stickyfill();
  
  
  }
  
  
}


// Document ready

(function() {
  formValidation();
  formMultipleCheckboxes();
  showDialog();
  collapsibles();
  collapse();
  toggleContent();
  tableSortable();
  landQuery();
  inlineEdit();
  businessOwnership();
  declarationAccountable();
  confirmSoleTraderDetails();
  setPermissions();
  clickableTableRows();
  help();
  iframe();
  autocomplete();
  sticky();
})();

