////////////////////////////////////////////start Let  2
//var
function va(){
var x="ahmed";
if(true){
    var x="hossam"
    document.getElementById('se1').innerHTML=x;
}
    document.getElementById('se2').innerHTML=x;
}
va();
//let
function le(){
let x="ahmed";
if(true){
    let x="hossam";
    document.getElementById('se3').innerHTML=x;
}
    document.getElementById('se4').innerHTML=x;
}
le();
////////////////////////////////////////////End Let  2




////////////////////////////////////////////start const  3
const MEDO={
    neme:"ahmed",
    age:24,
    city:"mansora"
}
const Ar=[];
Ar.push('ahmed','hossam','alsyed');
document.getElementById('se5').innerHTML=Ar;

document.getElementById('se6').innerHTML=MEDO.name="medo";//اغير اي حاجه   
Object.freeze(MEDO);//بتجمد الاوبجكت مبنفغش اغير فيه 
//لو جيت اغير دلوقتي مش هينفع 
////////////////////////////////////////////End const  3




////////////////////////////////////////////start arrow Function  4
let a=function(){
    document.getElementById('se7').innerHTML="normal>>"+2;
}
a();

let c=() => document.getElementById('se8').innerHTML="arrow 2>>"+2;  c();
let d= _ => document.getElementById('se9').innerHTML="arrow 3>>"+2; d();

let e=(age) => document.getElementById('se10').innerHTML="my age"+age*2;  e(25);

let f=(n1,n2) =>{
    return n1*n2;
}
document.getElementById('se11').innerHTML=f(2,3);

let g=(n1,n2) =>  n1*n2;
document.getElementById('se12').innerHTML=g(2,3);
////////////////////////////////////////////End arrow Function  4


////////////////////////////////////////////start arrow Function and This 5
function per(){
    this.age=0;
    let me=setInterval(()=>{
        this.age++;
        document.getElementById('se13').innerHTML=this.age;
        if(this.age>100){
            clearInterval(me);
        }
    },100)
}
per();
////////////////////////////////////////////End arrow Function and This 5





//////////////////////////////////////////// 6 start Template literlas [Template sting]
const kind='male';

let strNormal='string 6 \n'+
'hello my friends this me i am '+ (kind === 'male' ? 'mr' : 'ms')+' ahmed hossam \n'+
'i am '+ kind +'\n'+
'i am twenty four yours old';
console.log(strNormal);
document.getElementById('se19').innerHTML=strNormal;



let strNew=`string 6
hello my friends this me i am ${(kind === 'male' ? 'mr' : 'ms')} ahmed hossam 
i am ${kind}
twenty four yours old
i am from mansoura `
console.log(strNew);
document.getElementById('se20').innerHTML=strNew;



let name="Osame",
    age=24;
const myHtmlMarkUp=
//دي الخلاصه اللي بيتعمل بيها كل حاجه 
`
    <br>
    <div class="maintitle">
        <h1 class="title"> put tages into html from js  <h1> 
        <h2 class="name"> my name is ${name} </h2>
        <p class="age"> my age is ${age} </p>
    </div>
`
document.getElementById('se21').innerHTML=myHtmlMarkUp;
////////////////////////////////////////////End Template literlas [Template sting]










//////////////////////////////////////////// 7 start Convert array to String 
let arrOne=[1,2,3],
    arrTwo=[4,5];

// جمع تو اراي في اراي جديده 
let All1=[...arrOne,...arrTwo]
document.getElementById('se22').innerHTML=All1;
// تحويل اراي في فنكشن
function sum(x,y,z){
    return x+y+z;
}
const myNumbers=[2,4,6];
document.getElementById('se23').innerHTML=sum(...myNumbers);// فك العناصر وجمعهم 

// اضافه اراي الي اراي
let custom1=[1,2,3],
    custom2=[4,5],
    Allcustom=[9,8,7,...custom1,6,6,6];
document.getElementById('se24').innerHTML=Allcustom;

//اضافه عناصر لاراي
let arOne=[0,0,0,]; 
arOne.push(2,2,2);
document.getElementById('se25').innerHTML=arOne;


//لو تو اراي عملهم بيساوا بعض بس عاوز اضيف عنصر علي وحده ووحده لا 
let MyArrayOne=[0,0,0,],
    MyArrayTwo=[...MyArrayOne];
MyArrayTwo.push(4,4,4)
document.getElementById('se26').innerHTML=MyArrayOne;
document.getElementById('se27').innerHTML=MyArrayTwo;

//اقل قيمه في الاراي
let matharry=[-2,2,58,5,];
document.getElementById('se28').innerHTML=Math.min(...matharry);
////////////////////////////////////////////End Convert array to String 





//////////////////////////////////////////// 8 Start Default parameters 
function def(name='defaultName', age='defualtAGE', city='defultCity'){//لو مكتبتش حاجه تحت يظهر اللي بيساويه 
    return `hello ${name}, your age is ${age}, your city is ${city}`;
}

