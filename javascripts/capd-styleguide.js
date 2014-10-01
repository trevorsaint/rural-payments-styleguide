define(['angular'
        , './modules/directives/capdDirectivesModule'
        , './controllers/directivesGalleryController'
    ],
    function (
        angular
        , capdDirectivesModule
        , directivesGalleryController
        ) {
        var capdStyleguideModule = angular.module('capd-styleguide', ['capd.directives', 'ngRoute']);

        capdStyleguideModule.config(function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: '/javascripts/views/directive-gallery.html',
                controller: 'directivesGalleryController'
            })
        })

        capdStyleguideModule.controller(directivesGalleryController, 'directivesGalleryController')
    })