define(function () {
    // @ngInject
    var CapdPaginatorController = function ($scope) {
        var VIRTUAL_PAGES_COUNT = 5,
            OFFSET = Math.floor(VIRTUAL_PAGES_COUNT/2);

        $scope.displayPageOffset = $scope.displayPageOffset || 0;
        $scope.startPage = $scope.startPage || 1;
        //$scope.scrollToElement = $scope.scrollToElement || "";

        function buildVirtualPages() {
            $scope.virtualPages = [];
//            var firstPage = Math.max($scope.currentPage - 2, 1);
//            var lastPage = Math.min($scope.currentPage + 2, $scope.pagesCount);
            var currentPage = $scope.currentPage;

            var firstPage = currentPage - OFFSET;
            var lastPage = currentPage + OFFSET;
            var overflowLeft = Math.max(1 - firstPage,0);
            var overflowRight = Math.max(lastPage - $scope.pagesCount, 0);

            firstPage = Math.max(firstPage, 1);
            lastPage = Math.min(lastPage, $scope.pagesCount);

            firstPage = Math.max(firstPage - overflowRight, 1);
            lastPage = Math.min(lastPage + overflowLeft, $scope.pagesCount);

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