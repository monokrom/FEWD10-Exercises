$(document).ready(function () {

    var count = 0;

$('.up').click(function () {
        $(this).parent().css('background-color', 'green')
    });
    count += 1;
    $('.score span').html(count);
});

$('.down').click(function () {
    count - +1;
    $(this).parent().css('background-color', 'red')
    $('.score span').html(count);

});

});


/*
        var score = score++;
        $('.score span').text(score);
        */