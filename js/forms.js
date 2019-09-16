$(document).ready(function() {
  $('.registerBtn').click(function() {
    $('.regForm').fadeIn();
  });
  $('.closeBtn').click(function() {
    $('.regForm').fadeOut();
  });
  $('.loginBtn').click(function() {
    $('.loginForm').fadeIn();
  });
  $('.closeLoginBtn').click(function() {
    $('.loginForm').fadeOut();
  });
  $('.regSubmitBtn').click(function(event) {
    event.preventDefault();
    const fullname = $('#fullname').val();
    const username = $('#username').val();
    const password = $('#password').val();
    const email = $('#email').val();
    if (!fullname || !username || !password || !email) {
      $('.regMessage').html('Kindly fill in all fields');
      return;
    }
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/users?email=${email}`,
      data: {
        email,
      },
      beforeSend: function() {
        $('.regMessage').html('Loading....');
      },
      success: function(response) {
        if (response.length) {
          $('.regMessage').html('User already exist');
        } else {
          $.ajax({
            method: 'POST',
            url: 'http://localhost:3000/users',
            data: {
              fullname,
              username,
              email,
              password,
            },
            beforeSend: function() {
              $('.regMessage').html('Loading....');
            },
            success: function() {
              $('.regMessage').html('Registration Successfull');
            },
          });
        }
      },
    });
  });
  $('.loginSubmitBtn').click(function(event) {
    event.preventDefault();
    const passwordLogin = $('#passwordLogin').val();
    const emailLogin = $('#emailLogin').val();
    if (!passwordLogin || !emailLogin) {
      $('.regMessage').html('Kindly fill in all fields');
      return;
    }
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/users?email=${emailLogin}&password=${passwordLogin}`,
      data: {
        email: emailLogin,
        password: passwordLogin,
      },
      beforeSend: function() {
        $('.regMessage').html('Loading....');
      },
      success: function(response) {
        if (response.length) {
          $('.regMessage').html('Login sucessful');
          $('.checkLogin').html('You are logged in');
          localStorage.setItem('email', emailLogin);
          window.location.assign('index.html');
        } else {
          $('.regMessage').html('Username or password Incorrect');
        }
      },
    });
  });
  $('.logoutBtn').click(function() {
    localStorage.clear();
    $('.checkLogin').html('Kindly login');
    window.location.assign('signup.html');
  });
});
