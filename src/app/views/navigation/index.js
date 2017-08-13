import angular from 'angular';
import uirouter from 'angular-ui-router';

import NavigationController from './navigationCtrl';

export default angular
  .module('app.navigation', [uirouter])
  .controller('NavigationController', NavigationController)
  .name;
