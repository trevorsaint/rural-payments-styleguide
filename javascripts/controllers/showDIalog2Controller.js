define(function () {
    var ShowDIalog2Controller = function ($scope) {
        $scope.confirm = function (text) {
            $scope.testModel.textFromDialog = text;
            $scope.close();
        }
    }

    return ShowDIalog2Controller;
});