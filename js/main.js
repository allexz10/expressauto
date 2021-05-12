
$(function () {

    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,        
        responsive: [
            {
              breakpoint: 841,
              settings: {
                slidesToShow: 2                
              }
            }, 
            {
                breakpoint: 601,
                settings: {
                  slidesToShow: 1               
                }
              },                     
          ]
});



    $(document).on("click", ".footer__logo-images", function(e) {
        e.preventDefault();
        $('body, html').animate({scrollTop: 0}, 1000);
    });

    $(document).on("click", ".button", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top; // получаем координаты блока
        $('body, html').animate({scrollTop: top}, 1000); // плавно переходим к блоку
    });

    

});



