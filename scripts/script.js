jQuery( function($){
    $(window).load(function() {
        preloaderFadeOutTime = 2000;
        function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
     });

    
    
    var key =  "&key=8083ae276c0349008d2192334163112";
    var getURL = "https://api.apixu.com/v1/current.json?";
    $.get("https://ipinfo.io", function (response) {
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
    
    $(".tempFF").click(function(event){
        event.preventDefault();
        var temp =  $("#tempFF").text();
        var cel = Math.round((temp-32)*5/9);
        $("#tempF").hide();
        $("#tempCC").html(cel);
        $("#tempC").show();
    });
    
    $(".tempCC").click(function(event){
        event.preventDefault();
        var temp =  $("#tempCC").text();
        var faren = Math.round ((temp*9)/5 + 32);
        $("#tempC").hide();
        $("#tempFF").html(faren);
        $("#tempF").show();
    });
    
});
