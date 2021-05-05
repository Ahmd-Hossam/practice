
                                         //num1
var can=document.getElementById('my_canvas1');
var context=can.getContext('2d');
context.fillStyle="#000"; /*اعمل لون وعبيه في المستطيل بالحجم ده وممكن اعمل كذا واحد مع تغيير المكان */
context.fillRect(10,10,50,50);
context.fillStyle="#080";
context.fillRect(20,20,50,50);

                                         //num2
var can=document.getElementById('my_canvas2');
var context2=can.getContext('2d');
context2.strokeStyle="#080";/* اعمل مستطيل بس فاضس بوردر بس */
context2.strokeRect(20,20,50,50);

                                         //num3
var can=document.getElementById('my_canvas3');
var context3=can.getContext('2d');
context3.fillStyle="#080";
context3.fillRect(0,0,400,200); /* عبيلي المحتوي بالحجم ده واللون ده بس شيل منه الجزء ده  */
context3.clearRect(0,0,100,100);


/****************************************** canvas 2 *************************************/


                                         //num4
var can=document.getElementById('my_canvas4');
var context4=can.getContext('2d');
var  can_width=can.width; /*بيجيب الويدز بتاع الكانفس من ملف الاستايل  */
var  can_height=can.height;/*بيجيب الهيت بتاع الكانفس من ملف الاستايل ويديه للكان  */

context4.fillStyle="#ddd";
context4.fillRect(2,2,can_width-4,150-4);
context4.strokeStyle="#f00"; /* لون الاستروكس */
context4.lineWidth=5;/*عرض الخط  */
/* top left line */
context4.moveTo(10,10);/*  ابدا من اليسار واليمين   */
context4.lineTo(150,73); /*اتحرك من اليسار واليمين  */
/* top right */
context4.moveTo(290,10);
context4.lineTo(150,73);
/* bottom left */
context4.moveTo(10,136);
context4.lineTo(150,73);
/* bottom right */
context4.moveTo(290,136);
context4.lineTo(150,73);
context4.stroke();

                                         //num5
var can=document.getElementById('my_canvas5');
var context5=can.getContext('2d');

context5.fillStyle="#666";
context5.fillRect(2,2,300-4,150-4)
context5.font='40px Arial';

context5.fillStyle="red";
context5.fillText('M',30,60);
context5.fillStyle="green";
context5.fillText('E',45,70);
context5.fillStyle="blue";
context5.fillText('D',50,85);
context5.fillStyle="#f80";
context5.fillText('O',55,95);
context5.strokeStyle="#fff";
context5.strokeText('medo',100,100);

                                         //num6
/*  id انشاء الكانفس ونعمله */
var creat=document.createElement('canvas');
creat.id="my_canvas6";
/* استدعاء المكان اللي هننشئ فيه الكانفس  */
var get=document.getElementById('canv_id');
/* اضافه الكانفس للدف اللي انا استدعيته  */
get.appendChild(creat);

/* نشتغل طبيعي بقي  */
var can6=document.getElementById('my_canvas6');
var context6=can6.getContext('2d');

context6.fillStyle="#777";
context6.fillRect(2,2,300-4,150-4); //عشان البوردر

context6.font='40px Arial';
 /*context6.lineWidth="5";*/   // عرض الخط ممكن اعمله بس لازم يتعمل قدام كل واحد 
context6.strokeStyle="red";
context6.strokeText('medo',20,50);
context6.strokeStyle="green";
context6.strokeText('medo',20,52);

context6.lineWidth="4";
context6.fillStyle="#fff";
context6.fillText('medo',100,100);
context6.lineWidth="3";
context6.strokeStyle="#f00";
context6.strokeText('medo',100,100);
context6.lineWidth="2";
context6.strokeStyle="#222";
context6.strokeText('medo',100,100);

