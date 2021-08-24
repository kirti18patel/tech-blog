function signupHide(){
  document.querySelector('.signup').classList.add("hide");
  document.querySelector('.login').classList.remove("hide");
}

function loginHide(){
  document.querySelector('.signup').classList.remove("hide");
  document.querySelector('.login').classList.add("hide");
}

async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function signupFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        alert("user added");
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('#loginButton').addEventListener('click', loginFormHandler);  
  document.querySelector('#signupButton').addEventListener('click', signupFormHandler);
  document.querySelector('#signupHide').addEventListener('click', signupHide);
  document.querySelector('#loginHide').addEventListener('click', loginHide);
  