$(document).ready(function () {

    // if our list has been stored retrieve it and display it
    if (localStorage.getItem('storedtodos')) {
        $('ul').html(localStorage.getItem('storedtodos'));
    }

    /*
     * click handler for submit button "Add"
     * 
     * select submit button and use jQuery click() function to capture the click
     * event and run some code when submit button clicked
     */
    $('input[type="submit"]').click(function (event) {
        // stop the default form action from executing
        event.preventDefault();
        // get the value of the text input field (using jQuery .val() function) and assign it to variable newItem
        var newItem = $('#addItem').val();
        // check if anything was enetered using the variable
        if (newItem != "") {
            // if something was entered add a new list item with value in variable newItem
            $('ul').prepend('<li>' + newItem + '</li>');
            // clear the text input field (using jQuery .val() function)
            $('#addItem').val('');

            // us HTML5 web storage to store my ul contents (collect 'li's)
            var todos = $('ul').html();
            localStorage.setItem('storedtodos', todos);
        } else {
            // show warning message
            $('.message').text('No item entered').addClass('warning').fadeIn().delay(1000).fadeOut();

        }


    });

    /*
     * click handler for list items
     * 
     * When list item is clicked we wanted it to be marked as complete
     * We do this by giving it a class named complete, which we have defined styles
     * for in our CSS file. We also want to reactivate it when clicked again
     * which we can do by removing the class.
     *
     * We can't attach a click handler to our li's directly because our li's are
     * not created until a user enters them
     * So we need to use the delgated events approach using the jQuery .on() function
     *
     * We select the parent ul and specify li as selector in .on() arguments
     * When you click on li, you are also clicking on ul so the handler executes and
     * the li gets passed to the handler through the selector argument
     * 
     */
    $('ul').on("click", "li", function () {
        // jQuery toggleClass() function will add class if element doesn't have it and remove it if it already has it
        $(this).toggleClass('complete').promise().done(function(){
            if($('li:not(.complete)').length==0){
                $('.congrats').animate({
                    left: '0'
                });
            }
        });
        
        
    });


    // clear button - select button and replace ul's html
    $('footer button').click(function () {
        $('ul').html(' ');
        // Clear local storage
        localStorage.clear('storedtodos');
    });


});