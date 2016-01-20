bloodapp.config(function($routeProvider) {
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

            .when('/articles?portfolioId',{
                templateUrl:'views/article.html',
                controller: 'homecontroller'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'views/contact.html',
                controller  : 'contactController'
            });
    });

bloodapp.config(['$locationProvider',function($locationProvider){
    $locationProvider.html5Mode( false );
}]);