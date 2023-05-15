$(document).ready(function () {
    if(localStorage.getItem('loginStatus') == 'true'){
      location.assign('./order.html')
    }
    let loginForm = window.document.getElementById('form');
    loginForm.onsubmit = function (e) {
      e.preventDefault();
      let logincredential = {
          username: this.username.value,
          password: this.password.value
      }
      if (logincredential.username === logincredential.password) {
         
          $.post("https://63c2a672b0c286fbe5f10b3f.mockapi.io/singleUsers",logincredential,
              function (data, textStatus, jqXHR) {
                  alert('Login Successful!!')
                  window.localStorage.setItem('loginStatus',true)
                  location.replace('./order.html')
              },
              
          );
      } else {
          alert(`Please Enter Valid Credentials ${logincredential.username} ${logincredential.password}`)
      }
    }
  });