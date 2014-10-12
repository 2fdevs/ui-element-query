ui-element-query
=========

Element queries are a real need in modern web apps.

This is an experiment to bring element-queries to AngularJS to set classes from a bindable object.

Usage
----

Add the JS file to your index:

```html
<script src="scripts/com/2fdevs/ui/elementQuery/uiElementQuery.js"></script>
```

Add the module in the initialization of your application:

```javascript
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
	});
```

Start listening any window resizement in your run block:

```javascript
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
```

Create your rules in your controller and pass them to your element through an attribute directive

```javascript
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
```

```html
<div class="jumbotron" ui-element-query="queries">
	<h1 class="only-mobile">Mobile</h1>
	<h1 class="only-tablet-portrait">Tablet Portrait</h1>
	<h1 class="only-tablet-landscape">Tablet Landscape</h1>
	<h1 class="only-desktop">Desktop</h1>
</div>
```

Create your custom classes in CSS:

```css
.jumbotron.mobile .only-mobile {
    display: block; }
  .jumbotron.mobile .only-tablet-portrait {
    display: none; }
  .jumbotron.mobile .only-tablet-landscape {
    display: none; }
  .jumbotron.mobile .only-desktop {
    display: none; }
    
  .jumbotron.tablet-portrait .only-mobile {
    display: none; }
  .jumbotron.tablet-portrait .only-tablet-portrait {
    display: block; }
  .jumbotron.tablet-portrait .only-tablet-landscape {
    display: none; }
  .jumbotron.tablet-portrait .only-desktop {
    display: none; }
    
  .jumbotron.tablet-landscape .only-mobile {
    display: none; }
  .jumbotron.tablet-landscape .only-tablet-portrait {
    display: none; }
  .jumbotron.tablet-landscape .only-tablet-landscape {
    display: block; }
  .jumbotron.tablet-landscape .only-desktop {
    display: none; }
    
  .jumbotron.desktop .only-mobile {
    display: none; }
  .jumbotron.desktop .only-tablet-portrait {
    display: none; }
  .jumbotron.desktop .only-tablet-landscape {
    display: none; }
  .jumbotron.desktop .only-desktop {
    display: block; }
```

Resize your window and see how the class is applied.

You have a demo at /app/index.html

License
----

MIT
