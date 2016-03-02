$(document).ready(function () {

    //click handler for submit button "Add"
    $('input[type="submit"]').click(function (event) {
        event.preventDefault(); //stop action happening i.e link - no page refresh
        var newItem = $('#addItem').val();
        if (newItem != "") {
            $('ul').prepend('<li>' + newItem + '</li>');
            $('#addItem').val('');
        }
    });


    // Select newly created item clicked on, selects 'li' and toggles strikethrough (complete) class
    $('ul').on("click", "li", function () {
        $(this).toggleClass('complete');
    });
});


/* OTHER STUFF

$('li').click(function () {
        $(this).toggleClass('complete');

[0].reset()

    });*/