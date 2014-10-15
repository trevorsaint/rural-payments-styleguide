define(['angular'
        , './modules/directives/capdDirectivesModule'
        , './controllers/directivesGalleryController'
        ,'ngRoute'
    ],
    function (angular, capdDirectivesModule, directivesGalleryController, ngRoute) {
        var capdStyleguideModule = angular.module('capd-styleguide', ['capd.directives', 'ngRoute']);

        capdStyleguideModule.controller('directivesGalleryController', directivesGalleryController);

        capdStyleguideModule.config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/javascripts/views/directive-gallery.html',
                    controller: 'directivesGalleryController'
                })
                .otherwise('/')
        })


    })