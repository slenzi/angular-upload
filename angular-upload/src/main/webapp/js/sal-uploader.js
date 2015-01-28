/*
Angular HTTP upload module
-sal
*/

/*
Sample application to test sal-uploader module
-sal
*/

(function () {
	
	'use strict';
	
	var salUploadModule;
	
	// create module named 'salUpload'
	salUploadModule = angular.module('salUpload',[]);
	
	// set default options
	salUploadModule.value('uploadOptions', {
		url: '/',
		progress: 0,
		method: 'POST',
		formData: [],
		headers: {}
	});
	
})();