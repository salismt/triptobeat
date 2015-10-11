var appName = 'triptobeat';

var app = angular.module(appName, ['ngResource','ngRoute', 'main', 'posts']);

app.config(['$locationProvider', function ($locationProvider) {
	$locationProvider.hashPrefix('!');
}]);

angular.element(document).ready(function () {
	angular.bootstrap(document, [appName]);
});