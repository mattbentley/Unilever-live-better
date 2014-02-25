
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
        .when("/question-one", {
            templateUrl: "Scripts/Templates/q1-template.html",
            controller: "QuestionOneController"
        })
        .when("/question-two", {
            templateUrl: "Scripts/Templates/q2-template.html",
            controller: "QuestionTwoController"
        })
        .when("/question-three", {
            templateUrl: "Scripts/Templates/q3-template.html",
            controller: "QuestionThreeController"
        })
        .when("/question-four", {
            templateUrl: "Scripts/Templates/q4-template.html",
            controller: "QuestionFourController"
        })
        .when("/question-five", {
            templateUrl: "Scripts/Templates/q5-template.html",
            controller: "QuestionFiveController"
        })
        .when("/question-six", {
            templateUrl: "Scripts/Templates/q6-template.html",
            controller: "QuestionSixController"
        })
        .when("/question-seven", {
            templateUrl: "Scripts/Templates/q7-template.html",
            controller: "QuestionSevenController"
        })
        .when("/results", {
            templateUrl: "Scripts/Templates/results-template.html",
            controller: "ResultsController"
        })
        .otherwise({
            template: "<h1>http 404: not found</h1>"
        });
});