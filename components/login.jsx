import React from 'react';
import $ from 'jquery';
var util = require('../util/handlers')


// var handleSubmit = function (event) {
//
//   event.preventDefault();
//   var formData = {
//     username: event.target.username.value,
//     password: event.target.password.value
//   };
//   console.log('formData: ', formData)
//
//   $.ajax({
//     type: "POST",
//     data: JSON.stringify(formData),
//     url: '/login',
//     contentType: 'application/json',
//     success: function(data) {
//       console.log(data)
//     },
//     error: function(err) {
//       console.log(err)
//     }
//   });
// }

const Login  = () => (
  <form onSubmit={util.handleSubmit}>
    <label className="username">Username: </label><input name="username" type="text" />
    <label className="password">Password: </label><input name="password" type="password"/>
    <button type='submit'>Signin</button>
  </form>
)

export default Login;
