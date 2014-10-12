/**
 * @ngdoc directive
 * @name fccForm.directive:fcc-element-query
 * @function
 * @restrict E
 *
 * @descriptionExecuted
 * Establece clases automáticamente según el tamaño del elemento
 */
"use strict";
angular.module('com.2fdevs.ui.elementQuery', [])
	.service('uiWindowResize',
	["$window", "$rootScope", function ($window, $rootScope) {
		var win = angular.element($window);

		this.init = function() {
			win.bind("resize", this.onResize);
		};

		this.onResize = function() {
			$rootScope.winSize = {
				'h': win.height(),
				'w': win.width()
			};
			$rootScope.$apply();
		};
	}])
	.directive('uiElementQuery',
	["$rootScope", function($rootScope) {
		return {
			restrict: "A",
			replace: false,
			scope: {
				uiElementQuery: "="
			},
			link: function(scope, elem, attr) {
				var className;
				var l = scope.uiElementQuery.length;

				function onResizeElement() {
					var w = elem.outerWidth();

					for (var i=0; i<l; i++) {
						var conditional = scope.uiElementQuery[i].query.replace(/width/g, w);

						if (eval(conditional)) {
							setElementQuery(scope.uiElementQuery[i].class);
						}
						else {
							elem.removeClass(scope.uiElementQuery[i].class);
						}
					}
				}

				function setElementQuery(elemClass) {
					if (className) elem.removeClass(className);

					className = elemClass;

					elem.addClass(className);
				}

				elem.ready(onResizeElement);

				scope.$watch(
					function() {
						return $rootScope.winSize;
					},
					function(newVal, oldVal) {
						onResizeElement();
					}
				);
			}
		};
	}]
);
