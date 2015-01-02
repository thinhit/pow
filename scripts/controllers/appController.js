"use strict";

angular.module('SudaTaxi')
	.controller('appController', ['$scope', '$timeout', 'gmaps', function ($scope, $timeout, gmaps){
		console.log('appController', 'start', true);

		$timeout(function (){
			gmaps.init();
		});
		
		$scope.request  = function (){
			var GLatLng = new google.maps.LatLng(gmaps.map.getCenter().lat, gmaps.map.getCenter().lng);
			var des = prompt('Enter an address : ')
			gmaps.getDirectionByGeoCode(GLatLng, des);
		}
	}])

	 