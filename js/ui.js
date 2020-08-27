$(document).ready(function () {
    $('#banner').slick({
        dots: true,
        autoplay: true,
        arrows: false,
    });
    $("#mobile_button").click(function () {
        $(this).toggleClass("active");
        $('#menu').toggleClass("active");
    });
    var ww = $(window).width();

    if (ww <= 991) {
        $('#main_category').slick({
            dots: false,
            infinite: true,
            variableWidth: true,
            responsive: [{
                    breakpoint: 767,
                    settings: {
                        arrows: true,
                        variableWidth: false,
                        slidesToShow: 3
                    }
                }
            ]
        });
    }

    if (ww <= 768) {
        $('#category_menu_button').click(function () {
            $(this).toggleClass("active");
            $('#top_category_menu').toggleClass("active");
        });
    }
    
});