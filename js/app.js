$(document).ready(function(){
    $(".bannerContainer").animate({"margin-left":"130px","opacity":"1"},2500);
    $(".cardContainer").eq(0).hover(function(){
        $(this).children().eq(0).attr("src","./images/car_number_hover.png");
    });
    $(".cardContainer").eq(0).mouseleave(function(){
        $(this).children().eq(0).attr("src","./images/car_number.png");
    });
    

    $(".cardContainer").eq(1).hover(function(){
        $(this).children().eq(0).attr("src","./images/car_number_hover.png");
    });
    $(".cardContainer").eq(1).mouseleave(function(){
        $(this).children().eq(0).attr("src","./images/car_number.png");
    });

    $(".cardContainer").eq(2).hover(function(){
        $(this).children().eq(0).attr("src","./images/car_number_hover.png");
    });
    $(".cardContainer").eq(2).mouseleave(function(){
        $(this).children().eq(0).attr("src","./images/car_number.png");
    });

    $(window).scroll(saymaIsleminiBaslat);


    function saymaIsleminiBaslat(){

        if($(window).scrollTop()>800){
            $(".sayac").each(function(){
                let suankiEleman=$(this);
                jQuery({Counter:0}).animate({Counter:suankiEleman.text()},{duration:1000,easing:"swing",step:function(){
                    suankiEleman.text(parseInt(this.Counter+1));
                }});
            });
            $("#lastCarBlog").show(1500);
            $(window).off("scroll",saymaIsleminiBaslat);
        }
    }
});