$(document).ready(function() {
  let user = window.localStorage.getItem('email');
  if (!user) {
    $('.checkLogin').html('Kindly Log in');
    window.location.assign('signup.html');
  } else {
    $('.checkLogin').html('You are logged in');
  }
});
