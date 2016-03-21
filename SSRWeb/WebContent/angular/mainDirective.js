/**
 * Created by SMIT on 21-11-2015.
 */

feedbackApp.directive('myTable', function() {
    return function(scope, element, attrs) {

        // apply DataTable options, use defaults if none specified by user
        var options = {};
        if (attrs.myTable.length > 0) {
            options = scope.$eval(attrs.myTable);
        } else {
            options = {
                "bStateSave": true,
                "iCookieDuration": 2419200, /* 1 month */
                "bJQueryUI": true,
                "bPaginate": false,
                "bLengthChange": false,
                "bFilter": false,
                "bInfo": false,
                "bDestroy": true
            };
        }

        // Tell the dataTables plugin what columns to use
        // We can either derive them from the dom, or use setup from the controller
        var explicitColumns = [];
        element.find('th').each(function(index, elem) {
            explicitColumns.push($(elem).text());
        });
        if (explicitColumns.length > 0) {
            options["aoColumns"] = explicitColumns;
        } else if (attrs.aoColumns) {
            options["aoColumns"] = scope.$eval(attrs.aoColumns);
        }

        // aoColumnDefs is dataTables way of providing fine control over column config
        if (attrs.aoColumnDefs) {
            options["aoColumnDefs"] = scope.$eval(attrs.aoColumnDefs);
        }

        if (attrs.fnRowCallback) {
            options["fnRowCallback"] = scope.$eval(attrs.fnRowCallback);
        }

        // apply the plugin
        var dataTable = element.dataTable(options);

        // watch for any changes to our data, rebuild the DataTable
        scope.$watch(attrs.aaData, function(value) {
            var val = value || null;
            if (val) {
                dataTable.fnClearTable();
                dataTable.fnAddData(scope.$eval(attrs.aaData));
            }
        });
    };
});


feedbackApp.directive('feedbackHeader', function () {
    return {
        restrict: 'E',
        templateUrl: 'domainLibrary/header.php',
        scope:{
        },
        controller: ['$scope', '$window', 'getSession', 'removeSession',
            function ($scope, $window, getSession, removeSession) {
                $scope.userId = "";
                getSession.get(function (response) {
                    $scope.userProfile = true;
                    if (response.SESSION != "NOSESSION") {
                        $scope.userId = response.data.userId;
                        $scope.userName = response.data.userName;
                        if ($scope.userId != null) {

                        } else {

                        }
                    }
                    else {
                        $.loader('close'); }

                },function(){
                    $.loader('close');
                });

                $scope.logout = function () {
                    removeSession.save(function () {
                        $scope.userId = "";
                        $window.location.href = "#/login";
                        $.toaster({priority: "danger", title: "Success", message: "You've been logged out"});
                    });
                };
            }
        ]
    }
});

feedbackApp.directive('feedbackFooter', function(){
    return{
        restrict: 'E',
        templateUrl: 'domainLibrary/footer.php'
    }
});