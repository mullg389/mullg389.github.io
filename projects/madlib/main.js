$(function() {
  var endpoints = [
        "https://kquea402.github.io/api.json",
        "https://glics998.github.io/api.json",
        "https://colindharrington.github.io/api.json",
        "https://hoant626.github.io/api.json",
        "https://karla772.github.io/api.json",
        "https://leeh779.github.io/api.json",
        "https://lis874.github.io/api.json",
        "https://phoebechloee.github.io/api.json",
        "https://luw779.github.io/api.json",
        "https://mullg389.github.io/api.json",
        "https://pana005.github.io/api.json",
        "https://raos130.github.io/api.json",
        "https://samsj948.github.io/api.json",
        "https://shaha129.github.io/api.json",
        "https://Mwedd9.github.io/api.json",
        "https://zhenx804.github.io/api.json"
 ];

  $('.button').click(function() {
        console.log( $(this) );
        var url = $(this).data('url');
        console.log(url);

$.get('https://mullg389.github.io/api.json', function(data) {
console.log(data);
var adjective1 = data.adjective1;

$('.word-adjective-1').html(data.adjective1);
$('.word-adjective-2').html(data.adjective2);
$('.art-supply').html(data.artSupply);
$('.computerSoftware').html(data.computerSoftware);
$('.word-websiteName').html(data.websiteName);
$('.art-supply').html(data.artSupply);


$('.word-adjective-1').html(data.adjective1);
$('.word-adjective-2').html(data.adjective2);
$('.art-supply').html(data.artSupply);
$('.computerSoftware').html(data.computerSoftware);
$('.word-websiteName').html(data.websiteName);
$('.art-supply').html(data.artSupply);
$('.foods').html(data.foods.join (', ') );


}).fail(function() {
console.log ('Error in GET request. Handle the error generously.')
console.warn(error.statusText);
   });
});