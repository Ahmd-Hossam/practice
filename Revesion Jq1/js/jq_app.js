$(function(){// start page 
    
//  ومهما اغير في طول الناف البودي والسكاشن مش هتتاثر باي حاجه 
//start calculate paddding body  
    $("body").css({
        paddingTop:$('nav').innerHeight()
    });    
//end calculate padding body


//start smoth sccroll to element 
    $('nav ul li a').on("click",function(ev){
        ev.preventDefault();
        $('html,body').animate({
            scrollTop:$($(this).data('scrol')).offset().top
        },1000);
    });
//end smoth scroll to element


//start active class
$('nav ul li a').on('click',function(){
   // $('nav ul li a').removeClass('active');
    //$(this).addClass('active');

    $(this).addClass('active').parent('li').siblings().find('a').removeClass('active')

});
//end active class



//start scroll to top 
/*$(window).on('scroll',function(){بكذا طريقه 
    if($(window).scrollTop() > 1000 ){
        $('.top').fadeIn(1000)
    } else{
        $('.top').fadeOut(1000)
    }
})*/
$(window).on('scroll',function(){
    var v_top=$('.top');
    
    if($(window).scrollTop() > 1000){
        if($(v_top).is(':hidden')){
            $(v_top).fadeIn(700);
        }
    }else{
        $(v_top).fadeOut(500);
    }
});

$('.top').on('click',function(){
    $('body,html').animate({
        scrollTop:"0"
    },1000);
});
//end scroll to top 

// start fixed menu 
$(".icon i").on('click',function(){
    $(this).toggleClass('switch');
    if($(this).hasClass('switch')){
        $('.fixed_menu').animate({
            left:0
        },700);

        $('body').animate({
            paddingLeft:300
        },700);

    }else{
        $('.fixed_menu').animate({
            left:-300
        },700);

        $('body').animate({
            paddingLeft:0
        },700);
    }
});
// end fixed menu 



//start show poup
$('.show_pop').on('click',function(){// عشان كل زراز يخفي اللي يخصه بس 
    $($(this).data('show')).fadeIn(500);
    $(this).fadeOut(500);
});

$('.popup').on('click',function(){
    $(this).fadeOut();
    $('.show_pop').fadeIn();
});

$(".popup .inner").on("click",function(e){
    e.stopPropagation()// عشان مش يخفي اللي جوه
});

$(".popup .inner .close_btn").on("click",function(e){//  زار الاخفاء 
    e.stopPropagation();
    $(this).parentsUntil('.popup').parent().fadeOut(500);
    $('.show_pop').fadeIn();
});

$(document).keydown(function(e){
    if(e.keyCode == 27){
        $('.popup').fadeOut(500);
        $('.show_pop').fadeIn(500)
    }
});
//end show popup


// start effects buttons 
$('.from_left').hover(function(){
    $(this).find('span').eq(0).animate({
        width:'100%'
    },1000);
},function(){
    $(this).find('span').eq(0).animate({
        width:0
    },1000);
});


$('.btn_hov').hover(function(){
    $('.line_hov').animate({
        width:'100%'
    },1000)
},function(){
    $('.line_hov').animate({
        width:0
    },1000);
});
// end effects buttons 

// start proggress
$('.prog span').each(function(){
    $(this).animate({
        width:$(this).data('pro')+'%'
    },500,function(){
        $(this).append("<span class='ap'>"+$(this).data('pro')+"%" + "</span>")
    })
});
// end proggress


//start change color 
$(".change_color ul li ").on('click',function(){
    $('body').attr("data-custom_color",$(this).data('color'));
});
// end change color 








// start slider 
var num_of_li=$('.small_imgs ul li').length,
    margin_right='.5',
    total_margin=margin_right*(num_of_li-1),//انقس واحد من عدد العناصر عشان اخر واحده مش عاوز له مارجن من اليمين
    the_width=(100-total_margin)/num_of_li;

$('.small_imgs ul li').css({
    'width':the_width  +'%',
    'marginRight':margin_right +'%'
});




$('.small_imgs ul li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.main_img img').fadeOut(10).attr('src',$(this).children('img').attr('src')).fadeIn(500)
});



$('.next').on('click',function(){
    if($('.small_imgs ul li.active').is(":last-child")){
        $('.small_imgs ul li').eq(0).click();
    }else{
        $('.small_imgs ul li.active').next().click();
    }
});

$('.prev').on('click',function(){
    if($('.small_imgs ul li.active').is(":first-child")){
        $('.small_imgs ul li:last').click();
    }else{
        $('.small_imgs ul li.active').prev().click();
    }
});
// end slider 


// start toggle class
$('.info i').click(function(){
    $(this).toggleClass('fa-plus fa-minus');
    $(this).parent('h4').siblings('p').toggleClass('hide_p');
});
// end toggle class


