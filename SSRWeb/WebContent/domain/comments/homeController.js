/**
 * Created by SMIT on 23-11-2015.
 */
'use strict';

feedbackControllers.controller('homeController', ['$scope', 'Upload', '$timeout', '$window', '$http', 'getSession', 'addComments', 'uploadFile', 'getallmaincommentsbyarea','getallmaincommentsbyuser', 'areaValues',
    function ($scope, Upload, $timeout, $window, $http, getSession, addComments, uploadFile, getallmaincommentsbyarea,getallmaincommentsbyuser, areaValues) {

        var filePath;
        var userIds;
        var areaIds;
        var homeComments;
        $scope.commentsDataOne = "";
        $scope.commentsData = "";
        $.loader({
            className: "blue-with-image-2",
            content: ''
        });
        var typo = [];
        var d = new Date();
        var n = d.getTimezoneOffset();
        var opposite;
        if (n < 0) {
            opposite = Math.abs(n);
        } else {
            opposite = -Math.abs(n);
        }
        getSession.get(function (response) {
            userIds = response.data.userId;
            areaIds = response.data.areaId;
            $scope.getCommentData(areaIds, opposite);
            $scope.getAreaData();
            /*$scope.userIDs = "";
             var filePath;
             var commentDate;
             var commentDetail;
             var commentId;
             $scope.sampleProduct = [];

             $.loader({
             className: "blue-with-image-2",
             content: ''
             });

             getSession.get(function (response) {
             $scope.userIDs = response.data.userId;
             comments.get({userId: $scope.userIDs}, function (data) {
             $scope.dataComments = data.data;
             $scope.commentData = [];
             if (data.message == "GA_TRANSACTION_OK") {
             $.loader('close');
             angular.forEach($scope.dataComments, function (value, key) {
             $scope.commentData.push(value);
             commentId = $scope.commentData[key].commentId;
             commentDate = $scope.commentData[key].commentDate;
             commentDetail = $scope.commentData[key].commentsDetail;

             $scope.sampleProduct.push({
             "commentDate": "<a href='#/commentsDetail?commentId=" + commentId + "'>" + commentDate + " </a>",
             "commentDetail": commentDetail
             });
             });
             $scope.sampleProductCategories = $scope.sampleProduct;
             }
             else {
             $.loader('close');
             }
             });
             });

             $scope.myCallback = function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {

             $('td:eq(0)', nRow).bind('click', function () {
             alert();
             $scope.$apply(function () {

             $scope.someClickHandler(aData);
             });
             });
             return nRow;
             };

             $scope.someClickHandler = function (info) {
             $scope.message = 'clicked: ' + info.commentDate;
             };

             $scope.columnDefs = [
             {"mDataProp": "commentDate", "aTargets": [0]},
             {"mDataProp": "commentDetail", "aTargets": [1]}
             ];

             $scope.overrideOptions = {
             "bStateSave": true,
             "iCookieDuration": 2419200, /!* 1 month *!/
             "bJQueryUI": true,
             "bPaginate": true,
             "bLengthChange": false,
             "bFilter": true,
             "bInfo": true,
             "bDestroy": true
             };*/

            $scope.uploadFiles = function (file, errFiles) {
                $('#submitBtnClick').attr('disabled', true);
                $scope.f = file;
                $scope.errFile = errFiles && errFiles[0];
                if (file) {
                    file.upload = Upload.upload({
                        url: 'http://localhost:8088/SSR/comments/uploadfile?file=',
                        data: {file: file}
                    }).then(function (response) {
                        //alert('Success ' + response.config.data.file.name + ' uploaded. Response: ' + JSON.stringify(response.data));
                        console.log(response);
                        filePath = response.data.data.filepath;
                        $('#submitBtnClick').attr('disabled', false);

                    });

                    file.upload.then(function (response) {
                        $timeout(function () {
                            file.result = response.data;
                        });
                    }, function (response) {
                        if (response.status > 0)
                            $scope.errorMsg = response.status + ': ' + response.data;
                    }, function (evt) {
                        file.progress = Math.min(100, parseInt(100.0 *
                            evt.loaded / evt.total));
                    });
                }
                else {
                }
            }, function () {
                alert();
            }
            
            $scope.submitData = function () {
                $.loader({
                    className: "blue-with-image-2",
                    content: ''
                });
                console.log($scope.commentarea)
                console.log($("#commentsData").val());
                if (filePath) {
                    addComments.save({
                        comments: $("#commentsData").val(),
                        filePath: filePath,
                        userId: userIds,
                        areaId: areaIds
                    }, function (data) {
                        if (data.message == "GA_TRANSACTION_OK") {
                            $("#commentsData").val("");
                            $("#submitClick").val("");
                            $.toaster({priority: "success", title: "Success", message: "Comment Added"});
                            $scope.getCommentData(areaIds, opposite);
                        }
                        else if (data.message == "GA_MANDATORY_PARAMETERS_NOT_SET") {
                            $.loader('close');
                            $.toaster({priority: "danger", title: "Message", message: "Please Add comment"});
                        }
                        else {
                            $.loader('close');
                            $.toaster({priority: "danger", title: "Message", message: "File not uploaded"});
                        }
                    }, function () {
                        $.loader('close');
                        $.toaster({priority: "danger", title: "Message", message: "Something Went Wrong"});
                    });
                } else {
                    addComments.save({
                        comments: $("#commentsData").val(),
                        filePath: "comments/NoImage.jpg",
                        userId: userIds,
                        areaId: areaIds
                    }, function (data) {
                        if (data.message = "GA_TRANSACTION_OK") {
                            $("#commentsData").val("");
                            $("#submitClick").val("");
                            //$.toaster({priority: "success", title: "Success", message: "File Uploaded"});
                            $scope.getCommentData(areaIds, opposite);
                        }
                        else if (data.message = "GA_MANDATORY_PARAMETERS_NOT_SET") {
                            $.loader('close');
                            //$.toaster({priority: "danger", title: "Message", message: "Please Add comment"});
                        }
                        else{
                            $.loader('close');
                            //$.toaster({priority: "danger", title: "Message", message: "File not uploaded"});
                        }
                    }, function () {
                        $.loader('close');
                        $.toaster({priority: "danger", title: "Message", message: "Something Went Wrong"});
                    });
                }
            }

            $scope.reset = function () {
                $("#commentsData").val("");
                $("#submitClick").val('');
                $window.location.reload();
            }


        });
        
        var a = [];
        $scope.getAreaData = function(){
            console.log("inseide area");
            areaValues.get(function(data){
                console.log(data);
            $.loader('close');
            $scope.areaValues = data.data;
            angular.forEach($scope.areaValues,function(values){
                console.log(values)
                typo.push({
                    "value" : values.areaValue,
                    "id" : values.areaId
                });
            });
            
            $('#areasearch').typeahead({
                name : 'asearch',
                local : typo
            }).on('typeahead:selected',function(a,b){
                    console.log("selected area is " + a + "id" + b);
            });
          });
        }

        var a = [];
        $scope.getCommentData = function (areaIds, opposite) {
            getallmaincommentsbyarea.get({areaId: areaIds, userTime: opposite}, function (data) {
                $.loader('close');
                $scope.commentsDataOne = data.data;

                angular.forEach($scope.commentsDataOne, function (value) {
                    typo.push({
                        "value":value.commentsDetail,
                        "id":value.commentId
                    });
                });

                $('#mysearch').typeahead({
                    name: 'search',
                    local: typo
                }).on('typeahead:selected', function (a, b) {
                    $window.location.href = "#/commentsDetail?commentId=" + b.id;
                });

                var a = [];
                angular.forEach(data.data, function (value, key) {

                    var sub = value.filepath.split(".");
                    var file;
                    if (sub[1] == "jpg" || sub[1] == "png" || sub[1] == "jpeg" || sub[1] == "gif") {
                        file = "<img src='C:/Users/venkatabharat/git/bee/SSR/" + value.filepath + "' style='max-height:100px'/>"
                    }
                    else {
                        /* file = "<video src='http://feedbacktool-env.elasticbeanstalk.com/"+ value.filepath+"' height='100' autoplay></video>"*/
                        file = " <video width='150' controls><source src='http://localhost:8088/SSR/" + value.filepath + "' ></video>"
                    }

                    a.push({
                        commentDate: "<a href='#/commentsDetail?commentId=" + value.commentId + "'>" + value.commentDate + "</a>",
                        commentsDetail: value.commentsDetail,
                        filepath: file
                    });
                });
                $('#example').DataTable({

                    "aaData": a,
                    "aoColumns": [
                        {"mData": "commentDate"},
                        {"mData": "commentsDetail"},
                        {"mData": "filepath"}
                    ],
                    //"order": [[ 0, "asc" ]]//ascending ordering
                    "aaSorting": [[ 0, "desc" ]],//descending ordering,
                    "bDestroy": true
                });

                /* angular.forEach($scope.dataComments, function(value){
                 typo.push(value.commentsDetail);
                 });
                 $('#mysearch').typeahead({
                 name: 'search',
                 local: typo
                 }).on('typeahead:selected', function(){
                 $window.location.href = 'hi.html';
                 });*/
            });

        }
        
        $scope.homeshow = function(){
            $scope.homeshowpar = true;
            $scope.globalshowpar = false;
            $scope.historyshowpar = false;
            var mycomments = getallmaincommentsbyarea.get({areaId: areaIds, userTime: opposite}, function(data){
                $scope.commentsDataOne = data.data;
            });
        }
        
         $scope.historyshow = function(){
            $scope.homeshowpar = false;
            $scope.globalshowpar = false;
            $scope.historyshowpar = true;
            var mycomments = getallmaincommentsbyuser.get({userId: userIds, userTime: opposite}, function(data){
                $scope.commentsDataOne = data.data;
            });
             
             console.log($scope.dataComments);
           /* $scope.getHistoryHives=function(){   
                console.log("insdie funcitonssss");
                getallmaincommentsbyuser.get({userId: userIds, userTime: opposite}, function (data){
                    $scope.datacomments = data.data;
                })
                }*/
        }
         
          $scope.globalshow = function(){
            $scope.homeshowpar = false;
            $scope.globalshowpar = true;
            $scope.historyshowpar = false;
        }

        jQuery.extend( jQuery.fn.dataTableExt.oSort, {
            "de_datetime-asc": function ( a, b ) {
                var x, y;
                if (jQuery.trim(a) !== '') {
                    var deDatea = jQuery.trim(a).split(' ');
                    var deTimea = deDatea[1].split(':');
                    var deDatea2 = deDatea[0].split('.');
                    x = (deDatea2[2] + deDatea2[1] + deDatea2[0] + deTimea[0] + deTimea[1]) * 1;
                } else {
                    x = Infinity; // = l'an 1000 ...
                }

                if (jQuery.trim(b) !== '') {
                    var deDateb = jQuery.trim(b).split(' ');
                    var deTimeb = deDateb[1].split(':');
                    deDateb = deDateb[0].split('.');
                    y = (deDateb[2] + deDateb[1] + deDateb[0] + deTimeb[0] + deTimeb[1]) * 1;
                } else {
                    y = Infinity;
                }
                var z = ((x < y) ? -1 : ((x > y) ? 1 : 0));
                return z;
            },

            "de_datetime-desc": function ( a, b ) {
                var x, y;
                if (jQuery.trim(a) !== '') {
                    var deDatea = jQuery.trim(a).split(' ');
                    var deTimea = deDatea[1].split(':');
                    var deDatea2 = deDatea[0].split('.');
                    x = (deDatea2[2] + deDatea2[1] + deDatea2[0] + deTimea[0] + deTimea[1]) * 1;
                } else {
                    x = Infinity;
                }

                if (jQuery.trim(b) !== '') {
                    var deDateb = jQuery.trim(b).split(' ');
                    var deTimeb = deDateb[1].split(':');
                    deDateb = deDateb[0].split('.');
                    y = (deDateb[2] + deDateb[1] + deDateb[0] + deTimeb[0] + deTimeb[1]) * 1;
                } else {
                    y = Infinity;
                }
                var z = ((x < y) ? 1 : ((x > y) ? -1 : 0));
                return z;
            },

            "de_date-asc": function ( a, b ) {
                var x, y;
                if (jQuery.trim(a) !== '') {
                    var deDatea = jQuery.trim(a).split('.');
                    x = (deDatea[2] + deDatea[1] + deDatea[0]) * 1;
                } else {
                    x = Infinity; // = l'an 1000 ...
                }

                if (jQuery.trim(b) !== '') {
                    var deDateb = jQuery.trim(b).split('.');
                    y = (deDateb[2] + deDateb[1] + deDateb[0]) * 1;
                } else {
                    y = Infinity;
                }
                var z = ((x < y) ? -1 : ((x > y) ? 1 : 0));
                return z;
            },

            "de_date-desc": function ( a, b ) {
                var x, y;
                if (jQuery.trim(a) !== '') {
                    var deDatea = jQuery.trim(a).split('.');
                    x = (deDatea[2] + deDatea[1] + deDatea[0]) * 1;
                } else {
                    x = Infinity;
                }

                if (jQuery.trim(b) !== '') {
                    var deDateb = jQuery.trim(b).split('.');
                    y = (deDateb[2] + deDateb[1] + deDateb[0]) * 1;
                } else {
                    y = Infinity;
                }
                var z = ((x < y) ? 1 : ((x > y) ? -1 : 0));
                return z;
            }
        } );

    }]);
     