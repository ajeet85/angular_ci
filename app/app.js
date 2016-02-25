angular.module("clocks", [
		'ngRoute'
	])
	.config(['$routeProvider', function($routeProvider) {
										
		$routeProvider.when("/", {		
			templateUrl: "app/views/welcome.html",
			controller: 'clockCtrl',
			css: ['css/font-awesome.css','css/style_myaccount.css']
		});
		$routeProvider.when("/add-new/", {
			templateUrl: "app/views/new-project.html"
		});
		$routeProvider.when("/project/:id", {
			templateUrl: "app/views/view-project.html"
		});
	}]);
