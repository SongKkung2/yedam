$(function(){
    menu();
    mobileMenu();
    burger();
})

function menu(){
    

    $('nav').mouseenter(function(){
        let scrollY = $(document).scrollTop(); 
        if(scrollY > 1){
            if(!$(this).hasClass("hightlight")){$(this).addClass('hightlight')}
        }else{
            $(this).removeClass('hightlight')
        }
        $('.lnb').stop().slideDown();
    });

    $('nav').mouseleave(function(){
        let scrollY = $(document).scrollTop(); 
        if(scrollY < 1){
            $(this).removeClass('hightlight')
        }
        $('.lnb').stop().slideUp();
    });
    
}




// $(function(){
//     //Keep track of last scroll
//     var lastScroll = 0;
//     $(window).scroll(function(event){
//         //Sets the current scroll position
//         var st = $(this).scrollTop();
//         //Determines up-or-down scrolling
//         if (st > lastScroll){
//            //Replace this with your function call for downward-scrolling
//            $('nav').addClass('hightlight')
//         }
//         lastScroll = st;
//     });
// });

$(window).scroll(function() { 
	var scrollValue = $(document).scrollTop(); 
    // console.log(scrollValue); 

    if(scrollValue > 0){
        $('nav').addClass('hightlight')
    } else{
        $('nav').removeClass('hightlight')
    }
});




function mobileMenu(){
    $('.burger').click(function(){
        $('.burger').fadeOut();
        $('.burger-close').fadeIn();
        $('.gnb-mobile-wrap').slideDown();

        $('body').css({'overflow':'hidden'});
        $(document).bind('scroll',function () {
            window.scrollTo(0,0);
        });

    })
    $('.burger-close').click(function(){
        $('.burger').fadeIn();
        $('.burger-close').fadeOut();
        $('.gnb-mobile-wrap').slideUp();

        $(document).unbind('scroll');
        $('body').css({'overflow':'visible'});

    })
    
}


function burger(){
    
    $('#gnb-mobile > li').click(function(){
        if($(this).children('.lnb-mobile').is(":visible")){
            $(this).children('.lnb-mobile').slideUp();
        } else{
            $(this).children('.lnb-mobile').slideDown();
        }
    })
    
    
}