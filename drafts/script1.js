$(document).ready(function(){
  // geoPlugin library: https://www.geoplugin.com/webservices/javascript
  var city = geoplugin_city();
  var state = geoplugin_regionName();
  var countryCode = geoplugin_countryCode();
  var lat = geoplugin_latitude();
  var lon = geoplugin_longitude();
  var appid = "&appid=e856c271cf5bd0f42e0a4a749140c1b5"//my app id from openweathermap.org
  var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon=" + lon + appid;//url call for weather data
  $("#city").html(city + ", " + state + ", " + countryCode);//prints city, state, and country

$.getJSON(api, function (data) {
	var kTemp = data.main.temp;//data arrives with temp in kelvin
	var fTemp = Math.round(kTemp * (9/5) - 459.67);//convert kelvin to fahrenheit, round off
	var cTemp = Math.round(kTemp - 273);//convert kelvin to celsius
	var weatherType = data.weather[0].description;
	var windSpeed = Math.round((data.wind.speed) * 2.237);//convert wind speed from metric MPS to MPH, round off
	var tempSwap = true;
//output select weather data to html.
	$("#weatherType").html(weatherType);//description of weather
	$("#windSpeed").html("wind " + windSpeed + " mph");//wind speed
	$("#fTemp").html(fTemp + " &deg;F");//pre-loads temp in fahrenheit
	$("#fTemp").click(function(){//switches between fahrenheit and celsius
		if(tempSwap === false) {
			$("#fTemp").html(cTemp + " &deg;C");
			tempSwap = true;
		} else {
			$("#fTemp").html(fTemp + " &deg;F");
			tempSwap = false;
    }
	  });
  });//end of getJSON

  $.ajax({
    success: function( data ) {
      $("#message").html(JSON.stringify(data)); // displaying original JSON data
      displayWeather(data);
      //data.weather[0].main = 'thunderstom'; // testing background images
      loadBackground(data.weather[0].main);
      weather_result = data;
    }
  });//end of .ajax

  //switch statement to change background images according to the weather conditions
  var des = weatherType.toLowerCase();
  loadBackground = function (des) {
    //des = des.toLowerCase();

    switch (des) {
      case 'drizzle':
        $('body').css("background-image", "url(http://latimesblogs.latimes.com/.a/6a00d8341c630a53ef016765988764970b-640wi)");
        break;
      case 'clouds':
        $('body').css("background-image", "url(http://vignette3.wikia.nocookie.net/phobia/images/5/53/Clouds.jpg/revision/latest?cb=20170123161554)");
        break;
      case 'rain':
        $('body').css("background-image", "url(http://legendsnation.com/wp-content/uploads/2016/05/rain-06.jpg)");
        break;
      case 'snow':
        $('body').css("background-image", "url(https://blog.oup.com/wp-content/uploads/2015/12/Snow-field-1260px.jpg)");
        break;
      case 'clear':
        $('body').css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/2/23/Lake_mapourika_NZ.jpeg)");
        break;
      case 'thunderstorm':
       $('body').css("background-image", "url(https://aos.iacpublishinglabs.com/question/aq/1400px-788px/thunderstorms-made_fdef5d2957edbe09.jpg?domain=cx.aos.ask.com)");
        break;
      default:
        $('body').css("background-image", "url(http://fc04.deviantart.net/fs70/f/2011/192/e/c/blue_summer_skies_by_perbear42-d3loh0v.jpg)");
        break;
    };//end of switch statements
  };//end of loadBackground
} () );//end of (document).ready
