humanright_app.controller('articleController',['$scope','$location','Article','Page',function($scope,$location,Article,Page){
	
	$scope.message="Aricle";
	$scope.metatitle="Aricle";
	
	
	Page.setTitle("Articles");


	article=$location.search();

	$scope.DetailClick = function (id) {
            $scope.modal_id = parseInt(id);
    }

	if(article){
		if(article.title){
			articleSelection(article.title);
		}else{
			arr_articles=Article.getArticels("js/Articles.json");
			arr_articles.then(function(data){
				$scope.article_list=data.data;
			});
		}
	}


	// console.log(articleno);
	
	
	
	
}]);


function articleSelection(title){
	switch(title){
		case "1": console.log(1); break;
		case "2": console.log(2); break;
		case "3": console.log(3); break;
		case "4": console.log(4); break;
		case "5": console.log(5); break;
		default: console.log(1); break;
	}
}