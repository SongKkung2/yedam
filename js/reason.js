$(document).ready(function() {
    $(window).scroll( function(){
        $('.animate__fadeInUp').each(function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-bottom':'0px'},1000);
            }
            
        }); 
    });
});
