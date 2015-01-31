/*
Angular HTTP upload module
-sal
*/

(function () {

	'use strict';

	var salUploadModule;

	// create module named 'salUpload'
	salUploadModule = angular.module('salUpload', []);

	// set default options
	salUploadModule.value('fileUploaderOptions', {
		url: '/',
		progress: 0,
		method: 'POST',
		formData: [],
		headers: {}
	})
	.factory('FileUploader', ['fileUploaderOptions', '$http', '$window',

	    /**
	     * Factory method which returns FileUploader object prototype.
	     */
	    function fileUploaderFactory(fileUploaderOptions, $http, $window){

			/**
			 * Create instance of FileUploader from object prototype.
			 *
			 * @param {Object} [options]
			 * @constructor
			 */
			function FileUploader(options){
				var defaultOptions = angular.copy(fileUploaderOptions);
				// extend this object with default options and user provided options
				angular.extend(this, defaultOptions, options);
			}

			/**
			 * Produces a simple hello message.
			 *
			 * @returns {String}
			 */
			FileUploader.prototype.hello = function(){
				return 'Hello, use are using ' + this.constructor.name + '. Have a nice day.';
			};

			FileUploader.prototype.isHTML5 = !!($window.File && $window.FormData);

			// return object prototype
			return FileUploader;

		}
	])
	.directive('salUploadDebug', ['FileUploader', function(FileUploader) {
		return {

			/*
			'A' - Attribute - <span ng-sparkline></span>
			'E' - Element   - <ng-sparkline></ng-sparkline>
			'C' - Class     - <span class="ng-sparkline"></span>
			'M' - Comments  - <!-- directive: ng-sparkline -->
			 */
			restrict: 'E',
			replace: true,
			scope: {
				uploaderObj: '=uploader'
			},
			template: '<span> {{ uploaderObj }} </span>'
		};
	}])
	.directive('myWatchDirective', function() {
		function myLink(scope, element, attrs){
			scope.$watch(attrs.ngModel,function(value){
				console.log('Value has changed, new value is: ' + value);
			});
		};
		return {
			restrict: 'A',
			link: myLink
		};
	})
	.directive('salUploadFileSelect', ['$parse','FileUploader', function($parse, FileUploader) {
		return {

			/*
			'A' - Attribute - <span ng-sparkline></span>
			'E' - Element   - <ng-sparkline></ng-sparkline>
			'C' - Class     - <span class="ng-sparkline"></span>
			'M' - Comments  - <!-- directive: ng-sparkline -->
			*/
			restrict: 'A',

			/*
			element - jQlite object
			*/
			link: function($scope, element, attributes) {

				var elm = element[0]; // convert angular jQlite element to raw DOM element

				// get reference to FileUploader object
				var uploader = $scope.$eval(attributes.uploader);

				if (!(uploader instanceof FileUploader)) {
					throw new TypeError('Uploader must be an instance of FileUploader');
				}
				
				console.log('typeof(element) = ' + typeof(element));
				console.log('element.html() = ' + element.html());
				console.log('elm.nodeName = ' + elm.nodeName);
				console.log('attributes.uploader = ' + attributes.uploader);
				console.log('Uploader is HTML 5 = ' + uploader.isHTML5);
				
				element.bind('change',function(){
					alert('files changed');
				});
			}
		};
	}]);

	return salUploadModule;

})();
