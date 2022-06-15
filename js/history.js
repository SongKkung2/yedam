// $(window).scroll(function() { 
// 	var scrollValue = $(document).scrollTop(); 
//     console.log(scrollValue); 

    
// });

$(function(){
    animatescroll2()
})
function animatescroll2(){
    $(window).scroll(function () { 
        var scrollV = $(document).scrollTop(); 
        // console.log(scrollV);
        let offText0 = $('.history-text li').eq(0).offset().top;
        let offText1 = $('.history-text li').eq(1).offset().top;
        let offText2 = $('.history-text li').eq(2).offset().top;
        let offText3 = $('.history-text li').eq(3).offset().top;
        // console.log(off);
    
        let valueText0 = scrollV - offText0
        let valueText1 = scrollV - offText1
        let valueText2 = scrollV - offText2
        let valueText3 = scrollV - offText3
        // console.log(valueText3);
    
        if(valueText0 > 470){
            $('.history-text li').eq(0).addClass('animate__animated')
            $('.history-text li').eq(0).removeClass('P-none')
        }
        if(valueText1 > 890){
            $('.history-text li').eq(1).addClass('animate__animated')
            $('.history-text li').eq(1).removeClass('P-none')
        }
        if(valueText2 > 1200){
            $('.history-text li').eq(2).addClass('animate__animated')
            $('.history-text li').eq(2).removeClass('P-none')
        }
        if(valueText3 > 1600){
            $('.history-text li').eq(3).addClass('animate__animated')
            $('.history-text li').eq(3).removeClass('P-none')
        }
        // if(valueCourse > 1700){
        //     $('.course-contents li').addClass('animate__animated')
        //     $('.course-contents li').removeClass('P-none')
        // }
    });
}