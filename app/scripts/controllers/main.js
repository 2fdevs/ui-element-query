'use strict';

/**
 * @ngdoc function
 * @name uiElementQueryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiElementQueryApp
 */
angular.module('uiElementQueryApp')
	.controller('MainCtrl', function ($scope) {
		$scope.queries = [
			{
				"query": "width < 480",
				"class": "mobile"
			},
			{
				"query": "width >= 480 && width < 768",
				"class": "tablet-portrait"
			},
			{
				"query": "width >= 768 && width < 1024",
				"class": "tablet-landscape"
			},
			{
				"query": "width >= 1024",
				"class": "desktop"
			}
		]
	});
