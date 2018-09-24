$(document).ready(function () {
    const $window = $(window);
    const skills = document.getElementsByClassName('skills');
    const color = document.getElementsByClassName('color');
    const $nav = $('#navigation');
    const $intro = $('#intro');


    $(skills).each(function(i) {
        $(this).hide();
    });

    $(skills).each(function(i) {
        $(this).delay(400*i).fadeIn();
    });

    $(color).each(function(i) {
        $(this).hide();
    });

    let check = true;
    $window.on('scroll', x => {
        console.log($window.scrollTop());
        if($window.scrollTop() >= 800 ) {
            $(color).each(function(i) {
                $(this).delay(500*i).slideDown();
            });
        }
        if($window.scrollTop() >= 395) {
            if(check == true) {
                $($nav).css('position', 'fixed').hide().slideDown();
                check = false;
            } 
        } else {
            $($nav).css('position', 'initial');
            check = true;
        }
    });
});