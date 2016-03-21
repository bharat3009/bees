/**
 * Created by SMIT on 21-11-2015.
 */
'use strict';

feedbackControllers.controller('loginController', ['$scope', '$window', '$http', 'login', 'addSession',
    function ($scope, $window, $http, login, addSession) {
        $scope.myLogin = function () {
            $.loader({
                className: "blue-with-image-2",
                content: ''
            });
            login.get({username: $scope.username, password: $scope.password}, function (response) {
                if (response.message == "GA_TRANSACTION_OK") {
                    $.loader('close');
                    addSession.save(response, function () {
                            $window.location.href = "#/home";
                        }
                    );
                }
                else if(response.message == "GA_AUTH_FAILED") {
                    $.loader('close');
                    $.toaster({
                        priority: "danger",
                        title: "Message",
                        message: "Username or Password is incorrect",
                        position:""
                    });
                }
            }, function () {
                $.loader('close');
                $.toaster({priority: "danger", title: "Message", message: "Please enter username or password"});
            });
        };
    }]);