document.getElementById('se29').innerHTML=def();
document.getElementById('se30').innerHTML=def('','24','mansoure');

////////////////////////////////////////////End  Default parameters 




//////////////////////////////////////////// 9 start Rest prameters 
function myAll(...parames){//بتعجمع اي عدد من الارقام ادخله 
    let rst=0;
    for( let pram of parames ){
        rst+=pram;
    }
    return rst;
}
document.getElementById('se31').innerHTML=myAll(1,5,20,30,100,200);
////////////////////////////////////////////End Rest prameters 





//////////////////////////////////////////// 10 start new string method 
let nestr="hello world";
document.getElementById('se32').innerHTML=nestr.startsWith('hello');//هل بتبدا ب hello 
document.getElementById('se33').innerHTML=nestr.endsWith('d');//هل بتنتهي d 
document.getElementById('se34').innerHTML=nestr.startsWith('w','6');//بعد عدد  ست ارقام شوف بتبدا ب w 
////////////////////////////////////////////End new string method 


//////////////////////////////////////////// 11 start [repeat && includes]
let mystr="elzero web school";
document.getElementById('se35').innerHTML=mystr.includes('elzero');//هل الجمله دي بتحتوي علي كلمه الزيرو
document.getElementById('se36').innerHTML=mystr.includes('elzero',6);//هل بتحتوي علي الزيرو بعد ست ارقم 

document.getElementById('se37').innerHTML=mystr.repeat(6)// كرر الجمله كلها ست مرات 
////////////////////////////////////////////End  [repeat && includes]





//////////////////////////////////////////// 12 start object 
const usr={
    u_name:'ahmed',
    u_age:24,
    u_city:'mansoura',
}
const {u_name, u_age, u_city, u_them="defult_them"}=usr;
document.getElementById('se38').innerHTML=
`hello i am ${u_name}<br>
my age is ${u_age}<br>
my city is ${u_city}<br>
my them is ${u_them}`;
//طريقه تانيه 
const usr2={
    u_name:'Osama',
    u_age:36,
    u_city:'cairo',
}
const {u_name:thename, u_age:theage, u_city:thecity, u_them:thethem="defult_them"}=usr2;
document.getElementById('se39').innerHTML=
`hello i am ${thename}<br>
my age is ${theage}<br>
my city is ${thecity}<br>
my them is ${thethem}`;

////////////////////////////////////////////end object

//////////////////////////////////////////// 13 start object Exampels
const info={
    u_name:'ahmed',
    u_age:24,
    u_city:'mansoura',
    lang:{
        html:"10%",
        css:"20%",
        js:'99.99%'
    }
}
const{html,css,js}=info.lang;
document.getElementById('se40').innerHTML=`my lang is <br> html ${html} <br> css ${css}  <br> js ${js}`


const info2={
    u_name:'stef',
    u_age:24,
    u_city:'mansoura',
    lang:{
        sass:"10%",
        jQ:"20%",
        paython:'99.99%'
    }
}
const{u_name:infoName, lang:{sass,jQ,ruby="defult_ruby"}}=info2;//الروبي مؤقتا لحد ما اكتبها مع اللغات
document.getElementById('se41').innerHTML=`my name is ${infoName} <br> sass ${sass} <br> JQ ${jQ}<br> ruby is ${ruby}`
////////////////////////////////////////////end object Exampels 




//////////////////////////////////////////// 14 start select from array 
const food=['meat', 'rice', 'pizza', 'burggur'];
const [m, r, p, b]=food;
document.getElementById('se42').innerHTML=`my favourit food is ${r} and ${m} and ${b}`


const food2=['meat', 'rice', 'pizza', 'burggur'];
const [m2, , , b2]=food2;// لو عاوز عناصر معينه
document.getElementById('se43').innerHTML=`my favourit food is ${m2} and ${b2}`
//////////////////////////////////////////// end select from array 


//////////////////////////////////////////// 15 start select from multi array 
const multifood=['meat', 'rice', 'pizza', 'burggur',['orang','banana',['Egorang','Baorang']]];
const [met, ri, pi, bur, [fr1,fr2, [eg, ba] ] ]=multifood;
document.getElementById('se44').innerHTML=
`my multi food are ${met} and ${ri} and ${bur}<br>
my favourite fruit are ${fr1} and ${fr2}<br>
my favourite orange are ${eg} and ${ba}`


//لو عاوز اختار بمزاجي اي اراي
const allfood=['meat', 'fish', 'spansh', 'banana', 'tomato', 'potato'];
const [f1,f2,...otherfood]=allfood;
document.getElementById('se45').innerHTML=`
may first two  fodd are ${f1} and ${f2} <br>
my other food are ${otherfood}<br>
my all food ar ${f1},${f2}and ${otherfood}`
//////////////////////////////////////////// end select from multi array 



