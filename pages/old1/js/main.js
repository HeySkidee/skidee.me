
//Scroll Function
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

//scroll button
$(function () {
    $('a[href*=#]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});

//magic tab
// store the original tab title
var origTitle = document.title;

// function to change title when focusing on tab
function oldTitle() {
    document.title = origTitle;
}

// function to change title when un-focusing on tab
function newTitle() {
    document.title = 'Hey, Let\'s Connect! 🙂';
}

// bind functions to blur and focus events
window.onblur = newTitle;
window.onfocus = oldTitle;