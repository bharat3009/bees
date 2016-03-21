/**
 * Created by SMIT on 23-11-2015.
 */
'use strict';

feedbackServices.factory('comments', ['$resource','commentConst',
    function($resource,commentConst){
        return $resource(commentConst + ':verb', {verb:'getallcomments', userId:'@userId', userTime:'@userTime'}, {
            query: { method: "GET"}
        });

    }]);


feedbackServices.factory('areaValues', ['$resource','areaConst',function($resource,areaConst){
    return $resource(areaConst + ':verb', { verb:'getAllAreas'},{ query : { method : "GET" } });

    }]);


feedbackServices.factory('getallmaincommentsbyarea', ['$resource','commentConst',function($resource,commentConst){
    return $resource(commentConst + ':verb', { verb:'getallmaincommentsbyarea', areaId:'@areaId', userTime:'@userTime'}, {              query : { method : "GET" } });

    }]);


feedbackServices.factory('getallmaincommentsbyuser', ['$resource','commentConst',function($resource,commentConst){
    return $resource(commentConst + ':verb', { verb:'getallmaincommentsbyuserid', userId:'@userId', userTime:'@userTime'}, {              query : { method : "GET" } });

    }]);


feedbackServices.factory('commentsDetail', ['$resource','commentConst',
    function($resource,commentConst){
        return $resource(commentConst + ':verb', {verb:'getcommentbyid', commentId:'@commentId', userTime:'@userTime'}, {
            query: { method: "GET"}
        });

    }]);

feedbackServices.factory('addComments', ['$resource','commentConst',
    function($resource,commentConst){
        return $resource(commentConst + ':verb', {verb:'addcomments', filePath:'@filePath', comments:'@comments', userId:'@userId', areaId: '@areaId'}, {
            query: { method: "POST"}
        });

    }]);

feedbackServices.factory('uploadFile', ['$resource','commentConst',
    function($resource,commentConst){
        return $resource(commentConst + ':verb', {verb:'uploadfile',file:'@file'}, {
            query: { method: "POST"}
        });

    }]);