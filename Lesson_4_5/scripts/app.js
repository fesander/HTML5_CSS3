jQuery(document).ready(function() {
    jQuery('.welcome').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });

    jQuery('.advantages').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });

    jQuery('.screenshots').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });

    jQuery('.why-choose-us').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });

    jQuery('.benefits').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });

    jQuery('.how_we_works').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });

    jQuery('.gallery').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });

    jQuery('.our-team').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });

    jQuery('.consultation').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });

    jQuery('footer').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInUp',
        offset: 300
    });

    var logo = document.querySelector('.logo');
    logo.onmouseover = function() {
        this.classList.add('animated');
        this.classList.add('swing');
    };

    logo.onmouseout = function() {
        this.classList.remove('animated');
        this.classList.remove('swing');
    };
});

