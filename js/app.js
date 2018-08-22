
var config = {
    apiKey: "AIzaSyCcKJMoFn_SmZfE0J78zN4t8GX3KOkxNrI",
    authDomain: "contactform-8d05e.firebaseapp.com",
    databaseURL: "https://contactform-8d05e.firebaseio.com",
    projectId: "contactform-8d05e",
    storageBucket: "",
    messagingSenderId: "498373590184"
    };
firebase.initializeApp(config);

// Reference messages collection
var messageRef = firebase.database().ref("messages");

const btnSubmit = document.getElementById("submit");

// SUBMIT ACTION
btnSubmit.addEventListener("click", submitForm);

function submitForm(e) {
    e.preventDefault();
    
    var name = getInpVal("name");
    var email = getInpVal("email");
    var phone = getInpVal("phone");
    var subject = getInpVal("subject");
    var message = getInpVal("message");

    saveMessage(name, email, phone, subject, message);
    document.getElementById("contactForm").reset();
    document.getElementById("btn-message").classList.remove("hide");
}

function getInpVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name, email, phone, subject, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    });
}