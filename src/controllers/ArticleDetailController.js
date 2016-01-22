humanright_app.controller('articleDetailController',['$scope','$location','Article','Page','$window',function($scope,$location,Article,Page,$window){
	
	
	
	
	
	


	article=$location.search();

	if(article.id){
		
		Page.setTitle("Human Rights Article "+parseInt(article.id));
		arr_index=parseInt(article.id);

		arr_articles=Article.getArticels("js/Articles.json");
			arr_articles.then(function(data){
				/*Getting the title and Description from 
				article arry by index
				*/

					$scope.title=data.data[arr_index-1].title;

					$scope.description=data.data[arr_index-1].description;

					
		});
	}else{
		$window.location.href = '#err';
	}
	

	


	// console.log(articleno);
	
	
	
	
}]);
