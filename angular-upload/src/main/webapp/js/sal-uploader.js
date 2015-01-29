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
	.factory('FileUploader', ['fileUploaderOptions', '$http',
	    
	    /**
	     * Factory method which returns FileUploader object prototype.
	     */                      
	    function fileUploaderFactory(fileUploaderOptions, $http){
			
			/**
			 * Create instance of FileUploader from object prototype.
			 * 
			 * @param {Object} [options]
			 * @constructor
			 */
			function FileUploader(options){
				var defaultOptions = angular.copy(fileUploaderOptions);
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
			
			// return object prototype
			return FileUploader;
			
		}
	]);
	
	return salUploadModule;
	
})();