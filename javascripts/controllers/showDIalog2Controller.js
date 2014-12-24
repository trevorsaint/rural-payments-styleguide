define(function () {
    var ShowDIalog2Controller = function ($scope) {
        $dialogScope.confirm = function (text) {
            $scope.testModel.textFromDialog = text;
            $scope.close();
        }
    }

    return ShowDIalog2Controller;
});