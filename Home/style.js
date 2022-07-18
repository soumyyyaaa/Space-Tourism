$(window).resize(function() {
    var windowWidth = $(window).width();
    if (windowWidth < '1024') {
        $(".home").removeClass("col-lg-6");
    }
});
