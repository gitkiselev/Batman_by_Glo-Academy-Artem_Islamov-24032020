<<<<<<< HEAD
$(document).ready(function () {
    let tabsItem = $('.tabs-item');
    tabsItem.on('click', function(e) {
        e.preventDefault();
        let activeContent = $(this).attr('href');
        console.log(activeContent);
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active');
    })
=======
$(document).ready(function () {
    let tabsItem = $('.tabs-item');
    tabsItem.on('click', function(e) {
        e.preventDefault();
        let activeContent = $(this).attr('href');
        console.log(activeContent);
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active');
    })
>>>>>>> 5a1c7921c393938f93db21a94ac699b1fdbd88c0
});