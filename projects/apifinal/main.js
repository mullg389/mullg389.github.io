// When the user clicks on <div>, open the popup
// function myFunction() {
  // var photo = document.getElementByClass("picture");
  // photo.classList.toggle("show");
  //  $(document).ready(function() {
  // $(".picture").fadeIn( 4000 );
// $('body').ready(function() { 

//         $('img').hide();
//         $('img').each(function(i) {
//             if (this.complete) {
//                 $(this).fadeIn(4000);
//             } else {
//                 // $(this).load(function() {
//                     // $(this).fadeIn(4000);
// //                 });
// //             }
// //         });
// //     });

// $(".image1").click(function() {

//          $("div#image2").fadeIn('fast');

//       });
//  };

//   $( ".image1" ).click(function() {
// $( "div:hidden:first" ).fadeIn( "slow" );
// });



// document readies function.
// when image1 is clicked, then image 2 appears first,  followed. by image 3
// the lower the number, ex: 2000, then. the fast the img will appear
$(document).ready(function(){
  $('.play-button').click(function() {
    var audio = document.getElementById("audio");
    audio.play();
  });

  $(".picture1").click(function() {
    var row = $(this).closest('.row');
    var picLeft = row.find('.picture').eq(0);
    var picRight = row.find('.picture').eq(1);

    picLeft.fadeIn(2000);
    picRight.fadeIn(3000);
  });

  function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height() / 1.25;

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  var rows = $('.row');

  $(window).scroll(function() {
    rows.each(function() {
      var row = $(this);

      if ( isScrolledIntoView(row) ) {
        var picLeft = row.find('.picture').eq(0);
        var picRight = row.find('.picture').eq(1);

        picLeft.fadeIn(2000);
        picRight.fadeIn(3000);
      }
    });
  });

});



// //         $(".image4").fadeIn(2000);
//     $(".image5").fadeIn(3000);
//         $(".image6").fadeIn(3000);
//     $(".image7").fadeIn(3000);
//         $(".image8").fadeIn(3000);
//     $(".image9").fadeIn(3000);

// $(document).ready(function(){
//   $(".image4").click(function(){
//     $(".image5").fadeIn("slow");
//     $(".image6").fadeIn(3000);
//   });
// });



