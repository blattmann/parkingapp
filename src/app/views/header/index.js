import angular from 'angular';
import uirouter from 'angular-ui-router';

import HeaderController from './headerCtrl';

export default angular
  .module('app.header', [uirouter])
  .controller('HeaderController', HeaderController)
  .name;
