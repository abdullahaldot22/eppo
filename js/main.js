$(window).on("load", function() {
    $("#load").fadeOut(200);
});

var slider = document.querySelector('.offcanvas');
var block = document.querySelector('#block');
var background = document.querySelector('body');
var dropdown = document.querySelector('#dropdown-mnu');
var videoI = document.getElementById("vid-i");
var videoII = document.getElementById("vid-ii");
var videoIII = document.getElementById("vid-iii");


function openfunction() {
    slider.style.opacity = '1';
    slider.style.visibility = 'visible';
    slider.style.left = '0';
    block.style.display = 'block';
    disScroll();
}

function closefunction() {
    slider.style.opacity = '0';
    slider.style.visibility = 'hidden';
    slider.style.left = '-250px';
    block.style.display = 'none';
    enScroll();
}

function disScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enScroll() {
    window.onscroll = function() {};
}

$(".dropdown-toggle").click(function() {
    $(".dropdown-mnu").toggle(".show");
});

$(".bg-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 9000,
    autoplay: false,
    speed: 200,
    easing: 'linear',
    adaptiveHeight: true
});

$(".lazyslide").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 9000,
    autoplay: false,
    speed: 200,
    easing: 'linear',
    adaptiveHeight: true
});

sal();

$(document).ready(function() {
    $('.venobox').venobox();
});


$("#pbutton-i").on("click", function() {
    if (videoI.paused) {
        document.getElementById("vid-i").play();
        document.getElementById("play-i").style.display = "none";
        document.getElementById("pause-i").style.display = "block";
    } else {
        document.getElementById("vid-i").pause();
        document.getElementById("play-i").style.display = "block";
        document.getElementById("pause-i").style.display = "none";
    }
});


$("#pbutton-ii").on("click", function() {
    if (videoII.paused) {
        document.getElementById("vid-ii").play();
        document.getElementById("play-ii").style.display = "none";
        document.getElementById("pause-ii").style.display = "block";
    } else {
        document.getElementById("vid-ii").pause();
        document.getElementById("play-ii").style.display = "block";
        document.getElementById("pause-ii").style.display = "none";
    }
});


$("#pbutton-iii").on("click", function() {
    if (videoIII.paused) {
        document.getElementById("vid-iii").play();
        document.getElementById("play-iii").style.display = "none";
        document.getElementById("pause-iii").style.display = "block";
    } else {
        document.getElementById("vid-iii").pause();
        document.getElementById("play-iii").style.display = "block";
        document.getElementById("pause-iii").style.display = "none";
    }
});


$('.count').counterUp({
    delay: 1,
    time: 3000,
});

$('.ex-count').counterUp({
    delay: 1,
    time: 500,
});

$(".person").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    autoplaySpeed: 9000,
    speed: 200,
});

$(".bl-slider").slick({
    autoplay: false,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 6000,
    speed: 1400,
    adaptiveHeight: true
});

$(".member").slick({
    autoplay: false,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 6000,
    speed: 1400,
    adaptiveHeight: false,
});

$(".prtnr-slide").slick({
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 1400,
    adaptiveHeight: false,
});


// $(".accordion").function() {};
// $(".accordion-item").appendClass("border").siblings().removeClass("border");

// function border() {
//     add("#border");
//     siblings().remove("#border");
// }