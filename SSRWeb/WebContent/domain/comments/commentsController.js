/**
 * Created by SMIT on 21-11-2015.
 */
'use strict';

feedbackControllers.controller('commentsController', ['$scope', '$window', '$http', 'getSession', 'comments', 'filterFilter',
    function ($scope, $window, $http, getSession, comments, filterFilter) {

        $.loader({
            className: "blue-with-image-2",
            content: ''
        });

        var d = new Date();
        var n = d.getTimezoneOffset();
        var opposite;
        if (n < 0) {
            opposite = Math.abs(n);
        } else {
            opposite = -Math.abs(n);
        }

        getSession.get(function (response) {
            $scope.userId = response.data.userId;
            comments.get({userId: $scope.userId, userTime: opposite}, function (data) {
                    $.loader('close');
                   /* $scope.items = data.data; */
                   /* var a = [];
                    angular.forEach(data.data, function(value, key){
                        a.push({
                            commentDate:"<a href='#/commentsDetail?commentId="+value.commentId+"'>"+value.commentDate+"</a>",
                            commentsDetail:value.commentsDetail,
                            filepath:"<img src='http://feedbacktool-env.elasticbeanstalk.com/"+ value.filepath+"' style='max-height:30px'/>"
                        })
                    });
                    $('#example').DataTable( {

                        "aaData": a,
                        "aoColumns": [
                            { "mData": "commentDate" },
                            { "mData": "commentsDetail" },
                            { "mData": "filepath" }
                        ]
                    } );*/
                    var a = [];
                    angular.forEach(data.data, function(value, key){

                        var sub = value.filepath.split(".");
                        var file;


                        if(sub[1] == "jpg" || sub[1] == "png" || sub[1] == "jpeg" || sub[1] == "gif"){
                            file = "<img src='http://localhost:8088/SSR/"+ value.filepath+"' style='max-height:70px'/>"
                        }
                        else{
                            /* file = "<video src='http://feedbacktool-env.elasticbeanstalk.com/"+ value.filepath+"' height='100' autoplay></video>"*/
                            file = " <video width='150' controls>  <source src='http://localhost:8088/SSR/"+ value.filepath+"'></video>"
                        }

                        a.push({
                            commentDate:"<a href='#/commentsDetail?commentId="+value.commentId+"'>"+value.commentDate+"</a>",
                            commentsDetail:value.commentsDetail,
                            filepath: file
                        });
                    });
                    $('#example').DataTable( {

                        "aaData": a,
                        "aoColumns": [
                            { "mData": "commentDate" },
                            { "mData": "commentsDetail" },
                            { "mData": "filepath" }
                        ],
                        //"order": [[ 0, "asc" ]]//ascending ordering
                        "aaSorting": [[ 0, "desc" ]],//descending ordering,
                        "bDestroy": true
                    } );


                    $scope.currentPage = 1;
                    $scope.totalItems = $scope.items.length;
                    $scope.entryLimit = 8; // items per page
                    $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

                    $scope.$watch('searchText', function (newVal, oldVal) {
                        $scope.filtered = filterFilter($scope.items, newVal);
                        $scope.totalItems = $scope.filtered.length;
                        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
                        $scope.currentPage = 1;
                    }, true);

                },
                function () {
                    alert("error");
                });
        });
    }]);


