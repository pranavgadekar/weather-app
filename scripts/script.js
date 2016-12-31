jQuery( function($){
    var key =  "&key=8083ae276c0349008d2192334163112";
    var getURL = "https://api.apixu.com/v1/current.json?";
    $.get("http://ipinfo.io", function (response) {
        var city = response.city;
        var region = response.region;
        var country = response.country;
        var loc = response.loc;
        $.ajax({
            url: getURL + 'q=' + city + key,
            success: function (data) {
                var weather = data;
                var newCity = weather.location.name;
                var newCountry = weather.location.country;
                var condition = weather.current.condition.text;
                var temp_c = weather.current.temp_c;
                var temp_f = weather.current.temp_f;
                var img = "https://" + weather.current.condition.icon;
                $("#city-country").html(newCity + ',' + newCountry);
                $("#weather").html(temp_c + ' &#8451; / ' + temp_f + '&#8457;');
                $("#conditions").html(condition);
                $("#weather-image").attr('src',img);
            }
        });
    }, "jsonp");
});
