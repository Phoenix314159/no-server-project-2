angular.module('solar-system', ['ui.router'])
.config(function ($urlRouterProvider, $stateProvider) {
    $stateProvider
        .state('sun', {
            url:'/sun',
            template: '<sun></sun>',
            component: 'sun'
        })
        .state('mercury', {
            url:'/mercury',
            template: '<mercury></mercury>',
            component: 'mercury'
        })
        .state('venus',{
            url: '/venus',
            template: '<venus></venus>',
            component: 'venus'
        })
        .state('earth', {
            url: '/earth',
            template: '<earth></earth>',
            component: 'earth'
        })
        .state('mars', {
            url: '/mars',
            templateUrl: './views/mars.html',
            component: 'mars'
        })
        .state('jupiter', {
            url: '/jupiter',
            templateUrl: './views/jupiter.html',
            component: 'jupiter'
        })
        .state('saturn', {
            url: '/saturn',
            templateUrl: './views/saturn.html',
            component: 'saturn'
        })
        .state('uranus', {
            url: '/uranus',
            templateUrl: './views/uranus.html',
            component: 'uranus'
        })
        .state('neptune',{
            url:'/neptune',
            templateUrl: './views/neptune.html',
            component: 'neptune'
        });
    $urlRouterProvider.otherwise('/');

})