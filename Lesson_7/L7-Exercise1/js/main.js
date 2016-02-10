$(document).ready(function () {

    $('.accordian h3').click(function () {
        $(this).next().slideToggle();
    });

    $('.accordian a').click(function (event) {
        event.preventDefault();
        $(this).parent().find('p').slideToggle();
        $(this).text("Collapse all");
    });
});