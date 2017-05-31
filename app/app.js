"use strict";

var app = angular.module("IceCreamApp", ['ngRoute']);


 app.config(function($routeProvider){
 	$routeProvider.
 	when('/', {
 		templateUrl: 'partials/greetings.html'
 	}).
 	when('/showall', {
 		templateUrl: 'partials/flavor-list.html',
 		controller: 'FlavorCtrl'
 	}).
 	otherwise('/');
 });