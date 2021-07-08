var contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var name = contactForm.elements[0].value;
  var email = contactForm.elements[1].value;
  var message = contactForm.elements[2].value;
  var output = { name, email, message };
  console.log(output);
  contactForm.reset();
});
