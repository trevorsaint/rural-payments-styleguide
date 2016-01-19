module.exports = {


  bind: function(app) {
    
    
    // LOCALS
    // ==============================================
    
    app.locals = {      
      title: 'RPA Styleguide',
      baseurl: '/'
    }


    // MODELS
    // ==============================================
    
    var peopleEngine   = require('../models/people');
    var businessEngine = require('../models/businesses');


    // INDEX
    // ==============================================

    app.get('/', function(req, res) {

      data = {
        doctitle: 'RPA Styleguide', 
        isIndex: true,
        phase: true
      };
      
      res.render('home', data);

    });


    // ELEMENTS
    // ==============================================

    app.get('/layout', function(req, res) {
      data = {
        doctitle: 'Layout',
        page_name: 'Layout',
        prettifyScript: true,
        phase: true
      };
      res.render('elements/layout/home', data);
    });    
    
    app.get('/collapsibles', function(req, res) {
      data = {
        doctitle: 'Collapsibles',
        page_name: 'Collapsibles',
        prettifyScript: true,
        phase: true
      };
      res.render('elements/collapsibles/home', data);
    });    
    
    app.get('/alerts', function(req, res) {
      data = {
        doctitle: 'Alerts',
        page_name: 'Alerts',
        prettifyScript: true,
        phase: true
      };
      res.render('elements/alerts/home', data);
    });    
    
    app.get('/pagination', function(req, res) {
      data = {
        doctitle: 'Pagination',
        page_name: 'Pagination',
        prettifyScript: true,
        phase: true
      };
      res.render('elements/pagination/home', data);
    });
    
    app.get('/checklist', function(req, res) {
      data = {
        doctitle: 'Checklist',
        page_name: 'Checklist',
        prettifyScript: true,
        phase: true
      };
      res.render('elements/checklist/home', data);
    });
  
    app.get('/checklist/example', function(req, res) {
      data = {
        doctitle: 'Checklist example',
        page_name: 'Checklist example',
        section: 'checklist',
        section_name: 'Checklist',
        phase: true,
        openLayers: true
      };
      res.render('elements/checklist/example/home', data);
    });
    
    app.get('/application', function(req, res) {
      data = {
        doctitle: 'Application status',
        page_name: 'Application status',
        prettifyScript: true,
        phase: true
      };
      res.render('elements/application/home', data);
    });
    
    app.get('/tabs', function(req, res) {
      data = {
        doctitle: 'Tabs',
        page_name: 'Tabs',
        prettifyScript: true,
        phase: true
      };
      res.render('elements/tabs/home', data);
    });
    
    app.get('/forms', function(req, res) {
      data = {
        doctitle: 'Form elements',
        page_name: 'Form elements',
        prettifyScript: true,
        autocomplete:   true,
        phase: true
      };
      res.render('elements/forms/home', data);
    });
    
    app.get('/forms/form-validation', function(req, res) {
      data = {
        doctitle: 'Form validation',
        page_name: 'Form validation',
        section: 'forms',
        section_name: 'Forms',
        phase: true
      };
      res.render('elements/forms/form-validation/home', data);
    });
    
    app.get('/typography', function(req, res) {
      data = {
        doctitle: 'Typography',
        page_name: 'Typography',
        prettifyScript: true,
        phase: true
      };
      res.render('elements/typography/home', data);
    });
    
    app.get('/related', function(req, res) {
      data = {
        doctitle: 'Related content',
        page_name: 'Related content',
        prettifyScript: true,
        phase: true
      };
      res.render('elements/related/home', data);
    });
    
    app.get('/buttons', function(req, res) {
      data = {
        doctitle: 'Buttons',
        page_name: 'Buttons',
        prettifyScript: true,
        phase: true
      };
      res.render('elements/buttons/home', data);
    });
    
    app.get('/validation', function(req, res) {
      data = {
        doctitle: 'Errors and validation',
        page_name: 'Errors and validation',
        prettifyScript: true,
        phase: true
      };
      res.render('elements/validation/home', data);
    });
    
    app.get('/tables', function(req, res) {
      data = {
        doctitle: 'Tables',
        page_name: 'Tables',
        prettifyScript: true,
        phase: true
      };
      res.render('elements/tables/home', data);
    });
    
    app.get('/dialogs', function(req, res) {
      data = {
        doctitle: 'Dialog overlays',
        page_name: 'Dialog overlays',
        prettifyScript: true,
        phase: true
      };
      res.render('elements/dialogs/home', data);
    });
    
    app.get('/pages', function(req, res) {
      data = {
        doctitle: 'Page examples',
        page_name: 'Page examples',
        phase: true
      };
      res.render('elements/pages/home', data);
    });
    
    
    // INTERNAL USERS
    // ==============================================
    
    app.get('/internal/search-customer-or-business', function(req, res) {
      data = {
        doctitle: 'Search for a customer or business',
        page_name: 'Search for a customer or business',
        section: 'pages',
        section_name: 'Pages',
        internalStyles: true,
        internalHeader: true
      };
      res.render('internal/search-customer-or-business/home', data);
    });
    
    app.get('/internal/deactivate-user', function(req, res) {
      data = {
        doctitle: 'Customer record',
        page_name: 'Customer record',
        section: 'pages',
        section_name: 'Pages',
        internalStyles: true,
        internalHeader: true
      };
      res.render('internal/deactivate-user/home', data);
    });
    
    app.get('/internal/alerts', function(req, res) {
      data = {
        doctitle: 'Alerts',
        page_name: 'Alerts',
        section: 'pages',
        section_name: 'Pages',
        internalStyles: true,
        internalHeader: true
      };
      res.render('internal/alerts/home', data);
    });
    
    app.get('/internal/sign-in', function(req, res) {
      data = {
        doctitle: 'Sign in',
        page_name: 'Sign in',
        section: 'pages',
        section_name: 'Pages',
        internalStyles: true,
        internalHeader: true
      };
      res.render('internal/sign-in/home', data);
    });
    
    
    // PAGES
    // ==============================================
    
    app.get('/pages/your-account', function(req, res) {

      data = {
        doctitle: 'Your account',
        page_name: 'Your account',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      
      res.render('pages/your-account/home', data);

    });
    
    app.get('/pages/create-new-customer', function(req, res) {
    
      data = {
        doctitle: 'Create new customer',
        page_name: 'Create new customer',
        section: 'pages',
        section_name: 'Pages',
        phase: true
        
      };
      
      res.render('pages/create-new-customer/home', data);
    
    });
    
    app.get('/pages/update-personal-details', function(req, res) {
    
      data = {
        doctitle: 'Update personal details',
        page_name: 'Update personal details',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      
      res.render('pages/update-personal-details/home', data);
    
    });
    
    app.get('/pages/parcel-summary', function(req, res) {
    
      data = {
        doctitle: 'Parcel summary',
        page_name: 'Parcel summary',
        section: 'pages',
        section_name: 'Pages',
        phase: true,
        openLayers: true
      };
      
      res.render('pages/parcel-summary/home', data);
    
    });
    
    app.get('/pages/parcel-details', function(req, res) {
    
      data = {
        doctitle: 'Parcel details',
        page_name: 'Parcel details',
        section: 'pages',
        section_name: 'Pages',
        phase: true,
        openLayers: true
      };
      
      res.render('pages/parcel-details/home', data);
    
    });
    
    app.get('/pages/personal-details', function(req, res) {
    
      data = {
        doctitle: 'Personal details',
        page_name: 'Personal details',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      
      res.render('pages/personal-details/home', data);
      
    });

    app.get('/pages/self-assessment', function(req, res) {
      data = {
        doctitle: 'Self assessment',
        page_name: 'Check if you need to fill in a Self Assessment tax return',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/self-assessment/home', data);
    });
    
    app.get('/pages/cross-compliance', function(req, res) {
    
      data = {
        doctitle: 'Cross compliance',
        page_name: 'Cross compliance',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      
      res.render('pages/cross-compliance/home', data);
      
    });
    
    app.get('/pages/confirmation', function(req, res) {
      data = {
        doctitle: 'BPS application',
        page_name: 'BPS application',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/confirmation/home', data);
    });

    app.get('/pages/apply-for-bps', function(req, res) {
      data = {
        doctitle: 'Apply for Basic Payment Scheme',
        page_name: 'Apply for Basic Payment Scheme',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/apply-for-bps/home', data);
    });
    
    app.get('/pages/add-business-details', function(req, res) {
      data = {
        doctitle: 'Add business details',
        page_name: 'Add business details',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/add-business-details/home', data);
    });
    
    app.get('/pages/update-business-details', function(req, res) {
      data = {
        doctitle: 'Update business details',
        page_name: 'Update business details',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/update-business-details/home', data);
    });
    
    app.get('/pages/register-for-rural-payments', function(req, res) {
      data = {
        doctitle: 'Register for Rural Payments',
        page_name: 'Register for Rural Payments',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/register-for-rural-payments/home', data);
    });
    
    app.get('/pages/where-should-we-send-your-new-passport', function(req, res) {
      data = {
        doctitle: 'Where should we send your new passport?',
        page_name: 'Where should we send your new passport?',
        section: 'pages',
        section_name: 'Pages',
        phase: true
        
      };
      res.render('pages/where-should-we-send-your-new-passport/home', data);
    });
    
    app.get('/pages/your-details', function(req, res) {
      data = {
        doctitle: 'Your details',
        page_name: 'Your details',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/your-details/home', data);
    });
    
    app.get('/pages/add-edit-land', function(req, res) {
      data = {
        doctitle: 'Add or edit land',
        page_name: 'Add or edit land',
        section: 'pages',
        section_name: 'Pages',
        phase: true,
        openLayers: true
      };
      res.render('pages/add-edit-land/home', data);
    });
    
    app.get('/pages/home', function(req, res) {
      data = {
        doctitle: 'Rural Payments',
        page_name: 'Rural Payments',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/home/home', data);
    });
    
    app.get('/pages/invalid-or-missing-token', function(req, res) {
      data = {
        doctitle: 'Invalid or missing token',
        page_name: 'Invalid or missing token',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/invalid-or-missing-token/home', data);
    });
    
    app.get('/pages/removal-of-land', function(req, res) {
      data = {
        doctitle: 'Check and submit your removal of land',
        page_name: 'Check and submit your removal of land',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/removal-of-land/home', data);
    });
    
    app.get('/pages/basic-payment-scheme-application', function(req, res) {
      data = {
        doctitle: 'Basic payment scheme application',
        page_name: 'Basic payment scheme application',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/basic-payment-scheme-application/home', data);
    });
    
    app.get('/pages/basic-payment-scheme-application/summary', function(req, res) {
      data = {
        doctitle: 'Basic payment scheme application summary',
        page_name: 'Basic payment scheme application summary',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/basic-payment-scheme-application/summary', data);
    });
    
    app.get('/pages/activate-your-entitlements', function(req, res) {
      data = {
        doctitle: 'Activate your entitlements',
        page_name: 'Activate your entitlements',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/activate-your-entitlements/home', data);
    });
    
    app.get('/pages/efas', function(req, res) {
      data = {
        doctitle: 'Ecological focus areas',
        page_name: 'Ecological focus areas',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/efas/home', data);
    });
    
    app.get('/pages/signin', function(req, res) {
      data = {
        doctitle: 'Sign in to Rural Payments',
        page_name: 'Sign in to Rural Payments',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/signin/home', data);
    });
    
    app.get('/pages/forgotten-your-password', function(req, res) {
      data = {
        doctitle: 'Forgotten your password',
        page_name: 'Forgotten your password',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/forgotten-your-password/home', data);
    });
    
    app.get('/pages/you-need-to-change-your-password', function(req, res) {
      data = {
        doctitle: 'You need to change your password',
        page_name: 'You need to change your password',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/you-need-to-change-your-password/home', data);
    });
    
    app.get('/pages/check-your-land', function(req, res) {
      data = {
        doctitle: 'Check your land',
        page_name: 'Check your land',
        section: 'pages',
        section_name: 'Pages',
        phase: true,
        openLayers: true
      };
      res.render('pages/check-your-land/home', data);
    });
    
    app.get('/pages/add-feature-to-this-land/', function(req, res) {
      data = {
        doctitle: 'What do you want to add to this land?',
        page_name: 'What do you want to add to this land?',
        section: 'pages',
        section_name: 'Pages',
        phase: true,
        openLayers: true
      };
      res.render('pages/add-feature-to-this-land//home', data);
    });
    
    app.get('/pages/add-feature-details-to-this-land/', function(req, res) {
      data = {
        doctitle: 'Sweet potatoes',
        page_name: 'Sweet potatoes',
        section: 'pages',
        section_name: 'Pages',
        phase: true,
        openLayers: true
      };
      res.render('pages/add-feature-details-to-this-land/home', data);
    });
    
    app.get('/pages/manage-your-land/', function(req, res) {
      data = {
        doctitle: 'North paddock',
        page_name: 'North paddock',
        section: 'pages',
        section_name: 'Pages',
        phase: true,
        openLayers: true
      };
      res.render('pages/manage-your-land/home', data);
    });
    
    app.get('/pages/edit-land-feature/', function(req, res) {
      data = {
        doctitle: 'Pond',
        page_name: 'Pond',
        section: 'pages',
        section_name: 'Pages',
        phase: true,
        openLayers: true
      };
      res.render('pages/edit-land-feature/home', data);
    });
    
    app.get('/pages/apply-for-the-basic-payment-scheme', function(req, res) {
      data = {
        doctitle: 'Apply for the basic payment scheme',
        page_name: 'Apply for the basic payment scheme',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/apply-for-the-basic-payment-scheme/home', data);
    });
    
    app.get('/pages/terms-and-conditions', function(req, res) {
      data = {
        doctitle: 'Rural Payments',
        page_name: 'Rural Payments',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/terms-and-conditions/home', data);
    });
    
    app.get('/pages/business-details', function(req, res) {
      data = {
        doctitle: 'Business details',
        page_name: 'Business details',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/business-details/home', data);
    });
    
    app.get('/pages/your-password-has-expired', function(req, res) {
      data = {
        doctitle: 'Sign in',
        page_name: 'Sign in',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/your-password-has-expired/home', data);
    });
    
    
    // USER JOURNEYS
    // ==============================================
    
    
    // You account
    
    app.get('/your-account/', function(req, res) {
      res.render('user/your-account/home', {
        doctitle: 'Your account',
        page_name: 'Your account',
        owner: 'Sidney Bechett',
        businesses:businessEngine.getBusinessEntries()
      });
    });
    
    app.get('/your-account/view/:id', function(req, res) {
    
      var entry = businessEngine.getBusinessEntry(req.params.id);
      
      res.render('user/your-account/view/home', {
        doctitle: 'Your businesses',
        page_name: 'Your businesses',
        section: 'your-account',
        section_name: 'Your account',
        business:entry
      });
    
    });
    
    
    // Accountable people
    
    app.get('/accountable-people/', function(req, res) {
      data = {
        doctitle: 'Accountable people',
        page_name: 'Accountable people',
        business_name: 'Beech Farm',
      };
      res.render('user/accountable-people/home', data);
    });
    
    app.get('/accountable-people/business-ownership/', function(req, res) {
      data = {
        doctitle: 'Business ownership',
        page_name: 'Business ownership',
        business_name: 'Beech Farm',
        section: 'accountable-people',
        section_name: 'Accountable people',
      };
      res.render('user/accountable-people/business-ownership/home', data);
    });

    app.get('/accountable-people/business-ownership/sole-trader/', function(req, res) {
      data = {
        doctitle: 'Sole trader details',
        page_name: 'Sole trader details',
        business_name: 'Beech Farm',
        section: 'accountable-people',
        section_name: 'Accountable people',
        section2: 'accountable-people/business-ownership',
        section2_name: 'Business ownership'
      };
      res.render('user/accountable-people/business-ownership/sole-trader/home', data);
    });

    app.post('/accountable-people/business-ownership/sole-trader/confirm', function(req, res) {
      data = {
        doctitle: 'Confirm sole trader details',  
        page_name: 'Confirm sole trader details',
        business_name: 'Beech Farm',
        section: 'accountable-people',
        section_name: 'Accountable people',
        section2: 'accountable-people/business-ownership',
        section2_name: 'Business ownership',
        owner: req.body.owner,
        firstname: req.body.firstName,
        lastname:  req.body.lastName, 
        ni: req.body.niNumber, 
        share: req.body.businessShare,
        rights: req.body.votingRights       
      };
      res.render('user/accountable-people/business-ownership/sole-trader/confirm', data);
    });
    
    app.get('/accountable-people/business-ownership/sole-trader/business', function(req, res) {
      data = {
        doctitle: 'Business details',
        page_name: 'Business details',
        business_name: 'Beech Farm',
        section: 'accountable-people',
        section_name: 'Accountable people',
        section2: 'accountable-people/business-ownership',
        section2_name: 'Business ownership',
      };
      res.render('user/accountable-people/business-ownership/sole-trader/business', data);
    });
    
    app.get('/accountable-people/business-ownership/sole-trader/update/:id', function(req, res) {
      var entry = peopleEngine.getPeopleEntry(req.params.id);
      res.render('user/accountable-people/business-ownership/sole-trader/update', {
        doctitle: 'Update sole trader details',
        page_name: 'Update sole trader details',
        section: 'accountable-people',
        section_name: 'Accountable people',
        section2: 'accountable-people/business-ownership',
        section2_name: 'Business ownership',
        people:entry
      });
    });
    
    app.get('/accountable-people/business-ownership/accountable-person/', function(req, res) {
      data = {
        doctitle: 'Add an accountable person',
        page_name: 'Add an accountable person',
        business_name: 'Beech Farm',
        section: 'accountable-people',
        section_name: 'Accountable people',
        section2: 'accountable-people/business-ownership',
        section2_name: 'Business ownership',
      };
      res.render('user/accountable-people/business-ownership/accountable-person/home', data);
    });
    
    app.post('/accountable-people/business-ownership/accountable-person/confirm/', function(req, res) {
      data = {
        doctitle: 'Confirm accountable person details',  
        page_name: 'Confirm accountable person details',
        business_name: 'Beech Farm',
        section: 'accountable-people',
        section_name: 'Accountable people',
        section2: 'accountable-people/business-ownership',
        section2_name: 'Business ownership',
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        ni: req.body.niNumber, 
        share: req.body.businessShare,
        rights: req.body.votingRights       
      };
      res.render('user/accountable-people/business-ownership/accountable-person/confirm', data);
    });
    
    app.get('/accountable-people/business-ownership/accountable-person/summary/', function(req, res) {
      data = {
        doctitle: 'Accountable people summary',
        page_name: 'Accountable people summary',
        business_name: 'Beech Farm',
        section: 'accountable-people',
        section_name: 'Accountable people',
        section2: 'accountable-people/business-ownership',
        section2_name: 'Business ownership',
      };
      res.render('user/accountable-people/business-ownership/accountable-person/summary', data);
    });
    
    app.get('/accountable-people/business-ownership/accountable-person/update/:id', function(req, res) {
      var entry = peopleEngine.getPeopleEntry(req.params.id);
      res.render('user/accountable-people/business-ownership/accountable-person/update', {
        doctitle: 'Update accountable person details',
        page_name: 'Update accountable person details',
        business_name: 'Beech Farm',
        section: 'accountable-people',
        section_name: 'Accountable people',
        section2: 'accountable-people/business-ownership',
        section2_name: 'Business ownership',
        people:entry
      });
    
    });

    app.get('/accountable-people/business-ownership/accountable-person/declaration/', function(req, res) {
      res.render('user/accountable-people/business-ownership/accountable-person/declaration', {
        doctitle: 'Declaration of accountable people',
        page_name: 'Declaration of accountable people',
        business_name: 'Beech Farm',
        section: 'accountable-people',
        section_name: 'Accountable people',
        section2: 'accountable-people/business-ownership',
        section2_name: 'Business ownership'
      });
    });
    
    app.get('/accountable-people/business-ownership/accountable-person/business/', function(req, res) {
      res.render('user/accountable-people/business-ownership/accountable-person/business', {
        doctitle: 'Business details',
        page_name: 'Business details',
        business_name: 'Beech Farm',
        section: 'accountable-people',
        section_name: 'Accountable people',
        section2: 'accountable-people/business-ownership',
        section2_name: 'Business ownership'
      });
    });
    
    
    // Land query
    
    app.get('/land-query', function(req, res) {
      data = {
        doctitle: 'What do you need help with?',
        page_name: 'What do you need help with?'
      };
      res.render('user/land-query/home', data);
    });

    app.get('/land-query/query', function(req, res) {
      data = {
        doctitle: 'Tell us more about your query',
        page_name: 'Tell us more about your query',
        section: 'land-query',
        section_name: 'Land query',
      };
      res.render('user/land-query/query', data);
    });

    app.get('/land-query/query-sbi', function(req, res) {
      data = {
        doctitle: 'Land query',
        page_name: 'Tell us more about your query',
        section: 'land-query',
        section_name: 'Land query',
      };
      res.render('user/land-query/query-sbi', data);
    });
    
    
    // SitiAgri
    
    app.get('/sitiagri/', function(req, res) {
      data = {
        doctitle: 'Business overview',
        page_name: 'Business overview',
        business_name: 'Beech Farm'
      };
      res.render('user/sitiagri/home', data);
    });
    
    app.get('/sitiagri/people-and-permissions/', function(req, res) {
      data = {
        doctitle: 'People and permissions',
        page_name: 'People and permissions',
        business_name: 'Beech Farm',
        section: 'sitiagri',
        section_name: 'Business overview',
      };
      res.render('user/sitiagri/people-and-permissions', data);
    });
    
    app.get('/sitiagri/business-details/', function(req, res) {
      data = {
        doctitle: 'Business details',
        page_name: 'Business details',
        business_name: 'Beech Farm',
        section: 'sitiagri',
        section_name: 'Business overview',
      };
      res.render('user/sitiagri/business-details', data);
    });
    
    app.get('/sitiagri/land/', function(req, res) {
      data = {
        doctitle: 'Land',
        page_name: 'Land',
        business_name: 'Beech Farm',
        section: 'sitiagri',
        section_name: 'Business overview'
      };
      res.render('user/sitiagri/land/home', data);
    });
    
    app.get('/sitiagri/land/land-cover/', function(req, res) {
      data = {
        doctitle: 'Land cover',
        page_name: 'Land cover',
        business_name: 'Beech Farm',
        section: 'sitiagri',
        section_name: 'Business overview',
        section2: 'sitiagri/land',
        section2_name: 'Land'
      };
      res.render('user/sitiagri/land/land-cover', data);
    });    
    
    app.get('/sitiagri/land/land-use/', function(req, res) {
      data = {
        doctitle: 'Land use',
        page_name: 'Land use',
        business_name: 'Beech Farm',
        section: 'sitiagri',
        section_name: 'Business overview',
        section2: 'sitiagri/land',
        section2_name: 'Land'
      };
      res.render('user/sitiagri/land/land-use', data);
    });  
  
    app.get('/sitiagri/land/transfer-land/', function(req, res) {
      data = {
        doctitle: 'Transfer land',
        page_name: 'Transfer land',
        business_name: 'Beech Farm',
        section: 'sitiagri',
        section_name: 'Business overview',
        section2: 'sitiagri/land',
        section2_name: 'Land'
      };
      res.render('user/sitiagri/land/transfer-land', data);
    });
    
    app.get('/sitiagri/entitlements/', function(req, res) {
      data = {
        doctitle: 'Entitlements',
        page_name: 'Entitlements',
        business_name: 'Beech Farm',
        section: 'sitiagri',
        section_name: 'Business overview'
      };      
      res.render('user/sitiagri/entitlements/home', data);
    });

    app.get('/sitiagri/entitlements/view/', function(req, res) {
      data = {
        doctitle: 'View entitlements',
        page_name: 'View entitlements',
        business_name: 'Beech Farm',
        section: 'sitiagri',
        section_name: 'Business overview',
        section2: 'sitiagri/entitlements',
        section2_name: 'Entitlements'
      };
      res.render('user/sitiagri/entitlements/view', data);
    });    
    
    app.get('/sitiagri/entitlements/transfer/', function(req, res) {
      data = {
        doctitle: 'Transfer entitlements',
        page_name: 'Transfer entitlements',
        section: 'sitiagri',
        section_name: 'Business overview',
        section2: 'sitiagri/entitlements',
        section2_name: 'Entitlements'
      };
      res.render('user/sitiagri/entitlements/transfer', data);
    });
    
    app.get('/sitiagri/common-rights/', function(req, res) {
      data = {
        doctitle: 'Common rights',
        page_name: 'Common rights',
        business_name: 'Beech Farm',
        section: 'sitiagri',
        section_name: 'Business overview'
      };
      res.render('user/sitiagri/common-rights', data);
    });
    
    app.get('/sitiagri/applications-and-claims/', function(req, res) {
      data = {
        doctitle: 'Applications and claims',
        page_name: 'Applications and claims',
        business_name: 'Beech Farm',
        section: 'sitiagri',
        section_name: 'Business overview'
      };
      res.render('user/sitiagri/applications-and-claims/home', data);
    });    
    
    app.get('/sitiagri/applications-and-claims/apply/', function(req, res) {
      data = {
        doctitle: 'Apply for the Basic Payment Scheme',
        page_name: 'Apply for the Basic Payment Scheme',
        business_name: 'Beech Farm',
        section: 'sitiagri',
        section_name: 'Business overview',
        section2: 'sitiagri/applications-and-claims',
        section2_name: 'Applications and claims'
      };
      res.render('user/sitiagri/applications-and-claims/apply', data);
    });    
    
    app.get('/sitiagri/applications-and-claims/update/', function(req, res) {
      data = {
        doctitle: 'Update your Basic Payment Scheme application',
        page_name: 'Update your Basic Payment Scheme application',
        business_name: 'Beech Farm',
        section: 'sitiagri',
        section_name: 'Business overview',
        section2: 'sitiagri/applications-and-claims',
        section2_name: 'Applications and claims'
      };
      res.render('user/sitiagri/applications-and-claims/update', data);
    });
    
    
    // Confirm journey
    
    app.get('/confirm-journey', function(req, res) {    
      data = {
        doctitle: 'Confirm journey',
        page_name: 'Rural Payments'
      };      
      res.render('user/confirm-journey/home', data);    
    });
  
    app.get('/confirm-journey/personal-details', function(req, res) {    
      data = {
        doctitle: 'Your personal details',
        page_name: 'Your personal details'
      };      
      res.render('user/confirm-journey/personal-details', data);    
    });

    app.get('/confirm-journey/your-contact-details', function(req, res) {   
      data = {
        doctitle: 'Your contact details',
        page_name: 'Your contact details'
      };      
      res.render('user/confirm-journey/your-contact-details', data);    
    });    

    app.get('/confirm-journey/your-contact-preferences', function(req, res) {    
      data = {
        doctitle: 'Your contact preferences',
        page_name: 'Your contact preferences'
      };      
      res.render('user/confirm-journey/your-contact-preferences', data);    
    });   

    app.get('/confirm-journey/check-business-details', function(req, res) {    
      data = {
        doctitle: 'Check business details',
        page_name: 'Check business details',
        business_name: 'Beech Farm',
        openLayers: true
      };      
      res.render('user/confirm-journey/check-business-details', data);    
    });

    app.get('/confirm-journey/update-business-details', function(req, res) {    
      data = {
        doctitle: 'Update business details',
        page_name: 'Update business details',
        business_name: 'Beech Farm',
        openLayers: true
      };      
      res.render('user/confirm-journey/update-business-details', data);    
    });
    
    app.get('/confirm-journey/additional-business-details', function(req, res) {    
      data = {
        doctitle: 'Additional business details',
        page_name: 'Additional business details',
        business_name: 'Beech Farm',
      };      
      res.render('user/confirm-journey/additional-business-details', data);    
    });

    app.get('/confirm-journey/people-accountable', function(req, res) {    
      data = {
        doctitle: 'People accountable',
        page_name: 'People accountable',
        business_name: 'Beech Farm',
      };      
      res.render('user/confirm-journey/people-accountable', data);    
    });
    
    app.get('/confirm-journey/people-accountable-summary', function(req, res) {    
      data = {
        doctitle: 'People accountable summary',
        page_name: 'People accountable summary',
        business_name: 'Beech Farm',
      };      
      res.render('user/confirm-journey/people-accountable-summary', data);    
    });

    app.get('/confirm-journey/business-details-summary', function(req, res) {    
      data = {
        doctitle: 'Business details summary',
        page_name: 'Business details summary',
        business_name: 'Beech Farm',
        openLayers: true
      };      
      res.render('user/confirm-journey/business-details-summary', data);    
    });
    
    app.get('/confirm-journey/business-overview', function(req, res) {    
      data = {
        doctitle: 'Business overview',
        page_name: 'Beech Farm',
        openLayers: true
      };      
      res.render('user/confirm-journey/business-overview', data);    
    });
    
    
    
    
    
    
    // Countryside stewardship
    
    app.get('/pages/countryside-stewardship', function(req, res) {
      var doctitle = 'Countryside Stewardship';
      var page_name = 'Countryside Stewardship';
      var section = 'pages';
      var section_name = 'Pages';
      var phase = true;
      res.render('pages/countryside-stewardship/home', {'doctitle' : doctitle, 'page_name' : page_name, 'section' : section, 'section_name' : section_name, 'phase' : phase});
    });
    
    app.get('/pages/countryside-stewardship/questions', function(req, res, next) {
      var doctitle = 'Questions';
      var page_name = 'Questions';
      var section = 'pages';
      var section_name = 'Pages';
      var phase = true;
      res.render('pages/countryside-stewardship/questions', {'doctitle' : doctitle, 'page_name' : page_name, 'section' : section, 'section_name' : section_name, 'phase' : phase});
    });
    
    app.post('/pages/countryside-stewardship/questions', function(req, res) {
      
      var doctitle = 'Questions';
      var page_name = 'Questions';
      var section = 'pages';
      var section_name = 'Pages';
      var phase = true;
      
      var severely_disadvantaged_area = req.body.severely_disadvantaged_area;
      var organic_land                = req.body.organic_land;
      var arable_land                 = req.body.arable_land;
      var grassland                   = req.body.grassland;
      var farmland_birds              = req.body.farmland_birds;
      var breeding_waders             = req.body.breeding_waders;
      var addressing_water_quality    = req.body.addressing_water_quality;
      var types_of_water_issue        = req.body.types_of_water_issue;
      var manage_and_protect          = req.body.manage_and_protect;
      var improve_landscape_features  = req.body.improve_landscape_features;
      
      var error  = false;
      var error1 = false;
      
      if (!severely_disadvantaged_area || !organic_land || !arable_land || !grassland || !farmland_birds || !addressing_water_quality || !breeding_waders || !manage_and_protect || !improve_landscape_features) {
        error = true;
      } else if (addressing_water_quality === 'Yes' && !types_of_water_issue) {
        error1 = true;
      } else {
        error = false;
        error1 = false;
      }
      
      res.render('pages/countryside-stewardship/questions', {
        'doctitle' : doctitle, 
        'page_name' : page_name,
        'section' : section, 
        'section_name' : section_name, 
        'severely_disadvantaged_area': severely_disadvantaged_area,
        'organic_land': organic_land,
        'arable_land': arable_land,
        'grassland': grassland,
        'farmland_birds': farmland_birds,
        'breeding_waders': breeding_waders,
        'addressing_water_quality': addressing_water_quality,
        'types_of_water_issue': types_of_water_issue,
        'manage_and_protect': manage_and_protect,
        'improve_landscape_features': improve_landscape_features,
        'error': error,
        'error1': error1,
        'phase': phase
      });
      
    });

    app.get('/pages/countryside-stewardship/options', function(req, res) {
      data = {
        doctitle: 'Priority options',
        page_name: 'Priority options',
        section: 'pages',
        section_name: 'Pages',
        phase: true
      };
      res.render('pages/countryside-stewardship/options', data);
    });

    
  }
    
    
};