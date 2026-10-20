const hoursElements = document.querySelectorAll('.hours');
const minutesElements = document.querySelectorAll('.minutes');
const secondsElements = document.querySelectorAll('.seconds');

let totalSeconds = 300;

function updateTimer() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    let minutesStr = String(minutes).padStart(2, '0');
    let secondsStr = String(seconds).padStart(2, '0');

    hoursElements[0].textContent = Math.floor(hours / 10);
    hoursElements[1].textContent = hours % 10;

    minutesElements[0].textContent = minutesStr[0];
    minutesElements[1].textContent = minutesStr[1];

    secondsElements[0].textContent = secondsStr[0];
    secondsElements[1].textContent = secondsStr[1];

    if (totalSeconds > 0) {
        totalSeconds--;
        setTimeout(updateTimer, 1000);
    }
}

updateTimer();


$(".slider-box").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                variableWidth: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                adaptiveHeight: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                dots: true,
                adaptiveHeight: true
            }
        }
    ]
});

$('.slider__plus').click(function () {
    $(this).siblings('.slider__detector').toggleClass('active');
    $(this).parent('.slider').toggleClass('active-slide');
});

$('.slider-box').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.slider__detector').removeClass('active');
    $('.slider').removeClass('active-slide');
});

var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 30
    }, 1000);
    return false;
});

var d = new Date();
for (var i = 0; i < document.querySelectorAll('.year').length; i++) {
    document.querySelectorAll('.year')[i].innerHTML = d.getFullYear();
}