humanright_app.controller('articleDetailController',['$scope','$location','Article','Page','$window',function($scope,$location,Article,Page,$window){
	
	
	
	
	
	
		

	article=$location.search();

	if(article.id){
		
		

		arr_index=parseInt(article.id);
		
		arr_articles=Article.getArticels("js/Articles.json");
			arr_articles.then(function(data){
				/*Getting the title and Description from 
				article arry by index
				*/	metatitle=data.data[arr_index-1].title;

					$scope.title=data.data[arr_index-1].title;
					

					$scope.description=data.data[arr_index-1].description;
					metadescription=data.data[arr_index-1].description;

					Page.setTitle("Human Rights Article "+parseInt(article.id));
					Page.setMetaTitle("လူ့အခွင့်အရေးကြေငြာစာတမ်း အပိုဒ် "+metatitle);
					Page.setMetaDescription(metadescription);

					
		});
		
		
		
		
	}else{
		$window.location.href = '#err';
	}
	

	


	// console.log(articleno);
	
	
	
	
}]);
