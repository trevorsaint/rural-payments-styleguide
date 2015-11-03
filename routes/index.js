module.exports = {


  bind: function(app) {


    // MODELS
    // ==============================================
    
    var peopleEngine   = require('../models/people');
    var businessEngine = require('../models/businesses');


    // ROUTES
    // ==============================================


    var data = '';



    // Index

    app.get('/', function(req, res) {

      data = {
        doctitle: 'Index', 
        beta: true
      };
      
      res.render('home', data);

    });


    // Elements

    app.get('/typography', function(req, res) {
    
      data = {
        doctitle: 'Typography'
      };
      
      res.render('elements/typography/home', data);
    
    });
    
    
    app.get('/layout', function(req, res) {
    
      data = {
        doctitle: 'Layout'
      };
      
      res.render('elements/layout/home', data);
    
    });
    
    
    app.get('/tables', function(req, res) {
    
      data = {
        doctitle: 'Tables'
      };
      
      res.render('elements/tables/home', data);
    
    });
    
    
    app.get('/tables/validation', function(req, res) {
    
      data = {
        doctitle: 'Table validation'
      };
      
      res.render('elements/tables/validation', data);
    
    });
    
    
    app.get('/forms', function(req, res) {
    
      data = {
        doctitle: 'Forms',
        autocomplete: true
      };
      
      res.render('elements/forms/home', data);
    
    });
    

    app.get('/forms/form-validation', function(req, res) {
    
      data = {
        doctitle: 'Form validation'
      };
      
      res.render('elements/forms/form-validation/home', data);
    
    });
    

    app.get('/buttons', function(req, res) {
    
      data = {
        doctitle: 'Buttons'
      };
      
      res.render('elements/buttons/home', data);
    
    });


    app.get('/details', function(req, res) {
    
      data = {
        doctitle: 'Details'
      };
      
      res.render('elements/details/home', data);
    
    });


    app.get('/alerts', function(req, res) {
    
      data = {
        doctitle: 'Alerts'
      };
      
      res.render('elements/alerts/home', data);
    
    });
    

    app.get('/dialogs', function(req, res) {
    
      data = {
        doctitle: 'Dialogs'
      };
      
      res.render('elements/dialogs/home', data);
    
    });
    

    app.get('/collapsibles', function(req, res) {
    
      data = {
        doctitle: 'Collapsibles'
      };
      
      res.render('elements/collapsibles/home', data);
    
    });
    

    app.get('/checklist', function(req, res) {
    
      data = {
        doctitle: 'Checklist'
      };
      
      res.render('elements/checklist/home', data);
    
    });
    

    app.get('/checklist/example', function(req, res) {
    
      data = {
        doctitle: 'Checklist example',
        openLayers: true
      };
      
      res.render('elements/checklist/example/home', data);
    
    });
    

    app.get('/tabs', function(req, res) {
    
      data = {
        doctitle: 'Tabs'
      };
      
      res.render('elements/tabs/home', data);
    
    });
    

    app.get('/snippets', function(req, res) {
    
      data = {
        doctitle: 'Snippets',
        prettifyScript: true,
        autocomplete: true
      };
      
      res.render('elements/snippets/home', data);
    
    });


    app.get('/pagination', function(req, res) {
    
      data = {
        doctitle: 'Pagination'
      };
      
      res.render('elements/pagination/home', data);
    
    });
    

    app.get('/related', function(req, res) {
    
      data = {
        doctitle: 'Related'
      };
      
      res.render('elements/related/home', data);
    
    });
    

    app.get('/validation', function(req, res) {
    
      data = {
        doctitle: 'Errors & Validation'
      };
      
      res.render('elements/validation/home', data);
    
    });
    
    
    app.get('/application', function(req, res) {
    
      data = {
        doctitle: 'Application Status'
      };
      
      res.render('elements/application/home', data);
    
    });
    
    
    // Admin
    
    app.get('/internal/deactivate-user', function(req, res) {
    
      data = {
        doctitle: 'Deactivate user',
        internalStyles: true,
        internalHeader: true
      };
      
      res.render('internal/deactivate-user/home', data);
      
    });
    
    
    app.get('/internal/alerts', function(req, res) {
    
      data = {
        doctitle: 'Alerts',
        internalStyles: true,
        internalHeader: true
      };
      
      res.render('internal/alerts/home', data);
    
    });
    
    
    app.get('/internal/signin', function(req, res) {
    
      data = {
        doctitle: 'Sign in'
      };
      
      res.render('internal/signin/home', data);
      
    });
    
    
    app.get('/internal/search-customer-or-business', function(req, res) {
    
      data = {
        doctitle: 'Search customer or business',
        internalStyles: true,
        internalHeader: true
      };
      
      res.render('internal/search-customer-or-business/home', data);
      
    });
    
    
    // Pages
    
    app.get('/account', function(req, res) {

      data = {
        doctitle: 'Account',
        pagetitle: 'Rural Payments'
      };
      
      res.render('pages/account/home', data);

    });
    
    
    app.get('/my-account', function(req, res) {
    
      data = {
        doctitle: 'My account',
        businessMenu: true
      };
      
      res.render('pages/my-account/home', data);
      
    });
    
    
    app.get('/personal-details', function(req, res) {
    
      data = {
        doctitle: 'Personal details'
      };
      
      res.render('pages/personal-details/home', data);
      
    });
    

    app.get('/self-assessment', function(req, res) {
      
      data = {
        doctitle: 'Self assessment'
      };
      
      res.render('pages/self-assessment/home', data);
      
    });
    
    
    app.get('/cross-compliance', function(req, res) {
    
      data = {
        doctitle: 'Cross compliance'
      };
      
      res.render('pages/cross-compliance/home', data);
      
    });
    
    
    app.get('/confirmation', function(req, res) {
    
      data = {
        doctitle: 'Confirmation'
      };
      
      res.render('pages/confirmation/home', data);
    
    });
    
    
    app.get('/apply-for-bps', function(req, res) {
    
      data = {
        doctitle: 'Apply for BPS'
      };
      
      res.render('pages/apply-for-bps/home', data);
    
    });
    
    
    app.get('/update-business-details', function(req, res) {
    
      data = {
        doctitle: 'Update business details'
      };
      
      res.render('pages/update-business-details/home', data);
    
    });
    
    
    app.get('/bps-application', function(req, res) {
    
      data = {
        doctitle: 'BPS application',
        businessMenu: true
      };
      
      res.render('pages/bps-application/home', data);
    
    });
    
    
    app.get('/manage-land', function(req, res) {
    
      data = {
        doctitle: 'Manage land',
        openLayers: true,
        businessMenu: true,
        sticky: true
      };
      
      res.render('pages/manage-land/home', data);
    
    });
    
    
    app.get('/manage-land/fallow-field', function(req, res) {
    
      data = {
        doctitle: 'Fallow field',
        openLayers: true
      };
      
      res.render('pages/manage-land/fallow-field/home', data);
    
    });
    
    
    app.get('/manage-land/fallow-field/land-use', function(req, res) {
    
      data = {
        doctitle: 'Land use',
        openLayers: true
      };
      
      res.render('pages/manage-land/fallow-field/land-use/home', data);
    
    });
    
    
    app.get('/manage-land/fallow-field/add-feature', function(req, res) {
    
      data = {
        doctitle: 'Add feature',
        openLayers: true
      };
      
      res.render('pages/manage-land/fallow-field/add-feature/home', data);
    
    });
    
    
    app.get('/manage-land/fallow-field/edit-feature', function(req, res) {
    
      data = {
        doctitle: 'Edit feature',
        openLayers: true
      };
      
      res.render('pages/manage-land/fallow-field/edit-feature/home', data);
    
    });
    
    
    app.get('/manage-land/fallow-field/add-feature-details', function(req, res) {
    
      data = {
        doctitle: 'Add feature details',
        openLayers: true
      };
      
      res.render('pages/manage-land/fallow-field/add-feature-details/home', data);
    
    });
    

    app.get('/home', function(req, res) {
    
      data = {
        doctitle: 'Home'
      };
      
      res.render('pages/home/home', data);
    
    });
    

    app.get('/land-query', function(req, res) {
      
      data = {
        doctitle: 'Land query'
      };
      
      res.render('pages/land-query/home', data);
    
    });
    

    app.get('/land-query/query', function(req, res) {
    
      data = {
        doctitle: 'Land query'
      };
      
      res.render('pages/land-query/query/home', data);
    
    });
    

    app.get('/land-query/query-sbi', function(req, res) {
    
      data = {
        doctitle: 'Land query'
      };
      
      res.render('pages/land-query/query-sbi/home', data);
    
    });
    

    app.get('/rural-payments', function(req, res) {
    
      data = {
        doctitle: 'Rural Payments'
      };
      
      res.render('pages/rural-payments/home', data);
    
    });
    

    app.get('/invalid-or-missing-token', function(req, res) {
    
      data = {
        doctitle: 'Invalid or missing token'
      };
      
      res.render('pages/invalid-or-missing-token/home', data);
      
    });
    
    
    app.get('/signin', function(req, res) {
    
      data = {
        doctitle: 'Signin'
      };
      
      res.render('pages/signin/home', data);
    
    });
    

    app.get('/signin/password-expired', function(req, res) {
    
      data = {
        doctitle: 'Password expired'
      };
      
      res.render('pages/signin/password-expired/home', data);
    
    });
    

    app.get('/forgotten-your-password', function(req, res) {
    
      data = {
        doctitle: 'Forgotten your password'
      };
      
      res.render('pages/forgotten-your-password/home', data);
    
    });
    

    app.get('/need-to-change-password', function(req, res) {
    
        data = {
          doctitle: 'Need to change password'
        };
        
        res.render('pages/need-to-change-password/home', data);
    
    });
    

    app.get('/scheme-eligibility', function(req, res) {
    
      data = {
        doctitle: 'Scheme eligibility'
      };
      
      res.render('pages/scheme-eligibility/home', data);
    
    });
    

    app.get('/confirm-journey', function(req, res) {
    
      data = {
        doctitle: 'Confirm journey'
      };
      
      res.render('pages/confirm-journey/home', data);
    
    });
    

    app.get('/confirm-journey/personal-details', function(req, res) {
    
      data = {
        doctitle: 'Personal details'
      };
      
      res.render('pages/confirm-journey/personal-details/home', data);
    
    });
    

    app.get('/confirm-journey/your-contact-details', function(req, res) {
    
      data = {
        doctitle: 'Your contact details'
      };
      
      res.render('pages/confirm-journey/your-contact-details/home', data);
    
    });
    

    app.get('/confirm-journey/your-contact-preferences', function(req, res) {
    
      data = {
        doctitle: 'Your contact preferences'
      };
      
      res.render('pages/confirm-journey/your-contact-preferences/home', data);
    
    });
    

    app.get('/confirm-journey/check-business-details', function(req, res) {
    
      data = {
        doctitle: 'Check business details',
        openLayers: true
      };
      
      res.render('pages/confirm-journey/check-business-details/home', data);
    
    });
    

    app.get('/confirm-journey/update-business-details', function(req, res) {
    
      data = {
        doctitle: 'Update business details',
        openLayers: true
      };
      
      res.render('pages/confirm-journey/update-business-details/home', data);
    
    });
    

    app.get('/confirm-journey/additional-business-details', function(req, res) {
    
      data = {
        doctitle: 'Additional business details'
      };
      
      res.render('pages/confirm-journey/additional-business-details/home', data);
    
    });
    

    app.get('/confirm-journey/people-accountable', function(req, res) {
    
      data = {
        doctitle: 'People accountable'
      };
      
      res.render('pages/confirm-journey/people-accountable/home', data);
    
    });
    

    app.get('/confirm-journey/business-details-summary', function(req, res) {
    
      data = {
        doctitle: 'Business details summary',
        openLayers: true
      };
      
      res.render('pages/confirm-journey/business-details-summary/home', data);
    
    });
    

    app.get('/confirm-journey/business-overview', function(req, res) {
    
      data = {
        doctitle: 'Business overview',
        openLayers: true
      };
      
      res.render('pages/confirm-journey/business-overview/home', data);
    
    });
    

    app.get('/confirm-journey/people-accountable-summary', function(req, res) {
    
      data = {
        doctitle: 'People accountable summary'
      };
      
      res.render('pages/confirm-journey/people-accountable-summary/home', data);
    
    });
    

    app.get('/business-details', function(req, res) {
    
      data = {
        doctitle: 'Business details',
        businessMenu: true
      };
      
      res.render('pages/business-details/home', data);
    
    });
    
    
    app.get('/efas', function(req, res) {
    
      data = {
        doctitle: 'Ecological focus areas',
        businessMenu: true
      };
      
      res.render('pages/efas/home', data);
    
    });
    

    app.get('/basic-payment-scheme-application', function(req, res) {
    
      data = {
        doctitle: 'BPS application',
        businessMenu: true
      };
      
      res.render('pages/basic-payment-scheme-application/home', data);
    
    });
    

    app.get('/basic-payment-scheme-application/summary', function(req, res) {
    
      data = {
        doctitle: 'BPS application summary',
        businessMenu: true
      };
      
      res.render('pages/basic-payment-scheme-application/summary', data);
    
    });
    
    
    app.get('/activate-your-entitlements', function(req, res) {
    
      data = {
        doctitle: 'Activate your entitlements',
        businessMenu: true
      };
      
      res.render('pages/activate-your-entitlements/home', data);
    
    });
    

    app.get('/removal-of-land', function(req, res) {
    
      data = {
        doctitle: 'Check and submit your removal of land',
        businessMenu: true
      };
      
      res.render('pages/removal-of-land/home', data);
    
    });
    

    app.get('/register-for-rural-payments', function(req, res) {
    
      data = {
        doctitle: 'Register for Rural Payments'
      };
      
      res.render('pages/register-for-rural-payments/home', data);
    
    });
    

    app.get('/where-should-we-send-your-new-passport', function(req, res) {
    
      data = {
        doctitle: 'Where should we send your new passport?'
      };
      
      res.render('pages/where-should-we-send-your-new-passport/home', data);
    
    });
    

    app.get('/your-details', function(req, res) {
    
      data = {
        doctitle: 'Your details'
      };
      
      res.render('pages/your-details/home', data);
    
    });
    
    
    app.get('/loading', function(req, res) {
    
      data = {
        doctitle: 'Loading'
      };
      
      res.render('pages/loading/home', data);
    
    });
    
    
    app.get('/apply-for-the-basic-payment-application', function(req, res) {
    
      data = {
        doctitle: 'Apply for the basic payment scheme',
        businessMenu: true
      };
      
      res.render('pages/apply-for-the-basic-payment-application/home', data);
    
    });
    
    
    app.get('/add-edit-land', function(req, res) {
    
      data = {
        doctitle: 'Add / Edit land',
        openLayers: true,
        businessMenu: true
      };
      
      
      res.render('pages/add-edit-land/home', data);
    
    });
    
    
    app.get('/business-details/update-business-details', function(req, res) {
    
      data = {
        doctitle: 'Update business details',
        businessMenu: true
      };
      
      res.render('pages/business-details/update-business-details/home', data);
    
    });
    
    
    app.get('/angular', function(req, res) {
    
      data = {
        doctitle: 'Angular directives',
        angularScripts: true
      };
      
      res.render('pages/angular/home', data);
    
    });
    
    
    app.get('/parcel-summary', function(req, res) {
    
      data = {
        doctitle: 'Parcel summary',
        openLayers: true
      };
      
      res.render('pages/parcel-summary/home', data);
    
    });
    
    
    app.get('/parcel-details', function(req, res) {
    
      data = {
        doctitle: 'Parcel details',
        openLayers: true
      };
      
      res.render('pages/parcel-details/home', data);
    
    });
    
    
    app.get('/update-personal-details', function(req, res) {
    
      data = {
        doctitle: 'Update personal details'
      };
      
      res.render('pages/update-personal-details/home', data);
    
    });
    

    app.get('/create-new-customer', function(req, res) {
    
      data = {
        doctitle: 'Create new customer'
      };
      
      res.render('pages/create-new-customer/home', data);
    
    });
    
    
    // Accountable people

    app.get('/accountable-people/', function(req, res) {
    
      data = {
        doctitle: 'Accountable people',
        pagetitle: 'Accountable people'
      };
      
      res.render('pages/accountable-people/home', data);
    
    });
    
    
    app.get('/accountable-people/your-businesses/yes/', function(req, res) {
    
      res.render('pages/accountable-people/your-businesses/yes/home', {
        doctitle: 'Your businesses',
        pagetitle: 'Your businesses',
        owner: 'Sidney Bechett',
        businesses:businessEngine.getBusinessEntries()
      });
    
    });
    
    
    app.get('/accountable-people/your-businesses/yes/view/:id', function(req, res) {
    
      var entry = businessEngine.getBusinessEntry(req.params.id);
      
      req.session.lastPage = '/accountable-people/your-businesses/yes/view/:id';
        res.render('pages/accountable-people/your-businesses/yes/view/home', {
        doctitle: 'Your businesses',
        pagetitle: 'Your businesses',
        business:entry
      });
    
    });
    
    
    app.get('/accountable-people/your-businesses/no/', function(req, res) {
    
      res.render('pages/accountable-people/your-businesses/no/home', {
        doctitle: 'Your businesses',
        pagetitle: 'Your businesses',
        owner: 'Richard Hillier',
        businesses:businessEngine.getBusinessEntries()
      });
    
    });
    
    
    app.get('/accountable-people/your-businesses/no/view/:id', function(req, res) {
    
      var entry = businessEngine.getBusinessEntry(req.params.id);
      
      res.render('pages/accountable-people/your-businesses/no/view/home', {
        doctitle: 'Your businesses',
        pagetitle: 'Your businesses',
        business:entry
      });
    
    });
    
    
    app.get('/accountable-people/overview/', function(req, res) {
    
      data = {
        doctitle: 'Accountable people',
        pagetitle: 'Accountable people'
      };
      
      res.render('pages/accountable-people/overview/home', data);
      
    });
    

    app.get('/accountable-people/business-ownership/', function(req, res) {
    
      data = {
        doctitle: 'Business ownership',
        pagetitle: 'Business ownership'
      };
      
      res.render('pages/accountable-people/business-ownership/home', data);
    
    });
    

    app.get('/accountable-people/business-ownership/sole-trader/details/', function(req, res) {
    
      data = {
        doctitle: 'Sole trader details',
        pagetitle: 'Sole trader details'
      };
      
      res.render('pages/accountable-people/business-ownership/sole-trader/details/home', data);
    
    });


    app.post('/accountable-people/business-ownership/sole-trader/confirm/', function(req, res) {
    
      data = {
        doctitle: 'Confirm sole trader details',  
        pagetitle: 'Confirm sole trader details',
        owner: req.body.owner,
        firstname: req.body.firstName,
        lastname:  req.body.lastName, 
        //email: req.body.email, 
        ni: req.body.niNumber, 
        share: req.body.businessShare,
        rights: req.body.votingRights       
      };
      
      res.render('pages/accountable-people/business-ownership/sole-trader/confirm/home', data);
    
    });
    

    app.get('/accountable-people/business-ownership/sole-trader/business-details/', function(req, res) {
    
      data = {
        doctitle: 'Business details',
        pagetitle: 'Business details'
      };
      
      res.render('pages/accountable-people/business-ownership/sole-trader/business-details/home', data);
    
    });
    

    app.get('/accountable-people/business-ownership/sole-trader/update/:id', function(req, res) {
    
      var entry = peopleEngine.getPeopleEntry(req.params.id);
      
      res.render('pages/accountable-people/business-ownership/sole-trader/update/home', {
        doctitle: 'Update sole trader details',
        pagetitle: 'Update sole trader details',
        people:entry
      });
    
    });
    
    
    app.get('/accountable-people/business-ownership/accountable-person/add/', function(req, res) {
    
      data = {
        doctitle: 'Add an accountable person',
        pagetitle: 'Add an accountable person'
      };
      
      res.render('pages/accountable-people/business-ownership/accountable-person/add/home', data);
    
    });
    
    
    app.post('/accountable-people/business-ownership/accountable-person/confirm/', function(req, res) {
    
      data = {
        doctitle: 'Confirm accountable person details',  
        pagetitle: 'Confirm accountable person details',
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        //email: req.body.email, 
        ni: req.body.niNumber, 
        share: req.body.businessShare,
        rights: req.body.votingRights       
      };
      
      res.render('pages/accountable-people/business-ownership/accountable-person/confirm/home', data);
    
    });
    
    
    app.get('/accountable-people/business-ownership/accountable-person/summary/', function(req, res) {
    
      data = {
        doctitle: 'Accountable people summary',
        pagetitle: 'Accountable people summary'
      };
      
      res.render('pages/accountable-people/business-ownership/accountable-person/summary/home', data);
    
    });
    
    
    app.get('/accountable-people/business-ownership/accountable-person/update/:id', function(req, res) {
    
      var entry = peopleEngine.getPeopleEntry(req.params.id);
      
      res.render('pages/accountable-people/business-ownership/accountable-person/update/home', {
        doctitle: 'Update accountable person details',
        pagetitle: 'Update accountable person details',
        people:entry
      });
    
    });
    
    
    app.get('/accountable-people/business-ownership/accountable-person/declaration/', function(req, res) {
      
      res.render('pages/accountable-people/business-ownership/accountable-person/declaration/home', {
        doctitle: 'Declaration of accountable people',
        pagetitle: 'Declaration of accountable people'
      });
    
    });
    
    
    app.get('/accountable-people/business-ownership/accountable-person/business-details/', function(req, res) {
    
      res.render('pages/accountable-people/business-ownership/accountable-person/business-details/home', {
        doctitle: 'Business details',
        pagetitle: 'Business details'
      });
    
    });
    
    
    // Prototype
    
    app.get('/sitiagri/', function(req, res) {

      data = {
        doctitle: 'Business overview'
      };
      
      res.render('prototype/sitiagri/home', data);

    });
    
    
    // Business overview (yes)
    
    app.get('/sitiagri/business-overview/yes/', function(req, res) {

      data = {
        doctitle: 'Business overview'
      };
      
      res.render('prototype/sitiagri/business-overview/yes/home', data);

    });
    
    
    // Business overview (no)
    
    app.get('/sitiagri/business-overview/no/', function(req, res) {

      data = {
        doctitle: 'Business overview'
      };
      
      res.render('prototype/sitiagri/business-overview/no/home', data);

    });
    
    
    // Accountable people
    
    app.get('/sitiagri/accountable-people/', function(req, res) {

      data = {
        doctitle: 'Accountable people'
      };
      
      res.render('prototype/sitiagri/accountable-people/home', data);

    });
    
    
    // Give access to business
    
    app.get('/sitiagri/people-and-permissions/', function(req, res) {

      data = {
        doctitle: 'People and permissions'
      };
      
      res.render('prototype/sitiagri/people-and-permissions/home', data);

    });
    
    
    // Business details
    
    app.get('/sitiagri/business-details/', function(req, res) {

      data = {
        doctitle: 'Business details'
      };
      
      res.render('prototype/sitiagri/business-details/home', data);

    });
    
    
    // Land
    
    app.get('/sitiagri/land/', function(req, res) {

      data = {
        doctitle: 'Land'
      };
      
      res.render('prototype/sitiagri/land/home', data);

    });
    
    
      app.get('/sitiagri/land/land-cover/', function(req, res) {

        data = {
          doctitle: 'Land cover'
        };
        
        res.render('prototype/sitiagri/land/land-cover/home', data);
  
      });
      
      
      app.get('/sitiagri/land/land-use/', function(req, res) {

        data = {
          doctitle: 'Land use'
        };
        
        res.render('prototype/sitiagri/land/land-use/home', data);
  
      });
    
    
      app.get('/sitiagri/land/transfer-land/', function(req, res) {

        data = {
          doctitle: 'Transfer land'
        };
        
        res.render('prototype/sitiagri/land/transfer-land/home', data);
  
      });
    
    
    // Entitlements
    
    app.get('/sitiagri/entitlements/', function(req, res) {

      data = {
        doctitle: 'Entitlements'
      };
      
      res.render('prototype/sitiagri/entitlements/home', data);

    });
    
    
      app.get('/sitiagri/entitlements/view/', function(req, res) {

        data = {
          doctitle: 'View entitlements'
        };
        
        res.render('prototype/sitiagri/entitlements/view/home', data);
  
      });
      
      
      app.get('/sitiagri/entitlements/transfer/', function(req, res) {

        data = {
          doctitle: 'Transfer entitlements'
        };
        
        res.render('prototype/sitiagri/entitlements/transfer/home', data);
  
      });
    
    
    // Common rights
    
    app.get('/sitiagri/common-rights/', function(req, res) {

      data = {
        doctitle: 'Common rights'
      };
      
      res.render('prototype/sitiagri/common-rights/home', data);

    });
    
    
      app.get('/sitiagri/common-rights/update/', function(req, res) {
  
        data = {
          doctitle: 'Update common rights'
        };
        
        res.render('prototype/sitiagri/common-rights/update/home', data);
  
      });
    
    
    // Applications and claims
    
    app.get('/sitiagri/applications-and-claims/', function(req, res) {

      data = {
        doctitle: 'Applications and claims'
      };
      
      res.render('prototype/sitiagri/applications-and-claims/home', data);

    });
      
      
      app.get('/sitiagri/applications-and-claims/apply/', function(req, res) {

        data = {
          doctitle: 'Apply for BPS'
        };
        
        res.render('prototype/sitiagri/applications-and-claims/apply/home', data);
  
      });
      
      
      app.get('/sitiagri/applications-and-claims/update/', function(req, res) {

        data = {
          doctitle: 'Update BPS application'
        };
        
        res.render('prototype/sitiagri/applications-and-claims/update/home', data);
  
      });
    
    
  }
    
    
};