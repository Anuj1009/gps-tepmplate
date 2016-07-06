  $(document).ready(function() {
      debugger;
      $('#optProfile').click(function() {
          $('#dashboard').load('profileMain.html',
              function() {







              });
      });



      $('#contactInformation').click(function() {
          $('#profileDashboard').load('contact_profile.html',
              function() {
                  alert('Content Successfully Loaded.');
              }
          );
      });


      $('#salary').click(function() {
          $('#profileDashboard').load('personal_profile.html',
              function() {
                  alert('Content Successfully Loaded.');
              }
          );
      });
  });
