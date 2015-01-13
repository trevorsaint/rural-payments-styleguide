define(['angular'
        , './modules/styleguide/capdStyleguideModule'
        , './controllers/directivesGalleryController'
        , './controllers/showDIalog2Controller'
        // ---------------------
        ,'ngRoute'
    ],
    function (angular, capdDirectivesModule, directivesGalleryController, showDIalog2Controller) {
        var capdStyleguideModule = angular.module('capd-styleguide', ['capd.styleguide', 'ngRoute']);

        capdStyleguideModule.controller('directivesGalleryController', directivesGalleryController);
        capdStyleguideModule.controller('showDIalog2Controller', showDIalog2Controller);

        capdStyleguideModule.config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/javascripts/views/directive-gallery.html',
                    controller: 'directivesGalleryController'
                })
                .when('/advanced/capd-checkbox', {
                    templateUrl : '/javascripts/views/advanced/capd-block-label.html',
                    controler : function(){}
                })
                .otherwise('/')
        })


    })