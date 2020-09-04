$(document).ready(function () {
    $('#banner').slick({
        dots: true,
        autoplay: true,
        arrows: false,
    });


    $('#product .big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '#product .small',
        responsive: [{
            breakpoint: 991,
            settings: {
                
            }
        }]
    });

    $('#product .small').slick({
        asNavFor: '#product .big',
        dots: false,
        arrows: true,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                //slidesToShow: 5
            }
        }]
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
            }]
        });
    }

    if (ww <= 768) {
        $('#category_menu_button').click(function () {
            $(this).toggleClass("active");
            $('#top_category_menu').toggleClass("active");
        });
    }

    $("#product_bookmark .title #features").click(function () {
        $('#product_bookmark .title .item').removeClass("active");
        $("#product_bookmark .title #features").addClass("active");
        $('#product_bookmark .content .item').removeClass("active");
        $("#product_bookmark .content #features_content").addClass("active");
    });
    $("#product_bookmark .title #specification").click(function () {
        $('#product_bookmark .title .item').removeClass("active");
        $("#product_bookmark .title #specification").addClass("active");
        $('#product_bookmark .content .item').removeClass("active");
        $("#product_bookmark .content #fspecification_content").addClass("active");
    });
    $("#product_bookmark .title #return").click(function () {
        $('#product_bookmark .title .item').removeClass("active");
        $("#product_bookmark .title #return").addClass("active");
        $('#product_bookmark .content .item').removeClass("active");
        $("#product_bookmark .content #return_content").addClass("active");
    });

});