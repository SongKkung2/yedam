
$(function(){
    animatescroll();
})

function animatescroll(){
    $(window).scroll(function () { 
        var scrollV = $(document).scrollTop(); 
        // console.log(scrollV);
        let offText = $('.step1 > ul').offset().top;
        let offCourse = $('.step2 > ul').offset().top;
        let offLeft = $('.step3 > ul').offset().top;
        let offRight = $('.step4 > ul').offset().top;
        // console.log(off);
    
        let valueText = scrollV - offText
        let valueCourse = scrollV - offCourse
        let valueLeft = scrollV - offLeft
        let valueRight = scrollV - offRight

        console.log(valueLeft);
    
        if(valueText > 400){
            $('.step1 > ul').addClass('animate__animated')
            $('.step1 > ul').removeClass('P-none')
        }
        if(valueCourse > 890){
            $('.step2 > ul').addClass('animate__animated')
            $('.step2 > ul').removeClass('P-none')
        }
        if(valueLeft > 1200){
            $('.step3 > ul').addClass('animate__animated')
            $('.step3 > ul').removeClass('P-none')
        }
        if(valueRight > 1600){
            $('.step4 > ul').addClass('animate__animated')
            $('.step4 > ul').removeClass('P-none')
        }
    });
}