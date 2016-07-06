$(document).ready(function() {
    debugger;
    $('#optGoal').click(function() {
        $('#dashboard').load('goal.html',
            function() {
                alert('Content Successfully Loaded.');
            }
        );
    });



});
