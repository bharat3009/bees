<!DOCTYPE html>
<html lang="en">
<head>
    <title>History Detail</title>
</head>
<body id="page-top" class="index">
<!-- Navigation -->
<feedback-header></feedback-header>
<!-- Header -->
<!-- Contact Section -->
<section id="contact" style="height:600px">
    <div class="container">
        <br>
        <h4 style="text-align: center">History Detail</h4>

        <div class="bs-example">
            <div class="panel-group  col-md-4 col-md-offset-4" id="accordion">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <p style="font-size: 13px">Commented On {{commentsData.commentDate}}</p>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in">
                        <div class="panel-body">
                            <div class="zoom_img">
                                      <div id="myVideo"></div>
                            </div>
                            <p style="font-size: 14px"><b>Detail:</b>{{commentsData.commentsDetail}}</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    </div>

</section>

<!-- Footer -->
<feedback-footer></feedback-footer>
</body>
</html>
