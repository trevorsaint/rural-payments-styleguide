define(function () {
    var DirectivesGalleryController = function ($scope, capdDialog) {
        $scope.testModel = {}
        $scope.textWithNewlines = 'Line1\n<b>Line2</b>\nLine3';

        $scope.showDialog1 = function(){
            capdDialog.open($scope, {
                templateUrl : '/javascripts/views/dialog1-template.html',
                injectClose : true
            });
        }

        $scope.showDialog2 = function(){
            capdDialog.open($scope, {
                templateUrl : '/javascripts/views/dialog2-template.html',
                injectClose : true,
                controller : 'showDIalog2Controller'
            });
        }

        $scope.showDialog3 = function(){
            capdDialog.open($scope, {
                templateUrl : '/javascripts/views/dialog3-template.html',
                injectClose : true
            }).then(function(result){
                $scope.testModel.textFromDialog = result;
            });
        }
    }

    DirectivesGalleryController.$inject = ['$scope', 'capdDialog'];

    return DirectivesGalleryController;
});