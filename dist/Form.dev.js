"use strict";

var firstname = document.getElementById('firstname');
var lastname = document.getElementById("lastname");
var Sex = document.getElementById("Sex");
var Age = document.getElementById("Age");
var Adress = document.getElementById("Adress");
var Phone = document.getElementById("Phone");
var toHide = document.getElementById("toHide");
var submit = document.querySelector(".submit");
var subtitle = document.getElementById("stitle");
var title = document.getElementById("title");
var regexp = /^\+?3?8?(0(67|68|96|97|98)\d{7})$/;
var letters = /^[A-Za-z]+$/;
var toShow = document.getElementById("toShow");

function check() {
  toShow.hidden = true;
  var nextLatter = firstname.value.charAt(0).substring(0, firstname.value.charAt(0).length - 1) + String.fromCharCode(firstname.value.charAt(0).charCodeAt(firstname.value.charAt(0).length - 1) + 1);

  if (nextLatter != nextLatter.toUpperCase()) {
    nextLatter = nextLatter.toUpperCase();
  }

  var nameCheck = lastname.value.charAt(0) == nextLatter;
  var numberCheck = regexp.test(Phone.value);
  var sexCheck = Sex.value.length > 0;
  var AdressCheck = Adress.value.length > 0;

  if (numberCheck == false) {
    subtitle.innerText = 'Incorrect format of phone number ';
    subtitle.className = 'subtitleError';
  }

  if (/^\s*$/.test(Adress.value)) {
    subtitle.innerText = 'Adress field cannot be empty';
    subtitle.className = 'subtitleError';
  }

  if (Age < 18 || Age > 105 || /^\s*$/.test(Age.value) == true) {
    subtitle.innerText = 'Incorrect Age ';
    subtitle.className = 'subtitleError';
  }

  if (/^\s*$/.test(Sex.value)) {
    subtitle.innerText = 'Sex field cannot be empty ';
    subtitle.className = 'subtitleError';

    if (Sex.value != 'Man' || Sex.value != 'Women') {
      subtitle.innerText = 'Sex must be Man or Women';
      subtitle.className = 'subtitleError';
    }
  }

  if (nameCheck == false) {
    subtitle.innerText = 'Your Lastname must begin with ' + nextLatter;
    subtitle.className = 'subtitleError';

    if (!(firstname.value.length > 0)) {
      subtitle.innerText = 'Your Firstname  cannot be empty ';
    }

    if (firstname.value.charAt(0) != firstname.value.charAt(0).toUpperCase()) {
      subtitle.innerText = 'Your Firstname  must begin with upper case';
    }
  }

  if (nameCheck == true && /^\s*$/.test(Age.value) == false && numberCheck == true && /^\s*$/.test(Adress.value) == false) {
    toHide.hidden = true;
    toShow.hidden = false;

    if (Sex.value == 'Man') {
      document.getElementById("fName").innerText = 'Mr ' + +firstname.value + lastname.value;
      document.getElementById("fAge").innerText = Age.value;
      document.getElementById("fPhone").innerText = Phone.value;
      document.getElementById("fAdress").innerText = Adress.value;
    }

    if (Sex.value == 'Women') {
      document.getElementById("fName").innerText = 'Mrs ' + +firstname.value + lastname.value;
      document.getElementById("fAge").innerText = Age.value;
      document.getElementById("fPhone").innerText = Phone.value;
      document.getElementById("fAdress").innerText = Adress.value;
    }
  }
}