$(window).on('resize', function () {
    var win = $(this);
    if (win.width() < 768) {
        $('.mainnavi ul.nav').removeClass('nav-pills');
    }
    else {
        $('.mainnavi ul.nav').addClass('nav-pills');
    }
});
