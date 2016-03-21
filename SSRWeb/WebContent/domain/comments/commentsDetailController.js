/**
 * Created by SMIT on 21-11-2015.
 */
'use strict';

feedbackControllers.controller('commentsDetailController', ['$scope', '$location', '$window', '$http', 'getSession', 'commentsDetail',
    function ($scope, $location, $window, $http, getSession, commentsDetail) {
        $scope.userId;
        $.loader({
            className: "blue-with-image-2",
            content: ''
        });

        var d = new Date();
        var n = d.getTimezoneOffset();
        var opposite;
        if(n < 0) {
            opposite = Math.abs(n);
        }else {
            opposite = -Math.abs(n);
        }

        getSession.get(function (response) {
            $scope.userId = response.data.userId;
            var commentObj = $location.search();
            var commentId = commentObj.commentId;

            commentsDetail.get({commentId: commentId, userTime:opposite}, function (data) {
                    $.loader('close');
                    $scope.commentsData = data.data;
                    var sub = $scope.commentsData.filepath.split(".");
                    var file;
                    if(sub[1] == "jpg" || sub[1] == "png" || sub[1] == "jpeg" || sub[1] == "gif"){
                        file = "<div class='zoom_img'><img src='http://localhost:8088/SSR/"+ $scope.commentsData.filepath+"' style='max-height:100px'/></div>"
                    }
                    else{
                        /* file = "<video src='http://feedbacktool-env.elasticbeanstalk.com/"+ value.filepath+"' height='100' autoplay></video>"*/
                        file = " <video width='300' controls><source src='http://localhost:8088/SSR/"+ $scope.commentsData.filepath+"' ></video>"
                    }
                    /*var vid = document.getElementById("myVideo");
                    vid.src = "http://feedbacktool-env.elasticbeanstalk.com/"+$scope.commentsData.filepath;*/

                   $("#myVideo").append(file);
                },
                function () {
                    alert("error");
                });
        });
    }]);