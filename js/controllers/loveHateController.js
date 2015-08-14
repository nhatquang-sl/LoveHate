(function () {
    loveHateApp.controller('loveHateController', ['$scope'
        , function ($scope) {
            $scope.util = {
                isLoading: false
                , isShowModal: false
                , modalContent: "menune"
                , showModalContent: function (content) {
                    if (content == $scope.util.content) return true;
                    return false;
                }
            };
            $scope.test = "test ne";
        }]);
})();
