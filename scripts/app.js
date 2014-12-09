angular.module('Pow', [])


.config(['$locationProvider', function ($locationProvider){
	
}])

.run( ['$rootScope', function ($rootScope){
	console.log('Run');
}])

