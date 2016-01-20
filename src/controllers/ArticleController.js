bloodapp.controller('articleController',['$scope','$location','Article','Page',function($scope,$location,Article,Page){
	
	$scope.message="Aricle";
	$scope.metatitle="Aricle";
	
	
	Page.setTitle("Articles");


	articleno=$location.search();
	// console.log(articleno);
	arr_articles=Article.getArticels("js/Articles.json");
	
	arr_articles.then(function(data){
		//console.log(data.data);
	});
	
}]);