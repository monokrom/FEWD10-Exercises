$(document).ready(function () {

    var todaysHighF;
    var todaysDescription;

    var tomorrowsHighF;
    var tomorrowsDescription;


    // Use yahoo weather API https://developer.yahoo.com/weather/ to get Melbourne's weather forcast
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=SELECT%20item.forecast%20FROM%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22melbourne%2C%20au%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function (data) {
        todaysHighF = data.query.results.channel[0].item.forecast.high;
        console.log(todaysHighF);
        todaysDescription = data.query.results.channel[0].item.forecast.text;
        console.log(todaysDescription);
        tomorrowsHighF = data.query.results.channel[1].item.forecast.high;
        console.log(tomorrowsHighF);
        tomorrowsDescription = data.query.results.channel[1].item.forecast.text;
        console.log(tomorrowsDescription);

    }).done(function () {
        var todaysHighC = (parseInt(todaysHighF) - 32 ) * (5 / 9);
        todaysHighC = todaysHighC.toFixed(1);

        var tomorrowsHighC = (parseInt(tomorrowsHighF) - 32) * (5 / 9);
       tomorrowsHighC = tomorrowsHighC.toFixed(1);
    
    
        $('.today').append(todaysHighC + 'º ' + todaysDescription);
        $('.tom').append(tomorrowsHighC + 'º ' + tomorrowsDescription);

        if(todaysDescription == 'Partly Cloudy') {
            
            $('body').addClass('pc');
        }
    });





});