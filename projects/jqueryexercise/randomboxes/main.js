$(function() {
    $('.box').click(function() {
        console.log("hello")
      
        var number=Math.floor((Math.random()
       *5) +0);
       console.log(number)
      
      $('.one').removeClass('active');
      $('.one').eq(number).addClass('active');
   
  });
});
 
