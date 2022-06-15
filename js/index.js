$(function(){
    let intervalID = setInterval(slide,5000);
    let interval2ID = setInterval(slideM,5000);
    slide2();
    animatescroll();
})


function slide(){
    let CurrItem = $("#items > li.top")
    let NextItem = CurrItem.next();

    if(!NextItem.length){NextItem = $("#items > li:first")}

    CurrItem.removeClass("top")
    NextItem.addClass("top")
}
function slideM(){
    let CurrItem = $("#items2 > li.top")
    let NextItem = CurrItem.next();

    if(!NextItem.length){NextItem = $("#items2 > li:first")}

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


// function animatescroll(){
//     $(window).scroll(function () { 
//         var scrollV = $(document).scrollTop(); 
//         // console.log(scrollV);
//         let offText = $('.text-wrap').offset().top;
//         let offCourse = $('.course-contents li').offset().top;
//         // console.log(off);
    
//         let valueText = scrollV - offText
//         let valueCourse = scrollV - offCourse
//         console.log(valueCourse);
    
//         if(valueText > 1300){
//             $('.text-wrap').addClass('animate__animated')
//             $('.text-wrap').removeClass('P-none')
//         }
//         if(valueCourse > 1700){
//             // $('.course-contents li').addClass('animate__animated')
//             // $('.course-contents li').removeClass('P-none')
//             $('.course-contents li').each(function(index){
//                 $(this).delay(100000).addClass('animate__animated')
//                 $(this).delay(100000).removeClass('P-none')
//             });
//         }
//     });
// }

// $(this)
//       .delay(index*500)
//       .animate({
//         left: '300'
//     }, 'slow')
//       .delay((index+5)*500)
//       .animate({
//         left: '0'
//     }, 'slow')

