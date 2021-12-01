 
let firstname = document.getElementById('firstname');
let lastname = document.getElementById("lastname");
let Sex = document.getElementById("Sex");
let Age = document.getElementById("Age");
let Adress = document.getElementById("Adress");
let Phone = document.getElementById("Phone");
let toHide =document.getElementById("toHide");
let submit = document.querySelector(".submit");
let subtitle = document.getElementById("stitle");
let title = document.getElementById("title");
let regexp = /^\+?3?8?(0(67|68|96|97|98)\d{7})$/;
 let letters = /^[A-Za-z]+$/;
 let toShow = document.getElementById("toShow");
 function check(){
    toShow.hidden = true;
 
  let nextLatter = firstname.value.charAt(0).substring(0, firstname.value.charAt(0).length - 1)
    + String.fromCharCode(firstname.value.charAt(0).charCodeAt(firstname.value.charAt(0).length - 1) + 1) ;
  if( nextLatter !=  nextLatter.toUpperCase()){
    nextLatter = nextLatter.toUpperCase();
   }
     
    let nameCheck = lastname.value.charAt(0) == nextLatter  ;
   
    let numberCheck  = regexp.test(Phone.value);
    let sexCheck  = Sex.value.length > 0  ;
 
    let AdressCheck  = Adress.value.length > 0  ;
     
    if(  numberCheck  == false){
        subtitle.innerText = 'Incorrect format of phone number ' ;
        subtitle.className = 'subtitleError';

    }
     
    if(  /^\s*$/.test(Adress.value) ){
        
        subtitle.innerText = 'Adress field cannot be empty'  ;
        subtitle.className = 'subtitleError';
        
    }
     
     
    if(  Age < 18 || Age > 105  || /^\s*$/.test(Age.value) == true){
        subtitle.innerText = 'Incorrect Age ' ;
        subtitle.className = 'subtitleError';

    }
    if(  /^\s*$/.test(Sex.value) ){
        subtitle.innerText = 'Sex field cannot be empty '  ;
        subtitle.className = 'subtitleError';
     if(Sex.value != 'Man' || Sex.value != 'Women'){
        subtitle.innerText = 'Sex must be Man or Women'  ;
        subtitle.className = 'subtitleError';
     }
    }
    if(  nameCheck == false){
    
        subtitle.innerText = 'Your Lastname must begin with ' + nextLatter;
        subtitle.className = 'subtitleError';
        if( !(firstname.value.length > 0)  ) {
            subtitle.innerText = 'Your Firstname  cannot be empty ' ;
        }
        if( firstname.value.charAt(0) != firstname.value.charAt(0).toUpperCase()   ){
            subtitle.innerText = 'Your Firstname  must begin with upper case' ;
        }
    }
   
    if(nameCheck ==  true &&  /^\s*$/.test(Age.value) == false && numberCheck  == true && /^\s*$/.test(Adress.value) == false   ){
        toHide.hidden = true;
        toShow.hidden = false;
        if(Sex.value == 'Man'){
            document.getElementById("fName").innerText =  'Mr ' +  +firstname.value + lastname.value ;
            document.getElementById("fAge").innerText = Age.value ; 
            document.getElementById("fPhone").innerText =  Phone.value ;
            document.getElementById("fAdress").innerText =  Adress.value ;
        }
        if(Sex.value == 'Women'){
            document.getElementById("fName").innerText =  'Mrs ' +  +firstname.value + lastname.value ;
            document.getElementById("fAge").innerText = Age.value ; 
            document.getElementById("fPhone").innerText =  Phone.value ;
            document.getElementById("fAdress").innerText =  Adress.value ;
        }
    }
 
     
 }