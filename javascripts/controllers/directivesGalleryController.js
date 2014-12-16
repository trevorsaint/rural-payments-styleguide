define(function () {
    var DirectivesGalleryController = function ($scope) {
        $scope.testModel = {}
        $scope.textWithNewlines = 'Line1\n<b>Line2</b>\nLine3';
    }

    DirectivesGalleryController.$inject = ['$scope'];

    return DirectivesGalleryController;
});