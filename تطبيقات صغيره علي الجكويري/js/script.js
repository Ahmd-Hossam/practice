$(function(){
    'use strict';
 ///////////////////////////////////////start lessson extention
    $.prototype.myRedcolor=function(){
        $(this).css({
            'color':'red'
        });
        return $(this);
    };
    $.prototype.myBluecolor=function(){
        $(this).css({
            'color':'blue'
        });
        return $(this);
    };
    $('.my_div1').myRedcolor();
    $('.my_div2').myBluecolor();
///////////////////////////////////////end lessson extention




///////////////////////////////////////start lessson 2
    $.extend($.expr[':'],{
            redElement:function(elemnt){
                if($(elemnt).css('color') === 'rgb(255,0,0)'){
                    return $(elemnt);
                }
            }
    });
    $('.lesson_two ul li:redElement').css('border','2px solid #f00');
///////////////////////////////////////end lessson 2



///////////////////////////////////////start lessson 3
    $.prototype.center_center=function(){  
        $(this).parent().css('position','relative')
        $(this).css({
            'position':'absolute',
            'top':($(this).parent().height() - $(this).height())/2,
            'left':($(this).parent().width() - $(this).width())/2
        })
    };
    $('.div_one').center_center();
    $('.div_two').center_center();
    $('.div_three').center_center();
    $('.div_four').center_center();
    $('.div_five').center_center();
    $('.div_six').center_center();
    $('.div_seven').center_center();
///////////////////////////////////////end lessson 3




///////////////////////////////////////end lessson 5
    var maxText=$('.lesson_five form textarea').attr('maxlength');
    $('.massage').html('<span>'+ maxText +'</span>' );


    $('.lesson_five form textarea').on('keyup',function(){
        var maxlength = $(this).val().length;
        var min=maxText-maxlength;

        $('.massage').html('<span>'+ min +'</span>');
        if(min === 0){
            $('.letters').text('');
            $('.massage span').css('color','red').html('done')
        }else{
            $('.letters').text('letter');
        }
    });
///////////////////////////////////////end lessson 5


///////////////////////////////////////start lessson 6
$('.clickme').on('click',function(){
    $(this).toggleClass('switch');

    if($(this).hasClass('switch')){
        $(this).html('hide');
        $(this).prev('input').attr('type','text');
    }else{
        $(this).html('show');
        $(this).prev('input').attr('type','password');
    };
});
///////////////////////////////////////end lessson 6


///////////////////////////////////////start lessson 7
var st=setInterval(function(){ 
    var prs=parseInt($('.countdown').html());
// داله اف المختصره 
    prs === 0 ? clearInterval(st):$('.countdown').html(prs -=1);

},1000);
///////////////////////////////////////end lessson 7



///////////////////////////////////////start lessson 8
function auto(){
        $('.sm1').animate({
            top:0
        },1000,function(){
            $('.sm1').animate({
                top:-50
            },1000,function(){
                auto();
            });
        });
};
$('.auto').on('click',function(){
    auto();//لو عوزها تلقائي اخليها فبل الفنكشن اكبيره 
})
///////////////////////////////////////end lessson 8



///////////////////////////////////////start lessson 9
for(var i=1900 ; i<=2020 ; i++){
    $('<option>'+ i +'</option>').appendTo('.selction');
}
///////////////////////////////////////end lessson 9



///////////////////////////////////////start lessson 10
    $('.top').on('click',function(){
        $('body,html').animate({
            scrollTop:0
        },1000)
    });
///////////////////////////////////////end lessson 10




///////////////////////////////////////start lessson 11
$('.al').first().css('width','30%');
$('.al').on('click',function(){
    $(this).animate({
        width:'30%'
    },1000).siblings().animate({
        width:'17.5%'
    });
});
///////////////////////////////////////end lessson 11

///////////////////////////////////////start lessson 11
$('.info').first().show().animate({width:'40%'},1000);
$('.item').on('click',function(){
    $(this).next().show().animate({width:'40%'},1000).
    siblings('.info').animate({width:'0'},500,function(){
        $(this).hide();
    })
})
///////////////////////////////////////end lessson 11


///////////////////////////////////////start lessson 12
$('.lesson_tewelve ul li').on('click',function(){
    $('body').attr('data-allcolor',$(this).attr('data-color'));
})
///////////////////////////////////////end lessson 12


///////////////////////////////////////start lessson 13
    $('.lesson_threeteen ul li').on('click',function(){
        $('html,body').animate({
            scrollTop:$($(this).data('scroll')).offset().top
        },1000);
    });
///////////////////////////////////////end lessson 13
});//end page 