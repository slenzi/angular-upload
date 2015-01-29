/*
Sample application to test sal-uploader module
-sal
*/

(function () {
	
	'use strict';

	var myApp;
	
	// create sample app with dependency on salUpload module
	myApp = angular.module('myApp', ['salUpload'])

	.controller('TestController', ['$scope', 'FileUploader', function($scope, FileUploader) {

		var myUploader = $scope.uploader = new FileUploader({
            url: '/fu/bar/upload-handler.jsp'
        });
		
		$scope.debugTest = function() {

			console.info("TestController debugTest.");
			
			console.info('myUploader', myUploader);
			
		};
			
	}]);
	
})();