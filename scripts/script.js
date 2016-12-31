jQuery( function( $ ) {
        var key = "&APPID=7ecff7894f846d451f8456148526af0a";
        var getUrl = "http://api.openweathermap.org/data/2.5/weather?";
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                $.ajax( {
                  url: getUrl + 'lat=' + lat + '&lon=' + lon + key,
                  success: function ( data ) {
                    var weather = data;
                    var temperature = weather.main.temp - 273.15;
                    var farenheit = temperature * 9 / 5 + 32;
                    farenheit = Math.round(farenheit);
                    var city = weather.name;
                    var country = weather.sys.country;
                    var condition = weather.weather[0].main;
                    $("#city-country").html(city + ',' + country);
                    $("#weather").html(temperature + ' &#8451; / ' + farenheit + '&#8457;');
                    $("#conditions").html(condition);
                  }
                } );        
            });
        }   
} );