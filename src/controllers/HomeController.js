bloodapp.controller('homecontroller',['$scope','$location',function($scope,$location){

	$scope.message="This is home";
	$scope.metatitle="Myanmar Blood Info";
	var searchObject = $location.search();

	console.log(searchObject);

	
  

}]);
