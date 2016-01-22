humanright_app.controller('articleController',['$scope','$location','Article','Page',function($scope,$location,Article,Page){
	
	$scope.message="Aricle";
	$scope.metatitle="Article";
	
	
	Page.setTitle("Articles");


	article=$location.search();

	
	arr_articles=Article.getArticels("js/Articles.json");
			arr_articles.then(function(data){
					
					var arr_clone=new Array();
					//console.log(data.data);
					for(index in data.data){
						//console.log(index);
						data.data[index].id=parseInt(index)+1;
						
						
						
					}

					console.log(data.data);
					

				$scope.article_list=data.data;


	});


	// console.log(articleno);
	
	
	
	
}]);


