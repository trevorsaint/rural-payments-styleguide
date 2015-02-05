define(function () {
    // @ngInject
    var CapdPaginatorController = function ($scope) {

        $scope.displayPageOffset = $scope.displayPageOffset || 0;
        $scope.startPage = $scope.startPage || 1;
        //$scope.scrollToElement = $scope.scrollToElement || "";

        function buildVirtualPages() {
            $scope.virtualPages = [];
            var firstPage = Math.max($scope.currentPage - 2, 1);
            var lastPage = Math.min($scope.currentPage + 2, $scope.pagesCount);

            for (var i = firstPage; i <= lastPage; i++) {
                $scope.virtualPages.push(i);
            }
        }

        buildVirtualPages();

        $scope.nextPage = function () {
            var pageNum = $scope.currentPage + $scope.displayPageOffset;
            if (pageNum != $scope.pagesCount) {
                $scope.currentPage++;
            }
            if ($scope.scrollToElement != null && $scope.scrollToElement != undefined) {
                document.getElementById($scope.scrollToElement).scrollIntoView();
            }

            buildVirtualPages();
        }

        $scope.previousPage = function () {
            var pageNum = $scope.currentPage + $scope.displayPageOffset;
            if (pageNum != $scope.startPage) {
                $scope.currentPage--;
            }
            if ($scope.scrollToElement != null && $scope.scrollToElement != undefined) {
                document.getElementById($scope.scrollToElement).scrollIntoView();
            }

            buildVirtualPages();
        }

        $scope.goToPage = function(newPage){
            $scope.currentPage = newPage;
            buildVirtualPages();
        }
    }

    return CapdPaginatorController;
});