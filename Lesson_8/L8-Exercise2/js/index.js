//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function(){
    
    //click handler for stopButton to change #stopLight to red
    
    $('#stopButton').click (function(){
        $('#stopLight').css('background-color', 'red');

 //alert ('stop');
       // console.leg('stop');
        
     $('.bulb').css('background-color', 'black');

    });
    
     $('#slowButton').click (function(){
        $('#slowLight').css('background-color', 'orange');
         
    });
    
     $('#goButton').click (function(){
        $('#goLight').css('background-color', 'green');
         
    });
    
    
    
  
/*$( '#stopButton' ).toggleClick(
  function() {
    $( '#stopLight' ).css( 'background-color' , 'red' );
  }, function() {
    $( '#stopLight' ).css ( 'background-color' , 'black' );
  }
); 
*/
    
});


