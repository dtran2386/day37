var mainApp = angular.module('HelloWorldApp', []);
var requestURL = 'http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=D&limit=50&apikey=06ea344c402ac50cd0af89518b4a9284';

mainApp.controller('MainAppController', function ($scope, $http) {

    $scope.heroes = []; //empty array for heroes(first ajax request)
    $scope.events = []; //empty array for events(second ajax request)
    $scope.query = '';
    $scope.getDetails = function(input) {
        $http({
            method: 'get',
            url: 'http://gateway.marvel.com:80/v1/public/characters/' + input.id + '/events?limit=50&apikey=06ea344c402ac50cd0af89518b4a9284',
        }).then(function(response) {
            console.log(response);
            $scope.events = response.data.data.results;
        });
        $scope.current = {
            name: input.name,
            image: input.thumbnail.path + '.' + input.thumbnail.extension,
            characters: input,
        };
    };
    
    $http({
        method: 'GET',
        url: requestURL,
    }).then(function (response) {
        $scope.heroes = response.data.data.results;
//        console.log(response);
    });
});