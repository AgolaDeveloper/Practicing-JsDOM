// elmt= document.getElementByClassName('main');
//var el= document.createElement('p');
//var text= document.createTextNode= 'I LOVE CODING';
//el.appendChild(text);
//elmt.appendChild(el);

//var hed=  document.getElementById('he').style.color='blue';
//hed.style.color= 'solid blue';

//var x= document.getElementsByTagName('p')
//x.style.color='red';

// ADDING eventListners

var evnt= getElementsById('demo');
evnt.addEventListener(click, func1);
evnt.addEventListener(mouseover, func2);
evnt.addEventListener(mouseout, func3);

function func1(){
    alert("HELLO OVER THERE, YOU'VE JUST CLICKED OUR BUTTON; WELCOME ANYWAYS");
}

function func2(){
    alert("Holla, yeah you've just hovered over our button");
}

function func3(){
    alert("HOLLA, WE'VE JUST REALIZED THAT YOU HAVE DECIDED TO MOVE YOUR MOUSE OUT, AWAY FROM THE BUTTON ; SO BYE FOR NOW BROTHER/SISTER. WE ALL LOVE YOU GUYZ,, MEET YOU LATER")
}