var loveHateApp = angular.module('loveHateApp', ['ngRoute', 'ngBootbox']);
loveHateApp.config(function ($routeProvider) {
    $routeProvider
        .when("/search",
        {
            templateUrl: "templates/search.html"
            , controller: "searchController"
        })
        .otherwise({
            redirectTo: "/search"
        })
});