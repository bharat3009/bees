var feedbackApp = angular.module('myApp', ['ngRoute', 'myControllers', 'myServices', 'ngFileUpload', 'ui.bootstrap']);

feedbackApp.constant('userConst', 'http://localhost:8088/SSR/user/');
feedbackApp.constant('commentConst', 'http://localhost:8088/SSR/comments/');
feedbackApp.constant('areaConst', 'http://localhost:8088/SSR/area/');

feedbackApp.config(['$routeProvider',

    function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'domain/login/login.php',
                controller: 'loginController'
            }).
            when('/comments', {
                templateUrl: 'domain/comments/comments.php',
                controller: 'commentsController'
            }).
            when('/commentsDetail', {
                templateUrl: 'domain/comments/commentsDetail.php',
                controller: 'commentsDetailController'
            }).
            when('/home', {
                templateUrl: 'domain/comments/home.php',
                controller: 'homeController'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }])
    .run(function ($rootScope, $location, getSession) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.authenticated = false;
            getSession.get(function (results) {
                if (results.SESSION != "NOSESSION") {
                    if (results.data.userId != null) {
                        $rootScope.authenticated = true;
                    }
                }
                    else {
                        var nextUrl = next.$$route.originalPath;
                        if (nextUrl == '/login') {
                        }
                        else {
                            $location.path("/login");
                        }
                    }
            });
        });
    });

feedbackApp.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start;
            return input.slice(start);
        }
        return [];
    };
});

var feedbackControllers = angular.module('myControllers', []);

var feedbackServices = angular.module('myServices', ['ngResource']);
