'use strict';

feedbackServices.factory('getSession', ['$resource',
    function($resource){
        return $resource('phpLibrary/sessionMgt.php?action=get_session', {}, {
            query: { method: "GET"}
        });

    }]);


feedbackServices.factory('addSession', ['$resource',
    function($resource){
        return $resource('phpLibrary/sessionMgt.php?action=add_session', {}, {
            query: { method: "POST",isArray:true}
        });

    }]);


feedbackServices.factory('removeSession', ['$resource',
    function($resource){
        return $resource('phpLibrary/sessionMgt.php?action=remove_session', {}, {
            query: { method: "POST",isArray:true}
        });

    }]);


/*
 feedbackServices.factory('getCookies', ['$resource',
 function($resource){
 return $resource('api/cookiesUserDetail.php?action=get_cookies', {}, {
 query: { method: "GET"}
 });

 }]);

 feedbackServices.factory('addCookies', ['$resource',
 function($resource){
 return $resource('api/cookiesUserDetail.php?action=add_cookies', {}, {
 query: { method: "POST",isArray:true}
 });

 }]);*/
