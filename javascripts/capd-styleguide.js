define(['angular'
        , './modules/directives/capdDirectivesModule'
        , './controllers/directivesGalleryController'
        , './bower_components/angular-route/angular-route'
    ],
    function (angular, capdDirectivesModule, directivesGalleryController, ngRoute) {
        var capdStyleguideModule = angular.module('capd-styleguide', ['capd.directives', 'ngRoute']);

        capdStyleguideModule.config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/javascripts/views/directive-gallery.html',
                    controller: function(){

                    }
                })
                .otherwise('/')
        })

        capdStyleguideModule.controller(directivesGalleryController, 'directivesGalleryController')
    })