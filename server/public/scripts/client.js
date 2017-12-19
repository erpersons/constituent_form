var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages']);
console.log('client');
myApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    console.log('myApp -- config')
    $routeProvider
    .when('/', {
        templateUrl: '/index.html', //sources from public
        controller: 'SubmitController as sc'
    })
}); //end myApp.config