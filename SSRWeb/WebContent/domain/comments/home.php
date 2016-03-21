<feedback-header></feedback-header>

<!-- Contact Section -->

<section id="contact">
    <div class="container">
        <br><br>
        <div style = "width :100%" class="btn-group btn-block" ng-init = "homeshowpar = true">
            <button type="button" class="btn btn-primaryonhome col-lg-4" ng-click = homeshow()>Local Hives</button>
            <button type="button" class="btn btn-primaryonhome col-lg-4" ng-click = historyshow()>My Hives</button>
            <button type="button" class="btn btn-primaryonhome col-lg-4" ng-click = globalshow()>Global Hives</button> 
</div>
        <script>

            function responseVideo() {
                //var a = document.this
                this.get(0).play();
            }
        </script>
        
        <div class="row" ng-if = "homeshowpar">
            <div class="col-lg-6">
                <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
                <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->
                <form method="post" enctype="multipart/form-data" name="sentMessage" id="sentMessage" novalidate>
                    <br><br>

                    <div class="row control-group">
                        <div class="form-group col-xs-8 floating-label-form-group controls">
                            <label>Comment Here</label>
                            <textarea style = "color : #CCCC00" rows="2" class="form-control"  ng-model="commentarea" placeholder="comment here about your experience "
                                      id="commentsData" name="commentsData" required></textarea>

                            <p class="help-block text-danger"></p>
                        </div>

                    </div>
                    <br>
                    <button style = " background-color: #ffffcc;" type="file" ngf-select="uploadFiles($file, $invalidFiles)" id="submitClick"
                            accept="image/*,video/*" ngf-max-height="1000" ngf-max-size="10MB" class="btn btn-primaryonhome btn-xs">
                        Browse File
                    </button>

                    <br><br>
                    File:
                    <div style="font:smaller">{{f.name}} {{errFile.name}} {{errFile.$error}} {{errFile.$errorParam}}
                      <span class="progress" ng-show="f.progress >= 0">
                           <div style="width:{{f.progress}}%"
                                ng-bind="f.progress + '%'"></div>
                     </span>
                    </div>
                    {{errorMsg}}
                <!--</form>-->
                <br>
                <br>

                <div id="success"></div>
                <button style = " background-color: #ffffcc;" id="submitBtnClick" type="submit" class="btn btn-primaryonhome btn-xs" name="submit" ng-click="submitData()">Submit</button>
                <button style = " background-color: #ffffcc;" type="reset" ng-click="reset()" class="btn btn-primaryonhome btn-xs">Reset</button>
             </form>
            </div>
        </div>
    </div>
    <div class="container col-lg-6">
        <br>
        <hr>

<!--
        <h4 style="text-align: center;font-size:25px">History List</h4>
-->

        <hr>
        <div class=" col-md-6">
            <input type="text" name="search" class="form-control" id="mysearch" autocomplete="off" spellcheck="false"
                   placeholder="search here">
        </div>
        
         <div class=" col-md-6">
            <input type="text" name="asearch" class="form-control" id="areasearch" autocomplete="off" spellcheck="false"
                   placeholder="areaa search">
        </div>
        <br>
       <!-- <div class="clearfix"></div>-->
        <hr>
    
        <!-- <div class="bs-example">

             <div class="panel-group pagination-sm col-md-3" id="accordion"
                  ng-repeat="comments in dataComments | filter:searchText">
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
                             <p><img
                                     src="http://feedbacktool-env.elasticbeanstalk.com/{{comments.filepath}}"
                                     height="100px;" width="100px;" alt="No Image"></p>

                             <p>{{comments.commentsDetail}}</p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>

        <table id="example" class="display" cellspacing="0" width="100%">
            <thead>
            <tr>
                <th>Comment Date</th>
                <th>Comment Detail</th>
                <th>Media</th>

            </tr>
            </thead>

        </table>-->
        <div class = "panel-group">
        <ul>
            <li  ng-repeat = "comment in commentsDataOne">
                <div class = "panel panel-default">
                    
                    <div class = "panel-body">{{comment.commentDate}} <br><br> {{comment.commentsDetail}} <br></div>
                    
                    <div style = "color : #cccc00 padding-bottom : 1px" class = "panel-footer">
                        <button style = " align : left background-color: #ffffcc;" type="button" class="btn btn-                                                            primaryonhome" aria-label="Left Align">
                                        <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
                        </button>{{comment.agreeCount}} &nbsp; &nbsp; &nbsp; &nbsp
                        <button style = "align : middle background-color: #ffffcc;"  type="button" class="btn btn-                                                      primaryonhome" aria-label="Left Align">
                                        <span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
                        </button>{{comment.notAgreeCount}} &nbsp; &nbsp; &nbsp; &nbsp
                        <a style = " align : right background-color: #ffff00; color : #cccc00"  href = "#/commentsDetail?                                       commentId={{comment.commentId}}"  >{{comment.commentsCount}} comments</a>
                                             
                    </div>
                </div>
                <br><br>
                 <p>   </p>
            </li>
           
            <br>
        </ul>
        </div>
        
        
    </div>

</section>


