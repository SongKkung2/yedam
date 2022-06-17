$(function(){
    fadein1();
    fadein2();
    fadein3();
    fadein4();
})


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
//             $('.course-contents li').addClass('animate__animated')
//             $('.course-contents li').removeClass('P-none')
//         }
//     });
// }

function fadein1(){
    $('.intro-text > h2').hide();
    // $('.intro-text > p').hide();


    $(window).scroll(function(){
        var scrollH = $(document).scrollTop();

        let offh2 = $('.intro-text').offset().top;

        let valueh2 = scrollH - offh2;

        if(valueh2 > -500){
            $('.intro-text > h2').fadeIn(300)
        }
        
    })
}

function fadein2(){
    $('.intro-text > p').hide();
    $(window).scroll(function(){
        var scrollH = $(document).scrollTop();

        let offh2 = $('.intro-text').offset().top;

        let valueh2 = scrollH - offh2;
        // console.log(valueh2);

        if(valueh2 > -500){
            $('.intro-text > p').stop().fadeIn(400)
        }
        
    })
}
function fadein3(){
    $('.cards > li').hide();
    $(window).scroll(function(){
        var scrollH = $(document).scrollTop();

        let offli = $('.cards > li').offset().top;

        let valueli = scrollH - offli;
        // console.log(valueli2);

        if(valueli > 970){
            $('.cards > li').eq(0).stop().slideDown(300);
            $('.cards > li').eq(1).stop().slideDown(500);
            $('.cards > li').eq(2).stop().slideDown(700);
        }
        
        
    })
}
function fadein4(){
    $('.people-text > h2').hide();
    $('.people-text > p').hide();
    // $('.intro-text > p').hide();


    $(window).scroll(function(){
        var scrollH = $(document).scrollTop();

        let offh3 = $('.people-text').offset().top;

        let valueh3 = scrollH - offh3;
        console.log(valueh3);

        
        if(valueh3 > -500){
            $('.people-text > h2').fadeIn(300);
            $('.people-text > p').fadeIn(600);
        }
    })
}