//start error message 
$('.error').each(function(){
        $(this).animate({
            'right':0
        },1000,function(){
            $(this).delay(2000).fadeOut(1000);
        });
    
});
//end error message 




//start our form.
var my_place="";
$('[placeholder]').focus(function(){
    my_place=$(this).attr('placeholder');
    $(this).attr('placeholder','');
}).blur(function(){
    $(this).attr('placeholder',my_place);
});

$('.our_form input').on('blur' ,function(){
    if($(this).val()==""){
        $(this).next("span").fadeIn(1000).delay(3000).fadeOut(1000);
    }else{
        $('.our_form span').fadeOut();
    }
});
//end our form




// start KeyCode 
$('.input_one').on('keyup',function(event){
    $('.key_one').html($('.input_one').val());
    var key=event.keyCode || event.which;
    $('.out_one').html(key);
    $('.key_one').html($('.input_one').val());
    $(this).val('');
})
// end KeyCode
// start CharCode 
$('.input_two').on('keyup',function(){
    $('.key_two').html($('.input_two').val());
    $('.out_two').html($(this).val().charCodeAt(0));
    $('.key_tow').html($('.input_two').val());
    $(this).val('');
});
// end CharCode



// start pragraphs 
function pragraphs(valu,maxlengs){
    var a=valu.text().substr(0,maxlengs);
    valu.html(a+"...."+"<span class='more'>"+ " read more" + "</span>");
    $('.more').on('click',function(){
        $(this).parent('p').text('applly the last lessons i dont understand anything but a will try and try agine to be profisional in our work hello my friends this is my project to applly the last lessons i dont understand anything but a will try and try agine to be profisional in our work  hello my friends this is my project to applly the last lessons i dont unde');
    });
}
pragraphs($('.prgaraph_1'),150);
pragraphs($('.prgaraph_2'),250);
pragraphs($('.prgaraph_3'),350);
// end pragraphs 



// start effects butttons
function effect(selector,delay,time,heigh){
    for(i=1 ; i<=delay ; i++){
        $(selector).on('click',function(){
            $(this).animate({
                top:"-="+heigh
            },time).animate({
                top:"+="+heigh
            },time);
        });
    }
}
effect($('.botton_one'),5,500,50);
effect($('.botton_two'),5,300,50);
effect($('.botton_three'),5,200,50);
// end effects buttons




//start same height
var count=0; 
$('.same_height div').each(function(){
    if($(this).height()>count){
        count=$(this).height();
    }
});
$('.same_height div').height(count);
//end same height 




//start suffle cards
var zindex=0;
$('.cards .card').on('click',function(){
    $(this).animate({
        left:'-13%',
        top:30
    },500,function(){
    zindex--;
    $(this).css('z-index',zindex)
    }).animate({
        left:0,
        top:0
    });
});
//end suffle cards



// start blink 
blink();
function blink(){
    $('.blink').fadeIn(1000,function(){
        $(this).fadeOut(1000);
        blink();
    });
}
// end blik




// start add new list 
$('.my_form').on('submit',function(e){
    e.preventDefault();//امنع الافتراضي عشان مش يعمل تسجيل 

    $('.unlist').append('<li>'+ $('.my_input').val()+'</li>');
    $('.my_input').val('')
});

$('.unlist').on('click','li',function(){
    $(this).css('textDecoration','line-through')
    $(this).css('background',"red").delay(200).fadeOut(100)
})
// end add new list 





// start type writer 
var txt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
var a=txt.length;
var b=0;
var c=setInterval(function(){
    $('.type_writer').each(function(){
        $(this).html($(this).html()+txt[b])
    });
    b++;

    if(b == a){
        clearInterval(c);
    };
},100);

// end type writer 





//start calculator
var samry=0;
$('table .price').each(function(){
    samry +=parseInt($(this).text());
});
$('table .all').text(samry).css('fontWeight','bold');
//end calculator 




// start dinamic tabs 
$('.tabs_list li').on('click',function(){
    $(this).addClass('active_tab').siblings().removeClass('active_tab');
    $('.dinamic_tabs .info p').hide();
    $($(this).data('tab')).fadeIn();
});
$('.switch').on('click',function(){
    $('.content').toggleClass('left_list')
})
// end dinamic tabs 




// start auto complate 
    var mails =['yahoo','gmail','org','gov'];
$('.input').on('keyup',function(){
    $('.mail').remove();
    if(! $(this).next().is('.mail_list')){
        $('<ul class="mail_list">' + '</ul>').insertAfter($(this));
    }
    for(var i=0 ; i<mails.length ; i++){
            $('<li class="mail">'+ $(this).val()+'@'+mails[i]+".com"+'</li>').appendTo('.mail_list');
    }
});

$('body').on('click','.mail',function(){
    $('.input').val($(this).text());
    $(this).parent('.mail_list').remove();
})
// end auto complate 
});// end page 