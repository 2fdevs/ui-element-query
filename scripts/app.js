'use strict';

/**
 * @ngdoc overview
 * @name uiElementQueryApp
 * @description
 * # uiElementQueryApp
 *
 * Main module of the application.
 */
angular
	.module('uiElementQueryApp', [
		'ngRoute',
		'com.2fdevs.ui.elementQuery'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
	.run(function(uiWindowResize) {
		uiWindowResize.init();
	});
