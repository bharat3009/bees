<?php
/**
 * Created by PhpStorm.
 * User: SMIT
 * Date: 23-11-2015
 * Time: PM 07:20
 */ ?>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<style type="text/css">
    .bs-example {
        margin: 20px;
    }
</style>
<!-- Navigation -->
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
<!--
            <a class="navbar-brand" href="#/home">Feedback Tool</a>
-->
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <!--<li class="page-scroll">
                    <a href="#/home">Home</a>
                </li>-->
                <li class="page-scroll">
                    <a href="#/comments" style="color:#999900" ng-click = "logout()">Logout</a>
                </li>
               <!-- <li class="dropdown">
                    <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown"
                       class="dropdown-toggle" href="javascript:;">{{userName}} <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="javascript:;" ng-click="logout()" >Logout</a></li>
                    </ul>
                </li>-->
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
</nav>
