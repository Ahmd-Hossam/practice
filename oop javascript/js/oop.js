////////////////////////////////////////////start lesson num two 
var obj={
    name:"ahmed",
    age:24,
    city:"mansoura",
    walk:function(){// ممكن مش اكتب كلمه  فانكنشن واشيل النقطتين
        var a="100vg";
        return a;
    },
    info(){
        var b=this.city;
        return b;
    },
    milti(){
        var all=() => {
            var y="my name is"+this.name;
            return y;
        }
        all();
    }
}
var a=delete obj.age; // لو عاوز احذف خاصيه    //لو جربت اطبع الاج مش هيطبع 
document.getElementById('se1').innerHTML=a;
document.getElementById('se2').innerHTML='name'+ ' '+ '='+ ' '+obj.name;
document.getElementById('se3').innerHTML='walk'+ ' '+ '='+ ' '+obj.walk();
document.getElementById('se4').innerHTML='city '+ ' '+ '='+ ' '+obj.info();
document.getElementById('se5').innerHTML=obj.milti();
////////////////////////////////////////////end lesson num two 
