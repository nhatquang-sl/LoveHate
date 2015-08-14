(function () {
    loveHateApp.controller('searchController', ['$scope', '$ngBootbox', 'searchImageService'
        , function ($scope, $ngBootbox, searchImageService) {
            $scope.searchInput = "";
            $scope.searchResult = [];
            $scope.initPage = function () {
                searchImageService.initService();
            };

            searchImageService.searchComplete = function () {
                for (var i = 0; i < searchImageService.searchResult.length; i++) {
                    $scope.searchResult.push({
                        tbUrl: searchImageService.searchResult[i].tbUrl
                        , tbHeight: searchImageService.searchResult[i].tbHeight
                        , tbWidth: searchImageService.searchResult[i].tbWidth
                        , url: searchImageService.searchResult[i].unescapedUrl
                        , height: searchImageService.searchResult[i].height
                        , width: searchImageService.searchResult[i].width
                        , namne: $scope.searchInput
                    });
                }
                $scope.$parent.util.isLoading = false;
                $scope.$apply();
            };

            $scope.search = function () {
                $scope.searchResult = [];
                searchImageService.search($scope.searchInput);
                $scope.$parent.util.isLoading = true;
            };
        }]);
})();