  var letters = "abcdefghijklmnopqrstuvwxyz";
  letters = letters.split("");
  
  $(window).keydown(function(e){
      key = e.which - 65; //makes a-z = 0-27
      key = letters[key];

      var image = '<img src="' + key + '.jpg">';
      $('body').append(image);
      // $('img[src="' + key + '.jpg"]').show();
  });