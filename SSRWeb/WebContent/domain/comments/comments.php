<!DOCTYPE html>
<html lang="en">
<head>
    <title>History</title>
</head>

<body id="page-top" class="index">

<!-- Navigation -->
<feedback-header></feedback-header>
<!-- Header -->
<!-- Contact Section -->
<section id="contact" style="height: 100%">
    <div class="container">
        <br>
        <h4 style="text-align: center">History List</h4>
        <hr>
        <div id="result"></div>
        <div class="bs-example">
           <!-- <div class="panel-group" id="accordion" ng-repeat="comments in items | filter:searchText | startFrom:(currentPage-1)*entryLimit | limitTo:entryLimit">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion"
                               href="#/commentsDetail?commentId={{comments.commentId}}">Commented On
                                {{comments.commentDate}}</a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in">
                        <div class="panel-body">
                            <p><img class="fancybox"
                                    src="http://feedbacktool-env.elasticbeanstalk.com/{{comments.filepath}}"
                                    height="100px;"
                                    width="100px;" alt="No Image"></p>

                            <p>{{comments.commentsDetail}}</p>
                        </div>
                    </div>
                    <pagination page="currentPage" max-size="noOfPages" total-items="totalItems"
                                items-per-page="entryLimit"></pagination>
                </div>
            </div>-->
            <table id="example" class="display" cellspacing="0" width="100%">
                <thead>
                <tr>
                    <th>comment Date</th>
                    <th>comments Detail</th>
                    <th>Media</th>
                </tr>
                </thead>

            </table>
        </div>
    </div>

</section>


<feedback-footer></feedback-footer>
</html>
