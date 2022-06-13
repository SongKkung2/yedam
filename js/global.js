$(function(){
    menu();
    let intervalID = setInterval(slide,5000);
    slide2();
    animatescroll();
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

function slide(){
    let CurrItem = $("#items > li.top")
    let NextItem = CurrItem.next();

    if(!NextItem.length){NextItem = $("#items > li:first")}

    CurrItem.removeClass("top")
    NextItem.addClass("top")
}

function slide2(){
    // let nowimg = $("#about_items > li.on");
    // let nextimg = nowimg.next();

    // if(!nextimg.length){
    //     nextimg = $("#about_items > li:first")
    // }

    $('#play').click(function(){
        let nowimg = $("#about_items > li.on");
        let nextimg = nowimg.next();

        if(!nextimg.length){
            nextimg = $("#about_items > li:first")
        }

        nowimg.removeClass("on")
        nextimg.addClass("on")
    })
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



function animatescroll(){
    $(window).scroll(function () { 
        var scrollV = $(document).scrollTop(); 
        // console.log(scrollV);
        let offText = $('.text-wrap').offset().top;
        let offCourse = $('.course-contents li').offset().top;
        // console.log(off);
    
        let valueText = scrollV - offText
        let valueCourse = scrollV - offCourse
        console.log(valueCourse);
    
        if(valueText > 1300){
            $('.text-wrap').addClass('animate__animated')
            $('.text-wrap').removeClass('P-none')
        }
        if(valueCourse > 1700){
            $('.course-contents li').addClass('animate__animated')
            $('.course-contents li').removeClass('P-none')
        }
    });
}


