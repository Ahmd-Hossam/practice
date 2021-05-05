$(function(){
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
})