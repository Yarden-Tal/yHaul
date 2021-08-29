"use strict";

function login(email, password) {
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    console.log(res);
    localStorage.setItem('token', JSON.stringify(res.token));
  })["catch"](function (error) {
    return console.log(error);
  });
}

function handleSubmit(event) {
  event.preventDefault();
  var email = event.target.elements['email'].value;
  var password = event.target.elements['password'].value;
  login(email, password);
}