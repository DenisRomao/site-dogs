var myImage = document.querySelector('img');
//Muda as imagens através de um clique na imagem
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bull-terrier.jpg') {
        myImage.setAttribute ('src', 'images/bull-terrier-2.jpg');
    } else {
        myImage.setAttribute ('src', 'images/bull-terrier.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
    var myName = prompt('Por favor, digite seu nome.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Amo Bull Terrier, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Amo Bull Terrier, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}