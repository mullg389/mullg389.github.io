$(function() {
	console.log('hello');

	var url = 'http://api.openweathermap.org/data/2.5/weather?q=New+York&appid=5f395234ff0cd88fafddf5236ab45ab5'

	$.get(url, function(data) {
		// The get request fires a callback function when the API request finishes
		console.log(data);
		// The data object contains all the information returned in the API
		var weather = data.weather[0];
		// In this case, the most interesting bit of data is in the weather key
		// Now do something interesting with the data!
		$('body').html('The weather is ' + weather.description);
	    $('body').html('The temperature is ' + data.main.temp);
        
        var temp = data.main.temp;
        var hotKelvin = 316;
        var rgbTemp = temp / hotKelvin * 255;
        console.log('temp', temp);
        console.log('rgbTemp', rgbTemp);

        $('body').css('background', 'rgb(' + rgbTemp + ', 0, 0)');


        var icon = data.weather[0].icon;
        var image = '<img src="' + icon + '.jpg">';
        $('body').append(image);



	});
});