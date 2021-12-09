let myImage = document.querySelector('img');
myImage.onclick = function()  {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pepperoni-pizza-half.jpg') {
        myImage.setAttribute('src', 'images/ham-and-pineapple-pizza-selection.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/pepperoni-pizza-half.jpg');
    }
}

let myButton = document.querySelector('button');
let myheading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter you name.');
    if(!myName) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myheading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myheading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}