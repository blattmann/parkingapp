routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routes($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');

  // Home
  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        'navigation': {
          template: require('./views/navigation/navigationView.html'),
          controller: 'NavigationController',
          controllerAs: 'home'
        },
        'header': {
          template: require('./views/header/headerView.html'),
          controller: 'HeaderController',
          controllerAs: 'home'
        },
        'content': {
          template: require('./views/home/homeView.html'),
          controller: 'HomeController',
          controllerAs: 'home'
        },
        'footer': {
          template: require('./views/footer/footerView.html'),
          controller: 'FooterController',
          controllerAs: 'home'
        }
      }
    })
    // Parking
    .state('parking', {
      url: '/parking',
      views: {
        'navigation': {
          template: require('./views/navigation/navigationView.html'),
          controller: 'NavigationController',
          controllerAs: 'home'
        },
        'header': {
          template: require('./views/header/headerView.html'),
          controller: 'HeaderController',
          controllerAs: 'home'
        },
        'content': {
          template: require('./views/parking/parkingView.html'),
          controller: 'ParkingController',
          controllerAs: 'home'
        },
        'footer': {
          template: require('./views/footer/footerView.html'),
          controller: 'FooterController',
          controllerAs: 'home'
        }
      }
    });
}
