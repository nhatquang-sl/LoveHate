(function () {
    loveHateApp.factory('searchImageService', [function () {
        var imageSearch
            , numResultPerPage = 8
            , searchImageService = {}
            , initSearch = function () {
                imageSearch = new google.search.ImageSearch();
                imageSearch.setRestriction(
                    google.search.ImageSearch.RESTRICT_IMAGESIZE,
                    google.search.ImageSearch.IMAGESIZE_MEDIUM);
                imageSearch.setSearchCompleteCallback(this, searchComplete, null);
                imageSearch.setResultSetSize(numResultPerPage);
            }
            , searchComplete = function () {
                searchImageService.searchResult = searchImageService.searchResult.concat(imageSearch.results);
                if (imageSearch.cursor.currentPageIndex + 1 == 8) {
                    searchImageService.searchComplete();
                } else {
                    imageSearch.gotoPage(imageSearch.cursor.currentPageIndex + 1);
                }
            };
        searchImageService = {
            searchResult: []
            , initService: function () {
                google.load("search", "1", {"callback": initSearch, "language": "en"});
            }
            , searchComplete: function () {
            }
            , search: function (searchInput) {
                if (searchInput != undefined && searchInput != "") {
                    imageSearch.execute(searchInput);
                }
            }
        };
        return searchImageService;
    }]);

})();