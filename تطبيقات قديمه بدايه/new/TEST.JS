/*var xxx = "how are you";
alert(xxx)
    
var x=100;
    y=200;
    z=y+x;
document.getElementById("price").innerHTML =(z+y)*(y-x);

               

var myscore = "mn";

if (myscore <= 100){
    console.log ("iagree");}

else if
    (myscore>100){
        console.log("i will agree")
}

else{
    console.log("idont agree")
} 
*/
/*
var age =  prompt("whats your age ");
if (age <=18) {
    document.getElementById('price').innerHTML=
    "your age is:  " + age + "sorry you are yong ";
}
else if (age <=40){
    document.getElementById('price').innerHTML=
    "your age is:  " + age + "you are welcome ";
}

else {
   document.getElementById('price').innerHTML=
   "your age is:  " + age + "sorry gedo"; 
}

var myprice =150;
if (myprice<=100){
    alert("soory")
}else{
    alert("hello")
}

function medo( firstname, middelname, lastname ){
    "use strict"
   
    return "hello"+" "+firstname+" "+middelname+" "+lastname+"  "+"and you are welcome "  ;  
}

document.getElementById("price").innerHTML= medo( "ahmed","hossam","elsayed")

function discount(price){
    var dis=200;
    return price-dis;
}

document.getElementById("price").innerHTML= "your discount is : "+discount(600);
             ادخال العمر وحسابه بالايام 
function calculate(age){
    var year=365;
    return age*year;
}
var myage=prompt("plese enter your age ");
document.getElementById("price").innerHTML= "your age in days is :"+ " " +calculate(myage)
 تحويل من الدولار الي المصري
function pound(){
    "use strict";
    var dolla = document.getElementById("dollar").value;
    var resalt= dolla * 20;
    document.getElementById("carancy").innerHTML=resalt; 
}
*/  var medo= prompt ("hello familly");
switch (medo){
    case"hossam":
    alert("this is your father");
    break;
case"mohamed":
alert("tiseis your brother");
break;
     case"sara":
     alert("this is your sister")
     break;
default:
alert("please Enter you family name ");
break;

}