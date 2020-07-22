
//Form validation
window.addEventListener('load', function() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName('needs-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        console.log('not valid')
        event.preventDefault();
        event.stopPropagation();
      } else {
        functionAlert('Your form was submitted sucessfully!');
      }
      form.classList.add('was-validated');
      console.log('valid form')
    }, false);
  });
}, false);


// confirmation modal
function functionAlert(msg, myYes) {
  var confirmBox = $("#confirm");
  confirmBox.find(".message").text(msg);
  confirmBox.find(".yes").unbind().click(function() {
     confirmBox.hide();
  });
  confirmBox.find(".yes").click(myYes);
  confirmBox.show();
}