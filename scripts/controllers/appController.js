"use strict";

angular.module('PowStartedApp')
	.controller('appController', ['$scope', '$timeout', function ($scope, $timeout){
		console.log('appController', 'start', true);

		/*$timeout(function (){
			gmaps.init();
		});
		
		$scope.request  = function (){
			var GLatLng = new google.maps.LatLng(gmaps.map.getCenter().lat, gmaps.map.getCenter().lng);
			var des = prompt('Enter an address : ')
			gmaps.getDirectionByGeoCode(GLatLng, des);
		}*/
	}])

	 