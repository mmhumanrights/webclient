ArticleServices = angular.module('articleServices', ['ngResource']);

ArticleServices.factory('Article', ['$http',
  function($http){
    return {

           getArticels : function(localJSONPath){
              return $http.get(localJSONPath) // path of the json file
           }
       };

 
    
  }]);