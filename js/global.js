$(function(){
    menu();
    let intervalID = setInterval(slide,5000);
    slide2();
})

function menu(){
    $('nav').mouseenter(function(){
        $('.lnb').stop().slideDown();
        $('.bg').stop().slideDown();
    });

    $('nav').mouseleave(function(){
        $('.lnb').stop().slideUp();
        $('.bg').stop().slideUp();
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