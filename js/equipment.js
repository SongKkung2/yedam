$(function(){
    toolTab();
})


function toolTab(){
    $(".tab-button").click(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            var idx = $(this).index();
            
            $(".tool-tab > li").eq(idx).removeClass("d-none");
            $(".tool-tab > li").eq(idx).siblings().addClass("d-none");

        }
        

    })
}
