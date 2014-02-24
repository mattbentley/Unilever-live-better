/// <reference path="Libraries/angular.min.js" />
/// <reference path="Libraries/angular-animate.min.js" />
/// <reference path="Libraries/angular-touch.min.js" />
/// <reference path="Libraries/angular-route.min.js" />

var ulbApp = angular.module("ulb.app", ['ngRoute', 'ngAnimate', 'ngTouch']);

/* Route
===========================================================================================================================
===========================================================================================================================*/

ulbApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Scripts/Templates/home-template.html",
            controller: "HomeController"
        })
        .otherwise({
            template: "<h1>http 404: not found</h1>"
        });
});