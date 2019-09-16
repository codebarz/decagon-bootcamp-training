$(document).ready(function() {
  $('.registerBtn').click(function() {
    $('.regForm').fadeIn();
  });
  $('.closeBtn').click(function() {
    $('.regForm').fadeOut();
  });
  $('.regSubmitBtn').click(function(event) {
    event.preventDefault();
    const fullname = $('#fullname').val();
    const username = $('#username').val();
    const password = $('#password').val();
    
  });
});