//////////////////////////////////////////// 16 start Swap string  
let video="book",
    book="video";
[video,book]=[book,video]
    document.getElementById('se46').innerHTML=`<p> the book is ${book} </p>
    <h1> the video is ${video} </h1>`;

//////////////////////////////////////////// end Swap string  




//////////////////////////////////////////// 17 start  mixed
const medo={
    myname:'ahmed',
    mycity:'mansoura',
    myskills:{
        en:'50%',
        ar:'75%',
        js:{jone:'jsvue', jtwo:'jsangular', jthree:'jsract'},//لازم ا كتب اسم الحاجه في الاوبجكت او اعمل نقطتين فوق بعض واكتب اسم تاني 
        lan:['english','arabic'],//بكتب مسميات عادي ف الاراي
    }
}
const {myname, mycity, myskills:{en, ar, js:{jone:one, jtwo:two, jthree:three},lan:[lone,ltwo]}} = medo;
document.getElementById('se47').innerHTML=`
my name is ${myname}<br>
my city is ${mycity}<br>
my en skill is ${en}<br>
my ar skill is ${ar}<br>
my js sills are ${one} , ${two} and ${three}<br>
my languge are ${lone} and ${ltwo}`;

//////////////////////////////////////////// end mixed


//////////////////////////////////////////// 18 start put all work into function
const medo2={
    myname:'ahmed',
    mycity:'mansoura',
    myskills:{
        en:'50%',
        ar:'75%',
        js:{jone:'jsvue', jtwo:'jsangular', jthree:'jsract'},//لازم ا كتب اسم الحاجه في الاوبجكت او اعمل نقطتين فوق بعض واكتب اسم تاني 
        lan:['english','arabic'],//بكتب مسميات عادي ف الاراي
    }
}

function mywork( {myname, mycity, myskills:{en, ar, js:{jone:one, jtwo:two, jthree:three},lan:[lone,ltwo]}} = medo2){
    document.getElementById('se48').innerHTML=`
    my name is ${myname}<br>
    my city is ${mycity}<br>
    my en skill is ${en}<br>
    my ar skill is ${ar}<br>
    my js sills are ${one} , ${two} and ${three}<br>
    my languge are ${lone} and ${ltwo}`;
}
//انادي عليها من خلال الزراز اللي هناك 
//////////////////////////////////////////// end put all work into function



//////////////////////////////////////////// 19 start function into object 
const fun={
    mymethod (pram){
        return pram;
    }
}
document.getElementById('se49').innerHTML=fun.mymethod('hello from my parameter');
//denamic proparty
const myvar="key";

const myobj={
    myproparty: "myvalue",
    [myvar]: "value"
};
document.getElementById('se50').innerHTML=myobj;
console.log(myobj);
//////////////////////////////////////////// end function into object 



//////////////////////////////////////////// 20 start Set vs Arry
//شبيه بالاراي بس القيم اللي فيها مش بتتكرر 
console.log('شبيه بالاراي بس القيم اللي فيها مش بتتكرر ');
let myset=new Set([1,2,3,2,2,2,2,2,2,2,]);//المتكرر لا 
let myarray=[1,2,3,2,2];//المتكرر اه 
console.log(myset);
console.log(myarray);

console.log('تحويل اراي في ست ');
let myarey2=[1,2,3,4,2,4,4,4,4,];
let myset2=new Set(myarey2);//تحويل اراي في ست 
console.log(myset2);

console.log('ارجع الاراي تاني من الست بس بعد ماشلت المتكرر');
let myNewArray=[...myset2];//تحويل ست في اراي 
console.log(myNewArray);

//////////////////////////////////////////// end Set vs Arry

//////////////////////////////////////////// end Set method
console.log('الميثود الخاصه بالست');
let mybooks1=new Set('books');
console.log(mybooks1);

let mybooks2=new Set().add('bookone').add('booktwo');
console.log(mybooks2);

let mybooks3=new Set('books').add('one').add('tw2o');
console.log(mybooks3);

let mybooks4=new Set();
mybooks4.add('one');
mybooks4.add('two');
mybooks4.add('three');//اضافه عناصر  
console.log(mybooks4);
mybooks4.delete('one');//حذف عناصر 
console.log(mybooks4);
console.log(mybooks4.has('two'));//هل يوجد فيه عنصر معين 
console.log(mybooks4.has('one'));//عشان حذفته فوق
console.log(mybooks4.size);//عدد العناصر الموجوده 
mybooks4.clear();//مسح كل العناصر الموجوده فيها 
console.log(mybooks4);
//////////////////////////////////////////// end Set medthod



//////////////////////////////////////////// start Map 
let mymap=new Map([
    ['10','string'],
    [10,'number'],
    [false,'boolean'],
    [{one:1,two:2},'object'],
    [function me(){}, 'function']
]);
console.log(mymap);
//////////////////////////////////////////// end Map