// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8PrLGuxxbajife6fejhaB7bkaMgMIaac",
  authDomain: "portfolio-aman-85037.firebaseapp.com",
  databaseURL: "https://portfolio-aman-85037-default-rtdb.firebaseio.com/",
  projectId: "portfolio-aman-85037",
  storageBucket: "portfolio-aman-85037.appspot.com",
  messagingSenderId: "948600749519",
  appId: "1:948600749519:web:01595e4da5ec0d1e2366ba",
  measurementId: "G-5CWFZ1HFSE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Reference your database
var contactFormDB = firebase.database().ref("form");

document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("fullname");
  var emailid = getElementVal("email");
  var msgContent = getElementVal("message");

  saveMessages(name, emailid, msgContent);

  // Enable alert
  alert("Your message has been sent!");

  // Remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Reset the form
  document.getElementById("form").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
