// Fixing vh issue for all browser
//First we get the viewport height and we multiply it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("50vh", `${vh}px`);
// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("50vh", `${vh}px`);
});

//Menu bar function
function myFunction() {
  var x = document.getElementById("nav-bar");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//Hero slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
//form validation
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let dateOfBirth = document.getElementById("date");
let stateOfResidence = document.getElementById("state");
let address = document.getElementById("address");
let phoneNumber = document.getElementById("phone");
let emailAddress = document.getElementById("email");
let submitButton = document.querySelector(".submit-button");
let emailRegEx = /\S+@\S+\.\S+/;
let phoneRegEx = /^[0-9]+$/;
let form = document.querySelector(".form");
let nameRegEx = /^[a-zA-Z]+$/;
let country = document.getElementById("country");
let courses = document.getElementById("cutting");
let errorMessage = document.getElementById("error-message");
//The checkIpnut() validates the inputs

// let checkInput = () => {
//   if(firstName.value.trim() !== "" && nameRegEx.test(firstName.value) && lastName.value.trim() !== "" &&
//  nameRegEx.test(lastName.value) && stateOfResidence.value.trim() !== "" && nameRegEx.test(stateOfResidence.value)
//  && address.value.trim() !== "" && phoneRegEx.test(phoneNumber.value) && emailRegEx.test(emailAddress.value)) {
//     submitButton.style.backgroundColor = '#000';
//     submitButton.style.color = '#fff';
//     submitButton.disabled = true;
//   } else {
//     submitButton.style.backgroundColor = '#fff';
//     submitButton.style.color = '#000';
//     submitButton.disabled = false;
//   }

// }

let formValidate = () => {
  var text;

  if (firstName.value.trim() === "") {
    errorMessage.style.padding = "8px";
    text = "Please enter a valid name";
    errorMessage.innerHTML = text;

    return false;
  }

  firstName.addEventListener("input", function () {
    errorMessage.style.padding = "0px";
    errorMessage.innerHTML = "";
  });

  if (firstName.value.length < 3) {
    errorMessage.style.padding = "8px";
    text = "Please enter a valid name";
    errorMessage.innerHTML = text;
    return false;
  }

  if (lastName.value.trim() === "") {
    errorMessage.style.padding = "8px";
    text = "Please enter a valid name";
    errorMessage.innerHTML = text;
    return false;
  }
  lastName.addEventListener("input", function () {
    errorMessage.style.padding = "0px";
    errorMessage.innerHTML = "";
  });
  if (lastName.value.length < 3) {
    errorMessage.style.padding = "8px";
    text = "Please enter a valid name";
    errorMessage.innerHTML = text;
    return false;
  }

  if (stateOfResidence.value.trim() === "") {
    errorMessage.style.padding = "8px";
    text = "Please enter a valid location";
    errorMessage.innerHTML = text;
    return false;
  }
  stateOfResidence.addEventListener("input", function () {
    errorMessage.style.padding = "0px";
    errorMessage.innerHTML = "";
  });
  if (stateOfResidence.value.length < 3) {
    errorMessage.style.padding = "8px";
    text = "Please enter a valid location";
    errorMessage.innerHTML = text;
    return false;
  }
  if (address.value.trim() === "") {
    errorMessage.style.padding = "8px";
    text = "Please enter a valid address";
    errorMessage.innerHTML = text;
    return false;
  }
  address.addEventListener("input", function () {
    errorMessage.style.padding = "0px";
    errorMessage.innerHTML = "";
  });
  if (address.value.length < 3) {
    errorMessage.style.padding = "8px";
    text = "Please enter a valid location";
    errorMessage.innerHTML = text;
    return false;
  }
  // if(phoneRegEx.test(phoneNumber.value)) {
  //   errorMessage.style.padding = "8px";
  //   text = "Please enter a valid phone number";
  //   errorMessage.innerHTML = text;
  //   return false;
  // }
  // address.addEventListener('input', function(){
  //   errorMessage.style.padding = "0px";
  //   errorMessage.innerHTML = "";
  // })

  errorMessage.style.padding = "0px";
  alert("Form submitted successfully!");

  form.reset();
  return true;
};

// if(nameRegEx.test(firstName.value)) {
//   errorMessage.style.padding = "8px";
//   text = "Please enter a valid name";
//   errorMessage.innerHTML = text;

// }

// if(nameRegEx.test(lastName.value)) {
//   text = "Please enter a valid name";
//   errorMessage.innerHTML = text;
//   return false;
// }

/* if(country.value === "" && courses.value === ""){
      submitButton.style.backgroundColor = '#000';
    submitButton.style.color = '#fff';
    submitButton.disabled = false;
  } else {
    submitButton.style.backgroundColor = '#fff';
    submitButton.style.color = '#000';
    submitButton.disabled = true;
    } */

form.addEventListener("submit", function (event) {
  console.log(event);
  event.preventDefault();
});
