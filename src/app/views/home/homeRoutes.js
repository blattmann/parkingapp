routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'header': {
          template: '<h1>Header</h1>'
        },
        'content': {
          template: require('./homeView.html'),
          controller: 'HomeController',
          controllerAs: 'home'
        },
        'footer': {
          template: require('../footer/footerView.html'),
          controller: 'FooterController',
          controllerAs: 'home'
        }
      }
    });
}
