$(function() {
 // Your interactions go here
$('.button').click(function() {
console.log('i clicked it');

if ( $('.text').is(":visible") ) {
     $('.text').hide();
} else{
	$('.text').show();
}
});
});
