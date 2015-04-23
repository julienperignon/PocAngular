var weatherApp = angular.module('weatherApp', []);

weatherApp.factory('weatherService', function ($http) {
    return {
        getWeather: function () {
            //return the promise directly.
            return $http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk')
                      .then(function (result) {
                          //resolve the promise as the data
                          return result.data;
                      });
        }
    }
});

weatherApp.controller('WeatherController', function ($scope, weatherService) {
    console.log("hello");
    $scope.test = "hello world";

    weatherService.getWeather().then(function (weather) {
        $scope.weather = weather;
    });

   console.log("after");
});