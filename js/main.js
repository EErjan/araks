try {
    $(document).ready(function () {
        $(".fancybox").fancybox();
    });
} catch (e) {

}

try {
    $('.phone-musk').inputmask("+\\9\\9\\ (89)9 999-99-99");
} catch (e) {

}


$(document).on('click', '.hamburger-menu', function () {
    $('.navigation__drawer').toggleClass('active');
    $('.backdrop').toggleClass('active');
});


$(document).on('click', '.backdrop', function () {
    $('.navigation__drawer').removeClass('active');
    $(this).removeClass('active');
});


try {
    AOS.init();
} catch (e) {

}


