humanright_app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/home.html',
                controller  : 'homecontroller'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'views/about.html',
                controller  : 'aboutController'
            })

            .when('/donators',{
                templateUrl:'views/donators.html',
                controller: 'donatorcontroller'
            })

            .when('/articles',{
                templateUrl:'views/article.html',
                controller: 'articleController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'views/contact.html',
                controller  : 'contactController'
            });
    });
//To get Query String Parameter 
humanright_app.config(['$locationProvider',function($locationProvider){
    $locationProvider.html5Mode( false );
}]);