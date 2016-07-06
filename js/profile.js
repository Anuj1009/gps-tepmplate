$(document).ready(function() {

    $(".right-corder-container-button").hover(function() {
        $(".long-text").addClass("show-long-text");
    }, function() {
        $(".long-text").removeClass("show-long-text");
    });












    $('#optMessage').click(function() {
        $('#dashboard').load('message.html',
            function() { //alert('Content Successfully Loaded.')
            }
        );
    });

    $('#optLearning').click(function() {
        $('#dashboard').load('learning_dashboard.html',
            function() {
                $('#blogsLearning').click(function() {
                    $('#learningDashboard').load('blog.html',
                        function() {
                            // alert('Content Successfully Loaded.');
                        }
                    );
                });
                $('#seminarLearning').click(function() {
                    $('#learningDashboard').load('seminar_learning.html',
                        function() {
                            //   alert('Content Successfully Loaded.');
                        }
                    );
                });


            });
    });




});
