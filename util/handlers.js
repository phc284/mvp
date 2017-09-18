exports.handleSubmit = function (event) {

  event.preventDefault();
  var formData = {
    username: event.target.username.value,
    password: event.target.password.value
  };
  console.log('formData: ', formData)

  $.ajax({
    type: "POST",
    data: JSON.stringify(formData),
    url: '/login',
    contentType: 'application/json',
    success: function(data) {
      console.log(data)
    },
    error: function(err) {
      console.log(err)
    }
  });
}
