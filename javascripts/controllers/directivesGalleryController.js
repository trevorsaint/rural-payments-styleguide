define(function () {
    var DirectivesGalleryController = function ($scope, capdDialog) {
        $scope.testModel = {}
        $scope.textWithNewlines = 'Line1\n<b>Line2</b>\nLine3';

        $scope.showDialog1 = function(){
            capdDialog.open($scope, {
                templateUrl : '/javascripts/modules/styleguide/views/dialog1-template.html',
                injectClose : true
            });
        }

        $scope.showDialog2 = function(){
            capdDialog.open($scope, {
                templateUrl : '/javascripts/modules/styleguide/views/dialog2-template.html',
                injectClose : true,
                controller : ['$scope', function($dialogScope){
                    $dialogScope.confirm = function(text){
                        $scope.textFromDialog = text;
                        $dialogScope.close();
                    }
                }]
            });
        }
    }

    DirectivesGalleryController.$inject = ['$scope', 'capdDialog'];

    return DirectivesGalleryController;
});