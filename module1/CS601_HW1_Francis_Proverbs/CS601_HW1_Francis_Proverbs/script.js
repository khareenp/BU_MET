const f = document.forms.myForm; //access the form and assign to variable f
f.addEventListener('submit', validateForm); //validateForm function is called when sumit event occurs 

function validateForm(e) {
  e.preventDefault();  // Prevent form from submitting to server
  const firstname = f.firstname.value; //retrieve value 
  const lastname = document.getElementById('lastname').value;//another way to retrieve value
  const email = document.getElementById('email').value;
  const package = document.getElementById('package').value;
  const subscribe = document.getElementById('subscribe');
  console.log(firstname, lastname)//log to console


// Get the element with the ID "firstname-error" from the document
const firstnameError = document.getElementById("firstname-error");
// Get the element with the ID "lastname-error" from the document
const lastnameError = document.getElementById("lastname-error");
// Get the element with the ID "email-error" from the document
const emailError = document.getElementById("email-error");
// Get the element with the ID "package-error" from the document
const packageError = document.getElementById("package-error");
// Get the element with the ID "subscribe-error" from the document
const subscribeError = document.getElementById("subscribe-error");

const regex = /[a-zA-Z]/;
  

  // Reset error messages
  firstnameError.textContent = '';
  lastnameError.textContent = '';
  emailError.textContent = '';
  packageError.textContent='';

  let isValid = true;

  // Validate first name
  const validateFirstName = () =>{
    //condition to check if the length of the first name is less than 2 OR if it contains non-alphabetic characters.
    if (firstname.length < 2 || !regex.test(firstname) ) {
        firstnameError.textContent = 'First name must be at least 2 characters long and contain only alphabetic characters.';
        isValid = false;
      }
  }

  // Validate last name length
  const validateLastName = () =>{
      //condition to check if the length of the last name is less than 2 OR if it contains non-alphabetic characters.
    if (lastname.length < 2  || !regex.test(lastname)) {
        lastnameError.textContent = 'Last name must be at least 2 characters long and contain only alphabetic characters.';
        isValid = false;
      }
  }  


  //validate checkbox
  const validateCheckbox = () =>{
    if(!subscribe.checked){
        subscribeError.textContent = 'Please check subscribe box to proceed with form submission'
        isValid = false;
      }
  }


  //validate package
  const validatePackage = () =>{
    if(package == ''){
        packageError.textContent = 'Please select a package to proceed'
        isValid = false;
      }
  }

  //successful form submission
  const formValid = () =>{
    if (isValid) {
        // Hide the form and display success message
        document.getElementById('myForm').style.display = 'none';
        const successMessage = document.getElementById('success-message');
        successMessage.innerHTML = `<strong>Thankyou!</strong><br> ${firstname + '' + lastname} for subscribing! <br>Your email ${email} is registered with our ${package} package`;
        successMessage.style.display = 'block';
      }
  }
  validateFirstName()
  validateLastName()
  validatePackage()
  validateCheckbox()
  formValid() 
}
