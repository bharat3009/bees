<!DOCTYPE html>
<html lang="en" ng-app="myApp">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Feed Back Tool</title>
    <!-- jQuery -->
    <script src="assets/js/jquery.js"></script>

    <!-- Bootstrap Core CSS - Uses Bootswatch Flatly Theme: http://bootswatch.com/flatly/ -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="assets/css/style.css" rel="stylesheet">
    <link href="assets/css/upload.css" rel="stylesheet">
    <link href="assets/css/datatable.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="assets/fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'>


    <!--Angular JS Source files-->
    <script src="angular/angular.min.js"></script>
    <script src="angular/angular-route.min.js"></script>
    <script src="angular/angular-resource.min.js"></script>
    <script src="angular/ng-file-upload.min.js"></script>
    <!--FeedbackApp Angular JS files-->
    <script src="angular/main.js"></script>
    <script src="angular/mainDirective.js"></script>
    <!--Controller / Services / Directives JS files-->
    <script src="phpLibrary/sessionMgtServices.js"></script>
    <script src="domain/login/loginService.js"></script>
    <script src="domain/login/loginController.js"></script>
    <script src="domain/comments/homeController.js"></script>
    <script src="domain/comments/commentsService.js"></script>
    <script src="domain/comments/commentsController.js"></script>
    <script src="domain/comments/commentsDetailController.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="assets/js/classie.js"></script>
    <script src="assets/js/cbpAnimatedHeader.js"></script>

    <!-- Contact Form JavaScript -->
    <script src="assets/js/jqBootstrapValidation.js"></script>
    <script src="assets/js/contact_me.js"></script>
    <script type="text/javascript" src="assets/js/aui-production.min.js"></script>
    <script type="text/javascript" src="assets/js/jquery.toaster.js"></script>
    <script type="text/javascript" src="assets/js/jquery.loader.js"></script>
    <script type="text/javascript" src="assets/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="assets/js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="assets/js/typeahead.min.js"></script>
    <script src="http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.12.1.min.js"></script>

    <!--
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>-->

    <!-- Custom Theme JavaScript -->
    <script src="assets/js/freelancer.js"></script>
    <link href='https://cdn.datatables.net/1.10.10/css/jquery.dataTables.min.css' rel='stylesheet' type='text/css'>

</head>

<body id="page-top" class="index">
<div ng-view></div>

</body>

</html>

