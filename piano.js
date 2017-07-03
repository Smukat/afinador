$(document).ready(function () {


    // CHANGE ACTIVE NAVBAR WHILE SCROLLING
    $("body").scrollspy({target: "#navbarId"});

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });



});

