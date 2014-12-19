define(function () {
    var DirectivesGalleryController = function ($scope, capdDialog) {
        $scope.testModel = {}
        $scope.textWithNewlines = 'Line1\n<b>Line2</b>\nLine3';

        $scope.showDialog = function(){
            capdDialog.open($scope, {
                templateUrl : '/javascripts/modules/styleguide/views/dialog1-template.html'
            });
        }
    }

    DirectivesGalleryController.$inject = ['$scope', 'capdDialog'];

    return DirectivesGalleryController;
});