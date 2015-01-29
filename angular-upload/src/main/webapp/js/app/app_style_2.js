/*
Sample application to test salUploader module
-sal
*/

(function () {

	'use strict';

	/**
	 * Controller for testing salUploader
	 */
	var MyTestController = function($scope, FileUploader){

		var _this = this;

		/**
		 * Create new instance of FileUploader, attach to scope using name 'myUploader'
		 */
		var myUploaderObj = $scope.myUploader = new FileUploader({
            url: '/fu/bar/upload-handler.jsp'
        });

        this.getFileUploader = function(){
        	return myUploaderObj;
        };

		$scope.debugTest = function(){
			_this.debugTest();
		};
	};

	MyTestController.prototype.debugTest = function(){

		console.info("TestController debugTest.");

		var uploader = this.getFileUploader();

		console.info('hello: ', uploader.hello());
		console.info('uploader: ', uploader);
		console.info('is HTML5 supported: ', uploader.isHTML5);

	};

	// inject $scope and FileUploader into controller
	MyTestController.$inject = ['$scope','FileUploader'];

	// create app with dependency on salUpload, use our test controller
	angular.module('myApp', ['salUpload']).controller('TestController', MyTestController);

})();
