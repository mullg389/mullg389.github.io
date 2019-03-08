$(function() {
  // Your interactions go here
 $(document).ready(function(){
	
	$( ".bird" ).click(function() {
	 $( ".bird" ).animate({
	    marginLeft: "7in"
	}, 1500, function() {
		console.log('i flew');
	   });
      });
     });
    });