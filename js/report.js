
$(function(){
    animatescroll();
})

function animatescroll(){
    $(window).scroll(function () { 
        var scrollV = $(document).scrollTop(); 
        // console.log(scrollV);
        /* let offText = $('.why-text').offset().top; */
        let offCourse = $('.report-text > p').offset().top;
        // console.log(off);
    
        /* let valueText = scrollV - offText */
        let valueCourse = scrollV - offCourse
        console.log(valueCourse);
    
        if(valueCourse > 660){
            $('.report-text > p').addClass('animate__animated')
            $('.report-text > p').removeClass('P-none')
        }
        /* if(valueCourse > 1700){
            $('.course-contents li').addClass('animate__animated')
            $('.course-contents li').removeClass('P-none')
        } */
    });
}