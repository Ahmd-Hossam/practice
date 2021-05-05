/* انشاء الكانفاس  */
var canv=document.createElement('canvas');
canv.id="can_id";
document.body.appendChild(canv);


/* استدعاه في الصفحه وتنسيقه   */
var mycan=document.getElementById('can_id');
mycan.width=window.innerWidth-22;
mycan.height=window.innerHeight-30;
mycan.style.margin="10px 0 0 10px ";
mycan.style.border="2px solid #000";

/*  عمل القماشه اللي هنشتغل عليها  */
var mycontext=mycan.getContext('2d');

/* نبدا الشغل  */

    for(var i=0; i<=500; i++){
        var x=Math.random() * window.innerWidth-52;
        var y=Math.random() * window.innerHeight-55;
        mycontext.beginPath();
        mycontext.arc(x,y,50,0,Math.PI *2,false);
        mycontext.strokeStyle="green";
        mycontext.stroke();
    }


